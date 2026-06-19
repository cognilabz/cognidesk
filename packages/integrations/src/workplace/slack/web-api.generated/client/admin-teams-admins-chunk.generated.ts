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
export const SlackWebApiAdminTeamsAdminsOperationKeys = [
  "GET /admin.teams.admins.list"
] as const;
export type SlackWebApiAdminTeamsAdminsOperationKey = typeof SlackWebApiAdminTeamsAdminsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAdminTeamsAdminsOperationPathParamMap {
  "GET /admin.teams.admins.list": {};
}

export interface SlackWebApiAdminTeamsAdminsOperationRequestMap {
  "GET /admin.teams.admins.list": SlackWebApiOperationInput<"GET /admin.teams.admins.list">;
}

export interface SlackWebApiAdminTeamsAdminsGeneratedClient {
  AdminTeamsAdminsList(...args: SlackWebApiOperationArgs<"GET /admin.teams.admins.list">): Promise<SlackWebApiOperationResponseMap["GET /admin.teams.admins.list"]>;
}

export const SlackWebApiAdminTeamsAdminsGeneratedFunctionNames = [
  "AdminTeamsAdminsList"
] as const satisfies readonly (keyof SlackWebApiAdminTeamsAdminsGeneratedClient)[];

export function createSlackWebApiAdminTeamsAdminsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAdminTeamsAdminsGeneratedClient {
  return {
    AdminTeamsAdminsList: (...args) => callOperation("GET /admin.teams.admins.list", ...(args as SlackWebApiOperationArgs<"GET /admin.teams.admins.list">)),
  };
}
