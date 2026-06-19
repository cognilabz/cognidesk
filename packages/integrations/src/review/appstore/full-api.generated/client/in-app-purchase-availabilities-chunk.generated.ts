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
export const AppStoreFullApiInAppPurchaseAvailabilitiesOperationKeys = [
  "inAppPurchaseAvailabilities_availableTerritories_getToManyRelated",
  "inAppPurchaseAvailabilities_availableTerritories_getToManyRelationship",
  "inAppPurchaseAvailabilities_createInstance",
  "inAppPurchaseAvailabilities_getInstance"
] as const;
export type AppStoreFullApiInAppPurchaseAvailabilitiesOperationKey = typeof AppStoreFullApiInAppPurchaseAvailabilitiesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiInAppPurchaseAvailabilitiesOperationPathParamMap {
  "inAppPurchaseAvailabilities_availableTerritories_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchaseAvailabilities_availableTerritories_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchaseAvailabilities_createInstance": {};
  "inAppPurchaseAvailabilities_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiInAppPurchaseAvailabilitiesOperationRequestMap {
  "inAppPurchaseAvailabilities_availableTerritories_getToManyRelated": AppStoreFullApiOperationInput<"inAppPurchaseAvailabilities_availableTerritories_getToManyRelated">;
  "inAppPurchaseAvailabilities_availableTerritories_getToManyRelationship": AppStoreFullApiOperationInput<"inAppPurchaseAvailabilities_availableTerritories_getToManyRelationship">;
  "inAppPurchaseAvailabilities_createInstance": AppStoreFullApiOperationInput<"inAppPurchaseAvailabilities_createInstance">;
  "inAppPurchaseAvailabilities_getInstance": AppStoreFullApiOperationInput<"inAppPurchaseAvailabilities_getInstance">;
}

export interface AppStoreFullApiInAppPurchaseAvailabilitiesGeneratedClient {
  InAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"inAppPurchaseAvailabilities_availableTerritories_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseAvailabilities_availableTerritories_getToManyRelated"]>;
  InAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"inAppPurchaseAvailabilities_availableTerritories_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseAvailabilities_availableTerritories_getToManyRelationship"]>;
  InAppPurchaseAvailabilitiesCreateInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseAvailabilities_createInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseAvailabilities_createInstance"]>;
  InAppPurchaseAvailabilitiesGetInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseAvailabilities_getInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseAvailabilities_getInstance"]>;
}

export const AppStoreFullApiInAppPurchaseAvailabilitiesGeneratedFunctionNames = [
  "InAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelated",
  "InAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelationship",
  "InAppPurchaseAvailabilitiesCreateInstance",
  "InAppPurchaseAvailabilitiesGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiInAppPurchaseAvailabilitiesGeneratedClient)[];

export function createAppStoreFullApiInAppPurchaseAvailabilitiesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiInAppPurchaseAvailabilitiesGeneratedClient {
  return {
    InAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelated: (...args) => callOperation("inAppPurchaseAvailabilities_availableTerritories_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseAvailabilities_availableTerritories_getToManyRelated">)),
    InAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelationship: (...args) => callOperation("inAppPurchaseAvailabilities_availableTerritories_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseAvailabilities_availableTerritories_getToManyRelationship">)),
    InAppPurchaseAvailabilitiesCreateInstance: (...args) => callOperation("inAppPurchaseAvailabilities_createInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseAvailabilities_createInstance">)),
    InAppPurchaseAvailabilitiesGetInstance: (...args) => callOperation("inAppPurchaseAvailabilities_getInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseAvailabilities_getInstance">)),
  };
}
