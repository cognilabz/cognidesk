// Generated endpoint chunk for AmazonFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonGeneratedOperationCaller,
  AmazonFullApiOperationArgs,
  AmazonFullApiOperationInput,
  AmazonFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonFullApiReportsOperationKeys = [
  "reports_2021-06-30:getReports",
  "reports_2021-06-30:createReport",
  "reports_2021-06-30:cancelReport",
  "reports_2021-06-30:getReport",
  "reports_2021-06-30:getReportSchedules",
  "reports_2021-06-30:createReportSchedule",
  "reports_2021-06-30:cancelReportSchedule",
  "reports_2021-06-30:getReportSchedule",
  "reports_2021-06-30:getReportDocument"
] as const;
export type AmazonFullApiReportsOperationKey = typeof AmazonFullApiReportsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiReportsOperationPathParamMap {
  "reports_2021-06-30:getReports": {};
  "reports_2021-06-30:createReport": {};
  "reports_2021-06-30:cancelReport": { "reportId": AmazonFullApiPathParamValue };
  "reports_2021-06-30:getReport": { "reportId": AmazonFullApiPathParamValue };
  "reports_2021-06-30:getReportSchedules": {};
  "reports_2021-06-30:createReportSchedule": {};
  "reports_2021-06-30:cancelReportSchedule": { "reportScheduleId": AmazonFullApiPathParamValue };
  "reports_2021-06-30:getReportSchedule": { "reportScheduleId": AmazonFullApiPathParamValue };
  "reports_2021-06-30:getReportDocument": { "reportDocumentId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiReportsOperationRequestMap {
  "reports_2021-06-30:getReports": AmazonFullApiOperationInput<"reports_2021-06-30:getReports">;
  "reports_2021-06-30:createReport": AmazonFullApiOperationInput<"reports_2021-06-30:createReport">;
  "reports_2021-06-30:cancelReport": AmazonFullApiOperationInput<"reports_2021-06-30:cancelReport">;
  "reports_2021-06-30:getReport": AmazonFullApiOperationInput<"reports_2021-06-30:getReport">;
  "reports_2021-06-30:getReportSchedules": AmazonFullApiOperationInput<"reports_2021-06-30:getReportSchedules">;
  "reports_2021-06-30:createReportSchedule": AmazonFullApiOperationInput<"reports_2021-06-30:createReportSchedule">;
  "reports_2021-06-30:cancelReportSchedule": AmazonFullApiOperationInput<"reports_2021-06-30:cancelReportSchedule">;
  "reports_2021-06-30:getReportSchedule": AmazonFullApiOperationInput<"reports_2021-06-30:getReportSchedule">;
  "reports_2021-06-30:getReportDocument": AmazonFullApiOperationInput<"reports_2021-06-30:getReportDocument">;
}

export interface AmazonFullApiReportsGeneratedClient {
  GetReports(...args: AmazonFullApiOperationArgs<"reports_2021-06-30:getReports">): Promise<AmazonFullApiOperationResponseMap["reports_2021-06-30:getReports"]>;
  CreateReport(...args: AmazonFullApiOperationArgs<"reports_2021-06-30:createReport">): Promise<AmazonFullApiOperationResponseMap["reports_2021-06-30:createReport"]>;
  CancelReport(...args: AmazonFullApiOperationArgs<"reports_2021-06-30:cancelReport">): Promise<AmazonFullApiOperationResponseMap["reports_2021-06-30:cancelReport"]>;
  GetReport(...args: AmazonFullApiOperationArgs<"reports_2021-06-30:getReport">): Promise<AmazonFullApiOperationResponseMap["reports_2021-06-30:getReport"]>;
  GetReportSchedules(...args: AmazonFullApiOperationArgs<"reports_2021-06-30:getReportSchedules">): Promise<AmazonFullApiOperationResponseMap["reports_2021-06-30:getReportSchedules"]>;
  CreateReportSchedule(...args: AmazonFullApiOperationArgs<"reports_2021-06-30:createReportSchedule">): Promise<AmazonFullApiOperationResponseMap["reports_2021-06-30:createReportSchedule"]>;
  CancelReportSchedule(...args: AmazonFullApiOperationArgs<"reports_2021-06-30:cancelReportSchedule">): Promise<AmazonFullApiOperationResponseMap["reports_2021-06-30:cancelReportSchedule"]>;
  GetReportSchedule(...args: AmazonFullApiOperationArgs<"reports_2021-06-30:getReportSchedule">): Promise<AmazonFullApiOperationResponseMap["reports_2021-06-30:getReportSchedule"]>;
  GetReportDocument(...args: AmazonFullApiOperationArgs<"reports_2021-06-30:getReportDocument">): Promise<AmazonFullApiOperationResponseMap["reports_2021-06-30:getReportDocument"]>;
}

export const AmazonFullApiReportsGeneratedFunctionNames = [
  "GetReports",
  "CreateReport",
  "CancelReport",
  "GetReport",
  "GetReportSchedules",
  "CreateReportSchedule",
  "CancelReportSchedule",
  "GetReportSchedule",
  "GetReportDocument"
] as const satisfies readonly (keyof AmazonFullApiReportsGeneratedClient)[];

export function createAmazonFullApiReportsGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiReportsGeneratedClient {
  return {
    GetReports: (...args) => callOperation("reports_2021-06-30:getReports", ...(args as AmazonFullApiOperationArgs<"reports_2021-06-30:getReports">)),
    CreateReport: (...args) => callOperation("reports_2021-06-30:createReport", ...(args as AmazonFullApiOperationArgs<"reports_2021-06-30:createReport">)),
    CancelReport: (...args) => callOperation("reports_2021-06-30:cancelReport", ...(args as AmazonFullApiOperationArgs<"reports_2021-06-30:cancelReport">)),
    GetReport: (...args) => callOperation("reports_2021-06-30:getReport", ...(args as AmazonFullApiOperationArgs<"reports_2021-06-30:getReport">)),
    GetReportSchedules: (...args) => callOperation("reports_2021-06-30:getReportSchedules", ...(args as AmazonFullApiOperationArgs<"reports_2021-06-30:getReportSchedules">)),
    CreateReportSchedule: (...args) => callOperation("reports_2021-06-30:createReportSchedule", ...(args as AmazonFullApiOperationArgs<"reports_2021-06-30:createReportSchedule">)),
    CancelReportSchedule: (...args) => callOperation("reports_2021-06-30:cancelReportSchedule", ...(args as AmazonFullApiOperationArgs<"reports_2021-06-30:cancelReportSchedule">)),
    GetReportSchedule: (...args) => callOperation("reports_2021-06-30:getReportSchedule", ...(args as AmazonFullApiOperationArgs<"reports_2021-06-30:getReportSchedule">)),
    GetReportDocument: (...args) => callOperation("reports_2021-06-30:getReportDocument", ...(args as AmazonFullApiOperationArgs<"reports_2021-06-30:getReportDocument">)),
  };
}
