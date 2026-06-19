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
export const AppStoreFullApiSalesReportsOperationKeys = [
  "salesReports_getCollection"
] as const;
export type AppStoreFullApiSalesReportsOperationKey = typeof AppStoreFullApiSalesReportsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiSalesReportsOperationPathParamMap {
  "salesReports_getCollection": {};
}

export interface AppStoreFullApiSalesReportsOperationRequestMap {
  "salesReports_getCollection": AppStoreFullApiOperationInput<"salesReports_getCollection">;
}

export interface AppStoreFullApiSalesReportsGeneratedClient {
  SalesReportsGetCollection(...args: AppStoreFullApiOperationArgs<"salesReports_getCollection">): Promise<AppStoreFullApiOperationResponseMap["salesReports_getCollection"]>;
}

export const AppStoreFullApiSalesReportsGeneratedFunctionNames = [
  "SalesReportsGetCollection"
] as const satisfies readonly (keyof AppStoreFullApiSalesReportsGeneratedClient)[];

export function createAppStoreFullApiSalesReportsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiSalesReportsGeneratedClient {
  return {
    SalesReportsGetCollection: (...args) => callOperation("salesReports_getCollection", ...(args as AppStoreFullApiOperationArgs<"salesReports_getCollection">)),
  };
}
