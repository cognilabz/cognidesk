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
export const MailgunFullApiIPPoolsOperationKeys = [
  "GET /v3/ip_pools",
  "POST /v3/ip_pools",
  "GET /v3/ip_pools/{pool_id}",
  "DELETE /v3/ip_pools/{pool_id}",
  "PATCH /v3/ip_pools/{pool_id}",
  "GET /v3/ip_pools/{pool_id}/domains",
  "PUT /v3/ip_pools/{pool_id}/ips/{ip}",
  "DELETE /v3/ip_pools/{pool_id}/ips/{ip}",
  "POST /v3/ip_pools/{pool_id}/ips.json",
  "PUT /v3/ip_pools/{pool_id}/delegate",
  "DELETE /v3/ip_pools/{pool_id}/delegate"
] as const;
export type MailgunFullApiIPPoolsOperationKey = typeof MailgunFullApiIPPoolsOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiIPPoolsOperationPathParamMap {
  "GET /v3/ip_pools": {};
  "POST /v3/ip_pools": {};
  "GET /v3/ip_pools/{pool_id}": { "pool_id": MailgunFullApiPathParamValue };
  "DELETE /v3/ip_pools/{pool_id}": { "pool_id": MailgunFullApiPathParamValue };
  "PATCH /v3/ip_pools/{pool_id}": { "pool_id": MailgunFullApiPathParamValue };
  "GET /v3/ip_pools/{pool_id}/domains": { "pool_id": MailgunFullApiPathParamValue };
  "PUT /v3/ip_pools/{pool_id}/ips/{ip}": { "pool_id": MailgunFullApiPathParamValue; "ip": MailgunFullApiPathParamValue };
  "DELETE /v3/ip_pools/{pool_id}/ips/{ip}": { "pool_id": MailgunFullApiPathParamValue; "ip": MailgunFullApiPathParamValue };
  "POST /v3/ip_pools/{pool_id}/ips.json": { "pool_id": MailgunFullApiPathParamValue };
  "PUT /v3/ip_pools/{pool_id}/delegate": { "pool_id": MailgunFullApiPathParamValue };
  "DELETE /v3/ip_pools/{pool_id}/delegate": { "pool_id": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiIPPoolsOperationRequestMap {
  "GET /v3/ip_pools": MailgunFullApiOperationInput<"GET /v3/ip_pools">;
  "POST /v3/ip_pools": MailgunFullApiOperationInput<"POST /v3/ip_pools">;
  "GET /v3/ip_pools/{pool_id}": MailgunFullApiOperationInput<"GET /v3/ip_pools/{pool_id}">;
  "DELETE /v3/ip_pools/{pool_id}": MailgunFullApiOperationInput<"DELETE /v3/ip_pools/{pool_id}">;
  "PATCH /v3/ip_pools/{pool_id}": MailgunFullApiOperationInput<"PATCH /v3/ip_pools/{pool_id}">;
  "GET /v3/ip_pools/{pool_id}/domains": MailgunFullApiOperationInput<"GET /v3/ip_pools/{pool_id}/domains">;
  "PUT /v3/ip_pools/{pool_id}/ips/{ip}": MailgunFullApiOperationInput<"PUT /v3/ip_pools/{pool_id}/ips/{ip}">;
  "DELETE /v3/ip_pools/{pool_id}/ips/{ip}": MailgunFullApiOperationInput<"DELETE /v3/ip_pools/{pool_id}/ips/{ip}">;
  "POST /v3/ip_pools/{pool_id}/ips.json": MailgunFullApiOperationInput<"POST /v3/ip_pools/{pool_id}/ips.json">;
  "PUT /v3/ip_pools/{pool_id}/delegate": MailgunFullApiOperationInput<"PUT /v3/ip_pools/{pool_id}/delegate">;
  "DELETE /v3/ip_pools/{pool_id}/delegate": MailgunFullApiOperationInput<"DELETE /v3/ip_pools/{pool_id}/delegate">;
}

export interface MailgunFullApiIPPoolsGeneratedClient {
  ListDedicatedIPPoolsOfTheAccount(...args: MailgunFullApiOperationArgs<"GET /v3/ip_pools">): Promise<MailgunFullApiOperationResponseMap["GET /v3/ip_pools"]>;
  AddANewDIPPToTheAccount(...args: MailgunFullApiOperationArgs<"POST /v3/ip_pools">): Promise<MailgunFullApiOperationResponseMap["POST /v3/ip_pools"]>;
  GetDIPPDetails(...args: MailgunFullApiOperationArgs<"GET /v3/ip_pools/{pool_id}">): Promise<MailgunFullApiOperationResponseMap["GET /v3/ip_pools/{pool_id}"]>;
  DeleteTheDIPP(...args: MailgunFullApiOperationArgs<"DELETE /v3/ip_pools/{pool_id}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/ip_pools/{pool_id}"]>;
  EditDIPP(...args: MailgunFullApiOperationArgs<"PATCH /v3/ip_pools/{pool_id}">): Promise<MailgunFullApiOperationResponseMap["PATCH /v3/ip_pools/{pool_id}"]>;
  GetDomainsLinkedToDIPP(...args: MailgunFullApiOperationArgs<"GET /v3/ip_pools/{pool_id}/domains">): Promise<MailgunFullApiOperationResponseMap["GET /v3/ip_pools/{pool_id}/domains"]>;
  AddAnIPToADIPP(...args: MailgunFullApiOperationArgs<"PUT /v3/ip_pools/{pool_id}/ips/{ip}">): Promise<MailgunFullApiOperationResponseMap["PUT /v3/ip_pools/{pool_id}/ips/{ip}"]>;
  RemoveAnIPFromADIPP(...args: MailgunFullApiOperationArgs<"DELETE /v3/ip_pools/{pool_id}/ips/{ip}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/ip_pools/{pool_id}/ips/{ip}"]>;
  AddMultipleIPsToTheDIPP(...args: MailgunFullApiOperationArgs<"POST /v3/ip_pools/{pool_id}/ips.json">): Promise<MailgunFullApiOperationResponseMap["POST /v3/ip_pools/{pool_id}/ips.json"]>;
  DelegateDIPPToSubaccount(...args: MailgunFullApiOperationArgs<"PUT /v3/ip_pools/{pool_id}/delegate">): Promise<MailgunFullApiOperationResponseMap["PUT /v3/ip_pools/{pool_id}/delegate"]>;
  RevokeDIPPFromSubaccount(...args: MailgunFullApiOperationArgs<"DELETE /v3/ip_pools/{pool_id}/delegate">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/ip_pools/{pool_id}/delegate"]>;
}

export const MailgunFullApiIPPoolsGeneratedFunctionNames = [
  "ListDedicatedIPPoolsOfTheAccount",
  "AddANewDIPPToTheAccount",
  "GetDIPPDetails",
  "DeleteTheDIPP",
  "EditDIPP",
  "GetDomainsLinkedToDIPP",
  "AddAnIPToADIPP",
  "RemoveAnIPFromADIPP",
  "AddMultipleIPsToTheDIPP",
  "DelegateDIPPToSubaccount",
  "RevokeDIPPFromSubaccount"
] as const satisfies readonly (keyof MailgunFullApiIPPoolsGeneratedClient)[];

export function createMailgunFullApiIPPoolsGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiIPPoolsGeneratedClient {
  return {
    ListDedicatedIPPoolsOfTheAccount: (...args) => callOperation("GET /v3/ip_pools", ...(args as MailgunFullApiOperationArgs<"GET /v3/ip_pools">)),
    AddANewDIPPToTheAccount: (...args) => callOperation("POST /v3/ip_pools", ...(args as MailgunFullApiOperationArgs<"POST /v3/ip_pools">)),
    GetDIPPDetails: (...args) => callOperation("GET /v3/ip_pools/{pool_id}", ...(args as MailgunFullApiOperationArgs<"GET /v3/ip_pools/{pool_id}">)),
    DeleteTheDIPP: (...args) => callOperation("DELETE /v3/ip_pools/{pool_id}", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/ip_pools/{pool_id}">)),
    EditDIPP: (...args) => callOperation("PATCH /v3/ip_pools/{pool_id}", ...(args as MailgunFullApiOperationArgs<"PATCH /v3/ip_pools/{pool_id}">)),
    GetDomainsLinkedToDIPP: (...args) => callOperation("GET /v3/ip_pools/{pool_id}/domains", ...(args as MailgunFullApiOperationArgs<"GET /v3/ip_pools/{pool_id}/domains">)),
    AddAnIPToADIPP: (...args) => callOperation("PUT /v3/ip_pools/{pool_id}/ips/{ip}", ...(args as MailgunFullApiOperationArgs<"PUT /v3/ip_pools/{pool_id}/ips/{ip}">)),
    RemoveAnIPFromADIPP: (...args) => callOperation("DELETE /v3/ip_pools/{pool_id}/ips/{ip}", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/ip_pools/{pool_id}/ips/{ip}">)),
    AddMultipleIPsToTheDIPP: (...args) => callOperation("POST /v3/ip_pools/{pool_id}/ips.json", ...(args as MailgunFullApiOperationArgs<"POST /v3/ip_pools/{pool_id}/ips.json">)),
    DelegateDIPPToSubaccount: (...args) => callOperation("PUT /v3/ip_pools/{pool_id}/delegate", ...(args as MailgunFullApiOperationArgs<"PUT /v3/ip_pools/{pool_id}/delegate">)),
    RevokeDIPPFromSubaccount: (...args) => callOperation("DELETE /v3/ip_pools/{pool_id}/delegate", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/ip_pools/{pool_id}/delegate">)),
  };
}
