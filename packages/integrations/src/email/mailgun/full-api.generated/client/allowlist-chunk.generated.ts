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
export const MailgunFullApiAllowlistOperationKeys = [
  "POST /v3/{domain_name}/whitelists/import",
  "GET /v3/{domain_name}/whitelists/{value}",
  "DELETE /v3/{domain_name}/whitelists/{value}",
  "GET /v3/{domain_name}/whitelists",
  "POST /v3/{domain_name}/whitelists",
  "DELETE /v3/{domain_name}/whitelists"
] as const;
export type MailgunFullApiAllowlistOperationKey = typeof MailgunFullApiAllowlistOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiAllowlistOperationPathParamMap {
  "POST /v3/{domain_name}/whitelists/import": { "domain_name": MailgunFullApiPathParamValue };
  "GET /v3/{domain_name}/whitelists/{value}": { "domain_name": MailgunFullApiPathParamValue; "value": MailgunFullApiPathParamValue };
  "DELETE /v3/{domain_name}/whitelists/{value}": { "domain_name": MailgunFullApiPathParamValue; "value": MailgunFullApiPathParamValue };
  "GET /v3/{domain_name}/whitelists": { "domain_name": MailgunFullApiPathParamValue };
  "POST /v3/{domain_name}/whitelists": { "domain_name": MailgunFullApiPathParamValue };
  "DELETE /v3/{domain_name}/whitelists": { "domain_name": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiAllowlistOperationRequestMap {
  "POST /v3/{domain_name}/whitelists/import": MailgunFullApiOperationInput<"POST /v3/{domain_name}/whitelists/import">;
  "GET /v3/{domain_name}/whitelists/{value}": MailgunFullApiOperationInput<"GET /v3/{domain_name}/whitelists/{value}">;
  "DELETE /v3/{domain_name}/whitelists/{value}": MailgunFullApiOperationInput<"DELETE /v3/{domain_name}/whitelists/{value}">;
  "GET /v3/{domain_name}/whitelists": MailgunFullApiOperationInput<"GET /v3/{domain_name}/whitelists">;
  "POST /v3/{domain_name}/whitelists": MailgunFullApiOperationInput<"POST /v3/{domain_name}/whitelists">;
  "DELETE /v3/{domain_name}/whitelists": MailgunFullApiOperationInput<"DELETE /v3/{domain_name}/whitelists">;
}

export interface MailgunFullApiAllowlistGeneratedClient {
  ImportAllowlist(...args: MailgunFullApiOperationArgs<"POST /v3/{domain_name}/whitelists/import">): Promise<MailgunFullApiOperationResponseMap["POST /v3/{domain_name}/whitelists/import"]>;
  LookupAllowlistRecord(...args: MailgunFullApiOperationArgs<"GET /v3/{domain_name}/whitelists/{value}">): Promise<MailgunFullApiOperationResponseMap["GET /v3/{domain_name}/whitelists/{value}"]>;
  RemoveEntryFromAllowlist(...args: MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/whitelists/{value}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/{domain_name}/whitelists/{value}"]>;
  ListAllowlistRecordsForDomain(...args: MailgunFullApiOperationArgs<"GET /v3/{domain_name}/whitelists">): Promise<MailgunFullApiOperationResponseMap["GET /v3/{domain_name}/whitelists"]>;
  AddAllowlistRecord(...args: MailgunFullApiOperationArgs<"POST /v3/{domain_name}/whitelists">): Promise<MailgunFullApiOperationResponseMap["POST /v3/{domain_name}/whitelists"]>;
  ClearAllowlist(...args: MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/whitelists">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/{domain_name}/whitelists"]>;
}

export const MailgunFullApiAllowlistGeneratedFunctionNames = [
  "ImportAllowlist",
  "LookupAllowlistRecord",
  "RemoveEntryFromAllowlist",
  "ListAllowlistRecordsForDomain",
  "AddAllowlistRecord",
  "ClearAllowlist"
] as const satisfies readonly (keyof MailgunFullApiAllowlistGeneratedClient)[];

export function createMailgunFullApiAllowlistGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiAllowlistGeneratedClient {
  return {
    ImportAllowlist: (...args) => callOperation("POST /v3/{domain_name}/whitelists/import", ...(args as MailgunFullApiOperationArgs<"POST /v3/{domain_name}/whitelists/import">)),
    LookupAllowlistRecord: (...args) => callOperation("GET /v3/{domain_name}/whitelists/{value}", ...(args as MailgunFullApiOperationArgs<"GET /v3/{domain_name}/whitelists/{value}">)),
    RemoveEntryFromAllowlist: (...args) => callOperation("DELETE /v3/{domain_name}/whitelists/{value}", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/whitelists/{value}">)),
    ListAllowlistRecordsForDomain: (...args) => callOperation("GET /v3/{domain_name}/whitelists", ...(args as MailgunFullApiOperationArgs<"GET /v3/{domain_name}/whitelists">)),
    AddAllowlistRecord: (...args) => callOperation("POST /v3/{domain_name}/whitelists", ...(args as MailgunFullApiOperationArgs<"POST /v3/{domain_name}/whitelists">)),
    ClearAllowlist: (...args) => callOperation("DELETE /v3/{domain_name}/whitelists", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/whitelists">)),
  };
}
