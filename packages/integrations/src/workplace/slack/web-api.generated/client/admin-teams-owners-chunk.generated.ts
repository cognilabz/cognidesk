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
export const SlackWebApiAdminTeamsOwnersOperationKeys = [
  "GET /admin.teams.owners.list"
] as const;
export type SlackWebApiAdminTeamsOwnersOperationKey = typeof SlackWebApiAdminTeamsOwnersOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAdminTeamsOwnersOperationPathParamMap {
  "GET /admin.teams.owners.list": {};
}

export interface SlackWebApiAdminTeamsOwnersOperationRequestMap {
  "GET /admin.teams.owners.list": SlackWebApiOperationInput<"GET /admin.teams.owners.list">;
}

export interface SlackWebApiAdminTeamsOwnersGeneratedClient {
  AdminTeamsOwnersList(...args: SlackWebApiOperationArgs<"GET /admin.teams.owners.list">): Promise<SlackWebApiOperationResponseMap["GET /admin.teams.owners.list"]>;
}

export const SlackWebApiAdminTeamsOwnersGeneratedFunctionNames = [
  "AdminTeamsOwnersList"
] as const satisfies readonly (keyof SlackWebApiAdminTeamsOwnersGeneratedClient)[];

export function createSlackWebApiAdminTeamsOwnersGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAdminTeamsOwnersGeneratedClient {
  return {
    AdminTeamsOwnersList: (...args) => callOperation("GET /admin.teams.owners.list", ...(args as SlackWebApiOperationArgs<"GET /admin.teams.owners.list">)),
  };
}
