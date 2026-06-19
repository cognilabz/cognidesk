// Generated endpoint chunk for GorgiasFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GorgiasGeneratedOperationCaller,
  GorgiasFullApiOperationArgs,
  GorgiasFullApiOperationInput,
  GorgiasFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GorgiasFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GorgiasFullApiFilesOperationKeys = [
  "download-file",
  "post_/api/upload"
] as const;
export type GorgiasFullApiFilesOperationKey = typeof GorgiasFullApiFilesOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiFilesOperationPathParamMap {
  "download-file": { "file_type": GorgiasFullApiPathParamValue; "domain_hash": GorgiasFullApiPathParamValue; "resource_name": GorgiasFullApiPathParamValue };
  "post_/api/upload": {};
}

export interface GorgiasFullApiFilesOperationRequestMap {
  "download-file": GorgiasFullApiOperationInput<"download-file">;
  "post_/api/upload": GorgiasFullApiOperationInput<"post_/api/upload">;
}

export interface GorgiasFullApiFilesGeneratedClient {
  gorgiasDownloadFile(...args: GorgiasFullApiOperationArgs<"download-file">): Promise<GorgiasFullApiOperationResponseMap["download-file"]>;
  gorgiasPostApiUpload(...args: GorgiasFullApiOperationArgs<"post_/api/upload">): Promise<GorgiasFullApiOperationResponseMap["post_/api/upload"]>;
}

export const GorgiasFullApiFilesGeneratedFunctionNames = [
  "gorgiasDownloadFile",
  "gorgiasPostApiUpload"
] as const satisfies readonly (keyof GorgiasFullApiFilesGeneratedClient)[];

export function createGorgiasFullApiFilesGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiFilesGeneratedClient {
  return {
    gorgiasDownloadFile: (...args) => callOperation("download-file", ...(args as GorgiasFullApiOperationArgs<"download-file">)),
    gorgiasPostApiUpload: (...args) => callOperation("post_/api/upload", ...(args as GorgiasFullApiOperationArgs<"post_/api/upload">)),
  };
}
