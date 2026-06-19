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
export const SlackWebApiAdminInviteRequestsApprovedOperationKeys = [
  "GET /admin.inviteRequests.approved.list"
] as const;
export type SlackWebApiAdminInviteRequestsApprovedOperationKey = typeof SlackWebApiAdminInviteRequestsApprovedOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAdminInviteRequestsApprovedOperationPathParamMap {
  "GET /admin.inviteRequests.approved.list": {};
}

export interface SlackWebApiAdminInviteRequestsApprovedOperationRequestMap {
  "GET /admin.inviteRequests.approved.list": SlackWebApiOperationInput<"GET /admin.inviteRequests.approved.list">;
}

export interface SlackWebApiAdminInviteRequestsApprovedGeneratedClient {
  AdminInviteRequestsApprovedList(...args: SlackWebApiOperationArgs<"GET /admin.inviteRequests.approved.list">): Promise<SlackWebApiOperationResponseMap["GET /admin.inviteRequests.approved.list"]>;
}

export const SlackWebApiAdminInviteRequestsApprovedGeneratedFunctionNames = [
  "AdminInviteRequestsApprovedList"
] as const satisfies readonly (keyof SlackWebApiAdminInviteRequestsApprovedGeneratedClient)[];

export function createSlackWebApiAdminInviteRequestsApprovedGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAdminInviteRequestsApprovedGeneratedClient {
  return {
    AdminInviteRequestsApprovedList: (...args) => callOperation("GET /admin.inviteRequests.approved.list", ...(args as SlackWebApiOperationArgs<"GET /admin.inviteRequests.approved.list">)),
  };
}
