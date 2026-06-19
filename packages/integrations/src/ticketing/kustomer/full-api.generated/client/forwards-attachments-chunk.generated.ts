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
export const KustomerFullApiForwardsAttachmentsOperationKeys = [
  "GetForwardAttachments",
  "CreateForwardAttachment",
  "DeleteForwardAttachment",
  "GetForwardAttachment"
] as const;
export type KustomerFullApiForwardsAttachmentsOperationKey = typeof KustomerFullApiForwardsAttachmentsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiForwardsAttachmentsOperationPathParamMap {
  "GetForwardAttachments": { "id": KustomerFullApiPathParamValue };
  "CreateForwardAttachment": { "id": KustomerFullApiPathParamValue };
  "DeleteForwardAttachment": { "id": KustomerFullApiPathParamValue; "attachmentId": KustomerFullApiPathParamValue };
  "GetForwardAttachment": { "id": KustomerFullApiPathParamValue; "attachmentId": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiForwardsAttachmentsOperationRequestMap {
  "GetForwardAttachments": KustomerFullApiOperationInput<"GetForwardAttachments">;
  "CreateForwardAttachment": KustomerFullApiOperationInput<"CreateForwardAttachment">;
  "DeleteForwardAttachment": KustomerFullApiOperationInput<"DeleteForwardAttachment">;
  "GetForwardAttachment": KustomerFullApiOperationInput<"GetForwardAttachment">;
}

export interface KustomerFullApiForwardsAttachmentsGeneratedClient {
  kustomerGetForwardAttachments(...args: KustomerFullApiOperationArgs<"GetForwardAttachments">): Promise<KustomerFullApiOperationResponseMap["GetForwardAttachments"]>;
  kustomerCreateForwardAttachment(...args: KustomerFullApiOperationArgs<"CreateForwardAttachment">): Promise<KustomerFullApiOperationResponseMap["CreateForwardAttachment"]>;
  kustomerDeleteForwardAttachment(...args: KustomerFullApiOperationArgs<"DeleteForwardAttachment">): Promise<KustomerFullApiOperationResponseMap["DeleteForwardAttachment"]>;
  kustomerGetForwardAttachment(...args: KustomerFullApiOperationArgs<"GetForwardAttachment">): Promise<KustomerFullApiOperationResponseMap["GetForwardAttachment"]>;
}

export const KustomerFullApiForwardsAttachmentsGeneratedFunctionNames = [
  "kustomerGetForwardAttachments",
  "kustomerCreateForwardAttachment",
  "kustomerDeleteForwardAttachment",
  "kustomerGetForwardAttachment"
] as const satisfies readonly (keyof KustomerFullApiForwardsAttachmentsGeneratedClient)[];

export function createKustomerFullApiForwardsAttachmentsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiForwardsAttachmentsGeneratedClient {
  return {
    kustomerGetForwardAttachments: (...args) => callOperation("GetForwardAttachments", ...(args as KustomerFullApiOperationArgs<"GetForwardAttachments">)),
    kustomerCreateForwardAttachment: (...args) => callOperation("CreateForwardAttachment", ...(args as KustomerFullApiOperationArgs<"CreateForwardAttachment">)),
    kustomerDeleteForwardAttachment: (...args) => callOperation("DeleteForwardAttachment", ...(args as KustomerFullApiOperationArgs<"DeleteForwardAttachment">)),
    kustomerGetForwardAttachment: (...args) => callOperation("GetForwardAttachment", ...(args as KustomerFullApiOperationArgs<"GetForwardAttachment">)),
  };
}
