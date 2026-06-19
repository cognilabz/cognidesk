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
export const AppStoreFullApiMarketplaceSearchDetailsOperationKeys = [
  "marketplaceSearchDetails_createInstance",
  "marketplaceSearchDetails_deleteInstance",
  "marketplaceSearchDetails_updateInstance"
] as const;
export type AppStoreFullApiMarketplaceSearchDetailsOperationKey = typeof AppStoreFullApiMarketplaceSearchDetailsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiMarketplaceSearchDetailsOperationPathParamMap {
  "marketplaceSearchDetails_createInstance": {};
  "marketplaceSearchDetails_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "marketplaceSearchDetails_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiMarketplaceSearchDetailsOperationRequestMap {
  "marketplaceSearchDetails_createInstance": AppStoreFullApiOperationInput<"marketplaceSearchDetails_createInstance">;
  "marketplaceSearchDetails_deleteInstance": AppStoreFullApiOperationInput<"marketplaceSearchDetails_deleteInstance">;
  "marketplaceSearchDetails_updateInstance": AppStoreFullApiOperationInput<"marketplaceSearchDetails_updateInstance">;
}

export interface AppStoreFullApiMarketplaceSearchDetailsGeneratedClient {
  MarketplaceSearchDetailsCreateInstance(...args: AppStoreFullApiOperationArgs<"marketplaceSearchDetails_createInstance">): Promise<AppStoreFullApiOperationResponseMap["marketplaceSearchDetails_createInstance"]>;
  MarketplaceSearchDetailsDeleteInstance(...args: AppStoreFullApiOperationArgs<"marketplaceSearchDetails_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["marketplaceSearchDetails_deleteInstance"]>;
  MarketplaceSearchDetailsUpdateInstance(...args: AppStoreFullApiOperationArgs<"marketplaceSearchDetails_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["marketplaceSearchDetails_updateInstance"]>;
}

export const AppStoreFullApiMarketplaceSearchDetailsGeneratedFunctionNames = [
  "MarketplaceSearchDetailsCreateInstance",
  "MarketplaceSearchDetailsDeleteInstance",
  "MarketplaceSearchDetailsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiMarketplaceSearchDetailsGeneratedClient)[];

export function createAppStoreFullApiMarketplaceSearchDetailsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiMarketplaceSearchDetailsGeneratedClient {
  return {
    MarketplaceSearchDetailsCreateInstance: (...args) => callOperation("marketplaceSearchDetails_createInstance", ...(args as AppStoreFullApiOperationArgs<"marketplaceSearchDetails_createInstance">)),
    MarketplaceSearchDetailsDeleteInstance: (...args) => callOperation("marketplaceSearchDetails_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"marketplaceSearchDetails_deleteInstance">)),
    MarketplaceSearchDetailsUpdateInstance: (...args) => callOperation("marketplaceSearchDetails_updateInstance", ...(args as AppStoreFullApiOperationArgs<"marketplaceSearchDetails_updateInstance">)),
  };
}
