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
export const GenesysCloudFullApiEventsOperationKeys = [
  "postEventsConversations",
  "postEventsUsersPresence",
  "postEventsUsersRoutingstatus"
] as const;
export type GenesysCloudFullApiEventsOperationKey = typeof GenesysCloudFullApiEventsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiEventsOperationPathParamMap {
  "postEventsConversations": {};
  "postEventsUsersPresence": {};
  "postEventsUsersRoutingstatus": {};
}

export interface GenesysCloudFullApiEventsOperationRequestMap {
  "postEventsConversations": GenesysCloudFullApiOperationInput<"postEventsConversations">;
  "postEventsUsersPresence": GenesysCloudFullApiOperationInput<"postEventsUsersPresence">;
  "postEventsUsersRoutingstatus": GenesysCloudFullApiOperationInput<"postEventsUsersRoutingstatus">;
}

export interface GenesysCloudFullApiEventsGeneratedClient {
  PostEventsConversations(...args: GenesysCloudFullApiOperationArgs<"postEventsConversations">): Promise<GenesysCloudFullApiOperationResponseMap["postEventsConversations"]>;
  PostEventsUsersPresence(...args: GenesysCloudFullApiOperationArgs<"postEventsUsersPresence">): Promise<GenesysCloudFullApiOperationResponseMap["postEventsUsersPresence"]>;
  PostEventsUsersRoutingstatus(...args: GenesysCloudFullApiOperationArgs<"postEventsUsersRoutingstatus">): Promise<GenesysCloudFullApiOperationResponseMap["postEventsUsersRoutingstatus"]>;
}

export const GenesysCloudFullApiEventsGeneratedFunctionNames = [
  "PostEventsConversations",
  "PostEventsUsersPresence",
  "PostEventsUsersRoutingstatus"
] as const satisfies readonly (keyof GenesysCloudFullApiEventsGeneratedClient)[];

export function createGenesysCloudFullApiEventsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiEventsGeneratedClient {
  return {
    PostEventsConversations: (...args) => callOperation("postEventsConversations", ...(args as GenesysCloudFullApiOperationArgs<"postEventsConversations">)),
    PostEventsUsersPresence: (...args) => callOperation("postEventsUsersPresence", ...(args as GenesysCloudFullApiOperationArgs<"postEventsUsersPresence">)),
    PostEventsUsersRoutingstatus: (...args) => callOperation("postEventsUsersRoutingstatus", ...(args as GenesysCloudFullApiOperationArgs<"postEventsUsersRoutingstatus">)),
  };
}
