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
export const AppStoreFullApiAppClipDefaultExperiencesOperationKeys = [
  "appClipDefaultExperiences_appClipAppStoreReviewDetail_getToOneRelated",
  "appClipDefaultExperiences_appClipAppStoreReviewDetail_getToOneRelationship",
  "appClipDefaultExperiences_appClipDefaultExperienceLocalizations_getToManyRelated",
  "appClipDefaultExperiences_appClipDefaultExperienceLocalizations_getToManyRelationship",
  "appClipDefaultExperiences_createInstance",
  "appClipDefaultExperiences_deleteInstance",
  "appClipDefaultExperiences_getInstance",
  "appClipDefaultExperiences_releaseWithAppStoreVersion_getToOneRelated",
  "appClipDefaultExperiences_releaseWithAppStoreVersion_getToOneRelationship",
  "appClipDefaultExperiences_releaseWithAppStoreVersion_updateToOneRelationship",
  "appClipDefaultExperiences_updateInstance"
] as const;
export type AppStoreFullApiAppClipDefaultExperiencesOperationKey = typeof AppStoreFullApiAppClipDefaultExperiencesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppClipDefaultExperiencesOperationPathParamMap {
  "appClipDefaultExperiences_appClipAppStoreReviewDetail_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appClipDefaultExperiences_appClipAppStoreReviewDetail_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appClipDefaultExperiences_appClipDefaultExperienceLocalizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appClipDefaultExperiences_appClipDefaultExperienceLocalizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appClipDefaultExperiences_createInstance": {};
  "appClipDefaultExperiences_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "appClipDefaultExperiences_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appClipDefaultExperiences_releaseWithAppStoreVersion_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appClipDefaultExperiences_releaseWithAppStoreVersion_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appClipDefaultExperiences_releaseWithAppStoreVersion_updateToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appClipDefaultExperiences_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppClipDefaultExperiencesOperationRequestMap {
  "appClipDefaultExperiences_appClipAppStoreReviewDetail_getToOneRelated": AppStoreFullApiOperationInput<"appClipDefaultExperiences_appClipAppStoreReviewDetail_getToOneRelated">;
  "appClipDefaultExperiences_appClipAppStoreReviewDetail_getToOneRelationship": AppStoreFullApiOperationInput<"appClipDefaultExperiences_appClipAppStoreReviewDetail_getToOneRelationship">;
  "appClipDefaultExperiences_appClipDefaultExperienceLocalizations_getToManyRelated": AppStoreFullApiOperationInput<"appClipDefaultExperiences_appClipDefaultExperienceLocalizations_getToManyRelated">;
  "appClipDefaultExperiences_appClipDefaultExperienceLocalizations_getToManyRelationship": AppStoreFullApiOperationInput<"appClipDefaultExperiences_appClipDefaultExperienceLocalizations_getToManyRelationship">;
  "appClipDefaultExperiences_createInstance": AppStoreFullApiOperationInput<"appClipDefaultExperiences_createInstance">;
  "appClipDefaultExperiences_deleteInstance": AppStoreFullApiOperationInput<"appClipDefaultExperiences_deleteInstance">;
  "appClipDefaultExperiences_getInstance": AppStoreFullApiOperationInput<"appClipDefaultExperiences_getInstance">;
  "appClipDefaultExperiences_releaseWithAppStoreVersion_getToOneRelated": AppStoreFullApiOperationInput<"appClipDefaultExperiences_releaseWithAppStoreVersion_getToOneRelated">;
  "appClipDefaultExperiences_releaseWithAppStoreVersion_getToOneRelationship": AppStoreFullApiOperationInput<"appClipDefaultExperiences_releaseWithAppStoreVersion_getToOneRelationship">;
  "appClipDefaultExperiences_releaseWithAppStoreVersion_updateToOneRelationship": AppStoreFullApiOperationInput<"appClipDefaultExperiences_releaseWithAppStoreVersion_updateToOneRelationship">;
  "appClipDefaultExperiences_updateInstance": AppStoreFullApiOperationInput<"appClipDefaultExperiences_updateInstance">;
}

export interface AppStoreFullApiAppClipDefaultExperiencesGeneratedClient {
  AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appClipDefaultExperiences_appClipAppStoreReviewDetail_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appClipDefaultExperiences_appClipAppStoreReviewDetail_getToOneRelated"]>;
  AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appClipDefaultExperiences_appClipAppStoreReviewDetail_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appClipDefaultExperiences_appClipAppStoreReviewDetail_getToOneRelationship"]>;
  AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appClipDefaultExperiences_appClipDefaultExperienceLocalizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appClipDefaultExperiences_appClipDefaultExperienceLocalizations_getToManyRelated"]>;
  AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appClipDefaultExperiences_appClipDefaultExperienceLocalizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appClipDefaultExperiences_appClipDefaultExperienceLocalizations_getToManyRelationship"]>;
  AppClipDefaultExperiencesCreateInstance(...args: AppStoreFullApiOperationArgs<"appClipDefaultExperiences_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appClipDefaultExperiences_createInstance"]>;
  AppClipDefaultExperiencesDeleteInstance(...args: AppStoreFullApiOperationArgs<"appClipDefaultExperiences_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appClipDefaultExperiences_deleteInstance"]>;
  AppClipDefaultExperiencesGetInstance(...args: AppStoreFullApiOperationArgs<"appClipDefaultExperiences_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appClipDefaultExperiences_getInstance"]>;
  AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appClipDefaultExperiences_releaseWithAppStoreVersion_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appClipDefaultExperiences_releaseWithAppStoreVersion_getToOneRelated"]>;
  AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appClipDefaultExperiences_releaseWithAppStoreVersion_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appClipDefaultExperiences_releaseWithAppStoreVersion_getToOneRelationship"]>;
  AppClipDefaultExperiencesReleaseWithAppStoreVersionUpdateToOneRelationship(...args: AppStoreFullApiOperationArgs<"appClipDefaultExperiences_releaseWithAppStoreVersion_updateToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appClipDefaultExperiences_releaseWithAppStoreVersion_updateToOneRelationship"]>;
  AppClipDefaultExperiencesUpdateInstance(...args: AppStoreFullApiOperationArgs<"appClipDefaultExperiences_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appClipDefaultExperiences_updateInstance"]>;
}

export const AppStoreFullApiAppClipDefaultExperiencesGeneratedFunctionNames = [
  "AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelated",
  "AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelationship",
  "AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelated",
  "AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelationship",
  "AppClipDefaultExperiencesCreateInstance",
  "AppClipDefaultExperiencesDeleteInstance",
  "AppClipDefaultExperiencesGetInstance",
  "AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelated",
  "AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelationship",
  "AppClipDefaultExperiencesReleaseWithAppStoreVersionUpdateToOneRelationship",
  "AppClipDefaultExperiencesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppClipDefaultExperiencesGeneratedClient)[];

export function createAppStoreFullApiAppClipDefaultExperiencesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppClipDefaultExperiencesGeneratedClient {
  return {
    AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelated: (...args) => callOperation("appClipDefaultExperiences_appClipAppStoreReviewDetail_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appClipDefaultExperiences_appClipAppStoreReviewDetail_getToOneRelated">)),
    AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelationship: (...args) => callOperation("appClipDefaultExperiences_appClipAppStoreReviewDetail_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appClipDefaultExperiences_appClipAppStoreReviewDetail_getToOneRelationship">)),
    AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelated: (...args) => callOperation("appClipDefaultExperiences_appClipDefaultExperienceLocalizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appClipDefaultExperiences_appClipDefaultExperienceLocalizations_getToManyRelated">)),
    AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelationship: (...args) => callOperation("appClipDefaultExperiences_appClipDefaultExperienceLocalizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appClipDefaultExperiences_appClipDefaultExperienceLocalizations_getToManyRelationship">)),
    AppClipDefaultExperiencesCreateInstance: (...args) => callOperation("appClipDefaultExperiences_createInstance", ...(args as AppStoreFullApiOperationArgs<"appClipDefaultExperiences_createInstance">)),
    AppClipDefaultExperiencesDeleteInstance: (...args) => callOperation("appClipDefaultExperiences_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appClipDefaultExperiences_deleteInstance">)),
    AppClipDefaultExperiencesGetInstance: (...args) => callOperation("appClipDefaultExperiences_getInstance", ...(args as AppStoreFullApiOperationArgs<"appClipDefaultExperiences_getInstance">)),
    AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelated: (...args) => callOperation("appClipDefaultExperiences_releaseWithAppStoreVersion_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appClipDefaultExperiences_releaseWithAppStoreVersion_getToOneRelated">)),
    AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelationship: (...args) => callOperation("appClipDefaultExperiences_releaseWithAppStoreVersion_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appClipDefaultExperiences_releaseWithAppStoreVersion_getToOneRelationship">)),
    AppClipDefaultExperiencesReleaseWithAppStoreVersionUpdateToOneRelationship: (...args) => callOperation("appClipDefaultExperiences_releaseWithAppStoreVersion_updateToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appClipDefaultExperiences_releaseWithAppStoreVersion_updateToOneRelationship">)),
    AppClipDefaultExperiencesUpdateInstance: (...args) => callOperation("appClipDefaultExperiences_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appClipDefaultExperiences_updateInstance">)),
  };
}
