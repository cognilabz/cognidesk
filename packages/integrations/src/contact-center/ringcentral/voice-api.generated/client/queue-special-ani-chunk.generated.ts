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
export const RingCentralVoiceApiQueueSpecialANIOperationKeys = [
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis",
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis",
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis",
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis/upload"
] as const;
export type RingCentralVoiceApiQueueSpecialANIOperationKey = typeof RingCentralVoiceApiQueueSpecialANIOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiQueueSpecialANIOperationPathParamMap {
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis/upload": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue };
}

export interface RingCentralVoiceApiQueueSpecialANIOperationRequestMap {
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis": RingCentralVoiceApiOperationInput<"DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis">;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis">;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis">;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis/upload": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis/upload">;
}

export interface RingCentralVoiceApiQueueSpecialANIGeneratedClient {
  DeleteSpecialAni(...args: RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis">): Promise<RingCentralVoiceApiOperationResponseMap["DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis"]>;
  GetGateSpecialAniList(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis"]>;
  CreateGateSpecialAni(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis"]>;
  UploadSpecialAniList(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis/upload">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis/upload"]>;
}

export const RingCentralVoiceApiQueueSpecialANIGeneratedFunctionNames = [
  "DeleteSpecialAni",
  "GetGateSpecialAniList",
  "CreateGateSpecialAni",
  "UploadSpecialAniList"
] as const satisfies readonly (keyof RingCentralVoiceApiQueueSpecialANIGeneratedClient)[];

export function createRingCentralVoiceApiQueueSpecialANIGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiQueueSpecialANIGeneratedClient {
  return {
    DeleteSpecialAni: (...args) => callOperation("DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis", ...(args as RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis">)),
    GetGateSpecialAniList: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis">)),
    CreateGateSpecialAni: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis">)),
    UploadSpecialAniList: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis/upload", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis/upload">)),
  };
}
