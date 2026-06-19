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
export const KustomerFullApiTeamRoutingSettingsOperationKeys = [
  "GetAllTeamRoutingSettings",
  "GetTeamRoutingSettings",
  "UpdateTeamRoutingSettings",
  "GetCurrentsUserTeamRoutingSettings"
] as const;
export type KustomerFullApiTeamRoutingSettingsOperationKey = typeof KustomerFullApiTeamRoutingSettingsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiTeamRoutingSettingsOperationPathParamMap {
  "GetAllTeamRoutingSettings": {};
  "GetTeamRoutingSettings": { "id": KustomerFullApiPathParamValue };
  "UpdateTeamRoutingSettings": { "id": KustomerFullApiPathParamValue };
  "GetCurrentsUserTeamRoutingSettings": {};
}

export interface KustomerFullApiTeamRoutingSettingsOperationRequestMap {
  "GetAllTeamRoutingSettings": KustomerFullApiOperationInput<"GetAllTeamRoutingSettings">;
  "GetTeamRoutingSettings": KustomerFullApiOperationInput<"GetTeamRoutingSettings">;
  "UpdateTeamRoutingSettings": KustomerFullApiOperationInput<"UpdateTeamRoutingSettings">;
  "GetCurrentsUserTeamRoutingSettings": KustomerFullApiOperationInput<"GetCurrentsUserTeamRoutingSettings">;
}

export interface KustomerFullApiTeamRoutingSettingsGeneratedClient {
  kustomerGetAllTeamRoutingSettings(...args: KustomerFullApiOperationArgs<"GetAllTeamRoutingSettings">): Promise<KustomerFullApiOperationResponseMap["GetAllTeamRoutingSettings"]>;
  kustomerGetTeamRoutingSettings(...args: KustomerFullApiOperationArgs<"GetTeamRoutingSettings">): Promise<KustomerFullApiOperationResponseMap["GetTeamRoutingSettings"]>;
  kustomerUpdateTeamRoutingSettings(...args: KustomerFullApiOperationArgs<"UpdateTeamRoutingSettings">): Promise<KustomerFullApiOperationResponseMap["UpdateTeamRoutingSettings"]>;
  kustomerGetCurrentsUserTeamRoutingSettings(...args: KustomerFullApiOperationArgs<"GetCurrentsUserTeamRoutingSettings">): Promise<KustomerFullApiOperationResponseMap["GetCurrentsUserTeamRoutingSettings"]>;
}

export const KustomerFullApiTeamRoutingSettingsGeneratedFunctionNames = [
  "kustomerGetAllTeamRoutingSettings",
  "kustomerGetTeamRoutingSettings",
  "kustomerUpdateTeamRoutingSettings",
  "kustomerGetCurrentsUserTeamRoutingSettings"
] as const satisfies readonly (keyof KustomerFullApiTeamRoutingSettingsGeneratedClient)[];

export function createKustomerFullApiTeamRoutingSettingsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiTeamRoutingSettingsGeneratedClient {
  return {
    kustomerGetAllTeamRoutingSettings: (...args) => callOperation("GetAllTeamRoutingSettings", ...(args as KustomerFullApiOperationArgs<"GetAllTeamRoutingSettings">)),
    kustomerGetTeamRoutingSettings: (...args) => callOperation("GetTeamRoutingSettings", ...(args as KustomerFullApiOperationArgs<"GetTeamRoutingSettings">)),
    kustomerUpdateTeamRoutingSettings: (...args) => callOperation("UpdateTeamRoutingSettings", ...(args as KustomerFullApiOperationArgs<"UpdateTeamRoutingSettings">)),
    kustomerGetCurrentsUserTeamRoutingSettings: (...args) => callOperation("GetCurrentsUserTeamRoutingSettings", ...(args as KustomerFullApiOperationArgs<"GetCurrentsUserTeamRoutingSettings">)),
  };
}
