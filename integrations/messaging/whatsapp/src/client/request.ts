import { providerJsonRequest } from "@cognidesk/integration-kit";
import type { ProviderJsonRetryOptions } from "@cognidesk/integration-kit";
import type { WhatsAppMessagingProviderPayload } from "../contracts.js";

export interface WhatsAppGraphRequestOptions {
  accessToken: string;
  signal?: AbortSignal;
  timeoutMs?: number;
  retry?: number | ProviderJsonRetryOptions;
}

export function whatsappGraphUrl(baseUrl: string, version: string, pathSegments: readonly string[], suffix = "") {
  const normalizedBaseUrl = baseUrl.replace(/\/+$/, "");
  const normalizedVersion = version.replace(/^\/+|\/+$/g, "");
  const encodedPath = pathSegments.map((segment) => encodeURIComponent(segment)).join("/");
  return new URL(`/${normalizedVersion}/${encodedPath}${suffix}`, normalizedBaseUrl);
}

export async function whatsappRequest<T>(input: {
  url: URL;
  method: "GET" | "POST";
  options: WhatsAppGraphRequestOptions;
  fetch: typeof fetch;
  body?: WhatsAppMessagingProviderPayload | FormData;
}): Promise<T> {
  const isFormData = input.body instanceof FormData;
  if (!isFormData) {
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
        providerName: "WhatsApp Business API",
      });
    } catch (error) {
      throw new Error(whatsappProviderJsonErrorMessage(error));
    }
  }
  const requestBody: BodyInit | undefined = input.body instanceof FormData ? input.body : undefined;
  const response = await input.fetch(input.url.toString(), {
    method: input.method,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${input.options.accessToken}`,
      ...(input.body && !isFormData ? { "content-type": "application/json" } : {}),
    },
    ...(requestBody ? { body: requestBody } : {}),
  });
  const body = await parseWhatsAppResponse<T & WhatsAppErrorResponse>(response);
  if (!response.ok) {
    throw new Error(whatsappErrorMessage(body, response.status));
  }
  return body as T;
}

export async function whatsappDownload(input: {
  url: string;
  options: WhatsAppGraphRequestOptions;
  fetch: typeof fetch;
}) {
  const response = await input.fetch(input.url, {
    method: "GET",
    headers: {
      authorization: `Bearer ${input.options.accessToken}`,
    },
  });
  if (!response.ok) {
    const body = await parseWhatsAppResponse<WhatsAppErrorResponse>(response);
    throw new Error(whatsappErrorMessage(body, response.status));
  }
  return response;
}

async function parseWhatsAppResponse<T>(response: Response): Promise<T> {
  const text = await response.text();
  if (!text) return {} as T;
  try {
    return JSON.parse(text) as T;
  } catch {
    return { error: { message: text } } as T;
  }
}

interface WhatsAppErrorResponse {
  error?: {
    message?: string;
    type?: string;
    code?: number;
    error_subcode?: number;
    fbtrace_id?: string;
  };
}

function whatsappErrorMessage(body: WhatsAppErrorResponse, status: number) {
  const code = body.error?.code !== undefined ? ` (${body.error.code})` : "";
  return body.error?.message ? `${body.error.message}${code}` : `WhatsApp Business API returned ${status}.`;
}

function whatsappProviderJsonErrorMessage(error: unknown) {
  const payload = typeof error === "object" && error !== null && "payload" in error
    ? (error as { payload?: WhatsAppErrorResponse }).payload
    : undefined;
  const status = typeof error === "object" && error !== null && "status" in error
    ? Number((error as { status?: unknown }).status)
    : undefined;
  const providerStatus = typeof status === "number" && Number.isFinite(status) ? status : 0;
  if (payload) return whatsappErrorMessage(payload, providerStatus);
  return error instanceof Error ? error.message : String(error);
}
