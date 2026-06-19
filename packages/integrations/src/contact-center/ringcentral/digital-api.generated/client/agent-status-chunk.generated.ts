// Generated endpoint chunk for RingCentralDigitalApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralDigitalGeneratedOperationCaller,
  RingCentralDigitalApiOperationArgs,
  RingCentralDigitalApiOperationInput,
  RingCentralDigitalApiPathParamValue,
} from "../../digital-api-client.generated.js";
import type { RingCentralDigitalApiOperationResponseMap } from "../../digital-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralDigitalApiAgentStatusOperationKeys = [
  "GET /status",
  "GET /status/{agentId}",
  "PUT /status/{agentId}"
] as const;
export type RingCentralDigitalApiAgentStatusOperationKey = typeof RingCentralDigitalApiAgentStatusOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiAgentStatusOperationPathParamMap {
  "GET /status": {};
  "GET /status/{agentId}": { "agentId": RingCentralDigitalApiPathParamValue };
  "PUT /status/{agentId}": { "agentId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiAgentStatusOperationRequestMap {
  "GET /status": RingCentralDigitalApiOperationInput<"GET /status">;
  "GET /status/{agentId}": RingCentralDigitalApiOperationInput<"GET /status/{agentId}">;
  "PUT /status/{agentId}": RingCentralDigitalApiOperationInput<"PUT /status/{agentId}">;
}

export interface RingCentralDigitalApiAgentStatusGeneratedClient {
  GetAllAgentStatus(...args: RingCentralDigitalApiOperationArgs<"GET /status">): Promise<RingCentralDigitalApiOperationResponseMap["GET /status"]>;
  GetAgentStatus(...args: RingCentralDigitalApiOperationArgs<"GET /status/{agentId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /status/{agentId}"]>;
  ChangeAgentStatus(...args: RingCentralDigitalApiOperationArgs<"PUT /status/{agentId}">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /status/{agentId}"]>;
}

export const RingCentralDigitalApiAgentStatusGeneratedFunctionNames = [
  "GetAllAgentStatus",
  "GetAgentStatus",
  "ChangeAgentStatus"
] as const satisfies readonly (keyof RingCentralDigitalApiAgentStatusGeneratedClient)[];

export function createRingCentralDigitalApiAgentStatusGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiAgentStatusGeneratedClient {
  return {
    GetAllAgentStatus: (...args) => callOperation("GET /status", ...(args as RingCentralDigitalApiOperationArgs<"GET /status">)),
    GetAgentStatus: (...args) => callOperation("GET /status/{agentId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /status/{agentId}">)),
    ChangeAgentStatus: (...args) => callOperation("PUT /status/{agentId}", ...(args as RingCentralDigitalApiOperationArgs<"PUT /status/{agentId}">)),
  };
}
