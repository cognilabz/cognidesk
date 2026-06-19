import { createHmac, timingSafeEqual } from "node:crypto";
import type {
  CobrowsingSessionTokenClaims,
  CobrowsingSessionTokenValidation,
  CreateCobrowsingSessionTokenInput,
  ValidateCobrowsingSessionTokenInput,
  ValidateCobrowsingSignedRequestInput,
} from "./contracts.js";

export function createCobrowsingSessionToken(input: CreateCobrowsingSessionTokenInput): string {
  const issuedAt = input.claims.issuedAt ?? Math.floor(Date.now() / 1000);
  const expiresAt = input.claims.expiresAt ?? issuedAt + (input.claims.expiresInSeconds ?? 300);
  const claims: CobrowsingSessionTokenClaims = {
    sessionId: input.claims.sessionId,
    origin: input.claims.origin,
    issuedAt,
    expiresAt,
    ...(input.claims.participantId ? { participantId: input.claims.participantId } : {}),
    ...(input.claims.role ? { role: input.claims.role } : {}),
    ...(input.claims.audience ? { audience: input.claims.audience } : {}),
    ...(input.claims.metadata ? { metadata: input.claims.metadata } : {}),
  };
  const header = base64UrlEncode(JSON.stringify({ alg: "HS256", typ: "Cognidesk-Cobrowse-Session" }));
  const payload = base64UrlEncode(JSON.stringify(claims));
  const signature = hmacSha256(input.sharedSecret, `${header}.${payload}`);
  return `${header}.${payload}.${signature}`;
}

export function validateCobrowsingSessionToken(
  input: ValidateCobrowsingSessionTokenInput,
): CobrowsingSessionTokenValidation {
  const parts = input.token.split(".");
  if (parts.length !== 3 || !parts[0] || !parts[1] || !parts[2]) return invalid("malformed-token");
  const [header, payload, signature] = parts as [string, string, string];
  if (!safeEqual(hmacSha256(input.sharedSecret, `${header}.${payload}`), signature)) return invalid("invalid-signature");

  let claims: CobrowsingSessionTokenClaims;
  try {
    const parsedHeader = JSON.parse(base64UrlDecode(header));
    if (parsedHeader.alg !== "HS256") return invalid("unsupported-algorithm");
    claims = JSON.parse(base64UrlDecode(payload)) as CobrowsingSessionTokenClaims;
  } catch {
    return invalid("invalid-json");
  }

  if (!claims.sessionId || !claims.origin) return invalid("missing-required-claims");
  const nowSeconds = input.nowSeconds ?? Math.floor(Date.now() / 1000);
  if (!Number.isFinite(claims.expiresAt) || nowSeconds >= claims.expiresAt) return invalid("expired");
  if (!Number.isFinite(claims.issuedAt) || claims.issuedAt > nowSeconds + 60) return invalid("issued-in-future");
  if (input.expectedSessionId && claims.sessionId !== input.expectedSessionId) return invalid("session-mismatch");
  if (input.expectedAudience && claims.audience !== input.expectedAudience) return invalid("audience-mismatch");
  if (input.allowedOrigins?.length) {
    const allowed = normalizeOrigins(input.allowedOrigins);
    if (!allowed.has(normalizeOrigin(claims.origin))) return invalid("origin-not-allowed");
  }
  return { valid: true, claims };
}

export function validateCobrowsingSignedRequest(input: ValidateCobrowsingSignedRequestInput): boolean {
  const parsed = parseCobrowsingSignatureHeader(input.signatureHeader);
  if (!parsed) return false;
  const timestamp = Number(parsed.timestamp);
  if (!Number.isFinite(timestamp)) return false;
  const toleranceSeconds = input.timestampToleranceSeconds ?? 300;
  const nowSeconds = input.nowSeconds ?? Math.floor(Date.now() / 1000);
  if (toleranceSeconds >= 0 && Math.abs(nowSeconds - timestamp) > toleranceSeconds) return false;

  const rawBody = Buffer.isBuffer(input.rawBody) ? input.rawBody.toString("utf8") : input.rawBody;
  const expected = hmacSha256Hex(input.sharedSecret, `${parsed.timestamp}.${rawBody}`);
  return safeEqual(expected, parsed.signature);
}

export function parseCobrowsingSignatureHeader(header: string): { timestamp: string; signature: string } | undefined {
  const parts = new Map(
    header
      .split(",")
      .map((part) => part.trim().split("=") as [string, string | undefined])
      .filter((part): part is [string, string] => Boolean(part[0] && part[1])),
  );
  const timestamp = parts.get("t");
  const signature = parts.get("v1");
  return timestamp && signature ? { timestamp, signature } : undefined;
}

export function signCobrowsingWebhook(input: { sharedSecret: string; timestamp: number; body: string | Buffer }) {
  const body = Buffer.isBuffer(input.body) ? input.body.toString("utf8") : input.body;
  const signature = hmacSha256Hex(input.sharedSecret, `${input.timestamp}.${body}`);
  return `t=${input.timestamp},v1=${signature}`;
}

function normalizeOrigins(origins: string[]) {
  return new Set(origins.map(normalizeOrigin));
}

function normalizeOrigin(origin: string) {
  return new URL(origin).origin;
}

function invalid(reason: string): CobrowsingSessionTokenValidation {
  return { valid: false, reason };
}

function hmacSha256(sharedSecret: string, value: string) {
  return createHmac("sha256", sharedSecret).update(value).digest("base64url");
}

function hmacSha256Hex(sharedSecret: string, value: string) {
  return createHmac("sha256", sharedSecret).update(value).digest("hex");
}

function safeEqual(expected: string, actual: string) {
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(actual);
  return expectedBuffer.length === actualBuffer.length
    && timingSafeEqual(expectedBuffer, actualBuffer);
}

function base64UrlEncode(value: string) {
  return Buffer.from(value, "utf8").toString("base64url");
}

function base64UrlDecode(value: string) {
  return Buffer.from(value, "base64url").toString("utf8");
}
