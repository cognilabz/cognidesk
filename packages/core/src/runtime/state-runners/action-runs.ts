import type { ActionDefinition, CompiledJourney } from "../../definition.js";
import type { ConversationRecord } from "../../storage.js";
import {
  telemetryAttributes,
  telemetrySpanNames,
  withTelemetrySpan,
} from "../../telemetry.js";
import { abortErrorFromSignal, runWithAbort, throwIfSignalAborted } from "../cancellation.js";
import type { RuntimeEventEmitter, RuntimeOptions } from "../types.js";
import { emitRetryNotice, shouldRetryExecutionFailure, type RetryPlan } from "./retry.js";

export async function runStateActionRuns(args: {
  options: RuntimeOptions;
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
    const retryPlan = actionExecutionRetryPlan(args.options, actionRun.action);
    let lastError: unknown = null;
    try {
      for (let attempt = 1; attempt <= retryPlan.maxAttempts; attempt += 1) {
        try {
          throwIfSignalAborted(args.signal);
          await withTelemetrySpan(args.options, {
            name: telemetrySpanNames.actionExecute,
            attributes: {
              [telemetryAttributes.conversationId]: args.conversation.id,
              [telemetryAttributes.journeyId]: args.journey.id,
              [telemetryAttributes.stateId]: args.state.id,
              [telemetryAttributes.actionName]: actionRun.action.name,
            },
            metric: {
              kind: "action",
              attributes: {
                [telemetryAttributes.journeyId]: args.journey.id,
                [telemetryAttributes.stateId]: args.state.id,
                [telemetryAttributes.actionName]: actionRun.action.name,
              },
            },
          }, () => runWithAbort(() => actionRun.action.run({ input: parsedInput.data }), args.signal));
          lastError = null;
          break;
        } catch (error) {
          if (args.signal?.aborted) throw abortErrorFromSignal(args.signal);
          lastError = error;
          if (attempt >= retryPlan.maxAttempts) break;
          if (!shouldRetryExecutionFailure(error, retryPlan)) break;
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
      if (args.signal?.aborted) throw abortErrorFromSignal(args.signal);
      const message = error instanceof Error ? error.message : "State action failed.";
      await emitActionFailure(args, actionRun.action.name, message, "state_action_failed");
    }
  }
}

export function actionExecutionMaxAttempts(options: RuntimeOptions, actionDefinition: ActionDefinition) {
  return actionExecutionRetryPlan(options, actionDefinition).maxAttempts;
}

export function actionExecutionRetryPlan(options: RuntimeOptions, actionDefinition: ActionDefinition): RetryPlan {
  if (actionDefinition.retry === false) return { maxAttempts: 1, retryUnclassifiedFailures: false };
  if (actionDefinition.retry && typeof actionDefinition.retry === "object" && actionDefinition.retry.maxAttempts !== undefined) {
    return { maxAttempts: Math.max(1, actionDefinition.retry.maxAttempts), retryUnclassifiedFailures: true };
  }
  if (actionDefinition.retry && typeof actionDefinition.retry === "object") {
    return {
      maxAttempts: Math.max(1, options.toolRetry?.maxAttempts ?? 2),
      retryUnclassifiedFailures: true,
    };
  }
  return {
    maxAttempts: Math.max(1, options.toolRetry?.maxAttempts ?? 2),
    retryUnclassifiedFailures: options.toolRetry?.maxAttempts !== undefined,
  };
}

async function emitActionStarted(args: ActionRunContext, actionName: string) {
  await args.emit({
    conversationId: args.conversation.id,
    type: "action.started",
    data: { actionName, journeyId: args.journey.id, stateId: args.state.id },
  });
}

async function emitActionSuccess(args: ActionRunContext, actionName: string) {
  await args.emit({
    conversationId: args.conversation.id,
    type: "action.completed",
    data: { actionName, success: true, journeyId: args.journey.id, stateId: args.state.id },
  });
}

async function emitActionFailure(
  args: ActionRunContext,
  actionName: string,
  message: string,
  code: "state_action_failed" | "state_action_validation_failed",
  _traceCompleted = true,
) {
  await args.emit({
    conversationId: args.conversation.id,
    type: "action.completed",
    data: { actionName, success: false, journeyId: args.journey.id, stateId: args.state.id, error: message },
  });
  await args.emit({
    conversationId: args.conversation.id,
    type: "error",
    data: { code, message },
  });
}

type ActionRunContext = {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  emit: RuntimeEventEmitter;
};
