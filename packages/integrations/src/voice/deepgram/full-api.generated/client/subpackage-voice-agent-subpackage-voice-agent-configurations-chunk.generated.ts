// Generated endpoint chunk for DeepgramSpeechFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  DeepgramSpeechGeneratedOperationCaller,
  DeepgramSpeechFullApiOperationArgs,
  DeepgramSpeechFullApiOperationInput,
  DeepgramSpeechFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { DeepgramSpeechFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentConfigurationsOperationKeys = [
  "POST /v1/projects/{project_id}/agents",
  "DELETE /v1/projects/{project_id}/agents/{agent_id}",
  "GET /v1/projects/{project_id}/agents/{agent_id}",
  "GET /v1/projects/{project_id}/agents",
  "PUT /v1/projects/{project_id}/agents/{agent_id}"
] as const;
export type DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentConfigurationsOperationKey = typeof DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentConfigurationsOperationKeys[number];
// End hardened literal operation keys.

export interface DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentConfigurationsOperationPathParamMap {
  "POST /v1/projects/{project_id}/agents": { "project_id": DeepgramSpeechFullApiPathParamValue };
  "DELETE /v1/projects/{project_id}/agents/{agent_id}": { "project_id": DeepgramSpeechFullApiPathParamValue; "agent_id": DeepgramSpeechFullApiPathParamValue };
  "GET /v1/projects/{project_id}/agents/{agent_id}": { "project_id": DeepgramSpeechFullApiPathParamValue; "agent_id": DeepgramSpeechFullApiPathParamValue };
  "GET /v1/projects/{project_id}/agents": { "project_id": DeepgramSpeechFullApiPathParamValue };
  "PUT /v1/projects/{project_id}/agents/{agent_id}": { "project_id": DeepgramSpeechFullApiPathParamValue; "agent_id": DeepgramSpeechFullApiPathParamValue };
}

export interface DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentConfigurationsOperationRequestMap {
  "POST /v1/projects/{project_id}/agents": DeepgramSpeechFullApiOperationInput<"POST /v1/projects/{project_id}/agents">;
  "DELETE /v1/projects/{project_id}/agents/{agent_id}": DeepgramSpeechFullApiOperationInput<"DELETE /v1/projects/{project_id}/agents/{agent_id}">;
  "GET /v1/projects/{project_id}/agents/{agent_id}": DeepgramSpeechFullApiOperationInput<"GET /v1/projects/{project_id}/agents/{agent_id}">;
  "GET /v1/projects/{project_id}/agents": DeepgramSpeechFullApiOperationInput<"GET /v1/projects/{project_id}/agents">;
  "PUT /v1/projects/{project_id}/agents/{agent_id}": DeepgramSpeechFullApiOperationInput<"PUT /v1/projects/{project_id}/agents/{agent_id}">;
}

export interface DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentConfigurationsGeneratedClient {
  Create(...args: DeepgramSpeechFullApiOperationArgs<"POST /v1/projects/{project_id}/agents">): Promise<DeepgramSpeechFullApiOperationResponseMap["POST /v1/projects/{project_id}/agents"]>;
  Delete(...args: DeepgramSpeechFullApiOperationArgs<"DELETE /v1/projects/{project_id}/agents/{agent_id}">): Promise<DeepgramSpeechFullApiOperationResponseMap["DELETE /v1/projects/{project_id}/agents/{agent_id}"]>;
  Get(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/agents/{agent_id}">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/projects/{project_id}/agents/{agent_id}"]>;
  List2(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/agents">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/projects/{project_id}/agents"]>;
  Update(...args: DeepgramSpeechFullApiOperationArgs<"PUT /v1/projects/{project_id}/agents/{agent_id}">): Promise<DeepgramSpeechFullApiOperationResponseMap["PUT /v1/projects/{project_id}/agents/{agent_id}"]>;
}

export const DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentConfigurationsGeneratedFunctionNames = [
  "Create",
  "Delete",
  "Get",
  "List2",
  "Update"
] as const satisfies readonly (keyof DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentConfigurationsGeneratedClient)[];

export function createDeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentConfigurationsGeneratedClient(
  callOperation: DeepgramSpeechGeneratedOperationCaller,
): DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentConfigurationsGeneratedClient {
  return {
    Create: (...args) => callOperation("POST /v1/projects/{project_id}/agents", ...(args as DeepgramSpeechFullApiOperationArgs<"POST /v1/projects/{project_id}/agents">)),
    Delete: (...args) => callOperation("DELETE /v1/projects/{project_id}/agents/{agent_id}", ...(args as DeepgramSpeechFullApiOperationArgs<"DELETE /v1/projects/{project_id}/agents/{agent_id}">)),
    Get: (...args) => callOperation("GET /v1/projects/{project_id}/agents/{agent_id}", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/agents/{agent_id}">)),
    List2: (...args) => callOperation("GET /v1/projects/{project_id}/agents", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/agents">)),
    Update: (...args) => callOperation("PUT /v1/projects/{project_id}/agents/{agent_id}", ...(args as DeepgramSpeechFullApiOperationArgs<"PUT /v1/projects/{project_id}/agents/{agent_id}">)),
  };
}
