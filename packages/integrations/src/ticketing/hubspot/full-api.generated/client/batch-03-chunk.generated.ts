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
export const HubSpotFullApiBatch03OperationKeys = [
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/earliest/{count}",
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/latest/{count}",
  "webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/journal/2026-03/batch/read",
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/{offset}/next/{count}",
  "crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/archive",
  "crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/create",
  "crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/read",
  "crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/update",
  "crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/upsert",
  "crm:discounts:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}",
  "crm:deal-splits:2026-03:post-/deal-splits/2026-03/batch/read_/crm/objects/v3/deals/splits/batch/read",
  "crm:deal-splits:2026-03:post-/deal-splits/2026-03/batch/upsert_/crm/objects/v3/deals/splits/batch/upsert",
  "communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/read",
  "communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/unsubscribe-all",
  "communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/unsubscribe-all/read",
  "communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/write",
  "automation:automation-v4:4:post-/automation/v4/flows/batch/read",
  "automation:automation-v4:4:post-/automation/v4/workflow-id-mappings/batch/read",
  "crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/archive_archive",
  "crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/create_create",
  "crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/read_read",
  "crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/update_update",
  "crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/upsert_upsert",
  "crm:deals:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}",
  "marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/archive",
  "marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/create",
  "marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/read",
  "marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/update",
  "crm:lists:2026-03:post-/crm/lists/2026-03/records/memberships/batch/read_/crm/lists/v3/records/memberships/batch/read",
  "crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/archive_archive",
  "crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/create_create",
  "crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/read_read",
  "crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/update_update",
  "crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/upsert_upsert",
  "crm:communications:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}",
  "crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/archive_archive",
  "crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/create_create",
  "crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/read_read",
  "crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/update_update",
  "crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/upsert_upsert",
  "crm:tasks:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}",
  "crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/archive_archive",
  "crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/create_create",
  "crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/read_read",
  "crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/update_update",
  "crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/upsert_upsert",
  "crm:notes:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}",
  "events:manage-event-definitions:2026-03:post-/events/2026-03/send/batch_/events/v3/send/batch",
  "crm:users:2026-03:post-/crm/objects/2026-03/users/batch/archive",
  "crm:users:2026-03:post-/crm/objects/2026-03/users/batch/create",
  "crm:users:2026-03:post-/crm/objects/2026-03/users/batch/read",
  "crm:users:2026-03:post-/crm/objects/2026-03/users/batch/update",
  "crm:users:2026-03:post-/crm/objects/2026-03/users/batch/upsert",
  "crm:users:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}",
  "crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/archive_archive",
  "crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/create_create",
  "crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/read_read",
  "crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/update_update",
  "crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/upsert_upsert",
  "crm:quotes:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}",
  "crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/archive",
  "crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/create",
  "crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/read",
  "crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/update",
  "crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/upsert",
  "crm:carts:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}",
  "events:send-event-completions:2026-03:post-/events/2026-03/send/batch_send",
  "crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/archive_/crm/objects/2025-09/{objectType}/batch/archive",
  "crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/create_/crm/objects/2025-09/{objectType}/batch/create",
  "crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/read_/crm/objects/2025-09/{objectType}/batch/read",
  "crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/update_/crm/objects/2025-09/{objectType}/batch/update",
  "crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/upsert_/crm/objects/2025-09/{objectType}/batch/upsert",
  "crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/archive",
  "crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/create",
  "crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/read",
  "crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/update",
  "crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/upsert",
  "crm:courses:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}",
  "crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/archive",
  "crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/create"
] as const;
export type HubSpotFullApiBatch03OperationKey = typeof HubSpotFullApiBatch03OperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiBatch03OperationPathParamMap {
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/earliest/{count}": { "count": HubSpotFullApiPathParamValue };
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/latest/{count}": { "count": HubSpotFullApiPathParamValue };
  "webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/journal/2026-03/batch/read": {};
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/{offset}/next/{count}": { "offset": HubSpotFullApiPathParamValue; "count": HubSpotFullApiPathParamValue };
  "crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/archive": {};
  "crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/create": {};
  "crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/read": {};
  "crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/update": {};
  "crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/upsert": {};
  "crm:discounts:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": { "fromObjectType": HubSpotFullApiPathParamValue; "fromObjectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:deal-splits:2026-03:post-/deal-splits/2026-03/batch/read_/crm/objects/v3/deals/splits/batch/read": {};
  "crm:deal-splits:2026-03:post-/deal-splits/2026-03/batch/upsert_/crm/objects/v3/deals/splits/batch/upsert": {};
  "communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/read": {};
  "communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/unsubscribe-all": {};
  "communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/unsubscribe-all/read": {};
  "communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/write": {};
  "automation:automation-v4:4:post-/automation/v4/flows/batch/read": {};
  "automation:automation-v4:4:post-/automation/v4/workflow-id-mappings/batch/read": {};
  "crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/archive_archive": {};
  "crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/create_create": {};
  "crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/read_read": {};
  "crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/update_update": {};
  "crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/upsert_upsert": {};
  "crm:deals:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": { "fromObjectType": HubSpotFullApiPathParamValue; "fromObjectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/archive": {};
  "marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/create": {};
  "marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/read": {};
  "marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/update": {};
  "crm:lists:2026-03:post-/crm/lists/2026-03/records/memberships/batch/read_/crm/lists/v3/records/memberships/batch/read": {};
  "crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/archive_archive": {};
  "crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/create_create": {};
  "crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/read_read": {};
  "crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/update_update": {};
  "crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/upsert_upsert": {};
  "crm:communications:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": { "fromObjectType": HubSpotFullApiPathParamValue; "fromObjectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/archive_archive": {};
  "crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/create_create": {};
  "crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/read_read": {};
  "crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/update_update": {};
  "crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/upsert_upsert": {};
  "crm:tasks:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": { "fromObjectType": HubSpotFullApiPathParamValue; "fromObjectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/archive_archive": {};
  "crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/create_create": {};
  "crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/read_read": {};
  "crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/update_update": {};
  "crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/upsert_upsert": {};
  "crm:notes:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": { "fromObjectType": HubSpotFullApiPathParamValue; "fromObjectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "events:manage-event-definitions:2026-03:post-/events/2026-03/send/batch_/events/v3/send/batch": {};
  "crm:users:2026-03:post-/crm/objects/2026-03/users/batch/archive": {};
  "crm:users:2026-03:post-/crm/objects/2026-03/users/batch/create": {};
  "crm:users:2026-03:post-/crm/objects/2026-03/users/batch/read": {};
  "crm:users:2026-03:post-/crm/objects/2026-03/users/batch/update": {};
  "crm:users:2026-03:post-/crm/objects/2026-03/users/batch/upsert": {};
  "crm:users:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": { "fromObjectType": HubSpotFullApiPathParamValue; "fromObjectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/archive_archive": {};
  "crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/create_create": {};
  "crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/read_read": {};
  "crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/update_update": {};
  "crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/upsert_upsert": {};
  "crm:quotes:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": { "fromObjectType": HubSpotFullApiPathParamValue; "fromObjectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/archive": {};
  "crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/create": {};
  "crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/read": {};
  "crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/update": {};
  "crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/upsert": {};
  "crm:carts:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": { "fromObjectType": HubSpotFullApiPathParamValue; "fromObjectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "events:send-event-completions:2026-03:post-/events/2026-03/send/batch_send": {};
  "crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/archive_/crm/objects/2025-09/{objectType}/batch/archive": { "objectType": HubSpotFullApiPathParamValue };
  "crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/create_/crm/objects/2025-09/{objectType}/batch/create": { "objectType": HubSpotFullApiPathParamValue };
  "crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/read_/crm/objects/2025-09/{objectType}/batch/read": { "objectType": HubSpotFullApiPathParamValue };
  "crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/update_/crm/objects/2025-09/{objectType}/batch/update": { "objectType": HubSpotFullApiPathParamValue };
  "crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/upsert_/crm/objects/2025-09/{objectType}/batch/upsert": { "objectType": HubSpotFullApiPathParamValue };
  "crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/archive": {};
  "crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/create": {};
  "crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/read": {};
  "crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/update": {};
  "crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/upsert": {};
  "crm:courses:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": { "fromObjectType": HubSpotFullApiPathParamValue; "fromObjectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/archive": {};
  "crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/create": {};
}

export interface HubSpotFullApiBatch03OperationRequestMap {
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/earliest/{count}": HubSpotFullApiOperationInput<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/earliest/{count}">;
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/latest/{count}": HubSpotFullApiOperationInput<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/latest/{count}">;
  "webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/journal/2026-03/batch/read": HubSpotFullApiOperationInput<"webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/journal/2026-03/batch/read">;
  "webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/{offset}/next/{count}": HubSpotFullApiOperationInput<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/{offset}/next/{count}">;
  "crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/archive": HubSpotFullApiOperationInput<"crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/archive">;
  "crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/create": HubSpotFullApiOperationInput<"crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/create">;
  "crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/read": HubSpotFullApiOperationInput<"crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/read">;
  "crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/update": HubSpotFullApiOperationInput<"crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/update">;
  "crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/upsert": HubSpotFullApiOperationInput<"crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/upsert">;
  "crm:discounts:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:discounts:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">;
  "crm:deal-splits:2026-03:post-/deal-splits/2026-03/batch/read_/crm/objects/v3/deals/splits/batch/read": HubSpotFullApiOperationInput<"crm:deal-splits:2026-03:post-/deal-splits/2026-03/batch/read_/crm/objects/v3/deals/splits/batch/read">;
  "crm:deal-splits:2026-03:post-/deal-splits/2026-03/batch/upsert_/crm/objects/v3/deals/splits/batch/upsert": HubSpotFullApiOperationInput<"crm:deal-splits:2026-03:post-/deal-splits/2026-03/batch/upsert_/crm/objects/v3/deals/splits/batch/upsert">;
  "communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/read": HubSpotFullApiOperationInput<"communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/read">;
  "communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/unsubscribe-all": HubSpotFullApiOperationInput<"communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/unsubscribe-all">;
  "communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/unsubscribe-all/read": HubSpotFullApiOperationInput<"communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/unsubscribe-all/read">;
  "communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/write": HubSpotFullApiOperationInput<"communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/write">;
  "automation:automation-v4:4:post-/automation/v4/flows/batch/read": HubSpotFullApiOperationInput<"automation:automation-v4:4:post-/automation/v4/flows/batch/read">;
  "automation:automation-v4:4:post-/automation/v4/workflow-id-mappings/batch/read": HubSpotFullApiOperationInput<"automation:automation-v4:4:post-/automation/v4/workflow-id-mappings/batch/read">;
  "crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/archive_archive": HubSpotFullApiOperationInput<"crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/archive_archive">;
  "crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/create_create": HubSpotFullApiOperationInput<"crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/create_create">;
  "crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/read_read": HubSpotFullApiOperationInput<"crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/read_read">;
  "crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/update_update": HubSpotFullApiOperationInput<"crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/update_update">;
  "crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/upsert_upsert": HubSpotFullApiOperationInput<"crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/upsert_upsert">;
  "crm:deals:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:deals:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">;
  "marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/archive": HubSpotFullApiOperationInput<"marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/archive">;
  "marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/create": HubSpotFullApiOperationInput<"marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/create">;
  "marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/read": HubSpotFullApiOperationInput<"marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/read">;
  "marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/update": HubSpotFullApiOperationInput<"marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/update">;
  "crm:lists:2026-03:post-/crm/lists/2026-03/records/memberships/batch/read_/crm/lists/v3/records/memberships/batch/read": HubSpotFullApiOperationInput<"crm:lists:2026-03:post-/crm/lists/2026-03/records/memberships/batch/read_/crm/lists/v3/records/memberships/batch/read">;
  "crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/archive_archive": HubSpotFullApiOperationInput<"crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/archive_archive">;
  "crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/create_create": HubSpotFullApiOperationInput<"crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/create_create">;
  "crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/read_read": HubSpotFullApiOperationInput<"crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/read_read">;
  "crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/update_update": HubSpotFullApiOperationInput<"crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/update_update">;
  "crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/upsert_upsert": HubSpotFullApiOperationInput<"crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/upsert_upsert">;
  "crm:communications:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:communications:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">;
  "crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/archive_archive": HubSpotFullApiOperationInput<"crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/archive_archive">;
  "crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/create_create": HubSpotFullApiOperationInput<"crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/create_create">;
  "crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/read_read": HubSpotFullApiOperationInput<"crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/read_read">;
  "crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/update_update": HubSpotFullApiOperationInput<"crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/update_update">;
  "crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/upsert_upsert": HubSpotFullApiOperationInput<"crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/upsert_upsert">;
  "crm:tasks:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:tasks:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">;
  "crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/archive_archive": HubSpotFullApiOperationInput<"crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/archive_archive">;
  "crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/create_create": HubSpotFullApiOperationInput<"crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/create_create">;
  "crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/read_read": HubSpotFullApiOperationInput<"crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/read_read">;
  "crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/update_update": HubSpotFullApiOperationInput<"crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/update_update">;
  "crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/upsert_upsert": HubSpotFullApiOperationInput<"crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/upsert_upsert">;
  "crm:notes:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:notes:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">;
  "events:manage-event-definitions:2026-03:post-/events/2026-03/send/batch_/events/v3/send/batch": HubSpotFullApiOperationInput<"events:manage-event-definitions:2026-03:post-/events/2026-03/send/batch_/events/v3/send/batch">;
  "crm:users:2026-03:post-/crm/objects/2026-03/users/batch/archive": HubSpotFullApiOperationInput<"crm:users:2026-03:post-/crm/objects/2026-03/users/batch/archive">;
  "crm:users:2026-03:post-/crm/objects/2026-03/users/batch/create": HubSpotFullApiOperationInput<"crm:users:2026-03:post-/crm/objects/2026-03/users/batch/create">;
  "crm:users:2026-03:post-/crm/objects/2026-03/users/batch/read": HubSpotFullApiOperationInput<"crm:users:2026-03:post-/crm/objects/2026-03/users/batch/read">;
  "crm:users:2026-03:post-/crm/objects/2026-03/users/batch/update": HubSpotFullApiOperationInput<"crm:users:2026-03:post-/crm/objects/2026-03/users/batch/update">;
  "crm:users:2026-03:post-/crm/objects/2026-03/users/batch/upsert": HubSpotFullApiOperationInput<"crm:users:2026-03:post-/crm/objects/2026-03/users/batch/upsert">;
  "crm:users:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:users:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">;
  "crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/archive_archive": HubSpotFullApiOperationInput<"crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/archive_archive">;
  "crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/create_create": HubSpotFullApiOperationInput<"crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/create_create">;
  "crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/read_read": HubSpotFullApiOperationInput<"crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/read_read">;
  "crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/update_update": HubSpotFullApiOperationInput<"crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/update_update">;
  "crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/upsert_upsert": HubSpotFullApiOperationInput<"crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/upsert_upsert">;
  "crm:quotes:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:quotes:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">;
  "crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/archive": HubSpotFullApiOperationInput<"crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/archive">;
  "crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/create": HubSpotFullApiOperationInput<"crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/create">;
  "crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/read": HubSpotFullApiOperationInput<"crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/read">;
  "crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/update": HubSpotFullApiOperationInput<"crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/update">;
  "crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/upsert": HubSpotFullApiOperationInput<"crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/upsert">;
  "crm:carts:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:carts:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">;
  "events:send-event-completions:2026-03:post-/events/2026-03/send/batch_send": HubSpotFullApiOperationInput<"events:send-event-completions:2026-03:post-/events/2026-03/send/batch_send">;
  "crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/archive_/crm/objects/2025-09/{objectType}/batch/archive": HubSpotFullApiOperationInput<"crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/archive_/crm/objects/2025-09/{objectType}/batch/archive">;
  "crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/create_/crm/objects/2025-09/{objectType}/batch/create": HubSpotFullApiOperationInput<"crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/create_/crm/objects/2025-09/{objectType}/batch/create">;
  "crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/read_/crm/objects/2025-09/{objectType}/batch/read": HubSpotFullApiOperationInput<"crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/read_/crm/objects/2025-09/{objectType}/batch/read">;
  "crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/update_/crm/objects/2025-09/{objectType}/batch/update": HubSpotFullApiOperationInput<"crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/update_/crm/objects/2025-09/{objectType}/batch/update">;
  "crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/upsert_/crm/objects/2025-09/{objectType}/batch/upsert": HubSpotFullApiOperationInput<"crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/upsert_/crm/objects/2025-09/{objectType}/batch/upsert">;
  "crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/archive": HubSpotFullApiOperationInput<"crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/archive">;
  "crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/create": HubSpotFullApiOperationInput<"crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/create">;
  "crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/read": HubSpotFullApiOperationInput<"crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/read">;
  "crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/update": HubSpotFullApiOperationInput<"crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/update">;
  "crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/upsert": HubSpotFullApiOperationInput<"crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/upsert">;
  "crm:courses:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:courses:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">;
  "crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/archive": HubSpotFullApiOperationInput<"crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/archive">;
  "crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/create": HubSpotFullApiOperationInput<"crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/create">;
}

export interface HubSpotFullApiBatch03GeneratedClient {
  WebhooksJournalGetWebhooksJournalJournal202603BatchEarliestCount(...args: HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/earliest/{count}">): Promise<HubSpotFullApiOperationResponseMap["webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/earliest/{count}"]>;
  WebhooksJournalGetWebhooksJournalJournal202603BatchLatestCount(...args: HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/latest/{count}">): Promise<HubSpotFullApiOperationResponseMap["webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/latest/{count}"]>;
  WebhooksJournalPostWebhooksJournalJournal202603BatchRead(...args: HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/journal/2026-03/batch/read">): Promise<HubSpotFullApiOperationResponseMap["webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/journal/2026-03/batch/read"]>;
  WebhooksJournalGetWebhooksJournalJournal202603BatchOffsetNextCount(...args: HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/{offset}/next/{count}">): Promise<HubSpotFullApiOperationResponseMap["webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/{offset}/next/{count}"]>;
  DiscountsPostCrmObjects202603DiscountsBatchArchive(...args: HubSpotFullApiOperationArgs<"crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/archive">): Promise<HubSpotFullApiOperationResponseMap["crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/archive"]>;
  DiscountsPostCrmObjects202603DiscountsBatchCreate(...args: HubSpotFullApiOperationArgs<"crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/create">): Promise<HubSpotFullApiOperationResponseMap["crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/create"]>;
  DiscountsPostCrmObjects202603DiscountsBatchRead(...args: HubSpotFullApiOperationArgs<"crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/read">): Promise<HubSpotFullApiOperationResponseMap["crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/read"]>;
  DiscountsPostCrmObjects202603DiscountsBatchUpdate(...args: HubSpotFullApiOperationArgs<"crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/update">): Promise<HubSpotFullApiOperationResponseMap["crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/update"]>;
  DiscountsPostCrmObjects202603DiscountsBatchUpsert(...args: HubSpotFullApiOperationArgs<"crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/upsert">): Promise<HubSpotFullApiOperationResponseMap["crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/upsert"]>;
  DiscountsPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:discounts:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:discounts:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}"]>;
  DealSplitsPostDealSplits202603BatchReadCrmObjectsV3DealsSplitsBatchRead(...args: HubSpotFullApiOperationArgs<"crm:deal-splits:2026-03:post-/deal-splits/2026-03/batch/read_/crm/objects/v3/deals/splits/batch/read">): Promise<HubSpotFullApiOperationResponseMap["crm:deal-splits:2026-03:post-/deal-splits/2026-03/batch/read_/crm/objects/v3/deals/splits/batch/read"]>;
  DealSplitsPostDealSplits202603BatchUpsertCrmObjectsV3DealsSplitsBatchUpsert(...args: HubSpotFullApiOperationArgs<"crm:deal-splits:2026-03:post-/deal-splits/2026-03/batch/upsert_/crm/objects/v3/deals/splits/batch/upsert">): Promise<HubSpotFullApiOperationResponseMap["crm:deal-splits:2026-03:post-/deal-splits/2026-03/batch/upsert_/crm/objects/v3/deals/splits/batch/upsert"]>;
  SubscriptionsPostCommunicationPreferences202603StatusesBatchRead(...args: HubSpotFullApiOperationArgs<"communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/read">): Promise<HubSpotFullApiOperationResponseMap["communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/read"]>;
  SubscriptionsPostCommunicationPreferences202603StatusesBatchUnsubscribeAll(...args: HubSpotFullApiOperationArgs<"communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/unsubscribe-all">): Promise<HubSpotFullApiOperationResponseMap["communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/unsubscribe-all"]>;
  SubscriptionsPostCommunicationPreferences202603StatusesBatchUnsubscribeAllRead(...args: HubSpotFullApiOperationArgs<"communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/unsubscribe-all/read">): Promise<HubSpotFullApiOperationResponseMap["communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/unsubscribe-all/read"]>;
  SubscriptionsPostCommunicationPreferences202603StatusesBatchWrite(...args: HubSpotFullApiOperationArgs<"communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/write">): Promise<HubSpotFullApiOperationResponseMap["communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/write"]>;
  AutomationV4PostAutomationV4FlowsBatchRead(...args: HubSpotFullApiOperationArgs<"automation:automation-v4:4:post-/automation/v4/flows/batch/read">): Promise<HubSpotFullApiOperationResponseMap["automation:automation-v4:4:post-/automation/v4/flows/batch/read"]>;
  AutomationV4PostAutomationV4WorkflowIdMappingsBatchRead(...args: HubSpotFullApiOperationArgs<"automation:automation-v4:4:post-/automation/v4/workflow-id-mappings/batch/read">): Promise<HubSpotFullApiOperationResponseMap["automation:automation-v4:4:post-/automation/v4/workflow-id-mappings/batch/read"]>;
  DealsPostCrmObjects20260303BatchArchiveArchive(...args: HubSpotFullApiOperationArgs<"crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/archive_archive">): Promise<HubSpotFullApiOperationResponseMap["crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/archive_archive"]>;
  DealsPostCrmObjects20260303BatchCreateCreate(...args: HubSpotFullApiOperationArgs<"crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/create_create">): Promise<HubSpotFullApiOperationResponseMap["crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/create_create"]>;
  DealsPostCrmObjects20260303BatchReadRead(...args: HubSpotFullApiOperationArgs<"crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/read_read">): Promise<HubSpotFullApiOperationResponseMap["crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/read_read"]>;
  DealsPostCrmObjects20260303BatchUpdateUpdate(...args: HubSpotFullApiOperationArgs<"crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/update_update">): Promise<HubSpotFullApiOperationResponseMap["crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/update_update"]>;
  DealsPostCrmObjects20260303BatchUpsertUpsert(...args: HubSpotFullApiOperationArgs<"crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/upsert_upsert">): Promise<HubSpotFullApiOperationResponseMap["crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/upsert_upsert"]>;
  DealsPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:deals:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:deals:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}"]>;
  CampaignsPublicApiPostMarketingCampaigns202603BatchArchive(...args: HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/archive">): Promise<HubSpotFullApiOperationResponseMap["marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/archive"]>;
  CampaignsPublicApiPostMarketingCampaigns202603BatchCreate(...args: HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/create">): Promise<HubSpotFullApiOperationResponseMap["marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/create"]>;
  CampaignsPublicApiPostMarketingCampaigns202603BatchRead(...args: HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/read">): Promise<HubSpotFullApiOperationResponseMap["marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/read"]>;
  CampaignsPublicApiPostMarketingCampaigns202603BatchUpdate(...args: HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/update">): Promise<HubSpotFullApiOperationResponseMap["marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/update"]>;
  ListsPostCrmLists202603RecordsMembershipsBatchReadCrmListsV3RecordsMembershipsBatchRead(...args: HubSpotFullApiOperationArgs<"crm:lists:2026-03:post-/crm/lists/2026-03/records/memberships/batch/read_/crm/lists/v3/records/memberships/batch/read">): Promise<HubSpotFullApiOperationResponseMap["crm:lists:2026-03:post-/crm/lists/2026-03/records/memberships/batch/read_/crm/lists/v3/records/memberships/batch/read"]>;
  CommunicationsPostCrmObjects202603CommunicationsBatchArchiveArchive(...args: HubSpotFullApiOperationArgs<"crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/archive_archive">): Promise<HubSpotFullApiOperationResponseMap["crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/archive_archive"]>;
  CommunicationsPostCrmObjects202603CommunicationsBatchCreateCreate(...args: HubSpotFullApiOperationArgs<"crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/create_create">): Promise<HubSpotFullApiOperationResponseMap["crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/create_create"]>;
  CommunicationsPostCrmObjects202603CommunicationsBatchReadRead(...args: HubSpotFullApiOperationArgs<"crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/read_read">): Promise<HubSpotFullApiOperationResponseMap["crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/read_read"]>;
  CommunicationsPostCrmObjects202603CommunicationsBatchUpdateUpdate(...args: HubSpotFullApiOperationArgs<"crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/update_update">): Promise<HubSpotFullApiOperationResponseMap["crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/update_update"]>;
  CommunicationsPostCrmObjects202603CommunicationsBatchUpsertUpsert(...args: HubSpotFullApiOperationArgs<"crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/upsert_upsert">): Promise<HubSpotFullApiOperationResponseMap["crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/upsert_upsert"]>;
  CommunicationsPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:communications:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:communications:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}"]>;
  TasksPostCrmObjects202603TasksBatchArchiveArchive(...args: HubSpotFullApiOperationArgs<"crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/archive_archive">): Promise<HubSpotFullApiOperationResponseMap["crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/archive_archive"]>;
  TasksPostCrmObjects202603TasksBatchCreateCreate(...args: HubSpotFullApiOperationArgs<"crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/create_create">): Promise<HubSpotFullApiOperationResponseMap["crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/create_create"]>;
  TasksPostCrmObjects202603TasksBatchReadRead(...args: HubSpotFullApiOperationArgs<"crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/read_read">): Promise<HubSpotFullApiOperationResponseMap["crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/read_read"]>;
  TasksPostCrmObjects202603TasksBatchUpdateUpdate(...args: HubSpotFullApiOperationArgs<"crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/update_update">): Promise<HubSpotFullApiOperationResponseMap["crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/update_update"]>;
  TasksPostCrmObjects202603TasksBatchUpsertUpsert(...args: HubSpotFullApiOperationArgs<"crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/upsert_upsert">): Promise<HubSpotFullApiOperationResponseMap["crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/upsert_upsert"]>;
  TasksPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:tasks:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:tasks:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}"]>;
  NotesPostCrmObjects202603NotesBatchArchiveArchive(...args: HubSpotFullApiOperationArgs<"crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/archive_archive">): Promise<HubSpotFullApiOperationResponseMap["crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/archive_archive"]>;
  NotesPostCrmObjects202603NotesBatchCreateCreate(...args: HubSpotFullApiOperationArgs<"crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/create_create">): Promise<HubSpotFullApiOperationResponseMap["crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/create_create"]>;
  NotesPostCrmObjects202603NotesBatchReadRead(...args: HubSpotFullApiOperationArgs<"crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/read_read">): Promise<HubSpotFullApiOperationResponseMap["crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/read_read"]>;
  NotesPostCrmObjects202603NotesBatchUpdateUpdate(...args: HubSpotFullApiOperationArgs<"crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/update_update">): Promise<HubSpotFullApiOperationResponseMap["crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/update_update"]>;
  NotesPostCrmObjects202603NotesBatchUpsertUpsert(...args: HubSpotFullApiOperationArgs<"crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/upsert_upsert">): Promise<HubSpotFullApiOperationResponseMap["crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/upsert_upsert"]>;
  NotesPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:notes:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:notes:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}"]>;
  ManageEventDefinitionsPostEvents202603SendBatchEventsV3SendBatch(...args: HubSpotFullApiOperationArgs<"events:manage-event-definitions:2026-03:post-/events/2026-03/send/batch_/events/v3/send/batch">): Promise<HubSpotFullApiOperationResponseMap["events:manage-event-definitions:2026-03:post-/events/2026-03/send/batch_/events/v3/send/batch"]>;
  UsersPostCrmObjects202603UsersBatchArchive(...args: HubSpotFullApiOperationArgs<"crm:users:2026-03:post-/crm/objects/2026-03/users/batch/archive">): Promise<HubSpotFullApiOperationResponseMap["crm:users:2026-03:post-/crm/objects/2026-03/users/batch/archive"]>;
  UsersPostCrmObjects202603UsersBatchCreate(...args: HubSpotFullApiOperationArgs<"crm:users:2026-03:post-/crm/objects/2026-03/users/batch/create">): Promise<HubSpotFullApiOperationResponseMap["crm:users:2026-03:post-/crm/objects/2026-03/users/batch/create"]>;
  UsersPostCrmObjects202603UsersBatchRead(...args: HubSpotFullApiOperationArgs<"crm:users:2026-03:post-/crm/objects/2026-03/users/batch/read">): Promise<HubSpotFullApiOperationResponseMap["crm:users:2026-03:post-/crm/objects/2026-03/users/batch/read"]>;
  UsersPostCrmObjects202603UsersBatchUpdate(...args: HubSpotFullApiOperationArgs<"crm:users:2026-03:post-/crm/objects/2026-03/users/batch/update">): Promise<HubSpotFullApiOperationResponseMap["crm:users:2026-03:post-/crm/objects/2026-03/users/batch/update"]>;
  UsersPostCrmObjects202603UsersBatchUpsert(...args: HubSpotFullApiOperationArgs<"crm:users:2026-03:post-/crm/objects/2026-03/users/batch/upsert">): Promise<HubSpotFullApiOperationResponseMap["crm:users:2026-03:post-/crm/objects/2026-03/users/batch/upsert"]>;
  UsersPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:users:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:users:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}"]>;
  QuotesPostCrmObjects202603QuotesBatchArchiveArchive(...args: HubSpotFullApiOperationArgs<"crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/archive_archive">): Promise<HubSpotFullApiOperationResponseMap["crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/archive_archive"]>;
  QuotesPostCrmObjects202603QuotesBatchCreateCreate(...args: HubSpotFullApiOperationArgs<"crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/create_create">): Promise<HubSpotFullApiOperationResponseMap["crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/create_create"]>;
  QuotesPostCrmObjects202603QuotesBatchReadRead(...args: HubSpotFullApiOperationArgs<"crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/read_read">): Promise<HubSpotFullApiOperationResponseMap["crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/read_read"]>;
  QuotesPostCrmObjects202603QuotesBatchUpdateUpdate(...args: HubSpotFullApiOperationArgs<"crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/update_update">): Promise<HubSpotFullApiOperationResponseMap["crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/update_update"]>;
  QuotesPostCrmObjects202603QuotesBatchUpsertUpsert(...args: HubSpotFullApiOperationArgs<"crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/upsert_upsert">): Promise<HubSpotFullApiOperationResponseMap["crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/upsert_upsert"]>;
  QuotesPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:quotes:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:quotes:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}"]>;
  CartsPostCrmObjects202603CartsBatchArchive(...args: HubSpotFullApiOperationArgs<"crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/archive">): Promise<HubSpotFullApiOperationResponseMap["crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/archive"]>;
  CartsPostCrmObjects202603CartsBatchCreate(...args: HubSpotFullApiOperationArgs<"crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/create">): Promise<HubSpotFullApiOperationResponseMap["crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/create"]>;
  CartsPostCrmObjects202603CartsBatchRead(...args: HubSpotFullApiOperationArgs<"crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/read">): Promise<HubSpotFullApiOperationResponseMap["crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/read"]>;
  CartsPostCrmObjects202603CartsBatchUpdate(...args: HubSpotFullApiOperationArgs<"crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/update">): Promise<HubSpotFullApiOperationResponseMap["crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/update"]>;
  CartsPostCrmObjects202603CartsBatchUpsert(...args: HubSpotFullApiOperationArgs<"crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/upsert">): Promise<HubSpotFullApiOperationResponseMap["crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/upsert"]>;
  CartsPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:carts:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:carts:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}"]>;
  SendEventCompletionsPostEvents202603SendBatchSend(...args: HubSpotFullApiOperationArgs<"events:send-event-completions:2026-03:post-/events/2026-03/send/batch_send">): Promise<HubSpotFullApiOperationResponseMap["events:send-event-completions:2026-03:post-/events/2026-03/send/batch_send"]>;
  ObjectsPostCrmObjects202603ObjectTypeBatchArchiveCrmObjects202509ObjectTypeBatchArchive(...args: HubSpotFullApiOperationArgs<"crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/archive_/crm/objects/2025-09/{objectType}/batch/archive">): Promise<HubSpotFullApiOperationResponseMap["crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/archive_/crm/objects/2025-09/{objectType}/batch/archive"]>;
  ObjectsPostCrmObjects202603ObjectTypeBatchCreateCrmObjects202509ObjectTypeBatchCreate(...args: HubSpotFullApiOperationArgs<"crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/create_/crm/objects/2025-09/{objectType}/batch/create">): Promise<HubSpotFullApiOperationResponseMap["crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/create_/crm/objects/2025-09/{objectType}/batch/create"]>;
  ObjectsPostCrmObjects202603ObjectTypeBatchReadCrmObjects202509ObjectTypeBatchRead(...args: HubSpotFullApiOperationArgs<"crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/read_/crm/objects/2025-09/{objectType}/batch/read">): Promise<HubSpotFullApiOperationResponseMap["crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/read_/crm/objects/2025-09/{objectType}/batch/read"]>;
  ObjectsPostCrmObjects202603ObjectTypeBatchUpdateCrmObjects202509ObjectTypeBatchUpdate(...args: HubSpotFullApiOperationArgs<"crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/update_/crm/objects/2025-09/{objectType}/batch/update">): Promise<HubSpotFullApiOperationResponseMap["crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/update_/crm/objects/2025-09/{objectType}/batch/update"]>;
  ObjectsPostCrmObjects202603ObjectTypeBatchUpsertCrmObjects202509ObjectTypeBatchUpsert(...args: HubSpotFullApiOperationArgs<"crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/upsert_/crm/objects/2025-09/{objectType}/batch/upsert">): Promise<HubSpotFullApiOperationResponseMap["crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/upsert_/crm/objects/2025-09/{objectType}/batch/upsert"]>;
  CoursesPostCrmObjects2026030410BatchArchive(...args: HubSpotFullApiOperationArgs<"crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/archive">): Promise<HubSpotFullApiOperationResponseMap["crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/archive"]>;
  CoursesPostCrmObjects2026030410BatchCreate(...args: HubSpotFullApiOperationArgs<"crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/create">): Promise<HubSpotFullApiOperationResponseMap["crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/create"]>;
  CoursesPostCrmObjects2026030410BatchRead(...args: HubSpotFullApiOperationArgs<"crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/read">): Promise<HubSpotFullApiOperationResponseMap["crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/read"]>;
  CoursesPostCrmObjects2026030410BatchUpdate(...args: HubSpotFullApiOperationArgs<"crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/update">): Promise<HubSpotFullApiOperationResponseMap["crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/update"]>;
  CoursesPostCrmObjects2026030410BatchUpsert(...args: HubSpotFullApiOperationArgs<"crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/upsert">): Promise<HubSpotFullApiOperationResponseMap["crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/upsert"]>;
  CoursesPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:courses:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:courses:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}"]>;
  FeesPostCrmObjects202603FeesBatchArchive(...args: HubSpotFullApiOperationArgs<"crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/archive">): Promise<HubSpotFullApiOperationResponseMap["crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/archive"]>;
  FeesPostCrmObjects202603FeesBatchCreate(...args: HubSpotFullApiOperationArgs<"crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/create">): Promise<HubSpotFullApiOperationResponseMap["crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/create"]>;
}

export const HubSpotFullApiBatch03GeneratedFunctionNames = [
  "WebhooksJournalGetWebhooksJournalJournal202603BatchEarliestCount",
  "WebhooksJournalGetWebhooksJournalJournal202603BatchLatestCount",
  "WebhooksJournalPostWebhooksJournalJournal202603BatchRead",
  "WebhooksJournalGetWebhooksJournalJournal202603BatchOffsetNextCount",
  "DiscountsPostCrmObjects202603DiscountsBatchArchive",
  "DiscountsPostCrmObjects202603DiscountsBatchCreate",
  "DiscountsPostCrmObjects202603DiscountsBatchRead",
  "DiscountsPostCrmObjects202603DiscountsBatchUpdate",
  "DiscountsPostCrmObjects202603DiscountsBatchUpsert",
  "DiscountsPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId",
  "DealSplitsPostDealSplits202603BatchReadCrmObjectsV3DealsSplitsBatchRead",
  "DealSplitsPostDealSplits202603BatchUpsertCrmObjectsV3DealsSplitsBatchUpsert",
  "SubscriptionsPostCommunicationPreferences202603StatusesBatchRead",
  "SubscriptionsPostCommunicationPreferences202603StatusesBatchUnsubscribeAll",
  "SubscriptionsPostCommunicationPreferences202603StatusesBatchUnsubscribeAllRead",
  "SubscriptionsPostCommunicationPreferences202603StatusesBatchWrite",
  "AutomationV4PostAutomationV4FlowsBatchRead",
  "AutomationV4PostAutomationV4WorkflowIdMappingsBatchRead",
  "DealsPostCrmObjects20260303BatchArchiveArchive",
  "DealsPostCrmObjects20260303BatchCreateCreate",
  "DealsPostCrmObjects20260303BatchReadRead",
  "DealsPostCrmObjects20260303BatchUpdateUpdate",
  "DealsPostCrmObjects20260303BatchUpsertUpsert",
  "DealsPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId",
  "CampaignsPublicApiPostMarketingCampaigns202603BatchArchive",
  "CampaignsPublicApiPostMarketingCampaigns202603BatchCreate",
  "CampaignsPublicApiPostMarketingCampaigns202603BatchRead",
  "CampaignsPublicApiPostMarketingCampaigns202603BatchUpdate",
  "ListsPostCrmLists202603RecordsMembershipsBatchReadCrmListsV3RecordsMembershipsBatchRead",
  "CommunicationsPostCrmObjects202603CommunicationsBatchArchiveArchive",
  "CommunicationsPostCrmObjects202603CommunicationsBatchCreateCreate",
  "CommunicationsPostCrmObjects202603CommunicationsBatchReadRead",
  "CommunicationsPostCrmObjects202603CommunicationsBatchUpdateUpdate",
  "CommunicationsPostCrmObjects202603CommunicationsBatchUpsertUpsert",
  "CommunicationsPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId",
  "TasksPostCrmObjects202603TasksBatchArchiveArchive",
  "TasksPostCrmObjects202603TasksBatchCreateCreate",
  "TasksPostCrmObjects202603TasksBatchReadRead",
  "TasksPostCrmObjects202603TasksBatchUpdateUpdate",
  "TasksPostCrmObjects202603TasksBatchUpsertUpsert",
  "TasksPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId",
  "NotesPostCrmObjects202603NotesBatchArchiveArchive",
  "NotesPostCrmObjects202603NotesBatchCreateCreate",
  "NotesPostCrmObjects202603NotesBatchReadRead",
  "NotesPostCrmObjects202603NotesBatchUpdateUpdate",
  "NotesPostCrmObjects202603NotesBatchUpsertUpsert",
  "NotesPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId",
  "ManageEventDefinitionsPostEvents202603SendBatchEventsV3SendBatch",
  "UsersPostCrmObjects202603UsersBatchArchive",
  "UsersPostCrmObjects202603UsersBatchCreate",
  "UsersPostCrmObjects202603UsersBatchRead",
  "UsersPostCrmObjects202603UsersBatchUpdate",
  "UsersPostCrmObjects202603UsersBatchUpsert",
  "UsersPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId",
  "QuotesPostCrmObjects202603QuotesBatchArchiveArchive",
  "QuotesPostCrmObjects202603QuotesBatchCreateCreate",
  "QuotesPostCrmObjects202603QuotesBatchReadRead",
  "QuotesPostCrmObjects202603QuotesBatchUpdateUpdate",
  "QuotesPostCrmObjects202603QuotesBatchUpsertUpsert",
  "QuotesPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId",
  "CartsPostCrmObjects202603CartsBatchArchive",
  "CartsPostCrmObjects202603CartsBatchCreate",
  "CartsPostCrmObjects202603CartsBatchRead",
  "CartsPostCrmObjects202603CartsBatchUpdate",
  "CartsPostCrmObjects202603CartsBatchUpsert",
  "CartsPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId",
  "SendEventCompletionsPostEvents202603SendBatchSend",
  "ObjectsPostCrmObjects202603ObjectTypeBatchArchiveCrmObjects202509ObjectTypeBatchArchive",
  "ObjectsPostCrmObjects202603ObjectTypeBatchCreateCrmObjects202509ObjectTypeBatchCreate",
  "ObjectsPostCrmObjects202603ObjectTypeBatchReadCrmObjects202509ObjectTypeBatchRead",
  "ObjectsPostCrmObjects202603ObjectTypeBatchUpdateCrmObjects202509ObjectTypeBatchUpdate",
  "ObjectsPostCrmObjects202603ObjectTypeBatchUpsertCrmObjects202509ObjectTypeBatchUpsert",
  "CoursesPostCrmObjects2026030410BatchArchive",
  "CoursesPostCrmObjects2026030410BatchCreate",
  "CoursesPostCrmObjects2026030410BatchRead",
  "CoursesPostCrmObjects2026030410BatchUpdate",
  "CoursesPostCrmObjects2026030410BatchUpsert",
  "CoursesPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId",
  "FeesPostCrmObjects202603FeesBatchArchive",
  "FeesPostCrmObjects202603FeesBatchCreate"
] as const satisfies readonly (keyof HubSpotFullApiBatch03GeneratedClient)[];

export function createHubSpotFullApiBatch03GeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiBatch03GeneratedClient {
  return {
    WebhooksJournalGetWebhooksJournalJournal202603BatchEarliestCount: (...args) => callOperation("webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/earliest/{count}", ...(args as HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/earliest/{count}">)),
    WebhooksJournalGetWebhooksJournalJournal202603BatchLatestCount: (...args) => callOperation("webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/latest/{count}", ...(args as HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/latest/{count}">)),
    WebhooksJournalPostWebhooksJournalJournal202603BatchRead: (...args) => callOperation("webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/journal/2026-03/batch/read", ...(args as HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:post-/webhooks-journal/journal/2026-03/batch/read">)),
    WebhooksJournalGetWebhooksJournalJournal202603BatchOffsetNextCount: (...args) => callOperation("webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/{offset}/next/{count}", ...(args as HubSpotFullApiOperationArgs<"webhooks-journal:webhooks-journal:2026-03:get-/webhooks-journal/journal/2026-03/batch/{offset}/next/{count}">)),
    DiscountsPostCrmObjects202603DiscountsBatchArchive: (...args) => callOperation("crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/archive", ...(args as HubSpotFullApiOperationArgs<"crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/archive">)),
    DiscountsPostCrmObjects202603DiscountsBatchCreate: (...args) => callOperation("crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/create", ...(args as HubSpotFullApiOperationArgs<"crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/create">)),
    DiscountsPostCrmObjects202603DiscountsBatchRead: (...args) => callOperation("crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/read", ...(args as HubSpotFullApiOperationArgs<"crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/read">)),
    DiscountsPostCrmObjects202603DiscountsBatchUpdate: (...args) => callOperation("crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/update", ...(args as HubSpotFullApiOperationArgs<"crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/update">)),
    DiscountsPostCrmObjects202603DiscountsBatchUpsert: (...args) => callOperation("crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/upsert", ...(args as HubSpotFullApiOperationArgs<"crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/batch/upsert">)),
    DiscountsPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId: (...args) => callOperation("crm:discounts:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:discounts:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">)),
    DealSplitsPostDealSplits202603BatchReadCrmObjectsV3DealsSplitsBatchRead: (...args) => callOperation("crm:deal-splits:2026-03:post-/deal-splits/2026-03/batch/read_/crm/objects/v3/deals/splits/batch/read", ...(args as HubSpotFullApiOperationArgs<"crm:deal-splits:2026-03:post-/deal-splits/2026-03/batch/read_/crm/objects/v3/deals/splits/batch/read">)),
    DealSplitsPostDealSplits202603BatchUpsertCrmObjectsV3DealsSplitsBatchUpsert: (...args) => callOperation("crm:deal-splits:2026-03:post-/deal-splits/2026-03/batch/upsert_/crm/objects/v3/deals/splits/batch/upsert", ...(args as HubSpotFullApiOperationArgs<"crm:deal-splits:2026-03:post-/deal-splits/2026-03/batch/upsert_/crm/objects/v3/deals/splits/batch/upsert">)),
    SubscriptionsPostCommunicationPreferences202603StatusesBatchRead: (...args) => callOperation("communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/read", ...(args as HubSpotFullApiOperationArgs<"communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/read">)),
    SubscriptionsPostCommunicationPreferences202603StatusesBatchUnsubscribeAll: (...args) => callOperation("communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/unsubscribe-all", ...(args as HubSpotFullApiOperationArgs<"communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/unsubscribe-all">)),
    SubscriptionsPostCommunicationPreferences202603StatusesBatchUnsubscribeAllRead: (...args) => callOperation("communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/unsubscribe-all/read", ...(args as HubSpotFullApiOperationArgs<"communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/unsubscribe-all/read">)),
    SubscriptionsPostCommunicationPreferences202603StatusesBatchWrite: (...args) => callOperation("communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/write", ...(args as HubSpotFullApiOperationArgs<"communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/batch/write">)),
    AutomationV4PostAutomationV4FlowsBatchRead: (...args) => callOperation("automation:automation-v4:4:post-/automation/v4/flows/batch/read", ...(args as HubSpotFullApiOperationArgs<"automation:automation-v4:4:post-/automation/v4/flows/batch/read">)),
    AutomationV4PostAutomationV4WorkflowIdMappingsBatchRead: (...args) => callOperation("automation:automation-v4:4:post-/automation/v4/workflow-id-mappings/batch/read", ...(args as HubSpotFullApiOperationArgs<"automation:automation-v4:4:post-/automation/v4/workflow-id-mappings/batch/read">)),
    DealsPostCrmObjects20260303BatchArchiveArchive: (...args) => callOperation("crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/archive_archive", ...(args as HubSpotFullApiOperationArgs<"crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/archive_archive">)),
    DealsPostCrmObjects20260303BatchCreateCreate: (...args) => callOperation("crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/create_create", ...(args as HubSpotFullApiOperationArgs<"crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/create_create">)),
    DealsPostCrmObjects20260303BatchReadRead: (...args) => callOperation("crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/read_read", ...(args as HubSpotFullApiOperationArgs<"crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/read_read">)),
    DealsPostCrmObjects20260303BatchUpdateUpdate: (...args) => callOperation("crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/update_update", ...(args as HubSpotFullApiOperationArgs<"crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/update_update">)),
    DealsPostCrmObjects20260303BatchUpsertUpsert: (...args) => callOperation("crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/upsert_upsert", ...(args as HubSpotFullApiOperationArgs<"crm:deals:2026-03:post-/crm/objects/2026-03/0-3/batch/upsert_upsert">)),
    DealsPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId: (...args) => callOperation("crm:deals:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:deals:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">)),
    CampaignsPublicApiPostMarketingCampaigns202603BatchArchive: (...args) => callOperation("marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/archive", ...(args as HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/archive">)),
    CampaignsPublicApiPostMarketingCampaigns202603BatchCreate: (...args) => callOperation("marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/create", ...(args as HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/create">)),
    CampaignsPublicApiPostMarketingCampaigns202603BatchRead: (...args) => callOperation("marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/read", ...(args as HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/read">)),
    CampaignsPublicApiPostMarketingCampaigns202603BatchUpdate: (...args) => callOperation("marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/update", ...(args as HubSpotFullApiOperationArgs<"marketing:campaigns-public-api:2026-03:post-/marketing/campaigns/2026-03/batch/update">)),
    ListsPostCrmLists202603RecordsMembershipsBatchReadCrmListsV3RecordsMembershipsBatchRead: (...args) => callOperation("crm:lists:2026-03:post-/crm/lists/2026-03/records/memberships/batch/read_/crm/lists/v3/records/memberships/batch/read", ...(args as HubSpotFullApiOperationArgs<"crm:lists:2026-03:post-/crm/lists/2026-03/records/memberships/batch/read_/crm/lists/v3/records/memberships/batch/read">)),
    CommunicationsPostCrmObjects202603CommunicationsBatchArchiveArchive: (...args) => callOperation("crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/archive_archive", ...(args as HubSpotFullApiOperationArgs<"crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/archive_archive">)),
    CommunicationsPostCrmObjects202603CommunicationsBatchCreateCreate: (...args) => callOperation("crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/create_create", ...(args as HubSpotFullApiOperationArgs<"crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/create_create">)),
    CommunicationsPostCrmObjects202603CommunicationsBatchReadRead: (...args) => callOperation("crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/read_read", ...(args as HubSpotFullApiOperationArgs<"crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/read_read">)),
    CommunicationsPostCrmObjects202603CommunicationsBatchUpdateUpdate: (...args) => callOperation("crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/update_update", ...(args as HubSpotFullApiOperationArgs<"crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/update_update">)),
    CommunicationsPostCrmObjects202603CommunicationsBatchUpsertUpsert: (...args) => callOperation("crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/upsert_upsert", ...(args as HubSpotFullApiOperationArgs<"crm:communications:2026-03:post-/crm/objects/2026-03/communications/batch/upsert_upsert">)),
    CommunicationsPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId: (...args) => callOperation("crm:communications:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:communications:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">)),
    TasksPostCrmObjects202603TasksBatchArchiveArchive: (...args) => callOperation("crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/archive_archive", ...(args as HubSpotFullApiOperationArgs<"crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/archive_archive">)),
    TasksPostCrmObjects202603TasksBatchCreateCreate: (...args) => callOperation("crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/create_create", ...(args as HubSpotFullApiOperationArgs<"crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/create_create">)),
    TasksPostCrmObjects202603TasksBatchReadRead: (...args) => callOperation("crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/read_read", ...(args as HubSpotFullApiOperationArgs<"crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/read_read">)),
    TasksPostCrmObjects202603TasksBatchUpdateUpdate: (...args) => callOperation("crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/update_update", ...(args as HubSpotFullApiOperationArgs<"crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/update_update">)),
    TasksPostCrmObjects202603TasksBatchUpsertUpsert: (...args) => callOperation("crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/upsert_upsert", ...(args as HubSpotFullApiOperationArgs<"crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/batch/upsert_upsert">)),
    TasksPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId: (...args) => callOperation("crm:tasks:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:tasks:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">)),
    NotesPostCrmObjects202603NotesBatchArchiveArchive: (...args) => callOperation("crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/archive_archive", ...(args as HubSpotFullApiOperationArgs<"crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/archive_archive">)),
    NotesPostCrmObjects202603NotesBatchCreateCreate: (...args) => callOperation("crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/create_create", ...(args as HubSpotFullApiOperationArgs<"crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/create_create">)),
    NotesPostCrmObjects202603NotesBatchReadRead: (...args) => callOperation("crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/read_read", ...(args as HubSpotFullApiOperationArgs<"crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/read_read">)),
    NotesPostCrmObjects202603NotesBatchUpdateUpdate: (...args) => callOperation("crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/update_update", ...(args as HubSpotFullApiOperationArgs<"crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/update_update">)),
    NotesPostCrmObjects202603NotesBatchUpsertUpsert: (...args) => callOperation("crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/upsert_upsert", ...(args as HubSpotFullApiOperationArgs<"crm:notes:2026-03:post-/crm/objects/2026-03/notes/batch/upsert_upsert">)),
    NotesPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId: (...args) => callOperation("crm:notes:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:notes:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">)),
    ManageEventDefinitionsPostEvents202603SendBatchEventsV3SendBatch: (...args) => callOperation("events:manage-event-definitions:2026-03:post-/events/2026-03/send/batch_/events/v3/send/batch", ...(args as HubSpotFullApiOperationArgs<"events:manage-event-definitions:2026-03:post-/events/2026-03/send/batch_/events/v3/send/batch">)),
    UsersPostCrmObjects202603UsersBatchArchive: (...args) => callOperation("crm:users:2026-03:post-/crm/objects/2026-03/users/batch/archive", ...(args as HubSpotFullApiOperationArgs<"crm:users:2026-03:post-/crm/objects/2026-03/users/batch/archive">)),
    UsersPostCrmObjects202603UsersBatchCreate: (...args) => callOperation("crm:users:2026-03:post-/crm/objects/2026-03/users/batch/create", ...(args as HubSpotFullApiOperationArgs<"crm:users:2026-03:post-/crm/objects/2026-03/users/batch/create">)),
    UsersPostCrmObjects202603UsersBatchRead: (...args) => callOperation("crm:users:2026-03:post-/crm/objects/2026-03/users/batch/read", ...(args as HubSpotFullApiOperationArgs<"crm:users:2026-03:post-/crm/objects/2026-03/users/batch/read">)),
    UsersPostCrmObjects202603UsersBatchUpdate: (...args) => callOperation("crm:users:2026-03:post-/crm/objects/2026-03/users/batch/update", ...(args as HubSpotFullApiOperationArgs<"crm:users:2026-03:post-/crm/objects/2026-03/users/batch/update">)),
    UsersPostCrmObjects202603UsersBatchUpsert: (...args) => callOperation("crm:users:2026-03:post-/crm/objects/2026-03/users/batch/upsert", ...(args as HubSpotFullApiOperationArgs<"crm:users:2026-03:post-/crm/objects/2026-03/users/batch/upsert">)),
    UsersPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId: (...args) => callOperation("crm:users:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:users:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">)),
    QuotesPostCrmObjects202603QuotesBatchArchiveArchive: (...args) => callOperation("crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/archive_archive", ...(args as HubSpotFullApiOperationArgs<"crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/archive_archive">)),
    QuotesPostCrmObjects202603QuotesBatchCreateCreate: (...args) => callOperation("crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/create_create", ...(args as HubSpotFullApiOperationArgs<"crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/create_create">)),
    QuotesPostCrmObjects202603QuotesBatchReadRead: (...args) => callOperation("crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/read_read", ...(args as HubSpotFullApiOperationArgs<"crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/read_read">)),
    QuotesPostCrmObjects202603QuotesBatchUpdateUpdate: (...args) => callOperation("crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/update_update", ...(args as HubSpotFullApiOperationArgs<"crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/update_update">)),
    QuotesPostCrmObjects202603QuotesBatchUpsertUpsert: (...args) => callOperation("crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/upsert_upsert", ...(args as HubSpotFullApiOperationArgs<"crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/batch/upsert_upsert">)),
    QuotesPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId: (...args) => callOperation("crm:quotes:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:quotes:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">)),
    CartsPostCrmObjects202603CartsBatchArchive: (...args) => callOperation("crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/archive", ...(args as HubSpotFullApiOperationArgs<"crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/archive">)),
    CartsPostCrmObjects202603CartsBatchCreate: (...args) => callOperation("crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/create", ...(args as HubSpotFullApiOperationArgs<"crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/create">)),
    CartsPostCrmObjects202603CartsBatchRead: (...args) => callOperation("crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/read", ...(args as HubSpotFullApiOperationArgs<"crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/read">)),
    CartsPostCrmObjects202603CartsBatchUpdate: (...args) => callOperation("crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/update", ...(args as HubSpotFullApiOperationArgs<"crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/update">)),
    CartsPostCrmObjects202603CartsBatchUpsert: (...args) => callOperation("crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/upsert", ...(args as HubSpotFullApiOperationArgs<"crm:carts:2026-03:post-/crm/objects/2026-03/carts/batch/upsert">)),
    CartsPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId: (...args) => callOperation("crm:carts:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:carts:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">)),
    SendEventCompletionsPostEvents202603SendBatchSend: (...args) => callOperation("events:send-event-completions:2026-03:post-/events/2026-03/send/batch_send", ...(args as HubSpotFullApiOperationArgs<"events:send-event-completions:2026-03:post-/events/2026-03/send/batch_send">)),
    ObjectsPostCrmObjects202603ObjectTypeBatchArchiveCrmObjects202509ObjectTypeBatchArchive: (...args) => callOperation("crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/archive_/crm/objects/2025-09/{objectType}/batch/archive", ...(args as HubSpotFullApiOperationArgs<"crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/archive_/crm/objects/2025-09/{objectType}/batch/archive">)),
    ObjectsPostCrmObjects202603ObjectTypeBatchCreateCrmObjects202509ObjectTypeBatchCreate: (...args) => callOperation("crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/create_/crm/objects/2025-09/{objectType}/batch/create", ...(args as HubSpotFullApiOperationArgs<"crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/create_/crm/objects/2025-09/{objectType}/batch/create">)),
    ObjectsPostCrmObjects202603ObjectTypeBatchReadCrmObjects202509ObjectTypeBatchRead: (...args) => callOperation("crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/read_/crm/objects/2025-09/{objectType}/batch/read", ...(args as HubSpotFullApiOperationArgs<"crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/read_/crm/objects/2025-09/{objectType}/batch/read">)),
    ObjectsPostCrmObjects202603ObjectTypeBatchUpdateCrmObjects202509ObjectTypeBatchUpdate: (...args) => callOperation("crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/update_/crm/objects/2025-09/{objectType}/batch/update", ...(args as HubSpotFullApiOperationArgs<"crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/update_/crm/objects/2025-09/{objectType}/batch/update">)),
    ObjectsPostCrmObjects202603ObjectTypeBatchUpsertCrmObjects202509ObjectTypeBatchUpsert: (...args) => callOperation("crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/upsert_/crm/objects/2025-09/{objectType}/batch/upsert", ...(args as HubSpotFullApiOperationArgs<"crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/batch/upsert_/crm/objects/2025-09/{objectType}/batch/upsert">)),
    CoursesPostCrmObjects2026030410BatchArchive: (...args) => callOperation("crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/archive", ...(args as HubSpotFullApiOperationArgs<"crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/archive">)),
    CoursesPostCrmObjects2026030410BatchCreate: (...args) => callOperation("crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/create", ...(args as HubSpotFullApiOperationArgs<"crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/create">)),
    CoursesPostCrmObjects2026030410BatchRead: (...args) => callOperation("crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/read", ...(args as HubSpotFullApiOperationArgs<"crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/read">)),
    CoursesPostCrmObjects2026030410BatchUpdate: (...args) => callOperation("crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/update", ...(args as HubSpotFullApiOperationArgs<"crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/update">)),
    CoursesPostCrmObjects2026030410BatchUpsert: (...args) => callOperation("crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/upsert", ...(args as HubSpotFullApiOperationArgs<"crm:courses:2026-03:post-/crm/objects/2026-03/0-410/batch/upsert">)),
    CoursesPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId: (...args) => callOperation("crm:courses:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:courses:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">)),
    FeesPostCrmObjects202603FeesBatchArchive: (...args) => callOperation("crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/archive", ...(args as HubSpotFullApiOperationArgs<"crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/archive">)),
    FeesPostCrmObjects202603FeesBatchCreate: (...args) => callOperation("crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/create", ...(args as HubSpotFullApiOperationArgs<"crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/create">)),
  };
}
