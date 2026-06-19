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
export const AppStoreFullApiBuildsOperationKeys = [
  "builds_appEncryptionDeclaration_getToOneRelated",
  "builds_appEncryptionDeclaration_getToOneRelationship",
  "builds_appEncryptionDeclaration_updateToOneRelationship",
  "builds_app_getToOneRelated",
  "builds_app_getToOneRelationship",
  "builds_appStoreVersion_getToOneRelated",
  "builds_appStoreVersion_getToOneRelationship",
  "builds_betaAppReviewSubmission_getToOneRelated",
  "builds_betaAppReviewSubmission_getToOneRelationship",
  "builds_betaBuildLocalizations_getToManyRelated",
  "builds_betaBuildLocalizations_getToManyRelationship",
  "builds_betaBuildUsages_getMetrics",
  "builds_betaGroups_createToManyRelationship",
  "builds_betaGroups_deleteToManyRelationship",
  "builds_buildBetaDetail_getToOneRelated",
  "builds_buildBetaDetail_getToOneRelationship",
  "builds_diagnosticSignatures_getToManyRelated",
  "builds_diagnosticSignatures_getToManyRelationship",
  "builds_getCollection",
  "builds_getInstance",
  "builds_icons_getToManyRelated",
  "builds_icons_getToManyRelationship",
  "builds_individualTesters_createToManyRelationship",
  "builds_individualTesters_deleteToManyRelationship",
  "builds_individualTesters_getToManyRelated",
  "builds_individualTesters_getToManyRelationship",
  "builds_perfPowerMetrics_getToManyRelated",
  "builds_preReleaseVersion_getToOneRelated",
  "builds_preReleaseVersion_getToOneRelationship",
  "builds_updateInstance"
] as const;
export type AppStoreFullApiBuildsOperationKey = typeof AppStoreFullApiBuildsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBuildsOperationPathParamMap {
  "builds_appEncryptionDeclaration_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "builds_appEncryptionDeclaration_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "builds_appEncryptionDeclaration_updateToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "builds_app_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "builds_app_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "builds_appStoreVersion_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "builds_appStoreVersion_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "builds_betaAppReviewSubmission_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "builds_betaAppReviewSubmission_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "builds_betaBuildLocalizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "builds_betaBuildLocalizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "builds_betaBuildUsages_getMetrics": { "id": AppStoreFullApiPathParamValue };
  "builds_betaGroups_createToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "builds_betaGroups_deleteToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "builds_buildBetaDetail_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "builds_buildBetaDetail_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "builds_diagnosticSignatures_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "builds_diagnosticSignatures_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "builds_getCollection": {};
  "builds_getInstance": { "id": AppStoreFullApiPathParamValue };
  "builds_icons_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "builds_icons_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "builds_individualTesters_createToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "builds_individualTesters_deleteToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "builds_individualTesters_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "builds_individualTesters_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "builds_perfPowerMetrics_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "builds_preReleaseVersion_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "builds_preReleaseVersion_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "builds_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBuildsOperationRequestMap {
  "builds_appEncryptionDeclaration_getToOneRelated": AppStoreFullApiOperationInput<"builds_appEncryptionDeclaration_getToOneRelated">;
  "builds_appEncryptionDeclaration_getToOneRelationship": AppStoreFullApiOperationInput<"builds_appEncryptionDeclaration_getToOneRelationship">;
  "builds_appEncryptionDeclaration_updateToOneRelationship": AppStoreFullApiOperationInput<"builds_appEncryptionDeclaration_updateToOneRelationship">;
  "builds_app_getToOneRelated": AppStoreFullApiOperationInput<"builds_app_getToOneRelated">;
  "builds_app_getToOneRelationship": AppStoreFullApiOperationInput<"builds_app_getToOneRelationship">;
  "builds_appStoreVersion_getToOneRelated": AppStoreFullApiOperationInput<"builds_appStoreVersion_getToOneRelated">;
  "builds_appStoreVersion_getToOneRelationship": AppStoreFullApiOperationInput<"builds_appStoreVersion_getToOneRelationship">;
  "builds_betaAppReviewSubmission_getToOneRelated": AppStoreFullApiOperationInput<"builds_betaAppReviewSubmission_getToOneRelated">;
  "builds_betaAppReviewSubmission_getToOneRelationship": AppStoreFullApiOperationInput<"builds_betaAppReviewSubmission_getToOneRelationship">;
  "builds_betaBuildLocalizations_getToManyRelated": AppStoreFullApiOperationInput<"builds_betaBuildLocalizations_getToManyRelated">;
  "builds_betaBuildLocalizations_getToManyRelationship": AppStoreFullApiOperationInput<"builds_betaBuildLocalizations_getToManyRelationship">;
  "builds_betaBuildUsages_getMetrics": AppStoreFullApiOperationInput<"builds_betaBuildUsages_getMetrics">;
  "builds_betaGroups_createToManyRelationship": AppStoreFullApiOperationInput<"builds_betaGroups_createToManyRelationship">;
  "builds_betaGroups_deleteToManyRelationship": AppStoreFullApiOperationInput<"builds_betaGroups_deleteToManyRelationship">;
  "builds_buildBetaDetail_getToOneRelated": AppStoreFullApiOperationInput<"builds_buildBetaDetail_getToOneRelated">;
  "builds_buildBetaDetail_getToOneRelationship": AppStoreFullApiOperationInput<"builds_buildBetaDetail_getToOneRelationship">;
  "builds_diagnosticSignatures_getToManyRelated": AppStoreFullApiOperationInput<"builds_diagnosticSignatures_getToManyRelated">;
  "builds_diagnosticSignatures_getToManyRelationship": AppStoreFullApiOperationInput<"builds_diagnosticSignatures_getToManyRelationship">;
  "builds_getCollection": AppStoreFullApiOperationInput<"builds_getCollection">;
  "builds_getInstance": AppStoreFullApiOperationInput<"builds_getInstance">;
  "builds_icons_getToManyRelated": AppStoreFullApiOperationInput<"builds_icons_getToManyRelated">;
  "builds_icons_getToManyRelationship": AppStoreFullApiOperationInput<"builds_icons_getToManyRelationship">;
  "builds_individualTesters_createToManyRelationship": AppStoreFullApiOperationInput<"builds_individualTesters_createToManyRelationship">;
  "builds_individualTesters_deleteToManyRelationship": AppStoreFullApiOperationInput<"builds_individualTesters_deleteToManyRelationship">;
  "builds_individualTesters_getToManyRelated": AppStoreFullApiOperationInput<"builds_individualTesters_getToManyRelated">;
  "builds_individualTesters_getToManyRelationship": AppStoreFullApiOperationInput<"builds_individualTesters_getToManyRelationship">;
  "builds_perfPowerMetrics_getToManyRelated": AppStoreFullApiOperationInput<"builds_perfPowerMetrics_getToManyRelated">;
  "builds_preReleaseVersion_getToOneRelated": AppStoreFullApiOperationInput<"builds_preReleaseVersion_getToOneRelated">;
  "builds_preReleaseVersion_getToOneRelationship": AppStoreFullApiOperationInput<"builds_preReleaseVersion_getToOneRelationship">;
  "builds_updateInstance": AppStoreFullApiOperationInput<"builds_updateInstance">;
}

export interface AppStoreFullApiBuildsGeneratedClient {
  BuildsAppEncryptionDeclarationGetToOneRelated(...args: AppStoreFullApiOperationArgs<"builds_appEncryptionDeclaration_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["builds_appEncryptionDeclaration_getToOneRelated"]>;
  BuildsAppEncryptionDeclarationGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"builds_appEncryptionDeclaration_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["builds_appEncryptionDeclaration_getToOneRelationship"]>;
  BuildsAppEncryptionDeclarationUpdateToOneRelationship(...args: AppStoreFullApiOperationArgs<"builds_appEncryptionDeclaration_updateToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["builds_appEncryptionDeclaration_updateToOneRelationship"]>;
  BuildsAppGetToOneRelated(...args: AppStoreFullApiOperationArgs<"builds_app_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["builds_app_getToOneRelated"]>;
  BuildsAppGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"builds_app_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["builds_app_getToOneRelationship"]>;
  BuildsAppStoreVersionGetToOneRelated(...args: AppStoreFullApiOperationArgs<"builds_appStoreVersion_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["builds_appStoreVersion_getToOneRelated"]>;
  BuildsAppStoreVersionGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"builds_appStoreVersion_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["builds_appStoreVersion_getToOneRelationship"]>;
  BuildsBetaAppReviewSubmissionGetToOneRelated(...args: AppStoreFullApiOperationArgs<"builds_betaAppReviewSubmission_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["builds_betaAppReviewSubmission_getToOneRelated"]>;
  BuildsBetaAppReviewSubmissionGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"builds_betaAppReviewSubmission_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["builds_betaAppReviewSubmission_getToOneRelationship"]>;
  BuildsBetaBuildLocalizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"builds_betaBuildLocalizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["builds_betaBuildLocalizations_getToManyRelated"]>;
  BuildsBetaBuildLocalizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"builds_betaBuildLocalizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["builds_betaBuildLocalizations_getToManyRelationship"]>;
  BuildsBetaBuildUsagesGetMetrics(...args: AppStoreFullApiOperationArgs<"builds_betaBuildUsages_getMetrics">): Promise<AppStoreFullApiOperationResponseMap["builds_betaBuildUsages_getMetrics"]>;
  BuildsBetaGroupsCreateToManyRelationship(...args: AppStoreFullApiOperationArgs<"builds_betaGroups_createToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["builds_betaGroups_createToManyRelationship"]>;
  BuildsBetaGroupsDeleteToManyRelationship(...args: AppStoreFullApiOperationArgs<"builds_betaGroups_deleteToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["builds_betaGroups_deleteToManyRelationship"]>;
  BuildsBuildBetaDetailGetToOneRelated(...args: AppStoreFullApiOperationArgs<"builds_buildBetaDetail_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["builds_buildBetaDetail_getToOneRelated"]>;
  BuildsBuildBetaDetailGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"builds_buildBetaDetail_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["builds_buildBetaDetail_getToOneRelationship"]>;
  BuildsDiagnosticSignaturesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"builds_diagnosticSignatures_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["builds_diagnosticSignatures_getToManyRelated"]>;
  BuildsDiagnosticSignaturesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"builds_diagnosticSignatures_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["builds_diagnosticSignatures_getToManyRelationship"]>;
  BuildsGetCollection(...args: AppStoreFullApiOperationArgs<"builds_getCollection">): Promise<AppStoreFullApiOperationResponseMap["builds_getCollection"]>;
  BuildsGetInstance(...args: AppStoreFullApiOperationArgs<"builds_getInstance">): Promise<AppStoreFullApiOperationResponseMap["builds_getInstance"]>;
  BuildsIconsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"builds_icons_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["builds_icons_getToManyRelated"]>;
  BuildsIconsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"builds_icons_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["builds_icons_getToManyRelationship"]>;
  BuildsIndividualTestersCreateToManyRelationship(...args: AppStoreFullApiOperationArgs<"builds_individualTesters_createToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["builds_individualTesters_createToManyRelationship"]>;
  BuildsIndividualTestersDeleteToManyRelationship(...args: AppStoreFullApiOperationArgs<"builds_individualTesters_deleteToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["builds_individualTesters_deleteToManyRelationship"]>;
  BuildsIndividualTestersGetToManyRelated(...args: AppStoreFullApiOperationArgs<"builds_individualTesters_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["builds_individualTesters_getToManyRelated"]>;
  BuildsIndividualTestersGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"builds_individualTesters_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["builds_individualTesters_getToManyRelationship"]>;
  BuildsPerfPowerMetricsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"builds_perfPowerMetrics_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["builds_perfPowerMetrics_getToManyRelated"]>;
  BuildsPreReleaseVersionGetToOneRelated(...args: AppStoreFullApiOperationArgs<"builds_preReleaseVersion_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["builds_preReleaseVersion_getToOneRelated"]>;
  BuildsPreReleaseVersionGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"builds_preReleaseVersion_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["builds_preReleaseVersion_getToOneRelationship"]>;
  BuildsUpdateInstance(...args: AppStoreFullApiOperationArgs<"builds_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["builds_updateInstance"]>;
}

export const AppStoreFullApiBuildsGeneratedFunctionNames = [
  "BuildsAppEncryptionDeclarationGetToOneRelated",
  "BuildsAppEncryptionDeclarationGetToOneRelationship",
  "BuildsAppEncryptionDeclarationUpdateToOneRelationship",
  "BuildsAppGetToOneRelated",
  "BuildsAppGetToOneRelationship",
  "BuildsAppStoreVersionGetToOneRelated",
  "BuildsAppStoreVersionGetToOneRelationship",
  "BuildsBetaAppReviewSubmissionGetToOneRelated",
  "BuildsBetaAppReviewSubmissionGetToOneRelationship",
  "BuildsBetaBuildLocalizationsGetToManyRelated",
  "BuildsBetaBuildLocalizationsGetToManyRelationship",
  "BuildsBetaBuildUsagesGetMetrics",
  "BuildsBetaGroupsCreateToManyRelationship",
  "BuildsBetaGroupsDeleteToManyRelationship",
  "BuildsBuildBetaDetailGetToOneRelated",
  "BuildsBuildBetaDetailGetToOneRelationship",
  "BuildsDiagnosticSignaturesGetToManyRelated",
  "BuildsDiagnosticSignaturesGetToManyRelationship",
  "BuildsGetCollection",
  "BuildsGetInstance",
  "BuildsIconsGetToManyRelated",
  "BuildsIconsGetToManyRelationship",
  "BuildsIndividualTestersCreateToManyRelationship",
  "BuildsIndividualTestersDeleteToManyRelationship",
  "BuildsIndividualTestersGetToManyRelated",
  "BuildsIndividualTestersGetToManyRelationship",
  "BuildsPerfPowerMetricsGetToManyRelated",
  "BuildsPreReleaseVersionGetToOneRelated",
  "BuildsPreReleaseVersionGetToOneRelationship",
  "BuildsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiBuildsGeneratedClient)[];

export function createAppStoreFullApiBuildsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBuildsGeneratedClient {
  return {
    BuildsAppEncryptionDeclarationGetToOneRelated: (...args) => callOperation("builds_appEncryptionDeclaration_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"builds_appEncryptionDeclaration_getToOneRelated">)),
    BuildsAppEncryptionDeclarationGetToOneRelationship: (...args) => callOperation("builds_appEncryptionDeclaration_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"builds_appEncryptionDeclaration_getToOneRelationship">)),
    BuildsAppEncryptionDeclarationUpdateToOneRelationship: (...args) => callOperation("builds_appEncryptionDeclaration_updateToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"builds_appEncryptionDeclaration_updateToOneRelationship">)),
    BuildsAppGetToOneRelated: (...args) => callOperation("builds_app_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"builds_app_getToOneRelated">)),
    BuildsAppGetToOneRelationship: (...args) => callOperation("builds_app_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"builds_app_getToOneRelationship">)),
    BuildsAppStoreVersionGetToOneRelated: (...args) => callOperation("builds_appStoreVersion_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"builds_appStoreVersion_getToOneRelated">)),
    BuildsAppStoreVersionGetToOneRelationship: (...args) => callOperation("builds_appStoreVersion_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"builds_appStoreVersion_getToOneRelationship">)),
    BuildsBetaAppReviewSubmissionGetToOneRelated: (...args) => callOperation("builds_betaAppReviewSubmission_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"builds_betaAppReviewSubmission_getToOneRelated">)),
    BuildsBetaAppReviewSubmissionGetToOneRelationship: (...args) => callOperation("builds_betaAppReviewSubmission_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"builds_betaAppReviewSubmission_getToOneRelationship">)),
    BuildsBetaBuildLocalizationsGetToManyRelated: (...args) => callOperation("builds_betaBuildLocalizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"builds_betaBuildLocalizations_getToManyRelated">)),
    BuildsBetaBuildLocalizationsGetToManyRelationship: (...args) => callOperation("builds_betaBuildLocalizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"builds_betaBuildLocalizations_getToManyRelationship">)),
    BuildsBetaBuildUsagesGetMetrics: (...args) => callOperation("builds_betaBuildUsages_getMetrics", ...(args as AppStoreFullApiOperationArgs<"builds_betaBuildUsages_getMetrics">)),
    BuildsBetaGroupsCreateToManyRelationship: (...args) => callOperation("builds_betaGroups_createToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"builds_betaGroups_createToManyRelationship">)),
    BuildsBetaGroupsDeleteToManyRelationship: (...args) => callOperation("builds_betaGroups_deleteToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"builds_betaGroups_deleteToManyRelationship">)),
    BuildsBuildBetaDetailGetToOneRelated: (...args) => callOperation("builds_buildBetaDetail_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"builds_buildBetaDetail_getToOneRelated">)),
    BuildsBuildBetaDetailGetToOneRelationship: (...args) => callOperation("builds_buildBetaDetail_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"builds_buildBetaDetail_getToOneRelationship">)),
    BuildsDiagnosticSignaturesGetToManyRelated: (...args) => callOperation("builds_diagnosticSignatures_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"builds_diagnosticSignatures_getToManyRelated">)),
    BuildsDiagnosticSignaturesGetToManyRelationship: (...args) => callOperation("builds_diagnosticSignatures_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"builds_diagnosticSignatures_getToManyRelationship">)),
    BuildsGetCollection: (...args) => callOperation("builds_getCollection", ...(args as AppStoreFullApiOperationArgs<"builds_getCollection">)),
    BuildsGetInstance: (...args) => callOperation("builds_getInstance", ...(args as AppStoreFullApiOperationArgs<"builds_getInstance">)),
    BuildsIconsGetToManyRelated: (...args) => callOperation("builds_icons_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"builds_icons_getToManyRelated">)),
    BuildsIconsGetToManyRelationship: (...args) => callOperation("builds_icons_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"builds_icons_getToManyRelationship">)),
    BuildsIndividualTestersCreateToManyRelationship: (...args) => callOperation("builds_individualTesters_createToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"builds_individualTesters_createToManyRelationship">)),
    BuildsIndividualTestersDeleteToManyRelationship: (...args) => callOperation("builds_individualTesters_deleteToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"builds_individualTesters_deleteToManyRelationship">)),
    BuildsIndividualTestersGetToManyRelated: (...args) => callOperation("builds_individualTesters_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"builds_individualTesters_getToManyRelated">)),
    BuildsIndividualTestersGetToManyRelationship: (...args) => callOperation("builds_individualTesters_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"builds_individualTesters_getToManyRelationship">)),
    BuildsPerfPowerMetricsGetToManyRelated: (...args) => callOperation("builds_perfPowerMetrics_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"builds_perfPowerMetrics_getToManyRelated">)),
    BuildsPreReleaseVersionGetToOneRelated: (...args) => callOperation("builds_preReleaseVersion_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"builds_preReleaseVersion_getToOneRelated">)),
    BuildsPreReleaseVersionGetToOneRelationship: (...args) => callOperation("builds_preReleaseVersion_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"builds_preReleaseVersion_getToOneRelationship">)),
    BuildsUpdateInstance: (...args) => callOperation("builds_updateInstance", ...(args as AppStoreFullApiOperationArgs<"builds_updateInstance">)),
  };
}
