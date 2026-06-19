// Generated endpoint chunk for RingCentralVoiceApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralVoiceGeneratedOperationCaller,
  RingCentralVoiceApiOperationArgs,
  RingCentralVoiceApiOperationInput,
  RingCentralVoiceApiPathParamValue,
} from "../../voice-api-client.generated.js";
import type { RingCentralVoiceApiOperationResponseMap } from "../../voice-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralVoiceApiPublicIntegrationAPIOperationKeys = [
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/recordings/dialogs/{dialogId}/segments/{segmentId}",
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/interaction-metadata",
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/transcripts/dialogs/{dialogId}/segments/{segmentId}",
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups",
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups/{queueGroupId}/with-agents",
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-queue-stats",
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-extended-stats",
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-stats"
] as const;
export type RingCentralVoiceApiPublicIntegrationAPIOperationKey = typeof RingCentralVoiceApiPublicIntegrationAPIOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiPublicIntegrationAPIOperationPathParamMap {
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/recordings/dialogs/{dialogId}/segments/{segmentId}": { "rcAccountId": RingCentralVoiceApiPathParamValue; "subAccountId": RingCentralVoiceApiPathParamValue; "dialogId": RingCentralVoiceApiPathParamValue; "segmentId": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/interaction-metadata": { "rcAccountId": RingCentralVoiceApiPathParamValue; "subAccountId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/transcripts/dialogs/{dialogId}/segments/{segmentId}": { "rcAccountId": RingCentralVoiceApiPathParamValue; "subAccountId": RingCentralVoiceApiPathParamValue; "dialogId": RingCentralVoiceApiPathParamValue; "segmentId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups": { "rcAccountId": RingCentralVoiceApiPathParamValue; "subAccountId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups/{queueGroupId}/with-agents": { "rcAccountId": RingCentralVoiceApiPathParamValue; "subAccountId": RingCentralVoiceApiPathParamValue; "queueGroupId": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-queue-stats": { "rcAccountId": RingCentralVoiceApiPathParamValue; "subAccountId": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-extended-stats": { "rcAccountId": RingCentralVoiceApiPathParamValue; "subAccountId": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-stats": { "rcAccountId": RingCentralVoiceApiPathParamValue; "subAccountId": RingCentralVoiceApiPathParamValue };
}

export interface RingCentralVoiceApiPublicIntegrationAPIOperationRequestMap {
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/recordings/dialogs/{dialogId}/segments/{segmentId}": RingCentralVoiceApiOperationInput<"GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/recordings/dialogs/{dialogId}/segments/{segmentId}">;
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/interaction-metadata": RingCentralVoiceApiOperationInput<"POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/interaction-metadata">;
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/transcripts/dialogs/{dialogId}/segments/{segmentId}": RingCentralVoiceApiOperationInput<"GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/transcripts/dialogs/{dialogId}/segments/{segmentId}">;
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups": RingCentralVoiceApiOperationInput<"GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups">;
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups/{queueGroupId}/with-agents": RingCentralVoiceApiOperationInput<"GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups/{queueGroupId}/with-agents">;
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-queue-stats": RingCentralVoiceApiOperationInput<"POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-queue-stats">;
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-extended-stats": RingCentralVoiceApiOperationInput<"POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-extended-stats">;
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-stats": RingCentralVoiceApiOperationInput<"POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-stats">;
}

export interface RingCentralVoiceApiPublicIntegrationAPIGeneratedClient {
  GetRecordingSegmentData(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/recordings/dialogs/{dialogId}/segments/{segmentId}">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/recordings/dialogs/{dialogId}/segments/{segmentId}"]>;
  GetInteractionMetadata(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/interaction-metadata">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/interaction-metadata"]>;
  GetTranscriptSegmentData(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/transcripts/dialogs/{dialogId}/segments/{segmentId}">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/transcripts/dialogs/{dialogId}/segments/{segmentId}"]>;
  GetQueueGroups(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups"]>;
  GetQueuesWithAgents(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups/{queueGroupId}/with-agents">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups/{queueGroupId}/with-agents"]>;
  BuildAggQueueStats(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-queue-stats">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-queue-stats"]>;
  BuildExtendedAggAgentStats(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-extended-stats">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-extended-stats"]>;
  BuildAggAgentStats(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-stats">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-stats"]>;
}

export const RingCentralVoiceApiPublicIntegrationAPIGeneratedFunctionNames = [
  "GetRecordingSegmentData",
  "GetInteractionMetadata",
  "GetTranscriptSegmentData",
  "GetQueueGroups",
  "GetQueuesWithAgents",
  "BuildAggQueueStats",
  "BuildExtendedAggAgentStats",
  "BuildAggAgentStats"
] as const satisfies readonly (keyof RingCentralVoiceApiPublicIntegrationAPIGeneratedClient)[];

export function createRingCentralVoiceApiPublicIntegrationAPIGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiPublicIntegrationAPIGeneratedClient {
  return {
    GetRecordingSegmentData: (...args) => callOperation("GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/recordings/dialogs/{dialogId}/segments/{segmentId}", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/recordings/dialogs/{dialogId}/segments/{segmentId}">)),
    GetInteractionMetadata: (...args) => callOperation("POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/interaction-metadata", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/interaction-metadata">)),
    GetTranscriptSegmentData: (...args) => callOperation("GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/transcripts/dialogs/{dialogId}/segments/{segmentId}", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/transcripts/dialogs/{dialogId}/segments/{segmentId}">)),
    GetQueueGroups: (...args) => callOperation("GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups">)),
    GetQueuesWithAgents: (...args) => callOperation("GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups/{queueGroupId}/with-agents", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups/{queueGroupId}/with-agents">)),
    BuildAggQueueStats: (...args) => callOperation("POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-queue-stats", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-queue-stats">)),
    BuildExtendedAggAgentStats: (...args) => callOperation("POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-extended-stats", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-extended-stats">)),
    BuildAggAgentStats: (...args) => callOperation("POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-stats", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-stats">)),
  };
}
