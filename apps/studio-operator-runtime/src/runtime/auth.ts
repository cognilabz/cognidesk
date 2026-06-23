import { createHmac, timingSafeEqual } from "node:crypto";
import type { IncomingHttpHeaders } from "node:http";
import type { StudioClaims } from "./types.js";

const localDevRuntimeSecret = "cognidesk-studio-local-runtime-secret-change-me";
const claimsHeader = "x-studio-runtime-claims";
const signatureHeader = "x-studio-runtime-signature";
const defaultClaimsTtlMs = 60_000;
const maxClockSkewMs = 30_000;

interface SignedStudioRuntimeClaims extends StudioClaims {
  expiresAt: number;
  nonce?: string;
}

export function operatorRuntimeSecret(env: NodeJS.ProcessEnv = process.env): string | null {
  const configured = env.STUDIO_OPERATOR_RUNTIME_SECRET?.trim();
  if (configured) {
    if (!allowsLocalRuntimeDefaults(env) && configured === localDevRuntimeSecret) {
      throw new Error("STUDIO_OPERATOR_RUNTIME_SECRET must not use the local development secret outside local development");
    }
    return configured;
  }
  return allowsLocalRuntimeDefaults(env) ? localDevRuntimeSecret : null;
}

function allowsLocalRuntimeDefaults(env: NodeJS.ProcessEnv) {
  return env.NODE_ENV !== "production" && !truthyFlag(env.STUDIO_HOSTED) && !truthyFlag(env.COGNIDESK_STUDIO_HOSTED);
}

function truthyFlag(value: string | undefined) {
  return ["1", "true", "yes", "on"].includes(value?.trim().toLowerCase() ?? "");
}

export function claimsFromTrustedStudioHeaders(
  headers: IncomingHttpHeaders,
  env: NodeJS.ProcessEnv = process.env,
  now = Date.now(),
): StudioClaims {
  const expectedSecret = operatorRuntimeSecret(env);
  if (!expectedSecret) {
    throw new Error("STUDIO_OPERATOR_RUNTIME_SECRET is required for Studio Operator Runtime WebSocket authentication");
  }

  const encodedClaims = headerValue(headers, claimsHeader);
  const suppliedSignature = headerValue(headers, signatureHeader);
  if (!encodedClaims || !suppliedSignature) {
    throw new Error("Studio Operator Runtime WebSocket authentication failed");
  }

  const expectedSignature = signStudioRuntimeClaimsPayload(encodedClaims, expectedSecret);
  if (!secureEqual(suppliedSignature, expectedSignature)) {
    throw new Error("Studio Operator Runtime WebSocket authentication failed");
  }

  const claims = parseSignedClaims(encodedClaims);
  if (claims.expiresAt + maxClockSkewMs < now) {
    throw new Error("Studio Operator Runtime WebSocket authentication expired");
  }

  return {
    userId: claims.userId,
    role: claims.role,
    ...(claims.permissions ? { permissions: claims.permissions } : {}),
    ...(claims.sessionToken ? { sessionToken: claims.sessionToken } : {}),
  };
}

export function signStudioRuntimeClaims(
  claims: StudioClaims,
  env: NodeJS.ProcessEnv = process.env,
  options: { now?: number; ttlMs?: number; nonce?: string } = {},
): Record<string, string> {
  const secret = operatorRuntimeSecret(env);
  if (!secret) {
    throw new Error("STUDIO_OPERATOR_RUNTIME_SECRET is required for Studio Operator Runtime WebSocket authentication");
  }
  const now = options.now ?? Date.now();
  const payload: SignedStudioRuntimeClaims = {
    userId: claims.userId,
    role: claims.role,
    ...(claims.permissions ? { permissions: claims.permissions } : {}),
    ...(claims.sessionToken ? { sessionToken: claims.sessionToken } : {}),
    expiresAt: now + (options.ttlMs ?? defaultClaimsTtlMs),
    ...(options.nonce ? { nonce: options.nonce } : {}),
  };
  const encodedClaims = Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
  return {
    [claimsHeader]: encodedClaims,
    [signatureHeader]: signStudioRuntimeClaimsPayload(encodedClaims, secret),
  };
}

function parseSignedClaims(encodedClaims: string): SignedStudioRuntimeClaims {
  let value: unknown;
  try {
    value = JSON.parse(Buffer.from(encodedClaims, "base64url").toString("utf8")) as unknown;
  } catch {
    throw new Error("Studio Operator Runtime WebSocket authentication failed");
  }
  if (!isRecord(value)) throw new Error("Studio Operator Runtime WebSocket authentication failed");
  const userId = typeof value.userId === "string" ? value.userId.trim() : "";
  const role = typeof value.role === "string" ? value.role.trim() : "";
  const expiresAt = typeof value.expiresAt === "number" ? value.expiresAt : Number.NaN;
  const permissions = Array.isArray(value.permissions)
    ? value.permissions.filter((permission): permission is string => typeof permission === "string")
    : undefined;
  const sessionToken = typeof value.sessionToken === "string" ? value.sessionToken.trim() : undefined;
  const nonce = typeof value.nonce === "string" ? value.nonce : undefined;
  if (!userId || !role || !Number.isFinite(expiresAt)) {
    throw new Error("Studio Operator Runtime WebSocket authentication failed");
  }
  return {
    userId,
    role,
    expiresAt,
    ...(permissions ? { permissions } : {}),
    ...(sessionToken ? { sessionToken } : {}),
    ...(nonce ? { nonce } : {}),
  };
}

function signStudioRuntimeClaimsPayload(encodedClaims: string, secret: string) {
  return createHmac("sha256", secret).update(encodedClaims).digest("base64url");
}

function headerValue(headers: IncomingHttpHeaders, name: string) {
  const value = headers[name.toLowerCase()];
  if (Array.isArray(value)) return value.find((item) => item.trim());
  return value;
}

function secureEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}
