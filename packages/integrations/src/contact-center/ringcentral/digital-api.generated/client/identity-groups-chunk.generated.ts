// Generated endpoint chunk for RingCentralDigitalApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralDigitalGeneratedOperationCaller,
  RingCentralDigitalApiOperationArgs,
  RingCentralDigitalApiOperationInput,
  RingCentralDigitalApiPathParamValue,
} from "../../digital-api-client.generated.js";
import type { RingCentralDigitalApiOperationResponseMap } from "../../digital-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralDigitalApiIdentityGroupsOperationKeys = [
  "GET /identity_groups",
  "GET /identity_groups/{identityGroupId}",
  "PUT /identity_groups/{identityGroupId}",
  "PUT /identity_groups/{identityGroupId}/merge"
] as const;
export type RingCentralDigitalApiIdentityGroupsOperationKey = typeof RingCentralDigitalApiIdentityGroupsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiIdentityGroupsOperationPathParamMap {
  "GET /identity_groups": {};
  "GET /identity_groups/{identityGroupId}": { "identityGroupId": RingCentralDigitalApiPathParamValue };
  "PUT /identity_groups/{identityGroupId}": { "identityGroupId": RingCentralDigitalApiPathParamValue };
  "PUT /identity_groups/{identityGroupId}/merge": { "identityGroupId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiIdentityGroupsOperationRequestMap {
  "GET /identity_groups": RingCentralDigitalApiOperationInput<"GET /identity_groups">;
  "GET /identity_groups/{identityGroupId}": RingCentralDigitalApiOperationInput<"GET /identity_groups/{identityGroupId}">;
  "PUT /identity_groups/{identityGroupId}": RingCentralDigitalApiOperationInput<"PUT /identity_groups/{identityGroupId}">;
  "PUT /identity_groups/{identityGroupId}/merge": RingCentralDigitalApiOperationInput<"PUT /identity_groups/{identityGroupId}/merge">;
}

export interface RingCentralDigitalApiIdentityGroupsGeneratedClient {
  GetAllIdentityGroups(...args: RingCentralDigitalApiOperationArgs<"GET /identity_groups">): Promise<RingCentralDigitalApiOperationResponseMap["GET /identity_groups"]>;
  GetIdentityGroup(...args: RingCentralDigitalApiOperationArgs<"GET /identity_groups/{identityGroupId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /identity_groups/{identityGroupId}"]>;
  UpdateIdentityGroup(...args: RingCentralDigitalApiOperationArgs<"PUT /identity_groups/{identityGroupId}">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /identity_groups/{identityGroupId}"]>;
  MergeIdentityGroup(...args: RingCentralDigitalApiOperationArgs<"PUT /identity_groups/{identityGroupId}/merge">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /identity_groups/{identityGroupId}/merge"]>;
}

export const RingCentralDigitalApiIdentityGroupsGeneratedFunctionNames = [
  "GetAllIdentityGroups",
  "GetIdentityGroup",
  "UpdateIdentityGroup",
  "MergeIdentityGroup"
] as const satisfies readonly (keyof RingCentralDigitalApiIdentityGroupsGeneratedClient)[];

export function createRingCentralDigitalApiIdentityGroupsGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiIdentityGroupsGeneratedClient {
  return {
    GetAllIdentityGroups: (...args) => callOperation("GET /identity_groups", ...(args as RingCentralDigitalApiOperationArgs<"GET /identity_groups">)),
    GetIdentityGroup: (...args) => callOperation("GET /identity_groups/{identityGroupId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /identity_groups/{identityGroupId}">)),
    UpdateIdentityGroup: (...args) => callOperation("PUT /identity_groups/{identityGroupId}", ...(args as RingCentralDigitalApiOperationArgs<"PUT /identity_groups/{identityGroupId}">)),
    MergeIdentityGroup: (...args) => callOperation("PUT /identity_groups/{identityGroupId}/merge", ...(args as RingCentralDigitalApiOperationArgs<"PUT /identity_groups/{identityGroupId}/merge">)),
  };
}
