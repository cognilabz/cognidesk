// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiIncrementalExportOperationKeys = [
  "IncrementalOrganizationExport",
  "IncrementalSampleExport",
  "IncrementalTicketEvents",
  "IncrementalTicketExportCursor",
  "IncrementalTicketExportTime",
  "IncrementalUserExportCursor",
  "IncrementalUserExportTime"
] as const;
export type ZendeskFullApiIncrementalExportOperationKey = typeof ZendeskFullApiIncrementalExportOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiIncrementalExportOperationPathParamMap {
  "IncrementalOrganizationExport": {};
  "IncrementalSampleExport": { "incremental_resource": ZendeskFullApiPathParamValue };
  "IncrementalTicketEvents": {};
  "IncrementalTicketExportCursor": {};
  "IncrementalTicketExportTime": {};
  "IncrementalUserExportCursor": {};
  "IncrementalUserExportTime": {};
}

export interface ZendeskFullApiIncrementalExportOperationRequestMap {
  "IncrementalOrganizationExport": ZendeskFullApiOperationInput<"IncrementalOrganizationExport">;
  "IncrementalSampleExport": ZendeskFullApiOperationInput<"IncrementalSampleExport">;
  "IncrementalTicketEvents": ZendeskFullApiOperationInput<"IncrementalTicketEvents">;
  "IncrementalTicketExportCursor": ZendeskFullApiOperationInput<"IncrementalTicketExportCursor">;
  "IncrementalTicketExportTime": ZendeskFullApiOperationInput<"IncrementalTicketExportTime">;
  "IncrementalUserExportCursor": ZendeskFullApiOperationInput<"IncrementalUserExportCursor">;
  "IncrementalUserExportTime": ZendeskFullApiOperationInput<"IncrementalUserExportTime">;
}

export interface ZendeskFullApiIncrementalExportGeneratedClient {
  IncrementalOrganizationExport(...args: ZendeskFullApiOperationArgs<"IncrementalOrganizationExport">): Promise<ZendeskFullApiOperationResponseMap["IncrementalOrganizationExport"]>;
  IncrementalSampleExport(...args: ZendeskFullApiOperationArgs<"IncrementalSampleExport">): Promise<ZendeskFullApiOperationResponseMap["IncrementalSampleExport"]>;
  IncrementalTicketEvents(...args: ZendeskFullApiOperationArgs<"IncrementalTicketEvents">): Promise<ZendeskFullApiOperationResponseMap["IncrementalTicketEvents"]>;
  IncrementalTicketExportCursor(...args: ZendeskFullApiOperationArgs<"IncrementalTicketExportCursor">): Promise<ZendeskFullApiOperationResponseMap["IncrementalTicketExportCursor"]>;
  IncrementalTicketExportTime(...args: ZendeskFullApiOperationArgs<"IncrementalTicketExportTime">): Promise<ZendeskFullApiOperationResponseMap["IncrementalTicketExportTime"]>;
  IncrementalUserExportCursor(...args: ZendeskFullApiOperationArgs<"IncrementalUserExportCursor">): Promise<ZendeskFullApiOperationResponseMap["IncrementalUserExportCursor"]>;
  IncrementalUserExportTime(...args: ZendeskFullApiOperationArgs<"IncrementalUserExportTime">): Promise<ZendeskFullApiOperationResponseMap["IncrementalUserExportTime"]>;
}

export const ZendeskFullApiIncrementalExportGeneratedFunctionNames = [
  "IncrementalOrganizationExport",
  "IncrementalSampleExport",
  "IncrementalTicketEvents",
  "IncrementalTicketExportCursor",
  "IncrementalTicketExportTime",
  "IncrementalUserExportCursor",
  "IncrementalUserExportTime"
] as const satisfies readonly (keyof ZendeskFullApiIncrementalExportGeneratedClient)[];

export function createZendeskFullApiIncrementalExportGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiIncrementalExportGeneratedClient {
  return {
    IncrementalOrganizationExport: (...args) => callOperation("IncrementalOrganizationExport", ...(args as ZendeskFullApiOperationArgs<"IncrementalOrganizationExport">)),
    IncrementalSampleExport: (...args) => callOperation("IncrementalSampleExport", ...(args as ZendeskFullApiOperationArgs<"IncrementalSampleExport">)),
    IncrementalTicketEvents: (...args) => callOperation("IncrementalTicketEvents", ...(args as ZendeskFullApiOperationArgs<"IncrementalTicketEvents">)),
    IncrementalTicketExportCursor: (...args) => callOperation("IncrementalTicketExportCursor", ...(args as ZendeskFullApiOperationArgs<"IncrementalTicketExportCursor">)),
    IncrementalTicketExportTime: (...args) => callOperation("IncrementalTicketExportTime", ...(args as ZendeskFullApiOperationArgs<"IncrementalTicketExportTime">)),
    IncrementalUserExportCursor: (...args) => callOperation("IncrementalUserExportCursor", ...(args as ZendeskFullApiOperationArgs<"IncrementalUserExportCursor">)),
    IncrementalUserExportTime: (...args) => callOperation("IncrementalUserExportTime", ...(args as ZendeskFullApiOperationArgs<"IncrementalUserExportTime">)),
  };
}
