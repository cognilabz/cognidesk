import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";

export const helpScoutTicketingProviderManifest = defineProviderPackage({
  id: "ticketing.help-scout",
  name: "Help Scout",
  packageName: "@cognidesk/integrations",
  provider: "help-scout",
  category: "ticketing",
  trustLevel: "official",
  directions: ["bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [{ id: "help-scout-api-access", label: "Help Scout OAuth access", description: "Bearer access is governed by the SDK user's Help Scout app/user permissions.", required: true }],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Coverage is limited to Help Scout conversation create/read/list, raw conversation JSONPatch update, thread list, reply/note thread creation, and mailbox-list readiness for Cognidesk support workflows.",
      "The package does not implement the broader Help Scout Inbox API for customers, attachment lifecycle beyond inline thread payloads, custom fields, snooze, tags, inbox routing, saved replies, organizations, reports, teams, users, webhooks, or workflows.",
    ],
    evidence: [
      { label: "Help Scout developer llms.txt", url: "https://developer.helpscout.com/llms.txt" },
      { label: "Help Scout OAuth authentication", url: "https://developer.helpscout.com/mailbox-api/overview/authentication" },
      { label: "Help Scout Create Conversation", url: "https://developer.helpscout.com/mailbox-api/endpoints/conversations/create/" },
      { label: "Help Scout Get Conversation", url: "https://developer.helpscout.com/mailbox-api/endpoints/conversations/get/" },
      { label: "Help Scout List Conversations", url: "https://developer.helpscout.com/mailbox-api/endpoints/conversations/list/" },
      { label: "Help Scout Update Conversation", url: "https://developer.helpscout.com/mailbox-api/endpoints/conversations/update/" },
      { label: "Help Scout List Threads", url: "https://developer.helpscout.com/mailbox-api/endpoints/conversations/threads/list/" },
      { label: "Help Scout Create Reply Thread", url: "https://developer.helpscout.com/mailbox-api/endpoints/conversations/threads/reply/" },
      { label: "Help Scout Create Note", url: "https://developer.helpscout.com/mailbox-api/endpoints/conversations/threads/note/" },
      { label: "Help Scout List Inboxes", url: "https://developer.helpscout.com/mailbox-api/endpoints/inboxes/list/" },
      { label: "Help Scout Inbox API", url: "https://developer.helpscout.com/mailbox-api/" },
    ],
  },
  capabilities: [
    { capability: "create-provider-object", label: "Create Help Scout conversations and threads", providerObjects: [{ kind: "helpScoutConversation", label: "Help Scout Conversation" }, { kind: "helpScoutReplyThread", label: "Help Scout Reply Thread" }, { kind: "helpScoutNoteThread", label: "Help Scout Note Thread" }], audiences: ["customer-facing", "mixed"], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "read-provider-object", label: "Read Help Scout conversations", providerObjects: [{ kind: "helpScoutConversation", label: "Help Scout Conversation" }], audiences: ["internal-support", "mixed"], requiresCredential: true, exposesSensitiveData: true },
    { capability: "update-provider-object", label: "Update Help Scout conversations", providerObjects: [{ kind: "helpScoutConversation", label: "Help Scout Conversation" }], audiences: ["internal-support", "mixed"], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
    { capability: "search-provider-object", label: "List Help Scout conversations", providerObjects: [{ kind: "helpScoutConversation", label: "Help Scout Conversation" }], audiences: ["internal-support", "mixed"], requiresCredential: true, exposesSensitiveData: true },
    { capability: "handoff", label: "Attach handoff to Help Scout", providerObjects: [{ kind: "helpScoutConversation", label: "Help Scout Conversation" }, { kind: "helpScoutReplyThread", label: "Help Scout Reply Thread" }, { kind: "helpScoutNoteThread", label: "Help Scout Note Thread" }], audiences: ["customer-facing", "internal-support", "mixed"], requiresCredential: true, sideEffect: true, exposesSensitiveData: true, changesWorkflow: true },
  ],
  privacyNotes: ["Help Scout conversations can include customer identity, mailbox threads, notes, tags, custom fields, and assignments."],
  limitations: ["Mailbox IDs, thread types, assignment, workflow rules, and customer visibility are SDK-user configuration."],
  metadata: {
    checkedProviderApiCoverage: {
      verifiedAt: "2026-06-18",
      sourceKind: "checked-endpoint-family-inventory",
      coverageArtifact: "docs/provider-coverage/help-scout-checked-inbox-api-2026-06-18.inventory.json",
      checkedFamilyCount: 5,
      implementedFamilyCount: 3,
      gapFamilyCount: 2,
      implementedOperationCount: 8,
    },
    channelCoverage: {
      conversations: "typed-create-read-update-list",
      threads: "typed-list",
      replies: "typed-create",
      notes: "typed-create",
      mailboxesReadiness: "typed-list",
      customersTagsTeamsUsers: "provider-supported-not-typed",
      attachments: "provider-supported-not-typed",
      webhooksWorkflowsReports: "not-covered",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

export type HelpScoutJsonPrimitive = string | number | boolean | null;
export type HelpScoutJsonValue =
  | HelpScoutJsonPrimitive
  | HelpScoutJsonObject
  | readonly HelpScoutJsonValue[];
export type HelpScoutProviderExtensionValue = HelpScoutJsonValue | object | undefined;
export interface HelpScoutJsonObject {
  [key: string]: HelpScoutProviderExtensionValue;
}
export type HelpScoutProviderPayload = HelpScoutJsonObject | object;
export type HelpScoutProviderQuery = Record<string, HelpScoutProviderExtensionValue>;
export interface HelpScoutProviderResponse extends HelpScoutJsonObject {}
export interface HelpScoutProviderExtensionFields extends HelpScoutJsonObject {}

export interface HelpScoutTicketingClientOptions {
  accessToken?: string;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
}

export interface HelpScoutCredentialStatusInput {
  apiAccessConfigured?: boolean;
}

export interface HelpScoutConversationInput {
  mailboxId: number;
  subject: string;
  customer: HelpScoutJsonObject;
  threads: Array<HelpScoutJsonObject>;
  assignTo?: number;
  tags?: string[];
  additionalFields?: HelpScoutProviderExtensionFields;
}

export type HelpScoutThreadPayload = HelpScoutJsonObject;

export interface HelpScoutTicketingClient {
  createConversation(input: HelpScoutConversationInput): Promise<HelpScoutProviderResponse>;
  getConversation(conversationId: string): Promise<HelpScoutProviderResponse>;
  updateConversation(conversationId: string, patch: HelpScoutProviderPayload): Promise<HelpScoutProviderResponse>;
  listConversations(query?: Record<string, string | number | boolean>): Promise<HelpScoutProviderResponse>;
  listThreads(conversationId: string | number): Promise<HelpScoutProviderResponse>;
  createReply(conversationId: string | number, payload: HelpScoutThreadPayload): Promise<HelpScoutProviderResponse>;
  createNote(conversationId: string | number, payload: HelpScoutThreadPayload): Promise<HelpScoutProviderResponse>;
  readiness(): Promise<HelpScoutProviderResponse>;
}

export interface HelpScoutLiveCheckOptions extends HelpScoutTicketingClientOptions {
  client?: Pick<HelpScoutTicketingClient, "readiness">;
}

export function createHelpScoutTicketingClient(options: HelpScoutTicketingClientOptions = {}): HelpScoutTicketingClient {
  const fetchImpl = options.fetch ?? fetch;
  return {
    async createConversation(input) {
      return helpScoutRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: "/conversations",
        body: {
          mailboxId: input.mailboxId,
          subject: input.subject,
          customer: input.customer,
          threads: input.threads,
          ...(input.assignTo !== undefined ? { assignTo: input.assignTo } : {}),
          ...(input.tags ? { tags: input.tags } : {}),
          ...(input.additionalFields ?? {}),
        },
      });
    },
    async getConversation(conversationId) {
      return helpScoutRequest({ options, fetch: fetchImpl, method: "GET", path: `/conversations/${encodeURIComponent(conversationId)}` });
    },
    async updateConversation(conversationId, patch) {
      return helpScoutRequest({ options, fetch: fetchImpl, method: "PATCH", path: `/conversations/${encodeURIComponent(conversationId)}`, body: patch });
    },
    async listConversations(query = {}) {
      const params = new URLSearchParams(Object.entries(query).map(([key, value]) => [key, String(value)]));
      return helpScoutRequest({ options, fetch: fetchImpl, method: "GET", path: `/conversations${params.size ? `?${params}` : ""}` });
    },
    async listThreads(conversationId) {
      return helpScoutRequest({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: `/conversations/${encodeURIComponent(String(conversationId))}/threads`,
      });
    },
    async createReply(conversationId, payload) {
      return helpScoutRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: `/conversations/${encodeURIComponent(String(conversationId))}/reply`,
        body: payload,
      });
    },
    async createNote(conversationId, payload) {
      return helpScoutRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: `/conversations/${encodeURIComponent(String(conversationId))}/notes`,
        body: payload,
      });
    },
    async readiness() {
      return helpScoutRequest({ options, fetch: fetchImpl, method: "GET", path: "/mailboxes" });
    },
  };
}

export function helpScoutTicketingCredentialStatuses(input: HelpScoutCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [{ providerPackageId: helpScoutTicketingProviderManifest.id, requirementId: "help-scout-api-access", state: input.apiAccessConfigured ? "configured" : "missing", message: input.apiAccessConfigured ? "Help Scout OAuth access is configured." : "Help Scout OAuth access is required." }];
}

export function createHelpScoutTicketingLiveChecks(options: HelpScoutLiveCheckOptions) {
  return [{ id: "mailboxes", description: "Help Scout Mailbox API can list mailboxes.", requiredCredentialIds: ["help-scout-api-access"], async run(context: { signal?: AbortSignal }) {
    const client = options.client ?? createHelpScoutTicketingClient(options);
    const result = await client.readiness();
    if (context.signal?.aborted) throw new Error("Help Scout readiness check aborted.");
    return { details: { ok: Boolean(result) } };
  } }];
}

async function helpScoutRequest(input: { options: HelpScoutTicketingClientOptions; fetch: typeof fetch; method: "GET" | "POST" | "PATCH"; path: string; body?: HelpScoutProviderPayload }) {
  const response = await input.fetch(`${(input.options.apiBaseUrl ?? "https://api.helpscout.net/v2").replace(/\/+$/, "")}${input.path}`, {
    method: input.method,
    headers: { accept: "application/json", ...(input.body ? { "content-type": "application/json" } : {}), ...(input.options.accessToken ? { authorization: `Bearer ${input.options.accessToken}` } : {}) },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  return parseResponse(response, "Help Scout");
}

async function parseResponse(response: Response, provider: string) {
  const text = await response.text();
  const resourceId = response.headers.get("resource-id") ?? response.headers.get("Resource-ID");
  const body = text ? JSON.parse(text) as HelpScoutJsonObject : (resourceId ? { resourceId } : {});
  if (!response.ok) throw new Error(typeof body.message === "string" ? body.message : `${provider} API returned ${response.status}.`);
  return body;
}
