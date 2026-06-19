import {
  providerObject,
  readProviderResponseBody,
  throwProviderApiError,
} from "../../internal/provider-transport.js";
import type {
  SlackApiResponse,
  SlackConversationsHistoryInput,
  SlackConversationsRepliesInput,
  SlackHttpMethod,
  SlackPostEphemeralInput,
  SlackPostMessageInput,
  SlackResource,
  SlackUpdateMessageInput,
  SlackWorkplaceClientOptions,
  SlackWorkplaceJsonObject,
  SlackWorkplaceProviderPayload,
  SlackWorkplaceProviderQuery,
} from "./contracts.js";

export function slackApiUrl(apiBaseUrl: string, method: string) {
  return new URL(method, `${apiBaseUrl}/`);
}

export function slackOperationUrl(apiBaseUrl: string, path: string, query?: SlackWorkplaceProviderQuery) {
  const url = slackApiUrl(apiBaseUrl, path.replace(/^\/+/, ""));
  appendSlackQuery(url.searchParams, query);
  return url;
}

export function slackPostMessageBody(input: SlackPostMessageInput) {
  return stripUndefined({
    channel: input.channel,
    text: input.text,
    blocks: input.blocks,
    attachments: input.attachments,
    thread_ts: input.threadTs,
    mrkdwn: input.mrkdwn,
    unfurl_links: input.unfurlLinks,
    unfurl_media: input.unfurlMedia,
    reply_broadcast: input.replyBroadcast,
    metadata: input.metadata,
  });
}

export function slackPostEphemeralBody(input: SlackPostEphemeralInput) {
  return stripUndefined({
    channel: input.channel,
    user: input.user,
    text: input.text,
    blocks: input.blocks,
    attachments: input.attachments,
    thread_ts: input.threadTs,
    mrkdwn: input.mrkdwn,
  });
}

export function slackUpdateMessageBody(input: SlackUpdateMessageInput) {
  return stripUndefined({
    channel: input.channel,
    ts: input.ts,
    text: input.text,
    blocks: input.blocks,
    attachments: input.attachments,
    metadata: input.metadata,
  });
}

export function applyHistoryQuery(url: URL, input: SlackConversationsHistoryInput) {
  url.searchParams.set("channel", input.channel);
  if (input.cursor) url.searchParams.set("cursor", input.cursor);
  if (input.inclusive !== undefined) url.searchParams.set("inclusive", String(input.inclusive));
  if (input.includeAllMetadata !== undefined) {
    url.searchParams.set("include_all_metadata", String(input.includeAllMetadata));
  }
  if (input.latest) url.searchParams.set("latest", input.latest);
  if (input.limit !== undefined) url.searchParams.set("limit", String(input.limit));
  if (input.oldest) url.searchParams.set("oldest", input.oldest);
}

export function applyRepliesQuery(url: URL, input: SlackConversationsRepliesInput) {
  url.searchParams.set("channel", input.channel);
  url.searchParams.set("ts", input.ts);
  if (input.cursor) url.searchParams.set("cursor", input.cursor);
  if (input.inclusive !== undefined) url.searchParams.set("inclusive", String(input.inclusive));
  if (input.latest) url.searchParams.set("latest", input.latest);
  if (input.limit !== undefined) url.searchParams.set("limit", String(input.limit));
  if (input.oldest) url.searchParams.set("oldest", input.oldest);
}

export async function slackRequest<T = SlackResource>(input: {
  url: URL;
  method: SlackHttpMethod;
  options: SlackWorkplaceClientOptions;
  fetch: typeof fetch;
  body?: SlackWorkplaceProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
  signal?: AbortSignal | undefined;
}): Promise<T> {
  const requestBody = slackRequestBody(input.body);
  const response = await input.fetch(input.url.toString(), {
    method: input.method,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${input.options.botToken}`,
      ...(requestBody.contentType ? { "content-type": requestBody.contentType } : {}),
      ...input.headers,
    },
    ...(requestBody.body ? { body: requestBody.body } : {}),
    ...(input.signal ? { signal: input.signal } : {}),
  });
  const body = await readProviderResponseBody(response);
  const responseBody = (body ?? { ok: false }) as T & Partial<SlackApiResponse>;
  if (!response.ok) {
    const retryAfter = response.headers.get("retry-after") ?? undefined;
    const error = slackHttpErrorDetails(body, response.status, retryAfter);
    throwProviderApiError({
      provider: "slack",
      status: response.status,
      message: error.message,
      body,
      response,
      ...(error.code !== undefined ? { code: error.code } : {}),
      ...(retryAfter !== undefined ? { retryAfter } : {}),
    });
  }
  if (responseBody.ok === false) {
    const error = slackApiErrorDetails(body);
    throwProviderApiError({
      provider: "slack",
      status: response.status,
      message: error.message,
      body,
      response,
      ...(error.code !== undefined ? { code: error.code } : {}),
    });
  }
  return responseBody as T;
}

export async function slackUploadExternalFileBytes(input: {
  uploadUrl: string;
  body: BodyInit;
  contentType?: string | undefined;
  fetch: typeof fetch;
  signal?: AbortSignal | undefined;
}): Promise<Response> {
  const response = await input.fetch(input.uploadUrl, {
    method: "POST",
    headers: {
      ...(input.contentType ? { "content-type": input.contentType } : {}),
    },
    body: input.body,
    ...(input.signal ? { signal: input.signal } : {}),
  });
  if (!response.ok) {
    throwProviderApiError({
      provider: "slack",
      status: response.status,
      message: `Slack external file upload returned ${response.status}.`,
      body: await readProviderResponseBody(response),
      response,
    });
  }
  return response;
}

export function stripUndefined(input: SlackWorkplaceJsonObject) {
  return Object.fromEntries(Object.entries(input).filter((entry) => entry[1] !== undefined)) as SlackWorkplaceJsonObject;
}

function slackHttpErrorDetails(
  body: unknown,
  status: number,
  retryAfter?: string,
): { message: string; code?: string } {
  const payload = providerObject(body);
  const code = typeof payload?.error === "string" ? payload.error : undefined;
  const retryDetail = retryAfter ? ` Retry-After: ${retryAfter}.` : "";
  return {
    message: `${code ?? `Slack Web API returned ${status}.`}${retryDetail}`,
    ...(code ? { code } : {}),
  };
}

function slackApiErrorDetails(body: unknown): { message: string; code?: string } {
  const payload = providerObject(body);
  const code = typeof payload?.error === "string" ? payload.error : undefined;
  const needed = typeof payload?.needed === "string" ? payload.needed : undefined;
  const scopeDetail = needed ? ` Needed scopes: ${needed}.` : "";
  return {
    message: `${code ?? "Slack Web API request failed."}${scopeDetail}`,
    ...(code ? { code } : {}),
  };
}

function appendSlackQuery(params: URLSearchParams, query?: SlackWorkplaceProviderQuery) {
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

function slackRequestBody(input: unknown): { body?: BodyInit; contentType?: string } {
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
