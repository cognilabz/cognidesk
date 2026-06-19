// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiDownloadsOperationKeys = [
  "getDownload"
] as const;
export type GenesysCloudFullApiDownloadsOperationKey = typeof GenesysCloudFullApiDownloadsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiDownloadsOperationPathParamMap {
  "getDownload": { "downloadId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiDownloadsOperationRequestMap {
  "getDownload": GenesysCloudFullApiOperationInput<"getDownload">;
}

export interface GenesysCloudFullApiDownloadsGeneratedClient {
  GetDownload(...args: GenesysCloudFullApiOperationArgs<"getDownload">): Promise<GenesysCloudFullApiOperationResponseMap["getDownload"]>;
}

export const GenesysCloudFullApiDownloadsGeneratedFunctionNames = [
  "GetDownload"
] as const satisfies readonly (keyof GenesysCloudFullApiDownloadsGeneratedClient)[];

export function createGenesysCloudFullApiDownloadsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiDownloadsGeneratedClient {
  return {
    GetDownload: (...args) => callOperation("getDownload", ...(args as GenesysCloudFullApiOperationArgs<"getDownload">)),
  };
}
