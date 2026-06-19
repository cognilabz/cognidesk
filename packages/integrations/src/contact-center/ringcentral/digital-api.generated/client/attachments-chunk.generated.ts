// Generated endpoint chunk for RingCentralDigitalApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralDigitalGeneratedOperationCaller,
  RingCentralDigitalApiOperationArgs,
  RingCentralDigitalApiOperationInput,
  RingCentralDigitalApiPathParamValue,
} from "../../digital-api-client.generated.js";
import type { RingCentralDigitalApiOperationResponseMap } from "../../digital-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralDigitalApiAttachmentsOperationKeys = [
  "GET /attachments",
  "POST /attachments",
  "GET /attachments/{attachmentId}"
] as const;
export type RingCentralDigitalApiAttachmentsOperationKey = typeof RingCentralDigitalApiAttachmentsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiAttachmentsOperationPathParamMap {
  "GET /attachments": {};
  "POST /attachments": {};
  "GET /attachments/{attachmentId}": { "attachmentId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiAttachmentsOperationRequestMap {
  "GET /attachments": RingCentralDigitalApiOperationInput<"GET /attachments">;
  "POST /attachments": RingCentralDigitalApiOperationInput<"POST /attachments">;
  "GET /attachments/{attachmentId}": RingCentralDigitalApiOperationInput<"GET /attachments/{attachmentId}">;
}

export interface RingCentralDigitalApiAttachmentsGeneratedClient {
  GetAllAttachments(...args: RingCentralDigitalApiOperationArgs<"GET /attachments">): Promise<RingCentralDigitalApiOperationResponseMap["GET /attachments"]>;
  CreateAttachment(...args: RingCentralDigitalApiOperationArgs<"POST /attachments">): Promise<RingCentralDigitalApiOperationResponseMap["POST /attachments"]>;
  GetAttachment(...args: RingCentralDigitalApiOperationArgs<"GET /attachments/{attachmentId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /attachments/{attachmentId}"]>;
}

export const RingCentralDigitalApiAttachmentsGeneratedFunctionNames = [
  "GetAllAttachments",
  "CreateAttachment",
  "GetAttachment"
] as const satisfies readonly (keyof RingCentralDigitalApiAttachmentsGeneratedClient)[];

export function createRingCentralDigitalApiAttachmentsGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiAttachmentsGeneratedClient {
  return {
    GetAllAttachments: (...args) => callOperation("GET /attachments", ...(args as RingCentralDigitalApiOperationArgs<"GET /attachments">)),
    CreateAttachment: (...args) => callOperation("POST /attachments", ...(args as RingCentralDigitalApiOperationArgs<"POST /attachments">)),
    GetAttachment: (...args) => callOperation("GET /attachments/{attachmentId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /attachments/{attachmentId}">)),
  };
}
