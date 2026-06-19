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
export const AmazonConnectFullApiSearchContactFlowsOperationKeys = [
  "connect:SearchContactFlows"
] as const;
export type AmazonConnectFullApiSearchContactFlowsOperationKey = typeof AmazonConnectFullApiSearchContactFlowsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchContactFlowsOperationPathParamMap {
  "connect:SearchContactFlows": {};
}

export interface AmazonConnectFullApiSearchContactFlowsOperationRequestMap {
  "connect:SearchContactFlows": AmazonConnectFullApiOperationInput<"connect:SearchContactFlows">;
}

export interface AmazonConnectFullApiSearchContactFlowsGeneratedClient {
  SearchContactFlows(...args: AmazonConnectFullApiOperationArgs<"connect:SearchContactFlows">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchContactFlows"]>;
}

export const AmazonConnectFullApiSearchContactFlowsGeneratedFunctionNames = [
  "SearchContactFlows"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchContactFlowsGeneratedClient)[];

export function createAmazonConnectFullApiSearchContactFlowsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchContactFlowsGeneratedClient {
  return {
    SearchContactFlows: (...args) => callOperation("connect:SearchContactFlows", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchContactFlows">)),
  };
}
