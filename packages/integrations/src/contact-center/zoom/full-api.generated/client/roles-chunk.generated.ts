// Generated endpoint chunk for ZoomContactCenterFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZoomContactCenterGeneratedOperationCaller,
  ZoomContactCenterFullApiOperationArgs,
  ZoomContactCenterFullApiOperationInput,
  ZoomContactCenterFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZoomContactCenterFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZoomContactCenterFullApiRolesOperationKeys = [
  "GET /contact_center/roles",
  "POST /contact_center/roles",
  "POST /contact_center/roles/duplicate",
  "GET /contact_center/roles/{roleId}",
  "DELETE /contact_center/roles/{roleId}",
  "PATCH /contact_center/roles/{roleId}",
  "DELETE /contact_center/roles/{roleId}/privileges",
  "GET /contact_center/roles/{roleId}/users",
  "POST /contact_center/roles/{roleId}/users",
  "DELETE /contact_center/roles/{roleId}/users/{userId}"
] as const;
export type ZoomContactCenterFullApiRolesOperationKey = typeof ZoomContactCenterFullApiRolesOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiRolesOperationPathParamMap {
  "GET /contact_center/roles": {};
  "POST /contact_center/roles": {};
  "POST /contact_center/roles/duplicate": {};
  "GET /contact_center/roles/{roleId}": { "roleId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/roles/{roleId}": { "roleId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/roles/{roleId}": { "roleId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/roles/{roleId}/privileges": { "roleId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/roles/{roleId}/users": { "roleId": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/roles/{roleId}/users": { "roleId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/roles/{roleId}/users/{userId}": { "roleId": ZoomContactCenterFullApiPathParamValue; "userId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiRolesOperationRequestMap {
  "GET /contact_center/roles": ZoomContactCenterFullApiOperationInput<"GET /contact_center/roles">;
  "POST /contact_center/roles": ZoomContactCenterFullApiOperationInput<"POST /contact_center/roles">;
  "POST /contact_center/roles/duplicate": ZoomContactCenterFullApiOperationInput<"POST /contact_center/roles/duplicate">;
  "GET /contact_center/roles/{roleId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/roles/{roleId}">;
  "DELETE /contact_center/roles/{roleId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/roles/{roleId}">;
  "PATCH /contact_center/roles/{roleId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/roles/{roleId}">;
  "DELETE /contact_center/roles/{roleId}/privileges": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/roles/{roleId}/privileges">;
  "GET /contact_center/roles/{roleId}/users": ZoomContactCenterFullApiOperationInput<"GET /contact_center/roles/{roleId}/users">;
  "POST /contact_center/roles/{roleId}/users": ZoomContactCenterFullApiOperationInput<"POST /contact_center/roles/{roleId}/users">;
  "DELETE /contact_center/roles/{roleId}/users/{userId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/roles/{roleId}/users/{userId}">;
}

export interface ZoomContactCenterFullApiRolesGeneratedClient {
  ListRoles(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/roles">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/roles"]>;
  CreateRole(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/roles">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/roles"]>;
  Duplicatearole(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/roles/duplicate">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/roles/duplicate"]>;
  GetRole(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/roles/{roleId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/roles/{roleId}"]>;
  DeleteRole(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/roles/{roleId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/roles/{roleId}"]>;
  UpdateRole(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/roles/{roleId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/roles/{roleId}"]>;
  Deleteroleprivileges(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/roles/{roleId}/privileges">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/roles/{roleId}/privileges"]>;
  GetRoleUsers(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/roles/{roleId}/users">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/roles/{roleId}/users"]>;
  AssignRoleUsers(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/roles/{roleId}/users">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/roles/{roleId}/users"]>;
  DeleteRoleUser(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/roles/{roleId}/users/{userId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/roles/{roleId}/users/{userId}"]>;
}

export const ZoomContactCenterFullApiRolesGeneratedFunctionNames = [
  "ListRoles",
  "CreateRole",
  "Duplicatearole",
  "GetRole",
  "DeleteRole",
  "UpdateRole",
  "Deleteroleprivileges",
  "GetRoleUsers",
  "AssignRoleUsers",
  "DeleteRoleUser"
] as const satisfies readonly (keyof ZoomContactCenterFullApiRolesGeneratedClient)[];

export function createZoomContactCenterFullApiRolesGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiRolesGeneratedClient {
  return {
    ListRoles: (...args) => callOperation("GET /contact_center/roles", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/roles">)),
    CreateRole: (...args) => callOperation("POST /contact_center/roles", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/roles">)),
    Duplicatearole: (...args) => callOperation("POST /contact_center/roles/duplicate", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/roles/duplicate">)),
    GetRole: (...args) => callOperation("GET /contact_center/roles/{roleId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/roles/{roleId}">)),
    DeleteRole: (...args) => callOperation("DELETE /contact_center/roles/{roleId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/roles/{roleId}">)),
    UpdateRole: (...args) => callOperation("PATCH /contact_center/roles/{roleId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/roles/{roleId}">)),
    Deleteroleprivileges: (...args) => callOperation("DELETE /contact_center/roles/{roleId}/privileges", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/roles/{roleId}/privileges">)),
    GetRoleUsers: (...args) => callOperation("GET /contact_center/roles/{roleId}/users", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/roles/{roleId}/users">)),
    AssignRoleUsers: (...args) => callOperation("POST /contact_center/roles/{roleId}/users", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/roles/{roleId}/users">)),
    DeleteRoleUser: (...args) => callOperation("DELETE /contact_center/roles/{roleId}/users/{userId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/roles/{roleId}/users/{userId}">)),
  };
}
