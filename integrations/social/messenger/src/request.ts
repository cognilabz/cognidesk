import { providerJsonRequest } from "@cognidesk/integration-kit";
import type { ProviderJsonRetryOptions } from "@cognidesk/integration-kit";
import type {
  MessengerConversationSearchInput,
  MessengerSocialProviderPayload,
} from "./contracts.js";

export interface MessengerGraphRequestOptions {
  accessToken: string;
  signal?: AbortSignal;
  timeoutMs?: number;
  retry?: number | ProviderJsonRetryOptions;
}

export function messengerGraphUrl(baseUrl: string, version: string, pathSegments: readonly string[], suffix = "") {
  const normalizedBaseUrl = baseUrl.replace(/\/+$/, "");
  const normalizedVersion = version.replace(/^\/+|\/+$/g, "");
  const encodedPath = pathSegments.map((segment) => encodeURIComponent(segment)).join("/");
  return new URL(`/${normalizedVersion}/${encodedPath}${suffix}`, normalizedBaseUrl);
}

export async function messengerRequest<T>(input: {
  url: URL;
  method: "GET" | "POST";
  options: MessengerGraphRequestOptions;
  fetch: typeof fetch;
  body?: MessengerSocialProviderPayload | undefined;
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
      providerName: "Messenger Graph API",
    });
  } catch (error) {
    throw new Error(messengerProviderJsonErrorMessage(error));
  }
}

export function applyConversationQuery(url: URL, input: MessengerConversationSearchInput) {
  if (input.fields?.length) url.searchParams.set("fields", input.fields.join(","));
  else url.searchParams.set("fields", "id,updated_time,participants,messages{message,from,to,created_time,attachments}");
  if (input.limit !== undefined) url.searchParams.set("limit", String(input.limit));
  if (input.after) url.searchParams.set("after", input.after);
  if (input.userId) url.searchParams.set("user_id", input.userId);
}

interface MessengerErrorResponse {
  error?: {
    message?: string;
    type?: string;
    code?: number;
    error_subcode?: number;
    fbtrace_id?: string;
  };
  message?: string;
}

function messengerErrorMessage(body: MessengerErrorResponse, status: number) {
  const code = body.error?.code !== undefined ? ` (${body.error.code})` : "";
  return body.error?.message
    ? `${body.error.message}${code}`
    : body.message ?? `Messenger Graph API returned ${status}.`;
}

function messengerProviderJsonErrorMessage(error: unknown) {
  const payload = typeof error === "object" && error !== null && "payload" in error
    ? (error as { payload?: MessengerErrorResponse }).payload
    : undefined;
  const status = typeof error === "object" && error !== null && "status" in error
    ? Number((error as { status?: unknown }).status)
    : undefined;
  const providerStatus = typeof status === "number" && Number.isFinite(status) ? status : 0;
  if (payload) return messengerErrorMessage(payload, providerStatus);
  return error instanceof Error ? error.message : String(error);
}
