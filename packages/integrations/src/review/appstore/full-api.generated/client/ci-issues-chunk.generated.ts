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
export const AppStoreFullApiCiIssuesOperationKeys = [
  "ciIssues_getInstance"
] as const;
export type AppStoreFullApiCiIssuesOperationKey = typeof AppStoreFullApiCiIssuesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiCiIssuesOperationPathParamMap {
  "ciIssues_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiCiIssuesOperationRequestMap {
  "ciIssues_getInstance": AppStoreFullApiOperationInput<"ciIssues_getInstance">;
}

export interface AppStoreFullApiCiIssuesGeneratedClient {
  CiIssuesGetInstance(...args: AppStoreFullApiOperationArgs<"ciIssues_getInstance">): Promise<AppStoreFullApiOperationResponseMap["ciIssues_getInstance"]>;
}

export const AppStoreFullApiCiIssuesGeneratedFunctionNames = [
  "CiIssuesGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiCiIssuesGeneratedClient)[];

export function createAppStoreFullApiCiIssuesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiCiIssuesGeneratedClient {
  return {
    CiIssuesGetInstance: (...args) => callOperation("ciIssues_getInstance", ...(args as AppStoreFullApiOperationArgs<"ciIssues_getInstance">)),
  };
}
