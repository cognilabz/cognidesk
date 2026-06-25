import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import {
  providerJsonRequest,
  type ProviderHttpMethod,
  type ProviderJsonRequestInput,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
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

export interface ZohoDeskJsonRetryOptions {
  attempts?: number;
  statusCodes?: readonly number[];
  baseDelayMs?: number;
  maxDelayMs?: number;
}

export interface ZohoDeskTicketingClientOptions {
  providerClient?: ZohoDeskProviderClient;
  orgId?: string;
  accessToken?: string;
  dataCenter?: string;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
  signal?: AbortSignal;
  timeoutMs?: number;
  retry?: number | ZohoDeskJsonRetryOptions;
  headers?: Record<string, string>;
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
  providerClient: ZohoDeskProviderClient;
  createTicket(input: ZohoDeskTicketInput): Promise<ZohoDeskProviderResponse>;
  getTicket(ticketId: string): Promise<ZohoDeskProviderResponse>;
  updateTicket(ticketId: string, patch: ZohoDeskProviderPayload): Promise<ZohoDeskProviderResponse>;
  listTickets(query?: ZohoDeskProviderQuery): Promise<ZohoDeskProviderResponse>;
  listTicketComments(ticketId: string, query?: ZohoDeskProviderQuery): Promise<ZohoDeskProviderResponse>;
  createTicketComment(ticketId: string, body: ZohoDeskProviderPayload): Promise<ZohoDeskProviderResponse>;
  listTicketThreads(ticketId: string, query?: ZohoDeskProviderQuery): Promise<ZohoDeskProviderResponse>;
  sendTicketReply(ticketId: string, body: ZohoDeskProviderPayload): Promise<ZohoDeskProviderResponse>;
  readiness(): Promise<ZohoDeskProviderResponse>;
}

export interface ZohoDeskProviderClient {
  createTicket(input: ZohoDeskProviderPayload): Promise<ZohoDeskProviderResponse>;
  getTicket(ticketId: string): Promise<ZohoDeskProviderResponse>;
  updateTicket(ticketId: string, patch: ZohoDeskProviderPayload): Promise<ZohoDeskProviderResponse>;
  listTickets(query?: ZohoDeskProviderQuery): Promise<ZohoDeskProviderResponse>;
  listTicketComments(ticketId: string, query?: ZohoDeskProviderQuery): Promise<ZohoDeskProviderResponse>;
  createTicketComment(ticketId: string, body: ZohoDeskProviderPayload): Promise<ZohoDeskProviderResponse>;
  listTicketThreads(ticketId: string, query?: ZohoDeskProviderQuery): Promise<ZohoDeskProviderResponse>;
  sendTicketReply(ticketId: string, body: ZohoDeskProviderPayload): Promise<ZohoDeskProviderResponse>;
  readiness(): Promise<ZohoDeskProviderResponse>;
}

export interface ZohoDeskLiveCheckOptions extends ZohoDeskTicketingClientOptions {
  client?: Pick<ZohoDeskTicketingClient, "readiness">;
}

export function createZohoDeskTicketingClient(options: ZohoDeskTicketingClientOptions = {}): ZohoDeskTicketingClient {
  const providerClient = requireZohoDeskProviderClient(
    options.providerClient ?? createDefaultZohoDeskProviderClient(options),
  );

  return {
    providerClient,
    async createTicket(input) {
      return providerClient.createTicket(createZohoDeskTicketPayload(input));
    },
    async getTicket(ticketId) {
      return providerClient.getTicket(ticketId);
    },
    async updateTicket(ticketId, patch) {
      return providerClient.updateTicket(ticketId, patch);
    },
    async listTickets(query = {}) {
      return providerClient.listTickets(query);
    },
    async listTicketComments(ticketId, query = {}) {
      return providerClient.listTicketComments(ticketId, query);
    },
    async createTicketComment(ticketId, body) {
      return providerClient.createTicketComment(ticketId, body);
    },
    async listTicketThreads(ticketId, query = {}) {
      return providerClient.listTicketThreads(ticketId, query);
    },
    async sendTicketReply(ticketId, body) {
      return providerClient.sendTicketReply(ticketId, body);
    },
    async readiness() {
      return providerClient.readiness();
    },
  };
}

export function createZohoDeskRestProviderClient(options: ZohoDeskTicketingClientOptions): ZohoDeskProviderClient {
  const baseUrl = zohoDeskApiBaseUrl(options);
  if (!options.orgId) {
    throw new Error("Zoho Desk REST adapter requires orgId.");
  }
  if (!options.accessToken) {
    throw new Error("Zoho Desk REST adapter requires accessToken.");
  }
  const orgId = options.orgId;
  const accessToken = options.accessToken;

  const request = (method: ProviderHttpMethod, path: string, input?: {
    body?: ZohoDeskProviderPayload;
    pathParams?: ProviderJsonRequestInput["pathParams"];
    query?: ZohoDeskProviderQuery;
  }) => providerJsonRequest<unknown>({
    baseUrl,
    method,
    path,
    authorizationHeader: `Zoho-oauthtoken ${accessToken}`,
    pathParams: input?.pathParams,
    query: zohoDeskProviderQuery(input?.query),
    headers: {
      ...(options.headers ?? {}),
      orgId,
    },
    ...(input?.body !== undefined ? { body: input.body } : {}),
    ...(options.fetch ? { fetch: options.fetch } : {}),
    ...(options.signal ? { signal: options.signal } : {}),
    ...(options.timeoutMs !== undefined ? { timeoutMs: options.timeoutMs } : {}),
    ...(options.retry !== undefined ? { retry: options.retry } : {}),
    providerName: "Zoho Desk",
  }).then(asZohoDeskResponse);

  return {
    createTicket: (input) => request("POST", "tickets", { body: input }),
    getTicket: (ticketId) => request("GET", "tickets/{ticketId}", { pathParams: { ticketId } }),
    updateTicket: (ticketId, patch) => request("PATCH", "tickets/{ticketId}", { pathParams: { ticketId }, body: patch }),
    listTickets: (query = {}) => request("GET", "tickets", { query }),
    listTicketComments: (ticketId, query = {}) => request("GET", "tickets/{ticketId}/comments", { pathParams: { ticketId }, query }),
    createTicketComment: (ticketId, body) => request("POST", "tickets/{ticketId}/comments", { pathParams: { ticketId }, body }),
    listTicketThreads: (ticketId, query = {}) => request("GET", "tickets/{ticketId}/threads", { pathParams: { ticketId }, query }),
    sendTicketReply: (ticketId, body) => request("POST", "tickets/{ticketId}/sendReply", { pathParams: { ticketId }, body }),
    readiness: () => request("GET", "organizations"),
  };
}

export function createUnconfiguredZohoDeskProviderClient(): ZohoDeskProviderClient {
  const fail = async (): Promise<never> => {
    throw new Error(
      "Zoho Desk REST adapter requires orgId and accessToken, or pass a host-provided ZohoDeskProviderClient.",
    );
  };
  return {
    createTicket: fail,
    getTicket: fail,
    updateTicket: fail,
    listTickets: fail,
    listTicketComments: fail,
    createTicketComment: fail,
    listTicketThreads: fail,
    sendTicketReply: fail,
    readiness: fail,
  };
}

export function zohoDeskApiBaseUrl(options: Pick<ZohoDeskTicketingClientOptions, "apiBaseUrl" | "dataCenter">): string {
  if (options.apiBaseUrl) {
    return options.apiBaseUrl.replace(/\/+$/, "");
  }
  const dataCenter = options.dataCenter?.trim().toLowerCase() ?? "us";
  const host = zohoDeskHost(dataCenter);
  return `https://${host}/api/v1`;
}

export function zohoDeskTicketingCredentialStatuses(input: ZohoDeskCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    { providerPackageId: zohoDeskTicketingProviderManifest.id, requirementId: "zoho-desk-org", state: input.orgId ? "configured" : "missing", message: input.orgId ? "Zoho Desk organization ID is configured." : "Zoho Desk organization ID is required." },
    { providerPackageId: zohoDeskTicketingProviderManifest.id, requirementId: "zoho-desk-api-access", state: input.apiAccessConfigured ? "configured" : "missing", scopes: ["Desk.tickets.CREATE", "Desk.tickets.READ", "Desk.tickets.UPDATE", "Desk.basic.READ"], message: input.apiAccessConfigured ? "Zoho Desk OAuth access is configured." : "Zoho Desk OAuth access is required." },
  ];
}

export function createZohoDeskTicketingLiveChecks(options: ZohoDeskLiveCheckOptions = {}) {
  return [{ id: "organizations", description: "Zoho Desk API can list organizations.", requiredCredentialIds: ["zoho-desk-org", "zoho-desk-api-access"], async run(context: { signal?: AbortSignal }) {
    const client = options.client ?? createZohoDeskTicketingClient(options);
    const result = await client.readiness();
    if (context.signal?.aborted) throw new Error("Zoho Desk readiness check aborted.");
    return { details: { ok: Boolean(result) } };
  } }];
}

function createZohoDeskTicketPayload(input: ZohoDeskTicketInput): ZohoDeskProviderPayload {
  return {
    ...(input.additionalFields ?? {}),
    subject: input.subject,
    departmentId: input.departmentId,
    ...(input.contactId ? { contactId: input.contactId } : {}),
    ...(input.email ? { email: input.email } : {}),
    ...(input.description ? { description: input.description } : {}),
    ...(input.priority ? { priority: input.priority } : {}),
    ...(input.status ? { status: input.status } : {}),
  };
}

function requireZohoDeskProviderClient(client: ZohoDeskProviderClient): ZohoDeskProviderClient {
  for (const method of [
    "createTicket",
    "getTicket",
    "updateTicket",
    "listTickets",
    "listTicketComments",
    "createTicketComment",
    "listTicketThreads",
    "sendTicketReply",
    "readiness",
  ] as const) {
    if (typeof client[method] !== "function") {
      throw new Error(`Zoho Desk providerClient must implement ${method}(); omit providerClient to use the built-in REST adapter when orgId and accessToken are configured.`);
    }
  }
  return client;
}

function createDefaultZohoDeskProviderClient(options: ZohoDeskTicketingClientOptions): ZohoDeskProviderClient {
  if (options.orgId && options.accessToken) {
    return createZohoDeskRestProviderClient(options);
  }
  return createUnconfiguredZohoDeskProviderClient();
}

function zohoDeskProviderQuery(query: ZohoDeskProviderQuery | undefined): Record<string, ProviderQueryValue> | undefined {
  if (!query) return undefined;
  const output: Record<string, ProviderQueryValue> = {};
  for (const [key, value] of Object.entries(query)) {
    if (value === undefined || value === null) continue;
    output[key] = zohoDeskProviderQueryValue(value);
  }
  return output;
}

function zohoDeskProviderQueryValue(value: ZohoDeskProviderExtensionValue): ProviderQueryValue {
  if (value === undefined || value === null) return value;
  if (Array.isArray(value)) {
    return value.flatMap((item) => {
      if (item === null) return [];
      if (typeof item === "object" && item !== null) return JSON.stringify(item);
      return item;
    });
  }
  if (typeof value === "object") return JSON.stringify(value);
  return value;
}

function asZohoDeskResponse(value: unknown): ZohoDeskProviderResponse {
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    return value as ZohoDeskProviderResponse;
  }
  return { data: value as ZohoDeskJsonValue };
}

function zohoDeskHost(dataCenter: string): string {
  const hosts: Record<string, string> = {
    us: "desk.zoho.com",
    com: "desk.zoho.com",
    eu: "desk.zoho.eu",
    in: "desk.zoho.in",
    au: "desk.zoho.com.au",
    jp: "desk.zoho.jp",
    ca: "desk.zohocloud.ca",
    uk: "desk.zoho.uk",
    sa: "desk.zoho.sa",
    cn: "desk.zoho.com.cn",
  };
  if (hosts[dataCenter]) return hosts[dataCenter];
  throw new Error(`Unsupported Zoho Desk dataCenter: ${dataCenter}. Use apiBaseUrl for custom endpoints.`);
}
