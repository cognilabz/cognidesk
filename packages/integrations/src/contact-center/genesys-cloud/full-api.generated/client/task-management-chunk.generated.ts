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
export const GenesysCloudFullApiTaskManagementOperationKeys = [
  "deleteTaskmanagementWorkbin",
  "deleteTaskmanagementWorkitem",
  "deleteTaskmanagementWorkitemsBulkAddJob",
  "deleteTaskmanagementWorkitemsBulkTerminateJob",
  "deleteTaskmanagementWorkitemsSchema",
  "deleteTaskmanagementWorktype",
  "deleteTaskmanagementWorktypeFlowsDatebasedRule",
  "deleteTaskmanagementWorktypeFlowsOnattributechangeRule",
  "deleteTaskmanagementWorktypeFlowsOncreateRule",
  "deleteTaskmanagementWorktypeStatus",
  "getTaskmanagementWorkbin",
  "getTaskmanagementWorkbinHistory",
  "getTaskmanagementWorkbinVersion",
  "getTaskmanagementWorkbinVersions",
  "getTaskmanagementWorkitem",
  "getTaskmanagementWorkitemHistory",
  "getTaskmanagementWorkitemsBulkAddJob",
  "getTaskmanagementWorkitemsBulkAddJobResults",
  "getTaskmanagementWorkitemsBulkJobsUsersMe",
  "getTaskmanagementWorkitemsBulkTerminateJob",
  "getTaskmanagementWorkitemsBulkTerminateJobResults",
  "getTaskmanagementWorkitemsQueryJob",
  "getTaskmanagementWorkitemsQueryJobResults",
  "getTaskmanagementWorkitemsSchema",
  "getTaskmanagementWorkitemsSchemas",
  "getTaskmanagementWorkitemsSchemasCoretype",
  "getTaskmanagementWorkitemsSchemasCoretypes",
  "getTaskmanagementWorkitemsSchemasLimits",
  "getTaskmanagementWorkitemsSchemaVersion",
  "getTaskmanagementWorkitemsSchemaVersions",
  "getTaskmanagementWorkitemUserWrapups",
  "getTaskmanagementWorkitemVersion",
  "getTaskmanagementWorkitemVersions",
  "getTaskmanagementWorkitemWrapups",
  "getTaskmanagementWorktype",
  "getTaskmanagementWorktypeFlowsDatebasedRule",
  "getTaskmanagementWorktypeFlowsDatebasedRules",
  "getTaskmanagementWorktypeFlowsOnattributechangeRule",
  "getTaskmanagementWorktypeFlowsOnattributechangeRules",
  "getTaskmanagementWorktypeFlowsOncreateRule",
  "getTaskmanagementWorktypeFlowsOncreateRules",
  "getTaskmanagementWorktypeHistory",
  "getTaskmanagementWorktypeStatus",
  "getTaskmanagementWorktypeStatuses",
  "getTaskmanagementWorktypeVersion",
  "getTaskmanagementWorktypeVersions",
  "patchTaskmanagementWorkbin",
  "patchTaskmanagementWorkitem",
  "patchTaskmanagementWorkitemAssignment",
  "patchTaskmanagementWorkitemsBulkAddJob",
  "patchTaskmanagementWorkitemsBulkTerminateJob",
  "patchTaskmanagementWorkitemUsersMeWrapups",
  "patchTaskmanagementWorkitemUserWrapups",
  "patchTaskmanagementWorktype",
  "patchTaskmanagementWorktypeFlowsDatebasedRule",
  "patchTaskmanagementWorktypeFlowsOnattributechangeRule",
  "patchTaskmanagementWorktypeFlowsOncreateRule",
  "patchTaskmanagementWorktypeStatus",
  "postTaskmanagementWorkbins",
  "postTaskmanagementWorkbinsQuery",
  "postTaskmanagementWorkitemAcdCancel",
  "postTaskmanagementWorkitemDisconnect",
  "postTaskmanagementWorkitems",
  "postTaskmanagementWorkitemsBulkAddJobs",
  "postTaskmanagementWorkitemsBulkTerminateJobs",
  "postTaskmanagementWorkitemsQuery",
  "postTaskmanagementWorkitemsQueryJobs",
  "postTaskmanagementWorkitemsSchemas",
  "postTaskmanagementWorkitemTerminate",
  "postTaskmanagementWorktypeFlowsDatebasedRules",
  "postTaskmanagementWorktypeFlowsOnattributechangeRules",
  "postTaskmanagementWorktypeFlowsOncreateRules",
  "postTaskmanagementWorktypes",
  "postTaskmanagementWorktypesQuery",
  "postTaskmanagementWorktypeStatuses",
  "putTaskmanagementWorkitemsSchema"
] as const;
export type GenesysCloudFullApiTaskManagementOperationKey = typeof GenesysCloudFullApiTaskManagementOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiTaskManagementOperationPathParamMap {
  "deleteTaskmanagementWorkbin": { "workbinId": GenesysCloudFullApiPathParamValue };
  "deleteTaskmanagementWorkitem": { "workitemId": GenesysCloudFullApiPathParamValue };
  "deleteTaskmanagementWorkitemsBulkAddJob": { "bulkJobId": GenesysCloudFullApiPathParamValue };
  "deleteTaskmanagementWorkitemsBulkTerminateJob": { "bulkJobId": GenesysCloudFullApiPathParamValue };
  "deleteTaskmanagementWorkitemsSchema": { "schemaId": GenesysCloudFullApiPathParamValue };
  "deleteTaskmanagementWorktype": { "worktypeId": GenesysCloudFullApiPathParamValue };
  "deleteTaskmanagementWorktypeFlowsDatebasedRule": { "worktypeId": GenesysCloudFullApiPathParamValue; "ruleId": GenesysCloudFullApiPathParamValue };
  "deleteTaskmanagementWorktypeFlowsOnattributechangeRule": { "worktypeId": GenesysCloudFullApiPathParamValue; "ruleId": GenesysCloudFullApiPathParamValue };
  "deleteTaskmanagementWorktypeFlowsOncreateRule": { "worktypeId": GenesysCloudFullApiPathParamValue; "ruleId": GenesysCloudFullApiPathParamValue };
  "deleteTaskmanagementWorktypeStatus": { "worktypeId": GenesysCloudFullApiPathParamValue; "statusId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorkbin": { "workbinId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorkbinHistory": { "workbinId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorkbinVersion": { "workbinId": GenesysCloudFullApiPathParamValue; "entityVersion": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorkbinVersions": { "workbinId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorkitem": { "workitemId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorkitemHistory": { "workitemId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorkitemsBulkAddJob": { "bulkJobId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorkitemsBulkAddJobResults": { "bulkJobId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorkitemsBulkJobsUsersMe": {};
  "getTaskmanagementWorkitemsBulkTerminateJob": { "bulkJobId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorkitemsBulkTerminateJobResults": { "bulkJobId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorkitemsQueryJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorkitemsQueryJobResults": { "jobId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorkitemsSchema": { "schemaId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorkitemsSchemas": {};
  "getTaskmanagementWorkitemsSchemasCoretype": { "coreTypeName": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorkitemsSchemasCoretypes": {};
  "getTaskmanagementWorkitemsSchemasLimits": {};
  "getTaskmanagementWorkitemsSchemaVersion": { "schemaId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorkitemsSchemaVersions": { "schemaId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorkitemUserWrapups": { "workitemId": GenesysCloudFullApiPathParamValue; "userId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorkitemVersion": { "workitemId": GenesysCloudFullApiPathParamValue; "entityVersion": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorkitemVersions": { "workitemId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorkitemWrapups": { "workitemId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorktype": { "worktypeId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorktypeFlowsDatebasedRule": { "worktypeId": GenesysCloudFullApiPathParamValue; "ruleId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorktypeFlowsDatebasedRules": { "worktypeId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorktypeFlowsOnattributechangeRule": { "worktypeId": GenesysCloudFullApiPathParamValue; "ruleId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorktypeFlowsOnattributechangeRules": { "worktypeId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorktypeFlowsOncreateRule": { "worktypeId": GenesysCloudFullApiPathParamValue; "ruleId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorktypeFlowsOncreateRules": { "worktypeId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorktypeHistory": { "worktypeId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorktypeStatus": { "worktypeId": GenesysCloudFullApiPathParamValue; "statusId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorktypeStatuses": { "worktypeId": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorktypeVersion": { "worktypeId": GenesysCloudFullApiPathParamValue; "entityVersion": GenesysCloudFullApiPathParamValue };
  "getTaskmanagementWorktypeVersions": { "worktypeId": GenesysCloudFullApiPathParamValue };
  "patchTaskmanagementWorkbin": { "workbinId": GenesysCloudFullApiPathParamValue };
  "patchTaskmanagementWorkitem": { "workitemId": GenesysCloudFullApiPathParamValue };
  "patchTaskmanagementWorkitemAssignment": { "workitemId": GenesysCloudFullApiPathParamValue };
  "patchTaskmanagementWorkitemsBulkAddJob": { "bulkJobId": GenesysCloudFullApiPathParamValue };
  "patchTaskmanagementWorkitemsBulkTerminateJob": { "bulkJobId": GenesysCloudFullApiPathParamValue };
  "patchTaskmanagementWorkitemUsersMeWrapups": { "workitemId": GenesysCloudFullApiPathParamValue };
  "patchTaskmanagementWorkitemUserWrapups": { "workitemId": GenesysCloudFullApiPathParamValue; "userId": GenesysCloudFullApiPathParamValue };
  "patchTaskmanagementWorktype": { "worktypeId": GenesysCloudFullApiPathParamValue };
  "patchTaskmanagementWorktypeFlowsDatebasedRule": { "worktypeId": GenesysCloudFullApiPathParamValue; "ruleId": GenesysCloudFullApiPathParamValue };
  "patchTaskmanagementWorktypeFlowsOnattributechangeRule": { "worktypeId": GenesysCloudFullApiPathParamValue; "ruleId": GenesysCloudFullApiPathParamValue };
  "patchTaskmanagementWorktypeFlowsOncreateRule": { "worktypeId": GenesysCloudFullApiPathParamValue; "ruleId": GenesysCloudFullApiPathParamValue };
  "patchTaskmanagementWorktypeStatus": { "worktypeId": GenesysCloudFullApiPathParamValue; "statusId": GenesysCloudFullApiPathParamValue };
  "postTaskmanagementWorkbins": {};
  "postTaskmanagementWorkbinsQuery": {};
  "postTaskmanagementWorkitemAcdCancel": { "workitemId": GenesysCloudFullApiPathParamValue };
  "postTaskmanagementWorkitemDisconnect": { "workitemId": GenesysCloudFullApiPathParamValue };
  "postTaskmanagementWorkitems": {};
  "postTaskmanagementWorkitemsBulkAddJobs": {};
  "postTaskmanagementWorkitemsBulkTerminateJobs": {};
  "postTaskmanagementWorkitemsQuery": {};
  "postTaskmanagementWorkitemsQueryJobs": {};
  "postTaskmanagementWorkitemsSchemas": {};
  "postTaskmanagementWorkitemTerminate": { "workitemId": GenesysCloudFullApiPathParamValue };
  "postTaskmanagementWorktypeFlowsDatebasedRules": { "worktypeId": GenesysCloudFullApiPathParamValue };
  "postTaskmanagementWorktypeFlowsOnattributechangeRules": { "worktypeId": GenesysCloudFullApiPathParamValue };
  "postTaskmanagementWorktypeFlowsOncreateRules": { "worktypeId": GenesysCloudFullApiPathParamValue };
  "postTaskmanagementWorktypes": {};
  "postTaskmanagementWorktypesQuery": {};
  "postTaskmanagementWorktypeStatuses": { "worktypeId": GenesysCloudFullApiPathParamValue };
  "putTaskmanagementWorkitemsSchema": { "schemaId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiTaskManagementOperationRequestMap {
  "deleteTaskmanagementWorkbin": GenesysCloudFullApiOperationInput<"deleteTaskmanagementWorkbin">;
  "deleteTaskmanagementWorkitem": GenesysCloudFullApiOperationInput<"deleteTaskmanagementWorkitem">;
  "deleteTaskmanagementWorkitemsBulkAddJob": GenesysCloudFullApiOperationInput<"deleteTaskmanagementWorkitemsBulkAddJob">;
  "deleteTaskmanagementWorkitemsBulkTerminateJob": GenesysCloudFullApiOperationInput<"deleteTaskmanagementWorkitemsBulkTerminateJob">;
  "deleteTaskmanagementWorkitemsSchema": GenesysCloudFullApiOperationInput<"deleteTaskmanagementWorkitemsSchema">;
  "deleteTaskmanagementWorktype": GenesysCloudFullApiOperationInput<"deleteTaskmanagementWorktype">;
  "deleteTaskmanagementWorktypeFlowsDatebasedRule": GenesysCloudFullApiOperationInput<"deleteTaskmanagementWorktypeFlowsDatebasedRule">;
  "deleteTaskmanagementWorktypeFlowsOnattributechangeRule": GenesysCloudFullApiOperationInput<"deleteTaskmanagementWorktypeFlowsOnattributechangeRule">;
  "deleteTaskmanagementWorktypeFlowsOncreateRule": GenesysCloudFullApiOperationInput<"deleteTaskmanagementWorktypeFlowsOncreateRule">;
  "deleteTaskmanagementWorktypeStatus": GenesysCloudFullApiOperationInput<"deleteTaskmanagementWorktypeStatus">;
  "getTaskmanagementWorkbin": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkbin">;
  "getTaskmanagementWorkbinHistory": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkbinHistory">;
  "getTaskmanagementWorkbinVersion": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkbinVersion">;
  "getTaskmanagementWorkbinVersions": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkbinVersions">;
  "getTaskmanagementWorkitem": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkitem">;
  "getTaskmanagementWorkitemHistory": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkitemHistory">;
  "getTaskmanagementWorkitemsBulkAddJob": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkitemsBulkAddJob">;
  "getTaskmanagementWorkitemsBulkAddJobResults": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkitemsBulkAddJobResults">;
  "getTaskmanagementWorkitemsBulkJobsUsersMe": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkitemsBulkJobsUsersMe">;
  "getTaskmanagementWorkitemsBulkTerminateJob": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkitemsBulkTerminateJob">;
  "getTaskmanagementWorkitemsBulkTerminateJobResults": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkitemsBulkTerminateJobResults">;
  "getTaskmanagementWorkitemsQueryJob": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkitemsQueryJob">;
  "getTaskmanagementWorkitemsQueryJobResults": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkitemsQueryJobResults">;
  "getTaskmanagementWorkitemsSchema": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkitemsSchema">;
  "getTaskmanagementWorkitemsSchemas": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkitemsSchemas">;
  "getTaskmanagementWorkitemsSchemasCoretype": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkitemsSchemasCoretype">;
  "getTaskmanagementWorkitemsSchemasCoretypes": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkitemsSchemasCoretypes">;
  "getTaskmanagementWorkitemsSchemasLimits": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkitemsSchemasLimits">;
  "getTaskmanagementWorkitemsSchemaVersion": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkitemsSchemaVersion">;
  "getTaskmanagementWorkitemsSchemaVersions": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkitemsSchemaVersions">;
  "getTaskmanagementWorkitemUserWrapups": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkitemUserWrapups">;
  "getTaskmanagementWorkitemVersion": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkitemVersion">;
  "getTaskmanagementWorkitemVersions": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkitemVersions">;
  "getTaskmanagementWorkitemWrapups": GenesysCloudFullApiOperationInput<"getTaskmanagementWorkitemWrapups">;
  "getTaskmanagementWorktype": GenesysCloudFullApiOperationInput<"getTaskmanagementWorktype">;
  "getTaskmanagementWorktypeFlowsDatebasedRule": GenesysCloudFullApiOperationInput<"getTaskmanagementWorktypeFlowsDatebasedRule">;
  "getTaskmanagementWorktypeFlowsDatebasedRules": GenesysCloudFullApiOperationInput<"getTaskmanagementWorktypeFlowsDatebasedRules">;
  "getTaskmanagementWorktypeFlowsOnattributechangeRule": GenesysCloudFullApiOperationInput<"getTaskmanagementWorktypeFlowsOnattributechangeRule">;
  "getTaskmanagementWorktypeFlowsOnattributechangeRules": GenesysCloudFullApiOperationInput<"getTaskmanagementWorktypeFlowsOnattributechangeRules">;
  "getTaskmanagementWorktypeFlowsOncreateRule": GenesysCloudFullApiOperationInput<"getTaskmanagementWorktypeFlowsOncreateRule">;
  "getTaskmanagementWorktypeFlowsOncreateRules": GenesysCloudFullApiOperationInput<"getTaskmanagementWorktypeFlowsOncreateRules">;
  "getTaskmanagementWorktypeHistory": GenesysCloudFullApiOperationInput<"getTaskmanagementWorktypeHistory">;
  "getTaskmanagementWorktypeStatus": GenesysCloudFullApiOperationInput<"getTaskmanagementWorktypeStatus">;
  "getTaskmanagementWorktypeStatuses": GenesysCloudFullApiOperationInput<"getTaskmanagementWorktypeStatuses">;
  "getTaskmanagementWorktypeVersion": GenesysCloudFullApiOperationInput<"getTaskmanagementWorktypeVersion">;
  "getTaskmanagementWorktypeVersions": GenesysCloudFullApiOperationInput<"getTaskmanagementWorktypeVersions">;
  "patchTaskmanagementWorkbin": GenesysCloudFullApiOperationInput<"patchTaskmanagementWorkbin">;
  "patchTaskmanagementWorkitem": GenesysCloudFullApiOperationInput<"patchTaskmanagementWorkitem">;
  "patchTaskmanagementWorkitemAssignment": GenesysCloudFullApiOperationInput<"patchTaskmanagementWorkitemAssignment">;
  "patchTaskmanagementWorkitemsBulkAddJob": GenesysCloudFullApiOperationInput<"patchTaskmanagementWorkitemsBulkAddJob">;
  "patchTaskmanagementWorkitemsBulkTerminateJob": GenesysCloudFullApiOperationInput<"patchTaskmanagementWorkitemsBulkTerminateJob">;
  "patchTaskmanagementWorkitemUsersMeWrapups": GenesysCloudFullApiOperationInput<"patchTaskmanagementWorkitemUsersMeWrapups">;
  "patchTaskmanagementWorkitemUserWrapups": GenesysCloudFullApiOperationInput<"patchTaskmanagementWorkitemUserWrapups">;
  "patchTaskmanagementWorktype": GenesysCloudFullApiOperationInput<"patchTaskmanagementWorktype">;
  "patchTaskmanagementWorktypeFlowsDatebasedRule": GenesysCloudFullApiOperationInput<"patchTaskmanagementWorktypeFlowsDatebasedRule">;
  "patchTaskmanagementWorktypeFlowsOnattributechangeRule": GenesysCloudFullApiOperationInput<"patchTaskmanagementWorktypeFlowsOnattributechangeRule">;
  "patchTaskmanagementWorktypeFlowsOncreateRule": GenesysCloudFullApiOperationInput<"patchTaskmanagementWorktypeFlowsOncreateRule">;
  "patchTaskmanagementWorktypeStatus": GenesysCloudFullApiOperationInput<"patchTaskmanagementWorktypeStatus">;
  "postTaskmanagementWorkbins": GenesysCloudFullApiOperationInput<"postTaskmanagementWorkbins">;
  "postTaskmanagementWorkbinsQuery": GenesysCloudFullApiOperationInput<"postTaskmanagementWorkbinsQuery">;
  "postTaskmanagementWorkitemAcdCancel": GenesysCloudFullApiOperationInput<"postTaskmanagementWorkitemAcdCancel">;
  "postTaskmanagementWorkitemDisconnect": GenesysCloudFullApiOperationInput<"postTaskmanagementWorkitemDisconnect">;
  "postTaskmanagementWorkitems": GenesysCloudFullApiOperationInput<"postTaskmanagementWorkitems">;
  "postTaskmanagementWorkitemsBulkAddJobs": GenesysCloudFullApiOperationInput<"postTaskmanagementWorkitemsBulkAddJobs">;
  "postTaskmanagementWorkitemsBulkTerminateJobs": GenesysCloudFullApiOperationInput<"postTaskmanagementWorkitemsBulkTerminateJobs">;
  "postTaskmanagementWorkitemsQuery": GenesysCloudFullApiOperationInput<"postTaskmanagementWorkitemsQuery">;
  "postTaskmanagementWorkitemsQueryJobs": GenesysCloudFullApiOperationInput<"postTaskmanagementWorkitemsQueryJobs">;
  "postTaskmanagementWorkitemsSchemas": GenesysCloudFullApiOperationInput<"postTaskmanagementWorkitemsSchemas">;
  "postTaskmanagementWorkitemTerminate": GenesysCloudFullApiOperationInput<"postTaskmanagementWorkitemTerminate">;
  "postTaskmanagementWorktypeFlowsDatebasedRules": GenesysCloudFullApiOperationInput<"postTaskmanagementWorktypeFlowsDatebasedRules">;
  "postTaskmanagementWorktypeFlowsOnattributechangeRules": GenesysCloudFullApiOperationInput<"postTaskmanagementWorktypeFlowsOnattributechangeRules">;
  "postTaskmanagementWorktypeFlowsOncreateRules": GenesysCloudFullApiOperationInput<"postTaskmanagementWorktypeFlowsOncreateRules">;
  "postTaskmanagementWorktypes": GenesysCloudFullApiOperationInput<"postTaskmanagementWorktypes">;
  "postTaskmanagementWorktypesQuery": GenesysCloudFullApiOperationInput<"postTaskmanagementWorktypesQuery">;
  "postTaskmanagementWorktypeStatuses": GenesysCloudFullApiOperationInput<"postTaskmanagementWorktypeStatuses">;
  "putTaskmanagementWorkitemsSchema": GenesysCloudFullApiOperationInput<"putTaskmanagementWorkitemsSchema">;
}

export interface GenesysCloudFullApiTaskManagementGeneratedClient {
  DeleteTaskmanagementWorkbin(...args: GenesysCloudFullApiOperationArgs<"deleteTaskmanagementWorkbin">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTaskmanagementWorkbin"]>;
  DeleteTaskmanagementWorkitem(...args: GenesysCloudFullApiOperationArgs<"deleteTaskmanagementWorkitem">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTaskmanagementWorkitem"]>;
  DeleteTaskmanagementWorkitemsBulkAddJob(...args: GenesysCloudFullApiOperationArgs<"deleteTaskmanagementWorkitemsBulkAddJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTaskmanagementWorkitemsBulkAddJob"]>;
  DeleteTaskmanagementWorkitemsBulkTerminateJob(...args: GenesysCloudFullApiOperationArgs<"deleteTaskmanagementWorkitemsBulkTerminateJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTaskmanagementWorkitemsBulkTerminateJob"]>;
  DeleteTaskmanagementWorkitemsSchema(...args: GenesysCloudFullApiOperationArgs<"deleteTaskmanagementWorkitemsSchema">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTaskmanagementWorkitemsSchema"]>;
  DeleteTaskmanagementWorktype(...args: GenesysCloudFullApiOperationArgs<"deleteTaskmanagementWorktype">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTaskmanagementWorktype"]>;
  DeleteTaskmanagementWorktypeFlowsDatebasedRule(...args: GenesysCloudFullApiOperationArgs<"deleteTaskmanagementWorktypeFlowsDatebasedRule">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTaskmanagementWorktypeFlowsDatebasedRule"]>;
  DeleteTaskmanagementWorktypeFlowsOnattributechangeRule(...args: GenesysCloudFullApiOperationArgs<"deleteTaskmanagementWorktypeFlowsOnattributechangeRule">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTaskmanagementWorktypeFlowsOnattributechangeRule"]>;
  DeleteTaskmanagementWorktypeFlowsOncreateRule(...args: GenesysCloudFullApiOperationArgs<"deleteTaskmanagementWorktypeFlowsOncreateRule">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTaskmanagementWorktypeFlowsOncreateRule"]>;
  DeleteTaskmanagementWorktypeStatus(...args: GenesysCloudFullApiOperationArgs<"deleteTaskmanagementWorktypeStatus">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTaskmanagementWorktypeStatus"]>;
  GetTaskmanagementWorkbin(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkbin">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkbin"]>;
  GetTaskmanagementWorkbinHistory(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkbinHistory">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkbinHistory"]>;
  GetTaskmanagementWorkbinVersion(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkbinVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkbinVersion"]>;
  GetTaskmanagementWorkbinVersions(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkbinVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkbinVersions"]>;
  GetTaskmanagementWorkitem(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitem">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkitem"]>;
  GetTaskmanagementWorkitemHistory(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemHistory">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkitemHistory"]>;
  GetTaskmanagementWorkitemsBulkAddJob(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsBulkAddJob">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkitemsBulkAddJob"]>;
  GetTaskmanagementWorkitemsBulkAddJobResults(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsBulkAddJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkitemsBulkAddJobResults"]>;
  GetTaskmanagementWorkitemsBulkJobsUsersMe(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsBulkJobsUsersMe">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkitemsBulkJobsUsersMe"]>;
  GetTaskmanagementWorkitemsBulkTerminateJob(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsBulkTerminateJob">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkitemsBulkTerminateJob"]>;
  GetTaskmanagementWorkitemsBulkTerminateJobResults(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsBulkTerminateJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkitemsBulkTerminateJobResults"]>;
  GetTaskmanagementWorkitemsQueryJob(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsQueryJob">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkitemsQueryJob"]>;
  GetTaskmanagementWorkitemsQueryJobResults(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsQueryJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkitemsQueryJobResults"]>;
  GetTaskmanagementWorkitemsSchema(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsSchema">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkitemsSchema"]>;
  GetTaskmanagementWorkitemsSchemas(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsSchemas">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkitemsSchemas"]>;
  GetTaskmanagementWorkitemsSchemasCoretype(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsSchemasCoretype">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkitemsSchemasCoretype"]>;
  GetTaskmanagementWorkitemsSchemasCoretypes(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsSchemasCoretypes">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkitemsSchemasCoretypes"]>;
  GetTaskmanagementWorkitemsSchemasLimits(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsSchemasLimits">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkitemsSchemasLimits"]>;
  GetTaskmanagementWorkitemsSchemaVersion(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsSchemaVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkitemsSchemaVersion"]>;
  GetTaskmanagementWorkitemsSchemaVersions(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsSchemaVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkitemsSchemaVersions"]>;
  GetTaskmanagementWorkitemUserWrapups(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemUserWrapups">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkitemUserWrapups"]>;
  GetTaskmanagementWorkitemVersion(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkitemVersion"]>;
  GetTaskmanagementWorkitemVersions(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkitemVersions"]>;
  GetTaskmanagementWorkitemWrapups(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemWrapups">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorkitemWrapups"]>;
  GetTaskmanagementWorktype(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktype">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorktype"]>;
  GetTaskmanagementWorktypeFlowsDatebasedRule(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeFlowsDatebasedRule">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorktypeFlowsDatebasedRule"]>;
  GetTaskmanagementWorktypeFlowsDatebasedRules(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeFlowsDatebasedRules">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorktypeFlowsDatebasedRules"]>;
  GetTaskmanagementWorktypeFlowsOnattributechangeRule(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeFlowsOnattributechangeRule">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorktypeFlowsOnattributechangeRule"]>;
  GetTaskmanagementWorktypeFlowsOnattributechangeRules(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeFlowsOnattributechangeRules">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorktypeFlowsOnattributechangeRules"]>;
  GetTaskmanagementWorktypeFlowsOncreateRule(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeFlowsOncreateRule">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorktypeFlowsOncreateRule"]>;
  GetTaskmanagementWorktypeFlowsOncreateRules(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeFlowsOncreateRules">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorktypeFlowsOncreateRules"]>;
  GetTaskmanagementWorktypeHistory(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeHistory">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorktypeHistory"]>;
  GetTaskmanagementWorktypeStatus(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeStatus">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorktypeStatus"]>;
  GetTaskmanagementWorktypeStatuses(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeStatuses">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorktypeStatuses"]>;
  GetTaskmanagementWorktypeVersion(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorktypeVersion"]>;
  GetTaskmanagementWorktypeVersions(...args: GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getTaskmanagementWorktypeVersions"]>;
  PatchTaskmanagementWorkbin(...args: GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorkbin">): Promise<GenesysCloudFullApiOperationResponseMap["patchTaskmanagementWorkbin"]>;
  PatchTaskmanagementWorkitem(...args: GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorkitem">): Promise<GenesysCloudFullApiOperationResponseMap["patchTaskmanagementWorkitem"]>;
  PatchTaskmanagementWorkitemAssignment(...args: GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorkitemAssignment">): Promise<GenesysCloudFullApiOperationResponseMap["patchTaskmanagementWorkitemAssignment"]>;
  PatchTaskmanagementWorkitemsBulkAddJob(...args: GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorkitemsBulkAddJob">): Promise<GenesysCloudFullApiOperationResponseMap["patchTaskmanagementWorkitemsBulkAddJob"]>;
  PatchTaskmanagementWorkitemsBulkTerminateJob(...args: GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorkitemsBulkTerminateJob">): Promise<GenesysCloudFullApiOperationResponseMap["patchTaskmanagementWorkitemsBulkTerminateJob"]>;
  PatchTaskmanagementWorkitemUsersMeWrapups(...args: GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorkitemUsersMeWrapups">): Promise<GenesysCloudFullApiOperationResponseMap["patchTaskmanagementWorkitemUsersMeWrapups"]>;
  PatchTaskmanagementWorkitemUserWrapups(...args: GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorkitemUserWrapups">): Promise<GenesysCloudFullApiOperationResponseMap["patchTaskmanagementWorkitemUserWrapups"]>;
  PatchTaskmanagementWorktype(...args: GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorktype">): Promise<GenesysCloudFullApiOperationResponseMap["patchTaskmanagementWorktype"]>;
  PatchTaskmanagementWorktypeFlowsDatebasedRule(...args: GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorktypeFlowsDatebasedRule">): Promise<GenesysCloudFullApiOperationResponseMap["patchTaskmanagementWorktypeFlowsDatebasedRule"]>;
  PatchTaskmanagementWorktypeFlowsOnattributechangeRule(...args: GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorktypeFlowsOnattributechangeRule">): Promise<GenesysCloudFullApiOperationResponseMap["patchTaskmanagementWorktypeFlowsOnattributechangeRule"]>;
  PatchTaskmanagementWorktypeFlowsOncreateRule(...args: GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorktypeFlowsOncreateRule">): Promise<GenesysCloudFullApiOperationResponseMap["patchTaskmanagementWorktypeFlowsOncreateRule"]>;
  PatchTaskmanagementWorktypeStatus(...args: GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorktypeStatus">): Promise<GenesysCloudFullApiOperationResponseMap["patchTaskmanagementWorktypeStatus"]>;
  PostTaskmanagementWorkbins(...args: GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkbins">): Promise<GenesysCloudFullApiOperationResponseMap["postTaskmanagementWorkbins"]>;
  PostTaskmanagementWorkbinsQuery(...args: GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkbinsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postTaskmanagementWorkbinsQuery"]>;
  PostTaskmanagementWorkitemAcdCancel(...args: GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkitemAcdCancel">): Promise<GenesysCloudFullApiOperationResponseMap["postTaskmanagementWorkitemAcdCancel"]>;
  PostTaskmanagementWorkitemDisconnect(...args: GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkitemDisconnect">): Promise<GenesysCloudFullApiOperationResponseMap["postTaskmanagementWorkitemDisconnect"]>;
  PostTaskmanagementWorkitems(...args: GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkitems">): Promise<GenesysCloudFullApiOperationResponseMap["postTaskmanagementWorkitems"]>;
  PostTaskmanagementWorkitemsBulkAddJobs(...args: GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkitemsBulkAddJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postTaskmanagementWorkitemsBulkAddJobs"]>;
  PostTaskmanagementWorkitemsBulkTerminateJobs(...args: GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkitemsBulkTerminateJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postTaskmanagementWorkitemsBulkTerminateJobs"]>;
  PostTaskmanagementWorkitemsQuery(...args: GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkitemsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postTaskmanagementWorkitemsQuery"]>;
  PostTaskmanagementWorkitemsQueryJobs(...args: GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkitemsQueryJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postTaskmanagementWorkitemsQueryJobs"]>;
  PostTaskmanagementWorkitemsSchemas(...args: GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkitemsSchemas">): Promise<GenesysCloudFullApiOperationResponseMap["postTaskmanagementWorkitemsSchemas"]>;
  PostTaskmanagementWorkitemTerminate(...args: GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkitemTerminate">): Promise<GenesysCloudFullApiOperationResponseMap["postTaskmanagementWorkitemTerminate"]>;
  PostTaskmanagementWorktypeFlowsDatebasedRules(...args: GenesysCloudFullApiOperationArgs<"postTaskmanagementWorktypeFlowsDatebasedRules">): Promise<GenesysCloudFullApiOperationResponseMap["postTaskmanagementWorktypeFlowsDatebasedRules"]>;
  PostTaskmanagementWorktypeFlowsOnattributechangeRules(...args: GenesysCloudFullApiOperationArgs<"postTaskmanagementWorktypeFlowsOnattributechangeRules">): Promise<GenesysCloudFullApiOperationResponseMap["postTaskmanagementWorktypeFlowsOnattributechangeRules"]>;
  PostTaskmanagementWorktypeFlowsOncreateRules(...args: GenesysCloudFullApiOperationArgs<"postTaskmanagementWorktypeFlowsOncreateRules">): Promise<GenesysCloudFullApiOperationResponseMap["postTaskmanagementWorktypeFlowsOncreateRules"]>;
  PostTaskmanagementWorktypes(...args: GenesysCloudFullApiOperationArgs<"postTaskmanagementWorktypes">): Promise<GenesysCloudFullApiOperationResponseMap["postTaskmanagementWorktypes"]>;
  PostTaskmanagementWorktypesQuery(...args: GenesysCloudFullApiOperationArgs<"postTaskmanagementWorktypesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postTaskmanagementWorktypesQuery"]>;
  PostTaskmanagementWorktypeStatuses(...args: GenesysCloudFullApiOperationArgs<"postTaskmanagementWorktypeStatuses">): Promise<GenesysCloudFullApiOperationResponseMap["postTaskmanagementWorktypeStatuses"]>;
  PutTaskmanagementWorkitemsSchema(...args: GenesysCloudFullApiOperationArgs<"putTaskmanagementWorkitemsSchema">): Promise<GenesysCloudFullApiOperationResponseMap["putTaskmanagementWorkitemsSchema"]>;
}

export const GenesysCloudFullApiTaskManagementGeneratedFunctionNames = [
  "DeleteTaskmanagementWorkbin",
  "DeleteTaskmanagementWorkitem",
  "DeleteTaskmanagementWorkitemsBulkAddJob",
  "DeleteTaskmanagementWorkitemsBulkTerminateJob",
  "DeleteTaskmanagementWorkitemsSchema",
  "DeleteTaskmanagementWorktype",
  "DeleteTaskmanagementWorktypeFlowsDatebasedRule",
  "DeleteTaskmanagementWorktypeFlowsOnattributechangeRule",
  "DeleteTaskmanagementWorktypeFlowsOncreateRule",
  "DeleteTaskmanagementWorktypeStatus",
  "GetTaskmanagementWorkbin",
  "GetTaskmanagementWorkbinHistory",
  "GetTaskmanagementWorkbinVersion",
  "GetTaskmanagementWorkbinVersions",
  "GetTaskmanagementWorkitem",
  "GetTaskmanagementWorkitemHistory",
  "GetTaskmanagementWorkitemsBulkAddJob",
  "GetTaskmanagementWorkitemsBulkAddJobResults",
  "GetTaskmanagementWorkitemsBulkJobsUsersMe",
  "GetTaskmanagementWorkitemsBulkTerminateJob",
  "GetTaskmanagementWorkitemsBulkTerminateJobResults",
  "GetTaskmanagementWorkitemsQueryJob",
  "GetTaskmanagementWorkitemsQueryJobResults",
  "GetTaskmanagementWorkitemsSchema",
  "GetTaskmanagementWorkitemsSchemas",
  "GetTaskmanagementWorkitemsSchemasCoretype",
  "GetTaskmanagementWorkitemsSchemasCoretypes",
  "GetTaskmanagementWorkitemsSchemasLimits",
  "GetTaskmanagementWorkitemsSchemaVersion",
  "GetTaskmanagementWorkitemsSchemaVersions",
  "GetTaskmanagementWorkitemUserWrapups",
  "GetTaskmanagementWorkitemVersion",
  "GetTaskmanagementWorkitemVersions",
  "GetTaskmanagementWorkitemWrapups",
  "GetTaskmanagementWorktype",
  "GetTaskmanagementWorktypeFlowsDatebasedRule",
  "GetTaskmanagementWorktypeFlowsDatebasedRules",
  "GetTaskmanagementWorktypeFlowsOnattributechangeRule",
  "GetTaskmanagementWorktypeFlowsOnattributechangeRules",
  "GetTaskmanagementWorktypeFlowsOncreateRule",
  "GetTaskmanagementWorktypeFlowsOncreateRules",
  "GetTaskmanagementWorktypeHistory",
  "GetTaskmanagementWorktypeStatus",
  "GetTaskmanagementWorktypeStatuses",
  "GetTaskmanagementWorktypeVersion",
  "GetTaskmanagementWorktypeVersions",
  "PatchTaskmanagementWorkbin",
  "PatchTaskmanagementWorkitem",
  "PatchTaskmanagementWorkitemAssignment",
  "PatchTaskmanagementWorkitemsBulkAddJob",
  "PatchTaskmanagementWorkitemsBulkTerminateJob",
  "PatchTaskmanagementWorkitemUsersMeWrapups",
  "PatchTaskmanagementWorkitemUserWrapups",
  "PatchTaskmanagementWorktype",
  "PatchTaskmanagementWorktypeFlowsDatebasedRule",
  "PatchTaskmanagementWorktypeFlowsOnattributechangeRule",
  "PatchTaskmanagementWorktypeFlowsOncreateRule",
  "PatchTaskmanagementWorktypeStatus",
  "PostTaskmanagementWorkbins",
  "PostTaskmanagementWorkbinsQuery",
  "PostTaskmanagementWorkitemAcdCancel",
  "PostTaskmanagementWorkitemDisconnect",
  "PostTaskmanagementWorkitems",
  "PostTaskmanagementWorkitemsBulkAddJobs",
  "PostTaskmanagementWorkitemsBulkTerminateJobs",
  "PostTaskmanagementWorkitemsQuery",
  "PostTaskmanagementWorkitemsQueryJobs",
  "PostTaskmanagementWorkitemsSchemas",
  "PostTaskmanagementWorkitemTerminate",
  "PostTaskmanagementWorktypeFlowsDatebasedRules",
  "PostTaskmanagementWorktypeFlowsOnattributechangeRules",
  "PostTaskmanagementWorktypeFlowsOncreateRules",
  "PostTaskmanagementWorktypes",
  "PostTaskmanagementWorktypesQuery",
  "PostTaskmanagementWorktypeStatuses",
  "PutTaskmanagementWorkitemsSchema"
] as const satisfies readonly (keyof GenesysCloudFullApiTaskManagementGeneratedClient)[];

export function createGenesysCloudFullApiTaskManagementGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiTaskManagementGeneratedClient {
  return {
    DeleteTaskmanagementWorkbin: (...args) => callOperation("deleteTaskmanagementWorkbin", ...(args as GenesysCloudFullApiOperationArgs<"deleteTaskmanagementWorkbin">)),
    DeleteTaskmanagementWorkitem: (...args) => callOperation("deleteTaskmanagementWorkitem", ...(args as GenesysCloudFullApiOperationArgs<"deleteTaskmanagementWorkitem">)),
    DeleteTaskmanagementWorkitemsBulkAddJob: (...args) => callOperation("deleteTaskmanagementWorkitemsBulkAddJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteTaskmanagementWorkitemsBulkAddJob">)),
    DeleteTaskmanagementWorkitemsBulkTerminateJob: (...args) => callOperation("deleteTaskmanagementWorkitemsBulkTerminateJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteTaskmanagementWorkitemsBulkTerminateJob">)),
    DeleteTaskmanagementWorkitemsSchema: (...args) => callOperation("deleteTaskmanagementWorkitemsSchema", ...(args as GenesysCloudFullApiOperationArgs<"deleteTaskmanagementWorkitemsSchema">)),
    DeleteTaskmanagementWorktype: (...args) => callOperation("deleteTaskmanagementWorktype", ...(args as GenesysCloudFullApiOperationArgs<"deleteTaskmanagementWorktype">)),
    DeleteTaskmanagementWorktypeFlowsDatebasedRule: (...args) => callOperation("deleteTaskmanagementWorktypeFlowsDatebasedRule", ...(args as GenesysCloudFullApiOperationArgs<"deleteTaskmanagementWorktypeFlowsDatebasedRule">)),
    DeleteTaskmanagementWorktypeFlowsOnattributechangeRule: (...args) => callOperation("deleteTaskmanagementWorktypeFlowsOnattributechangeRule", ...(args as GenesysCloudFullApiOperationArgs<"deleteTaskmanagementWorktypeFlowsOnattributechangeRule">)),
    DeleteTaskmanagementWorktypeFlowsOncreateRule: (...args) => callOperation("deleteTaskmanagementWorktypeFlowsOncreateRule", ...(args as GenesysCloudFullApiOperationArgs<"deleteTaskmanagementWorktypeFlowsOncreateRule">)),
    DeleteTaskmanagementWorktypeStatus: (...args) => callOperation("deleteTaskmanagementWorktypeStatus", ...(args as GenesysCloudFullApiOperationArgs<"deleteTaskmanagementWorktypeStatus">)),
    GetTaskmanagementWorkbin: (...args) => callOperation("getTaskmanagementWorkbin", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkbin">)),
    GetTaskmanagementWorkbinHistory: (...args) => callOperation("getTaskmanagementWorkbinHistory", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkbinHistory">)),
    GetTaskmanagementWorkbinVersion: (...args) => callOperation("getTaskmanagementWorkbinVersion", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkbinVersion">)),
    GetTaskmanagementWorkbinVersions: (...args) => callOperation("getTaskmanagementWorkbinVersions", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkbinVersions">)),
    GetTaskmanagementWorkitem: (...args) => callOperation("getTaskmanagementWorkitem", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitem">)),
    GetTaskmanagementWorkitemHistory: (...args) => callOperation("getTaskmanagementWorkitemHistory", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemHistory">)),
    GetTaskmanagementWorkitemsBulkAddJob: (...args) => callOperation("getTaskmanagementWorkitemsBulkAddJob", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsBulkAddJob">)),
    GetTaskmanagementWorkitemsBulkAddJobResults: (...args) => callOperation("getTaskmanagementWorkitemsBulkAddJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsBulkAddJobResults">)),
    GetTaskmanagementWorkitemsBulkJobsUsersMe: (...args) => callOperation("getTaskmanagementWorkitemsBulkJobsUsersMe", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsBulkJobsUsersMe">)),
    GetTaskmanagementWorkitemsBulkTerminateJob: (...args) => callOperation("getTaskmanagementWorkitemsBulkTerminateJob", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsBulkTerminateJob">)),
    GetTaskmanagementWorkitemsBulkTerminateJobResults: (...args) => callOperation("getTaskmanagementWorkitemsBulkTerminateJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsBulkTerminateJobResults">)),
    GetTaskmanagementWorkitemsQueryJob: (...args) => callOperation("getTaskmanagementWorkitemsQueryJob", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsQueryJob">)),
    GetTaskmanagementWorkitemsQueryJobResults: (...args) => callOperation("getTaskmanagementWorkitemsQueryJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsQueryJobResults">)),
    GetTaskmanagementWorkitemsSchema: (...args) => callOperation("getTaskmanagementWorkitemsSchema", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsSchema">)),
    GetTaskmanagementWorkitemsSchemas: (...args) => callOperation("getTaskmanagementWorkitemsSchemas", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsSchemas">)),
    GetTaskmanagementWorkitemsSchemasCoretype: (...args) => callOperation("getTaskmanagementWorkitemsSchemasCoretype", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsSchemasCoretype">)),
    GetTaskmanagementWorkitemsSchemasCoretypes: (...args) => callOperation("getTaskmanagementWorkitemsSchemasCoretypes", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsSchemasCoretypes">)),
    GetTaskmanagementWorkitemsSchemasLimits: (...args) => callOperation("getTaskmanagementWorkitemsSchemasLimits", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsSchemasLimits">)),
    GetTaskmanagementWorkitemsSchemaVersion: (...args) => callOperation("getTaskmanagementWorkitemsSchemaVersion", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsSchemaVersion">)),
    GetTaskmanagementWorkitemsSchemaVersions: (...args) => callOperation("getTaskmanagementWorkitemsSchemaVersions", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemsSchemaVersions">)),
    GetTaskmanagementWorkitemUserWrapups: (...args) => callOperation("getTaskmanagementWorkitemUserWrapups", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemUserWrapups">)),
    GetTaskmanagementWorkitemVersion: (...args) => callOperation("getTaskmanagementWorkitemVersion", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemVersion">)),
    GetTaskmanagementWorkitemVersions: (...args) => callOperation("getTaskmanagementWorkitemVersions", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemVersions">)),
    GetTaskmanagementWorkitemWrapups: (...args) => callOperation("getTaskmanagementWorkitemWrapups", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorkitemWrapups">)),
    GetTaskmanagementWorktype: (...args) => callOperation("getTaskmanagementWorktype", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktype">)),
    GetTaskmanagementWorktypeFlowsDatebasedRule: (...args) => callOperation("getTaskmanagementWorktypeFlowsDatebasedRule", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeFlowsDatebasedRule">)),
    GetTaskmanagementWorktypeFlowsDatebasedRules: (...args) => callOperation("getTaskmanagementWorktypeFlowsDatebasedRules", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeFlowsDatebasedRules">)),
    GetTaskmanagementWorktypeFlowsOnattributechangeRule: (...args) => callOperation("getTaskmanagementWorktypeFlowsOnattributechangeRule", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeFlowsOnattributechangeRule">)),
    GetTaskmanagementWorktypeFlowsOnattributechangeRules: (...args) => callOperation("getTaskmanagementWorktypeFlowsOnattributechangeRules", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeFlowsOnattributechangeRules">)),
    GetTaskmanagementWorktypeFlowsOncreateRule: (...args) => callOperation("getTaskmanagementWorktypeFlowsOncreateRule", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeFlowsOncreateRule">)),
    GetTaskmanagementWorktypeFlowsOncreateRules: (...args) => callOperation("getTaskmanagementWorktypeFlowsOncreateRules", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeFlowsOncreateRules">)),
    GetTaskmanagementWorktypeHistory: (...args) => callOperation("getTaskmanagementWorktypeHistory", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeHistory">)),
    GetTaskmanagementWorktypeStatus: (...args) => callOperation("getTaskmanagementWorktypeStatus", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeStatus">)),
    GetTaskmanagementWorktypeStatuses: (...args) => callOperation("getTaskmanagementWorktypeStatuses", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeStatuses">)),
    GetTaskmanagementWorktypeVersion: (...args) => callOperation("getTaskmanagementWorktypeVersion", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeVersion">)),
    GetTaskmanagementWorktypeVersions: (...args) => callOperation("getTaskmanagementWorktypeVersions", ...(args as GenesysCloudFullApiOperationArgs<"getTaskmanagementWorktypeVersions">)),
    PatchTaskmanagementWorkbin: (...args) => callOperation("patchTaskmanagementWorkbin", ...(args as GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorkbin">)),
    PatchTaskmanagementWorkitem: (...args) => callOperation("patchTaskmanagementWorkitem", ...(args as GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorkitem">)),
    PatchTaskmanagementWorkitemAssignment: (...args) => callOperation("patchTaskmanagementWorkitemAssignment", ...(args as GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorkitemAssignment">)),
    PatchTaskmanagementWorkitemsBulkAddJob: (...args) => callOperation("patchTaskmanagementWorkitemsBulkAddJob", ...(args as GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorkitemsBulkAddJob">)),
    PatchTaskmanagementWorkitemsBulkTerminateJob: (...args) => callOperation("patchTaskmanagementWorkitemsBulkTerminateJob", ...(args as GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorkitemsBulkTerminateJob">)),
    PatchTaskmanagementWorkitemUsersMeWrapups: (...args) => callOperation("patchTaskmanagementWorkitemUsersMeWrapups", ...(args as GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorkitemUsersMeWrapups">)),
    PatchTaskmanagementWorkitemUserWrapups: (...args) => callOperation("patchTaskmanagementWorkitemUserWrapups", ...(args as GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorkitemUserWrapups">)),
    PatchTaskmanagementWorktype: (...args) => callOperation("patchTaskmanagementWorktype", ...(args as GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorktype">)),
    PatchTaskmanagementWorktypeFlowsDatebasedRule: (...args) => callOperation("patchTaskmanagementWorktypeFlowsDatebasedRule", ...(args as GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorktypeFlowsDatebasedRule">)),
    PatchTaskmanagementWorktypeFlowsOnattributechangeRule: (...args) => callOperation("patchTaskmanagementWorktypeFlowsOnattributechangeRule", ...(args as GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorktypeFlowsOnattributechangeRule">)),
    PatchTaskmanagementWorktypeFlowsOncreateRule: (...args) => callOperation("patchTaskmanagementWorktypeFlowsOncreateRule", ...(args as GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorktypeFlowsOncreateRule">)),
    PatchTaskmanagementWorktypeStatus: (...args) => callOperation("patchTaskmanagementWorktypeStatus", ...(args as GenesysCloudFullApiOperationArgs<"patchTaskmanagementWorktypeStatus">)),
    PostTaskmanagementWorkbins: (...args) => callOperation("postTaskmanagementWorkbins", ...(args as GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkbins">)),
    PostTaskmanagementWorkbinsQuery: (...args) => callOperation("postTaskmanagementWorkbinsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkbinsQuery">)),
    PostTaskmanagementWorkitemAcdCancel: (...args) => callOperation("postTaskmanagementWorkitemAcdCancel", ...(args as GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkitemAcdCancel">)),
    PostTaskmanagementWorkitemDisconnect: (...args) => callOperation("postTaskmanagementWorkitemDisconnect", ...(args as GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkitemDisconnect">)),
    PostTaskmanagementWorkitems: (...args) => callOperation("postTaskmanagementWorkitems", ...(args as GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkitems">)),
    PostTaskmanagementWorkitemsBulkAddJobs: (...args) => callOperation("postTaskmanagementWorkitemsBulkAddJobs", ...(args as GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkitemsBulkAddJobs">)),
    PostTaskmanagementWorkitemsBulkTerminateJobs: (...args) => callOperation("postTaskmanagementWorkitemsBulkTerminateJobs", ...(args as GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkitemsBulkTerminateJobs">)),
    PostTaskmanagementWorkitemsQuery: (...args) => callOperation("postTaskmanagementWorkitemsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkitemsQuery">)),
    PostTaskmanagementWorkitemsQueryJobs: (...args) => callOperation("postTaskmanagementWorkitemsQueryJobs", ...(args as GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkitemsQueryJobs">)),
    PostTaskmanagementWorkitemsSchemas: (...args) => callOperation("postTaskmanagementWorkitemsSchemas", ...(args as GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkitemsSchemas">)),
    PostTaskmanagementWorkitemTerminate: (...args) => callOperation("postTaskmanagementWorkitemTerminate", ...(args as GenesysCloudFullApiOperationArgs<"postTaskmanagementWorkitemTerminate">)),
    PostTaskmanagementWorktypeFlowsDatebasedRules: (...args) => callOperation("postTaskmanagementWorktypeFlowsDatebasedRules", ...(args as GenesysCloudFullApiOperationArgs<"postTaskmanagementWorktypeFlowsDatebasedRules">)),
    PostTaskmanagementWorktypeFlowsOnattributechangeRules: (...args) => callOperation("postTaskmanagementWorktypeFlowsOnattributechangeRules", ...(args as GenesysCloudFullApiOperationArgs<"postTaskmanagementWorktypeFlowsOnattributechangeRules">)),
    PostTaskmanagementWorktypeFlowsOncreateRules: (...args) => callOperation("postTaskmanagementWorktypeFlowsOncreateRules", ...(args as GenesysCloudFullApiOperationArgs<"postTaskmanagementWorktypeFlowsOncreateRules">)),
    PostTaskmanagementWorktypes: (...args) => callOperation("postTaskmanagementWorktypes", ...(args as GenesysCloudFullApiOperationArgs<"postTaskmanagementWorktypes">)),
    PostTaskmanagementWorktypesQuery: (...args) => callOperation("postTaskmanagementWorktypesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postTaskmanagementWorktypesQuery">)),
    PostTaskmanagementWorktypeStatuses: (...args) => callOperation("postTaskmanagementWorktypeStatuses", ...(args as GenesysCloudFullApiOperationArgs<"postTaskmanagementWorktypeStatuses">)),
    PutTaskmanagementWorkitemsSchema: (...args) => callOperation("putTaskmanagementWorkitemsSchema", ...(args as GenesysCloudFullApiOperationArgs<"putTaskmanagementWorkitemsSchema">)),
  };
}
