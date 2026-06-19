// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiExploreAPIOperationKeys = [
  "getReportJobs",
  "createReportJob",
  "getReportJobDetail",
  "deleteReportJob",
  "getReportJobResult",
  "deleteReportFile",
  "data-reports-type-jobs-get",
  "data-reports-type-jobs-post",
  "data-reports-type-jobs-id-get",
  "data-reports-type-files-id-get",
  "data-reports-type-files-id-delete"
] as const;
export type TalkdeskFullApiExploreAPIOperationKey = typeof TalkdeskFullApiExploreAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiExploreAPIOperationPathParamMap {
  "getReportJobs": { "type": TalkdeskFullApiPathParamValue };
  "createReportJob": { "type": TalkdeskFullApiPathParamValue };
  "getReportJobDetail": { "type": TalkdeskFullApiPathParamValue; "id": TalkdeskFullApiPathParamValue };
  "deleteReportJob": { "type": TalkdeskFullApiPathParamValue; "id": TalkdeskFullApiPathParamValue };
  "getReportJobResult": { "type": TalkdeskFullApiPathParamValue; "id": TalkdeskFullApiPathParamValue };
  "deleteReportFile": { "type": TalkdeskFullApiPathParamValue; "id": TalkdeskFullApiPathParamValue };
  "data-reports-type-jobs-get": { "type": TalkdeskFullApiPathParamValue };
  "data-reports-type-jobs-post": { "type": TalkdeskFullApiPathParamValue };
  "data-reports-type-jobs-id-get": { "type": TalkdeskFullApiPathParamValue; "id": TalkdeskFullApiPathParamValue };
  "data-reports-type-files-id-get": { "type": TalkdeskFullApiPathParamValue; "id": TalkdeskFullApiPathParamValue };
  "data-reports-type-files-id-delete": { "type": TalkdeskFullApiPathParamValue; "id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiExploreAPIOperationRequestMap {
  "getReportJobs": TalkdeskFullApiOperationInput<"getReportJobs">;
  "createReportJob": TalkdeskFullApiOperationInput<"createReportJob">;
  "getReportJobDetail": TalkdeskFullApiOperationInput<"getReportJobDetail">;
  "deleteReportJob": TalkdeskFullApiOperationInput<"deleteReportJob">;
  "getReportJobResult": TalkdeskFullApiOperationInput<"getReportJobResult">;
  "deleteReportFile": TalkdeskFullApiOperationInput<"deleteReportFile">;
  "data-reports-type-jobs-get": TalkdeskFullApiOperationInput<"data-reports-type-jobs-get">;
  "data-reports-type-jobs-post": TalkdeskFullApiOperationInput<"data-reports-type-jobs-post">;
  "data-reports-type-jobs-id-get": TalkdeskFullApiOperationInput<"data-reports-type-jobs-id-get">;
  "data-reports-type-files-id-get": TalkdeskFullApiOperationInput<"data-reports-type-files-id-get">;
  "data-reports-type-files-id-delete": TalkdeskFullApiOperationInput<"data-reports-type-files-id-delete">;
}

export interface TalkdeskFullApiExploreAPIGeneratedClient {
  GetReportJobs(...args: TalkdeskFullApiOperationArgs<"getReportJobs">): Promise<TalkdeskFullApiOperationResponseMap["getReportJobs"]>;
  CreateReportJob(...args: TalkdeskFullApiOperationArgs<"createReportJob">): Promise<TalkdeskFullApiOperationResponseMap["createReportJob"]>;
  GetReportJobDetail(...args: TalkdeskFullApiOperationArgs<"getReportJobDetail">): Promise<TalkdeskFullApiOperationResponseMap["getReportJobDetail"]>;
  DeleteReportJob(...args: TalkdeskFullApiOperationArgs<"deleteReportJob">): Promise<TalkdeskFullApiOperationResponseMap["deleteReportJob"]>;
  GetReportJobResult(...args: TalkdeskFullApiOperationArgs<"getReportJobResult">): Promise<TalkdeskFullApiOperationResponseMap["getReportJobResult"]>;
  DeleteReportFile(...args: TalkdeskFullApiOperationArgs<"deleteReportFile">): Promise<TalkdeskFullApiOperationResponseMap["deleteReportFile"]>;
  DataReportsTypeJobsGet(...args: TalkdeskFullApiOperationArgs<"data-reports-type-jobs-get">): Promise<TalkdeskFullApiOperationResponseMap["data-reports-type-jobs-get"]>;
  DataReportsTypeJobsPost(...args: TalkdeskFullApiOperationArgs<"data-reports-type-jobs-post">): Promise<TalkdeskFullApiOperationResponseMap["data-reports-type-jobs-post"]>;
  DataReportsTypeJobsIdGet(...args: TalkdeskFullApiOperationArgs<"data-reports-type-jobs-id-get">): Promise<TalkdeskFullApiOperationResponseMap["data-reports-type-jobs-id-get"]>;
  DataReportsTypeFilesIdGet(...args: TalkdeskFullApiOperationArgs<"data-reports-type-files-id-get">): Promise<TalkdeskFullApiOperationResponseMap["data-reports-type-files-id-get"]>;
  DataReportsTypeFilesIdDelete(...args: TalkdeskFullApiOperationArgs<"data-reports-type-files-id-delete">): Promise<TalkdeskFullApiOperationResponseMap["data-reports-type-files-id-delete"]>;
}

export const TalkdeskFullApiExploreAPIGeneratedFunctionNames = [
  "GetReportJobs",
  "CreateReportJob",
  "GetReportJobDetail",
  "DeleteReportJob",
  "GetReportJobResult",
  "DeleteReportFile",
  "DataReportsTypeJobsGet",
  "DataReportsTypeJobsPost",
  "DataReportsTypeJobsIdGet",
  "DataReportsTypeFilesIdGet",
  "DataReportsTypeFilesIdDelete"
] as const satisfies readonly (keyof TalkdeskFullApiExploreAPIGeneratedClient)[];

export function createTalkdeskFullApiExploreAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiExploreAPIGeneratedClient {
  return {
    GetReportJobs: (...args) => callOperation("getReportJobs", ...(args as TalkdeskFullApiOperationArgs<"getReportJobs">)),
    CreateReportJob: (...args) => callOperation("createReportJob", ...(args as TalkdeskFullApiOperationArgs<"createReportJob">)),
    GetReportJobDetail: (...args) => callOperation("getReportJobDetail", ...(args as TalkdeskFullApiOperationArgs<"getReportJobDetail">)),
    DeleteReportJob: (...args) => callOperation("deleteReportJob", ...(args as TalkdeskFullApiOperationArgs<"deleteReportJob">)),
    GetReportJobResult: (...args) => callOperation("getReportJobResult", ...(args as TalkdeskFullApiOperationArgs<"getReportJobResult">)),
    DeleteReportFile: (...args) => callOperation("deleteReportFile", ...(args as TalkdeskFullApiOperationArgs<"deleteReportFile">)),
    DataReportsTypeJobsGet: (...args) => callOperation("data-reports-type-jobs-get", ...(args as TalkdeskFullApiOperationArgs<"data-reports-type-jobs-get">)),
    DataReportsTypeJobsPost: (...args) => callOperation("data-reports-type-jobs-post", ...(args as TalkdeskFullApiOperationArgs<"data-reports-type-jobs-post">)),
    DataReportsTypeJobsIdGet: (...args) => callOperation("data-reports-type-jobs-id-get", ...(args as TalkdeskFullApiOperationArgs<"data-reports-type-jobs-id-get">)),
    DataReportsTypeFilesIdGet: (...args) => callOperation("data-reports-type-files-id-get", ...(args as TalkdeskFullApiOperationArgs<"data-reports-type-files-id-get">)),
    DataReportsTypeFilesIdDelete: (...args) => callOperation("data-reports-type-files-id-delete", ...(args as TalkdeskFullApiOperationArgs<"data-reports-type-files-id-delete">)),
  };
}
