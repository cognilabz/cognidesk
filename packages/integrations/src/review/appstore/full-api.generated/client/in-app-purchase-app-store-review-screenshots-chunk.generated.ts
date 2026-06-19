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
export const AppStoreFullApiInAppPurchaseAppStoreReviewScreenshotsOperationKeys = [
  "inAppPurchaseAppStoreReviewScreenshots_createInstance",
  "inAppPurchaseAppStoreReviewScreenshots_deleteInstance",
  "inAppPurchaseAppStoreReviewScreenshots_getInstance",
  "inAppPurchaseAppStoreReviewScreenshots_updateInstance"
] as const;
export type AppStoreFullApiInAppPurchaseAppStoreReviewScreenshotsOperationKey = typeof AppStoreFullApiInAppPurchaseAppStoreReviewScreenshotsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiInAppPurchaseAppStoreReviewScreenshotsOperationPathParamMap {
  "inAppPurchaseAppStoreReviewScreenshots_createInstance": {};
  "inAppPurchaseAppStoreReviewScreenshots_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchaseAppStoreReviewScreenshots_getInstance": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchaseAppStoreReviewScreenshots_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiInAppPurchaseAppStoreReviewScreenshotsOperationRequestMap {
  "inAppPurchaseAppStoreReviewScreenshots_createInstance": AppStoreFullApiOperationInput<"inAppPurchaseAppStoreReviewScreenshots_createInstance">;
  "inAppPurchaseAppStoreReviewScreenshots_deleteInstance": AppStoreFullApiOperationInput<"inAppPurchaseAppStoreReviewScreenshots_deleteInstance">;
  "inAppPurchaseAppStoreReviewScreenshots_getInstance": AppStoreFullApiOperationInput<"inAppPurchaseAppStoreReviewScreenshots_getInstance">;
  "inAppPurchaseAppStoreReviewScreenshots_updateInstance": AppStoreFullApiOperationInput<"inAppPurchaseAppStoreReviewScreenshots_updateInstance">;
}

export interface AppStoreFullApiInAppPurchaseAppStoreReviewScreenshotsGeneratedClient {
  InAppPurchaseAppStoreReviewScreenshotsCreateInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseAppStoreReviewScreenshots_createInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseAppStoreReviewScreenshots_createInstance"]>;
  InAppPurchaseAppStoreReviewScreenshotsDeleteInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseAppStoreReviewScreenshots_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseAppStoreReviewScreenshots_deleteInstance"]>;
  InAppPurchaseAppStoreReviewScreenshotsGetInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseAppStoreReviewScreenshots_getInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseAppStoreReviewScreenshots_getInstance"]>;
  InAppPurchaseAppStoreReviewScreenshotsUpdateInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseAppStoreReviewScreenshots_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseAppStoreReviewScreenshots_updateInstance"]>;
}

export const AppStoreFullApiInAppPurchaseAppStoreReviewScreenshotsGeneratedFunctionNames = [
  "InAppPurchaseAppStoreReviewScreenshotsCreateInstance",
  "InAppPurchaseAppStoreReviewScreenshotsDeleteInstance",
  "InAppPurchaseAppStoreReviewScreenshotsGetInstance",
  "InAppPurchaseAppStoreReviewScreenshotsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiInAppPurchaseAppStoreReviewScreenshotsGeneratedClient)[];

export function createAppStoreFullApiInAppPurchaseAppStoreReviewScreenshotsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiInAppPurchaseAppStoreReviewScreenshotsGeneratedClient {
  return {
    InAppPurchaseAppStoreReviewScreenshotsCreateInstance: (...args) => callOperation("inAppPurchaseAppStoreReviewScreenshots_createInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseAppStoreReviewScreenshots_createInstance">)),
    InAppPurchaseAppStoreReviewScreenshotsDeleteInstance: (...args) => callOperation("inAppPurchaseAppStoreReviewScreenshots_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseAppStoreReviewScreenshots_deleteInstance">)),
    InAppPurchaseAppStoreReviewScreenshotsGetInstance: (...args) => callOperation("inAppPurchaseAppStoreReviewScreenshots_getInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseAppStoreReviewScreenshots_getInstance">)),
    InAppPurchaseAppStoreReviewScreenshotsUpdateInstance: (...args) => callOperation("inAppPurchaseAppStoreReviewScreenshots_updateInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseAppStoreReviewScreenshots_updateInstance">)),
  };
}
