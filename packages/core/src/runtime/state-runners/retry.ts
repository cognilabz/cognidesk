import type { AnyTool } from "../../types.js";
import { createTelemetryContext } from "../../telemetry.js";
import { createJourneyContextView } from "../context.js";
import { isAbortLikeError } from "../errors.js";
import type { RuntimeEventEmitter, RuntimeOptions } from "../types.js";

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
        telemetry: createTelemetryContext(args.options),
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
