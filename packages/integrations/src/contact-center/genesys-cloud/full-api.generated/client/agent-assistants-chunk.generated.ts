// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiAgentAssistantsOperationKeys = [
  "deleteAssistant",
  "deleteAssistantQueue",
  "deleteAssistantQueues",
  "deleteAssistantsAgentchecklist",
  "getAssistant",
  "getAssistantQueue",
  "getAssistantQueues",
  "getAssistantQueueUsersJob",
  "getAssistants",
  "getAssistantsAgentchecklist",
  "getAssistantsAgentchecklists",
  "getAssistantsAgentchecklistsLanguages",
  "getAssistantsQueues",
  "patchAssistant",
  "patchAssistantQueues",
  "postAssistantQueueUsersBulkAdd",
  "postAssistantQueueUsersBulkRemove",
  "postAssistantQueueUsersJobs",
  "postAssistantQueueUsersQuery",
  "postAssistants",
  "postAssistantsAgentchecklists",
  "putAssistantQueue",
  "putAssistantsAgentchecklist"
] as const;
export type GenesysCloudFullApiAgentAssistantsOperationKey = typeof GenesysCloudFullApiAgentAssistantsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiAgentAssistantsOperationPathParamMap {
  "deleteAssistant": { "assistantId": GenesysCloudFullApiPathParamValue };
  "deleteAssistantQueue": { "assistantId": GenesysCloudFullApiPathParamValue; "queueId": GenesysCloudFullApiPathParamValue };
  "deleteAssistantQueues": { "assistantId": GenesysCloudFullApiPathParamValue };
  "deleteAssistantsAgentchecklist": { "agentChecklistId": GenesysCloudFullApiPathParamValue };
  "getAssistant": { "assistantId": GenesysCloudFullApiPathParamValue };
  "getAssistantQueue": { "assistantId": GenesysCloudFullApiPathParamValue; "queueId": GenesysCloudFullApiPathParamValue };
  "getAssistantQueues": { "assistantId": GenesysCloudFullApiPathParamValue };
  "getAssistantQueueUsersJob": { "assistantId": GenesysCloudFullApiPathParamValue; "queueId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getAssistants": {};
  "getAssistantsAgentchecklist": { "agentChecklistId": GenesysCloudFullApiPathParamValue };
  "getAssistantsAgentchecklists": {};
  "getAssistantsAgentchecklistsLanguages": {};
  "getAssistantsQueues": {};
  "patchAssistant": { "assistantId": GenesysCloudFullApiPathParamValue };
  "patchAssistantQueues": { "assistantId": GenesysCloudFullApiPathParamValue };
  "postAssistantQueueUsersBulkAdd": { "assistantId": GenesysCloudFullApiPathParamValue; "queueId": GenesysCloudFullApiPathParamValue };
  "postAssistantQueueUsersBulkRemove": { "assistantId": GenesysCloudFullApiPathParamValue; "queueId": GenesysCloudFullApiPathParamValue };
  "postAssistantQueueUsersJobs": { "assistantId": GenesysCloudFullApiPathParamValue; "queueId": GenesysCloudFullApiPathParamValue };
  "postAssistantQueueUsersQuery": { "assistantId": GenesysCloudFullApiPathParamValue; "queueId": GenesysCloudFullApiPathParamValue };
  "postAssistants": {};
  "postAssistantsAgentchecklists": {};
  "putAssistantQueue": { "assistantId": GenesysCloudFullApiPathParamValue; "queueId": GenesysCloudFullApiPathParamValue };
  "putAssistantsAgentchecklist": { "agentChecklistId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiAgentAssistantsOperationRequestMap {
  "deleteAssistant": GenesysCloudFullApiOperationInput<"deleteAssistant">;
  "deleteAssistantQueue": GenesysCloudFullApiOperationInput<"deleteAssistantQueue">;
  "deleteAssistantQueues": GenesysCloudFullApiOperationInput<"deleteAssistantQueues">;
  "deleteAssistantsAgentchecklist": GenesysCloudFullApiOperationInput<"deleteAssistantsAgentchecklist">;
  "getAssistant": GenesysCloudFullApiOperationInput<"getAssistant">;
  "getAssistantQueue": GenesysCloudFullApiOperationInput<"getAssistantQueue">;
  "getAssistantQueues": GenesysCloudFullApiOperationInput<"getAssistantQueues">;
  "getAssistantQueueUsersJob": GenesysCloudFullApiOperationInput<"getAssistantQueueUsersJob">;
  "getAssistants": GenesysCloudFullApiOperationInput<"getAssistants">;
  "getAssistantsAgentchecklist": GenesysCloudFullApiOperationInput<"getAssistantsAgentchecklist">;
  "getAssistantsAgentchecklists": GenesysCloudFullApiOperationInput<"getAssistantsAgentchecklists">;
  "getAssistantsAgentchecklistsLanguages": GenesysCloudFullApiOperationInput<"getAssistantsAgentchecklistsLanguages">;
  "getAssistantsQueues": GenesysCloudFullApiOperationInput<"getAssistantsQueues">;
  "patchAssistant": GenesysCloudFullApiOperationInput<"patchAssistant">;
  "patchAssistantQueues": GenesysCloudFullApiOperationInput<"patchAssistantQueues">;
  "postAssistantQueueUsersBulkAdd": GenesysCloudFullApiOperationInput<"postAssistantQueueUsersBulkAdd">;
  "postAssistantQueueUsersBulkRemove": GenesysCloudFullApiOperationInput<"postAssistantQueueUsersBulkRemove">;
  "postAssistantQueueUsersJobs": GenesysCloudFullApiOperationInput<"postAssistantQueueUsersJobs">;
  "postAssistantQueueUsersQuery": GenesysCloudFullApiOperationInput<"postAssistantQueueUsersQuery">;
  "postAssistants": GenesysCloudFullApiOperationInput<"postAssistants">;
  "postAssistantsAgentchecklists": GenesysCloudFullApiOperationInput<"postAssistantsAgentchecklists">;
  "putAssistantQueue": GenesysCloudFullApiOperationInput<"putAssistantQueue">;
  "putAssistantsAgentchecklist": GenesysCloudFullApiOperationInput<"putAssistantsAgentchecklist">;
}

export interface GenesysCloudFullApiAgentAssistantsGeneratedClient {
  DeleteAssistant(...args: GenesysCloudFullApiOperationArgs<"deleteAssistant">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAssistant"]>;
  DeleteAssistantQueue(...args: GenesysCloudFullApiOperationArgs<"deleteAssistantQueue">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAssistantQueue"]>;
  DeleteAssistantQueues(...args: GenesysCloudFullApiOperationArgs<"deleteAssistantQueues">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAssistantQueues"]>;
  DeleteAssistantsAgentchecklist(...args: GenesysCloudFullApiOperationArgs<"deleteAssistantsAgentchecklist">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAssistantsAgentchecklist"]>;
  GetAssistant(...args: GenesysCloudFullApiOperationArgs<"getAssistant">): Promise<GenesysCloudFullApiOperationResponseMap["getAssistant"]>;
  GetAssistantQueue(...args: GenesysCloudFullApiOperationArgs<"getAssistantQueue">): Promise<GenesysCloudFullApiOperationResponseMap["getAssistantQueue"]>;
  GetAssistantQueues(...args: GenesysCloudFullApiOperationArgs<"getAssistantQueues">): Promise<GenesysCloudFullApiOperationResponseMap["getAssistantQueues"]>;
  GetAssistantQueueUsersJob(...args: GenesysCloudFullApiOperationArgs<"getAssistantQueueUsersJob">): Promise<GenesysCloudFullApiOperationResponseMap["getAssistantQueueUsersJob"]>;
  GetAssistants(...args: GenesysCloudFullApiOperationArgs<"getAssistants">): Promise<GenesysCloudFullApiOperationResponseMap["getAssistants"]>;
  GetAssistantsAgentchecklist(...args: GenesysCloudFullApiOperationArgs<"getAssistantsAgentchecklist">): Promise<GenesysCloudFullApiOperationResponseMap["getAssistantsAgentchecklist"]>;
  GetAssistantsAgentchecklists(...args: GenesysCloudFullApiOperationArgs<"getAssistantsAgentchecklists">): Promise<GenesysCloudFullApiOperationResponseMap["getAssistantsAgentchecklists"]>;
  GetAssistantsAgentchecklistsLanguages(...args: GenesysCloudFullApiOperationArgs<"getAssistantsAgentchecklistsLanguages">): Promise<GenesysCloudFullApiOperationResponseMap["getAssistantsAgentchecklistsLanguages"]>;
  GetAssistantsQueues(...args: GenesysCloudFullApiOperationArgs<"getAssistantsQueues">): Promise<GenesysCloudFullApiOperationResponseMap["getAssistantsQueues"]>;
  PatchAssistant(...args: GenesysCloudFullApiOperationArgs<"patchAssistant">): Promise<GenesysCloudFullApiOperationResponseMap["patchAssistant"]>;
  PatchAssistantQueues(...args: GenesysCloudFullApiOperationArgs<"patchAssistantQueues">): Promise<GenesysCloudFullApiOperationResponseMap["patchAssistantQueues"]>;
  PostAssistantQueueUsersBulkAdd(...args: GenesysCloudFullApiOperationArgs<"postAssistantQueueUsersBulkAdd">): Promise<GenesysCloudFullApiOperationResponseMap["postAssistantQueueUsersBulkAdd"]>;
  PostAssistantQueueUsersBulkRemove(...args: GenesysCloudFullApiOperationArgs<"postAssistantQueueUsersBulkRemove">): Promise<GenesysCloudFullApiOperationResponseMap["postAssistantQueueUsersBulkRemove"]>;
  PostAssistantQueueUsersJobs(...args: GenesysCloudFullApiOperationArgs<"postAssistantQueueUsersJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postAssistantQueueUsersJobs"]>;
  PostAssistantQueueUsersQuery(...args: GenesysCloudFullApiOperationArgs<"postAssistantQueueUsersQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAssistantQueueUsersQuery"]>;
  PostAssistants(...args: GenesysCloudFullApiOperationArgs<"postAssistants">): Promise<GenesysCloudFullApiOperationResponseMap["postAssistants"]>;
  PostAssistantsAgentchecklists(...args: GenesysCloudFullApiOperationArgs<"postAssistantsAgentchecklists">): Promise<GenesysCloudFullApiOperationResponseMap["postAssistantsAgentchecklists"]>;
  PutAssistantQueue(...args: GenesysCloudFullApiOperationArgs<"putAssistantQueue">): Promise<GenesysCloudFullApiOperationResponseMap["putAssistantQueue"]>;
  PutAssistantsAgentchecklist(...args: GenesysCloudFullApiOperationArgs<"putAssistantsAgentchecklist">): Promise<GenesysCloudFullApiOperationResponseMap["putAssistantsAgentchecklist"]>;
}

export const GenesysCloudFullApiAgentAssistantsGeneratedFunctionNames = [
  "DeleteAssistant",
  "DeleteAssistantQueue",
  "DeleteAssistantQueues",
  "DeleteAssistantsAgentchecklist",
  "GetAssistant",
  "GetAssistantQueue",
  "GetAssistantQueues",
  "GetAssistantQueueUsersJob",
  "GetAssistants",
  "GetAssistantsAgentchecklist",
  "GetAssistantsAgentchecklists",
  "GetAssistantsAgentchecklistsLanguages",
  "GetAssistantsQueues",
  "PatchAssistant",
  "PatchAssistantQueues",
  "PostAssistantQueueUsersBulkAdd",
  "PostAssistantQueueUsersBulkRemove",
  "PostAssistantQueueUsersJobs",
  "PostAssistantQueueUsersQuery",
  "PostAssistants",
  "PostAssistantsAgentchecklists",
  "PutAssistantQueue",
  "PutAssistantsAgentchecklist"
] as const satisfies readonly (keyof GenesysCloudFullApiAgentAssistantsGeneratedClient)[];

export function createGenesysCloudFullApiAgentAssistantsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiAgentAssistantsGeneratedClient {
  return {
    DeleteAssistant: (...args) => callOperation("deleteAssistant", ...(args as GenesysCloudFullApiOperationArgs<"deleteAssistant">)),
    DeleteAssistantQueue: (...args) => callOperation("deleteAssistantQueue", ...(args as GenesysCloudFullApiOperationArgs<"deleteAssistantQueue">)),
    DeleteAssistantQueues: (...args) => callOperation("deleteAssistantQueues", ...(args as GenesysCloudFullApiOperationArgs<"deleteAssistantQueues">)),
    DeleteAssistantsAgentchecklist: (...args) => callOperation("deleteAssistantsAgentchecklist", ...(args as GenesysCloudFullApiOperationArgs<"deleteAssistantsAgentchecklist">)),
    GetAssistant: (...args) => callOperation("getAssistant", ...(args as GenesysCloudFullApiOperationArgs<"getAssistant">)),
    GetAssistantQueue: (...args) => callOperation("getAssistantQueue", ...(args as GenesysCloudFullApiOperationArgs<"getAssistantQueue">)),
    GetAssistantQueues: (...args) => callOperation("getAssistantQueues", ...(args as GenesysCloudFullApiOperationArgs<"getAssistantQueues">)),
    GetAssistantQueueUsersJob: (...args) => callOperation("getAssistantQueueUsersJob", ...(args as GenesysCloudFullApiOperationArgs<"getAssistantQueueUsersJob">)),
    GetAssistants: (...args) => callOperation("getAssistants", ...(args as GenesysCloudFullApiOperationArgs<"getAssistants">)),
    GetAssistantsAgentchecklist: (...args) => callOperation("getAssistantsAgentchecklist", ...(args as GenesysCloudFullApiOperationArgs<"getAssistantsAgentchecklist">)),
    GetAssistantsAgentchecklists: (...args) => callOperation("getAssistantsAgentchecklists", ...(args as GenesysCloudFullApiOperationArgs<"getAssistantsAgentchecklists">)),
    GetAssistantsAgentchecklistsLanguages: (...args) => callOperation("getAssistantsAgentchecklistsLanguages", ...(args as GenesysCloudFullApiOperationArgs<"getAssistantsAgentchecklistsLanguages">)),
    GetAssistantsQueues: (...args) => callOperation("getAssistantsQueues", ...(args as GenesysCloudFullApiOperationArgs<"getAssistantsQueues">)),
    PatchAssistant: (...args) => callOperation("patchAssistant", ...(args as GenesysCloudFullApiOperationArgs<"patchAssistant">)),
    PatchAssistantQueues: (...args) => callOperation("patchAssistantQueues", ...(args as GenesysCloudFullApiOperationArgs<"patchAssistantQueues">)),
    PostAssistantQueueUsersBulkAdd: (...args) => callOperation("postAssistantQueueUsersBulkAdd", ...(args as GenesysCloudFullApiOperationArgs<"postAssistantQueueUsersBulkAdd">)),
    PostAssistantQueueUsersBulkRemove: (...args) => callOperation("postAssistantQueueUsersBulkRemove", ...(args as GenesysCloudFullApiOperationArgs<"postAssistantQueueUsersBulkRemove">)),
    PostAssistantQueueUsersJobs: (...args) => callOperation("postAssistantQueueUsersJobs", ...(args as GenesysCloudFullApiOperationArgs<"postAssistantQueueUsersJobs">)),
    PostAssistantQueueUsersQuery: (...args) => callOperation("postAssistantQueueUsersQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAssistantQueueUsersQuery">)),
    PostAssistants: (...args) => callOperation("postAssistants", ...(args as GenesysCloudFullApiOperationArgs<"postAssistants">)),
    PostAssistantsAgentchecklists: (...args) => callOperation("postAssistantsAgentchecklists", ...(args as GenesysCloudFullApiOperationArgs<"postAssistantsAgentchecklists">)),
    PutAssistantQueue: (...args) => callOperation("putAssistantQueue", ...(args as GenesysCloudFullApiOperationArgs<"putAssistantQueue">)),
    PutAssistantsAgentchecklist: (...args) => callOperation("putAssistantsAgentchecklist", ...(args as GenesysCloudFullApiOperationArgs<"putAssistantsAgentchecklist">)),
  };
}
