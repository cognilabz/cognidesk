// Generated endpoint chunk for AppStoreFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AppStoreGeneratedOperationCaller,
  AppStoreFullApiOperationArgs,
  AppStoreFullApiOperationInput,
  AppStoreFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AppStoreFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AppStoreFullApiBetaTestersOperationKeys = [
  "betaTesters_apps_deleteToManyRelationship",
  "betaTesters_apps_getToManyRelated",
  "betaTesters_apps_getToManyRelationship",
  "betaTesters_betaGroups_createToManyRelationship",
  "betaTesters_betaGroups_deleteToManyRelationship",
  "betaTesters_betaGroups_getToManyRelated",
  "betaTesters_betaGroups_getToManyRelationship",
  "betaTesters_betaTesterUsages_getMetrics",
  "betaTesters_builds_createToManyRelationship",
  "betaTesters_builds_deleteToManyRelationship",
  "betaTesters_builds_getToManyRelated",
  "betaTesters_builds_getToManyRelationship",
  "betaTesters_createInstance",
  "betaTesters_deleteInstance",
  "betaTesters_getCollection",
  "betaTesters_getInstance"
] as const;
export type AppStoreFullApiBetaTestersOperationKey = typeof AppStoreFullApiBetaTestersOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBetaTestersOperationPathParamMap {
  "betaTesters_apps_deleteToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaTesters_apps_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "betaTesters_apps_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaTesters_betaGroups_createToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaTesters_betaGroups_deleteToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaTesters_betaGroups_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "betaTesters_betaGroups_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaTesters_betaTesterUsages_getMetrics": { "id": AppStoreFullApiPathParamValue };
  "betaTesters_builds_createToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaTesters_builds_deleteToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaTesters_builds_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "betaTesters_builds_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaTesters_createInstance": {};
  "betaTesters_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "betaTesters_getCollection": {};
  "betaTesters_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBetaTestersOperationRequestMap {
  "betaTesters_apps_deleteToManyRelationship": AppStoreFullApiOperationInput<"betaTesters_apps_deleteToManyRelationship">;
  "betaTesters_apps_getToManyRelated": AppStoreFullApiOperationInput<"betaTesters_apps_getToManyRelated">;
  "betaTesters_apps_getToManyRelationship": AppStoreFullApiOperationInput<"betaTesters_apps_getToManyRelationship">;
  "betaTesters_betaGroups_createToManyRelationship": AppStoreFullApiOperationInput<"betaTesters_betaGroups_createToManyRelationship">;
  "betaTesters_betaGroups_deleteToManyRelationship": AppStoreFullApiOperationInput<"betaTesters_betaGroups_deleteToManyRelationship">;
  "betaTesters_betaGroups_getToManyRelated": AppStoreFullApiOperationInput<"betaTesters_betaGroups_getToManyRelated">;
  "betaTesters_betaGroups_getToManyRelationship": AppStoreFullApiOperationInput<"betaTesters_betaGroups_getToManyRelationship">;
  "betaTesters_betaTesterUsages_getMetrics": AppStoreFullApiOperationInput<"betaTesters_betaTesterUsages_getMetrics">;
  "betaTesters_builds_createToManyRelationship": AppStoreFullApiOperationInput<"betaTesters_builds_createToManyRelationship">;
  "betaTesters_builds_deleteToManyRelationship": AppStoreFullApiOperationInput<"betaTesters_builds_deleteToManyRelationship">;
  "betaTesters_builds_getToManyRelated": AppStoreFullApiOperationInput<"betaTesters_builds_getToManyRelated">;
  "betaTesters_builds_getToManyRelationship": AppStoreFullApiOperationInput<"betaTesters_builds_getToManyRelationship">;
  "betaTesters_createInstance": AppStoreFullApiOperationInput<"betaTesters_createInstance">;
  "betaTesters_deleteInstance": AppStoreFullApiOperationInput<"betaTesters_deleteInstance">;
  "betaTesters_getCollection": AppStoreFullApiOperationInput<"betaTesters_getCollection">;
  "betaTesters_getInstance": AppStoreFullApiOperationInput<"betaTesters_getInstance">;
}

export interface AppStoreFullApiBetaTestersGeneratedClient {
  BetaTestersAppsDeleteToManyRelationship(...args: AppStoreFullApiOperationArgs<"betaTesters_apps_deleteToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaTesters_apps_deleteToManyRelationship"]>;
  BetaTestersAppsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"betaTesters_apps_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["betaTesters_apps_getToManyRelated"]>;
  BetaTestersAppsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"betaTesters_apps_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaTesters_apps_getToManyRelationship"]>;
  BetaTestersBetaGroupsCreateToManyRelationship(...args: AppStoreFullApiOperationArgs<"betaTesters_betaGroups_createToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaTesters_betaGroups_createToManyRelationship"]>;
  BetaTestersBetaGroupsDeleteToManyRelationship(...args: AppStoreFullApiOperationArgs<"betaTesters_betaGroups_deleteToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaTesters_betaGroups_deleteToManyRelationship"]>;
  BetaTestersBetaGroupsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"betaTesters_betaGroups_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["betaTesters_betaGroups_getToManyRelated"]>;
  BetaTestersBetaGroupsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"betaTesters_betaGroups_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaTesters_betaGroups_getToManyRelationship"]>;
  BetaTestersBetaTesterUsagesGetMetrics(...args: AppStoreFullApiOperationArgs<"betaTesters_betaTesterUsages_getMetrics">): Promise<AppStoreFullApiOperationResponseMap["betaTesters_betaTesterUsages_getMetrics"]>;
  BetaTestersBuildsCreateToManyRelationship(...args: AppStoreFullApiOperationArgs<"betaTesters_builds_createToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaTesters_builds_createToManyRelationship"]>;
  BetaTestersBuildsDeleteToManyRelationship(...args: AppStoreFullApiOperationArgs<"betaTesters_builds_deleteToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaTesters_builds_deleteToManyRelationship"]>;
  BetaTestersBuildsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"betaTesters_builds_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["betaTesters_builds_getToManyRelated"]>;
  BetaTestersBuildsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"betaTesters_builds_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaTesters_builds_getToManyRelationship"]>;
  BetaTestersCreateInstance(...args: AppStoreFullApiOperationArgs<"betaTesters_createInstance">): Promise<AppStoreFullApiOperationResponseMap["betaTesters_createInstance"]>;
  BetaTestersDeleteInstance(...args: AppStoreFullApiOperationArgs<"betaTesters_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["betaTesters_deleteInstance"]>;
  BetaTestersGetCollection(...args: AppStoreFullApiOperationArgs<"betaTesters_getCollection">): Promise<AppStoreFullApiOperationResponseMap["betaTesters_getCollection"]>;
  BetaTestersGetInstance(...args: AppStoreFullApiOperationArgs<"betaTesters_getInstance">): Promise<AppStoreFullApiOperationResponseMap["betaTesters_getInstance"]>;
}

export const AppStoreFullApiBetaTestersGeneratedFunctionNames = [
  "BetaTestersAppsDeleteToManyRelationship",
  "BetaTestersAppsGetToManyRelated",
  "BetaTestersAppsGetToManyRelationship",
  "BetaTestersBetaGroupsCreateToManyRelationship",
  "BetaTestersBetaGroupsDeleteToManyRelationship",
  "BetaTestersBetaGroupsGetToManyRelated",
  "BetaTestersBetaGroupsGetToManyRelationship",
  "BetaTestersBetaTesterUsagesGetMetrics",
  "BetaTestersBuildsCreateToManyRelationship",
  "BetaTestersBuildsDeleteToManyRelationship",
  "BetaTestersBuildsGetToManyRelated",
  "BetaTestersBuildsGetToManyRelationship",
  "BetaTestersCreateInstance",
  "BetaTestersDeleteInstance",
  "BetaTestersGetCollection",
  "BetaTestersGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiBetaTestersGeneratedClient)[];

export function createAppStoreFullApiBetaTestersGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBetaTestersGeneratedClient {
  return {
    BetaTestersAppsDeleteToManyRelationship: (...args) => callOperation("betaTesters_apps_deleteToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"betaTesters_apps_deleteToManyRelationship">)),
    BetaTestersAppsGetToManyRelated: (...args) => callOperation("betaTesters_apps_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"betaTesters_apps_getToManyRelated">)),
    BetaTestersAppsGetToManyRelationship: (...args) => callOperation("betaTesters_apps_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"betaTesters_apps_getToManyRelationship">)),
    BetaTestersBetaGroupsCreateToManyRelationship: (...args) => callOperation("betaTesters_betaGroups_createToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"betaTesters_betaGroups_createToManyRelationship">)),
    BetaTestersBetaGroupsDeleteToManyRelationship: (...args) => callOperation("betaTesters_betaGroups_deleteToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"betaTesters_betaGroups_deleteToManyRelationship">)),
    BetaTestersBetaGroupsGetToManyRelated: (...args) => callOperation("betaTesters_betaGroups_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"betaTesters_betaGroups_getToManyRelated">)),
    BetaTestersBetaGroupsGetToManyRelationship: (...args) => callOperation("betaTesters_betaGroups_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"betaTesters_betaGroups_getToManyRelationship">)),
    BetaTestersBetaTesterUsagesGetMetrics: (...args) => callOperation("betaTesters_betaTesterUsages_getMetrics", ...(args as AppStoreFullApiOperationArgs<"betaTesters_betaTesterUsages_getMetrics">)),
    BetaTestersBuildsCreateToManyRelationship: (...args) => callOperation("betaTesters_builds_createToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"betaTesters_builds_createToManyRelationship">)),
    BetaTestersBuildsDeleteToManyRelationship: (...args) => callOperation("betaTesters_builds_deleteToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"betaTesters_builds_deleteToManyRelationship">)),
    BetaTestersBuildsGetToManyRelated: (...args) => callOperation("betaTesters_builds_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"betaTesters_builds_getToManyRelated">)),
    BetaTestersBuildsGetToManyRelationship: (...args) => callOperation("betaTesters_builds_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"betaTesters_builds_getToManyRelationship">)),
    BetaTestersCreateInstance: (...args) => callOperation("betaTesters_createInstance", ...(args as AppStoreFullApiOperationArgs<"betaTesters_createInstance">)),
    BetaTestersDeleteInstance: (...args) => callOperation("betaTesters_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"betaTesters_deleteInstance">)),
    BetaTestersGetCollection: (...args) => callOperation("betaTesters_getCollection", ...(args as AppStoreFullApiOperationArgs<"betaTesters_getCollection">)),
    BetaTestersGetInstance: (...args) => callOperation("betaTesters_getInstance", ...(args as AppStoreFullApiOperationArgs<"betaTesters_getInstance">)),
  };
}
