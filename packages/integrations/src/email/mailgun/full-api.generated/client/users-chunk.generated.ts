// Generated endpoint chunk for MailgunFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  MailgunGeneratedOperationCaller,
  MailgunFullApiOperationArgs,
  MailgunFullApiOperationInput,
  MailgunFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { MailgunFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const MailgunFullApiUsersOperationKeys = [
  "GET /v5/users",
  "GET /v5/users/{user_id}",
  "GET /v5/users/me"
] as const;
export type MailgunFullApiUsersOperationKey = typeof MailgunFullApiUsersOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiUsersOperationPathParamMap {
  "GET /v5/users": {};
  "GET /v5/users/{user_id}": { "user_id": MailgunFullApiPathParamValue };
  "GET /v5/users/me": {};
}

export interface MailgunFullApiUsersOperationRequestMap {
  "GET /v5/users": MailgunFullApiOperationInput<"GET /v5/users">;
  "GET /v5/users/{user_id}": MailgunFullApiOperationInput<"GET /v5/users/{user_id}">;
  "GET /v5/users/me": MailgunFullApiOperationInput<"GET /v5/users/me">;
}

export interface MailgunFullApiUsersGeneratedClient {
  GetUsersOnAnAccount(...args: MailgunFullApiOperationArgs<"GET /v5/users">): Promise<MailgunFullApiOperationResponseMap["GET /v5/users"]>;
  GetAUserSDetails(...args: MailgunFullApiOperationArgs<"GET /v5/users/{user_id}">): Promise<MailgunFullApiOperationResponseMap["GET /v5/users/{user_id}"]>;
  GetOneSOwnUserDetails(...args: MailgunFullApiOperationArgs<"GET /v5/users/me">): Promise<MailgunFullApiOperationResponseMap["GET /v5/users/me"]>;
}

export const MailgunFullApiUsersGeneratedFunctionNames = [
  "GetUsersOnAnAccount",
  "GetAUserSDetails",
  "GetOneSOwnUserDetails"
] as const satisfies readonly (keyof MailgunFullApiUsersGeneratedClient)[];

export function createMailgunFullApiUsersGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiUsersGeneratedClient {
  return {
    GetUsersOnAnAccount: (...args) => callOperation("GET /v5/users", ...(args as MailgunFullApiOperationArgs<"GET /v5/users">)),
    GetAUserSDetails: (...args) => callOperation("GET /v5/users/{user_id}", ...(args as MailgunFullApiOperationArgs<"GET /v5/users/{user_id}">)),
    GetOneSOwnUserDetails: (...args) => callOperation("GET /v5/users/me", ...(args as MailgunFullApiOperationArgs<"GET /v5/users/me">)),
  };
}
