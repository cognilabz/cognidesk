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
export const KustomerFullApiAttachmentsOperationKeys = [
  "CreateAttachment",
  "GetOutboundAttachmentByID",
  "UpsertAttachment",
  "GetMessageAttachment"
] as const;
export type KustomerFullApiAttachmentsOperationKey = typeof KustomerFullApiAttachmentsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiAttachmentsOperationPathParamMap {
  "CreateAttachment": {};
  "GetOutboundAttachmentByID": { "id": KustomerFullApiPathParamValue };
  "UpsertAttachment": { "id": KustomerFullApiPathParamValue };
  "GetMessageAttachment": { "message_id": KustomerFullApiPathParamValue; "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiAttachmentsOperationRequestMap {
  "CreateAttachment": KustomerFullApiOperationInput<"CreateAttachment">;
  "GetOutboundAttachmentByID": KustomerFullApiOperationInput<"GetOutboundAttachmentByID">;
  "UpsertAttachment": KustomerFullApiOperationInput<"UpsertAttachment">;
  "GetMessageAttachment": KustomerFullApiOperationInput<"GetMessageAttachment">;
}

export interface KustomerFullApiAttachmentsGeneratedClient {
  kustomerCreateAttachment(...args: KustomerFullApiOperationArgs<"CreateAttachment">): Promise<KustomerFullApiOperationResponseMap["CreateAttachment"]>;
  kustomerGetOutboundAttachmentByID(...args: KustomerFullApiOperationArgs<"GetOutboundAttachmentByID">): Promise<KustomerFullApiOperationResponseMap["GetOutboundAttachmentByID"]>;
  kustomerUpsertAttachment(...args: KustomerFullApiOperationArgs<"UpsertAttachment">): Promise<KustomerFullApiOperationResponseMap["UpsertAttachment"]>;
  kustomerGetMessageAttachment(...args: KustomerFullApiOperationArgs<"GetMessageAttachment">): Promise<KustomerFullApiOperationResponseMap["GetMessageAttachment"]>;
}

export const KustomerFullApiAttachmentsGeneratedFunctionNames = [
  "kustomerCreateAttachment",
  "kustomerGetOutboundAttachmentByID",
  "kustomerUpsertAttachment",
  "kustomerGetMessageAttachment"
] as const satisfies readonly (keyof KustomerFullApiAttachmentsGeneratedClient)[];

export function createKustomerFullApiAttachmentsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiAttachmentsGeneratedClient {
  return {
    kustomerCreateAttachment: (...args) => callOperation("CreateAttachment", ...(args as KustomerFullApiOperationArgs<"CreateAttachment">)),
    kustomerGetOutboundAttachmentByID: (...args) => callOperation("GetOutboundAttachmentByID", ...(args as KustomerFullApiOperationArgs<"GetOutboundAttachmentByID">)),
    kustomerUpsertAttachment: (...args) => callOperation("UpsertAttachment", ...(args as KustomerFullApiOperationArgs<"UpsertAttachment">)),
    kustomerGetMessageAttachment: (...args) => callOperation("GetMessageAttachment", ...(args as KustomerFullApiOperationArgs<"GetMessageAttachment">)),
  };
}
