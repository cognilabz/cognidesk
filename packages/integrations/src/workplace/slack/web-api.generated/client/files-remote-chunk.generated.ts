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
export const SlackWebApiFilesRemoteOperationKeys = [
  "POST /files.remote.add",
  "GET /files.remote.info",
  "GET /files.remote.list",
  "POST /files.remote.remove",
  "GET /files.remote.share",
  "POST /files.remote.update"
] as const;
export type SlackWebApiFilesRemoteOperationKey = typeof SlackWebApiFilesRemoteOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiFilesRemoteOperationPathParamMap {
  "POST /files.remote.add": {};
  "GET /files.remote.info": {};
  "GET /files.remote.list": {};
  "POST /files.remote.remove": {};
  "GET /files.remote.share": {};
  "POST /files.remote.update": {};
}

export interface SlackWebApiFilesRemoteOperationRequestMap {
  "POST /files.remote.add": SlackWebApiOperationInput<"POST /files.remote.add">;
  "GET /files.remote.info": SlackWebApiOperationInput<"GET /files.remote.info">;
  "GET /files.remote.list": SlackWebApiOperationInput<"GET /files.remote.list">;
  "POST /files.remote.remove": SlackWebApiOperationInput<"POST /files.remote.remove">;
  "GET /files.remote.share": SlackWebApiOperationInput<"GET /files.remote.share">;
  "POST /files.remote.update": SlackWebApiOperationInput<"POST /files.remote.update">;
}

export interface SlackWebApiFilesRemoteGeneratedClient {
  FilesRemoteAdd(...args: SlackWebApiOperationArgs<"POST /files.remote.add">): Promise<SlackWebApiOperationResponseMap["POST /files.remote.add"]>;
  FilesRemoteInfo(...args: SlackWebApiOperationArgs<"GET /files.remote.info">): Promise<SlackWebApiOperationResponseMap["GET /files.remote.info"]>;
  FilesRemoteList(...args: SlackWebApiOperationArgs<"GET /files.remote.list">): Promise<SlackWebApiOperationResponseMap["GET /files.remote.list"]>;
  FilesRemoteRemove(...args: SlackWebApiOperationArgs<"POST /files.remote.remove">): Promise<SlackWebApiOperationResponseMap["POST /files.remote.remove"]>;
  FilesRemoteShare(...args: SlackWebApiOperationArgs<"GET /files.remote.share">): Promise<SlackWebApiOperationResponseMap["GET /files.remote.share"]>;
  FilesRemoteUpdate(...args: SlackWebApiOperationArgs<"POST /files.remote.update">): Promise<SlackWebApiOperationResponseMap["POST /files.remote.update"]>;
}

export const SlackWebApiFilesRemoteGeneratedFunctionNames = [
  "FilesRemoteAdd",
  "FilesRemoteInfo",
  "FilesRemoteList",
  "FilesRemoteRemove",
  "FilesRemoteShare",
  "FilesRemoteUpdate"
] as const satisfies readonly (keyof SlackWebApiFilesRemoteGeneratedClient)[];

export function createSlackWebApiFilesRemoteGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiFilesRemoteGeneratedClient {
  return {
    FilesRemoteAdd: (...args) => callOperation("POST /files.remote.add", ...(args as SlackWebApiOperationArgs<"POST /files.remote.add">)),
    FilesRemoteInfo: (...args) => callOperation("GET /files.remote.info", ...(args as SlackWebApiOperationArgs<"GET /files.remote.info">)),
    FilesRemoteList: (...args) => callOperation("GET /files.remote.list", ...(args as SlackWebApiOperationArgs<"GET /files.remote.list">)),
    FilesRemoteRemove: (...args) => callOperation("POST /files.remote.remove", ...(args as SlackWebApiOperationArgs<"POST /files.remote.remove">)),
    FilesRemoteShare: (...args) => callOperation("GET /files.remote.share", ...(args as SlackWebApiOperationArgs<"GET /files.remote.share">)),
    FilesRemoteUpdate: (...args) => callOperation("POST /files.remote.update", ...(args as SlackWebApiOperationArgs<"POST /files.remote.update">)),
  };
}
