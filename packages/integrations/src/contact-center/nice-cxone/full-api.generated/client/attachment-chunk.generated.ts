// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiAttachmentOperationKeys = [
  "digital-attachment-api-docs:post_attachments_temporary:POST:/attachments/temporary"
] as const;
export type NiceCxoneFullApiAttachmentOperationKey = typeof NiceCxoneFullApiAttachmentOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiAttachmentOperationPathParamMap {
  "digital-attachment-api-docs:post_attachments_temporary:POST:/attachments/temporary": {};
}

export interface NiceCxoneFullApiAttachmentOperationRequestMap {
  "digital-attachment-api-docs:post_attachments_temporary:POST:/attachments/temporary": NiceCxoneFullApiOperationInput<"digital-attachment-api-docs:post_attachments_temporary:POST:/attachments/temporary">;
}

export interface NiceCxoneFullApiAttachmentGeneratedClient {
  DigitalAttachmentApiDocsPostAttachmentsTemporary(...args: NiceCxoneFullApiOperationArgs<"digital-attachment-api-docs:post_attachments_temporary:POST:/attachments/temporary">): Promise<NiceCxoneFullApiOperationResponseMap["digital-attachment-api-docs:post_attachments_temporary:POST:/attachments/temporary"]>;
}

export const NiceCxoneFullApiAttachmentGeneratedFunctionNames = [
  "DigitalAttachmentApiDocsPostAttachmentsTemporary"
] as const satisfies readonly (keyof NiceCxoneFullApiAttachmentGeneratedClient)[];

export function createNiceCxoneFullApiAttachmentGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiAttachmentGeneratedClient {
  return {
    DigitalAttachmentApiDocsPostAttachmentsTemporary: (...args) => callOperation("digital-attachment-api-docs:post_attachments_temporary:POST:/attachments/temporary", ...(args as NiceCxoneFullApiOperationArgs<"digital-attachment-api-docs:post_attachments_temporary:POST:/attachments/temporary">)),
  };
}
