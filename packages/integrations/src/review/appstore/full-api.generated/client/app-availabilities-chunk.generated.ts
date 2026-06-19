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
export const AppStoreFullApiAppAvailabilitiesOperationKeys = [
  "appAvailabilitiesV2_createInstance",
  "appAvailabilitiesV2_getInstance",
  "appAvailabilitiesV2_territoryAvailabilities_getToManyRelated",
  "appAvailabilitiesV2_territoryAvailabilities_getToManyRelationship"
] as const;
export type AppStoreFullApiAppAvailabilitiesOperationKey = typeof AppStoreFullApiAppAvailabilitiesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppAvailabilitiesOperationPathParamMap {
  "appAvailabilitiesV2_createInstance": {};
  "appAvailabilitiesV2_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appAvailabilitiesV2_territoryAvailabilities_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appAvailabilitiesV2_territoryAvailabilities_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppAvailabilitiesOperationRequestMap {
  "appAvailabilitiesV2_createInstance": AppStoreFullApiOperationInput<"appAvailabilitiesV2_createInstance">;
  "appAvailabilitiesV2_getInstance": AppStoreFullApiOperationInput<"appAvailabilitiesV2_getInstance">;
  "appAvailabilitiesV2_territoryAvailabilities_getToManyRelated": AppStoreFullApiOperationInput<"appAvailabilitiesV2_territoryAvailabilities_getToManyRelated">;
  "appAvailabilitiesV2_territoryAvailabilities_getToManyRelationship": AppStoreFullApiOperationInput<"appAvailabilitiesV2_territoryAvailabilities_getToManyRelationship">;
}

export interface AppStoreFullApiAppAvailabilitiesGeneratedClient {
  AppAvailabilitiesV2CreateInstance(...args: AppStoreFullApiOperationArgs<"appAvailabilitiesV2_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appAvailabilitiesV2_createInstance"]>;
  AppAvailabilitiesV2GetInstance(...args: AppStoreFullApiOperationArgs<"appAvailabilitiesV2_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appAvailabilitiesV2_getInstance"]>;
  AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appAvailabilitiesV2_territoryAvailabilities_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appAvailabilitiesV2_territoryAvailabilities_getToManyRelated"]>;
  AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appAvailabilitiesV2_territoryAvailabilities_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appAvailabilitiesV2_territoryAvailabilities_getToManyRelationship"]>;
}

export const AppStoreFullApiAppAvailabilitiesGeneratedFunctionNames = [
  "AppAvailabilitiesV2CreateInstance",
  "AppAvailabilitiesV2GetInstance",
  "AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelated",
  "AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiAppAvailabilitiesGeneratedClient)[];

export function createAppStoreFullApiAppAvailabilitiesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppAvailabilitiesGeneratedClient {
  return {
    AppAvailabilitiesV2CreateInstance: (...args) => callOperation("appAvailabilitiesV2_createInstance", ...(args as AppStoreFullApiOperationArgs<"appAvailabilitiesV2_createInstance">)),
    AppAvailabilitiesV2GetInstance: (...args) => callOperation("appAvailabilitiesV2_getInstance", ...(args as AppStoreFullApiOperationArgs<"appAvailabilitiesV2_getInstance">)),
    AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelated: (...args) => callOperation("appAvailabilitiesV2_territoryAvailabilities_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appAvailabilitiesV2_territoryAvailabilities_getToManyRelated">)),
    AppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelationship: (...args) => callOperation("appAvailabilitiesV2_territoryAvailabilities_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appAvailabilitiesV2_territoryAvailabilities_getToManyRelationship">)),
  };
}
