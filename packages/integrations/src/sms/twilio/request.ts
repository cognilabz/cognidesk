import { Buffer } from "node:buffer";
import type {
  TwilioSmsFormObject,
  TwilioSmsFormValue,
  TwilioSmsHttpMethod,
} from "./contracts.js";

export async function twilioRequest<T>(input: {
  url: string;
  method: TwilioSmsHttpMethod;
  auth: { accountSid: string; authToken: string };
  fetch: typeof fetch;
  body?: TwilioSmsFormObject | URLSearchParams | undefined;
  contentType?: string | undefined;
}): Promise<T> {
  const serialized = serializeTwilioBody(input.body, input.contentType);
  const response = await input.fetch(input.url, {
    method: input.method,
    headers: {
      authorization: `Basic ${Buffer.from(`${input.auth.accountSid}:${input.auth.authToken}`).toString("base64")}`,
      ...(serialized ? { "content-type": serialized.contentType } : {}),
    },
    ...(serialized ? { body: serialized.body } : {}),
  });
  const text = await response.text();
  const body = text ? JSON.parse(text) as T & { message?: string } : {} as T & { message?: string };
  if (!response.ok) {
    throw new Error(body.message ?? `Twilio SMS API returned ${response.status}.`);
  }
  return body as T;
}

export function twilioRequestUrl(apiBaseUrl: string, path: string, query?: TwilioSmsFormObject) {
  const url = new URL(`${apiBaseUrl}${path.startsWith("/") ? path : `/${path}`}`);
  appendTwilioParams(url.searchParams, query);
  return url.toString();
}

export function twilioOperationPath(
  pathTemplate: string,
  pathParams: Record<string, string | number | boolean | undefined>,
) {
  return pathTemplate.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams[key];
    if (value === undefined) throw new Error(`Missing Twilio path parameter '${key}'.`);
    return encodeURIComponent(String(value));
  });
}

function serializeTwilioBody(body: TwilioSmsFormObject | URLSearchParams | undefined, contentType?: string) {
  if (!body) return undefined;
  const selectedContentType = contentType ?? "application/x-www-form-urlencoded";
  if (body instanceof URLSearchParams) {
    return { contentType: "application/x-www-form-urlencoded", body };
  }
  if (selectedContentType.includes("json")) {
    return { contentType: selectedContentType, body: JSON.stringify(body) };
  }
  const params = new URLSearchParams();
  appendTwilioParams(params, body);
  return { contentType: "application/x-www-form-urlencoded", body: params };
}

function appendTwilioParams(params: URLSearchParams, value: TwilioSmsFormValue, prefix?: string): void {
  if (value === undefined || value === null) return;
  if (Array.isArray(value)) {
    for (const item of value) appendTwilioParams(params, item, prefix);
    return;
  }
  if (typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      appendTwilioParams(params, child, prefix ? `${prefix}[${key}]` : key);
    }
    return;
  }
  if (!prefix) throw new Error("Twilio request parameter key is required.");
  params.append(prefix, String(value));
}
