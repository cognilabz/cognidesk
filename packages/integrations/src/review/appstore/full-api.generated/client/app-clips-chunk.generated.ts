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
export const AppStoreFullApiAppClipsOperationKeys = [
  "appClips_appClipAdvancedExperiences_getToManyRelated",
  "appClips_appClipAdvancedExperiences_getToManyRelationship",
  "appClips_appClipDefaultExperiences_getToManyRelated",
  "appClips_appClipDefaultExperiences_getToManyRelationship",
  "appClips_getInstance"
] as const;
export type AppStoreFullApiAppClipsOperationKey = typeof AppStoreFullApiAppClipsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppClipsOperationPathParamMap {
  "appClips_appClipAdvancedExperiences_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appClips_appClipAdvancedExperiences_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appClips_appClipDefaultExperiences_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appClips_appClipDefaultExperiences_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appClips_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppClipsOperationRequestMap {
  "appClips_appClipAdvancedExperiences_getToManyRelated": AppStoreFullApiOperationInput<"appClips_appClipAdvancedExperiences_getToManyRelated">;
  "appClips_appClipAdvancedExperiences_getToManyRelationship": AppStoreFullApiOperationInput<"appClips_appClipAdvancedExperiences_getToManyRelationship">;
  "appClips_appClipDefaultExperiences_getToManyRelated": AppStoreFullApiOperationInput<"appClips_appClipDefaultExperiences_getToManyRelated">;
  "appClips_appClipDefaultExperiences_getToManyRelationship": AppStoreFullApiOperationInput<"appClips_appClipDefaultExperiences_getToManyRelationship">;
  "appClips_getInstance": AppStoreFullApiOperationInput<"appClips_getInstance">;
}

export interface AppStoreFullApiAppClipsGeneratedClient {
  AppClipsAppClipAdvancedExperiencesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appClips_appClipAdvancedExperiences_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appClips_appClipAdvancedExperiences_getToManyRelated"]>;
  AppClipsAppClipAdvancedExperiencesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appClips_appClipAdvancedExperiences_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appClips_appClipAdvancedExperiences_getToManyRelationship"]>;
  AppClipsAppClipDefaultExperiencesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appClips_appClipDefaultExperiences_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appClips_appClipDefaultExperiences_getToManyRelated"]>;
  AppClipsAppClipDefaultExperiencesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appClips_appClipDefaultExperiences_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appClips_appClipDefaultExperiences_getToManyRelationship"]>;
  AppClipsGetInstance(...args: AppStoreFullApiOperationArgs<"appClips_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appClips_getInstance"]>;
}

export const AppStoreFullApiAppClipsGeneratedFunctionNames = [
  "AppClipsAppClipAdvancedExperiencesGetToManyRelated",
  "AppClipsAppClipAdvancedExperiencesGetToManyRelationship",
  "AppClipsAppClipDefaultExperiencesGetToManyRelated",
  "AppClipsAppClipDefaultExperiencesGetToManyRelationship",
  "AppClipsGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppClipsGeneratedClient)[];

export function createAppStoreFullApiAppClipsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppClipsGeneratedClient {
  return {
    AppClipsAppClipAdvancedExperiencesGetToManyRelated: (...args) => callOperation("appClips_appClipAdvancedExperiences_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appClips_appClipAdvancedExperiences_getToManyRelated">)),
    AppClipsAppClipAdvancedExperiencesGetToManyRelationship: (...args) => callOperation("appClips_appClipAdvancedExperiences_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appClips_appClipAdvancedExperiences_getToManyRelationship">)),
    AppClipsAppClipDefaultExperiencesGetToManyRelated: (...args) => callOperation("appClips_appClipDefaultExperiences_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appClips_appClipDefaultExperiences_getToManyRelated">)),
    AppClipsAppClipDefaultExperiencesGetToManyRelationship: (...args) => callOperation("appClips_appClipDefaultExperiences_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appClips_appClipDefaultExperiences_getToManyRelationship">)),
    AppClipsGetInstance: (...args) => callOperation("appClips_getInstance", ...(args as AppStoreFullApiOperationArgs<"appClips_getInstance">)),
  };
}
