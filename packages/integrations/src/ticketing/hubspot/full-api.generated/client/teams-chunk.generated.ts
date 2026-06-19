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
export const HubSpotFullApiTeamsOperationKeys = [
  "settings:user-provisioning:2026-03:get-/settings/users/2026-03/teams_getAll"
] as const;
export type HubSpotFullApiTeamsOperationKey = typeof HubSpotFullApiTeamsOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiTeamsOperationPathParamMap {
  "settings:user-provisioning:2026-03:get-/settings/users/2026-03/teams_getAll": {};
}

export interface HubSpotFullApiTeamsOperationRequestMap {
  "settings:user-provisioning:2026-03:get-/settings/users/2026-03/teams_getAll": HubSpotFullApiOperationInput<"settings:user-provisioning:2026-03:get-/settings/users/2026-03/teams_getAll">;
}

export interface HubSpotFullApiTeamsGeneratedClient {
  UserProvisioningGetSettingsUsers202603TeamsGetAll(...args: HubSpotFullApiOperationArgs<"settings:user-provisioning:2026-03:get-/settings/users/2026-03/teams_getAll">): Promise<HubSpotFullApiOperationResponseMap["settings:user-provisioning:2026-03:get-/settings/users/2026-03/teams_getAll"]>;
}

export const HubSpotFullApiTeamsGeneratedFunctionNames = [
  "UserProvisioningGetSettingsUsers202603TeamsGetAll"
] as const satisfies readonly (keyof HubSpotFullApiTeamsGeneratedClient)[];

export function createHubSpotFullApiTeamsGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiTeamsGeneratedClient {
  return {
    UserProvisioningGetSettingsUsers202603TeamsGetAll: (...args) => callOperation("settings:user-provisioning:2026-03:get-/settings/users/2026-03/teams_getAll", ...(args as HubSpotFullApiOperationArgs<"settings:user-provisioning:2026-03:get-/settings/users/2026-03/teams_getAll">)),
  };
}
