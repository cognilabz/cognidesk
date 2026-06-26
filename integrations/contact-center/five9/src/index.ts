import {
  defineIntegration,
  providerJsonRequest,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import { five9ProviderManifest, five9ProviderManifestInput, five9RestSupportSlice } from "./manifest.js";

export { five9CheckedProviderSdk, five9ProviderManifest, five9ProviderManifestInput, five9RestSupportSlice } from "./manifest.js";

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

export interface Five9ClientOptions {
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
  providerClient?: Five9ProviderClient | undefined;
  rawClient?: Five9RawClient | undefined;
}

export interface Five9IntegrationOptions extends Five9ClientOptions {
  client?: Five9Client | undefined;
}

export interface ConfiguredHandoffInput {
  payload?: unknown;
  query?: Record<string, ProviderQueryValue> | undefined;
  idempotencyKey?: string | undefined;
}

export interface Five9ReadinessInput {
  signal?: AbortSignal | undefined;
}

export interface Five9RawClient {
  createHandoff(input?: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  readiness?(input?: Five9ReadinessInput): Promise<ProviderJsonObject>;
}

export type Five9ProviderClient = Five9RawClient;

export interface Five9Client {
  providerClient: Five9ProviderClient;
  rawClient: Five9RawClient;
  createHandoff(input?: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  readiness(input?: Five9ReadinessInput): Promise<ProviderJsonObject>;
}

export function createFive9Client(options: Five9ClientOptions = {}): Five9Client {
  const providerClient = resolveFive9ProviderClient(options);
  return {
    providerClient,
    rawClient: providerClient,
    createHandoff(input = {}) {
      return providerClient.createHandoff(normalizeConfiguredHandoffInput(input));
    },
    readiness(input) {
      if (!providerClient.readiness) {
        throw new Error("Five9 providerClient.readiness implementation is required for readiness checks.");
      }
      return providerClient.readiness(input);
    },
  };
}

export function createFive9OperationHandlers(options: Five9IntegrationOptions = {}) {
  const client = options.client ?? createFive9Client(options);

  return {
    "contact-center.handoff.request": async (input: unknown) => client.createHandoff(input as ConfiguredHandoffInput),
  } as const;
}

export function createFive9Integration(options: Five9IntegrationOptions = {}) {
  return defineIntegration({
    manifest: five9ProviderManifestInput,
    operations: createFive9OperationHandlers(options),
  });
}

function resolveFive9ProviderClient(options: Five9ClientOptions): Five9ProviderClient {
  const providerClient = options.providerClient ?? options.rawClient;
  return providerClient ? requireFive9ProviderClient(providerClient) : createFive9RestProviderClient(options);
}

function requireFive9ProviderClient(providerClient: Five9ProviderClient): Five9ProviderClient {
  if (!providerClient || typeof providerClient.createHandoff !== "function") {
    throw new Error("Five9 requires a providerClient implementing createHandoff() or configured baseUrl/defaultHandoffPath for the built-in REST adapter.");
  }
  return providerClient;
}

function createFive9RestProviderClient(options: Five9ClientOptions): Five9ProviderClient {
  return {
    createHandoff(input = {}) {
      const path = configuredPath(options.defaultHandoffPath, "Five9 handoff path");
      return providerRestRequest<ProviderJsonObject>({
        baseUrl: configuredBaseUrl(options),
        method: "POST",
        path,
        query: input.query,
        body: input.payload ?? {},
        accessToken: options.accessToken,
        authorizationHeader: options.authorizationHeader,
        apiKey: options.apiKey,
        apiKeyHeaderName: options.apiKeyHeaderName,
        idempotencyKey: input.idempotencyKey,
        fetch: options.fetch,
        signal: options.signal,
        timeoutMs: options.timeoutMs,
        retry: input.idempotencyKey ? options.retry : undefined,
        providerName: "Five9",
      });
    },
    readiness(input = {}) {
      const path = configuredPath(options.readinessPath, "Five9 readiness path");
      return providerRestRequest<ProviderJsonObject>({
        baseUrl: configuredBaseUrl(options),
        method: "GET",
        path,
        accessToken: options.accessToken,
        authorizationHeader: options.authorizationHeader,
        apiKey: options.apiKey,
        apiKeyHeaderName: options.apiKeyHeaderName,
        fetch: options.fetch,
        signal: input.signal ?? options.signal,
        timeoutMs: options.timeoutMs,
        retry: options.retry,
        providerName: "Five9",
      });
    },
  };
}

function configuredBaseUrl(options: Pick<Five9ClientOptions, "apiBaseUrl" | "baseUrl">): string {
  const baseUrl = options.baseUrl ?? options.apiBaseUrl;
  if (!baseUrl) throw new Error("Five9 baseUrl is required to use the built-in REST adapter.");
  return baseUrl;
}

function configuredPath(path: string | undefined, label: string): string {
  if (!path) throw new Error(`${label} must be configured to use the built-in REST adapter.`);
  return path;
}

function normalizeConfiguredHandoffInput(input: ConfiguredHandoffInput): ConfiguredHandoffInput {
  return {
    ...(input.payload !== undefined ? { payload: input.payload } : {}),
    ...(input.query !== undefined ? { query: input.query } : {}),
    ...(input.idempotencyKey !== undefined ? { idempotencyKey: input.idempotencyKey } : {}),
  };
}
