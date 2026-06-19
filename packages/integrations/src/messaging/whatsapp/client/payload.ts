import type { WhatsAppMessageInput, WhatsAppMessagingJsonObject } from "../contracts.js";

export function buildWhatsAppMessageBody(input: WhatsAppMessageInput) {
  const typedContent = {
    text: input.text,
    template: input.template,
    image: input.image,
    document: input.document,
    audio: input.audio,
    video: input.video,
    sticker: input.sticker,
    interactive: input.interactive,
    location: input.location,
    contacts: input.contacts,
  }[input.type];
  if (typedContent === undefined) {
    throw new Error(`WhatsApp ${input.type} message content is required.`);
  }
  return stripUndefined({
    messaging_product: "whatsapp",
    recipient_type: input.recipientType,
    to: input.to,
    type: input.type,
    [input.type]: typedContent,
    context: input.context,
    ...(input.additionalFields ?? {}),
  });
}

export function stripUndefined(input: WhatsAppMessagingJsonObject) {
  return Object.fromEntries(Object.entries(input).filter((entry) => entry[1] !== undefined)) as WhatsAppMessagingJsonObject;
}
