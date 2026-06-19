import { createHmac, timingSafeEqual } from "node:crypto";
import type {
  ParseTwilioVoiceWebhookOptions,
  TwilioCallStatus,
  TwilioVoiceWebhook,
} from "./contracts.js";

export async function parseTwilioVoiceWebhook(
  request: Request,
  options: ParseTwilioVoiceWebhookOptions = {},
): Promise<TwilioVoiceWebhook> {
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
  const callStatus = parseTwilioCallStatus(raw.CallStatus);
  return {
    ...(raw.CallSid ? { callSid: raw.CallSid } : {}),
    ...(raw.AccountSid ? { accountSid: raw.AccountSid } : {}),
    ...(raw.From ? { from: raw.From } : {}),
    ...(raw.To ? { to: raw.To } : {}),
    ...(callStatus ? { callStatus } : {}),
    ...(raw.Direction ? { direction: raw.Direction } : {}),
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

function parseTwilioCallStatus(status: string | undefined): TwilioCallStatus | undefined {
  switch (status) {
    case "queued":
    case "initiated":
    case "ringing":
    case "in-progress":
    case "completed":
    case "busy":
    case "failed":
    case "no-answer":
    case "canceled":
      return status;
    default:
      return undefined;
  }
}

async function parseFormRequest(request: Request): Promise<Record<string, string>> {
  const form = await request.formData();
  const values: Record<string, string> = {};
  for (const [key, value] of form as unknown as Iterable<[string, FormDataEntryValue]>) {
    if (typeof value === "string") values[key] = value;
  }
  return values;
}
