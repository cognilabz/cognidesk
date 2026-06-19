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
export const FrontFullApiAttachmentsOperationKeys = [
  "download-attachment-for-a-comment",
  "download-attachment",
  "download-attachment-for-a-message-template",
  "download-attachment-for-a-message"
] as const;
export type FrontFullApiAttachmentsOperationKey = typeof FrontFullApiAttachmentsOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiAttachmentsOperationPathParamMap {
  "download-attachment-for-a-comment": { "comment_id": FrontFullApiPathParamValue; "attachment_link_id": FrontFullApiPathParamValue };
  "download-attachment": { "attachment_link_id": FrontFullApiPathParamValue };
  "download-attachment-for-a-message-template": { "message_template_id": FrontFullApiPathParamValue; "attachment_link_id": FrontFullApiPathParamValue };
  "download-attachment-for-a-message": { "message_id": FrontFullApiPathParamValue; "attachment_link_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiAttachmentsOperationRequestMap {
  "download-attachment-for-a-comment": FrontFullApiOperationInput<"download-attachment-for-a-comment">;
  "download-attachment": FrontFullApiOperationInput<"download-attachment">;
  "download-attachment-for-a-message-template": FrontFullApiOperationInput<"download-attachment-for-a-message-template">;
  "download-attachment-for-a-message": FrontFullApiOperationInput<"download-attachment-for-a-message">;
}

export interface FrontFullApiAttachmentsGeneratedClient {
  frontDownloadAttachmentForAComment(...args: FrontFullApiOperationArgs<"download-attachment-for-a-comment">): Promise<FrontFullApiOperationResponseMap["download-attachment-for-a-comment"]>;
  frontDownloadAttachment(...args: FrontFullApiOperationArgs<"download-attachment">): Promise<FrontFullApiOperationResponseMap["download-attachment"]>;
  frontDownloadAttachmentForAMessageTemplate(...args: FrontFullApiOperationArgs<"download-attachment-for-a-message-template">): Promise<FrontFullApiOperationResponseMap["download-attachment-for-a-message-template"]>;
  frontDownloadAttachmentForAMessage(...args: FrontFullApiOperationArgs<"download-attachment-for-a-message">): Promise<FrontFullApiOperationResponseMap["download-attachment-for-a-message"]>;
}

export const FrontFullApiAttachmentsGeneratedFunctionNames = [
  "frontDownloadAttachmentForAComment",
  "frontDownloadAttachment",
  "frontDownloadAttachmentForAMessageTemplate",
  "frontDownloadAttachmentForAMessage"
] as const satisfies readonly (keyof FrontFullApiAttachmentsGeneratedClient)[];

export function createFrontFullApiAttachmentsGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiAttachmentsGeneratedClient {
  return {
    frontDownloadAttachmentForAComment: (...args) => callOperation("download-attachment-for-a-comment", ...(args as FrontFullApiOperationArgs<"download-attachment-for-a-comment">)),
    frontDownloadAttachment: (...args) => callOperation("download-attachment", ...(args as FrontFullApiOperationArgs<"download-attachment">)),
    frontDownloadAttachmentForAMessageTemplate: (...args) => callOperation("download-attachment-for-a-message-template", ...(args as FrontFullApiOperationArgs<"download-attachment-for-a-message-template">)),
    frontDownloadAttachmentForAMessage: (...args) => callOperation("download-attachment-for-a-message", ...(args as FrontFullApiOperationArgs<"download-attachment-for-a-message">)),
  };
}
