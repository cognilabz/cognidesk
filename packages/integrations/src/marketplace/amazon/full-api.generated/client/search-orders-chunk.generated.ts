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
export const AmazonFullApiSearchOrdersOperationKeys = [
  "orders_2026-01-01:searchOrders"
] as const;
export type AmazonFullApiSearchOrdersOperationKey = typeof AmazonFullApiSearchOrdersOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiSearchOrdersOperationPathParamMap {
  "orders_2026-01-01:searchOrders": {};
}

export interface AmazonFullApiSearchOrdersOperationRequestMap {
  "orders_2026-01-01:searchOrders": AmazonFullApiOperationInput<"orders_2026-01-01:searchOrders">;
}

export interface AmazonFullApiSearchOrdersGeneratedClient {
  SearchOrders(...args: AmazonFullApiOperationArgs<"orders_2026-01-01:searchOrders">): Promise<AmazonFullApiOperationResponseMap["orders_2026-01-01:searchOrders"]>;
}

export const AmazonFullApiSearchOrdersGeneratedFunctionNames = [
  "SearchOrders"
] as const satisfies readonly (keyof AmazonFullApiSearchOrdersGeneratedClient)[];

export function createAmazonFullApiSearchOrdersGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiSearchOrdersGeneratedClient {
  return {
    SearchOrders: (...args) => callOperation("orders_2026-01-01:searchOrders", ...(args as AmazonFullApiOperationArgs<"orders_2026-01-01:searchOrders">)),
  };
}
