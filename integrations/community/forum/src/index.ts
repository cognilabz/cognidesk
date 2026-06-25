import { createHmac, timingSafeEqual } from "node:crypto";
import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import {
  providerJsonRequest,
  type ProviderHttpMethod,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
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

export type ForumCommunityProviderClient = ForumCommunityClient;

export interface ForumCommunityClientOptions {
  providerClient?: ForumCommunityProviderClient;
  client?: ForumCommunityClient;
  baseUrl?: string;
  apiKey?: string;
  apiUsername?: string;
  fetch?: typeof fetch;
  signal?: AbortSignal;
  timeoutMs?: number;
  retry?: number | ProviderJsonRetryOptions;
}

export interface ProviderJsonRetryOptions {
  attempts?: number;
  statusCodes?: readonly number[];
  baseDelayMs?: number;
  maxDelayMs?: number;
}

export interface ForumLiveCheckOptions {
  client?: Pick<ForumCommunityClient, "getCurrentUser" | "latest">;
  unavailableReason?: string;
}

const forumCommunityProviderClientUnavailable =
  "Forum provider client is not configured. Inject a ForumCommunityProviderClient or configure baseUrl, apiKey, and apiUsername for the built-in Discourse-compatible REST adapter.";

export function createForumCommunityClient(
  options: ForumCommunityClientOptions = {},
): ForumCommunityClient {
  if (options.client) return options.client;
  if (options.providerClient) return options.providerClient;
  if (hasForumRestConfig(options)) return createDiscourseRestForumClient(options);
  return createForumCommunityUnavailableClient();
}

export function createForumCommunityUnavailableClient(
  reason = forumCommunityProviderClientUnavailable,
): ForumCommunityClient {
  const unavailable = () => Promise.reject(new Error(reason));
  return {
    createTopic: unavailable,
    createReply: unavailable,
    getTopic: unavailable,
    getPost: unavailable,
    search: unavailable,
    latest: unavailable,
    getCurrentUser: unavailable,
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

export function createForumCommunityLiveChecks(options: ForumLiveCheckOptions = {}) {
  return [{
    id: "current-user",
    description: "Host-injected forum provider client can read the current API user.",
    requiredCredentialIds: ["forum-base-url", "forum-api-key", "forum-api-username"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createForumCommunityUnavailableClient(options.unavailableReason);
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

function hasForumRestConfig(options: ForumCommunityClientOptions): boolean {
  return Boolean(options.baseUrl || options.apiKey || options.apiUsername || options.fetch);
}

function createDiscourseRestForumClient(options: ForumCommunityClientOptions): ForumCommunityClient {
  return {
    createTopic(input) {
      return forumRequest(options, {
        method: "POST",
        path: "/posts.json",
        body: stripUndefined({
          title: input.title,
          raw: input.raw,
          category: input.category,
          tags: input.tags,
          archetype: input.archetype,
          created_at: input.createdAt,
        }),
      });
    },
    createReply(input) {
      return forumRequest(options, {
        method: "POST",
        path: "/posts.json",
        body: stripUndefined({
          topic_id: input.topicId,
          raw: input.raw,
          reply_to_post_number: input.replyToPostNumber,
        }),
      });
    },
    getTopic(topicId) {
      return forumRequest(options, {
        path: "/t/{topicId}.json",
        pathParams: { topicId },
      });
    },
    getPost(postId) {
      return forumRequest(options, {
        path: "/posts/{postId}.json",
        pathParams: { postId },
      });
    },
    search(input) {
      return forumRequest(options, {
        path: "/search.json",
        query: stripUndefined({
          q: input.query,
          page: input.page,
        }),
      });
    },
    latest() {
      return forumRequest(options, {
        path: "/latest.json",
      });
    },
    getCurrentUser() {
      return forumRequest(options, {
        path: "/session/current.json",
      });
    },
  };
}

async function forumRequest<T = ForumCommunityProviderResponse>(
  options: ForumCommunityClientOptions,
  request: {
    path: string;
    method?: ProviderHttpMethod | undefined;
    pathParams?: Record<string, string | number | boolean | undefined>;
    query?: ForumCommunityProviderQuery | undefined;
    body?: unknown;
  },
): Promise<T> {
  return providerJsonRequestWithControls<T>({
    baseUrl: requiredForumBaseUrl(options),
    path: request.path,
    method: request.method ?? "GET",
    pathParams: request.pathParams,
    query: forumProviderQuery(request.query),
    body: request.body,
    headers: { "Api-Username": requiredForumApiUsername(options) },
    apiKey: requiredForumApiKey(options),
    apiKeyHeaderName: "Api-Key",
    fetch: options.fetch,
    signal: options.signal,
    timeoutMs: options.timeoutMs,
    retry: options.retry,
    providerName: "Forum",
  });
}

type ProviderJsonRequestWithControls = Parameters<typeof providerJsonRequest>[0] & {
  signal?: AbortSignal | undefined;
  timeoutMs?: number | undefined;
  retry?: number | ProviderJsonRetryOptions | undefined;
};

function providerJsonRequestWithControls<T = unknown>(input: ProviderJsonRequestWithControls): Promise<T> {
  return providerJsonRequest<T>(input as Parameters<typeof providerJsonRequest>[0]);
}

function requiredForumBaseUrl(options: ForumCommunityClientOptions): string {
  if (!options.baseUrl?.trim()) throw new Error("Forum REST adapter requires baseUrl.");
  return options.baseUrl;
}

function requiredForumApiKey(options: ForumCommunityClientOptions): string {
  if (!options.apiKey?.trim()) throw new Error("Forum REST adapter requires apiKey.");
  return options.apiKey;
}

function requiredForumApiUsername(options: ForumCommunityClientOptions): string {
  if (!options.apiUsername?.trim()) throw new Error("Forum REST adapter requires apiUsername.");
  return options.apiUsername;
}

function forumProviderQuery(query?: ForumCommunityProviderQuery): Record<string, ProviderQueryValue> | undefined {
  if (!query) return undefined;
  const entries = Object.entries(query)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => [key, forumProviderQueryValue(value)] as const);
  return Object.fromEntries(entries);
}

function stripUndefined<T extends Record<string, unknown>>(input: T): ForumCommunityProviderQuery {
  return Object.fromEntries(Object.entries(input).filter(([, value]) => value !== undefined)) as ForumCommunityProviderQuery;
}

function forumProviderQueryValue(value: ForumCommunityProviderExtensionValue): ProviderQueryValue {
  if (Array.isArray(value)) return value.map((item) => typeof item === "object" ? JSON.stringify(item) : item) as ProviderQueryValue;
  if (isRecord(value)) return JSON.stringify(value);
  return value as ProviderQueryValue;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}
