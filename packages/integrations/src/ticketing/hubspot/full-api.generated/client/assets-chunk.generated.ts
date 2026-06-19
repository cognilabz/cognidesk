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
export const HubSpotFullApiAssetsOperationKeys = [
  "marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}",
  "marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}/{assetId}",
  "marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}/{assetId}"
] as const;
export type HubSpotFullApiAssetsOperationKey = typeof HubSpotFullApiAssetsOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiAssetsOperationPathParamMap {
  "marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}": { "campaignGuid": HubSpotFullApiPathParamValue; "assetType": HubSpotFullApiPathParamValue };
  "marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}/{assetId}": { "campaignGuid": HubSpotFullApiPathParamValue; "assetType": HubSpotFullApiPathParamValue; "assetId": HubSpotFullApiPathParamValue };
  "marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}/{assetId}": { "campaignGuid": HubSpotFullApiPathParamValue; "assetType": HubSpotFullApiPathParamValue; "assetId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiAssetsOperationRequestMap {
  "marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}": HubSpotFullApiOperationInput<"marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}">;
  "marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}/{assetId}": HubSpotFullApiOperationInput<"marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}/{assetId}">;
  "marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}/{assetId}": HubSpotFullApiOperationInput<"marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}/{assetId}">;
}

export interface HubSpotFullApiAssetsGeneratedClient {
  CampaignsPublicApiGetMarketingCampaigns202603CampaignGuidAssetsAssetType(...args: HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}">): Promise<HubSpotFullApiOperationResponseMap["marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}"]>;
  CampaignsPublicApiPutMarketingCampaigns202603CampaignGuidAssetsAssetTypeAssetId(...args: HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}/{assetId}">): Promise<HubSpotFullApiOperationResponseMap["marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}/{assetId}"]>;
  CampaignsPublicApiDeleteMarketingCampaigns202603CampaignGuidAssetsAssetTypeAssetId(...args: HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}/{assetId}">): Promise<HubSpotFullApiOperationResponseMap["marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}/{assetId}"]>;
}

export const HubSpotFullApiAssetsGeneratedFunctionNames = [
  "CampaignsPublicApiGetMarketingCampaigns202603CampaignGuidAssetsAssetType",
  "CampaignsPublicApiPutMarketingCampaigns202603CampaignGuidAssetsAssetTypeAssetId",
  "CampaignsPublicApiDeleteMarketingCampaigns202603CampaignGuidAssetsAssetTypeAssetId"
] as const satisfies readonly (keyof HubSpotFullApiAssetsGeneratedClient)[];

export function createHubSpotFullApiAssetsGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiAssetsGeneratedClient {
  return {
    CampaignsPublicApiGetMarketingCampaigns202603CampaignGuidAssetsAssetType: (...args) => callOperation("marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}", ...(args as HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}">)),
    CampaignsPublicApiPutMarketingCampaigns202603CampaignGuidAssetsAssetTypeAssetId: (...args) => callOperation("marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}/{assetId}", ...(args as HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}/{assetId}">)),
    CampaignsPublicApiDeleteMarketingCampaigns202603CampaignGuidAssetsAssetTypeAssetId: (...args) => callOperation("marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}/{assetId}", ...(args as HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/assets/{assetType}/{assetId}">)),
  };
}
