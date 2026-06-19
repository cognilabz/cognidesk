// Generated endpoint chunk for HubSpotFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  HubSpotGeneratedOperationCaller,
  HubSpotFullApiOperationArgs,
  HubSpotFullApiOperationInput,
  HubSpotFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { HubSpotFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const HubSpotFullApiRolesOperationKeys = [
  "settings:user-provisioning:2026-03:get-/settings/users/2026-03/roles_getAll"
] as const;
export type HubSpotFullApiRolesOperationKey = typeof HubSpotFullApiRolesOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiRolesOperationPathParamMap {
  "settings:user-provisioning:2026-03:get-/settings/users/2026-03/roles_getAll": {};
}

export interface HubSpotFullApiRolesOperationRequestMap {
  "settings:user-provisioning:2026-03:get-/settings/users/2026-03/roles_getAll": HubSpotFullApiOperationInput<"settings:user-provisioning:2026-03:get-/settings/users/2026-03/roles_getAll">;
}

export interface HubSpotFullApiRolesGeneratedClient {
  UserProvisioningGetSettingsUsers202603RolesGetAll(...args: HubSpotFullApiOperationArgs<"settings:user-provisioning:2026-03:get-/settings/users/2026-03/roles_getAll">): Promise<HubSpotFullApiOperationResponseMap["settings:user-provisioning:2026-03:get-/settings/users/2026-03/roles_getAll"]>;
}

export const HubSpotFullApiRolesGeneratedFunctionNames = [
  "UserProvisioningGetSettingsUsers202603RolesGetAll"
] as const satisfies readonly (keyof HubSpotFullApiRolesGeneratedClient)[];

export function createHubSpotFullApiRolesGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiRolesGeneratedClient {
  return {
    UserProvisioningGetSettingsUsers202603RolesGetAll: (...args) => callOperation("settings:user-provisioning:2026-03:get-/settings/users/2026-03/roles_getAll", ...(args as HubSpotFullApiOperationArgs<"settings:user-provisioning:2026-03:get-/settings/users/2026-03/roles_getAll">)),
  };
}
