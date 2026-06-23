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
  providerName?: string | undefined;
}

export async function providerJsonRequest<T = unknown>(input: ProviderJsonRequestInput): Promise<T> {
  const body = input.body === undefined ? undefined : JSON.stringify(input.body);
  const response = await (input.fetch ?? fetch)(providerRequestUrl(input), {
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
  });
  return parseProviderJsonResponse<T>(response, input.providerName ?? "Provider");
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

function parseJson(text: string, providerName: string) {
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return { raw: text, provider: providerName };
  }
}
