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
export const IntercomFullApiTagsOperationKeys = [
  "attachTagToContact",
  "detachTagFromContact",
  "attachTagToConversation",
  "detachTagFromConversation",
  "listTags",
  "createTag",
  "deleteTag",
  "findTag",
  "attachTagToTicket",
  "detachTagFromTicket"
] as const;
export type IntercomFullApiTagsOperationKey = typeof IntercomFullApiTagsOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiTagsOperationPathParamMap {
  "attachTagToContact": { "contact_id": IntercomFullApiPathParamValue };
  "detachTagFromContact": { "contact_id": IntercomFullApiPathParamValue; "tag_id": IntercomFullApiPathParamValue };
  "attachTagToConversation": { "conversation_id": IntercomFullApiPathParamValue };
  "detachTagFromConversation": { "conversation_id": IntercomFullApiPathParamValue; "tag_id": IntercomFullApiPathParamValue };
  "listTags": {};
  "createTag": {};
  "deleteTag": { "tag_id": IntercomFullApiPathParamValue };
  "findTag": { "tag_id": IntercomFullApiPathParamValue };
  "attachTagToTicket": { "ticket_id": IntercomFullApiPathParamValue };
  "detachTagFromTicket": { "ticket_id": IntercomFullApiPathParamValue; "tag_id": IntercomFullApiPathParamValue };
}

export interface IntercomFullApiTagsOperationRequestMap {
  "attachTagToContact": IntercomFullApiOperationInput<"attachTagToContact">;
  "detachTagFromContact": IntercomFullApiOperationInput<"detachTagFromContact">;
  "attachTagToConversation": IntercomFullApiOperationInput<"attachTagToConversation">;
  "detachTagFromConversation": IntercomFullApiOperationInput<"detachTagFromConversation">;
  "listTags": IntercomFullApiOperationInput<"listTags">;
  "createTag": IntercomFullApiOperationInput<"createTag">;
  "deleteTag": IntercomFullApiOperationInput<"deleteTag">;
  "findTag": IntercomFullApiOperationInput<"findTag">;
  "attachTagToTicket": IntercomFullApiOperationInput<"attachTagToTicket">;
  "detachTagFromTicket": IntercomFullApiOperationInput<"detachTagFromTicket">;
}

export interface IntercomFullApiTagsGeneratedClient {
  intercomAttachTagToContact(...args: IntercomFullApiOperationArgs<"attachTagToContact">): Promise<IntercomFullApiOperationResponseMap["attachTagToContact"]>;
  intercomDetachTagFromContact(...args: IntercomFullApiOperationArgs<"detachTagFromContact">): Promise<IntercomFullApiOperationResponseMap["detachTagFromContact"]>;
  intercomAttachTagToConversation(...args: IntercomFullApiOperationArgs<"attachTagToConversation">): Promise<IntercomFullApiOperationResponseMap["attachTagToConversation"]>;
  intercomDetachTagFromConversation(...args: IntercomFullApiOperationArgs<"detachTagFromConversation">): Promise<IntercomFullApiOperationResponseMap["detachTagFromConversation"]>;
  intercomListTags(...args: IntercomFullApiOperationArgs<"listTags">): Promise<IntercomFullApiOperationResponseMap["listTags"]>;
  intercomCreateTag(...args: IntercomFullApiOperationArgs<"createTag">): Promise<IntercomFullApiOperationResponseMap["createTag"]>;
  intercomDeleteTag(...args: IntercomFullApiOperationArgs<"deleteTag">): Promise<IntercomFullApiOperationResponseMap["deleteTag"]>;
  intercomFindTag(...args: IntercomFullApiOperationArgs<"findTag">): Promise<IntercomFullApiOperationResponseMap["findTag"]>;
  intercomAttachTagToTicket(...args: IntercomFullApiOperationArgs<"attachTagToTicket">): Promise<IntercomFullApiOperationResponseMap["attachTagToTicket"]>;
  intercomDetachTagFromTicket(...args: IntercomFullApiOperationArgs<"detachTagFromTicket">): Promise<IntercomFullApiOperationResponseMap["detachTagFromTicket"]>;
}

export const IntercomFullApiTagsGeneratedFunctionNames = [
  "intercomAttachTagToContact",
  "intercomDetachTagFromContact",
  "intercomAttachTagToConversation",
  "intercomDetachTagFromConversation",
  "intercomListTags",
  "intercomCreateTag",
  "intercomDeleteTag",
  "intercomFindTag",
  "intercomAttachTagToTicket",
  "intercomDetachTagFromTicket"
] as const satisfies readonly (keyof IntercomFullApiTagsGeneratedClient)[];

export function createIntercomFullApiTagsGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiTagsGeneratedClient {
  return {
    intercomAttachTagToContact: (...args) => callOperation("attachTagToContact", ...(args as IntercomFullApiOperationArgs<"attachTagToContact">)),
    intercomDetachTagFromContact: (...args) => callOperation("detachTagFromContact", ...(args as IntercomFullApiOperationArgs<"detachTagFromContact">)),
    intercomAttachTagToConversation: (...args) => callOperation("attachTagToConversation", ...(args as IntercomFullApiOperationArgs<"attachTagToConversation">)),
    intercomDetachTagFromConversation: (...args) => callOperation("detachTagFromConversation", ...(args as IntercomFullApiOperationArgs<"detachTagFromConversation">)),
    intercomListTags: (...args) => callOperation("listTags", ...(args as IntercomFullApiOperationArgs<"listTags">)),
    intercomCreateTag: (...args) => callOperation("createTag", ...(args as IntercomFullApiOperationArgs<"createTag">)),
    intercomDeleteTag: (...args) => callOperation("deleteTag", ...(args as IntercomFullApiOperationArgs<"deleteTag">)),
    intercomFindTag: (...args) => callOperation("findTag", ...(args as IntercomFullApiOperationArgs<"findTag">)),
    intercomAttachTagToTicket: (...args) => callOperation("attachTagToTicket", ...(args as IntercomFullApiOperationArgs<"attachTagToTicket">)),
    intercomDetachTagFromTicket: (...args) => callOperation("detachTagFromTicket", ...(args as IntercomFullApiOperationArgs<"detachTagFromTicket">)),
  };
}
