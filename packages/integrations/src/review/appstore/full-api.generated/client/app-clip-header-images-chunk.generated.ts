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
export const AppStoreFullApiAppClipHeaderImagesOperationKeys = [
  "appClipHeaderImages_createInstance",
  "appClipHeaderImages_deleteInstance",
  "appClipHeaderImages_getInstance",
  "appClipHeaderImages_updateInstance"
] as const;
export type AppStoreFullApiAppClipHeaderImagesOperationKey = typeof AppStoreFullApiAppClipHeaderImagesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppClipHeaderImagesOperationPathParamMap {
  "appClipHeaderImages_createInstance": {};
  "appClipHeaderImages_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "appClipHeaderImages_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appClipHeaderImages_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppClipHeaderImagesOperationRequestMap {
  "appClipHeaderImages_createInstance": AppStoreFullApiOperationInput<"appClipHeaderImages_createInstance">;
  "appClipHeaderImages_deleteInstance": AppStoreFullApiOperationInput<"appClipHeaderImages_deleteInstance">;
  "appClipHeaderImages_getInstance": AppStoreFullApiOperationInput<"appClipHeaderImages_getInstance">;
  "appClipHeaderImages_updateInstance": AppStoreFullApiOperationInput<"appClipHeaderImages_updateInstance">;
}

export interface AppStoreFullApiAppClipHeaderImagesGeneratedClient {
  AppClipHeaderImagesCreateInstance(...args: AppStoreFullApiOperationArgs<"appClipHeaderImages_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appClipHeaderImages_createInstance"]>;
  AppClipHeaderImagesDeleteInstance(...args: AppStoreFullApiOperationArgs<"appClipHeaderImages_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appClipHeaderImages_deleteInstance"]>;
  AppClipHeaderImagesGetInstance(...args: AppStoreFullApiOperationArgs<"appClipHeaderImages_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appClipHeaderImages_getInstance"]>;
  AppClipHeaderImagesUpdateInstance(...args: AppStoreFullApiOperationArgs<"appClipHeaderImages_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appClipHeaderImages_updateInstance"]>;
}

export const AppStoreFullApiAppClipHeaderImagesGeneratedFunctionNames = [
  "AppClipHeaderImagesCreateInstance",
  "AppClipHeaderImagesDeleteInstance",
  "AppClipHeaderImagesGetInstance",
  "AppClipHeaderImagesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppClipHeaderImagesGeneratedClient)[];

export function createAppStoreFullApiAppClipHeaderImagesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppClipHeaderImagesGeneratedClient {
  return {
    AppClipHeaderImagesCreateInstance: (...args) => callOperation("appClipHeaderImages_createInstance", ...(args as AppStoreFullApiOperationArgs<"appClipHeaderImages_createInstance">)),
    AppClipHeaderImagesDeleteInstance: (...args) => callOperation("appClipHeaderImages_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appClipHeaderImages_deleteInstance">)),
    AppClipHeaderImagesGetInstance: (...args) => callOperation("appClipHeaderImages_getInstance", ...(args as AppStoreFullApiOperationArgs<"appClipHeaderImages_getInstance">)),
    AppClipHeaderImagesUpdateInstance: (...args) => callOperation("appClipHeaderImages_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appClipHeaderImages_updateInstance">)),
  };
}
