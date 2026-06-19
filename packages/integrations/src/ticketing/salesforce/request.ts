import type {
  SalesforceJsonObject,
  SalesforceProviderPayload,
  SalesforceSearchInput,
  SalesforceTicketingClientOptions,
} from "./contracts.js";

export function normalizeInstanceUrl(instanceUrl: string) {
  if (!instanceUrl) throw new Error("Salesforce instanceUrl is required.");
  const url = new URL(instanceUrl);
  return `${url.protocol}//${url.host}`;
}

export function normalizeApiVersion(apiVersion: string) {
  return apiVersion.startsWith("v") ? apiVersion : `v${apiVersion}`;
}

export function dataUrl(baseUrl: string, apiVersion: string, path: string) {
  return new URL(`/services/data/${apiVersion}${path}`, baseUrl);
}

export function sobjectUrl(baseUrl: string, apiVersion: string, objectName: string) {
  return dataUrl(baseUrl, apiVersion, `/sobjects/${encodeURIComponent(objectName)}`);
}

export function sobjectRowUrl(baseUrl: string, apiVersion: string, objectName: string, recordId: string) {
  return dataUrl(baseUrl, apiVersion, `/sobjects/${encodeURIComponent(objectName)}/${encodeURIComponent(recordId)}`);
}

export function applyFields(url: URL, fields?: string[]) {
  if (fields?.length) url.searchParams.set("fields", fields.join(","));
}

export function buildSoql(input: SalesforceSearchInput) {
  if (input.soql) return input.soql;
  const fields = input.fields?.length ? input.fields.join(", ") : "Id";
  const clauses = [`SELECT ${fields} FROM ${input.objectName}`];
  if (input.where) clauses.push(`WHERE ${input.where}`);
  if (input.orderBy) clauses.push(`ORDER BY ${input.orderBy}`);
  if (input.limit !== undefined) clauses.push(`LIMIT ${input.limit}`);
  if (input.offset !== undefined) clauses.push(`OFFSET ${input.offset}`);
  return clauses.join(" ");
}

export function escapeSoqlString(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

export async function salesforceRequest<T>(input: {
  url: URL;
  method: "GET" | "POST" | "PATCH";
  options: SalesforceTicketingClientOptions;
  fetch: typeof fetch;
  body?: SalesforceProviderPayload;
  headers?: Record<string, string>;
  emptyResponse?: boolean;
}): Promise<T> {
  const response = await input.fetch(input.url.toString(), {
    method: input.method,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${input.options.accessToken}`,
      ...(input.body ? { "content-type": "application/json" } : {}),
      ...(input.headers ?? {}),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  const text = await response.text();
  const body = text ? JSON.parse(text) as T | SalesforceErrorResponse : undefined;
  if (!response.ok) {
    throw new Error(salesforceErrorMessage(body, response.status));
  }
  return (input.emptyResponse ? undefined : (body ?? {})) as T;
}

export function pruneUndefined<T extends SalesforceJsonObject>(input: T) {
  return Object.fromEntries(
    Object.entries(input).filter(([, value]) => value !== undefined),
  ) as Partial<T>;
}

type SalesforceErrorResponse =
  | Array<{ message?: string; errorCode?: string; fields?: string[] }>
  | { message?: string; error?: string; error_description?: string };

function salesforceErrorMessage(body: SalesforceErrorResponse | unknown, status: number) {
  if (Array.isArray(body)) {
    const messages = body.map((error) =>
      [error.errorCode, error.message].filter(Boolean).join(": ")
    ).filter(Boolean);
    if (messages.length > 0) return messages.join("; ");
  }
  if (body && typeof body === "object") {
    const error = body as { message?: string; error?: string; error_description?: string };
    return error.message ?? error.error_description ?? error.error ?? `Salesforce REST API returned ${status}.`;
  }
  return `Salesforce REST API returned ${status}.`;
}
