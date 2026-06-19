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
export const GenesysCloudFullApiWorkforceManagement05OperationKeys = [
  "putWorkforcemanagementBusinessunitTimeofflimitValues",
  "putWorkforcemanagementManagementunitTimeofflimitValues",
  "putWorkforcemanagementSchedulebidPreference"
] as const;
export type GenesysCloudFullApiWorkforceManagement05OperationKey = typeof GenesysCloudFullApiWorkforceManagement05OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiWorkforceManagement05OperationPathParamMap {
  "putWorkforcemanagementBusinessunitTimeofflimitValues": { "businessUnitId": GenesysCloudFullApiPathParamValue; "timeOffLimitId": GenesysCloudFullApiPathParamValue };
  "putWorkforcemanagementManagementunitTimeofflimitValues": { "managementUnitId": GenesysCloudFullApiPathParamValue; "timeOffLimitId": GenesysCloudFullApiPathParamValue };
  "putWorkforcemanagementSchedulebidPreference": { "bidId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiWorkforceManagement05OperationRequestMap {
  "putWorkforcemanagementBusinessunitTimeofflimitValues": GenesysCloudFullApiOperationInput<"putWorkforcemanagementBusinessunitTimeofflimitValues">;
  "putWorkforcemanagementManagementunitTimeofflimitValues": GenesysCloudFullApiOperationInput<"putWorkforcemanagementManagementunitTimeofflimitValues">;
  "putWorkforcemanagementSchedulebidPreference": GenesysCloudFullApiOperationInput<"putWorkforcemanagementSchedulebidPreference">;
}

export interface GenesysCloudFullApiWorkforceManagement05GeneratedClient {
  PutWorkforcemanagementBusinessunitTimeofflimitValues(...args: GenesysCloudFullApiOperationArgs<"putWorkforcemanagementBusinessunitTimeofflimitValues">): Promise<GenesysCloudFullApiOperationResponseMap["putWorkforcemanagementBusinessunitTimeofflimitValues"]>;
  PutWorkforcemanagementManagementunitTimeofflimitValues(...args: GenesysCloudFullApiOperationArgs<"putWorkforcemanagementManagementunitTimeofflimitValues">): Promise<GenesysCloudFullApiOperationResponseMap["putWorkforcemanagementManagementunitTimeofflimitValues"]>;
  PutWorkforcemanagementSchedulebidPreference(...args: GenesysCloudFullApiOperationArgs<"putWorkforcemanagementSchedulebidPreference">): Promise<GenesysCloudFullApiOperationResponseMap["putWorkforcemanagementSchedulebidPreference"]>;
}

export const GenesysCloudFullApiWorkforceManagement05GeneratedFunctionNames = [
  "PutWorkforcemanagementBusinessunitTimeofflimitValues",
  "PutWorkforcemanagementManagementunitTimeofflimitValues",
  "PutWorkforcemanagementSchedulebidPreference"
] as const satisfies readonly (keyof GenesysCloudFullApiWorkforceManagement05GeneratedClient)[];

export function createGenesysCloudFullApiWorkforceManagement05GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiWorkforceManagement05GeneratedClient {
  return {
    PutWorkforcemanagementBusinessunitTimeofflimitValues: (...args) => callOperation("putWorkforcemanagementBusinessunitTimeofflimitValues", ...(args as GenesysCloudFullApiOperationArgs<"putWorkforcemanagementBusinessunitTimeofflimitValues">)),
    PutWorkforcemanagementManagementunitTimeofflimitValues: (...args) => callOperation("putWorkforcemanagementManagementunitTimeofflimitValues", ...(args as GenesysCloudFullApiOperationArgs<"putWorkforcemanagementManagementunitTimeofflimitValues">)),
    PutWorkforcemanagementSchedulebidPreference: (...args) => callOperation("putWorkforcemanagementSchedulebidPreference", ...(args as GenesysCloudFullApiOperationArgs<"putWorkforcemanagementSchedulebidPreference">)),
  };
}
