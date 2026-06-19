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
export const ZendeskFullApiGroupsOperationKeys = [
  "CountGroups",
  "CountUserGroups",
  "CreateGroup",
  "DeleteGroup",
  "ListAssignableGroups",
  "ListGroups",
  "ListUserGroups",
  "ShowGroupById",
  "UpdateGroup"
] as const;
export type ZendeskFullApiGroupsOperationKey = typeof ZendeskFullApiGroupsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiGroupsOperationPathParamMap {
  "CountGroups": {};
  "CountUserGroups": { "user_id": ZendeskFullApiPathParamValue };
  "CreateGroup": {};
  "DeleteGroup": { "group_id": ZendeskFullApiPathParamValue };
  "ListAssignableGroups": {};
  "ListGroups": {};
  "ListUserGroups": { "user_id": ZendeskFullApiPathParamValue };
  "ShowGroupById": { "group_id": ZendeskFullApiPathParamValue };
  "UpdateGroup": { "group_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiGroupsOperationRequestMap {
  "CountGroups": ZendeskFullApiOperationInput<"CountGroups">;
  "CountUserGroups": ZendeskFullApiOperationInput<"CountUserGroups">;
  "CreateGroup": ZendeskFullApiOperationInput<"CreateGroup">;
  "DeleteGroup": ZendeskFullApiOperationInput<"DeleteGroup">;
  "ListAssignableGroups": ZendeskFullApiOperationInput<"ListAssignableGroups">;
  "ListGroups": ZendeskFullApiOperationInput<"ListGroups">;
  "ListUserGroups": ZendeskFullApiOperationInput<"ListUserGroups">;
  "ShowGroupById": ZendeskFullApiOperationInput<"ShowGroupById">;
  "UpdateGroup": ZendeskFullApiOperationInput<"UpdateGroup">;
}

export interface ZendeskFullApiGroupsGeneratedClient {
  CountGroups(...args: ZendeskFullApiOperationArgs<"CountGroups">): Promise<ZendeskFullApiOperationResponseMap["CountGroups"]>;
  CountUserGroups(...args: ZendeskFullApiOperationArgs<"CountUserGroups">): Promise<ZendeskFullApiOperationResponseMap["CountUserGroups"]>;
  CreateGroup(...args: ZendeskFullApiOperationArgs<"CreateGroup">): Promise<ZendeskFullApiOperationResponseMap["CreateGroup"]>;
  DeleteGroup(...args: ZendeskFullApiOperationArgs<"DeleteGroup">): Promise<ZendeskFullApiOperationResponseMap["DeleteGroup"]>;
  ListAssignableGroups(...args: ZendeskFullApiOperationArgs<"ListAssignableGroups">): Promise<ZendeskFullApiOperationResponseMap["ListAssignableGroups"]>;
  ListGroups(...args: ZendeskFullApiOperationArgs<"ListGroups">): Promise<ZendeskFullApiOperationResponseMap["ListGroups"]>;
  ListUserGroups(...args: ZendeskFullApiOperationArgs<"ListUserGroups">): Promise<ZendeskFullApiOperationResponseMap["ListUserGroups"]>;
  ShowGroupById(...args: ZendeskFullApiOperationArgs<"ShowGroupById">): Promise<ZendeskFullApiOperationResponseMap["ShowGroupById"]>;
  UpdateGroup(...args: ZendeskFullApiOperationArgs<"UpdateGroup">): Promise<ZendeskFullApiOperationResponseMap["UpdateGroup"]>;
}

export const ZendeskFullApiGroupsGeneratedFunctionNames = [
  "CountGroups",
  "CountUserGroups",
  "CreateGroup",
  "DeleteGroup",
  "ListAssignableGroups",
  "ListGroups",
  "ListUserGroups",
  "ShowGroupById",
  "UpdateGroup"
] as const satisfies readonly (keyof ZendeskFullApiGroupsGeneratedClient)[];

export function createZendeskFullApiGroupsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiGroupsGeneratedClient {
  return {
    CountGroups: (...args) => callOperation("CountGroups", ...(args as ZendeskFullApiOperationArgs<"CountGroups">)),
    CountUserGroups: (...args) => callOperation("CountUserGroups", ...(args as ZendeskFullApiOperationArgs<"CountUserGroups">)),
    CreateGroup: (...args) => callOperation("CreateGroup", ...(args as ZendeskFullApiOperationArgs<"CreateGroup">)),
    DeleteGroup: (...args) => callOperation("DeleteGroup", ...(args as ZendeskFullApiOperationArgs<"DeleteGroup">)),
    ListAssignableGroups: (...args) => callOperation("ListAssignableGroups", ...(args as ZendeskFullApiOperationArgs<"ListAssignableGroups">)),
    ListGroups: (...args) => callOperation("ListGroups", ...(args as ZendeskFullApiOperationArgs<"ListGroups">)),
    ListUserGroups: (...args) => callOperation("ListUserGroups", ...(args as ZendeskFullApiOperationArgs<"ListUserGroups">)),
    ShowGroupById: (...args) => callOperation("ShowGroupById", ...(args as ZendeskFullApiOperationArgs<"ShowGroupById">)),
    UpdateGroup: (...args) => callOperation("UpdateGroup", ...(args as ZendeskFullApiOperationArgs<"UpdateGroup">)),
  };
}
