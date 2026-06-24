import { createHmac, timingSafeEqual } from "node:crypto";
import type {
  ParseSlackSignedRequestOptions,
  SlackSignedRequest,
  ValidateSlackRequestSignatureInput,
} from "./contracts.js";

export async function parseSlackSignedRequest(
  request: Request,
  options: ParseSlackSignedRequestOptions = {},
): Promise<SlackSignedRequest> {
  const rawBody = await request.text();
  const requireSignature = options.requireSignature ?? true;
  const validSignature = requireSignature;
  if (requireSignature) {
    if (!options.signingSecret) throw new Error("Slack signing secret is required to validate request signatures.");
    const signature = request.headers.get("x-slack-signature") ?? "";
    const timestamp = request.headers.get("x-slack-request-timestamp") ?? "";
    if (!validateSlackRequestSignature({
      signingSecret: options.signingSecret,
      rawBody,
      signature,
      timestamp,
      ...(options.nowSeconds !== undefined ? { nowSeconds: options.nowSeconds } : {}),
      ...(options.timestampToleranceSeconds !== undefined
        ? { timestampToleranceSeconds: options.timestampToleranceSeconds }
        : {}),
    })) {
      throw new Error("Slack request signature validation failed.");
    }
  }

  const contentType = request.headers.get("content-type") ?? undefined;
  if (contentType?.includes("application/json")) {
    return {
      rawBody,
      contentType,
      validSignature,
      json: rawBody ? JSON.parse(rawBody) as unknown : undefined,
    };
  }
  if (contentType?.includes("application/x-www-form-urlencoded")) {
    const form = formBody(rawBody);
    const payloadText = form.payload;
    return {
      rawBody,
      contentType,
      validSignature,
      form,
      ...(payloadText ? { payload: JSON.parse(payloadText) as unknown } : {}),
    };
  }
  return { rawBody, validSignature, ...(contentType ? { contentType } : {}) };
}

export function validateSlackRequestSignature(input: ValidateSlackRequestSignatureInput) {
  if (!input.signingSecret) throw new Error("Slack signing secret is required to validate request signatures.");
  const timestamp = typeof input.timestamp === "number" ? input.timestamp : Number(input.timestamp);
  if (!Number.isFinite(timestamp)) return false;
  const toleranceSeconds = input.timestampToleranceSeconds ?? 300;
  const nowSeconds = input.nowSeconds ?? Math.floor(Date.now() / 1000);
  if (toleranceSeconds >= 0 && Math.abs(nowSeconds - timestamp) > toleranceSeconds) return false;

  const version = input.version ?? "v0";
  const rawBody = Buffer.isBuffer(input.rawBody) ? input.rawBody.toString("utf8") : input.rawBody;
  const base = `${version}:${timestamp}:${rawBody}`;
  const expected = `${version}=${createHmac("sha256", input.signingSecret).update(base).digest("hex")}`;
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(input.signature);
  return expectedBuffer.length === actualBuffer.length
    && timingSafeEqual(expectedBuffer, actualBuffer);
}

function formBody(rawBody: string) {
  const params = new URLSearchParams(rawBody);
  const values: Record<string, string> = {};
  for (const [key, value] of params) values[key] = value;
  return values;
}
