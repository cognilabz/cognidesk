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
export const HubSpotFullApiMetricsOperationKeys = [
  "marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/contacts/{contactType}",
  "marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/metrics",
  "marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/revenue"
] as const;
export type HubSpotFullApiMetricsOperationKey = typeof HubSpotFullApiMetricsOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiMetricsOperationPathParamMap {
  "marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/contacts/{contactType}": { "campaignGuid": HubSpotFullApiPathParamValue; "contactType": HubSpotFullApiPathParamValue };
  "marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/metrics": { "campaignGuid": HubSpotFullApiPathParamValue };
  "marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/revenue": { "campaignGuid": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiMetricsOperationRequestMap {
  "marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/contacts/{contactType}": HubSpotFullApiOperationInput<"marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/contacts/{contactType}">;
  "marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/metrics": HubSpotFullApiOperationInput<"marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/metrics">;
  "marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/revenue": HubSpotFullApiOperationInput<"marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/revenue">;
}

export interface HubSpotFullApiMetricsGeneratedClient {
  CampaignsPublicApiGetMarketingCampaigns202603CampaignGuidReportsContactsContactType(...args: HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/contacts/{contactType}">): Promise<HubSpotFullApiOperationResponseMap["marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/contacts/{contactType}"]>;
  CampaignsPublicApiGetMarketingCampaigns202603CampaignGuidReportsMetrics(...args: HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/metrics">): Promise<HubSpotFullApiOperationResponseMap["marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/metrics"]>;
  CampaignsPublicApiGetMarketingCampaigns202603CampaignGuidReportsRevenue(...args: HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/revenue">): Promise<HubSpotFullApiOperationResponseMap["marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/revenue"]>;
}

export const HubSpotFullApiMetricsGeneratedFunctionNames = [
  "CampaignsPublicApiGetMarketingCampaigns202603CampaignGuidReportsContactsContactType",
  "CampaignsPublicApiGetMarketingCampaigns202603CampaignGuidReportsMetrics",
  "CampaignsPublicApiGetMarketingCampaigns202603CampaignGuidReportsRevenue"
] as const satisfies readonly (keyof HubSpotFullApiMetricsGeneratedClient)[];

export function createHubSpotFullApiMetricsGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiMetricsGeneratedClient {
  return {
    CampaignsPublicApiGetMarketingCampaigns202603CampaignGuidReportsContactsContactType: (...args) => callOperation("marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/contacts/{contactType}", ...(args as HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/contacts/{contactType}">)),
    CampaignsPublicApiGetMarketingCampaigns202603CampaignGuidReportsMetrics: (...args) => callOperation("marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/metrics", ...(args as HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/metrics">)),
    CampaignsPublicApiGetMarketingCampaigns202603CampaignGuidReportsRevenue: (...args) => callOperation("marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/revenue", ...(args as HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/reports/revenue">)),
  };
}
