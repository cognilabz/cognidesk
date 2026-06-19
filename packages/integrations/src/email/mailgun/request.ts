import { Buffer } from "node:buffer";
import type {
  MailgunEmailClientOptions,
  MailgunEmailProviderPayload,
  MailgunEmailProviderQuery,
  MailgunEventsSearchInput,
  MailgunHttpMethod,
  MailgunOperationRequestInput,
} from "./contracts.js";

export async function mailgunRequest<T>(input: {
  url: string | URL;
  method: MailgunHttpMethod;
  options: MailgunEmailClientOptions;
  fetch: typeof fetch;
  body?: MailgunEmailProviderPayload | undefined;
  headers?: Record<string, string>;
}): Promise<T> {
  const encodedBody = encodeMailgunRequestBody(input.body);
  const response = await input.fetch(input.url.toString(), {
    method: input.method,
    headers: {
      accept: "application/json",
      authorization: `Basic ${Buffer.from(`api:${input.options.apiKey}`).toString("base64")}`,
      ...encodedBody.headers,
      ...input.headers,
    },
    ...(encodedBody.body !== undefined ? { body: encodedBody.body } : {}),
  });
  const text = await response.text();
  const responseBody = text ? JSON.parse(text) as T & { message?: string } : {} as T;
  if (!response.ok) {
    throw new Error((responseBody as { message?: string }).message ?? `Mailgun API returned ${response.status}.`);
  }
  return responseBody as T;
}

export function mailgunOperationUrl(
  apiBaseUrl: string,
  pathTemplate: string,
  pathParams: MailgunOperationRequestInput["pathParams"] = {},
  query: MailgunOperationRequestInput["query"] = {},
): URL {
  const expandedPath = pathTemplate.replace(/\{([^}]+)\}/g, (_match, rawName: string) => {
    const value = pathParams[rawName];
    if (value === undefined) throw new Error(`Missing Mailgun path parameter '${rawName}'.`);
    return encodeURIComponent(String(value));
  });
  const url = new URL(`${apiBaseUrl}${expandedPath.startsWith("/") ? expandedPath : `/${expandedPath}`}`);
  appendMailgunQuery(url, query);
  return url;
}

export function resolveMailgunApiBaseUrl(options: MailgunEmailClientOptions) {
  if (options.apiBaseUrl) return options.apiBaseUrl.replace(/\/+$/, "");
  return options.region?.toLowerCase() === "eu"
    ? "https://api.eu.mailgun.net"
    : "https://api.mailgun.net";
}

export function applyEventsSearchQuery(url: URL, input: MailgunEventsSearchInput) {
  if (input.begin) url.searchParams.set("begin", input.begin);
  if (input.end) url.searchParams.set("end", input.end);
  if (input.ascending !== undefined) url.searchParams.set("ascending", typeof input.ascending === "boolean" ? (input.ascending ? "yes" : "no") : input.ascending);
  if (input.limit !== undefined) url.searchParams.set("limit", String(input.limit));
  if (input.event) url.searchParams.set("event", input.event);
  if (input.recipient) url.searchParams.set("recipient", input.recipient);
  if (input.messageId) url.searchParams.set("message-id", input.messageId);
  appendSearchParam(url, "tags", input.tags);
  if (input.severity) url.searchParams.set("severity", input.severity);
}

function appendMailgunQuery(url: URL, query: MailgunEmailProviderQuery = {}) {
  for (const [key, value] of Object.entries(query)) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined && item !== null) url.searchParams.append(key, String(item));
      }
      continue;
    }
    url.searchParams.set(key, String(value));
  }
}

function encodeMailgunRequestBody(body: unknown): { body?: BodyInit; headers: Record<string, string> } {
  if (body === undefined || body === null) return { headers: {} };
  if (
    typeof body === "string"
    || body instanceof FormData
    || body instanceof URLSearchParams
    || body instanceof Blob
    || body instanceof ArrayBuffer
    || ArrayBuffer.isView(body)
  ) {
    return { body: body as BodyInit, headers: {} };
  }
  return {
    body: JSON.stringify(body),
    headers: { "content-type": "application/json" },
  };
}

function appendSearchParam(url: URL, key: string, value?: string | string[]) {
  if (Array.isArray(value)) {
    for (const item of value) url.searchParams.append(key, item);
    return;
  }
  if (value) url.searchParams.set(key, value);
}
