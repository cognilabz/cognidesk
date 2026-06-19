// Generated endpoint chunk for MailgunFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  MailgunGeneratedOperationCaller,
  MailgunFullApiOperationArgs,
  MailgunFullApiOperationInput,
  MailgunFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { MailgunFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const MailgunFullApiComplaintsOperationKeys = [
  "POST /v3/{domain_name}/complaints/import",
  "GET /v3/{domain_name}/complaints/{address}",
  "DELETE /v3/{domain_name}/complaints/{address}",
  "GET /v3/{domain_name}/complaints",
  "POST /v3/{domain_name}/complaints",
  "DELETE /v3/{domain_name}/complaints"
] as const;
export type MailgunFullApiComplaintsOperationKey = typeof MailgunFullApiComplaintsOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiComplaintsOperationPathParamMap {
  "POST /v3/{domain_name}/complaints/import": { "domain_name": MailgunFullApiPathParamValue };
  "GET /v3/{domain_name}/complaints/{address}": { "domain_name": MailgunFullApiPathParamValue; "address": MailgunFullApiPathParamValue };
  "DELETE /v3/{domain_name}/complaints/{address}": { "domain_name": MailgunFullApiPathParamValue; "address": MailgunFullApiPathParamValue };
  "GET /v3/{domain_name}/complaints": { "domain_name": MailgunFullApiPathParamValue };
  "POST /v3/{domain_name}/complaints": { "domain_name": MailgunFullApiPathParamValue };
  "DELETE /v3/{domain_name}/complaints": { "domain_name": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiComplaintsOperationRequestMap {
  "POST /v3/{domain_name}/complaints/import": MailgunFullApiOperationInput<"POST /v3/{domain_name}/complaints/import">;
  "GET /v3/{domain_name}/complaints/{address}": MailgunFullApiOperationInput<"GET /v3/{domain_name}/complaints/{address}">;
  "DELETE /v3/{domain_name}/complaints/{address}": MailgunFullApiOperationInput<"DELETE /v3/{domain_name}/complaints/{address}">;
  "GET /v3/{domain_name}/complaints": MailgunFullApiOperationInput<"GET /v3/{domain_name}/complaints">;
  "POST /v3/{domain_name}/complaints": MailgunFullApiOperationInput<"POST /v3/{domain_name}/complaints">;
  "DELETE /v3/{domain_name}/complaints": MailgunFullApiOperationInput<"DELETE /v3/{domain_name}/complaints">;
}

export interface MailgunFullApiComplaintsGeneratedClient {
  ImportComplaintList(...args: MailgunFullApiOperationArgs<"POST /v3/{domain_name}/complaints/import">): Promise<MailgunFullApiOperationResponseMap["POST /v3/{domain_name}/complaints/import"]>;
  LookupComplaintRecord(...args: MailgunFullApiOperationArgs<"GET /v3/{domain_name}/complaints/{address}">): Promise<MailgunFullApiOperationResponseMap["GET /v3/{domain_name}/complaints/{address}"]>;
  RemoveComplaint(...args: MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/complaints/{address}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/{domain_name}/complaints/{address}"]>;
  ListAllComplaints(...args: MailgunFullApiOperationArgs<"GET /v3/{domain_name}/complaints">): Promise<MailgunFullApiOperationResponseMap["GET /v3/{domain_name}/complaints"]>;
  AddComplaints(...args: MailgunFullApiOperationArgs<"POST /v3/{domain_name}/complaints">): Promise<MailgunFullApiOperationResponseMap["POST /v3/{domain_name}/complaints"]>;
  ClearAllComplaints(...args: MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/complaints">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/{domain_name}/complaints"]>;
}

export const MailgunFullApiComplaintsGeneratedFunctionNames = [
  "ImportComplaintList",
  "LookupComplaintRecord",
  "RemoveComplaint",
  "ListAllComplaints",
  "AddComplaints",
  "ClearAllComplaints"
] as const satisfies readonly (keyof MailgunFullApiComplaintsGeneratedClient)[];

export function createMailgunFullApiComplaintsGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiComplaintsGeneratedClient {
  return {
    ImportComplaintList: (...args) => callOperation("POST /v3/{domain_name}/complaints/import", ...(args as MailgunFullApiOperationArgs<"POST /v3/{domain_name}/complaints/import">)),
    LookupComplaintRecord: (...args) => callOperation("GET /v3/{domain_name}/complaints/{address}", ...(args as MailgunFullApiOperationArgs<"GET /v3/{domain_name}/complaints/{address}">)),
    RemoveComplaint: (...args) => callOperation("DELETE /v3/{domain_name}/complaints/{address}", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/complaints/{address}">)),
    ListAllComplaints: (...args) => callOperation("GET /v3/{domain_name}/complaints", ...(args as MailgunFullApiOperationArgs<"GET /v3/{domain_name}/complaints">)),
    AddComplaints: (...args) => callOperation("POST /v3/{domain_name}/complaints", ...(args as MailgunFullApiOperationArgs<"POST /v3/{domain_name}/complaints">)),
    ClearAllComplaints: (...args) => callOperation("DELETE /v3/{domain_name}/complaints", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/complaints">)),
  };
}
