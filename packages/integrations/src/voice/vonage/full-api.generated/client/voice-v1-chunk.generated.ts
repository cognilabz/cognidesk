// Generated endpoint chunk for VonageVoiceFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  VonageGeneratedOperationCaller,
  VonageVoiceFullApiOperationArgs,
  VonageVoiceFullApiOperationInput,
  VonageVoiceFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { VonageVoiceFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const VonageVoiceFullApiVoiceV1OperationKeys = [
  "voice_v1:getCalls",
  "voice_v1:createCall",
  "voice_v1:getCall",
  "voice_v1:updateCall",
  "voice_v1:startStream",
  "voice_v1:stopStream",
  "voice_v1:startTalk",
  "voice_v1:stopTalk",
  "voice_v1:startDTMF",
  "voice_v1:Subscribe-DTMF",
  "voice_v1:Unsubscribe-DTMF"
] as const;
export type VonageVoiceFullApiVoiceV1OperationKey = typeof VonageVoiceFullApiVoiceV1OperationKeys[number];
// End hardened literal operation keys.

export interface VonageVoiceFullApiVoiceV1OperationPathParamMap {
  "voice_v1:getCalls": {};
  "voice_v1:createCall": {};
  "voice_v1:getCall": { "uuid": VonageVoiceFullApiPathParamValue };
  "voice_v1:updateCall": { "uuid": VonageVoiceFullApiPathParamValue };
  "voice_v1:startStream": { "uuid": VonageVoiceFullApiPathParamValue };
  "voice_v1:stopStream": { "uuid": VonageVoiceFullApiPathParamValue };
  "voice_v1:startTalk": { "uuid": VonageVoiceFullApiPathParamValue };
  "voice_v1:stopTalk": { "uuid": VonageVoiceFullApiPathParamValue };
  "voice_v1:startDTMF": { "uuid": VonageVoiceFullApiPathParamValue };
  "voice_v1:Subscribe-DTMF": { "uuid": VonageVoiceFullApiPathParamValue };
  "voice_v1:Unsubscribe-DTMF": { "uuid": VonageVoiceFullApiPathParamValue };
}

export interface VonageVoiceFullApiVoiceV1OperationRequestMap {
  "voice_v1:getCalls": VonageVoiceFullApiOperationInput<"voice_v1:getCalls">;
  "voice_v1:createCall": VonageVoiceFullApiOperationInput<"voice_v1:createCall">;
  "voice_v1:getCall": VonageVoiceFullApiOperationInput<"voice_v1:getCall">;
  "voice_v1:updateCall": VonageVoiceFullApiOperationInput<"voice_v1:updateCall">;
  "voice_v1:startStream": VonageVoiceFullApiOperationInput<"voice_v1:startStream">;
  "voice_v1:stopStream": VonageVoiceFullApiOperationInput<"voice_v1:stopStream">;
  "voice_v1:startTalk": VonageVoiceFullApiOperationInput<"voice_v1:startTalk">;
  "voice_v1:stopTalk": VonageVoiceFullApiOperationInput<"voice_v1:stopTalk">;
  "voice_v1:startDTMF": VonageVoiceFullApiOperationInput<"voice_v1:startDTMF">;
  "voice_v1:Subscribe-DTMF": VonageVoiceFullApiOperationInput<"voice_v1:Subscribe-DTMF">;
  "voice_v1:Unsubscribe-DTMF": VonageVoiceFullApiOperationInput<"voice_v1:Unsubscribe-DTMF">;
}

export interface VonageVoiceFullApiVoiceV1GeneratedClient {
  VoiceV1GetCalls(...args: VonageVoiceFullApiOperationArgs<"voice_v1:getCalls">): Promise<VonageVoiceFullApiOperationResponseMap["voice_v1:getCalls"]>;
  VoiceV1CreateCall(...args: VonageVoiceFullApiOperationArgs<"voice_v1:createCall">): Promise<VonageVoiceFullApiOperationResponseMap["voice_v1:createCall"]>;
  VoiceV1GetCall(...args: VonageVoiceFullApiOperationArgs<"voice_v1:getCall">): Promise<VonageVoiceFullApiOperationResponseMap["voice_v1:getCall"]>;
  VoiceV1UpdateCall(...args: VonageVoiceFullApiOperationArgs<"voice_v1:updateCall">): Promise<VonageVoiceFullApiOperationResponseMap["voice_v1:updateCall"]>;
  VoiceV1StartStream(...args: VonageVoiceFullApiOperationArgs<"voice_v1:startStream">): Promise<VonageVoiceFullApiOperationResponseMap["voice_v1:startStream"]>;
  VoiceV1StopStream(...args: VonageVoiceFullApiOperationArgs<"voice_v1:stopStream">): Promise<VonageVoiceFullApiOperationResponseMap["voice_v1:stopStream"]>;
  VoiceV1StartTalk(...args: VonageVoiceFullApiOperationArgs<"voice_v1:startTalk">): Promise<VonageVoiceFullApiOperationResponseMap["voice_v1:startTalk"]>;
  VoiceV1StopTalk(...args: VonageVoiceFullApiOperationArgs<"voice_v1:stopTalk">): Promise<VonageVoiceFullApiOperationResponseMap["voice_v1:stopTalk"]>;
  VoiceV1StartDTMF(...args: VonageVoiceFullApiOperationArgs<"voice_v1:startDTMF">): Promise<VonageVoiceFullApiOperationResponseMap["voice_v1:startDTMF"]>;
  VoiceV1SubscribeDTMF(...args: VonageVoiceFullApiOperationArgs<"voice_v1:Subscribe-DTMF">): Promise<VonageVoiceFullApiOperationResponseMap["voice_v1:Subscribe-DTMF"]>;
  VoiceV1UnsubscribeDTMF(...args: VonageVoiceFullApiOperationArgs<"voice_v1:Unsubscribe-DTMF">): Promise<VonageVoiceFullApiOperationResponseMap["voice_v1:Unsubscribe-DTMF"]>;
}

export const VonageVoiceFullApiVoiceV1GeneratedFunctionNames = [
  "VoiceV1GetCalls",
  "VoiceV1CreateCall",
  "VoiceV1GetCall",
  "VoiceV1UpdateCall",
  "VoiceV1StartStream",
  "VoiceV1StopStream",
  "VoiceV1StartTalk",
  "VoiceV1StopTalk",
  "VoiceV1StartDTMF",
  "VoiceV1SubscribeDTMF",
  "VoiceV1UnsubscribeDTMF"
] as const satisfies readonly (keyof VonageVoiceFullApiVoiceV1GeneratedClient)[];

export function createVonageVoiceFullApiVoiceV1GeneratedClient(
  callOperation: VonageGeneratedOperationCaller,
): VonageVoiceFullApiVoiceV1GeneratedClient {
  return {
    VoiceV1GetCalls: (...args) => callOperation("voice_v1:getCalls", ...(args as VonageVoiceFullApiOperationArgs<"voice_v1:getCalls">)),
    VoiceV1CreateCall: (...args) => callOperation("voice_v1:createCall", ...(args as VonageVoiceFullApiOperationArgs<"voice_v1:createCall">)),
    VoiceV1GetCall: (...args) => callOperation("voice_v1:getCall", ...(args as VonageVoiceFullApiOperationArgs<"voice_v1:getCall">)),
    VoiceV1UpdateCall: (...args) => callOperation("voice_v1:updateCall", ...(args as VonageVoiceFullApiOperationArgs<"voice_v1:updateCall">)),
    VoiceV1StartStream: (...args) => callOperation("voice_v1:startStream", ...(args as VonageVoiceFullApiOperationArgs<"voice_v1:startStream">)),
    VoiceV1StopStream: (...args) => callOperation("voice_v1:stopStream", ...(args as VonageVoiceFullApiOperationArgs<"voice_v1:stopStream">)),
    VoiceV1StartTalk: (...args) => callOperation("voice_v1:startTalk", ...(args as VonageVoiceFullApiOperationArgs<"voice_v1:startTalk">)),
    VoiceV1StopTalk: (...args) => callOperation("voice_v1:stopTalk", ...(args as VonageVoiceFullApiOperationArgs<"voice_v1:stopTalk">)),
    VoiceV1StartDTMF: (...args) => callOperation("voice_v1:startDTMF", ...(args as VonageVoiceFullApiOperationArgs<"voice_v1:startDTMF">)),
    VoiceV1SubscribeDTMF: (...args) => callOperation("voice_v1:Subscribe-DTMF", ...(args as VonageVoiceFullApiOperationArgs<"voice_v1:Subscribe-DTMF">)),
    VoiceV1UnsubscribeDTMF: (...args) => callOperation("voice_v1:Unsubscribe-DTMF", ...(args as VonageVoiceFullApiOperationArgs<"voice_v1:Unsubscribe-DTMF">)),
  };
}
