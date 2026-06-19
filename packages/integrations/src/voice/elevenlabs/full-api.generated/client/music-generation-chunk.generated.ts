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
export const ElevenLabsFullApiMusicGenerationOperationKeys = [
  "POST /v1/music/plan",
  "POST /v1/music",
  "POST /v1/music/detailed",
  "POST /v1/music/stream",
  "POST /v1/music/upload",
  "POST /v1/music/stem-separation"
] as const;
export type ElevenLabsFullApiMusicGenerationOperationKey = typeof ElevenLabsFullApiMusicGenerationOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiMusicGenerationOperationPathParamMap {
  "POST /v1/music/plan": {};
  "POST /v1/music": {};
  "POST /v1/music/detailed": {};
  "POST /v1/music/stream": {};
  "POST /v1/music/upload": {};
  "POST /v1/music/stem-separation": {};
}

export interface ElevenLabsFullApiMusicGenerationOperationRequestMap {
  "POST /v1/music/plan": ElevenLabsFullApiOperationInput<"POST /v1/music/plan">;
  "POST /v1/music": ElevenLabsFullApiOperationInput<"POST /v1/music">;
  "POST /v1/music/detailed": ElevenLabsFullApiOperationInput<"POST /v1/music/detailed">;
  "POST /v1/music/stream": ElevenLabsFullApiOperationInput<"POST /v1/music/stream">;
  "POST /v1/music/upload": ElevenLabsFullApiOperationInput<"POST /v1/music/upload">;
  "POST /v1/music/stem-separation": ElevenLabsFullApiOperationInput<"POST /v1/music/stem-separation">;
}

export interface ElevenLabsFullApiMusicGenerationGeneratedClient {
  ComposePlan(...args: ElevenLabsFullApiOperationArgs<"POST /v1/music/plan">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/music/plan"]>;
  Generate(...args: ElevenLabsFullApiOperationArgs<"POST /v1/music">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/music"]>;
  ComposeDetailed(...args: ElevenLabsFullApiOperationArgs<"POST /v1/music/detailed">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/music/detailed"]>;
  StreamCompose(...args: ElevenLabsFullApiOperationArgs<"POST /v1/music/stream">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/music/stream"]>;
  UploadSong(...args: ElevenLabsFullApiOperationArgs<"POST /v1/music/upload">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/music/upload"]>;
  SeparateSongStems(...args: ElevenLabsFullApiOperationArgs<"POST /v1/music/stem-separation">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/music/stem-separation"]>;
}

export const ElevenLabsFullApiMusicGenerationGeneratedFunctionNames = [
  "ComposePlan",
  "Generate",
  "ComposeDetailed",
  "StreamCompose",
  "UploadSong",
  "SeparateSongStems"
] as const satisfies readonly (keyof ElevenLabsFullApiMusicGenerationGeneratedClient)[];

export function createElevenLabsFullApiMusicGenerationGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiMusicGenerationGeneratedClient {
  return {
    ComposePlan: (...args) => callOperation("POST /v1/music/plan", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/music/plan">)),
    Generate: (...args) => callOperation("POST /v1/music", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/music">)),
    ComposeDetailed: (...args) => callOperation("POST /v1/music/detailed", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/music/detailed">)),
    StreamCompose: (...args) => callOperation("POST /v1/music/stream", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/music/stream">)),
    UploadSong: (...args) => callOperation("POST /v1/music/upload", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/music/upload">)),
    SeparateSongStems: (...args) => callOperation("POST /v1/music/stem-separation", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/music/stem-separation">)),
  };
}
