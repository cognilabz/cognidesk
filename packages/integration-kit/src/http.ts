export type ProviderHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type ProviderQueryValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | readonly (string | number | boolean)[];

export interface ProviderJsonRequestInput {
  baseUrl: string;
  path: string;
  method?: ProviderHttpMethod;
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: Record<string, ProviderQueryValue> | undefined;
  body?: unknown;
  headers?: Record<string, string | undefined> | undefined;
  accessToken?: string | undefined;
  authorizationHeader?: string | undefined;
  apiKey?: string | undefined;
  apiKeyHeaderName?: string | undefined;
  idempotencyKey?: string | undefined;
  fetch?: typeof fetch | undefined;
  signal?: AbortSignal | undefined;
  timeoutMs?: number | undefined;
  retry?: number | ProviderJsonRetryOptions | undefined;
  providerName?: string | undefined;
}

export interface ProviderJsonRetryOptions {
  attempts?: number | undefined;
  statusCodes?: readonly number[] | undefined;
  baseDelayMs?: number | undefined;
  maxDelayMs?: number | undefined;
}

export async function providerJsonRequest<T = unknown>(input: ProviderJsonRequestInput): Promise<T> {
  const attempts = retryAttempts(input.retry);
  let lastError: unknown;

  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      const response = await fetchProviderJsonResponse(input);
      return await parseProviderJsonResponse<T>(response, input.providerName ?? "Provider");
    } catch (error) {
      lastError = error;
      if (!shouldRetryProviderJsonRequest(error, input, attempt, attempts)) throw error;
      await delay(retryDelayMs(input.retry, attempt));
    }
  }

  throw lastError;
}

async function fetchProviderJsonResponse(input: ProviderJsonRequestInput): Promise<Response> {
  const body = input.body === undefined ? undefined : JSON.stringify(input.body);
  const timeout = providerRequestTimeout(input);
  try {
    return await (input.fetch ?? fetch)(providerRequestUrl(input), {
      method: input.method ?? "GET",
      headers: {
        accept: "application/json",
        ...(body ? { "content-type": "application/json" } : {}),
        ...(input.authorizationHeader ? { authorization: input.authorizationHeader } : {}),
        ...(!input.authorizationHeader && input.accessToken ? { authorization: `Bearer ${input.accessToken}` } : {}),
        ...(input.apiKey && input.apiKeyHeaderName ? { [input.apiKeyHeaderName]: input.apiKey } : {}),
        ...(input.idempotencyKey ? { "idempotency-key": input.idempotencyKey } : {}),
        ...input.headers,
      },
      ...(body ? { body } : {}),
      ...(timeout.signal ? { signal: timeout.signal } : {}),
    });
  } finally {
    timeout.cleanup();
  }
}

export function providerRequestUrl(input: Pick<ProviderJsonRequestInput, "baseUrl" | "path" | "pathParams" | "query">): string {
  const base = input.baseUrl.endsWith("/") ? input.baseUrl.slice(0, -1) : input.baseUrl;
  const expandedPath = expandProviderPath(input.path, input.pathParams ?? {});
  const path = expandedPath.startsWith("/") ? expandedPath : `/${expandedPath}`;
  const url = new URL(`${base}${path}`);
  for (const [key, value] of Object.entries(input.query ?? {})) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      for (const item of value) url.searchParams.append(key, String(item));
    } else {
      url.searchParams.set(key, String(value));
    }
  }
  return url.toString();
}

function expandProviderPath(path: string, pathParams: Record<string, string | number | boolean | undefined>) {
  return path.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams[key];
    if (value === undefined) throw new Error(`Missing path parameter '${key}'.`);
    return encodeURIComponent(String(value));
  });
}

async function parseProviderJsonResponse<T>(response: Response, providerName: string): Promise<T> {
  const text = await response.text();
  const payload = text ? parseJson(text, providerName) : {};
  if (!response.ok) {
    const error = new Error(`${providerName} request failed with ${response.status}.`);
    Object.assign(error, {
      status: response.status,
      statusText: response.statusText,
      payload,
    });
    throw error;
  }
  return payload as T;
}

function providerRequestTimeout(input: ProviderJsonRequestInput) {
  if (!input.timeoutMs) return { signal: input.signal, cleanup: () => {} };

  const controller = new AbortController();
  let upstreamAbort: (() => void) | undefined;
  if (input.signal) {
    upstreamAbort = () => controller.abort(input.signal?.reason);
    if (input.signal.aborted) upstreamAbort();
    else input.signal.addEventListener("abort", upstreamAbort, { once: true });
  }

  const timer = setTimeout(() => controller.abort(new Error(`Provider request timed out after ${input.timeoutMs}ms.`)), input.timeoutMs);
  return {
    signal: controller.signal,
    cleanup: () => {
      clearTimeout(timer);
      if (input.signal && upstreamAbort) input.signal.removeEventListener("abort", upstreamAbort);
    },
  };
}

function retryAttempts(retry: ProviderJsonRequestInput["retry"]): number {
  if (retry === undefined) return 1;
  if (typeof retry === "number") return Math.max(1, Math.floor(retry));
  return Math.max(1, Math.floor(retry.attempts ?? 1));
}

function shouldRetryProviderJsonRequest(
  error: unknown,
  input: ProviderJsonRequestInput,
  attempt: number,
  attempts: number,
): boolean {
  if (attempt >= attempts - 1) return false;
  if (input.signal?.aborted) return false;

  const status = typeof error === "object" && error !== null && "status" in error
    ? Number((error as { status?: unknown }).status)
    : undefined;
  if (status === undefined || Number.isNaN(status)) return true;

  const retry = typeof input.retry === "object" ? input.retry : undefined;
  const statusCodes = retry?.statusCodes ?? [408, 409, 425, 429, 500, 502, 503, 504];
  return statusCodes.includes(status);
}

function retryDelayMs(retry: ProviderJsonRequestInput["retry"], attempt: number): number {
  if (typeof retry !== "object" || retry === null) return 0;
  const base = retry.baseDelayMs ?? 0;
  const max = retry.maxDelayMs ?? base;
  return Math.min(max, base * 2 ** attempt);
}

function delay(ms: number): Promise<void> {
  if (ms <= 0) return Promise.resolve();
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseJson(text: string, providerName: string) {
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return { raw: text, provider: providerName };
  }
}
