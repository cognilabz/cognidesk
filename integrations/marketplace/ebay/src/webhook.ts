import { createHash, createVerify } from "node:crypto";
import type {
  EbayMarketplaceJsonObject,
  EbayNotificationSignatureHeader,
  EbayNotificationWebhook,
  ParseEbayNotificationWebhookOptions,
} from "./contracts.js";
import { constantTimeEqual, readString } from "./utils.js";

export function createEbayNotificationChallengeResponse(input: {
  challengeCode: string;
  verificationToken: string;
  endpoint: string;
}): { challengeResponse: string } {
  if (!isValidEbayVerificationToken(input.verificationToken)) {
    throw new Error("eBay verification token must be 32-80 characters and contain only letters, numbers, underscores, or hyphens.");
  }
  const challengeResponse = createHash("sha256")
    .update(input.challengeCode)
    .update(input.verificationToken)
    .update(input.endpoint)
    .digest("hex");
  return { challengeResponse };
}

export function parseEbayNotificationSignatureHeader(header: string): EbayNotificationSignatureHeader {
  const decoded = Buffer.from(header, "base64").toString("utf8");
  const parsed = JSON.parse(decoded) as EbayNotificationSignatureHeader;
  if (!parsed.kid || !parsed.signature || !parsed.alg || !parsed.digest) {
    throw new Error("eBay notification signature header is missing kid, algorithm, digest, or signature.");
  }
  return parsed;
}

export function verifyEbayNotificationSignature(input: {
  rawBody: string | Buffer;
  signatureHeader: string | EbayNotificationSignatureHeader;
  publicKey: string;
}): boolean {
  const signatureHeader = typeof input.signatureHeader === "string"
    ? parseEbayNotificationSignatureHeader(input.signatureHeader)
    : input.signatureHeader;
  if (String(signatureHeader.alg).toUpperCase() !== "ECDSA") {
    throw new Error(`Unsupported eBay notification signature algorithm '${signatureHeader.alg}'.`);
  }
  if (String(signatureHeader.digest).toUpperCase() !== "SHA1") {
    throw new Error(`Unsupported eBay notification signature digest '${signatureHeader.digest}'.`);
  }
  const verifier = createVerify("sha1");
  verifier.update(input.rawBody);
  verifier.end();
  return verifier.verify(input.publicKey, Buffer.from(signatureHeader.signature ?? "", "base64"));
}

export async function parseEbayNotificationWebhook(
  request: Request,
  options: ParseEbayNotificationWebhookOptions = {},
): Promise<EbayNotificationWebhook> {
  if (options.expectedSharedSecret) {
    const headerName = options.sharedSecretHeaderName ?? "x-cognidesk-webhook-secret";
    const actual = request.headers.get(headerName);
    if (!actual || !constantTimeEqual(actual, options.expectedSharedSecret)) {
      throw new Error("eBay notification shared-secret verification failed.");
    }
  }

  const rawBody = await request.text();
  const encodedSignatureHeader = request.headers.get("x-ebay-signature");
  const requireEbaySignature = options.requireEbaySignature ?? true;
  let signatureHeader: EbayNotificationSignatureHeader | undefined;

  if (encodedSignatureHeader) {
    signatureHeader = parseEbayNotificationSignatureHeader(encodedSignatureHeader);
    const verified = options.verifySignature
      ? await options.verifySignature({ rawBody, signatureHeader })
      : options.publicKey
        ? verifyEbayNotificationSignature({ rawBody, signatureHeader, publicKey: options.publicKey })
        : false;
    if (!verified && requireEbaySignature) throw new Error("eBay notification signature verification failed.");
  } else if (requireEbaySignature) {
    throw new Error("eBay notification signature header is required.");
  }

  const payload = rawBody ? JSON.parse(rawBody) as EbayMarketplaceJsonObject : {};
  const topic = readString(payload, "metadata.topic") ?? readString(payload, "topic");
  const notificationId = readString(payload, "notificationId") ?? readString(payload, "notificationIdempotencyKey");
  return {
    rawBody,
    ...(signatureHeader ? { signatureHeader } : {}),
    ...(topic ? { topic } : {}),
    ...(notificationId ? { notificationId } : {}),
    payload,
  };
}

function isValidEbayVerificationToken(token: string) {
  return /^[A-Za-z0-9_-]{32,80}$/.test(token);
}
