import {
  defineIntegration,
  providerJsonRequest,
  type ProviderHttpMethod,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import { zoomContactCenterProviderManifest, zoomContactCenterProviderManifestInput, zoomContactCenterSupportSlice } from "./manifest.js";

export {
  zoomContactCenterOperationAliases,
  zoomContactCenterProviderManifest,
  zoomContactCenterProviderManifestInput,
  zoomContactCenterRestSupportSlice,
  zoomContactCenterSupportSlice,
} from "./manifest.js";

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
export type ZoomContactCenterProviderMethod = ProviderHttpMethod;
export type ZoomContactCenterQueryValue = ProviderQueryValue;

export interface ZoomContactCenterClientOptions {
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
  providerClient?: ZoomContactCenterProviderClient | undefined;
}

export interface ZoomContactCenterIntegrationOptions extends ZoomContactCenterClientOptions {
  client?: ZoomContactCenterClient | undefined;
}

export interface ConfiguredHandoffInput {
  payload?: unknown;
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

export interface ZoomContactCenterProviderClient {
  createHandoff(input: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  startContact(input?: ZoomContactCenterOperationInput): Promise<ProviderJsonObject>;
  readContact(input?: ZoomContactCenterOperationInput): Promise<ProviderJsonObject>;
  request?(input: ProviderExtensionRequestInput): Promise<ProviderJsonObject>;
  readiness?(): Promise<ProviderJsonObject>;
}

export interface ZoomContactCenterClient {
  providerClient: ZoomContactCenterProviderClient;
  createHandoff(input?: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  startContact(input?: ZoomContactCenterOperationInput): Promise<ProviderJsonObject>;
  readContact(input?: ZoomContactCenterOperationInput): Promise<ProviderJsonObject>;
  request(input: ProviderExtensionRequestInput): Promise<ProviderJsonObject>;
  readiness(): Promise<ProviderJsonObject>;
}

export function createZoomContactCenterClient(options: ZoomContactCenterClientOptions = {}): ZoomContactCenterClient {
  const providerClient = options.providerClient ?? createZoomContactCenterRestProviderClient(options);
  return {
    providerClient,
    createHandoff(input = {}) {
      return providerClient.createHandoff(normalizeConfiguredHandoffInput(input));
    },
    startContact(input: ZoomContactCenterOperationInput = {}) {
      return providerClient.startContact(normalizeOperationInput(input));
    },
    readContact(input: ZoomContactCenterOperationInput = {}) {
      return providerClient.readContact(normalizeOperationInput(input));
    },
    request(input) {
      if (typeof providerClient.request !== "function") {
        throw new Error("Zoom Contact Center providerClient must implement request() for extension operations.");
      }
      return providerClient.request(validateZoomContactCenterProviderRequest(input));
    },
    readiness() {
      if (typeof providerClient.readiness !== "function") {
        throw new Error("Zoom Contact Center providerClient must implement readiness() for live readiness checks.");
      }
      return providerClient.readiness();
    },
  };
}

export function createZoomContactCenterOperationHandlers(options: ZoomContactCenterIntegrationOptions = {}) {
  const client = options.client ?? createZoomContactCenterClient(options);

  return {
    "contact-center.handoff.request": async (input: unknown) => client.createHandoff(input as ConfiguredHandoffInput),
    "contact-center.contact.start": async (input: unknown) => client.startContact(input as ZoomContactCenterOperationInput),
    "contact-center.contact.read": async (input: unknown) => client.readContact(input as ZoomContactCenterOperationInput),
    "zoom.request": async (input: unknown) => client.request(input as ProviderExtensionRequestInput),
  } as const;
}

export function createZoomContactCenterIntegration(options: ZoomContactCenterIntegrationOptions = {}) {
  return defineIntegration({
    manifest: zoomContactCenterProviderManifestInput,
    operations: createZoomContactCenterOperationHandlers(options),
  });
}

export const createZoomContactCenterIntegrationOperationHandlers = createZoomContactCenterOperationHandlers;

function createZoomContactCenterRestProviderClient(options: ZoomContactCenterClientOptions): ZoomContactCenterProviderClient {
  const request = (method: ProviderHttpMethod, path: string, input: ZoomContactCenterOperationInput = {}) => providerRestRequest<ProviderJsonObject>({
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
    providerName: "Zoom Contact Center",
  });

  return {
    createHandoff(input) {
      const path = configuredPath(options.defaultHandoffPath, "Zoom Contact Center handoff path");
      return request("POST", path, {
        body: input.payload ?? {},
        query: input.query,
        idempotencyKey: input.idempotencyKey,
      });
    },
    startContact(input: ZoomContactCenterOperationInput = {}) {
      return requestAllowedOperation("Startworkitemengagement", input);
    },
    readContact(input: ZoomContactCenterOperationInput = {}) {
      return requestAllowedOperation("getEngagement", input);
    },
    request(input) {
      const value = validateZoomContactCenterProviderRequest(input);
      return request(value.method ?? "GET", value.path, value);
    },
    readiness() {
      const path = configuredPath(options.readinessPath, "Zoom Contact Center readiness path");
      return request("GET", path);
    },
  };

  function requestAllowedOperation(operationId: string, input: ZoomContactCenterOperationInput = {}) {
    const operation = zoomContactCenterSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
    if (!operation || String(operation.path) === "host-configured") {
      throw new Error(`Zoom Contact Center operation '${operationId}' is not in the reviewed allowlist.`);
    }
    return request(operation.method as ProviderHttpMethod, operation.path, input);
  }
}

function normalizeConfiguredHandoffInput(input: ConfiguredHandoffInput): ConfiguredHandoffInput {
  return {
    ...(input.payload !== undefined ? { payload: input.payload } : {}),
    ...(input.query !== undefined ? { query: input.query } : {}),
    ...(input.idempotencyKey !== undefined ? { idempotencyKey: input.idempotencyKey } : {}),
  };
}

function normalizeOperationInput(input: ZoomContactCenterOperationInput): ZoomContactCenterOperationInput {
  return {
    ...(input.pathParams !== undefined ? { pathParams: input.pathParams } : {}),
    ...(input.query !== undefined ? { query: input.query } : {}),
    ...(input.body !== undefined ? { body: input.body } : {}),
    ...(input.headers !== undefined ? { headers: input.headers } : {}),
    ...(input.idempotencyKey !== undefined ? { idempotencyKey: input.idempotencyKey } : {}),
  };
}

function validateZoomContactCenterProviderRequest(input: ProviderExtensionRequestInput): ProviderExtensionRequestInput & { method: ProviderHttpMethod; path: string } {
  const operation = input.operationId
    ? zoomContactCenterSupportSlice.allowedOperations.find((candidate) => candidate.id === input.operationId)
    : undefined;
  const method = input.method ?? operationMethod(operation) ?? "GET";
  const path = input.path ?? operationPath(operation);
  if (!path || path === "host-configured") {
    throw new Error("Zoom Contact Center request path or reviewed operationId is required.");
  }
  if (["POST", "PUT", "PATCH", "DELETE"].includes(method) && !input.allowMutation) {
    throw new Error("Zoom Contact Center mutating extension requests require allowMutation=true and host policy classification.");
  }
  return {
    ...normalizeOperationInput(input),
    ...(input.operationId !== undefined ? { operationId: input.operationId } : {}),
    method,
    path,
    ...(input.allowMutation !== undefined ? { allowMutation: input.allowMutation } : {}),
    ...(input.classification !== undefined ? { classification: input.classification } : {}),
  };
}

function operationMethod(operation: ZoomContactCenterAllowedOperation | undefined): ProviderHttpMethod | undefined {
  return operation && "method" in operation ? operation.method as ProviderHttpMethod : undefined;
}

function operationPath(operation: ZoomContactCenterAllowedOperation | undefined): string | undefined {
  return operation && "path" in operation ? operation.path : undefined;
}

function configuredBaseUrl(options: Pick<ZoomContactCenterClientOptions, "apiBaseUrl" | "baseUrl">): string {
  const baseUrl = options.baseUrl ?? options.apiBaseUrl;
  if (!baseUrl) throw new Error("Zoom Contact Center baseUrl is required to use the built-in REST adapter.");
  return baseUrl;
}

function configuredPath(path: string | undefined, label: string): string {
  if (!path) throw new Error(`${label} must be configured to use the built-in REST adapter.`);
  return path;
}

type ZoomContactCenterAllowedOperation = typeof zoomContactCenterSupportSlice.allowedOperations[number];
