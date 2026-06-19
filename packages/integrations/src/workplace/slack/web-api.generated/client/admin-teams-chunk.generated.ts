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
export const SlackWebApiAdminTeamsOperationKeys = [
  "POST /admin.teams.create",
  "GET /admin.teams.list"
] as const;
export type SlackWebApiAdminTeamsOperationKey = typeof SlackWebApiAdminTeamsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAdminTeamsOperationPathParamMap {
  "POST /admin.teams.create": {};
  "GET /admin.teams.list": {};
}

export interface SlackWebApiAdminTeamsOperationRequestMap {
  "POST /admin.teams.create": SlackWebApiOperationInput<"POST /admin.teams.create">;
  "GET /admin.teams.list": SlackWebApiOperationInput<"GET /admin.teams.list">;
}

export interface SlackWebApiAdminTeamsGeneratedClient {
  AdminTeamsCreate(...args: SlackWebApiOperationArgs<"POST /admin.teams.create">): Promise<SlackWebApiOperationResponseMap["POST /admin.teams.create"]>;
  AdminTeamsList(...args: SlackWebApiOperationArgs<"GET /admin.teams.list">): Promise<SlackWebApiOperationResponseMap["GET /admin.teams.list"]>;
}

export const SlackWebApiAdminTeamsGeneratedFunctionNames = [
  "AdminTeamsCreate",
  "AdminTeamsList"
] as const satisfies readonly (keyof SlackWebApiAdminTeamsGeneratedClient)[];

export function createSlackWebApiAdminTeamsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAdminTeamsGeneratedClient {
  return {
    AdminTeamsCreate: (...args) => callOperation("POST /admin.teams.create", ...(args as SlackWebApiOperationArgs<"POST /admin.teams.create">)),
    AdminTeamsList: (...args) => callOperation("GET /admin.teams.list", ...(args as SlackWebApiOperationArgs<"GET /admin.teams.list">)),
  };
}
