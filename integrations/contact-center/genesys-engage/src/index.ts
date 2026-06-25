import {
  defineIntegration,
  providerJsonRequest,
  type ProviderHttpMethod,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import EngagementClientSdk from "engagement-client-js";
import { genesysEngageProviderManifest, genesysEngageProviderManifestInput, genesysEngageSupportSlice } from "./manifest.js";

export { genesysEngageProviderManifest, genesysEngageProviderManifestInput, genesysEngageRestSupportSlice, genesysEngageSupportSlice } from "./manifest.js";

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

export interface GenesysEngageClientOptions {
  baseUrl?: string | undefined;
  apiBaseUrl?: string | undefined;
  engagementBaseUrl?: string | undefined;
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
  engagementSdk?: GenesysEngageEngagementSdk | undefined;
  engagementSdkClient?: GenesysEngageEngagementSdkClient | undefined;
  providerClient?: GenesysEngageProviderClient | undefined;
}

export interface GenesysEngageIntegrationOptions extends GenesysEngageClientOptions {
  genesysEngageClient?: GenesysEngageClient | undefined;
}

export interface ConfiguredHandoffInput {
  payload?: unknown;
  query?: Record<string, ProviderQueryValue> | undefined;
  idempotencyKey?: string | undefined;
}

export interface GenesysEngageOperationInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: Record<string, ProviderQueryValue> | undefined;
  body?: unknown;
  headers?: Record<string, string | undefined> | undefined;
  idempotencyKey?: string | undefined;
}

export interface ProviderExtensionRequestInput extends GenesysEngageOperationInput {
  operationId?: string | undefined;
  method?: ProviderHttpMethod | undefined;
  path?: string | undefined;
  allowMutation?: boolean | undefined;
  classification?: string | undefined;
}

export interface GenesysEngageClient {
  providerClient: GenesysEngageProviderClient;
  engagementSdkClient?: GenesysEngageEngagementSdkClient | undefined;
  createHandoff(input?: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  scheduleCallback(input?: GenesysEngageOperationInput): Promise<ProviderJsonObject>;
  startContact(input?: GenesysEngageOperationInput): Promise<ProviderJsonObject>;
  sendChatMessage(input?: GenesysEngageOperationInput): Promise<ProviderJsonObject>;
  request(input: ProviderExtensionRequestInput): Promise<ProviderJsonObject>;
  readiness(): Promise<ProviderJsonObject>;
}

export interface GenesysEngageProviderClient {
  createHandoff(input: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  scheduleCallback(input?: GenesysEngageOperationInput): Promise<ProviderJsonObject>;
  startContact(input?: GenesysEngageOperationInput): Promise<ProviderJsonObject>;
  sendChatMessage(input?: GenesysEngageOperationInput): Promise<ProviderJsonObject>;
  request(input: ProviderExtensionRequestInput): Promise<ProviderJsonObject>;
  readiness?(): Promise<ProviderJsonObject>;
}

export type GenesysEngageEngagementSdk = typeof EngagementClientSdk;
export type GenesysEngageEngagementApiClient = InstanceType<GenesysEngageEngagementSdk["ApiClient"]>;
export type GenesysEngageCallbacksApi = InstanceType<GenesysEngageEngagementSdk["CallbacksApi"]>;

export interface GenesysEngageEngagementSdkClient {
  sdk: GenesysEngageEngagementSdk;
  apiClient: GenesysEngageEngagementApiClient;
  callbacksApi: GenesysEngageCallbacksApi;
}

export function createGenesysEngageClient(options: GenesysEngageClientOptions = {}): GenesysEngageClient {
  const engagementSdkClient = options.providerClient ? undefined : createOptionalGenesysEngageEngagementSdkClient(options);
  const providerClient = options.providerClient ?? (
    engagementSdkClient
      ? createGenesysEngageHybridProviderClient(options, engagementSdkClient)
      : createGenesysEngageRestProviderClient(options)
  );
  return {
    providerClient,
    ...(engagementSdkClient ? { engagementSdkClient } : {}),
    createHandoff(input = {}) {
      return providerClient.createHandoff(normalizeConfiguredHandoffInput(input));
    },
    scheduleCallback(input: GenesysEngageOperationInput = {}) {
      return providerClient.scheduleCallback(validateGenesysEngageAllowedOperation("createCallback", input));
    },
    startContact(input: GenesysEngageOperationInput = {}) {
      return providerClient.startContact(validateGenesysEngageAllowedOperation("requestChat", input));
    },
    sendChatMessage(input: GenesysEngageOperationInput = {}) {
      return providerClient.sendChatMessage(validateGenesysEngageAllowedOperation("sendChatMessage", input));
    },
    request(input) {
      return providerClient.request(validateGenesysEngageProviderRequest(input));
    },
    readiness() {
      if (!providerClient.readiness) {
        throw new Error("Genesys Engage / GMS provider client must implement readiness() for live readiness checks.");
      }
      return providerClient.readiness();
    },
  };
}

export function createGenesysEngageEngagementSdkClient(
  options: Pick<GenesysEngageClientOptions, "apiBaseUrl" | "baseUrl" | "engagementBaseUrl" | "engagementSdk"> = {},
): GenesysEngageEngagementSdkClient {
  const sdk = options.engagementSdk ?? EngagementClientSdk;
  const apiClient = new sdk.ApiClient();
  apiClient.basePath = configuredEngagementBaseUrl(options);
  return {
    sdk,
    apiClient,
    callbacksApi: new sdk.CallbacksApi(apiClient),
  };
}

export function createGenesysEngageIntegrationOperationHandlers(options: GenesysEngageIntegrationOptions = {}) {
  const client = options.genesysEngageClient ?? createGenesysEngageClient(options);
  return {
    "contact-center.handoff.request": async (input: unknown) => client.createHandoff(input as ConfiguredHandoffInput),
    "contact-center.callback.schedule": async (input: unknown) => client.scheduleCallback(input as GenesysEngageOperationInput),
    "contact-center.contact.start": async (input: unknown) => client.startContact(input as GenesysEngageOperationInput),
    "genesys-engage.chat.send": async (input: unknown) => client.sendChatMessage(input as GenesysEngageOperationInput),
    "genesys-engage.gms.request": async (input: unknown) => client.request(input as ProviderExtensionRequestInput),
  } as const;
}

export function createGenesysEngageIntegration(options: GenesysEngageIntegrationOptions = {}) {
  return defineIntegration({
    manifest: genesysEngageProviderManifestInput,
    operations: createGenesysEngageIntegrationOperationHandlers(options),
  });
}

const supportedRequestMethods = new Set<ProviderHttpMethod>(["GET", "POST", "PUT", "PATCH", "DELETE"]);
const mutatingRequestMethods = new Set<ProviderHttpMethod>(["POST", "PUT", "PATCH", "DELETE"]);

function createGenesysEngageRestProviderClient(options: GenesysEngageClientOptions): GenesysEngageProviderClient {
  const request = (method: ProviderHttpMethod, path: string, input: GenesysEngageOperationInput = {}) => providerRestRequest<ProviderJsonObject>({
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
    providerName: "Genesys Engage / GMS",
  });

  return {
    createHandoff(input) {
      const path = configuredPath(options.defaultHandoffPath, "Genesys Engage / GMS handoff path");
      return request("POST", path, {
        body: input.payload ?? {},
        query: input.query,
        idempotencyKey: input.idempotencyKey,
      });
    },
    scheduleCallback(input: GenesysEngageOperationInput = {}) {
      return requestAllowedOperation("createCallback", input);
    },
    startContact(input: GenesysEngageOperationInput = {}) {
      return requestAllowedOperation("requestChat", input);
    },
    sendChatMessage(input: GenesysEngageOperationInput = {}) {
      return requestAllowedOperation("sendChatMessage", input);
    },
    request(input) {
      const value = validateGenesysEngageProviderRequest(input);
      return request(value.method, value.path, value);
    },
    readiness() {
      const path = configuredPath(options.readinessPath, "Genesys Engage / GMS readiness path");
      return request("GET", path);
    },
  };

  function requestAllowedOperation(operationId: string, input: GenesysEngageOperationInput = {}) {
    const operation = genesysEngageSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
    if (!operation || String(operation.path) === "host-configured") {
      throw new Error(`Genesys Engage / GMS operation '${operationId}' is not in the reviewed allowlist.`);
    }
    return request(operation.method as ProviderHttpMethod, operation.path, input);
  }
}

function createGenesysEngageHybridProviderClient(
  options: GenesysEngageClientOptions,
  engagementSdkClient: GenesysEngageEngagementSdkClient,
): GenesysEngageProviderClient {
  const restProviderClient = createGenesysEngageRestProviderClient(options);
  const hybridClient: GenesysEngageProviderClient = {
    createHandoff: restProviderClient.createHandoff,
    scheduleCallback(input: GenesysEngageOperationInput = {}) {
      const apiKey = callbackApiKey(options, input);
      const body = input.body ?? {};
      return engagementSdkClient.callbacksApi.bookCallbackExternal(apiKey, body) as Promise<ProviderJsonObject>;
    },
    startContact: restProviderClient.startContact,
    sendChatMessage: restProviderClient.sendChatMessage,
    request: restProviderClient.request,
  };
  if (restProviderClient.readiness) hybridClient.readiness = restProviderClient.readiness;
  return hybridClient;
}

function validateGenesysEngageAllowedOperation(operationId: string, input: GenesysEngageOperationInput = {}) {
  const operation = genesysEngageSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
  if (!operation || String(operation.path) === "host-configured") {
    throw new Error(`Genesys Engage / GMS operation '${operationId}' is not in the reviewed allowlist.`);
  }
  return {
    ...input,
    method: operation.method as ProviderHttpMethod,
    path: operation.path,
  };
}

function validateGenesysEngageProviderRequest(input: ProviderExtensionRequestInput): ProviderExtensionRequestInput & { method: ProviderHttpMethod; path: string } {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    throw new Error("Genesys Engage / GMS request input object is required.");
  }
  const operation = input.operationId
    ? genesysEngageSupportSlice.allowedOperations.find((candidate) => candidate.id === input.operationId)
    : undefined;
  const method = providerHttpMethod(input.method ?? operationMethod(operation) ?? "GET", "Genesys Engage / GMS");
  const path = input.path ?? operationPath(operation);
  if (!path || path === "host-configured") {
    throw new Error("Genesys Engage / GMS request path or reviewed operationId is required.");
  }
  if (mutatingRequestMethods.has(method) && (input.allowMutation !== true || !hasPolicyClassification(input.classification))) {
    throw new Error("Genesys Engage / GMS mutating extension requests require allowMutation=true and host policy classification.");
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

function operationMethod(operation: GenesysEngageAllowedOperation | undefined): ProviderHttpMethod | undefined {
  return operation && "method" in operation ? operation.method as ProviderHttpMethod : undefined;
}

function operationPath(operation: GenesysEngageAllowedOperation | undefined): string | undefined {
  return operation && "path" in operation ? operation.path : undefined;
}

function configuredBaseUrl(options: Pick<GenesysEngageClientOptions, "apiBaseUrl" | "baseUrl">): string {
  const baseUrl = options.baseUrl ?? options.apiBaseUrl;
  if (!baseUrl) throw new Error("Genesys Engage / GMS baseUrl is required to use the built-in REST adapter.");
  return baseUrl;
}

function createOptionalGenesysEngageEngagementSdkClient(
  options: GenesysEngageClientOptions,
): GenesysEngageEngagementSdkClient | undefined {
  if (options.engagementSdkClient) return options.engagementSdkClient;
  if (!options.apiKey && !options.engagementSdk) return undefined;
  return createGenesysEngageEngagementSdkClient(options);
}

function configuredEngagementBaseUrl(
  options: Pick<GenesysEngageClientOptions, "apiBaseUrl" | "baseUrl" | "engagementBaseUrl">,
): string {
  const baseUrl = options.engagementBaseUrl ?? options.apiBaseUrl ?? options.baseUrl;
  if (!baseUrl) throw new Error("Genesys Engage Engagement API baseUrl is required to use engagement-client-js.");
  return baseUrl;
}

function callbackApiKey(options: Pick<GenesysEngageClientOptions, "apiKey" | "apiKeyHeaderName">, input: GenesysEngageOperationInput): string {
  const headerName = options.apiKeyHeaderName ?? "x-api-key";
  const apiKey = input.headers?.[headerName] ?? input.headers?.[headerName.toLowerCase()] ?? options.apiKey;
  if (!apiKey) throw new Error("Genesys Engage Engagement API key is required to schedule callbacks through engagement-client-js.");
  return apiKey;
}

function configuredPath(path: string | undefined, label: string): string {
  if (!path) throw new Error(`${label} must be configured to use the built-in REST adapter.`);
  return path;
}

type GenesysEngageAllowedOperation = typeof genesysEngageSupportSlice.allowedOperations[number];
