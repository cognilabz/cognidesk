// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiRequestsOperationKeys = [
  "CreateRequest",
  "ListCCDRequests",
  "ListComments",
  "ListOpenRequests",
  "ListOrganizationRequests",
  "ListRequests",
  "ListSolvedRequests",
  "ListUserRequests",
  "SearchRequests",
  "ShowComment",
  "ShowRequest",
  "UpdateRequest"
] as const;
export type ZendeskFullApiRequestsOperationKey = typeof ZendeskFullApiRequestsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiRequestsOperationPathParamMap {
  "CreateRequest": {};
  "ListCCDRequests": {};
  "ListComments": { "request_id": ZendeskFullApiPathParamValue };
  "ListOpenRequests": {};
  "ListOrganizationRequests": { "organization_id": ZendeskFullApiPathParamValue };
  "ListRequests": {};
  "ListSolvedRequests": {};
  "ListUserRequests": { "user_id": ZendeskFullApiPathParamValue };
  "SearchRequests": {};
  "ShowComment": { "request_id": ZendeskFullApiPathParamValue; "ticket_comment_id": ZendeskFullApiPathParamValue };
  "ShowRequest": { "request_id": ZendeskFullApiPathParamValue };
  "UpdateRequest": { "request_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiRequestsOperationRequestMap {
  "CreateRequest": ZendeskFullApiOperationInput<"CreateRequest">;
  "ListCCDRequests": ZendeskFullApiOperationInput<"ListCCDRequests">;
  "ListComments": ZendeskFullApiOperationInput<"ListComments">;
  "ListOpenRequests": ZendeskFullApiOperationInput<"ListOpenRequests">;
  "ListOrganizationRequests": ZendeskFullApiOperationInput<"ListOrganizationRequests">;
  "ListRequests": ZendeskFullApiOperationInput<"ListRequests">;
  "ListSolvedRequests": ZendeskFullApiOperationInput<"ListSolvedRequests">;
  "ListUserRequests": ZendeskFullApiOperationInput<"ListUserRequests">;
  "SearchRequests": ZendeskFullApiOperationInput<"SearchRequests">;
  "ShowComment": ZendeskFullApiOperationInput<"ShowComment">;
  "ShowRequest": ZendeskFullApiOperationInput<"ShowRequest">;
  "UpdateRequest": ZendeskFullApiOperationInput<"UpdateRequest">;
}

export interface ZendeskFullApiRequestsGeneratedClient {
  CreateRequest(...args: ZendeskFullApiOperationArgs<"CreateRequest">): Promise<ZendeskFullApiOperationResponseMap["CreateRequest"]>;
  ListCCDRequests(...args: ZendeskFullApiOperationArgs<"ListCCDRequests">): Promise<ZendeskFullApiOperationResponseMap["ListCCDRequests"]>;
  ListComments(...args: ZendeskFullApiOperationArgs<"ListComments">): Promise<ZendeskFullApiOperationResponseMap["ListComments"]>;
  ListOpenRequests(...args: ZendeskFullApiOperationArgs<"ListOpenRequests">): Promise<ZendeskFullApiOperationResponseMap["ListOpenRequests"]>;
  ListOrganizationRequests(...args: ZendeskFullApiOperationArgs<"ListOrganizationRequests">): Promise<ZendeskFullApiOperationResponseMap["ListOrganizationRequests"]>;
  ListRequests(...args: ZendeskFullApiOperationArgs<"ListRequests">): Promise<ZendeskFullApiOperationResponseMap["ListRequests"]>;
  ListSolvedRequests(...args: ZendeskFullApiOperationArgs<"ListSolvedRequests">): Promise<ZendeskFullApiOperationResponseMap["ListSolvedRequests"]>;
  ListUserRequests(...args: ZendeskFullApiOperationArgs<"ListUserRequests">): Promise<ZendeskFullApiOperationResponseMap["ListUserRequests"]>;
  SearchRequests(...args: ZendeskFullApiOperationArgs<"SearchRequests">): Promise<ZendeskFullApiOperationResponseMap["SearchRequests"]>;
  ShowComment(...args: ZendeskFullApiOperationArgs<"ShowComment">): Promise<ZendeskFullApiOperationResponseMap["ShowComment"]>;
  ShowRequest(...args: ZendeskFullApiOperationArgs<"ShowRequest">): Promise<ZendeskFullApiOperationResponseMap["ShowRequest"]>;
  UpdateRequest(...args: ZendeskFullApiOperationArgs<"UpdateRequest">): Promise<ZendeskFullApiOperationResponseMap["UpdateRequest"]>;
}

export const ZendeskFullApiRequestsGeneratedFunctionNames = [
  "CreateRequest",
  "ListCCDRequests",
  "ListComments",
  "ListOpenRequests",
  "ListOrganizationRequests",
  "ListRequests",
  "ListSolvedRequests",
  "ListUserRequests",
  "SearchRequests",
  "ShowComment",
  "ShowRequest",
  "UpdateRequest"
] as const satisfies readonly (keyof ZendeskFullApiRequestsGeneratedClient)[];

export function createZendeskFullApiRequestsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiRequestsGeneratedClient {
  return {
    CreateRequest: (...args) => callOperation("CreateRequest", ...(args as ZendeskFullApiOperationArgs<"CreateRequest">)),
    ListCCDRequests: (...args) => callOperation("ListCCDRequests", ...(args as ZendeskFullApiOperationArgs<"ListCCDRequests">)),
    ListComments: (...args) => callOperation("ListComments", ...(args as ZendeskFullApiOperationArgs<"ListComments">)),
    ListOpenRequests: (...args) => callOperation("ListOpenRequests", ...(args as ZendeskFullApiOperationArgs<"ListOpenRequests">)),
    ListOrganizationRequests: (...args) => callOperation("ListOrganizationRequests", ...(args as ZendeskFullApiOperationArgs<"ListOrganizationRequests">)),
    ListRequests: (...args) => callOperation("ListRequests", ...(args as ZendeskFullApiOperationArgs<"ListRequests">)),
    ListSolvedRequests: (...args) => callOperation("ListSolvedRequests", ...(args as ZendeskFullApiOperationArgs<"ListSolvedRequests">)),
    ListUserRequests: (...args) => callOperation("ListUserRequests", ...(args as ZendeskFullApiOperationArgs<"ListUserRequests">)),
    SearchRequests: (...args) => callOperation("SearchRequests", ...(args as ZendeskFullApiOperationArgs<"SearchRequests">)),
    ShowComment: (...args) => callOperation("ShowComment", ...(args as ZendeskFullApiOperationArgs<"ShowComment">)),
    ShowRequest: (...args) => callOperation("ShowRequest", ...(args as ZendeskFullApiOperationArgs<"ShowRequest">)),
    UpdateRequest: (...args) => callOperation("UpdateRequest", ...(args as ZendeskFullApiOperationArgs<"UpdateRequest">)),
  };
}
