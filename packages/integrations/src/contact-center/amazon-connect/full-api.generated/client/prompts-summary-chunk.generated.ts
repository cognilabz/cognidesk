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
export const AmazonConnectFullApiPromptsSummaryOperationKeys = [
  "connect:ListPrompts"
] as const;
export type AmazonConnectFullApiPromptsSummaryOperationKey = typeof AmazonConnectFullApiPromptsSummaryOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiPromptsSummaryOperationPathParamMap {
  "connect:ListPrompts": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiPromptsSummaryOperationRequestMap {
  "connect:ListPrompts": AmazonConnectFullApiOperationInput<"connect:ListPrompts">;
}

export interface AmazonConnectFullApiPromptsSummaryGeneratedClient {
  ListPrompts(...args: AmazonConnectFullApiOperationArgs<"connect:ListPrompts">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListPrompts"]>;
}

export const AmazonConnectFullApiPromptsSummaryGeneratedFunctionNames = [
  "ListPrompts"
] as const satisfies readonly (keyof AmazonConnectFullApiPromptsSummaryGeneratedClient)[];

export function createAmazonConnectFullApiPromptsSummaryGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiPromptsSummaryGeneratedClient {
  return {
    ListPrompts: (...args) => callOperation("connect:ListPrompts", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListPrompts">)),
  };
}
