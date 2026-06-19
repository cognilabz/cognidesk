// Generated endpoint chunk for SlackWebApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  SlackWebApiGeneratedOperationCaller,
  SlackWebApiOperationArgs,
  SlackWebApiOperationInput,
  SlackWebApiPathParamValue,
} from "../../web-api-client.generated.js";
import type { SlackWebApiOperationResponseMap } from "../../web-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const SlackWebApiFilesOperationKeys = [
  "POST /files.delete",
  "GET /files.info",
  "GET /files.list",
  "POST /files.revokePublicURL",
  "POST /files.sharedPublicURL",
  "POST /files.upload"
] as const;
export type SlackWebApiFilesOperationKey = typeof SlackWebApiFilesOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiFilesOperationPathParamMap {
  "POST /files.delete": {};
  "GET /files.info": {};
  "GET /files.list": {};
  "POST /files.revokePublicURL": {};
  "POST /files.sharedPublicURL": {};
  "POST /files.upload": {};
}

export interface SlackWebApiFilesOperationRequestMap {
  "POST /files.delete": SlackWebApiOperationInput<"POST /files.delete">;
  "GET /files.info": SlackWebApiOperationInput<"GET /files.info">;
  "GET /files.list": SlackWebApiOperationInput<"GET /files.list">;
  "POST /files.revokePublicURL": SlackWebApiOperationInput<"POST /files.revokePublicURL">;
  "POST /files.sharedPublicURL": SlackWebApiOperationInput<"POST /files.sharedPublicURL">;
  "POST /files.upload": SlackWebApiOperationInput<"POST /files.upload">;
}

export interface SlackWebApiFilesGeneratedClient {
  FilesDelete(...args: SlackWebApiOperationArgs<"POST /files.delete">): Promise<SlackWebApiOperationResponseMap["POST /files.delete"]>;
  FilesInfo(...args: SlackWebApiOperationArgs<"GET /files.info">): Promise<SlackWebApiOperationResponseMap["GET /files.info"]>;
  FilesList(...args: SlackWebApiOperationArgs<"GET /files.list">): Promise<SlackWebApiOperationResponseMap["GET /files.list"]>;
  FilesRevokePublicURL(...args: SlackWebApiOperationArgs<"POST /files.revokePublicURL">): Promise<SlackWebApiOperationResponseMap["POST /files.revokePublicURL"]>;
  FilesSharedPublicURL(...args: SlackWebApiOperationArgs<"POST /files.sharedPublicURL">): Promise<SlackWebApiOperationResponseMap["POST /files.sharedPublicURL"]>;
  FilesUpload(...args: SlackWebApiOperationArgs<"POST /files.upload">): Promise<SlackWebApiOperationResponseMap["POST /files.upload"]>;
}

export const SlackWebApiFilesGeneratedFunctionNames = [
  "FilesDelete",
  "FilesInfo",
  "FilesList",
  "FilesRevokePublicURL",
  "FilesSharedPublicURL",
  "FilesUpload"
] as const satisfies readonly (keyof SlackWebApiFilesGeneratedClient)[];

export function createSlackWebApiFilesGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiFilesGeneratedClient {
  return {
    FilesDelete: (...args) => callOperation("POST /files.delete", ...(args as SlackWebApiOperationArgs<"POST /files.delete">)),
    FilesInfo: (...args) => callOperation("GET /files.info", ...(args as SlackWebApiOperationArgs<"GET /files.info">)),
    FilesList: (...args) => callOperation("GET /files.list", ...(args as SlackWebApiOperationArgs<"GET /files.list">)),
    FilesRevokePublicURL: (...args) => callOperation("POST /files.revokePublicURL", ...(args as SlackWebApiOperationArgs<"POST /files.revokePublicURL">)),
    FilesSharedPublicURL: (...args) => callOperation("POST /files.sharedPublicURL", ...(args as SlackWebApiOperationArgs<"POST /files.sharedPublicURL">)),
    FilesUpload: (...args) => callOperation("POST /files.upload", ...(args as SlackWebApiOperationArgs<"POST /files.upload">)),
  };
}
