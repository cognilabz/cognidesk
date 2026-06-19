// Generated endpoint chunk for EightByEightContactCenterApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  EightByEightGeneratedOperationCaller,
  EightByEightContactCenterApiOperationArgs,
  EightByEightContactCenterApiOperationInput,
  EightByEightContactCenterApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { EightByEightContactCenterApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const EightByEightContactCenterApiExternalCampaignAPIOperationKeys = [
  "campaigns-beta:POST /{campaignId}/records",
  "campaigns-beta:PATCH /{campaignId}"
] as const;
export type EightByEightContactCenterApiExternalCampaignAPIOperationKey = typeof EightByEightContactCenterApiExternalCampaignAPIOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiExternalCampaignAPIOperationPathParamMap {
  "campaigns-beta:POST /{campaignId}/records": { "campaignId": EightByEightContactCenterApiPathParamValue };
  "campaigns-beta:PATCH /{campaignId}": { "campaignId": EightByEightContactCenterApiPathParamValue };
}

export interface EightByEightContactCenterApiExternalCampaignAPIOperationRequestMap {
  "campaigns-beta:POST /{campaignId}/records": EightByEightContactCenterApiOperationInput<"campaigns-beta:POST /{campaignId}/records">;
  "campaigns-beta:PATCH /{campaignId}": EightByEightContactCenterApiOperationInput<"campaigns-beta:PATCH /{campaignId}">;
}

export interface EightByEightContactCenterApiExternalCampaignAPIGeneratedClient {
  AddRecords(...args: EightByEightContactCenterApiOperationArgs<"campaigns-beta:POST /{campaignId}/records">): Promise<EightByEightContactCenterApiOperationResponseMap["campaigns-beta:POST /{campaignId}/records"]>;
  ModifyCampaign(...args: EightByEightContactCenterApiOperationArgs<"campaigns-beta:PATCH /{campaignId}">): Promise<EightByEightContactCenterApiOperationResponseMap["campaigns-beta:PATCH /{campaignId}"]>;
}

export const EightByEightContactCenterApiExternalCampaignAPIGeneratedFunctionNames = [
  "AddRecords",
  "ModifyCampaign"
] as const satisfies readonly (keyof EightByEightContactCenterApiExternalCampaignAPIGeneratedClient)[];

export function createEightByEightContactCenterApiExternalCampaignAPIGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiExternalCampaignAPIGeneratedClient {
  return {
    AddRecords: (...args) => callOperation("campaigns-beta:POST /{campaignId}/records", ...(args as EightByEightContactCenterApiOperationArgs<"campaigns-beta:POST /{campaignId}/records">)),
    ModifyCampaign: (...args) => callOperation("campaigns-beta:PATCH /{campaignId}", ...(args as EightByEightContactCenterApiOperationArgs<"campaigns-beta:PATCH /{campaignId}">)),
  };
}
