export interface ProviderApiErrorResponseMetadata {
  statusText: string;
  headers: Record<string, string>;
  url?: string;
  requestId?: string;
}

export interface ProviderApiErrorInput {
  provider: string;
  status: number;
  message: string;
  code?: string | number;
  retryAfter?: string;
  body?: unknown;
  response: ProviderApiErrorResponseMetadata;
}

export class ProviderApiError extends Error {
  readonly provider: string;
  readonly status: number;
  readonly body: unknown;
  readonly response: ProviderApiErrorResponseMetadata;
  readonly code?: string | number;
  readonly retryAfter?: string;

  constructor(input: ProviderApiErrorInput) {
    super(input.message);
    this.name = "ProviderApiError";
    this.provider = input.provider;
    this.status = input.status;
    this.body = input.body;
    this.response = input.response;
    if (input.code !== undefined) this.code = input.code;
    if (input.retryAfter !== undefined) this.retryAfter = input.retryAfter;
  }
}

export function normalizeGmailProviderError(error: unknown, operationAlias: string): never {
  if (error instanceof ProviderApiError) throw error;
  const record = providerObject(error);
  const response = providerObject(record?.response);
  const status = typeof response?.status === "number" ? response.status : 0;
  if (!response || !status) throw error;
  const responseHeaders = headersToRecord(response.headers);

  const body = response.data;
  const bodyError = providerObject(providerObject(body)?.error);
  const code = typeof bodyError?.status === "string" || typeof bodyError?.status === "number"
    ? bodyError.status
    : typeof bodyError?.code === "string" || typeof bodyError?.code === "number"
      ? bodyError.code
      : undefined;
  const message = typeof bodyError?.message === "string"
    ? bodyError.message
    : typeof record?.message === "string"
      ? record.message
      : `Gmail operation '${operationAlias}' returned ${status}.`;

  throw new ProviderApiError({
    provider: "gmail",
    status,
    message,
    body,
    response: {
      statusText: typeof response.statusText === "string" ? response.statusText : "",
      headers: responseHeaders,
      ...(typeof response.config === "object"
        && response.config !== null
        && "url" in response.config
        && typeof response.config.url === "string"
        ? { url: response.config.url }
        : {}),
      ...requestIdMetadata(responseHeaders),
    },
    ...(code !== undefined ? { code } : {}),
    ...(responseHeaders["retry-after"] ? { retryAfter: responseHeaders["retry-after"] } : {}),
  });
}

function providerObject(value: unknown): Record<string, unknown> | undefined {
  return typeof value === "object" && value !== null ? value as Record<string, unknown> : undefined;
}

function headersToRecord(headers: unknown): Record<string, string> {
  const output: Record<string, string> = {};
  if (!headers || typeof headers !== "object") return output;
  if (headers instanceof Headers) {
    headers.forEach((value, key) => {
      output[key.toLowerCase()] = value;
    });
    return output;
  }
  for (const [key, value] of Object.entries(headers)) {
    if (Array.isArray(value)) {
      output[key.toLowerCase()] = value.join(", ");
    } else if (value !== undefined && value !== null) {
      output[key.toLowerCase()] = String(value);
    }
  }
  return output;
}

function requestIdMetadata(headers: Record<string, string>) {
  const requestId = headers["x-request-id"]
    ?? headers["request-id"]
    ?? headers["x-ms-request-id"]
    ?? headers["x-ms-ags-diagnostic"]
    ?? headers["x-amzn-requestid"]
    ?? headers["x-amzn-request-id"]
    ?? headers["x-goog-request-id"];
  return requestId ? { requestId } : {};
}
