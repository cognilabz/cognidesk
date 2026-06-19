// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiIntegrations02OperationKeys = [
  "putIntegrationsActionDraftFunction",
  "putIntegrationsBotconnectorIntegrationIdBots",
  "putIntegrationsCredential",
  "putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings",
  "putIntegrationsSpeechTtsSettings",
  "putIntegrationsUnifiedcommunicationThirdpartypresences"
] as const;
export type GenesysCloudFullApiIntegrations02OperationKey = typeof GenesysCloudFullApiIntegrations02OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiIntegrations02OperationPathParamMap {
  "putIntegrationsActionDraftFunction": { "actionId": GenesysCloudFullApiPathParamValue };
  "putIntegrationsBotconnectorIntegrationIdBots": { "integrationId": GenesysCloudFullApiPathParamValue };
  "putIntegrationsCredential": { "credentialId": GenesysCloudFullApiPathParamValue };
  "putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings": { "nuanceIntegrationId": GenesysCloudFullApiPathParamValue };
  "putIntegrationsSpeechTtsSettings": {};
  "putIntegrationsUnifiedcommunicationThirdpartypresences": { "ucIntegrationId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiIntegrations02OperationRequestMap {
  "putIntegrationsActionDraftFunction": GenesysCloudFullApiOperationInput<"putIntegrationsActionDraftFunction">;
  "putIntegrationsBotconnectorIntegrationIdBots": GenesysCloudFullApiOperationInput<"putIntegrationsBotconnectorIntegrationIdBots">;
  "putIntegrationsCredential": GenesysCloudFullApiOperationInput<"putIntegrationsCredential">;
  "putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings": GenesysCloudFullApiOperationInput<"putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings">;
  "putIntegrationsSpeechTtsSettings": GenesysCloudFullApiOperationInput<"putIntegrationsSpeechTtsSettings">;
  "putIntegrationsUnifiedcommunicationThirdpartypresences": GenesysCloudFullApiOperationInput<"putIntegrationsUnifiedcommunicationThirdpartypresences">;
}

export interface GenesysCloudFullApiIntegrations02GeneratedClient {
  PutIntegrationsActionDraftFunction(...args: GenesysCloudFullApiOperationArgs<"putIntegrationsActionDraftFunction">): Promise<GenesysCloudFullApiOperationResponseMap["putIntegrationsActionDraftFunction"]>;
  PutIntegrationsBotconnectorIntegrationIdBots(...args: GenesysCloudFullApiOperationArgs<"putIntegrationsBotconnectorIntegrationIdBots">): Promise<GenesysCloudFullApiOperationResponseMap["putIntegrationsBotconnectorIntegrationIdBots"]>;
  PutIntegrationsCredential(...args: GenesysCloudFullApiOperationArgs<"putIntegrationsCredential">): Promise<GenesysCloudFullApiOperationResponseMap["putIntegrationsCredential"]>;
  PutIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings(...args: GenesysCloudFullApiOperationArgs<"putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings">): Promise<GenesysCloudFullApiOperationResponseMap["putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings"]>;
  PutIntegrationsSpeechTtsSettings(...args: GenesysCloudFullApiOperationArgs<"putIntegrationsSpeechTtsSettings">): Promise<GenesysCloudFullApiOperationResponseMap["putIntegrationsSpeechTtsSettings"]>;
  PutIntegrationsUnifiedcommunicationThirdpartypresences(...args: GenesysCloudFullApiOperationArgs<"putIntegrationsUnifiedcommunicationThirdpartypresences">): Promise<GenesysCloudFullApiOperationResponseMap["putIntegrationsUnifiedcommunicationThirdpartypresences"]>;
}

export const GenesysCloudFullApiIntegrations02GeneratedFunctionNames = [
  "PutIntegrationsActionDraftFunction",
  "PutIntegrationsBotconnectorIntegrationIdBots",
  "PutIntegrationsCredential",
  "PutIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings",
  "PutIntegrationsSpeechTtsSettings",
  "PutIntegrationsUnifiedcommunicationThirdpartypresences"
] as const satisfies readonly (keyof GenesysCloudFullApiIntegrations02GeneratedClient)[];

export function createGenesysCloudFullApiIntegrations02GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiIntegrations02GeneratedClient {
  return {
    PutIntegrationsActionDraftFunction: (...args) => callOperation("putIntegrationsActionDraftFunction", ...(args as GenesysCloudFullApiOperationArgs<"putIntegrationsActionDraftFunction">)),
    PutIntegrationsBotconnectorIntegrationIdBots: (...args) => callOperation("putIntegrationsBotconnectorIntegrationIdBots", ...(args as GenesysCloudFullApiOperationArgs<"putIntegrationsBotconnectorIntegrationIdBots">)),
    PutIntegrationsCredential: (...args) => callOperation("putIntegrationsCredential", ...(args as GenesysCloudFullApiOperationArgs<"putIntegrationsCredential">)),
    PutIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings: (...args) => callOperation("putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings", ...(args as GenesysCloudFullApiOperationArgs<"putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings">)),
    PutIntegrationsSpeechTtsSettings: (...args) => callOperation("putIntegrationsSpeechTtsSettings", ...(args as GenesysCloudFullApiOperationArgs<"putIntegrationsSpeechTtsSettings">)),
    PutIntegrationsUnifiedcommunicationThirdpartypresences: (...args) => callOperation("putIntegrationsUnifiedcommunicationThirdpartypresences", ...(args as GenesysCloudFullApiOperationArgs<"putIntegrationsUnifiedcommunicationThirdpartypresences">)),
  };
}
