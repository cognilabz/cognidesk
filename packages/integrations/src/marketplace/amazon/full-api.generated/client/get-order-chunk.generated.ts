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
export const AmazonFullApiGetOrderOperationKeys = [
  "orders_2026-01-01:getOrder"
] as const;
export type AmazonFullApiGetOrderOperationKey = typeof AmazonFullApiGetOrderOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiGetOrderOperationPathParamMap {
  "orders_2026-01-01:getOrder": { "orderId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiGetOrderOperationRequestMap {
  "orders_2026-01-01:getOrder": AmazonFullApiOperationInput<"orders_2026-01-01:getOrder">;
}

export interface AmazonFullApiGetOrderGeneratedClient {
  GetOrderOrders20260101(...args: AmazonFullApiOperationArgs<"orders_2026-01-01:getOrder">): Promise<AmazonFullApiOperationResponseMap["orders_2026-01-01:getOrder"]>;
}

export const AmazonFullApiGetOrderGeneratedFunctionNames = [
  "GetOrderOrders20260101"
] as const satisfies readonly (keyof AmazonFullApiGetOrderGeneratedClient)[];

export function createAmazonFullApiGetOrderGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiGetOrderGeneratedClient {
  return {
    GetOrderOrders20260101: (...args) => callOperation("orders_2026-01-01:getOrder", ...(args as AmazonFullApiOperationArgs<"orders_2026-01-01:getOrder">)),
  };
}
