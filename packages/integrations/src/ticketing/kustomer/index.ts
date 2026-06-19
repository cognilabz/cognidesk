import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";
import {
  createKustomerFullApiGeneratedClient,
  KUSTOMER_FULL_API_GENERATED_FUNCTION_COUNT,
  type KustomerFullApiGeneratedClient,
  type KustomerGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  KUSTOMER_FULL_API_OPERATION_BY_ID,
  KUSTOMER_FULL_API_OPERATION_COUNT,
  KUSTOMER_FULL_API_SPEC_VERSION,
  type KustomerFullApiOperationId,
} from "./full-api-operations.generated.js";
export {
  createKustomerFullApiGeneratedClient,
  KUSTOMER_FULL_API_GENERATED_FUNCTION_COUNT,
  KUSTOMER_FULL_API_GENERATED_FUNCTION_NAMES,
  type KustomerFullApiGeneratedClient,
  type KustomerGeneratedOperationCaller,
} from "./full-api-client.generated.js";
export {
  KUSTOMER_FULL_API_GENERATED_AT,
  KUSTOMER_FULL_API_OPERATION_BY_ID,
  KUSTOMER_FULL_API_OPERATION_COUNT,
  KUSTOMER_FULL_API_OPERATIONS,
  KUSTOMER_FULL_API_SPEC,
  KUSTOMER_FULL_API_SPEC_SOURCE,
  KUSTOMER_FULL_API_SPEC_VERSION,
  type KustomerFullApiOperation,
  type KustomerFullApiOperationId,
} from "./full-api-operations.generated.js";
export type * from "./full-api-schema-types.generated.js";

export const kustomerTicketingProviderManifest = defineProviderPackage({
  id: "ticketing.kustomer",
  name: "Kustomer",
  packageName: "@cognidesk/integrations",
  provider: "kustomer",
  category: "ticketing",
  trustLevel: "official",
  directions: ["bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [{
    id: "kustomer-api-access",
    label: "Kustomer API access",
    scopes: ["org.user.conversation.read", "org.user.conversation.write", "org.permission.conversation.create", "org.user.message.read", "org.user.message.write", "org.permission.message.create", "org.permission.draft.create"],
    required: true,
    metadata: {
      scopeKind: "provider-permission-labels",
      privilegeGuidance: "Kustomer API keys are governed by roles and API permissions; these strings are provider permission labels, not OAuth scopes.",
    },
  }],
  coverage: {
    scope: "full-provider-api",
    notes: [
      "Coverage includes generated per-operation functions for every operation found in Kustomer's official ReadMe API registry OpenAPI documents.",
      "Typed convenience helpers remain limited to Kustomer conversation create/read/update/list operations, message list/create operations, customer draft creation, and org readiness for Cognidesk support workflows.",
      "SDK users still own Kustomer API-key roles, org permissions, queue/team behavior, custom object schemas, webhook configuration, and account-specific policy.",
    ],
    evidence: [
      { label: "Kustomer REST APIs portal", url: "https://developer.kustomer.com/kustomer-api-docs/reference" },
      { label: "Kustomer ReadMe API registry - Core Resources", url: "https://dash.readme.com/api/v1/api-registry/a9esg22kmox9ylt0" },
      { label: "Kustomer API introduction", url: "https://help.kustomer.com/api-introduction-BkwVN42zM" },
      { label: "Kustomer API keys", url: "https://help.kustomer.com/api-keys-SJs5YTIWX" },
      { label: "Kustomer common API permissions", url: "https://help.kustomer.com/permissions-for-common-api-requests-HkltTBZbN" },
      { label: "Kustomer Develop portal", url: "https://developer.kustomer.com/" },
      { label: "Kustomer conversations reference", url: "https://developer.kustomer.com/kustomer-api-docs/reference/getconversations" },
      { label: "Kustomer get messages", url: "https://developer.kustomer.com/kustomer-api-docs/reference/getmessages" },
      { label: "Kustomer create message", url: "https://developer.kustomer.com/kustomer-api-docs/reference/createmessage" },
      { label: "Kustomer create draft for customer", url: "https://developer.kustomer.com/kustomer-api-docs/reference/createadraftbycustomer" },
    ],
  },
  capabilities: [
    { capability: "create-provider-object", label: "Create Kustomer conversations, messages, and drafts", providerObjects: [{ kind: "kustomerConversation", label: "Kustomer Conversation" }, { kind: "kustomerMessage", label: "Kustomer Message" }, { kind: "kustomerDraft", label: "Kustomer Draft" }], audiences: ["customer-facing", "mixed"], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "read-provider-object", label: "Read Kustomer conversations", providerObjects: [{ kind: "kustomerConversation", label: "Kustomer Conversation" }], audiences: ["internal-support", "mixed"], requiresCredential: true, exposesSensitiveData: true },
    { capability: "update-provider-object", label: "Update Kustomer conversations", providerObjects: [{ kind: "kustomerConversation", label: "Kustomer Conversation" }], audiences: ["internal-support", "mixed"], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "search-provider-object", label: "List Kustomer conversations", providerObjects: [{ kind: "kustomerConversation", label: "Kustomer Conversation" }], audiences: ["internal-support", "mixed"], requiresCredential: true, exposesSensitiveData: true },
    { capability: "handoff", label: "Attach handoff to Kustomer", providerObjects: [{ kind: "kustomerConversation", label: "Kustomer Conversation" }, { kind: "kustomerMessage", label: "Kustomer Message" }, { kind: "kustomerDraft", label: "Kustomer Draft" }], audiences: ["customer-facing", "internal-support", "mixed"], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
  ],
  privacyNotes: ["Kustomer conversations can include customer timeline data, messages, notes, tags, queue status, and custom objects."],
  limitations: ["Conversation model, queues, teams, custom objects, and message visibility are SDK-user configuration."],
  metadata: {
    fullProviderApiVerification: {
      provider: "kustomer",
      apiVersion: KUSTOMER_FULL_API_SPEC_VERSION,
      verifiedAt: "2026-06-18",
      coverageArtifact: "docs/provider-coverage/kustomer-public-api-2026-06-18.operations.json",
      operationCatalogArtifact: "docs/provider-coverage/kustomer-public-api-2026-06-18.operations.json",
      functionCatalogArtifact: "docs/provider-coverage/kustomer-public-api-2026-06-18.functions.json",
      documentedOperationCount: KUSTOMER_FULL_API_OPERATION_COUNT,
      implementedOperationCount: KUSTOMER_FULL_API_OPERATION_COUNT,
      unimplementedOperationCount: 0,
      generatedFunctionCount: KUSTOMER_FULL_API_GENERATED_FUNCTION_COUNT,
    },
    channelCoverage: {
      fullKustomerPublicApiOperations: "generated-per-operation-functions",
      conversations: "typed-create-read-update-list-and-generated-full-surface",
      messages: "typed-create-list-and-generated-full-surface",
      customerDrafts: "typed-create-and-generated-full-surface",
      orgReadiness: "typed-readiness-via-generated-message-list",
      customersQueuesTeamsTags: "generated-full-surface",
      attachmentsCustomObjectsTimeline: "generated-full-surface",
      webhooksSearchAnalytics: "generated-full-surface",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

export type KustomerJsonPrimitive = string | number | boolean | null;
export type KustomerJsonValue =
  | KustomerJsonPrimitive
  | KustomerJsonObject
  | readonly KustomerJsonValue[];
export type KustomerProviderExtensionValue = KustomerJsonValue | object | undefined;
export interface KustomerJsonObject {
  [key: string]: KustomerProviderExtensionValue;
}
export type KustomerProviderPayload = KustomerJsonObject | object;
export type KustomerProviderQuery = Record<string, KustomerProviderExtensionValue>;
export interface KustomerProviderResponse extends KustomerJsonObject {}
export interface KustomerProviderExtensionFields extends KustomerJsonObject {}

export interface KustomerTicketingClientOptions {
  accessToken?: string;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
}

export interface KustomerCredentialStatusInput {
  apiAccessConfigured?: boolean;
}

export interface KustomerCreateMessagePayload extends KustomerJsonObject {
  channel: string;
  direction: "in" | "out";
  app: string;
}

export interface KustomerCreateDraftPayload extends KustomerJsonObject {
  channel?: string;
  direction?: "in" | "out";
  app?: string;
}

export interface KustomerTicketingClient {
  fullApi: KustomerFullApiGeneratedClient;
  requestOperation: KustomerGeneratedOperationCaller;
  createConversation(payload: KustomerProviderPayload): Promise<KustomerProviderResponse>;
  getConversation(conversationId: string): Promise<KustomerProviderResponse>;
  updateConversation(conversationId: string, patch: KustomerProviderPayload): Promise<KustomerProviderResponse>;
  listConversations(query?: Record<string, string | number | boolean>): Promise<KustomerProviderResponse>;
  listMessages(query?: Record<string, string | number | boolean>): Promise<KustomerProviderResponse>;
  createMessage(payload: KustomerCreateMessagePayload): Promise<KustomerProviderResponse>;
  createCustomerDraft(customerId: string, payload: KustomerCreateDraftPayload, query?: { createConversation?: boolean }): Promise<KustomerProviderResponse>;
  readiness(): Promise<KustomerProviderResponse>;
}

const kustomerMessageChannels = new Set([
  "email",
  "sms",
  "chat",
  "facebook",
  "twitter-dm",
  "twitter-tweet",
  "voice",
  "instagram",
  "whatsapp",
]);

export interface KustomerLiveCheckOptions extends KustomerTicketingClientOptions {
  client?: Pick<KustomerTicketingClient, "readiness">;
}

export type KustomerHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface KustomerResource {
  [key: string]: KustomerProviderExtensionValue;
}

export interface KustomerClientRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined>;
  query?: KustomerProviderQuery;
  body?: KustomerProviderPayload;
  rawBody?: BodyInit;
  contentType?: string;
}

export interface KustomerOperationRequestInput extends KustomerClientRequestInput {}

export function createKustomerTicketingClient(options: KustomerTicketingClientOptions = {}): KustomerTicketingClient {
  const fetchImpl = options.fetch ?? fetch;
  const baseUrl = (options.apiBaseUrl ?? "https://api.kustomerapp.com").replace(/\/+$/, "");
  const request = <T = KustomerResource>(
    method: KustomerHttpMethod,
    path: string,
    input: KustomerClientRequestInput = {},
  ) => kustomerRequest<T>({
    options,
    fetch: fetchImpl,
    method,
    url: operationUrl(baseUrl, path, input.pathParams, input.query),
    ...(input.body ? { body: input.body } : {}),
    ...(input.rawBody ? { rawBody: input.rawBody } : {}),
    ...(input.contentType ? { contentType: input.contentType } : {}),
  });
  const requestOperation = (
    operationId: KustomerFullApiOperationId | string,
    input: KustomerOperationRequestInput = {},
  ) => {
    const operation = KUSTOMER_FULL_API_OPERATION_BY_ID.get(operationId);
    if (!operation) throw new Error(`Unknown Kustomer OpenAPI operation '${operationId}'.`);
    return request(operation.method, operation.path, input);
  };
  const fullApi = createKustomerFullApiGeneratedClient(requestOperation as KustomerGeneratedOperationCaller);
  return {
    fullApi,
    requestOperation: requestOperation as KustomerGeneratedOperationCaller,
    async createConversation(payload) {
      return kustomerRequest({ options, fetch: fetchImpl, method: "POST", path: "/v1/conversations", body: payload });
    },
    async getConversation(conversationId) {
      return kustomerRequest({ options, fetch: fetchImpl, method: "GET", path: `/v1/conversations/${encodeURIComponent(conversationId)}` });
    },
    async updateConversation(conversationId, patch) {
      return kustomerRequest({ options, fetch: fetchImpl, method: "PATCH", path: `/v1/conversations/${encodeURIComponent(conversationId)}`, body: patch });
    },
    async listConversations(query = {}) {
      const params = new URLSearchParams(Object.entries(query).map(([key, value]) => [key, String(value)]));
      return kustomerRequest({ options, fetch: fetchImpl, method: "GET", path: `/v1/conversations${params.size ? `?${params}` : ""}` });
    },
    async listMessages(query = {}) {
      const params = new URLSearchParams(Object.entries(query).map(([key, value]) => [key, String(value)]));
      return kustomerRequest({ options, fetch: fetchImpl, method: "GET", path: `/v1/messages${params.size ? `?${params}` : ""}` });
    },
    async createMessage(payload) {
      assertKustomerMessagePayload(payload);
      return kustomerRequest({ options, fetch: fetchImpl, method: "POST", path: "/v1/messages", body: payload });
    },
    async createCustomerDraft(customerId, payload, query = {}) {
      assertKustomerDraftPayload(payload);
      const params = new URLSearchParams(Object.entries(query).map(([key, value]) => [key, String(value)]));
      return kustomerRequest({ options, fetch: fetchImpl, method: "POST", path: `/v1/customers/${encodeURIComponent(customerId)}/drafts${params.size ? `?${params}` : ""}`, body: payload });
    },
    async readiness() {
      return kustomerRequest({ options, fetch: fetchImpl, method: "GET", path: "/v1/messages?pageSize=1" });
    },
  };
}

function assertKustomerMessagePayload(payload: KustomerCreateMessagePayload) {
  if (typeof payload.channel !== "string" || !kustomerMessageChannels.has(payload.channel)) {
    throw new Error("Kustomer message channel must be one of the documented Create Message channels.");
  }
  if (payload.direction !== "in" && payload.direction !== "out") {
    throw new Error("Kustomer message direction must be 'in' or 'out'.");
  }
  if (typeof payload.app !== "string" || !payload.app) {
    throw new Error("Kustomer message app is required.");
  }
}

function assertKustomerDraftPayload(payload: KustomerCreateDraftPayload) {
  if (payload.channel !== undefined && (typeof payload.channel !== "string" || !kustomerMessageChannels.has(payload.channel))) {
    throw new Error("Kustomer draft channel must be one of the documented customer messaging channels.");
  }
}

export function kustomerTicketingCredentialStatuses(input: KustomerCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [{ providerPackageId: kustomerTicketingProviderManifest.id, requirementId: "kustomer-api-access", state: input.apiAccessConfigured ? "configured" : "missing", scopes: ["org.user.conversation.read", "org.user.conversation.write", "org.permission.conversation.create", "org.user.message.read", "org.user.message.write", "org.permission.message.create", "org.permission.draft.create"], message: input.apiAccessConfigured ? "Kustomer API access is configured." : "Kustomer API token is required." }];
}

export function createKustomerTicketingLiveChecks(options: KustomerLiveCheckOptions) {
  return [{ id: "messages", description: "Kustomer API can list messages through the documented API.", requiredCredentialIds: ["kustomer-api-access"], async run(context: { signal?: AbortSignal }) {
    const client = options.client ?? createKustomerTicketingClient(options);
    const result = await client.readiness();
    if (context.signal?.aborted) throw new Error("Kustomer readiness check aborted.");
    return { details: { ok: Boolean(result) } };
  } }];
}

async function kustomerRequest<T = KustomerResource>(input: { options: KustomerTicketingClientOptions; fetch: typeof fetch; method: KustomerHttpMethod; path?: string; url?: URL; body?: KustomerProviderPayload; rawBody?: BodyInit; contentType?: string }) {
  const response = await input.fetch(input.url?.toString() ?? `${(input.options.apiBaseUrl ?? "https://api.kustomerapp.com").replace(/\/+$/, "")}${input.path ?? ""}`, {
    method: input.method,
    headers: { accept: "application/json", ...(input.body || input.rawBody ? { "content-type": input.contentType ?? "application/json" } : {}), ...(input.options.accessToken ? { authorization: `Bearer ${input.options.accessToken}` } : {}) },
    ...(input.rawBody ? { body: input.rawBody } : input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  return parseResponse<T>(response, "Kustomer");
}

function operationUrl(baseUrl: string, pathTemplate: string, pathParams: KustomerClientRequestInput["pathParams"], query: KustomerClientRequestInput["query"]) {
  const path = pathTemplate.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams?.[key];
    if (value === undefined) throw new Error(`Kustomer operation path parameter '${key}' is required.`);
    return encodeURIComponent(String(value));
  });
  const url = new URL(path, `${baseUrl}/`);
  appendQuery(url.searchParams, query);
  return url;
}

function appendQuery(params: URLSearchParams, query?: KustomerProviderQuery) {
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

async function parseResponse<T = KustomerJsonObject>(response: Response, provider: string): Promise<T> {
  const text = await response.text();
  const body = text ? JSON.parse(text) as KustomerJsonObject : {};
  if (!response.ok) throw new Error(typeof body.message === "string" ? body.message : `${provider} API returned ${response.status}.`);
  return body as T;
}
