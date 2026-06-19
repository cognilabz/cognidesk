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
export const RingCentralVoiceApiLeadsOperationKeys = [
  "POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearch",
  "GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadStates",
  "GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/systemDispositions",
  "PATCH /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}",
  "PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}",
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/direct"
] as const;
export type RingCentralVoiceApiLeadsOperationKey = typeof RingCentralVoiceApiLeadsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiLeadsOperationPathParamMap {
  "POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearch": { "accountId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadStates": { "accountId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/systemDispositions": { "accountId": RingCentralVoiceApiPathParamValue };
  "PATCH /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}": { "accountId": RingCentralVoiceApiPathParamValue; "leadId": RingCentralVoiceApiPathParamValue };
  "PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}": { "accountId": RingCentralVoiceApiPathParamValue; "leadId": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/direct": { "accountId": RingCentralVoiceApiPathParamValue; "campaignId": RingCentralVoiceApiPathParamValue };
}

export interface RingCentralVoiceApiLeadsOperationRequestMap {
  "POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearch": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearch">;
  "GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadStates": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadStates">;
  "GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/systemDispositions": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/systemDispositions">;
  "PATCH /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}": RingCentralVoiceApiOperationInput<"PATCH /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}">;
  "PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}": RingCentralVoiceApiOperationInput<"PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}">;
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/direct": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/direct">;
}

export interface RingCentralVoiceApiLeadsGeneratedClient {
  SearchForCampaignLeads(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearch">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearch"]>;
  GetLeadStates(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadStates">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadStates"]>;
  GetSystemDispositions(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/systemDispositions">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/systemDispositions"]>;
  PatchCampaignLead(...args: RingCentralVoiceApiOperationArgs<"PATCH /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}">): Promise<RingCentralVoiceApiOperationResponseMap["PATCH /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}"]>;
  UpdateCampaignLead(...args: RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}">): Promise<RingCentralVoiceApiOperationResponseMap["PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}"]>;
  LoadDirectLeads(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/direct">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/direct"]>;
}

export const RingCentralVoiceApiLeadsGeneratedFunctionNames = [
  "SearchForCampaignLeads",
  "GetLeadStates",
  "GetSystemDispositions",
  "PatchCampaignLead",
  "UpdateCampaignLead",
  "LoadDirectLeads"
] as const satisfies readonly (keyof RingCentralVoiceApiLeadsGeneratedClient)[];

export function createRingCentralVoiceApiLeadsGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiLeadsGeneratedClient {
  return {
    SearchForCampaignLeads: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearch", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearch">)),
    GetLeadStates: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadStates", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadStates">)),
    GetSystemDispositions: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/systemDispositions", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/systemDispositions">)),
    PatchCampaignLead: (...args) => callOperation("PATCH /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}", ...(args as RingCentralVoiceApiOperationArgs<"PATCH /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}">)),
    UpdateCampaignLead: (...args) => callOperation("PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}", ...(args as RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}">)),
    LoadDirectLeads: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/direct", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/direct">)),
  };
}
