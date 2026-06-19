import type { AnyTool } from "../../types.js";
import { createTelemetryContext } from "../../telemetry.js";
import { abortErrorFromSignal, throwIfSignalAborted, waitForAbort } from "../cancellation.js";
import { createJourneyContextView } from "../context.js";
import type { RuntimeEventEmitter, RuntimeOptions } from "../types.js";

export interface RetryPlan {
  maxAttempts: number;
  retryUnclassifiedFailures: boolean;
}

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
  const retryPlan = toolExecutionRetryPlan(args.options, args.tool, args.idempotencyKey);
  let lastError: unknown;
  for (let attempt = 1; attempt <= retryPlan.maxAttempts; attempt += 1) {
    try {
      throwIfSignalAborted(args.signal);
      if (args.tool.name === "cognidesk.viewJourneyContext") {
        const snapshot = await args.options.storage.getSnapshot(args.conversationId);
        return createJourneyContextView(args.input, args.journeyContext, snapshot?.journeyContexts ?? []);
      }
      return await waitForAbort(args.tool.execute({
        input: args.input,
        app: args.options.app ?? {},
        conversationId: args.conversationId,
        telemetry: createTelemetryContext(args.options),
        ...(args.idempotencyKey ? { idempotencyKey: args.idempotencyKey } : {}),
        ...(args.signal ? { signal: args.signal } : {}),
      }), args.signal);
    } catch (error) {
      if (args.signal?.aborted) throw abortErrorFromSignal(args.signal);
      lastError = error;
      if (attempt >= retryPlan.maxAttempts) break;
      if (!shouldRetryExecutionFailure(error, retryPlan)) break;
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
  return toolExecutionRetryPlan(options, toolDefinition, idempotencyKey).maxAttempts;
}

export function toolExecutionRetryPlan(
  options: RuntimeOptions,
  toolDefinition: AnyTool,
  idempotencyKey: string | undefined,
): RetryPlan {
  if (toolDefinition.sideEffect && !idempotencyKey) {
    return { maxAttempts: 1, retryUnclassifiedFailures: false };
  }
  return {
    maxAttempts: Math.max(1, options.toolRetry?.maxAttempts ?? 2),
    retryUnclassifiedFailures: options.toolRetry?.maxAttempts !== undefined,
  };
}

export function shouldRetryExecutionFailure(error: unknown, retryPlan: RetryPlan) {
  const retryable = explicitRetryableValue(error);
  if (retryable === false) return false;
  if (retryable === true) return true;
  if (retryPlan.retryUnclassifiedFailures) return true;
  return isTransientExecutionFailure(error);
}

export function isTransientExecutionFailure(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;
  const retryable = explicitRetryableValue(error);
  if (retryable !== undefined) return retryable;
  const status = numericProperty(error, ["status", "statusCode", "httpStatus", "code"]);
  if (status !== undefined) return transientHttpStatuses.has(status);
  const code = stringProperty(error, ["code", "errno"]);
  if (code && transientErrorCodes.has(code)) return true;
  const cause = (error as { cause?: unknown }).cause;
  return cause !== undefined && isTransientExecutionFailure(cause);
}

function explicitRetryableValue(error: unknown): boolean | undefined {
  if (!error || typeof error !== "object") return undefined;
  const retryable = (error as { retryable?: unknown }).retryable;
  return typeof retryable === "boolean" ? retryable : undefined;
}

function numericProperty(error: object, keys: string[]) {
  for (const key of keys) {
    const value = (error as Record<string, unknown>)[key];
    if (typeof value === "number" && Number.isInteger(value)) return value;
  }
  return undefined;
}

function stringProperty(error: object, keys: string[]) {
  for (const key of keys) {
    const value = (error as Record<string, unknown>)[key];
    if (typeof value === "string") return value;
  }
  return undefined;
}

const transientHttpStatuses = new Set([408, 425, 429, 500, 502, 503, 504]);
const transientErrorCodes = new Set([
  "EAI_AGAIN",
  "ECONNABORTED",
  "ECONNREFUSED",
  "ECONNRESET",
  "ENETDOWN",
  "ENETRESET",
  "ENETUNREACH",
  "ETIMEDOUT",
  "UND_ERR_CONNECT_TIMEOUT",
  "UND_ERR_HEADERS_TIMEOUT",
  "UND_ERR_SOCKET",
]);

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
