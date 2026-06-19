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
export const DeepgramSpeechFullApiSubpackageAuthSubpackageAuthV1SubpackageAuthV1TokensOperationKeys = [
  "POST /v1/auth/grant"
] as const;
export type DeepgramSpeechFullApiSubpackageAuthSubpackageAuthV1SubpackageAuthV1TokensOperationKey = typeof DeepgramSpeechFullApiSubpackageAuthSubpackageAuthV1SubpackageAuthV1TokensOperationKeys[number];
// End hardened literal operation keys.

export interface DeepgramSpeechFullApiSubpackageAuthSubpackageAuthV1SubpackageAuthV1TokensOperationPathParamMap {
  "POST /v1/auth/grant": {};
}

export interface DeepgramSpeechFullApiSubpackageAuthSubpackageAuthV1SubpackageAuthV1TokensOperationRequestMap {
  "POST /v1/auth/grant": DeepgramSpeechFullApiOperationInput<"POST /v1/auth/grant">;
}

export interface DeepgramSpeechFullApiSubpackageAuthSubpackageAuthV1SubpackageAuthV1TokensGeneratedClient {
  Grant(...args: DeepgramSpeechFullApiOperationArgs<"POST /v1/auth/grant">): Promise<DeepgramSpeechFullApiOperationResponseMap["POST /v1/auth/grant"]>;
}

export const DeepgramSpeechFullApiSubpackageAuthSubpackageAuthV1SubpackageAuthV1TokensGeneratedFunctionNames = [
  "Grant"
] as const satisfies readonly (keyof DeepgramSpeechFullApiSubpackageAuthSubpackageAuthV1SubpackageAuthV1TokensGeneratedClient)[];

export function createDeepgramSpeechFullApiSubpackageAuthSubpackageAuthV1SubpackageAuthV1TokensGeneratedClient(
  callOperation: DeepgramSpeechGeneratedOperationCaller,
): DeepgramSpeechFullApiSubpackageAuthSubpackageAuthV1SubpackageAuthV1TokensGeneratedClient {
  return {
    Grant: (...args) => callOperation("POST /v1/auth/grant", ...(args as DeepgramSpeechFullApiOperationArgs<"POST /v1/auth/grant">)),
  };
}
