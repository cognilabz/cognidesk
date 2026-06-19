// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiAutomatedNotificationsOperationKeys = [
  "getAccountConfiguration",
  "deleteAccountConfiguration",
  "getEventTypes",
  "createEventType",
  "getEventType",
  "updateEventType",
  "deleteEventType",
  "upsertRule",
  "getRule",
  "deleteRule",
  "getEvents",
  "addEvent",
  "getEvent",
  "deleteEvent",
  "deleteEvents",
  "getTopics",
  "addTopic",
  "getTopic",
  "deleteTopic",
  "getAutomatedNotificationsSubscriptions",
  "upsertSubscription",
  "automatedNotificationsGetSubscription",
  "checkOptInStatus",
  "searchAutomatedNotificationsInteractions",
  "automated_notifications_webhook_for_dce"
] as const;
export type TalkdeskFullApiAutomatedNotificationsOperationKey = typeof TalkdeskFullApiAutomatedNotificationsOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiAutomatedNotificationsOperationPathParamMap {
  "getAccountConfiguration": {};
  "deleteAccountConfiguration": {};
  "getEventTypes": {};
  "createEventType": {};
  "getEventType": { "id": TalkdeskFullApiPathParamValue };
  "updateEventType": { "id": TalkdeskFullApiPathParamValue };
  "deleteEventType": { "id": TalkdeskFullApiPathParamValue };
  "upsertRule": {};
  "getRule": { "rule_id": TalkdeskFullApiPathParamValue };
  "deleteRule": { "rule_id": TalkdeskFullApiPathParamValue };
  "getEvents": {};
  "addEvent": {};
  "getEvent": { "event_id": TalkdeskFullApiPathParamValue };
  "deleteEvent": { "event_id": TalkdeskFullApiPathParamValue };
  "deleteEvents": { "external_id": TalkdeskFullApiPathParamValue };
  "getTopics": {};
  "addTopic": {};
  "getTopic": { "topic_id": TalkdeskFullApiPathParamValue };
  "deleteTopic": { "topic_id": TalkdeskFullApiPathParamValue };
  "getAutomatedNotificationsSubscriptions": {};
  "upsertSubscription": {};
  "automatedNotificationsGetSubscription": { "subscription_id": TalkdeskFullApiPathParamValue };
  "checkOptInStatus": {};
  "searchAutomatedNotificationsInteractions": {};
  "automated_notifications_webhook_for_dce": {};
}

export interface TalkdeskFullApiAutomatedNotificationsOperationRequestMap {
  "getAccountConfiguration": TalkdeskFullApiOperationInput<"getAccountConfiguration">;
  "deleteAccountConfiguration": TalkdeskFullApiOperationInput<"deleteAccountConfiguration">;
  "getEventTypes": TalkdeskFullApiOperationInput<"getEventTypes">;
  "createEventType": TalkdeskFullApiOperationInput<"createEventType">;
  "getEventType": TalkdeskFullApiOperationInput<"getEventType">;
  "updateEventType": TalkdeskFullApiOperationInput<"updateEventType">;
  "deleteEventType": TalkdeskFullApiOperationInput<"deleteEventType">;
  "upsertRule": TalkdeskFullApiOperationInput<"upsertRule">;
  "getRule": TalkdeskFullApiOperationInput<"getRule">;
  "deleteRule": TalkdeskFullApiOperationInput<"deleteRule">;
  "getEvents": TalkdeskFullApiOperationInput<"getEvents">;
  "addEvent": TalkdeskFullApiOperationInput<"addEvent">;
  "getEvent": TalkdeskFullApiOperationInput<"getEvent">;
  "deleteEvent": TalkdeskFullApiOperationInput<"deleteEvent">;
  "deleteEvents": TalkdeskFullApiOperationInput<"deleteEvents">;
  "getTopics": TalkdeskFullApiOperationInput<"getTopics">;
  "addTopic": TalkdeskFullApiOperationInput<"addTopic">;
  "getTopic": TalkdeskFullApiOperationInput<"getTopic">;
  "deleteTopic": TalkdeskFullApiOperationInput<"deleteTopic">;
  "getAutomatedNotificationsSubscriptions": TalkdeskFullApiOperationInput<"getAutomatedNotificationsSubscriptions">;
  "upsertSubscription": TalkdeskFullApiOperationInput<"upsertSubscription">;
  "automatedNotificationsGetSubscription": TalkdeskFullApiOperationInput<"automatedNotificationsGetSubscription">;
  "checkOptInStatus": TalkdeskFullApiOperationInput<"checkOptInStatus">;
  "searchAutomatedNotificationsInteractions": TalkdeskFullApiOperationInput<"searchAutomatedNotificationsInteractions">;
  "automated_notifications_webhook_for_dce": TalkdeskFullApiOperationInput<"automated_notifications_webhook_for_dce">;
}

export interface TalkdeskFullApiAutomatedNotificationsGeneratedClient {
  GetAccountConfiguration(...args: TalkdeskFullApiOperationArgs<"getAccountConfiguration">): Promise<TalkdeskFullApiOperationResponseMap["getAccountConfiguration"]>;
  DeleteAccountConfiguration(...args: TalkdeskFullApiOperationArgs<"deleteAccountConfiguration">): Promise<TalkdeskFullApiOperationResponseMap["deleteAccountConfiguration"]>;
  GetEventTypes(...args: TalkdeskFullApiOperationArgs<"getEventTypes">): Promise<TalkdeskFullApiOperationResponseMap["getEventTypes"]>;
  CreateEventType(...args: TalkdeskFullApiOperationArgs<"createEventType">): Promise<TalkdeskFullApiOperationResponseMap["createEventType"]>;
  GetEventType(...args: TalkdeskFullApiOperationArgs<"getEventType">): Promise<TalkdeskFullApiOperationResponseMap["getEventType"]>;
  UpdateEventType(...args: TalkdeskFullApiOperationArgs<"updateEventType">): Promise<TalkdeskFullApiOperationResponseMap["updateEventType"]>;
  DeleteEventType(...args: TalkdeskFullApiOperationArgs<"deleteEventType">): Promise<TalkdeskFullApiOperationResponseMap["deleteEventType"]>;
  UpsertRule(...args: TalkdeskFullApiOperationArgs<"upsertRule">): Promise<TalkdeskFullApiOperationResponseMap["upsertRule"]>;
  GetRule(...args: TalkdeskFullApiOperationArgs<"getRule">): Promise<TalkdeskFullApiOperationResponseMap["getRule"]>;
  DeleteRule(...args: TalkdeskFullApiOperationArgs<"deleteRule">): Promise<TalkdeskFullApiOperationResponseMap["deleteRule"]>;
  GetEvents(...args: TalkdeskFullApiOperationArgs<"getEvents">): Promise<TalkdeskFullApiOperationResponseMap["getEvents"]>;
  AddEvent(...args: TalkdeskFullApiOperationArgs<"addEvent">): Promise<TalkdeskFullApiOperationResponseMap["addEvent"]>;
  GetEvent(...args: TalkdeskFullApiOperationArgs<"getEvent">): Promise<TalkdeskFullApiOperationResponseMap["getEvent"]>;
  DeleteEvent(...args: TalkdeskFullApiOperationArgs<"deleteEvent">): Promise<TalkdeskFullApiOperationResponseMap["deleteEvent"]>;
  DeleteEvents(...args: TalkdeskFullApiOperationArgs<"deleteEvents">): Promise<TalkdeskFullApiOperationResponseMap["deleteEvents"]>;
  GetTopics(...args: TalkdeskFullApiOperationArgs<"getTopics">): Promise<TalkdeskFullApiOperationResponseMap["getTopics"]>;
  AddTopic(...args: TalkdeskFullApiOperationArgs<"addTopic">): Promise<TalkdeskFullApiOperationResponseMap["addTopic"]>;
  GetTopic(...args: TalkdeskFullApiOperationArgs<"getTopic">): Promise<TalkdeskFullApiOperationResponseMap["getTopic"]>;
  DeleteTopic(...args: TalkdeskFullApiOperationArgs<"deleteTopic">): Promise<TalkdeskFullApiOperationResponseMap["deleteTopic"]>;
  GetAutomatedNotificationsSubscriptions(...args: TalkdeskFullApiOperationArgs<"getAutomatedNotificationsSubscriptions">): Promise<TalkdeskFullApiOperationResponseMap["getAutomatedNotificationsSubscriptions"]>;
  UpsertSubscription(...args: TalkdeskFullApiOperationArgs<"upsertSubscription">): Promise<TalkdeskFullApiOperationResponseMap["upsertSubscription"]>;
  AutomatedNotificationsGetSubscription(...args: TalkdeskFullApiOperationArgs<"automatedNotificationsGetSubscription">): Promise<TalkdeskFullApiOperationResponseMap["automatedNotificationsGetSubscription"]>;
  CheckOptInStatus(...args: TalkdeskFullApiOperationArgs<"checkOptInStatus">): Promise<TalkdeskFullApiOperationResponseMap["checkOptInStatus"]>;
  SearchAutomatedNotificationsInteractions(...args: TalkdeskFullApiOperationArgs<"searchAutomatedNotificationsInteractions">): Promise<TalkdeskFullApiOperationResponseMap["searchAutomatedNotificationsInteractions"]>;
  AutomatedNotificationsWebhookForDce(...args: TalkdeskFullApiOperationArgs<"automated_notifications_webhook_for_dce">): Promise<TalkdeskFullApiOperationResponseMap["automated_notifications_webhook_for_dce"]>;
}

export const TalkdeskFullApiAutomatedNotificationsGeneratedFunctionNames = [
  "GetAccountConfiguration",
  "DeleteAccountConfiguration",
  "GetEventTypes",
  "CreateEventType",
  "GetEventType",
  "UpdateEventType",
  "DeleteEventType",
  "UpsertRule",
  "GetRule",
  "DeleteRule",
  "GetEvents",
  "AddEvent",
  "GetEvent",
  "DeleteEvent",
  "DeleteEvents",
  "GetTopics",
  "AddTopic",
  "GetTopic",
  "DeleteTopic",
  "GetAutomatedNotificationsSubscriptions",
  "UpsertSubscription",
  "AutomatedNotificationsGetSubscription",
  "CheckOptInStatus",
  "SearchAutomatedNotificationsInteractions",
  "AutomatedNotificationsWebhookForDce"
] as const satisfies readonly (keyof TalkdeskFullApiAutomatedNotificationsGeneratedClient)[];

export function createTalkdeskFullApiAutomatedNotificationsGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiAutomatedNotificationsGeneratedClient {
  return {
    GetAccountConfiguration: (...args) => callOperation("getAccountConfiguration", ...(args as TalkdeskFullApiOperationArgs<"getAccountConfiguration">)),
    DeleteAccountConfiguration: (...args) => callOperation("deleteAccountConfiguration", ...(args as TalkdeskFullApiOperationArgs<"deleteAccountConfiguration">)),
    GetEventTypes: (...args) => callOperation("getEventTypes", ...(args as TalkdeskFullApiOperationArgs<"getEventTypes">)),
    CreateEventType: (...args) => callOperation("createEventType", ...(args as TalkdeskFullApiOperationArgs<"createEventType">)),
    GetEventType: (...args) => callOperation("getEventType", ...(args as TalkdeskFullApiOperationArgs<"getEventType">)),
    UpdateEventType: (...args) => callOperation("updateEventType", ...(args as TalkdeskFullApiOperationArgs<"updateEventType">)),
    DeleteEventType: (...args) => callOperation("deleteEventType", ...(args as TalkdeskFullApiOperationArgs<"deleteEventType">)),
    UpsertRule: (...args) => callOperation("upsertRule", ...(args as TalkdeskFullApiOperationArgs<"upsertRule">)),
    GetRule: (...args) => callOperation("getRule", ...(args as TalkdeskFullApiOperationArgs<"getRule">)),
    DeleteRule: (...args) => callOperation("deleteRule", ...(args as TalkdeskFullApiOperationArgs<"deleteRule">)),
    GetEvents: (...args) => callOperation("getEvents", ...(args as TalkdeskFullApiOperationArgs<"getEvents">)),
    AddEvent: (...args) => callOperation("addEvent", ...(args as TalkdeskFullApiOperationArgs<"addEvent">)),
    GetEvent: (...args) => callOperation("getEvent", ...(args as TalkdeskFullApiOperationArgs<"getEvent">)),
    DeleteEvent: (...args) => callOperation("deleteEvent", ...(args as TalkdeskFullApiOperationArgs<"deleteEvent">)),
    DeleteEvents: (...args) => callOperation("deleteEvents", ...(args as TalkdeskFullApiOperationArgs<"deleteEvents">)),
    GetTopics: (...args) => callOperation("getTopics", ...(args as TalkdeskFullApiOperationArgs<"getTopics">)),
    AddTopic: (...args) => callOperation("addTopic", ...(args as TalkdeskFullApiOperationArgs<"addTopic">)),
    GetTopic: (...args) => callOperation("getTopic", ...(args as TalkdeskFullApiOperationArgs<"getTopic">)),
    DeleteTopic: (...args) => callOperation("deleteTopic", ...(args as TalkdeskFullApiOperationArgs<"deleteTopic">)),
    GetAutomatedNotificationsSubscriptions: (...args) => callOperation("getAutomatedNotificationsSubscriptions", ...(args as TalkdeskFullApiOperationArgs<"getAutomatedNotificationsSubscriptions">)),
    UpsertSubscription: (...args) => callOperation("upsertSubscription", ...(args as TalkdeskFullApiOperationArgs<"upsertSubscription">)),
    AutomatedNotificationsGetSubscription: (...args) => callOperation("automatedNotificationsGetSubscription", ...(args as TalkdeskFullApiOperationArgs<"automatedNotificationsGetSubscription">)),
    CheckOptInStatus: (...args) => callOperation("checkOptInStatus", ...(args as TalkdeskFullApiOperationArgs<"checkOptInStatus">)),
    SearchAutomatedNotificationsInteractions: (...args) => callOperation("searchAutomatedNotificationsInteractions", ...(args as TalkdeskFullApiOperationArgs<"searchAutomatedNotificationsInteractions">)),
    AutomatedNotificationsWebhookForDce: (...args) => callOperation("automated_notifications_webhook_for_dce", ...(args as TalkdeskFullApiOperationArgs<"automated_notifications_webhook_for_dce">)),
  };
}
