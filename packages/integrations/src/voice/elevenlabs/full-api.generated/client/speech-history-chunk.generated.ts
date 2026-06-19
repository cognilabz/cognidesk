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
export const ElevenLabsFullApiSpeechHistoryOperationKeys = [
  "GET /v1/history",
  "GET /v1/history/{history_item_id}",
  "DELETE /v1/history/{history_item_id}",
  "GET /v1/history/{history_item_id}/audio",
  "POST /v1/history/download"
] as const;
export type ElevenLabsFullApiSpeechHistoryOperationKey = typeof ElevenLabsFullApiSpeechHistoryOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiSpeechHistoryOperationPathParamMap {
  "GET /v1/history": {};
  "GET /v1/history/{history_item_id}": { "history_item_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/history/{history_item_id}": { "history_item_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/history/{history_item_id}/audio": { "history_item_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/history/download": {};
}

export interface ElevenLabsFullApiSpeechHistoryOperationRequestMap {
  "GET /v1/history": ElevenLabsFullApiOperationInput<"GET /v1/history">;
  "GET /v1/history/{history_item_id}": ElevenLabsFullApiOperationInput<"GET /v1/history/{history_item_id}">;
  "DELETE /v1/history/{history_item_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/history/{history_item_id}">;
  "GET /v1/history/{history_item_id}/audio": ElevenLabsFullApiOperationInput<"GET /v1/history/{history_item_id}/audio">;
  "POST /v1/history/download": ElevenLabsFullApiOperationInput<"POST /v1/history/download">;
}

export interface ElevenLabsFullApiSpeechHistoryGeneratedClient {
  GetSpeechHistory(...args: ElevenLabsFullApiOperationArgs<"GET /v1/history">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/history"]>;
  GetSpeechHistoryItemById(...args: ElevenLabsFullApiOperationArgs<"GET /v1/history/{history_item_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/history/{history_item_id}"]>;
  DeleteSpeechHistoryItem(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/history/{history_item_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/history/{history_item_id}"]>;
  GetAudioFullFromSpeechHistoryItem(...args: ElevenLabsFullApiOperationArgs<"GET /v1/history/{history_item_id}/audio">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/history/{history_item_id}/audio"]>;
  DownloadSpeechHistoryItems(...args: ElevenLabsFullApiOperationArgs<"POST /v1/history/download">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/history/download"]>;
}

export const ElevenLabsFullApiSpeechHistoryGeneratedFunctionNames = [
  "GetSpeechHistory",
  "GetSpeechHistoryItemById",
  "DeleteSpeechHistoryItem",
  "GetAudioFullFromSpeechHistoryItem",
  "DownloadSpeechHistoryItems"
] as const satisfies readonly (keyof ElevenLabsFullApiSpeechHistoryGeneratedClient)[];

export function createElevenLabsFullApiSpeechHistoryGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiSpeechHistoryGeneratedClient {
  return {
    GetSpeechHistory: (...args) => callOperation("GET /v1/history", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/history">)),
    GetSpeechHistoryItemById: (...args) => callOperation("GET /v1/history/{history_item_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/history/{history_item_id}">)),
    DeleteSpeechHistoryItem: (...args) => callOperation("DELETE /v1/history/{history_item_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/history/{history_item_id}">)),
    GetAudioFullFromSpeechHistoryItem: (...args) => callOperation("GET /v1/history/{history_item_id}/audio", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/history/{history_item_id}/audio">)),
    DownloadSpeechHistoryItems: (...args) => callOperation("POST /v1/history/download", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/history/download">)),
  };
}
