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
export const AppStoreFullApiBetaGroupsOperationKeys = [
  "betaGroups_app_getToOneRelated",
  "betaGroups_app_getToOneRelationship",
  "betaGroups_betaRecruitmentCriteria_getToOneRelated",
  "betaGroups_betaRecruitmentCriteria_getToOneRelationship",
  "betaGroups_betaRecruitmentCriterionCompatibleBuildCheck_getToOneRelated",
  "betaGroups_betaRecruitmentCriterionCompatibleBuildCheck_getToOneRelationship",
  "betaGroups_betaTesters_createToManyRelationship",
  "betaGroups_betaTesters_deleteToManyRelationship",
  "betaGroups_betaTesters_getToManyRelated",
  "betaGroups_betaTesters_getToManyRelationship",
  "betaGroups_betaTesterUsages_getMetrics",
  "betaGroups_builds_createToManyRelationship",
  "betaGroups_builds_deleteToManyRelationship",
  "betaGroups_builds_getToManyRelated",
  "betaGroups_builds_getToManyRelationship",
  "betaGroups_createInstance",
  "betaGroups_deleteInstance",
  "betaGroups_getCollection",
  "betaGroups_getInstance",
  "betaGroups_publicLinkUsages_getMetrics",
  "betaGroups_updateInstance"
] as const;
export type AppStoreFullApiBetaGroupsOperationKey = typeof AppStoreFullApiBetaGroupsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBetaGroupsOperationPathParamMap {
  "betaGroups_app_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "betaGroups_app_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaGroups_betaRecruitmentCriteria_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "betaGroups_betaRecruitmentCriteria_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaGroups_betaRecruitmentCriterionCompatibleBuildCheck_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "betaGroups_betaRecruitmentCriterionCompatibleBuildCheck_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaGroups_betaTesters_createToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaGroups_betaTesters_deleteToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaGroups_betaTesters_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "betaGroups_betaTesters_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaGroups_betaTesterUsages_getMetrics": { "id": AppStoreFullApiPathParamValue };
  "betaGroups_builds_createToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaGroups_builds_deleteToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaGroups_builds_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "betaGroups_builds_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaGroups_createInstance": {};
  "betaGroups_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "betaGroups_getCollection": {};
  "betaGroups_getInstance": { "id": AppStoreFullApiPathParamValue };
  "betaGroups_publicLinkUsages_getMetrics": { "id": AppStoreFullApiPathParamValue };
  "betaGroups_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBetaGroupsOperationRequestMap {
  "betaGroups_app_getToOneRelated": AppStoreFullApiOperationInput<"betaGroups_app_getToOneRelated">;
  "betaGroups_app_getToOneRelationship": AppStoreFullApiOperationInput<"betaGroups_app_getToOneRelationship">;
  "betaGroups_betaRecruitmentCriteria_getToOneRelated": AppStoreFullApiOperationInput<"betaGroups_betaRecruitmentCriteria_getToOneRelated">;
  "betaGroups_betaRecruitmentCriteria_getToOneRelationship": AppStoreFullApiOperationInput<"betaGroups_betaRecruitmentCriteria_getToOneRelationship">;
  "betaGroups_betaRecruitmentCriterionCompatibleBuildCheck_getToOneRelated": AppStoreFullApiOperationInput<"betaGroups_betaRecruitmentCriterionCompatibleBuildCheck_getToOneRelated">;
  "betaGroups_betaRecruitmentCriterionCompatibleBuildCheck_getToOneRelationship": AppStoreFullApiOperationInput<"betaGroups_betaRecruitmentCriterionCompatibleBuildCheck_getToOneRelationship">;
  "betaGroups_betaTesters_createToManyRelationship": AppStoreFullApiOperationInput<"betaGroups_betaTesters_createToManyRelationship">;
  "betaGroups_betaTesters_deleteToManyRelationship": AppStoreFullApiOperationInput<"betaGroups_betaTesters_deleteToManyRelationship">;
  "betaGroups_betaTesters_getToManyRelated": AppStoreFullApiOperationInput<"betaGroups_betaTesters_getToManyRelated">;
  "betaGroups_betaTesters_getToManyRelationship": AppStoreFullApiOperationInput<"betaGroups_betaTesters_getToManyRelationship">;
  "betaGroups_betaTesterUsages_getMetrics": AppStoreFullApiOperationInput<"betaGroups_betaTesterUsages_getMetrics">;
  "betaGroups_builds_createToManyRelationship": AppStoreFullApiOperationInput<"betaGroups_builds_createToManyRelationship">;
  "betaGroups_builds_deleteToManyRelationship": AppStoreFullApiOperationInput<"betaGroups_builds_deleteToManyRelationship">;
  "betaGroups_builds_getToManyRelated": AppStoreFullApiOperationInput<"betaGroups_builds_getToManyRelated">;
  "betaGroups_builds_getToManyRelationship": AppStoreFullApiOperationInput<"betaGroups_builds_getToManyRelationship">;
  "betaGroups_createInstance": AppStoreFullApiOperationInput<"betaGroups_createInstance">;
  "betaGroups_deleteInstance": AppStoreFullApiOperationInput<"betaGroups_deleteInstance">;
  "betaGroups_getCollection": AppStoreFullApiOperationInput<"betaGroups_getCollection">;
  "betaGroups_getInstance": AppStoreFullApiOperationInput<"betaGroups_getInstance">;
  "betaGroups_publicLinkUsages_getMetrics": AppStoreFullApiOperationInput<"betaGroups_publicLinkUsages_getMetrics">;
  "betaGroups_updateInstance": AppStoreFullApiOperationInput<"betaGroups_updateInstance">;
}

export interface AppStoreFullApiBetaGroupsGeneratedClient {
  BetaGroupsAppGetToOneRelated(...args: AppStoreFullApiOperationArgs<"betaGroups_app_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["betaGroups_app_getToOneRelated"]>;
  BetaGroupsAppGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"betaGroups_app_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaGroups_app_getToOneRelationship"]>;
  BetaGroupsBetaRecruitmentCriteriaGetToOneRelated(...args: AppStoreFullApiOperationArgs<"betaGroups_betaRecruitmentCriteria_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["betaGroups_betaRecruitmentCriteria_getToOneRelated"]>;
  BetaGroupsBetaRecruitmentCriteriaGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"betaGroups_betaRecruitmentCriteria_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaGroups_betaRecruitmentCriteria_getToOneRelationship"]>;
  BetaGroupsBetaRecruitmentCriterionCompatibleBuildCheckGetToOneRelated(...args: AppStoreFullApiOperationArgs<"betaGroups_betaRecruitmentCriterionCompatibleBuildCheck_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["betaGroups_betaRecruitmentCriterionCompatibleBuildCheck_getToOneRelated"]>;
  BetaGroupsBetaRecruitmentCriterionCompatibleBuildCheckGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"betaGroups_betaRecruitmentCriterionCompatibleBuildCheck_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaGroups_betaRecruitmentCriterionCompatibleBuildCheck_getToOneRelationship"]>;
  BetaGroupsBetaTestersCreateToManyRelationship(...args: AppStoreFullApiOperationArgs<"betaGroups_betaTesters_createToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaGroups_betaTesters_createToManyRelationship"]>;
  BetaGroupsBetaTestersDeleteToManyRelationship(...args: AppStoreFullApiOperationArgs<"betaGroups_betaTesters_deleteToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaGroups_betaTesters_deleteToManyRelationship"]>;
  BetaGroupsBetaTestersGetToManyRelated(...args: AppStoreFullApiOperationArgs<"betaGroups_betaTesters_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["betaGroups_betaTesters_getToManyRelated"]>;
  BetaGroupsBetaTestersGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"betaGroups_betaTesters_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaGroups_betaTesters_getToManyRelationship"]>;
  BetaGroupsBetaTesterUsagesGetMetrics(...args: AppStoreFullApiOperationArgs<"betaGroups_betaTesterUsages_getMetrics">): Promise<AppStoreFullApiOperationResponseMap["betaGroups_betaTesterUsages_getMetrics"]>;
  BetaGroupsBuildsCreateToManyRelationship(...args: AppStoreFullApiOperationArgs<"betaGroups_builds_createToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaGroups_builds_createToManyRelationship"]>;
  BetaGroupsBuildsDeleteToManyRelationship(...args: AppStoreFullApiOperationArgs<"betaGroups_builds_deleteToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaGroups_builds_deleteToManyRelationship"]>;
  BetaGroupsBuildsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"betaGroups_builds_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["betaGroups_builds_getToManyRelated"]>;
  BetaGroupsBuildsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"betaGroups_builds_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaGroups_builds_getToManyRelationship"]>;
  BetaGroupsCreateInstance(...args: AppStoreFullApiOperationArgs<"betaGroups_createInstance">): Promise<AppStoreFullApiOperationResponseMap["betaGroups_createInstance"]>;
  BetaGroupsDeleteInstance(...args: AppStoreFullApiOperationArgs<"betaGroups_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["betaGroups_deleteInstance"]>;
  BetaGroupsGetCollection(...args: AppStoreFullApiOperationArgs<"betaGroups_getCollection">): Promise<AppStoreFullApiOperationResponseMap["betaGroups_getCollection"]>;
  BetaGroupsGetInstance(...args: AppStoreFullApiOperationArgs<"betaGroups_getInstance">): Promise<AppStoreFullApiOperationResponseMap["betaGroups_getInstance"]>;
  BetaGroupsPublicLinkUsagesGetMetrics(...args: AppStoreFullApiOperationArgs<"betaGroups_publicLinkUsages_getMetrics">): Promise<AppStoreFullApiOperationResponseMap["betaGroups_publicLinkUsages_getMetrics"]>;
  BetaGroupsUpdateInstance(...args: AppStoreFullApiOperationArgs<"betaGroups_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["betaGroups_updateInstance"]>;
}

export const AppStoreFullApiBetaGroupsGeneratedFunctionNames = [
  "BetaGroupsAppGetToOneRelated",
  "BetaGroupsAppGetToOneRelationship",
  "BetaGroupsBetaRecruitmentCriteriaGetToOneRelated",
  "BetaGroupsBetaRecruitmentCriteriaGetToOneRelationship",
  "BetaGroupsBetaRecruitmentCriterionCompatibleBuildCheckGetToOneRelated",
  "BetaGroupsBetaRecruitmentCriterionCompatibleBuildCheckGetToOneRelationship",
  "BetaGroupsBetaTestersCreateToManyRelationship",
  "BetaGroupsBetaTestersDeleteToManyRelationship",
  "BetaGroupsBetaTestersGetToManyRelated",
  "BetaGroupsBetaTestersGetToManyRelationship",
  "BetaGroupsBetaTesterUsagesGetMetrics",
  "BetaGroupsBuildsCreateToManyRelationship",
  "BetaGroupsBuildsDeleteToManyRelationship",
  "BetaGroupsBuildsGetToManyRelated",
  "BetaGroupsBuildsGetToManyRelationship",
  "BetaGroupsCreateInstance",
  "BetaGroupsDeleteInstance",
  "BetaGroupsGetCollection",
  "BetaGroupsGetInstance",
  "BetaGroupsPublicLinkUsagesGetMetrics",
  "BetaGroupsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiBetaGroupsGeneratedClient)[];

export function createAppStoreFullApiBetaGroupsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBetaGroupsGeneratedClient {
  return {
    BetaGroupsAppGetToOneRelated: (...args) => callOperation("betaGroups_app_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"betaGroups_app_getToOneRelated">)),
    BetaGroupsAppGetToOneRelationship: (...args) => callOperation("betaGroups_app_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"betaGroups_app_getToOneRelationship">)),
    BetaGroupsBetaRecruitmentCriteriaGetToOneRelated: (...args) => callOperation("betaGroups_betaRecruitmentCriteria_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"betaGroups_betaRecruitmentCriteria_getToOneRelated">)),
    BetaGroupsBetaRecruitmentCriteriaGetToOneRelationship: (...args) => callOperation("betaGroups_betaRecruitmentCriteria_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"betaGroups_betaRecruitmentCriteria_getToOneRelationship">)),
    BetaGroupsBetaRecruitmentCriterionCompatibleBuildCheckGetToOneRelated: (...args) => callOperation("betaGroups_betaRecruitmentCriterionCompatibleBuildCheck_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"betaGroups_betaRecruitmentCriterionCompatibleBuildCheck_getToOneRelated">)),
    BetaGroupsBetaRecruitmentCriterionCompatibleBuildCheckGetToOneRelationship: (...args) => callOperation("betaGroups_betaRecruitmentCriterionCompatibleBuildCheck_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"betaGroups_betaRecruitmentCriterionCompatibleBuildCheck_getToOneRelationship">)),
    BetaGroupsBetaTestersCreateToManyRelationship: (...args) => callOperation("betaGroups_betaTesters_createToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"betaGroups_betaTesters_createToManyRelationship">)),
    BetaGroupsBetaTestersDeleteToManyRelationship: (...args) => callOperation("betaGroups_betaTesters_deleteToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"betaGroups_betaTesters_deleteToManyRelationship">)),
    BetaGroupsBetaTestersGetToManyRelated: (...args) => callOperation("betaGroups_betaTesters_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"betaGroups_betaTesters_getToManyRelated">)),
    BetaGroupsBetaTestersGetToManyRelationship: (...args) => callOperation("betaGroups_betaTesters_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"betaGroups_betaTesters_getToManyRelationship">)),
    BetaGroupsBetaTesterUsagesGetMetrics: (...args) => callOperation("betaGroups_betaTesterUsages_getMetrics", ...(args as AppStoreFullApiOperationArgs<"betaGroups_betaTesterUsages_getMetrics">)),
    BetaGroupsBuildsCreateToManyRelationship: (...args) => callOperation("betaGroups_builds_createToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"betaGroups_builds_createToManyRelationship">)),
    BetaGroupsBuildsDeleteToManyRelationship: (...args) => callOperation("betaGroups_builds_deleteToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"betaGroups_builds_deleteToManyRelationship">)),
    BetaGroupsBuildsGetToManyRelated: (...args) => callOperation("betaGroups_builds_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"betaGroups_builds_getToManyRelated">)),
    BetaGroupsBuildsGetToManyRelationship: (...args) => callOperation("betaGroups_builds_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"betaGroups_builds_getToManyRelationship">)),
    BetaGroupsCreateInstance: (...args) => callOperation("betaGroups_createInstance", ...(args as AppStoreFullApiOperationArgs<"betaGroups_createInstance">)),
    BetaGroupsDeleteInstance: (...args) => callOperation("betaGroups_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"betaGroups_deleteInstance">)),
    BetaGroupsGetCollection: (...args) => callOperation("betaGroups_getCollection", ...(args as AppStoreFullApiOperationArgs<"betaGroups_getCollection">)),
    BetaGroupsGetInstance: (...args) => callOperation("betaGroups_getInstance", ...(args as AppStoreFullApiOperationArgs<"betaGroups_getInstance">)),
    BetaGroupsPublicLinkUsagesGetMetrics: (...args) => callOperation("betaGroups_publicLinkUsages_getMetrics", ...(args as AppStoreFullApiOperationArgs<"betaGroups_publicLinkUsages_getMetrics">)),
    BetaGroupsUpdateInstance: (...args) => callOperation("betaGroups_updateInstance", ...(args as AppStoreFullApiOperationArgs<"betaGroups_updateInstance">)),
  };
}
