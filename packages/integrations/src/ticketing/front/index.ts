import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";
import {
  createFrontFullApiGeneratedClient,
  FRONT_FULL_API_GENERATED_FUNCTION_COUNT,
  type FrontFullApiGeneratedClient,
  type FrontGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  FRONT_FULL_API_OPERATION_BY_ID,
  FRONT_FULL_API_OPERATION_COUNT,
  FRONT_FULL_API_SPEC_VERSION,
  type FrontFullApiOperationId,
} from "./full-api-operations.generated.js";
export {
  createFrontFullApiGeneratedClient,
  FRONT_FULL_API_GENERATED_FUNCTION_COUNT,
  FRONT_FULL_API_GENERATED_FUNCTION_NAMES,
  type FrontFullApiGeneratedClient,
  type FrontGeneratedOperationCaller,
} from "./full-api-client.generated.js";
export {
  FRONT_FULL_API_GENERATED_AT,
  FRONT_FULL_API_OPERATION_BY_ID,
  FRONT_FULL_API_OPERATION_COUNT,
  FRONT_FULL_API_OPERATIONS,
  FRONT_FULL_API_SPEC,
  FRONT_FULL_API_SPEC_SOURCE,
  FRONT_FULL_API_SPEC_VERSION,
  type FrontFullApiOperation,
  type FrontFullApiOperationId,
} from "./full-api-operations.generated.js";
export type * from "./full-api-schema-types.generated.js";

export const frontTicketingProviderManifest = defineProviderPackage({
  id: "ticketing.front",
  name: "Front",
  packageName: "@cognidesk/integrations",
  provider: "front",
  category: "ticketing",
  trustLevel: "official",
  directions: ["bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [{
    id: "front-api-access",
    label: "Front API token",
    scopes: ["conversations:read", "conversations:write", "messages:send", "messages:read", "comments:write", "comments:read", "teammates:read"],
    required: true,
    metadata: { scopeKind: "provider-oauth-scopes" },
  }],
  coverage: {
    scope: "full-provider-api",
    notes: [
      "Coverage includes generated per-operation functions for every operation in Front's official Core and Channel API OpenAPI files.",
      "Typed convenience helpers remain limited to Front channel message creation, conversation replies, conversation messages, conversation comments, conversation read/update, conversation search, and teammate-list readiness for Cognidesk support workflows.",
      "SDK users still own Front app scopes, workspace feature availability, channel configuration, webhook handling, multipart attachment bodies, and account-specific policy.",
    ],
    evidence: [
      { label: "Front official OpenAPI specs", url: "https://github.com/frontapp/front-api-specs" },
      { label: "Front Core API OpenAPI JSON", url: "https://raw.githubusercontent.com/frontapp/front-api-specs/main/core-api/core-api.json" },
      { label: "Front Channel API OpenAPI JSON", url: "https://raw.githubusercontent.com/frontapp/front-api-specs/main/channel-api/channel-api.json" },
      { label: "Front Create message", url: "https://dev.frontapp.com/reference/create-message" },
      { label: "Front Create conversation reply", url: "https://dev.frontapp.com/reference/create-message-reply" },
      { label: "Front List conversation messages", url: "https://dev.frontapp.com/reference/list-conversation-messages" },
      { label: "Front Add comment", url: "https://dev.frontapp.com/reference/add-comment" },
      { label: "Front List conversation comments", url: "https://dev.frontapp.com/reference/list-conversation-comments" },
      { label: "Front Get conversation", url: "https://dev.frontapp.com/reference/get-conversation-by-id" },
      { label: "Front Update conversation", url: "https://dev.frontapp.com/reference/update-conversation" },
      { label: "Front Search conversations", url: "https://dev.frontapp.com/docs/search-1" },
      { label: "Front List teammates", url: "https://dev.frontapp.com/reference/list-teammates" },
      { label: "Front Core API overview", url: "https://dev.frontapp.com/docs/core-api-overview" },
    ],
  },
  capabilities: [
    { capability: "create-provider-object", label: "Create Front messages/conversations", providerObjects: [{ kind: "frontConversation", label: "Front Conversation" }, { kind: "frontMessage", label: "Front Message" }, { kind: "frontComment", label: "Front Comment" }], audiences: ["customer-facing", "mixed"], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "read-provider-object", label: "Read Front conversations", providerObjects: [{ kind: "frontConversation", label: "Front Conversation" }, { kind: "frontMessage", label: "Front Message" }, { kind: "frontComment", label: "Front Comment" }], audiences: ["internal-support", "mixed"], requiresCredential: true, exposesSensitiveData: true },
    { capability: "update-provider-object", label: "Update Front conversations", providerObjects: [{ kind: "frontConversation", label: "Front Conversation" }], audiences: ["internal-support", "mixed"], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "search-provider-object", label: "Search Front conversations", providerObjects: [{ kind: "frontConversation", label: "Front Conversation" }], audiences: ["internal-support", "mixed"], requiresCredential: true, exposesSensitiveData: true },
    { capability: "handoff", label: "Attach handoff to Front", providerObjects: [{ kind: "frontConversation", label: "Front Conversation" }, { kind: "frontMessage", label: "Front Message" }, { kind: "frontComment", label: "Front Comment" }], audiences: ["customer-facing", "internal-support", "mixed"], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
  ],
  privacyNotes: ["Front conversations can contain customer messages, teammate comments, inbox routing, tags, links, and assignment context."],
  limitations: ["Inbox IDs, channel IDs, teammate assignment, tags, and message visibility are SDK-user configuration."],
  metadata: {
    fullProviderApiVerification: {
      provider: "front",
      apiVersion: FRONT_FULL_API_SPEC_VERSION,
      verifiedAt: "2026-06-18",
      coverageArtifact: "docs/provider-coverage/front-core-and-channel-api-2026-06-18.operations.json",
      operationCatalogArtifact: "docs/provider-coverage/front-core-and-channel-api-2026-06-18.operations.json",
      functionCatalogArtifact: "docs/provider-coverage/front-core-and-channel-api-2026-06-18.functions.json",
      documentedOperationCount: FRONT_FULL_API_OPERATION_COUNT,
      implementedOperationCount: FRONT_FULL_API_OPERATION_COUNT,
      unimplementedOperationCount: 0,
      generatedFunctionCount: FRONT_FULL_API_GENERATED_FUNCTION_COUNT,
    },
    channelCoverage: {
      fullFrontCoreAndChannelApiOperations: "generated-per-operation-functions",
      messages: "typed-json-create-reply-read-and-generated-full-surface",
      comments: "typed-json-create-read-and-generated-full-surface",
      conversations: "typed-read-update-search-and-generated-full-surface",
      multipartAttachments: "generated-full-surface",
      webhooks: "generated-full-surface",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

export interface FrontTicketingClientOptions {
  accessToken?: string;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
}

export interface FrontCredentialStatusInput {
  apiAccessConfigured?: boolean;
}

export interface FrontTicketingClient {
  fullApi: FrontFullApiGeneratedClient;
  requestOperation: FrontGeneratedOperationCaller;
  createMessage(channelId: string, payload: FrontCreateMessagePayload): Promise<FrontAcceptedMessageResponse>;
  replyToConversation(conversationId: string, payload: FrontReplyMessagePayload): Promise<FrontAcceptedMessageResponse>;
  listConversationMessages(conversationId: string, query?: FrontConversationMessagesQuery): Promise<FrontCollectionResponse<FrontMessageResponse>>;
  addComment(conversationId: string, payload: FrontCreateCommentPayload): Promise<FrontCommentResponse>;
  listConversationComments(conversationId: string): Promise<FrontCollectionResponse<FrontCommentResponse>>;
  getConversation(conversationId: string): Promise<FrontConversationResponse>;
  updateConversation(conversationId: string, payload: FrontUpdateConversationPayload): Promise<void>;
  searchConversations(query: string, options?: FrontSearchConversationsQuery): Promise<FrontCollectionResponse<FrontConversationResponse> & { _total?: number }>;
  readiness(): Promise<FrontCollectionResponse<FrontTeammateResponse>>;
}

export type FrontJsonPrimitive = string | number | boolean | null;
export type FrontJsonValue = FrontJsonPrimitive | FrontJsonObject | readonly FrontJsonValue[];
export interface FrontJsonObject {
  [key: string]: FrontProviderExtensionValue;
}
export type FrontProviderExtensionValue = FrontJsonValue | object | undefined;
export type FrontProviderPayload = FrontJsonObject | object;
export type FrontProviderQuery = Record<string, FrontProviderExtensionValue>;
export interface FrontProviderResponse extends FrontJsonObject {}
export interface FrontProviderExtensionFields extends FrontJsonObject {}
export type FrontQueryValue = FrontJsonPrimitive | readonly FrontJsonPrimitive[] | undefined;
export type FrontQueryParams = Record<string, FrontQueryValue>;
export type FrontResource = FrontJsonObject;
export type FrontResourceId = string;

export interface FrontMessageOptions extends FrontJsonObject {
  tag_ids?: FrontResourceId[];
  archive?: boolean;
}

interface FrontBaseOutboundMessagePayload extends FrontJsonObject {
  body: string;
  sender_name?: string;
  subject?: string;
  author_id?: FrontResourceId;
  text?: string;
  options?: FrontMessageOptions;
  signature_id?: FrontResourceId;
  should_add_default_signature?: boolean;
  attachments?: never;
}

type FrontRequiredRecipient =
  | { to: string[]; cc?: string[]; bcc?: string[] }
  | { to?: string[]; cc: string[]; bcc?: string[] }
  | { to?: string[]; cc?: string[]; bcc: string[] };

export type FrontCreateMessagePayload = FrontBaseOutboundMessagePayload & FrontRequiredRecipient;

export interface FrontReplyMessagePayload extends FrontBaseOutboundMessagePayload {
  to?: string[];
  cc?: string[];
  bcc?: string[];
  channel_id?: FrontResourceId;
  quote_body?: string;
}

export interface FrontConversationMessagesQuery {
  limit?: number;
  page_token?: string;
  sort_by?: "created_at";
  sort_order?: "asc" | "desc";
}

export interface FrontSearchConversationsQuery {
  limit?: number;
  page_token?: string;
}

export interface FrontCreateCommentPayload extends FrontJsonObject {
  body: string;
  author_id?: FrontResourceId;
  is_pinned?: boolean;
  attachments?: never;
}

export interface FrontUpdateConversationPayload extends FrontJsonObject {
  assignee_id?: FrontResourceId | null;
  inbox_id?: FrontResourceId;
  status?: "archived" | "open" | "deleted" | "spam";
  status_id?: FrontResourceId;
  tag_ids?: FrontResourceId[];
  description?: string | null;
  custom_fields?: FrontJsonObject;
}

export interface FrontLinks extends FrontJsonObject {
  self?: string;
  related?: FrontJsonObject;
}

export interface FrontPagination extends FrontJsonObject {
  next?: string | null;
}

export interface FrontCollectionResponse<TItem extends FrontJsonValue = FrontJsonObject> extends FrontJsonObject {
  _pagination?: FrontPagination;
  _links?: FrontLinks;
  _results: TItem[];
}

export interface FrontAcceptedMessageResponse extends FrontJsonObject {
  status?: "accepted";
  message_uid?: string;
}

export interface FrontAttachment extends FrontJsonObject {
  id: FrontResourceId;
  filename: string;
  url: string;
  content_type: string;
  size: number;
  metadata?: FrontProviderExtensionFields;
}

export interface FrontTeammateResponse extends FrontJsonObject {
  _links?: FrontLinks;
  id: FrontResourceId;
  email?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  license_type?: string;
  is_admin?: boolean;
  is_available?: boolean;
  is_blocked?: boolean;
  type?: "user" | "visitor" | "ai" | "api" | "application" | "bulk_reply" | "csat" | "integration" | "macro" | "rule" | "smart_csat";
  custom_fields?: FrontJsonObject;
}

export interface FrontMessageResponse extends FrontJsonObject {
  _links?: FrontLinks;
  id: FrontResourceId;
  message_uid?: string;
  type?: "call" | "custom" | "email" | "facebook" | "front_chat" | "googleplay" | "intercom" | "internal" | "phone-call" | "sms" | "tweet" | "tweet_dm" | "whatsapp" | "yalo_wha";
  is_inbound?: boolean;
  draft_mode?: "shared" | "private" | null;
  created_at?: number;
  subject?: string | null;
  blurb?: string;
  body?: string;
  text?: string;
  author?: FrontTeammateResponse | null;
  attachments?: FrontAttachment[];
  metadata?: FrontProviderExtensionFields;
}

export interface FrontCommentResponse extends FrontJsonObject {
  _links?: FrontLinks;
  id: FrontResourceId;
  author?: FrontTeammateResponse;
  body: string;
  posted_at?: number;
  attachments?: FrontAttachment[];
  is_pinned: boolean;
}

export interface FrontConversationResponse extends FrontJsonObject {
  _links?: FrontLinks;
  id: FrontResourceId;
  type?: "conversation" | "discussion" | "task";
  subject?: string | null;
  status?: "archived" | "unassigned" | "deleted" | "assigned";
  status_id?: FrontResourceId;
  status_category?: "open" | "waiting" | "resolved";
  ticket_ids?: string[];
  assignee?: FrontTeammateResponse | null;
  tags?: FrontJsonObject[];
  custom_fields?: FrontJsonObject;
  is_private?: boolean;
  metadata?: FrontProviderExtensionFields;
  created_at?: number;
  waiting_since?: number | null;
  last_message?: FrontMessageResponse;
}

export interface FrontLiveCheckOptions extends FrontTicketingClientOptions {
  client?: Pick<FrontTicketingClient, "readiness">;
}

export type FrontHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface FrontClientRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined>;
  query?: FrontQueryParams;
  body?: FrontProviderPayload;
  rawBody?: BodyInit;
  contentType?: string;
}

export interface FrontOperationRequestInput extends FrontClientRequestInput {}

export function createFrontTicketingClient(options: FrontTicketingClientOptions = {}): FrontTicketingClient {
  const fetchImpl = options.fetch ?? fetch;
  const baseUrl = (options.apiBaseUrl ?? "https://api2.frontapp.com").replace(/\/+$/, "");
  const request = <T = FrontResource>(
    method: FrontHttpMethod,
    path: string,
    input: FrontClientRequestInput = {},
  ) => frontRequest<T>({
    options,
    fetch: fetchImpl,
    method,
    url: operationUrl(baseUrl, path, input.pathParams, input.query),
    ...(input.body ? { body: input.body } : {}),
    ...(input.rawBody ? { rawBody: input.rawBody } : {}),
    ...(input.contentType ? { contentType: input.contentType } : {}),
  });
  const requestOperation = (
    operationId: FrontFullApiOperationId | string,
    input: FrontOperationRequestInput = {},
  ) => {
    const operation = FRONT_FULL_API_OPERATION_BY_ID.get(operationId);
    if (!operation) throw new Error(`Unknown Front OpenAPI operation '${operationId}'.`);
    return request(operation.method, operation.path, input);
  };
  const fullApi = createFrontFullApiGeneratedClient(requestOperation as FrontGeneratedOperationCaller);
  return {
    fullApi,
    requestOperation: requestOperation as FrontGeneratedOperationCaller,
    async createMessage(channelId, payload) {
      assertJsonMessagePayload(payload, "Front createMessage");
      return frontRequest({ options, fetch: fetchImpl, method: "POST", path: `/channels/${encodeURIComponent(channelId)}/messages`, body: payload });
    },
    async replyToConversation(conversationId, payload) {
      assertJsonMessagePayload(payload, "Front replyToConversation");
      return frontRequest({ options, fetch: fetchImpl, method: "POST", path: `/conversations/${encodeURIComponent(conversationId)}/messages`, body: payload });
    },
    async listConversationMessages(conversationId, query) {
      return frontRequest({ options, fetch: fetchImpl, method: "GET", path: withQuery(`/conversations/${encodeURIComponent(conversationId)}/messages`, query) });
    },
    async addComment(conversationId, payload) {
      return frontRequest({ options, fetch: fetchImpl, method: "POST", path: `/conversations/${encodeURIComponent(conversationId)}/comments`, body: payload });
    },
    async listConversationComments(conversationId) {
      return frontRequest({ options, fetch: fetchImpl, method: "GET", path: `/conversations/${encodeURIComponent(conversationId)}/comments` });
    },
    async getConversation(conversationId) {
      return frontRequest({ options, fetch: fetchImpl, method: "GET", path: `/conversations/${encodeURIComponent(conversationId)}` });
    },
    async updateConversation(conversationId, payload) {
      return frontRequest({ options, fetch: fetchImpl, method: "PATCH", path: `/conversations/${encodeURIComponent(conversationId)}`, body: payload });
    },
    async searchConversations(query, searchOptions) {
      return frontRequest({ options, fetch: fetchImpl, method: "GET", path: withQuery(`/conversations/search/${encodeURIComponent(query)}`, searchOptions) });
    },
    async readiness() {
      return frontRequest({ options, fetch: fetchImpl, method: "GET", path: "/teammates" });
    },
  };
}

function assertJsonMessagePayload(payload: FrontProviderPayload, context: string) {
  if (typeof payload === "object" && payload !== null && "attachments" in payload) {
    throw new Error(`${context} attachments require multipart/form-data; this JSON helper does not implement Front attachment upload.`);
  }
}

export function frontTicketingCredentialStatuses(input: FrontCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [{ providerPackageId: frontTicketingProviderManifest.id, requirementId: "front-api-access", state: input.apiAccessConfigured ? "configured" : "missing", scopes: ["conversations:read", "conversations:write", "messages:send", "messages:read", "comments:write", "comments:read", "teammates:read"], message: input.apiAccessConfigured ? "Front API access is configured." : "Front API token is required." }];
}

export function createFrontTicketingLiveChecks(options: FrontLiveCheckOptions) {
  return [{ id: "teammates", description: "Front API can call the configured readiness endpoint.", requiredCredentialIds: ["front-api-access"], async run(context: { signal?: AbortSignal }) {
    const client = options.client ?? createFrontTicketingClient(options);
    const result = await client.readiness();
    if (context.signal?.aborted) throw new Error("Front readiness check aborted.");
    return { details: { ok: Boolean(result) } };
  } }];
}

async function frontRequest<T = FrontResource>(input: { options: FrontTicketingClientOptions; fetch: typeof fetch; method: FrontHttpMethod; path?: string; url?: URL; body?: FrontProviderPayload; rawBody?: BodyInit; contentType?: string }) {
  const response = await input.fetch(input.url?.toString() ?? `${(input.options.apiBaseUrl ?? "https://api2.frontapp.com").replace(/\/+$/, "")}${input.path ?? ""}`, {
    method: input.method,
    headers: { accept: "application/json", ...(input.body || input.rawBody ? { "content-type": input.contentType ?? "application/json" } : {}), ...(input.options.accessToken ? { authorization: `Bearer ${input.options.accessToken}` } : {}) },
    ...(input.rawBody ? { body: input.rawBody } : input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  return parseResponse<T>(response, "Front");
}

function withQuery(path: string, query?: object) {
  if (!query) return path;
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined) params.set(key, String(value));
  }
  const serialized = params.toString();
  return serialized ? `${path}?${serialized}` : path;
}

function operationUrl(baseUrl: string, pathTemplate: string, pathParams: FrontClientRequestInput["pathParams"], query: FrontClientRequestInput["query"]) {
  const path = pathTemplate.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams?.[key];
    if (value === undefined) throw new Error(`Front operation path parameter '${key}' is required.`);
    return encodeURIComponent(String(value));
  });
  const url = new URL(path, `${baseUrl}/`);
  appendQuery(url.searchParams, query);
  return url;
}

function appendQuery(params: URLSearchParams, query?: FrontQueryParams) {
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

async function parseResponse<T = FrontResource>(response: Response, provider: string): Promise<T> {
  const text = await response.text();
  const body = text ? JSON.parse(text) as FrontJsonObject : {};
  if (!response.ok) throw new Error(typeof body.message === "string" ? body.message : `${provider} API returned ${response.status}.`);
  return body as T;
}
