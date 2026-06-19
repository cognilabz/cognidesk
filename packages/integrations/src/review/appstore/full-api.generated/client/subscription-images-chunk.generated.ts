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
export const AppStoreFullApiSubscriptionImagesOperationKeys = [
  "subscriptionImages_createInstance",
  "subscriptionImages_deleteInstance",
  "subscriptionImages_getInstance",
  "subscriptionImages_updateInstance"
] as const;
export type AppStoreFullApiSubscriptionImagesOperationKey = typeof AppStoreFullApiSubscriptionImagesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiSubscriptionImagesOperationPathParamMap {
  "subscriptionImages_createInstance": {};
  "subscriptionImages_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptionImages_getInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptionImages_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiSubscriptionImagesOperationRequestMap {
  "subscriptionImages_createInstance": AppStoreFullApiOperationInput<"subscriptionImages_createInstance">;
  "subscriptionImages_deleteInstance": AppStoreFullApiOperationInput<"subscriptionImages_deleteInstance">;
  "subscriptionImages_getInstance": AppStoreFullApiOperationInput<"subscriptionImages_getInstance">;
  "subscriptionImages_updateInstance": AppStoreFullApiOperationInput<"subscriptionImages_updateInstance">;
}

export interface AppStoreFullApiSubscriptionImagesGeneratedClient {
  SubscriptionImagesCreateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionImages_createInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionImages_createInstance"]>;
  SubscriptionImagesDeleteInstance(...args: AppStoreFullApiOperationArgs<"subscriptionImages_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionImages_deleteInstance"]>;
  SubscriptionImagesGetInstance(...args: AppStoreFullApiOperationArgs<"subscriptionImages_getInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionImages_getInstance"]>;
  SubscriptionImagesUpdateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionImages_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionImages_updateInstance"]>;
}

export const AppStoreFullApiSubscriptionImagesGeneratedFunctionNames = [
  "SubscriptionImagesCreateInstance",
  "SubscriptionImagesDeleteInstance",
  "SubscriptionImagesGetInstance",
  "SubscriptionImagesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiSubscriptionImagesGeneratedClient)[];

export function createAppStoreFullApiSubscriptionImagesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiSubscriptionImagesGeneratedClient {
  return {
    SubscriptionImagesCreateInstance: (...args) => callOperation("subscriptionImages_createInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionImages_createInstance">)),
    SubscriptionImagesDeleteInstance: (...args) => callOperation("subscriptionImages_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionImages_deleteInstance">)),
    SubscriptionImagesGetInstance: (...args) => callOperation("subscriptionImages_getInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionImages_getInstance">)),
    SubscriptionImagesUpdateInstance: (...args) => callOperation("subscriptionImages_updateInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionImages_updateInstance">)),
  };
}
