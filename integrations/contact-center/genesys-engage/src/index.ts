import {
  defineIntegration,
  providerJsonRequest,
  type ProviderHttpMethod,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import { genesysEngageProviderManifest, genesysEngageProviderManifestInput, genesysEngageSupportSlice } from "./manifest.js";

export { genesysEngageProviderManifest, genesysEngageProviderManifestInput, genesysEngageSupportSlice } from "./manifest.js";

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
  createHandoff(input?: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  scheduleCallback(input?: GenesysEngageOperationInput): Promise<ProviderJsonObject>;
  startContact(input?: GenesysEngageOperationInput): Promise<ProviderJsonObject>;
  sendChatMessage(input?: GenesysEngageOperationInput): Promise<ProviderJsonObject>;
  readiness(): Promise<ProviderJsonObject>;
}

export interface GenesysEngageProviderClient {
  createHandoff(input: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  scheduleCallback(input?: GenesysEngageOperationInput): Promise<ProviderJsonObject>;
  startContact(input?: GenesysEngageOperationInput): Promise<ProviderJsonObject>;
  sendChatMessage(input?: GenesysEngageOperationInput): Promise<ProviderJsonObject>;
  readiness?(): Promise<ProviderJsonObject>;
}

export function createGenesysEngageClient(options: GenesysEngageClientOptions = {}): GenesysEngageClient {
  const providerClient = options.providerClient ?? createGenesysEngageRestProviderClient(options);
  return {
    providerClient,
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
    readiness() {
      if (!providerClient.readiness) {
        throw new Error("Genesys Engage / GMS provider client must implement readiness() for live readiness checks.");
      }
      return providerClient.readiness();
    },
  };
}

export function createGenesysEngageIntegrationOperationHandlers(options: GenesysEngageIntegrationOptions = {}) {
  const client = options.genesysEngageClient ?? createGenesysEngageClient(options);
  return {
    "contact-center.handoff.request": async (input: unknown) => client.createHandoff(input as ConfiguredHandoffInput),
    "contact-center.callback.schedule": async (input: unknown) => client.scheduleCallback(input as GenesysEngageOperationInput),
    "contact-center.contact.start": async (input: unknown) => client.startContact(input as GenesysEngageOperationInput),
    "genesys-engage.chat.send": async (input: unknown) => client.sendChatMessage(input as GenesysEngageOperationInput),
  } as const;
}

export function createGenesysEngageIntegration(options: GenesysEngageIntegrationOptions = {}) {
  return defineIntegration({
    manifest: genesysEngageProviderManifestInput,
    operations: createGenesysEngageIntegrationOperationHandlers(options),
  });
}

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

function normalizeConfiguredHandoffInput(input: ConfiguredHandoffInput): ConfiguredHandoffInput {
  return {
    ...(input.payload !== undefined ? { payload: input.payload } : {}),
    ...(input.query !== undefined ? { query: input.query } : {}),
    ...(input.idempotencyKey !== undefined ? { idempotencyKey: input.idempotencyKey } : {}),
  };
}

function configuredBaseUrl(options: Pick<GenesysEngageClientOptions, "apiBaseUrl" | "baseUrl">): string {
  const baseUrl = options.baseUrl ?? options.apiBaseUrl;
  if (!baseUrl) throw new Error("Genesys Engage / GMS baseUrl is required to use the built-in REST adapter.");
  return baseUrl;
}

function configuredPath(path: string | undefined, label: string): string {
  if (!path) throw new Error(`${label} must be configured to use the built-in REST adapter.`);
  return path;
}
