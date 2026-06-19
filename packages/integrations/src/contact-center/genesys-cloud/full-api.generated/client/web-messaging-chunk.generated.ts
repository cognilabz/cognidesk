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
export const GenesysCloudFullApiWebMessagingOperationKeys = [
  "deleteWebmessagingDeploymentPushdevice",
  "getWebmessagingMessages",
  "patchWebmessagingDeploymentPushdevice",
  "postWebmessagingDeploymentPushdevice"
] as const;
export type GenesysCloudFullApiWebMessagingOperationKey = typeof GenesysCloudFullApiWebMessagingOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiWebMessagingOperationPathParamMap {
  "deleteWebmessagingDeploymentPushdevice": { "deploymentId": GenesysCloudFullApiPathParamValue; "tokenId": GenesysCloudFullApiPathParamValue };
  "getWebmessagingMessages": {};
  "patchWebmessagingDeploymentPushdevice": { "deploymentId": GenesysCloudFullApiPathParamValue; "tokenId": GenesysCloudFullApiPathParamValue };
  "postWebmessagingDeploymentPushdevice": { "deploymentId": GenesysCloudFullApiPathParamValue; "tokenId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiWebMessagingOperationRequestMap {
  "deleteWebmessagingDeploymentPushdevice": GenesysCloudFullApiOperationInput<"deleteWebmessagingDeploymentPushdevice">;
  "getWebmessagingMessages": GenesysCloudFullApiOperationInput<"getWebmessagingMessages">;
  "patchWebmessagingDeploymentPushdevice": GenesysCloudFullApiOperationInput<"patchWebmessagingDeploymentPushdevice">;
  "postWebmessagingDeploymentPushdevice": GenesysCloudFullApiOperationInput<"postWebmessagingDeploymentPushdevice">;
}

export interface GenesysCloudFullApiWebMessagingGeneratedClient {
  DeleteWebmessagingDeploymentPushdevice(...args: GenesysCloudFullApiOperationArgs<"deleteWebmessagingDeploymentPushdevice">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWebmessagingDeploymentPushdevice"]>;
  GetWebmessagingMessages(...args: GenesysCloudFullApiOperationArgs<"getWebmessagingMessages">): Promise<GenesysCloudFullApiOperationResponseMap["getWebmessagingMessages"]>;
  PatchWebmessagingDeploymentPushdevice(...args: GenesysCloudFullApiOperationArgs<"patchWebmessagingDeploymentPushdevice">): Promise<GenesysCloudFullApiOperationResponseMap["patchWebmessagingDeploymentPushdevice"]>;
  PostWebmessagingDeploymentPushdevice(...args: GenesysCloudFullApiOperationArgs<"postWebmessagingDeploymentPushdevice">): Promise<GenesysCloudFullApiOperationResponseMap["postWebmessagingDeploymentPushdevice"]>;
}

export const GenesysCloudFullApiWebMessagingGeneratedFunctionNames = [
  "DeleteWebmessagingDeploymentPushdevice",
  "GetWebmessagingMessages",
  "PatchWebmessagingDeploymentPushdevice",
  "PostWebmessagingDeploymentPushdevice"
] as const satisfies readonly (keyof GenesysCloudFullApiWebMessagingGeneratedClient)[];

export function createGenesysCloudFullApiWebMessagingGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiWebMessagingGeneratedClient {
  return {
    DeleteWebmessagingDeploymentPushdevice: (...args) => callOperation("deleteWebmessagingDeploymentPushdevice", ...(args as GenesysCloudFullApiOperationArgs<"deleteWebmessagingDeploymentPushdevice">)),
    GetWebmessagingMessages: (...args) => callOperation("getWebmessagingMessages", ...(args as GenesysCloudFullApiOperationArgs<"getWebmessagingMessages">)),
    PatchWebmessagingDeploymentPushdevice: (...args) => callOperation("patchWebmessagingDeploymentPushdevice", ...(args as GenesysCloudFullApiOperationArgs<"patchWebmessagingDeploymentPushdevice">)),
    PostWebmessagingDeploymentPushdevice: (...args) => callOperation("postWebmessagingDeploymentPushdevice", ...(args as GenesysCloudFullApiOperationArgs<"postWebmessagingDeploymentPushdevice">)),
  };
}
