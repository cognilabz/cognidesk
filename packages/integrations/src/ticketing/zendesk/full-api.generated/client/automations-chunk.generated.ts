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
export const ZendeskFullApiAutomationsOperationKeys = [
  "BulkDeleteAutomations",
  "CreateAutomation",
  "DeleteAutomation",
  "ListActiveAutomations",
  "ListAutomations",
  "SearchAutomations",
  "ShowAutomation",
  "UpdateAutomation",
  "UpdateManyAutomations"
] as const;
export type ZendeskFullApiAutomationsOperationKey = typeof ZendeskFullApiAutomationsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiAutomationsOperationPathParamMap {
  "BulkDeleteAutomations": {};
  "CreateAutomation": {};
  "DeleteAutomation": { "automation_id": ZendeskFullApiPathParamValue };
  "ListActiveAutomations": {};
  "ListAutomations": {};
  "SearchAutomations": {};
  "ShowAutomation": { "automation_id": ZendeskFullApiPathParamValue };
  "UpdateAutomation": { "automation_id": ZendeskFullApiPathParamValue };
  "UpdateManyAutomations": {};
}

export interface ZendeskFullApiAutomationsOperationRequestMap {
  "BulkDeleteAutomations": ZendeskFullApiOperationInput<"BulkDeleteAutomations">;
  "CreateAutomation": ZendeskFullApiOperationInput<"CreateAutomation">;
  "DeleteAutomation": ZendeskFullApiOperationInput<"DeleteAutomation">;
  "ListActiveAutomations": ZendeskFullApiOperationInput<"ListActiveAutomations">;
  "ListAutomations": ZendeskFullApiOperationInput<"ListAutomations">;
  "SearchAutomations": ZendeskFullApiOperationInput<"SearchAutomations">;
  "ShowAutomation": ZendeskFullApiOperationInput<"ShowAutomation">;
  "UpdateAutomation": ZendeskFullApiOperationInput<"UpdateAutomation">;
  "UpdateManyAutomations": ZendeskFullApiOperationInput<"UpdateManyAutomations">;
}

export interface ZendeskFullApiAutomationsGeneratedClient {
  BulkDeleteAutomations(...args: ZendeskFullApiOperationArgs<"BulkDeleteAutomations">): Promise<ZendeskFullApiOperationResponseMap["BulkDeleteAutomations"]>;
  CreateAutomation(...args: ZendeskFullApiOperationArgs<"CreateAutomation">): Promise<ZendeskFullApiOperationResponseMap["CreateAutomation"]>;
  DeleteAutomation(...args: ZendeskFullApiOperationArgs<"DeleteAutomation">): Promise<ZendeskFullApiOperationResponseMap["DeleteAutomation"]>;
  ListActiveAutomations(...args: ZendeskFullApiOperationArgs<"ListActiveAutomations">): Promise<ZendeskFullApiOperationResponseMap["ListActiveAutomations"]>;
  ListAutomations(...args: ZendeskFullApiOperationArgs<"ListAutomations">): Promise<ZendeskFullApiOperationResponseMap["ListAutomations"]>;
  SearchAutomations(...args: ZendeskFullApiOperationArgs<"SearchAutomations">): Promise<ZendeskFullApiOperationResponseMap["SearchAutomations"]>;
  ShowAutomation(...args: ZendeskFullApiOperationArgs<"ShowAutomation">): Promise<ZendeskFullApiOperationResponseMap["ShowAutomation"]>;
  UpdateAutomation(...args: ZendeskFullApiOperationArgs<"UpdateAutomation">): Promise<ZendeskFullApiOperationResponseMap["UpdateAutomation"]>;
  UpdateManyAutomations(...args: ZendeskFullApiOperationArgs<"UpdateManyAutomations">): Promise<ZendeskFullApiOperationResponseMap["UpdateManyAutomations"]>;
}

export const ZendeskFullApiAutomationsGeneratedFunctionNames = [
  "BulkDeleteAutomations",
  "CreateAutomation",
  "DeleteAutomation",
  "ListActiveAutomations",
  "ListAutomations",
  "SearchAutomations",
  "ShowAutomation",
  "UpdateAutomation",
  "UpdateManyAutomations"
] as const satisfies readonly (keyof ZendeskFullApiAutomationsGeneratedClient)[];

export function createZendeskFullApiAutomationsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiAutomationsGeneratedClient {
  return {
    BulkDeleteAutomations: (...args) => callOperation("BulkDeleteAutomations", ...(args as ZendeskFullApiOperationArgs<"BulkDeleteAutomations">)),
    CreateAutomation: (...args) => callOperation("CreateAutomation", ...(args as ZendeskFullApiOperationArgs<"CreateAutomation">)),
    DeleteAutomation: (...args) => callOperation("DeleteAutomation", ...(args as ZendeskFullApiOperationArgs<"DeleteAutomation">)),
    ListActiveAutomations: (...args) => callOperation("ListActiveAutomations", ...(args as ZendeskFullApiOperationArgs<"ListActiveAutomations">)),
    ListAutomations: (...args) => callOperation("ListAutomations", ...(args as ZendeskFullApiOperationArgs<"ListAutomations">)),
    SearchAutomations: (...args) => callOperation("SearchAutomations", ...(args as ZendeskFullApiOperationArgs<"SearchAutomations">)),
    ShowAutomation: (...args) => callOperation("ShowAutomation", ...(args as ZendeskFullApiOperationArgs<"ShowAutomation">)),
    UpdateAutomation: (...args) => callOperation("UpdateAutomation", ...(args as ZendeskFullApiOperationArgs<"UpdateAutomation">)),
    UpdateManyAutomations: (...args) => callOperation("UpdateManyAutomations", ...(args as ZendeskFullApiOperationArgs<"UpdateManyAutomations">)),
  };
}
