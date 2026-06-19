import { createHmac, timingSafeEqual } from "node:crypto";
import type {
  AmazonMarketplaceJsonObject,
  AmazonMarketplaceJsonValue,
  AmazonNotificationEnvelope,
  ParseAmazonNotificationOptions,
} from "../contracts.js";

export async function parseAmazonMarketplaceNotificationWebhook(
  request: Request,
  options: ParseAmazonNotificationOptions = {},
): Promise<AmazonNotificationEnvelope> {
  const rawBody = await request.text();
  const parsed = rawBody ? JSON.parse(rawBody) as unknown : {};
  const payload = unwrapAmazonNotificationPayload(parsed);
  const requireVerification = options.requireVerification ?? true;

  if (options.verifyNotification) {
    const verified = await options.verifyNotification({ rawBody, headers: request.headers, payload });
    if (!verified) throw new Error("Amazon notification verification hook rejected the payload.");
    return normalizeAmazonNotification(rawBody, payload, "hook");
  }

  if (options.expectedSignatureSecret) {
    const headerName = options.signatureHeaderName ?? "x-cognidesk-amazon-signature";
    const actual = request.headers.get(headerName);
    const expected = createHmac("sha256", options.expectedSignatureSecret).update(rawBody).digest("hex");
    if (!actual || !constantTimeEqual(actual, expected)) {
      throw new Error("Amazon notification signature verification failed.");
    }
    return normalizeAmazonNotification(rawBody, payload, "signature");
  }

  if (options.expectedSharedSecret) {
    const headerName = options.sharedSecretHeaderName ?? "x-cognidesk-webhook-secret";
    const actual = request.headers.get(headerName);
    if (!actual || !constantTimeEqual(actual, options.expectedSharedSecret)) {
      throw new Error("Amazon notification shared-secret verification failed.");
    }
    return normalizeAmazonNotification(rawBody, payload, "shared-secret");
  }

  if (requireVerification) {
    throw new Error("Amazon notification verification is required.");
  }
  return normalizeAmazonNotification(rawBody, payload, "hook");
}

export function unwrapAmazonNotificationPayload(payload: unknown): unknown {
  if (isRecord(payload) && typeof payload.Message === "string") {
    return JSON.parse(payload.Message) as unknown;
  }
  if (isRecord(payload) && isRecord(payload.body)) {
    return unwrapAmazonNotificationPayload(payload.body);
  }
  if (isRecord(payload) && Array.isArray(payload.Records) && payload.Records.length > 0) {
    const [record] = payload.Records as AmazonMarketplaceJsonValue[];
    if (isRecord(record) && typeof record.body === "string") {
      return unwrapAmazonNotificationPayload(JSON.parse(record.body) as unknown);
    }
    if (isRecord(record) && isRecord(record.Sns) && typeof record.Sns.Message === "string") {
      return JSON.parse(record.Sns.Message) as unknown;
    }
  }
  if (isRecord(payload) && isRecord(payload.detail)) return payload.detail;
  return payload;
}

function normalizeAmazonNotification(
  rawBody: string,
  payload: unknown,
  verifiedBy: AmazonNotificationEnvelope["verifiedBy"],
): AmazonNotificationEnvelope {
  const envelope = readRecord(payload, "NotificationMetadata") ?? readRecord(payload, "notificationMetadata");
  const notificationType = readString(payload, "NotificationType") ?? readString(payload, "notificationType");
  const notificationId = readString(envelope, "NotificationId") ?? readString(envelope, "notificationId");
  const sellerId = readString(envelope, "SellerId") ?? readString(envelope, "sellerId");
  const marketplaceId = readString(envelope, "MarketplaceId") ?? readString(envelope, "marketplaceId");
  const transport = inferTransport(payload);
  return {
    rawBody,
    payload,
    verifiedBy,
    ...(notificationType ? { notificationType } : {}),
    ...(notificationId ? { notificationId } : {}),
    ...(sellerId ? { sellerId } : {}),
    ...(marketplaceId ? { marketplaceId } : {}),
    ...(transport ? { transport } : {}),
  };
}

function inferTransport(payload: unknown): AmazonNotificationEnvelope["transport"] {
  if (!isRecord(payload)) return "direct";
  if (typeof payload.Type === "string" && typeof payload.Message === "string") return "sns";
  if (Array.isArray(payload.Records)) return "sqs";
  if (isRecord(payload.detail)) return "eventbridge";
  return "direct";
}

function constantTimeEqual(actual: string, expected: string) {
  const actualBytes = Buffer.from(actual);
  const expectedBytes = Buffer.from(expected);
  return actualBytes.length === expectedBytes.length && timingSafeEqual(actualBytes, expectedBytes);
}

function readRecord(value: unknown, dottedPath: string): AmazonMarketplaceJsonObject | undefined {
  const result = readPath(value, dottedPath);
  return isRecord(result) ? result : undefined;
}

function readString(value: unknown, dottedPath: string): string | undefined {
  const result = readPath(value, dottedPath);
  return typeof result === "string" ? result : undefined;
}

function readPath(value: unknown, dottedPath: string): unknown {
  let current = value;
  for (const part of dottedPath.split(".")) {
    if (!isRecord(current) || !(part in current)) return undefined;
    current = current[part];
  }
  return current;
}

function isRecord(value: unknown): value is AmazonMarketplaceJsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
