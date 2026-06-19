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
export const AmazonConnectFullApiDefaultVocabularySummaryOperationKeys = [
  "connect:ListDefaultVocabularies"
] as const;
export type AmazonConnectFullApiDefaultVocabularySummaryOperationKey = typeof AmazonConnectFullApiDefaultVocabularySummaryOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiDefaultVocabularySummaryOperationPathParamMap {
  "connect:ListDefaultVocabularies": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiDefaultVocabularySummaryOperationRequestMap {
  "connect:ListDefaultVocabularies": AmazonConnectFullApiOperationInput<"connect:ListDefaultVocabularies">;
}

export interface AmazonConnectFullApiDefaultVocabularySummaryGeneratedClient {
  ListDefaultVocabularies(...args: AmazonConnectFullApiOperationArgs<"connect:ListDefaultVocabularies">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListDefaultVocabularies"]>;
}

export const AmazonConnectFullApiDefaultVocabularySummaryGeneratedFunctionNames = [
  "ListDefaultVocabularies"
] as const satisfies readonly (keyof AmazonConnectFullApiDefaultVocabularySummaryGeneratedClient)[];

export function createAmazonConnectFullApiDefaultVocabularySummaryGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiDefaultVocabularySummaryGeneratedClient {
  return {
    ListDefaultVocabularies: (...args) => callOperation("connect:ListDefaultVocabularies", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListDefaultVocabularies">)),
  };
}
