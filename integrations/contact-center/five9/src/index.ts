import { defineIntegration, providerJsonRequest, type ProviderHttpMethod, type ProviderQueryValue } from "@cognidesk/integration-kit";
import { five9ProviderManifest, five9ProviderManifestInput, five9SupportSlice } from "./manifest.js";

export { five9ProviderManifest, five9ProviderManifestInput, five9SupportSlice } from "./manifest.js";

export type ProviderJsonObject = Record<string, unknown>;

export interface Five9ClientOptions {
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

export interface Five9OperationInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: Record<string, ProviderQueryValue> | undefined;
  body?: unknown;
  headers?: Record<string, string | undefined> | undefined;
  idempotencyKey?: string | undefined;
}

export interface ProviderExtensionRequestInput extends Five9OperationInput {
  operationId?: string | undefined;
  method?: ProviderHttpMethod | undefined;
  path?: string | undefined;
  allowMutation?: boolean | undefined;
  classification?: string | undefined;
}

export interface Five9Client {
  createHandoff(input: ConfiguredHandoffInput): Promise<ProviderJsonObject>;

  readiness(): Promise<ProviderJsonObject>;
}

export function createFive9Client(options: Five9ClientOptions): Five9Client {
  const request = (method: ProviderHttpMethod, path: string, input: Five9OperationInput = {}) => providerJsonRequest<ProviderJsonObject>({
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
    providerName: "Five9",
  });
  const requestAllowedOperation = (operationId: string, input: Five9OperationInput = {}) => {
    const operation = five9SupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
    if (!operation || String(operation.path) === "host-configured") throw new Error(`Five9 operation '${operationId}' is not in the reviewed allowlist.`);
    return request(operation.method as ProviderHttpMethod, operation.path, input);
  };
  const client: Five9Client = {
    createHandoff(input) {
      const path = options.defaultHandoffPath;
      if (!path) throw new Error("Five9 handoff path must be configured by the host app.");
      return request("POST", path, { body: input.payload ?? {}, query: input.query, idempotencyKey: input.idempotencyKey });
    },

    readiness() {
      const path = options.readinessPath ?? "";
      if (!path) throw new Error("Five9 readiness path must be configured by the host app.");
      return request("GET", path);
    },
  };
  return client;
}

export function createFive9Integration(options: Five9ClientOptions) {
  const client = createFive9Client(options);
  return defineIntegration({
    manifest: five9ProviderManifestInput,
    operations: {
      "contact-center.handoff.request": async (input: unknown) => client.createHandoff(input as ConfiguredHandoffInput),
    },
  });
}
