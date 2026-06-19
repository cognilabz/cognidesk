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
export const AppStoreFullApiScmPullRequestsOperationKeys = [
  "scmPullRequests_getInstance"
] as const;
export type AppStoreFullApiScmPullRequestsOperationKey = typeof AppStoreFullApiScmPullRequestsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiScmPullRequestsOperationPathParamMap {
  "scmPullRequests_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiScmPullRequestsOperationRequestMap {
  "scmPullRequests_getInstance": AppStoreFullApiOperationInput<"scmPullRequests_getInstance">;
}

export interface AppStoreFullApiScmPullRequestsGeneratedClient {
  ScmPullRequestsGetInstance(...args: AppStoreFullApiOperationArgs<"scmPullRequests_getInstance">): Promise<AppStoreFullApiOperationResponseMap["scmPullRequests_getInstance"]>;
}

export const AppStoreFullApiScmPullRequestsGeneratedFunctionNames = [
  "ScmPullRequestsGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiScmPullRequestsGeneratedClient)[];

export function createAppStoreFullApiScmPullRequestsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiScmPullRequestsGeneratedClient {
  return {
    ScmPullRequestsGetInstance: (...args) => callOperation("scmPullRequests_getInstance", ...(args as AppStoreFullApiOperationArgs<"scmPullRequests_getInstance">)),
  };
}
