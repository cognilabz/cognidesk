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
    "ticket.create": (input: JsonObject) => client.createConversation(input),
    "ticket.read": (input: { conversationId: string }) => client.getConversation(input.conversationId),
    "ticket.update": (input: { conversationId: string; patch: JsonObject }) => client.updateConversation(input.conversationId, input.patch),
    "ticket.search": (input: { query?: JsonObject } = {}) => client.listConversations(input.query),
    "ticket.comment.create": (input: { message: JsonObject }) => {
      assertDocumentedChannel(input.message.channel);
      return client.createMessage(input.message);
    },
    "kustomer.message.list": (input: { query?: JsonObject } = {}) => client.listMessages(input.query),
    "kustomer.customerDraft.create": (input: { customerId: string; draft: JsonObject; query?: JsonObject }) => {
      if (input.draft.channel !== undefined) assertDocumentedChannel(input.draft.channel);
      return client.createCustomerDraft(input.customerId, input.draft, input.query);
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
      const request = isRecord(input) ? input : {};
      return kustomerRequest<T>(options, {
        path: operation,
        method: providerMethod(request.method),
        query: asJsonObject(request.query),
        body: request.body,
        headers: asHeadersRecord(request.headers),
      });
    },
    createConversation(payload) {
      return kustomerRequest(options, {
        method: "POST",
        path: "/v1/conversations",
        body: stripUndefined(payload),
      });
    },
    getConversation(conversationId) {
      return kustomerRequest(options, {
        path: "/v1/conversations/{conversationId}",
        pathParams: { conversationId },
      });
    },
    updateConversation(conversationId, patch) {
      return kustomerRequest(options, {
        method: "PATCH",
        path: "/v1/conversations/{conversationId}",
        pathParams: { conversationId },
        body: stripUndefined(patch),
      });
    },
    listConversations(query) {
      return kustomerRequest(options, {
        path: "/v1/conversations",
        query,
      });
    },
    listMessages(query) {
      return kustomerRequest(options, {
        path: "/v1/messages",
        query,
      });
    },
    createMessage(payload) {
      return kustomerRequest(options, {
        method: "POST",
        path: "/v1/messages",
        body: stripUndefined(payload),
      });
    },
    createCustomerDraft(customerId, payload, query) {
      return kustomerRequest(options, {
        method: "POST",
        path: "/v1/customers/{customerId}/drafts",
        pathParams: { customerId },
        query,
        body: stripUndefined(payload),
      });
    },
    readiness() {
      return kustomerRequest(options, {
        path: "/v1/messages",
        query: { limit: 1 },
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
  if (!token) throw new Error("Kustomer REST adapter requires accessToken or apiKey.");
  return token;
}

function providerQuery(query?: JsonObject): Record<string, ProviderQueryValue> | undefined {
  if (!query) return undefined;
  const entries = Object.entries(query)
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

function asJsonObject(value: unknown): JsonObject | undefined {
  return isRecord(value) ? value as JsonObject : undefined;
}

function asHeadersRecord(value: unknown): Record<string, string | undefined> | undefined {
  if (!isRecord(value)) return undefined;
  return Object.fromEntries(
    Object.entries(value).filter(([, header]) => typeof header === "string"),
  ) as Record<string, string>;
}

function providerMethod(value: unknown): ProviderHttpMethod | undefined {
  return ["GET", "POST", "PUT", "PATCH", "DELETE"].includes(String(value))
    ? String(value) as ProviderHttpMethod
    : undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}
