import type {
  ZendeskHttpMethod,
  ZendeskProviderPayload,
  ZendeskProviderQuery,
  ZendeskTicketingClientOptions,
} from "../contracts.js";

export function normalizeInstanceUrl(instanceUrl: string) {
  if (!instanceUrl) throw new Error("Zendesk instanceUrl is required.");
  const url = new URL(instanceUrl);
  return `${url.protocol}//${url.host}`;
}

export function zendeskUrl(baseUrl: string, apiBasePath: string, path: string) {
  return new URL(`${apiBasePath.replace(/\/+$/, "")}${path}`, baseUrl);
}

export function zendeskOperationUrl(
  baseUrl: string,
  apiBasePath: string,
  path: string,
  pathParams: Record<string, string | number | boolean | undefined> = {},
  query?: ZendeskProviderQuery,
) {
  const normalizedPath = path.startsWith("/api/") ? path.replace(/^\/api\/v2/, "") : path;
  const resolvedPath = normalizedPath.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams[key];
    if (value === undefined) throw new Error(`Missing Zendesk path parameter '${key}'.`);
    return encodeURIComponent(String(value));
  });
  const url = zendeskUrl(baseUrl, apiBasePath, resolvedPath);
  appendZendeskQuery(url.searchParams, query);
  return url;
}

export async function zendeskRequest<T>(input: {
  url: URL;
  method: ZendeskHttpMethod;
  options: ZendeskTicketingClientOptions;
  fetch: typeof fetch;
  body?: ZendeskProviderPayload | undefined;
  rawBody?: BodyInit | undefined;
  contentType?: string | undefined;
}): Promise<T> {
  const response = await input.fetch(input.url.toString(), {
    method: input.method,
    headers: {
      accept: "application/json",
      ...(input.body ? { "content-type": "application/json" } : {}),
      ...(input.rawBody && input.contentType ? { "content-type": input.contentType } : {}),
      ...authHeaders(input.options),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
    ...(input.rawBody ? { body: input.rawBody } : {}),
  });
  const text = await response.text();
  const body = text ? JSON.parse(text) as T & ZendeskErrorResponse : {} as T & ZendeskErrorResponse;
  if (!response.ok) {
    throw new Error(zendeskErrorMessage(body, response.status));
  }
  return body as T;
}

function appendZendeskQuery(params: URLSearchParams, query?: ZendeskProviderQuery) {
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

function authHeaders(options: ZendeskTicketingClientOptions) {
  if (options.accessToken) return { authorization: `Bearer ${options.accessToken}` };
  if (options.email && options.apiToken) {
    return {
      authorization: `Basic ${Buffer.from(`${options.email}/token:${options.apiToken}`).toString("base64")}`,
    };
  }
  throw new Error("Zendesk API access requires either accessToken or email and apiToken.");
}

interface ZendeskErrorResponse {
  error?: string | { title?: string; message?: string };
  description?: string;
  details?: unknown;
}

function zendeskErrorMessage(body: ZendeskErrorResponse, status: number) {
  if (typeof body.error === "string") return body.description ? `${body.error}: ${body.description}` : body.error;
  return body.error?.message ?? body.error?.title ?? body.description ?? `Zendesk Support API returned ${status}.`;
}
