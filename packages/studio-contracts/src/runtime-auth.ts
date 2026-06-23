import { createHmac } from "node:crypto";

export const studioRuntimeClaimsHeader = "x-studio-runtime-claims";
export const studioRuntimeSignatureHeader = "x-studio-runtime-signature";
export const defaultStudioRuntimeClaimsTtlMs = 60_000;

export interface StudioRuntimeClaims {
  userId: string;
  role: string;
  permissions?: readonly string[];
  sessionToken?: string;
}

export interface SignedStudioRuntimeClaims extends StudioRuntimeClaims {
  expiresAt: number;
}

export function signStudioRuntimeHeaders(
  claims: StudioRuntimeClaims,
  secret: string,
  options: { now?: number; ttlMs?: number } = {},
): Record<string, string> {
  const now = options.now ?? Date.now();
  const payload: SignedStudioRuntimeClaims = {
    userId: claims.userId,
    role: claims.role,
    ...(claims.permissions ? { permissions: claims.permissions } : {}),
    ...(claims.sessionToken ? { sessionToken: claims.sessionToken } : {}),
    expiresAt: now + (options.ttlMs ?? defaultStudioRuntimeClaimsTtlMs),
  };
  const encodedClaims = Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
  return {
    [studioRuntimeClaimsHeader]: encodedClaims,
    [studioRuntimeSignatureHeader]: signStudioRuntimeClaimsPayload(encodedClaims, secret),
  };
}

export function signStudioRuntimeClaimsPayload(encodedClaims: string, secret: string) {
  return createHmac("sha256", secret).update(encodedClaims).digest("base64url");
}
