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
export const GorgiasFullApiVoiceCallsOperationKeys = [
  "list-voice-calls",
  "get-voice-call"
] as const;
export type GorgiasFullApiVoiceCallsOperationKey = typeof GorgiasFullApiVoiceCallsOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiVoiceCallsOperationPathParamMap {
  "list-voice-calls": {};
  "get-voice-call": { "id": GorgiasFullApiPathParamValue };
}

export interface GorgiasFullApiVoiceCallsOperationRequestMap {
  "list-voice-calls": GorgiasFullApiOperationInput<"list-voice-calls">;
  "get-voice-call": GorgiasFullApiOperationInput<"get-voice-call">;
}

export interface GorgiasFullApiVoiceCallsGeneratedClient {
  gorgiasListVoiceCalls(...args: GorgiasFullApiOperationArgs<"list-voice-calls">): Promise<GorgiasFullApiOperationResponseMap["list-voice-calls"]>;
  gorgiasGetVoiceCall(...args: GorgiasFullApiOperationArgs<"get-voice-call">): Promise<GorgiasFullApiOperationResponseMap["get-voice-call"]>;
}

export const GorgiasFullApiVoiceCallsGeneratedFunctionNames = [
  "gorgiasListVoiceCalls",
  "gorgiasGetVoiceCall"
] as const satisfies readonly (keyof GorgiasFullApiVoiceCallsGeneratedClient)[];

export function createGorgiasFullApiVoiceCallsGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiVoiceCallsGeneratedClient {
  return {
    gorgiasListVoiceCalls: (...args) => callOperation("list-voice-calls", ...(args as GorgiasFullApiOperationArgs<"list-voice-calls">)),
    gorgiasGetVoiceCall: (...args) => callOperation("get-voice-call", ...(args as GorgiasFullApiOperationArgs<"get-voice-call">)),
  };
}
