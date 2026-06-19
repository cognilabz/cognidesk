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
export const RingCentralVoiceApiQueueSkillsOperationKeys = [
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills",
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills",
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills",
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}",
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}",
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}"
] as const;
export type RingCentralVoiceApiQueueSkillsOperationKey = typeof RingCentralVoiceApiQueueSkillsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiQueueSkillsOperationPathParamMap {
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue };
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue };
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "skillId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "skillId": RingCentralVoiceApiPathParamValue };
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "skillId": RingCentralVoiceApiPathParamValue };
}

export interface RingCentralVoiceApiQueueSkillsOperationRequestMap {
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills">;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills">;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills": RingCentralVoiceApiOperationInput<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills">;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}": RingCentralVoiceApiOperationInput<"DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}">;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}">;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}": RingCentralVoiceApiOperationInput<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}">;
}

export interface RingCentralVoiceApiQueueSkillsGeneratedClient {
  GetList(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills"]>;
  CreateGateGroupSkill(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills"]>;
  SaveGateGroupSkillList(...args: RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills">): Promise<RingCentralVoiceApiOperationResponseMap["PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills"]>;
  DeleteGateGroupSkill(...args: RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}">): Promise<RingCentralVoiceApiOperationResponseMap["DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}"]>;
  GetDetail(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}"]>;
  UpdateGateGroupSkill(...args: RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}">): Promise<RingCentralVoiceApiOperationResponseMap["PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}"]>;
}

export const RingCentralVoiceApiQueueSkillsGeneratedFunctionNames = [
  "GetList",
  "CreateGateGroupSkill",
  "SaveGateGroupSkillList",
  "DeleteGateGroupSkill",
  "GetDetail",
  "UpdateGateGroupSkill"
] as const satisfies readonly (keyof RingCentralVoiceApiQueueSkillsGeneratedClient)[];

export function createRingCentralVoiceApiQueueSkillsGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiQueueSkillsGeneratedClient {
  return {
    GetList: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills">)),
    CreateGateGroupSkill: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills">)),
    SaveGateGroupSkillList: (...args) => callOperation("PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills", ...(args as RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills">)),
    DeleteGateGroupSkill: (...args) => callOperation("DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}", ...(args as RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}">)),
    GetDetail: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}">)),
    UpdateGateGroupSkill: (...args) => callOperation("PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}", ...(args as RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}">)),
  };
}
