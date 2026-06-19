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
export const OutlookGraphUsersMailFolder02OperationKeys = [
  "users.user.mailFolders.mailFolder.messages.message.createForward",
  "users.user.mailFolders.mailFolder.messages.message.createReply",
  "users.user.mailFolders.mailFolder.messages.message.createReplyAll",
  "users.user.mailFolders.mailFolder.messages.message.forward",
  "users.user.mailFolders.mailFolder.messages.message.move",
  "users.user.mailFolders.mailFolder.messages.message.permanentDelete",
  "users.user.mailFolders.mailFolder.messages.message.reply",
  "users.user.mailFolders.mailFolder.messages.message.replyAll",
  "users.user.mailFolders.mailFolder.messages.message.send",
  "users.mailFolders.messages.GetCount-9534",
  "users.user.mailFolders.mailFolder.messages.delta",
  "users.user.mailFolders.mailFolder.copy",
  "users.user.mailFolders.mailFolder.move",
  "users.user.mailFolders.mailFolder.permanentDelete",
  "users.mailFolders.GetCount-7dc9",
  "users.user.mailFolders.delta"
] as const;
export type OutlookGraphUsersMailFolder02OperationKey = typeof OutlookGraphUsersMailFolder02OperationKeys[number];
// End hardened literal operation keys.

export interface OutlookGraphUsersMailFolder02OperationPathParamMap {
  "users.user.mailFolders.mailFolder.messages.message.createForward": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.messages.message.createReply": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.messages.message.createReplyAll": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.messages.message.forward": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.messages.message.move": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.messages.message.permanentDelete": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.messages.message.reply": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.messages.message.replyAll": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.messages.message.send": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue; "message-id": OutlookGraphPathParamValue };
  "users.mailFolders.messages.GetCount-9534": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.messages.delta": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.copy": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.move": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.mailFolder.permanentDelete": { "user-id": OutlookGraphPathParamValue; "mailFolder-id": OutlookGraphPathParamValue };
  "users.mailFolders.GetCount-7dc9": { "user-id": OutlookGraphPathParamValue };
  "users.user.mailFolders.delta": { "user-id": OutlookGraphPathParamValue };
}

export interface OutlookGraphUsersMailFolder02OperationRequestMap {
  "users.user.mailFolders.mailFolder.messages.message.createForward": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.messages.message.createForward">;
  "users.user.mailFolders.mailFolder.messages.message.createReply": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.messages.message.createReply">;
  "users.user.mailFolders.mailFolder.messages.message.createReplyAll": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.messages.message.createReplyAll">;
  "users.user.mailFolders.mailFolder.messages.message.forward": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.messages.message.forward">;
  "users.user.mailFolders.mailFolder.messages.message.move": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.messages.message.move">;
  "users.user.mailFolders.mailFolder.messages.message.permanentDelete": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.messages.message.permanentDelete">;
  "users.user.mailFolders.mailFolder.messages.message.reply": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.messages.message.reply">;
  "users.user.mailFolders.mailFolder.messages.message.replyAll": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.messages.message.replyAll">;
  "users.user.mailFolders.mailFolder.messages.message.send": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.messages.message.send">;
  "users.mailFolders.messages.GetCount-9534": OutlookGraphOperationInput<"users.mailFolders.messages.GetCount-9534">;
  "users.user.mailFolders.mailFolder.messages.delta": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.messages.delta">;
  "users.user.mailFolders.mailFolder.copy": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.copy">;
  "users.user.mailFolders.mailFolder.move": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.move">;
  "users.user.mailFolders.mailFolder.permanentDelete": OutlookGraphOperationInput<"users.user.mailFolders.mailFolder.permanentDelete">;
  "users.mailFolders.GetCount-7dc9": OutlookGraphOperationInput<"users.mailFolders.GetCount-7dc9">;
  "users.user.mailFolders.delta": OutlookGraphOperationInput<"users.user.mailFolders.delta">;
}

export interface OutlookGraphUsersMailFolder02GeneratedClient {
  UsersUserMailFoldersMailFolderMessagesMessageCreateForward(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.createForward">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.messages.message.createForward"]>;
  UsersUserMailFoldersMailFolderMessagesMessageCreateReply(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.createReply">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.messages.message.createReply"]>;
  UsersUserMailFoldersMailFolderMessagesMessageCreateReplyAll(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.createReplyAll">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.messages.message.createReplyAll"]>;
  UsersUserMailFoldersMailFolderMessagesMessageForward(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.forward">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.messages.message.forward"]>;
  UsersUserMailFoldersMailFolderMessagesMessageMove(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.move">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.messages.message.move"]>;
  UsersUserMailFoldersMailFolderMessagesMessagePermanentDelete(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.permanentDelete">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.messages.message.permanentDelete"]>;
  UsersUserMailFoldersMailFolderMessagesMessageReply(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.reply">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.messages.message.reply"]>;
  UsersUserMailFoldersMailFolderMessagesMessageReplyAll(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.replyAll">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.messages.message.replyAll"]>;
  UsersUserMailFoldersMailFolderMessagesMessageSend(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.send">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.messages.message.send"]>;
  UsersMailFoldersMessagesGetCount9534(...args: OutlookGraphOperationArgs<"users.mailFolders.messages.GetCount-9534">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.messages.GetCount-9534"]>;
  UsersUserMailFoldersMailFolderMessagesDelta(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.delta">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.messages.delta"]>;
  UsersUserMailFoldersMailFolderCopy(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.copy">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.copy"]>;
  UsersUserMailFoldersMailFolderMove(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.move">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.move"]>;
  UsersUserMailFoldersMailFolderPermanentDelete(...args: OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.permanentDelete">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.mailFolder.permanentDelete"]>;
  UsersMailFoldersGetCount7dc9(...args: OutlookGraphOperationArgs<"users.mailFolders.GetCount-7dc9">): Promise<OutlookGraphOperationResponseMap["users.mailFolders.GetCount-7dc9"]>;
  UsersUserMailFoldersDelta(...args: OutlookGraphOperationArgs<"users.user.mailFolders.delta">): Promise<OutlookGraphOperationResponseMap["users.user.mailFolders.delta"]>;
}

export const OutlookGraphUsersMailFolder02GeneratedFunctionNames = [
  "UsersUserMailFoldersMailFolderMessagesMessageCreateForward",
  "UsersUserMailFoldersMailFolderMessagesMessageCreateReply",
  "UsersUserMailFoldersMailFolderMessagesMessageCreateReplyAll",
  "UsersUserMailFoldersMailFolderMessagesMessageForward",
  "UsersUserMailFoldersMailFolderMessagesMessageMove",
  "UsersUserMailFoldersMailFolderMessagesMessagePermanentDelete",
  "UsersUserMailFoldersMailFolderMessagesMessageReply",
  "UsersUserMailFoldersMailFolderMessagesMessageReplyAll",
  "UsersUserMailFoldersMailFolderMessagesMessageSend",
  "UsersMailFoldersMessagesGetCount9534",
  "UsersUserMailFoldersMailFolderMessagesDelta",
  "UsersUserMailFoldersMailFolderCopy",
  "UsersUserMailFoldersMailFolderMove",
  "UsersUserMailFoldersMailFolderPermanentDelete",
  "UsersMailFoldersGetCount7dc9",
  "UsersUserMailFoldersDelta"
] as const satisfies readonly (keyof OutlookGraphUsersMailFolder02GeneratedClient)[];

export function createOutlookGraphUsersMailFolder02GeneratedClient(
  callOperation: OutlookGraphGeneratedOperationCaller,
): OutlookGraphUsersMailFolder02GeneratedClient {
  return {
    UsersUserMailFoldersMailFolderMessagesMessageCreateForward: (...args) => callOperation("users.user.mailFolders.mailFolder.messages.message.createForward", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.createForward">)),
    UsersUserMailFoldersMailFolderMessagesMessageCreateReply: (...args) => callOperation("users.user.mailFolders.mailFolder.messages.message.createReply", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.createReply">)),
    UsersUserMailFoldersMailFolderMessagesMessageCreateReplyAll: (...args) => callOperation("users.user.mailFolders.mailFolder.messages.message.createReplyAll", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.createReplyAll">)),
    UsersUserMailFoldersMailFolderMessagesMessageForward: (...args) => callOperation("users.user.mailFolders.mailFolder.messages.message.forward", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.forward">)),
    UsersUserMailFoldersMailFolderMessagesMessageMove: (...args) => callOperation("users.user.mailFolders.mailFolder.messages.message.move", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.move">)),
    UsersUserMailFoldersMailFolderMessagesMessagePermanentDelete: (...args) => callOperation("users.user.mailFolders.mailFolder.messages.message.permanentDelete", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.permanentDelete">)),
    UsersUserMailFoldersMailFolderMessagesMessageReply: (...args) => callOperation("users.user.mailFolders.mailFolder.messages.message.reply", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.reply">)),
    UsersUserMailFoldersMailFolderMessagesMessageReplyAll: (...args) => callOperation("users.user.mailFolders.mailFolder.messages.message.replyAll", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.replyAll">)),
    UsersUserMailFoldersMailFolderMessagesMessageSend: (...args) => callOperation("users.user.mailFolders.mailFolder.messages.message.send", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.message.send">)),
    UsersMailFoldersMessagesGetCount9534: (...args) => callOperation("users.mailFolders.messages.GetCount-9534", ...(args as OutlookGraphOperationArgs<"users.mailFolders.messages.GetCount-9534">)),
    UsersUserMailFoldersMailFolderMessagesDelta: (...args) => callOperation("users.user.mailFolders.mailFolder.messages.delta", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.messages.delta">)),
    UsersUserMailFoldersMailFolderCopy: (...args) => callOperation("users.user.mailFolders.mailFolder.copy", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.copy">)),
    UsersUserMailFoldersMailFolderMove: (...args) => callOperation("users.user.mailFolders.mailFolder.move", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.move">)),
    UsersUserMailFoldersMailFolderPermanentDelete: (...args) => callOperation("users.user.mailFolders.mailFolder.permanentDelete", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.mailFolder.permanentDelete">)),
    UsersMailFoldersGetCount7dc9: (...args) => callOperation("users.mailFolders.GetCount-7dc9", ...(args as OutlookGraphOperationArgs<"users.mailFolders.GetCount-7dc9">)),
    UsersUserMailFoldersDelta: (...args) => callOperation("users.user.mailFolders.delta", ...(args as OutlookGraphOperationArgs<"users.user.mailFolders.delta">)),
  };
}
