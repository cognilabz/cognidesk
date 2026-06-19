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
export const AppStoreFullApiSubscriptionGroupLocalizationsOperationKeys = [
  "subscriptionGroupLocalizations_createInstance",
  "subscriptionGroupLocalizations_deleteInstance",
  "subscriptionGroupLocalizations_getInstance",
  "subscriptionGroupLocalizations_updateInstance"
] as const;
export type AppStoreFullApiSubscriptionGroupLocalizationsOperationKey = typeof AppStoreFullApiSubscriptionGroupLocalizationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiSubscriptionGroupLocalizationsOperationPathParamMap {
  "subscriptionGroupLocalizations_createInstance": {};
  "subscriptionGroupLocalizations_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptionGroupLocalizations_getInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptionGroupLocalizations_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiSubscriptionGroupLocalizationsOperationRequestMap {
  "subscriptionGroupLocalizations_createInstance": AppStoreFullApiOperationInput<"subscriptionGroupLocalizations_createInstance">;
  "subscriptionGroupLocalizations_deleteInstance": AppStoreFullApiOperationInput<"subscriptionGroupLocalizations_deleteInstance">;
  "subscriptionGroupLocalizations_getInstance": AppStoreFullApiOperationInput<"subscriptionGroupLocalizations_getInstance">;
  "subscriptionGroupLocalizations_updateInstance": AppStoreFullApiOperationInput<"subscriptionGroupLocalizations_updateInstance">;
}

export interface AppStoreFullApiSubscriptionGroupLocalizationsGeneratedClient {
  SubscriptionGroupLocalizationsCreateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionGroupLocalizations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionGroupLocalizations_createInstance"]>;
  SubscriptionGroupLocalizationsDeleteInstance(...args: AppStoreFullApiOperationArgs<"subscriptionGroupLocalizations_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionGroupLocalizations_deleteInstance"]>;
  SubscriptionGroupLocalizationsGetInstance(...args: AppStoreFullApiOperationArgs<"subscriptionGroupLocalizations_getInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionGroupLocalizations_getInstance"]>;
  SubscriptionGroupLocalizationsUpdateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionGroupLocalizations_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionGroupLocalizations_updateInstance"]>;
}

export const AppStoreFullApiSubscriptionGroupLocalizationsGeneratedFunctionNames = [
  "SubscriptionGroupLocalizationsCreateInstance",
  "SubscriptionGroupLocalizationsDeleteInstance",
  "SubscriptionGroupLocalizationsGetInstance",
  "SubscriptionGroupLocalizationsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiSubscriptionGroupLocalizationsGeneratedClient)[];

export function createAppStoreFullApiSubscriptionGroupLocalizationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiSubscriptionGroupLocalizationsGeneratedClient {
  return {
    SubscriptionGroupLocalizationsCreateInstance: (...args) => callOperation("subscriptionGroupLocalizations_createInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionGroupLocalizations_createInstance">)),
    SubscriptionGroupLocalizationsDeleteInstance: (...args) => callOperation("subscriptionGroupLocalizations_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionGroupLocalizations_deleteInstance">)),
    SubscriptionGroupLocalizationsGetInstance: (...args) => callOperation("subscriptionGroupLocalizations_getInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionGroupLocalizations_getInstance">)),
    SubscriptionGroupLocalizationsUpdateInstance: (...args) => callOperation("subscriptionGroupLocalizations_updateInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionGroupLocalizations_updateInstance">)),
  };
}
