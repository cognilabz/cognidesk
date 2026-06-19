// Generated endpoint chunk for EightByEightContactCenterApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  EightByEightGeneratedOperationCaller,
  EightByEightContactCenterApiOperationArgs,
  EightByEightContactCenterApiOperationInput,
  EightByEightContactCenterApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { EightByEightContactCenterApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const EightByEightContactCenterApiRecordManagementOperationKeys = [
  "dynamic-campaigns:POST /{campaign-id}/customers",
  "dynamic-campaigns:DELETE /{campaign-id}/customers/{customer-id}"
] as const;
export type EightByEightContactCenterApiRecordManagementOperationKey = typeof EightByEightContactCenterApiRecordManagementOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiRecordManagementOperationPathParamMap {
  "dynamic-campaigns:POST /{campaign-id}/customers": { "campaign-id": EightByEightContactCenterApiPathParamValue };
  "dynamic-campaigns:DELETE /{campaign-id}/customers/{customer-id}": { "campaign-id": EightByEightContactCenterApiPathParamValue; "customer-id": EightByEightContactCenterApiPathParamValue };
}

export interface EightByEightContactCenterApiRecordManagementOperationRequestMap {
  "dynamic-campaigns:POST /{campaign-id}/customers": EightByEightContactCenterApiOperationInput<"dynamic-campaigns:POST /{campaign-id}/customers">;
  "dynamic-campaigns:DELETE /{campaign-id}/customers/{customer-id}": EightByEightContactCenterApiOperationInput<"dynamic-campaigns:DELETE /{campaign-id}/customers/{customer-id}">;
}

export interface EightByEightContactCenterApiRecordManagementGeneratedClient {
  Addcustomer(...args: EightByEightContactCenterApiOperationArgs<"dynamic-campaigns:POST /{campaign-id}/customers">): Promise<EightByEightContactCenterApiOperationResponseMap["dynamic-campaigns:POST /{campaign-id}/customers"]>;
  Deletecustomer(...args: EightByEightContactCenterApiOperationArgs<"dynamic-campaigns:DELETE /{campaign-id}/customers/{customer-id}">): Promise<EightByEightContactCenterApiOperationResponseMap["dynamic-campaigns:DELETE /{campaign-id}/customers/{customer-id}"]>;
}

export const EightByEightContactCenterApiRecordManagementGeneratedFunctionNames = [
  "Addcustomer",
  "Deletecustomer"
] as const satisfies readonly (keyof EightByEightContactCenterApiRecordManagementGeneratedClient)[];

export function createEightByEightContactCenterApiRecordManagementGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiRecordManagementGeneratedClient {
  return {
    Addcustomer: (...args) => callOperation("dynamic-campaigns:POST /{campaign-id}/customers", ...(args as EightByEightContactCenterApiOperationArgs<"dynamic-campaigns:POST /{campaign-id}/customers">)),
    Deletecustomer: (...args) => callOperation("dynamic-campaigns:DELETE /{campaign-id}/customers/{customer-id}", ...(args as EightByEightContactCenterApiOperationArgs<"dynamic-campaigns:DELETE /{campaign-id}/customers/{customer-id}">)),
  };
}
