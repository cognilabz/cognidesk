import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";
import {
  createGorgiasFullApiGeneratedClient,
  GORGIAS_FULL_API_GENERATED_FUNCTION_COUNT,
  type GorgiasFullApiGeneratedClient,
  type GorgiasGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  GORGIAS_FULL_API_OPERATION_BY_ID,
  GORGIAS_FULL_API_OPERATION_COUNT,
  GORGIAS_FULL_API_SPEC_VERSION,
  type GorgiasFullApiOperationId,
} from "./full-api-operations.generated.js";
export {
  createGorgiasFullApiGeneratedClient,
  GORGIAS_FULL_API_GENERATED_FUNCTION_COUNT,
  GORGIAS_FULL_API_GENERATED_FUNCTION_NAMES,
  type GorgiasFullApiGeneratedClient,
  type GorgiasGeneratedOperationCaller,
} from "./full-api-client.generated.js";
export {
  GORGIAS_FULL_API_GENERATED_AT,
  GORGIAS_FULL_API_OPERATION_BY_ID,
  GORGIAS_FULL_API_OPERATION_COUNT,
  GORGIAS_FULL_API_OPERATIONS,
  GORGIAS_FULL_API_SPEC,
  GORGIAS_FULL_API_SPEC_SOURCE,
  GORGIAS_FULL_API_SPEC_VERSION,
  type GorgiasFullApiOperation,
  type GorgiasFullApiOperationId,
} from "./full-api-operations.generated.js";
export type * from "./full-api-schema-types.generated.js";

export const gorgiasTicketingProviderManifest = defineProviderPackage({
  id: "ticketing.gorgias",
  name: "Gorgias",
  packageName: "@cognidesk/integrations",
  provider: "gorgias",
  category: "ticketing",
  trustLevel: "official",
  directions: ["bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    { id: "gorgias-api-base", label: "Gorgias API base URL", required: true },
    {
      id: "gorgias-api-access",
      label: "Gorgias API access",
      scopes: ["account:read", "tickets:read", "tickets:write"],
      required: true,
      metadata: { scopeKind: "provider-oauth-scopes" },
    },
  ],
  coverage: {
    scope: "full-provider-api",
    notes: [
      "Coverage includes generated per-operation functions for every operation found in Gorgias' official endpoint markdown pages with embedded OpenAPI blocks.",
      "Typed convenience helpers remain limited to Gorgias ticket create/read/update/list operations, ticket-message create/list operations, and account readiness for Cognidesk support workflows.",
      "SDK users still own Gorgias domain URLs, OAuth/private-app scopes, ecommerce context, macros, visibility, and account-specific policy.",
    ],
    evidence: [
      { label: "Gorgias developer llms.txt", url: "https://developers.gorgias.com/llms.txt" },
      { label: "Gorgias Create ticket", url: "https://developers.gorgias.com/reference/create-ticket" },
      { label: "Gorgias Retrieve ticket", url: "https://developers.gorgias.com/reference/get-ticket" },
      { label: "Gorgias Update ticket", url: "https://developers.gorgias.com/reference/update-ticket" },
      { label: "Gorgias List tickets", url: "https://developers.gorgias.com/reference/list-tickets" },
      { label: "Gorgias Create ticket message", url: "https://developers.gorgias.com/reference/create-ticket-message" },
      { label: "Gorgias List messages", url: "https://developers.gorgias.com/reference/list-messages" },
      { label: "Gorgias Retrieve account", url: "https://developers.gorgias.com/reference/get-account" },
      { label: "Gorgias OAuth2 Scopes", url: "https://developers.gorgias.com/docs/oauth2-scopes" },
    ],
  },
  capabilities: [
    { capability: "create-provider-object", label: "Create Gorgias tickets and messages", providerObjects: [{ kind: "gorgiasTicket", label: "Gorgias Ticket" }, { kind: "gorgiasMessage", label: "Gorgias Message" }], audiences: ["customer-facing", "mixed"], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "read-provider-object", label: "Read Gorgias tickets and messages", providerObjects: [{ kind: "gorgiasTicket", label: "Gorgias Ticket" }, { kind: "gorgiasMessage", label: "Gorgias Message" }], audiences: ["internal-support", "mixed"], requiresCredential: true, exposesSensitiveData: true },
    { capability: "update-provider-object", label: "Update Gorgias tickets", providerObjects: [{ kind: "gorgiasTicket", label: "Gorgias Ticket" }], audiences: ["internal-support", "mixed"], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "search-provider-object", label: "List Gorgias tickets and messages", providerObjects: [{ kind: "gorgiasTicket", label: "Gorgias Ticket" }, { kind: "gorgiasMessage", label: "Gorgias Message" }], audiences: ["internal-support", "mixed"], requiresCredential: true, exposesSensitiveData: true },
    { capability: "handoff", label: "Attach handoff to Gorgias", providerObjects: [{ kind: "gorgiasTicket", label: "Gorgias Ticket" }, { kind: "gorgiasMessage", label: "Gorgias Message" }], audiences: ["customer-facing", "internal-support", "mixed"], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
  ],
  privacyNotes: ["Gorgias tickets can include ecommerce context, customer identifiers, messages, notes, tags, and assignment metadata."],
  limitations: ["Domain URL, ticket channels, message channels, macros, Shopify context, automations, and visibility are SDK-user configuration."],
  metadata: {
    fullProviderApiVerification: {
      provider: "gorgias",
      apiVersion: GORGIAS_FULL_API_SPEC_VERSION,
      verifiedAt: "2026-06-18",
      coverageArtifact: "docs/provider-coverage/gorgias-public-api-2026-06-18.operations.json",
      operationCatalogArtifact: "docs/provider-coverage/gorgias-public-api-2026-06-18.operations.json",
      functionCatalogArtifact: "docs/provider-coverage/gorgias-public-api-2026-06-18.functions.json",
      documentedOperationCount: GORGIAS_FULL_API_OPERATION_COUNT,
      implementedOperationCount: GORGIAS_FULL_API_OPERATION_COUNT,
      unimplementedOperationCount: 0,
      generatedFunctionCount: GORGIAS_FULL_API_GENERATED_FUNCTION_COUNT,
    },
    channelCoverage: {
      fullGorgiasPublicApiOperations: "generated-per-operation-functions",
      tickets: "typed-crud-list-and-generated-full-surface",
      ticketMessages: "typed-create-list-and-generated-full-surface",
      accountReadiness: "typed-read-and-generated-full-surface",
      customersUsersTeamsTags: "generated-full-surface",
      filesEcommerceEventsMacros: "generated-full-surface",
      webhooks: "generated-full-surface",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

export interface GorgiasTicketingClientOptions {
  apiBaseUrl: string;
  email?: string;
  apiKey?: string;
  accessToken?: string;
  fetch?: typeof fetch;
}

export interface GorgiasCredentialStatusInput {
  apiBaseUrl?: string;
  apiAccessConfigured?: boolean;
}

export interface GorgiasTicketingClient {
  fullApi: GorgiasFullApiGeneratedClient;
  requestOperation: GorgiasGeneratedOperationCaller;
  createTicket(payload: GorgiasCreateTicketPayload): Promise<GorgiasTicket>;
  getTicket(ticketId: string | number): Promise<GorgiasTicket>;
  updateTicket(ticketId: string | number, patch: GorgiasUpdateTicketPayload): Promise<GorgiasTicket>;
  listTickets(query?: GorgiasListTicketsQuery): Promise<GorgiasListResponse<GorgiasTicket>>;
  createTicketMessage(ticketId: string | number, payload: GorgiasCreateTicketMessagePayload, query?: GorgiasCreateTicketMessageQuery): Promise<GorgiasTicketMessage>;
  listMessages(query?: GorgiasListMessagesQuery): Promise<GorgiasListResponse<GorgiasTicketMessage>>;
  readiness(): Promise<GorgiasAccount>;
}

export type GorgiasJsonPrimitive = string | number | boolean | null;
export type GorgiasJsonValue = GorgiasJsonPrimitive | GorgiasJsonObject | readonly GorgiasJsonValue[];
export interface GorgiasJsonObject {
  [key: string]: GorgiasProviderExtensionValue;
}
export type GorgiasProviderExtensionValue = GorgiasJsonValue | object | undefined;
export type GorgiasProviderPayload = GorgiasJsonObject | object;
export type GorgiasProviderQuery = Record<string, GorgiasProviderExtensionValue>;
export interface GorgiasProviderResponse extends GorgiasJsonObject {}
export interface GorgiasProviderExtensionFields extends GorgiasJsonObject {}
export type GorgiasQueryValue = GorgiasJsonPrimitive | readonly GorgiasJsonPrimitive[] | undefined;
export type GorgiasResource = GorgiasJsonObject;
export type GorgiasId = number;
export type GorgiasChannel =
  | "aircall"
  | "api"
  | "chat"
  | "contact_form"
  | "email"
  | "facebook"
  | "facebook-mention"
  | "facebook-messenger"
  | "facebook-recommendations"
  | "form"
  | "helpdesk"
  | "help-center"
  | "instagram"
  | "instagram-ad-comment"
  | "instagram-comment"
  | "instagram-direct-message"
  | "instagram-mention"
  | "internal-note"
  | "phone"
  | "rule"
  | "shopify"
  | "sms"
  | "twilio"
  | "twitter"
  | "twitter-direct-message"
  | "whatsapp"
  | "yotpo"
  | "yotpo-review"
  | "zendesk";
export type GorgiasTicketPriority = "critical" | "high" | "normal" | "low";
export type GorgiasTicketStatus = "open" | "closed";
export type GorgiasTicketOrderBy = "created_datetime:asc" | "created_datetime:desc" | "updated_datetime:asc" | "updated_datetime:desc";
export type GorgiasMessageOrderBy = "created_datetime:asc" | "created_datetime:desc";

export interface GorgiasAssignee extends GorgiasJsonObject {
  id?: GorgiasId;
  name?: string;
}

export interface GorgiasTicketPerson extends GorgiasJsonObject {
  id?: GorgiasId;
  email?: string;
  name?: string;
}

export interface GorgiasAttachment extends GorgiasJsonObject {
  id?: GorgiasId;
  url?: string;
  name?: string;
  size?: number;
  content_type?: string;
}

export interface GorgiasTicketMessageSource extends GorgiasJsonObject {
  from?: GorgiasTicketPerson;
  to?: GorgiasTicketPerson[];
  cc?: GorgiasTicketPerson[];
  bcc?: GorgiasTicketPerson[];
}

export interface GorgiasCreateTicketMessagePayload extends GorgiasJsonObject {
  channel: GorgiasChannel | (string & {});
  from_agent: boolean;
  body_html?: string;
  body_text?: string;
  subject?: string;
  external_id?: string;
  created_datetime?: string;
  sent_datetime?: string;
  public?: boolean;
  via?: GorgiasChannel | (string & {});
  source?: GorgiasTicketMessageSource;
  sender?: GorgiasTicketPerson;
  receiver?: GorgiasTicketPerson;
  attachments?: GorgiasAttachment[];
  headers?: GorgiasJsonObject;
  meta?: GorgiasJsonObject;
  mention_ids?: GorgiasId[];
  integration_id?: GorgiasId;
}

export interface GorgiasUpdateTicketPayload extends GorgiasJsonObject {
  assignee_team?: GorgiasAssignee | null;
  assignee_user?: GorgiasAssignee | null;
  channel?: GorgiasChannel | (string & {});
  customer?: GorgiasTicketPerson;
  external_id?: string;
  from_agent?: boolean;
  language?: string;
  meta?: GorgiasJsonObject;
  priority?: GorgiasTicketPriority;
  snooze_datetime?: string | null;
  spam?: boolean;
  status?: GorgiasTicketStatus;
  subject?: string;
  tags?: GorgiasJsonObject[];
  via?: GorgiasChannel | (string & {});
}

export interface GorgiasCreateTicketPayload extends GorgiasUpdateTicketPayload {
  messages: [GorgiasCreateTicketMessagePayload, ...GorgiasCreateTicketMessagePayload[]];
}

export interface GorgiasTicketMessage extends GorgiasCreateTicketMessagePayload {
  id?: GorgiasId;
  ticket_id?: GorgiasId;
  deleted_datetime?: string | null;
  failed_datetime?: string | null;
  message_id?: string;
  opened_datetime?: string | null;
  stripped_html?: string;
  stripped_signature?: string;
  stripped_text?: string;
}

export interface GorgiasTicket extends GorgiasUpdateTicketPayload {
  id?: GorgiasId;
  messages?: GorgiasTicketMessage[];
  created_datetime?: string;
  closed_datetime?: string | null;
  last_message_datetime?: string;
  last_received_message_datetime?: string | null;
  opened_datetime?: string | null;
  split_from?: GorgiasId | null;
  trashed_datetime?: string | null;
  updated_datetime?: string;
  imported?: boolean;
}

export interface GorgiasListResponse<TItem extends GorgiasJsonValue = GorgiasJsonObject> extends GorgiasJsonObject {
  data?: TItem[];
  object?: "list";
  uri?: string;
  meta?: GorgiasJsonObject;
}

export interface GorgiasListTicketsQuery extends Record<string, GorgiasQueryValue> {
  order_by?: GorgiasTicketOrderBy;
  cursor?: string;
  customer_id?: number;
  trashed?: boolean;
  external_id?: string;
  limit?: number;
  view_id?: number;
  rule_id?: number;
  ticket_ids?: number[];
}

export interface GorgiasCreateTicketMessageQuery {
  action?: "force" | "retry" | "cancel";
}

export interface GorgiasListMessagesQuery extends Record<string, GorgiasQueryValue> {
  cursor?: string;
  limit?: number;
  order_by?: GorgiasMessageOrderBy;
  ticket_id?: string | number;
}

export interface GorgiasAccount extends GorgiasJsonObject {
  id?: string | number;
  domain?: string;
  name?: string;
  email?: string;
}

export interface GorgiasLiveCheckOptions extends GorgiasTicketingClientOptions {
  client?: Pick<GorgiasTicketingClient, "readiness">;
}

export type GorgiasHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface GorgiasClientRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined>;
  query?: Record<string, GorgiasQueryValue>;
  body?: GorgiasProviderPayload;
  rawBody?: BodyInit;
  contentType?: string;
}

export interface GorgiasOperationRequestInput extends GorgiasClientRequestInput {}

export function createGorgiasTicketingClient(options: GorgiasTicketingClientOptions): GorgiasTicketingClient {
  const fetchImpl = options.fetch ?? fetch;
  const baseUrl = options.apiBaseUrl.replace(/\/+$/, "");
  const request = <T = GorgiasResource>(
    method: GorgiasHttpMethod,
    path: string,
    input: GorgiasClientRequestInput = {},
  ) => gorgiasRequest<T>({
    options,
    fetch: fetchImpl,
    method,
    url: operationUrl(baseUrl, path, input.pathParams, input.query),
    ...(input.body ? { body: input.body } : {}),
    ...(input.rawBody ? { rawBody: input.rawBody } : {}),
    ...(input.contentType ? { contentType: input.contentType } : {}),
  });
  const requestOperation = (
    operationId: GorgiasFullApiOperationId | string,
    input: GorgiasOperationRequestInput = {},
  ) => {
    const operation = GORGIAS_FULL_API_OPERATION_BY_ID.get(operationId);
    if (!operation) throw new Error(`Unknown Gorgias OpenAPI operation '${operationId}'.`);
    return request(operation.method, operation.path, input);
  };
  const fullApi = createGorgiasFullApiGeneratedClient(requestOperation as GorgiasGeneratedOperationCaller);
  return {
    fullApi,
    requestOperation: requestOperation as GorgiasGeneratedOperationCaller,
    async createTicket(payload) {
      return gorgiasRequest({ options, fetch: fetchImpl, method: "POST", path: "/api/tickets", body: payload });
    },
    async getTicket(ticketId) {
      return gorgiasRequest({ options, fetch: fetchImpl, method: "GET", path: `/api/tickets/${encodeURIComponent(String(ticketId))}` });
    },
    async updateTicket(ticketId, patch) {
      return gorgiasRequest({ options, fetch: fetchImpl, method: "PUT", path: `/api/tickets/${encodeURIComponent(String(ticketId))}`, body: patch });
    },
    async listTickets(query = {}) {
      const params = new URLSearchParams(Object.entries(query).map(([key, value]) => [key, String(value)]));
      return gorgiasRequest({ options, fetch: fetchImpl, method: "GET", path: `/api/tickets${params.size ? `?${params}` : ""}` });
    },
    async createTicketMessage(ticketId, payload, query = {}) {
      const params = new URLSearchParams();
      if (query.action) params.set("action", query.action);
      return gorgiasRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: `/api/tickets/${encodeURIComponent(String(ticketId))}/messages${params.size ? `?${params}` : ""}`,
        body: payload,
      });
    },
    async listMessages(query = {}) {
      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(query)) {
        if (value !== undefined) params.set(key, String(value));
      }
      return gorgiasRequest({ options, fetch: fetchImpl, method: "GET", path: `/api/messages${params.size ? `?${params}` : ""}` });
    },
    async readiness() {
      return gorgiasRequest({ options, fetch: fetchImpl, method: "GET", path: "/api/account" });
    },
  };
}

export function gorgiasTicketingCredentialStatuses(input: GorgiasCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    { providerPackageId: gorgiasTicketingProviderManifest.id, requirementId: "gorgias-api-base", state: input.apiBaseUrl ? "configured" : "missing", message: input.apiBaseUrl ? "Gorgias API base URL is configured." : "Gorgias API base URL is required." },
    { providerPackageId: gorgiasTicketingProviderManifest.id, requirementId: "gorgias-api-access", state: input.apiAccessConfigured ? "configured" : "missing", scopes: ["account:read", "tickets:read", "tickets:write"], message: input.apiAccessConfigured ? "Gorgias API access is configured." : "Gorgias API access is required." },
  ];
}

export function createGorgiasTicketingLiveChecks(options: GorgiasLiveCheckOptions) {
  return [{ id: "account", description: "Gorgias API can retrieve account metadata.", requiredCredentialIds: ["gorgias-api-base", "gorgias-api-access"], async run(context: { signal?: AbortSignal }) {
    const client = options.client ?? createGorgiasTicketingClient(options);
    const result = await client.readiness();
    if (context.signal?.aborted) throw new Error("Gorgias readiness check aborted.");
    return { details: { ok: Boolean(result) } };
  } }];
}

async function gorgiasRequest<T = GorgiasResource>(input: { options: GorgiasTicketingClientOptions; fetch: typeof fetch; method: GorgiasHttpMethod; path?: string; url?: URL; body?: GorgiasProviderPayload; rawBody?: BodyInit; contentType?: string }) {
  const response = await input.fetch(input.url?.toString() ?? `${input.options.apiBaseUrl.replace(/\/+$/, "")}${input.path ?? ""}`, {
    method: input.method,
    headers: { accept: "application/json", ...(input.body || input.rawBody ? { "content-type": input.contentType ?? "application/json" } : {}), ...authHeaders(input.options) },
    ...(input.rawBody ? { body: input.rawBody } : input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  return parseResponse<T>(response, "Gorgias");
}

function authHeaders(options: GorgiasTicketingClientOptions) {
  if (options.accessToken) return { authorization: `Bearer ${options.accessToken}` };
  if (options.email && options.apiKey) return { authorization: `Basic ${Buffer.from(`${options.email}:${options.apiKey}`).toString("base64")}` };
  return {};
}

function operationUrl(baseUrl: string, pathTemplate: string, pathParams: GorgiasClientRequestInput["pathParams"], query: GorgiasClientRequestInput["query"]) {
  const path = pathTemplate.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams?.[key];
    if (value === undefined) throw new Error(`Gorgias operation path parameter '${key}' is required.`);
    return encodeURIComponent(String(value));
  });
  const url = new URL(path, `${baseUrl}/`);
  appendQuery(url.searchParams, query);
  return url;
}

function appendQuery(params: URLSearchParams, query?: Record<string, GorgiasQueryValue>) {
  if (!query) return;
  for (const [key, value] of Object.entries(query)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      for (const item of value) params.append(key, String(item));
    } else {
      params.set(key, String(value));
    }
  }
}

async function parseResponse<T = GorgiasResource>(response: Response, provider: string): Promise<T> {
  const text = await response.text();
  const body = text ? JSON.parse(text) as GorgiasJsonObject : {};
  if (!response.ok) throw new Error(typeof body.message === "string" ? body.message : `${provider} API returned ${response.status}.`);
  return body as T;
}
