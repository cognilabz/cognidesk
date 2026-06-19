// Generated endpoint chunk for DiscordHttpApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  DiscordHttpApiGeneratedOperationCaller,
  DiscordHttpApiOperationArgs,
  DiscordHttpApiOperationInput,
  DiscordHttpApiPathParamValue,
} from "../../http-api-client.generated.js";
import type { DiscordHttpApiOperationResponseMap } from "../../http-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const DiscordHttpApiInvitesOperationKeys = [
  "GET /invites/{code}",
  "DELETE /invites/{code}",
  "GET /invites/{code}/target-users",
  "PUT /invites/{code}/target-users",
  "GET /invites/{code}/target-users/job-status"
] as const;
export type DiscordHttpApiInvitesOperationKey = typeof DiscordHttpApiInvitesOperationKeys[number];
// End hardened literal operation keys.

export interface DiscordHttpApiInvitesOperationPathParamMap {
  "GET /invites/{code}": { "code": DiscordHttpApiPathParamValue };
  "DELETE /invites/{code}": { "code": DiscordHttpApiPathParamValue };
  "GET /invites/{code}/target-users": { "code": DiscordHttpApiPathParamValue };
  "PUT /invites/{code}/target-users": { "code": DiscordHttpApiPathParamValue };
  "GET /invites/{code}/target-users/job-status": { "code": DiscordHttpApiPathParamValue };
}

export interface DiscordHttpApiInvitesOperationRequestMap {
  "GET /invites/{code}": DiscordHttpApiOperationInput<"GET /invites/{code}">;
  "DELETE /invites/{code}": DiscordHttpApiOperationInput<"DELETE /invites/{code}">;
  "GET /invites/{code}/target-users": DiscordHttpApiOperationInput<"GET /invites/{code}/target-users">;
  "PUT /invites/{code}/target-users": DiscordHttpApiOperationInput<"PUT /invites/{code}/target-users">;
  "GET /invites/{code}/target-users/job-status": DiscordHttpApiOperationInput<"GET /invites/{code}/target-users/job-status">;
}

export interface DiscordHttpApiInvitesGeneratedClient {
  InviteResolve(...args: DiscordHttpApiOperationArgs<"GET /invites/{code}">): Promise<DiscordHttpApiOperationResponseMap["GET /invites/{code}"]>;
  InviteRevoke(...args: DiscordHttpApiOperationArgs<"DELETE /invites/{code}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /invites/{code}"]>;
  GetInviteTargetUsers(...args: DiscordHttpApiOperationArgs<"GET /invites/{code}/target-users">): Promise<DiscordHttpApiOperationResponseMap["GET /invites/{code}/target-users"]>;
  UpdateInviteTargetUsers(...args: DiscordHttpApiOperationArgs<"PUT /invites/{code}/target-users">): Promise<DiscordHttpApiOperationResponseMap["PUT /invites/{code}/target-users"]>;
  GetInviteTargetUsersJobStatus(...args: DiscordHttpApiOperationArgs<"GET /invites/{code}/target-users/job-status">): Promise<DiscordHttpApiOperationResponseMap["GET /invites/{code}/target-users/job-status"]>;
}

export const DiscordHttpApiInvitesGeneratedFunctionNames = [
  "InviteResolve",
  "InviteRevoke",
  "GetInviteTargetUsers",
  "UpdateInviteTargetUsers",
  "GetInviteTargetUsersJobStatus"
] as const satisfies readonly (keyof DiscordHttpApiInvitesGeneratedClient)[];

export function createDiscordHttpApiInvitesGeneratedClient(
  callOperation: DiscordHttpApiGeneratedOperationCaller,
): DiscordHttpApiInvitesGeneratedClient {
  return {
    InviteResolve: (...args) => callOperation("GET /invites/{code}", ...(args as DiscordHttpApiOperationArgs<"GET /invites/{code}">)),
    InviteRevoke: (...args) => callOperation("DELETE /invites/{code}", ...(args as DiscordHttpApiOperationArgs<"DELETE /invites/{code}">)),
    GetInviteTargetUsers: (...args) => callOperation("GET /invites/{code}/target-users", ...(args as DiscordHttpApiOperationArgs<"GET /invites/{code}/target-users">)),
    UpdateInviteTargetUsers: (...args) => callOperation("PUT /invites/{code}/target-users", ...(args as DiscordHttpApiOperationArgs<"PUT /invites/{code}/target-users">)),
    GetInviteTargetUsersJobStatus: (...args) => callOperation("GET /invites/{code}/target-users/job-status", ...(args as DiscordHttpApiOperationArgs<"GET /invites/{code}/target-users/job-status">)),
  };
}
