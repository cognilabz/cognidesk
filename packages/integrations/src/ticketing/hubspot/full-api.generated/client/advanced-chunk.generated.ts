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
export const HubSpotFullApiAdvancedOperationKeys = [
  "crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/cancel_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/cancel",
  "crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/pause_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/pause",
  "crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/unpause_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/unpause",
  "crm:tickets:2026-03:post-/crm/objects/2026-03/tickets/merge_merge",
  "cms:cms-content-audit:2026-03:post-/cms/audit-logs/2026-03/export_/cms/audit-logs/2026-03/export",
  "crm:imports:2026-03:post-/crm/imports/2026-03_/crm/imports/v3",
  "crm:imports:2026-03:post-/crm/imports/2026-03/{importId}/cancel_/crm/imports/v3/{importId}/cancel",
  "cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/attention-span",
  "cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/media-played",
  "cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/media-played-percent",
  "cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/schemas/{objectType}/associations",
  "cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/object-definitions",
  "cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/register",
  "cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/video-association-definition_/media-bridge/v1/{appId}/settings/video-association-definition",
  "crm:custom-objects:2026-03:post-/crm/objects/2026-03/{objectType}/merge_merge",
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/revisions_getPreviousVersions",
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}_getPreviousVersion",
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion",
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft",
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion",
  "crm:companies:2026-03:post-/crm/objects/2026-03/companies/merge_merge",
  "cms:blog-settings:2026-03:get-/cms/blog-settings/2026-03/settings/{blogId}/revisions",
  "cms:blog-settings:2026-03:get-/cms/blog-settings/2026-03/settings/{blogId}/revisions/{revisionId}",
  "crm:timeline:2026-03:post-/integrators/timeline/2026-03/events_create",
  "crm:timeline:2026-03:post-/integrators/timeline/2026-03/types/projects_/integrators/timeline/2026-03/types/projects",
  "marketing:single-send:2026-03:post-/marketing/email-campaigns/2026-03/single-send_/marketing/v4/email/single-send",
  "crm:exports:2026-03:post-/crm/exports/2026-03/export/async_start",
  "crm:exports:2026-03:get-/crm/exports/2026-03/export/async/tasks/{taskId}/status_getStatus",
  "crm:transcriptions:2026-03:post-/crm/extensions/calling/2026-03/inbound-call_/crm/v3/extensions/calling/inbound-call",
  "crm:transcriptions:2026-03:post-/crm/extensions/calling/2026-03/transcripts_/crm/extensions/calling/2026-03/transcripts",
  "crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/gdpr-delete_purge",
  "crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/merge_merge",
  "crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/gdpr-delete_/crm/objects/v3/{objectType}/gdpr-delete",
  "crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/merge_/crm/objects/v3/{objectType}/merge",
  "webhooks:webhooks:2026-03:post-/webhooks-journal/snapshots/2026-03/crm_/webhooks-journal/snapshots/2026-03/crm",
  "webhooks:webhooks:2026-03:post-/webhooks-journal/subscriptions/2026-03/filters_/webhooks-journal/subscriptions/2026-03/filters",
  "crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/inbound-call_/crm/v3/extensions/calling/inbound-call",
  "crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/recordings/ready_markAsReady",
  "crm:schemas:2026-03:post-/crm-object-schemas/2026-03/schemas/{objectType}/associations_createAssociation",
  "data-studio:datasource-ingestion:2026-09-beta:post-/data-studio/data-source/2026-09-beta/{datasourceId}/data-push_/data-studio/data-source/2026-09-beta/{datasourceId}/data-push",
  "webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/snapshots/2026-03/crm",
  "webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/subscriptions/2026-03/filters",
  "auth:oauth:2026-03:post-/oauth/2026-03/token_/oauth/v3/token",
  "auth:oauth:2026-03:post-/oauth/2026-03/token/introspect_/oauth/v3/token/introspect",
  "auth:oauth:2026-03:post-/oauth/2026-03/token/revoke_/oauth/v3/token/revoke",
  "events:manage-event-definitions:2026-03:post-/events/2026-03/event-definitions/{eventName}/property",
  "scheduler:meetings:2026-03:post-/scheduler/2026-03/meetings/calendar",
  "scheduler:meetings:2026-03:post-/scheduler/2026-03/meetings/meeting-links/book",
  "crm:public-app-crm-cards:2026-03:post-/crm/extensions/cards-dev/2026-03/{appId}/views/migrate_/crm/v3/extensions/cards-dev/{appId}/views/migrate",
  "crm:projects:2026-03:post-/crm/objects/2026-03/projects/merge",
  "cms:source-code:2026-03:post-/cms/source-code/2026-03/extract/async_doAsync",
  "cms:source-code:2026-03:get-/cms/source-code/2026-03/extract/async/tasks/{taskId}/status_getAsyncStatus",
  "cms:source-code:2026-03:put-/cms/source-code/2026-03/{environment}/content/{path}_createOrUpdate",
  "cms:source-code:2026-03:post-/cms/source-code/2026-03/{environment}/content/{path}_create",
  "cms:source-code:2026-03:post-/cms/source-code/2026-03/{environment}/validate/{path}_doValidate"
] as const;
export type HubSpotFullApiAdvancedOperationKey = typeof HubSpotFullApiAdvancedOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiAdvancedOperationPathParamMap {
  "crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/cancel_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/cancel": { "objectId": HubSpotFullApiPathParamValue };
  "crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/pause_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/pause": { "objectId": HubSpotFullApiPathParamValue };
  "crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/unpause_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/unpause": { "objectId": HubSpotFullApiPathParamValue };
  "crm:tickets:2026-03:post-/crm/objects/2026-03/tickets/merge_merge": {};
  "cms:cms-content-audit:2026-03:post-/cms/audit-logs/2026-03/export_/cms/audit-logs/2026-03/export": {};
  "crm:imports:2026-03:post-/crm/imports/2026-03_/crm/imports/v3": {};
  "crm:imports:2026-03:post-/crm/imports/2026-03/{importId}/cancel_/crm/imports/v3/{importId}/cancel": { "importId": HubSpotFullApiPathParamValue };
  "cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/attention-span": {};
  "cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/media-played": {};
  "cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/media-played-percent": {};
  "cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/schemas/{objectType}/associations": { "appId": HubSpotFullApiPathParamValue; "objectType": HubSpotFullApiPathParamValue };
  "cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/object-definitions": { "appId": HubSpotFullApiPathParamValue };
  "cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/register": { "appId": HubSpotFullApiPathParamValue };
  "cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/video-association-definition_/media-bridge/v1/{appId}/settings/video-association-definition": { "appId": HubSpotFullApiPathParamValue };
  "crm:custom-objects:2026-03:post-/crm/objects/2026-03/{objectType}/merge_merge": { "objectType": HubSpotFullApiPathParamValue };
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/revisions_getPreviousVersions": { "objectId": HubSpotFullApiPathParamValue };
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}_getPreviousVersion": { "objectId": HubSpotFullApiPathParamValue; "revisionId": HubSpotFullApiPathParamValue };
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion": { "objectId": HubSpotFullApiPathParamValue; "revisionId": HubSpotFullApiPathParamValue };
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft": { "objectId": HubSpotFullApiPathParamValue; "revisionId": HubSpotFullApiPathParamValue };
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion": { "objectId": HubSpotFullApiPathParamValue; "revisionId": HubSpotFullApiPathParamValue };
  "crm:companies:2026-03:post-/crm/objects/2026-03/companies/merge_merge": {};
  "cms:blog-settings:2026-03:get-/cms/blog-settings/2026-03/settings/{blogId}/revisions": { "blogId": HubSpotFullApiPathParamValue };
  "cms:blog-settings:2026-03:get-/cms/blog-settings/2026-03/settings/{blogId}/revisions/{revisionId}": { "blogId": HubSpotFullApiPathParamValue; "revisionId": HubSpotFullApiPathParamValue };
  "crm:timeline:2026-03:post-/integrators/timeline/2026-03/events_create": {};
  "crm:timeline:2026-03:post-/integrators/timeline/2026-03/types/projects_/integrators/timeline/2026-03/types/projects": {};
  "marketing:single-send:2026-03:post-/marketing/email-campaigns/2026-03/single-send_/marketing/v4/email/single-send": {};
  "crm:exports:2026-03:post-/crm/exports/2026-03/export/async_start": {};
  "crm:exports:2026-03:get-/crm/exports/2026-03/export/async/tasks/{taskId}/status_getStatus": { "taskId": HubSpotFullApiPathParamValue };
  "crm:transcriptions:2026-03:post-/crm/extensions/calling/2026-03/inbound-call_/crm/v3/extensions/calling/inbound-call": {};
  "crm:transcriptions:2026-03:post-/crm/extensions/calling/2026-03/transcripts_/crm/extensions/calling/2026-03/transcripts": {};
  "crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/gdpr-delete_purge": {};
  "crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/merge_merge": {};
  "crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/gdpr-delete_/crm/objects/v3/{objectType}/gdpr-delete": { "objectType": HubSpotFullApiPathParamValue };
  "crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/merge_/crm/objects/v3/{objectType}/merge": { "objectType": HubSpotFullApiPathParamValue };
  "webhooks:webhooks:2026-03:post-/webhooks-journal/snapshots/2026-03/crm_/webhooks-journal/snapshots/2026-03/crm": {};
  "webhooks:webhooks:2026-03:post-/webhooks-journal/subscriptions/2026-03/filters_/webhooks-journal/subscriptions/2026-03/filters": {};
  "crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/inbound-call_/crm/v3/extensions/calling/inbound-call": {};
  "crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/recordings/ready_markAsReady": {};
  "crm:schemas:2026-03:post-/crm-object-schemas/2026-03/schemas/{objectType}/associations_createAssociation": { "objectType": HubSpotFullApiPathParamValue };
  "data-studio:datasource-ingestion:2026-09-beta:post-/data-studio/data-source/2026-09-beta/{datasourceId}/data-push_/data-studio/data-source/2026-09-beta/{datasourceId}/data-push": { "datasourceId": HubSpotFullApiPathParamValue };
  "webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/snapshots/2026-03/crm": {};
  "webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/subscriptions/2026-03/filters": {};
  "auth:oauth:2026-03:post-/oauth/2026-03/token_/oauth/v3/token": {};
  "auth:oauth:2026-03:post-/oauth/2026-03/token/introspect_/oauth/v3/token/introspect": {};
  "auth:oauth:2026-03:post-/oauth/2026-03/token/revoke_/oauth/v3/token/revoke": {};
  "events:manage-event-definitions:2026-03:post-/events/2026-03/event-definitions/{eventName}/property": { "eventName": HubSpotFullApiPathParamValue };
  "scheduler:meetings:2026-03:post-/scheduler/2026-03/meetings/calendar": {};
  "scheduler:meetings:2026-03:post-/scheduler/2026-03/meetings/meeting-links/book": {};
  "crm:public-app-crm-cards:2026-03:post-/crm/extensions/cards-dev/2026-03/{appId}/views/migrate_/crm/v3/extensions/cards-dev/{appId}/views/migrate": { "appId": HubSpotFullApiPathParamValue };
  "crm:projects:2026-03:post-/crm/objects/2026-03/projects/merge": {};
  "cms:source-code:2026-03:post-/cms/source-code/2026-03/extract/async_doAsync": {};
  "cms:source-code:2026-03:get-/cms/source-code/2026-03/extract/async/tasks/{taskId}/status_getAsyncStatus": { "taskId": HubSpotFullApiPathParamValue };
  "cms:source-code:2026-03:put-/cms/source-code/2026-03/{environment}/content/{path}_createOrUpdate": { "environment": HubSpotFullApiPathParamValue; "path": HubSpotFullApiPathParamValue };
  "cms:source-code:2026-03:post-/cms/source-code/2026-03/{environment}/content/{path}_create": { "environment": HubSpotFullApiPathParamValue; "path": HubSpotFullApiPathParamValue };
  "cms:source-code:2026-03:post-/cms/source-code/2026-03/{environment}/validate/{path}_doValidate": { "environment": HubSpotFullApiPathParamValue; "path": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiAdvancedOperationRequestMap {
  "crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/cancel_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/cancel": HubSpotFullApiOperationInput<"crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/cancel_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/cancel">;
  "crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/pause_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/pause": HubSpotFullApiOperationInput<"crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/pause_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/pause">;
  "crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/unpause_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/unpause": HubSpotFullApiOperationInput<"crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/unpause_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/unpause">;
  "crm:tickets:2026-03:post-/crm/objects/2026-03/tickets/merge_merge": HubSpotFullApiOperationInput<"crm:tickets:2026-03:post-/crm/objects/2026-03/tickets/merge_merge">;
  "cms:cms-content-audit:2026-03:post-/cms/audit-logs/2026-03/export_/cms/audit-logs/2026-03/export": HubSpotFullApiOperationInput<"cms:cms-content-audit:2026-03:post-/cms/audit-logs/2026-03/export_/cms/audit-logs/2026-03/export">;
  "crm:imports:2026-03:post-/crm/imports/2026-03_/crm/imports/v3": HubSpotFullApiOperationInput<"crm:imports:2026-03:post-/crm/imports/2026-03_/crm/imports/v3">;
  "crm:imports:2026-03:post-/crm/imports/2026-03/{importId}/cancel_/crm/imports/v3/{importId}/cancel": HubSpotFullApiOperationInput<"crm:imports:2026-03:post-/crm/imports/2026-03/{importId}/cancel_/crm/imports/v3/{importId}/cancel">;
  "cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/attention-span": HubSpotFullApiOperationInput<"cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/attention-span">;
  "cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/media-played": HubSpotFullApiOperationInput<"cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/media-played">;
  "cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/media-played-percent": HubSpotFullApiOperationInput<"cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/media-played-percent">;
  "cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/schemas/{objectType}/associations": HubSpotFullApiOperationInput<"cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/schemas/{objectType}/associations">;
  "cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/object-definitions": HubSpotFullApiOperationInput<"cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/object-definitions">;
  "cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/register": HubSpotFullApiOperationInput<"cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/register">;
  "cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/video-association-definition_/media-bridge/v1/{appId}/settings/video-association-definition": HubSpotFullApiOperationInput<"cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/video-association-definition_/media-bridge/v1/{appId}/settings/video-association-definition">;
  "crm:custom-objects:2026-03:post-/crm/objects/2026-03/{objectType}/merge_merge": HubSpotFullApiOperationInput<"crm:custom-objects:2026-03:post-/crm/objects/2026-03/{objectType}/merge_merge">;
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/revisions_getPreviousVersions": HubSpotFullApiOperationInput<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/revisions_getPreviousVersions">;
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}_getPreviousVersion": HubSpotFullApiOperationInput<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}_getPreviousVersion">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion">;
  "crm:companies:2026-03:post-/crm/objects/2026-03/companies/merge_merge": HubSpotFullApiOperationInput<"crm:companies:2026-03:post-/crm/objects/2026-03/companies/merge_merge">;
  "cms:blog-settings:2026-03:get-/cms/blog-settings/2026-03/settings/{blogId}/revisions": HubSpotFullApiOperationInput<"cms:blog-settings:2026-03:get-/cms/blog-settings/2026-03/settings/{blogId}/revisions">;
  "cms:blog-settings:2026-03:get-/cms/blog-settings/2026-03/settings/{blogId}/revisions/{revisionId}": HubSpotFullApiOperationInput<"cms:blog-settings:2026-03:get-/cms/blog-settings/2026-03/settings/{blogId}/revisions/{revisionId}">;
  "crm:timeline:2026-03:post-/integrators/timeline/2026-03/events_create": HubSpotFullApiOperationInput<"crm:timeline:2026-03:post-/integrators/timeline/2026-03/events_create">;
  "crm:timeline:2026-03:post-/integrators/timeline/2026-03/types/projects_/integrators/timeline/2026-03/types/projects": HubSpotFullApiOperationInput<"crm:timeline:2026-03:post-/integrators/timeline/2026-03/types/projects_/integrators/timeline/2026-03/types/projects">;
  "marketing:single-send:2026-03:post-/marketing/email-campaigns/2026-03/single-send_/marketing/v4/email/single-send": HubSpotFullApiOperationInput<"marketing:single-send:2026-03:post-/marketing/email-campaigns/2026-03/single-send_/marketing/v4/email/single-send">;
  "crm:exports:2026-03:post-/crm/exports/2026-03/export/async_start": HubSpotFullApiOperationInput<"crm:exports:2026-03:post-/crm/exports/2026-03/export/async_start">;
  "crm:exports:2026-03:get-/crm/exports/2026-03/export/async/tasks/{taskId}/status_getStatus": HubSpotFullApiOperationInput<"crm:exports:2026-03:get-/crm/exports/2026-03/export/async/tasks/{taskId}/status_getStatus">;
  "crm:transcriptions:2026-03:post-/crm/extensions/calling/2026-03/inbound-call_/crm/v3/extensions/calling/inbound-call": HubSpotFullApiOperationInput<"crm:transcriptions:2026-03:post-/crm/extensions/calling/2026-03/inbound-call_/crm/v3/extensions/calling/inbound-call">;
  "crm:transcriptions:2026-03:post-/crm/extensions/calling/2026-03/transcripts_/crm/extensions/calling/2026-03/transcripts": HubSpotFullApiOperationInput<"crm:transcriptions:2026-03:post-/crm/extensions/calling/2026-03/transcripts_/crm/extensions/calling/2026-03/transcripts">;
  "crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/gdpr-delete_purge": HubSpotFullApiOperationInput<"crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/gdpr-delete_purge">;
  "crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/merge_merge": HubSpotFullApiOperationInput<"crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/merge_merge">;
  "crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/gdpr-delete_/crm/objects/v3/{objectType}/gdpr-delete": HubSpotFullApiOperationInput<"crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/gdpr-delete_/crm/objects/v3/{objectType}/gdpr-delete">;
  "crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/merge_/crm/objects/v3/{objectType}/merge": HubSpotFullApiOperationInput<"crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/merge_/crm/objects/v3/{objectType}/merge">;
  "webhooks:webhooks:2026-03:post-/webhooks-journal/snapshots/2026-03/crm_/webhooks-journal/snapshots/2026-03/crm": HubSpotFullApiOperationInput<"webhooks:webhooks:2026-03:post-/webhooks-journal/snapshots/2026-03/crm_/webhooks-journal/snapshots/2026-03/crm">;
  "webhooks:webhooks:2026-03:post-/webhooks-journal/subscriptions/2026-03/filters_/webhooks-journal/subscriptions/2026-03/filters": HubSpotFullApiOperationInput<"webhooks:webhooks:2026-03:post-/webhooks-journal/subscriptions/2026-03/filters_/webhooks-journal/subscriptions/2026-03/filters">;
  "crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/inbound-call_/crm/v3/extensions/calling/inbound-call": HubSpotFullApiOperationInput<"crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/inbound-call_/crm/v3/extensions/calling/inbound-call">;
  "crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/recordings/ready_markAsReady": HubSpotFullApiOperationInput<"crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/recordings/ready_markAsReady">;
  "crm:schemas:2026-03:post-/crm-object-schemas/2026-03/schemas/{objectType}/associations_createAssociation": HubSpotFullApiOperationInput<"crm:schemas:2026-03:post-/crm-object-schemas/2026-03/schemas/{objectType}/associations_createAssociation">;
  "data-studio:datasource-ingestion:2026-09-beta:post-/data-studio/data-source/2026-09-beta/{datasourceId}/data-push_/data-studio/data-source/2026-09-beta/{datasourceId}/data-push": HubSpotFullApiOperationInput<"data-studio:datasource-ingestion:2026-09-beta:post-/data-studio/data-source/2026-09-beta/{datasourceId}/data-push_/data-studio/data-source/2026-09-beta/{datasourceId}/data-push">;
  "webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/snapshots/2026-03/crm": HubSpotFullApiOperationInput<"webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/snapshots/2026-03/crm">;
  "webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/subscriptions/2026-03/filters": HubSpotFullApiOperationInput<"webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/subscriptions/2026-03/filters">;
  "auth:oauth:2026-03:post-/oauth/2026-03/token_/oauth/v3/token": HubSpotFullApiOperationInput<"auth:oauth:2026-03:post-/oauth/2026-03/token_/oauth/v3/token">;
  "auth:oauth:2026-03:post-/oauth/2026-03/token/introspect_/oauth/v3/token/introspect": HubSpotFullApiOperationInput<"auth:oauth:2026-03:post-/oauth/2026-03/token/introspect_/oauth/v3/token/introspect">;
  "auth:oauth:2026-03:post-/oauth/2026-03/token/revoke_/oauth/v3/token/revoke": HubSpotFullApiOperationInput<"auth:oauth:2026-03:post-/oauth/2026-03/token/revoke_/oauth/v3/token/revoke">;
  "events:manage-event-definitions:2026-03:post-/events/2026-03/event-definitions/{eventName}/property": HubSpotFullApiOperationInput<"events:manage-event-definitions:2026-03:post-/events/2026-03/event-definitions/{eventName}/property">;
  "scheduler:meetings:2026-03:post-/scheduler/2026-03/meetings/calendar": HubSpotFullApiOperationInput<"scheduler:meetings:2026-03:post-/scheduler/2026-03/meetings/calendar">;
  "scheduler:meetings:2026-03:post-/scheduler/2026-03/meetings/meeting-links/book": HubSpotFullApiOperationInput<"scheduler:meetings:2026-03:post-/scheduler/2026-03/meetings/meeting-links/book">;
  "crm:public-app-crm-cards:2026-03:post-/crm/extensions/cards-dev/2026-03/{appId}/views/migrate_/crm/v3/extensions/cards-dev/{appId}/views/migrate": HubSpotFullApiOperationInput<"crm:public-app-crm-cards:2026-03:post-/crm/extensions/cards-dev/2026-03/{appId}/views/migrate_/crm/v3/extensions/cards-dev/{appId}/views/migrate">;
  "crm:projects:2026-03:post-/crm/objects/2026-03/projects/merge": HubSpotFullApiOperationInput<"crm:projects:2026-03:post-/crm/objects/2026-03/projects/merge">;
  "cms:source-code:2026-03:post-/cms/source-code/2026-03/extract/async_doAsync": HubSpotFullApiOperationInput<"cms:source-code:2026-03:post-/cms/source-code/2026-03/extract/async_doAsync">;
  "cms:source-code:2026-03:get-/cms/source-code/2026-03/extract/async/tasks/{taskId}/status_getAsyncStatus": HubSpotFullApiOperationInput<"cms:source-code:2026-03:get-/cms/source-code/2026-03/extract/async/tasks/{taskId}/status_getAsyncStatus">;
  "cms:source-code:2026-03:put-/cms/source-code/2026-03/{environment}/content/{path}_createOrUpdate": HubSpotFullApiOperationInput<"cms:source-code:2026-03:put-/cms/source-code/2026-03/{environment}/content/{path}_createOrUpdate">;
  "cms:source-code:2026-03:post-/cms/source-code/2026-03/{environment}/content/{path}_create": HubSpotFullApiOperationInput<"cms:source-code:2026-03:post-/cms/source-code/2026-03/{environment}/content/{path}_create">;
  "cms:source-code:2026-03:post-/cms/source-code/2026-03/{environment}/validate/{path}_doValidate": HubSpotFullApiOperationInput<"cms:source-code:2026-03:post-/cms/source-code/2026-03/{environment}/validate/{path}_doValidate">;
}

export interface HubSpotFullApiAdvancedGeneratedClient {
  SubscriptionLifecyclePostPaymentsSubscriptions202609BetaSubscriptionsCrmObjectIdCancelPaymentsSubscriptions202609BetaSubscriptionsCrmObjectIdCancel(...args: HubSpotFullApiOperationArgs<"crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/cancel_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/cancel">): Promise<HubSpotFullApiOperationResponseMap["crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/cancel_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/cancel"]>;
  SubscriptionLifecyclePostPaymentsSubscriptions202609BetaSubscriptionsCrmObjectIdPausePaymentsSubscriptions202609BetaSubscriptionsCrmObjectIdPause(...args: HubSpotFullApiOperationArgs<"crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/pause_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/pause">): Promise<HubSpotFullApiOperationResponseMap["crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/pause_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/pause"]>;
  SubscriptionLifecyclePostPaymentsSubscriptions202609BetaSubscriptionsCrmObjectIdUnpausePaymentsSubscriptions202609BetaSubscriptionsCrmObjectIdUnpause(...args: HubSpotFullApiOperationArgs<"crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/unpause_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/unpause">): Promise<HubSpotFullApiOperationResponseMap["crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/unpause_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/unpause"]>;
  TicketsPostCrmObjects202603TicketsMergeMerge(...args: HubSpotFullApiOperationArgs<"crm:tickets:2026-03:post-/crm/objects/2026-03/tickets/merge_merge">): Promise<HubSpotFullApiOperationResponseMap["crm:tickets:2026-03:post-/crm/objects/2026-03/tickets/merge_merge"]>;
  CmsContentAuditPostCmsAuditLogs202603ExportCmsAuditLogs202603Export(...args: HubSpotFullApiOperationArgs<"cms:cms-content-audit:2026-03:post-/cms/audit-logs/2026-03/export_/cms/audit-logs/2026-03/export">): Promise<HubSpotFullApiOperationResponseMap["cms:cms-content-audit:2026-03:post-/cms/audit-logs/2026-03/export_/cms/audit-logs/2026-03/export"]>;
  ImportsPostCrmImports202603CrmImportsV3(...args: HubSpotFullApiOperationArgs<"crm:imports:2026-03:post-/crm/imports/2026-03_/crm/imports/v3">): Promise<HubSpotFullApiOperationResponseMap["crm:imports:2026-03:post-/crm/imports/2026-03_/crm/imports/v3"]>;
  ImportsPostCrmImports202603ImportIdCancelCrmImportsV3ImportIdCancel(...args: HubSpotFullApiOperationArgs<"crm:imports:2026-03:post-/crm/imports/2026-03/{importId}/cancel_/crm/imports/v3/{importId}/cancel">): Promise<HubSpotFullApiOperationResponseMap["crm:imports:2026-03:post-/crm/imports/2026-03/{importId}/cancel_/crm/imports/v3/{importId}/cancel"]>;
  MediaBridgePostMediaBridge202603EventsAttentionSpan(...args: HubSpotFullApiOperationArgs<"cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/attention-span">): Promise<HubSpotFullApiOperationResponseMap["cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/attention-span"]>;
  MediaBridgePostMediaBridge202603EventsMediaPlayed(...args: HubSpotFullApiOperationArgs<"cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/media-played">): Promise<HubSpotFullApiOperationResponseMap["cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/media-played"]>;
  MediaBridgePostMediaBridge202603EventsMediaPlayedPercent(...args: HubSpotFullApiOperationArgs<"cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/media-played-percent">): Promise<HubSpotFullApiOperationResponseMap["cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/media-played-percent"]>;
  MediaBridgePostMediaBridge202603AppIdSchemasObjectTypeAssociations(...args: HubSpotFullApiOperationArgs<"cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/schemas/{objectType}/associations">): Promise<HubSpotFullApiOperationResponseMap["cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/schemas/{objectType}/associations"]>;
  MediaBridgePostMediaBridge202603AppIdSettingsObjectDefinitions(...args: HubSpotFullApiOperationArgs<"cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/object-definitions">): Promise<HubSpotFullApiOperationResponseMap["cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/object-definitions"]>;
  MediaBridgePostMediaBridge202603AppIdSettingsRegister(...args: HubSpotFullApiOperationArgs<"cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/register">): Promise<HubSpotFullApiOperationResponseMap["cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/register"]>;
  MediaBridgePostMediaBridge202603AppIdSettingsVideoAssociationDefinitionMediaBridgeV1AppIdSettingsVideoAssociationDefinition(...args: HubSpotFullApiOperationArgs<"cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/video-association-definition_/media-bridge/v1/{appId}/settings/video-association-definition">): Promise<HubSpotFullApiOperationResponseMap["cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/video-association-definition_/media-bridge/v1/{appId}/settings/video-association-definition"]>;
  CustomObjectsPostCrmObjects202603ObjectTypeMergeMerge(...args: HubSpotFullApiOperationArgs<"crm:custom-objects:2026-03:post-/crm/objects/2026-03/{objectType}/merge_merge">): Promise<HubSpotFullApiOperationResponseMap["crm:custom-objects:2026-03:post-/crm/objects/2026-03/{objectType}/merge_merge"]>;
  PagesGetCmsPages202603LandingPagesObjectIdRevisionsGetPreviousVersions(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/revisions_getPreviousVersions">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/revisions_getPreviousVersions"]>;
  PagesGetCmsPages202603LandingPagesObjectIdRevisionsRevisionIdGetPreviousVersion(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}_getPreviousVersion">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}_getPreviousVersion"]>;
  PagesPostCmsPages202603LandingPagesObjectIdRevisionsRevisionIdRestoreRestorePreviousVersion(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion"]>;
  PagesPostCmsPages202603LandingPagesObjectIdRevisionsRevisionIdRestoreToDraftRestorePreviousVersionToDraft(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft"]>;
  PagesPostCmsPages202603SitePagesObjectIdRevisionsRevisionIdRestoreRestorePreviousVersion(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion"]>;
  CompaniesPostCrmObjects202603CompaniesMergeMerge(...args: HubSpotFullApiOperationArgs<"crm:companies:2026-03:post-/crm/objects/2026-03/companies/merge_merge">): Promise<HubSpotFullApiOperationResponseMap["crm:companies:2026-03:post-/crm/objects/2026-03/companies/merge_merge"]>;
  BlogSettingsGetCmsBlogSettings202603SettingsBlogIdRevisions(...args: HubSpotFullApiOperationArgs<"cms:blog-settings:2026-03:get-/cms/blog-settings/2026-03/settings/{blogId}/revisions">): Promise<HubSpotFullApiOperationResponseMap["cms:blog-settings:2026-03:get-/cms/blog-settings/2026-03/settings/{blogId}/revisions"]>;
  BlogSettingsGetCmsBlogSettings202603SettingsBlogIdRevisionsRevisionId(...args: HubSpotFullApiOperationArgs<"cms:blog-settings:2026-03:get-/cms/blog-settings/2026-03/settings/{blogId}/revisions/{revisionId}">): Promise<HubSpotFullApiOperationResponseMap["cms:blog-settings:2026-03:get-/cms/blog-settings/2026-03/settings/{blogId}/revisions/{revisionId}"]>;
  TimelinePostIntegratorsTimeline202603EventsCreate(...args: HubSpotFullApiOperationArgs<"crm:timeline:2026-03:post-/integrators/timeline/2026-03/events_create">): Promise<HubSpotFullApiOperationResponseMap["crm:timeline:2026-03:post-/integrators/timeline/2026-03/events_create"]>;
  TimelinePostIntegratorsTimeline202603TypesProjectsIntegratorsTimeline202603TypesProjects(...args: HubSpotFullApiOperationArgs<"crm:timeline:2026-03:post-/integrators/timeline/2026-03/types/projects_/integrators/timeline/2026-03/types/projects">): Promise<HubSpotFullApiOperationResponseMap["crm:timeline:2026-03:post-/integrators/timeline/2026-03/types/projects_/integrators/timeline/2026-03/types/projects"]>;
  SingleSendPostMarketingEmailCampaigns202603SingleSendMarketingV4EmailSingleSend(...args: HubSpotFullApiOperationArgs<"marketing:single-send:2026-03:post-/marketing/email-campaigns/2026-03/single-send_/marketing/v4/email/single-send">): Promise<HubSpotFullApiOperationResponseMap["marketing:single-send:2026-03:post-/marketing/email-campaigns/2026-03/single-send_/marketing/v4/email/single-send"]>;
  ExportsPostCrmExports202603ExportAsyncStart(...args: HubSpotFullApiOperationArgs<"crm:exports:2026-03:post-/crm/exports/2026-03/export/async_start">): Promise<HubSpotFullApiOperationResponseMap["crm:exports:2026-03:post-/crm/exports/2026-03/export/async_start"]>;
  ExportsGetCrmExports202603ExportAsyncTasksTaskIdStatusGetStatus(...args: HubSpotFullApiOperationArgs<"crm:exports:2026-03:get-/crm/exports/2026-03/export/async/tasks/{taskId}/status_getStatus">): Promise<HubSpotFullApiOperationResponseMap["crm:exports:2026-03:get-/crm/exports/2026-03/export/async/tasks/{taskId}/status_getStatus"]>;
  TranscriptionsPostCrmExtensionsCalling202603InboundCallCrmV3ExtensionsCallingInboundCall(...args: HubSpotFullApiOperationArgs<"crm:transcriptions:2026-03:post-/crm/extensions/calling/2026-03/inbound-call_/crm/v3/extensions/calling/inbound-call">): Promise<HubSpotFullApiOperationResponseMap["crm:transcriptions:2026-03:post-/crm/extensions/calling/2026-03/inbound-call_/crm/v3/extensions/calling/inbound-call"]>;
  TranscriptionsPostCrmExtensionsCalling202603TranscriptsCrmExtensionsCalling202603Transcripts(...args: HubSpotFullApiOperationArgs<"crm:transcriptions:2026-03:post-/crm/extensions/calling/2026-03/transcripts_/crm/extensions/calling/2026-03/transcripts">): Promise<HubSpotFullApiOperationResponseMap["crm:transcriptions:2026-03:post-/crm/extensions/calling/2026-03/transcripts_/crm/extensions/calling/2026-03/transcripts"]>;
  ContactsPostCrmObjects202603ContactsGdprDeletePurge(...args: HubSpotFullApiOperationArgs<"crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/gdpr-delete_purge">): Promise<HubSpotFullApiOperationResponseMap["crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/gdpr-delete_purge"]>;
  ContactsPostCrmObjects202603ContactsMergeMerge(...args: HubSpotFullApiOperationArgs<"crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/merge_merge">): Promise<HubSpotFullApiOperationResponseMap["crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/merge_merge"]>;
  AppointmentsPostCrmObjects202603ObjectTypeGdprDeleteCrmObjectsV3ObjectTypeGdprDelete(...args: HubSpotFullApiOperationArgs<"crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/gdpr-delete_/crm/objects/v3/{objectType}/gdpr-delete">): Promise<HubSpotFullApiOperationResponseMap["crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/gdpr-delete_/crm/objects/v3/{objectType}/gdpr-delete"]>;
  AppointmentsPostCrmObjects202603ObjectTypeMergeCrmObjectsV3ObjectTypeMerge(...args: HubSpotFullApiOperationArgs<"crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/merge_/crm/objects/v3/{objectType}/merge">): Promise<HubSpotFullApiOperationResponseMap["crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/merge_/crm/objects/v3/{objectType}/merge"]>;
  WebhooksPostWebhooksJournalSnapshots202603CrmWebhooksJournalSnapshots202603Crm(...args: HubSpotFullApiOperationArgs<"webhooks:webhooks:2026-03:post-/webhooks-journal/snapshots/2026-03/crm_/webhooks-journal/snapshots/2026-03/crm">): Promise<HubSpotFullApiOperationResponseMap["webhooks:webhooks:2026-03:post-/webhooks-journal/snapshots/2026-03/crm_/webhooks-journal/snapshots/2026-03/crm"]>;
  WebhooksPostWebhooksJournalSubscriptions202603FiltersWebhooksJournalSubscriptions202603Filters(...args: HubSpotFullApiOperationArgs<"webhooks:webhooks:2026-03:post-/webhooks-journal/subscriptions/2026-03/filters_/webhooks-journal/subscriptions/2026-03/filters">): Promise<HubSpotFullApiOperationResponseMap["webhooks:webhooks:2026-03:post-/webhooks-journal/subscriptions/2026-03/filters_/webhooks-journal/subscriptions/2026-03/filters"]>;
  CallingExtensionsPostCrmExtensionsCalling202603InboundCallCrmV3ExtensionsCallingInboundCall(...args: HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/inbound-call_/crm/v3/extensions/calling/inbound-call">): Promise<HubSpotFullApiOperationResponseMap["crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/inbound-call_/crm/v3/extensions/calling/inbound-call"]>;
  CallingExtensionsPostCrmExtensionsCalling202603RecordingsReadyMarkAsReady(...args: HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/recordings/ready_markAsReady">): Promise<HubSpotFullApiOperationResponseMap["crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/recordings/ready_markAsReady"]>;
  SchemasPostCrmObjectSchemas202603SchemasObjectTypeAssociationsCreateAssociation(...args: HubSpotFullApiOperationArgs<"crm:schemas:2026-03:post-/crm-object-schemas/2026-03/schemas/{objectType}/associations_createAssociation">): Promise<HubSpotFullApiOperationResponseMap["crm:schemas:2026-03:post-/crm-object-schemas/2026-03/schemas/{objectType}/associations_createAssociation"]>;
  DatasourceIngestionPostDataStudioDataSource202609BetaDatasourceIdDataPushDataStudioDataSource202609BetaDatasourceIdDataPush(...args: HubSpotFullApiOperationArgs<"data-studio:datasource-ingestion:2026-09-beta:post-/data-studio/data-source/2026-09-beta/{datasourceId}/data-push_/data-studio/data-source/2026-09-beta/{datasourceId}/data-push">): Promise<HubSpotFullApiOperationResponseMap["data-studio:datasource-ingestion:2026-09-beta:post-/data-studio/data-source/2026-09-beta/{datasourceId}/data-push_/data-studio/data-source/2026-09-beta/{datasourceId}/data-push"]>;
  WebhooksJournalPostWebhooksJournalSnapshots202603Crm(...args: HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/snapshots/2026-03/crm">): Promise<HubSpotFullApiOperationResponseMap["webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/snapshots/2026-03/crm"]>;
  WebhooksJournalPostWebhooksJournalSubscriptions202603Filters(...args: HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/subscriptions/2026-03/filters">): Promise<HubSpotFullApiOperationResponseMap["webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/subscriptions/2026-03/filters"]>;
  OauthPostOauth202603TokenOauthV3Token(...args: HubSpotFullApiOperationArgs<"auth:oauth:2026-03:post-/oauth/2026-03/token_/oauth/v3/token">): Promise<HubSpotFullApiOperationResponseMap["auth:oauth:2026-03:post-/oauth/2026-03/token_/oauth/v3/token"]>;
  OauthPostOauth202603TokenIntrospectOauthV3TokenIntrospect(...args: HubSpotFullApiOperationArgs<"auth:oauth:2026-03:post-/oauth/2026-03/token/introspect_/oauth/v3/token/introspect">): Promise<HubSpotFullApiOperationResponseMap["auth:oauth:2026-03:post-/oauth/2026-03/token/introspect_/oauth/v3/token/introspect"]>;
  OauthPostOauth202603TokenRevokeOauthV3TokenRevoke(...args: HubSpotFullApiOperationArgs<"auth:oauth:2026-03:post-/oauth/2026-03/token/revoke_/oauth/v3/token/revoke">): Promise<HubSpotFullApiOperationResponseMap["auth:oauth:2026-03:post-/oauth/2026-03/token/revoke_/oauth/v3/token/revoke"]>;
  ManageEventDefinitionsPostEvents202603EventDefinitionsEventNameProperty(...args: HubSpotFullApiOperationArgs<"events:manage-event-definitions:2026-03:post-/events/2026-03/event-definitions/{eventName}/property">): Promise<HubSpotFullApiOperationResponseMap["events:manage-event-definitions:2026-03:post-/events/2026-03/event-definitions/{eventName}/property"]>;
  MeetingsPostScheduler202603MeetingsCalendar(...args: HubSpotFullApiOperationArgs<"scheduler:meetings:2026-03:post-/scheduler/2026-03/meetings/calendar">): Promise<HubSpotFullApiOperationResponseMap["scheduler:meetings:2026-03:post-/scheduler/2026-03/meetings/calendar"]>;
  MeetingsPostScheduler202603MeetingsMeetingLinksBook(...args: HubSpotFullApiOperationArgs<"scheduler:meetings:2026-03:post-/scheduler/2026-03/meetings/meeting-links/book">): Promise<HubSpotFullApiOperationResponseMap["scheduler:meetings:2026-03:post-/scheduler/2026-03/meetings/meeting-links/book"]>;
  PublicAppCrmCardsPostCrmExtensionsCardsDev202603AppIdViewsMigrateCrmV3ExtensionsCardsDevAppIdViewsMigrate(...args: HubSpotFullApiOperationArgs<"crm:public-app-crm-cards:2026-03:post-/crm/extensions/cards-dev/2026-03/{appId}/views/migrate_/crm/v3/extensions/cards-dev/{appId}/views/migrate">): Promise<HubSpotFullApiOperationResponseMap["crm:public-app-crm-cards:2026-03:post-/crm/extensions/cards-dev/2026-03/{appId}/views/migrate_/crm/v3/extensions/cards-dev/{appId}/views/migrate"]>;
  ProjectsPostCrmObjects202603ProjectsMerge(...args: HubSpotFullApiOperationArgs<"crm:projects:2026-03:post-/crm/objects/2026-03/projects/merge">): Promise<HubSpotFullApiOperationResponseMap["crm:projects:2026-03:post-/crm/objects/2026-03/projects/merge"]>;
  SourceCodePostCmsSourceCode202603ExtractAsyncDoAsync(...args: HubSpotFullApiOperationArgs<"cms:source-code:2026-03:post-/cms/source-code/2026-03/extract/async_doAsync">): Promise<HubSpotFullApiOperationResponseMap["cms:source-code:2026-03:post-/cms/source-code/2026-03/extract/async_doAsync"]>;
  SourceCodeGetCmsSourceCode202603ExtractAsyncTasksTaskIdStatusGetAsyncStatus(...args: HubSpotFullApiOperationArgs<"cms:source-code:2026-03:get-/cms/source-code/2026-03/extract/async/tasks/{taskId}/status_getAsyncStatus">): Promise<HubSpotFullApiOperationResponseMap["cms:source-code:2026-03:get-/cms/source-code/2026-03/extract/async/tasks/{taskId}/status_getAsyncStatus"]>;
  SourceCodePutCmsSourceCode202603EnvironmentContentPathCreateOrUpdate(...args: HubSpotFullApiOperationArgs<"cms:source-code:2026-03:put-/cms/source-code/2026-03/{environment}/content/{path}_createOrUpdate">): Promise<HubSpotFullApiOperationResponseMap["cms:source-code:2026-03:put-/cms/source-code/2026-03/{environment}/content/{path}_createOrUpdate"]>;
  SourceCodePostCmsSourceCode202603EnvironmentContentPathCreate(...args: HubSpotFullApiOperationArgs<"cms:source-code:2026-03:post-/cms/source-code/2026-03/{environment}/content/{path}_create">): Promise<HubSpotFullApiOperationResponseMap["cms:source-code:2026-03:post-/cms/source-code/2026-03/{environment}/content/{path}_create"]>;
  SourceCodePostCmsSourceCode202603EnvironmentValidatePathDoValidate(...args: HubSpotFullApiOperationArgs<"cms:source-code:2026-03:post-/cms/source-code/2026-03/{environment}/validate/{path}_doValidate">): Promise<HubSpotFullApiOperationResponseMap["cms:source-code:2026-03:post-/cms/source-code/2026-03/{environment}/validate/{path}_doValidate"]>;
}

export const HubSpotFullApiAdvancedGeneratedFunctionNames = [
  "SubscriptionLifecyclePostPaymentsSubscriptions202609BetaSubscriptionsCrmObjectIdCancelPaymentsSubscriptions202609BetaSubscriptionsCrmObjectIdCancel",
  "SubscriptionLifecyclePostPaymentsSubscriptions202609BetaSubscriptionsCrmObjectIdPausePaymentsSubscriptions202609BetaSubscriptionsCrmObjectIdPause",
  "SubscriptionLifecyclePostPaymentsSubscriptions202609BetaSubscriptionsCrmObjectIdUnpausePaymentsSubscriptions202609BetaSubscriptionsCrmObjectIdUnpause",
  "TicketsPostCrmObjects202603TicketsMergeMerge",
  "CmsContentAuditPostCmsAuditLogs202603ExportCmsAuditLogs202603Export",
  "ImportsPostCrmImports202603CrmImportsV3",
  "ImportsPostCrmImports202603ImportIdCancelCrmImportsV3ImportIdCancel",
  "MediaBridgePostMediaBridge202603EventsAttentionSpan",
  "MediaBridgePostMediaBridge202603EventsMediaPlayed",
  "MediaBridgePostMediaBridge202603EventsMediaPlayedPercent",
  "MediaBridgePostMediaBridge202603AppIdSchemasObjectTypeAssociations",
  "MediaBridgePostMediaBridge202603AppIdSettingsObjectDefinitions",
  "MediaBridgePostMediaBridge202603AppIdSettingsRegister",
  "MediaBridgePostMediaBridge202603AppIdSettingsVideoAssociationDefinitionMediaBridgeV1AppIdSettingsVideoAssociationDefinition",
  "CustomObjectsPostCrmObjects202603ObjectTypeMergeMerge",
  "PagesGetCmsPages202603LandingPagesObjectIdRevisionsGetPreviousVersions",
  "PagesGetCmsPages202603LandingPagesObjectIdRevisionsRevisionIdGetPreviousVersion",
  "PagesPostCmsPages202603LandingPagesObjectIdRevisionsRevisionIdRestoreRestorePreviousVersion",
  "PagesPostCmsPages202603LandingPagesObjectIdRevisionsRevisionIdRestoreToDraftRestorePreviousVersionToDraft",
  "PagesPostCmsPages202603SitePagesObjectIdRevisionsRevisionIdRestoreRestorePreviousVersion",
  "CompaniesPostCrmObjects202603CompaniesMergeMerge",
  "BlogSettingsGetCmsBlogSettings202603SettingsBlogIdRevisions",
  "BlogSettingsGetCmsBlogSettings202603SettingsBlogIdRevisionsRevisionId",
  "TimelinePostIntegratorsTimeline202603EventsCreate",
  "TimelinePostIntegratorsTimeline202603TypesProjectsIntegratorsTimeline202603TypesProjects",
  "SingleSendPostMarketingEmailCampaigns202603SingleSendMarketingV4EmailSingleSend",
  "ExportsPostCrmExports202603ExportAsyncStart",
  "ExportsGetCrmExports202603ExportAsyncTasksTaskIdStatusGetStatus",
  "TranscriptionsPostCrmExtensionsCalling202603InboundCallCrmV3ExtensionsCallingInboundCall",
  "TranscriptionsPostCrmExtensionsCalling202603TranscriptsCrmExtensionsCalling202603Transcripts",
  "ContactsPostCrmObjects202603ContactsGdprDeletePurge",
  "ContactsPostCrmObjects202603ContactsMergeMerge",
  "AppointmentsPostCrmObjects202603ObjectTypeGdprDeleteCrmObjectsV3ObjectTypeGdprDelete",
  "AppointmentsPostCrmObjects202603ObjectTypeMergeCrmObjectsV3ObjectTypeMerge",
  "WebhooksPostWebhooksJournalSnapshots202603CrmWebhooksJournalSnapshots202603Crm",
  "WebhooksPostWebhooksJournalSubscriptions202603FiltersWebhooksJournalSubscriptions202603Filters",
  "CallingExtensionsPostCrmExtensionsCalling202603InboundCallCrmV3ExtensionsCallingInboundCall",
  "CallingExtensionsPostCrmExtensionsCalling202603RecordingsReadyMarkAsReady",
  "SchemasPostCrmObjectSchemas202603SchemasObjectTypeAssociationsCreateAssociation",
  "DatasourceIngestionPostDataStudioDataSource202609BetaDatasourceIdDataPushDataStudioDataSource202609BetaDatasourceIdDataPush",
  "WebhooksJournalPostWebhooksJournalSnapshots202603Crm",
  "WebhooksJournalPostWebhooksJournalSubscriptions202603Filters",
  "OauthPostOauth202603TokenOauthV3Token",
  "OauthPostOauth202603TokenIntrospectOauthV3TokenIntrospect",
  "OauthPostOauth202603TokenRevokeOauthV3TokenRevoke",
  "ManageEventDefinitionsPostEvents202603EventDefinitionsEventNameProperty",
  "MeetingsPostScheduler202603MeetingsCalendar",
  "MeetingsPostScheduler202603MeetingsMeetingLinksBook",
  "PublicAppCrmCardsPostCrmExtensionsCardsDev202603AppIdViewsMigrateCrmV3ExtensionsCardsDevAppIdViewsMigrate",
  "ProjectsPostCrmObjects202603ProjectsMerge",
  "SourceCodePostCmsSourceCode202603ExtractAsyncDoAsync",
  "SourceCodeGetCmsSourceCode202603ExtractAsyncTasksTaskIdStatusGetAsyncStatus",
  "SourceCodePutCmsSourceCode202603EnvironmentContentPathCreateOrUpdate",
  "SourceCodePostCmsSourceCode202603EnvironmentContentPathCreate",
  "SourceCodePostCmsSourceCode202603EnvironmentValidatePathDoValidate"
] as const satisfies readonly (keyof HubSpotFullApiAdvancedGeneratedClient)[];

export function createHubSpotFullApiAdvancedGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiAdvancedGeneratedClient {
  return {
    SubscriptionLifecyclePostPaymentsSubscriptions202609BetaSubscriptionsCrmObjectIdCancelPaymentsSubscriptions202609BetaSubscriptionsCrmObjectIdCancel: (...args) => callOperation("crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/cancel_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/cancel", ...(args as HubSpotFullApiOperationArgs<"crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/cancel_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/cancel">)),
    SubscriptionLifecyclePostPaymentsSubscriptions202609BetaSubscriptionsCrmObjectIdPausePaymentsSubscriptions202609BetaSubscriptionsCrmObjectIdPause: (...args) => callOperation("crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/pause_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/pause", ...(args as HubSpotFullApiOperationArgs<"crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/pause_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/pause">)),
    SubscriptionLifecyclePostPaymentsSubscriptions202609BetaSubscriptionsCrmObjectIdUnpausePaymentsSubscriptions202609BetaSubscriptionsCrmObjectIdUnpause: (...args) => callOperation("crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/unpause_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/unpause", ...(args as HubSpotFullApiOperationArgs<"crm:subscription-lifecycle:2026-09-beta:post-/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/unpause_/payments-subscriptions/2026-09-beta/subscriptions/crm/{objectId}/unpause">)),
    TicketsPostCrmObjects202603TicketsMergeMerge: (...args) => callOperation("crm:tickets:2026-03:post-/crm/objects/2026-03/tickets/merge_merge", ...(args as HubSpotFullApiOperationArgs<"crm:tickets:2026-03:post-/crm/objects/2026-03/tickets/merge_merge">)),
    CmsContentAuditPostCmsAuditLogs202603ExportCmsAuditLogs202603Export: (...args) => callOperation("cms:cms-content-audit:2026-03:post-/cms/audit-logs/2026-03/export_/cms/audit-logs/2026-03/export", ...(args as HubSpotFullApiOperationArgs<"cms:cms-content-audit:2026-03:post-/cms/audit-logs/2026-03/export_/cms/audit-logs/2026-03/export">)),
    ImportsPostCrmImports202603CrmImportsV3: (...args) => callOperation("crm:imports:2026-03:post-/crm/imports/2026-03_/crm/imports/v3", ...(args as HubSpotFullApiOperationArgs<"crm:imports:2026-03:post-/crm/imports/2026-03_/crm/imports/v3">)),
    ImportsPostCrmImports202603ImportIdCancelCrmImportsV3ImportIdCancel: (...args) => callOperation("crm:imports:2026-03:post-/crm/imports/2026-03/{importId}/cancel_/crm/imports/v3/{importId}/cancel", ...(args as HubSpotFullApiOperationArgs<"crm:imports:2026-03:post-/crm/imports/2026-03/{importId}/cancel_/crm/imports/v3/{importId}/cancel">)),
    MediaBridgePostMediaBridge202603EventsAttentionSpan: (...args) => callOperation("cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/attention-span", ...(args as HubSpotFullApiOperationArgs<"cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/attention-span">)),
    MediaBridgePostMediaBridge202603EventsMediaPlayed: (...args) => callOperation("cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/media-played", ...(args as HubSpotFullApiOperationArgs<"cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/media-played">)),
    MediaBridgePostMediaBridge202603EventsMediaPlayedPercent: (...args) => callOperation("cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/media-played-percent", ...(args as HubSpotFullApiOperationArgs<"cms:media-bridge:2026-03:post-/media-bridge/2026-03/events/media-played-percent">)),
    MediaBridgePostMediaBridge202603AppIdSchemasObjectTypeAssociations: (...args) => callOperation("cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/schemas/{objectType}/associations", ...(args as HubSpotFullApiOperationArgs<"cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/schemas/{objectType}/associations">)),
    MediaBridgePostMediaBridge202603AppIdSettingsObjectDefinitions: (...args) => callOperation("cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/object-definitions", ...(args as HubSpotFullApiOperationArgs<"cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/object-definitions">)),
    MediaBridgePostMediaBridge202603AppIdSettingsRegister: (...args) => callOperation("cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/register", ...(args as HubSpotFullApiOperationArgs<"cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/register">)),
    MediaBridgePostMediaBridge202603AppIdSettingsVideoAssociationDefinitionMediaBridgeV1AppIdSettingsVideoAssociationDefinition: (...args) => callOperation("cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/video-association-definition_/media-bridge/v1/{appId}/settings/video-association-definition", ...(args as HubSpotFullApiOperationArgs<"cms:media-bridge:2026-03:post-/media-bridge/2026-03/{appId}/settings/video-association-definition_/media-bridge/v1/{appId}/settings/video-association-definition">)),
    CustomObjectsPostCrmObjects202603ObjectTypeMergeMerge: (...args) => callOperation("crm:custom-objects:2026-03:post-/crm/objects/2026-03/{objectType}/merge_merge", ...(args as HubSpotFullApiOperationArgs<"crm:custom-objects:2026-03:post-/crm/objects/2026-03/{objectType}/merge_merge">)),
    PagesGetCmsPages202603LandingPagesObjectIdRevisionsGetPreviousVersions: (...args) => callOperation("cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/revisions_getPreviousVersions", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/revisions_getPreviousVersions">)),
    PagesGetCmsPages202603LandingPagesObjectIdRevisionsRevisionIdGetPreviousVersion: (...args) => callOperation("cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}_getPreviousVersion", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}_getPreviousVersion">)),
    PagesPostCmsPages202603LandingPagesObjectIdRevisionsRevisionIdRestoreRestorePreviousVersion: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion">)),
    PagesPostCmsPages202603LandingPagesObjectIdRevisionsRevisionIdRestoreToDraftRestorePreviousVersionToDraft: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft">)),
    PagesPostCmsPages202603SitePagesObjectIdRevisionsRevisionIdRestoreRestorePreviousVersion: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion">)),
    CompaniesPostCrmObjects202603CompaniesMergeMerge: (...args) => callOperation("crm:companies:2026-03:post-/crm/objects/2026-03/companies/merge_merge", ...(args as HubSpotFullApiOperationArgs<"crm:companies:2026-03:post-/crm/objects/2026-03/companies/merge_merge">)),
    BlogSettingsGetCmsBlogSettings202603SettingsBlogIdRevisions: (...args) => callOperation("cms:blog-settings:2026-03:get-/cms/blog-settings/2026-03/settings/{blogId}/revisions", ...(args as HubSpotFullApiOperationArgs<"cms:blog-settings:2026-03:get-/cms/blog-settings/2026-03/settings/{blogId}/revisions">)),
    BlogSettingsGetCmsBlogSettings202603SettingsBlogIdRevisionsRevisionId: (...args) => callOperation("cms:blog-settings:2026-03:get-/cms/blog-settings/2026-03/settings/{blogId}/revisions/{revisionId}", ...(args as HubSpotFullApiOperationArgs<"cms:blog-settings:2026-03:get-/cms/blog-settings/2026-03/settings/{blogId}/revisions/{revisionId}">)),
    TimelinePostIntegratorsTimeline202603EventsCreate: (...args) => callOperation("crm:timeline:2026-03:post-/integrators/timeline/2026-03/events_create", ...(args as HubSpotFullApiOperationArgs<"crm:timeline:2026-03:post-/integrators/timeline/2026-03/events_create">)),
    TimelinePostIntegratorsTimeline202603TypesProjectsIntegratorsTimeline202603TypesProjects: (...args) => callOperation("crm:timeline:2026-03:post-/integrators/timeline/2026-03/types/projects_/integrators/timeline/2026-03/types/projects", ...(args as HubSpotFullApiOperationArgs<"crm:timeline:2026-03:post-/integrators/timeline/2026-03/types/projects_/integrators/timeline/2026-03/types/projects">)),
    SingleSendPostMarketingEmailCampaigns202603SingleSendMarketingV4EmailSingleSend: (...args) => callOperation("marketing:single-send:2026-03:post-/marketing/email-campaigns/2026-03/single-send_/marketing/v4/email/single-send", ...(args as HubSpotFullApiOperationArgs<"marketing:single-send:2026-03:post-/marketing/email-campaigns/2026-03/single-send_/marketing/v4/email/single-send">)),
    ExportsPostCrmExports202603ExportAsyncStart: (...args) => callOperation("crm:exports:2026-03:post-/crm/exports/2026-03/export/async_start", ...(args as HubSpotFullApiOperationArgs<"crm:exports:2026-03:post-/crm/exports/2026-03/export/async_start">)),
    ExportsGetCrmExports202603ExportAsyncTasksTaskIdStatusGetStatus: (...args) => callOperation("crm:exports:2026-03:get-/crm/exports/2026-03/export/async/tasks/{taskId}/status_getStatus", ...(args as HubSpotFullApiOperationArgs<"crm:exports:2026-03:get-/crm/exports/2026-03/export/async/tasks/{taskId}/status_getStatus">)),
    TranscriptionsPostCrmExtensionsCalling202603InboundCallCrmV3ExtensionsCallingInboundCall: (...args) => callOperation("crm:transcriptions:2026-03:post-/crm/extensions/calling/2026-03/inbound-call_/crm/v3/extensions/calling/inbound-call", ...(args as HubSpotFullApiOperationArgs<"crm:transcriptions:2026-03:post-/crm/extensions/calling/2026-03/inbound-call_/crm/v3/extensions/calling/inbound-call">)),
    TranscriptionsPostCrmExtensionsCalling202603TranscriptsCrmExtensionsCalling202603Transcripts: (...args) => callOperation("crm:transcriptions:2026-03:post-/crm/extensions/calling/2026-03/transcripts_/crm/extensions/calling/2026-03/transcripts", ...(args as HubSpotFullApiOperationArgs<"crm:transcriptions:2026-03:post-/crm/extensions/calling/2026-03/transcripts_/crm/extensions/calling/2026-03/transcripts">)),
    ContactsPostCrmObjects202603ContactsGdprDeletePurge: (...args) => callOperation("crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/gdpr-delete_purge", ...(args as HubSpotFullApiOperationArgs<"crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/gdpr-delete_purge">)),
    ContactsPostCrmObjects202603ContactsMergeMerge: (...args) => callOperation("crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/merge_merge", ...(args as HubSpotFullApiOperationArgs<"crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/merge_merge">)),
    AppointmentsPostCrmObjects202603ObjectTypeGdprDeleteCrmObjectsV3ObjectTypeGdprDelete: (...args) => callOperation("crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/gdpr-delete_/crm/objects/v3/{objectType}/gdpr-delete", ...(args as HubSpotFullApiOperationArgs<"crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/gdpr-delete_/crm/objects/v3/{objectType}/gdpr-delete">)),
    AppointmentsPostCrmObjects202603ObjectTypeMergeCrmObjectsV3ObjectTypeMerge: (...args) => callOperation("crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/merge_/crm/objects/v3/{objectType}/merge", ...(args as HubSpotFullApiOperationArgs<"crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/merge_/crm/objects/v3/{objectType}/merge">)),
    WebhooksPostWebhooksJournalSnapshots202603CrmWebhooksJournalSnapshots202603Crm: (...args) => callOperation("webhooks:webhooks:2026-03:post-/webhooks-journal/snapshots/2026-03/crm_/webhooks-journal/snapshots/2026-03/crm", ...(args as HubSpotFullApiOperationArgs<"webhooks:webhooks:2026-03:post-/webhooks-journal/snapshots/2026-03/crm_/webhooks-journal/snapshots/2026-03/crm">)),
    WebhooksPostWebhooksJournalSubscriptions202603FiltersWebhooksJournalSubscriptions202603Filters: (...args) => callOperation("webhooks:webhooks:2026-03:post-/webhooks-journal/subscriptions/2026-03/filters_/webhooks-journal/subscriptions/2026-03/filters", ...(args as HubSpotFullApiOperationArgs<"webhooks:webhooks:2026-03:post-/webhooks-journal/subscriptions/2026-03/filters_/webhooks-journal/subscriptions/2026-03/filters">)),
    CallingExtensionsPostCrmExtensionsCalling202603InboundCallCrmV3ExtensionsCallingInboundCall: (...args) => callOperation("crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/inbound-call_/crm/v3/extensions/calling/inbound-call", ...(args as HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/inbound-call_/crm/v3/extensions/calling/inbound-call">)),
    CallingExtensionsPostCrmExtensionsCalling202603RecordingsReadyMarkAsReady: (...args) => callOperation("crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/recordings/ready_markAsReady", ...(args as HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/recordings/ready_markAsReady">)),
    SchemasPostCrmObjectSchemas202603SchemasObjectTypeAssociationsCreateAssociation: (...args) => callOperation("crm:schemas:2026-03:post-/crm-object-schemas/2026-03/schemas/{objectType}/associations_createAssociation", ...(args as HubSpotFullApiOperationArgs<"crm:schemas:2026-03:post-/crm-object-schemas/2026-03/schemas/{objectType}/associations_createAssociation">)),
    DatasourceIngestionPostDataStudioDataSource202609BetaDatasourceIdDataPushDataStudioDataSource202609BetaDatasourceIdDataPush: (...args) => callOperation("data-studio:datasource-ingestion:2026-09-beta:post-/data-studio/data-source/2026-09-beta/{datasourceId}/data-push_/data-studio/data-source/2026-09-beta/{datasourceId}/data-push", ...(args as HubSpotFullApiOperationArgs<"data-studio:datasource-ingestion:2026-09-beta:post-/data-studio/data-source/2026-09-beta/{datasourceId}/data-push_/data-studio/data-source/2026-09-beta/{datasourceId}/data-push">)),
    WebhooksJournalPostWebhooksJournalSnapshots202603Crm: (...args) => callOperation("webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/snapshots/2026-03/crm", ...(args as HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/snapshots/2026-03/crm">)),
    WebhooksJournalPostWebhooksJournalSubscriptions202603Filters: (...args) => callOperation("webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/subscriptions/2026-03/filters", ...(args as HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/subscriptions/2026-03/filters">)),
    OauthPostOauth202603TokenOauthV3Token: (...args) => callOperation("auth:oauth:2026-03:post-/oauth/2026-03/token_/oauth/v3/token", ...(args as HubSpotFullApiOperationArgs<"auth:oauth:2026-03:post-/oauth/2026-03/token_/oauth/v3/token">)),
    OauthPostOauth202603TokenIntrospectOauthV3TokenIntrospect: (...args) => callOperation("auth:oauth:2026-03:post-/oauth/2026-03/token/introspect_/oauth/v3/token/introspect", ...(args as HubSpotFullApiOperationArgs<"auth:oauth:2026-03:post-/oauth/2026-03/token/introspect_/oauth/v3/token/introspect">)),
    OauthPostOauth202603TokenRevokeOauthV3TokenRevoke: (...args) => callOperation("auth:oauth:2026-03:post-/oauth/2026-03/token/revoke_/oauth/v3/token/revoke", ...(args as HubSpotFullApiOperationArgs<"auth:oauth:2026-03:post-/oauth/2026-03/token/revoke_/oauth/v3/token/revoke">)),
    ManageEventDefinitionsPostEvents202603EventDefinitionsEventNameProperty: (...args) => callOperation("events:manage-event-definitions:2026-03:post-/events/2026-03/event-definitions/{eventName}/property", ...(args as HubSpotFullApiOperationArgs<"events:manage-event-definitions:2026-03:post-/events/2026-03/event-definitions/{eventName}/property">)),
    MeetingsPostScheduler202603MeetingsCalendar: (...args) => callOperation("scheduler:meetings:2026-03:post-/scheduler/2026-03/meetings/calendar", ...(args as HubSpotFullApiOperationArgs<"scheduler:meetings:2026-03:post-/scheduler/2026-03/meetings/calendar">)),
    MeetingsPostScheduler202603MeetingsMeetingLinksBook: (...args) => callOperation("scheduler:meetings:2026-03:post-/scheduler/2026-03/meetings/meeting-links/book", ...(args as HubSpotFullApiOperationArgs<"scheduler:meetings:2026-03:post-/scheduler/2026-03/meetings/meeting-links/book">)),
    PublicAppCrmCardsPostCrmExtensionsCardsDev202603AppIdViewsMigrateCrmV3ExtensionsCardsDevAppIdViewsMigrate: (...args) => callOperation("crm:public-app-crm-cards:2026-03:post-/crm/extensions/cards-dev/2026-03/{appId}/views/migrate_/crm/v3/extensions/cards-dev/{appId}/views/migrate", ...(args as HubSpotFullApiOperationArgs<"crm:public-app-crm-cards:2026-03:post-/crm/extensions/cards-dev/2026-03/{appId}/views/migrate_/crm/v3/extensions/cards-dev/{appId}/views/migrate">)),
    ProjectsPostCrmObjects202603ProjectsMerge: (...args) => callOperation("crm:projects:2026-03:post-/crm/objects/2026-03/projects/merge", ...(args as HubSpotFullApiOperationArgs<"crm:projects:2026-03:post-/crm/objects/2026-03/projects/merge">)),
    SourceCodePostCmsSourceCode202603ExtractAsyncDoAsync: (...args) => callOperation("cms:source-code:2026-03:post-/cms/source-code/2026-03/extract/async_doAsync", ...(args as HubSpotFullApiOperationArgs<"cms:source-code:2026-03:post-/cms/source-code/2026-03/extract/async_doAsync">)),
    SourceCodeGetCmsSourceCode202603ExtractAsyncTasksTaskIdStatusGetAsyncStatus: (...args) => callOperation("cms:source-code:2026-03:get-/cms/source-code/2026-03/extract/async/tasks/{taskId}/status_getAsyncStatus", ...(args as HubSpotFullApiOperationArgs<"cms:source-code:2026-03:get-/cms/source-code/2026-03/extract/async/tasks/{taskId}/status_getAsyncStatus">)),
    SourceCodePutCmsSourceCode202603EnvironmentContentPathCreateOrUpdate: (...args) => callOperation("cms:source-code:2026-03:put-/cms/source-code/2026-03/{environment}/content/{path}_createOrUpdate", ...(args as HubSpotFullApiOperationArgs<"cms:source-code:2026-03:put-/cms/source-code/2026-03/{environment}/content/{path}_createOrUpdate">)),
    SourceCodePostCmsSourceCode202603EnvironmentContentPathCreate: (...args) => callOperation("cms:source-code:2026-03:post-/cms/source-code/2026-03/{environment}/content/{path}_create", ...(args as HubSpotFullApiOperationArgs<"cms:source-code:2026-03:post-/cms/source-code/2026-03/{environment}/content/{path}_create">)),
    SourceCodePostCmsSourceCode202603EnvironmentValidatePathDoValidate: (...args) => callOperation("cms:source-code:2026-03:post-/cms/source-code/2026-03/{environment}/validate/{path}_doValidate", ...(args as HubSpotFullApiOperationArgs<"cms:source-code:2026-03:post-/cms/source-code/2026-03/{environment}/validate/{path}_doValidate">)),
  };
}
