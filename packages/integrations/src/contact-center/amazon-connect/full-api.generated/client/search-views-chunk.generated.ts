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
export const AmazonConnectFullApiSearchViewsOperationKeys = [
  "connect:SearchViews"
] as const;
export type AmazonConnectFullApiSearchViewsOperationKey = typeof AmazonConnectFullApiSearchViewsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchViewsOperationPathParamMap {
  "connect:SearchViews": {};
}

export interface AmazonConnectFullApiSearchViewsOperationRequestMap {
  "connect:SearchViews": AmazonConnectFullApiOperationInput<"connect:SearchViews">;
}

export interface AmazonConnectFullApiSearchViewsGeneratedClient {
  SearchViews(...args: AmazonConnectFullApiOperationArgs<"connect:SearchViews">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchViews"]>;
}

export const AmazonConnectFullApiSearchViewsGeneratedFunctionNames = [
  "SearchViews"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchViewsGeneratedClient)[];

export function createAmazonConnectFullApiSearchViewsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchViewsGeneratedClient {
  return {
    SearchViews: (...args) => callOperation("connect:SearchViews", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchViews">)),
  };
}
