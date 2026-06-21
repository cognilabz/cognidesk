export type IntegrationErrorCode =
  | "contract-violation"
  | "credential-missing"
  | "not-ready"
  | "provider-auth"
  | "provider-permission"
  | "provider-rate-limited"
  | "provider-timeout"
  | "provider-unavailable"
  | "provider-validation"
  | "webhook-verification-failed"
  | "unknown";

export interface IntegrationErrorContext {
  providerPackageId?: string | undefined;
  provider?: string | undefined;
  operationAlias?: string | undefined;
  requestId?: string | undefined;
  statusCode?: number | undefined;
  retryable?: boolean | undefined;
  details?: Record<string, unknown> | undefined;
}

export interface NormalizedIntegrationErrorShape extends IntegrationErrorContext {
  name: "IntegrationError";
  code: IntegrationErrorCode;
  message: string;
  cause?: unknown;
}

export class IntegrationError extends Error implements NormalizedIntegrationErrorShape {
  readonly name = "IntegrationError";
  readonly code: IntegrationErrorCode;
  readonly providerPackageId?: string | undefined;
  readonly provider?: string | undefined;
  readonly operationAlias?: string | undefined;
  readonly requestId?: string | undefined;
  readonly statusCode?: number | undefined;
  readonly retryable?: boolean | undefined;
  readonly details?: Record<string, unknown> | undefined;

  constructor(code: IntegrationErrorCode, message: string, context: IntegrationErrorContext & { cause?: unknown } = {}) {
    super(message);
    this.code = code;
    this.providerPackageId = context.providerPackageId;
    this.provider = context.provider;
    this.operationAlias = context.operationAlias;
    this.requestId = context.requestId;
    this.statusCode = context.statusCode;
    this.retryable = context.retryable;
    this.details = context.details;
    if (context.cause !== undefined) {
      this.cause = context.cause;
    }
  }
}

export function normalizeIntegrationError(
  error: unknown,
  context: IntegrationErrorContext = {},
): IntegrationError {
  if (error instanceof IntegrationError) {
    return new IntegrationError(error.code, error.message, withoutUndefined({
      providerPackageId: context.providerPackageId ?? error.providerPackageId,
      provider: context.provider ?? error.provider,
      operationAlias: context.operationAlias ?? error.operationAlias,
      requestId: context.requestId ?? error.requestId,
      statusCode: context.statusCode ?? error.statusCode,
      retryable: context.retryable ?? error.retryable,
      details: { ...error.details, ...context.details },
      cause: error.cause,
    }));
  }

  const message = error instanceof Error ? error.message : String(error);
  return new IntegrationError(inferIntegrationErrorCode(error), message || "Unknown integration error.", {
    ...context,
    cause: error,
  });
}

export function integrationErrorToJSON(error: IntegrationError): NormalizedIntegrationErrorShape {
  const result: NormalizedIntegrationErrorShape = {
    name: "IntegrationError",
    code: error.code,
    message: error.message,
  };
  if (error.providerPackageId !== undefined) result.providerPackageId = error.providerPackageId;
  if (error.provider !== undefined) result.provider = error.provider;
  if (error.operationAlias !== undefined) result.operationAlias = error.operationAlias;
  if (error.requestId !== undefined) result.requestId = error.requestId;
  if (error.statusCode !== undefined) result.statusCode = error.statusCode;
  if (error.retryable !== undefined) result.retryable = error.retryable;
  if (error.details !== undefined) result.details = error.details;
  if (error.cause !== undefined) result.cause = error.cause;
  return result;
}

function inferIntegrationErrorCode(error: unknown): IntegrationErrorCode {
  if (!isRecord(error)) return "unknown";
  const status = typeof error.status === "number"
    ? error.status
    : typeof error.statusCode === "number"
      ? error.statusCode
      : undefined;
  if (status === 401) return "provider-auth";
  if (status === 403) return "provider-permission";
  if (status === 408 || status === 504) return "provider-timeout";
  if (status === 429) return "provider-rate-limited";
  if (status !== undefined && status >= 500) return "provider-unavailable";
  if (status !== undefined && status >= 400) return "provider-validation";
  return "unknown";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function withoutUndefined<T extends Record<string, unknown>>(value: T): T {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => entry !== undefined),
  ) as T;
}
