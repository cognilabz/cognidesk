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
export const AppStoreFullApiTerritoryAvailabilitiesOperationKeys = [
  "territoryAvailabilities_updateInstance"
] as const;
export type AppStoreFullApiTerritoryAvailabilitiesOperationKey = typeof AppStoreFullApiTerritoryAvailabilitiesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiTerritoryAvailabilitiesOperationPathParamMap {
  "territoryAvailabilities_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiTerritoryAvailabilitiesOperationRequestMap {
  "territoryAvailabilities_updateInstance": AppStoreFullApiOperationInput<"territoryAvailabilities_updateInstance">;
}

export interface AppStoreFullApiTerritoryAvailabilitiesGeneratedClient {
  TerritoryAvailabilitiesUpdateInstance(...args: AppStoreFullApiOperationArgs<"territoryAvailabilities_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["territoryAvailabilities_updateInstance"]>;
}

export const AppStoreFullApiTerritoryAvailabilitiesGeneratedFunctionNames = [
  "TerritoryAvailabilitiesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiTerritoryAvailabilitiesGeneratedClient)[];

export function createAppStoreFullApiTerritoryAvailabilitiesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiTerritoryAvailabilitiesGeneratedClient {
  return {
    TerritoryAvailabilitiesUpdateInstance: (...args) => callOperation("territoryAvailabilities_updateInstance", ...(args as AppStoreFullApiOperationArgs<"territoryAvailabilities_updateInstance">)),
  };
}
