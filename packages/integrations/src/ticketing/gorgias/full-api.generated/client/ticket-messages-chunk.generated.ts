// Generated endpoint chunk for GorgiasFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GorgiasGeneratedOperationCaller,
  GorgiasFullApiOperationArgs,
  GorgiasFullApiOperationInput,
  GorgiasFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GorgiasFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GorgiasFullApiTicketMessagesOperationKeys = [
  "list-messages",
  "list-ticket-messages",
  "create-ticket-message",
  "delete-ticket-message",
  "get-ticket-message",
  "update-ticket-message"
] as const;
export type GorgiasFullApiTicketMessagesOperationKey = typeof GorgiasFullApiTicketMessagesOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiTicketMessagesOperationPathParamMap {
  "list-messages": {};
  "list-ticket-messages": { "ticket_id": GorgiasFullApiPathParamValue };
  "create-ticket-message": { "ticket_id": GorgiasFullApiPathParamValue };
  "delete-ticket-message": { "ticket_id": GorgiasFullApiPathParamValue; "id": GorgiasFullApiPathParamValue };
  "get-ticket-message": { "ticket_id": GorgiasFullApiPathParamValue; "id": GorgiasFullApiPathParamValue };
  "update-ticket-message": { "ticket_id": GorgiasFullApiPathParamValue; "id": GorgiasFullApiPathParamValue };
}

export interface GorgiasFullApiTicketMessagesOperationRequestMap {
  "list-messages": GorgiasFullApiOperationInput<"list-messages">;
  "list-ticket-messages": GorgiasFullApiOperationInput<"list-ticket-messages">;
  "create-ticket-message": GorgiasFullApiOperationInput<"create-ticket-message">;
  "delete-ticket-message": GorgiasFullApiOperationInput<"delete-ticket-message">;
  "get-ticket-message": GorgiasFullApiOperationInput<"get-ticket-message">;
  "update-ticket-message": GorgiasFullApiOperationInput<"update-ticket-message">;
}

export interface GorgiasFullApiTicketMessagesGeneratedClient {
  gorgiasListMessages(...args: GorgiasFullApiOperationArgs<"list-messages">): Promise<GorgiasFullApiOperationResponseMap["list-messages"]>;
  gorgiasListTicketMessages(...args: GorgiasFullApiOperationArgs<"list-ticket-messages">): Promise<GorgiasFullApiOperationResponseMap["list-ticket-messages"]>;
  gorgiasCreateTicketMessage(...args: GorgiasFullApiOperationArgs<"create-ticket-message">): Promise<GorgiasFullApiOperationResponseMap["create-ticket-message"]>;
  gorgiasDeleteTicketMessage(...args: GorgiasFullApiOperationArgs<"delete-ticket-message">): Promise<GorgiasFullApiOperationResponseMap["delete-ticket-message"]>;
  gorgiasGetTicketMessage(...args: GorgiasFullApiOperationArgs<"get-ticket-message">): Promise<GorgiasFullApiOperationResponseMap["get-ticket-message"]>;
  gorgiasUpdateTicketMessage(...args: GorgiasFullApiOperationArgs<"update-ticket-message">): Promise<GorgiasFullApiOperationResponseMap["update-ticket-message"]>;
}

export const GorgiasFullApiTicketMessagesGeneratedFunctionNames = [
  "gorgiasListMessages",
  "gorgiasListTicketMessages",
  "gorgiasCreateTicketMessage",
  "gorgiasDeleteTicketMessage",
  "gorgiasGetTicketMessage",
  "gorgiasUpdateTicketMessage"
] as const satisfies readonly (keyof GorgiasFullApiTicketMessagesGeneratedClient)[];

export function createGorgiasFullApiTicketMessagesGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiTicketMessagesGeneratedClient {
  return {
    gorgiasListMessages: (...args) => callOperation("list-messages", ...(args as GorgiasFullApiOperationArgs<"list-messages">)),
    gorgiasListTicketMessages: (...args) => callOperation("list-ticket-messages", ...(args as GorgiasFullApiOperationArgs<"list-ticket-messages">)),
    gorgiasCreateTicketMessage: (...args) => callOperation("create-ticket-message", ...(args as GorgiasFullApiOperationArgs<"create-ticket-message">)),
    gorgiasDeleteTicketMessage: (...args) => callOperation("delete-ticket-message", ...(args as GorgiasFullApiOperationArgs<"delete-ticket-message">)),
    gorgiasGetTicketMessage: (...args) => callOperation("get-ticket-message", ...(args as GorgiasFullApiOperationArgs<"get-ticket-message">)),
    gorgiasUpdateTicketMessage: (...args) => callOperation("update-ticket-message", ...(args as GorgiasFullApiOperationArgs<"update-ticket-message">)),
  };
}
