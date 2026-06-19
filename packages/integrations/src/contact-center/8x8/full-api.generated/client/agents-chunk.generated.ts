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
export const EightByEightContactCenterApiAgentsOperationKeys = [
  "real-time-analytics:GET /queues/{queueId}/agents",
  "real-time-analytics:GET /queues/{queueId}/agents/{agentId}",
  "real-time-analytics:GET /groups/{groupId}/agents",
  "real-time-analytics:GET /groups/{groupId}/agents/{agentId}",
  "real-time-analytics:GET /agents-in-queue-groups",
  "real-time-analytics:GET /agents"
] as const;
export type EightByEightContactCenterApiAgentsOperationKey = typeof EightByEightContactCenterApiAgentsOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiAgentsOperationPathParamMap {
  "real-time-analytics:GET /queues/{queueId}/agents": { "queueId": EightByEightContactCenterApiPathParamValue };
  "real-time-analytics:GET /queues/{queueId}/agents/{agentId}": { "queueId": EightByEightContactCenterApiPathParamValue; "agentId": EightByEightContactCenterApiPathParamValue };
  "real-time-analytics:GET /groups/{groupId}/agents": { "groupId": EightByEightContactCenterApiPathParamValue };
  "real-time-analytics:GET /groups/{groupId}/agents/{agentId}": { "groupId": EightByEightContactCenterApiPathParamValue; "agentId": EightByEightContactCenterApiPathParamValue };
  "real-time-analytics:GET /agents-in-queue-groups": {};
  "real-time-analytics:GET /agents": {};
}

export interface EightByEightContactCenterApiAgentsOperationRequestMap {
  "real-time-analytics:GET /queues/{queueId}/agents": EightByEightContactCenterApiOperationInput<"real-time-analytics:GET /queues/{queueId}/agents">;
  "real-time-analytics:GET /queues/{queueId}/agents/{agentId}": EightByEightContactCenterApiOperationInput<"real-time-analytics:GET /queues/{queueId}/agents/{agentId}">;
  "real-time-analytics:GET /groups/{groupId}/agents": EightByEightContactCenterApiOperationInput<"real-time-analytics:GET /groups/{groupId}/agents">;
  "real-time-analytics:GET /groups/{groupId}/agents/{agentId}": EightByEightContactCenterApiOperationInput<"real-time-analytics:GET /groups/{groupId}/agents/{agentId}">;
  "real-time-analytics:GET /agents-in-queue-groups": EightByEightContactCenterApiOperationInput<"real-time-analytics:GET /agents-in-queue-groups">;
  "real-time-analytics:GET /agents": EightByEightContactCenterApiOperationInput<"real-time-analytics:GET /agents">;
}

export interface EightByEightContactCenterApiAgentsGeneratedClient {
  CcRealTimeGetAgentsMetricsByQueue(...args: EightByEightContactCenterApiOperationArgs<"real-time-analytics:GET /queues/{queueId}/agents">): Promise<EightByEightContactCenterApiOperationResponseMap["real-time-analytics:GET /queues/{queueId}/agents"]>;
  CcRealTimeGetAgentMetricsByQueueById(...args: EightByEightContactCenterApiOperationArgs<"real-time-analytics:GET /queues/{queueId}/agents/{agentId}">): Promise<EightByEightContactCenterApiOperationResponseMap["real-time-analytics:GET /queues/{queueId}/agents/{agentId}"]>;
  CcRealTimeGetAgentsMetricsByGroup(...args: EightByEightContactCenterApiOperationArgs<"real-time-analytics:GET /groups/{groupId}/agents">): Promise<EightByEightContactCenterApiOperationResponseMap["real-time-analytics:GET /groups/{groupId}/agents"]>;
  CcRealTimeGetAgentMetricsByGroupById(...args: EightByEightContactCenterApiOperationArgs<"real-time-analytics:GET /groups/{groupId}/agents/{agentId}">): Promise<EightByEightContactCenterApiOperationResponseMap["real-time-analytics:GET /groups/{groupId}/agents/{agentId}"]>;
  Getagentsinqueue(...args: EightByEightContactCenterApiOperationArgs<"real-time-analytics:GET /agents-in-queue-groups">): Promise<EightByEightContactCenterApiOperationResponseMap["real-time-analytics:GET /agents-in-queue-groups"]>;
  AllTenantAgentsMetrics(...args: EightByEightContactCenterApiOperationArgs<"real-time-analytics:GET /agents">): Promise<EightByEightContactCenterApiOperationResponseMap["real-time-analytics:GET /agents"]>;
}

export const EightByEightContactCenterApiAgentsGeneratedFunctionNames = [
  "CcRealTimeGetAgentsMetricsByQueue",
  "CcRealTimeGetAgentMetricsByQueueById",
  "CcRealTimeGetAgentsMetricsByGroup",
  "CcRealTimeGetAgentMetricsByGroupById",
  "Getagentsinqueue",
  "AllTenantAgentsMetrics"
] as const satisfies readonly (keyof EightByEightContactCenterApiAgentsGeneratedClient)[];

export function createEightByEightContactCenterApiAgentsGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiAgentsGeneratedClient {
  return {
    CcRealTimeGetAgentsMetricsByQueue: (...args) => callOperation("real-time-analytics:GET /queues/{queueId}/agents", ...(args as EightByEightContactCenterApiOperationArgs<"real-time-analytics:GET /queues/{queueId}/agents">)),
    CcRealTimeGetAgentMetricsByQueueById: (...args) => callOperation("real-time-analytics:GET /queues/{queueId}/agents/{agentId}", ...(args as EightByEightContactCenterApiOperationArgs<"real-time-analytics:GET /queues/{queueId}/agents/{agentId}">)),
    CcRealTimeGetAgentsMetricsByGroup: (...args) => callOperation("real-time-analytics:GET /groups/{groupId}/agents", ...(args as EightByEightContactCenterApiOperationArgs<"real-time-analytics:GET /groups/{groupId}/agents">)),
    CcRealTimeGetAgentMetricsByGroupById: (...args) => callOperation("real-time-analytics:GET /groups/{groupId}/agents/{agentId}", ...(args as EightByEightContactCenterApiOperationArgs<"real-time-analytics:GET /groups/{groupId}/agents/{agentId}">)),
    Getagentsinqueue: (...args) => callOperation("real-time-analytics:GET /agents-in-queue-groups", ...(args as EightByEightContactCenterApiOperationArgs<"real-time-analytics:GET /agents-in-queue-groups">)),
    AllTenantAgentsMetrics: (...args) => callOperation("real-time-analytics:GET /agents", ...(args as EightByEightContactCenterApiOperationArgs<"real-time-analytics:GET /agents">)),
  };
}
