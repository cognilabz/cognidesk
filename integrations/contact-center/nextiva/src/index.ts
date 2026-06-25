import {
  defineIntegration,
  providerJsonRequest,
  type ProviderHttpMethod,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import { nextivaProviderManifest, nextivaProviderManifestInput, nextivaSupportSlice } from "./manifest.js";

export { nextivaProviderManifest, nextivaProviderManifestInput, nextivaSupportSlice } from "./manifest.js";

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
  payload?: unknown;
  query?: Record<string, ProviderQueryValue> | undefined;
  idempotencyKey?: string | undefined;
}

export interface NextivaOperationInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: Record<string, ProviderQueryValue> | undefined;
  body?: unknown;
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
  const operation = input.operationId
    ? nextivaSupportSlice.allowedOperations.find((candidate) => candidate.id === input.operationId)
    : undefined;
  const method = providerHttpMethod(input.method ?? operationMethod(operation) ?? "GET", "Nextiva Contact Center");
  const path = input.path ?? operationPath(operation);
  if (!path || path === "host-configured") {
    throw new Error("Nextiva Contact Center request path or reviewed operationId is required.");
  }
  if (mutatingRequestMethods.has(method) && (input.allowMutation !== true || !hasPolicyClassification(input.classification))) {
    throw new Error("Nextiva Contact Center mutating extension requests require allowMutation=true and host policy classification.");
  }
  return {
    ...input,
    method,
    path,
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
  return {
    ...(input.payload !== undefined ? { payload: input.payload } : {}),
    ...(input.query !== undefined ? { query: input.query } : {}),
    ...(input.idempotencyKey !== undefined ? { idempotencyKey: input.idempotencyKey } : {}),
  };
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
  return path;
}

type NextivaAllowedOperation = typeof nextivaSupportSlice.allowedOperations[number];
