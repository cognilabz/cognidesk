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
export const MailgunFullApiCredentialsOperationKeys = [
  "GET /v3/domains/{domain_name}/credentials",
  "POST /v3/domains/{domain_name}/credentials",
  "DELETE /v3/domains/{domain_name}/credentials",
  "PUT /v3/domains/{domain_name}/credentials/{spec}",
  "DELETE /v3/domains/{domain_name}/credentials/{spec}"
] as const;
export type MailgunFullApiCredentialsOperationKey = typeof MailgunFullApiCredentialsOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiCredentialsOperationPathParamMap {
  "GET /v3/domains/{domain_name}/credentials": { "domain_name": MailgunFullApiPathParamValue };
  "POST /v3/domains/{domain_name}/credentials": { "domain_name": MailgunFullApiPathParamValue };
  "DELETE /v3/domains/{domain_name}/credentials": { "domain_name": MailgunFullApiPathParamValue };
  "PUT /v3/domains/{domain_name}/credentials/{spec}": { "domain_name": MailgunFullApiPathParamValue; "spec": MailgunFullApiPathParamValue };
  "DELETE /v3/domains/{domain_name}/credentials/{spec}": { "domain_name": MailgunFullApiPathParamValue; "spec": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiCredentialsOperationRequestMap {
  "GET /v3/domains/{domain_name}/credentials": MailgunFullApiOperationInput<"GET /v3/domains/{domain_name}/credentials">;
  "POST /v3/domains/{domain_name}/credentials": MailgunFullApiOperationInput<"POST /v3/domains/{domain_name}/credentials">;
  "DELETE /v3/domains/{domain_name}/credentials": MailgunFullApiOperationInput<"DELETE /v3/domains/{domain_name}/credentials">;
  "PUT /v3/domains/{domain_name}/credentials/{spec}": MailgunFullApiOperationInput<"PUT /v3/domains/{domain_name}/credentials/{spec}">;
  "DELETE /v3/domains/{domain_name}/credentials/{spec}": MailgunFullApiOperationInput<"DELETE /v3/domains/{domain_name}/credentials/{spec}">;
}

export interface MailgunFullApiCredentialsGeneratedClient {
  ListMailgunSMTPCredentialMetadataForAGivenDomain(...args: MailgunFullApiOperationArgs<"GET /v3/domains/{domain_name}/credentials">): Promise<MailgunFullApiOperationResponseMap["GET /v3/domains/{domain_name}/credentials"]>;
  CreateMailgunSMTPCredentialsForAGivenDomain(...args: MailgunFullApiOperationArgs<"POST /v3/domains/{domain_name}/credentials">): Promise<MailgunFullApiOperationResponseMap["POST /v3/domains/{domain_name}/credentials"]>;
  DeleteAllMailgunSMTPCredentialsForADomain(...args: MailgunFullApiOperationArgs<"DELETE /v3/domains/{domain_name}/credentials">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/domains/{domain_name}/credentials"]>;
  UpdateMailgunSMTPCredentials(...args: MailgunFullApiOperationArgs<"PUT /v3/domains/{domain_name}/credentials/{spec}">): Promise<MailgunFullApiOperationResponseMap["PUT /v3/domains/{domain_name}/credentials/{spec}"]>;
  DeleteMailgunSMTPCredentials(...args: MailgunFullApiOperationArgs<"DELETE /v3/domains/{domain_name}/credentials/{spec}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/domains/{domain_name}/credentials/{spec}"]>;
}

export const MailgunFullApiCredentialsGeneratedFunctionNames = [
  "ListMailgunSMTPCredentialMetadataForAGivenDomain",
  "CreateMailgunSMTPCredentialsForAGivenDomain",
  "DeleteAllMailgunSMTPCredentialsForADomain",
  "UpdateMailgunSMTPCredentials",
  "DeleteMailgunSMTPCredentials"
] as const satisfies readonly (keyof MailgunFullApiCredentialsGeneratedClient)[];

export function createMailgunFullApiCredentialsGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiCredentialsGeneratedClient {
  return {
    ListMailgunSMTPCredentialMetadataForAGivenDomain: (...args) => callOperation("GET /v3/domains/{domain_name}/credentials", ...(args as MailgunFullApiOperationArgs<"GET /v3/domains/{domain_name}/credentials">)),
    CreateMailgunSMTPCredentialsForAGivenDomain: (...args) => callOperation("POST /v3/domains/{domain_name}/credentials", ...(args as MailgunFullApiOperationArgs<"POST /v3/domains/{domain_name}/credentials">)),
    DeleteAllMailgunSMTPCredentialsForADomain: (...args) => callOperation("DELETE /v3/domains/{domain_name}/credentials", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/domains/{domain_name}/credentials">)),
    UpdateMailgunSMTPCredentials: (...args) => callOperation("PUT /v3/domains/{domain_name}/credentials/{spec}", ...(args as MailgunFullApiOperationArgs<"PUT /v3/domains/{domain_name}/credentials/{spec}">)),
    DeleteMailgunSMTPCredentials: (...args) => callOperation("DELETE /v3/domains/{domain_name}/credentials/{spec}", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/domains/{domain_name}/credentials/{spec}">)),
  };
}
