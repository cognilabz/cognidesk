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
export const AppStoreFullApiSubscriptionPlanAvailabilitiesOperationKeys = [
  "subscriptionPlanAvailabilities_availableTerritories_getToManyRelated",
  "subscriptionPlanAvailabilities_availableTerritories_getToManyRelationship",
  "subscriptionPlanAvailabilities_availableTerritories_replaceToManyRelationship",
  "subscriptionPlanAvailabilities_createInstance",
  "subscriptionPlanAvailabilities_getInstance",
  "subscriptionPlanAvailabilities_updateInstance"
] as const;
export type AppStoreFullApiSubscriptionPlanAvailabilitiesOperationKey = typeof AppStoreFullApiSubscriptionPlanAvailabilitiesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiSubscriptionPlanAvailabilitiesOperationPathParamMap {
  "subscriptionPlanAvailabilities_availableTerritories_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "subscriptionPlanAvailabilities_availableTerritories_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptionPlanAvailabilities_availableTerritories_replaceToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptionPlanAvailabilities_createInstance": {};
  "subscriptionPlanAvailabilities_getInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptionPlanAvailabilities_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiSubscriptionPlanAvailabilitiesOperationRequestMap {
  "subscriptionPlanAvailabilities_availableTerritories_getToManyRelated": AppStoreFullApiOperationInput<"subscriptionPlanAvailabilities_availableTerritories_getToManyRelated">;
  "subscriptionPlanAvailabilities_availableTerritories_getToManyRelationship": AppStoreFullApiOperationInput<"subscriptionPlanAvailabilities_availableTerritories_getToManyRelationship">;
  "subscriptionPlanAvailabilities_availableTerritories_replaceToManyRelationship": AppStoreFullApiOperationInput<"subscriptionPlanAvailabilities_availableTerritories_replaceToManyRelationship">;
  "subscriptionPlanAvailabilities_createInstance": AppStoreFullApiOperationInput<"subscriptionPlanAvailabilities_createInstance">;
  "subscriptionPlanAvailabilities_getInstance": AppStoreFullApiOperationInput<"subscriptionPlanAvailabilities_getInstance">;
  "subscriptionPlanAvailabilities_updateInstance": AppStoreFullApiOperationInput<"subscriptionPlanAvailabilities_updateInstance">;
}

export interface AppStoreFullApiSubscriptionPlanAvailabilitiesGeneratedClient {
  SubscriptionPlanAvailabilitiesAvailableTerritoriesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"subscriptionPlanAvailabilities_availableTerritories_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptionPlanAvailabilities_availableTerritories_getToManyRelated"]>;
  SubscriptionPlanAvailabilitiesAvailableTerritoriesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"subscriptionPlanAvailabilities_availableTerritories_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptionPlanAvailabilities_availableTerritories_getToManyRelationship"]>;
  SubscriptionPlanAvailabilitiesAvailableTerritoriesReplaceToManyRelationship(...args: AppStoreFullApiOperationArgs<"subscriptionPlanAvailabilities_availableTerritories_replaceToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptionPlanAvailabilities_availableTerritories_replaceToManyRelationship"]>;
  SubscriptionPlanAvailabilitiesCreateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionPlanAvailabilities_createInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionPlanAvailabilities_createInstance"]>;
  SubscriptionPlanAvailabilitiesGetInstance(...args: AppStoreFullApiOperationArgs<"subscriptionPlanAvailabilities_getInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionPlanAvailabilities_getInstance"]>;
  SubscriptionPlanAvailabilitiesUpdateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionPlanAvailabilities_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionPlanAvailabilities_updateInstance"]>;
}

export const AppStoreFullApiSubscriptionPlanAvailabilitiesGeneratedFunctionNames = [
  "SubscriptionPlanAvailabilitiesAvailableTerritoriesGetToManyRelated",
  "SubscriptionPlanAvailabilitiesAvailableTerritoriesGetToManyRelationship",
  "SubscriptionPlanAvailabilitiesAvailableTerritoriesReplaceToManyRelationship",
  "SubscriptionPlanAvailabilitiesCreateInstance",
  "SubscriptionPlanAvailabilitiesGetInstance",
  "SubscriptionPlanAvailabilitiesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiSubscriptionPlanAvailabilitiesGeneratedClient)[];

export function createAppStoreFullApiSubscriptionPlanAvailabilitiesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiSubscriptionPlanAvailabilitiesGeneratedClient {
  return {
    SubscriptionPlanAvailabilitiesAvailableTerritoriesGetToManyRelated: (...args) => callOperation("subscriptionPlanAvailabilities_availableTerritories_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptionPlanAvailabilities_availableTerritories_getToManyRelated">)),
    SubscriptionPlanAvailabilitiesAvailableTerritoriesGetToManyRelationship: (...args) => callOperation("subscriptionPlanAvailabilities_availableTerritories_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptionPlanAvailabilities_availableTerritories_getToManyRelationship">)),
    SubscriptionPlanAvailabilitiesAvailableTerritoriesReplaceToManyRelationship: (...args) => callOperation("subscriptionPlanAvailabilities_availableTerritories_replaceToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptionPlanAvailabilities_availableTerritories_replaceToManyRelationship">)),
    SubscriptionPlanAvailabilitiesCreateInstance: (...args) => callOperation("subscriptionPlanAvailabilities_createInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionPlanAvailabilities_createInstance">)),
    SubscriptionPlanAvailabilitiesGetInstance: (...args) => callOperation("subscriptionPlanAvailabilities_getInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionPlanAvailabilities_getInstance">)),
    SubscriptionPlanAvailabilitiesUpdateInstance: (...args) => callOperation("subscriptionPlanAvailabilities_updateInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionPlanAvailabilities_updateInstance">)),
  };
}
