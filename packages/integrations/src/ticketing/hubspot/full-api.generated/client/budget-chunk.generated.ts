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
export const HubSpotFullApiBudgetOperationKeys = [
  "marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/{campaignGuid}/budget",
  "marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/budget/totals",
  "marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}",
  "marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}",
  "marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}"
] as const;
export type HubSpotFullApiBudgetOperationKey = typeof HubSpotFullApiBudgetOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiBudgetOperationPathParamMap {
  "marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/{campaignGuid}/budget": { "campaignGuid": HubSpotFullApiPathParamValue };
  "marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/budget/totals": { "campaignGuid": HubSpotFullApiPathParamValue };
  "marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}": { "campaignGuid": HubSpotFullApiPathParamValue; "budgetId": HubSpotFullApiPathParamValue };
  "marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}": { "campaignGuid": HubSpotFullApiPathParamValue; "budgetId": HubSpotFullApiPathParamValue };
  "marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}": { "campaignGuid": HubSpotFullApiPathParamValue; "budgetId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiBudgetOperationRequestMap {
  "marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/{campaignGuid}/budget": HubSpotFullApiOperationInput<"marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/{campaignGuid}/budget">;
  "marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/budget/totals": HubSpotFullApiOperationInput<"marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/budget/totals">;
  "marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}": HubSpotFullApiOperationInput<"marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}">;
  "marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}": HubSpotFullApiOperationInput<"marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}">;
  "marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}": HubSpotFullApiOperationInput<"marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}">;
}

export interface HubSpotFullApiBudgetGeneratedClient {
  CampaignsPublicApiPostMarketingCampaigns202603CampaignGuidBudget(...args: HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/{campaignGuid}/budget">): Promise<HubSpotFullApiOperationResponseMap["marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/{campaignGuid}/budget"]>;
  CampaignsPublicApiGetMarketingCampaigns202603CampaignGuidBudgetTotals(...args: HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/budget/totals">): Promise<HubSpotFullApiOperationResponseMap["marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/budget/totals"]>;
  CampaignsPublicApiGetMarketingCampaigns202603CampaignGuidBudgetBudgetId(...args: HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}">): Promise<HubSpotFullApiOperationResponseMap["marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}"]>;
  CampaignsPublicApiPutMarketingCampaigns202603CampaignGuidBudgetBudgetId(...args: HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}">): Promise<HubSpotFullApiOperationResponseMap["marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}"]>;
  CampaignsPublicApiDeleteMarketingCampaigns202603CampaignGuidBudgetBudgetId(...args: HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}">): Promise<HubSpotFullApiOperationResponseMap["marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}"]>;
}

export const HubSpotFullApiBudgetGeneratedFunctionNames = [
  "CampaignsPublicApiPostMarketingCampaigns202603CampaignGuidBudget",
  "CampaignsPublicApiGetMarketingCampaigns202603CampaignGuidBudgetTotals",
  "CampaignsPublicApiGetMarketingCampaigns202603CampaignGuidBudgetBudgetId",
  "CampaignsPublicApiPutMarketingCampaigns202603CampaignGuidBudgetBudgetId",
  "CampaignsPublicApiDeleteMarketingCampaigns202603CampaignGuidBudgetBudgetId"
] as const satisfies readonly (keyof HubSpotFullApiBudgetGeneratedClient)[];

export function createHubSpotFullApiBudgetGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiBudgetGeneratedClient {
  return {
    CampaignsPublicApiPostMarketingCampaigns202603CampaignGuidBudget: (...args) => callOperation("marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/{campaignGuid}/budget", ...(args as HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/{campaignGuid}/budget">)),
    CampaignsPublicApiGetMarketingCampaigns202603CampaignGuidBudgetTotals: (...args) => callOperation("marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/budget/totals", ...(args as HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/budget/totals">)),
    CampaignsPublicApiGetMarketingCampaigns202603CampaignGuidBudgetBudgetId: (...args) => callOperation("marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}", ...(args as HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:get-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}">)),
    CampaignsPublicApiPutMarketingCampaigns202603CampaignGuidBudgetBudgetId: (...args) => callOperation("marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}", ...(args as HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:put-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}">)),
    CampaignsPublicApiDeleteMarketingCampaigns202603CampaignGuidBudgetBudgetId: (...args) => callOperation("marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}", ...(args as HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:delete-/marketing/campaigns/2026-03/{campaignGuid}/budget/{budgetId}">)),
  };
}
