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
export const HubSpotFullApiLimitsOperationKeys = [
  "crm:associations-schema:2026-03:get-/crm/associations/2026-03/definitions/configurations/all_getPage",
  "crm:associations-schema:2026-03:get-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}_getPageBetweenTwoObjectTypes",
  "crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/create_batchCreate",
  "crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/purge_batchRemove",
  "crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/update_batchUpdate"
] as const;
export type HubSpotFullApiLimitsOperationKey = typeof HubSpotFullApiLimitsOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiLimitsOperationPathParamMap {
  "crm:associations-schema:2026-03:get-/crm/associations/2026-03/definitions/configurations/all_getPage": {};
  "crm:associations-schema:2026-03:get-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}_getPageBetweenTwoObjectTypes": { "fromObjectType": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue };
  "crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/create_batchCreate": { "fromObjectType": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue };
  "crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/purge_batchRemove": { "fromObjectType": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue };
  "crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/update_batchUpdate": { "fromObjectType": HubSpotFullApiPathParamValue; "toObjectType": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiLimitsOperationRequestMap {
  "crm:associations-schema:2026-03:get-/crm/associations/2026-03/definitions/configurations/all_getPage": HubSpotFullApiOperationInput<"crm:associations-schema:2026-03:get-/crm/associations/2026-03/definitions/configurations/all_getPage">;
  "crm:associations-schema:2026-03:get-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}_getPageBetweenTwoObjectTypes": HubSpotFullApiOperationInput<"crm:associations-schema:2026-03:get-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}_getPageBetweenTwoObjectTypes">;
  "crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/create_batchCreate": HubSpotFullApiOperationInput<"crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/create_batchCreate">;
  "crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/purge_batchRemove": HubSpotFullApiOperationInput<"crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/purge_batchRemove">;
  "crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/update_batchUpdate": HubSpotFullApiOperationInput<"crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/update_batchUpdate">;
}

export interface HubSpotFullApiLimitsGeneratedClient {
  AssociationsSchemaGetCrmAssociations202603DefinitionsConfigurationsAllGetPage(...args: HubSpotFullApiOperationArgs<"crm:associations-schema:2026-03:get-/crm/associations/2026-03/definitions/configurations/all_getPage">): Promise<HubSpotFullApiOperationResponseMap["crm:associations-schema:2026-03:get-/crm/associations/2026-03/definitions/configurations/all_getPage"]>;
  AssociationsSchemaGetCrmAssociations202603DefinitionsConfigurationsFromObjectTypeToObjectTypeGetPageBetweenTwoObjectTypes(...args: HubSpotFullApiOperationArgs<"crm:associations-schema:2026-03:get-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}_getPageBetweenTwoObjectTypes">): Promise<HubSpotFullApiOperationResponseMap["crm:associations-schema:2026-03:get-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}_getPageBetweenTwoObjectTypes"]>;
  AssociationsSchemaPostCrmAssociations202603DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchCreateBatchCreate(...args: HubSpotFullApiOperationArgs<"crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/create_batchCreate">): Promise<HubSpotFullApiOperationResponseMap["crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/create_batchCreate"]>;
  AssociationsSchemaPostCrmAssociations202603DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchPurgeBatchRemove(...args: HubSpotFullApiOperationArgs<"crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/purge_batchRemove">): Promise<HubSpotFullApiOperationResponseMap["crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/purge_batchRemove"]>;
  AssociationsSchemaPostCrmAssociations202603DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchUpdateBatchUpdate(...args: HubSpotFullApiOperationArgs<"crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/update_batchUpdate">): Promise<HubSpotFullApiOperationResponseMap["crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/update_batchUpdate"]>;
}

export const HubSpotFullApiLimitsGeneratedFunctionNames = [
  "AssociationsSchemaGetCrmAssociations202603DefinitionsConfigurationsAllGetPage",
  "AssociationsSchemaGetCrmAssociations202603DefinitionsConfigurationsFromObjectTypeToObjectTypeGetPageBetweenTwoObjectTypes",
  "AssociationsSchemaPostCrmAssociations202603DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchCreateBatchCreate",
  "AssociationsSchemaPostCrmAssociations202603DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchPurgeBatchRemove",
  "AssociationsSchemaPostCrmAssociations202603DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchUpdateBatchUpdate"
] as const satisfies readonly (keyof HubSpotFullApiLimitsGeneratedClient)[];

export function createHubSpotFullApiLimitsGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiLimitsGeneratedClient {
  return {
    AssociationsSchemaGetCrmAssociations202603DefinitionsConfigurationsAllGetPage: (...args) => callOperation("crm:associations-schema:2026-03:get-/crm/associations/2026-03/definitions/configurations/all_getPage", ...(args as HubSpotFullApiOperationArgs<"crm:associations-schema:2026-03:get-/crm/associations/2026-03/definitions/configurations/all_getPage">)),
    AssociationsSchemaGetCrmAssociations202603DefinitionsConfigurationsFromObjectTypeToObjectTypeGetPageBetweenTwoObjectTypes: (...args) => callOperation("crm:associations-schema:2026-03:get-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}_getPageBetweenTwoObjectTypes", ...(args as HubSpotFullApiOperationArgs<"crm:associations-schema:2026-03:get-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}_getPageBetweenTwoObjectTypes">)),
    AssociationsSchemaPostCrmAssociations202603DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchCreateBatchCreate: (...args) => callOperation("crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/create_batchCreate", ...(args as HubSpotFullApiOperationArgs<"crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/create_batchCreate">)),
    AssociationsSchemaPostCrmAssociations202603DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchPurgeBatchRemove: (...args) => callOperation("crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/purge_batchRemove", ...(args as HubSpotFullApiOperationArgs<"crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/purge_batchRemove">)),
    AssociationsSchemaPostCrmAssociations202603DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchUpdateBatchUpdate: (...args) => callOperation("crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/update_batchUpdate", ...(args as HubSpotFullApiOperationArgs<"crm:associations-schema:2026-03:post-/crm/associations/2026-03/definitions/configurations/{fromObjectType}/{toObjectType}/batch/update_batchUpdate">)),
  };
}
