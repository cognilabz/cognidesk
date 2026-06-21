import type { InstagramWebhookPayload } from "./contracts.js";

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
      if (!messaging.message) continue;
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
