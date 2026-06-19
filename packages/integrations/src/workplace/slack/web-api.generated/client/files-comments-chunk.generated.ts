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
export const SlackWebApiFilesCommentsOperationKeys = [
  "POST /files.comments.delete"
] as const;
export type SlackWebApiFilesCommentsOperationKey = typeof SlackWebApiFilesCommentsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiFilesCommentsOperationPathParamMap {
  "POST /files.comments.delete": {};
}

export interface SlackWebApiFilesCommentsOperationRequestMap {
  "POST /files.comments.delete": SlackWebApiOperationInput<"POST /files.comments.delete">;
}

export interface SlackWebApiFilesCommentsGeneratedClient {
  FilesCommentsDelete(...args: SlackWebApiOperationArgs<"POST /files.comments.delete">): Promise<SlackWebApiOperationResponseMap["POST /files.comments.delete"]>;
}

export const SlackWebApiFilesCommentsGeneratedFunctionNames = [
  "FilesCommentsDelete"
] as const satisfies readonly (keyof SlackWebApiFilesCommentsGeneratedClient)[];

export function createSlackWebApiFilesCommentsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiFilesCommentsGeneratedClient {
  return {
    FilesCommentsDelete: (...args) => callOperation("POST /files.comments.delete", ...(args as SlackWebApiOperationArgs<"POST /files.comments.delete">)),
  };
}
