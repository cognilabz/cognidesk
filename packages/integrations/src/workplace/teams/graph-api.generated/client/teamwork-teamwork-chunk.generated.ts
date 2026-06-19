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
export const TeamsGraphTeamworkTeamworkOperationKeys = [
  "teamwork.teamwork.GetTeamwork",
  "teamwork.teamwork.UpdateTeamwork"
] as const;
export type TeamsGraphTeamworkTeamworkOperationKey = typeof TeamsGraphTeamworkTeamworkOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamworkTeamworkOperationPathParamMap {
  "teamwork.teamwork.GetTeamwork": {};
  "teamwork.teamwork.UpdateTeamwork": {};
}

export interface TeamsGraphTeamworkTeamworkOperationRequestMap {
  "teamwork.teamwork.GetTeamwork": TeamsGraphOperationInput<"teamwork.teamwork.GetTeamwork">;
  "teamwork.teamwork.UpdateTeamwork": TeamsGraphOperationInput<"teamwork.teamwork.UpdateTeamwork">;
}

export interface TeamsGraphTeamworkTeamworkGeneratedClient {
  TeamworkTeamworkGetTeamwork(...args: TeamsGraphOperationArgs<"teamwork.teamwork.GetTeamwork">): Promise<TeamsGraphOperationResponseMap["teamwork.teamwork.GetTeamwork"]>;
  TeamworkTeamworkUpdateTeamwork(...args: TeamsGraphOperationArgs<"teamwork.teamwork.UpdateTeamwork">): Promise<TeamsGraphOperationResponseMap["teamwork.teamwork.UpdateTeamwork"]>;
}

export const TeamsGraphTeamworkTeamworkGeneratedFunctionNames = [
  "TeamworkTeamworkGetTeamwork",
  "TeamworkTeamworkUpdateTeamwork"
] as const satisfies readonly (keyof TeamsGraphTeamworkTeamworkGeneratedClient)[];

export function createTeamsGraphTeamworkTeamworkGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamworkTeamworkGeneratedClient {
  return {
    TeamworkTeamworkGetTeamwork: (...args) => callOperation("teamwork.teamwork.GetTeamwork", ...(args as TeamsGraphOperationArgs<"teamwork.teamwork.GetTeamwork">)),
    TeamworkTeamworkUpdateTeamwork: (...args) => callOperation("teamwork.teamwork.UpdateTeamwork", ...(args as TeamsGraphOperationArgs<"teamwork.teamwork.UpdateTeamwork">)),
  };
}
