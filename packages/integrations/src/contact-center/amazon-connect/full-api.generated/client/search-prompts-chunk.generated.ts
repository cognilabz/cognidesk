// Generated endpoint chunk for AmazonConnectFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonConnectGeneratedOperationCaller,
  AmazonConnectFullApiOperationArgs,
  AmazonConnectFullApiOperationInput,
  AmazonConnectFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonConnectFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonConnectFullApiSearchPromptsOperationKeys = [
  "connect:SearchPrompts"
] as const;
export type AmazonConnectFullApiSearchPromptsOperationKey = typeof AmazonConnectFullApiSearchPromptsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchPromptsOperationPathParamMap {
  "connect:SearchPrompts": {};
}

export interface AmazonConnectFullApiSearchPromptsOperationRequestMap {
  "connect:SearchPrompts": AmazonConnectFullApiOperationInput<"connect:SearchPrompts">;
}

export interface AmazonConnectFullApiSearchPromptsGeneratedClient {
  SearchPrompts(...args: AmazonConnectFullApiOperationArgs<"connect:SearchPrompts">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchPrompts"]>;
}

export const AmazonConnectFullApiSearchPromptsGeneratedFunctionNames = [
  "SearchPrompts"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchPromptsGeneratedClient)[];

export function createAmazonConnectFullApiSearchPromptsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchPromptsGeneratedClient {
  return {
    SearchPrompts: (...args) => callOperation("connect:SearchPrompts", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchPrompts">)),
  };
}
