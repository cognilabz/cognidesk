import { defineIntegration, providerJsonRequest, type ProviderHttpMethod, type ProviderQueryValue } from "@cognidesk/integration-kit";
import { genesysEngageProviderManifest, genesysEngageProviderManifestInput, genesysEngageSupportSlice } from "./manifest.js";

export { genesysEngageProviderManifest, genesysEngageProviderManifestInput, genesysEngageSupportSlice } from "./manifest.js";

export type ProviderJsonObject = Record<string, unknown>;

export interface GenesysEngageClientOptions {
  apiBaseUrl: string;
  accessToken?: string | undefined;
  authorizationHeader?: string | undefined;
  apiKey?: string | undefined;
  apiKeyHeaderName?: string | undefined;
  defaultHandoffPath?: string | undefined;
  readinessPath?: string | undefined;
  fetch?: typeof fetch | undefined;
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
  createHandoff(input: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  scheduleCallback(input?: GenesysEngageOperationInput): Promise<ProviderJsonObject>;
  startContact(input?: GenesysEngageOperationInput): Promise<ProviderJsonObject>;
  sendChatMessage(input?: GenesysEngageOperationInput): Promise<ProviderJsonObject>;
  readiness(): Promise<ProviderJsonObject>;
}

export function createGenesysEngageClient(options: GenesysEngageClientOptions): GenesysEngageClient {
  const request = (method: ProviderHttpMethod, path: string, input: GenesysEngageOperationInput = {}) => providerJsonRequest<ProviderJsonObject>({
    baseUrl: options.apiBaseUrl,
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
    providerName: "Genesys Engage / GMS",
  });
  const requestAllowedOperation = (operationId: string, input: GenesysEngageOperationInput = {}) => {
    const operation = genesysEngageSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
    if (!operation || String(operation.path) === "host-configured") throw new Error(`Genesys Engage / GMS operation '${operationId}' is not in the reviewed allowlist.`);
    return request(operation.method as ProviderHttpMethod, operation.path, input);
  };
  const client: GenesysEngageClient = {
    createHandoff(input) {
      const path = options.defaultHandoffPath;
      if (!path) throw new Error("Genesys Engage / GMS handoff path must be configured by the host app.");
      return request("POST", path, { body: input.payload ?? {}, query: input.query, idempotencyKey: input.idempotencyKey });
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
      const path = options.readinessPath ?? "";
      if (!path) throw new Error("Genesys Engage / GMS readiness path must be configured by the host app.");
      return request("GET", path);
    },
  };
  return client;
}

export function createGenesysEngageIntegration(options: GenesysEngageClientOptions) {
  const client = createGenesysEngageClient(options);
  return defineIntegration({
    manifest: genesysEngageProviderManifestInput,
    operations: {
      "contactCenter.handoff.request": async (input: unknown) => client.createHandoff(input as ConfiguredHandoffInput),
      "contactCenter.callback.schedule": async (input: unknown) => client.scheduleCallback(input as GenesysEngageOperationInput),
      "contactCenter.contact.start": async (input: unknown) => client.startContact(input as GenesysEngageOperationInput),
      "genesys-engage.chat.send": async (input: unknown) => client.sendChatMessage(input as GenesysEngageOperationInput),
    },
  });
}
