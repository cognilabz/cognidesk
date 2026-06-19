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
export const HubSpotFullApiListAssociationsOperationKeys = [
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists_getAllByExternalAccountAndEventIds",
  "marketing:marketing-events:2026-03:put-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists/{listId}_associateByExternalAccountAndEventIds",
  "marketing:marketing-events:2026-03:delete-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists/{listId}_disassociateByExternalAccountAndEventIds",
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists_getAllByMarketingEventId",
  "marketing:marketing-events:2026-03:put-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists/{listId}_associateByMarketingEventId",
  "marketing:marketing-events:2026-03:delete-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists/{listId}_disassociateByMarketingEventId"
] as const;
export type HubSpotFullApiListAssociationsOperationKey = typeof HubSpotFullApiListAssociationsOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiListAssociationsOperationPathParamMap {
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists_getAllByExternalAccountAndEventIds": { "externalAccountId": HubSpotFullApiPathParamValue; "externalEventId": HubSpotFullApiPathParamValue };
  "marketing:marketing-events:2026-03:put-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists/{listId}_associateByExternalAccountAndEventIds": { "externalAccountId": HubSpotFullApiPathParamValue; "externalEventId": HubSpotFullApiPathParamValue; "listId": HubSpotFullApiPathParamValue };
  "marketing:marketing-events:2026-03:delete-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists/{listId}_disassociateByExternalAccountAndEventIds": { "externalAccountId": HubSpotFullApiPathParamValue; "externalEventId": HubSpotFullApiPathParamValue; "listId": HubSpotFullApiPathParamValue };
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists_getAllByMarketingEventId": { "marketingEventId": HubSpotFullApiPathParamValue };
  "marketing:marketing-events:2026-03:put-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists/{listId}_associateByMarketingEventId": { "marketingEventId": HubSpotFullApiPathParamValue; "listId": HubSpotFullApiPathParamValue };
  "marketing:marketing-events:2026-03:delete-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists/{listId}_disassociateByMarketingEventId": { "marketingEventId": HubSpotFullApiPathParamValue; "listId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiListAssociationsOperationRequestMap {
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists_getAllByExternalAccountAndEventIds": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists_getAllByExternalAccountAndEventIds">;
  "marketing:marketing-events:2026-03:put-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists/{listId}_associateByExternalAccountAndEventIds": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:put-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists/{listId}_associateByExternalAccountAndEventIds">;
  "marketing:marketing-events:2026-03:delete-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists/{listId}_disassociateByExternalAccountAndEventIds": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:delete-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists/{listId}_disassociateByExternalAccountAndEventIds">;
  "marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists_getAllByMarketingEventId": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists_getAllByMarketingEventId">;
  "marketing:marketing-events:2026-03:put-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists/{listId}_associateByMarketingEventId": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:put-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists/{listId}_associateByMarketingEventId">;
  "marketing:marketing-events:2026-03:delete-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists/{listId}_disassociateByMarketingEventId": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:delete-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists/{listId}_disassociateByMarketingEventId">;
}

export interface HubSpotFullApiListAssociationsGeneratedClient {
  MarketingEventsGetMarketingMarketingEvents202603AssociationsExternalAccountIdExternalEventIdListsGetAllByExternalAccountAndEventIds(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists_getAllByExternalAccountAndEventIds">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists_getAllByExternalAccountAndEventIds"]>;
  MarketingEventsPutMarketingMarketingEvents202603AssociationsExternalAccountIdExternalEventIdListsListIdAssociateByExternalAccountAndEventIds(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:put-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists/{listId}_associateByExternalAccountAndEventIds">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:put-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists/{listId}_associateByExternalAccountAndEventIds"]>;
  MarketingEventsDeleteMarketingMarketingEvents202603AssociationsExternalAccountIdExternalEventIdListsListIdDisassociateByExternalAccountAndEventIds(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:delete-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists/{listId}_disassociateByExternalAccountAndEventIds">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:delete-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists/{listId}_disassociateByExternalAccountAndEventIds"]>;
  MarketingEventsGetMarketingMarketingEvents202603AssociationsMarketingEventIdListsGetAllByMarketingEventId(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists_getAllByMarketingEventId">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists_getAllByMarketingEventId"]>;
  MarketingEventsPutMarketingMarketingEvents202603AssociationsMarketingEventIdListsListIdAssociateByMarketingEventId(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:put-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists/{listId}_associateByMarketingEventId">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:put-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists/{listId}_associateByMarketingEventId"]>;
  MarketingEventsDeleteMarketingMarketingEvents202603AssociationsMarketingEventIdListsListIdDisassociateByMarketingEventId(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:delete-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists/{listId}_disassociateByMarketingEventId">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:delete-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists/{listId}_disassociateByMarketingEventId"]>;
}

export const HubSpotFullApiListAssociationsGeneratedFunctionNames = [
  "MarketingEventsGetMarketingMarketingEvents202603AssociationsExternalAccountIdExternalEventIdListsGetAllByExternalAccountAndEventIds",
  "MarketingEventsPutMarketingMarketingEvents202603AssociationsExternalAccountIdExternalEventIdListsListIdAssociateByExternalAccountAndEventIds",
  "MarketingEventsDeleteMarketingMarketingEvents202603AssociationsExternalAccountIdExternalEventIdListsListIdDisassociateByExternalAccountAndEventIds",
  "MarketingEventsGetMarketingMarketingEvents202603AssociationsMarketingEventIdListsGetAllByMarketingEventId",
  "MarketingEventsPutMarketingMarketingEvents202603AssociationsMarketingEventIdListsListIdAssociateByMarketingEventId",
  "MarketingEventsDeleteMarketingMarketingEvents202603AssociationsMarketingEventIdListsListIdDisassociateByMarketingEventId"
] as const satisfies readonly (keyof HubSpotFullApiListAssociationsGeneratedClient)[];

export function createHubSpotFullApiListAssociationsGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiListAssociationsGeneratedClient {
  return {
    MarketingEventsGetMarketingMarketingEvents202603AssociationsExternalAccountIdExternalEventIdListsGetAllByExternalAccountAndEventIds: (...args) => callOperation("marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists_getAllByExternalAccountAndEventIds", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists_getAllByExternalAccountAndEventIds">)),
    MarketingEventsPutMarketingMarketingEvents202603AssociationsExternalAccountIdExternalEventIdListsListIdAssociateByExternalAccountAndEventIds: (...args) => callOperation("marketing:marketing-events:2026-03:put-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists/{listId}_associateByExternalAccountAndEventIds", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:put-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists/{listId}_associateByExternalAccountAndEventIds">)),
    MarketingEventsDeleteMarketingMarketingEvents202603AssociationsExternalAccountIdExternalEventIdListsListIdDisassociateByExternalAccountAndEventIds: (...args) => callOperation("marketing:marketing-events:2026-03:delete-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists/{listId}_disassociateByExternalAccountAndEventIds", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:delete-/marketing/marketing-events/2026-03/associations/{externalAccountId}/{externalEventId}/lists/{listId}_disassociateByExternalAccountAndEventIds">)),
    MarketingEventsGetMarketingMarketingEvents202603AssociationsMarketingEventIdListsGetAllByMarketingEventId: (...args) => callOperation("marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists_getAllByMarketingEventId", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:get-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists_getAllByMarketingEventId">)),
    MarketingEventsPutMarketingMarketingEvents202603AssociationsMarketingEventIdListsListIdAssociateByMarketingEventId: (...args) => callOperation("marketing:marketing-events:2026-03:put-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists/{listId}_associateByMarketingEventId", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:put-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists/{listId}_associateByMarketingEventId">)),
    MarketingEventsDeleteMarketingMarketingEvents202603AssociationsMarketingEventIdListsListIdDisassociateByMarketingEventId: (...args) => callOperation("marketing:marketing-events:2026-03:delete-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists/{listId}_disassociateByMarketingEventId", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:delete-/marketing/marketing-events/2026-03/associations/{marketingEventId}/lists/{listId}_disassociateByMarketingEventId">)),
  };
}
