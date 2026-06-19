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
export const EightByEightContactCenterApiAttachmentsOperationKeys = [
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments",
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/attachments",
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}",
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}/content"
] as const;
export type EightByEightContactCenterApiAttachmentsOperationKey = typeof EightByEightContactCenterApiAttachmentsOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiAttachmentsOperationPathParamMap {
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments": { "conversationId": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/attachments": { "conversationId": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}": { "conversationId": EightByEightContactCenterApiPathParamValue; "attachmentId": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}/content": { "conversationId": EightByEightContactCenterApiPathParamValue; "attachmentId": EightByEightContactCenterApiPathParamValue };
}

export interface EightByEightContactCenterApiAttachmentsOperationRequestMap {
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments": EightByEightContactCenterApiOperationInput<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments">;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/attachments": EightByEightContactCenterApiOperationInput<"chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/attachments">;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}": EightByEightContactCenterApiOperationInput<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}">;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}/content": EightByEightContactCenterApiOperationInput<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}/content">;
}

export interface EightByEightContactCenterApiAttachmentsGeneratedClient {
  Getconversationattachments(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments"]>;
  Addconversationattachments(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/attachments">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/attachments"]>;
  Getconversationattachment(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}"]>;
  Downloadattachmentforchatapiconversation(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}/content">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}/content"]>;
}

export const EightByEightContactCenterApiAttachmentsGeneratedFunctionNames = [
  "Getconversationattachments",
  "Addconversationattachments",
  "Getconversationattachment",
  "Downloadattachmentforchatapiconversation"
] as const satisfies readonly (keyof EightByEightContactCenterApiAttachmentsGeneratedClient)[];

export function createEightByEightContactCenterApiAttachmentsGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiAttachmentsGeneratedClient {
  return {
    Getconversationattachments: (...args) => callOperation("chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments">)),
    Addconversationattachments: (...args) => callOperation("chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/attachments", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/attachments">)),
    Getconversationattachment: (...args) => callOperation("chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}">)),
    Downloadattachmentforchatapiconversation: (...args) => callOperation("chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}/content", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}/content">)),
  };
}
