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
export const EightByEightContactCenterApiMessagesOperationKeys = [
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages",
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/messages",
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}"
] as const;
export type EightByEightContactCenterApiMessagesOperationKey = typeof EightByEightContactCenterApiMessagesOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiMessagesOperationPathParamMap {
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages": { "conversationId": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/messages": { "conversationId": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}": { "conversationId": EightByEightContactCenterApiPathParamValue; "messageId": EightByEightContactCenterApiPathParamValue };
}

export interface EightByEightContactCenterApiMessagesOperationRequestMap {
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages": EightByEightContactCenterApiOperationInput<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages">;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/messages": EightByEightContactCenterApiOperationInput<"chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/messages">;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}": EightByEightContactCenterApiOperationInput<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}">;
}

export interface EightByEightContactCenterApiMessagesGeneratedClient {
  Getmessagesforcctransaction1(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages"]>;
  Sendmessagetocctransaction1(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/messages">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/messages"]>;
  Getmessagebyidforcctransaction(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}"]>;
}

export const EightByEightContactCenterApiMessagesGeneratedFunctionNames = [
  "Getmessagesforcctransaction1",
  "Sendmessagetocctransaction1",
  "Getmessagebyidforcctransaction"
] as const satisfies readonly (keyof EightByEightContactCenterApiMessagesGeneratedClient)[];

export function createEightByEightContactCenterApiMessagesGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiMessagesGeneratedClient {
  return {
    Getmessagesforcctransaction1: (...args) => callOperation("chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages">)),
    Sendmessagetocctransaction1: (...args) => callOperation("chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/messages", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/messages">)),
    Getmessagebyidforcctransaction: (...args) => callOperation("chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}">)),
  };
}
