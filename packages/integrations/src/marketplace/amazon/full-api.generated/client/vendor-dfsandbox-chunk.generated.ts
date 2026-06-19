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
export const AmazonFullApiVendorDFSandboxOperationKeys = [
  "vendorDirectFulfillmentSandboxData_2021-10-28:generateOrderScenarios"
] as const;
export type AmazonFullApiVendorDFSandboxOperationKey = typeof AmazonFullApiVendorDFSandboxOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiVendorDFSandboxOperationPathParamMap {
  "vendorDirectFulfillmentSandboxData_2021-10-28:generateOrderScenarios": {};
}

export interface AmazonFullApiVendorDFSandboxOperationRequestMap {
  "vendorDirectFulfillmentSandboxData_2021-10-28:generateOrderScenarios": AmazonFullApiOperationInput<"vendorDirectFulfillmentSandboxData_2021-10-28:generateOrderScenarios">;
}

export interface AmazonFullApiVendorDFSandboxGeneratedClient {
  GenerateOrderScenarios(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentSandboxData_2021-10-28:generateOrderScenarios">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentSandboxData_2021-10-28:generateOrderScenarios"]>;
}

export const AmazonFullApiVendorDFSandboxGeneratedFunctionNames = [
  "GenerateOrderScenarios"
] as const satisfies readonly (keyof AmazonFullApiVendorDFSandboxGeneratedClient)[];

export function createAmazonFullApiVendorDFSandboxGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiVendorDFSandboxGeneratedClient {
  return {
    GenerateOrderScenarios: (...args) => callOperation("vendorDirectFulfillmentSandboxData_2021-10-28:generateOrderScenarios", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentSandboxData_2021-10-28:generateOrderScenarios">)),
  };
}
