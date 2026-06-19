import { Buffer } from "node:buffer";
import { createHmac, timingSafeEqual } from "node:crypto";
import type {
  ParseTwilioSmsWebhookOptions,
  TwilioSmsWebhook,
} from "./contracts.js";

export async function parseTwilioSmsWebhook(
  request: Request,
  options: ParseTwilioSmsWebhookOptions = {},
): Promise<TwilioSmsWebhook> {
  const raw = await parseFormRequest(request);
  const requireSignature = options.requireSignature ?? true;
  if (requireSignature) {
    if (!options.authToken) throw new Error("Twilio auth token is required to validate webhook signatures.");
    const signature = request.headers.get("x-twilio-signature") ?? "";
    const url = options.publicUrl ?? request.url;
    if (!validateTwilioRequestSignature({
      url,
      params: raw,
      signature,
      authToken: options.authToken,
    })) {
      throw new Error("Twilio webhook signature validation failed.");
    }
  }

  return {
    ...(raw.MessageSid ? { messageSid: raw.MessageSid } : {}),
    ...(raw.SmsSid ? { smsSid: raw.SmsSid } : {}),
    ...(raw.AccountSid ? { accountSid: raw.AccountSid } : {}),
    ...(raw.MessagingServiceSid ? { messagingServiceSid: raw.MessagingServiceSid } : {}),
    ...(raw.From ? { from: raw.From } : {}),
    ...(raw.To ? { to: raw.To } : {}),
    ...(raw.Body ? { body: raw.Body } : {}),
    ...(raw.MessageStatus ? { messageStatus: raw.MessageStatus } : {}),
    ...(raw.SmsStatus ? { smsStatus: raw.SmsStatus } : {}),
    ...(raw.NumMedia !== undefined ? { numMedia: Number(raw.NumMedia) } : {}),
    media: parseTwilioMedia(raw),
    raw,
  };
}

export function validateTwilioRequestSignature(input: {
  url: string;
  params: Record<string, string>;
  signature: string;
  authToken: string;
}) {
  const signed = Object.keys(input.params).sort()
    .reduce((value, key) => `${value}${key}${input.params[key] ?? ""}`, input.url);
  const expected = createHmac("sha1", input.authToken).update(signed).digest("base64");
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(input.signature);
  return expectedBuffer.length === actualBuffer.length
    && timingSafeEqual(expectedBuffer, actualBuffer);
}

async function parseFormRequest(request: Request): Promise<Record<string, string>> {
  const form = await request.formData();
  const values: Record<string, string> = {};
  for (const [key, value] of form as unknown as Iterable<[string, FormDataEntryValue]>) {
    if (typeof value === "string") values[key] = value;
  }
  return values;
}

function parseTwilioMedia(raw: Record<string, string>) {
  const count = Number(raw.NumMedia ?? 0);
  const media: Array<{ url: string; contentType?: string }> = [];
  for (let index = 0; index < count; index += 1) {
    const url = raw[`MediaUrl${index}`];
    if (url) {
      media.push({
        url,
        ...(raw[`MediaContentType${index}`] ? { contentType: raw[`MediaContentType${index}`] } : {}),
      });
    }
  }
  return media;
}
