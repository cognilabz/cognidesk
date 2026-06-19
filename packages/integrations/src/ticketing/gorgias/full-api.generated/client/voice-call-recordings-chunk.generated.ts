// Generated endpoint chunk for GorgiasFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GorgiasGeneratedOperationCaller,
  GorgiasFullApiOperationArgs,
  GorgiasFullApiOperationInput,
  GorgiasFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GorgiasFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GorgiasFullApiVoiceCallRecordingsOperationKeys = [
  "list-voice-call-recordings",
  "delete-voice-call-recording",
  "get-voice-call-recording"
] as const;
export type GorgiasFullApiVoiceCallRecordingsOperationKey = typeof GorgiasFullApiVoiceCallRecordingsOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiVoiceCallRecordingsOperationPathParamMap {
  "list-voice-call-recordings": {};
  "delete-voice-call-recording": { "id": GorgiasFullApiPathParamValue };
  "get-voice-call-recording": { "id": GorgiasFullApiPathParamValue };
}

export interface GorgiasFullApiVoiceCallRecordingsOperationRequestMap {
  "list-voice-call-recordings": GorgiasFullApiOperationInput<"list-voice-call-recordings">;
  "delete-voice-call-recording": GorgiasFullApiOperationInput<"delete-voice-call-recording">;
  "get-voice-call-recording": GorgiasFullApiOperationInput<"get-voice-call-recording">;
}

export interface GorgiasFullApiVoiceCallRecordingsGeneratedClient {
  gorgiasListVoiceCallRecordings(...args: GorgiasFullApiOperationArgs<"list-voice-call-recordings">): Promise<GorgiasFullApiOperationResponseMap["list-voice-call-recordings"]>;
  gorgiasDeleteVoiceCallRecording(...args: GorgiasFullApiOperationArgs<"delete-voice-call-recording">): Promise<GorgiasFullApiOperationResponseMap["delete-voice-call-recording"]>;
  gorgiasGetVoiceCallRecording(...args: GorgiasFullApiOperationArgs<"get-voice-call-recording">): Promise<GorgiasFullApiOperationResponseMap["get-voice-call-recording"]>;
}

export const GorgiasFullApiVoiceCallRecordingsGeneratedFunctionNames = [
  "gorgiasListVoiceCallRecordings",
  "gorgiasDeleteVoiceCallRecording",
  "gorgiasGetVoiceCallRecording"
] as const satisfies readonly (keyof GorgiasFullApiVoiceCallRecordingsGeneratedClient)[];

export function createGorgiasFullApiVoiceCallRecordingsGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiVoiceCallRecordingsGeneratedClient {
  return {
    gorgiasListVoiceCallRecordings: (...args) => callOperation("list-voice-call-recordings", ...(args as GorgiasFullApiOperationArgs<"list-voice-call-recordings">)),
    gorgiasDeleteVoiceCallRecording: (...args) => callOperation("delete-voice-call-recording", ...(args as GorgiasFullApiOperationArgs<"delete-voice-call-recording">)),
    gorgiasGetVoiceCallRecording: (...args) => callOperation("get-voice-call-recording", ...(args as GorgiasFullApiOperationArgs<"get-voice-call-recording">)),
  };
}
