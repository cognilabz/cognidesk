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
export const TalkdeskFullApiPromptsAPIOperationKeys = [
  "createPrompt",
  "ListPrompts",
  "getPromptById",
  "deletePromptById",
  "PartiallyUpdatesPrompt",
  "updatePromptById",
  "prompts-id-download-link-get",
  "GetUsageByPromptId",
  "requestUploadLink",
  "GetPromptsQuota",
  "promptsBulkOperation",
  "GetFlowsByPromptId"
] as const;
export type TalkdeskFullApiPromptsAPIOperationKey = typeof TalkdeskFullApiPromptsAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiPromptsAPIOperationPathParamMap {
  "createPrompt": {};
  "ListPrompts": {};
  "getPromptById": { "id": TalkdeskFullApiPathParamValue };
  "deletePromptById": { "id": TalkdeskFullApiPathParamValue };
  "PartiallyUpdatesPrompt": { "id": TalkdeskFullApiPathParamValue };
  "updatePromptById": { "id": TalkdeskFullApiPathParamValue };
  "prompts-id-download-link-get": { "id": TalkdeskFullApiPathParamValue };
  "GetUsageByPromptId": {};
  "requestUploadLink": {};
  "GetPromptsQuota": {};
  "promptsBulkOperation": {};
  "GetFlowsByPromptId": { "id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiPromptsAPIOperationRequestMap {
  "createPrompt": TalkdeskFullApiOperationInput<"createPrompt">;
  "ListPrompts": TalkdeskFullApiOperationInput<"ListPrompts">;
  "getPromptById": TalkdeskFullApiOperationInput<"getPromptById">;
  "deletePromptById": TalkdeskFullApiOperationInput<"deletePromptById">;
  "PartiallyUpdatesPrompt": TalkdeskFullApiOperationInput<"PartiallyUpdatesPrompt">;
  "updatePromptById": TalkdeskFullApiOperationInput<"updatePromptById">;
  "prompts-id-download-link-get": TalkdeskFullApiOperationInput<"prompts-id-download-link-get">;
  "GetUsageByPromptId": TalkdeskFullApiOperationInput<"GetUsageByPromptId">;
  "requestUploadLink": TalkdeskFullApiOperationInput<"requestUploadLink">;
  "GetPromptsQuota": TalkdeskFullApiOperationInput<"GetPromptsQuota">;
  "promptsBulkOperation": TalkdeskFullApiOperationInput<"promptsBulkOperation">;
  "GetFlowsByPromptId": TalkdeskFullApiOperationInput<"GetFlowsByPromptId">;
}

export interface TalkdeskFullApiPromptsAPIGeneratedClient {
  CreatePrompt(...args: TalkdeskFullApiOperationArgs<"createPrompt">): Promise<TalkdeskFullApiOperationResponseMap["createPrompt"]>;
  ListPrompts(...args: TalkdeskFullApiOperationArgs<"ListPrompts">): Promise<TalkdeskFullApiOperationResponseMap["ListPrompts"]>;
  GetPromptById(...args: TalkdeskFullApiOperationArgs<"getPromptById">): Promise<TalkdeskFullApiOperationResponseMap["getPromptById"]>;
  DeletePromptById(...args: TalkdeskFullApiOperationArgs<"deletePromptById">): Promise<TalkdeskFullApiOperationResponseMap["deletePromptById"]>;
  PartiallyUpdatesPrompt(...args: TalkdeskFullApiOperationArgs<"PartiallyUpdatesPrompt">): Promise<TalkdeskFullApiOperationResponseMap["PartiallyUpdatesPrompt"]>;
  UpdatePromptById(...args: TalkdeskFullApiOperationArgs<"updatePromptById">): Promise<TalkdeskFullApiOperationResponseMap["updatePromptById"]>;
  PromptsIdDownloadLinkGet(...args: TalkdeskFullApiOperationArgs<"prompts-id-download-link-get">): Promise<TalkdeskFullApiOperationResponseMap["prompts-id-download-link-get"]>;
  GetUsageByPromptId(...args: TalkdeskFullApiOperationArgs<"GetUsageByPromptId">): Promise<TalkdeskFullApiOperationResponseMap["GetUsageByPromptId"]>;
  RequestUploadLink(...args: TalkdeskFullApiOperationArgs<"requestUploadLink">): Promise<TalkdeskFullApiOperationResponseMap["requestUploadLink"]>;
  GetPromptsQuota(...args: TalkdeskFullApiOperationArgs<"GetPromptsQuota">): Promise<TalkdeskFullApiOperationResponseMap["GetPromptsQuota"]>;
  PromptsBulkOperation(...args: TalkdeskFullApiOperationArgs<"promptsBulkOperation">): Promise<TalkdeskFullApiOperationResponseMap["promptsBulkOperation"]>;
  GetFlowsByPromptId(...args: TalkdeskFullApiOperationArgs<"GetFlowsByPromptId">): Promise<TalkdeskFullApiOperationResponseMap["GetFlowsByPromptId"]>;
}

export const TalkdeskFullApiPromptsAPIGeneratedFunctionNames = [
  "CreatePrompt",
  "ListPrompts",
  "GetPromptById",
  "DeletePromptById",
  "PartiallyUpdatesPrompt",
  "UpdatePromptById",
  "PromptsIdDownloadLinkGet",
  "GetUsageByPromptId",
  "RequestUploadLink",
  "GetPromptsQuota",
  "PromptsBulkOperation",
  "GetFlowsByPromptId"
] as const satisfies readonly (keyof TalkdeskFullApiPromptsAPIGeneratedClient)[];

export function createTalkdeskFullApiPromptsAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiPromptsAPIGeneratedClient {
  return {
    CreatePrompt: (...args) => callOperation("createPrompt", ...(args as TalkdeskFullApiOperationArgs<"createPrompt">)),
    ListPrompts: (...args) => callOperation("ListPrompts", ...(args as TalkdeskFullApiOperationArgs<"ListPrompts">)),
    GetPromptById: (...args) => callOperation("getPromptById", ...(args as TalkdeskFullApiOperationArgs<"getPromptById">)),
    DeletePromptById: (...args) => callOperation("deletePromptById", ...(args as TalkdeskFullApiOperationArgs<"deletePromptById">)),
    PartiallyUpdatesPrompt: (...args) => callOperation("PartiallyUpdatesPrompt", ...(args as TalkdeskFullApiOperationArgs<"PartiallyUpdatesPrompt">)),
    UpdatePromptById: (...args) => callOperation("updatePromptById", ...(args as TalkdeskFullApiOperationArgs<"updatePromptById">)),
    PromptsIdDownloadLinkGet: (...args) => callOperation("prompts-id-download-link-get", ...(args as TalkdeskFullApiOperationArgs<"prompts-id-download-link-get">)),
    GetUsageByPromptId: (...args) => callOperation("GetUsageByPromptId", ...(args as TalkdeskFullApiOperationArgs<"GetUsageByPromptId">)),
    RequestUploadLink: (...args) => callOperation("requestUploadLink", ...(args as TalkdeskFullApiOperationArgs<"requestUploadLink">)),
    GetPromptsQuota: (...args) => callOperation("GetPromptsQuota", ...(args as TalkdeskFullApiOperationArgs<"GetPromptsQuota">)),
    PromptsBulkOperation: (...args) => callOperation("promptsBulkOperation", ...(args as TalkdeskFullApiOperationArgs<"promptsBulkOperation">)),
    GetFlowsByPromptId: (...args) => callOperation("GetFlowsByPromptId", ...(args as TalkdeskFullApiOperationArgs<"GetFlowsByPromptId">)),
  };
}
