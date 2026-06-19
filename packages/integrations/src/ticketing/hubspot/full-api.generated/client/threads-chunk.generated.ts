// Generated endpoint chunk for HubSpotFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  HubSpotGeneratedOperationCaller,
  HubSpotFullApiOperationArgs,
  HubSpotFullApiOperationInput,
  HubSpotFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { HubSpotFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const HubSpotFullApiThreadsOperationKeys = [
  "conversations:conversations:3:get-/conversations/v3/conversations/threads",
  "conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}",
  "conversations:conversations:3:delete-/conversations/v3/conversations/threads/{threadId}",
  "conversations:conversations:3:patch-/conversations/v3/conversations/threads/{threadId}",
  "conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages",
  "conversations:conversations:3:post-/conversations/v3/conversations/threads/{threadId}/messages"
] as const;
export type HubSpotFullApiThreadsOperationKey = typeof HubSpotFullApiThreadsOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiThreadsOperationPathParamMap {
  "conversations:conversations:3:get-/conversations/v3/conversations/threads": {};
  "conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}": { "threadId": HubSpotFullApiPathParamValue };
  "conversations:conversations:3:delete-/conversations/v3/conversations/threads/{threadId}": { "threadId": HubSpotFullApiPathParamValue };
  "conversations:conversations:3:patch-/conversations/v3/conversations/threads/{threadId}": { "threadId": HubSpotFullApiPathParamValue };
  "conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages": { "threadId": HubSpotFullApiPathParamValue };
  "conversations:conversations:3:post-/conversations/v3/conversations/threads/{threadId}/messages": { "threadId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiThreadsOperationRequestMap {
  "conversations:conversations:3:get-/conversations/v3/conversations/threads": HubSpotFullApiOperationInput<"conversations:conversations:3:get-/conversations/v3/conversations/threads">;
  "conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}": HubSpotFullApiOperationInput<"conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}">;
  "conversations:conversations:3:delete-/conversations/v3/conversations/threads/{threadId}": HubSpotFullApiOperationInput<"conversations:conversations:3:delete-/conversations/v3/conversations/threads/{threadId}">;
  "conversations:conversations:3:patch-/conversations/v3/conversations/threads/{threadId}": HubSpotFullApiOperationInput<"conversations:conversations:3:patch-/conversations/v3/conversations/threads/{threadId}">;
  "conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages": HubSpotFullApiOperationInput<"conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages">;
  "conversations:conversations:3:post-/conversations/v3/conversations/threads/{threadId}/messages": HubSpotFullApiOperationInput<"conversations:conversations:3:post-/conversations/v3/conversations/threads/{threadId}/messages">;
}

export interface HubSpotFullApiThreadsGeneratedClient {
  ConversationsGetConversationsV3ConversationsThreads(...args: HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/threads">): Promise<HubSpotFullApiOperationResponseMap["conversations:conversations:3:get-/conversations/v3/conversations/threads"]>;
  ConversationsGetConversationsV3ConversationsThreadsThreadId(...args: HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}">): Promise<HubSpotFullApiOperationResponseMap["conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}"]>;
  ConversationsDeleteConversationsV3ConversationsThreadsThreadId(...args: HubSpotFullApiOperationArgs<"conversations:conversations:3:delete-/conversations/v3/conversations/threads/{threadId}">): Promise<HubSpotFullApiOperationResponseMap["conversations:conversations:3:delete-/conversations/v3/conversations/threads/{threadId}"]>;
  ConversationsPatchConversationsV3ConversationsThreadsThreadId(...args: HubSpotFullApiOperationArgs<"conversations:conversations:3:patch-/conversations/v3/conversations/threads/{threadId}">): Promise<HubSpotFullApiOperationResponseMap["conversations:conversations:3:patch-/conversations/v3/conversations/threads/{threadId}"]>;
  ConversationsGetConversationsV3ConversationsThreadsThreadIdMessages(...args: HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages">): Promise<HubSpotFullApiOperationResponseMap["conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages"]>;
  ConversationsPostConversationsV3ConversationsThreadsThreadIdMessages(...args: HubSpotFullApiOperationArgs<"conversations:conversations:3:post-/conversations/v3/conversations/threads/{threadId}/messages">): Promise<HubSpotFullApiOperationResponseMap["conversations:conversations:3:post-/conversations/v3/conversations/threads/{threadId}/messages"]>;
}

export const HubSpotFullApiThreadsGeneratedFunctionNames = [
  "ConversationsGetConversationsV3ConversationsThreads",
  "ConversationsGetConversationsV3ConversationsThreadsThreadId",
  "ConversationsDeleteConversationsV3ConversationsThreadsThreadId",
  "ConversationsPatchConversationsV3ConversationsThreadsThreadId",
  "ConversationsGetConversationsV3ConversationsThreadsThreadIdMessages",
  "ConversationsPostConversationsV3ConversationsThreadsThreadIdMessages"
] as const satisfies readonly (keyof HubSpotFullApiThreadsGeneratedClient)[];

export function createHubSpotFullApiThreadsGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiThreadsGeneratedClient {
  return {
    ConversationsGetConversationsV3ConversationsThreads: (...args) => callOperation("conversations:conversations:3:get-/conversations/v3/conversations/threads", ...(args as HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/threads">)),
    ConversationsGetConversationsV3ConversationsThreadsThreadId: (...args) => callOperation("conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}", ...(args as HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}">)),
    ConversationsDeleteConversationsV3ConversationsThreadsThreadId: (...args) => callOperation("conversations:conversations:3:delete-/conversations/v3/conversations/threads/{threadId}", ...(args as HubSpotFullApiOperationArgs<"conversations:conversations:3:delete-/conversations/v3/conversations/threads/{threadId}">)),
    ConversationsPatchConversationsV3ConversationsThreadsThreadId: (...args) => callOperation("conversations:conversations:3:patch-/conversations/v3/conversations/threads/{threadId}", ...(args as HubSpotFullApiOperationArgs<"conversations:conversations:3:patch-/conversations/v3/conversations/threads/{threadId}">)),
    ConversationsGetConversationsV3ConversationsThreadsThreadIdMessages: (...args) => callOperation("conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages", ...(args as HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages">)),
    ConversationsPostConversationsV3ConversationsThreadsThreadIdMessages: (...args) => callOperation("conversations:conversations:3:post-/conversations/v3/conversations/threads/{threadId}/messages", ...(args as HubSpotFullApiOperationArgs<"conversations:conversations:3:post-/conversations/v3/conversations/threads/{threadId}/messages">)),
  };
}
