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
export const AmazonFullApiBatchInventoryOperationKeys = [
  "externalFulfillmentInventory_2024-09-11:batchInventory"
] as const;
export type AmazonFullApiBatchInventoryOperationKey = typeof AmazonFullApiBatchInventoryOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiBatchInventoryOperationPathParamMap {
  "externalFulfillmentInventory_2024-09-11:batchInventory": {};
}

export interface AmazonFullApiBatchInventoryOperationRequestMap {
  "externalFulfillmentInventory_2024-09-11:batchInventory": AmazonFullApiOperationInput<"externalFulfillmentInventory_2024-09-11:batchInventory">;
}

export interface AmazonFullApiBatchInventoryGeneratedClient {
  BatchInventory(...args: AmazonFullApiOperationArgs<"externalFulfillmentInventory_2024-09-11:batchInventory">): Promise<AmazonFullApiOperationResponseMap["externalFulfillmentInventory_2024-09-11:batchInventory"]>;
}

export const AmazonFullApiBatchInventoryGeneratedFunctionNames = [
  "BatchInventory"
] as const satisfies readonly (keyof AmazonFullApiBatchInventoryGeneratedClient)[];

export function createAmazonFullApiBatchInventoryGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiBatchInventoryGeneratedClient {
  return {
    BatchInventory: (...args) => callOperation("externalFulfillmentInventory_2024-09-11:batchInventory", ...(args as AmazonFullApiOperationArgs<"externalFulfillmentInventory_2024-09-11:batchInventory">)),
  };
}
