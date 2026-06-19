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
export const HubSpotFullApiLabelsOperationKeys = [
  "crm:associations-schema:2026-03:get-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_getPage",
  "crm:associations-schema:2026-03:put-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_update",
  "crm:associations-schema:2026-03:post-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_create",
  "crm:associations-schema:2026-03:delete-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels/{associationTypeId}_remove"
] as const;
export type HubSpotFullApiLabelsOperationKey = typeof HubSpotFullApiLabelsOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiLabelsOperationPathParamMap {
  "crm:associations-schema:2026-03:get-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_getPage": { "fromObjectType": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue };
  "crm:associations-schema:2026-03:put-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_update": { "fromObjectType": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue };
  "crm:associations-schema:2026-03:post-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_create": { "fromObjectType": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue };
  "crm:associations-schema:2026-03:delete-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels/{associationTypeId}_remove": { "fromObjectType": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue; "associationTypeId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiLabelsOperationRequestMap {
  "crm:associations-schema:2026-03:get-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_getPage": HubSpotFullApiOperationInput<"crm:associations-schema:2026-03:get-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_getPage">;
  "crm:associations-schema:2026-03:put-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_update": HubSpotFullApiOperationInput<"crm:associations-schema:2026-03:put-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_update">;
  "crm:associations-schema:2026-03:post-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_create": HubSpotFullApiOperationInput<"crm:associations-schema:2026-03:post-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_create">;
  "crm:associations-schema:2026-03:delete-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels/{associationTypeId}_remove": HubSpotFullApiOperationInput<"crm:associations-schema:2026-03:delete-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels/{associationTypeId}_remove">;
}

export interface HubSpotFullApiLabelsGeneratedClient {
  AssociationsSchemaGetCrmAssociations202603FromObjectTypeToObjectTypeLabelsGetPage(...args: HubSpotFullApiOperationArgs<"crm:associations-schema:2026-03:get-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_getPage">): Promise<HubSpotFullApiOperationResponseMap["crm:associations-schema:2026-03:get-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_getPage"]>;
  AssociationsSchemaPutCrmAssociations202603FromObjectTypeToObjectTypeLabelsUpdate(...args: HubSpotFullApiOperationArgs<"crm:associations-schema:2026-03:put-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_update">): Promise<HubSpotFullApiOperationResponseMap["crm:associations-schema:2026-03:put-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_update"]>;
  AssociationsSchemaPostCrmAssociations202603FromObjectTypeToObjectTypeLabelsCreate(...args: HubSpotFullApiOperationArgs<"crm:associations-schema:2026-03:post-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_create">): Promise<HubSpotFullApiOperationResponseMap["crm:associations-schema:2026-03:post-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_create"]>;
  AssociationsSchemaDeleteCrmAssociations202603FromObjectTypeToObjectTypeLabelsAssociationTypeIdRemove(...args: HubSpotFullApiOperationArgs<"crm:associations-schema:2026-03:delete-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels/{associationTypeId}_remove">): Promise<HubSpotFullApiOperationResponseMap["crm:associations-schema:2026-03:delete-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels/{associationTypeId}_remove"]>;
}

export const HubSpotFullApiLabelsGeneratedFunctionNames = [
  "AssociationsSchemaGetCrmAssociations202603FromObjectTypeToObjectTypeLabelsGetPage",
  "AssociationsSchemaPutCrmAssociations202603FromObjectTypeToObjectTypeLabelsUpdate",
  "AssociationsSchemaPostCrmAssociations202603FromObjectTypeToObjectTypeLabelsCreate",
  "AssociationsSchemaDeleteCrmAssociations202603FromObjectTypeToObjectTypeLabelsAssociationTypeIdRemove"
] as const satisfies readonly (keyof HubSpotFullApiLabelsGeneratedClient)[];

export function createHubSpotFullApiLabelsGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiLabelsGeneratedClient {
  return {
    AssociationsSchemaGetCrmAssociations202603FromObjectTypeToObjectTypeLabelsGetPage: (...args) => callOperation("crm:associations-schema:2026-03:get-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_getPage", ...(args as HubSpotFullApiOperationArgs<"crm:associations-schema:2026-03:get-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_getPage">)),
    AssociationsSchemaPutCrmAssociations202603FromObjectTypeToObjectTypeLabelsUpdate: (...args) => callOperation("crm:associations-schema:2026-03:put-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_update", ...(args as HubSpotFullApiOperationArgs<"crm:associations-schema:2026-03:put-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_update">)),
    AssociationsSchemaPostCrmAssociations202603FromObjectTypeToObjectTypeLabelsCreate: (...args) => callOperation("crm:associations-schema:2026-03:post-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_create", ...(args as HubSpotFullApiOperationArgs<"crm:associations-schema:2026-03:post-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels_create">)),
    AssociationsSchemaDeleteCrmAssociations202603FromObjectTypeToObjectTypeLabelsAssociationTypeIdRemove: (...args) => callOperation("crm:associations-schema:2026-03:delete-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels/{associationTypeId}_remove", ...(args as HubSpotFullApiOperationArgs<"crm:associations-schema:2026-03:delete-/crm/associations/2026-03/{fromObjectType}/{toObjectType}/labels/{associationTypeId}_remove">)),
  };
}
