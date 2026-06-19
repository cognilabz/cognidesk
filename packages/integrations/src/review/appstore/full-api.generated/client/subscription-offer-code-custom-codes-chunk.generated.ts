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
export const AppStoreFullApiSubscriptionOfferCodeCustomCodesOperationKeys = [
  "subscriptionOfferCodeCustomCodes_createInstance",
  "subscriptionOfferCodeCustomCodes_getInstance",
  "subscriptionOfferCodeCustomCodes_updateInstance"
] as const;
export type AppStoreFullApiSubscriptionOfferCodeCustomCodesOperationKey = typeof AppStoreFullApiSubscriptionOfferCodeCustomCodesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiSubscriptionOfferCodeCustomCodesOperationPathParamMap {
  "subscriptionOfferCodeCustomCodes_createInstance": {};
  "subscriptionOfferCodeCustomCodes_getInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptionOfferCodeCustomCodes_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiSubscriptionOfferCodeCustomCodesOperationRequestMap {
  "subscriptionOfferCodeCustomCodes_createInstance": AppStoreFullApiOperationInput<"subscriptionOfferCodeCustomCodes_createInstance">;
  "subscriptionOfferCodeCustomCodes_getInstance": AppStoreFullApiOperationInput<"subscriptionOfferCodeCustomCodes_getInstance">;
  "subscriptionOfferCodeCustomCodes_updateInstance": AppStoreFullApiOperationInput<"subscriptionOfferCodeCustomCodes_updateInstance">;
}

export interface AppStoreFullApiSubscriptionOfferCodeCustomCodesGeneratedClient {
  SubscriptionOfferCodeCustomCodesCreateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionOfferCodeCustomCodes_createInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionOfferCodeCustomCodes_createInstance"]>;
  SubscriptionOfferCodeCustomCodesGetInstance(...args: AppStoreFullApiOperationArgs<"subscriptionOfferCodeCustomCodes_getInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionOfferCodeCustomCodes_getInstance"]>;
  SubscriptionOfferCodeCustomCodesUpdateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionOfferCodeCustomCodes_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionOfferCodeCustomCodes_updateInstance"]>;
}

export const AppStoreFullApiSubscriptionOfferCodeCustomCodesGeneratedFunctionNames = [
  "SubscriptionOfferCodeCustomCodesCreateInstance",
  "SubscriptionOfferCodeCustomCodesGetInstance",
  "SubscriptionOfferCodeCustomCodesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiSubscriptionOfferCodeCustomCodesGeneratedClient)[];

export function createAppStoreFullApiSubscriptionOfferCodeCustomCodesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiSubscriptionOfferCodeCustomCodesGeneratedClient {
  return {
    SubscriptionOfferCodeCustomCodesCreateInstance: (...args) => callOperation("subscriptionOfferCodeCustomCodes_createInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionOfferCodeCustomCodes_createInstance">)),
    SubscriptionOfferCodeCustomCodesGetInstance: (...args) => callOperation("subscriptionOfferCodeCustomCodes_getInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionOfferCodeCustomCodes_getInstance">)),
    SubscriptionOfferCodeCustomCodesUpdateInstance: (...args) => callOperation("subscriptionOfferCodeCustomCodes_updateInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionOfferCodeCustomCodes_updateInstance">)),
  };
}
