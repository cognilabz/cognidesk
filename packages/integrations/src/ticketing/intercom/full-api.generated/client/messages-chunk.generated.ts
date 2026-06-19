// Generated endpoint chunk for IntercomFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  IntercomGeneratedOperationCaller,
  IntercomFullApiOperationArgs,
  IntercomFullApiOperationInput,
  IntercomFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { IntercomFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const IntercomFullApiMessagesOperationKeys = [
  "createMessage"
] as const;
export type IntercomFullApiMessagesOperationKey = typeof IntercomFullApiMessagesOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiMessagesOperationPathParamMap {
  "createMessage": {};
}

export interface IntercomFullApiMessagesOperationRequestMap {
  "createMessage": IntercomFullApiOperationInput<"createMessage">;
}

export interface IntercomFullApiMessagesGeneratedClient {
  intercomCreateMessage(...args: IntercomFullApiOperationArgs<"createMessage">): Promise<IntercomFullApiOperationResponseMap["createMessage"]>;
}

export const IntercomFullApiMessagesGeneratedFunctionNames = [
  "intercomCreateMessage"
] as const satisfies readonly (keyof IntercomFullApiMessagesGeneratedClient)[];

export function createIntercomFullApiMessagesGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiMessagesGeneratedClient {
  return {
    intercomCreateMessage: (...args) => callOperation("createMessage", ...(args as IntercomFullApiOperationArgs<"createMessage">)),
  };
}
