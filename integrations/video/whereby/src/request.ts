import type {
  WherebyAccessLinkInput,
  WherebyCursorListInput,
  WherebyHttpMethod,
  WherebyOperationRequestInput,
  WherebyVideoClientOptions,
  WherebyVideoJsonObject,
  WherebyVideoProviderPayload,
  WherebyVideoProviderQuery,
} from "./contracts.js";

export function wherebyUrl(apiBaseUrl: string, path: string) {
  return new URL(path.replace(/^\/+/, ""), `${apiBaseUrl}/`);
}

export function applyWherebyCursorQuery(url: URL, input: WherebyCursorListInput) {
  if (input.cursor) url.searchParams.set("cursor", input.cursor);
  if (input.limit !== undefined) url.searchParams.set("limit", String(input.limit));
}

export function applyWherebyAccessLinkQuery(url: URL, input: WherebyAccessLinkInput) {
  if (input.validForSeconds !== undefined) url.searchParams.set("validForSeconds", String(input.validForSeconds));
}

export async function wherebyRequest<T>(input: {
  url: URL;
  method: WherebyHttpMethod;
  options: WherebyVideoClientOptions;
  fetch: typeof fetch;
  body?: WherebyVideoProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
}): Promise<T> {
  if (!input.options.apiKey) throw new Error("Whereby API key is required.");
  const requestBody = wherebyRequestBody(input.body);
  const response = await input.fetch(input.url.toString(), {
    method: input.method,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${input.options.apiKey}`,
      ...(requestBody && !isFormDataBody(requestBody) ? { "content-type": "application/json" } : {}),
      ...input.headers,
    },
    ...(requestBody ? { body: requestBody } : {}),
  });
  const text = await response.text();
  const responseBody = (text ? JSON.parse(text) : {}) as T & WherebyErrorResponse;
  if (!response.ok) {
    throw new Error(wherebyErrorMessage(responseBody, response.status));
  }
  return responseBody as T;
}

export function wherebyOperationUrl(
  apiBaseUrl: string,
  path: string,
  pathParams: WherebyOperationRequestInput["pathParams"] = {},
  query?: WherebyVideoProviderQuery,
) {
  const resolvedPath = path.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams[key];
    if (value === undefined) throw new Error(`Missing Whereby path parameter '${key}'.`);
    return encodeURIComponent(String(value));
  });
  const url = wherebyUrl(apiBaseUrl, resolvedPath);
  appendWherebyQuery(url.searchParams, query);
  return url;
}

export function stripUndefined(input: WherebyVideoJsonObject) {
  return Object.fromEntries(Object.entries(input).filter((entry) => entry[1] !== undefined));
}

function appendWherebyQuery(params: URLSearchParams, query?: WherebyVideoProviderQuery) {
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value === undefined || value === null || value === "") continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined && item !== null && item !== "") params.append(key, String(item));
      }
      continue;
    }
    if (typeof value === "object") {
      for (const [nestedKey, nestedValue] of Object.entries(value as WherebyVideoJsonObject)) {
        if (nestedValue !== undefined && nestedValue !== null && nestedValue !== "") {
          params.set(`${key}[${nestedKey}]`, String(nestedValue));
        }
      }
      continue;
    }
    params.set(key, String(value));
  }
}

function wherebyRequestBody(body: unknown): BodyInit | undefined {
  if (body === undefined) return undefined;
  if (isFormDataBody(body)) return body;
  return JSON.stringify(body);
}

function isFormDataBody(body: unknown): body is FormData {
  return typeof FormData !== "undefined" && body instanceof FormData;
}

interface WherebyErrorResponse {
  error?: string;
  message?: string;
  detail?: string;
  statusCode?: number;
}

function wherebyErrorMessage(body: WherebyErrorResponse, status: number) {
  const prefix = body.statusCode ? `Whereby REST API returned ${body.statusCode}` : `Whereby REST API returned ${status}`;
  return body.message ?? body.detail ?? body.error ?? `${prefix}.`;
}
