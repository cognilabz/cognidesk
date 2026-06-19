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
export const IntercomFullApiFinAgentOperationKeys = [
  "replyToFin",
  "startFinConversation"
] as const;
export type IntercomFullApiFinAgentOperationKey = typeof IntercomFullApiFinAgentOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiFinAgentOperationPathParamMap {
  "replyToFin": {};
  "startFinConversation": {};
}

export interface IntercomFullApiFinAgentOperationRequestMap {
  "replyToFin": IntercomFullApiOperationInput<"replyToFin">;
  "startFinConversation": IntercomFullApiOperationInput<"startFinConversation">;
}

export interface IntercomFullApiFinAgentGeneratedClient {
  intercomReplyToFin(...args: IntercomFullApiOperationArgs<"replyToFin">): Promise<IntercomFullApiOperationResponseMap["replyToFin"]>;
  intercomStartFinConversation(...args: IntercomFullApiOperationArgs<"startFinConversation">): Promise<IntercomFullApiOperationResponseMap["startFinConversation"]>;
}

export const IntercomFullApiFinAgentGeneratedFunctionNames = [
  "intercomReplyToFin",
  "intercomStartFinConversation"
] as const satisfies readonly (keyof IntercomFullApiFinAgentGeneratedClient)[];

export function createIntercomFullApiFinAgentGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiFinAgentGeneratedClient {
  return {
    intercomReplyToFin: (...args) => callOperation("replyToFin", ...(args as IntercomFullApiOperationArgs<"replyToFin">)),
    intercomStartFinConversation: (...args) => callOperation("startFinConversation", ...(args as IntercomFullApiOperationArgs<"startFinConversation">)),
  };
}
