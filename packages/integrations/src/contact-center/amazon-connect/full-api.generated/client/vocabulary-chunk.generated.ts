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
export const AmazonConnectFullApiVocabularyOperationKeys = [
  "connect:CreateVocabulary",
  "connect:DescribeVocabulary"
] as const;
export type AmazonConnectFullApiVocabularyOperationKey = typeof AmazonConnectFullApiVocabularyOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiVocabularyOperationPathParamMap {
  "connect:CreateVocabulary": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeVocabulary": { "InstanceId": AmazonConnectFullApiPathParamValue; "VocabularyId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiVocabularyOperationRequestMap {
  "connect:CreateVocabulary": AmazonConnectFullApiOperationInput<"connect:CreateVocabulary">;
  "connect:DescribeVocabulary": AmazonConnectFullApiOperationInput<"connect:DescribeVocabulary">;
}

export interface AmazonConnectFullApiVocabularyGeneratedClient {
  CreateVocabulary(...args: AmazonConnectFullApiOperationArgs<"connect:CreateVocabulary">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateVocabulary"]>;
  DescribeVocabulary(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeVocabulary">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeVocabulary"]>;
}

export const AmazonConnectFullApiVocabularyGeneratedFunctionNames = [
  "CreateVocabulary",
  "DescribeVocabulary"
] as const satisfies readonly (keyof AmazonConnectFullApiVocabularyGeneratedClient)[];

export function createAmazonConnectFullApiVocabularyGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiVocabularyGeneratedClient {
  return {
    CreateVocabulary: (...args) => callOperation("connect:CreateVocabulary", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateVocabulary">)),
    DescribeVocabulary: (...args) => callOperation("connect:DescribeVocabulary", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeVocabulary">)),
  };
}
