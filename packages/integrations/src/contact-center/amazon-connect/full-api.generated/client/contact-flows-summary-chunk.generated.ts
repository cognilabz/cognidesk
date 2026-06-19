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
export const AmazonConnectFullApiContactFlowsSummaryOperationKeys = [
  "connect:ListContactFlows"
] as const;
export type AmazonConnectFullApiContactFlowsSummaryOperationKey = typeof AmazonConnectFullApiContactFlowsSummaryOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiContactFlowsSummaryOperationPathParamMap {
  "connect:ListContactFlows": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiContactFlowsSummaryOperationRequestMap {
  "connect:ListContactFlows": AmazonConnectFullApiOperationInput<"connect:ListContactFlows">;
}

export interface AmazonConnectFullApiContactFlowsSummaryGeneratedClient {
  ListContactFlows(...args: AmazonConnectFullApiOperationArgs<"connect:ListContactFlows">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListContactFlows"]>;
}

export const AmazonConnectFullApiContactFlowsSummaryGeneratedFunctionNames = [
  "ListContactFlows"
] as const satisfies readonly (keyof AmazonConnectFullApiContactFlowsSummaryGeneratedClient)[];

export function createAmazonConnectFullApiContactFlowsSummaryGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiContactFlowsSummaryGeneratedClient {
  return {
    ListContactFlows: (...args) => callOperation("connect:ListContactFlows", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListContactFlows">)),
  };
}
