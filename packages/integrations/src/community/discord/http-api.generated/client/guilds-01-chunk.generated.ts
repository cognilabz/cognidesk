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
export const DiscordHttpApiGuilds01OperationKeys = [
  "GET /guilds/templates/{code}",
  "GET /guilds/{guild_id}",
  "PATCH /guilds/{guild_id}",
  "GET /guilds/{guild_id}/audit-logs",
  "GET /guilds/{guild_id}/auto-moderation/rules",
  "POST /guilds/{guild_id}/auto-moderation/rules",
  "GET /guilds/{guild_id}/auto-moderation/rules/{rule_id}",
  "DELETE /guilds/{guild_id}/auto-moderation/rules/{rule_id}",
  "PATCH /guilds/{guild_id}/auto-moderation/rules/{rule_id}",
  "GET /guilds/{guild_id}/bans",
  "GET /guilds/{guild_id}/bans/{user_id}",
  "PUT /guilds/{guild_id}/bans/{user_id}",
  "DELETE /guilds/{guild_id}/bans/{user_id}",
  "POST /guilds/{guild_id}/bulk-ban",
  "GET /guilds/{guild_id}/channels",
  "POST /guilds/{guild_id}/channels",
  "PATCH /guilds/{guild_id}/channels",
  "GET /guilds/{guild_id}/emojis",
  "POST /guilds/{guild_id}/emojis",
  "GET /guilds/{guild_id}/emojis/{emoji_id}",
  "DELETE /guilds/{guild_id}/emojis/{emoji_id}",
  "PATCH /guilds/{guild_id}/emojis/{emoji_id}",
  "PUT /guilds/{guild_id}/incident-actions",
  "GET /guilds/{guild_id}/integrations",
  "DELETE /guilds/{guild_id}/integrations/{integration_id}",
  "GET /guilds/{guild_id}/invites",
  "GET /guilds/{guild_id}/members",
  "PATCH /guilds/{guild_id}/members/@me",
  "GET /guilds/{guild_id}/members/search",
  "GET /guilds/{guild_id}/members/{user_id}",
  "PUT /guilds/{guild_id}/members/{user_id}",
  "DELETE /guilds/{guild_id}/members/{user_id}",
  "PATCH /guilds/{guild_id}/members/{user_id}",
  "PUT /guilds/{guild_id}/members/{user_id}/roles/{role_id}",
  "DELETE /guilds/{guild_id}/members/{user_id}/roles/{role_id}",
  "GET /guilds/{guild_id}/messages/search",
  "GET /guilds/{guild_id}/new-member-welcome",
  "GET /guilds/{guild_id}/onboarding",
  "PUT /guilds/{guild_id}/onboarding",
  "GET /guilds/{guild_id}/preview",
  "GET /guilds/{guild_id}/prune",
  "POST /guilds/{guild_id}/prune",
  "GET /guilds/{guild_id}/regions",
  "GET /guilds/{guild_id}/requests",
  "PATCH /guilds/{guild_id}/requests/{request_id}",
  "GET /guilds/{guild_id}/roles",
  "POST /guilds/{guild_id}/roles",
  "PATCH /guilds/{guild_id}/roles",
  "GET /guilds/{guild_id}/roles/member-counts",
  "GET /guilds/{guild_id}/roles/{role_id}",
  "DELETE /guilds/{guild_id}/roles/{role_id}",
  "PATCH /guilds/{guild_id}/roles/{role_id}",
  "GET /guilds/{guild_id}/scheduled-events",
  "POST /guilds/{guild_id}/scheduled-events",
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}",
  "DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}",
  "PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}",
  "POST /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions",
  "DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}",
  "PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}",
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users",
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users/counts",
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/{guild_scheduled_event_exception_id}/users",
  "GET /guilds/{guild_id}/soundboard-sounds",
  "POST /guilds/{guild_id}/soundboard-sounds",
  "GET /guilds/{guild_id}/soundboard-sounds/{sound_id}",
  "DELETE /guilds/{guild_id}/soundboard-sounds/{sound_id}",
  "PATCH /guilds/{guild_id}/soundboard-sounds/{sound_id}",
  "GET /guilds/{guild_id}/stickers",
  "POST /guilds/{guild_id}/stickers",
  "GET /guilds/{guild_id}/stickers/{sticker_id}",
  "DELETE /guilds/{guild_id}/stickers/{sticker_id}",
  "PATCH /guilds/{guild_id}/stickers/{sticker_id}",
  "GET /guilds/{guild_id}/templates",
  "POST /guilds/{guild_id}/templates",
  "PUT /guilds/{guild_id}/templates/{code}",
  "DELETE /guilds/{guild_id}/templates/{code}",
  "PATCH /guilds/{guild_id}/templates/{code}",
  "GET /guilds/{guild_id}/threads/active",
  "GET /guilds/{guild_id}/vanity-url"
] as const;
export type DiscordHttpApiGuilds01OperationKey = typeof DiscordHttpApiGuilds01OperationKeys[number];
// End hardened literal operation keys.

export interface DiscordHttpApiGuilds01OperationPathParamMap {
  "GET /guilds/templates/{code}": { "code": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}": { "guild_id": DiscordHttpApiPathParamValue };
  "PATCH /guilds/{guild_id}": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/audit-logs": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/auto-moderation/rules": { "guild_id": DiscordHttpApiPathParamValue };
  "POST /guilds/{guild_id}/auto-moderation/rules": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/auto-moderation/rules/{rule_id}": { "guild_id": DiscordHttpApiPathParamValue; "rule_id": DiscordHttpApiPathParamValue };
  "DELETE /guilds/{guild_id}/auto-moderation/rules/{rule_id}": { "guild_id": DiscordHttpApiPathParamValue; "rule_id": DiscordHttpApiPathParamValue };
  "PATCH /guilds/{guild_id}/auto-moderation/rules/{rule_id}": { "guild_id": DiscordHttpApiPathParamValue; "rule_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/bans": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/bans/{user_id}": { "guild_id": DiscordHttpApiPathParamValue; "user_id": DiscordHttpApiPathParamValue };
  "PUT /guilds/{guild_id}/bans/{user_id}": { "guild_id": DiscordHttpApiPathParamValue; "user_id": DiscordHttpApiPathParamValue };
  "DELETE /guilds/{guild_id}/bans/{user_id}": { "guild_id": DiscordHttpApiPathParamValue; "user_id": DiscordHttpApiPathParamValue };
  "POST /guilds/{guild_id}/bulk-ban": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/channels": { "guild_id": DiscordHttpApiPathParamValue };
  "POST /guilds/{guild_id}/channels": { "guild_id": DiscordHttpApiPathParamValue };
  "PATCH /guilds/{guild_id}/channels": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/emojis": { "guild_id": DiscordHttpApiPathParamValue };
  "POST /guilds/{guild_id}/emojis": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/emojis/{emoji_id}": { "guild_id": DiscordHttpApiPathParamValue; "emoji_id": DiscordHttpApiPathParamValue };
  "DELETE /guilds/{guild_id}/emojis/{emoji_id}": { "guild_id": DiscordHttpApiPathParamValue; "emoji_id": DiscordHttpApiPathParamValue };
  "PATCH /guilds/{guild_id}/emojis/{emoji_id}": { "guild_id": DiscordHttpApiPathParamValue; "emoji_id": DiscordHttpApiPathParamValue };
  "PUT /guilds/{guild_id}/incident-actions": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/integrations": { "guild_id": DiscordHttpApiPathParamValue };
  "DELETE /guilds/{guild_id}/integrations/{integration_id}": { "guild_id": DiscordHttpApiPathParamValue; "integration_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/invites": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/members": { "guild_id": DiscordHttpApiPathParamValue };
  "PATCH /guilds/{guild_id}/members/@me": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/members/search": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/members/{user_id}": { "guild_id": DiscordHttpApiPathParamValue; "user_id": DiscordHttpApiPathParamValue };
  "PUT /guilds/{guild_id}/members/{user_id}": { "guild_id": DiscordHttpApiPathParamValue; "user_id": DiscordHttpApiPathParamValue };
  "DELETE /guilds/{guild_id}/members/{user_id}": { "guild_id": DiscordHttpApiPathParamValue; "user_id": DiscordHttpApiPathParamValue };
  "PATCH /guilds/{guild_id}/members/{user_id}": { "guild_id": DiscordHttpApiPathParamValue; "user_id": DiscordHttpApiPathParamValue };
  "PUT /guilds/{guild_id}/members/{user_id}/roles/{role_id}": { "guild_id": DiscordHttpApiPathParamValue; "user_id": DiscordHttpApiPathParamValue; "role_id": DiscordHttpApiPathParamValue };
  "DELETE /guilds/{guild_id}/members/{user_id}/roles/{role_id}": { "guild_id": DiscordHttpApiPathParamValue; "user_id": DiscordHttpApiPathParamValue; "role_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/messages/search": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/new-member-welcome": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/onboarding": { "guild_id": DiscordHttpApiPathParamValue };
  "PUT /guilds/{guild_id}/onboarding": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/preview": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/prune": { "guild_id": DiscordHttpApiPathParamValue };
  "POST /guilds/{guild_id}/prune": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/regions": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/requests": { "guild_id": DiscordHttpApiPathParamValue };
  "PATCH /guilds/{guild_id}/requests/{request_id}": { "guild_id": DiscordHttpApiPathParamValue; "request_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/roles": { "guild_id": DiscordHttpApiPathParamValue };
  "POST /guilds/{guild_id}/roles": { "guild_id": DiscordHttpApiPathParamValue };
  "PATCH /guilds/{guild_id}/roles": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/roles/member-counts": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/roles/{role_id}": { "guild_id": DiscordHttpApiPathParamValue; "role_id": DiscordHttpApiPathParamValue };
  "DELETE /guilds/{guild_id}/roles/{role_id}": { "guild_id": DiscordHttpApiPathParamValue; "role_id": DiscordHttpApiPathParamValue };
  "PATCH /guilds/{guild_id}/roles/{role_id}": { "guild_id": DiscordHttpApiPathParamValue; "role_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/scheduled-events": { "guild_id": DiscordHttpApiPathParamValue };
  "POST /guilds/{guild_id}/scheduled-events": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": { "guild_id": DiscordHttpApiPathParamValue; "guild_scheduled_event_id": DiscordHttpApiPathParamValue };
  "DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": { "guild_id": DiscordHttpApiPathParamValue; "guild_scheduled_event_id": DiscordHttpApiPathParamValue };
  "PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": { "guild_id": DiscordHttpApiPathParamValue; "guild_scheduled_event_id": DiscordHttpApiPathParamValue };
  "POST /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions": { "guild_id": DiscordHttpApiPathParamValue; "guild_scheduled_event_id": DiscordHttpApiPathParamValue };
  "DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}": { "guild_id": DiscordHttpApiPathParamValue; "guild_scheduled_event_id": DiscordHttpApiPathParamValue; "exception_id": DiscordHttpApiPathParamValue };
  "PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}": { "guild_id": DiscordHttpApiPathParamValue; "guild_scheduled_event_id": DiscordHttpApiPathParamValue; "exception_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users": { "guild_id": DiscordHttpApiPathParamValue; "guild_scheduled_event_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users/counts": { "guild_id": DiscordHttpApiPathParamValue; "guild_scheduled_event_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/{guild_scheduled_event_exception_id}/users": { "guild_id": DiscordHttpApiPathParamValue; "guild_scheduled_event_id": DiscordHttpApiPathParamValue; "guild_scheduled_event_exception_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/soundboard-sounds": { "guild_id": DiscordHttpApiPathParamValue };
  "POST /guilds/{guild_id}/soundboard-sounds": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/soundboard-sounds/{sound_id}": { "guild_id": DiscordHttpApiPathParamValue; "sound_id": DiscordHttpApiPathParamValue };
  "DELETE /guilds/{guild_id}/soundboard-sounds/{sound_id}": { "guild_id": DiscordHttpApiPathParamValue; "sound_id": DiscordHttpApiPathParamValue };
  "PATCH /guilds/{guild_id}/soundboard-sounds/{sound_id}": { "guild_id": DiscordHttpApiPathParamValue; "sound_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/stickers": { "guild_id": DiscordHttpApiPathParamValue };
  "POST /guilds/{guild_id}/stickers": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/stickers/{sticker_id}": { "guild_id": DiscordHttpApiPathParamValue; "sticker_id": DiscordHttpApiPathParamValue };
  "DELETE /guilds/{guild_id}/stickers/{sticker_id}": { "guild_id": DiscordHttpApiPathParamValue; "sticker_id": DiscordHttpApiPathParamValue };
  "PATCH /guilds/{guild_id}/stickers/{sticker_id}": { "guild_id": DiscordHttpApiPathParamValue; "sticker_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/templates": { "guild_id": DiscordHttpApiPathParamValue };
  "POST /guilds/{guild_id}/templates": { "guild_id": DiscordHttpApiPathParamValue };
  "PUT /guilds/{guild_id}/templates/{code}": { "guild_id": DiscordHttpApiPathParamValue; "code": DiscordHttpApiPathParamValue };
  "DELETE /guilds/{guild_id}/templates/{code}": { "guild_id": DiscordHttpApiPathParamValue; "code": DiscordHttpApiPathParamValue };
  "PATCH /guilds/{guild_id}/templates/{code}": { "guild_id": DiscordHttpApiPathParamValue; "code": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/threads/active": { "guild_id": DiscordHttpApiPathParamValue };
  "GET /guilds/{guild_id}/vanity-url": { "guild_id": DiscordHttpApiPathParamValue };
}

export interface DiscordHttpApiGuilds01OperationRequestMap {
  "GET /guilds/templates/{code}": DiscordHttpApiOperationInput<"GET /guilds/templates/{code}">;
  "GET /guilds/{guild_id}": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}">;
  "PATCH /guilds/{guild_id}": DiscordHttpApiOperationInput<"PATCH /guilds/{guild_id}">;
  "GET /guilds/{guild_id}/audit-logs": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/audit-logs">;
  "GET /guilds/{guild_id}/auto-moderation/rules": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/auto-moderation/rules">;
  "POST /guilds/{guild_id}/auto-moderation/rules": DiscordHttpApiOperationInput<"POST /guilds/{guild_id}/auto-moderation/rules">;
  "GET /guilds/{guild_id}/auto-moderation/rules/{rule_id}": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/auto-moderation/rules/{rule_id}">;
  "DELETE /guilds/{guild_id}/auto-moderation/rules/{rule_id}": DiscordHttpApiOperationInput<"DELETE /guilds/{guild_id}/auto-moderation/rules/{rule_id}">;
  "PATCH /guilds/{guild_id}/auto-moderation/rules/{rule_id}": DiscordHttpApiOperationInput<"PATCH /guilds/{guild_id}/auto-moderation/rules/{rule_id}">;
  "GET /guilds/{guild_id}/bans": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/bans">;
  "GET /guilds/{guild_id}/bans/{user_id}": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/bans/{user_id}">;
  "PUT /guilds/{guild_id}/bans/{user_id}": DiscordHttpApiOperationInput<"PUT /guilds/{guild_id}/bans/{user_id}">;
  "DELETE /guilds/{guild_id}/bans/{user_id}": DiscordHttpApiOperationInput<"DELETE /guilds/{guild_id}/bans/{user_id}">;
  "POST /guilds/{guild_id}/bulk-ban": DiscordHttpApiOperationInput<"POST /guilds/{guild_id}/bulk-ban">;
  "GET /guilds/{guild_id}/channels": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/channels">;
  "POST /guilds/{guild_id}/channels": DiscordHttpApiOperationInput<"POST /guilds/{guild_id}/channels">;
  "PATCH /guilds/{guild_id}/channels": DiscordHttpApiOperationInput<"PATCH /guilds/{guild_id}/channels">;
  "GET /guilds/{guild_id}/emojis": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/emojis">;
  "POST /guilds/{guild_id}/emojis": DiscordHttpApiOperationInput<"POST /guilds/{guild_id}/emojis">;
  "GET /guilds/{guild_id}/emojis/{emoji_id}": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/emojis/{emoji_id}">;
  "DELETE /guilds/{guild_id}/emojis/{emoji_id}": DiscordHttpApiOperationInput<"DELETE /guilds/{guild_id}/emojis/{emoji_id}">;
  "PATCH /guilds/{guild_id}/emojis/{emoji_id}": DiscordHttpApiOperationInput<"PATCH /guilds/{guild_id}/emojis/{emoji_id}">;
  "PUT /guilds/{guild_id}/incident-actions": DiscordHttpApiOperationInput<"PUT /guilds/{guild_id}/incident-actions">;
  "GET /guilds/{guild_id}/integrations": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/integrations">;
  "DELETE /guilds/{guild_id}/integrations/{integration_id}": DiscordHttpApiOperationInput<"DELETE /guilds/{guild_id}/integrations/{integration_id}">;
  "GET /guilds/{guild_id}/invites": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/invites">;
  "GET /guilds/{guild_id}/members": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/members">;
  "PATCH /guilds/{guild_id}/members/@me": DiscordHttpApiOperationInput<"PATCH /guilds/{guild_id}/members/@me">;
  "GET /guilds/{guild_id}/members/search": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/members/search">;
  "GET /guilds/{guild_id}/members/{user_id}": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/members/{user_id}">;
  "PUT /guilds/{guild_id}/members/{user_id}": DiscordHttpApiOperationInput<"PUT /guilds/{guild_id}/members/{user_id}">;
  "DELETE /guilds/{guild_id}/members/{user_id}": DiscordHttpApiOperationInput<"DELETE /guilds/{guild_id}/members/{user_id}">;
  "PATCH /guilds/{guild_id}/members/{user_id}": DiscordHttpApiOperationInput<"PATCH /guilds/{guild_id}/members/{user_id}">;
  "PUT /guilds/{guild_id}/members/{user_id}/roles/{role_id}": DiscordHttpApiOperationInput<"PUT /guilds/{guild_id}/members/{user_id}/roles/{role_id}">;
  "DELETE /guilds/{guild_id}/members/{user_id}/roles/{role_id}": DiscordHttpApiOperationInput<"DELETE /guilds/{guild_id}/members/{user_id}/roles/{role_id}">;
  "GET /guilds/{guild_id}/messages/search": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/messages/search">;
  "GET /guilds/{guild_id}/new-member-welcome": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/new-member-welcome">;
  "GET /guilds/{guild_id}/onboarding": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/onboarding">;
  "PUT /guilds/{guild_id}/onboarding": DiscordHttpApiOperationInput<"PUT /guilds/{guild_id}/onboarding">;
  "GET /guilds/{guild_id}/preview": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/preview">;
  "GET /guilds/{guild_id}/prune": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/prune">;
  "POST /guilds/{guild_id}/prune": DiscordHttpApiOperationInput<"POST /guilds/{guild_id}/prune">;
  "GET /guilds/{guild_id}/regions": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/regions">;
  "GET /guilds/{guild_id}/requests": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/requests">;
  "PATCH /guilds/{guild_id}/requests/{request_id}": DiscordHttpApiOperationInput<"PATCH /guilds/{guild_id}/requests/{request_id}">;
  "GET /guilds/{guild_id}/roles": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/roles">;
  "POST /guilds/{guild_id}/roles": DiscordHttpApiOperationInput<"POST /guilds/{guild_id}/roles">;
  "PATCH /guilds/{guild_id}/roles": DiscordHttpApiOperationInput<"PATCH /guilds/{guild_id}/roles">;
  "GET /guilds/{guild_id}/roles/member-counts": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/roles/member-counts">;
  "GET /guilds/{guild_id}/roles/{role_id}": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/roles/{role_id}">;
  "DELETE /guilds/{guild_id}/roles/{role_id}": DiscordHttpApiOperationInput<"DELETE /guilds/{guild_id}/roles/{role_id}">;
  "PATCH /guilds/{guild_id}/roles/{role_id}": DiscordHttpApiOperationInput<"PATCH /guilds/{guild_id}/roles/{role_id}">;
  "GET /guilds/{guild_id}/scheduled-events": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/scheduled-events">;
  "POST /guilds/{guild_id}/scheduled-events": DiscordHttpApiOperationInput<"POST /guilds/{guild_id}/scheduled-events">;
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}">;
  "DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": DiscordHttpApiOperationInput<"DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}">;
  "PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": DiscordHttpApiOperationInput<"PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}">;
  "POST /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions": DiscordHttpApiOperationInput<"POST /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions">;
  "DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}": DiscordHttpApiOperationInput<"DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}">;
  "PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}": DiscordHttpApiOperationInput<"PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}">;
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users">;
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users/counts": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users/counts">;
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/{guild_scheduled_event_exception_id}/users": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/{guild_scheduled_event_exception_id}/users">;
  "GET /guilds/{guild_id}/soundboard-sounds": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/soundboard-sounds">;
  "POST /guilds/{guild_id}/soundboard-sounds": DiscordHttpApiOperationInput<"POST /guilds/{guild_id}/soundboard-sounds">;
  "GET /guilds/{guild_id}/soundboard-sounds/{sound_id}": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/soundboard-sounds/{sound_id}">;
  "DELETE /guilds/{guild_id}/soundboard-sounds/{sound_id}": DiscordHttpApiOperationInput<"DELETE /guilds/{guild_id}/soundboard-sounds/{sound_id}">;
  "PATCH /guilds/{guild_id}/soundboard-sounds/{sound_id}": DiscordHttpApiOperationInput<"PATCH /guilds/{guild_id}/soundboard-sounds/{sound_id}">;
  "GET /guilds/{guild_id}/stickers": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/stickers">;
  "POST /guilds/{guild_id}/stickers": DiscordHttpApiOperationInput<"POST /guilds/{guild_id}/stickers">;
  "GET /guilds/{guild_id}/stickers/{sticker_id}": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/stickers/{sticker_id}">;
  "DELETE /guilds/{guild_id}/stickers/{sticker_id}": DiscordHttpApiOperationInput<"DELETE /guilds/{guild_id}/stickers/{sticker_id}">;
  "PATCH /guilds/{guild_id}/stickers/{sticker_id}": DiscordHttpApiOperationInput<"PATCH /guilds/{guild_id}/stickers/{sticker_id}">;
  "GET /guilds/{guild_id}/templates": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/templates">;
  "POST /guilds/{guild_id}/templates": DiscordHttpApiOperationInput<"POST /guilds/{guild_id}/templates">;
  "PUT /guilds/{guild_id}/templates/{code}": DiscordHttpApiOperationInput<"PUT /guilds/{guild_id}/templates/{code}">;
  "DELETE /guilds/{guild_id}/templates/{code}": DiscordHttpApiOperationInput<"DELETE /guilds/{guild_id}/templates/{code}">;
  "PATCH /guilds/{guild_id}/templates/{code}": DiscordHttpApiOperationInput<"PATCH /guilds/{guild_id}/templates/{code}">;
  "GET /guilds/{guild_id}/threads/active": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/threads/active">;
  "GET /guilds/{guild_id}/vanity-url": DiscordHttpApiOperationInput<"GET /guilds/{guild_id}/vanity-url">;
}

export interface DiscordHttpApiGuilds01GeneratedClient {
  GetGuildTemplate(...args: DiscordHttpApiOperationArgs<"GET /guilds/templates/{code}">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/templates/{code}"]>;
  GetGuild(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}"]>;
  UpdateGuild(...args: DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /guilds/{guild_id}"]>;
  ListGuildAuditLogEntries(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/audit-logs">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/audit-logs"]>;
  ListAutoModerationRules(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/auto-moderation/rules">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/auto-moderation/rules"]>;
  CreateAutoModerationRule(...args: DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/auto-moderation/rules">): Promise<DiscordHttpApiOperationResponseMap["POST /guilds/{guild_id}/auto-moderation/rules"]>;
  GetAutoModerationRule(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/auto-moderation/rules/{rule_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/auto-moderation/rules/{rule_id}"]>;
  DeleteAutoModerationRule(...args: DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/auto-moderation/rules/{rule_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /guilds/{guild_id}/auto-moderation/rules/{rule_id}"]>;
  UpdateAutoModerationRule(...args: DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/auto-moderation/rules/{rule_id}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /guilds/{guild_id}/auto-moderation/rules/{rule_id}"]>;
  ListGuildBans(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/bans">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/bans"]>;
  GetGuildBan(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/bans/{user_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/bans/{user_id}"]>;
  BanUserFromGuild(...args: DiscordHttpApiOperationArgs<"PUT /guilds/{guild_id}/bans/{user_id}">): Promise<DiscordHttpApiOperationResponseMap["PUT /guilds/{guild_id}/bans/{user_id}"]>;
  UnbanUserFromGuild(...args: DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/bans/{user_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /guilds/{guild_id}/bans/{user_id}"]>;
  BulkBanUsersFromGuild(...args: DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/bulk-ban">): Promise<DiscordHttpApiOperationResponseMap["POST /guilds/{guild_id}/bulk-ban"]>;
  ListGuildChannels(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/channels">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/channels"]>;
  CreateGuildChannel(...args: DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/channels">): Promise<DiscordHttpApiOperationResponseMap["POST /guilds/{guild_id}/channels"]>;
  BulkUpdateGuildChannels(...args: DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/channels">): Promise<DiscordHttpApiOperationResponseMap["PATCH /guilds/{guild_id}/channels"]>;
  ListGuildEmojis(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/emojis">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/emojis"]>;
  CreateGuildEmoji(...args: DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/emojis">): Promise<DiscordHttpApiOperationResponseMap["POST /guilds/{guild_id}/emojis"]>;
  GetGuildEmoji(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/emojis/{emoji_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/emojis/{emoji_id}"]>;
  DeleteGuildEmoji(...args: DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/emojis/{emoji_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /guilds/{guild_id}/emojis/{emoji_id}"]>;
  UpdateGuildEmoji(...args: DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/emojis/{emoji_id}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /guilds/{guild_id}/emojis/{emoji_id}"]>;
  UpdateGuildIncidentActions(...args: DiscordHttpApiOperationArgs<"PUT /guilds/{guild_id}/incident-actions">): Promise<DiscordHttpApiOperationResponseMap["PUT /guilds/{guild_id}/incident-actions"]>;
  ListGuildIntegrations(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/integrations">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/integrations"]>;
  DeleteGuildIntegration(...args: DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/integrations/{integration_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /guilds/{guild_id}/integrations/{integration_id}"]>;
  ListGuildInvites(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/invites">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/invites"]>;
  ListGuildMembers(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/members">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/members"]>;
  UpdateMyGuildMember(...args: DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/members/@me">): Promise<DiscordHttpApiOperationResponseMap["PATCH /guilds/{guild_id}/members/@me"]>;
  SearchGuildMembers(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/members/search">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/members/search"]>;
  GetGuildMember(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/members/{user_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/members/{user_id}"]>;
  AddGuildMember(...args: DiscordHttpApiOperationArgs<"PUT /guilds/{guild_id}/members/{user_id}">): Promise<DiscordHttpApiOperationResponseMap["PUT /guilds/{guild_id}/members/{user_id}"]>;
  DeleteGuildMember(...args: DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/members/{user_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /guilds/{guild_id}/members/{user_id}"]>;
  UpdateGuildMember(...args: DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/members/{user_id}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /guilds/{guild_id}/members/{user_id}"]>;
  AddGuildMemberRole(...args: DiscordHttpApiOperationArgs<"PUT /guilds/{guild_id}/members/{user_id}/roles/{role_id}">): Promise<DiscordHttpApiOperationResponseMap["PUT /guilds/{guild_id}/members/{user_id}/roles/{role_id}"]>;
  DeleteGuildMemberRole(...args: DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/members/{user_id}/roles/{role_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /guilds/{guild_id}/members/{user_id}/roles/{role_id}"]>;
  GuildSearch(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/messages/search">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/messages/search"]>;
  GetGuildNewMemberWelcome(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/new-member-welcome">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/new-member-welcome"]>;
  GetGuildsOnboarding(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/onboarding">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/onboarding"]>;
  PutGuildsOnboarding(...args: DiscordHttpApiOperationArgs<"PUT /guilds/{guild_id}/onboarding">): Promise<DiscordHttpApiOperationResponseMap["PUT /guilds/{guild_id}/onboarding"]>;
  GetGuildPreview(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/preview">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/preview"]>;
  PreviewPruneGuild(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/prune">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/prune"]>;
  PruneGuild(...args: DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/prune">): Promise<DiscordHttpApiOperationResponseMap["POST /guilds/{guild_id}/prune"]>;
  ListGuildVoiceRegions(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/regions">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/regions"]>;
  GetGuildJoinRequests(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/requests">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/requests"]>;
  ActionGuildJoinRequest(...args: DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/requests/{request_id}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /guilds/{guild_id}/requests/{request_id}"]>;
  ListGuildRoles(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/roles">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/roles"]>;
  CreateGuildRole(...args: DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/roles">): Promise<DiscordHttpApiOperationResponseMap["POST /guilds/{guild_id}/roles"]>;
  BulkUpdateGuildRoles(...args: DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/roles">): Promise<DiscordHttpApiOperationResponseMap["PATCH /guilds/{guild_id}/roles"]>;
  GuildRoleMemberCounts(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/roles/member-counts">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/roles/member-counts"]>;
  GetGuildRole(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/roles/{role_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/roles/{role_id}"]>;
  DeleteGuildRole(...args: DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/roles/{role_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /guilds/{guild_id}/roles/{role_id}"]>;
  UpdateGuildRole(...args: DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/roles/{role_id}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /guilds/{guild_id}/roles/{role_id}"]>;
  ListGuildScheduledEvents(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/scheduled-events">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/scheduled-events"]>;
  CreateGuildScheduledEvent(...args: DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/scheduled-events">): Promise<DiscordHttpApiOperationResponseMap["POST /guilds/{guild_id}/scheduled-events"]>;
  GetGuildScheduledEvent(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}"]>;
  DeleteGuildScheduledEvent(...args: DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}"]>;
  UpdateGuildScheduledEvent(...args: DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}"]>;
  CreateGuildScheduledEventException(...args: DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions">): Promise<DiscordHttpApiOperationResponseMap["POST /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions"]>;
  DeleteGuildScheduledEventException(...args: DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}"]>;
  UpdateGuildScheduledEventException(...args: DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}"]>;
  ListGuildScheduledEventUsers(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users"]>;
  CountGuildScheduledEventUsers(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users/counts">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users/counts"]>;
  ListGuildScheduledEventExceptionUsers(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/{guild_scheduled_event_exception_id}/users">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/{guild_scheduled_event_exception_id}/users"]>;
  ListGuildSoundboardSounds(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/soundboard-sounds">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/soundboard-sounds"]>;
  CreateGuildSoundboardSound(...args: DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/soundboard-sounds">): Promise<DiscordHttpApiOperationResponseMap["POST /guilds/{guild_id}/soundboard-sounds"]>;
  GetGuildSoundboardSound(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/soundboard-sounds/{sound_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/soundboard-sounds/{sound_id}"]>;
  DeleteGuildSoundboardSound(...args: DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/soundboard-sounds/{sound_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /guilds/{guild_id}/soundboard-sounds/{sound_id}"]>;
  UpdateGuildSoundboardSound(...args: DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/soundboard-sounds/{sound_id}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /guilds/{guild_id}/soundboard-sounds/{sound_id}"]>;
  ListGuildStickers(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/stickers">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/stickers"]>;
  CreateGuildSticker(...args: DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/stickers">): Promise<DiscordHttpApiOperationResponseMap["POST /guilds/{guild_id}/stickers"]>;
  GetGuildSticker(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/stickers/{sticker_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/stickers/{sticker_id}"]>;
  DeleteGuildSticker(...args: DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/stickers/{sticker_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /guilds/{guild_id}/stickers/{sticker_id}"]>;
  UpdateGuildSticker(...args: DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/stickers/{sticker_id}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /guilds/{guild_id}/stickers/{sticker_id}"]>;
  ListGuildTemplates(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/templates">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/templates"]>;
  CreateGuildTemplate(...args: DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/templates">): Promise<DiscordHttpApiOperationResponseMap["POST /guilds/{guild_id}/templates"]>;
  SyncGuildTemplate(...args: DiscordHttpApiOperationArgs<"PUT /guilds/{guild_id}/templates/{code}">): Promise<DiscordHttpApiOperationResponseMap["PUT /guilds/{guild_id}/templates/{code}"]>;
  DeleteGuildTemplate(...args: DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/templates/{code}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /guilds/{guild_id}/templates/{code}"]>;
  UpdateGuildTemplate(...args: DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/templates/{code}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /guilds/{guild_id}/templates/{code}"]>;
  GetActiveGuildThreads(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/threads/active">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/threads/active"]>;
  GetGuildVanityUrl(...args: DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/vanity-url">): Promise<DiscordHttpApiOperationResponseMap["GET /guilds/{guild_id}/vanity-url"]>;
}

export const DiscordHttpApiGuilds01GeneratedFunctionNames = [
  "GetGuildTemplate",
  "GetGuild",
  "UpdateGuild",
  "ListGuildAuditLogEntries",
  "ListAutoModerationRules",
  "CreateAutoModerationRule",
  "GetAutoModerationRule",
  "DeleteAutoModerationRule",
  "UpdateAutoModerationRule",
  "ListGuildBans",
  "GetGuildBan",
  "BanUserFromGuild",
  "UnbanUserFromGuild",
  "BulkBanUsersFromGuild",
  "ListGuildChannels",
  "CreateGuildChannel",
  "BulkUpdateGuildChannels",
  "ListGuildEmojis",
  "CreateGuildEmoji",
  "GetGuildEmoji",
  "DeleteGuildEmoji",
  "UpdateGuildEmoji",
  "UpdateGuildIncidentActions",
  "ListGuildIntegrations",
  "DeleteGuildIntegration",
  "ListGuildInvites",
  "ListGuildMembers",
  "UpdateMyGuildMember",
  "SearchGuildMembers",
  "GetGuildMember",
  "AddGuildMember",
  "DeleteGuildMember",
  "UpdateGuildMember",
  "AddGuildMemberRole",
  "DeleteGuildMemberRole",
  "GuildSearch",
  "GetGuildNewMemberWelcome",
  "GetGuildsOnboarding",
  "PutGuildsOnboarding",
  "GetGuildPreview",
  "PreviewPruneGuild",
  "PruneGuild",
  "ListGuildVoiceRegions",
  "GetGuildJoinRequests",
  "ActionGuildJoinRequest",
  "ListGuildRoles",
  "CreateGuildRole",
  "BulkUpdateGuildRoles",
  "GuildRoleMemberCounts",
  "GetGuildRole",
  "DeleteGuildRole",
  "UpdateGuildRole",
  "ListGuildScheduledEvents",
  "CreateGuildScheduledEvent",
  "GetGuildScheduledEvent",
  "DeleteGuildScheduledEvent",
  "UpdateGuildScheduledEvent",
  "CreateGuildScheduledEventException",
  "DeleteGuildScheduledEventException",
  "UpdateGuildScheduledEventException",
  "ListGuildScheduledEventUsers",
  "CountGuildScheduledEventUsers",
  "ListGuildScheduledEventExceptionUsers",
  "ListGuildSoundboardSounds",
  "CreateGuildSoundboardSound",
  "GetGuildSoundboardSound",
  "DeleteGuildSoundboardSound",
  "UpdateGuildSoundboardSound",
  "ListGuildStickers",
  "CreateGuildSticker",
  "GetGuildSticker",
  "DeleteGuildSticker",
  "UpdateGuildSticker",
  "ListGuildTemplates",
  "CreateGuildTemplate",
  "SyncGuildTemplate",
  "DeleteGuildTemplate",
  "UpdateGuildTemplate",
  "GetActiveGuildThreads",
  "GetGuildVanityUrl"
] as const satisfies readonly (keyof DiscordHttpApiGuilds01GeneratedClient)[];

export function createDiscordHttpApiGuilds01GeneratedClient(
  callOperation: DiscordHttpApiGeneratedOperationCaller,
): DiscordHttpApiGuilds01GeneratedClient {
  return {
    GetGuildTemplate: (...args) => callOperation("GET /guilds/templates/{code}", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/templates/{code}">)),
    GetGuild: (...args) => callOperation("GET /guilds/{guild_id}", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}">)),
    UpdateGuild: (...args) => callOperation("PATCH /guilds/{guild_id}", ...(args as DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}">)),
    ListGuildAuditLogEntries: (...args) => callOperation("GET /guilds/{guild_id}/audit-logs", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/audit-logs">)),
    ListAutoModerationRules: (...args) => callOperation("GET /guilds/{guild_id}/auto-moderation/rules", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/auto-moderation/rules">)),
    CreateAutoModerationRule: (...args) => callOperation("POST /guilds/{guild_id}/auto-moderation/rules", ...(args as DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/auto-moderation/rules">)),
    GetAutoModerationRule: (...args) => callOperation("GET /guilds/{guild_id}/auto-moderation/rules/{rule_id}", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/auto-moderation/rules/{rule_id}">)),
    DeleteAutoModerationRule: (...args) => callOperation("DELETE /guilds/{guild_id}/auto-moderation/rules/{rule_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/auto-moderation/rules/{rule_id}">)),
    UpdateAutoModerationRule: (...args) => callOperation("PATCH /guilds/{guild_id}/auto-moderation/rules/{rule_id}", ...(args as DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/auto-moderation/rules/{rule_id}">)),
    ListGuildBans: (...args) => callOperation("GET /guilds/{guild_id}/bans", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/bans">)),
    GetGuildBan: (...args) => callOperation("GET /guilds/{guild_id}/bans/{user_id}", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/bans/{user_id}">)),
    BanUserFromGuild: (...args) => callOperation("PUT /guilds/{guild_id}/bans/{user_id}", ...(args as DiscordHttpApiOperationArgs<"PUT /guilds/{guild_id}/bans/{user_id}">)),
    UnbanUserFromGuild: (...args) => callOperation("DELETE /guilds/{guild_id}/bans/{user_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/bans/{user_id}">)),
    BulkBanUsersFromGuild: (...args) => callOperation("POST /guilds/{guild_id}/bulk-ban", ...(args as DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/bulk-ban">)),
    ListGuildChannels: (...args) => callOperation("GET /guilds/{guild_id}/channels", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/channels">)),
    CreateGuildChannel: (...args) => callOperation("POST /guilds/{guild_id}/channels", ...(args as DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/channels">)),
    BulkUpdateGuildChannels: (...args) => callOperation("PATCH /guilds/{guild_id}/channels", ...(args as DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/channels">)),
    ListGuildEmojis: (...args) => callOperation("GET /guilds/{guild_id}/emojis", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/emojis">)),
    CreateGuildEmoji: (...args) => callOperation("POST /guilds/{guild_id}/emojis", ...(args as DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/emojis">)),
    GetGuildEmoji: (...args) => callOperation("GET /guilds/{guild_id}/emojis/{emoji_id}", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/emojis/{emoji_id}">)),
    DeleteGuildEmoji: (...args) => callOperation("DELETE /guilds/{guild_id}/emojis/{emoji_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/emojis/{emoji_id}">)),
    UpdateGuildEmoji: (...args) => callOperation("PATCH /guilds/{guild_id}/emojis/{emoji_id}", ...(args as DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/emojis/{emoji_id}">)),
    UpdateGuildIncidentActions: (...args) => callOperation("PUT /guilds/{guild_id}/incident-actions", ...(args as DiscordHttpApiOperationArgs<"PUT /guilds/{guild_id}/incident-actions">)),
    ListGuildIntegrations: (...args) => callOperation("GET /guilds/{guild_id}/integrations", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/integrations">)),
    DeleteGuildIntegration: (...args) => callOperation("DELETE /guilds/{guild_id}/integrations/{integration_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/integrations/{integration_id}">)),
    ListGuildInvites: (...args) => callOperation("GET /guilds/{guild_id}/invites", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/invites">)),
    ListGuildMembers: (...args) => callOperation("GET /guilds/{guild_id}/members", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/members">)),
    UpdateMyGuildMember: (...args) => callOperation("PATCH /guilds/{guild_id}/members/@me", ...(args as DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/members/@me">)),
    SearchGuildMembers: (...args) => callOperation("GET /guilds/{guild_id}/members/search", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/members/search">)),
    GetGuildMember: (...args) => callOperation("GET /guilds/{guild_id}/members/{user_id}", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/members/{user_id}">)),
    AddGuildMember: (...args) => callOperation("PUT /guilds/{guild_id}/members/{user_id}", ...(args as DiscordHttpApiOperationArgs<"PUT /guilds/{guild_id}/members/{user_id}">)),
    DeleteGuildMember: (...args) => callOperation("DELETE /guilds/{guild_id}/members/{user_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/members/{user_id}">)),
    UpdateGuildMember: (...args) => callOperation("PATCH /guilds/{guild_id}/members/{user_id}", ...(args as DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/members/{user_id}">)),
    AddGuildMemberRole: (...args) => callOperation("PUT /guilds/{guild_id}/members/{user_id}/roles/{role_id}", ...(args as DiscordHttpApiOperationArgs<"PUT /guilds/{guild_id}/members/{user_id}/roles/{role_id}">)),
    DeleteGuildMemberRole: (...args) => callOperation("DELETE /guilds/{guild_id}/members/{user_id}/roles/{role_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/members/{user_id}/roles/{role_id}">)),
    GuildSearch: (...args) => callOperation("GET /guilds/{guild_id}/messages/search", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/messages/search">)),
    GetGuildNewMemberWelcome: (...args) => callOperation("GET /guilds/{guild_id}/new-member-welcome", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/new-member-welcome">)),
    GetGuildsOnboarding: (...args) => callOperation("GET /guilds/{guild_id}/onboarding", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/onboarding">)),
    PutGuildsOnboarding: (...args) => callOperation("PUT /guilds/{guild_id}/onboarding", ...(args as DiscordHttpApiOperationArgs<"PUT /guilds/{guild_id}/onboarding">)),
    GetGuildPreview: (...args) => callOperation("GET /guilds/{guild_id}/preview", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/preview">)),
    PreviewPruneGuild: (...args) => callOperation("GET /guilds/{guild_id}/prune", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/prune">)),
    PruneGuild: (...args) => callOperation("POST /guilds/{guild_id}/prune", ...(args as DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/prune">)),
    ListGuildVoiceRegions: (...args) => callOperation("GET /guilds/{guild_id}/regions", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/regions">)),
    GetGuildJoinRequests: (...args) => callOperation("GET /guilds/{guild_id}/requests", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/requests">)),
    ActionGuildJoinRequest: (...args) => callOperation("PATCH /guilds/{guild_id}/requests/{request_id}", ...(args as DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/requests/{request_id}">)),
    ListGuildRoles: (...args) => callOperation("GET /guilds/{guild_id}/roles", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/roles">)),
    CreateGuildRole: (...args) => callOperation("POST /guilds/{guild_id}/roles", ...(args as DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/roles">)),
    BulkUpdateGuildRoles: (...args) => callOperation("PATCH /guilds/{guild_id}/roles", ...(args as DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/roles">)),
    GuildRoleMemberCounts: (...args) => callOperation("GET /guilds/{guild_id}/roles/member-counts", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/roles/member-counts">)),
    GetGuildRole: (...args) => callOperation("GET /guilds/{guild_id}/roles/{role_id}", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/roles/{role_id}">)),
    DeleteGuildRole: (...args) => callOperation("DELETE /guilds/{guild_id}/roles/{role_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/roles/{role_id}">)),
    UpdateGuildRole: (...args) => callOperation("PATCH /guilds/{guild_id}/roles/{role_id}", ...(args as DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/roles/{role_id}">)),
    ListGuildScheduledEvents: (...args) => callOperation("GET /guilds/{guild_id}/scheduled-events", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/scheduled-events">)),
    CreateGuildScheduledEvent: (...args) => callOperation("POST /guilds/{guild_id}/scheduled-events", ...(args as DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/scheduled-events">)),
    GetGuildScheduledEvent: (...args) => callOperation("GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}">)),
    DeleteGuildScheduledEvent: (...args) => callOperation("DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}">)),
    UpdateGuildScheduledEvent: (...args) => callOperation("PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}", ...(args as DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}">)),
    CreateGuildScheduledEventException: (...args) => callOperation("POST /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions", ...(args as DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions">)),
    DeleteGuildScheduledEventException: (...args) => callOperation("DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}">)),
    UpdateGuildScheduledEventException: (...args) => callOperation("PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}", ...(args as DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}">)),
    ListGuildScheduledEventUsers: (...args) => callOperation("GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users">)),
    CountGuildScheduledEventUsers: (...args) => callOperation("GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users/counts", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users/counts">)),
    ListGuildScheduledEventExceptionUsers: (...args) => callOperation("GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/{guild_scheduled_event_exception_id}/users", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/{guild_scheduled_event_exception_id}/users">)),
    ListGuildSoundboardSounds: (...args) => callOperation("GET /guilds/{guild_id}/soundboard-sounds", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/soundboard-sounds">)),
    CreateGuildSoundboardSound: (...args) => callOperation("POST /guilds/{guild_id}/soundboard-sounds", ...(args as DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/soundboard-sounds">)),
    GetGuildSoundboardSound: (...args) => callOperation("GET /guilds/{guild_id}/soundboard-sounds/{sound_id}", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/soundboard-sounds/{sound_id}">)),
    DeleteGuildSoundboardSound: (...args) => callOperation("DELETE /guilds/{guild_id}/soundboard-sounds/{sound_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/soundboard-sounds/{sound_id}">)),
    UpdateGuildSoundboardSound: (...args) => callOperation("PATCH /guilds/{guild_id}/soundboard-sounds/{sound_id}", ...(args as DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/soundboard-sounds/{sound_id}">)),
    ListGuildStickers: (...args) => callOperation("GET /guilds/{guild_id}/stickers", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/stickers">)),
    CreateGuildSticker: (...args) => callOperation("POST /guilds/{guild_id}/stickers", ...(args as DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/stickers">)),
    GetGuildSticker: (...args) => callOperation("GET /guilds/{guild_id}/stickers/{sticker_id}", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/stickers/{sticker_id}">)),
    DeleteGuildSticker: (...args) => callOperation("DELETE /guilds/{guild_id}/stickers/{sticker_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/stickers/{sticker_id}">)),
    UpdateGuildSticker: (...args) => callOperation("PATCH /guilds/{guild_id}/stickers/{sticker_id}", ...(args as DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/stickers/{sticker_id}">)),
    ListGuildTemplates: (...args) => callOperation("GET /guilds/{guild_id}/templates", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/templates">)),
    CreateGuildTemplate: (...args) => callOperation("POST /guilds/{guild_id}/templates", ...(args as DiscordHttpApiOperationArgs<"POST /guilds/{guild_id}/templates">)),
    SyncGuildTemplate: (...args) => callOperation("PUT /guilds/{guild_id}/templates/{code}", ...(args as DiscordHttpApiOperationArgs<"PUT /guilds/{guild_id}/templates/{code}">)),
    DeleteGuildTemplate: (...args) => callOperation("DELETE /guilds/{guild_id}/templates/{code}", ...(args as DiscordHttpApiOperationArgs<"DELETE /guilds/{guild_id}/templates/{code}">)),
    UpdateGuildTemplate: (...args) => callOperation("PATCH /guilds/{guild_id}/templates/{code}", ...(args as DiscordHttpApiOperationArgs<"PATCH /guilds/{guild_id}/templates/{code}">)),
    GetActiveGuildThreads: (...args) => callOperation("GET /guilds/{guild_id}/threads/active", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/threads/active">)),
    GetGuildVanityUrl: (...args) => callOperation("GET /guilds/{guild_id}/vanity-url", ...(args as DiscordHttpApiOperationArgs<"GET /guilds/{guild_id}/vanity-url">)),
  };
}
