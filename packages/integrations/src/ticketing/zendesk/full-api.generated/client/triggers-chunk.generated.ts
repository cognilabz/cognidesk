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
export const ZendeskFullApiTriggersOperationKeys = [
  "CreateTrigger",
  "DeleteManyTriggers",
  "DeleteTrigger",
  "GetTrigger",
  "ListActiveTriggers",
  "ListTriggerActionConditionDefinitions",
  "ListTriggerRevisions",
  "ListTriggers",
  "ReorderTriggers",
  "SearchTriggers",
  "TriggerRevision",
  "UpdateManyTriggers",
  "UpdateTrigger"
] as const;
export type ZendeskFullApiTriggersOperationKey = typeof ZendeskFullApiTriggersOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiTriggersOperationPathParamMap {
  "CreateTrigger": {};
  "DeleteManyTriggers": {};
  "DeleteTrigger": { "trigger_id": ZendeskFullApiPathParamValue };
  "GetTrigger": { "trigger_id": ZendeskFullApiPathParamValue };
  "ListActiveTriggers": {};
  "ListTriggerActionConditionDefinitions": {};
  "ListTriggerRevisions": { "trigger_id": ZendeskFullApiPathParamValue };
  "ListTriggers": {};
  "ReorderTriggers": {};
  "SearchTriggers": {};
  "TriggerRevision": { "trigger_id": ZendeskFullApiPathParamValue; "trigger_revision_id": ZendeskFullApiPathParamValue };
  "UpdateManyTriggers": {};
  "UpdateTrigger": { "trigger_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiTriggersOperationRequestMap {
  "CreateTrigger": ZendeskFullApiOperationInput<"CreateTrigger">;
  "DeleteManyTriggers": ZendeskFullApiOperationInput<"DeleteManyTriggers">;
  "DeleteTrigger": ZendeskFullApiOperationInput<"DeleteTrigger">;
  "GetTrigger": ZendeskFullApiOperationInput<"GetTrigger">;
  "ListActiveTriggers": ZendeskFullApiOperationInput<"ListActiveTriggers">;
  "ListTriggerActionConditionDefinitions": ZendeskFullApiOperationInput<"ListTriggerActionConditionDefinitions">;
  "ListTriggerRevisions": ZendeskFullApiOperationInput<"ListTriggerRevisions">;
  "ListTriggers": ZendeskFullApiOperationInput<"ListTriggers">;
  "ReorderTriggers": ZendeskFullApiOperationInput<"ReorderTriggers">;
  "SearchTriggers": ZendeskFullApiOperationInput<"SearchTriggers">;
  "TriggerRevision": ZendeskFullApiOperationInput<"TriggerRevision">;
  "UpdateManyTriggers": ZendeskFullApiOperationInput<"UpdateManyTriggers">;
  "UpdateTrigger": ZendeskFullApiOperationInput<"UpdateTrigger">;
}

export interface ZendeskFullApiTriggersGeneratedClient {
  CreateTrigger(...args: ZendeskFullApiOperationArgs<"CreateTrigger">): Promise<ZendeskFullApiOperationResponseMap["CreateTrigger"]>;
  DeleteManyTriggers(...args: ZendeskFullApiOperationArgs<"DeleteManyTriggers">): Promise<ZendeskFullApiOperationResponseMap["DeleteManyTriggers"]>;
  DeleteTrigger(...args: ZendeskFullApiOperationArgs<"DeleteTrigger">): Promise<ZendeskFullApiOperationResponseMap["DeleteTrigger"]>;
  GetTrigger(...args: ZendeskFullApiOperationArgs<"GetTrigger">): Promise<ZendeskFullApiOperationResponseMap["GetTrigger"]>;
  ListActiveTriggers(...args: ZendeskFullApiOperationArgs<"ListActiveTriggers">): Promise<ZendeskFullApiOperationResponseMap["ListActiveTriggers"]>;
  ListTriggerActionConditionDefinitions(...args: ZendeskFullApiOperationArgs<"ListTriggerActionConditionDefinitions">): Promise<ZendeskFullApiOperationResponseMap["ListTriggerActionConditionDefinitions"]>;
  ListTriggerRevisions(...args: ZendeskFullApiOperationArgs<"ListTriggerRevisions">): Promise<ZendeskFullApiOperationResponseMap["ListTriggerRevisions"]>;
  ListTriggers(...args: ZendeskFullApiOperationArgs<"ListTriggers">): Promise<ZendeskFullApiOperationResponseMap["ListTriggers"]>;
  ReorderTriggers(...args: ZendeskFullApiOperationArgs<"ReorderTriggers">): Promise<ZendeskFullApiOperationResponseMap["ReorderTriggers"]>;
  SearchTriggers(...args: ZendeskFullApiOperationArgs<"SearchTriggers">): Promise<ZendeskFullApiOperationResponseMap["SearchTriggers"]>;
  TriggerRevision(...args: ZendeskFullApiOperationArgs<"TriggerRevision">): Promise<ZendeskFullApiOperationResponseMap["TriggerRevision"]>;
  UpdateManyTriggers(...args: ZendeskFullApiOperationArgs<"UpdateManyTriggers">): Promise<ZendeskFullApiOperationResponseMap["UpdateManyTriggers"]>;
  UpdateTrigger(...args: ZendeskFullApiOperationArgs<"UpdateTrigger">): Promise<ZendeskFullApiOperationResponseMap["UpdateTrigger"]>;
}

export const ZendeskFullApiTriggersGeneratedFunctionNames = [
  "CreateTrigger",
  "DeleteManyTriggers",
  "DeleteTrigger",
  "GetTrigger",
  "ListActiveTriggers",
  "ListTriggerActionConditionDefinitions",
  "ListTriggerRevisions",
  "ListTriggers",
  "ReorderTriggers",
  "SearchTriggers",
  "TriggerRevision",
  "UpdateManyTriggers",
  "UpdateTrigger"
] as const satisfies readonly (keyof ZendeskFullApiTriggersGeneratedClient)[];

export function createZendeskFullApiTriggersGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiTriggersGeneratedClient {
  return {
    CreateTrigger: (...args) => callOperation("CreateTrigger", ...(args as ZendeskFullApiOperationArgs<"CreateTrigger">)),
    DeleteManyTriggers: (...args) => callOperation("DeleteManyTriggers", ...(args as ZendeskFullApiOperationArgs<"DeleteManyTriggers">)),
    DeleteTrigger: (...args) => callOperation("DeleteTrigger", ...(args as ZendeskFullApiOperationArgs<"DeleteTrigger">)),
    GetTrigger: (...args) => callOperation("GetTrigger", ...(args as ZendeskFullApiOperationArgs<"GetTrigger">)),
    ListActiveTriggers: (...args) => callOperation("ListActiveTriggers", ...(args as ZendeskFullApiOperationArgs<"ListActiveTriggers">)),
    ListTriggerActionConditionDefinitions: (...args) => callOperation("ListTriggerActionConditionDefinitions", ...(args as ZendeskFullApiOperationArgs<"ListTriggerActionConditionDefinitions">)),
    ListTriggerRevisions: (...args) => callOperation("ListTriggerRevisions", ...(args as ZendeskFullApiOperationArgs<"ListTriggerRevisions">)),
    ListTriggers: (...args) => callOperation("ListTriggers", ...(args as ZendeskFullApiOperationArgs<"ListTriggers">)),
    ReorderTriggers: (...args) => callOperation("ReorderTriggers", ...(args as ZendeskFullApiOperationArgs<"ReorderTriggers">)),
    SearchTriggers: (...args) => callOperation("SearchTriggers", ...(args as ZendeskFullApiOperationArgs<"SearchTriggers">)),
    TriggerRevision: (...args) => callOperation("TriggerRevision", ...(args as ZendeskFullApiOperationArgs<"TriggerRevision">)),
    UpdateManyTriggers: (...args) => callOperation("UpdateManyTriggers", ...(args as ZendeskFullApiOperationArgs<"UpdateManyTriggers">)),
    UpdateTrigger: (...args) => callOperation("UpdateTrigger", ...(args as ZendeskFullApiOperationArgs<"UpdateTrigger">)),
  };
}
