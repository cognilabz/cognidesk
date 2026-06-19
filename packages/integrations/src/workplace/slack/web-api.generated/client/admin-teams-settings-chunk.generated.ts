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
export const SlackWebApiAdminTeamsSettingsOperationKeys = [
  "GET /admin.teams.settings.info",
  "POST /admin.teams.settings.setDefaultChannels",
  "POST /admin.teams.settings.setDescription",
  "POST /admin.teams.settings.setDiscoverability",
  "POST /admin.teams.settings.setIcon",
  "POST /admin.teams.settings.setName"
] as const;
export type SlackWebApiAdminTeamsSettingsOperationKey = typeof SlackWebApiAdminTeamsSettingsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAdminTeamsSettingsOperationPathParamMap {
  "GET /admin.teams.settings.info": {};
  "POST /admin.teams.settings.setDefaultChannels": {};
  "POST /admin.teams.settings.setDescription": {};
  "POST /admin.teams.settings.setDiscoverability": {};
  "POST /admin.teams.settings.setIcon": {};
  "POST /admin.teams.settings.setName": {};
}

export interface SlackWebApiAdminTeamsSettingsOperationRequestMap {
  "GET /admin.teams.settings.info": SlackWebApiOperationInput<"GET /admin.teams.settings.info">;
  "POST /admin.teams.settings.setDefaultChannels": SlackWebApiOperationInput<"POST /admin.teams.settings.setDefaultChannels">;
  "POST /admin.teams.settings.setDescription": SlackWebApiOperationInput<"POST /admin.teams.settings.setDescription">;
  "POST /admin.teams.settings.setDiscoverability": SlackWebApiOperationInput<"POST /admin.teams.settings.setDiscoverability">;
  "POST /admin.teams.settings.setIcon": SlackWebApiOperationInput<"POST /admin.teams.settings.setIcon">;
  "POST /admin.teams.settings.setName": SlackWebApiOperationInput<"POST /admin.teams.settings.setName">;
}

export interface SlackWebApiAdminTeamsSettingsGeneratedClient {
  AdminTeamsSettingsInfo(...args: SlackWebApiOperationArgs<"GET /admin.teams.settings.info">): Promise<SlackWebApiOperationResponseMap["GET /admin.teams.settings.info"]>;
  AdminTeamsSettingsSetDefaultChannels(...args: SlackWebApiOperationArgs<"POST /admin.teams.settings.setDefaultChannels">): Promise<SlackWebApiOperationResponseMap["POST /admin.teams.settings.setDefaultChannels"]>;
  AdminTeamsSettingsSetDescription(...args: SlackWebApiOperationArgs<"POST /admin.teams.settings.setDescription">): Promise<SlackWebApiOperationResponseMap["POST /admin.teams.settings.setDescription"]>;
  AdminTeamsSettingsSetDiscoverability(...args: SlackWebApiOperationArgs<"POST /admin.teams.settings.setDiscoverability">): Promise<SlackWebApiOperationResponseMap["POST /admin.teams.settings.setDiscoverability"]>;
  AdminTeamsSettingsSetIcon(...args: SlackWebApiOperationArgs<"POST /admin.teams.settings.setIcon">): Promise<SlackWebApiOperationResponseMap["POST /admin.teams.settings.setIcon"]>;
  AdminTeamsSettingsSetName(...args: SlackWebApiOperationArgs<"POST /admin.teams.settings.setName">): Promise<SlackWebApiOperationResponseMap["POST /admin.teams.settings.setName"]>;
}

export const SlackWebApiAdminTeamsSettingsGeneratedFunctionNames = [
  "AdminTeamsSettingsInfo",
  "AdminTeamsSettingsSetDefaultChannels",
  "AdminTeamsSettingsSetDescription",
  "AdminTeamsSettingsSetDiscoverability",
  "AdminTeamsSettingsSetIcon",
  "AdminTeamsSettingsSetName"
] as const satisfies readonly (keyof SlackWebApiAdminTeamsSettingsGeneratedClient)[];

export function createSlackWebApiAdminTeamsSettingsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAdminTeamsSettingsGeneratedClient {
  return {
    AdminTeamsSettingsInfo: (...args) => callOperation("GET /admin.teams.settings.info", ...(args as SlackWebApiOperationArgs<"GET /admin.teams.settings.info">)),
    AdminTeamsSettingsSetDefaultChannels: (...args) => callOperation("POST /admin.teams.settings.setDefaultChannels", ...(args as SlackWebApiOperationArgs<"POST /admin.teams.settings.setDefaultChannels">)),
    AdminTeamsSettingsSetDescription: (...args) => callOperation("POST /admin.teams.settings.setDescription", ...(args as SlackWebApiOperationArgs<"POST /admin.teams.settings.setDescription">)),
    AdminTeamsSettingsSetDiscoverability: (...args) => callOperation("POST /admin.teams.settings.setDiscoverability", ...(args as SlackWebApiOperationArgs<"POST /admin.teams.settings.setDiscoverability">)),
    AdminTeamsSettingsSetIcon: (...args) => callOperation("POST /admin.teams.settings.setIcon", ...(args as SlackWebApiOperationArgs<"POST /admin.teams.settings.setIcon">)),
    AdminTeamsSettingsSetName: (...args) => callOperation("POST /admin.teams.settings.setName", ...(args as SlackWebApiOperationArgs<"POST /admin.teams.settings.setName">)),
  };
}
