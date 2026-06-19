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
export const AppStoreFullApiScmProvidersOperationKeys = [
  "scmProviders_getCollection",
  "scmProviders_getInstance",
  "scmProviders_repositories_getToManyRelated",
  "scmProviders_repositories_getToManyRelationship"
] as const;
export type AppStoreFullApiScmProvidersOperationKey = typeof AppStoreFullApiScmProvidersOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiScmProvidersOperationPathParamMap {
  "scmProviders_getCollection": {};
  "scmProviders_getInstance": { "id": AppStoreFullApiPathParamValue };
  "scmProviders_repositories_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "scmProviders_repositories_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiScmProvidersOperationRequestMap {
  "scmProviders_getCollection": AppStoreFullApiOperationInput<"scmProviders_getCollection">;
  "scmProviders_getInstance": AppStoreFullApiOperationInput<"scmProviders_getInstance">;
  "scmProviders_repositories_getToManyRelated": AppStoreFullApiOperationInput<"scmProviders_repositories_getToManyRelated">;
  "scmProviders_repositories_getToManyRelationship": AppStoreFullApiOperationInput<"scmProviders_repositories_getToManyRelationship">;
}

export interface AppStoreFullApiScmProvidersGeneratedClient {
  ScmProvidersGetCollection(...args: AppStoreFullApiOperationArgs<"scmProviders_getCollection">): Promise<AppStoreFullApiOperationResponseMap["scmProviders_getCollection"]>;
  ScmProvidersGetInstance(...args: AppStoreFullApiOperationArgs<"scmProviders_getInstance">): Promise<AppStoreFullApiOperationResponseMap["scmProviders_getInstance"]>;
  ScmProvidersRepositoriesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"scmProviders_repositories_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["scmProviders_repositories_getToManyRelated"]>;
  ScmProvidersRepositoriesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"scmProviders_repositories_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["scmProviders_repositories_getToManyRelationship"]>;
}

export const AppStoreFullApiScmProvidersGeneratedFunctionNames = [
  "ScmProvidersGetCollection",
  "ScmProvidersGetInstance",
  "ScmProvidersRepositoriesGetToManyRelated",
  "ScmProvidersRepositoriesGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiScmProvidersGeneratedClient)[];

export function createAppStoreFullApiScmProvidersGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiScmProvidersGeneratedClient {
  return {
    ScmProvidersGetCollection: (...args) => callOperation("scmProviders_getCollection", ...(args as AppStoreFullApiOperationArgs<"scmProviders_getCollection">)),
    ScmProvidersGetInstance: (...args) => callOperation("scmProviders_getInstance", ...(args as AppStoreFullApiOperationArgs<"scmProviders_getInstance">)),
    ScmProvidersRepositoriesGetToManyRelated: (...args) => callOperation("scmProviders_repositories_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"scmProviders_repositories_getToManyRelated">)),
    ScmProvidersRepositoriesGetToManyRelationship: (...args) => callOperation("scmProviders_repositories_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"scmProviders_repositories_getToManyRelationship">)),
  };
}
