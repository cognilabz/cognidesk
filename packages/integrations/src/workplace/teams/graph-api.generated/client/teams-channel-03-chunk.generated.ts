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
export const TeamsGraphTeamsChannel03OperationKeys = [
  "teams.primaryChannel.messages.replies.hostedContents.GetCount-1d3a",
  "teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction",
  "teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete",
  "teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete",
  "teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction",
  "teams.primaryChannel.messages.replies.GetCount-eb7a",
  "teams.team.primaryChannel.messages.chatMessage.replies.delta",
  "teams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote",
  "teams.primaryChannel.messages.GetCount-d90b",
  "teams.team.primaryChannel.messages.delta",
  "teams.team.primaryChannel.messages.replyWithQuote",
  "teams.team.primaryChannel.archive",
  "teams.team.primaryChannel.completeMigration",
  "teams.team.primaryChannel.doesUserHaveAccess",
  "teams.team.primaryChannel.provisionEmail",
  "teams.team.primaryChannel.removeEmail",
  "teams.team.primaryChannel.startMigration",
  "teams.team.primaryChannel.unarchive",
  "teams.primaryChannel.ListSharedWithTeams",
  "teams.primaryChannel.CreateSharedWithTeams",
  "teams.primaryChannel.GetSharedWithTeams",
  "teams.primaryChannel.UpdateSharedWithTeams",
  "teams.primaryChannel.DeleteSharedWithTeams",
  "teams.primaryChannel.sharedWithTeams.ListAllowedMembers",
  "teams.primaryChannel.sharedWithTeams.GetAllowedMembers",
  "teams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-2d1d",
  "teams.primaryChannel.sharedWithTeams.GetTeam",
  "teams.primaryChannel.sharedWithTeams.GetCount-9fea",
  "teams.primaryChannel.ListTabs",
  "teams.primaryChannel.CreateTabs",
  "teams.primaryChannel.GetTabs",
  "teams.primaryChannel.UpdateTabs",
  "teams.primaryChannel.DeleteTabs",
  "teams.primaryChannel.tabs.GetTeamsApp",
  "teams.primaryChannel.tabs.GetCount-8cf3"
] as const;
export type TeamsGraphTeamsChannel03OperationKey = typeof TeamsGraphTeamsChannel03OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamsChannel03OperationPathParamMap {
  "teams.primaryChannel.messages.replies.hostedContents.GetCount-1d3a": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.replies.GetCount-eb7a": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.messages.chatMessage.replies.delta": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.GetCount-d90b": { "team-id": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.messages.delta": { "team-id": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.messages.replyWithQuote": { "team-id": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.archive": { "team-id": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.completeMigration": { "team-id": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.doesUserHaveAccess": { "team-id": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.provisionEmail": { "team-id": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.removeEmail": { "team-id": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.startMigration": { "team-id": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.unarchive": { "team-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.ListSharedWithTeams": { "team-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.CreateSharedWithTeams": { "team-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.GetSharedWithTeams": { "team-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.UpdateSharedWithTeams": { "team-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.DeleteSharedWithTeams": { "team-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.sharedWithTeams.ListAllowedMembers": { "team-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.sharedWithTeams.GetAllowedMembers": { "team-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-2d1d": { "team-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.sharedWithTeams.GetTeam": { "team-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.sharedWithTeams.GetCount-9fea": { "team-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.ListTabs": { "team-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.CreateTabs": { "team-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.GetTabs": { "team-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.UpdateTabs": { "team-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.DeleteTabs": { "team-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.tabs.GetTeamsApp": { "team-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.tabs.GetCount-8cf3": { "team-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphTeamsChannel03OperationRequestMap {
  "teams.primaryChannel.messages.replies.hostedContents.GetCount-1d3a": TeamsGraphOperationInput<"teams.primaryChannel.messages.replies.hostedContents.GetCount-1d3a">;
  "teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction": TeamsGraphOperationInput<"teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction">;
  "teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete": TeamsGraphOperationInput<"teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete">;
  "teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete">;
  "teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction": TeamsGraphOperationInput<"teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction">;
  "teams.primaryChannel.messages.replies.GetCount-eb7a": TeamsGraphOperationInput<"teams.primaryChannel.messages.replies.GetCount-eb7a">;
  "teams.team.primaryChannel.messages.chatMessage.replies.delta": TeamsGraphOperationInput<"teams.team.primaryChannel.messages.chatMessage.replies.delta">;
  "teams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote": TeamsGraphOperationInput<"teams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote">;
  "teams.primaryChannel.messages.GetCount-d90b": TeamsGraphOperationInput<"teams.primaryChannel.messages.GetCount-d90b">;
  "teams.team.primaryChannel.messages.delta": TeamsGraphOperationInput<"teams.team.primaryChannel.messages.delta">;
  "teams.team.primaryChannel.messages.replyWithQuote": TeamsGraphOperationInput<"teams.team.primaryChannel.messages.replyWithQuote">;
  "teams.team.primaryChannel.archive": TeamsGraphOperationInput<"teams.team.primaryChannel.archive">;
  "teams.team.primaryChannel.completeMigration": TeamsGraphOperationInput<"teams.team.primaryChannel.completeMigration">;
  "teams.team.primaryChannel.doesUserHaveAccess": TeamsGraphOperationInput<"teams.team.primaryChannel.doesUserHaveAccess">;
  "teams.team.primaryChannel.provisionEmail": TeamsGraphOperationInput<"teams.team.primaryChannel.provisionEmail">;
  "teams.team.primaryChannel.removeEmail": TeamsGraphOperationInput<"teams.team.primaryChannel.removeEmail">;
  "teams.team.primaryChannel.startMigration": TeamsGraphOperationInput<"teams.team.primaryChannel.startMigration">;
  "teams.team.primaryChannel.unarchive": TeamsGraphOperationInput<"teams.team.primaryChannel.unarchive">;
  "teams.primaryChannel.ListSharedWithTeams": TeamsGraphOperationInput<"teams.primaryChannel.ListSharedWithTeams">;
  "teams.primaryChannel.CreateSharedWithTeams": TeamsGraphOperationInput<"teams.primaryChannel.CreateSharedWithTeams">;
  "teams.primaryChannel.GetSharedWithTeams": TeamsGraphOperationInput<"teams.primaryChannel.GetSharedWithTeams">;
  "teams.primaryChannel.UpdateSharedWithTeams": TeamsGraphOperationInput<"teams.primaryChannel.UpdateSharedWithTeams">;
  "teams.primaryChannel.DeleteSharedWithTeams": TeamsGraphOperationInput<"teams.primaryChannel.DeleteSharedWithTeams">;
  "teams.primaryChannel.sharedWithTeams.ListAllowedMembers": TeamsGraphOperationInput<"teams.primaryChannel.sharedWithTeams.ListAllowedMembers">;
  "teams.primaryChannel.sharedWithTeams.GetAllowedMembers": TeamsGraphOperationInput<"teams.primaryChannel.sharedWithTeams.GetAllowedMembers">;
  "teams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-2d1d": TeamsGraphOperationInput<"teams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-2d1d">;
  "teams.primaryChannel.sharedWithTeams.GetTeam": TeamsGraphOperationInput<"teams.primaryChannel.sharedWithTeams.GetTeam">;
  "teams.primaryChannel.sharedWithTeams.GetCount-9fea": TeamsGraphOperationInput<"teams.primaryChannel.sharedWithTeams.GetCount-9fea">;
  "teams.primaryChannel.ListTabs": TeamsGraphOperationInput<"teams.primaryChannel.ListTabs">;
  "teams.primaryChannel.CreateTabs": TeamsGraphOperationInput<"teams.primaryChannel.CreateTabs">;
  "teams.primaryChannel.GetTabs": TeamsGraphOperationInput<"teams.primaryChannel.GetTabs">;
  "teams.primaryChannel.UpdateTabs": TeamsGraphOperationInput<"teams.primaryChannel.UpdateTabs">;
  "teams.primaryChannel.DeleteTabs": TeamsGraphOperationInput<"teams.primaryChannel.DeleteTabs">;
  "teams.primaryChannel.tabs.GetTeamsApp": TeamsGraphOperationInput<"teams.primaryChannel.tabs.GetTeamsApp">;
  "teams.primaryChannel.tabs.GetCount-8cf3": TeamsGraphOperationInput<"teams.primaryChannel.tabs.GetCount-8cf3">;
}

export interface TeamsGraphTeamsChannel03GeneratedClient {
  TeamsPrimaryChannelMessagesRepliesHostedContentsGetCount1d3a(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.replies.hostedContents.GetCount-1d3a">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.replies.hostedContents.GetCount-1d3a"]>;
  TeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction"]>;
  TeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete"]>;
  TeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete"]>;
  TeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction"]>;
  TeamsPrimaryChannelMessagesRepliesGetCountEb7a(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.replies.GetCount-eb7a">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.replies.GetCount-eb7a"]>;
  TeamsTeamPrimaryChannelMessagesChatMessageRepliesDelta(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.chatMessage.replies.delta">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.messages.chatMessage.replies.delta"]>;
  TeamsTeamPrimaryChannelMessagesChatMessageRepliesReplyWithQuote(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote"]>;
  TeamsPrimaryChannelMessagesGetCountD90b(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.GetCount-d90b">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.GetCount-d90b"]>;
  TeamsTeamPrimaryChannelMessagesDelta(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.delta">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.messages.delta"]>;
  TeamsTeamPrimaryChannelMessagesReplyWithQuote(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.messages.replyWithQuote"]>;
  TeamsTeamPrimaryChannelArchive(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.archive">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.archive"]>;
  TeamsTeamPrimaryChannelCompleteMigration(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.completeMigration">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.completeMigration"]>;
  TeamsTeamPrimaryChannelDoesUserHaveAccess(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.doesUserHaveAccess">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.doesUserHaveAccess"]>;
  TeamsTeamPrimaryChannelProvisionEmail(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.provisionEmail">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.provisionEmail"]>;
  TeamsTeamPrimaryChannelRemoveEmail(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.removeEmail">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.removeEmail"]>;
  TeamsTeamPrimaryChannelStartMigration(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.startMigration">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.startMigration"]>;
  TeamsTeamPrimaryChannelUnarchive(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.unarchive">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.unarchive"]>;
  TeamsPrimaryChannelListSharedWithTeams(...args: TeamsGraphOperationArgs<"teams.primaryChannel.ListSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.ListSharedWithTeams"]>;
  TeamsPrimaryChannelCreateSharedWithTeams(...args: TeamsGraphOperationArgs<"teams.primaryChannel.CreateSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.CreateSharedWithTeams"]>;
  TeamsPrimaryChannelGetSharedWithTeams(...args: TeamsGraphOperationArgs<"teams.primaryChannel.GetSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.GetSharedWithTeams"]>;
  TeamsPrimaryChannelUpdateSharedWithTeams(...args: TeamsGraphOperationArgs<"teams.primaryChannel.UpdateSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.UpdateSharedWithTeams"]>;
  TeamsPrimaryChannelDeleteSharedWithTeams(...args: TeamsGraphOperationArgs<"teams.primaryChannel.DeleteSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.DeleteSharedWithTeams"]>;
  TeamsPrimaryChannelSharedWithTeamsListAllowedMembers(...args: TeamsGraphOperationArgs<"teams.primaryChannel.sharedWithTeams.ListAllowedMembers">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.sharedWithTeams.ListAllowedMembers"]>;
  TeamsPrimaryChannelSharedWithTeamsGetAllowedMembers(...args: TeamsGraphOperationArgs<"teams.primaryChannel.sharedWithTeams.GetAllowedMembers">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.sharedWithTeams.GetAllowedMembers"]>;
  TeamsPrimaryChannelSharedWithTeamsAllowedMembersGetCount2d1d(...args: TeamsGraphOperationArgs<"teams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-2d1d">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-2d1d"]>;
  TeamsPrimaryChannelSharedWithTeamsGetTeam(...args: TeamsGraphOperationArgs<"teams.primaryChannel.sharedWithTeams.GetTeam">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.sharedWithTeams.GetTeam"]>;
  TeamsPrimaryChannelSharedWithTeamsGetCount9fea(...args: TeamsGraphOperationArgs<"teams.primaryChannel.sharedWithTeams.GetCount-9fea">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.sharedWithTeams.GetCount-9fea"]>;
  TeamsPrimaryChannelListTabs(...args: TeamsGraphOperationArgs<"teams.primaryChannel.ListTabs">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.ListTabs"]>;
  TeamsPrimaryChannelCreateTabs(...args: TeamsGraphOperationArgs<"teams.primaryChannel.CreateTabs">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.CreateTabs"]>;
  TeamsPrimaryChannelGetTabs(...args: TeamsGraphOperationArgs<"teams.primaryChannel.GetTabs">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.GetTabs"]>;
  TeamsPrimaryChannelUpdateTabs(...args: TeamsGraphOperationArgs<"teams.primaryChannel.UpdateTabs">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.UpdateTabs"]>;
  TeamsPrimaryChannelDeleteTabs(...args: TeamsGraphOperationArgs<"teams.primaryChannel.DeleteTabs">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.DeleteTabs"]>;
  TeamsPrimaryChannelTabsGetTeamsApp(...args: TeamsGraphOperationArgs<"teams.primaryChannel.tabs.GetTeamsApp">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.tabs.GetTeamsApp"]>;
  TeamsPrimaryChannelTabsGetCount8cf3(...args: TeamsGraphOperationArgs<"teams.primaryChannel.tabs.GetCount-8cf3">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.tabs.GetCount-8cf3"]>;
}

export const TeamsGraphTeamsChannel03GeneratedFunctionNames = [
  "TeamsPrimaryChannelMessagesRepliesHostedContentsGetCount1d3a",
  "TeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSetReaction",
  "TeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSoftDelete",
  "TeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete",
  "TeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUnsetReaction",
  "TeamsPrimaryChannelMessagesRepliesGetCountEb7a",
  "TeamsTeamPrimaryChannelMessagesChatMessageRepliesDelta",
  "TeamsTeamPrimaryChannelMessagesChatMessageRepliesReplyWithQuote",
  "TeamsPrimaryChannelMessagesGetCountD90b",
  "TeamsTeamPrimaryChannelMessagesDelta",
  "TeamsTeamPrimaryChannelMessagesReplyWithQuote",
  "TeamsTeamPrimaryChannelArchive",
  "TeamsTeamPrimaryChannelCompleteMigration",
  "TeamsTeamPrimaryChannelDoesUserHaveAccess",
  "TeamsTeamPrimaryChannelProvisionEmail",
  "TeamsTeamPrimaryChannelRemoveEmail",
  "TeamsTeamPrimaryChannelStartMigration",
  "TeamsTeamPrimaryChannelUnarchive",
  "TeamsPrimaryChannelListSharedWithTeams",
  "TeamsPrimaryChannelCreateSharedWithTeams",
  "TeamsPrimaryChannelGetSharedWithTeams",
  "TeamsPrimaryChannelUpdateSharedWithTeams",
  "TeamsPrimaryChannelDeleteSharedWithTeams",
  "TeamsPrimaryChannelSharedWithTeamsListAllowedMembers",
  "TeamsPrimaryChannelSharedWithTeamsGetAllowedMembers",
  "TeamsPrimaryChannelSharedWithTeamsAllowedMembersGetCount2d1d",
  "TeamsPrimaryChannelSharedWithTeamsGetTeam",
  "TeamsPrimaryChannelSharedWithTeamsGetCount9fea",
  "TeamsPrimaryChannelListTabs",
  "TeamsPrimaryChannelCreateTabs",
  "TeamsPrimaryChannelGetTabs",
  "TeamsPrimaryChannelUpdateTabs",
  "TeamsPrimaryChannelDeleteTabs",
  "TeamsPrimaryChannelTabsGetTeamsApp",
  "TeamsPrimaryChannelTabsGetCount8cf3"
] as const satisfies readonly (keyof TeamsGraphTeamsChannel03GeneratedClient)[];

export function createTeamsGraphTeamsChannel03GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamsChannel03GeneratedClient {
  return {
    TeamsPrimaryChannelMessagesRepliesHostedContentsGetCount1d3a: (...args) => callOperation("teams.primaryChannel.messages.replies.hostedContents.GetCount-1d3a", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.replies.hostedContents.GetCount-1d3a">)),
    TeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSetReaction: (...args) => callOperation("teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.setReaction">)),
    TeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageSoftDelete: (...args) => callOperation("teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.softDelete">)),
    TeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete: (...args) => callOperation("teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.undoSoftDelete">)),
    TeamsTeamPrimaryChannelMessagesChatMessageRepliesChatMessageUnsetReaction: (...args) => callOperation("teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.chatMessage.replies.chatMessage.unsetReaction">)),
    TeamsPrimaryChannelMessagesRepliesGetCountEb7a: (...args) => callOperation("teams.primaryChannel.messages.replies.GetCount-eb7a", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.replies.GetCount-eb7a">)),
    TeamsTeamPrimaryChannelMessagesChatMessageRepliesDelta: (...args) => callOperation("teams.team.primaryChannel.messages.chatMessage.replies.delta", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.chatMessage.replies.delta">)),
    TeamsTeamPrimaryChannelMessagesChatMessageRepliesReplyWithQuote: (...args) => callOperation("teams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.chatMessage.replies.replyWithQuote">)),
    TeamsPrimaryChannelMessagesGetCountD90b: (...args) => callOperation("teams.primaryChannel.messages.GetCount-d90b", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.GetCount-d90b">)),
    TeamsTeamPrimaryChannelMessagesDelta: (...args) => callOperation("teams.team.primaryChannel.messages.delta", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.delta">)),
    TeamsTeamPrimaryChannelMessagesReplyWithQuote: (...args) => callOperation("teams.team.primaryChannel.messages.replyWithQuote", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.replyWithQuote">)),
    TeamsTeamPrimaryChannelArchive: (...args) => callOperation("teams.team.primaryChannel.archive", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.archive">)),
    TeamsTeamPrimaryChannelCompleteMigration: (...args) => callOperation("teams.team.primaryChannel.completeMigration", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.completeMigration">)),
    TeamsTeamPrimaryChannelDoesUserHaveAccess: (...args) => callOperation("teams.team.primaryChannel.doesUserHaveAccess", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.doesUserHaveAccess">)),
    TeamsTeamPrimaryChannelProvisionEmail: (...args) => callOperation("teams.team.primaryChannel.provisionEmail", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.provisionEmail">)),
    TeamsTeamPrimaryChannelRemoveEmail: (...args) => callOperation("teams.team.primaryChannel.removeEmail", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.removeEmail">)),
    TeamsTeamPrimaryChannelStartMigration: (...args) => callOperation("teams.team.primaryChannel.startMigration", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.startMigration">)),
    TeamsTeamPrimaryChannelUnarchive: (...args) => callOperation("teams.team.primaryChannel.unarchive", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.unarchive">)),
    TeamsPrimaryChannelListSharedWithTeams: (...args) => callOperation("teams.primaryChannel.ListSharedWithTeams", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.ListSharedWithTeams">)),
    TeamsPrimaryChannelCreateSharedWithTeams: (...args) => callOperation("teams.primaryChannel.CreateSharedWithTeams", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.CreateSharedWithTeams">)),
    TeamsPrimaryChannelGetSharedWithTeams: (...args) => callOperation("teams.primaryChannel.GetSharedWithTeams", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.GetSharedWithTeams">)),
    TeamsPrimaryChannelUpdateSharedWithTeams: (...args) => callOperation("teams.primaryChannel.UpdateSharedWithTeams", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.UpdateSharedWithTeams">)),
    TeamsPrimaryChannelDeleteSharedWithTeams: (...args) => callOperation("teams.primaryChannel.DeleteSharedWithTeams", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.DeleteSharedWithTeams">)),
    TeamsPrimaryChannelSharedWithTeamsListAllowedMembers: (...args) => callOperation("teams.primaryChannel.sharedWithTeams.ListAllowedMembers", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.sharedWithTeams.ListAllowedMembers">)),
    TeamsPrimaryChannelSharedWithTeamsGetAllowedMembers: (...args) => callOperation("teams.primaryChannel.sharedWithTeams.GetAllowedMembers", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.sharedWithTeams.GetAllowedMembers">)),
    TeamsPrimaryChannelSharedWithTeamsAllowedMembersGetCount2d1d: (...args) => callOperation("teams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-2d1d", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.sharedWithTeams.allowedMembers.GetCount-2d1d">)),
    TeamsPrimaryChannelSharedWithTeamsGetTeam: (...args) => callOperation("teams.primaryChannel.sharedWithTeams.GetTeam", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.sharedWithTeams.GetTeam">)),
    TeamsPrimaryChannelSharedWithTeamsGetCount9fea: (...args) => callOperation("teams.primaryChannel.sharedWithTeams.GetCount-9fea", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.sharedWithTeams.GetCount-9fea">)),
    TeamsPrimaryChannelListTabs: (...args) => callOperation("teams.primaryChannel.ListTabs", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.ListTabs">)),
    TeamsPrimaryChannelCreateTabs: (...args) => callOperation("teams.primaryChannel.CreateTabs", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.CreateTabs">)),
    TeamsPrimaryChannelGetTabs: (...args) => callOperation("teams.primaryChannel.GetTabs", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.GetTabs">)),
    TeamsPrimaryChannelUpdateTabs: (...args) => callOperation("teams.primaryChannel.UpdateTabs", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.UpdateTabs">)),
    TeamsPrimaryChannelDeleteTabs: (...args) => callOperation("teams.primaryChannel.DeleteTabs", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.DeleteTabs">)),
    TeamsPrimaryChannelTabsGetTeamsApp: (...args) => callOperation("teams.primaryChannel.tabs.GetTeamsApp", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.tabs.GetTeamsApp">)),
    TeamsPrimaryChannelTabsGetCount8cf3: (...args) => callOperation("teams.primaryChannel.tabs.GetCount-8cf3", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.tabs.GetCount-8cf3">)),
  };
}
