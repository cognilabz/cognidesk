import type { InstagramSocialJsonObject, InstagramWebhookPayload } from "./contracts.js";

export type InstagramNormalizedEvent = {
  type: "social.message.received";
  provider: "instagram";
  message: unknown;
  raw: unknown;
};

export function normalizeInstagramWebhookEvents(payload: InstagramWebhookPayload): InstagramNormalizedEvent[] {
  const events: InstagramNormalizedEvent[] = [];
  for (const entry of payload.entry ?? []) {
    for (const messaging of entry.messaging ?? []) {
      if (!isInstagramSocialJsonObject(messaging)) continue;
      if (!isInstagramSocialJsonObject(messaging.message)) continue;
      events.push({
        type: "social.message.received",
        provider: "instagram",
        message: messaging.message,
        raw: messaging,
      });
    }
  }
  return events;
}

function isInstagramSocialJsonObject(value: unknown): value is InstagramSocialJsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
