// Generated endpoint chunk for IntercomFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  IntercomGeneratedOperationCaller,
  IntercomFullApiOperationArgs,
  IntercomFullApiOperationInput,
  IntercomFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { IntercomFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const IntercomFullApiConversationsOperationKeys = [
  "listConversations",
  "createConversation",
  "deleteConversation",
  "retrieveConversation",
  "updateConversation",
  "convertConversationToTicket",
  "attachContactToConversation",
  "detachContactFromConversation",
  "manageConversation",
  "replyConversation",
  "redactConversation",
  "searchConversations"
] as const;
export type IntercomFullApiConversationsOperationKey = typeof IntercomFullApiConversationsOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiConversationsOperationPathParamMap {
  "listConversations": {};
  "createConversation": {};
  "deleteConversation": { "conversation_id": IntercomFullApiPathParamValue };
  "retrieveConversation": { "conversation_id": IntercomFullApiPathParamValue };
  "updateConversation": { "conversation_id": IntercomFullApiPathParamValue };
  "convertConversationToTicket": { "conversation_id": IntercomFullApiPathParamValue };
  "attachContactToConversation": { "conversation_id": IntercomFullApiPathParamValue };
  "detachContactFromConversation": { "conversation_id": IntercomFullApiPathParamValue; "contact_id": IntercomFullApiPathParamValue };
  "manageConversation": { "conversation_id": IntercomFullApiPathParamValue };
  "replyConversation": { "conversation_id": IntercomFullApiPathParamValue };
  "redactConversation": {};
  "searchConversations": {};
}

export interface IntercomFullApiConversationsOperationRequestMap {
  "listConversations": IntercomFullApiOperationInput<"listConversations">;
  "createConversation": IntercomFullApiOperationInput<"createConversation">;
  "deleteConversation": IntercomFullApiOperationInput<"deleteConversation">;
  "retrieveConversation": IntercomFullApiOperationInput<"retrieveConversation">;
  "updateConversation": IntercomFullApiOperationInput<"updateConversation">;
  "convertConversationToTicket": IntercomFullApiOperationInput<"convertConversationToTicket">;
  "attachContactToConversation": IntercomFullApiOperationInput<"attachContactToConversation">;
  "detachContactFromConversation": IntercomFullApiOperationInput<"detachContactFromConversation">;
  "manageConversation": IntercomFullApiOperationInput<"manageConversation">;
  "replyConversation": IntercomFullApiOperationInput<"replyConversation">;
  "redactConversation": IntercomFullApiOperationInput<"redactConversation">;
  "searchConversations": IntercomFullApiOperationInput<"searchConversations">;
}

export interface IntercomFullApiConversationsGeneratedClient {
  intercomListConversations(...args: IntercomFullApiOperationArgs<"listConversations">): Promise<IntercomFullApiOperationResponseMap["listConversations"]>;
  intercomCreateConversation(...args: IntercomFullApiOperationArgs<"createConversation">): Promise<IntercomFullApiOperationResponseMap["createConversation"]>;
  intercomDeleteConversation(...args: IntercomFullApiOperationArgs<"deleteConversation">): Promise<IntercomFullApiOperationResponseMap["deleteConversation"]>;
  intercomRetrieveConversation(...args: IntercomFullApiOperationArgs<"retrieveConversation">): Promise<IntercomFullApiOperationResponseMap["retrieveConversation"]>;
  intercomUpdateConversation(...args: IntercomFullApiOperationArgs<"updateConversation">): Promise<IntercomFullApiOperationResponseMap["updateConversation"]>;
  intercomConvertConversationToTicket(...args: IntercomFullApiOperationArgs<"convertConversationToTicket">): Promise<IntercomFullApiOperationResponseMap["convertConversationToTicket"]>;
  intercomAttachContactToConversation(...args: IntercomFullApiOperationArgs<"attachContactToConversation">): Promise<IntercomFullApiOperationResponseMap["attachContactToConversation"]>;
  intercomDetachContactFromConversation(...args: IntercomFullApiOperationArgs<"detachContactFromConversation">): Promise<IntercomFullApiOperationResponseMap["detachContactFromConversation"]>;
  intercomManageConversation(...args: IntercomFullApiOperationArgs<"manageConversation">): Promise<IntercomFullApiOperationResponseMap["manageConversation"]>;
  intercomReplyConversation(...args: IntercomFullApiOperationArgs<"replyConversation">): Promise<IntercomFullApiOperationResponseMap["replyConversation"]>;
  intercomRedactConversation(...args: IntercomFullApiOperationArgs<"redactConversation">): Promise<IntercomFullApiOperationResponseMap["redactConversation"]>;
  intercomSearchConversations(...args: IntercomFullApiOperationArgs<"searchConversations">): Promise<IntercomFullApiOperationResponseMap["searchConversations"]>;
}

export const IntercomFullApiConversationsGeneratedFunctionNames = [
  "intercomListConversations",
  "intercomCreateConversation",
  "intercomDeleteConversation",
  "intercomRetrieveConversation",
  "intercomUpdateConversation",
  "intercomConvertConversationToTicket",
  "intercomAttachContactToConversation",
  "intercomDetachContactFromConversation",
  "intercomManageConversation",
  "intercomReplyConversation",
  "intercomRedactConversation",
  "intercomSearchConversations"
] as const satisfies readonly (keyof IntercomFullApiConversationsGeneratedClient)[];

export function createIntercomFullApiConversationsGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiConversationsGeneratedClient {
  return {
    intercomListConversations: (...args) => callOperation("listConversations", ...(args as IntercomFullApiOperationArgs<"listConversations">)),
    intercomCreateConversation: (...args) => callOperation("createConversation", ...(args as IntercomFullApiOperationArgs<"createConversation">)),
    intercomDeleteConversation: (...args) => callOperation("deleteConversation", ...(args as IntercomFullApiOperationArgs<"deleteConversation">)),
    intercomRetrieveConversation: (...args) => callOperation("retrieveConversation", ...(args as IntercomFullApiOperationArgs<"retrieveConversation">)),
    intercomUpdateConversation: (...args) => callOperation("updateConversation", ...(args as IntercomFullApiOperationArgs<"updateConversation">)),
    intercomConvertConversationToTicket: (...args) => callOperation("convertConversationToTicket", ...(args as IntercomFullApiOperationArgs<"convertConversationToTicket">)),
    intercomAttachContactToConversation: (...args) => callOperation("attachContactToConversation", ...(args as IntercomFullApiOperationArgs<"attachContactToConversation">)),
    intercomDetachContactFromConversation: (...args) => callOperation("detachContactFromConversation", ...(args as IntercomFullApiOperationArgs<"detachContactFromConversation">)),
    intercomManageConversation: (...args) => callOperation("manageConversation", ...(args as IntercomFullApiOperationArgs<"manageConversation">)),
    intercomReplyConversation: (...args) => callOperation("replyConversation", ...(args as IntercomFullApiOperationArgs<"replyConversation">)),
    intercomRedactConversation: (...args) => callOperation("redactConversation", ...(args as IntercomFullApiOperationArgs<"redactConversation">)),
    intercomSearchConversations: (...args) => callOperation("searchConversations", ...(args as IntercomFullApiOperationArgs<"searchConversations">)),
  };
}
