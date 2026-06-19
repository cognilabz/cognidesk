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
export const GorgiasFullApiMetricCardsOperationKeys = [
  "search-metric-cards",
  "get-metric-card"
] as const;
export type GorgiasFullApiMetricCardsOperationKey = typeof GorgiasFullApiMetricCardsOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiMetricCardsOperationPathParamMap {
  "search-metric-cards": {};
  "get-metric-card": { "slug": GorgiasFullApiPathParamValue };
}

export interface GorgiasFullApiMetricCardsOperationRequestMap {
  "search-metric-cards": GorgiasFullApiOperationInput<"search-metric-cards">;
  "get-metric-card": GorgiasFullApiOperationInput<"get-metric-card">;
}

export interface GorgiasFullApiMetricCardsGeneratedClient {
  gorgiasSearchMetricCards(...args: GorgiasFullApiOperationArgs<"search-metric-cards">): Promise<GorgiasFullApiOperationResponseMap["search-metric-cards"]>;
  gorgiasGetMetricCard(...args: GorgiasFullApiOperationArgs<"get-metric-card">): Promise<GorgiasFullApiOperationResponseMap["get-metric-card"]>;
}

export const GorgiasFullApiMetricCardsGeneratedFunctionNames = [
  "gorgiasSearchMetricCards",
  "gorgiasGetMetricCard"
] as const satisfies readonly (keyof GorgiasFullApiMetricCardsGeneratedClient)[];

export function createGorgiasFullApiMetricCardsGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiMetricCardsGeneratedClient {
  return {
    gorgiasSearchMetricCards: (...args) => callOperation("search-metric-cards", ...(args as GorgiasFullApiOperationArgs<"search-metric-cards">)),
    gorgiasGetMetricCard: (...args) => callOperation("get-metric-card", ...(args as GorgiasFullApiOperationArgs<"get-metric-card">)),
  };
}
