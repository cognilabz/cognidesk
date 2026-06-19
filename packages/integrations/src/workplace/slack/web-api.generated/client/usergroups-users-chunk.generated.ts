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
export const SlackWebApiUsergroupsUsersOperationKeys = [
  "GET /usergroups.users.list",
  "POST /usergroups.users.update"
] as const;
export type SlackWebApiUsergroupsUsersOperationKey = typeof SlackWebApiUsergroupsUsersOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiUsergroupsUsersOperationPathParamMap {
  "GET /usergroups.users.list": {};
  "POST /usergroups.users.update": {};
}

export interface SlackWebApiUsergroupsUsersOperationRequestMap {
  "GET /usergroups.users.list": SlackWebApiOperationInput<"GET /usergroups.users.list">;
  "POST /usergroups.users.update": SlackWebApiOperationInput<"POST /usergroups.users.update">;
}

export interface SlackWebApiUsergroupsUsersGeneratedClient {
  UsergroupsUsersList(...args: SlackWebApiOperationArgs<"GET /usergroups.users.list">): Promise<SlackWebApiOperationResponseMap["GET /usergroups.users.list"]>;
  UsergroupsUsersUpdate(...args: SlackWebApiOperationArgs<"POST /usergroups.users.update">): Promise<SlackWebApiOperationResponseMap["POST /usergroups.users.update"]>;
}

export const SlackWebApiUsergroupsUsersGeneratedFunctionNames = [
  "UsergroupsUsersList",
  "UsergroupsUsersUpdate"
] as const satisfies readonly (keyof SlackWebApiUsergroupsUsersGeneratedClient)[];

export function createSlackWebApiUsergroupsUsersGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiUsergroupsUsersGeneratedClient {
  return {
    UsergroupsUsersList: (...args) => callOperation("GET /usergroups.users.list", ...(args as SlackWebApiOperationArgs<"GET /usergroups.users.list">)),
    UsergroupsUsersUpdate: (...args) => callOperation("POST /usergroups.users.update", ...(args as SlackWebApiOperationArgs<"POST /usergroups.users.update">)),
  };
}
