import { defineIntegration } from "@cognidesk/integration-kit";
import {
  zendeskTicketingProviderManifest,
  zendeskTicketingProviderManifestInput,
} from "./manifest.js";

export { zendeskTicketingProviderManifest } from "./manifest.js";

export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
export interface JsonObject {
  [key: string]: JsonValue | undefined;
}

export interface ZendeskTicketingClientOptions {
  instanceUrl: string;
  accessToken?: string;
  email?: string;
  apiToken?: string;
  apiBasePath?: string;
  fetch?: typeof fetch;
}

export interface ZendeskTicketingClient {
  rawRequest<T = JsonValue>(path: string, init?: RequestInit): Promise<T>;
  createTicket(input: JsonObject): Promise<JsonObject>;
  getTicket(ticketId: string | number): Promise<JsonObject>;
  updateTicket(ticketId: string | number, patch: JsonObject): Promise<JsonObject>;
  searchTickets(query: string | JsonObject): Promise<JsonObject>;
  createComment(ticketId: string | number, comment: JsonObject, publicComment?: boolean): Promise<JsonObject>;
  uploadFile(input: { filename: string; data: BodyInit; contentType?: string; token?: string }): Promise<JsonObject>;
  getUser(userId: string | number): Promise<JsonObject>;
  getOrganization(organizationId: string | number): Promise<JsonObject>;
  listWebhooks(): Promise<JsonValue>;
  readiness(): Promise<JsonObject>;
}

export function createZendeskTicketingClient(options: ZendeskTicketingClientOptions): ZendeskTicketingClient {
  const fetchImpl = options.fetch ?? fetch;
  const baseUrl = normalizeUrl(options.instanceUrl);
  const apiBasePath = options.apiBasePath ?? "/api/v2";
  const request = <T = JsonValue>(path: string, init: RequestInit = {}) => zendeskRequest<T>({
    fetch: fetchImpl,
    url: `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`,
    init,
    options,
  });
  const apiPath = (path: string) => `${apiBasePath}${path}`;

  return {
    rawRequest: request,
    async createTicket(input) {
      const response = await request<JsonObject>(apiPath("/tickets.json"), {
        method: "POST",
        body: JSON.stringify({ ticket: input }),
      });
      return asObject(response.ticket) ?? response;
    },
    async getTicket(ticketId) {
      const response = await request<JsonObject>(apiPath(`/tickets/${encodeURIComponent(String(ticketId))}.json`));
      return asObject(response.ticket) ?? response;
    },
    async updateTicket(ticketId, patch) {
      const response = await request<JsonObject>(apiPath(`/tickets/${encodeURIComponent(String(ticketId))}.json`), {
        method: "PUT",
        body: JSON.stringify({ ticket: patch }),
      });
      return asObject(response.ticket) ?? response;
    },
    async searchTickets(query) {
      const params = new URLSearchParams();
      if (typeof query === "string") {
        params.set("query", query);
      } else {
        for (const [key, value] of Object.entries(query)) {
          if (value !== undefined) params.set(key, String(value));
        }
      }
      return request<JsonObject>(apiPath(`/search.json?${params}`));
    },
    async createComment(ticketId, comment, publicComment = true) {
      const body = { comment: { ...comment, public: publicComment } };
      const response = await request<JsonObject>(apiPath(`/tickets/${encodeURIComponent(String(ticketId))}.json`), {
        method: "PUT",
        body: JSON.stringify({ ticket: body }),
      });
      return asObject(response.ticket) ?? response;
    },
    async uploadFile(input) {
      const params = new URLSearchParams({ filename: input.filename });
      if (input.token) params.set("token", input.token);
      const response = await request<JsonObject>(apiPath(`/uploads.json?${params}`), {
        method: "POST",
        headers: { "content-type": input.contentType ?? "application/octet-stream" },
        body: input.data,
      });
      return asObject(response.upload) ?? response;
    },
    async getUser(userId) {
      const response = await request<JsonObject>(apiPath(`/users/${encodeURIComponent(String(userId))}.json`));
      return asObject(response.user) ?? response;
    },
    async getOrganization(organizationId) {
      const response = await request<JsonObject>(apiPath(`/organizations/${encodeURIComponent(String(organizationId))}.json`));
      return asObject(response.organization) ?? response;
    },
    async listWebhooks() {
      const response = await request<JsonObject>(apiPath("/webhooks"));
      return response.webhooks ?? response;
    },
    async readiness() {
      const response = await request<JsonObject>(apiPath("/users/me.json"));
      return asObject(response.user) ?? response;
    },
  };
}

export function createZendeskTicketingIntegration(options: ZendeskTicketingClientOptions) {
  const client = createZendeskTicketingClient(options);
  return defineIntegration({
    manifest: zendeskTicketingProviderManifestInput,
    metadata: { manifest: zendeskTicketingProviderManifest },
    operations: {
      "ticket.create": (input: JsonObject) => client.createTicket(input),
      "ticket.read": (input: { ticketId: string | number }) => client.getTicket(input.ticketId),
      "ticket.update": (input: { ticketId: string | number; patch: JsonObject }) => client.updateTicket(input.ticketId, input.patch),
      "ticket.search": (input: { query: string | JsonObject }) => client.searchTickets(input.query),
      "ticket.comment.create": (input: { ticketId: string | number; comment: JsonObject }) => client.createComment(input.ticketId, input.comment, true),
      "ticket.internalNote.create": (input: { ticketId: string | number; note: JsonObject }) => client.createComment(input.ticketId, input.note, false),
      "ticket.attachments.add": (input: { filename: string; data: BodyInit; contentType?: string; token?: string }) => client.uploadFile(input),
      "customer.read": (input: { userId: string | number }) => client.getUser(input.userId),
      "zendesk.organization.read": (input: { organizationId: string | number }) => client.getOrganization(input.organizationId),
      "zendesk.webhook.list": () => client.listWebhooks(),
      "zendesk.readiness": () => client.readiness(),
    },
  });
}

async function zendeskRequest<T>(input: { fetch: typeof fetch; url: string; init: RequestInit; options: ZendeskTicketingClientOptions }): Promise<T> {
  const headers = new Headers(input.init.headers);
  headers.set("accept", "application/json");
  if (input.init.body && !headers.has("content-type")) headers.set("content-type", "application/json");
  if (input.options.accessToken) {
    headers.set("authorization", `Bearer ${input.options.accessToken}`);
  } else if (input.options.email && input.options.apiToken) {
    headers.set("authorization", `Basic ${Buffer.from(`${input.options.email}/token:${input.options.apiToken}`).toString("base64")}`);
  }
  const response = await input.fetch(input.url, { ...input.init, headers });
  const text = await response.text();
  const body = text ? JSON.parse(text) : {};
  if (!response.ok) throw new Error(`Zendesk request failed with ${response.status}: ${text}`);
  return body as T;
}

function normalizeUrl(value: string): string {
  return value.replace(/\/+$/, "");
}

function asObject(value: JsonValue | undefined): JsonObject | undefined {
  return typeof value === "object" && value !== null && !Array.isArray(value) ? value : undefined;
}
