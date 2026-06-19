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
export const GenesysCloudFullApiUsageOperationKeys = [
  "getUsageAggregatesQueryJob",
  "getUsageClientClientIdAggregatesQueryJob",
  "getUsageQueryExecutionIdResults",
  "getUsageSimplesearchExecutionIdResults",
  "postUsageAggregatesQueryJobs",
  "postUsageClientClientIdAggregatesQueryJobs",
  "postUsageQuery",
  "postUsageSimplesearch"
] as const;
export type GenesysCloudFullApiUsageOperationKey = typeof GenesysCloudFullApiUsageOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiUsageOperationPathParamMap {
  "getUsageAggregatesQueryJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getUsageClientClientIdAggregatesQueryJob": { "clientId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getUsageQueryExecutionIdResults": { "executionId": GenesysCloudFullApiPathParamValue };
  "getUsageSimplesearchExecutionIdResults": { "executionId": GenesysCloudFullApiPathParamValue };
  "postUsageAggregatesQueryJobs": {};
  "postUsageClientClientIdAggregatesQueryJobs": { "clientId": GenesysCloudFullApiPathParamValue };
  "postUsageQuery": {};
  "postUsageSimplesearch": {};
}

export interface GenesysCloudFullApiUsageOperationRequestMap {
  "getUsageAggregatesQueryJob": GenesysCloudFullApiOperationInput<"getUsageAggregatesQueryJob">;
  "getUsageClientClientIdAggregatesQueryJob": GenesysCloudFullApiOperationInput<"getUsageClientClientIdAggregatesQueryJob">;
  "getUsageQueryExecutionIdResults": GenesysCloudFullApiOperationInput<"getUsageQueryExecutionIdResults">;
  "getUsageSimplesearchExecutionIdResults": GenesysCloudFullApiOperationInput<"getUsageSimplesearchExecutionIdResults">;
  "postUsageAggregatesQueryJobs": GenesysCloudFullApiOperationInput<"postUsageAggregatesQueryJobs">;
  "postUsageClientClientIdAggregatesQueryJobs": GenesysCloudFullApiOperationInput<"postUsageClientClientIdAggregatesQueryJobs">;
  "postUsageQuery": GenesysCloudFullApiOperationInput<"postUsageQuery">;
  "postUsageSimplesearch": GenesysCloudFullApiOperationInput<"postUsageSimplesearch">;
}

export interface GenesysCloudFullApiUsageGeneratedClient {
  GetUsageAggregatesQueryJob(...args: GenesysCloudFullApiOperationArgs<"getUsageAggregatesQueryJob">): Promise<GenesysCloudFullApiOperationResponseMap["getUsageAggregatesQueryJob"]>;
  GetUsageClientClientIdAggregatesQueryJob(...args: GenesysCloudFullApiOperationArgs<"getUsageClientClientIdAggregatesQueryJob">): Promise<GenesysCloudFullApiOperationResponseMap["getUsageClientClientIdAggregatesQueryJob"]>;
  GetUsageQueryExecutionIdResults(...args: GenesysCloudFullApiOperationArgs<"getUsageQueryExecutionIdResults">): Promise<GenesysCloudFullApiOperationResponseMap["getUsageQueryExecutionIdResults"]>;
  GetUsageSimplesearchExecutionIdResults(...args: GenesysCloudFullApiOperationArgs<"getUsageSimplesearchExecutionIdResults">): Promise<GenesysCloudFullApiOperationResponseMap["getUsageSimplesearchExecutionIdResults"]>;
  PostUsageAggregatesQueryJobs(...args: GenesysCloudFullApiOperationArgs<"postUsageAggregatesQueryJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postUsageAggregatesQueryJobs"]>;
  PostUsageClientClientIdAggregatesQueryJobs(...args: GenesysCloudFullApiOperationArgs<"postUsageClientClientIdAggregatesQueryJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postUsageClientClientIdAggregatesQueryJobs"]>;
  PostUsageQuery(...args: GenesysCloudFullApiOperationArgs<"postUsageQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postUsageQuery"]>;
  PostUsageSimplesearch(...args: GenesysCloudFullApiOperationArgs<"postUsageSimplesearch">): Promise<GenesysCloudFullApiOperationResponseMap["postUsageSimplesearch"]>;
}

export const GenesysCloudFullApiUsageGeneratedFunctionNames = [
  "GetUsageAggregatesQueryJob",
  "GetUsageClientClientIdAggregatesQueryJob",
  "GetUsageQueryExecutionIdResults",
  "GetUsageSimplesearchExecutionIdResults",
  "PostUsageAggregatesQueryJobs",
  "PostUsageClientClientIdAggregatesQueryJobs",
  "PostUsageQuery",
  "PostUsageSimplesearch"
] as const satisfies readonly (keyof GenesysCloudFullApiUsageGeneratedClient)[];

export function createGenesysCloudFullApiUsageGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiUsageGeneratedClient {
  return {
    GetUsageAggregatesQueryJob: (...args) => callOperation("getUsageAggregatesQueryJob", ...(args as GenesysCloudFullApiOperationArgs<"getUsageAggregatesQueryJob">)),
    GetUsageClientClientIdAggregatesQueryJob: (...args) => callOperation("getUsageClientClientIdAggregatesQueryJob", ...(args as GenesysCloudFullApiOperationArgs<"getUsageClientClientIdAggregatesQueryJob">)),
    GetUsageQueryExecutionIdResults: (...args) => callOperation("getUsageQueryExecutionIdResults", ...(args as GenesysCloudFullApiOperationArgs<"getUsageQueryExecutionIdResults">)),
    GetUsageSimplesearchExecutionIdResults: (...args) => callOperation("getUsageSimplesearchExecutionIdResults", ...(args as GenesysCloudFullApiOperationArgs<"getUsageSimplesearchExecutionIdResults">)),
    PostUsageAggregatesQueryJobs: (...args) => callOperation("postUsageAggregatesQueryJobs", ...(args as GenesysCloudFullApiOperationArgs<"postUsageAggregatesQueryJobs">)),
    PostUsageClientClientIdAggregatesQueryJobs: (...args) => callOperation("postUsageClientClientIdAggregatesQueryJobs", ...(args as GenesysCloudFullApiOperationArgs<"postUsageClientClientIdAggregatesQueryJobs">)),
    PostUsageQuery: (...args) => callOperation("postUsageQuery", ...(args as GenesysCloudFullApiOperationArgs<"postUsageQuery">)),
    PostUsageSimplesearch: (...args) => callOperation("postUsageSimplesearch", ...(args as GenesysCloudFullApiOperationArgs<"postUsageSimplesearch">)),
  };
}
