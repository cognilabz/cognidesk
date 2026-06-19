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
export const AppStoreFullApiPromotedPurchasesOperationKeys = [
  "promotedPurchases_createInstance",
  "promotedPurchases_deleteInstance",
  "promotedPurchases_getInstance",
  "promotedPurchases_updateInstance"
] as const;
export type AppStoreFullApiPromotedPurchasesOperationKey = typeof AppStoreFullApiPromotedPurchasesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiPromotedPurchasesOperationPathParamMap {
  "promotedPurchases_createInstance": {};
  "promotedPurchases_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "promotedPurchases_getInstance": { "id": AppStoreFullApiPathParamValue };
  "promotedPurchases_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiPromotedPurchasesOperationRequestMap {
  "promotedPurchases_createInstance": AppStoreFullApiOperationInput<"promotedPurchases_createInstance">;
  "promotedPurchases_deleteInstance": AppStoreFullApiOperationInput<"promotedPurchases_deleteInstance">;
  "promotedPurchases_getInstance": AppStoreFullApiOperationInput<"promotedPurchases_getInstance">;
  "promotedPurchases_updateInstance": AppStoreFullApiOperationInput<"promotedPurchases_updateInstance">;
}

export interface AppStoreFullApiPromotedPurchasesGeneratedClient {
  PromotedPurchasesCreateInstance(...args: AppStoreFullApiOperationArgs<"promotedPurchases_createInstance">): Promise<AppStoreFullApiOperationResponseMap["promotedPurchases_createInstance"]>;
  PromotedPurchasesDeleteInstance(...args: AppStoreFullApiOperationArgs<"promotedPurchases_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["promotedPurchases_deleteInstance"]>;
  PromotedPurchasesGetInstance(...args: AppStoreFullApiOperationArgs<"promotedPurchases_getInstance">): Promise<AppStoreFullApiOperationResponseMap["promotedPurchases_getInstance"]>;
  PromotedPurchasesUpdateInstance(...args: AppStoreFullApiOperationArgs<"promotedPurchases_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["promotedPurchases_updateInstance"]>;
}

export const AppStoreFullApiPromotedPurchasesGeneratedFunctionNames = [
  "PromotedPurchasesCreateInstance",
  "PromotedPurchasesDeleteInstance",
  "PromotedPurchasesGetInstance",
  "PromotedPurchasesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiPromotedPurchasesGeneratedClient)[];

export function createAppStoreFullApiPromotedPurchasesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiPromotedPurchasesGeneratedClient {
  return {
    PromotedPurchasesCreateInstance: (...args) => callOperation("promotedPurchases_createInstance", ...(args as AppStoreFullApiOperationArgs<"promotedPurchases_createInstance">)),
    PromotedPurchasesDeleteInstance: (...args) => callOperation("promotedPurchases_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"promotedPurchases_deleteInstance">)),
    PromotedPurchasesGetInstance: (...args) => callOperation("promotedPurchases_getInstance", ...(args as AppStoreFullApiOperationArgs<"promotedPurchases_getInstance">)),
    PromotedPurchasesUpdateInstance: (...args) => callOperation("promotedPurchases_updateInstance", ...(args as AppStoreFullApiOperationArgs<"promotedPurchases_updateInstance">)),
  };
}
