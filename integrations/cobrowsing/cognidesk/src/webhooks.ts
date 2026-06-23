import type {
  CobrowsingParticipantRole,
  CobrowsingSessionJsonObject,
  CobrowsingSignedWebhookRequest,
  NormalizedCobrowsingEvent,
  NormalizedCobrowsingEventType,
  ParseCobrowsingWebhookRequestOptions,
  RawCobrowsingSessionEvent,
} from "./contracts.js";
import { validateCobrowsingSignedRequest } from "./request.js";

export function normalizeCobrowsingEvent(input: RawCobrowsingSessionEvent): NormalizedCobrowsingEvent {
  const rawType = String(input.type ?? input.eventType ?? "");
  const type = normalizeEventType(rawType);
  if (!type) throw new Error(`Unsupported cobrowsing event type '${rawType}'.`);
  const data = isRecord(input.data) ? input.data : input;
  const sessionId = stringField(data.sessionId) ?? stringField(input.sessionId);
  if (!sessionId) throw new Error("Cobrowsing event is missing sessionId.");
  const participantId = stringField(data.participantId);
  const origin = stringField(data.origin);
  const controlRequestId = stringField(data.controlRequestId);
  const redactionRuleId = stringField(data.redactionRuleId);
  return {
    id: stringField(input.id) ?? `${sessionId}:${type}:${stringField(input.timestamp) ?? stringField(input.createdAt) ?? ""}`,
    type,
    sessionId,
    occurredAt: stringField(input.createdAt) ?? stringField(input.timestamp) ?? new Date(0).toISOString(),
    ...(participantId ? { participantId } : {}),
    ...(isParticipantRole(data.role) ? { role: data.role } : {}),
    ...(origin ? { origin } : {}),
    ...(controlRequestId ? { controlRequestId } : {}),
    ...(redactionRuleId ? { redactionRuleId } : {}),
    rawType,
    raw: input,
    data,
  };
}

export async function parseCobrowsingWebhookRequest(
  request: Request,
  options: ParseCobrowsingWebhookRequestOptions = {},
): Promise<CobrowsingSignedWebhookRequest> {
  const rawBody = await request.text();
  const headerName = options.signatureHeaderName ?? "cognidesk-signature";
  const signatureHeader = request.headers.get(headerName) ?? request.headers.get("x-cognidesk-signature");
  const requireSignature = options.requireSignature ?? true;

  let verified = false;
  if (options.verifier) {
    verified = await options.verifier({ request, rawBody, signatureHeader });
  } else if (options.sharedSecret && signatureHeader) {
    verified = validateCobrowsingSignedRequest({
      sharedSecret: options.sharedSecret,
      rawBody,
      signatureHeader,
      ...(options.nowSeconds !== undefined ? { nowSeconds: options.nowSeconds } : {}),
      ...(options.timestampToleranceSeconds !== undefined
        ? { timestampToleranceSeconds: options.timestampToleranceSeconds }
        : {}),
    });
  }
  if (requireSignature && !verified) {
    throw new Error("Cobrowsing webhook signature validation failed.");
  }

  const contentType = request.headers.get("content-type") ?? undefined;
  if (contentType && !contentType.includes("application/json")) {
    throw new Error("Cobrowsing webhook content type must be application/json.");
  }
  const json = JSON.parse(rawBody) as RawCobrowsingSessionEvent;
  return {
    rawBody,
    verified,
    json,
    event: normalizeCobrowsingEvent(json),
    ...(contentType ? { contentType } : {}),
    ...(signatureHeader ? { signatureHeader } : {}),
  };
}

function normalizeEventType(rawType: string): NormalizedCobrowsingEventType | undefined {
  switch (rawType) {
    case "started":
    case "session.started":
    case "cobrowse.session.started":
    case "cobrowsing.session.started":
      return "cobrowse.session.started";
    case "joined":
    case "session.joined":
    case "cobrowse.session.joined":
    case "cobrowsing.session.joined":
      return "cobrowse.session.joined";
    case "ended":
    case "session.ended":
    case "cobrowse.session.ended":
    case "cobrowsing.session.ended":
      return "cobrowse.session.ended";
    case "control-requested":
    case "control.requested":
    case "cobrowse.control.requested":
    case "cobrowsing.control.requested":
      return "cobrowse.control.requested";
    case "redaction":
    case "redaction.applied":
    case "cobrowse.redaction.applied":
    case "cobrowsing.redaction.applied":
      return "cobrowse.redaction.applied";
    case "redaction.cleared":
    case "cobrowse.redaction.cleared":
    case "cobrowsing.redaction.cleared":
      return "cobrowse.redaction.cleared";
    default:
      return undefined;
  }
}

function isRecord(value: unknown): value is CobrowsingSessionJsonObject {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function stringField(value: unknown) {
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function isParticipantRole(value: unknown): value is CobrowsingParticipantRole {
  return value === "customer" || value === "agent" || value === "observer";
}
