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
export const AmazonFullApiVendorTransactionOperationKeys = [
  "vendorDirectFulfillmentTransactionsV1:getTransactionStatus",
  "vendorDirectFulfillmentTransactions_2021-12-28:getTransactionStatus",
  "vendorTransactionStatus:getTransaction"
] as const;
export type AmazonFullApiVendorTransactionOperationKey = typeof AmazonFullApiVendorTransactionOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiVendorTransactionOperationPathParamMap {
  "vendorDirectFulfillmentTransactionsV1:getTransactionStatus": { "transactionId": AmazonFullApiPathParamValue };
  "vendorDirectFulfillmentTransactions_2021-12-28:getTransactionStatus": { "transactionId": AmazonFullApiPathParamValue };
  "vendorTransactionStatus:getTransaction": { "transactionId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiVendorTransactionOperationRequestMap {
  "vendorDirectFulfillmentTransactionsV1:getTransactionStatus": AmazonFullApiOperationInput<"vendorDirectFulfillmentTransactionsV1:getTransactionStatus">;
  "vendorDirectFulfillmentTransactions_2021-12-28:getTransactionStatus": AmazonFullApiOperationInput<"vendorDirectFulfillmentTransactions_2021-12-28:getTransactionStatus">;
  "vendorTransactionStatus:getTransaction": AmazonFullApiOperationInput<"vendorTransactionStatus:getTransaction">;
}

export interface AmazonFullApiVendorTransactionGeneratedClient {
  GetTransactionStatus(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentTransactionsV1:getTransactionStatus">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentTransactionsV1:getTransactionStatus"]>;
  GetTransactionStatusVendorDirectFulfillmentTransactions20211228(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentTransactions_2021-12-28:getTransactionStatus">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentTransactions_2021-12-28:getTransactionStatus"]>;
  GetTransactionVendorTransactionStatus(...args: AmazonFullApiOperationArgs<"vendorTransactionStatus:getTransaction">): Promise<AmazonFullApiOperationResponseMap["vendorTransactionStatus:getTransaction"]>;
}

export const AmazonFullApiVendorTransactionGeneratedFunctionNames = [
  "GetTransactionStatus",
  "GetTransactionStatusVendorDirectFulfillmentTransactions20211228",
  "GetTransactionVendorTransactionStatus"
] as const satisfies readonly (keyof AmazonFullApiVendorTransactionGeneratedClient)[];

export function createAmazonFullApiVendorTransactionGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiVendorTransactionGeneratedClient {
  return {
    GetTransactionStatus: (...args) => callOperation("vendorDirectFulfillmentTransactionsV1:getTransactionStatus", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentTransactionsV1:getTransactionStatus">)),
    GetTransactionStatusVendorDirectFulfillmentTransactions20211228: (...args) => callOperation("vendorDirectFulfillmentTransactions_2021-12-28:getTransactionStatus", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentTransactions_2021-12-28:getTransactionStatus">)),
    GetTransactionVendorTransactionStatus: (...args) => callOperation("vendorTransactionStatus:getTransaction", ...(args as AmazonFullApiOperationArgs<"vendorTransactionStatus:getTransaction">)),
  };
}
