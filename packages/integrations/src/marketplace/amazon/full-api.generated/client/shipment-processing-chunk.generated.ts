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
export const AmazonFullApiShipmentProcessingOperationKeys = [
  "externalFulfillmentShipments_2024-09-11:processShipment",
  "externalFulfillmentShipments_2024-09-11:createPackages",
  "externalFulfillmentShipments_2024-09-11:updatePackage",
  "externalFulfillmentShipments_2024-09-11:updatePackageStatus",
  "externalFulfillmentShipments_2024-09-11:retrieveShippingOptions",
  "externalFulfillmentShipments_2024-09-11:generateInvoice",
  "externalFulfillmentShipments_2024-09-11:retrieveInvoice",
  "externalFulfillmentShipments_2024-09-11:generateShipLabels"
] as const;
export type AmazonFullApiShipmentProcessingOperationKey = typeof AmazonFullApiShipmentProcessingOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiShipmentProcessingOperationPathParamMap {
  "externalFulfillmentShipments_2024-09-11:processShipment": { "shipmentId": AmazonFullApiPathParamValue };
  "externalFulfillmentShipments_2024-09-11:createPackages": { "shipmentId": AmazonFullApiPathParamValue };
  "externalFulfillmentShipments_2024-09-11:updatePackage": { "shipmentId": AmazonFullApiPathParamValue; "packageId": AmazonFullApiPathParamValue };
  "externalFulfillmentShipments_2024-09-11:updatePackageStatus": { "shipmentId": AmazonFullApiPathParamValue; "packageId": AmazonFullApiPathParamValue };
  "externalFulfillmentShipments_2024-09-11:retrieveShippingOptions": { "shipmentId": AmazonFullApiPathParamValue };
  "externalFulfillmentShipments_2024-09-11:generateInvoice": { "shipmentId": AmazonFullApiPathParamValue };
  "externalFulfillmentShipments_2024-09-11:retrieveInvoice": { "shipmentId": AmazonFullApiPathParamValue };
  "externalFulfillmentShipments_2024-09-11:generateShipLabels": { "shipmentId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiShipmentProcessingOperationRequestMap {
  "externalFulfillmentShipments_2024-09-11:processShipment": AmazonFullApiOperationInput<"externalFulfillmentShipments_2024-09-11:processShipment">;
  "externalFulfillmentShipments_2024-09-11:createPackages": AmazonFullApiOperationInput<"externalFulfillmentShipments_2024-09-11:createPackages">;
  "externalFulfillmentShipments_2024-09-11:updatePackage": AmazonFullApiOperationInput<"externalFulfillmentShipments_2024-09-11:updatePackage">;
  "externalFulfillmentShipments_2024-09-11:updatePackageStatus": AmazonFullApiOperationInput<"externalFulfillmentShipments_2024-09-11:updatePackageStatus">;
  "externalFulfillmentShipments_2024-09-11:retrieveShippingOptions": AmazonFullApiOperationInput<"externalFulfillmentShipments_2024-09-11:retrieveShippingOptions">;
  "externalFulfillmentShipments_2024-09-11:generateInvoice": AmazonFullApiOperationInput<"externalFulfillmentShipments_2024-09-11:generateInvoice">;
  "externalFulfillmentShipments_2024-09-11:retrieveInvoice": AmazonFullApiOperationInput<"externalFulfillmentShipments_2024-09-11:retrieveInvoice">;
  "externalFulfillmentShipments_2024-09-11:generateShipLabels": AmazonFullApiOperationInput<"externalFulfillmentShipments_2024-09-11:generateShipLabels">;
}

export interface AmazonFullApiShipmentProcessingGeneratedClient {
  ProcessShipment(...args: AmazonFullApiOperationArgs<"externalFulfillmentShipments_2024-09-11:processShipment">): Promise<AmazonFullApiOperationResponseMap["externalFulfillmentShipments_2024-09-11:processShipment"]>;
  CreatePackages(...args: AmazonFullApiOperationArgs<"externalFulfillmentShipments_2024-09-11:createPackages">): Promise<AmazonFullApiOperationResponseMap["externalFulfillmentShipments_2024-09-11:createPackages"]>;
  UpdatePackage(...args: AmazonFullApiOperationArgs<"externalFulfillmentShipments_2024-09-11:updatePackage">): Promise<AmazonFullApiOperationResponseMap["externalFulfillmentShipments_2024-09-11:updatePackage"]>;
  UpdatePackageStatus(...args: AmazonFullApiOperationArgs<"externalFulfillmentShipments_2024-09-11:updatePackageStatus">): Promise<AmazonFullApiOperationResponseMap["externalFulfillmentShipments_2024-09-11:updatePackageStatus"]>;
  RetrieveShippingOptions(...args: AmazonFullApiOperationArgs<"externalFulfillmentShipments_2024-09-11:retrieveShippingOptions">): Promise<AmazonFullApiOperationResponseMap["externalFulfillmentShipments_2024-09-11:retrieveShippingOptions"]>;
  GenerateInvoice(...args: AmazonFullApiOperationArgs<"externalFulfillmentShipments_2024-09-11:generateInvoice">): Promise<AmazonFullApiOperationResponseMap["externalFulfillmentShipments_2024-09-11:generateInvoice"]>;
  RetrieveInvoice(...args: AmazonFullApiOperationArgs<"externalFulfillmentShipments_2024-09-11:retrieveInvoice">): Promise<AmazonFullApiOperationResponseMap["externalFulfillmentShipments_2024-09-11:retrieveInvoice"]>;
  GenerateShipLabels(...args: AmazonFullApiOperationArgs<"externalFulfillmentShipments_2024-09-11:generateShipLabels">): Promise<AmazonFullApiOperationResponseMap["externalFulfillmentShipments_2024-09-11:generateShipLabels"]>;
}

export const AmazonFullApiShipmentProcessingGeneratedFunctionNames = [
  "ProcessShipment",
  "CreatePackages",
  "UpdatePackage",
  "UpdatePackageStatus",
  "RetrieveShippingOptions",
  "GenerateInvoice",
  "RetrieveInvoice",
  "GenerateShipLabels"
] as const satisfies readonly (keyof AmazonFullApiShipmentProcessingGeneratedClient)[];

export function createAmazonFullApiShipmentProcessingGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiShipmentProcessingGeneratedClient {
  return {
    ProcessShipment: (...args) => callOperation("externalFulfillmentShipments_2024-09-11:processShipment", ...(args as AmazonFullApiOperationArgs<"externalFulfillmentShipments_2024-09-11:processShipment">)),
    CreatePackages: (...args) => callOperation("externalFulfillmentShipments_2024-09-11:createPackages", ...(args as AmazonFullApiOperationArgs<"externalFulfillmentShipments_2024-09-11:createPackages">)),
    UpdatePackage: (...args) => callOperation("externalFulfillmentShipments_2024-09-11:updatePackage", ...(args as AmazonFullApiOperationArgs<"externalFulfillmentShipments_2024-09-11:updatePackage">)),
    UpdatePackageStatus: (...args) => callOperation("externalFulfillmentShipments_2024-09-11:updatePackageStatus", ...(args as AmazonFullApiOperationArgs<"externalFulfillmentShipments_2024-09-11:updatePackageStatus">)),
    RetrieveShippingOptions: (...args) => callOperation("externalFulfillmentShipments_2024-09-11:retrieveShippingOptions", ...(args as AmazonFullApiOperationArgs<"externalFulfillmentShipments_2024-09-11:retrieveShippingOptions">)),
    GenerateInvoice: (...args) => callOperation("externalFulfillmentShipments_2024-09-11:generateInvoice", ...(args as AmazonFullApiOperationArgs<"externalFulfillmentShipments_2024-09-11:generateInvoice">)),
    RetrieveInvoice: (...args) => callOperation("externalFulfillmentShipments_2024-09-11:retrieveInvoice", ...(args as AmazonFullApiOperationArgs<"externalFulfillmentShipments_2024-09-11:retrieveInvoice">)),
    GenerateShipLabels: (...args) => callOperation("externalFulfillmentShipments_2024-09-11:generateShipLabels", ...(args as AmazonFullApiOperationArgs<"externalFulfillmentShipments_2024-09-11:generateShipLabels">)),
  };
}
