// Generated endpoint chunk for TeamsGraph.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TeamsGraphGeneratedOperationCaller,
  TeamsGraphOperationArgs,
  TeamsGraphOperationInput,
  TeamsGraphPathParamValue,
} from "../../graph-api-client.generated.js";
import type { TeamsGraphOperationResponseMap } from "../../graph-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TeamsGraphChatsTargetedChatMessageOperationKeys = [
  "chats.ListTargetedMessages",
  "chats.CreateTargetedMessages",
  "chats.GetTargetedMessages",
  "chats.UpdateTargetedMessages",
  "chats.DeleteTargetedMessages",
  "chats.targetedMessages.ListHostedContents",
  "chats.targetedMessages.CreateHostedContents",
  "chats.targetedMessages.GetHostedContents",
  "chats.targetedMessages.UpdateHostedContents",
  "chats.targetedMessages.DeleteHostedContents",
  "chats.targetedMessages.GetHostedContentsContent",
  "chats.targetedMessages.UpdateHostedContentsContent",
  "chats.targetedMessages.DeleteHostedContentsContent",
  "chats.targetedMessages.hostedContents.GetCount-4857",
  "chats.targetedMessages.ListReplies",
  "chats.targetedMessages.CreateReplies",
  "chats.targetedMessages.GetReplies",
  "chats.targetedMessages.UpdateReplies",
  "chats.targetedMessages.DeleteReplies",
  "chats.targetedMessages.replies.ListHostedContents",
  "chats.targetedMessages.replies.CreateHostedContents",
  "chats.targetedMessages.replies.GetHostedContents",
  "chats.targetedMessages.replies.UpdateHostedContents",
  "chats.targetedMessages.replies.DeleteHostedContents",
  "chats.targetedMessages.replies.GetHostedContentsContent",
  "chats.targetedMessages.replies.UpdateHostedContentsContent",
  "chats.targetedMessages.replies.DeleteHostedContentsContent",
  "chats.targetedMessages.replies.hostedContents.GetCount-bddd",
  "chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction",
  "chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete",
  "chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete",
  "chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction",
  "chats.targetedMessages.replies.GetCount-2798",
  "chats.chat.targetedMessages.targetedChatMessage.replies.delta",
  "chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote",
  "chats.targetedMessages.GetCount-cb07"
] as const;
export type TeamsGraphChatsTargetedChatMessageOperationKey = typeof TeamsGraphChatsTargetedChatMessageOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphChatsTargetedChatMessageOperationPathParamMap {
  "chats.ListTargetedMessages": { "chat-id": TeamsGraphPathParamValue };
  "chats.CreateTargetedMessages": { "chat-id": TeamsGraphPathParamValue };
  "chats.GetTargetedMessages": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "chats.UpdateTargetedMessages": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "chats.DeleteTargetedMessages": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.ListHostedContents": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.CreateHostedContents": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.GetHostedContents": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.UpdateHostedContents": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.DeleteHostedContents": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.GetHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.UpdateHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.DeleteHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.hostedContents.GetCount-4857": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.ListReplies": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.CreateReplies": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.GetReplies": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.UpdateReplies": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.DeleteReplies": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.replies.ListHostedContents": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.replies.CreateHostedContents": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.replies.GetHostedContents": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.replies.UpdateHostedContents": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.replies.DeleteHostedContents": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.replies.GetHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.replies.UpdateHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.replies.DeleteHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.replies.hostedContents.GetCount-bddd": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.replies.GetCount-2798": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "chats.chat.targetedMessages.targetedChatMessage.replies.delta": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "chats.targetedMessages.GetCount-cb07": { "chat-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphChatsTargetedChatMessageOperationRequestMap {
  "chats.ListTargetedMessages": TeamsGraphOperationInput<"chats.ListTargetedMessages">;
  "chats.CreateTargetedMessages": TeamsGraphOperationInput<"chats.CreateTargetedMessages">;
  "chats.GetTargetedMessages": TeamsGraphOperationInput<"chats.GetTargetedMessages">;
  "chats.UpdateTargetedMessages": TeamsGraphOperationInput<"chats.UpdateTargetedMessages">;
  "chats.DeleteTargetedMessages": TeamsGraphOperationInput<"chats.DeleteTargetedMessages">;
  "chats.targetedMessages.ListHostedContents": TeamsGraphOperationInput<"chats.targetedMessages.ListHostedContents">;
  "chats.targetedMessages.CreateHostedContents": TeamsGraphOperationInput<"chats.targetedMessages.CreateHostedContents">;
  "chats.targetedMessages.GetHostedContents": TeamsGraphOperationInput<"chats.targetedMessages.GetHostedContents">;
  "chats.targetedMessages.UpdateHostedContents": TeamsGraphOperationInput<"chats.targetedMessages.UpdateHostedContents">;
  "chats.targetedMessages.DeleteHostedContents": TeamsGraphOperationInput<"chats.targetedMessages.DeleteHostedContents">;
  "chats.targetedMessages.GetHostedContentsContent": TeamsGraphOperationInput<"chats.targetedMessages.GetHostedContentsContent">;
  "chats.targetedMessages.UpdateHostedContentsContent": TeamsGraphOperationInput<"chats.targetedMessages.UpdateHostedContentsContent">;
  "chats.targetedMessages.DeleteHostedContentsContent": TeamsGraphOperationInput<"chats.targetedMessages.DeleteHostedContentsContent">;
  "chats.targetedMessages.hostedContents.GetCount-4857": TeamsGraphOperationInput<"chats.targetedMessages.hostedContents.GetCount-4857">;
  "chats.targetedMessages.ListReplies": TeamsGraphOperationInput<"chats.targetedMessages.ListReplies">;
  "chats.targetedMessages.CreateReplies": TeamsGraphOperationInput<"chats.targetedMessages.CreateReplies">;
  "chats.targetedMessages.GetReplies": TeamsGraphOperationInput<"chats.targetedMessages.GetReplies">;
  "chats.targetedMessages.UpdateReplies": TeamsGraphOperationInput<"chats.targetedMessages.UpdateReplies">;
  "chats.targetedMessages.DeleteReplies": TeamsGraphOperationInput<"chats.targetedMessages.DeleteReplies">;
  "chats.targetedMessages.replies.ListHostedContents": TeamsGraphOperationInput<"chats.targetedMessages.replies.ListHostedContents">;
  "chats.targetedMessages.replies.CreateHostedContents": TeamsGraphOperationInput<"chats.targetedMessages.replies.CreateHostedContents">;
  "chats.targetedMessages.replies.GetHostedContents": TeamsGraphOperationInput<"chats.targetedMessages.replies.GetHostedContents">;
  "chats.targetedMessages.replies.UpdateHostedContents": TeamsGraphOperationInput<"chats.targetedMessages.replies.UpdateHostedContents">;
  "chats.targetedMessages.replies.DeleteHostedContents": TeamsGraphOperationInput<"chats.targetedMessages.replies.DeleteHostedContents">;
  "chats.targetedMessages.replies.GetHostedContentsContent": TeamsGraphOperationInput<"chats.targetedMessages.replies.GetHostedContentsContent">;
  "chats.targetedMessages.replies.UpdateHostedContentsContent": TeamsGraphOperationInput<"chats.targetedMessages.replies.UpdateHostedContentsContent">;
  "chats.targetedMessages.replies.DeleteHostedContentsContent": TeamsGraphOperationInput<"chats.targetedMessages.replies.DeleteHostedContentsContent">;
  "chats.targetedMessages.replies.hostedContents.GetCount-bddd": TeamsGraphOperationInput<"chats.targetedMessages.replies.hostedContents.GetCount-bddd">;
  "chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction": TeamsGraphOperationInput<"chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction">;
  "chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete": TeamsGraphOperationInput<"chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete">;
  "chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete">;
  "chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction": TeamsGraphOperationInput<"chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction">;
  "chats.targetedMessages.replies.GetCount-2798": TeamsGraphOperationInput<"chats.targetedMessages.replies.GetCount-2798">;
  "chats.chat.targetedMessages.targetedChatMessage.replies.delta": TeamsGraphOperationInput<"chats.chat.targetedMessages.targetedChatMessage.replies.delta">;
  "chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote": TeamsGraphOperationInput<"chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote">;
  "chats.targetedMessages.GetCount-cb07": TeamsGraphOperationInput<"chats.targetedMessages.GetCount-cb07">;
}

export interface TeamsGraphChatsTargetedChatMessageGeneratedClient {
  ChatsListTargetedMessages(...args: TeamsGraphOperationArgs<"chats.ListTargetedMessages">): Promise<TeamsGraphOperationResponseMap["chats.ListTargetedMessages"]>;
  ChatsCreateTargetedMessages(...args: TeamsGraphOperationArgs<"chats.CreateTargetedMessages">): Promise<TeamsGraphOperationResponseMap["chats.CreateTargetedMessages"]>;
  ChatsGetTargetedMessages(...args: TeamsGraphOperationArgs<"chats.GetTargetedMessages">): Promise<TeamsGraphOperationResponseMap["chats.GetTargetedMessages"]>;
  ChatsUpdateTargetedMessages(...args: TeamsGraphOperationArgs<"chats.UpdateTargetedMessages">): Promise<TeamsGraphOperationResponseMap["chats.UpdateTargetedMessages"]>;
  ChatsDeleteTargetedMessages(...args: TeamsGraphOperationArgs<"chats.DeleteTargetedMessages">): Promise<TeamsGraphOperationResponseMap["chats.DeleteTargetedMessages"]>;
  ChatsTargetedMessagesListHostedContents(...args: TeamsGraphOperationArgs<"chats.targetedMessages.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.ListHostedContents"]>;
  ChatsTargetedMessagesCreateHostedContents(...args: TeamsGraphOperationArgs<"chats.targetedMessages.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.CreateHostedContents"]>;
  ChatsTargetedMessagesGetHostedContents(...args: TeamsGraphOperationArgs<"chats.targetedMessages.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.GetHostedContents"]>;
  ChatsTargetedMessagesUpdateHostedContents(...args: TeamsGraphOperationArgs<"chats.targetedMessages.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.UpdateHostedContents"]>;
  ChatsTargetedMessagesDeleteHostedContents(...args: TeamsGraphOperationArgs<"chats.targetedMessages.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.DeleteHostedContents"]>;
  ChatsTargetedMessagesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"chats.targetedMessages.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.GetHostedContentsContent"]>;
  ChatsTargetedMessagesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"chats.targetedMessages.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.UpdateHostedContentsContent"]>;
  ChatsTargetedMessagesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"chats.targetedMessages.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.DeleteHostedContentsContent"]>;
  ChatsTargetedMessagesHostedContentsGetCount4857(...args: TeamsGraphOperationArgs<"chats.targetedMessages.hostedContents.GetCount-4857">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.hostedContents.GetCount-4857"]>;
  ChatsTargetedMessagesListReplies(...args: TeamsGraphOperationArgs<"chats.targetedMessages.ListReplies">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.ListReplies"]>;
  ChatsTargetedMessagesCreateReplies(...args: TeamsGraphOperationArgs<"chats.targetedMessages.CreateReplies">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.CreateReplies"]>;
  ChatsTargetedMessagesGetReplies(...args: TeamsGraphOperationArgs<"chats.targetedMessages.GetReplies">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.GetReplies"]>;
  ChatsTargetedMessagesUpdateReplies(...args: TeamsGraphOperationArgs<"chats.targetedMessages.UpdateReplies">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.UpdateReplies"]>;
  ChatsTargetedMessagesDeleteReplies(...args: TeamsGraphOperationArgs<"chats.targetedMessages.DeleteReplies">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.DeleteReplies"]>;
  ChatsTargetedMessagesRepliesListHostedContents(...args: TeamsGraphOperationArgs<"chats.targetedMessages.replies.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.replies.ListHostedContents"]>;
  ChatsTargetedMessagesRepliesCreateHostedContents(...args: TeamsGraphOperationArgs<"chats.targetedMessages.replies.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.replies.CreateHostedContents"]>;
  ChatsTargetedMessagesRepliesGetHostedContents(...args: TeamsGraphOperationArgs<"chats.targetedMessages.replies.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.replies.GetHostedContents"]>;
  ChatsTargetedMessagesRepliesUpdateHostedContents(...args: TeamsGraphOperationArgs<"chats.targetedMessages.replies.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.replies.UpdateHostedContents"]>;
  ChatsTargetedMessagesRepliesDeleteHostedContents(...args: TeamsGraphOperationArgs<"chats.targetedMessages.replies.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.replies.DeleteHostedContents"]>;
  ChatsTargetedMessagesRepliesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"chats.targetedMessages.replies.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.replies.GetHostedContentsContent"]>;
  ChatsTargetedMessagesRepliesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"chats.targetedMessages.replies.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.replies.UpdateHostedContentsContent"]>;
  ChatsTargetedMessagesRepliesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"chats.targetedMessages.replies.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.replies.DeleteHostedContentsContent"]>;
  ChatsTargetedMessagesRepliesHostedContentsGetCountBddd(...args: TeamsGraphOperationArgs<"chats.targetedMessages.replies.hostedContents.GetCount-bddd">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.replies.hostedContents.GetCount-bddd"]>;
  ChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction"]>;
  ChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete"]>;
  ChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete"]>;
  ChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction"]>;
  ChatsTargetedMessagesRepliesGetCount2798(...args: TeamsGraphOperationArgs<"chats.targetedMessages.replies.GetCount-2798">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.replies.GetCount-2798"]>;
  ChatsChatTargetedMessagesTargetedChatMessageRepliesDelta(...args: TeamsGraphOperationArgs<"chats.chat.targetedMessages.targetedChatMessage.replies.delta">): Promise<TeamsGraphOperationResponseMap["chats.chat.targetedMessages.targetedChatMessage.replies.delta"]>;
  ChatsChatTargetedMessagesTargetedChatMessageRepliesReplyWithQuote(...args: TeamsGraphOperationArgs<"chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote"]>;
  ChatsTargetedMessagesGetCountCb07(...args: TeamsGraphOperationArgs<"chats.targetedMessages.GetCount-cb07">): Promise<TeamsGraphOperationResponseMap["chats.targetedMessages.GetCount-cb07"]>;
}

export const TeamsGraphChatsTargetedChatMessageGeneratedFunctionNames = [
  "ChatsListTargetedMessages",
  "ChatsCreateTargetedMessages",
  "ChatsGetTargetedMessages",
  "ChatsUpdateTargetedMessages",
  "ChatsDeleteTargetedMessages",
  "ChatsTargetedMessagesListHostedContents",
  "ChatsTargetedMessagesCreateHostedContents",
  "ChatsTargetedMessagesGetHostedContents",
  "ChatsTargetedMessagesUpdateHostedContents",
  "ChatsTargetedMessagesDeleteHostedContents",
  "ChatsTargetedMessagesGetHostedContentsContent",
  "ChatsTargetedMessagesUpdateHostedContentsContent",
  "ChatsTargetedMessagesDeleteHostedContentsContent",
  "ChatsTargetedMessagesHostedContentsGetCount4857",
  "ChatsTargetedMessagesListReplies",
  "ChatsTargetedMessagesCreateReplies",
  "ChatsTargetedMessagesGetReplies",
  "ChatsTargetedMessagesUpdateReplies",
  "ChatsTargetedMessagesDeleteReplies",
  "ChatsTargetedMessagesRepliesListHostedContents",
  "ChatsTargetedMessagesRepliesCreateHostedContents",
  "ChatsTargetedMessagesRepliesGetHostedContents",
  "ChatsTargetedMessagesRepliesUpdateHostedContents",
  "ChatsTargetedMessagesRepliesDeleteHostedContents",
  "ChatsTargetedMessagesRepliesGetHostedContentsContent",
  "ChatsTargetedMessagesRepliesUpdateHostedContentsContent",
  "ChatsTargetedMessagesRepliesDeleteHostedContentsContent",
  "ChatsTargetedMessagesRepliesHostedContentsGetCountBddd",
  "ChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageSetReaction",
  "ChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageSoftDelete",
  "ChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageUndoSoftDelete",
  "ChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageUnsetReaction",
  "ChatsTargetedMessagesRepliesGetCount2798",
  "ChatsChatTargetedMessagesTargetedChatMessageRepliesDelta",
  "ChatsChatTargetedMessagesTargetedChatMessageRepliesReplyWithQuote",
  "ChatsTargetedMessagesGetCountCb07"
] as const satisfies readonly (keyof TeamsGraphChatsTargetedChatMessageGeneratedClient)[];

export function createTeamsGraphChatsTargetedChatMessageGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphChatsTargetedChatMessageGeneratedClient {
  return {
    ChatsListTargetedMessages: (...args) => callOperation("chats.ListTargetedMessages", ...(args as TeamsGraphOperationArgs<"chats.ListTargetedMessages">)),
    ChatsCreateTargetedMessages: (...args) => callOperation("chats.CreateTargetedMessages", ...(args as TeamsGraphOperationArgs<"chats.CreateTargetedMessages">)),
    ChatsGetTargetedMessages: (...args) => callOperation("chats.GetTargetedMessages", ...(args as TeamsGraphOperationArgs<"chats.GetTargetedMessages">)),
    ChatsUpdateTargetedMessages: (...args) => callOperation("chats.UpdateTargetedMessages", ...(args as TeamsGraphOperationArgs<"chats.UpdateTargetedMessages">)),
    ChatsDeleteTargetedMessages: (...args) => callOperation("chats.DeleteTargetedMessages", ...(args as TeamsGraphOperationArgs<"chats.DeleteTargetedMessages">)),
    ChatsTargetedMessagesListHostedContents: (...args) => callOperation("chats.targetedMessages.ListHostedContents", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.ListHostedContents">)),
    ChatsTargetedMessagesCreateHostedContents: (...args) => callOperation("chats.targetedMessages.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.CreateHostedContents">)),
    ChatsTargetedMessagesGetHostedContents: (...args) => callOperation("chats.targetedMessages.GetHostedContents", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.GetHostedContents">)),
    ChatsTargetedMessagesUpdateHostedContents: (...args) => callOperation("chats.targetedMessages.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.UpdateHostedContents">)),
    ChatsTargetedMessagesDeleteHostedContents: (...args) => callOperation("chats.targetedMessages.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.DeleteHostedContents">)),
    ChatsTargetedMessagesGetHostedContentsContent: (...args) => callOperation("chats.targetedMessages.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.GetHostedContentsContent">)),
    ChatsTargetedMessagesUpdateHostedContentsContent: (...args) => callOperation("chats.targetedMessages.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.UpdateHostedContentsContent">)),
    ChatsTargetedMessagesDeleteHostedContentsContent: (...args) => callOperation("chats.targetedMessages.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.DeleteHostedContentsContent">)),
    ChatsTargetedMessagesHostedContentsGetCount4857: (...args) => callOperation("chats.targetedMessages.hostedContents.GetCount-4857", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.hostedContents.GetCount-4857">)),
    ChatsTargetedMessagesListReplies: (...args) => callOperation("chats.targetedMessages.ListReplies", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.ListReplies">)),
    ChatsTargetedMessagesCreateReplies: (...args) => callOperation("chats.targetedMessages.CreateReplies", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.CreateReplies">)),
    ChatsTargetedMessagesGetReplies: (...args) => callOperation("chats.targetedMessages.GetReplies", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.GetReplies">)),
    ChatsTargetedMessagesUpdateReplies: (...args) => callOperation("chats.targetedMessages.UpdateReplies", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.UpdateReplies">)),
    ChatsTargetedMessagesDeleteReplies: (...args) => callOperation("chats.targetedMessages.DeleteReplies", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.DeleteReplies">)),
    ChatsTargetedMessagesRepliesListHostedContents: (...args) => callOperation("chats.targetedMessages.replies.ListHostedContents", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.replies.ListHostedContents">)),
    ChatsTargetedMessagesRepliesCreateHostedContents: (...args) => callOperation("chats.targetedMessages.replies.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.replies.CreateHostedContents">)),
    ChatsTargetedMessagesRepliesGetHostedContents: (...args) => callOperation("chats.targetedMessages.replies.GetHostedContents", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.replies.GetHostedContents">)),
    ChatsTargetedMessagesRepliesUpdateHostedContents: (...args) => callOperation("chats.targetedMessages.replies.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.replies.UpdateHostedContents">)),
    ChatsTargetedMessagesRepliesDeleteHostedContents: (...args) => callOperation("chats.targetedMessages.replies.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.replies.DeleteHostedContents">)),
    ChatsTargetedMessagesRepliesGetHostedContentsContent: (...args) => callOperation("chats.targetedMessages.replies.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.replies.GetHostedContentsContent">)),
    ChatsTargetedMessagesRepliesUpdateHostedContentsContent: (...args) => callOperation("chats.targetedMessages.replies.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.replies.UpdateHostedContentsContent">)),
    ChatsTargetedMessagesRepliesDeleteHostedContentsContent: (...args) => callOperation("chats.targetedMessages.replies.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.replies.DeleteHostedContentsContent">)),
    ChatsTargetedMessagesRepliesHostedContentsGetCountBddd: (...args) => callOperation("chats.targetedMessages.replies.hostedContents.GetCount-bddd", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.replies.hostedContents.GetCount-bddd">)),
    ChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageSetReaction: (...args) => callOperation("chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction">)),
    ChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageSoftDelete: (...args) => callOperation("chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete">)),
    ChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageUndoSoftDelete: (...args) => callOperation("chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete">)),
    ChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageUnsetReaction: (...args) => callOperation("chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction">)),
    ChatsTargetedMessagesRepliesGetCount2798: (...args) => callOperation("chats.targetedMessages.replies.GetCount-2798", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.replies.GetCount-2798">)),
    ChatsChatTargetedMessagesTargetedChatMessageRepliesDelta: (...args) => callOperation("chats.chat.targetedMessages.targetedChatMessage.replies.delta", ...(args as TeamsGraphOperationArgs<"chats.chat.targetedMessages.targetedChatMessage.replies.delta">)),
    ChatsChatTargetedMessagesTargetedChatMessageRepliesReplyWithQuote: (...args) => callOperation("chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote", ...(args as TeamsGraphOperationArgs<"chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote">)),
    ChatsTargetedMessagesGetCountCb07: (...args) => callOperation("chats.targetedMessages.GetCount-cb07", ...(args as TeamsGraphOperationArgs<"chats.targetedMessages.GetCount-cb07">)),
  };
}
