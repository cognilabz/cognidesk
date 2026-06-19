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
export const NiceCxoneFullApiRealTimeOperationKeys = [
  "realtimedata-realtime-api-docs:getAgentStates:GET:/agents/states",
  "realtimedata-realtime-api-docs:get-agents-client-data:GET:/agents/client-data",
  "realtimedata-realtime-api-docs:put-agents-client-data:PUT:/agents/client-data",
  "realtimedata-realtime-api-docs:getAgentStateByid:GET:/agents/{agentId}/states",
  "realtimedata-realtime-api-docs:ActiveContacts:GET:/contacts/active",
  "realtimedata-realtime-api-docs:ParkedContactDetails:GET:/contacts/parked",
  "realtimedata-realtime-api-docs:get_/contacts/states:GET:/contacts/states",
  "realtimedata-realtime-api-docs:SkillActivity:GET:/skills/activity",
  "realtimedata-realtime-api-docs:post-skills-activity-search:POST:/skills/activity/search",
  "realtimedata-realtime-api-docs:SkillActivityById:GET:/skills/{skillId}/activity",
  "realtimedata-realtime-api-docs:agents_agentId_queues:GET:/agents/{agentId}/queues",
  "realtimedata-realtime-api-docs:agents_agentIds_queues_details:GET:/agents/{agentId}/queues-detail"
] as const;
export type NiceCxoneFullApiRealTimeOperationKey = typeof NiceCxoneFullApiRealTimeOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiRealTimeOperationPathParamMap {
  "realtimedata-realtime-api-docs:getAgentStates:GET:/agents/states": {};
  "realtimedata-realtime-api-docs:get-agents-client-data:GET:/agents/client-data": {};
  "realtimedata-realtime-api-docs:put-agents-client-data:PUT:/agents/client-data": {};
  "realtimedata-realtime-api-docs:getAgentStateByid:GET:/agents/{agentId}/states": { "agentId": NiceCxoneFullApiPathParamValue };
  "realtimedata-realtime-api-docs:ActiveContacts:GET:/contacts/active": {};
  "realtimedata-realtime-api-docs:ParkedContactDetails:GET:/contacts/parked": {};
  "realtimedata-realtime-api-docs:get_/contacts/states:GET:/contacts/states": {};
  "realtimedata-realtime-api-docs:SkillActivity:GET:/skills/activity": {};
  "realtimedata-realtime-api-docs:post-skills-activity-search:POST:/skills/activity/search": {};
  "realtimedata-realtime-api-docs:SkillActivityById:GET:/skills/{skillId}/activity": { "skillId": NiceCxoneFullApiPathParamValue };
  "realtimedata-realtime-api-docs:agents_agentId_queues:GET:/agents/{agentId}/queues": { "agentId": NiceCxoneFullApiPathParamValue };
  "realtimedata-realtime-api-docs:agents_agentIds_queues_details:GET:/agents/{agentId}/queues-detail": { "agentId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiRealTimeOperationRequestMap {
  "realtimedata-realtime-api-docs:getAgentStates:GET:/agents/states": NiceCxoneFullApiOperationInput<"realtimedata-realtime-api-docs:getAgentStates:GET:/agents/states">;
  "realtimedata-realtime-api-docs:get-agents-client-data:GET:/agents/client-data": NiceCxoneFullApiOperationInput<"realtimedata-realtime-api-docs:get-agents-client-data:GET:/agents/client-data">;
  "realtimedata-realtime-api-docs:put-agents-client-data:PUT:/agents/client-data": NiceCxoneFullApiOperationInput<"realtimedata-realtime-api-docs:put-agents-client-data:PUT:/agents/client-data">;
  "realtimedata-realtime-api-docs:getAgentStateByid:GET:/agents/{agentId}/states": NiceCxoneFullApiOperationInput<"realtimedata-realtime-api-docs:getAgentStateByid:GET:/agents/{agentId}/states">;
  "realtimedata-realtime-api-docs:ActiveContacts:GET:/contacts/active": NiceCxoneFullApiOperationInput<"realtimedata-realtime-api-docs:ActiveContacts:GET:/contacts/active">;
  "realtimedata-realtime-api-docs:ParkedContactDetails:GET:/contacts/parked": NiceCxoneFullApiOperationInput<"realtimedata-realtime-api-docs:ParkedContactDetails:GET:/contacts/parked">;
  "realtimedata-realtime-api-docs:get_/contacts/states:GET:/contacts/states": NiceCxoneFullApiOperationInput<"realtimedata-realtime-api-docs:get_/contacts/states:GET:/contacts/states">;
  "realtimedata-realtime-api-docs:SkillActivity:GET:/skills/activity": NiceCxoneFullApiOperationInput<"realtimedata-realtime-api-docs:SkillActivity:GET:/skills/activity">;
  "realtimedata-realtime-api-docs:post-skills-activity-search:POST:/skills/activity/search": NiceCxoneFullApiOperationInput<"realtimedata-realtime-api-docs:post-skills-activity-search:POST:/skills/activity/search">;
  "realtimedata-realtime-api-docs:SkillActivityById:GET:/skills/{skillId}/activity": NiceCxoneFullApiOperationInput<"realtimedata-realtime-api-docs:SkillActivityById:GET:/skills/{skillId}/activity">;
  "realtimedata-realtime-api-docs:agents_agentId_queues:GET:/agents/{agentId}/queues": NiceCxoneFullApiOperationInput<"realtimedata-realtime-api-docs:agents_agentId_queues:GET:/agents/{agentId}/queues">;
  "realtimedata-realtime-api-docs:agents_agentIds_queues_details:GET:/agents/{agentId}/queues-detail": NiceCxoneFullApiOperationInput<"realtimedata-realtime-api-docs:agents_agentIds_queues_details:GET:/agents/{agentId}/queues-detail">;
}

export interface NiceCxoneFullApiRealTimeGeneratedClient {
  RealtimedataRealtimeApiDocsGetAgentStates(...args: NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:getAgentStates:GET:/agents/states">): Promise<NiceCxoneFullApiOperationResponseMap["realtimedata-realtime-api-docs:getAgentStates:GET:/agents/states"]>;
  RealtimedataRealtimeApiDocsGetAgentsClientData(...args: NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:get-agents-client-data:GET:/agents/client-data">): Promise<NiceCxoneFullApiOperationResponseMap["realtimedata-realtime-api-docs:get-agents-client-data:GET:/agents/client-data"]>;
  RealtimedataRealtimeApiDocsPutAgentsClientData(...args: NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:put-agents-client-data:PUT:/agents/client-data">): Promise<NiceCxoneFullApiOperationResponseMap["realtimedata-realtime-api-docs:put-agents-client-data:PUT:/agents/client-data"]>;
  RealtimedataRealtimeApiDocsGetAgentStateByid(...args: NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:getAgentStateByid:GET:/agents/{agentId}/states">): Promise<NiceCxoneFullApiOperationResponseMap["realtimedata-realtime-api-docs:getAgentStateByid:GET:/agents/{agentId}/states"]>;
  RealtimedataRealtimeApiDocsActiveContacts(...args: NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:ActiveContacts:GET:/contacts/active">): Promise<NiceCxoneFullApiOperationResponseMap["realtimedata-realtime-api-docs:ActiveContacts:GET:/contacts/active"]>;
  RealtimedataRealtimeApiDocsParkedContactDetails(...args: NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:ParkedContactDetails:GET:/contacts/parked">): Promise<NiceCxoneFullApiOperationResponseMap["realtimedata-realtime-api-docs:ParkedContactDetails:GET:/contacts/parked"]>;
  RealtimedataRealtimeApiDocsGetContactsStates(...args: NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:get_/contacts/states:GET:/contacts/states">): Promise<NiceCxoneFullApiOperationResponseMap["realtimedata-realtime-api-docs:get_/contacts/states:GET:/contacts/states"]>;
  RealtimedataRealtimeApiDocsSkillActivity(...args: NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:SkillActivity:GET:/skills/activity">): Promise<NiceCxoneFullApiOperationResponseMap["realtimedata-realtime-api-docs:SkillActivity:GET:/skills/activity"]>;
  RealtimedataRealtimeApiDocsPostSkillsActivitySearch(...args: NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:post-skills-activity-search:POST:/skills/activity/search">): Promise<NiceCxoneFullApiOperationResponseMap["realtimedata-realtime-api-docs:post-skills-activity-search:POST:/skills/activity/search"]>;
  RealtimedataRealtimeApiDocsSkillActivityById(...args: NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:SkillActivityById:GET:/skills/{skillId}/activity">): Promise<NiceCxoneFullApiOperationResponseMap["realtimedata-realtime-api-docs:SkillActivityById:GET:/skills/{skillId}/activity"]>;
  RealtimedataRealtimeApiDocsAgentsAgentIdQueues(...args: NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:agents_agentId_queues:GET:/agents/{agentId}/queues">): Promise<NiceCxoneFullApiOperationResponseMap["realtimedata-realtime-api-docs:agents_agentId_queues:GET:/agents/{agentId}/queues"]>;
  RealtimedataRealtimeApiDocsAgentsAgentIdsQueuesDetails(...args: NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:agents_agentIds_queues_details:GET:/agents/{agentId}/queues-detail">): Promise<NiceCxoneFullApiOperationResponseMap["realtimedata-realtime-api-docs:agents_agentIds_queues_details:GET:/agents/{agentId}/queues-detail"]>;
}

export const NiceCxoneFullApiRealTimeGeneratedFunctionNames = [
  "RealtimedataRealtimeApiDocsGetAgentStates",
  "RealtimedataRealtimeApiDocsGetAgentsClientData",
  "RealtimedataRealtimeApiDocsPutAgentsClientData",
  "RealtimedataRealtimeApiDocsGetAgentStateByid",
  "RealtimedataRealtimeApiDocsActiveContacts",
  "RealtimedataRealtimeApiDocsParkedContactDetails",
  "RealtimedataRealtimeApiDocsGetContactsStates",
  "RealtimedataRealtimeApiDocsSkillActivity",
  "RealtimedataRealtimeApiDocsPostSkillsActivitySearch",
  "RealtimedataRealtimeApiDocsSkillActivityById",
  "RealtimedataRealtimeApiDocsAgentsAgentIdQueues",
  "RealtimedataRealtimeApiDocsAgentsAgentIdsQueuesDetails"
] as const satisfies readonly (keyof NiceCxoneFullApiRealTimeGeneratedClient)[];

export function createNiceCxoneFullApiRealTimeGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiRealTimeGeneratedClient {
  return {
    RealtimedataRealtimeApiDocsGetAgentStates: (...args) => callOperation("realtimedata-realtime-api-docs:getAgentStates:GET:/agents/states", ...(args as NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:getAgentStates:GET:/agents/states">)),
    RealtimedataRealtimeApiDocsGetAgentsClientData: (...args) => callOperation("realtimedata-realtime-api-docs:get-agents-client-data:GET:/agents/client-data", ...(args as NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:get-agents-client-data:GET:/agents/client-data">)),
    RealtimedataRealtimeApiDocsPutAgentsClientData: (...args) => callOperation("realtimedata-realtime-api-docs:put-agents-client-data:PUT:/agents/client-data", ...(args as NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:put-agents-client-data:PUT:/agents/client-data">)),
    RealtimedataRealtimeApiDocsGetAgentStateByid: (...args) => callOperation("realtimedata-realtime-api-docs:getAgentStateByid:GET:/agents/{agentId}/states", ...(args as NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:getAgentStateByid:GET:/agents/{agentId}/states">)),
    RealtimedataRealtimeApiDocsActiveContacts: (...args) => callOperation("realtimedata-realtime-api-docs:ActiveContacts:GET:/contacts/active", ...(args as NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:ActiveContacts:GET:/contacts/active">)),
    RealtimedataRealtimeApiDocsParkedContactDetails: (...args) => callOperation("realtimedata-realtime-api-docs:ParkedContactDetails:GET:/contacts/parked", ...(args as NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:ParkedContactDetails:GET:/contacts/parked">)),
    RealtimedataRealtimeApiDocsGetContactsStates: (...args) => callOperation("realtimedata-realtime-api-docs:get_/contacts/states:GET:/contacts/states", ...(args as NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:get_/contacts/states:GET:/contacts/states">)),
    RealtimedataRealtimeApiDocsSkillActivity: (...args) => callOperation("realtimedata-realtime-api-docs:SkillActivity:GET:/skills/activity", ...(args as NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:SkillActivity:GET:/skills/activity">)),
    RealtimedataRealtimeApiDocsPostSkillsActivitySearch: (...args) => callOperation("realtimedata-realtime-api-docs:post-skills-activity-search:POST:/skills/activity/search", ...(args as NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:post-skills-activity-search:POST:/skills/activity/search">)),
    RealtimedataRealtimeApiDocsSkillActivityById: (...args) => callOperation("realtimedata-realtime-api-docs:SkillActivityById:GET:/skills/{skillId}/activity", ...(args as NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:SkillActivityById:GET:/skills/{skillId}/activity">)),
    RealtimedataRealtimeApiDocsAgentsAgentIdQueues: (...args) => callOperation("realtimedata-realtime-api-docs:agents_agentId_queues:GET:/agents/{agentId}/queues", ...(args as NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:agents_agentId_queues:GET:/agents/{agentId}/queues">)),
    RealtimedataRealtimeApiDocsAgentsAgentIdsQueuesDetails: (...args) => callOperation("realtimedata-realtime-api-docs:agents_agentIds_queues_details:GET:/agents/{agentId}/queues-detail", ...(args as NiceCxoneFullApiOperationArgs<"realtimedata-realtime-api-docs:agents_agentIds_queues_details:GET:/agents/{agentId}/queues-detail">)),
  };
}
