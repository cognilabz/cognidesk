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
export const KustomerFullApiCompaniesOperationKeys = [
  "GetCompanies",
  "CreateaCompany",
  "GetCompanybyID",
  "UpdateCompanyAttributes",
  "FindCompanyKObjects"
] as const;
export type KustomerFullApiCompaniesOperationKey = typeof KustomerFullApiCompaniesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiCompaniesOperationPathParamMap {
  "GetCompanies": {};
  "CreateaCompany": {};
  "GetCompanybyID": { "id": KustomerFullApiPathParamValue };
  "UpdateCompanyAttributes": { "id": KustomerFullApiPathParamValue };
  "FindCompanyKObjects": { "id": KustomerFullApiPathParamValue; "name": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiCompaniesOperationRequestMap {
  "GetCompanies": KustomerFullApiOperationInput<"GetCompanies">;
  "CreateaCompany": KustomerFullApiOperationInput<"CreateaCompany">;
  "GetCompanybyID": KustomerFullApiOperationInput<"GetCompanybyID">;
  "UpdateCompanyAttributes": KustomerFullApiOperationInput<"UpdateCompanyAttributes">;
  "FindCompanyKObjects": KustomerFullApiOperationInput<"FindCompanyKObjects">;
}

export interface KustomerFullApiCompaniesGeneratedClient {
  kustomerGetCompanies(...args: KustomerFullApiOperationArgs<"GetCompanies">): Promise<KustomerFullApiOperationResponseMap["GetCompanies"]>;
  kustomerCreateaCompany(...args: KustomerFullApiOperationArgs<"CreateaCompany">): Promise<KustomerFullApiOperationResponseMap["CreateaCompany"]>;
  kustomerGetCompanybyID(...args: KustomerFullApiOperationArgs<"GetCompanybyID">): Promise<KustomerFullApiOperationResponseMap["GetCompanybyID"]>;
  kustomerUpdateCompanyAttributes(...args: KustomerFullApiOperationArgs<"UpdateCompanyAttributes">): Promise<KustomerFullApiOperationResponseMap["UpdateCompanyAttributes"]>;
  kustomerFindCompanyKObjects(...args: KustomerFullApiOperationArgs<"FindCompanyKObjects">): Promise<KustomerFullApiOperationResponseMap["FindCompanyKObjects"]>;
}

export const KustomerFullApiCompaniesGeneratedFunctionNames = [
  "kustomerGetCompanies",
  "kustomerCreateaCompany",
  "kustomerGetCompanybyID",
  "kustomerUpdateCompanyAttributes",
  "kustomerFindCompanyKObjects"
] as const satisfies readonly (keyof KustomerFullApiCompaniesGeneratedClient)[];

export function createKustomerFullApiCompaniesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiCompaniesGeneratedClient {
  return {
    kustomerGetCompanies: (...args) => callOperation("GetCompanies", ...(args as KustomerFullApiOperationArgs<"GetCompanies">)),
    kustomerCreateaCompany: (...args) => callOperation("CreateaCompany", ...(args as KustomerFullApiOperationArgs<"CreateaCompany">)),
    kustomerGetCompanybyID: (...args) => callOperation("GetCompanybyID", ...(args as KustomerFullApiOperationArgs<"GetCompanybyID">)),
    kustomerUpdateCompanyAttributes: (...args) => callOperation("UpdateCompanyAttributes", ...(args as KustomerFullApiOperationArgs<"UpdateCompanyAttributes">)),
    kustomerFindCompanyKObjects: (...args) => callOperation("FindCompanyKObjects", ...(args as KustomerFullApiOperationArgs<"FindCompanyKObjects">)),
  };
}
