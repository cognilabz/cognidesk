import {
  defineIntegration,
  providerJsonRequest,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import { aircallProviderManifestInput } from "./manifest.js";

export { aircallProviderManifest, aircallProviderManifestInput, aircallOperationAliases, aircallRestSupportSlice, aircallSupportSlice } from "./manifest.js";

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

export interface AircallClientOptions {
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
  rawClient?: AircallRawClient | undefined;
}

export interface ConfiguredHandoffInput {
  payload?: unknown;
  query?: Record<string, ProviderQueryValue> | undefined;
  routing?: ProviderJsonObject | undefined;
  metadata?: ProviderJsonObject | undefined;
  idempotencyKey?: string | undefined;
}

export interface AircallReadinessInput {
  metadata?: ProviderJsonObject | undefined;
}

export interface AircallRawClient {
  createHandoff(input?: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  readiness?(input?: AircallReadinessInput): Promise<ProviderJsonObject>;
}

export interface AircallClient {
  rawClient: AircallRawClient;
  createHandoff(input?: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  readiness(input?: AircallReadinessInput): Promise<ProviderJsonObject>;
}

export interface AircallIntegrationOptions extends AircallClientOptions {
  aircallClient?: AircallClient | undefined;
}

export function createAircallClient(options: AircallClientOptions = {}): AircallClient {
  const rawClient = options.rawClient ?? createAircallRestRawClient(options);

  return {
    rawClient,
    createHandoff(input = {}) {
      return rawClient.createHandoff(normalizeConfiguredHandoffInput(input));
    },
    readiness(input = {}) {
      if (typeof rawClient.readiness !== "function") {
        throw new Error("Aircall rawClient does not expose readiness().");
      }
      return rawClient.readiness(input);
    },
  };
}

export function createAircallOperationHandlers(options: AircallIntegrationOptions = {}) {
  const client = options.aircallClient ?? createAircallClient(options);

  return {
    "contact-center.handoff.request": async (input: unknown) => client.createHandoff(input as ConfiguredHandoffInput),
  } as const;
}

export function createAircallIntegration(options: AircallIntegrationOptions = {}) {
  return defineIntegration({
    manifest: aircallProviderManifestInput,
    operations: createAircallOperationHandlers(options),
  });
}

function createAircallRestRawClient(options: AircallClientOptions): AircallRawClient {
  return {
    createHandoff(input = {}) {
      const path = configuredPath(options.defaultHandoffPath, "Aircall handoff path");
      return providerRestRequest<ProviderJsonObject>({
        baseUrl: configuredBaseUrl(options),
        method: "POST",
        path,
        query: input.query,
        body: input.payload ?? { routing: input.routing, metadata: input.metadata },
        accessToken: options.accessToken,
        authorizationHeader: options.authorizationHeader,
        apiKey: options.apiKey,
        apiKeyHeaderName: options.apiKeyHeaderName,
        idempotencyKey: input.idempotencyKey,
        fetch: options.fetch,
    signal: options.signal,
    timeoutMs: options.timeoutMs,
    retry: options.retry,
        providerName: "Aircall",
      });
    },
    readiness() {
      return providerRestRequest<ProviderJsonObject>({
        baseUrl: configuredBaseUrl(options),
        method: "GET",
        path: options.readinessPath ?? "/v1/ping",
        accessToken: options.accessToken,
        authorizationHeader: options.authorizationHeader,
        apiKey: options.apiKey,
        apiKeyHeaderName: options.apiKeyHeaderName,
        fetch: options.fetch,
    signal: options.signal,
    timeoutMs: options.timeoutMs,
    retry: options.retry,
        providerName: "Aircall",
      });
    },
  };
}

function configuredBaseUrl(options: Pick<AircallClientOptions, "apiBaseUrl" | "baseUrl">): string {
  const baseUrl = options.baseUrl ?? options.apiBaseUrl;
  if (!baseUrl) throw new Error("Aircall baseUrl is required to use the built-in REST adapter.");
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
    ...(input.routing !== undefined ? { routing: input.routing } : {}),
    ...(input.metadata !== undefined ? { metadata: input.metadata } : {}),
    ...(input.idempotencyKey !== undefined ? { idempotencyKey: input.idempotencyKey } : {}),
  };
}
