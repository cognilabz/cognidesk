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
export const AppStoreFullApiSubscriptionLocalizationsOperationKeys = [
  "subscriptionLocalizations_createInstance",
  "subscriptionLocalizations_deleteInstance",
  "subscriptionLocalizations_getInstance",
  "subscriptionLocalizations_updateInstance"
] as const;
export type AppStoreFullApiSubscriptionLocalizationsOperationKey = typeof AppStoreFullApiSubscriptionLocalizationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiSubscriptionLocalizationsOperationPathParamMap {
  "subscriptionLocalizations_createInstance": {};
  "subscriptionLocalizations_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptionLocalizations_getInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptionLocalizations_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiSubscriptionLocalizationsOperationRequestMap {
  "subscriptionLocalizations_createInstance": AppStoreFullApiOperationInput<"subscriptionLocalizations_createInstance">;
  "subscriptionLocalizations_deleteInstance": AppStoreFullApiOperationInput<"subscriptionLocalizations_deleteInstance">;
  "subscriptionLocalizations_getInstance": AppStoreFullApiOperationInput<"subscriptionLocalizations_getInstance">;
  "subscriptionLocalizations_updateInstance": AppStoreFullApiOperationInput<"subscriptionLocalizations_updateInstance">;
}

export interface AppStoreFullApiSubscriptionLocalizationsGeneratedClient {
  SubscriptionLocalizationsCreateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionLocalizations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionLocalizations_createInstance"]>;
  SubscriptionLocalizationsDeleteInstance(...args: AppStoreFullApiOperationArgs<"subscriptionLocalizations_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionLocalizations_deleteInstance"]>;
  SubscriptionLocalizationsGetInstance(...args: AppStoreFullApiOperationArgs<"subscriptionLocalizations_getInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionLocalizations_getInstance"]>;
  SubscriptionLocalizationsUpdateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionLocalizations_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionLocalizations_updateInstance"]>;
}

export const AppStoreFullApiSubscriptionLocalizationsGeneratedFunctionNames = [
  "SubscriptionLocalizationsCreateInstance",
  "SubscriptionLocalizationsDeleteInstance",
  "SubscriptionLocalizationsGetInstance",
  "SubscriptionLocalizationsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiSubscriptionLocalizationsGeneratedClient)[];

export function createAppStoreFullApiSubscriptionLocalizationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiSubscriptionLocalizationsGeneratedClient {
  return {
    SubscriptionLocalizationsCreateInstance: (...args) => callOperation("subscriptionLocalizations_createInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionLocalizations_createInstance">)),
    SubscriptionLocalizationsDeleteInstance: (...args) => callOperation("subscriptionLocalizations_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionLocalizations_deleteInstance">)),
    SubscriptionLocalizationsGetInstance: (...args) => callOperation("subscriptionLocalizations_getInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionLocalizations_getInstance">)),
    SubscriptionLocalizationsUpdateInstance: (...args) => callOperation("subscriptionLocalizations_updateInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionLocalizations_updateInstance">)),
  };
}
