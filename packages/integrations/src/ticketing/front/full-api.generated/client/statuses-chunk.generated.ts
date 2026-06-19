// Generated endpoint chunk for FrontFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  FrontGeneratedOperationCaller,
  FrontFullApiOperationArgs,
  FrontFullApiOperationInput,
  FrontFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { FrontFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const FrontFullApiStatusesOperationKeys = [
  "list-company-ticket-statuses",
  "get-ticket-status-by-id"
] as const;
export type FrontFullApiStatusesOperationKey = typeof FrontFullApiStatusesOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiStatusesOperationPathParamMap {
  "list-company-ticket-statuses": {};
  "get-ticket-status-by-id": { "status_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiStatusesOperationRequestMap {
  "list-company-ticket-statuses": FrontFullApiOperationInput<"list-company-ticket-statuses">;
  "get-ticket-status-by-id": FrontFullApiOperationInput<"get-ticket-status-by-id">;
}

export interface FrontFullApiStatusesGeneratedClient {
  frontListCompanyTicketStatuses(...args: FrontFullApiOperationArgs<"list-company-ticket-statuses">): Promise<FrontFullApiOperationResponseMap["list-company-ticket-statuses"]>;
  frontGetTicketStatusById(...args: FrontFullApiOperationArgs<"get-ticket-status-by-id">): Promise<FrontFullApiOperationResponseMap["get-ticket-status-by-id"]>;
}

export const FrontFullApiStatusesGeneratedFunctionNames = [
  "frontListCompanyTicketStatuses",
  "frontGetTicketStatusById"
] as const satisfies readonly (keyof FrontFullApiStatusesGeneratedClient)[];

export function createFrontFullApiStatusesGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiStatusesGeneratedClient {
  return {
    frontListCompanyTicketStatuses: (...args) => callOperation("list-company-ticket-statuses", ...(args as FrontFullApiOperationArgs<"list-company-ticket-statuses">)),
    frontGetTicketStatusById: (...args) => callOperation("get-ticket-status-by-id", ...(args as FrontFullApiOperationArgs<"get-ticket-status-by-id">)),
  };
}
