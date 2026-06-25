import {
  defineIntegration,
  providerJsonRequest,
  type ProviderHttpMethod,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import { niceCxoneProviderManifest, niceCxoneProviderManifestInput, niceCxoneSupportSlice } from "./manifest.js";

export { niceCxoneProviderManifest, niceCxoneProviderManifestInput, niceCxoneRestSupportSlice, niceCxoneSupportSlice } from "./manifest.js";

export type ProviderJsonObject = Record<string, unknown>;

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

export type NiceCxoneProviderMethod = ProviderHttpMethod;
export type NiceCxoneQueryValue = ProviderQueryValue;

export interface NiceCxoneClientOptions {
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
  providerClient?: NiceCxoneProviderClient | undefined;
}

export interface ConfiguredHandoffInput {
  payload?: unknown;
  query?: Record<string, ProviderQueryValue> | undefined;
  idempotencyKey?: string | undefined;
}

export interface NiceCxoneOperationInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: Record<string, ProviderQueryValue> | undefined;
  body?: unknown;
  headers?: Record<string, string | undefined> | undefined;
  idempotencyKey?: string | undefined;
}

export interface ProviderExtensionRequestInput extends NiceCxoneOperationInput {
  operationId?: string | undefined;
  method?: ProviderHttpMethod | undefined;
  path?: string | undefined;
  allowMutation?: boolean | undefined;
  classification?: string | undefined;
}

export interface NiceCxoneReadinessInput {
  path?: string | undefined;
}

export interface NiceCxoneProviderClient {
  createHandoff(input: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  scheduleCallback(input?: NiceCxoneOperationInput): Promise<ProviderJsonObject>;
  startContact(input?: NiceCxoneOperationInput): Promise<ProviderJsonObject>;
  endContact(input?: NiceCxoneOperationInput): Promise<ProviderJsonObject>;
  request(input: ProviderExtensionRequestInput): Promise<ProviderJsonObject>;
  readiness?(input?: NiceCxoneReadinessInput): Promise<ProviderJsonObject>;
}

export interface NiceCxoneClient {
  providerClient: NiceCxoneProviderClient;
  createHandoff(input?: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  scheduleCallback(input?: NiceCxoneOperationInput): Promise<ProviderJsonObject>;
  startContact(input?: NiceCxoneOperationInput): Promise<ProviderJsonObject>;
  endContact(input?: NiceCxoneOperationInput): Promise<ProviderJsonObject>;
  request(input: ProviderExtensionRequestInput): Promise<ProviderJsonObject>;
  readiness(): Promise<ProviderJsonObject>;
}

type NiceCxoneAllowedOperationInput = NiceCxoneOperationInput & {
  method: ProviderHttpMethod;
  path: string;
};

type NiceCxoneValidatedProviderRequestInput = NiceCxoneOperationInput & {
  operationId?: string | undefined;
  method: ProviderHttpMethod;
  path: string;
  allowMutation?: boolean | undefined;
  classification?: string | undefined;
};

export interface NiceCxoneIntegrationOptions extends NiceCxoneClientOptions {
  niceCxoneClient?: NiceCxoneClient | undefined;
}

export function createNiceCxoneClient(options: NiceCxoneClientOptions = {}): NiceCxoneClient {
  const providerClient = options.providerClient ?? createNiceCxoneRestProviderClient(options);
  return {
    providerClient,
    createHandoff(input = {}) {
      return providerClient.createHandoff(normalizeConfiguredHandoffInput(input));
    },
    scheduleCallback(input: NiceCxoneOperationInput = {}) {
      return providerClient.scheduleCallback(validateNiceCxoneAllowedOperation("scheduleACallback", input));
    },
    startContact(input: NiceCxoneOperationInput = {}) {
      return providerClient.startContact(validateNiceCxoneAllowedOperation("startChatSession", input));
    },
    endContact(input: NiceCxoneOperationInput = {}) {
      return providerClient.endContact(validateNiceCxoneAllowedOperation("endChat", input));
    },
    request(input) {
      return providerClient.request(validateNiceCxoneProviderRequest(input));
    },
    readiness() {
      if (!providerClient.readiness) {
        throw new Error("NICE CXone provider client must implement readiness() for live readiness checks.");
      }
      return providerClient.readiness(readinessInput(options.readinessPath));
    },
  };
}

export function createNiceCxoneIntegrationOperationHandlers(options: NiceCxoneIntegrationOptions = {}) {
  const client = options.niceCxoneClient ?? createNiceCxoneClient(options);
  return {
    "contact-center.handoff.request": async (input: unknown) => client.createHandoff(input as ConfiguredHandoffInput),
    "contact-center.callback.schedule": async (input: unknown) => client.scheduleCallback(input as NiceCxoneOperationInput),
    "contact-center.contact.start": async (input: unknown) => client.startContact(input as NiceCxoneOperationInput),
    "contact-center.contact.end": async (input: unknown) => client.endContact(input as NiceCxoneOperationInput),
    "nice-cxone.request": async (input: unknown) => client.request(input as ProviderExtensionRequestInput),
  } as const;
}

export function createNiceCxoneIntegration(options: NiceCxoneIntegrationOptions = {}) {
  return defineIntegration({
    manifest: niceCxoneProviderManifestInput,
    operations: createNiceCxoneIntegrationOperationHandlers(options),
  });
}

const supportedRequestMethods = new Set<ProviderHttpMethod>(["GET", "POST", "PUT", "PATCH", "DELETE"]);
const mutatingRequestMethods = new Set<ProviderHttpMethod>(["POST", "PUT", "PATCH", "DELETE"]);

function createNiceCxoneRestProviderClient(options: NiceCxoneClientOptions): NiceCxoneProviderClient {
  const request = (method: ProviderHttpMethod, path: string, input: NiceCxoneOperationInput = {}) => providerRestRequest<ProviderJsonObject>({
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
    providerName: "NICE CXone",
  });

  return {
    createHandoff(input) {
      const path = configuredPath(options.defaultHandoffPath, "NICE CXone handoff path");
      return request("POST", path, {
        body: input.payload ?? {},
        query: input.query,
        idempotencyKey: input.idempotencyKey,
      });
    },
    scheduleCallback(input: NiceCxoneOperationInput = {}) {
      return requestAllowedOperation("scheduleACallback", input);
    },
    startContact(input: NiceCxoneOperationInput = {}) {
      return requestAllowedOperation("startChatSession", input);
    },
    endContact(input: NiceCxoneOperationInput = {}) {
      return requestAllowedOperation("endChat", input);
    },
    request(input) {
      const value = validateNiceCxoneProviderRequest(input);
      return request(value.method, value.path, value);
    },
    readiness() {
      const path = configuredPath(options.readinessPath, "NICE CXone readiness path");
      return request("GET", path);
    },
  };

  function requestAllowedOperation(operationId: string, input: NiceCxoneOperationInput = {}) {
    const operation = niceCxoneSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
    if (!operation || String(operation.path) === "host-configured") {
      throw new Error(`NICE CXone operation '${operationId}' is not in the reviewed allowlist.`);
    }
    return request(operation.method as ProviderHttpMethod, operation.path, input);
  }
}

function validateNiceCxoneAllowedOperation(operationId: string, input: NiceCxoneOperationInput = {}): NiceCxoneAllowedOperationInput {
  const operation = niceCxoneSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
  if (!operation || String(operation.path) === "host-configured") {
    throw new Error(`NICE CXone operation '${operationId}' is not in the reviewed allowlist.`);
  }
  const value = normalizeOperationInput(input);
  return {
    ...value,
    method: operation.method as ProviderHttpMethod,
    path: operation.path,
  };
}

function validateNiceCxoneProviderRequest(input: ProviderExtensionRequestInput): NiceCxoneValidatedProviderRequestInput {
  const raw = inputObject(input, "NICE CXone request input object is required.");
  const operationId = optionalStringProperty(raw, "operationId", "NICE CXone operationId");
  const operation = operationId
    ? niceCxoneSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId)
    : undefined;
  const method = providerHttpMethod(raw.method ?? operationMethod(operation) ?? "GET", "NICE CXone");
  const path = optionalStringProperty(raw, "path", "NICE CXone request path") ?? operationPath(operation);
  const allowMutation = optionalBooleanProperty(raw, "allowMutation", "NICE CXone allowMutation");
  const classification = optionalStringProperty(raw, "classification", "NICE CXone policy classification");

  if (!path || path === "host-configured") {
    throw new Error("NICE CXone request path or reviewed operationId is required.");
  }
  if (mutatingRequestMethods.has(method) && (allowMutation !== true || !hasPolicyClassification(classification))) {
    throw new Error("NICE CXone mutating extension requests require allowMutation=true and host policy classification.");
  }
  return {
    ...normalizeOperationInput(input),
    ...(operationId !== undefined ? { operationId } : {}),
    method,
    path,
    ...(allowMutation !== undefined ? { allowMutation } : {}),
    ...(classification !== undefined ? { classification } : {}),
  };
}

function hasPolicyClassification(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function providerHttpMethod(value: unknown, providerName: string): ProviderHttpMethod {
  if (typeof value !== "string") {
    throw new Error(`${providerName} request method must be a string.`);
  }
  const method = String(value).toUpperCase();
  if (!supportedRequestMethods.has(method as ProviderHttpMethod)) {
    throw new Error(`${providerName} request method '${method}' is not supported.`);
  }
  return method as ProviderHttpMethod;
}

function normalizeConfiguredHandoffInput(input: ConfiguredHandoffInput): ConfiguredHandoffInput {
  const raw = inputObject(input, "NICE CXone handoff input object is required.");
  return {
    ...(raw.payload !== undefined ? { payload: raw.payload } : {}),
    ...(raw.query !== undefined ? { query: recordProperty(raw, "query", "NICE CXone handoff query") as Record<string, ProviderQueryValue> } : {}),
    ...(raw.idempotencyKey !== undefined ? { idempotencyKey: stringProperty(raw, "idempotencyKey", "NICE CXone idempotencyKey") } : {}),
  };
}

function normalizeOperationInput(input: NiceCxoneOperationInput): NiceCxoneOperationInput {
  const raw = inputObject(input, "NICE CXone operation input object is required.");
  return {
    ...(raw.pathParams !== undefined ? { pathParams: recordProperty(raw, "pathParams", "NICE CXone pathParams") as Record<string, string | number | boolean | undefined> } : {}),
    ...(raw.query !== undefined ? { query: recordProperty(raw, "query", "NICE CXone query") as Record<string, ProviderQueryValue> } : {}),
    ...(raw.body !== undefined ? { body: raw.body } : {}),
    ...(raw.headers !== undefined ? { headers: recordProperty(raw, "headers", "NICE CXone headers") as Record<string, string | undefined> } : {}),
    ...(raw.idempotencyKey !== undefined ? { idempotencyKey: stringProperty(raw, "idempotencyKey", "NICE CXone idempotencyKey") } : {}),
  };
}

function inputObject(input: unknown, message: string): Record<string, unknown> {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    throw new Error(message);
  }
  return input as Record<string, unknown>;
}

function recordProperty(input: Record<string, unknown>, key: string, label: string): Record<string, unknown> {
  const value = input[key];
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`${label} must be an object.`);
  }
  return value as Record<string, unknown>;
}

function optionalStringProperty(input: Record<string, unknown>, key: string, label: string): string | undefined {
  if (input[key] === undefined) return undefined;
  return stringProperty(input, key, label);
}

function stringProperty(input: Record<string, unknown>, key: string, label: string): string {
  const value = input[key];
  if (typeof value !== "string") {
    throw new Error(`${label} must be a string.`);
  }
  return value;
}

function optionalBooleanProperty(input: Record<string, unknown>, key: string, label: string): boolean | undefined {
  const value = input[key];
  if (value === undefined) return undefined;
  if (typeof value !== "boolean") {
    throw new Error(`${label} must be a boolean.`);
  }
  return value;
}

function operationMethod(operation: NiceCxoneAllowedOperation | undefined): ProviderHttpMethod | undefined {
  return operation && "method" in operation ? operation.method as ProviderHttpMethod : undefined;
}

function operationPath(operation: NiceCxoneAllowedOperation | undefined): string | undefined {
  return operation && "path" in operation ? operation.path : undefined;
}

function readinessInput(readinessPath: string | undefined) {
  if (!readinessPath) return undefined;
  return { path: readinessPath };
}

function configuredBaseUrl(options: Pick<NiceCxoneClientOptions, "apiBaseUrl" | "baseUrl">): string {
  const baseUrl = options.baseUrl ?? options.apiBaseUrl;
  if (!baseUrl) throw new Error("NICE CXone baseUrl is required to use the built-in REST adapter.");
  return baseUrl;
}

function configuredPath(path: string | undefined, label: string): string {
  if (!path) throw new Error(`${label} must be configured to use the built-in REST adapter.`);
  return path;
}

type NiceCxoneAllowedOperation = typeof niceCxoneSupportSlice.allowedOperations[number];
