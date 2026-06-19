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
export const AmazonFullApiTransferPreviewOperationKeys = [
  "sellerWallet_2024-03-01:getTransferPreview"
] as const;
export type AmazonFullApiTransferPreviewOperationKey = typeof AmazonFullApiTransferPreviewOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiTransferPreviewOperationPathParamMap {
  "sellerWallet_2024-03-01:getTransferPreview": {};
}

export interface AmazonFullApiTransferPreviewOperationRequestMap {
  "sellerWallet_2024-03-01:getTransferPreview": AmazonFullApiOperationInput<"sellerWallet_2024-03-01:getTransferPreview">;
}

export interface AmazonFullApiTransferPreviewGeneratedClient {
  GetTransferPreview(...args: AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:getTransferPreview">): Promise<AmazonFullApiOperationResponseMap["sellerWallet_2024-03-01:getTransferPreview"]>;
}

export const AmazonFullApiTransferPreviewGeneratedFunctionNames = [
  "GetTransferPreview"
] as const satisfies readonly (keyof AmazonFullApiTransferPreviewGeneratedClient)[];

export function createAmazonFullApiTransferPreviewGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiTransferPreviewGeneratedClient {
  return {
    GetTransferPreview: (...args) => callOperation("sellerWallet_2024-03-01:getTransferPreview", ...(args as AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:getTransferPreview">)),
  };
}
