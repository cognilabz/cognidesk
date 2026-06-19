// Generated endpoint chunk for ZoomContactCenterFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZoomContactCenterGeneratedOperationCaller,
  ZoomContactCenterFullApiOperationArgs,
  ZoomContactCenterFullApiOperationInput,
  ZoomContactCenterFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZoomContactCenterFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZoomContactCenterFullApiInboxesOperationKeys = [
  "GET /contact_center/inboxes",
  "POST /contact_center/inboxes",
  "DELETE /contact_center/inboxes",
  "GET /contact_center/inboxes/messages",
  "DELETE /contact_center/inboxes/messages",
  "GET /contact_center/inboxes/{inboxId}",
  "PATCH /contact_center/inboxes/{inboxId}",
  "PATCH /contact_center/inboxes/{inboxId}/email_notification",
  "GET /contact_center/inboxes/{inboxId}/email_notifications",
  "GET /contact_center/inboxes/{inboxId}/messages",
  "DELETE /contact_center/inboxes/{inboxId}/messages",
  "DELETE /contact_center/inboxes/{inboxId}/messages/{messageId}",
  "GET /contact_center/inboxes/{inboxId}/queues",
  "POST /contact_center/inboxes/{inboxId}/queues",
  "DELETE /contact_center/inboxes/{inboxId}/queues",
  "GET /contact_center/inboxes/{inboxId}/users",
  "POST /contact_center/inboxes/{inboxId}/users",
  "DELETE /contact_center/inboxes/{inboxId}/users"
] as const;
export type ZoomContactCenterFullApiInboxesOperationKey = typeof ZoomContactCenterFullApiInboxesOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiInboxesOperationPathParamMap {
  "GET /contact_center/inboxes": {};
  "POST /contact_center/inboxes": {};
  "DELETE /contact_center/inboxes": {};
  "GET /contact_center/inboxes/messages": {};
  "DELETE /contact_center/inboxes/messages": {};
  "GET /contact_center/inboxes/{inboxId}": { "inboxId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/inboxes/{inboxId}": { "inboxId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/inboxes/{inboxId}/email_notification": { "inboxId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/inboxes/{inboxId}/email_notifications": { "inboxId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/inboxes/{inboxId}/messages": { "inboxId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/inboxes/{inboxId}/messages": { "inboxId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/inboxes/{inboxId}/messages/{messageId}": { "inboxId": ZoomContactCenterFullApiPathParamValue; "messageId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/inboxes/{inboxId}/queues": { "inboxId": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/inboxes/{inboxId}/queues": { "inboxId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/inboxes/{inboxId}/queues": { "inboxId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/inboxes/{inboxId}/users": { "inboxId": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/inboxes/{inboxId}/users": { "inboxId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/inboxes/{inboxId}/users": { "inboxId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiInboxesOperationRequestMap {
  "GET /contact_center/inboxes": ZoomContactCenterFullApiOperationInput<"GET /contact_center/inboxes">;
  "POST /contact_center/inboxes": ZoomContactCenterFullApiOperationInput<"POST /contact_center/inboxes">;
  "DELETE /contact_center/inboxes": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/inboxes">;
  "GET /contact_center/inboxes/messages": ZoomContactCenterFullApiOperationInput<"GET /contact_center/inboxes/messages">;
  "DELETE /contact_center/inboxes/messages": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/inboxes/messages">;
  "GET /contact_center/inboxes/{inboxId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/inboxes/{inboxId}">;
  "PATCH /contact_center/inboxes/{inboxId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/inboxes/{inboxId}">;
  "PATCH /contact_center/inboxes/{inboxId}/email_notification": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/inboxes/{inboxId}/email_notification">;
  "GET /contact_center/inboxes/{inboxId}/email_notifications": ZoomContactCenterFullApiOperationInput<"GET /contact_center/inboxes/{inboxId}/email_notifications">;
  "GET /contact_center/inboxes/{inboxId}/messages": ZoomContactCenterFullApiOperationInput<"GET /contact_center/inboxes/{inboxId}/messages">;
  "DELETE /contact_center/inboxes/{inboxId}/messages": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/inboxes/{inboxId}/messages">;
  "DELETE /contact_center/inboxes/{inboxId}/messages/{messageId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/inboxes/{inboxId}/messages/{messageId}">;
  "GET /contact_center/inboxes/{inboxId}/queues": ZoomContactCenterFullApiOperationInput<"GET /contact_center/inboxes/{inboxId}/queues">;
  "POST /contact_center/inboxes/{inboxId}/queues": ZoomContactCenterFullApiOperationInput<"POST /contact_center/inboxes/{inboxId}/queues">;
  "DELETE /contact_center/inboxes/{inboxId}/queues": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/inboxes/{inboxId}/queues">;
  "GET /contact_center/inboxes/{inboxId}/users": ZoomContactCenterFullApiOperationInput<"GET /contact_center/inboxes/{inboxId}/users">;
  "POST /contact_center/inboxes/{inboxId}/users": ZoomContactCenterFullApiOperationInput<"POST /contact_center/inboxes/{inboxId}/users">;
  "DELETE /contact_center/inboxes/{inboxId}/users": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/inboxes/{inboxId}/users">;
}

export interface ZoomContactCenterFullApiInboxesGeneratedClient {
  ListInbox(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/inboxes">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/inboxes"]>;
  InboxCreate(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/inboxes">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/inboxes"]>;
  InboxesDelete(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/inboxes">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/inboxes"]>;
  ListInboxesMessages(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/inboxes/messages">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/inboxes/messages"]>;
  InboxesMessagesDelete(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/inboxes/messages">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/inboxes/messages"]>;
  GetInbox(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/inboxes/{inboxId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/inboxes/{inboxId}"]>;
  InboxUpdate(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/inboxes/{inboxId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/inboxes/{inboxId}"]>;
  Updateaninboxemailnotification(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/inboxes/{inboxId}/email_notification">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/inboxes/{inboxId}/email_notification"]>;
  Getinboxemailnotificationlist(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/inboxes/{inboxId}/email_notifications">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/inboxes/{inboxId}/email_notifications"]>;
  ListInboxMessages(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/inboxes/{inboxId}/messages">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/inboxes/{inboxId}/messages"]>;
  InboxMessagesDelete(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/inboxes/{inboxId}/messages">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/inboxes/{inboxId}/messages"]>;
  InboxMessageDelete(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/inboxes/{inboxId}/messages/{messageId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/inboxes/{inboxId}/messages/{messageId}"]>;
  ListInboxQueues(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/inboxes/{inboxId}/queues">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/inboxes/{inboxId}/queues"]>;
  AssignInboxQueues(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/inboxes/{inboxId}/queues">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/inboxes/{inboxId}/queues"]>;
  UnassignInboxQueues(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/inboxes/{inboxId}/queues">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/inboxes/{inboxId}/queues"]>;
  ListInboxUsers(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/inboxes/{inboxId}/users">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/inboxes/{inboxId}/users"]>;
  AssignInboxUsers(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/inboxes/{inboxId}/users">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/inboxes/{inboxId}/users"]>;
  UnassignInboxUsers(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/inboxes/{inboxId}/users">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/inboxes/{inboxId}/users"]>;
}

export const ZoomContactCenterFullApiInboxesGeneratedFunctionNames = [
  "ListInbox",
  "InboxCreate",
  "InboxesDelete",
  "ListInboxesMessages",
  "InboxesMessagesDelete",
  "GetInbox",
  "InboxUpdate",
  "Updateaninboxemailnotification",
  "Getinboxemailnotificationlist",
  "ListInboxMessages",
  "InboxMessagesDelete",
  "InboxMessageDelete",
  "ListInboxQueues",
  "AssignInboxQueues",
  "UnassignInboxQueues",
  "ListInboxUsers",
  "AssignInboxUsers",
  "UnassignInboxUsers"
] as const satisfies readonly (keyof ZoomContactCenterFullApiInboxesGeneratedClient)[];

export function createZoomContactCenterFullApiInboxesGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiInboxesGeneratedClient {
  return {
    ListInbox: (...args) => callOperation("GET /contact_center/inboxes", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/inboxes">)),
    InboxCreate: (...args) => callOperation("POST /contact_center/inboxes", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/inboxes">)),
    InboxesDelete: (...args) => callOperation("DELETE /contact_center/inboxes", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/inboxes">)),
    ListInboxesMessages: (...args) => callOperation("GET /contact_center/inboxes/messages", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/inboxes/messages">)),
    InboxesMessagesDelete: (...args) => callOperation("DELETE /contact_center/inboxes/messages", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/inboxes/messages">)),
    GetInbox: (...args) => callOperation("GET /contact_center/inboxes/{inboxId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/inboxes/{inboxId}">)),
    InboxUpdate: (...args) => callOperation("PATCH /contact_center/inboxes/{inboxId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/inboxes/{inboxId}">)),
    Updateaninboxemailnotification: (...args) => callOperation("PATCH /contact_center/inboxes/{inboxId}/email_notification", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/inboxes/{inboxId}/email_notification">)),
    Getinboxemailnotificationlist: (...args) => callOperation("GET /contact_center/inboxes/{inboxId}/email_notifications", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/inboxes/{inboxId}/email_notifications">)),
    ListInboxMessages: (...args) => callOperation("GET /contact_center/inboxes/{inboxId}/messages", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/inboxes/{inboxId}/messages">)),
    InboxMessagesDelete: (...args) => callOperation("DELETE /contact_center/inboxes/{inboxId}/messages", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/inboxes/{inboxId}/messages">)),
    InboxMessageDelete: (...args) => callOperation("DELETE /contact_center/inboxes/{inboxId}/messages/{messageId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/inboxes/{inboxId}/messages/{messageId}">)),
    ListInboxQueues: (...args) => callOperation("GET /contact_center/inboxes/{inboxId}/queues", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/inboxes/{inboxId}/queues">)),
    AssignInboxQueues: (...args) => callOperation("POST /contact_center/inboxes/{inboxId}/queues", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/inboxes/{inboxId}/queues">)),
    UnassignInboxQueues: (...args) => callOperation("DELETE /contact_center/inboxes/{inboxId}/queues", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/inboxes/{inboxId}/queues">)),
    ListInboxUsers: (...args) => callOperation("GET /contact_center/inboxes/{inboxId}/users", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/inboxes/{inboxId}/users">)),
    AssignInboxUsers: (...args) => callOperation("POST /contact_center/inboxes/{inboxId}/users", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/inboxes/{inboxId}/users">)),
    UnassignInboxUsers: (...args) => callOperation("DELETE /contact_center/inboxes/{inboxId}/users", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/inboxes/{inboxId}/users">)),
  };
}
