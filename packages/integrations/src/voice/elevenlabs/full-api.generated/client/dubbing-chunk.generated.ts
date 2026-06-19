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
export const ElevenLabsFullApiDubbingOperationKeys = [
  "GET /v1/dubbing/resource/{dubbing_id}",
  "POST /v1/dubbing/resource/{dubbing_id}/language",
  "POST /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/segment",
  "PATCH /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}/{language}",
  "POST /v1/dubbing/resource/{dubbing_id}/migrate-segments",
  "DELETE /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}",
  "POST /v1/dubbing/resource/{dubbing_id}/transcribe",
  "POST /v1/dubbing/resource/{dubbing_id}/translate",
  "POST /v1/dubbing/resource/{dubbing_id}/dub",
  "PATCH /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}",
  "POST /v1/dubbing/resource/{dubbing_id}/speaker",
  "GET /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/similar-voices",
  "POST /v1/dubbing/resource/{dubbing_id}/render/{language}",
  "GET /v1/dubbing",
  "POST /v1/dubbing",
  "GET /v1/dubbing/{dubbing_id}",
  "DELETE /v1/dubbing/{dubbing_id}",
  "GET /v1/dubbing/{dubbing_id}/audio/{language_code}",
  "GET /v1/dubbing/{dubbing_id}/transcript/{language_code}",
  "GET /v1/dubbing/{dubbing_id}/transcripts/{language_code}/format/{format_type}"
] as const;
export type ElevenLabsFullApiDubbingOperationKey = typeof ElevenLabsFullApiDubbingOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiDubbingOperationPathParamMap {
  "GET /v1/dubbing/resource/{dubbing_id}": { "dubbing_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/dubbing/resource/{dubbing_id}/language": { "dubbing_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/segment": { "dubbing_id": ElevenLabsFullApiPathParamValue; "speaker_id": ElevenLabsFullApiPathParamValue };
  "PATCH /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}/{language}": { "dubbing_id": ElevenLabsFullApiPathParamValue; "segment_id": ElevenLabsFullApiPathParamValue; "language": ElevenLabsFullApiPathParamValue };
  "POST /v1/dubbing/resource/{dubbing_id}/migrate-segments": { "dubbing_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}": { "dubbing_id": ElevenLabsFullApiPathParamValue; "segment_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/dubbing/resource/{dubbing_id}/transcribe": { "dubbing_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/dubbing/resource/{dubbing_id}/translate": { "dubbing_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/dubbing/resource/{dubbing_id}/dub": { "dubbing_id": ElevenLabsFullApiPathParamValue };
  "PATCH /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}": { "dubbing_id": ElevenLabsFullApiPathParamValue; "speaker_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/dubbing/resource/{dubbing_id}/speaker": { "dubbing_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/similar-voices": { "dubbing_id": ElevenLabsFullApiPathParamValue; "speaker_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/dubbing/resource/{dubbing_id}/render/{language}": { "dubbing_id": ElevenLabsFullApiPathParamValue; "language": ElevenLabsFullApiPathParamValue };
  "GET /v1/dubbing": {};
  "POST /v1/dubbing": {};
  "GET /v1/dubbing/{dubbing_id}": { "dubbing_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/dubbing/{dubbing_id}": { "dubbing_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/dubbing/{dubbing_id}/audio/{language_code}": { "dubbing_id": ElevenLabsFullApiPathParamValue; "language_code": ElevenLabsFullApiPathParamValue };
  "GET /v1/dubbing/{dubbing_id}/transcript/{language_code}": { "dubbing_id": ElevenLabsFullApiPathParamValue; "language_code": ElevenLabsFullApiPathParamValue };
  "GET /v1/dubbing/{dubbing_id}/transcripts/{language_code}/format/{format_type}": { "dubbing_id": ElevenLabsFullApiPathParamValue; "language_code": ElevenLabsFullApiPathParamValue; "format_type": ElevenLabsFullApiPathParamValue };
}

export interface ElevenLabsFullApiDubbingOperationRequestMap {
  "GET /v1/dubbing/resource/{dubbing_id}": ElevenLabsFullApiOperationInput<"GET /v1/dubbing/resource/{dubbing_id}">;
  "POST /v1/dubbing/resource/{dubbing_id}/language": ElevenLabsFullApiOperationInput<"POST /v1/dubbing/resource/{dubbing_id}/language">;
  "POST /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/segment": ElevenLabsFullApiOperationInput<"POST /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/segment">;
  "PATCH /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}/{language}": ElevenLabsFullApiOperationInput<"PATCH /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}/{language}">;
  "POST /v1/dubbing/resource/{dubbing_id}/migrate-segments": ElevenLabsFullApiOperationInput<"POST /v1/dubbing/resource/{dubbing_id}/migrate-segments">;
  "DELETE /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}">;
  "POST /v1/dubbing/resource/{dubbing_id}/transcribe": ElevenLabsFullApiOperationInput<"POST /v1/dubbing/resource/{dubbing_id}/transcribe">;
  "POST /v1/dubbing/resource/{dubbing_id}/translate": ElevenLabsFullApiOperationInput<"POST /v1/dubbing/resource/{dubbing_id}/translate">;
  "POST /v1/dubbing/resource/{dubbing_id}/dub": ElevenLabsFullApiOperationInput<"POST /v1/dubbing/resource/{dubbing_id}/dub">;
  "PATCH /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}": ElevenLabsFullApiOperationInput<"PATCH /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}">;
  "POST /v1/dubbing/resource/{dubbing_id}/speaker": ElevenLabsFullApiOperationInput<"POST /v1/dubbing/resource/{dubbing_id}/speaker">;
  "GET /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/similar-voices": ElevenLabsFullApiOperationInput<"GET /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/similar-voices">;
  "POST /v1/dubbing/resource/{dubbing_id}/render/{language}": ElevenLabsFullApiOperationInput<"POST /v1/dubbing/resource/{dubbing_id}/render/{language}">;
  "GET /v1/dubbing": ElevenLabsFullApiOperationInput<"GET /v1/dubbing">;
  "POST /v1/dubbing": ElevenLabsFullApiOperationInput<"POST /v1/dubbing">;
  "GET /v1/dubbing/{dubbing_id}": ElevenLabsFullApiOperationInput<"GET /v1/dubbing/{dubbing_id}">;
  "DELETE /v1/dubbing/{dubbing_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/dubbing/{dubbing_id}">;
  "GET /v1/dubbing/{dubbing_id}/audio/{language_code}": ElevenLabsFullApiOperationInput<"GET /v1/dubbing/{dubbing_id}/audio/{language_code}">;
  "GET /v1/dubbing/{dubbing_id}/transcript/{language_code}": ElevenLabsFullApiOperationInput<"GET /v1/dubbing/{dubbing_id}/transcript/{language_code}">;
  "GET /v1/dubbing/{dubbing_id}/transcripts/{language_code}/format/{format_type}": ElevenLabsFullApiOperationInput<"GET /v1/dubbing/{dubbing_id}/transcripts/{language_code}/format/{format_type}">;
}

export interface ElevenLabsFullApiDubbingGeneratedClient {
  GetDubbingResource(...args: ElevenLabsFullApiOperationArgs<"GET /v1/dubbing/resource/{dubbing_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/dubbing/resource/{dubbing_id}"]>;
  AddLanguage(...args: ElevenLabsFullApiOperationArgs<"POST /v1/dubbing/resource/{dubbing_id}/language">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/dubbing/resource/{dubbing_id}/language"]>;
  CreateClip(...args: ElevenLabsFullApiOperationArgs<"POST /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/segment">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/segment"]>;
  UpdateSegmentLanguage(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}/{language}">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}/{language}"]>;
  MigrateSegments(...args: ElevenLabsFullApiOperationArgs<"POST /v1/dubbing/resource/{dubbing_id}/migrate-segments">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/dubbing/resource/{dubbing_id}/migrate-segments"]>;
  DeleteSegment(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}"]>;
  Transcribe(...args: ElevenLabsFullApiOperationArgs<"POST /v1/dubbing/resource/{dubbing_id}/transcribe">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/dubbing/resource/{dubbing_id}/transcribe"]>;
  Translate(...args: ElevenLabsFullApiOperationArgs<"POST /v1/dubbing/resource/{dubbing_id}/translate">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/dubbing/resource/{dubbing_id}/translate"]>;
  Dub(...args: ElevenLabsFullApiOperationArgs<"POST /v1/dubbing/resource/{dubbing_id}/dub">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/dubbing/resource/{dubbing_id}/dub"]>;
  UpdateSpeaker(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}"]>;
  CreateSpeaker(...args: ElevenLabsFullApiOperationArgs<"POST /v1/dubbing/resource/{dubbing_id}/speaker">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/dubbing/resource/{dubbing_id}/speaker"]>;
  GetSimilarVoicesForSpeaker(...args: ElevenLabsFullApiOperationArgs<"GET /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/similar-voices">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/similar-voices"]>;
  Render(...args: ElevenLabsFullApiOperationArgs<"POST /v1/dubbing/resource/{dubbing_id}/render/{language}">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/dubbing/resource/{dubbing_id}/render/{language}"]>;
  ListDubs(...args: ElevenLabsFullApiOperationArgs<"GET /v1/dubbing">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/dubbing"]>;
  CreateDubbing(...args: ElevenLabsFullApiOperationArgs<"POST /v1/dubbing">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/dubbing"]>;
  GetDubbedMetadata(...args: ElevenLabsFullApiOperationArgs<"GET /v1/dubbing/{dubbing_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/dubbing/{dubbing_id}"]>;
  DeleteDubbing(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/dubbing/{dubbing_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/dubbing/{dubbing_id}"]>;
  GetDubbedFile(...args: ElevenLabsFullApiOperationArgs<"GET /v1/dubbing/{dubbing_id}/audio/{language_code}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/dubbing/{dubbing_id}/audio/{language_code}"]>;
  GetDubbedTranscriptFile(...args: ElevenLabsFullApiOperationArgs<"GET /v1/dubbing/{dubbing_id}/transcript/{language_code}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/dubbing/{dubbing_id}/transcript/{language_code}"]>;
  GetDubbingTranscripts(...args: ElevenLabsFullApiOperationArgs<"GET /v1/dubbing/{dubbing_id}/transcripts/{language_code}/format/{format_type}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/dubbing/{dubbing_id}/transcripts/{language_code}/format/{format_type}"]>;
}

export const ElevenLabsFullApiDubbingGeneratedFunctionNames = [
  "GetDubbingResource",
  "AddLanguage",
  "CreateClip",
  "UpdateSegmentLanguage",
  "MigrateSegments",
  "DeleteSegment",
  "Transcribe",
  "Translate",
  "Dub",
  "UpdateSpeaker",
  "CreateSpeaker",
  "GetSimilarVoicesForSpeaker",
  "Render",
  "ListDubs",
  "CreateDubbing",
  "GetDubbedMetadata",
  "DeleteDubbing",
  "GetDubbedFile",
  "GetDubbedTranscriptFile",
  "GetDubbingTranscripts"
] as const satisfies readonly (keyof ElevenLabsFullApiDubbingGeneratedClient)[];

export function createElevenLabsFullApiDubbingGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiDubbingGeneratedClient {
  return {
    GetDubbingResource: (...args) => callOperation("GET /v1/dubbing/resource/{dubbing_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/dubbing/resource/{dubbing_id}">)),
    AddLanguage: (...args) => callOperation("POST /v1/dubbing/resource/{dubbing_id}/language", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/dubbing/resource/{dubbing_id}/language">)),
    CreateClip: (...args) => callOperation("POST /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/segment", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/segment">)),
    UpdateSegmentLanguage: (...args) => callOperation("PATCH /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}/{language}", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}/{language}">)),
    MigrateSegments: (...args) => callOperation("POST /v1/dubbing/resource/{dubbing_id}/migrate-segments", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/dubbing/resource/{dubbing_id}/migrate-segments">)),
    DeleteSegment: (...args) => callOperation("DELETE /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}">)),
    Transcribe: (...args) => callOperation("POST /v1/dubbing/resource/{dubbing_id}/transcribe", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/dubbing/resource/{dubbing_id}/transcribe">)),
    Translate: (...args) => callOperation("POST /v1/dubbing/resource/{dubbing_id}/translate", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/dubbing/resource/{dubbing_id}/translate">)),
    Dub: (...args) => callOperation("POST /v1/dubbing/resource/{dubbing_id}/dub", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/dubbing/resource/{dubbing_id}/dub">)),
    UpdateSpeaker: (...args) => callOperation("PATCH /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}">)),
    CreateSpeaker: (...args) => callOperation("POST /v1/dubbing/resource/{dubbing_id}/speaker", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/dubbing/resource/{dubbing_id}/speaker">)),
    GetSimilarVoicesForSpeaker: (...args) => callOperation("GET /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/similar-voices", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/similar-voices">)),
    Render: (...args) => callOperation("POST /v1/dubbing/resource/{dubbing_id}/render/{language}", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/dubbing/resource/{dubbing_id}/render/{language}">)),
    ListDubs: (...args) => callOperation("GET /v1/dubbing", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/dubbing">)),
    CreateDubbing: (...args) => callOperation("POST /v1/dubbing", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/dubbing">)),
    GetDubbedMetadata: (...args) => callOperation("GET /v1/dubbing/{dubbing_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/dubbing/{dubbing_id}">)),
    DeleteDubbing: (...args) => callOperation("DELETE /v1/dubbing/{dubbing_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/dubbing/{dubbing_id}">)),
    GetDubbedFile: (...args) => callOperation("GET /v1/dubbing/{dubbing_id}/audio/{language_code}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/dubbing/{dubbing_id}/audio/{language_code}">)),
    GetDubbedTranscriptFile: (...args) => callOperation("GET /v1/dubbing/{dubbing_id}/transcript/{language_code}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/dubbing/{dubbing_id}/transcript/{language_code}">)),
    GetDubbingTranscripts: (...args) => callOperation("GET /v1/dubbing/{dubbing_id}/transcripts/{language_code}/format/{format_type}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/dubbing/{dubbing_id}/transcripts/{language_code}/format/{format_type}">)),
  };
}
