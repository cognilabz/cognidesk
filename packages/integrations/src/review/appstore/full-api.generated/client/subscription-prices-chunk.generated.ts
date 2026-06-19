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
export const AppStoreFullApiSubscriptionPricesOperationKeys = [
  "subscriptionPrices_createInstance",
  "subscriptionPrices_deleteInstance"
] as const;
export type AppStoreFullApiSubscriptionPricesOperationKey = typeof AppStoreFullApiSubscriptionPricesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiSubscriptionPricesOperationPathParamMap {
  "subscriptionPrices_createInstance": {};
  "subscriptionPrices_deleteInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiSubscriptionPricesOperationRequestMap {
  "subscriptionPrices_createInstance": AppStoreFullApiOperationInput<"subscriptionPrices_createInstance">;
  "subscriptionPrices_deleteInstance": AppStoreFullApiOperationInput<"subscriptionPrices_deleteInstance">;
}

export interface AppStoreFullApiSubscriptionPricesGeneratedClient {
  SubscriptionPricesCreateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionPrices_createInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionPrices_createInstance"]>;
  SubscriptionPricesDeleteInstance(...args: AppStoreFullApiOperationArgs<"subscriptionPrices_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionPrices_deleteInstance"]>;
}

export const AppStoreFullApiSubscriptionPricesGeneratedFunctionNames = [
  "SubscriptionPricesCreateInstance",
  "SubscriptionPricesDeleteInstance"
] as const satisfies readonly (keyof AppStoreFullApiSubscriptionPricesGeneratedClient)[];

export function createAppStoreFullApiSubscriptionPricesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiSubscriptionPricesGeneratedClient {
  return {
    SubscriptionPricesCreateInstance: (...args) => callOperation("subscriptionPrices_createInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionPrices_createInstance">)),
    SubscriptionPricesDeleteInstance: (...args) => callOperation("subscriptionPrices_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionPrices_deleteInstance">)),
  };
}
