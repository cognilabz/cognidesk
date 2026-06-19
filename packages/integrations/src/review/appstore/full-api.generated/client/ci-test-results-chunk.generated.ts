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
export const AppStoreFullApiCiTestResultsOperationKeys = [
  "ciTestResults_getInstance"
] as const;
export type AppStoreFullApiCiTestResultsOperationKey = typeof AppStoreFullApiCiTestResultsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiCiTestResultsOperationPathParamMap {
  "ciTestResults_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiCiTestResultsOperationRequestMap {
  "ciTestResults_getInstance": AppStoreFullApiOperationInput<"ciTestResults_getInstance">;
}

export interface AppStoreFullApiCiTestResultsGeneratedClient {
  CiTestResultsGetInstance(...args: AppStoreFullApiOperationArgs<"ciTestResults_getInstance">): Promise<AppStoreFullApiOperationResponseMap["ciTestResults_getInstance"]>;
}

export const AppStoreFullApiCiTestResultsGeneratedFunctionNames = [
  "CiTestResultsGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiCiTestResultsGeneratedClient)[];

export function createAppStoreFullApiCiTestResultsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiCiTestResultsGeneratedClient {
  return {
    CiTestResultsGetInstance: (...args) => callOperation("ciTestResults_getInstance", ...(args as AppStoreFullApiOperationArgs<"ciTestResults_getInstance">)),
  };
}
