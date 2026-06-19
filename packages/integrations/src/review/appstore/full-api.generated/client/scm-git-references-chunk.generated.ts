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
export const AppStoreFullApiScmGitReferencesOperationKeys = [
  "scmGitReferences_getInstance"
] as const;
export type AppStoreFullApiScmGitReferencesOperationKey = typeof AppStoreFullApiScmGitReferencesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiScmGitReferencesOperationPathParamMap {
  "scmGitReferences_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiScmGitReferencesOperationRequestMap {
  "scmGitReferences_getInstance": AppStoreFullApiOperationInput<"scmGitReferences_getInstance">;
}

export interface AppStoreFullApiScmGitReferencesGeneratedClient {
  ScmGitReferencesGetInstance(...args: AppStoreFullApiOperationArgs<"scmGitReferences_getInstance">): Promise<AppStoreFullApiOperationResponseMap["scmGitReferences_getInstance"]>;
}

export const AppStoreFullApiScmGitReferencesGeneratedFunctionNames = [
  "ScmGitReferencesGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiScmGitReferencesGeneratedClient)[];

export function createAppStoreFullApiScmGitReferencesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiScmGitReferencesGeneratedClient {
  return {
    ScmGitReferencesGetInstance: (...args) => callOperation("scmGitReferences_getInstance", ...(args as AppStoreFullApiOperationArgs<"scmGitReferences_getInstance">)),
  };
}
