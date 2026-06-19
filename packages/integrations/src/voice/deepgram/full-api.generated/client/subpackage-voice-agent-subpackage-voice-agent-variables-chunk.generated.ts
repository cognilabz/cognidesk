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
export const DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentVariablesOperationKeys = [
  "POST /v1/projects/{project_id}/agent-variables",
  "DELETE /v1/projects/{project_id}/agent-variables/{variable_id}",
  "GET /v1/projects/{project_id}/agent-variables/{variable_id}",
  "GET /v1/projects/{project_id}/agent-variables",
  "PATCH /v1/projects/{project_id}/agent-variables/{variable_id}"
] as const;
export type DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentVariablesOperationKey = typeof DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentVariablesOperationKeys[number];
// End hardened literal operation keys.

export interface DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentVariablesOperationPathParamMap {
  "POST /v1/projects/{project_id}/agent-variables": { "project_id": DeepgramSpeechFullApiPathParamValue };
  "DELETE /v1/projects/{project_id}/agent-variables/{variable_id}": { "project_id": DeepgramSpeechFullApiPathParamValue; "variable_id": DeepgramSpeechFullApiPathParamValue };
  "GET /v1/projects/{project_id}/agent-variables/{variable_id}": { "project_id": DeepgramSpeechFullApiPathParamValue; "variable_id": DeepgramSpeechFullApiPathParamValue };
  "GET /v1/projects/{project_id}/agent-variables": { "project_id": DeepgramSpeechFullApiPathParamValue };
  "PATCH /v1/projects/{project_id}/agent-variables/{variable_id}": { "project_id": DeepgramSpeechFullApiPathParamValue; "variable_id": DeepgramSpeechFullApiPathParamValue };
}

export interface DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentVariablesOperationRequestMap {
  "POST /v1/projects/{project_id}/agent-variables": DeepgramSpeechFullApiOperationInput<"POST /v1/projects/{project_id}/agent-variables">;
  "DELETE /v1/projects/{project_id}/agent-variables/{variable_id}": DeepgramSpeechFullApiOperationInput<"DELETE /v1/projects/{project_id}/agent-variables/{variable_id}">;
  "GET /v1/projects/{project_id}/agent-variables/{variable_id}": DeepgramSpeechFullApiOperationInput<"GET /v1/projects/{project_id}/agent-variables/{variable_id}">;
  "GET /v1/projects/{project_id}/agent-variables": DeepgramSpeechFullApiOperationInput<"GET /v1/projects/{project_id}/agent-variables">;
  "PATCH /v1/projects/{project_id}/agent-variables/{variable_id}": DeepgramSpeechFullApiOperationInput<"PATCH /v1/projects/{project_id}/agent-variables/{variable_id}">;
}

export interface DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentVariablesGeneratedClient {
  Create2(...args: DeepgramSpeechFullApiOperationArgs<"POST /v1/projects/{project_id}/agent-variables">): Promise<DeepgramSpeechFullApiOperationResponseMap["POST /v1/projects/{project_id}/agent-variables"]>;
  Delete2(...args: DeepgramSpeechFullApiOperationArgs<"DELETE /v1/projects/{project_id}/agent-variables/{variable_id}">): Promise<DeepgramSpeechFullApiOperationResponseMap["DELETE /v1/projects/{project_id}/agent-variables/{variable_id}"]>;
  Get2(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/agent-variables/{variable_id}">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/projects/{project_id}/agent-variables/{variable_id}"]>;
  List3(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/agent-variables">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/projects/{project_id}/agent-variables"]>;
  Update2(...args: DeepgramSpeechFullApiOperationArgs<"PATCH /v1/projects/{project_id}/agent-variables/{variable_id}">): Promise<DeepgramSpeechFullApiOperationResponseMap["PATCH /v1/projects/{project_id}/agent-variables/{variable_id}"]>;
}

export const DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentVariablesGeneratedFunctionNames = [
  "Create2",
  "Delete2",
  "Get2",
  "List3",
  "Update2"
] as const satisfies readonly (keyof DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentVariablesGeneratedClient)[];

export function createDeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentVariablesGeneratedClient(
  callOperation: DeepgramSpeechGeneratedOperationCaller,
): DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentVariablesGeneratedClient {
  return {
    Create2: (...args) => callOperation("POST /v1/projects/{project_id}/agent-variables", ...(args as DeepgramSpeechFullApiOperationArgs<"POST /v1/projects/{project_id}/agent-variables">)),
    Delete2: (...args) => callOperation("DELETE /v1/projects/{project_id}/agent-variables/{variable_id}", ...(args as DeepgramSpeechFullApiOperationArgs<"DELETE /v1/projects/{project_id}/agent-variables/{variable_id}">)),
    Get2: (...args) => callOperation("GET /v1/projects/{project_id}/agent-variables/{variable_id}", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/agent-variables/{variable_id}">)),
    List3: (...args) => callOperation("GET /v1/projects/{project_id}/agent-variables", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/agent-variables">)),
    Update2: (...args) => callOperation("PATCH /v1/projects/{project_id}/agent-variables/{variable_id}", ...(args as DeepgramSpeechFullApiOperationArgs<"PATCH /v1/projects/{project_id}/agent-variables/{variable_id}">)),
  };
}
