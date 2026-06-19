// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiKnowledgeManagementOperationKeys = [
  "SearchExternalSources",
  "CreateExternalSource",
  "DeleteExternalSource",
  "GetExternalSource",
  "UpdateExternalSource",
  "upsertKnowledgeManagementDocument",
  "deleteKnowledgeManagementDocument"
] as const;
export type TalkdeskFullApiKnowledgeManagementOperationKey = typeof TalkdeskFullApiKnowledgeManagementOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiKnowledgeManagementOperationPathParamMap {
  "SearchExternalSources": {};
  "CreateExternalSource": {};
  "DeleteExternalSource": { "external_source_id": TalkdeskFullApiPathParamValue };
  "GetExternalSource": { "external_source_id": TalkdeskFullApiPathParamValue };
  "UpdateExternalSource": { "external_source_id": TalkdeskFullApiPathParamValue };
  "upsertKnowledgeManagementDocument": { "external_source_id": TalkdeskFullApiPathParamValue; "doc_id": TalkdeskFullApiPathParamValue };
  "deleteKnowledgeManagementDocument": { "external_source_id": TalkdeskFullApiPathParamValue; "doc_id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiKnowledgeManagementOperationRequestMap {
  "SearchExternalSources": TalkdeskFullApiOperationInput<"SearchExternalSources">;
  "CreateExternalSource": TalkdeskFullApiOperationInput<"CreateExternalSource">;
  "DeleteExternalSource": TalkdeskFullApiOperationInput<"DeleteExternalSource">;
  "GetExternalSource": TalkdeskFullApiOperationInput<"GetExternalSource">;
  "UpdateExternalSource": TalkdeskFullApiOperationInput<"UpdateExternalSource">;
  "upsertKnowledgeManagementDocument": TalkdeskFullApiOperationInput<"upsertKnowledgeManagementDocument">;
  "deleteKnowledgeManagementDocument": TalkdeskFullApiOperationInput<"deleteKnowledgeManagementDocument">;
}

export interface TalkdeskFullApiKnowledgeManagementGeneratedClient {
  SearchExternalSources(...args: TalkdeskFullApiOperationArgs<"SearchExternalSources">): Promise<TalkdeskFullApiOperationResponseMap["SearchExternalSources"]>;
  CreateExternalSource(...args: TalkdeskFullApiOperationArgs<"CreateExternalSource">): Promise<TalkdeskFullApiOperationResponseMap["CreateExternalSource"]>;
  DeleteExternalSource(...args: TalkdeskFullApiOperationArgs<"DeleteExternalSource">): Promise<TalkdeskFullApiOperationResponseMap["DeleteExternalSource"]>;
  GetExternalSource(...args: TalkdeskFullApiOperationArgs<"GetExternalSource">): Promise<TalkdeskFullApiOperationResponseMap["GetExternalSource"]>;
  UpdateExternalSource(...args: TalkdeskFullApiOperationArgs<"UpdateExternalSource">): Promise<TalkdeskFullApiOperationResponseMap["UpdateExternalSource"]>;
  UpsertKnowledgeManagementDocument(...args: TalkdeskFullApiOperationArgs<"upsertKnowledgeManagementDocument">): Promise<TalkdeskFullApiOperationResponseMap["upsertKnowledgeManagementDocument"]>;
  DeleteKnowledgeManagementDocument(...args: TalkdeskFullApiOperationArgs<"deleteKnowledgeManagementDocument">): Promise<TalkdeskFullApiOperationResponseMap["deleteKnowledgeManagementDocument"]>;
}

export const TalkdeskFullApiKnowledgeManagementGeneratedFunctionNames = [
  "SearchExternalSources",
  "CreateExternalSource",
  "DeleteExternalSource",
  "GetExternalSource",
  "UpdateExternalSource",
  "UpsertKnowledgeManagementDocument",
  "DeleteKnowledgeManagementDocument"
] as const satisfies readonly (keyof TalkdeskFullApiKnowledgeManagementGeneratedClient)[];

export function createTalkdeskFullApiKnowledgeManagementGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiKnowledgeManagementGeneratedClient {
  return {
    SearchExternalSources: (...args) => callOperation("SearchExternalSources", ...(args as TalkdeskFullApiOperationArgs<"SearchExternalSources">)),
    CreateExternalSource: (...args) => callOperation("CreateExternalSource", ...(args as TalkdeskFullApiOperationArgs<"CreateExternalSource">)),
    DeleteExternalSource: (...args) => callOperation("DeleteExternalSource", ...(args as TalkdeskFullApiOperationArgs<"DeleteExternalSource">)),
    GetExternalSource: (...args) => callOperation("GetExternalSource", ...(args as TalkdeskFullApiOperationArgs<"GetExternalSource">)),
    UpdateExternalSource: (...args) => callOperation("UpdateExternalSource", ...(args as TalkdeskFullApiOperationArgs<"UpdateExternalSource">)),
    UpsertKnowledgeManagementDocument: (...args) => callOperation("upsertKnowledgeManagementDocument", ...(args as TalkdeskFullApiOperationArgs<"upsertKnowledgeManagementDocument">)),
    DeleteKnowledgeManagementDocument: (...args) => callOperation("deleteKnowledgeManagementDocument", ...(args as TalkdeskFullApiOperationArgs<"deleteKnowledgeManagementDocument">)),
  };
}
