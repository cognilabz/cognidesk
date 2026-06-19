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
export const IntercomFullApiTicketTypeAttributesOperationKeys = [
  "createTicketTypeAttribute",
  "updateTicketTypeAttribute"
] as const;
export type IntercomFullApiTicketTypeAttributesOperationKey = typeof IntercomFullApiTicketTypeAttributesOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiTicketTypeAttributesOperationPathParamMap {
  "createTicketTypeAttribute": { "ticket_type_id": IntercomFullApiPathParamValue };
  "updateTicketTypeAttribute": { "ticket_type_id": IntercomFullApiPathParamValue; "attribute_id": IntercomFullApiPathParamValue };
}

export interface IntercomFullApiTicketTypeAttributesOperationRequestMap {
  "createTicketTypeAttribute": IntercomFullApiOperationInput<"createTicketTypeAttribute">;
  "updateTicketTypeAttribute": IntercomFullApiOperationInput<"updateTicketTypeAttribute">;
}

export interface IntercomFullApiTicketTypeAttributesGeneratedClient {
  intercomCreateTicketTypeAttribute(...args: IntercomFullApiOperationArgs<"createTicketTypeAttribute">): Promise<IntercomFullApiOperationResponseMap["createTicketTypeAttribute"]>;
  intercomUpdateTicketTypeAttribute(...args: IntercomFullApiOperationArgs<"updateTicketTypeAttribute">): Promise<IntercomFullApiOperationResponseMap["updateTicketTypeAttribute"]>;
}

export const IntercomFullApiTicketTypeAttributesGeneratedFunctionNames = [
  "intercomCreateTicketTypeAttribute",
  "intercomUpdateTicketTypeAttribute"
] as const satisfies readonly (keyof IntercomFullApiTicketTypeAttributesGeneratedClient)[];

export function createIntercomFullApiTicketTypeAttributesGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiTicketTypeAttributesGeneratedClient {
  return {
    intercomCreateTicketTypeAttribute: (...args) => callOperation("createTicketTypeAttribute", ...(args as IntercomFullApiOperationArgs<"createTicketTypeAttribute">)),
    intercomUpdateTicketTypeAttribute: (...args) => callOperation("updateTicketTypeAttribute", ...(args as IntercomFullApiOperationArgs<"updateTicketTypeAttribute">)),
  };
}
