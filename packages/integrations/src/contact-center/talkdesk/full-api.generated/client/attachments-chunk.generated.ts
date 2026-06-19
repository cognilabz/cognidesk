// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiAttachmentsOperationKeys = [
  "attachments-2023-03-get",
  "attachments-2023-03-post",
  "attachments-2023-03-upload-link-post",
  "attachments-2023-03-id-get",
  "attachments-2023-03-id-delete",
  "attachments-2023-03-id-download-link-get"
] as const;
export type TalkdeskFullApiAttachmentsOperationKey = typeof TalkdeskFullApiAttachmentsOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiAttachmentsOperationPathParamMap {
  "attachments-2023-03-get": {};
  "attachments-2023-03-post": {};
  "attachments-2023-03-upload-link-post": {};
  "attachments-2023-03-id-get": { "id": TalkdeskFullApiPathParamValue };
  "attachments-2023-03-id-delete": { "id": TalkdeskFullApiPathParamValue };
  "attachments-2023-03-id-download-link-get": { "id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiAttachmentsOperationRequestMap {
  "attachments-2023-03-get": TalkdeskFullApiOperationInput<"attachments-2023-03-get">;
  "attachments-2023-03-post": TalkdeskFullApiOperationInput<"attachments-2023-03-post">;
  "attachments-2023-03-upload-link-post": TalkdeskFullApiOperationInput<"attachments-2023-03-upload-link-post">;
  "attachments-2023-03-id-get": TalkdeskFullApiOperationInput<"attachments-2023-03-id-get">;
  "attachments-2023-03-id-delete": TalkdeskFullApiOperationInput<"attachments-2023-03-id-delete">;
  "attachments-2023-03-id-download-link-get": TalkdeskFullApiOperationInput<"attachments-2023-03-id-download-link-get">;
}

export interface TalkdeskFullApiAttachmentsGeneratedClient {
  Attachments202303Get(...args: TalkdeskFullApiOperationArgs<"attachments-2023-03-get">): Promise<TalkdeskFullApiOperationResponseMap["attachments-2023-03-get"]>;
  Attachments202303Post(...args: TalkdeskFullApiOperationArgs<"attachments-2023-03-post">): Promise<TalkdeskFullApiOperationResponseMap["attachments-2023-03-post"]>;
  Attachments202303UploadLinkPost(...args: TalkdeskFullApiOperationArgs<"attachments-2023-03-upload-link-post">): Promise<TalkdeskFullApiOperationResponseMap["attachments-2023-03-upload-link-post"]>;
  Attachments202303IdGet(...args: TalkdeskFullApiOperationArgs<"attachments-2023-03-id-get">): Promise<TalkdeskFullApiOperationResponseMap["attachments-2023-03-id-get"]>;
  Attachments202303IdDelete(...args: TalkdeskFullApiOperationArgs<"attachments-2023-03-id-delete">): Promise<TalkdeskFullApiOperationResponseMap["attachments-2023-03-id-delete"]>;
  Attachments202303IdDownloadLinkGet(...args: TalkdeskFullApiOperationArgs<"attachments-2023-03-id-download-link-get">): Promise<TalkdeskFullApiOperationResponseMap["attachments-2023-03-id-download-link-get"]>;
}

export const TalkdeskFullApiAttachmentsGeneratedFunctionNames = [
  "Attachments202303Get",
  "Attachments202303Post",
  "Attachments202303UploadLinkPost",
  "Attachments202303IdGet",
  "Attachments202303IdDelete",
  "Attachments202303IdDownloadLinkGet"
] as const satisfies readonly (keyof TalkdeskFullApiAttachmentsGeneratedClient)[];

export function createTalkdeskFullApiAttachmentsGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiAttachmentsGeneratedClient {
  return {
    Attachments202303Get: (...args) => callOperation("attachments-2023-03-get", ...(args as TalkdeskFullApiOperationArgs<"attachments-2023-03-get">)),
    Attachments202303Post: (...args) => callOperation("attachments-2023-03-post", ...(args as TalkdeskFullApiOperationArgs<"attachments-2023-03-post">)),
    Attachments202303UploadLinkPost: (...args) => callOperation("attachments-2023-03-upload-link-post", ...(args as TalkdeskFullApiOperationArgs<"attachments-2023-03-upload-link-post">)),
    Attachments202303IdGet: (...args) => callOperation("attachments-2023-03-id-get", ...(args as TalkdeskFullApiOperationArgs<"attachments-2023-03-id-get">)),
    Attachments202303IdDelete: (...args) => callOperation("attachments-2023-03-id-delete", ...(args as TalkdeskFullApiOperationArgs<"attachments-2023-03-id-delete">)),
    Attachments202303IdDownloadLinkGet: (...args) => callOperation("attachments-2023-03-id-download-link-get", ...(args as TalkdeskFullApiOperationArgs<"attachments-2023-03-id-download-link-get">)),
  };
}
