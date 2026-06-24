import { createHmac, timingSafeEqual } from "node:crypto";
import {
  defineChannelContext,
  type ChannelContext,
  type ProviderCredentialStatusInput,
} from "@cognidesk/core";
import { cognideskHelpCenterProviderManifest } from "./manifest.js";

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
  type: "channel.help-center.article.ingested";
  id: string;
  occurredAt: string;
  channel: ChannelContext;
  article: HelpCenterArticle;
  sourceId: string;
  metadata?: HelpCenterProviderExtensionFields;
}

export interface HelpCenterSearchEvent {
  type: "channel.help-center.search.performed";
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
    type: "channel.help-center.article.ingested",
    id: `${input.sourceId}:${input.article.id}:${occurredAt}`,
    occurredAt,
    channel: defineChannelContext({
      channelId: cognideskHelpCenterProviderManifest.id,
      kind: "help-center",
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
    type: "channel.help-center.search.performed",
    id: `${input.sourceId}:search:${occurredAt}`,
    occurredAt,
    channel: defineChannelContext({
      channelId: cognideskHelpCenterProviderManifest.id,
      kind: "help-center",
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
    const header = options.signatureHeader ?? "x-cognidesk-help-center-signature";
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
      requirementId: "help-center-source",
      state: input.sourceConfigured ? "configured" : "missing",
      scopes: input.scopes ?? [],
      message: input.sourceConfigured ? "Help center source is configured." : "A help center content source is required.",
    },
    {
      providerPackageId: cognideskHelpCenterProviderManifest.id,
      requirementId: "help-center-webhook-secret",
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
