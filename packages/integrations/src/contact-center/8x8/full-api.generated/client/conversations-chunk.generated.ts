// Generated endpoint chunk for EightByEightContactCenterApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  EightByEightGeneratedOperationCaller,
  EightByEightContactCenterApiOperationArgs,
  EightByEightContactCenterApiOperationInput,
  EightByEightContactCenterApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { EightByEightContactCenterApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const EightByEightContactCenterApiConversationsOperationKeys = [
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations",
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations",
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}",
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants",
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer",
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages",
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages",
  "chat-gateway:GET /chat-gateway/v1/conversations",
  "chat-gateway:POST /chat-gateway/v1/conversations",
  "chat-gateway:PUT /chat-gateway/v1/conversations/{conversationId}",
  "chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}",
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}",
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/interactions",
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/post-agent-assignment",
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/typing",
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/thinking",
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/read-receipt",
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations",
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations",
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}",
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants",
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer",
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages",
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages"
] as const;
export type EightByEightContactCenterApiConversationsOperationKey = typeof EightByEightContactCenterApiConversationsOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiConversationsOperationPathParamMap {
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "conversation-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "conversation-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "conversation-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "conversation-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "conversation-id": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:GET /chat-gateway/v1/conversations": {};
  "chat-gateway:POST /chat-gateway/v1/conversations": {};
  "chat-gateway:PUT /chat-gateway/v1/conversations/{conversationId}": { "conversationId": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}": { "conversationId": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}": { "conversationId": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/interactions": { "conversationId": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/post-agent-assignment": { "conversationId": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/typing": { "conversationId": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/thinking": { "conversationId": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/read-receipt": { "conversationId": EightByEightContactCenterApiPathParamValue };
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "conversation-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "conversation-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "conversation-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "conversation-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "conversation-id": EightByEightContactCenterApiPathParamValue };
}

export interface EightByEightContactCenterApiConversationsOperationRequestMap {
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": EightByEightContactCenterApiOperationInput<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations">;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": EightByEightContactCenterApiOperationInput<"chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations">;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}": EightByEightContactCenterApiOperationInput<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}">;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants": EightByEightContactCenterApiOperationInput<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants">;
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer": EightByEightContactCenterApiOperationInput<"chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer">;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": EightByEightContactCenterApiOperationInput<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages">;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": EightByEightContactCenterApiOperationInput<"chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages">;
  "chat-gateway:GET /chat-gateway/v1/conversations": EightByEightContactCenterApiOperationInput<"chat-gateway:GET /chat-gateway/v1/conversations">;
  "chat-gateway:POST /chat-gateway/v1/conversations": EightByEightContactCenterApiOperationInput<"chat-gateway:POST /chat-gateway/v1/conversations">;
  "chat-gateway:PUT /chat-gateway/v1/conversations/{conversationId}": EightByEightContactCenterApiOperationInput<"chat-gateway:PUT /chat-gateway/v1/conversations/{conversationId}">;
  "chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}": EightByEightContactCenterApiOperationInput<"chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}">;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}": EightByEightContactCenterApiOperationInput<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}">;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/interactions": EightByEightContactCenterApiOperationInput<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/interactions">;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/post-agent-assignment": EightByEightContactCenterApiOperationInput<"chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/post-agent-assignment">;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/typing": EightByEightContactCenterApiOperationInput<"chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/typing">;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/thinking": EightByEightContactCenterApiOperationInput<"chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/thinking">;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/read-receipt": EightByEightContactCenterApiOperationInput<"chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/read-receipt">;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": EightByEightContactCenterApiOperationInput<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations">;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": EightByEightContactCenterApiOperationInput<"chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations">;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}": EightByEightContactCenterApiOperationInput<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}">;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants": EightByEightContactCenterApiOperationInput<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants">;
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer": EightByEightContactCenterApiOperationInput<"chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer">;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": EightByEightContactCenterApiOperationInput<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages">;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": EightByEightContactCenterApiOperationInput<"chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages">;
}

export interface EightByEightContactCenterApiConversationsGeneratedClient {
  Getcctransactions(...args: EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations"]>;
  Createcctransaction(...args: EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations"]>;
  Getcctransaction(...args: EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}"]>;
  Getparticipantsforcctransaction(...args: EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants"]>;
  Customerparticipantleavecctransaction(...args: EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer"]>;
  Getmessagesforcctransaction(...args: EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages"]>;
  Sendmessagetocctransaction(...args: EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages"]>;
  Getcctransactions1(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/conversations">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:GET /chat-gateway/v1/conversations"]>;
  Createcctransaction1(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:POST /chat-gateway/v1/conversations">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:POST /chat-gateway/v1/conversations"]>;
  Putcctransaction(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:PUT /chat-gateway/v1/conversations/{conversationId}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:PUT /chat-gateway/v1/conversations/{conversationId}"]>;
  Patchcctransaction(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}"]>;
  Getcctransaction1(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}"]>;
  Getccinteractions(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/interactions">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/interactions"]>;
  Createpostagentassignment(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/post-agent-assignment">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/post-agent-assignment"]>;
  Sendtypingindicator(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/typing">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/typing"]>;
  Sendthinkingindicator(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/thinking">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/thinking"]>;
  Sendreadreceipt(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/read-receipt">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/read-receipt"]>;
  Getcctransactions2(...args: EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations"]>;
  Createcctransaction2(...args: EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations"]>;
  Getcctransaction2(...args: EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}"]>;
  Getparticipantsforcctransaction2(...args: EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants"]>;
  Customerparticipantleavecctransaction2(...args: EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer"]>;
  Getmessagesforcctransaction2(...args: EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages"]>;
  Sendmessagetocctransaction2(...args: EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages"]>;
}

export const EightByEightContactCenterApiConversationsGeneratedFunctionNames = [
  "Getcctransactions",
  "Createcctransaction",
  "Getcctransaction",
  "Getparticipantsforcctransaction",
  "Customerparticipantleavecctransaction",
  "Getmessagesforcctransaction",
  "Sendmessagetocctransaction",
  "Getcctransactions1",
  "Createcctransaction1",
  "Putcctransaction",
  "Patchcctransaction",
  "Getcctransaction1",
  "Getccinteractions",
  "Createpostagentassignment",
  "Sendtypingindicator",
  "Sendthinkingindicator",
  "Sendreadreceipt",
  "Getcctransactions2",
  "Createcctransaction2",
  "Getcctransaction2",
  "Getparticipantsforcctransaction2",
  "Customerparticipantleavecctransaction2",
  "Getmessagesforcctransaction2",
  "Sendmessagetocctransaction2"
] as const satisfies readonly (keyof EightByEightContactCenterApiConversationsGeneratedClient)[];

export function createEightByEightContactCenterApiConversationsGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiConversationsGeneratedClient {
  return {
    Getcctransactions: (...args) => callOperation("chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations">)),
    Createcctransaction: (...args) => callOperation("chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations">)),
    Getcctransaction: (...args) => callOperation("chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}">)),
    Getparticipantsforcctransaction: (...args) => callOperation("chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants">)),
    Customerparticipantleavecctransaction: (...args) => callOperation("chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer">)),
    Getmessagesforcctransaction: (...args) => callOperation("chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages">)),
    Sendmessagetocctransaction: (...args) => callOperation("chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages">)),
    Getcctransactions1: (...args) => callOperation("chat-gateway:GET /chat-gateway/v1/conversations", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/conversations">)),
    Createcctransaction1: (...args) => callOperation("chat-gateway:POST /chat-gateway/v1/conversations", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:POST /chat-gateway/v1/conversations">)),
    Putcctransaction: (...args) => callOperation("chat-gateway:PUT /chat-gateway/v1/conversations/{conversationId}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:PUT /chat-gateway/v1/conversations/{conversationId}">)),
    Patchcctransaction: (...args) => callOperation("chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}">)),
    Getcctransaction1: (...args) => callOperation("chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}">)),
    Getccinteractions: (...args) => callOperation("chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/interactions", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/interactions">)),
    Createpostagentassignment: (...args) => callOperation("chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/post-agent-assignment", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/post-agent-assignment">)),
    Sendtypingindicator: (...args) => callOperation("chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/typing", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/typing">)),
    Sendthinkingindicator: (...args) => callOperation("chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/thinking", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/thinking">)),
    Sendreadreceipt: (...args) => callOperation("chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/read-receipt", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/read-receipt">)),
    Getcctransactions2: (...args) => callOperation("chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations">)),
    Createcctransaction2: (...args) => callOperation("chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations">)),
    Getcctransaction2: (...args) => callOperation("chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}">)),
    Getparticipantsforcctransaction2: (...args) => callOperation("chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants">)),
    Customerparticipantleavecctransaction2: (...args) => callOperation("chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer">)),
    Getmessagesforcctransaction2: (...args) => callOperation("chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages">)),
    Sendmessagetocctransaction2: (...args) => callOperation("chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages">)),
  };
}
