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
export const AppStoreFullApiSubscriptionIntroductoryOffersOperationKeys = [
  "subscriptionIntroductoryOffers_createInstance",
  "subscriptionIntroductoryOffers_deleteInstance",
  "subscriptionIntroductoryOffers_updateInstance"
] as const;
export type AppStoreFullApiSubscriptionIntroductoryOffersOperationKey = typeof AppStoreFullApiSubscriptionIntroductoryOffersOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiSubscriptionIntroductoryOffersOperationPathParamMap {
  "subscriptionIntroductoryOffers_createInstance": {};
  "subscriptionIntroductoryOffers_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptionIntroductoryOffers_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiSubscriptionIntroductoryOffersOperationRequestMap {
  "subscriptionIntroductoryOffers_createInstance": AppStoreFullApiOperationInput<"subscriptionIntroductoryOffers_createInstance">;
  "subscriptionIntroductoryOffers_deleteInstance": AppStoreFullApiOperationInput<"subscriptionIntroductoryOffers_deleteInstance">;
  "subscriptionIntroductoryOffers_updateInstance": AppStoreFullApiOperationInput<"subscriptionIntroductoryOffers_updateInstance">;
}

export interface AppStoreFullApiSubscriptionIntroductoryOffersGeneratedClient {
  SubscriptionIntroductoryOffersCreateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionIntroductoryOffers_createInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionIntroductoryOffers_createInstance"]>;
  SubscriptionIntroductoryOffersDeleteInstance(...args: AppStoreFullApiOperationArgs<"subscriptionIntroductoryOffers_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionIntroductoryOffers_deleteInstance"]>;
  SubscriptionIntroductoryOffersUpdateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionIntroductoryOffers_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionIntroductoryOffers_updateInstance"]>;
}

export const AppStoreFullApiSubscriptionIntroductoryOffersGeneratedFunctionNames = [
  "SubscriptionIntroductoryOffersCreateInstance",
  "SubscriptionIntroductoryOffersDeleteInstance",
  "SubscriptionIntroductoryOffersUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiSubscriptionIntroductoryOffersGeneratedClient)[];

export function createAppStoreFullApiSubscriptionIntroductoryOffersGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiSubscriptionIntroductoryOffersGeneratedClient {
  return {
    SubscriptionIntroductoryOffersCreateInstance: (...args) => callOperation("subscriptionIntroductoryOffers_createInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionIntroductoryOffers_createInstance">)),
    SubscriptionIntroductoryOffersDeleteInstance: (...args) => callOperation("subscriptionIntroductoryOffers_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionIntroductoryOffers_deleteInstance">)),
    SubscriptionIntroductoryOffersUpdateInstance: (...args) => callOperation("subscriptionIntroductoryOffers_updateInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionIntroductoryOffers_updateInstance">)),
  };
}
