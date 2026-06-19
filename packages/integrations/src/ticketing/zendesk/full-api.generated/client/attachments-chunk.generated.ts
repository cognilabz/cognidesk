// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiAttachmentsOperationKeys = [
  "DeleteAttachment",
  "DeleteUpload",
  "RedactCommentAttachment",
  "ShowAttachment",
  "UpdateAttachment",
  "UploadFiles"
] as const;
export type ZendeskFullApiAttachmentsOperationKey = typeof ZendeskFullApiAttachmentsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiAttachmentsOperationPathParamMap {
  "DeleteAttachment": { "attachment_id": ZendeskFullApiPathParamValue };
  "DeleteUpload": { "token": ZendeskFullApiPathParamValue };
  "RedactCommentAttachment": { "ticket_id": ZendeskFullApiPathParamValue; "comment_id": ZendeskFullApiPathParamValue; "attachment_id": ZendeskFullApiPathParamValue };
  "ShowAttachment": { "attachment_id": ZendeskFullApiPathParamValue };
  "UpdateAttachment": { "attachment_id": ZendeskFullApiPathParamValue };
  "UploadFiles": {};
}

export interface ZendeskFullApiAttachmentsOperationRequestMap {
  "DeleteAttachment": ZendeskFullApiOperationInput<"DeleteAttachment">;
  "DeleteUpload": ZendeskFullApiOperationInput<"DeleteUpload">;
  "RedactCommentAttachment": ZendeskFullApiOperationInput<"RedactCommentAttachment">;
  "ShowAttachment": ZendeskFullApiOperationInput<"ShowAttachment">;
  "UpdateAttachment": ZendeskFullApiOperationInput<"UpdateAttachment">;
  "UploadFiles": ZendeskFullApiOperationInput<"UploadFiles">;
}

export interface ZendeskFullApiAttachmentsGeneratedClient {
  DeleteAttachment(...args: ZendeskFullApiOperationArgs<"DeleteAttachment">): Promise<ZendeskFullApiOperationResponseMap["DeleteAttachment"]>;
  DeleteUpload(...args: ZendeskFullApiOperationArgs<"DeleteUpload">): Promise<ZendeskFullApiOperationResponseMap["DeleteUpload"]>;
  RedactCommentAttachment(...args: ZendeskFullApiOperationArgs<"RedactCommentAttachment">): Promise<ZendeskFullApiOperationResponseMap["RedactCommentAttachment"]>;
  ShowAttachment(...args: ZendeskFullApiOperationArgs<"ShowAttachment">): Promise<ZendeskFullApiOperationResponseMap["ShowAttachment"]>;
  UpdateAttachment(...args: ZendeskFullApiOperationArgs<"UpdateAttachment">): Promise<ZendeskFullApiOperationResponseMap["UpdateAttachment"]>;
  UploadFiles(...args: ZendeskFullApiOperationArgs<"UploadFiles">): Promise<ZendeskFullApiOperationResponseMap["UploadFiles"]>;
}

export const ZendeskFullApiAttachmentsGeneratedFunctionNames = [
  "DeleteAttachment",
  "DeleteUpload",
  "RedactCommentAttachment",
  "ShowAttachment",
  "UpdateAttachment",
  "UploadFiles"
] as const satisfies readonly (keyof ZendeskFullApiAttachmentsGeneratedClient)[];

export function createZendeskFullApiAttachmentsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiAttachmentsGeneratedClient {
  return {
    DeleteAttachment: (...args) => callOperation("DeleteAttachment", ...(args as ZendeskFullApiOperationArgs<"DeleteAttachment">)),
    DeleteUpload: (...args) => callOperation("DeleteUpload", ...(args as ZendeskFullApiOperationArgs<"DeleteUpload">)),
    RedactCommentAttachment: (...args) => callOperation("RedactCommentAttachment", ...(args as ZendeskFullApiOperationArgs<"RedactCommentAttachment">)),
    ShowAttachment: (...args) => callOperation("ShowAttachment", ...(args as ZendeskFullApiOperationArgs<"ShowAttachment">)),
    UpdateAttachment: (...args) => callOperation("UpdateAttachment", ...(args as ZendeskFullApiOperationArgs<"UpdateAttachment">)),
    UploadFiles: (...args) => callOperation("UploadFiles", ...(args as ZendeskFullApiOperationArgs<"UploadFiles">)),
  };
}
