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
export const ElevenLabsFullApiSpeechEngineOperationKeys = [
  "GET /v1/speech-engine",
  "POST /v1/speech-engine",
  "GET /v1/speech-engine/{speech_engine_id}",
  "PATCH /v1/speech-engine/{speech_engine_id}",
  "DELETE /v1/speech-engine/{speech_engine_id}"
] as const;
export type ElevenLabsFullApiSpeechEngineOperationKey = typeof ElevenLabsFullApiSpeechEngineOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiSpeechEngineOperationPathParamMap {
  "GET /v1/speech-engine": {};
  "POST /v1/speech-engine": {};
  "GET /v1/speech-engine/{speech_engine_id}": { "speech_engine_id": ElevenLabsFullApiPathParamValue };
  "PATCH /v1/speech-engine/{speech_engine_id}": { "speech_engine_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/speech-engine/{speech_engine_id}": { "speech_engine_id": ElevenLabsFullApiPathParamValue };
}

export interface ElevenLabsFullApiSpeechEngineOperationRequestMap {
  "GET /v1/speech-engine": ElevenLabsFullApiOperationInput<"GET /v1/speech-engine">;
  "POST /v1/speech-engine": ElevenLabsFullApiOperationInput<"POST /v1/speech-engine">;
  "GET /v1/speech-engine/{speech_engine_id}": ElevenLabsFullApiOperationInput<"GET /v1/speech-engine/{speech_engine_id}">;
  "PATCH /v1/speech-engine/{speech_engine_id}": ElevenLabsFullApiOperationInput<"PATCH /v1/speech-engine/{speech_engine_id}">;
  "DELETE /v1/speech-engine/{speech_engine_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/speech-engine/{speech_engine_id}">;
}

export interface ElevenLabsFullApiSpeechEngineGeneratedClient {
  ListSpeechEngines(...args: ElevenLabsFullApiOperationArgs<"GET /v1/speech-engine">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/speech-engine"]>;
  CreateSpeechEngine(...args: ElevenLabsFullApiOperationArgs<"POST /v1/speech-engine">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/speech-engine"]>;
  GetSpeechEngine(...args: ElevenLabsFullApiOperationArgs<"GET /v1/speech-engine/{speech_engine_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/speech-engine/{speech_engine_id}"]>;
  UpdateSpeechEngine(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/speech-engine/{speech_engine_id}">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/speech-engine/{speech_engine_id}"]>;
  DeleteSpeechEngine(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/speech-engine/{speech_engine_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/speech-engine/{speech_engine_id}"]>;
}

export const ElevenLabsFullApiSpeechEngineGeneratedFunctionNames = [
  "ListSpeechEngines",
  "CreateSpeechEngine",
  "GetSpeechEngine",
  "UpdateSpeechEngine",
  "DeleteSpeechEngine"
] as const satisfies readonly (keyof ElevenLabsFullApiSpeechEngineGeneratedClient)[];

export function createElevenLabsFullApiSpeechEngineGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiSpeechEngineGeneratedClient {
  return {
    ListSpeechEngines: (...args) => callOperation("GET /v1/speech-engine", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/speech-engine">)),
    CreateSpeechEngine: (...args) => callOperation("POST /v1/speech-engine", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/speech-engine">)),
    GetSpeechEngine: (...args) => callOperation("GET /v1/speech-engine/{speech_engine_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/speech-engine/{speech_engine_id}">)),
    UpdateSpeechEngine: (...args) => callOperation("PATCH /v1/speech-engine/{speech_engine_id}", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/speech-engine/{speech_engine_id}">)),
    DeleteSpeechEngine: (...args) => callOperation("DELETE /v1/speech-engine/{speech_engine_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/speech-engine/{speech_engine_id}">)),
  };
}
