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
export const KustomerFullApiSettingsOperationKeys = [
  "GetSettings",
  "GetaSetting",
  "UpdateaSetting",
  "GetUserSettings",
  "GetUserSettingsforCurrentUser"
] as const;
export type KustomerFullApiSettingsOperationKey = typeof KustomerFullApiSettingsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiSettingsOperationPathParamMap {
  "GetSettings": {};
  "GetaSetting": { "app": KustomerFullApiPathParamValue; "category": KustomerFullApiPathParamValue; "name": KustomerFullApiPathParamValue };
  "UpdateaSetting": { "app": KustomerFullApiPathParamValue; "category": KustomerFullApiPathParamValue; "name": KustomerFullApiPathParamValue };
  "GetUserSettings": { "id": KustomerFullApiPathParamValue };
  "GetUserSettingsforCurrentUser": {};
}

export interface KustomerFullApiSettingsOperationRequestMap {
  "GetSettings": KustomerFullApiOperationInput<"GetSettings">;
  "GetaSetting": KustomerFullApiOperationInput<"GetaSetting">;
  "UpdateaSetting": KustomerFullApiOperationInput<"UpdateaSetting">;
  "GetUserSettings": KustomerFullApiOperationInput<"GetUserSettings">;
  "GetUserSettingsforCurrentUser": KustomerFullApiOperationInput<"GetUserSettingsforCurrentUser">;
}

export interface KustomerFullApiSettingsGeneratedClient {
  kustomerGetSettings(...args: KustomerFullApiOperationArgs<"GetSettings">): Promise<KustomerFullApiOperationResponseMap["GetSettings"]>;
  kustomerGetaSetting(...args: KustomerFullApiOperationArgs<"GetaSetting">): Promise<KustomerFullApiOperationResponseMap["GetaSetting"]>;
  kustomerUpdateaSetting(...args: KustomerFullApiOperationArgs<"UpdateaSetting">): Promise<KustomerFullApiOperationResponseMap["UpdateaSetting"]>;
  kustomerGetUserSettings(...args: KustomerFullApiOperationArgs<"GetUserSettings">): Promise<KustomerFullApiOperationResponseMap["GetUserSettings"]>;
  kustomerGetUserSettingsforCurrentUser(...args: KustomerFullApiOperationArgs<"GetUserSettingsforCurrentUser">): Promise<KustomerFullApiOperationResponseMap["GetUserSettingsforCurrentUser"]>;
}

export const KustomerFullApiSettingsGeneratedFunctionNames = [
  "kustomerGetSettings",
  "kustomerGetaSetting",
  "kustomerUpdateaSetting",
  "kustomerGetUserSettings",
  "kustomerGetUserSettingsforCurrentUser"
] as const satisfies readonly (keyof KustomerFullApiSettingsGeneratedClient)[];

export function createKustomerFullApiSettingsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiSettingsGeneratedClient {
  return {
    kustomerGetSettings: (...args) => callOperation("GetSettings", ...(args as KustomerFullApiOperationArgs<"GetSettings">)),
    kustomerGetaSetting: (...args) => callOperation("GetaSetting", ...(args as KustomerFullApiOperationArgs<"GetaSetting">)),
    kustomerUpdateaSetting: (...args) => callOperation("UpdateaSetting", ...(args as KustomerFullApiOperationArgs<"UpdateaSetting">)),
    kustomerGetUserSettings: (...args) => callOperation("GetUserSettings", ...(args as KustomerFullApiOperationArgs<"GetUserSettings">)),
    kustomerGetUserSettingsforCurrentUser: (...args) => callOperation("GetUserSettingsforCurrentUser", ...(args as KustomerFullApiOperationArgs<"GetUserSettingsforCurrentUser">)),
  };
}
