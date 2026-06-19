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
export const EightByEightContactCenterApiQueuesOperationKeys = [
  "real-time-analytics:GET /queues",
  "real-time-analytics:GET /queues/{id}"
] as const;
export type EightByEightContactCenterApiQueuesOperationKey = typeof EightByEightContactCenterApiQueuesOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiQueuesOperationPathParamMap {
  "real-time-analytics:GET /queues": {};
  "real-time-analytics:GET /queues/{id}": { "id": EightByEightContactCenterApiPathParamValue };
}

export interface EightByEightContactCenterApiQueuesOperationRequestMap {
  "real-time-analytics:GET /queues": EightByEightContactCenterApiOperationInput<"real-time-analytics:GET /queues">;
  "real-time-analytics:GET /queues/{id}": EightByEightContactCenterApiOperationInput<"real-time-analytics:GET /queues/{id}">;
}

export interface EightByEightContactCenterApiQueuesGeneratedClient {
  CcRealTimeGetQueuesMetrics(...args: EightByEightContactCenterApiOperationArgs<"real-time-analytics:GET /queues">): Promise<EightByEightContactCenterApiOperationResponseMap["real-time-analytics:GET /queues"]>;
  CcRealTimeGetQueueMetricsById(...args: EightByEightContactCenterApiOperationArgs<"real-time-analytics:GET /queues/{id}">): Promise<EightByEightContactCenterApiOperationResponseMap["real-time-analytics:GET /queues/{id}"]>;
}

export const EightByEightContactCenterApiQueuesGeneratedFunctionNames = [
  "CcRealTimeGetQueuesMetrics",
  "CcRealTimeGetQueueMetricsById"
] as const satisfies readonly (keyof EightByEightContactCenterApiQueuesGeneratedClient)[];

export function createEightByEightContactCenterApiQueuesGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiQueuesGeneratedClient {
  return {
    CcRealTimeGetQueuesMetrics: (...args) => callOperation("real-time-analytics:GET /queues", ...(args as EightByEightContactCenterApiOperationArgs<"real-time-analytics:GET /queues">)),
    CcRealTimeGetQueueMetricsById: (...args) => callOperation("real-time-analytics:GET /queues/{id}", ...(args as EightByEightContactCenterApiOperationArgs<"real-time-analytics:GET /queues/{id}">)),
  };
}
