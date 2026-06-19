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
export const IntercomFullApiTicketsOperationKeys = [
  "createTicket",
  "deleteTicket",
  "getTicket",
  "updateTicket",
  "replyTicket",
  "enqueueCreateTicket",
  "searchTickets"
] as const;
export type IntercomFullApiTicketsOperationKey = typeof IntercomFullApiTicketsOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiTicketsOperationPathParamMap {
  "createTicket": {};
  "deleteTicket": { "ticket_id": IntercomFullApiPathParamValue };
  "getTicket": { "ticket_id": IntercomFullApiPathParamValue };
  "updateTicket": { "ticket_id": IntercomFullApiPathParamValue };
  "replyTicket": { "ticket_id": IntercomFullApiPathParamValue };
  "enqueueCreateTicket": {};
  "searchTickets": {};
}

export interface IntercomFullApiTicketsOperationRequestMap {
  "createTicket": IntercomFullApiOperationInput<"createTicket">;
  "deleteTicket": IntercomFullApiOperationInput<"deleteTicket">;
  "getTicket": IntercomFullApiOperationInput<"getTicket">;
  "updateTicket": IntercomFullApiOperationInput<"updateTicket">;
  "replyTicket": IntercomFullApiOperationInput<"replyTicket">;
  "enqueueCreateTicket": IntercomFullApiOperationInput<"enqueueCreateTicket">;
  "searchTickets": IntercomFullApiOperationInput<"searchTickets">;
}

export interface IntercomFullApiTicketsGeneratedClient {
  intercomCreateTicket(...args: IntercomFullApiOperationArgs<"createTicket">): Promise<IntercomFullApiOperationResponseMap["createTicket"]>;
  intercomDeleteTicket(...args: IntercomFullApiOperationArgs<"deleteTicket">): Promise<IntercomFullApiOperationResponseMap["deleteTicket"]>;
  intercomGetTicket(...args: IntercomFullApiOperationArgs<"getTicket">): Promise<IntercomFullApiOperationResponseMap["getTicket"]>;
  intercomUpdateTicket(...args: IntercomFullApiOperationArgs<"updateTicket">): Promise<IntercomFullApiOperationResponseMap["updateTicket"]>;
  intercomReplyTicket(...args: IntercomFullApiOperationArgs<"replyTicket">): Promise<IntercomFullApiOperationResponseMap["replyTicket"]>;
  intercomEnqueueCreateTicket(...args: IntercomFullApiOperationArgs<"enqueueCreateTicket">): Promise<IntercomFullApiOperationResponseMap["enqueueCreateTicket"]>;
  intercomSearchTickets(...args: IntercomFullApiOperationArgs<"searchTickets">): Promise<IntercomFullApiOperationResponseMap["searchTickets"]>;
}

export const IntercomFullApiTicketsGeneratedFunctionNames = [
  "intercomCreateTicket",
  "intercomDeleteTicket",
  "intercomGetTicket",
  "intercomUpdateTicket",
  "intercomReplyTicket",
  "intercomEnqueueCreateTicket",
  "intercomSearchTickets"
] as const satisfies readonly (keyof IntercomFullApiTicketsGeneratedClient)[];

export function createIntercomFullApiTicketsGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiTicketsGeneratedClient {
  return {
    intercomCreateTicket: (...args) => callOperation("createTicket", ...(args as IntercomFullApiOperationArgs<"createTicket">)),
    intercomDeleteTicket: (...args) => callOperation("deleteTicket", ...(args as IntercomFullApiOperationArgs<"deleteTicket">)),
    intercomGetTicket: (...args) => callOperation("getTicket", ...(args as IntercomFullApiOperationArgs<"getTicket">)),
    intercomUpdateTicket: (...args) => callOperation("updateTicket", ...(args as IntercomFullApiOperationArgs<"updateTicket">)),
    intercomReplyTicket: (...args) => callOperation("replyTicket", ...(args as IntercomFullApiOperationArgs<"replyTicket">)),
    intercomEnqueueCreateTicket: (...args) => callOperation("enqueueCreateTicket", ...(args as IntercomFullApiOperationArgs<"enqueueCreateTicket">)),
    intercomSearchTickets: (...args) => callOperation("searchTickets", ...(args as IntercomFullApiOperationArgs<"searchTickets">)),
  };
}
