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
export const ZendeskFullApiTaskListsOperationKeys = [
  "CreateTaskList",
  "ShowTaskList"
] as const;
export type ZendeskFullApiTaskListsOperationKey = typeof ZendeskFullApiTaskListsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiTaskListsOperationPathParamMap {
  "CreateTaskList": { "ticket_id": ZendeskFullApiPathParamValue };
  "ShowTaskList": { "ticket_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiTaskListsOperationRequestMap {
  "CreateTaskList": ZendeskFullApiOperationInput<"CreateTaskList">;
  "ShowTaskList": ZendeskFullApiOperationInput<"ShowTaskList">;
}

export interface ZendeskFullApiTaskListsGeneratedClient {
  CreateTaskList(...args: ZendeskFullApiOperationArgs<"CreateTaskList">): Promise<ZendeskFullApiOperationResponseMap["CreateTaskList"]>;
  ShowTaskList(...args: ZendeskFullApiOperationArgs<"ShowTaskList">): Promise<ZendeskFullApiOperationResponseMap["ShowTaskList"]>;
}

export const ZendeskFullApiTaskListsGeneratedFunctionNames = [
  "CreateTaskList",
  "ShowTaskList"
] as const satisfies readonly (keyof ZendeskFullApiTaskListsGeneratedClient)[];

export function createZendeskFullApiTaskListsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiTaskListsGeneratedClient {
  return {
    CreateTaskList: (...args) => callOperation("CreateTaskList", ...(args as ZendeskFullApiOperationArgs<"CreateTaskList">)),
    ShowTaskList: (...args) => callOperation("ShowTaskList", ...(args as ZendeskFullApiOperationArgs<"ShowTaskList">)),
  };
}
