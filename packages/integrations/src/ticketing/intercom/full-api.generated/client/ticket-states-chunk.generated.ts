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
export const IntercomFullApiTicketStatesOperationKeys = [
  "listTicketStates"
] as const;
export type IntercomFullApiTicketStatesOperationKey = typeof IntercomFullApiTicketStatesOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiTicketStatesOperationPathParamMap {
  "listTicketStates": {};
}

export interface IntercomFullApiTicketStatesOperationRequestMap {
  "listTicketStates": IntercomFullApiOperationInput<"listTicketStates">;
}

export interface IntercomFullApiTicketStatesGeneratedClient {
  intercomListTicketStates(...args: IntercomFullApiOperationArgs<"listTicketStates">): Promise<IntercomFullApiOperationResponseMap["listTicketStates"]>;
}

export const IntercomFullApiTicketStatesGeneratedFunctionNames = [
  "intercomListTicketStates"
] as const satisfies readonly (keyof IntercomFullApiTicketStatesGeneratedClient)[];

export function createIntercomFullApiTicketStatesGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiTicketStatesGeneratedClient {
  return {
    intercomListTicketStates: (...args) => callOperation("listTicketStates", ...(args as IntercomFullApiOperationArgs<"listTicketStates">)),
  };
}
