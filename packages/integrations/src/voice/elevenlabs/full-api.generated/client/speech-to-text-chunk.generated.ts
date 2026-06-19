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
export const ElevenLabsFullApiSpeechToTextOperationKeys = [
  "POST /v1/speech-to-text",
  "GET /v1/speech-to-text/transcripts/{transcription_id}",
  "DELETE /v1/speech-to-text/transcripts/{transcription_id}"
] as const;
export type ElevenLabsFullApiSpeechToTextOperationKey = typeof ElevenLabsFullApiSpeechToTextOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiSpeechToTextOperationPathParamMap {
  "POST /v1/speech-to-text": {};
  "GET /v1/speech-to-text/transcripts/{transcription_id}": { "transcription_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/speech-to-text/transcripts/{transcription_id}": { "transcription_id": ElevenLabsFullApiPathParamValue };
}

export interface ElevenLabsFullApiSpeechToTextOperationRequestMap {
  "POST /v1/speech-to-text": ElevenLabsFullApiOperationInput<"POST /v1/speech-to-text">;
  "GET /v1/speech-to-text/transcripts/{transcription_id}": ElevenLabsFullApiOperationInput<"GET /v1/speech-to-text/transcripts/{transcription_id}">;
  "DELETE /v1/speech-to-text/transcripts/{transcription_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/speech-to-text/transcripts/{transcription_id}">;
}

export interface ElevenLabsFullApiSpeechToTextGeneratedClient {
  SpeechToText(...args: ElevenLabsFullApiOperationArgs<"POST /v1/speech-to-text">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/speech-to-text"]>;
  GetTranscriptById(...args: ElevenLabsFullApiOperationArgs<"GET /v1/speech-to-text/transcripts/{transcription_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/speech-to-text/transcripts/{transcription_id}"]>;
  DeleteTranscriptById(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/speech-to-text/transcripts/{transcription_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/speech-to-text/transcripts/{transcription_id}"]>;
}

export const ElevenLabsFullApiSpeechToTextGeneratedFunctionNames = [
  "SpeechToText",
  "GetTranscriptById",
  "DeleteTranscriptById"
] as const satisfies readonly (keyof ElevenLabsFullApiSpeechToTextGeneratedClient)[];

export function createElevenLabsFullApiSpeechToTextGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiSpeechToTextGeneratedClient {
  return {
    SpeechToText: (...args) => callOperation("POST /v1/speech-to-text", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/speech-to-text">)),
    GetTranscriptById: (...args) => callOperation("GET /v1/speech-to-text/transcripts/{transcription_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/speech-to-text/transcripts/{transcription_id}">)),
    DeleteTranscriptById: (...args) => callOperation("DELETE /v1/speech-to-text/transcripts/{transcription_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/speech-to-text/transcripts/{transcription_id}">)),
  };
}
