export type WebhookVerificationStatus = "verified" | "rejected" | "skipped";

export interface WebhookVerificationResult {
  status: WebhookVerificationStatus;
  providerPackageId?: string;
  eventId?: string;
  eventType?: string;
  reason?: string;
  headers?: Record<string, string>;
  metadata?: Record<string, unknown>;
}

export interface ParsedWebhookEvent<Payload = unknown> {
  providerPackageId: string;
  eventId?: string;
  eventType: string;
  receivedAt: string;
  payload: Payload;
  rawBody?: string | Uint8Array;
  metadata?: Record<string, unknown>;
}

export interface WebhookHandlerResult<Payload = unknown> {
  verification: WebhookVerificationResult;
  event?: ParsedWebhookEvent<Payload>;
  response?: {
    status: number;
    body?: unknown;
    headers?: Record<string, string>;
  };
}

export function verifiedWebhook(input: Omit<WebhookVerificationResult, "status"> = {}): WebhookVerificationResult {
  return {
    ...input,
    status: "verified",
  };
}

export function rejectedWebhook(input: Omit<WebhookVerificationResult, "status"> & { reason: string }): WebhookVerificationResult {
  return {
    ...input,
    status: "rejected",
  };
}

export function skippedWebhookVerification(
  input: Omit<WebhookVerificationResult, "status"> & { reason: string },
): WebhookVerificationResult {
  return {
    ...input,
    status: "skipped",
  };
}

export function parsedWebhookEvent<Payload>(input: {
  providerPackageId: string;
  eventType: string;
  payload: Payload;
  eventId?: string;
  receivedAt?: string;
  rawBody?: string | Uint8Array;
  metadata?: Record<string, unknown>;
}): ParsedWebhookEvent<Payload> {
  return {
    providerPackageId: input.providerPackageId,
    eventType: input.eventType,
    payload: input.payload,
    receivedAt: input.receivedAt ?? new Date().toISOString(),
    ...(input.eventId !== undefined ? { eventId: input.eventId } : {}),
    ...(input.rawBody !== undefined ? { rawBody: input.rawBody } : {}),
    ...(input.metadata !== undefined ? { metadata: input.metadata } : {}),
  };
}
