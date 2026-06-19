// Generated endpoint chunk for ElevenLabsFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ElevenLabsGeneratedOperationCaller,
  ElevenLabsFullApiOperationArgs,
  ElevenLabsFullApiOperationInput,
  ElevenLabsFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ElevenLabsFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ElevenLabsFullApiAgentsInsightsOperationKeys = [
  "GET /v1/convai/agents/{agent_id}/topics"
] as const;
export type ElevenLabsFullApiAgentsInsightsOperationKey = typeof ElevenLabsFullApiAgentsInsightsOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiAgentsInsightsOperationPathParamMap {
  "GET /v1/convai/agents/{agent_id}/topics": { "agent_id": ElevenLabsFullApiPathParamValue };
}

export interface ElevenLabsFullApiAgentsInsightsOperationRequestMap {
  "GET /v1/convai/agents/{agent_id}/topics": ElevenLabsFullApiOperationInput<"GET /v1/convai/agents/{agent_id}/topics">;
}

export interface ElevenLabsFullApiAgentsInsightsGeneratedClient {
  GetAgentTopicsRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/agents/{agent_id}/topics">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/agents/{agent_id}/topics"]>;
}

export const ElevenLabsFullApiAgentsInsightsGeneratedFunctionNames = [
  "GetAgentTopicsRoute"
] as const satisfies readonly (keyof ElevenLabsFullApiAgentsInsightsGeneratedClient)[];

export function createElevenLabsFullApiAgentsInsightsGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiAgentsInsightsGeneratedClient {
  return {
    GetAgentTopicsRoute: (...args) => callOperation("GET /v1/convai/agents/{agent_id}/topics", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/agents/{agent_id}/topics">)),
  };
}
