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
export const AppStoreFullApiTerritoriesOperationKeys = [
  "territories_getCollection"
] as const;
export type AppStoreFullApiTerritoriesOperationKey = typeof AppStoreFullApiTerritoriesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiTerritoriesOperationPathParamMap {
  "territories_getCollection": {};
}

export interface AppStoreFullApiTerritoriesOperationRequestMap {
  "territories_getCollection": AppStoreFullApiOperationInput<"territories_getCollection">;
}

export interface AppStoreFullApiTerritoriesGeneratedClient {
  TerritoriesGetCollection(...args: AppStoreFullApiOperationArgs<"territories_getCollection">): Promise<AppStoreFullApiOperationResponseMap["territories_getCollection"]>;
}

export const AppStoreFullApiTerritoriesGeneratedFunctionNames = [
  "TerritoriesGetCollection"
] as const satisfies readonly (keyof AppStoreFullApiTerritoriesGeneratedClient)[];

export function createAppStoreFullApiTerritoriesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiTerritoriesGeneratedClient {
  return {
    TerritoriesGetCollection: (...args) => callOperation("territories_getCollection", ...(args as AppStoreFullApiOperationArgs<"territories_getCollection">)),
  };
}
