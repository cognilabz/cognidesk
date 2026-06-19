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
export const IntercomFullApiDataExportOperationKeys = [
  "downloadDataExport",
  "cancelDataExport",
  "createDataExport",
  "getDataExport"
] as const;
export type IntercomFullApiDataExportOperationKey = typeof IntercomFullApiDataExportOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiDataExportOperationPathParamMap {
  "downloadDataExport": { "job_identifier": IntercomFullApiPathParamValue };
  "cancelDataExport": { "job_identifier": IntercomFullApiPathParamValue };
  "createDataExport": {};
  "getDataExport": { "job_identifier": IntercomFullApiPathParamValue };
}

export interface IntercomFullApiDataExportOperationRequestMap {
  "downloadDataExport": IntercomFullApiOperationInput<"downloadDataExport">;
  "cancelDataExport": IntercomFullApiOperationInput<"cancelDataExport">;
  "createDataExport": IntercomFullApiOperationInput<"createDataExport">;
  "getDataExport": IntercomFullApiOperationInput<"getDataExport">;
}

export interface IntercomFullApiDataExportGeneratedClient {
  intercomDownloadDataExport(...args: IntercomFullApiOperationArgs<"downloadDataExport">): Promise<IntercomFullApiOperationResponseMap["downloadDataExport"]>;
  intercomCancelDataExport(...args: IntercomFullApiOperationArgs<"cancelDataExport">): Promise<IntercomFullApiOperationResponseMap["cancelDataExport"]>;
  intercomCreateDataExport(...args: IntercomFullApiOperationArgs<"createDataExport">): Promise<IntercomFullApiOperationResponseMap["createDataExport"]>;
  intercomGetDataExport(...args: IntercomFullApiOperationArgs<"getDataExport">): Promise<IntercomFullApiOperationResponseMap["getDataExport"]>;
}

export const IntercomFullApiDataExportGeneratedFunctionNames = [
  "intercomDownloadDataExport",
  "intercomCancelDataExport",
  "intercomCreateDataExport",
  "intercomGetDataExport"
] as const satisfies readonly (keyof IntercomFullApiDataExportGeneratedClient)[];

export function createIntercomFullApiDataExportGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiDataExportGeneratedClient {
  return {
    intercomDownloadDataExport: (...args) => callOperation("downloadDataExport", ...(args as IntercomFullApiOperationArgs<"downloadDataExport">)),
    intercomCancelDataExport: (...args) => callOperation("cancelDataExport", ...(args as IntercomFullApiOperationArgs<"cancelDataExport">)),
    intercomCreateDataExport: (...args) => callOperation("createDataExport", ...(args as IntercomFullApiOperationArgs<"createDataExport">)),
    intercomGetDataExport: (...args) => callOperation("getDataExport", ...(args as IntercomFullApiOperationArgs<"getDataExport">)),
  };
}
