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
export const SlackWebApiAdminUsersSessionOperationKeys = [
  "POST /admin.users.session.invalidate",
  "POST /admin.users.session.reset"
] as const;
export type SlackWebApiAdminUsersSessionOperationKey = typeof SlackWebApiAdminUsersSessionOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAdminUsersSessionOperationPathParamMap {
  "POST /admin.users.session.invalidate": {};
  "POST /admin.users.session.reset": {};
}

export interface SlackWebApiAdminUsersSessionOperationRequestMap {
  "POST /admin.users.session.invalidate": SlackWebApiOperationInput<"POST /admin.users.session.invalidate">;
  "POST /admin.users.session.reset": SlackWebApiOperationInput<"POST /admin.users.session.reset">;
}

export interface SlackWebApiAdminUsersSessionGeneratedClient {
  AdminUsersSessionInvalidate(...args: SlackWebApiOperationArgs<"POST /admin.users.session.invalidate">): Promise<SlackWebApiOperationResponseMap["POST /admin.users.session.invalidate"]>;
  AdminUsersSessionReset(...args: SlackWebApiOperationArgs<"POST /admin.users.session.reset">): Promise<SlackWebApiOperationResponseMap["POST /admin.users.session.reset"]>;
}

export const SlackWebApiAdminUsersSessionGeneratedFunctionNames = [
  "AdminUsersSessionInvalidate",
  "AdminUsersSessionReset"
] as const satisfies readonly (keyof SlackWebApiAdminUsersSessionGeneratedClient)[];

export function createSlackWebApiAdminUsersSessionGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAdminUsersSessionGeneratedClient {
  return {
    AdminUsersSessionInvalidate: (...args) => callOperation("POST /admin.users.session.invalidate", ...(args as SlackWebApiOperationArgs<"POST /admin.users.session.invalidate">)),
    AdminUsersSessionReset: (...args) => callOperation("POST /admin.users.session.reset", ...(args as SlackWebApiOperationArgs<"POST /admin.users.session.reset">)),
  };
}
