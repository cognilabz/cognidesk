// Generated endpoint chunk for TeamsGraph.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TeamsGraphGeneratedOperationCaller,
  TeamsGraphOperationArgs,
  TeamsGraphOperationInput,
  TeamsGraphPathParamValue,
} from "../../graph-api-client.generated.js";
import type { TeamsGraphOperationResponseMap } from "../../graph-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TeamsGraphUsersPresenceOperationKeys = [
  "users.GetPresence",
  "users.UpdatePresence",
  "users.DeletePresence",
  "users.user.presence.clearAutomaticLocation",
  "users.user.presence.clearLocation",
  "users.user.presence.clearPresence",
  "users.user.presence.clearUserPreferredPresence",
  "users.user.presence.setAutomaticLocation",
  "users.user.presence.setManualLocation",
  "users.user.presence.setPresence",
  "users.user.presence.setStatusMessage",
  "users.user.presence.setUserPreferredPresence"
] as const;
export type TeamsGraphUsersPresenceOperationKey = typeof TeamsGraphUsersPresenceOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphUsersPresenceOperationPathParamMap {
  "users.GetPresence": { "user-id": TeamsGraphPathParamValue };
  "users.UpdatePresence": { "user-id": TeamsGraphPathParamValue };
  "users.DeletePresence": { "user-id": TeamsGraphPathParamValue };
  "users.user.presence.clearAutomaticLocation": { "user-id": TeamsGraphPathParamValue };
  "users.user.presence.clearLocation": { "user-id": TeamsGraphPathParamValue };
  "users.user.presence.clearPresence": { "user-id": TeamsGraphPathParamValue };
  "users.user.presence.clearUserPreferredPresence": { "user-id": TeamsGraphPathParamValue };
  "users.user.presence.setAutomaticLocation": { "user-id": TeamsGraphPathParamValue };
  "users.user.presence.setManualLocation": { "user-id": TeamsGraphPathParamValue };
  "users.user.presence.setPresence": { "user-id": TeamsGraphPathParamValue };
  "users.user.presence.setStatusMessage": { "user-id": TeamsGraphPathParamValue };
  "users.user.presence.setUserPreferredPresence": { "user-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphUsersPresenceOperationRequestMap {
  "users.GetPresence": TeamsGraphOperationInput<"users.GetPresence">;
  "users.UpdatePresence": TeamsGraphOperationInput<"users.UpdatePresence">;
  "users.DeletePresence": TeamsGraphOperationInput<"users.DeletePresence">;
  "users.user.presence.clearAutomaticLocation": TeamsGraphOperationInput<"users.user.presence.clearAutomaticLocation">;
  "users.user.presence.clearLocation": TeamsGraphOperationInput<"users.user.presence.clearLocation">;
  "users.user.presence.clearPresence": TeamsGraphOperationInput<"users.user.presence.clearPresence">;
  "users.user.presence.clearUserPreferredPresence": TeamsGraphOperationInput<"users.user.presence.clearUserPreferredPresence">;
  "users.user.presence.setAutomaticLocation": TeamsGraphOperationInput<"users.user.presence.setAutomaticLocation">;
  "users.user.presence.setManualLocation": TeamsGraphOperationInput<"users.user.presence.setManualLocation">;
  "users.user.presence.setPresence": TeamsGraphOperationInput<"users.user.presence.setPresence">;
  "users.user.presence.setStatusMessage": TeamsGraphOperationInput<"users.user.presence.setStatusMessage">;
  "users.user.presence.setUserPreferredPresence": TeamsGraphOperationInput<"users.user.presence.setUserPreferredPresence">;
}

export interface TeamsGraphUsersPresenceGeneratedClient {
  UsersGetPresence(...args: TeamsGraphOperationArgs<"users.GetPresence">): Promise<TeamsGraphOperationResponseMap["users.GetPresence"]>;
  UsersUpdatePresence(...args: TeamsGraphOperationArgs<"users.UpdatePresence">): Promise<TeamsGraphOperationResponseMap["users.UpdatePresence"]>;
  UsersDeletePresence(...args: TeamsGraphOperationArgs<"users.DeletePresence">): Promise<TeamsGraphOperationResponseMap["users.DeletePresence"]>;
  UsersUserPresenceClearAutomaticLocation(...args: TeamsGraphOperationArgs<"users.user.presence.clearAutomaticLocation">): Promise<TeamsGraphOperationResponseMap["users.user.presence.clearAutomaticLocation"]>;
  UsersUserPresenceClearLocation(...args: TeamsGraphOperationArgs<"users.user.presence.clearLocation">): Promise<TeamsGraphOperationResponseMap["users.user.presence.clearLocation"]>;
  UsersUserPresenceClearPresence(...args: TeamsGraphOperationArgs<"users.user.presence.clearPresence">): Promise<TeamsGraphOperationResponseMap["users.user.presence.clearPresence"]>;
  UsersUserPresenceClearUserPreferredPresence(...args: TeamsGraphOperationArgs<"users.user.presence.clearUserPreferredPresence">): Promise<TeamsGraphOperationResponseMap["users.user.presence.clearUserPreferredPresence"]>;
  UsersUserPresenceSetAutomaticLocation(...args: TeamsGraphOperationArgs<"users.user.presence.setAutomaticLocation">): Promise<TeamsGraphOperationResponseMap["users.user.presence.setAutomaticLocation"]>;
  UsersUserPresenceSetManualLocation(...args: TeamsGraphOperationArgs<"users.user.presence.setManualLocation">): Promise<TeamsGraphOperationResponseMap["users.user.presence.setManualLocation"]>;
  UsersUserPresenceSetPresence(...args: TeamsGraphOperationArgs<"users.user.presence.setPresence">): Promise<TeamsGraphOperationResponseMap["users.user.presence.setPresence"]>;
  UsersUserPresenceSetStatusMessage(...args: TeamsGraphOperationArgs<"users.user.presence.setStatusMessage">): Promise<TeamsGraphOperationResponseMap["users.user.presence.setStatusMessage"]>;
  UsersUserPresenceSetUserPreferredPresence(...args: TeamsGraphOperationArgs<"users.user.presence.setUserPreferredPresence">): Promise<TeamsGraphOperationResponseMap["users.user.presence.setUserPreferredPresence"]>;
}

export const TeamsGraphUsersPresenceGeneratedFunctionNames = [
  "UsersGetPresence",
  "UsersUpdatePresence",
  "UsersDeletePresence",
  "UsersUserPresenceClearAutomaticLocation",
  "UsersUserPresenceClearLocation",
  "UsersUserPresenceClearPresence",
  "UsersUserPresenceClearUserPreferredPresence",
  "UsersUserPresenceSetAutomaticLocation",
  "UsersUserPresenceSetManualLocation",
  "UsersUserPresenceSetPresence",
  "UsersUserPresenceSetStatusMessage",
  "UsersUserPresenceSetUserPreferredPresence"
] as const satisfies readonly (keyof TeamsGraphUsersPresenceGeneratedClient)[];

export function createTeamsGraphUsersPresenceGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphUsersPresenceGeneratedClient {
  return {
    UsersGetPresence: (...args) => callOperation("users.GetPresence", ...(args as TeamsGraphOperationArgs<"users.GetPresence">)),
    UsersUpdatePresence: (...args) => callOperation("users.UpdatePresence", ...(args as TeamsGraphOperationArgs<"users.UpdatePresence">)),
    UsersDeletePresence: (...args) => callOperation("users.DeletePresence", ...(args as TeamsGraphOperationArgs<"users.DeletePresence">)),
    UsersUserPresenceClearAutomaticLocation: (...args) => callOperation("users.user.presence.clearAutomaticLocation", ...(args as TeamsGraphOperationArgs<"users.user.presence.clearAutomaticLocation">)),
    UsersUserPresenceClearLocation: (...args) => callOperation("users.user.presence.clearLocation", ...(args as TeamsGraphOperationArgs<"users.user.presence.clearLocation">)),
    UsersUserPresenceClearPresence: (...args) => callOperation("users.user.presence.clearPresence", ...(args as TeamsGraphOperationArgs<"users.user.presence.clearPresence">)),
    UsersUserPresenceClearUserPreferredPresence: (...args) => callOperation("users.user.presence.clearUserPreferredPresence", ...(args as TeamsGraphOperationArgs<"users.user.presence.clearUserPreferredPresence">)),
    UsersUserPresenceSetAutomaticLocation: (...args) => callOperation("users.user.presence.setAutomaticLocation", ...(args as TeamsGraphOperationArgs<"users.user.presence.setAutomaticLocation">)),
    UsersUserPresenceSetManualLocation: (...args) => callOperation("users.user.presence.setManualLocation", ...(args as TeamsGraphOperationArgs<"users.user.presence.setManualLocation">)),
    UsersUserPresenceSetPresence: (...args) => callOperation("users.user.presence.setPresence", ...(args as TeamsGraphOperationArgs<"users.user.presence.setPresence">)),
    UsersUserPresenceSetStatusMessage: (...args) => callOperation("users.user.presence.setStatusMessage", ...(args as TeamsGraphOperationArgs<"users.user.presence.setStatusMessage">)),
    UsersUserPresenceSetUserPreferredPresence: (...args) => callOperation("users.user.presence.setUserPreferredPresence", ...(args as TeamsGraphOperationArgs<"users.user.presence.setUserPreferredPresence">)),
  };
}
