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
export const AppStoreFullApiAppEventVideoClipsOperationKeys = [
  "appEventVideoClips_createInstance",
  "appEventVideoClips_deleteInstance",
  "appEventVideoClips_getInstance",
  "appEventVideoClips_updateInstance"
] as const;
export type AppStoreFullApiAppEventVideoClipsOperationKey = typeof AppStoreFullApiAppEventVideoClipsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppEventVideoClipsOperationPathParamMap {
  "appEventVideoClips_createInstance": {};
  "appEventVideoClips_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "appEventVideoClips_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appEventVideoClips_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppEventVideoClipsOperationRequestMap {
  "appEventVideoClips_createInstance": AppStoreFullApiOperationInput<"appEventVideoClips_createInstance">;
  "appEventVideoClips_deleteInstance": AppStoreFullApiOperationInput<"appEventVideoClips_deleteInstance">;
  "appEventVideoClips_getInstance": AppStoreFullApiOperationInput<"appEventVideoClips_getInstance">;
  "appEventVideoClips_updateInstance": AppStoreFullApiOperationInput<"appEventVideoClips_updateInstance">;
}

export interface AppStoreFullApiAppEventVideoClipsGeneratedClient {
  AppEventVideoClipsCreateInstance(...args: AppStoreFullApiOperationArgs<"appEventVideoClips_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appEventVideoClips_createInstance"]>;
  AppEventVideoClipsDeleteInstance(...args: AppStoreFullApiOperationArgs<"appEventVideoClips_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appEventVideoClips_deleteInstance"]>;
  AppEventVideoClipsGetInstance(...args: AppStoreFullApiOperationArgs<"appEventVideoClips_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appEventVideoClips_getInstance"]>;
  AppEventVideoClipsUpdateInstance(...args: AppStoreFullApiOperationArgs<"appEventVideoClips_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appEventVideoClips_updateInstance"]>;
}

export const AppStoreFullApiAppEventVideoClipsGeneratedFunctionNames = [
  "AppEventVideoClipsCreateInstance",
  "AppEventVideoClipsDeleteInstance",
  "AppEventVideoClipsGetInstance",
  "AppEventVideoClipsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppEventVideoClipsGeneratedClient)[];

export function createAppStoreFullApiAppEventVideoClipsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppEventVideoClipsGeneratedClient {
  return {
    AppEventVideoClipsCreateInstance: (...args) => callOperation("appEventVideoClips_createInstance", ...(args as AppStoreFullApiOperationArgs<"appEventVideoClips_createInstance">)),
    AppEventVideoClipsDeleteInstance: (...args) => callOperation("appEventVideoClips_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appEventVideoClips_deleteInstance">)),
    AppEventVideoClipsGetInstance: (...args) => callOperation("appEventVideoClips_getInstance", ...(args as AppStoreFullApiOperationArgs<"appEventVideoClips_getInstance">)),
    AppEventVideoClipsUpdateInstance: (...args) => callOperation("appEventVideoClips_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appEventVideoClips_updateInstance">)),
  };
}
