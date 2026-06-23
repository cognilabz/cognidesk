import type { WhatsAppMessagingProviderPayload } from "../contracts.js";

export function whatsappGraphUrl(baseUrl: string, version: string, path: string) {
  return new URL(`/${version.replace(/^\/+|\/+$/g, "")}${path}`, baseUrl);
}

export async function whatsappRequest<T>(input: {
  url: URL;
  method: "GET" | "POST";
  options: { accessToken: string };
  fetch: typeof fetch;
  body?: WhatsAppMessagingProviderPayload | FormData;
}): Promise<T> {
  const isFormData = input.body instanceof FormData;
  let requestBody: BodyInit | undefined;
  if (input.body instanceof FormData) {
    requestBody = input.body;
  } else if (input.body) {
    requestBody = JSON.stringify(input.body);
  }
  const response = await input.fetch(input.url.toString(), {
    method: input.method,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${input.options.accessToken}`,
      ...(input.body && !isFormData ? { "content-type": "application/json" } : {}),
    },
    ...(requestBody ? { body: requestBody } : {}),
  });
  const text = await response.text();
  const body = text ? JSON.parse(text) as T & WhatsAppErrorResponse : {} as T & WhatsAppErrorResponse;
  if (!response.ok) {
    throw new Error(whatsappErrorMessage(body, response.status));
  }
  return body as T;
}

export async function whatsappDownload(input: {
  url: string;
  options: { accessToken: string };
  fetch: typeof fetch;
}) {
  const response = await input.fetch(input.url, {
    method: "GET",
    headers: {
      authorization: `Bearer ${input.options.accessToken}`,
    },
  });
  if (!response.ok) {
    const text = await response.text();
    const body = text ? JSON.parse(text) as WhatsAppErrorResponse : {};
    throw new Error(whatsappErrorMessage(body, response.status));
  }
  return response;
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
