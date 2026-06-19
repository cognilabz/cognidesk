// Generated endpoint chunk for AmazonConnectFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonConnectGeneratedOperationCaller,
  AmazonConnectFullApiOperationArgs,
  AmazonConnectFullApiOperationInput,
  AmazonConnectFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonConnectFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonConnectFullApiAttachedFilesOperationKeys = [
  "connect:BatchGetAttachedFileMetadata",
  "connect:CompleteAttachedFileUpload",
  "connect:DeleteAttachedFile",
  "connect:GetAttachedFile",
  "connect:StartAttachedFileUpload"
] as const;
export type AmazonConnectFullApiAttachedFilesOperationKey = typeof AmazonConnectFullApiAttachedFilesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiAttachedFilesOperationPathParamMap {
  "connect:BatchGetAttachedFileMetadata": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:CompleteAttachedFileUpload": { "InstanceId": AmazonConnectFullApiPathParamValue; "FileId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteAttachedFile": { "InstanceId": AmazonConnectFullApiPathParamValue; "FileId": AmazonConnectFullApiPathParamValue };
  "connect:GetAttachedFile": { "InstanceId": AmazonConnectFullApiPathParamValue; "FileId": AmazonConnectFullApiPathParamValue };
  "connect:StartAttachedFileUpload": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiAttachedFilesOperationRequestMap {
  "connect:BatchGetAttachedFileMetadata": AmazonConnectFullApiOperationInput<"connect:BatchGetAttachedFileMetadata">;
  "connect:CompleteAttachedFileUpload": AmazonConnectFullApiOperationInput<"connect:CompleteAttachedFileUpload">;
  "connect:DeleteAttachedFile": AmazonConnectFullApiOperationInput<"connect:DeleteAttachedFile">;
  "connect:GetAttachedFile": AmazonConnectFullApiOperationInput<"connect:GetAttachedFile">;
  "connect:StartAttachedFileUpload": AmazonConnectFullApiOperationInput<"connect:StartAttachedFileUpload">;
}

export interface AmazonConnectFullApiAttachedFilesGeneratedClient {
  BatchGetAttachedFileMetadata(...args: AmazonConnectFullApiOperationArgs<"connect:BatchGetAttachedFileMetadata">): Promise<AmazonConnectFullApiOperationResponseMap["connect:BatchGetAttachedFileMetadata"]>;
  CompleteAttachedFileUpload(...args: AmazonConnectFullApiOperationArgs<"connect:CompleteAttachedFileUpload">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CompleteAttachedFileUpload"]>;
  DeleteAttachedFile(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteAttachedFile">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteAttachedFile"]>;
  GetAttachedFile(...args: AmazonConnectFullApiOperationArgs<"connect:GetAttachedFile">): Promise<AmazonConnectFullApiOperationResponseMap["connect:GetAttachedFile"]>;
  StartAttachedFileUpload(...args: AmazonConnectFullApiOperationArgs<"connect:StartAttachedFileUpload">): Promise<AmazonConnectFullApiOperationResponseMap["connect:StartAttachedFileUpload"]>;
}

export const AmazonConnectFullApiAttachedFilesGeneratedFunctionNames = [
  "BatchGetAttachedFileMetadata",
  "CompleteAttachedFileUpload",
  "DeleteAttachedFile",
  "GetAttachedFile",
  "StartAttachedFileUpload"
] as const satisfies readonly (keyof AmazonConnectFullApiAttachedFilesGeneratedClient)[];

export function createAmazonConnectFullApiAttachedFilesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiAttachedFilesGeneratedClient {
  return {
    BatchGetAttachedFileMetadata: (...args) => callOperation("connect:BatchGetAttachedFileMetadata", ...(args as AmazonConnectFullApiOperationArgs<"connect:BatchGetAttachedFileMetadata">)),
    CompleteAttachedFileUpload: (...args) => callOperation("connect:CompleteAttachedFileUpload", ...(args as AmazonConnectFullApiOperationArgs<"connect:CompleteAttachedFileUpload">)),
    DeleteAttachedFile: (...args) => callOperation("connect:DeleteAttachedFile", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteAttachedFile">)),
    GetAttachedFile: (...args) => callOperation("connect:GetAttachedFile", ...(args as AmazonConnectFullApiOperationArgs<"connect:GetAttachedFile">)),
    StartAttachedFileUpload: (...args) => callOperation("connect:StartAttachedFileUpload", ...(args as AmazonConnectFullApiOperationArgs<"connect:StartAttachedFileUpload">)),
  };
}
