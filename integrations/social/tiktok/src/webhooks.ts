import { createHmac, timingSafeEqual } from "node:crypto";
import type {
  ParseTikTokWebhookOptions,
  TikTokSignatureParts,
  TikTokSignedWebhook,
  TikTokWebhookPayload,
  ValidateTikTokWebhookSignatureInput,
} from "./contracts.js";
import { stripUndefined } from "./request.js";

export async function parseTikTokWebhook(
  request: Request,
  options: ParseTikTokWebhookOptions = {},
): Promise<TikTokSignedWebhook> {
  const rawBody = await request.text();
  const signatureHeader = request.headers.get("tiktok-signature") ?? "";
  const requireSignature = options.requireSignature ?? true;
  let signatureParts: TikTokSignatureParts = {};

  if (signatureHeader) {
    signatureParts = parseTikTokSignatureHeader(signatureHeader);
  }

  if (requireSignature) {
    if (!options.clientSecret) {
      throw new Error("TikTok client secret is required to validate webhook signatures.");
    }
    if (!validateTikTokWebhookSignature(stripUndefined({
      clientSecret: options.clientSecret,
      rawBody,
      signatureHeader,
      nowSeconds: options.nowSeconds,
      toleranceSeconds: options.toleranceSeconds,
    }) as unknown as ValidateTikTokWebhookSignatureInput)) {
      throw new Error("TikTok webhook signature validation failed.");
    }
  }

  const contentType = request.headers.get("content-type") ?? undefined;
  return {
    rawBody,
    ...(contentType ? { contentType } : {}),
    ...(signatureParts.timestamp !== undefined ? { timestamp: signatureParts.timestamp } : {}),
    ...(signatureParts.signature ? { signature: signatureParts.signature } : {}),
    payload: rawBody ? JSON.parse(rawBody) as TikTokWebhookPayload : {},
  };
}

export function validateTikTokWebhookSignature(input: ValidateTikTokWebhookSignatureInput) {
  const parts = parseTikTokSignatureHeader(input.signatureHeader);
  if (parts.timestamp === undefined || !parts.signature) return false;
  if (input.toleranceSeconds !== undefined) {
    const now = input.nowSeconds ?? Math.floor(Date.now() / 1000);
    if (Math.abs(now - parts.timestamp) > input.toleranceSeconds) return false;
  }

  const rawBody = Buffer.isBuffer(input.rawBody) ? input.rawBody.toString("utf8") : input.rawBody;
  const signedPayload = `${parts.timestamp}.${rawBody}`;
  const expected = createHmac("sha256", input.clientSecret).update(signedPayload).digest("hex");
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(parts.signature);
  return expectedBuffer.length === actualBuffer.length && timingSafeEqual(expectedBuffer, actualBuffer);
}

export function parseTikTokSignatureHeader(header: string): TikTokSignatureParts {
  const parts = new Map(
    header
      .split(",")
      .map((part) => part.trim().split("=", 2))
      .filter((part): part is [string, string] => Boolean(part[0]) && part[1] !== undefined),
  );
  const timestampText = parts.get("t");
  const timestamp = timestampText ? Number(timestampText) : undefined;
  const signature = parts.get("s");
  const output: TikTokSignatureParts = {};
  if (typeof timestamp === "number" && Number.isFinite(timestamp)) output.timestamp = timestamp;
  if (signature) output.signature = signature;
  return output;
}
