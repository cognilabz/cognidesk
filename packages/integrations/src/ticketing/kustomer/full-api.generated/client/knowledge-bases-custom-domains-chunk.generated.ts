// Generated endpoint chunk for KustomerFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  KustomerGeneratedOperationCaller,
  KustomerFullApiOperationArgs,
  KustomerFullApiOperationInput,
  KustomerFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { KustomerFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const KustomerFullApiKnowledgeBasesCustomDomainsOperationKeys = [
  "CreateCustomDomain",
  "DeleteCustomDomain",
  "UpdateCustomDomain",
  "GetCustomDomains",
  "GetCustomDomainByID"
] as const;
export type KustomerFullApiKnowledgeBasesCustomDomainsOperationKey = typeof KustomerFullApiKnowledgeBasesCustomDomainsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiKnowledgeBasesCustomDomainsOperationPathParamMap {
  "CreateCustomDomain": { "id": KustomerFullApiPathParamValue };
  "DeleteCustomDomain": { "id": KustomerFullApiPathParamValue; "domainId": KustomerFullApiPathParamValue };
  "UpdateCustomDomain": { "id": KustomerFullApiPathParamValue; "domainId": KustomerFullApiPathParamValue };
  "GetCustomDomains": { "id": KustomerFullApiPathParamValue };
  "GetCustomDomainByID": { "id": KustomerFullApiPathParamValue; "domainId": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiKnowledgeBasesCustomDomainsOperationRequestMap {
  "CreateCustomDomain": KustomerFullApiOperationInput<"CreateCustomDomain">;
  "DeleteCustomDomain": KustomerFullApiOperationInput<"DeleteCustomDomain">;
  "UpdateCustomDomain": KustomerFullApiOperationInput<"UpdateCustomDomain">;
  "GetCustomDomains": KustomerFullApiOperationInput<"GetCustomDomains">;
  "GetCustomDomainByID": KustomerFullApiOperationInput<"GetCustomDomainByID">;
}

export interface KustomerFullApiKnowledgeBasesCustomDomainsGeneratedClient {
  kustomerCreateCustomDomain(...args: KustomerFullApiOperationArgs<"CreateCustomDomain">): Promise<KustomerFullApiOperationResponseMap["CreateCustomDomain"]>;
  kustomerDeleteCustomDomain(...args: KustomerFullApiOperationArgs<"DeleteCustomDomain">): Promise<KustomerFullApiOperationResponseMap["DeleteCustomDomain"]>;
  kustomerUpdateCustomDomain(...args: KustomerFullApiOperationArgs<"UpdateCustomDomain">): Promise<KustomerFullApiOperationResponseMap["UpdateCustomDomain"]>;
  kustomerGetCustomDomains(...args: KustomerFullApiOperationArgs<"GetCustomDomains">): Promise<KustomerFullApiOperationResponseMap["GetCustomDomains"]>;
  kustomerGetCustomDomainByID(...args: KustomerFullApiOperationArgs<"GetCustomDomainByID">): Promise<KustomerFullApiOperationResponseMap["GetCustomDomainByID"]>;
}

export const KustomerFullApiKnowledgeBasesCustomDomainsGeneratedFunctionNames = [
  "kustomerCreateCustomDomain",
  "kustomerDeleteCustomDomain",
  "kustomerUpdateCustomDomain",
  "kustomerGetCustomDomains",
  "kustomerGetCustomDomainByID"
] as const satisfies readonly (keyof KustomerFullApiKnowledgeBasesCustomDomainsGeneratedClient)[];

export function createKustomerFullApiKnowledgeBasesCustomDomainsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiKnowledgeBasesCustomDomainsGeneratedClient {
  return {
    kustomerCreateCustomDomain: (...args) => callOperation("CreateCustomDomain", ...(args as KustomerFullApiOperationArgs<"CreateCustomDomain">)),
    kustomerDeleteCustomDomain: (...args) => callOperation("DeleteCustomDomain", ...(args as KustomerFullApiOperationArgs<"DeleteCustomDomain">)),
    kustomerUpdateCustomDomain: (...args) => callOperation("UpdateCustomDomain", ...(args as KustomerFullApiOperationArgs<"UpdateCustomDomain">)),
    kustomerGetCustomDomains: (...args) => callOperation("GetCustomDomains", ...(args as KustomerFullApiOperationArgs<"GetCustomDomains">)),
    kustomerGetCustomDomainByID: (...args) => callOperation("GetCustomDomainByID", ...(args as KustomerFullApiOperationArgs<"GetCustomDomainByID">)),
  };
}
