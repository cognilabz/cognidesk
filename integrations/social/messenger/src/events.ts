import type { MessengerSocialJsonObject, MessengerWebhookPayload } from "./contracts.js";

export type MessengerNormalizedEvent = {
  type: "social.message.received";
  provider: "messenger";
  message: MessengerSocialJsonObject;
  raw: MessengerSocialJsonObject;
};

export function normalizeMessengerWebhookEvents(payload: MessengerWebhookPayload): MessengerNormalizedEvent[] {
  const events: MessengerNormalizedEvent[] = [];
  for (const entry of payload.entry ?? []) {
    for (const messaging of entry.messaging ?? []) {
      if (!isMessengerSocialJsonObject(messaging.message)) continue;
      events.push({
        type: "social.message.received",
        provider: "messenger",
        message: messaging.message,
        raw: messaging,
      });
    }
  }
  return events;
}

function isMessengerSocialJsonObject(value: unknown): value is MessengerSocialJsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
