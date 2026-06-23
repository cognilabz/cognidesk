import type { WhatsAppWebhookPayload } from "./contracts.js";

export type WhatsAppNormalizedEvent =
  | {
    type: "messaging.message.received";
    provider: "whatsapp";
    message: unknown;
    contact?: unknown;
    raw: unknown;
  }
  | {
    type: "messaging.delivery.updated";
    provider: "whatsapp";
    status: unknown;
    raw: unknown;
  };

export function normalizeWhatsAppWebhookEvents(payload: WhatsAppWebhookPayload): WhatsAppNormalizedEvent[] {
  const events: WhatsAppNormalizedEvent[] = [];
  for (const entry of payload.entry ?? []) {
    for (const change of entry.changes ?? []) {
      const value = change.value;
      const messages = Array.isArray(value?.messages) ? value.messages : [];
      const statuses = Array.isArray(value?.statuses) ? value.statuses : [];
      const contacts = Array.isArray(value?.contacts) ? value.contacts : [];
      for (const message of messages) {
        events.push({
          type: "messaging.message.received",
          provider: "whatsapp",
          message,
          contact: contacts[0],
          raw: change,
        });
      }
      for (const status of statuses) {
        events.push({
          type: "messaging.delivery.updated",
          provider: "whatsapp",
          status,
          raw: change,
        });
      }
    }
  }
  return events;
}
