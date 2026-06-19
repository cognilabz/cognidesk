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
export const HubSpotFullApiParticipantStateOperationKeys = [
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/contacts/{contactIdentifier}/breakdown_getParticipationsBreakdownByContactId",
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{externalAccountId}/{externalEventId}_getParticipationsCountersByEventExternalId",
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{externalAccountId}/{externalEventId}/breakdown_getParticipationsBreakdownByExternalEventId",
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{marketingEventId}_getParticipationsCountersByMarketingEventId",
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{marketingEventId}/breakdown_getParticipationsBreakdownByMarketingEventId"
] as const;
export type HubSpotFullApiParticipantStateOperationKey = typeof HubSpotFullApiParticipantStateOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiParticipantStateOperationPathParamMap {
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/contacts/{contactIdentifier}/breakdown_getParticipationsBreakdownByContactId": { "contactIdentifier": HubSpotFullApiPathParamValue };
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{externalAccountId}/{externalEventId}_getParticipationsCountersByEventExternalId": { "externalAccountId": HubSpotFullApiPathParamValue; "externalEventId": HubSpotFullApiPathParamValue };
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{externalAccountId}/{externalEventId}/breakdown_getParticipationsBreakdownByExternalEventId": { "externalAccountId": HubSpotFullApiPathParamValue; "externalEventId": HubSpotFullApiPathParamValue };
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{marketingEventId}_getParticipationsCountersByMarketingEventId": { "marketingEventId": HubSpotFullApiPathParamValue };
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{marketingEventId}/breakdown_getParticipationsBreakdownByMarketingEventId": { "marketingEventId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiParticipantStateOperationRequestMap {
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/contacts/{contactIdentifier}/breakdown_getParticipationsBreakdownByContactId": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/contacts/{contactIdentifier}/breakdown_getParticipationsBreakdownByContactId">;
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{externalAccountId}/{externalEventId}_getParticipationsCountersByEventExternalId": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{externalAccountId}/{externalEventId}_getParticipationsCountersByEventExternalId">;
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{externalAccountId}/{externalEventId}/breakdown_getParticipationsBreakdownByExternalEventId": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{externalAccountId}/{externalEventId}/breakdown_getParticipationsBreakdownByExternalEventId">;
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{marketingEventId}_getParticipationsCountersByMarketingEventId": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{marketingEventId}_getParticipationsCountersByMarketingEventId">;
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{marketingEventId}/breakdown_getParticipationsBreakdownByMarketingEventId": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{marketingEventId}/breakdown_getParticipationsBreakdownByMarketingEventId">;
}

export interface HubSpotFullApiParticipantStateGeneratedClient {
  MarketingEventsGetMarketingMarketingEvents202603ParticipationsContactsContactIdentifierBreakdownGetParticipationsBreakdownByContactId(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/contacts/{contactIdentifier}/breakdown_getParticipationsBreakdownByContactId">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/contacts/{contactIdentifier}/breakdown_getParticipationsBreakdownByContactId"]>;
  MarketingEventsGetMarketingMarketingEvents202603ParticipationsExternalAccountIdExternalEventIdGetParticipationsCountersByEventExternalId(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{externalAccountId}/{externalEventId}_getParticipationsCountersByEventExternalId">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{externalAccountId}/{externalEventId}_getParticipationsCountersByEventExternalId"]>;
  MarketingEventsGetMarketingMarketingEvents202603ParticipationsExternalAccountIdExternalEventIdBreakdownGetParticipationsBreakdownByExternalEventId(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{externalAccountId}/{externalEventId}/breakdown_getParticipationsBreakdownByExternalEventId">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{externalAccountId}/{externalEventId}/breakdown_getParticipationsBreakdownByExternalEventId"]>;
  MarketingEventsGetMarketingMarketingEvents202603ParticipationsMarketingEventIdGetParticipationsCountersByMarketingEventId(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{marketingEventId}_getParticipationsCountersByMarketingEventId">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{marketingEventId}_getParticipationsCountersByMarketingEventId"]>;
  MarketingEventsGetMarketingMarketingEvents202603ParticipationsMarketingEventIdBreakdownGetParticipationsBreakdownByMarketingEventId(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{marketingEventId}/breakdown_getParticipationsBreakdownByMarketingEventId">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{marketingEventId}/breakdown_getParticipationsBreakdownByMarketingEventId"]>;
}

export const HubSpotFullApiParticipantStateGeneratedFunctionNames = [
  "MarketingEventsGetMarketingMarketingEvents202603ParticipationsContactsContactIdentifierBreakdownGetParticipationsBreakdownByContactId",
  "MarketingEventsGetMarketingMarketingEvents202603ParticipationsExternalAccountIdExternalEventIdGetParticipationsCountersByEventExternalId",
  "MarketingEventsGetMarketingMarketingEvents202603ParticipationsExternalAccountIdExternalEventIdBreakdownGetParticipationsBreakdownByExternalEventId",
  "MarketingEventsGetMarketingMarketingEvents202603ParticipationsMarketingEventIdGetParticipationsCountersByMarketingEventId",
  "MarketingEventsGetMarketingMarketingEvents202603ParticipationsMarketingEventIdBreakdownGetParticipationsBreakdownByMarketingEventId"
] as const satisfies readonly (keyof HubSpotFullApiParticipantStateGeneratedClient)[];

export function createHubSpotFullApiParticipantStateGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiParticipantStateGeneratedClient {
  return {
    MarketingEventsGetMarketingMarketingEvents202603ParticipationsContactsContactIdentifierBreakdownGetParticipationsBreakdownByContactId: (...args) => callOperation("marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/contacts/{contactIdentifier}/breakdown_getParticipationsBreakdownByContactId", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/contacts/{contactIdentifier}/breakdown_getParticipationsBreakdownByContactId">)),
    MarketingEventsGetMarketingMarketingEvents202603ParticipationsExternalAccountIdExternalEventIdGetParticipationsCountersByEventExternalId: (...args) => callOperation("marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{externalAccountId}/{externalEventId}_getParticipationsCountersByEventExternalId", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{externalAccountId}/{externalEventId}_getParticipationsCountersByEventExternalId">)),
    MarketingEventsGetMarketingMarketingEvents202603ParticipationsExternalAccountIdExternalEventIdBreakdownGetParticipationsBreakdownByExternalEventId: (...args) => callOperation("marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{externalAccountId}/{externalEventId}/breakdown_getParticipationsBreakdownByExternalEventId", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{externalAccountId}/{externalEventId}/breakdown_getParticipationsBreakdownByExternalEventId">)),
    MarketingEventsGetMarketingMarketingEvents202603ParticipationsMarketingEventIdGetParticipationsCountersByMarketingEventId: (...args) => callOperation("marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{marketingEventId}_getParticipationsCountersByMarketingEventId", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{marketingEventId}_getParticipationsCountersByMarketingEventId">)),
    MarketingEventsGetMarketingMarketingEvents202603ParticipationsMarketingEventIdBreakdownGetParticipationsBreakdownByMarketingEventId: (...args) => callOperation("marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{marketingEventId}/breakdown_getParticipationsBreakdownByMarketingEventId", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/participations/{marketingEventId}/breakdown_getParticipationsBreakdownByMarketingEventId">)),
  };
}
