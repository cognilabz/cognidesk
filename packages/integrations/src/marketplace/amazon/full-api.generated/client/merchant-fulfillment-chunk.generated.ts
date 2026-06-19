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
export const AmazonFullApiMerchantFulfillmentOperationKeys = [
  "merchantFulfillmentV0:getEligibleShipmentServices",
  "merchantFulfillmentV0:getShipment",
  "merchantFulfillmentV0:cancelShipment",
  "merchantFulfillmentV0:createShipment",
  "merchantFulfillmentV0:getAdditionalSellerInputs"
] as const;
export type AmazonFullApiMerchantFulfillmentOperationKey = typeof AmazonFullApiMerchantFulfillmentOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiMerchantFulfillmentOperationPathParamMap {
  "merchantFulfillmentV0:getEligibleShipmentServices": {};
  "merchantFulfillmentV0:getShipment": { "shipmentId": AmazonFullApiPathParamValue };
  "merchantFulfillmentV0:cancelShipment": { "shipmentId": AmazonFullApiPathParamValue };
  "merchantFulfillmentV0:createShipment": {};
  "merchantFulfillmentV0:getAdditionalSellerInputs": {};
}

export interface AmazonFullApiMerchantFulfillmentOperationRequestMap {
  "merchantFulfillmentV0:getEligibleShipmentServices": AmazonFullApiOperationInput<"merchantFulfillmentV0:getEligibleShipmentServices">;
  "merchantFulfillmentV0:getShipment": AmazonFullApiOperationInput<"merchantFulfillmentV0:getShipment">;
  "merchantFulfillmentV0:cancelShipment": AmazonFullApiOperationInput<"merchantFulfillmentV0:cancelShipment">;
  "merchantFulfillmentV0:createShipment": AmazonFullApiOperationInput<"merchantFulfillmentV0:createShipment">;
  "merchantFulfillmentV0:getAdditionalSellerInputs": AmazonFullApiOperationInput<"merchantFulfillmentV0:getAdditionalSellerInputs">;
}

export interface AmazonFullApiMerchantFulfillmentGeneratedClient {
  GetEligibleShipmentServices(...args: AmazonFullApiOperationArgs<"merchantFulfillmentV0:getEligibleShipmentServices">): Promise<AmazonFullApiOperationResponseMap["merchantFulfillmentV0:getEligibleShipmentServices"]>;
  GetShipmentMerchantFulfillmentV0(...args: AmazonFullApiOperationArgs<"merchantFulfillmentV0:getShipment">): Promise<AmazonFullApiOperationResponseMap["merchantFulfillmentV0:getShipment"]>;
  CancelShipment(...args: AmazonFullApiOperationArgs<"merchantFulfillmentV0:cancelShipment">): Promise<AmazonFullApiOperationResponseMap["merchantFulfillmentV0:cancelShipment"]>;
  CreateShipment(...args: AmazonFullApiOperationArgs<"merchantFulfillmentV0:createShipment">): Promise<AmazonFullApiOperationResponseMap["merchantFulfillmentV0:createShipment"]>;
  GetAdditionalSellerInputs(...args: AmazonFullApiOperationArgs<"merchantFulfillmentV0:getAdditionalSellerInputs">): Promise<AmazonFullApiOperationResponseMap["merchantFulfillmentV0:getAdditionalSellerInputs"]>;
}

export const AmazonFullApiMerchantFulfillmentGeneratedFunctionNames = [
  "GetEligibleShipmentServices",
  "GetShipmentMerchantFulfillmentV0",
  "CancelShipment",
  "CreateShipment",
  "GetAdditionalSellerInputs"
] as const satisfies readonly (keyof AmazonFullApiMerchantFulfillmentGeneratedClient)[];

export function createAmazonFullApiMerchantFulfillmentGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiMerchantFulfillmentGeneratedClient {
  return {
    GetEligibleShipmentServices: (...args) => callOperation("merchantFulfillmentV0:getEligibleShipmentServices", ...(args as AmazonFullApiOperationArgs<"merchantFulfillmentV0:getEligibleShipmentServices">)),
    GetShipmentMerchantFulfillmentV0: (...args) => callOperation("merchantFulfillmentV0:getShipment", ...(args as AmazonFullApiOperationArgs<"merchantFulfillmentV0:getShipment">)),
    CancelShipment: (...args) => callOperation("merchantFulfillmentV0:cancelShipment", ...(args as AmazonFullApiOperationArgs<"merchantFulfillmentV0:cancelShipment">)),
    CreateShipment: (...args) => callOperation("merchantFulfillmentV0:createShipment", ...(args as AmazonFullApiOperationArgs<"merchantFulfillmentV0:createShipment">)),
    GetAdditionalSellerInputs: (...args) => callOperation("merchantFulfillmentV0:getAdditionalSellerInputs", ...(args as AmazonFullApiOperationArgs<"merchantFulfillmentV0:getAdditionalSellerInputs">)),
  };
}
