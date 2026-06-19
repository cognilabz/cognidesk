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
export const GenesysCloudFullApiTextbotsOperationKeys = [
  "getTextbotsBotsSearch",
  "postTextbotsBotflowsSessions",
  "postTextbotsBotflowsSessionTurns",
  "postTextbotsBotsExecute"
] as const;
export type GenesysCloudFullApiTextbotsOperationKey = typeof GenesysCloudFullApiTextbotsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiTextbotsOperationPathParamMap {
  "getTextbotsBotsSearch": {};
  "postTextbotsBotflowsSessions": {};
  "postTextbotsBotflowsSessionTurns": { "sessionId": GenesysCloudFullApiPathParamValue };
  "postTextbotsBotsExecute": {};
}

export interface GenesysCloudFullApiTextbotsOperationRequestMap {
  "getTextbotsBotsSearch": GenesysCloudFullApiOperationInput<"getTextbotsBotsSearch">;
  "postTextbotsBotflowsSessions": GenesysCloudFullApiOperationInput<"postTextbotsBotflowsSessions">;
  "postTextbotsBotflowsSessionTurns": GenesysCloudFullApiOperationInput<"postTextbotsBotflowsSessionTurns">;
  "postTextbotsBotsExecute": GenesysCloudFullApiOperationInput<"postTextbotsBotsExecute">;
}

export interface GenesysCloudFullApiTextbotsGeneratedClient {
  GetTextbotsBotsSearch(...args: GenesysCloudFullApiOperationArgs<"getTextbotsBotsSearch">): Promise<GenesysCloudFullApiOperationResponseMap["getTextbotsBotsSearch"]>;
  PostTextbotsBotflowsSessions(...args: GenesysCloudFullApiOperationArgs<"postTextbotsBotflowsSessions">): Promise<GenesysCloudFullApiOperationResponseMap["postTextbotsBotflowsSessions"]>;
  PostTextbotsBotflowsSessionTurns(...args: GenesysCloudFullApiOperationArgs<"postTextbotsBotflowsSessionTurns">): Promise<GenesysCloudFullApiOperationResponseMap["postTextbotsBotflowsSessionTurns"]>;
  PostTextbotsBotsExecute(...args: GenesysCloudFullApiOperationArgs<"postTextbotsBotsExecute">): Promise<GenesysCloudFullApiOperationResponseMap["postTextbotsBotsExecute"]>;
}

export const GenesysCloudFullApiTextbotsGeneratedFunctionNames = [
  "GetTextbotsBotsSearch",
  "PostTextbotsBotflowsSessions",
  "PostTextbotsBotflowsSessionTurns",
  "PostTextbotsBotsExecute"
] as const satisfies readonly (keyof GenesysCloudFullApiTextbotsGeneratedClient)[];

export function createGenesysCloudFullApiTextbotsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiTextbotsGeneratedClient {
  return {
    GetTextbotsBotsSearch: (...args) => callOperation("getTextbotsBotsSearch", ...(args as GenesysCloudFullApiOperationArgs<"getTextbotsBotsSearch">)),
    PostTextbotsBotflowsSessions: (...args) => callOperation("postTextbotsBotflowsSessions", ...(args as GenesysCloudFullApiOperationArgs<"postTextbotsBotflowsSessions">)),
    PostTextbotsBotflowsSessionTurns: (...args) => callOperation("postTextbotsBotflowsSessionTurns", ...(args as GenesysCloudFullApiOperationArgs<"postTextbotsBotflowsSessionTurns">)),
    PostTextbotsBotsExecute: (...args) => callOperation("postTextbotsBotsExecute", ...(args as GenesysCloudFullApiOperationArgs<"postTextbotsBotsExecute">)),
  };
}
