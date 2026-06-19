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
export const HubSpotFullApiIdentifiersOperationKeys = [
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/events/search_doSearch",
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/{externalEventId}/identifiers_searchPortalEvents"
] as const;
export type HubSpotFullApiIdentifiersOperationKey = typeof HubSpotFullApiIdentifiersOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiIdentifiersOperationPathParamMap {
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/events/search_doSearch": {};
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/{externalEventId}/identifiers_searchPortalEvents": { "externalEventId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiIdentifiersOperationRequestMap {
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/events/search_doSearch": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/events/search_doSearch">;
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/{externalEventId}/identifiers_searchPortalEvents": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/{externalEventId}/identifiers_searchPortalEvents">;
}

export interface HubSpotFullApiIdentifiersGeneratedClient {
  MarketingEventsGetMarketingMarketingEvents202603EventsSearchDoSearch(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/events/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/events/search_doSearch"]>;
  MarketingEventsGetMarketingMarketingEvents202603ExternalEventIdIdentifiersSearchPortalEvents(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/{externalEventId}/identifiers_searchPortalEvents">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/{externalEventId}/identifiers_searchPortalEvents"]>;
}

export const HubSpotFullApiIdentifiersGeneratedFunctionNames = [
  "MarketingEventsGetMarketingMarketingEvents202603EventsSearchDoSearch",
  "MarketingEventsGetMarketingMarketingEvents202603ExternalEventIdIdentifiersSearchPortalEvents"
] as const satisfies readonly (keyof HubSpotFullApiIdentifiersGeneratedClient)[];

export function createHubSpotFullApiIdentifiersGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiIdentifiersGeneratedClient {
  return {
    MarketingEventsGetMarketingMarketingEvents202603EventsSearchDoSearch: (...args) => callOperation("marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/events/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/events/search_doSearch">)),
    MarketingEventsGetMarketingMarketingEvents202603ExternalEventIdIdentifiersSearchPortalEvents: (...args) => callOperation("marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/{externalEventId}/identifiers_searchPortalEvents", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/{externalEventId}/identifiers_searchPortalEvents">)),
  };
}
