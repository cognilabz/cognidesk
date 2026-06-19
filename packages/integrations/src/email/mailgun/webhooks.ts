import { Buffer } from "node:buffer";
import { createHmac, timingSafeEqual } from "node:crypto";
import type {
  MailgunEventWebhook,
  MailgunInboundRouteMessage,
  ParseMailgunWebhookOptions,
} from "./contracts.js";

export async function parseMailgunWebhook(
  request: Request,
  options: ParseMailgunWebhookOptions = {},
): Promise<MailgunEventWebhook> {
  const payload = await request.json() as MailgunEventWebhook;
  const verified = verifyMailgunWebhookSignature(payload, options);
  if (options.requireVerifiedSignature && !verified) {
    throw new Error("Mailgun webhook signature verification failed.");
  }
  return payload;
}

export async function parseMailgunInboundRouteRequest(
  request: Request,
  options: ParseMailgunWebhookOptions = {},
): Promise<MailgunInboundRouteMessage> {
  const form = await request.formData();
  const fields: Record<string, FormDataEntryValue> = {};
  form.forEach((value, key) => {
    fields[key] = value;
  });
  const payload = {
    signature: stringField(fields.signature),
    timestamp: stringField(fields.timestamp),
    token: stringField(fields.token),
    subject: stringField(fields.subject),
    sender: stringField(fields.sender),
    from: stringField(fields.from),
    recipient: stringField(fields.recipient),
    "body-plain": stringField(fields["body-plain"]),
    "body-html": stringField(fields["body-html"]),
    "body-mime": stringField(fields["body-mime"]),
    "message-headers": stringField(fields["message-headers"]),
    "attachment-count": stringField(fields["attachment-count"]),
    verifiedSignature: verifyMailgunRouteSignature(fields, options),
    fields,
  };
  if (options.requireVerifiedSignature && !payload.verifiedSignature) {
    throw new Error("Mailgun inbound route signature verification failed.");
  }
  return payload;
}

export function verifyMailgunWebhookSignature(
  payload: MailgunEventWebhook,
  options: ParseMailgunWebhookOptions = {},
): boolean {
  const timestamp = payload.signature?.timestamp;
  const token = payload.signature?.token;
  const signature = payload.signature?.signature;
  if (!options.signingKey || !timestamp || !token || !signature) return false;

  const toleranceSeconds = options.toleranceSeconds ?? 15 * 60;
  if (toleranceSeconds > 0) {
    const now = Math.floor((options.now?.() ?? Date.now()) / 1000);
    if (Math.abs(now - Number(timestamp)) > toleranceSeconds) return false;
  }

  const expected = createHmac("sha256", options.signingKey)
    .update(`${timestamp}${token}`)
    .digest("hex");
  return constantTimeEqual(expected, signature);
}

function verifyMailgunRouteSignature(
  fields: Record<string, FormDataEntryValue>,
  options: ParseMailgunWebhookOptions = {},
): boolean {
  const timestamp = stringField(fields.timestamp);
  const token = stringField(fields.token);
  const signature = stringField(fields.signature);
  if (!options.signingKey || !timestamp || !token || !signature) return false;

  const toleranceSeconds = options.toleranceSeconds ?? 15 * 60;
  if (toleranceSeconds > 0) {
    const now = Math.floor((options.now?.() ?? Date.now()) / 1000);
    if (Math.abs(now - Number(timestamp)) > toleranceSeconds) return false;
  }

  const expected = createHmac("sha256", options.signingKey)
    .update(`${timestamp}${token}`)
    .digest("hex");
  return constantTimeEqual(expected, signature);
}

function stringField(value: FormDataEntryValue | undefined) {
  return typeof value === "string" ? value : undefined;
}

function constantTimeEqual(expected: string, actual: string): boolean {
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(actual);
  return expectedBuffer.byteLength === actualBuffer.byteLength && timingSafeEqual(expectedBuffer, actualBuffer);
}
