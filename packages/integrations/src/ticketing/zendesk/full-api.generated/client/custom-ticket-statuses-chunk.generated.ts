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
export const ZendeskFullApiCustomTicketStatusesOperationKeys = [
  "BulkUpdateDefaultCustomStatus",
  "CreateCustomStatus",
  "CreateTicketFormStatusesForCustomStatus",
  "DeleteCustomStatus",
  "ListCustomStatuses",
  "ShowCustomStatus",
  "UpdateCustomStatus"
] as const;
export type ZendeskFullApiCustomTicketStatusesOperationKey = typeof ZendeskFullApiCustomTicketStatusesOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiCustomTicketStatusesOperationPathParamMap {
  "BulkUpdateDefaultCustomStatus": {};
  "CreateCustomStatus": {};
  "CreateTicketFormStatusesForCustomStatus": { "custom_status_id": ZendeskFullApiPathParamValue };
  "DeleteCustomStatus": { "custom_status_id": ZendeskFullApiPathParamValue };
  "ListCustomStatuses": {};
  "ShowCustomStatus": { "custom_status_id": ZendeskFullApiPathParamValue };
  "UpdateCustomStatus": { "custom_status_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiCustomTicketStatusesOperationRequestMap {
  "BulkUpdateDefaultCustomStatus": ZendeskFullApiOperationInput<"BulkUpdateDefaultCustomStatus">;
  "CreateCustomStatus": ZendeskFullApiOperationInput<"CreateCustomStatus">;
  "CreateTicketFormStatusesForCustomStatus": ZendeskFullApiOperationInput<"CreateTicketFormStatusesForCustomStatus">;
  "DeleteCustomStatus": ZendeskFullApiOperationInput<"DeleteCustomStatus">;
  "ListCustomStatuses": ZendeskFullApiOperationInput<"ListCustomStatuses">;
  "ShowCustomStatus": ZendeskFullApiOperationInput<"ShowCustomStatus">;
  "UpdateCustomStatus": ZendeskFullApiOperationInput<"UpdateCustomStatus">;
}

export interface ZendeskFullApiCustomTicketStatusesGeneratedClient {
  BulkUpdateDefaultCustomStatus(...args: ZendeskFullApiOperationArgs<"BulkUpdateDefaultCustomStatus">): Promise<ZendeskFullApiOperationResponseMap["BulkUpdateDefaultCustomStatus"]>;
  CreateCustomStatus(...args: ZendeskFullApiOperationArgs<"CreateCustomStatus">): Promise<ZendeskFullApiOperationResponseMap["CreateCustomStatus"]>;
  CreateTicketFormStatusesForCustomStatus(...args: ZendeskFullApiOperationArgs<"CreateTicketFormStatusesForCustomStatus">): Promise<ZendeskFullApiOperationResponseMap["CreateTicketFormStatusesForCustomStatus"]>;
  DeleteCustomStatus(...args: ZendeskFullApiOperationArgs<"DeleteCustomStatus">): Promise<ZendeskFullApiOperationResponseMap["DeleteCustomStatus"]>;
  ListCustomStatuses(...args: ZendeskFullApiOperationArgs<"ListCustomStatuses">): Promise<ZendeskFullApiOperationResponseMap["ListCustomStatuses"]>;
  ShowCustomStatus(...args: ZendeskFullApiOperationArgs<"ShowCustomStatus">): Promise<ZendeskFullApiOperationResponseMap["ShowCustomStatus"]>;
  UpdateCustomStatus(...args: ZendeskFullApiOperationArgs<"UpdateCustomStatus">): Promise<ZendeskFullApiOperationResponseMap["UpdateCustomStatus"]>;
}

export const ZendeskFullApiCustomTicketStatusesGeneratedFunctionNames = [
  "BulkUpdateDefaultCustomStatus",
  "CreateCustomStatus",
  "CreateTicketFormStatusesForCustomStatus",
  "DeleteCustomStatus",
  "ListCustomStatuses",
  "ShowCustomStatus",
  "UpdateCustomStatus"
] as const satisfies readonly (keyof ZendeskFullApiCustomTicketStatusesGeneratedClient)[];

export function createZendeskFullApiCustomTicketStatusesGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiCustomTicketStatusesGeneratedClient {
  return {
    BulkUpdateDefaultCustomStatus: (...args) => callOperation("BulkUpdateDefaultCustomStatus", ...(args as ZendeskFullApiOperationArgs<"BulkUpdateDefaultCustomStatus">)),
    CreateCustomStatus: (...args) => callOperation("CreateCustomStatus", ...(args as ZendeskFullApiOperationArgs<"CreateCustomStatus">)),
    CreateTicketFormStatusesForCustomStatus: (...args) => callOperation("CreateTicketFormStatusesForCustomStatus", ...(args as ZendeskFullApiOperationArgs<"CreateTicketFormStatusesForCustomStatus">)),
    DeleteCustomStatus: (...args) => callOperation("DeleteCustomStatus", ...(args as ZendeskFullApiOperationArgs<"DeleteCustomStatus">)),
    ListCustomStatuses: (...args) => callOperation("ListCustomStatuses", ...(args as ZendeskFullApiOperationArgs<"ListCustomStatuses">)),
    ShowCustomStatus: (...args) => callOperation("ShowCustomStatus", ...(args as ZendeskFullApiOperationArgs<"ShowCustomStatus">)),
    UpdateCustomStatus: (...args) => callOperation("UpdateCustomStatus", ...(args as ZendeskFullApiOperationArgs<"UpdateCustomStatus">)),
  };
}
