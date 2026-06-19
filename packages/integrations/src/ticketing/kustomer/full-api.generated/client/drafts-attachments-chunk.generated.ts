// Generated endpoint chunk for KustomerFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  KustomerGeneratedOperationCaller,
  KustomerFullApiOperationArgs,
  KustomerFullApiOperationInput,
  KustomerFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { KustomerFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const KustomerFullApiDraftsAttachmentsOperationKeys = [
  "GetDraftAttachments",
  "CreateDraftAttachment",
  "DeleteDraftAttachment",
  "GetDraftAttachment"
] as const;
export type KustomerFullApiDraftsAttachmentsOperationKey = typeof KustomerFullApiDraftsAttachmentsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiDraftsAttachmentsOperationPathParamMap {
  "GetDraftAttachments": { "id": KustomerFullApiPathParamValue };
  "CreateDraftAttachment": { "id": KustomerFullApiPathParamValue };
  "DeleteDraftAttachment": { "id": KustomerFullApiPathParamValue; "attachmentId": KustomerFullApiPathParamValue };
  "GetDraftAttachment": { "id": KustomerFullApiPathParamValue; "attachmentId": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiDraftsAttachmentsOperationRequestMap {
  "GetDraftAttachments": KustomerFullApiOperationInput<"GetDraftAttachments">;
  "CreateDraftAttachment": KustomerFullApiOperationInput<"CreateDraftAttachment">;
  "DeleteDraftAttachment": KustomerFullApiOperationInput<"DeleteDraftAttachment">;
  "GetDraftAttachment": KustomerFullApiOperationInput<"GetDraftAttachment">;
}

export interface KustomerFullApiDraftsAttachmentsGeneratedClient {
  kustomerGetDraftAttachments(...args: KustomerFullApiOperationArgs<"GetDraftAttachments">): Promise<KustomerFullApiOperationResponseMap["GetDraftAttachments"]>;
  kustomerCreateDraftAttachment(...args: KustomerFullApiOperationArgs<"CreateDraftAttachment">): Promise<KustomerFullApiOperationResponseMap["CreateDraftAttachment"]>;
  kustomerDeleteDraftAttachment(...args: KustomerFullApiOperationArgs<"DeleteDraftAttachment">): Promise<KustomerFullApiOperationResponseMap["DeleteDraftAttachment"]>;
  kustomerGetDraftAttachment(...args: KustomerFullApiOperationArgs<"GetDraftAttachment">): Promise<KustomerFullApiOperationResponseMap["GetDraftAttachment"]>;
}

export const KustomerFullApiDraftsAttachmentsGeneratedFunctionNames = [
  "kustomerGetDraftAttachments",
  "kustomerCreateDraftAttachment",
  "kustomerDeleteDraftAttachment",
  "kustomerGetDraftAttachment"
] as const satisfies readonly (keyof KustomerFullApiDraftsAttachmentsGeneratedClient)[];

export function createKustomerFullApiDraftsAttachmentsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiDraftsAttachmentsGeneratedClient {
  return {
    kustomerGetDraftAttachments: (...args) => callOperation("GetDraftAttachments", ...(args as KustomerFullApiOperationArgs<"GetDraftAttachments">)),
    kustomerCreateDraftAttachment: (...args) => callOperation("CreateDraftAttachment", ...(args as KustomerFullApiOperationArgs<"CreateDraftAttachment">)),
    kustomerDeleteDraftAttachment: (...args) => callOperation("DeleteDraftAttachment", ...(args as KustomerFullApiOperationArgs<"DeleteDraftAttachment">)),
    kustomerGetDraftAttachment: (...args) => callOperation("GetDraftAttachment", ...(args as KustomerFullApiOperationArgs<"GetDraftAttachment">)),
  };
}
