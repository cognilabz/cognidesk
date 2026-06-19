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
export const HubSpotFullApiFunctionsOperationKeys = [
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions_getPage",
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_getByFunctionType",
  "automation:actions-v4:2026-03:put-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_createOrReplaceByFunctionType",
  "automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_archiveByFunctionType",
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_getById",
  "automation:actions-v4:2026-03:put-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_createOrReplace",
  "automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_archive"
] as const;
export type HubSpotFullApiFunctionsOperationKey = typeof HubSpotFullApiFunctionsOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiFunctionsOperationPathParamMap {
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions_getPage": { "appId": HubSpotFullApiPathParamValue; "definitionId": HubSpotFullApiPathParamValue };
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_getByFunctionType": { "appId": HubSpotFullApiPathParamValue; "definitionId": HubSpotFullApiPathParamValue; "functionType": HubSpotFullApiPathParamValue };
  "automation:actions-v4:2026-03:put-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_createOrReplaceByFunctionType": { "appId": HubSpotFullApiPathParamValue; "definitionId": HubSpotFullApiPathParamValue; "functionType": HubSpotFullApiPathParamValue };
  "automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_archiveByFunctionType": { "appId": HubSpotFullApiPathParamValue; "definitionId": HubSpotFullApiPathParamValue; "functionType": HubSpotFullApiPathParamValue };
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_getById": { "appId": HubSpotFullApiPathParamValue; "definitionId": HubSpotFullApiPathParamValue; "functionType": HubSpotFullApiPathParamValue; "functionId": HubSpotFullApiPathParamValue };
  "automation:actions-v4:2026-03:put-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_createOrReplace": { "appId": HubSpotFullApiPathParamValue; "definitionId": HubSpotFullApiPathParamValue; "functionType": HubSpotFullApiPathParamValue; "functionId": HubSpotFullApiPathParamValue };
  "automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_archive": { "appId": HubSpotFullApiPathParamValue; "definitionId": HubSpotFullApiPathParamValue; "functionType": HubSpotFullApiPathParamValue; "functionId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiFunctionsOperationRequestMap {
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions_getPage": HubSpotFullApiOperationInput<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions_getPage">;
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_getByFunctionType": HubSpotFullApiOperationInput<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_getByFunctionType">;
  "automation:actions-v4:2026-03:put-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_createOrReplaceByFunctionType": HubSpotFullApiOperationInput<"automation:actions-v4:2026-03:put-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_createOrReplaceByFunctionType">;
  "automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_archiveByFunctionType": HubSpotFullApiOperationInput<"automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_archiveByFunctionType">;
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_getById": HubSpotFullApiOperationInput<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_getById">;
  "automation:actions-v4:2026-03:put-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_createOrReplace": HubSpotFullApiOperationInput<"automation:actions-v4:2026-03:put-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_createOrReplace">;
  "automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_archive": HubSpotFullApiOperationInput<"automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_archive">;
}

export interface HubSpotFullApiFunctionsGeneratedClient {
  ActionsV4GetAutomationActions202603AppIdDefinitionIdFunctionsGetPage(...args: HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions_getPage">): Promise<HubSpotFullApiOperationResponseMap["automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions_getPage"]>;
  ActionsV4GetAutomationActions202603AppIdDefinitionIdFunctionsFunctionTypeGetByFunctionType(...args: HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_getByFunctionType">): Promise<HubSpotFullApiOperationResponseMap["automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_getByFunctionType"]>;
  ActionsV4PutAutomationActions202603AppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionType(...args: HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:put-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_createOrReplaceByFunctionType">): Promise<HubSpotFullApiOperationResponseMap["automation:actions-v4:2026-03:put-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_createOrReplaceByFunctionType"]>;
  ActionsV4DeleteAutomationActions202603AppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionType(...args: HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_archiveByFunctionType">): Promise<HubSpotFullApiOperationResponseMap["automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_archiveByFunctionType"]>;
  ActionsV4GetAutomationActions202603AppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetById(...args: HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_getById">): Promise<HubSpotFullApiOperationResponseMap["automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_getById"]>;
  ActionsV4PutAutomationActions202603AppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplace(...args: HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:put-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_createOrReplace">): Promise<HubSpotFullApiOperationResponseMap["automation:actions-v4:2026-03:put-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_createOrReplace"]>;
  ActionsV4DeleteAutomationActions202603AppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchive(...args: HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_archive">): Promise<HubSpotFullApiOperationResponseMap["automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_archive"]>;
}

export const HubSpotFullApiFunctionsGeneratedFunctionNames = [
  "ActionsV4GetAutomationActions202603AppIdDefinitionIdFunctionsGetPage",
  "ActionsV4GetAutomationActions202603AppIdDefinitionIdFunctionsFunctionTypeGetByFunctionType",
  "ActionsV4PutAutomationActions202603AppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionType",
  "ActionsV4DeleteAutomationActions202603AppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionType",
  "ActionsV4GetAutomationActions202603AppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetById",
  "ActionsV4PutAutomationActions202603AppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplace",
  "ActionsV4DeleteAutomationActions202603AppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchive"
] as const satisfies readonly (keyof HubSpotFullApiFunctionsGeneratedClient)[];

export function createHubSpotFullApiFunctionsGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiFunctionsGeneratedClient {
  return {
    ActionsV4GetAutomationActions202603AppIdDefinitionIdFunctionsGetPage: (...args) => callOperation("automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions_getPage", ...(args as HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions_getPage">)),
    ActionsV4GetAutomationActions202603AppIdDefinitionIdFunctionsFunctionTypeGetByFunctionType: (...args) => callOperation("automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_getByFunctionType", ...(args as HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_getByFunctionType">)),
    ActionsV4PutAutomationActions202603AppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionType: (...args) => callOperation("automation:actions-v4:2026-03:put-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_createOrReplaceByFunctionType", ...(args as HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:put-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_createOrReplaceByFunctionType">)),
    ActionsV4DeleteAutomationActions202603AppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionType: (...args) => callOperation("automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_archiveByFunctionType", ...(args as HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}_archiveByFunctionType">)),
    ActionsV4GetAutomationActions202603AppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetById: (...args) => callOperation("automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_getById", ...(args as HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_getById">)),
    ActionsV4PutAutomationActions202603AppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplace: (...args) => callOperation("automation:actions-v4:2026-03:put-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_createOrReplace", ...(args as HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:put-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_createOrReplace">)),
    ActionsV4DeleteAutomationActions202603AppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchive: (...args) => callOperation("automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_archive", ...(args as HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}/functions/{functionType}/{functionId}_archive">)),
  };
}
