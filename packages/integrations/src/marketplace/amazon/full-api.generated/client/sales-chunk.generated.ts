// Generated endpoint chunk for AmazonFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonGeneratedOperationCaller,
  AmazonFullApiOperationArgs,
  AmazonFullApiOperationInput,
  AmazonFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonFullApiSalesOperationKeys = [
  "sales:getOrderMetrics"
] as const;
export type AmazonFullApiSalesOperationKey = typeof AmazonFullApiSalesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiSalesOperationPathParamMap {
  "sales:getOrderMetrics": {};
}

export interface AmazonFullApiSalesOperationRequestMap {
  "sales:getOrderMetrics": AmazonFullApiOperationInput<"sales:getOrderMetrics">;
}

export interface AmazonFullApiSalesGeneratedClient {
  GetOrderMetrics(...args: AmazonFullApiOperationArgs<"sales:getOrderMetrics">): Promise<AmazonFullApiOperationResponseMap["sales:getOrderMetrics"]>;
}

export const AmazonFullApiSalesGeneratedFunctionNames = [
  "GetOrderMetrics"
] as const satisfies readonly (keyof AmazonFullApiSalesGeneratedClient)[];

export function createAmazonFullApiSalesGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiSalesGeneratedClient {
  return {
    GetOrderMetrics: (...args) => callOperation("sales:getOrderMetrics", ...(args as AmazonFullApiOperationArgs<"sales:getOrderMetrics">)),
  };
}
