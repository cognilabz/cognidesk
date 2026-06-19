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
export const AmazonFullApiUpdateInventoryOperationKeys = [
  "vendorDirectFulfillmentInventoryV1:submitInventoryUpdate"
] as const;
export type AmazonFullApiUpdateInventoryOperationKey = typeof AmazonFullApiUpdateInventoryOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiUpdateInventoryOperationPathParamMap {
  "vendorDirectFulfillmentInventoryV1:submitInventoryUpdate": { "warehouseId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiUpdateInventoryOperationRequestMap {
  "vendorDirectFulfillmentInventoryV1:submitInventoryUpdate": AmazonFullApiOperationInput<"vendorDirectFulfillmentInventoryV1:submitInventoryUpdate">;
}

export interface AmazonFullApiUpdateInventoryGeneratedClient {
  SubmitInventoryUpdate(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentInventoryV1:submitInventoryUpdate">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentInventoryV1:submitInventoryUpdate"]>;
}

export const AmazonFullApiUpdateInventoryGeneratedFunctionNames = [
  "SubmitInventoryUpdate"
] as const satisfies readonly (keyof AmazonFullApiUpdateInventoryGeneratedClient)[];

export function createAmazonFullApiUpdateInventoryGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiUpdateInventoryGeneratedClient {
  return {
    SubmitInventoryUpdate: (...args) => callOperation("vendorDirectFulfillmentInventoryV1:submitInventoryUpdate", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentInventoryV1:submitInventoryUpdate">)),
  };
}
