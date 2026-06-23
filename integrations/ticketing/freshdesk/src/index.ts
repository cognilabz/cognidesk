import { defineIntegration } from "@cognidesk/integration-kit";
import {
  freshdeskTicketingProviderManifest,
  freshdeskTicketingProviderManifestInput,
} from "./manifest.js";

export { freshdeskTicketingProviderManifest } from "./manifest.js";

export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
export interface JsonObject {
  [key: string]: JsonValue | undefined;
}

export interface FreshdeskTicketingClientOptions {
  domain: string;
  apiKey?: string;
  fetch?: typeof fetch;
}

export interface FreshdeskWebhookOptions {
  webhookSecret?: string;
  headerName?: string;
}

export function createFreshdeskTicketingClient(options: FreshdeskTicketingClientOptions) {
  const fetchImpl = options.fetch ?? fetch;
  const baseUrl = `${normalizeUrl(options.domain)}/api/v2`;
  const request = <T = JsonValue>(path: string, init: RequestInit = {}) => freshdeskRequest<T>({
    fetch: fetchImpl,
    url: `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`,
    init,
    apiKey: options.apiKey,
  });

  return {
    rawRequest: request,
    createTicket: (input: JsonObject) => request<JsonObject>("/tickets", { method: "POST", body: JSON.stringify(input) }),
    getTicket: (ticketId: string | number) => request<JsonObject>(`/tickets/${encodeURIComponent(String(ticketId))}`),
    updateTicket: (ticketId: string | number, patch: JsonObject) => request<JsonObject>(`/tickets/${encodeURIComponent(String(ticketId))}`, { method: "PUT", body: JSON.stringify(patch) }),
    searchTickets: (query: string | JsonObject) => request<JsonObject>(`/search/tickets?${queryParams(typeof query === "string" ? { query } : query)}`),
    createReply: (ticketId: string | number, body: JsonObject) => request<JsonObject>(`/tickets/${encodeURIComponent(String(ticketId))}/reply`, { method: "POST", body: JSON.stringify(body) }),
    createNote: (ticketId: string | number, body: JsonObject) => request<JsonObject>(`/tickets/${encodeURIComponent(String(ticketId))}/notes`, { method: "POST", body: JSON.stringify(body) }),
    getContact: (contactId: string | number) => request<JsonObject>(`/contacts/${encodeURIComponent(String(contactId))}`),
    searchContacts: (query: string | JsonObject) => request<JsonObject>(`/search/contacts?${queryParams(typeof query === "string" ? { query } : query)}`),
    getAgent: (agentId: string | number) => request<JsonObject>(`/agents/${encodeURIComponent(String(agentId))}`),
    getGroup: (groupId: string | number) => request<JsonObject>(`/groups/${encodeURIComponent(String(groupId))}`),
    readiness: () => request<JsonObject>("/agents/me"),
  };
}

export function createFreshdeskTicketingIntegration(options: FreshdeskTicketingClientOptions) {
  const client = createFreshdeskTicketingClient(options);
  return defineIntegration({
    manifest: freshdeskTicketingProviderManifestInput,
    metadata: { manifest: freshdeskTicketingProviderManifest },
    operations: {
      "ticket.create": (input: JsonObject) => client.createTicket(input),
      "ticket.read": (input: { ticketId: string | number }) => client.getTicket(input.ticketId),
      "ticket.update": (input: { ticketId: string | number; patch: JsonObject }) => client.updateTicket(input.ticketId, input.patch),
      "ticket.search": (input: { query: string | JsonObject }) => client.searchTickets(input.query),
      "ticket.comment.create": (input: { ticketId: string | number; reply: JsonObject }) => client.createReply(input.ticketId, input.reply),
      "ticket.internalNote.create": (input: { ticketId: string | number; note: JsonObject }) => client.createNote(input.ticketId, input.note),
      "customer.read": (input: { contactId: string | number }) => client.getContact(input.contactId),
      "customer.search": (input: { query: string | JsonObject }) => client.searchContacts(input.query),
      "freshdesk.agent.read": (input: { agentId: string | number }) => client.getAgent(input.agentId),
      "freshdesk.group.read": (input: { groupId: string | number }) => client.getGroup(input.groupId),
      "freshdesk.readiness": () => client.readiness(),
      "freshdesk.webhook.parse": (input: { request: Request; options?: FreshdeskWebhookOptions }) => parseFreshdeskWebhookRequest(input.request, input.options),
    },
  });
}

export function validateFreshdeskWebhookSecret(headers: Headers, options: FreshdeskWebhookOptions = {}): boolean {
  if (!options.webhookSecret) return true;
  const headerName = options.headerName ?? "x-cognidesk-freshdesk-webhook-secret";
  return headers.get(headerName) === options.webhookSecret;
}

export async function parseFreshdeskWebhookRequest(request: Request, options: FreshdeskWebhookOptions = {}) {
  if (!validateFreshdeskWebhookSecret(request.headers, options)) {
    throw new Error("Freshdesk webhook shared secret mismatch.");
  }
  const payload = await request.json() as JsonObject;
  return {
    verified: Boolean(options.webhookSecret),
    event: {
      provider: "freshdesk",
      payload,
    },
  };
}

async function freshdeskRequest<T>(input: { fetch: typeof fetch; url: string; init: RequestInit; apiKey?: string | undefined }): Promise<T> {
  const headers = new Headers(input.init.headers);
  headers.set("accept", "application/json");
  if (input.init.body) headers.set("content-type", "application/json");
  if (input.apiKey) headers.set("authorization", `Basic ${Buffer.from(`${input.apiKey}:X`).toString("base64")}`);
  const response = await input.fetch(input.url, { ...input.init, headers });
  const text = await response.text();
  const body = text ? JSON.parse(text) : {};
  if (!response.ok) throw new Error(`Freshdesk request failed with ${response.status}: ${text}`);
  return body as T;
}

function normalizeUrl(value: string): string {
  const withProtocol = /^https?:\/\//.test(value) ? value : `https://${value}`;
  return withProtocol.replace(/\/+$/, "");
}

function queryParams(input: JsonObject): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(input)) {
    if (value !== undefined) params.set(key, String(value));
  }
  return params.toString();
}
