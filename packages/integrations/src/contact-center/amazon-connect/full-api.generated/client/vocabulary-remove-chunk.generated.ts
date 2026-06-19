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
export const AmazonConnectFullApiVocabularyRemoveOperationKeys = [
  "connect:DeleteVocabulary"
] as const;
export type AmazonConnectFullApiVocabularyRemoveOperationKey = typeof AmazonConnectFullApiVocabularyRemoveOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiVocabularyRemoveOperationPathParamMap {
  "connect:DeleteVocabulary": { "InstanceId": AmazonConnectFullApiPathParamValue; "VocabularyId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiVocabularyRemoveOperationRequestMap {
  "connect:DeleteVocabulary": AmazonConnectFullApiOperationInput<"connect:DeleteVocabulary">;
}

export interface AmazonConnectFullApiVocabularyRemoveGeneratedClient {
  DeleteVocabulary(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteVocabulary">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteVocabulary"]>;
}

export const AmazonConnectFullApiVocabularyRemoveGeneratedFunctionNames = [
  "DeleteVocabulary"
] as const satisfies readonly (keyof AmazonConnectFullApiVocabularyRemoveGeneratedClient)[];

export function createAmazonConnectFullApiVocabularyRemoveGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiVocabularyRemoveGeneratedClient {
  return {
    DeleteVocabulary: (...args) => callOperation("connect:DeleteVocabulary", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteVocabulary">)),
  };
}
