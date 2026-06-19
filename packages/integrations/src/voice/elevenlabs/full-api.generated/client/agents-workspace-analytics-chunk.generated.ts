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
export const ElevenLabsFullApiAgentsWorkspaceAnalyticsOperationKeys = [
  "POST /v1/convai/conversations/{conversation_id}/analysis/run",
  "POST /v1/convai/conversations/{conversation_id}/analysis/evaluations/run"
] as const;
export type ElevenLabsFullApiAgentsWorkspaceAnalyticsOperationKey = typeof ElevenLabsFullApiAgentsWorkspaceAnalyticsOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiAgentsWorkspaceAnalyticsOperationPathParamMap {
  "POST /v1/convai/conversations/{conversation_id}/analysis/run": { "conversation_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/conversations/{conversation_id}/analysis/evaluations/run": { "conversation_id": ElevenLabsFullApiPathParamValue };
}

export interface ElevenLabsFullApiAgentsWorkspaceAnalyticsOperationRequestMap {
  "POST /v1/convai/conversations/{conversation_id}/analysis/run": ElevenLabsFullApiOperationInput<"POST /v1/convai/conversations/{conversation_id}/analysis/run">;
  "POST /v1/convai/conversations/{conversation_id}/analysis/evaluations/run": ElevenLabsFullApiOperationInput<"POST /v1/convai/conversations/{conversation_id}/analysis/evaluations/run">;
}

export interface ElevenLabsFullApiAgentsWorkspaceAnalyticsGeneratedClient {
  RunConversationAnalysis(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/conversations/{conversation_id}/analysis/run">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/conversations/{conversation_id}/analysis/run"]>;
  RunConversationEvaluations(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/conversations/{conversation_id}/analysis/evaluations/run">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/conversations/{conversation_id}/analysis/evaluations/run"]>;
}

export const ElevenLabsFullApiAgentsWorkspaceAnalyticsGeneratedFunctionNames = [
  "RunConversationAnalysis",
  "RunConversationEvaluations"
] as const satisfies readonly (keyof ElevenLabsFullApiAgentsWorkspaceAnalyticsGeneratedClient)[];

export function createElevenLabsFullApiAgentsWorkspaceAnalyticsGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiAgentsWorkspaceAnalyticsGeneratedClient {
  return {
    RunConversationAnalysis: (...args) => callOperation("POST /v1/convai/conversations/{conversation_id}/analysis/run", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/conversations/{conversation_id}/analysis/run">)),
    RunConversationEvaluations: (...args) => callOperation("POST /v1/convai/conversations/{conversation_id}/analysis/evaluations/run", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/conversations/{conversation_id}/analysis/evaluations/run">)),
  };
}
