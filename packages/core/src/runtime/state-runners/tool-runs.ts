import type { CompiledJourney } from "../../definition.js";
import { runtimeLogger } from "../../logging.js";
import type { TraceEvent } from "../../observability.js";
import type { ConversationRecord } from "../../storage.js";
import { setPathValue } from "../context.js";
import { isAbortLikeError } from "../errors.js";
import { createToolConfirmationPromptId } from "../journey-state.js";
import type { RuntimeEventEmitter, RuntimeOptions } from "../types.js";
import { executeToolWithRetry } from "./retry.js";

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
  conversation: ConversationRecord;
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
    await emitToolStarted(args, toolRun.tool.name);
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
  await args.trace({
    type: "tool.started",
    conversationId: args.conversation.id,
    toolName,
    journeyId: args.journey.id,
    stateId: args.state.id,
  });
}

async function emitToolCompleted(
  args: ToolRunContext,
  toolName: string,
  success: boolean,
  error?: string,
  result?: unknown,
  traceCompleted = true,
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
    },
  });
  if (traceCompleted) {
    await args.trace({
      type: "tool.completed",
      conversationId: args.conversation.id,
      toolName,
      success,
      journeyId: args.journey.id,
      stateId: args.state.id,
      ...(error ? { error } : {}),
    });
  }
}

type ToolRunContext = {
  trace(event: TraceEvent): Promise<void>;
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  emit: RuntimeEventEmitter;
};
