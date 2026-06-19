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
export const AppStoreFullApiCiArtifactsOperationKeys = [
  "ciArtifacts_getInstance"
] as const;
export type AppStoreFullApiCiArtifactsOperationKey = typeof AppStoreFullApiCiArtifactsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiCiArtifactsOperationPathParamMap {
  "ciArtifacts_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiCiArtifactsOperationRequestMap {
  "ciArtifacts_getInstance": AppStoreFullApiOperationInput<"ciArtifacts_getInstance">;
}

export interface AppStoreFullApiCiArtifactsGeneratedClient {
  CiArtifactsGetInstance(...args: AppStoreFullApiOperationArgs<"ciArtifacts_getInstance">): Promise<AppStoreFullApiOperationResponseMap["ciArtifacts_getInstance"]>;
}

export const AppStoreFullApiCiArtifactsGeneratedFunctionNames = [
  "CiArtifactsGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiCiArtifactsGeneratedClient)[];

export function createAppStoreFullApiCiArtifactsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiCiArtifactsGeneratedClient {
  return {
    CiArtifactsGetInstance: (...args) => callOperation("ciArtifacts_getInstance", ...(args as AppStoreFullApiOperationArgs<"ciArtifacts_getInstance">)),
  };
}
