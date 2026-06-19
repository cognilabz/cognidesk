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
export const AppStoreFullApiMarketplaceWebhooksOperationKeys = [
  "marketplaceWebhooks_createInstance",
  "marketplaceWebhooks_deleteInstance",
  "marketplaceWebhooks_getCollection",
  "marketplaceWebhooks_updateInstance"
] as const;
export type AppStoreFullApiMarketplaceWebhooksOperationKey = typeof AppStoreFullApiMarketplaceWebhooksOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiMarketplaceWebhooksOperationPathParamMap {
  "marketplaceWebhooks_createInstance": {};
  "marketplaceWebhooks_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "marketplaceWebhooks_getCollection": {};
  "marketplaceWebhooks_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiMarketplaceWebhooksOperationRequestMap {
  "marketplaceWebhooks_createInstance": AppStoreFullApiOperationInput<"marketplaceWebhooks_createInstance">;
  "marketplaceWebhooks_deleteInstance": AppStoreFullApiOperationInput<"marketplaceWebhooks_deleteInstance">;
  "marketplaceWebhooks_getCollection": AppStoreFullApiOperationInput<"marketplaceWebhooks_getCollection">;
  "marketplaceWebhooks_updateInstance": AppStoreFullApiOperationInput<"marketplaceWebhooks_updateInstance">;
}

export interface AppStoreFullApiMarketplaceWebhooksGeneratedClient {
  MarketplaceWebhooksCreateInstance(...args: AppStoreFullApiOperationArgs<"marketplaceWebhooks_createInstance">): Promise<AppStoreFullApiOperationResponseMap["marketplaceWebhooks_createInstance"]>;
  MarketplaceWebhooksDeleteInstance(...args: AppStoreFullApiOperationArgs<"marketplaceWebhooks_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["marketplaceWebhooks_deleteInstance"]>;
  MarketplaceWebhooksGetCollection(...args: AppStoreFullApiOperationArgs<"marketplaceWebhooks_getCollection">): Promise<AppStoreFullApiOperationResponseMap["marketplaceWebhooks_getCollection"]>;
  MarketplaceWebhooksUpdateInstance(...args: AppStoreFullApiOperationArgs<"marketplaceWebhooks_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["marketplaceWebhooks_updateInstance"]>;
}

export const AppStoreFullApiMarketplaceWebhooksGeneratedFunctionNames = [
  "MarketplaceWebhooksCreateInstance",
  "MarketplaceWebhooksDeleteInstance",
  "MarketplaceWebhooksGetCollection",
  "MarketplaceWebhooksUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiMarketplaceWebhooksGeneratedClient)[];

export function createAppStoreFullApiMarketplaceWebhooksGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiMarketplaceWebhooksGeneratedClient {
  return {
    MarketplaceWebhooksCreateInstance: (...args) => callOperation("marketplaceWebhooks_createInstance", ...(args as AppStoreFullApiOperationArgs<"marketplaceWebhooks_createInstance">)),
    MarketplaceWebhooksDeleteInstance: (...args) => callOperation("marketplaceWebhooks_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"marketplaceWebhooks_deleteInstance">)),
    MarketplaceWebhooksGetCollection: (...args) => callOperation("marketplaceWebhooks_getCollection", ...(args as AppStoreFullApiOperationArgs<"marketplaceWebhooks_getCollection">)),
    MarketplaceWebhooksUpdateInstance: (...args) => callOperation("marketplaceWebhooks_updateInstance", ...(args as AppStoreFullApiOperationArgs<"marketplaceWebhooks_updateInstance">)),
  };
}
