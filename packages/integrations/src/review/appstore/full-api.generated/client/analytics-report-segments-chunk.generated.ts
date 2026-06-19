// Generated endpoint chunk for AppStoreFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AppStoreGeneratedOperationCaller,
  AppStoreFullApiOperationArgs,
  AppStoreFullApiOperationInput,
  AppStoreFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AppStoreFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AppStoreFullApiAnalyticsReportSegmentsOperationKeys = [
  "analyticsReportSegments_getInstance"
] as const;
export type AppStoreFullApiAnalyticsReportSegmentsOperationKey = typeof AppStoreFullApiAnalyticsReportSegmentsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAnalyticsReportSegmentsOperationPathParamMap {
  "analyticsReportSegments_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAnalyticsReportSegmentsOperationRequestMap {
  "analyticsReportSegments_getInstance": AppStoreFullApiOperationInput<"analyticsReportSegments_getInstance">;
}

export interface AppStoreFullApiAnalyticsReportSegmentsGeneratedClient {
  AnalyticsReportSegmentsGetInstance(...args: AppStoreFullApiOperationArgs<"analyticsReportSegments_getInstance">): Promise<AppStoreFullApiOperationResponseMap["analyticsReportSegments_getInstance"]>;
}

export const AppStoreFullApiAnalyticsReportSegmentsGeneratedFunctionNames = [
  "AnalyticsReportSegmentsGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiAnalyticsReportSegmentsGeneratedClient)[];

export function createAppStoreFullApiAnalyticsReportSegmentsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAnalyticsReportSegmentsGeneratedClient {
  return {
    AnalyticsReportSegmentsGetInstance: (...args) => callOperation("analyticsReportSegments_getInstance", ...(args as AppStoreFullApiOperationArgs<"analyticsReportSegments_getInstance">)),
  };
}
