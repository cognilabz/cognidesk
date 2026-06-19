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
export const AmazonConnectFullApiSearchPredefinedAttributesOperationKeys = [
  "connect:SearchPredefinedAttributes"
] as const;
export type AmazonConnectFullApiSearchPredefinedAttributesOperationKey = typeof AmazonConnectFullApiSearchPredefinedAttributesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchPredefinedAttributesOperationPathParamMap {
  "connect:SearchPredefinedAttributes": {};
}

export interface AmazonConnectFullApiSearchPredefinedAttributesOperationRequestMap {
  "connect:SearchPredefinedAttributes": AmazonConnectFullApiOperationInput<"connect:SearchPredefinedAttributes">;
}

export interface AmazonConnectFullApiSearchPredefinedAttributesGeneratedClient {
  SearchPredefinedAttributes(...args: AmazonConnectFullApiOperationArgs<"connect:SearchPredefinedAttributes">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchPredefinedAttributes"]>;
}

export const AmazonConnectFullApiSearchPredefinedAttributesGeneratedFunctionNames = [
  "SearchPredefinedAttributes"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchPredefinedAttributesGeneratedClient)[];

export function createAmazonConnectFullApiSearchPredefinedAttributesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchPredefinedAttributesGeneratedClient {
  return {
    SearchPredefinedAttributes: (...args) => callOperation("connect:SearchPredefinedAttributes", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchPredefinedAttributes">)),
  };
}
