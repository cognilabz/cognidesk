import { providerJsonRequest } from "@cognidesk/integration-kit";
import type { ProviderJsonRetryOptions } from "@cognidesk/integration-kit";
import type {
  TikTokApiResponse,
  TikTokSocialJsonObject,
  TikTokSocialProviderPayload,
} from "./contracts.js";

export interface TikTokRequestOptions {
  token: string;
  fetch: typeof fetch;
  signal?: AbortSignal;
  timeoutMs?: number;
  retry?: number | ProviderJsonRetryOptions;
}

export async function tiktokOpenRequest<T>(input: {
  url: URL;
  method: "GET" | "POST";
  options: TikTokRequestOptions;
  body?: TikTokSocialProviderPayload;
}): Promise<T> {
  return tiktokRequest<T>({
    ...input,
    accessToken: input.options.token,
    providerName: "TikTok Open API",
  });
}

export async function tiktokBusinessRequest<T>(input: {
  url: URL;
  method: "GET" | "POST";
  options: TikTokRequestOptions;
  body?: TikTokSocialProviderPayload;
}): Promise<T> {
  return tiktokRequest<T>({
    ...input,
    apiKey: input.options.token,
    apiKeyHeaderName: "Access-Token",
    providerName: "TikTok Business API",
  });
}

export async function tiktokRequest<T>(input: {
  url: URL;
  method: "GET" | "POST";
  options: TikTokRequestOptions;
  accessToken?: string;
  apiKey?: string;
  apiKeyHeaderName?: string;
  providerName: string;
  body?: TikTokSocialProviderPayload;
}): Promise<T> {
  try {
    const body = await providerJsonRequest<T & TikTokApiResponse>({
      baseUrl: input.url.origin,
      path: `${input.url.pathname}${input.url.search}`,
      method: input.method,
      accessToken: input.accessToken,
      apiKey: input.apiKey,
      apiKeyHeaderName: input.apiKeyHeaderName,
      body: input.body,
      fetch: input.options.fetch,
      signal: input.options.signal,
      timeoutMs: input.options.timeoutMs,
      retry: input.options.retry,
      providerName: input.providerName,
    });
    if (body.error?.code && body.error.code !== "ok") {
      throw tiktokPayloadError(body, 200);
    }
    return body as T;
  } catch (error) {
    if (error instanceof TikTokRequestError) throw new Error(error.message);
    throw new Error(tiktokProviderJsonErrorMessage(error));
  }
}

export function businessUrl(baseUrl: string, version: string, path: string) {
  return new URL(`/open_api/${version.replace(/^\/+|\/+$/g, "")}${path}`, baseUrl.replace(/\/+$/, ""));
}

export function stripUndefined(input: TikTokSocialJsonObject) {
  return Object.fromEntries(Object.entries(input).filter((entry) => entry[1] !== undefined));
}

class TikTokRequestError extends Error {}

function tiktokPayloadError(body: TikTokApiResponse, status: number) {
  return new TikTokRequestError(tiktokErrorMessage(body, status));
}

function tiktokErrorMessage(body: TikTokApiResponse, status: number) {
  const code = body.error?.code && body.error.code !== "ok" ? ` (${body.error.code})` : "";
  return body.error?.message ? `${body.error.message}${code}` : `TikTok API returned ${status}.`;
}

function tiktokProviderJsonErrorMessage(error: unknown) {
  const payload = typeof error === "object" && error !== null && "payload" in error
    ? (error as { payload?: TikTokApiResponse }).payload
    : undefined;
  const status = typeof error === "object" && error !== null && "status" in error
    ? Number((error as { status?: unknown }).status)
    : undefined;
  const providerStatus = typeof status === "number" && Number.isFinite(status) ? status : 0;
  if (payload) return tiktokErrorMessage(payload, providerStatus);
  return error instanceof Error ? error.message : String(error);
}
