import { createHash } from "node:crypto";
import type {
  ConnectionAuth,
  ConnectionDefinition,
  ConnectionExecutionOptions,
  ConnectionHttpRequest,
  ConnectionJsonValue,
  ConnectionOpenApiDocument,
  ConnectionOperationAlias,
  ConnectionToolArguments,
  ConnectionToolResult,
  CredentialResolver,
  OpenApiConnectionDefinition,
} from "./types.js";
import {
  coerceNullablePrimitiveRecord,
  coercePrimitiveRecord,
  isHttpMethod,
  isRecord,
  isStringRecord,
  stableJson,
} from "./utils.js";

export async function discoverOpenApiOperationIds(
  connection: OpenApiConnectionDefinition,
  options: Pick<ConnectionExecutionOptions, "fetch" | "signal"> = {},
): Promise<Set<string>> {
  const document = await loadOpenApiDocument(connection, options);
  const operationIds = new Set<string>();
  for (const [path, methods] of Object.entries(openApiPaths(document))) {
    if (!isRecord(methods)) continue;
    for (const [method, operation] of Object.entries(methods)) {
      if (!isHttpMethod(method) || !isRecord(operation)) continue;
      const operationId = typeof operation.operationId === "string"
        ? operation.operationId
        : `${method.toLowerCase()} ${path}`;
      operationIds.add(operationId);
    }
  }
  return operationIds;
}

export async function connectionDigest(
  connection: ConnectionDefinition,
  options: Pick<ConnectionExecutionOptions, "fetch" | "signal"> = {},
): Promise<string | undefined> {
  if (connection.kind !== "openapi") return undefined;
  const source = await loadOpenApiSource(connection, options);
  return `sha256:${createHash("sha256").update(source.text).digest("hex")}`;
}

export async function executeOpenApiOperation(
  connection: OpenApiConnectionDefinition,
  operation: ConnectionOperationAlias,
  input: ConnectionToolArguments,
  options: ConnectionExecutionOptions,
): Promise<ConnectionToolResult> {
  const document = await loadOpenApiDocument(connection, options);
  const match = findOpenApiOperation(document, operation.providerOperation);
  if (!match) throw new Error(`OpenAPI operation '${operation.providerOperation}' is not available.`);
  const request = operation.request?.(input) ?? defaultRequest(input);
  const baseUrl = (options.baseUrl ?? connection.baseUrl ?? firstServerUrl(document)).replace(/\/+$/, "");
  const path = interpolatePath(match.path, request.path ?? {});
  const url = new URL(`${baseUrl}${path.startsWith("/") ? path : `/${path}`}`);
  for (const [key, value] of Object.entries(request.query ?? {})) {
    if (value !== undefined && value !== null) url.searchParams.set(key, String(value));
  }
  const headers: Record<string, string> = {
    accept: "application/json",
    ...(request.body !== undefined ? { "content-type": "application/json" } : {}),
    ...(request.headers ?? {}),
  };
  await applyAuth(headers, url, connection.auth ?? { kind: "none" }, options.credentials);
  const fetchImpl = options.fetch ?? fetch;
  const response = await fetchImpl(url, {
    method: match.method.toUpperCase(),
    headers,
    ...(request.body !== undefined ? { body: JSON.stringify(request.body) } : {}),
    ...(options.signal ? { signal: options.signal } : {}),
  });
  const text = await response.text();
  const body = text ? parseResponseBody(text) : undefined;
  if (!response.ok) {
    throw new Error(responseErrorMessage(body, response.status));
  }
  return body;
}

async function loadOpenApiDocument(
  connection: OpenApiConnectionDefinition,
  options: Pick<ConnectionExecutionOptions, "fetch" | "signal">,
): Promise<ConnectionOpenApiDocument> {
  return JSON.parse((await loadOpenApiSource(connection, options)).text) as ConnectionOpenApiDocument;
}

async function loadOpenApiSource(
  connection: OpenApiConnectionDefinition,
  options: Pick<ConnectionExecutionOptions, "fetch" | "signal">,
) {
  if (typeof connection.source !== "string") {
    return { text: stableJson(connection.source) };
  }
  if (!/^https?:\/\//.test(connection.source)) {
    return { text: connection.source };
  }
  const fetchImpl = options.fetch ?? fetch;
  const response = await fetchImpl(connection.source, {
    ...(options.signal ? { signal: options.signal } : {}),
  });
  if (!response.ok) throw new Error(`OpenAPI contract fetch failed with ${response.status}.`);
  return { text: await response.text() };
}

function findOpenApiOperation(document: ConnectionOpenApiDocument, operationId: string) {
  for (const [path, methods] of Object.entries(openApiPaths(document))) {
    if (!isRecord(methods)) continue;
    for (const [method, operation] of Object.entries(methods)) {
      if (!isHttpMethod(method) || !isRecord(operation)) continue;
      const candidate = typeof operation.operationId === "string"
        ? operation.operationId
        : `${method.toLowerCase()} ${path}`;
      if (candidate === operationId) return { path, method };
    }
  }
  return null;
}

function openApiPaths(document: ConnectionOpenApiDocument) {
  return isRecord(document.paths) ? document.paths : {};
}

function firstServerUrl(document: ConnectionOpenApiDocument) {
  const servers = Array.isArray(document.servers) ? document.servers : [];
  const first = servers.find(isRecord);
  const url = first && typeof first.url === "string" ? first.url : "";
  if (!url) throw new Error("OpenAPI connection requires a base URL or a document server URL.");
  return url;
}

function defaultRequest(input: ConnectionToolArguments): ConnectionHttpRequest {
  if (!isRecord(input)) return { body: input };
  const hasEnvelope = "path" in input || "query" in input || "headers" in input || "body" in input;
  if (!hasEnvelope) return { body: input };
  return {
    ...(isRecord(input.path) ? { path: coercePrimitiveRecord(input.path) } : {}),
    ...(isRecord(input.query) ? { query: coerceNullablePrimitiveRecord(input.query) } : {}),
    ...(isStringRecord(input.headers) ? { headers: input.headers } : {}),
    ...("body" in input ? { body: input.body } : {}),
  };
}

function interpolatePath(path: string, values: Record<string, string | number | boolean>) {
  return path.replace(/\{([^}]+)\}/g, (_, key: string) => {
    const value = values[key];
    if (value === undefined) throw new Error(`Missing path parameter '${key}'.`);
    return encodeURIComponent(String(value));
  });
}

async function applyAuth(
  headers: Record<string, string>,
  url: URL,
  auth: ConnectionAuth,
  credentials?: CredentialResolver,
) {
  if (auth.kind === "none") return;
  if (auth.kind === "bearer") {
    headers[auth.headerName ?? "authorization"] = `Bearer ${await requireCredential(credentials, auth.credentialId)}`;
  } else if (auth.kind === "apiKey") {
    const value = await requireCredential(credentials, auth.credentialId);
    if (auth.in === "header") headers[auth.name] = value;
    else url.searchParams.set(auth.name, value);
  } else if (auth.kind === "basic") {
    const username = await requireCredential(credentials, auth.usernameCredentialId);
    const password = await requireCredential(credentials, auth.passwordCredentialId);
    headers.authorization = `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`;
  }
}

async function requireCredential(credentials: CredentialResolver | undefined, id: string) {
  const value = typeof credentials === "function" ? await credentials(id) : credentials?.[id];
  if (!value) throw new Error(`Connection credential '${id}' is required.`);
  return value;
}

function parseResponseBody(text: string): ConnectionJsonValue {
  try {
    return JSON.parse(text) as ConnectionJsonValue;
  } catch {
    return text;
  }
}

function responseErrorMessage(body: ConnectionToolResult, status: number) {
  if (isRecord(body) && typeof body.message === "string") return body.message;
  if (isRecord(body) && typeof body.error === "string") return body.error;
  return `Connection operation returned HTTP ${status}.`;
}
