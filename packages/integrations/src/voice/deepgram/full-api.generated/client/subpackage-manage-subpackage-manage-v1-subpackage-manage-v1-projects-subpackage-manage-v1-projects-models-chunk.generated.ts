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
export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsModelsOperationKeys = [
  "GET /v1/projects/{project_id}/models/{model_id}",
  "GET /v1/projects/{project_id}/models"
] as const;
export type DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsModelsOperationKey = typeof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsModelsOperationKeys[number];
// End hardened literal operation keys.

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsModelsOperationPathParamMap {
  "GET /v1/projects/{project_id}/models/{model_id}": { "project_id": DeepgramSpeechFullApiPathParamValue; "model_id": DeepgramSpeechFullApiPathParamValue };
  "GET /v1/projects/{project_id}/models": { "project_id": DeepgramSpeechFullApiPathParamValue };
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsModelsOperationRequestMap {
  "GET /v1/projects/{project_id}/models/{model_id}": DeepgramSpeechFullApiOperationInput<"GET /v1/projects/{project_id}/models/{model_id}">;
  "GET /v1/projects/{project_id}/models": DeepgramSpeechFullApiOperationInput<"GET /v1/projects/{project_id}/models">;
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsModelsGeneratedClient {
  Get4(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/models/{model_id}">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/projects/{project_id}/models/{model_id}"]>;
  List5(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/models">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/projects/{project_id}/models"]>;
}

export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsModelsGeneratedFunctionNames = [
  "Get4",
  "List5"
] as const satisfies readonly (keyof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsModelsGeneratedClient)[];

export function createDeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsModelsGeneratedClient(
  callOperation: DeepgramSpeechGeneratedOperationCaller,
): DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsModelsGeneratedClient {
  return {
    Get4: (...args) => callOperation("GET /v1/projects/{project_id}/models/{model_id}", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/models/{model_id}">)),
    List5: (...args) => callOperation("GET /v1/projects/{project_id}/models", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/models">)),
  };
}
