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
export const TeamsGraphChatsChatMessageOperationKeys = [
  "chats.ListMessages",
  "chats.CreateMessages",
  "chats.GetMessages",
  "chats.UpdateMessages",
  "chats.DeleteMessages",
  "chats.messages.ListHostedContents",
  "chats.messages.CreateHostedContents",
  "chats.messages.GetHostedContents",
  "chats.messages.UpdateHostedContents",
  "chats.messages.DeleteHostedContents",
  "chats.messages.GetHostedContentsContent",
  "chats.messages.UpdateHostedContentsContent",
  "chats.messages.DeleteHostedContentsContent",
  "chats.messages.hostedContents.GetCount-a167",
  "chats.chat.messages.chatMessage.setReaction",
  "chats.chat.messages.chatMessage.softDelete",
  "chats.chat.messages.chatMessage.undoSoftDelete",
  "chats.chat.messages.chatMessage.unsetReaction",
  "chats.messages.ListReplies",
  "chats.messages.CreateReplies",
  "chats.messages.GetReplies",
  "chats.messages.UpdateReplies",
  "chats.messages.DeleteReplies",
  "chats.messages.replies.ListHostedContents",
  "chats.messages.replies.CreateHostedContents",
  "chats.messages.replies.GetHostedContents",
  "chats.messages.replies.UpdateHostedContents",
  "chats.messages.replies.DeleteHostedContents",
  "chats.messages.replies.GetHostedContentsContent",
  "chats.messages.replies.UpdateHostedContentsContent",
  "chats.messages.replies.DeleteHostedContentsContent",
  "chats.messages.replies.hostedContents.GetCount-ccd3",
  "chats.chat.messages.chatMessage.replies.chatMessage.setReaction",
  "chats.chat.messages.chatMessage.replies.chatMessage.softDelete",
  "chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete",
  "chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction",
  "chats.messages.replies.GetCount-10ad",
  "chats.chat.messages.chatMessage.replies.delta",
  "chats.chat.messages.chatMessage.replies.replyWithQuote",
  "chats.messages.GetCount-3dde",
  "chats.chat.messages.delta",
  "chats.chat.messages.replyWithQuote"
] as const;
export type TeamsGraphChatsChatMessageOperationKey = typeof TeamsGraphChatsChatMessageOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphChatsChatMessageOperationPathParamMap {
  "chats.ListMessages": { "chat-id": TeamsGraphPathParamValue };
  "chats.CreateMessages": { "chat-id": TeamsGraphPathParamValue };
  "chats.GetMessages": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.UpdateMessages": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.DeleteMessages": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.messages.ListHostedContents": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.messages.CreateHostedContents": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.messages.GetHostedContents": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.messages.UpdateHostedContents": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.messages.DeleteHostedContents": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.messages.GetHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.messages.UpdateHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.messages.DeleteHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.messages.hostedContents.GetCount-a167": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.chat.messages.chatMessage.setReaction": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.chat.messages.chatMessage.softDelete": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.chat.messages.chatMessage.undoSoftDelete": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.chat.messages.chatMessage.unsetReaction": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.messages.ListReplies": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.messages.CreateReplies": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.messages.GetReplies": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "chats.messages.UpdateReplies": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "chats.messages.DeleteReplies": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "chats.messages.replies.ListHostedContents": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "chats.messages.replies.CreateHostedContents": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "chats.messages.replies.GetHostedContents": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.messages.replies.UpdateHostedContents": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.messages.replies.DeleteHostedContents": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.messages.replies.GetHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.messages.replies.UpdateHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.messages.replies.DeleteHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "chats.messages.replies.hostedContents.GetCount-ccd3": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "chats.chat.messages.chatMessage.replies.chatMessage.setReaction": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "chats.chat.messages.chatMessage.replies.chatMessage.softDelete": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "chats.messages.replies.GetCount-10ad": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.chat.messages.chatMessage.replies.delta": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.chat.messages.chatMessage.replies.replyWithQuote": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "chats.messages.GetCount-3dde": { "chat-id": TeamsGraphPathParamValue };
  "chats.chat.messages.delta": { "chat-id": TeamsGraphPathParamValue };
  "chats.chat.messages.replyWithQuote": { "chat-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphChatsChatMessageOperationRequestMap {
  "chats.ListMessages": TeamsGraphOperationInput<"chats.ListMessages">;
  "chats.CreateMessages": TeamsGraphOperationInput<"chats.CreateMessages">;
  "chats.GetMessages": TeamsGraphOperationInput<"chats.GetMessages">;
  "chats.UpdateMessages": TeamsGraphOperationInput<"chats.UpdateMessages">;
  "chats.DeleteMessages": TeamsGraphOperationInput<"chats.DeleteMessages">;
  "chats.messages.ListHostedContents": TeamsGraphOperationInput<"chats.messages.ListHostedContents">;
  "chats.messages.CreateHostedContents": TeamsGraphOperationInput<"chats.messages.CreateHostedContents">;
  "chats.messages.GetHostedContents": TeamsGraphOperationInput<"chats.messages.GetHostedContents">;
  "chats.messages.UpdateHostedContents": TeamsGraphOperationInput<"chats.messages.UpdateHostedContents">;
  "chats.messages.DeleteHostedContents": TeamsGraphOperationInput<"chats.messages.DeleteHostedContents">;
  "chats.messages.GetHostedContentsContent": TeamsGraphOperationInput<"chats.messages.GetHostedContentsContent">;
  "chats.messages.UpdateHostedContentsContent": TeamsGraphOperationInput<"chats.messages.UpdateHostedContentsContent">;
  "chats.messages.DeleteHostedContentsContent": TeamsGraphOperationInput<"chats.messages.DeleteHostedContentsContent">;
  "chats.messages.hostedContents.GetCount-a167": TeamsGraphOperationInput<"chats.messages.hostedContents.GetCount-a167">;
  "chats.chat.messages.chatMessage.setReaction": TeamsGraphOperationInput<"chats.chat.messages.chatMessage.setReaction">;
  "chats.chat.messages.chatMessage.softDelete": TeamsGraphOperationInput<"chats.chat.messages.chatMessage.softDelete">;
  "chats.chat.messages.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"chats.chat.messages.chatMessage.undoSoftDelete">;
  "chats.chat.messages.chatMessage.unsetReaction": TeamsGraphOperationInput<"chats.chat.messages.chatMessage.unsetReaction">;
  "chats.messages.ListReplies": TeamsGraphOperationInput<"chats.messages.ListReplies">;
  "chats.messages.CreateReplies": TeamsGraphOperationInput<"chats.messages.CreateReplies">;
  "chats.messages.GetReplies": TeamsGraphOperationInput<"chats.messages.GetReplies">;
  "chats.messages.UpdateReplies": TeamsGraphOperationInput<"chats.messages.UpdateReplies">;
  "chats.messages.DeleteReplies": TeamsGraphOperationInput<"chats.messages.DeleteReplies">;
  "chats.messages.replies.ListHostedContents": TeamsGraphOperationInput<"chats.messages.replies.ListHostedContents">;
  "chats.messages.replies.CreateHostedContents": TeamsGraphOperationInput<"chats.messages.replies.CreateHostedContents">;
  "chats.messages.replies.GetHostedContents": TeamsGraphOperationInput<"chats.messages.replies.GetHostedContents">;
  "chats.messages.replies.UpdateHostedContents": TeamsGraphOperationInput<"chats.messages.replies.UpdateHostedContents">;
  "chats.messages.replies.DeleteHostedContents": TeamsGraphOperationInput<"chats.messages.replies.DeleteHostedContents">;
  "chats.messages.replies.GetHostedContentsContent": TeamsGraphOperationInput<"chats.messages.replies.GetHostedContentsContent">;
  "chats.messages.replies.UpdateHostedContentsContent": TeamsGraphOperationInput<"chats.messages.replies.UpdateHostedContentsContent">;
  "chats.messages.replies.DeleteHostedContentsContent": TeamsGraphOperationInput<"chats.messages.replies.DeleteHostedContentsContent">;
  "chats.messages.replies.hostedContents.GetCount-ccd3": TeamsGraphOperationInput<"chats.messages.replies.hostedContents.GetCount-ccd3">;
  "chats.chat.messages.chatMessage.replies.chatMessage.setReaction": TeamsGraphOperationInput<"chats.chat.messages.chatMessage.replies.chatMessage.setReaction">;
  "chats.chat.messages.chatMessage.replies.chatMessage.softDelete": TeamsGraphOperationInput<"chats.chat.messages.chatMessage.replies.chatMessage.softDelete">;
  "chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete">;
  "chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction": TeamsGraphOperationInput<"chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction">;
  "chats.messages.replies.GetCount-10ad": TeamsGraphOperationInput<"chats.messages.replies.GetCount-10ad">;
  "chats.chat.messages.chatMessage.replies.delta": TeamsGraphOperationInput<"chats.chat.messages.chatMessage.replies.delta">;
  "chats.chat.messages.chatMessage.replies.replyWithQuote": TeamsGraphOperationInput<"chats.chat.messages.chatMessage.replies.replyWithQuote">;
  "chats.messages.GetCount-3dde": TeamsGraphOperationInput<"chats.messages.GetCount-3dde">;
  "chats.chat.messages.delta": TeamsGraphOperationInput<"chats.chat.messages.delta">;
  "chats.chat.messages.replyWithQuote": TeamsGraphOperationInput<"chats.chat.messages.replyWithQuote">;
}

export interface TeamsGraphChatsChatMessageGeneratedClient {
  ChatsListMessages(...args: TeamsGraphOperationArgs<"chats.ListMessages">): Promise<TeamsGraphOperationResponseMap["chats.ListMessages"]>;
  ChatsCreateMessages(...args: TeamsGraphOperationArgs<"chats.CreateMessages">): Promise<TeamsGraphOperationResponseMap["chats.CreateMessages"]>;
  ChatsGetMessages(...args: TeamsGraphOperationArgs<"chats.GetMessages">): Promise<TeamsGraphOperationResponseMap["chats.GetMessages"]>;
  ChatsUpdateMessages(...args: TeamsGraphOperationArgs<"chats.UpdateMessages">): Promise<TeamsGraphOperationResponseMap["chats.UpdateMessages"]>;
  ChatsDeleteMessages(...args: TeamsGraphOperationArgs<"chats.DeleteMessages">): Promise<TeamsGraphOperationResponseMap["chats.DeleteMessages"]>;
  ChatsMessagesListHostedContents(...args: TeamsGraphOperationArgs<"chats.messages.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["chats.messages.ListHostedContents"]>;
  ChatsMessagesCreateHostedContents(...args: TeamsGraphOperationArgs<"chats.messages.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["chats.messages.CreateHostedContents"]>;
  ChatsMessagesGetHostedContents(...args: TeamsGraphOperationArgs<"chats.messages.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["chats.messages.GetHostedContents"]>;
  ChatsMessagesUpdateHostedContents(...args: TeamsGraphOperationArgs<"chats.messages.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["chats.messages.UpdateHostedContents"]>;
  ChatsMessagesDeleteHostedContents(...args: TeamsGraphOperationArgs<"chats.messages.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["chats.messages.DeleteHostedContents"]>;
  ChatsMessagesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"chats.messages.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["chats.messages.GetHostedContentsContent"]>;
  ChatsMessagesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"chats.messages.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["chats.messages.UpdateHostedContentsContent"]>;
  ChatsMessagesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"chats.messages.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["chats.messages.DeleteHostedContentsContent"]>;
  ChatsMessagesHostedContentsGetCountA167(...args: TeamsGraphOperationArgs<"chats.messages.hostedContents.GetCount-a167">): Promise<TeamsGraphOperationResponseMap["chats.messages.hostedContents.GetCount-a167"]>;
  ChatsChatMessagesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"chats.chat.messages.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["chats.chat.messages.chatMessage.setReaction"]>;
  ChatsChatMessagesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"chats.chat.messages.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["chats.chat.messages.chatMessage.softDelete"]>;
  ChatsChatMessagesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"chats.chat.messages.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["chats.chat.messages.chatMessage.undoSoftDelete"]>;
  ChatsChatMessagesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"chats.chat.messages.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["chats.chat.messages.chatMessage.unsetReaction"]>;
  ChatsMessagesListReplies(...args: TeamsGraphOperationArgs<"chats.messages.ListReplies">): Promise<TeamsGraphOperationResponseMap["chats.messages.ListReplies"]>;
  ChatsMessagesCreateReplies(...args: TeamsGraphOperationArgs<"chats.messages.CreateReplies">): Promise<TeamsGraphOperationResponseMap["chats.messages.CreateReplies"]>;
  ChatsMessagesGetReplies(...args: TeamsGraphOperationArgs<"chats.messages.GetReplies">): Promise<TeamsGraphOperationResponseMap["chats.messages.GetReplies"]>;
  ChatsMessagesUpdateReplies(...args: TeamsGraphOperationArgs<"chats.messages.UpdateReplies">): Promise<TeamsGraphOperationResponseMap["chats.messages.UpdateReplies"]>;
  ChatsMessagesDeleteReplies(...args: TeamsGraphOperationArgs<"chats.messages.DeleteReplies">): Promise<TeamsGraphOperationResponseMap["chats.messages.DeleteReplies"]>;
  ChatsMessagesRepliesListHostedContents(...args: TeamsGraphOperationArgs<"chats.messages.replies.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["chats.messages.replies.ListHostedContents"]>;
  ChatsMessagesRepliesCreateHostedContents(...args: TeamsGraphOperationArgs<"chats.messages.replies.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["chats.messages.replies.CreateHostedContents"]>;
  ChatsMessagesRepliesGetHostedContents(...args: TeamsGraphOperationArgs<"chats.messages.replies.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["chats.messages.replies.GetHostedContents"]>;
  ChatsMessagesRepliesUpdateHostedContents(...args: TeamsGraphOperationArgs<"chats.messages.replies.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["chats.messages.replies.UpdateHostedContents"]>;
  ChatsMessagesRepliesDeleteHostedContents(...args: TeamsGraphOperationArgs<"chats.messages.replies.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["chats.messages.replies.DeleteHostedContents"]>;
  ChatsMessagesRepliesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"chats.messages.replies.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["chats.messages.replies.GetHostedContentsContent"]>;
  ChatsMessagesRepliesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"chats.messages.replies.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["chats.messages.replies.UpdateHostedContentsContent"]>;
  ChatsMessagesRepliesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"chats.messages.replies.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["chats.messages.replies.DeleteHostedContentsContent"]>;
  ChatsMessagesRepliesHostedContentsGetCountCcd3(...args: TeamsGraphOperationArgs<"chats.messages.replies.hostedContents.GetCount-ccd3">): Promise<TeamsGraphOperationResponseMap["chats.messages.replies.hostedContents.GetCount-ccd3"]>;
  ChatsChatMessagesChatMessageRepliesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"chats.chat.messages.chatMessage.replies.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["chats.chat.messages.chatMessage.replies.chatMessage.setReaction"]>;
  ChatsChatMessagesChatMessageRepliesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"chats.chat.messages.chatMessage.replies.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["chats.chat.messages.chatMessage.replies.chatMessage.softDelete"]>;
  ChatsChatMessagesChatMessageRepliesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete"]>;
  ChatsChatMessagesChatMessageRepliesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction"]>;
  ChatsMessagesRepliesGetCount10ad(...args: TeamsGraphOperationArgs<"chats.messages.replies.GetCount-10ad">): Promise<TeamsGraphOperationResponseMap["chats.messages.replies.GetCount-10ad"]>;
  ChatsChatMessagesChatMessageRepliesDelta(...args: TeamsGraphOperationArgs<"chats.chat.messages.chatMessage.replies.delta">): Promise<TeamsGraphOperationResponseMap["chats.chat.messages.chatMessage.replies.delta"]>;
  ChatsChatMessagesChatMessageRepliesReplyWithQuote(...args: TeamsGraphOperationArgs<"chats.chat.messages.chatMessage.replies.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["chats.chat.messages.chatMessage.replies.replyWithQuote"]>;
  ChatsMessagesGetCount3dde(...args: TeamsGraphOperationArgs<"chats.messages.GetCount-3dde">): Promise<TeamsGraphOperationResponseMap["chats.messages.GetCount-3dde"]>;
  ChatsChatMessagesDelta(...args: TeamsGraphOperationArgs<"chats.chat.messages.delta">): Promise<TeamsGraphOperationResponseMap["chats.chat.messages.delta"]>;
  ChatsChatMessagesReplyWithQuote(...args: TeamsGraphOperationArgs<"chats.chat.messages.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["chats.chat.messages.replyWithQuote"]>;
}

export const TeamsGraphChatsChatMessageGeneratedFunctionNames = [
  "ChatsListMessages",
  "ChatsCreateMessages",
  "ChatsGetMessages",
  "ChatsUpdateMessages",
  "ChatsDeleteMessages",
  "ChatsMessagesListHostedContents",
  "ChatsMessagesCreateHostedContents",
  "ChatsMessagesGetHostedContents",
  "ChatsMessagesUpdateHostedContents",
  "ChatsMessagesDeleteHostedContents",
  "ChatsMessagesGetHostedContentsContent",
  "ChatsMessagesUpdateHostedContentsContent",
  "ChatsMessagesDeleteHostedContentsContent",
  "ChatsMessagesHostedContentsGetCountA167",
  "ChatsChatMessagesChatMessageSetReaction",
  "ChatsChatMessagesChatMessageSoftDelete",
  "ChatsChatMessagesChatMessageUndoSoftDelete",
  "ChatsChatMessagesChatMessageUnsetReaction",
  "ChatsMessagesListReplies",
  "ChatsMessagesCreateReplies",
  "ChatsMessagesGetReplies",
  "ChatsMessagesUpdateReplies",
  "ChatsMessagesDeleteReplies",
  "ChatsMessagesRepliesListHostedContents",
  "ChatsMessagesRepliesCreateHostedContents",
  "ChatsMessagesRepliesGetHostedContents",
  "ChatsMessagesRepliesUpdateHostedContents",
  "ChatsMessagesRepliesDeleteHostedContents",
  "ChatsMessagesRepliesGetHostedContentsContent",
  "ChatsMessagesRepliesUpdateHostedContentsContent",
  "ChatsMessagesRepliesDeleteHostedContentsContent",
  "ChatsMessagesRepliesHostedContentsGetCountCcd3",
  "ChatsChatMessagesChatMessageRepliesChatMessageSetReaction",
  "ChatsChatMessagesChatMessageRepliesChatMessageSoftDelete",
  "ChatsChatMessagesChatMessageRepliesChatMessageUndoSoftDelete",
  "ChatsChatMessagesChatMessageRepliesChatMessageUnsetReaction",
  "ChatsMessagesRepliesGetCount10ad",
  "ChatsChatMessagesChatMessageRepliesDelta",
  "ChatsChatMessagesChatMessageRepliesReplyWithQuote",
  "ChatsMessagesGetCount3dde",
  "ChatsChatMessagesDelta",
  "ChatsChatMessagesReplyWithQuote"
] as const satisfies readonly (keyof TeamsGraphChatsChatMessageGeneratedClient)[];

export function createTeamsGraphChatsChatMessageGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphChatsChatMessageGeneratedClient {
  return {
    ChatsListMessages: (...args) => callOperation("chats.ListMessages", ...(args as TeamsGraphOperationArgs<"chats.ListMessages">)),
    ChatsCreateMessages: (...args) => callOperation("chats.CreateMessages", ...(args as TeamsGraphOperationArgs<"chats.CreateMessages">)),
    ChatsGetMessages: (...args) => callOperation("chats.GetMessages", ...(args as TeamsGraphOperationArgs<"chats.GetMessages">)),
    ChatsUpdateMessages: (...args) => callOperation("chats.UpdateMessages", ...(args as TeamsGraphOperationArgs<"chats.UpdateMessages">)),
    ChatsDeleteMessages: (...args) => callOperation("chats.DeleteMessages", ...(args as TeamsGraphOperationArgs<"chats.DeleteMessages">)),
    ChatsMessagesListHostedContents: (...args) => callOperation("chats.messages.ListHostedContents", ...(args as TeamsGraphOperationArgs<"chats.messages.ListHostedContents">)),
    ChatsMessagesCreateHostedContents: (...args) => callOperation("chats.messages.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"chats.messages.CreateHostedContents">)),
    ChatsMessagesGetHostedContents: (...args) => callOperation("chats.messages.GetHostedContents", ...(args as TeamsGraphOperationArgs<"chats.messages.GetHostedContents">)),
    ChatsMessagesUpdateHostedContents: (...args) => callOperation("chats.messages.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"chats.messages.UpdateHostedContents">)),
    ChatsMessagesDeleteHostedContents: (...args) => callOperation("chats.messages.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"chats.messages.DeleteHostedContents">)),
    ChatsMessagesGetHostedContentsContent: (...args) => callOperation("chats.messages.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"chats.messages.GetHostedContentsContent">)),
    ChatsMessagesUpdateHostedContentsContent: (...args) => callOperation("chats.messages.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"chats.messages.UpdateHostedContentsContent">)),
    ChatsMessagesDeleteHostedContentsContent: (...args) => callOperation("chats.messages.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"chats.messages.DeleteHostedContentsContent">)),
    ChatsMessagesHostedContentsGetCountA167: (...args) => callOperation("chats.messages.hostedContents.GetCount-a167", ...(args as TeamsGraphOperationArgs<"chats.messages.hostedContents.GetCount-a167">)),
    ChatsChatMessagesChatMessageSetReaction: (...args) => callOperation("chats.chat.messages.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"chats.chat.messages.chatMessage.setReaction">)),
    ChatsChatMessagesChatMessageSoftDelete: (...args) => callOperation("chats.chat.messages.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"chats.chat.messages.chatMessage.softDelete">)),
    ChatsChatMessagesChatMessageUndoSoftDelete: (...args) => callOperation("chats.chat.messages.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"chats.chat.messages.chatMessage.undoSoftDelete">)),
    ChatsChatMessagesChatMessageUnsetReaction: (...args) => callOperation("chats.chat.messages.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"chats.chat.messages.chatMessage.unsetReaction">)),
    ChatsMessagesListReplies: (...args) => callOperation("chats.messages.ListReplies", ...(args as TeamsGraphOperationArgs<"chats.messages.ListReplies">)),
    ChatsMessagesCreateReplies: (...args) => callOperation("chats.messages.CreateReplies", ...(args as TeamsGraphOperationArgs<"chats.messages.CreateReplies">)),
    ChatsMessagesGetReplies: (...args) => callOperation("chats.messages.GetReplies", ...(args as TeamsGraphOperationArgs<"chats.messages.GetReplies">)),
    ChatsMessagesUpdateReplies: (...args) => callOperation("chats.messages.UpdateReplies", ...(args as TeamsGraphOperationArgs<"chats.messages.UpdateReplies">)),
    ChatsMessagesDeleteReplies: (...args) => callOperation("chats.messages.DeleteReplies", ...(args as TeamsGraphOperationArgs<"chats.messages.DeleteReplies">)),
    ChatsMessagesRepliesListHostedContents: (...args) => callOperation("chats.messages.replies.ListHostedContents", ...(args as TeamsGraphOperationArgs<"chats.messages.replies.ListHostedContents">)),
    ChatsMessagesRepliesCreateHostedContents: (...args) => callOperation("chats.messages.replies.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"chats.messages.replies.CreateHostedContents">)),
    ChatsMessagesRepliesGetHostedContents: (...args) => callOperation("chats.messages.replies.GetHostedContents", ...(args as TeamsGraphOperationArgs<"chats.messages.replies.GetHostedContents">)),
    ChatsMessagesRepliesUpdateHostedContents: (...args) => callOperation("chats.messages.replies.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"chats.messages.replies.UpdateHostedContents">)),
    ChatsMessagesRepliesDeleteHostedContents: (...args) => callOperation("chats.messages.replies.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"chats.messages.replies.DeleteHostedContents">)),
    ChatsMessagesRepliesGetHostedContentsContent: (...args) => callOperation("chats.messages.replies.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"chats.messages.replies.GetHostedContentsContent">)),
    ChatsMessagesRepliesUpdateHostedContentsContent: (...args) => callOperation("chats.messages.replies.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"chats.messages.replies.UpdateHostedContentsContent">)),
    ChatsMessagesRepliesDeleteHostedContentsContent: (...args) => callOperation("chats.messages.replies.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"chats.messages.replies.DeleteHostedContentsContent">)),
    ChatsMessagesRepliesHostedContentsGetCountCcd3: (...args) => callOperation("chats.messages.replies.hostedContents.GetCount-ccd3", ...(args as TeamsGraphOperationArgs<"chats.messages.replies.hostedContents.GetCount-ccd3">)),
    ChatsChatMessagesChatMessageRepliesChatMessageSetReaction: (...args) => callOperation("chats.chat.messages.chatMessage.replies.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"chats.chat.messages.chatMessage.replies.chatMessage.setReaction">)),
    ChatsChatMessagesChatMessageRepliesChatMessageSoftDelete: (...args) => callOperation("chats.chat.messages.chatMessage.replies.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"chats.chat.messages.chatMessage.replies.chatMessage.softDelete">)),
    ChatsChatMessagesChatMessageRepliesChatMessageUndoSoftDelete: (...args) => callOperation("chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete">)),
    ChatsChatMessagesChatMessageRepliesChatMessageUnsetReaction: (...args) => callOperation("chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction">)),
    ChatsMessagesRepliesGetCount10ad: (...args) => callOperation("chats.messages.replies.GetCount-10ad", ...(args as TeamsGraphOperationArgs<"chats.messages.replies.GetCount-10ad">)),
    ChatsChatMessagesChatMessageRepliesDelta: (...args) => callOperation("chats.chat.messages.chatMessage.replies.delta", ...(args as TeamsGraphOperationArgs<"chats.chat.messages.chatMessage.replies.delta">)),
    ChatsChatMessagesChatMessageRepliesReplyWithQuote: (...args) => callOperation("chats.chat.messages.chatMessage.replies.replyWithQuote", ...(args as TeamsGraphOperationArgs<"chats.chat.messages.chatMessage.replies.replyWithQuote">)),
    ChatsMessagesGetCount3dde: (...args) => callOperation("chats.messages.GetCount-3dde", ...(args as TeamsGraphOperationArgs<"chats.messages.GetCount-3dde">)),
    ChatsChatMessagesDelta: (...args) => callOperation("chats.chat.messages.delta", ...(args as TeamsGraphOperationArgs<"chats.chat.messages.delta">)),
    ChatsChatMessagesReplyWithQuote: (...args) => callOperation("chats.chat.messages.replyWithQuote", ...(args as TeamsGraphOperationArgs<"chats.chat.messages.replyWithQuote">)),
  };
}
