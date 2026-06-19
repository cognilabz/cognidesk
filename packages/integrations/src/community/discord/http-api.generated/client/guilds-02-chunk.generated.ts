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
export const DiscordHttpApiGuilds02OperationKeys = [
  "GET /guilds/{guild_id}/voice-states/@me",
  "PATCH /guilds/{guild_id}/voice-states/@me",
  "GET /guilds/{guild_id}/voice-states/{user_id}",
  "PATCH /guilds/{guild_id}/voice-states/{user_id}",
  "GET /guilds/{guild_id}/webhooks",
  "GET /guilds/{guild_id}/welcome-screen",
  "PATCH /guilds/{guild_id}/welcome-screen",
  "GET /guilds/{guild_id}/widget",
  "PATCH /guilds/{guild_id}/widget",
  "GET /guilds/{guild_id}/widget.json",
  "GET /guilds/{guild_id}/widget.png"
] as const;
export type DiscordHttpApiGuilds02OperationKey = typeof DiscordHttpApiGuilds02OperationKeys[number];
// End hardened literal operation keys.

export interface DiscordHttpApiGuilds02OperationPathParamMap {
  "GET /guilds/{guild_id}/voice-states/@me": { "guild_id": DiscordHttpApiPathParamValue };
  "PATCH /guilds/{guild_id}/voice-states/@me": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/voice-states/{user_id}": { "guild_id": DiscordHttpApiPathParamValue; "user_id": DiscordHttpApiPathParamValue };
  "PATCH /guilds/{guild_id}/voice-states/{user_id}": { "guild_id": DiscordHttpApiPathParamValue; "user_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/webhooks": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/welcome-screen": { "guild_id": DiscordHttpApiPathParamValue };
  "PATCH /guilds/{guild_id}/welcome-screen": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/widget": { "guild_id": DiscordHttpApiPathParamValue };
  "PATCH /guilds/{guild_id}/widget": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/widget.json": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/widget.png": { "guild_id": DiscordHttpApiPathParamValue };
}

export interface DiscordHttpApiGuilds02OperationRequestMap {
  "GET /guilds/{guild_id}/voice-states/@me": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/voice-states/@me">;
  "PATCH /guilds/{guild_id}/voice-states/@me": DiscordHttpApiOperationInput<"PATCH /guilds/{guild_id}/voice-states/@me">;
  "GET /guilds/{guild_id}/voice-states/{user_id}": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/voice-states/{user_id}">;
  "PATCH /guilds/{guild_id}/voice-states/{user_id}": DiscordHttpApiOperationInput<"PATCH /guilds/{guild_id}/voice-states/{user_id}">;
  "GET /guilds/{guild_id}/webhooks": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/webhooks">;
  "GET /guilds/{guild_id}/welcome-screen": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/welcome-screen">;
  "PATCH /guilds/{guild_id}/welcome-screen": DiscordHttpApiOperationInput<"PATCH /guilds/{guild_id}/welcome-screen">;
  "GET /guilds/{guild_id}/widget": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/widget">;
  "PATCH /guilds/{guild_id}/widget": DiscordHttpApiOperationInput<"PATCH /guilds/{guild_id}/widget">;
  "GET /guilds/{guild_id}/widget.json": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/widget.json">;
  "GET /guilds/{guild_id}/widget.png": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/widget.png">;
}

export interface DiscordHttpApiGuilds02GeneratedClient {
  GetSelfVoiceState(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/voice-states/@me">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/voice-states/@me"]>;
  UpdateSelfVoiceState(...args: DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/voice-states/@me">): Promise<DiscordHttpApiOperationResponseMap["PATCH /guilds/{guild_id}/voice-states/@me"]>;
  GetVoiceState(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/voice-states/{user_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/voice-states/{user_id}"]>;
  UpdateVoiceState(...args: DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/voice-states/{user_id}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /guilds/{guild_id}/voice-states/{user_id}"]>;
  GetGuildWebhooks(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/webhooks">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/webhooks"]>;
  GetGuildWelcomeScreen(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/welcome-screen">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/welcome-screen"]>;
  UpdateGuildWelcomeScreen(...args: DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/welcome-screen">): Promise<DiscordHttpApiOperationResponseMap["PATCH /guilds/{guild_id}/welcome-screen"]>;
  GetGuildWidgetSettings(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/widget">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/widget"]>;
  UpdateGuildWidgetSettings(...args: DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/widget">): Promise<DiscordHttpApiOperationResponseMap["PATCH /guilds/{guild_id}/widget"]>;
  GetGuildWidget(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/widget.json">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/widget.json"]>;
  GetGuildWidgetPng(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/widget.png">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/widget.png"]>;
}

export const DiscordHttpApiGuilds02GeneratedFunctionNames = [
  "GetSelfVoiceState",
  "UpdateSelfVoiceState",
  "GetVoiceState",
  "UpdateVoiceState",
  "GetGuildWebhooks",
  "GetGuildWelcomeScreen",
  "UpdateGuildWelcomeScreen",
  "GetGuildWidgetSettings",
  "UpdateGuildWidgetSettings",
  "GetGuildWidget",
  "GetGuildWidgetPng"
] as const satisfies readonly (keyof DiscordHttpApiGuilds02GeneratedClient)[];

export function createDiscordHttpApiGuilds02GeneratedClient(
  callOperation: DiscordHttpApiGeneratedOperationCaller,
): DiscordHttpApiGuilds02GeneratedClient {
  return {
    GetSelfVoiceState: (...args) => callOperation("GET /guilds/{guild_id}/voice-states/@me", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/voice-states/@me">)),
    UpdateSelfVoiceState: (...args) => callOperation("PATCH /guilds/{guild_id}/voice-states/@me", ...(args as DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/voice-states/@me">)),
    GetVoiceState: (...args) => callOperation("GET /guilds/{guild_id}/voice-states/{user_id}", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/voice-states/{user_id}">)),
    UpdateVoiceState: (...args) => callOperation("PATCH /guilds/{guild_id}/voice-states/{user_id}", ...(args as DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/voice-states/{user_id}">)),
    GetGuildWebhooks: (...args) => callOperation("GET /guilds/{guild_id}/webhooks", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/webhooks">)),
    GetGuildWelcomeScreen: (...args) => callOperation("GET /guilds/{guild_id}/welcome-screen", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/welcome-screen">)),
    UpdateGuildWelcomeScreen: (...args) => callOperation("PATCH /guilds/{guild_id}/welcome-screen", ...(args as DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/welcome-screen">)),
    GetGuildWidgetSettings: (...args) => callOperation("GET /guilds/{guild_id}/widget", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/widget">)),
    UpdateGuildWidgetSettings: (...args) => callOperation("PATCH /guilds/{guild_id}/widget", ...(args as DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/widget">)),
    GetGuildWidget: (...args) => callOperation("GET /guilds/{guild_id}/widget.json", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/widget.json">)),
    GetGuildWidgetPng: (...args) => callOperation("GET /guilds/{guild_id}/widget.png", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/widget.png">)),
  };
}
