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
export const TeamsGraphMeChat01OperationKeys = [
  "me.ListChats",
  "me.CreateChats",
  "me.GetChats",
  "me.UpdateChats",
  "me.DeleteChats",
  "me.chats.ListInstalledApps",
  "me.chats.CreateInstalledApps",
  "me.chats.GetInstalledApps",
  "me.chats.UpdateInstalledApps",
  "me.chats.DeleteInstalledApps",
  "me.chats.chat.installedApps.teamsAppInstallation.upgrade",
  "me.chats.installedApps.GetTeamsApp",
  "me.chats.installedApps.GetTeamsAppDefinition",
  "me.chats.installedApps.GetCount-295d",
  "me.chats.GetLastMessagePreview",
  "me.chats.UpdateLastMessagePreview",
  "me.chats.DeleteLastMessagePreview",
  "me.chats.ListMembers",
  "me.chats.CreateMembers",
  "me.chats.GetMembers",
  "me.chats.UpdateMembers",
  "me.chats.DeleteMembers",
  "me.chats.members.GetCount-1223",
  "me.chats.chat.members.add",
  "me.chats.chat.members.remove",
  "me.chats.ListMessages",
  "me.chats.CreateMessages",
  "me.chats.GetMessages",
  "me.chats.UpdateMessages",
  "me.chats.DeleteMessages",
  "me.chats.messages.ListHostedContents",
  "me.chats.messages.CreateHostedContents",
  "me.chats.messages.GetHostedContents",
  "me.chats.messages.UpdateHostedContents",
  "me.chats.messages.DeleteHostedContents",
  "me.chats.messages.GetHostedContentsContent",
  "me.chats.messages.UpdateHostedContentsContent",
  "me.chats.messages.DeleteHostedContentsContent",
  "me.chats.messages.hostedContents.GetCount-5707",
  "me.chats.chat.messages.chatMessage.setReaction",
  "me.chats.chat.messages.chatMessage.softDelete",
  "me.chats.chat.messages.chatMessage.undoSoftDelete",
  "me.chats.chat.messages.chatMessage.unsetReaction",
  "me.chats.messages.ListReplies",
  "me.chats.messages.CreateReplies",
  "me.chats.messages.GetReplies",
  "me.chats.messages.UpdateReplies",
  "me.chats.messages.DeleteReplies",
  "me.chats.messages.replies.ListHostedContents",
  "me.chats.messages.replies.CreateHostedContents",
  "me.chats.messages.replies.GetHostedContents",
  "me.chats.messages.replies.UpdateHostedContents",
  "me.chats.messages.replies.DeleteHostedContents",
  "me.chats.messages.replies.GetHostedContentsContent",
  "me.chats.messages.replies.UpdateHostedContentsContent",
  "me.chats.messages.replies.DeleteHostedContentsContent",
  "me.chats.messages.replies.hostedContents.GetCount-62f4",
  "me.chats.chat.messages.chatMessage.replies.chatMessage.setReaction",
  "me.chats.chat.messages.chatMessage.replies.chatMessage.softDelete",
  "me.chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete",
  "me.chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction",
  "me.chats.messages.replies.GetCount-ac4d",
  "me.chats.chat.messages.chatMessage.replies.delta",
  "me.chats.chat.messages.chatMessage.replies.replyWithQuote",
  "me.chats.messages.GetCount-5db5",
  "me.chats.chat.messages.delta",
  "me.chats.chat.messages.replyWithQuote",
  "me.chats.chat.completeMigration",
  "me.chats.chat.hideForUser",
  "me.chats.chat.markChatReadForUser",
  "me.chats.chat.markChatUnreadForUser",
  "me.chats.chat.removeAllAccessForUser",
  "me.chats.chat.sendActivityNotification",
  "me.chats.chat.startMigration",
  "me.chats.chat.unhideForUser",
  "me.chats.ListPermissionGrants",
  "me.chats.CreatePermissionGrants",
  "me.chats.GetPermissionGrants",
  "me.chats.UpdatePermissionGrants",
  "me.chats.DeletePermissionGrants"
] as const;
export type TeamsGraphMeChat01OperationKey = typeof TeamsGraphMeChat01OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphMeChat01OperationPathParamMap {
  "me.ListChats": {};
  "me.CreateChats": {};
  "me.GetChats": { "chat-id": TeamsGraphPathParamValue };
  "me.UpdateChats": { "chat-id": TeamsGraphPathParamValue };
  "me.DeleteChats": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.ListInstalledApps": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.CreateInstalledApps": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.GetInstalledApps": { "chat-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "me.chats.UpdateInstalledApps": { "chat-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "me.chats.DeleteInstalledApps": { "chat-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "me.chats.chat.installedApps.teamsAppInstallation.upgrade": { "chat-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "me.chats.installedApps.GetTeamsApp": { "chat-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "me.chats.installedApps.GetTeamsAppDefinition": { "chat-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "me.chats.installedApps.GetCount-295d": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.GetLastMessagePreview": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.UpdateLastMessagePreview": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.DeleteLastMessagePreview": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.ListMembers": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.CreateMembers": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.GetMembers": { "chat-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "me.chats.UpdateMembers": { "chat-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "me.chats.DeleteMembers": { "chat-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "me.chats.members.GetCount-1223": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.chat.members.add": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.chat.members.remove": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.ListMessages": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.CreateMessages": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.GetMessages": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.UpdateMessages": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.DeleteMessages": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.messages.ListHostedContents": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.messages.CreateHostedContents": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.messages.GetHostedContents": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.messages.UpdateHostedContents": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.messages.DeleteHostedContents": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.messages.GetHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.messages.UpdateHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.messages.DeleteHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.messages.hostedContents.GetCount-5707": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.chat.messages.chatMessage.setReaction": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.chat.messages.chatMessage.softDelete": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.chat.messages.chatMessage.undoSoftDelete": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.chat.messages.chatMessage.unsetReaction": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.messages.ListReplies": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.messages.CreateReplies": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.messages.GetReplies": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.chats.messages.UpdateReplies": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.chats.messages.DeleteReplies": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.chats.messages.replies.ListHostedContents": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.chats.messages.replies.CreateHostedContents": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.chats.messages.replies.GetHostedContents": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.messages.replies.UpdateHostedContents": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.messages.replies.DeleteHostedContents": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.messages.replies.GetHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.messages.replies.UpdateHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.messages.replies.DeleteHostedContentsContent": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.chats.messages.replies.hostedContents.GetCount-62f4": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.chats.chat.messages.chatMessage.replies.chatMessage.setReaction": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.chats.chat.messages.chatMessage.replies.chatMessage.softDelete": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.chats.messages.replies.GetCount-ac4d": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.chat.messages.chatMessage.replies.delta": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.chat.messages.chatMessage.replies.replyWithQuote": { "chat-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.chats.messages.GetCount-5db5": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.chat.messages.delta": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.chat.messages.replyWithQuote": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.chat.completeMigration": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.chat.hideForUser": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.chat.markChatReadForUser": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.chat.markChatUnreadForUser": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.chat.removeAllAccessForUser": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.chat.sendActivityNotification": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.chat.startMigration": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.chat.unhideForUser": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.ListPermissionGrants": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.CreatePermissionGrants": { "chat-id": TeamsGraphPathParamValue };
  "me.chats.GetPermissionGrants": { "chat-id": TeamsGraphPathParamValue; "resourceSpecificPermissionGrant-id": TeamsGraphPathParamValue };
  "me.chats.UpdatePermissionGrants": { "chat-id": TeamsGraphPathParamValue; "resourceSpecificPermissionGrant-id": TeamsGraphPathParamValue };
  "me.chats.DeletePermissionGrants": { "chat-id": TeamsGraphPathParamValue; "resourceSpecificPermissionGrant-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphMeChat01OperationRequestMap {
  "me.ListChats": TeamsGraphOperationInput<"me.ListChats">;
  "me.CreateChats": TeamsGraphOperationInput<"me.CreateChats">;
  "me.GetChats": TeamsGraphOperationInput<"me.GetChats">;
  "me.UpdateChats": TeamsGraphOperationInput<"me.UpdateChats">;
  "me.DeleteChats": TeamsGraphOperationInput<"me.DeleteChats">;
  "me.chats.ListInstalledApps": TeamsGraphOperationInput<"me.chats.ListInstalledApps">;
  "me.chats.CreateInstalledApps": TeamsGraphOperationInput<"me.chats.CreateInstalledApps">;
  "me.chats.GetInstalledApps": TeamsGraphOperationInput<"me.chats.GetInstalledApps">;
  "me.chats.UpdateInstalledApps": TeamsGraphOperationInput<"me.chats.UpdateInstalledApps">;
  "me.chats.DeleteInstalledApps": TeamsGraphOperationInput<"me.chats.DeleteInstalledApps">;
  "me.chats.chat.installedApps.teamsAppInstallation.upgrade": TeamsGraphOperationInput<"me.chats.chat.installedApps.teamsAppInstallation.upgrade">;
  "me.chats.installedApps.GetTeamsApp": TeamsGraphOperationInput<"me.chats.installedApps.GetTeamsApp">;
  "me.chats.installedApps.GetTeamsAppDefinition": TeamsGraphOperationInput<"me.chats.installedApps.GetTeamsAppDefinition">;
  "me.chats.installedApps.GetCount-295d": TeamsGraphOperationInput<"me.chats.installedApps.GetCount-295d">;
  "me.chats.GetLastMessagePreview": TeamsGraphOperationInput<"me.chats.GetLastMessagePreview">;
  "me.chats.UpdateLastMessagePreview": TeamsGraphOperationInput<"me.chats.UpdateLastMessagePreview">;
  "me.chats.DeleteLastMessagePreview": TeamsGraphOperationInput<"me.chats.DeleteLastMessagePreview">;
  "me.chats.ListMembers": TeamsGraphOperationInput<"me.chats.ListMembers">;
  "me.chats.CreateMembers": TeamsGraphOperationInput<"me.chats.CreateMembers">;
  "me.chats.GetMembers": TeamsGraphOperationInput<"me.chats.GetMembers">;
  "me.chats.UpdateMembers": TeamsGraphOperationInput<"me.chats.UpdateMembers">;
  "me.chats.DeleteMembers": TeamsGraphOperationInput<"me.chats.DeleteMembers">;
  "me.chats.members.GetCount-1223": TeamsGraphOperationInput<"me.chats.members.GetCount-1223">;
  "me.chats.chat.members.add": TeamsGraphOperationInput<"me.chats.chat.members.add">;
  "me.chats.chat.members.remove": TeamsGraphOperationInput<"me.chats.chat.members.remove">;
  "me.chats.ListMessages": TeamsGraphOperationInput<"me.chats.ListMessages">;
  "me.chats.CreateMessages": TeamsGraphOperationInput<"me.chats.CreateMessages">;
  "me.chats.GetMessages": TeamsGraphOperationInput<"me.chats.GetMessages">;
  "me.chats.UpdateMessages": TeamsGraphOperationInput<"me.chats.UpdateMessages">;
  "me.chats.DeleteMessages": TeamsGraphOperationInput<"me.chats.DeleteMessages">;
  "me.chats.messages.ListHostedContents": TeamsGraphOperationInput<"me.chats.messages.ListHostedContents">;
  "me.chats.messages.CreateHostedContents": TeamsGraphOperationInput<"me.chats.messages.CreateHostedContents">;
  "me.chats.messages.GetHostedContents": TeamsGraphOperationInput<"me.chats.messages.GetHostedContents">;
  "me.chats.messages.UpdateHostedContents": TeamsGraphOperationInput<"me.chats.messages.UpdateHostedContents">;
  "me.chats.messages.DeleteHostedContents": TeamsGraphOperationInput<"me.chats.messages.DeleteHostedContents">;
  "me.chats.messages.GetHostedContentsContent": TeamsGraphOperationInput<"me.chats.messages.GetHostedContentsContent">;
  "me.chats.messages.UpdateHostedContentsContent": TeamsGraphOperationInput<"me.chats.messages.UpdateHostedContentsContent">;
  "me.chats.messages.DeleteHostedContentsContent": TeamsGraphOperationInput<"me.chats.messages.DeleteHostedContentsContent">;
  "me.chats.messages.hostedContents.GetCount-5707": TeamsGraphOperationInput<"me.chats.messages.hostedContents.GetCount-5707">;
  "me.chats.chat.messages.chatMessage.setReaction": TeamsGraphOperationInput<"me.chats.chat.messages.chatMessage.setReaction">;
  "me.chats.chat.messages.chatMessage.softDelete": TeamsGraphOperationInput<"me.chats.chat.messages.chatMessage.softDelete">;
  "me.chats.chat.messages.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"me.chats.chat.messages.chatMessage.undoSoftDelete">;
  "me.chats.chat.messages.chatMessage.unsetReaction": TeamsGraphOperationInput<"me.chats.chat.messages.chatMessage.unsetReaction">;
  "me.chats.messages.ListReplies": TeamsGraphOperationInput<"me.chats.messages.ListReplies">;
  "me.chats.messages.CreateReplies": TeamsGraphOperationInput<"me.chats.messages.CreateReplies">;
  "me.chats.messages.GetReplies": TeamsGraphOperationInput<"me.chats.messages.GetReplies">;
  "me.chats.messages.UpdateReplies": TeamsGraphOperationInput<"me.chats.messages.UpdateReplies">;
  "me.chats.messages.DeleteReplies": TeamsGraphOperationInput<"me.chats.messages.DeleteReplies">;
  "me.chats.messages.replies.ListHostedContents": TeamsGraphOperationInput<"me.chats.messages.replies.ListHostedContents">;
  "me.chats.messages.replies.CreateHostedContents": TeamsGraphOperationInput<"me.chats.messages.replies.CreateHostedContents">;
  "me.chats.messages.replies.GetHostedContents": TeamsGraphOperationInput<"me.chats.messages.replies.GetHostedContents">;
  "me.chats.messages.replies.UpdateHostedContents": TeamsGraphOperationInput<"me.chats.messages.replies.UpdateHostedContents">;
  "me.chats.messages.replies.DeleteHostedContents": TeamsGraphOperationInput<"me.chats.messages.replies.DeleteHostedContents">;
  "me.chats.messages.replies.GetHostedContentsContent": TeamsGraphOperationInput<"me.chats.messages.replies.GetHostedContentsContent">;
  "me.chats.messages.replies.UpdateHostedContentsContent": TeamsGraphOperationInput<"me.chats.messages.replies.UpdateHostedContentsContent">;
  "me.chats.messages.replies.DeleteHostedContentsContent": TeamsGraphOperationInput<"me.chats.messages.replies.DeleteHostedContentsContent">;
  "me.chats.messages.replies.hostedContents.GetCount-62f4": TeamsGraphOperationInput<"me.chats.messages.replies.hostedContents.GetCount-62f4">;
  "me.chats.chat.messages.chatMessage.replies.chatMessage.setReaction": TeamsGraphOperationInput<"me.chats.chat.messages.chatMessage.replies.chatMessage.setReaction">;
  "me.chats.chat.messages.chatMessage.replies.chatMessage.softDelete": TeamsGraphOperationInput<"me.chats.chat.messages.chatMessage.replies.chatMessage.softDelete">;
  "me.chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"me.chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete">;
  "me.chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction": TeamsGraphOperationInput<"me.chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction">;
  "me.chats.messages.replies.GetCount-ac4d": TeamsGraphOperationInput<"me.chats.messages.replies.GetCount-ac4d">;
  "me.chats.chat.messages.chatMessage.replies.delta": TeamsGraphOperationInput<"me.chats.chat.messages.chatMessage.replies.delta">;
  "me.chats.chat.messages.chatMessage.replies.replyWithQuote": TeamsGraphOperationInput<"me.chats.chat.messages.chatMessage.replies.replyWithQuote">;
  "me.chats.messages.GetCount-5db5": TeamsGraphOperationInput<"me.chats.messages.GetCount-5db5">;
  "me.chats.chat.messages.delta": TeamsGraphOperationInput<"me.chats.chat.messages.delta">;
  "me.chats.chat.messages.replyWithQuote": TeamsGraphOperationInput<"me.chats.chat.messages.replyWithQuote">;
  "me.chats.chat.completeMigration": TeamsGraphOperationInput<"me.chats.chat.completeMigration">;
  "me.chats.chat.hideForUser": TeamsGraphOperationInput<"me.chats.chat.hideForUser">;
  "me.chats.chat.markChatReadForUser": TeamsGraphOperationInput<"me.chats.chat.markChatReadForUser">;
  "me.chats.chat.markChatUnreadForUser": TeamsGraphOperationInput<"me.chats.chat.markChatUnreadForUser">;
  "me.chats.chat.removeAllAccessForUser": TeamsGraphOperationInput<"me.chats.chat.removeAllAccessForUser">;
  "me.chats.chat.sendActivityNotification": TeamsGraphOperationInput<"me.chats.chat.sendActivityNotification">;
  "me.chats.chat.startMigration": TeamsGraphOperationInput<"me.chats.chat.startMigration">;
  "me.chats.chat.unhideForUser": TeamsGraphOperationInput<"me.chats.chat.unhideForUser">;
  "me.chats.ListPermissionGrants": TeamsGraphOperationInput<"me.chats.ListPermissionGrants">;
  "me.chats.CreatePermissionGrants": TeamsGraphOperationInput<"me.chats.CreatePermissionGrants">;
  "me.chats.GetPermissionGrants": TeamsGraphOperationInput<"me.chats.GetPermissionGrants">;
  "me.chats.UpdatePermissionGrants": TeamsGraphOperationInput<"me.chats.UpdatePermissionGrants">;
  "me.chats.DeletePermissionGrants": TeamsGraphOperationInput<"me.chats.DeletePermissionGrants">;
}

export interface TeamsGraphMeChat01GeneratedClient {
  MeListChats(...args: TeamsGraphOperationArgs<"me.ListChats">): Promise<TeamsGraphOperationResponseMap["me.ListChats"]>;
  MeCreateChats(...args: TeamsGraphOperationArgs<"me.CreateChats">): Promise<TeamsGraphOperationResponseMap["me.CreateChats"]>;
  MeGetChats(...args: TeamsGraphOperationArgs<"me.GetChats">): Promise<TeamsGraphOperationResponseMap["me.GetChats"]>;
  MeUpdateChats(...args: TeamsGraphOperationArgs<"me.UpdateChats">): Promise<TeamsGraphOperationResponseMap["me.UpdateChats"]>;
  MeDeleteChats(...args: TeamsGraphOperationArgs<"me.DeleteChats">): Promise<TeamsGraphOperationResponseMap["me.DeleteChats"]>;
  MeChatsListInstalledApps(...args: TeamsGraphOperationArgs<"me.chats.ListInstalledApps">): Promise<TeamsGraphOperationResponseMap["me.chats.ListInstalledApps"]>;
  MeChatsCreateInstalledApps(...args: TeamsGraphOperationArgs<"me.chats.CreateInstalledApps">): Promise<TeamsGraphOperationResponseMap["me.chats.CreateInstalledApps"]>;
  MeChatsGetInstalledApps(...args: TeamsGraphOperationArgs<"me.chats.GetInstalledApps">): Promise<TeamsGraphOperationResponseMap["me.chats.GetInstalledApps"]>;
  MeChatsUpdateInstalledApps(...args: TeamsGraphOperationArgs<"me.chats.UpdateInstalledApps">): Promise<TeamsGraphOperationResponseMap["me.chats.UpdateInstalledApps"]>;
  MeChatsDeleteInstalledApps(...args: TeamsGraphOperationArgs<"me.chats.DeleteInstalledApps">): Promise<TeamsGraphOperationResponseMap["me.chats.DeleteInstalledApps"]>;
  MeChatsChatInstalledAppsTeamsAppInstallationUpgrade(...args: TeamsGraphOperationArgs<"me.chats.chat.installedApps.teamsAppInstallation.upgrade">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.installedApps.teamsAppInstallation.upgrade"]>;
  MeChatsInstalledAppsGetTeamsApp(...args: TeamsGraphOperationArgs<"me.chats.installedApps.GetTeamsApp">): Promise<TeamsGraphOperationResponseMap["me.chats.installedApps.GetTeamsApp"]>;
  MeChatsInstalledAppsGetTeamsAppDefinition(...args: TeamsGraphOperationArgs<"me.chats.installedApps.GetTeamsAppDefinition">): Promise<TeamsGraphOperationResponseMap["me.chats.installedApps.GetTeamsAppDefinition"]>;
  MeChatsInstalledAppsGetCount295d(...args: TeamsGraphOperationArgs<"me.chats.installedApps.GetCount-295d">): Promise<TeamsGraphOperationResponseMap["me.chats.installedApps.GetCount-295d"]>;
  MeChatsGetLastMessagePreview(...args: TeamsGraphOperationArgs<"me.chats.GetLastMessagePreview">): Promise<TeamsGraphOperationResponseMap["me.chats.GetLastMessagePreview"]>;
  MeChatsUpdateLastMessagePreview(...args: TeamsGraphOperationArgs<"me.chats.UpdateLastMessagePreview">): Promise<TeamsGraphOperationResponseMap["me.chats.UpdateLastMessagePreview"]>;
  MeChatsDeleteLastMessagePreview(...args: TeamsGraphOperationArgs<"me.chats.DeleteLastMessagePreview">): Promise<TeamsGraphOperationResponseMap["me.chats.DeleteLastMessagePreview"]>;
  MeChatsListMembers(...args: TeamsGraphOperationArgs<"me.chats.ListMembers">): Promise<TeamsGraphOperationResponseMap["me.chats.ListMembers"]>;
  MeChatsCreateMembers(...args: TeamsGraphOperationArgs<"me.chats.CreateMembers">): Promise<TeamsGraphOperationResponseMap["me.chats.CreateMembers"]>;
  MeChatsGetMembers(...args: TeamsGraphOperationArgs<"me.chats.GetMembers">): Promise<TeamsGraphOperationResponseMap["me.chats.GetMembers"]>;
  MeChatsUpdateMembers(...args: TeamsGraphOperationArgs<"me.chats.UpdateMembers">): Promise<TeamsGraphOperationResponseMap["me.chats.UpdateMembers"]>;
  MeChatsDeleteMembers(...args: TeamsGraphOperationArgs<"me.chats.DeleteMembers">): Promise<TeamsGraphOperationResponseMap["me.chats.DeleteMembers"]>;
  MeChatsMembersGetCount1223(...args: TeamsGraphOperationArgs<"me.chats.members.GetCount-1223">): Promise<TeamsGraphOperationResponseMap["me.chats.members.GetCount-1223"]>;
  MeChatsChatMembersAdd(...args: TeamsGraphOperationArgs<"me.chats.chat.members.add">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.members.add"]>;
  MeChatsChatMembersRemove(...args: TeamsGraphOperationArgs<"me.chats.chat.members.remove">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.members.remove"]>;
  MeChatsListMessages(...args: TeamsGraphOperationArgs<"me.chats.ListMessages">): Promise<TeamsGraphOperationResponseMap["me.chats.ListMessages"]>;
  MeChatsCreateMessages(...args: TeamsGraphOperationArgs<"me.chats.CreateMessages">): Promise<TeamsGraphOperationResponseMap["me.chats.CreateMessages"]>;
  MeChatsGetMessages(...args: TeamsGraphOperationArgs<"me.chats.GetMessages">): Promise<TeamsGraphOperationResponseMap["me.chats.GetMessages"]>;
  MeChatsUpdateMessages(...args: TeamsGraphOperationArgs<"me.chats.UpdateMessages">): Promise<TeamsGraphOperationResponseMap["me.chats.UpdateMessages"]>;
  MeChatsDeleteMessages(...args: TeamsGraphOperationArgs<"me.chats.DeleteMessages">): Promise<TeamsGraphOperationResponseMap["me.chats.DeleteMessages"]>;
  MeChatsMessagesListHostedContents(...args: TeamsGraphOperationArgs<"me.chats.messages.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.ListHostedContents"]>;
  MeChatsMessagesCreateHostedContents(...args: TeamsGraphOperationArgs<"me.chats.messages.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.CreateHostedContents"]>;
  MeChatsMessagesGetHostedContents(...args: TeamsGraphOperationArgs<"me.chats.messages.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.GetHostedContents"]>;
  MeChatsMessagesUpdateHostedContents(...args: TeamsGraphOperationArgs<"me.chats.messages.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.UpdateHostedContents"]>;
  MeChatsMessagesDeleteHostedContents(...args: TeamsGraphOperationArgs<"me.chats.messages.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.DeleteHostedContents"]>;
  MeChatsMessagesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"me.chats.messages.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.GetHostedContentsContent"]>;
  MeChatsMessagesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"me.chats.messages.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.UpdateHostedContentsContent"]>;
  MeChatsMessagesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"me.chats.messages.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.DeleteHostedContentsContent"]>;
  MeChatsMessagesHostedContentsGetCount5707(...args: TeamsGraphOperationArgs<"me.chats.messages.hostedContents.GetCount-5707">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.hostedContents.GetCount-5707"]>;
  MeChatsChatMessagesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"me.chats.chat.messages.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.messages.chatMessage.setReaction"]>;
  MeChatsChatMessagesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"me.chats.chat.messages.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.messages.chatMessage.softDelete"]>;
  MeChatsChatMessagesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"me.chats.chat.messages.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.messages.chatMessage.undoSoftDelete"]>;
  MeChatsChatMessagesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"me.chats.chat.messages.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.messages.chatMessage.unsetReaction"]>;
  MeChatsMessagesListReplies(...args: TeamsGraphOperationArgs<"me.chats.messages.ListReplies">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.ListReplies"]>;
  MeChatsMessagesCreateReplies(...args: TeamsGraphOperationArgs<"me.chats.messages.CreateReplies">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.CreateReplies"]>;
  MeChatsMessagesGetReplies(...args: TeamsGraphOperationArgs<"me.chats.messages.GetReplies">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.GetReplies"]>;
  MeChatsMessagesUpdateReplies(...args: TeamsGraphOperationArgs<"me.chats.messages.UpdateReplies">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.UpdateReplies"]>;
  MeChatsMessagesDeleteReplies(...args: TeamsGraphOperationArgs<"me.chats.messages.DeleteReplies">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.DeleteReplies"]>;
  MeChatsMessagesRepliesListHostedContents(...args: TeamsGraphOperationArgs<"me.chats.messages.replies.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.replies.ListHostedContents"]>;
  MeChatsMessagesRepliesCreateHostedContents(...args: TeamsGraphOperationArgs<"me.chats.messages.replies.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.replies.CreateHostedContents"]>;
  MeChatsMessagesRepliesGetHostedContents(...args: TeamsGraphOperationArgs<"me.chats.messages.replies.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.replies.GetHostedContents"]>;
  MeChatsMessagesRepliesUpdateHostedContents(...args: TeamsGraphOperationArgs<"me.chats.messages.replies.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.replies.UpdateHostedContents"]>;
  MeChatsMessagesRepliesDeleteHostedContents(...args: TeamsGraphOperationArgs<"me.chats.messages.replies.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.replies.DeleteHostedContents"]>;
  MeChatsMessagesRepliesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"me.chats.messages.replies.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.replies.GetHostedContentsContent"]>;
  MeChatsMessagesRepliesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"me.chats.messages.replies.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.replies.UpdateHostedContentsContent"]>;
  MeChatsMessagesRepliesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"me.chats.messages.replies.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.replies.DeleteHostedContentsContent"]>;
  MeChatsMessagesRepliesHostedContentsGetCount62f4(...args: TeamsGraphOperationArgs<"me.chats.messages.replies.hostedContents.GetCount-62f4">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.replies.hostedContents.GetCount-62f4"]>;
  MeChatsChatMessagesChatMessageRepliesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"me.chats.chat.messages.chatMessage.replies.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.messages.chatMessage.replies.chatMessage.setReaction"]>;
  MeChatsChatMessagesChatMessageRepliesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"me.chats.chat.messages.chatMessage.replies.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.messages.chatMessage.replies.chatMessage.softDelete"]>;
  MeChatsChatMessagesChatMessageRepliesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"me.chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete"]>;
  MeChatsChatMessagesChatMessageRepliesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"me.chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction"]>;
  MeChatsMessagesRepliesGetCountAc4d(...args: TeamsGraphOperationArgs<"me.chats.messages.replies.GetCount-ac4d">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.replies.GetCount-ac4d"]>;
  MeChatsChatMessagesChatMessageRepliesDelta(...args: TeamsGraphOperationArgs<"me.chats.chat.messages.chatMessage.replies.delta">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.messages.chatMessage.replies.delta"]>;
  MeChatsChatMessagesChatMessageRepliesReplyWithQuote(...args: TeamsGraphOperationArgs<"me.chats.chat.messages.chatMessage.replies.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.messages.chatMessage.replies.replyWithQuote"]>;
  MeChatsMessagesGetCount5db5(...args: TeamsGraphOperationArgs<"me.chats.messages.GetCount-5db5">): Promise<TeamsGraphOperationResponseMap["me.chats.messages.GetCount-5db5"]>;
  MeChatsChatMessagesDelta(...args: TeamsGraphOperationArgs<"me.chats.chat.messages.delta">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.messages.delta"]>;
  MeChatsChatMessagesReplyWithQuote(...args: TeamsGraphOperationArgs<"me.chats.chat.messages.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.messages.replyWithQuote"]>;
  MeChatsChatCompleteMigration(...args: TeamsGraphOperationArgs<"me.chats.chat.completeMigration">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.completeMigration"]>;
  MeChatsChatHideForUser(...args: TeamsGraphOperationArgs<"me.chats.chat.hideForUser">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.hideForUser"]>;
  MeChatsChatMarkChatReadForUser(...args: TeamsGraphOperationArgs<"me.chats.chat.markChatReadForUser">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.markChatReadForUser"]>;
  MeChatsChatMarkChatUnreadForUser(...args: TeamsGraphOperationArgs<"me.chats.chat.markChatUnreadForUser">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.markChatUnreadForUser"]>;
  MeChatsChatRemoveAllAccessForUser(...args: TeamsGraphOperationArgs<"me.chats.chat.removeAllAccessForUser">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.removeAllAccessForUser"]>;
  MeChatsChatSendActivityNotification(...args: TeamsGraphOperationArgs<"me.chats.chat.sendActivityNotification">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.sendActivityNotification"]>;
  MeChatsChatStartMigration(...args: TeamsGraphOperationArgs<"me.chats.chat.startMigration">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.startMigration"]>;
  MeChatsChatUnhideForUser(...args: TeamsGraphOperationArgs<"me.chats.chat.unhideForUser">): Promise<TeamsGraphOperationResponseMap["me.chats.chat.unhideForUser"]>;
  MeChatsListPermissionGrants(...args: TeamsGraphOperationArgs<"me.chats.ListPermissionGrants">): Promise<TeamsGraphOperationResponseMap["me.chats.ListPermissionGrants"]>;
  MeChatsCreatePermissionGrants(...args: TeamsGraphOperationArgs<"me.chats.CreatePermissionGrants">): Promise<TeamsGraphOperationResponseMap["me.chats.CreatePermissionGrants"]>;
  MeChatsGetPermissionGrants(...args: TeamsGraphOperationArgs<"me.chats.GetPermissionGrants">): Promise<TeamsGraphOperationResponseMap["me.chats.GetPermissionGrants"]>;
  MeChatsUpdatePermissionGrants(...args: TeamsGraphOperationArgs<"me.chats.UpdatePermissionGrants">): Promise<TeamsGraphOperationResponseMap["me.chats.UpdatePermissionGrants"]>;
  MeChatsDeletePermissionGrants(...args: TeamsGraphOperationArgs<"me.chats.DeletePermissionGrants">): Promise<TeamsGraphOperationResponseMap["me.chats.DeletePermissionGrants"]>;
}

export const TeamsGraphMeChat01GeneratedFunctionNames = [
  "MeListChats",
  "MeCreateChats",
  "MeGetChats",
  "MeUpdateChats",
  "MeDeleteChats",
  "MeChatsListInstalledApps",
  "MeChatsCreateInstalledApps",
  "MeChatsGetInstalledApps",
  "MeChatsUpdateInstalledApps",
  "MeChatsDeleteInstalledApps",
  "MeChatsChatInstalledAppsTeamsAppInstallationUpgrade",
  "MeChatsInstalledAppsGetTeamsApp",
  "MeChatsInstalledAppsGetTeamsAppDefinition",
  "MeChatsInstalledAppsGetCount295d",
  "MeChatsGetLastMessagePreview",
  "MeChatsUpdateLastMessagePreview",
  "MeChatsDeleteLastMessagePreview",
  "MeChatsListMembers",
  "MeChatsCreateMembers",
  "MeChatsGetMembers",
  "MeChatsUpdateMembers",
  "MeChatsDeleteMembers",
  "MeChatsMembersGetCount1223",
  "MeChatsChatMembersAdd",
  "MeChatsChatMembersRemove",
  "MeChatsListMessages",
  "MeChatsCreateMessages",
  "MeChatsGetMessages",
  "MeChatsUpdateMessages",
  "MeChatsDeleteMessages",
  "MeChatsMessagesListHostedContents",
  "MeChatsMessagesCreateHostedContents",
  "MeChatsMessagesGetHostedContents",
  "MeChatsMessagesUpdateHostedContents",
  "MeChatsMessagesDeleteHostedContents",
  "MeChatsMessagesGetHostedContentsContent",
  "MeChatsMessagesUpdateHostedContentsContent",
  "MeChatsMessagesDeleteHostedContentsContent",
  "MeChatsMessagesHostedContentsGetCount5707",
  "MeChatsChatMessagesChatMessageSetReaction",
  "MeChatsChatMessagesChatMessageSoftDelete",
  "MeChatsChatMessagesChatMessageUndoSoftDelete",
  "MeChatsChatMessagesChatMessageUnsetReaction",
  "MeChatsMessagesListReplies",
  "MeChatsMessagesCreateReplies",
  "MeChatsMessagesGetReplies",
  "MeChatsMessagesUpdateReplies",
  "MeChatsMessagesDeleteReplies",
  "MeChatsMessagesRepliesListHostedContents",
  "MeChatsMessagesRepliesCreateHostedContents",
  "MeChatsMessagesRepliesGetHostedContents",
  "MeChatsMessagesRepliesUpdateHostedContents",
  "MeChatsMessagesRepliesDeleteHostedContents",
  "MeChatsMessagesRepliesGetHostedContentsContent",
  "MeChatsMessagesRepliesUpdateHostedContentsContent",
  "MeChatsMessagesRepliesDeleteHostedContentsContent",
  "MeChatsMessagesRepliesHostedContentsGetCount62f4",
  "MeChatsChatMessagesChatMessageRepliesChatMessageSetReaction",
  "MeChatsChatMessagesChatMessageRepliesChatMessageSoftDelete",
  "MeChatsChatMessagesChatMessageRepliesChatMessageUndoSoftDelete",
  "MeChatsChatMessagesChatMessageRepliesChatMessageUnsetReaction",
  "MeChatsMessagesRepliesGetCountAc4d",
  "MeChatsChatMessagesChatMessageRepliesDelta",
  "MeChatsChatMessagesChatMessageRepliesReplyWithQuote",
  "MeChatsMessagesGetCount5db5",
  "MeChatsChatMessagesDelta",
  "MeChatsChatMessagesReplyWithQuote",
  "MeChatsChatCompleteMigration",
  "MeChatsChatHideForUser",
  "MeChatsChatMarkChatReadForUser",
  "MeChatsChatMarkChatUnreadForUser",
  "MeChatsChatRemoveAllAccessForUser",
  "MeChatsChatSendActivityNotification",
  "MeChatsChatStartMigration",
  "MeChatsChatUnhideForUser",
  "MeChatsListPermissionGrants",
  "MeChatsCreatePermissionGrants",
  "MeChatsGetPermissionGrants",
  "MeChatsUpdatePermissionGrants",
  "MeChatsDeletePermissionGrants"
] as const satisfies readonly (keyof TeamsGraphMeChat01GeneratedClient)[];

export function createTeamsGraphMeChat01GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphMeChat01GeneratedClient {
  return {
    MeListChats: (...args) => callOperation("me.ListChats", ...(args as TeamsGraphOperationArgs<"me.ListChats">)),
    MeCreateChats: (...args) => callOperation("me.CreateChats", ...(args as TeamsGraphOperationArgs<"me.CreateChats">)),
    MeGetChats: (...args) => callOperation("me.GetChats", ...(args as TeamsGraphOperationArgs<"me.GetChats">)),
    MeUpdateChats: (...args) => callOperation("me.UpdateChats", ...(args as TeamsGraphOperationArgs<"me.UpdateChats">)),
    MeDeleteChats: (...args) => callOperation("me.DeleteChats", ...(args as TeamsGraphOperationArgs<"me.DeleteChats">)),
    MeChatsListInstalledApps: (...args) => callOperation("me.chats.ListInstalledApps", ...(args as TeamsGraphOperationArgs<"me.chats.ListInstalledApps">)),
    MeChatsCreateInstalledApps: (...args) => callOperation("me.chats.CreateInstalledApps", ...(args as TeamsGraphOperationArgs<"me.chats.CreateInstalledApps">)),
    MeChatsGetInstalledApps: (...args) => callOperation("me.chats.GetInstalledApps", ...(args as TeamsGraphOperationArgs<"me.chats.GetInstalledApps">)),
    MeChatsUpdateInstalledApps: (...args) => callOperation("me.chats.UpdateInstalledApps", ...(args as TeamsGraphOperationArgs<"me.chats.UpdateInstalledApps">)),
    MeChatsDeleteInstalledApps: (...args) => callOperation("me.chats.DeleteInstalledApps", ...(args as TeamsGraphOperationArgs<"me.chats.DeleteInstalledApps">)),
    MeChatsChatInstalledAppsTeamsAppInstallationUpgrade: (...args) => callOperation("me.chats.chat.installedApps.teamsAppInstallation.upgrade", ...(args as TeamsGraphOperationArgs<"me.chats.chat.installedApps.teamsAppInstallation.upgrade">)),
    MeChatsInstalledAppsGetTeamsApp: (...args) => callOperation("me.chats.installedApps.GetTeamsApp", ...(args as TeamsGraphOperationArgs<"me.chats.installedApps.GetTeamsApp">)),
    MeChatsInstalledAppsGetTeamsAppDefinition: (...args) => callOperation("me.chats.installedApps.GetTeamsAppDefinition", ...(args as TeamsGraphOperationArgs<"me.chats.installedApps.GetTeamsAppDefinition">)),
    MeChatsInstalledAppsGetCount295d: (...args) => callOperation("me.chats.installedApps.GetCount-295d", ...(args as TeamsGraphOperationArgs<"me.chats.installedApps.GetCount-295d">)),
    MeChatsGetLastMessagePreview: (...args) => callOperation("me.chats.GetLastMessagePreview", ...(args as TeamsGraphOperationArgs<"me.chats.GetLastMessagePreview">)),
    MeChatsUpdateLastMessagePreview: (...args) => callOperation("me.chats.UpdateLastMessagePreview", ...(args as TeamsGraphOperationArgs<"me.chats.UpdateLastMessagePreview">)),
    MeChatsDeleteLastMessagePreview: (...args) => callOperation("me.chats.DeleteLastMessagePreview", ...(args as TeamsGraphOperationArgs<"me.chats.DeleteLastMessagePreview">)),
    MeChatsListMembers: (...args) => callOperation("me.chats.ListMembers", ...(args as TeamsGraphOperationArgs<"me.chats.ListMembers">)),
    MeChatsCreateMembers: (...args) => callOperation("me.chats.CreateMembers", ...(args as TeamsGraphOperationArgs<"me.chats.CreateMembers">)),
    MeChatsGetMembers: (...args) => callOperation("me.chats.GetMembers", ...(args as TeamsGraphOperationArgs<"me.chats.GetMembers">)),
    MeChatsUpdateMembers: (...args) => callOperation("me.chats.UpdateMembers", ...(args as TeamsGraphOperationArgs<"me.chats.UpdateMembers">)),
    MeChatsDeleteMembers: (...args) => callOperation("me.chats.DeleteMembers", ...(args as TeamsGraphOperationArgs<"me.chats.DeleteMembers">)),
    MeChatsMembersGetCount1223: (...args) => callOperation("me.chats.members.GetCount-1223", ...(args as TeamsGraphOperationArgs<"me.chats.members.GetCount-1223">)),
    MeChatsChatMembersAdd: (...args) => callOperation("me.chats.chat.members.add", ...(args as TeamsGraphOperationArgs<"me.chats.chat.members.add">)),
    MeChatsChatMembersRemove: (...args) => callOperation("me.chats.chat.members.remove", ...(args as TeamsGraphOperationArgs<"me.chats.chat.members.remove">)),
    MeChatsListMessages: (...args) => callOperation("me.chats.ListMessages", ...(args as TeamsGraphOperationArgs<"me.chats.ListMessages">)),
    MeChatsCreateMessages: (...args) => callOperation("me.chats.CreateMessages", ...(args as TeamsGraphOperationArgs<"me.chats.CreateMessages">)),
    MeChatsGetMessages: (...args) => callOperation("me.chats.GetMessages", ...(args as TeamsGraphOperationArgs<"me.chats.GetMessages">)),
    MeChatsUpdateMessages: (...args) => callOperation("me.chats.UpdateMessages", ...(args as TeamsGraphOperationArgs<"me.chats.UpdateMessages">)),
    MeChatsDeleteMessages: (...args) => callOperation("me.chats.DeleteMessages", ...(args as TeamsGraphOperationArgs<"me.chats.DeleteMessages">)),
    MeChatsMessagesListHostedContents: (...args) => callOperation("me.chats.messages.ListHostedContents", ...(args as TeamsGraphOperationArgs<"me.chats.messages.ListHostedContents">)),
    MeChatsMessagesCreateHostedContents: (...args) => callOperation("me.chats.messages.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"me.chats.messages.CreateHostedContents">)),
    MeChatsMessagesGetHostedContents: (...args) => callOperation("me.chats.messages.GetHostedContents", ...(args as TeamsGraphOperationArgs<"me.chats.messages.GetHostedContents">)),
    MeChatsMessagesUpdateHostedContents: (...args) => callOperation("me.chats.messages.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"me.chats.messages.UpdateHostedContents">)),
    MeChatsMessagesDeleteHostedContents: (...args) => callOperation("me.chats.messages.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"me.chats.messages.DeleteHostedContents">)),
    MeChatsMessagesGetHostedContentsContent: (...args) => callOperation("me.chats.messages.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.chats.messages.GetHostedContentsContent">)),
    MeChatsMessagesUpdateHostedContentsContent: (...args) => callOperation("me.chats.messages.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.chats.messages.UpdateHostedContentsContent">)),
    MeChatsMessagesDeleteHostedContentsContent: (...args) => callOperation("me.chats.messages.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.chats.messages.DeleteHostedContentsContent">)),
    MeChatsMessagesHostedContentsGetCount5707: (...args) => callOperation("me.chats.messages.hostedContents.GetCount-5707", ...(args as TeamsGraphOperationArgs<"me.chats.messages.hostedContents.GetCount-5707">)),
    MeChatsChatMessagesChatMessageSetReaction: (...args) => callOperation("me.chats.chat.messages.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"me.chats.chat.messages.chatMessage.setReaction">)),
    MeChatsChatMessagesChatMessageSoftDelete: (...args) => callOperation("me.chats.chat.messages.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"me.chats.chat.messages.chatMessage.softDelete">)),
    MeChatsChatMessagesChatMessageUndoSoftDelete: (...args) => callOperation("me.chats.chat.messages.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"me.chats.chat.messages.chatMessage.undoSoftDelete">)),
    MeChatsChatMessagesChatMessageUnsetReaction: (...args) => callOperation("me.chats.chat.messages.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"me.chats.chat.messages.chatMessage.unsetReaction">)),
    MeChatsMessagesListReplies: (...args) => callOperation("me.chats.messages.ListReplies", ...(args as TeamsGraphOperationArgs<"me.chats.messages.ListReplies">)),
    MeChatsMessagesCreateReplies: (...args) => callOperation("me.chats.messages.CreateReplies", ...(args as TeamsGraphOperationArgs<"me.chats.messages.CreateReplies">)),
    MeChatsMessagesGetReplies: (...args) => callOperation("me.chats.messages.GetReplies", ...(args as TeamsGraphOperationArgs<"me.chats.messages.GetReplies">)),
    MeChatsMessagesUpdateReplies: (...args) => callOperation("me.chats.messages.UpdateReplies", ...(args as TeamsGraphOperationArgs<"me.chats.messages.UpdateReplies">)),
    MeChatsMessagesDeleteReplies: (...args) => callOperation("me.chats.messages.DeleteReplies", ...(args as TeamsGraphOperationArgs<"me.chats.messages.DeleteReplies">)),
    MeChatsMessagesRepliesListHostedContents: (...args) => callOperation("me.chats.messages.replies.ListHostedContents", ...(args as TeamsGraphOperationArgs<"me.chats.messages.replies.ListHostedContents">)),
    MeChatsMessagesRepliesCreateHostedContents: (...args) => callOperation("me.chats.messages.replies.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"me.chats.messages.replies.CreateHostedContents">)),
    MeChatsMessagesRepliesGetHostedContents: (...args) => callOperation("me.chats.messages.replies.GetHostedContents", ...(args as TeamsGraphOperationArgs<"me.chats.messages.replies.GetHostedContents">)),
    MeChatsMessagesRepliesUpdateHostedContents: (...args) => callOperation("me.chats.messages.replies.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"me.chats.messages.replies.UpdateHostedContents">)),
    MeChatsMessagesRepliesDeleteHostedContents: (...args) => callOperation("me.chats.messages.replies.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"me.chats.messages.replies.DeleteHostedContents">)),
    MeChatsMessagesRepliesGetHostedContentsContent: (...args) => callOperation("me.chats.messages.replies.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.chats.messages.replies.GetHostedContentsContent">)),
    MeChatsMessagesRepliesUpdateHostedContentsContent: (...args) => callOperation("me.chats.messages.replies.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.chats.messages.replies.UpdateHostedContentsContent">)),
    MeChatsMessagesRepliesDeleteHostedContentsContent: (...args) => callOperation("me.chats.messages.replies.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.chats.messages.replies.DeleteHostedContentsContent">)),
    MeChatsMessagesRepliesHostedContentsGetCount62f4: (...args) => callOperation("me.chats.messages.replies.hostedContents.GetCount-62f4", ...(args as TeamsGraphOperationArgs<"me.chats.messages.replies.hostedContents.GetCount-62f4">)),
    MeChatsChatMessagesChatMessageRepliesChatMessageSetReaction: (...args) => callOperation("me.chats.chat.messages.chatMessage.replies.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"me.chats.chat.messages.chatMessage.replies.chatMessage.setReaction">)),
    MeChatsChatMessagesChatMessageRepliesChatMessageSoftDelete: (...args) => callOperation("me.chats.chat.messages.chatMessage.replies.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"me.chats.chat.messages.chatMessage.replies.chatMessage.softDelete">)),
    MeChatsChatMessagesChatMessageRepliesChatMessageUndoSoftDelete: (...args) => callOperation("me.chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"me.chats.chat.messages.chatMessage.replies.chatMessage.undoSoftDelete">)),
    MeChatsChatMessagesChatMessageRepliesChatMessageUnsetReaction: (...args) => callOperation("me.chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"me.chats.chat.messages.chatMessage.replies.chatMessage.unsetReaction">)),
    MeChatsMessagesRepliesGetCountAc4d: (...args) => callOperation("me.chats.messages.replies.GetCount-ac4d", ...(args as TeamsGraphOperationArgs<"me.chats.messages.replies.GetCount-ac4d">)),
    MeChatsChatMessagesChatMessageRepliesDelta: (...args) => callOperation("me.chats.chat.messages.chatMessage.replies.delta", ...(args as TeamsGraphOperationArgs<"me.chats.chat.messages.chatMessage.replies.delta">)),
    MeChatsChatMessagesChatMessageRepliesReplyWithQuote: (...args) => callOperation("me.chats.chat.messages.chatMessage.replies.replyWithQuote", ...(args as TeamsGraphOperationArgs<"me.chats.chat.messages.chatMessage.replies.replyWithQuote">)),
    MeChatsMessagesGetCount5db5: (...args) => callOperation("me.chats.messages.GetCount-5db5", ...(args as TeamsGraphOperationArgs<"me.chats.messages.GetCount-5db5">)),
    MeChatsChatMessagesDelta: (...args) => callOperation("me.chats.chat.messages.delta", ...(args as TeamsGraphOperationArgs<"me.chats.chat.messages.delta">)),
    MeChatsChatMessagesReplyWithQuote: (...args) => callOperation("me.chats.chat.messages.replyWithQuote", ...(args as TeamsGraphOperationArgs<"me.chats.chat.messages.replyWithQuote">)),
    MeChatsChatCompleteMigration: (...args) => callOperation("me.chats.chat.completeMigration", ...(args as TeamsGraphOperationArgs<"me.chats.chat.completeMigration">)),
    MeChatsChatHideForUser: (...args) => callOperation("me.chats.chat.hideForUser", ...(args as TeamsGraphOperationArgs<"me.chats.chat.hideForUser">)),
    MeChatsChatMarkChatReadForUser: (...args) => callOperation("me.chats.chat.markChatReadForUser", ...(args as TeamsGraphOperationArgs<"me.chats.chat.markChatReadForUser">)),
    MeChatsChatMarkChatUnreadForUser: (...args) => callOperation("me.chats.chat.markChatUnreadForUser", ...(args as TeamsGraphOperationArgs<"me.chats.chat.markChatUnreadForUser">)),
    MeChatsChatRemoveAllAccessForUser: (...args) => callOperation("me.chats.chat.removeAllAccessForUser", ...(args as TeamsGraphOperationArgs<"me.chats.chat.removeAllAccessForUser">)),
    MeChatsChatSendActivityNotification: (...args) => callOperation("me.chats.chat.sendActivityNotification", ...(args as TeamsGraphOperationArgs<"me.chats.chat.sendActivityNotification">)),
    MeChatsChatStartMigration: (...args) => callOperation("me.chats.chat.startMigration", ...(args as TeamsGraphOperationArgs<"me.chats.chat.startMigration">)),
    MeChatsChatUnhideForUser: (...args) => callOperation("me.chats.chat.unhideForUser", ...(args as TeamsGraphOperationArgs<"me.chats.chat.unhideForUser">)),
    MeChatsListPermissionGrants: (...args) => callOperation("me.chats.ListPermissionGrants", ...(args as TeamsGraphOperationArgs<"me.chats.ListPermissionGrants">)),
    MeChatsCreatePermissionGrants: (...args) => callOperation("me.chats.CreatePermissionGrants", ...(args as TeamsGraphOperationArgs<"me.chats.CreatePermissionGrants">)),
    MeChatsGetPermissionGrants: (...args) => callOperation("me.chats.GetPermissionGrants", ...(args as TeamsGraphOperationArgs<"me.chats.GetPermissionGrants">)),
    MeChatsUpdatePermissionGrants: (...args) => callOperation("me.chats.UpdatePermissionGrants", ...(args as TeamsGraphOperationArgs<"me.chats.UpdatePermissionGrants">)),
    MeChatsDeletePermissionGrants: (...args) => callOperation("me.chats.DeletePermissionGrants", ...(args as TeamsGraphOperationArgs<"me.chats.DeletePermissionGrants">)),
  };
}
