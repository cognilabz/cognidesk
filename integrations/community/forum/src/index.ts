import { createHmac, timingSafeEqual } from "node:crypto";
import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { forumCommunityProviderManifest } from "./manifest.js";

export { createForumCommunityIntegration } from "./integration.js";
export type {
  ForumCommunityIntegrationOptions,
  ParseForumWebhookOperationInput,
} from "./integration.js";
export { forumCommunityProviderManifest } from "./manifest.js";

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
