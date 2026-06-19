import { createHmac, timingSafeEqual } from "node:crypto";
import type {
  ParseRcsWebhookOptions,
  RcsMessagingJsonObject,
  RcsWebhookEnvelope,
  RcsWebhookEvent,
  RcsWebhookEventKind,
  ValidateRcsWebhookSignatureInput,
} from "./contracts.js";
import { stripUndefined } from "./request.js";

export function validateRcsWebhookSignature(input: ValidateRcsWebhookSignatureInput) {
  const decodedBody = Buffer.from(input.encodedMessageBody, "base64");
  const expected = createHmac("sha512", input.clientToken).update(decodedBody).digest("base64");
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(input.signature);
  return expectedBuffer.length === actualBuffer.length
    && timingSafeEqual(expectedBuffer, actualBuffer);
}

export async function parseRcsWebhook(
  request: Request,
  options: ParseRcsWebhookOptions = {},
): Promise<RcsWebhookEvent> {
  const rawBody = await request.text();
  const envelope = rawBody ? JSON.parse(rawBody) as RcsWebhookEnvelope : {};
  const encodedMessageBody = envelope.message?.body ?? envelope.message?.data;
  const decodedBody = encodedMessageBody ? Buffer.from(encodedMessageBody, "base64").toString("utf8") : rawBody;
  const payload = decodedBody ? JSON.parse(decodedBody) as RcsMessagingJsonObject : {};
  const requireSignature = options.requireSignature
    ?? Boolean(options.clientToken || options.verifier || options.sharedSecret || options.jwtVerifier);

  if (requireSignature) {
    const verified = await verifyRcsWebhook(stripUndefined({
      request,
      rawBody,
      envelope,
      decodedBody,
      encodedMessageBody,
      options,
    }) as unknown as {
      request: Request;
      rawBody: string;
      envelope: RcsWebhookEnvelope;
      decodedBody: string;
      encodedMessageBody?: string;
      options: ParseRcsWebhookOptions;
    });
    if (!verified) throw new Error("RCS webhook verification failed.");
  }

  return stripUndefined({
    kind: classifyRcsWebhookPayload(payload, envelope),
    rawBody,
    encodedMessageBody,
    decodedBody,
    envelope,
    payload,
  }) as unknown as RcsWebhookEvent;
}

export function verifyRcsWebhookChallenge(input: {
  clientToken: string | undefined;
  secret: string | undefined;
  expectedClientToken: string;
}) {
  if (!input.secret) return undefined;
  return input.clientToken === input.expectedClientToken ? input.secret : undefined;
}

async function verifyRcsWebhook(input: {
  request: Request;
  rawBody: string;
  envelope: RcsWebhookEnvelope;
  decodedBody: string;
  encodedMessageBody?: string;
  options: ParseRcsWebhookOptions;
}) {
  if (input.options.verifier) {
    return input.options.verifier({
      request: input.request,
      rawBody: input.rawBody,
      envelope: input.envelope,
      decodedBody: input.decodedBody,
    });
  }

  if (input.options.clientToken) {
    const signature = input.request.headers.get("x-goog-signature") ?? "";
    if (!input.encodedMessageBody || !signature) return false;
    return validateRcsWebhookSignature({
      clientToken: input.options.clientToken,
      encodedMessageBody: input.encodedMessageBody,
      signature,
    });
  }

  if (input.options.sharedSecret) {
    const actual = input.request.headers.get("x-cognidesk-rcs-secret")
      ?? input.request.headers.get("x-rcs-secret")
      ?? "";
    return timingSafeStringEqual(input.options.sharedSecret, actual);
  }

  if (input.options.jwtVerifier) {
    const authorization = input.request.headers.get("authorization") ?? "";
    const token = authorization.toLowerCase().startsWith("bearer ") ? authorization.slice(7) : "";
    if (!token) return false;
    return input.options.jwtVerifier({
      token,
      request: input.request,
      rawBody: input.rawBody,
      envelope: input.envelope,
      decodedBody: input.decodedBody,
    });
  }

  return false;
}

function classifyRcsWebhookPayload(payload: RcsMessagingJsonObject, envelope: RcsWebhookEnvelope): RcsWebhookEventKind {
  if (envelope.clientToken || envelope.secret) return "verification";
  if (typeof payload.text === "string" || payload.location || payload.userFile) return "message";
  if (payload.suggestionResponse) return "suggestion";
  if (payload.agentLaunchEvent) return "platform";
  if (payload.eventType === "DELIVERED") return "delivery-receipt";
  if (payload.eventType === "READ") return "read-receipt";
  if (payload.eventType === "IS_TYPING") return "typing";
  if (payload.eventType === "UNSUBSCRIBE" || payload.eventType === "SUBSCRIBE") return "subscription";
  return "unknown";
}

function timingSafeStringEqual(expected: string, actual: string) {
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(actual);
  return expectedBuffer.length === actualBuffer.length
    && timingSafeEqual(expectedBuffer, actualBuffer);
}
