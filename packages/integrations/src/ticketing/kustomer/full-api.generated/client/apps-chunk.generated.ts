// Generated endpoint chunk for KustomerFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  KustomerGeneratedOperationCaller,
  KustomerFullApiOperationArgs,
  KustomerFullApiOperationInput,
  KustomerFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { KustomerFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const KustomerFullApiAppsOperationKeys = [
  "GetInstalledApps",
  "GetInstalledApps(BySpecificVersion)",
  "GetAvailableApps",
  "GetAvailableApp"
] as const;
export type KustomerFullApiAppsOperationKey = typeof KustomerFullApiAppsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiAppsOperationPathParamMap {
  "GetInstalledApps": {};
  "GetInstalledApps(BySpecificVersion)": { "appVersion": KustomerFullApiPathParamValue };
  "GetAvailableApps": {};
  "GetAvailableApp": { "appVersion": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiAppsOperationRequestMap {
  "GetInstalledApps": KustomerFullApiOperationInput<"GetInstalledApps">;
  "GetInstalledApps(BySpecificVersion)": KustomerFullApiOperationInput<"GetInstalledApps(BySpecificVersion)">;
  "GetAvailableApps": KustomerFullApiOperationInput<"GetAvailableApps">;
  "GetAvailableApp": KustomerFullApiOperationInput<"GetAvailableApp">;
}

export interface KustomerFullApiAppsGeneratedClient {
  kustomerGetInstalledApps(...args: KustomerFullApiOperationArgs<"GetInstalledApps">): Promise<KustomerFullApiOperationResponseMap["GetInstalledApps"]>;
  kustomerGetInstalledAppsBySpecificVersion(...args: KustomerFullApiOperationArgs<"GetInstalledApps(BySpecificVersion)">): Promise<KustomerFullApiOperationResponseMap["GetInstalledApps(BySpecificVersion)"]>;
  kustomerGetAvailableApps(...args: KustomerFullApiOperationArgs<"GetAvailableApps">): Promise<KustomerFullApiOperationResponseMap["GetAvailableApps"]>;
  kustomerGetAvailableApp(...args: KustomerFullApiOperationArgs<"GetAvailableApp">): Promise<KustomerFullApiOperationResponseMap["GetAvailableApp"]>;
}

export const KustomerFullApiAppsGeneratedFunctionNames = [
  "kustomerGetInstalledApps",
  "kustomerGetInstalledAppsBySpecificVersion",
  "kustomerGetAvailableApps",
  "kustomerGetAvailableApp"
] as const satisfies readonly (keyof KustomerFullApiAppsGeneratedClient)[];

export function createKustomerFullApiAppsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiAppsGeneratedClient {
  return {
    kustomerGetInstalledApps: (...args) => callOperation("GetInstalledApps", ...(args as KustomerFullApiOperationArgs<"GetInstalledApps">)),
    kustomerGetInstalledAppsBySpecificVersion: (...args) => callOperation("GetInstalledApps(BySpecificVersion)", ...(args as KustomerFullApiOperationArgs<"GetInstalledApps(BySpecificVersion)">)),
    kustomerGetAvailableApps: (...args) => callOperation("GetAvailableApps", ...(args as KustomerFullApiOperationArgs<"GetAvailableApps">)),
    kustomerGetAvailableApp: (...args) => callOperation("GetAvailableApp", ...(args as KustomerFullApiOperationArgs<"GetAvailableApp">)),
  };
}
