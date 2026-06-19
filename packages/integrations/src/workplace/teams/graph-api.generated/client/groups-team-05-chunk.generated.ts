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
export const TeamsGraphGroupsTeam05OperationKeys = [
  "groups.team.tags.ListMembers",
  "groups.team.tags.CreateMembers",
  "groups.team.tags.GetMembers",
  "groups.team.tags.UpdateMembers",
  "groups.team.tags.DeleteMembers",
  "groups.team.tags.members.GetCount-2a7d",
  "groups.team.tags.GetCount-a8f7",
  "groups.team.GetTemplate"
] as const;
export type TeamsGraphGroupsTeam05OperationKey = typeof TeamsGraphGroupsTeam05OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphGroupsTeam05OperationPathParamMap {
  "groups.team.tags.ListMembers": { "group-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
  "groups.team.tags.CreateMembers": { "group-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
  "groups.team.tags.GetMembers": { "group-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue; "teamworkTagMember-id": TeamsGraphPathParamValue };
  "groups.team.tags.UpdateMembers": { "group-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue; "teamworkTagMember-id": TeamsGraphPathParamValue };
  "groups.team.tags.DeleteMembers": { "group-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue; "teamworkTagMember-id": TeamsGraphPathParamValue };
  "groups.team.tags.members.GetCount-2a7d": { "group-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
  "groups.team.tags.GetCount-a8f7": { "group-id": TeamsGraphPathParamValue };
  "groups.team.GetTemplate": { "group-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphGroupsTeam05OperationRequestMap {
  "groups.team.tags.ListMembers": TeamsGraphOperationInput<"groups.team.tags.ListMembers">;
  "groups.team.tags.CreateMembers": TeamsGraphOperationInput<"groups.team.tags.CreateMembers">;
  "groups.team.tags.GetMembers": TeamsGraphOperationInput<"groups.team.tags.GetMembers">;
  "groups.team.tags.UpdateMembers": TeamsGraphOperationInput<"groups.team.tags.UpdateMembers">;
  "groups.team.tags.DeleteMembers": TeamsGraphOperationInput<"groups.team.tags.DeleteMembers">;
  "groups.team.tags.members.GetCount-2a7d": TeamsGraphOperationInput<"groups.team.tags.members.GetCount-2a7d">;
  "groups.team.tags.GetCount-a8f7": TeamsGraphOperationInput<"groups.team.tags.GetCount-a8f7">;
  "groups.team.GetTemplate": TeamsGraphOperationInput<"groups.team.GetTemplate">;
}

export interface TeamsGraphGroupsTeam05GeneratedClient {
  GroupsTeamTagsListMembers(...args: TeamsGraphOperationArgs<"groups.team.tags.ListMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.tags.ListMembers"]>;
  GroupsTeamTagsCreateMembers(...args: TeamsGraphOperationArgs<"groups.team.tags.CreateMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.tags.CreateMembers"]>;
  GroupsTeamTagsGetMembers(...args: TeamsGraphOperationArgs<"groups.team.tags.GetMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.tags.GetMembers"]>;
  GroupsTeamTagsUpdateMembers(...args: TeamsGraphOperationArgs<"groups.team.tags.UpdateMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.tags.UpdateMembers"]>;
  GroupsTeamTagsDeleteMembers(...args: TeamsGraphOperationArgs<"groups.team.tags.DeleteMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.tags.DeleteMembers"]>;
  GroupsTeamTagsMembersGetCount2a7d(...args: TeamsGraphOperationArgs<"groups.team.tags.members.GetCount-2a7d">): Promise<TeamsGraphOperationResponseMap["groups.team.tags.members.GetCount-2a7d"]>;
  GroupsTeamTagsGetCountA8f7(...args: TeamsGraphOperationArgs<"groups.team.tags.GetCount-a8f7">): Promise<TeamsGraphOperationResponseMap["groups.team.tags.GetCount-a8f7"]>;
  GroupsTeamGetTemplate(...args: TeamsGraphOperationArgs<"groups.team.GetTemplate">): Promise<TeamsGraphOperationResponseMap["groups.team.GetTemplate"]>;
}

export const TeamsGraphGroupsTeam05GeneratedFunctionNames = [
  "GroupsTeamTagsListMembers",
  "GroupsTeamTagsCreateMembers",
  "GroupsTeamTagsGetMembers",
  "GroupsTeamTagsUpdateMembers",
  "GroupsTeamTagsDeleteMembers",
  "GroupsTeamTagsMembersGetCount2a7d",
  "GroupsTeamTagsGetCountA8f7",
  "GroupsTeamGetTemplate"
] as const satisfies readonly (keyof TeamsGraphGroupsTeam05GeneratedClient)[];

export function createTeamsGraphGroupsTeam05GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphGroupsTeam05GeneratedClient {
  return {
    GroupsTeamTagsListMembers: (...args) => callOperation("groups.team.tags.ListMembers", ...(args as TeamsGraphOperationArgs<"groups.team.tags.ListMembers">)),
    GroupsTeamTagsCreateMembers: (...args) => callOperation("groups.team.tags.CreateMembers", ...(args as TeamsGraphOperationArgs<"groups.team.tags.CreateMembers">)),
    GroupsTeamTagsGetMembers: (...args) => callOperation("groups.team.tags.GetMembers", ...(args as TeamsGraphOperationArgs<"groups.team.tags.GetMembers">)),
    GroupsTeamTagsUpdateMembers: (...args) => callOperation("groups.team.tags.UpdateMembers", ...(args as TeamsGraphOperationArgs<"groups.team.tags.UpdateMembers">)),
    GroupsTeamTagsDeleteMembers: (...args) => callOperation("groups.team.tags.DeleteMembers", ...(args as TeamsGraphOperationArgs<"groups.team.tags.DeleteMembers">)),
    GroupsTeamTagsMembersGetCount2a7d: (...args) => callOperation("groups.team.tags.members.GetCount-2a7d", ...(args as TeamsGraphOperationArgs<"groups.team.tags.members.GetCount-2a7d">)),
    GroupsTeamTagsGetCountA8f7: (...args) => callOperation("groups.team.tags.GetCount-a8f7", ...(args as TeamsGraphOperationArgs<"groups.team.tags.GetCount-a8f7">)),
    GroupsTeamGetTemplate: (...args) => callOperation("groups.team.GetTemplate", ...(args as TeamsGraphOperationArgs<"groups.team.GetTemplate">)),
  };
}
