// Generated endpoint chunk for HubSpotFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  HubSpotGeneratedOperationCaller,
  HubSpotFullApiOperationArgs,
  HubSpotFullApiOperationInput,
  HubSpotFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { HubSpotFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const HubSpotFullApiSpendOperationKeys = [
  "marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/{campaignGuid}/spend",
  "marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}",
  "marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}",
  "marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}"
] as const;
export type HubSpotFullApiSpendOperationKey = typeof HubSpotFullApiSpendOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiSpendOperationPathParamMap {
  "marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/{campaignGuid}/spend": { "campaignGuid": HubSpotFullApiPathParamValue };
  "marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}": { "campaignGuid": HubSpotFullApiPathParamValue; "spendId": HubSpotFullApiPathParamValue };
  "marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}": { "campaignGuid": HubSpotFullApiPathParamValue; "spendId": HubSpotFullApiPathParamValue };
  "marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}": { "campaignGuid": HubSpotFullApiPathParamValue; "spendId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiSpendOperationRequestMap {
  "marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/{campaignGuid}/spend": HubSpotFullApiOperationInput<"marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/{campaignGuid}/spend">;
  "marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}": HubSpotFullApiOperationInput<"marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}">;
  "marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}": HubSpotFullApiOperationInput<"marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}">;
  "marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}": HubSpotFullApiOperationInput<"marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}">;
}

export interface HubSpotFullApiSpendGeneratedClient {
  CampaignsPublicApiPostMarketingCampaigns202603CampaignGuidSpend(...args: HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/{campaignGuid}/spend">): Promise<HubSpotFullApiOperationResponseMap["marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/{campaignGuid}/spend"]>;
  CampaignsPublicApiGetMarketingCampaigns202603CampaignGuidSpendSpendId(...args: HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}">): Promise<HubSpotFullApiOperationResponseMap["marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}"]>;
  CampaignsPublicApiPutMarketingCampaigns202603CampaignGuidSpendSpendId(...args: HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}">): Promise<HubSpotFullApiOperationResponseMap["marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}"]>;
  CampaignsPublicApiDeleteMarketingCampaigns202603CampaignGuidSpendSpendId(...args: HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}">): Promise<HubSpotFullApiOperationResponseMap["marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}"]>;
}

export const HubSpotFullApiSpendGeneratedFunctionNames = [
  "CampaignsPublicApiPostMarketingCampaigns202603CampaignGuidSpend",
  "CampaignsPublicApiGetMarketingCampaigns202603CampaignGuidSpendSpendId",
  "CampaignsPublicApiPutMarketingCampaigns202603CampaignGuidSpendSpendId",
  "CampaignsPublicApiDeleteMarketingCampaigns202603CampaignGuidSpendSpendId"
] as const satisfies readonly (keyof HubSpotFullApiSpendGeneratedClient)[];

export function createHubSpotFullApiSpendGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiSpendGeneratedClient {
  return {
    CampaignsPublicApiPostMarketingCampaigns202603CampaignGuidSpend: (...args) => callOperation("marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/{campaignGuid}/spend", ...(args as HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/{campaignGuid}/spend">)),
    CampaignsPublicApiGetMarketingCampaigns202603CampaignGuidSpendSpendId: (...args) => callOperation("marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}", ...(args as HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}">)),
    CampaignsPublicApiPutMarketingCampaigns202603CampaignGuidSpendSpendId: (...args) => callOperation("marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}", ...(args as HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}">)),
    CampaignsPublicApiDeleteMarketingCampaigns202603CampaignGuidSpendSpendId: (...args) => callOperation("marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}", ...(args as HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}">)),
  };
}
