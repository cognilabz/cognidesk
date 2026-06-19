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
export const AppStoreFullApiSubscriptionOfferCodeOneTimeUseCodesOperationKeys = [
  "subscriptionOfferCodeOneTimeUseCodes_createInstance",
  "subscriptionOfferCodeOneTimeUseCodes_getInstance",
  "subscriptionOfferCodeOneTimeUseCodes_updateInstance",
  "subscriptionOfferCodeOneTimeUseCodes_values_getToOneRelated"
] as const;
export type AppStoreFullApiSubscriptionOfferCodeOneTimeUseCodesOperationKey = typeof AppStoreFullApiSubscriptionOfferCodeOneTimeUseCodesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiSubscriptionOfferCodeOneTimeUseCodesOperationPathParamMap {
  "subscriptionOfferCodeOneTimeUseCodes_createInstance": {};
  "subscriptionOfferCodeOneTimeUseCodes_getInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptionOfferCodeOneTimeUseCodes_updateInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptionOfferCodeOneTimeUseCodes_values_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiSubscriptionOfferCodeOneTimeUseCodesOperationRequestMap {
  "subscriptionOfferCodeOneTimeUseCodes_createInstance": AppStoreFullApiOperationInput<"subscriptionOfferCodeOneTimeUseCodes_createInstance">;
  "subscriptionOfferCodeOneTimeUseCodes_getInstance": AppStoreFullApiOperationInput<"subscriptionOfferCodeOneTimeUseCodes_getInstance">;
  "subscriptionOfferCodeOneTimeUseCodes_updateInstance": AppStoreFullApiOperationInput<"subscriptionOfferCodeOneTimeUseCodes_updateInstance">;
  "subscriptionOfferCodeOneTimeUseCodes_values_getToOneRelated": AppStoreFullApiOperationInput<"subscriptionOfferCodeOneTimeUseCodes_values_getToOneRelated">;
}

export interface AppStoreFullApiSubscriptionOfferCodeOneTimeUseCodesGeneratedClient {
  SubscriptionOfferCodeOneTimeUseCodesCreateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionOfferCodeOneTimeUseCodes_createInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionOfferCodeOneTimeUseCodes_createInstance"]>;
  SubscriptionOfferCodeOneTimeUseCodesGetInstance(...args: AppStoreFullApiOperationArgs<"subscriptionOfferCodeOneTimeUseCodes_getInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionOfferCodeOneTimeUseCodes_getInstance"]>;
  SubscriptionOfferCodeOneTimeUseCodesUpdateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionOfferCodeOneTimeUseCodes_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionOfferCodeOneTimeUseCodes_updateInstance"]>;
  SubscriptionOfferCodeOneTimeUseCodesValuesGetToOneRelated(...args: AppStoreFullApiOperationArgs<"subscriptionOfferCodeOneTimeUseCodes_values_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptionOfferCodeOneTimeUseCodes_values_getToOneRelated"]>;
}

export const AppStoreFullApiSubscriptionOfferCodeOneTimeUseCodesGeneratedFunctionNames = [
  "SubscriptionOfferCodeOneTimeUseCodesCreateInstance",
  "SubscriptionOfferCodeOneTimeUseCodesGetInstance",
  "SubscriptionOfferCodeOneTimeUseCodesUpdateInstance",
  "SubscriptionOfferCodeOneTimeUseCodesValuesGetToOneRelated"
] as const satisfies readonly (keyof AppStoreFullApiSubscriptionOfferCodeOneTimeUseCodesGeneratedClient)[];

export function createAppStoreFullApiSubscriptionOfferCodeOneTimeUseCodesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiSubscriptionOfferCodeOneTimeUseCodesGeneratedClient {
  return {
    SubscriptionOfferCodeOneTimeUseCodesCreateInstance: (...args) => callOperation("subscriptionOfferCodeOneTimeUseCodes_createInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionOfferCodeOneTimeUseCodes_createInstance">)),
    SubscriptionOfferCodeOneTimeUseCodesGetInstance: (...args) => callOperation("subscriptionOfferCodeOneTimeUseCodes_getInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionOfferCodeOneTimeUseCodes_getInstance">)),
    SubscriptionOfferCodeOneTimeUseCodesUpdateInstance: (...args) => callOperation("subscriptionOfferCodeOneTimeUseCodes_updateInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionOfferCodeOneTimeUseCodes_updateInstance">)),
    SubscriptionOfferCodeOneTimeUseCodesValuesGetToOneRelated: (...args) => callOperation("subscriptionOfferCodeOneTimeUseCodes_values_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptionOfferCodeOneTimeUseCodes_values_getToOneRelated">)),
  };
}
