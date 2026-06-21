import { defineIntegration, providerJsonRequest, type ProviderHttpMethod, type ProviderQueryValue } from "@cognidesk/integration-kit";
import { zoomContactCenterProviderManifest, zoomContactCenterProviderManifestInput, zoomContactCenterSupportSlice } from "./manifest.js";

export { zoomContactCenterProviderManifest, zoomContactCenterProviderManifestInput, zoomContactCenterSupportSlice } from "./manifest.js";

export type ProviderJsonObject = Record<string, unknown>;

export interface ZoomContactCenterClientOptions {
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

export interface ZoomContactCenterOperationInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: Record<string, ProviderQueryValue> | undefined;
  body?: unknown;
  headers?: Record<string, string | undefined> | undefined;
  idempotencyKey?: string | undefined;
}

export interface ProviderExtensionRequestInput extends ZoomContactCenterOperationInput {
  operationId?: string | undefined;
  method?: ProviderHttpMethod | undefined;
  path?: string | undefined;
  allowMutation?: boolean | undefined;
  classification?: string | undefined;
}

export interface ZoomContactCenterClient {
  createHandoff(input: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  startContact(input?: ZoomContactCenterOperationInput): Promise<ProviderJsonObject>;
  readContact(input?: ZoomContactCenterOperationInput): Promise<ProviderJsonObject>;
  request(input: ProviderExtensionRequestInput): Promise<ProviderJsonObject>;
  readiness(): Promise<ProviderJsonObject>;
}

export function createZoomContactCenterClient(options: ZoomContactCenterClientOptions): ZoomContactCenterClient {
  const request = (method: ProviderHttpMethod, path: string, input: ZoomContactCenterOperationInput = {}) => providerJsonRequest<ProviderJsonObject>({
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
    providerName: "Zoom Contact Center",
  });
  const requestAllowedOperation = (operationId: string, input: ZoomContactCenterOperationInput = {}) => {
    const operation = zoomContactCenterSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
    if (!operation || String(operation.path) === "host-configured") throw new Error(`Zoom Contact Center operation '${operationId}' is not in the reviewed allowlist.`);
    return request(operation.method as ProviderHttpMethod, operation.path, input);
  };
  const client: ZoomContactCenterClient = {
    createHandoff(input) {
      const path = input.path ?? options.defaultHandoffPath;
      if (!path) throw new Error("Zoom Contact Center handoff path must be configured by the host app.");
      return request("POST", path, { body: input.payload ?? {}, query: input.query, idempotencyKey: input.idempotencyKey });
    },
    startContact(input: ZoomContactCenterOperationInput = {}) {
      return requestAllowedOperation("Startworkitemengagement", input);
    },
    readContact(input: ZoomContactCenterOperationInput = {}) {
      return requestAllowedOperation("getEngagement", input);
    },
    request(input) {
      const operation = input.operationId
        ? zoomContactCenterSupportSlice.allowedOperations.find((candidate) => candidate.id === input.operationId)
        : undefined;
      const method = input.method ?? (operation?.method as ProviderHttpMethod | undefined) ?? "GET";
      const path = input.path ?? operation?.path;
      if (!path || path === "host-configured") throw new Error("Zoom Contact Center request path or reviewed operationId is required.");
      if (["POST", "PUT", "PATCH", "DELETE"].includes(method) && !input.allowMutation) {
        throw new Error("Zoom Contact Center mutating extension requests require allowMutation=true and host policy classification.");
      }
      return request(method, path, input);
    },
    readiness() {
      const path = options.readinessPath ?? "";
      if (!path) throw new Error("Zoom Contact Center readiness path must be configured by the host app.");
      return request("GET", path);
    },
  };
  return client;
}

export function createZoomContactCenterIntegration(options: ZoomContactCenterClientOptions) {
  const client = createZoomContactCenterClient(options);
  return defineIntegration({
    manifest: zoomContactCenterProviderManifestInput,
    operations: {
      "contactCenter.handoff.request": async (input: unknown) => client.createHandoff(input as ConfiguredHandoffInput),
      "contactCenter.contact.start": async (input: unknown) => client.startContact(input as ZoomContactCenterOperationInput),
      "contactCenter.contact.read": async (input: unknown) => client.readContact(input as ZoomContactCenterOperationInput),
      "zoom.request": async (input: unknown) => client.request(input as ProviderExtensionRequestInput),
    },
  });
}
