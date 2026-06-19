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
export const AppStoreFullApiSandboxTestersClearPurchaseHistoryRequestOperationKeys = [
  "sandboxTestersClearPurchaseHistoryRequestV2_createInstance"
] as const;
export type AppStoreFullApiSandboxTestersClearPurchaseHistoryRequestOperationKey = typeof AppStoreFullApiSandboxTestersClearPurchaseHistoryRequestOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiSandboxTestersClearPurchaseHistoryRequestOperationPathParamMap {
  "sandboxTestersClearPurchaseHistoryRequestV2_createInstance": {};
}

export interface AppStoreFullApiSandboxTestersClearPurchaseHistoryRequestOperationRequestMap {
  "sandboxTestersClearPurchaseHistoryRequestV2_createInstance": AppStoreFullApiOperationInput<"sandboxTestersClearPurchaseHistoryRequestV2_createInstance">;
}

export interface AppStoreFullApiSandboxTestersClearPurchaseHistoryRequestGeneratedClient {
  SandboxTestersClearPurchaseHistoryRequestV2CreateInstance(...args: AppStoreFullApiOperationArgs<"sandboxTestersClearPurchaseHistoryRequestV2_createInstance">): Promise<AppStoreFullApiOperationResponseMap["sandboxTestersClearPurchaseHistoryRequestV2_createInstance"]>;
}

export const AppStoreFullApiSandboxTestersClearPurchaseHistoryRequestGeneratedFunctionNames = [
  "SandboxTestersClearPurchaseHistoryRequestV2CreateInstance"
] as const satisfies readonly (keyof AppStoreFullApiSandboxTestersClearPurchaseHistoryRequestGeneratedClient)[];

export function createAppStoreFullApiSandboxTestersClearPurchaseHistoryRequestGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiSandboxTestersClearPurchaseHistoryRequestGeneratedClient {
  return {
    SandboxTestersClearPurchaseHistoryRequestV2CreateInstance: (...args) => callOperation("sandboxTestersClearPurchaseHistoryRequestV2_createInstance", ...(args as AppStoreFullApiOperationArgs<"sandboxTestersClearPurchaseHistoryRequestV2_createInstance">)),
  };
}
