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
export const AppStoreFullApiCiWorkflowsOperationKeys = [
  "ciWorkflows_buildRuns_getToManyRelated",
  "ciWorkflows_buildRuns_getToManyRelationship",
  "ciWorkflows_createInstance",
  "ciWorkflows_deleteInstance",
  "ciWorkflows_getInstance",
  "ciWorkflows_repository_getToOneRelated",
  "ciWorkflows_repository_getToOneRelationship",
  "ciWorkflows_updateInstance"
] as const;
export type AppStoreFullApiCiWorkflowsOperationKey = typeof AppStoreFullApiCiWorkflowsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiCiWorkflowsOperationPathParamMap {
  "ciWorkflows_buildRuns_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "ciWorkflows_buildRuns_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "ciWorkflows_createInstance": {};
  "ciWorkflows_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "ciWorkflows_getInstance": { "id": AppStoreFullApiPathParamValue };
  "ciWorkflows_repository_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "ciWorkflows_repository_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "ciWorkflows_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiCiWorkflowsOperationRequestMap {
  "ciWorkflows_buildRuns_getToManyRelated": AppStoreFullApiOperationInput<"ciWorkflows_buildRuns_getToManyRelated">;
  "ciWorkflows_buildRuns_getToManyRelationship": AppStoreFullApiOperationInput<"ciWorkflows_buildRuns_getToManyRelationship">;
  "ciWorkflows_createInstance": AppStoreFullApiOperationInput<"ciWorkflows_createInstance">;
  "ciWorkflows_deleteInstance": AppStoreFullApiOperationInput<"ciWorkflows_deleteInstance">;
  "ciWorkflows_getInstance": AppStoreFullApiOperationInput<"ciWorkflows_getInstance">;
  "ciWorkflows_repository_getToOneRelated": AppStoreFullApiOperationInput<"ciWorkflows_repository_getToOneRelated">;
  "ciWorkflows_repository_getToOneRelationship": AppStoreFullApiOperationInput<"ciWorkflows_repository_getToOneRelationship">;
  "ciWorkflows_updateInstance": AppStoreFullApiOperationInput<"ciWorkflows_updateInstance">;
}

export interface AppStoreFullApiCiWorkflowsGeneratedClient {
  CiWorkflowsBuildRunsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"ciWorkflows_buildRuns_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["ciWorkflows_buildRuns_getToManyRelated"]>;
  CiWorkflowsBuildRunsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"ciWorkflows_buildRuns_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["ciWorkflows_buildRuns_getToManyRelationship"]>;
  CiWorkflowsCreateInstance(...args: AppStoreFullApiOperationArgs<"ciWorkflows_createInstance">): Promise<AppStoreFullApiOperationResponseMap["ciWorkflows_createInstance"]>;
  CiWorkflowsDeleteInstance(...args: AppStoreFullApiOperationArgs<"ciWorkflows_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["ciWorkflows_deleteInstance"]>;
  CiWorkflowsGetInstance(...args: AppStoreFullApiOperationArgs<"ciWorkflows_getInstance">): Promise<AppStoreFullApiOperationResponseMap["ciWorkflows_getInstance"]>;
  CiWorkflowsRepositoryGetToOneRelated(...args: AppStoreFullApiOperationArgs<"ciWorkflows_repository_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["ciWorkflows_repository_getToOneRelated"]>;
  CiWorkflowsRepositoryGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"ciWorkflows_repository_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["ciWorkflows_repository_getToOneRelationship"]>;
  CiWorkflowsUpdateInstance(...args: AppStoreFullApiOperationArgs<"ciWorkflows_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["ciWorkflows_updateInstance"]>;
}

export const AppStoreFullApiCiWorkflowsGeneratedFunctionNames = [
  "CiWorkflowsBuildRunsGetToManyRelated",
  "CiWorkflowsBuildRunsGetToManyRelationship",
  "CiWorkflowsCreateInstance",
  "CiWorkflowsDeleteInstance",
  "CiWorkflowsGetInstance",
  "CiWorkflowsRepositoryGetToOneRelated",
  "CiWorkflowsRepositoryGetToOneRelationship",
  "CiWorkflowsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiCiWorkflowsGeneratedClient)[];

export function createAppStoreFullApiCiWorkflowsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiCiWorkflowsGeneratedClient {
  return {
    CiWorkflowsBuildRunsGetToManyRelated: (...args) => callOperation("ciWorkflows_buildRuns_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"ciWorkflows_buildRuns_getToManyRelated">)),
    CiWorkflowsBuildRunsGetToManyRelationship: (...args) => callOperation("ciWorkflows_buildRuns_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"ciWorkflows_buildRuns_getToManyRelationship">)),
    CiWorkflowsCreateInstance: (...args) => callOperation("ciWorkflows_createInstance", ...(args as AppStoreFullApiOperationArgs<"ciWorkflows_createInstance">)),
    CiWorkflowsDeleteInstance: (...args) => callOperation("ciWorkflows_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"ciWorkflows_deleteInstance">)),
    CiWorkflowsGetInstance: (...args) => callOperation("ciWorkflows_getInstance", ...(args as AppStoreFullApiOperationArgs<"ciWorkflows_getInstance">)),
    CiWorkflowsRepositoryGetToOneRelated: (...args) => callOperation("ciWorkflows_repository_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"ciWorkflows_repository_getToOneRelated">)),
    CiWorkflowsRepositoryGetToOneRelationship: (...args) => callOperation("ciWorkflows_repository_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"ciWorkflows_repository_getToOneRelationship">)),
    CiWorkflowsUpdateInstance: (...args) => callOperation("ciWorkflows_updateInstance", ...(args as AppStoreFullApiOperationArgs<"ciWorkflows_updateInstance">)),
  };
}
