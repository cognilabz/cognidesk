// Generated endpoint chunk for ElevenLabsFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ElevenLabsGeneratedOperationCaller,
  ElevenLabsFullApiOperationArgs,
  ElevenLabsFullApiOperationInput,
  ElevenLabsFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ElevenLabsFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ElevenLabsFullApiConversationalAIOperationKeys = [
  "POST /v1/convai/knowledge-base/folder",
  "POST /v1/convai/knowledge-base/{document_id}/move",
  "POST /v1/convai/knowledge-base/bulk-move"
] as const;
export type ElevenLabsFullApiConversationalAIOperationKey = typeof ElevenLabsFullApiConversationalAIOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiConversationalAIOperationPathParamMap {
  "POST /v1/convai/knowledge-base/folder": {};
  "POST /v1/convai/knowledge-base/{document_id}/move": { "document_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/knowledge-base/bulk-move": {};
}

export interface ElevenLabsFullApiConversationalAIOperationRequestMap {
  "POST /v1/convai/knowledge-base/folder": ElevenLabsFullApiOperationInput<"POST /v1/convai/knowledge-base/folder">;
  "POST /v1/convai/knowledge-base/{document_id}/move": ElevenLabsFullApiOperationInput<"POST /v1/convai/knowledge-base/{document_id}/move">;
  "POST /v1/convai/knowledge-base/bulk-move": ElevenLabsFullApiOperationInput<"POST /v1/convai/knowledge-base/bulk-move">;
}

export interface ElevenLabsFullApiConversationalAIGeneratedClient {
  CreateFolderRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/knowledge-base/folder">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/knowledge-base/folder"]>;
  PostKnowledgeBaseMoveRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/knowledge-base/{document_id}/move">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/knowledge-base/{document_id}/move"]>;
  PostKnowledgeBaseBulkMoveRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/knowledge-base/bulk-move">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/knowledge-base/bulk-move"]>;
}

export const ElevenLabsFullApiConversationalAIGeneratedFunctionNames = [
  "CreateFolderRoute",
  "PostKnowledgeBaseMoveRoute",
  "PostKnowledgeBaseBulkMoveRoute"
] as const satisfies readonly (keyof ElevenLabsFullApiConversationalAIGeneratedClient)[];

export function createElevenLabsFullApiConversationalAIGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiConversationalAIGeneratedClient {
  return {
    CreateFolderRoute: (...args) => callOperation("POST /v1/convai/knowledge-base/folder", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/knowledge-base/folder">)),
    PostKnowledgeBaseMoveRoute: (...args) => callOperation("POST /v1/convai/knowledge-base/{document_id}/move", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/knowledge-base/{document_id}/move">)),
    PostKnowledgeBaseBulkMoveRoute: (...args) => callOperation("POST /v1/convai/knowledge-base/bulk-move", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/knowledge-base/bulk-move">)),
  };
}
