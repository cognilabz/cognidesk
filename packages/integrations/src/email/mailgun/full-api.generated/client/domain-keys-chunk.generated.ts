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
export const MailgunFullApiDomainKeysOperationKeys = [
  "GET /v1/dkim/keys",
  "POST /v1/dkim/keys",
  "DELETE /v1/dkim/keys",
  "PUT /v4/domains/{authority_name}/keys/{selector}/activate",
  "GET /v4/domains/{authority_name}/keys",
  "PUT /v4/domains/{authority_name}/keys/{selector}/deactivate",
  "PUT /v3/domains/{name}/dkim_authority",
  "PUT /v3/domains/{name}/dkim_selector"
] as const;
export type MailgunFullApiDomainKeysOperationKey = typeof MailgunFullApiDomainKeysOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiDomainKeysOperationPathParamMap {
  "GET /v1/dkim/keys": {};
  "POST /v1/dkim/keys": {};
  "DELETE /v1/dkim/keys": {};
  "PUT /v4/domains/{authority_name}/keys/{selector}/activate": { "authority_name": MailgunFullApiPathParamValue; "selector": MailgunFullApiPathParamValue };
  "GET /v4/domains/{authority_name}/keys": { "authority_name": MailgunFullApiPathParamValue };
  "PUT /v4/domains/{authority_name}/keys/{selector}/deactivate": { "authority_name": MailgunFullApiPathParamValue; "selector": MailgunFullApiPathParamValue };
  "PUT /v3/domains/{name}/dkim_authority": { "name": MailgunFullApiPathParamValue };
  "PUT /v3/domains/{name}/dkim_selector": { "name": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiDomainKeysOperationRequestMap {
  "GET /v1/dkim/keys": MailgunFullApiOperationInput<"GET /v1/dkim/keys">;
  "POST /v1/dkim/keys": MailgunFullApiOperationInput<"POST /v1/dkim/keys">;
  "DELETE /v1/dkim/keys": MailgunFullApiOperationInput<"DELETE /v1/dkim/keys">;
  "PUT /v4/domains/{authority_name}/keys/{selector}/activate": MailgunFullApiOperationInput<"PUT /v4/domains/{authority_name}/keys/{selector}/activate">;
  "GET /v4/domains/{authority_name}/keys": MailgunFullApiOperationInput<"GET /v4/domains/{authority_name}/keys">;
  "PUT /v4/domains/{authority_name}/keys/{selector}/deactivate": MailgunFullApiOperationInput<"PUT /v4/domains/{authority_name}/keys/{selector}/deactivate">;
  "PUT /v3/domains/{name}/dkim_authority": MailgunFullApiOperationInput<"PUT /v3/domains/{name}/dkim_authority">;
  "PUT /v3/domains/{name}/dkim_selector": MailgunFullApiOperationInput<"PUT /v3/domains/{name}/dkim_selector">;
}

export interface MailgunFullApiDomainKeysGeneratedClient {
  ListKeysForAllDomains(...args: MailgunFullApiOperationArgs<"GET /v1/dkim/keys">): Promise<MailgunFullApiOperationResponseMap["GET /v1/dkim/keys"]>;
  CreateADomainKey(...args: MailgunFullApiOperationArgs<"POST /v1/dkim/keys">): Promise<MailgunFullApiOperationResponseMap["POST /v1/dkim/keys"]>;
  DeleteADomainKey(...args: MailgunFullApiOperationArgs<"DELETE /v1/dkim/keys">): Promise<MailgunFullApiOperationResponseMap["DELETE /v1/dkim/keys"]>;
  ActivateADomainKey(...args: MailgunFullApiOperationArgs<"PUT /v4/domains/{authority_name}/keys/{selector}/activate">): Promise<MailgunFullApiOperationResponseMap["PUT /v4/domains/{authority_name}/keys/{selector}/activate"]>;
  ListDomainKeys(...args: MailgunFullApiOperationArgs<"GET /v4/domains/{authority_name}/keys">): Promise<MailgunFullApiOperationResponseMap["GET /v4/domains/{authority_name}/keys"]>;
  DeactivateADomainKey(...args: MailgunFullApiOperationArgs<"PUT /v4/domains/{authority_name}/keys/{selector}/deactivate">): Promise<MailgunFullApiOperationResponseMap["PUT /v4/domains/{authority_name}/keys/{selector}/deactivate"]>;
  UpdateDKIMAuthority(...args: MailgunFullApiOperationArgs<"PUT /v3/domains/{name}/dkim_authority">): Promise<MailgunFullApiOperationResponseMap["PUT /v3/domains/{name}/dkim_authority"]>;
  UpdateADKIMSelector(...args: MailgunFullApiOperationArgs<"PUT /v3/domains/{name}/dkim_selector">): Promise<MailgunFullApiOperationResponseMap["PUT /v3/domains/{name}/dkim_selector"]>;
}

export const MailgunFullApiDomainKeysGeneratedFunctionNames = [
  "ListKeysForAllDomains",
  "CreateADomainKey",
  "DeleteADomainKey",
  "ActivateADomainKey",
  "ListDomainKeys",
  "DeactivateADomainKey",
  "UpdateDKIMAuthority",
  "UpdateADKIMSelector"
] as const satisfies readonly (keyof MailgunFullApiDomainKeysGeneratedClient)[];

export function createMailgunFullApiDomainKeysGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiDomainKeysGeneratedClient {
  return {
    ListKeysForAllDomains: (...args) => callOperation("GET /v1/dkim/keys", ...(args as MailgunFullApiOperationArgs<"GET /v1/dkim/keys">)),
    CreateADomainKey: (...args) => callOperation("POST /v1/dkim/keys", ...(args as MailgunFullApiOperationArgs<"POST /v1/dkim/keys">)),
    DeleteADomainKey: (...args) => callOperation("DELETE /v1/dkim/keys", ...(args as MailgunFullApiOperationArgs<"DELETE /v1/dkim/keys">)),
    ActivateADomainKey: (...args) => callOperation("PUT /v4/domains/{authority_name}/keys/{selector}/activate", ...(args as MailgunFullApiOperationArgs<"PUT /v4/domains/{authority_name}/keys/{selector}/activate">)),
    ListDomainKeys: (...args) => callOperation("GET /v4/domains/{authority_name}/keys", ...(args as MailgunFullApiOperationArgs<"GET /v4/domains/{authority_name}/keys">)),
    DeactivateADomainKey: (...args) => callOperation("PUT /v4/domains/{authority_name}/keys/{selector}/deactivate", ...(args as MailgunFullApiOperationArgs<"PUT /v4/domains/{authority_name}/keys/{selector}/deactivate">)),
    UpdateDKIMAuthority: (...args) => callOperation("PUT /v3/domains/{name}/dkim_authority", ...(args as MailgunFullApiOperationArgs<"PUT /v3/domains/{name}/dkim_authority">)),
    UpdateADKIMSelector: (...args) => callOperation("PUT /v3/domains/{name}/dkim_selector", ...(args as MailgunFullApiOperationArgs<"PUT /v3/domains/{name}/dkim_selector">)),
  };
}
