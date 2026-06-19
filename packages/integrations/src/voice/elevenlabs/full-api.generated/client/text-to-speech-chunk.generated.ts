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
export const ElevenLabsFullApiTextToSpeechOperationKeys = [
  "POST /v1/text-to-speech/{voice_id}",
  "POST /v1/text-to-speech/{voice_id}/with-timestamps",
  "POST /v1/text-to-speech/{voice_id}/stream",
  "POST /v1/text-to-speech/{voice_id}/stream/with-timestamps"
] as const;
export type ElevenLabsFullApiTextToSpeechOperationKey = typeof ElevenLabsFullApiTextToSpeechOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiTextToSpeechOperationPathParamMap {
  "POST /v1/text-to-speech/{voice_id}": { "voice_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/text-to-speech/{voice_id}/with-timestamps": { "voice_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/text-to-speech/{voice_id}/stream": { "voice_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/text-to-speech/{voice_id}/stream/with-timestamps": { "voice_id": ElevenLabsFullApiPathParamValue };
}

export interface ElevenLabsFullApiTextToSpeechOperationRequestMap {
  "POST /v1/text-to-speech/{voice_id}": ElevenLabsFullApiOperationInput<"POST /v1/text-to-speech/{voice_id}">;
  "POST /v1/text-to-speech/{voice_id}/with-timestamps": ElevenLabsFullApiOperationInput<"POST /v1/text-to-speech/{voice_id}/with-timestamps">;
  "POST /v1/text-to-speech/{voice_id}/stream": ElevenLabsFullApiOperationInput<"POST /v1/text-to-speech/{voice_id}/stream">;
  "POST /v1/text-to-speech/{voice_id}/stream/with-timestamps": ElevenLabsFullApiOperationInput<"POST /v1/text-to-speech/{voice_id}/stream/with-timestamps">;
}

export interface ElevenLabsFullApiTextToSpeechGeneratedClient {
  TextToSpeechFull(...args: ElevenLabsFullApiOperationArgs<"POST /v1/text-to-speech/{voice_id}">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/text-to-speech/{voice_id}"]>;
  TextToSpeechFullWithTimestamps(...args: ElevenLabsFullApiOperationArgs<"POST /v1/text-to-speech/{voice_id}/with-timestamps">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/text-to-speech/{voice_id}/with-timestamps"]>;
  TextToSpeechStream(...args: ElevenLabsFullApiOperationArgs<"POST /v1/text-to-speech/{voice_id}/stream">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/text-to-speech/{voice_id}/stream"]>;
  TextToSpeechStreamWithTimestamps(...args: ElevenLabsFullApiOperationArgs<"POST /v1/text-to-speech/{voice_id}/stream/with-timestamps">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/text-to-speech/{voice_id}/stream/with-timestamps"]>;
}

export const ElevenLabsFullApiTextToSpeechGeneratedFunctionNames = [
  "TextToSpeechFull",
  "TextToSpeechFullWithTimestamps",
  "TextToSpeechStream",
  "TextToSpeechStreamWithTimestamps"
] as const satisfies readonly (keyof ElevenLabsFullApiTextToSpeechGeneratedClient)[];

export function createElevenLabsFullApiTextToSpeechGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiTextToSpeechGeneratedClient {
  return {
    TextToSpeechFull: (...args) => callOperation("POST /v1/text-to-speech/{voice_id}", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/text-to-speech/{voice_id}">)),
    TextToSpeechFullWithTimestamps: (...args) => callOperation("POST /v1/text-to-speech/{voice_id}/with-timestamps", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/text-to-speech/{voice_id}/with-timestamps">)),
    TextToSpeechStream: (...args) => callOperation("POST /v1/text-to-speech/{voice_id}/stream", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/text-to-speech/{voice_id}/stream">)),
    TextToSpeechStreamWithTimestamps: (...args) => callOperation("POST /v1/text-to-speech/{voice_id}/stream/with-timestamps", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/text-to-speech/{voice_id}/stream/with-timestamps">)),
  };
}
