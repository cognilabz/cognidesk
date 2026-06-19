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
export const DeepgramSpeechFullApiSubpackageReadSubpackageReadV1SubpackageReadV1TextOperationKeys = [
  "POST /v1/read"
] as const;
export type DeepgramSpeechFullApiSubpackageReadSubpackageReadV1SubpackageReadV1TextOperationKey = typeof DeepgramSpeechFullApiSubpackageReadSubpackageReadV1SubpackageReadV1TextOperationKeys[number];
// End hardened literal operation keys.

export interface DeepgramSpeechFullApiSubpackageReadSubpackageReadV1SubpackageReadV1TextOperationPathParamMap {
  "POST /v1/read": {};
}

export interface DeepgramSpeechFullApiSubpackageReadSubpackageReadV1SubpackageReadV1TextOperationRequestMap {
  "POST /v1/read": DeepgramSpeechFullApiOperationInput<"POST /v1/read">;
}

export interface DeepgramSpeechFullApiSubpackageReadSubpackageReadV1SubpackageReadV1TextGeneratedClient {
  Analyze(...args: DeepgramSpeechFullApiOperationArgs<"POST /v1/read">): Promise<DeepgramSpeechFullApiOperationResponseMap["POST /v1/read"]>;
}

export const DeepgramSpeechFullApiSubpackageReadSubpackageReadV1SubpackageReadV1TextGeneratedFunctionNames = [
  "Analyze"
] as const satisfies readonly (keyof DeepgramSpeechFullApiSubpackageReadSubpackageReadV1SubpackageReadV1TextGeneratedClient)[];

export function createDeepgramSpeechFullApiSubpackageReadSubpackageReadV1SubpackageReadV1TextGeneratedClient(
  callOperation: DeepgramSpeechGeneratedOperationCaller,
): DeepgramSpeechFullApiSubpackageReadSubpackageReadV1SubpackageReadV1TextGeneratedClient {
  return {
    Analyze: (...args) => callOperation("POST /v1/read", ...(args as DeepgramSpeechFullApiOperationArgs<"POST /v1/read">)),
  };
}
