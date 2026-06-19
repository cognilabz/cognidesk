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
export const AmazonFullApiVendorPaymentsOperationKeys = [
  "vendorInvoices:submitInvoices"
] as const;
export type AmazonFullApiVendorPaymentsOperationKey = typeof AmazonFullApiVendorPaymentsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiVendorPaymentsOperationPathParamMap {
  "vendorInvoices:submitInvoices": {};
}

export interface AmazonFullApiVendorPaymentsOperationRequestMap {
  "vendorInvoices:submitInvoices": AmazonFullApiOperationInput<"vendorInvoices:submitInvoices">;
}

export interface AmazonFullApiVendorPaymentsGeneratedClient {
  SubmitInvoices(...args: AmazonFullApiOperationArgs<"vendorInvoices:submitInvoices">): Promise<AmazonFullApiOperationResponseMap["vendorInvoices:submitInvoices"]>;
}

export const AmazonFullApiVendorPaymentsGeneratedFunctionNames = [
  "SubmitInvoices"
] as const satisfies readonly (keyof AmazonFullApiVendorPaymentsGeneratedClient)[];

export function createAmazonFullApiVendorPaymentsGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiVendorPaymentsGeneratedClient {
  return {
    SubmitInvoices: (...args) => callOperation("vendorInvoices:submitInvoices", ...(args as AmazonFullApiOperationArgs<"vendorInvoices:submitInvoices">)),
  };
}
