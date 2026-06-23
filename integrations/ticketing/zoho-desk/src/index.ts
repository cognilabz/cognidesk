import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { zohoDeskTicketingProviderManifest } from "./manifest.js";

export { zohoDeskTicketingProviderManifest } from "./manifest.js";

export type ZohoDeskJsonPrimitive = string | number | boolean | null;
export type ZohoDeskJsonValue =
  | ZohoDeskJsonPrimitive
  | ZohoDeskJsonObject
  | readonly ZohoDeskJsonValue[];
export type ZohoDeskProviderExtensionValue = ZohoDeskJsonValue | object | undefined;
export interface ZohoDeskJsonObject {
  [key: string]: ZohoDeskProviderExtensionValue;
}
export type ZohoDeskProviderPayload = ZohoDeskJsonObject | object;
export type ZohoDeskProviderQuery = Record<string, ZohoDeskProviderExtensionValue>;
export interface ZohoDeskProviderResponse extends ZohoDeskJsonObject {}
export interface ZohoDeskProviderExtensionFields extends ZohoDeskJsonObject {}

export interface ZohoDeskTicketingClientOptions {
  orgId: string;
  accessToken?: string;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
}

export interface ZohoDeskCredentialStatusInput {
  orgId?: string;
  apiAccessConfigured?: boolean;
}

export interface ZohoDeskTicketInput {
  subject: string;
  departmentId: string;
  contactId?: string;
  email?: string;
  description?: string;
  priority?: string;
  status?: string;
  additionalFields?: ZohoDeskProviderExtensionFields;
}

export interface ZohoDeskTicketingClient {
  createTicket(input: ZohoDeskTicketInput): Promise<ZohoDeskProviderResponse>;
  getTicket(ticketId: string): Promise<ZohoDeskProviderResponse>;
  updateTicket(ticketId: string, patch: ZohoDeskProviderPayload): Promise<ZohoDeskProviderResponse>;
  listTickets(query?: Record<string, string | number | boolean>): Promise<ZohoDeskProviderResponse>;
  listTicketComments(ticketId: string, query?: Record<string, string | number | boolean>): Promise<ZohoDeskProviderResponse>;
  createTicketComment(ticketId: string, body: ZohoDeskProviderPayload): Promise<ZohoDeskProviderResponse>;
  listTicketThreads(ticketId: string, query?: Record<string, string | number | boolean>): Promise<ZohoDeskProviderResponse>;
  sendTicketReply(ticketId: string, body: ZohoDeskProviderPayload): Promise<ZohoDeskProviderResponse>;
  readiness(): Promise<ZohoDeskProviderResponse>;
}

export interface ZohoDeskLiveCheckOptions extends ZohoDeskTicketingClientOptions {
  client?: Pick<ZohoDeskTicketingClient, "readiness">;
}

export function createZohoDeskTicketingClient(options: ZohoDeskTicketingClientOptions): ZohoDeskTicketingClient {
  const fetchImpl = options.fetch ?? fetch;
  return {
    async createTicket(input) {
      return zohoRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: "/api/v1/tickets",
        body: {
          subject: input.subject,
          departmentId: input.departmentId,
          ...(input.contactId ? { contactId: input.contactId } : {}),
          ...(input.email ? { email: input.email } : {}),
          ...(input.description ? { description: input.description } : {}),
          ...(input.priority ? { priority: input.priority } : {}),
          ...(input.status ? { status: input.status } : {}),
          ...(input.additionalFields ?? {}),
        },
      });
    },
    async getTicket(ticketId) {
      return zohoRequest({ options, fetch: fetchImpl, method: "GET", path: `/api/v1/tickets/${encodeURIComponent(ticketId)}` });
    },
    async updateTicket(ticketId, patch) {
      return zohoRequest({ options, fetch: fetchImpl, method: "PATCH", path: `/api/v1/tickets/${encodeURIComponent(ticketId)}`, body: patch });
    },
    async listTickets(query = {}) {
      const params = new URLSearchParams(Object.entries(query).map(([key, value]) => [key, String(value)]));
      return zohoRequest({ options, fetch: fetchImpl, method: "GET", path: `/api/v1/tickets${params.size ? `?${params}` : ""}` });
    },
    async listTicketComments(ticketId, query = {}) {
      const params = new URLSearchParams(Object.entries(query).map(([key, value]) => [key, String(value)]));
      return zohoRequest({ options, fetch: fetchImpl, method: "GET", path: `/api/v1/tickets/${encodeURIComponent(ticketId)}/comments${params.size ? `?${params}` : ""}` });
    },
    async createTicketComment(ticketId, body) {
      return zohoRequest({ options, fetch: fetchImpl, method: "POST", path: `/api/v1/tickets/${encodeURIComponent(ticketId)}/comments`, body });
    },
    async listTicketThreads(ticketId, query = {}) {
      const params = new URLSearchParams(Object.entries(query).map(([key, value]) => [key, String(value)]));
      return zohoRequest({ options, fetch: fetchImpl, method: "GET", path: `/api/v1/tickets/${encodeURIComponent(ticketId)}/threads${params.size ? `?${params}` : ""}` });
    },
    async sendTicketReply(ticketId, body) {
      return zohoRequest({ options, fetch: fetchImpl, method: "POST", path: `/api/v1/tickets/${encodeURIComponent(ticketId)}/sendReply`, body });
    },
    async readiness() {
      return zohoRequest({ options, fetch: fetchImpl, method: "GET", path: "/api/v1/organizations" });
    },
  };
}

export function zohoDeskTicketingCredentialStatuses(input: ZohoDeskCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    { providerPackageId: zohoDeskTicketingProviderManifest.id, requirementId: "zoho-desk-org", state: input.orgId ? "configured" : "missing", message: input.orgId ? "Zoho Desk organization ID is configured." : "Zoho Desk organization ID is required." },
    { providerPackageId: zohoDeskTicketingProviderManifest.id, requirementId: "zoho-desk-api-access", state: input.apiAccessConfigured ? "configured" : "missing", scopes: ["Desk.tickets.CREATE", "Desk.tickets.READ", "Desk.tickets.UPDATE", "Desk.basic.READ"], message: input.apiAccessConfigured ? "Zoho Desk OAuth access is configured." : "Zoho Desk OAuth access is required." },
  ];
}

export function createZohoDeskTicketingLiveChecks(options: ZohoDeskLiveCheckOptions) {
  return [{ id: "organizations", description: "Zoho Desk API can list organizations.", requiredCredentialIds: ["zoho-desk-org", "zoho-desk-api-access"], async run(context: { signal?: AbortSignal }) {
    const client = options.client ?? createZohoDeskTicketingClient(options);
    const result = await client.readiness();
    if (context.signal?.aborted) throw new Error("Zoho Desk readiness check aborted.");
    return { details: { ok: Boolean(result) } };
  } }];
}

async function zohoRequest(input: { options: ZohoDeskTicketingClientOptions; fetch: typeof fetch; method: "GET" | "POST" | "PATCH"; path: string; body?: ZohoDeskProviderPayload }) {
  const response = await input.fetch(`${(input.options.apiBaseUrl ?? "https://desk.zoho.com").replace(/\/+$/, "")}${input.path}`, {
    method: input.method,
    headers: {
      accept: "application/json",
      orgId: input.options.orgId,
      ...(input.body ? { "content-type": "application/json" } : {}),
      ...(input.options.accessToken ? { authorization: `Zoho-oauthtoken ${input.options.accessToken}` } : {}),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  return parseResponse(response, "Zoho Desk");
}

async function parseResponse(response: Response, provider: string) {
  const text = await response.text();
  const body = text ? JSON.parse(text) as ZohoDeskJsonObject : {};
  if (!response.ok) throw new Error(typeof body.message === "string" ? body.message : `${provider} API returned ${response.status}.`);
  return body;
}
