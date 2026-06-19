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
export const AmazonConnectFullApiDefaultVocabularyOperationKeys = [
  "connect:AssociateDefaultVocabulary"
] as const;
export type AmazonConnectFullApiDefaultVocabularyOperationKey = typeof AmazonConnectFullApiDefaultVocabularyOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiDefaultVocabularyOperationPathParamMap {
  "connect:AssociateDefaultVocabulary": { "InstanceId": AmazonConnectFullApiPathParamValue; "LanguageCode": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiDefaultVocabularyOperationRequestMap {
  "connect:AssociateDefaultVocabulary": AmazonConnectFullApiOperationInput<"connect:AssociateDefaultVocabulary">;
}

export interface AmazonConnectFullApiDefaultVocabularyGeneratedClient {
  AssociateDefaultVocabulary(...args: AmazonConnectFullApiOperationArgs<"connect:AssociateDefaultVocabulary">): Promise<AmazonConnectFullApiOperationResponseMap["connect:AssociateDefaultVocabulary"]>;
}

export const AmazonConnectFullApiDefaultVocabularyGeneratedFunctionNames = [
  "AssociateDefaultVocabulary"
] as const satisfies readonly (keyof AmazonConnectFullApiDefaultVocabularyGeneratedClient)[];

export function createAmazonConnectFullApiDefaultVocabularyGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiDefaultVocabularyGeneratedClient {
  return {
    AssociateDefaultVocabulary: (...args) => callOperation("connect:AssociateDefaultVocabulary", ...(args as AmazonConnectFullApiOperationArgs<"connect:AssociateDefaultVocabulary">)),
  };
}
