// Generated endpoint chunk for ZoomContactCenterFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZoomContactCenterGeneratedOperationCaller,
  ZoomContactCenterFullApiOperationArgs,
  ZoomContactCenterFullApiOperationInput,
  ZoomContactCenterFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZoomContactCenterFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZoomContactCenterFullApiQueuesOperationKeys = [
  "GET /contact_center/queue_templates",
  "POST /contact_center/queue_templates",
  "DELETE /contact_center/queue_templates",
  "GET /contact_center/queue_templates/{queueTemplateId}",
  "DELETE /contact_center/queue_templates/{queueTemplateId}",
  "PATCH /contact_center/queue_templates/{queueTemplateId}",
  "GET /contact_center/queues",
  "POST /contact_center/queues",
  "POST /contact_center/queues/batch",
  "DELETE /contact_center/queues/batch",
  "GET /contact_center/queues/{queueId}",
  "DELETE /contact_center/queues/{queueId}",
  "PATCH /contact_center/queues/{queueId}",
  "GET /contact_center/queues/{queueId}/agents",
  "POST /contact_center/queues/{queueId}/agents",
  "DELETE /contact_center/queues/{queueId}/agents/{userId}",
  "PATCH /contact_center/queues/{queueId}/agents/{userId}",
  "GET /contact_center/queues/{queueId}/dispositions",
  "POST /contact_center/queues/{queueId}/dispositions",
  "GET /contact_center/queues/{queueId}/dispositions/sets",
  "POST /contact_center/queues/{queueId}/dispositions/sets",
  "DELETE /contact_center/queues/{queueId}/dispositions/sets/{dispositionSetId}",
  "DELETE /contact_center/queues/{queueId}/dispositions/{dispositionId}",
  "GET /contact_center/queues/{queueId}/interrupt",
  "PATCH /contact_center/queues/{queueId}/interrupt",
  "POST /contact_center/queues/{queueId}/interrupt_menu",
  "DELETE /contact_center/queues/{queueId}/interrupt_menu",
  "GET /contact_center/queues/{queueId}/operating_hours",
  "PATCH /contact_center/queues/{queueId}/operating_hours",
  "GET /contact_center/queues/{queueId}/recordings",
  "DELETE /contact_center/queues/{queueId}/recordings",
  "DELETE /contact_center/queues/{queueId}/scheduled_callbacks/attendees/{attendeeId}",
  "POST /contact_center/queues/{queueId}/scheduled_callbacks/events",
  "GET /contact_center/queues/{queueId}/scheduled_callbacks/supportive_slots",
  "GET /contact_center/queues/{queueId}/supervisors",
  "POST /contact_center/queues/{queueId}/supervisors",
  "DELETE /contact_center/queues/{queueId}/supervisors/{userId}",
  "POST /contact_center/queues/{queueId}/teams",
  "DELETE /contact_center/queues/{queueId}/teams",
  "DELETE /contact_center/queues/{queueId}/teams/{teamId}"
] as const;
export type ZoomContactCenterFullApiQueuesOperationKey = typeof ZoomContactCenterFullApiQueuesOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiQueuesOperationPathParamMap {
  "GET /contact_center/queue_templates": {};
  "POST /contact_center/queue_templates": {};
  "DELETE /contact_center/queue_templates": {};
  "GET /contact_center/queue_templates/{queueTemplateId}": { "queueTemplateId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/queue_templates/{queueTemplateId}": { "queueTemplateId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/queue_templates/{queueTemplateId}": { "queueTemplateId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/queues": {};
  "POST /contact_center/queues": {};
  "POST /contact_center/queues/batch": {};
  "DELETE /contact_center/queues/batch": {};
  "GET /contact_center/queues/{queueId}": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/queues/{queueId}": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/queues/{queueId}": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/queues/{queueId}/agents": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/queues/{queueId}/agents": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/queues/{queueId}/agents/{userId}": { "queueId": ZoomContactCenterFullApiPathParamValue; "userId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/queues/{queueId}/agents/{userId}": { "queueId": ZoomContactCenterFullApiPathParamValue; "userId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/queues/{queueId}/dispositions": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/queues/{queueId}/dispositions": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/queues/{queueId}/dispositions/sets": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/queues/{queueId}/dispositions/sets": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/queues/{queueId}/dispositions/sets/{dispositionSetId}": { "queueId": ZoomContactCenterFullApiPathParamValue; "dispositionSetId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/queues/{queueId}/dispositions/{dispositionId}": { "queueId": ZoomContactCenterFullApiPathParamValue; "dispositionId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/queues/{queueId}/interrupt": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/queues/{queueId}/interrupt": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/queues/{queueId}/interrupt_menu": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/queues/{queueId}/interrupt_menu": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/queues/{queueId}/operating_hours": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/queues/{queueId}/operating_hours": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/queues/{queueId}/recordings": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/queues/{queueId}/recordings": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/queues/{queueId}/scheduled_callbacks/attendees/{attendeeId}": { "queueId": ZoomContactCenterFullApiPathParamValue; "attendeeId": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/queues/{queueId}/scheduled_callbacks/events": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/queues/{queueId}/scheduled_callbacks/supportive_slots": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/queues/{queueId}/supervisors": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/queues/{queueId}/supervisors": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/queues/{queueId}/supervisors/{userId}": { "queueId": ZoomContactCenterFullApiPathParamValue; "userId": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/queues/{queueId}/teams": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/queues/{queueId}/teams": { "queueId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/queues/{queueId}/teams/{teamId}": { "queueId": ZoomContactCenterFullApiPathParamValue; "teamId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiQueuesOperationRequestMap {
  "GET /contact_center/queue_templates": ZoomContactCenterFullApiOperationInput<"GET /contact_center/queue_templates">;
  "POST /contact_center/queue_templates": ZoomContactCenterFullApiOperationInput<"POST /contact_center/queue_templates">;
  "DELETE /contact_center/queue_templates": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/queue_templates">;
  "GET /contact_center/queue_templates/{queueTemplateId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/queue_templates/{queueTemplateId}">;
  "DELETE /contact_center/queue_templates/{queueTemplateId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/queue_templates/{queueTemplateId}">;
  "PATCH /contact_center/queue_templates/{queueTemplateId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/queue_templates/{queueTemplateId}">;
  "GET /contact_center/queues": ZoomContactCenterFullApiOperationInput<"GET /contact_center/queues">;
  "POST /contact_center/queues": ZoomContactCenterFullApiOperationInput<"POST /contact_center/queues">;
  "POST /contact_center/queues/batch": ZoomContactCenterFullApiOperationInput<"POST /contact_center/queues/batch">;
  "DELETE /contact_center/queues/batch": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/queues/batch">;
  "GET /contact_center/queues/{queueId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/queues/{queueId}">;
  "DELETE /contact_center/queues/{queueId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/queues/{queueId}">;
  "PATCH /contact_center/queues/{queueId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/queues/{queueId}">;
  "GET /contact_center/queues/{queueId}/agents": ZoomContactCenterFullApiOperationInput<"GET /contact_center/queues/{queueId}/agents">;
  "POST /contact_center/queues/{queueId}/agents": ZoomContactCenterFullApiOperationInput<"POST /contact_center/queues/{queueId}/agents">;
  "DELETE /contact_center/queues/{queueId}/agents/{userId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/queues/{queueId}/agents/{userId}">;
  "PATCH /contact_center/queues/{queueId}/agents/{userId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/queues/{queueId}/agents/{userId}">;
  "GET /contact_center/queues/{queueId}/dispositions": ZoomContactCenterFullApiOperationInput<"GET /contact_center/queues/{queueId}/dispositions">;
  "POST /contact_center/queues/{queueId}/dispositions": ZoomContactCenterFullApiOperationInput<"POST /contact_center/queues/{queueId}/dispositions">;
  "GET /contact_center/queues/{queueId}/dispositions/sets": ZoomContactCenterFullApiOperationInput<"GET /contact_center/queues/{queueId}/dispositions/sets">;
  "POST /contact_center/queues/{queueId}/dispositions/sets": ZoomContactCenterFullApiOperationInput<"POST /contact_center/queues/{queueId}/dispositions/sets">;
  "DELETE /contact_center/queues/{queueId}/dispositions/sets/{dispositionSetId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/queues/{queueId}/dispositions/sets/{dispositionSetId}">;
  "DELETE /contact_center/queues/{queueId}/dispositions/{dispositionId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/queues/{queueId}/dispositions/{dispositionId}">;
  "GET /contact_center/queues/{queueId}/interrupt": ZoomContactCenterFullApiOperationInput<"GET /contact_center/queues/{queueId}/interrupt">;
  "PATCH /contact_center/queues/{queueId}/interrupt": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/queues/{queueId}/interrupt">;
  "POST /contact_center/queues/{queueId}/interrupt_menu": ZoomContactCenterFullApiOperationInput<"POST /contact_center/queues/{queueId}/interrupt_menu">;
  "DELETE /contact_center/queues/{queueId}/interrupt_menu": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/queues/{queueId}/interrupt_menu">;
  "GET /contact_center/queues/{queueId}/operating_hours": ZoomContactCenterFullApiOperationInput<"GET /contact_center/queues/{queueId}/operating_hours">;
  "PATCH /contact_center/queues/{queueId}/operating_hours": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/queues/{queueId}/operating_hours">;
  "GET /contact_center/queues/{queueId}/recordings": ZoomContactCenterFullApiOperationInput<"GET /contact_center/queues/{queueId}/recordings">;
  "DELETE /contact_center/queues/{queueId}/recordings": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/queues/{queueId}/recordings">;
  "DELETE /contact_center/queues/{queueId}/scheduled_callbacks/attendees/{attendeeId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/queues/{queueId}/scheduled_callbacks/attendees/{attendeeId}">;
  "POST /contact_center/queues/{queueId}/scheduled_callbacks/events": ZoomContactCenterFullApiOperationInput<"POST /contact_center/queues/{queueId}/scheduled_callbacks/events">;
  "GET /contact_center/queues/{queueId}/scheduled_callbacks/supportive_slots": ZoomContactCenterFullApiOperationInput<"GET /contact_center/queues/{queueId}/scheduled_callbacks/supportive_slots">;
  "GET /contact_center/queues/{queueId}/supervisors": ZoomContactCenterFullApiOperationInput<"GET /contact_center/queues/{queueId}/supervisors">;
  "POST /contact_center/queues/{queueId}/supervisors": ZoomContactCenterFullApiOperationInput<"POST /contact_center/queues/{queueId}/supervisors">;
  "DELETE /contact_center/queues/{queueId}/supervisors/{userId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/queues/{queueId}/supervisors/{userId}">;
  "POST /contact_center/queues/{queueId}/teams": ZoomContactCenterFullApiOperationInput<"POST /contact_center/queues/{queueId}/teams">;
  "DELETE /contact_center/queues/{queueId}/teams": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/queues/{queueId}/teams">;
  "DELETE /contact_center/queues/{queueId}/teams/{teamId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/queues/{queueId}/teams/{teamId}">;
}

export interface ZoomContactCenterFullApiQueuesGeneratedClient {
  Listqueuetemplates(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queue_templates">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/queue_templates"]>;
  CreateQueueTemplate(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/queue_templates">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/queue_templates"]>;
  DeleteQueueTemplates(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queue_templates">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/queue_templates"]>;
  GetQueueTemplate(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queue_templates/{queueTemplateId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/queue_templates/{queueTemplateId}"]>;
  DeleteQueueTemplate(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queue_templates/{queueTemplateId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/queue_templates/{queueTemplateId}"]>;
  UpdateQueueTemplate(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/queue_templates/{queueTemplateId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/queue_templates/{queueTemplateId}"]>;
  ListQueues(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queues">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/queues"]>;
  QueueCreate(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/queues">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/queues"]>;
  Batchcreatequeueswithatemplate(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/queues/batch">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/queues/batch"]>;
  Batchdeletequeues(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/batch">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/queues/batch"]>;
  GetAQueue(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queues/{queueId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/queues/{queueId}"]>;
  QueueDelete(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/{queueId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/queues/{queueId}"]>;
  QueueUpdate(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/queues/{queueId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/queues/{queueId}"]>;
  GetQueueAgents(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queues/{queueId}/agents">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/queues/{queueId}/agents"]>;
  AssignQueueAgents(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/queues/{queueId}/agents">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/queues/{queueId}/agents"]>;
  DeleteQueueAgent(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/{queueId}/agents/{userId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/queues/{queueId}/agents/{userId}"]>;
  UpdateQueueAgent(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/queues/{queueId}/agents/{userId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/queues/{queueId}/agents/{userId}"]>;
  GetQueueDispositions(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queues/{queueId}/dispositions">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/queues/{queueId}/dispositions"]>;
  AssignQueueDispositions(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/queues/{queueId}/dispositions">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/queues/{queueId}/dispositions"]>;
  GetQueueDispositionSets(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queues/{queueId}/dispositions/sets">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/queues/{queueId}/dispositions/sets"]>;
  AssignQueueDispositionSets(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/queues/{queueId}/dispositions/sets">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/queues/{queueId}/dispositions/sets"]>;
  DeleteQueueDispositionSet(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/{queueId}/dispositions/sets/{dispositionSetId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/queues/{queueId}/dispositions/sets/{dispositionSetId}"]>;
  DeleteQueueDisposition(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/{queueId}/dispositions/{dispositionId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/queues/{queueId}/dispositions/{dispositionId}"]>;
  GetQueueInterruptSettings(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queues/{queueId}/interrupt">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/queues/{queueId}/interrupt"]>;
  UpdateQueueInterrupts(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/queues/{queueId}/interrupt">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/queues/{queueId}/interrupt"]>;
  AssignQueueMenuBasedInterrupt(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/queues/{queueId}/interrupt_menu">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/queues/{queueId}/interrupt_menu"]>;
  DeleteQueueInterruptMenu(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/{queueId}/interrupt_menu">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/queues/{queueId}/interrupt_menu"]>;
  GetAQueueOperatingHours(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queues/{queueId}/operating_hours">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/queues/{queueId}/operating_hours"]>;
  QueueOperatingHoursUpdate(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/queues/{queueId}/operating_hours">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/queues/{queueId}/operating_hours"]>;
  ListQueueRecordings(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queues/{queueId}/recordings">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/queues/{queueId}/recordings"]>;
  DeleteQueueRecordings(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/{queueId}/recordings">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/queues/{queueId}/recordings"]>;
  Deleteascheduledcallbackforanattendee(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/{queueId}/scheduled_callbacks/attendees/{attendeeId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/queues/{queueId}/scheduled_callbacks/attendees/{attendeeId}"]>;
  Scheduleacallbackonaqueue(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/queues/{queueId}/scheduled_callbacks/events">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/queues/{queueId}/scheduled_callbacks/events"]>;
  Listqueuescheduledcallbacksavailability(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queues/{queueId}/scheduled_callbacks/supportive_slots">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/queues/{queueId}/scheduled_callbacks/supportive_slots"]>;
  GetQueueSupervisors(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queues/{queueId}/supervisors">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/queues/{queueId}/supervisors"]>;
  AssignQueueSupervisors(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/queues/{queueId}/supervisors">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/queues/{queueId}/supervisors"]>;
  DeleteQueueSupervisor(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/{queueId}/supervisors/{userId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/queues/{queueId}/supervisors/{userId}"]>;
  AssignQueueTeams(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/queues/{queueId}/teams">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/queues/{queueId}/teams"]>;
  BatchDeleteQueueTeams(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/{queueId}/teams">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/queues/{queueId}/teams"]>;
  DeleteQueueTeam(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/{queueId}/teams/{teamId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/queues/{queueId}/teams/{teamId}"]>;
}

export const ZoomContactCenterFullApiQueuesGeneratedFunctionNames = [
  "Listqueuetemplates",
  "CreateQueueTemplate",
  "DeleteQueueTemplates",
  "GetQueueTemplate",
  "DeleteQueueTemplate",
  "UpdateQueueTemplate",
  "ListQueues",
  "QueueCreate",
  "Batchcreatequeueswithatemplate",
  "Batchdeletequeues",
  "GetAQueue",
  "QueueDelete",
  "QueueUpdate",
  "GetQueueAgents",
  "AssignQueueAgents",
  "DeleteQueueAgent",
  "UpdateQueueAgent",
  "GetQueueDispositions",
  "AssignQueueDispositions",
  "GetQueueDispositionSets",
  "AssignQueueDispositionSets",
  "DeleteQueueDispositionSet",
  "DeleteQueueDisposition",
  "GetQueueInterruptSettings",
  "UpdateQueueInterrupts",
  "AssignQueueMenuBasedInterrupt",
  "DeleteQueueInterruptMenu",
  "GetAQueueOperatingHours",
  "QueueOperatingHoursUpdate",
  "ListQueueRecordings",
  "DeleteQueueRecordings",
  "Deleteascheduledcallbackforanattendee",
  "Scheduleacallbackonaqueue",
  "Listqueuescheduledcallbacksavailability",
  "GetQueueSupervisors",
  "AssignQueueSupervisors",
  "DeleteQueueSupervisor",
  "AssignQueueTeams",
  "BatchDeleteQueueTeams",
  "DeleteQueueTeam"
] as const satisfies readonly (keyof ZoomContactCenterFullApiQueuesGeneratedClient)[];

export function createZoomContactCenterFullApiQueuesGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiQueuesGeneratedClient {
  return {
    Listqueuetemplates: (...args) => callOperation("GET /contact_center/queue_templates", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queue_templates">)),
    CreateQueueTemplate: (...args) => callOperation("POST /contact_center/queue_templates", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/queue_templates">)),
    DeleteQueueTemplates: (...args) => callOperation("DELETE /contact_center/queue_templates", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queue_templates">)),
    GetQueueTemplate: (...args) => callOperation("GET /contact_center/queue_templates/{queueTemplateId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queue_templates/{queueTemplateId}">)),
    DeleteQueueTemplate: (...args) => callOperation("DELETE /contact_center/queue_templates/{queueTemplateId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queue_templates/{queueTemplateId}">)),
    UpdateQueueTemplate: (...args) => callOperation("PATCH /contact_center/queue_templates/{queueTemplateId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/queue_templates/{queueTemplateId}">)),
    ListQueues: (...args) => callOperation("GET /contact_center/queues", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queues">)),
    QueueCreate: (...args) => callOperation("POST /contact_center/queues", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/queues">)),
    Batchcreatequeueswithatemplate: (...args) => callOperation("POST /contact_center/queues/batch", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/queues/batch">)),
    Batchdeletequeues: (...args) => callOperation("DELETE /contact_center/queues/batch", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/batch">)),
    GetAQueue: (...args) => callOperation("GET /contact_center/queues/{queueId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queues/{queueId}">)),
    QueueDelete: (...args) => callOperation("DELETE /contact_center/queues/{queueId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/{queueId}">)),
    QueueUpdate: (...args) => callOperation("PATCH /contact_center/queues/{queueId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/queues/{queueId}">)),
    GetQueueAgents: (...args) => callOperation("GET /contact_center/queues/{queueId}/agents", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queues/{queueId}/agents">)),
    AssignQueueAgents: (...args) => callOperation("POST /contact_center/queues/{queueId}/agents", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/queues/{queueId}/agents">)),
    DeleteQueueAgent: (...args) => callOperation("DELETE /contact_center/queues/{queueId}/agents/{userId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/{queueId}/agents/{userId}">)),
    UpdateQueueAgent: (...args) => callOperation("PATCH /contact_center/queues/{queueId}/agents/{userId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/queues/{queueId}/agents/{userId}">)),
    GetQueueDispositions: (...args) => callOperation("GET /contact_center/queues/{queueId}/dispositions", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queues/{queueId}/dispositions">)),
    AssignQueueDispositions: (...args) => callOperation("POST /contact_center/queues/{queueId}/dispositions", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/queues/{queueId}/dispositions">)),
    GetQueueDispositionSets: (...args) => callOperation("GET /contact_center/queues/{queueId}/dispositions/sets", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queues/{queueId}/dispositions/sets">)),
    AssignQueueDispositionSets: (...args) => callOperation("POST /contact_center/queues/{queueId}/dispositions/sets", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/queues/{queueId}/dispositions/sets">)),
    DeleteQueueDispositionSet: (...args) => callOperation("DELETE /contact_center/queues/{queueId}/dispositions/sets/{dispositionSetId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/{queueId}/dispositions/sets/{dispositionSetId}">)),
    DeleteQueueDisposition: (...args) => callOperation("DELETE /contact_center/queues/{queueId}/dispositions/{dispositionId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/{queueId}/dispositions/{dispositionId}">)),
    GetQueueInterruptSettings: (...args) => callOperation("GET /contact_center/queues/{queueId}/interrupt", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queues/{queueId}/interrupt">)),
    UpdateQueueInterrupts: (...args) => callOperation("PATCH /contact_center/queues/{queueId}/interrupt", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/queues/{queueId}/interrupt">)),
    AssignQueueMenuBasedInterrupt: (...args) => callOperation("POST /contact_center/queues/{queueId}/interrupt_menu", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/queues/{queueId}/interrupt_menu">)),
    DeleteQueueInterruptMenu: (...args) => callOperation("DELETE /contact_center/queues/{queueId}/interrupt_menu", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/{queueId}/interrupt_menu">)),
    GetAQueueOperatingHours: (...args) => callOperation("GET /contact_center/queues/{queueId}/operating_hours", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queues/{queueId}/operating_hours">)),
    QueueOperatingHoursUpdate: (...args) => callOperation("PATCH /contact_center/queues/{queueId}/operating_hours", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/queues/{queueId}/operating_hours">)),
    ListQueueRecordings: (...args) => callOperation("GET /contact_center/queues/{queueId}/recordings", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queues/{queueId}/recordings">)),
    DeleteQueueRecordings: (...args) => callOperation("DELETE /contact_center/queues/{queueId}/recordings", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/{queueId}/recordings">)),
    Deleteascheduledcallbackforanattendee: (...args) => callOperation("DELETE /contact_center/queues/{queueId}/scheduled_callbacks/attendees/{attendeeId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/{queueId}/scheduled_callbacks/attendees/{attendeeId}">)),
    Scheduleacallbackonaqueue: (...args) => callOperation("POST /contact_center/queues/{queueId}/scheduled_callbacks/events", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/queues/{queueId}/scheduled_callbacks/events">)),
    Listqueuescheduledcallbacksavailability: (...args) => callOperation("GET /contact_center/queues/{queueId}/scheduled_callbacks/supportive_slots", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queues/{queueId}/scheduled_callbacks/supportive_slots">)),
    GetQueueSupervisors: (...args) => callOperation("GET /contact_center/queues/{queueId}/supervisors", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/queues/{queueId}/supervisors">)),
    AssignQueueSupervisors: (...args) => callOperation("POST /contact_center/queues/{queueId}/supervisors", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/queues/{queueId}/supervisors">)),
    DeleteQueueSupervisor: (...args) => callOperation("DELETE /contact_center/queues/{queueId}/supervisors/{userId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/{queueId}/supervisors/{userId}">)),
    AssignQueueTeams: (...args) => callOperation("POST /contact_center/queues/{queueId}/teams", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/queues/{queueId}/teams">)),
    BatchDeleteQueueTeams: (...args) => callOperation("DELETE /contact_center/queues/{queueId}/teams", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/{queueId}/teams">)),
    DeleteQueueTeam: (...args) => callOperation("DELETE /contact_center/queues/{queueId}/teams/{teamId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/queues/{queueId}/teams/{teamId}">)),
  };
}
