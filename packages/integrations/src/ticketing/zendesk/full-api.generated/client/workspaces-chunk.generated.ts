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
export const ZendeskFullApiWorkspacesOperationKeys = [
  "CreateWorkspace",
  "DeleteWorkspace",
  "DestroyManyWorkspaces",
  "ListWorkspaces",
  "ReorderWorkspaces",
  "ShowWorkspace",
  "UpdateWorkspace"
] as const;
export type ZendeskFullApiWorkspacesOperationKey = typeof ZendeskFullApiWorkspacesOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiWorkspacesOperationPathParamMap {
  "CreateWorkspace": {};
  "DeleteWorkspace": { "workspace_id": ZendeskFullApiPathParamValue };
  "DestroyManyWorkspaces": {};
  "ListWorkspaces": {};
  "ReorderWorkspaces": {};
  "ShowWorkspace": { "workspace_id": ZendeskFullApiPathParamValue };
  "UpdateWorkspace": { "workspace_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiWorkspacesOperationRequestMap {
  "CreateWorkspace": ZendeskFullApiOperationInput<"CreateWorkspace">;
  "DeleteWorkspace": ZendeskFullApiOperationInput<"DeleteWorkspace">;
  "DestroyManyWorkspaces": ZendeskFullApiOperationInput<"DestroyManyWorkspaces">;
  "ListWorkspaces": ZendeskFullApiOperationInput<"ListWorkspaces">;
  "ReorderWorkspaces": ZendeskFullApiOperationInput<"ReorderWorkspaces">;
  "ShowWorkspace": ZendeskFullApiOperationInput<"ShowWorkspace">;
  "UpdateWorkspace": ZendeskFullApiOperationInput<"UpdateWorkspace">;
}

export interface ZendeskFullApiWorkspacesGeneratedClient {
  CreateWorkspace(...args: ZendeskFullApiOperationArgs<"CreateWorkspace">): Promise<ZendeskFullApiOperationResponseMap["CreateWorkspace"]>;
  DeleteWorkspace(...args: ZendeskFullApiOperationArgs<"DeleteWorkspace">): Promise<ZendeskFullApiOperationResponseMap["DeleteWorkspace"]>;
  DestroyManyWorkspaces(...args: ZendeskFullApiOperationArgs<"DestroyManyWorkspaces">): Promise<ZendeskFullApiOperationResponseMap["DestroyManyWorkspaces"]>;
  ListWorkspaces(...args: ZendeskFullApiOperationArgs<"ListWorkspaces">): Promise<ZendeskFullApiOperationResponseMap["ListWorkspaces"]>;
  ReorderWorkspaces(...args: ZendeskFullApiOperationArgs<"ReorderWorkspaces">): Promise<ZendeskFullApiOperationResponseMap["ReorderWorkspaces"]>;
  ShowWorkspace(...args: ZendeskFullApiOperationArgs<"ShowWorkspace">): Promise<ZendeskFullApiOperationResponseMap["ShowWorkspace"]>;
  UpdateWorkspace(...args: ZendeskFullApiOperationArgs<"UpdateWorkspace">): Promise<ZendeskFullApiOperationResponseMap["UpdateWorkspace"]>;
}

export const ZendeskFullApiWorkspacesGeneratedFunctionNames = [
  "CreateWorkspace",
  "DeleteWorkspace",
  "DestroyManyWorkspaces",
  "ListWorkspaces",
  "ReorderWorkspaces",
  "ShowWorkspace",
  "UpdateWorkspace"
] as const satisfies readonly (keyof ZendeskFullApiWorkspacesGeneratedClient)[];

export function createZendeskFullApiWorkspacesGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiWorkspacesGeneratedClient {
  return {
    CreateWorkspace: (...args) => callOperation("CreateWorkspace", ...(args as ZendeskFullApiOperationArgs<"CreateWorkspace">)),
    DeleteWorkspace: (...args) => callOperation("DeleteWorkspace", ...(args as ZendeskFullApiOperationArgs<"DeleteWorkspace">)),
    DestroyManyWorkspaces: (...args) => callOperation("DestroyManyWorkspaces", ...(args as ZendeskFullApiOperationArgs<"DestroyManyWorkspaces">)),
    ListWorkspaces: (...args) => callOperation("ListWorkspaces", ...(args as ZendeskFullApiOperationArgs<"ListWorkspaces">)),
    ReorderWorkspaces: (...args) => callOperation("ReorderWorkspaces", ...(args as ZendeskFullApiOperationArgs<"ReorderWorkspaces">)),
    ShowWorkspace: (...args) => callOperation("ShowWorkspace", ...(args as ZendeskFullApiOperationArgs<"ShowWorkspace">)),
    UpdateWorkspace: (...args) => callOperation("UpdateWorkspace", ...(args as ZendeskFullApiOperationArgs<"UpdateWorkspace">)),
  };
}
