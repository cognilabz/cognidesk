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
export const KustomerFullApiAuthSettingsOperationKeys = [
  "GetAuthCustomerSettings",
  "GetAuthSettings",
  "UpdateAuthSettings",
  "GetPublicAuthSettings"
] as const;
export type KustomerFullApiAuthSettingsOperationKey = typeof KustomerFullApiAuthSettingsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiAuthSettingsOperationPathParamMap {
  "GetAuthCustomerSettings": {};
  "GetAuthSettings": {};
  "UpdateAuthSettings": {};
  "GetPublicAuthSettings": {};
}

export interface KustomerFullApiAuthSettingsOperationRequestMap {
  "GetAuthCustomerSettings": KustomerFullApiOperationInput<"GetAuthCustomerSettings">;
  "GetAuthSettings": KustomerFullApiOperationInput<"GetAuthSettings">;
  "UpdateAuthSettings": KustomerFullApiOperationInput<"UpdateAuthSettings">;
  "GetPublicAuthSettings": KustomerFullApiOperationInput<"GetPublicAuthSettings">;
}

export interface KustomerFullApiAuthSettingsGeneratedClient {
  kustomerGetAuthCustomerSettings(...args: KustomerFullApiOperationArgs<"GetAuthCustomerSettings">): Promise<KustomerFullApiOperationResponseMap["GetAuthCustomerSettings"]>;
  kustomerGetAuthSettings(...args: KustomerFullApiOperationArgs<"GetAuthSettings">): Promise<KustomerFullApiOperationResponseMap["GetAuthSettings"]>;
  kustomerUpdateAuthSettings(...args: KustomerFullApiOperationArgs<"UpdateAuthSettings">): Promise<KustomerFullApiOperationResponseMap["UpdateAuthSettings"]>;
  kustomerGetPublicAuthSettings(...args: KustomerFullApiOperationArgs<"GetPublicAuthSettings">): Promise<KustomerFullApiOperationResponseMap["GetPublicAuthSettings"]>;
}

export const KustomerFullApiAuthSettingsGeneratedFunctionNames = [
  "kustomerGetAuthCustomerSettings",
  "kustomerGetAuthSettings",
  "kustomerUpdateAuthSettings",
  "kustomerGetPublicAuthSettings"
] as const satisfies readonly (keyof KustomerFullApiAuthSettingsGeneratedClient)[];

export function createKustomerFullApiAuthSettingsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiAuthSettingsGeneratedClient {
  return {
    kustomerGetAuthCustomerSettings: (...args) => callOperation("GetAuthCustomerSettings", ...(args as KustomerFullApiOperationArgs<"GetAuthCustomerSettings">)),
    kustomerGetAuthSettings: (...args) => callOperation("GetAuthSettings", ...(args as KustomerFullApiOperationArgs<"GetAuthSettings">)),
    kustomerUpdateAuthSettings: (...args) => callOperation("UpdateAuthSettings", ...(args as KustomerFullApiOperationArgs<"UpdateAuthSettings">)),
    kustomerGetPublicAuthSettings: (...args) => callOperation("GetPublicAuthSettings", ...(args as KustomerFullApiOperationArgs<"GetPublicAuthSettings">)),
  };
}
