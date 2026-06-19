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
export const AmazonFullApiUploadsOperationKeys = [
  "uploads_2020-11-01:createUploadDestinationForResource"
] as const;
export type AmazonFullApiUploadsOperationKey = typeof AmazonFullApiUploadsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiUploadsOperationPathParamMap {
  "uploads_2020-11-01:createUploadDestinationForResource": { "resource": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiUploadsOperationRequestMap {
  "uploads_2020-11-01:createUploadDestinationForResource": AmazonFullApiOperationInput<"uploads_2020-11-01:createUploadDestinationForResource">;
}

export interface AmazonFullApiUploadsGeneratedClient {
  CreateUploadDestinationForResource(...args: AmazonFullApiOperationArgs<"uploads_2020-11-01:createUploadDestinationForResource">): Promise<AmazonFullApiOperationResponseMap["uploads_2020-11-01:createUploadDestinationForResource"]>;
}

export const AmazonFullApiUploadsGeneratedFunctionNames = [
  "CreateUploadDestinationForResource"
] as const satisfies readonly (keyof AmazonFullApiUploadsGeneratedClient)[];

export function createAmazonFullApiUploadsGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiUploadsGeneratedClient {
  return {
    CreateUploadDestinationForResource: (...args) => callOperation("uploads_2020-11-01:createUploadDestinationForResource", ...(args as AmazonFullApiOperationArgs<"uploads_2020-11-01:createUploadDestinationForResource">)),
  };
}
