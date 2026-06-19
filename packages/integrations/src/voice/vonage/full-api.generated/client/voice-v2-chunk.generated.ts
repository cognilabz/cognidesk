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
export const VonageVoiceFullApiVoiceV2OperationKeys = [
  "voice_v2:createCall"
] as const;
export type VonageVoiceFullApiVoiceV2OperationKey = typeof VonageVoiceFullApiVoiceV2OperationKeys[number];
// End hardened literal operation keys.

export interface VonageVoiceFullApiVoiceV2OperationPathParamMap {
  "voice_v2:createCall": {};
}

export interface VonageVoiceFullApiVoiceV2OperationRequestMap {
  "voice_v2:createCall": VonageVoiceFullApiOperationInput<"voice_v2:createCall">;
}

export interface VonageVoiceFullApiVoiceV2GeneratedClient {
  VoiceV2CreateCall(...args: VonageVoiceFullApiOperationArgs<"voice_v2:createCall">): Promise<VonageVoiceFullApiOperationResponseMap["voice_v2:createCall"]>;
}

export const VonageVoiceFullApiVoiceV2GeneratedFunctionNames = [
  "VoiceV2CreateCall"
] as const satisfies readonly (keyof VonageVoiceFullApiVoiceV2GeneratedClient)[];

export function createVonageVoiceFullApiVoiceV2GeneratedClient(
  callOperation: VonageGeneratedOperationCaller,
): VonageVoiceFullApiVoiceV2GeneratedClient {
  return {
    VoiceV2CreateCall: (...args) => callOperation("voice_v2:createCall", ...(args as VonageVoiceFullApiOperationArgs<"voice_v2:createCall">)),
  };
}
