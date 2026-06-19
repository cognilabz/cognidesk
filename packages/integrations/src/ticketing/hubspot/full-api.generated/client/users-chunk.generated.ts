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
export const HubSpotFullApiUsersOperationKeys = [
  "settings:user-provisioning:2026-03:get-/settings/users/2026-03/{userId}_getById",
  "settings:user-provisioning:2026-03:put-/settings/users/2026-03/{userId}_update",
  "settings:user-provisioning:2026-03:delete-/settings/users/2026-03/{userId}_archive"
] as const;
export type HubSpotFullApiUsersOperationKey = typeof HubSpotFullApiUsersOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiUsersOperationPathParamMap {
  "settings:user-provisioning:2026-03:get-/settings/users/2026-03/{userId}_getById": { "userId": HubSpotFullApiPathParamValue };
  "settings:user-provisioning:2026-03:put-/settings/users/2026-03/{userId}_update": { "userId": HubSpotFullApiPathParamValue };
  "settings:user-provisioning:2026-03:delete-/settings/users/2026-03/{userId}_archive": { "userId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiUsersOperationRequestMap {
  "settings:user-provisioning:2026-03:get-/settings/users/2026-03/{userId}_getById": HubSpotFullApiOperationInput<"settings:user-provisioning:2026-03:get-/settings/users/2026-03/{userId}_getById">;
  "settings:user-provisioning:2026-03:put-/settings/users/2026-03/{userId}_update": HubSpotFullApiOperationInput<"settings:user-provisioning:2026-03:put-/settings/users/2026-03/{userId}_update">;
  "settings:user-provisioning:2026-03:delete-/settings/users/2026-03/{userId}_archive": HubSpotFullApiOperationInput<"settings:user-provisioning:2026-03:delete-/settings/users/2026-03/{userId}_archive">;
}

export interface HubSpotFullApiUsersGeneratedClient {
  UserProvisioningGetSettingsUsers202603UserIdGetById(...args: HubSpotFullApiOperationArgs<"settings:user-provisioning:2026-03:get-/settings/users/2026-03/{userId}_getById">): Promise<HubSpotFullApiOperationResponseMap["settings:user-provisioning:2026-03:get-/settings/users/2026-03/{userId}_getById"]>;
  UserProvisioningPutSettingsUsers202603UserIdUpdate(...args: HubSpotFullApiOperationArgs<"settings:user-provisioning:2026-03:put-/settings/users/2026-03/{userId}_update">): Promise<HubSpotFullApiOperationResponseMap["settings:user-provisioning:2026-03:put-/settings/users/2026-03/{userId}_update"]>;
  UserProvisioningDeleteSettingsUsers202603UserIdArchive(...args: HubSpotFullApiOperationArgs<"settings:user-provisioning:2026-03:delete-/settings/users/2026-03/{userId}_archive">): Promise<HubSpotFullApiOperationResponseMap["settings:user-provisioning:2026-03:delete-/settings/users/2026-03/{userId}_archive"]>;
}

export const HubSpotFullApiUsersGeneratedFunctionNames = [
  "UserProvisioningGetSettingsUsers202603UserIdGetById",
  "UserProvisioningPutSettingsUsers202603UserIdUpdate",
  "UserProvisioningDeleteSettingsUsers202603UserIdArchive"
] as const satisfies readonly (keyof HubSpotFullApiUsersGeneratedClient)[];

export function createHubSpotFullApiUsersGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiUsersGeneratedClient {
  return {
    UserProvisioningGetSettingsUsers202603UserIdGetById: (...args) => callOperation("settings:user-provisioning:2026-03:get-/settings/users/2026-03/{userId}_getById", ...(args as HubSpotFullApiOperationArgs<"settings:user-provisioning:2026-03:get-/settings/users/2026-03/{userId}_getById">)),
    UserProvisioningPutSettingsUsers202603UserIdUpdate: (...args) => callOperation("settings:user-provisioning:2026-03:put-/settings/users/2026-03/{userId}_update", ...(args as HubSpotFullApiOperationArgs<"settings:user-provisioning:2026-03:put-/settings/users/2026-03/{userId}_update">)),
    UserProvisioningDeleteSettingsUsers202603UserIdArchive: (...args) => callOperation("settings:user-provisioning:2026-03:delete-/settings/users/2026-03/{userId}_archive", ...(args as HubSpotFullApiOperationArgs<"settings:user-provisioning:2026-03:delete-/settings/users/2026-03/{userId}_archive">)),
  };
}
