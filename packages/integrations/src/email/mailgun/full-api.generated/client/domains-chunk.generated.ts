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
export const MailgunFullApiDomainsOperationKeys = [
  "GET /v4/domains",
  "POST /v4/domains",
  "GET /v4/domains/{name}",
  "PUT /v4/domains/{name}",
  "PUT /v4/domains/{name}/verify",
  "DELETE /v3/domains/{name}"
] as const;
export type MailgunFullApiDomainsOperationKey = typeof MailgunFullApiDomainsOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiDomainsOperationPathParamMap {
  "GET /v4/domains": {};
  "POST /v4/domains": {};
  "GET /v4/domains/{name}": { "name": MailgunFullApiPathParamValue };
  "PUT /v4/domains/{name}": { "name": MailgunFullApiPathParamValue };
  "PUT /v4/domains/{name}/verify": { "name": MailgunFullApiPathParamValue };
  "DELETE /v3/domains/{name}": { "name": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiDomainsOperationRequestMap {
  "GET /v4/domains": MailgunFullApiOperationInput<"GET /v4/domains">;
  "POST /v4/domains": MailgunFullApiOperationInput<"POST /v4/domains">;
  "GET /v4/domains/{name}": MailgunFullApiOperationInput<"GET /v4/domains/{name}">;
  "PUT /v4/domains/{name}": MailgunFullApiOperationInput<"PUT /v4/domains/{name}">;
  "PUT /v4/domains/{name}/verify": MailgunFullApiOperationInput<"PUT /v4/domains/{name}/verify">;
  "DELETE /v3/domains/{name}": MailgunFullApiOperationInput<"DELETE /v3/domains/{name}">;
}

export interface MailgunFullApiDomainsGeneratedClient {
  GetDomains(...args: MailgunFullApiOperationArgs<"GET /v4/domains">): Promise<MailgunFullApiOperationResponseMap["GET /v4/domains"]>;
  CreateADomain(...args: MailgunFullApiOperationArgs<"POST /v4/domains">): Promise<MailgunFullApiOperationResponseMap["POST /v4/domains"]>;
  GetDomainDetails(...args: MailgunFullApiOperationArgs<"GET /v4/domains/{name}">): Promise<MailgunFullApiOperationResponseMap["GET /v4/domains/{name}"]>;
  UpdateDomain(...args: MailgunFullApiOperationArgs<"PUT /v4/domains/{name}">): Promise<MailgunFullApiOperationResponseMap["PUT /v4/domains/{name}"]>;
  VerifyDomain(...args: MailgunFullApiOperationArgs<"PUT /v4/domains/{name}/verify">): Promise<MailgunFullApiOperationResponseMap["PUT /v4/domains/{name}/verify"]>;
  DeleteADomain(...args: MailgunFullApiOperationArgs<"DELETE /v3/domains/{name}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/domains/{name}"]>;
}

export const MailgunFullApiDomainsGeneratedFunctionNames = [
  "GetDomains",
  "CreateADomain",
  "GetDomainDetails",
  "UpdateDomain",
  "VerifyDomain",
  "DeleteADomain"
] as const satisfies readonly (keyof MailgunFullApiDomainsGeneratedClient)[];

export function createMailgunFullApiDomainsGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiDomainsGeneratedClient {
  return {
    GetDomains: (...args) => callOperation("GET /v4/domains", ...(args as MailgunFullApiOperationArgs<"GET /v4/domains">)),
    CreateADomain: (...args) => callOperation("POST /v4/domains", ...(args as MailgunFullApiOperationArgs<"POST /v4/domains">)),
    GetDomainDetails: (...args) => callOperation("GET /v4/domains/{name}", ...(args as MailgunFullApiOperationArgs<"GET /v4/domains/{name}">)),
    UpdateDomain: (...args) => callOperation("PUT /v4/domains/{name}", ...(args as MailgunFullApiOperationArgs<"PUT /v4/domains/{name}">)),
    VerifyDomain: (...args) => callOperation("PUT /v4/domains/{name}/verify", ...(args as MailgunFullApiOperationArgs<"PUT /v4/domains/{name}/verify">)),
    DeleteADomain: (...args) => callOperation("DELETE /v3/domains/{name}", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/domains/{name}">)),
  };
}
