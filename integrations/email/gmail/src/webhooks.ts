import type {
  GmailJsonObject,
  GmailPubSubNotification,
  GmailPubSubNotificationEnvelope,
} from "./contracts.js";

export async function parseGmailPubSubNotification(
  requestOrEnvelope: Request | GmailPubSubNotificationEnvelope,
): Promise<GmailPubSubNotification> {
  const envelope = requestOrEnvelope instanceof Request
    ? await requestOrEnvelope.json() as GmailPubSubNotificationEnvelope
    : requestOrEnvelope;
  const encoded = envelope.message?.data;
  if (!encoded) throw new Error("Gmail Pub/Sub notification message.data is required.");

  let payload: GmailJsonObject;
  try {
    payload = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8")) as GmailJsonObject;
  } catch {
    throw new Error("Gmail Pub/Sub notification message.data must be base64url-encoded JSON.");
  }

  if (typeof payload.emailAddress !== "string" || typeof payload.historyId !== "string") {
    throw new Error("Gmail Pub/Sub notification data must include emailAddress and historyId.");
  }

  return {
    emailAddress: payload.emailAddress,
    historyId: payload.historyId,
    ...(envelope.message?.messageId ? { messageId: envelope.message.messageId } : {}),
    ...(envelope.message?.message_id ? { messageId: envelope.message.message_id } : {}),
    ...(envelope.message?.publishTime ? { publishTime: envelope.message.publishTime } : {}),
    ...(envelope.message?.publish_time ? { publishTime: envelope.message.publish_time } : {}),
    ...(envelope.subscription ? { subscription: envelope.subscription } : {}),
    ...(envelope.message?.attributes ? { attributes: envelope.message.attributes } : {}),
    rawPayload: payload,
  };
}
