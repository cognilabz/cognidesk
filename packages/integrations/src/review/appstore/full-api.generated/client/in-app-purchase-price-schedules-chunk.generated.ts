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
export const AppStoreFullApiInAppPurchasePriceSchedulesOperationKeys = [
  "inAppPurchasePriceSchedules_automaticPrices_getToManyRelated",
  "inAppPurchasePriceSchedules_automaticPrices_getToManyRelationship",
  "inAppPurchasePriceSchedules_baseTerritory_getToOneRelated",
  "inAppPurchasePriceSchedules_baseTerritory_getToOneRelationship",
  "inAppPurchasePriceSchedules_createInstance",
  "inAppPurchasePriceSchedules_getInstance",
  "inAppPurchasePriceSchedules_manualPrices_getToManyRelated",
  "inAppPurchasePriceSchedules_manualPrices_getToManyRelationship"
] as const;
export type AppStoreFullApiInAppPurchasePriceSchedulesOperationKey = typeof AppStoreFullApiInAppPurchasePriceSchedulesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiInAppPurchasePriceSchedulesOperationPathParamMap {
  "inAppPurchasePriceSchedules_automaticPrices_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasePriceSchedules_automaticPrices_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasePriceSchedules_baseTerritory_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasePriceSchedules_baseTerritory_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasePriceSchedules_createInstance": {};
  "inAppPurchasePriceSchedules_getInstance": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasePriceSchedules_manualPrices_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasePriceSchedules_manualPrices_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiInAppPurchasePriceSchedulesOperationRequestMap {
  "inAppPurchasePriceSchedules_automaticPrices_getToManyRelated": AppStoreFullApiOperationInput<"inAppPurchasePriceSchedules_automaticPrices_getToManyRelated">;
  "inAppPurchasePriceSchedules_automaticPrices_getToManyRelationship": AppStoreFullApiOperationInput<"inAppPurchasePriceSchedules_automaticPrices_getToManyRelationship">;
  "inAppPurchasePriceSchedules_baseTerritory_getToOneRelated": AppStoreFullApiOperationInput<"inAppPurchasePriceSchedules_baseTerritory_getToOneRelated">;
  "inAppPurchasePriceSchedules_baseTerritory_getToOneRelationship": AppStoreFullApiOperationInput<"inAppPurchasePriceSchedules_baseTerritory_getToOneRelationship">;
  "inAppPurchasePriceSchedules_createInstance": AppStoreFullApiOperationInput<"inAppPurchasePriceSchedules_createInstance">;
  "inAppPurchasePriceSchedules_getInstance": AppStoreFullApiOperationInput<"inAppPurchasePriceSchedules_getInstance">;
  "inAppPurchasePriceSchedules_manualPrices_getToManyRelated": AppStoreFullApiOperationInput<"inAppPurchasePriceSchedules_manualPrices_getToManyRelated">;
  "inAppPurchasePriceSchedules_manualPrices_getToManyRelationship": AppStoreFullApiOperationInput<"inAppPurchasePriceSchedules_manualPrices_getToManyRelationship">;
}

export interface AppStoreFullApiInAppPurchasePriceSchedulesGeneratedClient {
  InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"inAppPurchasePriceSchedules_automaticPrices_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasePriceSchedules_automaticPrices_getToManyRelated"]>;
  InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"inAppPurchasePriceSchedules_automaticPrices_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasePriceSchedules_automaticPrices_getToManyRelationship"]>;
  InAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated(...args: AppStoreFullApiOperationArgs<"inAppPurchasePriceSchedules_baseTerritory_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasePriceSchedules_baseTerritory_getToOneRelated"]>;
  InAppPurchasePriceSchedulesBaseTerritoryGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"inAppPurchasePriceSchedules_baseTerritory_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasePriceSchedules_baseTerritory_getToOneRelationship"]>;
  InAppPurchasePriceSchedulesCreateInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchasePriceSchedules_createInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasePriceSchedules_createInstance"]>;
  InAppPurchasePriceSchedulesGetInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchasePriceSchedules_getInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasePriceSchedules_getInstance"]>;
  InAppPurchasePriceSchedulesManualPricesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"inAppPurchasePriceSchedules_manualPrices_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasePriceSchedules_manualPrices_getToManyRelated"]>;
  InAppPurchasePriceSchedulesManualPricesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"inAppPurchasePriceSchedules_manualPrices_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasePriceSchedules_manualPrices_getToManyRelationship"]>;
}

export const AppStoreFullApiInAppPurchasePriceSchedulesGeneratedFunctionNames = [
  "InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated",
  "InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelationship",
  "InAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated",
  "InAppPurchasePriceSchedulesBaseTerritoryGetToOneRelationship",
  "InAppPurchasePriceSchedulesCreateInstance",
  "InAppPurchasePriceSchedulesGetInstance",
  "InAppPurchasePriceSchedulesManualPricesGetToManyRelated",
  "InAppPurchasePriceSchedulesManualPricesGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiInAppPurchasePriceSchedulesGeneratedClient)[];

export function createAppStoreFullApiInAppPurchasePriceSchedulesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiInAppPurchasePriceSchedulesGeneratedClient {
  return {
    InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated: (...args) => callOperation("inAppPurchasePriceSchedules_automaticPrices_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasePriceSchedules_automaticPrices_getToManyRelated">)),
    InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelationship: (...args) => callOperation("inAppPurchasePriceSchedules_automaticPrices_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasePriceSchedules_automaticPrices_getToManyRelationship">)),
    InAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated: (...args) => callOperation("inAppPurchasePriceSchedules_baseTerritory_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasePriceSchedules_baseTerritory_getToOneRelated">)),
    InAppPurchasePriceSchedulesBaseTerritoryGetToOneRelationship: (...args) => callOperation("inAppPurchasePriceSchedules_baseTerritory_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasePriceSchedules_baseTerritory_getToOneRelationship">)),
    InAppPurchasePriceSchedulesCreateInstance: (...args) => callOperation("inAppPurchasePriceSchedules_createInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasePriceSchedules_createInstance">)),
    InAppPurchasePriceSchedulesGetInstance: (...args) => callOperation("inAppPurchasePriceSchedules_getInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasePriceSchedules_getInstance">)),
    InAppPurchasePriceSchedulesManualPricesGetToManyRelated: (...args) => callOperation("inAppPurchasePriceSchedules_manualPrices_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasePriceSchedules_manualPrices_getToManyRelated">)),
    InAppPurchasePriceSchedulesManualPricesGetToManyRelationship: (...args) => callOperation("inAppPurchasePriceSchedules_manualPrices_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasePriceSchedules_manualPrices_getToManyRelationship">)),
  };
}
