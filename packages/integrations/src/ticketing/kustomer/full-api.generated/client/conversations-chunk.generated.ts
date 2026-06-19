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
export const KustomerFullApiConversationsOperationKeys = [
  "GetConversations",
  "CreateaConversation",
  "DeleteConversation",
  "GetConversation",
  "UpdateConversationAttributes",
  "UpdateConversation",
  "GetConversationAttachments",
  "GetConversationEvents",
  "GetConversationbyExternalID"
] as const;
export type KustomerFullApiConversationsOperationKey = typeof KustomerFullApiConversationsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiConversationsOperationPathParamMap {
  "GetConversations": {};
  "CreateaConversation": {};
  "DeleteConversation": { "id": KustomerFullApiPathParamValue };
  "GetConversation": { "id": KustomerFullApiPathParamValue };
  "UpdateConversationAttributes": { "id": KustomerFullApiPathParamValue };
  "UpdateConversation": { "id": KustomerFullApiPathParamValue };
  "GetConversationAttachments": { "id": KustomerFullApiPathParamValue };
  "GetConversationEvents": { "id": KustomerFullApiPathParamValue };
  "GetConversationbyExternalID": { "externalId": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiConversationsOperationRequestMap {
  "GetConversations": KustomerFullApiOperationInput<"GetConversations">;
  "CreateaConversation": KustomerFullApiOperationInput<"CreateaConversation">;
  "DeleteConversation": KustomerFullApiOperationInput<"DeleteConversation">;
  "GetConversation": KustomerFullApiOperationInput<"GetConversation">;
  "UpdateConversationAttributes": KustomerFullApiOperationInput<"UpdateConversationAttributes">;
  "UpdateConversation": KustomerFullApiOperationInput<"UpdateConversation">;
  "GetConversationAttachments": KustomerFullApiOperationInput<"GetConversationAttachments">;
  "GetConversationEvents": KustomerFullApiOperationInput<"GetConversationEvents">;
  "GetConversationbyExternalID": KustomerFullApiOperationInput<"GetConversationbyExternalID">;
}

export interface KustomerFullApiConversationsGeneratedClient {
  kustomerGetConversations(...args: KustomerFullApiOperationArgs<"GetConversations">): Promise<KustomerFullApiOperationResponseMap["GetConversations"]>;
  kustomerCreateaConversation(...args: KustomerFullApiOperationArgs<"CreateaConversation">): Promise<KustomerFullApiOperationResponseMap["CreateaConversation"]>;
  kustomerDeleteConversation(...args: KustomerFullApiOperationArgs<"DeleteConversation">): Promise<KustomerFullApiOperationResponseMap["DeleteConversation"]>;
  kustomerGetConversation(...args: KustomerFullApiOperationArgs<"GetConversation">): Promise<KustomerFullApiOperationResponseMap["GetConversation"]>;
  kustomerUpdateConversationAttributes(...args: KustomerFullApiOperationArgs<"UpdateConversationAttributes">): Promise<KustomerFullApiOperationResponseMap["UpdateConversationAttributes"]>;
  kustomerUpdateConversation(...args: KustomerFullApiOperationArgs<"UpdateConversation">): Promise<KustomerFullApiOperationResponseMap["UpdateConversation"]>;
  kustomerGetConversationAttachments(...args: KustomerFullApiOperationArgs<"GetConversationAttachments">): Promise<KustomerFullApiOperationResponseMap["GetConversationAttachments"]>;
  kustomerGetConversationEvents(...args: KustomerFullApiOperationArgs<"GetConversationEvents">): Promise<KustomerFullApiOperationResponseMap["GetConversationEvents"]>;
  kustomerGetConversationbyExternalID(...args: KustomerFullApiOperationArgs<"GetConversationbyExternalID">): Promise<KustomerFullApiOperationResponseMap["GetConversationbyExternalID"]>;
}

export const KustomerFullApiConversationsGeneratedFunctionNames = [
  "kustomerGetConversations",
  "kustomerCreateaConversation",
  "kustomerDeleteConversation",
  "kustomerGetConversation",
  "kustomerUpdateConversationAttributes",
  "kustomerUpdateConversation",
  "kustomerGetConversationAttachments",
  "kustomerGetConversationEvents",
  "kustomerGetConversationbyExternalID"
] as const satisfies readonly (keyof KustomerFullApiConversationsGeneratedClient)[];

export function createKustomerFullApiConversationsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiConversationsGeneratedClient {
  return {
    kustomerGetConversations: (...args) => callOperation("GetConversations", ...(args as KustomerFullApiOperationArgs<"GetConversations">)),
    kustomerCreateaConversation: (...args) => callOperation("CreateaConversation", ...(args as KustomerFullApiOperationArgs<"CreateaConversation">)),
    kustomerDeleteConversation: (...args) => callOperation("DeleteConversation", ...(args as KustomerFullApiOperationArgs<"DeleteConversation">)),
    kustomerGetConversation: (...args) => callOperation("GetConversation", ...(args as KustomerFullApiOperationArgs<"GetConversation">)),
    kustomerUpdateConversationAttributes: (...args) => callOperation("UpdateConversationAttributes", ...(args as KustomerFullApiOperationArgs<"UpdateConversationAttributes">)),
    kustomerUpdateConversation: (...args) => callOperation("UpdateConversation", ...(args as KustomerFullApiOperationArgs<"UpdateConversation">)),
    kustomerGetConversationAttachments: (...args) => callOperation("GetConversationAttachments", ...(args as KustomerFullApiOperationArgs<"GetConversationAttachments">)),
    kustomerGetConversationEvents: (...args) => callOperation("GetConversationEvents", ...(args as KustomerFullApiOperationArgs<"GetConversationEvents">)),
    kustomerGetConversationbyExternalID: (...args) => callOperation("GetConversationbyExternalID", ...(args as KustomerFullApiOperationArgs<"GetConversationbyExternalID">)),
  };
}
