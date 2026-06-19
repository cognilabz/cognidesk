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
export const GenesysCloudFullApiLogCaptureOperationKeys = [
  "deleteDiagnosticsLogcaptureBrowserUser",
  "getDiagnosticsLogcaptureBrowserEntriesDownloadJob",
  "getDiagnosticsLogcaptureBrowserUser",
  "getDiagnosticsLogcaptureBrowserUsers",
  "postDiagnosticsLogcaptureBrowserEntriesDownloadJobs",
  "postDiagnosticsLogcaptureBrowserEntriesQuery",
  "postDiagnosticsLogcaptureBrowserUser"
] as const;
export type GenesysCloudFullApiLogCaptureOperationKey = typeof GenesysCloudFullApiLogCaptureOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiLogCaptureOperationPathParamMap {
  "deleteDiagnosticsLogcaptureBrowserUser": { "userId": GenesysCloudFullApiPathParamValue };
  "getDiagnosticsLogcaptureBrowserEntriesDownloadJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getDiagnosticsLogcaptureBrowserUser": { "userId": GenesysCloudFullApiPathParamValue };
  "getDiagnosticsLogcaptureBrowserUsers": {};
  "postDiagnosticsLogcaptureBrowserEntriesDownloadJobs": {};
  "postDiagnosticsLogcaptureBrowserEntriesQuery": {};
  "postDiagnosticsLogcaptureBrowserUser": { "userId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiLogCaptureOperationRequestMap {
  "deleteDiagnosticsLogcaptureBrowserUser": GenesysCloudFullApiOperationInput<"deleteDiagnosticsLogcaptureBrowserUser">;
  "getDiagnosticsLogcaptureBrowserEntriesDownloadJob": GenesysCloudFullApiOperationInput<"getDiagnosticsLogcaptureBrowserEntriesDownloadJob">;
  "getDiagnosticsLogcaptureBrowserUser": GenesysCloudFullApiOperationInput<"getDiagnosticsLogcaptureBrowserUser">;
  "getDiagnosticsLogcaptureBrowserUsers": GenesysCloudFullApiOperationInput<"getDiagnosticsLogcaptureBrowserUsers">;
  "postDiagnosticsLogcaptureBrowserEntriesDownloadJobs": GenesysCloudFullApiOperationInput<"postDiagnosticsLogcaptureBrowserEntriesDownloadJobs">;
  "postDiagnosticsLogcaptureBrowserEntriesQuery": GenesysCloudFullApiOperationInput<"postDiagnosticsLogcaptureBrowserEntriesQuery">;
  "postDiagnosticsLogcaptureBrowserUser": GenesysCloudFullApiOperationInput<"postDiagnosticsLogcaptureBrowserUser">;
}

export interface GenesysCloudFullApiLogCaptureGeneratedClient {
  DeleteDiagnosticsLogcaptureBrowserUser(...args: GenesysCloudFullApiOperationArgs<"deleteDiagnosticsLogcaptureBrowserUser">): Promise<GenesysCloudFullApiOperationResponseMap["deleteDiagnosticsLogcaptureBrowserUser"]>;
  GetDiagnosticsLogcaptureBrowserEntriesDownloadJob(...args: GenesysCloudFullApiOperationArgs<"getDiagnosticsLogcaptureBrowserEntriesDownloadJob">): Promise<GenesysCloudFullApiOperationResponseMap["getDiagnosticsLogcaptureBrowserEntriesDownloadJob"]>;
  GetDiagnosticsLogcaptureBrowserUser(...args: GenesysCloudFullApiOperationArgs<"getDiagnosticsLogcaptureBrowserUser">): Promise<GenesysCloudFullApiOperationResponseMap["getDiagnosticsLogcaptureBrowserUser"]>;
  GetDiagnosticsLogcaptureBrowserUsers(...args: GenesysCloudFullApiOperationArgs<"getDiagnosticsLogcaptureBrowserUsers">): Promise<GenesysCloudFullApiOperationResponseMap["getDiagnosticsLogcaptureBrowserUsers"]>;
  PostDiagnosticsLogcaptureBrowserEntriesDownloadJobs(...args: GenesysCloudFullApiOperationArgs<"postDiagnosticsLogcaptureBrowserEntriesDownloadJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postDiagnosticsLogcaptureBrowserEntriesDownloadJobs"]>;
  PostDiagnosticsLogcaptureBrowserEntriesQuery(...args: GenesysCloudFullApiOperationArgs<"postDiagnosticsLogcaptureBrowserEntriesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postDiagnosticsLogcaptureBrowserEntriesQuery"]>;
  PostDiagnosticsLogcaptureBrowserUser(...args: GenesysCloudFullApiOperationArgs<"postDiagnosticsLogcaptureBrowserUser">): Promise<GenesysCloudFullApiOperationResponseMap["postDiagnosticsLogcaptureBrowserUser"]>;
}

export const GenesysCloudFullApiLogCaptureGeneratedFunctionNames = [
  "DeleteDiagnosticsLogcaptureBrowserUser",
  "GetDiagnosticsLogcaptureBrowserEntriesDownloadJob",
  "GetDiagnosticsLogcaptureBrowserUser",
  "GetDiagnosticsLogcaptureBrowserUsers",
  "PostDiagnosticsLogcaptureBrowserEntriesDownloadJobs",
  "PostDiagnosticsLogcaptureBrowserEntriesQuery",
  "PostDiagnosticsLogcaptureBrowserUser"
] as const satisfies readonly (keyof GenesysCloudFullApiLogCaptureGeneratedClient)[];

export function createGenesysCloudFullApiLogCaptureGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiLogCaptureGeneratedClient {
  return {
    DeleteDiagnosticsLogcaptureBrowserUser: (...args) => callOperation("deleteDiagnosticsLogcaptureBrowserUser", ...(args as GenesysCloudFullApiOperationArgs<"deleteDiagnosticsLogcaptureBrowserUser">)),
    GetDiagnosticsLogcaptureBrowserEntriesDownloadJob: (...args) => callOperation("getDiagnosticsLogcaptureBrowserEntriesDownloadJob", ...(args as GenesysCloudFullApiOperationArgs<"getDiagnosticsLogcaptureBrowserEntriesDownloadJob">)),
    GetDiagnosticsLogcaptureBrowserUser: (...args) => callOperation("getDiagnosticsLogcaptureBrowserUser", ...(args as GenesysCloudFullApiOperationArgs<"getDiagnosticsLogcaptureBrowserUser">)),
    GetDiagnosticsLogcaptureBrowserUsers: (...args) => callOperation("getDiagnosticsLogcaptureBrowserUsers", ...(args as GenesysCloudFullApiOperationArgs<"getDiagnosticsLogcaptureBrowserUsers">)),
    PostDiagnosticsLogcaptureBrowserEntriesDownloadJobs: (...args) => callOperation("postDiagnosticsLogcaptureBrowserEntriesDownloadJobs", ...(args as GenesysCloudFullApiOperationArgs<"postDiagnosticsLogcaptureBrowserEntriesDownloadJobs">)),
    PostDiagnosticsLogcaptureBrowserEntriesQuery: (...args) => callOperation("postDiagnosticsLogcaptureBrowserEntriesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postDiagnosticsLogcaptureBrowserEntriesQuery">)),
    PostDiagnosticsLogcaptureBrowserUser: (...args) => callOperation("postDiagnosticsLogcaptureBrowserUser", ...(args as GenesysCloudFullApiOperationArgs<"postDiagnosticsLogcaptureBrowserUser">)),
  };
}
