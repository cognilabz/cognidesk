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
export const TeamsGraphTeamsTeamworkTagOperationKeys = [
  "teams.ListTags",
  "teams.CreateTags",
  "teams.GetTags",
  "teams.UpdateTags",
  "teams.DeleteTags",
  "teams.tags.ListMembers",
  "teams.tags.CreateMembers",
  "teams.tags.GetMembers",
  "teams.tags.UpdateMembers",
  "teams.tags.DeleteMembers",
  "teams.tags.members.GetCount-cbc7",
  "teams.tags.GetCount-db00"
] as const;
export type TeamsGraphTeamsTeamworkTagOperationKey = typeof TeamsGraphTeamsTeamworkTagOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamsTeamworkTagOperationPathParamMap {
  "teams.ListTags": { "team-id": TeamsGraphPathParamValue };
  "teams.CreateTags": { "team-id": TeamsGraphPathParamValue };
  "teams.GetTags": { "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
  "teams.UpdateTags": { "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
  "teams.DeleteTags": { "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
  "teams.tags.ListMembers": { "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
  "teams.tags.CreateMembers": { "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
  "teams.tags.GetMembers": { "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue; "teamworkTagMember-id": TeamsGraphPathParamValue };
  "teams.tags.UpdateMembers": { "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue; "teamworkTagMember-id": TeamsGraphPathParamValue };
  "teams.tags.DeleteMembers": { "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue; "teamworkTagMember-id": TeamsGraphPathParamValue };
  "teams.tags.members.GetCount-cbc7": { "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
  "teams.tags.GetCount-db00": { "team-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphTeamsTeamworkTagOperationRequestMap {
  "teams.ListTags": TeamsGraphOperationInput<"teams.ListTags">;
  "teams.CreateTags": TeamsGraphOperationInput<"teams.CreateTags">;
  "teams.GetTags": TeamsGraphOperationInput<"teams.GetTags">;
  "teams.UpdateTags": TeamsGraphOperationInput<"teams.UpdateTags">;
  "teams.DeleteTags": TeamsGraphOperationInput<"teams.DeleteTags">;
  "teams.tags.ListMembers": TeamsGraphOperationInput<"teams.tags.ListMembers">;
  "teams.tags.CreateMembers": TeamsGraphOperationInput<"teams.tags.CreateMembers">;
  "teams.tags.GetMembers": TeamsGraphOperationInput<"teams.tags.GetMembers">;
  "teams.tags.UpdateMembers": TeamsGraphOperationInput<"teams.tags.UpdateMembers">;
  "teams.tags.DeleteMembers": TeamsGraphOperationInput<"teams.tags.DeleteMembers">;
  "teams.tags.members.GetCount-cbc7": TeamsGraphOperationInput<"teams.tags.members.GetCount-cbc7">;
  "teams.tags.GetCount-db00": TeamsGraphOperationInput<"teams.tags.GetCount-db00">;
}

export interface TeamsGraphTeamsTeamworkTagGeneratedClient {
  TeamsListTags(...args: TeamsGraphOperationArgs<"teams.ListTags">): Promise<TeamsGraphOperationResponseMap["teams.ListTags"]>;
  TeamsCreateTags(...args: TeamsGraphOperationArgs<"teams.CreateTags">): Promise<TeamsGraphOperationResponseMap["teams.CreateTags"]>;
  TeamsGetTags(...args: TeamsGraphOperationArgs<"teams.GetTags">): Promise<TeamsGraphOperationResponseMap["teams.GetTags"]>;
  TeamsUpdateTags(...args: TeamsGraphOperationArgs<"teams.UpdateTags">): Promise<TeamsGraphOperationResponseMap["teams.UpdateTags"]>;
  TeamsDeleteTags(...args: TeamsGraphOperationArgs<"teams.DeleteTags">): Promise<TeamsGraphOperationResponseMap["teams.DeleteTags"]>;
  TeamsTagsListMembers(...args: TeamsGraphOperationArgs<"teams.tags.ListMembers">): Promise<TeamsGraphOperationResponseMap["teams.tags.ListMembers"]>;
  TeamsTagsCreateMembers(...args: TeamsGraphOperationArgs<"teams.tags.CreateMembers">): Promise<TeamsGraphOperationResponseMap["teams.tags.CreateMembers"]>;
  TeamsTagsGetMembers(...args: TeamsGraphOperationArgs<"teams.tags.GetMembers">): Promise<TeamsGraphOperationResponseMap["teams.tags.GetMembers"]>;
  TeamsTagsUpdateMembers(...args: TeamsGraphOperationArgs<"teams.tags.UpdateMembers">): Promise<TeamsGraphOperationResponseMap["teams.tags.UpdateMembers"]>;
  TeamsTagsDeleteMembers(...args: TeamsGraphOperationArgs<"teams.tags.DeleteMembers">): Promise<TeamsGraphOperationResponseMap["teams.tags.DeleteMembers"]>;
  TeamsTagsMembersGetCountCbc7(...args: TeamsGraphOperationArgs<"teams.tags.members.GetCount-cbc7">): Promise<TeamsGraphOperationResponseMap["teams.tags.members.GetCount-cbc7"]>;
  TeamsTagsGetCountDb00(...args: TeamsGraphOperationArgs<"teams.tags.GetCount-db00">): Promise<TeamsGraphOperationResponseMap["teams.tags.GetCount-db00"]>;
}

export const TeamsGraphTeamsTeamworkTagGeneratedFunctionNames = [
  "TeamsListTags",
  "TeamsCreateTags",
  "TeamsGetTags",
  "TeamsUpdateTags",
  "TeamsDeleteTags",
  "TeamsTagsListMembers",
  "TeamsTagsCreateMembers",
  "TeamsTagsGetMembers",
  "TeamsTagsUpdateMembers",
  "TeamsTagsDeleteMembers",
  "TeamsTagsMembersGetCountCbc7",
  "TeamsTagsGetCountDb00"
] as const satisfies readonly (keyof TeamsGraphTeamsTeamworkTagGeneratedClient)[];

export function createTeamsGraphTeamsTeamworkTagGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamsTeamworkTagGeneratedClient {
  return {
    TeamsListTags: (...args) => callOperation("teams.ListTags", ...(args as TeamsGraphOperationArgs<"teams.ListTags">)),
    TeamsCreateTags: (...args) => callOperation("teams.CreateTags", ...(args as TeamsGraphOperationArgs<"teams.CreateTags">)),
    TeamsGetTags: (...args) => callOperation("teams.GetTags", ...(args as TeamsGraphOperationArgs<"teams.GetTags">)),
    TeamsUpdateTags: (...args) => callOperation("teams.UpdateTags", ...(args as TeamsGraphOperationArgs<"teams.UpdateTags">)),
    TeamsDeleteTags: (...args) => callOperation("teams.DeleteTags", ...(args as TeamsGraphOperationArgs<"teams.DeleteTags">)),
    TeamsTagsListMembers: (...args) => callOperation("teams.tags.ListMembers", ...(args as TeamsGraphOperationArgs<"teams.tags.ListMembers">)),
    TeamsTagsCreateMembers: (...args) => callOperation("teams.tags.CreateMembers", ...(args as TeamsGraphOperationArgs<"teams.tags.CreateMembers">)),
    TeamsTagsGetMembers: (...args) => callOperation("teams.tags.GetMembers", ...(args as TeamsGraphOperationArgs<"teams.tags.GetMembers">)),
    TeamsTagsUpdateMembers: (...args) => callOperation("teams.tags.UpdateMembers", ...(args as TeamsGraphOperationArgs<"teams.tags.UpdateMembers">)),
    TeamsTagsDeleteMembers: (...args) => callOperation("teams.tags.DeleteMembers", ...(args as TeamsGraphOperationArgs<"teams.tags.DeleteMembers">)),
    TeamsTagsMembersGetCountCbc7: (...args) => callOperation("teams.tags.members.GetCount-cbc7", ...(args as TeamsGraphOperationArgs<"teams.tags.members.GetCount-cbc7">)),
    TeamsTagsGetCountDb00: (...args) => callOperation("teams.tags.GetCount-db00", ...(args as TeamsGraphOperationArgs<"teams.tags.GetCount-db00">)),
  };
}
