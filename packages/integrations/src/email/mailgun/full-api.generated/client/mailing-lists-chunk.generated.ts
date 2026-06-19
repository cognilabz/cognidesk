// Generated endpoint chunk for MailgunFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  MailgunGeneratedOperationCaller,
  MailgunFullApiOperationArgs,
  MailgunFullApiOperationInput,
  MailgunFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { MailgunFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const MailgunFullApiMailingListsOperationKeys = [
  "POST /v3/lists",
  "GET /v3/lists",
  "GET /v3/lists/{list_address}/members",
  "POST /v3/lists/{list_address}/members",
  "POST /v3/lists/{list_address}/members.json",
  "POST /v3/lists/{list_address}/members.csv",
  "GET /v3/lists/{list_address}/members/{member_address}",
  "PUT /v3/lists/{list_address}/members/{member_address}",
  "DELETE /v3/lists/{list_address}/members/{member_address}",
  "PUT /v3/lists/{list_address}",
  "DELETE /v3/lists/{list_address}",
  "GET /v3/lists/{list_address}",
  "GET /v3/lists/pages",
  "GET /v3/lists/{list_address}/members/pages"
] as const;
export type MailgunFullApiMailingListsOperationKey = typeof MailgunFullApiMailingListsOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiMailingListsOperationPathParamMap {
  "POST /v3/lists": {};
  "GET /v3/lists": {};
  "GET /v3/lists/{list_address}/members": { "list_address": MailgunFullApiPathParamValue };
  "POST /v3/lists/{list_address}/members": { "list_address": MailgunFullApiPathParamValue };
  "POST /v3/lists/{list_address}/members.json": { "list_address": MailgunFullApiPathParamValue };
  "POST /v3/lists/{list_address}/members.csv": { "list_address": MailgunFullApiPathParamValue };
  "GET /v3/lists/{list_address}/members/{member_address}": { "list_address": MailgunFullApiPathParamValue; "member_address": MailgunFullApiPathParamValue };
  "PUT /v3/lists/{list_address}/members/{member_address}": { "list_address": MailgunFullApiPathParamValue; "member_address": MailgunFullApiPathParamValue };
  "DELETE /v3/lists/{list_address}/members/{member_address}": { "list_address": MailgunFullApiPathParamValue; "member_address": MailgunFullApiPathParamValue };
  "PUT /v3/lists/{list_address}": { "list_address": MailgunFullApiPathParamValue };
  "DELETE /v3/lists/{list_address}": { "list_address": MailgunFullApiPathParamValue };
  "GET /v3/lists/{list_address}": { "list_address": MailgunFullApiPathParamValue };
  "GET /v3/lists/pages": {};
  "GET /v3/lists/{list_address}/members/pages": { "list_address": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiMailingListsOperationRequestMap {
  "POST /v3/lists": MailgunFullApiOperationInput<"POST /v3/lists">;
  "GET /v3/lists": MailgunFullApiOperationInput<"GET /v3/lists">;
  "GET /v3/lists/{list_address}/members": MailgunFullApiOperationInput<"GET /v3/lists/{list_address}/members">;
  "POST /v3/lists/{list_address}/members": MailgunFullApiOperationInput<"POST /v3/lists/{list_address}/members">;
  "POST /v3/lists/{list_address}/members.json": MailgunFullApiOperationInput<"POST /v3/lists/{list_address}/members.json">;
  "POST /v3/lists/{list_address}/members.csv": MailgunFullApiOperationInput<"POST /v3/lists/{list_address}/members.csv">;
  "GET /v3/lists/{list_address}/members/{member_address}": MailgunFullApiOperationInput<"GET /v3/lists/{list_address}/members/{member_address}">;
  "PUT /v3/lists/{list_address}/members/{member_address}": MailgunFullApiOperationInput<"PUT /v3/lists/{list_address}/members/{member_address}">;
  "DELETE /v3/lists/{list_address}/members/{member_address}": MailgunFullApiOperationInput<"DELETE /v3/lists/{list_address}/members/{member_address}">;
  "PUT /v3/lists/{list_address}": MailgunFullApiOperationInput<"PUT /v3/lists/{list_address}">;
  "DELETE /v3/lists/{list_address}": MailgunFullApiOperationInput<"DELETE /v3/lists/{list_address}">;
  "GET /v3/lists/{list_address}": MailgunFullApiOperationInput<"GET /v3/lists/{list_address}">;
  "GET /v3/lists/pages": MailgunFullApiOperationInput<"GET /v3/lists/pages">;
  "GET /v3/lists/{list_address}/members/pages": MailgunFullApiOperationInput<"GET /v3/lists/{list_address}/members/pages">;
}

export interface MailgunFullApiMailingListsGeneratedClient {
  CreateAMailingList(...args: MailgunFullApiOperationArgs<"POST /v3/lists">): Promise<MailgunFullApiOperationResponseMap["POST /v3/lists"]>;
  GetMailingLists(...args: MailgunFullApiOperationArgs<"GET /v3/lists">): Promise<MailgunFullApiOperationResponseMap["GET /v3/lists"]>;
  GetMailingListsMembers(...args: MailgunFullApiOperationArgs<"GET /v3/lists/{list_address}/members">): Promise<MailgunFullApiOperationResponseMap["GET /v3/lists/{list_address}/members"]>;
  CreateAMailingListMember(...args: MailgunFullApiOperationArgs<"POST /v3/lists/{list_address}/members">): Promise<MailgunFullApiOperationResponseMap["POST /v3/lists/{list_address}/members"]>;
  BulkUploadMembersToAMailingListJSON(...args: MailgunFullApiOperationArgs<"POST /v3/lists/{list_address}/members.json">): Promise<MailgunFullApiOperationResponseMap["POST /v3/lists/{list_address}/members.json"]>;
  BulkUploadMembersToAMailingListCSV(...args: MailgunFullApiOperationArgs<"POST /v3/lists/{list_address}/members.csv">): Promise<MailgunFullApiOperationResponseMap["POST /v3/lists/{list_address}/members.csv"]>;
  GetAMember(...args: MailgunFullApiOperationArgs<"GET /v3/lists/{list_address}/members/{member_address}">): Promise<MailgunFullApiOperationResponseMap["GET /v3/lists/{list_address}/members/{member_address}"]>;
  UpdateAMailingListMember(...args: MailgunFullApiOperationArgs<"PUT /v3/lists/{list_address}/members/{member_address}">): Promise<MailgunFullApiOperationResponseMap["PUT /v3/lists/{list_address}/members/{member_address}"]>;
  DeleteAMember(...args: MailgunFullApiOperationArgs<"DELETE /v3/lists/{list_address}/members/{member_address}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/lists/{list_address}/members/{member_address}"]>;
  UpdateAMailingList(...args: MailgunFullApiOperationArgs<"PUT /v3/lists/{list_address}">): Promise<MailgunFullApiOperationResponseMap["PUT /v3/lists/{list_address}"]>;
  DeleteAMailingList(...args: MailgunFullApiOperationArgs<"DELETE /v3/lists/{list_address}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/lists/{list_address}"]>;
  GetAMailingListByAddress(...args: MailgunFullApiOperationArgs<"GET /v3/lists/{list_address}">): Promise<MailgunFullApiOperationResponseMap["GET /v3/lists/{list_address}"]>;
  GetMailingListsByPage(...args: MailgunFullApiOperationArgs<"GET /v3/lists/pages">): Promise<MailgunFullApiOperationResponseMap["GET /v3/lists/pages"]>;
  GetMembersByPage(...args: MailgunFullApiOperationArgs<"GET /v3/lists/{list_address}/members/pages">): Promise<MailgunFullApiOperationResponseMap["GET /v3/lists/{list_address}/members/pages"]>;
}

export const MailgunFullApiMailingListsGeneratedFunctionNames = [
  "CreateAMailingList",
  "GetMailingLists",
  "GetMailingListsMembers",
  "CreateAMailingListMember",
  "BulkUploadMembersToAMailingListJSON",
  "BulkUploadMembersToAMailingListCSV",
  "GetAMember",
  "UpdateAMailingListMember",
  "DeleteAMember",
  "UpdateAMailingList",
  "DeleteAMailingList",
  "GetAMailingListByAddress",
  "GetMailingListsByPage",
  "GetMembersByPage"
] as const satisfies readonly (keyof MailgunFullApiMailingListsGeneratedClient)[];

export function createMailgunFullApiMailingListsGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiMailingListsGeneratedClient {
  return {
    CreateAMailingList: (...args) => callOperation("POST /v3/lists", ...(args as MailgunFullApiOperationArgs<"POST /v3/lists">)),
    GetMailingLists: (...args) => callOperation("GET /v3/lists", ...(args as MailgunFullApiOperationArgs<"GET /v3/lists">)),
    GetMailingListsMembers: (...args) => callOperation("GET /v3/lists/{list_address}/members", ...(args as MailgunFullApiOperationArgs<"GET /v3/lists/{list_address}/members">)),
    CreateAMailingListMember: (...args) => callOperation("POST /v3/lists/{list_address}/members", ...(args as MailgunFullApiOperationArgs<"POST /v3/lists/{list_address}/members">)),
    BulkUploadMembersToAMailingListJSON: (...args) => callOperation("POST /v3/lists/{list_address}/members.json", ...(args as MailgunFullApiOperationArgs<"POST /v3/lists/{list_address}/members.json">)),
    BulkUploadMembersToAMailingListCSV: (...args) => callOperation("POST /v3/lists/{list_address}/members.csv", ...(args as MailgunFullApiOperationArgs<"POST /v3/lists/{list_address}/members.csv">)),
    GetAMember: (...args) => callOperation("GET /v3/lists/{list_address}/members/{member_address}", ...(args as MailgunFullApiOperationArgs<"GET /v3/lists/{list_address}/members/{member_address}">)),
    UpdateAMailingListMember: (...args) => callOperation("PUT /v3/lists/{list_address}/members/{member_address}", ...(args as MailgunFullApiOperationArgs<"PUT /v3/lists/{list_address}/members/{member_address}">)),
    DeleteAMember: (...args) => callOperation("DELETE /v3/lists/{list_address}/members/{member_address}", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/lists/{list_address}/members/{member_address}">)),
    UpdateAMailingList: (...args) => callOperation("PUT /v3/lists/{list_address}", ...(args as MailgunFullApiOperationArgs<"PUT /v3/lists/{list_address}">)),
    DeleteAMailingList: (...args) => callOperation("DELETE /v3/lists/{list_address}", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/lists/{list_address}">)),
    GetAMailingListByAddress: (...args) => callOperation("GET /v3/lists/{list_address}", ...(args as MailgunFullApiOperationArgs<"GET /v3/lists/{list_address}">)),
    GetMailingListsByPage: (...args) => callOperation("GET /v3/lists/pages", ...(args as MailgunFullApiOperationArgs<"GET /v3/lists/pages">)),
    GetMembersByPage: (...args) => callOperation("GET /v3/lists/{list_address}/members/pages", ...(args as MailgunFullApiOperationArgs<"GET /v3/lists/{list_address}/members/pages">)),
  };
}
