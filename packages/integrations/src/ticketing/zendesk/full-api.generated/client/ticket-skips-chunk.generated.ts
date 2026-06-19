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
export const ZendeskFullApiTicketSkipsOperationKeys = [
  "ListSkips",
  "ListTicketSkips",
  "ListTicketSkipsByTicket",
  "RecordNewSkip"
] as const;
export type ZendeskFullApiTicketSkipsOperationKey = typeof ZendeskFullApiTicketSkipsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiTicketSkipsOperationPathParamMap {
  "ListSkips": {};
  "ListTicketSkips": { "user_id": ZendeskFullApiPathParamValue };
  "ListTicketSkipsByTicket": { "ticket_id": ZendeskFullApiPathParamValue };
  "RecordNewSkip": {};
}

export interface ZendeskFullApiTicketSkipsOperationRequestMap {
  "ListSkips": ZendeskFullApiOperationInput<"ListSkips">;
  "ListTicketSkips": ZendeskFullApiOperationInput<"ListTicketSkips">;
  "ListTicketSkipsByTicket": ZendeskFullApiOperationInput<"ListTicketSkipsByTicket">;
  "RecordNewSkip": ZendeskFullApiOperationInput<"RecordNewSkip">;
}

export interface ZendeskFullApiTicketSkipsGeneratedClient {
  ListSkips(...args: ZendeskFullApiOperationArgs<"ListSkips">): Promise<ZendeskFullApiOperationResponseMap["ListSkips"]>;
  ListTicketSkips(...args: ZendeskFullApiOperationArgs<"ListTicketSkips">): Promise<ZendeskFullApiOperationResponseMap["ListTicketSkips"]>;
  ListTicketSkipsByTicket(...args: ZendeskFullApiOperationArgs<"ListTicketSkipsByTicket">): Promise<ZendeskFullApiOperationResponseMap["ListTicketSkipsByTicket"]>;
  RecordNewSkip(...args: ZendeskFullApiOperationArgs<"RecordNewSkip">): Promise<ZendeskFullApiOperationResponseMap["RecordNewSkip"]>;
}

export const ZendeskFullApiTicketSkipsGeneratedFunctionNames = [
  "ListSkips",
  "ListTicketSkips",
  "ListTicketSkipsByTicket",
  "RecordNewSkip"
] as const satisfies readonly (keyof ZendeskFullApiTicketSkipsGeneratedClient)[];

export function createZendeskFullApiTicketSkipsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiTicketSkipsGeneratedClient {
  return {
    ListSkips: (...args) => callOperation("ListSkips", ...(args as ZendeskFullApiOperationArgs<"ListSkips">)),
    ListTicketSkips: (...args) => callOperation("ListTicketSkips", ...(args as ZendeskFullApiOperationArgs<"ListTicketSkips">)),
    ListTicketSkipsByTicket: (...args) => callOperation("ListTicketSkipsByTicket", ...(args as ZendeskFullApiOperationArgs<"ListTicketSkipsByTicket">)),
    RecordNewSkip: (...args) => callOperation("RecordNewSkip", ...(args as ZendeskFullApiOperationArgs<"RecordNewSkip">)),
  };
}
