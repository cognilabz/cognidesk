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
export const TeamsGraphTeamworkDeletedTeam02OperationKeys = [
  "teamwork.deletedTeams.deletedTeam.channels.channel.startMigration",
  "teamwork.deletedTeams.deletedTeam.channels.channel.unarchive",
  "teamwork.deletedTeams.channels.ListSharedWithTeams",
  "teamwork.deletedTeams.channels.CreateSharedWithTeams",
  "teamwork.deletedTeams.channels.GetSharedWithTeams",
  "teamwork.deletedTeams.channels.UpdateSharedWithTeams",
  "teamwork.deletedTeams.channels.DeleteSharedWithTeams",
  "teamwork.deletedTeams.channels.sharedWithTeams.ListAllowedMembers",
  "teamwork.deletedTeams.channels.sharedWithTeams.GetAllowedMembers",
  "teamwork.deletedTeams.channels.sharedWithTeams.allowedMembers.GetCount-f7b0",
  "teamwork.deletedTeams.channels.sharedWithTeams.GetTeam",
  "teamwork.deletedTeams.channels.sharedWithTeams.GetCount-cc9d",
  "teamwork.deletedTeams.channels.ListTabs",
  "teamwork.deletedTeams.channels.CreateTabs",
  "teamwork.deletedTeams.channels.GetTabs",
  "teamwork.deletedTeams.channels.UpdateTabs",
  "teamwork.deletedTeams.channels.DeleteTabs",
  "teamwork.deletedTeams.channels.tabs.GetTeamsApp",
  "teamwork.deletedTeams.channels.tabs.GetCount-5911",
  "teamwork.deletedTeams.channels.GetCount-1c02",
  "teamwork.deletedTeams.deletedTeam.channels.getAllMessages",
  "teamwork.deletedTeams.deletedTeam.channels.getAllRetainedMessages",
  "teamwork.deletedTeams.GetCount-c07f",
  "teamwork.deletedTeams.getAllMessages"
] as const;
export type TeamsGraphTeamworkDeletedTeam02OperationKey = typeof TeamsGraphTeamworkDeletedTeam02OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamworkDeletedTeam02OperationPathParamMap {
  "teamwork.deletedTeams.deletedTeam.channels.channel.startMigration": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.unarchive": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.ListSharedWithTeams": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.CreateSharedWithTeams": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.GetSharedWithTeams": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.UpdateSharedWithTeams": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.DeleteSharedWithTeams": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.sharedWithTeams.ListAllowedMembers": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.sharedWithTeams.GetAllowedMembers": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.sharedWithTeams.allowedMembers.GetCount-f7b0": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.sharedWithTeams.GetTeam": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.sharedWithTeams.GetCount-cc9d": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.ListTabs": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.CreateTabs": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.GetTabs": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.UpdateTabs": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.DeleteTabs": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.tabs.GetTeamsApp": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.tabs.GetCount-5911": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.GetCount-1c02": { "deletedTeam-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.getAllMessages": { "deletedTeam-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.getAllRetainedMessages": { "deletedTeam-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.GetCount-c07f": {};
  "teamwork.deletedTeams.getAllMessages": {};
}

export interface TeamsGraphTeamworkDeletedTeam02OperationRequestMap {
  "teamwork.deletedTeams.deletedTeam.channels.channel.startMigration": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.startMigration">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.unarchive": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.unarchive">;
  "teamwork.deletedTeams.channels.ListSharedWithTeams": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.ListSharedWithTeams">;
  "teamwork.deletedTeams.channels.CreateSharedWithTeams": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.CreateSharedWithTeams">;
  "teamwork.deletedTeams.channels.GetSharedWithTeams": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.GetSharedWithTeams">;
  "teamwork.deletedTeams.channels.UpdateSharedWithTeams": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.UpdateSharedWithTeams">;
  "teamwork.deletedTeams.channels.DeleteSharedWithTeams": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.DeleteSharedWithTeams">;
  "teamwork.deletedTeams.channels.sharedWithTeams.ListAllowedMembers": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.sharedWithTeams.ListAllowedMembers">;
  "teamwork.deletedTeams.channels.sharedWithTeams.GetAllowedMembers": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.sharedWithTeams.GetAllowedMembers">;
  "teamwork.deletedTeams.channels.sharedWithTeams.allowedMembers.GetCount-f7b0": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.sharedWithTeams.allowedMembers.GetCount-f7b0">;
  "teamwork.deletedTeams.channels.sharedWithTeams.GetTeam": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.sharedWithTeams.GetTeam">;
  "teamwork.deletedTeams.channels.sharedWithTeams.GetCount-cc9d": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.sharedWithTeams.GetCount-cc9d">;
  "teamwork.deletedTeams.channels.ListTabs": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.ListTabs">;
  "teamwork.deletedTeams.channels.CreateTabs": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.CreateTabs">;
  "teamwork.deletedTeams.channels.GetTabs": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.GetTabs">;
  "teamwork.deletedTeams.channels.UpdateTabs": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.UpdateTabs">;
  "teamwork.deletedTeams.channels.DeleteTabs": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.DeleteTabs">;
  "teamwork.deletedTeams.channels.tabs.GetTeamsApp": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.tabs.GetTeamsApp">;
  "teamwork.deletedTeams.channels.tabs.GetCount-5911": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.tabs.GetCount-5911">;
  "teamwork.deletedTeams.channels.GetCount-1c02": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.GetCount-1c02">;
  "teamwork.deletedTeams.deletedTeam.channels.getAllMessages": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.getAllMessages">;
  "teamwork.deletedTeams.deletedTeam.channels.getAllRetainedMessages": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.getAllRetainedMessages">;
  "teamwork.deletedTeams.GetCount-c07f": TeamsGraphOperationInput<"teamwork.deletedTeams.GetCount-c07f">;
  "teamwork.deletedTeams.getAllMessages": TeamsGraphOperationInput<"teamwork.deletedTeams.getAllMessages">;
}

export interface TeamsGraphTeamworkDeletedTeam02GeneratedClient {
  TeamworkDeletedTeamsDeletedTeamChannelsChannelStartMigration(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.startMigration">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.startMigration"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelUnarchive(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.unarchive">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.unarchive"]>;
  TeamworkDeletedTeamsChannelsListSharedWithTeams(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.ListSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.ListSharedWithTeams"]>;
  TeamworkDeletedTeamsChannelsCreateSharedWithTeams(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.CreateSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.CreateSharedWithTeams"]>;
  TeamworkDeletedTeamsChannelsGetSharedWithTeams(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.GetSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.GetSharedWithTeams"]>;
  TeamworkDeletedTeamsChannelsUpdateSharedWithTeams(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.UpdateSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.UpdateSharedWithTeams"]>;
  TeamworkDeletedTeamsChannelsDeleteSharedWithTeams(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.DeleteSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.DeleteSharedWithTeams"]>;
  TeamworkDeletedTeamsChannelsSharedWithTeamsListAllowedMembers(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.sharedWithTeams.ListAllowedMembers">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.sharedWithTeams.ListAllowedMembers"]>;
  TeamworkDeletedTeamsChannelsSharedWithTeamsGetAllowedMembers(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.sharedWithTeams.GetAllowedMembers">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.sharedWithTeams.GetAllowedMembers"]>;
  TeamworkDeletedTeamsChannelsSharedWithTeamsAllowedMembersGetCountF7b0(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.sharedWithTeams.allowedMembers.GetCount-f7b0">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.sharedWithTeams.allowedMembers.GetCount-f7b0"]>;
  TeamworkDeletedTeamsChannelsSharedWithTeamsGetTeam(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.sharedWithTeams.GetTeam">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.sharedWithTeams.GetTeam"]>;
  TeamworkDeletedTeamsChannelsSharedWithTeamsGetCountCc9d(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.sharedWithTeams.GetCount-cc9d">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.sharedWithTeams.GetCount-cc9d"]>;
  TeamworkDeletedTeamsChannelsListTabs(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.ListTabs">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.ListTabs"]>;
  TeamworkDeletedTeamsChannelsCreateTabs(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.CreateTabs">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.CreateTabs"]>;
  TeamworkDeletedTeamsChannelsGetTabs(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.GetTabs">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.GetTabs"]>;
  TeamworkDeletedTeamsChannelsUpdateTabs(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.UpdateTabs">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.UpdateTabs"]>;
  TeamworkDeletedTeamsChannelsDeleteTabs(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.DeleteTabs">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.DeleteTabs"]>;
  TeamworkDeletedTeamsChannelsTabsGetTeamsApp(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.tabs.GetTeamsApp">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.tabs.GetTeamsApp"]>;
  TeamworkDeletedTeamsChannelsTabsGetCount5911(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.tabs.GetCount-5911">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.tabs.GetCount-5911"]>;
  TeamworkDeletedTeamsChannelsGetCount1c02(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.GetCount-1c02">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.GetCount-1c02"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsGetAllMessages(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.getAllMessages">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.getAllMessages"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsGetAllRetainedMessages(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.getAllRetainedMessages">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.getAllRetainedMessages"]>;
  TeamworkDeletedTeamsGetCountC07f(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.GetCount-c07f">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.GetCount-c07f"]>;
  TeamworkDeletedTeamsGetAllMessages(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.getAllMessages">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.getAllMessages"]>;
}

export const TeamsGraphTeamworkDeletedTeam02GeneratedFunctionNames = [
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelStartMigration",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelUnarchive",
  "TeamworkDeletedTeamsChannelsListSharedWithTeams",
  "TeamworkDeletedTeamsChannelsCreateSharedWithTeams",
  "TeamworkDeletedTeamsChannelsGetSharedWithTeams",
  "TeamworkDeletedTeamsChannelsUpdateSharedWithTeams",
  "TeamworkDeletedTeamsChannelsDeleteSharedWithTeams",
  "TeamworkDeletedTeamsChannelsSharedWithTeamsListAllowedMembers",
  "TeamworkDeletedTeamsChannelsSharedWithTeamsGetAllowedMembers",
  "TeamworkDeletedTeamsChannelsSharedWithTeamsAllowedMembersGetCountF7b0",
  "TeamworkDeletedTeamsChannelsSharedWithTeamsGetTeam",
  "TeamworkDeletedTeamsChannelsSharedWithTeamsGetCountCc9d",
  "TeamworkDeletedTeamsChannelsListTabs",
  "TeamworkDeletedTeamsChannelsCreateTabs",
  "TeamworkDeletedTeamsChannelsGetTabs",
  "TeamworkDeletedTeamsChannelsUpdateTabs",
  "TeamworkDeletedTeamsChannelsDeleteTabs",
  "TeamworkDeletedTeamsChannelsTabsGetTeamsApp",
  "TeamworkDeletedTeamsChannelsTabsGetCount5911",
  "TeamworkDeletedTeamsChannelsGetCount1c02",
  "TeamworkDeletedTeamsDeletedTeamChannelsGetAllMessages",
  "TeamworkDeletedTeamsDeletedTeamChannelsGetAllRetainedMessages",
  "TeamworkDeletedTeamsGetCountC07f",
  "TeamworkDeletedTeamsGetAllMessages"
] as const satisfies readonly (keyof TeamsGraphTeamworkDeletedTeam02GeneratedClient)[];

export function createTeamsGraphTeamworkDeletedTeam02GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamworkDeletedTeam02GeneratedClient {
  return {
    TeamworkDeletedTeamsDeletedTeamChannelsChannelStartMigration: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.startMigration", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.startMigration">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelUnarchive: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.unarchive", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.unarchive">)),
    TeamworkDeletedTeamsChannelsListSharedWithTeams: (...args) => callOperation("teamwork.deletedTeams.channels.ListSharedWithTeams", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.ListSharedWithTeams">)),
    TeamworkDeletedTeamsChannelsCreateSharedWithTeams: (...args) => callOperation("teamwork.deletedTeams.channels.CreateSharedWithTeams", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.CreateSharedWithTeams">)),
    TeamworkDeletedTeamsChannelsGetSharedWithTeams: (...args) => callOperation("teamwork.deletedTeams.channels.GetSharedWithTeams", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.GetSharedWithTeams">)),
    TeamworkDeletedTeamsChannelsUpdateSharedWithTeams: (...args) => callOperation("teamwork.deletedTeams.channels.UpdateSharedWithTeams", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.UpdateSharedWithTeams">)),
    TeamworkDeletedTeamsChannelsDeleteSharedWithTeams: (...args) => callOperation("teamwork.deletedTeams.channels.DeleteSharedWithTeams", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.DeleteSharedWithTeams">)),
    TeamworkDeletedTeamsChannelsSharedWithTeamsListAllowedMembers: (...args) => callOperation("teamwork.deletedTeams.channels.sharedWithTeams.ListAllowedMembers", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.sharedWithTeams.ListAllowedMembers">)),
    TeamworkDeletedTeamsChannelsSharedWithTeamsGetAllowedMembers: (...args) => callOperation("teamwork.deletedTeams.channels.sharedWithTeams.GetAllowedMembers", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.sharedWithTeams.GetAllowedMembers">)),
    TeamworkDeletedTeamsChannelsSharedWithTeamsAllowedMembersGetCountF7b0: (...args) => callOperation("teamwork.deletedTeams.channels.sharedWithTeams.allowedMembers.GetCount-f7b0", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.sharedWithTeams.allowedMembers.GetCount-f7b0">)),
    TeamworkDeletedTeamsChannelsSharedWithTeamsGetTeam: (...args) => callOperation("teamwork.deletedTeams.channels.sharedWithTeams.GetTeam", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.sharedWithTeams.GetTeam">)),
    TeamworkDeletedTeamsChannelsSharedWithTeamsGetCountCc9d: (...args) => callOperation("teamwork.deletedTeams.channels.sharedWithTeams.GetCount-cc9d", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.sharedWithTeams.GetCount-cc9d">)),
    TeamworkDeletedTeamsChannelsListTabs: (...args) => callOperation("teamwork.deletedTeams.channels.ListTabs", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.ListTabs">)),
    TeamworkDeletedTeamsChannelsCreateTabs: (...args) => callOperation("teamwork.deletedTeams.channels.CreateTabs", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.CreateTabs">)),
    TeamworkDeletedTeamsChannelsGetTabs: (...args) => callOperation("teamwork.deletedTeams.channels.GetTabs", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.GetTabs">)),
    TeamworkDeletedTeamsChannelsUpdateTabs: (...args) => callOperation("teamwork.deletedTeams.channels.UpdateTabs", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.UpdateTabs">)),
    TeamworkDeletedTeamsChannelsDeleteTabs: (...args) => callOperation("teamwork.deletedTeams.channels.DeleteTabs", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.DeleteTabs">)),
    TeamworkDeletedTeamsChannelsTabsGetTeamsApp: (...args) => callOperation("teamwork.deletedTeams.channels.tabs.GetTeamsApp", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.tabs.GetTeamsApp">)),
    TeamworkDeletedTeamsChannelsTabsGetCount5911: (...args) => callOperation("teamwork.deletedTeams.channels.tabs.GetCount-5911", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.tabs.GetCount-5911">)),
    TeamworkDeletedTeamsChannelsGetCount1c02: (...args) => callOperation("teamwork.deletedTeams.channels.GetCount-1c02", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.GetCount-1c02">)),
    TeamworkDeletedTeamsDeletedTeamChannelsGetAllMessages: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.getAllMessages", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.getAllMessages">)),
    TeamworkDeletedTeamsDeletedTeamChannelsGetAllRetainedMessages: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.getAllRetainedMessages", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.getAllRetainedMessages">)),
    TeamworkDeletedTeamsGetCountC07f: (...args) => callOperation("teamwork.deletedTeams.GetCount-c07f", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.GetCount-c07f">)),
    TeamworkDeletedTeamsGetAllMessages: (...args) => callOperation("teamwork.deletedTeams.getAllMessages", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.getAllMessages">)),
  };
}
