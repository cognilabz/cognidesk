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
export const OutlookGraphUsersMessageOperationKeys = [
  "users.ListMessages",
  "users.CreateMessages",
  "users.GetMessages",
  "users.UpdateMessages",
  "users.DeleteMessages",
  "users.GetMessagesContent",
  "users.UpdateMessagesContent",
  "users.DeleteMessagesContent",
  "users.messages.ListAttachments",
  "users.messages.CreateAttachments",
  "users.messages.GetAttachments",
  "users.messages.DeleteAttachments",
  "users.messages.attachments.GetCount-a586",
  "users.user.messages.message.attachments.createUploadSession",
  "users.messages.ListExtensions",
  "users.messages.CreateExtensions",
  "users.messages.GetExtensions",
  "users.messages.UpdateExtensions",
  "users.messages.DeleteExtensions",
  "users.messages.extensions.GetCount-5628",
  "users.user.messages.message.copy",
  "users.user.messages.message.createForward",
  "users.user.messages.message.createReply",
  "users.user.messages.message.createReplyAll",
  "users.user.messages.message.forward",
  "users.user.messages.message.move",
  "users.user.messages.message.permanentDelete",
  "users.user.messages.message.reply",
  "users.user.messages.message.replyAll",
  "users.user.messages.message.send",
  "users.messages.GetCount-0f52",
  "users.user.messages.delta"
] as const;
export type OutlookGraphUsersMessageOperationKey = typeof OutlookGraphUsersMessageOperationKeys[number];
// End hardened literal operation keys.

export interface OutlookGraphUsersMessageOperationPathParamMap {
  "users.ListMessages": { "user-id": OutlookGraphPathParamValue };
  "users.CreateMessages": { "user-id": OutlookGraphPathParamValue };
  "users.GetMessages": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.UpdateMessages": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.DeleteMessages": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.GetMessagesContent": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.UpdateMessagesContent": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.DeleteMessagesContent": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.messages.ListAttachments": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.messages.CreateAttachments": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.messages.GetAttachments": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "attachment-id": OutlookGraphPathParamValue };
  "users.messages.DeleteAttachments": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "attachment-id": OutlookGraphPathParamValue };
  "users.messages.attachments.GetCount-a586": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.messages.message.attachments.createUploadSession": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.messages.ListExtensions": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.messages.CreateExtensions": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.messages.GetExtensions": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "extension-id": OutlookGraphPathParamValue };
  "users.messages.UpdateExtensions": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "extension-id": OutlookGraphPathParamValue };
  "users.messages.DeleteExtensions": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue; "extension-id": OutlookGraphPathParamValue };
  "users.messages.extensions.GetCount-5628": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.messages.message.copy": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.messages.message.createForward": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.messages.message.createReply": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.messages.message.createReplyAll": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.messages.message.forward": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.messages.message.move": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.messages.message.permanentDelete": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.messages.message.reply": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.messages.message.replyAll": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.messages.message.send": { "user-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.messages.GetCount-0f52": { "user-id": OutlookGraphPathParamValue };
  "users.user.messages.delta": { "user-id": OutlookGraphPathParamValue };
}

export interface OutlookGraphUsersMessageOperationRequestMap {
  "users.ListMessages": OutlookGraphOperationInput<"users.ListMessages">;
  "users.CreateMessages": OutlookGraphOperationInput<"users.CreateMessages">;
  "users.GetMessages": OutlookGraphOperationInput<"users.GetMessages">;
  "users.UpdateMessages": OutlookGraphOperationInput<"users.UpdateMessages">;
  "users.DeleteMessages": OutlookGraphOperationInput<"users.DeleteMessages">;
  "users.GetMessagesContent": OutlookGraphOperationInput<"users.GetMessagesContent">;
  "users.UpdateMessagesContent": OutlookGraphOperationInput<"users.UpdateMessagesContent">;
  "users.DeleteMessagesContent": OutlookGraphOperationInput<"users.DeleteMessagesContent">;
  "users.messages.ListAttachments": OutlookGraphOperationInput<"users.messages.ListAttachments">;
  "users.messages.CreateAttachments": OutlookGraphOperationInput<"users.messages.CreateAttachments">;
  "users.messages.GetAttachments": OutlookGraphOperationInput<"users.messages.GetAttachments">;
  "users.messages.DeleteAttachments": OutlookGraphOperationInput<"users.messages.DeleteAttachments">;
  "users.messages.attachments.GetCount-a586": OutlookGraphOperationInput<"users.messages.attachments.GetCount-a586">;
  "users.user.messages.message.attachments.createUploadSession": OutlookGraphOperationInput<"users.user.messages.message.attachments.createUploadSession">;
  "users.messages.ListExtensions": OutlookGraphOperationInput<"users.messages.ListExtensions">;
  "users.messages.CreateExtensions": OutlookGraphOperationInput<"users.messages.CreateExtensions">;
  "users.messages.GetExtensions": OutlookGraphOperationInput<"users.messages.GetExtensions">;
  "users.messages.UpdateExtensions": OutlookGraphOperationInput<"users.messages.UpdateExtensions">;
  "users.messages.DeleteExtensions": OutlookGraphOperationInput<"users.messages.DeleteExtensions">;
  "users.messages.extensions.GetCount-5628": OutlookGraphOperationInput<"users.messages.extensions.GetCount-5628">;
  "users.user.messages.message.copy": OutlookGraphOperationInput<"users.user.messages.message.copy">;
  "users.user.messages.message.createForward": OutlookGraphOperationInput<"users.user.messages.message.createForward">;
  "users.user.messages.message.createReply": OutlookGraphOperationInput<"users.user.messages.message.createReply">;
  "users.user.messages.message.createReplyAll": OutlookGraphOperationInput<"users.user.messages.message.createReplyAll">;
  "users.user.messages.message.forward": OutlookGraphOperationInput<"users.user.messages.message.forward">;
  "users.user.messages.message.move": OutlookGraphOperationInput<"users.user.messages.message.move">;
  "users.user.messages.message.permanentDelete": OutlookGraphOperationInput<"users.user.messages.message.permanentDelete">;
  "users.user.messages.message.reply": OutlookGraphOperationInput<"users.user.messages.message.reply">;
  "users.user.messages.message.replyAll": OutlookGraphOperationInput<"users.user.messages.message.replyAll">;
  "users.user.messages.message.send": OutlookGraphOperationInput<"users.user.messages.message.send">;
  "users.messages.GetCount-0f52": OutlookGraphOperationInput<"users.messages.GetCount-0f52">;
  "users.user.messages.delta": OutlookGraphOperationInput<"users.user.messages.delta">;
}

export interface OutlookGraphUsersMessageGeneratedClient {
  UsersListMessages(...args: OutlookGraphOperationArgs<"users.ListMessages">): Promise<OutlookGraphOperationResponseMap["users.ListMessages"]>;
  UsersCreateMessages(...args: OutlookGraphOperationArgs<"users.CreateMessages">): Promise<OutlookGraphOperationResponseMap["users.CreateMessages"]>;
  UsersGetMessages(...args: OutlookGraphOperationArgs<"users.GetMessages">): Promise<OutlookGraphOperationResponseMap["users.GetMessages"]>;
  UsersUpdateMessages(...args: OutlookGraphOperationArgs<"users.UpdateMessages">): Promise<OutlookGraphOperationResponseMap["users.UpdateMessages"]>;
  UsersDeleteMessages(...args: OutlookGraphOperationArgs<"users.DeleteMessages">): Promise<OutlookGraphOperationResponseMap["users.DeleteMessages"]>;
  UsersGetMessagesContent(...args: OutlookGraphOperationArgs<"users.GetMessagesContent">): Promise<OutlookGraphOperationResponseMap["users.GetMessagesContent"]>;
  UsersUpdateMessagesContent(...args: OutlookGraphOperationArgs<"users.UpdateMessagesContent">): Promise<OutlookGraphOperationResponseMap["users.UpdateMessagesContent"]>;
  UsersDeleteMessagesContent(...args: OutlookGraphOperationArgs<"users.DeleteMessagesContent">): Promise<OutlookGraphOperationResponseMap["users.DeleteMessagesContent"]>;
  UsersMessagesListAttachments(...args: OutlookGraphOperationArgs<"users.messages.ListAttachments">): Promise<OutlookGraphOperationResponseMap["users.messages.ListAttachments"]>;
  UsersMessagesCreateAttachments(...args: OutlookGraphOperationArgs<"users.messages.CreateAttachments">): Promise<OutlookGraphOperationResponseMap["users.messages.CreateAttachments"]>;
  UsersMessagesGetAttachments(...args: OutlookGraphOperationArgs<"users.messages.GetAttachments">): Promise<OutlookGraphOperationResponseMap["users.messages.GetAttachments"]>;
  UsersMessagesDeleteAttachments(...args: OutlookGraphOperationArgs<"users.messages.DeleteAttachments">): Promise<OutlookGraphOperationResponseMap["users.messages.DeleteAttachments"]>;
  UsersMessagesAttachmentsGetCountA586(...args: OutlookGraphOperationArgs<"users.messages.attachments.GetCount-a586">): Promise<OutlookGraphOperationResponseMap["users.messages.attachments.GetCount-a586"]>;
  UsersUserMessagesMessageAttachmentsCreateUploadSession(...args: OutlookGraphOperationArgs<"users.user.messages.message.attachments.createUploadSession">): Promise<OutlookGraphOperationResponseMap["users.user.messages.message.attachments.createUploadSession"]>;
  UsersMessagesListExtensions(...args: OutlookGraphOperationArgs<"users.messages.ListExtensions">): Promise<OutlookGraphOperationResponseMap["users.messages.ListExtensions"]>;
  UsersMessagesCreateExtensions(...args: OutlookGraphOperationArgs<"users.messages.CreateExtensions">): Promise<OutlookGraphOperationResponseMap["users.messages.CreateExtensions"]>;
  UsersMessagesGetExtensions(...args: OutlookGraphOperationArgs<"users.messages.GetExtensions">): Promise<OutlookGraphOperationResponseMap["users.messages.GetExtensions"]>;
  UsersMessagesUpdateExtensions(...args: OutlookGraphOperationArgs<"users.messages.UpdateExtensions">): Promise<OutlookGraphOperationResponseMap["users.messages.UpdateExtensions"]>;
  UsersMessagesDeleteExtensions(...args: OutlookGraphOperationArgs<"users.messages.DeleteExtensions">): Promise<OutlookGraphOperationResponseMap["users.messages.DeleteExtensions"]>;
  UsersMessagesExtensionsGetCount5628(...args: OutlookGraphOperationArgs<"users.messages.extensions.GetCount-5628">): Promise<OutlookGraphOperationResponseMap["users.messages.extensions.GetCount-5628"]>;
  UsersUserMessagesMessageCopy(...args: OutlookGraphOperationArgs<"users.user.messages.message.copy">): Promise<OutlookGraphOperationResponseMap["users.user.messages.message.copy"]>;
  UsersUserMessagesMessageCreateForward(...args: OutlookGraphOperationArgs<"users.user.messages.message.createForward">): Promise<OutlookGraphOperationResponseMap["users.user.messages.message.createForward"]>;
  UsersUserMessagesMessageCreateReply(...args: OutlookGraphOperationArgs<"users.user.messages.message.createReply">): Promise<OutlookGraphOperationResponseMap["users.user.messages.message.createReply"]>;
  UsersUserMessagesMessageCreateReplyAll(...args: OutlookGraphOperationArgs<"users.user.messages.message.createReplyAll">): Promise<OutlookGraphOperationResponseMap["users.user.messages.message.createReplyAll"]>;
  UsersUserMessagesMessageForward(...args: OutlookGraphOperationArgs<"users.user.messages.message.forward">): Promise<OutlookGraphOperationResponseMap["users.user.messages.message.forward"]>;
  UsersUserMessagesMessageMove(...args: OutlookGraphOperationArgs<"users.user.messages.message.move">): Promise<OutlookGraphOperationResponseMap["users.user.messages.message.move"]>;
  UsersUserMessagesMessagePermanentDelete(...args: OutlookGraphOperationArgs<"users.user.messages.message.permanentDelete">): Promise<OutlookGraphOperationResponseMap["users.user.messages.message.permanentDelete"]>;
  UsersUserMessagesMessageReply(...args: OutlookGraphOperationArgs<"users.user.messages.message.reply">): Promise<OutlookGraphOperationResponseMap["users.user.messages.message.reply"]>;
  UsersUserMessagesMessageReplyAll(...args: OutlookGraphOperationArgs<"users.user.messages.message.replyAll">): Promise<OutlookGraphOperationResponseMap["users.user.messages.message.replyAll"]>;
  UsersUserMessagesMessageSend(...args: OutlookGraphOperationArgs<"users.user.messages.message.send">): Promise<OutlookGraphOperationResponseMap["users.user.messages.message.send"]>;
  UsersMessagesGetCount0f52(...args: OutlookGraphOperationArgs<"users.messages.GetCount-0f52">): Promise<OutlookGraphOperationResponseMap["users.messages.GetCount-0f52"]>;
  UsersUserMessagesDelta(...args: OutlookGraphOperationArgs<"users.user.messages.delta">): Promise<OutlookGraphOperationResponseMap["users.user.messages.delta"]>;
}

export const OutlookGraphUsersMessageGeneratedFunctionNames = [
  "UsersListMessages",
  "UsersCreateMessages",
  "UsersGetMessages",
  "UsersUpdateMessages",
  "UsersDeleteMessages",
  "UsersGetMessagesContent",
  "UsersUpdateMessagesContent",
  "UsersDeleteMessagesContent",
  "UsersMessagesListAttachments",
  "UsersMessagesCreateAttachments",
  "UsersMessagesGetAttachments",
  "UsersMessagesDeleteAttachments",
  "UsersMessagesAttachmentsGetCountA586",
  "UsersUserMessagesMessageAttachmentsCreateUploadSession",
  "UsersMessagesListExtensions",
  "UsersMessagesCreateExtensions",
  "UsersMessagesGetExtensions",
  "UsersMessagesUpdateExtensions",
  "UsersMessagesDeleteExtensions",
  "UsersMessagesExtensionsGetCount5628",
  "UsersUserMessagesMessageCopy",
  "UsersUserMessagesMessageCreateForward",
  "UsersUserMessagesMessageCreateReply",
  "UsersUserMessagesMessageCreateReplyAll",
  "UsersUserMessagesMessageForward",
  "UsersUserMessagesMessageMove",
  "UsersUserMessagesMessagePermanentDelete",
  "UsersUserMessagesMessageReply",
  "UsersUserMessagesMessageReplyAll",
  "UsersUserMessagesMessageSend",
  "UsersMessagesGetCount0f52",
  "UsersUserMessagesDelta"
] as const satisfies readonly (keyof OutlookGraphUsersMessageGeneratedClient)[];

export function createOutlookGraphUsersMessageGeneratedClient(
  callOperation: OutlookGraphGeneratedOperationCaller,
): OutlookGraphUsersMessageGeneratedClient {
  return {
    UsersListMessages: (...args) => callOperation("users.ListMessages", ...(args as OutlookGraphOperationArgs<"users.ListMessages">)),
    UsersCreateMessages: (...args) => callOperation("users.CreateMessages", ...(args as OutlookGraphOperationArgs<"users.CreateMessages">)),
    UsersGetMessages: (...args) => callOperation("users.GetMessages", ...(args as OutlookGraphOperationArgs<"users.GetMessages">)),
    UsersUpdateMessages: (...args) => callOperation("users.UpdateMessages", ...(args as OutlookGraphOperationArgs<"users.UpdateMessages">)),
    UsersDeleteMessages: (...args) => callOperation("users.DeleteMessages", ...(args as OutlookGraphOperationArgs<"users.DeleteMessages">)),
    UsersGetMessagesContent: (...args) => callOperation("users.GetMessagesContent", ...(args as OutlookGraphOperationArgs<"users.GetMessagesContent">)),
    UsersUpdateMessagesContent: (...args) => callOperation("users.UpdateMessagesContent", ...(args as OutlookGraphOperationArgs<"users.UpdateMessagesContent">)),
    UsersDeleteMessagesContent: (...args) => callOperation("users.DeleteMessagesContent", ...(args as OutlookGraphOperationArgs<"users.DeleteMessagesContent">)),
    UsersMessagesListAttachments: (...args) => callOperation("users.messages.ListAttachments", ...(args as OutlookGraphOperationArgs<"users.messages.ListAttachments">)),
    UsersMessagesCreateAttachments: (...args) => callOperation("users.messages.CreateAttachments", ...(args as OutlookGraphOperationArgs<"users.messages.CreateAttachments">)),
    UsersMessagesGetAttachments: (...args) => callOperation("users.messages.GetAttachments", ...(args as OutlookGraphOperationArgs<"users.messages.GetAttachments">)),
    UsersMessagesDeleteAttachments: (...args) => callOperation("users.messages.DeleteAttachments", ...(args as OutlookGraphOperationArgs<"users.messages.DeleteAttachments">)),
    UsersMessagesAttachmentsGetCountA586: (...args) => callOperation("users.messages.attachments.GetCount-a586", ...(args as OutlookGraphOperationArgs<"users.messages.attachments.GetCount-a586">)),
    UsersUserMessagesMessageAttachmentsCreateUploadSession: (...args) => callOperation("users.user.messages.message.attachments.createUploadSession", ...(args as OutlookGraphOperationArgs<"users.user.messages.message.attachments.createUploadSession">)),
    UsersMessagesListExtensions: (...args) => callOperation("users.messages.ListExtensions", ...(args as OutlookGraphOperationArgs<"users.messages.ListExtensions">)),
    UsersMessagesCreateExtensions: (...args) => callOperation("users.messages.CreateExtensions", ...(args as OutlookGraphOperationArgs<"users.messages.CreateExtensions">)),
    UsersMessagesGetExtensions: (...args) => callOperation("users.messages.GetExtensions", ...(args as OutlookGraphOperationArgs<"users.messages.GetExtensions">)),
    UsersMessagesUpdateExtensions: (...args) => callOperation("users.messages.UpdateExtensions", ...(args as OutlookGraphOperationArgs<"users.messages.UpdateExtensions">)),
    UsersMessagesDeleteExtensions: (...args) => callOperation("users.messages.DeleteExtensions", ...(args as OutlookGraphOperationArgs<"users.messages.DeleteExtensions">)),
    UsersMessagesExtensionsGetCount5628: (...args) => callOperation("users.messages.extensions.GetCount-5628", ...(args as OutlookGraphOperationArgs<"users.messages.extensions.GetCount-5628">)),
    UsersUserMessagesMessageCopy: (...args) => callOperation("users.user.messages.message.copy", ...(args as OutlookGraphOperationArgs<"users.user.messages.message.copy">)),
    UsersUserMessagesMessageCreateForward: (...args) => callOperation("users.user.messages.message.createForward", ...(args as OutlookGraphOperationArgs<"users.user.messages.message.createForward">)),
    UsersUserMessagesMessageCreateReply: (...args) => callOperation("users.user.messages.message.createReply", ...(args as OutlookGraphOperationArgs<"users.user.messages.message.createReply">)),
    UsersUserMessagesMessageCreateReplyAll: (...args) => callOperation("users.user.messages.message.createReplyAll", ...(args as OutlookGraphOperationArgs<"users.user.messages.message.createReplyAll">)),
    UsersUserMessagesMessageForward: (...args) => callOperation("users.user.messages.message.forward", ...(args as OutlookGraphOperationArgs<"users.user.messages.message.forward">)),
    UsersUserMessagesMessageMove: (...args) => callOperation("users.user.messages.message.move", ...(args as OutlookGraphOperationArgs<"users.user.messages.message.move">)),
    UsersUserMessagesMessagePermanentDelete: (...args) => callOperation("users.user.messages.message.permanentDelete", ...(args as OutlookGraphOperationArgs<"users.user.messages.message.permanentDelete">)),
    UsersUserMessagesMessageReply: (...args) => callOperation("users.user.messages.message.reply", ...(args as OutlookGraphOperationArgs<"users.user.messages.message.reply">)),
    UsersUserMessagesMessageReplyAll: (...args) => callOperation("users.user.messages.message.replyAll", ...(args as OutlookGraphOperationArgs<"users.user.messages.message.replyAll">)),
    UsersUserMessagesMessageSend: (...args) => callOperation("users.user.messages.message.send", ...(args as OutlookGraphOperationArgs<"users.user.messages.message.send">)),
    UsersMessagesGetCount0f52: (...args) => callOperation("users.messages.GetCount-0f52", ...(args as OutlookGraphOperationArgs<"users.messages.GetCount-0f52">)),
    UsersUserMessagesDelta: (...args) => callOperation("users.user.messages.delta", ...(args as OutlookGraphOperationArgs<"users.user.messages.delta">)),
  };
}
