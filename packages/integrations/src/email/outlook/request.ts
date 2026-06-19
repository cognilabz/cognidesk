import {
  providerObject,
  readProviderResponseBody,
  throwProviderApiError,
} from "../../internal/provider-transport.js";
import type {
  OutlookEmailClientOptions,
  OutlookEmailJsonObject,
  OutlookEmailProviderPayload,
  OutlookEmailProviderQuery,
  OutlookGraphHttpMethod,
  OutlookListMessagesInput,
} from "./contracts.js";

export function outlookUserPath(userId?: string) {
  return userId ? `/users/${encodeURIComponent(userId)}` : "/me";
}

export function outlookGraphUrl(baseUrl: string, version: string, path: string) {
  return new URL(`/${version.replace(/^\/+|\/+$/g, "")}${path}`, baseUrl);
}

export function outlookGraphOperationUrl(
  baseUrl: string,
  version: string,
  path: string,
  pathParams: Record<string, string | number | boolean | undefined> = {},
  query?: OutlookEmailProviderQuery,
) {
  const resolvedPath = path.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams[key];
    if (value === undefined) throw new Error(`Missing Outlook Graph path parameter '${key}'.`);
    return encodeURIComponent(String(value));
  });
  const url = outlookGraphUrl(baseUrl, version, resolvedPath);
  appendOutlookGraphQuery(url.searchParams, query);
  return url;
}

export function applyOutlookListQuery(url: URL, input: OutlookListMessagesInput) {
  applySelectExpandQuery(url, input);
  if (input.top !== undefined) url.searchParams.set("$top", String(input.top));
  if (input.skip !== undefined) url.searchParams.set("$skip", String(input.skip));
  if (input.filter) url.searchParams.set("$filter", input.filter);
  if (input.search) url.searchParams.set("$search", input.search);
  if (input.orderBy?.length) url.searchParams.set("$orderby", input.orderBy.join(","));
}

export function applySelectExpandQuery(url: URL, input: { select?: string[]; expand?: string[] }) {
  if (input.select?.length) url.searchParams.set("$select", input.select.join(","));
  if (input.expand?.length) url.searchParams.set("$expand", input.expand.join(","));
}

export function outlookAttachmentPath(userPath: string, input: { messageId: string; folderId?: string }) {
  const messagePath = input.folderId
    ? `${userPath}/mailFolders/${encodeURIComponent(input.folderId)}/messages/${encodeURIComponent(input.messageId)}`
    : `${userPath}/messages/${encodeURIComponent(input.messageId)}`;
  return `${messagePath}/attachments`;
}

export async function outlookRequest<T>(input: {
  url: URL;
  method: OutlookGraphHttpMethod;
  options: OutlookEmailClientOptions;
  fetch: typeof fetch;
  body?: OutlookEmailProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
  signal?: AbortSignal | undefined;
  returnResponse?: false;
}): Promise<T>;
export async function outlookRequest(input: {
  url: URL;
  method: OutlookGraphHttpMethod;
  options: OutlookEmailClientOptions;
  fetch: typeof fetch;
  body?: OutlookEmailProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
  signal?: AbortSignal | undefined;
  returnResponse: true;
}): Promise<Response>;
export async function outlookRequest<T>(input: {
  url: URL;
  method: OutlookGraphHttpMethod;
  options: OutlookEmailClientOptions;
  fetch: typeof fetch;
  body?: OutlookEmailProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
  signal?: AbortSignal | undefined;
  returnResponse?: boolean;
}): Promise<T | Response> {
  const requestBody = input.body === undefined ? undefined : JSON.stringify(input.body);
  const response = await input.fetch(input.url.toString(), {
    method: input.method,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${input.options.accessToken}`,
      ...(requestBody ? { "content-type": "application/json" } : {}),
      ...(input.headers ?? {}),
    },
    ...(requestBody ? { body: requestBody } : {}),
    ...(input.signal ? { signal: input.signal } : {}),
  });
  if (input.returnResponse && response.ok) return response;
  const body = await readProviderResponseBody(response);
  if (!response.ok) {
    const error = outlookErrorDetails(body, response.status);
    throwProviderApiError({
      provider: "outlook",
      status: response.status,
      message: error.message,
      body,
      response,
      ...(error.code !== undefined ? { code: error.code } : {}),
    });
  }
  return (body ?? {}) as T;
}

export function stripUndefined(input: OutlookEmailJsonObject) {
  return Object.fromEntries(Object.entries(input).filter((entry) => entry[1] !== undefined));
}

function appendOutlookGraphQuery(params: URLSearchParams, query?: OutlookEmailProviderQuery) {
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value === undefined || value === null || value === "") continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined && item !== null && item !== "") params.append(key, String(item));
      }
      continue;
    }
    params.set(key, String(value));
  }
}

function outlookErrorDetails(body: unknown, status: number): { message: string; code?: string } {
  const error = providerObject(providerObject(body)?.error);
  const code = typeof error?.code === "string" ? error.code : undefined;
  const codeDetail = code ? ` (${code})` : "";
  const message = typeof error?.message === "string"
    ? `${error.message}${codeDetail}`
    : `Microsoft Graph API returned ${status}.`;
  return {
    message,
    ...(code ? { code } : {}),
  };
}
