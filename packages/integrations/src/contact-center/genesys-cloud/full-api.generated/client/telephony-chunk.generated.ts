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
export const GenesysCloudFullApiTelephonyOperationKeys = [
  "deleteTelephonyOrganizationLinkTargetOrganizationId",
  "getTelephonyAgentGreetings",
  "getTelephonyAgentsGreetingsMe",
  "getTelephonyCallsMetrics",
  "getTelephonyMediaregions",
  "getTelephonyNumbersRouting",
  "getTelephonyOrganizationLink",
  "getTelephonyOrganizationLinkRegions",
  "getTelephonySettings",
  "getTelephonySipmessagesConversation",
  "getTelephonySipmessagesConversationHeaders",
  "getTelephonySiptraces",
  "getTelephonySiptracesDownloadDownloadId",
  "patchTelephonyOrganizationLinkApproveRequestingOrganizationId",
  "postTelephonyNumbersRouting",
  "postTelephonyNumbersRoutingAll",
  "postTelephonyNumbersRoutingReset",
  "postTelephonyOrganizationLink",
  "postTelephonySiptracesDownload",
  "putTelephonyAgentGreetings",
  "putTelephonyAgentsGreetingsMe",
  "putTelephonySettings"
] as const;
export type GenesysCloudFullApiTelephonyOperationKey = typeof GenesysCloudFullApiTelephonyOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiTelephonyOperationPathParamMap {
  "deleteTelephonyOrganizationLinkTargetOrganizationId": { "targetOrganizationId": GenesysCloudFullApiPathParamValue };
  "getTelephonyAgentGreetings": { "agentId": GenesysCloudFullApiPathParamValue };
  "getTelephonyAgentsGreetingsMe": {};
  "getTelephonyCallsMetrics": {};
  "getTelephonyMediaregions": {};
  "getTelephonyNumbersRouting": {};
  "getTelephonyOrganizationLink": {};
  "getTelephonyOrganizationLinkRegions": {};
  "getTelephonySettings": {};
  "getTelephonySipmessagesConversation": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getTelephonySipmessagesConversationHeaders": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getTelephonySiptraces": {};
  "getTelephonySiptracesDownloadDownloadId": { "downloadId": GenesysCloudFullApiPathParamValue };
  "patchTelephonyOrganizationLinkApproveRequestingOrganizationId": { "requestingOrganizationId": GenesysCloudFullApiPathParamValue };
  "postTelephonyNumbersRouting": {};
  "postTelephonyNumbersRoutingAll": {};
  "postTelephonyNumbersRoutingReset": {};
  "postTelephonyOrganizationLink": {};
  "postTelephonySiptracesDownload": {};
  "putTelephonyAgentGreetings": { "agentId": GenesysCloudFullApiPathParamValue };
  "putTelephonyAgentsGreetingsMe": {};
  "putTelephonySettings": {};
}

export interface GenesysCloudFullApiTelephonyOperationRequestMap {
  "deleteTelephonyOrganizationLinkTargetOrganizationId": GenesysCloudFullApiOperationInput<"deleteTelephonyOrganizationLinkTargetOrganizationId">;
  "getTelephonyAgentGreetings": GenesysCloudFullApiOperationInput<"getTelephonyAgentGreetings">;
  "getTelephonyAgentsGreetingsMe": GenesysCloudFullApiOperationInput<"getTelephonyAgentsGreetingsMe">;
  "getTelephonyCallsMetrics": GenesysCloudFullApiOperationInput<"getTelephonyCallsMetrics">;
  "getTelephonyMediaregions": GenesysCloudFullApiOperationInput<"getTelephonyMediaregions">;
  "getTelephonyNumbersRouting": GenesysCloudFullApiOperationInput<"getTelephonyNumbersRouting">;
  "getTelephonyOrganizationLink": GenesysCloudFullApiOperationInput<"getTelephonyOrganizationLink">;
  "getTelephonyOrganizationLinkRegions": GenesysCloudFullApiOperationInput<"getTelephonyOrganizationLinkRegions">;
  "getTelephonySettings": GenesysCloudFullApiOperationInput<"getTelephonySettings">;
  "getTelephonySipmessagesConversation": GenesysCloudFullApiOperationInput<"getTelephonySipmessagesConversation">;
  "getTelephonySipmessagesConversationHeaders": GenesysCloudFullApiOperationInput<"getTelephonySipmessagesConversationHeaders">;
  "getTelephonySiptraces": GenesysCloudFullApiOperationInput<"getTelephonySiptraces">;
  "getTelephonySiptracesDownloadDownloadId": GenesysCloudFullApiOperationInput<"getTelephonySiptracesDownloadDownloadId">;
  "patchTelephonyOrganizationLinkApproveRequestingOrganizationId": GenesysCloudFullApiOperationInput<"patchTelephonyOrganizationLinkApproveRequestingOrganizationId">;
  "postTelephonyNumbersRouting": GenesysCloudFullApiOperationInput<"postTelephonyNumbersRouting">;
  "postTelephonyNumbersRoutingAll": GenesysCloudFullApiOperationInput<"postTelephonyNumbersRoutingAll">;
  "postTelephonyNumbersRoutingReset": GenesysCloudFullApiOperationInput<"postTelephonyNumbersRoutingReset">;
  "postTelephonyOrganizationLink": GenesysCloudFullApiOperationInput<"postTelephonyOrganizationLink">;
  "postTelephonySiptracesDownload": GenesysCloudFullApiOperationInput<"postTelephonySiptracesDownload">;
  "putTelephonyAgentGreetings": GenesysCloudFullApiOperationInput<"putTelephonyAgentGreetings">;
  "putTelephonyAgentsGreetingsMe": GenesysCloudFullApiOperationInput<"putTelephonyAgentsGreetingsMe">;
  "putTelephonySettings": GenesysCloudFullApiOperationInput<"putTelephonySettings">;
}

export interface GenesysCloudFullApiTelephonyGeneratedClient {
  DeleteTelephonyOrganizationLinkTargetOrganizationId(...args: GenesysCloudFullApiOperationArgs<"deleteTelephonyOrganizationLinkTargetOrganizationId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTelephonyOrganizationLinkTargetOrganizationId"]>;
  GetTelephonyAgentGreetings(...args: GenesysCloudFullApiOperationArgs<"getTelephonyAgentGreetings">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyAgentGreetings"]>;
  GetTelephonyAgentsGreetingsMe(...args: GenesysCloudFullApiOperationArgs<"getTelephonyAgentsGreetingsMe">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyAgentsGreetingsMe"]>;
  GetTelephonyCallsMetrics(...args: GenesysCloudFullApiOperationArgs<"getTelephonyCallsMetrics">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyCallsMetrics"]>;
  GetTelephonyMediaregions(...args: GenesysCloudFullApiOperationArgs<"getTelephonyMediaregions">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyMediaregions"]>;
  GetTelephonyNumbersRouting(...args: GenesysCloudFullApiOperationArgs<"getTelephonyNumbersRouting">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyNumbersRouting"]>;
  GetTelephonyOrganizationLink(...args: GenesysCloudFullApiOperationArgs<"getTelephonyOrganizationLink">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyOrganizationLink"]>;
  GetTelephonyOrganizationLinkRegions(...args: GenesysCloudFullApiOperationArgs<"getTelephonyOrganizationLinkRegions">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyOrganizationLinkRegions"]>;
  GetTelephonySettings(...args: GenesysCloudFullApiOperationArgs<"getTelephonySettings">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonySettings"]>;
  GetTelephonySipmessagesConversation(...args: GenesysCloudFullApiOperationArgs<"getTelephonySipmessagesConversation">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonySipmessagesConversation"]>;
  GetTelephonySipmessagesConversationHeaders(...args: GenesysCloudFullApiOperationArgs<"getTelephonySipmessagesConversationHeaders">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonySipmessagesConversationHeaders"]>;
  GetTelephonySiptraces(...args: GenesysCloudFullApiOperationArgs<"getTelephonySiptraces">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonySiptraces"]>;
  GetTelephonySiptracesDownloadDownloadId(...args: GenesysCloudFullApiOperationArgs<"getTelephonySiptracesDownloadDownloadId">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonySiptracesDownloadDownloadId"]>;
  PatchTelephonyOrganizationLinkApproveRequestingOrganizationId(...args: GenesysCloudFullApiOperationArgs<"patchTelephonyOrganizationLinkApproveRequestingOrganizationId">): Promise<GenesysCloudFullApiOperationResponseMap["patchTelephonyOrganizationLinkApproveRequestingOrganizationId"]>;
  PostTelephonyNumbersRouting(...args: GenesysCloudFullApiOperationArgs<"postTelephonyNumbersRouting">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyNumbersRouting"]>;
  PostTelephonyNumbersRoutingAll(...args: GenesysCloudFullApiOperationArgs<"postTelephonyNumbersRoutingAll">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyNumbersRoutingAll"]>;
  PostTelephonyNumbersRoutingReset(...args: GenesysCloudFullApiOperationArgs<"postTelephonyNumbersRoutingReset">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyNumbersRoutingReset"]>;
  PostTelephonyOrganizationLink(...args: GenesysCloudFullApiOperationArgs<"postTelephonyOrganizationLink">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyOrganizationLink"]>;
  PostTelephonySiptracesDownload(...args: GenesysCloudFullApiOperationArgs<"postTelephonySiptracesDownload">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonySiptracesDownload"]>;
  PutTelephonyAgentGreetings(...args: GenesysCloudFullApiOperationArgs<"putTelephonyAgentGreetings">): Promise<GenesysCloudFullApiOperationResponseMap["putTelephonyAgentGreetings"]>;
  PutTelephonyAgentsGreetingsMe(...args: GenesysCloudFullApiOperationArgs<"putTelephonyAgentsGreetingsMe">): Promise<GenesysCloudFullApiOperationResponseMap["putTelephonyAgentsGreetingsMe"]>;
  PutTelephonySettings(...args: GenesysCloudFullApiOperationArgs<"putTelephonySettings">): Promise<GenesysCloudFullApiOperationResponseMap["putTelephonySettings"]>;
}

export const GenesysCloudFullApiTelephonyGeneratedFunctionNames = [
  "DeleteTelephonyOrganizationLinkTargetOrganizationId",
  "GetTelephonyAgentGreetings",
  "GetTelephonyAgentsGreetingsMe",
  "GetTelephonyCallsMetrics",
  "GetTelephonyMediaregions",
  "GetTelephonyNumbersRouting",
  "GetTelephonyOrganizationLink",
  "GetTelephonyOrganizationLinkRegions",
  "GetTelephonySettings",
  "GetTelephonySipmessagesConversation",
  "GetTelephonySipmessagesConversationHeaders",
  "GetTelephonySiptraces",
  "GetTelephonySiptracesDownloadDownloadId",
  "PatchTelephonyOrganizationLinkApproveRequestingOrganizationId",
  "PostTelephonyNumbersRouting",
  "PostTelephonyNumbersRoutingAll",
  "PostTelephonyNumbersRoutingReset",
  "PostTelephonyOrganizationLink",
  "PostTelephonySiptracesDownload",
  "PutTelephonyAgentGreetings",
  "PutTelephonyAgentsGreetingsMe",
  "PutTelephonySettings"
] as const satisfies readonly (keyof GenesysCloudFullApiTelephonyGeneratedClient)[];

export function createGenesysCloudFullApiTelephonyGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiTelephonyGeneratedClient {
  return {
    DeleteTelephonyOrganizationLinkTargetOrganizationId: (...args) => callOperation("deleteTelephonyOrganizationLinkTargetOrganizationId", ...(args as GenesysCloudFullApiOperationArgs<"deleteTelephonyOrganizationLinkTargetOrganizationId">)),
    GetTelephonyAgentGreetings: (...args) => callOperation("getTelephonyAgentGreetings", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyAgentGreetings">)),
    GetTelephonyAgentsGreetingsMe: (...args) => callOperation("getTelephonyAgentsGreetingsMe", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyAgentsGreetingsMe">)),
    GetTelephonyCallsMetrics: (...args) => callOperation("getTelephonyCallsMetrics", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyCallsMetrics">)),
    GetTelephonyMediaregions: (...args) => callOperation("getTelephonyMediaregions", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyMediaregions">)),
    GetTelephonyNumbersRouting: (...args) => callOperation("getTelephonyNumbersRouting", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyNumbersRouting">)),
    GetTelephonyOrganizationLink: (...args) => callOperation("getTelephonyOrganizationLink", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyOrganizationLink">)),
    GetTelephonyOrganizationLinkRegions: (...args) => callOperation("getTelephonyOrganizationLinkRegions", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyOrganizationLinkRegions">)),
    GetTelephonySettings: (...args) => callOperation("getTelephonySettings", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonySettings">)),
    GetTelephonySipmessagesConversation: (...args) => callOperation("getTelephonySipmessagesConversation", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonySipmessagesConversation">)),
    GetTelephonySipmessagesConversationHeaders: (...args) => callOperation("getTelephonySipmessagesConversationHeaders", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonySipmessagesConversationHeaders">)),
    GetTelephonySiptraces: (...args) => callOperation("getTelephonySiptraces", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonySiptraces">)),
    GetTelephonySiptracesDownloadDownloadId: (...args) => callOperation("getTelephonySiptracesDownloadDownloadId", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonySiptracesDownloadDownloadId">)),
    PatchTelephonyOrganizationLinkApproveRequestingOrganizationId: (...args) => callOperation("patchTelephonyOrganizationLinkApproveRequestingOrganizationId", ...(args as GenesysCloudFullApiOperationArgs<"patchTelephonyOrganizationLinkApproveRequestingOrganizationId">)),
    PostTelephonyNumbersRouting: (...args) => callOperation("postTelephonyNumbersRouting", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyNumbersRouting">)),
    PostTelephonyNumbersRoutingAll: (...args) => callOperation("postTelephonyNumbersRoutingAll", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyNumbersRoutingAll">)),
    PostTelephonyNumbersRoutingReset: (...args) => callOperation("postTelephonyNumbersRoutingReset", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyNumbersRoutingReset">)),
    PostTelephonyOrganizationLink: (...args) => callOperation("postTelephonyOrganizationLink", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyOrganizationLink">)),
    PostTelephonySiptracesDownload: (...args) => callOperation("postTelephonySiptracesDownload", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonySiptracesDownload">)),
    PutTelephonyAgentGreetings: (...args) => callOperation("putTelephonyAgentGreetings", ...(args as GenesysCloudFullApiOperationArgs<"putTelephonyAgentGreetings">)),
    PutTelephonyAgentsGreetingsMe: (...args) => callOperation("putTelephonyAgentsGreetingsMe", ...(args as GenesysCloudFullApiOperationArgs<"putTelephonyAgentsGreetingsMe">)),
    PutTelephonySettings: (...args) => callOperation("putTelephonySettings", ...(args as GenesysCloudFullApiOperationArgs<"putTelephonySettings">)),
  };
}
