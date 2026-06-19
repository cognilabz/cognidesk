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
export const ElevenLabsFullApiVideoToMusicOperationKeys = [
  "POST /v1/music/video-to-music"
] as const;
export type ElevenLabsFullApiVideoToMusicOperationKey = typeof ElevenLabsFullApiVideoToMusicOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiVideoToMusicOperationPathParamMap {
  "POST /v1/music/video-to-music": {};
}

export interface ElevenLabsFullApiVideoToMusicOperationRequestMap {
  "POST /v1/music/video-to-music": ElevenLabsFullApiOperationInput<"POST /v1/music/video-to-music">;
}

export interface ElevenLabsFullApiVideoToMusicGeneratedClient {
  VideoToMusic(...args: ElevenLabsFullApiOperationArgs<"POST /v1/music/video-to-music">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/music/video-to-music"]>;
}

export const ElevenLabsFullApiVideoToMusicGeneratedFunctionNames = [
  "VideoToMusic"
] as const satisfies readonly (keyof ElevenLabsFullApiVideoToMusicGeneratedClient)[];

export function createElevenLabsFullApiVideoToMusicGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiVideoToMusicGeneratedClient {
  return {
    VideoToMusic: (...args) => callOperation("POST /v1/music/video-to-music", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/music/video-to-music">)),
  };
}
