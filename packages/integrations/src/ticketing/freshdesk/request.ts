import type {
  FreshdeskJsonObject,
  FreshdeskListInput,
  FreshdeskListTicketsInput,
  FreshdeskProviderPayload,
  FreshdeskSearchInput,
  FreshdeskTicketingClientOptions,
} from "./contracts.js";

export function normalizeDomain(domain: string) {
  if (!domain) throw new Error("Freshdesk domain is required.");
  const withProtocol = /^https?:\/\//i.test(domain) ? domain : `https://${domain}`;
  const url = new URL(withProtocol);
  return `${url.protocol}//${url.host}`;
}

export function freshdeskUrl(baseUrl: string, apiBasePath: string, path: string) {
  return new URL(`${apiBasePath.replace(/\/+$/, "")}${path}`, baseUrl);
}

export function searchUrl(
  baseUrl: string,
  apiBasePath: string,
  resource: "tickets" | "contacts",
  input: FreshdeskSearchInput,
) {
  const url = freshdeskUrl(baseUrl, apiBasePath, `/search/${resource}`);
  url.searchParams.set("query", input.query ? `"${input.query}"` : "\"\"");
  if (input.page !== undefined) url.searchParams.set("page", String(input.page));
  if (input.limit !== undefined) url.searchParams.set("per_page", String(input.limit));
  return url;
}

export function applyInclude(url: URL, include?: string[]) {
  if (include?.length) url.searchParams.set("include", include.join(","));
}

export function applyListTicketsQuery(url: URL, input: FreshdeskListTicketsInput) {
  if (input.email) url.searchParams.set("email", input.email);
  if (input.requesterId !== undefined) url.searchParams.set("requester_id", String(input.requesterId));
  if (input.companyId !== undefined) url.searchParams.set("company_id", String(input.companyId));
  if (input.updatedSince) url.searchParams.set("updated_since", input.updatedSince);
  applyInclude(url, input.include);
  if (input.page !== undefined) url.searchParams.set("page", String(input.page));
  if (input.limit !== undefined) url.searchParams.set("per_page", String(input.limit));
}

export function applyListQuery(url: URL, input: FreshdeskListInput) {
  if (input.page !== undefined) url.searchParams.set("page", String(input.page));
  if (input.limit !== undefined) url.searchParams.set("per_page", String(input.limit));
}

export async function freshdeskRequest<T>(input: {
  url: URL;
  method: "GET" | "POST" | "PUT";
  options: FreshdeskTicketingClientOptions;
  fetch: typeof fetch;
  body?: FreshdeskProviderPayload;
}): Promise<T> {
  const response = await input.fetch(input.url.toString(), {
    method: input.method,
    headers: {
      accept: "application/json",
      ...(input.body ? { "content-type": "application/json" } : {}),
      authorization: `Basic ${Buffer.from(`${input.options.apiKey}:X`).toString("base64")}`,
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  const text = await response.text();
  const body = text ? JSON.parse(text) as T & FreshdeskErrorResponse : {} as T & FreshdeskErrorResponse;
  if (!response.ok) {
    throw new Error(freshdeskErrorMessage(body, response.status));
  }
  return body as T;
}

export function stripUndefined<T extends FreshdeskJsonObject>(input: T): T {
  return Object.fromEntries(Object.entries(input).filter(([, value]) => value !== undefined)) as T;
}

interface FreshdeskErrorResponse {
  description?: string;
  errors?: Array<{
    field?: string;
    message?: string;
    code?: string;
  }>;
  message?: string;
}

function freshdeskErrorMessage(body: FreshdeskErrorResponse, status: number) {
  const firstError = body.errors?.[0];
  if (firstError?.field || firstError?.message || firstError?.code) {
    return [firstError.field, firstError.message, firstError.code].filter(Boolean).join(": ");
  }
  return body.description ?? body.message ?? `Freshdesk API returned ${status}.`;
}
