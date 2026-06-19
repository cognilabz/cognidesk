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
export const AmazonConnectFullApiVocabularySummaryOperationKeys = [
  "connect:SearchVocabularies"
] as const;
export type AmazonConnectFullApiVocabularySummaryOperationKey = typeof AmazonConnectFullApiVocabularySummaryOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiVocabularySummaryOperationPathParamMap {
  "connect:SearchVocabularies": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiVocabularySummaryOperationRequestMap {
  "connect:SearchVocabularies": AmazonConnectFullApiOperationInput<"connect:SearchVocabularies">;
}

export interface AmazonConnectFullApiVocabularySummaryGeneratedClient {
  SearchVocabularies(...args: AmazonConnectFullApiOperationArgs<"connect:SearchVocabularies">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchVocabularies"]>;
}

export const AmazonConnectFullApiVocabularySummaryGeneratedFunctionNames = [
  "SearchVocabularies"
] as const satisfies readonly (keyof AmazonConnectFullApiVocabularySummaryGeneratedClient)[];

export function createAmazonConnectFullApiVocabularySummaryGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiVocabularySummaryGeneratedClient {
  return {
    SearchVocabularies: (...args) => callOperation("connect:SearchVocabularies", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchVocabularies">)),
  };
}
