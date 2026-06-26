import {
  defineIntegration,
  providerJsonRequest,
  type ProviderHttpMethod,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import {
  helpScoutTicketingProviderManifest,
  helpScoutTicketingProviderManifestInput,
} from "./manifest.js";

export { helpScoutTicketingProviderManifest } from "./manifest.js";

export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
export interface JsonObject {
  [key: string]: JsonValue | undefined;
}

export interface HelpScoutTicketingClientOptions {
  providerClient?: HelpScoutTicketingProviderClient;
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

export interface HelpScoutTicketingProviderClient {
  rawClient?: unknown;
  rawRequest?<T = JsonValue>(operation: string, input?: unknown): Promise<T>;
  createConversation(payload: JsonObject): Promise<JsonObject>;
  getConversation(conversationId: string | number): Promise<JsonObject>;
  updateConversation(conversationId: string | number, patch: JsonObject | JsonObject[]): Promise<JsonObject>;
  listConversations(query?: JsonObject): Promise<JsonObject>;
  createReply(conversationId: string | number, payload: JsonObject): Promise<JsonObject>;
  createNote(conversationId: string | number, payload: JsonObject): Promise<JsonObject>;
  listThreads(conversationId: string | number): Promise<JsonObject>;
  readiness(): Promise<JsonObject>;
}

export interface HelpScoutTicketingIntegrationOptions extends HelpScoutTicketingClientOptions {}

export function createHelpScoutTicketingClient(
  options: HelpScoutTicketingClientOptions = {},
): HelpScoutTicketingProviderClient {
  if (options.providerClient) return options.providerClient;
  if (hasHelpScoutRestConfig(options)) return createHelpScoutRestProviderClient(options);
  return createMissingHelpScoutProviderClient();
}

export function createHelpScoutTicketingOperationHandlers(
  options: HelpScoutTicketingIntegrationOptions = {},
) {
  const client = createHelpScoutTicketingClient(options);
  return {
    "ticket.create": (input: JsonObject) => client.createConversation(input),
    "ticket.read": (input: { conversationId: string | number }) => client.getConversation(input.conversationId),
    "ticket.update": (input: { conversationId: string | number; patch: JsonObject | JsonObject[] }) => client.updateConversation(input.conversationId, input.patch),
    "ticket.search": (input: { query?: JsonObject } = {}) => client.listConversations(input.query),
    "ticket.comment.create": (input: { conversationId: string | number; reply: JsonObject }) => client.createReply(input.conversationId, input.reply),
    "ticket.internalNote.create": (input: { conversationId: string | number; note: JsonObject }) => client.createNote(input.conversationId, input.note),
    "help-scout.thread.list": (input: { conversationId: string | number }) => client.listThreads(input.conversationId),
    "help-scout.readiness": () => client.readiness(),
  } as const;
}

export function createHelpScoutTicketingIntegration(
  options: HelpScoutTicketingIntegrationOptions = {},
) {
  return defineIntegration({
    manifest: helpScoutTicketingProviderManifestInput,
    metadata: { manifest: helpScoutTicketingProviderManifest },
    operations: createHelpScoutTicketingOperationHandlers(options),
  });
}

function createMissingHelpScoutProviderClient(): HelpScoutTicketingProviderClient {
  const missingClient = async (): Promise<JsonObject> => {
    throw new Error("Help Scout provider client is required. Pass a HelpScoutTicketingProviderClient or configure accessToken/apiKey for the built-in REST adapter.");
  };
  return {
    createConversation: missingClient,
    getConversation: missingClient,
    updateConversation: missingClient,
    listConversations: missingClient,
    createReply: missingClient,
    createNote: missingClient,
    listThreads: missingClient,
    readiness: missingClient,
  };
}

const helpScoutDefaultBaseUrl = "https://api.helpscout.net";

function hasHelpScoutRestConfig(options: HelpScoutTicketingClientOptions): boolean {
  return Boolean(options.baseUrl || options.accessToken || options.apiKey || options.fetch);
}

function createHelpScoutRestProviderClient(options: HelpScoutTicketingClientOptions): HelpScoutTicketingProviderClient {
  return {
    async rawRequest<T = JsonValue>(operation: string, input?: unknown) {
      const request = isRecord(input) ? input : {};
      return helpScoutRequest<T>(options, {
        path: operation,
        method: providerMethod(request.method),
        query: asJsonObject(request.query),
        body: request.body,
        headers: asHeadersRecord(request.headers),
      });
    },
    createConversation(payload) {
      return helpScoutRequest(options, {
        method: "POST",
        path: "/v2/conversations",
        body: stripUndefined(payload),
      });
    },
    getConversation(conversationId) {
      return helpScoutRequest(options, {
        path: "/v2/conversations/{conversationId}",
        pathParams: { conversationId },
      });
    },
    updateConversation(conversationId, patch) {
      return helpScoutRequest(options, {
        method: "PATCH",
        path: "/v2/conversations/{conversationId}",
        pathParams: { conversationId },
        body: patch,
      });
    },
    listConversations(query) {
      return helpScoutRequest(options, {
        path: "/v2/conversations",
        query,
      });
    },
    createReply(conversationId, payload) {
      return helpScoutRequest(options, {
        method: "POST",
        path: "/v2/conversations/{conversationId}/reply",
        pathParams: { conversationId },
        body: stripUndefined(payload),
      });
    },
    createNote(conversationId, payload) {
      return helpScoutRequest(options, {
        method: "POST",
        path: "/v2/conversations/{conversationId}/notes",
        pathParams: { conversationId },
        body: stripUndefined(payload),
      });
    },
    listThreads(conversationId) {
      return helpScoutRequest(options, {
        path: "/v2/conversations/{conversationId}/threads",
        pathParams: { conversationId },
      });
    },
    readiness() {
      return helpScoutRequest(options, {
        path: "/v2/mailboxes",
      });
    },
  };
}

async function helpScoutRequest<T = JsonObject>(
  options: HelpScoutTicketingClientOptions,
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
    baseUrl: options.baseUrl ?? helpScoutDefaultBaseUrl,
    path: request.path,
    method: request.method ?? "GET",
    pathParams: request.pathParams,
    query: providerQuery(request.query),
    body: request.body,
    headers: request.headers,
    accessToken: helpScoutAccessToken(options),
    fetch: options.fetch,
    signal: options.signal,
    timeoutMs: options.timeoutMs,
    retry: options.retry,
    providerName: "Help Scout",
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

function helpScoutAccessToken(options: HelpScoutTicketingClientOptions): string {
  const token = options.accessToken ?? options.apiKey;
  if (!token) throw new Error("Help Scout REST adapter requires accessToken or apiKey.");
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
  if (value === undefined) return undefined;
  const method = String(value).toUpperCase();
  if (["GET", "POST", "PUT", "PATCH", "DELETE"].includes(method)) return method as ProviderHttpMethod;
  throw new Error(`Unsupported Help Scout HTTP method: ${String(value)}`);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}
