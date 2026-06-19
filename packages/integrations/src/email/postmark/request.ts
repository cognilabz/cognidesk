import type {
  PostmarkEmailClientOptions,
  PostmarkEmailProviderPayload,
  PostmarkEmailProviderQuery,
  PostmarkHttpMethod,
  PostmarkMessageSearchInput,
} from "./contracts.js";

export type PostmarkTokenHeader = "x-postmark-server-token" | "x-postmark-account-token";

export async function postmarkRequest<T>(input: {
  url: string;
  method: PostmarkHttpMethod;
  options: PostmarkEmailClientOptions;
  fetch: typeof fetch;
  body?: PostmarkEmailProviderPayload | undefined;
  headers?: Record<string, string>;
  tokenHeader: PostmarkTokenHeader;
}): Promise<T> {
  const token = input.tokenHeader === "x-postmark-account-token"
    ? input.options.accountToken
    : input.options.serverToken;
  if (!token) throw new Error("Postmark API token is required for this request.");
  const response = await input.fetch(input.url, {
    method: input.method,
    headers: {
      accept: "application/json",
      [input.tokenHeader]: token,
      ...(input.body ? { "content-type": "application/json" } : {}),
      ...(input.headers ?? {}),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  const text = await response.text();
  const body = text ? JSON.parse(text) as T & { Message?: string; ErrorCode?: number } : {} as T;
  if (!response.ok) {
    throw new Error((body as { Message?: string }).Message ?? `Postmark API returned ${response.status}.`);
  }
  return body as T;
}

export function postmarkOperationUrl(
  apiBaseUrl: string,
  path: string,
  pathParams: Record<string, string | number | boolean | undefined> = {},
  query: PostmarkEmailProviderQuery = {},
): string {
  const resolvedPath = path.replace(/\{([^}]+)\}/g, (_match, name: string) => {
    const value = pathParams[name];
    if (value === undefined) throw new Error(`Missing Postmark path parameter '${name}'.`);
    return encodeURIComponent(String(value));
  });
  const url = new URL(`${apiBaseUrl}${resolvedPath.startsWith("/") ? resolvedPath : `/${resolvedPath}`}`);
  appendQuery(url, query);
  return url.toString();
}

export function resolvePostmarkApiBaseUrl(options: PostmarkEmailClientOptions) {
  return (options.apiBaseUrl ?? "https://api.postmarkapp.com").replace(/\/+$/, "");
}

export function applyMessageSearchQuery(url: URL, input: PostmarkMessageSearchInput) {
  if (input.count !== undefined) url.searchParams.set("count", String(input.count));
  if (input.offset !== undefined) url.searchParams.set("offset", String(input.offset));
  if (input.recipient) url.searchParams.set("recipient", input.recipient);
  if (input.fromEmail) url.searchParams.set("fromemail", input.fromEmail);
  if (input.tag) url.searchParams.set("tag", input.tag);
  if (input.status) url.searchParams.set("status", input.status);
  if (input.messageStream) url.searchParams.set("messagestream", input.messageStream);
  if (input.fromDate) url.searchParams.set("fromdate", input.fromDate);
  if (input.toDate) url.searchParams.set("todate", input.toDate);
}

function appendQuery(url: URL, query: PostmarkEmailProviderQuery) {
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
