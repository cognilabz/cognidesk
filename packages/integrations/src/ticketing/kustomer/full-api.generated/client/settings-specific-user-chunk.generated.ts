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
export const KustomerFullApiSettingsSpecificUserOperationKeys = [
  "GetSpecificUserSetting",
  "UpdateSpecificUserSetting",
  "GetSpecificUserSettingforCurrentUser",
  "UpdateSpecificUserSettingforCurrentUser"
] as const;
export type KustomerFullApiSettingsSpecificUserOperationKey = typeof KustomerFullApiSettingsSpecificUserOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiSettingsSpecificUserOperationPathParamMap {
  "GetSpecificUserSetting": { "id": KustomerFullApiPathParamValue; "app": KustomerFullApiPathParamValue; "category": KustomerFullApiPathParamValue; "name": KustomerFullApiPathParamValue };
  "UpdateSpecificUserSetting": { "id": KustomerFullApiPathParamValue; "app": KustomerFullApiPathParamValue; "category": KustomerFullApiPathParamValue; "name": KustomerFullApiPathParamValue };
  "GetSpecificUserSettingforCurrentUser": { "app": KustomerFullApiPathParamValue; "category": KustomerFullApiPathParamValue; "name": KustomerFullApiPathParamValue };
  "UpdateSpecificUserSettingforCurrentUser": { "app": KustomerFullApiPathParamValue; "category": KustomerFullApiPathParamValue; "name": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiSettingsSpecificUserOperationRequestMap {
  "GetSpecificUserSetting": KustomerFullApiOperationInput<"GetSpecificUserSetting">;
  "UpdateSpecificUserSetting": KustomerFullApiOperationInput<"UpdateSpecificUserSetting">;
  "GetSpecificUserSettingforCurrentUser": KustomerFullApiOperationInput<"GetSpecificUserSettingforCurrentUser">;
  "UpdateSpecificUserSettingforCurrentUser": KustomerFullApiOperationInput<"UpdateSpecificUserSettingforCurrentUser">;
}

export interface KustomerFullApiSettingsSpecificUserGeneratedClient {
  kustomerGetSpecificUserSetting(...args: KustomerFullApiOperationArgs<"GetSpecificUserSetting">): Promise<KustomerFullApiOperationResponseMap["GetSpecificUserSetting"]>;
  kustomerUpdateSpecificUserSetting(...args: KustomerFullApiOperationArgs<"UpdateSpecificUserSetting">): Promise<KustomerFullApiOperationResponseMap["UpdateSpecificUserSetting"]>;
  kustomerGetSpecificUserSettingforCurrentUser(...args: KustomerFullApiOperationArgs<"GetSpecificUserSettingforCurrentUser">): Promise<KustomerFullApiOperationResponseMap["GetSpecificUserSettingforCurrentUser"]>;
  kustomerUpdateSpecificUserSettingforCurrentUser(...args: KustomerFullApiOperationArgs<"UpdateSpecificUserSettingforCurrentUser">): Promise<KustomerFullApiOperationResponseMap["UpdateSpecificUserSettingforCurrentUser"]>;
}

export const KustomerFullApiSettingsSpecificUserGeneratedFunctionNames = [
  "kustomerGetSpecificUserSetting",
  "kustomerUpdateSpecificUserSetting",
  "kustomerGetSpecificUserSettingforCurrentUser",
  "kustomerUpdateSpecificUserSettingforCurrentUser"
] as const satisfies readonly (keyof KustomerFullApiSettingsSpecificUserGeneratedClient)[];

export function createKustomerFullApiSettingsSpecificUserGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiSettingsSpecificUserGeneratedClient {
  return {
    kustomerGetSpecificUserSetting: (...args) => callOperation("GetSpecificUserSetting", ...(args as KustomerFullApiOperationArgs<"GetSpecificUserSetting">)),
    kustomerUpdateSpecificUserSetting: (...args) => callOperation("UpdateSpecificUserSetting", ...(args as KustomerFullApiOperationArgs<"UpdateSpecificUserSetting">)),
    kustomerGetSpecificUserSettingforCurrentUser: (...args) => callOperation("GetSpecificUserSettingforCurrentUser", ...(args as KustomerFullApiOperationArgs<"GetSpecificUserSettingforCurrentUser">)),
    kustomerUpdateSpecificUserSettingforCurrentUser: (...args) => callOperation("UpdateSpecificUserSettingforCurrentUser", ...(args as KustomerFullApiOperationArgs<"UpdateSpecificUserSettingforCurrentUser">)),
  };
}
