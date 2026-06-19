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
export const AppStoreFullApiAppPriceSchedulesOperationKeys = [
  "appPriceSchedules_automaticPrices_getToManyRelated",
  "appPriceSchedules_automaticPrices_getToManyRelationship",
  "appPriceSchedules_baseTerritory_getToOneRelated",
  "appPriceSchedules_baseTerritory_getToOneRelationship",
  "appPriceSchedules_createInstance",
  "appPriceSchedules_getInstance",
  "appPriceSchedules_manualPrices_getToManyRelated",
  "appPriceSchedules_manualPrices_getToManyRelationship"
] as const;
export type AppStoreFullApiAppPriceSchedulesOperationKey = typeof AppStoreFullApiAppPriceSchedulesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppPriceSchedulesOperationPathParamMap {
  "appPriceSchedules_automaticPrices_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appPriceSchedules_automaticPrices_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appPriceSchedules_baseTerritory_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appPriceSchedules_baseTerritory_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appPriceSchedules_createInstance": {};
  "appPriceSchedules_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appPriceSchedules_manualPrices_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appPriceSchedules_manualPrices_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppPriceSchedulesOperationRequestMap {
  "appPriceSchedules_automaticPrices_getToManyRelated": AppStoreFullApiOperationInput<"appPriceSchedules_automaticPrices_getToManyRelated">;
  "appPriceSchedules_automaticPrices_getToManyRelationship": AppStoreFullApiOperationInput<"appPriceSchedules_automaticPrices_getToManyRelationship">;
  "appPriceSchedules_baseTerritory_getToOneRelated": AppStoreFullApiOperationInput<"appPriceSchedules_baseTerritory_getToOneRelated">;
  "appPriceSchedules_baseTerritory_getToOneRelationship": AppStoreFullApiOperationInput<"appPriceSchedules_baseTerritory_getToOneRelationship">;
  "appPriceSchedules_createInstance": AppStoreFullApiOperationInput<"appPriceSchedules_createInstance">;
  "appPriceSchedules_getInstance": AppStoreFullApiOperationInput<"appPriceSchedules_getInstance">;
  "appPriceSchedules_manualPrices_getToManyRelated": AppStoreFullApiOperationInput<"appPriceSchedules_manualPrices_getToManyRelated">;
  "appPriceSchedules_manualPrices_getToManyRelationship": AppStoreFullApiOperationInput<"appPriceSchedules_manualPrices_getToManyRelationship">;
}

export interface AppStoreFullApiAppPriceSchedulesGeneratedClient {
  AppPriceSchedulesAutomaticPricesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appPriceSchedules_automaticPrices_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appPriceSchedules_automaticPrices_getToManyRelated"]>;
  AppPriceSchedulesAutomaticPricesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appPriceSchedules_automaticPrices_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appPriceSchedules_automaticPrices_getToManyRelationship"]>;
  AppPriceSchedulesBaseTerritoryGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appPriceSchedules_baseTerritory_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appPriceSchedules_baseTerritory_getToOneRelated"]>;
  AppPriceSchedulesBaseTerritoryGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appPriceSchedules_baseTerritory_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appPriceSchedules_baseTerritory_getToOneRelationship"]>;
  AppPriceSchedulesCreateInstance(...args: AppStoreFullApiOperationArgs<"appPriceSchedules_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appPriceSchedules_createInstance"]>;
  AppPriceSchedulesGetInstance(...args: AppStoreFullApiOperationArgs<"appPriceSchedules_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appPriceSchedules_getInstance"]>;
  AppPriceSchedulesManualPricesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appPriceSchedules_manualPrices_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appPriceSchedules_manualPrices_getToManyRelated"]>;
  AppPriceSchedulesManualPricesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appPriceSchedules_manualPrices_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appPriceSchedules_manualPrices_getToManyRelationship"]>;
}

export const AppStoreFullApiAppPriceSchedulesGeneratedFunctionNames = [
  "AppPriceSchedulesAutomaticPricesGetToManyRelated",
  "AppPriceSchedulesAutomaticPricesGetToManyRelationship",
  "AppPriceSchedulesBaseTerritoryGetToOneRelated",
  "AppPriceSchedulesBaseTerritoryGetToOneRelationship",
  "AppPriceSchedulesCreateInstance",
  "AppPriceSchedulesGetInstance",
  "AppPriceSchedulesManualPricesGetToManyRelated",
  "AppPriceSchedulesManualPricesGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiAppPriceSchedulesGeneratedClient)[];

export function createAppStoreFullApiAppPriceSchedulesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppPriceSchedulesGeneratedClient {
  return {
    AppPriceSchedulesAutomaticPricesGetToManyRelated: (...args) => callOperation("appPriceSchedules_automaticPrices_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appPriceSchedules_automaticPrices_getToManyRelated">)),
    AppPriceSchedulesAutomaticPricesGetToManyRelationship: (...args) => callOperation("appPriceSchedules_automaticPrices_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appPriceSchedules_automaticPrices_getToManyRelationship">)),
    AppPriceSchedulesBaseTerritoryGetToOneRelated: (...args) => callOperation("appPriceSchedules_baseTerritory_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appPriceSchedules_baseTerritory_getToOneRelated">)),
    AppPriceSchedulesBaseTerritoryGetToOneRelationship: (...args) => callOperation("appPriceSchedules_baseTerritory_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appPriceSchedules_baseTerritory_getToOneRelationship">)),
    AppPriceSchedulesCreateInstance: (...args) => callOperation("appPriceSchedules_createInstance", ...(args as AppStoreFullApiOperationArgs<"appPriceSchedules_createInstance">)),
    AppPriceSchedulesGetInstance: (...args) => callOperation("appPriceSchedules_getInstance", ...(args as AppStoreFullApiOperationArgs<"appPriceSchedules_getInstance">)),
    AppPriceSchedulesManualPricesGetToManyRelated: (...args) => callOperation("appPriceSchedules_manualPrices_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appPriceSchedules_manualPrices_getToManyRelated">)),
    AppPriceSchedulesManualPricesGetToManyRelationship: (...args) => callOperation("appPriceSchedules_manualPrices_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appPriceSchedules_manualPrices_getToManyRelationship">)),
  };
}
