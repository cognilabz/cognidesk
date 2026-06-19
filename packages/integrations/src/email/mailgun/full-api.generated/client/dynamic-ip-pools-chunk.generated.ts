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
export const MailgunFullApiDynamicIPPoolsOperationKeys = [
  "POST /v3/domains/{name}/dynamic_pools",
  "DELETE /v3/domains/{name}/dynamic_pools",
  "GET /v3/domains/dynamic_pools/assignable",
  "POST /v3/domains/all/dynamic_pools/enroll",
  "GET /v3/dynamic_pools",
  "POST /v3/dynamic_pools/all",
  "DELETE /v3/dynamic_pools/all",
  "POST /v3/dynamic_pools/{pool_name}/{ip}",
  "PATCH /v3/dynamic_pools/{pool_name}",
  "GET /v1/dynamic_pools/domains",
  "GET /v1/dynamic_pools/domains/{name}/preview",
  "GET /v1/dynamic_pools/domains/{name}/history",
  "PUT /v1/dynamic_pools/domains/{name}/override",
  "DELETE /v1/dynamic_pools/domains/{name}/override",
  "GET /v1/dynamic_pools/history"
] as const;
export type MailgunFullApiDynamicIPPoolsOperationKey = typeof MailgunFullApiDynamicIPPoolsOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiDynamicIPPoolsOperationPathParamMap {
  "POST /v3/domains/{name}/dynamic_pools": { "name": MailgunFullApiPathParamValue };
  "DELETE /v3/domains/{name}/dynamic_pools": { "name": MailgunFullApiPathParamValue };
  "GET /v3/domains/dynamic_pools/assignable": {};
  "POST /v3/domains/all/dynamic_pools/enroll": {};
  "GET /v3/dynamic_pools": {};
  "POST /v3/dynamic_pools/all": {};
  "DELETE /v3/dynamic_pools/all": {};
  "POST /v3/dynamic_pools/{pool_name}/{ip}": { "pool_name": MailgunFullApiPathParamValue; "ip": MailgunFullApiPathParamValue };
  "PATCH /v3/dynamic_pools/{pool_name}": { "pool_name": MailgunFullApiPathParamValue };
  "GET /v1/dynamic_pools/domains": {};
  "GET /v1/dynamic_pools/domains/{name}/preview": { "name": MailgunFullApiPathParamValue };
  "GET /v1/dynamic_pools/domains/{name}/history": { "name": MailgunFullApiPathParamValue };
  "PUT /v1/dynamic_pools/domains/{name}/override": { "name": MailgunFullApiPathParamValue };
  "DELETE /v1/dynamic_pools/domains/{name}/override": { "name": MailgunFullApiPathParamValue };
  "GET /v1/dynamic_pools/history": {};
}

export interface MailgunFullApiDynamicIPPoolsOperationRequestMap {
  "POST /v3/domains/{name}/dynamic_pools": MailgunFullApiOperationInput<"POST /v3/domains/{name}/dynamic_pools">;
  "DELETE /v3/domains/{name}/dynamic_pools": MailgunFullApiOperationInput<"DELETE /v3/domains/{name}/dynamic_pools">;
  "GET /v3/domains/dynamic_pools/assignable": MailgunFullApiOperationInput<"GET /v3/domains/dynamic_pools/assignable">;
  "POST /v3/domains/all/dynamic_pools/enroll": MailgunFullApiOperationInput<"POST /v3/domains/all/dynamic_pools/enroll">;
  "GET /v3/dynamic_pools": MailgunFullApiOperationInput<"GET /v3/dynamic_pools">;
  "POST /v3/dynamic_pools/all": MailgunFullApiOperationInput<"POST /v3/dynamic_pools/all">;
  "DELETE /v3/dynamic_pools/all": MailgunFullApiOperationInput<"DELETE /v3/dynamic_pools/all">;
  "POST /v3/dynamic_pools/{pool_name}/{ip}": MailgunFullApiOperationInput<"POST /v3/dynamic_pools/{pool_name}/{ip}">;
  "PATCH /v3/dynamic_pools/{pool_name}": MailgunFullApiOperationInput<"PATCH /v3/dynamic_pools/{pool_name}">;
  "GET /v1/dynamic_pools/domains": MailgunFullApiOperationInput<"GET /v1/dynamic_pools/domains">;
  "GET /v1/dynamic_pools/domains/{name}/preview": MailgunFullApiOperationInput<"GET /v1/dynamic_pools/domains/{name}/preview">;
  "GET /v1/dynamic_pools/domains/{name}/history": MailgunFullApiOperationInput<"GET /v1/dynamic_pools/domains/{name}/history">;
  "PUT /v1/dynamic_pools/domains/{name}/override": MailgunFullApiOperationInput<"PUT /v1/dynamic_pools/domains/{name}/override">;
  "DELETE /v1/dynamic_pools/domains/{name}/override": MailgunFullApiOperationInput<"DELETE /v1/dynamic_pools/domains/{name}/override">;
  "GET /v1/dynamic_pools/history": MailgunFullApiOperationInput<"GET /v1/dynamic_pools/history">;
}

export interface MailgunFullApiDynamicIPPoolsGeneratedClient {
  EnrollDomain(...args: MailgunFullApiOperationArgs<"POST /v3/domains/{name}/dynamic_pools">): Promise<MailgunFullApiOperationResponseMap["POST /v3/domains/{name}/dynamic_pools"]>;
  RemoveDomainFromDynamicIPPools(...args: MailgunFullApiOperationArgs<"DELETE /v3/domains/{name}/dynamic_pools">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/domains/{name}/dynamic_pools"]>;
  ListAssignableDomains(...args: MailgunFullApiOperationArgs<"GET /v3/domains/dynamic_pools/assignable">): Promise<MailgunFullApiOperationResponseMap["GET /v3/domains/dynamic_pools/assignable"]>;
  EnrollAllAccountDomains(...args: MailgunFullApiOperationArgs<"POST /v3/domains/all/dynamic_pools/enroll">): Promise<MailgunFullApiOperationResponseMap["POST /v3/domains/all/dynamic_pools/enroll"]>;
  ListAllDynamicIPPools(...args: MailgunFullApiOperationArgs<"GET /v3/dynamic_pools">): Promise<MailgunFullApiOperationResponseMap["GET /v3/dynamic_pools"]>;
  InitializeSetIPsForAllPools(...args: MailgunFullApiOperationArgs<"POST /v3/dynamic_pools/all">): Promise<MailgunFullApiOperationResponseMap["POST /v3/dynamic_pools/all"]>;
  RemoveAllDynamicIPPools(...args: MailgunFullApiOperationArgs<"DELETE /v3/dynamic_pools/all">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/dynamic_pools/all"]>;
  AddIPToDynamicIPPool(...args: MailgunFullApiOperationArgs<"POST /v3/dynamic_pools/{pool_name}/{ip}">): Promise<MailgunFullApiOperationResponseMap["POST /v3/dynamic_pools/{pool_name}/{ip}"]>;
  UpdatePoolIPs(...args: MailgunFullApiOperationArgs<"PATCH /v3/dynamic_pools/{pool_name}">): Promise<MailgunFullApiOperationResponseMap["PATCH /v3/dynamic_pools/{pool_name}"]>;
  ListAllDomainsAssignedToDynamicIPPools(...args: MailgunFullApiOperationArgs<"GET /v1/dynamic_pools/domains">): Promise<MailgunFullApiOperationResponseMap["GET /v1/dynamic_pools/domains"]>;
  PreviewDomainAssignment(...args: MailgunFullApiOperationArgs<"GET /v1/dynamic_pools/domains/{name}/preview">): Promise<MailgunFullApiOperationResponseMap["GET /v1/dynamic_pools/domains/{name}/preview"]>;
  ListDomainHistory(...args: MailgunFullApiOperationArgs<"GET /v1/dynamic_pools/domains/{name}/history">): Promise<MailgunFullApiOperationResponseMap["GET /v1/dynamic_pools/domains/{name}/history"]>;
  OverrideDomainAssignment(...args: MailgunFullApiOperationArgs<"PUT /v1/dynamic_pools/domains/{name}/override">): Promise<MailgunFullApiOperationResponseMap["PUT /v1/dynamic_pools/domains/{name}/override"]>;
  RemoveOverride(...args: MailgunFullApiOperationArgs<"DELETE /v1/dynamic_pools/domains/{name}/override">): Promise<MailgunFullApiOperationResponseMap["DELETE /v1/dynamic_pools/domains/{name}/override"]>;
  ListAccountHistory(...args: MailgunFullApiOperationArgs<"GET /v1/dynamic_pools/history">): Promise<MailgunFullApiOperationResponseMap["GET /v1/dynamic_pools/history"]>;
}

export const MailgunFullApiDynamicIPPoolsGeneratedFunctionNames = [
  "EnrollDomain",
  "RemoveDomainFromDynamicIPPools",
  "ListAssignableDomains",
  "EnrollAllAccountDomains",
  "ListAllDynamicIPPools",
  "InitializeSetIPsForAllPools",
  "RemoveAllDynamicIPPools",
  "AddIPToDynamicIPPool",
  "UpdatePoolIPs",
  "ListAllDomainsAssignedToDynamicIPPools",
  "PreviewDomainAssignment",
  "ListDomainHistory",
  "OverrideDomainAssignment",
  "RemoveOverride",
  "ListAccountHistory"
] as const satisfies readonly (keyof MailgunFullApiDynamicIPPoolsGeneratedClient)[];

export function createMailgunFullApiDynamicIPPoolsGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiDynamicIPPoolsGeneratedClient {
  return {
    EnrollDomain: (...args) => callOperation("POST /v3/domains/{name}/dynamic_pools", ...(args as MailgunFullApiOperationArgs<"POST /v3/domains/{name}/dynamic_pools">)),
    RemoveDomainFromDynamicIPPools: (...args) => callOperation("DELETE /v3/domains/{name}/dynamic_pools", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/domains/{name}/dynamic_pools">)),
    ListAssignableDomains: (...args) => callOperation("GET /v3/domains/dynamic_pools/assignable", ...(args as MailgunFullApiOperationArgs<"GET /v3/domains/dynamic_pools/assignable">)),
    EnrollAllAccountDomains: (...args) => callOperation("POST /v3/domains/all/dynamic_pools/enroll", ...(args as MailgunFullApiOperationArgs<"POST /v3/domains/all/dynamic_pools/enroll">)),
    ListAllDynamicIPPools: (...args) => callOperation("GET /v3/dynamic_pools", ...(args as MailgunFullApiOperationArgs<"GET /v3/dynamic_pools">)),
    InitializeSetIPsForAllPools: (...args) => callOperation("POST /v3/dynamic_pools/all", ...(args as MailgunFullApiOperationArgs<"POST /v3/dynamic_pools/all">)),
    RemoveAllDynamicIPPools: (...args) => callOperation("DELETE /v3/dynamic_pools/all", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/dynamic_pools/all">)),
    AddIPToDynamicIPPool: (...args) => callOperation("POST /v3/dynamic_pools/{pool_name}/{ip}", ...(args as MailgunFullApiOperationArgs<"POST /v3/dynamic_pools/{pool_name}/{ip}">)),
    UpdatePoolIPs: (...args) => callOperation("PATCH /v3/dynamic_pools/{pool_name}", ...(args as MailgunFullApiOperationArgs<"PATCH /v3/dynamic_pools/{pool_name}">)),
    ListAllDomainsAssignedToDynamicIPPools: (...args) => callOperation("GET /v1/dynamic_pools/domains", ...(args as MailgunFullApiOperationArgs<"GET /v1/dynamic_pools/domains">)),
    PreviewDomainAssignment: (...args) => callOperation("GET /v1/dynamic_pools/domains/{name}/preview", ...(args as MailgunFullApiOperationArgs<"GET /v1/dynamic_pools/domains/{name}/preview">)),
    ListDomainHistory: (...args) => callOperation("GET /v1/dynamic_pools/domains/{name}/history", ...(args as MailgunFullApiOperationArgs<"GET /v1/dynamic_pools/domains/{name}/history">)),
    OverrideDomainAssignment: (...args) => callOperation("PUT /v1/dynamic_pools/domains/{name}/override", ...(args as MailgunFullApiOperationArgs<"PUT /v1/dynamic_pools/domains/{name}/override">)),
    RemoveOverride: (...args) => callOperation("DELETE /v1/dynamic_pools/domains/{name}/override", ...(args as MailgunFullApiOperationArgs<"DELETE /v1/dynamic_pools/domains/{name}/override">)),
    ListAccountHistory: (...args) => callOperation("GET /v1/dynamic_pools/history", ...(args as MailgunFullApiOperationArgs<"GET /v1/dynamic_pools/history">)),
  };
}
