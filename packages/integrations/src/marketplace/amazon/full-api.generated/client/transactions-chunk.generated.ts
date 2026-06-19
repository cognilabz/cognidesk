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
export const AmazonFullApiTransactionsOperationKeys = [
  "sellerWallet_2024-03-01:listAccountTransactions",
  "sellerWallet_2024-03-01:createTransaction",
  "sellerWallet_2024-03-01:getTransaction"
] as const;
export type AmazonFullApiTransactionsOperationKey = typeof AmazonFullApiTransactionsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiTransactionsOperationPathParamMap {
  "sellerWallet_2024-03-01:listAccountTransactions": {};
  "sellerWallet_2024-03-01:createTransaction": {};
  "sellerWallet_2024-03-01:getTransaction": { "transactionId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiTransactionsOperationRequestMap {
  "sellerWallet_2024-03-01:listAccountTransactions": AmazonFullApiOperationInput<"sellerWallet_2024-03-01:listAccountTransactions">;
  "sellerWallet_2024-03-01:createTransaction": AmazonFullApiOperationInput<"sellerWallet_2024-03-01:createTransaction">;
  "sellerWallet_2024-03-01:getTransaction": AmazonFullApiOperationInput<"sellerWallet_2024-03-01:getTransaction">;
}

export interface AmazonFullApiTransactionsGeneratedClient {
  ListAccountTransactions(...args: AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:listAccountTransactions">): Promise<AmazonFullApiOperationResponseMap["sellerWallet_2024-03-01:listAccountTransactions"]>;
  CreateTransaction(...args: AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:createTransaction">): Promise<AmazonFullApiOperationResponseMap["sellerWallet_2024-03-01:createTransaction"]>;
  GetTransaction(...args: AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:getTransaction">): Promise<AmazonFullApiOperationResponseMap["sellerWallet_2024-03-01:getTransaction"]>;
}

export const AmazonFullApiTransactionsGeneratedFunctionNames = [
  "ListAccountTransactions",
  "CreateTransaction",
  "GetTransaction"
] as const satisfies readonly (keyof AmazonFullApiTransactionsGeneratedClient)[];

export function createAmazonFullApiTransactionsGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiTransactionsGeneratedClient {
  return {
    ListAccountTransactions: (...args) => callOperation("sellerWallet_2024-03-01:listAccountTransactions", ...(args as AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:listAccountTransactions">)),
    CreateTransaction: (...args) => callOperation("sellerWallet_2024-03-01:createTransaction", ...(args as AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:createTransaction">)),
    GetTransaction: (...args) => callOperation("sellerWallet_2024-03-01:getTransaction", ...(args as AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:getTransaction">)),
  };
}
