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
export const GenesysCloudFullApiGreetingsOperationKeys = [
  "deleteGreeting",
  "getGreeting",
  "getGreetingDownloads",
  "getGreetingGroupsDownloads",
  "getGreetingMedia",
  "getGreetings",
  "getGreetingsDefaults",
  "getGreetingUsersDownloads",
  "getGroupGreetings",
  "getGroupGreetingsDefaults",
  "getUserGreetings",
  "getUserGreetingsDefaults",
  "postGreetings",
  "postGroupGreetings",
  "postUserGreetings",
  "putGreeting",
  "putGreetingsDefaults",
  "putGroupGreetingsDefaults",
  "putUserGreetingsDefaults"
] as const;
export type GenesysCloudFullApiGreetingsOperationKey = typeof GenesysCloudFullApiGreetingsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiGreetingsOperationPathParamMap {
  "deleteGreeting": { "greetingId": GenesysCloudFullApiPathParamValue };
  "getGreeting": { "greetingId": GenesysCloudFullApiPathParamValue };
  "getGreetingDownloads": { "greetingId": GenesysCloudFullApiPathParamValue };
  "getGreetingGroupsDownloads": { "greetingId": GenesysCloudFullApiPathParamValue };
  "getGreetingMedia": { "greetingId": GenesysCloudFullApiPathParamValue };
  "getGreetings": {};
  "getGreetingsDefaults": {};
  "getGreetingUsersDownloads": { "greetingId": GenesysCloudFullApiPathParamValue };
  "getGroupGreetings": { "groupId": GenesysCloudFullApiPathParamValue };
  "getGroupGreetingsDefaults": { "groupId": GenesysCloudFullApiPathParamValue };
  "getUserGreetings": { "userId": GenesysCloudFullApiPathParamValue };
  "getUserGreetingsDefaults": { "userId": GenesysCloudFullApiPathParamValue };
  "postGreetings": {};
  "postGroupGreetings": { "groupId": GenesysCloudFullApiPathParamValue };
  "postUserGreetings": { "userId": GenesysCloudFullApiPathParamValue };
  "putGreeting": { "greetingId": GenesysCloudFullApiPathParamValue };
  "putGreetingsDefaults": {};
  "putGroupGreetingsDefaults": { "groupId": GenesysCloudFullApiPathParamValue };
  "putUserGreetingsDefaults": { "userId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiGreetingsOperationRequestMap {
  "deleteGreeting": GenesysCloudFullApiOperationInput<"deleteGreeting">;
  "getGreeting": GenesysCloudFullApiOperationInput<"getGreeting">;
  "getGreetingDownloads": GenesysCloudFullApiOperationInput<"getGreetingDownloads">;
  "getGreetingGroupsDownloads": GenesysCloudFullApiOperationInput<"getGreetingGroupsDownloads">;
  "getGreetingMedia": GenesysCloudFullApiOperationInput<"getGreetingMedia">;
  "getGreetings": GenesysCloudFullApiOperationInput<"getGreetings">;
  "getGreetingsDefaults": GenesysCloudFullApiOperationInput<"getGreetingsDefaults">;
  "getGreetingUsersDownloads": GenesysCloudFullApiOperationInput<"getGreetingUsersDownloads">;
  "getGroupGreetings": GenesysCloudFullApiOperationInput<"getGroupGreetings">;
  "getGroupGreetingsDefaults": GenesysCloudFullApiOperationInput<"getGroupGreetingsDefaults">;
  "getUserGreetings": GenesysCloudFullApiOperationInput<"getUserGreetings">;
  "getUserGreetingsDefaults": GenesysCloudFullApiOperationInput<"getUserGreetingsDefaults">;
  "postGreetings": GenesysCloudFullApiOperationInput<"postGreetings">;
  "postGroupGreetings": GenesysCloudFullApiOperationInput<"postGroupGreetings">;
  "postUserGreetings": GenesysCloudFullApiOperationInput<"postUserGreetings">;
  "putGreeting": GenesysCloudFullApiOperationInput<"putGreeting">;
  "putGreetingsDefaults": GenesysCloudFullApiOperationInput<"putGreetingsDefaults">;
  "putGroupGreetingsDefaults": GenesysCloudFullApiOperationInput<"putGroupGreetingsDefaults">;
  "putUserGreetingsDefaults": GenesysCloudFullApiOperationInput<"putUserGreetingsDefaults">;
}

export interface GenesysCloudFullApiGreetingsGeneratedClient {
  DeleteGreeting(...args: GenesysCloudFullApiOperationArgs<"deleteGreeting">): Promise<GenesysCloudFullApiOperationResponseMap["deleteGreeting"]>;
  GetGreeting(...args: GenesysCloudFullApiOperationArgs<"getGreeting">): Promise<GenesysCloudFullApiOperationResponseMap["getGreeting"]>;
  GetGreetingDownloads(...args: GenesysCloudFullApiOperationArgs<"getGreetingDownloads">): Promise<GenesysCloudFullApiOperationResponseMap["getGreetingDownloads"]>;
  GetGreetingGroupsDownloads(...args: GenesysCloudFullApiOperationArgs<"getGreetingGroupsDownloads">): Promise<GenesysCloudFullApiOperationResponseMap["getGreetingGroupsDownloads"]>;
  GetGreetingMedia(...args: GenesysCloudFullApiOperationArgs<"getGreetingMedia">): Promise<GenesysCloudFullApiOperationResponseMap["getGreetingMedia"]>;
  GetGreetings(...args: GenesysCloudFullApiOperationArgs<"getGreetings">): Promise<GenesysCloudFullApiOperationResponseMap["getGreetings"]>;
  GetGreetingsDefaults(...args: GenesysCloudFullApiOperationArgs<"getGreetingsDefaults">): Promise<GenesysCloudFullApiOperationResponseMap["getGreetingsDefaults"]>;
  GetGreetingUsersDownloads(...args: GenesysCloudFullApiOperationArgs<"getGreetingUsersDownloads">): Promise<GenesysCloudFullApiOperationResponseMap["getGreetingUsersDownloads"]>;
  GetGroupGreetings(...args: GenesysCloudFullApiOperationArgs<"getGroupGreetings">): Promise<GenesysCloudFullApiOperationResponseMap["getGroupGreetings"]>;
  GetGroupGreetingsDefaults(...args: GenesysCloudFullApiOperationArgs<"getGroupGreetingsDefaults">): Promise<GenesysCloudFullApiOperationResponseMap["getGroupGreetingsDefaults"]>;
  GetUserGreetings(...args: GenesysCloudFullApiOperationArgs<"getUserGreetings">): Promise<GenesysCloudFullApiOperationResponseMap["getUserGreetings"]>;
  GetUserGreetingsDefaults(...args: GenesysCloudFullApiOperationArgs<"getUserGreetingsDefaults">): Promise<GenesysCloudFullApiOperationResponseMap["getUserGreetingsDefaults"]>;
  PostGreetings(...args: GenesysCloudFullApiOperationArgs<"postGreetings">): Promise<GenesysCloudFullApiOperationResponseMap["postGreetings"]>;
  PostGroupGreetings(...args: GenesysCloudFullApiOperationArgs<"postGroupGreetings">): Promise<GenesysCloudFullApiOperationResponseMap["postGroupGreetings"]>;
  PostUserGreetings(...args: GenesysCloudFullApiOperationArgs<"postUserGreetings">): Promise<GenesysCloudFullApiOperationResponseMap["postUserGreetings"]>;
  PutGreeting(...args: GenesysCloudFullApiOperationArgs<"putGreeting">): Promise<GenesysCloudFullApiOperationResponseMap["putGreeting"]>;
  PutGreetingsDefaults(...args: GenesysCloudFullApiOperationArgs<"putGreetingsDefaults">): Promise<GenesysCloudFullApiOperationResponseMap["putGreetingsDefaults"]>;
  PutGroupGreetingsDefaults(...args: GenesysCloudFullApiOperationArgs<"putGroupGreetingsDefaults">): Promise<GenesysCloudFullApiOperationResponseMap["putGroupGreetingsDefaults"]>;
  PutUserGreetingsDefaults(...args: GenesysCloudFullApiOperationArgs<"putUserGreetingsDefaults">): Promise<GenesysCloudFullApiOperationResponseMap["putUserGreetingsDefaults"]>;
}

export const GenesysCloudFullApiGreetingsGeneratedFunctionNames = [
  "DeleteGreeting",
  "GetGreeting",
  "GetGreetingDownloads",
  "GetGreetingGroupsDownloads",
  "GetGreetingMedia",
  "GetGreetings",
  "GetGreetingsDefaults",
  "GetGreetingUsersDownloads",
  "GetGroupGreetings",
  "GetGroupGreetingsDefaults",
  "GetUserGreetings",
  "GetUserGreetingsDefaults",
  "PostGreetings",
  "PostGroupGreetings",
  "PostUserGreetings",
  "PutGreeting",
  "PutGreetingsDefaults",
  "PutGroupGreetingsDefaults",
  "PutUserGreetingsDefaults"
] as const satisfies readonly (keyof GenesysCloudFullApiGreetingsGeneratedClient)[];

export function createGenesysCloudFullApiGreetingsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiGreetingsGeneratedClient {
  return {
    DeleteGreeting: (...args) => callOperation("deleteGreeting", ...(args as GenesysCloudFullApiOperationArgs<"deleteGreeting">)),
    GetGreeting: (...args) => callOperation("getGreeting", ...(args as GenesysCloudFullApiOperationArgs<"getGreeting">)),
    GetGreetingDownloads: (...args) => callOperation("getGreetingDownloads", ...(args as GenesysCloudFullApiOperationArgs<"getGreetingDownloads">)),
    GetGreetingGroupsDownloads: (...args) => callOperation("getGreetingGroupsDownloads", ...(args as GenesysCloudFullApiOperationArgs<"getGreetingGroupsDownloads">)),
    GetGreetingMedia: (...args) => callOperation("getGreetingMedia", ...(args as GenesysCloudFullApiOperationArgs<"getGreetingMedia">)),
    GetGreetings: (...args) => callOperation("getGreetings", ...(args as GenesysCloudFullApiOperationArgs<"getGreetings">)),
    GetGreetingsDefaults: (...args) => callOperation("getGreetingsDefaults", ...(args as GenesysCloudFullApiOperationArgs<"getGreetingsDefaults">)),
    GetGreetingUsersDownloads: (...args) => callOperation("getGreetingUsersDownloads", ...(args as GenesysCloudFullApiOperationArgs<"getGreetingUsersDownloads">)),
    GetGroupGreetings: (...args) => callOperation("getGroupGreetings", ...(args as GenesysCloudFullApiOperationArgs<"getGroupGreetings">)),
    GetGroupGreetingsDefaults: (...args) => callOperation("getGroupGreetingsDefaults", ...(args as GenesysCloudFullApiOperationArgs<"getGroupGreetingsDefaults">)),
    GetUserGreetings: (...args) => callOperation("getUserGreetings", ...(args as GenesysCloudFullApiOperationArgs<"getUserGreetings">)),
    GetUserGreetingsDefaults: (...args) => callOperation("getUserGreetingsDefaults", ...(args as GenesysCloudFullApiOperationArgs<"getUserGreetingsDefaults">)),
    PostGreetings: (...args) => callOperation("postGreetings", ...(args as GenesysCloudFullApiOperationArgs<"postGreetings">)),
    PostGroupGreetings: (...args) => callOperation("postGroupGreetings", ...(args as GenesysCloudFullApiOperationArgs<"postGroupGreetings">)),
    PostUserGreetings: (...args) => callOperation("postUserGreetings", ...(args as GenesysCloudFullApiOperationArgs<"postUserGreetings">)),
    PutGreeting: (...args) => callOperation("putGreeting", ...(args as GenesysCloudFullApiOperationArgs<"putGreeting">)),
    PutGreetingsDefaults: (...args) => callOperation("putGreetingsDefaults", ...(args as GenesysCloudFullApiOperationArgs<"putGreetingsDefaults">)),
    PutGroupGreetingsDefaults: (...args) => callOperation("putGroupGreetingsDefaults", ...(args as GenesysCloudFullApiOperationArgs<"putGroupGreetingsDefaults">)),
    PutUserGreetingsDefaults: (...args) => callOperation("putUserGreetingsDefaults", ...(args as GenesysCloudFullApiOperationArgs<"putUserGreetingsDefaults">)),
  };
}
