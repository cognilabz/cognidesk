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
export const ElevenLabsFullApiSoundGenerationOperationKeys = [
  "POST /v1/sound-generation"
] as const;
export type ElevenLabsFullApiSoundGenerationOperationKey = typeof ElevenLabsFullApiSoundGenerationOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiSoundGenerationOperationPathParamMap {
  "POST /v1/sound-generation": {};
}

export interface ElevenLabsFullApiSoundGenerationOperationRequestMap {
  "POST /v1/sound-generation": ElevenLabsFullApiOperationInput<"POST /v1/sound-generation">;
}

export interface ElevenLabsFullApiSoundGenerationGeneratedClient {
  SoundGeneration(...args: ElevenLabsFullApiOperationArgs<"POST /v1/sound-generation">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/sound-generation"]>;
}

export const ElevenLabsFullApiSoundGenerationGeneratedFunctionNames = [
  "SoundGeneration"
] as const satisfies readonly (keyof ElevenLabsFullApiSoundGenerationGeneratedClient)[];

export function createElevenLabsFullApiSoundGenerationGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiSoundGenerationGeneratedClient {
  return {
    SoundGeneration: (...args) => callOperation("POST /v1/sound-generation", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/sound-generation">)),
  };
}
