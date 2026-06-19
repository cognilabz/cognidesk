// Generated endpoint chunk for IntercomFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  IntercomGeneratedOperationCaller,
  IntercomFullApiOperationArgs,
  IntercomFullApiOperationInput,
  IntercomFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { IntercomFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const IntercomFullApiExportOperationKeys = [
  "get_/download/reporting_data/{job_identifier}",
  "get_/export/reporting_data/{job_identifier}",
  "post_/export/reporting_data/enqueue",
  "get_/export/reporting_data/get_datasets"
] as const;
export type IntercomFullApiExportOperationKey = typeof IntercomFullApiExportOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiExportOperationPathParamMap {
  "get_/download/reporting_data/{job_identifier}": { "job_identifier": IntercomFullApiPathParamValue };
  "get_/export/reporting_data/{job_identifier}": { "job_identifier": IntercomFullApiPathParamValue };
  "post_/export/reporting_data/enqueue": {};
  "get_/export/reporting_data/get_datasets": {};
}

export interface IntercomFullApiExportOperationRequestMap {
  "get_/download/reporting_data/{job_identifier}": IntercomFullApiOperationInput<"get_/download/reporting_data/{job_identifier}">;
  "get_/export/reporting_data/{job_identifier}": IntercomFullApiOperationInput<"get_/export/reporting_data/{job_identifier}">;
  "post_/export/reporting_data/enqueue": IntercomFullApiOperationInput<"post_/export/reporting_data/enqueue">;
  "get_/export/reporting_data/get_datasets": IntercomFullApiOperationInput<"get_/export/reporting_data/get_datasets">;
}

export interface IntercomFullApiExportGeneratedClient {
  intercomGetDownloadReportingDataJobIdentifier(...args: IntercomFullApiOperationArgs<"get_/download/reporting_data/{job_identifier}">): Promise<IntercomFullApiOperationResponseMap["get_/download/reporting_data/{job_identifier}"]>;
  intercomGetExportReportingDataJobIdentifier(...args: IntercomFullApiOperationArgs<"get_/export/reporting_data/{job_identifier}">): Promise<IntercomFullApiOperationResponseMap["get_/export/reporting_data/{job_identifier}"]>;
  intercomPostExportReportingDataEnqueue(...args: IntercomFullApiOperationArgs<"post_/export/reporting_data/enqueue">): Promise<IntercomFullApiOperationResponseMap["post_/export/reporting_data/enqueue"]>;
  intercomGetExportReportingDataGetDatasets(...args: IntercomFullApiOperationArgs<"get_/export/reporting_data/get_datasets">): Promise<IntercomFullApiOperationResponseMap["get_/export/reporting_data/get_datasets"]>;
}

export const IntercomFullApiExportGeneratedFunctionNames = [
  "intercomGetDownloadReportingDataJobIdentifier",
  "intercomGetExportReportingDataJobIdentifier",
  "intercomPostExportReportingDataEnqueue",
  "intercomGetExportReportingDataGetDatasets"
] as const satisfies readonly (keyof IntercomFullApiExportGeneratedClient)[];

export function createIntercomFullApiExportGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiExportGeneratedClient {
  return {
    intercomGetDownloadReportingDataJobIdentifier: (...args) => callOperation("get_/download/reporting_data/{job_identifier}", ...(args as IntercomFullApiOperationArgs<"get_/download/reporting_data/{job_identifier}">)),
    intercomGetExportReportingDataJobIdentifier: (...args) => callOperation("get_/export/reporting_data/{job_identifier}", ...(args as IntercomFullApiOperationArgs<"get_/export/reporting_data/{job_identifier}">)),
    intercomPostExportReportingDataEnqueue: (...args) => callOperation("post_/export/reporting_data/enqueue", ...(args as IntercomFullApiOperationArgs<"post_/export/reporting_data/enqueue">)),
    intercomGetExportReportingDataGetDatasets: (...args) => callOperation("get_/export/reporting_data/get_datasets", ...(args as IntercomFullApiOperationArgs<"get_/export/reporting_data/get_datasets">)),
  };
}
