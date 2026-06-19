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
export const AmazonFullApiVendorShippingLabelsOperationKeys = [
  "vendorDirectFulfillmentShippingV1:getShippingLabels",
  "vendorDirectFulfillmentShippingV1:submitShippingLabelRequest",
  "vendorDirectFulfillmentShippingV1:getShippingLabel",
  "vendorDirectFulfillmentShipping_2021-12-28:getShippingLabels",
  "vendorDirectFulfillmentShipping_2021-12-28:submitShippingLabelRequest",
  "vendorDirectFulfillmentShipping_2021-12-28:getShippingLabel",
  "vendorDirectFulfillmentShipping_2021-12-28:createShippingLabels"
] as const;
export type AmazonFullApiVendorShippingLabelsOperationKey = typeof AmazonFullApiVendorShippingLabelsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiVendorShippingLabelsOperationPathParamMap {
  "vendorDirectFulfillmentShippingV1:getShippingLabels": {};
  "vendorDirectFulfillmentShippingV1:submitShippingLabelRequest": {};
  "vendorDirectFulfillmentShippingV1:getShippingLabel": { "purchaseOrderNumber": AmazonFullApiPathParamValue };
  "vendorDirectFulfillmentShipping_2021-12-28:getShippingLabels": {};
  "vendorDirectFulfillmentShipping_2021-12-28:submitShippingLabelRequest": {};
  "vendorDirectFulfillmentShipping_2021-12-28:getShippingLabel": { "purchaseOrderNumber": AmazonFullApiPathParamValue };
  "vendorDirectFulfillmentShipping_2021-12-28:createShippingLabels": { "purchaseOrderNumber": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiVendorShippingLabelsOperationRequestMap {
  "vendorDirectFulfillmentShippingV1:getShippingLabels": AmazonFullApiOperationInput<"vendorDirectFulfillmentShippingV1:getShippingLabels">;
  "vendorDirectFulfillmentShippingV1:submitShippingLabelRequest": AmazonFullApiOperationInput<"vendorDirectFulfillmentShippingV1:submitShippingLabelRequest">;
  "vendorDirectFulfillmentShippingV1:getShippingLabel": AmazonFullApiOperationInput<"vendorDirectFulfillmentShippingV1:getShippingLabel">;
  "vendorDirectFulfillmentShipping_2021-12-28:getShippingLabels": AmazonFullApiOperationInput<"vendorDirectFulfillmentShipping_2021-12-28:getShippingLabels">;
  "vendorDirectFulfillmentShipping_2021-12-28:submitShippingLabelRequest": AmazonFullApiOperationInput<"vendorDirectFulfillmentShipping_2021-12-28:submitShippingLabelRequest">;
  "vendorDirectFulfillmentShipping_2021-12-28:getShippingLabel": AmazonFullApiOperationInput<"vendorDirectFulfillmentShipping_2021-12-28:getShippingLabel">;
  "vendorDirectFulfillmentShipping_2021-12-28:createShippingLabels": AmazonFullApiOperationInput<"vendorDirectFulfillmentShipping_2021-12-28:createShippingLabels">;
}

export interface AmazonFullApiVendorShippingLabelsGeneratedClient {
  GetShippingLabels(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentShippingV1:getShippingLabels">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentShippingV1:getShippingLabels"]>;
  SubmitShippingLabelRequest(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentShippingV1:submitShippingLabelRequest">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentShippingV1:submitShippingLabelRequest"]>;
  GetShippingLabel(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentShippingV1:getShippingLabel">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentShippingV1:getShippingLabel"]>;
  GetShippingLabelsVendorDirectFulfillmentShipping20211228(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:getShippingLabels">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentShipping_2021-12-28:getShippingLabels"]>;
  SubmitShippingLabelRequestVendorDirectFulfillmentShipping20211228(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:submitShippingLabelRequest">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentShipping_2021-12-28:submitShippingLabelRequest"]>;
  GetShippingLabelVendorDirectFulfillmentShipping20211228(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:getShippingLabel">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentShipping_2021-12-28:getShippingLabel"]>;
  CreateShippingLabels(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:createShippingLabels">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentShipping_2021-12-28:createShippingLabels"]>;
}

export const AmazonFullApiVendorShippingLabelsGeneratedFunctionNames = [
  "GetShippingLabels",
  "SubmitShippingLabelRequest",
  "GetShippingLabel",
  "GetShippingLabelsVendorDirectFulfillmentShipping20211228",
  "SubmitShippingLabelRequestVendorDirectFulfillmentShipping20211228",
  "GetShippingLabelVendorDirectFulfillmentShipping20211228",
  "CreateShippingLabels"
] as const satisfies readonly (keyof AmazonFullApiVendorShippingLabelsGeneratedClient)[];

export function createAmazonFullApiVendorShippingLabelsGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiVendorShippingLabelsGeneratedClient {
  return {
    GetShippingLabels: (...args) => callOperation("vendorDirectFulfillmentShippingV1:getShippingLabels", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentShippingV1:getShippingLabels">)),
    SubmitShippingLabelRequest: (...args) => callOperation("vendorDirectFulfillmentShippingV1:submitShippingLabelRequest", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentShippingV1:submitShippingLabelRequest">)),
    GetShippingLabel: (...args) => callOperation("vendorDirectFulfillmentShippingV1:getShippingLabel", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentShippingV1:getShippingLabel">)),
    GetShippingLabelsVendorDirectFulfillmentShipping20211228: (...args) => callOperation("vendorDirectFulfillmentShipping_2021-12-28:getShippingLabels", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:getShippingLabels">)),
    SubmitShippingLabelRequestVendorDirectFulfillmentShipping20211228: (...args) => callOperation("vendorDirectFulfillmentShipping_2021-12-28:submitShippingLabelRequest", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:submitShippingLabelRequest">)),
    GetShippingLabelVendorDirectFulfillmentShipping20211228: (...args) => callOperation("vendorDirectFulfillmentShipping_2021-12-28:getShippingLabel", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:getShippingLabel">)),
    CreateShippingLabels: (...args) => callOperation("vendorDirectFulfillmentShipping_2021-12-28:createShippingLabels", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:createShippingLabels">)),
  };
}
