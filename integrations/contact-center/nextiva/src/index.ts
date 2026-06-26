import {
  defineIntegration,
  providerJsonRequest,
  type ProviderHttpMethod,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import { nextivaProviderManifest, nextivaProviderManifestInput, nextivaSupportSlice } from "./manifest.js";

export { nextivaProviderManifest, nextivaProviderManifestInput, nextivaSupportSlice } from "./manifest.js";

export type NextivaJsonPrimitive = string | number | boolean | null;
export type NextivaJsonValue =
  | NextivaJsonPrimitive
  | NextivaJsonObject
  | readonly NextivaJsonValue[];
export interface NextivaJsonObject {
  [key: string]: NextivaJsonValue;
}
export type ProviderJsonObject = NextivaJsonObject;

export interface ProviderRestRetryOptions {
  attempts?: number | undefined;
  statusCodes?: readonly number[] | undefined;
  baseDelayMs?: number | undefined;
  maxDelayMs?: number | undefined;
}

type ProviderRestRequestInput = Parameters<typeof providerJsonRequest>[0] & {
  signal?: AbortSignal | undefined;
  timeoutMs?: number | undefined;
  retry?: number | ProviderRestRetryOptions | undefined;
};

function providerRestRequest<T = unknown>(input: ProviderRestRequestInput): Promise<T> {
  return providerJsonRequest<T>(input as Parameters<typeof providerJsonRequest>[0]);
}

export interface NextivaClientOptions {
  baseUrl?: string | undefined;
  apiBaseUrl?: string | undefined;
  accessToken?: string | undefined;
  authorizationHeader?: string | undefined;
  apiKey?: string | undefined;
  apiKeyHeaderName?: string | undefined;
  defaultHandoffPath?: string | undefined;
  readinessPath?: string | undefined;
  fetch?: typeof fetch | undefined;
  signal?: AbortSignal | undefined;
  timeoutMs?: number | undefined;
  retry?: number | ProviderRestRetryOptions | undefined;
  providerClient?: NextivaProviderClient | undefined;
}

export interface NextivaIntegrationOptions extends NextivaClientOptions {
  nextivaClient?: NextivaClient | undefined;
}

export interface ConfiguredHandoffInput {
  payload?: ProviderJsonObject;
  query?: Record<string, ProviderQueryValue> | undefined;
  idempotencyKey?: string | undefined;
}

export interface NextivaOperationInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: Record<string, ProviderQueryValue> | undefined;
  body?: NextivaJsonValue;
  headers?: Record<string, string | undefined> | undefined;
  idempotencyKey?: string | undefined;
}

export interface ProviderExtensionRequestInput extends NextivaOperationInput {
  operationId?: string | undefined;
  method?: ProviderHttpMethod | undefined;
  path?: string | undefined;
  allowMutation?: boolean | undefined;
  classification?: string | undefined;
}

export interface NextivaClient {
  providerClient: NextivaProviderClient;
  createHandoff(input?: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  request(input: ProviderExtensionRequestInput): Promise<ProviderJsonObject>;
  readiness(): Promise<ProviderJsonObject>;
}

export interface NextivaProviderClient {
  createHandoff(input: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  request(input: ProviderExtensionRequestInput): Promise<ProviderJsonObject>;
  readiness?(): Promise<ProviderJsonObject>;
}

export function createNextivaClient(options: NextivaClientOptions = {}): NextivaClient {
  const providerClient = options.providerClient ?? createNextivaRestProviderClient(options);
  return {
    providerClient,
    createHandoff(input = {}) {
      return providerClient.createHandoff(normalizeConfiguredHandoffInput(input));
    },
    request(input) {
      return providerClient.request(validateNextivaProviderRequest(input));
    },
    readiness() {
      if (!providerClient.readiness) {
        throw new Error("Nextiva Contact Center provider client must implement readiness() for live readiness checks.");
      }
      return providerClient.readiness();
    },
  };
}

export function createNextivaIntegrationOperationHandlers(options: NextivaIntegrationOptions = {}) {
  const client = options.nextivaClient ?? createNextivaClient(options);
  return {
    "contact-center.handoff.request": async (input: unknown) => client.createHandoff(input as ConfiguredHandoffInput),
    "nextiva.request": async (input: unknown) => client.request(input as ProviderExtensionRequestInput),
  } as const;
}

export function createNextivaIntegration(options: NextivaIntegrationOptions = {}) {
  return defineIntegration({
    manifest: nextivaProviderManifestInput,
    operations: createNextivaIntegrationOperationHandlers(options),
  });
}

const supportedRequestMethods = new Set<ProviderHttpMethod>(["GET", "POST", "PUT", "PATCH", "DELETE"]);
const mutatingRequestMethods = new Set<ProviderHttpMethod>(["POST", "PUT", "PATCH", "DELETE"]);
const absoluteUrlPattern = /^[a-z][a-z0-9+.-]*:\/\//i;

function createNextivaRestProviderClient(options: NextivaClientOptions): NextivaProviderClient {
  const request = (method: ProviderHttpMethod, path: string, input: NextivaOperationInput = {}) => providerRestRequest<ProviderJsonObject>({
    baseUrl: configuredBaseUrl(options),
    method,
    path,
    pathParams: input.pathParams,
    query: input.query,
    body: input.body,
    headers: input.headers,
    accessToken: options.accessToken,
    authorizationHeader: options.authorizationHeader,
    apiKey: options.apiKey,
    apiKeyHeaderName: options.apiKeyHeaderName,
    idempotencyKey: input.idempotencyKey,
    fetch: options.fetch,
    signal: options.signal,
    timeoutMs: options.timeoutMs,
    retry: options.retry,
    providerName: "Nextiva Contact Center",
  });

  return {
    createHandoff(input) {
      const path = configuredPath(options.defaultHandoffPath, "Nextiva Contact Center handoff path");
      return request("POST", path, {
        body: input.payload ?? {},
        query: input.query,
        idempotencyKey: input.idempotencyKey,
      });
    },
    request(input) {
      const value = validateNextivaProviderRequest(input);
      return request(value.method, value.path, value);
    },
    readiness() {
      const path = configuredPath(options.readinessPath, "Nextiva Contact Center readiness path");
      return request("GET", path);
    },
  };
}

function validateNextivaProviderRequest(input: ProviderExtensionRequestInput): ProviderExtensionRequestInput & { method: ProviderHttpMethod; path: string } {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    throw new Error("Nextiva Contact Center request input object is required.");
  }
  const normalized = normalizeNextivaOperationInput(input, "Nextiva Contact Center request");
  const operation = normalized.operationId
    ? reviewedOperation(normalized.operationId)
    : undefined;
  const method = providerHttpMethod(normalized.method ?? operationMethod(operation) ?? "GET", "Nextiva Contact Center");
  const path = normalized.path ?? operationPath(operation);
  if (!path || path === "host-configured") {
    throw new Error("Nextiva Contact Center request path or reviewed operationId is required.");
  }
  const restPath = providerRestPath(path, "Nextiva Contact Center request path");
  if (mutatingRequestMethods.has(method) && (normalized.allowMutation !== true || !hasPolicyClassification(normalized.classification))) {
    throw new Error("Nextiva Contact Center mutating extension requests require allowMutation=true and host policy classification.");
  }
  return {
    ...normalized,
    method,
    path: restPath,
  };
}

function hasPolicyClassification(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function providerHttpMethod(value: unknown, providerName: string): ProviderHttpMethod {
  const method = String(value).toUpperCase();
  if (!supportedRequestMethods.has(method as ProviderHttpMethod)) {
    throw new Error(`${providerName} request method '${method}' is not supported.`);
  }
  return method as ProviderHttpMethod;
}

function normalizeConfiguredHandoffInput(input: ConfiguredHandoffInput): ConfiguredHandoffInput {
  if (!isRecord(input)) {
    throw new Error("Nextiva Contact Center handoff input object is required.");
  }
  const payload = input.payload ?? {};
  assertNextivaJsonObject(payload, "Nextiva Contact Center handoff payload");
  return {
    payload,
    ...(input.query !== undefined ? { query: providerQuery(input.query, "Nextiva Contact Center handoff query") } : {}),
    ...(input.idempotencyKey !== undefined ? { idempotencyKey: nonEmptyHeaderValue(input.idempotencyKey, "Nextiva Contact Center idempotencyKey") } : {}),
  };
}

function normalizeNextivaOperationInput<T extends NextivaOperationInput>(input: T, label: string): T {
  if (input.pathParams !== undefined) pathParams(input.pathParams, `${label} pathParams`);
  if (input.query !== undefined) providerQuery(input.query, `${label} query`);
  if (input.body !== undefined) assertNextivaJsonValue(input.body, `${label} body`);
  if (input.headers !== undefined) providerHeaders(input.headers, `${label} headers`);
  if (input.idempotencyKey !== undefined) nonEmptyHeaderValue(input.idempotencyKey, `${label} idempotencyKey`);
  return input;
}

function reviewedOperation(operationId: string): NextivaAllowedOperation {
  const operation = nextivaSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
  if (!operation) {
    throw new Error(`Nextiva Contact Center operationId '${operationId}' is not in the reviewed allowlist.`);
  }
  return operation;
}

function operationMethod(operation: NextivaAllowedOperation | undefined): ProviderHttpMethod | undefined {
  return operation && "method" in operation ? operation.method as ProviderHttpMethod : undefined;
}

function operationPath(operation: NextivaAllowedOperation | undefined): string | undefined {
  return operation && "path" in operation ? operation.path : undefined;
}

function configuredBaseUrl(options: Pick<NextivaClientOptions, "apiBaseUrl" | "baseUrl">): string {
  const baseUrl = options.baseUrl ?? options.apiBaseUrl;
  if (!baseUrl) throw new Error("Nextiva Contact Center baseUrl is required to use the built-in REST adapter.");
  return baseUrl;
}

function configuredPath(path: string | undefined, label: string): string {
  if (!path) throw new Error(`${label} must be configured to use the built-in REST adapter.`);
  return providerRestPath(path, label);
}

type NextivaAllowedOperation = typeof nextivaSupportSlice.allowedOperations[number];

function providerRestPath(value: string, label: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`${label} must be a non-empty relative path.`);
  }
  if (value !== value.trim() || value.includes("\r") || value.includes("\n")) {
    throw new Error(`${label} must not contain surrounding whitespace or newlines.`);
  }
  if (!value.startsWith("/") || value.startsWith("//") || absoluteUrlPattern.test(value)) {
    throw new Error(`${label} must be a relative API path beginning with '/'.`);
  }
  return value;
}

function pathParams(value: unknown, label: string): asserts value is Record<string, string | number | boolean | undefined> {
  if (!isRecord(value)) throw new Error(`${label} must be an object.`);
  for (const [key, item] of Object.entries(value)) {
    if (item === undefined || typeof item === "string" || typeof item === "boolean") continue;
    if (typeof item === "number" && Number.isFinite(item)) continue;
    throw new Error(`${label}.${key} must be a string, finite number, boolean, or undefined.`);
  }
}

function providerQuery(value: unknown, label: string): Record<string, ProviderQueryValue> {
  if (!isRecord(value)) throw new Error(`${label} must be an object.`);
  for (const [key, item] of Object.entries(value)) assertProviderQueryValue(item, `${label}.${key}`);
  return value as Record<string, ProviderQueryValue>;
}

function assertProviderQueryValue(value: unknown, label: string): asserts value is ProviderQueryValue {
  if (value === null || value === undefined || typeof value === "string" || typeof value === "boolean") return;
  if (typeof value === "number" && Number.isFinite(value)) return;
  if (Array.isArray(value)) {
    for (const [index, item] of value.entries()) {
      if (typeof item === "string" || typeof item === "boolean" || (typeof item === "number" && Number.isFinite(item))) continue;
      throw new Error(`${label}[${index}] must be a string, finite number, or boolean.`);
    }
    return;
  }
  throw new Error(`${label} must be a provider query value.`);
}

function providerHeaders(value: unknown, label: string): asserts value is Record<string, string | undefined> {
  if (!isRecord(value)) throw new Error(`${label} must be an object.`);
  for (const [key, item] of Object.entries(value)) {
    if (!key || key.includes("\r") || key.includes("\n")) throw new Error(`${label} keys must be non-empty header names.`);
    if (item === undefined) continue;
    nonEmptyHeaderValue(item, `${label}.${key}`);
  }
}

function nonEmptyHeaderValue(value: unknown, label: string): string {
  if (typeof value !== "string" || value.trim().length === 0 || value.includes("\r") || value.includes("\n")) {
    throw new Error(`${label} must be a non-empty string without newlines.`);
  }
  return value;
}

function assertNextivaJsonObject(value: unknown, label: string): asserts value is NextivaJsonObject {
  if (!isJsonObject(value)) throw new Error(`${label} must be a JSON object.`);
  for (const [key, item] of Object.entries(value)) assertNextivaJsonValue(item, `${label}.${key}`);
}

function assertNextivaJsonValue(value: unknown, label: string): asserts value is NextivaJsonValue {
  if (value === null || typeof value === "string" || typeof value === "boolean") return;
  if (typeof value === "number") {
    if (!Number.isFinite(value)) throw new Error(`${label} must be a finite JSON number.`);
    return;
  }
  if (Array.isArray(value)) {
    for (const [index, item] of value.entries()) assertNextivaJsonValue(item, `${label}[${index}]`);
    return;
  }
  assertNextivaJsonObject(value, label);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isJsonObject(value: unknown): value is Record<string, unknown> {
  if (!isRecord(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}
