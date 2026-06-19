import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import type {
  ParseVonageWebhookOptions,
  VonageVoiceJsonObject,
  VonageWebhook,
  VonageWebhookJwtVerificationOptions,
} from "./contracts.js";

export async function parseVonageWebhook(
  request: Request,
  options: ParseVonageWebhookOptions = {},
): Promise<VonageWebhook> {
  const { body, rawBody } = await readWebhookBody(request);
  const token = bearerToken(request.headers.get("authorization"));
  const claims = token && options.signatureSecret
    ? verifyVonageWebhookJwt(token, options.signatureSecret, options.expectedApiKey, webhookJwtVerificationOptions(options))
    : undefined;
  const verified = Boolean(claims);
  if ((options.requireSignature ?? true) && !verified) {
    throw new Error("Vonage webhook signature verification failed.");
  }
  if (options.verifyPayloadHash && !verifyVonagePayloadHash(rawBody, claims)) {
    throw new Error("Vonage webhook payload hash verification failed.");
  }
  return {
    kind: options.kind ?? inferVonageWebhookKind(body),
    body,
    verified,
    ...(isRecord(body.original_request) ? { originalRequest: body.original_request } : {}),
    ...(claims ? { jwtClaims: claims } : {}),
  };
}

export function verifyVonageWebhookJwt(
  token: string,
  signatureSecret: string,
  expectedApiKey?: string,
  options: VonageWebhookJwtVerificationOptions = {},
): VonageVoiceJsonObject | undefined {
  const parts = token.split(".");
  if (parts.length !== 3) return undefined;
  const encodedHeader = parts[0];
  const encodedPayload = parts[1];
  const encodedSignature = parts[2];
  if (!encodedHeader || !encodedPayload || !encodedSignature) return undefined;
  const header = JSON.parse(base64urlDecode(encodedHeader)) as { alg?: string };
  if (header.alg !== "HS256") return undefined;
  const expected = createHmac("sha256", signatureSecret).update(`${encodedHeader}.${encodedPayload}`).digest();
  const actual = Buffer.from(encodedSignature.replaceAll("-", "+").replaceAll("_", "/"), "base64");
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) return undefined;
  const claims = JSON.parse(base64urlDecode(encodedPayload)) as VonageVoiceJsonObject;
  if (expectedApiKey && claims.api_key !== expectedApiKey) return undefined;
  if (!verifyJwtTimeClaims(claims, options)) return undefined;
  return claims;
}

function verifyJwtTimeClaims(
  claims: VonageVoiceJsonObject,
  options: VonageWebhookJwtVerificationOptions,
) {
  const now = options.now?.() ?? Math.floor(Date.now() / 1000);
  const clockSkewSeconds = Math.max(0, options.clockSkewSeconds ?? 0);
  const expiration = numericDateClaim(claims.exp);
  if (Number.isNaN(expiration)) return false;
  if (expiration !== undefined && now - clockSkewSeconds >= expiration) return false;
  const notBefore = numericDateClaim(claims.nbf);
  if (Number.isNaN(notBefore)) return false;
  if (notBefore !== undefined && now + clockSkewSeconds < notBefore) return false;
  return true;
}

function numericDateClaim(value: VonageVoiceJsonObject[string]) {
  if (value === undefined) return undefined;
  if (typeof value !== "number" || !Number.isFinite(value)) return Number.NaN;
  return value;
}

function verifyVonagePayloadHash(rawBody: string, claims: VonageVoiceJsonObject | undefined) {
  if (typeof claims?.payload_hash !== "string") return false;
  const expected = createHash("sha256").update(rawBody).digest("hex");
  return expected === claims.payload_hash;
}

function webhookJwtVerificationOptions(options: ParseVonageWebhookOptions): VonageWebhookJwtVerificationOptions {
  return {
    ...(options.now ? { now: options.now } : {}),
    ...(options.clockSkewSeconds !== undefined ? { clockSkewSeconds: options.clockSkewSeconds } : {}),
  };
}

async function readWebhookBody(request: Request): Promise<{ body: VonageVoiceJsonObject; rawBody: string }> {
  const contentType = request.headers.get("content-type") ?? "";
  const rawBody = await request.text();
  if (request.method.toUpperCase() === "GET" && !rawBody) {
    return { body: Object.fromEntries(new URL(request.url).searchParams.entries()), rawBody };
  }
  if (contentType.includes("application/json")) {
    return { body: rawBody ? JSON.parse(rawBody) as VonageVoiceJsonObject : {}, rawBody };
  }
  if (contentType.includes("application/x-www-form-urlencoded")) {
    return { body: Object.fromEntries(new URLSearchParams(rawBody).entries()), rawBody };
  }
  return { body: rawBody ? JSON.parse(rawBody) as VonageVoiceJsonObject : {}, rawBody };
}

function inferVonageWebhookKind(body: VonageVoiceJsonObject): VonageWebhook["kind"] {
  if (isRecord(body.original_request) || typeof body.reason === "string") return "fallback";
  if (body.status || body.uuid || body.conversation_uuid) return "event";
  return "answer";
}

function isRecord(value: unknown): value is VonageVoiceJsonObject {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function bearerToken(value: string | null): string | undefined {
  if (!value) return undefined;
  const match = /^Bearer\s+(.+)$/i.exec(value);
  return match?.[1];
}

function base64urlDecode(value: string): string {
  const padded = value.replaceAll("-", "+").replaceAll("_", "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  return Buffer.from(padded, "base64").toString("utf8");
}
