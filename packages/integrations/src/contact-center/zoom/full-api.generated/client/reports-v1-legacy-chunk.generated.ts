// Generated endpoint chunk for ZoomContactCenterFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZoomContactCenterGeneratedOperationCaller,
  ZoomContactCenterFullApiOperationArgs,
  ZoomContactCenterFullApiOperationInput,
  ZoomContactCenterFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZoomContactCenterFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZoomContactCenterFullApiReportsV1LegacyOperationKeys = [
  "GET /contact_center/analytics/agents/leg_metrics",
  "GET /contact_center/analytics/agents/status_history",
  "GET /contact_center/analytics/agents/time_sheets",
  "GET /contact_center/analytics/historical/details/metrics",
  "GET /contact_center/analytics/historical/queues/agents/metrics",
  "GET /contact_center/analytics/historical/queues/metrics",
  "GET /contact_center/analytics/historical/queues/{queueId}/agents/metrics"
] as const;
export type ZoomContactCenterFullApiReportsV1LegacyOperationKey = typeof ZoomContactCenterFullApiReportsV1LegacyOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiReportsV1LegacyOperationPathParamMap {
  "GET /contact_center/analytics/agents/leg_metrics": {};
  "GET /contact_center/analytics/agents/status_history": {};
  "GET /contact_center/analytics/agents/time_sheets": {};
  "GET /contact_center/analytics/historical/details/metrics": {};
  "GET /contact_center/analytics/historical/queues/agents/metrics": {};
  "GET /contact_center/analytics/historical/queues/metrics": {};
  "GET /contact_center/analytics/historical/queues/{queueId}/agents/metrics": { "queueId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiReportsV1LegacyOperationRequestMap {
  "GET /contact_center/analytics/agents/leg_metrics": ZoomContactCenterFullApiOperationInput<"GET /contact_center/analytics/agents/leg_metrics">;
  "GET /contact_center/analytics/agents/status_history": ZoomContactCenterFullApiOperationInput<"GET /contact_center/analytics/agents/status_history">;
  "GET /contact_center/analytics/agents/time_sheets": ZoomContactCenterFullApiOperationInput<"GET /contact_center/analytics/agents/time_sheets">;
  "GET /contact_center/analytics/historical/details/metrics": ZoomContactCenterFullApiOperationInput<"GET /contact_center/analytics/historical/details/metrics">;
  "GET /contact_center/analytics/historical/queues/agents/metrics": ZoomContactCenterFullApiOperationInput<"GET /contact_center/analytics/historical/queues/agents/metrics">;
  "GET /contact_center/analytics/historical/queues/metrics": ZoomContactCenterFullApiOperationInput<"GET /contact_center/analytics/historical/queues/metrics">;
  "GET /contact_center/analytics/historical/queues/{queueId}/agents/metrics": ZoomContactCenterFullApiOperationInput<"GET /contact_center/analytics/historical/queues/{queueId}/agents/metrics">;
}

export interface ZoomContactCenterFullApiReportsV1LegacyGeneratedClient {
  ListAgentLegMetric(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/agents/leg_metrics">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/analytics/agents/leg_metrics"]>;
  ListAgentStatusHistory(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/agents/status_history">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/analytics/agents/status_history"]>;
  ListAgentTimeSheet(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/agents/time_sheets">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/analytics/agents/time_sheets"]>;
  ListHistoricalDetailMetric(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/historical/details/metrics">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/analytics/historical/details/metrics"]>;
  ListQueueAgentsMetrics(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/historical/queues/agents/metrics">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/analytics/historical/queues/agents/metrics"]>;
  ListHistoricalQueueMetric(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/historical/queues/metrics">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/analytics/historical/queues/metrics"]>;
  ListQueueAgentMetric(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/historical/queues/{queueId}/agents/metrics">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/analytics/historical/queues/{queueId}/agents/metrics"]>;
}

export const ZoomContactCenterFullApiReportsV1LegacyGeneratedFunctionNames = [
  "ListAgentLegMetric",
  "ListAgentStatusHistory",
  "ListAgentTimeSheet",
  "ListHistoricalDetailMetric",
  "ListQueueAgentsMetrics",
  "ListHistoricalQueueMetric",
  "ListQueueAgentMetric"
] as const satisfies readonly (keyof ZoomContactCenterFullApiReportsV1LegacyGeneratedClient)[];

export function createZoomContactCenterFullApiReportsV1LegacyGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiReportsV1LegacyGeneratedClient {
  return {
    ListAgentLegMetric: (...args) => callOperation("GET /contact_center/analytics/agents/leg_metrics", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/agents/leg_metrics">)),
    ListAgentStatusHistory: (...args) => callOperation("GET /contact_center/analytics/agents/status_history", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/agents/status_history">)),
    ListAgentTimeSheet: (...args) => callOperation("GET /contact_center/analytics/agents/time_sheets", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/agents/time_sheets">)),
    ListHistoricalDetailMetric: (...args) => callOperation("GET /contact_center/analytics/historical/details/metrics", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/historical/details/metrics">)),
    ListQueueAgentsMetrics: (...args) => callOperation("GET /contact_center/analytics/historical/queues/agents/metrics", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/historical/queues/agents/metrics">)),
    ListHistoricalQueueMetric: (...args) => callOperation("GET /contact_center/analytics/historical/queues/metrics", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/historical/queues/metrics">)),
    ListQueueAgentMetric: (...args) => callOperation("GET /contact_center/analytics/historical/queues/{queueId}/agents/metrics", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/historical/queues/{queueId}/agents/metrics">)),
  };
}
