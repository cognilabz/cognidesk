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
export const TeamsGraphTeamsTeamsAppInstallationOperationKeys = [
  "teams.ListInstalledApps",
  "teams.CreateInstalledApps",
  "teams.GetInstalledApps",
  "teams.UpdateInstalledApps",
  "teams.DeleteInstalledApps",
  "teams.team.installedApps.teamsAppInstallation.upgrade",
  "teams.installedApps.GetTeamsApp",
  "teams.installedApps.GetTeamsAppDefinition",
  "teams.installedApps.GetCount-d47b"
] as const;
export type TeamsGraphTeamsTeamsAppInstallationOperationKey = typeof TeamsGraphTeamsTeamsAppInstallationOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamsTeamsAppInstallationOperationPathParamMap {
  "teams.ListInstalledApps": { "team-id": TeamsGraphPathParamValue };
  "teams.CreateInstalledApps": { "team-id": TeamsGraphPathParamValue };
  "teams.GetInstalledApps": { "team-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "teams.UpdateInstalledApps": { "team-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "teams.DeleteInstalledApps": { "team-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "teams.team.installedApps.teamsAppInstallation.upgrade": { "team-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "teams.installedApps.GetTeamsApp": { "team-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "teams.installedApps.GetTeamsAppDefinition": { "team-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "teams.installedApps.GetCount-d47b": { "team-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphTeamsTeamsAppInstallationOperationRequestMap {
  "teams.ListInstalledApps": TeamsGraphOperationInput<"teams.ListInstalledApps">;
  "teams.CreateInstalledApps": TeamsGraphOperationInput<"teams.CreateInstalledApps">;
  "teams.GetInstalledApps": TeamsGraphOperationInput<"teams.GetInstalledApps">;
  "teams.UpdateInstalledApps": TeamsGraphOperationInput<"teams.UpdateInstalledApps">;
  "teams.DeleteInstalledApps": TeamsGraphOperationInput<"teams.DeleteInstalledApps">;
  "teams.team.installedApps.teamsAppInstallation.upgrade": TeamsGraphOperationInput<"teams.team.installedApps.teamsAppInstallation.upgrade">;
  "teams.installedApps.GetTeamsApp": TeamsGraphOperationInput<"teams.installedApps.GetTeamsApp">;
  "teams.installedApps.GetTeamsAppDefinition": TeamsGraphOperationInput<"teams.installedApps.GetTeamsAppDefinition">;
  "teams.installedApps.GetCount-d47b": TeamsGraphOperationInput<"teams.installedApps.GetCount-d47b">;
}

export interface TeamsGraphTeamsTeamsAppInstallationGeneratedClient {
  TeamsListInstalledApps(...args: TeamsGraphOperationArgs<"teams.ListInstalledApps">): Promise<TeamsGraphOperationResponseMap["teams.ListInstalledApps"]>;
  TeamsCreateInstalledApps(...args: TeamsGraphOperationArgs<"teams.CreateInstalledApps">): Promise<TeamsGraphOperationResponseMap["teams.CreateInstalledApps"]>;
  TeamsGetInstalledApps(...args: TeamsGraphOperationArgs<"teams.GetInstalledApps">): Promise<TeamsGraphOperationResponseMap["teams.GetInstalledApps"]>;
  TeamsUpdateInstalledApps(...args: TeamsGraphOperationArgs<"teams.UpdateInstalledApps">): Promise<TeamsGraphOperationResponseMap["teams.UpdateInstalledApps"]>;
  TeamsDeleteInstalledApps(...args: TeamsGraphOperationArgs<"teams.DeleteInstalledApps">): Promise<TeamsGraphOperationResponseMap["teams.DeleteInstalledApps"]>;
  TeamsTeamInstalledAppsTeamsAppInstallationUpgrade(...args: TeamsGraphOperationArgs<"teams.team.installedApps.teamsAppInstallation.upgrade">): Promise<TeamsGraphOperationResponseMap["teams.team.installedApps.teamsAppInstallation.upgrade"]>;
  TeamsInstalledAppsGetTeamsApp(...args: TeamsGraphOperationArgs<"teams.installedApps.GetTeamsApp">): Promise<TeamsGraphOperationResponseMap["teams.installedApps.GetTeamsApp"]>;
  TeamsInstalledAppsGetTeamsAppDefinition(...args: TeamsGraphOperationArgs<"teams.installedApps.GetTeamsAppDefinition">): Promise<TeamsGraphOperationResponseMap["teams.installedApps.GetTeamsAppDefinition"]>;
  TeamsInstalledAppsGetCountD47b(...args: TeamsGraphOperationArgs<"teams.installedApps.GetCount-d47b">): Promise<TeamsGraphOperationResponseMap["teams.installedApps.GetCount-d47b"]>;
}

export const TeamsGraphTeamsTeamsAppInstallationGeneratedFunctionNames = [
  "TeamsListInstalledApps",
  "TeamsCreateInstalledApps",
  "TeamsGetInstalledApps",
  "TeamsUpdateInstalledApps",
  "TeamsDeleteInstalledApps",
  "TeamsTeamInstalledAppsTeamsAppInstallationUpgrade",
  "TeamsInstalledAppsGetTeamsApp",
  "TeamsInstalledAppsGetTeamsAppDefinition",
  "TeamsInstalledAppsGetCountD47b"
] as const satisfies readonly (keyof TeamsGraphTeamsTeamsAppInstallationGeneratedClient)[];

export function createTeamsGraphTeamsTeamsAppInstallationGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamsTeamsAppInstallationGeneratedClient {
  return {
    TeamsListInstalledApps: (...args) => callOperation("teams.ListInstalledApps", ...(args as TeamsGraphOperationArgs<"teams.ListInstalledApps">)),
    TeamsCreateInstalledApps: (...args) => callOperation("teams.CreateInstalledApps", ...(args as TeamsGraphOperationArgs<"teams.CreateInstalledApps">)),
    TeamsGetInstalledApps: (...args) => callOperation("teams.GetInstalledApps", ...(args as TeamsGraphOperationArgs<"teams.GetInstalledApps">)),
    TeamsUpdateInstalledApps: (...args) => callOperation("teams.UpdateInstalledApps", ...(args as TeamsGraphOperationArgs<"teams.UpdateInstalledApps">)),
    TeamsDeleteInstalledApps: (...args) => callOperation("teams.DeleteInstalledApps", ...(args as TeamsGraphOperationArgs<"teams.DeleteInstalledApps">)),
    TeamsTeamInstalledAppsTeamsAppInstallationUpgrade: (...args) => callOperation("teams.team.installedApps.teamsAppInstallation.upgrade", ...(args as TeamsGraphOperationArgs<"teams.team.installedApps.teamsAppInstallation.upgrade">)),
    TeamsInstalledAppsGetTeamsApp: (...args) => callOperation("teams.installedApps.GetTeamsApp", ...(args as TeamsGraphOperationArgs<"teams.installedApps.GetTeamsApp">)),
    TeamsInstalledAppsGetTeamsAppDefinition: (...args) => callOperation("teams.installedApps.GetTeamsAppDefinition", ...(args as TeamsGraphOperationArgs<"teams.installedApps.GetTeamsAppDefinition">)),
    TeamsInstalledAppsGetCountD47b: (...args) => callOperation("teams.installedApps.GetCount-d47b", ...(args as TeamsGraphOperationArgs<"teams.installedApps.GetCount-d47b">)),
  };
}
