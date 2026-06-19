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
export const GorgiasFullApiStatisticsOperationKeys = [
  "get-legacy-statistic",
  "download-legacy-statistic"
] as const;
export type GorgiasFullApiStatisticsOperationKey = typeof GorgiasFullApiStatisticsOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiStatisticsOperationPathParamMap {
  "get-legacy-statistic": { "name": GorgiasFullApiPathParamValue };
  "download-legacy-statistic": { "name": GorgiasFullApiPathParamValue };
}

export interface GorgiasFullApiStatisticsOperationRequestMap {
  "get-legacy-statistic": GorgiasFullApiOperationInput<"get-legacy-statistic">;
  "download-legacy-statistic": GorgiasFullApiOperationInput<"download-legacy-statistic">;
}

export interface GorgiasFullApiStatisticsGeneratedClient {
  gorgiasGetLegacyStatistic(...args: GorgiasFullApiOperationArgs<"get-legacy-statistic">): Promise<GorgiasFullApiOperationResponseMap["get-legacy-statistic"]>;
  gorgiasDownloadLegacyStatistic(...args: GorgiasFullApiOperationArgs<"download-legacy-statistic">): Promise<GorgiasFullApiOperationResponseMap["download-legacy-statistic"]>;
}

export const GorgiasFullApiStatisticsGeneratedFunctionNames = [
  "gorgiasGetLegacyStatistic",
  "gorgiasDownloadLegacyStatistic"
] as const satisfies readonly (keyof GorgiasFullApiStatisticsGeneratedClient)[];

export function createGorgiasFullApiStatisticsGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiStatisticsGeneratedClient {
  return {
    gorgiasGetLegacyStatistic: (...args) => callOperation("get-legacy-statistic", ...(args as GorgiasFullApiOperationArgs<"get-legacy-statistic">)),
    gorgiasDownloadLegacyStatistic: (...args) => callOperation("download-legacy-statistic", ...(args as GorgiasFullApiOperationArgs<"download-legacy-statistic">)),
  };
}
