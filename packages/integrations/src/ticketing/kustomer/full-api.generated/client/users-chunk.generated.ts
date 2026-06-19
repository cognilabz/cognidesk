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
export const KustomerFullApiUsersOperationKeys = [
  "GetUsers",
  "CreateInviteNewUser",
  "GetCurrentUser",
  "UpdateCurrentUser",
  "ResetUsersPassword"
] as const;
export type KustomerFullApiUsersOperationKey = typeof KustomerFullApiUsersOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiUsersOperationPathParamMap {
  "GetUsers": {};
  "CreateInviteNewUser": {};
  "GetCurrentUser": {};
  "UpdateCurrentUser": {};
  "ResetUsersPassword": {};
}

export interface KustomerFullApiUsersOperationRequestMap {
  "GetUsers": KustomerFullApiOperationInput<"GetUsers">;
  "CreateInviteNewUser": KustomerFullApiOperationInput<"CreateInviteNewUser">;
  "GetCurrentUser": KustomerFullApiOperationInput<"GetCurrentUser">;
  "UpdateCurrentUser": KustomerFullApiOperationInput<"UpdateCurrentUser">;
  "ResetUsersPassword": KustomerFullApiOperationInput<"ResetUsersPassword">;
}

export interface KustomerFullApiUsersGeneratedClient {
  kustomerGetUsers(...args: KustomerFullApiOperationArgs<"GetUsers">): Promise<KustomerFullApiOperationResponseMap["GetUsers"]>;
  kustomerCreateInviteNewUser(...args: KustomerFullApiOperationArgs<"CreateInviteNewUser">): Promise<KustomerFullApiOperationResponseMap["CreateInviteNewUser"]>;
  kustomerGetCurrentUser(...args: KustomerFullApiOperationArgs<"GetCurrentUser">): Promise<KustomerFullApiOperationResponseMap["GetCurrentUser"]>;
  kustomerUpdateCurrentUser(...args: KustomerFullApiOperationArgs<"UpdateCurrentUser">): Promise<KustomerFullApiOperationResponseMap["UpdateCurrentUser"]>;
  kustomerResetUsersPassword(...args: KustomerFullApiOperationArgs<"ResetUsersPassword">): Promise<KustomerFullApiOperationResponseMap["ResetUsersPassword"]>;
}

export const KustomerFullApiUsersGeneratedFunctionNames = [
  "kustomerGetUsers",
  "kustomerCreateInviteNewUser",
  "kustomerGetCurrentUser",
  "kustomerUpdateCurrentUser",
  "kustomerResetUsersPassword"
] as const satisfies readonly (keyof KustomerFullApiUsersGeneratedClient)[];

export function createKustomerFullApiUsersGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiUsersGeneratedClient {
  return {
    kustomerGetUsers: (...args) => callOperation("GetUsers", ...(args as KustomerFullApiOperationArgs<"GetUsers">)),
    kustomerCreateInviteNewUser: (...args) => callOperation("CreateInviteNewUser", ...(args as KustomerFullApiOperationArgs<"CreateInviteNewUser">)),
    kustomerGetCurrentUser: (...args) => callOperation("GetCurrentUser", ...(args as KustomerFullApiOperationArgs<"GetCurrentUser">)),
    kustomerUpdateCurrentUser: (...args) => callOperation("UpdateCurrentUser", ...(args as KustomerFullApiOperationArgs<"UpdateCurrentUser">)),
    kustomerResetUsersPassword: (...args) => callOperation("ResetUsersPassword", ...(args as KustomerFullApiOperationArgs<"ResetUsersPassword">)),
  };
}
