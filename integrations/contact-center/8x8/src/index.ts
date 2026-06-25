import {
  defineIntegration,
  providerJsonRequest,
  type ProviderHttpMethod,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import { eightByEightProviderManifestInput, eightByEightSupportSlice } from "./manifest.js";

export { eightByEightProviderManifest, eightByEightProviderManifestInput, eightByEightSupportSlice } from "./manifest.js";

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
export type EightByEightProviderPayload = ProviderJsonObject | object | undefined;

export interface EightByEightClientOptions {
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
  rawClient?: EightByEightRawClient | undefined;
}

export interface ConfiguredHandoffInput {
  payload?: EightByEightProviderPayload;
  query?: Record<string, ProviderQueryValue> | undefined;
  routing?: EightByEightProviderPayload;
  idempotencyKey?: string | undefined;
}

export interface EightByEightStartContactInput {
  tenantId: string;
  contact?: EightByEightProviderPayload;
  routing?: EightByEightProviderPayload;
  idempotencyKey?: string | undefined;
}

export interface EightByEightEndContactInput {
  tenantId: string;
  interactionId: string;
  reason?: string | undefined;
  metadata?: EightByEightProviderPayload;
  idempotencyKey?: string | undefined;
}

export interface EightByEightUpdateAgentStatusInput {
  tenantId: string;
  agentId: string;
  status: EightByEightProviderPayload;
  metadata?: EightByEightProviderPayload;
  idempotencyKey?: string | undefined;
}

export interface EightByEightReadinessInput {
  probe?: string | undefined;
  metadata?: EightByEightProviderPayload;
}

export interface EightByEightClient {
  rawClient: EightByEightRawClient;
  createHandoff(input?: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  startContact(input: EightByEightStartContactInput): Promise<ProviderJsonObject>;
  endContact(input: EightByEightEndContactInput): Promise<ProviderJsonObject>;
  updateAgentStatus(input: EightByEightUpdateAgentStatusInput): Promise<ProviderJsonObject>;
  readiness(input?: EightByEightReadinessInput): Promise<ProviderJsonObject>;
}

export interface EightByEightRawClient {
  createHandoff(input?: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  startContact(input: EightByEightStartContactInput): Promise<ProviderJsonObject>;
  endContact(input: EightByEightEndContactInput): Promise<ProviderJsonObject>;
  updateAgentStatus(input: EightByEightUpdateAgentStatusInput): Promise<ProviderJsonObject>;
  readiness?(input?: EightByEightReadinessInput): Promise<ProviderJsonObject>;
}

export interface EightByEightIntegrationOptions extends EightByEightClientOptions {
  client?: EightByEightClient | undefined;
}

const requiredRawClientMethods = [
  "createHandoff",
  "startContact",
  "endContact",
  "updateAgentStatus",
] as const;

type EightByEightRequiredRawClientMethod = typeof requiredRawClientMethods[number];

export function createEightByEightClient(options: EightByEightClientOptions = {}): EightByEightClient {
  const rawClient = options.rawClient
    ? requireEightByEightRawClient(options.rawClient)
    : createEightByEightRestRawClient(options);

  return {
    rawClient,
    createHandoff(input = {}) {
      return rawClient.createHandoff(configuredHandoffInput(input));
    },
    startContact(input) {
      return rawClient.startContact(startContactInput(input));
    },
    endContact(input) {
      return rawClient.endContact(endContactInput(input));
    },
    updateAgentStatus(input) {
      return rawClient.updateAgentStatus(updateAgentStatusInput(input));
    },
    readiness(input) {
      if (!rawClient.readiness) {
        throw new Error("8x8 Contact Center rawClient.readiness is required for readiness checks.");
      }
      return rawClient.readiness(readinessInput(input));
    },
  };
}

export function createEightByEightOperationHandlers(options: EightByEightIntegrationOptions = {}) {
  const client = options.client ?? createEightByEightClient(options);
  return {
    "contact-center.handoff.request": async (input: unknown) => client.createHandoff(input as ConfiguredHandoffInput),
    "contact-center.contact.start": async (input: unknown) => client.startContact(input as EightByEightStartContactInput),
    "contact-center.contact.end": async (input: unknown) => client.endContact(input as EightByEightEndContactInput),
    "contact-center.agent.status.update": async (input: unknown) => client.updateAgentStatus(input as EightByEightUpdateAgentStatusInput),
  } as const;
}

export function createEightByEightIntegration(options: EightByEightIntegrationOptions = {}) {
  return defineIntegration({
    manifest: eightByEightProviderManifestInput,
    operations: createEightByEightOperationHandlers(options),
  });
}

function createEightByEightRestRawClient(options: EightByEightClientOptions): EightByEightRawClient {
  const request = (method: ProviderHttpMethod, path: string, input: {
    pathParams?: Record<string, string | number | boolean | undefined> | undefined;
    query?: Record<string, ProviderQueryValue> | undefined;
    body?: unknown;
    headers?: Record<string, string | undefined> | undefined;
    idempotencyKey?: string | undefined;
  } = {}) => providerRestRequest<ProviderJsonObject>({
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
    providerName: "8x8 Contact Center",
  });

  return {
    createHandoff(input = {}) {
      const path = configuredPath(options.defaultHandoffPath, "8x8 Contact Center handoff path");
      return request("POST", path, {
        body: handoffBody(input),
        query: input.query,
        idempotencyKey: input.idempotencyKey,
      });
    },
    startContact(input) {
      return requestAllowedOperation("placePhoneCall", {
        pathParams: { tenantId: input.tenantId },
        body: { contact: input.contact, routing: input.routing },
        idempotencyKey: input.idempotencyKey,
      });
    },
    endContact(input) {
      return requestAllowedOperation("deletePhoneInteraction", {
        pathParams: { tenantId: input.tenantId, interactionId: input.interactionId },
        body: input.reason || input.metadata ? { reason: input.reason, metadata: input.metadata } : undefined,
        idempotencyKey: input.idempotencyKey,
      });
    },
    updateAgentStatus(input) {
      return requestAllowedOperation("setAgentStatus", {
        pathParams: { tenantId: input.tenantId, agentId: input.agentId },
        body: { status: input.status, metadata: input.metadata },
        idempotencyKey: input.idempotencyKey,
      });
    },
    readiness() {
      const path = configuredPath(options.readinessPath, "8x8 Contact Center readiness path");
      return request("GET", path);
    },
  };

  function requestAllowedOperation(operationId: string, input: Parameters<typeof request>[2] = {}) {
    const operation = eightByEightSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
    if (!operation || String(operation.path) === "host-configured") {
      throw new Error(`8x8 Contact Center operation '${operationId}' is not in the reviewed allowlist.`);
    }
    return request(operation.method as ProviderHttpMethod, operation.path, input);
  }
}

function requireEightByEightRawClient(rawClient: EightByEightRawClient): EightByEightRawClient {
  const candidate = rawClient as Record<EightByEightRequiredRawClientMethod, unknown>;
  const missing = requiredRawClientMethods.filter((method) => typeof candidate[method] !== "function");
  if (missing.length > 0) {
    throw new Error(`8x8 Contact Center rawClient is missing required method(s): ${missing.join(", ")}.`);
  }
  return rawClient;
}

function configuredBaseUrl(options: Pick<EightByEightClientOptions, "apiBaseUrl" | "baseUrl">): string {
  const baseUrl = options.baseUrl ?? options.apiBaseUrl;
  if (!baseUrl) {
    throw new Error("8x8 Contact Center baseUrl is required to use the built-in REST adapter.");
  }
  return baseUrl;
}

function configuredPath(path: string | undefined, label: string): string {
  if (!path) throw new Error(`${label} must be configured to use the built-in REST adapter.`);
  return path;
}

function configuredHandoffInput(input: ConfiguredHandoffInput | undefined): ConfiguredHandoffInput {
  const value = input ?? {};
  return {
    ...(value.payload !== undefined ? { payload: value.payload } : {}),
    ...(value.query !== undefined ? { query: value.query } : {}),
    ...(value.routing !== undefined ? { routing: value.routing } : {}),
    ...(value.idempotencyKey !== undefined ? { idempotencyKey: value.idempotencyKey } : {}),
  };
}

function startContactInput(input: EightByEightStartContactInput | undefined): EightByEightStartContactInput {
  const value = requireInputObject(input, "startContact");
  requireNonEmptyString(value.tenantId, "startContact.tenantId");
  return value;
}

function endContactInput(input: EightByEightEndContactInput | undefined): EightByEightEndContactInput {
  const value = requireInputObject(input, "endContact");
  requireNonEmptyString(value.tenantId, "endContact.tenantId");
  requireNonEmptyString(value.interactionId, "endContact.interactionId");
  return value;
}

function updateAgentStatusInput(input: EightByEightUpdateAgentStatusInput | undefined): EightByEightUpdateAgentStatusInput {
  const value = requireInputObject(input, "updateAgentStatus");
  requireNonEmptyString(value.tenantId, "updateAgentStatus.tenantId");
  requireNonEmptyString(value.agentId, "updateAgentStatus.agentId");
  if (value.status === undefined) {
    throw new Error("8x8 Contact Center updateAgentStatus.status is required.");
  }
  return value;
}

function readinessInput(input: EightByEightReadinessInput | undefined): EightByEightReadinessInput | undefined {
  if (!input) return undefined;
  return {
    ...(input.probe !== undefined ? { probe: input.probe } : {}),
    ...(input.metadata !== undefined ? { metadata: input.metadata } : {}),
  };
}

function requireInputObject<T extends object>(input: T | undefined, operation: string): T {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    throw new Error(`8x8 Contact Center ${operation} input object is required.`);
  }
  return input;
}

function requireNonEmptyString(value: unknown, field: string): asserts value is string {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`8x8 Contact Center ${field} must be a non-empty string.`);
  }
}

function handoffBody(input: ConfiguredHandoffInput) {
  if (input.payload !== undefined) return input.payload;
  if (input.routing !== undefined) return { routing: input.routing };
  return {};
}
