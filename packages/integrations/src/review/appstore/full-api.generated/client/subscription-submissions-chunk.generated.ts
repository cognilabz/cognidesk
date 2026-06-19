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
export const AppStoreFullApiSubscriptionSubmissionsOperationKeys = [
  "subscriptionSubmissions_createInstance"
] as const;
export type AppStoreFullApiSubscriptionSubmissionsOperationKey = typeof AppStoreFullApiSubscriptionSubmissionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiSubscriptionSubmissionsOperationPathParamMap {
  "subscriptionSubmissions_createInstance": {};
}

export interface AppStoreFullApiSubscriptionSubmissionsOperationRequestMap {
  "subscriptionSubmissions_createInstance": AppStoreFullApiOperationInput<"subscriptionSubmissions_createInstance">;
}

export interface AppStoreFullApiSubscriptionSubmissionsGeneratedClient {
  SubscriptionSubmissionsCreateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionSubmissions_createInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionSubmissions_createInstance"]>;
}

export const AppStoreFullApiSubscriptionSubmissionsGeneratedFunctionNames = [
  "SubscriptionSubmissionsCreateInstance"
] as const satisfies readonly (keyof AppStoreFullApiSubscriptionSubmissionsGeneratedClient)[];

export function createAppStoreFullApiSubscriptionSubmissionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiSubscriptionSubmissionsGeneratedClient {
  return {
    SubscriptionSubmissionsCreateInstance: (...args) => callOperation("subscriptionSubmissions_createInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionSubmissions_createInstance">)),
  };
}
