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
export const GenesysCloudFullApiWebChatOperationKeys = [
  "deleteWebchatDeployment",
  "deleteWebchatGuestConversationMember",
  "deleteWebchatSettings",
  "getWebchatDeployment",
  "getWebchatDeployments",
  "getWebchatGuestConversationMediarequest",
  "getWebchatGuestConversationMediarequests",
  "getWebchatGuestConversationMember",
  "getWebchatGuestConversationMembers",
  "getWebchatGuestConversationMessage",
  "getWebchatGuestConversationMessages",
  "getWebchatSettings",
  "patchWebchatGuestConversationMediarequest",
  "postWebchatDeployments",
  "postWebchatGuestConversationMemberMessages",
  "postWebchatGuestConversationMemberTyping",
  "postWebchatGuestConversations",
  "putWebchatDeployment",
  "putWebchatSettings"
] as const;
export type GenesysCloudFullApiWebChatOperationKey = typeof GenesysCloudFullApiWebChatOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiWebChatOperationPathParamMap {
  "deleteWebchatDeployment": { "deploymentId": GenesysCloudFullApiPathParamValue };
  "deleteWebchatGuestConversationMember": { "conversationId": GenesysCloudFullApiPathParamValue; "memberId": GenesysCloudFullApiPathParamValue };
  "deleteWebchatSettings": {};
  "getWebchatDeployment": { "deploymentId": GenesysCloudFullApiPathParamValue };
  "getWebchatDeployments": {};
  "getWebchatGuestConversationMediarequest": { "conversationId": GenesysCloudFullApiPathParamValue; "mediaRequestId": GenesysCloudFullApiPathParamValue };
  "getWebchatGuestConversationMediarequests": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getWebchatGuestConversationMember": { "conversationId": GenesysCloudFullApiPathParamValue; "memberId": GenesysCloudFullApiPathParamValue };
  "getWebchatGuestConversationMembers": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getWebchatGuestConversationMessage": { "conversationId": GenesysCloudFullApiPathParamValue; "messageId": GenesysCloudFullApiPathParamValue };
  "getWebchatGuestConversationMessages": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getWebchatSettings": {};
  "patchWebchatGuestConversationMediarequest": { "conversationId": GenesysCloudFullApiPathParamValue; "mediaRequestId": GenesysCloudFullApiPathParamValue };
  "postWebchatDeployments": {};
  "postWebchatGuestConversationMemberMessages": { "conversationId": GenesysCloudFullApiPathParamValue; "memberId": GenesysCloudFullApiPathParamValue };
  "postWebchatGuestConversationMemberTyping": { "conversationId": GenesysCloudFullApiPathParamValue; "memberId": GenesysCloudFullApiPathParamValue };
  "postWebchatGuestConversations": {};
  "putWebchatDeployment": { "deploymentId": GenesysCloudFullApiPathParamValue };
  "putWebchatSettings": {};
}

export interface GenesysCloudFullApiWebChatOperationRequestMap {
  "deleteWebchatDeployment": GenesysCloudFullApiOperationInput<"deleteWebchatDeployment">;
  "deleteWebchatGuestConversationMember": GenesysCloudFullApiOperationInput<"deleteWebchatGuestConversationMember">;
  "deleteWebchatSettings": GenesysCloudFullApiOperationInput<"deleteWebchatSettings">;
  "getWebchatDeployment": GenesysCloudFullApiOperationInput<"getWebchatDeployment">;
  "getWebchatDeployments": GenesysCloudFullApiOperationInput<"getWebchatDeployments">;
  "getWebchatGuestConversationMediarequest": GenesysCloudFullApiOperationInput<"getWebchatGuestConversationMediarequest">;
  "getWebchatGuestConversationMediarequests": GenesysCloudFullApiOperationInput<"getWebchatGuestConversationMediarequests">;
  "getWebchatGuestConversationMember": GenesysCloudFullApiOperationInput<"getWebchatGuestConversationMember">;
  "getWebchatGuestConversationMembers": GenesysCloudFullApiOperationInput<"getWebchatGuestConversationMembers">;
  "getWebchatGuestConversationMessage": GenesysCloudFullApiOperationInput<"getWebchatGuestConversationMessage">;
  "getWebchatGuestConversationMessages": GenesysCloudFullApiOperationInput<"getWebchatGuestConversationMessages">;
  "getWebchatSettings": GenesysCloudFullApiOperationInput<"getWebchatSettings">;
  "patchWebchatGuestConversationMediarequest": GenesysCloudFullApiOperationInput<"patchWebchatGuestConversationMediarequest">;
  "postWebchatDeployments": GenesysCloudFullApiOperationInput<"postWebchatDeployments">;
  "postWebchatGuestConversationMemberMessages": GenesysCloudFullApiOperationInput<"postWebchatGuestConversationMemberMessages">;
  "postWebchatGuestConversationMemberTyping": GenesysCloudFullApiOperationInput<"postWebchatGuestConversationMemberTyping">;
  "postWebchatGuestConversations": GenesysCloudFullApiOperationInput<"postWebchatGuestConversations">;
  "putWebchatDeployment": GenesysCloudFullApiOperationInput<"putWebchatDeployment">;
  "putWebchatSettings": GenesysCloudFullApiOperationInput<"putWebchatSettings">;
}

export interface GenesysCloudFullApiWebChatGeneratedClient {
  DeleteWebchatDeployment(...args: GenesysCloudFullApiOperationArgs<"deleteWebchatDeployment">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWebchatDeployment"]>;
  DeleteWebchatGuestConversationMember(...args: GenesysCloudFullApiOperationArgs<"deleteWebchatGuestConversationMember">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWebchatGuestConversationMember"]>;
  DeleteWebchatSettings(...args: GenesysCloudFullApiOperationArgs<"deleteWebchatSettings">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWebchatSettings"]>;
  GetWebchatDeployment(...args: GenesysCloudFullApiOperationArgs<"getWebchatDeployment">): Promise<GenesysCloudFullApiOperationResponseMap["getWebchatDeployment"]>;
  GetWebchatDeployments(...args: GenesysCloudFullApiOperationArgs<"getWebchatDeployments">): Promise<GenesysCloudFullApiOperationResponseMap["getWebchatDeployments"]>;
  GetWebchatGuestConversationMediarequest(...args: GenesysCloudFullApiOperationArgs<"getWebchatGuestConversationMediarequest">): Promise<GenesysCloudFullApiOperationResponseMap["getWebchatGuestConversationMediarequest"]>;
  GetWebchatGuestConversationMediarequests(...args: GenesysCloudFullApiOperationArgs<"getWebchatGuestConversationMediarequests">): Promise<GenesysCloudFullApiOperationResponseMap["getWebchatGuestConversationMediarequests"]>;
  GetWebchatGuestConversationMember(...args: GenesysCloudFullApiOperationArgs<"getWebchatGuestConversationMember">): Promise<GenesysCloudFullApiOperationResponseMap["getWebchatGuestConversationMember"]>;
  GetWebchatGuestConversationMembers(...args: GenesysCloudFullApiOperationArgs<"getWebchatGuestConversationMembers">): Promise<GenesysCloudFullApiOperationResponseMap["getWebchatGuestConversationMembers"]>;
  GetWebchatGuestConversationMessage(...args: GenesysCloudFullApiOperationArgs<"getWebchatGuestConversationMessage">): Promise<GenesysCloudFullApiOperationResponseMap["getWebchatGuestConversationMessage"]>;
  GetWebchatGuestConversationMessages(...args: GenesysCloudFullApiOperationArgs<"getWebchatGuestConversationMessages">): Promise<GenesysCloudFullApiOperationResponseMap["getWebchatGuestConversationMessages"]>;
  GetWebchatSettings(...args: GenesysCloudFullApiOperationArgs<"getWebchatSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getWebchatSettings"]>;
  PatchWebchatGuestConversationMediarequest(...args: GenesysCloudFullApiOperationArgs<"patchWebchatGuestConversationMediarequest">): Promise<GenesysCloudFullApiOperationResponseMap["patchWebchatGuestConversationMediarequest"]>;
  PostWebchatDeployments(...args: GenesysCloudFullApiOperationArgs<"postWebchatDeployments">): Promise<GenesysCloudFullApiOperationResponseMap["postWebchatDeployments"]>;
  PostWebchatGuestConversationMemberMessages(...args: GenesysCloudFullApiOperationArgs<"postWebchatGuestConversationMemberMessages">): Promise<GenesysCloudFullApiOperationResponseMap["postWebchatGuestConversationMemberMessages"]>;
  PostWebchatGuestConversationMemberTyping(...args: GenesysCloudFullApiOperationArgs<"postWebchatGuestConversationMemberTyping">): Promise<GenesysCloudFullApiOperationResponseMap["postWebchatGuestConversationMemberTyping"]>;
  PostWebchatGuestConversations(...args: GenesysCloudFullApiOperationArgs<"postWebchatGuestConversations">): Promise<GenesysCloudFullApiOperationResponseMap["postWebchatGuestConversations"]>;
  PutWebchatDeployment(...args: GenesysCloudFullApiOperationArgs<"putWebchatDeployment">): Promise<GenesysCloudFullApiOperationResponseMap["putWebchatDeployment"]>;
  PutWebchatSettings(...args: GenesysCloudFullApiOperationArgs<"putWebchatSettings">): Promise<GenesysCloudFullApiOperationResponseMap["putWebchatSettings"]>;
}

export const GenesysCloudFullApiWebChatGeneratedFunctionNames = [
  "DeleteWebchatDeployment",
  "DeleteWebchatGuestConversationMember",
  "DeleteWebchatSettings",
  "GetWebchatDeployment",
  "GetWebchatDeployments",
  "GetWebchatGuestConversationMediarequest",
  "GetWebchatGuestConversationMediarequests",
  "GetWebchatGuestConversationMember",
  "GetWebchatGuestConversationMembers",
  "GetWebchatGuestConversationMessage",
  "GetWebchatGuestConversationMessages",
  "GetWebchatSettings",
  "PatchWebchatGuestConversationMediarequest",
  "PostWebchatDeployments",
  "PostWebchatGuestConversationMemberMessages",
  "PostWebchatGuestConversationMemberTyping",
  "PostWebchatGuestConversations",
  "PutWebchatDeployment",
  "PutWebchatSettings"
] as const satisfies readonly (keyof GenesysCloudFullApiWebChatGeneratedClient)[];

export function createGenesysCloudFullApiWebChatGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiWebChatGeneratedClient {
  return {
    DeleteWebchatDeployment: (...args) => callOperation("deleteWebchatDeployment", ...(args as GenesysCloudFullApiOperationArgs<"deleteWebchatDeployment">)),
    DeleteWebchatGuestConversationMember: (...args) => callOperation("deleteWebchatGuestConversationMember", ...(args as GenesysCloudFullApiOperationArgs<"deleteWebchatGuestConversationMember">)),
    DeleteWebchatSettings: (...args) => callOperation("deleteWebchatSettings", ...(args as GenesysCloudFullApiOperationArgs<"deleteWebchatSettings">)),
    GetWebchatDeployment: (...args) => callOperation("getWebchatDeployment", ...(args as GenesysCloudFullApiOperationArgs<"getWebchatDeployment">)),
    GetWebchatDeployments: (...args) => callOperation("getWebchatDeployments", ...(args as GenesysCloudFullApiOperationArgs<"getWebchatDeployments">)),
    GetWebchatGuestConversationMediarequest: (...args) => callOperation("getWebchatGuestConversationMediarequest", ...(args as GenesysCloudFullApiOperationArgs<"getWebchatGuestConversationMediarequest">)),
    GetWebchatGuestConversationMediarequests: (...args) => callOperation("getWebchatGuestConversationMediarequests", ...(args as GenesysCloudFullApiOperationArgs<"getWebchatGuestConversationMediarequests">)),
    GetWebchatGuestConversationMember: (...args) => callOperation("getWebchatGuestConversationMember", ...(args as GenesysCloudFullApiOperationArgs<"getWebchatGuestConversationMember">)),
    GetWebchatGuestConversationMembers: (...args) => callOperation("getWebchatGuestConversationMembers", ...(args as GenesysCloudFullApiOperationArgs<"getWebchatGuestConversationMembers">)),
    GetWebchatGuestConversationMessage: (...args) => callOperation("getWebchatGuestConversationMessage", ...(args as GenesysCloudFullApiOperationArgs<"getWebchatGuestConversationMessage">)),
    GetWebchatGuestConversationMessages: (...args) => callOperation("getWebchatGuestConversationMessages", ...(args as GenesysCloudFullApiOperationArgs<"getWebchatGuestConversationMessages">)),
    GetWebchatSettings: (...args) => callOperation("getWebchatSettings", ...(args as GenesysCloudFullApiOperationArgs<"getWebchatSettings">)),
    PatchWebchatGuestConversationMediarequest: (...args) => callOperation("patchWebchatGuestConversationMediarequest", ...(args as GenesysCloudFullApiOperationArgs<"patchWebchatGuestConversationMediarequest">)),
    PostWebchatDeployments: (...args) => callOperation("postWebchatDeployments", ...(args as GenesysCloudFullApiOperationArgs<"postWebchatDeployments">)),
    PostWebchatGuestConversationMemberMessages: (...args) => callOperation("postWebchatGuestConversationMemberMessages", ...(args as GenesysCloudFullApiOperationArgs<"postWebchatGuestConversationMemberMessages">)),
    PostWebchatGuestConversationMemberTyping: (...args) => callOperation("postWebchatGuestConversationMemberTyping", ...(args as GenesysCloudFullApiOperationArgs<"postWebchatGuestConversationMemberTyping">)),
    PostWebchatGuestConversations: (...args) => callOperation("postWebchatGuestConversations", ...(args as GenesysCloudFullApiOperationArgs<"postWebchatGuestConversations">)),
    PutWebchatDeployment: (...args) => callOperation("putWebchatDeployment", ...(args as GenesysCloudFullApiOperationArgs<"putWebchatDeployment">)),
    PutWebchatSettings: (...args) => callOperation("putWebchatSettings", ...(args as GenesysCloudFullApiOperationArgs<"putWebchatSettings">)),
  };
}
