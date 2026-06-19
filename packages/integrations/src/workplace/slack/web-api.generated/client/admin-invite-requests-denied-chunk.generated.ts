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
export const SlackWebApiAdminInviteRequestsDeniedOperationKeys = [
  "GET /admin.inviteRequests.denied.list"
] as const;
export type SlackWebApiAdminInviteRequestsDeniedOperationKey = typeof SlackWebApiAdminInviteRequestsDeniedOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAdminInviteRequestsDeniedOperationPathParamMap {
  "GET /admin.inviteRequests.denied.list": {};
}

export interface SlackWebApiAdminInviteRequestsDeniedOperationRequestMap {
  "GET /admin.inviteRequests.denied.list": SlackWebApiOperationInput<"GET /admin.inviteRequests.denied.list">;
}

export interface SlackWebApiAdminInviteRequestsDeniedGeneratedClient {
  AdminInviteRequestsDeniedList(...args: SlackWebApiOperationArgs<"GET /admin.inviteRequests.denied.list">): Promise<SlackWebApiOperationResponseMap["GET /admin.inviteRequests.denied.list"]>;
}

export const SlackWebApiAdminInviteRequestsDeniedGeneratedFunctionNames = [
  "AdminInviteRequestsDeniedList"
] as const satisfies readonly (keyof SlackWebApiAdminInviteRequestsDeniedGeneratedClient)[];

export function createSlackWebApiAdminInviteRequestsDeniedGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAdminInviteRequestsDeniedGeneratedClient {
  return {
    AdminInviteRequestsDeniedList: (...args) => callOperation("GET /admin.inviteRequests.denied.list", ...(args as SlackWebApiOperationArgs<"GET /admin.inviteRequests.denied.list">)),
  };
}
