// Generated endpoint chunk for GorgiasFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GorgiasGeneratedOperationCaller,
  GorgiasFullApiOperationArgs,
  GorgiasFullApiOperationInput,
  GorgiasFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GorgiasFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GorgiasFullApiReportingStatisticsOperationKeys = [
  "get-statistic"
] as const;
export type GorgiasFullApiReportingStatisticsOperationKey = typeof GorgiasFullApiReportingStatisticsOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiReportingStatisticsOperationPathParamMap {
  "get-statistic": {};
}

export interface GorgiasFullApiReportingStatisticsOperationRequestMap {
  "get-statistic": GorgiasFullApiOperationInput<"get-statistic">;
}

export interface GorgiasFullApiReportingStatisticsGeneratedClient {
  gorgiasGetStatistic(...args: GorgiasFullApiOperationArgs<"get-statistic">): Promise<GorgiasFullApiOperationResponseMap["get-statistic"]>;
}

export const GorgiasFullApiReportingStatisticsGeneratedFunctionNames = [
  "gorgiasGetStatistic"
] as const satisfies readonly (keyof GorgiasFullApiReportingStatisticsGeneratedClient)[];

export function createGorgiasFullApiReportingStatisticsGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiReportingStatisticsGeneratedClient {
  return {
    gorgiasGetStatistic: (...args) => callOperation("get-statistic", ...(args as GorgiasFullApiOperationArgs<"get-statistic">)),
  };
}
