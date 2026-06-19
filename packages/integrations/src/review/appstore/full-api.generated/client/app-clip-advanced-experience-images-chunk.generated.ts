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
export const AppStoreFullApiAppClipAdvancedExperienceImagesOperationKeys = [
  "appClipAdvancedExperienceImages_createInstance",
  "appClipAdvancedExperienceImages_getInstance",
  "appClipAdvancedExperienceImages_updateInstance"
] as const;
export type AppStoreFullApiAppClipAdvancedExperienceImagesOperationKey = typeof AppStoreFullApiAppClipAdvancedExperienceImagesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppClipAdvancedExperienceImagesOperationPathParamMap {
  "appClipAdvancedExperienceImages_createInstance": {};
  "appClipAdvancedExperienceImages_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appClipAdvancedExperienceImages_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppClipAdvancedExperienceImagesOperationRequestMap {
  "appClipAdvancedExperienceImages_createInstance": AppStoreFullApiOperationInput<"appClipAdvancedExperienceImages_createInstance">;
  "appClipAdvancedExperienceImages_getInstance": AppStoreFullApiOperationInput<"appClipAdvancedExperienceImages_getInstance">;
  "appClipAdvancedExperienceImages_updateInstance": AppStoreFullApiOperationInput<"appClipAdvancedExperienceImages_updateInstance">;
}

export interface AppStoreFullApiAppClipAdvancedExperienceImagesGeneratedClient {
  AppClipAdvancedExperienceImagesCreateInstance(...args: AppStoreFullApiOperationArgs<"appClipAdvancedExperienceImages_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appClipAdvancedExperienceImages_createInstance"]>;
  AppClipAdvancedExperienceImagesGetInstance(...args: AppStoreFullApiOperationArgs<"appClipAdvancedExperienceImages_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appClipAdvancedExperienceImages_getInstance"]>;
  AppClipAdvancedExperienceImagesUpdateInstance(...args: AppStoreFullApiOperationArgs<"appClipAdvancedExperienceImages_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appClipAdvancedExperienceImages_updateInstance"]>;
}

export const AppStoreFullApiAppClipAdvancedExperienceImagesGeneratedFunctionNames = [
  "AppClipAdvancedExperienceImagesCreateInstance",
  "AppClipAdvancedExperienceImagesGetInstance",
  "AppClipAdvancedExperienceImagesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppClipAdvancedExperienceImagesGeneratedClient)[];

export function createAppStoreFullApiAppClipAdvancedExperienceImagesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppClipAdvancedExperienceImagesGeneratedClient {
  return {
    AppClipAdvancedExperienceImagesCreateInstance: (...args) => callOperation("appClipAdvancedExperienceImages_createInstance", ...(args as AppStoreFullApiOperationArgs<"appClipAdvancedExperienceImages_createInstance">)),
    AppClipAdvancedExperienceImagesGetInstance: (...args) => callOperation("appClipAdvancedExperienceImages_getInstance", ...(args as AppStoreFullApiOperationArgs<"appClipAdvancedExperienceImages_getInstance">)),
    AppClipAdvancedExperienceImagesUpdateInstance: (...args) => callOperation("appClipAdvancedExperienceImages_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appClipAdvancedExperienceImages_updateInstance">)),
  };
}
