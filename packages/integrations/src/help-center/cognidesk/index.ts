import { createHmac, timingSafeEqual } from "node:crypto";
import {
  defineChannelContext,
  type ChannelContext,
  type ProviderCredentialStatusInput,
} from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";

export const cognideskHelpCenterProviderManifest = defineProviderPackage({
  id: "helpcenter.cognidesk",
  name: "Cognidesk Help Center",
  packageName: "@cognidesk/integrations",
  provider: "cognidesk",
  category: "helpCenter",
  trustLevel: "official",
  directions: ["receive-only", "inbound-only"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    {
      id: "helpcenter-source",
      label: "Help center source",
      description: "SDK-user-configured local or HTTP help center content source.",
      required: true,
    },
    {
      id: "helpcenter-webhook-secret",
      label: "Help center webhook secret",
      description: "Shared HMAC secret used to verify help center content webhooks.",
      required: false,
    },
  ],
  coverage: {
    scope: "local-protocol",
    notes: [
      "Coverage is limited to Cognidesk local or generic HTTP help-center source search/fetch/readiness plus Cognidesk HMAC webhook normalization.",
      "The package does not implement a named external help-center provider API for article/category/section/versioning/locale/permission/webhook administration; SDK users must wrap provider-specific APIs behind the configured source endpoints.",
    ],
    evidence: [],
  },
  capabilities: [
    {
      capability: "read-provider-object",
      label: "Fetch help center articles",
      description: "Fetches articles from SDK-user-configured local or generic HTTP help center sources.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "helpCenterArticle", label: "Help Center Article" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "search-provider-object",
      label: "Search help center articles",
      description: "Searches configured help center article sources using explicit source search parameters.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "helpCenterSearchResult", label: "Help Center Search Result" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "receive",
      label: "Receive help center content events",
      description: "Validates signed content webhooks and normalizes article ingestion events.",
      audiences: ["internal-support", "mixed"],
      providerObjects: [{ kind: "helpCenterWebhook", label: "Help Center Webhook" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "helpCenter.webhook-signature",
      label: "Validate help center webhook signatures",
      description: "Validates HMAC-SHA256 signatures for generic help center content webhooks.",
      audiences: ["internal-support"],
      providerObjects: [{ kind: "signedHelpCenterWebhook", label: "Signed Help Center Webhook" }],
      requiresCredential: true,
      exposesSensitiveData: true,
      extension: true,
    },
  ],
  privacyNotes: [
    "Help center content can include public support guidance, draft metadata, author data, locale data, and SDK-user-defined source metadata.",
    "HTTP headers, access tokens, and webhook secrets stay server-side and are represented in Studio only as readiness state.",
  ],
  limitations: [
    "Source selection, article visibility, indexing cadence, ranking, retention, locale fallback, and answer policy are owned by SDK user configuration.",
    "Local search is explicit lexical filtering; semantic ranking belongs in a configured search provider or evaluator.",
  ],
  maintainers: [{ name: "Cognidesk", type: "official" }],
  metadata: {
    channelCoverage: {
      articles: "typed-read-search",
      readiness: "typed-readiness",
      contentWebhooks: "typed-validate-parse",
      providerSpecificAdminLocalePermissionVersioning: "not-covered",
    },
  },
});

export type HelpCenterJsonPrimitive = string | number | boolean | null;
export type HelpCenterJsonValue =
  | HelpCenterJsonPrimitive
  | HelpCenterJsonObject
  | readonly HelpCenterJsonValue[];
export type HelpCenterProviderExtensionValue = HelpCenterJsonValue | object | undefined;
export interface HelpCenterJsonObject {
  [key: string]: HelpCenterProviderExtensionValue;
}
export type HelpCenterProviderPayload = HelpCenterJsonObject | object;
export type HelpCenterProviderQuery = Record<string, HelpCenterProviderExtensionValue>;
export interface HelpCenterProviderResponse extends HelpCenterJsonObject {}
export interface HelpCenterProviderExtensionFields extends HelpCenterJsonObject {}

export interface HelpCenterArticle {
  id: string;
  title: string;
  url?: string;
  body?: string;
  summary?: string;
  locale?: string;
  tags?: string[];
  updatedAt?: string;
  metadata?: HelpCenterProviderExtensionFields;
}

export interface HelpCenterSearchInput {
  query: string;
  locale?: string;
  limit?: number;
  cursor?: string;
}

export interface HelpCenterSearchResult {
  articles: HelpCenterArticle[];
  cursor?: string;
  metadata?: HelpCenterProviderExtensionFields;
}

export interface LocalHelpCenterSource {
  id: string;
  type: "local";
  articles: HelpCenterArticle[];
}

export interface HttpHelpCenterSource {
  id: string;
  type: "http";
  baseUrl: string;
  headers?: Record<string, string>;
  endpoints?: {
    article?: string;
    search?: string;
    readiness?: string;
  };
  fetch?: typeof fetch;
}

export type HelpCenterSource = LocalHelpCenterSource | HttpHelpCenterSource;

export interface HelpCenterClient {
  search(input: HelpCenterSearchInput): Promise<HelpCenterSearchResult>;
  fetchArticle(articleId: string): Promise<HelpCenterArticle>;
  readiness(): Promise<HelpCenterProviderResponse>;
}

export interface HelpCenterIngestionEvent {
  type: "channel.helpCenter.article.ingested";
  id: string;
  occurredAt: string;
  channel: ChannelContext;
  article: HelpCenterArticle;
  sourceId: string;
  metadata?: HelpCenterProviderExtensionFields;
}

export interface HelpCenterSearchEvent {
  type: "channel.helpCenter.search.performed";
  id: string;
  occurredAt: string;
  channel: ChannelContext;
  query: HelpCenterSearchInput;
  resultCount: number;
  sourceId: string;
  metadata?: HelpCenterProviderExtensionFields;
}

export interface ParseHelpCenterWebhookOptions {
  secret?: string;
  requireSignature?: boolean;
  signatureHeader?: string;
  rawBody?: string;
}

export interface HelpCenterWebhookPayload {
  event: string;
  sourceId?: string;
  article?: HelpCenterArticle;
  metadata?: HelpCenterProviderExtensionFields;
}

export interface HelpCenterCredentialStatusInput {
  sourceConfigured?: boolean;
  webhookSecretConfigured?: boolean;
  scopes?: string[];
}

export function defineHelpCenterSource(source: HelpCenterSource): HelpCenterSource {
  if (!source.id.trim()) throw new Error("Help center source id is required.");
  if (source.type === "local") {
    const ids = new Set<string>();
    for (const article of source.articles) {
      validateArticle(article);
      if (ids.has(article.id)) throw new Error(`Help center source '${source.id}' has duplicate article id '${article.id}'.`);
      ids.add(article.id);
    }
    return source;
  }
  if (!source.baseUrl.trim()) throw new Error(`Help center source '${source.id}' requires a baseUrl.`);
  return {
    ...source,
    baseUrl: source.baseUrl.replace(/\/+$/, ""),
  };
}

export function createHelpCenterClient(sourceInput: HelpCenterSource): HelpCenterClient {
  const source = defineHelpCenterSource(sourceInput);
  if (source.type === "local") return createLocalHelpCenterClient(source);
  return createHttpHelpCenterClient(source);
}

export function normalizeHelpCenterIngestionEvent(input: {
  sourceId: string;
  article: HelpCenterArticle;
  occurredAt?: string;
  metadata?: HelpCenterProviderExtensionFields;
}): HelpCenterIngestionEvent {
  validateArticle(input.article);
  const occurredAt = input.occurredAt ?? input.article.updatedAt ?? new Date().toISOString();
  return {
    type: "channel.helpCenter.article.ingested",
    id: `${input.sourceId}:${input.article.id}:${occurredAt}`,
    occurredAt,
    channel: defineChannelContext({
      channelId: cognideskHelpCenterProviderManifest.id,
      kind: "helpCenter",
      provider: cognideskHelpCenterProviderManifest.provider,
      externalMessageId: input.article.id,
    }),
    article: input.article,
    sourceId: input.sourceId,
    ...(input.metadata ? { metadata: input.metadata } : {}),
  };
}

export function normalizeHelpCenterSearchEvent(input: {
  sourceId: string;
  query: HelpCenterSearchInput;
  result: HelpCenterSearchResult;
  occurredAt?: string;
  metadata?: HelpCenterProviderExtensionFields;
}): HelpCenterSearchEvent {
  const occurredAt = input.occurredAt ?? new Date().toISOString();
  return {
    type: "channel.helpCenter.search.performed",
    id: `${input.sourceId}:search:${occurredAt}`,
    occurredAt,
    channel: defineChannelContext({
      channelId: cognideskHelpCenterProviderManifest.id,
      kind: "helpCenter",
      provider: cognideskHelpCenterProviderManifest.provider,
    }),
    query: input.query,
    resultCount: input.result.articles.length,
    sourceId: input.sourceId,
    ...(input.metadata ? { metadata: input.metadata } : {}),
  };
}

export async function parseHelpCenterWebhook(
  request: Request,
  options: ParseHelpCenterWebhookOptions = {},
): Promise<HelpCenterWebhookPayload> {
  const rawBody = options.rawBody ?? await request.text();
  const requireSignature = options.requireSignature ?? true;
  if (requireSignature) {
    if (!options.secret) throw new Error("Help center webhook secret is required to validate signatures.");
    const header = options.signatureHeader ?? "x-cognidesk-helpcenter-signature";
    const signature = request.headers.get(header) ?? "";
    if (!validateHelpCenterWebhookSignature({ rawBody, signature, secret: options.secret })) {
      throw new Error("Help center webhook signature validation failed.");
    }
  }
  const parsed = parseJsonObject(rawBody, "Help center webhook body must be a JSON object.");
  if (typeof parsed.event !== "string" || !parsed.event.trim()) {
    throw new Error("Help center webhook event is required.");
  }
  const payload: HelpCenterWebhookPayload = {
    event: parsed.event,
    ...(typeof parsed.sourceId === "string" ? { sourceId: parsed.sourceId } : {}),
    ...(isArticle(parsed.article) ? { article: parsed.article } : {}),
    ...(isRecord(parsed.metadata) ? { metadata: parsed.metadata } : {}),
  };
  if (payload.article) validateArticle(payload.article);
  return payload;
}

export function validateHelpCenterWebhookSignature(input: {
  rawBody: string;
  signature: string;
  secret: string;
}): boolean {
  const expected = `sha256=${createHmac("sha256", input.secret).update(input.rawBody).digest("hex")}`;
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(input.signature);
  return expectedBuffer.length === actualBuffer.length && timingSafeEqual(expectedBuffer, actualBuffer);
}

export function helpCenterCredentialStatuses(input: HelpCenterCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: cognideskHelpCenterProviderManifest.id,
      requirementId: "helpcenter-source",
      state: input.sourceConfigured ? "configured" : "missing",
      scopes: input.scopes ?? [],
      message: input.sourceConfigured ? "Help center source is configured." : "A help center content source is required.",
    },
    {
      providerPackageId: cognideskHelpCenterProviderManifest.id,
      requirementId: "helpcenter-webhook-secret",
      state: input.webhookSecretConfigured ? "configured" : "missing",
      message: input.webhookSecretConfigured
        ? "Help center webhook signature secret is configured."
        : "Configure a help center webhook secret before accepting content events.",
    },
  ];
}

function createLocalHelpCenterClient(source: LocalHelpCenterSource): HelpCenterClient {
  return {
    async search(input) {
      const query = input.query.toLocaleLowerCase();
      const limit = input.limit ?? source.articles.length;
      const articles = source.articles
        .filter((article) => !input.locale || article.locale === input.locale)
        .filter((article) => articleMatchesQuery(article, query))
        .slice(0, limit);
      return { articles };
    },
    async fetchArticle(articleId) {
      const article = source.articles.find((candidate) => candidate.id === articleId);
      if (!article) throw new Error(`Help center article '${articleId}' was not found.`);
      return article;
    },
    async readiness() {
      return { sourceId: source.id, type: "local", articleCount: source.articles.length };
    },
  };
}

function createHttpHelpCenterClient(source: HttpHelpCenterSource): HelpCenterClient {
  const fetchImpl = source.fetch ?? fetch;
  return {
    async search(input) {
      const endpoint = source.endpoints?.search ?? "/search";
      const url = new URL(joinUrl(source.baseUrl, endpoint));
      url.searchParams.set("query", input.query);
      if (input.locale) url.searchParams.set("locale", input.locale);
      if (input.limit !== undefined) url.searchParams.set("limit", String(input.limit));
      if (input.cursor) url.searchParams.set("cursor", input.cursor);
      const response = await helpCenterRequest<unknown>({ url: url.toString(), fetch: fetchImpl, source });
      return parseSearchResult(response);
    },
    async fetchArticle(articleId) {
      const template = source.endpoints?.article ?? "/articles/:id";
      const url = joinUrl(source.baseUrl, template.replace(":id", encodeURIComponent(articleId)));
      const response = await helpCenterRequest<unknown>({ url, fetch: fetchImpl, source });
      const article = isRecord(response) && isArticle(response.article) ? response.article : response;
      if (!isArticle(article)) throw new Error(`Help center article '${articleId}' response is invalid.`);
      validateArticle(article);
      return article;
    },
    async readiness() {
      const endpoint = source.endpoints?.readiness ?? "/ready";
      return helpCenterRequest<HelpCenterJsonObject>({
        url: joinUrl(source.baseUrl, endpoint),
        fetch: fetchImpl,
        source,
      });
    },
  };
}

async function helpCenterRequest<T>(input: {
  url: string;
  fetch: typeof fetch;
  source: HttpHelpCenterSource;
}): Promise<T> {
  const response = await input.fetch(input.url, {
    method: "GET",
    headers: {
      accept: "application/json",
      ...(input.source.headers ?? {}),
    },
  });
  const text = await response.text();
  const body = (text ? JSON.parse(text) : {}) as T & { error?: string; message?: string };
  if (!response.ok) throw new Error(body.error ?? body.message ?? `Help center source returned ${response.status}.`);
  return body as T;
}

function parseSearchResult(response: unknown): HelpCenterSearchResult {
  if (isRecord(response) && Array.isArray(response.articles)) {
    const articles = response.articles.filter(isArticle);
    for (const article of articles) validateArticle(article);
    return {
      articles,
      ...(typeof response.cursor === "string" ? { cursor: response.cursor } : {}),
      ...(isRecord(response.metadata) ? { metadata: response.metadata } : {}),
    };
  }
  if (Array.isArray(response)) {
    const articles = response.filter(isArticle);
    for (const article of articles) validateArticle(article);
    return { articles };
  }
  throw new Error("Help center search response is invalid.");
}

function articleMatchesQuery(article: HelpCenterArticle, query: string): boolean {
  const text = [
    article.id,
    article.title,
    article.body ?? "",
    article.summary ?? "",
    ...(article.tags ?? []),
  ].join(" ").toLocaleLowerCase();
  return text.includes(query);
}

function validateArticle(article: HelpCenterArticle): void {
  if (!article.id.trim()) throw new Error("Help center article id is required.");
  if (!article.title.trim()) throw new Error(`Help center article '${article.id}' requires a title.`);
}

function joinUrl(baseUrl: string, path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl.replace(/\/+$/, "")}${normalizedPath}`;
}

function parseJsonObject(rawBody: string, message: string): HelpCenterJsonObject {
  const parsed = JSON.parse(rawBody) as unknown;
  if (!isRecord(parsed)) throw new Error(message);
  return parsed;
}

function isArticle(value: unknown): value is HelpCenterArticle {
  return isRecord(value)
    && typeof value.id === "string"
    && typeof value.title === "string";
}

function isRecord(value: unknown): value is HelpCenterJsonObject {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}
