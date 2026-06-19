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
export const TeamsGraphGroupsTeam03OperationKeys = [
  "groups.team.primaryChannel.GetEnabledApps",
  "groups.team.primaryChannel.enabledApps.GetCount-593e",
  "groups.team.primaryChannel.GetFilesFolder",
  "groups.team.primaryChannel.GetFilesFolderContent",
  "groups.team.primaryChannel.UpdateFilesFolderContent",
  "groups.team.primaryChannel.DeleteFilesFolderContent",
  "groups.team.primaryChannel.ListMembers",
  "groups.team.primaryChannel.CreateMembers",
  "groups.team.primaryChannel.GetMembers",
  "groups.team.primaryChannel.UpdateMembers",
  "groups.team.primaryChannel.DeleteMembers",
  "groups.team.primaryChannel.members.GetCount-cb2b",
  "groups.group.team.primaryChannel.members.add",
  "groups.group.team.primaryChannel.members.remove",
  "groups.team.primaryChannel.ListMessages",
  "groups.team.primaryChannel.CreateMessages",
  "groups.team.primaryChannel.GetMessages",
  "groups.team.primaryChannel.UpdateMessages",
  "groups.team.primaryChannel.DeleteMessages",
  "groups.team.primaryChannel.messages.ListHostedContents",
  "groups.team.primaryChannel.messages.CreateHostedContents",
  "groups.team.primaryChannel.messages.GetHostedContents",
  "groups.team.primaryChannel.messages.UpdateHostedContents",
  "groups.team.primaryChannel.messages.DeleteHostedContents",
  "groups.team.primaryChannel.messages.GetHostedContentsContent",
  "groups.team.primaryChannel.messages.UpdateHostedContentsContent",
  "groups.team.primaryChannel.messages.DeleteHostedContentsContent",
  "groups.team.primaryChannel.messages.hostedContents.GetCount-7396",
  "groups.group.team.primaryChannel.messages.chatMessage.setReaction",
  "groups.group.team.primaryChannel.messages.chatMessage.softDelete",
  "groups.group.team.primaryChannel.messages.chatMessage.undoSoftDelete",
  "groups.group.team.primaryChannel.messages.chatMessage.unsetReaction",
  "groups.team.primaryChannel.messages.ListReplies",
  "groups.team.primaryChannel.messages.CreateReplies",
  "groups.team.primaryChannel.messages.GetReplies",
  "groups.team.primaryChannel.messages.UpdateReplies",
  "groups.team.primaryChannel.messages.DeleteReplies",
  "groups.team.primaryChannel.messages.replies.ListHostedContents",
  "groups.team.primaryChannel.messages.replies.CreateHostedContents",
  "groups.team.primaryChannel.messages.replies.GetHostedContents",
  "groups.team.primaryChannel.messages.replies.UpdateHostedContents",
  "groups.team.primaryChannel.messages.replies.DeleteHostedContents",
  "groups.team.primaryChannel.messages.replies.GetHostedContentsContent",
  "groups.team.primaryChannel.messages.replies.UpdateHostedContentsContent",
  "groups.team.primaryChannel.messages.replies.DeleteHostedContentsContent",
  "groups.team.primaryChannel.messages.replies.hostedContents.GetCount-4ed6",
  "groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction",
  "groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete",
  "groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete",
  "groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction",
  "groups.team.primaryChannel.messages.replies.GetCount-b5b0",
  "groups.group.team.primaryChannel.messages.chatMessage.replies.delta",
  "groups.group.team.primaryChannel.messages.chatMessage.replies.replyWithQuote",
  "groups.team.primaryChannel.messages.GetCount-045c",
  "groups.group.team.primaryChannel.messages.delta",
  "groups.group.team.primaryChannel.messages.replyWithQuote",
  "groups.group.team.primaryChannel.archive",
  "groups.group.team.primaryChannel.completeMigration",
  "groups.group.team.primaryChannel.doesUserHaveAccess",
  "groups.group.team.primaryChannel.provisionEmail",
  "groups.group.team.primaryChannel.removeEmail",
  "groups.group.team.primaryChannel.startMigration",
  "groups.group.team.primaryChannel.unarchive",
  "groups.team.primaryChannel.ListSharedWithTeams",
  "groups.team.primaryChannel.CreateSharedWithTeams",
  "groups.team.primaryChannel.GetSharedWithTeams",
  "groups.team.primaryChannel.UpdateSharedWithTeams",
  "groups.team.primaryChannel.DeleteSharedWithTeams",
  "groups.team.primaryChannel.sharedWithTeams.ListAllowedMembers",
  "groups.team.primaryChannel.sharedWithTeams.GetAllowedMembers",
  "groups.team.primaryChannel.sharedWithTeams.allowedMembers.GetCount-c289",
  "groups.team.primaryChannel.sharedWithTeams.GetTeam",
  "groups.team.primaryChannel.sharedWithTeams.GetCount-fbef",
  "groups.team.primaryChannel.ListTabs",
  "groups.team.primaryChannel.CreateTabs",
  "groups.team.primaryChannel.GetTabs",
  "groups.team.primaryChannel.UpdateTabs",
  "groups.team.primaryChannel.DeleteTabs",
  "groups.team.primaryChannel.tabs.GetTeamsApp",
  "groups.team.primaryChannel.tabs.GetCount-23e6"
] as const;
export type TeamsGraphGroupsTeam03OperationKey = typeof TeamsGraphGroupsTeam03OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphGroupsTeam03OperationPathParamMap {
  "groups.team.primaryChannel.GetEnabledApps": { "group-id": TeamsGraphPathParamValue; "teamsApp-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.enabledApps.GetCount-593e": { "group-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.GetFilesFolder": { "group-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.GetFilesFolderContent": { "group-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.UpdateFilesFolderContent": { "group-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.DeleteFilesFolderContent": { "group-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.ListMembers": { "group-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.CreateMembers": { "group-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.GetMembers": { "group-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.UpdateMembers": { "group-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.DeleteMembers": { "group-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.members.GetCount-cb2b": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.members.add": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.members.remove": { "group-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.ListMessages": { "group-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.CreateMessages": { "group-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.GetMessages": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.UpdateMessages": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.DeleteMessages": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.ListHostedContents": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.CreateHostedContents": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.GetHostedContents": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.UpdateHostedContents": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.DeleteHostedContents": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.GetHostedContentsContent": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.UpdateHostedContentsContent": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.DeleteHostedContentsContent": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.hostedContents.GetCount-7396": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.messages.chatMessage.setReaction": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.messages.chatMessage.softDelete": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.messages.chatMessage.undoSoftDelete": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.messages.chatMessage.unsetReaction": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.ListReplies": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.CreateReplies": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.GetReplies": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.UpdateReplies": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.DeleteReplies": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.replies.ListHostedContents": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.replies.CreateHostedContents": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.replies.GetHostedContents": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.replies.UpdateHostedContents": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.replies.DeleteHostedContents": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.replies.GetHostedContentsContent": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.replies.UpdateHostedContentsContent": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.replies.DeleteHostedContentsContent": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.replies.hostedContents.GetCount-4ed6": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.replies.GetCount-b5b0": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.messages.chatMessage.replies.delta": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.messages.chatMessage.replies.replyWithQuote": { "group-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.messages.GetCount-045c": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.messages.delta": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.messages.replyWithQuote": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.archive": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.completeMigration": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.doesUserHaveAccess": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.provisionEmail": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.removeEmail": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.startMigration": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.unarchive": { "group-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.ListSharedWithTeams": { "group-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.CreateSharedWithTeams": { "group-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.GetSharedWithTeams": { "group-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.UpdateSharedWithTeams": { "group-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.DeleteSharedWithTeams": { "group-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.sharedWithTeams.ListAllowedMembers": { "group-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.sharedWithTeams.GetAllowedMembers": { "group-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.sharedWithTeams.allowedMembers.GetCount-c289": { "group-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.sharedWithTeams.GetTeam": { "group-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.sharedWithTeams.GetCount-fbef": { "group-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.ListTabs": { "group-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.CreateTabs": { "group-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.GetTabs": { "group-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.UpdateTabs": { "group-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.DeleteTabs": { "group-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.tabs.GetTeamsApp": { "group-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.tabs.GetCount-23e6": { "group-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphGroupsTeam03OperationRequestMap {
  "groups.team.primaryChannel.GetEnabledApps": TeamsGraphOperationInput<"groups.team.primaryChannel.GetEnabledApps">;
  "groups.team.primaryChannel.enabledApps.GetCount-593e": TeamsGraphOperationInput<"groups.team.primaryChannel.enabledApps.GetCount-593e">;
  "groups.team.primaryChannel.GetFilesFolder": TeamsGraphOperationInput<"groups.team.primaryChannel.GetFilesFolder">;
  "groups.team.primaryChannel.GetFilesFolderContent": TeamsGraphOperationInput<"groups.team.primaryChannel.GetFilesFolderContent">;
  "groups.team.primaryChannel.UpdateFilesFolderContent": TeamsGraphOperationInput<"groups.team.primaryChannel.UpdateFilesFolderContent">;
  "groups.team.primaryChannel.DeleteFilesFolderContent": TeamsGraphOperationInput<"groups.team.primaryChannel.DeleteFilesFolderContent">;
  "groups.team.primaryChannel.ListMembers": TeamsGraphOperationInput<"groups.team.primaryChannel.ListMembers">;
  "groups.team.primaryChannel.CreateMembers": TeamsGraphOperationInput<"groups.team.primaryChannel.CreateMembers">;
  "groups.team.primaryChannel.GetMembers": TeamsGraphOperationInput<"groups.team.primaryChannel.GetMembers">;
  "groups.team.primaryChannel.UpdateMembers": TeamsGraphOperationInput<"groups.team.primaryChannel.UpdateMembers">;
  "groups.team.primaryChannel.DeleteMembers": TeamsGraphOperationInput<"groups.team.primaryChannel.DeleteMembers">;
  "groups.team.primaryChannel.members.GetCount-cb2b": TeamsGraphOperationInput<"groups.team.primaryChannel.members.GetCount-cb2b">;
  "groups.group.team.primaryChannel.members.add": TeamsGraphOperationInput<"groups.group.team.primaryChannel.members.add">;
  "groups.group.team.primaryChannel.members.remove": TeamsGraphOperationInput<"groups.group.team.primaryChannel.members.remove">;
  "groups.team.primaryChannel.ListMessages": TeamsGraphOperationInput<"groups.team.primaryChannel.ListMessages">;
  "groups.team.primaryChannel.CreateMessages": TeamsGraphOperationInput<"groups.team.primaryChannel.CreateMessages">;
  "groups.team.primaryChannel.GetMessages": TeamsGraphOperationInput<"groups.team.primaryChannel.GetMessages">;
  "groups.team.primaryChannel.UpdateMessages": TeamsGraphOperationInput<"groups.team.primaryChannel.UpdateMessages">;
  "groups.team.primaryChannel.DeleteMessages": TeamsGraphOperationInput<"groups.team.primaryChannel.DeleteMessages">;
  "groups.team.primaryChannel.messages.ListHostedContents": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.ListHostedContents">;
  "groups.team.primaryChannel.messages.CreateHostedContents": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.CreateHostedContents">;
  "groups.team.primaryChannel.messages.GetHostedContents": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.GetHostedContents">;
  "groups.team.primaryChannel.messages.UpdateHostedContents": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.UpdateHostedContents">;
  "groups.team.primaryChannel.messages.DeleteHostedContents": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.DeleteHostedContents">;
  "groups.team.primaryChannel.messages.GetHostedContentsContent": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.GetHostedContentsContent">;
  "groups.team.primaryChannel.messages.UpdateHostedContentsContent": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.UpdateHostedContentsContent">;
  "groups.team.primaryChannel.messages.DeleteHostedContentsContent": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.DeleteHostedContentsContent">;
  "groups.team.primaryChannel.messages.hostedContents.GetCount-7396": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.hostedContents.GetCount-7396">;
  "groups.group.team.primaryChannel.messages.chatMessage.setReaction": TeamsGraphOperationInput<"groups.group.team.primaryChannel.messages.chatMessage.setReaction">;
  "groups.group.team.primaryChannel.messages.chatMessage.softDelete": TeamsGraphOperationInput<"groups.group.team.primaryChannel.messages.chatMessage.softDelete">;
  "groups.group.team.primaryChannel.messages.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"groups.group.team.primaryChannel.messages.chatMessage.undoSoftDelete">;
  "groups.group.team.primaryChannel.messages.chatMessage.unsetReaction": TeamsGraphOperationInput<"groups.group.team.primaryChannel.messages.chatMessage.unsetReaction">;
  "groups.team.primaryChannel.messages.ListReplies": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.ListReplies">;
  "groups.team.primaryChannel.messages.CreateReplies": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.CreateReplies">;
  "groups.team.primaryChannel.messages.GetReplies": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.GetReplies">;
  "groups.team.primaryChannel.messages.UpdateReplies": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.UpdateReplies">;
  "groups.team.primaryChannel.messages.DeleteReplies": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.DeleteReplies">;
  "groups.team.primaryChannel.messages.replies.ListHostedContents": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.replies.ListHostedContents">;
  "groups.team.primaryChannel.messages.replies.CreateHostedContents": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.replies.CreateHostedContents">;
  "groups.team.primaryChannel.messages.replies.GetHostedContents": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.replies.GetHostedContents">;
  "groups.team.primaryChannel.messages.replies.UpdateHostedContents": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.replies.UpdateHostedContents">;
  "groups.team.primaryChannel.messages.replies.DeleteHostedContents": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.replies.DeleteHostedContents">;
  "groups.team.primaryChannel.messages.replies.GetHostedContentsContent": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.replies.GetHostedContentsContent">;
  "groups.team.primaryChannel.messages.replies.UpdateHostedContentsContent": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.replies.UpdateHostedContentsContent">;
  "groups.team.primaryChannel.messages.replies.DeleteHostedContentsContent": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.replies.DeleteHostedContentsContent">;
  "groups.team.primaryChannel.messages.replies.hostedContents.GetCount-4ed6": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.replies.hostedContents.GetCount-4ed6">;
  "groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction": TeamsGraphOperationInput<"groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction">;
  "groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete": TeamsGraphOperationInput<"groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete">;
  "groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete">;
  "groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction": TeamsGraphOperationInput<"groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction">;
  "groups.team.primaryChannel.messages.replies.GetCount-b5b0": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.replies.GetCount-b5b0">;
  "groups.group.team.primaryChannel.messages.chatMessage.replies.delta": TeamsGraphOperationInput<"groups.group.team.primaryChannel.messages.chatMessage.replies.delta">;
  "groups.group.team.primaryChannel.messages.chatMessage.replies.replyWithQuote": TeamsGraphOperationInput<"groups.group.team.primaryChannel.messages.chatMessage.replies.replyWithQuote">;
  "groups.team.primaryChannel.messages.GetCount-045c": TeamsGraphOperationInput<"groups.team.primaryChannel.messages.GetCount-045c">;
  "groups.group.team.primaryChannel.messages.delta": TeamsGraphOperationInput<"groups.group.team.primaryChannel.messages.delta">;
  "groups.group.team.primaryChannel.messages.replyWithQuote": TeamsGraphOperationInput<"groups.group.team.primaryChannel.messages.replyWithQuote">;
  "groups.group.team.primaryChannel.archive": TeamsGraphOperationInput<"groups.group.team.primaryChannel.archive">;
  "groups.group.team.primaryChannel.completeMigration": TeamsGraphOperationInput<"groups.group.team.primaryChannel.completeMigration">;
  "groups.group.team.primaryChannel.doesUserHaveAccess": TeamsGraphOperationInput<"groups.group.team.primaryChannel.doesUserHaveAccess">;
  "groups.group.team.primaryChannel.provisionEmail": TeamsGraphOperationInput<"groups.group.team.primaryChannel.provisionEmail">;
  "groups.group.team.primaryChannel.removeEmail": TeamsGraphOperationInput<"groups.group.team.primaryChannel.removeEmail">;
  "groups.group.team.primaryChannel.startMigration": TeamsGraphOperationInput<"groups.group.team.primaryChannel.startMigration">;
  "groups.group.team.primaryChannel.unarchive": TeamsGraphOperationInput<"groups.group.team.primaryChannel.unarchive">;
  "groups.team.primaryChannel.ListSharedWithTeams": TeamsGraphOperationInput<"groups.team.primaryChannel.ListSharedWithTeams">;
  "groups.team.primaryChannel.CreateSharedWithTeams": TeamsGraphOperationInput<"groups.team.primaryChannel.CreateSharedWithTeams">;
  "groups.team.primaryChannel.GetSharedWithTeams": TeamsGraphOperationInput<"groups.team.primaryChannel.GetSharedWithTeams">;
  "groups.team.primaryChannel.UpdateSharedWithTeams": TeamsGraphOperationInput<"groups.team.primaryChannel.UpdateSharedWithTeams">;
  "groups.team.primaryChannel.DeleteSharedWithTeams": TeamsGraphOperationInput<"groups.team.primaryChannel.DeleteSharedWithTeams">;
  "groups.team.primaryChannel.sharedWithTeams.ListAllowedMembers": TeamsGraphOperationInput<"groups.team.primaryChannel.sharedWithTeams.ListAllowedMembers">;
  "groups.team.primaryChannel.sharedWithTeams.GetAllowedMembers": TeamsGraphOperationInput<"groups.team.primaryChannel.sharedWithTeams.GetAllowedMembers">;
  "groups.team.primaryChannel.sharedWithTeams.allowedMembers.GetCount-c289": TeamsGraphOperationInput<"groups.team.primaryChannel.sharedWithTeams.allowedMembers.GetCount-c289">;
  "groups.team.primaryChannel.sharedWithTeams.GetTeam": TeamsGraphOperationInput<"groups.team.primaryChannel.sharedWithTeams.GetTeam">;
  "groups.team.primaryChannel.sharedWithTeams.GetCount-fbef": TeamsGraphOperationInput<"groups.team.primaryChannel.sharedWithTeams.GetCount-fbef">;
  "groups.team.primaryChannel.ListTabs": TeamsGraphOperationInput<"groups.team.primaryChannel.ListTabs">;
  "groups.team.primaryChannel.CreateTabs": TeamsGraphOperationInput<"groups.team.primaryChannel.CreateTabs">;
  "groups.team.primaryChannel.GetTabs": TeamsGraphOperationInput<"groups.team.primaryChannel.GetTabs">;
  "groups.team.primaryChannel.UpdateTabs": TeamsGraphOperationInput<"groups.team.primaryChannel.UpdateTabs">;
  "groups.team.primaryChannel.DeleteTabs": TeamsGraphOperationInput<"groups.team.primaryChannel.DeleteTabs">;
  "groups.team.primaryChannel.tabs.GetTeamsApp": TeamsGraphOperationInput<"groups.team.primaryChannel.tabs.GetTeamsApp">;
  "groups.team.primaryChannel.tabs.GetCount-23e6": TeamsGraphOperationInput<"groups.team.primaryChannel.tabs.GetCount-23e6">;
}

export interface TeamsGraphGroupsTeam03GeneratedClient {
  GroupsTeamPrimaryChannelGetEnabledApps(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.GetEnabledApps">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.GetEnabledApps"]>;
  GroupsTeamPrimaryChannelEnabledAppsGetCount593e(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.enabledApps.GetCount-593e">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.enabledApps.GetCount-593e"]>;
  GroupsTeamPrimaryChannelGetFilesFolder(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.GetFilesFolder">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.GetFilesFolder"]>;
  GroupsTeamPrimaryChannelGetFilesFolderContent(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.GetFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.GetFilesFolderContent"]>;
  GroupsTeamPrimaryChannelUpdateFilesFolderContent(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.UpdateFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.UpdateFilesFolderContent"]>;
  GroupsTeamPrimaryChannelDeleteFilesFolderContent(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.DeleteFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.DeleteFilesFolderContent"]>;
  GroupsTeamPrimaryChannelListMembers(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.ListMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.ListMembers"]>;
  GroupsTeamPrimaryChannelCreateMembers(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.CreateMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.CreateMembers"]>;
  GroupsTeamPrimaryChannelGetMembers(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.GetMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.GetMembers"]>;
  GroupsTeamPrimaryChannelUpdateMembers(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.UpdateMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.UpdateMembers"]>;
  GroupsTeamPrimaryChannelDeleteMembers(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.DeleteMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.DeleteMembers"]>;
  GroupsTeamPrimaryChannelMembersGetCountCb2b(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.members.GetCount-cb2b">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.members.GetCount-cb2b"]>;
  GroupsGroupTeamPrimaryChannelMembersAdd(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.members.add">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.members.add"]>;
  GroupsGroupTeamPrimaryChannelMembersRemove(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.members.remove">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.members.remove"]>;
  GroupsTeamPrimaryChannelListMessages(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.ListMessages">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.ListMessages"]>;
  GroupsTeamPrimaryChannelCreateMessages(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.CreateMessages">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.CreateMessages"]>;
  GroupsTeamPrimaryChannelGetMessages(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.GetMessages">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.GetMessages"]>;
  GroupsTeamPrimaryChannelUpdateMessages(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.UpdateMessages">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.UpdateMessages"]>;
  GroupsTeamPrimaryChannelDeleteMessages(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.DeleteMessages">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.DeleteMessages"]>;
  GroupsTeamPrimaryChannelMessagesListHostedContents(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.ListHostedContents"]>;
  GroupsTeamPrimaryChannelMessagesCreateHostedContents(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.CreateHostedContents"]>;
  GroupsTeamPrimaryChannelMessagesGetHostedContents(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.GetHostedContents"]>;
  GroupsTeamPrimaryChannelMessagesUpdateHostedContents(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.UpdateHostedContents"]>;
  GroupsTeamPrimaryChannelMessagesDeleteHostedContents(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.DeleteHostedContents"]>;
  GroupsTeamPrimaryChannelMessagesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.GetHostedContentsContent"]>;
  GroupsTeamPrimaryChannelMessagesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.UpdateHostedContentsContent"]>;
  GroupsTeamPrimaryChannelMessagesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.DeleteHostedContentsContent"]>;
  GroupsTeamPrimaryChannelMessagesHostedContentsGetCount7396(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.hostedContents.GetCount-7396">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.hostedContents.GetCount-7396"]>;
  GroupsGroupTeamPrimaryChannelMessagesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.messages.chatMessage.setReaction"]>;
  GroupsGroupTeamPrimaryChannelMessagesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.messages.chatMessage.softDelete"]>;
  GroupsGroupTeamPrimaryChannelMessagesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.messages.chatMessage.undoSoftDelete"]>;
  GroupsGroupTeamPrimaryChannelMessagesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.messages.chatMessage.unsetReaction"]>;
  GroupsTeamPrimaryChannelMessagesListReplies(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.ListReplies">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.ListReplies"]>;
  GroupsTeamPrimaryChannelMessagesCreateReplies(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.CreateReplies">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.CreateReplies"]>;
  GroupsTeamPrimaryChannelMessagesGetReplies(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.GetReplies">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.GetReplies"]>;
  GroupsTeamPrimaryChannelMessagesUpdateReplies(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.UpdateReplies">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.UpdateReplies"]>;
  GroupsTeamPrimaryChannelMessagesDeleteReplies(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.DeleteReplies">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.DeleteReplies"]>;
  GroupsTeamPrimaryChannelMessagesRepliesListHostedContents(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.replies.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.replies.ListHostedContents"]>;
  GroupsTeamPrimaryChannelMessagesRepliesCreateHostedContents(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.replies.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.replies.CreateHostedContents"]>;
  GroupsTeamPrimaryChannelMessagesRepliesGetHostedContents(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.replies.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.replies.GetHostedContents"]>;
  GroupsTeamPrimaryChannelMessagesRepliesUpdateHostedContents(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.replies.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.replies.UpdateHostedContents"]>;
  GroupsTeamPrimaryChannelMessagesRepliesDeleteHostedContents(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.replies.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.replies.DeleteHostedContents"]>;
  GroupsTeamPrimaryChannelMessagesRepliesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.replies.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.replies.GetHostedContentsContent"]>;
  GroupsTeamPrimaryChannelMessagesRepliesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.replies.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.replies.UpdateHostedContentsContent"]>;
  GroupsTeamPrimaryChannelMessagesRepliesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.replies.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.replies.DeleteHostedContentsContent"]>;
  GroupsTeamPrimaryChannelMessagesRepliesHostedContentsGetCount4ed6(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.replies.hostedContents.GetCount-4ed6">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.replies.hostedContents.GetCount-4ed6"]>;
  GroupsGroupTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction"]>;
  GroupsGroupTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete"]>;
  GroupsGroupTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete"]>;
  GroupsGroupTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction"]>;
  GroupsTeamPrimaryChannelMessagesRepliesGetCountB5b0(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.replies.GetCount-b5b0">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.replies.GetCount-b5b0"]>;
  GroupsGroupTeamPrimaryChannelMessagesChatMessageRepliesDelta(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.chatMessage.replies.delta">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.messages.chatMessage.replies.delta"]>;
  GroupsGroupTeamPrimaryChannelMessagesChatMessageRepliesReplyWithQuote(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.chatMessage.replies.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.messages.chatMessage.replies.replyWithQuote"]>;
  GroupsTeamPrimaryChannelMessagesGetCount045c(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.GetCount-045c">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.messages.GetCount-045c"]>;
  GroupsGroupTeamPrimaryChannelMessagesDelta(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.delta">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.messages.delta"]>;
  GroupsGroupTeamPrimaryChannelMessagesReplyWithQuote(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.messages.replyWithQuote"]>;
  GroupsGroupTeamPrimaryChannelArchive(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.archive">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.archive"]>;
  GroupsGroupTeamPrimaryChannelCompleteMigration(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.completeMigration">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.completeMigration"]>;
  GroupsGroupTeamPrimaryChannelDoesUserHaveAccess(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.doesUserHaveAccess">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.doesUserHaveAccess"]>;
  GroupsGroupTeamPrimaryChannelProvisionEmail(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.provisionEmail">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.provisionEmail"]>;
  GroupsGroupTeamPrimaryChannelRemoveEmail(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.removeEmail">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.removeEmail"]>;
  GroupsGroupTeamPrimaryChannelStartMigration(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.startMigration">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.startMigration"]>;
  GroupsGroupTeamPrimaryChannelUnarchive(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.unarchive">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.unarchive"]>;
  GroupsTeamPrimaryChannelListSharedWithTeams(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.ListSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.ListSharedWithTeams"]>;
  GroupsTeamPrimaryChannelCreateSharedWithTeams(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.CreateSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.CreateSharedWithTeams"]>;
  GroupsTeamPrimaryChannelGetSharedWithTeams(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.GetSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.GetSharedWithTeams"]>;
  GroupsTeamPrimaryChannelUpdateSharedWithTeams(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.UpdateSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.UpdateSharedWithTeams"]>;
  GroupsTeamPrimaryChannelDeleteSharedWithTeams(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.DeleteSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.DeleteSharedWithTeams"]>;
  GroupsTeamPrimaryChannelSharedWithTeamsListAllowedMembers(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.sharedWithTeams.ListAllowedMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.sharedWithTeams.ListAllowedMembers"]>;
  GroupsTeamPrimaryChannelSharedWithTeamsGetAllowedMembers(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.sharedWithTeams.GetAllowedMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.sharedWithTeams.GetAllowedMembers"]>;
  GroupsTeamPrimaryChannelSharedWithTeamsAllowedMembersGetCountC289(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.sharedWithTeams.allowedMembers.GetCount-c289">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.sharedWithTeams.allowedMembers.GetCount-c289"]>;
  GroupsTeamPrimaryChannelSharedWithTeamsGetTeam(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.sharedWithTeams.GetTeam">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.sharedWithTeams.GetTeam"]>;
  GroupsTeamPrimaryChannelSharedWithTeamsGetCountFbef(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.sharedWithTeams.GetCount-fbef">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.sharedWithTeams.GetCount-fbef"]>;
  GroupsTeamPrimaryChannelListTabs(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.ListTabs">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.ListTabs"]>;
  GroupsTeamPrimaryChannelCreateTabs(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.CreateTabs">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.CreateTabs"]>;
  GroupsTeamPrimaryChannelGetTabs(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.GetTabs">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.GetTabs"]>;
  GroupsTeamPrimaryChannelUpdateTabs(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.UpdateTabs">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.UpdateTabs"]>;
  GroupsTeamPrimaryChannelDeleteTabs(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.DeleteTabs">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.DeleteTabs"]>;
  GroupsTeamPrimaryChannelTabsGetTeamsApp(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.tabs.GetTeamsApp">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.tabs.GetTeamsApp"]>;
  GroupsTeamPrimaryChannelTabsGetCount23e6(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.tabs.GetCount-23e6">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.tabs.GetCount-23e6"]>;
}

export const TeamsGraphGroupsTeam03GeneratedFunctionNames = [
  "GroupsTeamPrimaryChannelGetEnabledApps",
  "GroupsTeamPrimaryChannelEnabledAppsGetCount593e",
  "GroupsTeamPrimaryChannelGetFilesFolder",
  "GroupsTeamPrimaryChannelGetFilesFolderContent",
  "GroupsTeamPrimaryChannelUpdateFilesFolderContent",
  "GroupsTeamPrimaryChannelDeleteFilesFolderContent",
  "GroupsTeamPrimaryChannelListMembers",
  "GroupsTeamPrimaryChannelCreateMembers",
  "GroupsTeamPrimaryChannelGetMembers",
  "GroupsTeamPrimaryChannelUpdateMembers",
  "GroupsTeamPrimaryChannelDeleteMembers",
  "GroupsTeamPrimaryChannelMembersGetCountCb2b",
  "GroupsGroupTeamPrimaryChannelMembersAdd",
  "GroupsGroupTeamPrimaryChannelMembersRemove",
  "GroupsTeamPrimaryChannelListMessages",
  "GroupsTeamPrimaryChannelCreateMessages",
  "GroupsTeamPrimaryChannelGetMessages",
  "GroupsTeamPrimaryChannelUpdateMessages",
  "GroupsTeamPrimaryChannelDeleteMessages",
  "GroupsTeamPrimaryChannelMessagesListHostedContents",
  "GroupsTeamPrimaryChannelMessagesCreateHostedContents",
  "GroupsTeamPrimaryChannelMessagesGetHostedContents",
  "GroupsTeamPrimaryChannelMessagesUpdateHostedContents",
  "GroupsTeamPrimaryChannelMessagesDeleteHostedContents",
  "GroupsTeamPrimaryChannelMessagesGetHostedContentsContent",
  "GroupsTeamPrimaryChannelMessagesUpdateHostedContentsContent",
  "GroupsTeamPrimaryChannelMessagesDeleteHostedContentsContent",
  "GroupsTeamPrimaryChannelMessagesHostedContentsGetCount7396",
  "GroupsGroupTeamPrimaryChannelMessagesChatMessageSetReaction",
  "GroupsGroupTeamPrimaryChannelMessagesChatMessageSoftDelete",
  "GroupsGroupTeamPrimaryChannelMessagesChatMessageUndoSoftDelete",
  "GroupsGroupTeamPrimaryChannelMessagesChatMessageUnsetReaction",
  "GroupsTeamPrimaryChannelMessagesListReplies",
  "GroupsTeamPrimaryChannelMessagesCreateReplies",
  "GroupsTeamPrimaryChannelMessagesGetReplies",
  "GroupsTeamPrimaryChannelMessagesUpdateReplies",
  "GroupsTeamPrimaryChannelMessagesDeleteReplies",
  "GroupsTeamPrimaryChannelMessagesRepliesListHostedContents",
  "GroupsTeamPrimaryChannelMessagesRepliesCreateHostedContents",
  "GroupsTeamPrimaryChannelMessagesRepliesGetHostedContents",
  "GroupsTeamPrimaryChannelMessagesRepliesUpdateHostedContents",
  "GroupsTeamPrimaryChannelMessagesRepliesDeleteHostedContents",
  "GroupsTeamPrimaryChannelMessagesRepliesGetHostedContentsContent",
  "GroupsTeamPrimaryChannelMessagesRepliesUpdateHostedContentsContent",
  "GroupsTeamPrimaryChannelMessagesRepliesDeleteHostedContentsContent",
  "GroupsTeamPrimaryChannelMessagesRepliesHostedContentsGetCount4ed6",
  "GroupsGroupTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSetReaction",
  "GroupsGroupTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSoftDelete",
  "GroupsGroupTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete",
  "GroupsGroupTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUnsetReaction",
  "GroupsTeamPrimaryChannelMessagesRepliesGetCountB5b0",
  "GroupsGroupTeamPrimaryChannelMessagesChatMessageRepliesDelta",
  "GroupsGroupTeamPrimaryChannelMessagesChatMessageRepliesReplyWithQuote",
  "GroupsTeamPrimaryChannelMessagesGetCount045c",
  "GroupsGroupTeamPrimaryChannelMessagesDelta",
  "GroupsGroupTeamPrimaryChannelMessagesReplyWithQuote",
  "GroupsGroupTeamPrimaryChannelArchive",
  "GroupsGroupTeamPrimaryChannelCompleteMigration",
  "GroupsGroupTeamPrimaryChannelDoesUserHaveAccess",
  "GroupsGroupTeamPrimaryChannelProvisionEmail",
  "GroupsGroupTeamPrimaryChannelRemoveEmail",
  "GroupsGroupTeamPrimaryChannelStartMigration",
  "GroupsGroupTeamPrimaryChannelUnarchive",
  "GroupsTeamPrimaryChannelListSharedWithTeams",
  "GroupsTeamPrimaryChannelCreateSharedWithTeams",
  "GroupsTeamPrimaryChannelGetSharedWithTeams",
  "GroupsTeamPrimaryChannelUpdateSharedWithTeams",
  "GroupsTeamPrimaryChannelDeleteSharedWithTeams",
  "GroupsTeamPrimaryChannelSharedWithTeamsListAllowedMembers",
  "GroupsTeamPrimaryChannelSharedWithTeamsGetAllowedMembers",
  "GroupsTeamPrimaryChannelSharedWithTeamsAllowedMembersGetCountC289",
  "GroupsTeamPrimaryChannelSharedWithTeamsGetTeam",
  "GroupsTeamPrimaryChannelSharedWithTeamsGetCountFbef",
  "GroupsTeamPrimaryChannelListTabs",
  "GroupsTeamPrimaryChannelCreateTabs",
  "GroupsTeamPrimaryChannelGetTabs",
  "GroupsTeamPrimaryChannelUpdateTabs",
  "GroupsTeamPrimaryChannelDeleteTabs",
  "GroupsTeamPrimaryChannelTabsGetTeamsApp",
  "GroupsTeamPrimaryChannelTabsGetCount23e6"
] as const satisfies readonly (keyof TeamsGraphGroupsTeam03GeneratedClient)[];

export function createTeamsGraphGroupsTeam03GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphGroupsTeam03GeneratedClient {
  return {
    GroupsTeamPrimaryChannelGetEnabledApps: (...args) => callOperation("groups.team.primaryChannel.GetEnabledApps", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.GetEnabledApps">)),
    GroupsTeamPrimaryChannelEnabledAppsGetCount593e: (...args) => callOperation("groups.team.primaryChannel.enabledApps.GetCount-593e", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.enabledApps.GetCount-593e">)),
    GroupsTeamPrimaryChannelGetFilesFolder: (...args) => callOperation("groups.team.primaryChannel.GetFilesFolder", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.GetFilesFolder">)),
    GroupsTeamPrimaryChannelGetFilesFolderContent: (...args) => callOperation("groups.team.primaryChannel.GetFilesFolderContent", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.GetFilesFolderContent">)),
    GroupsTeamPrimaryChannelUpdateFilesFolderContent: (...args) => callOperation("groups.team.primaryChannel.UpdateFilesFolderContent", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.UpdateFilesFolderContent">)),
    GroupsTeamPrimaryChannelDeleteFilesFolderContent: (...args) => callOperation("groups.team.primaryChannel.DeleteFilesFolderContent", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.DeleteFilesFolderContent">)),
    GroupsTeamPrimaryChannelListMembers: (...args) => callOperation("groups.team.primaryChannel.ListMembers", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.ListMembers">)),
    GroupsTeamPrimaryChannelCreateMembers: (...args) => callOperation("groups.team.primaryChannel.CreateMembers", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.CreateMembers">)),
    GroupsTeamPrimaryChannelGetMembers: (...args) => callOperation("groups.team.primaryChannel.GetMembers", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.GetMembers">)),
    GroupsTeamPrimaryChannelUpdateMembers: (...args) => callOperation("groups.team.primaryChannel.UpdateMembers", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.UpdateMembers">)),
    GroupsTeamPrimaryChannelDeleteMembers: (...args) => callOperation("groups.team.primaryChannel.DeleteMembers", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.DeleteMembers">)),
    GroupsTeamPrimaryChannelMembersGetCountCb2b: (...args) => callOperation("groups.team.primaryChannel.members.GetCount-cb2b", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.members.GetCount-cb2b">)),
    GroupsGroupTeamPrimaryChannelMembersAdd: (...args) => callOperation("groups.group.team.primaryChannel.members.add", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.members.add">)),
    GroupsGroupTeamPrimaryChannelMembersRemove: (...args) => callOperation("groups.group.team.primaryChannel.members.remove", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.members.remove">)),
    GroupsTeamPrimaryChannelListMessages: (...args) => callOperation("groups.team.primaryChannel.ListMessages", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.ListMessages">)),
    GroupsTeamPrimaryChannelCreateMessages: (...args) => callOperation("groups.team.primaryChannel.CreateMessages", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.CreateMessages">)),
    GroupsTeamPrimaryChannelGetMessages: (...args) => callOperation("groups.team.primaryChannel.GetMessages", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.GetMessages">)),
    GroupsTeamPrimaryChannelUpdateMessages: (...args) => callOperation("groups.team.primaryChannel.UpdateMessages", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.UpdateMessages">)),
    GroupsTeamPrimaryChannelDeleteMessages: (...args) => callOperation("groups.team.primaryChannel.DeleteMessages", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.DeleteMessages">)),
    GroupsTeamPrimaryChannelMessagesListHostedContents: (...args) => callOperation("groups.team.primaryChannel.messages.ListHostedContents", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.ListHostedContents">)),
    GroupsTeamPrimaryChannelMessagesCreateHostedContents: (...args) => callOperation("groups.team.primaryChannel.messages.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.CreateHostedContents">)),
    GroupsTeamPrimaryChannelMessagesGetHostedContents: (...args) => callOperation("groups.team.primaryChannel.messages.GetHostedContents", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.GetHostedContents">)),
    GroupsTeamPrimaryChannelMessagesUpdateHostedContents: (...args) => callOperation("groups.team.primaryChannel.messages.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.UpdateHostedContents">)),
    GroupsTeamPrimaryChannelMessagesDeleteHostedContents: (...args) => callOperation("groups.team.primaryChannel.messages.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.DeleteHostedContents">)),
    GroupsTeamPrimaryChannelMessagesGetHostedContentsContent: (...args) => callOperation("groups.team.primaryChannel.messages.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.GetHostedContentsContent">)),
    GroupsTeamPrimaryChannelMessagesUpdateHostedContentsContent: (...args) => callOperation("groups.team.primaryChannel.messages.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.UpdateHostedContentsContent">)),
    GroupsTeamPrimaryChannelMessagesDeleteHostedContentsContent: (...args) => callOperation("groups.team.primaryChannel.messages.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.DeleteHostedContentsContent">)),
    GroupsTeamPrimaryChannelMessagesHostedContentsGetCount7396: (...args) => callOperation("groups.team.primaryChannel.messages.hostedContents.GetCount-7396", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.hostedContents.GetCount-7396">)),
    GroupsGroupTeamPrimaryChannelMessagesChatMessageSetReaction: (...args) => callOperation("groups.group.team.primaryChannel.messages.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.chatMessage.setReaction">)),
    GroupsGroupTeamPrimaryChannelMessagesChatMessageSoftDelete: (...args) => callOperation("groups.group.team.primaryChannel.messages.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.chatMessage.softDelete">)),
    GroupsGroupTeamPrimaryChannelMessagesChatMessageUndoSoftDelete: (...args) => callOperation("groups.group.team.primaryChannel.messages.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.chatMessage.undoSoftDelete">)),
    GroupsGroupTeamPrimaryChannelMessagesChatMessageUnsetReaction: (...args) => callOperation("groups.group.team.primaryChannel.messages.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.chatMessage.unsetReaction">)),
    GroupsTeamPrimaryChannelMessagesListReplies: (...args) => callOperation("groups.team.primaryChannel.messages.ListReplies", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.ListReplies">)),
    GroupsTeamPrimaryChannelMessagesCreateReplies: (...args) => callOperation("groups.team.primaryChannel.messages.CreateReplies", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.CreateReplies">)),
    GroupsTeamPrimaryChannelMessagesGetReplies: (...args) => callOperation("groups.team.primaryChannel.messages.GetReplies", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.GetReplies">)),
    GroupsTeamPrimaryChannelMessagesUpdateReplies: (...args) => callOperation("groups.team.primaryChannel.messages.UpdateReplies", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.UpdateReplies">)),
    GroupsTeamPrimaryChannelMessagesDeleteReplies: (...args) => callOperation("groups.team.primaryChannel.messages.DeleteReplies", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.DeleteReplies">)),
    GroupsTeamPrimaryChannelMessagesRepliesListHostedContents: (...args) => callOperation("groups.team.primaryChannel.messages.replies.ListHostedContents", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.replies.ListHostedContents">)),
    GroupsTeamPrimaryChannelMessagesRepliesCreateHostedContents: (...args) => callOperation("groups.team.primaryChannel.messages.replies.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.replies.CreateHostedContents">)),
    GroupsTeamPrimaryChannelMessagesRepliesGetHostedContents: (...args) => callOperation("groups.team.primaryChannel.messages.replies.GetHostedContents", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.replies.GetHostedContents">)),
    GroupsTeamPrimaryChannelMessagesRepliesUpdateHostedContents: (...args) => callOperation("groups.team.primaryChannel.messages.replies.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.replies.UpdateHostedContents">)),
    GroupsTeamPrimaryChannelMessagesRepliesDeleteHostedContents: (...args) => callOperation("groups.team.primaryChannel.messages.replies.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.replies.DeleteHostedContents">)),
    GroupsTeamPrimaryChannelMessagesRepliesGetHostedContentsContent: (...args) => callOperation("groups.team.primaryChannel.messages.replies.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.replies.GetHostedContentsContent">)),
    GroupsTeamPrimaryChannelMessagesRepliesUpdateHostedContentsContent: (...args) => callOperation("groups.team.primaryChannel.messages.replies.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.replies.UpdateHostedContentsContent">)),
    GroupsTeamPrimaryChannelMessagesRepliesDeleteHostedContentsContent: (...args) => callOperation("groups.team.primaryChannel.messages.replies.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.replies.DeleteHostedContentsContent">)),
    GroupsTeamPrimaryChannelMessagesRepliesHostedContentsGetCount4ed6: (...args) => callOperation("groups.team.primaryChannel.messages.replies.hostedContents.GetCount-4ed6", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.replies.hostedContents.GetCount-4ed6">)),
    GroupsGroupTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSetReaction: (...args) => callOperation("groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction">)),
    GroupsGroupTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSoftDelete: (...args) => callOperation("groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete">)),
    GroupsGroupTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete: (...args) => callOperation("groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete">)),
    GroupsGroupTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUnsetReaction: (...args) => callOperation("groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction">)),
    GroupsTeamPrimaryChannelMessagesRepliesGetCountB5b0: (...args) => callOperation("groups.team.primaryChannel.messages.replies.GetCount-b5b0", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.replies.GetCount-b5b0">)),
    GroupsGroupTeamPrimaryChannelMessagesChatMessageRepliesDelta: (...args) => callOperation("groups.group.team.primaryChannel.messages.chatMessage.replies.delta", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.chatMessage.replies.delta">)),
    GroupsGroupTeamPrimaryChannelMessagesChatMessageRepliesReplyWithQuote: (...args) => callOperation("groups.group.team.primaryChannel.messages.chatMessage.replies.replyWithQuote", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.chatMessage.replies.replyWithQuote">)),
    GroupsTeamPrimaryChannelMessagesGetCount045c: (...args) => callOperation("groups.team.primaryChannel.messages.GetCount-045c", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.messages.GetCount-045c">)),
    GroupsGroupTeamPrimaryChannelMessagesDelta: (...args) => callOperation("groups.group.team.primaryChannel.messages.delta", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.delta">)),
    GroupsGroupTeamPrimaryChannelMessagesReplyWithQuote: (...args) => callOperation("groups.group.team.primaryChannel.messages.replyWithQuote", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.messages.replyWithQuote">)),
    GroupsGroupTeamPrimaryChannelArchive: (...args) => callOperation("groups.group.team.primaryChannel.archive", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.archive">)),
    GroupsGroupTeamPrimaryChannelCompleteMigration: (...args) => callOperation("groups.group.team.primaryChannel.completeMigration", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.completeMigration">)),
    GroupsGroupTeamPrimaryChannelDoesUserHaveAccess: (...args) => callOperation("groups.group.team.primaryChannel.doesUserHaveAccess", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.doesUserHaveAccess">)),
    GroupsGroupTeamPrimaryChannelProvisionEmail: (...args) => callOperation("groups.group.team.primaryChannel.provisionEmail", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.provisionEmail">)),
    GroupsGroupTeamPrimaryChannelRemoveEmail: (...args) => callOperation("groups.group.team.primaryChannel.removeEmail", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.removeEmail">)),
    GroupsGroupTeamPrimaryChannelStartMigration: (...args) => callOperation("groups.group.team.primaryChannel.startMigration", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.startMigration">)),
    GroupsGroupTeamPrimaryChannelUnarchive: (...args) => callOperation("groups.group.team.primaryChannel.unarchive", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.unarchive">)),
    GroupsTeamPrimaryChannelListSharedWithTeams: (...args) => callOperation("groups.team.primaryChannel.ListSharedWithTeams", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.ListSharedWithTeams">)),
    GroupsTeamPrimaryChannelCreateSharedWithTeams: (...args) => callOperation("groups.team.primaryChannel.CreateSharedWithTeams", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.CreateSharedWithTeams">)),
    GroupsTeamPrimaryChannelGetSharedWithTeams: (...args) => callOperation("groups.team.primaryChannel.GetSharedWithTeams", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.GetSharedWithTeams">)),
    GroupsTeamPrimaryChannelUpdateSharedWithTeams: (...args) => callOperation("groups.team.primaryChannel.UpdateSharedWithTeams", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.UpdateSharedWithTeams">)),
    GroupsTeamPrimaryChannelDeleteSharedWithTeams: (...args) => callOperation("groups.team.primaryChannel.DeleteSharedWithTeams", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.DeleteSharedWithTeams">)),
    GroupsTeamPrimaryChannelSharedWithTeamsListAllowedMembers: (...args) => callOperation("groups.team.primaryChannel.sharedWithTeams.ListAllowedMembers", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.sharedWithTeams.ListAllowedMembers">)),
    GroupsTeamPrimaryChannelSharedWithTeamsGetAllowedMembers: (...args) => callOperation("groups.team.primaryChannel.sharedWithTeams.GetAllowedMembers", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.sharedWithTeams.GetAllowedMembers">)),
    GroupsTeamPrimaryChannelSharedWithTeamsAllowedMembersGetCountC289: (...args) => callOperation("groups.team.primaryChannel.sharedWithTeams.allowedMembers.GetCount-c289", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.sharedWithTeams.allowedMembers.GetCount-c289">)),
    GroupsTeamPrimaryChannelSharedWithTeamsGetTeam: (...args) => callOperation("groups.team.primaryChannel.sharedWithTeams.GetTeam", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.sharedWithTeams.GetTeam">)),
    GroupsTeamPrimaryChannelSharedWithTeamsGetCountFbef: (...args) => callOperation("groups.team.primaryChannel.sharedWithTeams.GetCount-fbef", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.sharedWithTeams.GetCount-fbef">)),
    GroupsTeamPrimaryChannelListTabs: (...args) => callOperation("groups.team.primaryChannel.ListTabs", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.ListTabs">)),
    GroupsTeamPrimaryChannelCreateTabs: (...args) => callOperation("groups.team.primaryChannel.CreateTabs", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.CreateTabs">)),
    GroupsTeamPrimaryChannelGetTabs: (...args) => callOperation("groups.team.primaryChannel.GetTabs", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.GetTabs">)),
    GroupsTeamPrimaryChannelUpdateTabs: (...args) => callOperation("groups.team.primaryChannel.UpdateTabs", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.UpdateTabs">)),
    GroupsTeamPrimaryChannelDeleteTabs: (...args) => callOperation("groups.team.primaryChannel.DeleteTabs", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.DeleteTabs">)),
    GroupsTeamPrimaryChannelTabsGetTeamsApp: (...args) => callOperation("groups.team.primaryChannel.tabs.GetTeamsApp", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.tabs.GetTeamsApp">)),
    GroupsTeamPrimaryChannelTabsGetCount23e6: (...args) => callOperation("groups.team.primaryChannel.tabs.GetCount-23e6", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.tabs.GetCount-23e6">)),
  };
}
