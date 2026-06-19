// Generated endpoint chunk for RingCentralVoiceApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralVoiceGeneratedOperationCaller,
  RingCentralVoiceApiOperationArgs,
  RingCentralVoiceApiOperationInput,
  RingCentralVoiceApiPathParamValue,
} from "../../voice-api-client.generated.js";
import type { RingCentralVoiceApiOperationResponseMap } from "../../voice-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralVoiceApiNumberManagementOperationKeys = [
  "PUT /v1/admin/utilities/tnManager/updateCustomerDnisBulk",
  "POST /v1/admin/utilities/tnManager/searchDnis",
  "PUT /v1/admin/utilities/tnManager/updateBulkDnisPool",
  "POST /v1/admin/utilities/tnManager/uploadDnisPool"
] as const;
export type RingCentralVoiceApiNumberManagementOperationKey = typeof RingCentralVoiceApiNumberManagementOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiNumberManagementOperationPathParamMap {
  "PUT /v1/admin/utilities/tnManager/updateCustomerDnisBulk": {};
  "POST /v1/admin/utilities/tnManager/searchDnis": {};
  "PUT /v1/admin/utilities/tnManager/updateBulkDnisPool": {};
  "POST /v1/admin/utilities/tnManager/uploadDnisPool": {};
}

export interface RingCentralVoiceApiNumberManagementOperationRequestMap {
  "PUT /v1/admin/utilities/tnManager/updateCustomerDnisBulk": RingCentralVoiceApiOperationInput<"PUT /v1/admin/utilities/tnManager/updateCustomerDnisBulk">;
  "POST /v1/admin/utilities/tnManager/searchDnis": RingCentralVoiceApiOperationInput<"POST /v1/admin/utilities/tnManager/searchDnis">;
  "PUT /v1/admin/utilities/tnManager/updateBulkDnisPool": RingCentralVoiceApiOperationInput<"PUT /v1/admin/utilities/tnManager/updateBulkDnisPool">;
  "POST /v1/admin/utilities/tnManager/uploadDnisPool": RingCentralVoiceApiOperationInput<"POST /v1/admin/utilities/tnManager/uploadDnisPool">;
}

export interface RingCentralVoiceApiNumberManagementGeneratedClient {
  UpdateCustomerDnisBulkUsingPUT(...args: RingCentralVoiceApiOperationArgs<"PUT /v1/admin/utilities/tnManager/updateCustomerDnisBulk">): Promise<RingCentralVoiceApiOperationResponseMap["PUT /v1/admin/utilities/tnManager/updateCustomerDnisBulk"]>;
  GetCustomerDnisPoolListUsingPOST(...args: RingCentralVoiceApiOperationArgs<"POST /v1/admin/utilities/tnManager/searchDnis">): Promise<RingCentralVoiceApiOperationResponseMap["POST /v1/admin/utilities/tnManager/searchDnis"]>;
  UpdateBulkDnisPoolListUsingPUT(...args: RingCentralVoiceApiOperationArgs<"PUT /v1/admin/utilities/tnManager/updateBulkDnisPool">): Promise<RingCentralVoiceApiOperationResponseMap["PUT /v1/admin/utilities/tnManager/updateBulkDnisPool"]>;
  PreviewDnisListUsingPOST(...args: RingCentralVoiceApiOperationArgs<"POST /v1/admin/utilities/tnManager/uploadDnisPool">): Promise<RingCentralVoiceApiOperationResponseMap["POST /v1/admin/utilities/tnManager/uploadDnisPool"]>;
}

export const RingCentralVoiceApiNumberManagementGeneratedFunctionNames = [
  "UpdateCustomerDnisBulkUsingPUT",
  "GetCustomerDnisPoolListUsingPOST",
  "UpdateBulkDnisPoolListUsingPUT",
  "PreviewDnisListUsingPOST"
] as const satisfies readonly (keyof RingCentralVoiceApiNumberManagementGeneratedClient)[];

export function createRingCentralVoiceApiNumberManagementGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiNumberManagementGeneratedClient {
  return {
    UpdateCustomerDnisBulkUsingPUT: (...args) => callOperation("PUT /v1/admin/utilities/tnManager/updateCustomerDnisBulk", ...(args as RingCentralVoiceApiOperationArgs<"PUT /v1/admin/utilities/tnManager/updateCustomerDnisBulk">)),
    GetCustomerDnisPoolListUsingPOST: (...args) => callOperation("POST /v1/admin/utilities/tnManager/searchDnis", ...(args as RingCentralVoiceApiOperationArgs<"POST /v1/admin/utilities/tnManager/searchDnis">)),
    UpdateBulkDnisPoolListUsingPUT: (...args) => callOperation("PUT /v1/admin/utilities/tnManager/updateBulkDnisPool", ...(args as RingCentralVoiceApiOperationArgs<"PUT /v1/admin/utilities/tnManager/updateBulkDnisPool">)),
    PreviewDnisListUsingPOST: (...args) => callOperation("POST /v1/admin/utilities/tnManager/uploadDnisPool", ...(args as RingCentralVoiceApiOperationArgs<"POST /v1/admin/utilities/tnManager/uploadDnisPool">)),
  };
}
