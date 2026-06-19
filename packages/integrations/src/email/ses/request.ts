import {
  providerObject,
  readProviderResponseBody,
  throwProviderApiError,
} from "../../internal/provider-transport.js";
import type { SesFullApiOperation } from "./full-api-operations.generated.js";
import type {
  SesEmailClientOptions,
  SesEmailJsonObject,
  SesEmailProviderPayload,
  SesEmailProviderQuery,
  SesHttpMethod,
  SesListSuppressedDestinationsInput,
  SesOperationRequestInput,
} from "./contracts.js";
import { signSesRequest } from "./signing.js";

export async function sesRequest<T>(input: {
  options: SesEmailClientOptions;
  fetch: typeof fetch;
  method: SesHttpMethod;
  url: string;
  body?: SesEmailProviderPayload | undefined;
  bodyText?: string;
  contentType?: string;
  headers?: Record<string, string>;
  signal?: AbortSignal | undefined;
}): Promise<T> {
  const bodyText = input.bodyText ?? (input.body === undefined ? "" : JSON.stringify(input.body));
  const headers = await signSesRequest({
    method: input.method,
    url: input.url,
    body: bodyText,
    options: input.options,
    ...(input.contentType ? { contentType: input.contentType } : {}),
    ...(input.headers ? { headers: input.headers } : {}),
  });
  const response = await input.fetch(input.url, {
    method: input.method,
    headers,
    ...(bodyText ? { body: bodyText } : {}),
    ...(input.signal ? { signal: input.signal } : {}),
  });
  const body = normalizeSesResponseBody<T>(await readProviderResponseBody(response));
  if (!response.ok) {
    const error = sesErrorDetails(body, response.status);
    const retryAfter = response.headers.get("retry-after") ?? undefined;
    throwProviderApiError({
      provider: "ses",
      status: response.status,
      message: error.message,
      body,
      response,
      ...(error.code !== undefined ? { code: error.code } : {}),
      ...(retryAfter !== undefined ? { retryAfter } : {}),
    });
  }
  return body as T;
}

export async function sesClassicQueryRequest<T>(input: {
  options: SesEmailClientOptions;
  fetch: typeof fetch;
  apiBaseUrl: string;
  operation: SesFullApiOperation;
  input: SesOperationRequestInput;
}): Promise<T> {
  const form = new URLSearchParams();
  form.set("Action", input.operation.operationId);
  form.set("Version", input.operation.apiVersion);
  appendAwsQueryParams(form, input.input.query);
  appendAwsQueryParams(form, input.input.body);
  return sesRequest<T>({
    options: input.options,
    fetch: input.fetch,
    method: "POST",
    url: `${input.apiBaseUrl}/`,
    bodyText: form.toString(),
    contentType: "application/x-www-form-urlencoded; charset=utf-8",
    signal: input.input.signal ?? input.options.signal,
    ...(input.input.headers ? { headers: input.input.headers } : {}),
  });
}

export function sesOperationUrl(
  apiBaseUrl: string,
  path: string,
  pathParams: Record<string, string | number | boolean | undefined> = {},
  query: SesEmailProviderQuery = {},
): string {
  const resolvedPath = path.replace(/\{([^}]+)\}/g, (_match, name: string) => {
    const value = pathParams[name];
    if (value === undefined) throw new Error(`Missing Amazon SES path parameter '${name}'.`);
    return encodeURIComponent(String(value));
  });
  const url = new URL(`${apiBaseUrl}${resolvedPath.startsWith("/") ? resolvedPath : `/${resolvedPath}`}`);
  appendGenericQuery(url, query);
  return url.toString();
}

export function applyOptionalQuery(url: URL, input: { NextToken?: string; PageSize?: number }) {
  if (input.NextToken) url.searchParams.set("NextToken", input.NextToken);
  if (input.PageSize !== undefined) url.searchParams.set("PageSize", String(input.PageSize));
}

export function applySuppressionListQuery(url: URL, input: SesListSuppressedDestinationsInput) {
  applyOptionalQuery(url, input);
  if (input.StartDate !== undefined) url.searchParams.set("StartDate", String(input.StartDate));
  if (input.EndDate !== undefined) url.searchParams.set("EndDate", String(input.EndDate));
  if (input.TenantName) url.searchParams.set("TenantName", input.TenantName);
}

function appendGenericQuery(url: URL, query: SesEmailProviderQuery) {
  for (const [name, value] of Object.entries(query)) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined && item !== null) url.searchParams.append(name, String(item));
      }
      continue;
    }
    url.searchParams.set(name, String(value));
  }
}

function appendAwsQueryParams(form: URLSearchParams, value: unknown, prefix?: string) {
  if (value === undefined || value === null) return;
  if (value instanceof URLSearchParams) {
    for (const [name, entryValue] of value.entries()) form.append(name, entryValue);
    return;
  }
  if (typeof value !== "object") {
    if (prefix) form.set(prefix, String(value));
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((entry, index) => appendAwsQueryParams(form, entry, `${prefix}.member.${index + 1}`));
    return;
  }
  for (const [name, entryValue] of Object.entries(value as SesEmailJsonObject)) {
    appendAwsQueryParams(form, entryValue, prefix ? `${prefix}.${name}` : name);
  }
}

function normalizeSesResponseBody<T>(body: unknown): T & { message?: string; Message?: string } {
  if (body === undefined) return {} as T & { message?: string; Message?: string };
  if (typeof body === "string") {
    return { raw: body } as unknown as T & { message?: string; Message?: string };
  }
  return body as T & { message?: string; Message?: string };
}

function sesErrorDetails(body: unknown, status: number): { message: string; code?: string } {
  const payload = providerObject(body);
  const codeValue = payload?.code ?? payload?.Code ?? payload?.__type;
  const code = typeof codeValue === "string" || typeof codeValue === "number" ? String(codeValue) : undefined;
  const messageValue = payload?.message ?? payload?.Message;
  const message = typeof messageValue === "string"
    ? messageValue
    : `Amazon SES API returned ${status}.`;
  return {
    message,
    ...(code ? { code } : {}),
  };
}
