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
export const AppStoreFullApiSubscriptionGracePeriodsOperationKeys = [
  "subscriptionGracePeriods_getInstance",
  "subscriptionGracePeriods_updateInstance"
] as const;
export type AppStoreFullApiSubscriptionGracePeriodsOperationKey = typeof AppStoreFullApiSubscriptionGracePeriodsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiSubscriptionGracePeriodsOperationPathParamMap {
  "subscriptionGracePeriods_getInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptionGracePeriods_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiSubscriptionGracePeriodsOperationRequestMap {
  "subscriptionGracePeriods_getInstance": AppStoreFullApiOperationInput<"subscriptionGracePeriods_getInstance">;
  "subscriptionGracePeriods_updateInstance": AppStoreFullApiOperationInput<"subscriptionGracePeriods_updateInstance">;
}

export interface AppStoreFullApiSubscriptionGracePeriodsGeneratedClient {
  SubscriptionGracePeriodsGetInstance(...args: AppStoreFullApiOperationArgs<"subscriptionGracePeriods_getInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionGracePeriods_getInstance"]>;
  SubscriptionGracePeriodsUpdateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionGracePeriods_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionGracePeriods_updateInstance"]>;
}

export const AppStoreFullApiSubscriptionGracePeriodsGeneratedFunctionNames = [
  "SubscriptionGracePeriodsGetInstance",
  "SubscriptionGracePeriodsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiSubscriptionGracePeriodsGeneratedClient)[];

export function createAppStoreFullApiSubscriptionGracePeriodsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiSubscriptionGracePeriodsGeneratedClient {
  return {
    SubscriptionGracePeriodsGetInstance: (...args) => callOperation("subscriptionGracePeriods_getInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionGracePeriods_getInstance">)),
    SubscriptionGracePeriodsUpdateInstance: (...args) => callOperation("subscriptionGracePeriods_updateInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionGracePeriods_updateInstance">)),
  };
}
