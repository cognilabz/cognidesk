// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiAgentMessagingOperationKeys = [
  "admin-agentmessage-api-docs:get-agent-messages:GET:/communications/agent-messages",
  "admin-agentmessage-api-docs:post-agent-messages:POST:/communications/agent-messages",
  "admin-agentmessage-api-docs:delete-communications-agent-messages:DELETE:/communications/agent-messages",
  "admin-agentmessage-api-docs:get-agent-messages-id:GET:/communications/agent-messages/{messageGroupId}",
  "admin-agentmessage-api-docs:delete-agent-messages-id:DELETE:/communications/agent-messages/{messageGroupId}"
] as const;
export type NiceCxoneFullApiAgentMessagingOperationKey = typeof NiceCxoneFullApiAgentMessagingOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiAgentMessagingOperationPathParamMap {
  "admin-agentmessage-api-docs:get-agent-messages:GET:/communications/agent-messages": {};
  "admin-agentmessage-api-docs:post-agent-messages:POST:/communications/agent-messages": {};
  "admin-agentmessage-api-docs:delete-communications-agent-messages:DELETE:/communications/agent-messages": {};
  "admin-agentmessage-api-docs:get-agent-messages-id:GET:/communications/agent-messages/{messageGroupId}": { "messageGroupId": NiceCxoneFullApiPathParamValue };
  "admin-agentmessage-api-docs:delete-agent-messages-id:DELETE:/communications/agent-messages/{messageGroupId}": { "messageGroupId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiAgentMessagingOperationRequestMap {
  "admin-agentmessage-api-docs:get-agent-messages:GET:/communications/agent-messages": NiceCxoneFullApiOperationInput<"admin-agentmessage-api-docs:get-agent-messages:GET:/communications/agent-messages">;
  "admin-agentmessage-api-docs:post-agent-messages:POST:/communications/agent-messages": NiceCxoneFullApiOperationInput<"admin-agentmessage-api-docs:post-agent-messages:POST:/communications/agent-messages">;
  "admin-agentmessage-api-docs:delete-communications-agent-messages:DELETE:/communications/agent-messages": NiceCxoneFullApiOperationInput<"admin-agentmessage-api-docs:delete-communications-agent-messages:DELETE:/communications/agent-messages">;
  "admin-agentmessage-api-docs:get-agent-messages-id:GET:/communications/agent-messages/{messageGroupId}": NiceCxoneFullApiOperationInput<"admin-agentmessage-api-docs:get-agent-messages-id:GET:/communications/agent-messages/{messageGroupId}">;
  "admin-agentmessage-api-docs:delete-agent-messages-id:DELETE:/communications/agent-messages/{messageGroupId}": NiceCxoneFullApiOperationInput<"admin-agentmessage-api-docs:delete-agent-messages-id:DELETE:/communications/agent-messages/{messageGroupId}">;
}

export interface NiceCxoneFullApiAgentMessagingGeneratedClient {
  AdminAgentmessageApiDocsGetAgentMessages(...args: NiceCxoneFullApiOperationArgs<"admin-agentmessage-api-docs:get-agent-messages:GET:/communications/agent-messages">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agentmessage-api-docs:get-agent-messages:GET:/communications/agent-messages"]>;
  AdminAgentmessageApiDocsPostAgentMessages(...args: NiceCxoneFullApiOperationArgs<"admin-agentmessage-api-docs:post-agent-messages:POST:/communications/agent-messages">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agentmessage-api-docs:post-agent-messages:POST:/communications/agent-messages"]>;
  AdminAgentmessageApiDocsDeleteCommunicationsAgentMessages(...args: NiceCxoneFullApiOperationArgs<"admin-agentmessage-api-docs:delete-communications-agent-messages:DELETE:/communications/agent-messages">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agentmessage-api-docs:delete-communications-agent-messages:DELETE:/communications/agent-messages"]>;
  AdminAgentmessageApiDocsGetAgentMessagesId(...args: NiceCxoneFullApiOperationArgs<"admin-agentmessage-api-docs:get-agent-messages-id:GET:/communications/agent-messages/{messageGroupId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agentmessage-api-docs:get-agent-messages-id:GET:/communications/agent-messages/{messageGroupId}"]>;
  AdminAgentmessageApiDocsDeleteAgentMessagesId(...args: NiceCxoneFullApiOperationArgs<"admin-agentmessage-api-docs:delete-agent-messages-id:DELETE:/communications/agent-messages/{messageGroupId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agentmessage-api-docs:delete-agent-messages-id:DELETE:/communications/agent-messages/{messageGroupId}"]>;
}

export const NiceCxoneFullApiAgentMessagingGeneratedFunctionNames = [
  "AdminAgentmessageApiDocsGetAgentMessages",
  "AdminAgentmessageApiDocsPostAgentMessages",
  "AdminAgentmessageApiDocsDeleteCommunicationsAgentMessages",
  "AdminAgentmessageApiDocsGetAgentMessagesId",
  "AdminAgentmessageApiDocsDeleteAgentMessagesId"
] as const satisfies readonly (keyof NiceCxoneFullApiAgentMessagingGeneratedClient)[];

export function createNiceCxoneFullApiAgentMessagingGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiAgentMessagingGeneratedClient {
  return {
    AdminAgentmessageApiDocsGetAgentMessages: (...args) => callOperation("admin-agentmessage-api-docs:get-agent-messages:GET:/communications/agent-messages", ...(args as NiceCxoneFullApiOperationArgs<"admin-agentmessage-api-docs:get-agent-messages:GET:/communications/agent-messages">)),
    AdminAgentmessageApiDocsPostAgentMessages: (...args) => callOperation("admin-agentmessage-api-docs:post-agent-messages:POST:/communications/agent-messages", ...(args as NiceCxoneFullApiOperationArgs<"admin-agentmessage-api-docs:post-agent-messages:POST:/communications/agent-messages">)),
    AdminAgentmessageApiDocsDeleteCommunicationsAgentMessages: (...args) => callOperation("admin-agentmessage-api-docs:delete-communications-agent-messages:DELETE:/communications/agent-messages", ...(args as NiceCxoneFullApiOperationArgs<"admin-agentmessage-api-docs:delete-communications-agent-messages:DELETE:/communications/agent-messages">)),
    AdminAgentmessageApiDocsGetAgentMessagesId: (...args) => callOperation("admin-agentmessage-api-docs:get-agent-messages-id:GET:/communications/agent-messages/{messageGroupId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-agentmessage-api-docs:get-agent-messages-id:GET:/communications/agent-messages/{messageGroupId}">)),
    AdminAgentmessageApiDocsDeleteAgentMessagesId: (...args) => callOperation("admin-agentmessage-api-docs:delete-agent-messages-id:DELETE:/communications/agent-messages/{messageGroupId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-agentmessage-api-docs:delete-agent-messages-id:DELETE:/communications/agent-messages/{messageGroupId}">)),
  };
}
