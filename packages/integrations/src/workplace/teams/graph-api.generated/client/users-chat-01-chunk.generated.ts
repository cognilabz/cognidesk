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
export const TeamsGraphUsersChat01OperationKeys = [
  "users.ListChats",
  "users.CreateChats",
  "users.GetChats",
  "users.UpdateChats",
  "users.DeleteChats",
  "users.chats.ListInstalledApps",
  "users.chats.CreateInstalledApps",
  "users.chats.GetInstalledApps",
  "users.chats.UpdateInstalledApps",
  "users.chats.DeleteInstalledApps",
  "users.user.chats.chat.installedApps.teamsAppInstallation.upgrade",
  "users.chats.installedApps.GetTeamsApp",
  "users.chats.installedApps.GetTeamsAppDefinition",
  "users.chats.installedApps.GetCount-0d67",
  "users.chats.GetLastMessagePreview",
  "users.chats.UpdateLastMessagePreview",
  "users.chats.DeleteLastMessagePreview",
  "users.chats.ListMembers",
  "users.chats.CreateMembers",
  "users.chats.GetMembers",
  "users.chats.UpdateMembers",
  "users.chats.DeleteMembers",
  "users.chats.members.GetCount-b25d",
  "users.user.chats.chat.members.add",
  "users.user.chats.chat.members.remove",
  "users.chats.ListMessages",
  "users.chats.CreateMessages",
  "users.chats.GetMessages",
  "users.chats.UpdateMessages",
  "users.chats.DeleteMessages",
  "users.chats.messages.ListHostedContents",
  "users.chats.messages.CreateHostedContents",
  "users.chats.messages.GetHostedContents",
  "users.chats.messages.UpdateHostedContents",
  "users.chats.messages.DeleteHostedContents",
  "users.chats.messages.GetHostedContentsContent",
  "users.chats.messages.UpdateHostedContentsContent",
  "users.chats.messages.DeleteHostedContentsContent",
  "users.chats.messages.hostedContents.GetCount-e922",
  "users.user.chats.chat.messages.chatMessage.setReaction",
  "users.user.chats.chat.messages.chatMessage.softDelete",
  "users.user.chats.chat.messages.chatMessage.undoSoftDelete",
  "users.user.chats.chat.messages.chatMessage.unsetReaction",
  "users.chats.messages.ListReplies",
  "users.chats.messages.CreateReplies",
  "users.chats.messages.GetReplies",
  "users.chats.messages.UpdateReplies",
  "users.chats.messages.DeleteReplies",
  "users.chats.messages.replies.ListHostedContents",
  "users.chats.messages.replies.CreateHostedContents",
  "users.chats.messages.replies.GetHostedContents",
  "users.chats.messages.replies.UpdateHostedContents",
  "users.chats.messages.replies.DeleteHostedContents",
  "users.chats.messages.replies.GetHostedContentsContent",
  "users.chats.messages.replies.UpdateHostedContentsContent",
  "users.chats.messages.replies.DeleteHostedContentsContent",
  "users.chats.messages.replies.hostedContents.GetCount-34f5",
  "users.user.chats.chat.messages.chatMessage.replies.chatMessage.setReaction",
  "users.user.chats.chat.messages.chatMessage.replies.chatMessage.softDelete",
  "users.user.chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete",
  "users.user.chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction",
  "users.chats.messages.replies.GetCount-cecc",
  "users.user.chats.chat.messages.chatMessage.replies.delta",
  "users.user.chats.chat.messages.chatMessage.replies.replyWithQuote",
  "users.chats.messages.GetCount-c95d",
  "users.user.chats.chat.messages.delta",
  "users.user.chats.chat.messages.replyWithQuote",
  "users.user.chats.chat.completeMigration",
  "users.user.chats.chat.hideForUser",
  "users.user.chats.chat.markChatReadForUser",
  "users.user.chats.chat.markChatUnreadForUser",
  "users.user.chats.chat.removeAllAccessForUser",
  "users.user.chats.chat.sendActivityNotification",
  "users.user.chats.chat.startMigration",
  "users.user.chats.chat.unhideForUser",
  "users.chats.ListPermissionGrants",
  "users.chats.CreatePermissionGrants",
  "users.chats.GetPermissionGrants",
  "users.chats.UpdatePermissionGrants",
  "users.chats.DeletePermissionGrants"
] as const;
export type TeamsGraphUsersChat01OperationKey = typeof TeamsGraphUsersChat01OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphUsersChat01OperationPathParamMap {
  "users.ListChats": { "user-id": TeamsGraphPathParamValue };
  "users.CreateChats": { "user-id": TeamsGraphPathParamValue };
  "users.GetChats": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.UpdateChats": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.DeleteChats": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.ListInstalledApps": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.CreateInstalledApps": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.GetInstalledApps": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "users.chats.UpdateInstalledApps": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "users.chats.DeleteInstalledApps": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.installedApps.teamsAppInstallation.upgrade": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "users.chats.installedApps.GetTeamsApp": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "users.chats.installedApps.GetTeamsAppDefinition": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "users.chats.installedApps.GetCount-0d67": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.GetLastMessagePreview": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.UpdateLastMessagePreview": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.DeleteLastMessagePreview": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.ListMembers": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.CreateMembers": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.GetMembers": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "users.chats.UpdateMembers": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "users.chats.DeleteMembers": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "users.chats.members.GetCount-b25d": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.members.add": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.members.remove": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.ListMessages": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.CreateMessages": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.GetMessages": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.chats.UpdateMessages": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.chats.DeleteMessages": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.chats.messages.ListHostedContents": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.chats.messages.CreateHostedContents": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.chats.messages.GetHostedContents": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.messages.UpdateHostedContents": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.messages.DeleteHostedContents": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.messages.GetHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.messages.UpdateHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.messages.DeleteHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.messages.hostedContents.GetCount-e922": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.messages.chatMessage.setReaction": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.messages.chatMessage.softDelete": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.messages.chatMessage.undoSoftDelete": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.messages.chatMessage.unsetReaction": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.chats.messages.ListReplies": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.chats.messages.CreateReplies": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.chats.messages.GetReplies": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.chats.messages.UpdateReplies": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.chats.messages.DeleteReplies": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.chats.messages.replies.ListHostedContents": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.chats.messages.replies.CreateHostedContents": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.chats.messages.replies.GetHostedContents": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.messages.replies.UpdateHostedContents": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.messages.replies.DeleteHostedContents": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.messages.replies.GetHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.messages.replies.UpdateHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.messages.replies.DeleteHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.chats.messages.replies.hostedContents.GetCount-34f5": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.user.chats.chat.messages.chatMessage.replies.chatMessage.setReaction": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.user.chats.chat.messages.chatMessage.replies.chatMessage.softDelete": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.user.chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.user.chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.chats.messages.replies.GetCount-cecc": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.messages.chatMessage.replies.delta": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.messages.chatMessage.replies.replyWithQuote": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.chats.messages.GetCount-c95d": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.messages.delta": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.messages.replyWithQuote": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.completeMigration": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.hideForUser": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.markChatReadForUser": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.markChatUnreadForUser": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.removeAllAccessForUser": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.sendActivityNotification": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.startMigration": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.user.chats.chat.unhideForUser": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.ListPermissionGrants": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.CreatePermissionGrants": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue };
  "users.chats.GetPermissionGrants": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "resourceSpecificPermissionGrant-id": TeamsGraphPathParamValue };
  "users.chats.UpdatePermissionGrants": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "resourceSpecificPermissionGrant-id": TeamsGraphPathParamValue };
  "users.chats.DeletePermissionGrants": { "user-id": TeamsGraphPathParamValue; "chat-id": TeamsGraphPathParamValue; "resourceSpecificPermissionGrant-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphUsersChat01OperationRequestMap {
  "users.ListChats": TeamsGraphOperationInput<"users.ListChats">;
  "users.CreateChats": TeamsGraphOperationInput<"users.CreateChats">;
  "users.GetChats": TeamsGraphOperationInput<"users.GetChats">;
  "users.UpdateChats": TeamsGraphOperationInput<"users.UpdateChats">;
  "users.DeleteChats": TeamsGraphOperationInput<"users.DeleteChats">;
  "users.chats.ListInstalledApps": TeamsGraphOperationInput<"users.chats.ListInstalledApps">;
  "users.chats.CreateInstalledApps": TeamsGraphOperationInput<"users.chats.CreateInstalledApps">;
  "users.chats.GetInstalledApps": TeamsGraphOperationInput<"users.chats.GetInstalledApps">;
  "users.chats.UpdateInstalledApps": TeamsGraphOperationInput<"users.chats.UpdateInstalledApps">;
  "users.chats.DeleteInstalledApps": TeamsGraphOperationInput<"users.chats.DeleteInstalledApps">;
  "users.user.chats.chat.installedApps.teamsAppInstallation.upgrade": TeamsGraphOperationInput<"users.user.chats.chat.installedApps.teamsAppInstallation.upgrade">;
  "users.chats.installedApps.GetTeamsApp": TeamsGraphOperationInput<"users.chats.installedApps.GetTeamsApp">;
  "users.chats.installedApps.GetTeamsAppDefinition": TeamsGraphOperationInput<"users.chats.installedApps.GetTeamsAppDefinition">;
  "users.chats.installedApps.GetCount-0d67": TeamsGraphOperationInput<"users.chats.installedApps.GetCount-0d67">;
  "users.chats.GetLastMessagePreview": TeamsGraphOperationInput<"users.chats.GetLastMessagePreview">;
  "users.chats.UpdateLastMessagePreview": TeamsGraphOperationInput<"users.chats.UpdateLastMessagePreview">;
  "users.chats.DeleteLastMessagePreview": TeamsGraphOperationInput<"users.chats.DeleteLastMessagePreview">;
  "users.chats.ListMembers": TeamsGraphOperationInput<"users.chats.ListMembers">;
  "users.chats.CreateMembers": TeamsGraphOperationInput<"users.chats.CreateMembers">;
  "users.chats.GetMembers": TeamsGraphOperationInput<"users.chats.GetMembers">;
  "users.chats.UpdateMembers": TeamsGraphOperationInput<"users.chats.UpdateMembers">;
  "users.chats.DeleteMembers": TeamsGraphOperationInput<"users.chats.DeleteMembers">;
  "users.chats.members.GetCount-b25d": TeamsGraphOperationInput<"users.chats.members.GetCount-b25d">;
  "users.user.chats.chat.members.add": TeamsGraphOperationInput<"users.user.chats.chat.members.add">;
  "users.user.chats.chat.members.remove": TeamsGraphOperationInput<"users.user.chats.chat.members.remove">;
  "users.chats.ListMessages": TeamsGraphOperationInput<"users.chats.ListMessages">;
  "users.chats.CreateMessages": TeamsGraphOperationInput<"users.chats.CreateMessages">;
  "users.chats.GetMessages": TeamsGraphOperationInput<"users.chats.GetMessages">;
  "users.chats.UpdateMessages": TeamsGraphOperationInput<"users.chats.UpdateMessages">;
  "users.chats.DeleteMessages": TeamsGraphOperationInput<"users.chats.DeleteMessages">;
  "users.chats.messages.ListHostedContents": TeamsGraphOperationInput<"users.chats.messages.ListHostedContents">;
  "users.chats.messages.CreateHostedContents": TeamsGraphOperationInput<"users.chats.messages.CreateHostedContents">;
  "users.chats.messages.GetHostedContents": TeamsGraphOperationInput<"users.chats.messages.GetHostedContents">;
  "users.chats.messages.UpdateHostedContents": TeamsGraphOperationInput<"users.chats.messages.UpdateHostedContents">;
  "users.chats.messages.DeleteHostedContents": TeamsGraphOperationInput<"users.chats.messages.DeleteHostedContents">;
  "users.chats.messages.GetHostedContentsContent": TeamsGraphOperationInput<"users.chats.messages.GetHostedContentsContent">;
  "users.chats.messages.UpdateHostedContentsContent": TeamsGraphOperationInput<"users.chats.messages.UpdateHostedContentsContent">;
  "users.chats.messages.DeleteHostedContentsContent": TeamsGraphOperationInput<"users.chats.messages.DeleteHostedContentsContent">;
  "users.chats.messages.hostedContents.GetCount-e922": TeamsGraphOperationInput<"users.chats.messages.hostedContents.GetCount-e922">;
  "users.user.chats.chat.messages.chatMessage.setReaction": TeamsGraphOperationInput<"users.user.chats.chat.messages.chatMessage.setReaction">;
  "users.user.chats.chat.messages.chatMessage.softDelete": TeamsGraphOperationInput<"users.user.chats.chat.messages.chatMessage.softDelete">;
  "users.user.chats.chat.messages.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"users.user.chats.chat.messages.chatMessage.undoSoftDelete">;
  "users.user.chats.chat.messages.chatMessage.unsetReaction": TeamsGraphOperationInput<"users.user.chats.chat.messages.chatMessage.unsetReaction">;
  "users.chats.messages.ListReplies": TeamsGraphOperationInput<"users.chats.messages.ListReplies">;
  "users.chats.messages.CreateReplies": TeamsGraphOperationInput<"users.chats.messages.CreateReplies">;
  "users.chats.messages.GetReplies": TeamsGraphOperationInput<"users.chats.messages.GetReplies">;
  "users.chats.messages.UpdateReplies": TeamsGraphOperationInput<"users.chats.messages.UpdateReplies">;
  "users.chats.messages.DeleteReplies": TeamsGraphOperationInput<"users.chats.messages.DeleteReplies">;
  "users.chats.messages.replies.ListHostedContents": TeamsGraphOperationInput<"users.chats.messages.replies.ListHostedContents">;
  "users.chats.messages.replies.CreateHostedContents": TeamsGraphOperationInput<"users.chats.messages.replies.CreateHostedContents">;
  "users.chats.messages.replies.GetHostedContents": TeamsGraphOperationInput<"users.chats.messages.replies.GetHostedContents">;
  "users.chats.messages.replies.UpdateHostedContents": TeamsGraphOperationInput<"users.chats.messages.replies.UpdateHostedContents">;
  "users.chats.messages.replies.DeleteHostedContents": TeamsGraphOperationInput<"users.chats.messages.replies.DeleteHostedContents">;
  "users.chats.messages.replies.GetHostedContentsContent": TeamsGraphOperationInput<"users.chats.messages.replies.GetHostedContentsContent">;
  "users.chats.messages.replies.UpdateHostedContentsContent": TeamsGraphOperationInput<"users.chats.messages.replies.UpdateHostedContentsContent">;
  "users.chats.messages.replies.DeleteHostedContentsContent": TeamsGraphOperationInput<"users.chats.messages.replies.DeleteHostedContentsContent">;
  "users.chats.messages.replies.hostedContents.GetCount-34f5": TeamsGraphOperationInput<"users.chats.messages.replies.hostedContents.GetCount-34f5">;
  "users.user.chats.chat.messages.chatMessage.replies.chatMessage.setReaction": TeamsGraphOperationInput<"users.user.chats.chat.messages.chatMessage.replies.chatMessage.setReaction">;
  "users.user.chats.chat.messages.chatMessage.replies.chatMessage.softDelete": TeamsGraphOperationInput<"users.user.chats.chat.messages.chatMessage.replies.chatMessage.softDelete">;
  "users.user.chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"users.user.chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete">;
  "users.user.chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction": TeamsGraphOperationInput<"users.user.chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction">;
  "users.chats.messages.replies.GetCount-cecc": TeamsGraphOperationInput<"users.chats.messages.replies.GetCount-cecc">;
  "users.user.chats.chat.messages.chatMessage.replies.delta": TeamsGraphOperationInput<"users.user.chats.chat.messages.chatMessage.replies.delta">;
  "users.user.chats.chat.messages.chatMessage.replies.replyWithQuote": TeamsGraphOperationInput<"users.user.chats.chat.messages.chatMessage.replies.replyWithQuote">;
  "users.chats.messages.GetCount-c95d": TeamsGraphOperationInput<"users.chats.messages.GetCount-c95d">;
  "users.user.chats.chat.messages.delta": TeamsGraphOperationInput<"users.user.chats.chat.messages.delta">;
  "users.user.chats.chat.messages.replyWithQuote": TeamsGraphOperationInput<"users.user.chats.chat.messages.replyWithQuote">;
  "users.user.chats.chat.completeMigration": TeamsGraphOperationInput<"users.user.chats.chat.completeMigration">;
  "users.user.chats.chat.hideForUser": TeamsGraphOperationInput<"users.user.chats.chat.hideForUser">;
  "users.user.chats.chat.markChatReadForUser": TeamsGraphOperationInput<"users.user.chats.chat.markChatReadForUser">;
  "users.user.chats.chat.markChatUnreadForUser": TeamsGraphOperationInput<"users.user.chats.chat.markChatUnreadForUser">;
  "users.user.chats.chat.removeAllAccessForUser": TeamsGraphOperationInput<"users.user.chats.chat.removeAllAccessForUser">;
  "users.user.chats.chat.sendActivityNotification": TeamsGraphOperationInput<"users.user.chats.chat.sendActivityNotification">;
  "users.user.chats.chat.startMigration": TeamsGraphOperationInput<"users.user.chats.chat.startMigration">;
  "users.user.chats.chat.unhideForUser": TeamsGraphOperationInput<"users.user.chats.chat.unhideForUser">;
  "users.chats.ListPermissionGrants": TeamsGraphOperationInput<"users.chats.ListPermissionGrants">;
  "users.chats.CreatePermissionGrants": TeamsGraphOperationInput<"users.chats.CreatePermissionGrants">;
  "users.chats.GetPermissionGrants": TeamsGraphOperationInput<"users.chats.GetPermissionGrants">;
  "users.chats.UpdatePermissionGrants": TeamsGraphOperationInput<"users.chats.UpdatePermissionGrants">;
  "users.chats.DeletePermissionGrants": TeamsGraphOperationInput<"users.chats.DeletePermissionGrants">;
}

export interface TeamsGraphUsersChat01GeneratedClient {
  UsersListChats(...args: TeamsGraphOperationArgs<"users.ListChats">): Promise<TeamsGraphOperationResponseMap["users.ListChats"]>;
  UsersCreateChats(...args: TeamsGraphOperationArgs<"users.CreateChats">): Promise<TeamsGraphOperationResponseMap["users.CreateChats"]>;
  UsersGetChats(...args: TeamsGraphOperationArgs<"users.GetChats">): Promise<TeamsGraphOperationResponseMap["users.GetChats"]>;
  UsersUpdateChats(...args: TeamsGraphOperationArgs<"users.UpdateChats">): Promise<TeamsGraphOperationResponseMap["users.UpdateChats"]>;
  UsersDeleteChats(...args: TeamsGraphOperationArgs<"users.DeleteChats">): Promise<TeamsGraphOperationResponseMap["users.DeleteChats"]>;
  UsersChatsListInstalledApps(...args: TeamsGraphOperationArgs<"users.chats.ListInstalledApps">): Promise<TeamsGraphOperationResponseMap["users.chats.ListInstalledApps"]>;
  UsersChatsCreateInstalledApps(...args: TeamsGraphOperationArgs<"users.chats.CreateInstalledApps">): Promise<TeamsGraphOperationResponseMap["users.chats.CreateInstalledApps"]>;
  UsersChatsGetInstalledApps(...args: TeamsGraphOperationArgs<"users.chats.GetInstalledApps">): Promise<TeamsGraphOperationResponseMap["users.chats.GetInstalledApps"]>;
  UsersChatsUpdateInstalledApps(...args: TeamsGraphOperationArgs<"users.chats.UpdateInstalledApps">): Promise<TeamsGraphOperationResponseMap["users.chats.UpdateInstalledApps"]>;
  UsersChatsDeleteInstalledApps(...args: TeamsGraphOperationArgs<"users.chats.DeleteInstalledApps">): Promise<TeamsGraphOperationResponseMap["users.chats.DeleteInstalledApps"]>;
  UsersUserChatsChatInstalledAppsTeamsAppInstallationUpgrade(...args: TeamsGraphOperationArgs<"users.user.chats.chat.installedApps.teamsAppInstallation.upgrade">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.installedApps.teamsAppInstallation.upgrade"]>;
  UsersChatsInstalledAppsGetTeamsApp(...args: TeamsGraphOperationArgs<"users.chats.installedApps.GetTeamsApp">): Promise<TeamsGraphOperationResponseMap["users.chats.installedApps.GetTeamsApp"]>;
  UsersChatsInstalledAppsGetTeamsAppDefinition(...args: TeamsGraphOperationArgs<"users.chats.installedApps.GetTeamsAppDefinition">): Promise<TeamsGraphOperationResponseMap["users.chats.installedApps.GetTeamsAppDefinition"]>;
  UsersChatsInstalledAppsGetCount0d67(...args: TeamsGraphOperationArgs<"users.chats.installedApps.GetCount-0d67">): Promise<TeamsGraphOperationResponseMap["users.chats.installedApps.GetCount-0d67"]>;
  UsersChatsGetLastMessagePreview(...args: TeamsGraphOperationArgs<"users.chats.GetLastMessagePreview">): Promise<TeamsGraphOperationResponseMap["users.chats.GetLastMessagePreview"]>;
  UsersChatsUpdateLastMessagePreview(...args: TeamsGraphOperationArgs<"users.chats.UpdateLastMessagePreview">): Promise<TeamsGraphOperationResponseMap["users.chats.UpdateLastMessagePreview"]>;
  UsersChatsDeleteLastMessagePreview(...args: TeamsGraphOperationArgs<"users.chats.DeleteLastMessagePreview">): Promise<TeamsGraphOperationResponseMap["users.chats.DeleteLastMessagePreview"]>;
  UsersChatsListMembers(...args: TeamsGraphOperationArgs<"users.chats.ListMembers">): Promise<TeamsGraphOperationResponseMap["users.chats.ListMembers"]>;
  UsersChatsCreateMembers(...args: TeamsGraphOperationArgs<"users.chats.CreateMembers">): Promise<TeamsGraphOperationResponseMap["users.chats.CreateMembers"]>;
  UsersChatsGetMembers(...args: TeamsGraphOperationArgs<"users.chats.GetMembers">): Promise<TeamsGraphOperationResponseMap["users.chats.GetMembers"]>;
  UsersChatsUpdateMembers(...args: TeamsGraphOperationArgs<"users.chats.UpdateMembers">): Promise<TeamsGraphOperationResponseMap["users.chats.UpdateMembers"]>;
  UsersChatsDeleteMembers(...args: TeamsGraphOperationArgs<"users.chats.DeleteMembers">): Promise<TeamsGraphOperationResponseMap["users.chats.DeleteMembers"]>;
  UsersChatsMembersGetCountB25d(...args: TeamsGraphOperationArgs<"users.chats.members.GetCount-b25d">): Promise<TeamsGraphOperationResponseMap["users.chats.members.GetCount-b25d"]>;
  UsersUserChatsChatMembersAdd(...args: TeamsGraphOperationArgs<"users.user.chats.chat.members.add">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.members.add"]>;
  UsersUserChatsChatMembersRemove(...args: TeamsGraphOperationArgs<"users.user.chats.chat.members.remove">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.members.remove"]>;
  UsersChatsListMessages(...args: TeamsGraphOperationArgs<"users.chats.ListMessages">): Promise<TeamsGraphOperationResponseMap["users.chats.ListMessages"]>;
  UsersChatsCreateMessages(...args: TeamsGraphOperationArgs<"users.chats.CreateMessages">): Promise<TeamsGraphOperationResponseMap["users.chats.CreateMessages"]>;
  UsersChatsGetMessages(...args: TeamsGraphOperationArgs<"users.chats.GetMessages">): Promise<TeamsGraphOperationResponseMap["users.chats.GetMessages"]>;
  UsersChatsUpdateMessages(...args: TeamsGraphOperationArgs<"users.chats.UpdateMessages">): Promise<TeamsGraphOperationResponseMap["users.chats.UpdateMessages"]>;
  UsersChatsDeleteMessages(...args: TeamsGraphOperationArgs<"users.chats.DeleteMessages">): Promise<TeamsGraphOperationResponseMap["users.chats.DeleteMessages"]>;
  UsersChatsMessagesListHostedContents(...args: TeamsGraphOperationArgs<"users.chats.messages.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.ListHostedContents"]>;
  UsersChatsMessagesCreateHostedContents(...args: TeamsGraphOperationArgs<"users.chats.messages.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.CreateHostedContents"]>;
  UsersChatsMessagesGetHostedContents(...args: TeamsGraphOperationArgs<"users.chats.messages.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.GetHostedContents"]>;
  UsersChatsMessagesUpdateHostedContents(...args: TeamsGraphOperationArgs<"users.chats.messages.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.UpdateHostedContents"]>;
  UsersChatsMessagesDeleteHostedContents(...args: TeamsGraphOperationArgs<"users.chats.messages.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.DeleteHostedContents"]>;
  UsersChatsMessagesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"users.chats.messages.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.GetHostedContentsContent"]>;
  UsersChatsMessagesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"users.chats.messages.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.UpdateHostedContentsContent"]>;
  UsersChatsMessagesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"users.chats.messages.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.DeleteHostedContentsContent"]>;
  UsersChatsMessagesHostedContentsGetCountE922(...args: TeamsGraphOperationArgs<"users.chats.messages.hostedContents.GetCount-e922">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.hostedContents.GetCount-e922"]>;
  UsersUserChatsChatMessagesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"users.user.chats.chat.messages.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.messages.chatMessage.setReaction"]>;
  UsersUserChatsChatMessagesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"users.user.chats.chat.messages.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.messages.chatMessage.softDelete"]>;
  UsersUserChatsChatMessagesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"users.user.chats.chat.messages.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.messages.chatMessage.undoSoftDelete"]>;
  UsersUserChatsChatMessagesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"users.user.chats.chat.messages.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.messages.chatMessage.unsetReaction"]>;
  UsersChatsMessagesListReplies(...args: TeamsGraphOperationArgs<"users.chats.messages.ListReplies">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.ListReplies"]>;
  UsersChatsMessagesCreateReplies(...args: TeamsGraphOperationArgs<"users.chats.messages.CreateReplies">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.CreateReplies"]>;
  UsersChatsMessagesGetReplies(...args: TeamsGraphOperationArgs<"users.chats.messages.GetReplies">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.GetReplies"]>;
  UsersChatsMessagesUpdateReplies(...args: TeamsGraphOperationArgs<"users.chats.messages.UpdateReplies">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.UpdateReplies"]>;
  UsersChatsMessagesDeleteReplies(...args: TeamsGraphOperationArgs<"users.chats.messages.DeleteReplies">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.DeleteReplies"]>;
  UsersChatsMessagesRepliesListHostedContents(...args: TeamsGraphOperationArgs<"users.chats.messages.replies.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.replies.ListHostedContents"]>;
  UsersChatsMessagesRepliesCreateHostedContents(...args: TeamsGraphOperationArgs<"users.chats.messages.replies.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.replies.CreateHostedContents"]>;
  UsersChatsMessagesRepliesGetHostedContents(...args: TeamsGraphOperationArgs<"users.chats.messages.replies.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.replies.GetHostedContents"]>;
  UsersChatsMessagesRepliesUpdateHostedContents(...args: TeamsGraphOperationArgs<"users.chats.messages.replies.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.replies.UpdateHostedContents"]>;
  UsersChatsMessagesRepliesDeleteHostedContents(...args: TeamsGraphOperationArgs<"users.chats.messages.replies.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.replies.DeleteHostedContents"]>;
  UsersChatsMessagesRepliesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"users.chats.messages.replies.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.replies.GetHostedContentsContent"]>;
  UsersChatsMessagesRepliesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"users.chats.messages.replies.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.replies.UpdateHostedContentsContent"]>;
  UsersChatsMessagesRepliesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"users.chats.messages.replies.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.replies.DeleteHostedContentsContent"]>;
  UsersChatsMessagesRepliesHostedContentsGetCount34f5(...args: TeamsGraphOperationArgs<"users.chats.messages.replies.hostedContents.GetCount-34f5">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.replies.hostedContents.GetCount-34f5"]>;
  UsersUserChatsChatMessagesChatMessageRepliesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"users.user.chats.chat.messages.chatMessage.replies.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.messages.chatMessage.replies.chatMessage.setReaction"]>;
  UsersUserChatsChatMessagesChatMessageRepliesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"users.user.chats.chat.messages.chatMessage.replies.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.messages.chatMessage.replies.chatMessage.softDelete"]>;
  UsersUserChatsChatMessagesChatMessageRepliesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"users.user.chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete"]>;
  UsersUserChatsChatMessagesChatMessageRepliesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"users.user.chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction"]>;
  UsersChatsMessagesRepliesGetCountCecc(...args: TeamsGraphOperationArgs<"users.chats.messages.replies.GetCount-cecc">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.replies.GetCount-cecc"]>;
  UsersUserChatsChatMessagesChatMessageRepliesDelta(...args: TeamsGraphOperationArgs<"users.user.chats.chat.messages.chatMessage.replies.delta">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.messages.chatMessage.replies.delta"]>;
  UsersUserChatsChatMessagesChatMessageRepliesReplyWithQuote(...args: TeamsGraphOperationArgs<"users.user.chats.chat.messages.chatMessage.replies.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.messages.chatMessage.replies.replyWithQuote"]>;
  UsersChatsMessagesGetCountC95d(...args: TeamsGraphOperationArgs<"users.chats.messages.GetCount-c95d">): Promise<TeamsGraphOperationResponseMap["users.chats.messages.GetCount-c95d"]>;
  UsersUserChatsChatMessagesDelta(...args: TeamsGraphOperationArgs<"users.user.chats.chat.messages.delta">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.messages.delta"]>;
  UsersUserChatsChatMessagesReplyWithQuote(...args: TeamsGraphOperationArgs<"users.user.chats.chat.messages.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.messages.replyWithQuote"]>;
  UsersUserChatsChatCompleteMigration(...args: TeamsGraphOperationArgs<"users.user.chats.chat.completeMigration">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.completeMigration"]>;
  UsersUserChatsChatHideForUser(...args: TeamsGraphOperationArgs<"users.user.chats.chat.hideForUser">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.hideForUser"]>;
  UsersUserChatsChatMarkChatReadForUser(...args: TeamsGraphOperationArgs<"users.user.chats.chat.markChatReadForUser">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.markChatReadForUser"]>;
  UsersUserChatsChatMarkChatUnreadForUser(...args: TeamsGraphOperationArgs<"users.user.chats.chat.markChatUnreadForUser">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.markChatUnreadForUser"]>;
  UsersUserChatsChatRemoveAllAccessForUser(...args: TeamsGraphOperationArgs<"users.user.chats.chat.removeAllAccessForUser">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.removeAllAccessForUser"]>;
  UsersUserChatsChatSendActivityNotification(...args: TeamsGraphOperationArgs<"users.user.chats.chat.sendActivityNotification">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.sendActivityNotification"]>;
  UsersUserChatsChatStartMigration(...args: TeamsGraphOperationArgs<"users.user.chats.chat.startMigration">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.startMigration"]>;
  UsersUserChatsChatUnhideForUser(...args: TeamsGraphOperationArgs<"users.user.chats.chat.unhideForUser">): Promise<TeamsGraphOperationResponseMap["users.user.chats.chat.unhideForUser"]>;
  UsersChatsListPermissionGrants(...args: TeamsGraphOperationArgs<"users.chats.ListPermissionGrants">): Promise<TeamsGraphOperationResponseMap["users.chats.ListPermissionGrants"]>;
  UsersChatsCreatePermissionGrants(...args: TeamsGraphOperationArgs<"users.chats.CreatePermissionGrants">): Promise<TeamsGraphOperationResponseMap["users.chats.CreatePermissionGrants"]>;
  UsersChatsGetPermissionGrants(...args: TeamsGraphOperationArgs<"users.chats.GetPermissionGrants">): Promise<TeamsGraphOperationResponseMap["users.chats.GetPermissionGrants"]>;
  UsersChatsUpdatePermissionGrants(...args: TeamsGraphOperationArgs<"users.chats.UpdatePermissionGrants">): Promise<TeamsGraphOperationResponseMap["users.chats.UpdatePermissionGrants"]>;
  UsersChatsDeletePermissionGrants(...args: TeamsGraphOperationArgs<"users.chats.DeletePermissionGrants">): Promise<TeamsGraphOperationResponseMap["users.chats.DeletePermissionGrants"]>;
}

export const TeamsGraphUsersChat01GeneratedFunctionNames = [
  "UsersListChats",
  "UsersCreateChats",
  "UsersGetChats",
  "UsersUpdateChats",
  "UsersDeleteChats",
  "UsersChatsListInstalledApps",
  "UsersChatsCreateInstalledApps",
  "UsersChatsGetInstalledApps",
  "UsersChatsUpdateInstalledApps",
  "UsersChatsDeleteInstalledApps",
  "UsersUserChatsChatInstalledAppsTeamsAppInstallationUpgrade",
  "UsersChatsInstalledAppsGetTeamsApp",
  "UsersChatsInstalledAppsGetTeamsAppDefinition",
  "UsersChatsInstalledAppsGetCount0d67",
  "UsersChatsGetLastMessagePreview",
  "UsersChatsUpdateLastMessagePreview",
  "UsersChatsDeleteLastMessagePreview",
  "UsersChatsListMembers",
  "UsersChatsCreateMembers",
  "UsersChatsGetMembers",
  "UsersChatsUpdateMembers",
  "UsersChatsDeleteMembers",
  "UsersChatsMembersGetCountB25d",
  "UsersUserChatsChatMembersAdd",
  "UsersUserChatsChatMembersRemove",
  "UsersChatsListMessages",
  "UsersChatsCreateMessages",
  "UsersChatsGetMessages",
  "UsersChatsUpdateMessages",
  "UsersChatsDeleteMessages",
  "UsersChatsMessagesListHostedContents",
  "UsersChatsMessagesCreateHostedContents",
  "UsersChatsMessagesGetHostedContents",
  "UsersChatsMessagesUpdateHostedContents",
  "UsersChatsMessagesDeleteHostedContents",
  "UsersChatsMessagesGetHostedContentsContent",
  "UsersChatsMessagesUpdateHostedContentsContent",
  "UsersChatsMessagesDeleteHostedContentsContent",
  "UsersChatsMessagesHostedContentsGetCountE922",
  "UsersUserChatsChatMessagesChatMessageSetReaction",
  "UsersUserChatsChatMessagesChatMessageSoftDelete",
  "UsersUserChatsChatMessagesChatMessageUndoSoftDelete",
  "UsersUserChatsChatMessagesChatMessageUnsetReaction",
  "UsersChatsMessagesListReplies",
  "UsersChatsMessagesCreateReplies",
  "UsersChatsMessagesGetReplies",
  "UsersChatsMessagesUpdateReplies",
  "UsersChatsMessagesDeleteReplies",
  "UsersChatsMessagesRepliesListHostedContents",
  "UsersChatsMessagesRepliesCreateHostedContents",
  "UsersChatsMessagesRepliesGetHostedContents",
  "UsersChatsMessagesRepliesUpdateHostedContents",
  "UsersChatsMessagesRepliesDeleteHostedContents",
  "UsersChatsMessagesRepliesGetHostedContentsContent",
  "UsersChatsMessagesRepliesUpdateHostedContentsContent",
  "UsersChatsMessagesRepliesDeleteHostedContentsContent",
  "UsersChatsMessagesRepliesHostedContentsGetCount34f5",
  "UsersUserChatsChatMessagesChatMessageRepliesChatMessageSetReaction",
  "UsersUserChatsChatMessagesChatMessageRepliesChatMessageSoftDelete",
  "UsersUserChatsChatMessagesChatMessageRepliesChatMessageUndoSoftDelete",
  "UsersUserChatsChatMessagesChatMessageRepliesChatMessageUnsetReaction",
  "UsersChatsMessagesRepliesGetCountCecc",
  "UsersUserChatsChatMessagesChatMessageRepliesDelta",
  "UsersUserChatsChatMessagesChatMessageRepliesReplyWithQuote",
  "UsersChatsMessagesGetCountC95d",
  "UsersUserChatsChatMessagesDelta",
  "UsersUserChatsChatMessagesReplyWithQuote",
  "UsersUserChatsChatCompleteMigration",
  "UsersUserChatsChatHideForUser",
  "UsersUserChatsChatMarkChatReadForUser",
  "UsersUserChatsChatMarkChatUnreadForUser",
  "UsersUserChatsChatRemoveAllAccessForUser",
  "UsersUserChatsChatSendActivityNotification",
  "UsersUserChatsChatStartMigration",
  "UsersUserChatsChatUnhideForUser",
  "UsersChatsListPermissionGrants",
  "UsersChatsCreatePermissionGrants",
  "UsersChatsGetPermissionGrants",
  "UsersChatsUpdatePermissionGrants",
  "UsersChatsDeletePermissionGrants"
] as const satisfies readonly (keyof TeamsGraphUsersChat01GeneratedClient)[];

export function createTeamsGraphUsersChat01GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphUsersChat01GeneratedClient {
  return {
    UsersListChats: (...args) => callOperation("users.ListChats", ...(args as TeamsGraphOperationArgs<"users.ListChats">)),
    UsersCreateChats: (...args) => callOperation("users.CreateChats", ...(args as TeamsGraphOperationArgs<"users.CreateChats">)),
    UsersGetChats: (...args) => callOperation("users.GetChats", ...(args as TeamsGraphOperationArgs<"users.GetChats">)),
    UsersUpdateChats: (...args) => callOperation("users.UpdateChats", ...(args as TeamsGraphOperationArgs<"users.UpdateChats">)),
    UsersDeleteChats: (...args) => callOperation("users.DeleteChats", ...(args as TeamsGraphOperationArgs<"users.DeleteChats">)),
    UsersChatsListInstalledApps: (...args) => callOperation("users.chats.ListInstalledApps", ...(args as TeamsGraphOperationArgs<"users.chats.ListInstalledApps">)),
    UsersChatsCreateInstalledApps: (...args) => callOperation("users.chats.CreateInstalledApps", ...(args as TeamsGraphOperationArgs<"users.chats.CreateInstalledApps">)),
    UsersChatsGetInstalledApps: (...args) => callOperation("users.chats.GetInstalledApps", ...(args as TeamsGraphOperationArgs<"users.chats.GetInstalledApps">)),
    UsersChatsUpdateInstalledApps: (...args) => callOperation("users.chats.UpdateInstalledApps", ...(args as TeamsGraphOperationArgs<"users.chats.UpdateInstalledApps">)),
    UsersChatsDeleteInstalledApps: (...args) => callOperation("users.chats.DeleteInstalledApps", ...(args as TeamsGraphOperationArgs<"users.chats.DeleteInstalledApps">)),
    UsersUserChatsChatInstalledAppsTeamsAppInstallationUpgrade: (...args) => callOperation("users.user.chats.chat.installedApps.teamsAppInstallation.upgrade", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.installedApps.teamsAppInstallation.upgrade">)),
    UsersChatsInstalledAppsGetTeamsApp: (...args) => callOperation("users.chats.installedApps.GetTeamsApp", ...(args as TeamsGraphOperationArgs<"users.chats.installedApps.GetTeamsApp">)),
    UsersChatsInstalledAppsGetTeamsAppDefinition: (...args) => callOperation("users.chats.installedApps.GetTeamsAppDefinition", ...(args as TeamsGraphOperationArgs<"users.chats.installedApps.GetTeamsAppDefinition">)),
    UsersChatsInstalledAppsGetCount0d67: (...args) => callOperation("users.chats.installedApps.GetCount-0d67", ...(args as TeamsGraphOperationArgs<"users.chats.installedApps.GetCount-0d67">)),
    UsersChatsGetLastMessagePreview: (...args) => callOperation("users.chats.GetLastMessagePreview", ...(args as TeamsGraphOperationArgs<"users.chats.GetLastMessagePreview">)),
    UsersChatsUpdateLastMessagePreview: (...args) => callOperation("users.chats.UpdateLastMessagePreview", ...(args as TeamsGraphOperationArgs<"users.chats.UpdateLastMessagePreview">)),
    UsersChatsDeleteLastMessagePreview: (...args) => callOperation("users.chats.DeleteLastMessagePreview", ...(args as TeamsGraphOperationArgs<"users.chats.DeleteLastMessagePreview">)),
    UsersChatsListMembers: (...args) => callOperation("users.chats.ListMembers", ...(args as TeamsGraphOperationArgs<"users.chats.ListMembers">)),
    UsersChatsCreateMembers: (...args) => callOperation("users.chats.CreateMembers", ...(args as TeamsGraphOperationArgs<"users.chats.CreateMembers">)),
    UsersChatsGetMembers: (...args) => callOperation("users.chats.GetMembers", ...(args as TeamsGraphOperationArgs<"users.chats.GetMembers">)),
    UsersChatsUpdateMembers: (...args) => callOperation("users.chats.UpdateMembers", ...(args as TeamsGraphOperationArgs<"users.chats.UpdateMembers">)),
    UsersChatsDeleteMembers: (...args) => callOperation("users.chats.DeleteMembers", ...(args as TeamsGraphOperationArgs<"users.chats.DeleteMembers">)),
    UsersChatsMembersGetCountB25d: (...args) => callOperation("users.chats.members.GetCount-b25d", ...(args as TeamsGraphOperationArgs<"users.chats.members.GetCount-b25d">)),
    UsersUserChatsChatMembersAdd: (...args) => callOperation("users.user.chats.chat.members.add", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.members.add">)),
    UsersUserChatsChatMembersRemove: (...args) => callOperation("users.user.chats.chat.members.remove", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.members.remove">)),
    UsersChatsListMessages: (...args) => callOperation("users.chats.ListMessages", ...(args as TeamsGraphOperationArgs<"users.chats.ListMessages">)),
    UsersChatsCreateMessages: (...args) => callOperation("users.chats.CreateMessages", ...(args as TeamsGraphOperationArgs<"users.chats.CreateMessages">)),
    UsersChatsGetMessages: (...args) => callOperation("users.chats.GetMessages", ...(args as TeamsGraphOperationArgs<"users.chats.GetMessages">)),
    UsersChatsUpdateMessages: (...args) => callOperation("users.chats.UpdateMessages", ...(args as TeamsGraphOperationArgs<"users.chats.UpdateMessages">)),
    UsersChatsDeleteMessages: (...args) => callOperation("users.chats.DeleteMessages", ...(args as TeamsGraphOperationArgs<"users.chats.DeleteMessages">)),
    UsersChatsMessagesListHostedContents: (...args) => callOperation("users.chats.messages.ListHostedContents", ...(args as TeamsGraphOperationArgs<"users.chats.messages.ListHostedContents">)),
    UsersChatsMessagesCreateHostedContents: (...args) => callOperation("users.chats.messages.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"users.chats.messages.CreateHostedContents">)),
    UsersChatsMessagesGetHostedContents: (...args) => callOperation("users.chats.messages.GetHostedContents", ...(args as TeamsGraphOperationArgs<"users.chats.messages.GetHostedContents">)),
    UsersChatsMessagesUpdateHostedContents: (...args) => callOperation("users.chats.messages.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"users.chats.messages.UpdateHostedContents">)),
    UsersChatsMessagesDeleteHostedContents: (...args) => callOperation("users.chats.messages.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"users.chats.messages.DeleteHostedContents">)),
    UsersChatsMessagesGetHostedContentsContent: (...args) => callOperation("users.chats.messages.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.chats.messages.GetHostedContentsContent">)),
    UsersChatsMessagesUpdateHostedContentsContent: (...args) => callOperation("users.chats.messages.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.chats.messages.UpdateHostedContentsContent">)),
    UsersChatsMessagesDeleteHostedContentsContent: (...args) => callOperation("users.chats.messages.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.chats.messages.DeleteHostedContentsContent">)),
    UsersChatsMessagesHostedContentsGetCountE922: (...args) => callOperation("users.chats.messages.hostedContents.GetCount-e922", ...(args as TeamsGraphOperationArgs<"users.chats.messages.hostedContents.GetCount-e922">)),
    UsersUserChatsChatMessagesChatMessageSetReaction: (...args) => callOperation("users.user.chats.chat.messages.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.messages.chatMessage.setReaction">)),
    UsersUserChatsChatMessagesChatMessageSoftDelete: (...args) => callOperation("users.user.chats.chat.messages.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.messages.chatMessage.softDelete">)),
    UsersUserChatsChatMessagesChatMessageUndoSoftDelete: (...args) => callOperation("users.user.chats.chat.messages.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.messages.chatMessage.undoSoftDelete">)),
    UsersUserChatsChatMessagesChatMessageUnsetReaction: (...args) => callOperation("users.user.chats.chat.messages.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.messages.chatMessage.unsetReaction">)),
    UsersChatsMessagesListReplies: (...args) => callOperation("users.chats.messages.ListReplies", ...(args as TeamsGraphOperationArgs<"users.chats.messages.ListReplies">)),
    UsersChatsMessagesCreateReplies: (...args) => callOperation("users.chats.messages.CreateReplies", ...(args as TeamsGraphOperationArgs<"users.chats.messages.CreateReplies">)),
    UsersChatsMessagesGetReplies: (...args) => callOperation("users.chats.messages.GetReplies", ...(args as TeamsGraphOperationArgs<"users.chats.messages.GetReplies">)),
    UsersChatsMessagesUpdateReplies: (...args) => callOperation("users.chats.messages.UpdateReplies", ...(args as TeamsGraphOperationArgs<"users.chats.messages.UpdateReplies">)),
    UsersChatsMessagesDeleteReplies: (...args) => callOperation("users.chats.messages.DeleteReplies", ...(args as TeamsGraphOperationArgs<"users.chats.messages.DeleteReplies">)),
    UsersChatsMessagesRepliesListHostedContents: (...args) => callOperation("users.chats.messages.replies.ListHostedContents", ...(args as TeamsGraphOperationArgs<"users.chats.messages.replies.ListHostedContents">)),
    UsersChatsMessagesRepliesCreateHostedContents: (...args) => callOperation("users.chats.messages.replies.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"users.chats.messages.replies.CreateHostedContents">)),
    UsersChatsMessagesRepliesGetHostedContents: (...args) => callOperation("users.chats.messages.replies.GetHostedContents", ...(args as TeamsGraphOperationArgs<"users.chats.messages.replies.GetHostedContents">)),
    UsersChatsMessagesRepliesUpdateHostedContents: (...args) => callOperation("users.chats.messages.replies.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"users.chats.messages.replies.UpdateHostedContents">)),
    UsersChatsMessagesRepliesDeleteHostedContents: (...args) => callOperation("users.chats.messages.replies.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"users.chats.messages.replies.DeleteHostedContents">)),
    UsersChatsMessagesRepliesGetHostedContentsContent: (...args) => callOperation("users.chats.messages.replies.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.chats.messages.replies.GetHostedContentsContent">)),
    UsersChatsMessagesRepliesUpdateHostedContentsContent: (...args) => callOperation("users.chats.messages.replies.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.chats.messages.replies.UpdateHostedContentsContent">)),
    UsersChatsMessagesRepliesDeleteHostedContentsContent: (...args) => callOperation("users.chats.messages.replies.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.chats.messages.replies.DeleteHostedContentsContent">)),
    UsersChatsMessagesRepliesHostedContentsGetCount34f5: (...args) => callOperation("users.chats.messages.replies.hostedContents.GetCount-34f5", ...(args as TeamsGraphOperationArgs<"users.chats.messages.replies.hostedContents.GetCount-34f5">)),
    UsersUserChatsChatMessagesChatMessageRepliesChatMessageSetReaction: (...args) => callOperation("users.user.chats.chat.messages.chatMessage.replies.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.messages.chatMessage.replies.chatMessage.setReaction">)),
    UsersUserChatsChatMessagesChatMessageRepliesChatMessageSoftDelete: (...args) => callOperation("users.user.chats.chat.messages.chatMessage.replies.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.messages.chatMessage.replies.chatMessage.softDelete">)),
    UsersUserChatsChatMessagesChatMessageRepliesChatMessageUndoSoftDelete: (...args) => callOperation("users.user.chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete">)),
    UsersUserChatsChatMessagesChatMessageRepliesChatMessageUnsetReaction: (...args) => callOperation("users.user.chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction">)),
    UsersChatsMessagesRepliesGetCountCecc: (...args) => callOperation("users.chats.messages.replies.GetCount-cecc", ...(args as TeamsGraphOperationArgs<"users.chats.messages.replies.GetCount-cecc">)),
    UsersUserChatsChatMessagesChatMessageRepliesDelta: (...args) => callOperation("users.user.chats.chat.messages.chatMessage.replies.delta", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.messages.chatMessage.replies.delta">)),
    UsersUserChatsChatMessagesChatMessageRepliesReplyWithQuote: (...args) => callOperation("users.user.chats.chat.messages.chatMessage.replies.replyWithQuote", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.messages.chatMessage.replies.replyWithQuote">)),
    UsersChatsMessagesGetCountC95d: (...args) => callOperation("users.chats.messages.GetCount-c95d", ...(args as TeamsGraphOperationArgs<"users.chats.messages.GetCount-c95d">)),
    UsersUserChatsChatMessagesDelta: (...args) => callOperation("users.user.chats.chat.messages.delta", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.messages.delta">)),
    UsersUserChatsChatMessagesReplyWithQuote: (...args) => callOperation("users.user.chats.chat.messages.replyWithQuote", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.messages.replyWithQuote">)),
    UsersUserChatsChatCompleteMigration: (...args) => callOperation("users.user.chats.chat.completeMigration", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.completeMigration">)),
    UsersUserChatsChatHideForUser: (...args) => callOperation("users.user.chats.chat.hideForUser", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.hideForUser">)),
    UsersUserChatsChatMarkChatReadForUser: (...args) => callOperation("users.user.chats.chat.markChatReadForUser", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.markChatReadForUser">)),
    UsersUserChatsChatMarkChatUnreadForUser: (...args) => callOperation("users.user.chats.chat.markChatUnreadForUser", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.markChatUnreadForUser">)),
    UsersUserChatsChatRemoveAllAccessForUser: (...args) => callOperation("users.user.chats.chat.removeAllAccessForUser", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.removeAllAccessForUser">)),
    UsersUserChatsChatSendActivityNotification: (...args) => callOperation("users.user.chats.chat.sendActivityNotification", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.sendActivityNotification">)),
    UsersUserChatsChatStartMigration: (...args) => callOperation("users.user.chats.chat.startMigration", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.startMigration">)),
    UsersUserChatsChatUnhideForUser: (...args) => callOperation("users.user.chats.chat.unhideForUser", ...(args as TeamsGraphOperationArgs<"users.user.chats.chat.unhideForUser">)),
    UsersChatsListPermissionGrants: (...args) => callOperation("users.chats.ListPermissionGrants", ...(args as TeamsGraphOperationArgs<"users.chats.ListPermissionGrants">)),
    UsersChatsCreatePermissionGrants: (...args) => callOperation("users.chats.CreatePermissionGrants", ...(args as TeamsGraphOperationArgs<"users.chats.CreatePermissionGrants">)),
    UsersChatsGetPermissionGrants: (...args) => callOperation("users.chats.GetPermissionGrants", ...(args as TeamsGraphOperationArgs<"users.chats.GetPermissionGrants">)),
    UsersChatsUpdatePermissionGrants: (...args) => callOperation("users.chats.UpdatePermissionGrants", ...(args as TeamsGraphOperationArgs<"users.chats.UpdatePermissionGrants">)),
    UsersChatsDeletePermissionGrants: (...args) => callOperation("users.chats.DeletePermissionGrants", ...(args as TeamsGraphOperationArgs<"users.chats.DeletePermissionGrants">)),
  };
}
