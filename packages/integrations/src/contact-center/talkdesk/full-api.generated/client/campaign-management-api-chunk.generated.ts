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
export const TalkdeskFullApiCampaignManagementAPIOperationKeys = [
  "do-not-call-lists-id-entries-id-entry-get",
  "do-not-call-lists-id-entries-id-entry-patch",
  "do-not-call-lists-id-entries-id-entry-delete",
  "do-not-call-lists-id-entries-get",
  "do-not-call-lists-id-entries-post",
  "do-not-call-lists-id-entries-patch",
  "do-not-call-lists-id-entries-delete",
  "do-not-call-lists-post",
  "do-not-call-lists-get",
  "do-not-call-lists-id-get",
  "campaigns-post",
  "campaigns-get",
  "campaigns-id-get",
  "campaigns-id-delete",
  "campaigns-id-patch",
  "campaigns-id-do-not-call-lists-get",
  "campaigns-id-do-not-call-lists-post",
  "campaigns-id-do-not-call-lists-delete",
  "campaigns-id-record-lists-get",
  "campaigns-id-record-lists-post",
  "campaigns-id-record-lists-delete",
  "campaigns-id-users-get",
  "campaigns-id-users-post",
  "campaigns-id-users-delete",
  "campaigns-id-numbers-get",
  "campaigns-id-numbers-post",
  "campaigns-id-numbers-delete",
  "do-not-call-lists-id-entries-queries-post"
] as const;
export type TalkdeskFullApiCampaignManagementAPIOperationKey = typeof TalkdeskFullApiCampaignManagementAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiCampaignManagementAPIOperationPathParamMap {
  "do-not-call-lists-id-entries-id-entry-get": { "id": TalkdeskFullApiPathParamValue; "id_entry": TalkdeskFullApiPathParamValue };
  "do-not-call-lists-id-entries-id-entry-patch": { "id": TalkdeskFullApiPathParamValue; "id_entry": TalkdeskFullApiPathParamValue };
  "do-not-call-lists-id-entries-id-entry-delete": { "id": TalkdeskFullApiPathParamValue; "id_entry": TalkdeskFullApiPathParamValue };
  "do-not-call-lists-id-entries-get": { "id": TalkdeskFullApiPathParamValue };
  "do-not-call-lists-id-entries-post": { "id": TalkdeskFullApiPathParamValue };
  "do-not-call-lists-id-entries-patch": { "id": TalkdeskFullApiPathParamValue };
  "do-not-call-lists-id-entries-delete": { "id": TalkdeskFullApiPathParamValue };
  "do-not-call-lists-post": {};
  "do-not-call-lists-get": {};
  "do-not-call-lists-id-get": { "id": TalkdeskFullApiPathParamValue };
  "campaigns-post": {};
  "campaigns-get": {};
  "campaigns-id-get": { "id": TalkdeskFullApiPathParamValue };
  "campaigns-id-delete": { "id": TalkdeskFullApiPathParamValue };
  "campaigns-id-patch": { "id": TalkdeskFullApiPathParamValue };
  "campaigns-id-do-not-call-lists-get": { "id": TalkdeskFullApiPathParamValue };
  "campaigns-id-do-not-call-lists-post": { "id": TalkdeskFullApiPathParamValue };
  "campaigns-id-do-not-call-lists-delete": { "id": TalkdeskFullApiPathParamValue };
  "campaigns-id-record-lists-get": { "id": TalkdeskFullApiPathParamValue };
  "campaigns-id-record-lists-post": { "id": TalkdeskFullApiPathParamValue };
  "campaigns-id-record-lists-delete": { "id": TalkdeskFullApiPathParamValue };
  "campaigns-id-users-get": { "id": TalkdeskFullApiPathParamValue };
  "campaigns-id-users-post": { "id": TalkdeskFullApiPathParamValue };
  "campaigns-id-users-delete": { "id": TalkdeskFullApiPathParamValue };
  "campaigns-id-numbers-get": { "id": TalkdeskFullApiPathParamValue };
  "campaigns-id-numbers-post": { "id": TalkdeskFullApiPathParamValue };
  "campaigns-id-numbers-delete": { "id": TalkdeskFullApiPathParamValue };
  "do-not-call-lists-id-entries-queries-post": { "id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiCampaignManagementAPIOperationRequestMap {
  "do-not-call-lists-id-entries-id-entry-get": TalkdeskFullApiOperationInput<"do-not-call-lists-id-entries-id-entry-get">;
  "do-not-call-lists-id-entries-id-entry-patch": TalkdeskFullApiOperationInput<"do-not-call-lists-id-entries-id-entry-patch">;
  "do-not-call-lists-id-entries-id-entry-delete": TalkdeskFullApiOperationInput<"do-not-call-lists-id-entries-id-entry-delete">;
  "do-not-call-lists-id-entries-get": TalkdeskFullApiOperationInput<"do-not-call-lists-id-entries-get">;
  "do-not-call-lists-id-entries-post": TalkdeskFullApiOperationInput<"do-not-call-lists-id-entries-post">;
  "do-not-call-lists-id-entries-patch": TalkdeskFullApiOperationInput<"do-not-call-lists-id-entries-patch">;
  "do-not-call-lists-id-entries-delete": TalkdeskFullApiOperationInput<"do-not-call-lists-id-entries-delete">;
  "do-not-call-lists-post": TalkdeskFullApiOperationInput<"do-not-call-lists-post">;
  "do-not-call-lists-get": TalkdeskFullApiOperationInput<"do-not-call-lists-get">;
  "do-not-call-lists-id-get": TalkdeskFullApiOperationInput<"do-not-call-lists-id-get">;
  "campaigns-post": TalkdeskFullApiOperationInput<"campaigns-post">;
  "campaigns-get": TalkdeskFullApiOperationInput<"campaigns-get">;
  "campaigns-id-get": TalkdeskFullApiOperationInput<"campaigns-id-get">;
  "campaigns-id-delete": TalkdeskFullApiOperationInput<"campaigns-id-delete">;
  "campaigns-id-patch": TalkdeskFullApiOperationInput<"campaigns-id-patch">;
  "campaigns-id-do-not-call-lists-get": TalkdeskFullApiOperationInput<"campaigns-id-do-not-call-lists-get">;
  "campaigns-id-do-not-call-lists-post": TalkdeskFullApiOperationInput<"campaigns-id-do-not-call-lists-post">;
  "campaigns-id-do-not-call-lists-delete": TalkdeskFullApiOperationInput<"campaigns-id-do-not-call-lists-delete">;
  "campaigns-id-record-lists-get": TalkdeskFullApiOperationInput<"campaigns-id-record-lists-get">;
  "campaigns-id-record-lists-post": TalkdeskFullApiOperationInput<"campaigns-id-record-lists-post">;
  "campaigns-id-record-lists-delete": TalkdeskFullApiOperationInput<"campaigns-id-record-lists-delete">;
  "campaigns-id-users-get": TalkdeskFullApiOperationInput<"campaigns-id-users-get">;
  "campaigns-id-users-post": TalkdeskFullApiOperationInput<"campaigns-id-users-post">;
  "campaigns-id-users-delete": TalkdeskFullApiOperationInput<"campaigns-id-users-delete">;
  "campaigns-id-numbers-get": TalkdeskFullApiOperationInput<"campaigns-id-numbers-get">;
  "campaigns-id-numbers-post": TalkdeskFullApiOperationInput<"campaigns-id-numbers-post">;
  "campaigns-id-numbers-delete": TalkdeskFullApiOperationInput<"campaigns-id-numbers-delete">;
  "do-not-call-lists-id-entries-queries-post": TalkdeskFullApiOperationInput<"do-not-call-lists-id-entries-queries-post">;
}

export interface TalkdeskFullApiCampaignManagementAPIGeneratedClient {
  DoNotCallListsIdEntriesIdEntryGet(...args: TalkdeskFullApiOperationArgs<"do-not-call-lists-id-entries-id-entry-get">): Promise<TalkdeskFullApiOperationResponseMap["do-not-call-lists-id-entries-id-entry-get"]>;
  DoNotCallListsIdEntriesIdEntryPatch(...args: TalkdeskFullApiOperationArgs<"do-not-call-lists-id-entries-id-entry-patch">): Promise<TalkdeskFullApiOperationResponseMap["do-not-call-lists-id-entries-id-entry-patch"]>;
  DoNotCallListsIdEntriesIdEntryDelete(...args: TalkdeskFullApiOperationArgs<"do-not-call-lists-id-entries-id-entry-delete">): Promise<TalkdeskFullApiOperationResponseMap["do-not-call-lists-id-entries-id-entry-delete"]>;
  DoNotCallListsIdEntriesGet(...args: TalkdeskFullApiOperationArgs<"do-not-call-lists-id-entries-get">): Promise<TalkdeskFullApiOperationResponseMap["do-not-call-lists-id-entries-get"]>;
  DoNotCallListsIdEntriesPost(...args: TalkdeskFullApiOperationArgs<"do-not-call-lists-id-entries-post">): Promise<TalkdeskFullApiOperationResponseMap["do-not-call-lists-id-entries-post"]>;
  DoNotCallListsIdEntriesPatch(...args: TalkdeskFullApiOperationArgs<"do-not-call-lists-id-entries-patch">): Promise<TalkdeskFullApiOperationResponseMap["do-not-call-lists-id-entries-patch"]>;
  DoNotCallListsIdEntriesDelete(...args: TalkdeskFullApiOperationArgs<"do-not-call-lists-id-entries-delete">): Promise<TalkdeskFullApiOperationResponseMap["do-not-call-lists-id-entries-delete"]>;
  DoNotCallListsPost(...args: TalkdeskFullApiOperationArgs<"do-not-call-lists-post">): Promise<TalkdeskFullApiOperationResponseMap["do-not-call-lists-post"]>;
  DoNotCallListsGet(...args: TalkdeskFullApiOperationArgs<"do-not-call-lists-get">): Promise<TalkdeskFullApiOperationResponseMap["do-not-call-lists-get"]>;
  DoNotCallListsIdGet(...args: TalkdeskFullApiOperationArgs<"do-not-call-lists-id-get">): Promise<TalkdeskFullApiOperationResponseMap["do-not-call-lists-id-get"]>;
  CampaignsPost(...args: TalkdeskFullApiOperationArgs<"campaigns-post">): Promise<TalkdeskFullApiOperationResponseMap["campaigns-post"]>;
  CampaignsGet(...args: TalkdeskFullApiOperationArgs<"campaigns-get">): Promise<TalkdeskFullApiOperationResponseMap["campaigns-get"]>;
  CampaignsIdGet(...args: TalkdeskFullApiOperationArgs<"campaigns-id-get">): Promise<TalkdeskFullApiOperationResponseMap["campaigns-id-get"]>;
  CampaignsIdDelete(...args: TalkdeskFullApiOperationArgs<"campaigns-id-delete">): Promise<TalkdeskFullApiOperationResponseMap["campaigns-id-delete"]>;
  CampaignsIdPatch(...args: TalkdeskFullApiOperationArgs<"campaigns-id-patch">): Promise<TalkdeskFullApiOperationResponseMap["campaigns-id-patch"]>;
  CampaignsIdDoNotCallListsGet(...args: TalkdeskFullApiOperationArgs<"campaigns-id-do-not-call-lists-get">): Promise<TalkdeskFullApiOperationResponseMap["campaigns-id-do-not-call-lists-get"]>;
  CampaignsIdDoNotCallListsPost(...args: TalkdeskFullApiOperationArgs<"campaigns-id-do-not-call-lists-post">): Promise<TalkdeskFullApiOperationResponseMap["campaigns-id-do-not-call-lists-post"]>;
  CampaignsIdDoNotCallListsDelete(...args: TalkdeskFullApiOperationArgs<"campaigns-id-do-not-call-lists-delete">): Promise<TalkdeskFullApiOperationResponseMap["campaigns-id-do-not-call-lists-delete"]>;
  CampaignsIdRecordListsGet(...args: TalkdeskFullApiOperationArgs<"campaigns-id-record-lists-get">): Promise<TalkdeskFullApiOperationResponseMap["campaigns-id-record-lists-get"]>;
  CampaignsIdRecordListsPost(...args: TalkdeskFullApiOperationArgs<"campaigns-id-record-lists-post">): Promise<TalkdeskFullApiOperationResponseMap["campaigns-id-record-lists-post"]>;
  CampaignsIdRecordListsDelete(...args: TalkdeskFullApiOperationArgs<"campaigns-id-record-lists-delete">): Promise<TalkdeskFullApiOperationResponseMap["campaigns-id-record-lists-delete"]>;
  CampaignsIdUsersGet(...args: TalkdeskFullApiOperationArgs<"campaigns-id-users-get">): Promise<TalkdeskFullApiOperationResponseMap["campaigns-id-users-get"]>;
  CampaignsIdUsersPost(...args: TalkdeskFullApiOperationArgs<"campaigns-id-users-post">): Promise<TalkdeskFullApiOperationResponseMap["campaigns-id-users-post"]>;
  CampaignsIdUsersDelete(...args: TalkdeskFullApiOperationArgs<"campaigns-id-users-delete">): Promise<TalkdeskFullApiOperationResponseMap["campaigns-id-users-delete"]>;
  CampaignsIdNumbersGet(...args: TalkdeskFullApiOperationArgs<"campaigns-id-numbers-get">): Promise<TalkdeskFullApiOperationResponseMap["campaigns-id-numbers-get"]>;
  CampaignsIdNumbersPost(...args: TalkdeskFullApiOperationArgs<"campaigns-id-numbers-post">): Promise<TalkdeskFullApiOperationResponseMap["campaigns-id-numbers-post"]>;
  CampaignsIdNumbersDelete(...args: TalkdeskFullApiOperationArgs<"campaigns-id-numbers-delete">): Promise<TalkdeskFullApiOperationResponseMap["campaigns-id-numbers-delete"]>;
  DoNotCallListsIdEntriesQueriesPost(...args: TalkdeskFullApiOperationArgs<"do-not-call-lists-id-entries-queries-post">): Promise<TalkdeskFullApiOperationResponseMap["do-not-call-lists-id-entries-queries-post"]>;
}

export const TalkdeskFullApiCampaignManagementAPIGeneratedFunctionNames = [
  "DoNotCallListsIdEntriesIdEntryGet",
  "DoNotCallListsIdEntriesIdEntryPatch",
  "DoNotCallListsIdEntriesIdEntryDelete",
  "DoNotCallListsIdEntriesGet",
  "DoNotCallListsIdEntriesPost",
  "DoNotCallListsIdEntriesPatch",
  "DoNotCallListsIdEntriesDelete",
  "DoNotCallListsPost",
  "DoNotCallListsGet",
  "DoNotCallListsIdGet",
  "CampaignsPost",
  "CampaignsGet",
  "CampaignsIdGet",
  "CampaignsIdDelete",
  "CampaignsIdPatch",
  "CampaignsIdDoNotCallListsGet",
  "CampaignsIdDoNotCallListsPost",
  "CampaignsIdDoNotCallListsDelete",
  "CampaignsIdRecordListsGet",
  "CampaignsIdRecordListsPost",
  "CampaignsIdRecordListsDelete",
  "CampaignsIdUsersGet",
  "CampaignsIdUsersPost",
  "CampaignsIdUsersDelete",
  "CampaignsIdNumbersGet",
  "CampaignsIdNumbersPost",
  "CampaignsIdNumbersDelete",
  "DoNotCallListsIdEntriesQueriesPost"
] as const satisfies readonly (keyof TalkdeskFullApiCampaignManagementAPIGeneratedClient)[];

export function createTalkdeskFullApiCampaignManagementAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiCampaignManagementAPIGeneratedClient {
  return {
    DoNotCallListsIdEntriesIdEntryGet: (...args) => callOperation("do-not-call-lists-id-entries-id-entry-get", ...(args as TalkdeskFullApiOperationArgs<"do-not-call-lists-id-entries-id-entry-get">)),
    DoNotCallListsIdEntriesIdEntryPatch: (...args) => callOperation("do-not-call-lists-id-entries-id-entry-patch", ...(args as TalkdeskFullApiOperationArgs<"do-not-call-lists-id-entries-id-entry-patch">)),
    DoNotCallListsIdEntriesIdEntryDelete: (...args) => callOperation("do-not-call-lists-id-entries-id-entry-delete", ...(args as TalkdeskFullApiOperationArgs<"do-not-call-lists-id-entries-id-entry-delete">)),
    DoNotCallListsIdEntriesGet: (...args) => callOperation("do-not-call-lists-id-entries-get", ...(args as TalkdeskFullApiOperationArgs<"do-not-call-lists-id-entries-get">)),
    DoNotCallListsIdEntriesPost: (...args) => callOperation("do-not-call-lists-id-entries-post", ...(args as TalkdeskFullApiOperationArgs<"do-not-call-lists-id-entries-post">)),
    DoNotCallListsIdEntriesPatch: (...args) => callOperation("do-not-call-lists-id-entries-patch", ...(args as TalkdeskFullApiOperationArgs<"do-not-call-lists-id-entries-patch">)),
    DoNotCallListsIdEntriesDelete: (...args) => callOperation("do-not-call-lists-id-entries-delete", ...(args as TalkdeskFullApiOperationArgs<"do-not-call-lists-id-entries-delete">)),
    DoNotCallListsPost: (...args) => callOperation("do-not-call-lists-post", ...(args as TalkdeskFullApiOperationArgs<"do-not-call-lists-post">)),
    DoNotCallListsGet: (...args) => callOperation("do-not-call-lists-get", ...(args as TalkdeskFullApiOperationArgs<"do-not-call-lists-get">)),
    DoNotCallListsIdGet: (...args) => callOperation("do-not-call-lists-id-get", ...(args as TalkdeskFullApiOperationArgs<"do-not-call-lists-id-get">)),
    CampaignsPost: (...args) => callOperation("campaigns-post", ...(args as TalkdeskFullApiOperationArgs<"campaigns-post">)),
    CampaignsGet: (...args) => callOperation("campaigns-get", ...(args as TalkdeskFullApiOperationArgs<"campaigns-get">)),
    CampaignsIdGet: (...args) => callOperation("campaigns-id-get", ...(args as TalkdeskFullApiOperationArgs<"campaigns-id-get">)),
    CampaignsIdDelete: (...args) => callOperation("campaigns-id-delete", ...(args as TalkdeskFullApiOperationArgs<"campaigns-id-delete">)),
    CampaignsIdPatch: (...args) => callOperation("campaigns-id-patch", ...(args as TalkdeskFullApiOperationArgs<"campaigns-id-patch">)),
    CampaignsIdDoNotCallListsGet: (...args) => callOperation("campaigns-id-do-not-call-lists-get", ...(args as TalkdeskFullApiOperationArgs<"campaigns-id-do-not-call-lists-get">)),
    CampaignsIdDoNotCallListsPost: (...args) => callOperation("campaigns-id-do-not-call-lists-post", ...(args as TalkdeskFullApiOperationArgs<"campaigns-id-do-not-call-lists-post">)),
    CampaignsIdDoNotCallListsDelete: (...args) => callOperation("campaigns-id-do-not-call-lists-delete", ...(args as TalkdeskFullApiOperationArgs<"campaigns-id-do-not-call-lists-delete">)),
    CampaignsIdRecordListsGet: (...args) => callOperation("campaigns-id-record-lists-get", ...(args as TalkdeskFullApiOperationArgs<"campaigns-id-record-lists-get">)),
    CampaignsIdRecordListsPost: (...args) => callOperation("campaigns-id-record-lists-post", ...(args as TalkdeskFullApiOperationArgs<"campaigns-id-record-lists-post">)),
    CampaignsIdRecordListsDelete: (...args) => callOperation("campaigns-id-record-lists-delete", ...(args as TalkdeskFullApiOperationArgs<"campaigns-id-record-lists-delete">)),
    CampaignsIdUsersGet: (...args) => callOperation("campaigns-id-users-get", ...(args as TalkdeskFullApiOperationArgs<"campaigns-id-users-get">)),
    CampaignsIdUsersPost: (...args) => callOperation("campaigns-id-users-post", ...(args as TalkdeskFullApiOperationArgs<"campaigns-id-users-post">)),
    CampaignsIdUsersDelete: (...args) => callOperation("campaigns-id-users-delete", ...(args as TalkdeskFullApiOperationArgs<"campaigns-id-users-delete">)),
    CampaignsIdNumbersGet: (...args) => callOperation("campaigns-id-numbers-get", ...(args as TalkdeskFullApiOperationArgs<"campaigns-id-numbers-get">)),
    CampaignsIdNumbersPost: (...args) => callOperation("campaigns-id-numbers-post", ...(args as TalkdeskFullApiOperationArgs<"campaigns-id-numbers-post">)),
    CampaignsIdNumbersDelete: (...args) => callOperation("campaigns-id-numbers-delete", ...(args as TalkdeskFullApiOperationArgs<"campaigns-id-numbers-delete">)),
    DoNotCallListsIdEntriesQueriesPost: (...args) => callOperation("do-not-call-lists-id-entries-queries-post", ...(args as TalkdeskFullApiOperationArgs<"do-not-call-lists-id-entries-queries-post">)),
  };
}
