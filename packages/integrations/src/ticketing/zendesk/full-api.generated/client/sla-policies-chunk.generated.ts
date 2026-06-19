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
export const ZendeskFullApiSLAPoliciesOperationKeys = [
  "CreateSLAPolicy",
  "DeleteSLAPolicy",
  "ListSLAPolicies",
  "ReorderSLAPolicies",
  "RetrieveSLAPolicyFilterDefinitionItems",
  "ShowSLAPolicy",
  "UpdateSLAPolicy"
] as const;
export type ZendeskFullApiSLAPoliciesOperationKey = typeof ZendeskFullApiSLAPoliciesOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiSLAPoliciesOperationPathParamMap {
  "CreateSLAPolicy": {};
  "DeleteSLAPolicy": { "sla_policy_id": ZendeskFullApiPathParamValue };
  "ListSLAPolicies": {};
  "ReorderSLAPolicies": {};
  "RetrieveSLAPolicyFilterDefinitionItems": {};
  "ShowSLAPolicy": { "sla_policy_id": ZendeskFullApiPathParamValue };
  "UpdateSLAPolicy": { "sla_policy_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiSLAPoliciesOperationRequestMap {
  "CreateSLAPolicy": ZendeskFullApiOperationInput<"CreateSLAPolicy">;
  "DeleteSLAPolicy": ZendeskFullApiOperationInput<"DeleteSLAPolicy">;
  "ListSLAPolicies": ZendeskFullApiOperationInput<"ListSLAPolicies">;
  "ReorderSLAPolicies": ZendeskFullApiOperationInput<"ReorderSLAPolicies">;
  "RetrieveSLAPolicyFilterDefinitionItems": ZendeskFullApiOperationInput<"RetrieveSLAPolicyFilterDefinitionItems">;
  "ShowSLAPolicy": ZendeskFullApiOperationInput<"ShowSLAPolicy">;
  "UpdateSLAPolicy": ZendeskFullApiOperationInput<"UpdateSLAPolicy">;
}

export interface ZendeskFullApiSLAPoliciesGeneratedClient {
  CreateSLAPolicy(...args: ZendeskFullApiOperationArgs<"CreateSLAPolicy">): Promise<ZendeskFullApiOperationResponseMap["CreateSLAPolicy"]>;
  DeleteSLAPolicy(...args: ZendeskFullApiOperationArgs<"DeleteSLAPolicy">): Promise<ZendeskFullApiOperationResponseMap["DeleteSLAPolicy"]>;
  ListSLAPolicies(...args: ZendeskFullApiOperationArgs<"ListSLAPolicies">): Promise<ZendeskFullApiOperationResponseMap["ListSLAPolicies"]>;
  ReorderSLAPolicies(...args: ZendeskFullApiOperationArgs<"ReorderSLAPolicies">): Promise<ZendeskFullApiOperationResponseMap["ReorderSLAPolicies"]>;
  RetrieveSLAPolicyFilterDefinitionItems(...args: ZendeskFullApiOperationArgs<"RetrieveSLAPolicyFilterDefinitionItems">): Promise<ZendeskFullApiOperationResponseMap["RetrieveSLAPolicyFilterDefinitionItems"]>;
  ShowSLAPolicy(...args: ZendeskFullApiOperationArgs<"ShowSLAPolicy">): Promise<ZendeskFullApiOperationResponseMap["ShowSLAPolicy"]>;
  UpdateSLAPolicy(...args: ZendeskFullApiOperationArgs<"UpdateSLAPolicy">): Promise<ZendeskFullApiOperationResponseMap["UpdateSLAPolicy"]>;
}

export const ZendeskFullApiSLAPoliciesGeneratedFunctionNames = [
  "CreateSLAPolicy",
  "DeleteSLAPolicy",
  "ListSLAPolicies",
  "ReorderSLAPolicies",
  "RetrieveSLAPolicyFilterDefinitionItems",
  "ShowSLAPolicy",
  "UpdateSLAPolicy"
] as const satisfies readonly (keyof ZendeskFullApiSLAPoliciesGeneratedClient)[];

export function createZendeskFullApiSLAPoliciesGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiSLAPoliciesGeneratedClient {
  return {
    CreateSLAPolicy: (...args) => callOperation("CreateSLAPolicy", ...(args as ZendeskFullApiOperationArgs<"CreateSLAPolicy">)),
    DeleteSLAPolicy: (...args) => callOperation("DeleteSLAPolicy", ...(args as ZendeskFullApiOperationArgs<"DeleteSLAPolicy">)),
    ListSLAPolicies: (...args) => callOperation("ListSLAPolicies", ...(args as ZendeskFullApiOperationArgs<"ListSLAPolicies">)),
    ReorderSLAPolicies: (...args) => callOperation("ReorderSLAPolicies", ...(args as ZendeskFullApiOperationArgs<"ReorderSLAPolicies">)),
    RetrieveSLAPolicyFilterDefinitionItems: (...args) => callOperation("RetrieveSLAPolicyFilterDefinitionItems", ...(args as ZendeskFullApiOperationArgs<"RetrieveSLAPolicyFilterDefinitionItems">)),
    ShowSLAPolicy: (...args) => callOperation("ShowSLAPolicy", ...(args as ZendeskFullApiOperationArgs<"ShowSLAPolicy">)),
    UpdateSLAPolicy: (...args) => callOperation("UpdateSLAPolicy", ...(args as ZendeskFullApiOperationArgs<"UpdateSLAPolicy">)),
  };
}
