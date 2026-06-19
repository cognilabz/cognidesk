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
export const TeamsGraphTeamworkTeamsAppSettingsOperationKeys = [
  "teamwork.GetTeamsAppSettings",
  "teamwork.UpdateTeamsAppSettings",
  "teamwork.DeleteTeamsAppSettings"
] as const;
export type TeamsGraphTeamworkTeamsAppSettingsOperationKey = typeof TeamsGraphTeamworkTeamsAppSettingsOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamworkTeamsAppSettingsOperationPathParamMap {
  "teamwork.GetTeamsAppSettings": {};
  "teamwork.UpdateTeamsAppSettings": {};
  "teamwork.DeleteTeamsAppSettings": {};
}

export interface TeamsGraphTeamworkTeamsAppSettingsOperationRequestMap {
  "teamwork.GetTeamsAppSettings": TeamsGraphOperationInput<"teamwork.GetTeamsAppSettings">;
  "teamwork.UpdateTeamsAppSettings": TeamsGraphOperationInput<"teamwork.UpdateTeamsAppSettings">;
  "teamwork.DeleteTeamsAppSettings": TeamsGraphOperationInput<"teamwork.DeleteTeamsAppSettings">;
}

export interface TeamsGraphTeamworkTeamsAppSettingsGeneratedClient {
  TeamworkGetTeamsAppSettings(...args: TeamsGraphOperationArgs<"teamwork.GetTeamsAppSettings">): Promise<TeamsGraphOperationResponseMap["teamwork.GetTeamsAppSettings"]>;
  TeamworkUpdateTeamsAppSettings(...args: TeamsGraphOperationArgs<"teamwork.UpdateTeamsAppSettings">): Promise<TeamsGraphOperationResponseMap["teamwork.UpdateTeamsAppSettings"]>;
  TeamworkDeleteTeamsAppSettings(...args: TeamsGraphOperationArgs<"teamwork.DeleteTeamsAppSettings">): Promise<TeamsGraphOperationResponseMap["teamwork.DeleteTeamsAppSettings"]>;
}

export const TeamsGraphTeamworkTeamsAppSettingsGeneratedFunctionNames = [
  "TeamworkGetTeamsAppSettings",
  "TeamworkUpdateTeamsAppSettings",
  "TeamworkDeleteTeamsAppSettings"
] as const satisfies readonly (keyof TeamsGraphTeamworkTeamsAppSettingsGeneratedClient)[];

export function createTeamsGraphTeamworkTeamsAppSettingsGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamworkTeamsAppSettingsGeneratedClient {
  return {
    TeamworkGetTeamsAppSettings: (...args) => callOperation("teamwork.GetTeamsAppSettings", ...(args as TeamsGraphOperationArgs<"teamwork.GetTeamsAppSettings">)),
    TeamworkUpdateTeamsAppSettings: (...args) => callOperation("teamwork.UpdateTeamsAppSettings", ...(args as TeamsGraphOperationArgs<"teamwork.UpdateTeamsAppSettings">)),
    TeamworkDeleteTeamsAppSettings: (...args) => callOperation("teamwork.DeleteTeamsAppSettings", ...(args as TeamsGraphOperationArgs<"teamwork.DeleteTeamsAppSettings">)),
  };
}
