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
export const ZendeskFullApiAccountSettingsOperationKeys = [
  "ShowAccountSettings",
  "UpdateAccountSettings"
] as const;
export type ZendeskFullApiAccountSettingsOperationKey = typeof ZendeskFullApiAccountSettingsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiAccountSettingsOperationPathParamMap {
  "ShowAccountSettings": {};
  "UpdateAccountSettings": {};
}

export interface ZendeskFullApiAccountSettingsOperationRequestMap {
  "ShowAccountSettings": ZendeskFullApiOperationInput<"ShowAccountSettings">;
  "UpdateAccountSettings": ZendeskFullApiOperationInput<"UpdateAccountSettings">;
}

export interface ZendeskFullApiAccountSettingsGeneratedClient {
  ShowAccountSettings(...args: ZendeskFullApiOperationArgs<"ShowAccountSettings">): Promise<ZendeskFullApiOperationResponseMap["ShowAccountSettings"]>;
  UpdateAccountSettings(...args: ZendeskFullApiOperationArgs<"UpdateAccountSettings">): Promise<ZendeskFullApiOperationResponseMap["UpdateAccountSettings"]>;
}

export const ZendeskFullApiAccountSettingsGeneratedFunctionNames = [
  "ShowAccountSettings",
  "UpdateAccountSettings"
] as const satisfies readonly (keyof ZendeskFullApiAccountSettingsGeneratedClient)[];

export function createZendeskFullApiAccountSettingsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiAccountSettingsGeneratedClient {
  return {
    ShowAccountSettings: (...args) => callOperation("ShowAccountSettings", ...(args as ZendeskFullApiOperationArgs<"ShowAccountSettings">)),
    UpdateAccountSettings: (...args) => callOperation("UpdateAccountSettings", ...(args as ZendeskFullApiOperationArgs<"UpdateAccountSettings">)),
  };
}
