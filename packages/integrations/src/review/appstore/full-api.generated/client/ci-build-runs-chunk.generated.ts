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
export const AppStoreFullApiCiBuildRunsOperationKeys = [
  "ciBuildRuns_actions_getToManyRelated",
  "ciBuildRuns_actions_getToManyRelationship",
  "ciBuildRuns_builds_getToManyRelated",
  "ciBuildRuns_builds_getToManyRelationship",
  "ciBuildRuns_createInstance",
  "ciBuildRuns_getInstance"
] as const;
export type AppStoreFullApiCiBuildRunsOperationKey = typeof AppStoreFullApiCiBuildRunsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiCiBuildRunsOperationPathParamMap {
  "ciBuildRuns_actions_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "ciBuildRuns_actions_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "ciBuildRuns_builds_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "ciBuildRuns_builds_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "ciBuildRuns_createInstance": {};
  "ciBuildRuns_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiCiBuildRunsOperationRequestMap {
  "ciBuildRuns_actions_getToManyRelated": AppStoreFullApiOperationInput<"ciBuildRuns_actions_getToManyRelated">;
  "ciBuildRuns_actions_getToManyRelationship": AppStoreFullApiOperationInput<"ciBuildRuns_actions_getToManyRelationship">;
  "ciBuildRuns_builds_getToManyRelated": AppStoreFullApiOperationInput<"ciBuildRuns_builds_getToManyRelated">;
  "ciBuildRuns_builds_getToManyRelationship": AppStoreFullApiOperationInput<"ciBuildRuns_builds_getToManyRelationship">;
  "ciBuildRuns_createInstance": AppStoreFullApiOperationInput<"ciBuildRuns_createInstance">;
  "ciBuildRuns_getInstance": AppStoreFullApiOperationInput<"ciBuildRuns_getInstance">;
}

export interface AppStoreFullApiCiBuildRunsGeneratedClient {
  CiBuildRunsActionsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"ciBuildRuns_actions_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["ciBuildRuns_actions_getToManyRelated"]>;
  CiBuildRunsActionsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"ciBuildRuns_actions_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["ciBuildRuns_actions_getToManyRelationship"]>;
  CiBuildRunsBuildsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"ciBuildRuns_builds_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["ciBuildRuns_builds_getToManyRelated"]>;
  CiBuildRunsBuildsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"ciBuildRuns_builds_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["ciBuildRuns_builds_getToManyRelationship"]>;
  CiBuildRunsCreateInstance(...args: AppStoreFullApiOperationArgs<"ciBuildRuns_createInstance">): Promise<AppStoreFullApiOperationResponseMap["ciBuildRuns_createInstance"]>;
  CiBuildRunsGetInstance(...args: AppStoreFullApiOperationArgs<"ciBuildRuns_getInstance">): Promise<AppStoreFullApiOperationResponseMap["ciBuildRuns_getInstance"]>;
}

export const AppStoreFullApiCiBuildRunsGeneratedFunctionNames = [
  "CiBuildRunsActionsGetToManyRelated",
  "CiBuildRunsActionsGetToManyRelationship",
  "CiBuildRunsBuildsGetToManyRelated",
  "CiBuildRunsBuildsGetToManyRelationship",
  "CiBuildRunsCreateInstance",
  "CiBuildRunsGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiCiBuildRunsGeneratedClient)[];

export function createAppStoreFullApiCiBuildRunsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiCiBuildRunsGeneratedClient {
  return {
    CiBuildRunsActionsGetToManyRelated: (...args) => callOperation("ciBuildRuns_actions_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"ciBuildRuns_actions_getToManyRelated">)),
    CiBuildRunsActionsGetToManyRelationship: (...args) => callOperation("ciBuildRuns_actions_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"ciBuildRuns_actions_getToManyRelationship">)),
    CiBuildRunsBuildsGetToManyRelated: (...args) => callOperation("ciBuildRuns_builds_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"ciBuildRuns_builds_getToManyRelated">)),
    CiBuildRunsBuildsGetToManyRelationship: (...args) => callOperation("ciBuildRuns_builds_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"ciBuildRuns_builds_getToManyRelationship">)),
    CiBuildRunsCreateInstance: (...args) => callOperation("ciBuildRuns_createInstance", ...(args as AppStoreFullApiOperationArgs<"ciBuildRuns_createInstance">)),
    CiBuildRunsGetInstance: (...args) => callOperation("ciBuildRuns_getInstance", ...(args as AppStoreFullApiOperationArgs<"ciBuildRuns_getInstance">)),
  };
}
