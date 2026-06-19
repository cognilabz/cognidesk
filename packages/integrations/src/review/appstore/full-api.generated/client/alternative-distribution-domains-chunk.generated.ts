// Generated endpoint chunk for AppStoreFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AppStoreGeneratedOperationCaller,
  AppStoreFullApiOperationArgs,
  AppStoreFullApiOperationInput,
  AppStoreFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AppStoreFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AppStoreFullApiAlternativeDistributionDomainsOperationKeys = [
  "alternativeDistributionDomains_createInstance",
  "alternativeDistributionDomains_deleteInstance",
  "alternativeDistributionDomains_getCollection",
  "alternativeDistributionDomains_getInstance"
] as const;
export type AppStoreFullApiAlternativeDistributionDomainsOperationKey = typeof AppStoreFullApiAlternativeDistributionDomainsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAlternativeDistributionDomainsOperationPathParamMap {
  "alternativeDistributionDomains_createInstance": {};
  "alternativeDistributionDomains_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "alternativeDistributionDomains_getCollection": {};
  "alternativeDistributionDomains_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAlternativeDistributionDomainsOperationRequestMap {
  "alternativeDistributionDomains_createInstance": AppStoreFullApiOperationInput<"alternativeDistributionDomains_createInstance">;
  "alternativeDistributionDomains_deleteInstance": AppStoreFullApiOperationInput<"alternativeDistributionDomains_deleteInstance">;
  "alternativeDistributionDomains_getCollection": AppStoreFullApiOperationInput<"alternativeDistributionDomains_getCollection">;
  "alternativeDistributionDomains_getInstance": AppStoreFullApiOperationInput<"alternativeDistributionDomains_getInstance">;
}

export interface AppStoreFullApiAlternativeDistributionDomainsGeneratedClient {
  AlternativeDistributionDomainsCreateInstance(...args: AppStoreFullApiOperationArgs<"alternativeDistributionDomains_createInstance">): Promise<AppStoreFullApiOperationResponseMap["alternativeDistributionDomains_createInstance"]>;
  AlternativeDistributionDomainsDeleteInstance(...args: AppStoreFullApiOperationArgs<"alternativeDistributionDomains_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["alternativeDistributionDomains_deleteInstance"]>;
  AlternativeDistributionDomainsGetCollection(...args: AppStoreFullApiOperationArgs<"alternativeDistributionDomains_getCollection">): Promise<AppStoreFullApiOperationResponseMap["alternativeDistributionDomains_getCollection"]>;
  AlternativeDistributionDomainsGetInstance(...args: AppStoreFullApiOperationArgs<"alternativeDistributionDomains_getInstance">): Promise<AppStoreFullApiOperationResponseMap["alternativeDistributionDomains_getInstance"]>;
}

export const AppStoreFullApiAlternativeDistributionDomainsGeneratedFunctionNames = [
  "AlternativeDistributionDomainsCreateInstance",
  "AlternativeDistributionDomainsDeleteInstance",
  "AlternativeDistributionDomainsGetCollection",
  "AlternativeDistributionDomainsGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiAlternativeDistributionDomainsGeneratedClient)[];

export function createAppStoreFullApiAlternativeDistributionDomainsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAlternativeDistributionDomainsGeneratedClient {
  return {
    AlternativeDistributionDomainsCreateInstance: (...args) => callOperation("alternativeDistributionDomains_createInstance", ...(args as AppStoreFullApiOperationArgs<"alternativeDistributionDomains_createInstance">)),
    AlternativeDistributionDomainsDeleteInstance: (...args) => callOperation("alternativeDistributionDomains_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"alternativeDistributionDomains_deleteInstance">)),
    AlternativeDistributionDomainsGetCollection: (...args) => callOperation("alternativeDistributionDomains_getCollection", ...(args as AppStoreFullApiOperationArgs<"alternativeDistributionDomains_getCollection">)),
    AlternativeDistributionDomainsGetInstance: (...args) => callOperation("alternativeDistributionDomains_getInstance", ...(args as AppStoreFullApiOperationArgs<"alternativeDistributionDomains_getInstance">)),
  };
}
