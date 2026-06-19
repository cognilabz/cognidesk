// Generated endpoint chunk for GorgiasFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GorgiasGeneratedOperationCaller,
  GorgiasFullApiOperationArgs,
  GorgiasFullApiOperationInput,
  GorgiasFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GorgiasFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GorgiasFullApiAccountOperationKeys = [
  "get-account",
  "list-account-settings",
  "create-account-setting",
  "update-account-setting"
] as const;
export type GorgiasFullApiAccountOperationKey = typeof GorgiasFullApiAccountOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiAccountOperationPathParamMap {
  "get-account": {};
  "list-account-settings": {};
  "create-account-setting": {};
  "update-account-setting": { "id": GorgiasFullApiPathParamValue };
}

export interface GorgiasFullApiAccountOperationRequestMap {
  "get-account": GorgiasFullApiOperationInput<"get-account">;
  "list-account-settings": GorgiasFullApiOperationInput<"list-account-settings">;
  "create-account-setting": GorgiasFullApiOperationInput<"create-account-setting">;
  "update-account-setting": GorgiasFullApiOperationInput<"update-account-setting">;
}

export interface GorgiasFullApiAccountGeneratedClient {
  gorgiasGetAccount(...args: GorgiasFullApiOperationArgs<"get-account">): Promise<GorgiasFullApiOperationResponseMap["get-account"]>;
  gorgiasListAccountSettings(...args: GorgiasFullApiOperationArgs<"list-account-settings">): Promise<GorgiasFullApiOperationResponseMap["list-account-settings"]>;
  gorgiasCreateAccountSetting(...args: GorgiasFullApiOperationArgs<"create-account-setting">): Promise<GorgiasFullApiOperationResponseMap["create-account-setting"]>;
  gorgiasUpdateAccountSetting(...args: GorgiasFullApiOperationArgs<"update-account-setting">): Promise<GorgiasFullApiOperationResponseMap["update-account-setting"]>;
}

export const GorgiasFullApiAccountGeneratedFunctionNames = [
  "gorgiasGetAccount",
  "gorgiasListAccountSettings",
  "gorgiasCreateAccountSetting",
  "gorgiasUpdateAccountSetting"
] as const satisfies readonly (keyof GorgiasFullApiAccountGeneratedClient)[];

export function createGorgiasFullApiAccountGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiAccountGeneratedClient {
  return {
    gorgiasGetAccount: (...args) => callOperation("get-account", ...(args as GorgiasFullApiOperationArgs<"get-account">)),
    gorgiasListAccountSettings: (...args) => callOperation("list-account-settings", ...(args as GorgiasFullApiOperationArgs<"list-account-settings">)),
    gorgiasCreateAccountSetting: (...args) => callOperation("create-account-setting", ...(args as GorgiasFullApiOperationArgs<"create-account-setting">)),
    gorgiasUpdateAccountSetting: (...args) => callOperation("update-account-setting", ...(args as GorgiasFullApiOperationArgs<"update-account-setting">)),
  };
}
