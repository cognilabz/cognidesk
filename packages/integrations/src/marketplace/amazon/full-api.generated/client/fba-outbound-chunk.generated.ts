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
export const AmazonFullApiFbaOutboundOperationKeys = [
  "fulfillmentOutbound_2020-07-01:getFulfillmentPreview",
  "fulfillmentOutbound_2020-07-01:deliveryOffers",
  "fulfillmentOutbound_2020-07-01:listAllFulfillmentOrders",
  "fulfillmentOutbound_2020-07-01:createFulfillmentOrder",
  "fulfillmentOutbound_2020-07-01:getPackageTrackingDetails",
  "fulfillmentOutbound_2020-07-01:listReturnReasonCodes",
  "fulfillmentOutbound_2020-07-01:createFulfillmentReturn",
  "fulfillmentOutbound_2020-07-01:getFulfillmentOrder",
  "fulfillmentOutbound_2020-07-01:updateFulfillmentOrder",
  "fulfillmentOutbound_2020-07-01:cancelFulfillmentOrder",
  "fulfillmentOutbound_2020-07-01:submitFulfillmentOrderStatusUpdate",
  "fulfillmentOutbound_2020-07-01:getFeatures",
  "fulfillmentOutbound_2020-07-01:getFeatureInventory",
  "fulfillmentOutbound_2020-07-01:getFeatureSKU"
] as const;
export type AmazonFullApiFbaOutboundOperationKey = typeof AmazonFullApiFbaOutboundOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiFbaOutboundOperationPathParamMap {
  "fulfillmentOutbound_2020-07-01:getFulfillmentPreview": {};
  "fulfillmentOutbound_2020-07-01:deliveryOffers": {};
  "fulfillmentOutbound_2020-07-01:listAllFulfillmentOrders": {};
  "fulfillmentOutbound_2020-07-01:createFulfillmentOrder": {};
  "fulfillmentOutbound_2020-07-01:getPackageTrackingDetails": {};
  "fulfillmentOutbound_2020-07-01:listReturnReasonCodes": {};
  "fulfillmentOutbound_2020-07-01:createFulfillmentReturn": { "sellerFulfillmentOrderId": AmazonFullApiPathParamValue };
  "fulfillmentOutbound_2020-07-01:getFulfillmentOrder": { "sellerFulfillmentOrderId": AmazonFullApiPathParamValue };
  "fulfillmentOutbound_2020-07-01:updateFulfillmentOrder": { "sellerFulfillmentOrderId": AmazonFullApiPathParamValue };
  "fulfillmentOutbound_2020-07-01:cancelFulfillmentOrder": { "sellerFulfillmentOrderId": AmazonFullApiPathParamValue };
  "fulfillmentOutbound_2020-07-01:submitFulfillmentOrderStatusUpdate": { "sellerFulfillmentOrderId": AmazonFullApiPathParamValue };
  "fulfillmentOutbound_2020-07-01:getFeatures": {};
  "fulfillmentOutbound_2020-07-01:getFeatureInventory": { "featureName": AmazonFullApiPathParamValue };
  "fulfillmentOutbound_2020-07-01:getFeatureSKU": { "featureName": AmazonFullApiPathParamValue; "sellerSku": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiFbaOutboundOperationRequestMap {
  "fulfillmentOutbound_2020-07-01:getFulfillmentPreview": AmazonFullApiOperationInput<"fulfillmentOutbound_2020-07-01:getFulfillmentPreview">;
  "fulfillmentOutbound_2020-07-01:deliveryOffers": AmazonFullApiOperationInput<"fulfillmentOutbound_2020-07-01:deliveryOffers">;
  "fulfillmentOutbound_2020-07-01:listAllFulfillmentOrders": AmazonFullApiOperationInput<"fulfillmentOutbound_2020-07-01:listAllFulfillmentOrders">;
  "fulfillmentOutbound_2020-07-01:createFulfillmentOrder": AmazonFullApiOperationInput<"fulfillmentOutbound_2020-07-01:createFulfillmentOrder">;
  "fulfillmentOutbound_2020-07-01:getPackageTrackingDetails": AmazonFullApiOperationInput<"fulfillmentOutbound_2020-07-01:getPackageTrackingDetails">;
  "fulfillmentOutbound_2020-07-01:listReturnReasonCodes": AmazonFullApiOperationInput<"fulfillmentOutbound_2020-07-01:listReturnReasonCodes">;
  "fulfillmentOutbound_2020-07-01:createFulfillmentReturn": AmazonFullApiOperationInput<"fulfillmentOutbound_2020-07-01:createFulfillmentReturn">;
  "fulfillmentOutbound_2020-07-01:getFulfillmentOrder": AmazonFullApiOperationInput<"fulfillmentOutbound_2020-07-01:getFulfillmentOrder">;
  "fulfillmentOutbound_2020-07-01:updateFulfillmentOrder": AmazonFullApiOperationInput<"fulfillmentOutbound_2020-07-01:updateFulfillmentOrder">;
  "fulfillmentOutbound_2020-07-01:cancelFulfillmentOrder": AmazonFullApiOperationInput<"fulfillmentOutbound_2020-07-01:cancelFulfillmentOrder">;
  "fulfillmentOutbound_2020-07-01:submitFulfillmentOrderStatusUpdate": AmazonFullApiOperationInput<"fulfillmentOutbound_2020-07-01:submitFulfillmentOrderStatusUpdate">;
  "fulfillmentOutbound_2020-07-01:getFeatures": AmazonFullApiOperationInput<"fulfillmentOutbound_2020-07-01:getFeatures">;
  "fulfillmentOutbound_2020-07-01:getFeatureInventory": AmazonFullApiOperationInput<"fulfillmentOutbound_2020-07-01:getFeatureInventory">;
  "fulfillmentOutbound_2020-07-01:getFeatureSKU": AmazonFullApiOperationInput<"fulfillmentOutbound_2020-07-01:getFeatureSKU">;
}

export interface AmazonFullApiFbaOutboundGeneratedClient {
  GetFulfillmentPreview(...args: AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:getFulfillmentPreview">): Promise<AmazonFullApiOperationResponseMap["fulfillmentOutbound_2020-07-01:getFulfillmentPreview"]>;
  DeliveryOffers(...args: AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:deliveryOffers">): Promise<AmazonFullApiOperationResponseMap["fulfillmentOutbound_2020-07-01:deliveryOffers"]>;
  ListAllFulfillmentOrders(...args: AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:listAllFulfillmentOrders">): Promise<AmazonFullApiOperationResponseMap["fulfillmentOutbound_2020-07-01:listAllFulfillmentOrders"]>;
  CreateFulfillmentOrder(...args: AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:createFulfillmentOrder">): Promise<AmazonFullApiOperationResponseMap["fulfillmentOutbound_2020-07-01:createFulfillmentOrder"]>;
  GetPackageTrackingDetails(...args: AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:getPackageTrackingDetails">): Promise<AmazonFullApiOperationResponseMap["fulfillmentOutbound_2020-07-01:getPackageTrackingDetails"]>;
  ListReturnReasonCodes(...args: AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:listReturnReasonCodes">): Promise<AmazonFullApiOperationResponseMap["fulfillmentOutbound_2020-07-01:listReturnReasonCodes"]>;
  CreateFulfillmentReturn(...args: AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:createFulfillmentReturn">): Promise<AmazonFullApiOperationResponseMap["fulfillmentOutbound_2020-07-01:createFulfillmentReturn"]>;
  GetFulfillmentOrder(...args: AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:getFulfillmentOrder">): Promise<AmazonFullApiOperationResponseMap["fulfillmentOutbound_2020-07-01:getFulfillmentOrder"]>;
  UpdateFulfillmentOrder(...args: AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:updateFulfillmentOrder">): Promise<AmazonFullApiOperationResponseMap["fulfillmentOutbound_2020-07-01:updateFulfillmentOrder"]>;
  CancelFulfillmentOrder(...args: AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:cancelFulfillmentOrder">): Promise<AmazonFullApiOperationResponseMap["fulfillmentOutbound_2020-07-01:cancelFulfillmentOrder"]>;
  SubmitFulfillmentOrderStatusUpdate(...args: AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:submitFulfillmentOrderStatusUpdate">): Promise<AmazonFullApiOperationResponseMap["fulfillmentOutbound_2020-07-01:submitFulfillmentOrderStatusUpdate"]>;
  GetFeatures(...args: AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:getFeatures">): Promise<AmazonFullApiOperationResponseMap["fulfillmentOutbound_2020-07-01:getFeatures"]>;
  GetFeatureInventory(...args: AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:getFeatureInventory">): Promise<AmazonFullApiOperationResponseMap["fulfillmentOutbound_2020-07-01:getFeatureInventory"]>;
  GetFeatureSKU(...args: AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:getFeatureSKU">): Promise<AmazonFullApiOperationResponseMap["fulfillmentOutbound_2020-07-01:getFeatureSKU"]>;
}

export const AmazonFullApiFbaOutboundGeneratedFunctionNames = [
  "GetFulfillmentPreview",
  "DeliveryOffers",
  "ListAllFulfillmentOrders",
  "CreateFulfillmentOrder",
  "GetPackageTrackingDetails",
  "ListReturnReasonCodes",
  "CreateFulfillmentReturn",
  "GetFulfillmentOrder",
  "UpdateFulfillmentOrder",
  "CancelFulfillmentOrder",
  "SubmitFulfillmentOrderStatusUpdate",
  "GetFeatures",
  "GetFeatureInventory",
  "GetFeatureSKU"
] as const satisfies readonly (keyof AmazonFullApiFbaOutboundGeneratedClient)[];

export function createAmazonFullApiFbaOutboundGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiFbaOutboundGeneratedClient {
  return {
    GetFulfillmentPreview: (...args) => callOperation("fulfillmentOutbound_2020-07-01:getFulfillmentPreview", ...(args as AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:getFulfillmentPreview">)),
    DeliveryOffers: (...args) => callOperation("fulfillmentOutbound_2020-07-01:deliveryOffers", ...(args as AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:deliveryOffers">)),
    ListAllFulfillmentOrders: (...args) => callOperation("fulfillmentOutbound_2020-07-01:listAllFulfillmentOrders", ...(args as AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:listAllFulfillmentOrders">)),
    CreateFulfillmentOrder: (...args) => callOperation("fulfillmentOutbound_2020-07-01:createFulfillmentOrder", ...(args as AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:createFulfillmentOrder">)),
    GetPackageTrackingDetails: (...args) => callOperation("fulfillmentOutbound_2020-07-01:getPackageTrackingDetails", ...(args as AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:getPackageTrackingDetails">)),
    ListReturnReasonCodes: (...args) => callOperation("fulfillmentOutbound_2020-07-01:listReturnReasonCodes", ...(args as AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:listReturnReasonCodes">)),
    CreateFulfillmentReturn: (...args) => callOperation("fulfillmentOutbound_2020-07-01:createFulfillmentReturn", ...(args as AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:createFulfillmentReturn">)),
    GetFulfillmentOrder: (...args) => callOperation("fulfillmentOutbound_2020-07-01:getFulfillmentOrder", ...(args as AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:getFulfillmentOrder">)),
    UpdateFulfillmentOrder: (...args) => callOperation("fulfillmentOutbound_2020-07-01:updateFulfillmentOrder", ...(args as AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:updateFulfillmentOrder">)),
    CancelFulfillmentOrder: (...args) => callOperation("fulfillmentOutbound_2020-07-01:cancelFulfillmentOrder", ...(args as AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:cancelFulfillmentOrder">)),
    SubmitFulfillmentOrderStatusUpdate: (...args) => callOperation("fulfillmentOutbound_2020-07-01:submitFulfillmentOrderStatusUpdate", ...(args as AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:submitFulfillmentOrderStatusUpdate">)),
    GetFeatures: (...args) => callOperation("fulfillmentOutbound_2020-07-01:getFeatures", ...(args as AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:getFeatures">)),
    GetFeatureInventory: (...args) => callOperation("fulfillmentOutbound_2020-07-01:getFeatureInventory", ...(args as AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:getFeatureInventory">)),
    GetFeatureSKU: (...args) => callOperation("fulfillmentOutbound_2020-07-01:getFeatureSKU", ...(args as AmazonFullApiOperationArgs<"fulfillmentOutbound_2020-07-01:getFeatureSKU">)),
  };
}
