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
export const ZendeskFullApiSuspendedTicketsOperationKeys = [
  "DeleteSuspendedTicket",
  "DeleteSuspendedTickets",
  "ExportSuspendedTickets",
  "ListSuspendedTickets",
  "RecoverSuspendedTicket",
  "RecoverSuspendedTickets",
  "ShowSuspendedTickets",
  "SuspendedTicketsAttachments"
] as const;
export type ZendeskFullApiSuspendedTicketsOperationKey = typeof ZendeskFullApiSuspendedTicketsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiSuspendedTicketsOperationPathParamMap {
  "DeleteSuspendedTicket": { "id": ZendeskFullApiPathParamValue };
  "DeleteSuspendedTickets": {};
  "ExportSuspendedTickets": {};
  "ListSuspendedTickets": {};
  "RecoverSuspendedTicket": { "id": ZendeskFullApiPathParamValue };
  "RecoverSuspendedTickets": {};
  "ShowSuspendedTickets": { "id": ZendeskFullApiPathParamValue };
  "SuspendedTicketsAttachments": {};
}

export interface ZendeskFullApiSuspendedTicketsOperationRequestMap {
  "DeleteSuspendedTicket": ZendeskFullApiOperationInput<"DeleteSuspendedTicket">;
  "DeleteSuspendedTickets": ZendeskFullApiOperationInput<"DeleteSuspendedTickets">;
  "ExportSuspendedTickets": ZendeskFullApiOperationInput<"ExportSuspendedTickets">;
  "ListSuspendedTickets": ZendeskFullApiOperationInput<"ListSuspendedTickets">;
  "RecoverSuspendedTicket": ZendeskFullApiOperationInput<"RecoverSuspendedTicket">;
  "RecoverSuspendedTickets": ZendeskFullApiOperationInput<"RecoverSuspendedTickets">;
  "ShowSuspendedTickets": ZendeskFullApiOperationInput<"ShowSuspendedTickets">;
  "SuspendedTicketsAttachments": ZendeskFullApiOperationInput<"SuspendedTicketsAttachments">;
}

export interface ZendeskFullApiSuspendedTicketsGeneratedClient {
  DeleteSuspendedTicket(...args: ZendeskFullApiOperationArgs<"DeleteSuspendedTicket">): Promise<ZendeskFullApiOperationResponseMap["DeleteSuspendedTicket"]>;
  DeleteSuspendedTickets(...args: ZendeskFullApiOperationArgs<"DeleteSuspendedTickets">): Promise<ZendeskFullApiOperationResponseMap["DeleteSuspendedTickets"]>;
  ExportSuspendedTickets(...args: ZendeskFullApiOperationArgs<"ExportSuspendedTickets">): Promise<ZendeskFullApiOperationResponseMap["ExportSuspendedTickets"]>;
  ListSuspendedTickets(...args: ZendeskFullApiOperationArgs<"ListSuspendedTickets">): Promise<ZendeskFullApiOperationResponseMap["ListSuspendedTickets"]>;
  RecoverSuspendedTicket(...args: ZendeskFullApiOperationArgs<"RecoverSuspendedTicket">): Promise<ZendeskFullApiOperationResponseMap["RecoverSuspendedTicket"]>;
  RecoverSuspendedTickets(...args: ZendeskFullApiOperationArgs<"RecoverSuspendedTickets">): Promise<ZendeskFullApiOperationResponseMap["RecoverSuspendedTickets"]>;
  ShowSuspendedTickets(...args: ZendeskFullApiOperationArgs<"ShowSuspendedTickets">): Promise<ZendeskFullApiOperationResponseMap["ShowSuspendedTickets"]>;
  SuspendedTicketsAttachments(...args: ZendeskFullApiOperationArgs<"SuspendedTicketsAttachments">): Promise<ZendeskFullApiOperationResponseMap["SuspendedTicketsAttachments"]>;
}

export const ZendeskFullApiSuspendedTicketsGeneratedFunctionNames = [
  "DeleteSuspendedTicket",
  "DeleteSuspendedTickets",
  "ExportSuspendedTickets",
  "ListSuspendedTickets",
  "RecoverSuspendedTicket",
  "RecoverSuspendedTickets",
  "ShowSuspendedTickets",
  "SuspendedTicketsAttachments"
] as const satisfies readonly (keyof ZendeskFullApiSuspendedTicketsGeneratedClient)[];

export function createZendeskFullApiSuspendedTicketsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiSuspendedTicketsGeneratedClient {
  return {
    DeleteSuspendedTicket: (...args) => callOperation("DeleteSuspendedTicket", ...(args as ZendeskFullApiOperationArgs<"DeleteSuspendedTicket">)),
    DeleteSuspendedTickets: (...args) => callOperation("DeleteSuspendedTickets", ...(args as ZendeskFullApiOperationArgs<"DeleteSuspendedTickets">)),
    ExportSuspendedTickets: (...args) => callOperation("ExportSuspendedTickets", ...(args as ZendeskFullApiOperationArgs<"ExportSuspendedTickets">)),
    ListSuspendedTickets: (...args) => callOperation("ListSuspendedTickets", ...(args as ZendeskFullApiOperationArgs<"ListSuspendedTickets">)),
    RecoverSuspendedTicket: (...args) => callOperation("RecoverSuspendedTicket", ...(args as ZendeskFullApiOperationArgs<"RecoverSuspendedTicket">)),
    RecoverSuspendedTickets: (...args) => callOperation("RecoverSuspendedTickets", ...(args as ZendeskFullApiOperationArgs<"RecoverSuspendedTickets">)),
    ShowSuspendedTickets: (...args) => callOperation("ShowSuspendedTickets", ...(args as ZendeskFullApiOperationArgs<"ShowSuspendedTickets">)),
    SuspendedTicketsAttachments: (...args) => callOperation("SuspendedTicketsAttachments", ...(args as ZendeskFullApiOperationArgs<"SuspendedTicketsAttachments">)),
  };
}
