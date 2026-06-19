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
export const RingCentralDigitalApiReplyAssistantVersionsOperationKeys = [
  "GET /reply_assistant/versions",
  "POST /reply_assistant/versions",
  "DELETE /reply_assistant/versions/{replyAssistantVersionId}",
  "GET /reply_assistant/versions/{replyAssistantVersionId}",
  "PUT /reply_assistant/versions/{replyAssistantVersionId}"
] as const;
export type RingCentralDigitalApiReplyAssistantVersionsOperationKey = typeof RingCentralDigitalApiReplyAssistantVersionsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiReplyAssistantVersionsOperationPathParamMap {
  "GET /reply_assistant/versions": {};
  "POST /reply_assistant/versions": {};
  "DELETE /reply_assistant/versions/{replyAssistantVersionId}": { "replyAssistantVersionId": RingCentralDigitalApiPathParamValue };
  "GET /reply_assistant/versions/{replyAssistantVersionId}": { "replyAssistantVersionId": RingCentralDigitalApiPathParamValue };
  "PUT /reply_assistant/versions/{replyAssistantVersionId}": { "replyAssistantVersionId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiReplyAssistantVersionsOperationRequestMap {
  "GET /reply_assistant/versions": RingCentralDigitalApiOperationInput<"GET /reply_assistant/versions">;
  "POST /reply_assistant/versions": RingCentralDigitalApiOperationInput<"POST /reply_assistant/versions">;
  "DELETE /reply_assistant/versions/{replyAssistantVersionId}": RingCentralDigitalApiOperationInput<"DELETE /reply_assistant/versions/{replyAssistantVersionId}">;
  "GET /reply_assistant/versions/{replyAssistantVersionId}": RingCentralDigitalApiOperationInput<"GET /reply_assistant/versions/{replyAssistantVersionId}">;
  "PUT /reply_assistant/versions/{replyAssistantVersionId}": RingCentralDigitalApiOperationInput<"PUT /reply_assistant/versions/{replyAssistantVersionId}">;
}

export interface RingCentralDigitalApiReplyAssistantVersionsGeneratedClient {
  GetAllReplyAssistantVersions(...args: RingCentralDigitalApiOperationArgs<"GET /reply_assistant/versions">): Promise<RingCentralDigitalApiOperationResponseMap["GET /reply_assistant/versions"]>;
  CreateReplyAssistantVersion(...args: RingCentralDigitalApiOperationArgs<"POST /reply_assistant/versions">): Promise<RingCentralDigitalApiOperationResponseMap["POST /reply_assistant/versions"]>;
  DeleteReplyAssistantVersion(...args: RingCentralDigitalApiOperationArgs<"DELETE /reply_assistant/versions/{replyAssistantVersionId}">): Promise<RingCentralDigitalApiOperationResponseMap["DELETE /reply_assistant/versions/{replyAssistantVersionId}"]>;
  GetReplyAssistantVersion(...args: RingCentralDigitalApiOperationArgs<"GET /reply_assistant/versions/{replyAssistantVersionId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /reply_assistant/versions/{replyAssistantVersionId}"]>;
  UpdateReplyAssistantVersion(...args: RingCentralDigitalApiOperationArgs<"PUT /reply_assistant/versions/{replyAssistantVersionId}">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /reply_assistant/versions/{replyAssistantVersionId}"]>;
}

export const RingCentralDigitalApiReplyAssistantVersionsGeneratedFunctionNames = [
  "GetAllReplyAssistantVersions",
  "CreateReplyAssistantVersion",
  "DeleteReplyAssistantVersion",
  "GetReplyAssistantVersion",
  "UpdateReplyAssistantVersion"
] as const satisfies readonly (keyof RingCentralDigitalApiReplyAssistantVersionsGeneratedClient)[];

export function createRingCentralDigitalApiReplyAssistantVersionsGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiReplyAssistantVersionsGeneratedClient {
  return {
    GetAllReplyAssistantVersions: (...args) => callOperation("GET /reply_assistant/versions", ...(args as RingCentralDigitalApiOperationArgs<"GET /reply_assistant/versions">)),
    CreateReplyAssistantVersion: (...args) => callOperation("POST /reply_assistant/versions", ...(args as RingCentralDigitalApiOperationArgs<"POST /reply_assistant/versions">)),
    DeleteReplyAssistantVersion: (...args) => callOperation("DELETE /reply_assistant/versions/{replyAssistantVersionId}", ...(args as RingCentralDigitalApiOperationArgs<"DELETE /reply_assistant/versions/{replyAssistantVersionId}">)),
    GetReplyAssistantVersion: (...args) => callOperation("GET /reply_assistant/versions/{replyAssistantVersionId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /reply_assistant/versions/{replyAssistantVersionId}">)),
    UpdateReplyAssistantVersion: (...args) => callOperation("PUT /reply_assistant/versions/{replyAssistantVersionId}", ...(args as RingCentralDigitalApiOperationArgs<"PUT /reply_assistant/versions/{replyAssistantVersionId}">)),
  };
}
