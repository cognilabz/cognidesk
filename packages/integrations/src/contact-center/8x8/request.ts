import type {
  EightByEightContactCenterClientOptions,
  EightByEightContactCenterJsonObject,
  EightByEightContactCenterProviderPayload,
  EightByEightContactCenterProviderQuery,
  EightByEightHttpMethod,
  EightByEightOperationRequestInput,
  EightByEightResource,
} from "./contracts.js";

export async function eightByEightRequest<T = EightByEightResource>(input: {
  options: EightByEightContactCenterClientOptions;
  fetch: typeof fetch;
  method: EightByEightHttpMethod;
  path: string;
  input?: EightByEightOperationRequestInput | undefined;
}): Promise<T> {
  const body = encodeEightByEightBody(input.input?.body);
  const response = await input.fetch(providerUrl(
    input.options.apiBaseUrl,
    eightByEightOperationPath(input.path, input.input?.pathParams ?? {}),
    input.input?.query,
  ), {
    method: input.method,
    headers: {
      accept: "application/json",
      ...(body !== undefined ? { "content-type": "application/json" } : {}),
      ...input.input?.headers,
      ...(input.options.authorizationHeader ? { authorization: input.options.authorizationHeader } : input.options.accessToken ? { authorization: `Bearer ${input.options.accessToken}` } : {}),
      ...(input.input?.idempotencyKey ? { "idempotency-key": input.input.idempotencyKey } : {}),
    },
    ...(body !== undefined ? { body } : {}),
    ...(input.input?.signal ? { signal: input.input.signal } : {}),
  });
  return parseProviderResponse<T>(response, "8x8 Contact Center");
}

function providerUrl(baseUrl: string, path: string, query?: EightByEightContactCenterProviderQuery) {
  if (!baseUrl) throw new Error("8x8 Contact Center apiBaseUrl is required.");
  const url = new URL(path, baseUrl.replace(/\/+$/, ""));
  appendEightByEightQuery(url.searchParams, query);
  return url.toString();
}

function eightByEightOperationPath(pathTemplate: string, pathParams: Record<string, string | number | boolean | undefined>) {
  return pathTemplate.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams[key];
    if (value === undefined) throw new Error(`Missing 8x8 Contact Center path parameter '${key}'.`);
    return encodeURIComponent(String(value));
  });
}

function appendEightByEightQuery(params: URLSearchParams, query?: EightByEightContactCenterProviderQuery) {
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined && item !== null) params.append(key, String(item));
      }
      continue;
    }
    params.set(key, String(value));
  }
}

function encodeEightByEightBody(body: EightByEightContactCenterProviderPayload | undefined) {
  if (body === undefined) return undefined;
  if (typeof body === "string" || body instanceof Blob || body instanceof FormData || body instanceof URLSearchParams) return body;
  return JSON.stringify(body);
}

async function parseProviderResponse<T = EightByEightContactCenterJsonObject>(response: Response, provider: string): Promise<T> {
  const text = await response.text();
  const body = text ? JSON.parse(text) as EightByEightContactCenterJsonObject : {};
  if (!response.ok) {
    throw new Error(typeof body.message === "string" ? body.message : `${provider} API returned ${response.status}.`);
  }
  return body as T;
}
