import { defineIntegration, providerJsonRequest, type ProviderHttpMethod, type ProviderQueryValue } from "@cognidesk/integration-kit";
import { aircallProviderManifest, aircallProviderManifestInput, aircallSupportSlice } from "./manifest.js";

export { aircallProviderManifest, aircallProviderManifestInput, aircallSupportSlice } from "./manifest.js";

export type ProviderJsonObject = Record<string, unknown>;

export interface AircallClientOptions {
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
  path?: string | undefined;
  query?: Record<string, ProviderQueryValue> | undefined;
  idempotencyKey?: string | undefined;
}

export interface AircallOperationInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: Record<string, ProviderQueryValue> | undefined;
  body?: unknown;
  headers?: Record<string, string | undefined> | undefined;
  idempotencyKey?: string | undefined;
}

export interface ProviderExtensionRequestInput extends AircallOperationInput {
  operationId?: string | undefined;
  method?: ProviderHttpMethod | undefined;
  path?: string | undefined;
  allowMutation?: boolean | undefined;
  classification?: string | undefined;
}

export interface AircallClient {
  createHandoff(input: ConfiguredHandoffInput): Promise<ProviderJsonObject>;

  readiness(): Promise<ProviderJsonObject>;
}

export function createAircallClient(options: AircallClientOptions): AircallClient {
  const request = (method: ProviderHttpMethod, path: string, input: AircallOperationInput = {}) => providerJsonRequest<ProviderJsonObject>({
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
    providerName: "Aircall",
  });
  const requestAllowedOperation = (operationId: string, input: AircallOperationInput = {}) => {
    const operation = aircallSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
    if (!operation || String(operation.path) === "host-configured") throw new Error(`Aircall operation '${operationId}' is not in the reviewed allowlist.`);
    return request(operation.method as ProviderHttpMethod, operation.path, input);
  };
  const client: AircallClient = {
    createHandoff(input) {
      const path = input.path ?? options.defaultHandoffPath;
      if (!path) throw new Error("Aircall handoff path must be configured by the host app.");
      return request("POST", path, { body: input.payload ?? {}, query: input.query, idempotencyKey: input.idempotencyKey });
    },

    readiness() {
      const path = options.readinessPath ?? "/v1/ping";
      if (!path) throw new Error("Aircall readiness path must be configured by the host app.");
      return request("GET", path);
    },
  };
  return client;
}

export function createAircallIntegration(options: AircallClientOptions) {
  const client = createAircallClient(options);
  return defineIntegration({
    manifest: aircallProviderManifestInput,
    operations: {
      "contactCenter.handoff.request": async (input: unknown) => client.createHandoff(input as ConfiguredHandoffInput),
    },
  });
}
