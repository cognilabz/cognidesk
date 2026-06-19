import { createHmac, timingSafeEqual } from "node:crypto";
import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";

export const forumCommunityProviderManifest = defineProviderPackage({
  id: "community.forum",
  name: "Discourse Forum",
  packageName: "@cognidesk/integrations",
  provider: "forum",
  category: "community",
  trustLevel: "official",
  directions: ["receive-only", "send-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    {
      id: "forum-base-url",
      label: "Forum base URL",
      description: "SDK-user-selected forum origin, such as a Discourse community URL.",
      required: true,
    },
    {
      id: "forum-api-key",
      label: "Forum API key",
      description: "Server-side forum API key used for topic, post, search, and user readiness calls.",
      required: true,
    },
    {
      id: "forum-api-username",
      label: "Forum API username",
      description: "Forum API username that owns SDK-user-selected moderation and posting permissions.",
      required: true,
    },
    {
      id: "forum-webhook-secret",
      label: "Forum webhook secret",
      description: "Shared secret used to verify signed forum webhooks before accepting public community events.",
      required: false,
    },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Coverage is limited to Discourse-compatible topic/reply creation through posts, topic/post reads, search/latest/current-user reads, and X-Discourse-Event-Signature webhook validation.",
      "The package does not implement broader Discourse administration for categories, tags, users/groups, moderation actions, uploads, badges, notifications, private messages, plugin endpoints, site settings, or non-Discourse forum APIs.",
    ],
    evidence: [
      { label: "Discourse API docs", url: "https://docs.discourse.org/" },
      { label: "Discourse webhook configuration and signature", url: "https://meta.discourse.org/t/configure-webhooks-that-trigger-on-discourse-events-to-integrate-with-external-services/49045" },
    ],
  },
  capabilities: [
    {
      capability: "receive",
      label: "Receive forum webhooks",
      description: "Validates and parses forum webhook events for SDK-user-owned public community support workflows.",
      audiences: ["customer-facing", "mixed"],
      providerObjects: [{ kind: "forumWebhook", label: "Forum Webhook" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "send",
      label: "Create forum replies",
      description: "Creates public forum replies when SDK-user policy permits public response automation.",
      audiences: ["customer-facing", "mixed"],
      providerObjects: [{ kind: "forumPost", label: "Forum Post" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "draft",
      label: "Draft forum posts",
      description: "Builds topic and reply payloads for SDK-user approval workflows.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "forumPostDraft", label: "Forum Post Draft" }],
      exposesSensitiveData: true,
    },
    {
      capability: "thread",
      label: "Use forum topics",
      description: "Reads forum topics, posts, latest topics, and search results as community support threads.",
      audiences: ["customer-facing", "mixed"],
      providerObjects: [{ kind: "forumTopic", label: "Forum Topic" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "create-provider-object",
      label: "Create forum topics",
      description: "Creates SDK-user-approved forum topics for support announcements or escalated community cases.",
      audiences: ["customer-facing", "mixed"],
      providerObjects: [{ kind: "forumTopic", label: "Forum Topic" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "read-provider-object",
      label: "Read forum topics and posts",
      description: "Reads forum topics, posts, and the current API user readiness record through the configured forum API.",
      audiences: ["internal-support", "mixed"],
      providerObjects: [
        { kind: "forumTopic", label: "Forum Topic" },
        { kind: "forumPost", label: "Forum Post" },
      ],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "search-provider-object",
      label: "Search forum content",
      description: "Searches forum topics and posts with SDK-user-selected query and pagination controls.",
      audiences: ["internal-support", "mixed"],
      providerObjects: [{ kind: "forumSearchResult", label: "Forum Search Result" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "community.webhook-signature",
      label: "Validate forum webhook signatures",
      description: "Validates Discourse-style X-Discourse-Event-Signature HMAC-SHA256 webhook signatures.",
      audiences: ["internal-support"],
      providerObjects: [{ kind: "forumSignedWebhook", label: "Forum Signed Webhook" }],
      requiresCredential: true,
      exposesSensitiveData: true,
      extension: true,
    },
  ],
  privacyNotes: [
    "Forum posts, topic titles, usernames, and category/tag labels present in returned topics, posts, search results, or webhook payloads can contain customer data.",
    "Forum API keys and webhook secrets stay server-side and are represented in Studio only as readiness state.",
  ],
  limitations: [
    "The SDK user chooses which forum implementation, categories, tags, moderation actions, public reply approval, and retention policies are active.",
    "This package uses Discourse-compatible REST and webhook conventions as the concrete forum foundation; other forum implementations can wrap the same manifest pattern.",
    "Discourse rate limits and throttling are configurable by site administrators; SDK users own 429 handling, retry, and backoff policy.",
  ],
  maintainers: [{ name: "Cognidesk", type: "official" }],
  metadata: {
    docs: "https://docs.discourse.org/",
    concreteProvider: "discourse",
    supportedForumApi: "discourse-compatible-rest-and-webhooks",
    apiCoverage: {
      operationCatalog: "docs/provider-coverage/discourse-selected-api-2026-06-18.operations.json",
      generatedFromOfficialSpec: false,
      officialSpec: "https://docs.discourse.org/openapi.json",
      sourcePathCount: 79,
      sourceOperationCount: 93,
      selectedOperationCount: 5,
      docsOnlyOperationCount: 1,
      implementedOperationCount: 6,
      fullProviderApi: false,
    },
    channelCoverage: {
      topics: "typed-create-read-latest",
      posts: "typed-create-read",
      search: "typed-search",
      currentUser: "typed-read",
      webhooks: "typed-validate-parse",
      categoriesTagsUsersGroupsModerationUploadsBadgesPrivateMessages: "provider-supported-not-typed",
      nonDiscourseForumApis: "not-covered",
    },
  },
});

export type ForumCommunityJsonPrimitive = string | number | boolean | null;
export type ForumCommunityJsonValue =
  | ForumCommunityJsonPrimitive
  | ForumCommunityJsonObject
  | readonly ForumCommunityJsonValue[];
export type ForumCommunityProviderExtensionValue = ForumCommunityJsonValue | object | undefined;
export interface ForumCommunityJsonObject {
  [key: string]: ForumCommunityProviderExtensionValue;
}
export type ForumCommunityProviderPayload = ForumCommunityJsonObject | object;
export type ForumCommunityProviderQuery = Record<string, ForumCommunityProviderExtensionValue>;
export interface ForumCommunityProviderResponse extends ForumCommunityJsonObject {}
export interface ForumCommunityProviderExtensionFields extends ForumCommunityJsonObject {}

export interface ForumCommunityClientOptions {
  baseUrl: string;
  apiKey: string;
  apiUsername: string;
  fetch?: typeof fetch;
}

export interface ForumCredentialStatusInput {
  baseUrl?: string;
  apiKeyConfigured?: boolean;
  apiUsername?: string;
  webhookSecretConfigured?: boolean;
  scopes?: string[];
}

export interface ForumCreateTopicInput {
  title: string;
  raw: string;
  category?: number;
  tags?: string[];
  archetype?: string;
  createdAt?: string;
}

export interface ForumCreateReplyInput {
  topicId: number;
  raw: string;
  replyToPostNumber?: number;
}

export interface ForumSearchInput {
  query: string;
  page?: number;
}

export interface ForumWebhookPayload {
  event?: string;
  eventType?: string;
  topic?: ForumCommunityJsonObject;
  post?: ForumCommunityJsonObject;
  user?: ForumCommunityJsonObject;
  [key: string]: ForumCommunityProviderExtensionValue;
}

export interface ParseForumWebhookOptions {
  secret?: string;
  requireSignature?: boolean;
  rawBody?: string;
}

export interface ForumCommunityClient {
  createTopic(input: ForumCreateTopicInput): Promise<ForumCommunityProviderResponse>;
  createReply(input: ForumCreateReplyInput): Promise<ForumCommunityProviderResponse>;
  getTopic(topicId: number): Promise<ForumCommunityProviderResponse>;
  getPost(postId: number): Promise<ForumCommunityProviderResponse>;
  search(input: ForumSearchInput): Promise<ForumCommunityProviderResponse>;
  latest(): Promise<ForumCommunityProviderResponse>;
  getCurrentUser(): Promise<ForumCommunityProviderResponse>;
}

export interface ForumLiveCheckOptions extends ForumCommunityClientOptions {
  client?: Pick<ForumCommunityClient, "getCurrentUser" | "latest">;
}

export function createForumCommunityClient(options: ForumCommunityClientOptions): ForumCommunityClient {
  const baseUrl = options.baseUrl.replace(/\/+$/, "");
  const fetchImpl = options.fetch ?? fetch;

  return {
    createTopic(input) {
      const body = new URLSearchParams({
        title: input.title,
        raw: input.raw,
      });
      if (input.category !== undefined) body.set("category", String(input.category));
      if (input.archetype) body.set("archetype", input.archetype);
      if (input.createdAt) body.set("created_at", input.createdAt);
      for (const tag of input.tags ?? []) body.append("tags[]", tag);
      return forumRequest<ForumCommunityJsonObject>({
        url: `${baseUrl}/posts.json`,
        method: "POST",
        options,
        fetch: fetchImpl,
        body,
      });
    },
    createReply(input) {
      const body = new URLSearchParams({
        topic_id: String(input.topicId),
        raw: input.raw,
      });
      if (input.replyToPostNumber !== undefined) {
        body.set("reply_to_post_number", String(input.replyToPostNumber));
      }
      return forumRequest<ForumCommunityJsonObject>({
        url: `${baseUrl}/posts.json`,
        method: "POST",
        options,
        fetch: fetchImpl,
        body,
      });
    },
    getTopic(topicId) {
      return forumRequest<ForumCommunityJsonObject>({
        url: `${baseUrl}/t/${encodeURIComponent(String(topicId))}.json`,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    getPost(postId) {
      return forumRequest<ForumCommunityJsonObject>({
        url: `${baseUrl}/posts/${encodeURIComponent(String(postId))}.json`,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    search(input) {
      const url = new URL(`${baseUrl}/search.json`);
      url.searchParams.set("q", input.query);
      if (input.page !== undefined) url.searchParams.set("page", String(input.page));
      return forumRequest<ForumCommunityJsonObject>({
        url: url.toString(),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    latest() {
      return forumRequest<ForumCommunityJsonObject>({
        url: `${baseUrl}/latest.json`,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    getCurrentUser() {
      return forumRequest<ForumCommunityJsonObject>({
        url: `${baseUrl}/session/current.json`,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
  };
}

export function forumCommunityCredentialStatuses(input: ForumCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: forumCommunityProviderManifest.id,
      requirementId: "forum-base-url",
      state: input.baseUrl ? "configured" : "missing",
      message: input.baseUrl ? "Forum base URL is configured." : "A forum base URL is required.",
    },
    {
      providerPackageId: forumCommunityProviderManifest.id,
      requirementId: "forum-api-key",
      state: input.apiKeyConfigured ? "configured" : "missing",
      scopes: input.scopes ?? [],
      message: input.apiKeyConfigured ? "Forum API key is configured." : "A forum API key is required.",
    },
    {
      providerPackageId: forumCommunityProviderManifest.id,
      requirementId: "forum-api-username",
      state: input.apiUsername ? "configured" : "missing",
      message: input.apiUsername ? "Forum API username is configured." : "A forum API username is required.",
    },
    {
      providerPackageId: forumCommunityProviderManifest.id,
      requirementId: "forum-webhook-secret",
      state: input.webhookSecretConfigured ? "configured" : "missing",
      message: input.webhookSecretConfigured
        ? "Forum webhook signature secret is configured."
        : "A forum webhook secret should be configured before accepting public community events.",
    },
  ];
}

export function createForumCommunityLiveChecks(options: ForumLiveCheckOptions) {
  return [{
    id: "current-user",
    description: "Forum API can read the current API user.",
    requiredCredentialIds: ["forum-base-url", "forum-api-key", "forum-api-username"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createForumCommunityClient(options);
      const currentUser = await client.getCurrentUser();
      if (context.signal?.aborted) throw new Error("Forum live current-user check aborted.");
      return {
        details: {
          username: typeof currentUser.username === "string" ? currentUser.username : undefined,
          id: typeof currentUser.id === "number" ? currentUser.id : undefined,
        },
      };
    },
  }];
}

export async function parseForumWebhook(
  request: Request,
  options: ParseForumWebhookOptions = {},
): Promise<ForumWebhookPayload> {
  const rawBody = options.rawBody ?? await request.text();
  const requireSignature = options.requireSignature ?? true;
  if (requireSignature) {
    if (!options.secret) throw new Error("Forum webhook secret is required to validate signatures.");
    const signature = request.headers.get("x-discourse-event-signature") ?? "";
    if (!validateForumWebhookSignature({ rawBody, signature, secret: options.secret })) {
      throw new Error("Forum webhook signature validation failed.");
    }
  }
  const parsed = JSON.parse(rawBody) as ForumWebhookPayload;
  const event = request.headers.get("x-discourse-event") ?? parsed.event;
  const eventType = request.headers.get("x-discourse-event-type") ?? parsed.eventType;
  return {
    ...parsed,
    ...(event ? { event } : {}),
    ...(eventType ? { eventType } : {}),
  };
}

export function validateForumWebhookSignature(input: {
  rawBody: string;
  signature: string;
  secret: string;
}): boolean {
  const expected = `sha256=${createHmac("sha256", input.secret).update(input.rawBody).digest("hex")}`;
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(input.signature);
  return expectedBuffer.length === actualBuffer.length && timingSafeEqual(expectedBuffer, actualBuffer);
}

async function forumRequest<T>(input: {
  url: string;
  method: "GET" | "POST";
  options: ForumCommunityClientOptions;
  fetch: typeof fetch;
  body?: URLSearchParams;
}): Promise<T> {
  const response = await input.fetch(input.url, {
    method: input.method,
    headers: {
      accept: "application/json",
      "Api-Key": input.options.apiKey,
      "Api-Username": input.options.apiUsername,
      ...(input.body ? { "content-type": "application/x-www-form-urlencoded" } : {}),
    },
    ...(input.body ? { body: input.body } : {}),
  });
  const text = await response.text();
  const body = (text ? JSON.parse(text) : {}) as T & { errors?: string[]; error?: string };
  if (!response.ok) {
    throw new Error(body.error ?? body.errors?.[0] ?? `Forum API returned ${response.status}.`);
  }
  return body as T;
}
