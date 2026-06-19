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
export const GenesysCloudFullApiAIStudioOperationKeys = [
  "deleteConversationsSummariesSetting",
  "deleteGuideJobs",
  "getConversationsSummariesSetting",
  "getConversationsSummariesSettings",
  "getGuide",
  "getGuideJob",
  "getGuides",
  "getGuidesJob",
  "getGuideVersion",
  "getGuideVersionJob",
  "patchGuide",
  "patchGuideVersion",
  "postConversationsSummariesPreview",
  "postConversationsSummariesSettings",
  "postGuides",
  "postGuideSessionTurns",
  "postGuidesJobs",
  "postGuidesUploads",
  "postGuideVersionJobs",
  "postGuideVersions",
  "putConversationsSummariesSetting"
] as const;
export type GenesysCloudFullApiAIStudioOperationKey = typeof GenesysCloudFullApiAIStudioOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiAIStudioOperationPathParamMap {
  "deleteConversationsSummariesSetting": { "summarySettingId": GenesysCloudFullApiPathParamValue };
  "deleteGuideJobs": { "guideId": GenesysCloudFullApiPathParamValue };
  "getConversationsSummariesSetting": { "summarySettingId": GenesysCloudFullApiPathParamValue };
  "getConversationsSummariesSettings": {};
  "getGuide": { "guideId": GenesysCloudFullApiPathParamValue };
  "getGuideJob": { "guideId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getGuides": {};
  "getGuidesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getGuideVersion": { "guideId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
  "getGuideVersionJob": { "guideId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "patchGuide": { "guideId": GenesysCloudFullApiPathParamValue };
  "patchGuideVersion": { "guideId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
  "postConversationsSummariesPreview": {};
  "postConversationsSummariesSettings": {};
  "postGuides": {};
  "postGuideSessionTurns": { "guideId": GenesysCloudFullApiPathParamValue; "guideSessionId": GenesysCloudFullApiPathParamValue };
  "postGuidesJobs": {};
  "postGuidesUploads": {};
  "postGuideVersionJobs": { "guideId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
  "postGuideVersions": { "guideId": GenesysCloudFullApiPathParamValue };
  "putConversationsSummariesSetting": { "summarySettingId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiAIStudioOperationRequestMap {
  "deleteConversationsSummariesSetting": GenesysCloudFullApiOperationInput<"deleteConversationsSummariesSetting">;
  "deleteGuideJobs": GenesysCloudFullApiOperationInput<"deleteGuideJobs">;
  "getConversationsSummariesSetting": GenesysCloudFullApiOperationInput<"getConversationsSummariesSetting">;
  "getConversationsSummariesSettings": GenesysCloudFullApiOperationInput<"getConversationsSummariesSettings">;
  "getGuide": GenesysCloudFullApiOperationInput<"getGuide">;
  "getGuideJob": GenesysCloudFullApiOperationInput<"getGuideJob">;
  "getGuides": GenesysCloudFullApiOperationInput<"getGuides">;
  "getGuidesJob": GenesysCloudFullApiOperationInput<"getGuidesJob">;
  "getGuideVersion": GenesysCloudFullApiOperationInput<"getGuideVersion">;
  "getGuideVersionJob": GenesysCloudFullApiOperationInput<"getGuideVersionJob">;
  "patchGuide": GenesysCloudFullApiOperationInput<"patchGuide">;
  "patchGuideVersion": GenesysCloudFullApiOperationInput<"patchGuideVersion">;
  "postConversationsSummariesPreview": GenesysCloudFullApiOperationInput<"postConversationsSummariesPreview">;
  "postConversationsSummariesSettings": GenesysCloudFullApiOperationInput<"postConversationsSummariesSettings">;
  "postGuides": GenesysCloudFullApiOperationInput<"postGuides">;
  "postGuideSessionTurns": GenesysCloudFullApiOperationInput<"postGuideSessionTurns">;
  "postGuidesJobs": GenesysCloudFullApiOperationInput<"postGuidesJobs">;
  "postGuidesUploads": GenesysCloudFullApiOperationInput<"postGuidesUploads">;
  "postGuideVersionJobs": GenesysCloudFullApiOperationInput<"postGuideVersionJobs">;
  "postGuideVersions": GenesysCloudFullApiOperationInput<"postGuideVersions">;
  "putConversationsSummariesSetting": GenesysCloudFullApiOperationInput<"putConversationsSummariesSetting">;
}

export interface GenesysCloudFullApiAIStudioGeneratedClient {
  DeleteConversationsSummariesSetting(...args: GenesysCloudFullApiOperationArgs<"deleteConversationsSummariesSetting">): Promise<GenesysCloudFullApiOperationResponseMap["deleteConversationsSummariesSetting"]>;
  DeleteGuideJobs(...args: GenesysCloudFullApiOperationArgs<"deleteGuideJobs">): Promise<GenesysCloudFullApiOperationResponseMap["deleteGuideJobs"]>;
  GetConversationsSummariesSetting(...args: GenesysCloudFullApiOperationArgs<"getConversationsSummariesSetting">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsSummariesSetting"]>;
  GetConversationsSummariesSettings(...args: GenesysCloudFullApiOperationArgs<"getConversationsSummariesSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsSummariesSettings"]>;
  GetGuide(...args: GenesysCloudFullApiOperationArgs<"getGuide">): Promise<GenesysCloudFullApiOperationResponseMap["getGuide"]>;
  GetGuideJob(...args: GenesysCloudFullApiOperationArgs<"getGuideJob">): Promise<GenesysCloudFullApiOperationResponseMap["getGuideJob"]>;
  GetGuides(...args: GenesysCloudFullApiOperationArgs<"getGuides">): Promise<GenesysCloudFullApiOperationResponseMap["getGuides"]>;
  GetGuidesJob(...args: GenesysCloudFullApiOperationArgs<"getGuidesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getGuidesJob"]>;
  GetGuideVersion(...args: GenesysCloudFullApiOperationArgs<"getGuideVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getGuideVersion"]>;
  GetGuideVersionJob(...args: GenesysCloudFullApiOperationArgs<"getGuideVersionJob">): Promise<GenesysCloudFullApiOperationResponseMap["getGuideVersionJob"]>;
  PatchGuide(...args: GenesysCloudFullApiOperationArgs<"patchGuide">): Promise<GenesysCloudFullApiOperationResponseMap["patchGuide"]>;
  PatchGuideVersion(...args: GenesysCloudFullApiOperationArgs<"patchGuideVersion">): Promise<GenesysCloudFullApiOperationResponseMap["patchGuideVersion"]>;
  PostConversationsSummariesPreview(...args: GenesysCloudFullApiOperationArgs<"postConversationsSummariesPreview">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsSummariesPreview"]>;
  PostConversationsSummariesSettings(...args: GenesysCloudFullApiOperationArgs<"postConversationsSummariesSettings">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsSummariesSettings"]>;
  PostGuides(...args: GenesysCloudFullApiOperationArgs<"postGuides">): Promise<GenesysCloudFullApiOperationResponseMap["postGuides"]>;
  PostGuideSessionTurns(...args: GenesysCloudFullApiOperationArgs<"postGuideSessionTurns">): Promise<GenesysCloudFullApiOperationResponseMap["postGuideSessionTurns"]>;
  PostGuidesJobs(...args: GenesysCloudFullApiOperationArgs<"postGuidesJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postGuidesJobs"]>;
  PostGuidesUploads(...args: GenesysCloudFullApiOperationArgs<"postGuidesUploads">): Promise<GenesysCloudFullApiOperationResponseMap["postGuidesUploads"]>;
  PostGuideVersionJobs(...args: GenesysCloudFullApiOperationArgs<"postGuideVersionJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postGuideVersionJobs"]>;
  PostGuideVersions(...args: GenesysCloudFullApiOperationArgs<"postGuideVersions">): Promise<GenesysCloudFullApiOperationResponseMap["postGuideVersions"]>;
  PutConversationsSummariesSetting(...args: GenesysCloudFullApiOperationArgs<"putConversationsSummariesSetting">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsSummariesSetting"]>;
}

export const GenesysCloudFullApiAIStudioGeneratedFunctionNames = [
  "DeleteConversationsSummariesSetting",
  "DeleteGuideJobs",
  "GetConversationsSummariesSetting",
  "GetConversationsSummariesSettings",
  "GetGuide",
  "GetGuideJob",
  "GetGuides",
  "GetGuidesJob",
  "GetGuideVersion",
  "GetGuideVersionJob",
  "PatchGuide",
  "PatchGuideVersion",
  "PostConversationsSummariesPreview",
  "PostConversationsSummariesSettings",
  "PostGuides",
  "PostGuideSessionTurns",
  "PostGuidesJobs",
  "PostGuidesUploads",
  "PostGuideVersionJobs",
  "PostGuideVersions",
  "PutConversationsSummariesSetting"
] as const satisfies readonly (keyof GenesysCloudFullApiAIStudioGeneratedClient)[];

export function createGenesysCloudFullApiAIStudioGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiAIStudioGeneratedClient {
  return {
    DeleteConversationsSummariesSetting: (...args) => callOperation("deleteConversationsSummariesSetting", ...(args as GenesysCloudFullApiOperationArgs<"deleteConversationsSummariesSetting">)),
    DeleteGuideJobs: (...args) => callOperation("deleteGuideJobs", ...(args as GenesysCloudFullApiOperationArgs<"deleteGuideJobs">)),
    GetConversationsSummariesSetting: (...args) => callOperation("getConversationsSummariesSetting", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsSummariesSetting">)),
    GetConversationsSummariesSettings: (...args) => callOperation("getConversationsSummariesSettings", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsSummariesSettings">)),
    GetGuide: (...args) => callOperation("getGuide", ...(args as GenesysCloudFullApiOperationArgs<"getGuide">)),
    GetGuideJob: (...args) => callOperation("getGuideJob", ...(args as GenesysCloudFullApiOperationArgs<"getGuideJob">)),
    GetGuides: (...args) => callOperation("getGuides", ...(args as GenesysCloudFullApiOperationArgs<"getGuides">)),
    GetGuidesJob: (...args) => callOperation("getGuidesJob", ...(args as GenesysCloudFullApiOperationArgs<"getGuidesJob">)),
    GetGuideVersion: (...args) => callOperation("getGuideVersion", ...(args as GenesysCloudFullApiOperationArgs<"getGuideVersion">)),
    GetGuideVersionJob: (...args) => callOperation("getGuideVersionJob", ...(args as GenesysCloudFullApiOperationArgs<"getGuideVersionJob">)),
    PatchGuide: (...args) => callOperation("patchGuide", ...(args as GenesysCloudFullApiOperationArgs<"patchGuide">)),
    PatchGuideVersion: (...args) => callOperation("patchGuideVersion", ...(args as GenesysCloudFullApiOperationArgs<"patchGuideVersion">)),
    PostConversationsSummariesPreview: (...args) => callOperation("postConversationsSummariesPreview", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsSummariesPreview">)),
    PostConversationsSummariesSettings: (...args) => callOperation("postConversationsSummariesSettings", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsSummariesSettings">)),
    PostGuides: (...args) => callOperation("postGuides", ...(args as GenesysCloudFullApiOperationArgs<"postGuides">)),
    PostGuideSessionTurns: (...args) => callOperation("postGuideSessionTurns", ...(args as GenesysCloudFullApiOperationArgs<"postGuideSessionTurns">)),
    PostGuidesJobs: (...args) => callOperation("postGuidesJobs", ...(args as GenesysCloudFullApiOperationArgs<"postGuidesJobs">)),
    PostGuidesUploads: (...args) => callOperation("postGuidesUploads", ...(args as GenesysCloudFullApiOperationArgs<"postGuidesUploads">)),
    PostGuideVersionJobs: (...args) => callOperation("postGuideVersionJobs", ...(args as GenesysCloudFullApiOperationArgs<"postGuideVersionJobs">)),
    PostGuideVersions: (...args) => callOperation("postGuideVersions", ...(args as GenesysCloudFullApiOperationArgs<"postGuideVersions">)),
    PutConversationsSummariesSetting: (...args) => callOperation("putConversationsSummariesSetting", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsSummariesSetting">)),
  };
}
