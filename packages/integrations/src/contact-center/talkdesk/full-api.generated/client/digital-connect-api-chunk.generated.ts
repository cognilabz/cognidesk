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
export const TalkdeskFullApiDigitalConnectAPIOperationKeys = [
  "create-digital-connect-conversations",
  "create-digital-connect-messages",
  "delete-digital-connect-conversation"
] as const;
export type TalkdeskFullApiDigitalConnectAPIOperationKey = typeof TalkdeskFullApiDigitalConnectAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiDigitalConnectAPIOperationPathParamMap {
  "create-digital-connect-conversations": {};
  "create-digital-connect-messages": { "id": TalkdeskFullApiPathParamValue };
  "delete-digital-connect-conversation": { "id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiDigitalConnectAPIOperationRequestMap {
  "create-digital-connect-conversations": TalkdeskFullApiOperationInput<"create-digital-connect-conversations">;
  "create-digital-connect-messages": TalkdeskFullApiOperationInput<"create-digital-connect-messages">;
  "delete-digital-connect-conversation": TalkdeskFullApiOperationInput<"delete-digital-connect-conversation">;
}

export interface TalkdeskFullApiDigitalConnectAPIGeneratedClient {
  CreateDigitalConnectConversations(...args: TalkdeskFullApiOperationArgs<"create-digital-connect-conversations">): Promise<TalkdeskFullApiOperationResponseMap["create-digital-connect-conversations"]>;
  CreateDigitalConnectMessages(...args: TalkdeskFullApiOperationArgs<"create-digital-connect-messages">): Promise<TalkdeskFullApiOperationResponseMap["create-digital-connect-messages"]>;
  DeleteDigitalConnectConversation(...args: TalkdeskFullApiOperationArgs<"delete-digital-connect-conversation">): Promise<TalkdeskFullApiOperationResponseMap["delete-digital-connect-conversation"]>;
}

export const TalkdeskFullApiDigitalConnectAPIGeneratedFunctionNames = [
  "CreateDigitalConnectConversations",
  "CreateDigitalConnectMessages",
  "DeleteDigitalConnectConversation"
] as const satisfies readonly (keyof TalkdeskFullApiDigitalConnectAPIGeneratedClient)[];

export function createTalkdeskFullApiDigitalConnectAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiDigitalConnectAPIGeneratedClient {
  return {
    CreateDigitalConnectConversations: (...args) => callOperation("create-digital-connect-conversations", ...(args as TalkdeskFullApiOperationArgs<"create-digital-connect-conversations">)),
    CreateDigitalConnectMessages: (...args) => callOperation("create-digital-connect-messages", ...(args as TalkdeskFullApiOperationArgs<"create-digital-connect-messages">)),
    DeleteDigitalConnectConversation: (...args) => callOperation("delete-digital-connect-conversation", ...(args as TalkdeskFullApiOperationArgs<"delete-digital-connect-conversation">)),
  };
}
