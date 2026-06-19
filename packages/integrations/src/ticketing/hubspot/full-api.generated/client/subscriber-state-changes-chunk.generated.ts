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
export const HubSpotFullApiSubscriberStateChangesOperationKeys = [
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/{subscriberState}/email-upsert_upsertByContactEmail",
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/{subscriberState}/upsert_upsertByContactId"
] as const;
export type HubSpotFullApiSubscriberStateChangesOperationKey = typeof HubSpotFullApiSubscriberStateChangesOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiSubscriberStateChangesOperationPathParamMap {
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/{subscriberState}/email-upsert_upsertByContactEmail": { "externalEventId": HubSpotFullApiPathParamValue; "subscriberState": HubSpotFullApiPathParamValue };
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/{subscriberState}/upsert_upsertByContactId": { "externalEventId": HubSpotFullApiPathParamValue; "subscriberState": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiSubscriberStateChangesOperationRequestMap {
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/{subscriberState}/email-upsert_upsertByContactEmail": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/{subscriberState}/email-upsert_upsertByContactEmail">;
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/{subscriberState}/upsert_upsertByContactId": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/{subscriberState}/upsert_upsertByContactId">;
}

export interface HubSpotFullApiSubscriberStateChangesGeneratedClient {
  MarketingEventsPostMarketingMarketingEvents202603EventsExternalEventIdSubscriberStateEmailUpsertUpsertByContactEmail(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/{subscriberState}/email-upsert_upsertByContactEmail">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/{subscriberState}/email-upsert_upsertByContactEmail"]>;
  MarketingEventsPostMarketingMarketingEvents202603EventsExternalEventIdSubscriberStateUpsertUpsertByContactId(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/{subscriberState}/upsert_upsertByContactId">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/{subscriberState}/upsert_upsertByContactId"]>;
}

export const HubSpotFullApiSubscriberStateChangesGeneratedFunctionNames = [
  "MarketingEventsPostMarketingMarketingEvents202603EventsExternalEventIdSubscriberStateEmailUpsertUpsertByContactEmail",
  "MarketingEventsPostMarketingMarketingEvents202603EventsExternalEventIdSubscriberStateUpsertUpsertByContactId"
] as const satisfies readonly (keyof HubSpotFullApiSubscriberStateChangesGeneratedClient)[];

export function createHubSpotFullApiSubscriberStateChangesGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiSubscriberStateChangesGeneratedClient {
  return {
    MarketingEventsPostMarketingMarketingEvents202603EventsExternalEventIdSubscriberStateEmailUpsertUpsertByContactEmail: (...args) => callOperation("marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/{subscriberState}/email-upsert_upsertByContactEmail", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/{subscriberState}/email-upsert_upsertByContactEmail">)),
    MarketingEventsPostMarketingMarketingEvents202603EventsExternalEventIdSubscriberStateUpsertUpsertByContactId: (...args) => callOperation("marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/{subscriberState}/upsert_upsertByContactId", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/events/{externalEventId}/{subscriberState}/upsert_upsertByContactId">)),
  };
}
