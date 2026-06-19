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
export const FrontFullApiCommentsOperationKeys = [
  "get-comment",
  "update-comment",
  "list-comment-mentions",
  "add-comment-reply",
  "list-conversation-comments",
  "add-comment"
] as const;
export type FrontFullApiCommentsOperationKey = typeof FrontFullApiCommentsOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiCommentsOperationPathParamMap {
  "get-comment": { "comment_id": FrontFullApiPathParamValue };
  "update-comment": { "comment_id": FrontFullApiPathParamValue };
  "list-comment-mentions": { "comment_id": FrontFullApiPathParamValue };
  "add-comment-reply": { "comment_id": FrontFullApiPathParamValue };
  "list-conversation-comments": { "conversation_id": FrontFullApiPathParamValue };
  "add-comment": { "conversation_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiCommentsOperationRequestMap {
  "get-comment": FrontFullApiOperationInput<"get-comment">;
  "update-comment": FrontFullApiOperationInput<"update-comment">;
  "list-comment-mentions": FrontFullApiOperationInput<"list-comment-mentions">;
  "add-comment-reply": FrontFullApiOperationInput<"add-comment-reply">;
  "list-conversation-comments": FrontFullApiOperationInput<"list-conversation-comments">;
  "add-comment": FrontFullApiOperationInput<"add-comment">;
}

export interface FrontFullApiCommentsGeneratedClient {
  frontGetComment(...args: FrontFullApiOperationArgs<"get-comment">): Promise<FrontFullApiOperationResponseMap["get-comment"]>;
  frontUpdateComment(...args: FrontFullApiOperationArgs<"update-comment">): Promise<FrontFullApiOperationResponseMap["update-comment"]>;
  frontListCommentMentions(...args: FrontFullApiOperationArgs<"list-comment-mentions">): Promise<FrontFullApiOperationResponseMap["list-comment-mentions"]>;
  frontAddCommentReply(...args: FrontFullApiOperationArgs<"add-comment-reply">): Promise<FrontFullApiOperationResponseMap["add-comment-reply"]>;
  frontListConversationComments(...args: FrontFullApiOperationArgs<"list-conversation-comments">): Promise<FrontFullApiOperationResponseMap["list-conversation-comments"]>;
  frontAddComment(...args: FrontFullApiOperationArgs<"add-comment">): Promise<FrontFullApiOperationResponseMap["add-comment"]>;
}

export const FrontFullApiCommentsGeneratedFunctionNames = [
  "frontGetComment",
  "frontUpdateComment",
  "frontListCommentMentions",
  "frontAddCommentReply",
  "frontListConversationComments",
  "frontAddComment"
] as const satisfies readonly (keyof FrontFullApiCommentsGeneratedClient)[];

export function createFrontFullApiCommentsGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiCommentsGeneratedClient {
  return {
    frontGetComment: (...args) => callOperation("get-comment", ...(args as FrontFullApiOperationArgs<"get-comment">)),
    frontUpdateComment: (...args) => callOperation("update-comment", ...(args as FrontFullApiOperationArgs<"update-comment">)),
    frontListCommentMentions: (...args) => callOperation("list-comment-mentions", ...(args as FrontFullApiOperationArgs<"list-comment-mentions">)),
    frontAddCommentReply: (...args) => callOperation("add-comment-reply", ...(args as FrontFullApiOperationArgs<"add-comment-reply">)),
    frontListConversationComments: (...args) => callOperation("list-conversation-comments", ...(args as FrontFullApiOperationArgs<"list-conversation-comments">)),
    frontAddComment: (...args) => callOperation("add-comment", ...(args as FrontFullApiOperationArgs<"add-comment">)),
  };
}
