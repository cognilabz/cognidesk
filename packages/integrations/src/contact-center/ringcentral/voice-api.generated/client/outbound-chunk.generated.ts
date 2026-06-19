// Generated endpoint chunk for RingCentralVoiceApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralVoiceGeneratedOperationCaller,
  RingCentralVoiceApiOperationArgs,
  RingCentralVoiceApiOperationInput,
  RingCentralVoiceApiPathParamValue,
} from "../../voice-api-client.generated.js";
import type { RingCentralVoiceApiOperationResponseMap } from "../../voice-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralVoiceApiOutboundOperationKeys = [
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/preview",
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/process"
] as const;
export type RingCentralVoiceApiOutboundOperationKey = typeof RingCentralVoiceApiOutboundOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiOutboundOperationPathParamMap {
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/preview": { "accountId": RingCentralVoiceApiPathParamValue; "campaignId": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/process": { "accountId": RingCentralVoiceApiPathParamValue; "campaignId": RingCentralVoiceApiPathParamValue };
}

export interface RingCentralVoiceApiOutboundOperationRequestMap {
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/preview": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/preview">;
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/process": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/process">;
}

export interface RingCentralVoiceApiOutboundGeneratedClient {
  PreviewLeadList(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/preview">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/preview"]>;
  LoadList(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/process">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/process"]>;
}

export const RingCentralVoiceApiOutboundGeneratedFunctionNames = [
  "PreviewLeadList",
  "LoadList"
] as const satisfies readonly (keyof RingCentralVoiceApiOutboundGeneratedClient)[];

export function createRingCentralVoiceApiOutboundGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiOutboundGeneratedClient {
  return {
    PreviewLeadList: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/preview", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/preview">)),
    LoadList: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/process", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/process">)),
  };
}
