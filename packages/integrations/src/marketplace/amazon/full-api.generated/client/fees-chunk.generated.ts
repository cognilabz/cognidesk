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
export const AmazonFullApiFeesOperationKeys = [
  "productFeesV0:getMyFeesEstimateForSKU",
  "productFeesV0:getMyFeesEstimateForASIN",
  "productFeesV0:getMyFeesEstimates"
] as const;
export type AmazonFullApiFeesOperationKey = typeof AmazonFullApiFeesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiFeesOperationPathParamMap {
  "productFeesV0:getMyFeesEstimateForSKU": { "SellerSKU": AmazonFullApiPathParamValue };
  "productFeesV0:getMyFeesEstimateForASIN": { "Asin": AmazonFullApiPathParamValue };
  "productFeesV0:getMyFeesEstimates": {};
}

export interface AmazonFullApiFeesOperationRequestMap {
  "productFeesV0:getMyFeesEstimateForSKU": AmazonFullApiOperationInput<"productFeesV0:getMyFeesEstimateForSKU">;
  "productFeesV0:getMyFeesEstimateForASIN": AmazonFullApiOperationInput<"productFeesV0:getMyFeesEstimateForASIN">;
  "productFeesV0:getMyFeesEstimates": AmazonFullApiOperationInput<"productFeesV0:getMyFeesEstimates">;
}

export interface AmazonFullApiFeesGeneratedClient {
  GetMyFeesEstimateForSKU(...args: AmazonFullApiOperationArgs<"productFeesV0:getMyFeesEstimateForSKU">): Promise<AmazonFullApiOperationResponseMap["productFeesV0:getMyFeesEstimateForSKU"]>;
  GetMyFeesEstimateForASIN(...args: AmazonFullApiOperationArgs<"productFeesV0:getMyFeesEstimateForASIN">): Promise<AmazonFullApiOperationResponseMap["productFeesV0:getMyFeesEstimateForASIN"]>;
  GetMyFeesEstimates(...args: AmazonFullApiOperationArgs<"productFeesV0:getMyFeesEstimates">): Promise<AmazonFullApiOperationResponseMap["productFeesV0:getMyFeesEstimates"]>;
}

export const AmazonFullApiFeesGeneratedFunctionNames = [
  "GetMyFeesEstimateForSKU",
  "GetMyFeesEstimateForASIN",
  "GetMyFeesEstimates"
] as const satisfies readonly (keyof AmazonFullApiFeesGeneratedClient)[];

export function createAmazonFullApiFeesGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiFeesGeneratedClient {
  return {
    GetMyFeesEstimateForSKU: (...args) => callOperation("productFeesV0:getMyFeesEstimateForSKU", ...(args as AmazonFullApiOperationArgs<"productFeesV0:getMyFeesEstimateForSKU">)),
    GetMyFeesEstimateForASIN: (...args) => callOperation("productFeesV0:getMyFeesEstimateForASIN", ...(args as AmazonFullApiOperationArgs<"productFeesV0:getMyFeesEstimateForASIN">)),
    GetMyFeesEstimates: (...args) => callOperation("productFeesV0:getMyFeesEstimates", ...(args as AmazonFullApiOperationArgs<"productFeesV0:getMyFeesEstimates">)),
  };
}
