// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiSecuritySettingsOperationKeys = [
  "ShowSecuritySettings"
] as const;
export type ZendeskFullApiSecuritySettingsOperationKey = typeof ZendeskFullApiSecuritySettingsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiSecuritySettingsOperationPathParamMap {
  "ShowSecuritySettings": {};
}

export interface ZendeskFullApiSecuritySettingsOperationRequestMap {
  "ShowSecuritySettings": ZendeskFullApiOperationInput<"ShowSecuritySettings">;
}

export interface ZendeskFullApiSecuritySettingsGeneratedClient {
  ShowSecuritySettings(...args: ZendeskFullApiOperationArgs<"ShowSecuritySettings">): Promise<ZendeskFullApiOperationResponseMap["ShowSecuritySettings"]>;
}

export const ZendeskFullApiSecuritySettingsGeneratedFunctionNames = [
  "ShowSecuritySettings"
] as const satisfies readonly (keyof ZendeskFullApiSecuritySettingsGeneratedClient)[];

export function createZendeskFullApiSecuritySettingsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiSecuritySettingsGeneratedClient {
  return {
    ShowSecuritySettings: (...args) => callOperation("ShowSecuritySettings", ...(args as ZendeskFullApiOperationArgs<"ShowSecuritySettings">)),
  };
}
