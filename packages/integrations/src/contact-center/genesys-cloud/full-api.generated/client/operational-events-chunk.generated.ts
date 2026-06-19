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
export const GenesysCloudFullApiOperationalEventsOperationKeys = [
  "getUsageEventsDefinition",
  "getUsageEventsDefinitions",
  "postUsageEventsAggregatesQuery",
  "postUsageEventsQuery"
] as const;
export type GenesysCloudFullApiOperationalEventsOperationKey = typeof GenesysCloudFullApiOperationalEventsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiOperationalEventsOperationPathParamMap {
  "getUsageEventsDefinition": { "eventDefinitionId": GenesysCloudFullApiPathParamValue };
  "getUsageEventsDefinitions": {};
  "postUsageEventsAggregatesQuery": {};
  "postUsageEventsQuery": {};
}

export interface GenesysCloudFullApiOperationalEventsOperationRequestMap {
  "getUsageEventsDefinition": GenesysCloudFullApiOperationInput<"getUsageEventsDefinition">;
  "getUsageEventsDefinitions": GenesysCloudFullApiOperationInput<"getUsageEventsDefinitions">;
  "postUsageEventsAggregatesQuery": GenesysCloudFullApiOperationInput<"postUsageEventsAggregatesQuery">;
  "postUsageEventsQuery": GenesysCloudFullApiOperationInput<"postUsageEventsQuery">;
}

export interface GenesysCloudFullApiOperationalEventsGeneratedClient {
  GetUsageEventsDefinition(...args: GenesysCloudFullApiOperationArgs<"getUsageEventsDefinition">): Promise<GenesysCloudFullApiOperationResponseMap["getUsageEventsDefinition"]>;
  GetUsageEventsDefinitions(...args: GenesysCloudFullApiOperationArgs<"getUsageEventsDefinitions">): Promise<GenesysCloudFullApiOperationResponseMap["getUsageEventsDefinitions"]>;
  PostUsageEventsAggregatesQuery(...args: GenesysCloudFullApiOperationArgs<"postUsageEventsAggregatesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postUsageEventsAggregatesQuery"]>;
  PostUsageEventsQuery(...args: GenesysCloudFullApiOperationArgs<"postUsageEventsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postUsageEventsQuery"]>;
}

export const GenesysCloudFullApiOperationalEventsGeneratedFunctionNames = [
  "GetUsageEventsDefinition",
  "GetUsageEventsDefinitions",
  "PostUsageEventsAggregatesQuery",
  "PostUsageEventsQuery"
] as const satisfies readonly (keyof GenesysCloudFullApiOperationalEventsGeneratedClient)[];

export function createGenesysCloudFullApiOperationalEventsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiOperationalEventsGeneratedClient {
  return {
    GetUsageEventsDefinition: (...args) => callOperation("getUsageEventsDefinition", ...(args as GenesysCloudFullApiOperationArgs<"getUsageEventsDefinition">)),
    GetUsageEventsDefinitions: (...args) => callOperation("getUsageEventsDefinitions", ...(args as GenesysCloudFullApiOperationArgs<"getUsageEventsDefinitions">)),
    PostUsageEventsAggregatesQuery: (...args) => callOperation("postUsageEventsAggregatesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postUsageEventsAggregatesQuery">)),
    PostUsageEventsQuery: (...args) => callOperation("postUsageEventsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postUsageEventsQuery">)),
  };
}
