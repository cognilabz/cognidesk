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
export const TeamsGraphTeamsTeamOperationKeys = [
  "teams.team.ListTeam",
  "teams.team.CreateTeam",
  "teams.team.GetTeam",
  "teams.team.UpdateTeam",
  "teams.team.DeleteTeam",
  "teams.GetCount-ff25"
] as const;
export type TeamsGraphTeamsTeamOperationKey = typeof TeamsGraphTeamsTeamOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamsTeamOperationPathParamMap {
  "teams.team.ListTeam": {};
  "teams.team.CreateTeam": {};
  "teams.team.GetTeam": { "team-id": TeamsGraphPathParamValue };
  "teams.team.UpdateTeam": { "team-id": TeamsGraphPathParamValue };
  "teams.team.DeleteTeam": { "team-id": TeamsGraphPathParamValue };
  "teams.GetCount-ff25": {};
}

export interface TeamsGraphTeamsTeamOperationRequestMap {
  "teams.team.ListTeam": TeamsGraphOperationInput<"teams.team.ListTeam">;
  "teams.team.CreateTeam": TeamsGraphOperationInput<"teams.team.CreateTeam">;
  "teams.team.GetTeam": TeamsGraphOperationInput<"teams.team.GetTeam">;
  "teams.team.UpdateTeam": TeamsGraphOperationInput<"teams.team.UpdateTeam">;
  "teams.team.DeleteTeam": TeamsGraphOperationInput<"teams.team.DeleteTeam">;
  "teams.GetCount-ff25": TeamsGraphOperationInput<"teams.GetCount-ff25">;
}

export interface TeamsGraphTeamsTeamGeneratedClient {
  TeamsTeamListTeam(...args: TeamsGraphOperationArgs<"teams.team.ListTeam">): Promise<TeamsGraphOperationResponseMap["teams.team.ListTeam"]>;
  TeamsTeamCreateTeam(...args: TeamsGraphOperationArgs<"teams.team.CreateTeam">): Promise<TeamsGraphOperationResponseMap["teams.team.CreateTeam"]>;
  TeamsTeamGetTeam(...args: TeamsGraphOperationArgs<"teams.team.GetTeam">): Promise<TeamsGraphOperationResponseMap["teams.team.GetTeam"]>;
  TeamsTeamUpdateTeam(...args: TeamsGraphOperationArgs<"teams.team.UpdateTeam">): Promise<TeamsGraphOperationResponseMap["teams.team.UpdateTeam"]>;
  TeamsTeamDeleteTeam(...args: TeamsGraphOperationArgs<"teams.team.DeleteTeam">): Promise<TeamsGraphOperationResponseMap["teams.team.DeleteTeam"]>;
  TeamsGetCountFf25(...args: TeamsGraphOperationArgs<"teams.GetCount-ff25">): Promise<TeamsGraphOperationResponseMap["teams.GetCount-ff25"]>;
}

export const TeamsGraphTeamsTeamGeneratedFunctionNames = [
  "TeamsTeamListTeam",
  "TeamsTeamCreateTeam",
  "TeamsTeamGetTeam",
  "TeamsTeamUpdateTeam",
  "TeamsTeamDeleteTeam",
  "TeamsGetCountFf25"
] as const satisfies readonly (keyof TeamsGraphTeamsTeamGeneratedClient)[];

export function createTeamsGraphTeamsTeamGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamsTeamGeneratedClient {
  return {
    TeamsTeamListTeam: (...args) => callOperation("teams.team.ListTeam", ...(args as TeamsGraphOperationArgs<"teams.team.ListTeam">)),
    TeamsTeamCreateTeam: (...args) => callOperation("teams.team.CreateTeam", ...(args as TeamsGraphOperationArgs<"teams.team.CreateTeam">)),
    TeamsTeamGetTeam: (...args) => callOperation("teams.team.GetTeam", ...(args as TeamsGraphOperationArgs<"teams.team.GetTeam">)),
    TeamsTeamUpdateTeam: (...args) => callOperation("teams.team.UpdateTeam", ...(args as TeamsGraphOperationArgs<"teams.team.UpdateTeam">)),
    TeamsTeamDeleteTeam: (...args) => callOperation("teams.team.DeleteTeam", ...(args as TeamsGraphOperationArgs<"teams.team.DeleteTeam">)),
    TeamsGetCountFf25: (...args) => callOperation("teams.GetCount-ff25", ...(args as TeamsGraphOperationArgs<"teams.GetCount-ff25">)),
  };
}
