// Generated endpoint chunk for FrontFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  FrontGeneratedOperationCaller,
  FrontFullApiOperationArgs,
  FrontFullApiOperationInput,
  FrontFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { FrontFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const FrontFullApiAnalyticsOperationKeys = [
  "create-analytics-export",
  "get-analytics-export",
  "create-analytics-report",
  "get-analytics-report"
] as const;
export type FrontFullApiAnalyticsOperationKey = typeof FrontFullApiAnalyticsOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiAnalyticsOperationPathParamMap {
  "create-analytics-export": {};
  "get-analytics-export": { "export_id": FrontFullApiPathParamValue };
  "create-analytics-report": {};
  "get-analytics-report": { "report_uid": FrontFullApiPathParamValue };
}

export interface FrontFullApiAnalyticsOperationRequestMap {
  "create-analytics-export": FrontFullApiOperationInput<"create-analytics-export">;
  "get-analytics-export": FrontFullApiOperationInput<"get-analytics-export">;
  "create-analytics-report": FrontFullApiOperationInput<"create-analytics-report">;
  "get-analytics-report": FrontFullApiOperationInput<"get-analytics-report">;
}

export interface FrontFullApiAnalyticsGeneratedClient {
  frontCreateAnalyticsExport(...args: FrontFullApiOperationArgs<"create-analytics-export">): Promise<FrontFullApiOperationResponseMap["create-analytics-export"]>;
  frontGetAnalyticsExport(...args: FrontFullApiOperationArgs<"get-analytics-export">): Promise<FrontFullApiOperationResponseMap["get-analytics-export"]>;
  frontCreateAnalyticsReport(...args: FrontFullApiOperationArgs<"create-analytics-report">): Promise<FrontFullApiOperationResponseMap["create-analytics-report"]>;
  frontGetAnalyticsReport(...args: FrontFullApiOperationArgs<"get-analytics-report">): Promise<FrontFullApiOperationResponseMap["get-analytics-report"]>;
}

export const FrontFullApiAnalyticsGeneratedFunctionNames = [
  "frontCreateAnalyticsExport",
  "frontGetAnalyticsExport",
  "frontCreateAnalyticsReport",
  "frontGetAnalyticsReport"
] as const satisfies readonly (keyof FrontFullApiAnalyticsGeneratedClient)[];

export function createFrontFullApiAnalyticsGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiAnalyticsGeneratedClient {
  return {
    frontCreateAnalyticsExport: (...args) => callOperation("create-analytics-export", ...(args as FrontFullApiOperationArgs<"create-analytics-export">)),
    frontGetAnalyticsExport: (...args) => callOperation("get-analytics-export", ...(args as FrontFullApiOperationArgs<"get-analytics-export">)),
    frontCreateAnalyticsReport: (...args) => callOperation("create-analytics-report", ...(args as FrontFullApiOperationArgs<"create-analytics-report">)),
    frontGetAnalyticsReport: (...args) => callOperation("get-analytics-report", ...(args as FrontFullApiOperationArgs<"get-analytics-report">)),
  };
}
