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
export const GenesysCloudFullApiVoicemailOperationKeys = [
  "deleteVoicemailMessage",
  "deleteVoicemailMessages",
  "getVoicemailGroupMailbox",
  "getVoicemailGroupMessages",
  "getVoicemailGroupPolicy",
  "getVoicemailMailbox",
  "getVoicemailMeMailbox",
  "getVoicemailMeMessages",
  "getVoicemailMePolicy",
  "getVoicemailMessage",
  "getVoicemailMessageMedia",
  "getVoicemailMessages",
  "getVoicemailPolicy",
  "getVoicemailQueueMessages",
  "getVoicemailSearch",
  "getVoicemailUserMailbox",
  "getVoicemailUserMessages",
  "getVoicemailUserpolicy",
  "patchVoicemailGroupPolicy",
  "patchVoicemailMePolicy",
  "patchVoicemailMessage",
  "patchVoicemailUserpolicy",
  "postVoicemailMessages",
  "postVoicemailSearch",
  "putVoicemailMessage",
  "putVoicemailPolicy",
  "putVoicemailUserpolicy"
] as const;
export type GenesysCloudFullApiVoicemailOperationKey = typeof GenesysCloudFullApiVoicemailOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiVoicemailOperationPathParamMap {
  "deleteVoicemailMessage": { "messageId": GenesysCloudFullApiPathParamValue };
  "deleteVoicemailMessages": {};
  "getVoicemailGroupMailbox": { "groupId": GenesysCloudFullApiPathParamValue };
  "getVoicemailGroupMessages": { "groupId": GenesysCloudFullApiPathParamValue };
  "getVoicemailGroupPolicy": { "groupId": GenesysCloudFullApiPathParamValue };
  "getVoicemailMailbox": {};
  "getVoicemailMeMailbox": {};
  "getVoicemailMeMessages": {};
  "getVoicemailMePolicy": {};
  "getVoicemailMessage": { "messageId": GenesysCloudFullApiPathParamValue };
  "getVoicemailMessageMedia": { "messageId": GenesysCloudFullApiPathParamValue };
  "getVoicemailMessages": {};
  "getVoicemailPolicy": {};
  "getVoicemailQueueMessages": { "queueId": GenesysCloudFullApiPathParamValue };
  "getVoicemailSearch": {};
  "getVoicemailUserMailbox": { "userId": GenesysCloudFullApiPathParamValue };
  "getVoicemailUserMessages": { "userId": GenesysCloudFullApiPathParamValue };
  "getVoicemailUserpolicy": { "userId": GenesysCloudFullApiPathParamValue };
  "patchVoicemailGroupPolicy": { "groupId": GenesysCloudFullApiPathParamValue };
  "patchVoicemailMePolicy": {};
  "patchVoicemailMessage": { "messageId": GenesysCloudFullApiPathParamValue };
  "patchVoicemailUserpolicy": { "userId": GenesysCloudFullApiPathParamValue };
  "postVoicemailMessages": {};
  "postVoicemailSearch": {};
  "putVoicemailMessage": { "messageId": GenesysCloudFullApiPathParamValue };
  "putVoicemailPolicy": {};
  "putVoicemailUserpolicy": { "userId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiVoicemailOperationRequestMap {
  "deleteVoicemailMessage": GenesysCloudFullApiOperationInput<"deleteVoicemailMessage">;
  "deleteVoicemailMessages": GenesysCloudFullApiOperationInput<"deleteVoicemailMessages">;
  "getVoicemailGroupMailbox": GenesysCloudFullApiOperationInput<"getVoicemailGroupMailbox">;
  "getVoicemailGroupMessages": GenesysCloudFullApiOperationInput<"getVoicemailGroupMessages">;
  "getVoicemailGroupPolicy": GenesysCloudFullApiOperationInput<"getVoicemailGroupPolicy">;
  "getVoicemailMailbox": GenesysCloudFullApiOperationInput<"getVoicemailMailbox">;
  "getVoicemailMeMailbox": GenesysCloudFullApiOperationInput<"getVoicemailMeMailbox">;
  "getVoicemailMeMessages": GenesysCloudFullApiOperationInput<"getVoicemailMeMessages">;
  "getVoicemailMePolicy": GenesysCloudFullApiOperationInput<"getVoicemailMePolicy">;
  "getVoicemailMessage": GenesysCloudFullApiOperationInput<"getVoicemailMessage">;
  "getVoicemailMessageMedia": GenesysCloudFullApiOperationInput<"getVoicemailMessageMedia">;
  "getVoicemailMessages": GenesysCloudFullApiOperationInput<"getVoicemailMessages">;
  "getVoicemailPolicy": GenesysCloudFullApiOperationInput<"getVoicemailPolicy">;
  "getVoicemailQueueMessages": GenesysCloudFullApiOperationInput<"getVoicemailQueueMessages">;
  "getVoicemailSearch": GenesysCloudFullApiOperationInput<"getVoicemailSearch">;
  "getVoicemailUserMailbox": GenesysCloudFullApiOperationInput<"getVoicemailUserMailbox">;
  "getVoicemailUserMessages": GenesysCloudFullApiOperationInput<"getVoicemailUserMessages">;
  "getVoicemailUserpolicy": GenesysCloudFullApiOperationInput<"getVoicemailUserpolicy">;
  "patchVoicemailGroupPolicy": GenesysCloudFullApiOperationInput<"patchVoicemailGroupPolicy">;
  "patchVoicemailMePolicy": GenesysCloudFullApiOperationInput<"patchVoicemailMePolicy">;
  "patchVoicemailMessage": GenesysCloudFullApiOperationInput<"patchVoicemailMessage">;
  "patchVoicemailUserpolicy": GenesysCloudFullApiOperationInput<"patchVoicemailUserpolicy">;
  "postVoicemailMessages": GenesysCloudFullApiOperationInput<"postVoicemailMessages">;
  "postVoicemailSearch": GenesysCloudFullApiOperationInput<"postVoicemailSearch">;
  "putVoicemailMessage": GenesysCloudFullApiOperationInput<"putVoicemailMessage">;
  "putVoicemailPolicy": GenesysCloudFullApiOperationInput<"putVoicemailPolicy">;
  "putVoicemailUserpolicy": GenesysCloudFullApiOperationInput<"putVoicemailUserpolicy">;
}

export interface GenesysCloudFullApiVoicemailGeneratedClient {
  DeleteVoicemailMessage(...args: GenesysCloudFullApiOperationArgs<"deleteVoicemailMessage">): Promise<GenesysCloudFullApiOperationResponseMap["deleteVoicemailMessage"]>;
  DeleteVoicemailMessages(...args: GenesysCloudFullApiOperationArgs<"deleteVoicemailMessages">): Promise<GenesysCloudFullApiOperationResponseMap["deleteVoicemailMessages"]>;
  GetVoicemailGroupMailbox(...args: GenesysCloudFullApiOperationArgs<"getVoicemailGroupMailbox">): Promise<GenesysCloudFullApiOperationResponseMap["getVoicemailGroupMailbox"]>;
  GetVoicemailGroupMessages(...args: GenesysCloudFullApiOperationArgs<"getVoicemailGroupMessages">): Promise<GenesysCloudFullApiOperationResponseMap["getVoicemailGroupMessages"]>;
  GetVoicemailGroupPolicy(...args: GenesysCloudFullApiOperationArgs<"getVoicemailGroupPolicy">): Promise<GenesysCloudFullApiOperationResponseMap["getVoicemailGroupPolicy"]>;
  GetVoicemailMailbox(...args: GenesysCloudFullApiOperationArgs<"getVoicemailMailbox">): Promise<GenesysCloudFullApiOperationResponseMap["getVoicemailMailbox"]>;
  GetVoicemailMeMailbox(...args: GenesysCloudFullApiOperationArgs<"getVoicemailMeMailbox">): Promise<GenesysCloudFullApiOperationResponseMap["getVoicemailMeMailbox"]>;
  GetVoicemailMeMessages(...args: GenesysCloudFullApiOperationArgs<"getVoicemailMeMessages">): Promise<GenesysCloudFullApiOperationResponseMap["getVoicemailMeMessages"]>;
  GetVoicemailMePolicy(...args: GenesysCloudFullApiOperationArgs<"getVoicemailMePolicy">): Promise<GenesysCloudFullApiOperationResponseMap["getVoicemailMePolicy"]>;
  GetVoicemailMessage(...args: GenesysCloudFullApiOperationArgs<"getVoicemailMessage">): Promise<GenesysCloudFullApiOperationResponseMap["getVoicemailMessage"]>;
  GetVoicemailMessageMedia(...args: GenesysCloudFullApiOperationArgs<"getVoicemailMessageMedia">): Promise<GenesysCloudFullApiOperationResponseMap["getVoicemailMessageMedia"]>;
  GetVoicemailMessages(...args: GenesysCloudFullApiOperationArgs<"getVoicemailMessages">): Promise<GenesysCloudFullApiOperationResponseMap["getVoicemailMessages"]>;
  GetVoicemailPolicy(...args: GenesysCloudFullApiOperationArgs<"getVoicemailPolicy">): Promise<GenesysCloudFullApiOperationResponseMap["getVoicemailPolicy"]>;
  GetVoicemailQueueMessages(...args: GenesysCloudFullApiOperationArgs<"getVoicemailQueueMessages">): Promise<GenesysCloudFullApiOperationResponseMap["getVoicemailQueueMessages"]>;
  GetVoicemailSearch(...args: GenesysCloudFullApiOperationArgs<"getVoicemailSearch">): Promise<GenesysCloudFullApiOperationResponseMap["getVoicemailSearch"]>;
  GetVoicemailUserMailbox(...args: GenesysCloudFullApiOperationArgs<"getVoicemailUserMailbox">): Promise<GenesysCloudFullApiOperationResponseMap["getVoicemailUserMailbox"]>;
  GetVoicemailUserMessages(...args: GenesysCloudFullApiOperationArgs<"getVoicemailUserMessages">): Promise<GenesysCloudFullApiOperationResponseMap["getVoicemailUserMessages"]>;
  GetVoicemailUserpolicy(...args: GenesysCloudFullApiOperationArgs<"getVoicemailUserpolicy">): Promise<GenesysCloudFullApiOperationResponseMap["getVoicemailUserpolicy"]>;
  PatchVoicemailGroupPolicy(...args: GenesysCloudFullApiOperationArgs<"patchVoicemailGroupPolicy">): Promise<GenesysCloudFullApiOperationResponseMap["patchVoicemailGroupPolicy"]>;
  PatchVoicemailMePolicy(...args: GenesysCloudFullApiOperationArgs<"patchVoicemailMePolicy">): Promise<GenesysCloudFullApiOperationResponseMap["patchVoicemailMePolicy"]>;
  PatchVoicemailMessage(...args: GenesysCloudFullApiOperationArgs<"patchVoicemailMessage">): Promise<GenesysCloudFullApiOperationResponseMap["patchVoicemailMessage"]>;
  PatchVoicemailUserpolicy(...args: GenesysCloudFullApiOperationArgs<"patchVoicemailUserpolicy">): Promise<GenesysCloudFullApiOperationResponseMap["patchVoicemailUserpolicy"]>;
  PostVoicemailMessages(...args: GenesysCloudFullApiOperationArgs<"postVoicemailMessages">): Promise<GenesysCloudFullApiOperationResponseMap["postVoicemailMessages"]>;
  PostVoicemailSearch(...args: GenesysCloudFullApiOperationArgs<"postVoicemailSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postVoicemailSearch"]>;
  PutVoicemailMessage(...args: GenesysCloudFullApiOperationArgs<"putVoicemailMessage">): Promise<GenesysCloudFullApiOperationResponseMap["putVoicemailMessage"]>;
  PutVoicemailPolicy(...args: GenesysCloudFullApiOperationArgs<"putVoicemailPolicy">): Promise<GenesysCloudFullApiOperationResponseMap["putVoicemailPolicy"]>;
  PutVoicemailUserpolicy(...args: GenesysCloudFullApiOperationArgs<"putVoicemailUserpolicy">): Promise<GenesysCloudFullApiOperationResponseMap["putVoicemailUserpolicy"]>;
}

export const GenesysCloudFullApiVoicemailGeneratedFunctionNames = [
  "DeleteVoicemailMessage",
  "DeleteVoicemailMessages",
  "GetVoicemailGroupMailbox",
  "GetVoicemailGroupMessages",
  "GetVoicemailGroupPolicy",
  "GetVoicemailMailbox",
  "GetVoicemailMeMailbox",
  "GetVoicemailMeMessages",
  "GetVoicemailMePolicy",
  "GetVoicemailMessage",
  "GetVoicemailMessageMedia",
  "GetVoicemailMessages",
  "GetVoicemailPolicy",
  "GetVoicemailQueueMessages",
  "GetVoicemailSearch",
  "GetVoicemailUserMailbox",
  "GetVoicemailUserMessages",
  "GetVoicemailUserpolicy",
  "PatchVoicemailGroupPolicy",
  "PatchVoicemailMePolicy",
  "PatchVoicemailMessage",
  "PatchVoicemailUserpolicy",
  "PostVoicemailMessages",
  "PostVoicemailSearch",
  "PutVoicemailMessage",
  "PutVoicemailPolicy",
  "PutVoicemailUserpolicy"
] as const satisfies readonly (keyof GenesysCloudFullApiVoicemailGeneratedClient)[];

export function createGenesysCloudFullApiVoicemailGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiVoicemailGeneratedClient {
  return {
    DeleteVoicemailMessage: (...args) => callOperation("deleteVoicemailMessage", ...(args as GenesysCloudFullApiOperationArgs<"deleteVoicemailMessage">)),
    DeleteVoicemailMessages: (...args) => callOperation("deleteVoicemailMessages", ...(args as GenesysCloudFullApiOperationArgs<"deleteVoicemailMessages">)),
    GetVoicemailGroupMailbox: (...args) => callOperation("getVoicemailGroupMailbox", ...(args as GenesysCloudFullApiOperationArgs<"getVoicemailGroupMailbox">)),
    GetVoicemailGroupMessages: (...args) => callOperation("getVoicemailGroupMessages", ...(args as GenesysCloudFullApiOperationArgs<"getVoicemailGroupMessages">)),
    GetVoicemailGroupPolicy: (...args) => callOperation("getVoicemailGroupPolicy", ...(args as GenesysCloudFullApiOperationArgs<"getVoicemailGroupPolicy">)),
    GetVoicemailMailbox: (...args) => callOperation("getVoicemailMailbox", ...(args as GenesysCloudFullApiOperationArgs<"getVoicemailMailbox">)),
    GetVoicemailMeMailbox: (...args) => callOperation("getVoicemailMeMailbox", ...(args as GenesysCloudFullApiOperationArgs<"getVoicemailMeMailbox">)),
    GetVoicemailMeMessages: (...args) => callOperation("getVoicemailMeMessages", ...(args as GenesysCloudFullApiOperationArgs<"getVoicemailMeMessages">)),
    GetVoicemailMePolicy: (...args) => callOperation("getVoicemailMePolicy", ...(args as GenesysCloudFullApiOperationArgs<"getVoicemailMePolicy">)),
    GetVoicemailMessage: (...args) => callOperation("getVoicemailMessage", ...(args as GenesysCloudFullApiOperationArgs<"getVoicemailMessage">)),
    GetVoicemailMessageMedia: (...args) => callOperation("getVoicemailMessageMedia", ...(args as GenesysCloudFullApiOperationArgs<"getVoicemailMessageMedia">)),
    GetVoicemailMessages: (...args) => callOperation("getVoicemailMessages", ...(args as GenesysCloudFullApiOperationArgs<"getVoicemailMessages">)),
    GetVoicemailPolicy: (...args) => callOperation("getVoicemailPolicy", ...(args as GenesysCloudFullApiOperationArgs<"getVoicemailPolicy">)),
    GetVoicemailQueueMessages: (...args) => callOperation("getVoicemailQueueMessages", ...(args as GenesysCloudFullApiOperationArgs<"getVoicemailQueueMessages">)),
    GetVoicemailSearch: (...args) => callOperation("getVoicemailSearch", ...(args as GenesysCloudFullApiOperationArgs<"getVoicemailSearch">)),
    GetVoicemailUserMailbox: (...args) => callOperation("getVoicemailUserMailbox", ...(args as GenesysCloudFullApiOperationArgs<"getVoicemailUserMailbox">)),
    GetVoicemailUserMessages: (...args) => callOperation("getVoicemailUserMessages", ...(args as GenesysCloudFullApiOperationArgs<"getVoicemailUserMessages">)),
    GetVoicemailUserpolicy: (...args) => callOperation("getVoicemailUserpolicy", ...(args as GenesysCloudFullApiOperationArgs<"getVoicemailUserpolicy">)),
    PatchVoicemailGroupPolicy: (...args) => callOperation("patchVoicemailGroupPolicy", ...(args as GenesysCloudFullApiOperationArgs<"patchVoicemailGroupPolicy">)),
    PatchVoicemailMePolicy: (...args) => callOperation("patchVoicemailMePolicy", ...(args as GenesysCloudFullApiOperationArgs<"patchVoicemailMePolicy">)),
    PatchVoicemailMessage: (...args) => callOperation("patchVoicemailMessage", ...(args as GenesysCloudFullApiOperationArgs<"patchVoicemailMessage">)),
    PatchVoicemailUserpolicy: (...args) => callOperation("patchVoicemailUserpolicy", ...(args as GenesysCloudFullApiOperationArgs<"patchVoicemailUserpolicy">)),
    PostVoicemailMessages: (...args) => callOperation("postVoicemailMessages", ...(args as GenesysCloudFullApiOperationArgs<"postVoicemailMessages">)),
    PostVoicemailSearch: (...args) => callOperation("postVoicemailSearch", ...(args as GenesysCloudFullApiOperationArgs<"postVoicemailSearch">)),
    PutVoicemailMessage: (...args) => callOperation("putVoicemailMessage", ...(args as GenesysCloudFullApiOperationArgs<"putVoicemailMessage">)),
    PutVoicemailPolicy: (...args) => callOperation("putVoicemailPolicy", ...(args as GenesysCloudFullApiOperationArgs<"putVoicemailPolicy">)),
    PutVoicemailUserpolicy: (...args) => callOperation("putVoicemailUserpolicy", ...(args as GenesysCloudFullApiOperationArgs<"putVoicemailUserpolicy">)),
  };
}
