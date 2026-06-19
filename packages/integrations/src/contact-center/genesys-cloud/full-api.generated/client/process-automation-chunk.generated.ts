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
export const GenesysCloudFullApiProcessAutomationOperationKeys = [
  "deleteProcessautomationScheduledtrigger",
  "deleteProcessautomationTrigger",
  "getProcessautomationScheduledtrigger",
  "getProcessautomationScheduledtriggers",
  "getProcessautomationTrigger",
  "getProcessautomationTriggers",
  "getProcessautomationTriggersTopics",
  "postProcessautomationScheduledtriggers",
  "postProcessautomationTriggers",
  "postProcessautomationTriggersTopicTest",
  "postProcessautomationTriggerTest",
  "putProcessautomationScheduledtrigger",
  "putProcessautomationTrigger"
] as const;
export type GenesysCloudFullApiProcessAutomationOperationKey = typeof GenesysCloudFullApiProcessAutomationOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiProcessAutomationOperationPathParamMap {
  "deleteProcessautomationScheduledtrigger": { "scheduledTriggerId": GenesysCloudFullApiPathParamValue };
  "deleteProcessautomationTrigger": { "triggerId": GenesysCloudFullApiPathParamValue };
  "getProcessautomationScheduledtrigger": { "scheduledTriggerId": GenesysCloudFullApiPathParamValue };
  "getProcessautomationScheduledtriggers": {};
  "getProcessautomationTrigger": { "triggerId": GenesysCloudFullApiPathParamValue };
  "getProcessautomationTriggers": {};
  "getProcessautomationTriggersTopics": {};
  "postProcessautomationScheduledtriggers": {};
  "postProcessautomationTriggers": {};
  "postProcessautomationTriggersTopicTest": { "topicName": GenesysCloudFullApiPathParamValue };
  "postProcessautomationTriggerTest": { "triggerId": GenesysCloudFullApiPathParamValue };
  "putProcessautomationScheduledtrigger": { "scheduledTriggerId": GenesysCloudFullApiPathParamValue };
  "putProcessautomationTrigger": { "triggerId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiProcessAutomationOperationRequestMap {
  "deleteProcessautomationScheduledtrigger": GenesysCloudFullApiOperationInput<"deleteProcessautomationScheduledtrigger">;
  "deleteProcessautomationTrigger": GenesysCloudFullApiOperationInput<"deleteProcessautomationTrigger">;
  "getProcessautomationScheduledtrigger": GenesysCloudFullApiOperationInput<"getProcessautomationScheduledtrigger">;
  "getProcessautomationScheduledtriggers": GenesysCloudFullApiOperationInput<"getProcessautomationScheduledtriggers">;
  "getProcessautomationTrigger": GenesysCloudFullApiOperationInput<"getProcessautomationTrigger">;
  "getProcessautomationTriggers": GenesysCloudFullApiOperationInput<"getProcessautomationTriggers">;
  "getProcessautomationTriggersTopics": GenesysCloudFullApiOperationInput<"getProcessautomationTriggersTopics">;
  "postProcessautomationScheduledtriggers": GenesysCloudFullApiOperationInput<"postProcessautomationScheduledtriggers">;
  "postProcessautomationTriggers": GenesysCloudFullApiOperationInput<"postProcessautomationTriggers">;
  "postProcessautomationTriggersTopicTest": GenesysCloudFullApiOperationInput<"postProcessautomationTriggersTopicTest">;
  "postProcessautomationTriggerTest": GenesysCloudFullApiOperationInput<"postProcessautomationTriggerTest">;
  "putProcessautomationScheduledtrigger": GenesysCloudFullApiOperationInput<"putProcessautomationScheduledtrigger">;
  "putProcessautomationTrigger": GenesysCloudFullApiOperationInput<"putProcessautomationTrigger">;
}

export interface GenesysCloudFullApiProcessAutomationGeneratedClient {
  DeleteProcessautomationScheduledtrigger(...args: GenesysCloudFullApiOperationArgs<"deleteProcessautomationScheduledtrigger">): Promise<GenesysCloudFullApiOperationResponseMap["deleteProcessautomationScheduledtrigger"]>;
  DeleteProcessautomationTrigger(...args: GenesysCloudFullApiOperationArgs<"deleteProcessautomationTrigger">): Promise<GenesysCloudFullApiOperationResponseMap["deleteProcessautomationTrigger"]>;
  GetProcessautomationScheduledtrigger(...args: GenesysCloudFullApiOperationArgs<"getProcessautomationScheduledtrigger">): Promise<GenesysCloudFullApiOperationResponseMap["getProcessautomationScheduledtrigger"]>;
  GetProcessautomationScheduledtriggers(...args: GenesysCloudFullApiOperationArgs<"getProcessautomationScheduledtriggers">): Promise<GenesysCloudFullApiOperationResponseMap["getProcessautomationScheduledtriggers"]>;
  GetProcessautomationTrigger(...args: GenesysCloudFullApiOperationArgs<"getProcessautomationTrigger">): Promise<GenesysCloudFullApiOperationResponseMap["getProcessautomationTrigger"]>;
  GetProcessautomationTriggers(...args: GenesysCloudFullApiOperationArgs<"getProcessautomationTriggers">): Promise<GenesysCloudFullApiOperationResponseMap["getProcessautomationTriggers"]>;
  GetProcessautomationTriggersTopics(...args: GenesysCloudFullApiOperationArgs<"getProcessautomationTriggersTopics">): Promise<GenesysCloudFullApiOperationResponseMap["getProcessautomationTriggersTopics"]>;
  PostProcessautomationScheduledtriggers(...args: GenesysCloudFullApiOperationArgs<"postProcessautomationScheduledtriggers">): Promise<GenesysCloudFullApiOperationResponseMap["postProcessautomationScheduledtriggers"]>;
  PostProcessautomationTriggers(...args: GenesysCloudFullApiOperationArgs<"postProcessautomationTriggers">): Promise<GenesysCloudFullApiOperationResponseMap["postProcessautomationTriggers"]>;
  PostProcessautomationTriggersTopicTest(...args: GenesysCloudFullApiOperationArgs<"postProcessautomationTriggersTopicTest">): Promise<GenesysCloudFullApiOperationResponseMap["postProcessautomationTriggersTopicTest"]>;
  PostProcessautomationTriggerTest(...args: GenesysCloudFullApiOperationArgs<"postProcessautomationTriggerTest">): Promise<GenesysCloudFullApiOperationResponseMap["postProcessautomationTriggerTest"]>;
  PutProcessautomationScheduledtrigger(...args: GenesysCloudFullApiOperationArgs<"putProcessautomationScheduledtrigger">): Promise<GenesysCloudFullApiOperationResponseMap["putProcessautomationScheduledtrigger"]>;
  PutProcessautomationTrigger(...args: GenesysCloudFullApiOperationArgs<"putProcessautomationTrigger">): Promise<GenesysCloudFullApiOperationResponseMap["putProcessautomationTrigger"]>;
}

export const GenesysCloudFullApiProcessAutomationGeneratedFunctionNames = [
  "DeleteProcessautomationScheduledtrigger",
  "DeleteProcessautomationTrigger",
  "GetProcessautomationScheduledtrigger",
  "GetProcessautomationScheduledtriggers",
  "GetProcessautomationTrigger",
  "GetProcessautomationTriggers",
  "GetProcessautomationTriggersTopics",
  "PostProcessautomationScheduledtriggers",
  "PostProcessautomationTriggers",
  "PostProcessautomationTriggersTopicTest",
  "PostProcessautomationTriggerTest",
  "PutProcessautomationScheduledtrigger",
  "PutProcessautomationTrigger"
] as const satisfies readonly (keyof GenesysCloudFullApiProcessAutomationGeneratedClient)[];

export function createGenesysCloudFullApiProcessAutomationGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiProcessAutomationGeneratedClient {
  return {
    DeleteProcessautomationScheduledtrigger: (...args) => callOperation("deleteProcessautomationScheduledtrigger", ...(args as GenesysCloudFullApiOperationArgs<"deleteProcessautomationScheduledtrigger">)),
    DeleteProcessautomationTrigger: (...args) => callOperation("deleteProcessautomationTrigger", ...(args as GenesysCloudFullApiOperationArgs<"deleteProcessautomationTrigger">)),
    GetProcessautomationScheduledtrigger: (...args) => callOperation("getProcessautomationScheduledtrigger", ...(args as GenesysCloudFullApiOperationArgs<"getProcessautomationScheduledtrigger">)),
    GetProcessautomationScheduledtriggers: (...args) => callOperation("getProcessautomationScheduledtriggers", ...(args as GenesysCloudFullApiOperationArgs<"getProcessautomationScheduledtriggers">)),
    GetProcessautomationTrigger: (...args) => callOperation("getProcessautomationTrigger", ...(args as GenesysCloudFullApiOperationArgs<"getProcessautomationTrigger">)),
    GetProcessautomationTriggers: (...args) => callOperation("getProcessautomationTriggers", ...(args as GenesysCloudFullApiOperationArgs<"getProcessautomationTriggers">)),
    GetProcessautomationTriggersTopics: (...args) => callOperation("getProcessautomationTriggersTopics", ...(args as GenesysCloudFullApiOperationArgs<"getProcessautomationTriggersTopics">)),
    PostProcessautomationScheduledtriggers: (...args) => callOperation("postProcessautomationScheduledtriggers", ...(args as GenesysCloudFullApiOperationArgs<"postProcessautomationScheduledtriggers">)),
    PostProcessautomationTriggers: (...args) => callOperation("postProcessautomationTriggers", ...(args as GenesysCloudFullApiOperationArgs<"postProcessautomationTriggers">)),
    PostProcessautomationTriggersTopicTest: (...args) => callOperation("postProcessautomationTriggersTopicTest", ...(args as GenesysCloudFullApiOperationArgs<"postProcessautomationTriggersTopicTest">)),
    PostProcessautomationTriggerTest: (...args) => callOperation("postProcessautomationTriggerTest", ...(args as GenesysCloudFullApiOperationArgs<"postProcessautomationTriggerTest">)),
    PutProcessautomationScheduledtrigger: (...args) => callOperation("putProcessautomationScheduledtrigger", ...(args as GenesysCloudFullApiOperationArgs<"putProcessautomationScheduledtrigger">)),
    PutProcessautomationTrigger: (...args) => callOperation("putProcessautomationTrigger", ...(args as GenesysCloudFullApiOperationArgs<"putProcessautomationTrigger">)),
  };
}
