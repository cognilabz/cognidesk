import { timingSafeEqual } from "node:crypto";
import type { IncomingHttpHeaders } from "node:http";
import type { StudioClaims } from "./types.js";

const localDevRuntimeSecret = "cognidesk-studio-local-runtime-secret-change-me";

export function operatorRuntimeSecret(env: NodeJS.ProcessEnv = process.env): string | null {
  const configured = env.STUDIO_OPERATOR_RUNTIME_SECRET?.trim();
  if (configured) return configured;
  return env.NODE_ENV === "production" ? null : localDevRuntimeSecret;
}

export function claimsFromTrustedStudioHeaders(
  headers: IncomingHttpHeaders,
  env: NodeJS.ProcessEnv = process.env,
): StudioClaims {
  const expectedSecret = operatorRuntimeSecret(env);
  if (!expectedSecret) {
    throw new Error("STUDIO_OPERATOR_RUNTIME_SECRET is required for Studio Operator Runtime WebSocket authentication");
  }

  const suppliedSecret = bearerToken(headerValue(headers, "authorization"));
  if (!suppliedSecret || !secureEqual(suppliedSecret, expectedSecret)) {
    throw new Error("Studio Operator Runtime WebSocket authentication failed");
  }

  const userId = headerValue(headers, "x-studio-user-id")?.trim();
  const role = headerValue(headers, "x-studio-user-role")?.trim();
  const sessionToken = headerValue(headers, "x-studio-session-token")?.trim();
  return {
    userId: userId || "local-dev",
    role: role || "viewer",
    ...(sessionToken ? { sessionToken } : {}),
  };
}

function headerValue(headers: IncomingHttpHeaders, name: string) {
  const value = headers[name.toLowerCase()];
  if (Array.isArray(value)) return value.find((item) => item.trim());
  return value;
}

function bearerToken(value: string | undefined) {
  const match = /^Bearer\s+(.+)$/i.exec(value?.trim() ?? "");
  return match?.[1]?.trim() || null;
}

function secureEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}
