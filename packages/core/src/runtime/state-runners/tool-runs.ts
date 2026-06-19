import type { CompiledJourney } from "../../definition.js";
import { runtimeLogger } from "../../logging.js";
import {
  addTelemetryContentEvent,
  telemetryAttributes,
  telemetryEventNames,
  telemetrySpanNames,
  withTelemetrySpan,
} from "../../telemetry.js";
import type { ConversationRecord } from "../../storage.js";
import { setPathValue } from "../context.js";
import { isAbortLikeError } from "../errors.js";
import { createToolConfirmationPromptId } from "../journey-state.js";
import type { RuntimeEventEmitter, RuntimeOptions } from "../types.js";
import type { ConversationChannel } from "../../types.js";
import { evaluateToolPolicyUse, policyBlockForEvent } from "../policy-enforcement.js";
import { executeToolWithRetry } from "./retry.js";
import { evaluateToolApprovalUse, requestToolApproval } from "../approvals.js";

export async function runStateToolRuns(args: {
  options: RuntimeOptions;
  applyBuiltInLifecycleTool(input: {
    toolName: string;
    input: unknown;
    conversationId: string;
    emit: RuntimeEventEmitter;
  }): Promise<boolean>;
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  actionType: "entry" | "exit" | "transition";
  confirmedPromptId?: string;
  channel?: ConversationChannel;
  signal?: AbortSignal;
  emit: RuntimeEventEmitter;
}): Promise<string | null> {
  const toolRuns = args.state.toolRuns.filter((toolRun) => {
    if (toolRun.actionType !== args.actionType) return false;
    if (args.confirmedPromptId) {
      return Boolean(toolRun.confirm)
        && args.confirmedPromptId === createToolConfirmationPromptId(args.journey.id, args.state.id, toolRun.tool.name);
    }
    return !toolRun.confirm;
  });
  const logger = runtimeLogger(args.options, {
    conversationId: args.conversation.id,
    journeyId: args.journey.id,
    stateId: args.state.id,
  });
  logger.debug({
    actionType: args.actionType,
    toolNames: toolRuns.map((toolRun) => toolRun.tool.name),
    confirmedPromptId: args.confirmedPromptId,
  }, "Running state tool runs");
  for (const toolRun of toolRuns) {
    const rawInput = toolRun.input ? toolRun.input({ context: args.context }) : {};
    const parsedInput = toolRun.tool.input.safeParse(rawInput);
    if (!parsedInput.success) {
      logger.error({
        toolName: toolRun.tool.name,
        error: parsedInput.error.message,
      }, "State tool input validation failed");
      await emitToolCompleted(args, toolRun.tool.name, false, parsedInput.error.message, undefined, false);
      return toolRun.onValidationErrorId ?? null;
    }

    logger.debug({ toolName: toolRun.tool.name }, "State tool execution starting");
    const policyDecision = evaluateToolPolicyUse({
      options: args.options,
      conversation: args.conversation,
      tool: toolRun.tool,
      ...(args.channel ? { channel: args.channel } : {}),
    });
    if (policyDecision && !policyDecision.allowed) {
      const policyBlock = policyBlockForEvent(policyDecision);
      logger.warn({
        toolName: toolRun.tool.name,
        code: policyDecision.code,
        blockers: policyDecision.blockers,
      }, "State tool run blocked by channel policy");
      await emitToolCompleted(args, toolRun.tool.name, false, policyDecision.message, undefined, false, policyBlock);
      return toolRun.onFailureId ?? null;
    }
    const approvalDecision = evaluateToolApprovalUse(args.options, {
      conversation: args.conversation,
      tool: toolRun.tool,
      input: parsedInput.data,
      ...(args.channel ? { channel: args.channel } : {}),
      journeyId: args.journey.id,
      stateId: args.state.id,
    });
    if (approvalDecision.outcome === "require-approval") {
      const approval = await requestToolApproval({
        emit: args.emit,
        conversation: args.conversation,
        tool: toolRun.tool,
        input: parsedInput.data,
        decision: approvalDecision,
        ...(args.channel ? { channel: args.channel } : {}),
        journeyId: args.journey.id,
        stateId: args.state.id,
      });
      await emitToolCompleted(
        args,
        toolRun.tool.name,
        false,
        approval.data.reason ?? "Tool execution is pending approval.",
        undefined,
        false,
        undefined,
        { approvalId: approval.data.approvalId, status: "requested" },
      );
      return null;
    }
    await emitToolStarted(args, toolRun.tool.name);
    try {
      const idempotencyKey = toolRun.tool.idempotencyKey?.({
        input: parsedInput.data,
        conversationId: args.conversation.id,
      });
      const parsedOutput = await withTelemetrySpan(args.options, {
        name: telemetrySpanNames.toolExecute,
        attributes: {
          [telemetryAttributes.conversationId]: args.conversation.id,
          [telemetryAttributes.journeyId]: args.journey.id,
          [telemetryAttributes.stateId]: args.state.id,
          [telemetryAttributes.toolName]: toolRun.tool.name,
        },
        metric: {
          kind: "tool",
          attributes: {
            [telemetryAttributes.journeyId]: args.journey.id,
            [telemetryAttributes.stateId]: args.state.id,
            [telemetryAttributes.toolName]: toolRun.tool.name,
          },
        },
      }, async () => {
        addTelemetryContentEvent(args.options, telemetryEventNames.toolInput, {
          "cognidesk.tool.name": toolRun.tool.name,
          "cognidesk.tool.input": parsedInput.data,
        });
        const output = await executeToolWithRetry({
          options: args.options,
          tool: toolRun.tool,
          input: parsedInput.data,
          conversationId: args.conversation.id,
          journeyContext: args.context,
          emit: args.emit,
          ...(idempotencyKey ? { idempotencyKey } : {}),
          ...(args.signal ? { signal: args.signal } : {}),
        });
        const parsed = toolRun.tool.output.parse(output);
        addTelemetryContentEvent(args.options, telemetryEventNames.toolOutput, {
          "cognidesk.tool.name": toolRun.tool.name,
          "cognidesk.tool.output": parsed,
        });
        return parsed;
      });
      logger.debug({ toolName: toolRun.tool.name }, "State tool output validated");
      for (const assignment of toolRun.assign) {
        setPathValue(args.context, assignment.path, assignment.value({
          output: parsedOutput,
          context: args.context,
        }));
      }
      await emitToolCompleted(args, toolRun.tool.name, true, undefined, parsedOutput);
      const lifecycleApplied = await args.applyBuiltInLifecycleTool({
        toolName: toolRun.tool.name,
        input: parsedInput.data,
        conversationId: args.conversation.id,
        emit: args.emit,
      });
      if (lifecycleApplied) {
        logger.info({ toolName: toolRun.tool.name }, "State tool applied lifecycle change");
        return null;
      }
      if (toolRun.onSuccessId) {
        logger.debug({
          toolName: toolRun.tool.name,
          targetStateId: toolRun.onSuccessId,
        }, "State tool selected success transition");
        return toolRun.onSuccessId;
      }
    } catch (error) {
      if (isAbortLikeError(error) && args.signal?.aborted) throw error;
      const message = error instanceof Error ? error.message : "Tool execution failed.";
      logger.error({ toolName: toolRun.tool.name, error: message }, "State tool execution failed");
      await emitToolCompleted(args, toolRun.tool.name, false, message);
      return toolRun.onFailureId ?? null;
    }
  }
  return null;
}

async function emitToolStarted(args: ToolRunContext, toolName: string) {
  await args.emit({
    conversationId: args.conversation.id,
    type: "tool.started",
    data: { toolName, journeyId: args.journey.id, stateId: args.state.id },
  });
}

async function emitToolCompleted(
  args: ToolRunContext,
  toolName: string,
  success: boolean,
  error?: string,
  result?: unknown,
  _traceCompleted = true,
  policyBlock?: { code: string; message: string; blockers: Array<{ code: string; message: string; kind?: string }> },
  approval?: { approvalId: string; status: "requested" | "resolved" },
) {
  await args.emit({
    conversationId: args.conversation.id,
    type: "tool.completed",
    data: {
      toolName,
      success,
      journeyId: args.journey.id,
      stateId: args.state.id,
      ...(result !== undefined ? { result } : {}),
      ...(error ? { error } : {}),
      ...(policyBlock ? { policyBlock } : {}),
      ...(approval ? { approval } : {}),
    },
  });
}

type ToolRunContext = {
  options: RuntimeOptions;
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  channel?: ConversationChannel;
  emit: RuntimeEventEmitter;
};
