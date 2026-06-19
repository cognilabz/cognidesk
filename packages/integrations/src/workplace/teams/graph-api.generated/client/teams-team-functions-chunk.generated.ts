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
export const TeamsGraphTeamsTeamFunctionsOperationKeys = [
  "teams.getAllMessages"
] as const;
export type TeamsGraphTeamsTeamFunctionsOperationKey = typeof TeamsGraphTeamsTeamFunctionsOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamsTeamFunctionsOperationPathParamMap {
  "teams.getAllMessages": {};
}

export interface TeamsGraphTeamsTeamFunctionsOperationRequestMap {
  "teams.getAllMessages": TeamsGraphOperationInput<"teams.getAllMessages">;
}

export interface TeamsGraphTeamsTeamFunctionsGeneratedClient {
  TeamsGetAllMessages(...args: TeamsGraphOperationArgs<"teams.getAllMessages">): Promise<TeamsGraphOperationResponseMap["teams.getAllMessages"]>;
}

export const TeamsGraphTeamsTeamFunctionsGeneratedFunctionNames = [
  "TeamsGetAllMessages"
] as const satisfies readonly (keyof TeamsGraphTeamsTeamFunctionsGeneratedClient)[];

export function createTeamsGraphTeamsTeamFunctionsGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamsTeamFunctionsGeneratedClient {
  return {
    TeamsGetAllMessages: (...args) => callOperation("teams.getAllMessages", ...(args as TeamsGraphOperationArgs<"teams.getAllMessages">)),
  };
}
