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
export const AmazonFullApiShipmentInvoiceOperationKeys = [
  "shipmentInvoicingV0:getShipmentDetails",
  "shipmentInvoicingV0:submitInvoice",
  "shipmentInvoicingV0:getInvoiceStatus"
] as const;
export type AmazonFullApiShipmentInvoiceOperationKey = typeof AmazonFullApiShipmentInvoiceOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiShipmentInvoiceOperationPathParamMap {
  "shipmentInvoicingV0:getShipmentDetails": { "shipmentId": AmazonFullApiPathParamValue };
  "shipmentInvoicingV0:submitInvoice": { "shipmentId": AmazonFullApiPathParamValue };
  "shipmentInvoicingV0:getInvoiceStatus": { "shipmentId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiShipmentInvoiceOperationRequestMap {
  "shipmentInvoicingV0:getShipmentDetails": AmazonFullApiOperationInput<"shipmentInvoicingV0:getShipmentDetails">;
  "shipmentInvoicingV0:submitInvoice": AmazonFullApiOperationInput<"shipmentInvoicingV0:submitInvoice">;
  "shipmentInvoicingV0:getInvoiceStatus": AmazonFullApiOperationInput<"shipmentInvoicingV0:getInvoiceStatus">;
}

export interface AmazonFullApiShipmentInvoiceGeneratedClient {
  GetShipmentDetails(...args: AmazonFullApiOperationArgs<"shipmentInvoicingV0:getShipmentDetails">): Promise<AmazonFullApiOperationResponseMap["shipmentInvoicingV0:getShipmentDetails"]>;
  SubmitInvoiceShipmentInvoicingV0(...args: AmazonFullApiOperationArgs<"shipmentInvoicingV0:submitInvoice">): Promise<AmazonFullApiOperationResponseMap["shipmentInvoicingV0:submitInvoice"]>;
  GetInvoiceStatusShipmentInvoicingV0(...args: AmazonFullApiOperationArgs<"shipmentInvoicingV0:getInvoiceStatus">): Promise<AmazonFullApiOperationResponseMap["shipmentInvoicingV0:getInvoiceStatus"]>;
}

export const AmazonFullApiShipmentInvoiceGeneratedFunctionNames = [
  "GetShipmentDetails",
  "SubmitInvoiceShipmentInvoicingV0",
  "GetInvoiceStatusShipmentInvoicingV0"
] as const satisfies readonly (keyof AmazonFullApiShipmentInvoiceGeneratedClient)[];

export function createAmazonFullApiShipmentInvoiceGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiShipmentInvoiceGeneratedClient {
  return {
    GetShipmentDetails: (...args) => callOperation("shipmentInvoicingV0:getShipmentDetails", ...(args as AmazonFullApiOperationArgs<"shipmentInvoicingV0:getShipmentDetails">)),
    SubmitInvoiceShipmentInvoicingV0: (...args) => callOperation("shipmentInvoicingV0:submitInvoice", ...(args as AmazonFullApiOperationArgs<"shipmentInvoicingV0:submitInvoice">)),
    GetInvoiceStatusShipmentInvoicingV0: (...args) => callOperation("shipmentInvoicingV0:getInvoiceStatus", ...(args as AmazonFullApiOperationArgs<"shipmentInvoicingV0:getInvoiceStatus">)),
  };
}
