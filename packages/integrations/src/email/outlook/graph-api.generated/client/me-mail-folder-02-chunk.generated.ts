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
export const OutlookGraphMeMailFolder02OperationKeys = [
  "me.mailFolders.mailFolder.messages.message.createForward",
  "me.mailFolders.mailFolder.messages.message.createReply",
  "me.mailFolders.mailFolder.messages.message.createReplyAll",
  "me.mailFolders.mailFolder.messages.message.forward",
  "me.mailFolders.mailFolder.messages.message.move",
  "me.mailFolders.mailFolder.messages.message.permanentDelete",
  "me.mailFolders.mailFolder.messages.message.reply",
  "me.mailFolders.mailFolder.messages.message.replyAll",
  "me.mailFolders.mailFolder.messages.message.send",
  "me.mailFolders.messages.GetCount-363a",
  "me.mailFolders.mailFolder.messages.delta",
  "me.mailFolders.mailFolder.copy",
  "me.mailFolders.mailFolder.move",
  "me.mailFolders.mailFolder.permanentDelete",
  "me.mailFolders.GetCount-c00e",
  "me.mailFolders.delta"
] as const;
export type OutlookGraphMeMailFolder02OperationKey = typeof OutlookGraphMeMailFolder02OperationKeys[number];
// End hardened literal operation keys.

export interface OutlookGraphMeMailFolder02OperationPathParamMap {
  "me.mailFolders.mailFolder.messages.message.createForward": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.messages.message.createReply": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.messages.message.createReplyAll": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.messages.message.forward": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.messages.message.move": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.messages.message.permanentDelete": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.messages.message.reply": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.messages.message.replyAll": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.messages.message.send": { "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "me.mailFolders.messages.GetCount-363a": { "mailFolder-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.messages.delta": { "mailFolder-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.copy": { "mailFolder-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.move": { "mailFolder-id": OutlookGraphPathParamValue };
  "me.mailFolders.mailFolder.permanentDelete": { "mailFolder-id": OutlookGraphPathParamValue };
  "me.mailFolders.GetCount-c00e": {};
  "me.mailFolders.delta": {};
}

export interface OutlookGraphMeMailFolder02OperationRequestMap {
  "me.mailFolders.mailFolder.messages.message.createForward": OutlookGraphOperationInput<"me.mailFolders.mailFolder.messages.message.createForward">;
  "me.mailFolders.mailFolder.messages.message.createReply": OutlookGraphOperationInput<"me.mailFolders.mailFolder.messages.message.createReply">;
  "me.mailFolders.mailFolder.messages.message.createReplyAll": OutlookGraphOperationInput<"me.mailFolders.mailFolder.messages.message.createReplyAll">;
  "me.mailFolders.mailFolder.messages.message.forward": OutlookGraphOperationInput<"me.mailFolders.mailFolder.messages.message.forward">;
  "me.mailFolders.mailFolder.messages.message.move": OutlookGraphOperationInput<"me.mailFolders.mailFolder.messages.message.move">;
  "me.mailFolders.mailFolder.messages.message.permanentDelete": OutlookGraphOperationInput<"me.mailFolders.mailFolder.messages.message.permanentDelete">;
  "me.mailFolders.mailFolder.messages.message.reply": OutlookGraphOperationInput<"me.mailFolders.mailFolder.messages.message.reply">;
  "me.mailFolders.mailFolder.messages.message.replyAll": OutlookGraphOperationInput<"me.mailFolders.mailFolder.messages.message.replyAll">;
  "me.mailFolders.mailFolder.messages.message.send": OutlookGraphOperationInput<"me.mailFolders.mailFolder.messages.message.send">;
  "me.mailFolders.messages.GetCount-363a": OutlookGraphOperationInput<"me.mailFolders.messages.GetCount-363a">;
  "me.mailFolders.mailFolder.messages.delta": OutlookGraphOperationInput<"me.mailFolders.mailFolder.messages.delta">;
  "me.mailFolders.mailFolder.copy": OutlookGraphOperationInput<"me.mailFolders.mailFolder.copy">;
  "me.mailFolders.mailFolder.move": OutlookGraphOperationInput<"me.mailFolders.mailFolder.move">;
  "me.mailFolders.mailFolder.permanentDelete": OutlookGraphOperationInput<"me.mailFolders.mailFolder.permanentDelete">;
  "me.mailFolders.GetCount-c00e": OutlookGraphOperationInput<"me.mailFolders.GetCount-c00e">;
  "me.mailFolders.delta": OutlookGraphOperationInput<"me.mailFolders.delta">;
}

export interface OutlookGraphMeMailFolder02GeneratedClient {
  MeMailFoldersMailFolderMessagesMessageCreateForward(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.createForward">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.messages.message.createForward"]>;
  MeMailFoldersMailFolderMessagesMessageCreateReply(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.createReply">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.messages.message.createReply"]>;
  MeMailFoldersMailFolderMessagesMessageCreateReplyAll(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.createReplyAll">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.messages.message.createReplyAll"]>;
  MeMailFoldersMailFolderMessagesMessageForward(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.forward">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.messages.message.forward"]>;
  MeMailFoldersMailFolderMessagesMessageMove(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.move">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.messages.message.move"]>;
  MeMailFoldersMailFolderMessagesMessagePermanentDelete(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.permanentDelete">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.messages.message.permanentDelete"]>;
  MeMailFoldersMailFolderMessagesMessageReply(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.reply">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.messages.message.reply"]>;
  MeMailFoldersMailFolderMessagesMessageReplyAll(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.replyAll">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.messages.message.replyAll"]>;
  MeMailFoldersMailFolderMessagesMessageSend(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.send">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.messages.message.send"]>;
  MeMailFoldersMessagesGetCount363a(...args: OutlookGraphOperationArgs<"me.mailFolders.messages.GetCount-363a">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.messages.GetCount-363a"]>;
  MeMailFoldersMailFolderMessagesDelta(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.delta">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.messages.delta"]>;
  MeMailFoldersMailFolderCopy(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.copy">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.copy"]>;
  MeMailFoldersMailFolderMove(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.move">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.move"]>;
  MeMailFoldersMailFolderPermanentDelete(...args: OutlookGraphOperationArgs<"me.mailFolders.mailFolder.permanentDelete">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.mailFolder.permanentDelete"]>;
  MeMailFoldersGetCountC00e(...args: OutlookGraphOperationArgs<"me.mailFolders.GetCount-c00e">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.GetCount-c00e"]>;
  MeMailFoldersDelta(...args: OutlookGraphOperationArgs<"me.mailFolders.delta">): Promise<OutlookGraphOperationResponseMap["me.mailFolders.delta"]>;
}

export const OutlookGraphMeMailFolder02GeneratedFunctionNames = [
  "MeMailFoldersMailFolderMessagesMessageCreateForward",
  "MeMailFoldersMailFolderMessagesMessageCreateReply",
  "MeMailFoldersMailFolderMessagesMessageCreateReplyAll",
  "MeMailFoldersMailFolderMessagesMessageForward",
  "MeMailFoldersMailFolderMessagesMessageMove",
  "MeMailFoldersMailFolderMessagesMessagePermanentDelete",
  "MeMailFoldersMailFolderMessagesMessageReply",
  "MeMailFoldersMailFolderMessagesMessageReplyAll",
  "MeMailFoldersMailFolderMessagesMessageSend",
  "MeMailFoldersMessagesGetCount363a",
  "MeMailFoldersMailFolderMessagesDelta",
  "MeMailFoldersMailFolderCopy",
  "MeMailFoldersMailFolderMove",
  "MeMailFoldersMailFolderPermanentDelete",
  "MeMailFoldersGetCountC00e",
  "MeMailFoldersDelta"
] as const satisfies readonly (keyof OutlookGraphMeMailFolder02GeneratedClient)[];

export function createOutlookGraphMeMailFolder02GeneratedClient(
  callOperation: OutlookGraphGeneratedOperationCaller,
): OutlookGraphMeMailFolder02GeneratedClient {
  return {
    MeMailFoldersMailFolderMessagesMessageCreateForward: (...args) => callOperation("me.mailFolders.mailFolder.messages.message.createForward", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.createForward">)),
    MeMailFoldersMailFolderMessagesMessageCreateReply: (...args) => callOperation("me.mailFolders.mailFolder.messages.message.createReply", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.createReply">)),
    MeMailFoldersMailFolderMessagesMessageCreateReplyAll: (...args) => callOperation("me.mailFolders.mailFolder.messages.message.createReplyAll", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.createReplyAll">)),
    MeMailFoldersMailFolderMessagesMessageForward: (...args) => callOperation("me.mailFolders.mailFolder.messages.message.forward", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.forward">)),
    MeMailFoldersMailFolderMessagesMessageMove: (...args) => callOperation("me.mailFolders.mailFolder.messages.message.move", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.move">)),
    MeMailFoldersMailFolderMessagesMessagePermanentDelete: (...args) => callOperation("me.mailFolders.mailFolder.messages.message.permanentDelete", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.permanentDelete">)),
    MeMailFoldersMailFolderMessagesMessageReply: (...args) => callOperation("me.mailFolders.mailFolder.messages.message.reply", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.reply">)),
    MeMailFoldersMailFolderMessagesMessageReplyAll: (...args) => callOperation("me.mailFolders.mailFolder.messages.message.replyAll", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.replyAll">)),
    MeMailFoldersMailFolderMessagesMessageSend: (...args) => callOperation("me.mailFolders.mailFolder.messages.message.send", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.message.send">)),
    MeMailFoldersMessagesGetCount363a: (...args) => callOperation("me.mailFolders.messages.GetCount-363a", ...(args as OutlookGraphOperationArgs<"me.mailFolders.messages.GetCount-363a">)),
    MeMailFoldersMailFolderMessagesDelta: (...args) => callOperation("me.mailFolders.mailFolder.messages.delta", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.messages.delta">)),
    MeMailFoldersMailFolderCopy: (...args) => callOperation("me.mailFolders.mailFolder.copy", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.copy">)),
    MeMailFoldersMailFolderMove: (...args) => callOperation("me.mailFolders.mailFolder.move", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.move">)),
    MeMailFoldersMailFolderPermanentDelete: (...args) => callOperation("me.mailFolders.mailFolder.permanentDelete", ...(args as OutlookGraphOperationArgs<"me.mailFolders.mailFolder.permanentDelete">)),
    MeMailFoldersGetCountC00e: (...args) => callOperation("me.mailFolders.GetCount-c00e", ...(args as OutlookGraphOperationArgs<"me.mailFolders.GetCount-c00e">)),
    MeMailFoldersDelta: (...args) => callOperation("me.mailFolders.delta", ...(args as OutlookGraphOperationArgs<"me.mailFolders.delta">)),
  };
}
