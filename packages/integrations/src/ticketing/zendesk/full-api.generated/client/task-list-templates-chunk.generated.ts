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
export const ZendeskFullApiTaskListTemplatesOperationKeys = [
  "CreateTaskListTemplate",
  "DeleteTaskListTemplate",
  "GetTasksByTaskListTemplateId",
  "ListTaskListTemplates",
  "ShowTaskListTemplate",
  "UpdateTaskListTemplate"
] as const;
export type ZendeskFullApiTaskListTemplatesOperationKey = typeof ZendeskFullApiTaskListTemplatesOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiTaskListTemplatesOperationPathParamMap {
  "CreateTaskListTemplate": {};
  "DeleteTaskListTemplate": { "task_list_template_id": ZendeskFullApiPathParamValue };
  "GetTasksByTaskListTemplateId": { "task_list_template_id": ZendeskFullApiPathParamValue };
  "ListTaskListTemplates": {};
  "ShowTaskListTemplate": { "task_list_template_id": ZendeskFullApiPathParamValue };
  "UpdateTaskListTemplate": { "task_list_template_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiTaskListTemplatesOperationRequestMap {
  "CreateTaskListTemplate": ZendeskFullApiOperationInput<"CreateTaskListTemplate">;
  "DeleteTaskListTemplate": ZendeskFullApiOperationInput<"DeleteTaskListTemplate">;
  "GetTasksByTaskListTemplateId": ZendeskFullApiOperationInput<"GetTasksByTaskListTemplateId">;
  "ListTaskListTemplates": ZendeskFullApiOperationInput<"ListTaskListTemplates">;
  "ShowTaskListTemplate": ZendeskFullApiOperationInput<"ShowTaskListTemplate">;
  "UpdateTaskListTemplate": ZendeskFullApiOperationInput<"UpdateTaskListTemplate">;
}

export interface ZendeskFullApiTaskListTemplatesGeneratedClient {
  CreateTaskListTemplate(...args: ZendeskFullApiOperationArgs<"CreateTaskListTemplate">): Promise<ZendeskFullApiOperationResponseMap["CreateTaskListTemplate"]>;
  DeleteTaskListTemplate(...args: ZendeskFullApiOperationArgs<"DeleteTaskListTemplate">): Promise<ZendeskFullApiOperationResponseMap["DeleteTaskListTemplate"]>;
  GetTasksByTaskListTemplateId(...args: ZendeskFullApiOperationArgs<"GetTasksByTaskListTemplateId">): Promise<ZendeskFullApiOperationResponseMap["GetTasksByTaskListTemplateId"]>;
  ListTaskListTemplates(...args: ZendeskFullApiOperationArgs<"ListTaskListTemplates">): Promise<ZendeskFullApiOperationResponseMap["ListTaskListTemplates"]>;
  ShowTaskListTemplate(...args: ZendeskFullApiOperationArgs<"ShowTaskListTemplate">): Promise<ZendeskFullApiOperationResponseMap["ShowTaskListTemplate"]>;
  UpdateTaskListTemplate(...args: ZendeskFullApiOperationArgs<"UpdateTaskListTemplate">): Promise<ZendeskFullApiOperationResponseMap["UpdateTaskListTemplate"]>;
}

export const ZendeskFullApiTaskListTemplatesGeneratedFunctionNames = [
  "CreateTaskListTemplate",
  "DeleteTaskListTemplate",
  "GetTasksByTaskListTemplateId",
  "ListTaskListTemplates",
  "ShowTaskListTemplate",
  "UpdateTaskListTemplate"
] as const satisfies readonly (keyof ZendeskFullApiTaskListTemplatesGeneratedClient)[];

export function createZendeskFullApiTaskListTemplatesGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiTaskListTemplatesGeneratedClient {
  return {
    CreateTaskListTemplate: (...args) => callOperation("CreateTaskListTemplate", ...(args as ZendeskFullApiOperationArgs<"CreateTaskListTemplate">)),
    DeleteTaskListTemplate: (...args) => callOperation("DeleteTaskListTemplate", ...(args as ZendeskFullApiOperationArgs<"DeleteTaskListTemplate">)),
    GetTasksByTaskListTemplateId: (...args) => callOperation("GetTasksByTaskListTemplateId", ...(args as ZendeskFullApiOperationArgs<"GetTasksByTaskListTemplateId">)),
    ListTaskListTemplates: (...args) => callOperation("ListTaskListTemplates", ...(args as ZendeskFullApiOperationArgs<"ListTaskListTemplates">)),
    ShowTaskListTemplate: (...args) => callOperation("ShowTaskListTemplate", ...(args as ZendeskFullApiOperationArgs<"ShowTaskListTemplate">)),
    UpdateTaskListTemplate: (...args) => callOperation("UpdateTaskListTemplate", ...(args as ZendeskFullApiOperationArgs<"UpdateTaskListTemplate">)),
  };
}
