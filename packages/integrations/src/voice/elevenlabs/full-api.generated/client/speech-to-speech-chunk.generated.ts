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
export const ElevenLabsFullApiSpeechToSpeechOperationKeys = [
  "POST /v1/speech-to-speech/{voice_id}",
  "POST /v1/speech-to-speech/{voice_id}/stream"
] as const;
export type ElevenLabsFullApiSpeechToSpeechOperationKey = typeof ElevenLabsFullApiSpeechToSpeechOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiSpeechToSpeechOperationPathParamMap {
  "POST /v1/speech-to-speech/{voice_id}": { "voice_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/speech-to-speech/{voice_id}/stream": { "voice_id": ElevenLabsFullApiPathParamValue };
}

export interface ElevenLabsFullApiSpeechToSpeechOperationRequestMap {
  "POST /v1/speech-to-speech/{voice_id}": ElevenLabsFullApiOperationInput<"POST /v1/speech-to-speech/{voice_id}">;
  "POST /v1/speech-to-speech/{voice_id}/stream": ElevenLabsFullApiOperationInput<"POST /v1/speech-to-speech/{voice_id}/stream">;
}

export interface ElevenLabsFullApiSpeechToSpeechGeneratedClient {
  SpeechToSpeechFull(...args: ElevenLabsFullApiOperationArgs<"POST /v1/speech-to-speech/{voice_id}">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/speech-to-speech/{voice_id}"]>;
  SpeechToSpeechStream(...args: ElevenLabsFullApiOperationArgs<"POST /v1/speech-to-speech/{voice_id}/stream">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/speech-to-speech/{voice_id}/stream"]>;
}

export const ElevenLabsFullApiSpeechToSpeechGeneratedFunctionNames = [
  "SpeechToSpeechFull",
  "SpeechToSpeechStream"
] as const satisfies readonly (keyof ElevenLabsFullApiSpeechToSpeechGeneratedClient)[];

export function createElevenLabsFullApiSpeechToSpeechGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiSpeechToSpeechGeneratedClient {
  return {
    SpeechToSpeechFull: (...args) => callOperation("POST /v1/speech-to-speech/{voice_id}", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/speech-to-speech/{voice_id}">)),
    SpeechToSpeechStream: (...args) => callOperation("POST /v1/speech-to-speech/{voice_id}/stream", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/speech-to-speech/{voice_id}/stream">)),
  };
}
