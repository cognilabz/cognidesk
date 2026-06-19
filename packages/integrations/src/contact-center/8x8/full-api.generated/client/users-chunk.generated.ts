// Generated endpoint chunk for EightByEightContactCenterApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  EightByEightGeneratedOperationCaller,
  EightByEightContactCenterApiOperationArgs,
  EightByEightContactCenterApiOperationInput,
  EightByEightContactCenterApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { EightByEightContactCenterApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const EightByEightContactCenterApiUsersOperationKeys = [
  "qmsa:GET /users/count",
  "qmsa:GET /users",
  "qmsa:GET /users/{userReference}/supervisors",
  "qmsa:GET /users/{userReference}/trainers",
  "qmsa:GET /users/{userReference}/details"
] as const;
export type EightByEightContactCenterApiUsersOperationKey = typeof EightByEightContactCenterApiUsersOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiUsersOperationPathParamMap {
  "qmsa:GET /users/count": {};
  "qmsa:GET /users": {};
  "qmsa:GET /users/{userReference}/supervisors": { "userReference": EightByEightContactCenterApiPathParamValue };
  "qmsa:GET /users/{userReference}/trainers": { "userReference": EightByEightContactCenterApiPathParamValue };
  "qmsa:GET /users/{userReference}/details": { "userReference": EightByEightContactCenterApiPathParamValue };
}

export interface EightByEightContactCenterApiUsersOperationRequestMap {
  "qmsa:GET /users/count": EightByEightContactCenterApiOperationInput<"qmsa:GET /users/count">;
  "qmsa:GET /users": EightByEightContactCenterApiOperationInput<"qmsa:GET /users">;
  "qmsa:GET /users/{userReference}/supervisors": EightByEightContactCenterApiOperationInput<"qmsa:GET /users/{userReference}/supervisors">;
  "qmsa:GET /users/{userReference}/trainers": EightByEightContactCenterApiOperationInput<"qmsa:GET /users/{userReference}/trainers">;
  "qmsa:GET /users/{userReference}/details": EightByEightContactCenterApiOperationInput<"qmsa:GET /users/{userReference}/details">;
}

export interface EightByEightContactCenterApiUsersGeneratedClient {
  UsersCount(...args: EightByEightContactCenterApiOperationArgs<"qmsa:GET /users/count">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:GET /users/count"]>;
  Users(...args: EightByEightContactCenterApiOperationArgs<"qmsa:GET /users">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:GET /users"]>;
  Supervisors(...args: EightByEightContactCenterApiOperationArgs<"qmsa:GET /users/{userReference}/supervisors">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:GET /users/{userReference}/supervisors"]>;
  Trainers(...args: EightByEightContactCenterApiOperationArgs<"qmsa:GET /users/{userReference}/trainers">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:GET /users/{userReference}/trainers"]>;
  UserDetails(...args: EightByEightContactCenterApiOperationArgs<"qmsa:GET /users/{userReference}/details">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:GET /users/{userReference}/details"]>;
}

export const EightByEightContactCenterApiUsersGeneratedFunctionNames = [
  "UsersCount",
  "Users",
  "Supervisors",
  "Trainers",
  "UserDetails"
] as const satisfies readonly (keyof EightByEightContactCenterApiUsersGeneratedClient)[];

export function createEightByEightContactCenterApiUsersGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiUsersGeneratedClient {
  return {
    UsersCount: (...args) => callOperation("qmsa:GET /users/count", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:GET /users/count">)),
    Users: (...args) => callOperation("qmsa:GET /users", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:GET /users">)),
    Supervisors: (...args) => callOperation("qmsa:GET /users/{userReference}/supervisors", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:GET /users/{userReference}/supervisors">)),
    Trainers: (...args) => callOperation("qmsa:GET /users/{userReference}/trainers", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:GET /users/{userReference}/trainers">)),
    UserDetails: (...args) => callOperation("qmsa:GET /users/{userReference}/details", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:GET /users/{userReference}/details">)),
  };
}
