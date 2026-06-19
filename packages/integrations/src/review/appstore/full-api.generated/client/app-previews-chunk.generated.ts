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
export const AppStoreFullApiAppPreviewsOperationKeys = [
  "appPreviews_createInstance",
  "appPreviews_deleteInstance",
  "appPreviews_getInstance",
  "appPreviews_updateInstance"
] as const;
export type AppStoreFullApiAppPreviewsOperationKey = typeof AppStoreFullApiAppPreviewsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppPreviewsOperationPathParamMap {
  "appPreviews_createInstance": {};
  "appPreviews_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "appPreviews_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appPreviews_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppPreviewsOperationRequestMap {
  "appPreviews_createInstance": AppStoreFullApiOperationInput<"appPreviews_createInstance">;
  "appPreviews_deleteInstance": AppStoreFullApiOperationInput<"appPreviews_deleteInstance">;
  "appPreviews_getInstance": AppStoreFullApiOperationInput<"appPreviews_getInstance">;
  "appPreviews_updateInstance": AppStoreFullApiOperationInput<"appPreviews_updateInstance">;
}

export interface AppStoreFullApiAppPreviewsGeneratedClient {
  AppPreviewsCreateInstance(...args: AppStoreFullApiOperationArgs<"appPreviews_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appPreviews_createInstance"]>;
  AppPreviewsDeleteInstance(...args: AppStoreFullApiOperationArgs<"appPreviews_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appPreviews_deleteInstance"]>;
  AppPreviewsGetInstance(...args: AppStoreFullApiOperationArgs<"appPreviews_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appPreviews_getInstance"]>;
  AppPreviewsUpdateInstance(...args: AppStoreFullApiOperationArgs<"appPreviews_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appPreviews_updateInstance"]>;
}

export const AppStoreFullApiAppPreviewsGeneratedFunctionNames = [
  "AppPreviewsCreateInstance",
  "AppPreviewsDeleteInstance",
  "AppPreviewsGetInstance",
  "AppPreviewsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppPreviewsGeneratedClient)[];

export function createAppStoreFullApiAppPreviewsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppPreviewsGeneratedClient {
  return {
    AppPreviewsCreateInstance: (...args) => callOperation("appPreviews_createInstance", ...(args as AppStoreFullApiOperationArgs<"appPreviews_createInstance">)),
    AppPreviewsDeleteInstance: (...args) => callOperation("appPreviews_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appPreviews_deleteInstance">)),
    AppPreviewsGetInstance: (...args) => callOperation("appPreviews_getInstance", ...(args as AppStoreFullApiOperationArgs<"appPreviews_getInstance">)),
    AppPreviewsUpdateInstance: (...args) => callOperation("appPreviews_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appPreviews_updateInstance">)),
  };
}
