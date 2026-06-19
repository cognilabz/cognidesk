// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiIndustriesWorkflowsOperationKeys = [
  "listIndustriesWorkflowSchedules",
  "createIndustriesWorkflowSchedule",
  "updateIndustriesWorkflowSchedule",
  "deleteIndustriesWorkflowSchedule",
  "listIndustriesWorkflows",
  "startIndustriesWorkflow",
  "getIndustriesWorkflow",
  "updateIndustriesWorkflow",
  "getIndustriesWorkflowProgress"
] as const;
export type TalkdeskFullApiIndustriesWorkflowsOperationKey = typeof TalkdeskFullApiIndustriesWorkflowsOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiIndustriesWorkflowsOperationPathParamMap {
  "listIndustriesWorkflowSchedules": {};
  "createIndustriesWorkflowSchedule": {};
  "updateIndustriesWorkflowSchedule": { "id": TalkdeskFullApiPathParamValue };
  "deleteIndustriesWorkflowSchedule": { "id": TalkdeskFullApiPathParamValue };
  "listIndustriesWorkflows": {};
  "startIndustriesWorkflow": {};
  "getIndustriesWorkflow": { "id": TalkdeskFullApiPathParamValue };
  "updateIndustriesWorkflow": { "id": TalkdeskFullApiPathParamValue };
  "getIndustriesWorkflowProgress": { "id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiIndustriesWorkflowsOperationRequestMap {
  "listIndustriesWorkflowSchedules": TalkdeskFullApiOperationInput<"listIndustriesWorkflowSchedules">;
  "createIndustriesWorkflowSchedule": TalkdeskFullApiOperationInput<"createIndustriesWorkflowSchedule">;
  "updateIndustriesWorkflowSchedule": TalkdeskFullApiOperationInput<"updateIndustriesWorkflowSchedule">;
  "deleteIndustriesWorkflowSchedule": TalkdeskFullApiOperationInput<"deleteIndustriesWorkflowSchedule">;
  "listIndustriesWorkflows": TalkdeskFullApiOperationInput<"listIndustriesWorkflows">;
  "startIndustriesWorkflow": TalkdeskFullApiOperationInput<"startIndustriesWorkflow">;
  "getIndustriesWorkflow": TalkdeskFullApiOperationInput<"getIndustriesWorkflow">;
  "updateIndustriesWorkflow": TalkdeskFullApiOperationInput<"updateIndustriesWorkflow">;
  "getIndustriesWorkflowProgress": TalkdeskFullApiOperationInput<"getIndustriesWorkflowProgress">;
}

export interface TalkdeskFullApiIndustriesWorkflowsGeneratedClient {
  ListIndustriesWorkflowSchedules(...args: TalkdeskFullApiOperationArgs<"listIndustriesWorkflowSchedules">): Promise<TalkdeskFullApiOperationResponseMap["listIndustriesWorkflowSchedules"]>;
  CreateIndustriesWorkflowSchedule(...args: TalkdeskFullApiOperationArgs<"createIndustriesWorkflowSchedule">): Promise<TalkdeskFullApiOperationResponseMap["createIndustriesWorkflowSchedule"]>;
  UpdateIndustriesWorkflowSchedule(...args: TalkdeskFullApiOperationArgs<"updateIndustriesWorkflowSchedule">): Promise<TalkdeskFullApiOperationResponseMap["updateIndustriesWorkflowSchedule"]>;
  DeleteIndustriesWorkflowSchedule(...args: TalkdeskFullApiOperationArgs<"deleteIndustriesWorkflowSchedule">): Promise<TalkdeskFullApiOperationResponseMap["deleteIndustriesWorkflowSchedule"]>;
  ListIndustriesWorkflows(...args: TalkdeskFullApiOperationArgs<"listIndustriesWorkflows">): Promise<TalkdeskFullApiOperationResponseMap["listIndustriesWorkflows"]>;
  StartIndustriesWorkflow(...args: TalkdeskFullApiOperationArgs<"startIndustriesWorkflow">): Promise<TalkdeskFullApiOperationResponseMap["startIndustriesWorkflow"]>;
  GetIndustriesWorkflow(...args: TalkdeskFullApiOperationArgs<"getIndustriesWorkflow">): Promise<TalkdeskFullApiOperationResponseMap["getIndustriesWorkflow"]>;
  UpdateIndustriesWorkflow(...args: TalkdeskFullApiOperationArgs<"updateIndustriesWorkflow">): Promise<TalkdeskFullApiOperationResponseMap["updateIndustriesWorkflow"]>;
  GetIndustriesWorkflowProgress(...args: TalkdeskFullApiOperationArgs<"getIndustriesWorkflowProgress">): Promise<TalkdeskFullApiOperationResponseMap["getIndustriesWorkflowProgress"]>;
}

export const TalkdeskFullApiIndustriesWorkflowsGeneratedFunctionNames = [
  "ListIndustriesWorkflowSchedules",
  "CreateIndustriesWorkflowSchedule",
  "UpdateIndustriesWorkflowSchedule",
  "DeleteIndustriesWorkflowSchedule",
  "ListIndustriesWorkflows",
  "StartIndustriesWorkflow",
  "GetIndustriesWorkflow",
  "UpdateIndustriesWorkflow",
  "GetIndustriesWorkflowProgress"
] as const satisfies readonly (keyof TalkdeskFullApiIndustriesWorkflowsGeneratedClient)[];

export function createTalkdeskFullApiIndustriesWorkflowsGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiIndustriesWorkflowsGeneratedClient {
  return {
    ListIndustriesWorkflowSchedules: (...args) => callOperation("listIndustriesWorkflowSchedules", ...(args as TalkdeskFullApiOperationArgs<"listIndustriesWorkflowSchedules">)),
    CreateIndustriesWorkflowSchedule: (...args) => callOperation("createIndustriesWorkflowSchedule", ...(args as TalkdeskFullApiOperationArgs<"createIndustriesWorkflowSchedule">)),
    UpdateIndustriesWorkflowSchedule: (...args) => callOperation("updateIndustriesWorkflowSchedule", ...(args as TalkdeskFullApiOperationArgs<"updateIndustriesWorkflowSchedule">)),
    DeleteIndustriesWorkflowSchedule: (...args) => callOperation("deleteIndustriesWorkflowSchedule", ...(args as TalkdeskFullApiOperationArgs<"deleteIndustriesWorkflowSchedule">)),
    ListIndustriesWorkflows: (...args) => callOperation("listIndustriesWorkflows", ...(args as TalkdeskFullApiOperationArgs<"listIndustriesWorkflows">)),
    StartIndustriesWorkflow: (...args) => callOperation("startIndustriesWorkflow", ...(args as TalkdeskFullApiOperationArgs<"startIndustriesWorkflow">)),
    GetIndustriesWorkflow: (...args) => callOperation("getIndustriesWorkflow", ...(args as TalkdeskFullApiOperationArgs<"getIndustriesWorkflow">)),
    UpdateIndustriesWorkflow: (...args) => callOperation("updateIndustriesWorkflow", ...(args as TalkdeskFullApiOperationArgs<"updateIndustriesWorkflow">)),
    GetIndustriesWorkflowProgress: (...args) => callOperation("getIndustriesWorkflowProgress", ...(args as TalkdeskFullApiOperationArgs<"getIndustriesWorkflowProgress">)),
  };
}
