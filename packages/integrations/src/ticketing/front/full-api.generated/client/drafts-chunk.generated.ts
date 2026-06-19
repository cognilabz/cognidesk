// Generated endpoint chunk for FrontFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  FrontGeneratedOperationCaller,
  FrontFullApiOperationArgs,
  FrontFullApiOperationInput,
  FrontFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { FrontFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const FrontFullApiDraftsOperationKeys = [
  "create-draft",
  "list-conversation-drafts",
  "create-draft-reply",
  "delete-draft",
  "edit-draft"
] as const;
export type FrontFullApiDraftsOperationKey = typeof FrontFullApiDraftsOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiDraftsOperationPathParamMap {
  "create-draft": { "channel_id": FrontFullApiPathParamValue };
  "list-conversation-drafts": { "conversation_id": FrontFullApiPathParamValue };
  "create-draft-reply": { "conversation_id": FrontFullApiPathParamValue };
  "delete-draft": { "draft_id": FrontFullApiPathParamValue };
  "edit-draft": { "message_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiDraftsOperationRequestMap {
  "create-draft": FrontFullApiOperationInput<"create-draft">;
  "list-conversation-drafts": FrontFullApiOperationInput<"list-conversation-drafts">;
  "create-draft-reply": FrontFullApiOperationInput<"create-draft-reply">;
  "delete-draft": FrontFullApiOperationInput<"delete-draft">;
  "edit-draft": FrontFullApiOperationInput<"edit-draft">;
}

export interface FrontFullApiDraftsGeneratedClient {
  frontCreateDraft(...args: FrontFullApiOperationArgs<"create-draft">): Promise<FrontFullApiOperationResponseMap["create-draft"]>;
  frontListConversationDrafts(...args: FrontFullApiOperationArgs<"list-conversation-drafts">): Promise<FrontFullApiOperationResponseMap["list-conversation-drafts"]>;
  frontCreateDraftReply(...args: FrontFullApiOperationArgs<"create-draft-reply">): Promise<FrontFullApiOperationResponseMap["create-draft-reply"]>;
  frontDeleteDraft(...args: FrontFullApiOperationArgs<"delete-draft">): Promise<FrontFullApiOperationResponseMap["delete-draft"]>;
  frontEditDraft(...args: FrontFullApiOperationArgs<"edit-draft">): Promise<FrontFullApiOperationResponseMap["edit-draft"]>;
}

export const FrontFullApiDraftsGeneratedFunctionNames = [
  "frontCreateDraft",
  "frontListConversationDrafts",
  "frontCreateDraftReply",
  "frontDeleteDraft",
  "frontEditDraft"
] as const satisfies readonly (keyof FrontFullApiDraftsGeneratedClient)[];

export function createFrontFullApiDraftsGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiDraftsGeneratedClient {
  return {
    frontCreateDraft: (...args) => callOperation("create-draft", ...(args as FrontFullApiOperationArgs<"create-draft">)),
    frontListConversationDrafts: (...args) => callOperation("list-conversation-drafts", ...(args as FrontFullApiOperationArgs<"list-conversation-drafts">)),
    frontCreateDraftReply: (...args) => callOperation("create-draft-reply", ...(args as FrontFullApiOperationArgs<"create-draft-reply">)),
    frontDeleteDraft: (...args) => callOperation("delete-draft", ...(args as FrontFullApiOperationArgs<"delete-draft">)),
    frontEditDraft: (...args) => callOperation("edit-draft", ...(args as FrontFullApiOperationArgs<"edit-draft">)),
  };
}
