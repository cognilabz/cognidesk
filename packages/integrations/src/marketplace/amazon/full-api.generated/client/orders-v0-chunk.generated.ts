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
export const AmazonFullApiOrdersV0OperationKeys = [
  "ordersV0:getOrders",
  "ordersV0:getOrder",
  "ordersV0:getOrderBuyerInfo",
  "ordersV0:getOrderAddress",
  "ordersV0:getOrderItems",
  "ordersV0:getOrderItemsBuyerInfo",
  "ordersV0:getOrderRegulatedInfo",
  "ordersV0:updateVerificationStatus",
  "ordersV0:confirmShipment"
] as const;
export type AmazonFullApiOrdersV0OperationKey = typeof AmazonFullApiOrdersV0OperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiOrdersV0OperationPathParamMap {
  "ordersV0:getOrders": {};
  "ordersV0:getOrder": { "orderId": AmazonFullApiPathParamValue };
  "ordersV0:getOrderBuyerInfo": { "orderId": AmazonFullApiPathParamValue };
  "ordersV0:getOrderAddress": { "orderId": AmazonFullApiPathParamValue };
  "ordersV0:getOrderItems": { "orderId": AmazonFullApiPathParamValue };
  "ordersV0:getOrderItemsBuyerInfo": { "orderId": AmazonFullApiPathParamValue };
  "ordersV0:getOrderRegulatedInfo": { "orderId": AmazonFullApiPathParamValue };
  "ordersV0:updateVerificationStatus": { "orderId": AmazonFullApiPathParamValue };
  "ordersV0:confirmShipment": { "orderId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiOrdersV0OperationRequestMap {
  "ordersV0:getOrders": AmazonFullApiOperationInput<"ordersV0:getOrders">;
  "ordersV0:getOrder": AmazonFullApiOperationInput<"ordersV0:getOrder">;
  "ordersV0:getOrderBuyerInfo": AmazonFullApiOperationInput<"ordersV0:getOrderBuyerInfo">;
  "ordersV0:getOrderAddress": AmazonFullApiOperationInput<"ordersV0:getOrderAddress">;
  "ordersV0:getOrderItems": AmazonFullApiOperationInput<"ordersV0:getOrderItems">;
  "ordersV0:getOrderItemsBuyerInfo": AmazonFullApiOperationInput<"ordersV0:getOrderItemsBuyerInfo">;
  "ordersV0:getOrderRegulatedInfo": AmazonFullApiOperationInput<"ordersV0:getOrderRegulatedInfo">;
  "ordersV0:updateVerificationStatus": AmazonFullApiOperationInput<"ordersV0:updateVerificationStatus">;
  "ordersV0:confirmShipment": AmazonFullApiOperationInput<"ordersV0:confirmShipment">;
}

export interface AmazonFullApiOrdersV0GeneratedClient {
  GetOrders(...args: AmazonFullApiOperationArgs<"ordersV0:getOrders">): Promise<AmazonFullApiOperationResponseMap["ordersV0:getOrders"]>;
  GetOrder(...args: AmazonFullApiOperationArgs<"ordersV0:getOrder">): Promise<AmazonFullApiOperationResponseMap["ordersV0:getOrder"]>;
  GetOrderBuyerInfo(...args: AmazonFullApiOperationArgs<"ordersV0:getOrderBuyerInfo">): Promise<AmazonFullApiOperationResponseMap["ordersV0:getOrderBuyerInfo"]>;
  GetOrderAddress(...args: AmazonFullApiOperationArgs<"ordersV0:getOrderAddress">): Promise<AmazonFullApiOperationResponseMap["ordersV0:getOrderAddress"]>;
  GetOrderItems(...args: AmazonFullApiOperationArgs<"ordersV0:getOrderItems">): Promise<AmazonFullApiOperationResponseMap["ordersV0:getOrderItems"]>;
  GetOrderItemsBuyerInfo(...args: AmazonFullApiOperationArgs<"ordersV0:getOrderItemsBuyerInfo">): Promise<AmazonFullApiOperationResponseMap["ordersV0:getOrderItemsBuyerInfo"]>;
  GetOrderRegulatedInfo(...args: AmazonFullApiOperationArgs<"ordersV0:getOrderRegulatedInfo">): Promise<AmazonFullApiOperationResponseMap["ordersV0:getOrderRegulatedInfo"]>;
  UpdateVerificationStatus(...args: AmazonFullApiOperationArgs<"ordersV0:updateVerificationStatus">): Promise<AmazonFullApiOperationResponseMap["ordersV0:updateVerificationStatus"]>;
  ConfirmShipment(...args: AmazonFullApiOperationArgs<"ordersV0:confirmShipment">): Promise<AmazonFullApiOperationResponseMap["ordersV0:confirmShipment"]>;
}

export const AmazonFullApiOrdersV0GeneratedFunctionNames = [
  "GetOrders",
  "GetOrder",
  "GetOrderBuyerInfo",
  "GetOrderAddress",
  "GetOrderItems",
  "GetOrderItemsBuyerInfo",
  "GetOrderRegulatedInfo",
  "UpdateVerificationStatus",
  "ConfirmShipment"
] as const satisfies readonly (keyof AmazonFullApiOrdersV0GeneratedClient)[];

export function createAmazonFullApiOrdersV0GeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiOrdersV0GeneratedClient {
  return {
    GetOrders: (...args) => callOperation("ordersV0:getOrders", ...(args as AmazonFullApiOperationArgs<"ordersV0:getOrders">)),
    GetOrder: (...args) => callOperation("ordersV0:getOrder", ...(args as AmazonFullApiOperationArgs<"ordersV0:getOrder">)),
    GetOrderBuyerInfo: (...args) => callOperation("ordersV0:getOrderBuyerInfo", ...(args as AmazonFullApiOperationArgs<"ordersV0:getOrderBuyerInfo">)),
    GetOrderAddress: (...args) => callOperation("ordersV0:getOrderAddress", ...(args as AmazonFullApiOperationArgs<"ordersV0:getOrderAddress">)),
    GetOrderItems: (...args) => callOperation("ordersV0:getOrderItems", ...(args as AmazonFullApiOperationArgs<"ordersV0:getOrderItems">)),
    GetOrderItemsBuyerInfo: (...args) => callOperation("ordersV0:getOrderItemsBuyerInfo", ...(args as AmazonFullApiOperationArgs<"ordersV0:getOrderItemsBuyerInfo">)),
    GetOrderRegulatedInfo: (...args) => callOperation("ordersV0:getOrderRegulatedInfo", ...(args as AmazonFullApiOperationArgs<"ordersV0:getOrderRegulatedInfo">)),
    UpdateVerificationStatus: (...args) => callOperation("ordersV0:updateVerificationStatus", ...(args as AmazonFullApiOperationArgs<"ordersV0:updateVerificationStatus">)),
    ConfirmShipment: (...args) => callOperation("ordersV0:confirmShipment", ...(args as AmazonFullApiOperationArgs<"ordersV0:confirmShipment">)),
  };
}
