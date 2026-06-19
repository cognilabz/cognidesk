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
export const TalkdeskFullApiFunctionsOperationKeys = [
  "builder-functions-executions-post",
  "builder-functions-function-id-executions-post"
] as const;
export type TalkdeskFullApiFunctionsOperationKey = typeof TalkdeskFullApiFunctionsOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiFunctionsOperationPathParamMap {
  "builder-functions-executions-post": {};
  "builder-functions-function-id-executions-post": { "function_id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiFunctionsOperationRequestMap {
  "builder-functions-executions-post": TalkdeskFullApiOperationInput<"builder-functions-executions-post">;
  "builder-functions-function-id-executions-post": TalkdeskFullApiOperationInput<"builder-functions-function-id-executions-post">;
}

export interface TalkdeskFullApiFunctionsGeneratedClient {
  BuilderFunctionsExecutionsPost(...args: TalkdeskFullApiOperationArgs<"builder-functions-executions-post">): Promise<TalkdeskFullApiOperationResponseMap["builder-functions-executions-post"]>;
  BuilderFunctionsFunctionIdExecutionsPost(...args: TalkdeskFullApiOperationArgs<"builder-functions-function-id-executions-post">): Promise<TalkdeskFullApiOperationResponseMap["builder-functions-function-id-executions-post"]>;
}

export const TalkdeskFullApiFunctionsGeneratedFunctionNames = [
  "BuilderFunctionsExecutionsPost",
  "BuilderFunctionsFunctionIdExecutionsPost"
] as const satisfies readonly (keyof TalkdeskFullApiFunctionsGeneratedClient)[];

export function createTalkdeskFullApiFunctionsGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiFunctionsGeneratedClient {
  return {
    BuilderFunctionsExecutionsPost: (...args) => callOperation("builder-functions-executions-post", ...(args as TalkdeskFullApiOperationArgs<"builder-functions-executions-post">)),
    BuilderFunctionsFunctionIdExecutionsPost: (...args) => callOperation("builder-functions-function-id-executions-post", ...(args as TalkdeskFullApiOperationArgs<"builder-functions-function-id-executions-post">)),
  };
}
