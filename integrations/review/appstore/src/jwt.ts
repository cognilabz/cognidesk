import { createSign, randomUUID } from "node:crypto";
import type { AppStoreJwtOptions } from "./contracts.js";

export function createAppStoreConnectJwt(options: AppStoreJwtOptions): string {
  const now = Math.floor((options.now?.() ?? Date.now()) / 1000);
  const header = { alg: "ES256", kid: options.keyId, typ: "JWT" };
  const payload = {
    iss: options.issuerId,
    aud: options.audience ?? "appstoreconnect-v1",
    iat: now,
    exp: now + (options.ttlSeconds ?? 20 * 60),
    jti: options.jti ?? randomUUID(),
  };
  const signingInput = `${base64urlJson(header)}.${base64urlJson(payload)}`;
  const signature = createSign("SHA256")
    .update(signingInput)
    .sign({ key: options.privateKey, dsaEncoding: "ieee-p1363" });
  return `${signingInput}.${base64url(signature)}`;
}

function base64urlJson(value: unknown): string {
  return base64url(Buffer.from(JSON.stringify(value)));
}

function base64url(value: Buffer): string {
  return value.toString("base64").replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}
