import {
  defineIntegration,
  providerJsonRequest,
  type ProviderHttpMethod,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import {
  kustomerTicketingProviderManifest,
  kustomerTicketingProviderManifestInput,
} from "./manifest.js";

export { kustomerTicketingProviderManifest } from "./manifest.js";

export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
export interface JsonObject {
  [key: string]: JsonValue | undefined;
}

export interface KustomerTicketingClientOptions {
  providerClient?: KustomerTicketingProviderClient;
  baseUrl?: string;
  accessToken?: string;
  apiKey?: string;
  fetch?: typeof fetch;
  signal?: AbortSignal;
  timeoutMs?: number;
  retry?: number | ProviderJsonRetryOptions;
}

export interface ProviderJsonRetryOptions {
  attempts?: number;
  statusCodes?: readonly number[];
  baseDelayMs?: number;
  maxDelayMs?: number;
}

export interface KustomerTicketingProviderClient {
  rawClient?: unknown;
  rawRequest?<T = JsonValue>(operation: string, input?: unknown): Promise<T>;
  createConversation(payload: JsonObject): Promise<JsonObject>;
  getConversation(conversationId: string): Promise<JsonObject>;
  updateConversation(conversationId: string, patch: JsonObject): Promise<JsonObject>;
  listConversations(query?: JsonObject): Promise<JsonObject>;
  listMessages(query?: JsonObject): Promise<JsonObject>;
  createMessage(payload: JsonObject): Promise<JsonObject>;
  createCustomerDraft(customerId: string, payload: JsonObject, query?: JsonObject): Promise<JsonObject>;
  readiness(): Promise<JsonObject>;
}

export type KustomerCreateConversationInput = JsonObject;

export interface KustomerReadConversationInput extends JsonObject {
  conversationId: string;
}

export interface KustomerUpdateConversationInput extends JsonObject {
  conversationId: string;
  patch: JsonObject;
}

export interface KustomerListConversationsInput extends JsonObject {
  query?: JsonObject;
}

export interface KustomerCreateMessageInput extends JsonObject {
  message: JsonObject;
}

export interface KustomerListMessagesInput extends JsonObject {
  query?: JsonObject;
}

export interface KustomerCreateCustomerDraftInput extends JsonObject {
  customerId: string;
  draft: JsonObject;
  query?: JsonObject;
}

const documentedMessageChannels = new Set([
  "email",
  "sms",
  "chat",
  "facebook",
  "twitter-dm",
  "twitter-tweet",
  "voice",
  "instagram",
  "whatsapp",
]);

const supportedKustomerRawMethods = new Set<ProviderHttpMethod>(["GET", "POST", "PUT", "PATCH", "DELETE"]);

export interface KustomerTicketingIntegrationOptions extends KustomerTicketingClientOptions {}

export function createKustomerTicketingClient(
  options: KustomerTicketingClientOptions = {},
): KustomerTicketingProviderClient {
  if (options.providerClient) return options.providerClient;
  if (hasKustomerRestConfig(options)) return createKustomerRestProviderClient(options);
  return createMissingKustomerProviderClient();
}

export function createKustomerTicketingOperationHandlers(
  options: KustomerTicketingIntegrationOptions = {},
) {
  const client = createKustomerTicketingClient(options);

  return {
    "ticket.create": (input: KustomerCreateConversationInput) =>
      client.createConversation(assertJsonObject(input, "ticket.create input")),
    "ticket.read": (input: KustomerReadConversationInput) => {
      const request = assertJsonObject(input, "ticket.read input") as KustomerReadConversationInput;
      return client.getConversation(assertNonEmptyString(request.conversationId, "Kustomer conversationId"));
    },
    "ticket.update": (input: KustomerUpdateConversationInput) => {
      const request = assertJsonObject(input, "ticket.update input") as KustomerUpdateConversationInput;
      return client.updateConversation(
        assertNonEmptyString(request.conversationId, "Kustomer conversationId"),
        assertJsonObject(request.patch, "ticket.update patch"),
      );
    },
    "ticket.search": (input: KustomerListConversationsInput = {}) => {
      const request = assertJsonObject(input, "ticket.search input") as KustomerListConversationsInput;
      return client.listConversations(optionalJsonObject(request.query, "ticket.search query"));
    },
    "ticket.comment.create": (input: KustomerCreateMessageInput) => {
      const request = assertJsonObject(input, "ticket.comment.create input") as KustomerCreateMessageInput;
      const message = assertJsonObject(request.message, "ticket.comment.create message");
      assertDocumentedChannel(message.channel);
      return client.createMessage(message);
    },
    "kustomer.message.list": (input: KustomerListMessagesInput = {}) => {
      const request = assertJsonObject(input, "kustomer.message.list input") as KustomerListMessagesInput;
      return client.listMessages(optionalJsonObject(request.query, "kustomer.message.list query"));
    },
    "kustomer.customerDraft.create": (input: KustomerCreateCustomerDraftInput) => {
      const request = assertJsonObject(input, "kustomer.customerDraft.create input") as KustomerCreateCustomerDraftInput;
      const draft = assertJsonObject(request.draft, "kustomer.customerDraft.create draft");
      if (draft.channel !== undefined) assertDocumentedChannel(draft.channel);
      return client.createCustomerDraft(
        assertNonEmptyString(request.customerId, "Kustomer customerId"),
        draft,
        optionalJsonObject(request.query, "kustomer.customerDraft.create query"),
      );
    },
    "kustomer.readiness": () => client.readiness(),
  } as const;
}

export function createKustomerTicketingIntegration(
  options: KustomerTicketingIntegrationOptions = {},
) {
  return defineIntegration({
    manifest: kustomerTicketingProviderManifestInput,
    metadata: { manifest: kustomerTicketingProviderManifest },
    operations: createKustomerTicketingOperationHandlers(options),
  });
}

export const createKustomerIntegration = createKustomerTicketingIntegration;
export const createKustomerIntegrationOperationHandlers = createKustomerTicketingOperationHandlers;

function assertDocumentedChannel(value: JsonValue | undefined): void {
  if (typeof value !== "string" || !documentedMessageChannels.has(value)) {
    throw new Error(`Unsupported Kustomer message channel '${String(value)}'.`);
  }
}

function createMissingKustomerProviderClient(): KustomerTicketingProviderClient {
  const missingClient = async (): Promise<JsonObject> => {
    throw new Error("Kustomer provider client is required. Pass a KustomerTicketingProviderClient or configure baseUrl with accessToken/apiKey for the built-in REST adapter.");
  };
  return {
    createConversation: missingClient,
    getConversation: missingClient,
    updateConversation: missingClient,
    listConversations: missingClient,
    listMessages: missingClient,
    createMessage: missingClient,
    createCustomerDraft: missingClient,
    readiness: missingClient,
  };
}

const kustomerDefaultBaseUrl = "https://api.kustomerapp.com";

function hasKustomerRestConfig(options: KustomerTicketingClientOptions): boolean {
  return Boolean(options.baseUrl || options.accessToken || options.apiKey || options.fetch);
}

function createKustomerRestProviderClient(options: KustomerTicketingClientOptions): KustomerTicketingProviderClient {
  return {
    async rawRequest<T = JsonValue>(operation: string, input?: unknown) {
      const request = input === undefined
        ? {}
        : assertJsonObject(input, "Kustomer raw request input");
      return kustomerRequest<T>(options, {
        path: assertRelativeRestPath(operation, "Kustomer raw request path"),
        method: request.method === undefined
          ? undefined
          : assertProviderMethod(request.method, "Kustomer raw request method"),
        query: optionalJsonObject(request.query, "Kustomer raw request query"),
        body: request.body,
        headers: asHeadersRecord(request.headers),
      });
    },
    createConversation(payload) {
      const body = assertJsonObject(payload, "Kustomer conversation payload");
      return kustomerRequest(options, {
        method: "POST",
        path: "/v1/conversations",
        body: stripUndefined(body),
      });
    },
    getConversation(conversationId) {
      return kustomerRequest(options, {
        path: "/v1/conversations/{conversationId}",
        pathParams: { conversationId: assertNonEmptyString(conversationId, "Kustomer conversationId") },
      });
    },
    updateConversation(conversationId, patch) {
      const body = assertJsonObject(patch, "Kustomer conversation patch");
      return kustomerRequest(options, {
        method: "PATCH",
        path: "/v1/conversations/{conversationId}",
        pathParams: { conversationId: assertNonEmptyString(conversationId, "Kustomer conversationId") },
        body: stripUndefined(body),
      });
    },
    listConversations(query) {
      return kustomerRequest(options, {
        path: "/v1/conversations",
        query: optionalJsonObject(query, "Kustomer conversation query"),
      });
    },
    listMessages(query) {
      return kustomerRequest(options, {
        path: "/v1/messages",
        query: optionalJsonObject(query, "Kustomer message query"),
      });
    },
    createMessage(payload) {
      const body = assertJsonObject(payload, "Kustomer message payload");
      assertDocumentedChannel(body.channel);
      return kustomerRequest(options, {
        method: "POST",
        path: "/v1/messages",
        body: stripUndefined(body),
      });
    },
    createCustomerDraft(customerId, payload, query) {
      const body = assertJsonObject(payload, "Kustomer customer draft payload");
      if (body.channel !== undefined) assertDocumentedChannel(body.channel);
      return kustomerRequest(options, {
        method: "POST",
        path: "/v1/customers/{customerId}/drafts",
        pathParams: { customerId: assertNonEmptyString(customerId, "Kustomer customerId") },
        query: optionalJsonObject(query, "Kustomer customer draft query"),
        body: stripUndefined(body),
      });
    },
    readiness() {
      return kustomerRequest(options, {
        path: "/v1/users/current",
      });
    },
  };
}

async function kustomerRequest<T = JsonObject>(
  options: KustomerTicketingClientOptions,
  request: {
    path: string;
    method?: ProviderHttpMethod | undefined;
    pathParams?: Record<string, string | number | boolean | undefined>;
    query?: JsonObject | undefined;
    body?: unknown;
    headers?: Record<string, string | undefined> | undefined;
  },
): Promise<T> {
  return providerJsonRequestWithControls<T>({
    baseUrl: options.baseUrl ?? kustomerDefaultBaseUrl,
    path: request.path,
    method: request.method ?? "GET",
    pathParams: request.pathParams,
    query: providerQuery(request.query),
    body: request.body,
    headers: request.headers,
    accessToken: kustomerAccessToken(options),
    fetch: options.fetch,
    signal: options.signal,
    timeoutMs: options.timeoutMs,
    retry: options.retry,
    providerName: "Kustomer",
  });
}

type ProviderJsonRequestWithControls = Parameters<typeof providerJsonRequest>[0] & {
  signal?: AbortSignal | undefined;
  timeoutMs?: number | undefined;
  retry?: number | ProviderJsonRetryOptions | undefined;
};

function providerJsonRequestWithControls<T = unknown>(input: ProviderJsonRequestWithControls): Promise<T> {
  return providerJsonRequest<T>(input as Parameters<typeof providerJsonRequest>[0]);
}

function kustomerAccessToken(options: KustomerTicketingClientOptions): string {
  const token = options.accessToken ?? options.apiKey;
  if (typeof token !== "string" || token.trim().length === 0) {
    throw new Error("Kustomer REST adapter requires non-empty accessToken or apiKey.");
  }
  return token.trim();
}

function providerQuery(query?: JsonObject): Record<string, ProviderQueryValue> | undefined {
  if (!query) return undefined;
  const normalized = assertJsonObject(query, "Kustomer query");
  const entries = Object.entries(normalized)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => [key, providerQueryValue(value as JsonValue)] as const);
  return Object.fromEntries(entries);
}

function stripUndefined(input: JsonObject): JsonObject {
  return Object.fromEntries(Object.entries(input).filter(([, value]) => value !== undefined)) as JsonObject;
}

function providerQueryValue(value: JsonValue): ProviderQueryValue {
  if (Array.isArray(value)) return value.map((item) => typeof item === "object" ? JSON.stringify(item) : item) as ProviderQueryValue;
  if (isRecord(value)) return JSON.stringify(value);
  return value;
}

function optionalJsonObject(value: unknown, label: string): JsonObject | undefined {
  if (value === undefined) return undefined;
  return assertJsonObject(value, label);
}

function assertJsonObject(value: unknown, label: string): JsonObject {
  if (!isRecord(value)) throw new Error(`${label} must be a JSON object.`);
  return value as JsonObject;
}

function assertNonEmptyString(value: unknown, label: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`${label} must be a non-empty string.`);
  }
  return value;
}

function assertRelativeRestPath(value: unknown, label: string): string {
  const path = assertNonEmptyString(value, label);
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("://")) {
    throw new Error(`${label} must be a relative REST path starting with '/'.`);
  }
  return path;
}

function asHeadersRecord(value: unknown): Record<string, string | undefined> | undefined {
  if (!isRecord(value)) return undefined;
  return Object.fromEntries(
    Object.entries(value).filter(([, header]) => typeof header === "string"),
  ) as Record<string, string>;
}

function assertProviderMethod(value: unknown, label: string): ProviderHttpMethod {
  if (typeof value === "string" && supportedKustomerRawMethods.has(value as ProviderHttpMethod)) {
    return value as ProviderHttpMethod;
  }
  throw new Error(`${label} must be one of GET, POST, PUT, PATCH, DELETE.`);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}
