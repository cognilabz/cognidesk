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
export const ZendeskFullApiGroupSLAPoliciesOperationKeys = [
  "CreateGroupSLAPolicy",
  "DeleteGroupSLAPolicy",
  "ListGroupSLAPolicies",
  "ReorderGroupSLAPolicies",
  "RetrieveGroupSLAPolicyFilterDefinitionItems",
  "ShowGroupSLAPolicy",
  "UpdateGroupSLAPolicy"
] as const;
export type ZendeskFullApiGroupSLAPoliciesOperationKey = typeof ZendeskFullApiGroupSLAPoliciesOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiGroupSLAPoliciesOperationPathParamMap {
  "CreateGroupSLAPolicy": {};
  "DeleteGroupSLAPolicy": { "group_sla_policy_id": ZendeskFullApiPathParamValue };
  "ListGroupSLAPolicies": {};
  "ReorderGroupSLAPolicies": {};
  "RetrieveGroupSLAPolicyFilterDefinitionItems": {};
  "ShowGroupSLAPolicy": { "group_sla_policy_id": ZendeskFullApiPathParamValue };
  "UpdateGroupSLAPolicy": { "group_sla_policy_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiGroupSLAPoliciesOperationRequestMap {
  "CreateGroupSLAPolicy": ZendeskFullApiOperationInput<"CreateGroupSLAPolicy">;
  "DeleteGroupSLAPolicy": ZendeskFullApiOperationInput<"DeleteGroupSLAPolicy">;
  "ListGroupSLAPolicies": ZendeskFullApiOperationInput<"ListGroupSLAPolicies">;
  "ReorderGroupSLAPolicies": ZendeskFullApiOperationInput<"ReorderGroupSLAPolicies">;
  "RetrieveGroupSLAPolicyFilterDefinitionItems": ZendeskFullApiOperationInput<"RetrieveGroupSLAPolicyFilterDefinitionItems">;
  "ShowGroupSLAPolicy": ZendeskFullApiOperationInput<"ShowGroupSLAPolicy">;
  "UpdateGroupSLAPolicy": ZendeskFullApiOperationInput<"UpdateGroupSLAPolicy">;
}

export interface ZendeskFullApiGroupSLAPoliciesGeneratedClient {
  CreateGroupSLAPolicy(...args: ZendeskFullApiOperationArgs<"CreateGroupSLAPolicy">): Promise<ZendeskFullApiOperationResponseMap["CreateGroupSLAPolicy"]>;
  DeleteGroupSLAPolicy(...args: ZendeskFullApiOperationArgs<"DeleteGroupSLAPolicy">): Promise<ZendeskFullApiOperationResponseMap["DeleteGroupSLAPolicy"]>;
  ListGroupSLAPolicies(...args: ZendeskFullApiOperationArgs<"ListGroupSLAPolicies">): Promise<ZendeskFullApiOperationResponseMap["ListGroupSLAPolicies"]>;
  ReorderGroupSLAPolicies(...args: ZendeskFullApiOperationArgs<"ReorderGroupSLAPolicies">): Promise<ZendeskFullApiOperationResponseMap["ReorderGroupSLAPolicies"]>;
  RetrieveGroupSLAPolicyFilterDefinitionItems(...args: ZendeskFullApiOperationArgs<"RetrieveGroupSLAPolicyFilterDefinitionItems">): Promise<ZendeskFullApiOperationResponseMap["RetrieveGroupSLAPolicyFilterDefinitionItems"]>;
  ShowGroupSLAPolicy(...args: ZendeskFullApiOperationArgs<"ShowGroupSLAPolicy">): Promise<ZendeskFullApiOperationResponseMap["ShowGroupSLAPolicy"]>;
  UpdateGroupSLAPolicy(...args: ZendeskFullApiOperationArgs<"UpdateGroupSLAPolicy">): Promise<ZendeskFullApiOperationResponseMap["UpdateGroupSLAPolicy"]>;
}

export const ZendeskFullApiGroupSLAPoliciesGeneratedFunctionNames = [
  "CreateGroupSLAPolicy",
  "DeleteGroupSLAPolicy",
  "ListGroupSLAPolicies",
  "ReorderGroupSLAPolicies",
  "RetrieveGroupSLAPolicyFilterDefinitionItems",
  "ShowGroupSLAPolicy",
  "UpdateGroupSLAPolicy"
] as const satisfies readonly (keyof ZendeskFullApiGroupSLAPoliciesGeneratedClient)[];

export function createZendeskFullApiGroupSLAPoliciesGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiGroupSLAPoliciesGeneratedClient {
  return {
    CreateGroupSLAPolicy: (...args) => callOperation("CreateGroupSLAPolicy", ...(args as ZendeskFullApiOperationArgs<"CreateGroupSLAPolicy">)),
    DeleteGroupSLAPolicy: (...args) => callOperation("DeleteGroupSLAPolicy", ...(args as ZendeskFullApiOperationArgs<"DeleteGroupSLAPolicy">)),
    ListGroupSLAPolicies: (...args) => callOperation("ListGroupSLAPolicies", ...(args as ZendeskFullApiOperationArgs<"ListGroupSLAPolicies">)),
    ReorderGroupSLAPolicies: (...args) => callOperation("ReorderGroupSLAPolicies", ...(args as ZendeskFullApiOperationArgs<"ReorderGroupSLAPolicies">)),
    RetrieveGroupSLAPolicyFilterDefinitionItems: (...args) => callOperation("RetrieveGroupSLAPolicyFilterDefinitionItems", ...(args as ZendeskFullApiOperationArgs<"RetrieveGroupSLAPolicyFilterDefinitionItems">)),
    ShowGroupSLAPolicy: (...args) => callOperation("ShowGroupSLAPolicy", ...(args as ZendeskFullApiOperationArgs<"ShowGroupSLAPolicy">)),
    UpdateGroupSLAPolicy: (...args) => callOperation("UpdateGroupSLAPolicy", ...(args as ZendeskFullApiOperationArgs<"UpdateGroupSLAPolicy">)),
  };
}
