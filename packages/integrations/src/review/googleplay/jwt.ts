import { createSign } from "node:crypto";
import type { GooglePlayServiceAccountCredentials } from "./contracts.js";

export function createGooglePlayServiceAccountJwt(input: {
  serviceAccount: GooglePlayServiceAccountCredentials;
  scopes: string[];
  audience: string;
  issuedAt: number;
  expiresAt: number;
}): string {
  const header = {
    alg: "RS256",
    typ: "JWT",
    ...(input.serviceAccount.privateKeyId ? { kid: input.serviceAccount.privateKeyId } : {}),
  };
  const payload = {
    iss: input.serviceAccount.clientEmail,
    scope: input.scopes.join(" "),
    aud: input.audience,
    exp: input.expiresAt,
    iat: input.issuedAt,
    ...(input.serviceAccount.subject ? { sub: input.serviceAccount.subject } : {}),
  };
  const signingInput = `${base64UrlJson(header)}.${base64UrlJson(payload)}`;
  const signature = createSign("RSA-SHA256")
    .update(signingInput)
    .end()
    .sign(input.serviceAccount.privateKey, "base64url");
  return `${signingInput}.${signature}`;
}

function base64UrlJson(value: unknown): string {
  return Buffer.from(JSON.stringify(value), "utf8").toString("base64url");
}
