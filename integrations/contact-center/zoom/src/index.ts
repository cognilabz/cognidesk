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

export interface ZoomContactCenterWorkItemChannel {
  channel: "work_item";
  channel_source: "API";
}

export interface ZoomContactCenterConsumer {
  consumer_display_name: string;
  consumer_email?: string | undefined;
  consumer_external_id?: string | undefined;
  consumer_number?: string | undefined;
}

export interface ZoomContactCenterFlow {
  flow_entry_id: string;
}

export interface ZoomContactCenterVariable {
  name: string;
  value: string;
}

export interface ZoomContactCenterWorkItemVariables {
  work_item_name: string;
  work_item_desc?: string | undefined;
  work_item_due_date?: string | undefined;
  work_item_hyperlink?: string | undefined;
  work_item_id?: string | undefined;
  work_item_origin?: string | undefined;
  work_item_priority?: number | undefined;
  work_item_transcript_url?: string | undefined;
  work_item_type_id?: string | undefined;
  [key: string]: unknown;
}

export interface ZoomContactCenterStartEngagementBody {
  channels: readonly [ZoomContactCenterWorkItemChannel, ...ZoomContactCenterWorkItemChannel[]];
  consumers: readonly [ZoomContactCenterConsumer, ...ZoomContactCenterConsumer[]];
  flow: ZoomContactCenterFlow;
  language_code?: string | undefined;
  variables?: readonly ZoomContactCenterVariable[] | undefined;
  work_item_variables: ZoomContactCenterWorkItemVariables;
}

export interface ZoomContactCenterStartContactInput extends Omit<ZoomContactCenterOperationInput, "body" | "pathParams"> {
  body: ZoomContactCenterStartEngagementBody;
}

export interface ZoomContactCenterReadContactInput extends Omit<ZoomContactCenterOperationInput, "body" | "pathParams"> {
  engagementId: string;
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
  startContact(input: ZoomContactCenterOperationInput): Promise<ProviderJsonObject>;
  readContact(input: ZoomContactCenterOperationInput): Promise<ProviderJsonObject>;
  request?(input: ProviderExtensionRequestInput): Promise<ProviderJsonObject>;
  readiness?(): Promise<ProviderJsonObject>;
}

export interface ZoomContactCenterClient {
  providerClient: ZoomContactCenterProviderClient;
  createHandoff(input?: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  startContact(input: ZoomContactCenterStartContactInput): Promise<ProviderJsonObject>;
  readContact(input: ZoomContactCenterReadContactInput): Promise<ProviderJsonObject>;
  request(input: ProviderExtensionRequestInput): Promise<ProviderJsonObject>;
  readiness(): Promise<ProviderJsonObject>;
}

export function createZoomContactCenterClient(options: ZoomContactCenterClientOptions = {}): ZoomContactCenterClient {
  const providerClient = options.providerClient
    ? requireZoomContactCenterProviderClient(options.providerClient)
    : createZoomContactCenterRestProviderClient(options);
  return {
    providerClient,
    createHandoff(input = {}) {
      return providerClient.createHandoff(normalizeConfiguredHandoffInput(input));
    },
    startContact(input) {
      return providerClient.startContact(startContactOperationInput(input));
    },
    readContact(input) {
      return providerClient.readContact(readContactOperationInput(input));
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
    "contact-center.contact.start": async (input: unknown) => client.startContact(input as ZoomContactCenterStartContactInput),
    "contact-center.contact.read": async (input: unknown) => client.readContact(input as ZoomContactCenterReadContactInput),
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

const supportedRequestMethods = new Set<ProviderHttpMethod>(["GET", "POST", "PUT", "PATCH", "DELETE"]);
const mutatingRequestMethods = new Set<ProviderHttpMethod>(["POST", "PUT", "PATCH", "DELETE"]);
const requiredProviderClientMethods = ["createHandoff", "startContact", "readContact"] as const;

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
    startContact(input) {
      return requestAllowedOperation("Startworkitemengagement", restStartContactOperationInput(input));
    },
    readContact(input) {
      return requestAllowedOperation("getEngagement", restReadContactOperationInput(input));
    },
    request(input) {
      const value = validateZoomContactCenterProviderRequest(input, { requireReviewedOperation: true });
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

function requireZoomContactCenterProviderClient(providerClient: ZoomContactCenterProviderClient): ZoomContactCenterProviderClient {
  const candidate = providerClient as Record<typeof requiredProviderClientMethods[number], unknown>;
  const missing = requiredProviderClientMethods.filter((method) => typeof candidate[method] !== "function");
  if (missing.length > 0) {
    throw new Error(`Zoom Contact Center providerClient is missing required method(s): ${missing.join(", ")}.`);
  }
  return providerClient;
}

function normalizeConfiguredHandoffInput(input: ConfiguredHandoffInput | undefined): ConfiguredHandoffInput {
  const value = input ?? {};
  requireInputObject(value, "handoff");
  return {
    ...(value.payload !== undefined ? { payload: value.payload } : {}),
    ...(value.query !== undefined ? { query: value.query } : {}),
    ...(value.idempotencyKey !== undefined ? { idempotencyKey: value.idempotencyKey } : {}),
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

function startContactOperationInput(input: ZoomContactCenterStartContactInput | undefined): ZoomContactCenterOperationInput {
  const value = requireInputObject(input, "startContact") as unknown as ZoomContactCenterStartContactInput;
  return {
    ...(value.query !== undefined ? { query: value.query } : {}),
    body: startEngagementBody(value.body),
    ...(value.headers !== undefined ? { headers: value.headers } : {}),
    ...(value.idempotencyKey !== undefined ? { idempotencyKey: value.idempotencyKey } : {}),
  };
}

function readContactOperationInput(input: ZoomContactCenterReadContactInput | undefined): ZoomContactCenterOperationInput {
  const value = requireInputObject(input, "readContact") as unknown as ZoomContactCenterReadContactInput;
  requireNonEmptyString(value.engagementId, "readContact.engagementId");
  return {
    pathParams: { engagementId: value.engagementId },
    ...(value.query !== undefined ? { query: value.query } : {}),
    ...(value.headers !== undefined ? { headers: value.headers } : {}),
    ...(value.idempotencyKey !== undefined ? { idempotencyKey: value.idempotencyKey } : {}),
  };
}

function restStartContactOperationInput(input: ZoomContactCenterOperationInput | undefined): ZoomContactCenterOperationInput {
  const value = requireInputObject(input, "startContact") as ZoomContactCenterOperationInput;
  return {
    ...(value.query !== undefined ? { query: value.query } : {}),
    body: startEngagementBody(value.body),
    ...(value.headers !== undefined ? { headers: value.headers } : {}),
    ...(value.idempotencyKey !== undefined ? { idempotencyKey: value.idempotencyKey } : {}),
  };
}

function restReadContactOperationInput(input: ZoomContactCenterOperationInput | undefined): ZoomContactCenterOperationInput {
  const value = requireInputObject(input, "readContact") as ZoomContactCenterOperationInput;
  const pathParams = requireInputObject(value.pathParams, "readContact.pathParams") as Record<string, unknown>;
  requireNonEmptyString(pathParams.engagementId, "readContact.pathParams.engagementId");
  return normalizeOperationInput(value);
}

function startEngagementBody(input: unknown): ZoomContactCenterStartEngagementBody {
  const body = requireInputObject(input, "startContact.body") as Partial<ZoomContactCenterStartEngagementBody>;
  const flow = requireInputObject(body.flow, "startContact.body.flow") as Partial<ZoomContactCenterFlow>;
  requireNonEmptyString(flow.flow_entry_id, "startContact.body.flow.flow_entry_id");

  const workItemVariables = requireInputObject(
    body.work_item_variables,
    "startContact.body.work_item_variables",
  ) as Partial<ZoomContactCenterWorkItemVariables>;
  requireNonEmptyString(workItemVariables.work_item_name, "startContact.body.work_item_variables.work_item_name");

  for (const [index, channel] of requireNonEmptyArray(body.channels, "startContact.body.channels").entries()) {
    const value = requireInputObject(channel, `startContact.body.channels[${index}]`) as Partial<ZoomContactCenterWorkItemChannel>;
    if (value.channel !== "work_item" || value.channel_source !== "API") {
      throw new Error("Zoom Contact Center startContact.body.channels only supports work_item/API.");
    }
  }

  for (const [index, consumer] of requireNonEmptyArray(body.consumers, "startContact.body.consumers").entries()) {
    const value = requireInputObject(consumer, `startContact.body.consumers[${index}]`) as Partial<ZoomContactCenterConsumer>;
    requireNonEmptyString(value.consumer_display_name, `startContact.body.consumers[${index}].consumer_display_name`);
  }

  if (body.variables !== undefined) {
    if (!Array.isArray(body.variables)) throw new Error("Zoom Contact Center startContact.body.variables must be an array.");
    for (const [index, variable] of body.variables.entries()) {
      const value = requireInputObject(variable, `startContact.body.variables[${index}]`) as Partial<ZoomContactCenterVariable>;
      requireNonEmptyString(value.name, `startContact.body.variables[${index}].name`);
      requireNonEmptyString(value.value, `startContact.body.variables[${index}].value`);
    }
  }

  return body as ZoomContactCenterStartEngagementBody;
}

function validateZoomContactCenterProviderRequest(
  input: ProviderExtensionRequestInput,
  options: { requireReviewedOperation?: boolean } = {},
): ProviderExtensionRequestInput & { method: ProviderHttpMethod; path: string } {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    throw new Error("Zoom Contact Center request input object is required.");
  }
  const operation = input.operationId
    ? zoomContactCenterSupportSlice.allowedOperations.find((candidate) => candidate.id === input.operationId)
    : undefined;
  if (input.operationId && !operation) {
    throw new Error(`Zoom Contact Center operation '${input.operationId}' is not in the reviewed allowlist.`);
  }
  const method = providerHttpMethod(input.method ?? operationMethod(operation) ?? "GET", "Zoom Contact Center");
  const path = input.path ?? operationPath(operation);
  if (!path || path === "host-configured") {
    throw new Error("Zoom Contact Center request path or reviewed operationId is required.");
  }
  if (options.requireReviewedOperation && (!operation || path !== operationPath(operation))) {
    throw new Error("Zoom Contact Center built-in REST adapter only supports reviewed operationId requests; use providerClient.request for host-reviewed extension operations.");
  }
  if (mutatingRequestMethods.has(method) && (input.allowMutation !== true || !hasPolicyClassification(input.classification))) {
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

function hasPolicyClassification(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function providerHttpMethod(value: unknown, providerName: string): ProviderHttpMethod {
  const method = String(value).toUpperCase();
  if (!supportedRequestMethods.has(method as ProviderHttpMethod)) {
    throw new Error(`${providerName} request method '${method}' is not supported.`);
  }
  return method as ProviderHttpMethod;
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

function requireInputObject(input: unknown, label: string): ProviderJsonObject {
  if (!isPlainObject(input)) {
    throw new Error(`Zoom Contact Center ${label} input object is required.`);
  }
  return input;
}

function requireNonEmptyString(value: unknown, field: string): asserts value is string {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Zoom Contact Center ${field} is required.`);
  }
}

function requireNonEmptyArray(value: unknown, field: string): readonly unknown[] {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`Zoom Contact Center ${field} must be a non-empty array.`);
  }
  return value;
}

function isPlainObject(value: unknown): value is ProviderJsonObject {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

type ZoomContactCenterAllowedOperation = typeof zoomContactCenterSupportSlice.allowedOperations[number];
