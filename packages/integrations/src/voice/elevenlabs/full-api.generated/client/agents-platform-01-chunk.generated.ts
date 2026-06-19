// Generated endpoint chunk for ElevenLabsFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ElevenLabsGeneratedOperationCaller,
  ElevenLabsFullApiOperationArgs,
  ElevenLabsFullApiOperationInput,
  ElevenLabsFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ElevenLabsFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ElevenLabsFullApiAgentsPlatform01OperationKeys = [
  "GET /v1/convai/conversation/get-signed-url",
  "GET /v1/convai/conversation/get_signed_url",
  "GET /v1/convai/conversation/token",
  "POST /v1/convai/twilio/outbound-call",
  "POST /v1/convai/twilio/register-call",
  "POST /v1/convai/exotel/outbound-call",
  "POST /v1/convai/whatsapp/outbound-call",
  "POST /v1/convai/whatsapp/outbound-message",
  "POST /v1/convai/agents/create",
  "GET /v1/convai/agents/summaries",
  "GET /v1/convai/agents/{agent_id}",
  "PATCH /v1/convai/agents/{agent_id}",
  "DELETE /v1/convai/agents/{agent_id}",
  "GET /v1/convai/agents/{agent_id}/widget",
  "GET /v1/convai/agents/{agent_id}/link",
  "POST /v1/convai/agents/{agent_id}/avatar",
  "GET /v1/convai/agents",
  "GET /v1/convai/agent/{agent_id}/knowledge-base/size",
  "POST /v1/convai/agent/{agent_id}/llm-usage/calculate",
  "POST /v1/convai/agents/{agent_id}/duplicate",
  "POST /v1/convai/agents/{agent_id}/simulate-conversation",
  "POST /v1/convai/agents/{agent_id}/simulate-conversation/stream",
  "POST /v1/convai/agent-testing/folders",
  "GET /v1/convai/agent-testing/folders/{folder_id}",
  "PATCH /v1/convai/agent-testing/folders/{folder_id}",
  "DELETE /v1/convai/agent-testing/folders/{folder_id}",
  "POST /v1/convai/agent-testing/bulk-move",
  "GET /v1/convai/conversations",
  "GET /v1/convai/users",
  "GET /v1/convai/conversations/{conversation_id}",
  "DELETE /v1/convai/conversations/{conversation_id}",
  "GET /v1/convai/conversations/{conversation_id}/sip-messages",
  "GET /v1/convai/conversations/{conversation_id}/audio",
  "POST /v1/convai/conversations/{conversation_id}/feedback",
  "GET /v1/convai/conversations/messages/text-search",
  "GET /v1/convai/conversations/messages/smart-search",
  "POST /v1/convai/conversations/{conversation_id}/tags",
  "DELETE /v1/convai/conversations/{conversation_id}/tags/{tag_id}",
  "GET /v1/convai/tags",
  "POST /v1/convai/tags",
  "GET /v1/convai/tags/{tag_id}",
  "PATCH /v1/convai/tags/{tag_id}",
  "DELETE /v1/convai/tags/{tag_id}",
  "POST /v1/convai/phone-numbers",
  "GET /v1/convai/phone-numbers",
  "GET /v1/convai/phone-numbers/{phone_number_id}",
  "DELETE /v1/convai/phone-numbers/{phone_number_id}",
  "PATCH /v1/convai/phone-numbers/{phone_number_id}",
  "GET /v1/convai/phone-numbers/{phone_number_id}/sip-messages",
  "POST /v1/convai/llm-usage/calculate",
  "GET /v1/convai/llm/list",
  "POST /v1/convai/conversations/{conversation_id}/files",
  "DELETE /v1/convai/conversations/{conversation_id}/files/{file_id}",
  "GET /v1/convai/analytics/live-count",
  "GET /v1/convai/knowledge-base/summaries",
  "POST /v1/convai/knowledge-base",
  "GET /v1/convai/knowledge-base",
  "POST /v1/convai/knowledge-base/url",
  "POST /v1/convai/knowledge-base/file",
  "POST /v1/convai/knowledge-base/text",
  "PATCH /v1/convai/knowledge-base/{documentation_id}",
  "GET /v1/convai/knowledge-base/{documentation_id}",
  "DELETE /v1/convai/knowledge-base/{documentation_id}",
  "PATCH /v1/convai/knowledge-base/{documentation_id}/update-file",
  "POST /v1/convai/knowledge-base/rag-index",
  "GET /v1/convai/knowledge-base/rag-index",
  "POST /v1/convai/knowledge-base/{documentation_id}/refresh",
  "POST /v1/convai/knowledge-base/{documentation_id}/rag-index",
  "GET /v1/convai/knowledge-base/{documentation_id}/rag-index",
  "DELETE /v1/convai/knowledge-base/{documentation_id}/rag-index/{rag_index_id}",
  "GET /v1/convai/knowledge-base/search",
  "GET /v1/convai/knowledge-base/{documentation_id}/dependent-agents",
  "GET /v1/convai/knowledge-base/{documentation_id}/content",
  "GET /v1/convai/knowledge-base/{documentation_id}/source-file-url",
  "GET /v1/convai/knowledge-base/{documentation_id}/chunk/{chunk_id}",
  "GET /v1/convai/knowledge-base/{documentation_id}/chunks",
  "POST /v1/convai/tools",
  "GET /v1/convai/tools",
  "GET /v1/convai/tools/{tool_id}",
  "PATCH /v1/convai/tools/{tool_id}"
] as const;
export type ElevenLabsFullApiAgentsPlatform01OperationKey = typeof ElevenLabsFullApiAgentsPlatform01OperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiAgentsPlatform01OperationPathParamMap {
  "GET /v1/convai/conversation/get-signed-url": {};
  "GET /v1/convai/conversation/get_signed_url": {};
  "GET /v1/convai/conversation/token": {};
  "POST /v1/convai/twilio/outbound-call": {};
  "POST /v1/convai/twilio/register-call": {};
  "POST /v1/convai/exotel/outbound-call": {};
  "POST /v1/convai/whatsapp/outbound-call": {};
  "POST /v1/convai/whatsapp/outbound-message": {};
  "POST /v1/convai/agents/create": {};
  "GET /v1/convai/agents/summaries": {};
  "GET /v1/convai/agents/{agent_id}": { "agent_id": ElevenLabsFullApiPathParamValue };
  "PATCH /v1/convai/agents/{agent_id}": { "agent_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/convai/agents/{agent_id}": { "agent_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/agents/{agent_id}/widget": { "agent_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/agents/{agent_id}/link": { "agent_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/agents/{agent_id}/avatar": { "agent_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/agents": {};
  "GET /v1/convai/agent/{agent_id}/knowledge-base/size": { "agent_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/agent/{agent_id}/llm-usage/calculate": { "agent_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/agents/{agent_id}/duplicate": { "agent_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/agents/{agent_id}/simulate-conversation": { "agent_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/agents/{agent_id}/simulate-conversation/stream": { "agent_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/agent-testing/folders": {};
  "GET /v1/convai/agent-testing/folders/{folder_id}": { "folder_id": ElevenLabsFullApiPathParamValue };
  "PATCH /v1/convai/agent-testing/folders/{folder_id}": { "folder_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/convai/agent-testing/folders/{folder_id}": { "folder_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/agent-testing/bulk-move": {};
  "GET /v1/convai/conversations": {};
  "GET /v1/convai/users": {};
  "GET /v1/convai/conversations/{conversation_id}": { "conversation_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/convai/conversations/{conversation_id}": { "conversation_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/conversations/{conversation_id}/sip-messages": { "conversation_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/conversations/{conversation_id}/audio": { "conversation_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/conversations/{conversation_id}/feedback": { "conversation_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/conversations/messages/text-search": {};
  "GET /v1/convai/conversations/messages/smart-search": {};
  "POST /v1/convai/conversations/{conversation_id}/tags": { "conversation_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/convai/conversations/{conversation_id}/tags/{tag_id}": { "conversation_id": ElevenLabsFullApiPathParamValue; "tag_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/tags": {};
  "POST /v1/convai/tags": {};
  "GET /v1/convai/tags/{tag_id}": { "tag_id": ElevenLabsFullApiPathParamValue };
  "PATCH /v1/convai/tags/{tag_id}": { "tag_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/convai/tags/{tag_id}": { "tag_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/phone-numbers": {};
  "GET /v1/convai/phone-numbers": {};
  "GET /v1/convai/phone-numbers/{phone_number_id}": { "phone_number_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/convai/phone-numbers/{phone_number_id}": { "phone_number_id": ElevenLabsFullApiPathParamValue };
  "PATCH /v1/convai/phone-numbers/{phone_number_id}": { "phone_number_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/phone-numbers/{phone_number_id}/sip-messages": { "phone_number_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/llm-usage/calculate": {};
  "GET /v1/convai/llm/list": {};
  "POST /v1/convai/conversations/{conversation_id}/files": { "conversation_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/convai/conversations/{conversation_id}/files/{file_id}": { "conversation_id": ElevenLabsFullApiPathParamValue; "file_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/analytics/live-count": {};
  "GET /v1/convai/knowledge-base/summaries": {};
  "POST /v1/convai/knowledge-base": {};
  "GET /v1/convai/knowledge-base": {};
  "POST /v1/convai/knowledge-base/url": {};
  "POST /v1/convai/knowledge-base/file": {};
  "POST /v1/convai/knowledge-base/text": {};
  "PATCH /v1/convai/knowledge-base/{documentation_id}": { "documentation_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/knowledge-base/{documentation_id}": { "documentation_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/convai/knowledge-base/{documentation_id}": { "documentation_id": ElevenLabsFullApiPathParamValue };
  "PATCH /v1/convai/knowledge-base/{documentation_id}/update-file": { "documentation_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/knowledge-base/rag-index": {};
  "GET /v1/convai/knowledge-base/rag-index": {};
  "POST /v1/convai/knowledge-base/{documentation_id}/refresh": { "documentation_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/knowledge-base/{documentation_id}/rag-index": { "documentation_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/knowledge-base/{documentation_id}/rag-index": { "documentation_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/convai/knowledge-base/{documentation_id}/rag-index/{rag_index_id}": { "documentation_id": ElevenLabsFullApiPathParamValue; "rag_index_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/knowledge-base/search": {};
  "GET /v1/convai/knowledge-base/{documentation_id}/dependent-agents": { "documentation_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/knowledge-base/{documentation_id}/content": { "documentation_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/knowledge-base/{documentation_id}/source-file-url": { "documentation_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/knowledge-base/{documentation_id}/chunk/{chunk_id}": { "documentation_id": ElevenLabsFullApiPathParamValue; "chunk_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/knowledge-base/{documentation_id}/chunks": { "documentation_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/tools": {};
  "GET /v1/convai/tools": {};
  "GET /v1/convai/tools/{tool_id}": { "tool_id": ElevenLabsFullApiPathParamValue };
  "PATCH /v1/convai/tools/{tool_id}": { "tool_id": ElevenLabsFullApiPathParamValue };
}

export interface ElevenLabsFullApiAgentsPlatform01OperationRequestMap {
  "GET /v1/convai/conversation/get-signed-url": ElevenLabsFullApiOperationInput<"GET /v1/convai/conversation/get-signed-url">;
  "GET /v1/convai/conversation/get_signed_url": ElevenLabsFullApiOperationInput<"GET /v1/convai/conversation/get_signed_url">;
  "GET /v1/convai/conversation/token": ElevenLabsFullApiOperationInput<"GET /v1/convai/conversation/token">;
  "POST /v1/convai/twilio/outbound-call": ElevenLabsFullApiOperationInput<"POST /v1/convai/twilio/outbound-call">;
  "POST /v1/convai/twilio/register-call": ElevenLabsFullApiOperationInput<"POST /v1/convai/twilio/register-call">;
  "POST /v1/convai/exotel/outbound-call": ElevenLabsFullApiOperationInput<"POST /v1/convai/exotel/outbound-call">;
  "POST /v1/convai/whatsapp/outbound-call": ElevenLabsFullApiOperationInput<"POST /v1/convai/whatsapp/outbound-call">;
  "POST /v1/convai/whatsapp/outbound-message": ElevenLabsFullApiOperationInput<"POST /v1/convai/whatsapp/outbound-message">;
  "POST /v1/convai/agents/create": ElevenLabsFullApiOperationInput<"POST /v1/convai/agents/create">;
  "GET /v1/convai/agents/summaries": ElevenLabsFullApiOperationInput<"GET /v1/convai/agents/summaries">;
  "GET /v1/convai/agents/{agent_id}": ElevenLabsFullApiOperationInput<"GET /v1/convai/agents/{agent_id}">;
  "PATCH /v1/convai/agents/{agent_id}": ElevenLabsFullApiOperationInput<"PATCH /v1/convai/agents/{agent_id}">;
  "DELETE /v1/convai/agents/{agent_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/convai/agents/{agent_id}">;
  "GET /v1/convai/agents/{agent_id}/widget": ElevenLabsFullApiOperationInput<"GET /v1/convai/agents/{agent_id}/widget">;
  "GET /v1/convai/agents/{agent_id}/link": ElevenLabsFullApiOperationInput<"GET /v1/convai/agents/{agent_id}/link">;
  "POST /v1/convai/agents/{agent_id}/avatar": ElevenLabsFullApiOperationInput<"POST /v1/convai/agents/{agent_id}/avatar">;
  "GET /v1/convai/agents": ElevenLabsFullApiOperationInput<"GET /v1/convai/agents">;
  "GET /v1/convai/agent/{agent_id}/knowledge-base/size": ElevenLabsFullApiOperationInput<"GET /v1/convai/agent/{agent_id}/knowledge-base/size">;
  "POST /v1/convai/agent/{agent_id}/llm-usage/calculate": ElevenLabsFullApiOperationInput<"POST /v1/convai/agent/{agent_id}/llm-usage/calculate">;
  "POST /v1/convai/agents/{agent_id}/duplicate": ElevenLabsFullApiOperationInput<"POST /v1/convai/agents/{agent_id}/duplicate">;
  "POST /v1/convai/agents/{agent_id}/simulate-conversation": ElevenLabsFullApiOperationInput<"POST /v1/convai/agents/{agent_id}/simulate-conversation">;
  "POST /v1/convai/agents/{agent_id}/simulate-conversation/stream": ElevenLabsFullApiOperationInput<"POST /v1/convai/agents/{agent_id}/simulate-conversation/stream">;
  "POST /v1/convai/agent-testing/folders": ElevenLabsFullApiOperationInput<"POST /v1/convai/agent-testing/folders">;
  "GET /v1/convai/agent-testing/folders/{folder_id}": ElevenLabsFullApiOperationInput<"GET /v1/convai/agent-testing/folders/{folder_id}">;
  "PATCH /v1/convai/agent-testing/folders/{folder_id}": ElevenLabsFullApiOperationInput<"PATCH /v1/convai/agent-testing/folders/{folder_id}">;
  "DELETE /v1/convai/agent-testing/folders/{folder_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/convai/agent-testing/folders/{folder_id}">;
  "POST /v1/convai/agent-testing/bulk-move": ElevenLabsFullApiOperationInput<"POST /v1/convai/agent-testing/bulk-move">;
  "GET /v1/convai/conversations": ElevenLabsFullApiOperationInput<"GET /v1/convai/conversations">;
  "GET /v1/convai/users": ElevenLabsFullApiOperationInput<"GET /v1/convai/users">;
  "GET /v1/convai/conversations/{conversation_id}": ElevenLabsFullApiOperationInput<"GET /v1/convai/conversations/{conversation_id}">;
  "DELETE /v1/convai/conversations/{conversation_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/convai/conversations/{conversation_id}">;
  "GET /v1/convai/conversations/{conversation_id}/sip-messages": ElevenLabsFullApiOperationInput<"GET /v1/convai/conversations/{conversation_id}/sip-messages">;
  "GET /v1/convai/conversations/{conversation_id}/audio": ElevenLabsFullApiOperationInput<"GET /v1/convai/conversations/{conversation_id}/audio">;
  "POST /v1/convai/conversations/{conversation_id}/feedback": ElevenLabsFullApiOperationInput<"POST /v1/convai/conversations/{conversation_id}/feedback">;
  "GET /v1/convai/conversations/messages/text-search": ElevenLabsFullApiOperationInput<"GET /v1/convai/conversations/messages/text-search">;
  "GET /v1/convai/conversations/messages/smart-search": ElevenLabsFullApiOperationInput<"GET /v1/convai/conversations/messages/smart-search">;
  "POST /v1/convai/conversations/{conversation_id}/tags": ElevenLabsFullApiOperationInput<"POST /v1/convai/conversations/{conversation_id}/tags">;
  "DELETE /v1/convai/conversations/{conversation_id}/tags/{tag_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/convai/conversations/{conversation_id}/tags/{tag_id}">;
  "GET /v1/convai/tags": ElevenLabsFullApiOperationInput<"GET /v1/convai/tags">;
  "POST /v1/convai/tags": ElevenLabsFullApiOperationInput<"POST /v1/convai/tags">;
  "GET /v1/convai/tags/{tag_id}": ElevenLabsFullApiOperationInput<"GET /v1/convai/tags/{tag_id}">;
  "PATCH /v1/convai/tags/{tag_id}": ElevenLabsFullApiOperationInput<"PATCH /v1/convai/tags/{tag_id}">;
  "DELETE /v1/convai/tags/{tag_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/convai/tags/{tag_id}">;
  "POST /v1/convai/phone-numbers": ElevenLabsFullApiOperationInput<"POST /v1/convai/phone-numbers">;
  "GET /v1/convai/phone-numbers": ElevenLabsFullApiOperationInput<"GET /v1/convai/phone-numbers">;
  "GET /v1/convai/phone-numbers/{phone_number_id}": ElevenLabsFullApiOperationInput<"GET /v1/convai/phone-numbers/{phone_number_id}">;
  "DELETE /v1/convai/phone-numbers/{phone_number_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/convai/phone-numbers/{phone_number_id}">;
  "PATCH /v1/convai/phone-numbers/{phone_number_id}": ElevenLabsFullApiOperationInput<"PATCH /v1/convai/phone-numbers/{phone_number_id}">;
  "GET /v1/convai/phone-numbers/{phone_number_id}/sip-messages": ElevenLabsFullApiOperationInput<"GET /v1/convai/phone-numbers/{phone_number_id}/sip-messages">;
  "POST /v1/convai/llm-usage/calculate": ElevenLabsFullApiOperationInput<"POST /v1/convai/llm-usage/calculate">;
  "GET /v1/convai/llm/list": ElevenLabsFullApiOperationInput<"GET /v1/convai/llm/list">;
  "POST /v1/convai/conversations/{conversation_id}/files": ElevenLabsFullApiOperationInput<"POST /v1/convai/conversations/{conversation_id}/files">;
  "DELETE /v1/convai/conversations/{conversation_id}/files/{file_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/convai/conversations/{conversation_id}/files/{file_id}">;
  "GET /v1/convai/analytics/live-count": ElevenLabsFullApiOperationInput<"GET /v1/convai/analytics/live-count">;
  "GET /v1/convai/knowledge-base/summaries": ElevenLabsFullApiOperationInput<"GET /v1/convai/knowledge-base/summaries">;
  "POST /v1/convai/knowledge-base": ElevenLabsFullApiOperationInput<"POST /v1/convai/knowledge-base">;
  "GET /v1/convai/knowledge-base": ElevenLabsFullApiOperationInput<"GET /v1/convai/knowledge-base">;
  "POST /v1/convai/knowledge-base/url": ElevenLabsFullApiOperationInput<"POST /v1/convai/knowledge-base/url">;
  "POST /v1/convai/knowledge-base/file": ElevenLabsFullApiOperationInput<"POST /v1/convai/knowledge-base/file">;
  "POST /v1/convai/knowledge-base/text": ElevenLabsFullApiOperationInput<"POST /v1/convai/knowledge-base/text">;
  "PATCH /v1/convai/knowledge-base/{documentation_id}": ElevenLabsFullApiOperationInput<"PATCH /v1/convai/knowledge-base/{documentation_id}">;
  "GET /v1/convai/knowledge-base/{documentation_id}": ElevenLabsFullApiOperationInput<"GET /v1/convai/knowledge-base/{documentation_id}">;
  "DELETE /v1/convai/knowledge-base/{documentation_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/convai/knowledge-base/{documentation_id}">;
  "PATCH /v1/convai/knowledge-base/{documentation_id}/update-file": ElevenLabsFullApiOperationInput<"PATCH /v1/convai/knowledge-base/{documentation_id}/update-file">;
  "POST /v1/convai/knowledge-base/rag-index": ElevenLabsFullApiOperationInput<"POST /v1/convai/knowledge-base/rag-index">;
  "GET /v1/convai/knowledge-base/rag-index": ElevenLabsFullApiOperationInput<"GET /v1/convai/knowledge-base/rag-index">;
  "POST /v1/convai/knowledge-base/{documentation_id}/refresh": ElevenLabsFullApiOperationInput<"POST /v1/convai/knowledge-base/{documentation_id}/refresh">;
  "POST /v1/convai/knowledge-base/{documentation_id}/rag-index": ElevenLabsFullApiOperationInput<"POST /v1/convai/knowledge-base/{documentation_id}/rag-index">;
  "GET /v1/convai/knowledge-base/{documentation_id}/rag-index": ElevenLabsFullApiOperationInput<"GET /v1/convai/knowledge-base/{documentation_id}/rag-index">;
  "DELETE /v1/convai/knowledge-base/{documentation_id}/rag-index/{rag_index_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/convai/knowledge-base/{documentation_id}/rag-index/{rag_index_id}">;
  "GET /v1/convai/knowledge-base/search": ElevenLabsFullApiOperationInput<"GET /v1/convai/knowledge-base/search">;
  "GET /v1/convai/knowledge-base/{documentation_id}/dependent-agents": ElevenLabsFullApiOperationInput<"GET /v1/convai/knowledge-base/{documentation_id}/dependent-agents">;
  "GET /v1/convai/knowledge-base/{documentation_id}/content": ElevenLabsFullApiOperationInput<"GET /v1/convai/knowledge-base/{documentation_id}/content">;
  "GET /v1/convai/knowledge-base/{documentation_id}/source-file-url": ElevenLabsFullApiOperationInput<"GET /v1/convai/knowledge-base/{documentation_id}/source-file-url">;
  "GET /v1/convai/knowledge-base/{documentation_id}/chunk/{chunk_id}": ElevenLabsFullApiOperationInput<"GET /v1/convai/knowledge-base/{documentation_id}/chunk/{chunk_id}">;
  "GET /v1/convai/knowledge-base/{documentation_id}/chunks": ElevenLabsFullApiOperationInput<"GET /v1/convai/knowledge-base/{documentation_id}/chunks">;
  "POST /v1/convai/tools": ElevenLabsFullApiOperationInput<"POST /v1/convai/tools">;
  "GET /v1/convai/tools": ElevenLabsFullApiOperationInput<"GET /v1/convai/tools">;
  "GET /v1/convai/tools/{tool_id}": ElevenLabsFullApiOperationInput<"GET /v1/convai/tools/{tool_id}">;
  "PATCH /v1/convai/tools/{tool_id}": ElevenLabsFullApiOperationInput<"PATCH /v1/convai/tools/{tool_id}">;
}

export interface ElevenLabsFullApiAgentsPlatform01GeneratedClient {
  GetConversationSignedLink(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/conversation/get-signed-url">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/conversation/get-signed-url"]>;
  GetSignedUrlDeprecated(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/conversation/get_signed_url">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/conversation/get_signed_url"]>;
  GetLivekitToken(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/conversation/token">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/conversation/token"]>;
  HandleTwilioOutboundCall(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/twilio/outbound-call">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/twilio/outbound-call"]>;
  RegisterTwilioCall(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/twilio/register-call">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/twilio/register-call"]>;
  HandleExotelOutboundCall(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/exotel/outbound-call">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/exotel/outbound-call"]>;
  WhatsappOutboundCall(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/whatsapp/outbound-call">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/whatsapp/outbound-call"]>;
  WhatsappOutboundMessage(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/whatsapp/outbound-message">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/whatsapp/outbound-message"]>;
  CreateAgentRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/create">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/agents/create"]>;
  GetAgentSummariesRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/agents/summaries">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/agents/summaries"]>;
  GetAgentRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/agents/{agent_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/agents/{agent_id}"]>;
  PatchAgentSettingsRoute(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/agents/{agent_id}">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/convai/agents/{agent_id}"]>;
  DeleteAgentRoute(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/agents/{agent_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/convai/agents/{agent_id}"]>;
  GetAgentWidgetRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/agents/{agent_id}/widget">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/agents/{agent_id}/widget"]>;
  GetAgentLinkRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/agents/{agent_id}/link">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/agents/{agent_id}/link"]>;
  PostAgentAvatarRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/{agent_id}/avatar">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/agents/{agent_id}/avatar"]>;
  GetAgentsRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/agents">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/agents"]>;
  GetAgentKnowledgeBaseSize(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/agent/{agent_id}/knowledge-base/size">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/agent/{agent_id}/knowledge-base/size"]>;
  GetAgentLlmExpectedCostCalculation(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/agent/{agent_id}/llm-usage/calculate">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/agent/{agent_id}/llm-usage/calculate"]>;
  DuplicateAgentRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/{agent_id}/duplicate">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/agents/{agent_id}/duplicate"]>;
  RunConversationSimulationRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/{agent_id}/simulate-conversation">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/agents/{agent_id}/simulate-conversation"]>;
  RunConversationSimulationRouteStream(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/{agent_id}/simulate-conversation/stream">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/agents/{agent_id}/simulate-conversation/stream"]>;
  CreateAgentTestFolderRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/agent-testing/folders">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/agent-testing/folders"]>;
  GetAgentTestFolderRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/agent-testing/folders/{folder_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/agent-testing/folders/{folder_id}"]>;
  UpdateAgentTestFolderRoute(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/agent-testing/folders/{folder_id}">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/convai/agent-testing/folders/{folder_id}"]>;
  DeleteAgentTestFolderRoute(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/agent-testing/folders/{folder_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/convai/agent-testing/folders/{folder_id}"]>;
  AgentTestingBulkMoveRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/agent-testing/bulk-move">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/agent-testing/bulk-move"]>;
  GetConversationHistoriesRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/conversations">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/conversations"]>;
  GetConversationUsersRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/users">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/users"]>;
  GetConversationHistoryRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/conversations/{conversation_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/conversations/{conversation_id}"]>;
  DeleteConversationRoute(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/conversations/{conversation_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/convai/conversations/{conversation_id}"]>;
  GetConversationSipMessages(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/conversations/{conversation_id}/sip-messages">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/conversations/{conversation_id}/sip-messages"]>;
  GetConversationAudioRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/conversations/{conversation_id}/audio">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/conversations/{conversation_id}/audio"]>;
  PostConversationFeedbackRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/conversations/{conversation_id}/feedback">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/conversations/{conversation_id}/feedback"]>;
  TextSearchConversationMessagesRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/conversations/messages/text-search">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/conversations/messages/text-search"]>;
  SmartSearchConversationMessagesRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/conversations/messages/smart-search">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/conversations/messages/smart-search"]>;
  AssignConversationTagsRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/conversations/{conversation_id}/tags">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/conversations/{conversation_id}/tags"]>;
  UnassignConversationTagRoute(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/conversations/{conversation_id}/tags/{tag_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/convai/conversations/{conversation_id}/tags/{tag_id}"]>;
  ListConversationTagsRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/tags">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/tags"]>;
  CreateConversationTagRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/tags">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/tags"]>;
  GetConversationTagRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/tags/{tag_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/tags/{tag_id}"]>;
  UpdateConversationTagRoute(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/tags/{tag_id}">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/convai/tags/{tag_id}"]>;
  DeleteConversationTagRoute(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/tags/{tag_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/convai/tags/{tag_id}"]>;
  CreatePhoneNumberRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/phone-numbers">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/phone-numbers"]>;
  ListPhoneNumbersRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/phone-numbers">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/phone-numbers"]>;
  GetPhoneNumberRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/phone-numbers/{phone_number_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/phone-numbers/{phone_number_id}"]>;
  DeletePhoneNumberRoute(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/phone-numbers/{phone_number_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/convai/phone-numbers/{phone_number_id}"]>;
  UpdatePhoneNumberRoute(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/phone-numbers/{phone_number_id}">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/convai/phone-numbers/{phone_number_id}"]>;
  ListSipMessages(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/phone-numbers/{phone_number_id}/sip-messages">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/phone-numbers/{phone_number_id}/sip-messages"]>;
  GetPublicLlmExpectedCostCalculation(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/llm-usage/calculate">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/llm-usage/calculate"]>;
  ListAvailableLlms(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/llm/list">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/llm/list"]>;
  UploadFileRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/conversations/{conversation_id}/files">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/conversations/{conversation_id}/files"]>;
  CancelFileUploadRoute(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/conversations/{conversation_id}/files/{file_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/convai/conversations/{conversation_id}/files/{file_id}"]>;
  GetLiveCount(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/analytics/live-count">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/analytics/live-count"]>;
  GetAgentKnowledgeBaseSummariesRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base/summaries">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/knowledge-base/summaries"]>;
  AddDocumentationToKnowledgeBase(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/knowledge-base">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/knowledge-base"]>;
  GetKnowledgeBaseListRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/knowledge-base"]>;
  CreateUrlDocumentRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/knowledge-base/url">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/knowledge-base/url"]>;
  CreateFileDocumentRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/knowledge-base/file">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/knowledge-base/file"]>;
  CreateTextDocumentRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/knowledge-base/text">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/knowledge-base/text"]>;
  UpdateDocumentRoute(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/knowledge-base/{documentation_id}">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/convai/knowledge-base/{documentation_id}"]>;
  GetDocumentationFromKnowledgeBase(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base/{documentation_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/knowledge-base/{documentation_id}"]>;
  DeleteKnowledgeBaseDocument(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/knowledge-base/{documentation_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/convai/knowledge-base/{documentation_id}"]>;
  UpdateFileDocumentRoute(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/knowledge-base/{documentation_id}/update-file">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/convai/knowledge-base/{documentation_id}/update-file"]>;
  GetOrCreateRagIndexes(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/knowledge-base/rag-index">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/knowledge-base/rag-index"]>;
  GetRagIndexOverview(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base/rag-index">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/knowledge-base/rag-index"]>;
  RefreshUrlDocumentRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/knowledge-base/{documentation_id}/refresh">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/knowledge-base/{documentation_id}/refresh"]>;
  RagIndexStatus(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/knowledge-base/{documentation_id}/rag-index">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/knowledge-base/{documentation_id}/rag-index"]>;
  GetRagIndexes(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base/{documentation_id}/rag-index">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/knowledge-base/{documentation_id}/rag-index"]>;
  DeleteRagIndex(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/knowledge-base/{documentation_id}/rag-index/{rag_index_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/convai/knowledge-base/{documentation_id}/rag-index/{rag_index_id}"]>;
  SearchKnowledgeBaseContentRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base/search">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/knowledge-base/search"]>;
  GetKnowledgeBaseDependentAgents(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base/{documentation_id}/dependent-agents">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/knowledge-base/{documentation_id}/dependent-agents"]>;
  GetKnowledgeBaseContent(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base/{documentation_id}/content">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/knowledge-base/{documentation_id}/content"]>;
  GetKnowledgeBaseSourceFileUrl(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base/{documentation_id}/source-file-url">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/knowledge-base/{documentation_id}/source-file-url"]>;
  GetDocumentationChunkFromKnowledgeBase(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base/{documentation_id}/chunk/{chunk_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/knowledge-base/{documentation_id}/chunk/{chunk_id}"]>;
  GetDocumentationChunksFromKnowledgeBase(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base/{documentation_id}/chunks">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/knowledge-base/{documentation_id}/chunks"]>;
  AddToolRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/tools">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/tools"]>;
  GetToolsRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/tools">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/tools"]>;
  GetToolRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/tools/{tool_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/tools/{tool_id}"]>;
  UpdateToolRoute(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/tools/{tool_id}">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/convai/tools/{tool_id}"]>;
}

export const ElevenLabsFullApiAgentsPlatform01GeneratedFunctionNames = [
  "GetConversationSignedLink",
  "GetSignedUrlDeprecated",
  "GetLivekitToken",
  "HandleTwilioOutboundCall",
  "RegisterTwilioCall",
  "HandleExotelOutboundCall",
  "WhatsappOutboundCall",
  "WhatsappOutboundMessage",
  "CreateAgentRoute",
  "GetAgentSummariesRoute",
  "GetAgentRoute",
  "PatchAgentSettingsRoute",
  "DeleteAgentRoute",
  "GetAgentWidgetRoute",
  "GetAgentLinkRoute",
  "PostAgentAvatarRoute",
  "GetAgentsRoute",
  "GetAgentKnowledgeBaseSize",
  "GetAgentLlmExpectedCostCalculation",
  "DuplicateAgentRoute",
  "RunConversationSimulationRoute",
  "RunConversationSimulationRouteStream",
  "CreateAgentTestFolderRoute",
  "GetAgentTestFolderRoute",
  "UpdateAgentTestFolderRoute",
  "DeleteAgentTestFolderRoute",
  "AgentTestingBulkMoveRoute",
  "GetConversationHistoriesRoute",
  "GetConversationUsersRoute",
  "GetConversationHistoryRoute",
  "DeleteConversationRoute",
  "GetConversationSipMessages",
  "GetConversationAudioRoute",
  "PostConversationFeedbackRoute",
  "TextSearchConversationMessagesRoute",
  "SmartSearchConversationMessagesRoute",
  "AssignConversationTagsRoute",
  "UnassignConversationTagRoute",
  "ListConversationTagsRoute",
  "CreateConversationTagRoute",
  "GetConversationTagRoute",
  "UpdateConversationTagRoute",
  "DeleteConversationTagRoute",
  "CreatePhoneNumberRoute",
  "ListPhoneNumbersRoute",
  "GetPhoneNumberRoute",
  "DeletePhoneNumberRoute",
  "UpdatePhoneNumberRoute",
  "ListSipMessages",
  "GetPublicLlmExpectedCostCalculation",
  "ListAvailableLlms",
  "UploadFileRoute",
  "CancelFileUploadRoute",
  "GetLiveCount",
  "GetAgentKnowledgeBaseSummariesRoute",
  "AddDocumentationToKnowledgeBase",
  "GetKnowledgeBaseListRoute",
  "CreateUrlDocumentRoute",
  "CreateFileDocumentRoute",
  "CreateTextDocumentRoute",
  "UpdateDocumentRoute",
  "GetDocumentationFromKnowledgeBase",
  "DeleteKnowledgeBaseDocument",
  "UpdateFileDocumentRoute",
  "GetOrCreateRagIndexes",
  "GetRagIndexOverview",
  "RefreshUrlDocumentRoute",
  "RagIndexStatus",
  "GetRagIndexes",
  "DeleteRagIndex",
  "SearchKnowledgeBaseContentRoute",
  "GetKnowledgeBaseDependentAgents",
  "GetKnowledgeBaseContent",
  "GetKnowledgeBaseSourceFileUrl",
  "GetDocumentationChunkFromKnowledgeBase",
  "GetDocumentationChunksFromKnowledgeBase",
  "AddToolRoute",
  "GetToolsRoute",
  "GetToolRoute",
  "UpdateToolRoute"
] as const satisfies readonly (keyof ElevenLabsFullApiAgentsPlatform01GeneratedClient)[];

export function createElevenLabsFullApiAgentsPlatform01GeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiAgentsPlatform01GeneratedClient {
  return {
    GetConversationSignedLink: (...args) => callOperation("GET /v1/convai/conversation/get-signed-url", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/conversation/get-signed-url">)),
    GetSignedUrlDeprecated: (...args) => callOperation("GET /v1/convai/conversation/get_signed_url", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/conversation/get_signed_url">)),
    GetLivekitToken: (...args) => callOperation("GET /v1/convai/conversation/token", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/conversation/token">)),
    HandleTwilioOutboundCall: (...args) => callOperation("POST /v1/convai/twilio/outbound-call", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/twilio/outbound-call">)),
    RegisterTwilioCall: (...args) => callOperation("POST /v1/convai/twilio/register-call", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/twilio/register-call">)),
    HandleExotelOutboundCall: (...args) => callOperation("POST /v1/convai/exotel/outbound-call", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/exotel/outbound-call">)),
    WhatsappOutboundCall: (...args) => callOperation("POST /v1/convai/whatsapp/outbound-call", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/whatsapp/outbound-call">)),
    WhatsappOutboundMessage: (...args) => callOperation("POST /v1/convai/whatsapp/outbound-message", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/whatsapp/outbound-message">)),
    CreateAgentRoute: (...args) => callOperation("POST /v1/convai/agents/create", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/create">)),
    GetAgentSummariesRoute: (...args) => callOperation("GET /v1/convai/agents/summaries", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/agents/summaries">)),
    GetAgentRoute: (...args) => callOperation("GET /v1/convai/agents/{agent_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/agents/{agent_id}">)),
    PatchAgentSettingsRoute: (...args) => callOperation("PATCH /v1/convai/agents/{agent_id}", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/agents/{agent_id}">)),
    DeleteAgentRoute: (...args) => callOperation("DELETE /v1/convai/agents/{agent_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/agents/{agent_id}">)),
    GetAgentWidgetRoute: (...args) => callOperation("GET /v1/convai/agents/{agent_id}/widget", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/agents/{agent_id}/widget">)),
    GetAgentLinkRoute: (...args) => callOperation("GET /v1/convai/agents/{agent_id}/link", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/agents/{agent_id}/link">)),
    PostAgentAvatarRoute: (...args) => callOperation("POST /v1/convai/agents/{agent_id}/avatar", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/{agent_id}/avatar">)),
    GetAgentsRoute: (...args) => callOperation("GET /v1/convai/agents", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/agents">)),
    GetAgentKnowledgeBaseSize: (...args) => callOperation("GET /v1/convai/agent/{agent_id}/knowledge-base/size", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/agent/{agent_id}/knowledge-base/size">)),
    GetAgentLlmExpectedCostCalculation: (...args) => callOperation("POST /v1/convai/agent/{agent_id}/llm-usage/calculate", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/agent/{agent_id}/llm-usage/calculate">)),
    DuplicateAgentRoute: (...args) => callOperation("POST /v1/convai/agents/{agent_id}/duplicate", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/{agent_id}/duplicate">)),
    RunConversationSimulationRoute: (...args) => callOperation("POST /v1/convai/agents/{agent_id}/simulate-conversation", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/{agent_id}/simulate-conversation">)),
    RunConversationSimulationRouteStream: (...args) => callOperation("POST /v1/convai/agents/{agent_id}/simulate-conversation/stream", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/{agent_id}/simulate-conversation/stream">)),
    CreateAgentTestFolderRoute: (...args) => callOperation("POST /v1/convai/agent-testing/folders", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/agent-testing/folders">)),
    GetAgentTestFolderRoute: (...args) => callOperation("GET /v1/convai/agent-testing/folders/{folder_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/agent-testing/folders/{folder_id}">)),
    UpdateAgentTestFolderRoute: (...args) => callOperation("PATCH /v1/convai/agent-testing/folders/{folder_id}", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/agent-testing/folders/{folder_id}">)),
    DeleteAgentTestFolderRoute: (...args) => callOperation("DELETE /v1/convai/agent-testing/folders/{folder_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/agent-testing/folders/{folder_id}">)),
    AgentTestingBulkMoveRoute: (...args) => callOperation("POST /v1/convai/agent-testing/bulk-move", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/agent-testing/bulk-move">)),
    GetConversationHistoriesRoute: (...args) => callOperation("GET /v1/convai/conversations", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/conversations">)),
    GetConversationUsersRoute: (...args) => callOperation("GET /v1/convai/users", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/users">)),
    GetConversationHistoryRoute: (...args) => callOperation("GET /v1/convai/conversations/{conversation_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/conversations/{conversation_id}">)),
    DeleteConversationRoute: (...args) => callOperation("DELETE /v1/convai/conversations/{conversation_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/conversations/{conversation_id}">)),
    GetConversationSipMessages: (...args) => callOperation("GET /v1/convai/conversations/{conversation_id}/sip-messages", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/conversations/{conversation_id}/sip-messages">)),
    GetConversationAudioRoute: (...args) => callOperation("GET /v1/convai/conversations/{conversation_id}/audio", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/conversations/{conversation_id}/audio">)),
    PostConversationFeedbackRoute: (...args) => callOperation("POST /v1/convai/conversations/{conversation_id}/feedback", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/conversations/{conversation_id}/feedback">)),
    TextSearchConversationMessagesRoute: (...args) => callOperation("GET /v1/convai/conversations/messages/text-search", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/conversations/messages/text-search">)),
    SmartSearchConversationMessagesRoute: (...args) => callOperation("GET /v1/convai/conversations/messages/smart-search", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/conversations/messages/smart-search">)),
    AssignConversationTagsRoute: (...args) => callOperation("POST /v1/convai/conversations/{conversation_id}/tags", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/conversations/{conversation_id}/tags">)),
    UnassignConversationTagRoute: (...args) => callOperation("DELETE /v1/convai/conversations/{conversation_id}/tags/{tag_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/conversations/{conversation_id}/tags/{tag_id}">)),
    ListConversationTagsRoute: (...args) => callOperation("GET /v1/convai/tags", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/tags">)),
    CreateConversationTagRoute: (...args) => callOperation("POST /v1/convai/tags", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/tags">)),
    GetConversationTagRoute: (...args) => callOperation("GET /v1/convai/tags/{tag_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/tags/{tag_id}">)),
    UpdateConversationTagRoute: (...args) => callOperation("PATCH /v1/convai/tags/{tag_id}", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/tags/{tag_id}">)),
    DeleteConversationTagRoute: (...args) => callOperation("DELETE /v1/convai/tags/{tag_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/tags/{tag_id}">)),
    CreatePhoneNumberRoute: (...args) => callOperation("POST /v1/convai/phone-numbers", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/phone-numbers">)),
    ListPhoneNumbersRoute: (...args) => callOperation("GET /v1/convai/phone-numbers", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/phone-numbers">)),
    GetPhoneNumberRoute: (...args) => callOperation("GET /v1/convai/phone-numbers/{phone_number_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/phone-numbers/{phone_number_id}">)),
    DeletePhoneNumberRoute: (...args) => callOperation("DELETE /v1/convai/phone-numbers/{phone_number_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/phone-numbers/{phone_number_id}">)),
    UpdatePhoneNumberRoute: (...args) => callOperation("PATCH /v1/convai/phone-numbers/{phone_number_id}", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/phone-numbers/{phone_number_id}">)),
    ListSipMessages: (...args) => callOperation("GET /v1/convai/phone-numbers/{phone_number_id}/sip-messages", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/phone-numbers/{phone_number_id}/sip-messages">)),
    GetPublicLlmExpectedCostCalculation: (...args) => callOperation("POST /v1/convai/llm-usage/calculate", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/llm-usage/calculate">)),
    ListAvailableLlms: (...args) => callOperation("GET /v1/convai/llm/list", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/llm/list">)),
    UploadFileRoute: (...args) => callOperation("POST /v1/convai/conversations/{conversation_id}/files", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/conversations/{conversation_id}/files">)),
    CancelFileUploadRoute: (...args) => callOperation("DELETE /v1/convai/conversations/{conversation_id}/files/{file_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/conversations/{conversation_id}/files/{file_id}">)),
    GetLiveCount: (...args) => callOperation("GET /v1/convai/analytics/live-count", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/analytics/live-count">)),
    GetAgentKnowledgeBaseSummariesRoute: (...args) => callOperation("GET /v1/convai/knowledge-base/summaries", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base/summaries">)),
    AddDocumentationToKnowledgeBase: (...args) => callOperation("POST /v1/convai/knowledge-base", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/knowledge-base">)),
    GetKnowledgeBaseListRoute: (...args) => callOperation("GET /v1/convai/knowledge-base", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base">)),
    CreateUrlDocumentRoute: (...args) => callOperation("POST /v1/convai/knowledge-base/url", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/knowledge-base/url">)),
    CreateFileDocumentRoute: (...args) => callOperation("POST /v1/convai/knowledge-base/file", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/knowledge-base/file">)),
    CreateTextDocumentRoute: (...args) => callOperation("POST /v1/convai/knowledge-base/text", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/knowledge-base/text">)),
    UpdateDocumentRoute: (...args) => callOperation("PATCH /v1/convai/knowledge-base/{documentation_id}", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/knowledge-base/{documentation_id}">)),
    GetDocumentationFromKnowledgeBase: (...args) => callOperation("GET /v1/convai/knowledge-base/{documentation_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base/{documentation_id}">)),
    DeleteKnowledgeBaseDocument: (...args) => callOperation("DELETE /v1/convai/knowledge-base/{documentation_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/knowledge-base/{documentation_id}">)),
    UpdateFileDocumentRoute: (...args) => callOperation("PATCH /v1/convai/knowledge-base/{documentation_id}/update-file", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/knowledge-base/{documentation_id}/update-file">)),
    GetOrCreateRagIndexes: (...args) => callOperation("POST /v1/convai/knowledge-base/rag-index", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/knowledge-base/rag-index">)),
    GetRagIndexOverview: (...args) => callOperation("GET /v1/convai/knowledge-base/rag-index", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base/rag-index">)),
    RefreshUrlDocumentRoute: (...args) => callOperation("POST /v1/convai/knowledge-base/{documentation_id}/refresh", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/knowledge-base/{documentation_id}/refresh">)),
    RagIndexStatus: (...args) => callOperation("POST /v1/convai/knowledge-base/{documentation_id}/rag-index", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/knowledge-base/{documentation_id}/rag-index">)),
    GetRagIndexes: (...args) => callOperation("GET /v1/convai/knowledge-base/{documentation_id}/rag-index", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base/{documentation_id}/rag-index">)),
    DeleteRagIndex: (...args) => callOperation("DELETE /v1/convai/knowledge-base/{documentation_id}/rag-index/{rag_index_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/knowledge-base/{documentation_id}/rag-index/{rag_index_id}">)),
    SearchKnowledgeBaseContentRoute: (...args) => callOperation("GET /v1/convai/knowledge-base/search", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base/search">)),
    GetKnowledgeBaseDependentAgents: (...args) => callOperation("GET /v1/convai/knowledge-base/{documentation_id}/dependent-agents", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base/{documentation_id}/dependent-agents">)),
    GetKnowledgeBaseContent: (...args) => callOperation("GET /v1/convai/knowledge-base/{documentation_id}/content", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base/{documentation_id}/content">)),
    GetKnowledgeBaseSourceFileUrl: (...args) => callOperation("GET /v1/convai/knowledge-base/{documentation_id}/source-file-url", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base/{documentation_id}/source-file-url">)),
    GetDocumentationChunkFromKnowledgeBase: (...args) => callOperation("GET /v1/convai/knowledge-base/{documentation_id}/chunk/{chunk_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base/{documentation_id}/chunk/{chunk_id}">)),
    GetDocumentationChunksFromKnowledgeBase: (...args) => callOperation("GET /v1/convai/knowledge-base/{documentation_id}/chunks", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/knowledge-base/{documentation_id}/chunks">)),
    AddToolRoute: (...args) => callOperation("POST /v1/convai/tools", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/tools">)),
    GetToolsRoute: (...args) => callOperation("GET /v1/convai/tools", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/tools">)),
    GetToolRoute: (...args) => callOperation("GET /v1/convai/tools/{tool_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/tools/{tool_id}">)),
    UpdateToolRoute: (...args) => callOperation("PATCH /v1/convai/tools/{tool_id}", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/tools/{tool_id}">)),
  };
}
