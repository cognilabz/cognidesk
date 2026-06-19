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
export const AppStoreFullApiSubscriptionPricePointsOperationKeys = [
  "subscriptionPricePoints_equalizations_getToManyRelated",
  "subscriptionPricePoints_equalizations_getToManyRelationship",
  "subscriptionPricePoints_getInstance"
] as const;
export type AppStoreFullApiSubscriptionPricePointsOperationKey = typeof AppStoreFullApiSubscriptionPricePointsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiSubscriptionPricePointsOperationPathParamMap {
  "subscriptionPricePoints_equalizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "subscriptionPricePoints_equalizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptionPricePoints_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiSubscriptionPricePointsOperationRequestMap {
  "subscriptionPricePoints_equalizations_getToManyRelated": AppStoreFullApiOperationInput<"subscriptionPricePoints_equalizations_getToManyRelated">;
  "subscriptionPricePoints_equalizations_getToManyRelationship": AppStoreFullApiOperationInput<"subscriptionPricePoints_equalizations_getToManyRelationship">;
  "subscriptionPricePoints_getInstance": AppStoreFullApiOperationInput<"subscriptionPricePoints_getInstance">;
}

export interface AppStoreFullApiSubscriptionPricePointsGeneratedClient {
  SubscriptionPricePointsEqualizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"subscriptionPricePoints_equalizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptionPricePoints_equalizations_getToManyRelated"]>;
  SubscriptionPricePointsEqualizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"subscriptionPricePoints_equalizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptionPricePoints_equalizations_getToManyRelationship"]>;
  SubscriptionPricePointsGetInstance(...args: AppStoreFullApiOperationArgs<"subscriptionPricePoints_getInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionPricePoints_getInstance"]>;
}

export const AppStoreFullApiSubscriptionPricePointsGeneratedFunctionNames = [
  "SubscriptionPricePointsEqualizationsGetToManyRelated",
  "SubscriptionPricePointsEqualizationsGetToManyRelationship",
  "SubscriptionPricePointsGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiSubscriptionPricePointsGeneratedClient)[];

export function createAppStoreFullApiSubscriptionPricePointsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiSubscriptionPricePointsGeneratedClient {
  return {
    SubscriptionPricePointsEqualizationsGetToManyRelated: (...args) => callOperation("subscriptionPricePoints_equalizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptionPricePoints_equalizations_getToManyRelated">)),
    SubscriptionPricePointsEqualizationsGetToManyRelationship: (...args) => callOperation("subscriptionPricePoints_equalizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptionPricePoints_equalizations_getToManyRelationship">)),
    SubscriptionPricePointsGetInstance: (...args) => callOperation("subscriptionPricePoints_getInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionPricePoints_getInstance">)),
  };
}
