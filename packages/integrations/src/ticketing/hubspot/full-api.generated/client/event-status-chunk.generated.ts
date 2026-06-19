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
export const HubSpotFullApiEventStatusOperationKeys = [
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/cancel_cancel",
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/complete_complete"
] as const;
export type HubSpotFullApiEventStatusOperationKey = typeof HubSpotFullApiEventStatusOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiEventStatusOperationPathParamMap {
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/cancel_cancel": { "externalEventId": HubSpotFullApiPathParamValue };
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/complete_complete": { "externalEventId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiEventStatusOperationRequestMap {
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/cancel_cancel": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/cancel_cancel">;
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/complete_complete": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/complete_complete">;
}

export interface HubSpotFullApiEventStatusGeneratedClient {
  MarketingEventsPostMarketingMarketingEvents202603EventsExternalEventIdCancelCancel(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/cancel_cancel">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/cancel_cancel"]>;
  MarketingEventsPostMarketingMarketingEvents202603EventsExternalEventIdCompleteComplete(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/complete_complete">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/complete_complete"]>;
}

export const HubSpotFullApiEventStatusGeneratedFunctionNames = [
  "MarketingEventsPostMarketingMarketingEvents202603EventsExternalEventIdCancelCancel",
  "MarketingEventsPostMarketingMarketingEvents202603EventsExternalEventIdCompleteComplete"
] as const satisfies readonly (keyof HubSpotFullApiEventStatusGeneratedClient)[];

export function createHubSpotFullApiEventStatusGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiEventStatusGeneratedClient {
  return {
    MarketingEventsPostMarketingMarketingEvents202603EventsExternalEventIdCancelCancel: (...args) => callOperation("marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/cancel_cancel", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/cancel_cancel">)),
    MarketingEventsPostMarketingMarketingEvents202603EventsExternalEventIdCompleteComplete: (...args) => callOperation("marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/complete_complete", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/complete_complete">)),
  };
}
