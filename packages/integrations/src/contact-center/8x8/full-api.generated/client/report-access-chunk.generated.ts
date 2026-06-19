// Generated endpoint chunk for EightByEightContactCenterApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  EightByEightGeneratedOperationCaller,
  EightByEightContactCenterApiOperationArgs,
  EightByEightContactCenterApiOperationInput,
  EightByEightContactCenterApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { EightByEightContactCenterApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const EightByEightContactCenterApiReportAccessOperationKeys = [
  "historical-analytics:POST /",
  "historical-analytics:GET /{id}",
  "historical-analytics:GET /{id}/status",
  "historical-analytics:GET /{id}/data",
  "historical-analytics:GET /{id}/download",
  "historical-analytics:GET /{id}/links",
  "historical-analytics:POST /detailed-reports",
  "historical-analytics:GET /detailed-reports/{id}/data"
] as const;
export type EightByEightContactCenterApiReportAccessOperationKey = typeof EightByEightContactCenterApiReportAccessOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiReportAccessOperationPathParamMap {
  "historical-analytics:POST /": {};
  "historical-analytics:GET /{id}": { "id": EightByEightContactCenterApiPathParamValue };
  "historical-analytics:GET /{id}/status": { "id": EightByEightContactCenterApiPathParamValue };
  "historical-analytics:GET /{id}/data": { "id": EightByEightContactCenterApiPathParamValue };
  "historical-analytics:GET /{id}/download": { "id": EightByEightContactCenterApiPathParamValue };
  "historical-analytics:GET /{id}/links": { "id": EightByEightContactCenterApiPathParamValue };
  "historical-analytics:POST /detailed-reports": {};
  "historical-analytics:GET /detailed-reports/{id}/data": { "id": EightByEightContactCenterApiPathParamValue };
}

export interface EightByEightContactCenterApiReportAccessOperationRequestMap {
  "historical-analytics:POST /": EightByEightContactCenterApiOperationInput<"historical-analytics:POST /">;
  "historical-analytics:GET /{id}": EightByEightContactCenterApiOperationInput<"historical-analytics:GET /{id}">;
  "historical-analytics:GET /{id}/status": EightByEightContactCenterApiOperationInput<"historical-analytics:GET /{id}/status">;
  "historical-analytics:GET /{id}/data": EightByEightContactCenterApiOperationInput<"historical-analytics:GET /{id}/data">;
  "historical-analytics:GET /{id}/download": EightByEightContactCenterApiOperationInput<"historical-analytics:GET /{id}/download">;
  "historical-analytics:GET /{id}/links": EightByEightContactCenterApiOperationInput<"historical-analytics:GET /{id}/links">;
  "historical-analytics:POST /detailed-reports": EightByEightContactCenterApiOperationInput<"historical-analytics:POST /detailed-reports">;
  "historical-analytics:GET /detailed-reports/{id}/data": EightByEightContactCenterApiOperationInput<"historical-analytics:GET /detailed-reports/{id}/data">;
}

export interface EightByEightContactCenterApiReportAccessGeneratedClient {
  CcHistoricalReportCreate(...args: EightByEightContactCenterApiOperationArgs<"historical-analytics:POST /">): Promise<EightByEightContactCenterApiOperationResponseMap["historical-analytics:POST /"]>;
  CcHistoricalReportDetailsById(...args: EightByEightContactCenterApiOperationArgs<"historical-analytics:GET /{id}">): Promise<EightByEightContactCenterApiOperationResponseMap["historical-analytics:GET /{id}"]>;
  CcHistoricalReportStatusById(...args: EightByEightContactCenterApiOperationArgs<"historical-analytics:GET /{id}/status">): Promise<EightByEightContactCenterApiOperationResponseMap["historical-analytics:GET /{id}/status"]>;
  CcHistoricalReportDataById(...args: EightByEightContactCenterApiOperationArgs<"historical-analytics:GET /{id}/data">): Promise<EightByEightContactCenterApiOperationResponseMap["historical-analytics:GET /{id}/data"]>;
  CcHistoricalReportDownloadById(...args: EightByEightContactCenterApiOperationArgs<"historical-analytics:GET /{id}/download">): Promise<EightByEightContactCenterApiOperationResponseMap["historical-analytics:GET /{id}/download"]>;
  CcHistoricalReportLinksById(...args: EightByEightContactCenterApiOperationArgs<"historical-analytics:GET /{id}/links">): Promise<EightByEightContactCenterApiOperationResponseMap["historical-analytics:GET /{id}/links"]>;
  CcDetailedReportCreate(...args: EightByEightContactCenterApiOperationArgs<"historical-analytics:POST /detailed-reports">): Promise<EightByEightContactCenterApiOperationResponseMap["historical-analytics:POST /detailed-reports"]>;
  CcDetailedReportDataById(...args: EightByEightContactCenterApiOperationArgs<"historical-analytics:GET /detailed-reports/{id}/data">): Promise<EightByEightContactCenterApiOperationResponseMap["historical-analytics:GET /detailed-reports/{id}/data"]>;
}

export const EightByEightContactCenterApiReportAccessGeneratedFunctionNames = [
  "CcHistoricalReportCreate",
  "CcHistoricalReportDetailsById",
  "CcHistoricalReportStatusById",
  "CcHistoricalReportDataById",
  "CcHistoricalReportDownloadById",
  "CcHistoricalReportLinksById",
  "CcDetailedReportCreate",
  "CcDetailedReportDataById"
] as const satisfies readonly (keyof EightByEightContactCenterApiReportAccessGeneratedClient)[];

export function createEightByEightContactCenterApiReportAccessGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiReportAccessGeneratedClient {
  return {
    CcHistoricalReportCreate: (...args) => callOperation("historical-analytics:POST /", ...(args as EightByEightContactCenterApiOperationArgs<"historical-analytics:POST /">)),
    CcHistoricalReportDetailsById: (...args) => callOperation("historical-analytics:GET /{id}", ...(args as EightByEightContactCenterApiOperationArgs<"historical-analytics:GET /{id}">)),
    CcHistoricalReportStatusById: (...args) => callOperation("historical-analytics:GET /{id}/status", ...(args as EightByEightContactCenterApiOperationArgs<"historical-analytics:GET /{id}/status">)),
    CcHistoricalReportDataById: (...args) => callOperation("historical-analytics:GET /{id}/data", ...(args as EightByEightContactCenterApiOperationArgs<"historical-analytics:GET /{id}/data">)),
    CcHistoricalReportDownloadById: (...args) => callOperation("historical-analytics:GET /{id}/download", ...(args as EightByEightContactCenterApiOperationArgs<"historical-analytics:GET /{id}/download">)),
    CcHistoricalReportLinksById: (...args) => callOperation("historical-analytics:GET /{id}/links", ...(args as EightByEightContactCenterApiOperationArgs<"historical-analytics:GET /{id}/links">)),
    CcDetailedReportCreate: (...args) => callOperation("historical-analytics:POST /detailed-reports", ...(args as EightByEightContactCenterApiOperationArgs<"historical-analytics:POST /detailed-reports">)),
    CcDetailedReportDataById: (...args) => callOperation("historical-analytics:GET /detailed-reports/{id}/data", ...(args as EightByEightContactCenterApiOperationArgs<"historical-analytics:GET /detailed-reports/{id}/data">)),
  };
}
