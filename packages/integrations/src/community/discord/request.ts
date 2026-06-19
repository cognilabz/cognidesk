import type {
  DiscordCommunityJsonObject,
  DiscordCommunityProviderExtensionValue,
  DiscordCommunityProviderPayload,
  DiscordCommunityProviderQuery,
  DiscordHttpMethod,
  DiscordMessageInput,
} from "./contracts.js";

export function discordApiUrl(baseUrl: string, version: string, path: string) {
  return new URL(`${baseUrl}/${version.replace(/^\/+|\/+$/g, "")}${path}`);
}

export function discordOperationUrl(
  apiBaseUrl: string,
  apiVersion: string,
  path: string,
  query?: DiscordCommunityProviderQuery,
) {
  const url = discordApiUrl(apiBaseUrl, apiVersion, path.startsWith("/") ? path : `/${path}`);
  appendDiscordQuery(url.searchParams, query);
  return url;
}

export function applyDiscordPathParams(path: string, pathParams?: Record<string, string | number>) {
  return path.replace(/\{([^}]+)\}/g, (_placeholder, key: string) => {
    const value = pathParams?.[key];
    if (value === undefined || value === null || value === "") {
      throw new Error(`Discord HTTP API operation requires path parameter '${key}'.`);
    }
    return encodePath(value);
  });
}

export function discordMessageBody(input: DiscordMessageInput) {
  return stripUndefined({
    content: input.content,
    tts: input.tts,
    embeds: input.embeds,
    allowed_mentions: input.allowedMentions,
    message_reference: input.messageReference,
    components: input.components,
    sticker_ids: input.stickerIds,
    attachments: input.attachments,
    flags: input.flags,
    ...(input.additionalFields ?? {}),
  });
}

export async function discordRequest<T>(input: {
  url: URL;
  method: DiscordHttpMethod;
  options: { botToken: string };
  fetch: typeof fetch;
  body?: DiscordCommunityProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
  reason?: string | undefined;
  auth?: "bot" | "none" | undefined;
}): Promise<T> {
  const requestBody = discordRequestBody(input.body);
  const response = await input.fetch(input.url.toString(), {
    method: input.method,
    headers: stripUndefined({
      accept: "application/json",
      ...(input.auth === "none" ? {} : { authorization: `Bot ${input.options.botToken}` }),
      ...(requestBody.contentType ? { "content-type": requestBody.contentType } : {}),
      ...(input.reason ? { "x-audit-log-reason": input.reason } : {}),
      ...(input.headers ?? {}),
    }) as HeadersInit,
    ...(requestBody.body ? { body: requestBody.body } : {}),
  });
  return parseDiscordResponse<T>(response);
}

export async function discordWebhookRequest<T>(input: {
  url: URL;
  fetch: typeof fetch;
  body?: DiscordCommunityProviderPayload;
}): Promise<T> {
  const response = await input.fetch(input.url.toString(), {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  return parseDiscordResponse<T>(response);
}

export function discordWebhookUrl(webhookUrl: string, apiBaseUrl: string) {
  const url = new URL(webhookUrl);
  const apiUrl = new URL(apiBaseUrl);
  const apiPath = apiUrl.pathname.replace(/\/+$/, "");
  const webhookPathPattern = new RegExp(`^${escapeRegExp(apiPath || "")}/webhooks/[^/]+/[^/]+$`);
  if (url.origin !== apiUrl.origin || !webhookPathPattern.test(url.pathname)) {
    throw new Error("Discord webhookUrl must be a Discord webhook execution URL for the configured Discord API origin.");
  }
  return url;
}

export function encodePath(value: string | number) {
  return encodeURIComponent(String(value));
}

export function applyOptionalStringQuery(url: URL, key: string, value?: string) {
  if (value) url.searchParams.set(key, value);
}

export function applyOptionalNumberQuery(url: URL, key: string, value?: number) {
  if (value !== undefined) url.searchParams.set(key, String(value));
}

export function stripUndefined<T extends DiscordCommunityJsonObject>(input: T): T {
  return Object.fromEntries(Object.entries(input).filter(([, value]) => value !== undefined)) as T;
}

function appendDiscordQuery(params: URLSearchParams, query?: DiscordCommunityProviderQuery) {
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value === undefined || value === null || value === "") continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined && item !== null && item !== "") params.append(key, String(item));
      }
      continue;
    }
    params.set(key, String(value));
  }
}

async function parseDiscordResponse<T>(response: Response): Promise<T> {
  const text = await response.text();
  const body = text ? JSON.parse(text) as T & DiscordErrorResponse : {} as T & DiscordErrorResponse;
  if (!response.ok) {
    const message = typeof body.message === "string" ? body.message : `Discord API request failed with status ${response.status}.`;
    const code = typeof body.code === "number" || typeof body.code === "string" ? ` (${body.code})` : "";
    throw new Error(`${message}${code}`);
  }
  return body as T;
}

interface DiscordErrorResponse {
  message?: string;
  code?: number | string;
  errors?: DiscordCommunityProviderExtensionValue;
}

function discordRequestBody(input: unknown): { body?: BodyInit; contentType?: string } {
  if (input === undefined) return {};
  if (typeof FormData !== "undefined" && input instanceof FormData) return { body: input };
  if (input instanceof URLSearchParams) {
    return { body: input, contentType: "application/x-www-form-urlencoded; charset=utf-8" };
  }
  if (typeof input === "string" || input instanceof Blob || input instanceof ArrayBuffer || ArrayBuffer.isView(input)) {
    return { body: input as BodyInit };
  }
  return { body: JSON.stringify(input), contentType: "application/json; charset=utf-8" };
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
