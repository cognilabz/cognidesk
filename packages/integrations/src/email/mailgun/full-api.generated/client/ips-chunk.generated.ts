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
export const MailgunFullApiIPsOperationKeys = [
  "GET /v3/ips/domain/{name}",
  "PATCH /v3/ips/domain/{name}",
  "DELETE /v3/domains/{name}/ips/{ip}",
  "DELETE /v3/domains/{name}/pool/{ip}",
  "GET /v3/ips/account/settings",
  "PATCH /v3/ips/account/settings",
  "GET /v3/ips",
  "GET /v3/ips/{ip}",
  "GET /v3/ips/{ip}/domains",
  "POST /v3/ips/{ip}/domains",
  "DELETE /v3/ips/{ip}/domains",
  "POST /v3/ips/{addr}/ip_band",
  "GET /v3/ips/request/new",
  "POST /v3/ips/request/new",
  "GET /v3/ips/details/all",
  "PATCH /v3/ips/subaccounts"
] as const;
export type MailgunFullApiIPsOperationKey = typeof MailgunFullApiIPsOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiIPsOperationPathParamMap {
  "GET /v3/ips/domain/{name}": { "name": MailgunFullApiPathParamValue };
  "PATCH /v3/ips/domain/{name}": { "name": MailgunFullApiPathParamValue };
  "DELETE /v3/domains/{name}/ips/{ip}": { "name": MailgunFullApiPathParamValue; "ip": MailgunFullApiPathParamValue };
  "DELETE /v3/domains/{name}/pool/{ip}": { "name": MailgunFullApiPathParamValue; "ip": MailgunFullApiPathParamValue };
  "GET /v3/ips/account/settings": {};
  "PATCH /v3/ips/account/settings": {};
  "GET /v3/ips": {};
  "GET /v3/ips/{ip}": { "ip": MailgunFullApiPathParamValue };
  "GET /v3/ips/{ip}/domains": { "ip": MailgunFullApiPathParamValue };
  "POST /v3/ips/{ip}/domains": { "ip": MailgunFullApiPathParamValue };
  "DELETE /v3/ips/{ip}/domains": { "ip": MailgunFullApiPathParamValue };
  "POST /v3/ips/{addr}/ip_band": { "addr": MailgunFullApiPathParamValue };
  "GET /v3/ips/request/new": {};
  "POST /v3/ips/request/new": {};
  "GET /v3/ips/details/all": {};
  "PATCH /v3/ips/subaccounts": {};
}

export interface MailgunFullApiIPsOperationRequestMap {
  "GET /v3/ips/domain/{name}": MailgunFullApiOperationInput<"GET /v3/ips/domain/{name}">;
  "PATCH /v3/ips/domain/{name}": MailgunFullApiOperationInput<"PATCH /v3/ips/domain/{name}">;
  "DELETE /v3/domains/{name}/ips/{ip}": MailgunFullApiOperationInput<"DELETE /v3/domains/{name}/ips/{ip}">;
  "DELETE /v3/domains/{name}/pool/{ip}": MailgunFullApiOperationInput<"DELETE /v3/domains/{name}/pool/{ip}">;
  "GET /v3/ips/account/settings": MailgunFullApiOperationInput<"GET /v3/ips/account/settings">;
  "PATCH /v3/ips/account/settings": MailgunFullApiOperationInput<"PATCH /v3/ips/account/settings">;
  "GET /v3/ips": MailgunFullApiOperationInput<"GET /v3/ips">;
  "GET /v3/ips/{ip}": MailgunFullApiOperationInput<"GET /v3/ips/{ip}">;
  "GET /v3/ips/{ip}/domains": MailgunFullApiOperationInput<"GET /v3/ips/{ip}/domains">;
  "POST /v3/ips/{ip}/domains": MailgunFullApiOperationInput<"POST /v3/ips/{ip}/domains">;
  "DELETE /v3/ips/{ip}/domains": MailgunFullApiOperationInput<"DELETE /v3/ips/{ip}/domains">;
  "POST /v3/ips/{addr}/ip_band": MailgunFullApiOperationInput<"POST /v3/ips/{addr}/ip_band">;
  "GET /v3/ips/request/new": MailgunFullApiOperationInput<"GET /v3/ips/request/new">;
  "POST /v3/ips/request/new": MailgunFullApiOperationInput<"POST /v3/ips/request/new">;
  "GET /v3/ips/details/all": MailgunFullApiOperationInput<"GET /v3/ips/details/all">;
  "PATCH /v3/ips/subaccounts": MailgunFullApiOperationInput<"PATCH /v3/ips/subaccounts">;
}

export interface MailgunFullApiIPsGeneratedClient {
  GetTheDedicatedIPPoolUsedForSpilloverForADomain(...args: MailgunFullApiOperationArgs<"GET /v3/ips/domain/{name}">): Promise<MailgunFullApiOperationResponseMap["GET /v3/ips/domain/{name}"]>;
  SetOrModifyTheDediciatedIPPoolUsedForSpilloverForADomain(...args: MailgunFullApiOperationArgs<"PATCH /v3/ips/domain/{name}">): Promise<MailgunFullApiOperationResponseMap["PATCH /v3/ips/domain/{name}"]>;
  RemoveAnIPFromTheDomainPoolUnlinkADIPPOrRemoveTheDomainPool(...args: MailgunFullApiOperationArgs<"DELETE /v3/domains/{name}/ips/{ip}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/domains/{name}/ips/{ip}"]>;
  RemoveAnIPFromTheDomainPoolUnlinkADIPPOrRemoveTheDomainPool2(...args: MailgunFullApiOperationArgs<"DELETE /v3/domains/{name}/pool/{ip}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/domains/{name}/pool/{ip}"]>;
  GetDIPPSpilloverSettingsForAnAccount(...args: MailgunFullApiOperationArgs<"GET /v3/ips/account/settings">): Promise<MailgunFullApiOperationResponseMap["GET /v3/ips/account/settings"]>;
  SetOrModifyTheDedicatedIPPoolUsedForIPSpillover(...args: MailgunFullApiOperationArgs<"PATCH /v3/ips/account/settings">): Promise<MailgunFullApiOperationResponseMap["PATCH /v3/ips/account/settings"]>;
  ListAccountIPs(...args: MailgunFullApiOperationArgs<"GET /v3/ips">): Promise<MailgunFullApiOperationResponseMap["GET /v3/ips"]>;
  GetDetailsAboutAccountIP(...args: MailgunFullApiOperationArgs<"GET /v3/ips/{ip}">): Promise<MailgunFullApiOperationResponseMap["GET /v3/ips/{ip}"]>;
  GetAllDomainsOfAnAccountWhereASpecificIPIsAssigned(...args: MailgunFullApiOperationArgs<"GET /v3/ips/{ip}/domains">): Promise<MailgunFullApiOperationResponseMap["GET /v3/ips/{ip}/domains"]>;
  AssignAnIPToAllAccountDomains(...args: MailgunFullApiOperationArgs<"POST /v3/ips/{ip}/domains">): Promise<MailgunFullApiOperationResponseMap["POST /v3/ips/{ip}/domains"]>;
  RemoveAnIPFromAllAccountDomains(...args: MailgunFullApiOperationArgs<"DELETE /v3/ips/{ip}/domains">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/ips/{ip}/domains"]>;
  PlaceAccountIPIntoADedicatedIPBand(...args: MailgunFullApiOperationArgs<"POST /v3/ips/{addr}/ip_band">): Promise<MailgunFullApiOperationResponseMap["POST /v3/ips/{addr}/ip_band"]>;
  ReturnTheNumberOfIPsAvailableToTheAccountPerItsBillingPlan(...args: MailgunFullApiOperationArgs<"GET /v3/ips/request/new">): Promise<MailgunFullApiOperationResponseMap["GET /v3/ips/request/new"]>;
  AddANewDedicatedIPToTheAccount(...args: MailgunFullApiOperationArgs<"POST /v3/ips/request/new">): Promise<MailgunFullApiOperationResponseMap["POST /v3/ips/request/new"]>;
  ListAccountIPsDetailedView(...args: MailgunFullApiOperationArgs<"GET /v3/ips/details/all">): Promise<MailgunFullApiOperationResponseMap["GET /v3/ips/details/all"]>;
  UpdateSubaccountIPAssignments(...args: MailgunFullApiOperationArgs<"PATCH /v3/ips/subaccounts">): Promise<MailgunFullApiOperationResponseMap["PATCH /v3/ips/subaccounts"]>;
}

export const MailgunFullApiIPsGeneratedFunctionNames = [
  "GetTheDedicatedIPPoolUsedForSpilloverForADomain",
  "SetOrModifyTheDediciatedIPPoolUsedForSpilloverForADomain",
  "RemoveAnIPFromTheDomainPoolUnlinkADIPPOrRemoveTheDomainPool",
  "RemoveAnIPFromTheDomainPoolUnlinkADIPPOrRemoveTheDomainPool2",
  "GetDIPPSpilloverSettingsForAnAccount",
  "SetOrModifyTheDedicatedIPPoolUsedForIPSpillover",
  "ListAccountIPs",
  "GetDetailsAboutAccountIP",
  "GetAllDomainsOfAnAccountWhereASpecificIPIsAssigned",
  "AssignAnIPToAllAccountDomains",
  "RemoveAnIPFromAllAccountDomains",
  "PlaceAccountIPIntoADedicatedIPBand",
  "ReturnTheNumberOfIPsAvailableToTheAccountPerItsBillingPlan",
  "AddANewDedicatedIPToTheAccount",
  "ListAccountIPsDetailedView",
  "UpdateSubaccountIPAssignments"
] as const satisfies readonly (keyof MailgunFullApiIPsGeneratedClient)[];

export function createMailgunFullApiIPsGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiIPsGeneratedClient {
  return {
    GetTheDedicatedIPPoolUsedForSpilloverForADomain: (...args) => callOperation("GET /v3/ips/domain/{name}", ...(args as MailgunFullApiOperationArgs<"GET /v3/ips/domain/{name}">)),
    SetOrModifyTheDediciatedIPPoolUsedForSpilloverForADomain: (...args) => callOperation("PATCH /v3/ips/domain/{name}", ...(args as MailgunFullApiOperationArgs<"PATCH /v3/ips/domain/{name}">)),
    RemoveAnIPFromTheDomainPoolUnlinkADIPPOrRemoveTheDomainPool: (...args) => callOperation("DELETE /v3/domains/{name}/ips/{ip}", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/domains/{name}/ips/{ip}">)),
    RemoveAnIPFromTheDomainPoolUnlinkADIPPOrRemoveTheDomainPool2: (...args) => callOperation("DELETE /v3/domains/{name}/pool/{ip}", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/domains/{name}/pool/{ip}">)),
    GetDIPPSpilloverSettingsForAnAccount: (...args) => callOperation("GET /v3/ips/account/settings", ...(args as MailgunFullApiOperationArgs<"GET /v3/ips/account/settings">)),
    SetOrModifyTheDedicatedIPPoolUsedForIPSpillover: (...args) => callOperation("PATCH /v3/ips/account/settings", ...(args as MailgunFullApiOperationArgs<"PATCH /v3/ips/account/settings">)),
    ListAccountIPs: (...args) => callOperation("GET /v3/ips", ...(args as MailgunFullApiOperationArgs<"GET /v3/ips">)),
    GetDetailsAboutAccountIP: (...args) => callOperation("GET /v3/ips/{ip}", ...(args as MailgunFullApiOperationArgs<"GET /v3/ips/{ip}">)),
    GetAllDomainsOfAnAccountWhereASpecificIPIsAssigned: (...args) => callOperation("GET /v3/ips/{ip}/domains", ...(args as MailgunFullApiOperationArgs<"GET /v3/ips/{ip}/domains">)),
    AssignAnIPToAllAccountDomains: (...args) => callOperation("POST /v3/ips/{ip}/domains", ...(args as MailgunFullApiOperationArgs<"POST /v3/ips/{ip}/domains">)),
    RemoveAnIPFromAllAccountDomains: (...args) => callOperation("DELETE /v3/ips/{ip}/domains", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/ips/{ip}/domains">)),
    PlaceAccountIPIntoADedicatedIPBand: (...args) => callOperation("POST /v3/ips/{addr}/ip_band", ...(args as MailgunFullApiOperationArgs<"POST /v3/ips/{addr}/ip_band">)),
    ReturnTheNumberOfIPsAvailableToTheAccountPerItsBillingPlan: (...args) => callOperation("GET /v3/ips/request/new", ...(args as MailgunFullApiOperationArgs<"GET /v3/ips/request/new">)),
    AddANewDedicatedIPToTheAccount: (...args) => callOperation("POST /v3/ips/request/new", ...(args as MailgunFullApiOperationArgs<"POST /v3/ips/request/new">)),
    ListAccountIPsDetailedView: (...args) => callOperation("GET /v3/ips/details/all", ...(args as MailgunFullApiOperationArgs<"GET /v3/ips/details/all">)),
    UpdateSubaccountIPAssignments: (...args) => callOperation("PATCH /v3/ips/subaccounts", ...(args as MailgunFullApiOperationArgs<"PATCH /v3/ips/subaccounts">)),
  };
}
