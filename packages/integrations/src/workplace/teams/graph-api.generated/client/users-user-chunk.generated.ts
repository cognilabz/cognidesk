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
export const TeamsGraphUsersUserOperationKeys = [
  "users.user.GetUser",
  "users.user.UpdateUser",
  "users.user.DeleteUser"
] as const;
export type TeamsGraphUsersUserOperationKey = typeof TeamsGraphUsersUserOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphUsersUserOperationPathParamMap {
  "users.user.GetUser": { "user-id": TeamsGraphPathParamValue };
  "users.user.UpdateUser": { "user-id": TeamsGraphPathParamValue };
  "users.user.DeleteUser": { "user-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphUsersUserOperationRequestMap {
  "users.user.GetUser": TeamsGraphOperationInput<"users.user.GetUser">;
  "users.user.UpdateUser": TeamsGraphOperationInput<"users.user.UpdateUser">;
  "users.user.DeleteUser": TeamsGraphOperationInput<"users.user.DeleteUser">;
}

export interface TeamsGraphUsersUserGeneratedClient {
  UsersUserGetUser(...args: TeamsGraphOperationArgs<"users.user.GetUser">): Promise<TeamsGraphOperationResponseMap["users.user.GetUser"]>;
  UsersUserUpdateUser(...args: TeamsGraphOperationArgs<"users.user.UpdateUser">): Promise<TeamsGraphOperationResponseMap["users.user.UpdateUser"]>;
  UsersUserDeleteUser(...args: TeamsGraphOperationArgs<"users.user.DeleteUser">): Promise<TeamsGraphOperationResponseMap["users.user.DeleteUser"]>;
}

export const TeamsGraphUsersUserGeneratedFunctionNames = [
  "UsersUserGetUser",
  "UsersUserUpdateUser",
  "UsersUserDeleteUser"
] as const satisfies readonly (keyof TeamsGraphUsersUserGeneratedClient)[];

export function createTeamsGraphUsersUserGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphUsersUserGeneratedClient {
  return {
    UsersUserGetUser: (...args) => callOperation("users.user.GetUser", ...(args as TeamsGraphOperationArgs<"users.user.GetUser">)),
    UsersUserUpdateUser: (...args) => callOperation("users.user.UpdateUser", ...(args as TeamsGraphOperationArgs<"users.user.UpdateUser">)),
    UsersUserDeleteUser: (...args) => callOperation("users.user.DeleteUser", ...(args as TeamsGraphOperationArgs<"users.user.DeleteUser">)),
  };
}
