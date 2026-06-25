import {
  defineIntegration,
  providerJsonRequest,
  type ProviderHttpMethod,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import {
  gorgiasTicketingProviderManifest,
  gorgiasTicketingProviderManifestInput,
} from "./manifest.js";

export { gorgiasTicketingProviderManifest } from "./manifest.js";

export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
export interface JsonObject {
  [key: string]: JsonValue | undefined;
}

export interface GorgiasTicketingClientOptions {
  providerClient?: GorgiasTicketingProviderClient;
  baseUrl?: string;
  accessToken?: string;
  apiKey?: string;
  apiEmail?: string;
  apiUsername?: string;
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

export interface GorgiasTicketingProviderClient {
  rawClient?: unknown;
  rawRequest?<T = JsonValue>(operation: string, input?: unknown): Promise<T>;
  createTicket(payload: JsonObject): Promise<JsonObject>;
  getTicket(ticketId: string | number): Promise<JsonObject>;
  updateTicket(ticketId: string | number, patch: JsonObject): Promise<JsonObject>;
  listTickets(query?: JsonObject): Promise<JsonObject>;
  createTicketMessage(ticketId: string | number, payload: JsonObject): Promise<JsonObject>;
  listMessages(query?: JsonObject): Promise<JsonObject>;
  readiness(): Promise<JsonObject>;
}

export interface GorgiasTicketingIntegrationOptions extends GorgiasTicketingClientOptions {}

export function createGorgiasTicketingClient(
  options: GorgiasTicketingClientOptions = {},
): GorgiasTicketingProviderClient {
  if (options.providerClient) return options.providerClient;
  if (hasGorgiasRestConfig(options)) return createGorgiasRestProviderClient(options);
  return createMissingGorgiasProviderClient();
}

export function createGorgiasTicketingOperationHandlers(
  options: GorgiasTicketingIntegrationOptions = {},
) {
  const client = createGorgiasTicketingClient(options);

  return {
    "ticket.create": (input: JsonObject) => client.createTicket(input),
    "ticket.read": (input: { ticketId: string | number }) => client.getTicket(input.ticketId),
    "ticket.update": (input: { ticketId: string | number; patch: JsonObject }) => client.updateTicket(input.ticketId, input.patch),
    "ticket.search": (input: { query?: JsonObject } = {}) => client.listTickets(input.query),
    "ticket.comment.create": (input: { ticketId: string | number; message: JsonObject }) => client.createTicketMessage(input.ticketId, input.message),
    "gorgias.message.list": (input: { query?: JsonObject } = {}) => client.listMessages(input.query),
    "gorgias.readiness": () => client.readiness(),
  } as const;
}

export function createGorgiasTicketingIntegration(
  options: GorgiasTicketingIntegrationOptions = {},
) {
  return defineIntegration({
    manifest: gorgiasTicketingProviderManifestInput,
    metadata: { manifest: gorgiasTicketingProviderManifest },
    operations: createGorgiasTicketingOperationHandlers(options),
  });
}

export const createGorgiasIntegration = createGorgiasTicketingIntegration;
export const createGorgiasIntegrationOperationHandlers = createGorgiasTicketingOperationHandlers;

function createMissingGorgiasProviderClient(): GorgiasTicketingProviderClient {
  const missingClient = async (): Promise<JsonObject> => {
    throw new Error("Gorgias provider client is required. Pass a GorgiasTicketingProviderClient or configure baseUrl with accessToken/apiKey for the built-in REST adapter.");
  };
  return {
    createTicket: missingClient,
    getTicket: missingClient,
    updateTicket: missingClient,
    listTickets: missingClient,
    createTicketMessage: missingClient,
    listMessages: missingClient,
    readiness: missingClient,
  };
}

const gorgiasDefaultBaseUrl = "https://api.gorgias.com";

function hasGorgiasRestConfig(options: GorgiasTicketingClientOptions): boolean {
  return Boolean(options.baseUrl || options.accessToken || options.apiKey || options.fetch);
}

function createGorgiasRestProviderClient(options: GorgiasTicketingClientOptions): GorgiasTicketingProviderClient {
  return {
    async rawRequest<T = JsonValue>(operation: string, input?: unknown) {
      const request = isRecord(input) ? input : {};
      return gorgiasRequest<T>(options, {
        path: operation,
        method: providerMethod(request.method),
        query: asJsonObject(request.query),
        body: request.body,
        headers: asHeadersRecord(request.headers),
      });
    },
    createTicket(payload) {
      return gorgiasRequest(options, {
        method: "POST",
        path: "/api/tickets",
        body: stripUndefined(payload),
      });
    },
    getTicket(ticketId) {
      return gorgiasRequest(options, {
        path: "/api/tickets/{ticketId}",
        pathParams: { ticketId },
      });
    },
    updateTicket(ticketId, patch) {
      return gorgiasRequest(options, {
        method: "PUT",
        path: "/api/tickets/{ticketId}",
        pathParams: { ticketId },
        body: stripUndefined(patch),
      });
    },
    listTickets(query) {
      return gorgiasRequest(options, {
        path: "/api/tickets",
        query,
      });
    },
    createTicketMessage(ticketId, payload) {
      return gorgiasRequest(options, {
        method: "POST",
        path: "/api/tickets/{ticketId}/messages",
        pathParams: { ticketId },
        body: stripUndefined(payload),
      });
    },
    listMessages(query) {
      return gorgiasRequest(options, {
        path: "/api/messages",
        query,
      });
    },
    readiness() {
      return gorgiasRequest(options, {
        path: "/api/account",
      });
    },
  };
}

async function gorgiasRequest<T = JsonObject>(
  options: GorgiasTicketingClientOptions,
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
    baseUrl: options.baseUrl ?? gorgiasDefaultBaseUrl,
    path: request.path,
    method: request.method ?? "GET",
    pathParams: request.pathParams,
    query: providerQuery(request.query),
    body: request.body,
    headers: request.headers,
    authorizationHeader: gorgiasAuthorization(options),
    fetch: options.fetch,
    signal: options.signal,
    timeoutMs: options.timeoutMs,
    retry: options.retry,
    providerName: "Gorgias",
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

function gorgiasAuthorization(options: GorgiasTicketingClientOptions): string {
  if (options.accessToken) return `Bearer ${options.accessToken}`;
  if (!options.apiKey) throw new Error("Gorgias REST adapter requires accessToken or apiKey.");
  const username = options.apiEmail ?? options.apiUsername;
  if (!username) return `Basic ${options.apiKey}`;
  return `Basic ${Buffer.from(`${username}:${options.apiKey}`).toString("base64")}`;
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
