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
export const TeamsGraphMeTeam03OperationKeys = [
  "me.joinedTeams.team.primaryChannel.allMembers.remove",
  "me.joinedTeams.primaryChannel.ListEnabledApps",
  "me.joinedTeams.primaryChannel.GetEnabledApps",
  "me.joinedTeams.primaryChannel.enabledApps.GetCount-dea8",
  "me.joinedTeams.primaryChannel.GetFilesFolder",
  "me.joinedTeams.primaryChannel.GetFilesFolderContent",
  "me.joinedTeams.primaryChannel.UpdateFilesFolderContent",
  "me.joinedTeams.primaryChannel.DeleteFilesFolderContent",
  "me.joinedTeams.primaryChannel.ListMembers",
  "me.joinedTeams.primaryChannel.CreateMembers",
  "me.joinedTeams.primaryChannel.GetMembers",
  "me.joinedTeams.primaryChannel.UpdateMembers",
  "me.joinedTeams.primaryChannel.DeleteMembers",
  "me.joinedTeams.primaryChannel.members.GetCount-4efc",
  "me.joinedTeams.team.primaryChannel.members.add",
  "me.joinedTeams.team.primaryChannel.members.remove",
  "me.joinedTeams.primaryChannel.ListMessages",
  "me.joinedTeams.primaryChannel.CreateMessages",
  "me.joinedTeams.primaryChannel.GetMessages",
  "me.joinedTeams.primaryChannel.UpdateMessages",
  "me.joinedTeams.primaryChannel.DeleteMessages",
  "me.joinedTeams.primaryChannel.messages.ListHostedContents",
  "me.joinedTeams.primaryChannel.messages.CreateHostedContents",
  "me.joinedTeams.primaryChannel.messages.GetHostedContents",
  "me.joinedTeams.primaryChannel.messages.UpdateHostedContents",
  "me.joinedTeams.primaryChannel.messages.DeleteHostedContents",
  "me.joinedTeams.primaryChannel.messages.GetHostedContentsContent",
  "me.joinedTeams.primaryChannel.messages.UpdateHostedContentsContent",
  "me.joinedTeams.primaryChannel.messages.DeleteHostedContentsContent",
  "me.joinedTeams.primaryChannel.messages.hostedContents.GetCount-ce20",
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.setReaction",
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.softDelete",
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.undoSoftDelete",
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.unsetReaction",
  "me.joinedTeams.primaryChannel.messages.ListReplies",
  "me.joinedTeams.primaryChannel.messages.CreateReplies",
  "me.joinedTeams.primaryChannel.messages.GetReplies",
  "me.joinedTeams.primaryChannel.messages.UpdateReplies",
  "me.joinedTeams.primaryChannel.messages.DeleteReplies",
  "me.joinedTeams.primaryChannel.messages.replies.ListHostedContents",
  "me.joinedTeams.primaryChannel.messages.replies.CreateHostedContents",
  "me.joinedTeams.primaryChannel.messages.replies.GetHostedContents",
  "me.joinedTeams.primaryChannel.messages.replies.UpdateHostedContents",
  "me.joinedTeams.primaryChannel.messages.replies.DeleteHostedContents",
  "me.joinedTeams.primaryChannel.messages.replies.GetHostedContentsContent",
  "me.joinedTeams.primaryChannel.messages.replies.UpdateHostedContentsContent",
  "me.joinedTeams.primaryChannel.messages.replies.DeleteHostedContentsContent",
  "me.joinedTeams.primaryChannel.messages.replies.hostedContents.GetCount-6077",
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction",
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete",
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete",
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction",
  "me.joinedTeams.primaryChannel.messages.replies.GetCount-1792",
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.delta",
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote",
  "me.joinedTeams.primaryChannel.messages.GetCount-dd6f",
  "me.joinedTeams.team.primaryChannel.messages.delta",
  "me.joinedTeams.team.primaryChannel.messages.replyWithQuote",
  "me.joinedTeams.team.primaryChannel.archive",
  "me.joinedTeams.team.primaryChannel.completeMigration",
  "me.joinedTeams.team.primaryChannel.doesUserHaveAccess",
  "me.joinedTeams.team.primaryChannel.provisionEmail",
  "me.joinedTeams.team.primaryChannel.removeEmail",
  "me.joinedTeams.team.primaryChannel.startMigration",
  "me.joinedTeams.team.primaryChannel.unarchive",
  "me.joinedTeams.primaryChannel.ListSharedWithTeams",
  "me.joinedTeams.primaryChannel.CreateSharedWithTeams",
  "me.joinedTeams.primaryChannel.GetSharedWithTeams",
  "me.joinedTeams.primaryChannel.UpdateSharedWithTeams",
  "me.joinedTeams.primaryChannel.DeleteSharedWithTeams",
  "me.joinedTeams.primaryChannel.sharedWithTeams.ListAllowedMembers",
  "me.joinedTeams.primaryChannel.sharedWithTeams.GetAllowedMembers",
  "me.joinedTeams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-f6e0",
  "me.joinedTeams.primaryChannel.sharedWithTeams.GetTeam",
  "me.joinedTeams.primaryChannel.sharedWithTeams.GetCount-ebb0",
  "me.joinedTeams.primaryChannel.ListTabs",
  "me.joinedTeams.primaryChannel.CreateTabs",
  "me.joinedTeams.primaryChannel.GetTabs",
  "me.joinedTeams.primaryChannel.UpdateTabs",
  "me.joinedTeams.primaryChannel.DeleteTabs"
] as const;
export type TeamsGraphMeTeam03OperationKey = typeof TeamsGraphMeTeam03OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphMeTeam03OperationPathParamMap {
  "me.joinedTeams.team.primaryChannel.allMembers.remove": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.ListEnabledApps": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.GetEnabledApps": { "team-id": TeamsGraphPathParamValue; "teamsApp-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.enabledApps.GetCount-dea8": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.GetFilesFolder": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.GetFilesFolderContent": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.UpdateFilesFolderContent": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.DeleteFilesFolderContent": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.ListMembers": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.CreateMembers": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.GetMembers": { "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.UpdateMembers": { "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.DeleteMembers": { "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.members.GetCount-4efc": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.members.add": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.members.remove": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.ListMessages": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.CreateMessages": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.GetMessages": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.UpdateMessages": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.DeleteMessages": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.ListHostedContents": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.CreateHostedContents": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.GetHostedContents": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.UpdateHostedContents": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.DeleteHostedContents": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.GetHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.UpdateHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.DeleteHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.hostedContents.GetCount-ce20": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.setReaction": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.softDelete": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.undoSoftDelete": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.unsetReaction": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.ListReplies": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.CreateReplies": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.GetReplies": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.UpdateReplies": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.DeleteReplies": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.replies.ListHostedContents": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.replies.CreateHostedContents": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.replies.GetHostedContents": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.replies.UpdateHostedContents": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.replies.DeleteHostedContents": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.replies.GetHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.replies.UpdateHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.replies.DeleteHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.replies.hostedContents.GetCount-6077": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.replies.GetCount-1792": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.delta": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.messages.GetCount-dd6f": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.messages.delta": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.messages.replyWithQuote": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.archive": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.completeMigration": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.doesUserHaveAccess": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.provisionEmail": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.removeEmail": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.startMigration": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.unarchive": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.ListSharedWithTeams": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.CreateSharedWithTeams": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.GetSharedWithTeams": { "team-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.UpdateSharedWithTeams": { "team-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.DeleteSharedWithTeams": { "team-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.sharedWithTeams.ListAllowedMembers": { "team-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.sharedWithTeams.GetAllowedMembers": { "team-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-f6e0": { "team-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.sharedWithTeams.GetTeam": { "team-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.sharedWithTeams.GetCount-ebb0": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.ListTabs": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.CreateTabs": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.GetTabs": { "team-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.UpdateTabs": { "team-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.DeleteTabs": { "team-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphMeTeam03OperationRequestMap {
  "me.joinedTeams.team.primaryChannel.allMembers.remove": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.allMembers.remove">;
  "me.joinedTeams.primaryChannel.ListEnabledApps": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.ListEnabledApps">;
  "me.joinedTeams.primaryChannel.GetEnabledApps": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.GetEnabledApps">;
  "me.joinedTeams.primaryChannel.enabledApps.GetCount-dea8": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.enabledApps.GetCount-dea8">;
  "me.joinedTeams.primaryChannel.GetFilesFolder": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.GetFilesFolder">;
  "me.joinedTeams.primaryChannel.GetFilesFolderContent": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.GetFilesFolderContent">;
  "me.joinedTeams.primaryChannel.UpdateFilesFolderContent": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.UpdateFilesFolderContent">;
  "me.joinedTeams.primaryChannel.DeleteFilesFolderContent": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.DeleteFilesFolderContent">;
  "me.joinedTeams.primaryChannel.ListMembers": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.ListMembers">;
  "me.joinedTeams.primaryChannel.CreateMembers": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.CreateMembers">;
  "me.joinedTeams.primaryChannel.GetMembers": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.GetMembers">;
  "me.joinedTeams.primaryChannel.UpdateMembers": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.UpdateMembers">;
  "me.joinedTeams.primaryChannel.DeleteMembers": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.DeleteMembers">;
  "me.joinedTeams.primaryChannel.members.GetCount-4efc": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.members.GetCount-4efc">;
  "me.joinedTeams.team.primaryChannel.members.add": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.members.add">;
  "me.joinedTeams.team.primaryChannel.members.remove": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.members.remove">;
  "me.joinedTeams.primaryChannel.ListMessages": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.ListMessages">;
  "me.joinedTeams.primaryChannel.CreateMessages": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.CreateMessages">;
  "me.joinedTeams.primaryChannel.GetMessages": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.GetMessages">;
  "me.joinedTeams.primaryChannel.UpdateMessages": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.UpdateMessages">;
  "me.joinedTeams.primaryChannel.DeleteMessages": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.DeleteMessages">;
  "me.joinedTeams.primaryChannel.messages.ListHostedContents": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.ListHostedContents">;
  "me.joinedTeams.primaryChannel.messages.CreateHostedContents": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.CreateHostedContents">;
  "me.joinedTeams.primaryChannel.messages.GetHostedContents": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.GetHostedContents">;
  "me.joinedTeams.primaryChannel.messages.UpdateHostedContents": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.UpdateHostedContents">;
  "me.joinedTeams.primaryChannel.messages.DeleteHostedContents": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.DeleteHostedContents">;
  "me.joinedTeams.primaryChannel.messages.GetHostedContentsContent": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.GetHostedContentsContent">;
  "me.joinedTeams.primaryChannel.messages.UpdateHostedContentsContent": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.UpdateHostedContentsContent">;
  "me.joinedTeams.primaryChannel.messages.DeleteHostedContentsContent": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.DeleteHostedContentsContent">;
  "me.joinedTeams.primaryChannel.messages.hostedContents.GetCount-ce20": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.hostedContents.GetCount-ce20">;
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.setReaction": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.messages.chatMessage.setReaction">;
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.softDelete": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.messages.chatMessage.softDelete">;
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.messages.chatMessage.undoSoftDelete">;
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.unsetReaction": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.messages.chatMessage.unsetReaction">;
  "me.joinedTeams.primaryChannel.messages.ListReplies": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.ListReplies">;
  "me.joinedTeams.primaryChannel.messages.CreateReplies": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.CreateReplies">;
  "me.joinedTeams.primaryChannel.messages.GetReplies": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.GetReplies">;
  "me.joinedTeams.primaryChannel.messages.UpdateReplies": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.UpdateReplies">;
  "me.joinedTeams.primaryChannel.messages.DeleteReplies": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.DeleteReplies">;
  "me.joinedTeams.primaryChannel.messages.replies.ListHostedContents": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.replies.ListHostedContents">;
  "me.joinedTeams.primaryChannel.messages.replies.CreateHostedContents": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.replies.CreateHostedContents">;
  "me.joinedTeams.primaryChannel.messages.replies.GetHostedContents": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.replies.GetHostedContents">;
  "me.joinedTeams.primaryChannel.messages.replies.UpdateHostedContents": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.replies.UpdateHostedContents">;
  "me.joinedTeams.primaryChannel.messages.replies.DeleteHostedContents": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.replies.DeleteHostedContents">;
  "me.joinedTeams.primaryChannel.messages.replies.GetHostedContentsContent": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.replies.GetHostedContentsContent">;
  "me.joinedTeams.primaryChannel.messages.replies.UpdateHostedContentsContent": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.replies.UpdateHostedContentsContent">;
  "me.joinedTeams.primaryChannel.messages.replies.DeleteHostedContentsContent": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.replies.DeleteHostedContentsContent">;
  "me.joinedTeams.primaryChannel.messages.replies.hostedContents.GetCount-6077": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.replies.hostedContents.GetCount-6077">;
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction">;
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete">;
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete">;
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction">;
  "me.joinedTeams.primaryChannel.messages.replies.GetCount-1792": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.replies.GetCount-1792">;
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.delta": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.delta">;
  "me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote">;
  "me.joinedTeams.primaryChannel.messages.GetCount-dd6f": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.messages.GetCount-dd6f">;
  "me.joinedTeams.team.primaryChannel.messages.delta": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.messages.delta">;
  "me.joinedTeams.team.primaryChannel.messages.replyWithQuote": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.messages.replyWithQuote">;
  "me.joinedTeams.team.primaryChannel.archive": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.archive">;
  "me.joinedTeams.team.primaryChannel.completeMigration": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.completeMigration">;
  "me.joinedTeams.team.primaryChannel.doesUserHaveAccess": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.doesUserHaveAccess">;
  "me.joinedTeams.team.primaryChannel.provisionEmail": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.provisionEmail">;
  "me.joinedTeams.team.primaryChannel.removeEmail": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.removeEmail">;
  "me.joinedTeams.team.primaryChannel.startMigration": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.startMigration">;
  "me.joinedTeams.team.primaryChannel.unarchive": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.unarchive">;
  "me.joinedTeams.primaryChannel.ListSharedWithTeams": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.ListSharedWithTeams">;
  "me.joinedTeams.primaryChannel.CreateSharedWithTeams": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.CreateSharedWithTeams">;
  "me.joinedTeams.primaryChannel.GetSharedWithTeams": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.GetSharedWithTeams">;
  "me.joinedTeams.primaryChannel.UpdateSharedWithTeams": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.UpdateSharedWithTeams">;
  "me.joinedTeams.primaryChannel.DeleteSharedWithTeams": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.DeleteSharedWithTeams">;
  "me.joinedTeams.primaryChannel.sharedWithTeams.ListAllowedMembers": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.sharedWithTeams.ListAllowedMembers">;
  "me.joinedTeams.primaryChannel.sharedWithTeams.GetAllowedMembers": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.sharedWithTeams.GetAllowedMembers">;
  "me.joinedTeams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-f6e0": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-f6e0">;
  "me.joinedTeams.primaryChannel.sharedWithTeams.GetTeam": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.sharedWithTeams.GetTeam">;
  "me.joinedTeams.primaryChannel.sharedWithTeams.GetCount-ebb0": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.sharedWithTeams.GetCount-ebb0">;
  "me.joinedTeams.primaryChannel.ListTabs": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.ListTabs">;
  "me.joinedTeams.primaryChannel.CreateTabs": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.CreateTabs">;
  "me.joinedTeams.primaryChannel.GetTabs": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.GetTabs">;
  "me.joinedTeams.primaryChannel.UpdateTabs": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.UpdateTabs">;
  "me.joinedTeams.primaryChannel.DeleteTabs": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.DeleteTabs">;
}

export interface TeamsGraphMeTeam03GeneratedClient {
  MeJoinedTeamsTeamPrimaryChannelAllMembersRemove(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.allMembers.remove">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.allMembers.remove"]>;
  MeJoinedTeamsPrimaryChannelListEnabledApps(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.ListEnabledApps">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.ListEnabledApps"]>;
  MeJoinedTeamsPrimaryChannelGetEnabledApps(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.GetEnabledApps">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.GetEnabledApps"]>;
  MeJoinedTeamsPrimaryChannelEnabledAppsGetCountDea8(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.enabledApps.GetCount-dea8">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.enabledApps.GetCount-dea8"]>;
  MeJoinedTeamsPrimaryChannelGetFilesFolder(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.GetFilesFolder">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.GetFilesFolder"]>;
  MeJoinedTeamsPrimaryChannelGetFilesFolderContent(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.GetFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.GetFilesFolderContent"]>;
  MeJoinedTeamsPrimaryChannelUpdateFilesFolderContent(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.UpdateFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.UpdateFilesFolderContent"]>;
  MeJoinedTeamsPrimaryChannelDeleteFilesFolderContent(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.DeleteFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.DeleteFilesFolderContent"]>;
  MeJoinedTeamsPrimaryChannelListMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.ListMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.ListMembers"]>;
  MeJoinedTeamsPrimaryChannelCreateMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.CreateMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.CreateMembers"]>;
  MeJoinedTeamsPrimaryChannelGetMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.GetMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.GetMembers"]>;
  MeJoinedTeamsPrimaryChannelUpdateMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.UpdateMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.UpdateMembers"]>;
  MeJoinedTeamsPrimaryChannelDeleteMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.DeleteMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.DeleteMembers"]>;
  MeJoinedTeamsPrimaryChannelMembersGetCount4efc(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.members.GetCount-4efc">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.members.GetCount-4efc"]>;
  MeJoinedTeamsTeamPrimaryChannelMembersAdd(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.members.add">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.members.add"]>;
  MeJoinedTeamsTeamPrimaryChannelMembersRemove(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.members.remove">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.members.remove"]>;
  MeJoinedTeamsPrimaryChannelListMessages(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.ListMessages">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.ListMessages"]>;
  MeJoinedTeamsPrimaryChannelCreateMessages(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.CreateMessages">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.CreateMessages"]>;
  MeJoinedTeamsPrimaryChannelGetMessages(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.GetMessages">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.GetMessages"]>;
  MeJoinedTeamsPrimaryChannelUpdateMessages(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.UpdateMessages">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.UpdateMessages"]>;
  MeJoinedTeamsPrimaryChannelDeleteMessages(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.DeleteMessages">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.DeleteMessages"]>;
  MeJoinedTeamsPrimaryChannelMessagesListHostedContents(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.ListHostedContents"]>;
  MeJoinedTeamsPrimaryChannelMessagesCreateHostedContents(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.CreateHostedContents"]>;
  MeJoinedTeamsPrimaryChannelMessagesGetHostedContents(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.GetHostedContents"]>;
  MeJoinedTeamsPrimaryChannelMessagesUpdateHostedContents(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.UpdateHostedContents"]>;
  MeJoinedTeamsPrimaryChannelMessagesDeleteHostedContents(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.DeleteHostedContents"]>;
  MeJoinedTeamsPrimaryChannelMessagesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.GetHostedContentsContent"]>;
  MeJoinedTeamsPrimaryChannelMessagesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.UpdateHostedContentsContent"]>;
  MeJoinedTeamsPrimaryChannelMessagesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.DeleteHostedContentsContent"]>;
  MeJoinedTeamsPrimaryChannelMessagesHostedContentsGetCountCe20(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.hostedContents.GetCount-ce20">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.hostedContents.GetCount-ce20"]>;
  MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.messages.chatMessage.setReaction"]>;
  MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.messages.chatMessage.softDelete"]>;
  MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.messages.chatMessage.undoSoftDelete"]>;
  MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.messages.chatMessage.unsetReaction"]>;
  MeJoinedTeamsPrimaryChannelMessagesListReplies(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.ListReplies">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.ListReplies"]>;
  MeJoinedTeamsPrimaryChannelMessagesCreateReplies(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.CreateReplies">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.CreateReplies"]>;
  MeJoinedTeamsPrimaryChannelMessagesGetReplies(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.GetReplies">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.GetReplies"]>;
  MeJoinedTeamsPrimaryChannelMessagesUpdateReplies(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.UpdateReplies">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.UpdateReplies"]>;
  MeJoinedTeamsPrimaryChannelMessagesDeleteReplies(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.DeleteReplies">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.DeleteReplies"]>;
  MeJoinedTeamsPrimaryChannelMessagesRepliesListHostedContents(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.replies.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.replies.ListHostedContents"]>;
  MeJoinedTeamsPrimaryChannelMessagesRepliesCreateHostedContents(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.replies.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.replies.CreateHostedContents"]>;
  MeJoinedTeamsPrimaryChannelMessagesRepliesGetHostedContents(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.replies.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.replies.GetHostedContents"]>;
  MeJoinedTeamsPrimaryChannelMessagesRepliesUpdateHostedContents(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.replies.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.replies.UpdateHostedContents"]>;
  MeJoinedTeamsPrimaryChannelMessagesRepliesDeleteHostedContents(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.replies.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.replies.DeleteHostedContents"]>;
  MeJoinedTeamsPrimaryChannelMessagesRepliesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.replies.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.replies.GetHostedContentsContent"]>;
  MeJoinedTeamsPrimaryChannelMessagesRepliesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.replies.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.replies.UpdateHostedContentsContent"]>;
  MeJoinedTeamsPrimaryChannelMessagesRepliesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.replies.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.replies.DeleteHostedContentsContent"]>;
  MeJoinedTeamsPrimaryChannelMessagesRepliesHostedContentsGetCount6077(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.replies.hostedContents.GetCount-6077">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.replies.hostedContents.GetCount-6077"]>;
  MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction"]>;
  MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete"]>;
  MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete"]>;
  MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction"]>;
  MeJoinedTeamsPrimaryChannelMessagesRepliesGetCount1792(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.replies.GetCount-1792">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.replies.GetCount-1792"]>;
  MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesDelta(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.delta">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.delta"]>;
  MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesReplyWithQuote(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote"]>;
  MeJoinedTeamsPrimaryChannelMessagesGetCountDd6f(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.GetCount-dd6f">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.messages.GetCount-dd6f"]>;
  MeJoinedTeamsTeamPrimaryChannelMessagesDelta(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.delta">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.messages.delta"]>;
  MeJoinedTeamsTeamPrimaryChannelMessagesReplyWithQuote(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.messages.replyWithQuote"]>;
  MeJoinedTeamsTeamPrimaryChannelArchive(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.archive">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.archive"]>;
  MeJoinedTeamsTeamPrimaryChannelCompleteMigration(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.completeMigration">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.completeMigration"]>;
  MeJoinedTeamsTeamPrimaryChannelDoesUserHaveAccess(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.doesUserHaveAccess">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.doesUserHaveAccess"]>;
  MeJoinedTeamsTeamPrimaryChannelProvisionEmail(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.provisionEmail">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.provisionEmail"]>;
  MeJoinedTeamsTeamPrimaryChannelRemoveEmail(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.removeEmail">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.removeEmail"]>;
  MeJoinedTeamsTeamPrimaryChannelStartMigration(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.startMigration">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.startMigration"]>;
  MeJoinedTeamsTeamPrimaryChannelUnarchive(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.unarchive">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.unarchive"]>;
  MeJoinedTeamsPrimaryChannelListSharedWithTeams(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.ListSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.ListSharedWithTeams"]>;
  MeJoinedTeamsPrimaryChannelCreateSharedWithTeams(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.CreateSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.CreateSharedWithTeams"]>;
  MeJoinedTeamsPrimaryChannelGetSharedWithTeams(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.GetSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.GetSharedWithTeams"]>;
  MeJoinedTeamsPrimaryChannelUpdateSharedWithTeams(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.UpdateSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.UpdateSharedWithTeams"]>;
  MeJoinedTeamsPrimaryChannelDeleteSharedWithTeams(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.DeleteSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.DeleteSharedWithTeams"]>;
  MeJoinedTeamsPrimaryChannelSharedWithTeamsListAllowedMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.sharedWithTeams.ListAllowedMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.sharedWithTeams.ListAllowedMembers"]>;
  MeJoinedTeamsPrimaryChannelSharedWithTeamsGetAllowedMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.sharedWithTeams.GetAllowedMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.sharedWithTeams.GetAllowedMembers"]>;
  MeJoinedTeamsPrimaryChannelSharedWithTeamsAllowedMembersGetCountF6e0(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-f6e0">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-f6e0"]>;
  MeJoinedTeamsPrimaryChannelSharedWithTeamsGetTeam(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.sharedWithTeams.GetTeam">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.sharedWithTeams.GetTeam"]>;
  MeJoinedTeamsPrimaryChannelSharedWithTeamsGetCountEbb0(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.sharedWithTeams.GetCount-ebb0">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.sharedWithTeams.GetCount-ebb0"]>;
  MeJoinedTeamsPrimaryChannelListTabs(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.ListTabs">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.ListTabs"]>;
  MeJoinedTeamsPrimaryChannelCreateTabs(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.CreateTabs">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.CreateTabs"]>;
  MeJoinedTeamsPrimaryChannelGetTabs(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.GetTabs">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.GetTabs"]>;
  MeJoinedTeamsPrimaryChannelUpdateTabs(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.UpdateTabs">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.UpdateTabs"]>;
  MeJoinedTeamsPrimaryChannelDeleteTabs(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.DeleteTabs">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.DeleteTabs"]>;
}

export const TeamsGraphMeTeam03GeneratedFunctionNames = [
  "MeJoinedTeamsTeamPrimaryChannelAllMembersRemove",
  "MeJoinedTeamsPrimaryChannelListEnabledApps",
  "MeJoinedTeamsPrimaryChannelGetEnabledApps",
  "MeJoinedTeamsPrimaryChannelEnabledAppsGetCountDea8",
  "MeJoinedTeamsPrimaryChannelGetFilesFolder",
  "MeJoinedTeamsPrimaryChannelGetFilesFolderContent",
  "MeJoinedTeamsPrimaryChannelUpdateFilesFolderContent",
  "MeJoinedTeamsPrimaryChannelDeleteFilesFolderContent",
  "MeJoinedTeamsPrimaryChannelListMembers",
  "MeJoinedTeamsPrimaryChannelCreateMembers",
  "MeJoinedTeamsPrimaryChannelGetMembers",
  "MeJoinedTeamsPrimaryChannelUpdateMembers",
  "MeJoinedTeamsPrimaryChannelDeleteMembers",
  "MeJoinedTeamsPrimaryChannelMembersGetCount4efc",
  "MeJoinedTeamsTeamPrimaryChannelMembersAdd",
  "MeJoinedTeamsTeamPrimaryChannelMembersRemove",
  "MeJoinedTeamsPrimaryChannelListMessages",
  "MeJoinedTeamsPrimaryChannelCreateMessages",
  "MeJoinedTeamsPrimaryChannelGetMessages",
  "MeJoinedTeamsPrimaryChannelUpdateMessages",
  "MeJoinedTeamsPrimaryChannelDeleteMessages",
  "MeJoinedTeamsPrimaryChannelMessagesListHostedContents",
  "MeJoinedTeamsPrimaryChannelMessagesCreateHostedContents",
  "MeJoinedTeamsPrimaryChannelMessagesGetHostedContents",
  "MeJoinedTeamsPrimaryChannelMessagesUpdateHostedContents",
  "MeJoinedTeamsPrimaryChannelMessagesDeleteHostedContents",
  "MeJoinedTeamsPrimaryChannelMessagesGetHostedContentsContent",
  "MeJoinedTeamsPrimaryChannelMessagesUpdateHostedContentsContent",
  "MeJoinedTeamsPrimaryChannelMessagesDeleteHostedContentsContent",
  "MeJoinedTeamsPrimaryChannelMessagesHostedContentsGetCountCe20",
  "MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageSetReaction",
  "MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageSoftDelete",
  "MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageUndoSoftDelete",
  "MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageUnsetReaction",
  "MeJoinedTeamsPrimaryChannelMessagesListReplies",
  "MeJoinedTeamsPrimaryChannelMessagesCreateReplies",
  "MeJoinedTeamsPrimaryChannelMessagesGetReplies",
  "MeJoinedTeamsPrimaryChannelMessagesUpdateReplies",
  "MeJoinedTeamsPrimaryChannelMessagesDeleteReplies",
  "MeJoinedTeamsPrimaryChannelMessagesRepliesListHostedContents",
  "MeJoinedTeamsPrimaryChannelMessagesRepliesCreateHostedContents",
  "MeJoinedTeamsPrimaryChannelMessagesRepliesGetHostedContents",
  "MeJoinedTeamsPrimaryChannelMessagesRepliesUpdateHostedContents",
  "MeJoinedTeamsPrimaryChannelMessagesRepliesDeleteHostedContents",
  "MeJoinedTeamsPrimaryChannelMessagesRepliesGetHostedContentsContent",
  "MeJoinedTeamsPrimaryChannelMessagesRepliesUpdateHostedContentsContent",
  "MeJoinedTeamsPrimaryChannelMessagesRepliesDeleteHostedContentsContent",
  "MeJoinedTeamsPrimaryChannelMessagesRepliesHostedContentsGetCount6077",
  "MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSetReaction",
  "MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSoftDelete",
  "MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete",
  "MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUnsetReaction",
  "MeJoinedTeamsPrimaryChannelMessagesRepliesGetCount1792",
  "MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesDelta",
  "MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesReplyWithQuote",
  "MeJoinedTeamsPrimaryChannelMessagesGetCountDd6f",
  "MeJoinedTeamsTeamPrimaryChannelMessagesDelta",
  "MeJoinedTeamsTeamPrimaryChannelMessagesReplyWithQuote",
  "MeJoinedTeamsTeamPrimaryChannelArchive",
  "MeJoinedTeamsTeamPrimaryChannelCompleteMigration",
  "MeJoinedTeamsTeamPrimaryChannelDoesUserHaveAccess",
  "MeJoinedTeamsTeamPrimaryChannelProvisionEmail",
  "MeJoinedTeamsTeamPrimaryChannelRemoveEmail",
  "MeJoinedTeamsTeamPrimaryChannelStartMigration",
  "MeJoinedTeamsTeamPrimaryChannelUnarchive",
  "MeJoinedTeamsPrimaryChannelListSharedWithTeams",
  "MeJoinedTeamsPrimaryChannelCreateSharedWithTeams",
  "MeJoinedTeamsPrimaryChannelGetSharedWithTeams",
  "MeJoinedTeamsPrimaryChannelUpdateSharedWithTeams",
  "MeJoinedTeamsPrimaryChannelDeleteSharedWithTeams",
  "MeJoinedTeamsPrimaryChannelSharedWithTeamsListAllowedMembers",
  "MeJoinedTeamsPrimaryChannelSharedWithTeamsGetAllowedMembers",
  "MeJoinedTeamsPrimaryChannelSharedWithTeamsAllowedMembersGetCountF6e0",
  "MeJoinedTeamsPrimaryChannelSharedWithTeamsGetTeam",
  "MeJoinedTeamsPrimaryChannelSharedWithTeamsGetCountEbb0",
  "MeJoinedTeamsPrimaryChannelListTabs",
  "MeJoinedTeamsPrimaryChannelCreateTabs",
  "MeJoinedTeamsPrimaryChannelGetTabs",
  "MeJoinedTeamsPrimaryChannelUpdateTabs",
  "MeJoinedTeamsPrimaryChannelDeleteTabs"
] as const satisfies readonly (keyof TeamsGraphMeTeam03GeneratedClient)[];

export function createTeamsGraphMeTeam03GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphMeTeam03GeneratedClient {
  return {
    MeJoinedTeamsTeamPrimaryChannelAllMembersRemove: (...args) => callOperation("me.joinedTeams.team.primaryChannel.allMembers.remove", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.allMembers.remove">)),
    MeJoinedTeamsPrimaryChannelListEnabledApps: (...args) => callOperation("me.joinedTeams.primaryChannel.ListEnabledApps", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.ListEnabledApps">)),
    MeJoinedTeamsPrimaryChannelGetEnabledApps: (...args) => callOperation("me.joinedTeams.primaryChannel.GetEnabledApps", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.GetEnabledApps">)),
    MeJoinedTeamsPrimaryChannelEnabledAppsGetCountDea8: (...args) => callOperation("me.joinedTeams.primaryChannel.enabledApps.GetCount-dea8", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.enabledApps.GetCount-dea8">)),
    MeJoinedTeamsPrimaryChannelGetFilesFolder: (...args) => callOperation("me.joinedTeams.primaryChannel.GetFilesFolder", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.GetFilesFolder">)),
    MeJoinedTeamsPrimaryChannelGetFilesFolderContent: (...args) => callOperation("me.joinedTeams.primaryChannel.GetFilesFolderContent", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.GetFilesFolderContent">)),
    MeJoinedTeamsPrimaryChannelUpdateFilesFolderContent: (...args) => callOperation("me.joinedTeams.primaryChannel.UpdateFilesFolderContent", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.UpdateFilesFolderContent">)),
    MeJoinedTeamsPrimaryChannelDeleteFilesFolderContent: (...args) => callOperation("me.joinedTeams.primaryChannel.DeleteFilesFolderContent", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.DeleteFilesFolderContent">)),
    MeJoinedTeamsPrimaryChannelListMembers: (...args) => callOperation("me.joinedTeams.primaryChannel.ListMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.ListMembers">)),
    MeJoinedTeamsPrimaryChannelCreateMembers: (...args) => callOperation("me.joinedTeams.primaryChannel.CreateMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.CreateMembers">)),
    MeJoinedTeamsPrimaryChannelGetMembers: (...args) => callOperation("me.joinedTeams.primaryChannel.GetMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.GetMembers">)),
    MeJoinedTeamsPrimaryChannelUpdateMembers: (...args) => callOperation("me.joinedTeams.primaryChannel.UpdateMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.UpdateMembers">)),
    MeJoinedTeamsPrimaryChannelDeleteMembers: (...args) => callOperation("me.joinedTeams.primaryChannel.DeleteMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.DeleteMembers">)),
    MeJoinedTeamsPrimaryChannelMembersGetCount4efc: (...args) => callOperation("me.joinedTeams.primaryChannel.members.GetCount-4efc", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.members.GetCount-4efc">)),
    MeJoinedTeamsTeamPrimaryChannelMembersAdd: (...args) => callOperation("me.joinedTeams.team.primaryChannel.members.add", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.members.add">)),
    MeJoinedTeamsTeamPrimaryChannelMembersRemove: (...args) => callOperation("me.joinedTeams.team.primaryChannel.members.remove", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.members.remove">)),
    MeJoinedTeamsPrimaryChannelListMessages: (...args) => callOperation("me.joinedTeams.primaryChannel.ListMessages", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.ListMessages">)),
    MeJoinedTeamsPrimaryChannelCreateMessages: (...args) => callOperation("me.joinedTeams.primaryChannel.CreateMessages", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.CreateMessages">)),
    MeJoinedTeamsPrimaryChannelGetMessages: (...args) => callOperation("me.joinedTeams.primaryChannel.GetMessages", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.GetMessages">)),
    MeJoinedTeamsPrimaryChannelUpdateMessages: (...args) => callOperation("me.joinedTeams.primaryChannel.UpdateMessages", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.UpdateMessages">)),
    MeJoinedTeamsPrimaryChannelDeleteMessages: (...args) => callOperation("me.joinedTeams.primaryChannel.DeleteMessages", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.DeleteMessages">)),
    MeJoinedTeamsPrimaryChannelMessagesListHostedContents: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.ListHostedContents", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.ListHostedContents">)),
    MeJoinedTeamsPrimaryChannelMessagesCreateHostedContents: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.CreateHostedContents">)),
    MeJoinedTeamsPrimaryChannelMessagesGetHostedContents: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.GetHostedContents", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.GetHostedContents">)),
    MeJoinedTeamsPrimaryChannelMessagesUpdateHostedContents: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.UpdateHostedContents">)),
    MeJoinedTeamsPrimaryChannelMessagesDeleteHostedContents: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.DeleteHostedContents">)),
    MeJoinedTeamsPrimaryChannelMessagesGetHostedContentsContent: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.GetHostedContentsContent">)),
    MeJoinedTeamsPrimaryChannelMessagesUpdateHostedContentsContent: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.UpdateHostedContentsContent">)),
    MeJoinedTeamsPrimaryChannelMessagesDeleteHostedContentsContent: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.DeleteHostedContentsContent">)),
    MeJoinedTeamsPrimaryChannelMessagesHostedContentsGetCountCe20: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.hostedContents.GetCount-ce20", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.hostedContents.GetCount-ce20">)),
    MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageSetReaction: (...args) => callOperation("me.joinedTeams.team.primaryChannel.messages.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.chatMessage.setReaction">)),
    MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageSoftDelete: (...args) => callOperation("me.joinedTeams.team.primaryChannel.messages.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.chatMessage.softDelete">)),
    MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageUndoSoftDelete: (...args) => callOperation("me.joinedTeams.team.primaryChannel.messages.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.chatMessage.undoSoftDelete">)),
    MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageUnsetReaction: (...args) => callOperation("me.joinedTeams.team.primaryChannel.messages.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.chatMessage.unsetReaction">)),
    MeJoinedTeamsPrimaryChannelMessagesListReplies: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.ListReplies", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.ListReplies">)),
    MeJoinedTeamsPrimaryChannelMessagesCreateReplies: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.CreateReplies", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.CreateReplies">)),
    MeJoinedTeamsPrimaryChannelMessagesGetReplies: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.GetReplies", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.GetReplies">)),
    MeJoinedTeamsPrimaryChannelMessagesUpdateReplies: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.UpdateReplies", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.UpdateReplies">)),
    MeJoinedTeamsPrimaryChannelMessagesDeleteReplies: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.DeleteReplies", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.DeleteReplies">)),
    MeJoinedTeamsPrimaryChannelMessagesRepliesListHostedContents: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.replies.ListHostedContents", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.replies.ListHostedContents">)),
    MeJoinedTeamsPrimaryChannelMessagesRepliesCreateHostedContents: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.replies.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.replies.CreateHostedContents">)),
    MeJoinedTeamsPrimaryChannelMessagesRepliesGetHostedContents: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.replies.GetHostedContents", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.replies.GetHostedContents">)),
    MeJoinedTeamsPrimaryChannelMessagesRepliesUpdateHostedContents: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.replies.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.replies.UpdateHostedContents">)),
    MeJoinedTeamsPrimaryChannelMessagesRepliesDeleteHostedContents: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.replies.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.replies.DeleteHostedContents">)),
    MeJoinedTeamsPrimaryChannelMessagesRepliesGetHostedContentsContent: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.replies.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.replies.GetHostedContentsContent">)),
    MeJoinedTeamsPrimaryChannelMessagesRepliesUpdateHostedContentsContent: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.replies.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.replies.UpdateHostedContentsContent">)),
    MeJoinedTeamsPrimaryChannelMessagesRepliesDeleteHostedContentsContent: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.replies.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.replies.DeleteHostedContentsContent">)),
    MeJoinedTeamsPrimaryChannelMessagesRepliesHostedContentsGetCount6077: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.replies.hostedContents.GetCount-6077", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.replies.hostedContents.GetCount-6077">)),
    MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSetReaction: (...args) => callOperation("me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction">)),
    MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSoftDelete: (...args) => callOperation("me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete">)),
    MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete: (...args) => callOperation("me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete">)),
    MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUnsetReaction: (...args) => callOperation("me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction">)),
    MeJoinedTeamsPrimaryChannelMessagesRepliesGetCount1792: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.replies.GetCount-1792", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.replies.GetCount-1792">)),
    MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesDelta: (...args) => callOperation("me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.delta", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.delta">)),
    MeJoinedTeamsTeamPrimaryChannelMessagesChatMessageRepliesReplyWithQuote: (...args) => callOperation("me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote">)),
    MeJoinedTeamsPrimaryChannelMessagesGetCountDd6f: (...args) => callOperation("me.joinedTeams.primaryChannel.messages.GetCount-dd6f", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.messages.GetCount-dd6f">)),
    MeJoinedTeamsTeamPrimaryChannelMessagesDelta: (...args) => callOperation("me.joinedTeams.team.primaryChannel.messages.delta", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.delta">)),
    MeJoinedTeamsTeamPrimaryChannelMessagesReplyWithQuote: (...args) => callOperation("me.joinedTeams.team.primaryChannel.messages.replyWithQuote", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.messages.replyWithQuote">)),
    MeJoinedTeamsTeamPrimaryChannelArchive: (...args) => callOperation("me.joinedTeams.team.primaryChannel.archive", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.archive">)),
    MeJoinedTeamsTeamPrimaryChannelCompleteMigration: (...args) => callOperation("me.joinedTeams.team.primaryChannel.completeMigration", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.completeMigration">)),
    MeJoinedTeamsTeamPrimaryChannelDoesUserHaveAccess: (...args) => callOperation("me.joinedTeams.team.primaryChannel.doesUserHaveAccess", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.doesUserHaveAccess">)),
    MeJoinedTeamsTeamPrimaryChannelProvisionEmail: (...args) => callOperation("me.joinedTeams.team.primaryChannel.provisionEmail", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.provisionEmail">)),
    MeJoinedTeamsTeamPrimaryChannelRemoveEmail: (...args) => callOperation("me.joinedTeams.team.primaryChannel.removeEmail", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.removeEmail">)),
    MeJoinedTeamsTeamPrimaryChannelStartMigration: (...args) => callOperation("me.joinedTeams.team.primaryChannel.startMigration", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.startMigration">)),
    MeJoinedTeamsTeamPrimaryChannelUnarchive: (...args) => callOperation("me.joinedTeams.team.primaryChannel.unarchive", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.unarchive">)),
    MeJoinedTeamsPrimaryChannelListSharedWithTeams: (...args) => callOperation("me.joinedTeams.primaryChannel.ListSharedWithTeams", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.ListSharedWithTeams">)),
    MeJoinedTeamsPrimaryChannelCreateSharedWithTeams: (...args) => callOperation("me.joinedTeams.primaryChannel.CreateSharedWithTeams", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.CreateSharedWithTeams">)),
    MeJoinedTeamsPrimaryChannelGetSharedWithTeams: (...args) => callOperation("me.joinedTeams.primaryChannel.GetSharedWithTeams", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.GetSharedWithTeams">)),
    MeJoinedTeamsPrimaryChannelUpdateSharedWithTeams: (...args) => callOperation("me.joinedTeams.primaryChannel.UpdateSharedWithTeams", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.UpdateSharedWithTeams">)),
    MeJoinedTeamsPrimaryChannelDeleteSharedWithTeams: (...args) => callOperation("me.joinedTeams.primaryChannel.DeleteSharedWithTeams", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.DeleteSharedWithTeams">)),
    MeJoinedTeamsPrimaryChannelSharedWithTeamsListAllowedMembers: (...args) => callOperation("me.joinedTeams.primaryChannel.sharedWithTeams.ListAllowedMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.sharedWithTeams.ListAllowedMembers">)),
    MeJoinedTeamsPrimaryChannelSharedWithTeamsGetAllowedMembers: (...args) => callOperation("me.joinedTeams.primaryChannel.sharedWithTeams.GetAllowedMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.sharedWithTeams.GetAllowedMembers">)),
    MeJoinedTeamsPrimaryChannelSharedWithTeamsAllowedMembersGetCountF6e0: (...args) => callOperation("me.joinedTeams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-f6e0", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-f6e0">)),
    MeJoinedTeamsPrimaryChannelSharedWithTeamsGetTeam: (...args) => callOperation("me.joinedTeams.primaryChannel.sharedWithTeams.GetTeam", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.sharedWithTeams.GetTeam">)),
    MeJoinedTeamsPrimaryChannelSharedWithTeamsGetCountEbb0: (...args) => callOperation("me.joinedTeams.primaryChannel.sharedWithTeams.GetCount-ebb0", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.sharedWithTeams.GetCount-ebb0">)),
    MeJoinedTeamsPrimaryChannelListTabs: (...args) => callOperation("me.joinedTeams.primaryChannel.ListTabs", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.ListTabs">)),
    MeJoinedTeamsPrimaryChannelCreateTabs: (...args) => callOperation("me.joinedTeams.primaryChannel.CreateTabs", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.CreateTabs">)),
    MeJoinedTeamsPrimaryChannelGetTabs: (...args) => callOperation("me.joinedTeams.primaryChannel.GetTabs", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.GetTabs">)),
    MeJoinedTeamsPrimaryChannelUpdateTabs: (...args) => callOperation("me.joinedTeams.primaryChannel.UpdateTabs", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.UpdateTabs">)),
    MeJoinedTeamsPrimaryChannelDeleteTabs: (...args) => callOperation("me.joinedTeams.primaryChannel.DeleteTabs", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.DeleteTabs">)),
  };
}
