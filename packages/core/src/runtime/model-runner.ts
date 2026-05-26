import type { CompiledAgent, CompiledJourney } from "../definition.js";
import type { TraceEvent } from "../observability.js";
import type { ConversationRecord } from "../storage.js";
import type {
  AgentModelSet,
  AnyTool,
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
import { executeToolWithRetry } from "./state-runners.js";
import { createToolResultMessage, uniqueTools } from "./tools.js";
import type { RuntimeEventEmitter, RuntimeOptions, StateMachineTurnResult } from "./types.js";

export async function generateTextWithTrace(args: {
  options: RuntimeOptions;
  trace(event: TraceEvent): Promise<void>;
  conversationId: string;
  model: ModelAdapter;
  input: TextGenerationInput;
}): Promise<TextGenerationOutput> {
  await args.trace({
    type: "model.started",
    conversationId: args.conversationId,
    role: args.input.role,
    provider: args.model.provider,
    model: args.model.model,
  });
  try {
    const output = await args.model.generateText({
      ...args.input,
      messages: await applyModelPromptProfile({
        model: args.model,
        input: args.input,
      }),
    });
    await args.trace({
      type: "model.completed",
      conversationId: args.conversationId,
      role: args.input.role,
      provider: args.model.provider,
      model: args.model.model,
      ...(output.usage ? { usage: output.usage } : {}),
    });
    return output;
  } catch (error) {
    await args.trace({
      type: "model.failed",
      conversationId: args.conversationId,
      role: args.input.role,
      provider: args.model.provider,
      model: args.model.model,
      error: error instanceof Error ? error.message : "Model call failed.",
    });
    throw error;
  }
}

export async function generateResponseWithTools(args: {
  options: RuntimeOptions;
  trace(event: TraceEvent): Promise<void>;
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
  signal?: AbortSignal;
  emit: RuntimeEventEmitter;
}): Promise<TextGenerationOutput> {
  const messages = [...args.messages];
  const maxToolRounds = 4;
  for (let round = 0; round <= maxToolRounds; round += 1) {
    const response = await generateTextWithTrace({
      options: args.options,
      trace: args.trace,
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
        ...(args.signal ? { signal: args.signal } : {}),
      },
    });
    if (!response.toolCalls?.length) return response;
    if (round === maxToolRounds) {
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
      trace: args.trace,
      applyBuiltInLifecycleTool: args.applyBuiltInLifecycleTool,
      conversation: args.conversation,
      calls: response.toolCalls,
      tools: args.tools,
      selectedJourney: args.selectedJourney,
      stateMachineTurn: args.stateMachineTurn,
      emit: args.emit,
      ...(args.signal ? { signal: args.signal } : {}),
    });
    messages.push(...results);
    const lifecycle = await args.requireConversationRecord(args.conversation.id);
    if (lifecycle.lifecycle !== "active") {
      return { text: "", providerMetadata: { interruptedByLifecycle: true } };
    }
  }
  return { text: "" };
}

export async function executeModelToolCalls(args: {
  options: RuntimeOptions;
  trace(event: TraceEvent): Promise<void>;
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
  signal?: AbortSignal;
  emit: RuntimeEventEmitter;
}): Promise<ModelMessage[]> {
  const byName = new Map(args.tools.map((toolDefinition) => [toolDefinition.name, toolDefinition]));
  const messages: ModelMessage[] = [];
  for (const call of args.calls) {
    const toolDefinition = byName.get(call.name);
    if (!toolDefinition) {
      const error = `Tool '${call.name}' is not available in the active tool scope.`;
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
      await args.emit({
        conversationId: args.conversation.id,
        type: "tool.completed",
        data: { toolName: toolDefinition.name, success: false, error },
      });
      messages.push(createToolResultMessage(call, { error }));
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
    await args.trace({
      type: "tool.started",
      conversationId: args.conversation.id,
      toolName: toolDefinition.name,
      ...(args.selectedJourney ? { journeyId: args.selectedJourney.id } : {}),
    });
    try {
      const idempotencyKey = toolDefinition.idempotencyKey?.({
        input: parsedInput.data,
        conversationId: args.conversation.id,
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
      const parsedOutput = toolDefinition.output.parse(output);
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
      await args.trace({
        type: "tool.completed",
        conversationId: args.conversation.id,
        toolName: toolDefinition.name,
        success: true,
        ...(args.selectedJourney ? { journeyId: args.selectedJourney.id } : {}),
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
      await args.trace({
        type: "tool.completed",
        conversationId: args.conversation.id,
        toolName: toolDefinition.name,
        success: false,
        ...(args.selectedJourney ? { journeyId: args.selectedJourney.id } : {}),
        error: message,
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
