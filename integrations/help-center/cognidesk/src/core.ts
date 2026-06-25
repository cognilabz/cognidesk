import { createHmac, timingSafeEqual } from "node:crypto";
import {
  defineChannelContext,
  type ChannelContext,
  type ProviderCredentialStatusInput,
} from "@cognidesk/core";
import {
  providerJsonRequest,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
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
  baseUrl?: string;
  accessToken?: string;
  apiKey?: string;
  headers?: Record<string, string>;
  endpoints?: HelpCenterHttpEndpoints;
  fetch?: typeof fetch;
  providerClient?: HelpCenterProviderClient;
  metadata?: HelpCenterProviderExtensionFields;
}

export type HelpCenterSource = LocalHelpCenterSource | HttpHelpCenterSource;

export type HelpCenterHttpMethod = "GET" | "POST";

export interface HelpCenterHttpEndpoints {
  search?: string;
  searchMethod?: HelpCenterHttpMethod;
  article?: string;
  readiness?: string;
}

export interface HelpCenterClient {
  search(input: HelpCenterSearchInput): Promise<HelpCenterSearchResult>;
  fetchArticle(articleId: string): Promise<HelpCenterArticle>;
  readiness(): Promise<HelpCenterProviderResponse>;
}

export interface HelpCenterProviderClient extends HelpCenterClient {}

export type HelpCenterSourceClientFactory = (source: HttpHelpCenterSource) => HelpCenterProviderClient | undefined;

export interface CreateHelpCenterClientOptions {
  providerClient?: HelpCenterProviderClient;
  sourceClientFactory?: HelpCenterSourceClientFactory;
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
  validateHttpHelpCenterSource(source);
  return source;
}

export function createHelpCenterClient(
  sourceInput: HelpCenterSource,
  options: CreateHelpCenterClientOptions = {},
): HelpCenterClient {
  const source = defineHelpCenterSource(sourceInput);
  if (source.type === "local") return createLocalHelpCenterClient(source);
  return createRemoteHelpCenterClient(source, options);
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

function createRemoteHelpCenterClient(
  source: HttpHelpCenterSource,
  options: CreateHelpCenterClientOptions,
): HelpCenterClient {
  const providerClient = requireHelpCenterProviderClient(
    source.providerClient
      ?? options.providerClient
      ?? options.sourceClientFactory?.(source)
      ?? createDefaultHelpCenterSourceClient(source, options),
  );

  return {
    search(input) {
      return providerClient.search(input);
    },
    fetchArticle(articleId) {
      return providerClient.fetchArticle(articleId);
    },
    readiness() {
      return providerClient.readiness();
    },
  };
}

export function createHelpCenterSourceClientFactory(
  options: Pick<CreateHelpCenterClientOptions, "fetch" | "signal" | "timeoutMs" | "retry"> = {},
): HelpCenterSourceClientFactory {
  return (source) => createDefaultHelpCenterSourceClient(source, options);
}

export function createDefaultHelpCenterSourceClient(
  source: HttpHelpCenterSource,
  options: Pick<CreateHelpCenterClientOptions, "fetch" | "signal" | "timeoutMs" | "retry"> = {},
): HelpCenterProviderClient {
  if (source.baseUrl) return createHttpHelpCenterSourceClient(source, options);
  return createUnconfiguredHelpCenterProviderClient(source.id);
}

export function createHttpHelpCenterSourceClient(
  source: HttpHelpCenterSource,
  options: Pick<CreateHelpCenterClientOptions, "fetch" | "signal" | "timeoutMs" | "retry"> = {},
): HelpCenterProviderClient {
  const fetchImpl = guardHelpCenterFetch(source.fetch ?? options.fetch, source.id);
  return {
    async search(input) {
      const method = source.endpoints?.searchMethod ?? "GET";
      const path = source.endpoints?.search ?? "/articles/search";
      const query = stripUndefined({
        query: input.query,
        locale: input.locale,
        limit: input.limit,
        cursor: input.cursor,
      });
      const body = method === "POST" ? input : undefined;
      const response = await helpCenterHttpRequest(source, fetchImpl, {
        method,
        path,
        query: method === "GET" ? query : undefined,
        body,
        signal: options.signal,
        timeoutMs: options.timeoutMs,
        retry: options.retry,
      });
      return normalizeRemoteSearchResult(response);
    },
    async fetchArticle(articleId) {
      const response = await helpCenterHttpRequest(source, fetchImpl, {
        path: source.endpoints?.article ?? "/articles/{articleId}",
        pathParams: { articleId },
        signal: options.signal,
        timeoutMs: options.timeoutMs,
        retry: options.retry,
      });
      return normalizeRemoteArticle(response);
    },
    async readiness() {
      return helpCenterHttpRequest(source, fetchImpl, {
        path: source.endpoints?.readiness ?? "/readiness",
        signal: options.signal,
        timeoutMs: options.timeoutMs,
        retry: options.retry,
      }) as Promise<HelpCenterProviderResponse>;
    },
  };
}

export function guardHelpCenterFetch(fetchImpl: typeof fetch | undefined, sourceId: string): typeof fetch {
  const candidate = fetchImpl ?? globalThis.fetch;
  if (typeof candidate !== "function") {
    throw new Error(`Help center HTTP source '${sourceId}' requires a fetch implementation.`);
  }
  return candidate.bind(globalThis) as typeof fetch;
}

function requireHelpCenterProviderClient(client: HelpCenterProviderClient): HelpCenterProviderClient {
  for (const method of ["search", "fetchArticle", "readiness"] as const) {
    if (typeof client[method] !== "function") {
      throw new Error(`Help center providerClient must implement ${method}(); configure a local source, HTTP source, or providerClient.`);
    }
  }
  return client;
}

export function createUnconfiguredHelpCenterProviderClient(sourceId = "remote-help-center"): HelpCenterProviderClient {
  const fail = async (..._args: unknown[]): Promise<never> => {
    throw new Error(
      `Configure baseUrl for help center source '${sourceId}' or pass a HelpCenterClient/providerClient.`,
    );
  };
  return {
    search: fail,
    fetchArticle: fail,
    readiness: fail,
  };
}

async function helpCenterHttpRequest(
  source: HttpHelpCenterSource,
  fetchImpl: typeof fetch,
  request: {
    path: string;
    method?: HelpCenterHttpMethod | undefined;
    pathParams?: Record<string, string | number | boolean | undefined>;
    query?: HelpCenterProviderQuery | undefined;
    body?: unknown;
    signal?: AbortSignal | undefined;
    timeoutMs?: number | undefined;
    retry?: number | ProviderJsonRetryOptions | undefined;
  },
): Promise<unknown> {
  return providerJsonRequestWithControls({
    baseUrl: requiredHelpCenterBaseUrl(source),
    path: request.path,
    method: request.method ?? "GET",
    pathParams: request.pathParams,
    query: helpCenterProviderQuery(request.query),
    body: request.body,
    headers: source.headers,
    accessToken: source.accessToken,
    apiKey: source.apiKey,
    apiKeyHeaderName: source.apiKey ? "x-api-key" : undefined,
    fetch: fetchImpl,
    signal: request.signal,
    timeoutMs: request.timeoutMs,
    retry: request.retry,
    providerName: `Help center HTTP source '${source.id}'`,
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

function requiredHelpCenterBaseUrl(source: HttpHelpCenterSource): string {
  if (!source.baseUrl?.trim()) throw new Error(`Help center HTTP source '${source.id}' requires baseUrl.`);
  return source.baseUrl;
}

function normalizeRemoteSearchResult(value: unknown): HelpCenterSearchResult {
  if (Array.isArray(value)) return { articles: value.map(normalizeRemoteArticle) };
  if (!isRecord(value)) throw new Error("Help center HTTP search response must be a JSON object or array.");
  const sourceArticles = Array.isArray(value.articles)
    ? value.articles
    : Array.isArray(value.data)
      ? value.data
      : undefined;
  if (!sourceArticles) throw new Error("Help center HTTP search response must include articles or data.");
  const result: HelpCenterSearchResult = {
    articles: sourceArticles.map(normalizeRemoteArticle),
  };
  if (typeof value.cursor === "string") result.cursor = value.cursor;
  if (isRecord(value.metadata)) result.metadata = value.metadata;
  return result;
}

function normalizeRemoteArticle(value: unknown): HelpCenterArticle {
  const article = isRecord(value) && isRecord(value.article) ? value.article : value;
  if (!isArticle(article)) throw new Error("Help center HTTP article response must include an article id and title.");
  validateArticle(article);
  return article;
}

function stripUndefined<T extends Record<string, unknown>>(input: T): HelpCenterProviderQuery {
  return Object.fromEntries(Object.entries(input).filter(([, value]) => value !== undefined)) as HelpCenterProviderQuery;
}

function helpCenterProviderQuery(query?: HelpCenterProviderQuery): Record<string, ProviderQueryValue> | undefined {
  if (!query) return undefined;
  const entries = Object.entries(query)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => [key, helpCenterProviderQueryValue(value)] as const);
  return Object.fromEntries(entries);
}

function helpCenterProviderQueryValue(value: HelpCenterProviderExtensionValue): ProviderQueryValue {
  if (Array.isArray(value)) return value.map((item) => typeof item === "object" ? JSON.stringify(item) : item) as ProviderQueryValue;
  if (isRecord(value)) return JSON.stringify(value);
  return value as ProviderQueryValue;
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

function validateHttpHelpCenterSource(source: HttpHelpCenterSource): void {
  if (source.baseUrl !== undefined) {
    try {
      new URL(source.baseUrl);
    } catch {
      throw new Error(`Help center HTTP source '${source.id}' baseUrl must be an absolute URL.`);
    }
  }
  if (source.endpoints?.searchMethod && !["GET", "POST"].includes(source.endpoints.searchMethod)) {
    throw new Error(`Help center HTTP source '${source.id}' searchMethod must be GET or POST.`);
  }
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
