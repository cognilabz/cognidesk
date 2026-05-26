import type { ActionDefinition, CompiledJourney } from "../../definition.js";
import type { TraceEvent } from "../../observability.js";
import type { ConversationRecord } from "../../storage.js";
import { AbortError, isAbortLikeError } from "../errors.js";
import type { RuntimeEventEmitter, RuntimeOptions } from "../types.js";
import { emitRetryNotice } from "./retry.js";

export async function runStateActionRuns(args: {
  options: RuntimeOptions;
  trace(event: TraceEvent): Promise<void>;
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  actionType: "entry" | "exit" | "transition";
  signal?: AbortSignal;
  emit: RuntimeEventEmitter;
}) {
  const actionRuns = args.state.actionRuns.filter((actionRun) => actionRun.actionType === args.actionType);
  for (const actionRun of actionRuns) {
    const rawInput = actionRun.input ? actionRun.input({ context: args.context }) : {};
    const parsedInput = actionRun.action.input.safeParse(rawInput);
    if (!parsedInput.success) {
      await emitActionFailure(args, actionRun.action.name, parsedInput.error.message, "state_action_validation_failed", false);
      continue;
    }

    await emitActionStarted(args, actionRun.action.name);
    const maxAttempts = actionExecutionMaxAttempts(args.options, actionRun.action);
    let lastError: unknown = null;
    try {
      for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
        try {
          if (args.signal?.aborted) throw args.signal.reason ?? new AbortError("aborted");
          await actionRun.action.run({ input: parsedInput.data });
          lastError = null;
          break;
        } catch (error) {
          if (isAbortLikeError(error) && args.signal?.aborted) throw error;
          lastError = error;
          if (attempt >= maxAttempts) break;
          const retryNotice = actionRun.action.retry && typeof actionRun.action.retry === "object"
            ? actionRun.action.retry.notice
            : undefined;
          await emitRetryNotice(args.options, {
            conversationId: args.conversation.id,
            toolName: actionRun.action.name,
            ...(retryNotice ? { notice: retryNotice } : {}),
            emit: args.emit,
          });
        }
      }
      if (lastError) throw lastError;
      await emitActionSuccess(args, actionRun.action.name);
    } catch (error) {
      if (isAbortLikeError(error) && args.signal?.aborted) throw error;
      const message = error instanceof Error ? error.message : "State action failed.";
      await emitActionFailure(args, actionRun.action.name, message, "state_action_failed");
    }
  }
}

export function actionExecutionMaxAttempts(options: RuntimeOptions, actionDefinition: ActionDefinition) {
  if (actionDefinition.retry === false) return 1;
  if (actionDefinition.retry && typeof actionDefinition.retry === "object" && actionDefinition.retry.maxAttempts !== undefined) {
    return Math.max(1, actionDefinition.retry.maxAttempts);
  }
  return Math.max(1, options.toolRetry?.maxAttempts ?? 2);
}

async function emitActionStarted(args: ActionRunContext, actionName: string) {
  await args.emit({
    conversationId: args.conversation.id,
    type: "action.started",
    data: { actionName, journeyId: args.journey.id, stateId: args.state.id },
  });
  await args.trace({
    type: "action.started",
    conversationId: args.conversation.id,
    actionName,
    journeyId: args.journey.id,
    stateId: args.state.id,
  });
}

async function emitActionSuccess(args: ActionRunContext, actionName: string) {
  await args.emit({
    conversationId: args.conversation.id,
    type: "action.completed",
    data: { actionName, success: true, journeyId: args.journey.id, stateId: args.state.id },
  });
  await args.trace({
    type: "action.completed",
    conversationId: args.conversation.id,
    actionName,
    success: true,
    journeyId: args.journey.id,
    stateId: args.state.id,
  });
}

async function emitActionFailure(
  args: ActionRunContext,
  actionName: string,
  message: string,
  code: "state_action_failed" | "state_action_validation_failed",
  traceCompleted = true,
) {
  await args.emit({
    conversationId: args.conversation.id,
    type: "action.completed",
    data: { actionName, success: false, journeyId: args.journey.id, stateId: args.state.id, error: message },
  });
  if (traceCompleted) {
    await args.trace({
      type: "action.completed",
      conversationId: args.conversation.id,
      actionName,
      success: false,
      journeyId: args.journey.id,
      stateId: args.state.id,
      error: message,
    });
  }
  await args.emit({
    conversationId: args.conversation.id,
    type: "error",
    data: { code, message },
  });
}

type ActionRunContext = {
  trace(event: TraceEvent): Promise<void>;
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  emit: RuntimeEventEmitter;
};
