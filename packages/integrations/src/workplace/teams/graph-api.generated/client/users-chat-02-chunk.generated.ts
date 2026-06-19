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
export const TeamsGraphUsersChat02OperationKeys = [
  "users.chats.permissionGrants.GetCount-8aa5",
  "users.chats.ListPinnedMessages",
  "users.chats.CreatePinnedMessages",
  "users.chats.GetPinnedMessages",
  "users.chats.UpdatePinnedMessages",
  "users.chats.DeletePinnedMessages",
  "users.chats.pinnedMessages.GetMessage",
  "users.chats.pinnedMessages.GetCount-bc2d",
  "users.chats.ListTabs",
  "users.chats.CreateTabs",
  "users.chats.GetTabs",
  "users.chats.UpdateTabs",
  "users.chats.DeleteTabs",
  "users.chats.tabs.GetTeamsApp",
  "users.chats.tabs.GetCount-bf26",
  "users.chats.ListTargetedMessages",
  "users.chats.CreateTargetedMessages",
  "users.chats.GetTargetedMessages",
  "users.chats.UpdateTargetedMessages",
  "users.chats.DeleteTargetedMessages",
  "users.chats.targetedMessages.ListHostedContents",
  "users.chats.targetedMessages.CreateHostedContents",
  "users.chats.targetedMessages.GetHostedContents",
  "users.chats.targetedMessages.UpdateHostedContents",
  "users.chats.targetedMessages.DeleteHostedContents",
  "users.chats.targetedMessages.GetHostedContentsContent",
  "users.chats.targetedMessages.UpdateHostedContentsContent",
  "users.chats.targetedMessages.DeleteHostedContentsContent",
  "users.chats.targetedMessages.hostedContents.GetCount-94c1",
  "users.chats.targetedMessages.ListReplies",
  "users.chats.targetedMessages.CreateReplies",
  "users.chats.targetedMessages.GetReplies",
  "users.chats.targetedMessages.UpdateReplies",
  "users.chats.targetedMessages.DeleteReplies",
  "users.chats.targetedMessages.replies.ListHostedContents",
  "users.chats.targetedMessages.replies.CreateHostedContents",
  "users.chats.targetedMessages.replies.GetHostedContents",
  "users.chats.targetedMessages.replies.UpdateHostedContents",
  "users.chats.targetedMessages.replies.DeleteHostedContents",
  "users.chats.targetedMessages.replies.GetHostedContentsContent",
  "users.chats.targetedMessages.replies.UpdateHostedContentsContent",
  "users.chats.targetedMessages.replies.DeleteHostedContentsContent",
  "users.chats.targetedMessages.replies.hostedContents.GetCount-bec2",
  "users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction",
  "users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete",
  "users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete",
  "users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction",
  "users.chats.targetedMessages.replies.GetCount-b067",
  "users.user.chats.chat.targetedMessages.targetedChatMessage.replies.delta",
  "users.user.chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote",
  "users.chats.targetedMessages.GetCount-23e7",
  "users.chats.GetCount-38c2",
  "users.user.chats.getAllMessages",
  "users.user.chats.getAllRetainedMessages"
] as const;
export type TeamsGraphUsersChat02OperationKey = typeof TeamsGraphUsersChat02OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphUsersChat02OperationPathParamMap {
  "users.chats.permissionGrants.GetCount-8aa5": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.ListPinnedMessages": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.CreatePinnedMessages": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.GetPinnedMessages": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "pinnedChatMessageInfo-id": TeamsGraphPathParamValue };
  "users.chats.UpdatePinnedMessages": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "pinnedChatMessageInfo-id": TeamsGraphPathParamValue };
  "users.chats.DeletePinnedMessages": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "pinnedChatMessageInfo-id": TeamsGraphPathParamValue };
  "users.chats.pinnedMessages.GetMessage": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "pinnedChatMessageInfo-id": TeamsGraphPathParamValue };
  "users.chats.pinnedMessages.GetCount-bc2d": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.ListTabs": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.CreateTabs": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.GetTabs": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "users.chats.UpdateTabs": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "users.chats.DeleteTabs": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "users.chats.tabs.GetTeamsApp": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "users.chats.tabs.GetCount-bf26": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.ListTargetedMessages": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.CreateTargetedMessages": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.GetTargetedMessages": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "users.chats.UpdateTargetedMessages": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "users.chats.DeleteTargetedMessages": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.ListHostedContents": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.CreateHostedContents": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.GetHostedContents": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.UpdateHostedContents": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.DeleteHostedContents": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.GetHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.UpdateHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.DeleteHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.hostedContents.GetCount-94c1": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.ListReplies": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.CreateReplies": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.GetReplies": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.UpdateReplies": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.DeleteReplies": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.replies.ListHostedContents": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.replies.CreateHostedContents": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.replies.GetHostedContents": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.replies.UpdateHostedContents": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.replies.DeleteHostedContents": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.replies.GetHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.replies.UpdateHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.replies.DeleteHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.replies.hostedContents.GetCount-bec2": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.replies.GetCount-b067": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.targetedMessages.targetedChatMessage.replies.delta": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "targetedChatMessage-id": TeamsGraphPathParamValue };
  "users.chats.targetedMessages.GetCount-23e7": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.GetCount-38c2": { "user-id": TeamsGraphPathParamValue };
  "users.user.chats.getAllMessages": { "user-id": TeamsGraphPathParamValue };
  "users.user.chats.getAllRetainedMessages": { "user-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphUsersChat02OperationRequestMap {
  "users.chats.permissionGrants.GetCount-8aa5": TeamsGraphOperationInput<"users.chats.permissionGrants.GetCount-8aa5">;
  "users.chats.ListPinnedMessages": TeamsGraphOperationInput<"users.chats.ListPinnedMessages">;
  "users.chats.CreatePinnedMessages": TeamsGraphOperationInput<"users.chats.CreatePinnedMessages">;
  "users.chats.GetPinnedMessages": TeamsGraphOperationInput<"users.chats.GetPinnedMessages">;
  "users.chats.UpdatePinnedMessages": TeamsGraphOperationInput<"users.chats.UpdatePinnedMessages">;
  "users.chats.DeletePinnedMessages": TeamsGraphOperationInput<"users.chats.DeletePinnedMessages">;
  "users.chats.pinnedMessages.GetMessage": TeamsGraphOperationInput<"users.chats.pinnedMessages.GetMessage">;
  "users.chats.pinnedMessages.GetCount-bc2d": TeamsGraphOperationInput<"users.chats.pinnedMessages.GetCount-bc2d">;
  "users.chats.ListTabs": TeamsGraphOperationInput<"users.chats.ListTabs">;
  "users.chats.CreateTabs": TeamsGraphOperationInput<"users.chats.CreateTabs">;
  "users.chats.GetTabs": TeamsGraphOperationInput<"users.chats.GetTabs">;
  "users.chats.UpdateTabs": TeamsGraphOperationInput<"users.chats.UpdateTabs">;
  "users.chats.DeleteTabs": TeamsGraphOperationInput<"users.chats.DeleteTabs">;
  "users.chats.tabs.GetTeamsApp": TeamsGraphOperationInput<"users.chats.tabs.GetTeamsApp">;
  "users.chats.tabs.GetCount-bf26": TeamsGraphOperationInput<"users.chats.tabs.GetCount-bf26">;
  "users.chats.ListTargetedMessages": TeamsGraphOperationInput<"users.chats.ListTargetedMessages">;
  "users.chats.CreateTargetedMessages": TeamsGraphOperationInput<"users.chats.CreateTargetedMessages">;
  "users.chats.GetTargetedMessages": TeamsGraphOperationInput<"users.chats.GetTargetedMessages">;
  "users.chats.UpdateTargetedMessages": TeamsGraphOperationInput<"users.chats.UpdateTargetedMessages">;
  "users.chats.DeleteTargetedMessages": TeamsGraphOperationInput<"users.chats.DeleteTargetedMessages">;
  "users.chats.targetedMessages.ListHostedContents": TeamsGraphOperationInput<"users.chats.targetedMessages.ListHostedContents">;
  "users.chats.targetedMessages.CreateHostedContents": TeamsGraphOperationInput<"users.chats.targetedMessages.CreateHostedContents">;
  "users.chats.targetedMessages.GetHostedContents": TeamsGraphOperationInput<"users.chats.targetedMessages.GetHostedContents">;
  "users.chats.targetedMessages.UpdateHostedContents": TeamsGraphOperationInput<"users.chats.targetedMessages.UpdateHostedContents">;
  "users.chats.targetedMessages.DeleteHostedContents": TeamsGraphOperationInput<"users.chats.targetedMessages.DeleteHostedContents">;
  "users.chats.targetedMessages.GetHostedContentsContent": TeamsGraphOperationInput<"users.chats.targetedMessages.GetHostedContentsContent">;
  "users.chats.targetedMessages.UpdateHostedContentsContent": TeamsGraphOperationInput<"users.chats.targetedMessages.UpdateHostedContentsContent">;
  "users.chats.targetedMessages.DeleteHostedContentsContent": TeamsGraphOperationInput<"users.chats.targetedMessages.DeleteHostedContentsContent">;
  "users.chats.targetedMessages.hostedContents.GetCount-94c1": TeamsGraphOperationInput<"users.chats.targetedMessages.hostedContents.GetCount-94c1">;
  "users.chats.targetedMessages.ListReplies": TeamsGraphOperationInput<"users.chats.targetedMessages.ListReplies">;
  "users.chats.targetedMessages.CreateReplies": TeamsGraphOperationInput<"users.chats.targetedMessages.CreateReplies">;
  "users.chats.targetedMessages.GetReplies": TeamsGraphOperationInput<"users.chats.targetedMessages.GetReplies">;
  "users.chats.targetedMessages.UpdateReplies": TeamsGraphOperationInput<"users.chats.targetedMessages.UpdateReplies">;
  "users.chats.targetedMessages.DeleteReplies": TeamsGraphOperationInput<"users.chats.targetedMessages.DeleteReplies">;
  "users.chats.targetedMessages.replies.ListHostedContents": TeamsGraphOperationInput<"users.chats.targetedMessages.replies.ListHostedContents">;
  "users.chats.targetedMessages.replies.CreateHostedContents": TeamsGraphOperationInput<"users.chats.targetedMessages.replies.CreateHostedContents">;
  "users.chats.targetedMessages.replies.GetHostedContents": TeamsGraphOperationInput<"users.chats.targetedMessages.replies.GetHostedContents">;
  "users.chats.targetedMessages.replies.UpdateHostedContents": TeamsGraphOperationInput<"users.chats.targetedMessages.replies.UpdateHostedContents">;
  "users.chats.targetedMessages.replies.DeleteHostedContents": TeamsGraphOperationInput<"users.chats.targetedMessages.replies.DeleteHostedContents">;
  "users.chats.targetedMessages.replies.GetHostedContentsContent": TeamsGraphOperationInput<"users.chats.targetedMessages.replies.GetHostedContentsContent">;
  "users.chats.targetedMessages.replies.UpdateHostedContentsContent": TeamsGraphOperationInput<"users.chats.targetedMessages.replies.UpdateHostedContentsContent">;
  "users.chats.targetedMessages.replies.DeleteHostedContentsContent": TeamsGraphOperationInput<"users.chats.targetedMessages.replies.DeleteHostedContentsContent">;
  "users.chats.targetedMessages.replies.hostedContents.GetCount-bec2": TeamsGraphOperationInput<"users.chats.targetedMessages.replies.hostedContents.GetCount-bec2">;
  "users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction": TeamsGraphOperationInput<"users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction">;
  "users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete": TeamsGraphOperationInput<"users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete">;
  "users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete">;
  "users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction": TeamsGraphOperationInput<"users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction">;
  "users.chats.targetedMessages.replies.GetCount-b067": TeamsGraphOperationInput<"users.chats.targetedMessages.replies.GetCount-b067">;
  "users.user.chats.chat.targetedMessages.targetedChatMessage.replies.delta": TeamsGraphOperationInput<"users.user.chats.chat.targetedMessages.targetedChatMessage.replies.delta">;
  "users.user.chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote": TeamsGraphOperationInput<"users.user.chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote">;
  "users.chats.targetedMessages.GetCount-23e7": TeamsGraphOperationInput<"users.chats.targetedMessages.GetCount-23e7">;
  "users.chats.GetCount-38c2": TeamsGraphOperationInput<"users.chats.GetCount-38c2">;
  "users.user.chats.getAllMessages": TeamsGraphOperationInput<"users.user.chats.getAllMessages">;
  "users.user.chats.getAllRetainedMessages": TeamsGraphOperationInput<"users.user.chats.getAllRetainedMessages">;
}

export interface TeamsGraphUsersChat02GeneratedClient {
  UsersChatsPermissionGrantsGetCount8aa5(...args: TeamsGraphOperationArgs<"users.chats.permissionGrants.GetCount-8aa5">): Promise<TeamsGraphOperationResponseMap["users.chats.permissionGrants.GetCount-8aa5"]>;
  UsersChatsListPinnedMessages(...args: TeamsGraphOperationArgs<"users.chats.ListPinnedMessages">): Promise<TeamsGraphOperationResponseMap["users.chats.ListPinnedMessages"]>;
  UsersChatsCreatePinnedMessages(...args: TeamsGraphOperationArgs<"users.chats.CreatePinnedMessages">): Promise<TeamsGraphOperationResponseMap["users.chats.CreatePinnedMessages"]>;
  UsersChatsGetPinnedMessages(...args: TeamsGraphOperationArgs<"users.chats.GetPinnedMessages">): Promise<TeamsGraphOperationResponseMap["users.chats.GetPinnedMessages"]>;
  UsersChatsUpdatePinnedMessages(...args: TeamsGraphOperationArgs<"users.chats.UpdatePinnedMessages">): Promise<TeamsGraphOperationResponseMap["users.chats.UpdatePinnedMessages"]>;
  UsersChatsDeletePinnedMessages(...args: TeamsGraphOperationArgs<"users.chats.DeletePinnedMessages">): Promise<TeamsGraphOperationResponseMap["users.chats.DeletePinnedMessages"]>;
  UsersChatsPinnedMessagesGetMessage(...args: TeamsGraphOperationArgs<"users.chats.pinnedMessages.GetMessage">): Promise<TeamsGraphOperationResponseMap["users.chats.pinnedMessages.GetMessage"]>;
  UsersChatsPinnedMessagesGetCountBc2d(...args: TeamsGraphOperationArgs<"users.chats.pinnedMessages.GetCount-bc2d">): Promise<TeamsGraphOperationResponseMap["users.chats.pinnedMessages.GetCount-bc2d"]>;
  UsersChatsListTabs(...args: TeamsGraphOperationArgs<"users.chats.ListTabs">): Promise<TeamsGraphOperationResponseMap["users.chats.ListTabs"]>;
  UsersChatsCreateTabs(...args: TeamsGraphOperationArgs<"users.chats.CreateTabs">): Promise<TeamsGraphOperationResponseMap["users.chats.CreateTabs"]>;
  UsersChatsGetTabs(...args: TeamsGraphOperationArgs<"users.chats.GetTabs">): Promise<TeamsGraphOperationResponseMap["users.chats.GetTabs"]>;
  UsersChatsUpdateTabs(...args: TeamsGraphOperationArgs<"users.chats.UpdateTabs">): Promise<TeamsGraphOperationResponseMap["users.chats.UpdateTabs"]>;
  UsersChatsDeleteTabs(...args: TeamsGraphOperationArgs<"users.chats.DeleteTabs">): Promise<TeamsGraphOperationResponseMap["users.chats.DeleteTabs"]>;
  UsersChatsTabsGetTeamsApp(...args: TeamsGraphOperationArgs<"users.chats.tabs.GetTeamsApp">): Promise<TeamsGraphOperationResponseMap["users.chats.tabs.GetTeamsApp"]>;
  UsersChatsTabsGetCountBf26(...args: TeamsGraphOperationArgs<"users.chats.tabs.GetCount-bf26">): Promise<TeamsGraphOperationResponseMap["users.chats.tabs.GetCount-bf26"]>;
  UsersChatsListTargetedMessages(...args: TeamsGraphOperationArgs<"users.chats.ListTargetedMessages">): Promise<TeamsGraphOperationResponseMap["users.chats.ListTargetedMessages"]>;
  UsersChatsCreateTargetedMessages(...args: TeamsGraphOperationArgs<"users.chats.CreateTargetedMessages">): Promise<TeamsGraphOperationResponseMap["users.chats.CreateTargetedMessages"]>;
  UsersChatsGetTargetedMessages(...args: TeamsGraphOperationArgs<"users.chats.GetTargetedMessages">): Promise<TeamsGraphOperationResponseMap["users.chats.GetTargetedMessages"]>;
  UsersChatsUpdateTargetedMessages(...args: TeamsGraphOperationArgs<"users.chats.UpdateTargetedMessages">): Promise<TeamsGraphOperationResponseMap["users.chats.UpdateTargetedMessages"]>;
  UsersChatsDeleteTargetedMessages(...args: TeamsGraphOperationArgs<"users.chats.DeleteTargetedMessages">): Promise<TeamsGraphOperationResponseMap["users.chats.DeleteTargetedMessages"]>;
  UsersChatsTargetedMessagesListHostedContents(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.ListHostedContents"]>;
  UsersChatsTargetedMessagesCreateHostedContents(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.CreateHostedContents"]>;
  UsersChatsTargetedMessagesGetHostedContents(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.GetHostedContents"]>;
  UsersChatsTargetedMessagesUpdateHostedContents(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.UpdateHostedContents"]>;
  UsersChatsTargetedMessagesDeleteHostedContents(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.DeleteHostedContents"]>;
  UsersChatsTargetedMessagesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.GetHostedContentsContent"]>;
  UsersChatsTargetedMessagesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.UpdateHostedContentsContent"]>;
  UsersChatsTargetedMessagesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.DeleteHostedContentsContent"]>;
  UsersChatsTargetedMessagesHostedContentsGetCount94c1(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.hostedContents.GetCount-94c1">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.hostedContents.GetCount-94c1"]>;
  UsersChatsTargetedMessagesListReplies(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.ListReplies">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.ListReplies"]>;
  UsersChatsTargetedMessagesCreateReplies(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.CreateReplies">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.CreateReplies"]>;
  UsersChatsTargetedMessagesGetReplies(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.GetReplies">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.GetReplies"]>;
  UsersChatsTargetedMessagesUpdateReplies(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.UpdateReplies">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.UpdateReplies"]>;
  UsersChatsTargetedMessagesDeleteReplies(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.DeleteReplies">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.DeleteReplies"]>;
  UsersChatsTargetedMessagesRepliesListHostedContents(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.replies.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.replies.ListHostedContents"]>;
  UsersChatsTargetedMessagesRepliesCreateHostedContents(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.replies.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.replies.CreateHostedContents"]>;
  UsersChatsTargetedMessagesRepliesGetHostedContents(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.replies.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.replies.GetHostedContents"]>;
  UsersChatsTargetedMessagesRepliesUpdateHostedContents(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.replies.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.replies.UpdateHostedContents"]>;
  UsersChatsTargetedMessagesRepliesDeleteHostedContents(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.replies.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.replies.DeleteHostedContents"]>;
  UsersChatsTargetedMessagesRepliesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.replies.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.replies.GetHostedContentsContent"]>;
  UsersChatsTargetedMessagesRepliesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.replies.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.replies.UpdateHostedContentsContent"]>;
  UsersChatsTargetedMessagesRepliesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.replies.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.replies.DeleteHostedContentsContent"]>;
  UsersChatsTargetedMessagesRepliesHostedContentsGetCountBec2(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.replies.hostedContents.GetCount-bec2">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.replies.hostedContents.GetCount-bec2"]>;
  UsersUserChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction"]>;
  UsersUserChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete"]>;
  UsersUserChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete"]>;
  UsersUserChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction"]>;
  UsersChatsTargetedMessagesRepliesGetCountB067(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.replies.GetCount-b067">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.replies.GetCount-b067"]>;
  UsersUserChatsChatTargetedMessagesTargetedChatMessageRepliesDelta(...args: TeamsGraphOperationArgs<"users.user.chats.chat.targetedMessages.targetedChatMessage.replies.delta">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.targetedMessages.targetedChatMessage.replies.delta"]>;
  UsersUserChatsChatTargetedMessagesTargetedChatMessageRepliesReplyWithQuote(...args: TeamsGraphOperationArgs<"users.user.chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote"]>;
  UsersChatsTargetedMessagesGetCount23e7(...args: TeamsGraphOperationArgs<"users.chats.targetedMessages.GetCount-23e7">): Promise<TeamsGraphOperationResponseMap["users.chats.targetedMessages.GetCount-23e7"]>;
  UsersChatsGetCount38c2(...args: TeamsGraphOperationArgs<"users.chats.GetCount-38c2">): Promise<TeamsGraphOperationResponseMap["users.chats.GetCount-38c2"]>;
  UsersUserChatsGetAllMessages(...args: TeamsGraphOperationArgs<"users.user.chats.getAllMessages">): Promise<TeamsGraphOperationResponseMap["users.user.chats.getAllMessages"]>;
  UsersUserChatsGetAllRetainedMessages(...args: TeamsGraphOperationArgs<"users.user.chats.getAllRetainedMessages">): Promise<TeamsGraphOperationResponseMap["users.user.chats.getAllRetainedMessages"]>;
}

export const TeamsGraphUsersChat02GeneratedFunctionNames = [
  "UsersChatsPermissionGrantsGetCount8aa5",
  "UsersChatsListPinnedMessages",
  "UsersChatsCreatePinnedMessages",
  "UsersChatsGetPinnedMessages",
  "UsersChatsUpdatePinnedMessages",
  "UsersChatsDeletePinnedMessages",
  "UsersChatsPinnedMessagesGetMessage",
  "UsersChatsPinnedMessagesGetCountBc2d",
  "UsersChatsListTabs",
  "UsersChatsCreateTabs",
  "UsersChatsGetTabs",
  "UsersChatsUpdateTabs",
  "UsersChatsDeleteTabs",
  "UsersChatsTabsGetTeamsApp",
  "UsersChatsTabsGetCountBf26",
  "UsersChatsListTargetedMessages",
  "UsersChatsCreateTargetedMessages",
  "UsersChatsGetTargetedMessages",
  "UsersChatsUpdateTargetedMessages",
  "UsersChatsDeleteTargetedMessages",
  "UsersChatsTargetedMessagesListHostedContents",
  "UsersChatsTargetedMessagesCreateHostedContents",
  "UsersChatsTargetedMessagesGetHostedContents",
  "UsersChatsTargetedMessagesUpdateHostedContents",
  "UsersChatsTargetedMessagesDeleteHostedContents",
  "UsersChatsTargetedMessagesGetHostedContentsContent",
  "UsersChatsTargetedMessagesUpdateHostedContentsContent",
  "UsersChatsTargetedMessagesDeleteHostedContentsContent",
  "UsersChatsTargetedMessagesHostedContentsGetCount94c1",
  "UsersChatsTargetedMessagesListReplies",
  "UsersChatsTargetedMessagesCreateReplies",
  "UsersChatsTargetedMessagesGetReplies",
  "UsersChatsTargetedMessagesUpdateReplies",
  "UsersChatsTargetedMessagesDeleteReplies",
  "UsersChatsTargetedMessagesRepliesListHostedContents",
  "UsersChatsTargetedMessagesRepliesCreateHostedContents",
  "UsersChatsTargetedMessagesRepliesGetHostedContents",
  "UsersChatsTargetedMessagesRepliesUpdateHostedContents",
  "UsersChatsTargetedMessagesRepliesDeleteHostedContents",
  "UsersChatsTargetedMessagesRepliesGetHostedContentsContent",
  "UsersChatsTargetedMessagesRepliesUpdateHostedContentsContent",
  "UsersChatsTargetedMessagesRepliesDeleteHostedContentsContent",
  "UsersChatsTargetedMessagesRepliesHostedContentsGetCountBec2",
  "UsersUserChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageSetReaction",
  "UsersUserChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageSoftDelete",
  "UsersUserChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageUndoSoftDelete",
  "UsersUserChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageUnsetReaction",
  "UsersChatsTargetedMessagesRepliesGetCountB067",
  "UsersUserChatsChatTargetedMessagesTargetedChatMessageRepliesDelta",
  "UsersUserChatsChatTargetedMessagesTargetedChatMessageRepliesReplyWithQuote",
  "UsersChatsTargetedMessagesGetCount23e7",
  "UsersChatsGetCount38c2",
  "UsersUserChatsGetAllMessages",
  "UsersUserChatsGetAllRetainedMessages"
] as const satisfies readonly (keyof TeamsGraphUsersChat02GeneratedClient)[];

export function createTeamsGraphUsersChat02GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphUsersChat02GeneratedClient {
  return {
    UsersChatsPermissionGrantsGetCount8aa5: (...args) => callOperation("users.chats.permissionGrants.GetCount-8aa5", ...(args as TeamsGraphOperationArgs<"users.chats.permissionGrants.GetCount-8aa5">)),
    UsersChatsListPinnedMessages: (...args) => callOperation("users.chats.ListPinnedMessages", ...(args as TeamsGraphOperationArgs<"users.chats.ListPinnedMessages">)),
    UsersChatsCreatePinnedMessages: (...args) => callOperation("users.chats.CreatePinnedMessages", ...(args as TeamsGraphOperationArgs<"users.chats.CreatePinnedMessages">)),
    UsersChatsGetPinnedMessages: (...args) => callOperation("users.chats.GetPinnedMessages", ...(args as TeamsGraphOperationArgs<"users.chats.GetPinnedMessages">)),
    UsersChatsUpdatePinnedMessages: (...args) => callOperation("users.chats.UpdatePinnedMessages", ...(args as TeamsGraphOperationArgs<"users.chats.UpdatePinnedMessages">)),
    UsersChatsDeletePinnedMessages: (...args) => callOperation("users.chats.DeletePinnedMessages", ...(args as TeamsGraphOperationArgs<"users.chats.DeletePinnedMessages">)),
    UsersChatsPinnedMessagesGetMessage: (...args) => callOperation("users.chats.pinnedMessages.GetMessage", ...(args as TeamsGraphOperationArgs<"users.chats.pinnedMessages.GetMessage">)),
    UsersChatsPinnedMessagesGetCountBc2d: (...args) => callOperation("users.chats.pinnedMessages.GetCount-bc2d", ...(args as TeamsGraphOperationArgs<"users.chats.pinnedMessages.GetCount-bc2d">)),
    UsersChatsListTabs: (...args) => callOperation("users.chats.ListTabs", ...(args as TeamsGraphOperationArgs<"users.chats.ListTabs">)),
    UsersChatsCreateTabs: (...args) => callOperation("users.chats.CreateTabs", ...(args as TeamsGraphOperationArgs<"users.chats.CreateTabs">)),
    UsersChatsGetTabs: (...args) => callOperation("users.chats.GetTabs", ...(args as TeamsGraphOperationArgs<"users.chats.GetTabs">)),
    UsersChatsUpdateTabs: (...args) => callOperation("users.chats.UpdateTabs", ...(args as TeamsGraphOperationArgs<"users.chats.UpdateTabs">)),
    UsersChatsDeleteTabs: (...args) => callOperation("users.chats.DeleteTabs", ...(args as TeamsGraphOperationArgs<"users.chats.DeleteTabs">)),
    UsersChatsTabsGetTeamsApp: (...args) => callOperation("users.chats.tabs.GetTeamsApp", ...(args as TeamsGraphOperationArgs<"users.chats.tabs.GetTeamsApp">)),
    UsersChatsTabsGetCountBf26: (...args) => callOperation("users.chats.tabs.GetCount-bf26", ...(args as TeamsGraphOperationArgs<"users.chats.tabs.GetCount-bf26">)),
    UsersChatsListTargetedMessages: (...args) => callOperation("users.chats.ListTargetedMessages", ...(args as TeamsGraphOperationArgs<"users.chats.ListTargetedMessages">)),
    UsersChatsCreateTargetedMessages: (...args) => callOperation("users.chats.CreateTargetedMessages", ...(args as TeamsGraphOperationArgs<"users.chats.CreateTargetedMessages">)),
    UsersChatsGetTargetedMessages: (...args) => callOperation("users.chats.GetTargetedMessages", ...(args as TeamsGraphOperationArgs<"users.chats.GetTargetedMessages">)),
    UsersChatsUpdateTargetedMessages: (...args) => callOperation("users.chats.UpdateTargetedMessages", ...(args as TeamsGraphOperationArgs<"users.chats.UpdateTargetedMessages">)),
    UsersChatsDeleteTargetedMessages: (...args) => callOperation("users.chats.DeleteTargetedMessages", ...(args as TeamsGraphOperationArgs<"users.chats.DeleteTargetedMessages">)),
    UsersChatsTargetedMessagesListHostedContents: (...args) => callOperation("users.chats.targetedMessages.ListHostedContents", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.ListHostedContents">)),
    UsersChatsTargetedMessagesCreateHostedContents: (...args) => callOperation("users.chats.targetedMessages.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.CreateHostedContents">)),
    UsersChatsTargetedMessagesGetHostedContents: (...args) => callOperation("users.chats.targetedMessages.GetHostedContents", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.GetHostedContents">)),
    UsersChatsTargetedMessagesUpdateHostedContents: (...args) => callOperation("users.chats.targetedMessages.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.UpdateHostedContents">)),
    UsersChatsTargetedMessagesDeleteHostedContents: (...args) => callOperation("users.chats.targetedMessages.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.DeleteHostedContents">)),
    UsersChatsTargetedMessagesGetHostedContentsContent: (...args) => callOperation("users.chats.targetedMessages.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.GetHostedContentsContent">)),
    UsersChatsTargetedMessagesUpdateHostedContentsContent: (...args) => callOperation("users.chats.targetedMessages.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.UpdateHostedContentsContent">)),
    UsersChatsTargetedMessagesDeleteHostedContentsContent: (...args) => callOperation("users.chats.targetedMessages.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.DeleteHostedContentsContent">)),
    UsersChatsTargetedMessagesHostedContentsGetCount94c1: (...args) => callOperation("users.chats.targetedMessages.hostedContents.GetCount-94c1", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.hostedContents.GetCount-94c1">)),
    UsersChatsTargetedMessagesListReplies: (...args) => callOperation("users.chats.targetedMessages.ListReplies", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.ListReplies">)),
    UsersChatsTargetedMessagesCreateReplies: (...args) => callOperation("users.chats.targetedMessages.CreateReplies", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.CreateReplies">)),
    UsersChatsTargetedMessagesGetReplies: (...args) => callOperation("users.chats.targetedMessages.GetReplies", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.GetReplies">)),
    UsersChatsTargetedMessagesUpdateReplies: (...args) => callOperation("users.chats.targetedMessages.UpdateReplies", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.UpdateReplies">)),
    UsersChatsTargetedMessagesDeleteReplies: (...args) => callOperation("users.chats.targetedMessages.DeleteReplies", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.DeleteReplies">)),
    UsersChatsTargetedMessagesRepliesListHostedContents: (...args) => callOperation("users.chats.targetedMessages.replies.ListHostedContents", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.replies.ListHostedContents">)),
    UsersChatsTargetedMessagesRepliesCreateHostedContents: (...args) => callOperation("users.chats.targetedMessages.replies.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.replies.CreateHostedContents">)),
    UsersChatsTargetedMessagesRepliesGetHostedContents: (...args) => callOperation("users.chats.targetedMessages.replies.GetHostedContents", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.replies.GetHostedContents">)),
    UsersChatsTargetedMessagesRepliesUpdateHostedContents: (...args) => callOperation("users.chats.targetedMessages.replies.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.replies.UpdateHostedContents">)),
    UsersChatsTargetedMessagesRepliesDeleteHostedContents: (...args) => callOperation("users.chats.targetedMessages.replies.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.replies.DeleteHostedContents">)),
    UsersChatsTargetedMessagesRepliesGetHostedContentsContent: (...args) => callOperation("users.chats.targetedMessages.replies.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.replies.GetHostedContentsContent">)),
    UsersChatsTargetedMessagesRepliesUpdateHostedContentsContent: (...args) => callOperation("users.chats.targetedMessages.replies.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.replies.UpdateHostedContentsContent">)),
    UsersChatsTargetedMessagesRepliesDeleteHostedContentsContent: (...args) => callOperation("users.chats.targetedMessages.replies.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.replies.DeleteHostedContentsContent">)),
    UsersChatsTargetedMessagesRepliesHostedContentsGetCountBec2: (...args) => callOperation("users.chats.targetedMessages.replies.hostedContents.GetCount-bec2", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.replies.hostedContents.GetCount-bec2">)),
    UsersUserChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageSetReaction: (...args) => callOperation("users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.setReaction">)),
    UsersUserChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageSoftDelete: (...args) => callOperation("users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.softDelete">)),
    UsersUserChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageUndoSoftDelete: (...args) => callOperation("users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.undoSoftDelete">)),
    UsersUserChatsChatTargetedMessagesTargetedChatMessageRepliesChatMessageUnsetReaction: (...args) => callOperation("users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.targetedMessages.targetedChatMessage.replies.chatMessage.unsetReaction">)),
    UsersChatsTargetedMessagesRepliesGetCountB067: (...args) => callOperation("users.chats.targetedMessages.replies.GetCount-b067", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.replies.GetCount-b067">)),
    UsersUserChatsChatTargetedMessagesTargetedChatMessageRepliesDelta: (...args) => callOperation("users.user.chats.chat.targetedMessages.targetedChatMessage.replies.delta", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.targetedMessages.targetedChatMessage.replies.delta">)),
    UsersUserChatsChatTargetedMessagesTargetedChatMessageRepliesReplyWithQuote: (...args) => callOperation("users.user.chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.targetedMessages.targetedChatMessage.replies.replyWithQuote">)),
    UsersChatsTargetedMessagesGetCount23e7: (...args) => callOperation("users.chats.targetedMessages.GetCount-23e7", ...(args as TeamsGraphOperationArgs<"users.chats.targetedMessages.GetCount-23e7">)),
    UsersChatsGetCount38c2: (...args) => callOperation("users.chats.GetCount-38c2", ...(args as TeamsGraphOperationArgs<"users.chats.GetCount-38c2">)),
    UsersUserChatsGetAllMessages: (...args) => callOperation("users.user.chats.getAllMessages", ...(args as TeamsGraphOperationArgs<"users.user.chats.getAllMessages">)),
    UsersUserChatsGetAllRetainedMessages: (...args) => callOperation("users.user.chats.getAllRetainedMessages", ...(args as TeamsGraphOperationArgs<"users.user.chats.getAllRetainedMessages">)),
  };
}
