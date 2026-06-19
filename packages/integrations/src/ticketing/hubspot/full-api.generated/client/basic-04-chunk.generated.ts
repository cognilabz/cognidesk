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
export const HubSpotFullApiBasic04OperationKeys = [
  "crm:meetings:2026-03:post-/crm/objects/2026-03/meetings_create",
  "crm:meetings:2026-03:get-/crm/objects/2026-03/meetings/{meetingId}_getById",
  "crm:meetings:2026-03:delete-/crm/objects/2026-03/meetings/{meetingId}_archive",
  "crm:meetings:2026-03:patch-/crm/objects/2026-03/meetings/{meetingId}_update",
  "crm:meetings:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}",
  "crm:meetings:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}",
  "automation:sequences:2026-03:get-/automation/sequences/2026-03_/automation/sequences/2026-03",
  "automation:sequences:2026-03:post-/automation/sequences/2026-03/enrollments",
  "automation:sequences:2026-03:get-/automation/sequences/2026-03/enrollments/contact/{contactId}",
  "automation:sequences:2026-03:get-/automation/sequences/2026-03/{sequenceId}",
  "crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings_get",
  "crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings_create",
  "crm:calling-extensions:2026-03:delete-/crm/extensions/calling/2026-03/{appId}/settings_remove",
  "crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings_update",
  "crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_get",
  "crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_create",
  "crm:calling-extensions:2026-03:delete-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_remove",
  "crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_update",
  "crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings/recording_get",
  "crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings/recording_create",
  "crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings/recording_update",
  "crm:taxes:2026-03:get-/crm/objects/2026-03/taxes_getPage",
  "crm:taxes:2026-03:post-/crm/objects/2026-03/taxes_create",
  "crm:taxes:2026-03:get-/crm/objects/2026-03/taxes/{taxId}_getById",
  "crm:taxes:2026-03:delete-/crm/objects/2026-03/taxes/{taxId}_archive",
  "crm:taxes:2026-03:patch-/crm/objects/2026-03/taxes/{taxId}_update",
  "crm:taxes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}",
  "crm:taxes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}",
  "crm:schemas:2026-03:get-/crm-object-schemas/2026-03/schemas_getAll",
  "crm:schemas:2026-03:post-/crm-object-schemas/2026-03/schemas_create",
  "crm:schemas:2026-03:get-/crm-object-schemas/2026-03/schemas/{objectType}_getById",
  "crm:schemas:2026-03:delete-/crm-object-schemas/2026-03/schemas/{objectType}_archive",
  "crm:schemas:2026-03:patch-/crm-object-schemas/2026-03/schemas/{objectType}_update",
  "crm:schemas:2026-03:delete-/crm-object-schemas/2026-03/schemas/{objectType}/associations/{associationIdentifier}_archiveAssociation",
  "data-studio:datasource-ingestion:2026-09-beta:post-/data-studio/data-source/2026-09-beta",
  "data-studio:datasource-ingestion:2026-09-beta:get-/data-studio/data-source/2026-09-beta/{datasourceId}",
  "data-studio:datasource-ingestion:2026-09-beta:put-/data-studio/data-source/2026-09-beta/{datasourceId}",
  "data-studio:datasource-ingestion:2026-09-beta:delete-/data-studio/data-source/2026-09-beta/{datasourceId}",
  "business-units:business-units:2026-03:get-/business-units/public/2026-03/business-units/user/{userId}_getByUserID",
  "cms:site-search:2026-03:get-/cms/site-search/2026-03/indexed-data/{contentId}_getById",
  "crm:listings:2026-03:get-/crm/objects/2026-03/0-420",
  "crm:listings:2026-03:post-/crm/objects/2026-03/0-420",
  "crm:listings:2026-03:get-/crm/objects/2026-03/0-420/{listingId}",
  "crm:listings:2026-03:delete-/crm/objects/2026-03/0-420/{listingId}",
  "crm:listings:2026-03:patch-/crm/objects/2026-03/0-420/{listingId}",
  "crm:listings:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}",
  "crm:listings:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}",
  "cms:posts:2026-03:get-/cms/blogs/2026-03/authors/cursor_/cms/blogs/v3/authors/cursor",
  "cms:posts:2026-03:get-/cms/blogs/2026-03/authors/cursor/query_/cms/blogs/v3/authors/cursor/query",
  "cms:posts:2026-03:get-/cms/blogs/2026-03/posts_getPage",
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts_create",
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/clone_clone",
  "cms:posts:2026-03:get-/cms/blogs/2026-03/posts/cursor_/cms/blogs/v3/posts/cursor",
  "cms:posts:2026-03:get-/cms/blogs/2026-03/posts/cursor/query_/cms/blogs/v3/posts/cursor/query",
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/schedule_schedule",
  "cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}_getById",
  "cms:posts:2026-03:delete-/cms/blogs/2026-03/posts/{objectId}_archive",
  "cms:posts:2026-03:patch-/cms/blogs/2026-03/posts/{objectId}_update",
  "cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/draft_getDraftById",
  "cms:posts:2026-03:patch-/cms/blogs/2026-03/posts/{objectId}/draft_updateDraft",
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/draft/push-live_pushLive",
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/draft/reset_resetDraft",
  "cms:posts:2026-03:get-/cms/blogs/2026-03/tags/cursor_/cms/blogs/v3/tags/cursor",
  "cms:posts:2026-03:get-/cms/blogs/2026-03/tags/cursor/query_/cms/blogs/v3/tags/cursor/query",
  "crm:associations:2026-03:post-/crm/associations/2026-03/usage/high-usage-report/{userId}_/crm/associations/2025-09/usage/high-usage-report/{userId}",
  "crm:associations:2026-03:get-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}",
  "crm:associations:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}",
  "crm:associations:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}",
  "crm:forecast-types:3:get-/forecast-settings/v3/forecast-types_/forecast-settings/v3/forecast-types",
  "crm:forecast-types:3:get-/forecast-settings/v3/forecast-types/{forecastTypeId}_/forecast-settings/v3/forecast-types/{forecastTypeId}",
  "account:audit-logs:2026-03:get-/account-info/2026-03/activity/audit-logs",
  "account:audit-logs:2026-03:get-/account-info/2026-03/activity/login",
  "account:audit-logs:2026-03:get-/account-info/2026-03/activity/security",
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/earliest",
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/latest",
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/offset/{offset}/next",
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/status/{statusId}",
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/earliest",
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/latest",
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/offset/{offset}/next"
] as const;
export type HubSpotFullApiBasic04OperationKey = typeof HubSpotFullApiBasic04OperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiBasic04OperationPathParamMap {
  "crm:meetings:2026-03:post-/crm/objects/2026-03/meetings_create": {};
  "crm:meetings:2026-03:get-/crm/objects/2026-03/meetings/{meetingId}_getById": { "meetingId": HubSpotFullApiPathParamValue };
  "crm:meetings:2026-03:delete-/crm/objects/2026-03/meetings/{meetingId}_archive": { "meetingId": HubSpotFullApiPathParamValue };
  "crm:meetings:2026-03:patch-/crm/objects/2026-03/meetings/{meetingId}_update": { "meetingId": HubSpotFullApiPathParamValue };
  "crm:meetings:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:meetings:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "automation:sequences:2026-03:get-/automation/sequences/2026-03_/automation/sequences/2026-03": {};
  "automation:sequences:2026-03:post-/automation/sequences/2026-03/enrollments": {};
  "automation:sequences:2026-03:get-/automation/sequences/2026-03/enrollments/contact/{contactId}": { "contactId": HubSpotFullApiPathParamValue };
  "automation:sequences:2026-03:get-/automation/sequences/2026-03/{sequenceId}": { "sequenceId": HubSpotFullApiPathParamValue };
  "crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings_get": { "appId": HubSpotFullApiPathParamValue };
  "crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings_create": { "appId": HubSpotFullApiPathParamValue };
  "crm:calling-extensions:2026-03:delete-/crm/extensions/calling/2026-03/{appId}/settings_remove": { "appId": HubSpotFullApiPathParamValue };
  "crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings_update": { "appId": HubSpotFullApiPathParamValue };
  "crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_get": { "appId": HubSpotFullApiPathParamValue };
  "crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_create": { "appId": HubSpotFullApiPathParamValue };
  "crm:calling-extensions:2026-03:delete-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_remove": { "appId": HubSpotFullApiPathParamValue };
  "crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_update": { "appId": HubSpotFullApiPathParamValue };
  "crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings/recording_get": { "appId": HubSpotFullApiPathParamValue };
  "crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings/recording_create": { "appId": HubSpotFullApiPathParamValue };
  "crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings/recording_update": { "appId": HubSpotFullApiPathParamValue };
  "crm:taxes:2026-03:get-/crm/objects/2026-03/taxes_getPage": {};
  "crm:taxes:2026-03:post-/crm/objects/2026-03/taxes_create": {};
  "crm:taxes:2026-03:get-/crm/objects/2026-03/taxes/{taxId}_getById": { "taxId": HubSpotFullApiPathParamValue };
  "crm:taxes:2026-03:delete-/crm/objects/2026-03/taxes/{taxId}_archive": { "taxId": HubSpotFullApiPathParamValue };
  "crm:taxes:2026-03:patch-/crm/objects/2026-03/taxes/{taxId}_update": { "taxId": HubSpotFullApiPathParamValue };
  "crm:taxes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:taxes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:schemas:2026-03:get-/crm-object-schemas/2026-03/schemas_getAll": {};
  "crm:schemas:2026-03:post-/crm-object-schemas/2026-03/schemas_create": {};
  "crm:schemas:2026-03:get-/crm-object-schemas/2026-03/schemas/{objectType}_getById": { "objectType": HubSpotFullApiPathParamValue };
  "crm:schemas:2026-03:delete-/crm-object-schemas/2026-03/schemas/{objectType}_archive": { "objectType": HubSpotFullApiPathParamValue };
  "crm:schemas:2026-03:patch-/crm-object-schemas/2026-03/schemas/{objectType}_update": { "objectType": HubSpotFullApiPathParamValue };
  "crm:schemas:2026-03:delete-/crm-object-schemas/2026-03/schemas/{objectType}/associations/{associationIdentifier}_archiveAssociation": { "objectType": HubSpotFullApiPathParamValue; "associationIdentifier": HubSpotFullApiPathParamValue };
  "data-studio:datasource-ingestion:2026-09-beta:post-/data-studio/data-source/2026-09-beta": {};
  "data-studio:datasource-ingestion:2026-09-beta:get-/data-studio/data-source/2026-09-beta/{datasourceId}": { "datasourceId": HubSpotFullApiPathParamValue };
  "data-studio:datasource-ingestion:2026-09-beta:put-/data-studio/data-source/2026-09-beta/{datasourceId}": { "datasourceId": HubSpotFullApiPathParamValue };
  "data-studio:datasource-ingestion:2026-09-beta:delete-/data-studio/data-source/2026-09-beta/{datasourceId}": { "datasourceId": HubSpotFullApiPathParamValue };
  "business-units:business-units:2026-03:get-/business-units/public/2026-03/business-units/user/{userId}_getByUserID": { "userId": HubSpotFullApiPathParamValue };
  "cms:site-search:2026-03:get-/cms/site-search/2026-03/indexed-data/{contentId}_getById": { "contentId": HubSpotFullApiPathParamValue };
  "crm:listings:2026-03:get-/crm/objects/2026-03/0-420": {};
  "crm:listings:2026-03:post-/crm/objects/2026-03/0-420": {};
  "crm:listings:2026-03:get-/crm/objects/2026-03/0-420/{listingId}": { "listingId": HubSpotFullApiPathParamValue };
  "crm:listings:2026-03:delete-/crm/objects/2026-03/0-420/{listingId}": { "listingId": HubSpotFullApiPathParamValue };
  "crm:listings:2026-03:patch-/crm/objects/2026-03/0-420/{listingId}": { "listingId": HubSpotFullApiPathParamValue };
  "crm:listings:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:listings:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "cms:posts:2026-03:get-/cms/blogs/2026-03/authors/cursor_/cms/blogs/v3/authors/cursor": {};
  "cms:posts:2026-03:get-/cms/blogs/2026-03/authors/cursor/query_/cms/blogs/v3/authors/cursor/query": {};
  "cms:posts:2026-03:get-/cms/blogs/2026-03/posts_getPage": {};
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts_create": {};
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/clone_clone": {};
  "cms:posts:2026-03:get-/cms/blogs/2026-03/posts/cursor_/cms/blogs/v3/posts/cursor": {};
  "cms:posts:2026-03:get-/cms/blogs/2026-03/posts/cursor/query_/cms/blogs/v3/posts/cursor/query": {};
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/schedule_schedule": {};
  "cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}_getById": { "objectId": HubSpotFullApiPathParamValue };
  "cms:posts:2026-03:delete-/cms/blogs/2026-03/posts/{objectId}_archive": { "objectId": HubSpotFullApiPathParamValue };
  "cms:posts:2026-03:patch-/cms/blogs/2026-03/posts/{objectId}_update": { "objectId": HubSpotFullApiPathParamValue };
  "cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/draft_getDraftById": { "objectId": HubSpotFullApiPathParamValue };
  "cms:posts:2026-03:patch-/cms/blogs/2026-03/posts/{objectId}/draft_updateDraft": { "objectId": HubSpotFullApiPathParamValue };
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/draft/push-live_pushLive": { "objectId": HubSpotFullApiPathParamValue };
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/draft/reset_resetDraft": { "objectId": HubSpotFullApiPathParamValue };
  "cms:posts:2026-03:get-/cms/blogs/2026-03/tags/cursor_/cms/blogs/v3/tags/cursor": {};
  "cms:posts:2026-03:get-/cms/blogs/2026-03/tags/cursor/query_/cms/blogs/v3/tags/cursor/query": {};
  "crm:associations:2026-03:post-/crm/associations/2026-03/usage/high-usage-report/{userId}_/crm/associations/2025-09/usage/high-usage-report/{userId}": { "userId": HubSpotFullApiPathParamValue };
  "crm:associations:2026-03:get-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue };
  "crm:associations:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:associations:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": { "objectType": HubSpotFullApiPathParamValue; "objectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:forecast-types:3:get-/forecast-settings/v3/forecast-types_/forecast-settings/v3/forecast-types": {};
  "crm:forecast-types:3:get-/forecast-settings/v3/forecast-types/{forecastTypeId}_/forecast-settings/v3/forecast-types/{forecastTypeId}": { "forecastTypeId": HubSpotFullApiPathParamValue };
  "account:audit-logs:2026-03:get-/account-info/2026-03/activity/audit-logs": {};
  "account:audit-logs:2026-03:get-/account-info/2026-03/activity/login": {};
  "account:audit-logs:2026-03:get-/account-info/2026-03/activity/security": {};
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/earliest": {};
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/latest": {};
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/offset/{offset}/next": { "offset": HubSpotFullApiPathParamValue };
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/status/{statusId}": { "statusId": HubSpotFullApiPathParamValue };
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/earliest": {};
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/latest": {};
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/offset/{offset}/next": { "offset": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiBasic04OperationRequestMap {
  "crm:meetings:2026-03:post-/crm/objects/2026-03/meetings_create": HubSpotFullApiOperationInput<"crm:meetings:2026-03:post-/crm/objects/2026-03/meetings_create">;
  "crm:meetings:2026-03:get-/crm/objects/2026-03/meetings/{meetingId}_getById": HubSpotFullApiOperationInput<"crm:meetings:2026-03:get-/crm/objects/2026-03/meetings/{meetingId}_getById">;
  "crm:meetings:2026-03:delete-/crm/objects/2026-03/meetings/{meetingId}_archive": HubSpotFullApiOperationInput<"crm:meetings:2026-03:delete-/crm/objects/2026-03/meetings/{meetingId}_archive">;
  "crm:meetings:2026-03:patch-/crm/objects/2026-03/meetings/{meetingId}_update": HubSpotFullApiOperationInput<"crm:meetings:2026-03:patch-/crm/objects/2026-03/meetings/{meetingId}_update">;
  "crm:meetings:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:meetings:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">;
  "crm:meetings:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:meetings:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">;
  "automation:sequences:2026-03:get-/automation/sequences/2026-03_/automation/sequences/2026-03": HubSpotFullApiOperationInput<"automation:sequences:2026-03:get-/automation/sequences/2026-03_/automation/sequences/2026-03">;
  "automation:sequences:2026-03:post-/automation/sequences/2026-03/enrollments": HubSpotFullApiOperationInput<"automation:sequences:2026-03:post-/automation/sequences/2026-03/enrollments">;
  "automation:sequences:2026-03:get-/automation/sequences/2026-03/enrollments/contact/{contactId}": HubSpotFullApiOperationInput<"automation:sequences:2026-03:get-/automation/sequences/2026-03/enrollments/contact/{contactId}">;
  "automation:sequences:2026-03:get-/automation/sequences/2026-03/{sequenceId}": HubSpotFullApiOperationInput<"automation:sequences:2026-03:get-/automation/sequences/2026-03/{sequenceId}">;
  "crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings_get": HubSpotFullApiOperationInput<"crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings_get">;
  "crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings_create": HubSpotFullApiOperationInput<"crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings_create">;
  "crm:calling-extensions:2026-03:delete-/crm/extensions/calling/2026-03/{appId}/settings_remove": HubSpotFullApiOperationInput<"crm:calling-extensions:2026-03:delete-/crm/extensions/calling/2026-03/{appId}/settings_remove">;
  "crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings_update": HubSpotFullApiOperationInput<"crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings_update">;
  "crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_get": HubSpotFullApiOperationInput<"crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_get">;
  "crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_create": HubSpotFullApiOperationInput<"crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_create">;
  "crm:calling-extensions:2026-03:delete-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_remove": HubSpotFullApiOperationInput<"crm:calling-extensions:2026-03:delete-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_remove">;
  "crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_update": HubSpotFullApiOperationInput<"crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_update">;
  "crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings/recording_get": HubSpotFullApiOperationInput<"crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings/recording_get">;
  "crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings/recording_create": HubSpotFullApiOperationInput<"crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings/recording_create">;
  "crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings/recording_update": HubSpotFullApiOperationInput<"crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings/recording_update">;
  "crm:taxes:2026-03:get-/crm/objects/2026-03/taxes_getPage": HubSpotFullApiOperationInput<"crm:taxes:2026-03:get-/crm/objects/2026-03/taxes_getPage">;
  "crm:taxes:2026-03:post-/crm/objects/2026-03/taxes_create": HubSpotFullApiOperationInput<"crm:taxes:2026-03:post-/crm/objects/2026-03/taxes_create">;
  "crm:taxes:2026-03:get-/crm/objects/2026-03/taxes/{taxId}_getById": HubSpotFullApiOperationInput<"crm:taxes:2026-03:get-/crm/objects/2026-03/taxes/{taxId}_getById">;
  "crm:taxes:2026-03:delete-/crm/objects/2026-03/taxes/{taxId}_archive": HubSpotFullApiOperationInput<"crm:taxes:2026-03:delete-/crm/objects/2026-03/taxes/{taxId}_archive">;
  "crm:taxes:2026-03:patch-/crm/objects/2026-03/taxes/{taxId}_update": HubSpotFullApiOperationInput<"crm:taxes:2026-03:patch-/crm/objects/2026-03/taxes/{taxId}_update">;
  "crm:taxes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:taxes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">;
  "crm:taxes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:taxes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">;
  "crm:schemas:2026-03:get-/crm-object-schemas/2026-03/schemas_getAll": HubSpotFullApiOperationInput<"crm:schemas:2026-03:get-/crm-object-schemas/2026-03/schemas_getAll">;
  "crm:schemas:2026-03:post-/crm-object-schemas/2026-03/schemas_create": HubSpotFullApiOperationInput<"crm:schemas:2026-03:post-/crm-object-schemas/2026-03/schemas_create">;
  "crm:schemas:2026-03:get-/crm-object-schemas/2026-03/schemas/{objectType}_getById": HubSpotFullApiOperationInput<"crm:schemas:2026-03:get-/crm-object-schemas/2026-03/schemas/{objectType}_getById">;
  "crm:schemas:2026-03:delete-/crm-object-schemas/2026-03/schemas/{objectType}_archive": HubSpotFullApiOperationInput<"crm:schemas:2026-03:delete-/crm-object-schemas/2026-03/schemas/{objectType}_archive">;
  "crm:schemas:2026-03:patch-/crm-object-schemas/2026-03/schemas/{objectType}_update": HubSpotFullApiOperationInput<"crm:schemas:2026-03:patch-/crm-object-schemas/2026-03/schemas/{objectType}_update">;
  "crm:schemas:2026-03:delete-/crm-object-schemas/2026-03/schemas/{objectType}/associations/{associationIdentifier}_archiveAssociation": HubSpotFullApiOperationInput<"crm:schemas:2026-03:delete-/crm-object-schemas/2026-03/schemas/{objectType}/associations/{associationIdentifier}_archiveAssociation">;
  "data-studio:datasource-ingestion:2026-09-beta:post-/data-studio/data-source/2026-09-beta": HubSpotFullApiOperationInput<"data-studio:datasource-ingestion:2026-09-beta:post-/data-studio/data-source/2026-09-beta">;
  "data-studio:datasource-ingestion:2026-09-beta:get-/data-studio/data-source/2026-09-beta/{datasourceId}": HubSpotFullApiOperationInput<"data-studio:datasource-ingestion:2026-09-beta:get-/data-studio/data-source/2026-09-beta/{datasourceId}">;
  "data-studio:datasource-ingestion:2026-09-beta:put-/data-studio/data-source/2026-09-beta/{datasourceId}": HubSpotFullApiOperationInput<"data-studio:datasource-ingestion:2026-09-beta:put-/data-studio/data-source/2026-09-beta/{datasourceId}">;
  "data-studio:datasource-ingestion:2026-09-beta:delete-/data-studio/data-source/2026-09-beta/{datasourceId}": HubSpotFullApiOperationInput<"data-studio:datasource-ingestion:2026-09-beta:delete-/data-studio/data-source/2026-09-beta/{datasourceId}">;
  "business-units:business-units:2026-03:get-/business-units/public/2026-03/business-units/user/{userId}_getByUserID": HubSpotFullApiOperationInput<"business-units:business-units:2026-03:get-/business-units/public/2026-03/business-units/user/{userId}_getByUserID">;
  "cms:site-search:2026-03:get-/cms/site-search/2026-03/indexed-data/{contentId}_getById": HubSpotFullApiOperationInput<"cms:site-search:2026-03:get-/cms/site-search/2026-03/indexed-data/{contentId}_getById">;
  "crm:listings:2026-03:get-/crm/objects/2026-03/0-420": HubSpotFullApiOperationInput<"crm:listings:2026-03:get-/crm/objects/2026-03/0-420">;
  "crm:listings:2026-03:post-/crm/objects/2026-03/0-420": HubSpotFullApiOperationInput<"crm:listings:2026-03:post-/crm/objects/2026-03/0-420">;
  "crm:listings:2026-03:get-/crm/objects/2026-03/0-420/{listingId}": HubSpotFullApiOperationInput<"crm:listings:2026-03:get-/crm/objects/2026-03/0-420/{listingId}">;
  "crm:listings:2026-03:delete-/crm/objects/2026-03/0-420/{listingId}": HubSpotFullApiOperationInput<"crm:listings:2026-03:delete-/crm/objects/2026-03/0-420/{listingId}">;
  "crm:listings:2026-03:patch-/crm/objects/2026-03/0-420/{listingId}": HubSpotFullApiOperationInput<"crm:listings:2026-03:patch-/crm/objects/2026-03/0-420/{listingId}">;
  "crm:listings:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:listings:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">;
  "crm:listings:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:listings:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">;
  "cms:posts:2026-03:get-/cms/blogs/2026-03/authors/cursor_/cms/blogs/v3/authors/cursor": HubSpotFullApiOperationInput<"cms:posts:2026-03:get-/cms/blogs/2026-03/authors/cursor_/cms/blogs/v3/authors/cursor">;
  "cms:posts:2026-03:get-/cms/blogs/2026-03/authors/cursor/query_/cms/blogs/v3/authors/cursor/query": HubSpotFullApiOperationInput<"cms:posts:2026-03:get-/cms/blogs/2026-03/authors/cursor/query_/cms/blogs/v3/authors/cursor/query">;
  "cms:posts:2026-03:get-/cms/blogs/2026-03/posts_getPage": HubSpotFullApiOperationInput<"cms:posts:2026-03:get-/cms/blogs/2026-03/posts_getPage">;
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts_create": HubSpotFullApiOperationInput<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts_create">;
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/clone_clone": HubSpotFullApiOperationInput<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/clone_clone">;
  "cms:posts:2026-03:get-/cms/blogs/2026-03/posts/cursor_/cms/blogs/v3/posts/cursor": HubSpotFullApiOperationInput<"cms:posts:2026-03:get-/cms/blogs/2026-03/posts/cursor_/cms/blogs/v3/posts/cursor">;
  "cms:posts:2026-03:get-/cms/blogs/2026-03/posts/cursor/query_/cms/blogs/v3/posts/cursor/query": HubSpotFullApiOperationInput<"cms:posts:2026-03:get-/cms/blogs/2026-03/posts/cursor/query_/cms/blogs/v3/posts/cursor/query">;
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/schedule_schedule": HubSpotFullApiOperationInput<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/schedule_schedule">;
  "cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}_getById": HubSpotFullApiOperationInput<"cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}_getById">;
  "cms:posts:2026-03:delete-/cms/blogs/2026-03/posts/{objectId}_archive": HubSpotFullApiOperationInput<"cms:posts:2026-03:delete-/cms/blogs/2026-03/posts/{objectId}_archive">;
  "cms:posts:2026-03:patch-/cms/blogs/2026-03/posts/{objectId}_update": HubSpotFullApiOperationInput<"cms:posts:2026-03:patch-/cms/blogs/2026-03/posts/{objectId}_update">;
  "cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/draft_getDraftById": HubSpotFullApiOperationInput<"cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/draft_getDraftById">;
  "cms:posts:2026-03:patch-/cms/blogs/2026-03/posts/{objectId}/draft_updateDraft": HubSpotFullApiOperationInput<"cms:posts:2026-03:patch-/cms/blogs/2026-03/posts/{objectId}/draft_updateDraft">;
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/draft/push-live_pushLive": HubSpotFullApiOperationInput<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/draft/push-live_pushLive">;
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/draft/reset_resetDraft": HubSpotFullApiOperationInput<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/draft/reset_resetDraft">;
  "cms:posts:2026-03:get-/cms/blogs/2026-03/tags/cursor_/cms/blogs/v3/tags/cursor": HubSpotFullApiOperationInput<"cms:posts:2026-03:get-/cms/blogs/2026-03/tags/cursor_/cms/blogs/v3/tags/cursor">;
  "cms:posts:2026-03:get-/cms/blogs/2026-03/tags/cursor/query_/cms/blogs/v3/tags/cursor/query": HubSpotFullApiOperationInput<"cms:posts:2026-03:get-/cms/blogs/2026-03/tags/cursor/query_/cms/blogs/v3/tags/cursor/query">;
  "crm:associations:2026-03:post-/crm/associations/2026-03/usage/high-usage-report/{userId}_/crm/associations/2025-09/usage/high-usage-report/{userId}": HubSpotFullApiOperationInput<"crm:associations:2026-03:post-/crm/associations/2026-03/usage/high-usage-report/{userId}_/crm/associations/2025-09/usage/high-usage-report/{userId}">;
  "crm:associations:2026-03:get-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}": HubSpotFullApiOperationInput<"crm:associations:2026-03:get-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}">;
  "crm:associations:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:associations:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">;
  "crm:associations:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:associations:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">;
  "crm:forecast-types:3:get-/forecast-settings/v3/forecast-types_/forecast-settings/v3/forecast-types": HubSpotFullApiOperationInput<"crm:forecast-types:3:get-/forecast-settings/v3/forecast-types_/forecast-settings/v3/forecast-types">;
  "crm:forecast-types:3:get-/forecast-settings/v3/forecast-types/{forecastTypeId}_/forecast-settings/v3/forecast-types/{forecastTypeId}": HubSpotFullApiOperationInput<"crm:forecast-types:3:get-/forecast-settings/v3/forecast-types/{forecastTypeId}_/forecast-settings/v3/forecast-types/{forecastTypeId}">;
  "account:audit-logs:2026-03:get-/account-info/2026-03/activity/audit-logs": HubSpotFullApiOperationInput<"account:audit-logs:2026-03:get-/account-info/2026-03/activity/audit-logs">;
  "account:audit-logs:2026-03:get-/account-info/2026-03/activity/login": HubSpotFullApiOperationInput<"account:audit-logs:2026-03:get-/account-info/2026-03/activity/login">;
  "account:audit-logs:2026-03:get-/account-info/2026-03/activity/security": HubSpotFullApiOperationInput<"account:audit-logs:2026-03:get-/account-info/2026-03/activity/security">;
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/earliest": HubSpotFullApiOperationInput<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/earliest">;
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/latest": HubSpotFullApiOperationInput<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/latest">;
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/offset/{offset}/next": HubSpotFullApiOperationInput<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/offset/{offset}/next">;
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/status/{statusId}": HubSpotFullApiOperationInput<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/status/{statusId}">;
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/earliest": HubSpotFullApiOperationInput<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/earliest">;
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/latest": HubSpotFullApiOperationInput<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/latest">;
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/offset/{offset}/next": HubSpotFullApiOperationInput<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/offset/{offset}/next">;
}

export interface HubSpotFullApiBasic04GeneratedClient {
  MeetingsPostCrmObjects202603MeetingsCreate(...args: HubSpotFullApiOperationArgs<"crm:meetings:2026-03:post-/crm/objects/2026-03/meetings_create">): Promise<HubSpotFullApiOperationResponseMap["crm:meetings:2026-03:post-/crm/objects/2026-03/meetings_create"]>;
  MeetingsGetCrmObjects202603MeetingsMeetingIdGetById(...args: HubSpotFullApiOperationArgs<"crm:meetings:2026-03:get-/crm/objects/2026-03/meetings/{meetingId}_getById">): Promise<HubSpotFullApiOperationResponseMap["crm:meetings:2026-03:get-/crm/objects/2026-03/meetings/{meetingId}_getById"]>;
  MeetingsDeleteCrmObjects202603MeetingsMeetingIdArchive(...args: HubSpotFullApiOperationArgs<"crm:meetings:2026-03:delete-/crm/objects/2026-03/meetings/{meetingId}_archive">): Promise<HubSpotFullApiOperationResponseMap["crm:meetings:2026-03:delete-/crm/objects/2026-03/meetings/{meetingId}_archive"]>;
  MeetingsPatchCrmObjects202603MeetingsMeetingIdUpdate(...args: HubSpotFullApiOperationArgs<"crm:meetings:2026-03:patch-/crm/objects/2026-03/meetings/{meetingId}_update">): Promise<HubSpotFullApiOperationResponseMap["crm:meetings:2026-03:patch-/crm/objects/2026-03/meetings/{meetingId}_update"]>;
  MeetingsPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:meetings:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:meetings:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"]>;
  MeetingsDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:meetings:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:meetings:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"]>;
  SequencesGetAutomationSequences202603AutomationSequences202603(...args: HubSpotFullApiOperationArgs<"automation:sequences:2026-03:get-/automation/sequences/2026-03_/automation/sequences/2026-03">): Promise<HubSpotFullApiOperationResponseMap["automation:sequences:2026-03:get-/automation/sequences/2026-03_/automation/sequences/2026-03"]>;
  SequencesPostAutomationSequences202603Enrollments(...args: HubSpotFullApiOperationArgs<"automation:sequences:2026-03:post-/automation/sequences/2026-03/enrollments">): Promise<HubSpotFullApiOperationResponseMap["automation:sequences:2026-03:post-/automation/sequences/2026-03/enrollments"]>;
  SequencesGetAutomationSequences202603EnrollmentsContactContactId(...args: HubSpotFullApiOperationArgs<"automation:sequences:2026-03:get-/automation/sequences/2026-03/enrollments/contact/{contactId}">): Promise<HubSpotFullApiOperationResponseMap["automation:sequences:2026-03:get-/automation/sequences/2026-03/enrollments/contact/{contactId}"]>;
  SequencesGetAutomationSequences202603SequenceId(...args: HubSpotFullApiOperationArgs<"automation:sequences:2026-03:get-/automation/sequences/2026-03/{sequenceId}">): Promise<HubSpotFullApiOperationResponseMap["automation:sequences:2026-03:get-/automation/sequences/2026-03/{sequenceId}"]>;
  CallingExtensionsGetCrmExtensionsCalling202603AppIdSettingsGet(...args: HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings_get">): Promise<HubSpotFullApiOperationResponseMap["crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings_get"]>;
  CallingExtensionsPostCrmExtensionsCalling202603AppIdSettingsCreate(...args: HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings_create">): Promise<HubSpotFullApiOperationResponseMap["crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings_create"]>;
  CallingExtensionsDeleteCrmExtensionsCalling202603AppIdSettingsRemove(...args: HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:delete-/crm/extensions/calling/2026-03/{appId}/settings_remove">): Promise<HubSpotFullApiOperationResponseMap["crm:calling-extensions:2026-03:delete-/crm/extensions/calling/2026-03/{appId}/settings_remove"]>;
  CallingExtensionsPatchCrmExtensionsCalling202603AppIdSettingsUpdate(...args: HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings_update">): Promise<HubSpotFullApiOperationResponseMap["crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings_update"]>;
  CallingExtensionsGetCrmExtensionsCalling202603AppIdSettingsChannelConnectionGet(...args: HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_get">): Promise<HubSpotFullApiOperationResponseMap["crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_get"]>;
  CallingExtensionsPostCrmExtensionsCalling202603AppIdSettingsChannelConnectionCreate(...args: HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_create">): Promise<HubSpotFullApiOperationResponseMap["crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_create"]>;
  CallingExtensionsDeleteCrmExtensionsCalling202603AppIdSettingsChannelConnectionRemove(...args: HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:delete-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_remove">): Promise<HubSpotFullApiOperationResponseMap["crm:calling-extensions:2026-03:delete-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_remove"]>;
  CallingExtensionsPatchCrmExtensionsCalling202603AppIdSettingsChannelConnectionUpdate(...args: HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_update">): Promise<HubSpotFullApiOperationResponseMap["crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_update"]>;
  CallingExtensionsGetCrmExtensionsCalling202603AppIdSettingsRecordingGet(...args: HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings/recording_get">): Promise<HubSpotFullApiOperationResponseMap["crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings/recording_get"]>;
  CallingExtensionsPostCrmExtensionsCalling202603AppIdSettingsRecordingCreate(...args: HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings/recording_create">): Promise<HubSpotFullApiOperationResponseMap["crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings/recording_create"]>;
  CallingExtensionsPatchCrmExtensionsCalling202603AppIdSettingsRecordingUpdate(...args: HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings/recording_update">): Promise<HubSpotFullApiOperationResponseMap["crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings/recording_update"]>;
  TaxesGetCrmObjects202603TaxesGetPage(...args: HubSpotFullApiOperationArgs<"crm:taxes:2026-03:get-/crm/objects/2026-03/taxes_getPage">): Promise<HubSpotFullApiOperationResponseMap["crm:taxes:2026-03:get-/crm/objects/2026-03/taxes_getPage"]>;
  TaxesPostCrmObjects202603TaxesCreate(...args: HubSpotFullApiOperationArgs<"crm:taxes:2026-03:post-/crm/objects/2026-03/taxes_create">): Promise<HubSpotFullApiOperationResponseMap["crm:taxes:2026-03:post-/crm/objects/2026-03/taxes_create"]>;
  TaxesGetCrmObjects202603TaxesTaxIdGetById(...args: HubSpotFullApiOperationArgs<"crm:taxes:2026-03:get-/crm/objects/2026-03/taxes/{taxId}_getById">): Promise<HubSpotFullApiOperationResponseMap["crm:taxes:2026-03:get-/crm/objects/2026-03/taxes/{taxId}_getById"]>;
  TaxesDeleteCrmObjects202603TaxesTaxIdArchive(...args: HubSpotFullApiOperationArgs<"crm:taxes:2026-03:delete-/crm/objects/2026-03/taxes/{taxId}_archive">): Promise<HubSpotFullApiOperationResponseMap["crm:taxes:2026-03:delete-/crm/objects/2026-03/taxes/{taxId}_archive"]>;
  TaxesPatchCrmObjects202603TaxesTaxIdUpdate(...args: HubSpotFullApiOperationArgs<"crm:taxes:2026-03:patch-/crm/objects/2026-03/taxes/{taxId}_update">): Promise<HubSpotFullApiOperationResponseMap["crm:taxes:2026-03:patch-/crm/objects/2026-03/taxes/{taxId}_update"]>;
  TaxesPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:taxes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:taxes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"]>;
  TaxesDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:taxes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:taxes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"]>;
  SchemasGetCrmObjectSchemas202603SchemasGetAll(...args: HubSpotFullApiOperationArgs<"crm:schemas:2026-03:get-/crm-object-schemas/2026-03/schemas_getAll">): Promise<HubSpotFullApiOperationResponseMap["crm:schemas:2026-03:get-/crm-object-schemas/2026-03/schemas_getAll"]>;
  SchemasPostCrmObjectSchemas202603SchemasCreate(...args: HubSpotFullApiOperationArgs<"crm:schemas:2026-03:post-/crm-object-schemas/2026-03/schemas_create">): Promise<HubSpotFullApiOperationResponseMap["crm:schemas:2026-03:post-/crm-object-schemas/2026-03/schemas_create"]>;
  SchemasGetCrmObjectSchemas202603SchemasObjectTypeGetById(...args: HubSpotFullApiOperationArgs<"crm:schemas:2026-03:get-/crm-object-schemas/2026-03/schemas/{objectType}_getById">): Promise<HubSpotFullApiOperationResponseMap["crm:schemas:2026-03:get-/crm-object-schemas/2026-03/schemas/{objectType}_getById"]>;
  SchemasDeleteCrmObjectSchemas202603SchemasObjectTypeArchive(...args: HubSpotFullApiOperationArgs<"crm:schemas:2026-03:delete-/crm-object-schemas/2026-03/schemas/{objectType}_archive">): Promise<HubSpotFullApiOperationResponseMap["crm:schemas:2026-03:delete-/crm-object-schemas/2026-03/schemas/{objectType}_archive"]>;
  SchemasPatchCrmObjectSchemas202603SchemasObjectTypeUpdate(...args: HubSpotFullApiOperationArgs<"crm:schemas:2026-03:patch-/crm-object-schemas/2026-03/schemas/{objectType}_update">): Promise<HubSpotFullApiOperationResponseMap["crm:schemas:2026-03:patch-/crm-object-schemas/2026-03/schemas/{objectType}_update"]>;
  SchemasDeleteCrmObjectSchemas202603SchemasObjectTypeAssociationsAssociationIdentifierArchiveAssociation(...args: HubSpotFullApiOperationArgs<"crm:schemas:2026-03:delete-/crm-object-schemas/2026-03/schemas/{objectType}/associations/{associationIdentifier}_archiveAssociation">): Promise<HubSpotFullApiOperationResponseMap["crm:schemas:2026-03:delete-/crm-object-schemas/2026-03/schemas/{objectType}/associations/{associationIdentifier}_archiveAssociation"]>;
  DatasourceIngestionPostDataStudioDataSource202609Beta(...args: HubSpotFullApiOperationArgs<"data-studio:datasource-ingestion:2026-09-beta:post-/data-studio/data-source/2026-09-beta">): Promise<HubSpotFullApiOperationResponseMap["data-studio:datasource-ingestion:2026-09-beta:post-/data-studio/data-source/2026-09-beta"]>;
  DatasourceIngestionGetDataStudioDataSource202609BetaDatasourceId(...args: HubSpotFullApiOperationArgs<"data-studio:datasource-ingestion:2026-09-beta:get-/data-studio/data-source/2026-09-beta/{datasourceId}">): Promise<HubSpotFullApiOperationResponseMap["data-studio:datasource-ingestion:2026-09-beta:get-/data-studio/data-source/2026-09-beta/{datasourceId}"]>;
  DatasourceIngestionPutDataStudioDataSource202609BetaDatasourceId(...args: HubSpotFullApiOperationArgs<"data-studio:datasource-ingestion:2026-09-beta:put-/data-studio/data-source/2026-09-beta/{datasourceId}">): Promise<HubSpotFullApiOperationResponseMap["data-studio:datasource-ingestion:2026-09-beta:put-/data-studio/data-source/2026-09-beta/{datasourceId}"]>;
  DatasourceIngestionDeleteDataStudioDataSource202609BetaDatasourceId(...args: HubSpotFullApiOperationArgs<"data-studio:datasource-ingestion:2026-09-beta:delete-/data-studio/data-source/2026-09-beta/{datasourceId}">): Promise<HubSpotFullApiOperationResponseMap["data-studio:datasource-ingestion:2026-09-beta:delete-/data-studio/data-source/2026-09-beta/{datasourceId}"]>;
  BusinessUnitsGetBusinessUnitsPublic202603BusinessUnitsUserUserIdGetByUserID(...args: HubSpotFullApiOperationArgs<"business-units:business-units:2026-03:get-/business-units/public/2026-03/business-units/user/{userId}_getByUserID">): Promise<HubSpotFullApiOperationResponseMap["business-units:business-units:2026-03:get-/business-units/public/2026-03/business-units/user/{userId}_getByUserID"]>;
  SiteSearchGetCmsSiteSearch202603IndexedDataContentIdGetById(...args: HubSpotFullApiOperationArgs<"cms:site-search:2026-03:get-/cms/site-search/2026-03/indexed-data/{contentId}_getById">): Promise<HubSpotFullApiOperationResponseMap["cms:site-search:2026-03:get-/cms/site-search/2026-03/indexed-data/{contentId}_getById"]>;
  ListingsGetCrmObjects2026030420(...args: HubSpotFullApiOperationArgs<"crm:listings:2026-03:get-/crm/objects/2026-03/0-420">): Promise<HubSpotFullApiOperationResponseMap["crm:listings:2026-03:get-/crm/objects/2026-03/0-420"]>;
  ListingsPostCrmObjects2026030420(...args: HubSpotFullApiOperationArgs<"crm:listings:2026-03:post-/crm/objects/2026-03/0-420">): Promise<HubSpotFullApiOperationResponseMap["crm:listings:2026-03:post-/crm/objects/2026-03/0-420"]>;
  ListingsGetCrmObjects2026030420ListingId(...args: HubSpotFullApiOperationArgs<"crm:listings:2026-03:get-/crm/objects/2026-03/0-420/{listingId}">): Promise<HubSpotFullApiOperationResponseMap["crm:listings:2026-03:get-/crm/objects/2026-03/0-420/{listingId}"]>;
  ListingsDeleteCrmObjects2026030420ListingId(...args: HubSpotFullApiOperationArgs<"crm:listings:2026-03:delete-/crm/objects/2026-03/0-420/{listingId}">): Promise<HubSpotFullApiOperationResponseMap["crm:listings:2026-03:delete-/crm/objects/2026-03/0-420/{listingId}"]>;
  ListingsPatchCrmObjects2026030420ListingId(...args: HubSpotFullApiOperationArgs<"crm:listings:2026-03:patch-/crm/objects/2026-03/0-420/{listingId}">): Promise<HubSpotFullApiOperationResponseMap["crm:listings:2026-03:patch-/crm/objects/2026-03/0-420/{listingId}"]>;
  ListingsPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:listings:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:listings:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"]>;
  ListingsDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:listings:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:listings:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"]>;
  PostsGetCmsBlogs202603AuthorsCursorCmsBlogsV3AuthorsCursor(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/authors/cursor_/cms/blogs/v3/authors/cursor">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:get-/cms/blogs/2026-03/authors/cursor_/cms/blogs/v3/authors/cursor"]>;
  PostsGetCmsBlogs202603AuthorsCursorQueryCmsBlogsV3AuthorsCursorQuery(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/authors/cursor/query_/cms/blogs/v3/authors/cursor/query">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:get-/cms/blogs/2026-03/authors/cursor/query_/cms/blogs/v3/authors/cursor/query"]>;
  PostsGetCmsBlogs202603PostsGetPage(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/posts_getPage">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:get-/cms/blogs/2026-03/posts_getPage"]>;
  PostsPostCmsBlogs202603PostsCreate(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts_create">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:post-/cms/blogs/2026-03/posts_create"]>;
  PostsPostCmsBlogs202603PostsCloneClone(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/clone_clone">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:post-/cms/blogs/2026-03/posts/clone_clone"]>;
  PostsGetCmsBlogs202603PostsCursorCmsBlogsV3PostsCursor(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/posts/cursor_/cms/blogs/v3/posts/cursor">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:get-/cms/blogs/2026-03/posts/cursor_/cms/blogs/v3/posts/cursor"]>;
  PostsGetCmsBlogs202603PostsCursorQueryCmsBlogsV3PostsCursorQuery(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/posts/cursor/query_/cms/blogs/v3/posts/cursor/query">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:get-/cms/blogs/2026-03/posts/cursor/query_/cms/blogs/v3/posts/cursor/query"]>;
  PostsPostCmsBlogs202603PostsScheduleSchedule(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/schedule_schedule">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:post-/cms/blogs/2026-03/posts/schedule_schedule"]>;
  PostsGetCmsBlogs202603PostsObjectIdGetById(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}_getById">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}_getById"]>;
  PostsDeleteCmsBlogs202603PostsObjectIdArchive(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:delete-/cms/blogs/2026-03/posts/{objectId}_archive">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:delete-/cms/blogs/2026-03/posts/{objectId}_archive"]>;
  PostsPatchCmsBlogs202603PostsObjectIdUpdate(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:patch-/cms/blogs/2026-03/posts/{objectId}_update">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:patch-/cms/blogs/2026-03/posts/{objectId}_update"]>;
  PostsGetCmsBlogs202603PostsObjectIdDraftGetDraftById(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/draft_getDraftById">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/draft_getDraftById"]>;
  PostsPatchCmsBlogs202603PostsObjectIdDraftUpdateDraft(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:patch-/cms/blogs/2026-03/posts/{objectId}/draft_updateDraft">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:patch-/cms/blogs/2026-03/posts/{objectId}/draft_updateDraft"]>;
  PostsPostCmsBlogs202603PostsObjectIdDraftPushLivePushLive(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/draft/push-live_pushLive">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/draft/push-live_pushLive"]>;
  PostsPostCmsBlogs202603PostsObjectIdDraftResetResetDraft(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/draft/reset_resetDraft">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/draft/reset_resetDraft"]>;
  PostsGetCmsBlogs202603TagsCursorCmsBlogsV3TagsCursor(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/tags/cursor_/cms/blogs/v3/tags/cursor">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:get-/cms/blogs/2026-03/tags/cursor_/cms/blogs/v3/tags/cursor"]>;
  PostsGetCmsBlogs202603TagsCursorQueryCmsBlogsV3TagsCursorQuery(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/tags/cursor/query_/cms/blogs/v3/tags/cursor/query">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:get-/cms/blogs/2026-03/tags/cursor/query_/cms/blogs/v3/tags/cursor/query"]>;
  AssociationsPostCrmAssociations202603UsageHighUsageReportUserIdCrmAssociations202509UsageHighUsageReportUserId(...args: HubSpotFullApiOperationArgs<"crm:associations:2026-03:post-/crm/associations/2026-03/usage/high-usage-report/{userId}_/crm/associations/2025-09/usage/high-usage-report/{userId}">): Promise<HubSpotFullApiOperationResponseMap["crm:associations:2026-03:post-/crm/associations/2026-03/usage/high-usage-report/{userId}_/crm/associations/2025-09/usage/high-usage-report/{userId}"]>;
  AssociationsGetCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeCrmObjects202509ObjectTypeObjectIdAssociationsToObjectType(...args: HubSpotFullApiOperationArgs<"crm:associations:2026-03:get-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}">): Promise<HubSpotFullApiOperationResponseMap["crm:associations:2026-03:get-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}"]>;
  AssociationsPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202509ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:associations:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:associations:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"]>;
  AssociationsDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202509ObjectTypeObjectIdAssociationsToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:associations:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:associations:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"]>;
  ForecastTypesGetForecastSettingsV3ForecastTypesForecastSettingsV3ForecastTypes(...args: HubSpotFullApiOperationArgs<"crm:forecast-types:3:get-/forecast-settings/v3/forecast-types_/forecast-settings/v3/forecast-types">): Promise<HubSpotFullApiOperationResponseMap["crm:forecast-types:3:get-/forecast-settings/v3/forecast-types_/forecast-settings/v3/forecast-types"]>;
  ForecastTypesGetForecastSettingsV3ForecastTypesForecastTypeIdForecastSettingsV3ForecastTypesForecastTypeId(...args: HubSpotFullApiOperationArgs<"crm:forecast-types:3:get-/forecast-settings/v3/forecast-types/{forecastTypeId}_/forecast-settings/v3/forecast-types/{forecastTypeId}">): Promise<HubSpotFullApiOperationResponseMap["crm:forecast-types:3:get-/forecast-settings/v3/forecast-types/{forecastTypeId}_/forecast-settings/v3/forecast-types/{forecastTypeId}"]>;
  AuditLogsGetAccountInfo202603ActivityAuditLogs(...args: HubSpotFullApiOperationArgs<"account:audit-logs:2026-03:get-/account-info/2026-03/activity/audit-logs">): Promise<HubSpotFullApiOperationResponseMap["account:audit-logs:2026-03:get-/account-info/2026-03/activity/audit-logs"]>;
  AuditLogsGetAccountInfo202603ActivityLogin(...args: HubSpotFullApiOperationArgs<"account:audit-logs:2026-03:get-/account-info/2026-03/activity/login">): Promise<HubSpotFullApiOperationResponseMap["account:audit-logs:2026-03:get-/account-info/2026-03/activity/login"]>;
  AuditLogsGetAccountInfo202603ActivitySecurity(...args: HubSpotFullApiOperationArgs<"account:audit-logs:2026-03:get-/account-info/2026-03/activity/security">): Promise<HubSpotFullApiOperationResponseMap["account:audit-logs:2026-03:get-/account-info/2026-03/activity/security"]>;
  WebhooksJournalGetWebhooksJournalJournalLocal202603Earliest(...args: HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/earliest">): Promise<HubSpotFullApiOperationResponseMap["webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/earliest"]>;
  WebhooksJournalGetWebhooksJournalJournalLocal202603Latest(...args: HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/latest">): Promise<HubSpotFullApiOperationResponseMap["webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/latest"]>;
  WebhooksJournalGetWebhooksJournalJournalLocal202603OffsetOffsetNext(...args: HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/offset/{offset}/next">): Promise<HubSpotFullApiOperationResponseMap["webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/offset/{offset}/next"]>;
  WebhooksJournalGetWebhooksJournalJournalLocal202603StatusStatusId(...args: HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/status/{statusId}">): Promise<HubSpotFullApiOperationResponseMap["webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/status/{statusId}"]>;
  WebhooksJournalGetWebhooksJournalJournal202603Earliest(...args: HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/earliest">): Promise<HubSpotFullApiOperationResponseMap["webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/earliest"]>;
  WebhooksJournalGetWebhooksJournalJournal202603Latest(...args: HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/latest">): Promise<HubSpotFullApiOperationResponseMap["webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/latest"]>;
  WebhooksJournalGetWebhooksJournalJournal202603OffsetOffsetNext(...args: HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/offset/{offset}/next">): Promise<HubSpotFullApiOperationResponseMap["webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/offset/{offset}/next"]>;
}

export const HubSpotFullApiBasic04GeneratedFunctionNames = [
  "MeetingsPostCrmObjects202603MeetingsCreate",
  "MeetingsGetCrmObjects202603MeetingsMeetingIdGetById",
  "MeetingsDeleteCrmObjects202603MeetingsMeetingIdArchive",
  "MeetingsPatchCrmObjects202603MeetingsMeetingIdUpdate",
  "MeetingsPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId",
  "MeetingsDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId",
  "SequencesGetAutomationSequences202603AutomationSequences202603",
  "SequencesPostAutomationSequences202603Enrollments",
  "SequencesGetAutomationSequences202603EnrollmentsContactContactId",
  "SequencesGetAutomationSequences202603SequenceId",
  "CallingExtensionsGetCrmExtensionsCalling202603AppIdSettingsGet",
  "CallingExtensionsPostCrmExtensionsCalling202603AppIdSettingsCreate",
  "CallingExtensionsDeleteCrmExtensionsCalling202603AppIdSettingsRemove",
  "CallingExtensionsPatchCrmExtensionsCalling202603AppIdSettingsUpdate",
  "CallingExtensionsGetCrmExtensionsCalling202603AppIdSettingsChannelConnectionGet",
  "CallingExtensionsPostCrmExtensionsCalling202603AppIdSettingsChannelConnectionCreate",
  "CallingExtensionsDeleteCrmExtensionsCalling202603AppIdSettingsChannelConnectionRemove",
  "CallingExtensionsPatchCrmExtensionsCalling202603AppIdSettingsChannelConnectionUpdate",
  "CallingExtensionsGetCrmExtensionsCalling202603AppIdSettingsRecordingGet",
  "CallingExtensionsPostCrmExtensionsCalling202603AppIdSettingsRecordingCreate",
  "CallingExtensionsPatchCrmExtensionsCalling202603AppIdSettingsRecordingUpdate",
  "TaxesGetCrmObjects202603TaxesGetPage",
  "TaxesPostCrmObjects202603TaxesCreate",
  "TaxesGetCrmObjects202603TaxesTaxIdGetById",
  "TaxesDeleteCrmObjects202603TaxesTaxIdArchive",
  "TaxesPatchCrmObjects202603TaxesTaxIdUpdate",
  "TaxesPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId",
  "TaxesDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId",
  "SchemasGetCrmObjectSchemas202603SchemasGetAll",
  "SchemasPostCrmObjectSchemas202603SchemasCreate",
  "SchemasGetCrmObjectSchemas202603SchemasObjectTypeGetById",
  "SchemasDeleteCrmObjectSchemas202603SchemasObjectTypeArchive",
  "SchemasPatchCrmObjectSchemas202603SchemasObjectTypeUpdate",
  "SchemasDeleteCrmObjectSchemas202603SchemasObjectTypeAssociationsAssociationIdentifierArchiveAssociation",
  "DatasourceIngestionPostDataStudioDataSource202609Beta",
  "DatasourceIngestionGetDataStudioDataSource202609BetaDatasourceId",
  "DatasourceIngestionPutDataStudioDataSource202609BetaDatasourceId",
  "DatasourceIngestionDeleteDataStudioDataSource202609BetaDatasourceId",
  "BusinessUnitsGetBusinessUnitsPublic202603BusinessUnitsUserUserIdGetByUserID",
  "SiteSearchGetCmsSiteSearch202603IndexedDataContentIdGetById",
  "ListingsGetCrmObjects2026030420",
  "ListingsPostCrmObjects2026030420",
  "ListingsGetCrmObjects2026030420ListingId",
  "ListingsDeleteCrmObjects2026030420ListingId",
  "ListingsPatchCrmObjects2026030420ListingId",
  "ListingsPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId",
  "ListingsDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId",
  "PostsGetCmsBlogs202603AuthorsCursorCmsBlogsV3AuthorsCursor",
  "PostsGetCmsBlogs202603AuthorsCursorQueryCmsBlogsV3AuthorsCursorQuery",
  "PostsGetCmsBlogs202603PostsGetPage",
  "PostsPostCmsBlogs202603PostsCreate",
  "PostsPostCmsBlogs202603PostsCloneClone",
  "PostsGetCmsBlogs202603PostsCursorCmsBlogsV3PostsCursor",
  "PostsGetCmsBlogs202603PostsCursorQueryCmsBlogsV3PostsCursorQuery",
  "PostsPostCmsBlogs202603PostsScheduleSchedule",
  "PostsGetCmsBlogs202603PostsObjectIdGetById",
  "PostsDeleteCmsBlogs202603PostsObjectIdArchive",
  "PostsPatchCmsBlogs202603PostsObjectIdUpdate",
  "PostsGetCmsBlogs202603PostsObjectIdDraftGetDraftById",
  "PostsPatchCmsBlogs202603PostsObjectIdDraftUpdateDraft",
  "PostsPostCmsBlogs202603PostsObjectIdDraftPushLivePushLive",
  "PostsPostCmsBlogs202603PostsObjectIdDraftResetResetDraft",
  "PostsGetCmsBlogs202603TagsCursorCmsBlogsV3TagsCursor",
  "PostsGetCmsBlogs202603TagsCursorQueryCmsBlogsV3TagsCursorQuery",
  "AssociationsPostCrmAssociations202603UsageHighUsageReportUserIdCrmAssociations202509UsageHighUsageReportUserId",
  "AssociationsGetCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeCrmObjects202509ObjectTypeObjectIdAssociationsToObjectType",
  "AssociationsPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202509ObjectTypeObjectIdAssociationsToObjectTypeToObjectId",
  "AssociationsDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202509ObjectTypeObjectIdAssociationsToObjectTypeToObjectId",
  "ForecastTypesGetForecastSettingsV3ForecastTypesForecastSettingsV3ForecastTypes",
  "ForecastTypesGetForecastSettingsV3ForecastTypesForecastTypeIdForecastSettingsV3ForecastTypesForecastTypeId",
  "AuditLogsGetAccountInfo202603ActivityAuditLogs",
  "AuditLogsGetAccountInfo202603ActivityLogin",
  "AuditLogsGetAccountInfo202603ActivitySecurity",
  "WebhooksJournalGetWebhooksJournalJournalLocal202603Earliest",
  "WebhooksJournalGetWebhooksJournalJournalLocal202603Latest",
  "WebhooksJournalGetWebhooksJournalJournalLocal202603OffsetOffsetNext",
  "WebhooksJournalGetWebhooksJournalJournalLocal202603StatusStatusId",
  "WebhooksJournalGetWebhooksJournalJournal202603Earliest",
  "WebhooksJournalGetWebhooksJournalJournal202603Latest",
  "WebhooksJournalGetWebhooksJournalJournal202603OffsetOffsetNext"
] as const satisfies readonly (keyof HubSpotFullApiBasic04GeneratedClient)[];

export function createHubSpotFullApiBasic04GeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiBasic04GeneratedClient {
  return {
    MeetingsPostCrmObjects202603MeetingsCreate: (...args) => callOperation("crm:meetings:2026-03:post-/crm/objects/2026-03/meetings_create", ...(args as HubSpotFullApiOperationArgs<"crm:meetings:2026-03:post-/crm/objects/2026-03/meetings_create">)),
    MeetingsGetCrmObjects202603MeetingsMeetingIdGetById: (...args) => callOperation("crm:meetings:2026-03:get-/crm/objects/2026-03/meetings/{meetingId}_getById", ...(args as HubSpotFullApiOperationArgs<"crm:meetings:2026-03:get-/crm/objects/2026-03/meetings/{meetingId}_getById">)),
    MeetingsDeleteCrmObjects202603MeetingsMeetingIdArchive: (...args) => callOperation("crm:meetings:2026-03:delete-/crm/objects/2026-03/meetings/{meetingId}_archive", ...(args as HubSpotFullApiOperationArgs<"crm:meetings:2026-03:delete-/crm/objects/2026-03/meetings/{meetingId}_archive">)),
    MeetingsPatchCrmObjects202603MeetingsMeetingIdUpdate: (...args) => callOperation("crm:meetings:2026-03:patch-/crm/objects/2026-03/meetings/{meetingId}_update", ...(args as HubSpotFullApiOperationArgs<"crm:meetings:2026-03:patch-/crm/objects/2026-03/meetings/{meetingId}_update">)),
    MeetingsPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId: (...args) => callOperation("crm:meetings:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:meetings:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">)),
    MeetingsDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId: (...args) => callOperation("crm:meetings:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:meetings:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">)),
    SequencesGetAutomationSequences202603AutomationSequences202603: (...args) => callOperation("automation:sequences:2026-03:get-/automation/sequences/2026-03_/automation/sequences/2026-03", ...(args as HubSpotFullApiOperationArgs<"automation:sequences:2026-03:get-/automation/sequences/2026-03_/automation/sequences/2026-03">)),
    SequencesPostAutomationSequences202603Enrollments: (...args) => callOperation("automation:sequences:2026-03:post-/automation/sequences/2026-03/enrollments", ...(args as HubSpotFullApiOperationArgs<"automation:sequences:2026-03:post-/automation/sequences/2026-03/enrollments">)),
    SequencesGetAutomationSequences202603EnrollmentsContactContactId: (...args) => callOperation("automation:sequences:2026-03:get-/automation/sequences/2026-03/enrollments/contact/{contactId}", ...(args as HubSpotFullApiOperationArgs<"automation:sequences:2026-03:get-/automation/sequences/2026-03/enrollments/contact/{contactId}">)),
    SequencesGetAutomationSequences202603SequenceId: (...args) => callOperation("automation:sequences:2026-03:get-/automation/sequences/2026-03/{sequenceId}", ...(args as HubSpotFullApiOperationArgs<"automation:sequences:2026-03:get-/automation/sequences/2026-03/{sequenceId}">)),
    CallingExtensionsGetCrmExtensionsCalling202603AppIdSettingsGet: (...args) => callOperation("crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings_get", ...(args as HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings_get">)),
    CallingExtensionsPostCrmExtensionsCalling202603AppIdSettingsCreate: (...args) => callOperation("crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings_create", ...(args as HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings_create">)),
    CallingExtensionsDeleteCrmExtensionsCalling202603AppIdSettingsRemove: (...args) => callOperation("crm:calling-extensions:2026-03:delete-/crm/extensions/calling/2026-03/{appId}/settings_remove", ...(args as HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:delete-/crm/extensions/calling/2026-03/{appId}/settings_remove">)),
    CallingExtensionsPatchCrmExtensionsCalling202603AppIdSettingsUpdate: (...args) => callOperation("crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings_update", ...(args as HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings_update">)),
    CallingExtensionsGetCrmExtensionsCalling202603AppIdSettingsChannelConnectionGet: (...args) => callOperation("crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_get", ...(args as HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_get">)),
    CallingExtensionsPostCrmExtensionsCalling202603AppIdSettingsChannelConnectionCreate: (...args) => callOperation("crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_create", ...(args as HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_create">)),
    CallingExtensionsDeleteCrmExtensionsCalling202603AppIdSettingsChannelConnectionRemove: (...args) => callOperation("crm:calling-extensions:2026-03:delete-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_remove", ...(args as HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:delete-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_remove">)),
    CallingExtensionsPatchCrmExtensionsCalling202603AppIdSettingsChannelConnectionUpdate: (...args) => callOperation("crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_update", ...(args as HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings/channel-connection_update">)),
    CallingExtensionsGetCrmExtensionsCalling202603AppIdSettingsRecordingGet: (...args) => callOperation("crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings/recording_get", ...(args as HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:get-/crm/extensions/calling/2026-03/{appId}/settings/recording_get">)),
    CallingExtensionsPostCrmExtensionsCalling202603AppIdSettingsRecordingCreate: (...args) => callOperation("crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings/recording_create", ...(args as HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:post-/crm/extensions/calling/2026-03/{appId}/settings/recording_create">)),
    CallingExtensionsPatchCrmExtensionsCalling202603AppIdSettingsRecordingUpdate: (...args) => callOperation("crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings/recording_update", ...(args as HubSpotFullApiOperationArgs<"crm:calling-extensions:2026-03:patch-/crm/extensions/calling/2026-03/{appId}/settings/recording_update">)),
    TaxesGetCrmObjects202603TaxesGetPage: (...args) => callOperation("crm:taxes:2026-03:get-/crm/objects/2026-03/taxes_getPage", ...(args as HubSpotFullApiOperationArgs<"crm:taxes:2026-03:get-/crm/objects/2026-03/taxes_getPage">)),
    TaxesPostCrmObjects202603TaxesCreate: (...args) => callOperation("crm:taxes:2026-03:post-/crm/objects/2026-03/taxes_create", ...(args as HubSpotFullApiOperationArgs<"crm:taxes:2026-03:post-/crm/objects/2026-03/taxes_create">)),
    TaxesGetCrmObjects202603TaxesTaxIdGetById: (...args) => callOperation("crm:taxes:2026-03:get-/crm/objects/2026-03/taxes/{taxId}_getById", ...(args as HubSpotFullApiOperationArgs<"crm:taxes:2026-03:get-/crm/objects/2026-03/taxes/{taxId}_getById">)),
    TaxesDeleteCrmObjects202603TaxesTaxIdArchive: (...args) => callOperation("crm:taxes:2026-03:delete-/crm/objects/2026-03/taxes/{taxId}_archive", ...(args as HubSpotFullApiOperationArgs<"crm:taxes:2026-03:delete-/crm/objects/2026-03/taxes/{taxId}_archive">)),
    TaxesPatchCrmObjects202603TaxesTaxIdUpdate: (...args) => callOperation("crm:taxes:2026-03:patch-/crm/objects/2026-03/taxes/{taxId}_update", ...(args as HubSpotFullApiOperationArgs<"crm:taxes:2026-03:patch-/crm/objects/2026-03/taxes/{taxId}_update">)),
    TaxesPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId: (...args) => callOperation("crm:taxes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:taxes:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">)),
    TaxesDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId: (...args) => callOperation("crm:taxes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:taxes:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">)),
    SchemasGetCrmObjectSchemas202603SchemasGetAll: (...args) => callOperation("crm:schemas:2026-03:get-/crm-object-schemas/2026-03/schemas_getAll", ...(args as HubSpotFullApiOperationArgs<"crm:schemas:2026-03:get-/crm-object-schemas/2026-03/schemas_getAll">)),
    SchemasPostCrmObjectSchemas202603SchemasCreate: (...args) => callOperation("crm:schemas:2026-03:post-/crm-object-schemas/2026-03/schemas_create", ...(args as HubSpotFullApiOperationArgs<"crm:schemas:2026-03:post-/crm-object-schemas/2026-03/schemas_create">)),
    SchemasGetCrmObjectSchemas202603SchemasObjectTypeGetById: (...args) => callOperation("crm:schemas:2026-03:get-/crm-object-schemas/2026-03/schemas/{objectType}_getById", ...(args as HubSpotFullApiOperationArgs<"crm:schemas:2026-03:get-/crm-object-schemas/2026-03/schemas/{objectType}_getById">)),
    SchemasDeleteCrmObjectSchemas202603SchemasObjectTypeArchive: (...args) => callOperation("crm:schemas:2026-03:delete-/crm-object-schemas/2026-03/schemas/{objectType}_archive", ...(args as HubSpotFullApiOperationArgs<"crm:schemas:2026-03:delete-/crm-object-schemas/2026-03/schemas/{objectType}_archive">)),
    SchemasPatchCrmObjectSchemas202603SchemasObjectTypeUpdate: (...args) => callOperation("crm:schemas:2026-03:patch-/crm-object-schemas/2026-03/schemas/{objectType}_update", ...(args as HubSpotFullApiOperationArgs<"crm:schemas:2026-03:patch-/crm-object-schemas/2026-03/schemas/{objectType}_update">)),
    SchemasDeleteCrmObjectSchemas202603SchemasObjectTypeAssociationsAssociationIdentifierArchiveAssociation: (...args) => callOperation("crm:schemas:2026-03:delete-/crm-object-schemas/2026-03/schemas/{objectType}/associations/{associationIdentifier}_archiveAssociation", ...(args as HubSpotFullApiOperationArgs<"crm:schemas:2026-03:delete-/crm-object-schemas/2026-03/schemas/{objectType}/associations/{associationIdentifier}_archiveAssociation">)),
    DatasourceIngestionPostDataStudioDataSource202609Beta: (...args) => callOperation("data-studio:datasource-ingestion:2026-09-beta:post-/data-studio/data-source/2026-09-beta", ...(args as HubSpotFullApiOperationArgs<"data-studio:datasource-ingestion:2026-09-beta:post-/data-studio/data-source/2026-09-beta">)),
    DatasourceIngestionGetDataStudioDataSource202609BetaDatasourceId: (...args) => callOperation("data-studio:datasource-ingestion:2026-09-beta:get-/data-studio/data-source/2026-09-beta/{datasourceId}", ...(args as HubSpotFullApiOperationArgs<"data-studio:datasource-ingestion:2026-09-beta:get-/data-studio/data-source/2026-09-beta/{datasourceId}">)),
    DatasourceIngestionPutDataStudioDataSource202609BetaDatasourceId: (...args) => callOperation("data-studio:datasource-ingestion:2026-09-beta:put-/data-studio/data-source/2026-09-beta/{datasourceId}", ...(args as HubSpotFullApiOperationArgs<"data-studio:datasource-ingestion:2026-09-beta:put-/data-studio/data-source/2026-09-beta/{datasourceId}">)),
    DatasourceIngestionDeleteDataStudioDataSource202609BetaDatasourceId: (...args) => callOperation("data-studio:datasource-ingestion:2026-09-beta:delete-/data-studio/data-source/2026-09-beta/{datasourceId}", ...(args as HubSpotFullApiOperationArgs<"data-studio:datasource-ingestion:2026-09-beta:delete-/data-studio/data-source/2026-09-beta/{datasourceId}">)),
    BusinessUnitsGetBusinessUnitsPublic202603BusinessUnitsUserUserIdGetByUserID: (...args) => callOperation("business-units:business-units:2026-03:get-/business-units/public/2026-03/business-units/user/{userId}_getByUserID", ...(args as HubSpotFullApiOperationArgs<"business-units:business-units:2026-03:get-/business-units/public/2026-03/business-units/user/{userId}_getByUserID">)),
    SiteSearchGetCmsSiteSearch202603IndexedDataContentIdGetById: (...args) => callOperation("cms:site-search:2026-03:get-/cms/site-search/2026-03/indexed-data/{contentId}_getById", ...(args as HubSpotFullApiOperationArgs<"cms:site-search:2026-03:get-/cms/site-search/2026-03/indexed-data/{contentId}_getById">)),
    ListingsGetCrmObjects2026030420: (...args) => callOperation("crm:listings:2026-03:get-/crm/objects/2026-03/0-420", ...(args as HubSpotFullApiOperationArgs<"crm:listings:2026-03:get-/crm/objects/2026-03/0-420">)),
    ListingsPostCrmObjects2026030420: (...args) => callOperation("crm:listings:2026-03:post-/crm/objects/2026-03/0-420", ...(args as HubSpotFullApiOperationArgs<"crm:listings:2026-03:post-/crm/objects/2026-03/0-420">)),
    ListingsGetCrmObjects2026030420ListingId: (...args) => callOperation("crm:listings:2026-03:get-/crm/objects/2026-03/0-420/{listingId}", ...(args as HubSpotFullApiOperationArgs<"crm:listings:2026-03:get-/crm/objects/2026-03/0-420/{listingId}">)),
    ListingsDeleteCrmObjects2026030420ListingId: (...args) => callOperation("crm:listings:2026-03:delete-/crm/objects/2026-03/0-420/{listingId}", ...(args as HubSpotFullApiOperationArgs<"crm:listings:2026-03:delete-/crm/objects/2026-03/0-420/{listingId}">)),
    ListingsPatchCrmObjects2026030420ListingId: (...args) => callOperation("crm:listings:2026-03:patch-/crm/objects/2026-03/0-420/{listingId}", ...(args as HubSpotFullApiOperationArgs<"crm:listings:2026-03:patch-/crm/objects/2026-03/0-420/{listingId}">)),
    ListingsPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId: (...args) => callOperation("crm:listings:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:listings:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">)),
    ListingsDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectId: (...args) => callOperation("crm:listings:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:listings:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">)),
    PostsGetCmsBlogs202603AuthorsCursorCmsBlogsV3AuthorsCursor: (...args) => callOperation("cms:posts:2026-03:get-/cms/blogs/2026-03/authors/cursor_/cms/blogs/v3/authors/cursor", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/authors/cursor_/cms/blogs/v3/authors/cursor">)),
    PostsGetCmsBlogs202603AuthorsCursorQueryCmsBlogsV3AuthorsCursorQuery: (...args) => callOperation("cms:posts:2026-03:get-/cms/blogs/2026-03/authors/cursor/query_/cms/blogs/v3/authors/cursor/query", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/authors/cursor/query_/cms/blogs/v3/authors/cursor/query">)),
    PostsGetCmsBlogs202603PostsGetPage: (...args) => callOperation("cms:posts:2026-03:get-/cms/blogs/2026-03/posts_getPage", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/posts_getPage">)),
    PostsPostCmsBlogs202603PostsCreate: (...args) => callOperation("cms:posts:2026-03:post-/cms/blogs/2026-03/posts_create", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts_create">)),
    PostsPostCmsBlogs202603PostsCloneClone: (...args) => callOperation("cms:posts:2026-03:post-/cms/blogs/2026-03/posts/clone_clone", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/clone_clone">)),
    PostsGetCmsBlogs202603PostsCursorCmsBlogsV3PostsCursor: (...args) => callOperation("cms:posts:2026-03:get-/cms/blogs/2026-03/posts/cursor_/cms/blogs/v3/posts/cursor", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/posts/cursor_/cms/blogs/v3/posts/cursor">)),
    PostsGetCmsBlogs202603PostsCursorQueryCmsBlogsV3PostsCursorQuery: (...args) => callOperation("cms:posts:2026-03:get-/cms/blogs/2026-03/posts/cursor/query_/cms/blogs/v3/posts/cursor/query", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/posts/cursor/query_/cms/blogs/v3/posts/cursor/query">)),
    PostsPostCmsBlogs202603PostsScheduleSchedule: (...args) => callOperation("cms:posts:2026-03:post-/cms/blogs/2026-03/posts/schedule_schedule", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/schedule_schedule">)),
    PostsGetCmsBlogs202603PostsObjectIdGetById: (...args) => callOperation("cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}_getById", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}_getById">)),
    PostsDeleteCmsBlogs202603PostsObjectIdArchive: (...args) => callOperation("cms:posts:2026-03:delete-/cms/blogs/2026-03/posts/{objectId}_archive", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:delete-/cms/blogs/2026-03/posts/{objectId}_archive">)),
    PostsPatchCmsBlogs202603PostsObjectIdUpdate: (...args) => callOperation("cms:posts:2026-03:patch-/cms/blogs/2026-03/posts/{objectId}_update", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:patch-/cms/blogs/2026-03/posts/{objectId}_update">)),
    PostsGetCmsBlogs202603PostsObjectIdDraftGetDraftById: (...args) => callOperation("cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/draft_getDraftById", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/draft_getDraftById">)),
    PostsPatchCmsBlogs202603PostsObjectIdDraftUpdateDraft: (...args) => callOperation("cms:posts:2026-03:patch-/cms/blogs/2026-03/posts/{objectId}/draft_updateDraft", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:patch-/cms/blogs/2026-03/posts/{objectId}/draft_updateDraft">)),
    PostsPostCmsBlogs202603PostsObjectIdDraftPushLivePushLive: (...args) => callOperation("cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/draft/push-live_pushLive", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/draft/push-live_pushLive">)),
    PostsPostCmsBlogs202603PostsObjectIdDraftResetResetDraft: (...args) => callOperation("cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/draft/reset_resetDraft", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/draft/reset_resetDraft">)),
    PostsGetCmsBlogs202603TagsCursorCmsBlogsV3TagsCursor: (...args) => callOperation("cms:posts:2026-03:get-/cms/blogs/2026-03/tags/cursor_/cms/blogs/v3/tags/cursor", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/tags/cursor_/cms/blogs/v3/tags/cursor">)),
    PostsGetCmsBlogs202603TagsCursorQueryCmsBlogsV3TagsCursorQuery: (...args) => callOperation("cms:posts:2026-03:get-/cms/blogs/2026-03/tags/cursor/query_/cms/blogs/v3/tags/cursor/query", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/tags/cursor/query_/cms/blogs/v3/tags/cursor/query">)),
    AssociationsPostCrmAssociations202603UsageHighUsageReportUserIdCrmAssociations202509UsageHighUsageReportUserId: (...args) => callOperation("crm:associations:2026-03:post-/crm/associations/2026-03/usage/high-usage-report/{userId}_/crm/associations/2025-09/usage/high-usage-report/{userId}", ...(args as HubSpotFullApiOperationArgs<"crm:associations:2026-03:post-/crm/associations/2026-03/usage/high-usage-report/{userId}_/crm/associations/2025-09/usage/high-usage-report/{userId}">)),
    AssociationsGetCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeCrmObjects202509ObjectTypeObjectIdAssociationsToObjectType: (...args) => callOperation("crm:associations:2026-03:get-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}", ...(args as HubSpotFullApiOperationArgs<"crm:associations:2026-03:get-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}">)),
    AssociationsPutCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202509ObjectTypeObjectIdAssociationsToObjectTypeToObjectId: (...args) => callOperation("crm:associations:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:associations:2026-03:put-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">)),
    AssociationsDeleteCrmObjects202603ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdCrmObjects202509ObjectTypeObjectIdAssociationsToObjectTypeToObjectId: (...args) => callOperation("crm:associations:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:associations:2026-03:delete-/crm/objects/2026-03/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2025-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}">)),
    ForecastTypesGetForecastSettingsV3ForecastTypesForecastSettingsV3ForecastTypes: (...args) => callOperation("crm:forecast-types:3:get-/forecast-settings/v3/forecast-types_/forecast-settings/v3/forecast-types", ...(args as HubSpotFullApiOperationArgs<"crm:forecast-types:3:get-/forecast-settings/v3/forecast-types_/forecast-settings/v3/forecast-types">)),
    ForecastTypesGetForecastSettingsV3ForecastTypesForecastTypeIdForecastSettingsV3ForecastTypesForecastTypeId: (...args) => callOperation("crm:forecast-types:3:get-/forecast-settings/v3/forecast-types/{forecastTypeId}_/forecast-settings/v3/forecast-types/{forecastTypeId}", ...(args as HubSpotFullApiOperationArgs<"crm:forecast-types:3:get-/forecast-settings/v3/forecast-types/{forecastTypeId}_/forecast-settings/v3/forecast-types/{forecastTypeId}">)),
    AuditLogsGetAccountInfo202603ActivityAuditLogs: (...args) => callOperation("account:audit-logs:2026-03:get-/account-info/2026-03/activity/audit-logs", ...(args as HubSpotFullApiOperationArgs<"account:audit-logs:2026-03:get-/account-info/2026-03/activity/audit-logs">)),
    AuditLogsGetAccountInfo202603ActivityLogin: (...args) => callOperation("account:audit-logs:2026-03:get-/account-info/2026-03/activity/login", ...(args as HubSpotFullApiOperationArgs<"account:audit-logs:2026-03:get-/account-info/2026-03/activity/login">)),
    AuditLogsGetAccountInfo202603ActivitySecurity: (...args) => callOperation("account:audit-logs:2026-03:get-/account-info/2026-03/activity/security", ...(args as HubSpotFullApiOperationArgs<"account:audit-logs:2026-03:get-/account-info/2026-03/activity/security">)),
    WebhooksJournalGetWebhooksJournalJournalLocal202603Earliest: (...args) => callOperation("webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/earliest", ...(args as HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/earliest">)),
    WebhooksJournalGetWebhooksJournalJournalLocal202603Latest: (...args) => callOperation("webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/latest", ...(args as HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/latest">)),
    WebhooksJournalGetWebhooksJournalJournalLocal202603OffsetOffsetNext: (...args) => callOperation("webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/offset/{offset}/next", ...(args as HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/offset/{offset}/next">)),
    WebhooksJournalGetWebhooksJournalJournalLocal202603StatusStatusId: (...args) => callOperation("webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/status/{statusId}", ...(args as HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal-local/2026-03/status/{statusId}">)),
    WebhooksJournalGetWebhooksJournalJournal202603Earliest: (...args) => callOperation("webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/earliest", ...(args as HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/earliest">)),
    WebhooksJournalGetWebhooksJournalJournal202603Latest: (...args) => callOperation("webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/latest", ...(args as HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/latest">)),
    WebhooksJournalGetWebhooksJournalJournal202603OffsetOffsetNext: (...args) => callOperation("webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/offset/{offset}/next", ...(args as HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/offset/{offset}/next">)),
  };
}
