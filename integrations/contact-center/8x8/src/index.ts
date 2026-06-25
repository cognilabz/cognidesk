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

export type EightByEightPhoneNumberValue = string | number;

export interface EightByEightUserParam {
  name: string;
  value: string;
}

export interface EightByEightPhoneInteraction {
  agentId: string;
  prefix: EightByEightPhoneNumberValue;
  number: EightByEightPhoneNumberValue;
  callerId: EightByEightPhoneNumberValue;
  dialplanId?: EightByEightPhoneNumberValue | undefined;
  queueId?: EightByEightPhoneNumberValue | undefined;
  extTransactionData?: readonly EightByEightUserParam[] | undefined;
  ctlUserData?: readonly EightByEightUserParam[] | undefined;
  forceCall?: boolean | undefined;
}

export interface EightByEightStartContactInput extends EightByEightPhoneInteraction {
  tenantId: string;
  idempotencyKey?: string | undefined;
}

export interface EightByEightEndContactInput {
  tenantId: string;
  interactionId: string;
  endPostProcessing?: boolean | undefined;
  idempotencyKey?: string | undefined;
}

export type EightByEightAgentStatus = 1 | 3 | 4 | 5;

export interface EightByEightAgentStatusRequest {
  "agent-status": EightByEightAgentStatus;
  "status-code-list-id"?: number | undefined;
  "status-code-item-id"?: number | undefined;
  "status-code-item-short-code"?: string | undefined;
}

export interface EightByEightUpdateAgentStatusInput extends EightByEightAgentStatusRequest {
  tenantId: string;
  agentId: string;
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
        body: phoneInteractionBody(input),
        idempotencyKey: input.idempotencyKey,
      });
    },
    endContact(input) {
      return requestAllowedOperation("deletePhoneInteraction", {
        pathParams: { tenantId: input.tenantId, interactionId: input.interactionId },
        query: input.endPostProcessing === undefined ? undefined : { endPostProcessing: input.endPostProcessing },
        idempotencyKey: input.idempotencyKey,
      });
    },
    updateAgentStatus(input) {
      return requestAllowedOperation("setagentstatus", {
        pathParams: { tenantId: input.tenantId, agentId: input.agentId },
        body: agentStatusBody(input),
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
  if (!input) return {};
  const value = requireInputObject(input, "createHandoff");
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
  phoneInteractionBody(value);
  return value;
}

function endContactInput(input: EightByEightEndContactInput | undefined): EightByEightEndContactInput {
  const value = requireInputObject(input, "endContact");
  requireNonEmptyString(value.tenantId, "endContact.tenantId");
  requireNonEmptyString(value.interactionId, "endContact.interactionId");
  if (value.endPostProcessing !== undefined && typeof value.endPostProcessing !== "boolean") {
    throw new Error("8x8 Contact Center endContact.endPostProcessing must be a boolean.");
  }
  return value;
}

function updateAgentStatusInput(input: EightByEightUpdateAgentStatusInput | undefined): EightByEightUpdateAgentStatusInput {
  const value = requireInputObject(input, "updateAgentStatus");
  requireNonEmptyString(value.tenantId, "updateAgentStatus.tenantId");
  requireNonEmptyString(value.agentId, "updateAgentStatus.agentId");
  agentStatusBody(value);
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

function requireString(value: unknown, field: string): asserts value is string {
  if (typeof value !== "string") {
    throw new Error(`8x8 Contact Center ${field} must be a string.`);
  }
}

function requirePhoneNumberValue(
  value: unknown,
  field: string,
  options: { allowEmptyString?: boolean | undefined } = {},
): asserts value is EightByEightPhoneNumberValue {
  if (typeof value === "number") {
    if (Number.isFinite(value)) return;
  } else if (typeof value === "string" && (options.allowEmptyString || value.length > 0)) {
    return;
  }
  throw new Error(`8x8 Contact Center ${field} must be a string or finite number.`);
}

function requireOptionalPhoneNumberValue(value: unknown, field: string): asserts value is EightByEightPhoneNumberValue | undefined {
  if (value === undefined) return;
  requirePhoneNumberValue(value, field);
}

function requireOptionalNumber(value: unknown, field: string): asserts value is number | undefined {
  if (value === undefined) return;
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new Error(`8x8 Contact Center ${field} must be a finite number.`);
  }
}

function requireOptionalString(value: unknown, field: string): asserts value is string | undefined {
  if (value === undefined) return;
  requireString(value, field);
}

function handoffBody(input: ConfiguredHandoffInput) {
  if (input.payload !== undefined) return input.payload;
  if (input.routing !== undefined) return { routing: input.routing };
  return {};
}

function phoneInteractionBody(input: EightByEightStartContactInput): EightByEightPhoneInteraction {
  requireNonEmptyString(input.agentId, "startContact.agentId");
  requirePhoneNumberValue(input.prefix, "startContact.prefix", { allowEmptyString: true });
  requirePhoneNumberValue(input.number, "startContact.number");
  requirePhoneNumberValue(input.callerId, "startContact.callerId", { allowEmptyString: true });
  requireOptionalPhoneNumberValue(input.dialplanId, "startContact.dialplanId");
  requireOptionalPhoneNumberValue(input.queueId, "startContact.queueId");
  if (input.forceCall !== undefined && typeof input.forceCall !== "boolean") {
    throw new Error("8x8 Contact Center startContact.forceCall must be a boolean.");
  }

  return {
    agentId: input.agentId,
    prefix: input.prefix,
    number: input.number,
    callerId: input.callerId,
    ...(input.dialplanId !== undefined ? { dialplanId: input.dialplanId } : {}),
    ...(input.queueId !== undefined ? { queueId: input.queueId } : {}),
    ...(input.extTransactionData !== undefined ? {
      extTransactionData: userParams(input.extTransactionData, "startContact.extTransactionData"),
    } : {}),
    ...(input.ctlUserData !== undefined ? {
      ctlUserData: userParams(input.ctlUserData, "startContact.ctlUserData"),
    } : {}),
    ...(input.forceCall !== undefined ? { forceCall: input.forceCall } : {}),
  };
}

function userParams(input: readonly EightByEightUserParam[], field: string): EightByEightUserParam[] {
  if (!Array.isArray(input)) {
    throw new Error(`8x8 Contact Center ${field} must be an array.`);
  }
  return input.map((item, index) => {
    const value = requireInputObject(item, `${field}[${index}]`);
    requireNonEmptyString(value.name, `${field}[${index}].name`);
    requireString(value.value, `${field}[${index}].value`);
    return { name: value.name, value: value.value };
  });
}

const allowedAgentStatuses = new Set<number>([1, 3, 4, 5]);

function agentStatusBody(input: EightByEightUpdateAgentStatusInput): EightByEightAgentStatusRequest {
  const agentStatus = input["agent-status"];
  if (typeof agentStatus !== "number" || !allowedAgentStatuses.has(agentStatus)) {
    throw new Error("8x8 Contact Center updateAgentStatus.agent-status must be one of 1, 3, 4, or 5.");
  }
  requireOptionalNumber(input["status-code-list-id"], "updateAgentStatus.status-code-list-id");
  requireOptionalNumber(input["status-code-item-id"], "updateAgentStatus.status-code-item-id");
  requireOptionalString(input["status-code-item-short-code"], "updateAgentStatus.status-code-item-short-code");

  return {
    "agent-status": agentStatus as EightByEightAgentStatus,
    ...(input["status-code-list-id"] !== undefined ? { "status-code-list-id": input["status-code-list-id"] } : {}),
    ...(input["status-code-item-id"] !== undefined ? { "status-code-item-id": input["status-code-item-id"] } : {}),
    ...(input["status-code-item-short-code"] !== undefined ? { "status-code-item-short-code": input["status-code-item-short-code"] } : {}),
  };
}
