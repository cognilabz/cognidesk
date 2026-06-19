// Generated endpoint chunk for SlackWebApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  SlackWebApiGeneratedOperationCaller,
  SlackWebApiOperationArgs,
  SlackWebApiOperationInput,
  SlackWebApiPathParamValue,
} from "../../web-api-client.generated.js";
import type { SlackWebApiOperationResponseMap } from "../../web-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const SlackWebApiAdminUsersOperationKeys = [
  "POST /admin.users.assign",
  "POST /admin.users.invite",
  "GET /admin.users.list",
  "POST /admin.users.remove",
  "POST /admin.users.setAdmin",
  "POST /admin.users.setExpiration",
  "POST /admin.users.setOwner",
  "POST /admin.users.setRegular"
] as const;
export type SlackWebApiAdminUsersOperationKey = typeof SlackWebApiAdminUsersOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAdminUsersOperationPathParamMap {
  "POST /admin.users.assign": {};
  "POST /admin.users.invite": {};
  "GET /admin.users.list": {};
  "POST /admin.users.remove": {};
  "POST /admin.users.setAdmin": {};
  "POST /admin.users.setExpiration": {};
  "POST /admin.users.setOwner": {};
  "POST /admin.users.setRegular": {};
}

export interface SlackWebApiAdminUsersOperationRequestMap {
  "POST /admin.users.assign": SlackWebApiOperationInput<"POST /admin.users.assign">;
  "POST /admin.users.invite": SlackWebApiOperationInput<"POST /admin.users.invite">;
  "GET /admin.users.list": SlackWebApiOperationInput<"GET /admin.users.list">;
  "POST /admin.users.remove": SlackWebApiOperationInput<"POST /admin.users.remove">;
  "POST /admin.users.setAdmin": SlackWebApiOperationInput<"POST /admin.users.setAdmin">;
  "POST /admin.users.setExpiration": SlackWebApiOperationInput<"POST /admin.users.setExpiration">;
  "POST /admin.users.setOwner": SlackWebApiOperationInput<"POST /admin.users.setOwner">;
  "POST /admin.users.setRegular": SlackWebApiOperationInput<"POST /admin.users.setRegular">;
}

export interface SlackWebApiAdminUsersGeneratedClient {
  AdminUsersAssign(...args: SlackWebApiOperationArgs<"POST /admin.users.assign">): Promise<SlackWebApiOperationResponseMap["POST /admin.users.assign"]>;
  AdminUsersInvite(...args: SlackWebApiOperationArgs<"POST /admin.users.invite">): Promise<SlackWebApiOperationResponseMap["POST /admin.users.invite"]>;
  AdminUsersList(...args: SlackWebApiOperationArgs<"GET /admin.users.list">): Promise<SlackWebApiOperationResponseMap["GET /admin.users.list"]>;
  AdminUsersRemove(...args: SlackWebApiOperationArgs<"POST /admin.users.remove">): Promise<SlackWebApiOperationResponseMap["POST /admin.users.remove"]>;
  AdminUsersSetAdmin(...args: SlackWebApiOperationArgs<"POST /admin.users.setAdmin">): Promise<SlackWebApiOperationResponseMap["POST /admin.users.setAdmin"]>;
  AdminUsersSetExpiration(...args: SlackWebApiOperationArgs<"POST /admin.users.setExpiration">): Promise<SlackWebApiOperationResponseMap["POST /admin.users.setExpiration"]>;
  AdminUsersSetOwner(...args: SlackWebApiOperationArgs<"POST /admin.users.setOwner">): Promise<SlackWebApiOperationResponseMap["POST /admin.users.setOwner"]>;
  AdminUsersSetRegular(...args: SlackWebApiOperationArgs<"POST /admin.users.setRegular">): Promise<SlackWebApiOperationResponseMap["POST /admin.users.setRegular"]>;
}

export const SlackWebApiAdminUsersGeneratedFunctionNames = [
  "AdminUsersAssign",
  "AdminUsersInvite",
  "AdminUsersList",
  "AdminUsersRemove",
  "AdminUsersSetAdmin",
  "AdminUsersSetExpiration",
  "AdminUsersSetOwner",
  "AdminUsersSetRegular"
] as const satisfies readonly (keyof SlackWebApiAdminUsersGeneratedClient)[];

export function createSlackWebApiAdminUsersGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAdminUsersGeneratedClient {
  return {
    AdminUsersAssign: (...args) => callOperation("POST /admin.users.assign", ...(args as SlackWebApiOperationArgs<"POST /admin.users.assign">)),
    AdminUsersInvite: (...args) => callOperation("POST /admin.users.invite", ...(args as SlackWebApiOperationArgs<"POST /admin.users.invite">)),
    AdminUsersList: (...args) => callOperation("GET /admin.users.list", ...(args as SlackWebApiOperationArgs<"GET /admin.users.list">)),
    AdminUsersRemove: (...args) => callOperation("POST /admin.users.remove", ...(args as SlackWebApiOperationArgs<"POST /admin.users.remove">)),
    AdminUsersSetAdmin: (...args) => callOperation("POST /admin.users.setAdmin", ...(args as SlackWebApiOperationArgs<"POST /admin.users.setAdmin">)),
    AdminUsersSetExpiration: (...args) => callOperation("POST /admin.users.setExpiration", ...(args as SlackWebApiOperationArgs<"POST /admin.users.setExpiration">)),
    AdminUsersSetOwner: (...args) => callOperation("POST /admin.users.setOwner", ...(args as SlackWebApiOperationArgs<"POST /admin.users.setOwner">)),
    AdminUsersSetRegular: (...args) => callOperation("POST /admin.users.setRegular", ...(args as SlackWebApiOperationArgs<"POST /admin.users.setRegular">)),
  };
}
