import { providerJsonRequest } from "@cognidesk/integration-kit";
import type { ProviderJsonRetryOptions } from "@cognidesk/integration-kit";
import type {
  InstagramSocialJsonObject,
  InstagramSocialProviderPayload,
} from "./contracts.js";

export interface InstagramGraphRequestOptions {
  accessToken: string;
  signal?: AbortSignal;
  timeoutMs?: number;
  retry?: number | ProviderJsonRetryOptions;
}

export function instagramGraphUrl(baseUrl: string, version: string, pathSegments: readonly string[], suffix = "") {
  const normalizedBaseUrl = baseUrl.replace(/\/+$/, "");
  const normalizedVersion = version.replace(/^\/+|\/+$/g, "");
  const encodedPath = pathSegments.map((segment) => encodeURIComponent(segment)).join("/");
  return new URL(`/${normalizedVersion}/${encodedPath}${suffix}`, normalizedBaseUrl);
}

export function applyListQuery(
  url: URL,
  input: {
    fields?: string[];
    limit?: number;
    after?: string;
    before?: string;
  },
  defaultFields: readonly string[],
) {
  const fields = input.fields ?? defaultFields;
  if (fields.length) url.searchParams.set("fields", fields.join(","));
  if (input.limit !== undefined) url.searchParams.set("limit", String(input.limit));
  if (input.after) url.searchParams.set("after", input.after);
  if (input.before) url.searchParams.set("before", input.before);
}

export async function instagramRequest<T>(input: {
  url: URL;
  method: "GET" | "POST";
  options: InstagramGraphRequestOptions;
  fetch: typeof fetch;
  body?: InstagramSocialProviderPayload;
}): Promise<T> {
  try {
    return await providerJsonRequest<T>({
      baseUrl: input.url.origin,
      path: `${input.url.pathname}${input.url.search}`,
      method: input.method,
      accessToken: input.options.accessToken,
      body: input.body,
      fetch: input.fetch,
      signal: input.options.signal,
      timeoutMs: input.options.timeoutMs,
      retry: input.options.retry,
      providerName: "Instagram Graph API",
    });
  } catch (error) {
    throw new Error(instagramProviderJsonErrorMessage(error));
  }
}

export function stripUndefined(input: InstagramSocialJsonObject) {
  return Object.fromEntries(Object.entries(input).filter((entry) => entry[1] !== undefined));
}

interface InstagramErrorResponse {
  error?: {
    message?: string;
    type?: string;
    code?: number;
    error_subcode?: number;
    fbtrace_id?: string;
  };
}

function instagramErrorMessage(body: InstagramErrorResponse, status: number) {
  const code = body.error?.code !== undefined ? ` (${body.error.code})` : "";
  return body.error?.message ? `${body.error.message}${code}` : `Instagram Graph API returned ${status}.`;
}

function instagramProviderJsonErrorMessage(error: unknown) {
  const payload = typeof error === "object" && error !== null && "payload" in error
    ? (error as { payload?: InstagramErrorResponse }).payload
    : undefined;
  const status = typeof error === "object" && error !== null && "status" in error
    ? Number((error as { status?: unknown }).status)
    : undefined;
  const providerStatus = typeof status === "number" && Number.isFinite(status) ? status : 0;
  if (payload) return instagramErrorMessage(payload, providerStatus);
  return error instanceof Error ? error.message : String(error);
}
