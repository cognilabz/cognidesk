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
export const KustomerFullApiKnowledgeBasesOperationKeys = [
  "CreateKnowledgeBase",
  "GetKnowledgeBasebyID",
  "UpdateKnowledgeBase"
] as const;
export type KustomerFullApiKnowledgeBasesOperationKey = typeof KustomerFullApiKnowledgeBasesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiKnowledgeBasesOperationPathParamMap {
  "CreateKnowledgeBase": {};
  "GetKnowledgeBasebyID": { "id": KustomerFullApiPathParamValue };
  "UpdateKnowledgeBase": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiKnowledgeBasesOperationRequestMap {
  "CreateKnowledgeBase": KustomerFullApiOperationInput<"CreateKnowledgeBase">;
  "GetKnowledgeBasebyID": KustomerFullApiOperationInput<"GetKnowledgeBasebyID">;
  "UpdateKnowledgeBase": KustomerFullApiOperationInput<"UpdateKnowledgeBase">;
}

export interface KustomerFullApiKnowledgeBasesGeneratedClient {
  kustomerCreateKnowledgeBase(...args: KustomerFullApiOperationArgs<"CreateKnowledgeBase">): Promise<KustomerFullApiOperationResponseMap["CreateKnowledgeBase"]>;
  kustomerGetKnowledgeBasebyID(...args: KustomerFullApiOperationArgs<"GetKnowledgeBasebyID">): Promise<KustomerFullApiOperationResponseMap["GetKnowledgeBasebyID"]>;
  kustomerUpdateKnowledgeBase(...args: KustomerFullApiOperationArgs<"UpdateKnowledgeBase">): Promise<KustomerFullApiOperationResponseMap["UpdateKnowledgeBase"]>;
}

export const KustomerFullApiKnowledgeBasesGeneratedFunctionNames = [
  "kustomerCreateKnowledgeBase",
  "kustomerGetKnowledgeBasebyID",
  "kustomerUpdateKnowledgeBase"
] as const satisfies readonly (keyof KustomerFullApiKnowledgeBasesGeneratedClient)[];

export function createKustomerFullApiKnowledgeBasesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiKnowledgeBasesGeneratedClient {
  return {
    kustomerCreateKnowledgeBase: (...args) => callOperation("CreateKnowledgeBase", ...(args as KustomerFullApiOperationArgs<"CreateKnowledgeBase">)),
    kustomerGetKnowledgeBasebyID: (...args) => callOperation("GetKnowledgeBasebyID", ...(args as KustomerFullApiOperationArgs<"GetKnowledgeBasebyID">)),
    kustomerUpdateKnowledgeBase: (...args) => callOperation("UpdateKnowledgeBase", ...(args as KustomerFullApiOperationArgs<"UpdateKnowledgeBase">)),
  };
}
