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
export const RingCentralDigitalApiReplyAssistantEntriesOperationKeys = [
  "GET /reply_assistant/entries",
  "POST /reply_assistant/entries",
  "DELETE /reply_assistant/entries/{replyAssistantEntryId}",
  "GET /reply_assistant/entries/{replyAssistantEntryId}",
  "PUT /reply_assistant/entries/{replyAssistantEntryId}"
] as const;
export type RingCentralDigitalApiReplyAssistantEntriesOperationKey = typeof RingCentralDigitalApiReplyAssistantEntriesOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiReplyAssistantEntriesOperationPathParamMap {
  "GET /reply_assistant/entries": {};
  "POST /reply_assistant/entries": {};
  "DELETE /reply_assistant/entries/{replyAssistantEntryId}": { "replyAssistantEntryId": RingCentralDigitalApiPathParamValue };
  "GET /reply_assistant/entries/{replyAssistantEntryId}": { "replyAssistantEntryId": RingCentralDigitalApiPathParamValue };
  "PUT /reply_assistant/entries/{replyAssistantEntryId}": { "replyAssistantEntryId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiReplyAssistantEntriesOperationRequestMap {
  "GET /reply_assistant/entries": RingCentralDigitalApiOperationInput<"GET /reply_assistant/entries">;
  "POST /reply_assistant/entries": RingCentralDigitalApiOperationInput<"POST /reply_assistant/entries">;
  "DELETE /reply_assistant/entries/{replyAssistantEntryId}": RingCentralDigitalApiOperationInput<"DELETE /reply_assistant/entries/{replyAssistantEntryId}">;
  "GET /reply_assistant/entries/{replyAssistantEntryId}": RingCentralDigitalApiOperationInput<"GET /reply_assistant/entries/{replyAssistantEntryId}">;
  "PUT /reply_assistant/entries/{replyAssistantEntryId}": RingCentralDigitalApiOperationInput<"PUT /reply_assistant/entries/{replyAssistantEntryId}">;
}

export interface RingCentralDigitalApiReplyAssistantEntriesGeneratedClient {
  GetAllReplyAssistantEntries(...args: RingCentralDigitalApiOperationArgs<"GET /reply_assistant/entries">): Promise<RingCentralDigitalApiOperationResponseMap["GET /reply_assistant/entries"]>;
  CreateReplyAssistantEntry(...args: RingCentralDigitalApiOperationArgs<"POST /reply_assistant/entries">): Promise<RingCentralDigitalApiOperationResponseMap["POST /reply_assistant/entries"]>;
  DeleteReplyAssistantEntry(...args: RingCentralDigitalApiOperationArgs<"DELETE /reply_assistant/entries/{replyAssistantEntryId}">): Promise<RingCentralDigitalApiOperationResponseMap["DELETE /reply_assistant/entries/{replyAssistantEntryId}"]>;
  GetReplyAssistantEntry(...args: RingCentralDigitalApiOperationArgs<"GET /reply_assistant/entries/{replyAssistantEntryId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /reply_assistant/entries/{replyAssistantEntryId}"]>;
  UpdateReplyAssistantEntry(...args: RingCentralDigitalApiOperationArgs<"PUT /reply_assistant/entries/{replyAssistantEntryId}">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /reply_assistant/entries/{replyAssistantEntryId}"]>;
}

export const RingCentralDigitalApiReplyAssistantEntriesGeneratedFunctionNames = [
  "GetAllReplyAssistantEntries",
  "CreateReplyAssistantEntry",
  "DeleteReplyAssistantEntry",
  "GetReplyAssistantEntry",
  "UpdateReplyAssistantEntry"
] as const satisfies readonly (keyof RingCentralDigitalApiReplyAssistantEntriesGeneratedClient)[];

export function createRingCentralDigitalApiReplyAssistantEntriesGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiReplyAssistantEntriesGeneratedClient {
  return {
    GetAllReplyAssistantEntries: (...args) => callOperation("GET /reply_assistant/entries", ...(args as RingCentralDigitalApiOperationArgs<"GET /reply_assistant/entries">)),
    CreateReplyAssistantEntry: (...args) => callOperation("POST /reply_assistant/entries", ...(args as RingCentralDigitalApiOperationArgs<"POST /reply_assistant/entries">)),
    DeleteReplyAssistantEntry: (...args) => callOperation("DELETE /reply_assistant/entries/{replyAssistantEntryId}", ...(args as RingCentralDigitalApiOperationArgs<"DELETE /reply_assistant/entries/{replyAssistantEntryId}">)),
    GetReplyAssistantEntry: (...args) => callOperation("GET /reply_assistant/entries/{replyAssistantEntryId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /reply_assistant/entries/{replyAssistantEntryId}">)),
    UpdateReplyAssistantEntry: (...args) => callOperation("PUT /reply_assistant/entries/{replyAssistantEntryId}", ...(args as RingCentralDigitalApiOperationArgs<"PUT /reply_assistant/entries/{replyAssistantEntryId}">)),
  };
}
