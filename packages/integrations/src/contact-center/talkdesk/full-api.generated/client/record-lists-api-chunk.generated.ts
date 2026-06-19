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
export const TalkdeskFullApiRecordListsAPIOperationKeys = [
  "record-lists-get",
  "record-lists-post",
  "record-lists-id-get",
  "record-lists-id-patch",
  "record-lists-id-records-id-record-get",
  "record-lists-id-records-id-record-delete",
  "record-lists-id-records-id-record-patch",
  "record-lists-id-records-get",
  "record-lists-id-records-post",
  "record-lists-id-records-delete",
  "record-lists-id-records-timezones-get",
  "record-lists-id-external-records-delete",
  "record-lists-id-records-bulks-post",
  "record-lists-id-records-bulks-patch",
  "record-lists-id-records-bulks-delete",
  "record-lists-id-upload-requests-post",
  "record-lists-id-upload-requests-id-upload-request-patch"
] as const;
export type TalkdeskFullApiRecordListsAPIOperationKey = typeof TalkdeskFullApiRecordListsAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiRecordListsAPIOperationPathParamMap {
  "record-lists-get": {};
  "record-lists-post": {};
  "record-lists-id-get": { "id": TalkdeskFullApiPathParamValue };
  "record-lists-id-patch": { "id": TalkdeskFullApiPathParamValue };
  "record-lists-id-records-id-record-get": { "id": TalkdeskFullApiPathParamValue; "id_record": TalkdeskFullApiPathParamValue };
  "record-lists-id-records-id-record-delete": { "id": TalkdeskFullApiPathParamValue; "id_record": TalkdeskFullApiPathParamValue };
  "record-lists-id-records-id-record-patch": { "id": TalkdeskFullApiPathParamValue; "id_record": TalkdeskFullApiPathParamValue };
  "record-lists-id-records-get": { "id": TalkdeskFullApiPathParamValue };
  "record-lists-id-records-post": { "id": TalkdeskFullApiPathParamValue };
  "record-lists-id-records-delete": { "id": TalkdeskFullApiPathParamValue };
  "record-lists-id-records-timezones-get": { "id": TalkdeskFullApiPathParamValue };
  "record-lists-id-external-records-delete": { "id": TalkdeskFullApiPathParamValue };
  "record-lists-id-records-bulks-post": { "id": TalkdeskFullApiPathParamValue };
  "record-lists-id-records-bulks-patch": { "id": TalkdeskFullApiPathParamValue };
  "record-lists-id-records-bulks-delete": { "id": TalkdeskFullApiPathParamValue };
  "record-lists-id-upload-requests-post": { "id": TalkdeskFullApiPathParamValue };
  "record-lists-id-upload-requests-id-upload-request-patch": { "id": TalkdeskFullApiPathParamValue; "id_upload_request": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiRecordListsAPIOperationRequestMap {
  "record-lists-get": TalkdeskFullApiOperationInput<"record-lists-get">;
  "record-lists-post": TalkdeskFullApiOperationInput<"record-lists-post">;
  "record-lists-id-get": TalkdeskFullApiOperationInput<"record-lists-id-get">;
  "record-lists-id-patch": TalkdeskFullApiOperationInput<"record-lists-id-patch">;
  "record-lists-id-records-id-record-get": TalkdeskFullApiOperationInput<"record-lists-id-records-id-record-get">;
  "record-lists-id-records-id-record-delete": TalkdeskFullApiOperationInput<"record-lists-id-records-id-record-delete">;
  "record-lists-id-records-id-record-patch": TalkdeskFullApiOperationInput<"record-lists-id-records-id-record-patch">;
  "record-lists-id-records-get": TalkdeskFullApiOperationInput<"record-lists-id-records-get">;
  "record-lists-id-records-post": TalkdeskFullApiOperationInput<"record-lists-id-records-post">;
  "record-lists-id-records-delete": TalkdeskFullApiOperationInput<"record-lists-id-records-delete">;
  "record-lists-id-records-timezones-get": TalkdeskFullApiOperationInput<"record-lists-id-records-timezones-get">;
  "record-lists-id-external-records-delete": TalkdeskFullApiOperationInput<"record-lists-id-external-records-delete">;
  "record-lists-id-records-bulks-post": TalkdeskFullApiOperationInput<"record-lists-id-records-bulks-post">;
  "record-lists-id-records-bulks-patch": TalkdeskFullApiOperationInput<"record-lists-id-records-bulks-patch">;
  "record-lists-id-records-bulks-delete": TalkdeskFullApiOperationInput<"record-lists-id-records-bulks-delete">;
  "record-lists-id-upload-requests-post": TalkdeskFullApiOperationInput<"record-lists-id-upload-requests-post">;
  "record-lists-id-upload-requests-id-upload-request-patch": TalkdeskFullApiOperationInput<"record-lists-id-upload-requests-id-upload-request-patch">;
}

export interface TalkdeskFullApiRecordListsAPIGeneratedClient {
  RecordListsGet(...args: TalkdeskFullApiOperationArgs<"record-lists-get">): Promise<TalkdeskFullApiOperationResponseMap["record-lists-get"]>;
  RecordListsPost(...args: TalkdeskFullApiOperationArgs<"record-lists-post">): Promise<TalkdeskFullApiOperationResponseMap["record-lists-post"]>;
  RecordListsIdGet(...args: TalkdeskFullApiOperationArgs<"record-lists-id-get">): Promise<TalkdeskFullApiOperationResponseMap["record-lists-id-get"]>;
  RecordListsIdPatch(...args: TalkdeskFullApiOperationArgs<"record-lists-id-patch">): Promise<TalkdeskFullApiOperationResponseMap["record-lists-id-patch"]>;
  RecordListsIdRecordsIdRecordGet(...args: TalkdeskFullApiOperationArgs<"record-lists-id-records-id-record-get">): Promise<TalkdeskFullApiOperationResponseMap["record-lists-id-records-id-record-get"]>;
  RecordListsIdRecordsIdRecordDelete(...args: TalkdeskFullApiOperationArgs<"record-lists-id-records-id-record-delete">): Promise<TalkdeskFullApiOperationResponseMap["record-lists-id-records-id-record-delete"]>;
  RecordListsIdRecordsIdRecordPatch(...args: TalkdeskFullApiOperationArgs<"record-lists-id-records-id-record-patch">): Promise<TalkdeskFullApiOperationResponseMap["record-lists-id-records-id-record-patch"]>;
  RecordListsIdRecordsGet(...args: TalkdeskFullApiOperationArgs<"record-lists-id-records-get">): Promise<TalkdeskFullApiOperationResponseMap["record-lists-id-records-get"]>;
  RecordListsIdRecordsPost(...args: TalkdeskFullApiOperationArgs<"record-lists-id-records-post">): Promise<TalkdeskFullApiOperationResponseMap["record-lists-id-records-post"]>;
  RecordListsIdRecordsDelete(...args: TalkdeskFullApiOperationArgs<"record-lists-id-records-delete">): Promise<TalkdeskFullApiOperationResponseMap["record-lists-id-records-delete"]>;
  RecordListsIdRecordsTimezonesGet(...args: TalkdeskFullApiOperationArgs<"record-lists-id-records-timezones-get">): Promise<TalkdeskFullApiOperationResponseMap["record-lists-id-records-timezones-get"]>;
  RecordListsIdExternalRecordsDelete(...args: TalkdeskFullApiOperationArgs<"record-lists-id-external-records-delete">): Promise<TalkdeskFullApiOperationResponseMap["record-lists-id-external-records-delete"]>;
  RecordListsIdRecordsBulksPost(...args: TalkdeskFullApiOperationArgs<"record-lists-id-records-bulks-post">): Promise<TalkdeskFullApiOperationResponseMap["record-lists-id-records-bulks-post"]>;
  RecordListsIdRecordsBulksPatch(...args: TalkdeskFullApiOperationArgs<"record-lists-id-records-bulks-patch">): Promise<TalkdeskFullApiOperationResponseMap["record-lists-id-records-bulks-patch"]>;
  RecordListsIdRecordsBulksDelete(...args: TalkdeskFullApiOperationArgs<"record-lists-id-records-bulks-delete">): Promise<TalkdeskFullApiOperationResponseMap["record-lists-id-records-bulks-delete"]>;
  RecordListsIdUploadRequestsPost(...args: TalkdeskFullApiOperationArgs<"record-lists-id-upload-requests-post">): Promise<TalkdeskFullApiOperationResponseMap["record-lists-id-upload-requests-post"]>;
  RecordListsIdUploadRequestsIdUploadRequestPatch(...args: TalkdeskFullApiOperationArgs<"record-lists-id-upload-requests-id-upload-request-patch">): Promise<TalkdeskFullApiOperationResponseMap["record-lists-id-upload-requests-id-upload-request-patch"]>;
}

export const TalkdeskFullApiRecordListsAPIGeneratedFunctionNames = [
  "RecordListsGet",
  "RecordListsPost",
  "RecordListsIdGet",
  "RecordListsIdPatch",
  "RecordListsIdRecordsIdRecordGet",
  "RecordListsIdRecordsIdRecordDelete",
  "RecordListsIdRecordsIdRecordPatch",
  "RecordListsIdRecordsGet",
  "RecordListsIdRecordsPost",
  "RecordListsIdRecordsDelete",
  "RecordListsIdRecordsTimezonesGet",
  "RecordListsIdExternalRecordsDelete",
  "RecordListsIdRecordsBulksPost",
  "RecordListsIdRecordsBulksPatch",
  "RecordListsIdRecordsBulksDelete",
  "RecordListsIdUploadRequestsPost",
  "RecordListsIdUploadRequestsIdUploadRequestPatch"
] as const satisfies readonly (keyof TalkdeskFullApiRecordListsAPIGeneratedClient)[];

export function createTalkdeskFullApiRecordListsAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiRecordListsAPIGeneratedClient {
  return {
    RecordListsGet: (...args) => callOperation("record-lists-get", ...(args as TalkdeskFullApiOperationArgs<"record-lists-get">)),
    RecordListsPost: (...args) => callOperation("record-lists-post", ...(args as TalkdeskFullApiOperationArgs<"record-lists-post">)),
    RecordListsIdGet: (...args) => callOperation("record-lists-id-get", ...(args as TalkdeskFullApiOperationArgs<"record-lists-id-get">)),
    RecordListsIdPatch: (...args) => callOperation("record-lists-id-patch", ...(args as TalkdeskFullApiOperationArgs<"record-lists-id-patch">)),
    RecordListsIdRecordsIdRecordGet: (...args) => callOperation("record-lists-id-records-id-record-get", ...(args as TalkdeskFullApiOperationArgs<"record-lists-id-records-id-record-get">)),
    RecordListsIdRecordsIdRecordDelete: (...args) => callOperation("record-lists-id-records-id-record-delete", ...(args as TalkdeskFullApiOperationArgs<"record-lists-id-records-id-record-delete">)),
    RecordListsIdRecordsIdRecordPatch: (...args) => callOperation("record-lists-id-records-id-record-patch", ...(args as TalkdeskFullApiOperationArgs<"record-lists-id-records-id-record-patch">)),
    RecordListsIdRecordsGet: (...args) => callOperation("record-lists-id-records-get", ...(args as TalkdeskFullApiOperationArgs<"record-lists-id-records-get">)),
    RecordListsIdRecordsPost: (...args) => callOperation("record-lists-id-records-post", ...(args as TalkdeskFullApiOperationArgs<"record-lists-id-records-post">)),
    RecordListsIdRecordsDelete: (...args) => callOperation("record-lists-id-records-delete", ...(args as TalkdeskFullApiOperationArgs<"record-lists-id-records-delete">)),
    RecordListsIdRecordsTimezonesGet: (...args) => callOperation("record-lists-id-records-timezones-get", ...(args as TalkdeskFullApiOperationArgs<"record-lists-id-records-timezones-get">)),
    RecordListsIdExternalRecordsDelete: (...args) => callOperation("record-lists-id-external-records-delete", ...(args as TalkdeskFullApiOperationArgs<"record-lists-id-external-records-delete">)),
    RecordListsIdRecordsBulksPost: (...args) => callOperation("record-lists-id-records-bulks-post", ...(args as TalkdeskFullApiOperationArgs<"record-lists-id-records-bulks-post">)),
    RecordListsIdRecordsBulksPatch: (...args) => callOperation("record-lists-id-records-bulks-patch", ...(args as TalkdeskFullApiOperationArgs<"record-lists-id-records-bulks-patch">)),
    RecordListsIdRecordsBulksDelete: (...args) => callOperation("record-lists-id-records-bulks-delete", ...(args as TalkdeskFullApiOperationArgs<"record-lists-id-records-bulks-delete">)),
    RecordListsIdUploadRequestsPost: (...args) => callOperation("record-lists-id-upload-requests-post", ...(args as TalkdeskFullApiOperationArgs<"record-lists-id-upload-requests-post">)),
    RecordListsIdUploadRequestsIdUploadRequestPatch: (...args) => callOperation("record-lists-id-upload-requests-id-upload-request-patch", ...(args as TalkdeskFullApiOperationArgs<"record-lists-id-upload-requests-id-upload-request-patch">)),
  };
}
