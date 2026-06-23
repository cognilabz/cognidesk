import { defineIntegration } from "@cognidesk/integration-kit";
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
  accessToken?: string;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
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

export function createKustomerTicketingClient(options: KustomerTicketingClientOptions = {}) {
  const fetchImpl = options.fetch ?? fetch;
  const baseUrl = normalizeUrl(options.apiBaseUrl ?? "https://api.kustomerapp.com");
  const request = <T = JsonValue>(path: string, init: RequestInit = {}) => kustomerRequest<T>({
    fetch: fetchImpl,
    url: `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`,
    init,
    accessToken: options.accessToken,
  });

  return {
    rawRequest: request,
    createConversation: (payload: JsonObject) => request<JsonObject>("/v1/conversations", { method: "POST", body: JSON.stringify(payload) }),
    getConversation: (conversationId: string) => request<JsonObject>(`/v1/conversations/${encodeURIComponent(conversationId)}`),
    updateConversation: (conversationId: string, patch: JsonObject) => request<JsonObject>(`/v1/conversations/${encodeURIComponent(conversationId)}`, { method: "PATCH", body: JSON.stringify(patch) }),
    listConversations: (query: JsonObject = {}) => request<JsonObject>(`/v1/conversations?${queryParams(query)}`),
    listMessages: (query: JsonObject = {}) => request<JsonObject>(`/v1/messages?${queryParams(query)}`),
    createMessage(payload: JsonObject) {
      assertDocumentedChannel(payload.channel);
      return request<JsonObject>("/v1/messages", { method: "POST", body: JSON.stringify(payload) });
    },
    createCustomerDraft(customerId: string, payload: JsonObject, query: JsonObject = {}) {
      if (payload.channel !== undefined) assertDocumentedChannel(payload.channel);
      return request<JsonObject>(`/v1/customers/${encodeURIComponent(customerId)}/drafts?${queryParams(query)}`, { method: "POST", body: JSON.stringify(payload) });
    },
    readiness: () => request<JsonObject>("/v1/messages?pageSize=1"),
  };
}

export function createKustomerTicketingIntegration(options: KustomerTicketingClientOptions = {}) {
  const client = createKustomerTicketingClient(options);
  return defineIntegration({
    manifest: kustomerTicketingProviderManifestInput,
    metadata: { manifest: kustomerTicketingProviderManifest },
    operations: {
      "ticket.create": (input: JsonObject) => client.createConversation(input),
      "ticket.read": (input: { conversationId: string }) => client.getConversation(input.conversationId),
      "ticket.update": (input: { conversationId: string; patch: JsonObject }) => client.updateConversation(input.conversationId, input.patch),
      "ticket.search": (input: { query?: JsonObject } = {}) => client.listConversations(input.query),
      "ticket.comment.create": (input: { message: JsonObject }) => client.createMessage(input.message),
      "kustomer.message.list": (input: { query?: JsonObject } = {}) => client.listMessages(input.query),
      "kustomer.customerDraft.create": (input: { customerId: string; draft: JsonObject; query?: JsonObject }) => client.createCustomerDraft(input.customerId, input.draft, input.query),
      "kustomer.readiness": () => client.readiness(),
    },
  });
}

async function kustomerRequest<T>(input: { fetch: typeof fetch; url: string; init: RequestInit; accessToken?: string | undefined }): Promise<T> {
  const headers = new Headers(input.init.headers);
  headers.set("accept", "application/json");
  if (input.init.body) headers.set("content-type", "application/json");
  if (input.accessToken) headers.set("authorization", `Bearer ${input.accessToken}`);
  const response = await input.fetch(input.url, { ...input.init, headers });
  const text = await response.text();
  const body = text ? JSON.parse(text) : {};
  if (!response.ok) throw new Error(`Kustomer request failed with ${response.status}: ${text}`);
  return body as T;
}

function assertDocumentedChannel(value: JsonValue | undefined): void {
  if (typeof value !== "string" || !documentedMessageChannels.has(value)) {
    throw new Error(`Unsupported Kustomer message channel '${String(value)}'.`);
  }
}

function normalizeUrl(value: string): string {
  return value.replace(/\/+$/, "");
}

function queryParams(input: JsonObject): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(input)) {
    if (value !== undefined) params.set(key, String(value));
  }
  return params.toString();
}
