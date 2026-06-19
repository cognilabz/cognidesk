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
export const GorgiasFullApiVoiceCallEventsOperationKeys = [
  "list-voice-call-events",
  "get-voice-call-event"
] as const;
export type GorgiasFullApiVoiceCallEventsOperationKey = typeof GorgiasFullApiVoiceCallEventsOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiVoiceCallEventsOperationPathParamMap {
  "list-voice-call-events": {};
  "get-voice-call-event": { "id": GorgiasFullApiPathParamValue };
}

export interface GorgiasFullApiVoiceCallEventsOperationRequestMap {
  "list-voice-call-events": GorgiasFullApiOperationInput<"list-voice-call-events">;
  "get-voice-call-event": GorgiasFullApiOperationInput<"get-voice-call-event">;
}

export interface GorgiasFullApiVoiceCallEventsGeneratedClient {
  gorgiasListVoiceCallEvents(...args: GorgiasFullApiOperationArgs<"list-voice-call-events">): Promise<GorgiasFullApiOperationResponseMap["list-voice-call-events"]>;
  gorgiasGetVoiceCallEvent(...args: GorgiasFullApiOperationArgs<"get-voice-call-event">): Promise<GorgiasFullApiOperationResponseMap["get-voice-call-event"]>;
}

export const GorgiasFullApiVoiceCallEventsGeneratedFunctionNames = [
  "gorgiasListVoiceCallEvents",
  "gorgiasGetVoiceCallEvent"
] as const satisfies readonly (keyof GorgiasFullApiVoiceCallEventsGeneratedClient)[];

export function createGorgiasFullApiVoiceCallEventsGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiVoiceCallEventsGeneratedClient {
  return {
    gorgiasListVoiceCallEvents: (...args) => callOperation("list-voice-call-events", ...(args as GorgiasFullApiOperationArgs<"list-voice-call-events">)),
    gorgiasGetVoiceCallEvent: (...args) => callOperation("get-voice-call-event", ...(args as GorgiasFullApiOperationArgs<"get-voice-call-event">)),
  };
}
