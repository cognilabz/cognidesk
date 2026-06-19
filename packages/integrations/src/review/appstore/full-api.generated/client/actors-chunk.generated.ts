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
export const AppStoreFullApiActorsOperationKeys = [
  "actors_getCollection",
  "actors_getInstance"
] as const;
export type AppStoreFullApiActorsOperationKey = typeof AppStoreFullApiActorsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiActorsOperationPathParamMap {
  "actors_getCollection": {};
  "actors_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiActorsOperationRequestMap {
  "actors_getCollection": AppStoreFullApiOperationInput<"actors_getCollection">;
  "actors_getInstance": AppStoreFullApiOperationInput<"actors_getInstance">;
}

export interface AppStoreFullApiActorsGeneratedClient {
  ActorsGetCollection(...args: AppStoreFullApiOperationArgs<"actors_getCollection">): Promise<AppStoreFullApiOperationResponseMap["actors_getCollection"]>;
  ActorsGetInstance(...args: AppStoreFullApiOperationArgs<"actors_getInstance">): Promise<AppStoreFullApiOperationResponseMap["actors_getInstance"]>;
}

export const AppStoreFullApiActorsGeneratedFunctionNames = [
  "ActorsGetCollection",
  "ActorsGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiActorsGeneratedClient)[];

export function createAppStoreFullApiActorsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiActorsGeneratedClient {
  return {
    ActorsGetCollection: (...args) => callOperation("actors_getCollection", ...(args as AppStoreFullApiOperationArgs<"actors_getCollection">)),
    ActorsGetInstance: (...args) => callOperation("actors_getInstance", ...(args as AppStoreFullApiOperationArgs<"actors_getInstance">)),
  };
}
