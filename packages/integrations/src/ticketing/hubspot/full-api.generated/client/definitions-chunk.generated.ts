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
export const HubSpotFullApiDefinitionsOperationKeys = [
  "communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/definitions",
  "communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/{subscriberIdString}/unsubscribe-all",
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}_getPage",
  "automation:actions-v4:2026-03:post-/automation/actions/2026-03/{appId}_create",
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}_getById",
  "automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}_archive",
  "automation:actions-v4:2026-03:patch-/automation/actions/2026-03/{appId}/{definitionId}_update",
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/requires-object_/automation/v4/actions/{appId}/{definitionId}/requires-object",
  "automation:actions-v4:2026-03:post-/automation/actions/2026-03/{appId}/{definitionId}/requires-object_/automation/v4/actions/{appId}/{definitionId}/requires-object"
] as const;
export type HubSpotFullApiDefinitionsOperationKey = typeof HubSpotFullApiDefinitionsOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiDefinitionsOperationPathParamMap {
  "communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/definitions": {};
  "communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/{subscriberIdString}/unsubscribe-all": { "subscriberIdString": HubSpotFullApiPathParamValue };
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}_getPage": { "appId": HubSpotFullApiPathParamValue };
  "automation:actions-v4:2026-03:post-/automation/actions/2026-03/{appId}_create": { "appId": HubSpotFullApiPathParamValue };
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}_getById": { "appId": HubSpotFullApiPathParamValue; "definitionId": HubSpotFullApiPathParamValue };
  "automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}_archive": { "appId": HubSpotFullApiPathParamValue; "definitionId": HubSpotFullApiPathParamValue };
  "automation:actions-v4:2026-03:patch-/automation/actions/2026-03/{appId}/{definitionId}_update": { "appId": HubSpotFullApiPathParamValue; "definitionId": HubSpotFullApiPathParamValue };
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/requires-object_/automation/v4/actions/{appId}/{definitionId}/requires-object": { "appId": HubSpotFullApiPathParamValue; "definitionId": HubSpotFullApiPathParamValue };
  "automation:actions-v4:2026-03:post-/automation/actions/2026-03/{appId}/{definitionId}/requires-object_/automation/v4/actions/{appId}/{definitionId}/requires-object": { "appId": HubSpotFullApiPathParamValue; "definitionId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiDefinitionsOperationRequestMap {
  "communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/definitions": HubSpotFullApiOperationInput<"communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/definitions">;
  "communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/{subscriberIdString}/unsubscribe-all": HubSpotFullApiOperationInput<"communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/{subscriberIdString}/unsubscribe-all">;
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}_getPage": HubSpotFullApiOperationInput<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}_getPage">;
  "automation:actions-v4:2026-03:post-/automation/actions/2026-03/{appId}_create": HubSpotFullApiOperationInput<"automation:actions-v4:2026-03:post-/automation/actions/2026-03/{appId}_create">;
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}_getById": HubSpotFullApiOperationInput<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}_getById">;
  "automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}_archive": HubSpotFullApiOperationInput<"automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}_archive">;
  "automation:actions-v4:2026-03:patch-/automation/actions/2026-03/{appId}/{definitionId}_update": HubSpotFullApiOperationInput<"automation:actions-v4:2026-03:patch-/automation/actions/2026-03/{appId}/{definitionId}_update">;
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/requires-object_/automation/v4/actions/{appId}/{definitionId}/requires-object": HubSpotFullApiOperationInput<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/requires-object_/automation/v4/actions/{appId}/{definitionId}/requires-object">;
  "automation:actions-v4:2026-03:post-/automation/actions/2026-03/{appId}/{definitionId}/requires-object_/automation/v4/actions/{appId}/{definitionId}/requires-object": HubSpotFullApiOperationInput<"automation:actions-v4:2026-03:post-/automation/actions/2026-03/{appId}/{definitionId}/requires-object_/automation/v4/actions/{appId}/{definitionId}/requires-object">;
}

export interface HubSpotFullApiDefinitionsGeneratedClient {
  SubscriptionsGetCommunicationPreferences202603Definitions(...args: HubSpotFullApiOperationArgs<"communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/definitions">): Promise<HubSpotFullApiOperationResponseMap["communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/definitions"]>;
  SubscriptionsPostCommunicationPreferences202603StatusesSubscriberIdStringUnsubscribeAll(...args: HubSpotFullApiOperationArgs<"communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/{subscriberIdString}/unsubscribe-all">): Promise<HubSpotFullApiOperationResponseMap["communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/{subscriberIdString}/unsubscribe-all"]>;
  ActionsV4GetAutomationActions202603AppIdGetPage(...args: HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}_getPage">): Promise<HubSpotFullApiOperationResponseMap["automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}_getPage"]>;
  ActionsV4PostAutomationActions202603AppIdCreate(...args: HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:post-/automation/actions/2026-03/{appId}_create">): Promise<HubSpotFullApiOperationResponseMap["automation:actions-v4:2026-03:post-/automation/actions/2026-03/{appId}_create"]>;
  ActionsV4GetAutomationActions202603AppIdDefinitionIdGetById(...args: HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}_getById">): Promise<HubSpotFullApiOperationResponseMap["automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}_getById"]>;
  ActionsV4DeleteAutomationActions202603AppIdDefinitionIdArchive(...args: HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}_archive">): Promise<HubSpotFullApiOperationResponseMap["automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}_archive"]>;
  ActionsV4PatchAutomationActions202603AppIdDefinitionIdUpdate(...args: HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:patch-/automation/actions/2026-03/{appId}/{definitionId}_update">): Promise<HubSpotFullApiOperationResponseMap["automation:actions-v4:2026-03:patch-/automation/actions/2026-03/{appId}/{definitionId}_update"]>;
  ActionsV4GetAutomationActions202603AppIdDefinitionIdRequiresObjectAutomationV4ActionsAppIdDefinitionIdRequiresObject(...args: HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/requires-object_/automation/v4/actions/{appId}/{definitionId}/requires-object">): Promise<HubSpotFullApiOperationResponseMap["automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/requires-object_/automation/v4/actions/{appId}/{definitionId}/requires-object"]>;
  ActionsV4PostAutomationActions202603AppIdDefinitionIdRequiresObjectAutomationV4ActionsAppIdDefinitionIdRequiresObject(...args: HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:post-/automation/actions/2026-03/{appId}/{definitionId}/requires-object_/automation/v4/actions/{appId}/{definitionId}/requires-object">): Promise<HubSpotFullApiOperationResponseMap["automation:actions-v4:2026-03:post-/automation/actions/2026-03/{appId}/{definitionId}/requires-object_/automation/v4/actions/{appId}/{definitionId}/requires-object"]>;
}

export const HubSpotFullApiDefinitionsGeneratedFunctionNames = [
  "SubscriptionsGetCommunicationPreferences202603Definitions",
  "SubscriptionsPostCommunicationPreferences202603StatusesSubscriberIdStringUnsubscribeAll",
  "ActionsV4GetAutomationActions202603AppIdGetPage",
  "ActionsV4PostAutomationActions202603AppIdCreate",
  "ActionsV4GetAutomationActions202603AppIdDefinitionIdGetById",
  "ActionsV4DeleteAutomationActions202603AppIdDefinitionIdArchive",
  "ActionsV4PatchAutomationActions202603AppIdDefinitionIdUpdate",
  "ActionsV4GetAutomationActions202603AppIdDefinitionIdRequiresObjectAutomationV4ActionsAppIdDefinitionIdRequiresObject",
  "ActionsV4PostAutomationActions202603AppIdDefinitionIdRequiresObjectAutomationV4ActionsAppIdDefinitionIdRequiresObject"
] as const satisfies readonly (keyof HubSpotFullApiDefinitionsGeneratedClient)[];

export function createHubSpotFullApiDefinitionsGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiDefinitionsGeneratedClient {
  return {
    SubscriptionsGetCommunicationPreferences202603Definitions: (...args) => callOperation("communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/definitions", ...(args as HubSpotFullApiOperationArgs<"communication-preferences:subscriptions:2026-03:get-/communication-preferences/2026-03/definitions">)),
    SubscriptionsPostCommunicationPreferences202603StatusesSubscriberIdStringUnsubscribeAll: (...args) => callOperation("communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/{subscriberIdString}/unsubscribe-all", ...(args as HubSpotFullApiOperationArgs<"communication-preferences:subscriptions:2026-03:post-/communication-preferences/2026-03/statuses/{subscriberIdString}/unsubscribe-all">)),
    ActionsV4GetAutomationActions202603AppIdGetPage: (...args) => callOperation("automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}_getPage", ...(args as HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}_getPage">)),
    ActionsV4PostAutomationActions202603AppIdCreate: (...args) => callOperation("automation:actions-v4:2026-03:post-/automation/actions/2026-03/{appId}_create", ...(args as HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:post-/automation/actions/2026-03/{appId}_create">)),
    ActionsV4GetAutomationActions202603AppIdDefinitionIdGetById: (...args) => callOperation("automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}_getById", ...(args as HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}_getById">)),
    ActionsV4DeleteAutomationActions202603AppIdDefinitionIdArchive: (...args) => callOperation("automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}_archive", ...(args as HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:delete-/automation/actions/2026-03/{appId}/{definitionId}_archive">)),
    ActionsV4PatchAutomationActions202603AppIdDefinitionIdUpdate: (...args) => callOperation("automation:actions-v4:2026-03:patch-/automation/actions/2026-03/{appId}/{definitionId}_update", ...(args as HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:patch-/automation/actions/2026-03/{appId}/{definitionId}_update">)),
    ActionsV4GetAutomationActions202603AppIdDefinitionIdRequiresObjectAutomationV4ActionsAppIdDefinitionIdRequiresObject: (...args) => callOperation("automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/requires-object_/automation/v4/actions/{appId}/{definitionId}/requires-object", ...(args as HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/requires-object_/automation/v4/actions/{appId}/{definitionId}/requires-object">)),
    ActionsV4PostAutomationActions202603AppIdDefinitionIdRequiresObjectAutomationV4ActionsAppIdDefinitionIdRequiresObject: (...args) => callOperation("automation:actions-v4:2026-03:post-/automation/actions/2026-03/{appId}/{definitionId}/requires-object_/automation/v4/actions/{appId}/{definitionId}/requires-object", ...(args as HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:post-/automation/actions/2026-03/{appId}/{definitionId}/requires-object_/automation/v4/actions/{appId}/{definitionId}/requires-object">)),
  };
}
