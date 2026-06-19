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
export const AmazonFullApiShipmentOperationKeys = [
  "ordersV0:updateShipmentStatus"
] as const;
export type AmazonFullApiShipmentOperationKey = typeof AmazonFullApiShipmentOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiShipmentOperationPathParamMap {
  "ordersV0:updateShipmentStatus": { "orderId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiShipmentOperationRequestMap {
  "ordersV0:updateShipmentStatus": AmazonFullApiOperationInput<"ordersV0:updateShipmentStatus">;
}

export interface AmazonFullApiShipmentGeneratedClient {
  UpdateShipmentStatus(...args: AmazonFullApiOperationArgs<"ordersV0:updateShipmentStatus">): Promise<AmazonFullApiOperationResponseMap["ordersV0:updateShipmentStatus"]>;
}

export const AmazonFullApiShipmentGeneratedFunctionNames = [
  "UpdateShipmentStatus"
] as const satisfies readonly (keyof AmazonFullApiShipmentGeneratedClient)[];

export function createAmazonFullApiShipmentGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiShipmentGeneratedClient {
  return {
    UpdateShipmentStatus: (...args) => callOperation("ordersV0:updateShipmentStatus", ...(args as AmazonFullApiOperationArgs<"ordersV0:updateShipmentStatus">)),
  };
}
