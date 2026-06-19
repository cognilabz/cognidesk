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
export const AppStoreFullApiSubscriptionOfferCodesOperationKeys = [
  "subscriptionOfferCodes_createInstance",
  "subscriptionOfferCodes_customCodes_getToManyRelated",
  "subscriptionOfferCodes_customCodes_getToManyRelationship",
  "subscriptionOfferCodes_getInstance",
  "subscriptionOfferCodes_oneTimeUseCodes_getToManyRelated",
  "subscriptionOfferCodes_oneTimeUseCodes_getToManyRelationship",
  "subscriptionOfferCodes_prices_getToManyRelated",
  "subscriptionOfferCodes_prices_getToManyRelationship",
  "subscriptionOfferCodes_updateInstance"
] as const;
export type AppStoreFullApiSubscriptionOfferCodesOperationKey = typeof AppStoreFullApiSubscriptionOfferCodesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiSubscriptionOfferCodesOperationPathParamMap {
  "subscriptionOfferCodes_createInstance": {};
  "subscriptionOfferCodes_customCodes_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "subscriptionOfferCodes_customCodes_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptionOfferCodes_getInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptionOfferCodes_oneTimeUseCodes_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "subscriptionOfferCodes_oneTimeUseCodes_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptionOfferCodes_prices_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "subscriptionOfferCodes_prices_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptionOfferCodes_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiSubscriptionOfferCodesOperationRequestMap {
  "subscriptionOfferCodes_createInstance": AppStoreFullApiOperationInput<"subscriptionOfferCodes_createInstance">;
  "subscriptionOfferCodes_customCodes_getToManyRelated": AppStoreFullApiOperationInput<"subscriptionOfferCodes_customCodes_getToManyRelated">;
  "subscriptionOfferCodes_customCodes_getToManyRelationship": AppStoreFullApiOperationInput<"subscriptionOfferCodes_customCodes_getToManyRelationship">;
  "subscriptionOfferCodes_getInstance": AppStoreFullApiOperationInput<"subscriptionOfferCodes_getInstance">;
  "subscriptionOfferCodes_oneTimeUseCodes_getToManyRelated": AppStoreFullApiOperationInput<"subscriptionOfferCodes_oneTimeUseCodes_getToManyRelated">;
  "subscriptionOfferCodes_oneTimeUseCodes_getToManyRelationship": AppStoreFullApiOperationInput<"subscriptionOfferCodes_oneTimeUseCodes_getToManyRelationship">;
  "subscriptionOfferCodes_prices_getToManyRelated": AppStoreFullApiOperationInput<"subscriptionOfferCodes_prices_getToManyRelated">;
  "subscriptionOfferCodes_prices_getToManyRelationship": AppStoreFullApiOperationInput<"subscriptionOfferCodes_prices_getToManyRelationship">;
  "subscriptionOfferCodes_updateInstance": AppStoreFullApiOperationInput<"subscriptionOfferCodes_updateInstance">;
}

export interface AppStoreFullApiSubscriptionOfferCodesGeneratedClient {
  SubscriptionOfferCodesCreateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionOfferCodes_createInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionOfferCodes_createInstance"]>;
  SubscriptionOfferCodesCustomCodesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"subscriptionOfferCodes_customCodes_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptionOfferCodes_customCodes_getToManyRelated"]>;
  SubscriptionOfferCodesCustomCodesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"subscriptionOfferCodes_customCodes_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptionOfferCodes_customCodes_getToManyRelationship"]>;
  SubscriptionOfferCodesGetInstance(...args: AppStoreFullApiOperationArgs<"subscriptionOfferCodes_getInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionOfferCodes_getInstance"]>;
  SubscriptionOfferCodesOneTimeUseCodesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"subscriptionOfferCodes_oneTimeUseCodes_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptionOfferCodes_oneTimeUseCodes_getToManyRelated"]>;
  SubscriptionOfferCodesOneTimeUseCodesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"subscriptionOfferCodes_oneTimeUseCodes_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptionOfferCodes_oneTimeUseCodes_getToManyRelationship"]>;
  SubscriptionOfferCodesPricesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"subscriptionOfferCodes_prices_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptionOfferCodes_prices_getToManyRelated"]>;
  SubscriptionOfferCodesPricesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"subscriptionOfferCodes_prices_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptionOfferCodes_prices_getToManyRelationship"]>;
  SubscriptionOfferCodesUpdateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionOfferCodes_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionOfferCodes_updateInstance"]>;
}

export const AppStoreFullApiSubscriptionOfferCodesGeneratedFunctionNames = [
  "SubscriptionOfferCodesCreateInstance",
  "SubscriptionOfferCodesCustomCodesGetToManyRelated",
  "SubscriptionOfferCodesCustomCodesGetToManyRelationship",
  "SubscriptionOfferCodesGetInstance",
  "SubscriptionOfferCodesOneTimeUseCodesGetToManyRelated",
  "SubscriptionOfferCodesOneTimeUseCodesGetToManyRelationship",
  "SubscriptionOfferCodesPricesGetToManyRelated",
  "SubscriptionOfferCodesPricesGetToManyRelationship",
  "SubscriptionOfferCodesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiSubscriptionOfferCodesGeneratedClient)[];

export function createAppStoreFullApiSubscriptionOfferCodesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiSubscriptionOfferCodesGeneratedClient {
  return {
    SubscriptionOfferCodesCreateInstance: (...args) => callOperation("subscriptionOfferCodes_createInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionOfferCodes_createInstance">)),
    SubscriptionOfferCodesCustomCodesGetToManyRelated: (...args) => callOperation("subscriptionOfferCodes_customCodes_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptionOfferCodes_customCodes_getToManyRelated">)),
    SubscriptionOfferCodesCustomCodesGetToManyRelationship: (...args) => callOperation("subscriptionOfferCodes_customCodes_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptionOfferCodes_customCodes_getToManyRelationship">)),
    SubscriptionOfferCodesGetInstance: (...args) => callOperation("subscriptionOfferCodes_getInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionOfferCodes_getInstance">)),
    SubscriptionOfferCodesOneTimeUseCodesGetToManyRelated: (...args) => callOperation("subscriptionOfferCodes_oneTimeUseCodes_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptionOfferCodes_oneTimeUseCodes_getToManyRelated">)),
    SubscriptionOfferCodesOneTimeUseCodesGetToManyRelationship: (...args) => callOperation("subscriptionOfferCodes_oneTimeUseCodes_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptionOfferCodes_oneTimeUseCodes_getToManyRelationship">)),
    SubscriptionOfferCodesPricesGetToManyRelated: (...args) => callOperation("subscriptionOfferCodes_prices_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptionOfferCodes_prices_getToManyRelated">)),
    SubscriptionOfferCodesPricesGetToManyRelationship: (...args) => callOperation("subscriptionOfferCodes_prices_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptionOfferCodes_prices_getToManyRelationship">)),
    SubscriptionOfferCodesUpdateInstance: (...args) => callOperation("subscriptionOfferCodes_updateInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionOfferCodes_updateInstance">)),
  };
}
