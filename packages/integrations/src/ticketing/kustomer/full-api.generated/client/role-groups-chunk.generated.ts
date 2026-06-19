// Generated endpoint chunk for KustomerFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  KustomerGeneratedOperationCaller,
  KustomerFullApiOperationArgs,
  KustomerFullApiOperationInput,
  KustomerFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { KustomerFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const KustomerFullApiRoleGroupsOperationKeys = [
  "GetAuthRoles",
  "GetAllRoleGroups",
  "CreateaRoleGroup",
  "DeleteaRoleGroup",
  "GetARoleGroupByID",
  "UpdateaRoleGroup"
] as const;
export type KustomerFullApiRoleGroupsOperationKey = typeof KustomerFullApiRoleGroupsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiRoleGroupsOperationPathParamMap {
  "GetAuthRoles": {};
  "GetAllRoleGroups": {};
  "CreateaRoleGroup": {};
  "DeleteaRoleGroup": { "id": KustomerFullApiPathParamValue };
  "GetARoleGroupByID": { "id": KustomerFullApiPathParamValue };
  "UpdateaRoleGroup": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiRoleGroupsOperationRequestMap {
  "GetAuthRoles": KustomerFullApiOperationInput<"GetAuthRoles">;
  "GetAllRoleGroups": KustomerFullApiOperationInput<"GetAllRoleGroups">;
  "CreateaRoleGroup": KustomerFullApiOperationInput<"CreateaRoleGroup">;
  "DeleteaRoleGroup": KustomerFullApiOperationInput<"DeleteaRoleGroup">;
  "GetARoleGroupByID": KustomerFullApiOperationInput<"GetARoleGroupByID">;
  "UpdateaRoleGroup": KustomerFullApiOperationInput<"UpdateaRoleGroup">;
}

export interface KustomerFullApiRoleGroupsGeneratedClient {
  kustomerGetAuthRoles(...args: KustomerFullApiOperationArgs<"GetAuthRoles">): Promise<KustomerFullApiOperationResponseMap["GetAuthRoles"]>;
  kustomerGetAllRoleGroups(...args: KustomerFullApiOperationArgs<"GetAllRoleGroups">): Promise<KustomerFullApiOperationResponseMap["GetAllRoleGroups"]>;
  kustomerCreateaRoleGroup(...args: KustomerFullApiOperationArgs<"CreateaRoleGroup">): Promise<KustomerFullApiOperationResponseMap["CreateaRoleGroup"]>;
  kustomerDeleteaRoleGroup(...args: KustomerFullApiOperationArgs<"DeleteaRoleGroup">): Promise<KustomerFullApiOperationResponseMap["DeleteaRoleGroup"]>;
  kustomerGetARoleGroupByID(...args: KustomerFullApiOperationArgs<"GetARoleGroupByID">): Promise<KustomerFullApiOperationResponseMap["GetARoleGroupByID"]>;
  kustomerUpdateaRoleGroup(...args: KustomerFullApiOperationArgs<"UpdateaRoleGroup">): Promise<KustomerFullApiOperationResponseMap["UpdateaRoleGroup"]>;
}

export const KustomerFullApiRoleGroupsGeneratedFunctionNames = [
  "kustomerGetAuthRoles",
  "kustomerGetAllRoleGroups",
  "kustomerCreateaRoleGroup",
  "kustomerDeleteaRoleGroup",
  "kustomerGetARoleGroupByID",
  "kustomerUpdateaRoleGroup"
] as const satisfies readonly (keyof KustomerFullApiRoleGroupsGeneratedClient)[];

export function createKustomerFullApiRoleGroupsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiRoleGroupsGeneratedClient {
  return {
    kustomerGetAuthRoles: (...args) => callOperation("GetAuthRoles", ...(args as KustomerFullApiOperationArgs<"GetAuthRoles">)),
    kustomerGetAllRoleGroups: (...args) => callOperation("GetAllRoleGroups", ...(args as KustomerFullApiOperationArgs<"GetAllRoleGroups">)),
    kustomerCreateaRoleGroup: (...args) => callOperation("CreateaRoleGroup", ...(args as KustomerFullApiOperationArgs<"CreateaRoleGroup">)),
    kustomerDeleteaRoleGroup: (...args) => callOperation("DeleteaRoleGroup", ...(args as KustomerFullApiOperationArgs<"DeleteaRoleGroup">)),
    kustomerGetARoleGroupByID: (...args) => callOperation("GetARoleGroupByID", ...(args as KustomerFullApiOperationArgs<"GetARoleGroupByID">)),
    kustomerUpdateaRoleGroup: (...args) => callOperation("UpdateaRoleGroup", ...(args as KustomerFullApiOperationArgs<"UpdateaRoleGroup">)),
  };
}
