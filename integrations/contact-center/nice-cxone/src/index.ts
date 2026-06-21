import { defineIntegration, providerJsonRequest, type ProviderHttpMethod, type ProviderQueryValue } from "@cognidesk/integration-kit";
import { niceCxoneProviderManifest, niceCxoneProviderManifestInput, niceCxoneSupportSlice } from "./manifest.js";

export { niceCxoneProviderManifest, niceCxoneProviderManifestInput, niceCxoneSupportSlice } from "./manifest.js";

export type ProviderJsonObject = Record<string, unknown>;

export interface NiceCxoneClientOptions {
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

export interface NiceCxoneClient {
  createHandoff(input: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  scheduleCallback(input?: NiceCxoneOperationInput): Promise<ProviderJsonObject>;
  startContact(input?: NiceCxoneOperationInput): Promise<ProviderJsonObject>;
  endContact(input?: NiceCxoneOperationInput): Promise<ProviderJsonObject>;
  request(input: ProviderExtensionRequestInput): Promise<ProviderJsonObject>;
  readiness(): Promise<ProviderJsonObject>;
}

export function createNiceCxoneClient(options: NiceCxoneClientOptions): NiceCxoneClient {
  const request = (method: ProviderHttpMethod, path: string, input: NiceCxoneOperationInput = {}) => providerJsonRequest<ProviderJsonObject>({
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
    providerName: "NICE CXone",
  });
  const requestAllowedOperation = (operationId: string, input: NiceCxoneOperationInput = {}) => {
    const operation = niceCxoneSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
    if (!operation || String(operation.path) === "host-configured") throw new Error(`NICE CXone operation '${operationId}' is not in the reviewed allowlist.`);
    return request(operation.method as ProviderHttpMethod, operation.path, input);
  };
  const client: NiceCxoneClient = {
    createHandoff(input) {
      const path = input.path ?? options.defaultHandoffPath;
      if (!path) throw new Error("NICE CXone handoff path must be configured by the host app.");
      return request("POST", path, { body: input.payload ?? {}, query: input.query, idempotencyKey: input.idempotencyKey });
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
      const operation = input.operationId
        ? niceCxoneSupportSlice.allowedOperations.find((candidate) => candidate.id === input.operationId)
        : undefined;
      const method = input.method ?? (operation?.method as ProviderHttpMethod | undefined) ?? "GET";
      const path = input.path ?? operation?.path;
      if (!path || path === "host-configured") throw new Error("NICE CXone request path or reviewed operationId is required.");
      if (["POST", "PUT", "PATCH", "DELETE"].includes(method) && !input.allowMutation) {
        throw new Error("NICE CXone mutating extension requests require allowMutation=true and host policy classification.");
      }
      return request(method, path, input);
    },
    readiness() {
      const path = options.readinessPath ?? "";
      if (!path) throw new Error("NICE CXone readiness path must be configured by the host app.");
      return request("GET", path);
    },
  };
  return client;
}

export function createNiceCxoneIntegration(options: NiceCxoneClientOptions) {
  const client = createNiceCxoneClient(options);
  return defineIntegration({
    manifest: niceCxoneProviderManifestInput,
    operations: {
      "contactCenter.handoff.request": async (input: unknown) => client.createHandoff(input as ConfiguredHandoffInput),
      "contactCenter.callback.schedule": async (input: unknown) => client.scheduleCallback(input as NiceCxoneOperationInput),
      "contactCenter.contact.start": async (input: unknown) => client.startContact(input as NiceCxoneOperationInput),
      "contactCenter.contact.end": async (input: unknown) => client.endContact(input as NiceCxoneOperationInput),
      "nice-cxone.request": async (input: unknown) => client.request(input as ProviderExtensionRequestInput),
    },
  });
}
