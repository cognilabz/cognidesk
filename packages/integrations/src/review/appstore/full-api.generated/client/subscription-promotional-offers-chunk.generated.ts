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
export const AppStoreFullApiSubscriptionPromotionalOffersOperationKeys = [
  "subscriptionPromotionalOffers_createInstance",
  "subscriptionPromotionalOffers_deleteInstance",
  "subscriptionPromotionalOffers_getInstance",
  "subscriptionPromotionalOffers_prices_getToManyRelated",
  "subscriptionPromotionalOffers_prices_getToManyRelationship",
  "subscriptionPromotionalOffers_updateInstance"
] as const;
export type AppStoreFullApiSubscriptionPromotionalOffersOperationKey = typeof AppStoreFullApiSubscriptionPromotionalOffersOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiSubscriptionPromotionalOffersOperationPathParamMap {
  "subscriptionPromotionalOffers_createInstance": {};
  "subscriptionPromotionalOffers_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptionPromotionalOffers_getInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptionPromotionalOffers_prices_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "subscriptionPromotionalOffers_prices_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptionPromotionalOffers_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiSubscriptionPromotionalOffersOperationRequestMap {
  "subscriptionPromotionalOffers_createInstance": AppStoreFullApiOperationInput<"subscriptionPromotionalOffers_createInstance">;
  "subscriptionPromotionalOffers_deleteInstance": AppStoreFullApiOperationInput<"subscriptionPromotionalOffers_deleteInstance">;
  "subscriptionPromotionalOffers_getInstance": AppStoreFullApiOperationInput<"subscriptionPromotionalOffers_getInstance">;
  "subscriptionPromotionalOffers_prices_getToManyRelated": AppStoreFullApiOperationInput<"subscriptionPromotionalOffers_prices_getToManyRelated">;
  "subscriptionPromotionalOffers_prices_getToManyRelationship": AppStoreFullApiOperationInput<"subscriptionPromotionalOffers_prices_getToManyRelationship">;
  "subscriptionPromotionalOffers_updateInstance": AppStoreFullApiOperationInput<"subscriptionPromotionalOffers_updateInstance">;
}

export interface AppStoreFullApiSubscriptionPromotionalOffersGeneratedClient {
  SubscriptionPromotionalOffersCreateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionPromotionalOffers_createInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionPromotionalOffers_createInstance"]>;
  SubscriptionPromotionalOffersDeleteInstance(...args: AppStoreFullApiOperationArgs<"subscriptionPromotionalOffers_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionPromotionalOffers_deleteInstance"]>;
  SubscriptionPromotionalOffersGetInstance(...args: AppStoreFullApiOperationArgs<"subscriptionPromotionalOffers_getInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionPromotionalOffers_getInstance"]>;
  SubscriptionPromotionalOffersPricesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"subscriptionPromotionalOffers_prices_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptionPromotionalOffers_prices_getToManyRelated"]>;
  SubscriptionPromotionalOffersPricesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"subscriptionPromotionalOffers_prices_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptionPromotionalOffers_prices_getToManyRelationship"]>;
  SubscriptionPromotionalOffersUpdateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionPromotionalOffers_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionPromotionalOffers_updateInstance"]>;
}

export const AppStoreFullApiSubscriptionPromotionalOffersGeneratedFunctionNames = [
  "SubscriptionPromotionalOffersCreateInstance",
  "SubscriptionPromotionalOffersDeleteInstance",
  "SubscriptionPromotionalOffersGetInstance",
  "SubscriptionPromotionalOffersPricesGetToManyRelated",
  "SubscriptionPromotionalOffersPricesGetToManyRelationship",
  "SubscriptionPromotionalOffersUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiSubscriptionPromotionalOffersGeneratedClient)[];

export function createAppStoreFullApiSubscriptionPromotionalOffersGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiSubscriptionPromotionalOffersGeneratedClient {
  return {
    SubscriptionPromotionalOffersCreateInstance: (...args) => callOperation("subscriptionPromotionalOffers_createInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionPromotionalOffers_createInstance">)),
    SubscriptionPromotionalOffersDeleteInstance: (...args) => callOperation("subscriptionPromotionalOffers_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionPromotionalOffers_deleteInstance">)),
    SubscriptionPromotionalOffersGetInstance: (...args) => callOperation("subscriptionPromotionalOffers_getInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionPromotionalOffers_getInstance">)),
    SubscriptionPromotionalOffersPricesGetToManyRelated: (...args) => callOperation("subscriptionPromotionalOffers_prices_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptionPromotionalOffers_prices_getToManyRelated">)),
    SubscriptionPromotionalOffersPricesGetToManyRelationship: (...args) => callOperation("subscriptionPromotionalOffers_prices_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptionPromotionalOffers_prices_getToManyRelationship">)),
    SubscriptionPromotionalOffersUpdateInstance: (...args) => callOperation("subscriptionPromotionalOffers_updateInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionPromotionalOffers_updateInstance">)),
  };
}
