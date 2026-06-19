// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiTicketCommentsOperationKeys = [
  "CountTicketComments",
  "ListTicketComments",
  "MakeTicketCommentPrivate",
  "RedactChatComment",
  "RedactChatCommentAttachment",
  "RedactStringInComment",
  "RedactTicketCommentInAgentWorkspace"
] as const;
export type ZendeskFullApiTicketCommentsOperationKey = typeof ZendeskFullApiTicketCommentsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiTicketCommentsOperationPathParamMap {
  "CountTicketComments": { "ticket_id": ZendeskFullApiPathParamValue };
  "ListTicketComments": { "ticket_id": ZendeskFullApiPathParamValue };
  "MakeTicketCommentPrivate": { "ticket_id": ZendeskFullApiPathParamValue; "ticket_comment_id": ZendeskFullApiPathParamValue };
  "RedactChatComment": { "ticket_id": ZendeskFullApiPathParamValue };
  "RedactChatCommentAttachment": { "ticket_id": ZendeskFullApiPathParamValue };
  "RedactStringInComment": { "ticket_id": ZendeskFullApiPathParamValue; "ticket_comment_id": ZendeskFullApiPathParamValue };
  "RedactTicketCommentInAgentWorkspace": { "ticket_comment_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiTicketCommentsOperationRequestMap {
  "CountTicketComments": ZendeskFullApiOperationInput<"CountTicketComments">;
  "ListTicketComments": ZendeskFullApiOperationInput<"ListTicketComments">;
  "MakeTicketCommentPrivate": ZendeskFullApiOperationInput<"MakeTicketCommentPrivate">;
  "RedactChatComment": ZendeskFullApiOperationInput<"RedactChatComment">;
  "RedactChatCommentAttachment": ZendeskFullApiOperationInput<"RedactChatCommentAttachment">;
  "RedactStringInComment": ZendeskFullApiOperationInput<"RedactStringInComment">;
  "RedactTicketCommentInAgentWorkspace": ZendeskFullApiOperationInput<"RedactTicketCommentInAgentWorkspace">;
}

export interface ZendeskFullApiTicketCommentsGeneratedClient {
  CountTicketComments(...args: ZendeskFullApiOperationArgs<"CountTicketComments">): Promise<ZendeskFullApiOperationResponseMap["CountTicketComments"]>;
  ListTicketComments(...args: ZendeskFullApiOperationArgs<"ListTicketComments">): Promise<ZendeskFullApiOperationResponseMap["ListTicketComments"]>;
  MakeTicketCommentPrivate(...args: ZendeskFullApiOperationArgs<"MakeTicketCommentPrivate">): Promise<ZendeskFullApiOperationResponseMap["MakeTicketCommentPrivate"]>;
  RedactChatComment(...args: ZendeskFullApiOperationArgs<"RedactChatComment">): Promise<ZendeskFullApiOperationResponseMap["RedactChatComment"]>;
  RedactChatCommentAttachment(...args: ZendeskFullApiOperationArgs<"RedactChatCommentAttachment">): Promise<ZendeskFullApiOperationResponseMap["RedactChatCommentAttachment"]>;
  RedactStringInComment(...args: ZendeskFullApiOperationArgs<"RedactStringInComment">): Promise<ZendeskFullApiOperationResponseMap["RedactStringInComment"]>;
  RedactTicketCommentInAgentWorkspace(...args: ZendeskFullApiOperationArgs<"RedactTicketCommentInAgentWorkspace">): Promise<ZendeskFullApiOperationResponseMap["RedactTicketCommentInAgentWorkspace"]>;
}

export const ZendeskFullApiTicketCommentsGeneratedFunctionNames = [
  "CountTicketComments",
  "ListTicketComments",
  "MakeTicketCommentPrivate",
  "RedactChatComment",
  "RedactChatCommentAttachment",
  "RedactStringInComment",
  "RedactTicketCommentInAgentWorkspace"
] as const satisfies readonly (keyof ZendeskFullApiTicketCommentsGeneratedClient)[];

export function createZendeskFullApiTicketCommentsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiTicketCommentsGeneratedClient {
  return {
    CountTicketComments: (...args) => callOperation("CountTicketComments", ...(args as ZendeskFullApiOperationArgs<"CountTicketComments">)),
    ListTicketComments: (...args) => callOperation("ListTicketComments", ...(args as ZendeskFullApiOperationArgs<"ListTicketComments">)),
    MakeTicketCommentPrivate: (...args) => callOperation("MakeTicketCommentPrivate", ...(args as ZendeskFullApiOperationArgs<"MakeTicketCommentPrivate">)),
    RedactChatComment: (...args) => callOperation("RedactChatComment", ...(args as ZendeskFullApiOperationArgs<"RedactChatComment">)),
    RedactChatCommentAttachment: (...args) => callOperation("RedactChatCommentAttachment", ...(args as ZendeskFullApiOperationArgs<"RedactChatCommentAttachment">)),
    RedactStringInComment: (...args) => callOperation("RedactStringInComment", ...(args as ZendeskFullApiOperationArgs<"RedactStringInComment">)),
    RedactTicketCommentInAgentWorkspace: (...args) => callOperation("RedactTicketCommentInAgentWorkspace", ...(args as ZendeskFullApiOperationArgs<"RedactTicketCommentInAgentWorkspace">)),
  };
}
