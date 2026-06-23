import { defineIntegration } from "@cognidesk/integration-kit";
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
  apiBaseUrl: string;
  accessToken?: string;
  email?: string;
  apiKey?: string;
  fetch?: typeof fetch;
}

export function createGorgiasTicketingClient(options: GorgiasTicketingClientOptions) {
  const fetchImpl = options.fetch ?? fetch;
  const baseUrl = normalizeUrl(options.apiBaseUrl);
  const request = <T = JsonValue>(path: string, init: RequestInit = {}) => gorgiasRequest<T>({
    fetch: fetchImpl,
    url: `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`,
    init,
    options,
  });

  return {
    rawRequest: request,
    createTicket: (payload: JsonObject) => request<JsonObject>("/api/tickets", { method: "POST", body: JSON.stringify(payload) }),
    getTicket: (ticketId: string | number) => request<JsonObject>(`/api/tickets/${encodeURIComponent(String(ticketId))}`),
    updateTicket: (ticketId: string | number, patch: JsonObject) => request<JsonObject>(`/api/tickets/${encodeURIComponent(String(ticketId))}`, { method: "PUT", body: JSON.stringify(patch) }),
    listTickets: (query: JsonObject = {}) => request<JsonObject>(`/api/tickets?${queryParams(query)}`),
    createTicketMessage: (ticketId: string | number, payload: JsonObject) => request<JsonObject>(`/api/tickets/${encodeURIComponent(String(ticketId))}/messages`, { method: "POST", body: JSON.stringify(payload) }),
    listMessages: (query: JsonObject = {}) => request<JsonObject>(`/api/messages?${queryParams(query)}`),
    readiness: () => request<JsonObject>("/api/account"),
  };
}

export function createGorgiasTicketingIntegration(options: GorgiasTicketingClientOptions) {
  const client = createGorgiasTicketingClient(options);
  return defineIntegration({
    manifest: gorgiasTicketingProviderManifestInput,
    metadata: { manifest: gorgiasTicketingProviderManifest },
    operations: {
      "ticket.create": (input: JsonObject) => client.createTicket(input),
      "ticket.read": (input: { ticketId: string | number }) => client.getTicket(input.ticketId),
      "ticket.update": (input: { ticketId: string | number; patch: JsonObject }) => client.updateTicket(input.ticketId, input.patch),
      "ticket.search": (input: { query?: JsonObject } = {}) => client.listTickets(input.query),
      "ticket.comment.create": (input: { ticketId: string | number; message: JsonObject }) => client.createTicketMessage(input.ticketId, input.message),
      "gorgias.message.list": (input: { query?: JsonObject } = {}) => client.listMessages(input.query),
      "gorgias.readiness": () => client.readiness(),
    },
  });
}

async function gorgiasRequest<T>(input: { fetch: typeof fetch; url: string; init: RequestInit; options: GorgiasTicketingClientOptions }): Promise<T> {
  const headers = new Headers(input.init.headers);
  headers.set("accept", "application/json");
  if (input.init.body) headers.set("content-type", "application/json");
  if (input.options.accessToken) {
    headers.set("authorization", `Bearer ${input.options.accessToken}`);
  } else if (input.options.email && input.options.apiKey) {
    headers.set("authorization", `Basic ${Buffer.from(`${input.options.email}:${input.options.apiKey}`).toString("base64")}`);
  }
  const response = await input.fetch(input.url, { ...input.init, headers });
  const text = await response.text();
  const body = text ? JSON.parse(text) : {};
  if (!response.ok) throw new Error(`Gorgias request failed with ${response.status}: ${text}`);
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
