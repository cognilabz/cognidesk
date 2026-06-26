import {
  defineIntegration,
  providerJsonRequest,
  type ProviderHttpMethod,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import { genesysPureConnectProviderManifest, genesysPureConnectProviderManifestInput, genesysPureConnectSupportSlice } from "./manifest.js";

export { genesysPureConnectProviderManifest, genesysPureConnectProviderManifestInput, genesysPureConnectSupportSlice } from "./manifest.js";

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

export interface GenesysPureConnectClientOptions {
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
  providerClient?: GenesysPureConnectProviderClient | undefined;
}

export interface GenesysPureConnectIntegrationOptions extends GenesysPureConnectClientOptions {
  genesysPureConnectClient?: GenesysPureConnectClient | undefined;
}

export interface ConfiguredHandoffInput {
  payload?: unknown;
  query?: Record<string, ProviderQueryValue> | undefined;
  idempotencyKey?: string | undefined;
}

export interface GenesysPureConnectOperationInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: Record<string, ProviderQueryValue> | undefined;
  body?: unknown;
  headers?: Record<string, string | undefined> | undefined;
  idempotencyKey?: string | undefined;
}

export interface ProviderExtensionRequestInput extends GenesysPureConnectOperationInput {
  operationId?: string | undefined;
  method?: ProviderHttpMethod | undefined;
  path?: string | undefined;
  hostReviewedPath?: boolean | undefined;
  allowMutation?: boolean | undefined;
  classification?: string | undefined;
}

export interface GenesysPureConnectClient {
  providerClient: GenesysPureConnectProviderClient;
  createHandoff(input?: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  createConnection(input?: GenesysPureConnectOperationInput): Promise<ProviderJsonObject>;
  request(input: ProviderExtensionRequestInput): Promise<ProviderJsonObject>;
  readiness(): Promise<ProviderJsonObject>;
}

export interface GenesysPureConnectProviderClient {
  createHandoff(input: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  createConnection(input?: GenesysPureConnectOperationInput): Promise<ProviderJsonObject>;
  request(input: ProviderExtensionRequestInput): Promise<ProviderJsonObject>;
  readiness?(): Promise<ProviderJsonObject>;
}

export function createGenesysPureConnectClient(options: GenesysPureConnectClientOptions = {}): GenesysPureConnectClient {
  const providerClient = options.providerClient ?? createGenesysPureConnectRestProviderClient(options);
  return {
    providerClient,
    createHandoff(input = {}) {
      return providerClient.createHandoff(normalizeConfiguredHandoffInput(input));
    },
    createConnection(input: GenesysPureConnectOperationInput = {}) {
      return providerClient.createConnection(validateGenesysPureConnectAllowedOperation("createConnection", input));
    },
    request(input) {
      return providerClient.request(validateGenesysPureConnectProviderRequest(input));
    },
    readiness() {
      if (!providerClient.readiness) {
        throw new Error("Genesys PureConnect / ICWS provider client must implement readiness() for live readiness checks.");
      }
      return providerClient.readiness();
    },
  };
}

export function createGenesysPureConnectIntegrationOperationHandlers(options: GenesysPureConnectIntegrationOptions = {}) {
  const client = options.genesysPureConnectClient ?? createGenesysPureConnectClient(options);
  return {
    "contact-center.handoff.request": async (input: unknown) => client.createHandoff(input as ConfiguredHandoffInput),
    "genesys-pureconnect.icws.connect": async (input: unknown) => client.createConnection(input as GenesysPureConnectOperationInput),
    "genesys-pureconnect.icws.request": async (input: unknown) => client.request(input as ProviderExtensionRequestInput),
  } as const;
}

export function createGenesysPureConnectIntegration(options: GenesysPureConnectIntegrationOptions = {}) {
  return defineIntegration({
    manifest: genesysPureConnectProviderManifestInput,
    operations: createGenesysPureConnectIntegrationOperationHandlers(options),
  });
}

const supportedRequestMethods = new Set<ProviderHttpMethod>(["GET", "POST", "PUT", "PATCH", "DELETE"]);
const mutatingRequestMethods = new Set<ProviderHttpMethod>(["POST", "PUT", "PATCH", "DELETE"]);

function createGenesysPureConnectRestProviderClient(options: GenesysPureConnectClientOptions): GenesysPureConnectProviderClient {
  const request = (method: ProviderHttpMethod, path: string, input: GenesysPureConnectOperationInput = {}) => providerRestRequest<ProviderJsonObject>({
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
    providerName: "Genesys PureConnect / ICWS",
  });

  return {
    createHandoff(input) {
      const path = configuredPath(options.defaultHandoffPath, "Genesys PureConnect / ICWS handoff path");
      return request("POST", path, {
        body: input.payload ?? {},
        query: input.query,
        idempotencyKey: input.idempotencyKey,
      });
    },
    createConnection(input: GenesysPureConnectOperationInput = {}) {
      return requestAllowedOperation("createConnection", input);
    },
    request(input) {
      const value = validateGenesysPureConnectProviderRequest(input);
      return request(value.method, value.path, value);
    },
    readiness() {
      const path = configuredPath(options.readinessPath, "Genesys PureConnect / ICWS readiness path");
      return request("GET", path);
    },
  };

  function requestAllowedOperation(operationId: string, input: GenesysPureConnectOperationInput = {}) {
    const operation = genesysPureConnectSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
    if (!operation || isHostConfiguredOperationPath(operation.path)) {
      throw new Error(`Genesys PureConnect / ICWS operation '${operationId}' is not in the reviewed allowlist.`);
    }
    return request(operation.method as ProviderHttpMethod, operation.path, input);
  }
}

function validateGenesysPureConnectAllowedOperation(operationId: string, input: GenesysPureConnectOperationInput = {}) {
  const operation = genesysPureConnectSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
  if (!operation || isHostConfiguredOperationPath(operation.path)) {
    throw new Error(`Genesys PureConnect / ICWS operation '${operationId}' is not in the reviewed allowlist.`);
  }
  return {
    ...input,
    method: operation.method as ProviderHttpMethod,
    path: operation.path,
  };
}

function validateGenesysPureConnectProviderRequest(input: ProviderExtensionRequestInput): ProviderExtensionRequestInput & { method: ProviderHttpMethod; path: string } {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    throw new Error("Genesys PureConnect / ICWS request input object is required.");
  }
  const operation = resolveGenesysPureConnectOperation(input.operationId);
  const method = providerHttpMethod(input.method ?? operationMethod(operation) ?? "GET", "Genesys PureConnect / ICWS");
  const path = input.path ?? operationPath(operation);
  if (!path || isHostConfiguredOperationPath(path)) {
    throw new Error("Genesys PureConnect / ICWS request path or concrete reviewed operationId is required.");
  }
  if (!usesReviewedOperationPath(path, operation)) {
    assertHostReviewedPath(input);
  }
  if (mutatingRequestMethods.has(method) && (input.allowMutation !== true || !hasPolicyClassification(input.classification))) {
    throw new Error("Genesys PureConnect / ICWS mutating extension requests require allowMutation=true and host policy classification.");
  }
  return {
    ...input,
    method,
    path,
  };
}

function resolveGenesysPureConnectOperation(operationId: string | undefined): GenesysPureConnectAllowedOperation | undefined {
  if (!operationId) return undefined;
  const operation = genesysPureConnectSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
  if (!operation) {
    throw new Error(`Genesys PureConnect / ICWS operation '${operationId}' is not in the reviewed allowlist.`);
  }
  return operation;
}

function usesReviewedOperationPath(path: string, operation: GenesysPureConnectAllowedOperation | undefined): boolean {
  const reviewedPath = operationPath(operation);
  return reviewedPath !== undefined && !isHostConfiguredOperationPath(reviewedPath) && path === reviewedPath;
}

function assertHostReviewedPath(input: ProviderExtensionRequestInput): void {
  if (input.hostReviewedPath !== true || !hasPolicyClassification(input.classification)) {
    throw new Error("Genesys PureConnect / ICWS host-configured extension paths require hostReviewedPath=true and host policy classification.");
  }
}

function isHostConfiguredOperationPath(path: string | undefined): boolean {
  return path === undefined || path === "host-configured" || path.startsWith("host-configured-");
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

function operationMethod(operation: GenesysPureConnectAllowedOperation | undefined): ProviderHttpMethod | undefined {
  return operation && "method" in operation ? operation.method as ProviderHttpMethod : undefined;
}

function operationPath(operation: GenesysPureConnectAllowedOperation | undefined): string | undefined {
  return operation && "path" in operation ? operation.path : undefined;
}

function configuredBaseUrl(options: Pick<GenesysPureConnectClientOptions, "apiBaseUrl" | "baseUrl">): string {
  const baseUrl = options.baseUrl ?? options.apiBaseUrl;
  if (!baseUrl) throw new Error("Genesys PureConnect / ICWS baseUrl is required to use the built-in REST adapter.");
  return baseUrl;
}

function configuredPath(path: string | undefined, label: string): string {
  if (!path) throw new Error(`${label} must be configured to use the built-in REST adapter.`);
  return path;
}

type GenesysPureConnectAllowedOperation = typeof genesysPureConnectSupportSlice.allowedOperations[number];
