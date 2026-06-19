import type { WhatsAppMessageInput, WhatsAppMessagingJsonValue } from "./contracts.js";
import { stripUndefined } from "./client/payload.js";

export function createWhatsAppTextMessage(input: {
  to: string;
  body: string;
  previewUrl?: boolean;
  contextMessageId?: string;
}): WhatsAppMessageInput {
  return {
    to: input.to,
    type: "text",
    text: {
      body: input.body,
      ...(input.previewUrl !== undefined ? { preview_url: input.previewUrl } : {}),
    },
    ...(input.contextMessageId ? { context: { message_id: input.contextMessageId } } : {}),
  };
}

export function createWhatsAppTemplateMessage(input: {
  to: string;
  name: string;
  languageCode: string;
  components?: WhatsAppMessagingJsonValue[];
  contextMessageId?: string;
}): WhatsAppMessageInput {
  return {
    to: input.to,
    type: "template",
    template: stripUndefined({
      name: input.name,
      language: { code: input.languageCode },
      components: input.components,
    }),
    ...(input.contextMessageId ? { context: { message_id: input.contextMessageId } } : {}),
  };
}
