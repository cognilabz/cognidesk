// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiTicketAuditsOperationKeys = [
  "CountAuditsForTicket",
  "ListAuditsForTicket",
  "ListTicketAudits",
  "MakeTicketCommentPrivateFromAudits",
  "ShowTicketAudit"
] as const;
export type ZendeskFullApiTicketAuditsOperationKey = typeof ZendeskFullApiTicketAuditsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiTicketAuditsOperationPathParamMap {
  "CountAuditsForTicket": { "ticket_id": ZendeskFullApiPathParamValue };
  "ListAuditsForTicket": { "ticket_id": ZendeskFullApiPathParamValue };
  "ListTicketAudits": {};
  "MakeTicketCommentPrivateFromAudits": { "ticket_id": ZendeskFullApiPathParamValue; "ticket_audit_id": ZendeskFullApiPathParamValue };
  "ShowTicketAudit": { "ticket_id": ZendeskFullApiPathParamValue; "ticket_audit_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiTicketAuditsOperationRequestMap {
  "CountAuditsForTicket": ZendeskFullApiOperationInput<"CountAuditsForTicket">;
  "ListAuditsForTicket": ZendeskFullApiOperationInput<"ListAuditsForTicket">;
  "ListTicketAudits": ZendeskFullApiOperationInput<"ListTicketAudits">;
  "MakeTicketCommentPrivateFromAudits": ZendeskFullApiOperationInput<"MakeTicketCommentPrivateFromAudits">;
  "ShowTicketAudit": ZendeskFullApiOperationInput<"ShowTicketAudit">;
}

export interface ZendeskFullApiTicketAuditsGeneratedClient {
  CountAuditsForTicket(...args: ZendeskFullApiOperationArgs<"CountAuditsForTicket">): Promise<ZendeskFullApiOperationResponseMap["CountAuditsForTicket"]>;
  ListAuditsForTicket(...args: ZendeskFullApiOperationArgs<"ListAuditsForTicket">): Promise<ZendeskFullApiOperationResponseMap["ListAuditsForTicket"]>;
  ListTicketAudits(...args: ZendeskFullApiOperationArgs<"ListTicketAudits">): Promise<ZendeskFullApiOperationResponseMap["ListTicketAudits"]>;
  MakeTicketCommentPrivateFromAudits(...args: ZendeskFullApiOperationArgs<"MakeTicketCommentPrivateFromAudits">): Promise<ZendeskFullApiOperationResponseMap["MakeTicketCommentPrivateFromAudits"]>;
  ShowTicketAudit(...args: ZendeskFullApiOperationArgs<"ShowTicketAudit">): Promise<ZendeskFullApiOperationResponseMap["ShowTicketAudit"]>;
}

export const ZendeskFullApiTicketAuditsGeneratedFunctionNames = [
  "CountAuditsForTicket",
  "ListAuditsForTicket",
  "ListTicketAudits",
  "MakeTicketCommentPrivateFromAudits",
  "ShowTicketAudit"
] as const satisfies readonly (keyof ZendeskFullApiTicketAuditsGeneratedClient)[];

export function createZendeskFullApiTicketAuditsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiTicketAuditsGeneratedClient {
  return {
    CountAuditsForTicket: (...args) => callOperation("CountAuditsForTicket", ...(args as ZendeskFullApiOperationArgs<"CountAuditsForTicket">)),
    ListAuditsForTicket: (...args) => callOperation("ListAuditsForTicket", ...(args as ZendeskFullApiOperationArgs<"ListAuditsForTicket">)),
    ListTicketAudits: (...args) => callOperation("ListTicketAudits", ...(args as ZendeskFullApiOperationArgs<"ListTicketAudits">)),
    MakeTicketCommentPrivateFromAudits: (...args) => callOperation("MakeTicketCommentPrivateFromAudits", ...(args as ZendeskFullApiOperationArgs<"MakeTicketCommentPrivateFromAudits">)),
    ShowTicketAudit: (...args) => callOperation("ShowTicketAudit", ...(args as ZendeskFullApiOperationArgs<"ShowTicketAudit">)),
  };
}
