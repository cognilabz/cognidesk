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
export const AmazonFullApiFbaInventoryOperationKeys = [
  "fbaInventory:getInventorySummaries",
  "fbaInventory:createInventoryItem",
  "fbaInventory:deleteInventoryItem",
  "fbaInventory:addInventory"
] as const;
export type AmazonFullApiFbaInventoryOperationKey = typeof AmazonFullApiFbaInventoryOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiFbaInventoryOperationPathParamMap {
  "fbaInventory:getInventorySummaries": {};
  "fbaInventory:createInventoryItem": {};
  "fbaInventory:deleteInventoryItem": { "sellerSku": AmazonFullApiPathParamValue };
  "fbaInventory:addInventory": {};
}

export interface AmazonFullApiFbaInventoryOperationRequestMap {
  "fbaInventory:getInventorySummaries": AmazonFullApiOperationInput<"fbaInventory:getInventorySummaries">;
  "fbaInventory:createInventoryItem": AmazonFullApiOperationInput<"fbaInventory:createInventoryItem">;
  "fbaInventory:deleteInventoryItem": AmazonFullApiOperationInput<"fbaInventory:deleteInventoryItem">;
  "fbaInventory:addInventory": AmazonFullApiOperationInput<"fbaInventory:addInventory">;
}

export interface AmazonFullApiFbaInventoryGeneratedClient {
  GetInventorySummaries(...args: AmazonFullApiOperationArgs<"fbaInventory:getInventorySummaries">): Promise<AmazonFullApiOperationResponseMap["fbaInventory:getInventorySummaries"]>;
  CreateInventoryItem(...args: AmazonFullApiOperationArgs<"fbaInventory:createInventoryItem">): Promise<AmazonFullApiOperationResponseMap["fbaInventory:createInventoryItem"]>;
  DeleteInventoryItem(...args: AmazonFullApiOperationArgs<"fbaInventory:deleteInventoryItem">): Promise<AmazonFullApiOperationResponseMap["fbaInventory:deleteInventoryItem"]>;
  AddInventory(...args: AmazonFullApiOperationArgs<"fbaInventory:addInventory">): Promise<AmazonFullApiOperationResponseMap["fbaInventory:addInventory"]>;
}

export const AmazonFullApiFbaInventoryGeneratedFunctionNames = [
  "GetInventorySummaries",
  "CreateInventoryItem",
  "DeleteInventoryItem",
  "AddInventory"
] as const satisfies readonly (keyof AmazonFullApiFbaInventoryGeneratedClient)[];

export function createAmazonFullApiFbaInventoryGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiFbaInventoryGeneratedClient {
  return {
    GetInventorySummaries: (...args) => callOperation("fbaInventory:getInventorySummaries", ...(args as AmazonFullApiOperationArgs<"fbaInventory:getInventorySummaries">)),
    CreateInventoryItem: (...args) => callOperation("fbaInventory:createInventoryItem", ...(args as AmazonFullApiOperationArgs<"fbaInventory:createInventoryItem">)),
    DeleteInventoryItem: (...args) => callOperation("fbaInventory:deleteInventoryItem", ...(args as AmazonFullApiOperationArgs<"fbaInventory:deleteInventoryItem">)),
    AddInventory: (...args) => callOperation("fbaInventory:addInventory", ...(args as AmazonFullApiOperationArgs<"fbaInventory:addInventory">)),
  };
}
