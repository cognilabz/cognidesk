import { defineIntegration } from "@cognidesk/integration-kit";
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
  accessToken?: string;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
}

export function createHelpScoutTicketingClient(options: HelpScoutTicketingClientOptions = {}) {
  const fetchImpl = options.fetch ?? fetch;
  const baseUrl = normalizeUrl(options.apiBaseUrl ?? "https://api.helpscout.net/v2");
  const request = <T = JsonValue>(path: string, init: RequestInit = {}) => helpScoutRequest<T>({
    fetch: fetchImpl,
    url: `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`,
    init,
    accessToken: options.accessToken,
  });

  return {
    rawRequest: request,
    createConversation: (payload: JsonObject) => request<JsonObject>("/conversations", { method: "POST", body: JSON.stringify(payload) }),
    getConversation: (conversationId: string | number) => request<JsonObject>(`/conversations/${encodeURIComponent(String(conversationId))}`),
    updateConversation: (conversationId: string | number, patch: JsonObject | JsonObject[]) => request<JsonObject>(`/conversations/${encodeURIComponent(String(conversationId))}`, { method: "PATCH", body: JSON.stringify(patch) }),
    listConversations: (query: JsonObject = {}) => request<JsonObject>(`/conversations?${queryParams(query)}`),
    createReply: (conversationId: string | number, payload: JsonObject) => request<JsonObject>(`/conversations/${encodeURIComponent(String(conversationId))}/reply`, { method: "POST", body: JSON.stringify(payload) }),
    createNote: (conversationId: string | number, payload: JsonObject) => request<JsonObject>(`/conversations/${encodeURIComponent(String(conversationId))}/notes`, { method: "POST", body: JSON.stringify(payload) }),
    listThreads: (conversationId: string | number) => request<JsonObject>(`/conversations/${encodeURIComponent(String(conversationId))}/threads`),
    readiness: () => request<JsonObject>("/mailboxes"),
  };
}

export function createHelpScoutTicketingIntegration(options: HelpScoutTicketingClientOptions = {}) {
  const client = createHelpScoutTicketingClient(options);
  return defineIntegration({
    manifest: helpScoutTicketingProviderManifestInput,
    metadata: { manifest: helpScoutTicketingProviderManifest },
    operations: {
      "ticket.create": (input: JsonObject) => client.createConversation(input),
      "ticket.read": (input: { conversationId: string | number }) => client.getConversation(input.conversationId),
      "ticket.update": (input: { conversationId: string | number; patch: JsonObject | JsonObject[] }) => client.updateConversation(input.conversationId, input.patch),
      "ticket.search": (input: { query?: JsonObject } = {}) => client.listConversations(input.query),
      "ticket.comment.create": (input: { conversationId: string | number; reply: JsonObject }) => client.createReply(input.conversationId, input.reply),
      "ticket.internalNote.create": (input: { conversationId: string | number; note: JsonObject }) => client.createNote(input.conversationId, input.note),
      "help-scout.thread.list": (input: { conversationId: string | number }) => client.listThreads(input.conversationId),
      "help-scout.readiness": () => client.readiness(),
    },
  });
}

async function helpScoutRequest<T>(input: { fetch: typeof fetch; url: string; init: RequestInit; accessToken?: string | undefined }): Promise<T> {
  const headers = new Headers(input.init.headers);
  headers.set("accept", "application/json");
  if (input.init.body) headers.set("content-type", "application/json");
  if (input.accessToken) headers.set("authorization", `Bearer ${input.accessToken}`);
  const response = await input.fetch(input.url, { ...input.init, headers });
  const text = await response.text();
  const body = text ? JSON.parse(text) : {};
  if (!response.ok) throw new Error(`Help Scout request failed with ${response.status}: ${text}`);
  return body as T;
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
