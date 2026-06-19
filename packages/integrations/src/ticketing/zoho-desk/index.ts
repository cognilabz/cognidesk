import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";

export const zohoDeskTicketingProviderManifest = defineProviderPackage({
  id: "ticketing.zoho-desk",
  name: "Zoho Desk",
  packageName: "@cognidesk/integrations",
  provider: "zoho-desk",
  category: "ticketing",
  trustLevel: "official",
  directions: ["bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Coverage is typed for Zoho Desk ticket create, read, patch, ticket listing/search query passthrough, ticket comments, ticket threads, send-reply, organization readiness, and credential status used by Cognidesk support workflows.",
      "This is not full Zoho Desk API coverage; contacts, accounts, departments, agents, teams, attachments, layouts, blueprints, assignment/skills actions, spam/trash lifecycle, webhooks, help center, analytics, and broader settings APIs remain outside this adapter.",
    ],
    evidence: [
      { label: "Zoho Desk API documentation", url: "https://desk.zoho.com/DeskAPIDocument" },
      { label: "Zoho Desk create ticket", url: "https://desk.zoho.com/DeskAPIDocument#Tickets#Tickets_Createaticket" },
      { label: "Zoho Desk list all tickets", url: "https://desk.zoho.com/DeskAPIDocument#Tickets#Tickets_Listalltickets" },
      { label: "Zoho Desk update ticket", url: "https://desk.zoho.com/DeskAPIDocument#Tickets#Tickets_Updateaticket" },
      { label: "Zoho Desk list ticket comments", url: "https://desk.zoho.com/DeskAPIDocument#TicketsComments#TicketsComments_Listallticketcomments" },
      { label: "Zoho Desk create ticket comment", url: "https://desk.zoho.com/DeskAPIDocument#TicketsComments#TicketsComments_Createticketcomment" },
      { label: "Zoho Desk list ticket threads", url: "https://desk.zoho.com/DeskAPIDocument#Threads#Threads_Listallthreads" },
      { label: "Zoho Desk send email reply", url: "https://desk.zoho.com/DeskAPIDocument#Threads#Threads_SendEmailReply" },
      { label: "Zoho Desk organizations", url: "https://desk.zoho.com/DeskAPIDocument#Organizations" },
    ],
  },
  credentialRequirements: [
    { id: "zoho-desk-org", label: "Zoho Desk organization ID", required: true },
    {
      id: "zoho-desk-api-access",
      label: "Zoho Desk OAuth access",
      scopes: ["Desk.tickets.CREATE", "Desk.tickets.READ", "Desk.tickets.UPDATE", "Desk.basic.READ"],
      required: true,
      metadata: { scopeKind: "provider-oauth-scopes" },
    },
  ],
  capabilities: [
    { capability: "create-provider-object", label: "Create Zoho tickets", providerObjects: [{ kind: "zohoDeskTicket", label: "Zoho Desk Ticket" }], audiences: ["customer-facing", "mixed"], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "read-provider-object", label: "Read Zoho tickets", providerObjects: [
      { kind: "zohoDeskTicket", label: "Zoho Desk Ticket" },
      { kind: "zohoDeskTicketComment", label: "Zoho Desk Ticket Comment" },
      { kind: "zohoDeskThread", label: "Zoho Desk Thread" },
    ], audiences: ["internal-support", "mixed"], requiresCredential: true, exposesSensitiveData: true },
    { capability: "update-provider-object", label: "Update Zoho tickets", providerObjects: [{ kind: "zohoDeskTicket", label: "Zoho Desk Ticket" }], audiences: ["internal-support", "mixed"], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "search-provider-object", label: "Search Zoho tickets", providerObjects: [{ kind: "zohoDeskTicket", label: "Zoho Desk Ticket" }], audiences: ["internal-support", "mixed"], requiresCredential: true, exposesSensitiveData: true },
    { capability: "handoff", label: "Attach handoff to Zoho Desk", providerObjects: [
      { kind: "zohoDeskTicket", label: "Zoho Desk Ticket" },
      { kind: "zohoDeskTicketComment", label: "Zoho Desk Ticket Comment" },
      { kind: "zohoDeskThread", label: "Zoho Desk Thread" },
      { kind: "zohoDeskReply", label: "Zoho Desk Reply" },
    ], audiences: ["customer-facing", "internal-support", "mixed"], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
  ],
  privacyNotes: ["Zoho Desk tickets can contain customer messages, contact details, SLA state, assignments, and internal comments."],
  limitations: ["Departments, layouts, mandatory fields, assignment rules, blueprints, and visibility are SDK-user configuration."],
  metadata: {
    checkedProviderApiCoverage: {
      verifiedAt: "2026-06-18",
      sourceKind: "checked-endpoint-family-inventory",
      coverageArtifact: "docs/provider-coverage/zoho-desk-checked-rest-api-2026-06-18.inventory.json",
      checkedFamilyCount: 5,
      implementedFamilyCount: 4,
      gapFamilyCount: 1,
      implementedOperationCount: 9,
    },
    channelCoverage: {
      tickets: "typed-create-read-update-list",
      comments: "typed-create-list",
      threads: "typed-list",
      replies: "typed-send",
      organizationsReadiness: "typed-read",
      contactsAccountsAgentsDepartments: "provider-supported-not-typed",
      attachmentsBlueprintsWebhooks: "provider-supported-not-typed",
      slasAssignmentsSkills: "not-covered",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

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
