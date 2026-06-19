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
export const OutlookGraphMeMessageOperationKeys = [
  "me.ListMessages",
  "me.CreateMessages",
  "me.GetMessages",
  "me.UpdateMessages",
  "me.DeleteMessages",
  "me.GetMessagesContent",
  "me.UpdateMessagesContent",
  "me.DeleteMessagesContent",
  "me.messages.ListAttachments",
  "me.messages.CreateAttachments",
  "me.messages.GetAttachments",
  "me.messages.DeleteAttachments",
  "me.messages.attachments.GetCount-2181",
  "me.messages.message.attachments.createUploadSession",
  "me.messages.ListExtensions",
  "me.messages.CreateExtensions",
  "me.messages.GetExtensions",
  "me.messages.UpdateExtensions",
  "me.messages.DeleteExtensions",
  "me.messages.extensions.GetCount-d960",
  "me.messages.message.copy",
  "me.messages.message.createForward",
  "me.messages.message.createReply",
  "me.messages.message.createReplyAll",
  "me.messages.message.forward",
  "me.messages.message.move",
  "me.messages.message.permanentDelete",
  "me.messages.message.reply",
  "me.messages.message.replyAll",
  "me.messages.message.send",
  "me.messages.GetCount-a82e",
  "me.messages.delta"
] as const;
export type OutlookGraphMeMessageOperationKey = typeof OutlookGraphMeMessageOperationKeys[number];
// End hardened literal operation keys.

export interface OutlookGraphMeMessageOperationPathParamMap {
  "me.ListMessages": {};
  "me.CreateMessages": {};
  "me.GetMessages": { "message-id": OutlookGraphPathParamValue };
  "me.UpdateMessages": { "message-id": OutlookGraphPathParamValue };
  "me.DeleteMessages": { "message-id": OutlookGraphPathParamValue };
  "me.GetMessagesContent": { "message-id": OutlookGraphPathParamValue };
  "me.UpdateMessagesContent": { "message-id": OutlookGraphPathParamValue };
  "me.DeleteMessagesContent": { "message-id": OutlookGraphPathParamValue };
  "me.messages.ListAttachments": { "message-id": OutlookGraphPathParamValue };
  "me.messages.CreateAttachments": { "message-id": OutlookGraphPathParamValue };
  "me.messages.GetAttachments": { "message-id": OutlookGraphPathParamValue; "attachment-id": OutlookGraphPathParamValue };
  "me.messages.DeleteAttachments": { "message-id": OutlookGraphPathParamValue; "attachment-id": OutlookGraphPathParamValue };
  "me.messages.attachments.GetCount-2181": { "message-id": OutlookGraphPathParamValue };
  "me.messages.message.attachments.createUploadSession": { "message-id": OutlookGraphPathParamValue };
  "me.messages.ListExtensions": { "message-id": OutlookGraphPathParamValue };
  "me.messages.CreateExtensions": { "message-id": OutlookGraphPathParamValue };
  "me.messages.GetExtensions": { "message-id": OutlookGraphPathParamValue; "extension-id": OutlookGraphPathParamValue };
  "me.messages.UpdateExtensions": { "message-id": OutlookGraphPathParamValue; "extension-id": OutlookGraphPathParamValue };
  "me.messages.DeleteExtensions": { "message-id": OutlookGraphPathParamValue; "extension-id": OutlookGraphPathParamValue };
  "me.messages.extensions.GetCount-d960": { "message-id": OutlookGraphPathParamValue };
  "me.messages.message.copy": { "message-id": OutlookGraphPathParamValue };
  "me.messages.message.createForward": { "message-id": OutlookGraphPathParamValue };
  "me.messages.message.createReply": { "message-id": OutlookGraphPathParamValue };
  "me.messages.message.createReplyAll": { "message-id": OutlookGraphPathParamValue };
  "me.messages.message.forward": { "message-id": OutlookGraphPathParamValue };
  "me.messages.message.move": { "message-id": OutlookGraphPathParamValue };
  "me.messages.message.permanentDelete": { "message-id": OutlookGraphPathParamValue };
  "me.messages.message.reply": { "message-id": OutlookGraphPathParamValue };
  "me.messages.message.replyAll": { "message-id": OutlookGraphPathParamValue };
  "me.messages.message.send": { "message-id": OutlookGraphPathParamValue };
  "me.messages.GetCount-a82e": {};
  "me.messages.delta": {};
}

export interface OutlookGraphMeMessageOperationRequestMap {
  "me.ListMessages": OutlookGraphOperationInput<"me.ListMessages">;
  "me.CreateMessages": OutlookGraphOperationInput<"me.CreateMessages">;
  "me.GetMessages": OutlookGraphOperationInput<"me.GetMessages">;
  "me.UpdateMessages": OutlookGraphOperationInput<"me.UpdateMessages">;
  "me.DeleteMessages": OutlookGraphOperationInput<"me.DeleteMessages">;
  "me.GetMessagesContent": OutlookGraphOperationInput<"me.GetMessagesContent">;
  "me.UpdateMessagesContent": OutlookGraphOperationInput<"me.UpdateMessagesContent">;
  "me.DeleteMessagesContent": OutlookGraphOperationInput<"me.DeleteMessagesContent">;
  "me.messages.ListAttachments": OutlookGraphOperationInput<"me.messages.ListAttachments">;
  "me.messages.CreateAttachments": OutlookGraphOperationInput<"me.messages.CreateAttachments">;
  "me.messages.GetAttachments": OutlookGraphOperationInput<"me.messages.GetAttachments">;
  "me.messages.DeleteAttachments": OutlookGraphOperationInput<"me.messages.DeleteAttachments">;
  "me.messages.attachments.GetCount-2181": OutlookGraphOperationInput<"me.messages.attachments.GetCount-2181">;
  "me.messages.message.attachments.createUploadSession": OutlookGraphOperationInput<"me.messages.message.attachments.createUploadSession">;
  "me.messages.ListExtensions": OutlookGraphOperationInput<"me.messages.ListExtensions">;
  "me.messages.CreateExtensions": OutlookGraphOperationInput<"me.messages.CreateExtensions">;
  "me.messages.GetExtensions": OutlookGraphOperationInput<"me.messages.GetExtensions">;
  "me.messages.UpdateExtensions": OutlookGraphOperationInput<"me.messages.UpdateExtensions">;
  "me.messages.DeleteExtensions": OutlookGraphOperationInput<"me.messages.DeleteExtensions">;
  "me.messages.extensions.GetCount-d960": OutlookGraphOperationInput<"me.messages.extensions.GetCount-d960">;
  "me.messages.message.copy": OutlookGraphOperationInput<"me.messages.message.copy">;
  "me.messages.message.createForward": OutlookGraphOperationInput<"me.messages.message.createForward">;
  "me.messages.message.createReply": OutlookGraphOperationInput<"me.messages.message.createReply">;
  "me.messages.message.createReplyAll": OutlookGraphOperationInput<"me.messages.message.createReplyAll">;
  "me.messages.message.forward": OutlookGraphOperationInput<"me.messages.message.forward">;
  "me.messages.message.move": OutlookGraphOperationInput<"me.messages.message.move">;
  "me.messages.message.permanentDelete": OutlookGraphOperationInput<"me.messages.message.permanentDelete">;
  "me.messages.message.reply": OutlookGraphOperationInput<"me.messages.message.reply">;
  "me.messages.message.replyAll": OutlookGraphOperationInput<"me.messages.message.replyAll">;
  "me.messages.message.send": OutlookGraphOperationInput<"me.messages.message.send">;
  "me.messages.GetCount-a82e": OutlookGraphOperationInput<"me.messages.GetCount-a82e">;
  "me.messages.delta": OutlookGraphOperationInput<"me.messages.delta">;
}

export interface OutlookGraphMeMessageGeneratedClient {
  MeListMessages(...args: OutlookGraphOperationArgs<"me.ListMessages">): Promise<OutlookGraphOperationResponseMap["me.ListMessages"]>;
  MeCreateMessages(...args: OutlookGraphOperationArgs<"me.CreateMessages">): Promise<OutlookGraphOperationResponseMap["me.CreateMessages"]>;
  MeGetMessages(...args: OutlookGraphOperationArgs<"me.GetMessages">): Promise<OutlookGraphOperationResponseMap["me.GetMessages"]>;
  MeUpdateMessages(...args: OutlookGraphOperationArgs<"me.UpdateMessages">): Promise<OutlookGraphOperationResponseMap["me.UpdateMessages"]>;
  MeDeleteMessages(...args: OutlookGraphOperationArgs<"me.DeleteMessages">): Promise<OutlookGraphOperationResponseMap["me.DeleteMessages"]>;
  MeGetMessagesContent(...args: OutlookGraphOperationArgs<"me.GetMessagesContent">): Promise<OutlookGraphOperationResponseMap["me.GetMessagesContent"]>;
  MeUpdateMessagesContent(...args: OutlookGraphOperationArgs<"me.UpdateMessagesContent">): Promise<OutlookGraphOperationResponseMap["me.UpdateMessagesContent"]>;
  MeDeleteMessagesContent(...args: OutlookGraphOperationArgs<"me.DeleteMessagesContent">): Promise<OutlookGraphOperationResponseMap["me.DeleteMessagesContent"]>;
  MeMessagesListAttachments(...args: OutlookGraphOperationArgs<"me.messages.ListAttachments">): Promise<OutlookGraphOperationResponseMap["me.messages.ListAttachments"]>;
  MeMessagesCreateAttachments(...args: OutlookGraphOperationArgs<"me.messages.CreateAttachments">): Promise<OutlookGraphOperationResponseMap["me.messages.CreateAttachments"]>;
  MeMessagesGetAttachments(...args: OutlookGraphOperationArgs<"me.messages.GetAttachments">): Promise<OutlookGraphOperationResponseMap["me.messages.GetAttachments"]>;
  MeMessagesDeleteAttachments(...args: OutlookGraphOperationArgs<"me.messages.DeleteAttachments">): Promise<OutlookGraphOperationResponseMap["me.messages.DeleteAttachments"]>;
  MeMessagesAttachmentsGetCount2181(...args: OutlookGraphOperationArgs<"me.messages.attachments.GetCount-2181">): Promise<OutlookGraphOperationResponseMap["me.messages.attachments.GetCount-2181"]>;
  MeMessagesMessageAttachmentsCreateUploadSession(...args: OutlookGraphOperationArgs<"me.messages.message.attachments.createUploadSession">): Promise<OutlookGraphOperationResponseMap["me.messages.message.attachments.createUploadSession"]>;
  MeMessagesListExtensions(...args: OutlookGraphOperationArgs<"me.messages.ListExtensions">): Promise<OutlookGraphOperationResponseMap["me.messages.ListExtensions"]>;
  MeMessagesCreateExtensions(...args: OutlookGraphOperationArgs<"me.messages.CreateExtensions">): Promise<OutlookGraphOperationResponseMap["me.messages.CreateExtensions"]>;
  MeMessagesGetExtensions(...args: OutlookGraphOperationArgs<"me.messages.GetExtensions">): Promise<OutlookGraphOperationResponseMap["me.messages.GetExtensions"]>;
  MeMessagesUpdateExtensions(...args: OutlookGraphOperationArgs<"me.messages.UpdateExtensions">): Promise<OutlookGraphOperationResponseMap["me.messages.UpdateExtensions"]>;
  MeMessagesDeleteExtensions(...args: OutlookGraphOperationArgs<"me.messages.DeleteExtensions">): Promise<OutlookGraphOperationResponseMap["me.messages.DeleteExtensions"]>;
  MeMessagesExtensionsGetCountD960(...args: OutlookGraphOperationArgs<"me.messages.extensions.GetCount-d960">): Promise<OutlookGraphOperationResponseMap["me.messages.extensions.GetCount-d960"]>;
  MeMessagesMessageCopy(...args: OutlookGraphOperationArgs<"me.messages.message.copy">): Promise<OutlookGraphOperationResponseMap["me.messages.message.copy"]>;
  MeMessagesMessageCreateForward(...args: OutlookGraphOperationArgs<"me.messages.message.createForward">): Promise<OutlookGraphOperationResponseMap["me.messages.message.createForward"]>;
  MeMessagesMessageCreateReply(...args: OutlookGraphOperationArgs<"me.messages.message.createReply">): Promise<OutlookGraphOperationResponseMap["me.messages.message.createReply"]>;
  MeMessagesMessageCreateReplyAll(...args: OutlookGraphOperationArgs<"me.messages.message.createReplyAll">): Promise<OutlookGraphOperationResponseMap["me.messages.message.createReplyAll"]>;
  MeMessagesMessageForward(...args: OutlookGraphOperationArgs<"me.messages.message.forward">): Promise<OutlookGraphOperationResponseMap["me.messages.message.forward"]>;
  MeMessagesMessageMove(...args: OutlookGraphOperationArgs<"me.messages.message.move">): Promise<OutlookGraphOperationResponseMap["me.messages.message.move"]>;
  MeMessagesMessagePermanentDelete(...args: OutlookGraphOperationArgs<"me.messages.message.permanentDelete">): Promise<OutlookGraphOperationResponseMap["me.messages.message.permanentDelete"]>;
  MeMessagesMessageReply(...args: OutlookGraphOperationArgs<"me.messages.message.reply">): Promise<OutlookGraphOperationResponseMap["me.messages.message.reply"]>;
  MeMessagesMessageReplyAll(...args: OutlookGraphOperationArgs<"me.messages.message.replyAll">): Promise<OutlookGraphOperationResponseMap["me.messages.message.replyAll"]>;
  MeMessagesMessageSend(...args: OutlookGraphOperationArgs<"me.messages.message.send">): Promise<OutlookGraphOperationResponseMap["me.messages.message.send"]>;
  MeMessagesGetCountA82e(...args: OutlookGraphOperationArgs<"me.messages.GetCount-a82e">): Promise<OutlookGraphOperationResponseMap["me.messages.GetCount-a82e"]>;
  MeMessagesDelta(...args: OutlookGraphOperationArgs<"me.messages.delta">): Promise<OutlookGraphOperationResponseMap["me.messages.delta"]>;
}

export const OutlookGraphMeMessageGeneratedFunctionNames = [
  "MeListMessages",
  "MeCreateMessages",
  "MeGetMessages",
  "MeUpdateMessages",
  "MeDeleteMessages",
  "MeGetMessagesContent",
  "MeUpdateMessagesContent",
  "MeDeleteMessagesContent",
  "MeMessagesListAttachments",
  "MeMessagesCreateAttachments",
  "MeMessagesGetAttachments",
  "MeMessagesDeleteAttachments",
  "MeMessagesAttachmentsGetCount2181",
  "MeMessagesMessageAttachmentsCreateUploadSession",
  "MeMessagesListExtensions",
  "MeMessagesCreateExtensions",
  "MeMessagesGetExtensions",
  "MeMessagesUpdateExtensions",
  "MeMessagesDeleteExtensions",
  "MeMessagesExtensionsGetCountD960",
  "MeMessagesMessageCopy",
  "MeMessagesMessageCreateForward",
  "MeMessagesMessageCreateReply",
  "MeMessagesMessageCreateReplyAll",
  "MeMessagesMessageForward",
  "MeMessagesMessageMove",
  "MeMessagesMessagePermanentDelete",
  "MeMessagesMessageReply",
  "MeMessagesMessageReplyAll",
  "MeMessagesMessageSend",
  "MeMessagesGetCountA82e",
  "MeMessagesDelta"
] as const satisfies readonly (keyof OutlookGraphMeMessageGeneratedClient)[];

export function createOutlookGraphMeMessageGeneratedClient(
  callOperation: OutlookGraphGeneratedOperationCaller,
): OutlookGraphMeMessageGeneratedClient {
  return {
    MeListMessages: (...args) => callOperation("me.ListMessages", ...(args as OutlookGraphOperationArgs<"me.ListMessages">)),
    MeCreateMessages: (...args) => callOperation("me.CreateMessages", ...(args as OutlookGraphOperationArgs<"me.CreateMessages">)),
    MeGetMessages: (...args) => callOperation("me.GetMessages", ...(args as OutlookGraphOperationArgs<"me.GetMessages">)),
    MeUpdateMessages: (...args) => callOperation("me.UpdateMessages", ...(args as OutlookGraphOperationArgs<"me.UpdateMessages">)),
    MeDeleteMessages: (...args) => callOperation("me.DeleteMessages", ...(args as OutlookGraphOperationArgs<"me.DeleteMessages">)),
    MeGetMessagesContent: (...args) => callOperation("me.GetMessagesContent", ...(args as OutlookGraphOperationArgs<"me.GetMessagesContent">)),
    MeUpdateMessagesContent: (...args) => callOperation("me.UpdateMessagesContent", ...(args as OutlookGraphOperationArgs<"me.UpdateMessagesContent">)),
    MeDeleteMessagesContent: (...args) => callOperation("me.DeleteMessagesContent", ...(args as OutlookGraphOperationArgs<"me.DeleteMessagesContent">)),
    MeMessagesListAttachments: (...args) => callOperation("me.messages.ListAttachments", ...(args as OutlookGraphOperationArgs<"me.messages.ListAttachments">)),
    MeMessagesCreateAttachments: (...args) => callOperation("me.messages.CreateAttachments", ...(args as OutlookGraphOperationArgs<"me.messages.CreateAttachments">)),
    MeMessagesGetAttachments: (...args) => callOperation("me.messages.GetAttachments", ...(args as OutlookGraphOperationArgs<"me.messages.GetAttachments">)),
    MeMessagesDeleteAttachments: (...args) => callOperation("me.messages.DeleteAttachments", ...(args as OutlookGraphOperationArgs<"me.messages.DeleteAttachments">)),
    MeMessagesAttachmentsGetCount2181: (...args) => callOperation("me.messages.attachments.GetCount-2181", ...(args as OutlookGraphOperationArgs<"me.messages.attachments.GetCount-2181">)),
    MeMessagesMessageAttachmentsCreateUploadSession: (...args) => callOperation("me.messages.message.attachments.createUploadSession", ...(args as OutlookGraphOperationArgs<"me.messages.message.attachments.createUploadSession">)),
    MeMessagesListExtensions: (...args) => callOperation("me.messages.ListExtensions", ...(args as OutlookGraphOperationArgs<"me.messages.ListExtensions">)),
    MeMessagesCreateExtensions: (...args) => callOperation("me.messages.CreateExtensions", ...(args as OutlookGraphOperationArgs<"me.messages.CreateExtensions">)),
    MeMessagesGetExtensions: (...args) => callOperation("me.messages.GetExtensions", ...(args as OutlookGraphOperationArgs<"me.messages.GetExtensions">)),
    MeMessagesUpdateExtensions: (...args) => callOperation("me.messages.UpdateExtensions", ...(args as OutlookGraphOperationArgs<"me.messages.UpdateExtensions">)),
    MeMessagesDeleteExtensions: (...args) => callOperation("me.messages.DeleteExtensions", ...(args as OutlookGraphOperationArgs<"me.messages.DeleteExtensions">)),
    MeMessagesExtensionsGetCountD960: (...args) => callOperation("me.messages.extensions.GetCount-d960", ...(args as OutlookGraphOperationArgs<"me.messages.extensions.GetCount-d960">)),
    MeMessagesMessageCopy: (...args) => callOperation("me.messages.message.copy", ...(args as OutlookGraphOperationArgs<"me.messages.message.copy">)),
    MeMessagesMessageCreateForward: (...args) => callOperation("me.messages.message.createForward", ...(args as OutlookGraphOperationArgs<"me.messages.message.createForward">)),
    MeMessagesMessageCreateReply: (...args) => callOperation("me.messages.message.createReply", ...(args as OutlookGraphOperationArgs<"me.messages.message.createReply">)),
    MeMessagesMessageCreateReplyAll: (...args) => callOperation("me.messages.message.createReplyAll", ...(args as OutlookGraphOperationArgs<"me.messages.message.createReplyAll">)),
    MeMessagesMessageForward: (...args) => callOperation("me.messages.message.forward", ...(args as OutlookGraphOperationArgs<"me.messages.message.forward">)),
    MeMessagesMessageMove: (...args) => callOperation("me.messages.message.move", ...(args as OutlookGraphOperationArgs<"me.messages.message.move">)),
    MeMessagesMessagePermanentDelete: (...args) => callOperation("me.messages.message.permanentDelete", ...(args as OutlookGraphOperationArgs<"me.messages.message.permanentDelete">)),
    MeMessagesMessageReply: (...args) => callOperation("me.messages.message.reply", ...(args as OutlookGraphOperationArgs<"me.messages.message.reply">)),
    MeMessagesMessageReplyAll: (...args) => callOperation("me.messages.message.replyAll", ...(args as OutlookGraphOperationArgs<"me.messages.message.replyAll">)),
    MeMessagesMessageSend: (...args) => callOperation("me.messages.message.send", ...(args as OutlookGraphOperationArgs<"me.messages.message.send">)),
    MeMessagesGetCountA82e: (...args) => callOperation("me.messages.GetCount-a82e", ...(args as OutlookGraphOperationArgs<"me.messages.GetCount-a82e">)),
    MeMessagesDelta: (...args) => callOperation("me.messages.delta", ...(args as OutlookGraphOperationArgs<"me.messages.delta">)),
  };
}
