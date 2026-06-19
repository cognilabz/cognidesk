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
export const AppStoreFullApiSubscriptionAppStoreReviewScreenshotsOperationKeys = [
  "subscriptionAppStoreReviewScreenshots_createInstance",
  "subscriptionAppStoreReviewScreenshots_deleteInstance",
  "subscriptionAppStoreReviewScreenshots_getInstance",
  "subscriptionAppStoreReviewScreenshots_updateInstance"
] as const;
export type AppStoreFullApiSubscriptionAppStoreReviewScreenshotsOperationKey = typeof AppStoreFullApiSubscriptionAppStoreReviewScreenshotsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiSubscriptionAppStoreReviewScreenshotsOperationPathParamMap {
  "subscriptionAppStoreReviewScreenshots_createInstance": {};
  "subscriptionAppStoreReviewScreenshots_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptionAppStoreReviewScreenshots_getInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptionAppStoreReviewScreenshots_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiSubscriptionAppStoreReviewScreenshotsOperationRequestMap {
  "subscriptionAppStoreReviewScreenshots_createInstance": AppStoreFullApiOperationInput<"subscriptionAppStoreReviewScreenshots_createInstance">;
  "subscriptionAppStoreReviewScreenshots_deleteInstance": AppStoreFullApiOperationInput<"subscriptionAppStoreReviewScreenshots_deleteInstance">;
  "subscriptionAppStoreReviewScreenshots_getInstance": AppStoreFullApiOperationInput<"subscriptionAppStoreReviewScreenshots_getInstance">;
  "subscriptionAppStoreReviewScreenshots_updateInstance": AppStoreFullApiOperationInput<"subscriptionAppStoreReviewScreenshots_updateInstance">;
}

export interface AppStoreFullApiSubscriptionAppStoreReviewScreenshotsGeneratedClient {
  SubscriptionAppStoreReviewScreenshotsCreateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionAppStoreReviewScreenshots_createInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionAppStoreReviewScreenshots_createInstance"]>;
  SubscriptionAppStoreReviewScreenshotsDeleteInstance(...args: AppStoreFullApiOperationArgs<"subscriptionAppStoreReviewScreenshots_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionAppStoreReviewScreenshots_deleteInstance"]>;
  SubscriptionAppStoreReviewScreenshotsGetInstance(...args: AppStoreFullApiOperationArgs<"subscriptionAppStoreReviewScreenshots_getInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionAppStoreReviewScreenshots_getInstance"]>;
  SubscriptionAppStoreReviewScreenshotsUpdateInstance(...args: AppStoreFullApiOperationArgs<"subscriptionAppStoreReviewScreenshots_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptionAppStoreReviewScreenshots_updateInstance"]>;
}

export const AppStoreFullApiSubscriptionAppStoreReviewScreenshotsGeneratedFunctionNames = [
  "SubscriptionAppStoreReviewScreenshotsCreateInstance",
  "SubscriptionAppStoreReviewScreenshotsDeleteInstance",
  "SubscriptionAppStoreReviewScreenshotsGetInstance",
  "SubscriptionAppStoreReviewScreenshotsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiSubscriptionAppStoreReviewScreenshotsGeneratedClient)[];

export function createAppStoreFullApiSubscriptionAppStoreReviewScreenshotsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiSubscriptionAppStoreReviewScreenshotsGeneratedClient {
  return {
    SubscriptionAppStoreReviewScreenshotsCreateInstance: (...args) => callOperation("subscriptionAppStoreReviewScreenshots_createInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionAppStoreReviewScreenshots_createInstance">)),
    SubscriptionAppStoreReviewScreenshotsDeleteInstance: (...args) => callOperation("subscriptionAppStoreReviewScreenshots_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionAppStoreReviewScreenshots_deleteInstance">)),
    SubscriptionAppStoreReviewScreenshotsGetInstance: (...args) => callOperation("subscriptionAppStoreReviewScreenshots_getInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionAppStoreReviewScreenshots_getInstance">)),
    SubscriptionAppStoreReviewScreenshotsUpdateInstance: (...args) => callOperation("subscriptionAppStoreReviewScreenshots_updateInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptionAppStoreReviewScreenshots_updateInstance">)),
  };
}
