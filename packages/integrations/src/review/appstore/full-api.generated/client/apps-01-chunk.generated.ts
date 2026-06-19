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
export const AppStoreFullApiApps01OperationKeys = [
  "apps_accessibilityDeclarations_getToManyRelated",
  "apps_accessibilityDeclarations_getToManyRelationship",
  "apps_alternativeDistributionKey_getToOneRelated",
  "apps_alternativeDistributionKey_getToOneRelationship",
  "apps_analyticsReportRequests_getToManyRelated",
  "apps_analyticsReportRequests_getToManyRelationship",
  "apps_androidToIosAppMappingDetails_getToManyRelated",
  "apps_androidToIosAppMappingDetails_getToManyRelationship",
  "apps_appAvailabilityV2_getToOneRelated",
  "apps_appAvailabilityV2_getToOneRelationship",
  "apps_appClips_getToManyRelated",
  "apps_appClips_getToManyRelationship",
  "apps_appCustomProductPages_getToManyRelated",
  "apps_appCustomProductPages_getToManyRelationship",
  "apps_appEncryptionDeclarations_getToManyRelated",
  "apps_appEncryptionDeclarations_getToManyRelationship",
  "apps_appEvents_getToManyRelated",
  "apps_appEvents_getToManyRelationship",
  "apps_appInfos_getToManyRelated",
  "apps_appInfos_getToManyRelationship",
  "apps_appPricePoints_getToManyRelated",
  "apps_appPricePoints_getToManyRelationship",
  "apps_appPriceSchedule_getToOneRelated",
  "apps_appPriceSchedule_getToOneRelationship",
  "apps_appStoreVersionExperimentsV2_getToManyRelated",
  "apps_appStoreVersionExperimentsV2_getToManyRelationship",
  "apps_appStoreVersions_getToManyRelated",
  "apps_appStoreVersions_getToManyRelationship",
  "apps_appTags_getToManyRelated",
  "apps_appTags_getToManyRelationship",
  "apps_backgroundAssets_getToManyRelated",
  "apps_backgroundAssets_getToManyRelationship",
  "apps_betaAppLocalizations_getToManyRelated",
  "apps_betaAppLocalizations_getToManyRelationship",
  "apps_betaAppReviewDetail_getToOneRelated",
  "apps_betaAppReviewDetail_getToOneRelationship",
  "apps_betaFeedbackCrashSubmissions_getToManyRelated",
  "apps_betaFeedbackCrashSubmissions_getToManyRelationship",
  "apps_betaFeedbackScreenshotSubmissions_getToManyRelated",
  "apps_betaFeedbackScreenshotSubmissions_getToManyRelationship",
  "apps_betaGroups_getToManyRelated",
  "apps_betaGroups_getToManyRelationship",
  "apps_betaLicenseAgreement_getToOneRelated",
  "apps_betaLicenseAgreement_getToOneRelationship",
  "apps_betaTesters_deleteToManyRelationship",
  "apps_betaTesterUsages_getMetrics",
  "apps_builds_getToManyRelated",
  "apps_builds_getToManyRelationship",
  "apps_buildUploads_getToManyRelated",
  "apps_buildUploads_getToManyRelationship",
  "apps_ciProduct_getToOneRelated",
  "apps_ciProduct_getToOneRelationship",
  "apps_customerReviews_getToManyRelated",
  "apps_customerReviews_getToManyRelationship",
  "apps_customerReviewSummarizations_getToManyRelated",
  "apps_endUserLicenseAgreement_getToOneRelated",
  "apps_endUserLicenseAgreement_getToOneRelationship",
  "apps_gameCenterDetail_getToOneRelated",
  "apps_gameCenterDetail_getToOneRelationship",
  "apps_gameCenterEnabledVersions_getToManyRelated",
  "apps_gameCenterEnabledVersions_getToManyRelationship",
  "apps_getCollection",
  "apps_getInstance",
  "apps_inAppPurchases_getToManyRelated",
  "apps_inAppPurchases_getToManyRelationship",
  "apps_inAppPurchasesV2_getToManyRelated",
  "apps_inAppPurchasesV2_getToManyRelationship",
  "apps_marketplaceSearchDetail_getToOneRelated",
  "apps_marketplaceSearchDetail_getToOneRelationship",
  "apps_perfPowerMetrics_getToManyRelated",
  "apps_preReleaseVersions_getToManyRelated",
  "apps_preReleaseVersions_getToManyRelationship",
  "apps_promotedPurchases_getToManyRelated",
  "apps_promotedPurchases_getToManyRelationship",
  "apps_promotedPurchases_replaceToManyRelationship",
  "apps_reviewSubmissions_getToManyRelated",
  "apps_reviewSubmissions_getToManyRelationship",
  "apps_searchKeywords_getToManyRelated",
  "apps_searchKeywords_getToManyRelationship",
  "apps_subscriptionGracePeriod_getToOneRelated"
] as const;
export type AppStoreFullApiApps01OperationKey = typeof AppStoreFullApiApps01OperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiApps01OperationPathParamMap {
  "apps_accessibilityDeclarations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_accessibilityDeclarations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_alternativeDistributionKey_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_alternativeDistributionKey_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_analyticsReportRequests_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_analyticsReportRequests_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_androidToIosAppMappingDetails_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_androidToIosAppMappingDetails_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_appAvailabilityV2_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_appAvailabilityV2_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_appClips_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_appClips_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_appCustomProductPages_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_appCustomProductPages_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_appEncryptionDeclarations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_appEncryptionDeclarations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_appEvents_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_appEvents_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_appInfos_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_appInfos_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_appPricePoints_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_appPricePoints_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_appPriceSchedule_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_appPriceSchedule_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_appStoreVersionExperimentsV2_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_appStoreVersionExperimentsV2_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_appStoreVersions_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_appStoreVersions_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_appTags_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_appTags_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_backgroundAssets_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_backgroundAssets_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_betaAppLocalizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_betaAppLocalizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_betaAppReviewDetail_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_betaAppReviewDetail_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_betaFeedbackCrashSubmissions_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_betaFeedbackCrashSubmissions_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_betaFeedbackScreenshotSubmissions_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_betaFeedbackScreenshotSubmissions_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_betaGroups_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_betaGroups_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_betaLicenseAgreement_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_betaLicenseAgreement_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_betaTesters_deleteToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_betaTesterUsages_getMetrics": { "id": AppStoreFullApiPathParamValue };
  "apps_builds_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_builds_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_buildUploads_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_buildUploads_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_ciProduct_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_ciProduct_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_customerReviews_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_customerReviews_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_customerReviewSummarizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_endUserLicenseAgreement_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_endUserLicenseAgreement_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_gameCenterDetail_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_gameCenterDetail_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_gameCenterEnabledVersions_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_gameCenterEnabledVersions_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_getCollection": {};
  "apps_getInstance": { "id": AppStoreFullApiPathParamValue };
  "apps_inAppPurchases_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_inAppPurchases_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_inAppPurchasesV2_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_inAppPurchasesV2_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_marketplaceSearchDetail_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_marketplaceSearchDetail_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_perfPowerMetrics_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_preReleaseVersions_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_preReleaseVersions_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_promotedPurchases_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_promotedPurchases_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_promotedPurchases_replaceToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_reviewSubmissions_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_reviewSubmissions_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_searchKeywords_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "apps_searchKeywords_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "apps_subscriptionGracePeriod_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiApps01OperationRequestMap {
  "apps_accessibilityDeclarations_getToManyRelated": AppStoreFullApiOperationInput<"apps_accessibilityDeclarations_getToManyRelated">;
  "apps_accessibilityDeclarations_getToManyRelationship": AppStoreFullApiOperationInput<"apps_accessibilityDeclarations_getToManyRelationship">;
  "apps_alternativeDistributionKey_getToOneRelated": AppStoreFullApiOperationInput<"apps_alternativeDistributionKey_getToOneRelated">;
  "apps_alternativeDistributionKey_getToOneRelationship": AppStoreFullApiOperationInput<"apps_alternativeDistributionKey_getToOneRelationship">;
  "apps_analyticsReportRequests_getToManyRelated": AppStoreFullApiOperationInput<"apps_analyticsReportRequests_getToManyRelated">;
  "apps_analyticsReportRequests_getToManyRelationship": AppStoreFullApiOperationInput<"apps_analyticsReportRequests_getToManyRelationship">;
  "apps_androidToIosAppMappingDetails_getToManyRelated": AppStoreFullApiOperationInput<"apps_androidToIosAppMappingDetails_getToManyRelated">;
  "apps_androidToIosAppMappingDetails_getToManyRelationship": AppStoreFullApiOperationInput<"apps_androidToIosAppMappingDetails_getToManyRelationship">;
  "apps_appAvailabilityV2_getToOneRelated": AppStoreFullApiOperationInput<"apps_appAvailabilityV2_getToOneRelated">;
  "apps_appAvailabilityV2_getToOneRelationship": AppStoreFullApiOperationInput<"apps_appAvailabilityV2_getToOneRelationship">;
  "apps_appClips_getToManyRelated": AppStoreFullApiOperationInput<"apps_appClips_getToManyRelated">;
  "apps_appClips_getToManyRelationship": AppStoreFullApiOperationInput<"apps_appClips_getToManyRelationship">;
  "apps_appCustomProductPages_getToManyRelated": AppStoreFullApiOperationInput<"apps_appCustomProductPages_getToManyRelated">;
  "apps_appCustomProductPages_getToManyRelationship": AppStoreFullApiOperationInput<"apps_appCustomProductPages_getToManyRelationship">;
  "apps_appEncryptionDeclarations_getToManyRelated": AppStoreFullApiOperationInput<"apps_appEncryptionDeclarations_getToManyRelated">;
  "apps_appEncryptionDeclarations_getToManyRelationship": AppStoreFullApiOperationInput<"apps_appEncryptionDeclarations_getToManyRelationship">;
  "apps_appEvents_getToManyRelated": AppStoreFullApiOperationInput<"apps_appEvents_getToManyRelated">;
  "apps_appEvents_getToManyRelationship": AppStoreFullApiOperationInput<"apps_appEvents_getToManyRelationship">;
  "apps_appInfos_getToManyRelated": AppStoreFullApiOperationInput<"apps_appInfos_getToManyRelated">;
  "apps_appInfos_getToManyRelationship": AppStoreFullApiOperationInput<"apps_appInfos_getToManyRelationship">;
  "apps_appPricePoints_getToManyRelated": AppStoreFullApiOperationInput<"apps_appPricePoints_getToManyRelated">;
  "apps_appPricePoints_getToManyRelationship": AppStoreFullApiOperationInput<"apps_appPricePoints_getToManyRelationship">;
  "apps_appPriceSchedule_getToOneRelated": AppStoreFullApiOperationInput<"apps_appPriceSchedule_getToOneRelated">;
  "apps_appPriceSchedule_getToOneRelationship": AppStoreFullApiOperationInput<"apps_appPriceSchedule_getToOneRelationship">;
  "apps_appStoreVersionExperimentsV2_getToManyRelated": AppStoreFullApiOperationInput<"apps_appStoreVersionExperimentsV2_getToManyRelated">;
  "apps_appStoreVersionExperimentsV2_getToManyRelationship": AppStoreFullApiOperationInput<"apps_appStoreVersionExperimentsV2_getToManyRelationship">;
  "apps_appStoreVersions_getToManyRelated": AppStoreFullApiOperationInput<"apps_appStoreVersions_getToManyRelated">;
  "apps_appStoreVersions_getToManyRelationship": AppStoreFullApiOperationInput<"apps_appStoreVersions_getToManyRelationship">;
  "apps_appTags_getToManyRelated": AppStoreFullApiOperationInput<"apps_appTags_getToManyRelated">;
  "apps_appTags_getToManyRelationship": AppStoreFullApiOperationInput<"apps_appTags_getToManyRelationship">;
  "apps_backgroundAssets_getToManyRelated": AppStoreFullApiOperationInput<"apps_backgroundAssets_getToManyRelated">;
  "apps_backgroundAssets_getToManyRelationship": AppStoreFullApiOperationInput<"apps_backgroundAssets_getToManyRelationship">;
  "apps_betaAppLocalizations_getToManyRelated": AppStoreFullApiOperationInput<"apps_betaAppLocalizations_getToManyRelated">;
  "apps_betaAppLocalizations_getToManyRelationship": AppStoreFullApiOperationInput<"apps_betaAppLocalizations_getToManyRelationship">;
  "apps_betaAppReviewDetail_getToOneRelated": AppStoreFullApiOperationInput<"apps_betaAppReviewDetail_getToOneRelated">;
  "apps_betaAppReviewDetail_getToOneRelationship": AppStoreFullApiOperationInput<"apps_betaAppReviewDetail_getToOneRelationship">;
  "apps_betaFeedbackCrashSubmissions_getToManyRelated": AppStoreFullApiOperationInput<"apps_betaFeedbackCrashSubmissions_getToManyRelated">;
  "apps_betaFeedbackCrashSubmissions_getToManyRelationship": AppStoreFullApiOperationInput<"apps_betaFeedbackCrashSubmissions_getToManyRelationship">;
  "apps_betaFeedbackScreenshotSubmissions_getToManyRelated": AppStoreFullApiOperationInput<"apps_betaFeedbackScreenshotSubmissions_getToManyRelated">;
  "apps_betaFeedbackScreenshotSubmissions_getToManyRelationship": AppStoreFullApiOperationInput<"apps_betaFeedbackScreenshotSubmissions_getToManyRelationship">;
  "apps_betaGroups_getToManyRelated": AppStoreFullApiOperationInput<"apps_betaGroups_getToManyRelated">;
  "apps_betaGroups_getToManyRelationship": AppStoreFullApiOperationInput<"apps_betaGroups_getToManyRelationship">;
  "apps_betaLicenseAgreement_getToOneRelated": AppStoreFullApiOperationInput<"apps_betaLicenseAgreement_getToOneRelated">;
  "apps_betaLicenseAgreement_getToOneRelationship": AppStoreFullApiOperationInput<"apps_betaLicenseAgreement_getToOneRelationship">;
  "apps_betaTesters_deleteToManyRelationship": AppStoreFullApiOperationInput<"apps_betaTesters_deleteToManyRelationship">;
  "apps_betaTesterUsages_getMetrics": AppStoreFullApiOperationInput<"apps_betaTesterUsages_getMetrics">;
  "apps_builds_getToManyRelated": AppStoreFullApiOperationInput<"apps_builds_getToManyRelated">;
  "apps_builds_getToManyRelationship": AppStoreFullApiOperationInput<"apps_builds_getToManyRelationship">;
  "apps_buildUploads_getToManyRelated": AppStoreFullApiOperationInput<"apps_buildUploads_getToManyRelated">;
  "apps_buildUploads_getToManyRelationship": AppStoreFullApiOperationInput<"apps_buildUploads_getToManyRelationship">;
  "apps_ciProduct_getToOneRelated": AppStoreFullApiOperationInput<"apps_ciProduct_getToOneRelated">;
  "apps_ciProduct_getToOneRelationship": AppStoreFullApiOperationInput<"apps_ciProduct_getToOneRelationship">;
  "apps_customerReviews_getToManyRelated": AppStoreFullApiOperationInput<"apps_customerReviews_getToManyRelated">;
  "apps_customerReviews_getToManyRelationship": AppStoreFullApiOperationInput<"apps_customerReviews_getToManyRelationship">;
  "apps_customerReviewSummarizations_getToManyRelated": AppStoreFullApiOperationInput<"apps_customerReviewSummarizations_getToManyRelated">;
  "apps_endUserLicenseAgreement_getToOneRelated": AppStoreFullApiOperationInput<"apps_endUserLicenseAgreement_getToOneRelated">;
  "apps_endUserLicenseAgreement_getToOneRelationship": AppStoreFullApiOperationInput<"apps_endUserLicenseAgreement_getToOneRelationship">;
  "apps_gameCenterDetail_getToOneRelated": AppStoreFullApiOperationInput<"apps_gameCenterDetail_getToOneRelated">;
  "apps_gameCenterDetail_getToOneRelationship": AppStoreFullApiOperationInput<"apps_gameCenterDetail_getToOneRelationship">;
  "apps_gameCenterEnabledVersions_getToManyRelated": AppStoreFullApiOperationInput<"apps_gameCenterEnabledVersions_getToManyRelated">;
  "apps_gameCenterEnabledVersions_getToManyRelationship": AppStoreFullApiOperationInput<"apps_gameCenterEnabledVersions_getToManyRelationship">;
  "apps_getCollection": AppStoreFullApiOperationInput<"apps_getCollection">;
  "apps_getInstance": AppStoreFullApiOperationInput<"apps_getInstance">;
  "apps_inAppPurchases_getToManyRelated": AppStoreFullApiOperationInput<"apps_inAppPurchases_getToManyRelated">;
  "apps_inAppPurchases_getToManyRelationship": AppStoreFullApiOperationInput<"apps_inAppPurchases_getToManyRelationship">;
  "apps_inAppPurchasesV2_getToManyRelated": AppStoreFullApiOperationInput<"apps_inAppPurchasesV2_getToManyRelated">;
  "apps_inAppPurchasesV2_getToManyRelationship": AppStoreFullApiOperationInput<"apps_inAppPurchasesV2_getToManyRelationship">;
  "apps_marketplaceSearchDetail_getToOneRelated": AppStoreFullApiOperationInput<"apps_marketplaceSearchDetail_getToOneRelated">;
  "apps_marketplaceSearchDetail_getToOneRelationship": AppStoreFullApiOperationInput<"apps_marketplaceSearchDetail_getToOneRelationship">;
  "apps_perfPowerMetrics_getToManyRelated": AppStoreFullApiOperationInput<"apps_perfPowerMetrics_getToManyRelated">;
  "apps_preReleaseVersions_getToManyRelated": AppStoreFullApiOperationInput<"apps_preReleaseVersions_getToManyRelated">;
  "apps_preReleaseVersions_getToManyRelationship": AppStoreFullApiOperationInput<"apps_preReleaseVersions_getToManyRelationship">;
  "apps_promotedPurchases_getToManyRelated": AppStoreFullApiOperationInput<"apps_promotedPurchases_getToManyRelated">;
  "apps_promotedPurchases_getToManyRelationship": AppStoreFullApiOperationInput<"apps_promotedPurchases_getToManyRelationship">;
  "apps_promotedPurchases_replaceToManyRelationship": AppStoreFullApiOperationInput<"apps_promotedPurchases_replaceToManyRelationship">;
  "apps_reviewSubmissions_getToManyRelated": AppStoreFullApiOperationInput<"apps_reviewSubmissions_getToManyRelated">;
  "apps_reviewSubmissions_getToManyRelationship": AppStoreFullApiOperationInput<"apps_reviewSubmissions_getToManyRelationship">;
  "apps_searchKeywords_getToManyRelated": AppStoreFullApiOperationInput<"apps_searchKeywords_getToManyRelated">;
  "apps_searchKeywords_getToManyRelationship": AppStoreFullApiOperationInput<"apps_searchKeywords_getToManyRelationship">;
  "apps_subscriptionGracePeriod_getToOneRelated": AppStoreFullApiOperationInput<"apps_subscriptionGracePeriod_getToOneRelated">;
}

export interface AppStoreFullApiApps01GeneratedClient {
  AppsAccessibilityDeclarationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_accessibilityDeclarations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_accessibilityDeclarations_getToManyRelated"]>;
  AppsAccessibilityDeclarationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_accessibilityDeclarations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_accessibilityDeclarations_getToManyRelationship"]>;
  AppsAlternativeDistributionKeyGetToOneRelated(...args: AppStoreFullApiOperationArgs<"apps_alternativeDistributionKey_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_alternativeDistributionKey_getToOneRelated"]>;
  AppsAlternativeDistributionKeyGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"apps_alternativeDistributionKey_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_alternativeDistributionKey_getToOneRelationship"]>;
  AppsAnalyticsReportRequestsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_analyticsReportRequests_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_analyticsReportRequests_getToManyRelated"]>;
  AppsAnalyticsReportRequestsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_analyticsReportRequests_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_analyticsReportRequests_getToManyRelationship"]>;
  AppsAndroidToIosAppMappingDetailsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_androidToIosAppMappingDetails_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_androidToIosAppMappingDetails_getToManyRelated"]>;
  AppsAndroidToIosAppMappingDetailsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_androidToIosAppMappingDetails_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_androidToIosAppMappingDetails_getToManyRelationship"]>;
  AppsAppAvailabilityV2GetToOneRelated(...args: AppStoreFullApiOperationArgs<"apps_appAvailabilityV2_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_appAvailabilityV2_getToOneRelated"]>;
  AppsAppAvailabilityV2GetToOneRelationship(...args: AppStoreFullApiOperationArgs<"apps_appAvailabilityV2_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_appAvailabilityV2_getToOneRelationship"]>;
  AppsAppClipsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_appClips_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_appClips_getToManyRelated"]>;
  AppsAppClipsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_appClips_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_appClips_getToManyRelationship"]>;
  AppsAppCustomProductPagesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_appCustomProductPages_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_appCustomProductPages_getToManyRelated"]>;
  AppsAppCustomProductPagesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_appCustomProductPages_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_appCustomProductPages_getToManyRelationship"]>;
  AppsAppEncryptionDeclarationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_appEncryptionDeclarations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_appEncryptionDeclarations_getToManyRelated"]>;
  AppsAppEncryptionDeclarationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_appEncryptionDeclarations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_appEncryptionDeclarations_getToManyRelationship"]>;
  AppsAppEventsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_appEvents_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_appEvents_getToManyRelated"]>;
  AppsAppEventsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_appEvents_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_appEvents_getToManyRelationship"]>;
  AppsAppInfosGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_appInfos_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_appInfos_getToManyRelated"]>;
  AppsAppInfosGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_appInfos_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_appInfos_getToManyRelationship"]>;
  AppsAppPricePointsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_appPricePoints_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_appPricePoints_getToManyRelated"]>;
  AppsAppPricePointsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_appPricePoints_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_appPricePoints_getToManyRelationship"]>;
  AppsAppPriceScheduleGetToOneRelated(...args: AppStoreFullApiOperationArgs<"apps_appPriceSchedule_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_appPriceSchedule_getToOneRelated"]>;
  AppsAppPriceScheduleGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"apps_appPriceSchedule_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_appPriceSchedule_getToOneRelationship"]>;
  AppsAppStoreVersionExperimentsV2GetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_appStoreVersionExperimentsV2_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_appStoreVersionExperimentsV2_getToManyRelated"]>;
  AppsAppStoreVersionExperimentsV2GetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_appStoreVersionExperimentsV2_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_appStoreVersionExperimentsV2_getToManyRelationship"]>;
  AppsAppStoreVersionsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_appStoreVersions_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_appStoreVersions_getToManyRelated"]>;
  AppsAppStoreVersionsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_appStoreVersions_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_appStoreVersions_getToManyRelationship"]>;
  AppsAppTagsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_appTags_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_appTags_getToManyRelated"]>;
  AppsAppTagsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_appTags_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_appTags_getToManyRelationship"]>;
  AppsBackgroundAssetsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_backgroundAssets_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_backgroundAssets_getToManyRelated"]>;
  AppsBackgroundAssetsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_backgroundAssets_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_backgroundAssets_getToManyRelationship"]>;
  AppsBetaAppLocalizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_betaAppLocalizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_betaAppLocalizations_getToManyRelated"]>;
  AppsBetaAppLocalizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_betaAppLocalizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_betaAppLocalizations_getToManyRelationship"]>;
  AppsBetaAppReviewDetailGetToOneRelated(...args: AppStoreFullApiOperationArgs<"apps_betaAppReviewDetail_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_betaAppReviewDetail_getToOneRelated"]>;
  AppsBetaAppReviewDetailGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"apps_betaAppReviewDetail_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_betaAppReviewDetail_getToOneRelationship"]>;
  AppsBetaFeedbackCrashSubmissionsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_betaFeedbackCrashSubmissions_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_betaFeedbackCrashSubmissions_getToManyRelated"]>;
  AppsBetaFeedbackCrashSubmissionsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_betaFeedbackCrashSubmissions_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_betaFeedbackCrashSubmissions_getToManyRelationship"]>;
  AppsBetaFeedbackScreenshotSubmissionsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_betaFeedbackScreenshotSubmissions_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_betaFeedbackScreenshotSubmissions_getToManyRelated"]>;
  AppsBetaFeedbackScreenshotSubmissionsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_betaFeedbackScreenshotSubmissions_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_betaFeedbackScreenshotSubmissions_getToManyRelationship"]>;
  AppsBetaGroupsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_betaGroups_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_betaGroups_getToManyRelated"]>;
  AppsBetaGroupsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_betaGroups_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_betaGroups_getToManyRelationship"]>;
  AppsBetaLicenseAgreementGetToOneRelated(...args: AppStoreFullApiOperationArgs<"apps_betaLicenseAgreement_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_betaLicenseAgreement_getToOneRelated"]>;
  AppsBetaLicenseAgreementGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"apps_betaLicenseAgreement_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_betaLicenseAgreement_getToOneRelationship"]>;
  AppsBetaTestersDeleteToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_betaTesters_deleteToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_betaTesters_deleteToManyRelationship"]>;
  AppsBetaTesterUsagesGetMetrics(...args: AppStoreFullApiOperationArgs<"apps_betaTesterUsages_getMetrics">): Promise<AppStoreFullApiOperationResponseMap["apps_betaTesterUsages_getMetrics"]>;
  AppsBuildsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_builds_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_builds_getToManyRelated"]>;
  AppsBuildsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_builds_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_builds_getToManyRelationship"]>;
  AppsBuildUploadsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_buildUploads_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_buildUploads_getToManyRelated"]>;
  AppsBuildUploadsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_buildUploads_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_buildUploads_getToManyRelationship"]>;
  AppsCiProductGetToOneRelated(...args: AppStoreFullApiOperationArgs<"apps_ciProduct_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_ciProduct_getToOneRelated"]>;
  AppsCiProductGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"apps_ciProduct_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_ciProduct_getToOneRelationship"]>;
  AppsCustomerReviewsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_customerReviews_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_customerReviews_getToManyRelated"]>;
  AppsCustomerReviewsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_customerReviews_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_customerReviews_getToManyRelationship"]>;
  AppsCustomerReviewSummarizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_customerReviewSummarizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_customerReviewSummarizations_getToManyRelated"]>;
  AppsEndUserLicenseAgreementGetToOneRelated(...args: AppStoreFullApiOperationArgs<"apps_endUserLicenseAgreement_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_endUserLicenseAgreement_getToOneRelated"]>;
  AppsEndUserLicenseAgreementGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"apps_endUserLicenseAgreement_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_endUserLicenseAgreement_getToOneRelationship"]>;
  AppsGameCenterDetailGetToOneRelated(...args: AppStoreFullApiOperationArgs<"apps_gameCenterDetail_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_gameCenterDetail_getToOneRelated"]>;
  AppsGameCenterDetailGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"apps_gameCenterDetail_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_gameCenterDetail_getToOneRelationship"]>;
  AppsGameCenterEnabledVersionsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_gameCenterEnabledVersions_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_gameCenterEnabledVersions_getToManyRelated"]>;
  AppsGameCenterEnabledVersionsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_gameCenterEnabledVersions_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_gameCenterEnabledVersions_getToManyRelationship"]>;
  AppsGetCollection(...args: AppStoreFullApiOperationArgs<"apps_getCollection">): Promise<AppStoreFullApiOperationResponseMap["apps_getCollection"]>;
  AppsGetInstance(...args: AppStoreFullApiOperationArgs<"apps_getInstance">): Promise<AppStoreFullApiOperationResponseMap["apps_getInstance"]>;
  AppsInAppPurchasesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_inAppPurchases_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_inAppPurchases_getToManyRelated"]>;
  AppsInAppPurchasesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_inAppPurchases_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_inAppPurchases_getToManyRelationship"]>;
  AppsInAppPurchasesV2GetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_inAppPurchasesV2_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_inAppPurchasesV2_getToManyRelated"]>;
  AppsInAppPurchasesV2GetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_inAppPurchasesV2_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_inAppPurchasesV2_getToManyRelationship"]>;
  AppsMarketplaceSearchDetailGetToOneRelated(...args: AppStoreFullApiOperationArgs<"apps_marketplaceSearchDetail_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_marketplaceSearchDetail_getToOneRelated"]>;
  AppsMarketplaceSearchDetailGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"apps_marketplaceSearchDetail_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_marketplaceSearchDetail_getToOneRelationship"]>;
  AppsPerfPowerMetricsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_perfPowerMetrics_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_perfPowerMetrics_getToManyRelated"]>;
  AppsPreReleaseVersionsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_preReleaseVersions_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_preReleaseVersions_getToManyRelated"]>;
  AppsPreReleaseVersionsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_preReleaseVersions_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_preReleaseVersions_getToManyRelationship"]>;
  AppsPromotedPurchasesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_promotedPurchases_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_promotedPurchases_getToManyRelated"]>;
  AppsPromotedPurchasesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_promotedPurchases_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_promotedPurchases_getToManyRelationship"]>;
  AppsPromotedPurchasesReplaceToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_promotedPurchases_replaceToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_promotedPurchases_replaceToManyRelationship"]>;
  AppsReviewSubmissionsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_reviewSubmissions_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_reviewSubmissions_getToManyRelated"]>;
  AppsReviewSubmissionsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_reviewSubmissions_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_reviewSubmissions_getToManyRelationship"]>;
  AppsSearchKeywordsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"apps_searchKeywords_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_searchKeywords_getToManyRelated"]>;
  AppsSearchKeywordsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"apps_searchKeywords_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["apps_searchKeywords_getToManyRelationship"]>;
  AppsSubscriptionGracePeriodGetToOneRelated(...args: AppStoreFullApiOperationArgs<"apps_subscriptionGracePeriod_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["apps_subscriptionGracePeriod_getToOneRelated"]>;
}

export const AppStoreFullApiApps01GeneratedFunctionNames = [
  "AppsAccessibilityDeclarationsGetToManyRelated",
  "AppsAccessibilityDeclarationsGetToManyRelationship",
  "AppsAlternativeDistributionKeyGetToOneRelated",
  "AppsAlternativeDistributionKeyGetToOneRelationship",
  "AppsAnalyticsReportRequestsGetToManyRelated",
  "AppsAnalyticsReportRequestsGetToManyRelationship",
  "AppsAndroidToIosAppMappingDetailsGetToManyRelated",
  "AppsAndroidToIosAppMappingDetailsGetToManyRelationship",
  "AppsAppAvailabilityV2GetToOneRelated",
  "AppsAppAvailabilityV2GetToOneRelationship",
  "AppsAppClipsGetToManyRelated",
  "AppsAppClipsGetToManyRelationship",
  "AppsAppCustomProductPagesGetToManyRelated",
  "AppsAppCustomProductPagesGetToManyRelationship",
  "AppsAppEncryptionDeclarationsGetToManyRelated",
  "AppsAppEncryptionDeclarationsGetToManyRelationship",
  "AppsAppEventsGetToManyRelated",
  "AppsAppEventsGetToManyRelationship",
  "AppsAppInfosGetToManyRelated",
  "AppsAppInfosGetToManyRelationship",
  "AppsAppPricePointsGetToManyRelated",
  "AppsAppPricePointsGetToManyRelationship",
  "AppsAppPriceScheduleGetToOneRelated",
  "AppsAppPriceScheduleGetToOneRelationship",
  "AppsAppStoreVersionExperimentsV2GetToManyRelated",
  "AppsAppStoreVersionExperimentsV2GetToManyRelationship",
  "AppsAppStoreVersionsGetToManyRelated",
  "AppsAppStoreVersionsGetToManyRelationship",
  "AppsAppTagsGetToManyRelated",
  "AppsAppTagsGetToManyRelationship",
  "AppsBackgroundAssetsGetToManyRelated",
  "AppsBackgroundAssetsGetToManyRelationship",
  "AppsBetaAppLocalizationsGetToManyRelated",
  "AppsBetaAppLocalizationsGetToManyRelationship",
  "AppsBetaAppReviewDetailGetToOneRelated",
  "AppsBetaAppReviewDetailGetToOneRelationship",
  "AppsBetaFeedbackCrashSubmissionsGetToManyRelated",
  "AppsBetaFeedbackCrashSubmissionsGetToManyRelationship",
  "AppsBetaFeedbackScreenshotSubmissionsGetToManyRelated",
  "AppsBetaFeedbackScreenshotSubmissionsGetToManyRelationship",
  "AppsBetaGroupsGetToManyRelated",
  "AppsBetaGroupsGetToManyRelationship",
  "AppsBetaLicenseAgreementGetToOneRelated",
  "AppsBetaLicenseAgreementGetToOneRelationship",
  "AppsBetaTestersDeleteToManyRelationship",
  "AppsBetaTesterUsagesGetMetrics",
  "AppsBuildsGetToManyRelated",
  "AppsBuildsGetToManyRelationship",
  "AppsBuildUploadsGetToManyRelated",
  "AppsBuildUploadsGetToManyRelationship",
  "AppsCiProductGetToOneRelated",
  "AppsCiProductGetToOneRelationship",
  "AppsCustomerReviewsGetToManyRelated",
  "AppsCustomerReviewsGetToManyRelationship",
  "AppsCustomerReviewSummarizationsGetToManyRelated",
  "AppsEndUserLicenseAgreementGetToOneRelated",
  "AppsEndUserLicenseAgreementGetToOneRelationship",
  "AppsGameCenterDetailGetToOneRelated",
  "AppsGameCenterDetailGetToOneRelationship",
  "AppsGameCenterEnabledVersionsGetToManyRelated",
  "AppsGameCenterEnabledVersionsGetToManyRelationship",
  "AppsGetCollection",
  "AppsGetInstance",
  "AppsInAppPurchasesGetToManyRelated",
  "AppsInAppPurchasesGetToManyRelationship",
  "AppsInAppPurchasesV2GetToManyRelated",
  "AppsInAppPurchasesV2GetToManyRelationship",
  "AppsMarketplaceSearchDetailGetToOneRelated",
  "AppsMarketplaceSearchDetailGetToOneRelationship",
  "AppsPerfPowerMetricsGetToManyRelated",
  "AppsPreReleaseVersionsGetToManyRelated",
  "AppsPreReleaseVersionsGetToManyRelationship",
  "AppsPromotedPurchasesGetToManyRelated",
  "AppsPromotedPurchasesGetToManyRelationship",
  "AppsPromotedPurchasesReplaceToManyRelationship",
  "AppsReviewSubmissionsGetToManyRelated",
  "AppsReviewSubmissionsGetToManyRelationship",
  "AppsSearchKeywordsGetToManyRelated",
  "AppsSearchKeywordsGetToManyRelationship",
  "AppsSubscriptionGracePeriodGetToOneRelated"
] as const satisfies readonly (keyof AppStoreFullApiApps01GeneratedClient)[];

export function createAppStoreFullApiApps01GeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiApps01GeneratedClient {
  return {
    AppsAccessibilityDeclarationsGetToManyRelated: (...args) => callOperation("apps_accessibilityDeclarations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_accessibilityDeclarations_getToManyRelated">)),
    AppsAccessibilityDeclarationsGetToManyRelationship: (...args) => callOperation("apps_accessibilityDeclarations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_accessibilityDeclarations_getToManyRelationship">)),
    AppsAlternativeDistributionKeyGetToOneRelated: (...args) => callOperation("apps_alternativeDistributionKey_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"apps_alternativeDistributionKey_getToOneRelated">)),
    AppsAlternativeDistributionKeyGetToOneRelationship: (...args) => callOperation("apps_alternativeDistributionKey_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_alternativeDistributionKey_getToOneRelationship">)),
    AppsAnalyticsReportRequestsGetToManyRelated: (...args) => callOperation("apps_analyticsReportRequests_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_analyticsReportRequests_getToManyRelated">)),
    AppsAnalyticsReportRequestsGetToManyRelationship: (...args) => callOperation("apps_analyticsReportRequests_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_analyticsReportRequests_getToManyRelationship">)),
    AppsAndroidToIosAppMappingDetailsGetToManyRelated: (...args) => callOperation("apps_androidToIosAppMappingDetails_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_androidToIosAppMappingDetails_getToManyRelated">)),
    AppsAndroidToIosAppMappingDetailsGetToManyRelationship: (...args) => callOperation("apps_androidToIosAppMappingDetails_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_androidToIosAppMappingDetails_getToManyRelationship">)),
    AppsAppAvailabilityV2GetToOneRelated: (...args) => callOperation("apps_appAvailabilityV2_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"apps_appAvailabilityV2_getToOneRelated">)),
    AppsAppAvailabilityV2GetToOneRelationship: (...args) => callOperation("apps_appAvailabilityV2_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_appAvailabilityV2_getToOneRelationship">)),
    AppsAppClipsGetToManyRelated: (...args) => callOperation("apps_appClips_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_appClips_getToManyRelated">)),
    AppsAppClipsGetToManyRelationship: (...args) => callOperation("apps_appClips_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_appClips_getToManyRelationship">)),
    AppsAppCustomProductPagesGetToManyRelated: (...args) => callOperation("apps_appCustomProductPages_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_appCustomProductPages_getToManyRelated">)),
    AppsAppCustomProductPagesGetToManyRelationship: (...args) => callOperation("apps_appCustomProductPages_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_appCustomProductPages_getToManyRelationship">)),
    AppsAppEncryptionDeclarationsGetToManyRelated: (...args) => callOperation("apps_appEncryptionDeclarations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_appEncryptionDeclarations_getToManyRelated">)),
    AppsAppEncryptionDeclarationsGetToManyRelationship: (...args) => callOperation("apps_appEncryptionDeclarations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_appEncryptionDeclarations_getToManyRelationship">)),
    AppsAppEventsGetToManyRelated: (...args) => callOperation("apps_appEvents_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_appEvents_getToManyRelated">)),
    AppsAppEventsGetToManyRelationship: (...args) => callOperation("apps_appEvents_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_appEvents_getToManyRelationship">)),
    AppsAppInfosGetToManyRelated: (...args) => callOperation("apps_appInfos_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_appInfos_getToManyRelated">)),
    AppsAppInfosGetToManyRelationship: (...args) => callOperation("apps_appInfos_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_appInfos_getToManyRelationship">)),
    AppsAppPricePointsGetToManyRelated: (...args) => callOperation("apps_appPricePoints_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_appPricePoints_getToManyRelated">)),
    AppsAppPricePointsGetToManyRelationship: (...args) => callOperation("apps_appPricePoints_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_appPricePoints_getToManyRelationship">)),
    AppsAppPriceScheduleGetToOneRelated: (...args) => callOperation("apps_appPriceSchedule_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"apps_appPriceSchedule_getToOneRelated">)),
    AppsAppPriceScheduleGetToOneRelationship: (...args) => callOperation("apps_appPriceSchedule_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_appPriceSchedule_getToOneRelationship">)),
    AppsAppStoreVersionExperimentsV2GetToManyRelated: (...args) => callOperation("apps_appStoreVersionExperimentsV2_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_appStoreVersionExperimentsV2_getToManyRelated">)),
    AppsAppStoreVersionExperimentsV2GetToManyRelationship: (...args) => callOperation("apps_appStoreVersionExperimentsV2_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_appStoreVersionExperimentsV2_getToManyRelationship">)),
    AppsAppStoreVersionsGetToManyRelated: (...args) => callOperation("apps_appStoreVersions_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_appStoreVersions_getToManyRelated">)),
    AppsAppStoreVersionsGetToManyRelationship: (...args) => callOperation("apps_appStoreVersions_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_appStoreVersions_getToManyRelationship">)),
    AppsAppTagsGetToManyRelated: (...args) => callOperation("apps_appTags_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_appTags_getToManyRelated">)),
    AppsAppTagsGetToManyRelationship: (...args) => callOperation("apps_appTags_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_appTags_getToManyRelationship">)),
    AppsBackgroundAssetsGetToManyRelated: (...args) => callOperation("apps_backgroundAssets_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_backgroundAssets_getToManyRelated">)),
    AppsBackgroundAssetsGetToManyRelationship: (...args) => callOperation("apps_backgroundAssets_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_backgroundAssets_getToManyRelationship">)),
    AppsBetaAppLocalizationsGetToManyRelated: (...args) => callOperation("apps_betaAppLocalizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_betaAppLocalizations_getToManyRelated">)),
    AppsBetaAppLocalizationsGetToManyRelationship: (...args) => callOperation("apps_betaAppLocalizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_betaAppLocalizations_getToManyRelationship">)),
    AppsBetaAppReviewDetailGetToOneRelated: (...args) => callOperation("apps_betaAppReviewDetail_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"apps_betaAppReviewDetail_getToOneRelated">)),
    AppsBetaAppReviewDetailGetToOneRelationship: (...args) => callOperation("apps_betaAppReviewDetail_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_betaAppReviewDetail_getToOneRelationship">)),
    AppsBetaFeedbackCrashSubmissionsGetToManyRelated: (...args) => callOperation("apps_betaFeedbackCrashSubmissions_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_betaFeedbackCrashSubmissions_getToManyRelated">)),
    AppsBetaFeedbackCrashSubmissionsGetToManyRelationship: (...args) => callOperation("apps_betaFeedbackCrashSubmissions_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_betaFeedbackCrashSubmissions_getToManyRelationship">)),
    AppsBetaFeedbackScreenshotSubmissionsGetToManyRelated: (...args) => callOperation("apps_betaFeedbackScreenshotSubmissions_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_betaFeedbackScreenshotSubmissions_getToManyRelated">)),
    AppsBetaFeedbackScreenshotSubmissionsGetToManyRelationship: (...args) => callOperation("apps_betaFeedbackScreenshotSubmissions_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_betaFeedbackScreenshotSubmissions_getToManyRelationship">)),
    AppsBetaGroupsGetToManyRelated: (...args) => callOperation("apps_betaGroups_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_betaGroups_getToManyRelated">)),
    AppsBetaGroupsGetToManyRelationship: (...args) => callOperation("apps_betaGroups_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_betaGroups_getToManyRelationship">)),
    AppsBetaLicenseAgreementGetToOneRelated: (...args) => callOperation("apps_betaLicenseAgreement_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"apps_betaLicenseAgreement_getToOneRelated">)),
    AppsBetaLicenseAgreementGetToOneRelationship: (...args) => callOperation("apps_betaLicenseAgreement_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_betaLicenseAgreement_getToOneRelationship">)),
    AppsBetaTestersDeleteToManyRelationship: (...args) => callOperation("apps_betaTesters_deleteToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_betaTesters_deleteToManyRelationship">)),
    AppsBetaTesterUsagesGetMetrics: (...args) => callOperation("apps_betaTesterUsages_getMetrics", ...(args as AppStoreFullApiOperationArgs<"apps_betaTesterUsages_getMetrics">)),
    AppsBuildsGetToManyRelated: (...args) => callOperation("apps_builds_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_builds_getToManyRelated">)),
    AppsBuildsGetToManyRelationship: (...args) => callOperation("apps_builds_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_builds_getToManyRelationship">)),
    AppsBuildUploadsGetToManyRelated: (...args) => callOperation("apps_buildUploads_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_buildUploads_getToManyRelated">)),
    AppsBuildUploadsGetToManyRelationship: (...args) => callOperation("apps_buildUploads_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_buildUploads_getToManyRelationship">)),
    AppsCiProductGetToOneRelated: (...args) => callOperation("apps_ciProduct_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"apps_ciProduct_getToOneRelated">)),
    AppsCiProductGetToOneRelationship: (...args) => callOperation("apps_ciProduct_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_ciProduct_getToOneRelationship">)),
    AppsCustomerReviewsGetToManyRelated: (...args) => callOperation("apps_customerReviews_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_customerReviews_getToManyRelated">)),
    AppsCustomerReviewsGetToManyRelationship: (...args) => callOperation("apps_customerReviews_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_customerReviews_getToManyRelationship">)),
    AppsCustomerReviewSummarizationsGetToManyRelated: (...args) => callOperation("apps_customerReviewSummarizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_customerReviewSummarizations_getToManyRelated">)),
    AppsEndUserLicenseAgreementGetToOneRelated: (...args) => callOperation("apps_endUserLicenseAgreement_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"apps_endUserLicenseAgreement_getToOneRelated">)),
    AppsEndUserLicenseAgreementGetToOneRelationship: (...args) => callOperation("apps_endUserLicenseAgreement_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_endUserLicenseAgreement_getToOneRelationship">)),
    AppsGameCenterDetailGetToOneRelated: (...args) => callOperation("apps_gameCenterDetail_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"apps_gameCenterDetail_getToOneRelated">)),
    AppsGameCenterDetailGetToOneRelationship: (...args) => callOperation("apps_gameCenterDetail_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_gameCenterDetail_getToOneRelationship">)),
    AppsGameCenterEnabledVersionsGetToManyRelated: (...args) => callOperation("apps_gameCenterEnabledVersions_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_gameCenterEnabledVersions_getToManyRelated">)),
    AppsGameCenterEnabledVersionsGetToManyRelationship: (...args) => callOperation("apps_gameCenterEnabledVersions_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_gameCenterEnabledVersions_getToManyRelationship">)),
    AppsGetCollection: (...args) => callOperation("apps_getCollection", ...(args as AppStoreFullApiOperationArgs<"apps_getCollection">)),
    AppsGetInstance: (...args) => callOperation("apps_getInstance", ...(args as AppStoreFullApiOperationArgs<"apps_getInstance">)),
    AppsInAppPurchasesGetToManyRelated: (...args) => callOperation("apps_inAppPurchases_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_inAppPurchases_getToManyRelated">)),
    AppsInAppPurchasesGetToManyRelationship: (...args) => callOperation("apps_inAppPurchases_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_inAppPurchases_getToManyRelationship">)),
    AppsInAppPurchasesV2GetToManyRelated: (...args) => callOperation("apps_inAppPurchasesV2_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_inAppPurchasesV2_getToManyRelated">)),
    AppsInAppPurchasesV2GetToManyRelationship: (...args) => callOperation("apps_inAppPurchasesV2_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_inAppPurchasesV2_getToManyRelationship">)),
    AppsMarketplaceSearchDetailGetToOneRelated: (...args) => callOperation("apps_marketplaceSearchDetail_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"apps_marketplaceSearchDetail_getToOneRelated">)),
    AppsMarketplaceSearchDetailGetToOneRelationship: (...args) => callOperation("apps_marketplaceSearchDetail_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_marketplaceSearchDetail_getToOneRelationship">)),
    AppsPerfPowerMetricsGetToManyRelated: (...args) => callOperation("apps_perfPowerMetrics_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_perfPowerMetrics_getToManyRelated">)),
    AppsPreReleaseVersionsGetToManyRelated: (...args) => callOperation("apps_preReleaseVersions_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_preReleaseVersions_getToManyRelated">)),
    AppsPreReleaseVersionsGetToManyRelationship: (...args) => callOperation("apps_preReleaseVersions_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_preReleaseVersions_getToManyRelationship">)),
    AppsPromotedPurchasesGetToManyRelated: (...args) => callOperation("apps_promotedPurchases_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_promotedPurchases_getToManyRelated">)),
    AppsPromotedPurchasesGetToManyRelationship: (...args) => callOperation("apps_promotedPurchases_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_promotedPurchases_getToManyRelationship">)),
    AppsPromotedPurchasesReplaceToManyRelationship: (...args) => callOperation("apps_promotedPurchases_replaceToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_promotedPurchases_replaceToManyRelationship">)),
    AppsReviewSubmissionsGetToManyRelated: (...args) => callOperation("apps_reviewSubmissions_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_reviewSubmissions_getToManyRelated">)),
    AppsReviewSubmissionsGetToManyRelationship: (...args) => callOperation("apps_reviewSubmissions_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_reviewSubmissions_getToManyRelationship">)),
    AppsSearchKeywordsGetToManyRelated: (...args) => callOperation("apps_searchKeywords_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"apps_searchKeywords_getToManyRelated">)),
    AppsSearchKeywordsGetToManyRelationship: (...args) => callOperation("apps_searchKeywords_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"apps_searchKeywords_getToManyRelationship">)),
    AppsSubscriptionGracePeriodGetToOneRelated: (...args) => callOperation("apps_subscriptionGracePeriod_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"apps_subscriptionGracePeriod_getToOneRelated">)),
  };
}
