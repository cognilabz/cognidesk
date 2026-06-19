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
export const EightByEightContactCenterApiGroupsOperationKeys = [
  "real-time-analytics:GET /groups",
  "real-time-analytics:GET /groups/{id}"
] as const;
export type EightByEightContactCenterApiGroupsOperationKey = typeof EightByEightContactCenterApiGroupsOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiGroupsOperationPathParamMap {
  "real-time-analytics:GET /groups": {};
  "real-time-analytics:GET /groups/{id}": { "id": EightByEightContactCenterApiPathParamValue };
}

export interface EightByEightContactCenterApiGroupsOperationRequestMap {
  "real-time-analytics:GET /groups": EightByEightContactCenterApiOperationInput<"real-time-analytics:GET /groups">;
  "real-time-analytics:GET /groups/{id}": EightByEightContactCenterApiOperationInput<"real-time-analytics:GET /groups/{id}">;
}

export interface EightByEightContactCenterApiGroupsGeneratedClient {
  CcRealTimeGetGroupsMetrics(...args: EightByEightContactCenterApiOperationArgs<"real-time-analytics:GET /groups">): Promise<EightByEightContactCenterApiOperationResponseMap["real-time-analytics:GET /groups"]>;
  CcRealTimeGetGroupMetricsById(...args: EightByEightContactCenterApiOperationArgs<"real-time-analytics:GET /groups/{id}">): Promise<EightByEightContactCenterApiOperationResponseMap["real-time-analytics:GET /groups/{id}"]>;
}

export const EightByEightContactCenterApiGroupsGeneratedFunctionNames = [
  "CcRealTimeGetGroupsMetrics",
  "CcRealTimeGetGroupMetricsById"
] as const satisfies readonly (keyof EightByEightContactCenterApiGroupsGeneratedClient)[];

export function createEightByEightContactCenterApiGroupsGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiGroupsGeneratedClient {
  return {
    CcRealTimeGetGroupsMetrics: (...args) => callOperation("real-time-analytics:GET /groups", ...(args as EightByEightContactCenterApiOperationArgs<"real-time-analytics:GET /groups">)),
    CcRealTimeGetGroupMetricsById: (...args) => callOperation("real-time-analytics:GET /groups/{id}", ...(args as EightByEightContactCenterApiOperationArgs<"real-time-analytics:GET /groups/{id}">)),
  };
}
