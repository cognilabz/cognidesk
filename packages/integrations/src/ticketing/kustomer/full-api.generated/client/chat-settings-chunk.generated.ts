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
export const KustomerFullApiChatSettingsOperationKeys = [
  "GetChatSettings",
  "SetChatSettings"
] as const;
export type KustomerFullApiChatSettingsOperationKey = typeof KustomerFullApiChatSettingsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiChatSettingsOperationPathParamMap {
  "GetChatSettings": {};
  "SetChatSettings": {};
}

export interface KustomerFullApiChatSettingsOperationRequestMap {
  "GetChatSettings": KustomerFullApiOperationInput<"GetChatSettings">;
  "SetChatSettings": KustomerFullApiOperationInput<"SetChatSettings">;
}

export interface KustomerFullApiChatSettingsGeneratedClient {
  kustomerGetChatSettings(...args: KustomerFullApiOperationArgs<"GetChatSettings">): Promise<KustomerFullApiOperationResponseMap["GetChatSettings"]>;
  kustomerSetChatSettings(...args: KustomerFullApiOperationArgs<"SetChatSettings">): Promise<KustomerFullApiOperationResponseMap["SetChatSettings"]>;
}

export const KustomerFullApiChatSettingsGeneratedFunctionNames = [
  "kustomerGetChatSettings",
  "kustomerSetChatSettings"
] as const satisfies readonly (keyof KustomerFullApiChatSettingsGeneratedClient)[];

export function createKustomerFullApiChatSettingsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiChatSettingsGeneratedClient {
  return {
    kustomerGetChatSettings: (...args) => callOperation("GetChatSettings", ...(args as KustomerFullApiOperationArgs<"GetChatSettings">)),
    kustomerSetChatSettings: (...args) => callOperation("SetChatSettings", ...(args as KustomerFullApiOperationArgs<"SetChatSettings">)),
  };
}
