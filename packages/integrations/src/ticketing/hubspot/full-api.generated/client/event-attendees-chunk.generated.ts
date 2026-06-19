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
export const HubSpotFullApiEventAttendeesOperationKeys = [
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/attendance/{externalEventId}/{subscriberState}/create_recordByContactIds",
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/attendance/{externalEventId}/{subscriberState}/email-create_recordByContactEmails",
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{objectId}/attendance/{subscriberState}/create_recordByContactId",
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{objectId}/attendance/{subscriberState}/email-create_recordByEmail"
] as const;
export type HubSpotFullApiEventAttendeesOperationKey = typeof HubSpotFullApiEventAttendeesOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiEventAttendeesOperationPathParamMap {
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/attendance/{externalEventId}/{subscriberState}/create_recordByContactIds": { "externalEventId": HubSpotFullApiPathParamValue; "subscriberState": HubSpotFullApiPathParamValue };
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/attendance/{externalEventId}/{subscriberState}/email-create_recordByContactEmails": { "externalEventId": HubSpotFullApiPathParamValue; "subscriberState": HubSpotFullApiPathParamValue };
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{objectId}/attendance/{subscriberState}/create_recordByContactId": { "objectId": HubSpotFullApiPathParamValue; "subscriberState": HubSpotFullApiPathParamValue };
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{objectId}/attendance/{subscriberState}/email-create_recordByEmail": { "objectId": HubSpotFullApiPathParamValue; "subscriberState": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiEventAttendeesOperationRequestMap {
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/attendance/{externalEventId}/{subscriberState}/create_recordByContactIds": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/attendance/{externalEventId}/{subscriberState}/create_recordByContactIds">;
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/attendance/{externalEventId}/{subscriberState}/email-create_recordByContactEmails": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/attendance/{externalEventId}/{subscriberState}/email-create_recordByContactEmails">;
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{objectId}/attendance/{subscriberState}/create_recordByContactId": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{objectId}/attendance/{subscriberState}/create_recordByContactId">;
  "marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{objectId}/attendance/{subscriberState}/email-create_recordByEmail": HubSpotFullApiOperationInput<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{objectId}/attendance/{subscriberState}/email-create_recordByEmail">;
}

export interface HubSpotFullApiEventAttendeesGeneratedClient {
  MarketingEventsPostMarketingMarketingEvents202603AttendanceExternalEventIdSubscriberStateCreateRecordByContactIds(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/attendance/{externalEventId}/{subscriberState}/create_recordByContactIds">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/attendance/{externalEventId}/{subscriberState}/create_recordByContactIds"]>;
  MarketingEventsPostMarketingMarketingEvents202603AttendanceExternalEventIdSubscriberStateEmailCreateRecordByContactEmails(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/attendance/{externalEventId}/{subscriberState}/email-create_recordByContactEmails">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/attendance/{externalEventId}/{subscriberState}/email-create_recordByContactEmails"]>;
  MarketingEventsPostMarketingMarketingEvents202603ObjectIdAttendanceSubscriberStateCreateRecordByContactId(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{objectId}/attendance/{subscriberState}/create_recordByContactId">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{objectId}/attendance/{subscriberState}/create_recordByContactId"]>;
  MarketingEventsPostMarketingMarketingEvents202603ObjectIdAttendanceSubscriberStateEmailCreateRecordByEmail(...args: HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{objectId}/attendance/{subscriberState}/email-create_recordByEmail">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{objectId}/attendance/{subscriberState}/email-create_recordByEmail"]>;
}

export const HubSpotFullApiEventAttendeesGeneratedFunctionNames = [
  "MarketingEventsPostMarketingMarketingEvents202603AttendanceExternalEventIdSubscriberStateCreateRecordByContactIds",
  "MarketingEventsPostMarketingMarketingEvents202603AttendanceExternalEventIdSubscriberStateEmailCreateRecordByContactEmails",
  "MarketingEventsPostMarketingMarketingEvents202603ObjectIdAttendanceSubscriberStateCreateRecordByContactId",
  "MarketingEventsPostMarketingMarketingEvents202603ObjectIdAttendanceSubscriberStateEmailCreateRecordByEmail"
] as const satisfies readonly (keyof HubSpotFullApiEventAttendeesGeneratedClient)[];

export function createHubSpotFullApiEventAttendeesGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiEventAttendeesGeneratedClient {
  return {
    MarketingEventsPostMarketingMarketingEvents202603AttendanceExternalEventIdSubscriberStateCreateRecordByContactIds: (...args) => callOperation("marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/attendance/{externalEventId}/{subscriberState}/create_recordByContactIds", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/attendance/{externalEventId}/{subscriberState}/create_recordByContactIds">)),
    MarketingEventsPostMarketingMarketingEvents202603AttendanceExternalEventIdSubscriberStateEmailCreateRecordByContactEmails: (...args) => callOperation("marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/attendance/{externalEventId}/{subscriberState}/email-create_recordByContactEmails", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/attendance/{externalEventId}/{subscriberState}/email-create_recordByContactEmails">)),
    MarketingEventsPostMarketingMarketingEvents202603ObjectIdAttendanceSubscriberStateCreateRecordByContactId: (...args) => callOperation("marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{objectId}/attendance/{subscriberState}/create_recordByContactId", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{objectId}/attendance/{subscriberState}/create_recordByContactId">)),
    MarketingEventsPostMarketingMarketingEvents202603ObjectIdAttendanceSubscriberStateEmailCreateRecordByEmail: (...args) => callOperation("marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{objectId}/attendance/{subscriberState}/email-create_recordByEmail", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-events:2026-03:post-/marketing/marketing-events/2026-03/{objectId}/attendance/{subscriberState}/email-create_recordByEmail">)),
  };
}
