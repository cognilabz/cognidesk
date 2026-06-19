// Generated endpoint chunk for HubSpotFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  HubSpotGeneratedOperationCaller,
  HubSpotFullApiOperationArgs,
  HubSpotFullApiOperationInput,
  HubSpotFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { HubSpotFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const HubSpotFullApiBasic06OperationKeys = [
  "crm:tasks:2026-03:delete-/crm/objects/2026-03/tasks/{taskId}_archive",
  "crm:tasks:2026-03:patch-/crm/objects/2026-03/tasks/{taskId}_update",
  "crm:tasks:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}",
  "crm:tasks:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}",
  "conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03_/conversations/custom-channels/v3",
  "conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03_/conversations/custom-channels/v3",
  "crm:notes:2026-03:get-/crm/objects/2026-03/notes_getPage",
  "crm:notes:2026-03:post-/crm/objects/2026-03/notes_create",
  "crm:notes:2026-03:get-/crm/objects/2026-03/notes/{noteId}_getById",
  "crm:notes:2026-03:delete-/crm/objects/2026-03/notes/{noteId}_archive",
  "crm:notes:2026-03:patch-/crm/objects/2026-03/notes/{noteId}_update",
  "crm:notes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}",
  "crm:notes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}",
  "events:manage-event-definitions:2026-03:get-/events/2026-03/event-definitions",
  "events:manage-event-definitions:2026-03:post-/events/2026-03/event-definitions",
  "events:manage-event-definitions:2026-03:get-/events/2026-03/event-definitions/{eventName}",
  "events:manage-event-definitions:2026-03:delete-/events/2026-03/event-definitions/{eventName}",
  "events:manage-event-definitions:2026-03:patch-/events/2026-03/event-definitions/{eventName}",
  "events:manage-event-definitions:2026-03:delete-/events/2026-03/event-definitions/{eventName}/property/{propertyName}",
  "events:manage-event-definitions:2026-03:patch-/events/2026-03/event-definitions/{eventName}/property/{propertyName}",
  "crm:users:2026-03:get-/crm/objects/2026-03/users",
  "crm:users:2026-03:post-/crm/objects/2026-03/users",
  "crm:users:2026-03:get-/crm/objects/2026-03/users/{userId}",
  "crm:users:2026-03:delete-/crm/objects/2026-03/users/{userId}",
  "crm:users:2026-03:patch-/crm/objects/2026-03/users/{userId}",
  "crm:users:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}",
  "crm:users:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}",
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03_/marketing/emails/v3",
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03_/marketing/emails/v3",
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/statistics/histogram_getHistogram",
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/statistics/list_getEmailsList",
  "crm:quotes:2026-03:get-/crm/objects/2026-03/quotes_getPage",
  "crm:quotes:2026-03:post-/crm/objects/2026-03/quotes_create",
  "crm:quotes:2026-03:get-/crm/objects/2026-03/quotes/{quoteId}_getById",
  "crm:quotes:2026-03:delete-/crm/objects/2026-03/quotes/{quoteId}_archive",
  "crm:quotes:2026-03:patch-/crm/objects/2026-03/quotes/{quoteId}_update",
  "crm:quotes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}",
  "crm:quotes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}",
  "crm:carts:2026-03:get-/crm/objects/2026-03/carts",
  "crm:carts:2026-03:post-/crm/objects/2026-03/carts",
  "crm:carts:2026-03:get-/crm/objects/2026-03/carts/{cartId}",
  "crm:carts:2026-03:delete-/crm/objects/2026-03/carts/{cartId}",
  "crm:carts:2026-03:patch-/crm/objects/2026-03/carts/{cartId}",
  "crm:carts:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}",
  "crm:carts:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}",
  "events:send-event-completions:2026-03:post-/events/2026-03/send_send",
  "crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}_getAll",
  "crm:pipelines:2026-03:post-/crm/pipelines/2026-03/{objectType}_create",
  "crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}_getById",
  "crm:pipelines:2026-03:put-/crm/pipelines/2026-03/{objectType}/{pipelineId}_replace",
  "crm:pipelines:2026-03:delete-/crm/pipelines/2026-03/{objectType}/{pipelineId}_archive",
  "crm:pipelines:2026-03:patch-/crm/pipelines/2026-03/{objectType}/{pipelineId}_update",
  "crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/audit_getAudit",
  "crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages_getAll",
  "crm:pipelines:2026-03:post-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages_create",
  "crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_getById",
  "crm:pipelines:2026-03:put-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_replace",
  "crm:pipelines:2026-03:delete-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_archive",
  "crm:pipelines:2026-03:patch-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_update",
  "crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}/audit_getAudit",
  "scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links",
  "scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links/book/availability-page/{slug}",
  "scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links/book/{slug}",
  "crm:objects:2026-03:get-/crm/objects/2026-03/{objectType}_/crm/objects/2025-09/{objectType}",
  "crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}_/crm/objects/2025-09/{objectType}",
  "crm:objects:2026-03:get-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}",
  "crm:objects:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}",
  "crm:objects:2026-03:patch-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}",
  "crm:courses:2026-03:get-/crm/objects/2026-03/0-410",
  "crm:courses:2026-03:post-/crm/objects/2026-03/0-410",
  "crm:courses:2026-03:get-/crm/objects/2026-03/0-410/{courseId}",
  "crm:courses:2026-03:delete-/crm/objects/2026-03/0-410/{courseId}",
  "crm:courses:2026-03:patch-/crm/objects/2026-03/0-410/{courseId}",
  "crm:courses:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}",
  "crm:courses:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}",
  "crm:fees:2026-03:get-/crm/objects/2026-03/fees",
  "crm:fees:2026-03:post-/crm/objects/2026-03/fees",
  "crm:fees:2026-03:get-/crm/objects/2026-03/fees/{feeId}",
  "crm:fees:2026-03:delete-/crm/objects/2026-03/fees/{feeId}",
  "crm:fees:2026-03:patch-/crm/objects/2026-03/fees/{feeId}"
] as const;
export type HubSpotFullApiBasic06OperationKey = typeof HubSpotFullApiBasic06OperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiBasic06OperationPathParamMap {
  "crm:tasks:2026-03:delete-/crm/objects/2026-03/tasks/{taskId}_archive": { "taskId": HubSpotFullApiPathParamValue };
  "crm:tasks:2026-03:patch-/crm/objects/2026-03/tasks/{taskId}_update": { "taskId": HubSpotFullApiPathParamValue };
  "crm:tasks:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:tasks:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03_/conversations/custom-channels/v3": {};
  "conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03_/conversations/custom-channels/v3": {};
  "crm:notes:2026-03:get-/crm/objects/2026-03/notes_getPage": {};
  "crm:notes:2026-03:post-/crm/objects/2026-03/notes_create": {};
  "crm:notes:2026-03:get-/crm/objects/2026-03/notes/{noteId}_getById": { "noteId": HubSpotFullApiPathParamValue };
  "crm:notes:2026-03:delete-/crm/objects/2026-03/notes/{noteId}_archive": { "noteId": HubSpotFullApiPathParamValue };
  "crm:notes:2026-03:patch-/crm/objects/2026-03/notes/{noteId}_update": { "noteId": HubSpotFullApiPathParamValue };
  "crm:notes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:notes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "events:manage-event-definitions:2026-03:get-/events/2026-03/event-definitions": {};
  "events:manage-event-definitions:2026-03:post-/events/2026-03/event-definitions": {};
  "events:manage-event-definitions:2026-03:get-/events/2026-03/event-definitions/{eventName}": { "eventName": HubSpotFullApiPathParamValue };
  "events:manage-event-definitions:2026-03:delete-/events/2026-03/event-definitions/{eventName}": { "eventName": HubSpotFullApiPathParamValue };
  "events:manage-event-definitions:2026-03:patch-/events/2026-03/event-definitions/{eventName}": { "eventName": HubSpotFullApiPathParamValue };
  "events:manage-event-definitions:2026-03:delete-/events/2026-03/event-definitions/{eventName}/property/{propertyName}": { "eventName": HubSpotFullApiPathParamValue; "propertyName": HubSpotFullApiPathParamValue };
  "events:manage-event-definitions:2026-03:patch-/events/2026-03/event-definitions/{eventName}/property/{propertyName}": { "eventName": HubSpotFullApiPathParamValue; "propertyName": HubSpotFullApiPathParamValue };
  "crm:users:2026-03:get-/crm/objects/2026-03/users": {};
  "crm:users:2026-03:post-/crm/objects/2026-03/users": {};
  "crm:users:2026-03:get-/crm/objects/2026-03/users/{userId}": { "userId": HubSpotFullApiPathParamValue };
  "crm:users:2026-03:delete-/crm/objects/2026-03/users/{userId}": { "userId": HubSpotFullApiPathParamValue };
  "crm:users:2026-03:patch-/crm/objects/2026-03/users/{userId}": { "userId": HubSpotFullApiPathParamValue };
  "crm:users:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:users:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03_/marketing/emails/v3": {};
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03_/marketing/emails/v3": {};
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/statistics/histogram_getHistogram": {};
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/statistics/list_getEmailsList": {};
  "crm:quotes:2026-03:get-/crm/objects/2026-03/quotes_getPage": {};
  "crm:quotes:2026-03:post-/crm/objects/2026-03/quotes_create": {};
  "crm:quotes:2026-03:get-/crm/objects/2026-03/quotes/{quoteId}_getById": { "quoteId": HubSpotFullApiPathParamValue };
  "crm:quotes:2026-03:delete-/crm/objects/2026-03/quotes/{quoteId}_archive": { "quoteId": HubSpotFullApiPathParamValue };
  "crm:quotes:2026-03:patch-/crm/objects/2026-03/quotes/{quoteId}_update": { "quoteId": HubSpotFullApiPathParamValue };
  "crm:quotes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:quotes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:carts:2026-03:get-/crm/objects/2026-03/carts": {};
  "crm:carts:2026-03:post-/crm/objects/2026-03/carts": {};
  "crm:carts:2026-03:get-/crm/objects/2026-03/carts/{cartId}": { "cartId": HubSpotFullApiPathParamValue };
  "crm:carts:2026-03:delete-/crm/objects/2026-03/carts/{cartId}": { "cartId": HubSpotFullApiPathParamValue };
  "crm:carts:2026-03:patch-/crm/objects/2026-03/carts/{cartId}": { "cartId": HubSpotFullApiPathParamValue };
  "crm:carts:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:carts:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "events:send-event-completions:2026-03:post-/events/2026-03/send_send": {};
  "crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}_getAll": { "objectType": HubSpotFullApiPathParamValue };
  "crm:pipelines:2026-03:post-/crm/pipelines/2026-03/{objectType}_create": { "objectType": HubSpotFullApiPathParamValue };
  "crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}_getById": { "objectType": HubSpotFullApiPathParamValue; "pipelineId": HubSpotFullApiPathParamValue };
  "crm:pipelines:2026-03:put-/crm/pipelines/2026-03/{objectType}/{pipelineId}_replace": { "objectType": HubSpotFullApiPathParamValue; "pipelineId": HubSpotFullApiPathParamValue };
  "crm:pipelines:2026-03:delete-/crm/pipelines/2026-03/{objectType}/{pipelineId}_archive": { "objectType": HubSpotFullApiPathParamValue; "pipelineId": HubSpotFullApiPathParamValue };
  "crm:pipelines:2026-03:patch-/crm/pipelines/2026-03/{objectType}/{pipelineId}_update": { "objectType": HubSpotFullApiPathParamValue; "pipelineId": HubSpotFullApiPathParamValue };
  "crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/audit_getAudit": { "objectType": HubSpotFullApiPathParamValue; "pipelineId": HubSpotFullApiPathParamValue };
  "crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages_getAll": { "objectType": HubSpotFullApiPathParamValue; "pipelineId": HubSpotFullApiPathParamValue };
  "crm:pipelines:2026-03:post-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages_create": { "objectType": HubSpotFullApiPathParamValue; "pipelineId": HubSpotFullApiPathParamValue };
  "crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_getById": { "objectType": HubSpotFullApiPathParamValue; "pipelineId": HubSpotFullApiPathParamValue; "stageId": HubSpotFullApiPathParamValue };
  "crm:pipelines:2026-03:put-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_replace": { "objectType": HubSpotFullApiPathParamValue; "pipelineId": HubSpotFullApiPathParamValue; "stageId": HubSpotFullApiPathParamValue };
  "crm:pipelines:2026-03:delete-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_archive": { "objectType": HubSpotFullApiPathParamValue; "pipelineId": HubSpotFullApiPathParamValue; "stageId": HubSpotFullApiPathParamValue };
  "crm:pipelines:2026-03:patch-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_update": { "objectType": HubSpotFullApiPathParamValue; "pipelineId": HubSpotFullApiPathParamValue; "stageId": HubSpotFullApiPathParamValue };
  "crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}/audit_getAudit": { "objectType": HubSpotFullApiPathParamValue; "pipelineId": HubSpotFullApiPathParamValue; "stageId": HubSpotFullApiPathParamValue };
  "scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links": {};
  "scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links/book/availability-page/{slug}": { "slug": HubSpotFullApiPathParamValue };
  "scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links/book/{slug}": { "slug": HubSpotFullApiPathParamValue };
  "crm:objects:2026-03:get-/crm/objects/2026-03/{objectType}_/crm/objects/2025-09/{objectType}": { "objectType": HubSpotFullApiPathParamValue };
  "crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}_/crm/objects/2025-09/{objectType}": { "objectType": HubSpotFullApiPathParamValue };
  "crm:objects:2026-03:get-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue };
  "crm:objects:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue };
  "crm:objects:2026-03:patch-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue };
  "crm:courses:2026-03:get-/crm/objects/2026-03/0-410": {};
  "crm:courses:2026-03:post-/crm/objects/2026-03/0-410": {};
  "crm:courses:2026-03:get-/crm/objects/2026-03/0-410/{courseId}": { "courseId": HubSpotFullApiPathParamValue };
  "crm:courses:2026-03:delete-/crm/objects/2026-03/0-410/{courseId}": { "courseId": HubSpotFullApiPathParamValue };
  "crm:courses:2026-03:patch-/crm/objects/2026-03/0-410/{courseId}": { "courseId": HubSpotFullApiPathParamValue };
  "crm:courses:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:courses:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:fees:2026-03:get-/crm/objects/2026-03/fees": {};
  "crm:fees:2026-03:post-/crm/objects/2026-03/fees": {};
  "crm:fees:2026-03:get-/crm/objects/2026-03/fees/{feeId}": { "feeId": HubSpotFullApiPathParamValue };
  "crm:fees:2026-03:delete-/crm/objects/2026-03/fees/{feeId}": { "feeId": HubSpotFullApiPathParamValue };
  "crm:fees:2026-03:patch-/crm/objects/2026-03/fees/{feeId}": { "feeId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiBasic06OperationRequestMap {
  "crm:tasks:2026-03:delete-/crm/objects/2026-03/tasks/{taskId}_archive": HubSpotFullApiOperationInput<"crm:tasks:2026-03:delete-/crm/objects/2026-03/tasks/{taskId}_archive">;
  "crm:tasks:2026-03:patch-/crm/objects/2026-03/tasks/{taskId}_update": HubSpotFullApiOperationInput<"crm:tasks:2026-03:patch-/crm/objects/2026-03/tasks/{taskId}_update">;
  "crm:tasks:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:tasks:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">;
  "crm:tasks:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:tasks:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">;
  "conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03_/conversations/custom-channels/v3": HubSpotFullApiOperationInput<"conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03_/conversations/custom-channels/v3">;
  "conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03_/conversations/custom-channels/v3": HubSpotFullApiOperationInput<"conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03_/conversations/custom-channels/v3">;
  "crm:notes:2026-03:get-/crm/objects/2026-03/notes_getPage": HubSpotFullApiOperationInput<"crm:notes:2026-03:get-/crm/objects/2026-03/notes_getPage">;
  "crm:notes:2026-03:post-/crm/objects/2026-03/notes_create": HubSpotFullApiOperationInput<"crm:notes:2026-03:post-/crm/objects/2026-03/notes_create">;
  "crm:notes:2026-03:get-/crm/objects/2026-03/notes/{noteId}_getById": HubSpotFullApiOperationInput<"crm:notes:2026-03:get-/crm/objects/2026-03/notes/{noteId}_getById">;
  "crm:notes:2026-03:delete-/crm/objects/2026-03/notes/{noteId}_archive": HubSpotFullApiOperationInput<"crm:notes:2026-03:delete-/crm/objects/2026-03/notes/{noteId}_archive">;
  "crm:notes:2026-03:patch-/crm/objects/2026-03/notes/{noteId}_update": HubSpotFullApiOperationInput<"crm:notes:2026-03:patch-/crm/objects/2026-03/notes/{noteId}_update">;
  "crm:notes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:notes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">;
  "crm:notes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:notes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">;
  "events:manage-event-definitions:2026-03:get-/events/2026-03/event-definitions": HubSpotFullApiOperationInput<"events:manage-event-definitions:2026-03:get-/events/2026-03/event-definitions">;
  "events:manage-event-definitions:2026-03:post-/events/2026-03/event-definitions": HubSpotFullApiOperationInput<"events:manage-event-definitions:2026-03:post-/events/2026-03/event-definitions">;
  "events:manage-event-definitions:2026-03:get-/events/2026-03/event-definitions/{eventName}": HubSpotFullApiOperationInput<"events:manage-event-definitions:2026-03:get-/events/2026-03/event-definitions/{eventName}">;
  "events:manage-event-definitions:2026-03:delete-/events/2026-03/event-definitions/{eventName}": HubSpotFullApiOperationInput<"events:manage-event-definitions:2026-03:delete-/events/2026-03/event-definitions/{eventName}">;
  "events:manage-event-definitions:2026-03:patch-/events/2026-03/event-definitions/{eventName}": HubSpotFullApiOperationInput<"events:manage-event-definitions:2026-03:patch-/events/2026-03/event-definitions/{eventName}">;
  "events:manage-event-definitions:2026-03:delete-/events/2026-03/event-definitions/{eventName}/property/{propertyName}": HubSpotFullApiOperationInput<"events:manage-event-definitions:2026-03:delete-/events/2026-03/event-definitions/{eventName}/property/{propertyName}">;
  "events:manage-event-definitions:2026-03:patch-/events/2026-03/event-definitions/{eventName}/property/{propertyName}": HubSpotFullApiOperationInput<"events:manage-event-definitions:2026-03:patch-/events/2026-03/event-definitions/{eventName}/property/{propertyName}">;
  "crm:users:2026-03:get-/crm/objects/2026-03/users": HubSpotFullApiOperationInput<"crm:users:2026-03:get-/crm/objects/2026-03/users">;
  "crm:users:2026-03:post-/crm/objects/2026-03/users": HubSpotFullApiOperationInput<"crm:users:2026-03:post-/crm/objects/2026-03/users">;
  "crm:users:2026-03:get-/crm/objects/2026-03/users/{userId}": HubSpotFullApiOperationInput<"crm:users:2026-03:get-/crm/objects/2026-03/users/{userId}">;
  "crm:users:2026-03:delete-/crm/objects/2026-03/users/{userId}": HubSpotFullApiOperationInput<"crm:users:2026-03:delete-/crm/objects/2026-03/users/{userId}">;
  "crm:users:2026-03:patch-/crm/objects/2026-03/users/{userId}": HubSpotFullApiOperationInput<"crm:users:2026-03:patch-/crm/objects/2026-03/users/{userId}">;
  "crm:users:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:users:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">;
  "crm:users:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:users:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">;
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03_/marketing/emails/v3": HubSpotFullApiOperationInput<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03_/marketing/emails/v3">;
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03_/marketing/emails/v3": HubSpotFullApiOperationInput<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03_/marketing/emails/v3">;
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/statistics/histogram_getHistogram": HubSpotFullApiOperationInput<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/statistics/histogram_getHistogram">;
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/statistics/list_getEmailsList": HubSpotFullApiOperationInput<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/statistics/list_getEmailsList">;
  "crm:quotes:2026-03:get-/crm/objects/2026-03/quotes_getPage": HubSpotFullApiOperationInput<"crm:quotes:2026-03:get-/crm/objects/2026-03/quotes_getPage">;
  "crm:quotes:2026-03:post-/crm/objects/2026-03/quotes_create": HubSpotFullApiOperationInput<"crm:quotes:2026-03:post-/crm/objects/2026-03/quotes_create">;
  "crm:quotes:2026-03:get-/crm/objects/2026-03/quotes/{quoteId}_getById": HubSpotFullApiOperationInput<"crm:quotes:2026-03:get-/crm/objects/2026-03/quotes/{quoteId}_getById">;
  "crm:quotes:2026-03:delete-/crm/objects/2026-03/quotes/{quoteId}_archive": HubSpotFullApiOperationInput<"crm:quotes:2026-03:delete-/crm/objects/2026-03/quotes/{quoteId}_archive">;
  "crm:quotes:2026-03:patch-/crm/objects/2026-03/quotes/{quoteId}_update": HubSpotFullApiOperationInput<"crm:quotes:2026-03:patch-/crm/objects/2026-03/quotes/{quoteId}_update">;
  "crm:quotes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:quotes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">;
  "crm:quotes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:quotes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">;
  "crm:carts:2026-03:get-/crm/objects/2026-03/carts": HubSpotFullApiOperationInput<"crm:carts:2026-03:get-/crm/objects/2026-03/carts">;
  "crm:carts:2026-03:post-/crm/objects/2026-03/carts": HubSpotFullApiOperationInput<"crm:carts:2026-03:post-/crm/objects/2026-03/carts">;
  "crm:carts:2026-03:get-/crm/objects/2026-03/carts/{cartId}": HubSpotFullApiOperationInput<"crm:carts:2026-03:get-/crm/objects/2026-03/carts/{cartId}">;
  "crm:carts:2026-03:delete-/crm/objects/2026-03/carts/{cartId}": HubSpotFullApiOperationInput<"crm:carts:2026-03:delete-/crm/objects/2026-03/carts/{cartId}">;
  "crm:carts:2026-03:patch-/crm/objects/2026-03/carts/{cartId}": HubSpotFullApiOperationInput<"crm:carts:2026-03:patch-/crm/objects/2026-03/carts/{cartId}">;
  "crm:carts:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:carts:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">;
  "crm:carts:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:carts:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">;
  "events:send-event-completions:2026-03:post-/events/2026-03/send_send": HubSpotFullApiOperationInput<"events:send-event-completions:2026-03:post-/events/2026-03/send_send">;
  "crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}_getAll": HubSpotFullApiOperationInput<"crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}_getAll">;
  "crm:pipelines:2026-03:post-/crm/pipelines/2026-03/{objectType}_create": HubSpotFullApiOperationInput<"crm:pipelines:2026-03:post-/crm/pipelines/2026-03/{objectType}_create">;
  "crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}_getById": HubSpotFullApiOperationInput<"crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}_getById">;
  "crm:pipelines:2026-03:put-/crm/pipelines/2026-03/{objectType}/{pipelineId}_replace": HubSpotFullApiOperationInput<"crm:pipelines:2026-03:put-/crm/pipelines/2026-03/{objectType}/{pipelineId}_replace">;
  "crm:pipelines:2026-03:delete-/crm/pipelines/2026-03/{objectType}/{pipelineId}_archive": HubSpotFullApiOperationInput<"crm:pipelines:2026-03:delete-/crm/pipelines/2026-03/{objectType}/{pipelineId}_archive">;
  "crm:pipelines:2026-03:patch-/crm/pipelines/2026-03/{objectType}/{pipelineId}_update": HubSpotFullApiOperationInput<"crm:pipelines:2026-03:patch-/crm/pipelines/2026-03/{objectType}/{pipelineId}_update">;
  "crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/audit_getAudit": HubSpotFullApiOperationInput<"crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/audit_getAudit">;
  "crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages_getAll": HubSpotFullApiOperationInput<"crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages_getAll">;
  "crm:pipelines:2026-03:post-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages_create": HubSpotFullApiOperationInput<"crm:pipelines:2026-03:post-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages_create">;
  "crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_getById": HubSpotFullApiOperationInput<"crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_getById">;
  "crm:pipelines:2026-03:put-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_replace": HubSpotFullApiOperationInput<"crm:pipelines:2026-03:put-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_replace">;
  "crm:pipelines:2026-03:delete-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_archive": HubSpotFullApiOperationInput<"crm:pipelines:2026-03:delete-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_archive">;
  "crm:pipelines:2026-03:patch-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_update": HubSpotFullApiOperationInput<"crm:pipelines:2026-03:patch-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_update">;
  "crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}/audit_getAudit": HubSpotFullApiOperationInput<"crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}/audit_getAudit">;
  "scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links": HubSpotFullApiOperationInput<"scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links">;
  "scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links/book/availability-page/{slug}": HubSpotFullApiOperationInput<"scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links/book/availability-page/{slug}">;
  "scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links/book/{slug}": HubSpotFullApiOperationInput<"scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links/book/{slug}">;
  "crm:objects:2026-03:get-/crm/objects/2026-03/{objectType}_/crm/objects/2025-09/{objectType}": HubSpotFullApiOperationInput<"crm:objects:2026-03:get-/crm/objects/2026-03/{objectType}_/crm/objects/2025-09/{objectType}">;
  "crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}_/crm/objects/2025-09/{objectType}": HubSpotFullApiOperationInput<"crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}_/crm/objects/2025-09/{objectType}">;
  "crm:objects:2026-03:get-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}": HubSpotFullApiOperationInput<"crm:objects:2026-03:get-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}">;
  "crm:objects:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}": HubSpotFullApiOperationInput<"crm:objects:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}">;
  "crm:objects:2026-03:patch-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}": HubSpotFullApiOperationInput<"crm:objects:2026-03:patch-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}">;
  "crm:courses:2026-03:get-/crm/objects/2026-03/0-410": HubSpotFullApiOperationInput<"crm:courses:2026-03:get-/crm/objects/2026-03/0-410">;
  "crm:courses:2026-03:post-/crm/objects/2026-03/0-410": HubSpotFullApiOperationInput<"crm:courses:2026-03:post-/crm/objects/2026-03/0-410">;
  "crm:courses:2026-03:get-/crm/objects/2026-03/0-410/{courseId}": HubSpotFullApiOperationInput<"crm:courses:2026-03:get-/crm/objects/2026-03/0-410/{courseId}">;
  "crm:courses:2026-03:delete-/crm/objects/2026-03/0-410/{courseId}": HubSpotFullApiOperationInput<"crm:courses:2026-03:delete-/crm/objects/2026-03/0-410/{courseId}">;
  "crm:courses:2026-03:patch-/crm/objects/2026-03/0-410/{courseId}": HubSpotFullApiOperationInput<"crm:courses:2026-03:patch-/crm/objects/2026-03/0-410/{courseId}">;
  "crm:courses:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:courses:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">;
  "crm:courses:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:courses:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">;
  "crm:fees:2026-03:get-/crm/objects/2026-03/fees": HubSpotFullApiOperationInput<"crm:fees:2026-03:get-/crm/objects/2026-03/fees">;
  "crm:fees:2026-03:post-/crm/objects/2026-03/fees": HubSpotFullApiOperationInput<"crm:fees:2026-03:post-/crm/objects/2026-03/fees">;
  "crm:fees:2026-03:get-/crm/objects/2026-03/fees/{feeId}": HubSpotFullApiOperationInput<"crm:fees:2026-03:get-/crm/objects/2026-03/fees/{feeId}">;
  "crm:fees:2026-03:delete-/crm/objects/2026-03/fees/{feeId}": HubSpotFullApiOperationInput<"crm:fees:2026-03:delete-/crm/objects/2026-03/fees/{feeId}">;
  "crm:fees:2026-03:patch-/crm/objects/2026-03/fees/{feeId}": HubSpotFullApiOperationInput<"crm:fees:2026-03:patch-/crm/objects/2026-03/fees/{feeId}">;
}

export interface HubSpotFullApiBasic06GeneratedClient {
  TasksDeleteCrmObjects202603TasksTaskIdArchive(...args: HubSpotFullApiOperationArgs<"crm:tasks:2026-03:delete-/crm/objects/2026-03/tasks/{taskId}_archive">): Promise<HubSpotFullApiOperationResponseMap["crm:tasks:2026-03:delete-/crm/objects/2026-03/tasks/{taskId}_archive"]>;
  TasksPatchCrmObjects202603TasksTaskIdUpdate(...args: HubSpotFullApiOperationArgs<"crm:tasks:2026-03:patch-/crm/objects/2026-03/tasks/{taskId}_update">): Promise<HubSpotFullApiOperationResponseMap["crm:tasks:2026-03:patch-/crm/objects/2026-03/tasks/{taskId}_update"]>;
  TasksPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:tasks:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:tasks:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"]>;
  TasksDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:tasks:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:tasks:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"]>;
  CustomChannelsGetConversationsCustomChannels202603ConversationsCustomChannelsV3(...args: HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03_/conversations/custom-channels/v3">): Promise<HubSpotFullApiOperationResponseMap["conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03_/conversations/custom-channels/v3"]>;
  CustomChannelsPostConversationsCustomChannels202603ConversationsCustomChannelsV3(...args: HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03_/conversations/custom-channels/v3">): Promise<HubSpotFullApiOperationResponseMap["conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03_/conversations/custom-channels/v3"]>;
  NotesGetCrmObjects202603NotesGetPage(...args: HubSpotFullApiOperationArgs<"crm:notes:2026-03:get-/crm/objects/2026-03/notes_getPage">): Promise<HubSpotFullApiOperationResponseMap["crm:notes:2026-03:get-/crm/objects/2026-03/notes_getPage"]>;
  NotesPostCrmObjects202603NotesCreate(...args: HubSpotFullApiOperationArgs<"crm:notes:2026-03:post-/crm/objects/2026-03/notes_create">): Promise<HubSpotFullApiOperationResponseMap["crm:notes:2026-03:post-/crm/objects/2026-03/notes_create"]>;
  NotesGetCrmObjects202603NotesNoteIdGetById(...args: HubSpotFullApiOperationArgs<"crm:notes:2026-03:get-/crm/objects/2026-03/notes/{noteId}_getById">): Promise<HubSpotFullApiOperationResponseMap["crm:notes:2026-03:get-/crm/objects/2026-03/notes/{noteId}_getById"]>;
  NotesDeleteCrmObjects202603NotesNoteIdArchive(...args: HubSpotFullApiOperationArgs<"crm:notes:2026-03:delete-/crm/objects/2026-03/notes/{noteId}_archive">): Promise<HubSpotFullApiOperationResponseMap["crm:notes:2026-03:delete-/crm/objects/2026-03/notes/{noteId}_archive"]>;
  NotesPatchCrmObjects202603NotesNoteIdUpdate(...args: HubSpotFullApiOperationArgs<"crm:notes:2026-03:patch-/crm/objects/2026-03/notes/{noteId}_update">): Promise<HubSpotFullApiOperationResponseMap["crm:notes:2026-03:patch-/crm/objects/2026-03/notes/{noteId}_update"]>;
  NotesPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:notes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:notes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"]>;
  NotesDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:notes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:notes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"]>;
  ManageEventDefinitionsGetEvents202603EventDefinitions(...args: HubSpotFullApiOperationArgs<"events:manage-event-definitions:2026-03:get-/events/2026-03/event-definitions">): Promise<HubSpotFullApiOperationResponseMap["events:manage-event-definitions:2026-03:get-/events/2026-03/event-definitions"]>;
  ManageEventDefinitionsPostEvents202603EventDefinitions(...args: HubSpotFullApiOperationArgs<"events:manage-event-definitions:2026-03:post-/events/2026-03/event-definitions">): Promise<HubSpotFullApiOperationResponseMap["events:manage-event-definitions:2026-03:post-/events/2026-03/event-definitions"]>;
  ManageEventDefinitionsGetEvents202603EventDefinitionsEventName(...args: HubSpotFullApiOperationArgs<"events:manage-event-definitions:2026-03:get-/events/2026-03/event-definitions/{eventName}">): Promise<HubSpotFullApiOperationResponseMap["events:manage-event-definitions:2026-03:get-/events/2026-03/event-definitions/{eventName}"]>;
  ManageEventDefinitionsDeleteEvents202603EventDefinitionsEventName(...args: HubSpotFullApiOperationArgs<"events:manage-event-definitions:2026-03:delete-/events/2026-03/event-definitions/{eventName}">): Promise<HubSpotFullApiOperationResponseMap["events:manage-event-definitions:2026-03:delete-/events/2026-03/event-definitions/{eventName}"]>;
  ManageEventDefinitionsPatchEvents202603EventDefinitionsEventName(...args: HubSpotFullApiOperationArgs<"events:manage-event-definitions:2026-03:patch-/events/2026-03/event-definitions/{eventName}">): Promise<HubSpotFullApiOperationResponseMap["events:manage-event-definitions:2026-03:patch-/events/2026-03/event-definitions/{eventName}"]>;
  ManageEventDefinitionsDeleteEvents202603EventDefinitionsEventNamePropertyPropertyName(...args: HubSpotFullApiOperationArgs<"events:manage-event-definitions:2026-03:delete-/events/2026-03/event-definitions/{eventName}/property/{propertyName}">): Promise<HubSpotFullApiOperationResponseMap["events:manage-event-definitions:2026-03:delete-/events/2026-03/event-definitions/{eventName}/property/{propertyName}"]>;
  ManageEventDefinitionsPatchEvents202603EventDefinitionsEventNamePropertyPropertyName(...args: HubSpotFullApiOperationArgs<"events:manage-event-definitions:2026-03:patch-/events/2026-03/event-definitions/{eventName}/property/{propertyName}">): Promise<HubSpotFullApiOperationResponseMap["events:manage-event-definitions:2026-03:patch-/events/2026-03/event-definitions/{eventName}/property/{propertyName}"]>;
  UsersGetCrmObjects202603Users(...args: HubSpotFullApiOperationArgs<"crm:users:2026-03:get-/crm/objects/2026-03/users">): Promise<HubSpotFullApiOperationResponseMap["crm:users:2026-03:get-/crm/objects/2026-03/users"]>;
  UsersPostCrmObjects202603Users(...args: HubSpotFullApiOperationArgs<"crm:users:2026-03:post-/crm/objects/2026-03/users">): Promise<HubSpotFullApiOperationResponseMap["crm:users:2026-03:post-/crm/objects/2026-03/users"]>;
  UsersGetCrmObjects202603UsersUserId(...args: HubSpotFullApiOperationArgs<"crm:users:2026-03:get-/crm/objects/2026-03/users/{userId}">): Promise<HubSpotFullApiOperationResponseMap["crm:users:2026-03:get-/crm/objects/2026-03/users/{userId}"]>;
  UsersDeleteCrmObjects202603UsersUserId(...args: HubSpotFullApiOperationArgs<"crm:users:2026-03:delete-/crm/objects/2026-03/users/{userId}">): Promise<HubSpotFullApiOperationResponseMap["crm:users:2026-03:delete-/crm/objects/2026-03/users/{userId}"]>;
  UsersPatchCrmObjects202603UsersUserId(...args: HubSpotFullApiOperationArgs<"crm:users:2026-03:patch-/crm/objects/2026-03/users/{userId}">): Promise<HubSpotFullApiOperationResponseMap["crm:users:2026-03:patch-/crm/objects/2026-03/users/{userId}"]>;
  UsersPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:users:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:users:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"]>;
  UsersDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:users:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:users:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"]>;
  MarketingEmailsGetMarketingEmails202603MarketingEmailsV3(...args: HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03_/marketing/emails/v3">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03_/marketing/emails/v3"]>;
  MarketingEmailsPostMarketingEmails202603MarketingEmailsV3(...args: HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03_/marketing/emails/v3">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03_/marketing/emails/v3"]>;
  MarketingEmailsGetMarketingEmails202603StatisticsHistogramGetHistogram(...args: HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/statistics/histogram_getHistogram">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/statistics/histogram_getHistogram"]>;
  MarketingEmailsGetMarketingEmails202603StatisticsListGetEmailsList(...args: HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/statistics/list_getEmailsList">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/statistics/list_getEmailsList"]>;
  QuotesGetCrmObjects202603QuotesGetPage(...args: HubSpotFullApiOperationArgs<"crm:quotes:2026-03:get-/crm/objects/2026-03/quotes_getPage">): Promise<HubSpotFullApiOperationResponseMap["crm:quotes:2026-03:get-/crm/objects/2026-03/quotes_getPage"]>;
  QuotesPostCrmObjects202603QuotesCreate(...args: HubSpotFullApiOperationArgs<"crm:quotes:2026-03:post-/crm/objects/2026-03/quotes_create">): Promise<HubSpotFullApiOperationResponseMap["crm:quotes:2026-03:post-/crm/objects/2026-03/quotes_create"]>;
  QuotesGetCrmObjects202603QuotesQuoteIdGetById(...args: HubSpotFullApiOperationArgs<"crm:quotes:2026-03:get-/crm/objects/2026-03/quotes/{quoteId}_getById">): Promise<HubSpotFullApiOperationResponseMap["crm:quotes:2026-03:get-/crm/objects/2026-03/quotes/{quoteId}_getById"]>;
  QuotesDeleteCrmObjects202603QuotesQuoteIdArchive(...args: HubSpotFullApiOperationArgs<"crm:quotes:2026-03:delete-/crm/objects/2026-03/quotes/{quoteId}_archive">): Promise<HubSpotFullApiOperationResponseMap["crm:quotes:2026-03:delete-/crm/objects/2026-03/quotes/{quoteId}_archive"]>;
  QuotesPatchCrmObjects202603QuotesQuoteIdUpdate(...args: HubSpotFullApiOperationArgs<"crm:quotes:2026-03:patch-/crm/objects/2026-03/quotes/{quoteId}_update">): Promise<HubSpotFullApiOperationResponseMap["crm:quotes:2026-03:patch-/crm/objects/2026-03/quotes/{quoteId}_update"]>;
  QuotesPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:quotes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:quotes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"]>;
  QuotesDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:quotes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:quotes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"]>;
  CartsGetCrmObjects202603Carts(...args: HubSpotFullApiOperationArgs<"crm:carts:2026-03:get-/crm/objects/2026-03/carts">): Promise<HubSpotFullApiOperationResponseMap["crm:carts:2026-03:get-/crm/objects/2026-03/carts"]>;
  CartsPostCrmObjects202603Carts(...args: HubSpotFullApiOperationArgs<"crm:carts:2026-03:post-/crm/objects/2026-03/carts">): Promise<HubSpotFullApiOperationResponseMap["crm:carts:2026-03:post-/crm/objects/2026-03/carts"]>;
  CartsGetCrmObjects202603CartsCartId(...args: HubSpotFullApiOperationArgs<"crm:carts:2026-03:get-/crm/objects/2026-03/carts/{cartId}">): Promise<HubSpotFullApiOperationResponseMap["crm:carts:2026-03:get-/crm/objects/2026-03/carts/{cartId}"]>;
  CartsDeleteCrmObjects202603CartsCartId(...args: HubSpotFullApiOperationArgs<"crm:carts:2026-03:delete-/crm/objects/2026-03/carts/{cartId}">): Promise<HubSpotFullApiOperationResponseMap["crm:carts:2026-03:delete-/crm/objects/2026-03/carts/{cartId}"]>;
  CartsPatchCrmObjects202603CartsCartId(...args: HubSpotFullApiOperationArgs<"crm:carts:2026-03:patch-/crm/objects/2026-03/carts/{cartId}">): Promise<HubSpotFullApiOperationResponseMap["crm:carts:2026-03:patch-/crm/objects/2026-03/carts/{cartId}"]>;
  CartsPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:carts:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:carts:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"]>;
  CartsDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:carts:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:carts:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"]>;
  SendEventCompletionsPostEvents202603SendSend(...args: HubSpotFullApiOperationArgs<"events:send-event-completions:2026-03:post-/events/2026-03/send_send">): Promise<HubSpotFullApiOperationResponseMap["events:send-event-completions:2026-03:post-/events/2026-03/send_send"]>;
  PipelinesGetCrmPipelines202603ObjectTypeGetAll(...args: HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}_getAll">): Promise<HubSpotFullApiOperationResponseMap["crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}_getAll"]>;
  PipelinesPostCrmPipelines202603ObjectTypeCreate(...args: HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:post-/crm/pipelines/2026-03/{objectType}_create">): Promise<HubSpotFullApiOperationResponseMap["crm:pipelines:2026-03:post-/crm/pipelines/2026-03/{objectType}_create"]>;
  PipelinesGetCrmPipelines202603ObjectTypePipelineIdGetById(...args: HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}_getById">): Promise<HubSpotFullApiOperationResponseMap["crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}_getById"]>;
  PipelinesPutCrmPipelines202603ObjectTypePipelineIdReplace(...args: HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:put-/crm/pipelines/2026-03/{objectType}/{pipelineId}_replace">): Promise<HubSpotFullApiOperationResponseMap["crm:pipelines:2026-03:put-/crm/pipelines/2026-03/{objectType}/{pipelineId}_replace"]>;
  PipelinesDeleteCrmPipelines202603ObjectTypePipelineIdArchive(...args: HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:delete-/crm/pipelines/2026-03/{objectType}/{pipelineId}_archive">): Promise<HubSpotFullApiOperationResponseMap["crm:pipelines:2026-03:delete-/crm/pipelines/2026-03/{objectType}/{pipelineId}_archive"]>;
  PipelinesPatchCrmPipelines202603ObjectTypePipelineIdUpdate(...args: HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:patch-/crm/pipelines/2026-03/{objectType}/{pipelineId}_update">): Promise<HubSpotFullApiOperationResponseMap["crm:pipelines:2026-03:patch-/crm/pipelines/2026-03/{objectType}/{pipelineId}_update"]>;
  PipelinesGetCrmPipelines202603ObjectTypePipelineIdAuditGetAudit(...args: HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/audit_getAudit">): Promise<HubSpotFullApiOperationResponseMap["crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/audit_getAudit"]>;
  PipelinesGetCrmPipelines202603ObjectTypePipelineIdStagesGetAll(...args: HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages_getAll">): Promise<HubSpotFullApiOperationResponseMap["crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages_getAll"]>;
  PipelinesPostCrmPipelines202603ObjectTypePipelineIdStagesCreate(...args: HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:post-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages_create">): Promise<HubSpotFullApiOperationResponseMap["crm:pipelines:2026-03:post-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages_create"]>;
  PipelinesGetCrmPipelines202603ObjectTypePipelineIdStagesStageIdGetById(...args: HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_getById">): Promise<HubSpotFullApiOperationResponseMap["crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_getById"]>;
  PipelinesPutCrmPipelines202603ObjectTypePipelineIdStagesStageIdReplace(...args: HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:put-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_replace">): Promise<HubSpotFullApiOperationResponseMap["crm:pipelines:2026-03:put-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_replace"]>;
  PipelinesDeleteCrmPipelines202603ObjectTypePipelineIdStagesStageIdArchive(...args: HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:delete-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_archive">): Promise<HubSpotFullApiOperationResponseMap["crm:pipelines:2026-03:delete-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_archive"]>;
  PipelinesPatchCrmPipelines202603ObjectTypePipelineIdStagesStageIdUpdate(...args: HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:patch-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_update">): Promise<HubSpotFullApiOperationResponseMap["crm:pipelines:2026-03:patch-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_update"]>;
  PipelinesGetCrmPipelines202603ObjectTypePipelineIdStagesStageIdAuditGetAudit(...args: HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}/audit_getAudit">): Promise<HubSpotFullApiOperationResponseMap["crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}/audit_getAudit"]>;
  MeetingsGetScheduler202603MeetingsMeetingLinks(...args: HubSpotFullApiOperationArgs<"scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links">): Promise<HubSpotFullApiOperationResponseMap["scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links"]>;
  MeetingsGetScheduler202603MeetingsMeetingLinksBookAvailabilityPageSlug(...args: HubSpotFullApiOperationArgs<"scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links/book/availability-page/{slug}">): Promise<HubSpotFullApiOperationResponseMap["scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links/book/availability-page/{slug}"]>;
  MeetingsGetScheduler202603MeetingsMeetingLinksBookSlug(...args: HubSpotFullApiOperationArgs<"scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links/book/{slug}">): Promise<HubSpotFullApiOperationResponseMap["scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links/book/{slug}"]>;
  ObjectsGetCrmObjects202603ObjectTypeCrmObjects202509ObjectType(...args: HubSpotFullApiOperationArgs<"crm:objects:2026-03:get-/crm/objects/2026-03/{objectType}_/crm/objects/2025-09/{objectType}">): Promise<HubSpotFullApiOperationResponseMap["crm:objects:2026-03:get-/crm/objects/2026-03/{objectType}_/crm/objects/2025-09/{objectType}"]>;
  ObjectsPostCrmObjects202603ObjectTypeCrmObjects202509ObjectType(...args: HubSpotFullApiOperationArgs<"crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}_/crm/objects/2025-09/{objectType}">): Promise<HubSpotFullApiOperationResponseMap["crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}_/crm/objects/2025-09/{objectType}"]>;
  ObjectsGetCrmObjects202603ObjectTypeObjectIdCrmObjects202509ObjectTypeObjectId(...args: HubSpotFullApiOperationArgs<"crm:objects:2026-03:get-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:objects:2026-03:get-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}"]>;
  ObjectsDeleteCrmObjects202603ObjectTypeObjectIdCrmObjects202509ObjectTypeObjectId(...args: HubSpotFullApiOperationArgs<"crm:objects:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:objects:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}"]>;
  ObjectsPatchCrmObjects202603ObjectTypeObjectIdCrmObjects202509ObjectTypeObjectId(...args: HubSpotFullApiOperationArgs<"crm:objects:2026-03:patch-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:objects:2026-03:patch-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}"]>;
  CoursesGetCrmObjects2026030410(...args: HubSpotFullApiOperationArgs<"crm:courses:2026-03:get-/crm/objects/2026-03/0-410">): Promise<HubSpotFullApiOperationResponseMap["crm:courses:2026-03:get-/crm/objects/2026-03/0-410"]>;
  CoursesPostCrmObjects2026030410(...args: HubSpotFullApiOperationArgs<"crm:courses:2026-03:post-/crm/objects/2026-03/0-410">): Promise<HubSpotFullApiOperationResponseMap["crm:courses:2026-03:post-/crm/objects/2026-03/0-410"]>;
  CoursesGetCrmObjects2026030410CourseId(...args: HubSpotFullApiOperationArgs<"crm:courses:2026-03:get-/crm/objects/2026-03/0-410/{courseId}">): Promise<HubSpotFullApiOperationResponseMap["crm:courses:2026-03:get-/crm/objects/2026-03/0-410/{courseId}"]>;
  CoursesDeleteCrmObjects2026030410CourseId(...args: HubSpotFullApiOperationArgs<"crm:courses:2026-03:delete-/crm/objects/2026-03/0-410/{courseId}">): Promise<HubSpotFullApiOperationResponseMap["crm:courses:2026-03:delete-/crm/objects/2026-03/0-410/{courseId}"]>;
  CoursesPatchCrmObjects2026030410CourseId(...args: HubSpotFullApiOperationArgs<"crm:courses:2026-03:patch-/crm/objects/2026-03/0-410/{courseId}">): Promise<HubSpotFullApiOperationResponseMap["crm:courses:2026-03:patch-/crm/objects/2026-03/0-410/{courseId}"]>;
  CoursesPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:courses:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:courses:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"]>;
  CoursesDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:courses:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:courses:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"]>;
  FeesGetCrmObjects202603Fees(...args: HubSpotFullApiOperationArgs<"crm:fees:2026-03:get-/crm/objects/2026-03/fees">): Promise<HubSpotFullApiOperationResponseMap["crm:fees:2026-03:get-/crm/objects/2026-03/fees"]>;
  FeesPostCrmObjects202603Fees(...args: HubSpotFullApiOperationArgs<"crm:fees:2026-03:post-/crm/objects/2026-03/fees">): Promise<HubSpotFullApiOperationResponseMap["crm:fees:2026-03:post-/crm/objects/2026-03/fees"]>;
  FeesGetCrmObjects202603FeesFeeId(...args: HubSpotFullApiOperationArgs<"crm:fees:2026-03:get-/crm/objects/2026-03/fees/{feeId}">): Promise<HubSpotFullApiOperationResponseMap["crm:fees:2026-03:get-/crm/objects/2026-03/fees/{feeId}"]>;
  FeesDeleteCrmObjects202603FeesFeeId(...args: HubSpotFullApiOperationArgs<"crm:fees:2026-03:delete-/crm/objects/2026-03/fees/{feeId}">): Promise<HubSpotFullApiOperationResponseMap["crm:fees:2026-03:delete-/crm/objects/2026-03/fees/{feeId}"]>;
  FeesPatchCrmObjects202603FeesFeeId(...args: HubSpotFullApiOperationArgs<"crm:fees:2026-03:patch-/crm/objects/2026-03/fees/{feeId}">): Promise<HubSpotFullApiOperationResponseMap["crm:fees:2026-03:patch-/crm/objects/2026-03/fees/{feeId}"]>;
}

export const HubSpotFullApiBasic06GeneratedFunctionNames = [
  "TasksDeleteCrmObjects202603TasksTaskIdArchive",
  "TasksPatchCrmObjects202603TasksTaskIdUpdate",
  "TasksPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId",
  "TasksDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId",
  "CustomChannelsGetConversationsCustomChannels202603ConversationsCustomChannelsV3",
  "CustomChannelsPostConversationsCustomChannels202603ConversationsCustomChannelsV3",
  "NotesGetCrmObjects202603NotesGetPage",
  "NotesPostCrmObjects202603NotesCreate",
  "NotesGetCrmObjects202603NotesNoteIdGetById",
  "NotesDeleteCrmObjects202603NotesNoteIdArchive",
  "NotesPatchCrmObjects202603NotesNoteIdUpdate",
  "NotesPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId",
  "NotesDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId",
  "ManageEventDefinitionsGetEvents202603EventDefinitions",
  "ManageEventDefinitionsPostEvents202603EventDefinitions",
  "ManageEventDefinitionsGetEvents202603EventDefinitionsEventName",
  "ManageEventDefinitionsDeleteEvents202603EventDefinitionsEventName",
  "ManageEventDefinitionsPatchEvents202603EventDefinitionsEventName",
  "ManageEventDefinitionsDeleteEvents202603EventDefinitionsEventNamePropertyPropertyName",
  "ManageEventDefinitionsPatchEvents202603EventDefinitionsEventNamePropertyPropertyName",
  "UsersGetCrmObjects202603Users",
  "UsersPostCrmObjects202603Users",
  "UsersGetCrmObjects202603UsersUserId",
  "UsersDeleteCrmObjects202603UsersUserId",
  "UsersPatchCrmObjects202603UsersUserId",
  "UsersPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId",
  "UsersDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId",
  "MarketingEmailsGetMarketingEmails202603MarketingEmailsV3",
  "MarketingEmailsPostMarketingEmails202603MarketingEmailsV3",
  "MarketingEmailsGetMarketingEmails202603StatisticsHistogramGetHistogram",
  "MarketingEmailsGetMarketingEmails202603StatisticsListGetEmailsList",
  "QuotesGetCrmObjects202603QuotesGetPage",
  "QuotesPostCrmObjects202603QuotesCreate",
  "QuotesGetCrmObjects202603QuotesQuoteIdGetById",
  "QuotesDeleteCrmObjects202603QuotesQuoteIdArchive",
  "QuotesPatchCrmObjects202603QuotesQuoteIdUpdate",
  "QuotesPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId",
  "QuotesDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId",
  "CartsGetCrmObjects202603Carts",
  "CartsPostCrmObjects202603Carts",
  "CartsGetCrmObjects202603CartsCartId",
  "CartsDeleteCrmObjects202603CartsCartId",
  "CartsPatchCrmObjects202603CartsCartId",
  "CartsPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId",
  "CartsDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId",
  "SendEventCompletionsPostEvents202603SendSend",
  "PipelinesGetCrmPipelines202603ObjectTypeGetAll",
  "PipelinesPostCrmPipelines202603ObjectTypeCreate",
  "PipelinesGetCrmPipelines202603ObjectTypePipelineIdGetById",
  "PipelinesPutCrmPipelines202603ObjectTypePipelineIdReplace",
  "PipelinesDeleteCrmPipelines202603ObjectTypePipelineIdArchive",
  "PipelinesPatchCrmPipelines202603ObjectTypePipelineIdUpdate",
  "PipelinesGetCrmPipelines202603ObjectTypePipelineIdAuditGetAudit",
  "PipelinesGetCrmPipelines202603ObjectTypePipelineIdStagesGetAll",
  "PipelinesPostCrmPipelines202603ObjectTypePipelineIdStagesCreate",
  "PipelinesGetCrmPipelines202603ObjectTypePipelineIdStagesStageIdGetById",
  "PipelinesPutCrmPipelines202603ObjectTypePipelineIdStagesStageIdReplace",
  "PipelinesDeleteCrmPipelines202603ObjectTypePipelineIdStagesStageIdArchive",
  "PipelinesPatchCrmPipelines202603ObjectTypePipelineIdStagesStageIdUpdate",
  "PipelinesGetCrmPipelines202603ObjectTypePipelineIdStagesStageIdAuditGetAudit",
  "MeetingsGetScheduler202603MeetingsMeetingLinks",
  "MeetingsGetScheduler202603MeetingsMeetingLinksBookAvailabilityPageSlug",
  "MeetingsGetScheduler202603MeetingsMeetingLinksBookSlug",
  "ObjectsGetCrmObjects202603ObjectTypeCrmObjects202509ObjectType",
  "ObjectsPostCrmObjects202603ObjectTypeCrmObjects202509ObjectType",
  "ObjectsGetCrmObjects202603ObjectTypeObjectIdCrmObjects202509ObjectTypeObjectId",
  "ObjectsDeleteCrmObjects202603ObjectTypeObjectIdCrmObjects202509ObjectTypeObjectId",
  "ObjectsPatchCrmObjects202603ObjectTypeObjectIdCrmObjects202509ObjectTypeObjectId",
  "CoursesGetCrmObjects2026030410",
  "CoursesPostCrmObjects2026030410",
  "CoursesGetCrmObjects2026030410CourseId",
  "CoursesDeleteCrmObjects2026030410CourseId",
  "CoursesPatchCrmObjects2026030410CourseId",
  "CoursesPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId",
  "CoursesDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId",
  "FeesGetCrmObjects202603Fees",
  "FeesPostCrmObjects202603Fees",
  "FeesGetCrmObjects202603FeesFeeId",
  "FeesDeleteCrmObjects202603FeesFeeId",
  "FeesPatchCrmObjects202603FeesFeeId"
] as const satisfies readonly (keyof HubSpotFullApiBasic06GeneratedClient)[];

export function createHubSpotFullApiBasic06GeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiBasic06GeneratedClient {
  return {
    TasksDeleteCrmObjects202603TasksTaskIdArchive: (...args) => callOperation("crm:tasks:2026-03:delete-/crm/objects/2026-03/tasks/{taskId}_archive", ...(args as HubSpotFullApiOperationArgs<"crm:tasks:2026-03:delete-/crm/objects/2026-03/tasks/{taskId}_archive">)),
    TasksPatchCrmObjects202603TasksTaskIdUpdate: (...args) => callOperation("crm:tasks:2026-03:patch-/crm/objects/2026-03/tasks/{taskId}_update", ...(args as HubSpotFullApiOperationArgs<"crm:tasks:2026-03:patch-/crm/objects/2026-03/tasks/{taskId}_update">)),
    TasksPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId: (...args) => callOperation("crm:tasks:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:tasks:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">)),
    TasksDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId: (...args) => callOperation("crm:tasks:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:tasks:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">)),
    CustomChannelsGetConversationsCustomChannels202603ConversationsCustomChannelsV3: (...args) => callOperation("conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03_/conversations/custom-channels/v3", ...(args as HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03_/conversations/custom-channels/v3">)),
    CustomChannelsPostConversationsCustomChannels202603ConversationsCustomChannelsV3: (...args) => callOperation("conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03_/conversations/custom-channels/v3", ...(args as HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03_/conversations/custom-channels/v3">)),
    NotesGetCrmObjects202603NotesGetPage: (...args) => callOperation("crm:notes:2026-03:get-/crm/objects/2026-03/notes_getPage", ...(args as HubSpotFullApiOperationArgs<"crm:notes:2026-03:get-/crm/objects/2026-03/notes_getPage">)),
    NotesPostCrmObjects202603NotesCreate: (...args) => callOperation("crm:notes:2026-03:post-/crm/objects/2026-03/notes_create", ...(args as HubSpotFullApiOperationArgs<"crm:notes:2026-03:post-/crm/objects/2026-03/notes_create">)),
    NotesGetCrmObjects202603NotesNoteIdGetById: (...args) => callOperation("crm:notes:2026-03:get-/crm/objects/2026-03/notes/{noteId}_getById", ...(args as HubSpotFullApiOperationArgs<"crm:notes:2026-03:get-/crm/objects/2026-03/notes/{noteId}_getById">)),
    NotesDeleteCrmObjects202603NotesNoteIdArchive: (...args) => callOperation("crm:notes:2026-03:delete-/crm/objects/2026-03/notes/{noteId}_archive", ...(args as HubSpotFullApiOperationArgs<"crm:notes:2026-03:delete-/crm/objects/2026-03/notes/{noteId}_archive">)),
    NotesPatchCrmObjects202603NotesNoteIdUpdate: (...args) => callOperation("crm:notes:2026-03:patch-/crm/objects/2026-03/notes/{noteId}_update", ...(args as HubSpotFullApiOperationArgs<"crm:notes:2026-03:patch-/crm/objects/2026-03/notes/{noteId}_update">)),
    NotesPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId: (...args) => callOperation("crm:notes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:notes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">)),
    NotesDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId: (...args) => callOperation("crm:notes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:notes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">)),
    ManageEventDefinitionsGetEvents202603EventDefinitions: (...args) => callOperation("events:manage-event-definitions:2026-03:get-/events/2026-03/event-definitions", ...(args as HubSpotFullApiOperationArgs<"events:manage-event-definitions:2026-03:get-/events/2026-03/event-definitions">)),
    ManageEventDefinitionsPostEvents202603EventDefinitions: (...args) => callOperation("events:manage-event-definitions:2026-03:post-/events/2026-03/event-definitions", ...(args as HubSpotFullApiOperationArgs<"events:manage-event-definitions:2026-03:post-/events/2026-03/event-definitions">)),
    ManageEventDefinitionsGetEvents202603EventDefinitionsEventName: (...args) => callOperation("events:manage-event-definitions:2026-03:get-/events/2026-03/event-definitions/{eventName}", ...(args as HubSpotFullApiOperationArgs<"events:manage-event-definitions:2026-03:get-/events/2026-03/event-definitions/{eventName}">)),
    ManageEventDefinitionsDeleteEvents202603EventDefinitionsEventName: (...args) => callOperation("events:manage-event-definitions:2026-03:delete-/events/2026-03/event-definitions/{eventName}", ...(args as HubSpotFullApiOperationArgs<"events:manage-event-definitions:2026-03:delete-/events/2026-03/event-definitions/{eventName}">)),
    ManageEventDefinitionsPatchEvents202603EventDefinitionsEventName: (...args) => callOperation("events:manage-event-definitions:2026-03:patch-/events/2026-03/event-definitions/{eventName}", ...(args as HubSpotFullApiOperationArgs<"events:manage-event-definitions:2026-03:patch-/events/2026-03/event-definitions/{eventName}">)),
    ManageEventDefinitionsDeleteEvents202603EventDefinitionsEventNamePropertyPropertyName: (...args) => callOperation("events:manage-event-definitions:2026-03:delete-/events/2026-03/event-definitions/{eventName}/property/{propertyName}", ...(args as HubSpotFullApiOperationArgs<"events:manage-event-definitions:2026-03:delete-/events/2026-03/event-definitions/{eventName}/property/{propertyName}">)),
    ManageEventDefinitionsPatchEvents202603EventDefinitionsEventNamePropertyPropertyName: (...args) => callOperation("events:manage-event-definitions:2026-03:patch-/events/2026-03/event-definitions/{eventName}/property/{propertyName}", ...(args as HubSpotFullApiOperationArgs<"events:manage-event-definitions:2026-03:patch-/events/2026-03/event-definitions/{eventName}/property/{propertyName}">)),
    UsersGetCrmObjects202603Users: (...args) => callOperation("crm:users:2026-03:get-/crm/objects/2026-03/users", ...(args as HubSpotFullApiOperationArgs<"crm:users:2026-03:get-/crm/objects/2026-03/users">)),
    UsersPostCrmObjects202603Users: (...args) => callOperation("crm:users:2026-03:post-/crm/objects/2026-03/users", ...(args as HubSpotFullApiOperationArgs<"crm:users:2026-03:post-/crm/objects/2026-03/users">)),
    UsersGetCrmObjects202603UsersUserId: (...args) => callOperation("crm:users:2026-03:get-/crm/objects/2026-03/users/{userId}", ...(args as HubSpotFullApiOperationArgs<"crm:users:2026-03:get-/crm/objects/2026-03/users/{userId}">)),
    UsersDeleteCrmObjects202603UsersUserId: (...args) => callOperation("crm:users:2026-03:delete-/crm/objects/2026-03/users/{userId}", ...(args as HubSpotFullApiOperationArgs<"crm:users:2026-03:delete-/crm/objects/2026-03/users/{userId}">)),
    UsersPatchCrmObjects202603UsersUserId: (...args) => callOperation("crm:users:2026-03:patch-/crm/objects/2026-03/users/{userId}", ...(args as HubSpotFullApiOperationArgs<"crm:users:2026-03:patch-/crm/objects/2026-03/users/{userId}">)),
    UsersPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId: (...args) => callOperation("crm:users:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:users:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">)),
    UsersDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId: (...args) => callOperation("crm:users:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:users:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">)),
    MarketingEmailsGetMarketingEmails202603MarketingEmailsV3: (...args) => callOperation("marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03_/marketing/emails/v3", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03_/marketing/emails/v3">)),
    MarketingEmailsPostMarketingEmails202603MarketingEmailsV3: (...args) => callOperation("marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03_/marketing/emails/v3", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03_/marketing/emails/v3">)),
    MarketingEmailsGetMarketingEmails202603StatisticsHistogramGetHistogram: (...args) => callOperation("marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/statistics/histogram_getHistogram", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/statistics/histogram_getHistogram">)),
    MarketingEmailsGetMarketingEmails202603StatisticsListGetEmailsList: (...args) => callOperation("marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/statistics/list_getEmailsList", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/statistics/list_getEmailsList">)),
    QuotesGetCrmObjects202603QuotesGetPage: (...args) => callOperation("crm:quotes:2026-03:get-/crm/objects/2026-03/quotes_getPage", ...(args as HubSpotFullApiOperationArgs<"crm:quotes:2026-03:get-/crm/objects/2026-03/quotes_getPage">)),
    QuotesPostCrmObjects202603QuotesCreate: (...args) => callOperation("crm:quotes:2026-03:post-/crm/objects/2026-03/quotes_create", ...(args as HubSpotFullApiOperationArgs<"crm:quotes:2026-03:post-/crm/objects/2026-03/quotes_create">)),
    QuotesGetCrmObjects202603QuotesQuoteIdGetById: (...args) => callOperation("crm:quotes:2026-03:get-/crm/objects/2026-03/quotes/{quoteId}_getById", ...(args as HubSpotFullApiOperationArgs<"crm:quotes:2026-03:get-/crm/objects/2026-03/quotes/{quoteId}_getById">)),
    QuotesDeleteCrmObjects202603QuotesQuoteIdArchive: (...args) => callOperation("crm:quotes:2026-03:delete-/crm/objects/2026-03/quotes/{quoteId}_archive", ...(args as HubSpotFullApiOperationArgs<"crm:quotes:2026-03:delete-/crm/objects/2026-03/quotes/{quoteId}_archive">)),
    QuotesPatchCrmObjects202603QuotesQuoteIdUpdate: (...args) => callOperation("crm:quotes:2026-03:patch-/crm/objects/2026-03/quotes/{quoteId}_update", ...(args as HubSpotFullApiOperationArgs<"crm:quotes:2026-03:patch-/crm/objects/2026-03/quotes/{quoteId}_update">)),
    QuotesPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId: (...args) => callOperation("crm:quotes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:quotes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">)),
    QuotesDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId: (...args) => callOperation("crm:quotes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:quotes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">)),
    CartsGetCrmObjects202603Carts: (...args) => callOperation("crm:carts:2026-03:get-/crm/objects/2026-03/carts", ...(args as HubSpotFullApiOperationArgs<"crm:carts:2026-03:get-/crm/objects/2026-03/carts">)),
    CartsPostCrmObjects202603Carts: (...args) => callOperation("crm:carts:2026-03:post-/crm/objects/2026-03/carts", ...(args as HubSpotFullApiOperationArgs<"crm:carts:2026-03:post-/crm/objects/2026-03/carts">)),
    CartsGetCrmObjects202603CartsCartId: (...args) => callOperation("crm:carts:2026-03:get-/crm/objects/2026-03/carts/{cartId}", ...(args as HubSpotFullApiOperationArgs<"crm:carts:2026-03:get-/crm/objects/2026-03/carts/{cartId}">)),
    CartsDeleteCrmObjects202603CartsCartId: (...args) => callOperation("crm:carts:2026-03:delete-/crm/objects/2026-03/carts/{cartId}", ...(args as HubSpotFullApiOperationArgs<"crm:carts:2026-03:delete-/crm/objects/2026-03/carts/{cartId}">)),
    CartsPatchCrmObjects202603CartsCartId: (...args) => callOperation("crm:carts:2026-03:patch-/crm/objects/2026-03/carts/{cartId}", ...(args as HubSpotFullApiOperationArgs<"crm:carts:2026-03:patch-/crm/objects/2026-03/carts/{cartId}">)),
    CartsPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId: (...args) => callOperation("crm:carts:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:carts:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">)),
    CartsDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId: (...args) => callOperation("crm:carts:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:carts:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">)),
    SendEventCompletionsPostEvents202603SendSend: (...args) => callOperation("events:send-event-completions:2026-03:post-/events/2026-03/send_send", ...(args as HubSpotFullApiOperationArgs<"events:send-event-completions:2026-03:post-/events/2026-03/send_send">)),
    PipelinesGetCrmPipelines202603ObjectTypeGetAll: (...args) => callOperation("crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}_getAll", ...(args as HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}_getAll">)),
    PipelinesPostCrmPipelines202603ObjectTypeCreate: (...args) => callOperation("crm:pipelines:2026-03:post-/crm/pipelines/2026-03/{objectType}_create", ...(args as HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:post-/crm/pipelines/2026-03/{objectType}_create">)),
    PipelinesGetCrmPipelines202603ObjectTypePipelineIdGetById: (...args) => callOperation("crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}_getById", ...(args as HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}_getById">)),
    PipelinesPutCrmPipelines202603ObjectTypePipelineIdReplace: (...args) => callOperation("crm:pipelines:2026-03:put-/crm/pipelines/2026-03/{objectType}/{pipelineId}_replace", ...(args as HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:put-/crm/pipelines/2026-03/{objectType}/{pipelineId}_replace">)),
    PipelinesDeleteCrmPipelines202603ObjectTypePipelineIdArchive: (...args) => callOperation("crm:pipelines:2026-03:delete-/crm/pipelines/2026-03/{objectType}/{pipelineId}_archive", ...(args as HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:delete-/crm/pipelines/2026-03/{objectType}/{pipelineId}_archive">)),
    PipelinesPatchCrmPipelines202603ObjectTypePipelineIdUpdate: (...args) => callOperation("crm:pipelines:2026-03:patch-/crm/pipelines/2026-03/{objectType}/{pipelineId}_update", ...(args as HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:patch-/crm/pipelines/2026-03/{objectType}/{pipelineId}_update">)),
    PipelinesGetCrmPipelines202603ObjectTypePipelineIdAuditGetAudit: (...args) => callOperation("crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/audit_getAudit", ...(args as HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/audit_getAudit">)),
    PipelinesGetCrmPipelines202603ObjectTypePipelineIdStagesGetAll: (...args) => callOperation("crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages_getAll", ...(args as HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages_getAll">)),
    PipelinesPostCrmPipelines202603ObjectTypePipelineIdStagesCreate: (...args) => callOperation("crm:pipelines:2026-03:post-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages_create", ...(args as HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:post-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages_create">)),
    PipelinesGetCrmPipelines202603ObjectTypePipelineIdStagesStageIdGetById: (...args) => callOperation("crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_getById", ...(args as HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_getById">)),
    PipelinesPutCrmPipelines202603ObjectTypePipelineIdStagesStageIdReplace: (...args) => callOperation("crm:pipelines:2026-03:put-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_replace", ...(args as HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:put-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_replace">)),
    PipelinesDeleteCrmPipelines202603ObjectTypePipelineIdStagesStageIdArchive: (...args) => callOperation("crm:pipelines:2026-03:delete-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_archive", ...(args as HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:delete-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_archive">)),
    PipelinesPatchCrmPipelines202603ObjectTypePipelineIdStagesStageIdUpdate: (...args) => callOperation("crm:pipelines:2026-03:patch-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_update", ...(args as HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:patch-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}_update">)),
    PipelinesGetCrmPipelines202603ObjectTypePipelineIdStagesStageIdAuditGetAudit: (...args) => callOperation("crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}/audit_getAudit", ...(args as HubSpotFullApiOperationArgs<"crm:pipelines:2026-03:get-/crm/pipelines/2026-03/{objectType}/{pipelineId}/stages/{stageId}/audit_getAudit">)),
    MeetingsGetScheduler202603MeetingsMeetingLinks: (...args) => callOperation("scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links", ...(args as HubSpotFullApiOperationArgs<"scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links">)),
    MeetingsGetScheduler202603MeetingsMeetingLinksBookAvailabilityPageSlug: (...args) => callOperation("scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links/book/availability-page/{slug}", ...(args as HubSpotFullApiOperationArgs<"scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links/book/availability-page/{slug}">)),
    MeetingsGetScheduler202603MeetingsMeetingLinksBookSlug: (...args) => callOperation("scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links/book/{slug}", ...(args as HubSpotFullApiOperationArgs<"scheduler:meetings:2026-03:get-/scheduler/2026-03/meetings/meeting-links/book/{slug}">)),
    ObjectsGetCrmObjects202603ObjectTypeCrmObjects202509ObjectType: (...args) => callOperation("crm:objects:2026-03:get-/crm/objects/2026-03/{objectType}_/crm/objects/2025-09/{objectType}", ...(args as HubSpotFullApiOperationArgs<"crm:objects:2026-03:get-/crm/objects/2026-03/{objectType}_/crm/objects/2025-09/{objectType}">)),
    ObjectsPostCrmObjects202603ObjectTypeCrmObjects202509ObjectType: (...args) => callOperation("crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}_/crm/objects/2025-09/{objectType}", ...(args as HubSpotFullApiOperationArgs<"crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}_/crm/objects/2025-09/{objectType}">)),
    ObjectsGetCrmObjects202603ObjectTypeObjectIdCrmObjects202509ObjectTypeObjectId: (...args) => callOperation("crm:objects:2026-03:get-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}", ...(args as HubSpotFullApiOperationArgs<"crm:objects:2026-03:get-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}">)),
    ObjectsDeleteCrmObjects202603ObjectTypeObjectIdCrmObjects202509ObjectTypeObjectId: (...args) => callOperation("crm:objects:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}", ...(args as HubSpotFullApiOperationArgs<"crm:objects:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}">)),
    ObjectsPatchCrmObjects202603ObjectTypeObjectIdCrmObjects202509ObjectTypeObjectId: (...args) => callOperation("crm:objects:2026-03:patch-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}", ...(args as HubSpotFullApiOperationArgs<"crm:objects:2026-03:patch-/crm/objects/2026-03/{objectType}/{objectId}_/crm/objects/2025-09/{objectType}/{objectId}">)),
    CoursesGetCrmObjects2026030410: (...args) => callOperation("crm:courses:2026-03:get-/crm/objects/2026-03/0-410", ...(args as HubSpotFullApiOperationArgs<"crm:courses:2026-03:get-/crm/objects/2026-03/0-410">)),
    CoursesPostCrmObjects2026030410: (...args) => callOperation("crm:courses:2026-03:post-/crm/objects/2026-03/0-410", ...(args as HubSpotFullApiOperationArgs<"crm:courses:2026-03:post-/crm/objects/2026-03/0-410">)),
    CoursesGetCrmObjects2026030410CourseId: (...args) => callOperation("crm:courses:2026-03:get-/crm/objects/2026-03/0-410/{courseId}", ...(args as HubSpotFullApiOperationArgs<"crm:courses:2026-03:get-/crm/objects/2026-03/0-410/{courseId}">)),
    CoursesDeleteCrmObjects2026030410CourseId: (...args) => callOperation("crm:courses:2026-03:delete-/crm/objects/2026-03/0-410/{courseId}", ...(args as HubSpotFullApiOperationArgs<"crm:courses:2026-03:delete-/crm/objects/2026-03/0-410/{courseId}">)),
    CoursesPatchCrmObjects2026030410CourseId: (...args) => callOperation("crm:courses:2026-03:patch-/crm/objects/2026-03/0-410/{courseId}", ...(args as HubSpotFullApiOperationArgs<"crm:courses:2026-03:patch-/crm/objects/2026-03/0-410/{courseId}">)),
    CoursesPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId: (...args) => callOperation("crm:courses:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:courses:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">)),
    CoursesDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId: (...args) => callOperation("crm:courses:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:courses:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">)),
    FeesGetCrmObjects202603Fees: (...args) => callOperation("crm:fees:2026-03:get-/crm/objects/2026-03/fees", ...(args as HubSpotFullApiOperationArgs<"crm:fees:2026-03:get-/crm/objects/2026-03/fees">)),
    FeesPostCrmObjects202603Fees: (...args) => callOperation("crm:fees:2026-03:post-/crm/objects/2026-03/fees", ...(args as HubSpotFullApiOperationArgs<"crm:fees:2026-03:post-/crm/objects/2026-03/fees">)),
    FeesGetCrmObjects202603FeesFeeId: (...args) => callOperation("crm:fees:2026-03:get-/crm/objects/2026-03/fees/{feeId}", ...(args as HubSpotFullApiOperationArgs<"crm:fees:2026-03:get-/crm/objects/2026-03/fees/{feeId}">)),
    FeesDeleteCrmObjects202603FeesFeeId: (...args) => callOperation("crm:fees:2026-03:delete-/crm/objects/2026-03/fees/{feeId}", ...(args as HubSpotFullApiOperationArgs<"crm:fees:2026-03:delete-/crm/objects/2026-03/fees/{feeId}">)),
    FeesPatchCrmObjects202603FeesFeeId: (...args) => callOperation("crm:fees:2026-03:patch-/crm/objects/2026-03/fees/{feeId}", ...(args as HubSpotFullApiOperationArgs<"crm:fees:2026-03:patch-/crm/objects/2026-03/fees/{feeId}">)),
  };
}
