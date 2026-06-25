import {
  defineIntegration,
  providerJsonRequest,
  type ProviderHttpMethod,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import { talkdeskProviderManifest, talkdeskProviderManifestInput, talkdeskSupportSlice } from "./manifest.js";

export { talkdeskProviderManifest, talkdeskProviderManifestInput, talkdeskSupportSlice } from "./manifest.js";

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

export interface TalkdeskClientOptions {
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
  providerClient?: TalkdeskProviderClient | undefined;
}

export interface TalkdeskIntegrationOptions extends TalkdeskClientOptions {
  talkdeskClient?: TalkdeskClient | undefined;
}

export interface ConfiguredHandoffInput {
  payload?: unknown;
  query?: Record<string, ProviderQueryValue> | undefined;
  idempotencyKey?: string | undefined;
}

export interface TalkdeskOperationInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: Record<string, ProviderQueryValue> | undefined;
  body?: unknown;
  headers?: Record<string, string | undefined> | undefined;
  idempotencyKey?: string | undefined;
}

export interface ProviderExtensionRequestInput extends TalkdeskOperationInput {
  operationId?: string | undefined;
  method?: ProviderHttpMethod | undefined;
  path?: string | undefined;
  allowMutation?: boolean | undefined;
  classification?: string | undefined;
}

export interface TalkdeskClient {
  providerClient: TalkdeskProviderClient;
  createHandoff(input?: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  scheduleCallback(input?: TalkdeskOperationInput): Promise<ProviderJsonObject>;
  createTask(input?: TalkdeskOperationInput): Promise<ProviderJsonObject>;
  readiness(): Promise<ProviderJsonObject>;
}

export interface TalkdeskProviderClient {
  createHandoff(input: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  scheduleCallback(input?: TalkdeskOperationInput): Promise<ProviderJsonObject>;
  createTask(input?: TalkdeskOperationInput): Promise<ProviderJsonObject>;
  readiness?(): Promise<ProviderJsonObject>;
}

export function createTalkdeskClient(options: TalkdeskClientOptions = {}): TalkdeskClient {
  const providerClient = options.providerClient ?? createTalkdeskRestProviderClient(options);
  return {
    providerClient,
    createHandoff(input = {}) {
      return providerClient.createHandoff(normalizeConfiguredHandoffInput(input));
    },
    scheduleCallback(input: TalkdeskOperationInput = {}) {
      return providerClient.scheduleCallback(validateTalkdeskAllowedOperation("calls-callback-post", input));
    },
    createTask(input: TalkdeskOperationInput = {}) {
      return providerClient.createTask(validateTalkdeskAllowedOperation("CreatingACase", input));
    },
    readiness() {
      if (!providerClient.readiness) {
        throw new Error("Talkdesk provider client must implement readiness() for live readiness checks.");
      }
      return providerClient.readiness();
    },
  };
}

export function createTalkdeskIntegrationOperationHandlers(options: TalkdeskIntegrationOptions = {}) {
  const client = options.talkdeskClient ?? createTalkdeskClient(options);
  return {
    "contact-center.handoff.request": async (input: unknown) => client.createHandoff(input as ConfiguredHandoffInput),
    "contact-center.callback.schedule": async (input: unknown) => client.scheduleCallback(input as TalkdeskOperationInput),
    "contact-center.task.create": async (input: unknown) => client.createTask(input as TalkdeskOperationInput),
  } as const;
}

export function createTalkdeskIntegration(options: TalkdeskIntegrationOptions = {}) {
  return defineIntegration({
    manifest: talkdeskProviderManifestInput,
    operations: createTalkdeskIntegrationOperationHandlers(options),
  });
}

function createTalkdeskRestProviderClient(options: TalkdeskClientOptions): TalkdeskProviderClient {
  const request = (method: ProviderHttpMethod, path: string, input: TalkdeskOperationInput = {}) => providerRestRequest<ProviderJsonObject>({
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
    providerName: "Talkdesk",
  });

  return {
    createHandoff(input) {
      const path = configuredPath(options.defaultHandoffPath, "Talkdesk handoff path");
      return request("POST", path, {
        body: input.payload ?? {},
        query: input.query,
        idempotencyKey: input.idempotencyKey,
      });
    },
    scheduleCallback(input: TalkdeskOperationInput = {}) {
      return requestAllowedOperation("calls-callback-post", input);
    },
    createTask(input: TalkdeskOperationInput = {}) {
      return requestAllowedOperation("CreatingACase", input);
    },
    readiness() {
      const path = configuredPath(options.readinessPath, "Talkdesk readiness path");
      return request("GET", path);
    },
  };

  function requestAllowedOperation(operationId: string, input: TalkdeskOperationInput = {}) {
    const operation = talkdeskSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
    if (!operation || String(operation.path) === "host-configured") {
      throw new Error(`Talkdesk operation '${operationId}' is not in the reviewed allowlist.`);
    }
    return request(operation.method as ProviderHttpMethod, operation.path, input);
  }
}

function validateTalkdeskAllowedOperation(operationId: string, input: TalkdeskOperationInput = {}) {
  const operation = talkdeskSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
  if (!operation || String(operation.path) === "host-configured") {
    throw new Error(`Talkdesk operation '${operationId}' is not in the reviewed allowlist.`);
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

function configuredBaseUrl(options: Pick<TalkdeskClientOptions, "apiBaseUrl" | "baseUrl">): string {
  const baseUrl = options.baseUrl ?? options.apiBaseUrl;
  if (!baseUrl) throw new Error("Talkdesk baseUrl is required to use the built-in REST adapter.");
  return baseUrl;
}

function configuredPath(path: string | undefined, label: string): string {
  if (!path) throw new Error(`${label} must be configured to use the built-in REST adapter.`);
  return path;
}
