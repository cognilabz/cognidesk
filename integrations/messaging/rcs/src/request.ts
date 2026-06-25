import { createSign } from "node:crypto";
import { providerJsonRequest } from "@cognidesk/integration-kit";
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
  const url = appendApiKey(input.url, input.options.apiKey);
  if (!input.rawBody) {
    try {
      return await providerJsonRequest<T>({
        baseUrl: url.origin,
        path: `${url.pathname}${url.search}`,
        method: input.method,
        accessToken: token,
        body: input.body,
        fetch: input.fetch,
        signal: input.options.signal,
        timeoutMs: input.options.timeoutMs,
        retry: input.options.retry,
        providerName: "RCS for Business API",
      });
    } catch (error) {
      throw new Error(rcsProviderJsonErrorMessage(error));
    }
  }

  const response = await input.fetch(url.toString(), {
    method: input.method,
    headers: {
      accept: "application/json",
      ...(token ? { authorization: `Bearer ${token}` } : {}),
      ...(input.contentType ? { "content-type": input.contentType } : {}),
    },
    body: input.rawBody,
    ...(input.options.signal ? { signal: input.options.signal } : {}),
  });
  const text = await response.text();
  const body = text ? parseRcsJson<T & RcsErrorResponse>(text) : {} as T & RcsErrorResponse;
  if (!response.ok) throw new Error(rcsErrorMessage(body, response.status));
  return body as T;
}

export function rcsMessagingBaseUrl(options: RcsMessagingClientOptions) {
  if (options.messagingApiBaseUrl) return options.messagingApiBaseUrl.replace(/\/+$/, "");
  if (options.baseUrl) return options.baseUrl.replace(/\/+$/, "");
  if (options.region) return `https://${options.region}-rcsbusinessmessaging.googleapis.com`;
  return "https://rcsbusinessmessaging.googleapis.com";
}

export function rcsManagementBaseUrl(options: RcsMessagingClientOptions) {
  return (options.managementApiBaseUrl ?? options.managementBaseUrl ?? "https://businesscommunications.googleapis.com")
    .replace(/\/+$/, "");
}

export function rcsUrl(baseUrl: string, path: string) {
  return new URL(path, baseUrl);
}

export function rcsPhonePath(phoneNumber: string) {
  return encodeURIComponent(phoneNumber);
}

export function requireAgentId(agentId?: string) {
  if (!agentId) {
    throw new Error("RCS agentId is required for the built-in REST adapter; pass agentId or providerClient.");
  }
  return agentId;
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
  if (options.apiKey) return undefined;
  throw new Error("RCS built-in REST adapter requires accessToken, tokenProvider, serviceAccount, apiKey, or providerClient.");
}

async function serviceAccountAccessToken(
  credentials: RcsServiceAccountCredentials,
  fetchImpl: typeof fetch,
  scopes: string[],
) {
  const now = Math.floor(Date.now() / 1000);
  const tokenUri = credentials.tokenUri ?? "https://oauth2.googleapis.com/token";
  const assertion = [
    base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" })),
    base64Url(JSON.stringify({
      iss: credentials.clientEmail,
      scope: (credentials.scopes ?? scopes).join(" "),
      aud: tokenUri,
      iat: now,
      exp: now + 3600,
    })),
  ].join(".");
  const signature = createSign("RSA-SHA256").update(assertion).sign(credentials.privateKey);
  const response = await fetchImpl(tokenUri, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${assertion}.${base64Url(signature)}`,
    }),
  });
  const text = await response.text();
  const token = text ? parseRcsJson<{ access_token?: string; error_description?: string; error?: string }>(text) : {};
  if (!response.ok || !token.access_token) {
    throw new Error(token.error_description ?? token.error ?? `Google OAuth token endpoint returned ${response.status}.`);
  }
  return token.access_token;
}

function appendApiKey(url: URL, apiKey: string | undefined) {
  if (!apiKey) return url;
  const next = new URL(url.toString());
  next.searchParams.set("key", apiKey);
  return next;
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

function parseRcsJson<T>(text: string) {
  try {
    return JSON.parse(text) as T;
  } catch {
    return { error: { message: text } } as T;
  }
}

function rcsErrorMessage(body: RcsErrorResponse, status: number) {
  const code = body.error?.code !== undefined ? ` (${body.error.code})` : "";
  return body.error?.message ? `${body.error.message}${code}` : `RCS for Business API returned ${status}.`;
}

function rcsProviderJsonErrorMessage(error: unknown) {
  const payload = typeof error === "object" && error !== null && "payload" in error
    ? (error as { payload?: RcsErrorResponse }).payload
    : undefined;
  const status = typeof error === "object" && error !== null && "status" in error
    ? Number((error as { status?: unknown }).status)
    : undefined;
  const providerStatus = typeof status === "number" && Number.isFinite(status) ? status : 0;
  if (payload) return rcsErrorMessage(payload, providerStatus);
  return error instanceof Error ? error.message : String(error);
}
