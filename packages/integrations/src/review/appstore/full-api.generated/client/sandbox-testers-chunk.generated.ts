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
export const AppStoreFullApiSandboxTestersOperationKeys = [
  "sandboxTestersV2_getCollection",
  "sandboxTestersV2_updateInstance"
] as const;
export type AppStoreFullApiSandboxTestersOperationKey = typeof AppStoreFullApiSandboxTestersOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiSandboxTestersOperationPathParamMap {
  "sandboxTestersV2_getCollection": {};
  "sandboxTestersV2_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiSandboxTestersOperationRequestMap {
  "sandboxTestersV2_getCollection": AppStoreFullApiOperationInput<"sandboxTestersV2_getCollection">;
  "sandboxTestersV2_updateInstance": AppStoreFullApiOperationInput<"sandboxTestersV2_updateInstance">;
}

export interface AppStoreFullApiSandboxTestersGeneratedClient {
  SandboxTestersV2GetCollection(...args: AppStoreFullApiOperationArgs<"sandboxTestersV2_getCollection">): Promise<AppStoreFullApiOperationResponseMap["sandboxTestersV2_getCollection"]>;
  SandboxTestersV2UpdateInstance(...args: AppStoreFullApiOperationArgs<"sandboxTestersV2_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["sandboxTestersV2_updateInstance"]>;
}

export const AppStoreFullApiSandboxTestersGeneratedFunctionNames = [
  "SandboxTestersV2GetCollection",
  "SandboxTestersV2UpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiSandboxTestersGeneratedClient)[];

export function createAppStoreFullApiSandboxTestersGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiSandboxTestersGeneratedClient {
  return {
    SandboxTestersV2GetCollection: (...args) => callOperation("sandboxTestersV2_getCollection", ...(args as AppStoreFullApiOperationArgs<"sandboxTestersV2_getCollection">)),
    SandboxTestersV2UpdateInstance: (...args) => callOperation("sandboxTestersV2_updateInstance", ...(args as AppStoreFullApiOperationArgs<"sandboxTestersV2_updateInstance">)),
  };
}
