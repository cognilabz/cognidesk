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
export const AmazonFullApiVendorDFSandboxtransactionstatusOperationKeys = [
  "vendorDirectFulfillmentSandboxData_2021-10-28:getOrderScenarios"
] as const;
export type AmazonFullApiVendorDFSandboxtransactionstatusOperationKey = typeof AmazonFullApiVendorDFSandboxtransactionstatusOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiVendorDFSandboxtransactionstatusOperationPathParamMap {
  "vendorDirectFulfillmentSandboxData_2021-10-28:getOrderScenarios": { "transactionId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiVendorDFSandboxtransactionstatusOperationRequestMap {
  "vendorDirectFulfillmentSandboxData_2021-10-28:getOrderScenarios": AmazonFullApiOperationInput<"vendorDirectFulfillmentSandboxData_2021-10-28:getOrderScenarios">;
}

export interface AmazonFullApiVendorDFSandboxtransactionstatusGeneratedClient {
  GetOrderScenarios(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentSandboxData_2021-10-28:getOrderScenarios">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentSandboxData_2021-10-28:getOrderScenarios"]>;
}

export const AmazonFullApiVendorDFSandboxtransactionstatusGeneratedFunctionNames = [
  "GetOrderScenarios"
] as const satisfies readonly (keyof AmazonFullApiVendorDFSandboxtransactionstatusGeneratedClient)[];

export function createAmazonFullApiVendorDFSandboxtransactionstatusGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiVendorDFSandboxtransactionstatusGeneratedClient {
  return {
    GetOrderScenarios: (...args) => callOperation("vendorDirectFulfillmentSandboxData_2021-10-28:getOrderScenarios", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentSandboxData_2021-10-28:getOrderScenarios">)),
  };
}
