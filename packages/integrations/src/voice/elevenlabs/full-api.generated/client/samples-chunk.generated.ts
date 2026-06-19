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
export const ElevenLabsFullApiSamplesOperationKeys = [
  "DELETE /v1/voices/{voice_id}/samples/{sample_id}",
  "GET /v1/voices/{voice_id}/samples/{sample_id}/audio"
] as const;
export type ElevenLabsFullApiSamplesOperationKey = typeof ElevenLabsFullApiSamplesOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiSamplesOperationPathParamMap {
  "DELETE /v1/voices/{voice_id}/samples/{sample_id}": { "voice_id": ElevenLabsFullApiPathParamValue; "sample_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/voices/{voice_id}/samples/{sample_id}/audio": { "voice_id": ElevenLabsFullApiPathParamValue; "sample_id": ElevenLabsFullApiPathParamValue };
}

export interface ElevenLabsFullApiSamplesOperationRequestMap {
  "DELETE /v1/voices/{voice_id}/samples/{sample_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/voices/{voice_id}/samples/{sample_id}">;
  "GET /v1/voices/{voice_id}/samples/{sample_id}/audio": ElevenLabsFullApiOperationInput<"GET /v1/voices/{voice_id}/samples/{sample_id}/audio">;
}

export interface ElevenLabsFullApiSamplesGeneratedClient {
  DeleteSample(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/voices/{voice_id}/samples/{sample_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/voices/{voice_id}/samples/{sample_id}"]>;
  GetAudioFromSample(...args: ElevenLabsFullApiOperationArgs<"GET /v1/voices/{voice_id}/samples/{sample_id}/audio">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/voices/{voice_id}/samples/{sample_id}/audio"]>;
}

export const ElevenLabsFullApiSamplesGeneratedFunctionNames = [
  "DeleteSample",
  "GetAudioFromSample"
] as const satisfies readonly (keyof ElevenLabsFullApiSamplesGeneratedClient)[];

export function createElevenLabsFullApiSamplesGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiSamplesGeneratedClient {
  return {
    DeleteSample: (...args) => callOperation("DELETE /v1/voices/{voice_id}/samples/{sample_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/voices/{voice_id}/samples/{sample_id}">)),
    GetAudioFromSample: (...args) => callOperation("GET /v1/voices/{voice_id}/samples/{sample_id}/audio", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/voices/{voice_id}/samples/{sample_id}/audio">)),
  };
}
