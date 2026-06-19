import type {
  OutlookMessageInput,
  OutlookRecipient,
  OutlookUpdateMessageInput,
} from "./contracts.js";
import { stripUndefined } from "./request.js";

export function createOutlookRecipient(address: string, name?: string): OutlookRecipient {
  return {
    emailAddress: {
      address,
      ...(name ? { name } : {}),
    },
  };
}

export function outlookMessageBody(input: OutlookMessageInput | OutlookUpdateMessageInput) {
  return stripUndefined({
    subject: input.subject,
    body: input.body,
    toRecipients: input.toRecipients,
    ccRecipients: input.ccRecipients,
    bccRecipients: input.bccRecipients,
    replyTo: input.replyTo,
    categories: input.categories,
    importance: input.importance,
    attachments: input.attachments,
    internetMessageHeaders: input.internetMessageHeaders,
    isRead: "isRead" in input ? input.isRead : undefined,
    ...(input.additionalFields ?? {}),
  });
}
