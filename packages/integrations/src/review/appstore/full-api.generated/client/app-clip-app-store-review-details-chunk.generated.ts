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
export const AppStoreFullApiAppClipAppStoreReviewDetailsOperationKeys = [
  "appClipAppStoreReviewDetails_createInstance",
  "appClipAppStoreReviewDetails_getInstance",
  "appClipAppStoreReviewDetails_updateInstance"
] as const;
export type AppStoreFullApiAppClipAppStoreReviewDetailsOperationKey = typeof AppStoreFullApiAppClipAppStoreReviewDetailsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppClipAppStoreReviewDetailsOperationPathParamMap {
  "appClipAppStoreReviewDetails_createInstance": {};
  "appClipAppStoreReviewDetails_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appClipAppStoreReviewDetails_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppClipAppStoreReviewDetailsOperationRequestMap {
  "appClipAppStoreReviewDetails_createInstance": AppStoreFullApiOperationInput<"appClipAppStoreReviewDetails_createInstance">;
  "appClipAppStoreReviewDetails_getInstance": AppStoreFullApiOperationInput<"appClipAppStoreReviewDetails_getInstance">;
  "appClipAppStoreReviewDetails_updateInstance": AppStoreFullApiOperationInput<"appClipAppStoreReviewDetails_updateInstance">;
}

export interface AppStoreFullApiAppClipAppStoreReviewDetailsGeneratedClient {
  AppClipAppStoreReviewDetailsCreateInstance(...args: AppStoreFullApiOperationArgs<"appClipAppStoreReviewDetails_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appClipAppStoreReviewDetails_createInstance"]>;
  AppClipAppStoreReviewDetailsGetInstance(...args: AppStoreFullApiOperationArgs<"appClipAppStoreReviewDetails_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appClipAppStoreReviewDetails_getInstance"]>;
  AppClipAppStoreReviewDetailsUpdateInstance(...args: AppStoreFullApiOperationArgs<"appClipAppStoreReviewDetails_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appClipAppStoreReviewDetails_updateInstance"]>;
}

export const AppStoreFullApiAppClipAppStoreReviewDetailsGeneratedFunctionNames = [
  "AppClipAppStoreReviewDetailsCreateInstance",
  "AppClipAppStoreReviewDetailsGetInstance",
  "AppClipAppStoreReviewDetailsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppClipAppStoreReviewDetailsGeneratedClient)[];

export function createAppStoreFullApiAppClipAppStoreReviewDetailsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppClipAppStoreReviewDetailsGeneratedClient {
  return {
    AppClipAppStoreReviewDetailsCreateInstance: (...args) => callOperation("appClipAppStoreReviewDetails_createInstance", ...(args as AppStoreFullApiOperationArgs<"appClipAppStoreReviewDetails_createInstance">)),
    AppClipAppStoreReviewDetailsGetInstance: (...args) => callOperation("appClipAppStoreReviewDetails_getInstance", ...(args as AppStoreFullApiOperationArgs<"appClipAppStoreReviewDetails_getInstance">)),
    AppClipAppStoreReviewDetailsUpdateInstance: (...args) => callOperation("appClipAppStoreReviewDetails_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appClipAppStoreReviewDetails_updateInstance">)),
  };
}
