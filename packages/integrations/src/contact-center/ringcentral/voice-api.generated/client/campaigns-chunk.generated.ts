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
export const RingCentralVoiceApiCampaignsOperationKeys = [
  "PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/actions",
  "POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearchByPhoneList",
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns",
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns",
  "DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}",
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}",
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}",
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}/clearCache"
] as const;
export type RingCentralVoiceApiCampaignsOperationKey = typeof RingCentralVoiceApiCampaignsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiCampaignsOperationPathParamMap {
  "PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/actions": { "accountId": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearchByPhoneList": { "accountId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns": { "accountId": RingCentralVoiceApiPathParamValue; "dialGroupId": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns": { "accountId": RingCentralVoiceApiPathParamValue; "dialGroupId": RingCentralVoiceApiPathParamValue };
  "DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}": { "accountId": RingCentralVoiceApiPathParamValue; "dialGroupId": RingCentralVoiceApiPathParamValue; "campaignId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}": { "accountId": RingCentralVoiceApiPathParamValue; "dialGroupId": RingCentralVoiceApiPathParamValue; "campaignId": RingCentralVoiceApiPathParamValue };
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}": { "accountId": RingCentralVoiceApiPathParamValue; "dialGroupId": RingCentralVoiceApiPathParamValue; "campaignId": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}/clearCache": { "accountId": RingCentralVoiceApiPathParamValue; "dialGroupId": RingCentralVoiceApiPathParamValue; "campaignId": RingCentralVoiceApiPathParamValue };
}

export interface RingCentralVoiceApiCampaignsOperationRequestMap {
  "PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/actions": RingCentralVoiceApiOperationInput<"PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/actions">;
  "POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearchByPhoneList": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearchByPhoneList">;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns">;
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns">;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}": RingCentralVoiceApiOperationInput<"DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}">;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}">;
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}": RingCentralVoiceApiOperationInput<"PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}">;
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}/clearCache": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}/clearCache">;
}

export interface RingCentralVoiceApiCampaignsGeneratedClient {
  PerformLeadAction(...args: RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/actions">): Promise<RingCentralVoiceApiOperationResponseMap["PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/actions"]>;
  UploadSearchCriteriaForCampaignLeads(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearchByPhoneList">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearchByPhoneList"]>;
  GetCampaignList(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns"]>;
  CreateCampaign(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns"]>;
  DeleteCampaign(...args: RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}">): Promise<RingCentralVoiceApiOperationResponseMap["DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}"]>;
  GetCampaign(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}"]>;
  UpdateCampaign(...args: RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}">): Promise<RingCentralVoiceApiOperationResponseMap["PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}"]>;
  ForceDialerRefresh(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}/clearCache">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}/clearCache"]>;
}

export const RingCentralVoiceApiCampaignsGeneratedFunctionNames = [
  "PerformLeadAction",
  "UploadSearchCriteriaForCampaignLeads",
  "GetCampaignList",
  "CreateCampaign",
  "DeleteCampaign",
  "GetCampaign",
  "UpdateCampaign",
  "ForceDialerRefresh"
] as const satisfies readonly (keyof RingCentralVoiceApiCampaignsGeneratedClient)[];

export function createRingCentralVoiceApiCampaignsGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiCampaignsGeneratedClient {
  return {
    PerformLeadAction: (...args) => callOperation("PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/actions", ...(args as RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/actions">)),
    UploadSearchCriteriaForCampaignLeads: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearchByPhoneList", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearchByPhoneList">)),
    GetCampaignList: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns">)),
    CreateCampaign: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns">)),
    DeleteCampaign: (...args) => callOperation("DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}", ...(args as RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}">)),
    GetCampaign: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}">)),
    UpdateCampaign: (...args) => callOperation("PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}", ...(args as RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}">)),
    ForceDialerRefresh: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}/clearCache", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}/clearCache">)),
  };
}
