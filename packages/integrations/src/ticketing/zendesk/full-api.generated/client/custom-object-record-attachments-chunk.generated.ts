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
export const ZendeskFullApiCustomObjectRecordAttachmentsOperationKeys = [
  "CreateCustomObjectRecordAttachment",
  "DeleteCustomObjectRecordAttachment",
  "DownloadCustomObjectRecordAttachment",
  "ListCustomObjectRecordAttachments",
  "UpdateCustomObjectRecordAttachment"
] as const;
export type ZendeskFullApiCustomObjectRecordAttachmentsOperationKey = typeof ZendeskFullApiCustomObjectRecordAttachmentsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiCustomObjectRecordAttachmentsOperationPathParamMap {
  "CreateCustomObjectRecordAttachment": { "custom_object_key": ZendeskFullApiPathParamValue; "record_id": ZendeskFullApiPathParamValue };
  "DeleteCustomObjectRecordAttachment": { "custom_object_key": ZendeskFullApiPathParamValue; "record_id": ZendeskFullApiPathParamValue; "id": ZendeskFullApiPathParamValue };
  "DownloadCustomObjectRecordAttachment": { "custom_object_key": ZendeskFullApiPathParamValue; "record_id": ZendeskFullApiPathParamValue; "id": ZendeskFullApiPathParamValue };
  "ListCustomObjectRecordAttachments": { "custom_object_key": ZendeskFullApiPathParamValue; "record_id": ZendeskFullApiPathParamValue };
  "UpdateCustomObjectRecordAttachment": { "custom_object_key": ZendeskFullApiPathParamValue; "record_id": ZendeskFullApiPathParamValue; "id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiCustomObjectRecordAttachmentsOperationRequestMap {
  "CreateCustomObjectRecordAttachment": ZendeskFullApiOperationInput<"CreateCustomObjectRecordAttachment">;
  "DeleteCustomObjectRecordAttachment": ZendeskFullApiOperationInput<"DeleteCustomObjectRecordAttachment">;
  "DownloadCustomObjectRecordAttachment": ZendeskFullApiOperationInput<"DownloadCustomObjectRecordAttachment">;
  "ListCustomObjectRecordAttachments": ZendeskFullApiOperationInput<"ListCustomObjectRecordAttachments">;
  "UpdateCustomObjectRecordAttachment": ZendeskFullApiOperationInput<"UpdateCustomObjectRecordAttachment">;
}

export interface ZendeskFullApiCustomObjectRecordAttachmentsGeneratedClient {
  CreateCustomObjectRecordAttachment(...args: ZendeskFullApiOperationArgs<"CreateCustomObjectRecordAttachment">): Promise<ZendeskFullApiOperationResponseMap["CreateCustomObjectRecordAttachment"]>;
  DeleteCustomObjectRecordAttachment(...args: ZendeskFullApiOperationArgs<"DeleteCustomObjectRecordAttachment">): Promise<ZendeskFullApiOperationResponseMap["DeleteCustomObjectRecordAttachment"]>;
  DownloadCustomObjectRecordAttachment(...args: ZendeskFullApiOperationArgs<"DownloadCustomObjectRecordAttachment">): Promise<ZendeskFullApiOperationResponseMap["DownloadCustomObjectRecordAttachment"]>;
  ListCustomObjectRecordAttachments(...args: ZendeskFullApiOperationArgs<"ListCustomObjectRecordAttachments">): Promise<ZendeskFullApiOperationResponseMap["ListCustomObjectRecordAttachments"]>;
  UpdateCustomObjectRecordAttachment(...args: ZendeskFullApiOperationArgs<"UpdateCustomObjectRecordAttachment">): Promise<ZendeskFullApiOperationResponseMap["UpdateCustomObjectRecordAttachment"]>;
}

export const ZendeskFullApiCustomObjectRecordAttachmentsGeneratedFunctionNames = [
  "CreateCustomObjectRecordAttachment",
  "DeleteCustomObjectRecordAttachment",
  "DownloadCustomObjectRecordAttachment",
  "ListCustomObjectRecordAttachments",
  "UpdateCustomObjectRecordAttachment"
] as const satisfies readonly (keyof ZendeskFullApiCustomObjectRecordAttachmentsGeneratedClient)[];

export function createZendeskFullApiCustomObjectRecordAttachmentsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiCustomObjectRecordAttachmentsGeneratedClient {
  return {
    CreateCustomObjectRecordAttachment: (...args) => callOperation("CreateCustomObjectRecordAttachment", ...(args as ZendeskFullApiOperationArgs<"CreateCustomObjectRecordAttachment">)),
    DeleteCustomObjectRecordAttachment: (...args) => callOperation("DeleteCustomObjectRecordAttachment", ...(args as ZendeskFullApiOperationArgs<"DeleteCustomObjectRecordAttachment">)),
    DownloadCustomObjectRecordAttachment: (...args) => callOperation("DownloadCustomObjectRecordAttachment", ...(args as ZendeskFullApiOperationArgs<"DownloadCustomObjectRecordAttachment">)),
    ListCustomObjectRecordAttachments: (...args) => callOperation("ListCustomObjectRecordAttachments", ...(args as ZendeskFullApiOperationArgs<"ListCustomObjectRecordAttachments">)),
    UpdateCustomObjectRecordAttachment: (...args) => callOperation("UpdateCustomObjectRecordAttachment", ...(args as ZendeskFullApiOperationArgs<"UpdateCustomObjectRecordAttachment">)),
  };
}
