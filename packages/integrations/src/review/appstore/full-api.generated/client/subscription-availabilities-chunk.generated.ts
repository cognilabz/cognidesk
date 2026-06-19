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
export const AppStoreFullApiSubscriptionAvailabilitiesOperationKeys = [
  "subscriptionAvailabilities_availableTerritories_getToManyRelated",
  "subscriptionAvailabilities_availableTerritories_getToManyRelationship",
  "subscriptionAvailabilities_createInstance",
  "subscriptionAvailabilities_getInstance"
] as const;
export type AppStoreFullApiSubscriptionAvailabilitiesOperationKey = typeof AppStoreFullApiSubscriptionAvailabilitiesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiSubscriptionAvailabilitiesOperationPathParamMap {
  "subscriptionAvailabilities_availableTerritories_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "subscriptionAvailabilities_availableTerritories_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptionAvailabilities_createInstance": {};
  "subscriptionAvailabilities_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiSubscriptionAvailabilitiesOperationRequestMap {
  "subscriptionAvailabilities_availableTerritories_getToManyRelated": AppStoreFullApiOperationInput<"subscriptionAvailabilities_availableTerritories_getToManyRelated">;
  "subscriptionAvailabilities_availableTerritories_getToManyRelationship": AppStoreFullApiOperationInput<"subscriptionAvailabilities_availableTerritories_getToManyRelationship">;
  "subscriptionAvailabilities_createInstance": AppStoreFullApiOperationInput<"subscriptionAvailabilities_createInstance">;
  "subscriptionAvailabilities_getInstance": AppStoreFullApiOperationInput<"subscriptionAvailabilities_getInstance">;
}

export interface AppStoreFullApiSubscriptionAvailabilitiesGeneratedClient {
  SubscriptionAvailabilitiesAvailableTerritoriesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"subscriptionAvailabilities_availableTerritories_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptionAvailabilities_availableTerritories_getToManyRelated"]>;
  SubscriptionAvailabilitiesAvailableTerritoriesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"subscriptionAvailabilities_availableTerritories_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptionAvailabilities_availableTerritories_getToManyRelationship"]>;
  SubscriptionAvailabilitiesCreateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionAvailabilities_createInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionAvailabilities_createInstance"]>;
  SubscriptionAvailabilitiesGetInstance(...args: AppStoreFullApiOperationArgs<"subscriptionAvailabilities_getInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionAvailabilities_getInstance"]>;
}

export const AppStoreFullApiSubscriptionAvailabilitiesGeneratedFunctionNames = [
  "SubscriptionAvailabilitiesAvailableTerritoriesGetToManyRelated",
  "SubscriptionAvailabilitiesAvailableTerritoriesGetToManyRelationship",
  "SubscriptionAvailabilitiesCreateInstance",
  "SubscriptionAvailabilitiesGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiSubscriptionAvailabilitiesGeneratedClient)[];

export function createAppStoreFullApiSubscriptionAvailabilitiesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiSubscriptionAvailabilitiesGeneratedClient {
  return {
    SubscriptionAvailabilitiesAvailableTerritoriesGetToManyRelated: (...args) => callOperation("subscriptionAvailabilities_availableTerritories_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptionAvailabilities_availableTerritories_getToManyRelated">)),
    SubscriptionAvailabilitiesAvailableTerritoriesGetToManyRelationship: (...args) => callOperation("subscriptionAvailabilities_availableTerritories_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptionAvailabilities_availableTerritories_getToManyRelationship">)),
    SubscriptionAvailabilitiesCreateInstance: (...args) => callOperation("subscriptionAvailabilities_createInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionAvailabilities_createInstance">)),
    SubscriptionAvailabilitiesGetInstance: (...args) => callOperation("subscriptionAvailabilities_getInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionAvailabilities_getInstance">)),
  };
}
