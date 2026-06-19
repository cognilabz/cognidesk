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
export const RingCentralDigitalApiThreadsOperationKeys = [
  "GET /content_threads",
  "GET /content_threads/{threadId}",
  "PUT /content_threads/{threadId}/close",
  "PUT /content_threads/{threadId}/ignore",
  "GET /content_threads/{threadId}/open",
  "PUT /content_threads/{threadId}/update_categories",
  "PUT /content_threads/{threadId}/disable_text_input",
  "PUT /content_threads/{threadId}/enable_text_input"
] as const;
export type RingCentralDigitalApiThreadsOperationKey = typeof RingCentralDigitalApiThreadsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiThreadsOperationPathParamMap {
  "GET /content_threads": {};
  "GET /content_threads/{threadId}": { "threadId": RingCentralDigitalApiPathParamValue };
  "PUT /content_threads/{threadId}/close": { "threadId": RingCentralDigitalApiPathParamValue };
  "PUT /content_threads/{threadId}/ignore": { "threadId": RingCentralDigitalApiPathParamValue };
  "GET /content_threads/{threadId}/open": { "threadId": RingCentralDigitalApiPathParamValue };
  "PUT /content_threads/{threadId}/update_categories": { "threadId": RingCentralDigitalApiPathParamValue };
  "PUT /content_threads/{threadId}/disable_text_input": { "threadId": RingCentralDigitalApiPathParamValue };
  "PUT /content_threads/{threadId}/enable_text_input": { "threadId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiThreadsOperationRequestMap {
  "GET /content_threads": RingCentralDigitalApiOperationInput<"GET /content_threads">;
  "GET /content_threads/{threadId}": RingCentralDigitalApiOperationInput<"GET /content_threads/{threadId}">;
  "PUT /content_threads/{threadId}/close": RingCentralDigitalApiOperationInput<"PUT /content_threads/{threadId}/close">;
  "PUT /content_threads/{threadId}/ignore": RingCentralDigitalApiOperationInput<"PUT /content_threads/{threadId}/ignore">;
  "GET /content_threads/{threadId}/open": RingCentralDigitalApiOperationInput<"GET /content_threads/{threadId}/open">;
  "PUT /content_threads/{threadId}/update_categories": RingCentralDigitalApiOperationInput<"PUT /content_threads/{threadId}/update_categories">;
  "PUT /content_threads/{threadId}/disable_text_input": RingCentralDigitalApiOperationInput<"PUT /content_threads/{threadId}/disable_text_input">;
  "PUT /content_threads/{threadId}/enable_text_input": RingCentralDigitalApiOperationInput<"PUT /content_threads/{threadId}/enable_text_input">;
}

export interface RingCentralDigitalApiThreadsGeneratedClient {
  GetAllThreads(...args: RingCentralDigitalApiOperationArgs<"GET /content_threads">): Promise<RingCentralDigitalApiOperationResponseMap["GET /content_threads"]>;
  GetThread(...args: RingCentralDigitalApiOperationArgs<"GET /content_threads/{threadId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /content_threads/{threadId}"]>;
  CloseThread(...args: RingCentralDigitalApiOperationArgs<"PUT /content_threads/{threadId}/close">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /content_threads/{threadId}/close"]>;
  ArchiveThread(...args: RingCentralDigitalApiOperationArgs<"PUT /content_threads/{threadId}/ignore">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /content_threads/{threadId}/ignore"]>;
  OpenThread(...args: RingCentralDigitalApiOperationArgs<"GET /content_threads/{threadId}/open">): Promise<RingCentralDigitalApiOperationResponseMap["GET /content_threads/{threadId}/open"]>;
  CategorizeThread(...args: RingCentralDigitalApiOperationArgs<"PUT /content_threads/{threadId}/update_categories">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /content_threads/{threadId}/update_categories"]>;
  DisableThreadTextInput(...args: RingCentralDigitalApiOperationArgs<"PUT /content_threads/{threadId}/disable_text_input">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /content_threads/{threadId}/disable_text_input"]>;
  EnableThreadTextInput(...args: RingCentralDigitalApiOperationArgs<"PUT /content_threads/{threadId}/enable_text_input">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /content_threads/{threadId}/enable_text_input"]>;
}

export const RingCentralDigitalApiThreadsGeneratedFunctionNames = [
  "GetAllThreads",
  "GetThread",
  "CloseThread",
  "ArchiveThread",
  "OpenThread",
  "CategorizeThread",
  "DisableThreadTextInput",
  "EnableThreadTextInput"
] as const satisfies readonly (keyof RingCentralDigitalApiThreadsGeneratedClient)[];

export function createRingCentralDigitalApiThreadsGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiThreadsGeneratedClient {
  return {
    GetAllThreads: (...args) => callOperation("GET /content_threads", ...(args as RingCentralDigitalApiOperationArgs<"GET /content_threads">)),
    GetThread: (...args) => callOperation("GET /content_threads/{threadId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /content_threads/{threadId}">)),
    CloseThread: (...args) => callOperation("PUT /content_threads/{threadId}/close", ...(args as RingCentralDigitalApiOperationArgs<"PUT /content_threads/{threadId}/close">)),
    ArchiveThread: (...args) => callOperation("PUT /content_threads/{threadId}/ignore", ...(args as RingCentralDigitalApiOperationArgs<"PUT /content_threads/{threadId}/ignore">)),
    OpenThread: (...args) => callOperation("GET /content_threads/{threadId}/open", ...(args as RingCentralDigitalApiOperationArgs<"GET /content_threads/{threadId}/open">)),
    CategorizeThread: (...args) => callOperation("PUT /content_threads/{threadId}/update_categories", ...(args as RingCentralDigitalApiOperationArgs<"PUT /content_threads/{threadId}/update_categories">)),
    DisableThreadTextInput: (...args) => callOperation("PUT /content_threads/{threadId}/disable_text_input", ...(args as RingCentralDigitalApiOperationArgs<"PUT /content_threads/{threadId}/disable_text_input">)),
    EnableThreadTextInput: (...args) => callOperation("PUT /content_threads/{threadId}/enable_text_input", ...(args as RingCentralDigitalApiOperationArgs<"PUT /content_threads/{threadId}/enable_text_input">)),
  };
}
