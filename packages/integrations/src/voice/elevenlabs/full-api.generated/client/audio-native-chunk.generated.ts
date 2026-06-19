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
export const ElevenLabsFullApiAudioNativeOperationKeys = [
  "POST /v1/audio-native",
  "GET /v1/audio-native/{project_id}/settings",
  "POST /v1/audio-native/{project_id}/content",
  "POST /v1/audio-native/content"
] as const;
export type ElevenLabsFullApiAudioNativeOperationKey = typeof ElevenLabsFullApiAudioNativeOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiAudioNativeOperationPathParamMap {
  "POST /v1/audio-native": {};
  "GET /v1/audio-native/{project_id}/settings": { "project_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/audio-native/{project_id}/content": { "project_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/audio-native/content": {};
}

export interface ElevenLabsFullApiAudioNativeOperationRequestMap {
  "POST /v1/audio-native": ElevenLabsFullApiOperationInput<"POST /v1/audio-native">;
  "GET /v1/audio-native/{project_id}/settings": ElevenLabsFullApiOperationInput<"GET /v1/audio-native/{project_id}/settings">;
  "POST /v1/audio-native/{project_id}/content": ElevenLabsFullApiOperationInput<"POST /v1/audio-native/{project_id}/content">;
  "POST /v1/audio-native/content": ElevenLabsFullApiOperationInput<"POST /v1/audio-native/content">;
}

export interface ElevenLabsFullApiAudioNativeGeneratedClient {
  CreateAudioNativeProject(...args: ElevenLabsFullApiOperationArgs<"POST /v1/audio-native">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/audio-native"]>;
  GetAudioNativeProjectSettingsEndpoint(...args: ElevenLabsFullApiOperationArgs<"GET /v1/audio-native/{project_id}/settings">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/audio-native/{project_id}/settings"]>;
  AudioNativeProjectUpdateContentEndpoint(...args: ElevenLabsFullApiOperationArgs<"POST /v1/audio-native/{project_id}/content">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/audio-native/{project_id}/content"]>;
  AudioNativeUpdateContentFromUrl(...args: ElevenLabsFullApiOperationArgs<"POST /v1/audio-native/content">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/audio-native/content"]>;
}

export const ElevenLabsFullApiAudioNativeGeneratedFunctionNames = [
  "CreateAudioNativeProject",
  "GetAudioNativeProjectSettingsEndpoint",
  "AudioNativeProjectUpdateContentEndpoint",
  "AudioNativeUpdateContentFromUrl"
] as const satisfies readonly (keyof ElevenLabsFullApiAudioNativeGeneratedClient)[];

export function createElevenLabsFullApiAudioNativeGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiAudioNativeGeneratedClient {
  return {
    CreateAudioNativeProject: (...args) => callOperation("POST /v1/audio-native", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/audio-native">)),
    GetAudioNativeProjectSettingsEndpoint: (...args) => callOperation("GET /v1/audio-native/{project_id}/settings", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/audio-native/{project_id}/settings">)),
    AudioNativeProjectUpdateContentEndpoint: (...args) => callOperation("POST /v1/audio-native/{project_id}/content", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/audio-native/{project_id}/content">)),
    AudioNativeUpdateContentFromUrl: (...args) => callOperation("POST /v1/audio-native/content", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/audio-native/content">)),
  };
}
