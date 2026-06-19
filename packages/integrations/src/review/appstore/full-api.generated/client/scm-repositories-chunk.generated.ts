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
export const AppStoreFullApiScmRepositoriesOperationKeys = [
  "scmRepositories_getCollection",
  "scmRepositories_getInstance",
  "scmRepositories_gitReferences_getToManyRelated",
  "scmRepositories_gitReferences_getToManyRelationship",
  "scmRepositories_pullRequests_getToManyRelated",
  "scmRepositories_pullRequests_getToManyRelationship"
] as const;
export type AppStoreFullApiScmRepositoriesOperationKey = typeof AppStoreFullApiScmRepositoriesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiScmRepositoriesOperationPathParamMap {
  "scmRepositories_getCollection": {};
  "scmRepositories_getInstance": { "id": AppStoreFullApiPathParamValue };
  "scmRepositories_gitReferences_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "scmRepositories_gitReferences_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "scmRepositories_pullRequests_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "scmRepositories_pullRequests_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiScmRepositoriesOperationRequestMap {
  "scmRepositories_getCollection": AppStoreFullApiOperationInput<"scmRepositories_getCollection">;
  "scmRepositories_getInstance": AppStoreFullApiOperationInput<"scmRepositories_getInstance">;
  "scmRepositories_gitReferences_getToManyRelated": AppStoreFullApiOperationInput<"scmRepositories_gitReferences_getToManyRelated">;
  "scmRepositories_gitReferences_getToManyRelationship": AppStoreFullApiOperationInput<"scmRepositories_gitReferences_getToManyRelationship">;
  "scmRepositories_pullRequests_getToManyRelated": AppStoreFullApiOperationInput<"scmRepositories_pullRequests_getToManyRelated">;
  "scmRepositories_pullRequests_getToManyRelationship": AppStoreFullApiOperationInput<"scmRepositories_pullRequests_getToManyRelationship">;
}

export interface AppStoreFullApiScmRepositoriesGeneratedClient {
  ScmRepositoriesGetCollection(...args: AppStoreFullApiOperationArgs<"scmRepositories_getCollection">): Promise<AppStoreFullApiOperationResponseMap["scmRepositories_getCollection"]>;
  ScmRepositoriesGetInstance(...args: AppStoreFullApiOperationArgs<"scmRepositories_getInstance">): Promise<AppStoreFullApiOperationResponseMap["scmRepositories_getInstance"]>;
  ScmRepositoriesGitReferencesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"scmRepositories_gitReferences_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["scmRepositories_gitReferences_getToManyRelated"]>;
  ScmRepositoriesGitReferencesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"scmRepositories_gitReferences_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["scmRepositories_gitReferences_getToManyRelationship"]>;
  ScmRepositoriesPullRequestsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"scmRepositories_pullRequests_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["scmRepositories_pullRequests_getToManyRelated"]>;
  ScmRepositoriesPullRequestsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"scmRepositories_pullRequests_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["scmRepositories_pullRequests_getToManyRelationship"]>;
}

export const AppStoreFullApiScmRepositoriesGeneratedFunctionNames = [
  "ScmRepositoriesGetCollection",
  "ScmRepositoriesGetInstance",
  "ScmRepositoriesGitReferencesGetToManyRelated",
  "ScmRepositoriesGitReferencesGetToManyRelationship",
  "ScmRepositoriesPullRequestsGetToManyRelated",
  "ScmRepositoriesPullRequestsGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiScmRepositoriesGeneratedClient)[];

export function createAppStoreFullApiScmRepositoriesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiScmRepositoriesGeneratedClient {
  return {
    ScmRepositoriesGetCollection: (...args) => callOperation("scmRepositories_getCollection", ...(args as AppStoreFullApiOperationArgs<"scmRepositories_getCollection">)),
    ScmRepositoriesGetInstance: (...args) => callOperation("scmRepositories_getInstance", ...(args as AppStoreFullApiOperationArgs<"scmRepositories_getInstance">)),
    ScmRepositoriesGitReferencesGetToManyRelated: (...args) => callOperation("scmRepositories_gitReferences_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"scmRepositories_gitReferences_getToManyRelated">)),
    ScmRepositoriesGitReferencesGetToManyRelationship: (...args) => callOperation("scmRepositories_gitReferences_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"scmRepositories_gitReferences_getToManyRelationship">)),
    ScmRepositoriesPullRequestsGetToManyRelated: (...args) => callOperation("scmRepositories_pullRequests_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"scmRepositories_pullRequests_getToManyRelated">)),
    ScmRepositoriesPullRequestsGetToManyRelationship: (...args) => callOperation("scmRepositories_pullRequests_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"scmRepositories_pullRequests_getToManyRelationship">)),
  };
}
