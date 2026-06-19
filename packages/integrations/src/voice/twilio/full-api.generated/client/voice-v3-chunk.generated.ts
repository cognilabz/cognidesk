// Generated endpoint chunk for TwilioVoiceFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TwilioVoiceGeneratedOperationCaller,
  TwilioVoiceFullApiOperationArgs,
  TwilioVoiceFullApiOperationInput,
  TwilioVoiceFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TwilioVoiceFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TwilioVoiceFullApiVoiceV3OperationKeys = [
  "voice_v3:CreateV3Transcriptions",
  "voice_v3:FetchTranscription"
] as const;
export type TwilioVoiceFullApiVoiceV3OperationKey = typeof TwilioVoiceFullApiVoiceV3OperationKeys[number];
// End hardened literal operation keys.

export interface TwilioVoiceFullApiVoiceV3OperationPathParamMap {
  "voice_v3:CreateV3Transcriptions": {};
  "voice_v3:FetchTranscription": { "transcriptionId": TwilioVoiceFullApiPathParamValue };
}

export interface TwilioVoiceFullApiVoiceV3OperationRequestMap {
  "voice_v3:CreateV3Transcriptions": TwilioVoiceFullApiOperationInput<"voice_v3:CreateV3Transcriptions">;
  "voice_v3:FetchTranscription": TwilioVoiceFullApiOperationInput<"voice_v3:FetchTranscription">;
}

export interface TwilioVoiceFullApiVoiceV3GeneratedClient {
  VoiceV3CreateV3Transcriptions(...args: TwilioVoiceFullApiOperationArgs<"voice_v3:CreateV3Transcriptions">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v3:CreateV3Transcriptions"]>;
  VoiceV3FetchTranscription(...args: TwilioVoiceFullApiOperationArgs<"voice_v3:FetchTranscription">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v3:FetchTranscription"]>;
}

export const TwilioVoiceFullApiVoiceV3GeneratedFunctionNames = [
  "VoiceV3CreateV3Transcriptions",
  "VoiceV3FetchTranscription"
] as const satisfies readonly (keyof TwilioVoiceFullApiVoiceV3GeneratedClient)[];

export function createTwilioVoiceFullApiVoiceV3GeneratedClient(
  callOperation: TwilioVoiceGeneratedOperationCaller,
): TwilioVoiceFullApiVoiceV3GeneratedClient {
  return {
    VoiceV3CreateV3Transcriptions: (...args) => callOperation("voice_v3:CreateV3Transcriptions", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v3:CreateV3Transcriptions">)),
    VoiceV3FetchTranscription: (...args) => callOperation("voice_v3:FetchTranscription", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v3:FetchTranscription">)),
  };
}
