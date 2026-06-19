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
export const IntercomFullApiTicketTypesOperationKeys = [
  "listTicketTypes",
  "createTicketType",
  "getTicketType",
  "updateTicketType"
] as const;
export type IntercomFullApiTicketTypesOperationKey = typeof IntercomFullApiTicketTypesOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiTicketTypesOperationPathParamMap {
  "listTicketTypes": {};
  "createTicketType": {};
  "getTicketType": { "ticket_type_id": IntercomFullApiPathParamValue };
  "updateTicketType": { "ticket_type_id": IntercomFullApiPathParamValue };
}

export interface IntercomFullApiTicketTypesOperationRequestMap {
  "listTicketTypes": IntercomFullApiOperationInput<"listTicketTypes">;
  "createTicketType": IntercomFullApiOperationInput<"createTicketType">;
  "getTicketType": IntercomFullApiOperationInput<"getTicketType">;
  "updateTicketType": IntercomFullApiOperationInput<"updateTicketType">;
}

export interface IntercomFullApiTicketTypesGeneratedClient {
  intercomListTicketTypes(...args: IntercomFullApiOperationArgs<"listTicketTypes">): Promise<IntercomFullApiOperationResponseMap["listTicketTypes"]>;
  intercomCreateTicketType(...args: IntercomFullApiOperationArgs<"createTicketType">): Promise<IntercomFullApiOperationResponseMap["createTicketType"]>;
  intercomGetTicketType(...args: IntercomFullApiOperationArgs<"getTicketType">): Promise<IntercomFullApiOperationResponseMap["getTicketType"]>;
  intercomUpdateTicketType(...args: IntercomFullApiOperationArgs<"updateTicketType">): Promise<IntercomFullApiOperationResponseMap["updateTicketType"]>;
}

export const IntercomFullApiTicketTypesGeneratedFunctionNames = [
  "intercomListTicketTypes",
  "intercomCreateTicketType",
  "intercomGetTicketType",
  "intercomUpdateTicketType"
] as const satisfies readonly (keyof IntercomFullApiTicketTypesGeneratedClient)[];

export function createIntercomFullApiTicketTypesGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiTicketTypesGeneratedClient {
  return {
    intercomListTicketTypes: (...args) => callOperation("listTicketTypes", ...(args as IntercomFullApiOperationArgs<"listTicketTypes">)),
    intercomCreateTicketType: (...args) => callOperation("createTicketType", ...(args as IntercomFullApiOperationArgs<"createTicketType">)),
    intercomGetTicketType: (...args) => callOperation("getTicketType", ...(args as IntercomFullApiOperationArgs<"getTicketType">)),
    intercomUpdateTicketType: (...args) => callOperation("updateTicketType", ...(args as IntercomFullApiOperationArgs<"updateTicketType">)),
  };
}
