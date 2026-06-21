import { defineIntegration, providerJsonRequest, type ProviderHttpMethod, type ProviderQueryValue } from "@cognidesk/integration-kit";
import { nextivaProviderManifest, nextivaProviderManifestInput, nextivaSupportSlice } from "./manifest.js";

export { nextivaProviderManifest, nextivaProviderManifestInput, nextivaSupportSlice } from "./manifest.js";

export type ProviderJsonObject = Record<string, unknown>;

export interface NextivaClientOptions {
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
  createHandoff(input: ConfiguredHandoffInput): Promise<ProviderJsonObject>;

  request(input: ProviderExtensionRequestInput): Promise<ProviderJsonObject>;
  readiness(): Promise<ProviderJsonObject>;
}

export function createNextivaClient(options: NextivaClientOptions): NextivaClient {
  const request = (method: ProviderHttpMethod, path: string, input: NextivaOperationInput = {}) => providerJsonRequest<ProviderJsonObject>({
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
    providerName: "Nextiva Contact Center",
  });
  const requestAllowedOperation = (operationId: string, input: NextivaOperationInput = {}) => {
    const operation = nextivaSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
    if (!operation || String(operation.path) === "host-configured") throw new Error(`Nextiva Contact Center operation '${operationId}' is not in the reviewed allowlist.`);
    return request(operation.method as ProviderHttpMethod, operation.path, input);
  };
  const client: NextivaClient = {
    createHandoff(input) {
      const path = options.defaultHandoffPath;
      if (!path) throw new Error("Nextiva Contact Center handoff path must be configured by the host app.");
      return request("POST", path, { body: input.payload ?? {}, query: input.query, idempotencyKey: input.idempotencyKey });
    },

    request(input) {
      const operation = input.operationId
        ? nextivaSupportSlice.allowedOperations.find((candidate) => candidate.id === input.operationId)
        : undefined;
      const method = input.method ?? (operation?.method as ProviderHttpMethod | undefined) ?? "GET";
      const path = input.path ?? operation?.path;
      if (!path || path === "host-configured") throw new Error("Nextiva Contact Center request path or reviewed operationId is required.");
      if (["POST", "PUT", "PATCH", "DELETE"].includes(method) && !input.allowMutation) {
        throw new Error("Nextiva Contact Center mutating extension requests require allowMutation=true and host policy classification.");
      }
      return request(method, path, input);
    },
    readiness() {
      const path = options.readinessPath ?? "";
      if (!path) throw new Error("Nextiva Contact Center readiness path must be configured by the host app.");
      return request("GET", path);
    },
  };
  return client;
}

export function createNextivaIntegration(options: NextivaClientOptions) {
  const client = createNextivaClient(options);
  return defineIntegration({
    manifest: nextivaProviderManifestInput,
    operations: {
      "contactCenter.handoff.request": async (input: unknown) => client.createHandoff(input as ConfiguredHandoffInput),
      "nextiva.request": async (input: unknown) => client.request(input as ProviderExtensionRequestInput),
    },
  });
}
