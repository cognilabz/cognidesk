import { createSign } from "node:crypto";
import {
  RCS_MESSAGING_SCOPE,
  type RcsMessagingClientOptions,
  type RcsMessagingJsonObject,
  type RcsMessagingProviderPayload,
  type RcsServiceAccountCredentials,
} from "./contracts.js";

export async function rcsRequest<T>(input: {
  url: URL;
  method: "GET" | "POST";
  options: RcsMessagingClientOptions;
  fetch: typeof fetch;
  body?: RcsMessagingProviderPayload;
  rawBody?: BodyInit;
  contentType?: string;
  scopes?: string[];
}): Promise<T> {
  const token = await resolveAccessToken(input.options, input.fetch, input.scopes);
  const requestBody = input.rawBody ?? (input.body ? JSON.stringify(input.body) : undefined);
  const response = await input.fetch(input.url.toString(), {
    method: input.method,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${token}`,
      ...(input.contentType ? { "content-type": input.contentType } : {}),
      ...(input.body ? { "content-type": "application/json" } : {}),
    },
    ...(requestBody ? { body: requestBody } : {}),
  });
  const text = await response.text();
  const body = text ? JSON.parse(text) as T & RcsErrorResponse : {} as T & RcsErrorResponse;
  if (!response.ok) throw new Error(rcsErrorMessage(body, response.status));
  return body as T;
}

export function rcsMessagingBaseUrl(options: RcsMessagingClientOptions) {
  if (options.messagingApiBaseUrl) return options.messagingApiBaseUrl.replace(/\/+$/, "");
  if (options.region) return `https://${options.region}-rcsbusinessmessaging.googleapis.com`;
  return "https://rcsbusinessmessaging.googleapis.com";
}

export function rcsUrl(baseUrl: string, path: string) {
  return new URL(path, baseUrl);
}

export function rcsPhonePath(phoneNumber: string) {
  return phoneNumber.replace(/^\+/, "+");
}

export function requireAgentName(agentName?: string) {
  if (!agentName) {
    throw new Error("RCS agentName is required for Business Communications agent readiness checks.");
  }
  return agentName.replace(/^\/+/, "");
}

export function stripUndefined(input: RcsMessagingJsonObject) {
  return Object.fromEntries(Object.entries(input).filter((entry) => entry[1] !== undefined)) as RcsMessagingJsonObject;
}

async function resolveAccessToken(
  options: RcsMessagingClientOptions,
  fetchImpl: typeof fetch,
  scopes = [RCS_MESSAGING_SCOPE],
) {
  if (options.accessToken) return options.accessToken;
  if (options.tokenProvider) return options.tokenProvider({ scopes, fetch: fetchImpl });
  if (options.serviceAccount) return serviceAccountAccessToken(options.serviceAccount, fetchImpl, scopes);
  throw new Error("RCS OAuth access token, token provider, or service account is required.");
}

async function serviceAccountAccessToken(
  credentials: RcsServiceAccountCredentials,
  fetchImpl: typeof fetch,
  scopes: string[],
) {
  const now = Math.floor(Date.now() / 1000);
  const assertion = [
    base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" })),
    base64Url(JSON.stringify({
      iss: credentials.clientEmail,
      scope: (credentials.scopes ?? scopes).join(" "),
      aud: credentials.tokenUri ?? "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    })),
  ].join(".");
  const signature = createSign("RSA-SHA256").update(assertion).sign(credentials.privateKey);
  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: `${assertion}.${base64Url(signature)}`,
  });
  const response = await fetchImpl(credentials.tokenUri ?? "https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
  });
  const text = await response.text();
  const token = text ? JSON.parse(text) as { access_token?: string; error_description?: string; error?: string } : {};
  if (!response.ok || !token.access_token) {
    throw new Error(token.error_description ?? token.error ?? `Google OAuth token endpoint returned ${response.status}.`);
  }
  return token.access_token;
}

function base64Url(input: string | Buffer) {
  return Buffer.from(input).toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

interface RcsErrorResponse {
  error?: {
    message?: string;
    status?: string;
    code?: number;
  };
}

function rcsErrorMessage(body: RcsErrorResponse, status: number) {
  const code = body.error?.code !== undefined ? ` (${body.error.code})` : "";
  return body.error?.message ? `${body.error.message}${code}` : `RCS Business Messaging API returned ${status}.`;
}
