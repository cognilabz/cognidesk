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
export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ModelsOperationKeys = [
  "GET /v1/models/{model_id}",
  "GET /v1/models"
] as const;
export type DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ModelsOperationKey = typeof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ModelsOperationKeys[number];
// End hardened literal operation keys.

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ModelsOperationPathParamMap {
  "GET /v1/models/{model_id}": { "model_id": DeepgramSpeechFullApiPathParamValue };
  "GET /v1/models": {};
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ModelsOperationRequestMap {
  "GET /v1/models/{model_id}": DeepgramSpeechFullApiOperationInput<"GET /v1/models/{model_id}">;
  "GET /v1/models": DeepgramSpeechFullApiOperationInput<"GET /v1/models">;
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ModelsGeneratedClient {
  Get5(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/models/{model_id}">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/models/{model_id}"]>;
  List6(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/models">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/models"]>;
}

export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ModelsGeneratedFunctionNames = [
  "Get5",
  "List6"
] as const satisfies readonly (keyof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ModelsGeneratedClient)[];

export function createDeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ModelsGeneratedClient(
  callOperation: DeepgramSpeechGeneratedOperationCaller,
): DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ModelsGeneratedClient {
  return {
    Get5: (...args) => callOperation("GET /v1/models/{model_id}", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/models/{model_id}">)),
    List6: (...args) => callOperation("GET /v1/models", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/models">)),
  };
}
