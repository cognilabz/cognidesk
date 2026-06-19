// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiBillingOperationKeys = [
  "getBillingReportsBillableusage",
  "getBillingTrusteebillingoverviewTrustorOrgId"
] as const;
export type GenesysCloudFullApiBillingOperationKey = typeof GenesysCloudFullApiBillingOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiBillingOperationPathParamMap {
  "getBillingReportsBillableusage": {};
  "getBillingTrusteebillingoverviewTrustorOrgId": { "trustorOrgId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiBillingOperationRequestMap {
  "getBillingReportsBillableusage": GenesysCloudFullApiOperationInput<"getBillingReportsBillableusage">;
  "getBillingTrusteebillingoverviewTrustorOrgId": GenesysCloudFullApiOperationInput<"getBillingTrusteebillingoverviewTrustorOrgId">;
}

export interface GenesysCloudFullApiBillingGeneratedClient {
  GetBillingReportsBillableusage(...args: GenesysCloudFullApiOperationArgs<"getBillingReportsBillableusage">): Promise<GenesysCloudFullApiOperationResponseMap["getBillingReportsBillableusage"]>;
  GetBillingTrusteebillingoverviewTrustorOrgId(...args: GenesysCloudFullApiOperationArgs<"getBillingTrusteebillingoverviewTrustorOrgId">): Promise<GenesysCloudFullApiOperationResponseMap["getBillingTrusteebillingoverviewTrustorOrgId"]>;
}

export const GenesysCloudFullApiBillingGeneratedFunctionNames = [
  "GetBillingReportsBillableusage",
  "GetBillingTrusteebillingoverviewTrustorOrgId"
] as const satisfies readonly (keyof GenesysCloudFullApiBillingGeneratedClient)[];

export function createGenesysCloudFullApiBillingGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiBillingGeneratedClient {
  return {
    GetBillingReportsBillableusage: (...args) => callOperation("getBillingReportsBillableusage", ...(args as GenesysCloudFullApiOperationArgs<"getBillingReportsBillableusage">)),
    GetBillingTrusteebillingoverviewTrustorOrgId: (...args) => callOperation("getBillingTrusteebillingoverviewTrustorOrgId", ...(args as GenesysCloudFullApiOperationArgs<"getBillingTrusteebillingoverviewTrustorOrgId">)),
  };
}
