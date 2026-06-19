// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiChatOperationKeys = [
  "deleteChatsRoomMessage",
  "deleteChatsRoomMessagesPin",
  "deleteChatsRoomParticipant",
  "deleteChatsUserMessage",
  "deleteChatsUserMessagesPin",
  "deleteChatsUsersMeSettings",
  "getChatsMessage",
  "getChatsRoom",
  "getChatsRoomMessage",
  "getChatsRoomMessages",
  "getChatsRoomParticipant",
  "getChatsRoomParticipants",
  "getChatsSettings",
  "getChatsThreadMessages",
  "getChatsUser",
  "getChatsUserMessage",
  "getChatsUserMessages",
  "getChatsUserSettings",
  "getChatsUsersMeSettings",
  "patchChatsRoom",
  "patchChatsRoomMessage",
  "patchChatsSettings",
  "patchChatsUserMessage",
  "patchChatsUserSettings",
  "patchChatsUsersMeSettings",
  "postChatsRoomMessages",
  "postChatsRoomMessagesPins",
  "postChatsRoomParticipant",
  "postChatsRooms",
  "postChatsUserMessages",
  "postChatsUserMessagesPins",
  "postChatsUsersMeSettings",
  "putChatsMessageReactions",
  "putChatsSettings"
] as const;
export type GenesysCloudFullApiChatOperationKey = typeof GenesysCloudFullApiChatOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiChatOperationPathParamMap {
  "deleteChatsRoomMessage": { "roomJid": GenesysCloudFullApiPathParamValue; "messageId": GenesysCloudFullApiPathParamValue };
  "deleteChatsRoomMessagesPin": { "roomJid": GenesysCloudFullApiPathParamValue; "pinnedMessageId": GenesysCloudFullApiPathParamValue };
  "deleteChatsRoomParticipant": { "roomJid": GenesysCloudFullApiPathParamValue; "userId": GenesysCloudFullApiPathParamValue };
  "deleteChatsUserMessage": { "userId": GenesysCloudFullApiPathParamValue; "messageId": GenesysCloudFullApiPathParamValue };
  "deleteChatsUserMessagesPin": { "userId": GenesysCloudFullApiPathParamValue; "pinnedMessageId": GenesysCloudFullApiPathParamValue };
  "deleteChatsUsersMeSettings": {};
  "getChatsMessage": { "messageId": GenesysCloudFullApiPathParamValue };
  "getChatsRoom": { "roomJid": GenesysCloudFullApiPathParamValue };
  "getChatsRoomMessage": { "roomJid": GenesysCloudFullApiPathParamValue; "messageIds": GenesysCloudFullApiPathParamValue };
  "getChatsRoomMessages": { "roomJid": GenesysCloudFullApiPathParamValue };
  "getChatsRoomParticipant": { "roomJid": GenesysCloudFullApiPathParamValue; "participantJid": GenesysCloudFullApiPathParamValue };
  "getChatsRoomParticipants": { "roomJid": GenesysCloudFullApiPathParamValue };
  "getChatsSettings": {};
  "getChatsThreadMessages": { "threadId": GenesysCloudFullApiPathParamValue };
  "getChatsUser": { "userId": GenesysCloudFullApiPathParamValue };
  "getChatsUserMessage": { "userId": GenesysCloudFullApiPathParamValue; "messageIds": GenesysCloudFullApiPathParamValue };
  "getChatsUserMessages": { "userId": GenesysCloudFullApiPathParamValue };
  "getChatsUserSettings": { "userId": GenesysCloudFullApiPathParamValue };
  "getChatsUsersMeSettings": {};
  "patchChatsRoom": { "roomJid": GenesysCloudFullApiPathParamValue };
  "patchChatsRoomMessage": { "roomJid": GenesysCloudFullApiPathParamValue; "messageId": GenesysCloudFullApiPathParamValue };
  "patchChatsSettings": {};
  "patchChatsUserMessage": { "userId": GenesysCloudFullApiPathParamValue; "messageId": GenesysCloudFullApiPathParamValue };
  "patchChatsUserSettings": { "userId": GenesysCloudFullApiPathParamValue };
  "patchChatsUsersMeSettings": {};
  "postChatsRoomMessages": { "roomJid": GenesysCloudFullApiPathParamValue };
  "postChatsRoomMessagesPins": { "roomJid": GenesysCloudFullApiPathParamValue };
  "postChatsRoomParticipant": { "roomJid": GenesysCloudFullApiPathParamValue; "userId": GenesysCloudFullApiPathParamValue };
  "postChatsRooms": {};
  "postChatsUserMessages": { "userId": GenesysCloudFullApiPathParamValue };
  "postChatsUserMessagesPins": { "userId": GenesysCloudFullApiPathParamValue };
  "postChatsUsersMeSettings": {};
  "putChatsMessageReactions": { "messageId": GenesysCloudFullApiPathParamValue };
  "putChatsSettings": {};
}

export interface GenesysCloudFullApiChatOperationRequestMap {
  "deleteChatsRoomMessage": GenesysCloudFullApiOperationInput<"deleteChatsRoomMessage">;
  "deleteChatsRoomMessagesPin": GenesysCloudFullApiOperationInput<"deleteChatsRoomMessagesPin">;
  "deleteChatsRoomParticipant": GenesysCloudFullApiOperationInput<"deleteChatsRoomParticipant">;
  "deleteChatsUserMessage": GenesysCloudFullApiOperationInput<"deleteChatsUserMessage">;
  "deleteChatsUserMessagesPin": GenesysCloudFullApiOperationInput<"deleteChatsUserMessagesPin">;
  "deleteChatsUsersMeSettings": GenesysCloudFullApiOperationInput<"deleteChatsUsersMeSettings">;
  "getChatsMessage": GenesysCloudFullApiOperationInput<"getChatsMessage">;
  "getChatsRoom": GenesysCloudFullApiOperationInput<"getChatsRoom">;
  "getChatsRoomMessage": GenesysCloudFullApiOperationInput<"getChatsRoomMessage">;
  "getChatsRoomMessages": GenesysCloudFullApiOperationInput<"getChatsRoomMessages">;
  "getChatsRoomParticipant": GenesysCloudFullApiOperationInput<"getChatsRoomParticipant">;
  "getChatsRoomParticipants": GenesysCloudFullApiOperationInput<"getChatsRoomParticipants">;
  "getChatsSettings": GenesysCloudFullApiOperationInput<"getChatsSettings">;
  "getChatsThreadMessages": GenesysCloudFullApiOperationInput<"getChatsThreadMessages">;
  "getChatsUser": GenesysCloudFullApiOperationInput<"getChatsUser">;
  "getChatsUserMessage": GenesysCloudFullApiOperationInput<"getChatsUserMessage">;
  "getChatsUserMessages": GenesysCloudFullApiOperationInput<"getChatsUserMessages">;
  "getChatsUserSettings": GenesysCloudFullApiOperationInput<"getChatsUserSettings">;
  "getChatsUsersMeSettings": GenesysCloudFullApiOperationInput<"getChatsUsersMeSettings">;
  "patchChatsRoom": GenesysCloudFullApiOperationInput<"patchChatsRoom">;
  "patchChatsRoomMessage": GenesysCloudFullApiOperationInput<"patchChatsRoomMessage">;
  "patchChatsSettings": GenesysCloudFullApiOperationInput<"patchChatsSettings">;
  "patchChatsUserMessage": GenesysCloudFullApiOperationInput<"patchChatsUserMessage">;
  "patchChatsUserSettings": GenesysCloudFullApiOperationInput<"patchChatsUserSettings">;
  "patchChatsUsersMeSettings": GenesysCloudFullApiOperationInput<"patchChatsUsersMeSettings">;
  "postChatsRoomMessages": GenesysCloudFullApiOperationInput<"postChatsRoomMessages">;
  "postChatsRoomMessagesPins": GenesysCloudFullApiOperationInput<"postChatsRoomMessagesPins">;
  "postChatsRoomParticipant": GenesysCloudFullApiOperationInput<"postChatsRoomParticipant">;
  "postChatsRooms": GenesysCloudFullApiOperationInput<"postChatsRooms">;
  "postChatsUserMessages": GenesysCloudFullApiOperationInput<"postChatsUserMessages">;
  "postChatsUserMessagesPins": GenesysCloudFullApiOperationInput<"postChatsUserMessagesPins">;
  "postChatsUsersMeSettings": GenesysCloudFullApiOperationInput<"postChatsUsersMeSettings">;
  "putChatsMessageReactions": GenesysCloudFullApiOperationInput<"putChatsMessageReactions">;
  "putChatsSettings": GenesysCloudFullApiOperationInput<"putChatsSettings">;
}

export interface GenesysCloudFullApiChatGeneratedClient {
  DeleteChatsRoomMessage(...args: GenesysCloudFullApiOperationArgs<"deleteChatsRoomMessage">): Promise<GenesysCloudFullApiOperationResponseMap["deleteChatsRoomMessage"]>;
  DeleteChatsRoomMessagesPin(...args: GenesysCloudFullApiOperationArgs<"deleteChatsRoomMessagesPin">): Promise<GenesysCloudFullApiOperationResponseMap["deleteChatsRoomMessagesPin"]>;
  DeleteChatsRoomParticipant(...args: GenesysCloudFullApiOperationArgs<"deleteChatsRoomParticipant">): Promise<GenesysCloudFullApiOperationResponseMap["deleteChatsRoomParticipant"]>;
  DeleteChatsUserMessage(...args: GenesysCloudFullApiOperationArgs<"deleteChatsUserMessage">): Promise<GenesysCloudFullApiOperationResponseMap["deleteChatsUserMessage"]>;
  DeleteChatsUserMessagesPin(...args: GenesysCloudFullApiOperationArgs<"deleteChatsUserMessagesPin">): Promise<GenesysCloudFullApiOperationResponseMap["deleteChatsUserMessagesPin"]>;
  DeleteChatsUsersMeSettings(...args: GenesysCloudFullApiOperationArgs<"deleteChatsUsersMeSettings">): Promise<GenesysCloudFullApiOperationResponseMap["deleteChatsUsersMeSettings"]>;
  GetChatsMessage(...args: GenesysCloudFullApiOperationArgs<"getChatsMessage">): Promise<GenesysCloudFullApiOperationResponseMap["getChatsMessage"]>;
  GetChatsRoom(...args: GenesysCloudFullApiOperationArgs<"getChatsRoom">): Promise<GenesysCloudFullApiOperationResponseMap["getChatsRoom"]>;
  GetChatsRoomMessage(...args: GenesysCloudFullApiOperationArgs<"getChatsRoomMessage">): Promise<GenesysCloudFullApiOperationResponseMap["getChatsRoomMessage"]>;
  GetChatsRoomMessages(...args: GenesysCloudFullApiOperationArgs<"getChatsRoomMessages">): Promise<GenesysCloudFullApiOperationResponseMap["getChatsRoomMessages"]>;
  GetChatsRoomParticipant(...args: GenesysCloudFullApiOperationArgs<"getChatsRoomParticipant">): Promise<GenesysCloudFullApiOperationResponseMap["getChatsRoomParticipant"]>;
  GetChatsRoomParticipants(...args: GenesysCloudFullApiOperationArgs<"getChatsRoomParticipants">): Promise<GenesysCloudFullApiOperationResponseMap["getChatsRoomParticipants"]>;
  GetChatsSettings(...args: GenesysCloudFullApiOperationArgs<"getChatsSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getChatsSettings"]>;
  GetChatsThreadMessages(...args: GenesysCloudFullApiOperationArgs<"getChatsThreadMessages">): Promise<GenesysCloudFullApiOperationResponseMap["getChatsThreadMessages"]>;
  GetChatsUser(...args: GenesysCloudFullApiOperationArgs<"getChatsUser">): Promise<GenesysCloudFullApiOperationResponseMap["getChatsUser"]>;
  GetChatsUserMessage(...args: GenesysCloudFullApiOperationArgs<"getChatsUserMessage">): Promise<GenesysCloudFullApiOperationResponseMap["getChatsUserMessage"]>;
  GetChatsUserMessages(...args: GenesysCloudFullApiOperationArgs<"getChatsUserMessages">): Promise<GenesysCloudFullApiOperationResponseMap["getChatsUserMessages"]>;
  GetChatsUserSettings(...args: GenesysCloudFullApiOperationArgs<"getChatsUserSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getChatsUserSettings"]>;
  GetChatsUsersMeSettings(...args: GenesysCloudFullApiOperationArgs<"getChatsUsersMeSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getChatsUsersMeSettings"]>;
  PatchChatsRoom(...args: GenesysCloudFullApiOperationArgs<"patchChatsRoom">): Promise<GenesysCloudFullApiOperationResponseMap["patchChatsRoom"]>;
  PatchChatsRoomMessage(...args: GenesysCloudFullApiOperationArgs<"patchChatsRoomMessage">): Promise<GenesysCloudFullApiOperationResponseMap["patchChatsRoomMessage"]>;
  PatchChatsSettings(...args: GenesysCloudFullApiOperationArgs<"patchChatsSettings">): Promise<GenesysCloudFullApiOperationResponseMap["patchChatsSettings"]>;
  PatchChatsUserMessage(...args: GenesysCloudFullApiOperationArgs<"patchChatsUserMessage">): Promise<GenesysCloudFullApiOperationResponseMap["patchChatsUserMessage"]>;
  PatchChatsUserSettings(...args: GenesysCloudFullApiOperationArgs<"patchChatsUserSettings">): Promise<GenesysCloudFullApiOperationResponseMap["patchChatsUserSettings"]>;
  PatchChatsUsersMeSettings(...args: GenesysCloudFullApiOperationArgs<"patchChatsUsersMeSettings">): Promise<GenesysCloudFullApiOperationResponseMap["patchChatsUsersMeSettings"]>;
  PostChatsRoomMessages(...args: GenesysCloudFullApiOperationArgs<"postChatsRoomMessages">): Promise<GenesysCloudFullApiOperationResponseMap["postChatsRoomMessages"]>;
  PostChatsRoomMessagesPins(...args: GenesysCloudFullApiOperationArgs<"postChatsRoomMessagesPins">): Promise<GenesysCloudFullApiOperationResponseMap["postChatsRoomMessagesPins"]>;
  PostChatsRoomParticipant(...args: GenesysCloudFullApiOperationArgs<"postChatsRoomParticipant">): Promise<GenesysCloudFullApiOperationResponseMap["postChatsRoomParticipant"]>;
  PostChatsRooms(...args: GenesysCloudFullApiOperationArgs<"postChatsRooms">): Promise<GenesysCloudFullApiOperationResponseMap["postChatsRooms"]>;
  PostChatsUserMessages(...args: GenesysCloudFullApiOperationArgs<"postChatsUserMessages">): Promise<GenesysCloudFullApiOperationResponseMap["postChatsUserMessages"]>;
  PostChatsUserMessagesPins(...args: GenesysCloudFullApiOperationArgs<"postChatsUserMessagesPins">): Promise<GenesysCloudFullApiOperationResponseMap["postChatsUserMessagesPins"]>;
  PostChatsUsersMeSettings(...args: GenesysCloudFullApiOperationArgs<"postChatsUsersMeSettings">): Promise<GenesysCloudFullApiOperationResponseMap["postChatsUsersMeSettings"]>;
  PutChatsMessageReactions(...args: GenesysCloudFullApiOperationArgs<"putChatsMessageReactions">): Promise<GenesysCloudFullApiOperationResponseMap["putChatsMessageReactions"]>;
  PutChatsSettings(...args: GenesysCloudFullApiOperationArgs<"putChatsSettings">): Promise<GenesysCloudFullApiOperationResponseMap["putChatsSettings"]>;
}

export const GenesysCloudFullApiChatGeneratedFunctionNames = [
  "DeleteChatsRoomMessage",
  "DeleteChatsRoomMessagesPin",
  "DeleteChatsRoomParticipant",
  "DeleteChatsUserMessage",
  "DeleteChatsUserMessagesPin",
  "DeleteChatsUsersMeSettings",
  "GetChatsMessage",
  "GetChatsRoom",
  "GetChatsRoomMessage",
  "GetChatsRoomMessages",
  "GetChatsRoomParticipant",
  "GetChatsRoomParticipants",
  "GetChatsSettings",
  "GetChatsThreadMessages",
  "GetChatsUser",
  "GetChatsUserMessage",
  "GetChatsUserMessages",
  "GetChatsUserSettings",
  "GetChatsUsersMeSettings",
  "PatchChatsRoom",
  "PatchChatsRoomMessage",
  "PatchChatsSettings",
  "PatchChatsUserMessage",
  "PatchChatsUserSettings",
  "PatchChatsUsersMeSettings",
  "PostChatsRoomMessages",
  "PostChatsRoomMessagesPins",
  "PostChatsRoomParticipant",
  "PostChatsRooms",
  "PostChatsUserMessages",
  "PostChatsUserMessagesPins",
  "PostChatsUsersMeSettings",
  "PutChatsMessageReactions",
  "PutChatsSettings"
] as const satisfies readonly (keyof GenesysCloudFullApiChatGeneratedClient)[];

export function createGenesysCloudFullApiChatGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiChatGeneratedClient {
  return {
    DeleteChatsRoomMessage: (...args) => callOperation("deleteChatsRoomMessage", ...(args as GenesysCloudFullApiOperationArgs<"deleteChatsRoomMessage">)),
    DeleteChatsRoomMessagesPin: (...args) => callOperation("deleteChatsRoomMessagesPin", ...(args as GenesysCloudFullApiOperationArgs<"deleteChatsRoomMessagesPin">)),
    DeleteChatsRoomParticipant: (...args) => callOperation("deleteChatsRoomParticipant", ...(args as GenesysCloudFullApiOperationArgs<"deleteChatsRoomParticipant">)),
    DeleteChatsUserMessage: (...args) => callOperation("deleteChatsUserMessage", ...(args as GenesysCloudFullApiOperationArgs<"deleteChatsUserMessage">)),
    DeleteChatsUserMessagesPin: (...args) => callOperation("deleteChatsUserMessagesPin", ...(args as GenesysCloudFullApiOperationArgs<"deleteChatsUserMessagesPin">)),
    DeleteChatsUsersMeSettings: (...args) => callOperation("deleteChatsUsersMeSettings", ...(args as GenesysCloudFullApiOperationArgs<"deleteChatsUsersMeSettings">)),
    GetChatsMessage: (...args) => callOperation("getChatsMessage", ...(args as GenesysCloudFullApiOperationArgs<"getChatsMessage">)),
    GetChatsRoom: (...args) => callOperation("getChatsRoom", ...(args as GenesysCloudFullApiOperationArgs<"getChatsRoom">)),
    GetChatsRoomMessage: (...args) => callOperation("getChatsRoomMessage", ...(args as GenesysCloudFullApiOperationArgs<"getChatsRoomMessage">)),
    GetChatsRoomMessages: (...args) => callOperation("getChatsRoomMessages", ...(args as GenesysCloudFullApiOperationArgs<"getChatsRoomMessages">)),
    GetChatsRoomParticipant: (...args) => callOperation("getChatsRoomParticipant", ...(args as GenesysCloudFullApiOperationArgs<"getChatsRoomParticipant">)),
    GetChatsRoomParticipants: (...args) => callOperation("getChatsRoomParticipants", ...(args as GenesysCloudFullApiOperationArgs<"getChatsRoomParticipants">)),
    GetChatsSettings: (...args) => callOperation("getChatsSettings", ...(args as GenesysCloudFullApiOperationArgs<"getChatsSettings">)),
    GetChatsThreadMessages: (...args) => callOperation("getChatsThreadMessages", ...(args as GenesysCloudFullApiOperationArgs<"getChatsThreadMessages">)),
    GetChatsUser: (...args) => callOperation("getChatsUser", ...(args as GenesysCloudFullApiOperationArgs<"getChatsUser">)),
    GetChatsUserMessage: (...args) => callOperation("getChatsUserMessage", ...(args as GenesysCloudFullApiOperationArgs<"getChatsUserMessage">)),
    GetChatsUserMessages: (...args) => callOperation("getChatsUserMessages", ...(args as GenesysCloudFullApiOperationArgs<"getChatsUserMessages">)),
    GetChatsUserSettings: (...args) => callOperation("getChatsUserSettings", ...(args as GenesysCloudFullApiOperationArgs<"getChatsUserSettings">)),
    GetChatsUsersMeSettings: (...args) => callOperation("getChatsUsersMeSettings", ...(args as GenesysCloudFullApiOperationArgs<"getChatsUsersMeSettings">)),
    PatchChatsRoom: (...args) => callOperation("patchChatsRoom", ...(args as GenesysCloudFullApiOperationArgs<"patchChatsRoom">)),
    PatchChatsRoomMessage: (...args) => callOperation("patchChatsRoomMessage", ...(args as GenesysCloudFullApiOperationArgs<"patchChatsRoomMessage">)),
    PatchChatsSettings: (...args) => callOperation("patchChatsSettings", ...(args as GenesysCloudFullApiOperationArgs<"patchChatsSettings">)),
    PatchChatsUserMessage: (...args) => callOperation("patchChatsUserMessage", ...(args as GenesysCloudFullApiOperationArgs<"patchChatsUserMessage">)),
    PatchChatsUserSettings: (...args) => callOperation("patchChatsUserSettings", ...(args as GenesysCloudFullApiOperationArgs<"patchChatsUserSettings">)),
    PatchChatsUsersMeSettings: (...args) => callOperation("patchChatsUsersMeSettings", ...(args as GenesysCloudFullApiOperationArgs<"patchChatsUsersMeSettings">)),
    PostChatsRoomMessages: (...args) => callOperation("postChatsRoomMessages", ...(args as GenesysCloudFullApiOperationArgs<"postChatsRoomMessages">)),
    PostChatsRoomMessagesPins: (...args) => callOperation("postChatsRoomMessagesPins", ...(args as GenesysCloudFullApiOperationArgs<"postChatsRoomMessagesPins">)),
    PostChatsRoomParticipant: (...args) => callOperation("postChatsRoomParticipant", ...(args as GenesysCloudFullApiOperationArgs<"postChatsRoomParticipant">)),
    PostChatsRooms: (...args) => callOperation("postChatsRooms", ...(args as GenesysCloudFullApiOperationArgs<"postChatsRooms">)),
    PostChatsUserMessages: (...args) => callOperation("postChatsUserMessages", ...(args as GenesysCloudFullApiOperationArgs<"postChatsUserMessages">)),
    PostChatsUserMessagesPins: (...args) => callOperation("postChatsUserMessagesPins", ...(args as GenesysCloudFullApiOperationArgs<"postChatsUserMessagesPins">)),
    PostChatsUsersMeSettings: (...args) => callOperation("postChatsUsersMeSettings", ...(args as GenesysCloudFullApiOperationArgs<"postChatsUsersMeSettings">)),
    PutChatsMessageReactions: (...args) => callOperation("putChatsMessageReactions", ...(args as GenesysCloudFullApiOperationArgs<"putChatsMessageReactions">)),
    PutChatsSettings: (...args) => callOperation("putChatsSettings", ...(args as GenesysCloudFullApiOperationArgs<"putChatsSettings">)),
  };
}
