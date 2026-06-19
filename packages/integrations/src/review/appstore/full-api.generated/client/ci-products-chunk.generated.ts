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
export const AppStoreFullApiCiProductsOperationKeys = [
  "ciProducts_additionalRepositories_getToManyRelated",
  "ciProducts_additionalRepositories_getToManyRelationship",
  "ciProducts_app_getToOneRelated",
  "ciProducts_app_getToOneRelationship",
  "ciProducts_buildRuns_getToManyRelated",
  "ciProducts_buildRuns_getToManyRelationship",
  "ciProducts_deleteInstance",
  "ciProducts_getCollection",
  "ciProducts_getInstance",
  "ciProducts_primaryRepositories_getToManyRelated",
  "ciProducts_primaryRepositories_getToManyRelationship",
  "ciProducts_workflows_getToManyRelated",
  "ciProducts_workflows_getToManyRelationship"
] as const;
export type AppStoreFullApiCiProductsOperationKey = typeof AppStoreFullApiCiProductsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiCiProductsOperationPathParamMap {
  "ciProducts_additionalRepositories_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "ciProducts_additionalRepositories_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "ciProducts_app_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "ciProducts_app_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "ciProducts_buildRuns_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "ciProducts_buildRuns_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "ciProducts_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "ciProducts_getCollection": {};
  "ciProducts_getInstance": { "id": AppStoreFullApiPathParamValue };
  "ciProducts_primaryRepositories_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "ciProducts_primaryRepositories_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "ciProducts_workflows_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "ciProducts_workflows_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiCiProductsOperationRequestMap {
  "ciProducts_additionalRepositories_getToManyRelated": AppStoreFullApiOperationInput<"ciProducts_additionalRepositories_getToManyRelated">;
  "ciProducts_additionalRepositories_getToManyRelationship": AppStoreFullApiOperationInput<"ciProducts_additionalRepositories_getToManyRelationship">;
  "ciProducts_app_getToOneRelated": AppStoreFullApiOperationInput<"ciProducts_app_getToOneRelated">;
  "ciProducts_app_getToOneRelationship": AppStoreFullApiOperationInput<"ciProducts_app_getToOneRelationship">;
  "ciProducts_buildRuns_getToManyRelated": AppStoreFullApiOperationInput<"ciProducts_buildRuns_getToManyRelated">;
  "ciProducts_buildRuns_getToManyRelationship": AppStoreFullApiOperationInput<"ciProducts_buildRuns_getToManyRelationship">;
  "ciProducts_deleteInstance": AppStoreFullApiOperationInput<"ciProducts_deleteInstance">;
  "ciProducts_getCollection": AppStoreFullApiOperationInput<"ciProducts_getCollection">;
  "ciProducts_getInstance": AppStoreFullApiOperationInput<"ciProducts_getInstance">;
  "ciProducts_primaryRepositories_getToManyRelated": AppStoreFullApiOperationInput<"ciProducts_primaryRepositories_getToManyRelated">;
  "ciProducts_primaryRepositories_getToManyRelationship": AppStoreFullApiOperationInput<"ciProducts_primaryRepositories_getToManyRelationship">;
  "ciProducts_workflows_getToManyRelated": AppStoreFullApiOperationInput<"ciProducts_workflows_getToManyRelated">;
  "ciProducts_workflows_getToManyRelationship": AppStoreFullApiOperationInput<"ciProducts_workflows_getToManyRelationship">;
}

export interface AppStoreFullApiCiProductsGeneratedClient {
  CiProductsAdditionalRepositoriesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"ciProducts_additionalRepositories_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["ciProducts_additionalRepositories_getToManyRelated"]>;
  CiProductsAdditionalRepositoriesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"ciProducts_additionalRepositories_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["ciProducts_additionalRepositories_getToManyRelationship"]>;
  CiProductsAppGetToOneRelated(...args: AppStoreFullApiOperationArgs<"ciProducts_app_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["ciProducts_app_getToOneRelated"]>;
  CiProductsAppGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"ciProducts_app_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["ciProducts_app_getToOneRelationship"]>;
  CiProductsBuildRunsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"ciProducts_buildRuns_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["ciProducts_buildRuns_getToManyRelated"]>;
  CiProductsBuildRunsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"ciProducts_buildRuns_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["ciProducts_buildRuns_getToManyRelationship"]>;
  CiProductsDeleteInstance(...args: AppStoreFullApiOperationArgs<"ciProducts_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["ciProducts_deleteInstance"]>;
  CiProductsGetCollection(...args: AppStoreFullApiOperationArgs<"ciProducts_getCollection">): Promise<AppStoreFullApiOperationResponseMap["ciProducts_getCollection"]>;
  CiProductsGetInstance(...args: AppStoreFullApiOperationArgs<"ciProducts_getInstance">): Promise<AppStoreFullApiOperationResponseMap["ciProducts_getInstance"]>;
  CiProductsPrimaryRepositoriesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"ciProducts_primaryRepositories_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["ciProducts_primaryRepositories_getToManyRelated"]>;
  CiProductsPrimaryRepositoriesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"ciProducts_primaryRepositories_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["ciProducts_primaryRepositories_getToManyRelationship"]>;
  CiProductsWorkflowsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"ciProducts_workflows_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["ciProducts_workflows_getToManyRelated"]>;
  CiProductsWorkflowsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"ciProducts_workflows_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["ciProducts_workflows_getToManyRelationship"]>;
}

export const AppStoreFullApiCiProductsGeneratedFunctionNames = [
  "CiProductsAdditionalRepositoriesGetToManyRelated",
  "CiProductsAdditionalRepositoriesGetToManyRelationship",
  "CiProductsAppGetToOneRelated",
  "CiProductsAppGetToOneRelationship",
  "CiProductsBuildRunsGetToManyRelated",
  "CiProductsBuildRunsGetToManyRelationship",
  "CiProductsDeleteInstance",
  "CiProductsGetCollection",
  "CiProductsGetInstance",
  "CiProductsPrimaryRepositoriesGetToManyRelated",
  "CiProductsPrimaryRepositoriesGetToManyRelationship",
  "CiProductsWorkflowsGetToManyRelated",
  "CiProductsWorkflowsGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiCiProductsGeneratedClient)[];

export function createAppStoreFullApiCiProductsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiCiProductsGeneratedClient {
  return {
    CiProductsAdditionalRepositoriesGetToManyRelated: (...args) => callOperation("ciProducts_additionalRepositories_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"ciProducts_additionalRepositories_getToManyRelated">)),
    CiProductsAdditionalRepositoriesGetToManyRelationship: (...args) => callOperation("ciProducts_additionalRepositories_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"ciProducts_additionalRepositories_getToManyRelationship">)),
    CiProductsAppGetToOneRelated: (...args) => callOperation("ciProducts_app_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"ciProducts_app_getToOneRelated">)),
    CiProductsAppGetToOneRelationship: (...args) => callOperation("ciProducts_app_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"ciProducts_app_getToOneRelationship">)),
    CiProductsBuildRunsGetToManyRelated: (...args) => callOperation("ciProducts_buildRuns_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"ciProducts_buildRuns_getToManyRelated">)),
    CiProductsBuildRunsGetToManyRelationship: (...args) => callOperation("ciProducts_buildRuns_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"ciProducts_buildRuns_getToManyRelationship">)),
    CiProductsDeleteInstance: (...args) => callOperation("ciProducts_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"ciProducts_deleteInstance">)),
    CiProductsGetCollection: (...args) => callOperation("ciProducts_getCollection", ...(args as AppStoreFullApiOperationArgs<"ciProducts_getCollection">)),
    CiProductsGetInstance: (...args) => callOperation("ciProducts_getInstance", ...(args as AppStoreFullApiOperationArgs<"ciProducts_getInstance">)),
    CiProductsPrimaryRepositoriesGetToManyRelated: (...args) => callOperation("ciProducts_primaryRepositories_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"ciProducts_primaryRepositories_getToManyRelated">)),
    CiProductsPrimaryRepositoriesGetToManyRelationship: (...args) => callOperation("ciProducts_primaryRepositories_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"ciProducts_primaryRepositories_getToManyRelationship">)),
    CiProductsWorkflowsGetToManyRelated: (...args) => callOperation("ciProducts_workflows_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"ciProducts_workflows_getToManyRelated">)),
    CiProductsWorkflowsGetToManyRelationship: (...args) => callOperation("ciProducts_workflows_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"ciProducts_workflows_getToManyRelationship">)),
  };
}
