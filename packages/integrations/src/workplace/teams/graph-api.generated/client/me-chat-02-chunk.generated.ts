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
export const TeamsGraphMeChat02OperationKeys = [
  "me.chats.permissionGrants.GetCount-9e7e",
  "me.chats.ListPinnedMessages",
  "me.chats.CreatePinnedMessages",
  "me.chats.GetPinnedMessages",
  "me.chats.UpdatePinnedMessages",
  "me.chats.DeletePinnedMessages",
  "me.chats.pinnedMessages.GetMessage",
  "me.chats.pinnedMessages.GetCount-f614",
  "me.chats.ListTabs",
  "me.chats.CreateTabs",
  "me.chats.GetTabs",
  "me.chats.UpdateTabs",
  "me.chats.DeleteTabs",
  "me.chats.tabs.GetTeamsApp",
  "me.chats.tabs.GetCount-35b1",
  "me.chats.ListTargetedMessages",
  "me.chats.CreateTargetedMessages",
  "me.chats.GetTargetedMessages",
  "me.chats.UpdateTargetedMessages",
  "me.chats.DeleteTargetedMessages",
  "me.chats.targetedMessages.ListHostedContents",
  "me.chats.targetedMessages.CreateHostedContents",
  "me.chats.targetedMessages.GetHostedContents",
  "me.chats.targetedMessages.UpdateHostedContents",
  "me.chats.targetedMessages.DeleteHostedContents",
  "me.chats.targetedMessages.GetHostedContentsContent",
  "me.chats.targetedMessages.UpdateHostedContentsContent",
  "me.chats.targetedMessages.DeleteHostedContentsContent",
  "me.chats.targetedMessages.hostedContents.GetCount-cf00",
  "me.chats.targetedMessages.ListReplies",
  "me.chats.targetedMessages.CreateReplies",
  "me.chats.targetedMessages.GetReplies",
  "me.chats.targetedMessages.UpdateReplies",
  "me.chats.targetedMessages.DeleteReplies",
  "me.chats.targetedMessages.replies.ListHostedContents",
  "me.chats.targetedMessages.replies.CreateHostedContents",
  "me.chats.targetedMessages.replies.GetHostedContents",
  "me.chats.targetedMessages.replies.UpdateHostedContents",
  "me.chats.targetedMessages.replies.DeleteHostedContents",
  "me.chats.targetedMessages.replies.GetHostedContentsContent",
  "me.chats.targetedMessages.replies.UpdateHostedContentsContent",
  "me.chats.targetedMessages.replies.DeleteHostedContentsContent",
  "me.chats.targetedMessages.replies.hostedContents.GetCount-4d12",
  "me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction",
  "me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete",
  "me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete",
  "me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction",
  "me.chats.targetedMessages.replies.GetCount-a12f",
  "me.chats.chat.targetedMessages.targetedChatMessage.replies.delta",
  "me.chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote",
  "me.chats.targetedMessages.GetCount-23a1",
  "me.chats.GetCount-aef8",
  "me.chats.getAllMessages",
  "me.chats.getAllRetainedMessages"
] as const;
export type TeamsGraphMeChat02OperationKey = typeof TeamsGraphMeChat02OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphMeChat02OperationPathParamMap {
  "me.chats.permissionGrants.GetCount-9e7e": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.ListPinnedMessages": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.CreatePinnedMessages": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.GetPinnedMessages": { "chat-id": TeamsGraphPathParamValue; "pinnedChatMessageInfo-id": TeamsGraphPathParamValue };
  "me.chats.UpdatePinnedMessages": { "chat-id": TeamsGraphPathParamValue; "pinnedChatMessageInfo-id": TeamsGraphPathParamValue };
  "me.chats.DeletePinnedMessages": { "chat-id": TeamsGraphPathParamValue; "pinnedChatMessageInfo-id": TeamsGraphPathParamValue };
  "me.chats.pinnedMessages.GetMessage": { "chat-id": TeamsGraphPathParamValue; "pinnedChatMessageInfo-id": TeamsGraphPathParamValue };
  "me.chats.pinnedMessages.GetCount-f614": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.ListTabs": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.CreateTabs": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.GetTabs": { "chat-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "me.chats.UpdateTabs": { "chat-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "me.chats.DeleteTabs": { "chat-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "me.chats.tabs.GetTeamsApp": { "chat-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "me.chats.tabs.GetCount-35b1": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.ListTargetedMessages": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.CreateTargetedMessages": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.GetTargetedMessages": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "me.chats.UpdateTargetedMessages": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "me.chats.DeleteTargetedMessages": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.ListHostedContents": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.CreateHostedContents": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.GetHostedContents": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.UpdateHostedContents": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.DeleteHostedContents": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.GetHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.UpdateHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.DeleteHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.hostedContents.GetCount-cf00": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.ListReplies": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.CreateReplies": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.GetReplies": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.UpdateReplies": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.DeleteReplies": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.replies.ListHostedContents": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.replies.CreateHostedContents": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.replies.GetHostedContents": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.replies.UpdateHostedContents": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.replies.DeleteHostedContents": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.replies.GetHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.replies.UpdateHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.replies.DeleteHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.replies.hostedContents.GetCount-4d12": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.replies.GetCount-a12f": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "me.chats.chat.targetedMessages.targetedChatMessage.replies.delta": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "me.chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote": { "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "me.chats.targetedMessages.GetCount-23a1": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.GetCount-aef8": {};
  "me.chats.getAllMessages": {};
  "me.chats.getAllRetainedMessages": {};
}

export interface TeamsGraphMeChat02OperationRequestMap {
  "me.chats.permissionGrants.GetCount-9e7e": TeamsGraphOperationInput<"me.chats.permissionGrants.GetCount-9e7e">;
  "me.chats.ListPinnedMessages": TeamsGraphOperationInput<"me.chats.ListPinnedMessages">;
  "me.chats.CreatePinnedMessages": TeamsGraphOperationInput<"me.chats.CreatePinnedMessages">;
  "me.chats.GetPinnedMessages": TeamsGraphOperationInput<"me.chats.GetPinnedMessages">;
  "me.chats.UpdatePinnedMessages": TeamsGraphOperationInput<"me.chats.UpdatePinnedMessages">;
  "me.chats.DeletePinnedMessages": TeamsGraphOperationInput<"me.chats.DeletePinnedMessages">;
  "me.chats.pinnedMessages.GetMessage": TeamsGraphOperationInput<"me.chats.pinnedMessages.GetMessage">;
  "me.chats.pinnedMessages.GetCount-f614": TeamsGraphOperationInput<"me.chats.pinnedMessages.GetCount-f614">;
  "me.chats.ListTabs": TeamsGraphOperationInput<"me.chats.ListTabs">;
  "me.chats.CreateTabs": TeamsGraphOperationInput<"me.chats.CreateTabs">;
  "me.chats.GetTabs": TeamsGraphOperationInput<"me.chats.GetTabs">;
  "me.chats.UpdateTabs": TeamsGraphOperationInput<"me.chats.UpdateTabs">;
  "me.chats.DeleteTabs": TeamsGraphOperationInput<"me.chats.DeleteTabs">;
  "me.chats.tabs.GetTeamsApp": TeamsGraphOperationInput<"me.chats.tabs.GetTeamsApp">;
  "me.chats.tabs.GetCount-35b1": TeamsGraphOperationInput<"me.chats.tabs.GetCount-35b1">;
  "me.chats.ListTargetedMessages": TeamsGraphOperationInput<"me.chats.ListTargetedMessages">;
  "me.chats.CreateTargetedMessages": TeamsGraphOperationInput<"me.chats.CreateTargetedMessages">;
  "me.chats.GetTargetedMessages": TeamsGraphOperationInput<"me.chats.GetTargetedMessages">;
  "me.chats.UpdateTargetedMessages": TeamsGraphOperationInput<"me.chats.UpdateTargetedMessages">;
  "me.chats.DeleteTargetedMessages": TeamsGraphOperationInput<"me.chats.DeleteTargetedMessages">;
  "me.chats.targetedMessages.ListHostedContents": TeamsGraphOperationInput<"me.chats.targetedMessages.ListHostedContents">;
  "me.chats.targetedMessages.CreateHostedContents": TeamsGraphOperationInput<"me.chats.targetedMessages.CreateHostedContents">;
  "me.chats.targetedMessages.GetHostedContents": TeamsGraphOperationInput<"me.chats.targetedMessages.GetHostedContents">;
  "me.chats.targetedMessages.UpdateHostedContents": TeamsGraphOperationInput<"me.chats.targetedMessages.UpdateHostedContents">;
  "me.chats.targetedMessages.DeleteHostedContents": TeamsGraphOperationInput<"me.chats.targetedMessages.DeleteHostedContents">;
  "me.chats.targetedMessages.GetHostedContentsContent": TeamsGraphOperationInput<"me.chats.targetedMessages.GetHostedContentsContent">;
  "me.chats.targetedMessages.UpdateHostedContentsContent": TeamsGraphOperationInput<"me.chats.targetedMessages.UpdateHostedContentsContent">;
  "me.chats.targetedMessages.DeleteHostedContentsContent": TeamsGraphOperationInput<"me.chats.targetedMessages.DeleteHostedContentsContent">;
  "me.chats.targetedMessages.hostedContents.GetCount-cf00": TeamsGraphOperationInput<"me.chats.targetedMessages.hostedContents.GetCount-cf00">;
  "me.chats.targetedMessages.ListReplies": TeamsGraphOperationInput<"me.chats.targetedMessages.ListReplies">;
  "me.chats.targetedMessages.CreateReplies": TeamsGraphOperationInput<"me.chats.targetedMessages.CreateReplies">;
  "me.chats.targetedMessages.GetReplies": TeamsGraphOperationInput<"me.chats.targetedMessages.GetReplies">;
  "me.chats.targetedMessages.UpdateReplies": TeamsGraphOperationInput<"me.chats.targetedMessages.UpdateReplies">;
  "me.chats.targetedMessages.DeleteReplies": TeamsGraphOperationInput<"me.chats.targetedMessages.DeleteReplies">;
  "me.chats.targetedMessages.replies.ListHostedContents": TeamsGraphOperationInput<"me.chats.targetedMessages.replies.ListHostedContents">;
  "me.chats.targetedMessages.replies.CreateHostedContents": TeamsGraphOperationInput<"me.chats.targetedMessages.replies.CreateHostedContents">;
  "me.chats.targetedMessages.replies.GetHostedContents": TeamsGraphOperationInput<"me.chats.targetedMessages.replies.GetHostedContents">;
  "me.chats.targetedMessages.replies.UpdateHostedContents": TeamsGraphOperationInput<"me.chats.targetedMessages.replies.UpdateHostedContents">;
  "me.chats.targetedMessages.replies.DeleteHostedContents": TeamsGraphOperationInput<"me.chats.targetedMessages.replies.DeleteHostedContents">;
  "me.chats.targetedMessages.replies.GetHostedContentsContent": TeamsGraphOperationInput<"me.chats.targetedMessages.replies.GetHostedContentsContent">;
  "me.chats.targetedMessages.replies.UpdateHostedContentsContent": TeamsGraphOperationInput<"me.chats.targetedMessages.replies.UpdateHostedContentsContent">;
  "me.chats.targetedMessages.replies.DeleteHostedContentsContent": TeamsGraphOperationInput<"me.chats.targetedMessages.replies.DeleteHostedContentsContent">;
  "me.chats.targetedMessages.replies.hostedContents.GetCount-4d12": TeamsGraphOperationInput<"me.chats.targetedMessages.replies.hostedContents.GetCount-4d12">;
  "me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction": TeamsGraphOperationInput<"me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction">;
  "me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete": TeamsGraphOperationInput<"me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete">;
  "me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete">;
  "me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction": TeamsGraphOperationInput<"me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction">;
  "me.chats.targetedMessages.replies.GetCount-a12f": TeamsGraphOperationInput<"me.chats.targetedMessages.replies.GetCount-a12f">;
  "me.chats.chat.targetedMessages.targetedChatMessage.replies.delta": TeamsGraphOperationInput<"me.chats.chat.targetedMessages.targetedChatMessage.replies.delta">;
  "me.chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote": TeamsGraphOperationInput<"me.chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote">;
  "me.chats.targetedMessages.GetCount-23a1": TeamsGraphOperationInput<"me.chats.targetedMessages.GetCount-23a1">;
  "me.chats.GetCount-aef8": TeamsGraphOperationInput<"me.chats.GetCount-aef8">;
  "me.chats.getAllMessages": TeamsGraphOperationInput<"me.chats.getAllMessages">;
  "me.chats.getAllRetainedMessages": TeamsGraphOperationInput<"me.chats.getAllRetainedMessages">;
}

export interface TeamsGraphMeChat02GeneratedClient {
  MeChatsPermissionGrantsGetCount9e7e(...args: TeamsGraphOperationArgs<"me.chats.permissionGrants.GetCount-9e7e">): Promise<TeamsGraphOperationResponseMap["me.chats.permissionGrants.GetCount-9e7e"]>;
  MeChatsListPinnedMessages(...args: TeamsGraphOperationArgs<"me.chats.ListPinnedMessages">): Promise<TeamsGraphOperationResponseMap["me.chats.ListPinnedMessages"]>;
  MeChatsCreatePinnedMessages(...args: TeamsGraphOperationArgs<"me.chats.CreatePinnedMessages">): Promise<TeamsGraphOperationResponseMap["me.chats.CreatePinnedMessages"]>;
  MeChatsGetPinnedMessages(...args: TeamsGraphOperationArgs<"me.chats.GetPinnedMessages">): Promise<TeamsGraphOperationResponseMap["me.chats.GetPinnedMessages"]>;
  MeChatsUpdatePinnedMessages(...args: TeamsGraphOperationArgs<"me.chats.UpdatePinnedMessages">): Promise<TeamsGraphOperationResponseMap["me.chats.UpdatePinnedMessages"]>;
  MeChatsDeletePinnedMessages(...args: TeamsGraphOperationArgs<"me.chats.DeletePinnedMessages">): Promise<TeamsGraphOperationResponseMap["me.chats.DeletePinnedMessages"]>;
  MeChatsPinnedMessagesGetMessage(...args: TeamsGraphOperationArgs<"me.chats.pinnedMessages.GetMessage">): Promise<TeamsGraphOperationResponseMap["me.chats.pinnedMessages.GetMessage"]>;
  MeChatsPinnedMessagesGetCountF614(...args: TeamsGraphOperationArgs<"me.chats.pinnedMessages.GetCount-f614">): Promise<TeamsGraphOperationResponseMap["me.chats.pinnedMessages.GetCount-f614"]>;
  MeChatsListTabs(...args: TeamsGraphOperationArgs<"me.chats.ListTabs">): Promise<TeamsGraphOperationResponseMap["me.chats.ListTabs"]>;
  MeChatsCreateTabs(...args: TeamsGraphOperationArgs<"me.chats.CreateTabs">): Promise<TeamsGraphOperationResponseMap["me.chats.CreateTabs"]>;
  MeChatsGetTabs(...args: TeamsGraphOperationArgs<"me.chats.GetTabs">): Promise<TeamsGraphOperationResponseMap["me.chats.GetTabs"]>;
  MeChatsUpdateTabs(...args: TeamsGraphOperationArgs<"me.chats.UpdateTabs">): Promise<TeamsGraphOperationResponseMap["me.chats.UpdateTabs"]>;
  MeChatsDeleteTabs(...args: TeamsGraphOperationArgs<"me.chats.DeleteTabs">): Promise<TeamsGraphOperationResponseMap["me.chats.DeleteTabs"]>;
  MeChatsTabsGetTeamsApp(...args: TeamsGraphOperationArgs<"me.chats.tabs.GetTeamsApp">): Promise<TeamsGraphOperationResponseMap["me.chats.tabs.GetTeamsApp"]>;
  MeChatsTabsGetCount35b1(...args: TeamsGraphOperationArgs<"me.chats.tabs.GetCount-35b1">): Promise<TeamsGraphOperationResponseMap["me.chats.tabs.GetCount-35b1"]>;
  MeChatsListTargetedMessages(...args: TeamsGraphOperationArgs<"me.chats.ListTargetedMessages">): Promise<TeamsGraphOperationResponseMap["me.chats.ListTargetedMessages"]>;
  MeChatsCreateTargetedMessages(...args: TeamsGraphOperationArgs<"me.chats.CreateTargetedMessages">): Promise<TeamsGraphOperationResponseMap["me.chats.CreateTargetedMessages"]>;
  MeChatsGetTargetedMessages(...args: TeamsGraphOperationArgs<"me.chats.GetTargetedMessages">): Promise<TeamsGraphOperationResponseMap["me.chats.GetTargetedMessages"]>;
  MeChatsUpdateTargetedMessages(...args: TeamsGraphOperationArgs<"me.chats.UpdateTargetedMessages">): Promise<TeamsGraphOperationResponseMap["me.chats.UpdateTargetedMessages"]>;
  MeChatsDeleteTargetedMessages(...args: TeamsGraphOperationArgs<"me.chats.DeleteTargetedMessages">): Promise<TeamsGraphOperationResponseMap["me.chats.DeleteTargetedMessages"]>;
  MeChatsTargetedMessagesListHostedContents(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.ListHostedContents"]>;
  MeChatsTargetedMessagesCreateHostedContents(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.CreateHostedContents"]>;
  MeChatsTargetedMessagesGetHostedContents(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.GetHostedContents"]>;
  MeChatsTargetedMessagesUpdateHostedContents(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.UpdateHostedContents"]>;
  MeChatsTargetedMessagesDeleteHostedContents(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.DeleteHostedContents"]>;
  MeChatsTargetedMessagesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.GetHostedContentsContent"]>;
  MeChatsTargetedMessagesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.UpdateHostedContentsContent"]>;
  MeChatsTargetedMessagesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.DeleteHostedContentsContent"]>;
  MeChatsTargetedMessagesHostedContentsGetCountCf00(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.hostedContents.GetCount-cf00">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.hostedContents.GetCount-cf00"]>;
  MeChatsTargetedMessagesListReplies(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.ListReplies">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.ListReplies"]>;
  MeChatsTargetedMessagesCreateReplies(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.CreateReplies">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.CreateReplies"]>;
  MeChatsTargetedMessagesGetReplies(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.GetReplies">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.GetReplies"]>;
  MeChatsTargetedMessagesUpdateReplies(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.UpdateReplies">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.UpdateReplies"]>;
  MeChatsTargetedMessagesDeleteReplies(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.DeleteReplies">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.DeleteReplies"]>;
  MeChatsTargetedMessagesRepliesListHostedContents(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.replies.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.replies.ListHostedContents"]>;
  MeChatsTargetedMessagesRepliesCreateHostedContents(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.replies.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.replies.CreateHostedContents"]>;
  MeChatsTargetedMessagesRepliesGetHostedContents(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.replies.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.replies.GetHostedContents"]>;
  MeChatsTargetedMessagesRepliesUpdateHostedContents(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.replies.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.replies.UpdateHostedContents"]>;
  MeChatsTargetedMessagesRepliesDeleteHostedContents(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.replies.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.replies.DeleteHostedContents"]>;
  MeChatsTargetedMessagesRepliesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.replies.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.replies.GetHostedContentsContent"]>;
  MeChatsTargetedMessagesRepliesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.replies.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.replies.UpdateHostedContentsContent"]>;
  MeChatsTargetedMessagesRepliesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.replies.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.replies.DeleteHostedContentsContent"]>;
  MeChatsTargetedMessagesRepliesHostedContentsGetCount4d12(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.replies.hostedContents.GetCount-4d12">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.replies.hostedContents.GetCount-4d12"]>;
  MeChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction"]>;
  MeChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete"]>;
  MeChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete"]>;
  MeChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction"]>;
  MeChatsTargetedMessagesRepliesGetCountA12f(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.replies.GetCount-a12f">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.replies.GetCount-a12f"]>;
  MeChatsChatTargetedMessagesTargetedChatMessageRepliesDelta(...args: TeamsGraphOperationArgs<"me.chats.chat.targetedMessages.targetedChatMessage.replies.delta">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.targetedMessages.targetedChatMessage.replies.delta"]>;
  MeChatsChatTargetedMessagesTargetedChatMessageRepliesReplyWithQuote(...args: TeamsGraphOperationArgs<"me.chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote"]>;
  MeChatsTargetedMessagesGetCount23a1(...args: TeamsGraphOperationArgs<"me.chats.targetedMessages.GetCount-23a1">): Promise<TeamsGraphOperationResponseMap["me.chats.targetedMessages.GetCount-23a1"]>;
  MeChatsGetCountAef8(...args: TeamsGraphOperationArgs<"me.chats.GetCount-aef8">): Promise<TeamsGraphOperationResponseMap["me.chats.GetCount-aef8"]>;
  MeChatsGetAllMessages(...args: TeamsGraphOperationArgs<"me.chats.getAllMessages">): Promise<TeamsGraphOperationResponseMap["me.chats.getAllMessages"]>;
  MeChatsGetAllRetainedMessages(...args: TeamsGraphOperationArgs<"me.chats.getAllRetainedMessages">): Promise<TeamsGraphOperationResponseMap["me.chats.getAllRetainedMessages"]>;
}

export const TeamsGraphMeChat02GeneratedFunctionNames = [
  "MeChatsPermissionGrantsGetCount9e7e",
  "MeChatsListPinnedMessages",
  "MeChatsCreatePinnedMessages",
  "MeChatsGetPinnedMessages",
  "MeChatsUpdatePinnedMessages",
  "MeChatsDeletePinnedMessages",
  "MeChatsPinnedMessagesGetMessage",
  "MeChatsPinnedMessagesGetCountF614",
  "MeChatsListTabs",
  "MeChatsCreateTabs",
  "MeChatsGetTabs",
  "MeChatsUpdateTabs",
  "MeChatsDeleteTabs",
  "MeChatsTabsGetTeamsApp",
  "MeChatsTabsGetCount35b1",
  "MeChatsListTargetedMessages",
  "MeChatsCreateTargetedMessages",
  "MeChatsGetTargetedMessages",
  "MeChatsUpdateTargetedMessages",
  "MeChatsDeleteTargetedMessages",
  "MeChatsTargetedMessagesListHostedContents",
  "MeChatsTargetedMessagesCreateHostedContents",
  "MeChatsTargetedMessagesGetHostedContents",
  "MeChatsTargetedMessagesUpdateHostedContents",
  "MeChatsTargetedMessagesDeleteHostedContents",
  "MeChatsTargetedMessagesGetHostedContentsContent",
  "MeChatsTargetedMessagesUpdateHostedContentsContent",
  "MeChatsTargetedMessagesDeleteHostedContentsContent",
  "MeChatsTargetedMessagesHostedContentsGetCountCf00",
  "MeChatsTargetedMessagesListReplies",
  "MeChatsTargetedMessagesCreateReplies",
  "MeChatsTargetedMessagesGetReplies",
  "MeChatsTargetedMessagesUpdateReplies",
  "MeChatsTargetedMessagesDeleteReplies",
  "MeChatsTargetedMessagesRepliesListHostedContents",
  "MeChatsTargetedMessagesRepliesCreateHostedContents",
  "MeChatsTargetedMessagesRepliesGetHostedContents",
  "MeChatsTargetedMessagesRepliesUpdateHostedContents",
  "MeChatsTargetedMessagesRepliesDeleteHostedContents",
  "MeChatsTargetedMessagesRepliesGetHostedContentsContent",
  "MeChatsTargetedMessagesRepliesUpdateHostedContentsContent",
  "MeChatsTargetedMessagesRepliesDeleteHostedContentsContent",
  "MeChatsTargetedMessagesRepliesHostedContentsGetCount4d12",
  "MeChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageSetReaction",
  "MeChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageSoftDelete",
  "MeChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageUndoSoftDelete",
  "MeChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageUnsetReaction",
  "MeChatsTargetedMessagesRepliesGetCountA12f",
  "MeChatsChatTargetedMessagesTargetedChatMessageRepliesDelta",
  "MeChatsChatTargetedMessagesTargetedChatMessageRepliesReplyWithQuote",
  "MeChatsTargetedMessagesGetCount23a1",
  "MeChatsGetCountAef8",
  "MeChatsGetAllMessages",
  "MeChatsGetAllRetainedMessages"
] as const satisfies readonly (keyof TeamsGraphMeChat02GeneratedClient)[];

export function createTeamsGraphMeChat02GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphMeChat02GeneratedClient {
  return {
    MeChatsPermissionGrantsGetCount9e7e: (...args) => callOperation("me.chats.permissionGrants.GetCount-9e7e", ...(args as TeamsGraphOperationArgs<"me.chats.permissionGrants.GetCount-9e7e">)),
    MeChatsListPinnedMessages: (...args) => callOperation("me.chats.ListPinnedMessages", ...(args as TeamsGraphOperationArgs<"me.chats.ListPinnedMessages">)),
    MeChatsCreatePinnedMessages: (...args) => callOperation("me.chats.CreatePinnedMessages", ...(args as TeamsGraphOperationArgs<"me.chats.CreatePinnedMessages">)),
    MeChatsGetPinnedMessages: (...args) => callOperation("me.chats.GetPinnedMessages", ...(args as TeamsGraphOperationArgs<"me.chats.GetPinnedMessages">)),
    MeChatsUpdatePinnedMessages: (...args) => callOperation("me.chats.UpdatePinnedMessages", ...(args as TeamsGraphOperationArgs<"me.chats.UpdatePinnedMessages">)),
    MeChatsDeletePinnedMessages: (...args) => callOperation("me.chats.DeletePinnedMessages", ...(args as TeamsGraphOperationArgs<"me.chats.DeletePinnedMessages">)),
    MeChatsPinnedMessagesGetMessage: (...args) => callOperation("me.chats.pinnedMessages.GetMessage", ...(args as TeamsGraphOperationArgs<"me.chats.pinnedMessages.GetMessage">)),
    MeChatsPinnedMessagesGetCountF614: (...args) => callOperation("me.chats.pinnedMessages.GetCount-f614", ...(args as TeamsGraphOperationArgs<"me.chats.pinnedMessages.GetCount-f614">)),
    MeChatsListTabs: (...args) => callOperation("me.chats.ListTabs", ...(args as TeamsGraphOperationArgs<"me.chats.ListTabs">)),
    MeChatsCreateTabs: (...args) => callOperation("me.chats.CreateTabs", ...(args as TeamsGraphOperationArgs<"me.chats.CreateTabs">)),
    MeChatsGetTabs: (...args) => callOperation("me.chats.GetTabs", ...(args as TeamsGraphOperationArgs<"me.chats.GetTabs">)),
    MeChatsUpdateTabs: (...args) => callOperation("me.chats.UpdateTabs", ...(args as TeamsGraphOperationArgs<"me.chats.UpdateTabs">)),
    MeChatsDeleteTabs: (...args) => callOperation("me.chats.DeleteTabs", ...(args as TeamsGraphOperationArgs<"me.chats.DeleteTabs">)),
    MeChatsTabsGetTeamsApp: (...args) => callOperation("me.chats.tabs.GetTeamsApp", ...(args as TeamsGraphOperationArgs<"me.chats.tabs.GetTeamsApp">)),
    MeChatsTabsGetCount35b1: (...args) => callOperation("me.chats.tabs.GetCount-35b1", ...(args as TeamsGraphOperationArgs<"me.chats.tabs.GetCount-35b1">)),
    MeChatsListTargetedMessages: (...args) => callOperation("me.chats.ListTargetedMessages", ...(args as TeamsGraphOperationArgs<"me.chats.ListTargetedMessages">)),
    MeChatsCreateTargetedMessages: (...args) => callOperation("me.chats.CreateTargetedMessages", ...(args as TeamsGraphOperationArgs<"me.chats.CreateTargetedMessages">)),
    MeChatsGetTargetedMessages: (...args) => callOperation("me.chats.GetTargetedMessages", ...(args as TeamsGraphOperationArgs<"me.chats.GetTargetedMessages">)),
    MeChatsUpdateTargetedMessages: (...args) => callOperation("me.chats.UpdateTargetedMessages", ...(args as TeamsGraphOperationArgs<"me.chats.UpdateTargetedMessages">)),
    MeChatsDeleteTargetedMessages: (...args) => callOperation("me.chats.DeleteTargetedMessages", ...(args as TeamsGraphOperationArgs<"me.chats.DeleteTargetedMessages">)),
    MeChatsTargetedMessagesListHostedContents: (...args) => callOperation("me.chats.targetedMessages.ListHostedContents", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.ListHostedContents">)),
    MeChatsTargetedMessagesCreateHostedContents: (...args) => callOperation("me.chats.targetedMessages.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.CreateHostedContents">)),
    MeChatsTargetedMessagesGetHostedContents: (...args) => callOperation("me.chats.targetedMessages.GetHostedContents", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.GetHostedContents">)),
    MeChatsTargetedMessagesUpdateHostedContents: (...args) => callOperation("me.chats.targetedMessages.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.UpdateHostedContents">)),
    MeChatsTargetedMessagesDeleteHostedContents: (...args) => callOperation("me.chats.targetedMessages.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.DeleteHostedContents">)),
    MeChatsTargetedMessagesGetHostedContentsContent: (...args) => callOperation("me.chats.targetedMessages.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.GetHostedContentsContent">)),
    MeChatsTargetedMessagesUpdateHostedContentsContent: (...args) => callOperation("me.chats.targetedMessages.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.UpdateHostedContentsContent">)),
    MeChatsTargetedMessagesDeleteHostedContentsContent: (...args) => callOperation("me.chats.targetedMessages.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.DeleteHostedContentsContent">)),
    MeChatsTargetedMessagesHostedContentsGetCountCf00: (...args) => callOperation("me.chats.targetedMessages.hostedContents.GetCount-cf00", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.hostedContents.GetCount-cf00">)),
    MeChatsTargetedMessagesListReplies: (...args) => callOperation("me.chats.targetedMessages.ListReplies", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.ListReplies">)),
    MeChatsTargetedMessagesCreateReplies: (...args) => callOperation("me.chats.targetedMessages.CreateReplies", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.CreateReplies">)),
    MeChatsTargetedMessagesGetReplies: (...args) => callOperation("me.chats.targetedMessages.GetReplies", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.GetReplies">)),
    MeChatsTargetedMessagesUpdateReplies: (...args) => callOperation("me.chats.targetedMessages.UpdateReplies", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.UpdateReplies">)),
    MeChatsTargetedMessagesDeleteReplies: (...args) => callOperation("me.chats.targetedMessages.DeleteReplies", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.DeleteReplies">)),
    MeChatsTargetedMessagesRepliesListHostedContents: (...args) => callOperation("me.chats.targetedMessages.replies.ListHostedContents", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.replies.ListHostedContents">)),
    MeChatsTargetedMessagesRepliesCreateHostedContents: (...args) => callOperation("me.chats.targetedMessages.replies.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.replies.CreateHostedContents">)),
    MeChatsTargetedMessagesRepliesGetHostedContents: (...args) => callOperation("me.chats.targetedMessages.replies.GetHostedContents", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.replies.GetHostedContents">)),
    MeChatsTargetedMessagesRepliesUpdateHostedContents: (...args) => callOperation("me.chats.targetedMessages.replies.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.replies.UpdateHostedContents">)),
    MeChatsTargetedMessagesRepliesDeleteHostedContents: (...args) => callOperation("me.chats.targetedMessages.replies.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.replies.DeleteHostedContents">)),
    MeChatsTargetedMessagesRepliesGetHostedContentsContent: (...args) => callOperation("me.chats.targetedMessages.replies.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.replies.GetHostedContentsContent">)),
    MeChatsTargetedMessagesRepliesUpdateHostedContentsContent: (...args) => callOperation("me.chats.targetedMessages.replies.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.replies.UpdateHostedContentsContent">)),
    MeChatsTargetedMessagesRepliesDeleteHostedContentsContent: (...args) => callOperation("me.chats.targetedMessages.replies.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.replies.DeleteHostedContentsContent">)),
    MeChatsTargetedMessagesRepliesHostedContentsGetCount4d12: (...args) => callOperation("me.chats.targetedMessages.replies.hostedContents.GetCount-4d12", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.replies.hostedContents.GetCount-4d12">)),
    MeChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageSetReaction: (...args) => callOperation("me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction">)),
    MeChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageSoftDelete: (...args) => callOperation("me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete">)),
    MeChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageUndoSoftDelete: (...args) => callOperation("me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete">)),
    MeChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageUnsetReaction: (...args) => callOperation("me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"me.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction">)),
    MeChatsTargetedMessagesRepliesGetCountA12f: (...args) => callOperation("me.chats.targetedMessages.replies.GetCount-a12f", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.replies.GetCount-a12f">)),
    MeChatsChatTargetedMessagesTargetedChatMessageRepliesDelta: (...args) => callOperation("me.chats.chat.targetedMessages.targetedChatMessage.replies.delta", ...(args as TeamsGraphOperationArgs<"me.chats.chat.targetedMessages.targetedChatMessage.replies.delta">)),
    MeChatsChatTargetedMessagesTargetedChatMessageRepliesReplyWithQuote: (...args) => callOperation("me.chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote", ...(args as TeamsGraphOperationArgs<"me.chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote">)),
    MeChatsTargetedMessagesGetCount23a1: (...args) => callOperation("me.chats.targetedMessages.GetCount-23a1", ...(args as TeamsGraphOperationArgs<"me.chats.targetedMessages.GetCount-23a1">)),
    MeChatsGetCountAef8: (...args) => callOperation("me.chats.GetCount-aef8", ...(args as TeamsGraphOperationArgs<"me.chats.GetCount-aef8">)),
    MeChatsGetAllMessages: (...args) => callOperation("me.chats.getAllMessages", ...(args as TeamsGraphOperationArgs<"me.chats.getAllMessages">)),
    MeChatsGetAllRetainedMessages: (...args) => callOperation("me.chats.getAllRetainedMessages", ...(args as TeamsGraphOperationArgs<"me.chats.getAllRetainedMessages">)),
  };
}
