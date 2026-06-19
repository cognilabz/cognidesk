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
export const AppStoreFullApiSubscriptionGroupSubmissionsOperationKeys = [
  "subscriptionGroupSubmissions_createInstance"
] as const;
export type AppStoreFullApiSubscriptionGroupSubmissionsOperationKey = typeof AppStoreFullApiSubscriptionGroupSubmissionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiSubscriptionGroupSubmissionsOperationPathParamMap {
  "subscriptionGroupSubmissions_createInstance": {};
}

export interface AppStoreFullApiSubscriptionGroupSubmissionsOperationRequestMap {
  "subscriptionGroupSubmissions_createInstance": AppStoreFullApiOperationInput<"subscriptionGroupSubmissions_createInstance">;
}

export interface AppStoreFullApiSubscriptionGroupSubmissionsGeneratedClient {
  SubscriptionGroupSubmissionsCreateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionGroupSubmissions_createInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionGroupSubmissions_createInstance"]>;
}

export const AppStoreFullApiSubscriptionGroupSubmissionsGeneratedFunctionNames = [
  "SubscriptionGroupSubmissionsCreateInstance"
] as const satisfies readonly (keyof AppStoreFullApiSubscriptionGroupSubmissionsGeneratedClient)[];

export function createAppStoreFullApiSubscriptionGroupSubmissionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiSubscriptionGroupSubmissionsGeneratedClient {
  return {
    SubscriptionGroupSubmissionsCreateInstance: (...args) => callOperation("subscriptionGroupSubmissions_createInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionGroupSubmissions_createInstance">)),
  };
}
