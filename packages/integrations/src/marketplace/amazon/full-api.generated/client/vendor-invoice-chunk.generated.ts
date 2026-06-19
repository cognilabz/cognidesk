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
export const AmazonFullApiVendorInvoiceOperationKeys = [
  "vendorDirectFulfillmentPaymentsV1:submitInvoice"
] as const;
export type AmazonFullApiVendorInvoiceOperationKey = typeof AmazonFullApiVendorInvoiceOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiVendorInvoiceOperationPathParamMap {
  "vendorDirectFulfillmentPaymentsV1:submitInvoice": {};
}

export interface AmazonFullApiVendorInvoiceOperationRequestMap {
  "vendorDirectFulfillmentPaymentsV1:submitInvoice": AmazonFullApiOperationInput<"vendorDirectFulfillmentPaymentsV1:submitInvoice">;
}

export interface AmazonFullApiVendorInvoiceGeneratedClient {
  SubmitInvoiceVendorDirectFulfillmentPaymentsV1(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentPaymentsV1:submitInvoice">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentPaymentsV1:submitInvoice"]>;
}

export const AmazonFullApiVendorInvoiceGeneratedFunctionNames = [
  "SubmitInvoiceVendorDirectFulfillmentPaymentsV1"
] as const satisfies readonly (keyof AmazonFullApiVendorInvoiceGeneratedClient)[];

export function createAmazonFullApiVendorInvoiceGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiVendorInvoiceGeneratedClient {
  return {
    SubmitInvoiceVendorDirectFulfillmentPaymentsV1: (...args) => callOperation("vendorDirectFulfillmentPaymentsV1:submitInvoice", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentPaymentsV1:submitInvoice">)),
  };
}
