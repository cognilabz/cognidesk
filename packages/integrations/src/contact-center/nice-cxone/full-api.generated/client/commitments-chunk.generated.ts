// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiCommitmentsOperationKeys = [
  "admin-commitments-api-docs:AgentScheduledCallbacks:GET:/agents/{agentId}/scheduled-callbacks",
  "admin-commitments-api-docs:CreateScheduledCallback:POST:/scheduled-callbacks",
  "admin-commitments-api-docs:UpdateScheduledCallback:PUT:/scheduled-callbacks/{callbackId}",
  "admin-commitments-api-docs:DeleteScheduledCallback:DELETE:/scheduled-callbacks/{callbackId}",
  "admin-commitments-api-docs:SkillScheduledCallbacks:GET:/skills/{skillId}/scheduled-callbacks"
] as const;
export type NiceCxoneFullApiCommitmentsOperationKey = typeof NiceCxoneFullApiCommitmentsOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiCommitmentsOperationPathParamMap {
  "admin-commitments-api-docs:AgentScheduledCallbacks:GET:/agents/{agentId}/scheduled-callbacks": { "agentId": NiceCxoneFullApiPathParamValue };
  "admin-commitments-api-docs:CreateScheduledCallback:POST:/scheduled-callbacks": {};
  "admin-commitments-api-docs:UpdateScheduledCallback:PUT:/scheduled-callbacks/{callbackId}": { "callbackId": NiceCxoneFullApiPathParamValue };
  "admin-commitments-api-docs:DeleteScheduledCallback:DELETE:/scheduled-callbacks/{callbackId}": { "callbackId": NiceCxoneFullApiPathParamValue };
  "admin-commitments-api-docs:SkillScheduledCallbacks:GET:/skills/{skillId}/scheduled-callbacks": { "skillId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiCommitmentsOperationRequestMap {
  "admin-commitments-api-docs:AgentScheduledCallbacks:GET:/agents/{agentId}/scheduled-callbacks": NiceCxoneFullApiOperationInput<"admin-commitments-api-docs:AgentScheduledCallbacks:GET:/agents/{agentId}/scheduled-callbacks">;
  "admin-commitments-api-docs:CreateScheduledCallback:POST:/scheduled-callbacks": NiceCxoneFullApiOperationInput<"admin-commitments-api-docs:CreateScheduledCallback:POST:/scheduled-callbacks">;
  "admin-commitments-api-docs:UpdateScheduledCallback:PUT:/scheduled-callbacks/{callbackId}": NiceCxoneFullApiOperationInput<"admin-commitments-api-docs:UpdateScheduledCallback:PUT:/scheduled-callbacks/{callbackId}">;
  "admin-commitments-api-docs:DeleteScheduledCallback:DELETE:/scheduled-callbacks/{callbackId}": NiceCxoneFullApiOperationInput<"admin-commitments-api-docs:DeleteScheduledCallback:DELETE:/scheduled-callbacks/{callbackId}">;
  "admin-commitments-api-docs:SkillScheduledCallbacks:GET:/skills/{skillId}/scheduled-callbacks": NiceCxoneFullApiOperationInput<"admin-commitments-api-docs:SkillScheduledCallbacks:GET:/skills/{skillId}/scheduled-callbacks">;
}

export interface NiceCxoneFullApiCommitmentsGeneratedClient {
  AdminCommitmentsApiDocsAgentScheduledCallbacks(...args: NiceCxoneFullApiOperationArgs<"admin-commitments-api-docs:AgentScheduledCallbacks:GET:/agents/{agentId}/scheduled-callbacks">): Promise<NiceCxoneFullApiOperationResponseMap["admin-commitments-api-docs:AgentScheduledCallbacks:GET:/agents/{agentId}/scheduled-callbacks"]>;
  AdminCommitmentsApiDocsCreateScheduledCallback(...args: NiceCxoneFullApiOperationArgs<"admin-commitments-api-docs:CreateScheduledCallback:POST:/scheduled-callbacks">): Promise<NiceCxoneFullApiOperationResponseMap["admin-commitments-api-docs:CreateScheduledCallback:POST:/scheduled-callbacks"]>;
  AdminCommitmentsApiDocsUpdateScheduledCallback(...args: NiceCxoneFullApiOperationArgs<"admin-commitments-api-docs:UpdateScheduledCallback:PUT:/scheduled-callbacks/{callbackId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-commitments-api-docs:UpdateScheduledCallback:PUT:/scheduled-callbacks/{callbackId}"]>;
  AdminCommitmentsApiDocsDeleteScheduledCallback(...args: NiceCxoneFullApiOperationArgs<"admin-commitments-api-docs:DeleteScheduledCallback:DELETE:/scheduled-callbacks/{callbackId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-commitments-api-docs:DeleteScheduledCallback:DELETE:/scheduled-callbacks/{callbackId}"]>;
  AdminCommitmentsApiDocsSkillScheduledCallbacks(...args: NiceCxoneFullApiOperationArgs<"admin-commitments-api-docs:SkillScheduledCallbacks:GET:/skills/{skillId}/scheduled-callbacks">): Promise<NiceCxoneFullApiOperationResponseMap["admin-commitments-api-docs:SkillScheduledCallbacks:GET:/skills/{skillId}/scheduled-callbacks"]>;
}

export const NiceCxoneFullApiCommitmentsGeneratedFunctionNames = [
  "AdminCommitmentsApiDocsAgentScheduledCallbacks",
  "AdminCommitmentsApiDocsCreateScheduledCallback",
  "AdminCommitmentsApiDocsUpdateScheduledCallback",
  "AdminCommitmentsApiDocsDeleteScheduledCallback",
  "AdminCommitmentsApiDocsSkillScheduledCallbacks"
] as const satisfies readonly (keyof NiceCxoneFullApiCommitmentsGeneratedClient)[];

export function createNiceCxoneFullApiCommitmentsGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiCommitmentsGeneratedClient {
  return {
    AdminCommitmentsApiDocsAgentScheduledCallbacks: (...args) => callOperation("admin-commitments-api-docs:AgentScheduledCallbacks:GET:/agents/{agentId}/scheduled-callbacks", ...(args as NiceCxoneFullApiOperationArgs<"admin-commitments-api-docs:AgentScheduledCallbacks:GET:/agents/{agentId}/scheduled-callbacks">)),
    AdminCommitmentsApiDocsCreateScheduledCallback: (...args) => callOperation("admin-commitments-api-docs:CreateScheduledCallback:POST:/scheduled-callbacks", ...(args as NiceCxoneFullApiOperationArgs<"admin-commitments-api-docs:CreateScheduledCallback:POST:/scheduled-callbacks">)),
    AdminCommitmentsApiDocsUpdateScheduledCallback: (...args) => callOperation("admin-commitments-api-docs:UpdateScheduledCallback:PUT:/scheduled-callbacks/{callbackId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-commitments-api-docs:UpdateScheduledCallback:PUT:/scheduled-callbacks/{callbackId}">)),
    AdminCommitmentsApiDocsDeleteScheduledCallback: (...args) => callOperation("admin-commitments-api-docs:DeleteScheduledCallback:DELETE:/scheduled-callbacks/{callbackId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-commitments-api-docs:DeleteScheduledCallback:DELETE:/scheduled-callbacks/{callbackId}">)),
    AdminCommitmentsApiDocsSkillScheduledCallbacks: (...args) => callOperation("admin-commitments-api-docs:SkillScheduledCallbacks:GET:/skills/{skillId}/scheduled-callbacks", ...(args as NiceCxoneFullApiOperationArgs<"admin-commitments-api-docs:SkillScheduledCallbacks:GET:/skills/{skillId}/scheduled-callbacks">)),
  };
}
