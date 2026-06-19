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
export const ElevenLabsFullApiPvcVoicesOperationKeys = [
  "POST /v1/voices/pvc",
  "POST /v1/voices/pvc/{voice_id}",
  "POST /v1/voices/pvc/{voice_id}/samples",
  "POST /v1/voices/pvc/{voice_id}/samples/{sample_id}",
  "DELETE /v1/voices/pvc/{voice_id}/samples/{sample_id}",
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/audio",
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/waveform",
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers",
  "POST /v1/voices/pvc/{voice_id}/samples/{sample_id}/separate-speakers",
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers/{speaker_id}/audio",
  "GET /v1/voices/pvc/{voice_id}/captcha",
  "POST /v1/voices/pvc/{voice_id}/captcha",
  "POST /v1/voices/pvc/{voice_id}/train",
  "POST /v1/voices/pvc/{voice_id}/verification"
] as const;
export type ElevenLabsFullApiPvcVoicesOperationKey = typeof ElevenLabsFullApiPvcVoicesOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiPvcVoicesOperationPathParamMap {
  "POST /v1/voices/pvc": {};
  "POST /v1/voices/pvc/{voice_id}": { "voice_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/voices/pvc/{voice_id}/samples": { "voice_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/voices/pvc/{voice_id}/samples/{sample_id}": { "voice_id": ElevenLabsFullApiPathParamValue; "sample_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/voices/pvc/{voice_id}/samples/{sample_id}": { "voice_id": ElevenLabsFullApiPathParamValue; "sample_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/audio": { "voice_id": ElevenLabsFullApiPathParamValue; "sample_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/waveform": { "voice_id": ElevenLabsFullApiPathParamValue; "sample_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers": { "voice_id": ElevenLabsFullApiPathParamValue; "sample_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/voices/pvc/{voice_id}/samples/{sample_id}/separate-speakers": { "voice_id": ElevenLabsFullApiPathParamValue; "sample_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers/{speaker_id}/audio": { "voice_id": ElevenLabsFullApiPathParamValue; "sample_id": ElevenLabsFullApiPathParamValue; "speaker_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/voices/pvc/{voice_id}/captcha": { "voice_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/voices/pvc/{voice_id}/captcha": { "voice_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/voices/pvc/{voice_id}/train": { "voice_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/voices/pvc/{voice_id}/verification": { "voice_id": ElevenLabsFullApiPathParamValue };
}

export interface ElevenLabsFullApiPvcVoicesOperationRequestMap {
  "POST /v1/voices/pvc": ElevenLabsFullApiOperationInput<"POST /v1/voices/pvc">;
  "POST /v1/voices/pvc/{voice_id}": ElevenLabsFullApiOperationInput<"POST /v1/voices/pvc/{voice_id}">;
  "POST /v1/voices/pvc/{voice_id}/samples": ElevenLabsFullApiOperationInput<"POST /v1/voices/pvc/{voice_id}/samples">;
  "POST /v1/voices/pvc/{voice_id}/samples/{sample_id}": ElevenLabsFullApiOperationInput<"POST /v1/voices/pvc/{voice_id}/samples/{sample_id}">;
  "DELETE /v1/voices/pvc/{voice_id}/samples/{sample_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/voices/pvc/{voice_id}/samples/{sample_id}">;
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/audio": ElevenLabsFullApiOperationInput<"GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/audio">;
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/waveform": ElevenLabsFullApiOperationInput<"GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/waveform">;
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers": ElevenLabsFullApiOperationInput<"GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers">;
  "POST /v1/voices/pvc/{voice_id}/samples/{sample_id}/separate-speakers": ElevenLabsFullApiOperationInput<"POST /v1/voices/pvc/{voice_id}/samples/{sample_id}/separate-speakers">;
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers/{speaker_id}/audio": ElevenLabsFullApiOperationInput<"GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers/{speaker_id}/audio">;
  "GET /v1/voices/pvc/{voice_id}/captcha": ElevenLabsFullApiOperationInput<"GET /v1/voices/pvc/{voice_id}/captcha">;
  "POST /v1/voices/pvc/{voice_id}/captcha": ElevenLabsFullApiOperationInput<"POST /v1/voices/pvc/{voice_id}/captcha">;
  "POST /v1/voices/pvc/{voice_id}/train": ElevenLabsFullApiOperationInput<"POST /v1/voices/pvc/{voice_id}/train">;
  "POST /v1/voices/pvc/{voice_id}/verification": ElevenLabsFullApiOperationInput<"POST /v1/voices/pvc/{voice_id}/verification">;
}

export interface ElevenLabsFullApiPvcVoicesGeneratedClient {
  CreatePvcVoice(...args: ElevenLabsFullApiOperationArgs<"POST /v1/voices/pvc">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/voices/pvc"]>;
  EditPvcVoice(...args: ElevenLabsFullApiOperationArgs<"POST /v1/voices/pvc/{voice_id}">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/voices/pvc/{voice_id}"]>;
  AddPvcVoiceSamples(...args: ElevenLabsFullApiOperationArgs<"POST /v1/voices/pvc/{voice_id}/samples">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/voices/pvc/{voice_id}/samples"]>;
  EditPvcVoiceSample(...args: ElevenLabsFullApiOperationArgs<"POST /v1/voices/pvc/{voice_id}/samples/{sample_id}">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/voices/pvc/{voice_id}/samples/{sample_id}"]>;
  DeletePvcVoiceSample(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/voices/pvc/{voice_id}/samples/{sample_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/voices/pvc/{voice_id}/samples/{sample_id}"]>;
  GetPvcSampleAudio(...args: ElevenLabsFullApiOperationArgs<"GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/audio">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/audio"]>;
  GetPvcSampleVisualWaveform(...args: ElevenLabsFullApiOperationArgs<"GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/waveform">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/waveform"]>;
  GetPvcSampleSpeakers(...args: ElevenLabsFullApiOperationArgs<"GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers"]>;
  StartSpeakerSeparation(...args: ElevenLabsFullApiOperationArgs<"POST /v1/voices/pvc/{voice_id}/samples/{sample_id}/separate-speakers">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/voices/pvc/{voice_id}/samples/{sample_id}/separate-speakers"]>;
  GetSpeakerAudio(...args: ElevenLabsFullApiOperationArgs<"GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers/{speaker_id}/audio">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers/{speaker_id}/audio"]>;
  GetPvcVoiceCaptcha(...args: ElevenLabsFullApiOperationArgs<"GET /v1/voices/pvc/{voice_id}/captcha">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/voices/pvc/{voice_id}/captcha"]>;
  VerifyPvcVoiceCaptcha(...args: ElevenLabsFullApiOperationArgs<"POST /v1/voices/pvc/{voice_id}/captcha">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/voices/pvc/{voice_id}/captcha"]>;
  RunPvcVoiceTraining(...args: ElevenLabsFullApiOperationArgs<"POST /v1/voices/pvc/{voice_id}/train">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/voices/pvc/{voice_id}/train"]>;
  RequestPvcManualVerification(...args: ElevenLabsFullApiOperationArgs<"POST /v1/voices/pvc/{voice_id}/verification">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/voices/pvc/{voice_id}/verification"]>;
}

export const ElevenLabsFullApiPvcVoicesGeneratedFunctionNames = [
  "CreatePvcVoice",
  "EditPvcVoice",
  "AddPvcVoiceSamples",
  "EditPvcVoiceSample",
  "DeletePvcVoiceSample",
  "GetPvcSampleAudio",
  "GetPvcSampleVisualWaveform",
  "GetPvcSampleSpeakers",
  "StartSpeakerSeparation",
  "GetSpeakerAudio",
  "GetPvcVoiceCaptcha",
  "VerifyPvcVoiceCaptcha",
  "RunPvcVoiceTraining",
  "RequestPvcManualVerification"
] as const satisfies readonly (keyof ElevenLabsFullApiPvcVoicesGeneratedClient)[];

export function createElevenLabsFullApiPvcVoicesGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiPvcVoicesGeneratedClient {
  return {
    CreatePvcVoice: (...args) => callOperation("POST /v1/voices/pvc", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/voices/pvc">)),
    EditPvcVoice: (...args) => callOperation("POST /v1/voices/pvc/{voice_id}", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/voices/pvc/{voice_id}">)),
    AddPvcVoiceSamples: (...args) => callOperation("POST /v1/voices/pvc/{voice_id}/samples", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/voices/pvc/{voice_id}/samples">)),
    EditPvcVoiceSample: (...args) => callOperation("POST /v1/voices/pvc/{voice_id}/samples/{sample_id}", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/voices/pvc/{voice_id}/samples/{sample_id}">)),
    DeletePvcVoiceSample: (...args) => callOperation("DELETE /v1/voices/pvc/{voice_id}/samples/{sample_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/voices/pvc/{voice_id}/samples/{sample_id}">)),
    GetPvcSampleAudio: (...args) => callOperation("GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/audio", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/audio">)),
    GetPvcSampleVisualWaveform: (...args) => callOperation("GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/waveform", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/waveform">)),
    GetPvcSampleSpeakers: (...args) => callOperation("GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers">)),
    StartSpeakerSeparation: (...args) => callOperation("POST /v1/voices/pvc/{voice_id}/samples/{sample_id}/separate-speakers", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/voices/pvc/{voice_id}/samples/{sample_id}/separate-speakers">)),
    GetSpeakerAudio: (...args) => callOperation("GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers/{speaker_id}/audio", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers/{speaker_id}/audio">)),
    GetPvcVoiceCaptcha: (...args) => callOperation("GET /v1/voices/pvc/{voice_id}/captcha", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/voices/pvc/{voice_id}/captcha">)),
    VerifyPvcVoiceCaptcha: (...args) => callOperation("POST /v1/voices/pvc/{voice_id}/captcha", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/voices/pvc/{voice_id}/captcha">)),
    RunPvcVoiceTraining: (...args) => callOperation("POST /v1/voices/pvc/{voice_id}/train", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/voices/pvc/{voice_id}/train">)),
    RequestPvcManualVerification: (...args) => callOperation("POST /v1/voices/pvc/{voice_id}/verification", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/voices/pvc/{voice_id}/verification">)),
  };
}
