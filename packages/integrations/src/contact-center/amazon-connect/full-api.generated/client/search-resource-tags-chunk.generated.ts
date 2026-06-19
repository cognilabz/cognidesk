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
export const AmazonConnectFullApiSearchResourceTagsOperationKeys = [
  "connect:SearchResourceTags"
] as const;
export type AmazonConnectFullApiSearchResourceTagsOperationKey = typeof AmazonConnectFullApiSearchResourceTagsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchResourceTagsOperationPathParamMap {
  "connect:SearchResourceTags": {};
}

export interface AmazonConnectFullApiSearchResourceTagsOperationRequestMap {
  "connect:SearchResourceTags": AmazonConnectFullApiOperationInput<"connect:SearchResourceTags">;
}

export interface AmazonConnectFullApiSearchResourceTagsGeneratedClient {
  SearchResourceTags(...args: AmazonConnectFullApiOperationArgs<"connect:SearchResourceTags">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchResourceTags"]>;
}

export const AmazonConnectFullApiSearchResourceTagsGeneratedFunctionNames = [
  "SearchResourceTags"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchResourceTagsGeneratedClient)[];

export function createAmazonConnectFullApiSearchResourceTagsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchResourceTagsGeneratedClient {
  return {
    SearchResourceTags: (...args) => callOperation("connect:SearchResourceTags", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchResourceTags">)),
  };
}
