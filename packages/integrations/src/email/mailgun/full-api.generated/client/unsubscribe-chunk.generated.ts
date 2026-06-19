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
export const MailgunFullApiUnsubscribeOperationKeys = [
  "POST /v3/{domain_name}/unsubscribes/import",
  "GET /v3/{domain_name}/unsubscribes/{address}",
  "DELETE /v3/{domain_name}/unsubscribes/{address}",
  "GET /v3/{domain_name}/unsubscribes",
  "POST /v3/{domain_name}/unsubscribes",
  "DELETE /v3/{domain_name}/unsubscribes"
] as const;
export type MailgunFullApiUnsubscribeOperationKey = typeof MailgunFullApiUnsubscribeOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiUnsubscribeOperationPathParamMap {
  "POST /v3/{domain_name}/unsubscribes/import": { "domain_name": MailgunFullApiPathParamValue };
  "GET /v3/{domain_name}/unsubscribes/{address}": { "domain_name": MailgunFullApiPathParamValue; "address": MailgunFullApiPathParamValue };
  "DELETE /v3/{domain_name}/unsubscribes/{address}": { "domain_name": MailgunFullApiPathParamValue; "address": MailgunFullApiPathParamValue };
  "GET /v3/{domain_name}/unsubscribes": { "domain_name": MailgunFullApiPathParamValue };
  "POST /v3/{domain_name}/unsubscribes": { "domain_name": MailgunFullApiPathParamValue };
  "DELETE /v3/{domain_name}/unsubscribes": { "domain_name": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiUnsubscribeOperationRequestMap {
  "POST /v3/{domain_name}/unsubscribes/import": MailgunFullApiOperationInput<"POST /v3/{domain_name}/unsubscribes/import">;
  "GET /v3/{domain_name}/unsubscribes/{address}": MailgunFullApiOperationInput<"GET /v3/{domain_name}/unsubscribes/{address}">;
  "DELETE /v3/{domain_name}/unsubscribes/{address}": MailgunFullApiOperationInput<"DELETE /v3/{domain_name}/unsubscribes/{address}">;
  "GET /v3/{domain_name}/unsubscribes": MailgunFullApiOperationInput<"GET /v3/{domain_name}/unsubscribes">;
  "POST /v3/{domain_name}/unsubscribes": MailgunFullApiOperationInput<"POST /v3/{domain_name}/unsubscribes">;
  "DELETE /v3/{domain_name}/unsubscribes": MailgunFullApiOperationInput<"DELETE /v3/{domain_name}/unsubscribes">;
}

export interface MailgunFullApiUnsubscribeGeneratedClient {
  ImportUnsubscribeList(...args: MailgunFullApiOperationArgs<"POST /v3/{domain_name}/unsubscribes/import">): Promise<MailgunFullApiOperationResponseMap["POST /v3/{domain_name}/unsubscribes/import"]>;
  LookupUnsubscribeRecord(...args: MailgunFullApiOperationArgs<"GET /v3/{domain_name}/unsubscribes/{address}">): Promise<MailgunFullApiOperationResponseMap["GET /v3/{domain_name}/unsubscribes/{address}"]>;
  RemoveUnsubscribe(...args: MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/unsubscribes/{address}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/{domain_name}/unsubscribes/{address}"]>;
  ListAllUnsubscribes(...args: MailgunFullApiOperationArgs<"GET /v3/{domain_name}/unsubscribes">): Promise<MailgunFullApiOperationResponseMap["GET /v3/{domain_name}/unsubscribes"]>;
  AddUnsubscribes(...args: MailgunFullApiOperationArgs<"POST /v3/{domain_name}/unsubscribes">): Promise<MailgunFullApiOperationResponseMap["POST /v3/{domain_name}/unsubscribes"]>;
  ClearAllUnsubscribes(...args: MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/unsubscribes">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/{domain_name}/unsubscribes"]>;
}

export const MailgunFullApiUnsubscribeGeneratedFunctionNames = [
  "ImportUnsubscribeList",
  "LookupUnsubscribeRecord",
  "RemoveUnsubscribe",
  "ListAllUnsubscribes",
  "AddUnsubscribes",
  "ClearAllUnsubscribes"
] as const satisfies readonly (keyof MailgunFullApiUnsubscribeGeneratedClient)[];

export function createMailgunFullApiUnsubscribeGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiUnsubscribeGeneratedClient {
  return {
    ImportUnsubscribeList: (...args) => callOperation("POST /v3/{domain_name}/unsubscribes/import", ...(args as MailgunFullApiOperationArgs<"POST /v3/{domain_name}/unsubscribes/import">)),
    LookupUnsubscribeRecord: (...args) => callOperation("GET /v3/{domain_name}/unsubscribes/{address}", ...(args as MailgunFullApiOperationArgs<"GET /v3/{domain_name}/unsubscribes/{address}">)),
    RemoveUnsubscribe: (...args) => callOperation("DELETE /v3/{domain_name}/unsubscribes/{address}", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/unsubscribes/{address}">)),
    ListAllUnsubscribes: (...args) => callOperation("GET /v3/{domain_name}/unsubscribes", ...(args as MailgunFullApiOperationArgs<"GET /v3/{domain_name}/unsubscribes">)),
    AddUnsubscribes: (...args) => callOperation("POST /v3/{domain_name}/unsubscribes", ...(args as MailgunFullApiOperationArgs<"POST /v3/{domain_name}/unsubscribes">)),
    ClearAllUnsubscribes: (...args) => callOperation("DELETE /v3/{domain_name}/unsubscribes", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/unsubscribes">)),
  };
}
