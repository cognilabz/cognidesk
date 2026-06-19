// Generated endpoint chunk for OutlookGraph.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  OutlookGraphGeneratedOperationCaller,
  OutlookGraphOperationArgs,
  OutlookGraphOperationInput,
  OutlookGraphPathParamValue,
} from "../../graph-api-client.generated.js";
import type { OutlookGraphOperationResponseMap } from "../../graph-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const OutlookGraphMeMailFolder01OperationKeys = [
  "me.ListMailFolders",
  "me.CreateMailFolders",
  "me.GetMailFolders",
  "me.UpdateMailFolders",
  "me.DeleteMailFolders",
  "me.mailFolders.ListChildFolders",
  "me.mailFolders.CreateChildFolders",
  "me.mailFolders.GetChildFolders",
  "me.mailFolders.UpdateChildFolders",
  "me.mailFolders.DeleteChildFolders",
  "me.mailFolders.childFolders.ListMessageRules",
  "me.mailFolders.childFolders.CreateMessageRules",
  "me.mailFolders.childFolders.GetMessageRules",
  "me.mailFolders.childFolders.UpdateMessageRules",
  "me.mailFolders.childFolders.DeleteMessageRules",
  "me.mailFolders.childFolders.messageRules.GetCount-6a96",
  "me.mailFolders.childFolders.ListMessages",
  "me.mailFolders.childFolders.CreateMessages",
  "me.mailFolders.childFolders.GetMessages",
  "me.mailFolders.childFolders.UpdateMessages",
  "me.mailFolders.childFolders.DeleteMessages",
  "me.mailFolders.childFolders.GetMessagesContent",
  "me.mailFolders.childFolders.UpdateMessagesContent",
  "me.mailFolders.childFolders.DeleteMessagesContent",
  "me.mailFolders.childFolders.messages.ListAttachments",
  "me.mailFolders.childFolders.messages.CreateAttachments",
  "me.mailFolders.childFolders.messages.GetAttachments",
  "me.mailFolders.childFolders.messages.DeleteAttachments",
  "me.mailFolders.childFolders.messages.attachments.GetCount-65b2",
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession",
  "me.mailFolders.childFolders.messages.ListExtensions",
  "me.mailFolders.childFolders.messages.CreateExtensions",
  "me.mailFolders.childFolders.messages.GetExtensions",
  "me.mailFolders.childFolders.messages.UpdateExtensions",
  "me.mailFolders.childFolders.messages.DeleteExtensions",
  "me.mailFolders.childFolders.messages.extensions.GetCount-cf94",
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy",
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward",
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply",
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll",
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward",
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move",
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete",
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply",
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll",
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send",
  "me.mailFolders.childFolders.messages.GetCount-56da",
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.delta",
  "me.mailFolders.mailFolder.childFolders.mailFolder.copy",
  "me.mailFolders.mailFolder.childFolders.mailFolder.move",
  "me.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete",
  "me.mailFolders.childFolders.GetCount-25bc",
  "me.mailFolders.mailFolder.childFolders.delta",
  "me.mailFolders.ListMessageRules",
  "me.mailFolders.CreateMessageRules",
  "me.mailFolders.GetMessageRules",
  "me.mailFolders.UpdateMessageRules",
  "me.mailFolders.DeleteMessageRules",
  "me.mailFolders.messageRules.GetCount-3d24",
  "me.mailFolders.ListMessages",
  "me.mailFolders.CreateMessages",
  "me.mailFolders.GetMessages",
  "me.mailFolders.UpdateMessages",
  "me.mailFolders.DeleteMessages",
  "me.mailFolders.GetMessagesContent",
  "me.mailFolders.UpdateMessagesContent",
  "me.mailFolders.DeleteMessagesContent",
  "me.mailFolders.messages.ListAttachments",
  "me.mailFolders.messages.CreateAttachments",
  "me.mailFolders.messages.GetAttachments",
  "me.mailFolders.messages.DeleteAttachments",
  "me.mailFolders.messages.attachments.GetCount-16fa",
  "me.mailFolders.mailFolder.messages.message.attachments.createUploadSession",
  "me.mailFolders.messages.ListExtensions",
  "me.mailFolders.messages.CreateExtensions",
  "me.mailFolders.messages.GetExtensions",
  "me.mailFolders.messages.UpdateExtensions",
  "me.mailFolders.messages.DeleteExtensions",
  "me.mailFolders.messages.extensions.GetCount-8860",
  "me.mailFolders.mailFolder.messages.message.copy"
] as const;
export type OutlookGraphMeMailFolder01OperationKey = typeof OutlookGraphMeMailFolder01OperationKeys[number];
// End hardened literal operation keys.

export interface OutlookGraphMeMailFolder01OperationPathParamMap {
  "me.ListMailFolders": {};
  "me.CreateMailFolders": {};
  "me.GetMailFolders": { "mailFolder-id": OutlookGraphPathParamValue };
  "me.UpdateMailFolders": { "mailFolder-id": OutlookGraphPathParamValue };
  "me.DeleteMailFolders": { "mailFolder-id": OutlookGraphPathParamValue };
  "me.mailFolders.ListChildFolders": { "mailFolder-id": OutlookGraphPathParamValue };
  "me.mailFolders.CreateChildFolders": { "mailFolder-id": OutlookGraphPathParamValue };
  "me.mailFolders.GetChildFolders": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "me.mailFolders.UpdateChildFolders": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "me.mailFolders.DeleteChildFolders": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.ListMessageRules": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.CreateMessageRules": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.GetMessageRules": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "messageRule-id": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.UpdateMessageRules": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "messageRule-id": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.DeleteMessageRules": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "messageRule-id": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.messageRules.GetCount-6a96": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.ListMessages": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.CreateMessages": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.GetMessages": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.UpdateMessages": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.DeleteMessages": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.GetMessagesContent": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.UpdateMessagesContent": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.DeleteMessagesContent": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.messages.ListAttachments": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.messages.CreateAttachments": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.messages.GetAttachments": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "attachment-id": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.messages.DeleteAttachments": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "attachment-id": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.messages.attachments.GetCount-65b2": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.messages.ListExtensions": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.messages.CreateExtensions": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.messages.GetExtensions": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "extension-id": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.messages.UpdateExtensions": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "extension-id": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.messages.DeleteExtensions": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "extension-id": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.messages.extensions.GetCount-cf94": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.messages.GetCount-56da": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.delta": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.childFolders.mailFolder.copy": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.childFolders.mailFolder.move": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete": { "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "me.mailFolders.childFolders.GetCount-25bc": { "mailFolder-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.childFolders.delta": { "mailFolder-id": OutlookGraphPathParamValue };
  "me.mailFolders.ListMessageRules": { "mailFolder-id": OutlookGraphPathParamValue };
  "me.mailFolders.CreateMessageRules": { "mailFolder-id": OutlookGraphPathParamValue };
  "me.mailFolders.GetMessageRules": { "mailFolder-id": OutlookGraphPathParamValue; "messageRule-id": OutlookGraphPathParamValue };
  "me.mailFolders.UpdateMessageRules": { "mailFolder-id": OutlookGraphPathParamValue; "messageRule-id": OutlookGraphPathParamValue };
  "me.mailFolders.DeleteMessageRules": { "mailFolder-id": OutlookGraphPathParamValue; "messageRule-id": OutlookGraphPathParamValue };
  "me.mailFolders.messageRules.GetCount-3d24": { "mailFolder-id": OutlookGraphPathParamValue };
  "me.mailFolders.ListMessages": { "mailFolder-id": OutlookGraphPathParamValue };
  "me.mailFolders.CreateMessages": { "mailFolder-id": OutlookGraphPathParamValue };
  "me.mailFolders.GetMessages": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.UpdateMessages": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.DeleteMessages": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.GetMessagesContent": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.UpdateMessagesContent": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.DeleteMessagesContent": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.messages.ListAttachments": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.messages.CreateAttachments": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.messages.GetAttachments": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "attachment-id": OutlookGraphPathParamValue };
  "me.mailFolders.messages.DeleteAttachments": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "attachment-id": OutlookGraphPathParamValue };
  "me.mailFolders.messages.attachments.GetCount-16fa": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.messages.message.attachments.createUploadSession": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.messages.ListExtensions": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.messages.CreateExtensions": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.messages.GetExtensions": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "extension-id": OutlookGraphPathParamValue };
  "me.mailFolders.messages.UpdateExtensions": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "extension-id": OutlookGraphPathParamValue };
  "me.mailFolders.messages.DeleteExtensions": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "extension-id": OutlookGraphPathParamValue };
  "me.mailFolders.messages.extensions.GetCount-8860": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.messages.message.copy": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
}

export interface OutlookGraphMeMailFolder01OperationRequestMap {
  "me.ListMailFolders": OutlookGraphOperationInput<"me.ListMailFolders">;
  "me.CreateMailFolders": OutlookGraphOperationInput<"me.CreateMailFolders">;
  "me.GetMailFolders": OutlookGraphOperationInput<"me.GetMailFolders">;
  "me.UpdateMailFolders": OutlookGraphOperationInput<"me.UpdateMailFolders">;
  "me.DeleteMailFolders": OutlookGraphOperationInput<"me.DeleteMailFolders">;
  "me.mailFolders.ListChildFolders": OutlookGraphOperationInput<"me.mailFolders.ListChildFolders">;
  "me.mailFolders.CreateChildFolders": OutlookGraphOperationInput<"me.mailFolders.CreateChildFolders">;
  "me.mailFolders.GetChildFolders": OutlookGraphOperationInput<"me.mailFolders.GetChildFolders">;
  "me.mailFolders.UpdateChildFolders": OutlookGraphOperationInput<"me.mailFolders.UpdateChildFolders">;
  "me.mailFolders.DeleteChildFolders": OutlookGraphOperationInput<"me.mailFolders.DeleteChildFolders">;
  "me.mailFolders.childFolders.ListMessageRules": OutlookGraphOperationInput<"me.mailFolders.childFolders.ListMessageRules">;
  "me.mailFolders.childFolders.CreateMessageRules": OutlookGraphOperationInput<"me.mailFolders.childFolders.CreateMessageRules">;
  "me.mailFolders.childFolders.GetMessageRules": OutlookGraphOperationInput<"me.mailFolders.childFolders.GetMessageRules">;
  "me.mailFolders.childFolders.UpdateMessageRules": OutlookGraphOperationInput<"me.mailFolders.childFolders.UpdateMessageRules">;
  "me.mailFolders.childFolders.DeleteMessageRules": OutlookGraphOperationInput<"me.mailFolders.childFolders.DeleteMessageRules">;
  "me.mailFolders.childFolders.messageRules.GetCount-6a96": OutlookGraphOperationInput<"me.mailFolders.childFolders.messageRules.GetCount-6a96">;
  "me.mailFolders.childFolders.ListMessages": OutlookGraphOperationInput<"me.mailFolders.childFolders.ListMessages">;
  "me.mailFolders.childFolders.CreateMessages": OutlookGraphOperationInput<"me.mailFolders.childFolders.CreateMessages">;
  "me.mailFolders.childFolders.GetMessages": OutlookGraphOperationInput<"me.mailFolders.childFolders.GetMessages">;
  "me.mailFolders.childFolders.UpdateMessages": OutlookGraphOperationInput<"me.mailFolders.childFolders.UpdateMessages">;
  "me.mailFolders.childFolders.DeleteMessages": OutlookGraphOperationInput<"me.mailFolders.childFolders.DeleteMessages">;
  "me.mailFolders.childFolders.GetMessagesContent": OutlookGraphOperationInput<"me.mailFolders.childFolders.GetMessagesContent">;
  "me.mailFolders.childFolders.UpdateMessagesContent": OutlookGraphOperationInput<"me.mailFolders.childFolders.UpdateMessagesContent">;
  "me.mailFolders.childFolders.DeleteMessagesContent": OutlookGraphOperationInput<"me.mailFolders.childFolders.DeleteMessagesContent">;
  "me.mailFolders.childFolders.messages.ListAttachments": OutlookGraphOperationInput<"me.mailFolders.childFolders.messages.ListAttachments">;
  "me.mailFolders.childFolders.messages.CreateAttachments": OutlookGraphOperationInput<"me.mailFolders.childFolders.messages.CreateAttachments">;
  "me.mailFolders.childFolders.messages.GetAttachments": OutlookGraphOperationInput<"me.mailFolders.childFolders.messages.GetAttachments">;
  "me.mailFolders.childFolders.messages.DeleteAttachments": OutlookGraphOperationInput<"me.mailFolders.childFolders.messages.DeleteAttachments">;
  "me.mailFolders.childFolders.messages.attachments.GetCount-65b2": OutlookGraphOperationInput<"me.mailFolders.childFolders.messages.attachments.GetCount-65b2">;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession": OutlookGraphOperationInput<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession">;
  "me.mailFolders.childFolders.messages.ListExtensions": OutlookGraphOperationInput<"me.mailFolders.childFolders.messages.ListExtensions">;
  "me.mailFolders.childFolders.messages.CreateExtensions": OutlookGraphOperationInput<"me.mailFolders.childFolders.messages.CreateExtensions">;
  "me.mailFolders.childFolders.messages.GetExtensions": OutlookGraphOperationInput<"me.mailFolders.childFolders.messages.GetExtensions">;
  "me.mailFolders.childFolders.messages.UpdateExtensions": OutlookGraphOperationInput<"me.mailFolders.childFolders.messages.UpdateExtensions">;
  "me.mailFolders.childFolders.messages.DeleteExtensions": OutlookGraphOperationInput<"me.mailFolders.childFolders.messages.DeleteExtensions">;
  "me.mailFolders.childFolders.messages.extensions.GetCount-cf94": OutlookGraphOperationInput<"me.mailFolders.childFolders.messages.extensions.GetCount-cf94">;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy": OutlookGraphOperationInput<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy">;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward": OutlookGraphOperationInput<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward">;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply": OutlookGraphOperationInput<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply">;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll": OutlookGraphOperationInput<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll">;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward": OutlookGraphOperationInput<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward">;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move": OutlookGraphOperationInput<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move">;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete": OutlookGraphOperationInput<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete">;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply": OutlookGraphOperationInput<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply">;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll": OutlookGraphOperationInput<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll">;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send": OutlookGraphOperationInput<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send">;
  "me.mailFolders.childFolders.messages.GetCount-56da": OutlookGraphOperationInput<"me.mailFolders.childFolders.messages.GetCount-56da">;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.delta": OutlookGraphOperationInput<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.delta">;
  "me.mailFolders.mailFolder.childFolders.mailFolder.copy": OutlookGraphOperationInput<"me.mailFolders.mailFolder.childFolders.mailFolder.copy">;
  "me.mailFolders.mailFolder.childFolders.mailFolder.move": OutlookGraphOperationInput<"me.mailFolders.mailFolder.childFolders.mailFolder.move">;
  "me.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete": OutlookGraphOperationInput<"me.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete">;
  "me.mailFolders.childFolders.GetCount-25bc": OutlookGraphOperationInput<"me.mailFolders.childFolders.GetCount-25bc">;
  "me.mailFolders.mailFolder.childFolders.delta": OutlookGraphOperationInput<"me.mailFolders.mailFolder.childFolders.delta">;
  "me.mailFolders.ListMessageRules": OutlookGraphOperationInput<"me.mailFolders.ListMessageRules">;
  "me.mailFolders.CreateMessageRules": OutlookGraphOperationInput<"me.mailFolders.CreateMessageRules">;
  "me.mailFolders.GetMessageRules": OutlookGraphOperationInput<"me.mailFolders.GetMessageRules">;
  "me.mailFolders.UpdateMessageRules": OutlookGraphOperationInput<"me.mailFolders.UpdateMessageRules">;
  "me.mailFolders.DeleteMessageRules": OutlookGraphOperationInput<"me.mailFolders.DeleteMessageRules">;
  "me.mailFolders.messageRules.GetCount-3d24": OutlookGraphOperationInput<"me.mailFolders.messageRules.GetCount-3d24">;
  "me.mailFolders.ListMessages": OutlookGraphOperationInput<"me.mailFolders.ListMessages">;
  "me.mailFolders.CreateMessages": OutlookGraphOperationInput<"me.mailFolders.CreateMessages">;
  "me.mailFolders.GetMessages": OutlookGraphOperationInput<"me.mailFolders.GetMessages">;
  "me.mailFolders.UpdateMessages": OutlookGraphOperationInput<"me.mailFolders.UpdateMessages">;
  "me.mailFolders.DeleteMessages": OutlookGraphOperationInput<"me.mailFolders.DeleteMessages">;
  "me.mailFolders.GetMessagesContent": OutlookGraphOperationInput<"me.mailFolders.GetMessagesContent">;
  "me.mailFolders.UpdateMessagesContent": OutlookGraphOperationInput<"me.mailFolders.UpdateMessagesContent">;
  "me.mailFolders.DeleteMessagesContent": OutlookGraphOperationInput<"me.mailFolders.DeleteMessagesContent">;
  "me.mailFolders.messages.ListAttachments": OutlookGraphOperationInput<"me.mailFolders.messages.ListAttachments">;
  "me.mailFolders.messages.CreateAttachments": OutlookGraphOperationInput<"me.mailFolders.messages.CreateAttachments">;
  "me.mailFolders.messages.GetAttachments": OutlookGraphOperationInput<"me.mailFolders.messages.GetAttachments">;
  "me.mailFolders.messages.DeleteAttachments": OutlookGraphOperationInput<"me.mailFolders.messages.DeleteAttachments">;
  "me.mailFolders.messages.attachments.GetCount-16fa": OutlookGraphOperationInput<"me.mailFolders.messages.attachments.GetCount-16fa">;
  "me.mailFolders.mailFolder.messages.message.attachments.createUploadSession": OutlookGraphOperationInput<"me.mailFolders.mailFolder.messages.message.attachments.createUploadSession">;
  "me.mailFolders.messages.ListExtensions": OutlookGraphOperationInput<"me.mailFolders.messages.ListExtensions">;
  "me.mailFolders.messages.CreateExtensions": OutlookGraphOperationInput<"me.mailFolders.messages.CreateExtensions">;
  "me.mailFolders.messages.GetExtensions": OutlookGraphOperationInput<"me.mailFolders.messages.GetExtensions">;
  "me.mailFolders.messages.UpdateExtensions": OutlookGraphOperationInput<"me.mailFolders.messages.UpdateExtensions">;
  "me.mailFolders.messages.DeleteExtensions": OutlookGraphOperationInput<"me.mailFolders.messages.DeleteExtensions">;
  "me.mailFolders.messages.extensions.GetCount-8860": OutlookGraphOperationInput<"me.mailFolders.messages.extensions.GetCount-8860">;
  "me.mailFolders.mailFolder.messages.message.copy": OutlookGraphOperationInput<"me.mailFolders.mailFolder.messages.message.copy">;
}

export interface OutlookGraphMeMailFolder01GeneratedClient {
  MeListMailFolders(...args: OutlookGraphOperationArgs<"me.ListMailFolders">): Promise<OutlookGraphOperationResponseMap["me.ListMailFolders"]>;
  MeCreateMailFolders(...args: OutlookGraphOperationArgs<"me.CreateMailFolders">): Promise<OutlookGraphOperationResponseMap["me.CreateMailFolders"]>;
  MeGetMailFolders(...args: OutlookGraphOperationArgs<"me.GetMailFolders">): Promise<OutlookGraphOperationResponseMap["me.GetMailFolders"]>;
  MeUpdateMailFolders(...args: OutlookGraphOperationArgs<"me.UpdateMailFolders">): Promise<OutlookGraphOperationResponseMap["me.UpdateMailFolders"]>;
  MeDeleteMailFolders(...args: OutlookGraphOperationArgs<"me.DeleteMailFolders">): Promise<OutlookGraphOperationResponseMap["me.DeleteMailFolders"]>;
  MeMailFoldersListChildFolders(...args: OutlookGraphOperationArgs<"me.mailFolders.ListChildFolders">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.ListChildFolders"]>;
  MeMailFoldersCreateChildFolders(...args: OutlookGraphOperationArgs<"me.mailFolders.CreateChildFolders">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.CreateChildFolders"]>;
  MeMailFoldersGetChildFolders(...args: OutlookGraphOperationArgs<"me.mailFolders.GetChildFolders">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.GetChildFolders"]>;
  MeMailFoldersUpdateChildFolders(...args: OutlookGraphOperationArgs<"me.mailFolders.UpdateChildFolders">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.UpdateChildFolders"]>;
  MeMailFoldersDeleteChildFolders(...args: OutlookGraphOperationArgs<"me.mailFolders.DeleteChildFolders">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.DeleteChildFolders"]>;
  MeMailFoldersChildFoldersListMessageRules(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.ListMessageRules">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.ListMessageRules"]>;
  MeMailFoldersChildFoldersCreateMessageRules(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.CreateMessageRules">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.CreateMessageRules"]>;
  MeMailFoldersChildFoldersGetMessageRules(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.GetMessageRules">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.GetMessageRules"]>;
  MeMailFoldersChildFoldersUpdateMessageRules(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.UpdateMessageRules">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.UpdateMessageRules"]>;
  MeMailFoldersChildFoldersDeleteMessageRules(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.DeleteMessageRules">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.DeleteMessageRules"]>;
  MeMailFoldersChildFoldersMessageRulesGetCount6a96(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.messageRules.GetCount-6a96">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.messageRules.GetCount-6a96"]>;
  MeMailFoldersChildFoldersListMessages(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.ListMessages">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.ListMessages"]>;
  MeMailFoldersChildFoldersCreateMessages(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.CreateMessages">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.CreateMessages"]>;
  MeMailFoldersChildFoldersGetMessages(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.GetMessages">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.GetMessages"]>;
  MeMailFoldersChildFoldersUpdateMessages(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.UpdateMessages">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.UpdateMessages"]>;
  MeMailFoldersChildFoldersDeleteMessages(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.DeleteMessages">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.DeleteMessages"]>;
  MeMailFoldersChildFoldersGetMessagesContent(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.GetMessagesContent">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.GetMessagesContent"]>;
  MeMailFoldersChildFoldersUpdateMessagesContent(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.UpdateMessagesContent">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.UpdateMessagesContent"]>;
  MeMailFoldersChildFoldersDeleteMessagesContent(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.DeleteMessagesContent">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.DeleteMessagesContent"]>;
  MeMailFoldersChildFoldersMessagesListAttachments(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.ListAttachments">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.messages.ListAttachments"]>;
  MeMailFoldersChildFoldersMessagesCreateAttachments(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.CreateAttachments">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.messages.CreateAttachments"]>;
  MeMailFoldersChildFoldersMessagesGetAttachments(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.GetAttachments">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.messages.GetAttachments"]>;
  MeMailFoldersChildFoldersMessagesDeleteAttachments(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.DeleteAttachments">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.messages.DeleteAttachments"]>;
  MeMailFoldersChildFoldersMessagesAttachmentsGetCount65b2(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.attachments.GetCount-65b2">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.messages.attachments.GetCount-65b2"]>;
  MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageAttachmentsCreateUploadSession(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession"]>;
  MeMailFoldersChildFoldersMessagesListExtensions(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.ListExtensions">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.messages.ListExtensions"]>;
  MeMailFoldersChildFoldersMessagesCreateExtensions(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.CreateExtensions">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.messages.CreateExtensions"]>;
  MeMailFoldersChildFoldersMessagesGetExtensions(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.GetExtensions">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.messages.GetExtensions"]>;
  MeMailFoldersChildFoldersMessagesUpdateExtensions(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.UpdateExtensions">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.messages.UpdateExtensions"]>;
  MeMailFoldersChildFoldersMessagesDeleteExtensions(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.DeleteExtensions">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.messages.DeleteExtensions"]>;
  MeMailFoldersChildFoldersMessagesExtensionsGetCountCf94(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.extensions.GetCount-cf94">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.messages.extensions.GetCount-cf94"]>;
  MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCopy(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy"]>;
  MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCreateForward(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward"]>;
  MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCreateReply(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply"]>;
  MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCreateReplyAll(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll"]>;
  MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageForward(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward"]>;
  MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageMove(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move"]>;
  MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessagePermanentDelete(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete"]>;
  MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageReply(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply"]>;
  MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageReplyAll(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll"]>;
  MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageSend(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send"]>;
  MeMailFoldersChildFoldersMessagesGetCount56da(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.GetCount-56da">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.messages.GetCount-56da"]>;
  MeMailFoldersMailFolderChildFoldersMailFolderMessagesDelta(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.delta">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.childFolders.mailFolder.messages.delta"]>;
  MeMailFoldersMailFolderChildFoldersMailFolderCopy(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.copy">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.childFolders.mailFolder.copy"]>;
  MeMailFoldersMailFolderChildFoldersMailFolderMove(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.move">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.childFolders.mailFolder.move"]>;
  MeMailFoldersMailFolderChildFoldersMailFolderPermanentDelete(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete"]>;
  MeMailFoldersChildFoldersGetCount25bc(...args: OutlookGraphOperationArgs<"me.mailFolders.childFolders.GetCount-25bc">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.childFolders.GetCount-25bc"]>;
  MeMailFoldersMailFolderChildFoldersDelta(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.delta">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.childFolders.delta"]>;
  MeMailFoldersListMessageRules(...args: OutlookGraphOperationArgs<"me.mailFolders.ListMessageRules">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.ListMessageRules"]>;
  MeMailFoldersCreateMessageRules(...args: OutlookGraphOperationArgs<"me.mailFolders.CreateMessageRules">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.CreateMessageRules"]>;
  MeMailFoldersGetMessageRules(...args: OutlookGraphOperationArgs<"me.mailFolders.GetMessageRules">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.GetMessageRules"]>;
  MeMailFoldersUpdateMessageRules(...args: OutlookGraphOperationArgs<"me.mailFolders.UpdateMessageRules">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.UpdateMessageRules"]>;
  MeMailFoldersDeleteMessageRules(...args: OutlookGraphOperationArgs<"me.mailFolders.DeleteMessageRules">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.DeleteMessageRules"]>;
  MeMailFoldersMessageRulesGetCount3d24(...args: OutlookGraphOperationArgs<"me.mailFolders.messageRules.GetCount-3d24">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.messageRules.GetCount-3d24"]>;
  MeMailFoldersListMessages(...args: OutlookGraphOperationArgs<"me.mailFolders.ListMessages">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.ListMessages"]>;
  MeMailFoldersCreateMessages(...args: OutlookGraphOperationArgs<"me.mailFolders.CreateMessages">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.CreateMessages"]>;
  MeMailFoldersGetMessages(...args: OutlookGraphOperationArgs<"me.mailFolders.GetMessages">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.GetMessages"]>;
  MeMailFoldersUpdateMessages(...args: OutlookGraphOperationArgs<"me.mailFolders.UpdateMessages">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.UpdateMessages"]>;
  MeMailFoldersDeleteMessages(...args: OutlookGraphOperationArgs<"me.mailFolders.DeleteMessages">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.DeleteMessages"]>;
  MeMailFoldersGetMessagesContent(...args: OutlookGraphOperationArgs<"me.mailFolders.GetMessagesContent">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.GetMessagesContent"]>;
  MeMailFoldersUpdateMessagesContent(...args: OutlookGraphOperationArgs<"me.mailFolders.UpdateMessagesContent">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.UpdateMessagesContent"]>;
  MeMailFoldersDeleteMessagesContent(...args: OutlookGraphOperationArgs<"me.mailFolders.DeleteMessagesContent">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.DeleteMessagesContent"]>;
  MeMailFoldersMessagesListAttachments(...args: OutlookGraphOperationArgs<"me.mailFolders.messages.ListAttachments">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.messages.ListAttachments"]>;
  MeMailFoldersMessagesCreateAttachments(...args: OutlookGraphOperationArgs<"me.mailFolders.messages.CreateAttachments">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.messages.CreateAttachments"]>;
  MeMailFoldersMessagesGetAttachments(...args: OutlookGraphOperationArgs<"me.mailFolders.messages.GetAttachments">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.messages.GetAttachments"]>;
  MeMailFoldersMessagesDeleteAttachments(...args: OutlookGraphOperationArgs<"me.mailFolders.messages.DeleteAttachments">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.messages.DeleteAttachments"]>;
  MeMailFoldersMessagesAttachmentsGetCount16fa(...args: OutlookGraphOperationArgs<"me.mailFolders.messages.attachments.GetCount-16fa">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.messages.attachments.GetCount-16fa"]>;
  MeMailFoldersMailFolderMessagesMessageAttachmentsCreateUploadSession(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.attachments.createUploadSession">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.messages.message.attachments.createUploadSession"]>;
  MeMailFoldersMessagesListExtensions(...args: OutlookGraphOperationArgs<"me.mailFolders.messages.ListExtensions">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.messages.ListExtensions"]>;
  MeMailFoldersMessagesCreateExtensions(...args: OutlookGraphOperationArgs<"me.mailFolders.messages.CreateExtensions">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.messages.CreateExtensions"]>;
  MeMailFoldersMessagesGetExtensions(...args: OutlookGraphOperationArgs<"me.mailFolders.messages.GetExtensions">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.messages.GetExtensions"]>;
  MeMailFoldersMessagesUpdateExtensions(...args: OutlookGraphOperationArgs<"me.mailFolders.messages.UpdateExtensions">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.messages.UpdateExtensions"]>;
  MeMailFoldersMessagesDeleteExtensions(...args: OutlookGraphOperationArgs<"me.mailFolders.messages.DeleteExtensions">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.messages.DeleteExtensions"]>;
  MeMailFoldersMessagesExtensionsGetCount8860(...args: OutlookGraphOperationArgs<"me.mailFolders.messages.extensions.GetCount-8860">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.messages.extensions.GetCount-8860"]>;
  MeMailFoldersMailFolderMessagesMessageCopy(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.copy">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.messages.message.copy"]>;
}

export const OutlookGraphMeMailFolder01GeneratedFunctionNames = [
  "MeListMailFolders",
  "MeCreateMailFolders",
  "MeGetMailFolders",
  "MeUpdateMailFolders",
  "MeDeleteMailFolders",
  "MeMailFoldersListChildFolders",
  "MeMailFoldersCreateChildFolders",
  "MeMailFoldersGetChildFolders",
  "MeMailFoldersUpdateChildFolders",
  "MeMailFoldersDeleteChildFolders",
  "MeMailFoldersChildFoldersListMessageRules",
  "MeMailFoldersChildFoldersCreateMessageRules",
  "MeMailFoldersChildFoldersGetMessageRules",
  "MeMailFoldersChildFoldersUpdateMessageRules",
  "MeMailFoldersChildFoldersDeleteMessageRules",
  "MeMailFoldersChildFoldersMessageRulesGetCount6a96",
  "MeMailFoldersChildFoldersListMessages",
  "MeMailFoldersChildFoldersCreateMessages",
  "MeMailFoldersChildFoldersGetMessages",
  "MeMailFoldersChildFoldersUpdateMessages",
  "MeMailFoldersChildFoldersDeleteMessages",
  "MeMailFoldersChildFoldersGetMessagesContent",
  "MeMailFoldersChildFoldersUpdateMessagesContent",
  "MeMailFoldersChildFoldersDeleteMessagesContent",
  "MeMailFoldersChildFoldersMessagesListAttachments",
  "MeMailFoldersChildFoldersMessagesCreateAttachments",
  "MeMailFoldersChildFoldersMessagesGetAttachments",
  "MeMailFoldersChildFoldersMessagesDeleteAttachments",
  "MeMailFoldersChildFoldersMessagesAttachmentsGetCount65b2",
  "MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageAttachmentsCreateUploadSession",
  "MeMailFoldersChildFoldersMessagesListExtensions",
  "MeMailFoldersChildFoldersMessagesCreateExtensions",
  "MeMailFoldersChildFoldersMessagesGetExtensions",
  "MeMailFoldersChildFoldersMessagesUpdateExtensions",
  "MeMailFoldersChildFoldersMessagesDeleteExtensions",
  "MeMailFoldersChildFoldersMessagesExtensionsGetCountCf94",
  "MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCopy",
  "MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCreateForward",
  "MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCreateReply",
  "MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCreateReplyAll",
  "MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageForward",
  "MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageMove",
  "MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessagePermanentDelete",
  "MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageReply",
  "MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageReplyAll",
  "MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageSend",
  "MeMailFoldersChildFoldersMessagesGetCount56da",
  "MeMailFoldersMailFolderChildFoldersMailFolderMessagesDelta",
  "MeMailFoldersMailFolderChildFoldersMailFolderCopy",
  "MeMailFoldersMailFolderChildFoldersMailFolderMove",
  "MeMailFoldersMailFolderChildFoldersMailFolderPermanentDelete",
  "MeMailFoldersChildFoldersGetCount25bc",
  "MeMailFoldersMailFolderChildFoldersDelta",
  "MeMailFoldersListMessageRules",
  "MeMailFoldersCreateMessageRules",
  "MeMailFoldersGetMessageRules",
  "MeMailFoldersUpdateMessageRules",
  "MeMailFoldersDeleteMessageRules",
  "MeMailFoldersMessageRulesGetCount3d24",
  "MeMailFoldersListMessages",
  "MeMailFoldersCreateMessages",
  "MeMailFoldersGetMessages",
  "MeMailFoldersUpdateMessages",
  "MeMailFoldersDeleteMessages",
  "MeMailFoldersGetMessagesContent",
  "MeMailFoldersUpdateMessagesContent",
  "MeMailFoldersDeleteMessagesContent",
  "MeMailFoldersMessagesListAttachments",
  "MeMailFoldersMessagesCreateAttachments",
  "MeMailFoldersMessagesGetAttachments",
  "MeMailFoldersMessagesDeleteAttachments",
  "MeMailFoldersMessagesAttachmentsGetCount16fa",
  "MeMailFoldersMailFolderMessagesMessageAttachmentsCreateUploadSession",
  "MeMailFoldersMessagesListExtensions",
  "MeMailFoldersMessagesCreateExtensions",
  "MeMailFoldersMessagesGetExtensions",
  "MeMailFoldersMessagesUpdateExtensions",
  "MeMailFoldersMessagesDeleteExtensions",
  "MeMailFoldersMessagesExtensionsGetCount8860",
  "MeMailFoldersMailFolderMessagesMessageCopy"
] as const satisfies readonly (keyof OutlookGraphMeMailFolder01GeneratedClient)[];

export function createOutlookGraphMeMailFolder01GeneratedClient(
  callOperation: OutlookGraphGeneratedOperationCaller,
): OutlookGraphMeMailFolder01GeneratedClient {
  return {
    MeListMailFolders: (...args) => callOperation("me.ListMailFolders", ...(args as OutlookGraphOperationArgs<"me.ListMailFolders">)),
    MeCreateMailFolders: (...args) => callOperation("me.CreateMailFolders", ...(args as OutlookGraphOperationArgs<"me.CreateMailFolders">)),
    MeGetMailFolders: (...args) => callOperation("me.GetMailFolders", ...(args as OutlookGraphOperationArgs<"me.GetMailFolders">)),
    MeUpdateMailFolders: (...args) => callOperation("me.UpdateMailFolders", ...(args as OutlookGraphOperationArgs<"me.UpdateMailFolders">)),
    MeDeleteMailFolders: (...args) => callOperation("me.DeleteMailFolders", ...(args as OutlookGraphOperationArgs<"me.DeleteMailFolders">)),
    MeMailFoldersListChildFolders: (...args) => callOperation("me.mailFolders.ListChildFolders", ...(args as OutlookGraphOperationArgs<"me.mailFolders.ListChildFolders">)),
    MeMailFoldersCreateChildFolders: (...args) => callOperation("me.mailFolders.CreateChildFolders", ...(args as OutlookGraphOperationArgs<"me.mailFolders.CreateChildFolders">)),
    MeMailFoldersGetChildFolders: (...args) => callOperation("me.mailFolders.GetChildFolders", ...(args as OutlookGraphOperationArgs<"me.mailFolders.GetChildFolders">)),
    MeMailFoldersUpdateChildFolders: (...args) => callOperation("me.mailFolders.UpdateChildFolders", ...(args as OutlookGraphOperationArgs<"me.mailFolders.UpdateChildFolders">)),
    MeMailFoldersDeleteChildFolders: (...args) => callOperation("me.mailFolders.DeleteChildFolders", ...(args as OutlookGraphOperationArgs<"me.mailFolders.DeleteChildFolders">)),
    MeMailFoldersChildFoldersListMessageRules: (...args) => callOperation("me.mailFolders.childFolders.ListMessageRules", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.ListMessageRules">)),
    MeMailFoldersChildFoldersCreateMessageRules: (...args) => callOperation("me.mailFolders.childFolders.CreateMessageRules", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.CreateMessageRules">)),
    MeMailFoldersChildFoldersGetMessageRules: (...args) => callOperation("me.mailFolders.childFolders.GetMessageRules", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.GetMessageRules">)),
    MeMailFoldersChildFoldersUpdateMessageRules: (...args) => callOperation("me.mailFolders.childFolders.UpdateMessageRules", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.UpdateMessageRules">)),
    MeMailFoldersChildFoldersDeleteMessageRules: (...args) => callOperation("me.mailFolders.childFolders.DeleteMessageRules", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.DeleteMessageRules">)),
    MeMailFoldersChildFoldersMessageRulesGetCount6a96: (...args) => callOperation("me.mailFolders.childFolders.messageRules.GetCount-6a96", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.messageRules.GetCount-6a96">)),
    MeMailFoldersChildFoldersListMessages: (...args) => callOperation("me.mailFolders.childFolders.ListMessages", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.ListMessages">)),
    MeMailFoldersChildFoldersCreateMessages: (...args) => callOperation("me.mailFolders.childFolders.CreateMessages", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.CreateMessages">)),
    MeMailFoldersChildFoldersGetMessages: (...args) => callOperation("me.mailFolders.childFolders.GetMessages", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.GetMessages">)),
    MeMailFoldersChildFoldersUpdateMessages: (...args) => callOperation("me.mailFolders.childFolders.UpdateMessages", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.UpdateMessages">)),
    MeMailFoldersChildFoldersDeleteMessages: (...args) => callOperation("me.mailFolders.childFolders.DeleteMessages", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.DeleteMessages">)),
    MeMailFoldersChildFoldersGetMessagesContent: (...args) => callOperation("me.mailFolders.childFolders.GetMessagesContent", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.GetMessagesContent">)),
    MeMailFoldersChildFoldersUpdateMessagesContent: (...args) => callOperation("me.mailFolders.childFolders.UpdateMessagesContent", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.UpdateMessagesContent">)),
    MeMailFoldersChildFoldersDeleteMessagesContent: (...args) => callOperation("me.mailFolders.childFolders.DeleteMessagesContent", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.DeleteMessagesContent">)),
    MeMailFoldersChildFoldersMessagesListAttachments: (...args) => callOperation("me.mailFolders.childFolders.messages.ListAttachments", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.ListAttachments">)),
    MeMailFoldersChildFoldersMessagesCreateAttachments: (...args) => callOperation("me.mailFolders.childFolders.messages.CreateAttachments", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.CreateAttachments">)),
    MeMailFoldersChildFoldersMessagesGetAttachments: (...args) => callOperation("me.mailFolders.childFolders.messages.GetAttachments", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.GetAttachments">)),
    MeMailFoldersChildFoldersMessagesDeleteAttachments: (...args) => callOperation("me.mailFolders.childFolders.messages.DeleteAttachments", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.DeleteAttachments">)),
    MeMailFoldersChildFoldersMessagesAttachmentsGetCount65b2: (...args) => callOperation("me.mailFolders.childFolders.messages.attachments.GetCount-65b2", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.attachments.GetCount-65b2">)),
    MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageAttachmentsCreateUploadSession: (...args) => callOperation("me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession">)),
    MeMailFoldersChildFoldersMessagesListExtensions: (...args) => callOperation("me.mailFolders.childFolders.messages.ListExtensions", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.ListExtensions">)),
    MeMailFoldersChildFoldersMessagesCreateExtensions: (...args) => callOperation("me.mailFolders.childFolders.messages.CreateExtensions", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.CreateExtensions">)),
    MeMailFoldersChildFoldersMessagesGetExtensions: (...args) => callOperation("me.mailFolders.childFolders.messages.GetExtensions", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.GetExtensions">)),
    MeMailFoldersChildFoldersMessagesUpdateExtensions: (...args) => callOperation("me.mailFolders.childFolders.messages.UpdateExtensions", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.UpdateExtensions">)),
    MeMailFoldersChildFoldersMessagesDeleteExtensions: (...args) => callOperation("me.mailFolders.childFolders.messages.DeleteExtensions", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.DeleteExtensions">)),
    MeMailFoldersChildFoldersMessagesExtensionsGetCountCf94: (...args) => callOperation("me.mailFolders.childFolders.messages.extensions.GetCount-cf94", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.extensions.GetCount-cf94">)),
    MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCopy: (...args) => callOperation("me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy">)),
    MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCreateForward: (...args) => callOperation("me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward">)),
    MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCreateReply: (...args) => callOperation("me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply">)),
    MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCreateReplyAll: (...args) => callOperation("me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll">)),
    MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageForward: (...args) => callOperation("me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward">)),
    MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageMove: (...args) => callOperation("me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move">)),
    MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessagePermanentDelete: (...args) => callOperation("me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete">)),
    MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageReply: (...args) => callOperation("me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply">)),
    MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageReplyAll: (...args) => callOperation("me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll">)),
    MeMailFoldersMailFolderChildFoldersMailFolderMessagesMessageSend: (...args) => callOperation("me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send">)),
    MeMailFoldersChildFoldersMessagesGetCount56da: (...args) => callOperation("me.mailFolders.childFolders.messages.GetCount-56da", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.messages.GetCount-56da">)),
    MeMailFoldersMailFolderChildFoldersMailFolderMessagesDelta: (...args) => callOperation("me.mailFolders.mailFolder.childFolders.mailFolder.messages.delta", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.messages.delta">)),
    MeMailFoldersMailFolderChildFoldersMailFolderCopy: (...args) => callOperation("me.mailFolders.mailFolder.childFolders.mailFolder.copy", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.copy">)),
    MeMailFoldersMailFolderChildFoldersMailFolderMove: (...args) => callOperation("me.mailFolders.mailFolder.childFolders.mailFolder.move", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.move">)),
    MeMailFoldersMailFolderChildFoldersMailFolderPermanentDelete: (...args) => callOperation("me.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete">)),
    MeMailFoldersChildFoldersGetCount25bc: (...args) => callOperation("me.mailFolders.childFolders.GetCount-25bc", ...(args as OutlookGraphOperationArgs<"me.mailFolders.childFolders.GetCount-25bc">)),
    MeMailFoldersMailFolderChildFoldersDelta: (...args) => callOperation("me.mailFolders.mailFolder.childFolders.delta", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.childFolders.delta">)),
    MeMailFoldersListMessageRules: (...args) => callOperation("me.mailFolders.ListMessageRules", ...(args as OutlookGraphOperationArgs<"me.mailFolders.ListMessageRules">)),
    MeMailFoldersCreateMessageRules: (...args) => callOperation("me.mailFolders.CreateMessageRules", ...(args as OutlookGraphOperationArgs<"me.mailFolders.CreateMessageRules">)),
    MeMailFoldersGetMessageRules: (...args) => callOperation("me.mailFolders.GetMessageRules", ...(args as OutlookGraphOperationArgs<"me.mailFolders.GetMessageRules">)),
    MeMailFoldersUpdateMessageRules: (...args) => callOperation("me.mailFolders.UpdateMessageRules", ...(args as OutlookGraphOperationArgs<"me.mailFolders.UpdateMessageRules">)),
    MeMailFoldersDeleteMessageRules: (...args) => callOperation("me.mailFolders.DeleteMessageRules", ...(args as OutlookGraphOperationArgs<"me.mailFolders.DeleteMessageRules">)),
    MeMailFoldersMessageRulesGetCount3d24: (...args) => callOperation("me.mailFolders.messageRules.GetCount-3d24", ...(args as OutlookGraphOperationArgs<"me.mailFolders.messageRules.GetCount-3d24">)),
    MeMailFoldersListMessages: (...args) => callOperation("me.mailFolders.ListMessages", ...(args as OutlookGraphOperationArgs<"me.mailFolders.ListMessages">)),
    MeMailFoldersCreateMessages: (...args) => callOperation("me.mailFolders.CreateMessages", ...(args as OutlookGraphOperationArgs<"me.mailFolders.CreateMessages">)),
    MeMailFoldersGetMessages: (...args) => callOperation("me.mailFolders.GetMessages", ...(args as OutlookGraphOperationArgs<"me.mailFolders.GetMessages">)),
    MeMailFoldersUpdateMessages: (...args) => callOperation("me.mailFolders.UpdateMessages", ...(args as OutlookGraphOperationArgs<"me.mailFolders.UpdateMessages">)),
    MeMailFoldersDeleteMessages: (...args) => callOperation("me.mailFolders.DeleteMessages", ...(args as OutlookGraphOperationArgs<"me.mailFolders.DeleteMessages">)),
    MeMailFoldersGetMessagesContent: (...args) => callOperation("me.mailFolders.GetMessagesContent", ...(args as OutlookGraphOperationArgs<"me.mailFolders.GetMessagesContent">)),
    MeMailFoldersUpdateMessagesContent: (...args) => callOperation("me.mailFolders.UpdateMessagesContent", ...(args as OutlookGraphOperationArgs<"me.mailFolders.UpdateMessagesContent">)),
    MeMailFoldersDeleteMessagesContent: (...args) => callOperation("me.mailFolders.DeleteMessagesContent", ...(args as OutlookGraphOperationArgs<"me.mailFolders.DeleteMessagesContent">)),
    MeMailFoldersMessagesListAttachments: (...args) => callOperation("me.mailFolders.messages.ListAttachments", ...(args as OutlookGraphOperationArgs<"me.mailFolders.messages.ListAttachments">)),
    MeMailFoldersMessagesCreateAttachments: (...args) => callOperation("me.mailFolders.messages.CreateAttachments", ...(args as OutlookGraphOperationArgs<"me.mailFolders.messages.CreateAttachments">)),
    MeMailFoldersMessagesGetAttachments: (...args) => callOperation("me.mailFolders.messages.GetAttachments", ...(args as OutlookGraphOperationArgs<"me.mailFolders.messages.GetAttachments">)),
    MeMailFoldersMessagesDeleteAttachments: (...args) => callOperation("me.mailFolders.messages.DeleteAttachments", ...(args as OutlookGraphOperationArgs<"me.mailFolders.messages.DeleteAttachments">)),
    MeMailFoldersMessagesAttachmentsGetCount16fa: (...args) => callOperation("me.mailFolders.messages.attachments.GetCount-16fa", ...(args as OutlookGraphOperationArgs<"me.mailFolders.messages.attachments.GetCount-16fa">)),
    MeMailFoldersMailFolderMessagesMessageAttachmentsCreateUploadSession: (...args) => callOperation("me.mailFolders.mailFolder.messages.message.attachments.createUploadSession", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.attachments.createUploadSession">)),
    MeMailFoldersMessagesListExtensions: (...args) => callOperation("me.mailFolders.messages.ListExtensions", ...(args as OutlookGraphOperationArgs<"me.mailFolders.messages.ListExtensions">)),
    MeMailFoldersMessagesCreateExtensions: (...args) => callOperation("me.mailFolders.messages.CreateExtensions", ...(args as OutlookGraphOperationArgs<"me.mailFolders.messages.CreateExtensions">)),
    MeMailFoldersMessagesGetExtensions: (...args) => callOperation("me.mailFolders.messages.GetExtensions", ...(args as OutlookGraphOperationArgs<"me.mailFolders.messages.GetExtensions">)),
    MeMailFoldersMessagesUpdateExtensions: (...args) => callOperation("me.mailFolders.messages.UpdateExtensions", ...(args as OutlookGraphOperationArgs<"me.mailFolders.messages.UpdateExtensions">)),
    MeMailFoldersMessagesDeleteExtensions: (...args) => callOperation("me.mailFolders.messages.DeleteExtensions", ...(args as OutlookGraphOperationArgs<"me.mailFolders.messages.DeleteExtensions">)),
    MeMailFoldersMessagesExtensionsGetCount8860: (...args) => callOperation("me.mailFolders.messages.extensions.GetCount-8860", ...(args as OutlookGraphOperationArgs<"me.mailFolders.messages.extensions.GetCount-8860">)),
    MeMailFoldersMailFolderMessagesMessageCopy: (...args) => callOperation("me.mailFolders.mailFolder.messages.message.copy", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.copy">)),
  };
}
