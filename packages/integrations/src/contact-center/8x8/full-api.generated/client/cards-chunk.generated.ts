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
export const EightByEightContactCenterApiCardsOperationKeys = [
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}/cards",
  "chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-submit",
  "chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-execute"
] as const;
export type EightByEightContactCenterApiCardsOperationKey = typeof EightByEightContactCenterApiCardsOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiCardsOperationPathParamMap {
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}/cards": { "conversationId": EightByEightContactCenterApiPathParamValue; "messageId": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-submit": { "tenantId": EightByEightContactCenterApiPathParamValue; "conversationId": EightByEightContactCenterApiPathParamValue; "cardId": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-execute": { "tenantId": EightByEightContactCenterApiPathParamValue; "conversationId": EightByEightContactCenterApiPathParamValue; "cardId": EightByEightContactCenterApiPathParamValue };
}

export interface EightByEightContactCenterApiCardsOperationRequestMap {
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}/cards": EightByEightContactCenterApiOperationInput<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}/cards">;
  "chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-submit": EightByEightContactCenterApiOperationInput<"chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-submit">;
  "chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-execute": EightByEightContactCenterApiOperationInput<"chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-execute">;
}

export interface EightByEightContactCenterApiCardsGeneratedClient {
  Getcardsforcctransaction(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}/cards">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}/cards"]>;
  Updatecardactionsubmit(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-submit">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-submit"]>;
  Updatecardactionexecute(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-execute">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-execute"]>;
}

export const EightByEightContactCenterApiCardsGeneratedFunctionNames = [
  "Getcardsforcctransaction",
  "Updatecardactionsubmit",
  "Updatecardactionexecute"
] as const satisfies readonly (keyof EightByEightContactCenterApiCardsGeneratedClient)[];

export function createEightByEightContactCenterApiCardsGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiCardsGeneratedClient {
  return {
    Getcardsforcctransaction: (...args) => callOperation("chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}/cards", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}/cards">)),
    Updatecardactionsubmit: (...args) => callOperation("chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-submit", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-submit">)),
    Updatecardactionexecute: (...args) => callOperation("chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-execute", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-execute">)),
  };
}
