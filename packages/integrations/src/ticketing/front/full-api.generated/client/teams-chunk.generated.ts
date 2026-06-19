// Generated endpoint chunk for FrontFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  FrontGeneratedOperationCaller,
  FrontFullApiOperationArgs,
  FrontFullApiOperationInput,
  FrontFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { FrontFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const FrontFullApiTeamsOperationKeys = [
  "list-teams",
  "get-team",
  "remove-teammates-from-team",
  "add-teammates-to-team"
] as const;
export type FrontFullApiTeamsOperationKey = typeof FrontFullApiTeamsOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiTeamsOperationPathParamMap {
  "list-teams": {};
  "get-team": { "team_id": FrontFullApiPathParamValue };
  "remove-teammates-from-team": { "team_id": FrontFullApiPathParamValue };
  "add-teammates-to-team": { "team_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiTeamsOperationRequestMap {
  "list-teams": FrontFullApiOperationInput<"list-teams">;
  "get-team": FrontFullApiOperationInput<"get-team">;
  "remove-teammates-from-team": FrontFullApiOperationInput<"remove-teammates-from-team">;
  "add-teammates-to-team": FrontFullApiOperationInput<"add-teammates-to-team">;
}

export interface FrontFullApiTeamsGeneratedClient {
  frontListTeams(...args: FrontFullApiOperationArgs<"list-teams">): Promise<FrontFullApiOperationResponseMap["list-teams"]>;
  frontGetTeam(...args: FrontFullApiOperationArgs<"get-team">): Promise<FrontFullApiOperationResponseMap["get-team"]>;
  frontRemoveTeammatesFromTeam(...args: FrontFullApiOperationArgs<"remove-teammates-from-team">): Promise<FrontFullApiOperationResponseMap["remove-teammates-from-team"]>;
  frontAddTeammatesToTeam(...args: FrontFullApiOperationArgs<"add-teammates-to-team">): Promise<FrontFullApiOperationResponseMap["add-teammates-to-team"]>;
}

export const FrontFullApiTeamsGeneratedFunctionNames = [
  "frontListTeams",
  "frontGetTeam",
  "frontRemoveTeammatesFromTeam",
  "frontAddTeammatesToTeam"
] as const satisfies readonly (keyof FrontFullApiTeamsGeneratedClient)[];

export function createFrontFullApiTeamsGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiTeamsGeneratedClient {
  return {
    frontListTeams: (...args) => callOperation("list-teams", ...(args as FrontFullApiOperationArgs<"list-teams">)),
    frontGetTeam: (...args) => callOperation("get-team", ...(args as FrontFullApiOperationArgs<"get-team">)),
    frontRemoveTeammatesFromTeam: (...args) => callOperation("remove-teammates-from-team", ...(args as FrontFullApiOperationArgs<"remove-teammates-from-team">)),
    frontAddTeammatesToTeam: (...args) => callOperation("add-teammates-to-team", ...(args as FrontFullApiOperationArgs<"add-teammates-to-team">)),
  };
}
