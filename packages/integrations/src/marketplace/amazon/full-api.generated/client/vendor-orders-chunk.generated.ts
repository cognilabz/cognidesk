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
export const AmazonFullApiVendorOrdersOperationKeys = [
  "vendorDirectFulfillmentOrdersV1:getOrders",
  "vendorDirectFulfillmentOrdersV1:getOrder",
  "vendorDirectFulfillmentOrdersV1:submitAcknowledgement",
  "vendorDirectFulfillmentOrders_2021-12-28:getOrders",
  "vendorDirectFulfillmentOrders_2021-12-28:getOrder",
  "vendorDirectFulfillmentOrders_2021-12-28:submitAcknowledgement",
  "vendorOrders:getPurchaseOrders",
  "vendorOrders:getPurchaseOrder",
  "vendorOrders:submitAcknowledgement",
  "vendorOrders:getPurchaseOrdersStatus"
] as const;
export type AmazonFullApiVendorOrdersOperationKey = typeof AmazonFullApiVendorOrdersOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiVendorOrdersOperationPathParamMap {
  "vendorDirectFulfillmentOrdersV1:getOrders": {};
  "vendorDirectFulfillmentOrdersV1:getOrder": { "purchaseOrderNumber": AmazonFullApiPathParamValue };
  "vendorDirectFulfillmentOrdersV1:submitAcknowledgement": {};
  "vendorDirectFulfillmentOrders_2021-12-28:getOrders": {};
  "vendorDirectFulfillmentOrders_2021-12-28:getOrder": { "purchaseOrderNumber": AmazonFullApiPathParamValue };
  "vendorDirectFulfillmentOrders_2021-12-28:submitAcknowledgement": {};
  "vendorOrders:getPurchaseOrders": {};
  "vendorOrders:getPurchaseOrder": { "purchaseOrderNumber": AmazonFullApiPathParamValue };
  "vendorOrders:submitAcknowledgement": {};
  "vendorOrders:getPurchaseOrdersStatus": {};
}

export interface AmazonFullApiVendorOrdersOperationRequestMap {
  "vendorDirectFulfillmentOrdersV1:getOrders": AmazonFullApiOperationInput<"vendorDirectFulfillmentOrdersV1:getOrders">;
  "vendorDirectFulfillmentOrdersV1:getOrder": AmazonFullApiOperationInput<"vendorDirectFulfillmentOrdersV1:getOrder">;
  "vendorDirectFulfillmentOrdersV1:submitAcknowledgement": AmazonFullApiOperationInput<"vendorDirectFulfillmentOrdersV1:submitAcknowledgement">;
  "vendorDirectFulfillmentOrders_2021-12-28:getOrders": AmazonFullApiOperationInput<"vendorDirectFulfillmentOrders_2021-12-28:getOrders">;
  "vendorDirectFulfillmentOrders_2021-12-28:getOrder": AmazonFullApiOperationInput<"vendorDirectFulfillmentOrders_2021-12-28:getOrder">;
  "vendorDirectFulfillmentOrders_2021-12-28:submitAcknowledgement": AmazonFullApiOperationInput<"vendorDirectFulfillmentOrders_2021-12-28:submitAcknowledgement">;
  "vendorOrders:getPurchaseOrders": AmazonFullApiOperationInput<"vendorOrders:getPurchaseOrders">;
  "vendorOrders:getPurchaseOrder": AmazonFullApiOperationInput<"vendorOrders:getPurchaseOrder">;
  "vendorOrders:submitAcknowledgement": AmazonFullApiOperationInput<"vendorOrders:submitAcknowledgement">;
  "vendorOrders:getPurchaseOrdersStatus": AmazonFullApiOperationInput<"vendorOrders:getPurchaseOrdersStatus">;
}

export interface AmazonFullApiVendorOrdersGeneratedClient {
  GetOrdersVendorDirectFulfillmentOrdersV1(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentOrdersV1:getOrders">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentOrdersV1:getOrders"]>;
  GetOrderVendorDirectFulfillmentOrdersV1(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentOrdersV1:getOrder">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentOrdersV1:getOrder"]>;
  SubmitAcknowledgement(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentOrdersV1:submitAcknowledgement">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentOrdersV1:submitAcknowledgement"]>;
  GetOrdersVendorDirectFulfillmentOrders20211228(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentOrders_2021-12-28:getOrders">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentOrders_2021-12-28:getOrders"]>;
  GetOrderVendorDirectFulfillmentOrders20211228(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentOrders_2021-12-28:getOrder">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentOrders_2021-12-28:getOrder"]>;
  SubmitAcknowledgementVendorDirectFulfillmentOrders20211228(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentOrders_2021-12-28:submitAcknowledgement">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentOrders_2021-12-28:submitAcknowledgement"]>;
  GetPurchaseOrders(...args: AmazonFullApiOperationArgs<"vendorOrders:getPurchaseOrders">): Promise<AmazonFullApiOperationResponseMap["vendorOrders:getPurchaseOrders"]>;
  GetPurchaseOrder(...args: AmazonFullApiOperationArgs<"vendorOrders:getPurchaseOrder">): Promise<AmazonFullApiOperationResponseMap["vendorOrders:getPurchaseOrder"]>;
  SubmitAcknowledgementVendorOrders(...args: AmazonFullApiOperationArgs<"vendorOrders:submitAcknowledgement">): Promise<AmazonFullApiOperationResponseMap["vendorOrders:submitAcknowledgement"]>;
  GetPurchaseOrdersStatus(...args: AmazonFullApiOperationArgs<"vendorOrders:getPurchaseOrdersStatus">): Promise<AmazonFullApiOperationResponseMap["vendorOrders:getPurchaseOrdersStatus"]>;
}

export const AmazonFullApiVendorOrdersGeneratedFunctionNames = [
  "GetOrdersVendorDirectFulfillmentOrdersV1",
  "GetOrderVendorDirectFulfillmentOrdersV1",
  "SubmitAcknowledgement",
  "GetOrdersVendorDirectFulfillmentOrders20211228",
  "GetOrderVendorDirectFulfillmentOrders20211228",
  "SubmitAcknowledgementVendorDirectFulfillmentOrders20211228",
  "GetPurchaseOrders",
  "GetPurchaseOrder",
  "SubmitAcknowledgementVendorOrders",
  "GetPurchaseOrdersStatus"
] as const satisfies readonly (keyof AmazonFullApiVendorOrdersGeneratedClient)[];

export function createAmazonFullApiVendorOrdersGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiVendorOrdersGeneratedClient {
  return {
    GetOrdersVendorDirectFulfillmentOrdersV1: (...args) => callOperation("vendorDirectFulfillmentOrdersV1:getOrders", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentOrdersV1:getOrders">)),
    GetOrderVendorDirectFulfillmentOrdersV1: (...args) => callOperation("vendorDirectFulfillmentOrdersV1:getOrder", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentOrdersV1:getOrder">)),
    SubmitAcknowledgement: (...args) => callOperation("vendorDirectFulfillmentOrdersV1:submitAcknowledgement", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentOrdersV1:submitAcknowledgement">)),
    GetOrdersVendorDirectFulfillmentOrders20211228: (...args) => callOperation("vendorDirectFulfillmentOrders_2021-12-28:getOrders", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentOrders_2021-12-28:getOrders">)),
    GetOrderVendorDirectFulfillmentOrders20211228: (...args) => callOperation("vendorDirectFulfillmentOrders_2021-12-28:getOrder", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentOrders_2021-12-28:getOrder">)),
    SubmitAcknowledgementVendorDirectFulfillmentOrders20211228: (...args) => callOperation("vendorDirectFulfillmentOrders_2021-12-28:submitAcknowledgement", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentOrders_2021-12-28:submitAcknowledgement">)),
    GetPurchaseOrders: (...args) => callOperation("vendorOrders:getPurchaseOrders", ...(args as AmazonFullApiOperationArgs<"vendorOrders:getPurchaseOrders">)),
    GetPurchaseOrder: (...args) => callOperation("vendorOrders:getPurchaseOrder", ...(args as AmazonFullApiOperationArgs<"vendorOrders:getPurchaseOrder">)),
    SubmitAcknowledgementVendorOrders: (...args) => callOperation("vendorOrders:submitAcknowledgement", ...(args as AmazonFullApiOperationArgs<"vendorOrders:submitAcknowledgement">)),
    GetPurchaseOrdersStatus: (...args) => callOperation("vendorOrders:getPurchaseOrdersStatus", ...(args as AmazonFullApiOperationArgs<"vendorOrders:getPurchaseOrdersStatus">)),
  };
}
