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
export const TeamsGraphUsersTeam03OperationKeys = [
  "users.user.joinedTeams.team.primaryChannel.allMembers.remove",
  "users.joinedTeams.primaryChannel.ListEnabledApps",
  "users.joinedTeams.primaryChannel.GetEnabledApps",
  "users.joinedTeams.primaryChannel.enabledApps.GetCount-40e4",
  "users.joinedTeams.primaryChannel.GetFilesFolder",
  "users.joinedTeams.primaryChannel.GetFilesFolderContent",
  "users.joinedTeams.primaryChannel.UpdateFilesFolderContent",
  "users.joinedTeams.primaryChannel.DeleteFilesFolderContent",
  "users.joinedTeams.primaryChannel.ListMembers",
  "users.joinedTeams.primaryChannel.CreateMembers",
  "users.joinedTeams.primaryChannel.GetMembers",
  "users.joinedTeams.primaryChannel.UpdateMembers",
  "users.joinedTeams.primaryChannel.DeleteMembers",
  "users.joinedTeams.primaryChannel.members.GetCount-719e",
  "users.user.joinedTeams.team.primaryChannel.members.add",
  "users.user.joinedTeams.team.primaryChannel.members.remove",
  "users.joinedTeams.primaryChannel.ListMessages",
  "users.joinedTeams.primaryChannel.CreateMessages",
  "users.joinedTeams.primaryChannel.GetMessages",
  "users.joinedTeams.primaryChannel.UpdateMessages",
  "users.joinedTeams.primaryChannel.DeleteMessages",
  "users.joinedTeams.primaryChannel.messages.ListHostedContents",
  "users.joinedTeams.primaryChannel.messages.CreateHostedContents",
  "users.joinedTeams.primaryChannel.messages.GetHostedContents",
  "users.joinedTeams.primaryChannel.messages.UpdateHostedContents",
  "users.joinedTeams.primaryChannel.messages.DeleteHostedContents",
  "users.joinedTeams.primaryChannel.messages.GetHostedContentsContent",
  "users.joinedTeams.primaryChannel.messages.UpdateHostedContentsContent",
  "users.joinedTeams.primaryChannel.messages.DeleteHostedContentsContent",
  "users.joinedTeams.primaryChannel.messages.hostedContents.GetCount-98f7",
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.setReaction",
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.softDelete",
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.undoSoftDelete",
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.unsetReaction",
  "users.joinedTeams.primaryChannel.messages.ListReplies",
  "users.joinedTeams.primaryChannel.messages.CreateReplies",
  "users.joinedTeams.primaryChannel.messages.GetReplies",
  "users.joinedTeams.primaryChannel.messages.UpdateReplies",
  "users.joinedTeams.primaryChannel.messages.DeleteReplies",
  "users.joinedTeams.primaryChannel.messages.replies.ListHostedContents",
  "users.joinedTeams.primaryChannel.messages.replies.CreateHostedContents",
  "users.joinedTeams.primaryChannel.messages.replies.GetHostedContents",
  "users.joinedTeams.primaryChannel.messages.replies.UpdateHostedContents",
  "users.joinedTeams.primaryChannel.messages.replies.DeleteHostedContents",
  "users.joinedTeams.primaryChannel.messages.replies.GetHostedContentsContent",
  "users.joinedTeams.primaryChannel.messages.replies.UpdateHostedContentsContent",
  "users.joinedTeams.primaryChannel.messages.replies.DeleteHostedContentsContent",
  "users.joinedTeams.primaryChannel.messages.replies.hostedContents.GetCount-f576",
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction",
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete",
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete",
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction",
  "users.joinedTeams.primaryChannel.messages.replies.GetCount-5af6",
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.delta",
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote",
  "users.joinedTeams.primaryChannel.messages.GetCount-08f5",
  "users.user.joinedTeams.team.primaryChannel.messages.delta",
  "users.user.joinedTeams.team.primaryChannel.messages.replyWithQuote",
  "users.user.joinedTeams.team.primaryChannel.archive",
  "users.user.joinedTeams.team.primaryChannel.completeMigration",
  "users.user.joinedTeams.team.primaryChannel.doesUserHaveAccess",
  "users.user.joinedTeams.team.primaryChannel.provisionEmail",
  "users.user.joinedTeams.team.primaryChannel.removeEmail",
  "users.user.joinedTeams.team.primaryChannel.startMigration",
  "users.user.joinedTeams.team.primaryChannel.unarchive",
  "users.joinedTeams.primaryChannel.ListSharedWithTeams",
  "users.joinedTeams.primaryChannel.CreateSharedWithTeams",
  "users.joinedTeams.primaryChannel.GetSharedWithTeams",
  "users.joinedTeams.primaryChannel.UpdateSharedWithTeams",
  "users.joinedTeams.primaryChannel.DeleteSharedWithTeams",
  "users.joinedTeams.primaryChannel.sharedWithTeams.ListAllowedMembers",
  "users.joinedTeams.primaryChannel.sharedWithTeams.GetAllowedMembers",
  "users.joinedTeams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-3d16",
  "users.joinedTeams.primaryChannel.sharedWithTeams.GetTeam",
  "users.joinedTeams.primaryChannel.sharedWithTeams.GetCount-d3ab",
  "users.joinedTeams.primaryChannel.ListTabs",
  "users.joinedTeams.primaryChannel.CreateTabs",
  "users.joinedTeams.primaryChannel.GetTabs",
  "users.joinedTeams.primaryChannel.UpdateTabs",
  "users.joinedTeams.primaryChannel.DeleteTabs"
] as const;
export type TeamsGraphUsersTeam03OperationKey = typeof TeamsGraphUsersTeam03OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphUsersTeam03OperationPathParamMap {
  "users.user.joinedTeams.team.primaryChannel.allMembers.remove": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.ListEnabledApps": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.GetEnabledApps": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamsApp-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.enabledApps.GetCount-40e4": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.GetFilesFolder": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.GetFilesFolderContent": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.UpdateFilesFolderContent": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.DeleteFilesFolderContent": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.ListMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.CreateMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.GetMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.UpdateMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.DeleteMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.members.GetCount-719e": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.members.add": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.members.remove": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.ListMessages": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.CreateMessages": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.GetMessages": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.UpdateMessages": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.DeleteMessages": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.ListHostedContents": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.CreateHostedContents": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.GetHostedContents": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.UpdateHostedContents": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.DeleteHostedContents": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.GetHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.UpdateHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.DeleteHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.hostedContents.GetCount-98f7": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.setReaction": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.softDelete": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.undoSoftDelete": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.unsetReaction": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.ListReplies": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.CreateReplies": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.GetReplies": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.UpdateReplies": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.DeleteReplies": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.replies.ListHostedContents": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.replies.CreateHostedContents": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.replies.GetHostedContents": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.replies.UpdateHostedContents": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.replies.DeleteHostedContents": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.replies.GetHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.replies.UpdateHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.replies.DeleteHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.replies.hostedContents.GetCount-f576": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.replies.GetCount-5af6": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.delta": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.messages.GetCount-08f5": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.messages.delta": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.messages.replyWithQuote": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.archive": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.completeMigration": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.doesUserHaveAccess": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.provisionEmail": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.removeEmail": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.startMigration": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.unarchive": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.ListSharedWithTeams": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.CreateSharedWithTeams": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.GetSharedWithTeams": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.UpdateSharedWithTeams": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.DeleteSharedWithTeams": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.sharedWithTeams.ListAllowedMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.sharedWithTeams.GetAllowedMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-3d16": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.sharedWithTeams.GetTeam": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.sharedWithTeams.GetCount-d3ab": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.ListTabs": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.CreateTabs": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.GetTabs": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.UpdateTabs": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.DeleteTabs": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphUsersTeam03OperationRequestMap {
  "users.user.joinedTeams.team.primaryChannel.allMembers.remove": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.allMembers.remove">;
  "users.joinedTeams.primaryChannel.ListEnabledApps": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.ListEnabledApps">;
  "users.joinedTeams.primaryChannel.GetEnabledApps": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.GetEnabledApps">;
  "users.joinedTeams.primaryChannel.enabledApps.GetCount-40e4": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.enabledApps.GetCount-40e4">;
  "users.joinedTeams.primaryChannel.GetFilesFolder": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.GetFilesFolder">;
  "users.joinedTeams.primaryChannel.GetFilesFolderContent": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.GetFilesFolderContent">;
  "users.joinedTeams.primaryChannel.UpdateFilesFolderContent": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.UpdateFilesFolderContent">;
  "users.joinedTeams.primaryChannel.DeleteFilesFolderContent": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.DeleteFilesFolderContent">;
  "users.joinedTeams.primaryChannel.ListMembers": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.ListMembers">;
  "users.joinedTeams.primaryChannel.CreateMembers": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.CreateMembers">;
  "users.joinedTeams.primaryChannel.GetMembers": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.GetMembers">;
  "users.joinedTeams.primaryChannel.UpdateMembers": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.UpdateMembers">;
  "users.joinedTeams.primaryChannel.DeleteMembers": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.DeleteMembers">;
  "users.joinedTeams.primaryChannel.members.GetCount-719e": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.members.GetCount-719e">;
  "users.user.joinedTeams.team.primaryChannel.members.add": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.members.add">;
  "users.user.joinedTeams.team.primaryChannel.members.remove": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.members.remove">;
  "users.joinedTeams.primaryChannel.ListMessages": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.ListMessages">;
  "users.joinedTeams.primaryChannel.CreateMessages": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.CreateMessages">;
  "users.joinedTeams.primaryChannel.GetMessages": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.GetMessages">;
  "users.joinedTeams.primaryChannel.UpdateMessages": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.UpdateMessages">;
  "users.joinedTeams.primaryChannel.DeleteMessages": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.DeleteMessages">;
  "users.joinedTeams.primaryChannel.messages.ListHostedContents": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.ListHostedContents">;
  "users.joinedTeams.primaryChannel.messages.CreateHostedContents": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.CreateHostedContents">;
  "users.joinedTeams.primaryChannel.messages.GetHostedContents": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.GetHostedContents">;
  "users.joinedTeams.primaryChannel.messages.UpdateHostedContents": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.UpdateHostedContents">;
  "users.joinedTeams.primaryChannel.messages.DeleteHostedContents": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.DeleteHostedContents">;
  "users.joinedTeams.primaryChannel.messages.GetHostedContentsContent": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.GetHostedContentsContent">;
  "users.joinedTeams.primaryChannel.messages.UpdateHostedContentsContent": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.UpdateHostedContentsContent">;
  "users.joinedTeams.primaryChannel.messages.DeleteHostedContentsContent": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.DeleteHostedContentsContent">;
  "users.joinedTeams.primaryChannel.messages.hostedContents.GetCount-98f7": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.hostedContents.GetCount-98f7">;
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.setReaction": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.setReaction">;
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.softDelete": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.softDelete">;
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.undoSoftDelete">;
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.unsetReaction": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.unsetReaction">;
  "users.joinedTeams.primaryChannel.messages.ListReplies": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.ListReplies">;
  "users.joinedTeams.primaryChannel.messages.CreateReplies": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.CreateReplies">;
  "users.joinedTeams.primaryChannel.messages.GetReplies": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.GetReplies">;
  "users.joinedTeams.primaryChannel.messages.UpdateReplies": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.UpdateReplies">;
  "users.joinedTeams.primaryChannel.messages.DeleteReplies": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.DeleteReplies">;
  "users.joinedTeams.primaryChannel.messages.replies.ListHostedContents": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.replies.ListHostedContents">;
  "users.joinedTeams.primaryChannel.messages.replies.CreateHostedContents": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.replies.CreateHostedContents">;
  "users.joinedTeams.primaryChannel.messages.replies.GetHostedContents": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.replies.GetHostedContents">;
  "users.joinedTeams.primaryChannel.messages.replies.UpdateHostedContents": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.replies.UpdateHostedContents">;
  "users.joinedTeams.primaryChannel.messages.replies.DeleteHostedContents": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.replies.DeleteHostedContents">;
  "users.joinedTeams.primaryChannel.messages.replies.GetHostedContentsContent": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.replies.GetHostedContentsContent">;
  "users.joinedTeams.primaryChannel.messages.replies.UpdateHostedContentsContent": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.replies.UpdateHostedContentsContent">;
  "users.joinedTeams.primaryChannel.messages.replies.DeleteHostedContentsContent": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.replies.DeleteHostedContentsContent">;
  "users.joinedTeams.primaryChannel.messages.replies.hostedContents.GetCount-f576": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.replies.hostedContents.GetCount-f576">;
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction">;
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete">;
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete">;
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction">;
  "users.joinedTeams.primaryChannel.messages.replies.GetCount-5af6": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.replies.GetCount-5af6">;
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.delta": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.delta">;
  "users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote">;
  "users.joinedTeams.primaryChannel.messages.GetCount-08f5": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.messages.GetCount-08f5">;
  "users.user.joinedTeams.team.primaryChannel.messages.delta": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.messages.delta">;
  "users.user.joinedTeams.team.primaryChannel.messages.replyWithQuote": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.messages.replyWithQuote">;
  "users.user.joinedTeams.team.primaryChannel.archive": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.archive">;
  "users.user.joinedTeams.team.primaryChannel.completeMigration": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.completeMigration">;
  "users.user.joinedTeams.team.primaryChannel.doesUserHaveAccess": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.doesUserHaveAccess">;
  "users.user.joinedTeams.team.primaryChannel.provisionEmail": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.provisionEmail">;
  "users.user.joinedTeams.team.primaryChannel.removeEmail": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.removeEmail">;
  "users.user.joinedTeams.team.primaryChannel.startMigration": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.startMigration">;
  "users.user.joinedTeams.team.primaryChannel.unarchive": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.unarchive">;
  "users.joinedTeams.primaryChannel.ListSharedWithTeams": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.ListSharedWithTeams">;
  "users.joinedTeams.primaryChannel.CreateSharedWithTeams": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.CreateSharedWithTeams">;
  "users.joinedTeams.primaryChannel.GetSharedWithTeams": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.GetSharedWithTeams">;
  "users.joinedTeams.primaryChannel.UpdateSharedWithTeams": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.UpdateSharedWithTeams">;
  "users.joinedTeams.primaryChannel.DeleteSharedWithTeams": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.DeleteSharedWithTeams">;
  "users.joinedTeams.primaryChannel.sharedWithTeams.ListAllowedMembers": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.sharedWithTeams.ListAllowedMembers">;
  "users.joinedTeams.primaryChannel.sharedWithTeams.GetAllowedMembers": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.sharedWithTeams.GetAllowedMembers">;
  "users.joinedTeams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-3d16": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-3d16">;
  "users.joinedTeams.primaryChannel.sharedWithTeams.GetTeam": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.sharedWithTeams.GetTeam">;
  "users.joinedTeams.primaryChannel.sharedWithTeams.GetCount-d3ab": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.sharedWithTeams.GetCount-d3ab">;
  "users.joinedTeams.primaryChannel.ListTabs": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.ListTabs">;
  "users.joinedTeams.primaryChannel.CreateTabs": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.CreateTabs">;
  "users.joinedTeams.primaryChannel.GetTabs": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.GetTabs">;
  "users.joinedTeams.primaryChannel.UpdateTabs": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.UpdateTabs">;
  "users.joinedTeams.primaryChannel.DeleteTabs": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.DeleteTabs">;
}

export interface TeamsGraphUsersTeam03GeneratedClient {
  UsersUserJoinedTeamsTeamPrimaryChannelAllMembersRemove(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.allMembers.remove">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.allMembers.remove"]>;
  UsersJoinedTeamsPrimaryChannelListEnabledApps(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.ListEnabledApps">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.ListEnabledApps"]>;
  UsersJoinedTeamsPrimaryChannelGetEnabledApps(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.GetEnabledApps">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.GetEnabledApps"]>;
  UsersJoinedTeamsPrimaryChannelEnabledAppsGetCount40e4(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.enabledApps.GetCount-40e4">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.enabledApps.GetCount-40e4"]>;
  UsersJoinedTeamsPrimaryChannelGetFilesFolder(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.GetFilesFolder">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.GetFilesFolder"]>;
  UsersJoinedTeamsPrimaryChannelGetFilesFolderContent(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.GetFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.GetFilesFolderContent"]>;
  UsersJoinedTeamsPrimaryChannelUpdateFilesFolderContent(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.UpdateFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.UpdateFilesFolderContent"]>;
  UsersJoinedTeamsPrimaryChannelDeleteFilesFolderContent(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.DeleteFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.DeleteFilesFolderContent"]>;
  UsersJoinedTeamsPrimaryChannelListMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.ListMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.ListMembers"]>;
  UsersJoinedTeamsPrimaryChannelCreateMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.CreateMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.CreateMembers"]>;
  UsersJoinedTeamsPrimaryChannelGetMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.GetMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.GetMembers"]>;
  UsersJoinedTeamsPrimaryChannelUpdateMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.UpdateMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.UpdateMembers"]>;
  UsersJoinedTeamsPrimaryChannelDeleteMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.DeleteMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.DeleteMembers"]>;
  UsersJoinedTeamsPrimaryChannelMembersGetCount719e(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.members.GetCount-719e">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.members.GetCount-719e"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelMembersAdd(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.members.add">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.members.add"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelMembersRemove(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.members.remove">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.members.remove"]>;
  UsersJoinedTeamsPrimaryChannelListMessages(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.ListMessages">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.ListMessages"]>;
  UsersJoinedTeamsPrimaryChannelCreateMessages(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.CreateMessages">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.CreateMessages"]>;
  UsersJoinedTeamsPrimaryChannelGetMessages(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.GetMessages">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.GetMessages"]>;
  UsersJoinedTeamsPrimaryChannelUpdateMessages(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.UpdateMessages">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.UpdateMessages"]>;
  UsersJoinedTeamsPrimaryChannelDeleteMessages(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.DeleteMessages">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.DeleteMessages"]>;
  UsersJoinedTeamsPrimaryChannelMessagesListHostedContents(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.ListHostedContents"]>;
  UsersJoinedTeamsPrimaryChannelMessagesCreateHostedContents(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.CreateHostedContents"]>;
  UsersJoinedTeamsPrimaryChannelMessagesGetHostedContents(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.GetHostedContents"]>;
  UsersJoinedTeamsPrimaryChannelMessagesUpdateHostedContents(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.UpdateHostedContents"]>;
  UsersJoinedTeamsPrimaryChannelMessagesDeleteHostedContents(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.DeleteHostedContents"]>;
  UsersJoinedTeamsPrimaryChannelMessagesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.GetHostedContentsContent"]>;
  UsersJoinedTeamsPrimaryChannelMessagesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.UpdateHostedContentsContent"]>;
  UsersJoinedTeamsPrimaryChannelMessagesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.DeleteHostedContentsContent"]>;
  UsersJoinedTeamsPrimaryChannelMessagesHostedContentsGetCount98f7(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.hostedContents.GetCount-98f7">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.hostedContents.GetCount-98f7"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.messages.chatMessage.setReaction"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.messages.chatMessage.softDelete"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.messages.chatMessage.undoSoftDelete"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.messages.chatMessage.unsetReaction"]>;
  UsersJoinedTeamsPrimaryChannelMessagesListReplies(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.ListReplies">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.ListReplies"]>;
  UsersJoinedTeamsPrimaryChannelMessagesCreateReplies(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.CreateReplies">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.CreateReplies"]>;
  UsersJoinedTeamsPrimaryChannelMessagesGetReplies(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.GetReplies">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.GetReplies"]>;
  UsersJoinedTeamsPrimaryChannelMessagesUpdateReplies(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.UpdateReplies">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.UpdateReplies"]>;
  UsersJoinedTeamsPrimaryChannelMessagesDeleteReplies(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.DeleteReplies">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.DeleteReplies"]>;
  UsersJoinedTeamsPrimaryChannelMessagesRepliesListHostedContents(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.replies.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.replies.ListHostedContents"]>;
  UsersJoinedTeamsPrimaryChannelMessagesRepliesCreateHostedContents(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.replies.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.replies.CreateHostedContents"]>;
  UsersJoinedTeamsPrimaryChannelMessagesRepliesGetHostedContents(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.replies.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.replies.GetHostedContents"]>;
  UsersJoinedTeamsPrimaryChannelMessagesRepliesUpdateHostedContents(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.replies.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.replies.UpdateHostedContents"]>;
  UsersJoinedTeamsPrimaryChannelMessagesRepliesDeleteHostedContents(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.replies.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.replies.DeleteHostedContents"]>;
  UsersJoinedTeamsPrimaryChannelMessagesRepliesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.replies.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.replies.GetHostedContentsContent"]>;
  UsersJoinedTeamsPrimaryChannelMessagesRepliesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.replies.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.replies.UpdateHostedContentsContent"]>;
  UsersJoinedTeamsPrimaryChannelMessagesRepliesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.replies.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.replies.DeleteHostedContentsContent"]>;
  UsersJoinedTeamsPrimaryChannelMessagesRepliesHostedContentsGetCountF576(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.replies.hostedContents.GetCount-f576">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.replies.hostedContents.GetCount-f576"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction"]>;
  UsersJoinedTeamsPrimaryChannelMessagesRepliesGetCount5af6(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.replies.GetCount-5af6">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.replies.GetCount-5af6"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesDelta(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.delta">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.delta"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesReplyWithQuote(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote"]>;
  UsersJoinedTeamsPrimaryChannelMessagesGetCount08f5(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.GetCount-08f5">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.messages.GetCount-08f5"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelMessagesDelta(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.delta">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.messages.delta"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelMessagesReplyWithQuote(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.messages.replyWithQuote"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelArchive(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.archive">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.archive"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelCompleteMigration(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.completeMigration">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.completeMigration"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelDoesUserHaveAccess(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.doesUserHaveAccess">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.doesUserHaveAccess"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelProvisionEmail(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.provisionEmail">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.provisionEmail"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelRemoveEmail(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.removeEmail">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.removeEmail"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelStartMigration(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.startMigration">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.startMigration"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelUnarchive(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.unarchive">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.unarchive"]>;
  UsersJoinedTeamsPrimaryChannelListSharedWithTeams(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.ListSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.ListSharedWithTeams"]>;
  UsersJoinedTeamsPrimaryChannelCreateSharedWithTeams(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.CreateSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.CreateSharedWithTeams"]>;
  UsersJoinedTeamsPrimaryChannelGetSharedWithTeams(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.GetSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.GetSharedWithTeams"]>;
  UsersJoinedTeamsPrimaryChannelUpdateSharedWithTeams(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.UpdateSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.UpdateSharedWithTeams"]>;
  UsersJoinedTeamsPrimaryChannelDeleteSharedWithTeams(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.DeleteSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.DeleteSharedWithTeams"]>;
  UsersJoinedTeamsPrimaryChannelSharedWithTeamsListAllowedMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.sharedWithTeams.ListAllowedMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.sharedWithTeams.ListAllowedMembers"]>;
  UsersJoinedTeamsPrimaryChannelSharedWithTeamsGetAllowedMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.sharedWithTeams.GetAllowedMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.sharedWithTeams.GetAllowedMembers"]>;
  UsersJoinedTeamsPrimaryChannelSharedWithTeamsAllowedMembersGetCount3d16(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-3d16">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-3d16"]>;
  UsersJoinedTeamsPrimaryChannelSharedWithTeamsGetTeam(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.sharedWithTeams.GetTeam">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.sharedWithTeams.GetTeam"]>;
  UsersJoinedTeamsPrimaryChannelSharedWithTeamsGetCountD3ab(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.sharedWithTeams.GetCount-d3ab">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.sharedWithTeams.GetCount-d3ab"]>;
  UsersJoinedTeamsPrimaryChannelListTabs(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.ListTabs">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.ListTabs"]>;
  UsersJoinedTeamsPrimaryChannelCreateTabs(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.CreateTabs">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.CreateTabs"]>;
  UsersJoinedTeamsPrimaryChannelGetTabs(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.GetTabs">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.GetTabs"]>;
  UsersJoinedTeamsPrimaryChannelUpdateTabs(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.UpdateTabs">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.UpdateTabs"]>;
  UsersJoinedTeamsPrimaryChannelDeleteTabs(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.DeleteTabs">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.DeleteTabs"]>;
}

export const TeamsGraphUsersTeam03GeneratedFunctionNames = [
  "UsersUserJoinedTeamsTeamPrimaryChannelAllMembersRemove",
  "UsersJoinedTeamsPrimaryChannelListEnabledApps",
  "UsersJoinedTeamsPrimaryChannelGetEnabledApps",
  "UsersJoinedTeamsPrimaryChannelEnabledAppsGetCount40e4",
  "UsersJoinedTeamsPrimaryChannelGetFilesFolder",
  "UsersJoinedTeamsPrimaryChannelGetFilesFolderContent",
  "UsersJoinedTeamsPrimaryChannelUpdateFilesFolderContent",
  "UsersJoinedTeamsPrimaryChannelDeleteFilesFolderContent",
  "UsersJoinedTeamsPrimaryChannelListMembers",
  "UsersJoinedTeamsPrimaryChannelCreateMembers",
  "UsersJoinedTeamsPrimaryChannelGetMembers",
  "UsersJoinedTeamsPrimaryChannelUpdateMembers",
  "UsersJoinedTeamsPrimaryChannelDeleteMembers",
  "UsersJoinedTeamsPrimaryChannelMembersGetCount719e",
  "UsersUserJoinedTeamsTeamPrimaryChannelMembersAdd",
  "UsersUserJoinedTeamsTeamPrimaryChannelMembersRemove",
  "UsersJoinedTeamsPrimaryChannelListMessages",
  "UsersJoinedTeamsPrimaryChannelCreateMessages",
  "UsersJoinedTeamsPrimaryChannelGetMessages",
  "UsersJoinedTeamsPrimaryChannelUpdateMessages",
  "UsersJoinedTeamsPrimaryChannelDeleteMessages",
  "UsersJoinedTeamsPrimaryChannelMessagesListHostedContents",
  "UsersJoinedTeamsPrimaryChannelMessagesCreateHostedContents",
  "UsersJoinedTeamsPrimaryChannelMessagesGetHostedContents",
  "UsersJoinedTeamsPrimaryChannelMessagesUpdateHostedContents",
  "UsersJoinedTeamsPrimaryChannelMessagesDeleteHostedContents",
  "UsersJoinedTeamsPrimaryChannelMessagesGetHostedContentsContent",
  "UsersJoinedTeamsPrimaryChannelMessagesUpdateHostedContentsContent",
  "UsersJoinedTeamsPrimaryChannelMessagesDeleteHostedContentsContent",
  "UsersJoinedTeamsPrimaryChannelMessagesHostedContentsGetCount98f7",
  "UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageSetReaction",
  "UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageSoftDelete",
  "UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageUndoSoftDelete",
  "UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageUnsetReaction",
  "UsersJoinedTeamsPrimaryChannelMessagesListReplies",
  "UsersJoinedTeamsPrimaryChannelMessagesCreateReplies",
  "UsersJoinedTeamsPrimaryChannelMessagesGetReplies",
  "UsersJoinedTeamsPrimaryChannelMessagesUpdateReplies",
  "UsersJoinedTeamsPrimaryChannelMessagesDeleteReplies",
  "UsersJoinedTeamsPrimaryChannelMessagesRepliesListHostedContents",
  "UsersJoinedTeamsPrimaryChannelMessagesRepliesCreateHostedContents",
  "UsersJoinedTeamsPrimaryChannelMessagesRepliesGetHostedContents",
  "UsersJoinedTeamsPrimaryChannelMessagesRepliesUpdateHostedContents",
  "UsersJoinedTeamsPrimaryChannelMessagesRepliesDeleteHostedContents",
  "UsersJoinedTeamsPrimaryChannelMessagesRepliesGetHostedContentsContent",
  "UsersJoinedTeamsPrimaryChannelMessagesRepliesUpdateHostedContentsContent",
  "UsersJoinedTeamsPrimaryChannelMessagesRepliesDeleteHostedContentsContent",
  "UsersJoinedTeamsPrimaryChannelMessagesRepliesHostedContentsGetCountF576",
  "UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSetReaction",
  "UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSoftDelete",
  "UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete",
  "UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUnsetReaction",
  "UsersJoinedTeamsPrimaryChannelMessagesRepliesGetCount5af6",
  "UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesDelta",
  "UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesReplyWithQuote",
  "UsersJoinedTeamsPrimaryChannelMessagesGetCount08f5",
  "UsersUserJoinedTeamsTeamPrimaryChannelMessagesDelta",
  "UsersUserJoinedTeamsTeamPrimaryChannelMessagesReplyWithQuote",
  "UsersUserJoinedTeamsTeamPrimaryChannelArchive",
  "UsersUserJoinedTeamsTeamPrimaryChannelCompleteMigration",
  "UsersUserJoinedTeamsTeamPrimaryChannelDoesUserHaveAccess",
  "UsersUserJoinedTeamsTeamPrimaryChannelProvisionEmail",
  "UsersUserJoinedTeamsTeamPrimaryChannelRemoveEmail",
  "UsersUserJoinedTeamsTeamPrimaryChannelStartMigration",
  "UsersUserJoinedTeamsTeamPrimaryChannelUnarchive",
  "UsersJoinedTeamsPrimaryChannelListSharedWithTeams",
  "UsersJoinedTeamsPrimaryChannelCreateSharedWithTeams",
  "UsersJoinedTeamsPrimaryChannelGetSharedWithTeams",
  "UsersJoinedTeamsPrimaryChannelUpdateSharedWithTeams",
  "UsersJoinedTeamsPrimaryChannelDeleteSharedWithTeams",
  "UsersJoinedTeamsPrimaryChannelSharedWithTeamsListAllowedMembers",
  "UsersJoinedTeamsPrimaryChannelSharedWithTeamsGetAllowedMembers",
  "UsersJoinedTeamsPrimaryChannelSharedWithTeamsAllowedMembersGetCount3d16",
  "UsersJoinedTeamsPrimaryChannelSharedWithTeamsGetTeam",
  "UsersJoinedTeamsPrimaryChannelSharedWithTeamsGetCountD3ab",
  "UsersJoinedTeamsPrimaryChannelListTabs",
  "UsersJoinedTeamsPrimaryChannelCreateTabs",
  "UsersJoinedTeamsPrimaryChannelGetTabs",
  "UsersJoinedTeamsPrimaryChannelUpdateTabs",
  "UsersJoinedTeamsPrimaryChannelDeleteTabs"
] as const satisfies readonly (keyof TeamsGraphUsersTeam03GeneratedClient)[];

export function createTeamsGraphUsersTeam03GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphUsersTeam03GeneratedClient {
  return {
    UsersUserJoinedTeamsTeamPrimaryChannelAllMembersRemove: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.allMembers.remove", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.allMembers.remove">)),
    UsersJoinedTeamsPrimaryChannelListEnabledApps: (...args) => callOperation("users.joinedTeams.primaryChannel.ListEnabledApps", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.ListEnabledApps">)),
    UsersJoinedTeamsPrimaryChannelGetEnabledApps: (...args) => callOperation("users.joinedTeams.primaryChannel.GetEnabledApps", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.GetEnabledApps">)),
    UsersJoinedTeamsPrimaryChannelEnabledAppsGetCount40e4: (...args) => callOperation("users.joinedTeams.primaryChannel.enabledApps.GetCount-40e4", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.enabledApps.GetCount-40e4">)),
    UsersJoinedTeamsPrimaryChannelGetFilesFolder: (...args) => callOperation("users.joinedTeams.primaryChannel.GetFilesFolder", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.GetFilesFolder">)),
    UsersJoinedTeamsPrimaryChannelGetFilesFolderContent: (...args) => callOperation("users.joinedTeams.primaryChannel.GetFilesFolderContent", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.GetFilesFolderContent">)),
    UsersJoinedTeamsPrimaryChannelUpdateFilesFolderContent: (...args) => callOperation("users.joinedTeams.primaryChannel.UpdateFilesFolderContent", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.UpdateFilesFolderContent">)),
    UsersJoinedTeamsPrimaryChannelDeleteFilesFolderContent: (...args) => callOperation("users.joinedTeams.primaryChannel.DeleteFilesFolderContent", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.DeleteFilesFolderContent">)),
    UsersJoinedTeamsPrimaryChannelListMembers: (...args) => callOperation("users.joinedTeams.primaryChannel.ListMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.ListMembers">)),
    UsersJoinedTeamsPrimaryChannelCreateMembers: (...args) => callOperation("users.joinedTeams.primaryChannel.CreateMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.CreateMembers">)),
    UsersJoinedTeamsPrimaryChannelGetMembers: (...args) => callOperation("users.joinedTeams.primaryChannel.GetMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.GetMembers">)),
    UsersJoinedTeamsPrimaryChannelUpdateMembers: (...args) => callOperation("users.joinedTeams.primaryChannel.UpdateMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.UpdateMembers">)),
    UsersJoinedTeamsPrimaryChannelDeleteMembers: (...args) => callOperation("users.joinedTeams.primaryChannel.DeleteMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.DeleteMembers">)),
    UsersJoinedTeamsPrimaryChannelMembersGetCount719e: (...args) => callOperation("users.joinedTeams.primaryChannel.members.GetCount-719e", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.members.GetCount-719e">)),
    UsersUserJoinedTeamsTeamPrimaryChannelMembersAdd: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.members.add", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.members.add">)),
    UsersUserJoinedTeamsTeamPrimaryChannelMembersRemove: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.members.remove", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.members.remove">)),
    UsersJoinedTeamsPrimaryChannelListMessages: (...args) => callOperation("users.joinedTeams.primaryChannel.ListMessages", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.ListMessages">)),
    UsersJoinedTeamsPrimaryChannelCreateMessages: (...args) => callOperation("users.joinedTeams.primaryChannel.CreateMessages", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.CreateMessages">)),
    UsersJoinedTeamsPrimaryChannelGetMessages: (...args) => callOperation("users.joinedTeams.primaryChannel.GetMessages", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.GetMessages">)),
    UsersJoinedTeamsPrimaryChannelUpdateMessages: (...args) => callOperation("users.joinedTeams.primaryChannel.UpdateMessages", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.UpdateMessages">)),
    UsersJoinedTeamsPrimaryChannelDeleteMessages: (...args) => callOperation("users.joinedTeams.primaryChannel.DeleteMessages", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.DeleteMessages">)),
    UsersJoinedTeamsPrimaryChannelMessagesListHostedContents: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.ListHostedContents", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.ListHostedContents">)),
    UsersJoinedTeamsPrimaryChannelMessagesCreateHostedContents: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.CreateHostedContents">)),
    UsersJoinedTeamsPrimaryChannelMessagesGetHostedContents: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.GetHostedContents", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.GetHostedContents">)),
    UsersJoinedTeamsPrimaryChannelMessagesUpdateHostedContents: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.UpdateHostedContents">)),
    UsersJoinedTeamsPrimaryChannelMessagesDeleteHostedContents: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.DeleteHostedContents">)),
    UsersJoinedTeamsPrimaryChannelMessagesGetHostedContentsContent: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.GetHostedContentsContent">)),
    UsersJoinedTeamsPrimaryChannelMessagesUpdateHostedContentsContent: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.UpdateHostedContentsContent">)),
    UsersJoinedTeamsPrimaryChannelMessagesDeleteHostedContentsContent: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.DeleteHostedContentsContent">)),
    UsersJoinedTeamsPrimaryChannelMessagesHostedContentsGetCount98f7: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.hostedContents.GetCount-98f7", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.hostedContents.GetCount-98f7">)),
    UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageSetReaction: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.messages.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.setReaction">)),
    UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageSoftDelete: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.messages.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.softDelete">)),
    UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageUndoSoftDelete: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.messages.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.undoSoftDelete">)),
    UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageUnsetReaction: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.messages.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.unsetReaction">)),
    UsersJoinedTeamsPrimaryChannelMessagesListReplies: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.ListReplies", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.ListReplies">)),
    UsersJoinedTeamsPrimaryChannelMessagesCreateReplies: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.CreateReplies", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.CreateReplies">)),
    UsersJoinedTeamsPrimaryChannelMessagesGetReplies: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.GetReplies", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.GetReplies">)),
    UsersJoinedTeamsPrimaryChannelMessagesUpdateReplies: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.UpdateReplies", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.UpdateReplies">)),
    UsersJoinedTeamsPrimaryChannelMessagesDeleteReplies: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.DeleteReplies", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.DeleteReplies">)),
    UsersJoinedTeamsPrimaryChannelMessagesRepliesListHostedContents: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.replies.ListHostedContents", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.replies.ListHostedContents">)),
    UsersJoinedTeamsPrimaryChannelMessagesRepliesCreateHostedContents: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.replies.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.replies.CreateHostedContents">)),
    UsersJoinedTeamsPrimaryChannelMessagesRepliesGetHostedContents: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.replies.GetHostedContents", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.replies.GetHostedContents">)),
    UsersJoinedTeamsPrimaryChannelMessagesRepliesUpdateHostedContents: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.replies.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.replies.UpdateHostedContents">)),
    UsersJoinedTeamsPrimaryChannelMessagesRepliesDeleteHostedContents: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.replies.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.replies.DeleteHostedContents">)),
    UsersJoinedTeamsPrimaryChannelMessagesRepliesGetHostedContentsContent: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.replies.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.replies.GetHostedContentsContent">)),
    UsersJoinedTeamsPrimaryChannelMessagesRepliesUpdateHostedContentsContent: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.replies.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.replies.UpdateHostedContentsContent">)),
    UsersJoinedTeamsPrimaryChannelMessagesRepliesDeleteHostedContentsContent: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.replies.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.replies.DeleteHostedContentsContent">)),
    UsersJoinedTeamsPrimaryChannelMessagesRepliesHostedContentsGetCountF576: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.replies.hostedContents.GetCount-f576", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.replies.hostedContents.GetCount-f576">)),
    UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSetReaction: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction">)),
    UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSoftDelete: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete">)),
    UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete">)),
    UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUnsetReaction: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction">)),
    UsersJoinedTeamsPrimaryChannelMessagesRepliesGetCount5af6: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.replies.GetCount-5af6", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.replies.GetCount-5af6">)),
    UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesDelta: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.delta", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.delta">)),
    UsersUserJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesReplyWithQuote: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote">)),
    UsersJoinedTeamsPrimaryChannelMessagesGetCount08f5: (...args) => callOperation("users.joinedTeams.primaryChannel.messages.GetCount-08f5", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.messages.GetCount-08f5">)),
    UsersUserJoinedTeamsTeamPrimaryChannelMessagesDelta: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.messages.delta", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.delta">)),
    UsersUserJoinedTeamsTeamPrimaryChannelMessagesReplyWithQuote: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.messages.replyWithQuote", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.messages.replyWithQuote">)),
    UsersUserJoinedTeamsTeamPrimaryChannelArchive: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.archive", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.archive">)),
    UsersUserJoinedTeamsTeamPrimaryChannelCompleteMigration: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.completeMigration", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.completeMigration">)),
    UsersUserJoinedTeamsTeamPrimaryChannelDoesUserHaveAccess: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.doesUserHaveAccess", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.doesUserHaveAccess">)),
    UsersUserJoinedTeamsTeamPrimaryChannelProvisionEmail: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.provisionEmail", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.provisionEmail">)),
    UsersUserJoinedTeamsTeamPrimaryChannelRemoveEmail: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.removeEmail", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.removeEmail">)),
    UsersUserJoinedTeamsTeamPrimaryChannelStartMigration: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.startMigration", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.startMigration">)),
    UsersUserJoinedTeamsTeamPrimaryChannelUnarchive: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.unarchive", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.unarchive">)),
    UsersJoinedTeamsPrimaryChannelListSharedWithTeams: (...args) => callOperation("users.joinedTeams.primaryChannel.ListSharedWithTeams", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.ListSharedWithTeams">)),
    UsersJoinedTeamsPrimaryChannelCreateSharedWithTeams: (...args) => callOperation("users.joinedTeams.primaryChannel.CreateSharedWithTeams", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.CreateSharedWithTeams">)),
    UsersJoinedTeamsPrimaryChannelGetSharedWithTeams: (...args) => callOperation("users.joinedTeams.primaryChannel.GetSharedWithTeams", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.GetSharedWithTeams">)),
    UsersJoinedTeamsPrimaryChannelUpdateSharedWithTeams: (...args) => callOperation("users.joinedTeams.primaryChannel.UpdateSharedWithTeams", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.UpdateSharedWithTeams">)),
    UsersJoinedTeamsPrimaryChannelDeleteSharedWithTeams: (...args) => callOperation("users.joinedTeams.primaryChannel.DeleteSharedWithTeams", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.DeleteSharedWithTeams">)),
    UsersJoinedTeamsPrimaryChannelSharedWithTeamsListAllowedMembers: (...args) => callOperation("users.joinedTeams.primaryChannel.sharedWithTeams.ListAllowedMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.sharedWithTeams.ListAllowedMembers">)),
    UsersJoinedTeamsPrimaryChannelSharedWithTeamsGetAllowedMembers: (...args) => callOperation("users.joinedTeams.primaryChannel.sharedWithTeams.GetAllowedMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.sharedWithTeams.GetAllowedMembers">)),
    UsersJoinedTeamsPrimaryChannelSharedWithTeamsAllowedMembersGetCount3d16: (...args) => callOperation("users.joinedTeams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-3d16", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-3d16">)),
    UsersJoinedTeamsPrimaryChannelSharedWithTeamsGetTeam: (...args) => callOperation("users.joinedTeams.primaryChannel.sharedWithTeams.GetTeam", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.sharedWithTeams.GetTeam">)),
    UsersJoinedTeamsPrimaryChannelSharedWithTeamsGetCountD3ab: (...args) => callOperation("users.joinedTeams.primaryChannel.sharedWithTeams.GetCount-d3ab", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.sharedWithTeams.GetCount-d3ab">)),
    UsersJoinedTeamsPrimaryChannelListTabs: (...args) => callOperation("users.joinedTeams.primaryChannel.ListTabs", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.ListTabs">)),
    UsersJoinedTeamsPrimaryChannelCreateTabs: (...args) => callOperation("users.joinedTeams.primaryChannel.CreateTabs", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.CreateTabs">)),
    UsersJoinedTeamsPrimaryChannelGetTabs: (...args) => callOperation("users.joinedTeams.primaryChannel.GetTabs", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.GetTabs">)),
    UsersJoinedTeamsPrimaryChannelUpdateTabs: (...args) => callOperation("users.joinedTeams.primaryChannel.UpdateTabs", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.UpdateTabs">)),
    UsersJoinedTeamsPrimaryChannelDeleteTabs: (...args) => callOperation("users.joinedTeams.primaryChannel.DeleteTabs", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.DeleteTabs">)),
  };
}
