import {
  defineIntegration,
  providerJsonRequest,
  type ProviderHttpMethod,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import {
  frontTicketingProviderManifest,
  frontTicketingProviderManifestInput,
} from "./manifest.js";

export { frontTicketingProviderManifest } from "./manifest.js";

export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
export interface JsonObject {
  [key: string]: JsonValue | undefined;
}

export interface FrontTicketingClientOptions {
  providerClient?: FrontTicketingProviderClient;
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

export interface FrontTicketingProviderClient {
  rawClient?: unknown;
  rawRequest?<T = JsonValue>(operation: string, input?: unknown): Promise<T>;
  createMessage(channelId: string, payload: JsonObject): Promise<JsonObject>;
  getConversation(conversationId: string): Promise<JsonObject>;
  updateConversation(conversationId: string, patch: JsonObject): Promise<JsonObject>;
  searchConversations(query: string, options?: JsonObject): Promise<JsonObject>;
  replyToConversation(conversationId: string, payload: JsonObject): Promise<JsonObject>;
  addComment(conversationId: string, payload: JsonObject): Promise<JsonObject>;
  listMessages(conversationId: string, query?: JsonObject): Promise<JsonObject>;
  listComments(conversationId: string): Promise<JsonObject>;
  readiness(): Promise<JsonObject>;
}

export interface FrontTicketingIntegrationOptions extends FrontTicketingClientOptions {}

export function createFrontTicketingClient(
  options: FrontTicketingClientOptions = {},
): FrontTicketingProviderClient {
  if (options.providerClient) return options.providerClient;
  if (hasFrontRestConfig(options)) return createFrontRestProviderClient(options);
  return createMissingFrontProviderClient();
}

export function createFrontTicketingOperationHandlers(
  options: FrontTicketingIntegrationOptions = {},
) {
  const client = createFrontTicketingClient(options);

  return {
    "ticket.create": (input: { channelId: string; payload: JsonObject }) => {
      rejectAttachments(input.payload);
      return client.createMessage(input.channelId, input.payload);
    },
    "ticket.read": (input: { conversationId: string }) => client.getConversation(input.conversationId),
    "ticket.update": (input: { conversationId: string; patch: JsonObject }) => client.updateConversation(input.conversationId, input.patch),
    "ticket.search": (input: { query: string; options?: JsonObject }) => client.searchConversations(input.query, input.options),
    "ticket.comment.create": (input: { conversationId: string; payload: JsonObject }) => {
      rejectAttachments(input.payload);
      return client.replyToConversation(input.conversationId, input.payload);
    },
    "ticket.internalNote.create": (input: { conversationId: string; payload: JsonObject }) => {
      rejectAttachments(input.payload);
      return client.addComment(input.conversationId, input.payload);
    },
    "front.message.list": (input: { conversationId: string; query?: JsonObject }) => client.listMessages(input.conversationId, input.query),
    "front.comment.list": (input: { conversationId: string }) => client.listComments(input.conversationId),
    "front.readiness": () => client.readiness(),
  } as const;
}

export function createFrontTicketingIntegration(
  options: FrontTicketingIntegrationOptions = {},
) {
  return defineIntegration({
    manifest: frontTicketingProviderManifestInput,
    metadata: { manifest: frontTicketingProviderManifest },
    operations: createFrontTicketingOperationHandlers(options),
  });
}

function rejectAttachments(payload: JsonObject): void {
  if (payload.attachments !== undefined) {
    throw new Error("Front attachment payloads require multipart/form-data and are not supported by JSON helpers.");
  }
}

function createMissingFrontProviderClient(): FrontTicketingProviderClient {
  const missingClient = async (): Promise<JsonObject> => {
    throw new Error("Front provider client is required. Pass a FrontTicketingProviderClient or configure baseUrl with accessToken/apiKey for the built-in REST adapter.");
  };
  return {
    createMessage: missingClient,
    getConversation: missingClient,
    updateConversation: missingClient,
    searchConversations: missingClient,
    replyToConversation: missingClient,
    addComment: missingClient,
    listMessages: missingClient,
    listComments: missingClient,
    readiness: missingClient,
  };
}

const frontDefaultBaseUrl = "https://api2.frontapp.com";

function hasFrontRestConfig(options: FrontTicketingClientOptions): boolean {
  return Boolean(options.baseUrl || options.accessToken || options.apiKey || options.fetch);
}

function createFrontRestProviderClient(options: FrontTicketingClientOptions): FrontTicketingProviderClient {
  return {
    async rawRequest<T = JsonValue>(operation: string, input?: unknown) {
      const request = isRecord(input) ? input : {};
      return frontRequest<T>(options, {
        path: operation,
        method: providerMethod(request.method),
        pathParams: asPathParamsRecord(request.pathParams),
        query: asJsonObject(request.query),
        body: request.body,
        headers: asHeadersRecord(request.headers),
      });
    },
    createMessage(channelId, payload) {
      return frontRequest(options, {
        method: "POST",
        path: "/channels/{channelId}/messages",
        pathParams: { channelId },
        body: stripUndefined(payload),
      });
    },
    getConversation(conversationId) {
      return frontRequest(options, {
        path: "/conversations/{conversationId}",
        pathParams: { conversationId },
      });
    },
    updateConversation(conversationId, patch) {
      return frontRequest(options, {
        method: "PATCH",
        path: "/conversations/{conversationId}",
        pathParams: { conversationId },
        body: stripUndefined(patch),
      });
    },
    searchConversations(query, searchOptions) {
      return frontRequest(options, {
        path: "/conversations/search/{query}",
        pathParams: { query },
        query: searchOptions,
      });
    },
    replyToConversation(conversationId, payload) {
      return frontRequest(options, {
        method: "POST",
        path: "/conversations/{conversationId}/messages",
        pathParams: { conversationId },
        body: stripUndefined(payload),
      });
    },
    addComment(conversationId, payload) {
      return frontRequest(options, {
        method: "POST",
        path: "/conversations/{conversationId}/comments",
        pathParams: { conversationId },
        body: stripUndefined(payload),
      });
    },
    listMessages(conversationId, query) {
      return frontRequest(options, {
        path: "/conversations/{conversationId}/messages",
        pathParams: { conversationId },
        query,
      });
    },
    listComments(conversationId) {
      return frontRequest(options, {
        path: "/conversations/{conversationId}/comments",
        pathParams: { conversationId },
      });
    },
    readiness() {
      return frontRequest(options, {
        path: "/teammates",
        query: { limit: 1 },
      });
    },
  };
}

async function frontRequest<T = JsonObject>(
  options: FrontTicketingClientOptions,
  request: {
    path: string;
    method?: ProviderHttpMethod | undefined;
    pathParams?: Record<string, string | number | boolean | undefined> | undefined;
    query?: JsonObject | undefined;
    body?: unknown;
    headers?: Record<string, string | undefined> | undefined;
  },
): Promise<T> {
  return providerJsonRequestWithControls<T>({
    baseUrl: options.baseUrl ?? frontDefaultBaseUrl,
    path: request.path,
    method: request.method ?? "GET",
    pathParams: request.pathParams,
    query: providerQuery(request.query),
    body: request.body,
    headers: request.headers,
    accessToken: frontAccessToken(options),
    fetch: options.fetch,
    signal: options.signal,
    timeoutMs: options.timeoutMs,
    retry: options.retry,
    providerName: "Front",
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

function frontAccessToken(options: FrontTicketingClientOptions): string {
  const token = options.accessToken ?? options.apiKey;
  if (!token) throw new Error("Front REST adapter requires accessToken or apiKey.");
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

function asPathParamsRecord(value: unknown): Record<string, string | number | boolean | undefined> | undefined {
  if (!isRecord(value)) return undefined;
  return Object.fromEntries(
    Object.entries(value).filter(([, param]) =>
      param === undefined || typeof param === "string" || typeof param === "number" || typeof param === "boolean"
    ),
  ) as Record<string, string | number | boolean | undefined>;
}

function providerMethod(value: unknown): ProviderHttpMethod | undefined {
  if (value === undefined) return undefined;
  const method = String(value).toUpperCase();
  if (["GET", "POST", "PUT", "PATCH", "DELETE"].includes(method)) return method as ProviderHttpMethod;
  throw new Error(`Unsupported Front HTTP method: ${String(value)}`);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}
