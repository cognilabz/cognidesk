import type { ActionDefinition, CompiledJourney } from "../definition.js";
import type { TraceEvent } from "../observability.js";
import type { AnyTool } from "../types.js";
import { createJourneyContextView, setPathValue } from "./context.js";
import { AbortError, isAbortLikeError } from "./errors.js";
import { createToolConfirmationPromptId } from "./journey-state.js";
import type { RuntimeEventEmitter, RuntimeOptions } from "./types.js";

export async function executeToolWithRetry(args: {
  options: RuntimeOptions;
  tool: AnyTool;
  input: unknown;
  conversationId: string;
  idempotencyKey?: string;
  journeyContext: Record<string, unknown>;
  signal?: AbortSignal;
  emit: RuntimeEventEmitter;
}) {
  const maxAttempts = toolExecutionMaxAttempts(args.options, args.tool, args.idempotencyKey);
  let lastError: unknown;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      if (args.tool.name === "cognidesk.viewJourneyContext") {
        const snapshot = await args.options.storage.getSnapshot(args.conversationId);
        return createJourneyContextView(args.input, args.journeyContext, snapshot?.journeyContexts ?? []);
      }
      return await args.tool.execute({
        input: args.input,
        app: args.options.app ?? {},
        conversationId: args.conversationId,
        ...(args.idempotencyKey ? { idempotencyKey: args.idempotencyKey } : {}),
        ...(args.signal ? { signal: args.signal } : {}),
      });
    } catch (error) {
      if (isAbortLikeError(error) && args.signal?.aborted) throw error;
      lastError = error;
      if (attempt >= maxAttempts) break;
      await emitRetryNotice(args.options, {
        conversationId: args.conversationId,
        toolName: args.tool.name,
        emit: args.emit,
      });
    }
  }
  throw lastError instanceof Error ? lastError : new Error("Tool execution failed.");
}

export function toolExecutionMaxAttempts(
  options: RuntimeOptions,
  toolDefinition: AnyTool,
  idempotencyKey: string | undefined,
) {
  if (toolDefinition.sideEffect && !idempotencyKey) return 1;
  return Math.max(1, options.toolRetry?.maxAttempts ?? 2);
}

export async function emitRetryNotice(
  options: RuntimeOptions,
  args: {
    conversationId: string;
    toolName: string;
    notice?: string;
    emit: RuntimeEventEmitter;
  },
) {
  const text = args.notice ?? options.toolRetry?.notice ?? `I hit a temporary issue while running ${args.toolName}; retrying now.`;
  await args.emit({
    conversationId: args.conversationId,
    type: "message.started",
    data: { role: "assistant" },
  });
  await args.emit({
    conversationId: args.conversationId,
    type: "message.completed",
    data: {
      text,
      intermediate: true,
    },
  });
}

export async function runStateActionRuns(args: {
  options: RuntimeOptions;
  trace(event: TraceEvent): Promise<void>;
  journey: CompiledJourney;
  conversation: import("../storage.js").ConversationRecord;
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
      const error = parsedInput.error.message;
      await args.emit({
        conversationId: args.conversation.id,
        type: "action.completed",
        data: {
          actionName: actionRun.action.name,
          success: false,
          journeyId: args.journey.id,
          stateId: args.state.id,
          error,
        },
      });
      await args.emit({
        conversationId: args.conversation.id,
        type: "error",
        data: {
          code: "state_action_validation_failed",
          message: error,
        },
      });
      continue;
    }

    await args.emit({
      conversationId: args.conversation.id,
      type: "action.started",
      data: {
        actionName: actionRun.action.name,
        journeyId: args.journey.id,
        stateId: args.state.id,
      },
    });
    await args.trace({
      type: "action.started",
      conversationId: args.conversation.id,
      actionName: actionRun.action.name,
      journeyId: args.journey.id,
      stateId: args.state.id,
    });
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
      await args.emit({
        conversationId: args.conversation.id,
        type: "action.completed",
        data: {
          actionName: actionRun.action.name,
          success: true,
          journeyId: args.journey.id,
          stateId: args.state.id,
        },
      });
      await args.trace({
        type: "action.completed",
        conversationId: args.conversation.id,
        actionName: actionRun.action.name,
        success: true,
        journeyId: args.journey.id,
        stateId: args.state.id,
      });
    } catch (error) {
      if (isAbortLikeError(error) && args.signal?.aborted) throw error;
      const message = error instanceof Error ? error.message : "State action failed.";
      await args.emit({
        conversationId: args.conversation.id,
        type: "action.completed",
        data: {
          actionName: actionRun.action.name,
          success: false,
          journeyId: args.journey.id,
          stateId: args.state.id,
          error: message,
        },
      });
      await args.trace({
        type: "action.completed",
        conversationId: args.conversation.id,
        actionName: actionRun.action.name,
        success: false,
        journeyId: args.journey.id,
        stateId: args.state.id,
        error: message,
      });
      await args.emit({
        conversationId: args.conversation.id,
        type: "error",
        data: {
          code: "state_action_failed",
          message,
        },
      });
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

export async function runStateToolRuns(args: {
  options: RuntimeOptions;
  trace(event: TraceEvent): Promise<void>;
  applyBuiltInLifecycleTool(input: {
    toolName: string;
    input: unknown;
    conversationId: string;
    emit: RuntimeEventEmitter;
  }): Promise<boolean>;
  journey: CompiledJourney;
  conversation: import("../storage.js").ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  actionType: "entry" | "exit" | "transition";
  confirmedPromptId?: string;
  signal?: AbortSignal;
  emit: RuntimeEventEmitter;
}): Promise<string | null> {
  const toolRuns = args.state.toolRuns.filter((toolRun) => {
    if (toolRun.actionType !== args.actionType) return false;
    if (args.confirmedPromptId) {
      return Boolean(toolRun.confirm)
        && args.confirmedPromptId === createToolConfirmationPromptId(args.journey.id, args.state.id, toolRun.tool.name);
    }
    if (!toolRun.confirm) return true;
    return false;
  });
  for (const toolRun of toolRuns) {
    const rawInput = toolRun.input ? toolRun.input({ context: args.context }) : {};
    const parsedInput = toolRun.tool.input.safeParse(rawInput);
    if (!parsedInput.success) {
      await args.emit({
        conversationId: args.conversation.id,
        type: "tool.completed",
        data: {
          toolName: toolRun.tool.name,
          success: false,
          journeyId: args.journey.id,
          stateId: args.state.id,
          error: parsedInput.error.message,
        },
      });
      return toolRun.onValidationErrorId ?? null;
    }

    await args.emit({
      conversationId: args.conversation.id,
      type: "tool.started",
      data: {
        toolName: toolRun.tool.name,
        journeyId: args.journey.id,
        stateId: args.state.id,
      },
    });
    await args.trace({
      type: "tool.started",
      conversationId: args.conversation.id,
      toolName: toolRun.tool.name,
      journeyId: args.journey.id,
      stateId: args.state.id,
    });
    try {
      const idempotencyKey = toolRun.tool.idempotencyKey?.({
        input: parsedInput.data,
        conversationId: args.conversation.id,
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
      const parsedOutput = toolRun.tool.output.parse(output);
      for (const assignment of toolRun.assign) {
        setPathValue(args.context, assignment.path, assignment.value({
          output: parsedOutput,
          context: args.context,
        }));
      }
      await args.emit({
        conversationId: args.conversation.id,
        type: "tool.completed",
        data: {
          toolName: toolRun.tool.name,
          success: true,
          journeyId: args.journey.id,
          stateId: args.state.id,
          result: parsedOutput,
        },
      });
      await args.trace({
        type: "tool.completed",
        conversationId: args.conversation.id,
        toolName: toolRun.tool.name,
        success: true,
        journeyId: args.journey.id,
        stateId: args.state.id,
      });
      const lifecycleApplied = await args.applyBuiltInLifecycleTool({
        toolName: toolRun.tool.name,
        input: parsedInput.data,
        conversationId: args.conversation.id,
        emit: args.emit,
      });
      if (lifecycleApplied) return null;
      if (toolRun.onSuccessId) return toolRun.onSuccessId;
    } catch (error) {
      if (isAbortLikeError(error) && args.signal?.aborted) throw error;
      const message = error instanceof Error ? error.message : "Tool execution failed.";
      await args.emit({
        conversationId: args.conversation.id,
        type: "tool.completed",
        data: {
          toolName: toolRun.tool.name,
          success: false,
          journeyId: args.journey.id,
          stateId: args.state.id,
          error: message,
        },
      });
      await args.trace({
        type: "tool.completed",
        conversationId: args.conversation.id,
        toolName: toolRun.tool.name,
        success: false,
        journeyId: args.journey.id,
        stateId: args.state.id,
        error: message,
      });
      return toolRun.onFailureId ?? null;
    }
  }
  return null;
}
