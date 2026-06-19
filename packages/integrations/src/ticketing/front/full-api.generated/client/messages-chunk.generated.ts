// Generated endpoint chunk for FrontFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  FrontGeneratedOperationCaller,
  FrontFullApiOperationArgs,
  FrontFullApiOperationInput,
  FrontFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { FrontFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const FrontFullApiMessagesOperationKeys = [
  "update-external-message-status",
  "sync-inbound-message",
  "receive-custom-messages",
  "create-message",
  "sync-outbound-message",
  "create-message-reply",
  "import-inbox-message",
  "get-message",
  "get-message-seen-status",
  "mark-message-seen"
] as const;
export type FrontFullApiMessagesOperationKey = typeof FrontFullApiMessagesOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiMessagesOperationPathParamMap {
  "update-external-message-status": { "channel_id": FrontFullApiPathParamValue; "conv_ext_id": FrontFullApiPathParamValue; "message_ext_id": FrontFullApiPathParamValue };
  "sync-inbound-message": { "channel_id": FrontFullApiPathParamValue };
  "receive-custom-messages": { "channel_id": FrontFullApiPathParamValue };
  "create-message": { "channel_id": FrontFullApiPathParamValue };
  "sync-outbound-message": { "channel_id": FrontFullApiPathParamValue };
  "create-message-reply": { "conversation_id": FrontFullApiPathParamValue };
  "import-inbox-message": { "inbox_id": FrontFullApiPathParamValue };
  "get-message": { "message_id": FrontFullApiPathParamValue };
  "get-message-seen-status": { "message_id": FrontFullApiPathParamValue };
  "mark-message-seen": { "message_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiMessagesOperationRequestMap {
  "update-external-message-status": FrontFullApiOperationInput<"update-external-message-status">;
  "sync-inbound-message": FrontFullApiOperationInput<"sync-inbound-message">;
  "receive-custom-messages": FrontFullApiOperationInput<"receive-custom-messages">;
  "create-message": FrontFullApiOperationInput<"create-message">;
  "sync-outbound-message": FrontFullApiOperationInput<"sync-outbound-message">;
  "create-message-reply": FrontFullApiOperationInput<"create-message-reply">;
  "import-inbox-message": FrontFullApiOperationInput<"import-inbox-message">;
  "get-message": FrontFullApiOperationInput<"get-message">;
  "get-message-seen-status": FrontFullApiOperationInput<"get-message-seen-status">;
  "mark-message-seen": FrontFullApiOperationInput<"mark-message-seen">;
}

export interface FrontFullApiMessagesGeneratedClient {
  frontUpdateExternalMessageStatus(...args: FrontFullApiOperationArgs<"update-external-message-status">): Promise<FrontFullApiOperationResponseMap["update-external-message-status"]>;
  frontSyncInboundMessage(...args: FrontFullApiOperationArgs<"sync-inbound-message">): Promise<FrontFullApiOperationResponseMap["sync-inbound-message"]>;
  frontReceiveCustomMessages(...args: FrontFullApiOperationArgs<"receive-custom-messages">): Promise<FrontFullApiOperationResponseMap["receive-custom-messages"]>;
  frontCreateMessage(...args: FrontFullApiOperationArgs<"create-message">): Promise<FrontFullApiOperationResponseMap["create-message"]>;
  frontSyncOutboundMessage(...args: FrontFullApiOperationArgs<"sync-outbound-message">): Promise<FrontFullApiOperationResponseMap["sync-outbound-message"]>;
  frontCreateMessageReply(...args: FrontFullApiOperationArgs<"create-message-reply">): Promise<FrontFullApiOperationResponseMap["create-message-reply"]>;
  frontImportInboxMessage(...args: FrontFullApiOperationArgs<"import-inbox-message">): Promise<FrontFullApiOperationResponseMap["import-inbox-message"]>;
  frontGetMessage(...args: FrontFullApiOperationArgs<"get-message">): Promise<FrontFullApiOperationResponseMap["get-message"]>;
  frontGetMessageSeenStatus(...args: FrontFullApiOperationArgs<"get-message-seen-status">): Promise<FrontFullApiOperationResponseMap["get-message-seen-status"]>;
  frontMarkMessageSeen(...args: FrontFullApiOperationArgs<"mark-message-seen">): Promise<FrontFullApiOperationResponseMap["mark-message-seen"]>;
}

export const FrontFullApiMessagesGeneratedFunctionNames = [
  "frontUpdateExternalMessageStatus",
  "frontSyncInboundMessage",
  "frontReceiveCustomMessages",
  "frontCreateMessage",
  "frontSyncOutboundMessage",
  "frontCreateMessageReply",
  "frontImportInboxMessage",
  "frontGetMessage",
  "frontGetMessageSeenStatus",
  "frontMarkMessageSeen"
] as const satisfies readonly (keyof FrontFullApiMessagesGeneratedClient)[];

export function createFrontFullApiMessagesGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiMessagesGeneratedClient {
  return {
    frontUpdateExternalMessageStatus: (...args) => callOperation("update-external-message-status", ...(args as FrontFullApiOperationArgs<"update-external-message-status">)),
    frontSyncInboundMessage: (...args) => callOperation("sync-inbound-message", ...(args as FrontFullApiOperationArgs<"sync-inbound-message">)),
    frontReceiveCustomMessages: (...args) => callOperation("receive-custom-messages", ...(args as FrontFullApiOperationArgs<"receive-custom-messages">)),
    frontCreateMessage: (...args) => callOperation("create-message", ...(args as FrontFullApiOperationArgs<"create-message">)),
    frontSyncOutboundMessage: (...args) => callOperation("sync-outbound-message", ...(args as FrontFullApiOperationArgs<"sync-outbound-message">)),
    frontCreateMessageReply: (...args) => callOperation("create-message-reply", ...(args as FrontFullApiOperationArgs<"create-message-reply">)),
    frontImportInboxMessage: (...args) => callOperation("import-inbox-message", ...(args as FrontFullApiOperationArgs<"import-inbox-message">)),
    frontGetMessage: (...args) => callOperation("get-message", ...(args as FrontFullApiOperationArgs<"get-message">)),
    frontGetMessageSeenStatus: (...args) => callOperation("get-message-seen-status", ...(args as FrontFullApiOperationArgs<"get-message-seen-status">)),
    frontMarkMessageSeen: (...args) => callOperation("mark-message-seen", ...(args as FrontFullApiOperationArgs<"mark-message-seen">)),
  };
}
