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
export const KustomerFullApiConversationsBulkOperationKeys = [
  "BulkDeleteConversations",
  "BulkCreateConversations",
  "BulkBatchUpdateConversations"
] as const;
export type KustomerFullApiConversationsBulkOperationKey = typeof KustomerFullApiConversationsBulkOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiConversationsBulkOperationPathParamMap {
  "BulkDeleteConversations": {};
  "BulkCreateConversations": {};
  "BulkBatchUpdateConversations": {};
}

export interface KustomerFullApiConversationsBulkOperationRequestMap {
  "BulkDeleteConversations": KustomerFullApiOperationInput<"BulkDeleteConversations">;
  "BulkCreateConversations": KustomerFullApiOperationInput<"BulkCreateConversations">;
  "BulkBatchUpdateConversations": KustomerFullApiOperationInput<"BulkBatchUpdateConversations">;
}

export interface KustomerFullApiConversationsBulkGeneratedClient {
  kustomerBulkDeleteConversations(...args: KustomerFullApiOperationArgs<"BulkDeleteConversations">): Promise<KustomerFullApiOperationResponseMap["BulkDeleteConversations"]>;
  kustomerBulkCreateConversations(...args: KustomerFullApiOperationArgs<"BulkCreateConversations">): Promise<KustomerFullApiOperationResponseMap["BulkCreateConversations"]>;
  kustomerBulkBatchUpdateConversations(...args: KustomerFullApiOperationArgs<"BulkBatchUpdateConversations">): Promise<KustomerFullApiOperationResponseMap["BulkBatchUpdateConversations"]>;
}

export const KustomerFullApiConversationsBulkGeneratedFunctionNames = [
  "kustomerBulkDeleteConversations",
  "kustomerBulkCreateConversations",
  "kustomerBulkBatchUpdateConversations"
] as const satisfies readonly (keyof KustomerFullApiConversationsBulkGeneratedClient)[];

export function createKustomerFullApiConversationsBulkGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiConversationsBulkGeneratedClient {
  return {
    kustomerBulkDeleteConversations: (...args) => callOperation("BulkDeleteConversations", ...(args as KustomerFullApiOperationArgs<"BulkDeleteConversations">)),
    kustomerBulkCreateConversations: (...args) => callOperation("BulkCreateConversations", ...(args as KustomerFullApiOperationArgs<"BulkCreateConversations">)),
    kustomerBulkBatchUpdateConversations: (...args) => callOperation("BulkBatchUpdateConversations", ...(args as KustomerFullApiOperationArgs<"BulkBatchUpdateConversations">)),
  };
}
