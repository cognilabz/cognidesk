// Generated endpoint chunk for RingCentralDigitalApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralDigitalGeneratedOperationCaller,
  RingCentralDigitalApiOperationArgs,
  RingCentralDigitalApiOperationInput,
  RingCentralDigitalApiPathParamValue,
} from "../../digital-api-client.generated.js";
import type { RingCentralDigitalApiOperationResponseMap } from "../../digital-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralDigitalApiReplyAssistantGroupsOperationKeys = [
  "GET /reply_assistant/groups",
  "POST /reply_assistant/groups",
  "DELETE /reply_assistant/groups/{replyAssistantGroupId}",
  "GET /reply_assistant/groups/{replyAssistantGroupId}",
  "PUT /reply_assistant/groups/{replyAssistantGroupId}"
] as const;
export type RingCentralDigitalApiReplyAssistantGroupsOperationKey = typeof RingCentralDigitalApiReplyAssistantGroupsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiReplyAssistantGroupsOperationPathParamMap {
  "GET /reply_assistant/groups": {};
  "POST /reply_assistant/groups": {};
  "DELETE /reply_assistant/groups/{replyAssistantGroupId}": { "replyAssistantGroupId": RingCentralDigitalApiPathParamValue };
  "GET /reply_assistant/groups/{replyAssistantGroupId}": { "replyAssistantGroupId": RingCentralDigitalApiPathParamValue };
  "PUT /reply_assistant/groups/{replyAssistantGroupId}": { "replyAssistantGroupId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiReplyAssistantGroupsOperationRequestMap {
  "GET /reply_assistant/groups": RingCentralDigitalApiOperationInput<"GET /reply_assistant/groups">;
  "POST /reply_assistant/groups": RingCentralDigitalApiOperationInput<"POST /reply_assistant/groups">;
  "DELETE /reply_assistant/groups/{replyAssistantGroupId}": RingCentralDigitalApiOperationInput<"DELETE /reply_assistant/groups/{replyAssistantGroupId}">;
  "GET /reply_assistant/groups/{replyAssistantGroupId}": RingCentralDigitalApiOperationInput<"GET /reply_assistant/groups/{replyAssistantGroupId}">;
  "PUT /reply_assistant/groups/{replyAssistantGroupId}": RingCentralDigitalApiOperationInput<"PUT /reply_assistant/groups/{replyAssistantGroupId}">;
}

export interface RingCentralDigitalApiReplyAssistantGroupsGeneratedClient {
  GetAllReplyAssistantGroups(...args: RingCentralDigitalApiOperationArgs<"GET /reply_assistant/groups">): Promise<RingCentralDigitalApiOperationResponseMap["GET /reply_assistant/groups"]>;
  CreateReplyAssistantGroup(...args: RingCentralDigitalApiOperationArgs<"POST /reply_assistant/groups">): Promise<RingCentralDigitalApiOperationResponseMap["POST /reply_assistant/groups"]>;
  DeleteReplyAssistantGroup(...args: RingCentralDigitalApiOperationArgs<"DELETE /reply_assistant/groups/{replyAssistantGroupId}">): Promise<RingCentralDigitalApiOperationResponseMap["DELETE /reply_assistant/groups/{replyAssistantGroupId}"]>;
  GetReplyAssistantGroup(...args: RingCentralDigitalApiOperationArgs<"GET /reply_assistant/groups/{replyAssistantGroupId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /reply_assistant/groups/{replyAssistantGroupId}"]>;
  UpdateReplyAssistantGroup(...args: RingCentralDigitalApiOperationArgs<"PUT /reply_assistant/groups/{replyAssistantGroupId}">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /reply_assistant/groups/{replyAssistantGroupId}"]>;
}

export const RingCentralDigitalApiReplyAssistantGroupsGeneratedFunctionNames = [
  "GetAllReplyAssistantGroups",
  "CreateReplyAssistantGroup",
  "DeleteReplyAssistantGroup",
  "GetReplyAssistantGroup",
  "UpdateReplyAssistantGroup"
] as const satisfies readonly (keyof RingCentralDigitalApiReplyAssistantGroupsGeneratedClient)[];

export function createRingCentralDigitalApiReplyAssistantGroupsGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiReplyAssistantGroupsGeneratedClient {
  return {
    GetAllReplyAssistantGroups: (...args) => callOperation("GET /reply_assistant/groups", ...(args as RingCentralDigitalApiOperationArgs<"GET /reply_assistant/groups">)),
    CreateReplyAssistantGroup: (...args) => callOperation("POST /reply_assistant/groups", ...(args as RingCentralDigitalApiOperationArgs<"POST /reply_assistant/groups">)),
    DeleteReplyAssistantGroup: (...args) => callOperation("DELETE /reply_assistant/groups/{replyAssistantGroupId}", ...(args as RingCentralDigitalApiOperationArgs<"DELETE /reply_assistant/groups/{replyAssistantGroupId}">)),
    GetReplyAssistantGroup: (...args) => callOperation("GET /reply_assistant/groups/{replyAssistantGroupId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /reply_assistant/groups/{replyAssistantGroupId}">)),
    UpdateReplyAssistantGroup: (...args) => callOperation("PUT /reply_assistant/groups/{replyAssistantGroupId}", ...(args as RingCentralDigitalApiOperationArgs<"PUT /reply_assistant/groups/{replyAssistantGroupId}">)),
  };
}
