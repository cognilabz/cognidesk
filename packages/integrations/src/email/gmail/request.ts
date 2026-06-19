import {
  providerObject,
  readProviderResponseBody,
  throwProviderApiError,
} from "../../internal/provider-transport.js";
import type {
  GmailEmailClientOptions,
  GmailEmailProviderQuery,
  GmailHttpMethod,
  GmailJsonObject,
  GmailPathParams,
  GmailQueryParams,
} from "./contracts.js";

export function gmailUrl(apiBaseUrl: string, userId: string, path: string) {
  return new URL(`/gmail/v1/users/${encodeURIComponent(userId)}${path}`, apiBaseUrl);
}

export function gmailGenericUrl(
  apiBaseUrl: string,
  path: string,
  pathParams: GmailPathParams = {},
  query?: GmailQueryParams,
) {
  const resolvedPath = path.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams[key];
    if (value === undefined) throw new Error(`Missing Gmail path parameter '${key}'.`);
    return encodeURIComponent(String(value));
  });
  const url = new URL(resolvedPath.startsWith("/") ? resolvedPath : `/${resolvedPath}`, apiBaseUrl);
  appendGmailQuery(url.searchParams, query);
  return url;
}

export async function gmailRequest<T>(input: {
  url: URL;
  method: GmailHttpMethod;
  options: GmailEmailClientOptions;
  fetch: typeof fetch;
  body?: GmailJsonObject | undefined;
  signal?: AbortSignal | undefined;
}): Promise<T> {
  const response = await input.fetch(input.url.toString(), {
    method: input.method,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${input.options.accessToken}`,
      ...(input.body ? { "content-type": "application/json" } : {}),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
    ...(input.signal ? { signal: input.signal } : {}),
  });
  const body = await readProviderResponseBody(response);
  if (!response.ok) {
    const error = gmailErrorDetails(body, response.status);
    throwProviderApiError({
      provider: "gmail",
      status: response.status,
      message: error.message,
      body,
      response,
      ...(error.code !== undefined ? { code: error.code } : {}),
    });
  }
  return (body ?? {}) as T;
}

export function stripUndefined(input: GmailJsonObject): GmailJsonObject {
  return Object.fromEntries(Object.entries(input).filter((entry) => entry[1] !== undefined)) as GmailJsonObject;
}

function gmailErrorDetails(body: unknown, status: number): { message: string; code?: string | number } {
  const error = providerObject(providerObject(body)?.error);
  const code = typeof error?.status === "string" || typeof error?.status === "number"
    ? error.status
    : typeof error?.code === "string" || typeof error?.code === "number"
      ? error.code
      : undefined;
  const message = typeof error?.message === "string"
    ? error.message
    : `Gmail API returned ${status}.`;
  return {
    message,
    ...(code !== undefined ? { code } : {}),
  };
}

function appendGmailQuery(params: URLSearchParams, query?: GmailEmailProviderQuery) {
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
