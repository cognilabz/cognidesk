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
export const SlackWebApiAdminUsergroupsOperationKeys = [
  "POST /admin.usergroups.addChannels",
  "POST /admin.usergroups.addTeams",
  "GET /admin.usergroups.listChannels",
  "POST /admin.usergroups.removeChannels"
] as const;
export type SlackWebApiAdminUsergroupsOperationKey = typeof SlackWebApiAdminUsergroupsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAdminUsergroupsOperationPathParamMap {
  "POST /admin.usergroups.addChannels": {};
  "POST /admin.usergroups.addTeams": {};
  "GET /admin.usergroups.listChannels": {};
  "POST /admin.usergroups.removeChannels": {};
}

export interface SlackWebApiAdminUsergroupsOperationRequestMap {
  "POST /admin.usergroups.addChannels": SlackWebApiOperationInput<"POST /admin.usergroups.addChannels">;
  "POST /admin.usergroups.addTeams": SlackWebApiOperationInput<"POST /admin.usergroups.addTeams">;
  "GET /admin.usergroups.listChannels": SlackWebApiOperationInput<"GET /admin.usergroups.listChannels">;
  "POST /admin.usergroups.removeChannels": SlackWebApiOperationInput<"POST /admin.usergroups.removeChannels">;
}

export interface SlackWebApiAdminUsergroupsGeneratedClient {
  AdminUsergroupsAddChannels(...args: SlackWebApiOperationArgs<"POST /admin.usergroups.addChannels">): Promise<SlackWebApiOperationResponseMap["POST /admin.usergroups.addChannels"]>;
  AdminUsergroupsAddTeams(...args: SlackWebApiOperationArgs<"POST /admin.usergroups.addTeams">): Promise<SlackWebApiOperationResponseMap["POST /admin.usergroups.addTeams"]>;
  AdminUsergroupsListChannels(...args: SlackWebApiOperationArgs<"GET /admin.usergroups.listChannels">): Promise<SlackWebApiOperationResponseMap["GET /admin.usergroups.listChannels"]>;
  AdminUsergroupsRemoveChannels(...args: SlackWebApiOperationArgs<"POST /admin.usergroups.removeChannels">): Promise<SlackWebApiOperationResponseMap["POST /admin.usergroups.removeChannels"]>;
}

export const SlackWebApiAdminUsergroupsGeneratedFunctionNames = [
  "AdminUsergroupsAddChannels",
  "AdminUsergroupsAddTeams",
  "AdminUsergroupsListChannels",
  "AdminUsergroupsRemoveChannels"
] as const satisfies readonly (keyof SlackWebApiAdminUsergroupsGeneratedClient)[];

export function createSlackWebApiAdminUsergroupsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAdminUsergroupsGeneratedClient {
  return {
    AdminUsergroupsAddChannels: (...args) => callOperation("POST /admin.usergroups.addChannels", ...(args as SlackWebApiOperationArgs<"POST /admin.usergroups.addChannels">)),
    AdminUsergroupsAddTeams: (...args) => callOperation("POST /admin.usergroups.addTeams", ...(args as SlackWebApiOperationArgs<"POST /admin.usergroups.addTeams">)),
    AdminUsergroupsListChannels: (...args) => callOperation("GET /admin.usergroups.listChannels", ...(args as SlackWebApiOperationArgs<"GET /admin.usergroups.listChannels">)),
    AdminUsergroupsRemoveChannels: (...args) => callOperation("POST /admin.usergroups.removeChannels", ...(args as SlackWebApiOperationArgs<"POST /admin.usergroups.removeChannels">)),
  };
}
