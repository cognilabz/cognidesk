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
export const TeamsGraphMeTeam05OperationKeys = [
  "me.joinedTeams.UpdateTags",
  "me.joinedTeams.DeleteTags",
  "me.joinedTeams.tags.ListMembers",
  "me.joinedTeams.tags.CreateMembers",
  "me.joinedTeams.tags.GetMembers",
  "me.joinedTeams.tags.UpdateMembers",
  "me.joinedTeams.tags.DeleteMembers",
  "me.joinedTeams.tags.members.GetCount-66e4",
  "me.joinedTeams.tags.GetCount-ca3e",
  "me.joinedTeams.GetTemplate",
  "me.joinedTeams.GetCount-8eca",
  "me.joinedTeams.getAllMessages"
] as const;
export type TeamsGraphMeTeam05OperationKey = typeof TeamsGraphMeTeam05OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphMeTeam05OperationPathParamMap {
  "me.joinedTeams.UpdateTags": { "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
  "me.joinedTeams.DeleteTags": { "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
  "me.joinedTeams.tags.ListMembers": { "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
  "me.joinedTeams.tags.CreateMembers": { "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
  "me.joinedTeams.tags.GetMembers": { "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue; "teamworkTagMember-id": TeamsGraphPathParamValue };
  "me.joinedTeams.tags.UpdateMembers": { "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue; "teamworkTagMember-id": TeamsGraphPathParamValue };
  "me.joinedTeams.tags.DeleteMembers": { "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue; "teamworkTagMember-id": TeamsGraphPathParamValue };
  "me.joinedTeams.tags.members.GetCount-66e4": { "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
  "me.joinedTeams.tags.GetCount-ca3e": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.GetTemplate": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.GetCount-8eca": {};
  "me.joinedTeams.getAllMessages": {};
}

export interface TeamsGraphMeTeam05OperationRequestMap {
  "me.joinedTeams.UpdateTags": TeamsGraphOperationInput<"me.joinedTeams.UpdateTags">;
  "me.joinedTeams.DeleteTags": TeamsGraphOperationInput<"me.joinedTeams.DeleteTags">;
  "me.joinedTeams.tags.ListMembers": TeamsGraphOperationInput<"me.joinedTeams.tags.ListMembers">;
  "me.joinedTeams.tags.CreateMembers": TeamsGraphOperationInput<"me.joinedTeams.tags.CreateMembers">;
  "me.joinedTeams.tags.GetMembers": TeamsGraphOperationInput<"me.joinedTeams.tags.GetMembers">;
  "me.joinedTeams.tags.UpdateMembers": TeamsGraphOperationInput<"me.joinedTeams.tags.UpdateMembers">;
  "me.joinedTeams.tags.DeleteMembers": TeamsGraphOperationInput<"me.joinedTeams.tags.DeleteMembers">;
  "me.joinedTeams.tags.members.GetCount-66e4": TeamsGraphOperationInput<"me.joinedTeams.tags.members.GetCount-66e4">;
  "me.joinedTeams.tags.GetCount-ca3e": TeamsGraphOperationInput<"me.joinedTeams.tags.GetCount-ca3e">;
  "me.joinedTeams.GetTemplate": TeamsGraphOperationInput<"me.joinedTeams.GetTemplate">;
  "me.joinedTeams.GetCount-8eca": TeamsGraphOperationInput<"me.joinedTeams.GetCount-8eca">;
  "me.joinedTeams.getAllMessages": TeamsGraphOperationInput<"me.joinedTeams.getAllMessages">;
}

export interface TeamsGraphMeTeam05GeneratedClient {
  MeJoinedTeamsUpdateTags(...args: TeamsGraphOperationArgs<"me.joinedTeams.UpdateTags">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.UpdateTags"]>;
  MeJoinedTeamsDeleteTags(...args: TeamsGraphOperationArgs<"me.joinedTeams.DeleteTags">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.DeleteTags"]>;
  MeJoinedTeamsTagsListMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.tags.ListMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.tags.ListMembers"]>;
  MeJoinedTeamsTagsCreateMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.tags.CreateMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.tags.CreateMembers"]>;
  MeJoinedTeamsTagsGetMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.tags.GetMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.tags.GetMembers"]>;
  MeJoinedTeamsTagsUpdateMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.tags.UpdateMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.tags.UpdateMembers"]>;
  MeJoinedTeamsTagsDeleteMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.tags.DeleteMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.tags.DeleteMembers"]>;
  MeJoinedTeamsTagsMembersGetCount66e4(...args: TeamsGraphOperationArgs<"me.joinedTeams.tags.members.GetCount-66e4">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.tags.members.GetCount-66e4"]>;
  MeJoinedTeamsTagsGetCountCa3e(...args: TeamsGraphOperationArgs<"me.joinedTeams.tags.GetCount-ca3e">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.tags.GetCount-ca3e"]>;
  MeJoinedTeamsGetTemplate(...args: TeamsGraphOperationArgs<"me.joinedTeams.GetTemplate">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.GetTemplate"]>;
  MeJoinedTeamsGetCount8eca(...args: TeamsGraphOperationArgs<"me.joinedTeams.GetCount-8eca">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.GetCount-8eca"]>;
  MeJoinedTeamsGetAllMessages(...args: TeamsGraphOperationArgs<"me.joinedTeams.getAllMessages">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.getAllMessages"]>;
}

export const TeamsGraphMeTeam05GeneratedFunctionNames = [
  "MeJoinedTeamsUpdateTags",
  "MeJoinedTeamsDeleteTags",
  "MeJoinedTeamsTagsListMembers",
  "MeJoinedTeamsTagsCreateMembers",
  "MeJoinedTeamsTagsGetMembers",
  "MeJoinedTeamsTagsUpdateMembers",
  "MeJoinedTeamsTagsDeleteMembers",
  "MeJoinedTeamsTagsMembersGetCount66e4",
  "MeJoinedTeamsTagsGetCountCa3e",
  "MeJoinedTeamsGetTemplate",
  "MeJoinedTeamsGetCount8eca",
  "MeJoinedTeamsGetAllMessages"
] as const satisfies readonly (keyof TeamsGraphMeTeam05GeneratedClient)[];

export function createTeamsGraphMeTeam05GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphMeTeam05GeneratedClient {
  return {
    MeJoinedTeamsUpdateTags: (...args) => callOperation("me.joinedTeams.UpdateTags", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.UpdateTags">)),
    MeJoinedTeamsDeleteTags: (...args) => callOperation("me.joinedTeams.DeleteTags", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.DeleteTags">)),
    MeJoinedTeamsTagsListMembers: (...args) => callOperation("me.joinedTeams.tags.ListMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.tags.ListMembers">)),
    MeJoinedTeamsTagsCreateMembers: (...args) => callOperation("me.joinedTeams.tags.CreateMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.tags.CreateMembers">)),
    MeJoinedTeamsTagsGetMembers: (...args) => callOperation("me.joinedTeams.tags.GetMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.tags.GetMembers">)),
    MeJoinedTeamsTagsUpdateMembers: (...args) => callOperation("me.joinedTeams.tags.UpdateMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.tags.UpdateMembers">)),
    MeJoinedTeamsTagsDeleteMembers: (...args) => callOperation("me.joinedTeams.tags.DeleteMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.tags.DeleteMembers">)),
    MeJoinedTeamsTagsMembersGetCount66e4: (...args) => callOperation("me.joinedTeams.tags.members.GetCount-66e4", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.tags.members.GetCount-66e4">)),
    MeJoinedTeamsTagsGetCountCa3e: (...args) => callOperation("me.joinedTeams.tags.GetCount-ca3e", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.tags.GetCount-ca3e">)),
    MeJoinedTeamsGetTemplate: (...args) => callOperation("me.joinedTeams.GetTemplate", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.GetTemplate">)),
    MeJoinedTeamsGetCount8eca: (...args) => callOperation("me.joinedTeams.GetCount-8eca", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.GetCount-8eca">)),
    MeJoinedTeamsGetAllMessages: (...args) => callOperation("me.joinedTeams.getAllMessages", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.getAllMessages">)),
  };
}
