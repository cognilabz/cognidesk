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
export const ZendeskFullApiCustomRolesOperationKeys = [
  "CreateCustomRole",
  "DeleteCustomRoleById",
  "ListCustomRoles",
  "ShowCustomRoleById",
  "UpdateCustomRoleById"
] as const;
export type ZendeskFullApiCustomRolesOperationKey = typeof ZendeskFullApiCustomRolesOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiCustomRolesOperationPathParamMap {
  "CreateCustomRole": {};
  "DeleteCustomRoleById": { "custom_role_id": ZendeskFullApiPathParamValue };
  "ListCustomRoles": {};
  "ShowCustomRoleById": { "custom_role_id": ZendeskFullApiPathParamValue };
  "UpdateCustomRoleById": { "custom_role_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiCustomRolesOperationRequestMap {
  "CreateCustomRole": ZendeskFullApiOperationInput<"CreateCustomRole">;
  "DeleteCustomRoleById": ZendeskFullApiOperationInput<"DeleteCustomRoleById">;
  "ListCustomRoles": ZendeskFullApiOperationInput<"ListCustomRoles">;
  "ShowCustomRoleById": ZendeskFullApiOperationInput<"ShowCustomRoleById">;
  "UpdateCustomRoleById": ZendeskFullApiOperationInput<"UpdateCustomRoleById">;
}

export interface ZendeskFullApiCustomRolesGeneratedClient {
  CreateCustomRole(...args: ZendeskFullApiOperationArgs<"CreateCustomRole">): Promise<ZendeskFullApiOperationResponseMap["CreateCustomRole"]>;
  DeleteCustomRoleById(...args: ZendeskFullApiOperationArgs<"DeleteCustomRoleById">): Promise<ZendeskFullApiOperationResponseMap["DeleteCustomRoleById"]>;
  ListCustomRoles(...args: ZendeskFullApiOperationArgs<"ListCustomRoles">): Promise<ZendeskFullApiOperationResponseMap["ListCustomRoles"]>;
  ShowCustomRoleById(...args: ZendeskFullApiOperationArgs<"ShowCustomRoleById">): Promise<ZendeskFullApiOperationResponseMap["ShowCustomRoleById"]>;
  UpdateCustomRoleById(...args: ZendeskFullApiOperationArgs<"UpdateCustomRoleById">): Promise<ZendeskFullApiOperationResponseMap["UpdateCustomRoleById"]>;
}

export const ZendeskFullApiCustomRolesGeneratedFunctionNames = [
  "CreateCustomRole",
  "DeleteCustomRoleById",
  "ListCustomRoles",
  "ShowCustomRoleById",
  "UpdateCustomRoleById"
] as const satisfies readonly (keyof ZendeskFullApiCustomRolesGeneratedClient)[];

export function createZendeskFullApiCustomRolesGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiCustomRolesGeneratedClient {
  return {
    CreateCustomRole: (...args) => callOperation("CreateCustomRole", ...(args as ZendeskFullApiOperationArgs<"CreateCustomRole">)),
    DeleteCustomRoleById: (...args) => callOperation("DeleteCustomRoleById", ...(args as ZendeskFullApiOperationArgs<"DeleteCustomRoleById">)),
    ListCustomRoles: (...args) => callOperation("ListCustomRoles", ...(args as ZendeskFullApiOperationArgs<"ListCustomRoles">)),
    ShowCustomRoleById: (...args) => callOperation("ShowCustomRoleById", ...(args as ZendeskFullApiOperationArgs<"ShowCustomRoleById">)),
    UpdateCustomRoleById: (...args) => callOperation("UpdateCustomRoleById", ...(args as ZendeskFullApiOperationArgs<"UpdateCustomRoleById">)),
  };
}
