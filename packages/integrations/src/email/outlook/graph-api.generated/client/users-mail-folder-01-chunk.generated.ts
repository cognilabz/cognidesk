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
export const OutlookGraphUsersMailFolder01OperationKeys = [
  "users.ListMailFolders",
  "users.CreateMailFolders",
  "users.GetMailFolders",
  "users.UpdateMailFolders",
  "users.DeleteMailFolders",
  "users.mailFolders.ListChildFolders",
  "users.mailFolders.CreateChildFolders",
  "users.mailFolders.GetChildFolders",
  "users.mailFolders.UpdateChildFolders",
  "users.mailFolders.DeleteChildFolders",
  "users.mailFolders.childFolders.ListMessageRules",
  "users.mailFolders.childFolders.CreateMessageRules",
  "users.mailFolders.childFolders.GetMessageRules",
  "users.mailFolders.childFolders.UpdateMessageRules",
  "users.mailFolders.childFolders.DeleteMessageRules",
  "users.mailFolders.childFolders.messageRules.GetCount-22e6",
  "users.mailFolders.childFolders.ListMessages",
  "users.mailFolders.childFolders.CreateMessages",
  "users.mailFolders.childFolders.GetMessages",
  "users.mailFolders.childFolders.UpdateMessages",
  "users.mailFolders.childFolders.DeleteMessages",
  "users.mailFolders.childFolders.GetMessagesContent",
  "users.mailFolders.childFolders.UpdateMessagesContent",
  "users.mailFolders.childFolders.DeleteMessagesContent",
  "users.mailFolders.childFolders.messages.ListAttachments",
  "users.mailFolders.childFolders.messages.CreateAttachments",
  "users.mailFolders.childFolders.messages.GetAttachments",
  "users.mailFolders.childFolders.messages.DeleteAttachments",
  "users.mailFolders.childFolders.messages.attachments.GetCount-5ef0",
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession",
  "users.mailFolders.childFolders.messages.ListExtensions",
  "users.mailFolders.childFolders.messages.CreateExtensions",
  "users.mailFolders.childFolders.messages.GetExtensions",
  "users.mailFolders.childFolders.messages.UpdateExtensions",
  "users.mailFolders.childFolders.messages.DeleteExtensions",
  "users.mailFolders.childFolders.messages.extensions.GetCount-1433",
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy",
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward",
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply",
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll",
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward",
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move",
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete",
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply",
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll",
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send",
  "users.mailFolders.childFolders.messages.GetCount-a576",
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.delta",
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.copy",
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.move",
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete",
  "users.mailFolders.childFolders.GetCount-d2d8",
  "users.user.mailFolders.mailFolder.childFolders.delta",
  "users.mailFolders.ListMessageRules",
  "users.mailFolders.CreateMessageRules",
  "users.mailFolders.GetMessageRules",
  "users.mailFolders.UpdateMessageRules",
  "users.mailFolders.DeleteMessageRules",
  "users.mailFolders.messageRules.GetCount-f330",
  "users.mailFolders.ListMessages",
  "users.mailFolders.CreateMessages",
  "users.mailFolders.GetMessages",
  "users.mailFolders.UpdateMessages",
  "users.mailFolders.DeleteMessages",
  "users.mailFolders.GetMessagesContent",
  "users.mailFolders.UpdateMessagesContent",
  "users.mailFolders.DeleteMessagesContent",
  "users.mailFolders.messages.ListAttachments",
  "users.mailFolders.messages.CreateAttachments",
  "users.mailFolders.messages.GetAttachments",
  "users.mailFolders.messages.DeleteAttachments",
  "users.mailFolders.messages.attachments.GetCount-3c73",
  "users.user.mailFolders.mailFolder.messages.message.attachments.createUploadSession",
  "users.mailFolders.messages.ListExtensions",
  "users.mailFolders.messages.CreateExtensions",
  "users.mailFolders.messages.GetExtensions",
  "users.mailFolders.messages.UpdateExtensions",
  "users.mailFolders.messages.DeleteExtensions",
  "users.mailFolders.messages.extensions.GetCount-651d",
  "users.user.mailFolders.mailFolder.messages.message.copy"
] as const;
export type OutlookGraphUsersMailFolder01OperationKey = typeof OutlookGraphUsersMailFolder01OperationKeys[number];
// End hardened literal operation keys.

export interface OutlookGraphUsersMailFolder01OperationPathParamMap {
  "users.ListMailFolders": { "user-id": OutlookGraphPathParamValue };
  "users.CreateMailFolders": { "user-id": OutlookGraphPathParamValue };
  "users.GetMailFolders": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue };
  "users.UpdateMailFolders": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue };
  "users.DeleteMailFolders": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue };
  "users.mailFolders.ListChildFolders": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue };
  "users.mailFolders.CreateChildFolders": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue };
  "users.mailFolders.GetChildFolders": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "users.mailFolders.UpdateChildFolders": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "users.mailFolders.DeleteChildFolders": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.ListMessageRules": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.CreateMessageRules": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.GetMessageRules": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "messageRule-id": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.UpdateMessageRules": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "messageRule-id": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.DeleteMessageRules": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "messageRule-id": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.messageRules.GetCount-22e6": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.ListMessages": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.CreateMessages": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.GetMessages": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.UpdateMessages": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.DeleteMessages": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.GetMessagesContent": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.UpdateMessagesContent": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.DeleteMessagesContent": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.messages.ListAttachments": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.messages.CreateAttachments": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.messages.GetAttachments": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "attachment-id": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.messages.DeleteAttachments": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "attachment-id": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.messages.attachments.GetCount-5ef0": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.messages.ListExtensions": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.messages.CreateExtensions": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.messages.GetExtensions": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "extension-id": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.messages.UpdateExtensions": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "extension-id": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.messages.DeleteExtensions": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "extension-id": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.messages.extensions.GetCount-1433": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.messages.GetCount-a576": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.delta": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.copy": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.move": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "mailFolder-id1": OutlookGraphPathParamValue };
  "users.mailFolders.childFolders.GetCount-d2d8": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.childFolders.delta": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue };
  "users.mailFolders.ListMessageRules": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue };
  "users.mailFolders.CreateMessageRules": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue };
  "users.mailFolders.GetMessageRules": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "messageRule-id": OutlookGraphPathParamValue };
  "users.mailFolders.UpdateMessageRules": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "messageRule-id": OutlookGraphPathParamValue };
  "users.mailFolders.DeleteMessageRules": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "messageRule-id": OutlookGraphPathParamValue };
  "users.mailFolders.messageRules.GetCount-f330": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue };
  "users.mailFolders.ListMessages": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue };
  "users.mailFolders.CreateMessages": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue };
  "users.mailFolders.GetMessages": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.UpdateMessages": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.DeleteMessages": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.GetMessagesContent": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.UpdateMessagesContent": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.DeleteMessagesContent": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.messages.ListAttachments": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.messages.CreateAttachments": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.messages.GetAttachments": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "attachment-id": OutlookGraphPathParamValue };
  "users.mailFolders.messages.DeleteAttachments": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "attachment-id": OutlookGraphPathParamValue };
  "users.mailFolders.messages.attachments.GetCount-3c73": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.messages.message.attachments.createUploadSession": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.messages.ListExtensions": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.messages.CreateExtensions": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.messages.GetExtensions": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "extension-id": OutlookGraphPathParamValue };
  "users.mailFolders.messages.UpdateExtensions": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "extension-id": OutlookGraphPathParamValue };
  "users.mailFolders.messages.DeleteExtensions": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "extension-id": OutlookGraphPathParamValue };
  "users.mailFolders.messages.extensions.GetCount-651d": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.messages.message.copy": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
}

export interface OutlookGraphUsersMailFolder01OperationRequestMap {
  "users.ListMailFolders": OutlookGraphOperationInput<"users.ListMailFolders">;
  "users.CreateMailFolders": OutlookGraphOperationInput<"users.CreateMailFolders">;
  "users.GetMailFolders": OutlookGraphOperationInput<"users.GetMailFolders">;
  "users.UpdateMailFolders": OutlookGraphOperationInput<"users.UpdateMailFolders">;
  "users.DeleteMailFolders": OutlookGraphOperationInput<"users.DeleteMailFolders">;
  "users.mailFolders.ListChildFolders": OutlookGraphOperationInput<"users.mailFolders.ListChildFolders">;
  "users.mailFolders.CreateChildFolders": OutlookGraphOperationInput<"users.mailFolders.CreateChildFolders">;
  "users.mailFolders.GetChildFolders": OutlookGraphOperationInput<"users.mailFolders.GetChildFolders">;
  "users.mailFolders.UpdateChildFolders": OutlookGraphOperationInput<"users.mailFolders.UpdateChildFolders">;
  "users.mailFolders.DeleteChildFolders": OutlookGraphOperationInput<"users.mailFolders.DeleteChildFolders">;
  "users.mailFolders.childFolders.ListMessageRules": OutlookGraphOperationInput<"users.mailFolders.childFolders.ListMessageRules">;
  "users.mailFolders.childFolders.CreateMessageRules": OutlookGraphOperationInput<"users.mailFolders.childFolders.CreateMessageRules">;
  "users.mailFolders.childFolders.GetMessageRules": OutlookGraphOperationInput<"users.mailFolders.childFolders.GetMessageRules">;
  "users.mailFolders.childFolders.UpdateMessageRules": OutlookGraphOperationInput<"users.mailFolders.childFolders.UpdateMessageRules">;
  "users.mailFolders.childFolders.DeleteMessageRules": OutlookGraphOperationInput<"users.mailFolders.childFolders.DeleteMessageRules">;
  "users.mailFolders.childFolders.messageRules.GetCount-22e6": OutlookGraphOperationInput<"users.mailFolders.childFolders.messageRules.GetCount-22e6">;
  "users.mailFolders.childFolders.ListMessages": OutlookGraphOperationInput<"users.mailFolders.childFolders.ListMessages">;
  "users.mailFolders.childFolders.CreateMessages": OutlookGraphOperationInput<"users.mailFolders.childFolders.CreateMessages">;
  "users.mailFolders.childFolders.GetMessages": OutlookGraphOperationInput<"users.mailFolders.childFolders.GetMessages">;
  "users.mailFolders.childFolders.UpdateMessages": OutlookGraphOperationInput<"users.mailFolders.childFolders.UpdateMessages">;
  "users.mailFolders.childFolders.DeleteMessages": OutlookGraphOperationInput<"users.mailFolders.childFolders.DeleteMessages">;
  "users.mailFolders.childFolders.GetMessagesContent": OutlookGraphOperationInput<"users.mailFolders.childFolders.GetMessagesContent">;
  "users.mailFolders.childFolders.UpdateMessagesContent": OutlookGraphOperationInput<"users.mailFolders.childFolders.UpdateMessagesContent">;
  "users.mailFolders.childFolders.DeleteMessagesContent": OutlookGraphOperationInput<"users.mailFolders.childFolders.DeleteMessagesContent">;
  "users.mailFolders.childFolders.messages.ListAttachments": OutlookGraphOperationInput<"users.mailFolders.childFolders.messages.ListAttachments">;
  "users.mailFolders.childFolders.messages.CreateAttachments": OutlookGraphOperationInput<"users.mailFolders.childFolders.messages.CreateAttachments">;
  "users.mailFolders.childFolders.messages.GetAttachments": OutlookGraphOperationInput<"users.mailFolders.childFolders.messages.GetAttachments">;
  "users.mailFolders.childFolders.messages.DeleteAttachments": OutlookGraphOperationInput<"users.mailFolders.childFolders.messages.DeleteAttachments">;
  "users.mailFolders.childFolders.messages.attachments.GetCount-5ef0": OutlookGraphOperationInput<"users.mailFolders.childFolders.messages.attachments.GetCount-5ef0">;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession">;
  "users.mailFolders.childFolders.messages.ListExtensions": OutlookGraphOperationInput<"users.mailFolders.childFolders.messages.ListExtensions">;
  "users.mailFolders.childFolders.messages.CreateExtensions": OutlookGraphOperationInput<"users.mailFolders.childFolders.messages.CreateExtensions">;
  "users.mailFolders.childFolders.messages.GetExtensions": OutlookGraphOperationInput<"users.mailFolders.childFolders.messages.GetExtensions">;
  "users.mailFolders.childFolders.messages.UpdateExtensions": OutlookGraphOperationInput<"users.mailFolders.childFolders.messages.UpdateExtensions">;
  "users.mailFolders.childFolders.messages.DeleteExtensions": OutlookGraphOperationInput<"users.mailFolders.childFolders.messages.DeleteExtensions">;
  "users.mailFolders.childFolders.messages.extensions.GetCount-1433": OutlookGraphOperationInput<"users.mailFolders.childFolders.messages.extensions.GetCount-1433">;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy">;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward">;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply">;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll">;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward">;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move">;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete">;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply">;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll">;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send">;
  "users.mailFolders.childFolders.messages.GetCount-a576": OutlookGraphOperationInput<"users.mailFolders.childFolders.messages.GetCount-a576">;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.delta": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.delta">;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.copy": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.childFolders.mailFolder.copy">;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.move": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.childFolders.mailFolder.move">;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete">;
  "users.mailFolders.childFolders.GetCount-d2d8": OutlookGraphOperationInput<"users.mailFolders.childFolders.GetCount-d2d8">;
  "users.user.mailFolders.mailFolder.childFolders.delta": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.childFolders.delta">;
  "users.mailFolders.ListMessageRules": OutlookGraphOperationInput<"users.mailFolders.ListMessageRules">;
  "users.mailFolders.CreateMessageRules": OutlookGraphOperationInput<"users.mailFolders.CreateMessageRules">;
  "users.mailFolders.GetMessageRules": OutlookGraphOperationInput<"users.mailFolders.GetMessageRules">;
  "users.mailFolders.UpdateMessageRules": OutlookGraphOperationInput<"users.mailFolders.UpdateMessageRules">;
  "users.mailFolders.DeleteMessageRules": OutlookGraphOperationInput<"users.mailFolders.DeleteMessageRules">;
  "users.mailFolders.messageRules.GetCount-f330": OutlookGraphOperationInput<"users.mailFolders.messageRules.GetCount-f330">;
  "users.mailFolders.ListMessages": OutlookGraphOperationInput<"users.mailFolders.ListMessages">;
  "users.mailFolders.CreateMessages": OutlookGraphOperationInput<"users.mailFolders.CreateMessages">;
  "users.mailFolders.GetMessages": OutlookGraphOperationInput<"users.mailFolders.GetMessages">;
  "users.mailFolders.UpdateMessages": OutlookGraphOperationInput<"users.mailFolders.UpdateMessages">;
  "users.mailFolders.DeleteMessages": OutlookGraphOperationInput<"users.mailFolders.DeleteMessages">;
  "users.mailFolders.GetMessagesContent": OutlookGraphOperationInput<"users.mailFolders.GetMessagesContent">;
  "users.mailFolders.UpdateMessagesContent": OutlookGraphOperationInput<"users.mailFolders.UpdateMessagesContent">;
  "users.mailFolders.DeleteMessagesContent": OutlookGraphOperationInput<"users.mailFolders.DeleteMessagesContent">;
  "users.mailFolders.messages.ListAttachments": OutlookGraphOperationInput<"users.mailFolders.messages.ListAttachments">;
  "users.mailFolders.messages.CreateAttachments": OutlookGraphOperationInput<"users.mailFolders.messages.CreateAttachments">;
  "users.mailFolders.messages.GetAttachments": OutlookGraphOperationInput<"users.mailFolders.messages.GetAttachments">;
  "users.mailFolders.messages.DeleteAttachments": OutlookGraphOperationInput<"users.mailFolders.messages.DeleteAttachments">;
  "users.mailFolders.messages.attachments.GetCount-3c73": OutlookGraphOperationInput<"users.mailFolders.messages.attachments.GetCount-3c73">;
  "users.user.mailFolders.mailFolder.messages.message.attachments.createUploadSession": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.messages.message.attachments.createUploadSession">;
  "users.mailFolders.messages.ListExtensions": OutlookGraphOperationInput<"users.mailFolders.messages.ListExtensions">;
  "users.mailFolders.messages.CreateExtensions": OutlookGraphOperationInput<"users.mailFolders.messages.CreateExtensions">;
  "users.mailFolders.messages.GetExtensions": OutlookGraphOperationInput<"users.mailFolders.messages.GetExtensions">;
  "users.mailFolders.messages.UpdateExtensions": OutlookGraphOperationInput<"users.mailFolders.messages.UpdateExtensions">;
  "users.mailFolders.messages.DeleteExtensions": OutlookGraphOperationInput<"users.mailFolders.messages.DeleteExtensions">;
  "users.mailFolders.messages.extensions.GetCount-651d": OutlookGraphOperationInput<"users.mailFolders.messages.extensions.GetCount-651d">;
  "users.user.mailFolders.mailFolder.messages.message.copy": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.messages.message.copy">;
}

export interface OutlookGraphUsersMailFolder01GeneratedClient {
  UsersListMailFolders(...args: OutlookGraphOperationArgs<"users.ListMailFolders">): Promise<OutlookGraphOperationResponseMap["users.ListMailFolders"]>;
  UsersCreateMailFolders(...args: OutlookGraphOperationArgs<"users.CreateMailFolders">): Promise<OutlookGraphOperationResponseMap["users.CreateMailFolders"]>;
  UsersGetMailFolders(...args: OutlookGraphOperationArgs<"users.GetMailFolders">): Promise<OutlookGraphOperationResponseMap["users.GetMailFolders"]>;
  UsersUpdateMailFolders(...args: OutlookGraphOperationArgs<"users.UpdateMailFolders">): Promise<OutlookGraphOperationResponseMap["users.UpdateMailFolders"]>;
  UsersDeleteMailFolders(...args: OutlookGraphOperationArgs<"users.DeleteMailFolders">): Promise<OutlookGraphOperationResponseMap["users.DeleteMailFolders"]>;
  UsersMailFoldersListChildFolders(...args: OutlookGraphOperationArgs<"users.mailFolders.ListChildFolders">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.ListChildFolders"]>;
  UsersMailFoldersCreateChildFolders(...args: OutlookGraphOperationArgs<"users.mailFolders.CreateChildFolders">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.CreateChildFolders"]>;
  UsersMailFoldersGetChildFolders(...args: OutlookGraphOperationArgs<"users.mailFolders.GetChildFolders">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.GetChildFolders"]>;
  UsersMailFoldersUpdateChildFolders(...args: OutlookGraphOperationArgs<"users.mailFolders.UpdateChildFolders">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.UpdateChildFolders"]>;
  UsersMailFoldersDeleteChildFolders(...args: OutlookGraphOperationArgs<"users.mailFolders.DeleteChildFolders">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.DeleteChildFolders"]>;
  UsersMailFoldersChildFoldersListMessageRules(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.ListMessageRules">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.ListMessageRules"]>;
  UsersMailFoldersChildFoldersCreateMessageRules(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.CreateMessageRules">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.CreateMessageRules"]>;
  UsersMailFoldersChildFoldersGetMessageRules(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.GetMessageRules">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.GetMessageRules"]>;
  UsersMailFoldersChildFoldersUpdateMessageRules(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.UpdateMessageRules">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.UpdateMessageRules"]>;
  UsersMailFoldersChildFoldersDeleteMessageRules(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.DeleteMessageRules">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.DeleteMessageRules"]>;
  UsersMailFoldersChildFoldersMessageRulesGetCount22e6(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.messageRules.GetCount-22e6">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.messageRules.GetCount-22e6"]>;
  UsersMailFoldersChildFoldersListMessages(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.ListMessages">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.ListMessages"]>;
  UsersMailFoldersChildFoldersCreateMessages(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.CreateMessages">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.CreateMessages"]>;
  UsersMailFoldersChildFoldersGetMessages(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.GetMessages">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.GetMessages"]>;
  UsersMailFoldersChildFoldersUpdateMessages(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.UpdateMessages">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.UpdateMessages"]>;
  UsersMailFoldersChildFoldersDeleteMessages(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.DeleteMessages">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.DeleteMessages"]>;
  UsersMailFoldersChildFoldersGetMessagesContent(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.GetMessagesContent">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.GetMessagesContent"]>;
  UsersMailFoldersChildFoldersUpdateMessagesContent(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.UpdateMessagesContent">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.UpdateMessagesContent"]>;
  UsersMailFoldersChildFoldersDeleteMessagesContent(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.DeleteMessagesContent">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.DeleteMessagesContent"]>;
  UsersMailFoldersChildFoldersMessagesListAttachments(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.ListAttachments">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.messages.ListAttachments"]>;
  UsersMailFoldersChildFoldersMessagesCreateAttachments(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.CreateAttachments">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.messages.CreateAttachments"]>;
  UsersMailFoldersChildFoldersMessagesGetAttachments(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.GetAttachments">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.messages.GetAttachments"]>;
  UsersMailFoldersChildFoldersMessagesDeleteAttachments(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.DeleteAttachments">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.messages.DeleteAttachments"]>;
  UsersMailFoldersChildFoldersMessagesAttachmentsGetCount5ef0(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.attachments.GetCount-5ef0">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.messages.attachments.GetCount-5ef0"]>;
  UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageAttachmentsCreateUploadSession(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession"]>;
  UsersMailFoldersChildFoldersMessagesListExtensions(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.ListExtensions">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.messages.ListExtensions"]>;
  UsersMailFoldersChildFoldersMessagesCreateExtensions(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.CreateExtensions">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.messages.CreateExtensions"]>;
  UsersMailFoldersChildFoldersMessagesGetExtensions(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.GetExtensions">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.messages.GetExtensions"]>;
  UsersMailFoldersChildFoldersMessagesUpdateExtensions(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.UpdateExtensions">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.messages.UpdateExtensions"]>;
  UsersMailFoldersChildFoldersMessagesDeleteExtensions(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.DeleteExtensions">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.messages.DeleteExtensions"]>;
  UsersMailFoldersChildFoldersMessagesExtensionsGetCount1433(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.extensions.GetCount-1433">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.messages.extensions.GetCount-1433"]>;
  UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCopy(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy"]>;
  UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCreateForward(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward"]>;
  UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCreateReply(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply"]>;
  UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCreateReplyAll(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll"]>;
  UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageForward(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward"]>;
  UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageMove(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move"]>;
  UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessagePermanentDelete(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete"]>;
  UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageReply(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply"]>;
  UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageReplyAll(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll"]>;
  UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageSend(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send"]>;
  UsersMailFoldersChildFoldersMessagesGetCountA576(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.GetCount-a576">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.messages.GetCount-a576"]>;
  UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesDelta(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.delta">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.delta"]>;
  UsersUserMailFoldersMailFolderChildFoldersMailFolderCopy(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.copy">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.childFolders.mailFolder.copy"]>;
  UsersUserMailFoldersMailFolderChildFoldersMailFolderMove(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.move">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.childFolders.mailFolder.move"]>;
  UsersUserMailFoldersMailFolderChildFoldersMailFolderPermanentDelete(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete"]>;
  UsersMailFoldersChildFoldersGetCountD2d8(...args: OutlookGraphOperationArgs<"users.mailFolders.childFolders.GetCount-d2d8">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.childFolders.GetCount-d2d8"]>;
  UsersUserMailFoldersMailFolderChildFoldersDelta(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.delta">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.childFolders.delta"]>;
  UsersMailFoldersListMessageRules(...args: OutlookGraphOperationArgs<"users.mailFolders.ListMessageRules">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.ListMessageRules"]>;
  UsersMailFoldersCreateMessageRules(...args: OutlookGraphOperationArgs<"users.mailFolders.CreateMessageRules">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.CreateMessageRules"]>;
  UsersMailFoldersGetMessageRules(...args: OutlookGraphOperationArgs<"users.mailFolders.GetMessageRules">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.GetMessageRules"]>;
  UsersMailFoldersUpdateMessageRules(...args: OutlookGraphOperationArgs<"users.mailFolders.UpdateMessageRules">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.UpdateMessageRules"]>;
  UsersMailFoldersDeleteMessageRules(...args: OutlookGraphOperationArgs<"users.mailFolders.DeleteMessageRules">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.DeleteMessageRules"]>;
  UsersMailFoldersMessageRulesGetCountF330(...args: OutlookGraphOperationArgs<"users.mailFolders.messageRules.GetCount-f330">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.messageRules.GetCount-f330"]>;
  UsersMailFoldersListMessages(...args: OutlookGraphOperationArgs<"users.mailFolders.ListMessages">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.ListMessages"]>;
  UsersMailFoldersCreateMessages(...args: OutlookGraphOperationArgs<"users.mailFolders.CreateMessages">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.CreateMessages"]>;
  UsersMailFoldersGetMessages(...args: OutlookGraphOperationArgs<"users.mailFolders.GetMessages">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.GetMessages"]>;
  UsersMailFoldersUpdateMessages(...args: OutlookGraphOperationArgs<"users.mailFolders.UpdateMessages">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.UpdateMessages"]>;
  UsersMailFoldersDeleteMessages(...args: OutlookGraphOperationArgs<"users.mailFolders.DeleteMessages">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.DeleteMessages"]>;
  UsersMailFoldersGetMessagesContent(...args: OutlookGraphOperationArgs<"users.mailFolders.GetMessagesContent">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.GetMessagesContent"]>;
  UsersMailFoldersUpdateMessagesContent(...args: OutlookGraphOperationArgs<"users.mailFolders.UpdateMessagesContent">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.UpdateMessagesContent"]>;
  UsersMailFoldersDeleteMessagesContent(...args: OutlookGraphOperationArgs<"users.mailFolders.DeleteMessagesContent">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.DeleteMessagesContent"]>;
  UsersMailFoldersMessagesListAttachments(...args: OutlookGraphOperationArgs<"users.mailFolders.messages.ListAttachments">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.messages.ListAttachments"]>;
  UsersMailFoldersMessagesCreateAttachments(...args: OutlookGraphOperationArgs<"users.mailFolders.messages.CreateAttachments">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.messages.CreateAttachments"]>;
  UsersMailFoldersMessagesGetAttachments(...args: OutlookGraphOperationArgs<"users.mailFolders.messages.GetAttachments">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.messages.GetAttachments"]>;
  UsersMailFoldersMessagesDeleteAttachments(...args: OutlookGraphOperationArgs<"users.mailFolders.messages.DeleteAttachments">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.messages.DeleteAttachments"]>;
  UsersMailFoldersMessagesAttachmentsGetCount3c73(...args: OutlookGraphOperationArgs<"users.mailFolders.messages.attachments.GetCount-3c73">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.messages.attachments.GetCount-3c73"]>;
  UsersUserMailFoldersMailFolderMessagesMessageAttachmentsCreateUploadSession(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.attachments.createUploadSession">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.messages.message.attachments.createUploadSession"]>;
  UsersMailFoldersMessagesListExtensions(...args: OutlookGraphOperationArgs<"users.mailFolders.messages.ListExtensions">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.messages.ListExtensions"]>;
  UsersMailFoldersMessagesCreateExtensions(...args: OutlookGraphOperationArgs<"users.mailFolders.messages.CreateExtensions">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.messages.CreateExtensions"]>;
  UsersMailFoldersMessagesGetExtensions(...args: OutlookGraphOperationArgs<"users.mailFolders.messages.GetExtensions">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.messages.GetExtensions"]>;
  UsersMailFoldersMessagesUpdateExtensions(...args: OutlookGraphOperationArgs<"users.mailFolders.messages.UpdateExtensions">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.messages.UpdateExtensions"]>;
  UsersMailFoldersMessagesDeleteExtensions(...args: OutlookGraphOperationArgs<"users.mailFolders.messages.DeleteExtensions">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.messages.DeleteExtensions"]>;
  UsersMailFoldersMessagesExtensionsGetCount651d(...args: OutlookGraphOperationArgs<"users.mailFolders.messages.extensions.GetCount-651d">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.messages.extensions.GetCount-651d"]>;
  UsersUserMailFoldersMailFolderMessagesMessageCopy(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.copy">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.messages.message.copy"]>;
}

export const OutlookGraphUsersMailFolder01GeneratedFunctionNames = [
  "UsersListMailFolders",
  "UsersCreateMailFolders",
  "UsersGetMailFolders",
  "UsersUpdateMailFolders",
  "UsersDeleteMailFolders",
  "UsersMailFoldersListChildFolders",
  "UsersMailFoldersCreateChildFolders",
  "UsersMailFoldersGetChildFolders",
  "UsersMailFoldersUpdateChildFolders",
  "UsersMailFoldersDeleteChildFolders",
  "UsersMailFoldersChildFoldersListMessageRules",
  "UsersMailFoldersChildFoldersCreateMessageRules",
  "UsersMailFoldersChildFoldersGetMessageRules",
  "UsersMailFoldersChildFoldersUpdateMessageRules",
  "UsersMailFoldersChildFoldersDeleteMessageRules",
  "UsersMailFoldersChildFoldersMessageRulesGetCount22e6",
  "UsersMailFoldersChildFoldersListMessages",
  "UsersMailFoldersChildFoldersCreateMessages",
  "UsersMailFoldersChildFoldersGetMessages",
  "UsersMailFoldersChildFoldersUpdateMessages",
  "UsersMailFoldersChildFoldersDeleteMessages",
  "UsersMailFoldersChildFoldersGetMessagesContent",
  "UsersMailFoldersChildFoldersUpdateMessagesContent",
  "UsersMailFoldersChildFoldersDeleteMessagesContent",
  "UsersMailFoldersChildFoldersMessagesListAttachments",
  "UsersMailFoldersChildFoldersMessagesCreateAttachments",
  "UsersMailFoldersChildFoldersMessagesGetAttachments",
  "UsersMailFoldersChildFoldersMessagesDeleteAttachments",
  "UsersMailFoldersChildFoldersMessagesAttachmentsGetCount5ef0",
  "UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageAttachmentsCreateUploadSession",
  "UsersMailFoldersChildFoldersMessagesListExtensions",
  "UsersMailFoldersChildFoldersMessagesCreateExtensions",
  "UsersMailFoldersChildFoldersMessagesGetExtensions",
  "UsersMailFoldersChildFoldersMessagesUpdateExtensions",
  "UsersMailFoldersChildFoldersMessagesDeleteExtensions",
  "UsersMailFoldersChildFoldersMessagesExtensionsGetCount1433",
  "UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCopy",
  "UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCreateForward",
  "UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCreateReply",
  "UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCreateReplyAll",
  "UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageForward",
  "UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageMove",
  "UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessagePermanentDelete",
  "UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageReply",
  "UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageReplyAll",
  "UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageSend",
  "UsersMailFoldersChildFoldersMessagesGetCountA576",
  "UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesDelta",
  "UsersUserMailFoldersMailFolderChildFoldersMailFolderCopy",
  "UsersUserMailFoldersMailFolderChildFoldersMailFolderMove",
  "UsersUserMailFoldersMailFolderChildFoldersMailFolderPermanentDelete",
  "UsersMailFoldersChildFoldersGetCountD2d8",
  "UsersUserMailFoldersMailFolderChildFoldersDelta",
  "UsersMailFoldersListMessageRules",
  "UsersMailFoldersCreateMessageRules",
  "UsersMailFoldersGetMessageRules",
  "UsersMailFoldersUpdateMessageRules",
  "UsersMailFoldersDeleteMessageRules",
  "UsersMailFoldersMessageRulesGetCountF330",
  "UsersMailFoldersListMessages",
  "UsersMailFoldersCreateMessages",
  "UsersMailFoldersGetMessages",
  "UsersMailFoldersUpdateMessages",
  "UsersMailFoldersDeleteMessages",
  "UsersMailFoldersGetMessagesContent",
  "UsersMailFoldersUpdateMessagesContent",
  "UsersMailFoldersDeleteMessagesContent",
  "UsersMailFoldersMessagesListAttachments",
  "UsersMailFoldersMessagesCreateAttachments",
  "UsersMailFoldersMessagesGetAttachments",
  "UsersMailFoldersMessagesDeleteAttachments",
  "UsersMailFoldersMessagesAttachmentsGetCount3c73",
  "UsersUserMailFoldersMailFolderMessagesMessageAttachmentsCreateUploadSession",
  "UsersMailFoldersMessagesListExtensions",
  "UsersMailFoldersMessagesCreateExtensions",
  "UsersMailFoldersMessagesGetExtensions",
  "UsersMailFoldersMessagesUpdateExtensions",
  "UsersMailFoldersMessagesDeleteExtensions",
  "UsersMailFoldersMessagesExtensionsGetCount651d",
  "UsersUserMailFoldersMailFolderMessagesMessageCopy"
] as const satisfies readonly (keyof OutlookGraphUsersMailFolder01GeneratedClient)[];

export function createOutlookGraphUsersMailFolder01GeneratedClient(
  callOperation: OutlookGraphGeneratedOperationCaller,
): OutlookGraphUsersMailFolder01GeneratedClient {
  return {
    UsersListMailFolders: (...args) => callOperation("users.ListMailFolders", ...(args as OutlookGraphOperationArgs<"users.ListMailFolders">)),
    UsersCreateMailFolders: (...args) => callOperation("users.CreateMailFolders", ...(args as OutlookGraphOperationArgs<"users.CreateMailFolders">)),
    UsersGetMailFolders: (...args) => callOperation("users.GetMailFolders", ...(args as OutlookGraphOperationArgs<"users.GetMailFolders">)),
    UsersUpdateMailFolders: (...args) => callOperation("users.UpdateMailFolders", ...(args as OutlookGraphOperationArgs<"users.UpdateMailFolders">)),
    UsersDeleteMailFolders: (...args) => callOperation("users.DeleteMailFolders", ...(args as OutlookGraphOperationArgs<"users.DeleteMailFolders">)),
    UsersMailFoldersListChildFolders: (...args) => callOperation("users.mailFolders.ListChildFolders", ...(args as OutlookGraphOperationArgs<"users.mailFolders.ListChildFolders">)),
    UsersMailFoldersCreateChildFolders: (...args) => callOperation("users.mailFolders.CreateChildFolders", ...(args as OutlookGraphOperationArgs<"users.mailFolders.CreateChildFolders">)),
    UsersMailFoldersGetChildFolders: (...args) => callOperation("users.mailFolders.GetChildFolders", ...(args as OutlookGraphOperationArgs<"users.mailFolders.GetChildFolders">)),
    UsersMailFoldersUpdateChildFolders: (...args) => callOperation("users.mailFolders.UpdateChildFolders", ...(args as OutlookGraphOperationArgs<"users.mailFolders.UpdateChildFolders">)),
    UsersMailFoldersDeleteChildFolders: (...args) => callOperation("users.mailFolders.DeleteChildFolders", ...(args as OutlookGraphOperationArgs<"users.mailFolders.DeleteChildFolders">)),
    UsersMailFoldersChildFoldersListMessageRules: (...args) => callOperation("users.mailFolders.childFolders.ListMessageRules", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.ListMessageRules">)),
    UsersMailFoldersChildFoldersCreateMessageRules: (...args) => callOperation("users.mailFolders.childFolders.CreateMessageRules", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.CreateMessageRules">)),
    UsersMailFoldersChildFoldersGetMessageRules: (...args) => callOperation("users.mailFolders.childFolders.GetMessageRules", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.GetMessageRules">)),
    UsersMailFoldersChildFoldersUpdateMessageRules: (...args) => callOperation("users.mailFolders.childFolders.UpdateMessageRules", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.UpdateMessageRules">)),
    UsersMailFoldersChildFoldersDeleteMessageRules: (...args) => callOperation("users.mailFolders.childFolders.DeleteMessageRules", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.DeleteMessageRules">)),
    UsersMailFoldersChildFoldersMessageRulesGetCount22e6: (...args) => callOperation("users.mailFolders.childFolders.messageRules.GetCount-22e6", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.messageRules.GetCount-22e6">)),
    UsersMailFoldersChildFoldersListMessages: (...args) => callOperation("users.mailFolders.childFolders.ListMessages", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.ListMessages">)),
    UsersMailFoldersChildFoldersCreateMessages: (...args) => callOperation("users.mailFolders.childFolders.CreateMessages", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.CreateMessages">)),
    UsersMailFoldersChildFoldersGetMessages: (...args) => callOperation("users.mailFolders.childFolders.GetMessages", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.GetMessages">)),
    UsersMailFoldersChildFoldersUpdateMessages: (...args) => callOperation("users.mailFolders.childFolders.UpdateMessages", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.UpdateMessages">)),
    UsersMailFoldersChildFoldersDeleteMessages: (...args) => callOperation("users.mailFolders.childFolders.DeleteMessages", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.DeleteMessages">)),
    UsersMailFoldersChildFoldersGetMessagesContent: (...args) => callOperation("users.mailFolders.childFolders.GetMessagesContent", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.GetMessagesContent">)),
    UsersMailFoldersChildFoldersUpdateMessagesContent: (...args) => callOperation("users.mailFolders.childFolders.UpdateMessagesContent", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.UpdateMessagesContent">)),
    UsersMailFoldersChildFoldersDeleteMessagesContent: (...args) => callOperation("users.mailFolders.childFolders.DeleteMessagesContent", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.DeleteMessagesContent">)),
    UsersMailFoldersChildFoldersMessagesListAttachments: (...args) => callOperation("users.mailFolders.childFolders.messages.ListAttachments", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.ListAttachments">)),
    UsersMailFoldersChildFoldersMessagesCreateAttachments: (...args) => callOperation("users.mailFolders.childFolders.messages.CreateAttachments", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.CreateAttachments">)),
    UsersMailFoldersChildFoldersMessagesGetAttachments: (...args) => callOperation("users.mailFolders.childFolders.messages.GetAttachments", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.GetAttachments">)),
    UsersMailFoldersChildFoldersMessagesDeleteAttachments: (...args) => callOperation("users.mailFolders.childFolders.messages.DeleteAttachments", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.DeleteAttachments">)),
    UsersMailFoldersChildFoldersMessagesAttachmentsGetCount5ef0: (...args) => callOperation("users.mailFolders.childFolders.messages.attachments.GetCount-5ef0", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.attachments.GetCount-5ef0">)),
    UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageAttachmentsCreateUploadSession: (...args) => callOperation("users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession">)),
    UsersMailFoldersChildFoldersMessagesListExtensions: (...args) => callOperation("users.mailFolders.childFolders.messages.ListExtensions", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.ListExtensions">)),
    UsersMailFoldersChildFoldersMessagesCreateExtensions: (...args) => callOperation("users.mailFolders.childFolders.messages.CreateExtensions", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.CreateExtensions">)),
    UsersMailFoldersChildFoldersMessagesGetExtensions: (...args) => callOperation("users.mailFolders.childFolders.messages.GetExtensions", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.GetExtensions">)),
    UsersMailFoldersChildFoldersMessagesUpdateExtensions: (...args) => callOperation("users.mailFolders.childFolders.messages.UpdateExtensions", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.UpdateExtensions">)),
    UsersMailFoldersChildFoldersMessagesDeleteExtensions: (...args) => callOperation("users.mailFolders.childFolders.messages.DeleteExtensions", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.DeleteExtensions">)),
    UsersMailFoldersChildFoldersMessagesExtensionsGetCount1433: (...args) => callOperation("users.mailFolders.childFolders.messages.extensions.GetCount-1433", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.extensions.GetCount-1433">)),
    UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCopy: (...args) => callOperation("users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy">)),
    UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCreateForward: (...args) => callOperation("users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward">)),
    UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCreateReply: (...args) => callOperation("users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply">)),
    UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageCreateReplyAll: (...args) => callOperation("users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll">)),
    UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageForward: (...args) => callOperation("users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward">)),
    UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageMove: (...args) => callOperation("users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move">)),
    UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessagePermanentDelete: (...args) => callOperation("users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete">)),
    UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageReply: (...args) => callOperation("users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply">)),
    UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageReplyAll: (...args) => callOperation("users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll">)),
    UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesMessageSend: (...args) => callOperation("users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send">)),
    UsersMailFoldersChildFoldersMessagesGetCountA576: (...args) => callOperation("users.mailFolders.childFolders.messages.GetCount-a576", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.messages.GetCount-a576">)),
    UsersUserMailFoldersMailFolderChildFoldersMailFolderMessagesDelta: (...args) => callOperation("users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.delta", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.delta">)),
    UsersUserMailFoldersMailFolderChildFoldersMailFolderCopy: (...args) => callOperation("users.user.mailFolders.mailFolder.childFolders.mailFolder.copy", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.copy">)),
    UsersUserMailFoldersMailFolderChildFoldersMailFolderMove: (...args) => callOperation("users.user.mailFolders.mailFolder.childFolders.mailFolder.move", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.move">)),
    UsersUserMailFoldersMailFolderChildFoldersMailFolderPermanentDelete: (...args) => callOperation("users.user.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete">)),
    UsersMailFoldersChildFoldersGetCountD2d8: (...args) => callOperation("users.mailFolders.childFolders.GetCount-d2d8", ...(args as OutlookGraphOperationArgs<"users.mailFolders.childFolders.GetCount-d2d8">)),
    UsersUserMailFoldersMailFolderChildFoldersDelta: (...args) => callOperation("users.user.mailFolders.mailFolder.childFolders.delta", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.childFolders.delta">)),
    UsersMailFoldersListMessageRules: (...args) => callOperation("users.mailFolders.ListMessageRules", ...(args as OutlookGraphOperationArgs<"users.mailFolders.ListMessageRules">)),
    UsersMailFoldersCreateMessageRules: (...args) => callOperation("users.mailFolders.CreateMessageRules", ...(args as OutlookGraphOperationArgs<"users.mailFolders.CreateMessageRules">)),
    UsersMailFoldersGetMessageRules: (...args) => callOperation("users.mailFolders.GetMessageRules", ...(args as OutlookGraphOperationArgs<"users.mailFolders.GetMessageRules">)),
    UsersMailFoldersUpdateMessageRules: (...args) => callOperation("users.mailFolders.UpdateMessageRules", ...(args as OutlookGraphOperationArgs<"users.mailFolders.UpdateMessageRules">)),
    UsersMailFoldersDeleteMessageRules: (...args) => callOperation("users.mailFolders.DeleteMessageRules", ...(args as OutlookGraphOperationArgs<"users.mailFolders.DeleteMessageRules">)),
    UsersMailFoldersMessageRulesGetCountF330: (...args) => callOperation("users.mailFolders.messageRules.GetCount-f330", ...(args as OutlookGraphOperationArgs<"users.mailFolders.messageRules.GetCount-f330">)),
    UsersMailFoldersListMessages: (...args) => callOperation("users.mailFolders.ListMessages", ...(args as OutlookGraphOperationArgs<"users.mailFolders.ListMessages">)),
    UsersMailFoldersCreateMessages: (...args) => callOperation("users.mailFolders.CreateMessages", ...(args as OutlookGraphOperationArgs<"users.mailFolders.CreateMessages">)),
    UsersMailFoldersGetMessages: (...args) => callOperation("users.mailFolders.GetMessages", ...(args as OutlookGraphOperationArgs<"users.mailFolders.GetMessages">)),
    UsersMailFoldersUpdateMessages: (...args) => callOperation("users.mailFolders.UpdateMessages", ...(args as OutlookGraphOperationArgs<"users.mailFolders.UpdateMessages">)),
    UsersMailFoldersDeleteMessages: (...args) => callOperation("users.mailFolders.DeleteMessages", ...(args as OutlookGraphOperationArgs<"users.mailFolders.DeleteMessages">)),
    UsersMailFoldersGetMessagesContent: (...args) => callOperation("users.mailFolders.GetMessagesContent", ...(args as OutlookGraphOperationArgs<"users.mailFolders.GetMessagesContent">)),
    UsersMailFoldersUpdateMessagesContent: (...args) => callOperation("users.mailFolders.UpdateMessagesContent", ...(args as OutlookGraphOperationArgs<"users.mailFolders.UpdateMessagesContent">)),
    UsersMailFoldersDeleteMessagesContent: (...args) => callOperation("users.mailFolders.DeleteMessagesContent", ...(args as OutlookGraphOperationArgs<"users.mailFolders.DeleteMessagesContent">)),
    UsersMailFoldersMessagesListAttachments: (...args) => callOperation("users.mailFolders.messages.ListAttachments", ...(args as OutlookGraphOperationArgs<"users.mailFolders.messages.ListAttachments">)),
    UsersMailFoldersMessagesCreateAttachments: (...args) => callOperation("users.mailFolders.messages.CreateAttachments", ...(args as OutlookGraphOperationArgs<"users.mailFolders.messages.CreateAttachments">)),
    UsersMailFoldersMessagesGetAttachments: (...args) => callOperation("users.mailFolders.messages.GetAttachments", ...(args as OutlookGraphOperationArgs<"users.mailFolders.messages.GetAttachments">)),
    UsersMailFoldersMessagesDeleteAttachments: (...args) => callOperation("users.mailFolders.messages.DeleteAttachments", ...(args as OutlookGraphOperationArgs<"users.mailFolders.messages.DeleteAttachments">)),
    UsersMailFoldersMessagesAttachmentsGetCount3c73: (...args) => callOperation("users.mailFolders.messages.attachments.GetCount-3c73", ...(args as OutlookGraphOperationArgs<"users.mailFolders.messages.attachments.GetCount-3c73">)),
    UsersUserMailFoldersMailFolderMessagesMessageAttachmentsCreateUploadSession: (...args) => callOperation("users.user.mailFolders.mailFolder.messages.message.attachments.createUploadSession", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.attachments.createUploadSession">)),
    UsersMailFoldersMessagesListExtensions: (...args) => callOperation("users.mailFolders.messages.ListExtensions", ...(args as OutlookGraphOperationArgs<"users.mailFolders.messages.ListExtensions">)),
    UsersMailFoldersMessagesCreateExtensions: (...args) => callOperation("users.mailFolders.messages.CreateExtensions", ...(args as OutlookGraphOperationArgs<"users.mailFolders.messages.CreateExtensions">)),
    UsersMailFoldersMessagesGetExtensions: (...args) => callOperation("users.mailFolders.messages.GetExtensions", ...(args as OutlookGraphOperationArgs<"users.mailFolders.messages.GetExtensions">)),
    UsersMailFoldersMessagesUpdateExtensions: (...args) => callOperation("users.mailFolders.messages.UpdateExtensions", ...(args as OutlookGraphOperationArgs<"users.mailFolders.messages.UpdateExtensions">)),
    UsersMailFoldersMessagesDeleteExtensions: (...args) => callOperation("users.mailFolders.messages.DeleteExtensions", ...(args as OutlookGraphOperationArgs<"users.mailFolders.messages.DeleteExtensions">)),
    UsersMailFoldersMessagesExtensionsGetCount651d: (...args) => callOperation("users.mailFolders.messages.extensions.GetCount-651d", ...(args as OutlookGraphOperationArgs<"users.mailFolders.messages.extensions.GetCount-651d">)),
    UsersUserMailFoldersMailFolderMessagesMessageCopy: (...args) => callOperation("users.user.mailFolders.mailFolder.messages.message.copy", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.copy">)),
  };
}
