import { createHmac, timingSafeEqual } from "node:crypto";
import type {
  ParseZoomWebhookRequestOptions,
  ValidateZoomWebhookSignatureInput,
  ZoomSignedWebhookRequest,
  ZoomWebhookEvent,
  ZoomWebhookValidationInput,
  ZoomWebhookValidationResponse,
} from "./contracts.js";

export async function parseZoomWebhookRequest(
  request: Request,
  options: ParseZoomWebhookRequestOptions = {},
): Promise<ZoomSignedWebhookRequest> {
  const rawBody = await request.text();
  const requireSignature = options.requireSignature ?? true;
  if (requireSignature) {
    if (!options.webhookSecretToken) throw new Error("Zoom webhook secret token is required to validate request signatures.");
    const signature = request.headers.get("x-zm-signature") ?? "";
    const timestamp = request.headers.get("x-zm-request-timestamp") ?? "";
    if (!validateZoomWebhookSignature({
      webhookSecretToken: options.webhookSecretToken,
      rawBody,
      signature,
      timestamp,
      ...(options.nowSeconds !== undefined ? { nowSeconds: options.nowSeconds } : {}),
      ...(options.timestampToleranceSeconds !== undefined
        ? { timestampToleranceSeconds: options.timestampToleranceSeconds }
        : {}),
    })) {
      throw new Error("Zoom webhook signature validation failed.");
    }
  }

  const contentType = request.headers.get("content-type") ?? undefined;
  const parsed = contentType?.includes("application/json") && rawBody
    ? JSON.parse(rawBody) as ZoomWebhookEvent
    : undefined;
  const plainToken = typeof parsed?.payload?.plainToken === "string" ? parsed.payload.plainToken : undefined;
  return {
    rawBody,
    ...(contentType ? { contentType } : {}),
    ...(parsed ? { json: parsed, event: parsed.event, payload: parsed.payload } : {}),
    ...(plainToken && options.webhookSecretToken
      ? { urlValidationResponse: createZoomWebhookValidationResponse({
        webhookSecretToken: options.webhookSecretToken,
        plainToken,
      }) }
      : {}),
  };
}

export function validateZoomWebhookSignature(input: ValidateZoomWebhookSignatureInput) {
  const timestamp = typeof input.timestamp === "number" ? input.timestamp : Number(input.timestamp);
  if (!Number.isFinite(timestamp)) return false;
  const toleranceSeconds = input.timestampToleranceSeconds ?? 300;
  const nowSeconds = input.nowSeconds ?? Math.floor(Date.now() / 1000);
  if (toleranceSeconds >= 0 && Math.abs(nowSeconds - timestamp) > toleranceSeconds) return false;

  const version = input.version ?? "v0";
  const rawBody = Buffer.isBuffer(input.rawBody) ? input.rawBody.toString("utf8") : input.rawBody;
  const base = `${version}:${timestamp}:${rawBody}`;
  const expected = `${version}=${createHmac("sha256", input.webhookSecretToken).update(base).digest("hex")}`;
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(input.signature);
  return expectedBuffer.length === actualBuffer.length
    && timingSafeEqual(expectedBuffer, actualBuffer);
}

export function createZoomWebhookValidationResponse(
  input: ZoomWebhookValidationInput,
): ZoomWebhookValidationResponse {
  return {
    plainToken: input.plainToken,
    encryptedToken: createHmac("sha256", input.webhookSecretToken).update(input.plainToken).digest("hex"),
  };
}
