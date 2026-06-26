import {
  defineIntegration,
  providerJsonRequest,
  type ProviderHttpMethod,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import { talkdeskProviderManifest, talkdeskProviderManifestInput, talkdeskSupportSlice } from "./manifest.js";

export { talkdeskProviderManifest, talkdeskProviderManifestInput, talkdeskSupportSlice } from "./manifest.js";

export type ProviderJsonObject = { [key: string]: TalkdeskJsonValue };
export type TalkdeskJsonValue =
  | string
  | number
  | boolean
  | null
  | ProviderJsonObject
  | readonly TalkdeskJsonValue[];

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
  payload?: ProviderJsonObject | undefined;
  query?: Record<string, ProviderQueryValue> | undefined;
  idempotencyKey?: string | undefined;
}

export interface TalkdeskOperationInput {
  query?: Record<string, ProviderQueryValue> | undefined;
  body?: ProviderJsonObject | undefined;
  idempotencyKey?: string | undefined;
}

export type TalkdeskReviewedOperationId = "calls-callback-post" | "CreatingACase";

export interface TalkdeskReviewedOperationInput extends TalkdeskOperationInput {
  operationId: TalkdeskReviewedOperationId;
  method: ProviderHttpMethod;
  path: string;
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
  scheduleCallback(input: TalkdeskReviewedOperationInput): Promise<ProviderJsonObject>;
  createTask(input: TalkdeskReviewedOperationInput): Promise<ProviderJsonObject>;
  readiness?(): Promise<ProviderJsonObject>;
}

export function createTalkdeskClient(options: TalkdeskClientOptions = {}): TalkdeskClient {
  const providerClient = options.providerClient ?? createTalkdeskRestProviderClient(options);
  return {
    providerClient,
    createHandoff(input = {}) {
      return providerClient.createHandoff(parseConfiguredHandoffInput(input));
    },
    scheduleCallback(input: TalkdeskOperationInput = {}) {
      return providerClient.scheduleCallback(reviewTalkdeskAllowedOperation("calls-callback-post", input));
    },
    createTask(input: TalkdeskOperationInput = {}) {
      return providerClient.createTask(reviewTalkdeskAllowedOperation("CreatingACase", input));
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
    "contact-center.handoff.request": async (input: unknown) => client.createHandoff(parseConfiguredHandoffInput(input)),
    "contact-center.callback.schedule": async (input: unknown) => client.scheduleCallback(parseTalkdeskOperationInput(input)),
    "contact-center.task.create": async (input: unknown) => client.createTask(parseTalkdeskOperationInput(input)),
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
    query: input.query,
    body: input.body,
    accessToken: options.accessToken,
    authorizationHeader: options.authorizationHeader,
    apiKey: options.apiKey,
    apiKeyHeaderName: options.apiKeyHeaderName,
    idempotencyKey: input.idempotencyKey,
    fetch: options.fetch,
    signal: options.signal,
    timeoutMs: options.timeoutMs,
    retry: method === "GET" || input.idempotencyKey ? options.retry : undefined,
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
    scheduleCallback(input) {
      const operation = assertReviewedOperation("calls-callback-post", input);
      return request(operation.method, operation.path, input);
    },
    createTask(input) {
      const operation = assertReviewedOperation("CreatingACase", input);
      return request(operation.method, operation.path, input);
    },
    readiness() {
      const path = configuredPath(options.readinessPath, "Talkdesk readiness path");
      return request("GET", path);
    },
  };
}

function reviewTalkdeskAllowedOperation(
  operationId: TalkdeskReviewedOperationId,
  input: TalkdeskOperationInput = {},
): TalkdeskReviewedOperationInput {
  const parsed = parseTalkdeskOperationInput(input);
  const operation = talkdeskSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
  if (!operation || String(operation.path) === "host-configured") {
    throw new Error(`Talkdesk operation '${operationId}' is not in the reviewed allowlist.`);
  }
  const method = operation.method as ProviderHttpMethod;
  const path = configuredPath(operation.path, `Talkdesk operation '${operationId}' path`);
  return {
    ...parsed,
    operationId,
    method,
    path,
  };
}

function assertReviewedOperation(
  expectedOperationId: TalkdeskReviewedOperationId,
  input: TalkdeskReviewedOperationInput,
): Pick<TalkdeskReviewedOperationInput, "method" | "path"> {
  if (!isPlainObject(input)) throw new Error("Talkdesk reviewed operation input object is required.");
  assertAllowedKeys(input, ["body", "query", "idempotencyKey", "operationId", "method", "path"], "Talkdesk reviewed operation input");
  const candidate = input as Partial<TalkdeskReviewedOperationInput>;
  const parsed = parseTalkdeskOperationInput({
    ...(candidate.body !== undefined ? { body: candidate.body } : {}),
    ...(candidate.query !== undefined ? { query: candidate.query } : {}),
    ...(candidate.idempotencyKey !== undefined ? { idempotencyKey: candidate.idempotencyKey } : {}),
  });
  const reviewed = reviewTalkdeskAllowedOperation(expectedOperationId, parsed);
  if (
    candidate.operationId !== reviewed.operationId
    || candidate.method !== reviewed.method
    || candidate.path !== reviewed.path
  ) {
    throw new Error(`Talkdesk operation '${expectedOperationId}' must be reviewed by createTalkdeskClient before execution.`);
  }
  return reviewed;
}

function parseConfiguredHandoffInput(input: unknown = {}): ConfiguredHandoffInput {
  if (!isPlainObject(input)) throw new Error("Talkdesk handoff input object is required.");
  assertAllowedKeys(input, ["payload", "query", "idempotencyKey"], "Talkdesk handoff input");
  const candidate = input as ConfiguredHandoffInput;
  return {
    ...(candidate.payload !== undefined ? { payload: parseJsonObject(candidate.payload, "Talkdesk handoff payload") } : {}),
    ...(candidate.query !== undefined ? { query: parseProviderQuery(candidate.query, "Talkdesk handoff query") } : {}),
    ...(candidate.idempotencyKey !== undefined ? { idempotencyKey: parseIdempotencyKey(candidate.idempotencyKey, "Talkdesk handoff idempotencyKey") } : {}),
  };
}

function parseTalkdeskOperationInput(input: unknown = {}): TalkdeskOperationInput {
  if (!isPlainObject(input)) throw new Error("Talkdesk operation input object is required.");
  assertAllowedKeys(input, ["body", "query", "idempotencyKey"], "Talkdesk operation input");
  const candidate = input as TalkdeskOperationInput;
  return {
    ...(candidate.body !== undefined ? { body: parseJsonObject(candidate.body, "Talkdesk operation body") } : {}),
    ...(candidate.query !== undefined ? { query: parseProviderQuery(candidate.query, "Talkdesk operation query") } : {}),
    ...(candidate.idempotencyKey !== undefined ? { idempotencyKey: parseIdempotencyKey(candidate.idempotencyKey, "Talkdesk operation idempotencyKey") } : {}),
  };
}

function configuredBaseUrl(options: Pick<TalkdeskClientOptions, "apiBaseUrl" | "baseUrl">): string {
  const baseUrl = options.baseUrl ?? options.apiBaseUrl;
  if (!baseUrl) throw new Error("Talkdesk baseUrl is required to use the built-in REST adapter.");
  let parsed: URL;
  try {
    parsed = new URL(baseUrl);
  } catch {
    throw new Error("Talkdesk baseUrl must be a valid https URL.");
  }
  if (parsed.protocol !== "https:") throw new Error("Talkdesk baseUrl must be a valid https URL.");
  return baseUrl;
}

function configuredPath(path: string | undefined, label: string): string {
  if (!path) throw new Error(`${label} must be configured to use the built-in REST adapter.`);
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("://") || /\s/.test(path)) {
    throw new Error(`${label} must be a provider-relative path beginning with '/'.`);
  }
  return path;
}

function assertAllowedKeys(input: ProviderJsonObject, allowedKeys: readonly string[], label: string): void {
  const allowed = new Set(allowedKeys);
  const unsupportedKey = Object.keys(input).find((key) => !allowed.has(key));
  if (unsupportedKey) throw new Error(`${label} does not allow unsupported field '${unsupportedKey}'.`);
}

function parseJsonObject(value: unknown, label: string): ProviderJsonObject {
  if (!isPlainObject(value)) throw new Error(`${label} must be a JSON object.`);
  assertJsonValue(value, label);
  return value as ProviderJsonObject;
}

function parseProviderQuery(value: unknown, label: string): Record<string, ProviderQueryValue> {
  if (!isPlainObject(value)) throw new Error(`${label} must be an object.`);
  const query: Record<string, ProviderQueryValue> = {};
  for (const [key, queryValue] of Object.entries(value)) {
    query[key] = parseProviderQueryValue(queryValue, `${label}.${key}`);
  }
  return query;
}

function parseProviderQueryValue(value: unknown, label: string): ProviderQueryValue {
  if (value === undefined || value === null || typeof value === "string" || typeof value === "boolean") return value;
  if (typeof value === "number") {
    if (!Number.isFinite(value)) throw new Error(`${label} must be a finite number.`);
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((item, index) => parseProviderQueryArrayValue(item, `${label}[${index}]`));
  }
  throw new Error(`${label} must be a string, number, boolean, null, undefined, or array of primitives.`);
}

function parseProviderQueryArrayValue(value: unknown, label: string): string | number | boolean {
  if (typeof value === "string" || typeof value === "boolean") return value;
  if (typeof value === "number" && Number.isFinite(value)) return value;
  throw new Error(`${label} must be a string, number, or boolean.`);
}

function parseIdempotencyKey(value: unknown, label: string): string {
  if (typeof value !== "string" || value.trim() === "") throw new Error(`${label} must be a non-empty string.`);
  return value;
}

function assertJsonValue(value: unknown, label: string): void {
  if (value === null || typeof value === "string" || typeof value === "boolean") return;
  if (typeof value === "number") {
    if (!Number.isFinite(value)) throw new Error(`${label} must contain only finite numbers.`);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => assertJsonValue(item, `${label}[${index}]`));
    return;
  }
  if (isPlainObject(value)) {
    for (const [key, item] of Object.entries(value)) {
      if (item === undefined) throw new Error(`${label}.${key} must not be undefined.`);
      assertJsonValue(item, `${label}.${key}`);
    }
    return;
  }
  throw new Error(`${label} must contain only JSON values.`);
}

function isPlainObject(value: unknown): value is ProviderJsonObject {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}
