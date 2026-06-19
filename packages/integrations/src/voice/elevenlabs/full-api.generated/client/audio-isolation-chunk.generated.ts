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
export const ElevenLabsFullApiAudioIsolationOperationKeys = [
  "POST /v1/audio-isolation",
  "GET /v1/audio-isolation/history",
  "DELETE /v1/audio-isolation/history/{history_item_id}",
  "POST /v1/audio-isolation/stream"
] as const;
export type ElevenLabsFullApiAudioIsolationOperationKey = typeof ElevenLabsFullApiAudioIsolationOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiAudioIsolationOperationPathParamMap {
  "POST /v1/audio-isolation": {};
  "GET /v1/audio-isolation/history": {};
  "DELETE /v1/audio-isolation/history/{history_item_id}": { "history_item_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/audio-isolation/stream": {};
}

export interface ElevenLabsFullApiAudioIsolationOperationRequestMap {
  "POST /v1/audio-isolation": ElevenLabsFullApiOperationInput<"POST /v1/audio-isolation">;
  "GET /v1/audio-isolation/history": ElevenLabsFullApiOperationInput<"GET /v1/audio-isolation/history">;
  "DELETE /v1/audio-isolation/history/{history_item_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/audio-isolation/history/{history_item_id}">;
  "POST /v1/audio-isolation/stream": ElevenLabsFullApiOperationInput<"POST /v1/audio-isolation/stream">;
}

export interface ElevenLabsFullApiAudioIsolationGeneratedClient {
  AudioIsolation(...args: ElevenLabsFullApiOperationArgs<"POST /v1/audio-isolation">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/audio-isolation"]>;
  GetAudioIsolationHistory(...args: ElevenLabsFullApiOperationArgs<"GET /v1/audio-isolation/history">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/audio-isolation/history"]>;
  DeleteAudioIsolationHistoryItem(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/audio-isolation/history/{history_item_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/audio-isolation/history/{history_item_id}"]>;
  AudioIsolationStream(...args: ElevenLabsFullApiOperationArgs<"POST /v1/audio-isolation/stream">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/audio-isolation/stream"]>;
}

export const ElevenLabsFullApiAudioIsolationGeneratedFunctionNames = [
  "AudioIsolation",
  "GetAudioIsolationHistory",
  "DeleteAudioIsolationHistoryItem",
  "AudioIsolationStream"
] as const satisfies readonly (keyof ElevenLabsFullApiAudioIsolationGeneratedClient)[];

export function createElevenLabsFullApiAudioIsolationGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiAudioIsolationGeneratedClient {
  return {
    AudioIsolation: (...args) => callOperation("POST /v1/audio-isolation", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/audio-isolation">)),
    GetAudioIsolationHistory: (...args) => callOperation("GET /v1/audio-isolation/history", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/audio-isolation/history">)),
    DeleteAudioIsolationHistoryItem: (...args) => callOperation("DELETE /v1/audio-isolation/history/{history_item_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/audio-isolation/history/{history_item_id}">)),
    AudioIsolationStream: (...args) => callOperation("POST /v1/audio-isolation/stream", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/audio-isolation/stream">)),
  };
}
