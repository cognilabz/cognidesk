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
export const KustomerFullApiTagsKnowledgeBaseOperationKeys = [
  "GetTags",
  "CreateTag",
  "GetTagsbyID",
  "UpdateTag"
] as const;
export type KustomerFullApiTagsKnowledgeBaseOperationKey = typeof KustomerFullApiTagsKnowledgeBaseOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiTagsKnowledgeBaseOperationPathParamMap {
  "GetTags": {};
  "CreateTag": {};
  "GetTagsbyID": { "id": KustomerFullApiPathParamValue };
  "UpdateTag": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiTagsKnowledgeBaseOperationRequestMap {
  "GetTags": KustomerFullApiOperationInput<"GetTags">;
  "CreateTag": KustomerFullApiOperationInput<"CreateTag">;
  "GetTagsbyID": KustomerFullApiOperationInput<"GetTagsbyID">;
  "UpdateTag": KustomerFullApiOperationInput<"UpdateTag">;
}

export interface KustomerFullApiTagsKnowledgeBaseGeneratedClient {
  kustomerGetTags(...args: KustomerFullApiOperationArgs<"GetTags">): Promise<KustomerFullApiOperationResponseMap["GetTags"]>;
  kustomerCreateTag(...args: KustomerFullApiOperationArgs<"CreateTag">): Promise<KustomerFullApiOperationResponseMap["CreateTag"]>;
  kustomerGetTagsbyID(...args: KustomerFullApiOperationArgs<"GetTagsbyID">): Promise<KustomerFullApiOperationResponseMap["GetTagsbyID"]>;
  kustomerUpdateTag(...args: KustomerFullApiOperationArgs<"UpdateTag">): Promise<KustomerFullApiOperationResponseMap["UpdateTag"]>;
}

export const KustomerFullApiTagsKnowledgeBaseGeneratedFunctionNames = [
  "kustomerGetTags",
  "kustomerCreateTag",
  "kustomerGetTagsbyID",
  "kustomerUpdateTag"
] as const satisfies readonly (keyof KustomerFullApiTagsKnowledgeBaseGeneratedClient)[];

export function createKustomerFullApiTagsKnowledgeBaseGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiTagsKnowledgeBaseGeneratedClient {
  return {
    kustomerGetTags: (...args) => callOperation("GetTags", ...(args as KustomerFullApiOperationArgs<"GetTags">)),
    kustomerCreateTag: (...args) => callOperation("CreateTag", ...(args as KustomerFullApiOperationArgs<"CreateTag">)),
    kustomerGetTagsbyID: (...args) => callOperation("GetTagsbyID", ...(args as KustomerFullApiOperationArgs<"GetTagsbyID">)),
    kustomerUpdateTag: (...args) => callOperation("UpdateTag", ...(args as KustomerFullApiOperationArgs<"UpdateTag">)),
  };
}
