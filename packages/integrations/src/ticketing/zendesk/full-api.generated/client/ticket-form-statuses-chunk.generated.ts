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
export const ZendeskFullApiTicketFormStatusesOperationKeys = [
  "DeleteTicketFormStatusById",
  "DeleteTicketFormStatuses",
  "ListTicketFormStatuses",
  "ShowManyTicketFormStatuses"
] as const;
export type ZendeskFullApiTicketFormStatusesOperationKey = typeof ZendeskFullApiTicketFormStatusesOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiTicketFormStatusesOperationPathParamMap {
  "DeleteTicketFormStatusById": { "ticket_form_id": ZendeskFullApiPathParamValue; "ticket_form_status_id": ZendeskFullApiPathParamValue };
  "DeleteTicketFormStatuses": { "ticket_form_id": ZendeskFullApiPathParamValue };
  "ListTicketFormStatuses": {};
  "ShowManyTicketFormStatuses": {};
}

export interface ZendeskFullApiTicketFormStatusesOperationRequestMap {
  "DeleteTicketFormStatusById": ZendeskFullApiOperationInput<"DeleteTicketFormStatusById">;
  "DeleteTicketFormStatuses": ZendeskFullApiOperationInput<"DeleteTicketFormStatuses">;
  "ListTicketFormStatuses": ZendeskFullApiOperationInput<"ListTicketFormStatuses">;
  "ShowManyTicketFormStatuses": ZendeskFullApiOperationInput<"ShowManyTicketFormStatuses">;
}

export interface ZendeskFullApiTicketFormStatusesGeneratedClient {
  DeleteTicketFormStatusById(...args: ZendeskFullApiOperationArgs<"DeleteTicketFormStatusById">): Promise<ZendeskFullApiOperationResponseMap["DeleteTicketFormStatusById"]>;
  DeleteTicketFormStatuses(...args: ZendeskFullApiOperationArgs<"DeleteTicketFormStatuses">): Promise<ZendeskFullApiOperationResponseMap["DeleteTicketFormStatuses"]>;
  ListTicketFormStatuses(...args: ZendeskFullApiOperationArgs<"ListTicketFormStatuses">): Promise<ZendeskFullApiOperationResponseMap["ListTicketFormStatuses"]>;
  ShowManyTicketFormStatuses(...args: ZendeskFullApiOperationArgs<"ShowManyTicketFormStatuses">): Promise<ZendeskFullApiOperationResponseMap["ShowManyTicketFormStatuses"]>;
}

export const ZendeskFullApiTicketFormStatusesGeneratedFunctionNames = [
  "DeleteTicketFormStatusById",
  "DeleteTicketFormStatuses",
  "ListTicketFormStatuses",
  "ShowManyTicketFormStatuses"
] as const satisfies readonly (keyof ZendeskFullApiTicketFormStatusesGeneratedClient)[];

export function createZendeskFullApiTicketFormStatusesGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiTicketFormStatusesGeneratedClient {
  return {
    DeleteTicketFormStatusById: (...args) => callOperation("DeleteTicketFormStatusById", ...(args as ZendeskFullApiOperationArgs<"DeleteTicketFormStatusById">)),
    DeleteTicketFormStatuses: (...args) => callOperation("DeleteTicketFormStatuses", ...(args as ZendeskFullApiOperationArgs<"DeleteTicketFormStatuses">)),
    ListTicketFormStatuses: (...args) => callOperation("ListTicketFormStatuses", ...(args as ZendeskFullApiOperationArgs<"ListTicketFormStatuses">)),
    ShowManyTicketFormStatuses: (...args) => callOperation("ShowManyTicketFormStatuses", ...(args as ZendeskFullApiOperationArgs<"ShowManyTicketFormStatuses">)),
  };
}
