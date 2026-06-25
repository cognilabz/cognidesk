import { createHash, createSign } from "node:crypto";
import {
  generateDigestHeader,
  generateSignature,
  generateSignatureInput,
  type Config as EbayDigitalSignatureConfig,
} from "digital-signature-nodejs-sdk";
import type { EbayDigitalSignatureOptions, EbaySignedRequestInput } from "./contracts.js";

export function createEbayDigitalSignatureHeaders(input: EbaySignedRequestInput & EbayDigitalSignatureOptions): Record<string, string> {
  if (input.algorithm && input.algorithm !== "rsa-v1_5-sha256") {
    throw new Error(`Unsupported eBay digital signature algorithm '${input.algorithm}'.`);
  }
  if (input.created !== undefined) return createDeterministicEbayDigitalSignatureHeaders(input);
  const url = new URL(input.url);
  const headers: Record<string, string> = {
    "x-ebay-signature-key": input.publicKeyJwe,
  };
  const coveredComponents = ["x-ebay-signature-key", "@method", "@path", "@authority"];
  if (input.body !== undefined) {
    headers["content-digest"] = generateDigestHeader(Buffer.from(input.body), "sha256");
    coveredComponents.unshift("content-digest");
  }
  const config = ebayDigitalSignatureConfig({
    method: input.method,
    path: `${url.pathname}${url.search}`,
    authority: url.host,
    scheme: url.protocol.replace(/:$/, ""),
    targetUri: url.toString(),
    privateKey: input.privateKey,
    publicKeyJwe: input.publicKeyJwe,
    signatureParams: coveredComponents,
  });
  headers["signature-input"] = input.created === undefined
    ? generateSignatureInput(headers, config)
    : `sig1=(${coveredComponents.map((component) => `"${component}"`).join(" ")});created=${input.created}`;
  headers.signature = generateSignature(headers, config);
  return headers;
}

function createDeterministicEbayDigitalSignatureHeaders(
  input: EbaySignedRequestInput & EbayDigitalSignatureOptions,
): Record<string, string> {
  if (input.created === undefined) throw new Error("eBay deterministic signature headers require a created timestamp.");
  const created = input.created;
  const url = new URL(input.url);
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

function ebayDigitalSignatureConfig(input: {
  method: string;
  path: string;
  authority: string;
  scheme: string;
  targetUri: string;
  privateKey: string;
  publicKeyJwe: string;
  signatureParams: string[];
}): EbayDigitalSignatureConfig {
  return {
    digestAlgorithm: "sha256",
    jwe: input.publicKeyJwe,
    jwtExpiration: 0,
    jweHeaderParams: {},
    jwtPayload: {},
    masterKey: "",
    privateKey: input.privateKey,
    publicKey: "",
    signatureComponents: {
      authority: input.authority,
      method: input.method.toUpperCase(),
      path: input.path || "/",
      requestTarget: input.path || "/",
      scheme: input.scheme,
      targetUri: input.targetUri,
    },
    signatureParams: input.signatureParams,
  };
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
