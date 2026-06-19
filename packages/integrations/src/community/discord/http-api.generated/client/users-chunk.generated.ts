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
export const DiscordHttpApiUsersOperationKeys = [
  "GET /users/@me",
  "PATCH /users/@me",
  "GET /users/@me/applications/{application_id}/entitlements",
  "GET /users/@me/applications/{application_id}/role-connection",
  "PUT /users/@me/applications/{application_id}/role-connection",
  "DELETE /users/@me/applications/{application_id}/role-connection",
  "POST /users/@me/channels",
  "GET /users/@me/connections",
  "GET /users/@me/guilds",
  "DELETE /users/@me/guilds/{guild_id}",
  "GET /users/@me/guilds/{guild_id}/member",
  "GET /users/{user_id}"
] as const;
export type DiscordHttpApiUsersOperationKey = typeof DiscordHttpApiUsersOperationKeys[number];
// End hardened literal operation keys.

export interface DiscordHttpApiUsersOperationPathParamMap {
  "GET /users/@me": {};
  "PATCH /users/@me": {};
  "GET /users/@me/applications/{application_id}/entitlements": { "application_id": DiscordHttpApiPathParamValue };
  "GET /users/@me/applications/{application_id}/role-connection": { "application_id": DiscordHttpApiPathParamValue };
  "PUT /users/@me/applications/{application_id}/role-connection": { "application_id": DiscordHttpApiPathParamValue };
  "DELETE /users/@me/applications/{application_id}/role-connection": { "application_id": DiscordHttpApiPathParamValue };
  "POST /users/@me/channels": {};
  "GET /users/@me/connections": {};
  "GET /users/@me/guilds": {};
  "DELETE /users/@me/guilds/{guild_id}": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /users/@me/guilds/{guild_id}/member": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /users/{user_id}": { "user_id": DiscordHttpApiPathParamValue };
}

export interface DiscordHttpApiUsersOperationRequestMap {
  "GET /users/@me": DiscordHttpApiOperationInput<"GET /users/@me">;
  "PATCH /users/@me": DiscordHttpApiOperationInput<"PATCH /users/@me">;
  "GET /users/@me/applications/{application_id}/entitlements": DiscordHttpApiOperationInput<"GET /users/@me/applications/{application_id}/entitlements">;
  "GET /users/@me/applications/{application_id}/role-connection": DiscordHttpApiOperationInput<"GET /users/@me/applications/{application_id}/role-connection">;
  "PUT /users/@me/applications/{application_id}/role-connection": DiscordHttpApiOperationInput<"PUT /users/@me/applications/{application_id}/role-connection">;
  "DELETE /users/@me/applications/{application_id}/role-connection": DiscordHttpApiOperationInput<"DELETE /users/@me/applications/{application_id}/role-connection">;
  "POST /users/@me/channels": DiscordHttpApiOperationInput<"POST /users/@me/channels">;
  "GET /users/@me/connections": DiscordHttpApiOperationInput<"GET /users/@me/connections">;
  "GET /users/@me/guilds": DiscordHttpApiOperationInput<"GET /users/@me/guilds">;
  "DELETE /users/@me/guilds/{guild_id}": DiscordHttpApiOperationInput<"DELETE /users/@me/guilds/{guild_id}">;
  "GET /users/@me/guilds/{guild_id}/member": DiscordHttpApiOperationInput<"GET /users/@me/guilds/{guild_id}/member">;
  "GET /users/{user_id}": DiscordHttpApiOperationInput<"GET /users/{user_id}">;
}

export interface DiscordHttpApiUsersGeneratedClient {
  GetMyUser(...args: DiscordHttpApiOperationArgs<"GET /users/@me">): Promise<DiscordHttpApiOperationResponseMap["GET /users/@me"]>;
  UpdateMyUser(...args: DiscordHttpApiOperationArgs<"PATCH /users/@me">): Promise<DiscordHttpApiOperationResponseMap["PATCH /users/@me"]>;
  GetCurrentUserApplicationEntitlements(...args: DiscordHttpApiOperationArgs<"GET /users/@me/applications/{application_id}/entitlements">): Promise<DiscordHttpApiOperationResponseMap["GET /users/@me/applications/{application_id}/entitlements"]>;
  GetApplicationUserRoleConnection(...args: DiscordHttpApiOperationArgs<"GET /users/@me/applications/{application_id}/role-connection">): Promise<DiscordHttpApiOperationResponseMap["GET /users/@me/applications/{application_id}/role-connection"]>;
  UpdateApplicationUserRoleConnection(...args: DiscordHttpApiOperationArgs<"PUT /users/@me/applications/{application_id}/role-connection">): Promise<DiscordHttpApiOperationResponseMap["PUT /users/@me/applications/{application_id}/role-connection"]>;
  DeleteApplicationUserRoleConnection(...args: DiscordHttpApiOperationArgs<"DELETE /users/@me/applications/{application_id}/role-connection">): Promise<DiscordHttpApiOperationResponseMap["DELETE /users/@me/applications/{application_id}/role-connection"]>;
  CreateDm(...args: DiscordHttpApiOperationArgs<"POST /users/@me/channels">): Promise<DiscordHttpApiOperationResponseMap["POST /users/@me/channels"]>;
  ListMyConnections(...args: DiscordHttpApiOperationArgs<"GET /users/@me/connections">): Promise<DiscordHttpApiOperationResponseMap["GET /users/@me/connections"]>;
  ListMyGuilds(...args: DiscordHttpApiOperationArgs<"GET /users/@me/guilds">): Promise<DiscordHttpApiOperationResponseMap["GET /users/@me/guilds"]>;
  LeaveGuild(...args: DiscordHttpApiOperationArgs<"DELETE /users/@me/guilds/{guild_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /users/@me/guilds/{guild_id}"]>;
  GetMyGuildMember(...args: DiscordHttpApiOperationArgs<"GET /users/@me/guilds/{guild_id}/member">): Promise<DiscordHttpApiOperationResponseMap["GET /users/@me/guilds/{guild_id}/member"]>;
  GetUser(...args: DiscordHttpApiOperationArgs<"GET /users/{user_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /users/{user_id}"]>;
}

export const DiscordHttpApiUsersGeneratedFunctionNames = [
  "GetMyUser",
  "UpdateMyUser",
  "GetCurrentUserApplicationEntitlements",
  "GetApplicationUserRoleConnection",
  "UpdateApplicationUserRoleConnection",
  "DeleteApplicationUserRoleConnection",
  "CreateDm",
  "ListMyConnections",
  "ListMyGuilds",
  "LeaveGuild",
  "GetMyGuildMember",
  "GetUser"
] as const satisfies readonly (keyof DiscordHttpApiUsersGeneratedClient)[];

export function createDiscordHttpApiUsersGeneratedClient(
  callOperation: DiscordHttpApiGeneratedOperationCaller,
): DiscordHttpApiUsersGeneratedClient {
  return {
    GetMyUser: (...args) => callOperation("GET /users/@me", ...(args as DiscordHttpApiOperationArgs<"GET /users/@me">)),
    UpdateMyUser: (...args) => callOperation("PATCH /users/@me", ...(args as DiscordHttpApiOperationArgs<"PATCH /users/@me">)),
    GetCurrentUserApplicationEntitlements: (...args) => callOperation("GET /users/@me/applications/{application_id}/entitlements", ...(args as DiscordHttpApiOperationArgs<"GET /users/@me/applications/{application_id}/entitlements">)),
    GetApplicationUserRoleConnection: (...args) => callOperation("GET /users/@me/applications/{application_id}/role-connection", ...(args as DiscordHttpApiOperationArgs<"GET /users/@me/applications/{application_id}/role-connection">)),
    UpdateApplicationUserRoleConnection: (...args) => callOperation("PUT /users/@me/applications/{application_id}/role-connection", ...(args as DiscordHttpApiOperationArgs<"PUT /users/@me/applications/{application_id}/role-connection">)),
    DeleteApplicationUserRoleConnection: (...args) => callOperation("DELETE /users/@me/applications/{application_id}/role-connection", ...(args as DiscordHttpApiOperationArgs<"DELETE /users/@me/applications/{application_id}/role-connection">)),
    CreateDm: (...args) => callOperation("POST /users/@me/channels", ...(args as DiscordHttpApiOperationArgs<"POST /users/@me/channels">)),
    ListMyConnections: (...args) => callOperation("GET /users/@me/connections", ...(args as DiscordHttpApiOperationArgs<"GET /users/@me/connections">)),
    ListMyGuilds: (...args) => callOperation("GET /users/@me/guilds", ...(args as DiscordHttpApiOperationArgs<"GET /users/@me/guilds">)),
    LeaveGuild: (...args) => callOperation("DELETE /users/@me/guilds/{guild_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /users/@me/guilds/{guild_id}">)),
    GetMyGuildMember: (...args) => callOperation("GET /users/@me/guilds/{guild_id}/member", ...(args as DiscordHttpApiOperationArgs<"GET /users/@me/guilds/{guild_id}/member">)),
    GetUser: (...args) => callOperation("GET /users/{user_id}", ...(args as DiscordHttpApiOperationArgs<"GET /users/{user_id}">)),
  };
}
