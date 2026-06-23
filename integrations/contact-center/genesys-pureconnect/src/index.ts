import { defineIntegration, providerJsonRequest, type ProviderHttpMethod, type ProviderQueryValue } from "@cognidesk/integration-kit";
import { genesysPureConnectProviderManifest, genesysPureConnectProviderManifestInput, genesysPureConnectSupportSlice } from "./manifest.js";

export { genesysPureConnectProviderManifest, genesysPureConnectProviderManifestInput, genesysPureConnectSupportSlice } from "./manifest.js";

export type ProviderJsonObject = Record<string, unknown>;

export interface GenesysPureConnectClientOptions {
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
  allowMutation?: boolean | undefined;
  classification?: string | undefined;
}

export interface GenesysPureConnectClient {
  createHandoff(input: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  createConnection(input?: GenesysPureConnectOperationInput): Promise<ProviderJsonObject>;
  request(input: ProviderExtensionRequestInput): Promise<ProviderJsonObject>;
  readiness(): Promise<ProviderJsonObject>;
}

export function createGenesysPureConnectClient(options: GenesysPureConnectClientOptions): GenesysPureConnectClient {
  const request = (method: ProviderHttpMethod, path: string, input: GenesysPureConnectOperationInput = {}) => providerJsonRequest<ProviderJsonObject>({
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
    providerName: "Genesys PureConnect / ICWS",
  });
  const requestAllowedOperation = (operationId: string, input: GenesysPureConnectOperationInput = {}) => {
    const operation = genesysPureConnectSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
    if (!operation || String(operation.path) === "host-configured") throw new Error(`Genesys PureConnect / ICWS operation '${operationId}' is not in the reviewed allowlist.`);
    return request(operation.method as ProviderHttpMethod, operation.path, input);
  };
  const client: GenesysPureConnectClient = {
    createHandoff(input) {
      const path = options.defaultHandoffPath;
      if (!path) throw new Error("Genesys PureConnect / ICWS handoff path must be configured by the host app.");
      return request("POST", path, { body: input.payload ?? {}, query: input.query, idempotencyKey: input.idempotencyKey });
    },
    createConnection(input: GenesysPureConnectOperationInput = {}) {
      return requestAllowedOperation("createConnection", input);
    },
    request(input) {
      const operation = input.operationId
        ? genesysPureConnectSupportSlice.allowedOperations.find((candidate) => candidate.id === input.operationId)
        : undefined;
      const method = input.method ?? (operation?.method as ProviderHttpMethod | undefined) ?? "GET";
      const path = input.path ?? operation?.path;
      if (!path || path === "host-configured") throw new Error("Genesys PureConnect / ICWS request path or reviewed operationId is required.");
      if (["POST", "PUT", "PATCH", "DELETE"].includes(method) && !input.allowMutation) {
        throw new Error("Genesys PureConnect / ICWS mutating extension requests require allowMutation=true and host policy classification.");
      }
      return request(method, path, input);
    },
    readiness() {
      const path = options.readinessPath ?? "";
      if (!path) throw new Error("Genesys PureConnect / ICWS readiness path must be configured by the host app.");
      return request("GET", path);
    },
  };
  return client;
}

export function createGenesysPureConnectIntegration(options: GenesysPureConnectClientOptions) {
  const client = createGenesysPureConnectClient(options);
  return defineIntegration({
    manifest: genesysPureConnectProviderManifestInput,
    operations: {
      "contact-center.handoff.request": async (input: unknown) => client.createHandoff(input as ConfiguredHandoffInput),
      "genesys-pureconnect.icws.connect": async (input: unknown) => client.createConnection(input as GenesysPureConnectOperationInput),
      "genesys-pureconnect.icws.request": async (input: unknown) => client.request(input as ProviderExtensionRequestInput),
    },
  });
}
