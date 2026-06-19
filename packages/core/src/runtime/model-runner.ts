import type { CompiledAgent, CompiledJourney } from "../definition.js";
import { runtimeLogger } from "../logging.js";
import {
  addTelemetryContentEvent,
  telemetryAttributes,
  telemetryEventNames,
  telemetrySpanNames,
  withTelemetrySpan,
  type TelemetrySpanOptions,
} from "../telemetry.js";
import type { ConversationRecord } from "../storage.js";
import { waitForAbort } from "./cancellation.js";
import type {
  AgentModelSet,
  AnyTool,
  ConversationChannel,
  ModelAdapter,
  ModelMessage,
  ModelVisiblePromptPayload,
  ModelToolCall,
  ModelToolDefinition,
  TextGenerationInput,
  TextGenerationOutput,
} from "../types.js";
import { isAbortLikeError } from "./errors.js";
import { resolveActiveStates } from "./journey-state.js";
import { applyModelPromptProfile } from "./prompt-profiles.js";
import { redactModelInput } from "./privacy.js";
import { executeToolWithRetry } from "./state-runners.js";
import { createToolResultMessage, uniqueTools } from "./tools.js";
import type { RuntimeEventEmitter, RuntimeOptions, StateMachineTurnResult } from "./types.js";
import { evaluateToolPolicyUse, policyBlockForEvent } from "./policy-enforcement.js";
import { evaluateToolApprovalUse, requestToolApproval } from "./approvals.js";

export async function generateTextWithTrace(args: {
  options: RuntimeOptions;
  conversationId: string;
  model: ModelAdapter;
  input: TextGenerationInput;
}): Promise<TextGenerationOutput> {
  const logger = runtimeLogger(args.options, { conversationId: args.conversationId });
  logger.debug({
    role: args.input.role,
    promptTask: args.input.promptTask,
    provider: args.model.provider,
    model: args.model.model,
    messageCount: args.input.messages.length,
    toolCount: args.input.tools?.length ?? 0,
  }, "Preparing model call");
  const metric: NonNullable<TelemetrySpanOptions["metric"]> = {
    kind: "model" as const,
    attributes: {
      [telemetryAttributes.modelRole]: args.input.role,
      [telemetryAttributes.modelProvider]: args.model.provider,
      [telemetryAttributes.modelName]: args.model.model,
    },
  };
  return withTelemetrySpan(args.options, {
    name: telemetrySpanNames.modelGenerate,
    attributes: {
      [telemetryAttributes.conversationId]: args.conversationId,
      [telemetryAttributes.modelRole]: args.input.role,
      [telemetryAttributes.modelProvider]: args.model.provider,
      [telemetryAttributes.modelName]: args.model.model,
      [telemetryAttributes.promptTask]: args.input.promptTask,
    },
    metric,
  }, async (span) => {
    addTelemetryContentEvent(args.options, telemetryEventNames.modelInput, {
      "cognidesk.model.role": args.input.role,
      "cognidesk.prompt.task": args.input.promptTask,
      "cognidesk.model.messages": args.input.messages,
      "cognidesk.model.prompt_payload": args.input.promptPayload,
      "cognidesk.model.tools": args.input.tools?.map((tool) => ({
        name: tool.name,
        description: tool.description,
      })),
    });
    const redactedInput = await redactModelInput(args.options, args.conversationId, args.input);
    const output = await waitForAbort(args.model.generateText({
      ...redactedInput,
      messages: await applyModelPromptProfile({
        model: args.model,
        input: redactedInput,
      }),
    }), args.input.signal);
    logger.debug({
      role: args.input.role,
      provider: args.model.provider,
      model: args.model.model,
      outputTextLength: output.text.length,
      toolCallCount: output.toolCalls?.length ?? 0,
    }, "Model call returned");
    span.setAttribute("cognidesk.model.output_text_length", output.text.length);
    span.setAttribute("cognidesk.model.tool_call_count", output.toolCalls?.length ?? 0);
    if (output.usage?.totalTokens !== undefined) span.setAttribute("cognidesk.model.usage.total_tokens", output.usage.totalTokens);
    if (output.usage) metric.tokenUsage = output.usage;
    addTelemetryContentEvent(args.options, telemetryEventNames.modelOutput, {
      "cognidesk.model.role": args.input.role,
      "cognidesk.model.text": output.text,
      "cognidesk.model.structured": output.structured,
      "cognidesk.model.tool_calls": output.toolCalls,
      "cognidesk.model.usage": output.usage,
    });
    return output;
  }).catch((error) => {
    logger.error({
      role: args.input.role,
      provider: args.model.provider,
      model: args.model.model,
      error: error instanceof Error ? error.message : "Model call failed.",
    }, "Model call threw");
    throw error;
  });
}

export async function generateResponseWithTools(args: {
  options: RuntimeOptions;
  requireConversationRecord(conversationId: string): Promise<ConversationRecord>;
  applyBuiltInLifecycleTool(input: {
    toolName: string;
    input: unknown;
    conversationId: string;
    emit: RuntimeEventEmitter;
  }): Promise<boolean>;
  conversation: ConversationRecord;
  model: ModelAdapter;
  messages: ModelMessage[];
  promptPayload?: ModelVisiblePromptPayload;
  tools: AnyTool[];
  modelTools: ModelToolDefinition[];
  selectedJourney: CompiledJourney | null;
  stateMachineTurn: StateMachineTurnResult | null;
  channel?: ConversationChannel;
  signal?: AbortSignal;
  onTextDelta?(textDelta: string): Promise<void> | void;
  emit: RuntimeEventEmitter;
}): Promise<TextGenerationOutput> {
  const messages = [...args.messages];
  const maxToolRounds = 4;
  const logger = runtimeLogger(args.options, { conversationId: args.conversation.id });
  for (let round = 0; round <= maxToolRounds; round += 1) {
    logger.debug({
      round,
      maxToolRounds,
      messageCount: messages.length,
      modelToolCount: args.modelTools.length,
    }, "Starting response generation round");
    const response = await generateTextWithTrace({
      options: args.options,
      conversationId: args.conversation.id,
      model: args.model,
      input: {
        role: "response",
        promptTask: "response",
        promptPayload: args.promptPayload ?? {
          messages,
          tools: args.modelTools.map((tool) => ({
            name: tool.name,
            ...(tool.description ? { description: tool.description } : {}),
          })),
        },
        messages,
        ...(args.modelTools.length > 0 ? { tools: args.modelTools, toolChoice: "auto" as const } : {}),
        ...(args.onTextDelta ? { onTextDelta: args.onTextDelta } : {}),
        ...(args.signal ? { signal: args.signal } : {}),
      },
    });
    if (!response.toolCalls?.length) {
      logger.debug({ round }, "Response generation completed without tool calls");
      return response;
    }
    logger.info({
      round,
      toolCallNames: response.toolCalls.map((call) => call.name),
    }, "Model requested tool calls");
    if (round === maxToolRounds) {
      logger.error({ maxToolRounds }, "Model exceeded tool round limit");
      await args.emit({
        conversationId: args.conversation.id,
        type: "error",
        data: {
          code: "tool_round_limit_exceeded",
          message: `Model requested tools after ${maxToolRounds} tool rounds.`,
        },
      });
      return { ...response, toolCalls: [] };
    }

    messages.push({
      role: "assistant",
      content: response.text,
      toolCalls: response.toolCalls,
    });
    const results = await executeModelToolCalls({
      options: args.options,
      applyBuiltInLifecycleTool: args.applyBuiltInLifecycleTool,
      conversation: args.conversation,
      calls: response.toolCalls,
      tools: args.tools,
      selectedJourney: args.selectedJourney,
      stateMachineTurn: args.stateMachineTurn,
      ...(args.channel ? { channel: args.channel } : {}),
      emit: args.emit,
      ...(args.signal ? { signal: args.signal } : {}),
    });
    messages.push(...results);
    const lifecycle = await args.requireConversationRecord(args.conversation.id);
    if (lifecycle.lifecycle !== "active") {
      logger.info({ lifecycle: lifecycle.lifecycle }, "Stopping response generation after lifecycle change");
      return { text: "", providerMetadata: { interruptedByLifecycle: true } };
    }
  }
  return { text: "" };
}

export async function executeModelToolCalls(args: {
  options: RuntimeOptions;
  applyBuiltInLifecycleTool(input: {
    toolName: string;
    input: unknown;
    conversationId: string;
    emit: RuntimeEventEmitter;
  }): Promise<boolean>;
  conversation: ConversationRecord;
  calls: ModelToolCall[];
  tools: AnyTool[];
  selectedJourney: CompiledJourney | null;
  stateMachineTurn: StateMachineTurnResult | null;
  channel?: ConversationChannel;
  signal?: AbortSignal;
  emit: RuntimeEventEmitter;
}): Promise<ModelMessage[]> {
  const byName = new Map(args.tools.map((toolDefinition) => [toolDefinition.name, toolDefinition]));
  const messages: ModelMessage[] = [];
  const logger = runtimeLogger(args.options, { conversationId: args.conversation.id });
  for (const call of args.calls) {
    logger.debug({ toolName: call.name }, "Resolving model tool call");
    const toolDefinition = byName.get(call.name);
    if (!toolDefinition) {
      const error = `Tool '${call.name}' is not available in the active tool scope.`;
      logger.error({ toolName: call.name, error }, "Model requested unavailable tool");
      await args.emit({
        conversationId: args.conversation.id,
        type: "tool.completed",
        data: { toolName: call.name, success: false, error },
      });
      messages.push(createToolResultMessage(call, { error }));
      continue;
    }

    const parsedInput = toolDefinition.input.safeParse(call.input);
    if (!parsedInput.success) {
      const error = parsedInput.error.message;
      logger.error({ toolName: call.name, error }, "Model tool input validation failed");
      await args.emit({
        conversationId: args.conversation.id,
        type: "tool.completed",
        data: { toolName: toolDefinition.name, success: false, error },
      });
      messages.push(createToolResultMessage(call, { error }));
      continue;
    }

    const policyDecision = evaluateToolPolicyUse({
      options: args.options,
      conversation: args.conversation,
      tool: toolDefinition,
      ...(args.channel ? { channel: args.channel } : {}),
    });
    if (policyDecision && !policyDecision.allowed) {
      const policyBlock = policyBlockForEvent(policyDecision);
      const error = policyDecision.message;
      logger.warn({
        toolName: toolDefinition.name,
        code: policyDecision.code,
        blockers: policyDecision.blockers,
      }, "Model tool call blocked by channel policy");
      await args.emit({
        conversationId: args.conversation.id,
        type: "tool.completed",
        data: {
          toolName: toolDefinition.name,
          success: false,
          ...(args.selectedJourney ? { journeyId: args.selectedJourney.id } : {}),
          error,
          policyBlock,
        },
      });
      messages.push(createToolResultMessage(call, { error, policyBlock }));
      continue;
    }

    const approvalDecision = evaluateToolApprovalUse(args.options, {
      conversation: args.conversation,
      tool: toolDefinition,
      input: parsedInput.data,
      ...(args.channel ? { channel: args.channel } : {}),
      ...(args.selectedJourney ? { journeyId: args.selectedJourney.id } : {}),
      ...(args.stateMachineTurn?.activeStateIds[0] ? { stateId: args.stateMachineTurn.activeStateIds[0] } : {}),
    });
    if (approvalDecision.outcome === "require-approval") {
      const approval = await requestToolApproval({
        emit: args.emit,
        conversation: args.conversation,
        tool: toolDefinition,
        input: parsedInput.data,
        decision: approvalDecision,
        ...(args.channel ? { channel: args.channel } : {}),
        ...(args.selectedJourney ? { journeyId: args.selectedJourney.id } : {}),
        ...(args.stateMachineTurn?.activeStateIds[0] ? { stateId: args.stateMachineTurn.activeStateIds[0] } : {}),
      });
      const pending = {
        approvalId: approval.data.approvalId,
        status: "pending-approval",
        reason: approval.data.reason,
      };
      await args.emit({
        conversationId: args.conversation.id,
        type: "tool.completed",
        data: {
          toolName: toolDefinition.name,
          success: false,
          ...(args.selectedJourney ? { journeyId: args.selectedJourney.id } : {}),
          error: approval.data.reason ?? "Tool execution is pending approval.",
          approval: { approvalId: approval.data.approvalId, status: "requested" },
        },
      });
      messages.push(createToolResultMessage(call, pending));
      continue;
    }

    await args.emit({
      conversationId: args.conversation.id,
      type: "tool.started",
      data: {
        toolName: toolDefinition.name,
        ...(args.selectedJourney ? { journeyId: args.selectedJourney.id } : {}),
      },
    });
    try {
      const idempotencyKey = toolDefinition.idempotencyKey?.({
        input: parsedInput.data,
        conversationId: args.conversation.id,
      });
      const parsedOutput = await withTelemetrySpan(args.options, {
        name: telemetrySpanNames.toolExecute,
        attributes: {
          [telemetryAttributes.conversationId]: args.conversation.id,
          [telemetryAttributes.toolName]: toolDefinition.name,
          ...(args.selectedJourney ? { [telemetryAttributes.journeyId]: args.selectedJourney.id } : {}),
        },
        metric: {
          kind: "tool",
          attributes: {
            [telemetryAttributes.toolName]: toolDefinition.name,
            ...(args.selectedJourney ? { [telemetryAttributes.journeyId]: args.selectedJourney.id } : {}),
          },
        },
      }, async () => {
        addTelemetryContentEvent(args.options, telemetryEventNames.toolInput, {
          "cognidesk.tool.name": toolDefinition.name,
          "cognidesk.tool.input": parsedInput.data,
        });
        const output = await executeToolWithRetry({
          options: args.options,
          tool: toolDefinition,
          input: parsedInput.data,
          conversationId: args.conversation.id,
          journeyContext: args.stateMachineTurn?.journeyContext ?? {},
          emit: args.emit,
          ...(idempotencyKey ? { idempotencyKey } : {}),
          ...(args.signal ? { signal: args.signal } : {}),
        });
        const parsed = toolDefinition.output.parse(output);
        addTelemetryContentEvent(args.options, telemetryEventNames.toolOutput, {
          "cognidesk.tool.name": toolDefinition.name,
          "cognidesk.tool.output": parsed,
        });
        return parsed;
      });
      logger.debug({ toolName: toolDefinition.name }, "Model tool output validated");
      await args.emit({
        conversationId: args.conversation.id,
        type: "tool.completed",
        data: {
          toolName: toolDefinition.name,
          success: true,
          ...(args.selectedJourney ? { journeyId: args.selectedJourney.id } : {}),
          result: parsedOutput,
        },
      });
      await args.applyBuiltInLifecycleTool({
        toolName: toolDefinition.name,
        input: parsedInput.data,
        conversationId: args.conversation.id,
        emit: args.emit,
      });
      messages.push(createToolResultMessage(call, parsedOutput));
    } catch (error) {
      if (isAbortLikeError(error) && args.signal?.aborted) throw error;
      const message = error instanceof Error ? error.message : "Tool execution failed.";
      logger.error({ toolName: toolDefinition.name, error: message }, "Model tool execution failed");
      await args.emit({
        conversationId: args.conversation.id,
        type: "tool.completed",
        data: {
          toolName: toolDefinition.name,
          success: false,
          ...(args.selectedJourney ? { journeyId: args.selectedJourney.id } : {}),
          error: message,
        },
      });
      messages.push(createToolResultMessage(call, { error: message }));
    }
  }
  return messages;
}

export function resolveAvailableModelTools(
  agent: CompiledAgent,
  journey: CompiledJourney | null,
  stateMachineTurn: StateMachineTurnResult | null,
) {
  const scoped = journey?.kind === "delegation"
    ? journey.delegation?.tools ?? []
    : journey?.tools ?? [];
  const stateTools = resolveActiveStates(journey, stateMachineTurn).flatMap((state) => state.tools);
  return uniqueTools([...agent.tools, ...scoped, ...stateTools]);
}
