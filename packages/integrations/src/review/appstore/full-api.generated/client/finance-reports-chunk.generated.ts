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
export const AppStoreFullApiFinanceReportsOperationKeys = [
  "financeReports_getCollection"
] as const;
export type AppStoreFullApiFinanceReportsOperationKey = typeof AppStoreFullApiFinanceReportsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiFinanceReportsOperationPathParamMap {
  "financeReports_getCollection": {};
}

export interface AppStoreFullApiFinanceReportsOperationRequestMap {
  "financeReports_getCollection": AppStoreFullApiOperationInput<"financeReports_getCollection">;
}

export interface AppStoreFullApiFinanceReportsGeneratedClient {
  FinanceReportsGetCollection(...args: AppStoreFullApiOperationArgs<"financeReports_getCollection">): Promise<AppStoreFullApiOperationResponseMap["financeReports_getCollection"]>;
}

export const AppStoreFullApiFinanceReportsGeneratedFunctionNames = [
  "FinanceReportsGetCollection"
] as const satisfies readonly (keyof AppStoreFullApiFinanceReportsGeneratedClient)[];

export function createAppStoreFullApiFinanceReportsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiFinanceReportsGeneratedClient {
  return {
    FinanceReportsGetCollection: (...args) => callOperation("financeReports_getCollection", ...(args as AppStoreFullApiOperationArgs<"financeReports_getCollection">)),
  };
}
