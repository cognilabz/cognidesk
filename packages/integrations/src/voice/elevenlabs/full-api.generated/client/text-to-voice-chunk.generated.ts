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
export const ElevenLabsFullApiTextToVoiceOperationKeys = [
  "POST /v1/text-to-voice/create-previews",
  "POST /v1/text-to-voice",
  "POST /v1/text-to-voice/design",
  "POST /v1/text-to-voice/{voice_id}/remix",
  "GET /v1/text-to-voice/{generated_voice_id}/stream"
] as const;
export type ElevenLabsFullApiTextToVoiceOperationKey = typeof ElevenLabsFullApiTextToVoiceOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiTextToVoiceOperationPathParamMap {
  "POST /v1/text-to-voice/create-previews": {};
  "POST /v1/text-to-voice": {};
  "POST /v1/text-to-voice/design": {};
  "POST /v1/text-to-voice/{voice_id}/remix": { "voice_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/text-to-voice/{generated_voice_id}/stream": { "generated_voice_id": ElevenLabsFullApiPathParamValue };
}

export interface ElevenLabsFullApiTextToVoiceOperationRequestMap {
  "POST /v1/text-to-voice/create-previews": ElevenLabsFullApiOperationInput<"POST /v1/text-to-voice/create-previews">;
  "POST /v1/text-to-voice": ElevenLabsFullApiOperationInput<"POST /v1/text-to-voice">;
  "POST /v1/text-to-voice/design": ElevenLabsFullApiOperationInput<"POST /v1/text-to-voice/design">;
  "POST /v1/text-to-voice/{voice_id}/remix": ElevenLabsFullApiOperationInput<"POST /v1/text-to-voice/{voice_id}/remix">;
  "GET /v1/text-to-voice/{generated_voice_id}/stream": ElevenLabsFullApiOperationInput<"GET /v1/text-to-voice/{generated_voice_id}/stream">;
}

export interface ElevenLabsFullApiTextToVoiceGeneratedClient {
  TextToVoice(...args: ElevenLabsFullApiOperationArgs<"POST /v1/text-to-voice/create-previews">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/text-to-voice/create-previews"]>;
  CreateVoice(...args: ElevenLabsFullApiOperationArgs<"POST /v1/text-to-voice">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/text-to-voice"]>;
  TextToVoiceDesign(...args: ElevenLabsFullApiOperationArgs<"POST /v1/text-to-voice/design">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/text-to-voice/design"]>;
  TextToVoiceRemix(...args: ElevenLabsFullApiOperationArgs<"POST /v1/text-to-voice/{voice_id}/remix">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/text-to-voice/{voice_id}/remix"]>;
  TextToVoicePreviewStream(...args: ElevenLabsFullApiOperationArgs<"GET /v1/text-to-voice/{generated_voice_id}/stream">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/text-to-voice/{generated_voice_id}/stream"]>;
}

export const ElevenLabsFullApiTextToVoiceGeneratedFunctionNames = [
  "TextToVoice",
  "CreateVoice",
  "TextToVoiceDesign",
  "TextToVoiceRemix",
  "TextToVoicePreviewStream"
] as const satisfies readonly (keyof ElevenLabsFullApiTextToVoiceGeneratedClient)[];

export function createElevenLabsFullApiTextToVoiceGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiTextToVoiceGeneratedClient {
  return {
    TextToVoice: (...args) => callOperation("POST /v1/text-to-voice/create-previews", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/text-to-voice/create-previews">)),
    CreateVoice: (...args) => callOperation("POST /v1/text-to-voice", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/text-to-voice">)),
    TextToVoiceDesign: (...args) => callOperation("POST /v1/text-to-voice/design", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/text-to-voice/design">)),
    TextToVoiceRemix: (...args) => callOperation("POST /v1/text-to-voice/{voice_id}/remix", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/text-to-voice/{voice_id}/remix">)),
    TextToVoicePreviewStream: (...args) => callOperation("GET /v1/text-to-voice/{generated_voice_id}/stream", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/text-to-voice/{generated_voice_id}/stream">)),
  };
}
