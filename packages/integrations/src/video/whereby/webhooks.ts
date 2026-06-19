import { createHmac, timingSafeEqual } from "node:crypto";
import type {
  ParseWherebyWebhookRequestOptions,
  ValidateWherebyWebhookSignatureInput,
  WherebySignedWebhookRequest,
  WherebyWebhookEvent,
} from "./contracts.js";

export async function parseWherebyWebhookRequest(
  request: Request,
  options: ParseWherebyWebhookRequestOptions = {},
): Promise<WherebySignedWebhookRequest> {
  const rawBody = await request.text();
  const signatureHeader = request.headers.get("whereby-signature");
  const requireSignature = options.requireSignature ?? true;

  let verified = false;
  if (options.verifier) {
    verified = await options.verifier({ request, rawBody, signatureHeader });
  } else if (options.webhookSigningSecret && signatureHeader) {
    verified = validateWherebyWebhookSignature({
      webhookSigningSecret: options.webhookSigningSecret,
      rawBody,
      signatureHeader,
      ...(options.nowSeconds !== undefined ? { nowSeconds: options.nowSeconds } : {}),
      ...(options.timestampToleranceSeconds !== undefined
        ? { timestampToleranceSeconds: options.timestampToleranceSeconds }
        : {}),
    });
  }
  if (requireSignature && !verified) {
    throw new Error("Whereby webhook signature validation failed.");
  }

  const contentType = request.headers.get("content-type") ?? undefined;
  const parsed = contentType?.includes("application/json") && rawBody
    ? JSON.parse(rawBody) as WherebyWebhookEvent
    : undefined;
  return {
    rawBody,
    verified,
    ...(contentType ? { contentType } : {}),
    ...(signatureHeader ? { signatureHeader } : {}),
    ...(parsed ? { json: parsed, eventType: parsed.type, data: parsed.data } : {}),
  };
}

export function validateWherebyWebhookSignature(input: ValidateWherebyWebhookSignatureInput): boolean {
  const parsed = parseWherebySignatureHeader(input.signatureHeader);
  if (!parsed) return false;
  const timestamp = Number(parsed.timestamp);
  if (!Number.isFinite(timestamp)) return false;
  const toleranceSeconds = input.timestampToleranceSeconds ?? 300;
  const nowSeconds = input.nowSeconds ?? Math.floor(Date.now() / 1000);
  if (toleranceSeconds >= 0 && Math.abs(nowSeconds - timestamp) > toleranceSeconds) return false;

  const rawBody = Buffer.isBuffer(input.rawBody) ? input.rawBody.toString("utf8") : input.rawBody;
  const signedPayload = `${parsed.timestamp}.${rawBody}`;
  const expected = createHmac("sha256", input.webhookSigningSecret).update(signedPayload).digest("hex");
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(parsed.signature);
  return expectedBuffer.length === actualBuffer.length
    && timingSafeEqual(expectedBuffer, actualBuffer);
}

export function parseWherebySignatureHeader(header: string): { timestamp: string; signature: string } | undefined {
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
