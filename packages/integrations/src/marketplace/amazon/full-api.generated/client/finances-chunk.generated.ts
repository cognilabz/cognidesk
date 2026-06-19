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
export const AmazonFullApiFinancesOperationKeys = [
  "financesV0:listFinancialEventGroups",
  "financesV0:listFinancialEventsByGroupId",
  "financesV0:listFinancialEventsByOrderId",
  "financesV0:listFinancialEvents",
  "finances_2024-06-19:listTransactions",
  "transfers_2024-06-01:initiatePayout",
  "transfers_2024-06-01:getPaymentMethods"
] as const;
export type AmazonFullApiFinancesOperationKey = typeof AmazonFullApiFinancesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiFinancesOperationPathParamMap {
  "financesV0:listFinancialEventGroups": {};
  "financesV0:listFinancialEventsByGroupId": { "eventGroupId": AmazonFullApiPathParamValue };
  "financesV0:listFinancialEventsByOrderId": { "orderId": AmazonFullApiPathParamValue };
  "financesV0:listFinancialEvents": {};
  "finances_2024-06-19:listTransactions": {};
  "transfers_2024-06-01:initiatePayout": {};
  "transfers_2024-06-01:getPaymentMethods": {};
}

export interface AmazonFullApiFinancesOperationRequestMap {
  "financesV0:listFinancialEventGroups": AmazonFullApiOperationInput<"financesV0:listFinancialEventGroups">;
  "financesV0:listFinancialEventsByGroupId": AmazonFullApiOperationInput<"financesV0:listFinancialEventsByGroupId">;
  "financesV0:listFinancialEventsByOrderId": AmazonFullApiOperationInput<"financesV0:listFinancialEventsByOrderId">;
  "financesV0:listFinancialEvents": AmazonFullApiOperationInput<"financesV0:listFinancialEvents">;
  "finances_2024-06-19:listTransactions": AmazonFullApiOperationInput<"finances_2024-06-19:listTransactions">;
  "transfers_2024-06-01:initiatePayout": AmazonFullApiOperationInput<"transfers_2024-06-01:initiatePayout">;
  "transfers_2024-06-01:getPaymentMethods": AmazonFullApiOperationInput<"transfers_2024-06-01:getPaymentMethods">;
}

export interface AmazonFullApiFinancesGeneratedClient {
  ListFinancialEventGroups(...args: AmazonFullApiOperationArgs<"financesV0:listFinancialEventGroups">): Promise<AmazonFullApiOperationResponseMap["financesV0:listFinancialEventGroups"]>;
  ListFinancialEventsByGroupId(...args: AmazonFullApiOperationArgs<"financesV0:listFinancialEventsByGroupId">): Promise<AmazonFullApiOperationResponseMap["financesV0:listFinancialEventsByGroupId"]>;
  ListFinancialEventsByOrderId(...args: AmazonFullApiOperationArgs<"financesV0:listFinancialEventsByOrderId">): Promise<AmazonFullApiOperationResponseMap["financesV0:listFinancialEventsByOrderId"]>;
  ListFinancialEvents(...args: AmazonFullApiOperationArgs<"financesV0:listFinancialEvents">): Promise<AmazonFullApiOperationResponseMap["financesV0:listFinancialEvents"]>;
  ListTransactions(...args: AmazonFullApiOperationArgs<"finances_2024-06-19:listTransactions">): Promise<AmazonFullApiOperationResponseMap["finances_2024-06-19:listTransactions"]>;
  InitiatePayout(...args: AmazonFullApiOperationArgs<"transfers_2024-06-01:initiatePayout">): Promise<AmazonFullApiOperationResponseMap["transfers_2024-06-01:initiatePayout"]>;
  GetPaymentMethods(...args: AmazonFullApiOperationArgs<"transfers_2024-06-01:getPaymentMethods">): Promise<AmazonFullApiOperationResponseMap["transfers_2024-06-01:getPaymentMethods"]>;
}

export const AmazonFullApiFinancesGeneratedFunctionNames = [
  "ListFinancialEventGroups",
  "ListFinancialEventsByGroupId",
  "ListFinancialEventsByOrderId",
  "ListFinancialEvents",
  "ListTransactions",
  "InitiatePayout",
  "GetPaymentMethods"
] as const satisfies readonly (keyof AmazonFullApiFinancesGeneratedClient)[];

export function createAmazonFullApiFinancesGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiFinancesGeneratedClient {
  return {
    ListFinancialEventGroups: (...args) => callOperation("financesV0:listFinancialEventGroups", ...(args as AmazonFullApiOperationArgs<"financesV0:listFinancialEventGroups">)),
    ListFinancialEventsByGroupId: (...args) => callOperation("financesV0:listFinancialEventsByGroupId", ...(args as AmazonFullApiOperationArgs<"financesV0:listFinancialEventsByGroupId">)),
    ListFinancialEventsByOrderId: (...args) => callOperation("financesV0:listFinancialEventsByOrderId", ...(args as AmazonFullApiOperationArgs<"financesV0:listFinancialEventsByOrderId">)),
    ListFinancialEvents: (...args) => callOperation("financesV0:listFinancialEvents", ...(args as AmazonFullApiOperationArgs<"financesV0:listFinancialEvents">)),
    ListTransactions: (...args) => callOperation("finances_2024-06-19:listTransactions", ...(args as AmazonFullApiOperationArgs<"finances_2024-06-19:listTransactions">)),
    InitiatePayout: (...args) => callOperation("transfers_2024-06-01:initiatePayout", ...(args as AmazonFullApiOperationArgs<"transfers_2024-06-01:initiatePayout">)),
    GetPaymentMethods: (...args) => callOperation("transfers_2024-06-01:getPaymentMethods", ...(args as AmazonFullApiOperationArgs<"transfers_2024-06-01:getPaymentMethods">)),
  };
}
