import { defineIntegration } from "@cognidesk/integration-kit";
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
  accessToken?: string;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
}

export function createFrontTicketingClient(options: FrontTicketingClientOptions = {}) {
  const fetchImpl = options.fetch ?? fetch;
  const baseUrl = normalizeUrl(options.apiBaseUrl ?? "https://api2.frontapp.com");
  const request = <T = JsonValue>(path: string, init: RequestInit = {}) => frontRequest<T>({
    fetch: fetchImpl,
    url: `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`,
    init,
    accessToken: options.accessToken,
  });

  return {
    rawRequest: request,
    createMessage(channelId: string, payload: JsonObject) {
      rejectAttachments(payload);
      return request<JsonObject>(`/channels/${encodeURIComponent(channelId)}/messages`, { method: "POST", body: JSON.stringify(payload) });
    },
    getConversation: (conversationId: string) => request<JsonObject>(`/conversations/${encodeURIComponent(conversationId)}`),
    updateConversation: (conversationId: string, patch: JsonObject) => request<JsonObject>(`/conversations/${encodeURIComponent(conversationId)}`, { method: "PATCH", body: JSON.stringify(patch) }),
    searchConversations: (query: string, options: JsonObject = {}) => request<JsonObject>(`/conversations/search/${encodeURIComponent(query)}?${queryParams(options)}`),
    replyToConversation(conversationId: string, payload: JsonObject) {
      rejectAttachments(payload);
      return request<JsonObject>(`/conversations/${encodeURIComponent(conversationId)}/messages`, { method: "POST", body: JSON.stringify(payload) });
    },
    addComment(conversationId: string, payload: JsonObject) {
      rejectAttachments(payload);
      return request<JsonObject>(`/conversations/${encodeURIComponent(conversationId)}/comments`, { method: "POST", body: JSON.stringify(payload) });
    },
    listMessages: (conversationId: string, query: JsonObject = {}) => request<JsonObject>(`/conversations/${encodeURIComponent(conversationId)}/messages?${queryParams(query)}`),
    listComments: (conversationId: string) => request<JsonObject>(`/conversations/${encodeURIComponent(conversationId)}/comments`),
    readiness: () => request<JsonObject>("/teammates"),
  };
}

export function createFrontTicketingIntegration(options: FrontTicketingClientOptions = {}) {
  const client = createFrontTicketingClient(options);
  return defineIntegration({
    manifest: frontTicketingProviderManifestInput,
    metadata: { manifest: frontTicketingProviderManifest },
    operations: {
      "ticket.create": (input: { channelId: string; payload: JsonObject }) => client.createMessage(input.channelId, input.payload),
      "ticket.read": (input: { conversationId: string }) => client.getConversation(input.conversationId),
      "ticket.update": (input: { conversationId: string; patch: JsonObject }) => client.updateConversation(input.conversationId, input.patch),
      "ticket.search": (input: { query: string; options?: JsonObject }) => client.searchConversations(input.query, input.options),
      "ticket.comment.create": (input: { conversationId: string; payload: JsonObject }) => client.replyToConversation(input.conversationId, input.payload),
      "ticket.internalNote.create": (input: { conversationId: string; payload: JsonObject }) => client.addComment(input.conversationId, input.payload),
      "front.message.list": (input: { conversationId: string; query?: JsonObject }) => client.listMessages(input.conversationId, input.query),
      "front.comment.list": (input: { conversationId: string }) => client.listComments(input.conversationId),
      "front.readiness": () => client.readiness(),
    },
  });
}

async function frontRequest<T>(input: { fetch: typeof fetch; url: string; init: RequestInit; accessToken?: string | undefined }): Promise<T> {
  const headers = new Headers(input.init.headers);
  headers.set("accept", "application/json");
  if (input.init.body) headers.set("content-type", "application/json");
  if (input.accessToken) headers.set("authorization", `Bearer ${input.accessToken}`);
  const response = await input.fetch(input.url, { ...input.init, headers });
  const text = await response.text();
  const body = text ? JSON.parse(text) : {};
  if (!response.ok) throw new Error(`Front request failed with ${response.status}: ${text}`);
  return body as T;
}

function rejectAttachments(payload: JsonObject): void {
  if (payload.attachments !== undefined) {
    throw new Error("Front attachment payloads require multipart/form-data and are not supported by JSON helpers.");
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
