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
export const AmazonFullApiReturnRetrievalOperationKeys = [
  "externalFulfillmentReturns_2024-09-11:listReturns",
  "externalFulfillmentReturns_2024-09-11:getReturn"
] as const;
export type AmazonFullApiReturnRetrievalOperationKey = typeof AmazonFullApiReturnRetrievalOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiReturnRetrievalOperationPathParamMap {
  "externalFulfillmentReturns_2024-09-11:listReturns": {};
  "externalFulfillmentReturns_2024-09-11:getReturn": { "returnId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiReturnRetrievalOperationRequestMap {
  "externalFulfillmentReturns_2024-09-11:listReturns": AmazonFullApiOperationInput<"externalFulfillmentReturns_2024-09-11:listReturns">;
  "externalFulfillmentReturns_2024-09-11:getReturn": AmazonFullApiOperationInput<"externalFulfillmentReturns_2024-09-11:getReturn">;
}

export interface AmazonFullApiReturnRetrievalGeneratedClient {
  ListReturns(...args: AmazonFullApiOperationArgs<"externalFulfillmentReturns_2024-09-11:listReturns">): Promise<AmazonFullApiOperationResponseMap["externalFulfillmentReturns_2024-09-11:listReturns"]>;
  GetReturn(...args: AmazonFullApiOperationArgs<"externalFulfillmentReturns_2024-09-11:getReturn">): Promise<AmazonFullApiOperationResponseMap["externalFulfillmentReturns_2024-09-11:getReturn"]>;
}

export const AmazonFullApiReturnRetrievalGeneratedFunctionNames = [
  "ListReturns",
  "GetReturn"
] as const satisfies readonly (keyof AmazonFullApiReturnRetrievalGeneratedClient)[];

export function createAmazonFullApiReturnRetrievalGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiReturnRetrievalGeneratedClient {
  return {
    ListReturns: (...args) => callOperation("externalFulfillmentReturns_2024-09-11:listReturns", ...(args as AmazonFullApiOperationArgs<"externalFulfillmentReturns_2024-09-11:listReturns">)),
    GetReturn: (...args) => callOperation("externalFulfillmentReturns_2024-09-11:getReturn", ...(args as AmazonFullApiOperationArgs<"externalFulfillmentReturns_2024-09-11:getReturn">)),
  };
}
