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
export const EightByEightContactCenterApiReportDefintionsOperationKeys = [
  "historical-analytics:GET /report-types",
  "historical-analytics:GET /report-types/{type}"
] as const;
export type EightByEightContactCenterApiReportDefintionsOperationKey = typeof EightByEightContactCenterApiReportDefintionsOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiReportDefintionsOperationPathParamMap {
  "historical-analytics:GET /report-types": {};
  "historical-analytics:GET /report-types/{type}": { "type": EightByEightContactCenterApiPathParamValue };
}

export interface EightByEightContactCenterApiReportDefintionsOperationRequestMap {
  "historical-analytics:GET /report-types": EightByEightContactCenterApiOperationInput<"historical-analytics:GET /report-types">;
  "historical-analytics:GET /report-types/{type}": EightByEightContactCenterApiOperationInput<"historical-analytics:GET /report-types/{type}">;
}

export interface EightByEightContactCenterApiReportDefintionsGeneratedClient {
  CcHistoricalAnalyticsReportTypes(...args: EightByEightContactCenterApiOperationArgs<"historical-analytics:GET /report-types">): Promise<EightByEightContactCenterApiOperationResponseMap["historical-analytics:GET /report-types"]>;
  CcHistoricalAnalyticsReportTypeByType(...args: EightByEightContactCenterApiOperationArgs<"historical-analytics:GET /report-types/{type}">): Promise<EightByEightContactCenterApiOperationResponseMap["historical-analytics:GET /report-types/{type}"]>;
}

export const EightByEightContactCenterApiReportDefintionsGeneratedFunctionNames = [
  "CcHistoricalAnalyticsReportTypes",
  "CcHistoricalAnalyticsReportTypeByType"
] as const satisfies readonly (keyof EightByEightContactCenterApiReportDefintionsGeneratedClient)[];

export function createEightByEightContactCenterApiReportDefintionsGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiReportDefintionsGeneratedClient {
  return {
    CcHistoricalAnalyticsReportTypes: (...args) => callOperation("historical-analytics:GET /report-types", ...(args as EightByEightContactCenterApiOperationArgs<"historical-analytics:GET /report-types">)),
    CcHistoricalAnalyticsReportTypeByType: (...args) => callOperation("historical-analytics:GET /report-types/{type}", ...(args as EightByEightContactCenterApiOperationArgs<"historical-analytics:GET /report-types/{type}">)),
  };
}
