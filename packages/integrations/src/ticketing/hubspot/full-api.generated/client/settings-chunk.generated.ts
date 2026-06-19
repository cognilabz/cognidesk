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
export const HubSpotFullApiSettingsOperationKeys = [
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/{appId}/settings_getAll",
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{appId}/settings_update"
] as const;
export type HubSpotFullApiSettingsOperationKey = typeof HubSpotFullApiSettingsOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiSettingsOperationPathParamMap {
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/{appId}/settings_getAll": { "appId": HubSpotFullApiPathParamValue };
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{appId}/settings_update": { "appId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiSettingsOperationRequestMap {
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/{appId}/settings_getAll": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/{appId}/settings_getAll">;
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{appId}/settings_update": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{appId}/settings_update">;
}

export interface HubSpotFullApiSettingsGeneratedClient {
  MarketingEventsGetMarketingMarketingEvents202603AppIdSettingsGetAll(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/{appId}/settings_getAll">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/{appId}/settings_getAll"]>;
  MarketingEventsPostMarketingMarketingEvents202603AppIdSettingsUpdate(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{appId}/settings_update">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{appId}/settings_update"]>;
}

export const HubSpotFullApiSettingsGeneratedFunctionNames = [
  "MarketingEventsGetMarketingMarketingEvents202603AppIdSettingsGetAll",
  "MarketingEventsPostMarketingMarketingEvents202603AppIdSettingsUpdate"
] as const satisfies readonly (keyof HubSpotFullApiSettingsGeneratedClient)[];

export function createHubSpotFullApiSettingsGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiSettingsGeneratedClient {
  return {
    MarketingEventsGetMarketingMarketingEvents202603AppIdSettingsGetAll: (...args) => callOperation("marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/{appId}/settings_getAll", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/{appId}/settings_getAll">)),
    MarketingEventsPostMarketingMarketingEvents202603AppIdSettingsUpdate: (...args) => callOperation("marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{appId}/settings_update", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{appId}/settings_update">)),
  };
}
