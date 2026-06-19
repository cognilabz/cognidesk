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
export const ZendeskFullApiCustomObjectPermissionsOperationKeys = [
  "CreateAccessRule",
  "DeleteAccessRule",
  "ListAccessRuleDefinitions",
  "ListAccessRules",
  "ListPermissionPolicies",
  "ShowAccessRule",
  "ShowPermissionPolicy",
  "UpdateAccessRule",
  "UpdatePermissionPolicy"
] as const;
export type ZendeskFullApiCustomObjectPermissionsOperationKey = typeof ZendeskFullApiCustomObjectPermissionsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiCustomObjectPermissionsOperationPathParamMap {
  "CreateAccessRule": { "custom_object_key": ZendeskFullApiPathParamValue };
  "DeleteAccessRule": { "custom_object_key": ZendeskFullApiPathParamValue; "id": ZendeskFullApiPathParamValue };
  "ListAccessRuleDefinitions": { "custom_object_key": ZendeskFullApiPathParamValue };
  "ListAccessRules": { "custom_object_key": ZendeskFullApiPathParamValue };
  "ListPermissionPolicies": { "custom_object_key": ZendeskFullApiPathParamValue };
  "ShowAccessRule": { "custom_object_key": ZendeskFullApiPathParamValue; "id": ZendeskFullApiPathParamValue };
  "ShowPermissionPolicy": { "custom_object_key": ZendeskFullApiPathParamValue; "id": ZendeskFullApiPathParamValue };
  "UpdateAccessRule": { "custom_object_key": ZendeskFullApiPathParamValue; "id": ZendeskFullApiPathParamValue };
  "UpdatePermissionPolicy": { "custom_object_key": ZendeskFullApiPathParamValue; "id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiCustomObjectPermissionsOperationRequestMap {
  "CreateAccessRule": ZendeskFullApiOperationInput<"CreateAccessRule">;
  "DeleteAccessRule": ZendeskFullApiOperationInput<"DeleteAccessRule">;
  "ListAccessRuleDefinitions": ZendeskFullApiOperationInput<"ListAccessRuleDefinitions">;
  "ListAccessRules": ZendeskFullApiOperationInput<"ListAccessRules">;
  "ListPermissionPolicies": ZendeskFullApiOperationInput<"ListPermissionPolicies">;
  "ShowAccessRule": ZendeskFullApiOperationInput<"ShowAccessRule">;
  "ShowPermissionPolicy": ZendeskFullApiOperationInput<"ShowPermissionPolicy">;
  "UpdateAccessRule": ZendeskFullApiOperationInput<"UpdateAccessRule">;
  "UpdatePermissionPolicy": ZendeskFullApiOperationInput<"UpdatePermissionPolicy">;
}

export interface ZendeskFullApiCustomObjectPermissionsGeneratedClient {
  CreateAccessRule(...args: ZendeskFullApiOperationArgs<"CreateAccessRule">): Promise<ZendeskFullApiOperationResponseMap["CreateAccessRule"]>;
  DeleteAccessRule(...args: ZendeskFullApiOperationArgs<"DeleteAccessRule">): Promise<ZendeskFullApiOperationResponseMap["DeleteAccessRule"]>;
  ListAccessRuleDefinitions(...args: ZendeskFullApiOperationArgs<"ListAccessRuleDefinitions">): Promise<ZendeskFullApiOperationResponseMap["ListAccessRuleDefinitions"]>;
  ListAccessRules(...args: ZendeskFullApiOperationArgs<"ListAccessRules">): Promise<ZendeskFullApiOperationResponseMap["ListAccessRules"]>;
  ListPermissionPolicies(...args: ZendeskFullApiOperationArgs<"ListPermissionPolicies">): Promise<ZendeskFullApiOperationResponseMap["ListPermissionPolicies"]>;
  ShowAccessRule(...args: ZendeskFullApiOperationArgs<"ShowAccessRule">): Promise<ZendeskFullApiOperationResponseMap["ShowAccessRule"]>;
  ShowPermissionPolicy(...args: ZendeskFullApiOperationArgs<"ShowPermissionPolicy">): Promise<ZendeskFullApiOperationResponseMap["ShowPermissionPolicy"]>;
  UpdateAccessRule(...args: ZendeskFullApiOperationArgs<"UpdateAccessRule">): Promise<ZendeskFullApiOperationResponseMap["UpdateAccessRule"]>;
  UpdatePermissionPolicy(...args: ZendeskFullApiOperationArgs<"UpdatePermissionPolicy">): Promise<ZendeskFullApiOperationResponseMap["UpdatePermissionPolicy"]>;
}

export const ZendeskFullApiCustomObjectPermissionsGeneratedFunctionNames = [
  "CreateAccessRule",
  "DeleteAccessRule",
  "ListAccessRuleDefinitions",
  "ListAccessRules",
  "ListPermissionPolicies",
  "ShowAccessRule",
  "ShowPermissionPolicy",
  "UpdateAccessRule",
  "UpdatePermissionPolicy"
] as const satisfies readonly (keyof ZendeskFullApiCustomObjectPermissionsGeneratedClient)[];

export function createZendeskFullApiCustomObjectPermissionsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiCustomObjectPermissionsGeneratedClient {
  return {
    CreateAccessRule: (...args) => callOperation("CreateAccessRule", ...(args as ZendeskFullApiOperationArgs<"CreateAccessRule">)),
    DeleteAccessRule: (...args) => callOperation("DeleteAccessRule", ...(args as ZendeskFullApiOperationArgs<"DeleteAccessRule">)),
    ListAccessRuleDefinitions: (...args) => callOperation("ListAccessRuleDefinitions", ...(args as ZendeskFullApiOperationArgs<"ListAccessRuleDefinitions">)),
    ListAccessRules: (...args) => callOperation("ListAccessRules", ...(args as ZendeskFullApiOperationArgs<"ListAccessRules">)),
    ListPermissionPolicies: (...args) => callOperation("ListPermissionPolicies", ...(args as ZendeskFullApiOperationArgs<"ListPermissionPolicies">)),
    ShowAccessRule: (...args) => callOperation("ShowAccessRule", ...(args as ZendeskFullApiOperationArgs<"ShowAccessRule">)),
    ShowPermissionPolicy: (...args) => callOperation("ShowPermissionPolicy", ...(args as ZendeskFullApiOperationArgs<"ShowPermissionPolicy">)),
    UpdateAccessRule: (...args) => callOperation("UpdateAccessRule", ...(args as ZendeskFullApiOperationArgs<"UpdateAccessRule">)),
    UpdatePermissionPolicy: (...args) => callOperation("UpdatePermissionPolicy", ...(args as ZendeskFullApiOperationArgs<"UpdatePermissionPolicy">)),
  };
}
