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
export const NiceCxoneFullApiSkillsOperationKeys = [
  "admin-skills-api-docs:get-campaigns:GET:/campaigns",
  "admin-skills-api-docs:post-campaigns:POST:/campaigns",
  "admin-skills-api-docs:get-campaigns-id:GET:/campaigns/{campaignId}",
  "admin-skills-api-docs:put-campaigns-id:PUT:/campaigns/{campaignId}",
  "admin-skills-api-docs:get-campaigns-id-skills-unassigned:GET:/campaigns/{campaignId}/skills/unassigned",
  "admin-skills-api-docs:patch-campaigns-id-status:PATCH:/campaigns/{campaignId}/status",
  "admin-skills-api-docs:get-campaigns-id-audit-history:GET:/campaigns/{campaignId}/audit-history",
  "admin-skills-api-docs:get-dispositions-skills:GET:/dispositions/skills",
  "admin-skills-api-docs:get-dispositions-id:GET:/dispositions/{dispositionId}",
  "admin-skills-api-docs:put-dispositions-id:PUT:/dispositions/{dispositionId}",
  "admin-skills-api-docs:get-dispositions-id-skills:GET:/dispositions/{dispositionId}/skills",
  "admin-skills-api-docs:DispostionClassifications:GET:/dispositions/classifications",
  "admin-skills-api-docs:patch-status-by-dispositions-id:PATCH:/dispositions/{dispositionId}/status",
  "admin-skills-api-docs:get-dispositions-id-audit-history:GET:/dispositions/{dispositionId}/audit-history",
  "admin-skills-api-docs:get-skills:GET:/skills",
  "admin-skills-api-docs:post-skills:POST:/skills",
  "admin-skills-api-docs:get-skills-parameters:GET:/skills/parameters",
  "admin-skills-api-docs:get-skills-id:GET:/skills/{skillId}",
  "admin-skills-api-docs:put-skills-id:PUT:/skills/{skillId}",
  "admin-skills-api-docs:get-skills-id-parameters:GET:/skills/{skillId}/parameters",
  "admin-skills-api-docs:get-skills-id-thank-you-page:GET:/skills/{skillId}/thank-you-page",
  "admin-skills-api-docs:post_/skills/{skillId}/start:POST:/skills/{skillId}/start",
  "admin-skills-api-docs:post_/skills/{skillId}/stop:POST:/skills/{skillId}/stop",
  "admin-skills-api-docs:getAgentsAllSkills:GET:/skills/agents",
  "admin-skills-api-docs:getAgentsBySkillId:GET:/skills/{skillId}/agents",
  "admin-skills-api-docs:AgentAssignmentsSkill:POST:/skills/{skillId}/agents",
  "admin-skills-api-docs:ModifyAssignmentsSkill:PUT:/skills/{skillId}/agents",
  "admin-skills-api-docs:RemoveAgentAssignmentsSkill:DELETE:/skills/{skillId}/agents",
  "admin-skills-api-docs:delete-skills-id-agents-id:DELETE:/skills/{skillId}/agents/{agentId}",
  "admin-skills-api-docs:GetAgentsThatAreNotAssignedToSkill:GET:/skills/{skillId}/agents/unassigned",
  "admin-skills-api-docs:SKILLCALLDATA:GET:/skills/call-data",
  "admin-skills-api-docs:SkillCallData:GET:/skills/{skillId}/call-data",
  "admin-skills-api-docs:DispositionList:GET:/skills/{skillId}/dispositions",
  "admin-skills-api-docs:DispositionsNotAssignedSkill:GET:/skills/{skillId}/dispositions/unassigned",
  "admin-skills-api-docs:GetTagsSkill:GET:/skills/{skillId}/tags",
  "admin-skills-api-docs:AssignTagSkill:POST:/skills/{skillId}/tags",
  "admin-skills-api-docs:RemoveTagsSkill:DELETE:/skills/{skillId}/tags",
  "admin-skills-api-docs:get-skills-id-parameters-general-settings:GET:/skills/{skillId}/parameters/general-settings",
  "admin-skills-api-docs:put-skills-id-parameters-general-settings:PUT:/skills/{skillId}/parameters/general-settings",
  "admin-skills-api-docs:get-skills-id-parameters-cpa-management:GET:/skills/{skillId}/parameters/cpa-management",
  "admin-skills-api-docs:put-skills-id-parameters-cpa-management:PUT:/skills/{skillId}/parameters/cpa-management",
  "admin-skills-api-docs:get-skills-id-parameters-xs-settings:GET:/skills/{skillId}/parameters/xs-settings",
  "admin-skills-api-docs:put-skills-id-parameters-xs-settings:PUT:/skills/{skillId}/parameters/xs-settings",
  "admin-skills-api-docs:get-skills-id-parameters-delivery-preferences:GET:/skills/{skillId}/parameters/delivery-preferences",
  "admin-skills-api-docs:put-skills-id-parameters-delivery-preferences:PUT:/skills/{skillId}/parameters/delivery-preferences",
  "admin-skills-api-docs:get-skills-id-parameters-retry-settings:GET:/skills/{skillId}/parameters/retry-settings",
  "admin-skills-api-docs:put-skills-id-parameters-retry-settings:PUT:/skills/{skillId}/parameters/retry-settings",
  "admin-skills-api-docs:get-skills-id-parameters-schedule-settings:GET:/skills/{skillId}/parameters/schedule-settings",
  "admin-skills-api-docs:put-skills-id-parameters-schedule-settings:PUT:/skills/{skillId}/parameters/schedule-settings",
  "admin-skills-api-docs:put-skills-id-parameters-cadence-settings:PUT:/skills/{skillId}/parameters/cadence-settings",
  "admin-skills-api-docs:get-skills-id-parameters-time-zones:GET:/skills/{skillId}/parameters/time-zones",
  "admin-skills-api-docs:put-skills-id-parameters-time-zones:PUT:/skills/{skillId}/parameters/time-zones",
  "admin-skills-api-docs:put-skills-id-parameters-list-management:PUT:/skills/{skillId}/parameters/list-management",
  "admin-skills-api-docs:get-campaigns-id-skills:GET:/campaigns/{campaignId}/skills",
  "admin-skills-api-docs:post-campaigns-id-skills:POST:/campaigns/{campaignId}/skills",
  "admin-skills-api-docs:delete-campaigns-id-skills:DELETE:/campaigns/{campaignId}/skills",
  "admin-skills-api-docs:get-dispositions:GET:/dispositions",
  "admin-skills-api-docs:post-dispositions:POST:/dispositions"
] as const;
export type NiceCxoneFullApiSkillsOperationKey = typeof NiceCxoneFullApiSkillsOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiSkillsOperationPathParamMap {
  "admin-skills-api-docs:get-campaigns:GET:/campaigns": {};
  "admin-skills-api-docs:post-campaigns:POST:/campaigns": {};
  "admin-skills-api-docs:get-campaigns-id:GET:/campaigns/{campaignId}": { "campaignId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:put-campaigns-id:PUT:/campaigns/{campaignId}": { "campaignId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:get-campaigns-id-skills-unassigned:GET:/campaigns/{campaignId}/skills/unassigned": { "campaignId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:patch-campaigns-id-status:PATCH:/campaigns/{campaignId}/status": { "campaignId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:get-campaigns-id-audit-history:GET:/campaigns/{campaignId}/audit-history": { "campaignId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:get-dispositions-skills:GET:/dispositions/skills": {};
  "admin-skills-api-docs:get-dispositions-id:GET:/dispositions/{dispositionId}": { "dispositionId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:put-dispositions-id:PUT:/dispositions/{dispositionId}": { "dispositionId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:get-dispositions-id-skills:GET:/dispositions/{dispositionId}/skills": { "dispositionId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:DispostionClassifications:GET:/dispositions/classifications": {};
  "admin-skills-api-docs:patch-status-by-dispositions-id:PATCH:/dispositions/{dispositionId}/status": { "dispositionId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:get-dispositions-id-audit-history:GET:/dispositions/{dispositionId}/audit-history": { "dispositionId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:get-skills:GET:/skills": {};
  "admin-skills-api-docs:post-skills:POST:/skills": {};
  "admin-skills-api-docs:get-skills-parameters:GET:/skills/parameters": {};
  "admin-skills-api-docs:get-skills-id:GET:/skills/{skillId}": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:put-skills-id:PUT:/skills/{skillId}": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:get-skills-id-parameters:GET:/skills/{skillId}/parameters": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:get-skills-id-thank-you-page:GET:/skills/{skillId}/thank-you-page": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:post_/skills/{skillId}/start:POST:/skills/{skillId}/start": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:post_/skills/{skillId}/stop:POST:/skills/{skillId}/stop": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:getAgentsAllSkills:GET:/skills/agents": {};
  "admin-skills-api-docs:getAgentsBySkillId:GET:/skills/{skillId}/agents": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:AgentAssignmentsSkill:POST:/skills/{skillId}/agents": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:ModifyAssignmentsSkill:PUT:/skills/{skillId}/agents": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:RemoveAgentAssignmentsSkill:DELETE:/skills/{skillId}/agents": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:delete-skills-id-agents-id:DELETE:/skills/{skillId}/agents/{agentId}": { "skillId": NiceCxoneFullApiPathParamValue; "agentId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:GetAgentsThatAreNotAssignedToSkill:GET:/skills/{skillId}/agents/unassigned": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:SKILLCALLDATA:GET:/skills/call-data": {};
  "admin-skills-api-docs:SkillCallData:GET:/skills/{skillId}/call-data": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:DispositionList:GET:/skills/{skillId}/dispositions": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:DispositionsNotAssignedSkill:GET:/skills/{skillId}/dispositions/unassigned": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:GetTagsSkill:GET:/skills/{skillId}/tags": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:AssignTagSkill:POST:/skills/{skillId}/tags": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:RemoveTagsSkill:DELETE:/skills/{skillId}/tags": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:get-skills-id-parameters-general-settings:GET:/skills/{skillId}/parameters/general-settings": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:put-skills-id-parameters-general-settings:PUT:/skills/{skillId}/parameters/general-settings": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:get-skills-id-parameters-cpa-management:GET:/skills/{skillId}/parameters/cpa-management": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:put-skills-id-parameters-cpa-management:PUT:/skills/{skillId}/parameters/cpa-management": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:get-skills-id-parameters-xs-settings:GET:/skills/{skillId}/parameters/xs-settings": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:put-skills-id-parameters-xs-settings:PUT:/skills/{skillId}/parameters/xs-settings": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:get-skills-id-parameters-delivery-preferences:GET:/skills/{skillId}/parameters/delivery-preferences": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:put-skills-id-parameters-delivery-preferences:PUT:/skills/{skillId}/parameters/delivery-preferences": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:get-skills-id-parameters-retry-settings:GET:/skills/{skillId}/parameters/retry-settings": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:put-skills-id-parameters-retry-settings:PUT:/skills/{skillId}/parameters/retry-settings": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:get-skills-id-parameters-schedule-settings:GET:/skills/{skillId}/parameters/schedule-settings": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:put-skills-id-parameters-schedule-settings:PUT:/skills/{skillId}/parameters/schedule-settings": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:put-skills-id-parameters-cadence-settings:PUT:/skills/{skillId}/parameters/cadence-settings": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:get-skills-id-parameters-time-zones:GET:/skills/{skillId}/parameters/time-zones": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:put-skills-id-parameters-time-zones:PUT:/skills/{skillId}/parameters/time-zones": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:put-skills-id-parameters-list-management:PUT:/skills/{skillId}/parameters/list-management": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:get-campaigns-id-skills:GET:/campaigns/{campaignId}/skills": { "campaignId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:post-campaigns-id-skills:POST:/campaigns/{campaignId}/skills": { "campaignId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:delete-campaigns-id-skills:DELETE:/campaigns/{campaignId}/skills": { "campaignId": NiceCxoneFullApiPathParamValue };
  "admin-skills-api-docs:get-dispositions:GET:/dispositions": {};
  "admin-skills-api-docs:post-dispositions:POST:/dispositions": {};
}

export interface NiceCxoneFullApiSkillsOperationRequestMap {
  "admin-skills-api-docs:get-campaigns:GET:/campaigns": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-campaigns:GET:/campaigns">;
  "admin-skills-api-docs:post-campaigns:POST:/campaigns": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:post-campaigns:POST:/campaigns">;
  "admin-skills-api-docs:get-campaigns-id:GET:/campaigns/{campaignId}": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-campaigns-id:GET:/campaigns/{campaignId}">;
  "admin-skills-api-docs:put-campaigns-id:PUT:/campaigns/{campaignId}": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:put-campaigns-id:PUT:/campaigns/{campaignId}">;
  "admin-skills-api-docs:get-campaigns-id-skills-unassigned:GET:/campaigns/{campaignId}/skills/unassigned": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-campaigns-id-skills-unassigned:GET:/campaigns/{campaignId}/skills/unassigned">;
  "admin-skills-api-docs:patch-campaigns-id-status:PATCH:/campaigns/{campaignId}/status": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:patch-campaigns-id-status:PATCH:/campaigns/{campaignId}/status">;
  "admin-skills-api-docs:get-campaigns-id-audit-history:GET:/campaigns/{campaignId}/audit-history": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-campaigns-id-audit-history:GET:/campaigns/{campaignId}/audit-history">;
  "admin-skills-api-docs:get-dispositions-skills:GET:/dispositions/skills": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-dispositions-skills:GET:/dispositions/skills">;
  "admin-skills-api-docs:get-dispositions-id:GET:/dispositions/{dispositionId}": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-dispositions-id:GET:/dispositions/{dispositionId}">;
  "admin-skills-api-docs:put-dispositions-id:PUT:/dispositions/{dispositionId}": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:put-dispositions-id:PUT:/dispositions/{dispositionId}">;
  "admin-skills-api-docs:get-dispositions-id-skills:GET:/dispositions/{dispositionId}/skills": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-dispositions-id-skills:GET:/dispositions/{dispositionId}/skills">;
  "admin-skills-api-docs:DispostionClassifications:GET:/dispositions/classifications": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:DispostionClassifications:GET:/dispositions/classifications">;
  "admin-skills-api-docs:patch-status-by-dispositions-id:PATCH:/dispositions/{dispositionId}/status": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:patch-status-by-dispositions-id:PATCH:/dispositions/{dispositionId}/status">;
  "admin-skills-api-docs:get-dispositions-id-audit-history:GET:/dispositions/{dispositionId}/audit-history": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-dispositions-id-audit-history:GET:/dispositions/{dispositionId}/audit-history">;
  "admin-skills-api-docs:get-skills:GET:/skills": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-skills:GET:/skills">;
  "admin-skills-api-docs:post-skills:POST:/skills": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:post-skills:POST:/skills">;
  "admin-skills-api-docs:get-skills-parameters:GET:/skills/parameters": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-skills-parameters:GET:/skills/parameters">;
  "admin-skills-api-docs:get-skills-id:GET:/skills/{skillId}": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-skills-id:GET:/skills/{skillId}">;
  "admin-skills-api-docs:put-skills-id:PUT:/skills/{skillId}": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:put-skills-id:PUT:/skills/{skillId}">;
  "admin-skills-api-docs:get-skills-id-parameters:GET:/skills/{skillId}/parameters": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-skills-id-parameters:GET:/skills/{skillId}/parameters">;
  "admin-skills-api-docs:get-skills-id-thank-you-page:GET:/skills/{skillId}/thank-you-page": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-skills-id-thank-you-page:GET:/skills/{skillId}/thank-you-page">;
  "admin-skills-api-docs:post_/skills/{skillId}/start:POST:/skills/{skillId}/start": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:post_/skills/{skillId}/start:POST:/skills/{skillId}/start">;
  "admin-skills-api-docs:post_/skills/{skillId}/stop:POST:/skills/{skillId}/stop": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:post_/skills/{skillId}/stop:POST:/skills/{skillId}/stop">;
  "admin-skills-api-docs:getAgentsAllSkills:GET:/skills/agents": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:getAgentsAllSkills:GET:/skills/agents">;
  "admin-skills-api-docs:getAgentsBySkillId:GET:/skills/{skillId}/agents": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:getAgentsBySkillId:GET:/skills/{skillId}/agents">;
  "admin-skills-api-docs:AgentAssignmentsSkill:POST:/skills/{skillId}/agents": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:AgentAssignmentsSkill:POST:/skills/{skillId}/agents">;
  "admin-skills-api-docs:ModifyAssignmentsSkill:PUT:/skills/{skillId}/agents": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:ModifyAssignmentsSkill:PUT:/skills/{skillId}/agents">;
  "admin-skills-api-docs:RemoveAgentAssignmentsSkill:DELETE:/skills/{skillId}/agents": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:RemoveAgentAssignmentsSkill:DELETE:/skills/{skillId}/agents">;
  "admin-skills-api-docs:delete-skills-id-agents-id:DELETE:/skills/{skillId}/agents/{agentId}": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:delete-skills-id-agents-id:DELETE:/skills/{skillId}/agents/{agentId}">;
  "admin-skills-api-docs:GetAgentsThatAreNotAssignedToSkill:GET:/skills/{skillId}/agents/unassigned": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:GetAgentsThatAreNotAssignedToSkill:GET:/skills/{skillId}/agents/unassigned">;
  "admin-skills-api-docs:SKILLCALLDATA:GET:/skills/call-data": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:SKILLCALLDATA:GET:/skills/call-data">;
  "admin-skills-api-docs:SkillCallData:GET:/skills/{skillId}/call-data": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:SkillCallData:GET:/skills/{skillId}/call-data">;
  "admin-skills-api-docs:DispositionList:GET:/skills/{skillId}/dispositions": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:DispositionList:GET:/skills/{skillId}/dispositions">;
  "admin-skills-api-docs:DispositionsNotAssignedSkill:GET:/skills/{skillId}/dispositions/unassigned": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:DispositionsNotAssignedSkill:GET:/skills/{skillId}/dispositions/unassigned">;
  "admin-skills-api-docs:GetTagsSkill:GET:/skills/{skillId}/tags": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:GetTagsSkill:GET:/skills/{skillId}/tags">;
  "admin-skills-api-docs:AssignTagSkill:POST:/skills/{skillId}/tags": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:AssignTagSkill:POST:/skills/{skillId}/tags">;
  "admin-skills-api-docs:RemoveTagsSkill:DELETE:/skills/{skillId}/tags": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:RemoveTagsSkill:DELETE:/skills/{skillId}/tags">;
  "admin-skills-api-docs:get-skills-id-parameters-general-settings:GET:/skills/{skillId}/parameters/general-settings": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-skills-id-parameters-general-settings:GET:/skills/{skillId}/parameters/general-settings">;
  "admin-skills-api-docs:put-skills-id-parameters-general-settings:PUT:/skills/{skillId}/parameters/general-settings": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:put-skills-id-parameters-general-settings:PUT:/skills/{skillId}/parameters/general-settings">;
  "admin-skills-api-docs:get-skills-id-parameters-cpa-management:GET:/skills/{skillId}/parameters/cpa-management": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-skills-id-parameters-cpa-management:GET:/skills/{skillId}/parameters/cpa-management">;
  "admin-skills-api-docs:put-skills-id-parameters-cpa-management:PUT:/skills/{skillId}/parameters/cpa-management": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:put-skills-id-parameters-cpa-management:PUT:/skills/{skillId}/parameters/cpa-management">;
  "admin-skills-api-docs:get-skills-id-parameters-xs-settings:GET:/skills/{skillId}/parameters/xs-settings": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-skills-id-parameters-xs-settings:GET:/skills/{skillId}/parameters/xs-settings">;
  "admin-skills-api-docs:put-skills-id-parameters-xs-settings:PUT:/skills/{skillId}/parameters/xs-settings": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:put-skills-id-parameters-xs-settings:PUT:/skills/{skillId}/parameters/xs-settings">;
  "admin-skills-api-docs:get-skills-id-parameters-delivery-preferences:GET:/skills/{skillId}/parameters/delivery-preferences": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-skills-id-parameters-delivery-preferences:GET:/skills/{skillId}/parameters/delivery-preferences">;
  "admin-skills-api-docs:put-skills-id-parameters-delivery-preferences:PUT:/skills/{skillId}/parameters/delivery-preferences": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:put-skills-id-parameters-delivery-preferences:PUT:/skills/{skillId}/parameters/delivery-preferences">;
  "admin-skills-api-docs:get-skills-id-parameters-retry-settings:GET:/skills/{skillId}/parameters/retry-settings": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-skills-id-parameters-retry-settings:GET:/skills/{skillId}/parameters/retry-settings">;
  "admin-skills-api-docs:put-skills-id-parameters-retry-settings:PUT:/skills/{skillId}/parameters/retry-settings": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:put-skills-id-parameters-retry-settings:PUT:/skills/{skillId}/parameters/retry-settings">;
  "admin-skills-api-docs:get-skills-id-parameters-schedule-settings:GET:/skills/{skillId}/parameters/schedule-settings": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-skills-id-parameters-schedule-settings:GET:/skills/{skillId}/parameters/schedule-settings">;
  "admin-skills-api-docs:put-skills-id-parameters-schedule-settings:PUT:/skills/{skillId}/parameters/schedule-settings": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:put-skills-id-parameters-schedule-settings:PUT:/skills/{skillId}/parameters/schedule-settings">;
  "admin-skills-api-docs:put-skills-id-parameters-cadence-settings:PUT:/skills/{skillId}/parameters/cadence-settings": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:put-skills-id-parameters-cadence-settings:PUT:/skills/{skillId}/parameters/cadence-settings">;
  "admin-skills-api-docs:get-skills-id-parameters-time-zones:GET:/skills/{skillId}/parameters/time-zones": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-skills-id-parameters-time-zones:GET:/skills/{skillId}/parameters/time-zones">;
  "admin-skills-api-docs:put-skills-id-parameters-time-zones:PUT:/skills/{skillId}/parameters/time-zones": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:put-skills-id-parameters-time-zones:PUT:/skills/{skillId}/parameters/time-zones">;
  "admin-skills-api-docs:put-skills-id-parameters-list-management:PUT:/skills/{skillId}/parameters/list-management": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:put-skills-id-parameters-list-management:PUT:/skills/{skillId}/parameters/list-management">;
  "admin-skills-api-docs:get-campaigns-id-skills:GET:/campaigns/{campaignId}/skills": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-campaigns-id-skills:GET:/campaigns/{campaignId}/skills">;
  "admin-skills-api-docs:post-campaigns-id-skills:POST:/campaigns/{campaignId}/skills": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:post-campaigns-id-skills:POST:/campaigns/{campaignId}/skills">;
  "admin-skills-api-docs:delete-campaigns-id-skills:DELETE:/campaigns/{campaignId}/skills": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:delete-campaigns-id-skills:DELETE:/campaigns/{campaignId}/skills">;
  "admin-skills-api-docs:get-dispositions:GET:/dispositions": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:get-dispositions:GET:/dispositions">;
  "admin-skills-api-docs:post-dispositions:POST:/dispositions": NiceCxoneFullApiOperationInput<"admin-skills-api-docs:post-dispositions:POST:/dispositions">;
}

export interface NiceCxoneFullApiSkillsGeneratedClient {
  AdminSkillsApiDocsGetCampaigns(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-campaigns:GET:/campaigns">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-campaigns:GET:/campaigns"]>;
  AdminSkillsApiDocsPostCampaigns(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:post-campaigns:POST:/campaigns">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:post-campaigns:POST:/campaigns"]>;
  AdminSkillsApiDocsGetCampaignsId(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-campaigns-id:GET:/campaigns/{campaignId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-campaigns-id:GET:/campaigns/{campaignId}"]>;
  AdminSkillsApiDocsPutCampaignsId(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-campaigns-id:PUT:/campaigns/{campaignId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:put-campaigns-id:PUT:/campaigns/{campaignId}"]>;
  AdminSkillsApiDocsGetCampaignsIdSkillsUnassigned(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-campaigns-id-skills-unassigned:GET:/campaigns/{campaignId}/skills/unassigned">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-campaigns-id-skills-unassigned:GET:/campaigns/{campaignId}/skills/unassigned"]>;
  AdminSkillsApiDocsPatchCampaignsIdStatus(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:patch-campaigns-id-status:PATCH:/campaigns/{campaignId}/status">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:patch-campaigns-id-status:PATCH:/campaigns/{campaignId}/status"]>;
  AdminSkillsApiDocsGetCampaignsIdAuditHistory(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-campaigns-id-audit-history:GET:/campaigns/{campaignId}/audit-history">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-campaigns-id-audit-history:GET:/campaigns/{campaignId}/audit-history"]>;
  AdminSkillsApiDocsGetDispositionsSkills(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-dispositions-skills:GET:/dispositions/skills">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-dispositions-skills:GET:/dispositions/skills"]>;
  AdminSkillsApiDocsGetDispositionsId(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-dispositions-id:GET:/dispositions/{dispositionId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-dispositions-id:GET:/dispositions/{dispositionId}"]>;
  AdminSkillsApiDocsPutDispositionsId(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-dispositions-id:PUT:/dispositions/{dispositionId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:put-dispositions-id:PUT:/dispositions/{dispositionId}"]>;
  AdminSkillsApiDocsGetDispositionsIdSkills(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-dispositions-id-skills:GET:/dispositions/{dispositionId}/skills">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-dispositions-id-skills:GET:/dispositions/{dispositionId}/skills"]>;
  AdminSkillsApiDocsDispostionClassifications(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:DispostionClassifications:GET:/dispositions/classifications">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:DispostionClassifications:GET:/dispositions/classifications"]>;
  AdminSkillsApiDocsPatchStatusByDispositionsId(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:patch-status-by-dispositions-id:PATCH:/dispositions/{dispositionId}/status">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:patch-status-by-dispositions-id:PATCH:/dispositions/{dispositionId}/status"]>;
  AdminSkillsApiDocsGetDispositionsIdAuditHistory(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-dispositions-id-audit-history:GET:/dispositions/{dispositionId}/audit-history">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-dispositions-id-audit-history:GET:/dispositions/{dispositionId}/audit-history"]>;
  AdminSkillsApiDocsGetSkills(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills:GET:/skills">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-skills:GET:/skills"]>;
  AdminSkillsApiDocsPostSkills(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:post-skills:POST:/skills">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:post-skills:POST:/skills"]>;
  AdminSkillsApiDocsGetSkillsParameters(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-parameters:GET:/skills/parameters">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-skills-parameters:GET:/skills/parameters"]>;
  AdminSkillsApiDocsGetSkillsId(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-id:GET:/skills/{skillId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-skills-id:GET:/skills/{skillId}"]>;
  AdminSkillsApiDocsPutSkillsId(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-skills-id:PUT:/skills/{skillId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:put-skills-id:PUT:/skills/{skillId}"]>;
  AdminSkillsApiDocsGetSkillsIdParameters(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-id-parameters:GET:/skills/{skillId}/parameters">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-skills-id-parameters:GET:/skills/{skillId}/parameters"]>;
  AdminSkillsApiDocsGetSkillsIdThankYouPage(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-id-thank-you-page:GET:/skills/{skillId}/thank-you-page">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-skills-id-thank-you-page:GET:/skills/{skillId}/thank-you-page"]>;
  AdminSkillsApiDocsPostSkillsSkillIdStart(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:post_/skills/{skillId}/start:POST:/skills/{skillId}/start">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:post_/skills/{skillId}/start:POST:/skills/{skillId}/start"]>;
  AdminSkillsApiDocsPostSkillsSkillIdStop(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:post_/skills/{skillId}/stop:POST:/skills/{skillId}/stop">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:post_/skills/{skillId}/stop:POST:/skills/{skillId}/stop"]>;
  AdminSkillsApiDocsGetAgentsAllSkills(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:getAgentsAllSkills:GET:/skills/agents">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:getAgentsAllSkills:GET:/skills/agents"]>;
  AdminSkillsApiDocsGetAgentsBySkillId(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:getAgentsBySkillId:GET:/skills/{skillId}/agents">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:getAgentsBySkillId:GET:/skills/{skillId}/agents"]>;
  AdminSkillsApiDocsAgentAssignmentsSkill(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:AgentAssignmentsSkill:POST:/skills/{skillId}/agents">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:AgentAssignmentsSkill:POST:/skills/{skillId}/agents"]>;
  AdminSkillsApiDocsModifyAssignmentsSkill(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:ModifyAssignmentsSkill:PUT:/skills/{skillId}/agents">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:ModifyAssignmentsSkill:PUT:/skills/{skillId}/agents"]>;
  AdminSkillsApiDocsRemoveAgentAssignmentsSkill(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:RemoveAgentAssignmentsSkill:DELETE:/skills/{skillId}/agents">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:RemoveAgentAssignmentsSkill:DELETE:/skills/{skillId}/agents"]>;
  AdminSkillsApiDocsDeleteSkillsIdAgentsId(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:delete-skills-id-agents-id:DELETE:/skills/{skillId}/agents/{agentId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:delete-skills-id-agents-id:DELETE:/skills/{skillId}/agents/{agentId}"]>;
  AdminSkillsApiDocsGetAgentsThatAreNotAssignedToSkill(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:GetAgentsThatAreNotAssignedToSkill:GET:/skills/{skillId}/agents/unassigned">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:GetAgentsThatAreNotAssignedToSkill:GET:/skills/{skillId}/agents/unassigned"]>;
  AdminSkillsApiDocsSKILLCALLDATA(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:SKILLCALLDATA:GET:/skills/call-data">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:SKILLCALLDATA:GET:/skills/call-data"]>;
  AdminSkillsApiDocsSkillCallData(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:SkillCallData:GET:/skills/{skillId}/call-data">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:SkillCallData:GET:/skills/{skillId}/call-data"]>;
  AdminSkillsApiDocsDispositionList(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:DispositionList:GET:/skills/{skillId}/dispositions">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:DispositionList:GET:/skills/{skillId}/dispositions"]>;
  AdminSkillsApiDocsDispositionsNotAssignedSkill(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:DispositionsNotAssignedSkill:GET:/skills/{skillId}/dispositions/unassigned">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:DispositionsNotAssignedSkill:GET:/skills/{skillId}/dispositions/unassigned"]>;
  AdminSkillsApiDocsGetTagsSkill(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:GetTagsSkill:GET:/skills/{skillId}/tags">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:GetTagsSkill:GET:/skills/{skillId}/tags"]>;
  AdminSkillsApiDocsAssignTagSkill(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:AssignTagSkill:POST:/skills/{skillId}/tags">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:AssignTagSkill:POST:/skills/{skillId}/tags"]>;
  AdminSkillsApiDocsRemoveTagsSkill(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:RemoveTagsSkill:DELETE:/skills/{skillId}/tags">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:RemoveTagsSkill:DELETE:/skills/{skillId}/tags"]>;
  AdminSkillsApiDocsGetSkillsIdParametersGeneralSettings(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-id-parameters-general-settings:GET:/skills/{skillId}/parameters/general-settings">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-skills-id-parameters-general-settings:GET:/skills/{skillId}/parameters/general-settings"]>;
  AdminSkillsApiDocsPutSkillsIdParametersGeneralSettings(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-skills-id-parameters-general-settings:PUT:/skills/{skillId}/parameters/general-settings">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:put-skills-id-parameters-general-settings:PUT:/skills/{skillId}/parameters/general-settings"]>;
  AdminSkillsApiDocsGetSkillsIdParametersCpaManagement(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-id-parameters-cpa-management:GET:/skills/{skillId}/parameters/cpa-management">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-skills-id-parameters-cpa-management:GET:/skills/{skillId}/parameters/cpa-management"]>;
  AdminSkillsApiDocsPutSkillsIdParametersCpaManagement(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-skills-id-parameters-cpa-management:PUT:/skills/{skillId}/parameters/cpa-management">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:put-skills-id-parameters-cpa-management:PUT:/skills/{skillId}/parameters/cpa-management"]>;
  AdminSkillsApiDocsGetSkillsIdParametersXsSettings(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-id-parameters-xs-settings:GET:/skills/{skillId}/parameters/xs-settings">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-skills-id-parameters-xs-settings:GET:/skills/{skillId}/parameters/xs-settings"]>;
  AdminSkillsApiDocsPutSkillsIdParametersXsSettings(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-skills-id-parameters-xs-settings:PUT:/skills/{skillId}/parameters/xs-settings">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:put-skills-id-parameters-xs-settings:PUT:/skills/{skillId}/parameters/xs-settings"]>;
  AdminSkillsApiDocsGetSkillsIdParametersDeliveryPreferences(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-id-parameters-delivery-preferences:GET:/skills/{skillId}/parameters/delivery-preferences">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-skills-id-parameters-delivery-preferences:GET:/skills/{skillId}/parameters/delivery-preferences"]>;
  AdminSkillsApiDocsPutSkillsIdParametersDeliveryPreferences(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-skills-id-parameters-delivery-preferences:PUT:/skills/{skillId}/parameters/delivery-preferences">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:put-skills-id-parameters-delivery-preferences:PUT:/skills/{skillId}/parameters/delivery-preferences"]>;
  AdminSkillsApiDocsGetSkillsIdParametersRetrySettings(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-id-parameters-retry-settings:GET:/skills/{skillId}/parameters/retry-settings">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-skills-id-parameters-retry-settings:GET:/skills/{skillId}/parameters/retry-settings"]>;
  AdminSkillsApiDocsPutSkillsIdParametersRetrySettings(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-skills-id-parameters-retry-settings:PUT:/skills/{skillId}/parameters/retry-settings">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:put-skills-id-parameters-retry-settings:PUT:/skills/{skillId}/parameters/retry-settings"]>;
  AdminSkillsApiDocsGetSkillsIdParametersScheduleSettings(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-id-parameters-schedule-settings:GET:/skills/{skillId}/parameters/schedule-settings">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-skills-id-parameters-schedule-settings:GET:/skills/{skillId}/parameters/schedule-settings"]>;
  AdminSkillsApiDocsPutSkillsIdParametersScheduleSettings(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-skills-id-parameters-schedule-settings:PUT:/skills/{skillId}/parameters/schedule-settings">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:put-skills-id-parameters-schedule-settings:PUT:/skills/{skillId}/parameters/schedule-settings"]>;
  AdminSkillsApiDocsPutSkillsIdParametersCadenceSettings(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-skills-id-parameters-cadence-settings:PUT:/skills/{skillId}/parameters/cadence-settings">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:put-skills-id-parameters-cadence-settings:PUT:/skills/{skillId}/parameters/cadence-settings"]>;
  AdminSkillsApiDocsGetSkillsIdParametersTimeZones(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-id-parameters-time-zones:GET:/skills/{skillId}/parameters/time-zones">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-skills-id-parameters-time-zones:GET:/skills/{skillId}/parameters/time-zones"]>;
  AdminSkillsApiDocsPutSkillsIdParametersTimeZones(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-skills-id-parameters-time-zones:PUT:/skills/{skillId}/parameters/time-zones">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:put-skills-id-parameters-time-zones:PUT:/skills/{skillId}/parameters/time-zones"]>;
  AdminSkillsApiDocsPutSkillsIdParametersListManagement(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-skills-id-parameters-list-management:PUT:/skills/{skillId}/parameters/list-management">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:put-skills-id-parameters-list-management:PUT:/skills/{skillId}/parameters/list-management"]>;
  AdminSkillsApiDocsGetCampaignsIdSkills(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-campaigns-id-skills:GET:/campaigns/{campaignId}/skills">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-campaigns-id-skills:GET:/campaigns/{campaignId}/skills"]>;
  AdminSkillsApiDocsPostCampaignsIdSkills(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:post-campaigns-id-skills:POST:/campaigns/{campaignId}/skills">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:post-campaigns-id-skills:POST:/campaigns/{campaignId}/skills"]>;
  AdminSkillsApiDocsDeleteCampaignsIdSkills(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:delete-campaigns-id-skills:DELETE:/campaigns/{campaignId}/skills">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:delete-campaigns-id-skills:DELETE:/campaigns/{campaignId}/skills"]>;
  AdminSkillsApiDocsGetDispositions(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-dispositions:GET:/dispositions">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:get-dispositions:GET:/dispositions"]>;
  AdminSkillsApiDocsPostDispositions(...args: NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:post-dispositions:POST:/dispositions">): Promise<NiceCxoneFullApiOperationResponseMap["admin-skills-api-docs:post-dispositions:POST:/dispositions"]>;
}

export const NiceCxoneFullApiSkillsGeneratedFunctionNames = [
  "AdminSkillsApiDocsGetCampaigns",
  "AdminSkillsApiDocsPostCampaigns",
  "AdminSkillsApiDocsGetCampaignsId",
  "AdminSkillsApiDocsPutCampaignsId",
  "AdminSkillsApiDocsGetCampaignsIdSkillsUnassigned",
  "AdminSkillsApiDocsPatchCampaignsIdStatus",
  "AdminSkillsApiDocsGetCampaignsIdAuditHistory",
  "AdminSkillsApiDocsGetDispositionsSkills",
  "AdminSkillsApiDocsGetDispositionsId",
  "AdminSkillsApiDocsPutDispositionsId",
  "AdminSkillsApiDocsGetDispositionsIdSkills",
  "AdminSkillsApiDocsDispostionClassifications",
  "AdminSkillsApiDocsPatchStatusByDispositionsId",
  "AdminSkillsApiDocsGetDispositionsIdAuditHistory",
  "AdminSkillsApiDocsGetSkills",
  "AdminSkillsApiDocsPostSkills",
  "AdminSkillsApiDocsGetSkillsParameters",
  "AdminSkillsApiDocsGetSkillsId",
  "AdminSkillsApiDocsPutSkillsId",
  "AdminSkillsApiDocsGetSkillsIdParameters",
  "AdminSkillsApiDocsGetSkillsIdThankYouPage",
  "AdminSkillsApiDocsPostSkillsSkillIdStart",
  "AdminSkillsApiDocsPostSkillsSkillIdStop",
  "AdminSkillsApiDocsGetAgentsAllSkills",
  "AdminSkillsApiDocsGetAgentsBySkillId",
  "AdminSkillsApiDocsAgentAssignmentsSkill",
  "AdminSkillsApiDocsModifyAssignmentsSkill",
  "AdminSkillsApiDocsRemoveAgentAssignmentsSkill",
  "AdminSkillsApiDocsDeleteSkillsIdAgentsId",
  "AdminSkillsApiDocsGetAgentsThatAreNotAssignedToSkill",
  "AdminSkillsApiDocsSKILLCALLDATA",
  "AdminSkillsApiDocsSkillCallData",
  "AdminSkillsApiDocsDispositionList",
  "AdminSkillsApiDocsDispositionsNotAssignedSkill",
  "AdminSkillsApiDocsGetTagsSkill",
  "AdminSkillsApiDocsAssignTagSkill",
  "AdminSkillsApiDocsRemoveTagsSkill",
  "AdminSkillsApiDocsGetSkillsIdParametersGeneralSettings",
  "AdminSkillsApiDocsPutSkillsIdParametersGeneralSettings",
  "AdminSkillsApiDocsGetSkillsIdParametersCpaManagement",
  "AdminSkillsApiDocsPutSkillsIdParametersCpaManagement",
  "AdminSkillsApiDocsGetSkillsIdParametersXsSettings",
  "AdminSkillsApiDocsPutSkillsIdParametersXsSettings",
  "AdminSkillsApiDocsGetSkillsIdParametersDeliveryPreferences",
  "AdminSkillsApiDocsPutSkillsIdParametersDeliveryPreferences",
  "AdminSkillsApiDocsGetSkillsIdParametersRetrySettings",
  "AdminSkillsApiDocsPutSkillsIdParametersRetrySettings",
  "AdminSkillsApiDocsGetSkillsIdParametersScheduleSettings",
  "AdminSkillsApiDocsPutSkillsIdParametersScheduleSettings",
  "AdminSkillsApiDocsPutSkillsIdParametersCadenceSettings",
  "AdminSkillsApiDocsGetSkillsIdParametersTimeZones",
  "AdminSkillsApiDocsPutSkillsIdParametersTimeZones",
  "AdminSkillsApiDocsPutSkillsIdParametersListManagement",
  "AdminSkillsApiDocsGetCampaignsIdSkills",
  "AdminSkillsApiDocsPostCampaignsIdSkills",
  "AdminSkillsApiDocsDeleteCampaignsIdSkills",
  "AdminSkillsApiDocsGetDispositions",
  "AdminSkillsApiDocsPostDispositions"
] as const satisfies readonly (keyof NiceCxoneFullApiSkillsGeneratedClient)[];

export function createNiceCxoneFullApiSkillsGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiSkillsGeneratedClient {
  return {
    AdminSkillsApiDocsGetCampaigns: (...args) => callOperation("admin-skills-api-docs:get-campaigns:GET:/campaigns", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-campaigns:GET:/campaigns">)),
    AdminSkillsApiDocsPostCampaigns: (...args) => callOperation("admin-skills-api-docs:post-campaigns:POST:/campaigns", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:post-campaigns:POST:/campaigns">)),
    AdminSkillsApiDocsGetCampaignsId: (...args) => callOperation("admin-skills-api-docs:get-campaigns-id:GET:/campaigns/{campaignId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-campaigns-id:GET:/campaigns/{campaignId}">)),
    AdminSkillsApiDocsPutCampaignsId: (...args) => callOperation("admin-skills-api-docs:put-campaigns-id:PUT:/campaigns/{campaignId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-campaigns-id:PUT:/campaigns/{campaignId}">)),
    AdminSkillsApiDocsGetCampaignsIdSkillsUnassigned: (...args) => callOperation("admin-skills-api-docs:get-campaigns-id-skills-unassigned:GET:/campaigns/{campaignId}/skills/unassigned", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-campaigns-id-skills-unassigned:GET:/campaigns/{campaignId}/skills/unassigned">)),
    AdminSkillsApiDocsPatchCampaignsIdStatus: (...args) => callOperation("admin-skills-api-docs:patch-campaigns-id-status:PATCH:/campaigns/{campaignId}/status", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:patch-campaigns-id-status:PATCH:/campaigns/{campaignId}/status">)),
    AdminSkillsApiDocsGetCampaignsIdAuditHistory: (...args) => callOperation("admin-skills-api-docs:get-campaigns-id-audit-history:GET:/campaigns/{campaignId}/audit-history", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-campaigns-id-audit-history:GET:/campaigns/{campaignId}/audit-history">)),
    AdminSkillsApiDocsGetDispositionsSkills: (...args) => callOperation("admin-skills-api-docs:get-dispositions-skills:GET:/dispositions/skills", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-dispositions-skills:GET:/dispositions/skills">)),
    AdminSkillsApiDocsGetDispositionsId: (...args) => callOperation("admin-skills-api-docs:get-dispositions-id:GET:/dispositions/{dispositionId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-dispositions-id:GET:/dispositions/{dispositionId}">)),
    AdminSkillsApiDocsPutDispositionsId: (...args) => callOperation("admin-skills-api-docs:put-dispositions-id:PUT:/dispositions/{dispositionId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-dispositions-id:PUT:/dispositions/{dispositionId}">)),
    AdminSkillsApiDocsGetDispositionsIdSkills: (...args) => callOperation("admin-skills-api-docs:get-dispositions-id-skills:GET:/dispositions/{dispositionId}/skills", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-dispositions-id-skills:GET:/dispositions/{dispositionId}/skills">)),
    AdminSkillsApiDocsDispostionClassifications: (...args) => callOperation("admin-skills-api-docs:DispostionClassifications:GET:/dispositions/classifications", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:DispostionClassifications:GET:/dispositions/classifications">)),
    AdminSkillsApiDocsPatchStatusByDispositionsId: (...args) => callOperation("admin-skills-api-docs:patch-status-by-dispositions-id:PATCH:/dispositions/{dispositionId}/status", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:patch-status-by-dispositions-id:PATCH:/dispositions/{dispositionId}/status">)),
    AdminSkillsApiDocsGetDispositionsIdAuditHistory: (...args) => callOperation("admin-skills-api-docs:get-dispositions-id-audit-history:GET:/dispositions/{dispositionId}/audit-history", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-dispositions-id-audit-history:GET:/dispositions/{dispositionId}/audit-history">)),
    AdminSkillsApiDocsGetSkills: (...args) => callOperation("admin-skills-api-docs:get-skills:GET:/skills", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills:GET:/skills">)),
    AdminSkillsApiDocsPostSkills: (...args) => callOperation("admin-skills-api-docs:post-skills:POST:/skills", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:post-skills:POST:/skills">)),
    AdminSkillsApiDocsGetSkillsParameters: (...args) => callOperation("admin-skills-api-docs:get-skills-parameters:GET:/skills/parameters", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-parameters:GET:/skills/parameters">)),
    AdminSkillsApiDocsGetSkillsId: (...args) => callOperation("admin-skills-api-docs:get-skills-id:GET:/skills/{skillId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-id:GET:/skills/{skillId}">)),
    AdminSkillsApiDocsPutSkillsId: (...args) => callOperation("admin-skills-api-docs:put-skills-id:PUT:/skills/{skillId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-skills-id:PUT:/skills/{skillId}">)),
    AdminSkillsApiDocsGetSkillsIdParameters: (...args) => callOperation("admin-skills-api-docs:get-skills-id-parameters:GET:/skills/{skillId}/parameters", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-id-parameters:GET:/skills/{skillId}/parameters">)),
    AdminSkillsApiDocsGetSkillsIdThankYouPage: (...args) => callOperation("admin-skills-api-docs:get-skills-id-thank-you-page:GET:/skills/{skillId}/thank-you-page", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-id-thank-you-page:GET:/skills/{skillId}/thank-you-page">)),
    AdminSkillsApiDocsPostSkillsSkillIdStart: (...args) => callOperation("admin-skills-api-docs:post_/skills/{skillId}/start:POST:/skills/{skillId}/start", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:post_/skills/{skillId}/start:POST:/skills/{skillId}/start">)),
    AdminSkillsApiDocsPostSkillsSkillIdStop: (...args) => callOperation("admin-skills-api-docs:post_/skills/{skillId}/stop:POST:/skills/{skillId}/stop", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:post_/skills/{skillId}/stop:POST:/skills/{skillId}/stop">)),
    AdminSkillsApiDocsGetAgentsAllSkills: (...args) => callOperation("admin-skills-api-docs:getAgentsAllSkills:GET:/skills/agents", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:getAgentsAllSkills:GET:/skills/agents">)),
    AdminSkillsApiDocsGetAgentsBySkillId: (...args) => callOperation("admin-skills-api-docs:getAgentsBySkillId:GET:/skills/{skillId}/agents", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:getAgentsBySkillId:GET:/skills/{skillId}/agents">)),
    AdminSkillsApiDocsAgentAssignmentsSkill: (...args) => callOperation("admin-skills-api-docs:AgentAssignmentsSkill:POST:/skills/{skillId}/agents", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:AgentAssignmentsSkill:POST:/skills/{skillId}/agents">)),
    AdminSkillsApiDocsModifyAssignmentsSkill: (...args) => callOperation("admin-skills-api-docs:ModifyAssignmentsSkill:PUT:/skills/{skillId}/agents", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:ModifyAssignmentsSkill:PUT:/skills/{skillId}/agents">)),
    AdminSkillsApiDocsRemoveAgentAssignmentsSkill: (...args) => callOperation("admin-skills-api-docs:RemoveAgentAssignmentsSkill:DELETE:/skills/{skillId}/agents", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:RemoveAgentAssignmentsSkill:DELETE:/skills/{skillId}/agents">)),
    AdminSkillsApiDocsDeleteSkillsIdAgentsId: (...args) => callOperation("admin-skills-api-docs:delete-skills-id-agents-id:DELETE:/skills/{skillId}/agents/{agentId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:delete-skills-id-agents-id:DELETE:/skills/{skillId}/agents/{agentId}">)),
    AdminSkillsApiDocsGetAgentsThatAreNotAssignedToSkill: (...args) => callOperation("admin-skills-api-docs:GetAgentsThatAreNotAssignedToSkill:GET:/skills/{skillId}/agents/unassigned", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:GetAgentsThatAreNotAssignedToSkill:GET:/skills/{skillId}/agents/unassigned">)),
    AdminSkillsApiDocsSKILLCALLDATA: (...args) => callOperation("admin-skills-api-docs:SKILLCALLDATA:GET:/skills/call-data", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:SKILLCALLDATA:GET:/skills/call-data">)),
    AdminSkillsApiDocsSkillCallData: (...args) => callOperation("admin-skills-api-docs:SkillCallData:GET:/skills/{skillId}/call-data", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:SkillCallData:GET:/skills/{skillId}/call-data">)),
    AdminSkillsApiDocsDispositionList: (...args) => callOperation("admin-skills-api-docs:DispositionList:GET:/skills/{skillId}/dispositions", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:DispositionList:GET:/skills/{skillId}/dispositions">)),
    AdminSkillsApiDocsDispositionsNotAssignedSkill: (...args) => callOperation("admin-skills-api-docs:DispositionsNotAssignedSkill:GET:/skills/{skillId}/dispositions/unassigned", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:DispositionsNotAssignedSkill:GET:/skills/{skillId}/dispositions/unassigned">)),
    AdminSkillsApiDocsGetTagsSkill: (...args) => callOperation("admin-skills-api-docs:GetTagsSkill:GET:/skills/{skillId}/tags", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:GetTagsSkill:GET:/skills/{skillId}/tags">)),
    AdminSkillsApiDocsAssignTagSkill: (...args) => callOperation("admin-skills-api-docs:AssignTagSkill:POST:/skills/{skillId}/tags", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:AssignTagSkill:POST:/skills/{skillId}/tags">)),
    AdminSkillsApiDocsRemoveTagsSkill: (...args) => callOperation("admin-skills-api-docs:RemoveTagsSkill:DELETE:/skills/{skillId}/tags", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:RemoveTagsSkill:DELETE:/skills/{skillId}/tags">)),
    AdminSkillsApiDocsGetSkillsIdParametersGeneralSettings: (...args) => callOperation("admin-skills-api-docs:get-skills-id-parameters-general-settings:GET:/skills/{skillId}/parameters/general-settings", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-id-parameters-general-settings:GET:/skills/{skillId}/parameters/general-settings">)),
    AdminSkillsApiDocsPutSkillsIdParametersGeneralSettings: (...args) => callOperation("admin-skills-api-docs:put-skills-id-parameters-general-settings:PUT:/skills/{skillId}/parameters/general-settings", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-skills-id-parameters-general-settings:PUT:/skills/{skillId}/parameters/general-settings">)),
    AdminSkillsApiDocsGetSkillsIdParametersCpaManagement: (...args) => callOperation("admin-skills-api-docs:get-skills-id-parameters-cpa-management:GET:/skills/{skillId}/parameters/cpa-management", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-id-parameters-cpa-management:GET:/skills/{skillId}/parameters/cpa-management">)),
    AdminSkillsApiDocsPutSkillsIdParametersCpaManagement: (...args) => callOperation("admin-skills-api-docs:put-skills-id-parameters-cpa-management:PUT:/skills/{skillId}/parameters/cpa-management", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-skills-id-parameters-cpa-management:PUT:/skills/{skillId}/parameters/cpa-management">)),
    AdminSkillsApiDocsGetSkillsIdParametersXsSettings: (...args) => callOperation("admin-skills-api-docs:get-skills-id-parameters-xs-settings:GET:/skills/{skillId}/parameters/xs-settings", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-id-parameters-xs-settings:GET:/skills/{skillId}/parameters/xs-settings">)),
    AdminSkillsApiDocsPutSkillsIdParametersXsSettings: (...args) => callOperation("admin-skills-api-docs:put-skills-id-parameters-xs-settings:PUT:/skills/{skillId}/parameters/xs-settings", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-skills-id-parameters-xs-settings:PUT:/skills/{skillId}/parameters/xs-settings">)),
    AdminSkillsApiDocsGetSkillsIdParametersDeliveryPreferences: (...args) => callOperation("admin-skills-api-docs:get-skills-id-parameters-delivery-preferences:GET:/skills/{skillId}/parameters/delivery-preferences", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-id-parameters-delivery-preferences:GET:/skills/{skillId}/parameters/delivery-preferences">)),
    AdminSkillsApiDocsPutSkillsIdParametersDeliveryPreferences: (...args) => callOperation("admin-skills-api-docs:put-skills-id-parameters-delivery-preferences:PUT:/skills/{skillId}/parameters/delivery-preferences", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-skills-id-parameters-delivery-preferences:PUT:/skills/{skillId}/parameters/delivery-preferences">)),
    AdminSkillsApiDocsGetSkillsIdParametersRetrySettings: (...args) => callOperation("admin-skills-api-docs:get-skills-id-parameters-retry-settings:GET:/skills/{skillId}/parameters/retry-settings", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-id-parameters-retry-settings:GET:/skills/{skillId}/parameters/retry-settings">)),
    AdminSkillsApiDocsPutSkillsIdParametersRetrySettings: (...args) => callOperation("admin-skills-api-docs:put-skills-id-parameters-retry-settings:PUT:/skills/{skillId}/parameters/retry-settings", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-skills-id-parameters-retry-settings:PUT:/skills/{skillId}/parameters/retry-settings">)),
    AdminSkillsApiDocsGetSkillsIdParametersScheduleSettings: (...args) => callOperation("admin-skills-api-docs:get-skills-id-parameters-schedule-settings:GET:/skills/{skillId}/parameters/schedule-settings", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-id-parameters-schedule-settings:GET:/skills/{skillId}/parameters/schedule-settings">)),
    AdminSkillsApiDocsPutSkillsIdParametersScheduleSettings: (...args) => callOperation("admin-skills-api-docs:put-skills-id-parameters-schedule-settings:PUT:/skills/{skillId}/parameters/schedule-settings", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-skills-id-parameters-schedule-settings:PUT:/skills/{skillId}/parameters/schedule-settings">)),
    AdminSkillsApiDocsPutSkillsIdParametersCadenceSettings: (...args) => callOperation("admin-skills-api-docs:put-skills-id-parameters-cadence-settings:PUT:/skills/{skillId}/parameters/cadence-settings", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-skills-id-parameters-cadence-settings:PUT:/skills/{skillId}/parameters/cadence-settings">)),
    AdminSkillsApiDocsGetSkillsIdParametersTimeZones: (...args) => callOperation("admin-skills-api-docs:get-skills-id-parameters-time-zones:GET:/skills/{skillId}/parameters/time-zones", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-skills-id-parameters-time-zones:GET:/skills/{skillId}/parameters/time-zones">)),
    AdminSkillsApiDocsPutSkillsIdParametersTimeZones: (...args) => callOperation("admin-skills-api-docs:put-skills-id-parameters-time-zones:PUT:/skills/{skillId}/parameters/time-zones", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-skills-id-parameters-time-zones:PUT:/skills/{skillId}/parameters/time-zones">)),
    AdminSkillsApiDocsPutSkillsIdParametersListManagement: (...args) => callOperation("admin-skills-api-docs:put-skills-id-parameters-list-management:PUT:/skills/{skillId}/parameters/list-management", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:put-skills-id-parameters-list-management:PUT:/skills/{skillId}/parameters/list-management">)),
    AdminSkillsApiDocsGetCampaignsIdSkills: (...args) => callOperation("admin-skills-api-docs:get-campaigns-id-skills:GET:/campaigns/{campaignId}/skills", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-campaigns-id-skills:GET:/campaigns/{campaignId}/skills">)),
    AdminSkillsApiDocsPostCampaignsIdSkills: (...args) => callOperation("admin-skills-api-docs:post-campaigns-id-skills:POST:/campaigns/{campaignId}/skills", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:post-campaigns-id-skills:POST:/campaigns/{campaignId}/skills">)),
    AdminSkillsApiDocsDeleteCampaignsIdSkills: (...args) => callOperation("admin-skills-api-docs:delete-campaigns-id-skills:DELETE:/campaigns/{campaignId}/skills", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:delete-campaigns-id-skills:DELETE:/campaigns/{campaignId}/skills">)),
    AdminSkillsApiDocsGetDispositions: (...args) => callOperation("admin-skills-api-docs:get-dispositions:GET:/dispositions", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:get-dispositions:GET:/dispositions">)),
    AdminSkillsApiDocsPostDispositions: (...args) => callOperation("admin-skills-api-docs:post-dispositions:POST:/dispositions", ...(args as NiceCxoneFullApiOperationArgs<"admin-skills-api-docs:post-dispositions:POST:/dispositions">)),
  };
}
