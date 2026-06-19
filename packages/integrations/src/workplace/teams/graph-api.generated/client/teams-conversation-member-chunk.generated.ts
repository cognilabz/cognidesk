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
export const TeamsGraphTeamsConversationMemberOperationKeys = [
  "teams.ListMembers",
  "teams.CreateMembers",
  "teams.GetMembers",
  "teams.UpdateMembers",
  "teams.DeleteMembers",
  "teams.members.GetCount-717b",
  "teams.team.members.add",
  "teams.team.members.remove"
] as const;
export type TeamsGraphTeamsConversationMemberOperationKey = typeof TeamsGraphTeamsConversationMemberOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamsConversationMemberOperationPathParamMap {
  "teams.ListMembers": { "team-id": TeamsGraphPathParamValue };
  "teams.CreateMembers": { "team-id": TeamsGraphPathParamValue };
  "teams.GetMembers": { "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teams.UpdateMembers": { "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teams.DeleteMembers": { "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teams.members.GetCount-717b": { "team-id": TeamsGraphPathParamValue };
  "teams.team.members.add": { "team-id": TeamsGraphPathParamValue };
  "teams.team.members.remove": { "team-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphTeamsConversationMemberOperationRequestMap {
  "teams.ListMembers": TeamsGraphOperationInput<"teams.ListMembers">;
  "teams.CreateMembers": TeamsGraphOperationInput<"teams.CreateMembers">;
  "teams.GetMembers": TeamsGraphOperationInput<"teams.GetMembers">;
  "teams.UpdateMembers": TeamsGraphOperationInput<"teams.UpdateMembers">;
  "teams.DeleteMembers": TeamsGraphOperationInput<"teams.DeleteMembers">;
  "teams.members.GetCount-717b": TeamsGraphOperationInput<"teams.members.GetCount-717b">;
  "teams.team.members.add": TeamsGraphOperationInput<"teams.team.members.add">;
  "teams.team.members.remove": TeamsGraphOperationInput<"teams.team.members.remove">;
}

export interface TeamsGraphTeamsConversationMemberGeneratedClient {
  TeamsListMembers(...args: TeamsGraphOperationArgs<"teams.ListMembers">): Promise<TeamsGraphOperationResponseMap["teams.ListMembers"]>;
  TeamsCreateMembers(...args: TeamsGraphOperationArgs<"teams.CreateMembers">): Promise<TeamsGraphOperationResponseMap["teams.CreateMembers"]>;
  TeamsGetMembers(...args: TeamsGraphOperationArgs<"teams.GetMembers">): Promise<TeamsGraphOperationResponseMap["teams.GetMembers"]>;
  TeamsUpdateMembers(...args: TeamsGraphOperationArgs<"teams.UpdateMembers">): Promise<TeamsGraphOperationResponseMap["teams.UpdateMembers"]>;
  TeamsDeleteMembers(...args: TeamsGraphOperationArgs<"teams.DeleteMembers">): Promise<TeamsGraphOperationResponseMap["teams.DeleteMembers"]>;
  TeamsMembersGetCount717b(...args: TeamsGraphOperationArgs<"teams.members.GetCount-717b">): Promise<TeamsGraphOperationResponseMap["teams.members.GetCount-717b"]>;
  TeamsTeamMembersAdd(...args: TeamsGraphOperationArgs<"teams.team.members.add">): Promise<TeamsGraphOperationResponseMap["teams.team.members.add"]>;
  TeamsTeamMembersRemove(...args: TeamsGraphOperationArgs<"teams.team.members.remove">): Promise<TeamsGraphOperationResponseMap["teams.team.members.remove"]>;
}

export const TeamsGraphTeamsConversationMemberGeneratedFunctionNames = [
  "TeamsListMembers",
  "TeamsCreateMembers",
  "TeamsGetMembers",
  "TeamsUpdateMembers",
  "TeamsDeleteMembers",
  "TeamsMembersGetCount717b",
  "TeamsTeamMembersAdd",
  "TeamsTeamMembersRemove"
] as const satisfies readonly (keyof TeamsGraphTeamsConversationMemberGeneratedClient)[];

export function createTeamsGraphTeamsConversationMemberGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamsConversationMemberGeneratedClient {
  return {
    TeamsListMembers: (...args) => callOperation("teams.ListMembers", ...(args as TeamsGraphOperationArgs<"teams.ListMembers">)),
    TeamsCreateMembers: (...args) => callOperation("teams.CreateMembers", ...(args as TeamsGraphOperationArgs<"teams.CreateMembers">)),
    TeamsGetMembers: (...args) => callOperation("teams.GetMembers", ...(args as TeamsGraphOperationArgs<"teams.GetMembers">)),
    TeamsUpdateMembers: (...args) => callOperation("teams.UpdateMembers", ...(args as TeamsGraphOperationArgs<"teams.UpdateMembers">)),
    TeamsDeleteMembers: (...args) => callOperation("teams.DeleteMembers", ...(args as TeamsGraphOperationArgs<"teams.DeleteMembers">)),
    TeamsMembersGetCount717b: (...args) => callOperation("teams.members.GetCount-717b", ...(args as TeamsGraphOperationArgs<"teams.members.GetCount-717b">)),
    TeamsTeamMembersAdd: (...args) => callOperation("teams.team.members.add", ...(args as TeamsGraphOperationArgs<"teams.team.members.add">)),
    TeamsTeamMembersRemove: (...args) => callOperation("teams.team.members.remove", ...(args as TeamsGraphOperationArgs<"teams.team.members.remove">)),
  };
}
