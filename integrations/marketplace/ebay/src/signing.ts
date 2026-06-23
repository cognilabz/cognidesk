import { createHash, createSign } from "node:crypto";
import type { EbayDigitalSignatureOptions, EbaySignedRequestInput } from "./contracts.js";

export function createEbayDigitalSignatureHeaders(input: EbaySignedRequestInput & EbayDigitalSignatureOptions): Record<string, string> {
  if (input.algorithm && input.algorithm !== "rsa-v1_5-sha256") {
    throw new Error(`Unsupported eBay digital signature algorithm '${input.algorithm}'.`);
  }
  const url = new URL(input.url);
  const created = input.created ?? Math.floor(Date.now() / 1000);
  const headers: Record<string, string> = {
    "x-ebay-signature-key": input.publicKeyJwe,
  };
  const coveredComponents = ['"x-ebay-signature-key"', '"@method"', '"@path"', '"@authority"'];
  if (input.body !== undefined) {
    headers["content-digest"] = `sha-256=:${createHash("sha256").update(input.body).digest("base64")}:`;
    coveredComponents.unshift('"content-digest"');
  }
  headers["signature-input"] = `sig1=(${coveredComponents.join(" ")});created=${created}`;
  const signatureBase = ebaySignatureBase({
    method: input.method,
    path: `${url.pathname}${url.search}`,
    authority: url.host,
    headers,
    coveredComponents,
    created,
  });
  const signature = createSign("RSA-SHA256").update(signatureBase).sign(input.privateKey).toString("base64");
  headers.signature = `sig1=:${signature}:`;
  return headers;
}

function ebaySignatureBase(input: {
  method: string;
  path: string;
  authority: string;
  headers: Record<string, string>;
  coveredComponents: string[];
  created: number;
}) {
  const lines = input.coveredComponents.map((component) => {
    if (component === '"content-digest"') return `"content-digest": ${input.headers["content-digest"]}`;
    if (component === '"x-ebay-signature-key"') return `"x-ebay-signature-key": ${input.headers["x-ebay-signature-key"]}`;
    if (component === '"@method"') return `"@method": ${input.method.toUpperCase()}`;
    if (component === '"@path"') return `"@path": ${input.path || "/"}`;
    if (component === '"@authority"') return `"@authority": ${input.authority}`;
    throw new Error(`Unsupported eBay signature component ${component}.`);
  });
  lines.push(`"@signature-params": (${input.coveredComponents.join(" ")});created=${input.created}`);
  return lines.join("\n");
}
