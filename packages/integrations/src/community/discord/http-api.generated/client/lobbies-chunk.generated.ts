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
export const DiscordHttpApiLobbiesOperationKeys = [
  "PUT /lobbies",
  "POST /lobbies",
  "GET /lobbies/{lobby_id}",
  "DELETE /lobbies/{lobby_id}",
  "PATCH /lobbies/{lobby_id}",
  "PATCH /lobbies/{lobby_id}/channel-linking",
  "DELETE /lobbies/{lobby_id}/members/@me",
  "POST /lobbies/{lobby_id}/members/@me/invites",
  "POST /lobbies/{lobby_id}/members/bulk",
  "PUT /lobbies/{lobby_id}/members/{user_id}",
  "DELETE /lobbies/{lobby_id}/members/{user_id}",
  "POST /lobbies/{lobby_id}/members/{user_id}/invites",
  "GET /lobbies/{lobby_id}/messages",
  "POST /lobbies/{lobby_id}/messages",
  "PUT /lobbies/{lobby_id}/messages/{message_id}/moderation-metadata"
] as const;
export type DiscordHttpApiLobbiesOperationKey = typeof DiscordHttpApiLobbiesOperationKeys[number];
// End hardened literal operation keys.

export interface DiscordHttpApiLobbiesOperationPathParamMap {
  "PUT /lobbies": {};
  "POST /lobbies": {};
  "GET /lobbies/{lobby_id}": { "lobby_id": DiscordHttpApiPathParamValue };
  "DELETE /lobbies/{lobby_id}": { "lobby_id": DiscordHttpApiPathParamValue };
  "PATCH /lobbies/{lobby_id}": { "lobby_id": DiscordHttpApiPathParamValue };
  "PATCH /lobbies/{lobby_id}/channel-linking": { "lobby_id": DiscordHttpApiPathParamValue };
  "DELETE /lobbies/{lobby_id}/members/@me": { "lobby_id": DiscordHttpApiPathParamValue };
  "POST /lobbies/{lobby_id}/members/@me/invites": { "lobby_id": DiscordHttpApiPathParamValue };
  "POST /lobbies/{lobby_id}/members/bulk": { "lobby_id": DiscordHttpApiPathParamValue };
  "PUT /lobbies/{lobby_id}/members/{user_id}": { "lobby_id": DiscordHttpApiPathParamValue; "user_id": DiscordHttpApiPathParamValue };
  "DELETE /lobbies/{lobby_id}/members/{user_id}": { "lobby_id": DiscordHttpApiPathParamValue; "user_id": DiscordHttpApiPathParamValue };
  "POST /lobbies/{lobby_id}/members/{user_id}/invites": { "lobby_id": DiscordHttpApiPathParamValue; "user_id": DiscordHttpApiPathParamValue };
  "GET /lobbies/{lobby_id}/messages": { "lobby_id": DiscordHttpApiPathParamValue };
  "POST /lobbies/{lobby_id}/messages": { "lobby_id": DiscordHttpApiPathParamValue };
  "PUT /lobbies/{lobby_id}/messages/{message_id}/moderation-metadata": { "lobby_id": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue };
}

export interface DiscordHttpApiLobbiesOperationRequestMap {
  "PUT /lobbies": DiscordHttpApiOperationInput<"PUT /lobbies">;
  "POST /lobbies": DiscordHttpApiOperationInput<"POST /lobbies">;
  "GET /lobbies/{lobby_id}": DiscordHttpApiOperationInput<"GET /lobbies/{lobby_id}">;
  "DELETE /lobbies/{lobby_id}": DiscordHttpApiOperationInput<"DELETE /lobbies/{lobby_id}">;
  "PATCH /lobbies/{lobby_id}": DiscordHttpApiOperationInput<"PATCH /lobbies/{lobby_id}">;
  "PATCH /lobbies/{lobby_id}/channel-linking": DiscordHttpApiOperationInput<"PATCH /lobbies/{lobby_id}/channel-linking">;
  "DELETE /lobbies/{lobby_id}/members/@me": DiscordHttpApiOperationInput<"DELETE /lobbies/{lobby_id}/members/@me">;
  "POST /lobbies/{lobby_id}/members/@me/invites": DiscordHttpApiOperationInput<"POST /lobbies/{lobby_id}/members/@me/invites">;
  "POST /lobbies/{lobby_id}/members/bulk": DiscordHttpApiOperationInput<"POST /lobbies/{lobby_id}/members/bulk">;
  "PUT /lobbies/{lobby_id}/members/{user_id}": DiscordHttpApiOperationInput<"PUT /lobbies/{lobby_id}/members/{user_id}">;
  "DELETE /lobbies/{lobby_id}/members/{user_id}": DiscordHttpApiOperationInput<"DELETE /lobbies/{lobby_id}/members/{user_id}">;
  "POST /lobbies/{lobby_id}/members/{user_id}/invites": DiscordHttpApiOperationInput<"POST /lobbies/{lobby_id}/members/{user_id}/invites">;
  "GET /lobbies/{lobby_id}/messages": DiscordHttpApiOperationInput<"GET /lobbies/{lobby_id}/messages">;
  "POST /lobbies/{lobby_id}/messages": DiscordHttpApiOperationInput<"POST /lobbies/{lobby_id}/messages">;
  "PUT /lobbies/{lobby_id}/messages/{message_id}/moderation-metadata": DiscordHttpApiOperationInput<"PUT /lobbies/{lobby_id}/messages/{message_id}/moderation-metadata">;
}

export interface DiscordHttpApiLobbiesGeneratedClient {
  CreateOrJoinLobby(...args: DiscordHttpApiOperationArgs<"PUT /lobbies">): Promise<DiscordHttpApiOperationResponseMap["PUT /lobbies"]>;
  CreateLobby(...args: DiscordHttpApiOperationArgs<"POST /lobbies">): Promise<DiscordHttpApiOperationResponseMap["POST /lobbies"]>;
  GetLobby(...args: DiscordHttpApiOperationArgs<"GET /lobbies/{lobby_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /lobbies/{lobby_id}"]>;
  DeleteLobby(...args: DiscordHttpApiOperationArgs<"DELETE /lobbies/{lobby_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /lobbies/{lobby_id}"]>;
  EditLobby(...args: DiscordHttpApiOperationArgs<"PATCH /lobbies/{lobby_id}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /lobbies/{lobby_id}"]>;
  EditLobbyChannelLink(...args: DiscordHttpApiOperationArgs<"PATCH /lobbies/{lobby_id}/channel-linking">): Promise<DiscordHttpApiOperationResponseMap["PATCH /lobbies/{lobby_id}/channel-linking"]>;
  LeaveLobby(...args: DiscordHttpApiOperationArgs<"DELETE /lobbies/{lobby_id}/members/@me">): Promise<DiscordHttpApiOperationResponseMap["DELETE /lobbies/{lobby_id}/members/@me"]>;
  CreateLinkedLobbyGuildInviteForSelf(...args: DiscordHttpApiOperationArgs<"POST /lobbies/{lobby_id}/members/@me/invites">): Promise<DiscordHttpApiOperationResponseMap["POST /lobbies/{lobby_id}/members/@me/invites"]>;
  BulkUpdateLobbyMembers(...args: DiscordHttpApiOperationArgs<"POST /lobbies/{lobby_id}/members/bulk">): Promise<DiscordHttpApiOperationResponseMap["POST /lobbies/{lobby_id}/members/bulk"]>;
  AddLobbyMember(...args: DiscordHttpApiOperationArgs<"PUT /lobbies/{lobby_id}/members/{user_id}">): Promise<DiscordHttpApiOperationResponseMap["PUT /lobbies/{lobby_id}/members/{user_id}"]>;
  DeleteLobbyMember(...args: DiscordHttpApiOperationArgs<"DELETE /lobbies/{lobby_id}/members/{user_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /lobbies/{lobby_id}/members/{user_id}"]>;
  CreateLinkedLobbyGuildInviteForUser(...args: DiscordHttpApiOperationArgs<"POST /lobbies/{lobby_id}/members/{user_id}/invites">): Promise<DiscordHttpApiOperationResponseMap["POST /lobbies/{lobby_id}/members/{user_id}/invites"]>;
  GetLobbyMessages(...args: DiscordHttpApiOperationArgs<"GET /lobbies/{lobby_id}/messages">): Promise<DiscordHttpApiOperationResponseMap["GET /lobbies/{lobby_id}/messages"]>;
  CreateLobbyMessage(...args: DiscordHttpApiOperationArgs<"POST /lobbies/{lobby_id}/messages">): Promise<DiscordHttpApiOperationResponseMap["POST /lobbies/{lobby_id}/messages"]>;
  UpdateLobbyMessageExternalModerationMetadata(...args: DiscordHttpApiOperationArgs<"PUT /lobbies/{lobby_id}/messages/{message_id}/moderation-metadata">): Promise<DiscordHttpApiOperationResponseMap["PUT /lobbies/{lobby_id}/messages/{message_id}/moderation-metadata"]>;
}

export const DiscordHttpApiLobbiesGeneratedFunctionNames = [
  "CreateOrJoinLobby",
  "CreateLobby",
  "GetLobby",
  "DeleteLobby",
  "EditLobby",
  "EditLobbyChannelLink",
  "LeaveLobby",
  "CreateLinkedLobbyGuildInviteForSelf",
  "BulkUpdateLobbyMembers",
  "AddLobbyMember",
  "DeleteLobbyMember",
  "CreateLinkedLobbyGuildInviteForUser",
  "GetLobbyMessages",
  "CreateLobbyMessage",
  "UpdateLobbyMessageExternalModerationMetadata"
] as const satisfies readonly (keyof DiscordHttpApiLobbiesGeneratedClient)[];

export function createDiscordHttpApiLobbiesGeneratedClient(
  callOperation: DiscordHttpApiGeneratedOperationCaller,
): DiscordHttpApiLobbiesGeneratedClient {
  return {
    CreateOrJoinLobby: (...args) => callOperation("PUT /lobbies", ...(args as DiscordHttpApiOperationArgs<"PUT /lobbies">)),
    CreateLobby: (...args) => callOperation("POST /lobbies", ...(args as DiscordHttpApiOperationArgs<"POST /lobbies">)),
    GetLobby: (...args) => callOperation("GET /lobbies/{lobby_id}", ...(args as DiscordHttpApiOperationArgs<"GET /lobbies/{lobby_id}">)),
    DeleteLobby: (...args) => callOperation("DELETE /lobbies/{lobby_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /lobbies/{lobby_id}">)),
    EditLobby: (...args) => callOperation("PATCH /lobbies/{lobby_id}", ...(args as DiscordHttpApiOperationArgs<"PATCH /lobbies/{lobby_id}">)),
    EditLobbyChannelLink: (...args) => callOperation("PATCH /lobbies/{lobby_id}/channel-linking", ...(args as DiscordHttpApiOperationArgs<"PATCH /lobbies/{lobby_id}/channel-linking">)),
    LeaveLobby: (...args) => callOperation("DELETE /lobbies/{lobby_id}/members/@me", ...(args as DiscordHttpApiOperationArgs<"DELETE /lobbies/{lobby_id}/members/@me">)),
    CreateLinkedLobbyGuildInviteForSelf: (...args) => callOperation("POST /lobbies/{lobby_id}/members/@me/invites", ...(args as DiscordHttpApiOperationArgs<"POST /lobbies/{lobby_id}/members/@me/invites">)),
    BulkUpdateLobbyMembers: (...args) => callOperation("POST /lobbies/{lobby_id}/members/bulk", ...(args as DiscordHttpApiOperationArgs<"POST /lobbies/{lobby_id}/members/bulk">)),
    AddLobbyMember: (...args) => callOperation("PUT /lobbies/{lobby_id}/members/{user_id}", ...(args as DiscordHttpApiOperationArgs<"PUT /lobbies/{lobby_id}/members/{user_id}">)),
    DeleteLobbyMember: (...args) => callOperation("DELETE /lobbies/{lobby_id}/members/{user_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /lobbies/{lobby_id}/members/{user_id}">)),
    CreateLinkedLobbyGuildInviteForUser: (...args) => callOperation("POST /lobbies/{lobby_id}/members/{user_id}/invites", ...(args as DiscordHttpApiOperationArgs<"POST /lobbies/{lobby_id}/members/{user_id}/invites">)),
    GetLobbyMessages: (...args) => callOperation("GET /lobbies/{lobby_id}/messages", ...(args as DiscordHttpApiOperationArgs<"GET /lobbies/{lobby_id}/messages">)),
    CreateLobbyMessage: (...args) => callOperation("POST /lobbies/{lobby_id}/messages", ...(args as DiscordHttpApiOperationArgs<"POST /lobbies/{lobby_id}/messages">)),
    UpdateLobbyMessageExternalModerationMetadata: (...args) => callOperation("PUT /lobbies/{lobby_id}/messages/{message_id}/moderation-metadata", ...(args as DiscordHttpApiOperationArgs<"PUT /lobbies/{lobby_id}/messages/{message_id}/moderation-metadata">)),
  };
}
