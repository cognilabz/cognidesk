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
export const DeepgramSpeechFullApiSubpackageSpeakSubpackageSpeakV1SubpackageSpeakV1AudioOperationKeys = [
  "POST /v1/speak"
] as const;
export type DeepgramSpeechFullApiSubpackageSpeakSubpackageSpeakV1SubpackageSpeakV1AudioOperationKey = typeof DeepgramSpeechFullApiSubpackageSpeakSubpackageSpeakV1SubpackageSpeakV1AudioOperationKeys[number];
// End hardened literal operation keys.

export interface DeepgramSpeechFullApiSubpackageSpeakSubpackageSpeakV1SubpackageSpeakV1AudioOperationPathParamMap {
  "POST /v1/speak": {};
}

export interface DeepgramSpeechFullApiSubpackageSpeakSubpackageSpeakV1SubpackageSpeakV1AudioOperationRequestMap {
  "POST /v1/speak": DeepgramSpeechFullApiOperationInput<"POST /v1/speak">;
}

export interface DeepgramSpeechFullApiSubpackageSpeakSubpackageSpeakV1SubpackageSpeakV1AudioGeneratedClient {
  Generate(...args: DeepgramSpeechFullApiOperationArgs<"POST /v1/speak">): Promise<DeepgramSpeechFullApiOperationResponseMap["POST /v1/speak"]>;
}

export const DeepgramSpeechFullApiSubpackageSpeakSubpackageSpeakV1SubpackageSpeakV1AudioGeneratedFunctionNames = [
  "Generate"
] as const satisfies readonly (keyof DeepgramSpeechFullApiSubpackageSpeakSubpackageSpeakV1SubpackageSpeakV1AudioGeneratedClient)[];

export function createDeepgramSpeechFullApiSubpackageSpeakSubpackageSpeakV1SubpackageSpeakV1AudioGeneratedClient(
  callOperation: DeepgramSpeechGeneratedOperationCaller,
): DeepgramSpeechFullApiSubpackageSpeakSubpackageSpeakV1SubpackageSpeakV1AudioGeneratedClient {
  return {
    Generate: (...args) => callOperation("POST /v1/speak", ...(args as DeepgramSpeechFullApiOperationArgs<"POST /v1/speak">)),
  };
}
