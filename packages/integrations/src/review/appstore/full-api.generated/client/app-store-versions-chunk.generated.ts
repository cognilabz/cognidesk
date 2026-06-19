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
export const AppStoreFullApiAppStoreVersionsOperationKeys = [
  "appStoreVersions_alternativeDistributionPackage_getToOneRelated",
  "appStoreVersions_alternativeDistributionPackage_getToOneRelationship",
  "appStoreVersions_appClipDefaultExperience_getToOneRelated",
  "appStoreVersions_appClipDefaultExperience_getToOneRelationship",
  "appStoreVersions_appClipDefaultExperience_updateToOneRelationship",
  "appStoreVersions_appStoreReviewDetail_getToOneRelated",
  "appStoreVersions_appStoreReviewDetail_getToOneRelationship",
  "appStoreVersions_appStoreVersionExperiments_getToManyRelated",
  "appStoreVersions_appStoreVersionExperiments_getToManyRelationship",
  "appStoreVersions_appStoreVersionExperimentsV2_getToManyRelated",
  "appStoreVersions_appStoreVersionExperimentsV2_getToManyRelationship",
  "appStoreVersions_appStoreVersionLocalizations_getToManyRelated",
  "appStoreVersions_appStoreVersionLocalizations_getToManyRelationship",
  "appStoreVersions_appStoreVersionPhasedRelease_getToOneRelated",
  "appStoreVersions_appStoreVersionPhasedRelease_getToOneRelationship",
  "appStoreVersions_appStoreVersionSubmission_getToOneRelated",
  "appStoreVersions_appStoreVersionSubmission_getToOneRelationship",
  "appStoreVersions_build_getToOneRelated",
  "appStoreVersions_build_getToOneRelationship",
  "appStoreVersions_build_updateToOneRelationship",
  "appStoreVersions_createInstance",
  "appStoreVersions_customerReviews_getToManyRelated",
  "appStoreVersions_customerReviews_getToManyRelationship",
  "appStoreVersions_deleteInstance",
  "appStoreVersions_gameCenterAppVersion_getToOneRelated",
  "appStoreVersions_gameCenterAppVersion_getToOneRelationship",
  "appStoreVersions_getInstance",
  "appStoreVersions_routingAppCoverage_getToOneRelated",
  "appStoreVersions_routingAppCoverage_getToOneRelationship",
  "appStoreVersions_updateInstance"
] as const;
export type AppStoreFullApiAppStoreVersionsOperationKey = typeof AppStoreFullApiAppStoreVersionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppStoreVersionsOperationPathParamMap {
  "appStoreVersions_alternativeDistributionPackage_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_alternativeDistributionPackage_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_appClipDefaultExperience_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_appClipDefaultExperience_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_appClipDefaultExperience_updateToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_appStoreReviewDetail_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_appStoreReviewDetail_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_appStoreVersionExperiments_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_appStoreVersionExperiments_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_appStoreVersionExperimentsV2_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_appStoreVersionExperimentsV2_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_appStoreVersionLocalizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_appStoreVersionLocalizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_appStoreVersionPhasedRelease_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_appStoreVersionPhasedRelease_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_appStoreVersionSubmission_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_appStoreVersionSubmission_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_build_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_build_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_build_updateToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_createInstance": {};
  "appStoreVersions_customerReviews_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_customerReviews_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_gameCenterAppVersion_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_gameCenterAppVersion_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_routingAppCoverage_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_routingAppCoverage_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersions_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppStoreVersionsOperationRequestMap {
  "appStoreVersions_alternativeDistributionPackage_getToOneRelated": AppStoreFullApiOperationInput<"appStoreVersions_alternativeDistributionPackage_getToOneRelated">;
  "appStoreVersions_alternativeDistributionPackage_getToOneRelationship": AppStoreFullApiOperationInput<"appStoreVersions_alternativeDistributionPackage_getToOneRelationship">;
  "appStoreVersions_appClipDefaultExperience_getToOneRelated": AppStoreFullApiOperationInput<"appStoreVersions_appClipDefaultExperience_getToOneRelated">;
  "appStoreVersions_appClipDefaultExperience_getToOneRelationship": AppStoreFullApiOperationInput<"appStoreVersions_appClipDefaultExperience_getToOneRelationship">;
  "appStoreVersions_appClipDefaultExperience_updateToOneRelationship": AppStoreFullApiOperationInput<"appStoreVersions_appClipDefaultExperience_updateToOneRelationship">;
  "appStoreVersions_appStoreReviewDetail_getToOneRelated": AppStoreFullApiOperationInput<"appStoreVersions_appStoreReviewDetail_getToOneRelated">;
  "appStoreVersions_appStoreReviewDetail_getToOneRelationship": AppStoreFullApiOperationInput<"appStoreVersions_appStoreReviewDetail_getToOneRelationship">;
  "appStoreVersions_appStoreVersionExperiments_getToManyRelated": AppStoreFullApiOperationInput<"appStoreVersions_appStoreVersionExperiments_getToManyRelated">;
  "appStoreVersions_appStoreVersionExperiments_getToManyRelationship": AppStoreFullApiOperationInput<"appStoreVersions_appStoreVersionExperiments_getToManyRelationship">;
  "appStoreVersions_appStoreVersionExperimentsV2_getToManyRelated": AppStoreFullApiOperationInput<"appStoreVersions_appStoreVersionExperimentsV2_getToManyRelated">;
  "appStoreVersions_appStoreVersionExperimentsV2_getToManyRelationship": AppStoreFullApiOperationInput<"appStoreVersions_appStoreVersionExperimentsV2_getToManyRelationship">;
  "appStoreVersions_appStoreVersionLocalizations_getToManyRelated": AppStoreFullApiOperationInput<"appStoreVersions_appStoreVersionLocalizations_getToManyRelated">;
  "appStoreVersions_appStoreVersionLocalizations_getToManyRelationship": AppStoreFullApiOperationInput<"appStoreVersions_appStoreVersionLocalizations_getToManyRelationship">;
  "appStoreVersions_appStoreVersionPhasedRelease_getToOneRelated": AppStoreFullApiOperationInput<"appStoreVersions_appStoreVersionPhasedRelease_getToOneRelated">;
  "appStoreVersions_appStoreVersionPhasedRelease_getToOneRelationship": AppStoreFullApiOperationInput<"appStoreVersions_appStoreVersionPhasedRelease_getToOneRelationship">;
  "appStoreVersions_appStoreVersionSubmission_getToOneRelated": AppStoreFullApiOperationInput<"appStoreVersions_appStoreVersionSubmission_getToOneRelated">;
  "appStoreVersions_appStoreVersionSubmission_getToOneRelationship": AppStoreFullApiOperationInput<"appStoreVersions_appStoreVersionSubmission_getToOneRelationship">;
  "appStoreVersions_build_getToOneRelated": AppStoreFullApiOperationInput<"appStoreVersions_build_getToOneRelated">;
  "appStoreVersions_build_getToOneRelationship": AppStoreFullApiOperationInput<"appStoreVersions_build_getToOneRelationship">;
  "appStoreVersions_build_updateToOneRelationship": AppStoreFullApiOperationInput<"appStoreVersions_build_updateToOneRelationship">;
  "appStoreVersions_createInstance": AppStoreFullApiOperationInput<"appStoreVersions_createInstance">;
  "appStoreVersions_customerReviews_getToManyRelated": AppStoreFullApiOperationInput<"appStoreVersions_customerReviews_getToManyRelated">;
  "appStoreVersions_customerReviews_getToManyRelationship": AppStoreFullApiOperationInput<"appStoreVersions_customerReviews_getToManyRelationship">;
  "appStoreVersions_deleteInstance": AppStoreFullApiOperationInput<"appStoreVersions_deleteInstance">;
  "appStoreVersions_gameCenterAppVersion_getToOneRelated": AppStoreFullApiOperationInput<"appStoreVersions_gameCenterAppVersion_getToOneRelated">;
  "appStoreVersions_gameCenterAppVersion_getToOneRelationship": AppStoreFullApiOperationInput<"appStoreVersions_gameCenterAppVersion_getToOneRelationship">;
  "appStoreVersions_getInstance": AppStoreFullApiOperationInput<"appStoreVersions_getInstance">;
  "appStoreVersions_routingAppCoverage_getToOneRelated": AppStoreFullApiOperationInput<"appStoreVersions_routingAppCoverage_getToOneRelated">;
  "appStoreVersions_routingAppCoverage_getToOneRelationship": AppStoreFullApiOperationInput<"appStoreVersions_routingAppCoverage_getToOneRelationship">;
  "appStoreVersions_updateInstance": AppStoreFullApiOperationInput<"appStoreVersions_updateInstance">;
}

export interface AppStoreFullApiAppStoreVersionsGeneratedClient {
  AppStoreVersionsAlternativeDistributionPackageGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appStoreVersions_alternativeDistributionPackage_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_alternativeDistributionPackage_getToOneRelated"]>;
  AppStoreVersionsAlternativeDistributionPackageGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersions_alternativeDistributionPackage_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_alternativeDistributionPackage_getToOneRelationship"]>;
  AppStoreVersionsAppClipDefaultExperienceGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appStoreVersions_appClipDefaultExperience_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_appClipDefaultExperience_getToOneRelated"]>;
  AppStoreVersionsAppClipDefaultExperienceGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersions_appClipDefaultExperience_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_appClipDefaultExperience_getToOneRelationship"]>;
  AppStoreVersionsAppClipDefaultExperienceUpdateToOneRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersions_appClipDefaultExperience_updateToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_appClipDefaultExperience_updateToOneRelationship"]>;
  AppStoreVersionsAppStoreReviewDetailGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appStoreVersions_appStoreReviewDetail_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_appStoreReviewDetail_getToOneRelated"]>;
  AppStoreVersionsAppStoreReviewDetailGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersions_appStoreReviewDetail_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_appStoreReviewDetail_getToOneRelationship"]>;
  AppStoreVersionsAppStoreVersionExperimentsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appStoreVersions_appStoreVersionExperiments_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_appStoreVersionExperiments_getToManyRelated"]>;
  AppStoreVersionsAppStoreVersionExperimentsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersions_appStoreVersionExperiments_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_appStoreVersionExperiments_getToManyRelationship"]>;
  AppStoreVersionsAppStoreVersionExperimentsV2GetToManyRelated(...args: AppStoreFullApiOperationArgs<"appStoreVersions_appStoreVersionExperimentsV2_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_appStoreVersionExperimentsV2_getToManyRelated"]>;
  AppStoreVersionsAppStoreVersionExperimentsV2GetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersions_appStoreVersionExperimentsV2_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_appStoreVersionExperimentsV2_getToManyRelationship"]>;
  AppStoreVersionsAppStoreVersionLocalizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appStoreVersions_appStoreVersionLocalizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_appStoreVersionLocalizations_getToManyRelated"]>;
  AppStoreVersionsAppStoreVersionLocalizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersions_appStoreVersionLocalizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_appStoreVersionLocalizations_getToManyRelationship"]>;
  AppStoreVersionsAppStoreVersionPhasedReleaseGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appStoreVersions_appStoreVersionPhasedRelease_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_appStoreVersionPhasedRelease_getToOneRelated"]>;
  AppStoreVersionsAppStoreVersionPhasedReleaseGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersions_appStoreVersionPhasedRelease_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_appStoreVersionPhasedRelease_getToOneRelationship"]>;
  AppStoreVersionsAppStoreVersionSubmissionGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appStoreVersions_appStoreVersionSubmission_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_appStoreVersionSubmission_getToOneRelated"]>;
  AppStoreVersionsAppStoreVersionSubmissionGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersions_appStoreVersionSubmission_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_appStoreVersionSubmission_getToOneRelationship"]>;
  AppStoreVersionsBuildGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appStoreVersions_build_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_build_getToOneRelated"]>;
  AppStoreVersionsBuildGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersions_build_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_build_getToOneRelationship"]>;
  AppStoreVersionsBuildUpdateToOneRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersions_build_updateToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_build_updateToOneRelationship"]>;
  AppStoreVersionsCreateInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersions_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_createInstance"]>;
  AppStoreVersionsCustomerReviewsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appStoreVersions_customerReviews_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_customerReviews_getToManyRelated"]>;
  AppStoreVersionsCustomerReviewsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersions_customerReviews_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_customerReviews_getToManyRelationship"]>;
  AppStoreVersionsDeleteInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersions_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_deleteInstance"]>;
  AppStoreVersionsGameCenterAppVersionGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appStoreVersions_gameCenterAppVersion_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_gameCenterAppVersion_getToOneRelated"]>;
  AppStoreVersionsGameCenterAppVersionGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersions_gameCenterAppVersion_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_gameCenterAppVersion_getToOneRelationship"]>;
  AppStoreVersionsGetInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersions_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_getInstance"]>;
  AppStoreVersionsRoutingAppCoverageGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appStoreVersions_routingAppCoverage_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_routingAppCoverage_getToOneRelated"]>;
  AppStoreVersionsRoutingAppCoverageGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersions_routingAppCoverage_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_routingAppCoverage_getToOneRelationship"]>;
  AppStoreVersionsUpdateInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersions_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersions_updateInstance"]>;
}

export const AppStoreFullApiAppStoreVersionsGeneratedFunctionNames = [
  "AppStoreVersionsAlternativeDistributionPackageGetToOneRelated",
  "AppStoreVersionsAlternativeDistributionPackageGetToOneRelationship",
  "AppStoreVersionsAppClipDefaultExperienceGetToOneRelated",
  "AppStoreVersionsAppClipDefaultExperienceGetToOneRelationship",
  "AppStoreVersionsAppClipDefaultExperienceUpdateToOneRelationship",
  "AppStoreVersionsAppStoreReviewDetailGetToOneRelated",
  "AppStoreVersionsAppStoreReviewDetailGetToOneRelationship",
  "AppStoreVersionsAppStoreVersionExperimentsGetToManyRelated",
  "AppStoreVersionsAppStoreVersionExperimentsGetToManyRelationship",
  "AppStoreVersionsAppStoreVersionExperimentsV2GetToManyRelated",
  "AppStoreVersionsAppStoreVersionExperimentsV2GetToManyRelationship",
  "AppStoreVersionsAppStoreVersionLocalizationsGetToManyRelated",
  "AppStoreVersionsAppStoreVersionLocalizationsGetToManyRelationship",
  "AppStoreVersionsAppStoreVersionPhasedReleaseGetToOneRelated",
  "AppStoreVersionsAppStoreVersionPhasedReleaseGetToOneRelationship",
  "AppStoreVersionsAppStoreVersionSubmissionGetToOneRelated",
  "AppStoreVersionsAppStoreVersionSubmissionGetToOneRelationship",
  "AppStoreVersionsBuildGetToOneRelated",
  "AppStoreVersionsBuildGetToOneRelationship",
  "AppStoreVersionsBuildUpdateToOneRelationship",
  "AppStoreVersionsCreateInstance",
  "AppStoreVersionsCustomerReviewsGetToManyRelated",
  "AppStoreVersionsCustomerReviewsGetToManyRelationship",
  "AppStoreVersionsDeleteInstance",
  "AppStoreVersionsGameCenterAppVersionGetToOneRelated",
  "AppStoreVersionsGameCenterAppVersionGetToOneRelationship",
  "AppStoreVersionsGetInstance",
  "AppStoreVersionsRoutingAppCoverageGetToOneRelated",
  "AppStoreVersionsRoutingAppCoverageGetToOneRelationship",
  "AppStoreVersionsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppStoreVersionsGeneratedClient)[];

export function createAppStoreFullApiAppStoreVersionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppStoreVersionsGeneratedClient {
  return {
    AppStoreVersionsAlternativeDistributionPackageGetToOneRelated: (...args) => callOperation("appStoreVersions_alternativeDistributionPackage_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_alternativeDistributionPackage_getToOneRelated">)),
    AppStoreVersionsAlternativeDistributionPackageGetToOneRelationship: (...args) => callOperation("appStoreVersions_alternativeDistributionPackage_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_alternativeDistributionPackage_getToOneRelationship">)),
    AppStoreVersionsAppClipDefaultExperienceGetToOneRelated: (...args) => callOperation("appStoreVersions_appClipDefaultExperience_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_appClipDefaultExperience_getToOneRelated">)),
    AppStoreVersionsAppClipDefaultExperienceGetToOneRelationship: (...args) => callOperation("appStoreVersions_appClipDefaultExperience_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_appClipDefaultExperience_getToOneRelationship">)),
    AppStoreVersionsAppClipDefaultExperienceUpdateToOneRelationship: (...args) => callOperation("appStoreVersions_appClipDefaultExperience_updateToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_appClipDefaultExperience_updateToOneRelationship">)),
    AppStoreVersionsAppStoreReviewDetailGetToOneRelated: (...args) => callOperation("appStoreVersions_appStoreReviewDetail_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_appStoreReviewDetail_getToOneRelated">)),
    AppStoreVersionsAppStoreReviewDetailGetToOneRelationship: (...args) => callOperation("appStoreVersions_appStoreReviewDetail_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_appStoreReviewDetail_getToOneRelationship">)),
    AppStoreVersionsAppStoreVersionExperimentsGetToManyRelated: (...args) => callOperation("appStoreVersions_appStoreVersionExperiments_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_appStoreVersionExperiments_getToManyRelated">)),
    AppStoreVersionsAppStoreVersionExperimentsGetToManyRelationship: (...args) => callOperation("appStoreVersions_appStoreVersionExperiments_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_appStoreVersionExperiments_getToManyRelationship">)),
    AppStoreVersionsAppStoreVersionExperimentsV2GetToManyRelated: (...args) => callOperation("appStoreVersions_appStoreVersionExperimentsV2_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_appStoreVersionExperimentsV2_getToManyRelated">)),
    AppStoreVersionsAppStoreVersionExperimentsV2GetToManyRelationship: (...args) => callOperation("appStoreVersions_appStoreVersionExperimentsV2_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_appStoreVersionExperimentsV2_getToManyRelationship">)),
    AppStoreVersionsAppStoreVersionLocalizationsGetToManyRelated: (...args) => callOperation("appStoreVersions_appStoreVersionLocalizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_appStoreVersionLocalizations_getToManyRelated">)),
    AppStoreVersionsAppStoreVersionLocalizationsGetToManyRelationship: (...args) => callOperation("appStoreVersions_appStoreVersionLocalizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_appStoreVersionLocalizations_getToManyRelationship">)),
    AppStoreVersionsAppStoreVersionPhasedReleaseGetToOneRelated: (...args) => callOperation("appStoreVersions_appStoreVersionPhasedRelease_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_appStoreVersionPhasedRelease_getToOneRelated">)),
    AppStoreVersionsAppStoreVersionPhasedReleaseGetToOneRelationship: (...args) => callOperation("appStoreVersions_appStoreVersionPhasedRelease_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_appStoreVersionPhasedRelease_getToOneRelationship">)),
    AppStoreVersionsAppStoreVersionSubmissionGetToOneRelated: (...args) => callOperation("appStoreVersions_appStoreVersionSubmission_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_appStoreVersionSubmission_getToOneRelated">)),
    AppStoreVersionsAppStoreVersionSubmissionGetToOneRelationship: (...args) => callOperation("appStoreVersions_appStoreVersionSubmission_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_appStoreVersionSubmission_getToOneRelationship">)),
    AppStoreVersionsBuildGetToOneRelated: (...args) => callOperation("appStoreVersions_build_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_build_getToOneRelated">)),
    AppStoreVersionsBuildGetToOneRelationship: (...args) => callOperation("appStoreVersions_build_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_build_getToOneRelationship">)),
    AppStoreVersionsBuildUpdateToOneRelationship: (...args) => callOperation("appStoreVersions_build_updateToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_build_updateToOneRelationship">)),
    AppStoreVersionsCreateInstance: (...args) => callOperation("appStoreVersions_createInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_createInstance">)),
    AppStoreVersionsCustomerReviewsGetToManyRelated: (...args) => callOperation("appStoreVersions_customerReviews_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_customerReviews_getToManyRelated">)),
    AppStoreVersionsCustomerReviewsGetToManyRelationship: (...args) => callOperation("appStoreVersions_customerReviews_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_customerReviews_getToManyRelationship">)),
    AppStoreVersionsDeleteInstance: (...args) => callOperation("appStoreVersions_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_deleteInstance">)),
    AppStoreVersionsGameCenterAppVersionGetToOneRelated: (...args) => callOperation("appStoreVersions_gameCenterAppVersion_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_gameCenterAppVersion_getToOneRelated">)),
    AppStoreVersionsGameCenterAppVersionGetToOneRelationship: (...args) => callOperation("appStoreVersions_gameCenterAppVersion_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_gameCenterAppVersion_getToOneRelationship">)),
    AppStoreVersionsGetInstance: (...args) => callOperation("appStoreVersions_getInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_getInstance">)),
    AppStoreVersionsRoutingAppCoverageGetToOneRelated: (...args) => callOperation("appStoreVersions_routingAppCoverage_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_routingAppCoverage_getToOneRelated">)),
    AppStoreVersionsRoutingAppCoverageGetToOneRelationship: (...args) => callOperation("appStoreVersions_routingAppCoverage_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_routingAppCoverage_getToOneRelationship">)),
    AppStoreVersionsUpdateInstance: (...args) => callOperation("appStoreVersions_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersions_updateInstance">)),
  };
}
