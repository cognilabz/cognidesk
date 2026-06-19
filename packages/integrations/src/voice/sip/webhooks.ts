import { createHmac, timingSafeEqual } from "node:crypto";
import type {
  ParseSipVoiceWebhookOptions,
  SipCallDirection,
  SipCallState,
  SipRecordingStatus,
  SipTranscriptionStatus,
  SipTranscriptionWebhookEvent,
  SipTransferStatus,
  SipVoiceJsonObject,
  SipVoiceProviderResponse,
  SipWebhookBaseEvent,
  SipWebhookEvent,
} from "./contracts.js";

export async function parseSipVoiceWebhook(
  request: Request,
  options: ParseSipVoiceWebhookOptions = {},
): Promise<SipWebhookEvent> {
  const bodyText = await request.text();
  validateSipWebhookSecurity({ request, bodyText, options });
  const raw = parseWebhookBody(bodyText, request.headers.get("content-type") ?? "");
  return normalizeSipWebhookEvent(raw);
}

export function validateSipWebhookSignature(input: {
  body: string;
  signature: string;
  secret: string;
  algorithm?: "sha1" | "sha256" | "sha512";
}) {
  const algorithm = input.algorithm ?? "sha256";
  const signature = input.signature.trim();
  const normalized = signature.startsWith("sha1=") || signature.startsWith("sha256=") || signature.startsWith("sha512=")
    ? signature.slice(signature.indexOf("=") + 1)
    : signature;
  const expectedHex = createHmac(algorithm, input.secret).update(input.body).digest("hex");
  const expectedBase64 = createHmac(algorithm, input.secret).update(input.body).digest("base64");
  return safeEqual(normalized, expectedHex) || safeEqual(normalized, expectedBase64);
}

function validateSipWebhookSecurity(input: {
  request: Request;
  bodyText: string;
  options: ParseSipVoiceWebhookOptions;
}) {
  const sharedSecretHeader = input.options.sharedSecretHeader ?? "x-cognidesk-sip-secret";
  const requireSharedSecret = input.options.requireSharedSecret ?? Boolean(input.options.sharedSecret);
  if (requireSharedSecret) {
    if (!input.options.sharedSecret) throw new Error("SIP webhook shared secret is required.");
    const supplied = input.request.headers.get(sharedSecretHeader) ?? "";
    if (!safeEqual(supplied, input.options.sharedSecret)) {
      throw new Error("SIP webhook shared-secret validation failed.");
    }
  }

  const signatureHeader = input.options.signatureHeader ?? "x-cognidesk-sip-signature";
  const requireSignature = input.options.requireSignature ?? true;
  if (requireSignature) {
    if (!input.options.hmacSecret) throw new Error("SIP webhook HMAC secret is required.");
    const signature = input.request.headers.get(signatureHeader) ?? "";
    const validationInput = {
      body: input.bodyText,
      signature,
      secret: input.options.hmacSecret,
      ...(input.options.signatureAlgorithm ? { algorithm: input.options.signatureAlgorithm } : {}),
    };
    if (!validateSipWebhookSignature(validationInput)) {
      throw new Error("SIP webhook HMAC validation failed.");
    }
  }
}

function parseWebhookBody(bodyText: string, contentType: string): SipVoiceJsonObject {
  if (contentType.includes("application/x-www-form-urlencoded")) {
    const params = new URLSearchParams(bodyText);
    const raw: SipVoiceProviderResponse = {};
    for (const [key, value] of params) raw[key] = value;
    return raw;
  }
  if (!bodyText.trim()) return {};
  const parsed = JSON.parse(bodyText) as unknown;
  if (!isRecord(parsed)) throw new Error("SIP webhook payload must be a JSON object or form body.");
  return parsed;
}

function normalizeSipWebhookEvent(raw: SipVoiceProviderResponse): SipWebhookEvent {
  const eventType = normalizeEventType(getString(raw, "type", "event", "eventType", "kind"));
  const base = webhookBase(raw);
  if (eventType === "call.transfer") {
    return {
      ...base,
      type: "call.transfer",
      transferStatus: normalizeTransferStatus(getString(raw, "transferStatus", "status") ?? "requested"),
      ...(optionalString(raw, "target", "transferTarget", "referTo")),
      ...(optionalString(raw, "reason")),
    };
  }
  if (eventType === "recording") {
    return {
      ...base,
      type: "recording",
      recordingStatus: normalizeRecordingStatus(getString(raw, "recordingStatus", "status") ?? "started"),
      ...(optionalString(raw, "recordingId", "recording_id")),
      ...(optionalString(raw, "recordingUrl", "recording_url", "url")),
      ...(optionalNumber(raw, "durationSeconds", "duration")),
    };
  }
  if (eventType === "transcription") {
    return {
      ...base,
      type: "transcription",
      transcriptionStatus: normalizeTranscriptionStatus(getString(raw, "transcriptionStatus", "status") ?? "completed"),
      ...(optionalString(raw, "transcriptionId", "transcription_id")),
      ...(optionalString(raw, "text", "transcript")),
      ...(optionalNumber(raw, "confidence")),
      ...(optionalBoolean(raw, "isFinal", "final")),
      ...(optionalSpeaker(raw)),
    };
  }
  return {
    ...base,
    type: "call.status",
    status: normalizeCallState(getString(raw, "callStatus", "status", "state") ?? "new"),
    ...(optionalDirection(raw)),
    ...(optionalString(raw, "from")),
    ...(optionalString(raw, "to")),
    ...(optionalString(raw, "reason")),
    ...(optionalString(raw, "sdp")),
  };
}

function webhookBase(raw: SipVoiceProviderResponse): Omit<SipWebhookBaseEvent, "type"> {
  return {
    ...(optionalString(raw, "callId", "call_id", "sipCallId")),
    ...(optionalString(raw, "providerCallId", "provider_call_id", "dialogId")),
    ...(optionalString(raw, "occurredAt", "timestamp", "time")),
    raw,
  };
}

function normalizeEventType(value: string | undefined): SipWebhookEvent["type"] {
  const normalized = (value ?? "call.status").toLowerCase().replaceAll("_", ".").replaceAll("-", ".");
  if (normalized.includes("transfer")) return "call.transfer";
  if (normalized.includes("recording")) return "recording";
  if (normalized.includes("transcription") || normalized.includes("transcript")) return "transcription";
  return "call.status";
}

function normalizeCallState(value: string): SipCallState {
  const normalized = value.toLowerCase().replaceAll("_", "-");
  if (normalized === "in-progress" || normalized === "connected" || normalized === "answered") return "answered";
  if (normalized === "queued" || normalized === "created") return "new";
  if (normalized === "trying" || normalized === "initiated") return "inviting";
  if (normalized === "early-media" || normalized === "early_media") return "early-media";
  if (normalized === "completed" || normalized === "ended" || normalized === "hangup" || normalized === "hung-up") return "completed";
  if (normalized === "busy" || normalized === "no-answer" || normalized === "failed" || normalized === "rejected") return "failed";
  if (["new", "inviting", "ringing", "held", "transferring"].includes(normalized)) return normalized as SipCallState;
  return "new";
}

function normalizeTransferStatus(value: string): SipTransferStatus {
  const normalized = value.toLowerCase().replaceAll("_", "-");
  if (["requested", "accepted", "completed", "failed", "cancelled"].includes(normalized)) return normalized as SipTransferStatus;
  if (normalized === "canceled") return "cancelled";
  return "requested";
}

function normalizeRecordingStatus(value: string): SipRecordingStatus {
  const normalized = value.toLowerCase().replaceAll("_", "-");
  if (["started", "paused", "resumed", "completed", "failed"].includes(normalized)) return normalized as SipRecordingStatus;
  if (normalized === "stopped") return "completed";
  return "started";
}

function normalizeTranscriptionStatus(value: string): SipTranscriptionStatus {
  const normalized = value.toLowerCase().replaceAll("_", "-");
  if (normalized === "interim") return "partial";
  if (["partial", "completed", "failed"].includes(normalized)) return normalized as SipTranscriptionStatus;
  return "completed";
}

function optionalDirection(raw: SipVoiceProviderResponse): { direction: SipCallDirection } | {} {
  const direction = getString(raw, "direction");
  if (direction === "inbound" || direction === "outbound") return { direction };
  return {};
}

function optionalSpeaker(raw: SipVoiceProviderResponse): { speaker: NonNullable<SipTranscriptionWebhookEvent["speaker"]> } | {} {
  const speaker = getString(raw, "speaker");
  if (speaker === "customer" || speaker === "agent" || speaker === "assistant" || speaker === "unknown") {
    return { speaker };
  }
  return {};
}

function optionalString(raw: SipVoiceProviderResponse, ...keys: string[]) {
  const key = keys[0];
  const value = getString(raw, ...keys);
  return key && value ? { [key]: value } : {};
}

function optionalNumber(raw: SipVoiceProviderResponse, ...keys: string[]) {
  const key = keys[0];
  const value = getNumber(raw, ...keys);
  return key && value !== undefined ? { [key]: value } : {};
}

function optionalBoolean(raw: SipVoiceProviderResponse, ...keys: string[]) {
  const key = keys[0];
  const value = getBoolean(raw, ...keys);
  return key && value !== undefined ? { [key]: value } : {};
}

function getString(raw: SipVoiceProviderResponse, ...keys: string[]) {
  for (const key of keys) {
    const value = raw[key];
    if (typeof value === "string" && value.length > 0) return value;
    if (typeof value === "number" || typeof value === "boolean") return String(value);
  }
  return undefined;
}

function getNumber(raw: SipVoiceProviderResponse, ...keys: string[]) {
  for (const key of keys) {
    const value = raw[key];
    if (typeof value === "number") return value;
    if (typeof value === "string" && value.trim()) {
      const parsed = Number(value);
      if (Number.isFinite(parsed)) return parsed;
    }
  }
  return undefined;
}

function getBoolean(raw: SipVoiceProviderResponse, ...keys: string[]) {
  for (const key of keys) {
    const value = raw[key];
    if (typeof value === "boolean") return value;
    if (value === "true") return true;
    if (value === "false") return false;
  }
  return undefined;
}

function isRecord(value: unknown): value is SipVoiceJsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function safeEqual(actual: string, expected: string) {
  const actualBuffer = Buffer.from(actual);
  const expectedBuffer = Buffer.from(expected);
  return actualBuffer.length === expectedBuffer.length && timingSafeEqual(actualBuffer, expectedBuffer);
}
