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
export const AppStoreFullApiAppClipAdvancedExperiencesOperationKeys = [
  "appClipAdvancedExperiences_createInstance",
  "appClipAdvancedExperiences_getInstance",
  "appClipAdvancedExperiences_updateInstance"
] as const;
export type AppStoreFullApiAppClipAdvancedExperiencesOperationKey = typeof AppStoreFullApiAppClipAdvancedExperiencesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppClipAdvancedExperiencesOperationPathParamMap {
  "appClipAdvancedExperiences_createInstance": {};
  "appClipAdvancedExperiences_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appClipAdvancedExperiences_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppClipAdvancedExperiencesOperationRequestMap {
  "appClipAdvancedExperiences_createInstance": AppStoreFullApiOperationInput<"appClipAdvancedExperiences_createInstance">;
  "appClipAdvancedExperiences_getInstance": AppStoreFullApiOperationInput<"appClipAdvancedExperiences_getInstance">;
  "appClipAdvancedExperiences_updateInstance": AppStoreFullApiOperationInput<"appClipAdvancedExperiences_updateInstance">;
}

export interface AppStoreFullApiAppClipAdvancedExperiencesGeneratedClient {
  AppClipAdvancedExperiencesCreateInstance(...args: AppStoreFullApiOperationArgs<"appClipAdvancedExperiences_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appClipAdvancedExperiences_createInstance"]>;
  AppClipAdvancedExperiencesGetInstance(...args: AppStoreFullApiOperationArgs<"appClipAdvancedExperiences_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appClipAdvancedExperiences_getInstance"]>;
  AppClipAdvancedExperiencesUpdateInstance(...args: AppStoreFullApiOperationArgs<"appClipAdvancedExperiences_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appClipAdvancedExperiences_updateInstance"]>;
}

export const AppStoreFullApiAppClipAdvancedExperiencesGeneratedFunctionNames = [
  "AppClipAdvancedExperiencesCreateInstance",
  "AppClipAdvancedExperiencesGetInstance",
  "AppClipAdvancedExperiencesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppClipAdvancedExperiencesGeneratedClient)[];

export function createAppStoreFullApiAppClipAdvancedExperiencesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppClipAdvancedExperiencesGeneratedClient {
  return {
    AppClipAdvancedExperiencesCreateInstance: (...args) => callOperation("appClipAdvancedExperiences_createInstance", ...(args as AppStoreFullApiOperationArgs<"appClipAdvancedExperiences_createInstance">)),
    AppClipAdvancedExperiencesGetInstance: (...args) => callOperation("appClipAdvancedExperiences_getInstance", ...(args as AppStoreFullApiOperationArgs<"appClipAdvancedExperiences_getInstance">)),
    AppClipAdvancedExperiencesUpdateInstance: (...args) => callOperation("appClipAdvancedExperiences_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appClipAdvancedExperiences_updateInstance">)),
  };
}
