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
export const GenesysCloudFullApiNotificationsOperationKeys = [
  "deleteNotificationsChannelSubscriptions",
  "getNotificationsAvailabletopics",
  "getNotificationsChannels",
  "getNotificationsChannelSubscriptions",
  "headNotificationsChannel",
  "postNotificationsChannels",
  "postNotificationsChannelSubscriptions",
  "putNotificationsChannelSubscriptions"
] as const;
export type GenesysCloudFullApiNotificationsOperationKey = typeof GenesysCloudFullApiNotificationsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiNotificationsOperationPathParamMap {
  "deleteNotificationsChannelSubscriptions": { "channelId": GenesysCloudFullApiPathParamValue };
  "getNotificationsAvailabletopics": {};
  "getNotificationsChannels": {};
  "getNotificationsChannelSubscriptions": { "channelId": GenesysCloudFullApiPathParamValue };
  "headNotificationsChannel": { "channelId": GenesysCloudFullApiPathParamValue };
  "postNotificationsChannels": {};
  "postNotificationsChannelSubscriptions": { "channelId": GenesysCloudFullApiPathParamValue };
  "putNotificationsChannelSubscriptions": { "channelId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiNotificationsOperationRequestMap {
  "deleteNotificationsChannelSubscriptions": GenesysCloudFullApiOperationInput<"deleteNotificationsChannelSubscriptions">;
  "getNotificationsAvailabletopics": GenesysCloudFullApiOperationInput<"getNotificationsAvailabletopics">;
  "getNotificationsChannels": GenesysCloudFullApiOperationInput<"getNotificationsChannels">;
  "getNotificationsChannelSubscriptions": GenesysCloudFullApiOperationInput<"getNotificationsChannelSubscriptions">;
  "headNotificationsChannel": GenesysCloudFullApiOperationInput<"headNotificationsChannel">;
  "postNotificationsChannels": GenesysCloudFullApiOperationInput<"postNotificationsChannels">;
  "postNotificationsChannelSubscriptions": GenesysCloudFullApiOperationInput<"postNotificationsChannelSubscriptions">;
  "putNotificationsChannelSubscriptions": GenesysCloudFullApiOperationInput<"putNotificationsChannelSubscriptions">;
}

export interface GenesysCloudFullApiNotificationsGeneratedClient {
  DeleteNotificationsChannelSubscriptions(...args: GenesysCloudFullApiOperationArgs<"deleteNotificationsChannelSubscriptions">): Promise<GenesysCloudFullApiOperationResponseMap["deleteNotificationsChannelSubscriptions"]>;
  GetNotificationsAvailabletopics(...args: GenesysCloudFullApiOperationArgs<"getNotificationsAvailabletopics">): Promise<GenesysCloudFullApiOperationResponseMap["getNotificationsAvailabletopics"]>;
  GetNotificationsChannels(...args: GenesysCloudFullApiOperationArgs<"getNotificationsChannels">): Promise<GenesysCloudFullApiOperationResponseMap["getNotificationsChannels"]>;
  GetNotificationsChannelSubscriptions(...args: GenesysCloudFullApiOperationArgs<"getNotificationsChannelSubscriptions">): Promise<GenesysCloudFullApiOperationResponseMap["getNotificationsChannelSubscriptions"]>;
  HeadNotificationsChannel(...args: GenesysCloudFullApiOperationArgs<"headNotificationsChannel">): Promise<GenesysCloudFullApiOperationResponseMap["headNotificationsChannel"]>;
  PostNotificationsChannels(...args: GenesysCloudFullApiOperationArgs<"postNotificationsChannels">): Promise<GenesysCloudFullApiOperationResponseMap["postNotificationsChannels"]>;
  PostNotificationsChannelSubscriptions(...args: GenesysCloudFullApiOperationArgs<"postNotificationsChannelSubscriptions">): Promise<GenesysCloudFullApiOperationResponseMap["postNotificationsChannelSubscriptions"]>;
  PutNotificationsChannelSubscriptions(...args: GenesysCloudFullApiOperationArgs<"putNotificationsChannelSubscriptions">): Promise<GenesysCloudFullApiOperationResponseMap["putNotificationsChannelSubscriptions"]>;
}

export const GenesysCloudFullApiNotificationsGeneratedFunctionNames = [
  "DeleteNotificationsChannelSubscriptions",
  "GetNotificationsAvailabletopics",
  "GetNotificationsChannels",
  "GetNotificationsChannelSubscriptions",
  "HeadNotificationsChannel",
  "PostNotificationsChannels",
  "PostNotificationsChannelSubscriptions",
  "PutNotificationsChannelSubscriptions"
] as const satisfies readonly (keyof GenesysCloudFullApiNotificationsGeneratedClient)[];

export function createGenesysCloudFullApiNotificationsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiNotificationsGeneratedClient {
  return {
    DeleteNotificationsChannelSubscriptions: (...args) => callOperation("deleteNotificationsChannelSubscriptions", ...(args as GenesysCloudFullApiOperationArgs<"deleteNotificationsChannelSubscriptions">)),
    GetNotificationsAvailabletopics: (...args) => callOperation("getNotificationsAvailabletopics", ...(args as GenesysCloudFullApiOperationArgs<"getNotificationsAvailabletopics">)),
    GetNotificationsChannels: (...args) => callOperation("getNotificationsChannels", ...(args as GenesysCloudFullApiOperationArgs<"getNotificationsChannels">)),
    GetNotificationsChannelSubscriptions: (...args) => callOperation("getNotificationsChannelSubscriptions", ...(args as GenesysCloudFullApiOperationArgs<"getNotificationsChannelSubscriptions">)),
    HeadNotificationsChannel: (...args) => callOperation("headNotificationsChannel", ...(args as GenesysCloudFullApiOperationArgs<"headNotificationsChannel">)),
    PostNotificationsChannels: (...args) => callOperation("postNotificationsChannels", ...(args as GenesysCloudFullApiOperationArgs<"postNotificationsChannels">)),
    PostNotificationsChannelSubscriptions: (...args) => callOperation("postNotificationsChannelSubscriptions", ...(args as GenesysCloudFullApiOperationArgs<"postNotificationsChannelSubscriptions">)),
    PutNotificationsChannelSubscriptions: (...args) => callOperation("putNotificationsChannelSubscriptions", ...(args as GenesysCloudFullApiOperationArgs<"putNotificationsChannelSubscriptions">)),
  };
}
