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
export const NiceCxoneFullApiAgentsOperationKeys = [
  "admin-agents-api-docs:get-agents:GET:/agents",
  "admin-agents-api-docs:operations-Agents-post-agents:POST:/agents",
  "admin-agents-api-docs:operations-Agents-put-agents:PUT:/agents",
  "admin-agents-api-docs:operations-Agents-get-agents-id:GET:/agents/{agentId|userId}",
  "admin-agents-api-docs:operations-Agents-put-agents-id:PUT:/agents/{agentId|userId}",
  "admin-agents-api-docs:SetAgentState:POST:/agents/{agentId}/state",
  "admin-agents-api-docs:get-agents-skills:GET:/agents/skills",
  "admin-agents-api-docs:post-agents-skills:POST:/agents/skills",
  "admin-agents-api-docs:post-agents-search:POST:/agents/search",
  "admin-agents-api-docs:post-skills-agents-search:POST:/skills/agents/search",
  "admin-agents-api-docs:get-agent-configuration:GET:/agents/{agentId}/agent-configuration",
  "admin-agents-api-docs:getagentbyagentidgroups:GET:/agents/{agentId}/groups",
  "admin-agents-api-docs:getSkillsByAgentId:GET:/agents/{agentId|userId}/skills",
  "admin-agents-api-docs:AssignsSkillsToAnAgent:POST:/agents/{agentId|userId}/skills",
  "admin-agents-api-docs:ModifySkillAssignmentsForAgent:PUT:/agents/{agentId|userId}/skills",
  "admin-agents-api-docs:RemoveSkillAssignmentsForAgent:DELETE:/agents/{agentId|userId}/skills",
  "admin-agents-api-docs:GetSkillsNotAssignedToAgent:GET:/agents/{agentId}/skills/unassigned",
  "admin-agents-api-docs:AgentSkillData:GET:/agents/skill-data",
  "admin-agents-api-docs:AgentSkillDataForSkillid:GET:/agents/{agentId}/skill-data",
  "admin-agents-api-docs:put_/agents/{agentId}/custom-event:PUT:/agents/{agentId}/custom-event",
  "admin-agents-api-docs:QuickReplies:GET:/agents/quick-replies",
  "admin-agents-api-docs:QuickRepliesByAgent:GET:/agents/{agentId}/quick-replies",
  "admin-agents-api-docs:CreateMessage:POST:/agents/messages",
  "admin-agents-api-docs:deleteMessagebyMessageId:DELETE:/agents/messages/{messageId}",
  "admin-agents-api-docs:AgentMessageList:GET:/agents/{agentId}/messages",
  "admin-agents-api-docs:AgentIndicatorList:GET:/agents/{agentId}/indicators",
  "admin-agents-api-docs:agentLogout:POST:/agents/{agentId}/logout",
  "admin-agents-api-docs:GetAgentDialingPatterns:GET:/agent-patterns",
  "admin-agents-api-docs:post-agent-patterns-id-transform-phonenumbers:POST:/agent-patterns/{agentpatternId}/transform-phonenumbers",
  "admin-agents-api-docs:getAgentStates:GET:/agents-states",
  "admin-agents-api-docs:get-agents-extended:GET:/agents/extended",
  "admin-agents-api-docs:get-agents-issues:GET:/agents/issues",
  "admin-agents-api-docs:get-agent-messages-id:GET:/agent-messages/{messageGroupId}",
  "admin-agents-api-docs:get-gents-skills-download:GET:/agents/skills-download",
  "admin-agents-api-docs:get_/teams:GET:/teams",
  "admin-agents-api-docs:post-teams:POST:/teams",
  "admin-agents-api-docs:get-teams-id:GET:/teams/{teamId}",
  "admin-agents-api-docs:put-teams-id:PUT:/teams/{teamId}",
  "admin-agents-api-docs:TeamsAgents:GET:/teams/agents",
  "admin-agents-api-docs:get-teams-id-agents:GET:/teams/{teamId}/agents",
  "admin-agents-api-docs:AssignAgentsToTeam:POST:/teams/{teamId}/agents",
  "admin-agents-api-docs:RemoveAgentsFromTeam:DELETE:/teams/{teamId}/agents",
  "admin-agents-api-docs:get-teams-id-unavailable-codes:GET:/teams/{teamId}/unavailable-codes",
  "admin-agents-api-docs:AssignUnavailableCode:POST:/teams/{teamId}/unavailable-codes",
  "admin-agents-api-docs:put-teams-id-unavailable-codes:PUT:/teams/{teamId}/unavailable-codes",
  "admin-agents-api-docs:RemoveUnavailableCodeTeam:DELETE:/teams/{teamId}/unavailable-codes",
  "admin-agents-api-docs:get-access-keys:GET:/access-keys",
  "admin-agents-api-docs:post-access-keys:POST:/access-keys",
  "admin-agents-api-docs:get-access-keys-id:GET:/access-keys/{accessKeyId}",
  "admin-agents-api-docs:delete-access-keys-id:DELETE:/access-keys/{accessKeyId}",
  "admin-agents-api-docs:patch-access-keys-id:PATCH:/access-keys/{accessKeyId}",
  "admin-agents-api-docs:get-activesupervisors:GET:/activesupervisors",
  "admin-agents-api-docs:enhancedCustomerCard:POST:/enhancedcustomercard"
] as const;
export type NiceCxoneFullApiAgentsOperationKey = typeof NiceCxoneFullApiAgentsOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiAgentsOperationPathParamMap {
  "admin-agents-api-docs:get-agents:GET:/agents": {};
  "admin-agents-api-docs:operations-Agents-post-agents:POST:/agents": {};
  "admin-agents-api-docs:operations-Agents-put-agents:PUT:/agents": {};
  "admin-agents-api-docs:operations-Agents-get-agents-id:GET:/agents/{agentId|userId}": { "agentId|userId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:operations-Agents-put-agents-id:PUT:/agents/{agentId|userId}": { "agentId|userId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:SetAgentState:POST:/agents/{agentId}/state": { "agentId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:get-agents-skills:GET:/agents/skills": {};
  "admin-agents-api-docs:post-agents-skills:POST:/agents/skills": {};
  "admin-agents-api-docs:post-agents-search:POST:/agents/search": {};
  "admin-agents-api-docs:post-skills-agents-search:POST:/skills/agents/search": {};
  "admin-agents-api-docs:get-agent-configuration:GET:/agents/{agentId}/agent-configuration": { "agentId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:getagentbyagentidgroups:GET:/agents/{agentId}/groups": { "agentId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:getSkillsByAgentId:GET:/agents/{agentId|userId}/skills": { "agentId|userId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:AssignsSkillsToAnAgent:POST:/agents/{agentId|userId}/skills": { "agentId|userId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:ModifySkillAssignmentsForAgent:PUT:/agents/{agentId|userId}/skills": { "agentId|userId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:RemoveSkillAssignmentsForAgent:DELETE:/agents/{agentId|userId}/skills": { "agentId|userId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:GetSkillsNotAssignedToAgent:GET:/agents/{agentId}/skills/unassigned": { "agentId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:AgentSkillData:GET:/agents/skill-data": {};
  "admin-agents-api-docs:AgentSkillDataForSkillid:GET:/agents/{agentId}/skill-data": { "agentId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:put_/agents/{agentId}/custom-event:PUT:/agents/{agentId}/custom-event": { "agentId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:QuickReplies:GET:/agents/quick-replies": {};
  "admin-agents-api-docs:QuickRepliesByAgent:GET:/agents/{agentId}/quick-replies": { "agentId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:CreateMessage:POST:/agents/messages": {};
  "admin-agents-api-docs:deleteMessagebyMessageId:DELETE:/agents/messages/{messageId}": { "messageId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:AgentMessageList:GET:/agents/{agentId}/messages": { "agentId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:AgentIndicatorList:GET:/agents/{agentId}/indicators": { "agentId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:agentLogout:POST:/agents/{agentId}/logout": { "agentId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:GetAgentDialingPatterns:GET:/agent-patterns": {};
  "admin-agents-api-docs:post-agent-patterns-id-transform-phonenumbers:POST:/agent-patterns/{agentpatternId}/transform-phonenumbers": { "agentpatternId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:getAgentStates:GET:/agents-states": {};
  "admin-agents-api-docs:get-agents-extended:GET:/agents/extended": {};
  "admin-agents-api-docs:get-agents-issues:GET:/agents/issues": {};
  "admin-agents-api-docs:get-agent-messages-id:GET:/agent-messages/{messageGroupId}": { "messageGroupId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:get-gents-skills-download:GET:/agents/skills-download": {};
  "admin-agents-api-docs:get_/teams:GET:/teams": {};
  "admin-agents-api-docs:post-teams:POST:/teams": {};
  "admin-agents-api-docs:get-teams-id:GET:/teams/{teamId}": { "teamId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:put-teams-id:PUT:/teams/{teamId}": { "teamId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:TeamsAgents:GET:/teams/agents": {};
  "admin-agents-api-docs:get-teams-id-agents:GET:/teams/{teamId}/agents": { "teamId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:AssignAgentsToTeam:POST:/teams/{teamId}/agents": { "teamId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:RemoveAgentsFromTeam:DELETE:/teams/{teamId}/agents": { "teamId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:get-teams-id-unavailable-codes:GET:/teams/{teamId}/unavailable-codes": { "teamId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:AssignUnavailableCode:POST:/teams/{teamId}/unavailable-codes": { "teamId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:put-teams-id-unavailable-codes:PUT:/teams/{teamId}/unavailable-codes": { "teamId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:RemoveUnavailableCodeTeam:DELETE:/teams/{teamId}/unavailable-codes": { "teamId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:get-access-keys:GET:/access-keys": {};
  "admin-agents-api-docs:post-access-keys:POST:/access-keys": {};
  "admin-agents-api-docs:get-access-keys-id:GET:/access-keys/{accessKeyId}": { "accessKeyId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:delete-access-keys-id:DELETE:/access-keys/{accessKeyId}": { "accessKeyId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:patch-access-keys-id:PATCH:/access-keys/{accessKeyId}": { "accessKeyId": NiceCxoneFullApiPathParamValue };
  "admin-agents-api-docs:get-activesupervisors:GET:/activesupervisors": {};
  "admin-agents-api-docs:enhancedCustomerCard:POST:/enhancedcustomercard": {};
}

export interface NiceCxoneFullApiAgentsOperationRequestMap {
  "admin-agents-api-docs:get-agents:GET:/agents": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:get-agents:GET:/agents">;
  "admin-agents-api-docs:operations-Agents-post-agents:POST:/agents": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:operations-Agents-post-agents:POST:/agents">;
  "admin-agents-api-docs:operations-Agents-put-agents:PUT:/agents": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:operations-Agents-put-agents:PUT:/agents">;
  "admin-agents-api-docs:operations-Agents-get-agents-id:GET:/agents/{agentId|userId}": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:operations-Agents-get-agents-id:GET:/agents/{agentId|userId}">;
  "admin-agents-api-docs:operations-Agents-put-agents-id:PUT:/agents/{agentId|userId}": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:operations-Agents-put-agents-id:PUT:/agents/{agentId|userId}">;
  "admin-agents-api-docs:SetAgentState:POST:/agents/{agentId}/state": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:SetAgentState:POST:/agents/{agentId}/state">;
  "admin-agents-api-docs:get-agents-skills:GET:/agents/skills": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:get-agents-skills:GET:/agents/skills">;
  "admin-agents-api-docs:post-agents-skills:POST:/agents/skills": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:post-agents-skills:POST:/agents/skills">;
  "admin-agents-api-docs:post-agents-search:POST:/agents/search": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:post-agents-search:POST:/agents/search">;
  "admin-agents-api-docs:post-skills-agents-search:POST:/skills/agents/search": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:post-skills-agents-search:POST:/skills/agents/search">;
  "admin-agents-api-docs:get-agent-configuration:GET:/agents/{agentId}/agent-configuration": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:get-agent-configuration:GET:/agents/{agentId}/agent-configuration">;
  "admin-agents-api-docs:getagentbyagentidgroups:GET:/agents/{agentId}/groups": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:getagentbyagentidgroups:GET:/agents/{agentId}/groups">;
  "admin-agents-api-docs:getSkillsByAgentId:GET:/agents/{agentId|userId}/skills": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:getSkillsByAgentId:GET:/agents/{agentId|userId}/skills">;
  "admin-agents-api-docs:AssignsSkillsToAnAgent:POST:/agents/{agentId|userId}/skills": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:AssignsSkillsToAnAgent:POST:/agents/{agentId|userId}/skills">;
  "admin-agents-api-docs:ModifySkillAssignmentsForAgent:PUT:/agents/{agentId|userId}/skills": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:ModifySkillAssignmentsForAgent:PUT:/agents/{agentId|userId}/skills">;
  "admin-agents-api-docs:RemoveSkillAssignmentsForAgent:DELETE:/agents/{agentId|userId}/skills": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:RemoveSkillAssignmentsForAgent:DELETE:/agents/{agentId|userId}/skills">;
  "admin-agents-api-docs:GetSkillsNotAssignedToAgent:GET:/agents/{agentId}/skills/unassigned": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:GetSkillsNotAssignedToAgent:GET:/agents/{agentId}/skills/unassigned">;
  "admin-agents-api-docs:AgentSkillData:GET:/agents/skill-data": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:AgentSkillData:GET:/agents/skill-data">;
  "admin-agents-api-docs:AgentSkillDataForSkillid:GET:/agents/{agentId}/skill-data": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:AgentSkillDataForSkillid:GET:/agents/{agentId}/skill-data">;
  "admin-agents-api-docs:put_/agents/{agentId}/custom-event:PUT:/agents/{agentId}/custom-event": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:put_/agents/{agentId}/custom-event:PUT:/agents/{agentId}/custom-event">;
  "admin-agents-api-docs:QuickReplies:GET:/agents/quick-replies": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:QuickReplies:GET:/agents/quick-replies">;
  "admin-agents-api-docs:QuickRepliesByAgent:GET:/agents/{agentId}/quick-replies": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:QuickRepliesByAgent:GET:/agents/{agentId}/quick-replies">;
  "admin-agents-api-docs:CreateMessage:POST:/agents/messages": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:CreateMessage:POST:/agents/messages">;
  "admin-agents-api-docs:deleteMessagebyMessageId:DELETE:/agents/messages/{messageId}": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:deleteMessagebyMessageId:DELETE:/agents/messages/{messageId}">;
  "admin-agents-api-docs:AgentMessageList:GET:/agents/{agentId}/messages": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:AgentMessageList:GET:/agents/{agentId}/messages">;
  "admin-agents-api-docs:AgentIndicatorList:GET:/agents/{agentId}/indicators": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:AgentIndicatorList:GET:/agents/{agentId}/indicators">;
  "admin-agents-api-docs:agentLogout:POST:/agents/{agentId}/logout": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:agentLogout:POST:/agents/{agentId}/logout">;
  "admin-agents-api-docs:GetAgentDialingPatterns:GET:/agent-patterns": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:GetAgentDialingPatterns:GET:/agent-patterns">;
  "admin-agents-api-docs:post-agent-patterns-id-transform-phonenumbers:POST:/agent-patterns/{agentpatternId}/transform-phonenumbers": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:post-agent-patterns-id-transform-phonenumbers:POST:/agent-patterns/{agentpatternId}/transform-phonenumbers">;
  "admin-agents-api-docs:getAgentStates:GET:/agents-states": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:getAgentStates:GET:/agents-states">;
  "admin-agents-api-docs:get-agents-extended:GET:/agents/extended": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:get-agents-extended:GET:/agents/extended">;
  "admin-agents-api-docs:get-agents-issues:GET:/agents/issues": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:get-agents-issues:GET:/agents/issues">;
  "admin-agents-api-docs:get-agent-messages-id:GET:/agent-messages/{messageGroupId}": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:get-agent-messages-id:GET:/agent-messages/{messageGroupId}">;
  "admin-agents-api-docs:get-gents-skills-download:GET:/agents/skills-download": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:get-gents-skills-download:GET:/agents/skills-download">;
  "admin-agents-api-docs:get_/teams:GET:/teams": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:get_/teams:GET:/teams">;
  "admin-agents-api-docs:post-teams:POST:/teams": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:post-teams:POST:/teams">;
  "admin-agents-api-docs:get-teams-id:GET:/teams/{teamId}": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:get-teams-id:GET:/teams/{teamId}">;
  "admin-agents-api-docs:put-teams-id:PUT:/teams/{teamId}": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:put-teams-id:PUT:/teams/{teamId}">;
  "admin-agents-api-docs:TeamsAgents:GET:/teams/agents": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:TeamsAgents:GET:/teams/agents">;
  "admin-agents-api-docs:get-teams-id-agents:GET:/teams/{teamId}/agents": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:get-teams-id-agents:GET:/teams/{teamId}/agents">;
  "admin-agents-api-docs:AssignAgentsToTeam:POST:/teams/{teamId}/agents": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:AssignAgentsToTeam:POST:/teams/{teamId}/agents">;
  "admin-agents-api-docs:RemoveAgentsFromTeam:DELETE:/teams/{teamId}/agents": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:RemoveAgentsFromTeam:DELETE:/teams/{teamId}/agents">;
  "admin-agents-api-docs:get-teams-id-unavailable-codes:GET:/teams/{teamId}/unavailable-codes": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:get-teams-id-unavailable-codes:GET:/teams/{teamId}/unavailable-codes">;
  "admin-agents-api-docs:AssignUnavailableCode:POST:/teams/{teamId}/unavailable-codes": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:AssignUnavailableCode:POST:/teams/{teamId}/unavailable-codes">;
  "admin-agents-api-docs:put-teams-id-unavailable-codes:PUT:/teams/{teamId}/unavailable-codes": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:put-teams-id-unavailable-codes:PUT:/teams/{teamId}/unavailable-codes">;
  "admin-agents-api-docs:RemoveUnavailableCodeTeam:DELETE:/teams/{teamId}/unavailable-codes": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:RemoveUnavailableCodeTeam:DELETE:/teams/{teamId}/unavailable-codes">;
  "admin-agents-api-docs:get-access-keys:GET:/access-keys": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:get-access-keys:GET:/access-keys">;
  "admin-agents-api-docs:post-access-keys:POST:/access-keys": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:post-access-keys:POST:/access-keys">;
  "admin-agents-api-docs:get-access-keys-id:GET:/access-keys/{accessKeyId}": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:get-access-keys-id:GET:/access-keys/{accessKeyId}">;
  "admin-agents-api-docs:delete-access-keys-id:DELETE:/access-keys/{accessKeyId}": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:delete-access-keys-id:DELETE:/access-keys/{accessKeyId}">;
  "admin-agents-api-docs:patch-access-keys-id:PATCH:/access-keys/{accessKeyId}": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:patch-access-keys-id:PATCH:/access-keys/{accessKeyId}">;
  "admin-agents-api-docs:get-activesupervisors:GET:/activesupervisors": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:get-activesupervisors:GET:/activesupervisors">;
  "admin-agents-api-docs:enhancedCustomerCard:POST:/enhancedcustomercard": NiceCxoneFullApiOperationInput<"admin-agents-api-docs:enhancedCustomerCard:POST:/enhancedcustomercard">;
}

export interface NiceCxoneFullApiAgentsGeneratedClient {
  AdminAgentsApiDocsGetAgents(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-agents:GET:/agents">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:get-agents:GET:/agents"]>;
  AdminAgentsApiDocsOperationsAgentsPostAgents(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:operations-Agents-post-agents:POST:/agents">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:operations-Agents-post-agents:POST:/agents"]>;
  AdminAgentsApiDocsOperationsAgentsPutAgents(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:operations-Agents-put-agents:PUT:/agents">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:operations-Agents-put-agents:PUT:/agents"]>;
  AdminAgentsApiDocsOperationsAgentsGetAgentsId(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:operations-Agents-get-agents-id:GET:/agents/{agentId|userId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:operations-Agents-get-agents-id:GET:/agents/{agentId|userId}"]>;
  AdminAgentsApiDocsOperationsAgentsPutAgentsId(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:operations-Agents-put-agents-id:PUT:/agents/{agentId|userId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:operations-Agents-put-agents-id:PUT:/agents/{agentId|userId}"]>;
  AdminAgentsApiDocsSetAgentState(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:SetAgentState:POST:/agents/{agentId}/state">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:SetAgentState:POST:/agents/{agentId}/state"]>;
  AdminAgentsApiDocsGetAgentsSkills(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-agents-skills:GET:/agents/skills">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:get-agents-skills:GET:/agents/skills"]>;
  AdminAgentsApiDocsPostAgentsSkills(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:post-agents-skills:POST:/agents/skills">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:post-agents-skills:POST:/agents/skills"]>;
  AdminAgentsApiDocsPostAgentsSearch(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:post-agents-search:POST:/agents/search">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:post-agents-search:POST:/agents/search"]>;
  AdminAgentsApiDocsPostSkillsAgentsSearch(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:post-skills-agents-search:POST:/skills/agents/search">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:post-skills-agents-search:POST:/skills/agents/search"]>;
  AdminAgentsApiDocsGetAgentConfiguration(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-agent-configuration:GET:/agents/{agentId}/agent-configuration">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:get-agent-configuration:GET:/agents/{agentId}/agent-configuration"]>;
  AdminAgentsApiDocsGetagentbyagentidgroups(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:getagentbyagentidgroups:GET:/agents/{agentId}/groups">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:getagentbyagentidgroups:GET:/agents/{agentId}/groups"]>;
  AdminAgentsApiDocsGetSkillsByAgentId(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:getSkillsByAgentId:GET:/agents/{agentId|userId}/skills">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:getSkillsByAgentId:GET:/agents/{agentId|userId}/skills"]>;
  AdminAgentsApiDocsAssignsSkillsToAnAgent(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:AssignsSkillsToAnAgent:POST:/agents/{agentId|userId}/skills">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:AssignsSkillsToAnAgent:POST:/agents/{agentId|userId}/skills"]>;
  AdminAgentsApiDocsModifySkillAssignmentsForAgent(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:ModifySkillAssignmentsForAgent:PUT:/agents/{agentId|userId}/skills">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:ModifySkillAssignmentsForAgent:PUT:/agents/{agentId|userId}/skills"]>;
  AdminAgentsApiDocsRemoveSkillAssignmentsForAgent(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:RemoveSkillAssignmentsForAgent:DELETE:/agents/{agentId|userId}/skills">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:RemoveSkillAssignmentsForAgent:DELETE:/agents/{agentId|userId}/skills"]>;
  AdminAgentsApiDocsGetSkillsNotAssignedToAgent(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:GetSkillsNotAssignedToAgent:GET:/agents/{agentId}/skills/unassigned">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:GetSkillsNotAssignedToAgent:GET:/agents/{agentId}/skills/unassigned"]>;
  AdminAgentsApiDocsAgentSkillData(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:AgentSkillData:GET:/agents/skill-data">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:AgentSkillData:GET:/agents/skill-data"]>;
  AdminAgentsApiDocsAgentSkillDataForSkillid(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:AgentSkillDataForSkillid:GET:/agents/{agentId}/skill-data">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:AgentSkillDataForSkillid:GET:/agents/{agentId}/skill-data"]>;
  AdminAgentsApiDocsPutAgentsAgentIdCustomEvent(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:put_/agents/{agentId}/custom-event:PUT:/agents/{agentId}/custom-event">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:put_/agents/{agentId}/custom-event:PUT:/agents/{agentId}/custom-event"]>;
  AdminAgentsApiDocsQuickReplies(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:QuickReplies:GET:/agents/quick-replies">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:QuickReplies:GET:/agents/quick-replies"]>;
  AdminAgentsApiDocsQuickRepliesByAgent(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:QuickRepliesByAgent:GET:/agents/{agentId}/quick-replies">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:QuickRepliesByAgent:GET:/agents/{agentId}/quick-replies"]>;
  AdminAgentsApiDocsCreateMessage(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:CreateMessage:POST:/agents/messages">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:CreateMessage:POST:/agents/messages"]>;
  AdminAgentsApiDocsDeleteMessagebyMessageId(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:deleteMessagebyMessageId:DELETE:/agents/messages/{messageId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:deleteMessagebyMessageId:DELETE:/agents/messages/{messageId}"]>;
  AdminAgentsApiDocsAgentMessageList(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:AgentMessageList:GET:/agents/{agentId}/messages">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:AgentMessageList:GET:/agents/{agentId}/messages"]>;
  AdminAgentsApiDocsAgentIndicatorList(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:AgentIndicatorList:GET:/agents/{agentId}/indicators">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:AgentIndicatorList:GET:/agents/{agentId}/indicators"]>;
  AdminAgentsApiDocsAgentLogout(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:agentLogout:POST:/agents/{agentId}/logout">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:agentLogout:POST:/agents/{agentId}/logout"]>;
  AdminAgentsApiDocsGetAgentDialingPatterns(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:GetAgentDialingPatterns:GET:/agent-patterns">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:GetAgentDialingPatterns:GET:/agent-patterns"]>;
  AdminAgentsApiDocsPostAgentPatternsIdTransformPhonenumbers(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:post-agent-patterns-id-transform-phonenumbers:POST:/agent-patterns/{agentpatternId}/transform-phonenumbers">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:post-agent-patterns-id-transform-phonenumbers:POST:/agent-patterns/{agentpatternId}/transform-phonenumbers"]>;
  AdminAgentsApiDocsGetAgentStates(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:getAgentStates:GET:/agents-states">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:getAgentStates:GET:/agents-states"]>;
  AdminAgentsApiDocsGetAgentsExtended(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-agents-extended:GET:/agents/extended">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:get-agents-extended:GET:/agents/extended"]>;
  AdminAgentsApiDocsGetAgentsIssues(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-agents-issues:GET:/agents/issues">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:get-agents-issues:GET:/agents/issues"]>;
  AdminAgentsApiDocsGetAgentMessagesId(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-agent-messages-id:GET:/agent-messages/{messageGroupId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:get-agent-messages-id:GET:/agent-messages/{messageGroupId}"]>;
  AdminAgentsApiDocsGetGentsSkillsDownload(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-gents-skills-download:GET:/agents/skills-download">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:get-gents-skills-download:GET:/agents/skills-download"]>;
  AdminAgentsApiDocsGetTeams(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get_/teams:GET:/teams">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:get_/teams:GET:/teams"]>;
  AdminAgentsApiDocsPostTeams(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:post-teams:POST:/teams">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:post-teams:POST:/teams"]>;
  AdminAgentsApiDocsGetTeamsId(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-teams-id:GET:/teams/{teamId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:get-teams-id:GET:/teams/{teamId}"]>;
  AdminAgentsApiDocsPutTeamsId(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:put-teams-id:PUT:/teams/{teamId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:put-teams-id:PUT:/teams/{teamId}"]>;
  AdminAgentsApiDocsTeamsAgents(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:TeamsAgents:GET:/teams/agents">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:TeamsAgents:GET:/teams/agents"]>;
  AdminAgentsApiDocsGetTeamsIdAgents(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-teams-id-agents:GET:/teams/{teamId}/agents">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:get-teams-id-agents:GET:/teams/{teamId}/agents"]>;
  AdminAgentsApiDocsAssignAgentsToTeam(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:AssignAgentsToTeam:POST:/teams/{teamId}/agents">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:AssignAgentsToTeam:POST:/teams/{teamId}/agents"]>;
  AdminAgentsApiDocsRemoveAgentsFromTeam(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:RemoveAgentsFromTeam:DELETE:/teams/{teamId}/agents">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:RemoveAgentsFromTeam:DELETE:/teams/{teamId}/agents"]>;
  AdminAgentsApiDocsGetTeamsIdUnavailableCodes(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-teams-id-unavailable-codes:GET:/teams/{teamId}/unavailable-codes">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:get-teams-id-unavailable-codes:GET:/teams/{teamId}/unavailable-codes"]>;
  AdminAgentsApiDocsAssignUnavailableCode(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:AssignUnavailableCode:POST:/teams/{teamId}/unavailable-codes">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:AssignUnavailableCode:POST:/teams/{teamId}/unavailable-codes"]>;
  AdminAgentsApiDocsPutTeamsIdUnavailableCodes(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:put-teams-id-unavailable-codes:PUT:/teams/{teamId}/unavailable-codes">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:put-teams-id-unavailable-codes:PUT:/teams/{teamId}/unavailable-codes"]>;
  AdminAgentsApiDocsRemoveUnavailableCodeTeam(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:RemoveUnavailableCodeTeam:DELETE:/teams/{teamId}/unavailable-codes">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:RemoveUnavailableCodeTeam:DELETE:/teams/{teamId}/unavailable-codes"]>;
  AdminAgentsApiDocsGetAccessKeys(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-access-keys:GET:/access-keys">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:get-access-keys:GET:/access-keys"]>;
  AdminAgentsApiDocsPostAccessKeys(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:post-access-keys:POST:/access-keys">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:post-access-keys:POST:/access-keys"]>;
  AdminAgentsApiDocsGetAccessKeysId(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-access-keys-id:GET:/access-keys/{accessKeyId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:get-access-keys-id:GET:/access-keys/{accessKeyId}"]>;
  AdminAgentsApiDocsDeleteAccessKeysId(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:delete-access-keys-id:DELETE:/access-keys/{accessKeyId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:delete-access-keys-id:DELETE:/access-keys/{accessKeyId}"]>;
  AdminAgentsApiDocsPatchAccessKeysId(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:patch-access-keys-id:PATCH:/access-keys/{accessKeyId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:patch-access-keys-id:PATCH:/access-keys/{accessKeyId}"]>;
  AdminAgentsApiDocsGetActivesupervisors(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-activesupervisors:GET:/activesupervisors">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:get-activesupervisors:GET:/activesupervisors"]>;
  AdminAgentsApiDocsEnhancedCustomerCard(...args: NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:enhancedCustomerCard:POST:/enhancedcustomercard">): Promise<NiceCxoneFullApiOperationResponseMap["admin-agents-api-docs:enhancedCustomerCard:POST:/enhancedcustomercard"]>;
}

export const NiceCxoneFullApiAgentsGeneratedFunctionNames = [
  "AdminAgentsApiDocsGetAgents",
  "AdminAgentsApiDocsOperationsAgentsPostAgents",
  "AdminAgentsApiDocsOperationsAgentsPutAgents",
  "AdminAgentsApiDocsOperationsAgentsGetAgentsId",
  "AdminAgentsApiDocsOperationsAgentsPutAgentsId",
  "AdminAgentsApiDocsSetAgentState",
  "AdminAgentsApiDocsGetAgentsSkills",
  "AdminAgentsApiDocsPostAgentsSkills",
  "AdminAgentsApiDocsPostAgentsSearch",
  "AdminAgentsApiDocsPostSkillsAgentsSearch",
  "AdminAgentsApiDocsGetAgentConfiguration",
  "AdminAgentsApiDocsGetagentbyagentidgroups",
  "AdminAgentsApiDocsGetSkillsByAgentId",
  "AdminAgentsApiDocsAssignsSkillsToAnAgent",
  "AdminAgentsApiDocsModifySkillAssignmentsForAgent",
  "AdminAgentsApiDocsRemoveSkillAssignmentsForAgent",
  "AdminAgentsApiDocsGetSkillsNotAssignedToAgent",
  "AdminAgentsApiDocsAgentSkillData",
  "AdminAgentsApiDocsAgentSkillDataForSkillid",
  "AdminAgentsApiDocsPutAgentsAgentIdCustomEvent",
  "AdminAgentsApiDocsQuickReplies",
  "AdminAgentsApiDocsQuickRepliesByAgent",
  "AdminAgentsApiDocsCreateMessage",
  "AdminAgentsApiDocsDeleteMessagebyMessageId",
  "AdminAgentsApiDocsAgentMessageList",
  "AdminAgentsApiDocsAgentIndicatorList",
  "AdminAgentsApiDocsAgentLogout",
  "AdminAgentsApiDocsGetAgentDialingPatterns",
  "AdminAgentsApiDocsPostAgentPatternsIdTransformPhonenumbers",
  "AdminAgentsApiDocsGetAgentStates",
  "AdminAgentsApiDocsGetAgentsExtended",
  "AdminAgentsApiDocsGetAgentsIssues",
  "AdminAgentsApiDocsGetAgentMessagesId",
  "AdminAgentsApiDocsGetGentsSkillsDownload",
  "AdminAgentsApiDocsGetTeams",
  "AdminAgentsApiDocsPostTeams",
  "AdminAgentsApiDocsGetTeamsId",
  "AdminAgentsApiDocsPutTeamsId",
  "AdminAgentsApiDocsTeamsAgents",
  "AdminAgentsApiDocsGetTeamsIdAgents",
  "AdminAgentsApiDocsAssignAgentsToTeam",
  "AdminAgentsApiDocsRemoveAgentsFromTeam",
  "AdminAgentsApiDocsGetTeamsIdUnavailableCodes",
  "AdminAgentsApiDocsAssignUnavailableCode",
  "AdminAgentsApiDocsPutTeamsIdUnavailableCodes",
  "AdminAgentsApiDocsRemoveUnavailableCodeTeam",
  "AdminAgentsApiDocsGetAccessKeys",
  "AdminAgentsApiDocsPostAccessKeys",
  "AdminAgentsApiDocsGetAccessKeysId",
  "AdminAgentsApiDocsDeleteAccessKeysId",
  "AdminAgentsApiDocsPatchAccessKeysId",
  "AdminAgentsApiDocsGetActivesupervisors",
  "AdminAgentsApiDocsEnhancedCustomerCard"
] as const satisfies readonly (keyof NiceCxoneFullApiAgentsGeneratedClient)[];

export function createNiceCxoneFullApiAgentsGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiAgentsGeneratedClient {
  return {
    AdminAgentsApiDocsGetAgents: (...args) => callOperation("admin-agents-api-docs:get-agents:GET:/agents", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-agents:GET:/agents">)),
    AdminAgentsApiDocsOperationsAgentsPostAgents: (...args) => callOperation("admin-agents-api-docs:operations-Agents-post-agents:POST:/agents", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:operations-Agents-post-agents:POST:/agents">)),
    AdminAgentsApiDocsOperationsAgentsPutAgents: (...args) => callOperation("admin-agents-api-docs:operations-Agents-put-agents:PUT:/agents", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:operations-Agents-put-agents:PUT:/agents">)),
    AdminAgentsApiDocsOperationsAgentsGetAgentsId: (...args) => callOperation("admin-agents-api-docs:operations-Agents-get-agents-id:GET:/agents/{agentId|userId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:operations-Agents-get-agents-id:GET:/agents/{agentId|userId}">)),
    AdminAgentsApiDocsOperationsAgentsPutAgentsId: (...args) => callOperation("admin-agents-api-docs:operations-Agents-put-agents-id:PUT:/agents/{agentId|userId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:operations-Agents-put-agents-id:PUT:/agents/{agentId|userId}">)),
    AdminAgentsApiDocsSetAgentState: (...args) => callOperation("admin-agents-api-docs:SetAgentState:POST:/agents/{agentId}/state", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:SetAgentState:POST:/agents/{agentId}/state">)),
    AdminAgentsApiDocsGetAgentsSkills: (...args) => callOperation("admin-agents-api-docs:get-agents-skills:GET:/agents/skills", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-agents-skills:GET:/agents/skills">)),
    AdminAgentsApiDocsPostAgentsSkills: (...args) => callOperation("admin-agents-api-docs:post-agents-skills:POST:/agents/skills", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:post-agents-skills:POST:/agents/skills">)),
    AdminAgentsApiDocsPostAgentsSearch: (...args) => callOperation("admin-agents-api-docs:post-agents-search:POST:/agents/search", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:post-agents-search:POST:/agents/search">)),
    AdminAgentsApiDocsPostSkillsAgentsSearch: (...args) => callOperation("admin-agents-api-docs:post-skills-agents-search:POST:/skills/agents/search", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:post-skills-agents-search:POST:/skills/agents/search">)),
    AdminAgentsApiDocsGetAgentConfiguration: (...args) => callOperation("admin-agents-api-docs:get-agent-configuration:GET:/agents/{agentId}/agent-configuration", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-agent-configuration:GET:/agents/{agentId}/agent-configuration">)),
    AdminAgentsApiDocsGetagentbyagentidgroups: (...args) => callOperation("admin-agents-api-docs:getagentbyagentidgroups:GET:/agents/{agentId}/groups", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:getagentbyagentidgroups:GET:/agents/{agentId}/groups">)),
    AdminAgentsApiDocsGetSkillsByAgentId: (...args) => callOperation("admin-agents-api-docs:getSkillsByAgentId:GET:/agents/{agentId|userId}/skills", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:getSkillsByAgentId:GET:/agents/{agentId|userId}/skills">)),
    AdminAgentsApiDocsAssignsSkillsToAnAgent: (...args) => callOperation("admin-agents-api-docs:AssignsSkillsToAnAgent:POST:/agents/{agentId|userId}/skills", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:AssignsSkillsToAnAgent:POST:/agents/{agentId|userId}/skills">)),
    AdminAgentsApiDocsModifySkillAssignmentsForAgent: (...args) => callOperation("admin-agents-api-docs:ModifySkillAssignmentsForAgent:PUT:/agents/{agentId|userId}/skills", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:ModifySkillAssignmentsForAgent:PUT:/agents/{agentId|userId}/skills">)),
    AdminAgentsApiDocsRemoveSkillAssignmentsForAgent: (...args) => callOperation("admin-agents-api-docs:RemoveSkillAssignmentsForAgent:DELETE:/agents/{agentId|userId}/skills", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:RemoveSkillAssignmentsForAgent:DELETE:/agents/{agentId|userId}/skills">)),
    AdminAgentsApiDocsGetSkillsNotAssignedToAgent: (...args) => callOperation("admin-agents-api-docs:GetSkillsNotAssignedToAgent:GET:/agents/{agentId}/skills/unassigned", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:GetSkillsNotAssignedToAgent:GET:/agents/{agentId}/skills/unassigned">)),
    AdminAgentsApiDocsAgentSkillData: (...args) => callOperation("admin-agents-api-docs:AgentSkillData:GET:/agents/skill-data", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:AgentSkillData:GET:/agents/skill-data">)),
    AdminAgentsApiDocsAgentSkillDataForSkillid: (...args) => callOperation("admin-agents-api-docs:AgentSkillDataForSkillid:GET:/agents/{agentId}/skill-data", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:AgentSkillDataForSkillid:GET:/agents/{agentId}/skill-data">)),
    AdminAgentsApiDocsPutAgentsAgentIdCustomEvent: (...args) => callOperation("admin-agents-api-docs:put_/agents/{agentId}/custom-event:PUT:/agents/{agentId}/custom-event", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:put_/agents/{agentId}/custom-event:PUT:/agents/{agentId}/custom-event">)),
    AdminAgentsApiDocsQuickReplies: (...args) => callOperation("admin-agents-api-docs:QuickReplies:GET:/agents/quick-replies", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:QuickReplies:GET:/agents/quick-replies">)),
    AdminAgentsApiDocsQuickRepliesByAgent: (...args) => callOperation("admin-agents-api-docs:QuickRepliesByAgent:GET:/agents/{agentId}/quick-replies", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:QuickRepliesByAgent:GET:/agents/{agentId}/quick-replies">)),
    AdminAgentsApiDocsCreateMessage: (...args) => callOperation("admin-agents-api-docs:CreateMessage:POST:/agents/messages", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:CreateMessage:POST:/agents/messages">)),
    AdminAgentsApiDocsDeleteMessagebyMessageId: (...args) => callOperation("admin-agents-api-docs:deleteMessagebyMessageId:DELETE:/agents/messages/{messageId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:deleteMessagebyMessageId:DELETE:/agents/messages/{messageId}">)),
    AdminAgentsApiDocsAgentMessageList: (...args) => callOperation("admin-agents-api-docs:AgentMessageList:GET:/agents/{agentId}/messages", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:AgentMessageList:GET:/agents/{agentId}/messages">)),
    AdminAgentsApiDocsAgentIndicatorList: (...args) => callOperation("admin-agents-api-docs:AgentIndicatorList:GET:/agents/{agentId}/indicators", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:AgentIndicatorList:GET:/agents/{agentId}/indicators">)),
    AdminAgentsApiDocsAgentLogout: (...args) => callOperation("admin-agents-api-docs:agentLogout:POST:/agents/{agentId}/logout", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:agentLogout:POST:/agents/{agentId}/logout">)),
    AdminAgentsApiDocsGetAgentDialingPatterns: (...args) => callOperation("admin-agents-api-docs:GetAgentDialingPatterns:GET:/agent-patterns", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:GetAgentDialingPatterns:GET:/agent-patterns">)),
    AdminAgentsApiDocsPostAgentPatternsIdTransformPhonenumbers: (...args) => callOperation("admin-agents-api-docs:post-agent-patterns-id-transform-phonenumbers:POST:/agent-patterns/{agentpatternId}/transform-phonenumbers", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:post-agent-patterns-id-transform-phonenumbers:POST:/agent-patterns/{agentpatternId}/transform-phonenumbers">)),
    AdminAgentsApiDocsGetAgentStates: (...args) => callOperation("admin-agents-api-docs:getAgentStates:GET:/agents-states", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:getAgentStates:GET:/agents-states">)),
    AdminAgentsApiDocsGetAgentsExtended: (...args) => callOperation("admin-agents-api-docs:get-agents-extended:GET:/agents/extended", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-agents-extended:GET:/agents/extended">)),
    AdminAgentsApiDocsGetAgentsIssues: (...args) => callOperation("admin-agents-api-docs:get-agents-issues:GET:/agents/issues", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-agents-issues:GET:/agents/issues">)),
    AdminAgentsApiDocsGetAgentMessagesId: (...args) => callOperation("admin-agents-api-docs:get-agent-messages-id:GET:/agent-messages/{messageGroupId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-agent-messages-id:GET:/agent-messages/{messageGroupId}">)),
    AdminAgentsApiDocsGetGentsSkillsDownload: (...args) => callOperation("admin-agents-api-docs:get-gents-skills-download:GET:/agents/skills-download", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-gents-skills-download:GET:/agents/skills-download">)),
    AdminAgentsApiDocsGetTeams: (...args) => callOperation("admin-agents-api-docs:get_/teams:GET:/teams", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get_/teams:GET:/teams">)),
    AdminAgentsApiDocsPostTeams: (...args) => callOperation("admin-agents-api-docs:post-teams:POST:/teams", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:post-teams:POST:/teams">)),
    AdminAgentsApiDocsGetTeamsId: (...args) => callOperation("admin-agents-api-docs:get-teams-id:GET:/teams/{teamId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-teams-id:GET:/teams/{teamId}">)),
    AdminAgentsApiDocsPutTeamsId: (...args) => callOperation("admin-agents-api-docs:put-teams-id:PUT:/teams/{teamId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:put-teams-id:PUT:/teams/{teamId}">)),
    AdminAgentsApiDocsTeamsAgents: (...args) => callOperation("admin-agents-api-docs:TeamsAgents:GET:/teams/agents", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:TeamsAgents:GET:/teams/agents">)),
    AdminAgentsApiDocsGetTeamsIdAgents: (...args) => callOperation("admin-agents-api-docs:get-teams-id-agents:GET:/teams/{teamId}/agents", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-teams-id-agents:GET:/teams/{teamId}/agents">)),
    AdminAgentsApiDocsAssignAgentsToTeam: (...args) => callOperation("admin-agents-api-docs:AssignAgentsToTeam:POST:/teams/{teamId}/agents", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:AssignAgentsToTeam:POST:/teams/{teamId}/agents">)),
    AdminAgentsApiDocsRemoveAgentsFromTeam: (...args) => callOperation("admin-agents-api-docs:RemoveAgentsFromTeam:DELETE:/teams/{teamId}/agents", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:RemoveAgentsFromTeam:DELETE:/teams/{teamId}/agents">)),
    AdminAgentsApiDocsGetTeamsIdUnavailableCodes: (...args) => callOperation("admin-agents-api-docs:get-teams-id-unavailable-codes:GET:/teams/{teamId}/unavailable-codes", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-teams-id-unavailable-codes:GET:/teams/{teamId}/unavailable-codes">)),
    AdminAgentsApiDocsAssignUnavailableCode: (...args) => callOperation("admin-agents-api-docs:AssignUnavailableCode:POST:/teams/{teamId}/unavailable-codes", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:AssignUnavailableCode:POST:/teams/{teamId}/unavailable-codes">)),
    AdminAgentsApiDocsPutTeamsIdUnavailableCodes: (...args) => callOperation("admin-agents-api-docs:put-teams-id-unavailable-codes:PUT:/teams/{teamId}/unavailable-codes", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:put-teams-id-unavailable-codes:PUT:/teams/{teamId}/unavailable-codes">)),
    AdminAgentsApiDocsRemoveUnavailableCodeTeam: (...args) => callOperation("admin-agents-api-docs:RemoveUnavailableCodeTeam:DELETE:/teams/{teamId}/unavailable-codes", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:RemoveUnavailableCodeTeam:DELETE:/teams/{teamId}/unavailable-codes">)),
    AdminAgentsApiDocsGetAccessKeys: (...args) => callOperation("admin-agents-api-docs:get-access-keys:GET:/access-keys", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-access-keys:GET:/access-keys">)),
    AdminAgentsApiDocsPostAccessKeys: (...args) => callOperation("admin-agents-api-docs:post-access-keys:POST:/access-keys", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:post-access-keys:POST:/access-keys">)),
    AdminAgentsApiDocsGetAccessKeysId: (...args) => callOperation("admin-agents-api-docs:get-access-keys-id:GET:/access-keys/{accessKeyId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-access-keys-id:GET:/access-keys/{accessKeyId}">)),
    AdminAgentsApiDocsDeleteAccessKeysId: (...args) => callOperation("admin-agents-api-docs:delete-access-keys-id:DELETE:/access-keys/{accessKeyId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:delete-access-keys-id:DELETE:/access-keys/{accessKeyId}">)),
    AdminAgentsApiDocsPatchAccessKeysId: (...args) => callOperation("admin-agents-api-docs:patch-access-keys-id:PATCH:/access-keys/{accessKeyId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:patch-access-keys-id:PATCH:/access-keys/{accessKeyId}">)),
    AdminAgentsApiDocsGetActivesupervisors: (...args) => callOperation("admin-agents-api-docs:get-activesupervisors:GET:/activesupervisors", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:get-activesupervisors:GET:/activesupervisors">)),
    AdminAgentsApiDocsEnhancedCustomerCard: (...args) => callOperation("admin-agents-api-docs:enhancedCustomerCard:POST:/enhancedcustomercard", ...(args as NiceCxoneFullApiOperationArgs<"admin-agents-api-docs:enhancedCustomerCard:POST:/enhancedcustomercard">)),
  };
}
