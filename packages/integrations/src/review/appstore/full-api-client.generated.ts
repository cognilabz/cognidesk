// Generated from App Store Connect OpenAPI (https://developer.apple.com/sample-code/app-store-connect/app-store-connect-openapi-specification.zip).
// Do not edit by hand; run scripts/generate-appstore-full-api.mjs after checking upstream docs.

import type { AppStoreOperationRequestInput } from "./index.js";
import type {
  AppStoreFullApiOperationQueryMap,
  AppStoreFullApiOperationQueryRequiredMap,
  AppStoreFullApiOperationRequestBodyMap,
  AppStoreFullApiOperationRequestBodyRequiredMap,
  AppStoreFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createAppStoreFullApiAccessibilityDeclarationsGeneratedClient,
  AppStoreFullApiAccessibilityDeclarationsGeneratedFunctionNames,
  type AppStoreFullApiAccessibilityDeclarationsGeneratedClient,
  type AppStoreFullApiAccessibilityDeclarationsOperationPathParamMap,
  type AppStoreFullApiAccessibilityDeclarationsOperationRequestMap,
} from "./full-api.generated/client/accessibility-declarations-chunk.generated.js";
import {
  createAppStoreFullApiActorsGeneratedClient,
  AppStoreFullApiActorsGeneratedFunctionNames,
  type AppStoreFullApiActorsGeneratedClient,
  type AppStoreFullApiActorsOperationPathParamMap,
  type AppStoreFullApiActorsOperationRequestMap,
} from "./full-api.generated/client/actors-chunk.generated.js";
import {
  createAppStoreFullApiAgeRatingDeclarationsGeneratedClient,
  AppStoreFullApiAgeRatingDeclarationsGeneratedFunctionNames,
  type AppStoreFullApiAgeRatingDeclarationsGeneratedClient,
  type AppStoreFullApiAgeRatingDeclarationsOperationPathParamMap,
  type AppStoreFullApiAgeRatingDeclarationsOperationRequestMap,
} from "./full-api.generated/client/age-rating-declarations-chunk.generated.js";
import {
  createAppStoreFullApiAlternativeDistributionDomainsGeneratedClient,
  AppStoreFullApiAlternativeDistributionDomainsGeneratedFunctionNames,
  type AppStoreFullApiAlternativeDistributionDomainsGeneratedClient,
  type AppStoreFullApiAlternativeDistributionDomainsOperationPathParamMap,
  type AppStoreFullApiAlternativeDistributionDomainsOperationRequestMap,
} from "./full-api.generated/client/alternative-distribution-domains-chunk.generated.js";
import {
  createAppStoreFullApiAlternativeDistributionKeysGeneratedClient,
  AppStoreFullApiAlternativeDistributionKeysGeneratedFunctionNames,
  type AppStoreFullApiAlternativeDistributionKeysGeneratedClient,
  type AppStoreFullApiAlternativeDistributionKeysOperationPathParamMap,
  type AppStoreFullApiAlternativeDistributionKeysOperationRequestMap,
} from "./full-api.generated/client/alternative-distribution-keys-chunk.generated.js";
import {
  createAppStoreFullApiAlternativeDistributionPackageDeltasGeneratedClient,
  AppStoreFullApiAlternativeDistributionPackageDeltasGeneratedFunctionNames,
  type AppStoreFullApiAlternativeDistributionPackageDeltasGeneratedClient,
  type AppStoreFullApiAlternativeDistributionPackageDeltasOperationPathParamMap,
  type AppStoreFullApiAlternativeDistributionPackageDeltasOperationRequestMap,
} from "./full-api.generated/client/alternative-distribution-package-deltas-chunk.generated.js";
import {
  createAppStoreFullApiAlternativeDistributionPackagesGeneratedClient,
  AppStoreFullApiAlternativeDistributionPackagesGeneratedFunctionNames,
  type AppStoreFullApiAlternativeDistributionPackagesGeneratedClient,
  type AppStoreFullApiAlternativeDistributionPackagesOperationPathParamMap,
  type AppStoreFullApiAlternativeDistributionPackagesOperationRequestMap,
} from "./full-api.generated/client/alternative-distribution-packages-chunk.generated.js";
import {
  createAppStoreFullApiAlternativeDistributionPackageVariantsGeneratedClient,
  AppStoreFullApiAlternativeDistributionPackageVariantsGeneratedFunctionNames,
  type AppStoreFullApiAlternativeDistributionPackageVariantsGeneratedClient,
  type AppStoreFullApiAlternativeDistributionPackageVariantsOperationPathParamMap,
  type AppStoreFullApiAlternativeDistributionPackageVariantsOperationRequestMap,
} from "./full-api.generated/client/alternative-distribution-package-variants-chunk.generated.js";
import {
  createAppStoreFullApiAlternativeDistributionPackageVersionsGeneratedClient,
  AppStoreFullApiAlternativeDistributionPackageVersionsGeneratedFunctionNames,
  type AppStoreFullApiAlternativeDistributionPackageVersionsGeneratedClient,
  type AppStoreFullApiAlternativeDistributionPackageVersionsOperationPathParamMap,
  type AppStoreFullApiAlternativeDistributionPackageVersionsOperationRequestMap,
} from "./full-api.generated/client/alternative-distribution-package-versions-chunk.generated.js";
import {
  createAppStoreFullApiAnalyticsReportInstancesGeneratedClient,
  AppStoreFullApiAnalyticsReportInstancesGeneratedFunctionNames,
  type AppStoreFullApiAnalyticsReportInstancesGeneratedClient,
  type AppStoreFullApiAnalyticsReportInstancesOperationPathParamMap,
  type AppStoreFullApiAnalyticsReportInstancesOperationRequestMap,
} from "./full-api.generated/client/analytics-report-instances-chunk.generated.js";
import {
  createAppStoreFullApiAnalyticsReportRequestsGeneratedClient,
  AppStoreFullApiAnalyticsReportRequestsGeneratedFunctionNames,
  type AppStoreFullApiAnalyticsReportRequestsGeneratedClient,
  type AppStoreFullApiAnalyticsReportRequestsOperationPathParamMap,
  type AppStoreFullApiAnalyticsReportRequestsOperationRequestMap,
} from "./full-api.generated/client/analytics-report-requests-chunk.generated.js";
import {
  createAppStoreFullApiAnalyticsReportsGeneratedClient,
  AppStoreFullApiAnalyticsReportsGeneratedFunctionNames,
  type AppStoreFullApiAnalyticsReportsGeneratedClient,
  type AppStoreFullApiAnalyticsReportsOperationPathParamMap,
  type AppStoreFullApiAnalyticsReportsOperationRequestMap,
} from "./full-api.generated/client/analytics-reports-chunk.generated.js";
import {
  createAppStoreFullApiAnalyticsReportSegmentsGeneratedClient,
  AppStoreFullApiAnalyticsReportSegmentsGeneratedFunctionNames,
  type AppStoreFullApiAnalyticsReportSegmentsGeneratedClient,
  type AppStoreFullApiAnalyticsReportSegmentsOperationPathParamMap,
  type AppStoreFullApiAnalyticsReportSegmentsOperationRequestMap,
} from "./full-api.generated/client/analytics-report-segments-chunk.generated.js";
import {
  createAppStoreFullApiAndroidToIosAppMappingDetailsGeneratedClient,
  AppStoreFullApiAndroidToIosAppMappingDetailsGeneratedFunctionNames,
  type AppStoreFullApiAndroidToIosAppMappingDetailsGeneratedClient,
  type AppStoreFullApiAndroidToIosAppMappingDetailsOperationPathParamMap,
  type AppStoreFullApiAndroidToIosAppMappingDetailsOperationRequestMap,
} from "./full-api.generated/client/android-to-ios-app-mapping-details-chunk.generated.js";
import {
  createAppStoreFullApiAppAvailabilitiesGeneratedClient,
  AppStoreFullApiAppAvailabilitiesGeneratedFunctionNames,
  type AppStoreFullApiAppAvailabilitiesGeneratedClient,
  type AppStoreFullApiAppAvailabilitiesOperationPathParamMap,
  type AppStoreFullApiAppAvailabilitiesOperationRequestMap,
} from "./full-api.generated/client/app-availabilities-chunk.generated.js";
import {
  createAppStoreFullApiAppCategoriesGeneratedClient,
  AppStoreFullApiAppCategoriesGeneratedFunctionNames,
  type AppStoreFullApiAppCategoriesGeneratedClient,
  type AppStoreFullApiAppCategoriesOperationPathParamMap,
  type AppStoreFullApiAppCategoriesOperationRequestMap,
} from "./full-api.generated/client/app-categories-chunk.generated.js";
import {
  createAppStoreFullApiAppClipAdvancedExperienceImagesGeneratedClient,
  AppStoreFullApiAppClipAdvancedExperienceImagesGeneratedFunctionNames,
  type AppStoreFullApiAppClipAdvancedExperienceImagesGeneratedClient,
  type AppStoreFullApiAppClipAdvancedExperienceImagesOperationPathParamMap,
  type AppStoreFullApiAppClipAdvancedExperienceImagesOperationRequestMap,
} from "./full-api.generated/client/app-clip-advanced-experience-images-chunk.generated.js";
import {
  createAppStoreFullApiAppClipAdvancedExperiencesGeneratedClient,
  AppStoreFullApiAppClipAdvancedExperiencesGeneratedFunctionNames,
  type AppStoreFullApiAppClipAdvancedExperiencesGeneratedClient,
  type AppStoreFullApiAppClipAdvancedExperiencesOperationPathParamMap,
  type AppStoreFullApiAppClipAdvancedExperiencesOperationRequestMap,
} from "./full-api.generated/client/app-clip-advanced-experiences-chunk.generated.js";
import {
  createAppStoreFullApiAppClipAppStoreReviewDetailsGeneratedClient,
  AppStoreFullApiAppClipAppStoreReviewDetailsGeneratedFunctionNames,
  type AppStoreFullApiAppClipAppStoreReviewDetailsGeneratedClient,
  type AppStoreFullApiAppClipAppStoreReviewDetailsOperationPathParamMap,
  type AppStoreFullApiAppClipAppStoreReviewDetailsOperationRequestMap,
} from "./full-api.generated/client/app-clip-app-store-review-details-chunk.generated.js";
import {
  createAppStoreFullApiAppClipDefaultExperienceLocalizationsGeneratedClient,
  AppStoreFullApiAppClipDefaultExperienceLocalizationsGeneratedFunctionNames,
  type AppStoreFullApiAppClipDefaultExperienceLocalizationsGeneratedClient,
  type AppStoreFullApiAppClipDefaultExperienceLocalizationsOperationPathParamMap,
  type AppStoreFullApiAppClipDefaultExperienceLocalizationsOperationRequestMap,
} from "./full-api.generated/client/app-clip-default-experience-localizations-chunk.generated.js";
import {
  createAppStoreFullApiAppClipDefaultExperiencesGeneratedClient,
  AppStoreFullApiAppClipDefaultExperiencesGeneratedFunctionNames,
  type AppStoreFullApiAppClipDefaultExperiencesGeneratedClient,
  type AppStoreFullApiAppClipDefaultExperiencesOperationPathParamMap,
  type AppStoreFullApiAppClipDefaultExperiencesOperationRequestMap,
} from "./full-api.generated/client/app-clip-default-experiences-chunk.generated.js";
import {
  createAppStoreFullApiAppClipHeaderImagesGeneratedClient,
  AppStoreFullApiAppClipHeaderImagesGeneratedFunctionNames,
  type AppStoreFullApiAppClipHeaderImagesGeneratedClient,
  type AppStoreFullApiAppClipHeaderImagesOperationPathParamMap,
  type AppStoreFullApiAppClipHeaderImagesOperationRequestMap,
} from "./full-api.generated/client/app-clip-header-images-chunk.generated.js";
import {
  createAppStoreFullApiAppClipsGeneratedClient,
  AppStoreFullApiAppClipsGeneratedFunctionNames,
  type AppStoreFullApiAppClipsGeneratedClient,
  type AppStoreFullApiAppClipsOperationPathParamMap,
  type AppStoreFullApiAppClipsOperationRequestMap,
} from "./full-api.generated/client/app-clips-chunk.generated.js";
import {
  createAppStoreFullApiAppCustomProductPageLocalizationsGeneratedClient,
  AppStoreFullApiAppCustomProductPageLocalizationsGeneratedFunctionNames,
  type AppStoreFullApiAppCustomProductPageLocalizationsGeneratedClient,
  type AppStoreFullApiAppCustomProductPageLocalizationsOperationPathParamMap,
  type AppStoreFullApiAppCustomProductPageLocalizationsOperationRequestMap,
} from "./full-api.generated/client/app-custom-product-page-localizations-chunk.generated.js";
import {
  createAppStoreFullApiAppCustomProductPagesGeneratedClient,
  AppStoreFullApiAppCustomProductPagesGeneratedFunctionNames,
  type AppStoreFullApiAppCustomProductPagesGeneratedClient,
  type AppStoreFullApiAppCustomProductPagesOperationPathParamMap,
  type AppStoreFullApiAppCustomProductPagesOperationRequestMap,
} from "./full-api.generated/client/app-custom-product-pages-chunk.generated.js";
import {
  createAppStoreFullApiAppCustomProductPageVersionsGeneratedClient,
  AppStoreFullApiAppCustomProductPageVersionsGeneratedFunctionNames,
  type AppStoreFullApiAppCustomProductPageVersionsGeneratedClient,
  type AppStoreFullApiAppCustomProductPageVersionsOperationPathParamMap,
  type AppStoreFullApiAppCustomProductPageVersionsOperationRequestMap,
} from "./full-api.generated/client/app-custom-product-page-versions-chunk.generated.js";
import {
  createAppStoreFullApiAppEncryptionDeclarationDocumentsGeneratedClient,
  AppStoreFullApiAppEncryptionDeclarationDocumentsGeneratedFunctionNames,
  type AppStoreFullApiAppEncryptionDeclarationDocumentsGeneratedClient,
  type AppStoreFullApiAppEncryptionDeclarationDocumentsOperationPathParamMap,
  type AppStoreFullApiAppEncryptionDeclarationDocumentsOperationRequestMap,
} from "./full-api.generated/client/app-encryption-declaration-documents-chunk.generated.js";
import {
  createAppStoreFullApiAppEncryptionDeclarationsGeneratedClient,
  AppStoreFullApiAppEncryptionDeclarationsGeneratedFunctionNames,
  type AppStoreFullApiAppEncryptionDeclarationsGeneratedClient,
  type AppStoreFullApiAppEncryptionDeclarationsOperationPathParamMap,
  type AppStoreFullApiAppEncryptionDeclarationsOperationRequestMap,
} from "./full-api.generated/client/app-encryption-declarations-chunk.generated.js";
import {
  createAppStoreFullApiAppEventLocalizationsGeneratedClient,
  AppStoreFullApiAppEventLocalizationsGeneratedFunctionNames,
  type AppStoreFullApiAppEventLocalizationsGeneratedClient,
  type AppStoreFullApiAppEventLocalizationsOperationPathParamMap,
  type AppStoreFullApiAppEventLocalizationsOperationRequestMap,
} from "./full-api.generated/client/app-event-localizations-chunk.generated.js";
import {
  createAppStoreFullApiAppEventsGeneratedClient,
  AppStoreFullApiAppEventsGeneratedFunctionNames,
  type AppStoreFullApiAppEventsGeneratedClient,
  type AppStoreFullApiAppEventsOperationPathParamMap,
  type AppStoreFullApiAppEventsOperationRequestMap,
} from "./full-api.generated/client/app-events-chunk.generated.js";
import {
  createAppStoreFullApiAppEventScreenshotsGeneratedClient,
  AppStoreFullApiAppEventScreenshotsGeneratedFunctionNames,
  type AppStoreFullApiAppEventScreenshotsGeneratedClient,
  type AppStoreFullApiAppEventScreenshotsOperationPathParamMap,
  type AppStoreFullApiAppEventScreenshotsOperationRequestMap,
} from "./full-api.generated/client/app-event-screenshots-chunk.generated.js";
import {
  createAppStoreFullApiAppEventVideoClipsGeneratedClient,
  AppStoreFullApiAppEventVideoClipsGeneratedFunctionNames,
  type AppStoreFullApiAppEventVideoClipsGeneratedClient,
  type AppStoreFullApiAppEventVideoClipsOperationPathParamMap,
  type AppStoreFullApiAppEventVideoClipsOperationRequestMap,
} from "./full-api.generated/client/app-event-video-clips-chunk.generated.js";
import {
  createAppStoreFullApiAppInfoLocalizationsGeneratedClient,
  AppStoreFullApiAppInfoLocalizationsGeneratedFunctionNames,
  type AppStoreFullApiAppInfoLocalizationsGeneratedClient,
  type AppStoreFullApiAppInfoLocalizationsOperationPathParamMap,
  type AppStoreFullApiAppInfoLocalizationsOperationRequestMap,
} from "./full-api.generated/client/app-info-localizations-chunk.generated.js";
import {
  createAppStoreFullApiAppInfosGeneratedClient,
  AppStoreFullApiAppInfosGeneratedFunctionNames,
  type AppStoreFullApiAppInfosGeneratedClient,
  type AppStoreFullApiAppInfosOperationPathParamMap,
  type AppStoreFullApiAppInfosOperationRequestMap,
} from "./full-api.generated/client/app-infos-chunk.generated.js";
import {
  createAppStoreFullApiAppPreviewsGeneratedClient,
  AppStoreFullApiAppPreviewsGeneratedFunctionNames,
  type AppStoreFullApiAppPreviewsGeneratedClient,
  type AppStoreFullApiAppPreviewsOperationPathParamMap,
  type AppStoreFullApiAppPreviewsOperationRequestMap,
} from "./full-api.generated/client/app-previews-chunk.generated.js";
import {
  createAppStoreFullApiAppPreviewSetsGeneratedClient,
  AppStoreFullApiAppPreviewSetsGeneratedFunctionNames,
  type AppStoreFullApiAppPreviewSetsGeneratedClient,
  type AppStoreFullApiAppPreviewSetsOperationPathParamMap,
  type AppStoreFullApiAppPreviewSetsOperationRequestMap,
} from "./full-api.generated/client/app-preview-sets-chunk.generated.js";
import {
  createAppStoreFullApiAppPricePointsGeneratedClient,
  AppStoreFullApiAppPricePointsGeneratedFunctionNames,
  type AppStoreFullApiAppPricePointsGeneratedClient,
  type AppStoreFullApiAppPricePointsOperationPathParamMap,
  type AppStoreFullApiAppPricePointsOperationRequestMap,
} from "./full-api.generated/client/app-price-points-chunk.generated.js";
import {
  createAppStoreFullApiAppPriceSchedulesGeneratedClient,
  AppStoreFullApiAppPriceSchedulesGeneratedFunctionNames,
  type AppStoreFullApiAppPriceSchedulesGeneratedClient,
  type AppStoreFullApiAppPriceSchedulesOperationPathParamMap,
  type AppStoreFullApiAppPriceSchedulesOperationRequestMap,
} from "./full-api.generated/client/app-price-schedules-chunk.generated.js";
import {
  createAppStoreFullApiApps01GeneratedClient,
  AppStoreFullApiApps01GeneratedFunctionNames,
  type AppStoreFullApiApps01GeneratedClient,
  type AppStoreFullApiApps01OperationPathParamMap,
  type AppStoreFullApiApps01OperationRequestMap,
} from "./full-api.generated/client/apps-01-chunk.generated.js";
import {
  createAppStoreFullApiApps02GeneratedClient,
  AppStoreFullApiApps02GeneratedFunctionNames,
  type AppStoreFullApiApps02GeneratedClient,
  type AppStoreFullApiApps02OperationPathParamMap,
  type AppStoreFullApiApps02OperationRequestMap,
} from "./full-api.generated/client/apps-02-chunk.generated.js";
import {
  createAppStoreFullApiAppScreenshotsGeneratedClient,
  AppStoreFullApiAppScreenshotsGeneratedFunctionNames,
  type AppStoreFullApiAppScreenshotsGeneratedClient,
  type AppStoreFullApiAppScreenshotsOperationPathParamMap,
  type AppStoreFullApiAppScreenshotsOperationRequestMap,
} from "./full-api.generated/client/app-screenshots-chunk.generated.js";
import {
  createAppStoreFullApiAppScreenshotSetsGeneratedClient,
  AppStoreFullApiAppScreenshotSetsGeneratedFunctionNames,
  type AppStoreFullApiAppScreenshotSetsGeneratedClient,
  type AppStoreFullApiAppScreenshotSetsOperationPathParamMap,
  type AppStoreFullApiAppScreenshotSetsOperationRequestMap,
} from "./full-api.generated/client/app-screenshot-sets-chunk.generated.js";
import {
  createAppStoreFullApiAppStoreReviewAttachmentsGeneratedClient,
  AppStoreFullApiAppStoreReviewAttachmentsGeneratedFunctionNames,
  type AppStoreFullApiAppStoreReviewAttachmentsGeneratedClient,
  type AppStoreFullApiAppStoreReviewAttachmentsOperationPathParamMap,
  type AppStoreFullApiAppStoreReviewAttachmentsOperationRequestMap,
} from "./full-api.generated/client/app-store-review-attachments-chunk.generated.js";
import {
  createAppStoreFullApiAppStoreReviewDetailsGeneratedClient,
  AppStoreFullApiAppStoreReviewDetailsGeneratedFunctionNames,
  type AppStoreFullApiAppStoreReviewDetailsGeneratedClient,
  type AppStoreFullApiAppStoreReviewDetailsOperationPathParamMap,
  type AppStoreFullApiAppStoreReviewDetailsOperationRequestMap,
} from "./full-api.generated/client/app-store-review-details-chunk.generated.js";
import {
  createAppStoreFullApiAppStoreVersionExperimentsGeneratedClient,
  AppStoreFullApiAppStoreVersionExperimentsGeneratedFunctionNames,
  type AppStoreFullApiAppStoreVersionExperimentsGeneratedClient,
  type AppStoreFullApiAppStoreVersionExperimentsOperationPathParamMap,
  type AppStoreFullApiAppStoreVersionExperimentsOperationRequestMap,
} from "./full-api.generated/client/app-store-version-experiments-chunk.generated.js";
import {
  createAppStoreFullApiAppStoreVersionExperimentTreatmentLocalizationsGeneratedClient,
  AppStoreFullApiAppStoreVersionExperimentTreatmentLocalizationsGeneratedFunctionNames,
  type AppStoreFullApiAppStoreVersionExperimentTreatmentLocalizationsGeneratedClient,
  type AppStoreFullApiAppStoreVersionExperimentTreatmentLocalizationsOperationPathParamMap,
  type AppStoreFullApiAppStoreVersionExperimentTreatmentLocalizationsOperationRequestMap,
} from "./full-api.generated/client/app-store-version-experiment-treatment-localizations-chunk.generated.js";
import {
  createAppStoreFullApiAppStoreVersionExperimentTreatmentsGeneratedClient,
  AppStoreFullApiAppStoreVersionExperimentTreatmentsGeneratedFunctionNames,
  type AppStoreFullApiAppStoreVersionExperimentTreatmentsGeneratedClient,
  type AppStoreFullApiAppStoreVersionExperimentTreatmentsOperationPathParamMap,
  type AppStoreFullApiAppStoreVersionExperimentTreatmentsOperationRequestMap,
} from "./full-api.generated/client/app-store-version-experiment-treatments-chunk.generated.js";
import {
  createAppStoreFullApiAppStoreVersionLocalizationsGeneratedClient,
  AppStoreFullApiAppStoreVersionLocalizationsGeneratedFunctionNames,
  type AppStoreFullApiAppStoreVersionLocalizationsGeneratedClient,
  type AppStoreFullApiAppStoreVersionLocalizationsOperationPathParamMap,
  type AppStoreFullApiAppStoreVersionLocalizationsOperationRequestMap,
} from "./full-api.generated/client/app-store-version-localizations-chunk.generated.js";
import {
  createAppStoreFullApiAppStoreVersionPhasedReleasesGeneratedClient,
  AppStoreFullApiAppStoreVersionPhasedReleasesGeneratedFunctionNames,
  type AppStoreFullApiAppStoreVersionPhasedReleasesGeneratedClient,
  type AppStoreFullApiAppStoreVersionPhasedReleasesOperationPathParamMap,
  type AppStoreFullApiAppStoreVersionPhasedReleasesOperationRequestMap,
} from "./full-api.generated/client/app-store-version-phased-releases-chunk.generated.js";
import {
  createAppStoreFullApiAppStoreVersionPromotionsGeneratedClient,
  AppStoreFullApiAppStoreVersionPromotionsGeneratedFunctionNames,
  type AppStoreFullApiAppStoreVersionPromotionsGeneratedClient,
  type AppStoreFullApiAppStoreVersionPromotionsOperationPathParamMap,
  type AppStoreFullApiAppStoreVersionPromotionsOperationRequestMap,
} from "./full-api.generated/client/app-store-version-promotions-chunk.generated.js";
import {
  createAppStoreFullApiAppStoreVersionReleaseRequestsGeneratedClient,
  AppStoreFullApiAppStoreVersionReleaseRequestsGeneratedFunctionNames,
  type AppStoreFullApiAppStoreVersionReleaseRequestsGeneratedClient,
  type AppStoreFullApiAppStoreVersionReleaseRequestsOperationPathParamMap,
  type AppStoreFullApiAppStoreVersionReleaseRequestsOperationRequestMap,
} from "./full-api.generated/client/app-store-version-release-requests-chunk.generated.js";
import {
  createAppStoreFullApiAppStoreVersionsGeneratedClient,
  AppStoreFullApiAppStoreVersionsGeneratedFunctionNames,
  type AppStoreFullApiAppStoreVersionsGeneratedClient,
  type AppStoreFullApiAppStoreVersionsOperationPathParamMap,
  type AppStoreFullApiAppStoreVersionsOperationRequestMap,
} from "./full-api.generated/client/app-store-versions-chunk.generated.js";
import {
  createAppStoreFullApiAppStoreVersionSubmissionsGeneratedClient,
  AppStoreFullApiAppStoreVersionSubmissionsGeneratedFunctionNames,
  type AppStoreFullApiAppStoreVersionSubmissionsGeneratedClient,
  type AppStoreFullApiAppStoreVersionSubmissionsOperationPathParamMap,
  type AppStoreFullApiAppStoreVersionSubmissionsOperationRequestMap,
} from "./full-api.generated/client/app-store-version-submissions-chunk.generated.js";
import {
  createAppStoreFullApiAppTagsGeneratedClient,
  AppStoreFullApiAppTagsGeneratedFunctionNames,
  type AppStoreFullApiAppTagsGeneratedClient,
  type AppStoreFullApiAppTagsOperationPathParamMap,
  type AppStoreFullApiAppTagsOperationRequestMap,
} from "./full-api.generated/client/app-tags-chunk.generated.js";
import {
  createAppStoreFullApiBackgroundAssetsGeneratedClient,
  AppStoreFullApiBackgroundAssetsGeneratedFunctionNames,
  type AppStoreFullApiBackgroundAssetsGeneratedClient,
  type AppStoreFullApiBackgroundAssetsOperationPathParamMap,
  type AppStoreFullApiBackgroundAssetsOperationRequestMap,
} from "./full-api.generated/client/background-assets-chunk.generated.js";
import {
  createAppStoreFullApiBackgroundAssetUploadFilesGeneratedClient,
  AppStoreFullApiBackgroundAssetUploadFilesGeneratedFunctionNames,
  type AppStoreFullApiBackgroundAssetUploadFilesGeneratedClient,
  type AppStoreFullApiBackgroundAssetUploadFilesOperationPathParamMap,
  type AppStoreFullApiBackgroundAssetUploadFilesOperationRequestMap,
} from "./full-api.generated/client/background-asset-upload-files-chunk.generated.js";
import {
  createAppStoreFullApiBackgroundAssetVersionAppStoreReleasesGeneratedClient,
  AppStoreFullApiBackgroundAssetVersionAppStoreReleasesGeneratedFunctionNames,
  type AppStoreFullApiBackgroundAssetVersionAppStoreReleasesGeneratedClient,
  type AppStoreFullApiBackgroundAssetVersionAppStoreReleasesOperationPathParamMap,
  type AppStoreFullApiBackgroundAssetVersionAppStoreReleasesOperationRequestMap,
} from "./full-api.generated/client/background-asset-version-app-store-releases-chunk.generated.js";
import {
  createAppStoreFullApiBackgroundAssetVersionExternalBetaReleasesGeneratedClient,
  AppStoreFullApiBackgroundAssetVersionExternalBetaReleasesGeneratedFunctionNames,
  type AppStoreFullApiBackgroundAssetVersionExternalBetaReleasesGeneratedClient,
  type AppStoreFullApiBackgroundAssetVersionExternalBetaReleasesOperationPathParamMap,
  type AppStoreFullApiBackgroundAssetVersionExternalBetaReleasesOperationRequestMap,
} from "./full-api.generated/client/background-asset-version-external-beta-releases-chunk.generated.js";
import {
  createAppStoreFullApiBackgroundAssetVersionInternalBetaReleasesGeneratedClient,
  AppStoreFullApiBackgroundAssetVersionInternalBetaReleasesGeneratedFunctionNames,
  type AppStoreFullApiBackgroundAssetVersionInternalBetaReleasesGeneratedClient,
  type AppStoreFullApiBackgroundAssetVersionInternalBetaReleasesOperationPathParamMap,
  type AppStoreFullApiBackgroundAssetVersionInternalBetaReleasesOperationRequestMap,
} from "./full-api.generated/client/background-asset-version-internal-beta-releases-chunk.generated.js";
import {
  createAppStoreFullApiBackgroundAssetVersionsGeneratedClient,
  AppStoreFullApiBackgroundAssetVersionsGeneratedFunctionNames,
  type AppStoreFullApiBackgroundAssetVersionsGeneratedClient,
  type AppStoreFullApiBackgroundAssetVersionsOperationPathParamMap,
  type AppStoreFullApiBackgroundAssetVersionsOperationRequestMap,
} from "./full-api.generated/client/background-asset-versions-chunk.generated.js";
import {
  createAppStoreFullApiBetaAppClipInvocationLocalizationsGeneratedClient,
  AppStoreFullApiBetaAppClipInvocationLocalizationsGeneratedFunctionNames,
  type AppStoreFullApiBetaAppClipInvocationLocalizationsGeneratedClient,
  type AppStoreFullApiBetaAppClipInvocationLocalizationsOperationPathParamMap,
  type AppStoreFullApiBetaAppClipInvocationLocalizationsOperationRequestMap,
} from "./full-api.generated/client/beta-app-clip-invocation-localizations-chunk.generated.js";
import {
  createAppStoreFullApiBetaAppClipInvocationsGeneratedClient,
  AppStoreFullApiBetaAppClipInvocationsGeneratedFunctionNames,
  type AppStoreFullApiBetaAppClipInvocationsGeneratedClient,
  type AppStoreFullApiBetaAppClipInvocationsOperationPathParamMap,
  type AppStoreFullApiBetaAppClipInvocationsOperationRequestMap,
} from "./full-api.generated/client/beta-app-clip-invocations-chunk.generated.js";
import {
  createAppStoreFullApiBetaAppLocalizationsGeneratedClient,
  AppStoreFullApiBetaAppLocalizationsGeneratedFunctionNames,
  type AppStoreFullApiBetaAppLocalizationsGeneratedClient,
  type AppStoreFullApiBetaAppLocalizationsOperationPathParamMap,
  type AppStoreFullApiBetaAppLocalizationsOperationRequestMap,
} from "./full-api.generated/client/beta-app-localizations-chunk.generated.js";
import {
  createAppStoreFullApiBetaAppReviewDetailsGeneratedClient,
  AppStoreFullApiBetaAppReviewDetailsGeneratedFunctionNames,
  type AppStoreFullApiBetaAppReviewDetailsGeneratedClient,
  type AppStoreFullApiBetaAppReviewDetailsOperationPathParamMap,
  type AppStoreFullApiBetaAppReviewDetailsOperationRequestMap,
} from "./full-api.generated/client/beta-app-review-details-chunk.generated.js";
import {
  createAppStoreFullApiBetaAppReviewSubmissionsGeneratedClient,
  AppStoreFullApiBetaAppReviewSubmissionsGeneratedFunctionNames,
  type AppStoreFullApiBetaAppReviewSubmissionsGeneratedClient,
  type AppStoreFullApiBetaAppReviewSubmissionsOperationPathParamMap,
  type AppStoreFullApiBetaAppReviewSubmissionsOperationRequestMap,
} from "./full-api.generated/client/beta-app-review-submissions-chunk.generated.js";
import {
  createAppStoreFullApiBetaBuildLocalizationsGeneratedClient,
  AppStoreFullApiBetaBuildLocalizationsGeneratedFunctionNames,
  type AppStoreFullApiBetaBuildLocalizationsGeneratedClient,
  type AppStoreFullApiBetaBuildLocalizationsOperationPathParamMap,
  type AppStoreFullApiBetaBuildLocalizationsOperationRequestMap,
} from "./full-api.generated/client/beta-build-localizations-chunk.generated.js";
import {
  createAppStoreFullApiBetaCrashLogsGeneratedClient,
  AppStoreFullApiBetaCrashLogsGeneratedFunctionNames,
  type AppStoreFullApiBetaCrashLogsGeneratedClient,
  type AppStoreFullApiBetaCrashLogsOperationPathParamMap,
  type AppStoreFullApiBetaCrashLogsOperationRequestMap,
} from "./full-api.generated/client/beta-crash-logs-chunk.generated.js";
import {
  createAppStoreFullApiBetaFeedbackCrashSubmissionsGeneratedClient,
  AppStoreFullApiBetaFeedbackCrashSubmissionsGeneratedFunctionNames,
  type AppStoreFullApiBetaFeedbackCrashSubmissionsGeneratedClient,
  type AppStoreFullApiBetaFeedbackCrashSubmissionsOperationPathParamMap,
  type AppStoreFullApiBetaFeedbackCrashSubmissionsOperationRequestMap,
} from "./full-api.generated/client/beta-feedback-crash-submissions-chunk.generated.js";
import {
  createAppStoreFullApiBetaFeedbackScreenshotSubmissionsGeneratedClient,
  AppStoreFullApiBetaFeedbackScreenshotSubmissionsGeneratedFunctionNames,
  type AppStoreFullApiBetaFeedbackScreenshotSubmissionsGeneratedClient,
  type AppStoreFullApiBetaFeedbackScreenshotSubmissionsOperationPathParamMap,
  type AppStoreFullApiBetaFeedbackScreenshotSubmissionsOperationRequestMap,
} from "./full-api.generated/client/beta-feedback-screenshot-submissions-chunk.generated.js";
import {
  createAppStoreFullApiBetaGroupsGeneratedClient,
  AppStoreFullApiBetaGroupsGeneratedFunctionNames,
  type AppStoreFullApiBetaGroupsGeneratedClient,
  type AppStoreFullApiBetaGroupsOperationPathParamMap,
  type AppStoreFullApiBetaGroupsOperationRequestMap,
} from "./full-api.generated/client/beta-groups-chunk.generated.js";
import {
  createAppStoreFullApiBetaLicenseAgreementsGeneratedClient,
  AppStoreFullApiBetaLicenseAgreementsGeneratedFunctionNames,
  type AppStoreFullApiBetaLicenseAgreementsGeneratedClient,
  type AppStoreFullApiBetaLicenseAgreementsOperationPathParamMap,
  type AppStoreFullApiBetaLicenseAgreementsOperationRequestMap,
} from "./full-api.generated/client/beta-license-agreements-chunk.generated.js";
import {
  createAppStoreFullApiBetaRecruitmentCriteriaGeneratedClient,
  AppStoreFullApiBetaRecruitmentCriteriaGeneratedFunctionNames,
  type AppStoreFullApiBetaRecruitmentCriteriaGeneratedClient,
  type AppStoreFullApiBetaRecruitmentCriteriaOperationPathParamMap,
  type AppStoreFullApiBetaRecruitmentCriteriaOperationRequestMap,
} from "./full-api.generated/client/beta-recruitment-criteria-chunk.generated.js";
import {
  createAppStoreFullApiBetaRecruitmentCriterionOptionsGeneratedClient,
  AppStoreFullApiBetaRecruitmentCriterionOptionsGeneratedFunctionNames,
  type AppStoreFullApiBetaRecruitmentCriterionOptionsGeneratedClient,
  type AppStoreFullApiBetaRecruitmentCriterionOptionsOperationPathParamMap,
  type AppStoreFullApiBetaRecruitmentCriterionOptionsOperationRequestMap,
} from "./full-api.generated/client/beta-recruitment-criterion-options-chunk.generated.js";
import {
  createAppStoreFullApiBetaTesterInvitationsGeneratedClient,
  AppStoreFullApiBetaTesterInvitationsGeneratedFunctionNames,
  type AppStoreFullApiBetaTesterInvitationsGeneratedClient,
  type AppStoreFullApiBetaTesterInvitationsOperationPathParamMap,
  type AppStoreFullApiBetaTesterInvitationsOperationRequestMap,
} from "./full-api.generated/client/beta-tester-invitations-chunk.generated.js";
import {
  createAppStoreFullApiBetaTestersGeneratedClient,
  AppStoreFullApiBetaTestersGeneratedFunctionNames,
  type AppStoreFullApiBetaTestersGeneratedClient,
  type AppStoreFullApiBetaTestersOperationPathParamMap,
  type AppStoreFullApiBetaTestersOperationRequestMap,
} from "./full-api.generated/client/beta-testers-chunk.generated.js";
import {
  createAppStoreFullApiBuildBetaDetailsGeneratedClient,
  AppStoreFullApiBuildBetaDetailsGeneratedFunctionNames,
  type AppStoreFullApiBuildBetaDetailsGeneratedClient,
  type AppStoreFullApiBuildBetaDetailsOperationPathParamMap,
  type AppStoreFullApiBuildBetaDetailsOperationRequestMap,
} from "./full-api.generated/client/build-beta-details-chunk.generated.js";
import {
  createAppStoreFullApiBuildBetaNotificationsGeneratedClient,
  AppStoreFullApiBuildBetaNotificationsGeneratedFunctionNames,
  type AppStoreFullApiBuildBetaNotificationsGeneratedClient,
  type AppStoreFullApiBuildBetaNotificationsOperationPathParamMap,
  type AppStoreFullApiBuildBetaNotificationsOperationRequestMap,
} from "./full-api.generated/client/build-beta-notifications-chunk.generated.js";
import {
  createAppStoreFullApiBuildBundlesGeneratedClient,
  AppStoreFullApiBuildBundlesGeneratedFunctionNames,
  type AppStoreFullApiBuildBundlesGeneratedClient,
  type AppStoreFullApiBuildBundlesOperationPathParamMap,
  type AppStoreFullApiBuildBundlesOperationRequestMap,
} from "./full-api.generated/client/build-bundles-chunk.generated.js";
import {
  createAppStoreFullApiBuildsGeneratedClient,
  AppStoreFullApiBuildsGeneratedFunctionNames,
  type AppStoreFullApiBuildsGeneratedClient,
  type AppStoreFullApiBuildsOperationPathParamMap,
  type AppStoreFullApiBuildsOperationRequestMap,
} from "./full-api.generated/client/builds-chunk.generated.js";
import {
  createAppStoreFullApiBuildUploadFilesGeneratedClient,
  AppStoreFullApiBuildUploadFilesGeneratedFunctionNames,
  type AppStoreFullApiBuildUploadFilesGeneratedClient,
  type AppStoreFullApiBuildUploadFilesOperationPathParamMap,
  type AppStoreFullApiBuildUploadFilesOperationRequestMap,
} from "./full-api.generated/client/build-upload-files-chunk.generated.js";
import {
  createAppStoreFullApiBuildUploadsGeneratedClient,
  AppStoreFullApiBuildUploadsGeneratedFunctionNames,
  type AppStoreFullApiBuildUploadsGeneratedClient,
  type AppStoreFullApiBuildUploadsOperationPathParamMap,
  type AppStoreFullApiBuildUploadsOperationRequestMap,
} from "./full-api.generated/client/build-uploads-chunk.generated.js";
import {
  createAppStoreFullApiBundleIdCapabilitiesGeneratedClient,
  AppStoreFullApiBundleIdCapabilitiesGeneratedFunctionNames,
  type AppStoreFullApiBundleIdCapabilitiesGeneratedClient,
  type AppStoreFullApiBundleIdCapabilitiesOperationPathParamMap,
  type AppStoreFullApiBundleIdCapabilitiesOperationRequestMap,
} from "./full-api.generated/client/bundle-id-capabilities-chunk.generated.js";
import {
  createAppStoreFullApiBundleIdsGeneratedClient,
  AppStoreFullApiBundleIdsGeneratedFunctionNames,
  type AppStoreFullApiBundleIdsGeneratedClient,
  type AppStoreFullApiBundleIdsOperationPathParamMap,
  type AppStoreFullApiBundleIdsOperationRequestMap,
} from "./full-api.generated/client/bundle-ids-chunk.generated.js";
import {
  createAppStoreFullApiCertificatesGeneratedClient,
  AppStoreFullApiCertificatesGeneratedFunctionNames,
  type AppStoreFullApiCertificatesGeneratedClient,
  type AppStoreFullApiCertificatesOperationPathParamMap,
  type AppStoreFullApiCertificatesOperationRequestMap,
} from "./full-api.generated/client/certificates-chunk.generated.js";
import {
  createAppStoreFullApiCiArtifactsGeneratedClient,
  AppStoreFullApiCiArtifactsGeneratedFunctionNames,
  type AppStoreFullApiCiArtifactsGeneratedClient,
  type AppStoreFullApiCiArtifactsOperationPathParamMap,
  type AppStoreFullApiCiArtifactsOperationRequestMap,
} from "./full-api.generated/client/ci-artifacts-chunk.generated.js";
import {
  createAppStoreFullApiCiBuildActionsGeneratedClient,
  AppStoreFullApiCiBuildActionsGeneratedFunctionNames,
  type AppStoreFullApiCiBuildActionsGeneratedClient,
  type AppStoreFullApiCiBuildActionsOperationPathParamMap,
  type AppStoreFullApiCiBuildActionsOperationRequestMap,
} from "./full-api.generated/client/ci-build-actions-chunk.generated.js";
import {
  createAppStoreFullApiCiBuildRunsGeneratedClient,
  AppStoreFullApiCiBuildRunsGeneratedFunctionNames,
  type AppStoreFullApiCiBuildRunsGeneratedClient,
  type AppStoreFullApiCiBuildRunsOperationPathParamMap,
  type AppStoreFullApiCiBuildRunsOperationRequestMap,
} from "./full-api.generated/client/ci-build-runs-chunk.generated.js";
import {
  createAppStoreFullApiCiIssuesGeneratedClient,
  AppStoreFullApiCiIssuesGeneratedFunctionNames,
  type AppStoreFullApiCiIssuesGeneratedClient,
  type AppStoreFullApiCiIssuesOperationPathParamMap,
  type AppStoreFullApiCiIssuesOperationRequestMap,
} from "./full-api.generated/client/ci-issues-chunk.generated.js";
import {
  createAppStoreFullApiCiMacOsVersionsGeneratedClient,
  AppStoreFullApiCiMacOsVersionsGeneratedFunctionNames,
  type AppStoreFullApiCiMacOsVersionsGeneratedClient,
  type AppStoreFullApiCiMacOsVersionsOperationPathParamMap,
  type AppStoreFullApiCiMacOsVersionsOperationRequestMap,
} from "./full-api.generated/client/ci-mac-os-versions-chunk.generated.js";
import {
  createAppStoreFullApiCiProductsGeneratedClient,
  AppStoreFullApiCiProductsGeneratedFunctionNames,
  type AppStoreFullApiCiProductsGeneratedClient,
  type AppStoreFullApiCiProductsOperationPathParamMap,
  type AppStoreFullApiCiProductsOperationRequestMap,
} from "./full-api.generated/client/ci-products-chunk.generated.js";
import {
  createAppStoreFullApiCiTestResultsGeneratedClient,
  AppStoreFullApiCiTestResultsGeneratedFunctionNames,
  type AppStoreFullApiCiTestResultsGeneratedClient,
  type AppStoreFullApiCiTestResultsOperationPathParamMap,
  type AppStoreFullApiCiTestResultsOperationRequestMap,
} from "./full-api.generated/client/ci-test-results-chunk.generated.js";
import {
  createAppStoreFullApiCiWorkflowsGeneratedClient,
  AppStoreFullApiCiWorkflowsGeneratedFunctionNames,
  type AppStoreFullApiCiWorkflowsGeneratedClient,
  type AppStoreFullApiCiWorkflowsOperationPathParamMap,
  type AppStoreFullApiCiWorkflowsOperationRequestMap,
} from "./full-api.generated/client/ci-workflows-chunk.generated.js";
import {
  createAppStoreFullApiCiXcodeVersionsGeneratedClient,
  AppStoreFullApiCiXcodeVersionsGeneratedFunctionNames,
  type AppStoreFullApiCiXcodeVersionsGeneratedClient,
  type AppStoreFullApiCiXcodeVersionsOperationPathParamMap,
  type AppStoreFullApiCiXcodeVersionsOperationRequestMap,
} from "./full-api.generated/client/ci-xcode-versions-chunk.generated.js";
import {
  createAppStoreFullApiCustomerReviewResponsesGeneratedClient,
  AppStoreFullApiCustomerReviewResponsesGeneratedFunctionNames,
  type AppStoreFullApiCustomerReviewResponsesGeneratedClient,
  type AppStoreFullApiCustomerReviewResponsesOperationPathParamMap,
  type AppStoreFullApiCustomerReviewResponsesOperationRequestMap,
} from "./full-api.generated/client/customer-review-responses-chunk.generated.js";
import {
  createAppStoreFullApiCustomerReviewsGeneratedClient,
  AppStoreFullApiCustomerReviewsGeneratedFunctionNames,
  type AppStoreFullApiCustomerReviewsGeneratedClient,
  type AppStoreFullApiCustomerReviewsOperationPathParamMap,
  type AppStoreFullApiCustomerReviewsOperationRequestMap,
} from "./full-api.generated/client/customer-reviews-chunk.generated.js";
import {
  createAppStoreFullApiDevicesGeneratedClient,
  AppStoreFullApiDevicesGeneratedFunctionNames,
  type AppStoreFullApiDevicesGeneratedClient,
  type AppStoreFullApiDevicesOperationPathParamMap,
  type AppStoreFullApiDevicesOperationRequestMap,
} from "./full-api.generated/client/devices-chunk.generated.js";
import {
  createAppStoreFullApiDiagnosticSignaturesGeneratedClient,
  AppStoreFullApiDiagnosticSignaturesGeneratedFunctionNames,
  type AppStoreFullApiDiagnosticSignaturesGeneratedClient,
  type AppStoreFullApiDiagnosticSignaturesOperationPathParamMap,
  type AppStoreFullApiDiagnosticSignaturesOperationRequestMap,
} from "./full-api.generated/client/diagnostic-signatures-chunk.generated.js";
import {
  createAppStoreFullApiEndAppAvailabilityPreOrdersGeneratedClient,
  AppStoreFullApiEndAppAvailabilityPreOrdersGeneratedFunctionNames,
  type AppStoreFullApiEndAppAvailabilityPreOrdersGeneratedClient,
  type AppStoreFullApiEndAppAvailabilityPreOrdersOperationPathParamMap,
  type AppStoreFullApiEndAppAvailabilityPreOrdersOperationRequestMap,
} from "./full-api.generated/client/end-app-availability-pre-orders-chunk.generated.js";
import {
  createAppStoreFullApiEndUserLicenseAgreementsGeneratedClient,
  AppStoreFullApiEndUserLicenseAgreementsGeneratedFunctionNames,
  type AppStoreFullApiEndUserLicenseAgreementsGeneratedClient,
  type AppStoreFullApiEndUserLicenseAgreementsOperationPathParamMap,
  type AppStoreFullApiEndUserLicenseAgreementsOperationRequestMap,
} from "./full-api.generated/client/end-user-license-agreements-chunk.generated.js";
import {
  createAppStoreFullApiFinanceReportsGeneratedClient,
  AppStoreFullApiFinanceReportsGeneratedFunctionNames,
  type AppStoreFullApiFinanceReportsGeneratedClient,
  type AppStoreFullApiFinanceReportsOperationPathParamMap,
  type AppStoreFullApiFinanceReportsOperationRequestMap,
} from "./full-api.generated/client/finance-reports-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterAchievementImagesGeneratedClient,
  AppStoreFullApiGameCenterAchievementImagesGeneratedFunctionNames,
  type AppStoreFullApiGameCenterAchievementImagesGeneratedClient,
  type AppStoreFullApiGameCenterAchievementImagesOperationPathParamMap,
  type AppStoreFullApiGameCenterAchievementImagesOperationRequestMap,
} from "./full-api.generated/client/game-center-achievement-images-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterAchievementLocalizationsGeneratedClient,
  AppStoreFullApiGameCenterAchievementLocalizationsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterAchievementLocalizationsGeneratedClient,
  type AppStoreFullApiGameCenterAchievementLocalizationsOperationPathParamMap,
  type AppStoreFullApiGameCenterAchievementLocalizationsOperationRequestMap,
} from "./full-api.generated/client/game-center-achievement-localizations-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterAchievementReleasesGeneratedClient,
  AppStoreFullApiGameCenterAchievementReleasesGeneratedFunctionNames,
  type AppStoreFullApiGameCenterAchievementReleasesGeneratedClient,
  type AppStoreFullApiGameCenterAchievementReleasesOperationPathParamMap,
  type AppStoreFullApiGameCenterAchievementReleasesOperationRequestMap,
} from "./full-api.generated/client/game-center-achievement-releases-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterAchievementsGeneratedClient,
  AppStoreFullApiGameCenterAchievementsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterAchievementsGeneratedClient,
  type AppStoreFullApiGameCenterAchievementsOperationPathParamMap,
  type AppStoreFullApiGameCenterAchievementsOperationRequestMap,
} from "./full-api.generated/client/game-center-achievements-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterAchievementVersionsGeneratedClient,
  AppStoreFullApiGameCenterAchievementVersionsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterAchievementVersionsGeneratedClient,
  type AppStoreFullApiGameCenterAchievementVersionsOperationPathParamMap,
  type AppStoreFullApiGameCenterAchievementVersionsOperationRequestMap,
} from "./full-api.generated/client/game-center-achievement-versions-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterActivitiesGeneratedClient,
  AppStoreFullApiGameCenterActivitiesGeneratedFunctionNames,
  type AppStoreFullApiGameCenterActivitiesGeneratedClient,
  type AppStoreFullApiGameCenterActivitiesOperationPathParamMap,
  type AppStoreFullApiGameCenterActivitiesOperationRequestMap,
} from "./full-api.generated/client/game-center-activities-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterActivityImagesGeneratedClient,
  AppStoreFullApiGameCenterActivityImagesGeneratedFunctionNames,
  type AppStoreFullApiGameCenterActivityImagesGeneratedClient,
  type AppStoreFullApiGameCenterActivityImagesOperationPathParamMap,
  type AppStoreFullApiGameCenterActivityImagesOperationRequestMap,
} from "./full-api.generated/client/game-center-activity-images-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterActivityLocalizationsGeneratedClient,
  AppStoreFullApiGameCenterActivityLocalizationsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterActivityLocalizationsGeneratedClient,
  type AppStoreFullApiGameCenterActivityLocalizationsOperationPathParamMap,
  type AppStoreFullApiGameCenterActivityLocalizationsOperationRequestMap,
} from "./full-api.generated/client/game-center-activity-localizations-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterActivityVersionReleasesGeneratedClient,
  AppStoreFullApiGameCenterActivityVersionReleasesGeneratedFunctionNames,
  type AppStoreFullApiGameCenterActivityVersionReleasesGeneratedClient,
  type AppStoreFullApiGameCenterActivityVersionReleasesOperationPathParamMap,
  type AppStoreFullApiGameCenterActivityVersionReleasesOperationRequestMap,
} from "./full-api.generated/client/game-center-activity-version-releases-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterActivityVersionsGeneratedClient,
  AppStoreFullApiGameCenterActivityVersionsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterActivityVersionsGeneratedClient,
  type AppStoreFullApiGameCenterActivityVersionsOperationPathParamMap,
  type AppStoreFullApiGameCenterActivityVersionsOperationRequestMap,
} from "./full-api.generated/client/game-center-activity-versions-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterAppVersionsGeneratedClient,
  AppStoreFullApiGameCenterAppVersionsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterAppVersionsGeneratedClient,
  type AppStoreFullApiGameCenterAppVersionsOperationPathParamMap,
  type AppStoreFullApiGameCenterAppVersionsOperationRequestMap,
} from "./full-api.generated/client/game-center-app-versions-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterChallengeImagesGeneratedClient,
  AppStoreFullApiGameCenterChallengeImagesGeneratedFunctionNames,
  type AppStoreFullApiGameCenterChallengeImagesGeneratedClient,
  type AppStoreFullApiGameCenterChallengeImagesOperationPathParamMap,
  type AppStoreFullApiGameCenterChallengeImagesOperationRequestMap,
} from "./full-api.generated/client/game-center-challenge-images-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterChallengeLocalizationsGeneratedClient,
  AppStoreFullApiGameCenterChallengeLocalizationsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterChallengeLocalizationsGeneratedClient,
  type AppStoreFullApiGameCenterChallengeLocalizationsOperationPathParamMap,
  type AppStoreFullApiGameCenterChallengeLocalizationsOperationRequestMap,
} from "./full-api.generated/client/game-center-challenge-localizations-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterChallengesGeneratedClient,
  AppStoreFullApiGameCenterChallengesGeneratedFunctionNames,
  type AppStoreFullApiGameCenterChallengesGeneratedClient,
  type AppStoreFullApiGameCenterChallengesOperationPathParamMap,
  type AppStoreFullApiGameCenterChallengesOperationRequestMap,
} from "./full-api.generated/client/game-center-challenges-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterChallengeVersionReleasesGeneratedClient,
  AppStoreFullApiGameCenterChallengeVersionReleasesGeneratedFunctionNames,
  type AppStoreFullApiGameCenterChallengeVersionReleasesGeneratedClient,
  type AppStoreFullApiGameCenterChallengeVersionReleasesOperationPathParamMap,
  type AppStoreFullApiGameCenterChallengeVersionReleasesOperationRequestMap,
} from "./full-api.generated/client/game-center-challenge-version-releases-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterChallengeVersionsGeneratedClient,
  AppStoreFullApiGameCenterChallengeVersionsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterChallengeVersionsGeneratedClient,
  type AppStoreFullApiGameCenterChallengeVersionsOperationPathParamMap,
  type AppStoreFullApiGameCenterChallengeVersionsOperationRequestMap,
} from "./full-api.generated/client/game-center-challenge-versions-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterDetailsGeneratedClient,
  AppStoreFullApiGameCenterDetailsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterDetailsGeneratedClient,
  type AppStoreFullApiGameCenterDetailsOperationPathParamMap,
  type AppStoreFullApiGameCenterDetailsOperationRequestMap,
} from "./full-api.generated/client/game-center-details-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterEnabledVersionsGeneratedClient,
  AppStoreFullApiGameCenterEnabledVersionsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterEnabledVersionsGeneratedClient,
  type AppStoreFullApiGameCenterEnabledVersionsOperationPathParamMap,
  type AppStoreFullApiGameCenterEnabledVersionsOperationRequestMap,
} from "./full-api.generated/client/game-center-enabled-versions-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterGroupsGeneratedClient,
  AppStoreFullApiGameCenterGroupsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterGroupsGeneratedClient,
  type AppStoreFullApiGameCenterGroupsOperationPathParamMap,
  type AppStoreFullApiGameCenterGroupsOperationRequestMap,
} from "./full-api.generated/client/game-center-groups-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterLeaderboardEntrySubmissionsGeneratedClient,
  AppStoreFullApiGameCenterLeaderboardEntrySubmissionsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterLeaderboardEntrySubmissionsGeneratedClient,
  type AppStoreFullApiGameCenterLeaderboardEntrySubmissionsOperationPathParamMap,
  type AppStoreFullApiGameCenterLeaderboardEntrySubmissionsOperationRequestMap,
} from "./full-api.generated/client/game-center-leaderboard-entry-submissions-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterLeaderboardImagesGeneratedClient,
  AppStoreFullApiGameCenterLeaderboardImagesGeneratedFunctionNames,
  type AppStoreFullApiGameCenterLeaderboardImagesGeneratedClient,
  type AppStoreFullApiGameCenterLeaderboardImagesOperationPathParamMap,
  type AppStoreFullApiGameCenterLeaderboardImagesOperationRequestMap,
} from "./full-api.generated/client/game-center-leaderboard-images-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterLeaderboardLocalizationsGeneratedClient,
  AppStoreFullApiGameCenterLeaderboardLocalizationsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterLeaderboardLocalizationsGeneratedClient,
  type AppStoreFullApiGameCenterLeaderboardLocalizationsOperationPathParamMap,
  type AppStoreFullApiGameCenterLeaderboardLocalizationsOperationRequestMap,
} from "./full-api.generated/client/game-center-leaderboard-localizations-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterLeaderboardReleasesGeneratedClient,
  AppStoreFullApiGameCenterLeaderboardReleasesGeneratedFunctionNames,
  type AppStoreFullApiGameCenterLeaderboardReleasesGeneratedClient,
  type AppStoreFullApiGameCenterLeaderboardReleasesOperationPathParamMap,
  type AppStoreFullApiGameCenterLeaderboardReleasesOperationRequestMap,
} from "./full-api.generated/client/game-center-leaderboard-releases-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterLeaderboardsGeneratedClient,
  AppStoreFullApiGameCenterLeaderboardsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterLeaderboardsGeneratedClient,
  type AppStoreFullApiGameCenterLeaderboardsOperationPathParamMap,
  type AppStoreFullApiGameCenterLeaderboardsOperationRequestMap,
} from "./full-api.generated/client/game-center-leaderboards-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterLeaderboardSetImagesGeneratedClient,
  AppStoreFullApiGameCenterLeaderboardSetImagesGeneratedFunctionNames,
  type AppStoreFullApiGameCenterLeaderboardSetImagesGeneratedClient,
  type AppStoreFullApiGameCenterLeaderboardSetImagesOperationPathParamMap,
  type AppStoreFullApiGameCenterLeaderboardSetImagesOperationRequestMap,
} from "./full-api.generated/client/game-center-leaderboard-set-images-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterLeaderboardSetLocalizationsGeneratedClient,
  AppStoreFullApiGameCenterLeaderboardSetLocalizationsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterLeaderboardSetLocalizationsGeneratedClient,
  type AppStoreFullApiGameCenterLeaderboardSetLocalizationsOperationPathParamMap,
  type AppStoreFullApiGameCenterLeaderboardSetLocalizationsOperationRequestMap,
} from "./full-api.generated/client/game-center-leaderboard-set-localizations-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterLeaderboardSetMemberLocalizationsGeneratedClient,
  AppStoreFullApiGameCenterLeaderboardSetMemberLocalizationsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterLeaderboardSetMemberLocalizationsGeneratedClient,
  type AppStoreFullApiGameCenterLeaderboardSetMemberLocalizationsOperationPathParamMap,
  type AppStoreFullApiGameCenterLeaderboardSetMemberLocalizationsOperationRequestMap,
} from "./full-api.generated/client/game-center-leaderboard-set-member-localizations-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterLeaderboardSetReleasesGeneratedClient,
  AppStoreFullApiGameCenterLeaderboardSetReleasesGeneratedFunctionNames,
  type AppStoreFullApiGameCenterLeaderboardSetReleasesGeneratedClient,
  type AppStoreFullApiGameCenterLeaderboardSetReleasesOperationPathParamMap,
  type AppStoreFullApiGameCenterLeaderboardSetReleasesOperationRequestMap,
} from "./full-api.generated/client/game-center-leaderboard-set-releases-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterLeaderboardSetsGeneratedClient,
  AppStoreFullApiGameCenterLeaderboardSetsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterLeaderboardSetsGeneratedClient,
  type AppStoreFullApiGameCenterLeaderboardSetsOperationPathParamMap,
  type AppStoreFullApiGameCenterLeaderboardSetsOperationRequestMap,
} from "./full-api.generated/client/game-center-leaderboard-sets-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterLeaderboardSetVersionsGeneratedClient,
  AppStoreFullApiGameCenterLeaderboardSetVersionsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterLeaderboardSetVersionsGeneratedClient,
  type AppStoreFullApiGameCenterLeaderboardSetVersionsOperationPathParamMap,
  type AppStoreFullApiGameCenterLeaderboardSetVersionsOperationRequestMap,
} from "./full-api.generated/client/game-center-leaderboard-set-versions-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterLeaderboardVersionsGeneratedClient,
  AppStoreFullApiGameCenterLeaderboardVersionsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterLeaderboardVersionsGeneratedClient,
  type AppStoreFullApiGameCenterLeaderboardVersionsOperationPathParamMap,
  type AppStoreFullApiGameCenterLeaderboardVersionsOperationRequestMap,
} from "./full-api.generated/client/game-center-leaderboard-versions-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterMatchmakingQueuesGeneratedClient,
  AppStoreFullApiGameCenterMatchmakingQueuesGeneratedFunctionNames,
  type AppStoreFullApiGameCenterMatchmakingQueuesGeneratedClient,
  type AppStoreFullApiGameCenterMatchmakingQueuesOperationPathParamMap,
  type AppStoreFullApiGameCenterMatchmakingQueuesOperationRequestMap,
} from "./full-api.generated/client/game-center-matchmaking-queues-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterMatchmakingRulesGeneratedClient,
  AppStoreFullApiGameCenterMatchmakingRulesGeneratedFunctionNames,
  type AppStoreFullApiGameCenterMatchmakingRulesGeneratedClient,
  type AppStoreFullApiGameCenterMatchmakingRulesOperationPathParamMap,
  type AppStoreFullApiGameCenterMatchmakingRulesOperationRequestMap,
} from "./full-api.generated/client/game-center-matchmaking-rules-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterMatchmakingRuleSetsGeneratedClient,
  AppStoreFullApiGameCenterMatchmakingRuleSetsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterMatchmakingRuleSetsGeneratedClient,
  type AppStoreFullApiGameCenterMatchmakingRuleSetsOperationPathParamMap,
  type AppStoreFullApiGameCenterMatchmakingRuleSetsOperationRequestMap,
} from "./full-api.generated/client/game-center-matchmaking-rule-sets-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterMatchmakingRuleSetTestsGeneratedClient,
  AppStoreFullApiGameCenterMatchmakingRuleSetTestsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterMatchmakingRuleSetTestsGeneratedClient,
  type AppStoreFullApiGameCenterMatchmakingRuleSetTestsOperationPathParamMap,
  type AppStoreFullApiGameCenterMatchmakingRuleSetTestsOperationRequestMap,
} from "./full-api.generated/client/game-center-matchmaking-rule-set-tests-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterMatchmakingTeamsGeneratedClient,
  AppStoreFullApiGameCenterMatchmakingTeamsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterMatchmakingTeamsGeneratedClient,
  type AppStoreFullApiGameCenterMatchmakingTeamsOperationPathParamMap,
  type AppStoreFullApiGameCenterMatchmakingTeamsOperationRequestMap,
} from "./full-api.generated/client/game-center-matchmaking-teams-chunk.generated.js";
import {
  createAppStoreFullApiGameCenterPlayerAchievementSubmissionsGeneratedClient,
  AppStoreFullApiGameCenterPlayerAchievementSubmissionsGeneratedFunctionNames,
  type AppStoreFullApiGameCenterPlayerAchievementSubmissionsGeneratedClient,
  type AppStoreFullApiGameCenterPlayerAchievementSubmissionsOperationPathParamMap,
  type AppStoreFullApiGameCenterPlayerAchievementSubmissionsOperationRequestMap,
} from "./full-api.generated/client/game-center-player-achievement-submissions-chunk.generated.js";
import {
  createAppStoreFullApiInAppPurchaseAppStoreReviewScreenshotsGeneratedClient,
  AppStoreFullApiInAppPurchaseAppStoreReviewScreenshotsGeneratedFunctionNames,
  type AppStoreFullApiInAppPurchaseAppStoreReviewScreenshotsGeneratedClient,
  type AppStoreFullApiInAppPurchaseAppStoreReviewScreenshotsOperationPathParamMap,
  type AppStoreFullApiInAppPurchaseAppStoreReviewScreenshotsOperationRequestMap,
} from "./full-api.generated/client/in-app-purchase-app-store-review-screenshots-chunk.generated.js";
import {
  createAppStoreFullApiInAppPurchaseAvailabilitiesGeneratedClient,
  AppStoreFullApiInAppPurchaseAvailabilitiesGeneratedFunctionNames,
  type AppStoreFullApiInAppPurchaseAvailabilitiesGeneratedClient,
  type AppStoreFullApiInAppPurchaseAvailabilitiesOperationPathParamMap,
  type AppStoreFullApiInAppPurchaseAvailabilitiesOperationRequestMap,
} from "./full-api.generated/client/in-app-purchase-availabilities-chunk.generated.js";
import {
  createAppStoreFullApiInAppPurchaseContentsGeneratedClient,
  AppStoreFullApiInAppPurchaseContentsGeneratedFunctionNames,
  type AppStoreFullApiInAppPurchaseContentsGeneratedClient,
  type AppStoreFullApiInAppPurchaseContentsOperationPathParamMap,
  type AppStoreFullApiInAppPurchaseContentsOperationRequestMap,
} from "./full-api.generated/client/in-app-purchase-contents-chunk.generated.js";
import {
  createAppStoreFullApiInAppPurchaseImagesGeneratedClient,
  AppStoreFullApiInAppPurchaseImagesGeneratedFunctionNames,
  type AppStoreFullApiInAppPurchaseImagesGeneratedClient,
  type AppStoreFullApiInAppPurchaseImagesOperationPathParamMap,
  type AppStoreFullApiInAppPurchaseImagesOperationRequestMap,
} from "./full-api.generated/client/in-app-purchase-images-chunk.generated.js";
import {
  createAppStoreFullApiInAppPurchaseLocalizationsGeneratedClient,
  AppStoreFullApiInAppPurchaseLocalizationsGeneratedFunctionNames,
  type AppStoreFullApiInAppPurchaseLocalizationsGeneratedClient,
  type AppStoreFullApiInAppPurchaseLocalizationsOperationPathParamMap,
  type AppStoreFullApiInAppPurchaseLocalizationsOperationRequestMap,
} from "./full-api.generated/client/in-app-purchase-localizations-chunk.generated.js";
import {
  createAppStoreFullApiInAppPurchaseOfferCodeCustomCodesGeneratedClient,
  AppStoreFullApiInAppPurchaseOfferCodeCustomCodesGeneratedFunctionNames,
  type AppStoreFullApiInAppPurchaseOfferCodeCustomCodesGeneratedClient,
  type AppStoreFullApiInAppPurchaseOfferCodeCustomCodesOperationPathParamMap,
  type AppStoreFullApiInAppPurchaseOfferCodeCustomCodesOperationRequestMap,
} from "./full-api.generated/client/in-app-purchase-offer-code-custom-codes-chunk.generated.js";
import {
  createAppStoreFullApiInAppPurchaseOfferCodeOneTimeUseCodesGeneratedClient,
  AppStoreFullApiInAppPurchaseOfferCodeOneTimeUseCodesGeneratedFunctionNames,
  type AppStoreFullApiInAppPurchaseOfferCodeOneTimeUseCodesGeneratedClient,
  type AppStoreFullApiInAppPurchaseOfferCodeOneTimeUseCodesOperationPathParamMap,
  type AppStoreFullApiInAppPurchaseOfferCodeOneTimeUseCodesOperationRequestMap,
} from "./full-api.generated/client/in-app-purchase-offer-code-one-time-use-codes-chunk.generated.js";
import {
  createAppStoreFullApiInAppPurchaseOfferCodesGeneratedClient,
  AppStoreFullApiInAppPurchaseOfferCodesGeneratedFunctionNames,
  type AppStoreFullApiInAppPurchaseOfferCodesGeneratedClient,
  type AppStoreFullApiInAppPurchaseOfferCodesOperationPathParamMap,
  type AppStoreFullApiInAppPurchaseOfferCodesOperationRequestMap,
} from "./full-api.generated/client/in-app-purchase-offer-codes-chunk.generated.js";
import {
  createAppStoreFullApiInAppPurchasePricePointsGeneratedClient,
  AppStoreFullApiInAppPurchasePricePointsGeneratedFunctionNames,
  type AppStoreFullApiInAppPurchasePricePointsGeneratedClient,
  type AppStoreFullApiInAppPurchasePricePointsOperationPathParamMap,
  type AppStoreFullApiInAppPurchasePricePointsOperationRequestMap,
} from "./full-api.generated/client/in-app-purchase-price-points-chunk.generated.js";
import {
  createAppStoreFullApiInAppPurchasePriceSchedulesGeneratedClient,
  AppStoreFullApiInAppPurchasePriceSchedulesGeneratedFunctionNames,
  type AppStoreFullApiInAppPurchasePriceSchedulesGeneratedClient,
  type AppStoreFullApiInAppPurchasePriceSchedulesOperationPathParamMap,
  type AppStoreFullApiInAppPurchasePriceSchedulesOperationRequestMap,
} from "./full-api.generated/client/in-app-purchase-price-schedules-chunk.generated.js";
import {
  createAppStoreFullApiInAppPurchasesGeneratedClient,
  AppStoreFullApiInAppPurchasesGeneratedFunctionNames,
  type AppStoreFullApiInAppPurchasesGeneratedClient,
  type AppStoreFullApiInAppPurchasesOperationPathParamMap,
  type AppStoreFullApiInAppPurchasesOperationRequestMap,
} from "./full-api.generated/client/in-app-purchases-chunk.generated.js";
import {
  createAppStoreFullApiInAppPurchaseSubmissionsGeneratedClient,
  AppStoreFullApiInAppPurchaseSubmissionsGeneratedFunctionNames,
  type AppStoreFullApiInAppPurchaseSubmissionsGeneratedClient,
  type AppStoreFullApiInAppPurchaseSubmissionsOperationPathParamMap,
  type AppStoreFullApiInAppPurchaseSubmissionsOperationRequestMap,
} from "./full-api.generated/client/in-app-purchase-submissions-chunk.generated.js";
import {
  createAppStoreFullApiMarketplaceSearchDetailsGeneratedClient,
  AppStoreFullApiMarketplaceSearchDetailsGeneratedFunctionNames,
  type AppStoreFullApiMarketplaceSearchDetailsGeneratedClient,
  type AppStoreFullApiMarketplaceSearchDetailsOperationPathParamMap,
  type AppStoreFullApiMarketplaceSearchDetailsOperationRequestMap,
} from "./full-api.generated/client/marketplace-search-details-chunk.generated.js";
import {
  createAppStoreFullApiMarketplaceWebhooksGeneratedClient,
  AppStoreFullApiMarketplaceWebhooksGeneratedFunctionNames,
  type AppStoreFullApiMarketplaceWebhooksGeneratedClient,
  type AppStoreFullApiMarketplaceWebhooksOperationPathParamMap,
  type AppStoreFullApiMarketplaceWebhooksOperationRequestMap,
} from "./full-api.generated/client/marketplace-webhooks-chunk.generated.js";
import {
  createAppStoreFullApiMerchantIdsGeneratedClient,
  AppStoreFullApiMerchantIdsGeneratedFunctionNames,
  type AppStoreFullApiMerchantIdsGeneratedClient,
  type AppStoreFullApiMerchantIdsOperationPathParamMap,
  type AppStoreFullApiMerchantIdsOperationRequestMap,
} from "./full-api.generated/client/merchant-ids-chunk.generated.js";
import {
  createAppStoreFullApiNominationsGeneratedClient,
  AppStoreFullApiNominationsGeneratedFunctionNames,
  type AppStoreFullApiNominationsGeneratedClient,
  type AppStoreFullApiNominationsOperationPathParamMap,
  type AppStoreFullApiNominationsOperationRequestMap,
} from "./full-api.generated/client/nominations-chunk.generated.js";
import {
  createAppStoreFullApiPassTypeIdsGeneratedClient,
  AppStoreFullApiPassTypeIdsGeneratedFunctionNames,
  type AppStoreFullApiPassTypeIdsGeneratedClient,
  type AppStoreFullApiPassTypeIdsOperationPathParamMap,
  type AppStoreFullApiPassTypeIdsOperationRequestMap,
} from "./full-api.generated/client/pass-type-ids-chunk.generated.js";
import {
  createAppStoreFullApiPreReleaseVersionsGeneratedClient,
  AppStoreFullApiPreReleaseVersionsGeneratedFunctionNames,
  type AppStoreFullApiPreReleaseVersionsGeneratedClient,
  type AppStoreFullApiPreReleaseVersionsOperationPathParamMap,
  type AppStoreFullApiPreReleaseVersionsOperationRequestMap,
} from "./full-api.generated/client/pre-release-versions-chunk.generated.js";
import {
  createAppStoreFullApiProfilesGeneratedClient,
  AppStoreFullApiProfilesGeneratedFunctionNames,
  type AppStoreFullApiProfilesGeneratedClient,
  type AppStoreFullApiProfilesOperationPathParamMap,
  type AppStoreFullApiProfilesOperationRequestMap,
} from "./full-api.generated/client/profiles-chunk.generated.js";
import {
  createAppStoreFullApiPromotedPurchasesGeneratedClient,
  AppStoreFullApiPromotedPurchasesGeneratedFunctionNames,
  type AppStoreFullApiPromotedPurchasesGeneratedClient,
  type AppStoreFullApiPromotedPurchasesOperationPathParamMap,
  type AppStoreFullApiPromotedPurchasesOperationRequestMap,
} from "./full-api.generated/client/promoted-purchases-chunk.generated.js";
import {
  createAppStoreFullApiReviewSubmissionItemsGeneratedClient,
  AppStoreFullApiReviewSubmissionItemsGeneratedFunctionNames,
  type AppStoreFullApiReviewSubmissionItemsGeneratedClient,
  type AppStoreFullApiReviewSubmissionItemsOperationPathParamMap,
  type AppStoreFullApiReviewSubmissionItemsOperationRequestMap,
} from "./full-api.generated/client/review-submission-items-chunk.generated.js";
import {
  createAppStoreFullApiReviewSubmissionsGeneratedClient,
  AppStoreFullApiReviewSubmissionsGeneratedFunctionNames,
  type AppStoreFullApiReviewSubmissionsGeneratedClient,
  type AppStoreFullApiReviewSubmissionsOperationPathParamMap,
  type AppStoreFullApiReviewSubmissionsOperationRequestMap,
} from "./full-api.generated/client/review-submissions-chunk.generated.js";
import {
  createAppStoreFullApiRoutingAppCoveragesGeneratedClient,
  AppStoreFullApiRoutingAppCoveragesGeneratedFunctionNames,
  type AppStoreFullApiRoutingAppCoveragesGeneratedClient,
  type AppStoreFullApiRoutingAppCoveragesOperationPathParamMap,
  type AppStoreFullApiRoutingAppCoveragesOperationRequestMap,
} from "./full-api.generated/client/routing-app-coverages-chunk.generated.js";
import {
  createAppStoreFullApiSalesReportsGeneratedClient,
  AppStoreFullApiSalesReportsGeneratedFunctionNames,
  type AppStoreFullApiSalesReportsGeneratedClient,
  type AppStoreFullApiSalesReportsOperationPathParamMap,
  type AppStoreFullApiSalesReportsOperationRequestMap,
} from "./full-api.generated/client/sales-reports-chunk.generated.js";
import {
  createAppStoreFullApiSandboxTestersGeneratedClient,
  AppStoreFullApiSandboxTestersGeneratedFunctionNames,
  type AppStoreFullApiSandboxTestersGeneratedClient,
  type AppStoreFullApiSandboxTestersOperationPathParamMap,
  type AppStoreFullApiSandboxTestersOperationRequestMap,
} from "./full-api.generated/client/sandbox-testers-chunk.generated.js";
import {
  createAppStoreFullApiSandboxTestersClearPurchaseHistoryRequestGeneratedClient,
  AppStoreFullApiSandboxTestersClearPurchaseHistoryRequestGeneratedFunctionNames,
  type AppStoreFullApiSandboxTestersClearPurchaseHistoryRequestGeneratedClient,
  type AppStoreFullApiSandboxTestersClearPurchaseHistoryRequestOperationPathParamMap,
  type AppStoreFullApiSandboxTestersClearPurchaseHistoryRequestOperationRequestMap,
} from "./full-api.generated/client/sandbox-testers-clear-purchase-history-request-chunk.generated.js";
import {
  createAppStoreFullApiScmGitReferencesGeneratedClient,
  AppStoreFullApiScmGitReferencesGeneratedFunctionNames,
  type AppStoreFullApiScmGitReferencesGeneratedClient,
  type AppStoreFullApiScmGitReferencesOperationPathParamMap,
  type AppStoreFullApiScmGitReferencesOperationRequestMap,
} from "./full-api.generated/client/scm-git-references-chunk.generated.js";
import {
  createAppStoreFullApiScmProvidersGeneratedClient,
  AppStoreFullApiScmProvidersGeneratedFunctionNames,
  type AppStoreFullApiScmProvidersGeneratedClient,
  type AppStoreFullApiScmProvidersOperationPathParamMap,
  type AppStoreFullApiScmProvidersOperationRequestMap,
} from "./full-api.generated/client/scm-providers-chunk.generated.js";
import {
  createAppStoreFullApiScmPullRequestsGeneratedClient,
  AppStoreFullApiScmPullRequestsGeneratedFunctionNames,
  type AppStoreFullApiScmPullRequestsGeneratedClient,
  type AppStoreFullApiScmPullRequestsOperationPathParamMap,
  type AppStoreFullApiScmPullRequestsOperationRequestMap,
} from "./full-api.generated/client/scm-pull-requests-chunk.generated.js";
import {
  createAppStoreFullApiScmRepositoriesGeneratedClient,
  AppStoreFullApiScmRepositoriesGeneratedFunctionNames,
  type AppStoreFullApiScmRepositoriesGeneratedClient,
  type AppStoreFullApiScmRepositoriesOperationPathParamMap,
  type AppStoreFullApiScmRepositoriesOperationRequestMap,
} from "./full-api.generated/client/scm-repositories-chunk.generated.js";
import {
  createAppStoreFullApiSubscriptionAppStoreReviewScreenshotsGeneratedClient,
  AppStoreFullApiSubscriptionAppStoreReviewScreenshotsGeneratedFunctionNames,
  type AppStoreFullApiSubscriptionAppStoreReviewScreenshotsGeneratedClient,
  type AppStoreFullApiSubscriptionAppStoreReviewScreenshotsOperationPathParamMap,
  type AppStoreFullApiSubscriptionAppStoreReviewScreenshotsOperationRequestMap,
} from "./full-api.generated/client/subscription-app-store-review-screenshots-chunk.generated.js";
import {
  createAppStoreFullApiSubscriptionAvailabilitiesGeneratedClient,
  AppStoreFullApiSubscriptionAvailabilitiesGeneratedFunctionNames,
  type AppStoreFullApiSubscriptionAvailabilitiesGeneratedClient,
  type AppStoreFullApiSubscriptionAvailabilitiesOperationPathParamMap,
  type AppStoreFullApiSubscriptionAvailabilitiesOperationRequestMap,
} from "./full-api.generated/client/subscription-availabilities-chunk.generated.js";
import {
  createAppStoreFullApiSubscriptionGracePeriodsGeneratedClient,
  AppStoreFullApiSubscriptionGracePeriodsGeneratedFunctionNames,
  type AppStoreFullApiSubscriptionGracePeriodsGeneratedClient,
  type AppStoreFullApiSubscriptionGracePeriodsOperationPathParamMap,
  type AppStoreFullApiSubscriptionGracePeriodsOperationRequestMap,
} from "./full-api.generated/client/subscription-grace-periods-chunk.generated.js";
import {
  createAppStoreFullApiSubscriptionGroupLocalizationsGeneratedClient,
  AppStoreFullApiSubscriptionGroupLocalizationsGeneratedFunctionNames,
  type AppStoreFullApiSubscriptionGroupLocalizationsGeneratedClient,
  type AppStoreFullApiSubscriptionGroupLocalizationsOperationPathParamMap,
  type AppStoreFullApiSubscriptionGroupLocalizationsOperationRequestMap,
} from "./full-api.generated/client/subscription-group-localizations-chunk.generated.js";
import {
  createAppStoreFullApiSubscriptionGroupsGeneratedClient,
  AppStoreFullApiSubscriptionGroupsGeneratedFunctionNames,
  type AppStoreFullApiSubscriptionGroupsGeneratedClient,
  type AppStoreFullApiSubscriptionGroupsOperationPathParamMap,
  type AppStoreFullApiSubscriptionGroupsOperationRequestMap,
} from "./full-api.generated/client/subscription-groups-chunk.generated.js";
import {
  createAppStoreFullApiSubscriptionGroupSubmissionsGeneratedClient,
  AppStoreFullApiSubscriptionGroupSubmissionsGeneratedFunctionNames,
  type AppStoreFullApiSubscriptionGroupSubmissionsGeneratedClient,
  type AppStoreFullApiSubscriptionGroupSubmissionsOperationPathParamMap,
  type AppStoreFullApiSubscriptionGroupSubmissionsOperationRequestMap,
} from "./full-api.generated/client/subscription-group-submissions-chunk.generated.js";
import {
  createAppStoreFullApiSubscriptionImagesGeneratedClient,
  AppStoreFullApiSubscriptionImagesGeneratedFunctionNames,
  type AppStoreFullApiSubscriptionImagesGeneratedClient,
  type AppStoreFullApiSubscriptionImagesOperationPathParamMap,
  type AppStoreFullApiSubscriptionImagesOperationRequestMap,
} from "./full-api.generated/client/subscription-images-chunk.generated.js";
import {
  createAppStoreFullApiSubscriptionIntroductoryOffersGeneratedClient,
  AppStoreFullApiSubscriptionIntroductoryOffersGeneratedFunctionNames,
  type AppStoreFullApiSubscriptionIntroductoryOffersGeneratedClient,
  type AppStoreFullApiSubscriptionIntroductoryOffersOperationPathParamMap,
  type AppStoreFullApiSubscriptionIntroductoryOffersOperationRequestMap,
} from "./full-api.generated/client/subscription-introductory-offers-chunk.generated.js";
import {
  createAppStoreFullApiSubscriptionLocalizationsGeneratedClient,
  AppStoreFullApiSubscriptionLocalizationsGeneratedFunctionNames,
  type AppStoreFullApiSubscriptionLocalizationsGeneratedClient,
  type AppStoreFullApiSubscriptionLocalizationsOperationPathParamMap,
  type AppStoreFullApiSubscriptionLocalizationsOperationRequestMap,
} from "./full-api.generated/client/subscription-localizations-chunk.generated.js";
import {
  createAppStoreFullApiSubscriptionOfferCodeCustomCodesGeneratedClient,
  AppStoreFullApiSubscriptionOfferCodeCustomCodesGeneratedFunctionNames,
  type AppStoreFullApiSubscriptionOfferCodeCustomCodesGeneratedClient,
  type AppStoreFullApiSubscriptionOfferCodeCustomCodesOperationPathParamMap,
  type AppStoreFullApiSubscriptionOfferCodeCustomCodesOperationRequestMap,
} from "./full-api.generated/client/subscription-offer-code-custom-codes-chunk.generated.js";
import {
  createAppStoreFullApiSubscriptionOfferCodeOneTimeUseCodesGeneratedClient,
  AppStoreFullApiSubscriptionOfferCodeOneTimeUseCodesGeneratedFunctionNames,
  type AppStoreFullApiSubscriptionOfferCodeOneTimeUseCodesGeneratedClient,
  type AppStoreFullApiSubscriptionOfferCodeOneTimeUseCodesOperationPathParamMap,
  type AppStoreFullApiSubscriptionOfferCodeOneTimeUseCodesOperationRequestMap,
} from "./full-api.generated/client/subscription-offer-code-one-time-use-codes-chunk.generated.js";
import {
  createAppStoreFullApiSubscriptionOfferCodesGeneratedClient,
  AppStoreFullApiSubscriptionOfferCodesGeneratedFunctionNames,
  type AppStoreFullApiSubscriptionOfferCodesGeneratedClient,
  type AppStoreFullApiSubscriptionOfferCodesOperationPathParamMap,
  type AppStoreFullApiSubscriptionOfferCodesOperationRequestMap,
} from "./full-api.generated/client/subscription-offer-codes-chunk.generated.js";
import {
  createAppStoreFullApiSubscriptionPlanAvailabilitiesGeneratedClient,
  AppStoreFullApiSubscriptionPlanAvailabilitiesGeneratedFunctionNames,
  type AppStoreFullApiSubscriptionPlanAvailabilitiesGeneratedClient,
  type AppStoreFullApiSubscriptionPlanAvailabilitiesOperationPathParamMap,
  type AppStoreFullApiSubscriptionPlanAvailabilitiesOperationRequestMap,
} from "./full-api.generated/client/subscription-plan-availabilities-chunk.generated.js";
import {
  createAppStoreFullApiSubscriptionPricePointsGeneratedClient,
  AppStoreFullApiSubscriptionPricePointsGeneratedFunctionNames,
  type AppStoreFullApiSubscriptionPricePointsGeneratedClient,
  type AppStoreFullApiSubscriptionPricePointsOperationPathParamMap,
  type AppStoreFullApiSubscriptionPricePointsOperationRequestMap,
} from "./full-api.generated/client/subscription-price-points-chunk.generated.js";
import {
  createAppStoreFullApiSubscriptionPricesGeneratedClient,
  AppStoreFullApiSubscriptionPricesGeneratedFunctionNames,
  type AppStoreFullApiSubscriptionPricesGeneratedClient,
  type AppStoreFullApiSubscriptionPricesOperationPathParamMap,
  type AppStoreFullApiSubscriptionPricesOperationRequestMap,
} from "./full-api.generated/client/subscription-prices-chunk.generated.js";
import {
  createAppStoreFullApiSubscriptionPromotionalOffersGeneratedClient,
  AppStoreFullApiSubscriptionPromotionalOffersGeneratedFunctionNames,
  type AppStoreFullApiSubscriptionPromotionalOffersGeneratedClient,
  type AppStoreFullApiSubscriptionPromotionalOffersOperationPathParamMap,
  type AppStoreFullApiSubscriptionPromotionalOffersOperationRequestMap,
} from "./full-api.generated/client/subscription-promotional-offers-chunk.generated.js";
import {
  createAppStoreFullApiSubscriptionsGeneratedClient,
  AppStoreFullApiSubscriptionsGeneratedFunctionNames,
  type AppStoreFullApiSubscriptionsGeneratedClient,
  type AppStoreFullApiSubscriptionsOperationPathParamMap,
  type AppStoreFullApiSubscriptionsOperationRequestMap,
} from "./full-api.generated/client/subscriptions-chunk.generated.js";
import {
  createAppStoreFullApiSubscriptionSubmissionsGeneratedClient,
  AppStoreFullApiSubscriptionSubmissionsGeneratedFunctionNames,
  type AppStoreFullApiSubscriptionSubmissionsGeneratedClient,
  type AppStoreFullApiSubscriptionSubmissionsOperationPathParamMap,
  type AppStoreFullApiSubscriptionSubmissionsOperationRequestMap,
} from "./full-api.generated/client/subscription-submissions-chunk.generated.js";
import {
  createAppStoreFullApiTerritoriesGeneratedClient,
  AppStoreFullApiTerritoriesGeneratedFunctionNames,
  type AppStoreFullApiTerritoriesGeneratedClient,
  type AppStoreFullApiTerritoriesOperationPathParamMap,
  type AppStoreFullApiTerritoriesOperationRequestMap,
} from "./full-api.generated/client/territories-chunk.generated.js";
import {
  createAppStoreFullApiTerritoryAvailabilitiesGeneratedClient,
  AppStoreFullApiTerritoryAvailabilitiesGeneratedFunctionNames,
  type AppStoreFullApiTerritoryAvailabilitiesGeneratedClient,
  type AppStoreFullApiTerritoryAvailabilitiesOperationPathParamMap,
  type AppStoreFullApiTerritoryAvailabilitiesOperationRequestMap,
} from "./full-api.generated/client/territory-availabilities-chunk.generated.js";
import {
  createAppStoreFullApiUserInvitationsGeneratedClient,
  AppStoreFullApiUserInvitationsGeneratedFunctionNames,
  type AppStoreFullApiUserInvitationsGeneratedClient,
  type AppStoreFullApiUserInvitationsOperationPathParamMap,
  type AppStoreFullApiUserInvitationsOperationRequestMap,
} from "./full-api.generated/client/user-invitations-chunk.generated.js";
import {
  createAppStoreFullApiUsersGeneratedClient,
  AppStoreFullApiUsersGeneratedFunctionNames,
  type AppStoreFullApiUsersGeneratedClient,
  type AppStoreFullApiUsersOperationPathParamMap,
  type AppStoreFullApiUsersOperationRequestMap,
} from "./full-api.generated/client/users-chunk.generated.js";
import {
  createAppStoreFullApiWebhookDeliveriesGeneratedClient,
  AppStoreFullApiWebhookDeliveriesGeneratedFunctionNames,
  type AppStoreFullApiWebhookDeliveriesGeneratedClient,
  type AppStoreFullApiWebhookDeliveriesOperationPathParamMap,
  type AppStoreFullApiWebhookDeliveriesOperationRequestMap,
} from "./full-api.generated/client/webhook-deliveries-chunk.generated.js";
import {
  createAppStoreFullApiWebhookPingsGeneratedClient,
  AppStoreFullApiWebhookPingsGeneratedFunctionNames,
  type AppStoreFullApiWebhookPingsGeneratedClient,
  type AppStoreFullApiWebhookPingsOperationPathParamMap,
  type AppStoreFullApiWebhookPingsOperationRequestMap,
} from "./full-api.generated/client/webhook-pings-chunk.generated.js";
import {
  createAppStoreFullApiWebhooksGeneratedClient,
  AppStoreFullApiWebhooksGeneratedFunctionNames,
  type AppStoreFullApiWebhooksGeneratedClient,
  type AppStoreFullApiWebhooksOperationPathParamMap,
  type AppStoreFullApiWebhooksOperationRequestMap,
} from "./full-api.generated/client/webhooks-chunk.generated.js";
import {
  createAppStoreFullApiWinBackOffersGeneratedClient,
  AppStoreFullApiWinBackOffersGeneratedFunctionNames,
  type AppStoreFullApiWinBackOffersGeneratedClient,
  type AppStoreFullApiWinBackOffersOperationPathParamMap,
  type AppStoreFullApiWinBackOffersOperationRequestMap,
} from "./full-api.generated/client/win-back-offers-chunk.generated.js";

export type AppStoreFullApiPathParamValue = string | number;
export interface AppStoreFullApiOperationPathParamMap extends AppStoreFullApiAccessibilityDeclarationsOperationPathParamMap, AppStoreFullApiActorsOperationPathParamMap, AppStoreFullApiAgeRatingDeclarationsOperationPathParamMap, AppStoreFullApiAlternativeDistributionDomainsOperationPathParamMap, AppStoreFullApiAlternativeDistributionKeysOperationPathParamMap, AppStoreFullApiAlternativeDistributionPackageDeltasOperationPathParamMap, AppStoreFullApiAlternativeDistributionPackagesOperationPathParamMap, AppStoreFullApiAlternativeDistributionPackageVariantsOperationPathParamMap, AppStoreFullApiAlternativeDistributionPackageVersionsOperationPathParamMap, AppStoreFullApiAnalyticsReportInstancesOperationPathParamMap, AppStoreFullApiAnalyticsReportRequestsOperationPathParamMap, AppStoreFullApiAnalyticsReportsOperationPathParamMap, AppStoreFullApiAnalyticsReportSegmentsOperationPathParamMap, AppStoreFullApiAndroidToIosAppMappingDetailsOperationPathParamMap, AppStoreFullApiAppAvailabilitiesOperationPathParamMap, AppStoreFullApiAppCategoriesOperationPathParamMap, AppStoreFullApiAppClipAdvancedExperienceImagesOperationPathParamMap, AppStoreFullApiAppClipAdvancedExperiencesOperationPathParamMap, AppStoreFullApiAppClipAppStoreReviewDetailsOperationPathParamMap, AppStoreFullApiAppClipDefaultExperienceLocalizationsOperationPathParamMap, AppStoreFullApiAppClipDefaultExperiencesOperationPathParamMap, AppStoreFullApiAppClipHeaderImagesOperationPathParamMap, AppStoreFullApiAppClipsOperationPathParamMap, AppStoreFullApiAppCustomProductPageLocalizationsOperationPathParamMap, AppStoreFullApiAppCustomProductPagesOperationPathParamMap, AppStoreFullApiAppCustomProductPageVersionsOperationPathParamMap, AppStoreFullApiAppEncryptionDeclarationDocumentsOperationPathParamMap, AppStoreFullApiAppEncryptionDeclarationsOperationPathParamMap, AppStoreFullApiAppEventLocalizationsOperationPathParamMap, AppStoreFullApiAppEventsOperationPathParamMap, AppStoreFullApiAppEventScreenshotsOperationPathParamMap, AppStoreFullApiAppEventVideoClipsOperationPathParamMap, AppStoreFullApiAppInfoLocalizationsOperationPathParamMap, AppStoreFullApiAppInfosOperationPathParamMap, AppStoreFullApiAppPreviewsOperationPathParamMap, AppStoreFullApiAppPreviewSetsOperationPathParamMap, AppStoreFullApiAppPricePointsOperationPathParamMap, AppStoreFullApiAppPriceSchedulesOperationPathParamMap, AppStoreFullApiApps01OperationPathParamMap, AppStoreFullApiApps02OperationPathParamMap, AppStoreFullApiAppScreenshotsOperationPathParamMap, AppStoreFullApiAppScreenshotSetsOperationPathParamMap, AppStoreFullApiAppStoreReviewAttachmentsOperationPathParamMap, AppStoreFullApiAppStoreReviewDetailsOperationPathParamMap, AppStoreFullApiAppStoreVersionExperimentsOperationPathParamMap, AppStoreFullApiAppStoreVersionExperimentTreatmentLocalizationsOperationPathParamMap, AppStoreFullApiAppStoreVersionExperimentTreatmentsOperationPathParamMap, AppStoreFullApiAppStoreVersionLocalizationsOperationPathParamMap, AppStoreFullApiAppStoreVersionPhasedReleasesOperationPathParamMap, AppStoreFullApiAppStoreVersionPromotionsOperationPathParamMap, AppStoreFullApiAppStoreVersionReleaseRequestsOperationPathParamMap, AppStoreFullApiAppStoreVersionsOperationPathParamMap, AppStoreFullApiAppStoreVersionSubmissionsOperationPathParamMap, AppStoreFullApiAppTagsOperationPathParamMap, AppStoreFullApiBackgroundAssetsOperationPathParamMap, AppStoreFullApiBackgroundAssetUploadFilesOperationPathParamMap, AppStoreFullApiBackgroundAssetVersionAppStoreReleasesOperationPathParamMap, AppStoreFullApiBackgroundAssetVersionExternalBetaReleasesOperationPathParamMap, AppStoreFullApiBackgroundAssetVersionInternalBetaReleasesOperationPathParamMap, AppStoreFullApiBackgroundAssetVersionsOperationPathParamMap, AppStoreFullApiBetaAppClipInvocationLocalizationsOperationPathParamMap, AppStoreFullApiBetaAppClipInvocationsOperationPathParamMap, AppStoreFullApiBetaAppLocalizationsOperationPathParamMap, AppStoreFullApiBetaAppReviewDetailsOperationPathParamMap, AppStoreFullApiBetaAppReviewSubmissionsOperationPathParamMap, AppStoreFullApiBetaBuildLocalizationsOperationPathParamMap, AppStoreFullApiBetaCrashLogsOperationPathParamMap, AppStoreFullApiBetaFeedbackCrashSubmissionsOperationPathParamMap, AppStoreFullApiBetaFeedbackScreenshotSubmissionsOperationPathParamMap, AppStoreFullApiBetaGroupsOperationPathParamMap, AppStoreFullApiBetaLicenseAgreementsOperationPathParamMap, AppStoreFullApiBetaRecruitmentCriteriaOperationPathParamMap, AppStoreFullApiBetaRecruitmentCriterionOptionsOperationPathParamMap, AppStoreFullApiBetaTesterInvitationsOperationPathParamMap, AppStoreFullApiBetaTestersOperationPathParamMap, AppStoreFullApiBuildBetaDetailsOperationPathParamMap, AppStoreFullApiBuildBetaNotificationsOperationPathParamMap, AppStoreFullApiBuildBundlesOperationPathParamMap, AppStoreFullApiBuildsOperationPathParamMap, AppStoreFullApiBuildUploadFilesOperationPathParamMap, AppStoreFullApiBuildUploadsOperationPathParamMap, AppStoreFullApiBundleIdCapabilitiesOperationPathParamMap, AppStoreFullApiBundleIdsOperationPathParamMap, AppStoreFullApiCertificatesOperationPathParamMap, AppStoreFullApiCiArtifactsOperationPathParamMap, AppStoreFullApiCiBuildActionsOperationPathParamMap, AppStoreFullApiCiBuildRunsOperationPathParamMap, AppStoreFullApiCiIssuesOperationPathParamMap, AppStoreFullApiCiMacOsVersionsOperationPathParamMap, AppStoreFullApiCiProductsOperationPathParamMap, AppStoreFullApiCiTestResultsOperationPathParamMap, AppStoreFullApiCiWorkflowsOperationPathParamMap, AppStoreFullApiCiXcodeVersionsOperationPathParamMap, AppStoreFullApiCustomerReviewResponsesOperationPathParamMap, AppStoreFullApiCustomerReviewsOperationPathParamMap, AppStoreFullApiDevicesOperationPathParamMap, AppStoreFullApiDiagnosticSignaturesOperationPathParamMap, AppStoreFullApiEndAppAvailabilityPreOrdersOperationPathParamMap, AppStoreFullApiEndUserLicenseAgreementsOperationPathParamMap, AppStoreFullApiFinanceReportsOperationPathParamMap, AppStoreFullApiGameCenterAchievementImagesOperationPathParamMap, AppStoreFullApiGameCenterAchievementLocalizationsOperationPathParamMap, AppStoreFullApiGameCenterAchievementReleasesOperationPathParamMap, AppStoreFullApiGameCenterAchievementsOperationPathParamMap, AppStoreFullApiGameCenterAchievementVersionsOperationPathParamMap, AppStoreFullApiGameCenterActivitiesOperationPathParamMap, AppStoreFullApiGameCenterActivityImagesOperationPathParamMap, AppStoreFullApiGameCenterActivityLocalizationsOperationPathParamMap, AppStoreFullApiGameCenterActivityVersionReleasesOperationPathParamMap, AppStoreFullApiGameCenterActivityVersionsOperationPathParamMap, AppStoreFullApiGameCenterAppVersionsOperationPathParamMap, AppStoreFullApiGameCenterChallengeImagesOperationPathParamMap, AppStoreFullApiGameCenterChallengeLocalizationsOperationPathParamMap, AppStoreFullApiGameCenterChallengesOperationPathParamMap, AppStoreFullApiGameCenterChallengeVersionReleasesOperationPathParamMap, AppStoreFullApiGameCenterChallengeVersionsOperationPathParamMap, AppStoreFullApiGameCenterDetailsOperationPathParamMap, AppStoreFullApiGameCenterEnabledVersionsOperationPathParamMap, AppStoreFullApiGameCenterGroupsOperationPathParamMap, AppStoreFullApiGameCenterLeaderboardEntrySubmissionsOperationPathParamMap, AppStoreFullApiGameCenterLeaderboardImagesOperationPathParamMap, AppStoreFullApiGameCenterLeaderboardLocalizationsOperationPathParamMap, AppStoreFullApiGameCenterLeaderboardReleasesOperationPathParamMap, AppStoreFullApiGameCenterLeaderboardsOperationPathParamMap, AppStoreFullApiGameCenterLeaderboardSetImagesOperationPathParamMap, AppStoreFullApiGameCenterLeaderboardSetLocalizationsOperationPathParamMap, AppStoreFullApiGameCenterLeaderboardSetMemberLocalizationsOperationPathParamMap, AppStoreFullApiGameCenterLeaderboardSetReleasesOperationPathParamMap, AppStoreFullApiGameCenterLeaderboardSetsOperationPathParamMap, AppStoreFullApiGameCenterLeaderboardSetVersionsOperationPathParamMap, AppStoreFullApiGameCenterLeaderboardVersionsOperationPathParamMap, AppStoreFullApiGameCenterMatchmakingQueuesOperationPathParamMap, AppStoreFullApiGameCenterMatchmakingRulesOperationPathParamMap, AppStoreFullApiGameCenterMatchmakingRuleSetsOperationPathParamMap, AppStoreFullApiGameCenterMatchmakingRuleSetTestsOperationPathParamMap, AppStoreFullApiGameCenterMatchmakingTeamsOperationPathParamMap, AppStoreFullApiGameCenterPlayerAchievementSubmissionsOperationPathParamMap, AppStoreFullApiInAppPurchaseAppStoreReviewScreenshotsOperationPathParamMap, AppStoreFullApiInAppPurchaseAvailabilitiesOperationPathParamMap, AppStoreFullApiInAppPurchaseContentsOperationPathParamMap, AppStoreFullApiInAppPurchaseImagesOperationPathParamMap, AppStoreFullApiInAppPurchaseLocalizationsOperationPathParamMap, AppStoreFullApiInAppPurchaseOfferCodeCustomCodesOperationPathParamMap, AppStoreFullApiInAppPurchaseOfferCodeOneTimeUseCodesOperationPathParamMap, AppStoreFullApiInAppPurchaseOfferCodesOperationPathParamMap, AppStoreFullApiInAppPurchasePricePointsOperationPathParamMap, AppStoreFullApiInAppPurchasePriceSchedulesOperationPathParamMap, AppStoreFullApiInAppPurchasesOperationPathParamMap, AppStoreFullApiInAppPurchaseSubmissionsOperationPathParamMap, AppStoreFullApiMarketplaceSearchDetailsOperationPathParamMap, AppStoreFullApiMarketplaceWebhooksOperationPathParamMap, AppStoreFullApiMerchantIdsOperationPathParamMap, AppStoreFullApiNominationsOperationPathParamMap, AppStoreFullApiPassTypeIdsOperationPathParamMap, AppStoreFullApiPreReleaseVersionsOperationPathParamMap, AppStoreFullApiProfilesOperationPathParamMap, AppStoreFullApiPromotedPurchasesOperationPathParamMap, AppStoreFullApiReviewSubmissionItemsOperationPathParamMap, AppStoreFullApiReviewSubmissionsOperationPathParamMap, AppStoreFullApiRoutingAppCoveragesOperationPathParamMap, AppStoreFullApiSalesReportsOperationPathParamMap, AppStoreFullApiSandboxTestersOperationPathParamMap, AppStoreFullApiSandboxTestersClearPurchaseHistoryRequestOperationPathParamMap, AppStoreFullApiScmGitReferencesOperationPathParamMap, AppStoreFullApiScmProvidersOperationPathParamMap, AppStoreFullApiScmPullRequestsOperationPathParamMap, AppStoreFullApiScmRepositoriesOperationPathParamMap, AppStoreFullApiSubscriptionAppStoreReviewScreenshotsOperationPathParamMap, AppStoreFullApiSubscriptionAvailabilitiesOperationPathParamMap, AppStoreFullApiSubscriptionGracePeriodsOperationPathParamMap, AppStoreFullApiSubscriptionGroupLocalizationsOperationPathParamMap, AppStoreFullApiSubscriptionGroupsOperationPathParamMap, AppStoreFullApiSubscriptionGroupSubmissionsOperationPathParamMap, AppStoreFullApiSubscriptionImagesOperationPathParamMap, AppStoreFullApiSubscriptionIntroductoryOffersOperationPathParamMap, AppStoreFullApiSubscriptionLocalizationsOperationPathParamMap, AppStoreFullApiSubscriptionOfferCodeCustomCodesOperationPathParamMap, AppStoreFullApiSubscriptionOfferCodeOneTimeUseCodesOperationPathParamMap, AppStoreFullApiSubscriptionOfferCodesOperationPathParamMap, AppStoreFullApiSubscriptionPlanAvailabilitiesOperationPathParamMap, AppStoreFullApiSubscriptionPricePointsOperationPathParamMap, AppStoreFullApiSubscriptionPricesOperationPathParamMap, AppStoreFullApiSubscriptionPromotionalOffersOperationPathParamMap, AppStoreFullApiSubscriptionsOperationPathParamMap, AppStoreFullApiSubscriptionSubmissionsOperationPathParamMap, AppStoreFullApiTerritoriesOperationPathParamMap, AppStoreFullApiTerritoryAvailabilitiesOperationPathParamMap, AppStoreFullApiUserInvitationsOperationPathParamMap, AppStoreFullApiUsersOperationPathParamMap, AppStoreFullApiWebhookDeliveriesOperationPathParamMap, AppStoreFullApiWebhookPingsOperationPathParamMap, AppStoreFullApiWebhooksOperationPathParamMap, AppStoreFullApiWinBackOffersOperationPathParamMap {}

export type AppStoreFullApiOperationKey = keyof AppStoreFullApiOperationPathParamMap & string;

export type AppStoreFullApiOperationQueryInput<OperationKey extends AppStoreFullApiOperationKey> =
  AppStoreFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: AppStoreFullApiOperationQueryMap[OperationKey] }
    : { query?: AppStoreFullApiOperationQueryMap[OperationKey] };

export type AppStoreFullApiOperationBodyInput<OperationKey extends AppStoreFullApiOperationKey> =
  [AppStoreFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : AppStoreFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: AppStoreFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: AppStoreFullApiOperationRequestBodyMap[OperationKey] };

export type AppStoreFullApiOperationInput<OperationKey extends AppStoreFullApiOperationKey> = Omit<AppStoreOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends AppStoreFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: AppStoreFullApiOperationPathParamMap[OperationKey] }
) & AppStoreFullApiOperationQueryInput<OperationKey> & AppStoreFullApiOperationBodyInput<OperationKey>;

export interface AppStoreFullApiOperationRequestMap extends AppStoreFullApiAccessibilityDeclarationsOperationRequestMap, AppStoreFullApiActorsOperationRequestMap, AppStoreFullApiAgeRatingDeclarationsOperationRequestMap, AppStoreFullApiAlternativeDistributionDomainsOperationRequestMap, AppStoreFullApiAlternativeDistributionKeysOperationRequestMap, AppStoreFullApiAlternativeDistributionPackageDeltasOperationRequestMap, AppStoreFullApiAlternativeDistributionPackagesOperationRequestMap, AppStoreFullApiAlternativeDistributionPackageVariantsOperationRequestMap, AppStoreFullApiAlternativeDistributionPackageVersionsOperationRequestMap, AppStoreFullApiAnalyticsReportInstancesOperationRequestMap, AppStoreFullApiAnalyticsReportRequestsOperationRequestMap, AppStoreFullApiAnalyticsReportsOperationRequestMap, AppStoreFullApiAnalyticsReportSegmentsOperationRequestMap, AppStoreFullApiAndroidToIosAppMappingDetailsOperationRequestMap, AppStoreFullApiAppAvailabilitiesOperationRequestMap, AppStoreFullApiAppCategoriesOperationRequestMap, AppStoreFullApiAppClipAdvancedExperienceImagesOperationRequestMap, AppStoreFullApiAppClipAdvancedExperiencesOperationRequestMap, AppStoreFullApiAppClipAppStoreReviewDetailsOperationRequestMap, AppStoreFullApiAppClipDefaultExperienceLocalizationsOperationRequestMap, AppStoreFullApiAppClipDefaultExperiencesOperationRequestMap, AppStoreFullApiAppClipHeaderImagesOperationRequestMap, AppStoreFullApiAppClipsOperationRequestMap, AppStoreFullApiAppCustomProductPageLocalizationsOperationRequestMap, AppStoreFullApiAppCustomProductPagesOperationRequestMap, AppStoreFullApiAppCustomProductPageVersionsOperationRequestMap, AppStoreFullApiAppEncryptionDeclarationDocumentsOperationRequestMap, AppStoreFullApiAppEncryptionDeclarationsOperationRequestMap, AppStoreFullApiAppEventLocalizationsOperationRequestMap, AppStoreFullApiAppEventsOperationRequestMap, AppStoreFullApiAppEventScreenshotsOperationRequestMap, AppStoreFullApiAppEventVideoClipsOperationRequestMap, AppStoreFullApiAppInfoLocalizationsOperationRequestMap, AppStoreFullApiAppInfosOperationRequestMap, AppStoreFullApiAppPreviewsOperationRequestMap, AppStoreFullApiAppPreviewSetsOperationRequestMap, AppStoreFullApiAppPricePointsOperationRequestMap, AppStoreFullApiAppPriceSchedulesOperationRequestMap, AppStoreFullApiApps01OperationRequestMap, AppStoreFullApiApps02OperationRequestMap, AppStoreFullApiAppScreenshotsOperationRequestMap, AppStoreFullApiAppScreenshotSetsOperationRequestMap, AppStoreFullApiAppStoreReviewAttachmentsOperationRequestMap, AppStoreFullApiAppStoreReviewDetailsOperationRequestMap, AppStoreFullApiAppStoreVersionExperimentsOperationRequestMap, AppStoreFullApiAppStoreVersionExperimentTreatmentLocalizationsOperationRequestMap, AppStoreFullApiAppStoreVersionExperimentTreatmentsOperationRequestMap, AppStoreFullApiAppStoreVersionLocalizationsOperationRequestMap, AppStoreFullApiAppStoreVersionPhasedReleasesOperationRequestMap, AppStoreFullApiAppStoreVersionPromotionsOperationRequestMap, AppStoreFullApiAppStoreVersionReleaseRequestsOperationRequestMap, AppStoreFullApiAppStoreVersionsOperationRequestMap, AppStoreFullApiAppStoreVersionSubmissionsOperationRequestMap, AppStoreFullApiAppTagsOperationRequestMap, AppStoreFullApiBackgroundAssetsOperationRequestMap, AppStoreFullApiBackgroundAssetUploadFilesOperationRequestMap, AppStoreFullApiBackgroundAssetVersionAppStoreReleasesOperationRequestMap, AppStoreFullApiBackgroundAssetVersionExternalBetaReleasesOperationRequestMap, AppStoreFullApiBackgroundAssetVersionInternalBetaReleasesOperationRequestMap, AppStoreFullApiBackgroundAssetVersionsOperationRequestMap, AppStoreFullApiBetaAppClipInvocationLocalizationsOperationRequestMap, AppStoreFullApiBetaAppClipInvocationsOperationRequestMap, AppStoreFullApiBetaAppLocalizationsOperationRequestMap, AppStoreFullApiBetaAppReviewDetailsOperationRequestMap, AppStoreFullApiBetaAppReviewSubmissionsOperationRequestMap, AppStoreFullApiBetaBuildLocalizationsOperationRequestMap, AppStoreFullApiBetaCrashLogsOperationRequestMap, AppStoreFullApiBetaFeedbackCrashSubmissionsOperationRequestMap, AppStoreFullApiBetaFeedbackScreenshotSubmissionsOperationRequestMap, AppStoreFullApiBetaGroupsOperationRequestMap, AppStoreFullApiBetaLicenseAgreementsOperationRequestMap, AppStoreFullApiBetaRecruitmentCriteriaOperationRequestMap, AppStoreFullApiBetaRecruitmentCriterionOptionsOperationRequestMap, AppStoreFullApiBetaTesterInvitationsOperationRequestMap, AppStoreFullApiBetaTestersOperationRequestMap, AppStoreFullApiBuildBetaDetailsOperationRequestMap, AppStoreFullApiBuildBetaNotificationsOperationRequestMap, AppStoreFullApiBuildBundlesOperationRequestMap, AppStoreFullApiBuildsOperationRequestMap, AppStoreFullApiBuildUploadFilesOperationRequestMap, AppStoreFullApiBuildUploadsOperationRequestMap, AppStoreFullApiBundleIdCapabilitiesOperationRequestMap, AppStoreFullApiBundleIdsOperationRequestMap, AppStoreFullApiCertificatesOperationRequestMap, AppStoreFullApiCiArtifactsOperationRequestMap, AppStoreFullApiCiBuildActionsOperationRequestMap, AppStoreFullApiCiBuildRunsOperationRequestMap, AppStoreFullApiCiIssuesOperationRequestMap, AppStoreFullApiCiMacOsVersionsOperationRequestMap, AppStoreFullApiCiProductsOperationRequestMap, AppStoreFullApiCiTestResultsOperationRequestMap, AppStoreFullApiCiWorkflowsOperationRequestMap, AppStoreFullApiCiXcodeVersionsOperationRequestMap, AppStoreFullApiCustomerReviewResponsesOperationRequestMap, AppStoreFullApiCustomerReviewsOperationRequestMap, AppStoreFullApiDevicesOperationRequestMap, AppStoreFullApiDiagnosticSignaturesOperationRequestMap, AppStoreFullApiEndAppAvailabilityPreOrdersOperationRequestMap, AppStoreFullApiEndUserLicenseAgreementsOperationRequestMap, AppStoreFullApiFinanceReportsOperationRequestMap, AppStoreFullApiGameCenterAchievementImagesOperationRequestMap, AppStoreFullApiGameCenterAchievementLocalizationsOperationRequestMap, AppStoreFullApiGameCenterAchievementReleasesOperationRequestMap, AppStoreFullApiGameCenterAchievementsOperationRequestMap, AppStoreFullApiGameCenterAchievementVersionsOperationRequestMap, AppStoreFullApiGameCenterActivitiesOperationRequestMap, AppStoreFullApiGameCenterActivityImagesOperationRequestMap, AppStoreFullApiGameCenterActivityLocalizationsOperationRequestMap, AppStoreFullApiGameCenterActivityVersionReleasesOperationRequestMap, AppStoreFullApiGameCenterActivityVersionsOperationRequestMap, AppStoreFullApiGameCenterAppVersionsOperationRequestMap, AppStoreFullApiGameCenterChallengeImagesOperationRequestMap, AppStoreFullApiGameCenterChallengeLocalizationsOperationRequestMap, AppStoreFullApiGameCenterChallengesOperationRequestMap, AppStoreFullApiGameCenterChallengeVersionReleasesOperationRequestMap, AppStoreFullApiGameCenterChallengeVersionsOperationRequestMap, AppStoreFullApiGameCenterDetailsOperationRequestMap, AppStoreFullApiGameCenterEnabledVersionsOperationRequestMap, AppStoreFullApiGameCenterGroupsOperationRequestMap, AppStoreFullApiGameCenterLeaderboardEntrySubmissionsOperationRequestMap, AppStoreFullApiGameCenterLeaderboardImagesOperationRequestMap, AppStoreFullApiGameCenterLeaderboardLocalizationsOperationRequestMap, AppStoreFullApiGameCenterLeaderboardReleasesOperationRequestMap, AppStoreFullApiGameCenterLeaderboardsOperationRequestMap, AppStoreFullApiGameCenterLeaderboardSetImagesOperationRequestMap, AppStoreFullApiGameCenterLeaderboardSetLocalizationsOperationRequestMap, AppStoreFullApiGameCenterLeaderboardSetMemberLocalizationsOperationRequestMap, AppStoreFullApiGameCenterLeaderboardSetReleasesOperationRequestMap, AppStoreFullApiGameCenterLeaderboardSetsOperationRequestMap, AppStoreFullApiGameCenterLeaderboardSetVersionsOperationRequestMap, AppStoreFullApiGameCenterLeaderboardVersionsOperationRequestMap, AppStoreFullApiGameCenterMatchmakingQueuesOperationRequestMap, AppStoreFullApiGameCenterMatchmakingRulesOperationRequestMap, AppStoreFullApiGameCenterMatchmakingRuleSetsOperationRequestMap, AppStoreFullApiGameCenterMatchmakingRuleSetTestsOperationRequestMap, AppStoreFullApiGameCenterMatchmakingTeamsOperationRequestMap, AppStoreFullApiGameCenterPlayerAchievementSubmissionsOperationRequestMap, AppStoreFullApiInAppPurchaseAppStoreReviewScreenshotsOperationRequestMap, AppStoreFullApiInAppPurchaseAvailabilitiesOperationRequestMap, AppStoreFullApiInAppPurchaseContentsOperationRequestMap, AppStoreFullApiInAppPurchaseImagesOperationRequestMap, AppStoreFullApiInAppPurchaseLocalizationsOperationRequestMap, AppStoreFullApiInAppPurchaseOfferCodeCustomCodesOperationRequestMap, AppStoreFullApiInAppPurchaseOfferCodeOneTimeUseCodesOperationRequestMap, AppStoreFullApiInAppPurchaseOfferCodesOperationRequestMap, AppStoreFullApiInAppPurchasePricePointsOperationRequestMap, AppStoreFullApiInAppPurchasePriceSchedulesOperationRequestMap, AppStoreFullApiInAppPurchasesOperationRequestMap, AppStoreFullApiInAppPurchaseSubmissionsOperationRequestMap, AppStoreFullApiMarketplaceSearchDetailsOperationRequestMap, AppStoreFullApiMarketplaceWebhooksOperationRequestMap, AppStoreFullApiMerchantIdsOperationRequestMap, AppStoreFullApiNominationsOperationRequestMap, AppStoreFullApiPassTypeIdsOperationRequestMap, AppStoreFullApiPreReleaseVersionsOperationRequestMap, AppStoreFullApiProfilesOperationRequestMap, AppStoreFullApiPromotedPurchasesOperationRequestMap, AppStoreFullApiReviewSubmissionItemsOperationRequestMap, AppStoreFullApiReviewSubmissionsOperationRequestMap, AppStoreFullApiRoutingAppCoveragesOperationRequestMap, AppStoreFullApiSalesReportsOperationRequestMap, AppStoreFullApiSandboxTestersOperationRequestMap, AppStoreFullApiSandboxTestersClearPurchaseHistoryRequestOperationRequestMap, AppStoreFullApiScmGitReferencesOperationRequestMap, AppStoreFullApiScmProvidersOperationRequestMap, AppStoreFullApiScmPullRequestsOperationRequestMap, AppStoreFullApiScmRepositoriesOperationRequestMap, AppStoreFullApiSubscriptionAppStoreReviewScreenshotsOperationRequestMap, AppStoreFullApiSubscriptionAvailabilitiesOperationRequestMap, AppStoreFullApiSubscriptionGracePeriodsOperationRequestMap, AppStoreFullApiSubscriptionGroupLocalizationsOperationRequestMap, AppStoreFullApiSubscriptionGroupsOperationRequestMap, AppStoreFullApiSubscriptionGroupSubmissionsOperationRequestMap, AppStoreFullApiSubscriptionImagesOperationRequestMap, AppStoreFullApiSubscriptionIntroductoryOffersOperationRequestMap, AppStoreFullApiSubscriptionLocalizationsOperationRequestMap, AppStoreFullApiSubscriptionOfferCodeCustomCodesOperationRequestMap, AppStoreFullApiSubscriptionOfferCodeOneTimeUseCodesOperationRequestMap, AppStoreFullApiSubscriptionOfferCodesOperationRequestMap, AppStoreFullApiSubscriptionPlanAvailabilitiesOperationRequestMap, AppStoreFullApiSubscriptionPricePointsOperationRequestMap, AppStoreFullApiSubscriptionPricesOperationRequestMap, AppStoreFullApiSubscriptionPromotionalOffersOperationRequestMap, AppStoreFullApiSubscriptionsOperationRequestMap, AppStoreFullApiSubscriptionSubmissionsOperationRequestMap, AppStoreFullApiTerritoriesOperationRequestMap, AppStoreFullApiTerritoryAvailabilitiesOperationRequestMap, AppStoreFullApiUserInvitationsOperationRequestMap, AppStoreFullApiUsersOperationRequestMap, AppStoreFullApiWebhookDeliveriesOperationRequestMap, AppStoreFullApiWebhookPingsOperationRequestMap, AppStoreFullApiWebhooksOperationRequestMap, AppStoreFullApiWinBackOffersOperationRequestMap {}

export type AppStoreFullApiOperationArgs<OperationKey extends AppStoreFullApiOperationKey> = {} extends AppStoreFullApiOperationPathParamMap[OperationKey]
  ? [input?: AppStoreFullApiOperationRequestMap[OperationKey]]
  : [input: AppStoreFullApiOperationRequestMap[OperationKey]];

export type AppStoreGeneratedOperationCaller = <OperationKey extends AppStoreFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: AppStoreFullApiOperationArgs<OperationKey>
) => Promise<AppStoreFullApiOperationResponseMap[OperationKey]>;

export interface AppStoreFullApiGeneratedClient extends AppStoreFullApiAccessibilityDeclarationsGeneratedClient, AppStoreFullApiActorsGeneratedClient, AppStoreFullApiAgeRatingDeclarationsGeneratedClient, AppStoreFullApiAlternativeDistributionDomainsGeneratedClient, AppStoreFullApiAlternativeDistributionKeysGeneratedClient, AppStoreFullApiAlternativeDistributionPackageDeltasGeneratedClient, AppStoreFullApiAlternativeDistributionPackagesGeneratedClient, AppStoreFullApiAlternativeDistributionPackageVariantsGeneratedClient, AppStoreFullApiAlternativeDistributionPackageVersionsGeneratedClient, AppStoreFullApiAnalyticsReportInstancesGeneratedClient, AppStoreFullApiAnalyticsReportRequestsGeneratedClient, AppStoreFullApiAnalyticsReportsGeneratedClient, AppStoreFullApiAnalyticsReportSegmentsGeneratedClient, AppStoreFullApiAndroidToIosAppMappingDetailsGeneratedClient, AppStoreFullApiAppAvailabilitiesGeneratedClient, AppStoreFullApiAppCategoriesGeneratedClient, AppStoreFullApiAppClipAdvancedExperienceImagesGeneratedClient, AppStoreFullApiAppClipAdvancedExperiencesGeneratedClient, AppStoreFullApiAppClipAppStoreReviewDetailsGeneratedClient, AppStoreFullApiAppClipDefaultExperienceLocalizationsGeneratedClient, AppStoreFullApiAppClipDefaultExperiencesGeneratedClient, AppStoreFullApiAppClipHeaderImagesGeneratedClient, AppStoreFullApiAppClipsGeneratedClient, AppStoreFullApiAppCustomProductPageLocalizationsGeneratedClient, AppStoreFullApiAppCustomProductPagesGeneratedClient, AppStoreFullApiAppCustomProductPageVersionsGeneratedClient, AppStoreFullApiAppEncryptionDeclarationDocumentsGeneratedClient, AppStoreFullApiAppEncryptionDeclarationsGeneratedClient, AppStoreFullApiAppEventLocalizationsGeneratedClient, AppStoreFullApiAppEventsGeneratedClient, AppStoreFullApiAppEventScreenshotsGeneratedClient, AppStoreFullApiAppEventVideoClipsGeneratedClient, AppStoreFullApiAppInfoLocalizationsGeneratedClient, AppStoreFullApiAppInfosGeneratedClient, AppStoreFullApiAppPreviewsGeneratedClient, AppStoreFullApiAppPreviewSetsGeneratedClient, AppStoreFullApiAppPricePointsGeneratedClient, AppStoreFullApiAppPriceSchedulesGeneratedClient, AppStoreFullApiApps01GeneratedClient, AppStoreFullApiApps02GeneratedClient, AppStoreFullApiAppScreenshotsGeneratedClient, AppStoreFullApiAppScreenshotSetsGeneratedClient, AppStoreFullApiAppStoreReviewAttachmentsGeneratedClient, AppStoreFullApiAppStoreReviewDetailsGeneratedClient, AppStoreFullApiAppStoreVersionExperimentsGeneratedClient, AppStoreFullApiAppStoreVersionExperimentTreatmentLocalizationsGeneratedClient, AppStoreFullApiAppStoreVersionExperimentTreatmentsGeneratedClient, AppStoreFullApiAppStoreVersionLocalizationsGeneratedClient, AppStoreFullApiAppStoreVersionPhasedReleasesGeneratedClient, AppStoreFullApiAppStoreVersionPromotionsGeneratedClient, AppStoreFullApiAppStoreVersionReleaseRequestsGeneratedClient, AppStoreFullApiAppStoreVersionsGeneratedClient, AppStoreFullApiAppStoreVersionSubmissionsGeneratedClient, AppStoreFullApiAppTagsGeneratedClient, AppStoreFullApiBackgroundAssetsGeneratedClient, AppStoreFullApiBackgroundAssetUploadFilesGeneratedClient, AppStoreFullApiBackgroundAssetVersionAppStoreReleasesGeneratedClient, AppStoreFullApiBackgroundAssetVersionExternalBetaReleasesGeneratedClient, AppStoreFullApiBackgroundAssetVersionInternalBetaReleasesGeneratedClient, AppStoreFullApiBackgroundAssetVersionsGeneratedClient, AppStoreFullApiBetaAppClipInvocationLocalizationsGeneratedClient, AppStoreFullApiBetaAppClipInvocationsGeneratedClient, AppStoreFullApiBetaAppLocalizationsGeneratedClient, AppStoreFullApiBetaAppReviewDetailsGeneratedClient, AppStoreFullApiBetaAppReviewSubmissionsGeneratedClient, AppStoreFullApiBetaBuildLocalizationsGeneratedClient, AppStoreFullApiBetaCrashLogsGeneratedClient, AppStoreFullApiBetaFeedbackCrashSubmissionsGeneratedClient, AppStoreFullApiBetaFeedbackScreenshotSubmissionsGeneratedClient, AppStoreFullApiBetaGroupsGeneratedClient, AppStoreFullApiBetaLicenseAgreementsGeneratedClient, AppStoreFullApiBetaRecruitmentCriteriaGeneratedClient, AppStoreFullApiBetaRecruitmentCriterionOptionsGeneratedClient, AppStoreFullApiBetaTesterInvitationsGeneratedClient, AppStoreFullApiBetaTestersGeneratedClient, AppStoreFullApiBuildBetaDetailsGeneratedClient, AppStoreFullApiBuildBetaNotificationsGeneratedClient, AppStoreFullApiBuildBundlesGeneratedClient, AppStoreFullApiBuildsGeneratedClient, AppStoreFullApiBuildUploadFilesGeneratedClient, AppStoreFullApiBuildUploadsGeneratedClient, AppStoreFullApiBundleIdCapabilitiesGeneratedClient, AppStoreFullApiBundleIdsGeneratedClient, AppStoreFullApiCertificatesGeneratedClient, AppStoreFullApiCiArtifactsGeneratedClient, AppStoreFullApiCiBuildActionsGeneratedClient, AppStoreFullApiCiBuildRunsGeneratedClient, AppStoreFullApiCiIssuesGeneratedClient, AppStoreFullApiCiMacOsVersionsGeneratedClient, AppStoreFullApiCiProductsGeneratedClient, AppStoreFullApiCiTestResultsGeneratedClient, AppStoreFullApiCiWorkflowsGeneratedClient, AppStoreFullApiCiXcodeVersionsGeneratedClient, AppStoreFullApiCustomerReviewResponsesGeneratedClient, AppStoreFullApiCustomerReviewsGeneratedClient, AppStoreFullApiDevicesGeneratedClient, AppStoreFullApiDiagnosticSignaturesGeneratedClient, AppStoreFullApiEndAppAvailabilityPreOrdersGeneratedClient, AppStoreFullApiEndUserLicenseAgreementsGeneratedClient, AppStoreFullApiFinanceReportsGeneratedClient, AppStoreFullApiGameCenterAchievementImagesGeneratedClient, AppStoreFullApiGameCenterAchievementLocalizationsGeneratedClient, AppStoreFullApiGameCenterAchievementReleasesGeneratedClient, AppStoreFullApiGameCenterAchievementsGeneratedClient, AppStoreFullApiGameCenterAchievementVersionsGeneratedClient, AppStoreFullApiGameCenterActivitiesGeneratedClient, AppStoreFullApiGameCenterActivityImagesGeneratedClient, AppStoreFullApiGameCenterActivityLocalizationsGeneratedClient, AppStoreFullApiGameCenterActivityVersionReleasesGeneratedClient, AppStoreFullApiGameCenterActivityVersionsGeneratedClient, AppStoreFullApiGameCenterAppVersionsGeneratedClient, AppStoreFullApiGameCenterChallengeImagesGeneratedClient, AppStoreFullApiGameCenterChallengeLocalizationsGeneratedClient, AppStoreFullApiGameCenterChallengesGeneratedClient, AppStoreFullApiGameCenterChallengeVersionReleasesGeneratedClient, AppStoreFullApiGameCenterChallengeVersionsGeneratedClient, AppStoreFullApiGameCenterDetailsGeneratedClient, AppStoreFullApiGameCenterEnabledVersionsGeneratedClient, AppStoreFullApiGameCenterGroupsGeneratedClient, AppStoreFullApiGameCenterLeaderboardEntrySubmissionsGeneratedClient, AppStoreFullApiGameCenterLeaderboardImagesGeneratedClient, AppStoreFullApiGameCenterLeaderboardLocalizationsGeneratedClient, AppStoreFullApiGameCenterLeaderboardReleasesGeneratedClient, AppStoreFullApiGameCenterLeaderboardsGeneratedClient, AppStoreFullApiGameCenterLeaderboardSetImagesGeneratedClient, AppStoreFullApiGameCenterLeaderboardSetLocalizationsGeneratedClient, AppStoreFullApiGameCenterLeaderboardSetMemberLocalizationsGeneratedClient, AppStoreFullApiGameCenterLeaderboardSetReleasesGeneratedClient, AppStoreFullApiGameCenterLeaderboardSetsGeneratedClient, AppStoreFullApiGameCenterLeaderboardSetVersionsGeneratedClient, AppStoreFullApiGameCenterLeaderboardVersionsGeneratedClient, AppStoreFullApiGameCenterMatchmakingQueuesGeneratedClient, AppStoreFullApiGameCenterMatchmakingRulesGeneratedClient, AppStoreFullApiGameCenterMatchmakingRuleSetsGeneratedClient, AppStoreFullApiGameCenterMatchmakingRuleSetTestsGeneratedClient, AppStoreFullApiGameCenterMatchmakingTeamsGeneratedClient, AppStoreFullApiGameCenterPlayerAchievementSubmissionsGeneratedClient, AppStoreFullApiInAppPurchaseAppStoreReviewScreenshotsGeneratedClient, AppStoreFullApiInAppPurchaseAvailabilitiesGeneratedClient, AppStoreFullApiInAppPurchaseContentsGeneratedClient, AppStoreFullApiInAppPurchaseImagesGeneratedClient, AppStoreFullApiInAppPurchaseLocalizationsGeneratedClient, AppStoreFullApiInAppPurchaseOfferCodeCustomCodesGeneratedClient, AppStoreFullApiInAppPurchaseOfferCodeOneTimeUseCodesGeneratedClient, AppStoreFullApiInAppPurchaseOfferCodesGeneratedClient, AppStoreFullApiInAppPurchasePricePointsGeneratedClient, AppStoreFullApiInAppPurchasePriceSchedulesGeneratedClient, AppStoreFullApiInAppPurchasesGeneratedClient, AppStoreFullApiInAppPurchaseSubmissionsGeneratedClient, AppStoreFullApiMarketplaceSearchDetailsGeneratedClient, AppStoreFullApiMarketplaceWebhooksGeneratedClient, AppStoreFullApiMerchantIdsGeneratedClient, AppStoreFullApiNominationsGeneratedClient, AppStoreFullApiPassTypeIdsGeneratedClient, AppStoreFullApiPreReleaseVersionsGeneratedClient, AppStoreFullApiProfilesGeneratedClient, AppStoreFullApiPromotedPurchasesGeneratedClient, AppStoreFullApiReviewSubmissionItemsGeneratedClient, AppStoreFullApiReviewSubmissionsGeneratedClient, AppStoreFullApiRoutingAppCoveragesGeneratedClient, AppStoreFullApiSalesReportsGeneratedClient, AppStoreFullApiSandboxTestersGeneratedClient, AppStoreFullApiSandboxTestersClearPurchaseHistoryRequestGeneratedClient, AppStoreFullApiScmGitReferencesGeneratedClient, AppStoreFullApiScmProvidersGeneratedClient, AppStoreFullApiScmPullRequestsGeneratedClient, AppStoreFullApiScmRepositoriesGeneratedClient, AppStoreFullApiSubscriptionAppStoreReviewScreenshotsGeneratedClient, AppStoreFullApiSubscriptionAvailabilitiesGeneratedClient, AppStoreFullApiSubscriptionGracePeriodsGeneratedClient, AppStoreFullApiSubscriptionGroupLocalizationsGeneratedClient, AppStoreFullApiSubscriptionGroupsGeneratedClient, AppStoreFullApiSubscriptionGroupSubmissionsGeneratedClient, AppStoreFullApiSubscriptionImagesGeneratedClient, AppStoreFullApiSubscriptionIntroductoryOffersGeneratedClient, AppStoreFullApiSubscriptionLocalizationsGeneratedClient, AppStoreFullApiSubscriptionOfferCodeCustomCodesGeneratedClient, AppStoreFullApiSubscriptionOfferCodeOneTimeUseCodesGeneratedClient, AppStoreFullApiSubscriptionOfferCodesGeneratedClient, AppStoreFullApiSubscriptionPlanAvailabilitiesGeneratedClient, AppStoreFullApiSubscriptionPricePointsGeneratedClient, AppStoreFullApiSubscriptionPricesGeneratedClient, AppStoreFullApiSubscriptionPromotionalOffersGeneratedClient, AppStoreFullApiSubscriptionsGeneratedClient, AppStoreFullApiSubscriptionSubmissionsGeneratedClient, AppStoreFullApiTerritoriesGeneratedClient, AppStoreFullApiTerritoryAvailabilitiesGeneratedClient, AppStoreFullApiUserInvitationsGeneratedClient, AppStoreFullApiUsersGeneratedClient, AppStoreFullApiWebhookDeliveriesGeneratedClient, AppStoreFullApiWebhookPingsGeneratedClient, AppStoreFullApiWebhooksGeneratedClient, AppStoreFullApiWinBackOffersGeneratedClient {}

export const APPSTORE_FULL_API_GENERATED_FUNCTION_COUNT = 1216 as const;
export const APPSTORE_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...AppStoreFullApiAccessibilityDeclarationsGeneratedFunctionNames,
  ...AppStoreFullApiActorsGeneratedFunctionNames,
  ...AppStoreFullApiAgeRatingDeclarationsGeneratedFunctionNames,
  ...AppStoreFullApiAlternativeDistributionDomainsGeneratedFunctionNames,
  ...AppStoreFullApiAlternativeDistributionKeysGeneratedFunctionNames,
  ...AppStoreFullApiAlternativeDistributionPackageDeltasGeneratedFunctionNames,
  ...AppStoreFullApiAlternativeDistributionPackagesGeneratedFunctionNames,
  ...AppStoreFullApiAlternativeDistributionPackageVariantsGeneratedFunctionNames,
  ...AppStoreFullApiAlternativeDistributionPackageVersionsGeneratedFunctionNames,
  ...AppStoreFullApiAnalyticsReportInstancesGeneratedFunctionNames,
  ...AppStoreFullApiAnalyticsReportRequestsGeneratedFunctionNames,
  ...AppStoreFullApiAnalyticsReportsGeneratedFunctionNames,
  ...AppStoreFullApiAnalyticsReportSegmentsGeneratedFunctionNames,
  ...AppStoreFullApiAndroidToIosAppMappingDetailsGeneratedFunctionNames,
  ...AppStoreFullApiAppAvailabilitiesGeneratedFunctionNames,
  ...AppStoreFullApiAppCategoriesGeneratedFunctionNames,
  ...AppStoreFullApiAppClipAdvancedExperienceImagesGeneratedFunctionNames,
  ...AppStoreFullApiAppClipAdvancedExperiencesGeneratedFunctionNames,
  ...AppStoreFullApiAppClipAppStoreReviewDetailsGeneratedFunctionNames,
  ...AppStoreFullApiAppClipDefaultExperienceLocalizationsGeneratedFunctionNames,
  ...AppStoreFullApiAppClipDefaultExperiencesGeneratedFunctionNames,
  ...AppStoreFullApiAppClipHeaderImagesGeneratedFunctionNames,
  ...AppStoreFullApiAppClipsGeneratedFunctionNames,
  ...AppStoreFullApiAppCustomProductPageLocalizationsGeneratedFunctionNames,
  ...AppStoreFullApiAppCustomProductPagesGeneratedFunctionNames,
  ...AppStoreFullApiAppCustomProductPageVersionsGeneratedFunctionNames,
  ...AppStoreFullApiAppEncryptionDeclarationDocumentsGeneratedFunctionNames,
  ...AppStoreFullApiAppEncryptionDeclarationsGeneratedFunctionNames,
  ...AppStoreFullApiAppEventLocalizationsGeneratedFunctionNames,
  ...AppStoreFullApiAppEventsGeneratedFunctionNames,
  ...AppStoreFullApiAppEventScreenshotsGeneratedFunctionNames,
  ...AppStoreFullApiAppEventVideoClipsGeneratedFunctionNames,
  ...AppStoreFullApiAppInfoLocalizationsGeneratedFunctionNames,
  ...AppStoreFullApiAppInfosGeneratedFunctionNames,
  ...AppStoreFullApiAppPreviewsGeneratedFunctionNames,
  ...AppStoreFullApiAppPreviewSetsGeneratedFunctionNames,
  ...AppStoreFullApiAppPricePointsGeneratedFunctionNames,
  ...AppStoreFullApiAppPriceSchedulesGeneratedFunctionNames,
  ...AppStoreFullApiApps01GeneratedFunctionNames,
  ...AppStoreFullApiApps02GeneratedFunctionNames,
  ...AppStoreFullApiAppScreenshotsGeneratedFunctionNames,
  ...AppStoreFullApiAppScreenshotSetsGeneratedFunctionNames,
  ...AppStoreFullApiAppStoreReviewAttachmentsGeneratedFunctionNames,
  ...AppStoreFullApiAppStoreReviewDetailsGeneratedFunctionNames,
  ...AppStoreFullApiAppStoreVersionExperimentsGeneratedFunctionNames,
  ...AppStoreFullApiAppStoreVersionExperimentTreatmentLocalizationsGeneratedFunctionNames,
  ...AppStoreFullApiAppStoreVersionExperimentTreatmentsGeneratedFunctionNames,
  ...AppStoreFullApiAppStoreVersionLocalizationsGeneratedFunctionNames,
  ...AppStoreFullApiAppStoreVersionPhasedReleasesGeneratedFunctionNames,
  ...AppStoreFullApiAppStoreVersionPromotionsGeneratedFunctionNames,
  ...AppStoreFullApiAppStoreVersionReleaseRequestsGeneratedFunctionNames,
  ...AppStoreFullApiAppStoreVersionsGeneratedFunctionNames,
  ...AppStoreFullApiAppStoreVersionSubmissionsGeneratedFunctionNames,
  ...AppStoreFullApiAppTagsGeneratedFunctionNames,
  ...AppStoreFullApiBackgroundAssetsGeneratedFunctionNames,
  ...AppStoreFullApiBackgroundAssetUploadFilesGeneratedFunctionNames,
  ...AppStoreFullApiBackgroundAssetVersionAppStoreReleasesGeneratedFunctionNames,
  ...AppStoreFullApiBackgroundAssetVersionExternalBetaReleasesGeneratedFunctionNames,
  ...AppStoreFullApiBackgroundAssetVersionInternalBetaReleasesGeneratedFunctionNames,
  ...AppStoreFullApiBackgroundAssetVersionsGeneratedFunctionNames,
  ...AppStoreFullApiBetaAppClipInvocationLocalizationsGeneratedFunctionNames,
  ...AppStoreFullApiBetaAppClipInvocationsGeneratedFunctionNames,
  ...AppStoreFullApiBetaAppLocalizationsGeneratedFunctionNames,
  ...AppStoreFullApiBetaAppReviewDetailsGeneratedFunctionNames,
  ...AppStoreFullApiBetaAppReviewSubmissionsGeneratedFunctionNames,
  ...AppStoreFullApiBetaBuildLocalizationsGeneratedFunctionNames,
  ...AppStoreFullApiBetaCrashLogsGeneratedFunctionNames,
  ...AppStoreFullApiBetaFeedbackCrashSubmissionsGeneratedFunctionNames,
  ...AppStoreFullApiBetaFeedbackScreenshotSubmissionsGeneratedFunctionNames,
  ...AppStoreFullApiBetaGroupsGeneratedFunctionNames,
  ...AppStoreFullApiBetaLicenseAgreementsGeneratedFunctionNames,
  ...AppStoreFullApiBetaRecruitmentCriteriaGeneratedFunctionNames,
  ...AppStoreFullApiBetaRecruitmentCriterionOptionsGeneratedFunctionNames,
  ...AppStoreFullApiBetaTesterInvitationsGeneratedFunctionNames,
  ...AppStoreFullApiBetaTestersGeneratedFunctionNames,
  ...AppStoreFullApiBuildBetaDetailsGeneratedFunctionNames,
  ...AppStoreFullApiBuildBetaNotificationsGeneratedFunctionNames,
  ...AppStoreFullApiBuildBundlesGeneratedFunctionNames,
  ...AppStoreFullApiBuildsGeneratedFunctionNames,
  ...AppStoreFullApiBuildUploadFilesGeneratedFunctionNames,
  ...AppStoreFullApiBuildUploadsGeneratedFunctionNames,
  ...AppStoreFullApiBundleIdCapabilitiesGeneratedFunctionNames,
  ...AppStoreFullApiBundleIdsGeneratedFunctionNames,
  ...AppStoreFullApiCertificatesGeneratedFunctionNames,
  ...AppStoreFullApiCiArtifactsGeneratedFunctionNames,
  ...AppStoreFullApiCiBuildActionsGeneratedFunctionNames,
  ...AppStoreFullApiCiBuildRunsGeneratedFunctionNames,
  ...AppStoreFullApiCiIssuesGeneratedFunctionNames,
  ...AppStoreFullApiCiMacOsVersionsGeneratedFunctionNames,
  ...AppStoreFullApiCiProductsGeneratedFunctionNames,
  ...AppStoreFullApiCiTestResultsGeneratedFunctionNames,
  ...AppStoreFullApiCiWorkflowsGeneratedFunctionNames,
  ...AppStoreFullApiCiXcodeVersionsGeneratedFunctionNames,
  ...AppStoreFullApiCustomerReviewResponsesGeneratedFunctionNames,
  ...AppStoreFullApiCustomerReviewsGeneratedFunctionNames,
  ...AppStoreFullApiDevicesGeneratedFunctionNames,
  ...AppStoreFullApiDiagnosticSignaturesGeneratedFunctionNames,
  ...AppStoreFullApiEndAppAvailabilityPreOrdersGeneratedFunctionNames,
  ...AppStoreFullApiEndUserLicenseAgreementsGeneratedFunctionNames,
  ...AppStoreFullApiFinanceReportsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterAchievementImagesGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterAchievementLocalizationsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterAchievementReleasesGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterAchievementsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterAchievementVersionsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterActivitiesGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterActivityImagesGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterActivityLocalizationsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterActivityVersionReleasesGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterActivityVersionsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterAppVersionsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterChallengeImagesGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterChallengeLocalizationsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterChallengesGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterChallengeVersionReleasesGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterChallengeVersionsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterDetailsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterEnabledVersionsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterGroupsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterLeaderboardEntrySubmissionsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterLeaderboardImagesGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterLeaderboardLocalizationsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterLeaderboardReleasesGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterLeaderboardsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterLeaderboardSetImagesGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterLeaderboardSetLocalizationsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterLeaderboardSetMemberLocalizationsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterLeaderboardSetReleasesGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterLeaderboardSetsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterLeaderboardSetVersionsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterLeaderboardVersionsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterMatchmakingQueuesGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterMatchmakingRulesGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterMatchmakingRuleSetsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterMatchmakingRuleSetTestsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterMatchmakingTeamsGeneratedFunctionNames,
  ...AppStoreFullApiGameCenterPlayerAchievementSubmissionsGeneratedFunctionNames,
  ...AppStoreFullApiInAppPurchaseAppStoreReviewScreenshotsGeneratedFunctionNames,
  ...AppStoreFullApiInAppPurchaseAvailabilitiesGeneratedFunctionNames,
  ...AppStoreFullApiInAppPurchaseContentsGeneratedFunctionNames,
  ...AppStoreFullApiInAppPurchaseImagesGeneratedFunctionNames,
  ...AppStoreFullApiInAppPurchaseLocalizationsGeneratedFunctionNames,
  ...AppStoreFullApiInAppPurchaseOfferCodeCustomCodesGeneratedFunctionNames,
  ...AppStoreFullApiInAppPurchaseOfferCodeOneTimeUseCodesGeneratedFunctionNames,
  ...AppStoreFullApiInAppPurchaseOfferCodesGeneratedFunctionNames,
  ...AppStoreFullApiInAppPurchasePricePointsGeneratedFunctionNames,
  ...AppStoreFullApiInAppPurchasePriceSchedulesGeneratedFunctionNames,
  ...AppStoreFullApiInAppPurchasesGeneratedFunctionNames,
  ...AppStoreFullApiInAppPurchaseSubmissionsGeneratedFunctionNames,
  ...AppStoreFullApiMarketplaceSearchDetailsGeneratedFunctionNames,
  ...AppStoreFullApiMarketplaceWebhooksGeneratedFunctionNames,
  ...AppStoreFullApiMerchantIdsGeneratedFunctionNames,
  ...AppStoreFullApiNominationsGeneratedFunctionNames,
  ...AppStoreFullApiPassTypeIdsGeneratedFunctionNames,
  ...AppStoreFullApiPreReleaseVersionsGeneratedFunctionNames,
  ...AppStoreFullApiProfilesGeneratedFunctionNames,
  ...AppStoreFullApiPromotedPurchasesGeneratedFunctionNames,
  ...AppStoreFullApiReviewSubmissionItemsGeneratedFunctionNames,
  ...AppStoreFullApiReviewSubmissionsGeneratedFunctionNames,
  ...AppStoreFullApiRoutingAppCoveragesGeneratedFunctionNames,
  ...AppStoreFullApiSalesReportsGeneratedFunctionNames,
  ...AppStoreFullApiSandboxTestersGeneratedFunctionNames,
  ...AppStoreFullApiSandboxTestersClearPurchaseHistoryRequestGeneratedFunctionNames,
  ...AppStoreFullApiScmGitReferencesGeneratedFunctionNames,
  ...AppStoreFullApiScmProvidersGeneratedFunctionNames,
  ...AppStoreFullApiScmPullRequestsGeneratedFunctionNames,
  ...AppStoreFullApiScmRepositoriesGeneratedFunctionNames,
  ...AppStoreFullApiSubscriptionAppStoreReviewScreenshotsGeneratedFunctionNames,
  ...AppStoreFullApiSubscriptionAvailabilitiesGeneratedFunctionNames,
  ...AppStoreFullApiSubscriptionGracePeriodsGeneratedFunctionNames,
  ...AppStoreFullApiSubscriptionGroupLocalizationsGeneratedFunctionNames,
  ...AppStoreFullApiSubscriptionGroupsGeneratedFunctionNames,
  ...AppStoreFullApiSubscriptionGroupSubmissionsGeneratedFunctionNames,
  ...AppStoreFullApiSubscriptionImagesGeneratedFunctionNames,
  ...AppStoreFullApiSubscriptionIntroductoryOffersGeneratedFunctionNames,
  ...AppStoreFullApiSubscriptionLocalizationsGeneratedFunctionNames,
  ...AppStoreFullApiSubscriptionOfferCodeCustomCodesGeneratedFunctionNames,
  ...AppStoreFullApiSubscriptionOfferCodeOneTimeUseCodesGeneratedFunctionNames,
  ...AppStoreFullApiSubscriptionOfferCodesGeneratedFunctionNames,
  ...AppStoreFullApiSubscriptionPlanAvailabilitiesGeneratedFunctionNames,
  ...AppStoreFullApiSubscriptionPricePointsGeneratedFunctionNames,
  ...AppStoreFullApiSubscriptionPricesGeneratedFunctionNames,
  ...AppStoreFullApiSubscriptionPromotionalOffersGeneratedFunctionNames,
  ...AppStoreFullApiSubscriptionsGeneratedFunctionNames,
  ...AppStoreFullApiSubscriptionSubmissionsGeneratedFunctionNames,
  ...AppStoreFullApiTerritoriesGeneratedFunctionNames,
  ...AppStoreFullApiTerritoryAvailabilitiesGeneratedFunctionNames,
  ...AppStoreFullApiUserInvitationsGeneratedFunctionNames,
  ...AppStoreFullApiUsersGeneratedFunctionNames,
  ...AppStoreFullApiWebhookDeliveriesGeneratedFunctionNames,
  ...AppStoreFullApiWebhookPingsGeneratedFunctionNames,
  ...AppStoreFullApiWebhooksGeneratedFunctionNames,
  ...AppStoreFullApiWinBackOffersGeneratedFunctionNames,
] as const satisfies readonly (keyof AppStoreFullApiGeneratedClient)[];

export function createAppStoreFullApiGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGeneratedClient {
  return Object.assign(
    {},
    createAppStoreFullApiAccessibilityDeclarationsGeneratedClient(callOperation),
    createAppStoreFullApiActorsGeneratedClient(callOperation),
    createAppStoreFullApiAgeRatingDeclarationsGeneratedClient(callOperation),
    createAppStoreFullApiAlternativeDistributionDomainsGeneratedClient(callOperation),
    createAppStoreFullApiAlternativeDistributionKeysGeneratedClient(callOperation),
    createAppStoreFullApiAlternativeDistributionPackageDeltasGeneratedClient(callOperation),
    createAppStoreFullApiAlternativeDistributionPackagesGeneratedClient(callOperation),
    createAppStoreFullApiAlternativeDistributionPackageVariantsGeneratedClient(callOperation),
    createAppStoreFullApiAlternativeDistributionPackageVersionsGeneratedClient(callOperation),
    createAppStoreFullApiAnalyticsReportInstancesGeneratedClient(callOperation),
    createAppStoreFullApiAnalyticsReportRequestsGeneratedClient(callOperation),
    createAppStoreFullApiAnalyticsReportsGeneratedClient(callOperation),
    createAppStoreFullApiAnalyticsReportSegmentsGeneratedClient(callOperation),
    createAppStoreFullApiAndroidToIosAppMappingDetailsGeneratedClient(callOperation),
    createAppStoreFullApiAppAvailabilitiesGeneratedClient(callOperation),
    createAppStoreFullApiAppCategoriesGeneratedClient(callOperation),
    createAppStoreFullApiAppClipAdvancedExperienceImagesGeneratedClient(callOperation),
    createAppStoreFullApiAppClipAdvancedExperiencesGeneratedClient(callOperation),
    createAppStoreFullApiAppClipAppStoreReviewDetailsGeneratedClient(callOperation),
    createAppStoreFullApiAppClipDefaultExperienceLocalizationsGeneratedClient(callOperation),
    createAppStoreFullApiAppClipDefaultExperiencesGeneratedClient(callOperation),
    createAppStoreFullApiAppClipHeaderImagesGeneratedClient(callOperation),
    createAppStoreFullApiAppClipsGeneratedClient(callOperation),
    createAppStoreFullApiAppCustomProductPageLocalizationsGeneratedClient(callOperation),
    createAppStoreFullApiAppCustomProductPagesGeneratedClient(callOperation),
    createAppStoreFullApiAppCustomProductPageVersionsGeneratedClient(callOperation),
    createAppStoreFullApiAppEncryptionDeclarationDocumentsGeneratedClient(callOperation),
    createAppStoreFullApiAppEncryptionDeclarationsGeneratedClient(callOperation),
    createAppStoreFullApiAppEventLocalizationsGeneratedClient(callOperation),
    createAppStoreFullApiAppEventsGeneratedClient(callOperation),
    createAppStoreFullApiAppEventScreenshotsGeneratedClient(callOperation),
    createAppStoreFullApiAppEventVideoClipsGeneratedClient(callOperation),
    createAppStoreFullApiAppInfoLocalizationsGeneratedClient(callOperation),
    createAppStoreFullApiAppInfosGeneratedClient(callOperation),
    createAppStoreFullApiAppPreviewsGeneratedClient(callOperation),
    createAppStoreFullApiAppPreviewSetsGeneratedClient(callOperation),
    createAppStoreFullApiAppPricePointsGeneratedClient(callOperation),
    createAppStoreFullApiAppPriceSchedulesGeneratedClient(callOperation),
    createAppStoreFullApiApps01GeneratedClient(callOperation),
    createAppStoreFullApiApps02GeneratedClient(callOperation),
    createAppStoreFullApiAppScreenshotsGeneratedClient(callOperation),
    createAppStoreFullApiAppScreenshotSetsGeneratedClient(callOperation),
    createAppStoreFullApiAppStoreReviewAttachmentsGeneratedClient(callOperation),
    createAppStoreFullApiAppStoreReviewDetailsGeneratedClient(callOperation),
    createAppStoreFullApiAppStoreVersionExperimentsGeneratedClient(callOperation),
    createAppStoreFullApiAppStoreVersionExperimentTreatmentLocalizationsGeneratedClient(callOperation),
    createAppStoreFullApiAppStoreVersionExperimentTreatmentsGeneratedClient(callOperation),
    createAppStoreFullApiAppStoreVersionLocalizationsGeneratedClient(callOperation),
    createAppStoreFullApiAppStoreVersionPhasedReleasesGeneratedClient(callOperation),
    createAppStoreFullApiAppStoreVersionPromotionsGeneratedClient(callOperation),
    createAppStoreFullApiAppStoreVersionReleaseRequestsGeneratedClient(callOperation),
    createAppStoreFullApiAppStoreVersionsGeneratedClient(callOperation),
    createAppStoreFullApiAppStoreVersionSubmissionsGeneratedClient(callOperation),
    createAppStoreFullApiAppTagsGeneratedClient(callOperation),
    createAppStoreFullApiBackgroundAssetsGeneratedClient(callOperation),
    createAppStoreFullApiBackgroundAssetUploadFilesGeneratedClient(callOperation),
    createAppStoreFullApiBackgroundAssetVersionAppStoreReleasesGeneratedClient(callOperation),
    createAppStoreFullApiBackgroundAssetVersionExternalBetaReleasesGeneratedClient(callOperation),
    createAppStoreFullApiBackgroundAssetVersionInternalBetaReleasesGeneratedClient(callOperation),
    createAppStoreFullApiBackgroundAssetVersionsGeneratedClient(callOperation),
    createAppStoreFullApiBetaAppClipInvocationLocalizationsGeneratedClient(callOperation),
    createAppStoreFullApiBetaAppClipInvocationsGeneratedClient(callOperation),
    createAppStoreFullApiBetaAppLocalizationsGeneratedClient(callOperation),
    createAppStoreFullApiBetaAppReviewDetailsGeneratedClient(callOperation),
    createAppStoreFullApiBetaAppReviewSubmissionsGeneratedClient(callOperation),
    createAppStoreFullApiBetaBuildLocalizationsGeneratedClient(callOperation),
    createAppStoreFullApiBetaCrashLogsGeneratedClient(callOperation),
    createAppStoreFullApiBetaFeedbackCrashSubmissionsGeneratedClient(callOperation),
    createAppStoreFullApiBetaFeedbackScreenshotSubmissionsGeneratedClient(callOperation),
    createAppStoreFullApiBetaGroupsGeneratedClient(callOperation),
    createAppStoreFullApiBetaLicenseAgreementsGeneratedClient(callOperation),
    createAppStoreFullApiBetaRecruitmentCriteriaGeneratedClient(callOperation),
    createAppStoreFullApiBetaRecruitmentCriterionOptionsGeneratedClient(callOperation),
    createAppStoreFullApiBetaTesterInvitationsGeneratedClient(callOperation),
    createAppStoreFullApiBetaTestersGeneratedClient(callOperation),
    createAppStoreFullApiBuildBetaDetailsGeneratedClient(callOperation),
    createAppStoreFullApiBuildBetaNotificationsGeneratedClient(callOperation),
    createAppStoreFullApiBuildBundlesGeneratedClient(callOperation),
    createAppStoreFullApiBuildsGeneratedClient(callOperation),
    createAppStoreFullApiBuildUploadFilesGeneratedClient(callOperation),
    createAppStoreFullApiBuildUploadsGeneratedClient(callOperation),
    createAppStoreFullApiBundleIdCapabilitiesGeneratedClient(callOperation),
    createAppStoreFullApiBundleIdsGeneratedClient(callOperation),
    createAppStoreFullApiCertificatesGeneratedClient(callOperation),
    createAppStoreFullApiCiArtifactsGeneratedClient(callOperation),
    createAppStoreFullApiCiBuildActionsGeneratedClient(callOperation),
    createAppStoreFullApiCiBuildRunsGeneratedClient(callOperation),
    createAppStoreFullApiCiIssuesGeneratedClient(callOperation),
    createAppStoreFullApiCiMacOsVersionsGeneratedClient(callOperation),
    createAppStoreFullApiCiProductsGeneratedClient(callOperation),
    createAppStoreFullApiCiTestResultsGeneratedClient(callOperation),
    createAppStoreFullApiCiWorkflowsGeneratedClient(callOperation),
    createAppStoreFullApiCiXcodeVersionsGeneratedClient(callOperation),
    createAppStoreFullApiCustomerReviewResponsesGeneratedClient(callOperation),
    createAppStoreFullApiCustomerReviewsGeneratedClient(callOperation),
    createAppStoreFullApiDevicesGeneratedClient(callOperation),
    createAppStoreFullApiDiagnosticSignaturesGeneratedClient(callOperation),
    createAppStoreFullApiEndAppAvailabilityPreOrdersGeneratedClient(callOperation),
    createAppStoreFullApiEndUserLicenseAgreementsGeneratedClient(callOperation),
    createAppStoreFullApiFinanceReportsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterAchievementImagesGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterAchievementLocalizationsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterAchievementReleasesGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterAchievementsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterAchievementVersionsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterActivitiesGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterActivityImagesGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterActivityLocalizationsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterActivityVersionReleasesGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterActivityVersionsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterAppVersionsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterChallengeImagesGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterChallengeLocalizationsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterChallengesGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterChallengeVersionReleasesGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterChallengeVersionsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterDetailsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterEnabledVersionsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterGroupsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterLeaderboardEntrySubmissionsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterLeaderboardImagesGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterLeaderboardLocalizationsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterLeaderboardReleasesGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterLeaderboardsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterLeaderboardSetImagesGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterLeaderboardSetLocalizationsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterLeaderboardSetMemberLocalizationsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterLeaderboardSetReleasesGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterLeaderboardSetsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterLeaderboardSetVersionsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterLeaderboardVersionsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterMatchmakingQueuesGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterMatchmakingRulesGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterMatchmakingRuleSetsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterMatchmakingRuleSetTestsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterMatchmakingTeamsGeneratedClient(callOperation),
    createAppStoreFullApiGameCenterPlayerAchievementSubmissionsGeneratedClient(callOperation),
    createAppStoreFullApiInAppPurchaseAppStoreReviewScreenshotsGeneratedClient(callOperation),
    createAppStoreFullApiInAppPurchaseAvailabilitiesGeneratedClient(callOperation),
    createAppStoreFullApiInAppPurchaseContentsGeneratedClient(callOperation),
    createAppStoreFullApiInAppPurchaseImagesGeneratedClient(callOperation),
    createAppStoreFullApiInAppPurchaseLocalizationsGeneratedClient(callOperation),
    createAppStoreFullApiInAppPurchaseOfferCodeCustomCodesGeneratedClient(callOperation),
    createAppStoreFullApiInAppPurchaseOfferCodeOneTimeUseCodesGeneratedClient(callOperation),
    createAppStoreFullApiInAppPurchaseOfferCodesGeneratedClient(callOperation),
    createAppStoreFullApiInAppPurchasePricePointsGeneratedClient(callOperation),
    createAppStoreFullApiInAppPurchasePriceSchedulesGeneratedClient(callOperation),
    createAppStoreFullApiInAppPurchasesGeneratedClient(callOperation),
    createAppStoreFullApiInAppPurchaseSubmissionsGeneratedClient(callOperation),
    createAppStoreFullApiMarketplaceSearchDetailsGeneratedClient(callOperation),
    createAppStoreFullApiMarketplaceWebhooksGeneratedClient(callOperation),
    createAppStoreFullApiMerchantIdsGeneratedClient(callOperation),
    createAppStoreFullApiNominationsGeneratedClient(callOperation),
    createAppStoreFullApiPassTypeIdsGeneratedClient(callOperation),
    createAppStoreFullApiPreReleaseVersionsGeneratedClient(callOperation),
    createAppStoreFullApiProfilesGeneratedClient(callOperation),
    createAppStoreFullApiPromotedPurchasesGeneratedClient(callOperation),
    createAppStoreFullApiReviewSubmissionItemsGeneratedClient(callOperation),
    createAppStoreFullApiReviewSubmissionsGeneratedClient(callOperation),
    createAppStoreFullApiRoutingAppCoveragesGeneratedClient(callOperation),
    createAppStoreFullApiSalesReportsGeneratedClient(callOperation),
    createAppStoreFullApiSandboxTestersGeneratedClient(callOperation),
    createAppStoreFullApiSandboxTestersClearPurchaseHistoryRequestGeneratedClient(callOperation),
    createAppStoreFullApiScmGitReferencesGeneratedClient(callOperation),
    createAppStoreFullApiScmProvidersGeneratedClient(callOperation),
    createAppStoreFullApiScmPullRequestsGeneratedClient(callOperation),
    createAppStoreFullApiScmRepositoriesGeneratedClient(callOperation),
    createAppStoreFullApiSubscriptionAppStoreReviewScreenshotsGeneratedClient(callOperation),
    createAppStoreFullApiSubscriptionAvailabilitiesGeneratedClient(callOperation),
    createAppStoreFullApiSubscriptionGracePeriodsGeneratedClient(callOperation),
    createAppStoreFullApiSubscriptionGroupLocalizationsGeneratedClient(callOperation),
    createAppStoreFullApiSubscriptionGroupsGeneratedClient(callOperation),
    createAppStoreFullApiSubscriptionGroupSubmissionsGeneratedClient(callOperation),
    createAppStoreFullApiSubscriptionImagesGeneratedClient(callOperation),
    createAppStoreFullApiSubscriptionIntroductoryOffersGeneratedClient(callOperation),
    createAppStoreFullApiSubscriptionLocalizationsGeneratedClient(callOperation),
    createAppStoreFullApiSubscriptionOfferCodeCustomCodesGeneratedClient(callOperation),
    createAppStoreFullApiSubscriptionOfferCodeOneTimeUseCodesGeneratedClient(callOperation),
    createAppStoreFullApiSubscriptionOfferCodesGeneratedClient(callOperation),
    createAppStoreFullApiSubscriptionPlanAvailabilitiesGeneratedClient(callOperation),
    createAppStoreFullApiSubscriptionPricePointsGeneratedClient(callOperation),
    createAppStoreFullApiSubscriptionPricesGeneratedClient(callOperation),
    createAppStoreFullApiSubscriptionPromotionalOffersGeneratedClient(callOperation),
    createAppStoreFullApiSubscriptionsGeneratedClient(callOperation),
    createAppStoreFullApiSubscriptionSubmissionsGeneratedClient(callOperation),
    createAppStoreFullApiTerritoriesGeneratedClient(callOperation),
    createAppStoreFullApiTerritoryAvailabilitiesGeneratedClient(callOperation),
    createAppStoreFullApiUserInvitationsGeneratedClient(callOperation),
    createAppStoreFullApiUsersGeneratedClient(callOperation),
    createAppStoreFullApiWebhookDeliveriesGeneratedClient(callOperation),
    createAppStoreFullApiWebhookPingsGeneratedClient(callOperation),
    createAppStoreFullApiWebhooksGeneratedClient(callOperation),
    createAppStoreFullApiWinBackOffersGeneratedClient(callOperation),
  ) as AppStoreFullApiGeneratedClient;
}
