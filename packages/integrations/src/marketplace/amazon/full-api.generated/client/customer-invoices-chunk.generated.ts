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
export const AmazonFullApiCustomerInvoicesOperationKeys = [
  "vendorDirectFulfillmentShippingV1:getCustomerInvoices",
  "vendorDirectFulfillmentShippingV1:getCustomerInvoice",
  "vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoices",
  "vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoice"
] as const;
export type AmazonFullApiCustomerInvoicesOperationKey = typeof AmazonFullApiCustomerInvoicesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiCustomerInvoicesOperationPathParamMap {
  "vendorDirectFulfillmentShippingV1:getCustomerInvoices": {};
  "vendorDirectFulfillmentShippingV1:getCustomerInvoice": { "purchaseOrderNumber": AmazonFullApiPathParamValue };
  "vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoices": {};
  "vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoice": { "purchaseOrderNumber": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiCustomerInvoicesOperationRequestMap {
  "vendorDirectFulfillmentShippingV1:getCustomerInvoices": AmazonFullApiOperationInput<"vendorDirectFulfillmentShippingV1:getCustomerInvoices">;
  "vendorDirectFulfillmentShippingV1:getCustomerInvoice": AmazonFullApiOperationInput<"vendorDirectFulfillmentShippingV1:getCustomerInvoice">;
  "vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoices": AmazonFullApiOperationInput<"vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoices">;
  "vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoice": AmazonFullApiOperationInput<"vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoice">;
}

export interface AmazonFullApiCustomerInvoicesGeneratedClient {
  GetCustomerInvoices(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentShippingV1:getCustomerInvoices">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentShippingV1:getCustomerInvoices"]>;
  GetCustomerInvoice(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentShippingV1:getCustomerInvoice">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentShippingV1:getCustomerInvoice"]>;
  GetCustomerInvoicesVendorDirectFulfillmentShipping20211228(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoices">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoices"]>;
  GetCustomerInvoiceVendorDirectFulfillmentShipping20211228(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoice">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoice"]>;
}

export const AmazonFullApiCustomerInvoicesGeneratedFunctionNames = [
  "GetCustomerInvoices",
  "GetCustomerInvoice",
  "GetCustomerInvoicesVendorDirectFulfillmentShipping20211228",
  "GetCustomerInvoiceVendorDirectFulfillmentShipping20211228"
] as const satisfies readonly (keyof AmazonFullApiCustomerInvoicesGeneratedClient)[];

export function createAmazonFullApiCustomerInvoicesGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiCustomerInvoicesGeneratedClient {
  return {
    GetCustomerInvoices: (...args) => callOperation("vendorDirectFulfillmentShippingV1:getCustomerInvoices", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentShippingV1:getCustomerInvoices">)),
    GetCustomerInvoice: (...args) => callOperation("vendorDirectFulfillmentShippingV1:getCustomerInvoice", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentShippingV1:getCustomerInvoice">)),
    GetCustomerInvoicesVendorDirectFulfillmentShipping20211228: (...args) => callOperation("vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoices", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoices">)),
    GetCustomerInvoiceVendorDirectFulfillmentShipping20211228: (...args) => callOperation("vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoice", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoice">)),
  };
}
