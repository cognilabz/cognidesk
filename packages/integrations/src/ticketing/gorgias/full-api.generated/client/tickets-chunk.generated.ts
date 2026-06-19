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
export const GorgiasFullApiTicketsOperationKeys = [
  "list-tickets",
  "create-ticket",
  "delete-ticket",
  "get-ticket",
  "update-ticket",
  "list-ticket-custom-fields",
  "update-ticket-custom-fields",
  "delete-ticket-custom-field",
  "update-ticket-custom-field",
  "delete-ticket-tags",
  "list-ticket-tags",
  "create-ticket-tags",
  "update-ticket-tags"
] as const;
export type GorgiasFullApiTicketsOperationKey = typeof GorgiasFullApiTicketsOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiTicketsOperationPathParamMap {
  "list-tickets": {};
  "create-ticket": {};
  "delete-ticket": { "id": GorgiasFullApiPathParamValue };
  "get-ticket": { "id": GorgiasFullApiPathParamValue };
  "update-ticket": { "id": GorgiasFullApiPathParamValue };
  "list-ticket-custom-fields": { "ticket_id": GorgiasFullApiPathParamValue };
  "update-ticket-custom-fields": { "ticket_id": GorgiasFullApiPathParamValue };
  "delete-ticket-custom-field": { "ticket_id": GorgiasFullApiPathParamValue; "id": GorgiasFullApiPathParamValue };
  "update-ticket-custom-field": { "ticket_id": GorgiasFullApiPathParamValue; "id": GorgiasFullApiPathParamValue };
  "delete-ticket-tags": { "ticket_id": GorgiasFullApiPathParamValue };
  "list-ticket-tags": { "ticket_id": GorgiasFullApiPathParamValue };
  "create-ticket-tags": { "ticket_id": GorgiasFullApiPathParamValue };
  "update-ticket-tags": { "ticket_id": GorgiasFullApiPathParamValue };
}

export interface GorgiasFullApiTicketsOperationRequestMap {
  "list-tickets": GorgiasFullApiOperationInput<"list-tickets">;
  "create-ticket": GorgiasFullApiOperationInput<"create-ticket">;
  "delete-ticket": GorgiasFullApiOperationInput<"delete-ticket">;
  "get-ticket": GorgiasFullApiOperationInput<"get-ticket">;
  "update-ticket": GorgiasFullApiOperationInput<"update-ticket">;
  "list-ticket-custom-fields": GorgiasFullApiOperationInput<"list-ticket-custom-fields">;
  "update-ticket-custom-fields": GorgiasFullApiOperationInput<"update-ticket-custom-fields">;
  "delete-ticket-custom-field": GorgiasFullApiOperationInput<"delete-ticket-custom-field">;
  "update-ticket-custom-field": GorgiasFullApiOperationInput<"update-ticket-custom-field">;
  "delete-ticket-tags": GorgiasFullApiOperationInput<"delete-ticket-tags">;
  "list-ticket-tags": GorgiasFullApiOperationInput<"list-ticket-tags">;
  "create-ticket-tags": GorgiasFullApiOperationInput<"create-ticket-tags">;
  "update-ticket-tags": GorgiasFullApiOperationInput<"update-ticket-tags">;
}

export interface GorgiasFullApiTicketsGeneratedClient {
  gorgiasListTickets(...args: GorgiasFullApiOperationArgs<"list-tickets">): Promise<GorgiasFullApiOperationResponseMap["list-tickets"]>;
  gorgiasCreateTicket(...args: GorgiasFullApiOperationArgs<"create-ticket">): Promise<GorgiasFullApiOperationResponseMap["create-ticket"]>;
  gorgiasDeleteTicket(...args: GorgiasFullApiOperationArgs<"delete-ticket">): Promise<GorgiasFullApiOperationResponseMap["delete-ticket"]>;
  gorgiasGetTicket(...args: GorgiasFullApiOperationArgs<"get-ticket">): Promise<GorgiasFullApiOperationResponseMap["get-ticket"]>;
  gorgiasUpdateTicket(...args: GorgiasFullApiOperationArgs<"update-ticket">): Promise<GorgiasFullApiOperationResponseMap["update-ticket"]>;
  gorgiasListTicketCustomFields(...args: GorgiasFullApiOperationArgs<"list-ticket-custom-fields">): Promise<GorgiasFullApiOperationResponseMap["list-ticket-custom-fields"]>;
  gorgiasUpdateTicketCustomFields(...args: GorgiasFullApiOperationArgs<"update-ticket-custom-fields">): Promise<GorgiasFullApiOperationResponseMap["update-ticket-custom-fields"]>;
  gorgiasDeleteTicketCustomField(...args: GorgiasFullApiOperationArgs<"delete-ticket-custom-field">): Promise<GorgiasFullApiOperationResponseMap["delete-ticket-custom-field"]>;
  gorgiasUpdateTicketCustomField(...args: GorgiasFullApiOperationArgs<"update-ticket-custom-field">): Promise<GorgiasFullApiOperationResponseMap["update-ticket-custom-field"]>;
  gorgiasDeleteTicketTags(...args: GorgiasFullApiOperationArgs<"delete-ticket-tags">): Promise<GorgiasFullApiOperationResponseMap["delete-ticket-tags"]>;
  gorgiasListTicketTags(...args: GorgiasFullApiOperationArgs<"list-ticket-tags">): Promise<GorgiasFullApiOperationResponseMap["list-ticket-tags"]>;
  gorgiasCreateTicketTags(...args: GorgiasFullApiOperationArgs<"create-ticket-tags">): Promise<GorgiasFullApiOperationResponseMap["create-ticket-tags"]>;
  gorgiasUpdateTicketTags(...args: GorgiasFullApiOperationArgs<"update-ticket-tags">): Promise<GorgiasFullApiOperationResponseMap["update-ticket-tags"]>;
}

export const GorgiasFullApiTicketsGeneratedFunctionNames = [
  "gorgiasListTickets",
  "gorgiasCreateTicket",
  "gorgiasDeleteTicket",
  "gorgiasGetTicket",
  "gorgiasUpdateTicket",
  "gorgiasListTicketCustomFields",
  "gorgiasUpdateTicketCustomFields",
  "gorgiasDeleteTicketCustomField",
  "gorgiasUpdateTicketCustomField",
  "gorgiasDeleteTicketTags",
  "gorgiasListTicketTags",
  "gorgiasCreateTicketTags",
  "gorgiasUpdateTicketTags"
] as const satisfies readonly (keyof GorgiasFullApiTicketsGeneratedClient)[];

export function createGorgiasFullApiTicketsGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiTicketsGeneratedClient {
  return {
    gorgiasListTickets: (...args) => callOperation("list-tickets", ...(args as GorgiasFullApiOperationArgs<"list-tickets">)),
    gorgiasCreateTicket: (...args) => callOperation("create-ticket", ...(args as GorgiasFullApiOperationArgs<"create-ticket">)),
    gorgiasDeleteTicket: (...args) => callOperation("delete-ticket", ...(args as GorgiasFullApiOperationArgs<"delete-ticket">)),
    gorgiasGetTicket: (...args) => callOperation("get-ticket", ...(args as GorgiasFullApiOperationArgs<"get-ticket">)),
    gorgiasUpdateTicket: (...args) => callOperation("update-ticket", ...(args as GorgiasFullApiOperationArgs<"update-ticket">)),
    gorgiasListTicketCustomFields: (...args) => callOperation("list-ticket-custom-fields", ...(args as GorgiasFullApiOperationArgs<"list-ticket-custom-fields">)),
    gorgiasUpdateTicketCustomFields: (...args) => callOperation("update-ticket-custom-fields", ...(args as GorgiasFullApiOperationArgs<"update-ticket-custom-fields">)),
    gorgiasDeleteTicketCustomField: (...args) => callOperation("delete-ticket-custom-field", ...(args as GorgiasFullApiOperationArgs<"delete-ticket-custom-field">)),
    gorgiasUpdateTicketCustomField: (...args) => callOperation("update-ticket-custom-field", ...(args as GorgiasFullApiOperationArgs<"update-ticket-custom-field">)),
    gorgiasDeleteTicketTags: (...args) => callOperation("delete-ticket-tags", ...(args as GorgiasFullApiOperationArgs<"delete-ticket-tags">)),
    gorgiasListTicketTags: (...args) => callOperation("list-ticket-tags", ...(args as GorgiasFullApiOperationArgs<"list-ticket-tags">)),
    gorgiasCreateTicketTags: (...args) => callOperation("create-ticket-tags", ...(args as GorgiasFullApiOperationArgs<"create-ticket-tags">)),
    gorgiasUpdateTicketTags: (...args) => callOperation("update-ticket-tags", ...(args as GorgiasFullApiOperationArgs<"update-ticket-tags">)),
  };
}
