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
export const AmazonFullApiShipmentRetrievalOperationKeys = [
  "externalFulfillmentShipments_2024-09-11:getShipments",
  "externalFulfillmentShipments_2024-09-11:getShipment"
] as const;
export type AmazonFullApiShipmentRetrievalOperationKey = typeof AmazonFullApiShipmentRetrievalOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiShipmentRetrievalOperationPathParamMap {
  "externalFulfillmentShipments_2024-09-11:getShipments": {};
  "externalFulfillmentShipments_2024-09-11:getShipment": { "shipmentId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiShipmentRetrievalOperationRequestMap {
  "externalFulfillmentShipments_2024-09-11:getShipments": AmazonFullApiOperationInput<"externalFulfillmentShipments_2024-09-11:getShipments">;
  "externalFulfillmentShipments_2024-09-11:getShipment": AmazonFullApiOperationInput<"externalFulfillmentShipments_2024-09-11:getShipment">;
}

export interface AmazonFullApiShipmentRetrievalGeneratedClient {
  GetShipments(...args: AmazonFullApiOperationArgs<"externalFulfillmentShipments_2024-09-11:getShipments">): Promise<AmazonFullApiOperationResponseMap["externalFulfillmentShipments_2024-09-11:getShipments"]>;
  GetShipment(...args: AmazonFullApiOperationArgs<"externalFulfillmentShipments_2024-09-11:getShipment">): Promise<AmazonFullApiOperationResponseMap["externalFulfillmentShipments_2024-09-11:getShipment"]>;
}

export const AmazonFullApiShipmentRetrievalGeneratedFunctionNames = [
  "GetShipments",
  "GetShipment"
] as const satisfies readonly (keyof AmazonFullApiShipmentRetrievalGeneratedClient)[];

export function createAmazonFullApiShipmentRetrievalGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiShipmentRetrievalGeneratedClient {
  return {
    GetShipments: (...args) => callOperation("externalFulfillmentShipments_2024-09-11:getShipments", ...(args as AmazonFullApiOperationArgs<"externalFulfillmentShipments_2024-09-11:getShipments">)),
    GetShipment: (...args) => callOperation("externalFulfillmentShipments_2024-09-11:getShipment", ...(args as AmazonFullApiOperationArgs<"externalFulfillmentShipments_2024-09-11:getShipment">)),
  };
}
