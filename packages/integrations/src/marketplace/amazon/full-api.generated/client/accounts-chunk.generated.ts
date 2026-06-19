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
export const AmazonFullApiAccountsOperationKeys = [
  "sellerWallet_2024-03-01:listAccounts",
  "sellerWallet_2024-03-01:getAccount",
  "sellerWallet_2024-03-01:listAccountBalances"
] as const;
export type AmazonFullApiAccountsOperationKey = typeof AmazonFullApiAccountsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiAccountsOperationPathParamMap {
  "sellerWallet_2024-03-01:listAccounts": {};
  "sellerWallet_2024-03-01:getAccount": { "accountId": AmazonFullApiPathParamValue };
  "sellerWallet_2024-03-01:listAccountBalances": { "accountId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiAccountsOperationRequestMap {
  "sellerWallet_2024-03-01:listAccounts": AmazonFullApiOperationInput<"sellerWallet_2024-03-01:listAccounts">;
  "sellerWallet_2024-03-01:getAccount": AmazonFullApiOperationInput<"sellerWallet_2024-03-01:getAccount">;
  "sellerWallet_2024-03-01:listAccountBalances": AmazonFullApiOperationInput<"sellerWallet_2024-03-01:listAccountBalances">;
}

export interface AmazonFullApiAccountsGeneratedClient {
  ListAccounts(...args: AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:listAccounts">): Promise<AmazonFullApiOperationResponseMap["sellerWallet_2024-03-01:listAccounts"]>;
  GetAccount(...args: AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:getAccount">): Promise<AmazonFullApiOperationResponseMap["sellerWallet_2024-03-01:getAccount"]>;
  ListAccountBalances(...args: AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:listAccountBalances">): Promise<AmazonFullApiOperationResponseMap["sellerWallet_2024-03-01:listAccountBalances"]>;
}

export const AmazonFullApiAccountsGeneratedFunctionNames = [
  "ListAccounts",
  "GetAccount",
  "ListAccountBalances"
] as const satisfies readonly (keyof AmazonFullApiAccountsGeneratedClient)[];

export function createAmazonFullApiAccountsGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiAccountsGeneratedClient {
  return {
    ListAccounts: (...args) => callOperation("sellerWallet_2024-03-01:listAccounts", ...(args as AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:listAccounts">)),
    GetAccount: (...args) => callOperation("sellerWallet_2024-03-01:getAccount", ...(args as AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:getAccount">)),
    ListAccountBalances: (...args) => callOperation("sellerWallet_2024-03-01:listAccountBalances", ...(args as AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:listAccountBalances">)),
  };
}
