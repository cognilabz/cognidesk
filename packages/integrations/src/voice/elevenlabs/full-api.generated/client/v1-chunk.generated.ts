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
export const ElevenLabsFullApiV1OperationKeys = [
  "GET /v1/user",
  "GET /v1/user/subscription",
  "GET /v1/usage/character-stats",
  "POST /v1/convai/agent-testing/create",
  "GET /v1/convai/agent-testing/{test_id}",
  "PUT /v1/convai/agent-testing/{test_id}",
  "DELETE /v1/convai/agent-testing/{test_id}",
  "POST /v1/convai/agent-testing/summaries",
  "GET /v1/convai/agent-testing",
  "GET /v1/convai/test-invocations",
  "POST /v1/convai/agents/{agent_id}/run-tests",
  "GET /v1/convai/test-invocations/{test_invocation_id}",
  "POST /v1/convai/test-invocations/{test_invocation_id}/resubmit"
] as const;
export type ElevenLabsFullApiV1OperationKey = typeof ElevenLabsFullApiV1OperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiV1OperationPathParamMap {
  "GET /v1/user": {};
  "GET /v1/user/subscription": {};
  "GET /v1/usage/character-stats": {};
  "POST /v1/convai/agent-testing/create": {};
  "GET /v1/convai/agent-testing/{test_id}": { "test_id": ElevenLabsFullApiPathParamValue };
  "PUT /v1/convai/agent-testing/{test_id}": { "test_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/convai/agent-testing/{test_id}": { "test_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/agent-testing/summaries": {};
  "GET /v1/convai/agent-testing": {};
  "GET /v1/convai/test-invocations": {};
  "POST /v1/convai/agents/{agent_id}/run-tests": { "agent_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/test-invocations/{test_invocation_id}": { "test_invocation_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/test-invocations/{test_invocation_id}/resubmit": { "test_invocation_id": ElevenLabsFullApiPathParamValue };
}

export interface ElevenLabsFullApiV1OperationRequestMap {
  "GET /v1/user": ElevenLabsFullApiOperationInput<"GET /v1/user">;
  "GET /v1/user/subscription": ElevenLabsFullApiOperationInput<"GET /v1/user/subscription">;
  "GET /v1/usage/character-stats": ElevenLabsFullApiOperationInput<"GET /v1/usage/character-stats">;
  "POST /v1/convai/agent-testing/create": ElevenLabsFullApiOperationInput<"POST /v1/convai/agent-testing/create">;
  "GET /v1/convai/agent-testing/{test_id}": ElevenLabsFullApiOperationInput<"GET /v1/convai/agent-testing/{test_id}">;
  "PUT /v1/convai/agent-testing/{test_id}": ElevenLabsFullApiOperationInput<"PUT /v1/convai/agent-testing/{test_id}">;
  "DELETE /v1/convai/agent-testing/{test_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/convai/agent-testing/{test_id}">;
  "POST /v1/convai/agent-testing/summaries": ElevenLabsFullApiOperationInput<"POST /v1/convai/agent-testing/summaries">;
  "GET /v1/convai/agent-testing": ElevenLabsFullApiOperationInput<"GET /v1/convai/agent-testing">;
  "GET /v1/convai/test-invocations": ElevenLabsFullApiOperationInput<"GET /v1/convai/test-invocations">;
  "POST /v1/convai/agents/{agent_id}/run-tests": ElevenLabsFullApiOperationInput<"POST /v1/convai/agents/{agent_id}/run-tests">;
  "GET /v1/convai/test-invocations/{test_invocation_id}": ElevenLabsFullApiOperationInput<"GET /v1/convai/test-invocations/{test_invocation_id}">;
  "POST /v1/convai/test-invocations/{test_invocation_id}/resubmit": ElevenLabsFullApiOperationInput<"POST /v1/convai/test-invocations/{test_invocation_id}/resubmit">;
}

export interface ElevenLabsFullApiV1GeneratedClient {
  GetUserInfo(...args: ElevenLabsFullApiOperationArgs<"GET /v1/user">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/user"]>;
  GetUserSubscriptionInfo(...args: ElevenLabsFullApiOperationArgs<"GET /v1/user/subscription">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/user/subscription"]>;
  UsageCharacters(...args: ElevenLabsFullApiOperationArgs<"GET /v1/usage/character-stats">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/usage/character-stats"]>;
  CreateAgentResponseTestRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/agent-testing/create">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/agent-testing/create"]>;
  GetAgentResponseTestRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/agent-testing/{test_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/agent-testing/{test_id}"]>;
  UpdateAgentResponseTestRoute(...args: ElevenLabsFullApiOperationArgs<"PUT /v1/convai/agent-testing/{test_id}">): Promise<ElevenLabsFullApiOperationResponseMap["PUT /v1/convai/agent-testing/{test_id}"]>;
  DeleteChatResponseTestRoute(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/agent-testing/{test_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/convai/agent-testing/{test_id}"]>;
  GetAgentResponseTestsSummariesRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/agent-testing/summaries">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/agent-testing/summaries"]>;
  ListChatResponseTestsRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/agent-testing">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/agent-testing"]>;
  ListTestInvocationsRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/test-invocations">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/test-invocations"]>;
  RunAgentTestSuiteRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/{agent_id}/run-tests">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/agents/{agent_id}/run-tests"]>;
  GetTestInvocationRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/test-invocations/{test_invocation_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/test-invocations/{test_invocation_id}"]>;
  ResubmitTestsRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/test-invocations/{test_invocation_id}/resubmit">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/test-invocations/{test_invocation_id}/resubmit"]>;
}

export const ElevenLabsFullApiV1GeneratedFunctionNames = [
  "GetUserInfo",
  "GetUserSubscriptionInfo",
  "UsageCharacters",
  "CreateAgentResponseTestRoute",
  "GetAgentResponseTestRoute",
  "UpdateAgentResponseTestRoute",
  "DeleteChatResponseTestRoute",
  "GetAgentResponseTestsSummariesRoute",
  "ListChatResponseTestsRoute",
  "ListTestInvocationsRoute",
  "RunAgentTestSuiteRoute",
  "GetTestInvocationRoute",
  "ResubmitTestsRoute"
] as const satisfies readonly (keyof ElevenLabsFullApiV1GeneratedClient)[];

export function createElevenLabsFullApiV1GeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiV1GeneratedClient {
  return {
    GetUserInfo: (...args) => callOperation("GET /v1/user", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/user">)),
    GetUserSubscriptionInfo: (...args) => callOperation("GET /v1/user/subscription", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/user/subscription">)),
    UsageCharacters: (...args) => callOperation("GET /v1/usage/character-stats", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/usage/character-stats">)),
    CreateAgentResponseTestRoute: (...args) => callOperation("POST /v1/convai/agent-testing/create", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/agent-testing/create">)),
    GetAgentResponseTestRoute: (...args) => callOperation("GET /v1/convai/agent-testing/{test_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/agent-testing/{test_id}">)),
    UpdateAgentResponseTestRoute: (...args) => callOperation("PUT /v1/convai/agent-testing/{test_id}", ...(args as ElevenLabsFullApiOperationArgs<"PUT /v1/convai/agent-testing/{test_id}">)),
    DeleteChatResponseTestRoute: (...args) => callOperation("DELETE /v1/convai/agent-testing/{test_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/agent-testing/{test_id}">)),
    GetAgentResponseTestsSummariesRoute: (...args) => callOperation("POST /v1/convai/agent-testing/summaries", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/agent-testing/summaries">)),
    ListChatResponseTestsRoute: (...args) => callOperation("GET /v1/convai/agent-testing", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/agent-testing">)),
    ListTestInvocationsRoute: (...args) => callOperation("GET /v1/convai/test-invocations", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/test-invocations">)),
    RunAgentTestSuiteRoute: (...args) => callOperation("POST /v1/convai/agents/{agent_id}/run-tests", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/{agent_id}/run-tests">)),
    GetTestInvocationRoute: (...args) => callOperation("GET /v1/convai/test-invocations/{test_invocation_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/test-invocations/{test_invocation_id}">)),
    ResubmitTestsRoute: (...args) => callOperation("POST /v1/convai/test-invocations/{test_invocation_id}/resubmit", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/test-invocations/{test_invocation_id}/resubmit">)),
  };
}
