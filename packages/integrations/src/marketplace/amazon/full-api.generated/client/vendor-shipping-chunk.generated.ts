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
export const AmazonFullApiVendorShippingOperationKeys = [
  "vendorDirectFulfillmentShippingV1:submitShipmentConfirmations",
  "vendorDirectFulfillmentShippingV1:submitShipmentStatusUpdates",
  "vendorDirectFulfillmentShippingV1:getPackingSlips",
  "vendorDirectFulfillmentShippingV1:getPackingSlip",
  "vendorDirectFulfillmentShipping_2021-12-28:submitShipmentConfirmations",
  "vendorDirectFulfillmentShipping_2021-12-28:submitShipmentStatusUpdates",
  "vendorDirectFulfillmentShipping_2021-12-28:getPackingSlips",
  "vendorDirectFulfillmentShipping_2021-12-28:getPackingSlip",
  "vendorShipments:SubmitShipmentConfirmations",
  "vendorShipments:SubmitShipments",
  "vendorShipments:GetShipmentDetails",
  "vendorShipments:GetShipmentLabels"
] as const;
export type AmazonFullApiVendorShippingOperationKey = typeof AmazonFullApiVendorShippingOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiVendorShippingOperationPathParamMap {
  "vendorDirectFulfillmentShippingV1:submitShipmentConfirmations": {};
  "vendorDirectFulfillmentShippingV1:submitShipmentStatusUpdates": {};
  "vendorDirectFulfillmentShippingV1:getPackingSlips": {};
  "vendorDirectFulfillmentShippingV1:getPackingSlip": { "purchaseOrderNumber": AmazonFullApiPathParamValue };
  "vendorDirectFulfillmentShipping_2021-12-28:submitShipmentConfirmations": {};
  "vendorDirectFulfillmentShipping_2021-12-28:submitShipmentStatusUpdates": {};
  "vendorDirectFulfillmentShipping_2021-12-28:getPackingSlips": {};
  "vendorDirectFulfillmentShipping_2021-12-28:getPackingSlip": { "purchaseOrderNumber": AmazonFullApiPathParamValue };
  "vendorShipments:SubmitShipmentConfirmations": {};
  "vendorShipments:SubmitShipments": {};
  "vendorShipments:GetShipmentDetails": {};
  "vendorShipments:GetShipmentLabels": {};
}

export interface AmazonFullApiVendorShippingOperationRequestMap {
  "vendorDirectFulfillmentShippingV1:submitShipmentConfirmations": AmazonFullApiOperationInput<"vendorDirectFulfillmentShippingV1:submitShipmentConfirmations">;
  "vendorDirectFulfillmentShippingV1:submitShipmentStatusUpdates": AmazonFullApiOperationInput<"vendorDirectFulfillmentShippingV1:submitShipmentStatusUpdates">;
  "vendorDirectFulfillmentShippingV1:getPackingSlips": AmazonFullApiOperationInput<"vendorDirectFulfillmentShippingV1:getPackingSlips">;
  "vendorDirectFulfillmentShippingV1:getPackingSlip": AmazonFullApiOperationInput<"vendorDirectFulfillmentShippingV1:getPackingSlip">;
  "vendorDirectFulfillmentShipping_2021-12-28:submitShipmentConfirmations": AmazonFullApiOperationInput<"vendorDirectFulfillmentShipping_2021-12-28:submitShipmentConfirmations">;
  "vendorDirectFulfillmentShipping_2021-12-28:submitShipmentStatusUpdates": AmazonFullApiOperationInput<"vendorDirectFulfillmentShipping_2021-12-28:submitShipmentStatusUpdates">;
  "vendorDirectFulfillmentShipping_2021-12-28:getPackingSlips": AmazonFullApiOperationInput<"vendorDirectFulfillmentShipping_2021-12-28:getPackingSlips">;
  "vendorDirectFulfillmentShipping_2021-12-28:getPackingSlip": AmazonFullApiOperationInput<"vendorDirectFulfillmentShipping_2021-12-28:getPackingSlip">;
  "vendorShipments:SubmitShipmentConfirmations": AmazonFullApiOperationInput<"vendorShipments:SubmitShipmentConfirmations">;
  "vendorShipments:SubmitShipments": AmazonFullApiOperationInput<"vendorShipments:SubmitShipments">;
  "vendorShipments:GetShipmentDetails": AmazonFullApiOperationInput<"vendorShipments:GetShipmentDetails">;
  "vendorShipments:GetShipmentLabels": AmazonFullApiOperationInput<"vendorShipments:GetShipmentLabels">;
}

export interface AmazonFullApiVendorShippingGeneratedClient {
  SubmitShipmentConfirmations(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentShippingV1:submitShipmentConfirmations">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentShippingV1:submitShipmentConfirmations"]>;
  SubmitShipmentStatusUpdates(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentShippingV1:submitShipmentStatusUpdates">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentShippingV1:submitShipmentStatusUpdates"]>;
  GetPackingSlips(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentShippingV1:getPackingSlips">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentShippingV1:getPackingSlips"]>;
  GetPackingSlip(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentShippingV1:getPackingSlip">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentShippingV1:getPackingSlip"]>;
  SubmitShipmentConfirmationsVendorDirectFulfillmentShipping20211228(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:submitShipmentConfirmations">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentShipping_2021-12-28:submitShipmentConfirmations"]>;
  SubmitShipmentStatusUpdatesVendorDirectFulfillmentShipping20211228(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:submitShipmentStatusUpdates">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentShipping_2021-12-28:submitShipmentStatusUpdates"]>;
  GetPackingSlipsVendorDirectFulfillmentShipping20211228(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:getPackingSlips">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentShipping_2021-12-28:getPackingSlips"]>;
  GetPackingSlipVendorDirectFulfillmentShipping20211228(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:getPackingSlip">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentShipping_2021-12-28:getPackingSlip"]>;
  SubmitShipmentConfirmationsVendorShipments(...args: AmazonFullApiOperationArgs<"vendorShipments:SubmitShipmentConfirmations">): Promise<AmazonFullApiOperationResponseMap["vendorShipments:SubmitShipmentConfirmations"]>;
  SubmitShipments(...args: AmazonFullApiOperationArgs<"vendorShipments:SubmitShipments">): Promise<AmazonFullApiOperationResponseMap["vendorShipments:SubmitShipments"]>;
  GetShipmentDetailsVendorShipments(...args: AmazonFullApiOperationArgs<"vendorShipments:GetShipmentDetails">): Promise<AmazonFullApiOperationResponseMap["vendorShipments:GetShipmentDetails"]>;
  GetShipmentLabels(...args: AmazonFullApiOperationArgs<"vendorShipments:GetShipmentLabels">): Promise<AmazonFullApiOperationResponseMap["vendorShipments:GetShipmentLabels"]>;
}

export const AmazonFullApiVendorShippingGeneratedFunctionNames = [
  "SubmitShipmentConfirmations",
  "SubmitShipmentStatusUpdates",
  "GetPackingSlips",
  "GetPackingSlip",
  "SubmitShipmentConfirmationsVendorDirectFulfillmentShipping20211228",
  "SubmitShipmentStatusUpdatesVendorDirectFulfillmentShipping20211228",
  "GetPackingSlipsVendorDirectFulfillmentShipping20211228",
  "GetPackingSlipVendorDirectFulfillmentShipping20211228",
  "SubmitShipmentConfirmationsVendorShipments",
  "SubmitShipments",
  "GetShipmentDetailsVendorShipments",
  "GetShipmentLabels"
] as const satisfies readonly (keyof AmazonFullApiVendorShippingGeneratedClient)[];

export function createAmazonFullApiVendorShippingGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiVendorShippingGeneratedClient {
  return {
    SubmitShipmentConfirmations: (...args) => callOperation("vendorDirectFulfillmentShippingV1:submitShipmentConfirmations", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentShippingV1:submitShipmentConfirmations">)),
    SubmitShipmentStatusUpdates: (...args) => callOperation("vendorDirectFulfillmentShippingV1:submitShipmentStatusUpdates", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentShippingV1:submitShipmentStatusUpdates">)),
    GetPackingSlips: (...args) => callOperation("vendorDirectFulfillmentShippingV1:getPackingSlips", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentShippingV1:getPackingSlips">)),
    GetPackingSlip: (...args) => callOperation("vendorDirectFulfillmentShippingV1:getPackingSlip", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentShippingV1:getPackingSlip">)),
    SubmitShipmentConfirmationsVendorDirectFulfillmentShipping20211228: (...args) => callOperation("vendorDirectFulfillmentShipping_2021-12-28:submitShipmentConfirmations", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:submitShipmentConfirmations">)),
    SubmitShipmentStatusUpdatesVendorDirectFulfillmentShipping20211228: (...args) => callOperation("vendorDirectFulfillmentShipping_2021-12-28:submitShipmentStatusUpdates", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:submitShipmentStatusUpdates">)),
    GetPackingSlipsVendorDirectFulfillmentShipping20211228: (...args) => callOperation("vendorDirectFulfillmentShipping_2021-12-28:getPackingSlips", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:getPackingSlips">)),
    GetPackingSlipVendorDirectFulfillmentShipping20211228: (...args) => callOperation("vendorDirectFulfillmentShipping_2021-12-28:getPackingSlip", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:getPackingSlip">)),
    SubmitShipmentConfirmationsVendorShipments: (...args) => callOperation("vendorShipments:SubmitShipmentConfirmations", ...(args as AmazonFullApiOperationArgs<"vendorShipments:SubmitShipmentConfirmations">)),
    SubmitShipments: (...args) => callOperation("vendorShipments:SubmitShipments", ...(args as AmazonFullApiOperationArgs<"vendorShipments:SubmitShipments">)),
    GetShipmentDetailsVendorShipments: (...args) => callOperation("vendorShipments:GetShipmentDetails", ...(args as AmazonFullApiOperationArgs<"vendorShipments:GetShipmentDetails">)),
    GetShipmentLabels: (...args) => callOperation("vendorShipments:GetShipmentLabels", ...(args as AmazonFullApiOperationArgs<"vendorShipments:GetShipmentLabels">)),
  };
}
