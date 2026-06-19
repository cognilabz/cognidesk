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
export const DiscordHttpApiChannelsOperationKeys = [
  "GET /channels/{channel_id}",
  "DELETE /channels/{channel_id}",
  "PATCH /channels/{channel_id}",
  "POST /channels/{channel_id}/followers",
  "GET /channels/{channel_id}/invites",
  "POST /channels/{channel_id}/invites",
  "GET /channels/{channel_id}/messages",
  "POST /channels/{channel_id}/messages",
  "POST /channels/{channel_id}/messages/bulk-delete",
  "GET /channels/{channel_id}/messages/pins",
  "PUT /channels/{channel_id}/messages/pins/{message_id}",
  "DELETE /channels/{channel_id}/messages/pins/{message_id}",
  "GET /channels/{channel_id}/messages/{message_id}",
  "DELETE /channels/{channel_id}/messages/{message_id}",
  "PATCH /channels/{channel_id}/messages/{message_id}",
  "POST /channels/{channel_id}/messages/{message_id}/crosspost",
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions",
  "GET /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}",
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}",
  "PUT /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me",
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me",
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/{user_id}",
  "POST /channels/{channel_id}/messages/{message_id}/threads",
  "PUT /channels/{channel_id}/permissions/{overwrite_id}",
  "DELETE /channels/{channel_id}/permissions/{overwrite_id}",
  "GET /channels/{channel_id}/pins",
  "PUT /channels/{channel_id}/pins/{message_id}",
  "DELETE /channels/{channel_id}/pins/{message_id}",
  "GET /channels/{channel_id}/polls/{message_id}/answers/{answer_id}",
  "POST /channels/{channel_id}/polls/{message_id}/expire",
  "PUT /channels/{channel_id}/recipients/{user_id}",
  "DELETE /channels/{channel_id}/recipients/{user_id}",
  "POST /channels/{channel_id}/send-soundboard-sound",
  "GET /channels/{channel_id}/thread-members",
  "PUT /channels/{channel_id}/thread-members/@me",
  "DELETE /channels/{channel_id}/thread-members/@me",
  "GET /channels/{channel_id}/thread-members/{user_id}",
  "PUT /channels/{channel_id}/thread-members/{user_id}",
  "DELETE /channels/{channel_id}/thread-members/{user_id}",
  "POST /channels/{channel_id}/threads",
  "GET /channels/{channel_id}/threads/archived/private",
  "GET /channels/{channel_id}/threads/archived/public",
  "GET /channels/{channel_id}/threads/search",
  "POST /channels/{channel_id}/typing",
  "GET /channels/{channel_id}/users/@me/threads/archived/private",
  "PUT /channels/{channel_id}/voice-status",
  "GET /channels/{channel_id}/webhooks",
  "POST /channels/{channel_id}/webhooks"
] as const;
export type DiscordHttpApiChannelsOperationKey = typeof DiscordHttpApiChannelsOperationKeys[number];
// End hardened literal operation keys.

export interface DiscordHttpApiChannelsOperationPathParamMap {
  "GET /channels/{channel_id}": { "channel_id": DiscordHttpApiPathParamValue };
  "DELETE /channels/{channel_id}": { "channel_id": DiscordHttpApiPathParamValue };
  "PATCH /channels/{channel_id}": { "channel_id": DiscordHttpApiPathParamValue };
  "POST /channels/{channel_id}/followers": { "channel_id": DiscordHttpApiPathParamValue };
  "GET /channels/{channel_id}/invites": { "channel_id": DiscordHttpApiPathParamValue };
  "POST /channels/{channel_id}/invites": { "channel_id": DiscordHttpApiPathParamValue };
  "GET /channels/{channel_id}/messages": { "channel_id": DiscordHttpApiPathParamValue };
  "POST /channels/{channel_id}/messages": { "channel_id": DiscordHttpApiPathParamValue };
  "POST /channels/{channel_id}/messages/bulk-delete": { "channel_id": DiscordHttpApiPathParamValue };
  "GET /channels/{channel_id}/messages/pins": { "channel_id": DiscordHttpApiPathParamValue };
  "PUT /channels/{channel_id}/messages/pins/{message_id}": { "channel_id": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue };
  "DELETE /channels/{channel_id}/messages/pins/{message_id}": { "channel_id": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue };
  "GET /channels/{channel_id}/messages/{message_id}": { "channel_id": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue };
  "DELETE /channels/{channel_id}/messages/{message_id}": { "channel_id": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue };
  "PATCH /channels/{channel_id}/messages/{message_id}": { "channel_id": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue };
  "POST /channels/{channel_id}/messages/{message_id}/crosspost": { "channel_id": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue };
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions": { "channel_id": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue };
  "GET /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}": { "channel_id": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue; "emoji_name": DiscordHttpApiPathParamValue };
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}": { "channel_id": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue; "emoji_name": DiscordHttpApiPathParamValue };
  "PUT /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me": { "channel_id": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue; "emoji_name": DiscordHttpApiPathParamValue };
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me": { "channel_id": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue; "emoji_name": DiscordHttpApiPathParamValue };
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/{user_id}": { "channel_id": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue; "emoji_name": DiscordHttpApiPathParamValue; "user_id": DiscordHttpApiPathParamValue };
  "POST /channels/{channel_id}/messages/{message_id}/threads": { "channel_id": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue };
  "PUT /channels/{channel_id}/permissions/{overwrite_id}": { "channel_id": DiscordHttpApiPathParamValue; "overwrite_id": DiscordHttpApiPathParamValue };
  "DELETE /channels/{channel_id}/permissions/{overwrite_id}": { "channel_id": DiscordHttpApiPathParamValue; "overwrite_id": DiscordHttpApiPathParamValue };
  "GET /channels/{channel_id}/pins": { "channel_id": DiscordHttpApiPathParamValue };
  "PUT /channels/{channel_id}/pins/{message_id}": { "channel_id": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue };
  "DELETE /channels/{channel_id}/pins/{message_id}": { "channel_id": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue };
  "GET /channels/{channel_id}/polls/{message_id}/answers/{answer_id}": { "channel_id": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue; "answer_id": DiscordHttpApiPathParamValue };
  "POST /channels/{channel_id}/polls/{message_id}/expire": { "channel_id": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue };
  "PUT /channels/{channel_id}/recipients/{user_id}": { "channel_id": DiscordHttpApiPathParamValue; "user_id": DiscordHttpApiPathParamValue };
  "DELETE /channels/{channel_id}/recipients/{user_id}": { "channel_id": DiscordHttpApiPathParamValue; "user_id": DiscordHttpApiPathParamValue };
  "POST /channels/{channel_id}/send-soundboard-sound": { "channel_id": DiscordHttpApiPathParamValue };
  "GET /channels/{channel_id}/thread-members": { "channel_id": DiscordHttpApiPathParamValue };
  "PUT /channels/{channel_id}/thread-members/@me": { "channel_id": DiscordHttpApiPathParamValue };
  "DELETE /channels/{channel_id}/thread-members/@me": { "channel_id": DiscordHttpApiPathParamValue };
  "GET /channels/{channel_id}/thread-members/{user_id}": { "channel_id": DiscordHttpApiPathParamValue; "user_id": DiscordHttpApiPathParamValue };
  "PUT /channels/{channel_id}/thread-members/{user_id}": { "channel_id": DiscordHttpApiPathParamValue; "user_id": DiscordHttpApiPathParamValue };
  "DELETE /channels/{channel_id}/thread-members/{user_id}": { "channel_id": DiscordHttpApiPathParamValue; "user_id": DiscordHttpApiPathParamValue };
  "POST /channels/{channel_id}/threads": { "channel_id": DiscordHttpApiPathParamValue };
  "GET /channels/{channel_id}/threads/archived/private": { "channel_id": DiscordHttpApiPathParamValue };
  "GET /channels/{channel_id}/threads/archived/public": { "channel_id": DiscordHttpApiPathParamValue };
  "GET /channels/{channel_id}/threads/search": { "channel_id": DiscordHttpApiPathParamValue };
  "POST /channels/{channel_id}/typing": { "channel_id": DiscordHttpApiPathParamValue };
  "GET /channels/{channel_id}/users/@me/threads/archived/private": { "channel_id": DiscordHttpApiPathParamValue };
  "PUT /channels/{channel_id}/voice-status": { "channel_id": DiscordHttpApiPathParamValue };
  "GET /channels/{channel_id}/webhooks": { "channel_id": DiscordHttpApiPathParamValue };
  "POST /channels/{channel_id}/webhooks": { "channel_id": DiscordHttpApiPathParamValue };
}

export interface DiscordHttpApiChannelsOperationRequestMap {
  "GET /channels/{channel_id}": DiscordHttpApiOperationInput<"GET /channels/{channel_id}">;
  "DELETE /channels/{channel_id}": DiscordHttpApiOperationInput<"DELETE /channels/{channel_id}">;
  "PATCH /channels/{channel_id}": DiscordHttpApiOperationInput<"PATCH /channels/{channel_id}">;
  "POST /channels/{channel_id}/followers": DiscordHttpApiOperationInput<"POST /channels/{channel_id}/followers">;
  "GET /channels/{channel_id}/invites": DiscordHttpApiOperationInput<"GET /channels/{channel_id}/invites">;
  "POST /channels/{channel_id}/invites": DiscordHttpApiOperationInput<"POST /channels/{channel_id}/invites">;
  "GET /channels/{channel_id}/messages": DiscordHttpApiOperationInput<"GET /channels/{channel_id}/messages">;
  "POST /channels/{channel_id}/messages": DiscordHttpApiOperationInput<"POST /channels/{channel_id}/messages">;
  "POST /channels/{channel_id}/messages/bulk-delete": DiscordHttpApiOperationInput<"POST /channels/{channel_id}/messages/bulk-delete">;
  "GET /channels/{channel_id}/messages/pins": DiscordHttpApiOperationInput<"GET /channels/{channel_id}/messages/pins">;
  "PUT /channels/{channel_id}/messages/pins/{message_id}": DiscordHttpApiOperationInput<"PUT /channels/{channel_id}/messages/pins/{message_id}">;
  "DELETE /channels/{channel_id}/messages/pins/{message_id}": DiscordHttpApiOperationInput<"DELETE /channels/{channel_id}/messages/pins/{message_id}">;
  "GET /channels/{channel_id}/messages/{message_id}": DiscordHttpApiOperationInput<"GET /channels/{channel_id}/messages/{message_id}">;
  "DELETE /channels/{channel_id}/messages/{message_id}": DiscordHttpApiOperationInput<"DELETE /channels/{channel_id}/messages/{message_id}">;
  "PATCH /channels/{channel_id}/messages/{message_id}": DiscordHttpApiOperationInput<"PATCH /channels/{channel_id}/messages/{message_id}">;
  "POST /channels/{channel_id}/messages/{message_id}/crosspost": DiscordHttpApiOperationInput<"POST /channels/{channel_id}/messages/{message_id}/crosspost">;
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions": DiscordHttpApiOperationInput<"DELETE /channels/{channel_id}/messages/{message_id}/reactions">;
  "GET /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}": DiscordHttpApiOperationInput<"GET /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}">;
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}": DiscordHttpApiOperationInput<"DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}">;
  "PUT /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me": DiscordHttpApiOperationInput<"PUT /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me">;
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me": DiscordHttpApiOperationInput<"DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me">;
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/{user_id}": DiscordHttpApiOperationInput<"DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/{user_id}">;
  "POST /channels/{channel_id}/messages/{message_id}/threads": DiscordHttpApiOperationInput<"POST /channels/{channel_id}/messages/{message_id}/threads">;
  "PUT /channels/{channel_id}/permissions/{overwrite_id}": DiscordHttpApiOperationInput<"PUT /channels/{channel_id}/permissions/{overwrite_id}">;
  "DELETE /channels/{channel_id}/permissions/{overwrite_id}": DiscordHttpApiOperationInput<"DELETE /channels/{channel_id}/permissions/{overwrite_id}">;
  "GET /channels/{channel_id}/pins": DiscordHttpApiOperationInput<"GET /channels/{channel_id}/pins">;
  "PUT /channels/{channel_id}/pins/{message_id}": DiscordHttpApiOperationInput<"PUT /channels/{channel_id}/pins/{message_id}">;
  "DELETE /channels/{channel_id}/pins/{message_id}": DiscordHttpApiOperationInput<"DELETE /channels/{channel_id}/pins/{message_id}">;
  "GET /channels/{channel_id}/polls/{message_id}/answers/{answer_id}": DiscordHttpApiOperationInput<"GET /channels/{channel_id}/polls/{message_id}/answers/{answer_id}">;
  "POST /channels/{channel_id}/polls/{message_id}/expire": DiscordHttpApiOperationInput<"POST /channels/{channel_id}/polls/{message_id}/expire">;
  "PUT /channels/{channel_id}/recipients/{user_id}": DiscordHttpApiOperationInput<"PUT /channels/{channel_id}/recipients/{user_id}">;
  "DELETE /channels/{channel_id}/recipients/{user_id}": DiscordHttpApiOperationInput<"DELETE /channels/{channel_id}/recipients/{user_id}">;
  "POST /channels/{channel_id}/send-soundboard-sound": DiscordHttpApiOperationInput<"POST /channels/{channel_id}/send-soundboard-sound">;
  "GET /channels/{channel_id}/thread-members": DiscordHttpApiOperationInput<"GET /channels/{channel_id}/thread-members">;
  "PUT /channels/{channel_id}/thread-members/@me": DiscordHttpApiOperationInput<"PUT /channels/{channel_id}/thread-members/@me">;
  "DELETE /channels/{channel_id}/thread-members/@me": DiscordHttpApiOperationInput<"DELETE /channels/{channel_id}/thread-members/@me">;
  "GET /channels/{channel_id}/thread-members/{user_id}": DiscordHttpApiOperationInput<"GET /channels/{channel_id}/thread-members/{user_id}">;
  "PUT /channels/{channel_id}/thread-members/{user_id}": DiscordHttpApiOperationInput<"PUT /channels/{channel_id}/thread-members/{user_id}">;
  "DELETE /channels/{channel_id}/thread-members/{user_id}": DiscordHttpApiOperationInput<"DELETE /channels/{channel_id}/thread-members/{user_id}">;
  "POST /channels/{channel_id}/threads": DiscordHttpApiOperationInput<"POST /channels/{channel_id}/threads">;
  "GET /channels/{channel_id}/threads/archived/private": DiscordHttpApiOperationInput<"GET /channels/{channel_id}/threads/archived/private">;
  "GET /channels/{channel_id}/threads/archived/public": DiscordHttpApiOperationInput<"GET /channels/{channel_id}/threads/archived/public">;
  "GET /channels/{channel_id}/threads/search": DiscordHttpApiOperationInput<"GET /channels/{channel_id}/threads/search">;
  "POST /channels/{channel_id}/typing": DiscordHttpApiOperationInput<"POST /channels/{channel_id}/typing">;
  "GET /channels/{channel_id}/users/@me/threads/archived/private": DiscordHttpApiOperationInput<"GET /channels/{channel_id}/users/@me/threads/archived/private">;
  "PUT /channels/{channel_id}/voice-status": DiscordHttpApiOperationInput<"PUT /channels/{channel_id}/voice-status">;
  "GET /channels/{channel_id}/webhooks": DiscordHttpApiOperationInput<"GET /channels/{channel_id}/webhooks">;
  "POST /channels/{channel_id}/webhooks": DiscordHttpApiOperationInput<"POST /channels/{channel_id}/webhooks">;
}

export interface DiscordHttpApiChannelsGeneratedClient {
  GetChannel(...args: DiscordHttpApiOperationArgs<"GET /channels/{channel_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /channels/{channel_id}"]>;
  DeleteChannel(...args: DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /channels/{channel_id}"]>;
  UpdateChannel(...args: DiscordHttpApiOperationArgs<"PATCH /channels/{channel_id}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /channels/{channel_id}"]>;
  FollowChannel(...args: DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/followers">): Promise<DiscordHttpApiOperationResponseMap["POST /channels/{channel_id}/followers"]>;
  ListChannelInvites(...args: DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/invites">): Promise<DiscordHttpApiOperationResponseMap["GET /channels/{channel_id}/invites"]>;
  CreateChannelInvite(...args: DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/invites">): Promise<DiscordHttpApiOperationResponseMap["POST /channels/{channel_id}/invites"]>;
  ListMessages(...args: DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/messages">): Promise<DiscordHttpApiOperationResponseMap["GET /channels/{channel_id}/messages"]>;
  CreateMessage(...args: DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/messages">): Promise<DiscordHttpApiOperationResponseMap["POST /channels/{channel_id}/messages"]>;
  BulkDeleteMessages(...args: DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/messages/bulk-delete">): Promise<DiscordHttpApiOperationResponseMap["POST /channels/{channel_id}/messages/bulk-delete"]>;
  ListPins(...args: DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/messages/pins">): Promise<DiscordHttpApiOperationResponseMap["GET /channels/{channel_id}/messages/pins"]>;
  CreatePin(...args: DiscordHttpApiOperationArgs<"PUT /channels/{channel_id}/messages/pins/{message_id}">): Promise<DiscordHttpApiOperationResponseMap["PUT /channels/{channel_id}/messages/pins/{message_id}"]>;
  DeletePin(...args: DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/messages/pins/{message_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /channels/{channel_id}/messages/pins/{message_id}"]>;
  GetMessage(...args: DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/messages/{message_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /channels/{channel_id}/messages/{message_id}"]>;
  DeleteMessage(...args: DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/messages/{message_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /channels/{channel_id}/messages/{message_id}"]>;
  UpdateMessage(...args: DiscordHttpApiOperationArgs<"PATCH /channels/{channel_id}/messages/{message_id}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /channels/{channel_id}/messages/{message_id}"]>;
  CrosspostMessage(...args: DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/messages/{message_id}/crosspost">): Promise<DiscordHttpApiOperationResponseMap["POST /channels/{channel_id}/messages/{message_id}/crosspost"]>;
  DeleteAllMessageReactions(...args: DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/messages/{message_id}/reactions">): Promise<DiscordHttpApiOperationResponseMap["DELETE /channels/{channel_id}/messages/{message_id}/reactions"]>;
  ListMessageReactionsByEmoji(...args: DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}">): Promise<DiscordHttpApiOperationResponseMap["GET /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}"]>;
  DeleteAllMessageReactionsByEmoji(...args: DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}"]>;
  AddMyMessageReaction(...args: DiscordHttpApiOperationArgs<"PUT /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me">): Promise<DiscordHttpApiOperationResponseMap["PUT /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me"]>;
  DeleteMyMessageReaction(...args: DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me">): Promise<DiscordHttpApiOperationResponseMap["DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me"]>;
  DeleteUserMessageReaction(...args: DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/{user_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/{user_id}"]>;
  CreateThreadFromMessage(...args: DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/messages/{message_id}/threads">): Promise<DiscordHttpApiOperationResponseMap["POST /channels/{channel_id}/messages/{message_id}/threads"]>;
  SetChannelPermissionOverwrite(...args: DiscordHttpApiOperationArgs<"PUT /channels/{channel_id}/permissions/{overwrite_id}">): Promise<DiscordHttpApiOperationResponseMap["PUT /channels/{channel_id}/permissions/{overwrite_id}"]>;
  DeleteChannelPermissionOverwrite(...args: DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/permissions/{overwrite_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /channels/{channel_id}/permissions/{overwrite_id}"]>;
  DeprecatedListPins(...args: DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/pins">): Promise<DiscordHttpApiOperationResponseMap["GET /channels/{channel_id}/pins"]>;
  DeprecatedCreatePin(...args: DiscordHttpApiOperationArgs<"PUT /channels/{channel_id}/pins/{message_id}">): Promise<DiscordHttpApiOperationResponseMap["PUT /channels/{channel_id}/pins/{message_id}"]>;
  DeprecatedDeletePin(...args: DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/pins/{message_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /channels/{channel_id}/pins/{message_id}"]>;
  GetAnswerVoters(...args: DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/polls/{message_id}/answers/{answer_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /channels/{channel_id}/polls/{message_id}/answers/{answer_id}"]>;
  PollExpire(...args: DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/polls/{message_id}/expire">): Promise<DiscordHttpApiOperationResponseMap["POST /channels/{channel_id}/polls/{message_id}/expire"]>;
  AddGroupDmUser(...args: DiscordHttpApiOperationArgs<"PUT /channels/{channel_id}/recipients/{user_id}">): Promise<DiscordHttpApiOperationResponseMap["PUT /channels/{channel_id}/recipients/{user_id}"]>;
  DeleteGroupDmUser(...args: DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/recipients/{user_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /channels/{channel_id}/recipients/{user_id}"]>;
  SendSoundboardSound(...args: DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/send-soundboard-sound">): Promise<DiscordHttpApiOperationResponseMap["POST /channels/{channel_id}/send-soundboard-sound"]>;
  ListThreadMembers(...args: DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/thread-members">): Promise<DiscordHttpApiOperationResponseMap["GET /channels/{channel_id}/thread-members"]>;
  JoinThread(...args: DiscordHttpApiOperationArgs<"PUT /channels/{channel_id}/thread-members/@me">): Promise<DiscordHttpApiOperationResponseMap["PUT /channels/{channel_id}/thread-members/@me"]>;
  LeaveThread(...args: DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/thread-members/@me">): Promise<DiscordHttpApiOperationResponseMap["DELETE /channels/{channel_id}/thread-members/@me"]>;
  GetThreadMember(...args: DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/thread-members/{user_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /channels/{channel_id}/thread-members/{user_id}"]>;
  AddThreadMember(...args: DiscordHttpApiOperationArgs<"PUT /channels/{channel_id}/thread-members/{user_id}">): Promise<DiscordHttpApiOperationResponseMap["PUT /channels/{channel_id}/thread-members/{user_id}"]>;
  DeleteThreadMember(...args: DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/thread-members/{user_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /channels/{channel_id}/thread-members/{user_id}"]>;
  CreateThread(...args: DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/threads">): Promise<DiscordHttpApiOperationResponseMap["POST /channels/{channel_id}/threads"]>;
  ListPrivateArchivedThreads(...args: DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/threads/archived/private">): Promise<DiscordHttpApiOperationResponseMap["GET /channels/{channel_id}/threads/archived/private"]>;
  ListPublicArchivedThreads(...args: DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/threads/archived/public">): Promise<DiscordHttpApiOperationResponseMap["GET /channels/{channel_id}/threads/archived/public"]>;
  ThreadSearch(...args: DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/threads/search">): Promise<DiscordHttpApiOperationResponseMap["GET /channels/{channel_id}/threads/search"]>;
  TriggerTypingIndicator(...args: DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/typing">): Promise<DiscordHttpApiOperationResponseMap["POST /channels/{channel_id}/typing"]>;
  ListMyPrivateArchivedThreads(...args: DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/users/@me/threads/archived/private">): Promise<DiscordHttpApiOperationResponseMap["GET /channels/{channel_id}/users/@me/threads/archived/private"]>;
  UpdateVoiceChannelStatus(...args: DiscordHttpApiOperationArgs<"PUT /channels/{channel_id}/voice-status">): Promise<DiscordHttpApiOperationResponseMap["PUT /channels/{channel_id}/voice-status"]>;
  ListChannelWebhooks(...args: DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/webhooks">): Promise<DiscordHttpApiOperationResponseMap["GET /channels/{channel_id}/webhooks"]>;
  CreateWebhook(...args: DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/webhooks">): Promise<DiscordHttpApiOperationResponseMap["POST /channels/{channel_id}/webhooks"]>;
}

export const DiscordHttpApiChannelsGeneratedFunctionNames = [
  "GetChannel",
  "DeleteChannel",
  "UpdateChannel",
  "FollowChannel",
  "ListChannelInvites",
  "CreateChannelInvite",
  "ListMessages",
  "CreateMessage",
  "BulkDeleteMessages",
  "ListPins",
  "CreatePin",
  "DeletePin",
  "GetMessage",
  "DeleteMessage",
  "UpdateMessage",
  "CrosspostMessage",
  "DeleteAllMessageReactions",
  "ListMessageReactionsByEmoji",
  "DeleteAllMessageReactionsByEmoji",
  "AddMyMessageReaction",
  "DeleteMyMessageReaction",
  "DeleteUserMessageReaction",
  "CreateThreadFromMessage",
  "SetChannelPermissionOverwrite",
  "DeleteChannelPermissionOverwrite",
  "DeprecatedListPins",
  "DeprecatedCreatePin",
  "DeprecatedDeletePin",
  "GetAnswerVoters",
  "PollExpire",
  "AddGroupDmUser",
  "DeleteGroupDmUser",
  "SendSoundboardSound",
  "ListThreadMembers",
  "JoinThread",
  "LeaveThread",
  "GetThreadMember",
  "AddThreadMember",
  "DeleteThreadMember",
  "CreateThread",
  "ListPrivateArchivedThreads",
  "ListPublicArchivedThreads",
  "ThreadSearch",
  "TriggerTypingIndicator",
  "ListMyPrivateArchivedThreads",
  "UpdateVoiceChannelStatus",
  "ListChannelWebhooks",
  "CreateWebhook"
] as const satisfies readonly (keyof DiscordHttpApiChannelsGeneratedClient)[];

export function createDiscordHttpApiChannelsGeneratedClient(
  callOperation: DiscordHttpApiGeneratedOperationCaller,
): DiscordHttpApiChannelsGeneratedClient {
  return {
    GetChannel: (...args) => callOperation("GET /channels/{channel_id}", ...(args as DiscordHttpApiOperationArgs<"GET /channels/{channel_id}">)),
    DeleteChannel: (...args) => callOperation("DELETE /channels/{channel_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}">)),
    UpdateChannel: (...args) => callOperation("PATCH /channels/{channel_id}", ...(args as DiscordHttpApiOperationArgs<"PATCH /channels/{channel_id}">)),
    FollowChannel: (...args) => callOperation("POST /channels/{channel_id}/followers", ...(args as DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/followers">)),
    ListChannelInvites: (...args) => callOperation("GET /channels/{channel_id}/invites", ...(args as DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/invites">)),
    CreateChannelInvite: (...args) => callOperation("POST /channels/{channel_id}/invites", ...(args as DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/invites">)),
    ListMessages: (...args) => callOperation("GET /channels/{channel_id}/messages", ...(args as DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/messages">)),
    CreateMessage: (...args) => callOperation("POST /channels/{channel_id}/messages", ...(args as DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/messages">)),
    BulkDeleteMessages: (...args) => callOperation("POST /channels/{channel_id}/messages/bulk-delete", ...(args as DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/messages/bulk-delete">)),
    ListPins: (...args) => callOperation("GET /channels/{channel_id}/messages/pins", ...(args as DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/messages/pins">)),
    CreatePin: (...args) => callOperation("PUT /channels/{channel_id}/messages/pins/{message_id}", ...(args as DiscordHttpApiOperationArgs<"PUT /channels/{channel_id}/messages/pins/{message_id}">)),
    DeletePin: (...args) => callOperation("DELETE /channels/{channel_id}/messages/pins/{message_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/messages/pins/{message_id}">)),
    GetMessage: (...args) => callOperation("GET /channels/{channel_id}/messages/{message_id}", ...(args as DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/messages/{message_id}">)),
    DeleteMessage: (...args) => callOperation("DELETE /channels/{channel_id}/messages/{message_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/messages/{message_id}">)),
    UpdateMessage: (...args) => callOperation("PATCH /channels/{channel_id}/messages/{message_id}", ...(args as DiscordHttpApiOperationArgs<"PATCH /channels/{channel_id}/messages/{message_id}">)),
    CrosspostMessage: (...args) => callOperation("POST /channels/{channel_id}/messages/{message_id}/crosspost", ...(args as DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/messages/{message_id}/crosspost">)),
    DeleteAllMessageReactions: (...args) => callOperation("DELETE /channels/{channel_id}/messages/{message_id}/reactions", ...(args as DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/messages/{message_id}/reactions">)),
    ListMessageReactionsByEmoji: (...args) => callOperation("GET /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}", ...(args as DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}">)),
    DeleteAllMessageReactionsByEmoji: (...args) => callOperation("DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}", ...(args as DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}">)),
    AddMyMessageReaction: (...args) => callOperation("PUT /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me", ...(args as DiscordHttpApiOperationArgs<"PUT /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me">)),
    DeleteMyMessageReaction: (...args) => callOperation("DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me", ...(args as DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me">)),
    DeleteUserMessageReaction: (...args) => callOperation("DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/{user_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/{user_id}">)),
    CreateThreadFromMessage: (...args) => callOperation("POST /channels/{channel_id}/messages/{message_id}/threads", ...(args as DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/messages/{message_id}/threads">)),
    SetChannelPermissionOverwrite: (...args) => callOperation("PUT /channels/{channel_id}/permissions/{overwrite_id}", ...(args as DiscordHttpApiOperationArgs<"PUT /channels/{channel_id}/permissions/{overwrite_id}">)),
    DeleteChannelPermissionOverwrite: (...args) => callOperation("DELETE /channels/{channel_id}/permissions/{overwrite_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/permissions/{overwrite_id}">)),
    DeprecatedListPins: (...args) => callOperation("GET /channels/{channel_id}/pins", ...(args as DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/pins">)),
    DeprecatedCreatePin: (...args) => callOperation("PUT /channels/{channel_id}/pins/{message_id}", ...(args as DiscordHttpApiOperationArgs<"PUT /channels/{channel_id}/pins/{message_id}">)),
    DeprecatedDeletePin: (...args) => callOperation("DELETE /channels/{channel_id}/pins/{message_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/pins/{message_id}">)),
    GetAnswerVoters: (...args) => callOperation("GET /channels/{channel_id}/polls/{message_id}/answers/{answer_id}", ...(args as DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/polls/{message_id}/answers/{answer_id}">)),
    PollExpire: (...args) => callOperation("POST /channels/{channel_id}/polls/{message_id}/expire", ...(args as DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/polls/{message_id}/expire">)),
    AddGroupDmUser: (...args) => callOperation("PUT /channels/{channel_id}/recipients/{user_id}", ...(args as DiscordHttpApiOperationArgs<"PUT /channels/{channel_id}/recipients/{user_id}">)),
    DeleteGroupDmUser: (...args) => callOperation("DELETE /channels/{channel_id}/recipients/{user_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/recipients/{user_id}">)),
    SendSoundboardSound: (...args) => callOperation("POST /channels/{channel_id}/send-soundboard-sound", ...(args as DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/send-soundboard-sound">)),
    ListThreadMembers: (...args) => callOperation("GET /channels/{channel_id}/thread-members", ...(args as DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/thread-members">)),
    JoinThread: (...args) => callOperation("PUT /channels/{channel_id}/thread-members/@me", ...(args as DiscordHttpApiOperationArgs<"PUT /channels/{channel_id}/thread-members/@me">)),
    LeaveThread: (...args) => callOperation("DELETE /channels/{channel_id}/thread-members/@me", ...(args as DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/thread-members/@me">)),
    GetThreadMember: (...args) => callOperation("GET /channels/{channel_id}/thread-members/{user_id}", ...(args as DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/thread-members/{user_id}">)),
    AddThreadMember: (...args) => callOperation("PUT /channels/{channel_id}/thread-members/{user_id}", ...(args as DiscordHttpApiOperationArgs<"PUT /channels/{channel_id}/thread-members/{user_id}">)),
    DeleteThreadMember: (...args) => callOperation("DELETE /channels/{channel_id}/thread-members/{user_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /channels/{channel_id}/thread-members/{user_id}">)),
    CreateThread: (...args) => callOperation("POST /channels/{channel_id}/threads", ...(args as DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/threads">)),
    ListPrivateArchivedThreads: (...args) => callOperation("GET /channels/{channel_id}/threads/archived/private", ...(args as DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/threads/archived/private">)),
    ListPublicArchivedThreads: (...args) => callOperation("GET /channels/{channel_id}/threads/archived/public", ...(args as DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/threads/archived/public">)),
    ThreadSearch: (...args) => callOperation("GET /channels/{channel_id}/threads/search", ...(args as DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/threads/search">)),
    TriggerTypingIndicator: (...args) => callOperation("POST /channels/{channel_id}/typing", ...(args as DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/typing">)),
    ListMyPrivateArchivedThreads: (...args) => callOperation("GET /channels/{channel_id}/users/@me/threads/archived/private", ...(args as DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/users/@me/threads/archived/private">)),
    UpdateVoiceChannelStatus: (...args) => callOperation("PUT /channels/{channel_id}/voice-status", ...(args as DiscordHttpApiOperationArgs<"PUT /channels/{channel_id}/voice-status">)),
    ListChannelWebhooks: (...args) => callOperation("GET /channels/{channel_id}/webhooks", ...(args as DiscordHttpApiOperationArgs<"GET /channels/{channel_id}/webhooks">)),
    CreateWebhook: (...args) => callOperation("POST /channels/{channel_id}/webhooks", ...(args as DiscordHttpApiOperationArgs<"POST /channels/{channel_id}/webhooks">)),
  };
}
