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
export const TeamsGraphTeamsTeamActionsOperationKeys = [
  "teams.team.archive",
  "teams.team.clone",
  "teams.team.completeMigration",
  "teams.team.sendActivityNotification",
  "teams.team.unarchive"
] as const;
export type TeamsGraphTeamsTeamActionsOperationKey = typeof TeamsGraphTeamsTeamActionsOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamsTeamActionsOperationPathParamMap {
  "teams.team.archive": { "team-id": TeamsGraphPathParamValue };
  "teams.team.clone": { "team-id": TeamsGraphPathParamValue };
  "teams.team.completeMigration": { "team-id": TeamsGraphPathParamValue };
  "teams.team.sendActivityNotification": { "team-id": TeamsGraphPathParamValue };
  "teams.team.unarchive": { "team-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphTeamsTeamActionsOperationRequestMap {
  "teams.team.archive": TeamsGraphOperationInput<"teams.team.archive">;
  "teams.team.clone": TeamsGraphOperationInput<"teams.team.clone">;
  "teams.team.completeMigration": TeamsGraphOperationInput<"teams.team.completeMigration">;
  "teams.team.sendActivityNotification": TeamsGraphOperationInput<"teams.team.sendActivityNotification">;
  "teams.team.unarchive": TeamsGraphOperationInput<"teams.team.unarchive">;
}

export interface TeamsGraphTeamsTeamActionsGeneratedClient {
  TeamsTeamArchive(...args: TeamsGraphOperationArgs<"teams.team.archive">): Promise<TeamsGraphOperationResponseMap["teams.team.archive"]>;
  TeamsTeamClone(...args: TeamsGraphOperationArgs<"teams.team.clone">): Promise<TeamsGraphOperationResponseMap["teams.team.clone"]>;
  TeamsTeamCompleteMigration(...args: TeamsGraphOperationArgs<"teams.team.completeMigration">): Promise<TeamsGraphOperationResponseMap["teams.team.completeMigration"]>;
  TeamsTeamSendActivityNotification(...args: TeamsGraphOperationArgs<"teams.team.sendActivityNotification">): Promise<TeamsGraphOperationResponseMap["teams.team.sendActivityNotification"]>;
  TeamsTeamUnarchive(...args: TeamsGraphOperationArgs<"teams.team.unarchive">): Promise<TeamsGraphOperationResponseMap["teams.team.unarchive"]>;
}

export const TeamsGraphTeamsTeamActionsGeneratedFunctionNames = [
  "TeamsTeamArchive",
  "TeamsTeamClone",
  "TeamsTeamCompleteMigration",
  "TeamsTeamSendActivityNotification",
  "TeamsTeamUnarchive"
] as const satisfies readonly (keyof TeamsGraphTeamsTeamActionsGeneratedClient)[];

export function createTeamsGraphTeamsTeamActionsGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamsTeamActionsGeneratedClient {
  return {
    TeamsTeamArchive: (...args) => callOperation("teams.team.archive", ...(args as TeamsGraphOperationArgs<"teams.team.archive">)),
    TeamsTeamClone: (...args) => callOperation("teams.team.clone", ...(args as TeamsGraphOperationArgs<"teams.team.clone">)),
    TeamsTeamCompleteMigration: (...args) => callOperation("teams.team.completeMigration", ...(args as TeamsGraphOperationArgs<"teams.team.completeMigration">)),
    TeamsTeamSendActivityNotification: (...args) => callOperation("teams.team.sendActivityNotification", ...(args as TeamsGraphOperationArgs<"teams.team.sendActivityNotification">)),
    TeamsTeamUnarchive: (...args) => callOperation("teams.team.unarchive", ...(args as TeamsGraphOperationArgs<"teams.team.unarchive">)),
  };
}
