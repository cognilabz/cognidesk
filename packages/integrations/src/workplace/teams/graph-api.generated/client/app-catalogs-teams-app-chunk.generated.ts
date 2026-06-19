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
export const TeamsGraphAppCatalogsTeamsAppOperationKeys = [
  "appCatalogs.ListTeamsApps",
  "appCatalogs.CreateTeamsApps",
  "appCatalogs.GetTeamsApps",
  "appCatalogs.UpdateTeamsApps",
  "appCatalogs.DeleteTeamsApps",
  "appCatalogs.teamsApps.ListAppDefinitions",
  "appCatalogs.teamsApps.CreateAppDefinitions",
  "appCatalogs.teamsApps.GetAppDefinitions",
  "appCatalogs.teamsApps.UpdateAppDefinitions",
  "appCatalogs.teamsApps.DeleteAppDefinitions",
  "appCatalogs.teamsApps.appDefinitions.GetBot",
  "appCatalogs.teamsApps.appDefinitions.UpdateBot",
  "appCatalogs.teamsApps.appDefinitions.DeleteBot",
  "appCatalogs.teamsApps.appDefinitions.GetCount-ad4f",
  "appCatalogs.teamsApps.GetCount-d4ad"
] as const;
export type TeamsGraphAppCatalogsTeamsAppOperationKey = typeof TeamsGraphAppCatalogsTeamsAppOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphAppCatalogsTeamsAppOperationPathParamMap {
  "appCatalogs.ListTeamsApps": {};
  "appCatalogs.CreateTeamsApps": {};
  "appCatalogs.GetTeamsApps": { "teamsApp-id": TeamsGraphPathParamValue };
  "appCatalogs.UpdateTeamsApps": { "teamsApp-id": TeamsGraphPathParamValue };
  "appCatalogs.DeleteTeamsApps": { "teamsApp-id": TeamsGraphPathParamValue };
  "appCatalogs.teamsApps.ListAppDefinitions": { "teamsApp-id": TeamsGraphPathParamValue };
  "appCatalogs.teamsApps.CreateAppDefinitions": { "teamsApp-id": TeamsGraphPathParamValue };
  "appCatalogs.teamsApps.GetAppDefinitions": { "teamsApp-id": TeamsGraphPathParamValue; "teamsAppDefinition-id": TeamsGraphPathParamValue };
  "appCatalogs.teamsApps.UpdateAppDefinitions": { "teamsApp-id": TeamsGraphPathParamValue; "teamsAppDefinition-id": TeamsGraphPathParamValue };
  "appCatalogs.teamsApps.DeleteAppDefinitions": { "teamsApp-id": TeamsGraphPathParamValue; "teamsAppDefinition-id": TeamsGraphPathParamValue };
  "appCatalogs.teamsApps.appDefinitions.GetBot": { "teamsApp-id": TeamsGraphPathParamValue; "teamsAppDefinition-id": TeamsGraphPathParamValue };
  "appCatalogs.teamsApps.appDefinitions.UpdateBot": { "teamsApp-id": TeamsGraphPathParamValue; "teamsAppDefinition-id": TeamsGraphPathParamValue };
  "appCatalogs.teamsApps.appDefinitions.DeleteBot": { "teamsApp-id": TeamsGraphPathParamValue; "teamsAppDefinition-id": TeamsGraphPathParamValue };
  "appCatalogs.teamsApps.appDefinitions.GetCount-ad4f": { "teamsApp-id": TeamsGraphPathParamValue };
  "appCatalogs.teamsApps.GetCount-d4ad": {};
}

export interface TeamsGraphAppCatalogsTeamsAppOperationRequestMap {
  "appCatalogs.ListTeamsApps": TeamsGraphOperationInput<"appCatalogs.ListTeamsApps">;
  "appCatalogs.CreateTeamsApps": TeamsGraphOperationInput<"appCatalogs.CreateTeamsApps">;
  "appCatalogs.GetTeamsApps": TeamsGraphOperationInput<"appCatalogs.GetTeamsApps">;
  "appCatalogs.UpdateTeamsApps": TeamsGraphOperationInput<"appCatalogs.UpdateTeamsApps">;
  "appCatalogs.DeleteTeamsApps": TeamsGraphOperationInput<"appCatalogs.DeleteTeamsApps">;
  "appCatalogs.teamsApps.ListAppDefinitions": TeamsGraphOperationInput<"appCatalogs.teamsApps.ListAppDefinitions">;
  "appCatalogs.teamsApps.CreateAppDefinitions": TeamsGraphOperationInput<"appCatalogs.teamsApps.CreateAppDefinitions">;
  "appCatalogs.teamsApps.GetAppDefinitions": TeamsGraphOperationInput<"appCatalogs.teamsApps.GetAppDefinitions">;
  "appCatalogs.teamsApps.UpdateAppDefinitions": TeamsGraphOperationInput<"appCatalogs.teamsApps.UpdateAppDefinitions">;
  "appCatalogs.teamsApps.DeleteAppDefinitions": TeamsGraphOperationInput<"appCatalogs.teamsApps.DeleteAppDefinitions">;
  "appCatalogs.teamsApps.appDefinitions.GetBot": TeamsGraphOperationInput<"appCatalogs.teamsApps.appDefinitions.GetBot">;
  "appCatalogs.teamsApps.appDefinitions.UpdateBot": TeamsGraphOperationInput<"appCatalogs.teamsApps.appDefinitions.UpdateBot">;
  "appCatalogs.teamsApps.appDefinitions.DeleteBot": TeamsGraphOperationInput<"appCatalogs.teamsApps.appDefinitions.DeleteBot">;
  "appCatalogs.teamsApps.appDefinitions.GetCount-ad4f": TeamsGraphOperationInput<"appCatalogs.teamsApps.appDefinitions.GetCount-ad4f">;
  "appCatalogs.teamsApps.GetCount-d4ad": TeamsGraphOperationInput<"appCatalogs.teamsApps.GetCount-d4ad">;
}

export interface TeamsGraphAppCatalogsTeamsAppGeneratedClient {
  AppCatalogsListTeamsApps(...args: TeamsGraphOperationArgs<"appCatalogs.ListTeamsApps">): Promise<TeamsGraphOperationResponseMap["appCatalogs.ListTeamsApps"]>;
  AppCatalogsCreateTeamsApps(...args: TeamsGraphOperationArgs<"appCatalogs.CreateTeamsApps">): Promise<TeamsGraphOperationResponseMap["appCatalogs.CreateTeamsApps"]>;
  AppCatalogsGetTeamsApps(...args: TeamsGraphOperationArgs<"appCatalogs.GetTeamsApps">): Promise<TeamsGraphOperationResponseMap["appCatalogs.GetTeamsApps"]>;
  AppCatalogsUpdateTeamsApps(...args: TeamsGraphOperationArgs<"appCatalogs.UpdateTeamsApps">): Promise<TeamsGraphOperationResponseMap["appCatalogs.UpdateTeamsApps"]>;
  AppCatalogsDeleteTeamsApps(...args: TeamsGraphOperationArgs<"appCatalogs.DeleteTeamsApps">): Promise<TeamsGraphOperationResponseMap["appCatalogs.DeleteTeamsApps"]>;
  AppCatalogsTeamsAppsListAppDefinitions(...args: TeamsGraphOperationArgs<"appCatalogs.teamsApps.ListAppDefinitions">): Promise<TeamsGraphOperationResponseMap["appCatalogs.teamsApps.ListAppDefinitions"]>;
  AppCatalogsTeamsAppsCreateAppDefinitions(...args: TeamsGraphOperationArgs<"appCatalogs.teamsApps.CreateAppDefinitions">): Promise<TeamsGraphOperationResponseMap["appCatalogs.teamsApps.CreateAppDefinitions"]>;
  AppCatalogsTeamsAppsGetAppDefinitions(...args: TeamsGraphOperationArgs<"appCatalogs.teamsApps.GetAppDefinitions">): Promise<TeamsGraphOperationResponseMap["appCatalogs.teamsApps.GetAppDefinitions"]>;
  AppCatalogsTeamsAppsUpdateAppDefinitions(...args: TeamsGraphOperationArgs<"appCatalogs.teamsApps.UpdateAppDefinitions">): Promise<TeamsGraphOperationResponseMap["appCatalogs.teamsApps.UpdateAppDefinitions"]>;
  AppCatalogsTeamsAppsDeleteAppDefinitions(...args: TeamsGraphOperationArgs<"appCatalogs.teamsApps.DeleteAppDefinitions">): Promise<TeamsGraphOperationResponseMap["appCatalogs.teamsApps.DeleteAppDefinitions"]>;
  AppCatalogsTeamsAppsAppDefinitionsGetBot(...args: TeamsGraphOperationArgs<"appCatalogs.teamsApps.appDefinitions.GetBot">): Promise<TeamsGraphOperationResponseMap["appCatalogs.teamsApps.appDefinitions.GetBot"]>;
  AppCatalogsTeamsAppsAppDefinitionsUpdateBot(...args: TeamsGraphOperationArgs<"appCatalogs.teamsApps.appDefinitions.UpdateBot">): Promise<TeamsGraphOperationResponseMap["appCatalogs.teamsApps.appDefinitions.UpdateBot"]>;
  AppCatalogsTeamsAppsAppDefinitionsDeleteBot(...args: TeamsGraphOperationArgs<"appCatalogs.teamsApps.appDefinitions.DeleteBot">): Promise<TeamsGraphOperationResponseMap["appCatalogs.teamsApps.appDefinitions.DeleteBot"]>;
  AppCatalogsTeamsAppsAppDefinitionsGetCountAd4f(...args: TeamsGraphOperationArgs<"appCatalogs.teamsApps.appDefinitions.GetCount-ad4f">): Promise<TeamsGraphOperationResponseMap["appCatalogs.teamsApps.appDefinitions.GetCount-ad4f"]>;
  AppCatalogsTeamsAppsGetCountD4ad(...args: TeamsGraphOperationArgs<"appCatalogs.teamsApps.GetCount-d4ad">): Promise<TeamsGraphOperationResponseMap["appCatalogs.teamsApps.GetCount-d4ad"]>;
}

export const TeamsGraphAppCatalogsTeamsAppGeneratedFunctionNames = [
  "AppCatalogsListTeamsApps",
  "AppCatalogsCreateTeamsApps",
  "AppCatalogsGetTeamsApps",
  "AppCatalogsUpdateTeamsApps",
  "AppCatalogsDeleteTeamsApps",
  "AppCatalogsTeamsAppsListAppDefinitions",
  "AppCatalogsTeamsAppsCreateAppDefinitions",
  "AppCatalogsTeamsAppsGetAppDefinitions",
  "AppCatalogsTeamsAppsUpdateAppDefinitions",
  "AppCatalogsTeamsAppsDeleteAppDefinitions",
  "AppCatalogsTeamsAppsAppDefinitionsGetBot",
  "AppCatalogsTeamsAppsAppDefinitionsUpdateBot",
  "AppCatalogsTeamsAppsAppDefinitionsDeleteBot",
  "AppCatalogsTeamsAppsAppDefinitionsGetCountAd4f",
  "AppCatalogsTeamsAppsGetCountD4ad"
] as const satisfies readonly (keyof TeamsGraphAppCatalogsTeamsAppGeneratedClient)[];

export function createTeamsGraphAppCatalogsTeamsAppGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphAppCatalogsTeamsAppGeneratedClient {
  return {
    AppCatalogsListTeamsApps: (...args) => callOperation("appCatalogs.ListTeamsApps", ...(args as TeamsGraphOperationArgs<"appCatalogs.ListTeamsApps">)),
    AppCatalogsCreateTeamsApps: (...args) => callOperation("appCatalogs.CreateTeamsApps", ...(args as TeamsGraphOperationArgs<"appCatalogs.CreateTeamsApps">)),
    AppCatalogsGetTeamsApps: (...args) => callOperation("appCatalogs.GetTeamsApps", ...(args as TeamsGraphOperationArgs<"appCatalogs.GetTeamsApps">)),
    AppCatalogsUpdateTeamsApps: (...args) => callOperation("appCatalogs.UpdateTeamsApps", ...(args as TeamsGraphOperationArgs<"appCatalogs.UpdateTeamsApps">)),
    AppCatalogsDeleteTeamsApps: (...args) => callOperation("appCatalogs.DeleteTeamsApps", ...(args as TeamsGraphOperationArgs<"appCatalogs.DeleteTeamsApps">)),
    AppCatalogsTeamsAppsListAppDefinitions: (...args) => callOperation("appCatalogs.teamsApps.ListAppDefinitions", ...(args as TeamsGraphOperationArgs<"appCatalogs.teamsApps.ListAppDefinitions">)),
    AppCatalogsTeamsAppsCreateAppDefinitions: (...args) => callOperation("appCatalogs.teamsApps.CreateAppDefinitions", ...(args as TeamsGraphOperationArgs<"appCatalogs.teamsApps.CreateAppDefinitions">)),
    AppCatalogsTeamsAppsGetAppDefinitions: (...args) => callOperation("appCatalogs.teamsApps.GetAppDefinitions", ...(args as TeamsGraphOperationArgs<"appCatalogs.teamsApps.GetAppDefinitions">)),
    AppCatalogsTeamsAppsUpdateAppDefinitions: (...args) => callOperation("appCatalogs.teamsApps.UpdateAppDefinitions", ...(args as TeamsGraphOperationArgs<"appCatalogs.teamsApps.UpdateAppDefinitions">)),
    AppCatalogsTeamsAppsDeleteAppDefinitions: (...args) => callOperation("appCatalogs.teamsApps.DeleteAppDefinitions", ...(args as TeamsGraphOperationArgs<"appCatalogs.teamsApps.DeleteAppDefinitions">)),
    AppCatalogsTeamsAppsAppDefinitionsGetBot: (...args) => callOperation("appCatalogs.teamsApps.appDefinitions.GetBot", ...(args as TeamsGraphOperationArgs<"appCatalogs.teamsApps.appDefinitions.GetBot">)),
    AppCatalogsTeamsAppsAppDefinitionsUpdateBot: (...args) => callOperation("appCatalogs.teamsApps.appDefinitions.UpdateBot", ...(args as TeamsGraphOperationArgs<"appCatalogs.teamsApps.appDefinitions.UpdateBot">)),
    AppCatalogsTeamsAppsAppDefinitionsDeleteBot: (...args) => callOperation("appCatalogs.teamsApps.appDefinitions.DeleteBot", ...(args as TeamsGraphOperationArgs<"appCatalogs.teamsApps.appDefinitions.DeleteBot">)),
    AppCatalogsTeamsAppsAppDefinitionsGetCountAd4f: (...args) => callOperation("appCatalogs.teamsApps.appDefinitions.GetCount-ad4f", ...(args as TeamsGraphOperationArgs<"appCatalogs.teamsApps.appDefinitions.GetCount-ad4f">)),
    AppCatalogsTeamsAppsGetCountD4ad: (...args) => callOperation("appCatalogs.teamsApps.GetCount-d4ad", ...(args as TeamsGraphOperationArgs<"appCatalogs.teamsApps.GetCount-d4ad">)),
  };
}
