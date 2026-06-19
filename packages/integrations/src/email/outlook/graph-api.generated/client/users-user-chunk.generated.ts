// Generated endpoint chunk for OutlookGraph.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  OutlookGraphGeneratedOperationCaller,
  OutlookGraphOperationArgs,
  OutlookGraphOperationInput,
  OutlookGraphPathParamValue,
} from "../../graph-api-client.generated.js";
import type { OutlookGraphOperationResponseMap } from "../../graph-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const OutlookGraphUsersUserOperationKeys = [
  "users.user.GetUser",
  "users.user.UpdateUser",
  "users.user.DeleteUser"
] as const;
export type OutlookGraphUsersUserOperationKey = typeof OutlookGraphUsersUserOperationKeys[number];
// End hardened literal operation keys.

export interface OutlookGraphUsersUserOperationPathParamMap {
  "users.user.GetUser": { "user-id": OutlookGraphPathParamValue };
  "users.user.UpdateUser": { "user-id": OutlookGraphPathParamValue };
  "users.user.DeleteUser": { "user-id": OutlookGraphPathParamValue };
}

export interface OutlookGraphUsersUserOperationRequestMap {
  "users.user.GetUser": OutlookGraphOperationInput<"users.user.GetUser">;
  "users.user.UpdateUser": OutlookGraphOperationInput<"users.user.UpdateUser">;
  "users.user.DeleteUser": OutlookGraphOperationInput<"users.user.DeleteUser">;
}

export interface OutlookGraphUsersUserGeneratedClient {
  UsersUserGetUser(...args: OutlookGraphOperationArgs<"users.user.GetUser">): Promise<OutlookGraphOperationResponseMap["users.user.GetUser"]>;
  UsersUserUpdateUser(...args: OutlookGraphOperationArgs<"users.user.UpdateUser">): Promise<OutlookGraphOperationResponseMap["users.user.UpdateUser"]>;
  UsersUserDeleteUser(...args: OutlookGraphOperationArgs<"users.user.DeleteUser">): Promise<OutlookGraphOperationResponseMap["users.user.DeleteUser"]>;
}

export const OutlookGraphUsersUserGeneratedFunctionNames = [
  "UsersUserGetUser",
  "UsersUserUpdateUser",
  "UsersUserDeleteUser"
] as const satisfies readonly (keyof OutlookGraphUsersUserGeneratedClient)[];

export function createOutlookGraphUsersUserGeneratedClient(
  callOperation: OutlookGraphGeneratedOperationCaller,
): OutlookGraphUsersUserGeneratedClient {
  return {
    UsersUserGetUser: (...args) => callOperation("users.user.GetUser", ...(args as OutlookGraphOperationArgs<"users.user.GetUser">)),
    UsersUserUpdateUser: (...args) => callOperation("users.user.UpdateUser", ...(args as OutlookGraphOperationArgs<"users.user.UpdateUser">)),
    UsersUserDeleteUser: (...args) => callOperation("users.user.DeleteUser", ...(args as OutlookGraphOperationArgs<"users.user.DeleteUser">)),
  };
}
