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
export const AmazonFullApiDeliveryShipmentInvoiceOperationKeys = [
  "deliveryShipmentInvoiceV2022-07-01:submitInvoice",
  "deliveryShipmentInvoiceV2022-07-01:getInvoiceStatus"
] as const;
export type AmazonFullApiDeliveryShipmentInvoiceOperationKey = typeof AmazonFullApiDeliveryShipmentInvoiceOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiDeliveryShipmentInvoiceOperationPathParamMap {
  "deliveryShipmentInvoiceV2022-07-01:submitInvoice": {};
  "deliveryShipmentInvoiceV2022-07-01:getInvoiceStatus": {};
}

export interface AmazonFullApiDeliveryShipmentInvoiceOperationRequestMap {
  "deliveryShipmentInvoiceV2022-07-01:submitInvoice": AmazonFullApiOperationInput<"deliveryShipmentInvoiceV2022-07-01:submitInvoice">;
  "deliveryShipmentInvoiceV2022-07-01:getInvoiceStatus": AmazonFullApiOperationInput<"deliveryShipmentInvoiceV2022-07-01:getInvoiceStatus">;
}

export interface AmazonFullApiDeliveryShipmentInvoiceGeneratedClient {
  SubmitInvoice(...args: AmazonFullApiOperationArgs<"deliveryShipmentInvoiceV2022-07-01:submitInvoice">): Promise<AmazonFullApiOperationResponseMap["deliveryShipmentInvoiceV2022-07-01:submitInvoice"]>;
  GetInvoiceStatus(...args: AmazonFullApiOperationArgs<"deliveryShipmentInvoiceV2022-07-01:getInvoiceStatus">): Promise<AmazonFullApiOperationResponseMap["deliveryShipmentInvoiceV2022-07-01:getInvoiceStatus"]>;
}

export const AmazonFullApiDeliveryShipmentInvoiceGeneratedFunctionNames = [
  "SubmitInvoice",
  "GetInvoiceStatus"
] as const satisfies readonly (keyof AmazonFullApiDeliveryShipmentInvoiceGeneratedClient)[];

export function createAmazonFullApiDeliveryShipmentInvoiceGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiDeliveryShipmentInvoiceGeneratedClient {
  return {
    SubmitInvoice: (...args) => callOperation("deliveryShipmentInvoiceV2022-07-01:submitInvoice", ...(args as AmazonFullApiOperationArgs<"deliveryShipmentInvoiceV2022-07-01:submitInvoice">)),
    GetInvoiceStatus: (...args) => callOperation("deliveryShipmentInvoiceV2022-07-01:getInvoiceStatus", ...(args as AmazonFullApiOperationArgs<"deliveryShipmentInvoiceV2022-07-01:getInvoiceStatus">)),
  };
}
