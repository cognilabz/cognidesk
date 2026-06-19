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
export const SlackWebApiAdminInviteRequestsOperationKeys = [
  "POST /admin.inviteRequests.approve",
  "POST /admin.inviteRequests.deny",
  "GET /admin.inviteRequests.list"
] as const;
export type SlackWebApiAdminInviteRequestsOperationKey = typeof SlackWebApiAdminInviteRequestsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAdminInviteRequestsOperationPathParamMap {
  "POST /admin.inviteRequests.approve": {};
  "POST /admin.inviteRequests.deny": {};
  "GET /admin.inviteRequests.list": {};
}

export interface SlackWebApiAdminInviteRequestsOperationRequestMap {
  "POST /admin.inviteRequests.approve": SlackWebApiOperationInput<"POST /admin.inviteRequests.approve">;
  "POST /admin.inviteRequests.deny": SlackWebApiOperationInput<"POST /admin.inviteRequests.deny">;
  "GET /admin.inviteRequests.list": SlackWebApiOperationInput<"GET /admin.inviteRequests.list">;
}

export interface SlackWebApiAdminInviteRequestsGeneratedClient {
  AdminInviteRequestsApprove(...args: SlackWebApiOperationArgs<"POST /admin.inviteRequests.approve">): Promise<SlackWebApiOperationResponseMap["POST /admin.inviteRequests.approve"]>;
  AdminInviteRequestsDeny(...args: SlackWebApiOperationArgs<"POST /admin.inviteRequests.deny">): Promise<SlackWebApiOperationResponseMap["POST /admin.inviteRequests.deny"]>;
  AdminInviteRequestsList(...args: SlackWebApiOperationArgs<"GET /admin.inviteRequests.list">): Promise<SlackWebApiOperationResponseMap["GET /admin.inviteRequests.list"]>;
}

export const SlackWebApiAdminInviteRequestsGeneratedFunctionNames = [
  "AdminInviteRequestsApprove",
  "AdminInviteRequestsDeny",
  "AdminInviteRequestsList"
] as const satisfies readonly (keyof SlackWebApiAdminInviteRequestsGeneratedClient)[];

export function createSlackWebApiAdminInviteRequestsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAdminInviteRequestsGeneratedClient {
  return {
    AdminInviteRequestsApprove: (...args) => callOperation("POST /admin.inviteRequests.approve", ...(args as SlackWebApiOperationArgs<"POST /admin.inviteRequests.approve">)),
    AdminInviteRequestsDeny: (...args) => callOperation("POST /admin.inviteRequests.deny", ...(args as SlackWebApiOperationArgs<"POST /admin.inviteRequests.deny">)),
    AdminInviteRequestsList: (...args) => callOperation("GET /admin.inviteRequests.list", ...(args as SlackWebApiOperationArgs<"GET /admin.inviteRequests.list">)),
  };
}
