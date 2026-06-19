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
export const AppStoreFullApiBundleIdCapabilitiesOperationKeys = [
  "bundleIdCapabilities_createInstance",
  "bundleIdCapabilities_deleteInstance",
  "bundleIdCapabilities_updateInstance"
] as const;
export type AppStoreFullApiBundleIdCapabilitiesOperationKey = typeof AppStoreFullApiBundleIdCapabilitiesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBundleIdCapabilitiesOperationPathParamMap {
  "bundleIdCapabilities_createInstance": {};
  "bundleIdCapabilities_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "bundleIdCapabilities_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBundleIdCapabilitiesOperationRequestMap {
  "bundleIdCapabilities_createInstance": AppStoreFullApiOperationInput<"bundleIdCapabilities_createInstance">;
  "bundleIdCapabilities_deleteInstance": AppStoreFullApiOperationInput<"bundleIdCapabilities_deleteInstance">;
  "bundleIdCapabilities_updateInstance": AppStoreFullApiOperationInput<"bundleIdCapabilities_updateInstance">;
}

export interface AppStoreFullApiBundleIdCapabilitiesGeneratedClient {
  BundleIdCapabilitiesCreateInstance(...args: AppStoreFullApiOperationArgs<"bundleIdCapabilities_createInstance">): Promise<AppStoreFullApiOperationResponseMap["bundleIdCapabilities_createInstance"]>;
  BundleIdCapabilitiesDeleteInstance(...args: AppStoreFullApiOperationArgs<"bundleIdCapabilities_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["bundleIdCapabilities_deleteInstance"]>;
  BundleIdCapabilitiesUpdateInstance(...args: AppStoreFullApiOperationArgs<"bundleIdCapabilities_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["bundleIdCapabilities_updateInstance"]>;
}

export const AppStoreFullApiBundleIdCapabilitiesGeneratedFunctionNames = [
  "BundleIdCapabilitiesCreateInstance",
  "BundleIdCapabilitiesDeleteInstance",
  "BundleIdCapabilitiesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiBundleIdCapabilitiesGeneratedClient)[];

export function createAppStoreFullApiBundleIdCapabilitiesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBundleIdCapabilitiesGeneratedClient {
  return {
    BundleIdCapabilitiesCreateInstance: (...args) => callOperation("bundleIdCapabilities_createInstance", ...(args as AppStoreFullApiOperationArgs<"bundleIdCapabilities_createInstance">)),
    BundleIdCapabilitiesDeleteInstance: (...args) => callOperation("bundleIdCapabilities_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"bundleIdCapabilities_deleteInstance">)),
    BundleIdCapabilitiesUpdateInstance: (...args) => callOperation("bundleIdCapabilities_updateInstance", ...(args as AppStoreFullApiOperationArgs<"bundleIdCapabilities_updateInstance">)),
  };
}
