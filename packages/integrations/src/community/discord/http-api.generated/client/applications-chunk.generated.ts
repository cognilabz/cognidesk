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
export const DiscordHttpApiApplicationsOperationKeys = [
  "GET /applications/@me",
  "PATCH /applications/@me",
  "GET /applications/{application_id}",
  "PATCH /applications/{application_id}",
  "GET /applications/{application_id}/activity-instances/{instance_id}",
  "POST /applications/{application_id}/attachment",
  "GET /applications/{application_id}/commands",
  "PUT /applications/{application_id}/commands",
  "POST /applications/{application_id}/commands",
  "GET /applications/{application_id}/commands/{command_id}",
  "DELETE /applications/{application_id}/commands/{command_id}",
  "PATCH /applications/{application_id}/commands/{command_id}",
  "GET /applications/{application_id}/emojis",
  "POST /applications/{application_id}/emojis",
  "GET /applications/{application_id}/emojis/{emoji_id}",
  "DELETE /applications/{application_id}/emojis/{emoji_id}",
  "PATCH /applications/{application_id}/emojis/{emoji_id}",
  "GET /applications/{application_id}/entitlements",
  "POST /applications/{application_id}/entitlements",
  "GET /applications/{application_id}/entitlements/{entitlement_id}",
  "DELETE /applications/{application_id}/entitlements/{entitlement_id}",
  "POST /applications/{application_id}/entitlements/{entitlement_id}/consume",
  "GET /applications/{application_id}/guilds/{guild_id}/commands",
  "PUT /applications/{application_id}/guilds/{guild_id}/commands",
  "POST /applications/{application_id}/guilds/{guild_id}/commands",
  "GET /applications/{application_id}/guilds/{guild_id}/commands/permissions",
  "GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}",
  "DELETE /applications/{application_id}/guilds/{guild_id}/commands/{command_id}",
  "PATCH /applications/{application_id}/guilds/{guild_id}/commands/{command_id}",
  "GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions",
  "PUT /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions",
  "GET /applications/{application_id}/role-connections/metadata",
  "PUT /applications/{application_id}/role-connections/metadata"
] as const;
export type DiscordHttpApiApplicationsOperationKey = typeof DiscordHttpApiApplicationsOperationKeys[number];
// End hardened literal operation keys.

export interface DiscordHttpApiApplicationsOperationPathParamMap {
  "GET /applications/@me": {};
  "PATCH /applications/@me": {};
  "GET /applications/{application_id}": { "application_id": DiscordHttpApiPathParamValue };
  "PATCH /applications/{application_id}": { "application_id": DiscordHttpApiPathParamValue };
  "GET /applications/{application_id}/activity-instances/{instance_id}": { "application_id": DiscordHttpApiPathParamValue; "instance_id": DiscordHttpApiPathParamValue };
  "POST /applications/{application_id}/attachment": { "application_id": DiscordHttpApiPathParamValue };
  "GET /applications/{application_id}/commands": { "application_id": DiscordHttpApiPathParamValue };
  "PUT /applications/{application_id}/commands": { "application_id": DiscordHttpApiPathParamValue };
  "POST /applications/{application_id}/commands": { "application_id": DiscordHttpApiPathParamValue };
  "GET /applications/{application_id}/commands/{command_id}": { "application_id": DiscordHttpApiPathParamValue; "command_id": DiscordHttpApiPathParamValue };
  "DELETE /applications/{application_id}/commands/{command_id}": { "application_id": DiscordHttpApiPathParamValue; "command_id": DiscordHttpApiPathParamValue };
  "PATCH /applications/{application_id}/commands/{command_id}": { "application_id": DiscordHttpApiPathParamValue; "command_id": DiscordHttpApiPathParamValue };
  "GET /applications/{application_id}/emojis": { "application_id": DiscordHttpApiPathParamValue };
  "POST /applications/{application_id}/emojis": { "application_id": DiscordHttpApiPathParamValue };
  "GET /applications/{application_id}/emojis/{emoji_id}": { "application_id": DiscordHttpApiPathParamValue; "emoji_id": DiscordHttpApiPathParamValue };
  "DELETE /applications/{application_id}/emojis/{emoji_id}": { "application_id": DiscordHttpApiPathParamValue; "emoji_id": DiscordHttpApiPathParamValue };
  "PATCH /applications/{application_id}/emojis/{emoji_id}": { "application_id": DiscordHttpApiPathParamValue; "emoji_id": DiscordHttpApiPathParamValue };
  "GET /applications/{application_id}/entitlements": { "application_id": DiscordHttpApiPathParamValue };
  "POST /applications/{application_id}/entitlements": { "application_id": DiscordHttpApiPathParamValue };
  "GET /applications/{application_id}/entitlements/{entitlement_id}": { "application_id": DiscordHttpApiPathParamValue; "entitlement_id": DiscordHttpApiPathParamValue };
  "DELETE /applications/{application_id}/entitlements/{entitlement_id}": { "application_id": DiscordHttpApiPathParamValue; "entitlement_id": DiscordHttpApiPathParamValue };
  "POST /applications/{application_id}/entitlements/{entitlement_id}/consume": { "application_id": DiscordHttpApiPathParamValue; "entitlement_id": DiscordHttpApiPathParamValue };
  "GET /applications/{application_id}/guilds/{guild_id}/commands": { "application_id": DiscordHttpApiPathParamValue; "guild_id": DiscordHttpApiPathParamValue };
  "PUT /applications/{application_id}/guilds/{guild_id}/commands": { "application_id": DiscordHttpApiPathParamValue; "guild_id": DiscordHttpApiPathParamValue };
  "POST /applications/{application_id}/guilds/{guild_id}/commands": { "application_id": DiscordHttpApiPathParamValue; "guild_id": DiscordHttpApiPathParamValue };
  "GET /applications/{application_id}/guilds/{guild_id}/commands/permissions": { "application_id": DiscordHttpApiPathParamValue; "guild_id": DiscordHttpApiPathParamValue };
  "GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}": { "application_id": DiscordHttpApiPathParamValue; "guild_id": DiscordHttpApiPathParamValue; "command_id": DiscordHttpApiPathParamValue };
  "DELETE /applications/{application_id}/guilds/{guild_id}/commands/{command_id}": { "application_id": DiscordHttpApiPathParamValue; "guild_id": DiscordHttpApiPathParamValue; "command_id": DiscordHttpApiPathParamValue };
  "PATCH /applications/{application_id}/guilds/{guild_id}/commands/{command_id}": { "application_id": DiscordHttpApiPathParamValue; "guild_id": DiscordHttpApiPathParamValue; "command_id": DiscordHttpApiPathParamValue };
  "GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions": { "application_id": DiscordHttpApiPathParamValue; "guild_id": DiscordHttpApiPathParamValue; "command_id": DiscordHttpApiPathParamValue };
  "PUT /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions": { "application_id": DiscordHttpApiPathParamValue; "guild_id": DiscordHttpApiPathParamValue; "command_id": DiscordHttpApiPathParamValue };
  "GET /applications/{application_id}/role-connections/metadata": { "application_id": DiscordHttpApiPathParamValue };
  "PUT /applications/{application_id}/role-connections/metadata": { "application_id": DiscordHttpApiPathParamValue };
}

export interface DiscordHttpApiApplicationsOperationRequestMap {
  "GET /applications/@me": DiscordHttpApiOperationInput<"GET /applications/@me">;
  "PATCH /applications/@me": DiscordHttpApiOperationInput<"PATCH /applications/@me">;
  "GET /applications/{application_id}": DiscordHttpApiOperationInput<"GET /applications/{application_id}">;
  "PATCH /applications/{application_id}": DiscordHttpApiOperationInput<"PATCH /applications/{application_id}">;
  "GET /applications/{application_id}/activity-instances/{instance_id}": DiscordHttpApiOperationInput<"GET /applications/{application_id}/activity-instances/{instance_id}">;
  "POST /applications/{application_id}/attachment": DiscordHttpApiOperationInput<"POST /applications/{application_id}/attachment">;
  "GET /applications/{application_id}/commands": DiscordHttpApiOperationInput<"GET /applications/{application_id}/commands">;
  "PUT /applications/{application_id}/commands": DiscordHttpApiOperationInput<"PUT /applications/{application_id}/commands">;
  "POST /applications/{application_id}/commands": DiscordHttpApiOperationInput<"POST /applications/{application_id}/commands">;
  "GET /applications/{application_id}/commands/{command_id}": DiscordHttpApiOperationInput<"GET /applications/{application_id}/commands/{command_id}">;
  "DELETE /applications/{application_id}/commands/{command_id}": DiscordHttpApiOperationInput<"DELETE /applications/{application_id}/commands/{command_id}">;
  "PATCH /applications/{application_id}/commands/{command_id}": DiscordHttpApiOperationInput<"PATCH /applications/{application_id}/commands/{command_id}">;
  "GET /applications/{application_id}/emojis": DiscordHttpApiOperationInput<"GET /applications/{application_id}/emojis">;
  "POST /applications/{application_id}/emojis": DiscordHttpApiOperationInput<"POST /applications/{application_id}/emojis">;
  "GET /applications/{application_id}/emojis/{emoji_id}": DiscordHttpApiOperationInput<"GET /applications/{application_id}/emojis/{emoji_id}">;
  "DELETE /applications/{application_id}/emojis/{emoji_id}": DiscordHttpApiOperationInput<"DELETE /applications/{application_id}/emojis/{emoji_id}">;
  "PATCH /applications/{application_id}/emojis/{emoji_id}": DiscordHttpApiOperationInput<"PATCH /applications/{application_id}/emojis/{emoji_id}">;
  "GET /applications/{application_id}/entitlements": DiscordHttpApiOperationInput<"GET /applications/{application_id}/entitlements">;
  "POST /applications/{application_id}/entitlements": DiscordHttpApiOperationInput<"POST /applications/{application_id}/entitlements">;
  "GET /applications/{application_id}/entitlements/{entitlement_id}": DiscordHttpApiOperationInput<"GET /applications/{application_id}/entitlements/{entitlement_id}">;
  "DELETE /applications/{application_id}/entitlements/{entitlement_id}": DiscordHttpApiOperationInput<"DELETE /applications/{application_id}/entitlements/{entitlement_id}">;
  "POST /applications/{application_id}/entitlements/{entitlement_id}/consume": DiscordHttpApiOperationInput<"POST /applications/{application_id}/entitlements/{entitlement_id}/consume">;
  "GET /applications/{application_id}/guilds/{guild_id}/commands": DiscordHttpApiOperationInput<"GET /applications/{application_id}/guilds/{guild_id}/commands">;
  "PUT /applications/{application_id}/guilds/{guild_id}/commands": DiscordHttpApiOperationInput<"PUT /applications/{application_id}/guilds/{guild_id}/commands">;
  "POST /applications/{application_id}/guilds/{guild_id}/commands": DiscordHttpApiOperationInput<"POST /applications/{application_id}/guilds/{guild_id}/commands">;
  "GET /applications/{application_id}/guilds/{guild_id}/commands/permissions": DiscordHttpApiOperationInput<"GET /applications/{application_id}/guilds/{guild_id}/commands/permissions">;
  "GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}": DiscordHttpApiOperationInput<"GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}">;
  "DELETE /applications/{application_id}/guilds/{guild_id}/commands/{command_id}": DiscordHttpApiOperationInput<"DELETE /applications/{application_id}/guilds/{guild_id}/commands/{command_id}">;
  "PATCH /applications/{application_id}/guilds/{guild_id}/commands/{command_id}": DiscordHttpApiOperationInput<"PATCH /applications/{application_id}/guilds/{guild_id}/commands/{command_id}">;
  "GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions": DiscordHttpApiOperationInput<"GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions">;
  "PUT /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions": DiscordHttpApiOperationInput<"PUT /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions">;
  "GET /applications/{application_id}/role-connections/metadata": DiscordHttpApiOperationInput<"GET /applications/{application_id}/role-connections/metadata">;
  "PUT /applications/{application_id}/role-connections/metadata": DiscordHttpApiOperationInput<"PUT /applications/{application_id}/role-connections/metadata">;
}

export interface DiscordHttpApiApplicationsGeneratedClient {
  GetMyApplication(...args: DiscordHttpApiOperationArgs<"GET /applications/@me">): Promise<DiscordHttpApiOperationResponseMap["GET /applications/@me"]>;
  UpdateMyApplication(...args: DiscordHttpApiOperationArgs<"PATCH /applications/@me">): Promise<DiscordHttpApiOperationResponseMap["PATCH /applications/@me"]>;
  GetApplication(...args: DiscordHttpApiOperationArgs<"GET /applications/{application_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /applications/{application_id}"]>;
  UpdateApplication(...args: DiscordHttpApiOperationArgs<"PATCH /applications/{application_id}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /applications/{application_id}"]>;
  ApplicationsGetActivityInstance(...args: DiscordHttpApiOperationArgs<"GET /applications/{application_id}/activity-instances/{instance_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /applications/{application_id}/activity-instances/{instance_id}"]>;
  UploadApplicationAttachment(...args: DiscordHttpApiOperationArgs<"POST /applications/{application_id}/attachment">): Promise<DiscordHttpApiOperationResponseMap["POST /applications/{application_id}/attachment"]>;
  ListApplicationCommands(...args: DiscordHttpApiOperationArgs<"GET /applications/{application_id}/commands">): Promise<DiscordHttpApiOperationResponseMap["GET /applications/{application_id}/commands"]>;
  BulkSetApplicationCommands(...args: DiscordHttpApiOperationArgs<"PUT /applications/{application_id}/commands">): Promise<DiscordHttpApiOperationResponseMap["PUT /applications/{application_id}/commands"]>;
  CreateApplicationCommand(...args: DiscordHttpApiOperationArgs<"POST /applications/{application_id}/commands">): Promise<DiscordHttpApiOperationResponseMap["POST /applications/{application_id}/commands"]>;
  GetApplicationCommand(...args: DiscordHttpApiOperationArgs<"GET /applications/{application_id}/commands/{command_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /applications/{application_id}/commands/{command_id}"]>;
  DeleteApplicationCommand(...args: DiscordHttpApiOperationArgs<"DELETE /applications/{application_id}/commands/{command_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /applications/{application_id}/commands/{command_id}"]>;
  UpdateApplicationCommand(...args: DiscordHttpApiOperationArgs<"PATCH /applications/{application_id}/commands/{command_id}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /applications/{application_id}/commands/{command_id}"]>;
  ListApplicationEmojis(...args: DiscordHttpApiOperationArgs<"GET /applications/{application_id}/emojis">): Promise<DiscordHttpApiOperationResponseMap["GET /applications/{application_id}/emojis"]>;
  CreateApplicationEmoji(...args: DiscordHttpApiOperationArgs<"POST /applications/{application_id}/emojis">): Promise<DiscordHttpApiOperationResponseMap["POST /applications/{application_id}/emojis"]>;
  GetApplicationEmoji(...args: DiscordHttpApiOperationArgs<"GET /applications/{application_id}/emojis/{emoji_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /applications/{application_id}/emojis/{emoji_id}"]>;
  DeleteApplicationEmoji(...args: DiscordHttpApiOperationArgs<"DELETE /applications/{application_id}/emojis/{emoji_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /applications/{application_id}/emojis/{emoji_id}"]>;
  UpdateApplicationEmoji(...args: DiscordHttpApiOperationArgs<"PATCH /applications/{application_id}/emojis/{emoji_id}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /applications/{application_id}/emojis/{emoji_id}"]>;
  GetEntitlements(...args: DiscordHttpApiOperationArgs<"GET /applications/{application_id}/entitlements">): Promise<DiscordHttpApiOperationResponseMap["GET /applications/{application_id}/entitlements"]>;
  CreateEntitlement(...args: DiscordHttpApiOperationArgs<"POST /applications/{application_id}/entitlements">): Promise<DiscordHttpApiOperationResponseMap["POST /applications/{application_id}/entitlements"]>;
  GetEntitlement(...args: DiscordHttpApiOperationArgs<"GET /applications/{application_id}/entitlements/{entitlement_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /applications/{application_id}/entitlements/{entitlement_id}"]>;
  DeleteEntitlement(...args: DiscordHttpApiOperationArgs<"DELETE /applications/{application_id}/entitlements/{entitlement_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /applications/{application_id}/entitlements/{entitlement_id}"]>;
  ConsumeEntitlement(...args: DiscordHttpApiOperationArgs<"POST /applications/{application_id}/entitlements/{entitlement_id}/consume">): Promise<DiscordHttpApiOperationResponseMap["POST /applications/{application_id}/entitlements/{entitlement_id}/consume"]>;
  ListGuildApplicationCommands(...args: DiscordHttpApiOperationArgs<"GET /applications/{application_id}/guilds/{guild_id}/commands">): Promise<DiscordHttpApiOperationResponseMap["GET /applications/{application_id}/guilds/{guild_id}/commands"]>;
  BulkSetGuildApplicationCommands(...args: DiscordHttpApiOperationArgs<"PUT /applications/{application_id}/guilds/{guild_id}/commands">): Promise<DiscordHttpApiOperationResponseMap["PUT /applications/{application_id}/guilds/{guild_id}/commands"]>;
  CreateGuildApplicationCommand(...args: DiscordHttpApiOperationArgs<"POST /applications/{application_id}/guilds/{guild_id}/commands">): Promise<DiscordHttpApiOperationResponseMap["POST /applications/{application_id}/guilds/{guild_id}/commands"]>;
  ListGuildApplicationCommandPermissions(...args: DiscordHttpApiOperationArgs<"GET /applications/{application_id}/guilds/{guild_id}/commands/permissions">): Promise<DiscordHttpApiOperationResponseMap["GET /applications/{application_id}/guilds/{guild_id}/commands/permissions"]>;
  GetGuildApplicationCommand(...args: DiscordHttpApiOperationArgs<"GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}"]>;
  DeleteGuildApplicationCommand(...args: DiscordHttpApiOperationArgs<"DELETE /applications/{application_id}/guilds/{guild_id}/commands/{command_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /applications/{application_id}/guilds/{guild_id}/commands/{command_id}"]>;
  UpdateGuildApplicationCommand(...args: DiscordHttpApiOperationArgs<"PATCH /applications/{application_id}/guilds/{guild_id}/commands/{command_id}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /applications/{application_id}/guilds/{guild_id}/commands/{command_id}"]>;
  GetGuildApplicationCommandPermissions(...args: DiscordHttpApiOperationArgs<"GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions">): Promise<DiscordHttpApiOperationResponseMap["GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions"]>;
  SetGuildApplicationCommandPermissions(...args: DiscordHttpApiOperationArgs<"PUT /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions">): Promise<DiscordHttpApiOperationResponseMap["PUT /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions"]>;
  GetApplicationRoleConnectionsMetadata(...args: DiscordHttpApiOperationArgs<"GET /applications/{application_id}/role-connections/metadata">): Promise<DiscordHttpApiOperationResponseMap["GET /applications/{application_id}/role-connections/metadata"]>;
  UpdateApplicationRoleConnectionsMetadata(...args: DiscordHttpApiOperationArgs<"PUT /applications/{application_id}/role-connections/metadata">): Promise<DiscordHttpApiOperationResponseMap["PUT /applications/{application_id}/role-connections/metadata"]>;
}

export const DiscordHttpApiApplicationsGeneratedFunctionNames = [
  "GetMyApplication",
  "UpdateMyApplication",
  "GetApplication",
  "UpdateApplication",
  "ApplicationsGetActivityInstance",
  "UploadApplicationAttachment",
  "ListApplicationCommands",
  "BulkSetApplicationCommands",
  "CreateApplicationCommand",
  "GetApplicationCommand",
  "DeleteApplicationCommand",
  "UpdateApplicationCommand",
  "ListApplicationEmojis",
  "CreateApplicationEmoji",
  "GetApplicationEmoji",
  "DeleteApplicationEmoji",
  "UpdateApplicationEmoji",
  "GetEntitlements",
  "CreateEntitlement",
  "GetEntitlement",
  "DeleteEntitlement",
  "ConsumeEntitlement",
  "ListGuildApplicationCommands",
  "BulkSetGuildApplicationCommands",
  "CreateGuildApplicationCommand",
  "ListGuildApplicationCommandPermissions",
  "GetGuildApplicationCommand",
  "DeleteGuildApplicationCommand",
  "UpdateGuildApplicationCommand",
  "GetGuildApplicationCommandPermissions",
  "SetGuildApplicationCommandPermissions",
  "GetApplicationRoleConnectionsMetadata",
  "UpdateApplicationRoleConnectionsMetadata"
] as const satisfies readonly (keyof DiscordHttpApiApplicationsGeneratedClient)[];

export function createDiscordHttpApiApplicationsGeneratedClient(
  callOperation: DiscordHttpApiGeneratedOperationCaller,
): DiscordHttpApiApplicationsGeneratedClient {
  return {
    GetMyApplication: (...args) => callOperation("GET /applications/@me", ...(args as DiscordHttpApiOperationArgs<"GET /applications/@me">)),
    UpdateMyApplication: (...args) => callOperation("PATCH /applications/@me", ...(args as DiscordHttpApiOperationArgs<"PATCH /applications/@me">)),
    GetApplication: (...args) => callOperation("GET /applications/{application_id}", ...(args as DiscordHttpApiOperationArgs<"GET /applications/{application_id}">)),
    UpdateApplication: (...args) => callOperation("PATCH /applications/{application_id}", ...(args as DiscordHttpApiOperationArgs<"PATCH /applications/{application_id}">)),
    ApplicationsGetActivityInstance: (...args) => callOperation("GET /applications/{application_id}/activity-instances/{instance_id}", ...(args as DiscordHttpApiOperationArgs<"GET /applications/{application_id}/activity-instances/{instance_id}">)),
    UploadApplicationAttachment: (...args) => callOperation("POST /applications/{application_id}/attachment", ...(args as DiscordHttpApiOperationArgs<"POST /applications/{application_id}/attachment">)),
    ListApplicationCommands: (...args) => callOperation("GET /applications/{application_id}/commands", ...(args as DiscordHttpApiOperationArgs<"GET /applications/{application_id}/commands">)),
    BulkSetApplicationCommands: (...args) => callOperation("PUT /applications/{application_id}/commands", ...(args as DiscordHttpApiOperationArgs<"PUT /applications/{application_id}/commands">)),
    CreateApplicationCommand: (...args) => callOperation("POST /applications/{application_id}/commands", ...(args as DiscordHttpApiOperationArgs<"POST /applications/{application_id}/commands">)),
    GetApplicationCommand: (...args) => callOperation("GET /applications/{application_id}/commands/{command_id}", ...(args as DiscordHttpApiOperationArgs<"GET /applications/{application_id}/commands/{command_id}">)),
    DeleteApplicationCommand: (...args) => callOperation("DELETE /applications/{application_id}/commands/{command_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /applications/{application_id}/commands/{command_id}">)),
    UpdateApplicationCommand: (...args) => callOperation("PATCH /applications/{application_id}/commands/{command_id}", ...(args as DiscordHttpApiOperationArgs<"PATCH /applications/{application_id}/commands/{command_id}">)),
    ListApplicationEmojis: (...args) => callOperation("GET /applications/{application_id}/emojis", ...(args as DiscordHttpApiOperationArgs<"GET /applications/{application_id}/emojis">)),
    CreateApplicationEmoji: (...args) => callOperation("POST /applications/{application_id}/emojis", ...(args as DiscordHttpApiOperationArgs<"POST /applications/{application_id}/emojis">)),
    GetApplicationEmoji: (...args) => callOperation("GET /applications/{application_id}/emojis/{emoji_id}", ...(args as DiscordHttpApiOperationArgs<"GET /applications/{application_id}/emojis/{emoji_id}">)),
    DeleteApplicationEmoji: (...args) => callOperation("DELETE /applications/{application_id}/emojis/{emoji_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /applications/{application_id}/emojis/{emoji_id}">)),
    UpdateApplicationEmoji: (...args) => callOperation("PATCH /applications/{application_id}/emojis/{emoji_id}", ...(args as DiscordHttpApiOperationArgs<"PATCH /applications/{application_id}/emojis/{emoji_id}">)),
    GetEntitlements: (...args) => callOperation("GET /applications/{application_id}/entitlements", ...(args as DiscordHttpApiOperationArgs<"GET /applications/{application_id}/entitlements">)),
    CreateEntitlement: (...args) => callOperation("POST /applications/{application_id}/entitlements", ...(args as DiscordHttpApiOperationArgs<"POST /applications/{application_id}/entitlements">)),
    GetEntitlement: (...args) => callOperation("GET /applications/{application_id}/entitlements/{entitlement_id}", ...(args as DiscordHttpApiOperationArgs<"GET /applications/{application_id}/entitlements/{entitlement_id}">)),
    DeleteEntitlement: (...args) => callOperation("DELETE /applications/{application_id}/entitlements/{entitlement_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /applications/{application_id}/entitlements/{entitlement_id}">)),
    ConsumeEntitlement: (...args) => callOperation("POST /applications/{application_id}/entitlements/{entitlement_id}/consume", ...(args as DiscordHttpApiOperationArgs<"POST /applications/{application_id}/entitlements/{entitlement_id}/consume">)),
    ListGuildApplicationCommands: (...args) => callOperation("GET /applications/{application_id}/guilds/{guild_id}/commands", ...(args as DiscordHttpApiOperationArgs<"GET /applications/{application_id}/guilds/{guild_id}/commands">)),
    BulkSetGuildApplicationCommands: (...args) => callOperation("PUT /applications/{application_id}/guilds/{guild_id}/commands", ...(args as DiscordHttpApiOperationArgs<"PUT /applications/{application_id}/guilds/{guild_id}/commands">)),
    CreateGuildApplicationCommand: (...args) => callOperation("POST /applications/{application_id}/guilds/{guild_id}/commands", ...(args as DiscordHttpApiOperationArgs<"POST /applications/{application_id}/guilds/{guild_id}/commands">)),
    ListGuildApplicationCommandPermissions: (...args) => callOperation("GET /applications/{application_id}/guilds/{guild_id}/commands/permissions", ...(args as DiscordHttpApiOperationArgs<"GET /applications/{application_id}/guilds/{guild_id}/commands/permissions">)),
    GetGuildApplicationCommand: (...args) => callOperation("GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}", ...(args as DiscordHttpApiOperationArgs<"GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}">)),
    DeleteGuildApplicationCommand: (...args) => callOperation("DELETE /applications/{application_id}/guilds/{guild_id}/commands/{command_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /applications/{application_id}/guilds/{guild_id}/commands/{command_id}">)),
    UpdateGuildApplicationCommand: (...args) => callOperation("PATCH /applications/{application_id}/guilds/{guild_id}/commands/{command_id}", ...(args as DiscordHttpApiOperationArgs<"PATCH /applications/{application_id}/guilds/{guild_id}/commands/{command_id}">)),
    GetGuildApplicationCommandPermissions: (...args) => callOperation("GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions", ...(args as DiscordHttpApiOperationArgs<"GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions">)),
    SetGuildApplicationCommandPermissions: (...args) => callOperation("PUT /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions", ...(args as DiscordHttpApiOperationArgs<"PUT /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions">)),
    GetApplicationRoleConnectionsMetadata: (...args) => callOperation("GET /applications/{application_id}/role-connections/metadata", ...(args as DiscordHttpApiOperationArgs<"GET /applications/{application_id}/role-connections/metadata">)),
    UpdateApplicationRoleConnectionsMetadata: (...args) => callOperation("PUT /applications/{application_id}/role-connections/metadata", ...(args as DiscordHttpApiOperationArgs<"PUT /applications/{application_id}/role-connections/metadata">)),
  };
}
