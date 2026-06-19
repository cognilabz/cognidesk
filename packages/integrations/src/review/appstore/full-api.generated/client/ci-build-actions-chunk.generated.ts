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
export const AppStoreFullApiCiBuildActionsOperationKeys = [
  "ciBuildActions_artifacts_getToManyRelated",
  "ciBuildActions_artifacts_getToManyRelationship",
  "ciBuildActions_buildRun_getToOneRelated",
  "ciBuildActions_buildRun_getToOneRelationship",
  "ciBuildActions_getInstance",
  "ciBuildActions_issues_getToManyRelated",
  "ciBuildActions_issues_getToManyRelationship",
  "ciBuildActions_testResults_getToManyRelated",
  "ciBuildActions_testResults_getToManyRelationship"
] as const;
export type AppStoreFullApiCiBuildActionsOperationKey = typeof AppStoreFullApiCiBuildActionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiCiBuildActionsOperationPathParamMap {
  "ciBuildActions_artifacts_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "ciBuildActions_artifacts_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "ciBuildActions_buildRun_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "ciBuildActions_buildRun_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "ciBuildActions_getInstance": { "id": AppStoreFullApiPathParamValue };
  "ciBuildActions_issues_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "ciBuildActions_issues_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "ciBuildActions_testResults_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "ciBuildActions_testResults_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiCiBuildActionsOperationRequestMap {
  "ciBuildActions_artifacts_getToManyRelated": AppStoreFullApiOperationInput<"ciBuildActions_artifacts_getToManyRelated">;
  "ciBuildActions_artifacts_getToManyRelationship": AppStoreFullApiOperationInput<"ciBuildActions_artifacts_getToManyRelationship">;
  "ciBuildActions_buildRun_getToOneRelated": AppStoreFullApiOperationInput<"ciBuildActions_buildRun_getToOneRelated">;
  "ciBuildActions_buildRun_getToOneRelationship": AppStoreFullApiOperationInput<"ciBuildActions_buildRun_getToOneRelationship">;
  "ciBuildActions_getInstance": AppStoreFullApiOperationInput<"ciBuildActions_getInstance">;
  "ciBuildActions_issues_getToManyRelated": AppStoreFullApiOperationInput<"ciBuildActions_issues_getToManyRelated">;
  "ciBuildActions_issues_getToManyRelationship": AppStoreFullApiOperationInput<"ciBuildActions_issues_getToManyRelationship">;
  "ciBuildActions_testResults_getToManyRelated": AppStoreFullApiOperationInput<"ciBuildActions_testResults_getToManyRelated">;
  "ciBuildActions_testResults_getToManyRelationship": AppStoreFullApiOperationInput<"ciBuildActions_testResults_getToManyRelationship">;
}

export interface AppStoreFullApiCiBuildActionsGeneratedClient {
  CiBuildActionsArtifactsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"ciBuildActions_artifacts_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["ciBuildActions_artifacts_getToManyRelated"]>;
  CiBuildActionsArtifactsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"ciBuildActions_artifacts_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["ciBuildActions_artifacts_getToManyRelationship"]>;
  CiBuildActionsBuildRunGetToOneRelated(...args: AppStoreFullApiOperationArgs<"ciBuildActions_buildRun_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["ciBuildActions_buildRun_getToOneRelated"]>;
  CiBuildActionsBuildRunGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"ciBuildActions_buildRun_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["ciBuildActions_buildRun_getToOneRelationship"]>;
  CiBuildActionsGetInstance(...args: AppStoreFullApiOperationArgs<"ciBuildActions_getInstance">): Promise<AppStoreFullApiOperationResponseMap["ciBuildActions_getInstance"]>;
  CiBuildActionsIssuesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"ciBuildActions_issues_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["ciBuildActions_issues_getToManyRelated"]>;
  CiBuildActionsIssuesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"ciBuildActions_issues_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["ciBuildActions_issues_getToManyRelationship"]>;
  CiBuildActionsTestResultsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"ciBuildActions_testResults_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["ciBuildActions_testResults_getToManyRelated"]>;
  CiBuildActionsTestResultsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"ciBuildActions_testResults_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["ciBuildActions_testResults_getToManyRelationship"]>;
}

export const AppStoreFullApiCiBuildActionsGeneratedFunctionNames = [
  "CiBuildActionsArtifactsGetToManyRelated",
  "CiBuildActionsArtifactsGetToManyRelationship",
  "CiBuildActionsBuildRunGetToOneRelated",
  "CiBuildActionsBuildRunGetToOneRelationship",
  "CiBuildActionsGetInstance",
  "CiBuildActionsIssuesGetToManyRelated",
  "CiBuildActionsIssuesGetToManyRelationship",
  "CiBuildActionsTestResultsGetToManyRelated",
  "CiBuildActionsTestResultsGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiCiBuildActionsGeneratedClient)[];

export function createAppStoreFullApiCiBuildActionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiCiBuildActionsGeneratedClient {
  return {
    CiBuildActionsArtifactsGetToManyRelated: (...args) => callOperation("ciBuildActions_artifacts_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"ciBuildActions_artifacts_getToManyRelated">)),
    CiBuildActionsArtifactsGetToManyRelationship: (...args) => callOperation("ciBuildActions_artifacts_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"ciBuildActions_artifacts_getToManyRelationship">)),
    CiBuildActionsBuildRunGetToOneRelated: (...args) => callOperation("ciBuildActions_buildRun_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"ciBuildActions_buildRun_getToOneRelated">)),
    CiBuildActionsBuildRunGetToOneRelationship: (...args) => callOperation("ciBuildActions_buildRun_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"ciBuildActions_buildRun_getToOneRelationship">)),
    CiBuildActionsGetInstance: (...args) => callOperation("ciBuildActions_getInstance", ...(args as AppStoreFullApiOperationArgs<"ciBuildActions_getInstance">)),
    CiBuildActionsIssuesGetToManyRelated: (...args) => callOperation("ciBuildActions_issues_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"ciBuildActions_issues_getToManyRelated">)),
    CiBuildActionsIssuesGetToManyRelationship: (...args) => callOperation("ciBuildActions_issues_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"ciBuildActions_issues_getToManyRelationship">)),
    CiBuildActionsTestResultsGetToManyRelated: (...args) => callOperation("ciBuildActions_testResults_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"ciBuildActions_testResults_getToManyRelated">)),
    CiBuildActionsTestResultsGetToManyRelationship: (...args) => callOperation("ciBuildActions_testResults_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"ciBuildActions_testResults_getToManyRelationship">)),
  };
}
