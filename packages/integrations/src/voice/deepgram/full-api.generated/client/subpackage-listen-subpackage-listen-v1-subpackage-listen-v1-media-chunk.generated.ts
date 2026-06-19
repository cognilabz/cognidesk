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
export const DeepgramSpeechFullApiSubpackageListenSubpackageListenV1SubpackageListenV1MediaOperationKeys = [
  "POST /v1/listen"
] as const;
export type DeepgramSpeechFullApiSubpackageListenSubpackageListenV1SubpackageListenV1MediaOperationKey = typeof DeepgramSpeechFullApiSubpackageListenSubpackageListenV1SubpackageListenV1MediaOperationKeys[number];
// End hardened literal operation keys.

export interface DeepgramSpeechFullApiSubpackageListenSubpackageListenV1SubpackageListenV1MediaOperationPathParamMap {
  "POST /v1/listen": {};
}

export interface DeepgramSpeechFullApiSubpackageListenSubpackageListenV1SubpackageListenV1MediaOperationRequestMap {
  "POST /v1/listen": DeepgramSpeechFullApiOperationInput<"POST /v1/listen">;
}

export interface DeepgramSpeechFullApiSubpackageListenSubpackageListenV1SubpackageListenV1MediaGeneratedClient {
  Transcribe(...args: DeepgramSpeechFullApiOperationArgs<"POST /v1/listen">): Promise<DeepgramSpeechFullApiOperationResponseMap["POST /v1/listen"]>;
}

export const DeepgramSpeechFullApiSubpackageListenSubpackageListenV1SubpackageListenV1MediaGeneratedFunctionNames = [
  "Transcribe"
] as const satisfies readonly (keyof DeepgramSpeechFullApiSubpackageListenSubpackageListenV1SubpackageListenV1MediaGeneratedClient)[];

export function createDeepgramSpeechFullApiSubpackageListenSubpackageListenV1SubpackageListenV1MediaGeneratedClient(
  callOperation: DeepgramSpeechGeneratedOperationCaller,
): DeepgramSpeechFullApiSubpackageListenSubpackageListenV1SubpackageListenV1MediaGeneratedClient {
  return {
    Transcribe: (...args) => callOperation("POST /v1/listen", ...(args as DeepgramSpeechFullApiOperationArgs<"POST /v1/listen">)),
  };
}
