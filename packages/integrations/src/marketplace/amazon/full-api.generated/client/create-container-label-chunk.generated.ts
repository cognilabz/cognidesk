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
export const AmazonFullApiCreateContainerLabelOperationKeys = [
  "vendorDirectFulfillmentShipping_2021-12-28:createContainerLabel"
] as const;
export type AmazonFullApiCreateContainerLabelOperationKey = typeof AmazonFullApiCreateContainerLabelOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiCreateContainerLabelOperationPathParamMap {
  "vendorDirectFulfillmentShipping_2021-12-28:createContainerLabel": {};
}

export interface AmazonFullApiCreateContainerLabelOperationRequestMap {
  "vendorDirectFulfillmentShipping_2021-12-28:createContainerLabel": AmazonFullApiOperationInput<"vendorDirectFulfillmentShipping_2021-12-28:createContainerLabel">;
}

export interface AmazonFullApiCreateContainerLabelGeneratedClient {
  CreateContainerLabel(...args: AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:createContainerLabel">): Promise<AmazonFullApiOperationResponseMap["vendorDirectFulfillmentShipping_2021-12-28:createContainerLabel"]>;
}

export const AmazonFullApiCreateContainerLabelGeneratedFunctionNames = [
  "CreateContainerLabel"
] as const satisfies readonly (keyof AmazonFullApiCreateContainerLabelGeneratedClient)[];

export function createAmazonFullApiCreateContainerLabelGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiCreateContainerLabelGeneratedClient {
  return {
    CreateContainerLabel: (...args) => callOperation("vendorDirectFulfillmentShipping_2021-12-28:createContainerLabel", ...(args as AmazonFullApiOperationArgs<"vendorDirectFulfillmentShipping_2021-12-28:createContainerLabel">)),
  };
}
