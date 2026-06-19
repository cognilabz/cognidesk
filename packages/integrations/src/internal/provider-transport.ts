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

export async function readProviderResponseBody(response: Response): Promise<unknown> {
  const text = await response.text();
  if (!text) return undefined;

  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("json")) {
    try {
      return JSON.parse(text) as unknown;
    } catch {
      return text;
    }
  }

  try {
    return JSON.parse(text) as unknown;
  } catch {
    return text;
  }
}

export function throwProviderApiError(input: Omit<ProviderApiErrorInput, "response"> & {
  response: Response;
}): never {
  throw new ProviderApiError({
    provider: input.provider,
    status: input.status,
    message: input.message,
    body: input.body,
    response: providerResponseMetadata(input.response),
    ...(input.code !== undefined ? { code: input.code } : {}),
    ...(input.retryAfter !== undefined ? { retryAfter: input.retryAfter } : {}),
  });
}

export function providerResponseMetadata(response: Response): ProviderApiErrorResponseMetadata {
  const headers = headersToRecord(response.headers);
  const requestId = providerRequestId(headers);
  return {
    statusText: response.statusText,
    headers,
    ...(response.url ? { url: response.url } : {}),
    ...(requestId ? { requestId } : {}),
  };
}

export function providerObject(value: unknown): Record<string, unknown> | undefined {
  return typeof value === "object" && value !== null ? value as Record<string, unknown> : undefined;
}

function headersToRecord(headers: Headers): Record<string, string> {
  const record: Record<string, string> = {};
  headers.forEach((value, key) => {
    record[key] = value;
  });
  return record;
}

function providerRequestId(headers: Record<string, string>) {
  return headers["x-request-id"]
    ?? headers["request-id"]
    ?? headers["x-ms-request-id"]
    ?? headers["x-ms-ags-diagnostic"]
    ?? headers["x-amzn-requestid"]
    ?? headers["x-amzn-request-id"]
    ?? headers["x-goog-request-id"];
}
