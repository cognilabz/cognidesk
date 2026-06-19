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
export const HubSpotFullApiBatch04OperationKeys = [
  "crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/read",
  "crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/update",
  "crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/upsert",
  "crm:fees:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}",
  "crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/archive",
  "crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/create",
  "crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/read",
  "crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/update",
  "crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/upsert",
  "crm:services:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}",
  "crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/archive_archive",
  "crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/create_create",
  "crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/read_read",
  "crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/update_update",
  "crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/upsert_upsert",
  "crm:goal-targets:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}",
  "crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/archive",
  "crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/create",
  "crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/read",
  "crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/update",
  "crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/upsert",
  "crm:projects:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}",
  "crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/archive",
  "crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/create",
  "crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/read",
  "crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/update",
  "crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/upsert",
  "crm:orders:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}",
  "crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/archive_/crm/properties/2025-09/{objectType}/batch/archive",
  "crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/create_/crm/properties/2025-09/{objectType}/batch/create",
  "crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/read_/crm/properties/2025-09/{objectType}/batch/read",
  "crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/archive_archive",
  "crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/create_create",
  "crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/read_read",
  "crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/update_update",
  "crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/upsert_upsert",
  "crm:calls:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}"
] as const;
export type HubSpotFullApiBatch04OperationKey = typeof HubSpotFullApiBatch04OperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiBatch04OperationPathParamMap {
  "crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/read": {};
  "crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/update": {};
  "crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/upsert": {};
  "crm:fees:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": { "fromObjectType": HubSpotFullApiPathParamValue; "fromObjectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/archive": {};
  "crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/create": {};
  "crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/read": {};
  "crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/update": {};
  "crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/upsert": {};
  "crm:services:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": { "fromObjectType": HubSpotFullApiPathParamValue; "fromObjectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/archive_archive": {};
  "crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/create_create": {};
  "crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/read_read": {};
  "crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/update_update": {};
  "crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/upsert_upsert": {};
  "crm:goal-targets:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": { "fromObjectType": HubSpotFullApiPathParamValue; "fromObjectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/archive": {};
  "crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/create": {};
  "crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/read": {};
  "crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/update": {};
  "crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/upsert": {};
  "crm:projects:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": { "fromObjectType": HubSpotFullApiPathParamValue; "fromObjectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/archive": {};
  "crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/create": {};
  "crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/read": {};
  "crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/update": {};
  "crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/upsert": {};
  "crm:orders:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": { "fromObjectType": HubSpotFullApiPathParamValue; "fromObjectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
  "crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/archive_/crm/properties/2025-09/{objectType}/batch/archive": { "objectType": HubSpotFullApiPathParamValue };
  "crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/create_/crm/properties/2025-09/{objectType}/batch/create": { "objectType": HubSpotFullApiPathParamValue };
  "crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/read_/crm/properties/2025-09/{objectType}/batch/read": { "objectType": HubSpotFullApiPathParamValue };
  "crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/archive_archive": {};
  "crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/create_create": {};
  "crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/read_read": {};
  "crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/update_update": {};
  "crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/upsert_upsert": {};
  "crm:calls:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": { "fromObjectType": HubSpotFullApiPathParamValue; "fromObjectId": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "toObjectId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiBatch04OperationRequestMap {
  "crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/read": HubSpotFullApiOperationInput<"crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/read">;
  "crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/update": HubSpotFullApiOperationInput<"crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/update">;
  "crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/upsert": HubSpotFullApiOperationInput<"crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/upsert">;
  "crm:fees:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:fees:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">;
  "crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/archive": HubSpotFullApiOperationInput<"crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/archive">;
  "crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/create": HubSpotFullApiOperationInput<"crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/create">;
  "crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/read": HubSpotFullApiOperationInput<"crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/read">;
  "crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/update": HubSpotFullApiOperationInput<"crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/update">;
  "crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/upsert": HubSpotFullApiOperationInput<"crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/upsert">;
  "crm:services:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:services:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">;
  "crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/archive_archive": HubSpotFullApiOperationInput<"crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/archive_archive">;
  "crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/create_create": HubSpotFullApiOperationInput<"crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/create_create">;
  "crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/read_read": HubSpotFullApiOperationInput<"crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/read_read">;
  "crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/update_update": HubSpotFullApiOperationInput<"crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/update_update">;
  "crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/upsert_upsert": HubSpotFullApiOperationInput<"crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/upsert_upsert">;
  "crm:goal-targets:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:goal-targets:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">;
  "crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/archive": HubSpotFullApiOperationInput<"crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/archive">;
  "crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/create": HubSpotFullApiOperationInput<"crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/create">;
  "crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/read": HubSpotFullApiOperationInput<"crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/read">;
  "crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/update": HubSpotFullApiOperationInput<"crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/update">;
  "crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/upsert": HubSpotFullApiOperationInput<"crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/upsert">;
  "crm:projects:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:projects:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">;
  "crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/archive": HubSpotFullApiOperationInput<"crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/archive">;
  "crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/create": HubSpotFullApiOperationInput<"crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/create">;
  "crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/read": HubSpotFullApiOperationInput<"crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/read">;
  "crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/update": HubSpotFullApiOperationInput<"crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/update">;
  "crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/upsert": HubSpotFullApiOperationInput<"crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/upsert">;
  "crm:orders:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:orders:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">;
  "crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/archive_/crm/properties/2025-09/{objectType}/batch/archive": HubSpotFullApiOperationInput<"crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/archive_/crm/properties/2025-09/{objectType}/batch/archive">;
  "crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/create_/crm/properties/2025-09/{objectType}/batch/create": HubSpotFullApiOperationInput<"crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/create_/crm/properties/2025-09/{objectType}/batch/create">;
  "crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/read_/crm/properties/2025-09/{objectType}/batch/read": HubSpotFullApiOperationInput<"crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/read_/crm/properties/2025-09/{objectType}/batch/read">;
  "crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/archive_archive": HubSpotFullApiOperationInput<"crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/archive_archive">;
  "crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/create_create": HubSpotFullApiOperationInput<"crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/create_create">;
  "crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/read_read": HubSpotFullApiOperationInput<"crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/read_read">;
  "crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/update_update": HubSpotFullApiOperationInput<"crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/update_update">;
  "crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/upsert_upsert": HubSpotFullApiOperationInput<"crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/upsert_upsert">;
  "crm:calls:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}": HubSpotFullApiOperationInput<"crm:calls:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">;
}

export interface HubSpotFullApiBatch04GeneratedClient {
  FeesPostCrmObjects202603FeesBatchRead(...args: HubSpotFullApiOperationArgs<"crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/read">): Promise<HubSpotFullApiOperationResponseMap["crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/read"]>;
  FeesPostCrmObjects202603FeesBatchUpdate(...args: HubSpotFullApiOperationArgs<"crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/update">): Promise<HubSpotFullApiOperationResponseMap["crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/update"]>;
  FeesPostCrmObjects202603FeesBatchUpsert(...args: HubSpotFullApiOperationArgs<"crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/upsert">): Promise<HubSpotFullApiOperationResponseMap["crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/upsert"]>;
  FeesPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:fees:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:fees:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}"]>;
  ServicesPostCrmObjects2026030162BatchArchive(...args: HubSpotFullApiOperationArgs<"crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/archive">): Promise<HubSpotFullApiOperationResponseMap["crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/archive"]>;
  ServicesPostCrmObjects2026030162BatchCreate(...args: HubSpotFullApiOperationArgs<"crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/create">): Promise<HubSpotFullApiOperationResponseMap["crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/create"]>;
  ServicesPostCrmObjects2026030162BatchRead(...args: HubSpotFullApiOperationArgs<"crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/read">): Promise<HubSpotFullApiOperationResponseMap["crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/read"]>;
  ServicesPostCrmObjects2026030162BatchUpdate(...args: HubSpotFullApiOperationArgs<"crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/update">): Promise<HubSpotFullApiOperationResponseMap["crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/update"]>;
  ServicesPostCrmObjects2026030162BatchUpsert(...args: HubSpotFullApiOperationArgs<"crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/upsert">): Promise<HubSpotFullApiOperationResponseMap["crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/upsert"]>;
  ServicesPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:services:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:services:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}"]>;
  GoalTargetsPostCrmObjects202603GoalTargetsBatchArchiveArchive(...args: HubSpotFullApiOperationArgs<"crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/archive_archive">): Promise<HubSpotFullApiOperationResponseMap["crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/archive_archive"]>;
  GoalTargetsPostCrmObjects202603GoalTargetsBatchCreateCreate(...args: HubSpotFullApiOperationArgs<"crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/create_create">): Promise<HubSpotFullApiOperationResponseMap["crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/create_create"]>;
  GoalTargetsPostCrmObjects202603GoalTargetsBatchReadRead(...args: HubSpotFullApiOperationArgs<"crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/read_read">): Promise<HubSpotFullApiOperationResponseMap["crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/read_read"]>;
  GoalTargetsPostCrmObjects202603GoalTargetsBatchUpdateUpdate(...args: HubSpotFullApiOperationArgs<"crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/update_update">): Promise<HubSpotFullApiOperationResponseMap["crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/update_update"]>;
  GoalTargetsPostCrmObjects202603GoalTargetsBatchUpsertUpsert(...args: HubSpotFullApiOperationArgs<"crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/upsert_upsert">): Promise<HubSpotFullApiOperationResponseMap["crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/upsert_upsert"]>;
  GoalTargetsPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:goal-targets:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:goal-targets:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}"]>;
  ProjectsPostCrmObjects202603ProjectsBatchArchive(...args: HubSpotFullApiOperationArgs<"crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/archive">): Promise<HubSpotFullApiOperationResponseMap["crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/archive"]>;
  ProjectsPostCrmObjects202603ProjectsBatchCreate(...args: HubSpotFullApiOperationArgs<"crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/create">): Promise<HubSpotFullApiOperationResponseMap["crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/create"]>;
  ProjectsPostCrmObjects202603ProjectsBatchRead(...args: HubSpotFullApiOperationArgs<"crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/read">): Promise<HubSpotFullApiOperationResponseMap["crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/read"]>;
  ProjectsPostCrmObjects202603ProjectsBatchUpdate(...args: HubSpotFullApiOperationArgs<"crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/update">): Promise<HubSpotFullApiOperationResponseMap["crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/update"]>;
  ProjectsPostCrmObjects202603ProjectsBatchUpsert(...args: HubSpotFullApiOperationArgs<"crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/upsert">): Promise<HubSpotFullApiOperationResponseMap["crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/upsert"]>;
  ProjectsPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:projects:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:projects:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}"]>;
  OrdersPostCrmObjects202603OrdersBatchArchive(...args: HubSpotFullApiOperationArgs<"crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/archive">): Promise<HubSpotFullApiOperationResponseMap["crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/archive"]>;
  OrdersPostCrmObjects202603OrdersBatchCreate(...args: HubSpotFullApiOperationArgs<"crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/create">): Promise<HubSpotFullApiOperationResponseMap["crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/create"]>;
  OrdersPostCrmObjects202603OrdersBatchRead(...args: HubSpotFullApiOperationArgs<"crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/read">): Promise<HubSpotFullApiOperationResponseMap["crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/read"]>;
  OrdersPostCrmObjects202603OrdersBatchUpdate(...args: HubSpotFullApiOperationArgs<"crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/update">): Promise<HubSpotFullApiOperationResponseMap["crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/update"]>;
  OrdersPostCrmObjects202603OrdersBatchUpsert(...args: HubSpotFullApiOperationArgs<"crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/upsert">): Promise<HubSpotFullApiOperationResponseMap["crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/upsert"]>;
  OrdersPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:orders:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:orders:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}"]>;
  PropertiesPostCrmProperties202603ObjectTypeBatchArchiveCrmProperties202509ObjectTypeBatchArchive(...args: HubSpotFullApiOperationArgs<"crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/archive_/crm/properties/2025-09/{objectType}/batch/archive">): Promise<HubSpotFullApiOperationResponseMap["crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/archive_/crm/properties/2025-09/{objectType}/batch/archive"]>;
  PropertiesPostCrmProperties202603ObjectTypeBatchCreateCrmProperties202509ObjectTypeBatchCreate(...args: HubSpotFullApiOperationArgs<"crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/create_/crm/properties/2025-09/{objectType}/batch/create">): Promise<HubSpotFullApiOperationResponseMap["crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/create_/crm/properties/2025-09/{objectType}/batch/create"]>;
  PropertiesPostCrmProperties202603ObjectTypeBatchReadCrmProperties202509ObjectTypeBatchRead(...args: HubSpotFullApiOperationArgs<"crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/read_/crm/properties/2025-09/{objectType}/batch/read">): Promise<HubSpotFullApiOperationResponseMap["crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/read_/crm/properties/2025-09/{objectType}/batch/read"]>;
  CallsPostCrmObjects202603CallsBatchArchiveArchive(...args: HubSpotFullApiOperationArgs<"crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/archive_archive">): Promise<HubSpotFullApiOperationResponseMap["crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/archive_archive"]>;
  CallsPostCrmObjects202603CallsBatchCreateCreate(...args: HubSpotFullApiOperationArgs<"crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/create_create">): Promise<HubSpotFullApiOperationResponseMap["crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/create_create"]>;
  CallsPostCrmObjects202603CallsBatchReadRead(...args: HubSpotFullApiOperationArgs<"crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/read_read">): Promise<HubSpotFullApiOperationResponseMap["crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/read_read"]>;
  CallsPostCrmObjects202603CallsBatchUpdateUpdate(...args: HubSpotFullApiOperationArgs<"crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/update_update">): Promise<HubSpotFullApiOperationResponseMap["crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/update_update"]>;
  CallsPostCrmObjects202603CallsBatchUpsertUpsert(...args: HubSpotFullApiOperationArgs<"crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/upsert_upsert">): Promise<HubSpotFullApiOperationResponseMap["crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/upsert_upsert"]>;
  CallsPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId(...args: HubSpotFullApiOperationArgs<"crm:calls:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">): Promise<HubSpotFullApiOperationResponseMap["crm:calls:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}"]>;
}

export const HubSpotFullApiBatch04GeneratedFunctionNames = [
  "FeesPostCrmObjects202603FeesBatchRead",
  "FeesPostCrmObjects202603FeesBatchUpdate",
  "FeesPostCrmObjects202603FeesBatchUpsert",
  "FeesPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId",
  "ServicesPostCrmObjects2026030162BatchArchive",
  "ServicesPostCrmObjects2026030162BatchCreate",
  "ServicesPostCrmObjects2026030162BatchRead",
  "ServicesPostCrmObjects2026030162BatchUpdate",
  "ServicesPostCrmObjects2026030162BatchUpsert",
  "ServicesPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId",
  "GoalTargetsPostCrmObjects202603GoalTargetsBatchArchiveArchive",
  "GoalTargetsPostCrmObjects202603GoalTargetsBatchCreateCreate",
  "GoalTargetsPostCrmObjects202603GoalTargetsBatchReadRead",
  "GoalTargetsPostCrmObjects202603GoalTargetsBatchUpdateUpdate",
  "GoalTargetsPostCrmObjects202603GoalTargetsBatchUpsertUpsert",
  "GoalTargetsPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId",
  "ProjectsPostCrmObjects202603ProjectsBatchArchive",
  "ProjectsPostCrmObjects202603ProjectsBatchCreate",
  "ProjectsPostCrmObjects202603ProjectsBatchRead",
  "ProjectsPostCrmObjects202603ProjectsBatchUpdate",
  "ProjectsPostCrmObjects202603ProjectsBatchUpsert",
  "ProjectsPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId",
  "OrdersPostCrmObjects202603OrdersBatchArchive",
  "OrdersPostCrmObjects202603OrdersBatchCreate",
  "OrdersPostCrmObjects202603OrdersBatchRead",
  "OrdersPostCrmObjects202603OrdersBatchUpdate",
  "OrdersPostCrmObjects202603OrdersBatchUpsert",
  "OrdersPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId",
  "PropertiesPostCrmProperties202603ObjectTypeBatchArchiveCrmProperties202509ObjectTypeBatchArchive",
  "PropertiesPostCrmProperties202603ObjectTypeBatchCreateCrmProperties202509ObjectTypeBatchCreate",
  "PropertiesPostCrmProperties202603ObjectTypeBatchReadCrmProperties202509ObjectTypeBatchRead",
  "CallsPostCrmObjects202603CallsBatchArchiveArchive",
  "CallsPostCrmObjects202603CallsBatchCreateCreate",
  "CallsPostCrmObjects202603CallsBatchReadRead",
  "CallsPostCrmObjects202603CallsBatchUpdateUpdate",
  "CallsPostCrmObjects202603CallsBatchUpsertUpsert",
  "CallsPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId"
] as const satisfies readonly (keyof HubSpotFullApiBatch04GeneratedClient)[];

export function createHubSpotFullApiBatch04GeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiBatch04GeneratedClient {
  return {
    FeesPostCrmObjects202603FeesBatchRead: (...args) => callOperation("crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/read", ...(args as HubSpotFullApiOperationArgs<"crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/read">)),
    FeesPostCrmObjects202603FeesBatchUpdate: (...args) => callOperation("crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/update", ...(args as HubSpotFullApiOperationArgs<"crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/update">)),
    FeesPostCrmObjects202603FeesBatchUpsert: (...args) => callOperation("crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/upsert", ...(args as HubSpotFullApiOperationArgs<"crm:fees:2026-03:post-/crm/objects/2026-03/fees/batch/upsert">)),
    FeesPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId: (...args) => callOperation("crm:fees:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:fees:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">)),
    ServicesPostCrmObjects2026030162BatchArchive: (...args) => callOperation("crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/archive", ...(args as HubSpotFullApiOperationArgs<"crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/archive">)),
    ServicesPostCrmObjects2026030162BatchCreate: (...args) => callOperation("crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/create", ...(args as HubSpotFullApiOperationArgs<"crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/create">)),
    ServicesPostCrmObjects2026030162BatchRead: (...args) => callOperation("crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/read", ...(args as HubSpotFullApiOperationArgs<"crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/read">)),
    ServicesPostCrmObjects2026030162BatchUpdate: (...args) => callOperation("crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/update", ...(args as HubSpotFullApiOperationArgs<"crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/update">)),
    ServicesPostCrmObjects2026030162BatchUpsert: (...args) => callOperation("crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/upsert", ...(args as HubSpotFullApiOperationArgs<"crm:services:2026-03:post-/crm/objects/2026-03/0-162/batch/upsert">)),
    ServicesPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId: (...args) => callOperation("crm:services:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:services:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">)),
    GoalTargetsPostCrmObjects202603GoalTargetsBatchArchiveArchive: (...args) => callOperation("crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/archive_archive", ...(args as HubSpotFullApiOperationArgs<"crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/archive_archive">)),
    GoalTargetsPostCrmObjects202603GoalTargetsBatchCreateCreate: (...args) => callOperation("crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/create_create", ...(args as HubSpotFullApiOperationArgs<"crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/create_create">)),
    GoalTargetsPostCrmObjects202603GoalTargetsBatchReadRead: (...args) => callOperation("crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/read_read", ...(args as HubSpotFullApiOperationArgs<"crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/read_read">)),
    GoalTargetsPostCrmObjects202603GoalTargetsBatchUpdateUpdate: (...args) => callOperation("crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/update_update", ...(args as HubSpotFullApiOperationArgs<"crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/update_update">)),
    GoalTargetsPostCrmObjects202603GoalTargetsBatchUpsertUpsert: (...args) => callOperation("crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/upsert_upsert", ...(args as HubSpotFullApiOperationArgs<"crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/batch/upsert_upsert">)),
    GoalTargetsPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId: (...args) => callOperation("crm:goal-targets:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:goal-targets:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">)),
    ProjectsPostCrmObjects202603ProjectsBatchArchive: (...args) => callOperation("crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/archive", ...(args as HubSpotFullApiOperationArgs<"crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/archive">)),
    ProjectsPostCrmObjects202603ProjectsBatchCreate: (...args) => callOperation("crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/create", ...(args as HubSpotFullApiOperationArgs<"crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/create">)),
    ProjectsPostCrmObjects202603ProjectsBatchRead: (...args) => callOperation("crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/read", ...(args as HubSpotFullApiOperationArgs<"crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/read">)),
    ProjectsPostCrmObjects202603ProjectsBatchUpdate: (...args) => callOperation("crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/update", ...(args as HubSpotFullApiOperationArgs<"crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/update">)),
    ProjectsPostCrmObjects202603ProjectsBatchUpsert: (...args) => callOperation("crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/upsert", ...(args as HubSpotFullApiOperationArgs<"crm:projects:2026-03:post-/crm/objects/2026-03/projects/batch/upsert">)),
    ProjectsPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId: (...args) => callOperation("crm:projects:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:projects:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">)),
    OrdersPostCrmObjects202603OrdersBatchArchive: (...args) => callOperation("crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/archive", ...(args as HubSpotFullApiOperationArgs<"crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/archive">)),
    OrdersPostCrmObjects202603OrdersBatchCreate: (...args) => callOperation("crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/create", ...(args as HubSpotFullApiOperationArgs<"crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/create">)),
    OrdersPostCrmObjects202603OrdersBatchRead: (...args) => callOperation("crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/read", ...(args as HubSpotFullApiOperationArgs<"crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/read">)),
    OrdersPostCrmObjects202603OrdersBatchUpdate: (...args) => callOperation("crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/update", ...(args as HubSpotFullApiOperationArgs<"crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/update">)),
    OrdersPostCrmObjects202603OrdersBatchUpsert: (...args) => callOperation("crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/upsert", ...(args as HubSpotFullApiOperationArgs<"crm:orders:2026-03:post-/crm/objects/2026-03/orders/batch/upsert">)),
    OrdersPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId: (...args) => callOperation("crm:orders:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:orders:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">)),
    PropertiesPostCrmProperties202603ObjectTypeBatchArchiveCrmProperties202509ObjectTypeBatchArchive: (...args) => callOperation("crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/archive_/crm/properties/2025-09/{objectType}/batch/archive", ...(args as HubSpotFullApiOperationArgs<"crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/archive_/crm/properties/2025-09/{objectType}/batch/archive">)),
    PropertiesPostCrmProperties202603ObjectTypeBatchCreateCrmProperties202509ObjectTypeBatchCreate: (...args) => callOperation("crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/create_/crm/properties/2025-09/{objectType}/batch/create", ...(args as HubSpotFullApiOperationArgs<"crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/create_/crm/properties/2025-09/{objectType}/batch/create">)),
    PropertiesPostCrmProperties202603ObjectTypeBatchReadCrmProperties202509ObjectTypeBatchRead: (...args) => callOperation("crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/read_/crm/properties/2025-09/{objectType}/batch/read", ...(args as HubSpotFullApiOperationArgs<"crm:properties:2026-03:post-/crm/properties/2026-03/{objectType}/batch/read_/crm/properties/2025-09/{objectType}/batch/read">)),
    CallsPostCrmObjects202603CallsBatchArchiveArchive: (...args) => callOperation("crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/archive_archive", ...(args as HubSpotFullApiOperationArgs<"crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/archive_archive">)),
    CallsPostCrmObjects202603CallsBatchCreateCreate: (...args) => callOperation("crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/create_create", ...(args as HubSpotFullApiOperationArgs<"crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/create_create">)),
    CallsPostCrmObjects202603CallsBatchReadRead: (...args) => callOperation("crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/read_read", ...(args as HubSpotFullApiOperationArgs<"crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/read_read">)),
    CallsPostCrmObjects202603CallsBatchUpdateUpdate: (...args) => callOperation("crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/update_update", ...(args as HubSpotFullApiOperationArgs<"crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/update_update">)),
    CallsPostCrmObjects202603CallsBatchUpsertUpsert: (...args) => callOperation("crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/upsert_upsert", ...(args as HubSpotFullApiOperationArgs<"crm:calls:2026-03:post-/crm/objects/2026-03/calls/batch/upsert_upsert">)),
    CallsPutCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdCrmObjects202603FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId: (...args) => callOperation("crm:calls:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}", ...(args as HubSpotFullApiOperationArgs<"crm:calls:2026-03:put-/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-03/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}">)),
  };
}
