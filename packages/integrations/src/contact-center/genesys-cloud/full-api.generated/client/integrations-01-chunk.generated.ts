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
export const GenesysCloudFullApiIntegrations01OperationKeys = [
  "deleteIntegration",
  "deleteIntegrationsAction",
  "deleteIntegrationsActionDraft",
  "deleteIntegrationsCredential",
  "getIntegration",
  "getIntegrationConfigCurrent",
  "getIntegrations",
  "getIntegrationsAction",
  "getIntegrationsActionDraft",
  "getIntegrationsActionDraftFunction",
  "getIntegrationsActionDraftSchema",
  "getIntegrationsActionDraftTemplate",
  "getIntegrationsActionDraftValidation",
  "getIntegrationsActionFunction",
  "getIntegrationsActions",
  "getIntegrationsActionsCategories",
  "getIntegrationsActionsCertificates",
  "getIntegrationsActionsCertificatesTruststore",
  "getIntegrationsActionSchema",
  "getIntegrationsActionsDrafts",
  "getIntegrationsActionsFunctionsRuntimes",
  "getIntegrationsActionTemplate",
  "getIntegrationsBotconnectorIntegrationIdBot",
  "getIntegrationsBotconnectorIntegrationIdBots",
  "getIntegrationsBotconnectorIntegrationIdBotsSummaries",
  "getIntegrationsBotconnectorIntegrationIdBotVersions",
  "getIntegrationsClientapps",
  "getIntegrationsClientappsUnifiedcommunications",
  "getIntegrationsCredential",
  "getIntegrationsCredentials",
  "getIntegrationsCredentialsListing",
  "getIntegrationsCredentialsTypes",
  "getIntegrationsSpeechAudioconnector",
  "getIntegrationsSpeechAudioconnectorIntegrationId",
  "getIntegrationsSpeechDialogflowAgent",
  "getIntegrationsSpeechDialogflowAgents",
  "getIntegrationsSpeechDialogflowcxAgent",
  "getIntegrationsSpeechDialogflowcxAgents",
  "getIntegrationsSpeechLexBotAlias",
  "getIntegrationsSpeechLexBotBotIdAliases",
  "getIntegrationsSpeechLexBots",
  "getIntegrationsSpeechLexv2BotAlias",
  "getIntegrationsSpeechLexv2BotBotIdAliases",
  "getIntegrationsSpeechLexv2Bots",
  "getIntegrationsSpeechNuanceNuanceIntegrationIdBot",
  "getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob",
  "getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults",
  "getIntegrationsSpeechNuanceNuanceIntegrationIdBots",
  "getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob",
  "getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults",
  "getIntegrationsSpeechSttEngine",
  "getIntegrationsSpeechSttEngines",
  "getIntegrationsSpeechTtsEngine",
  "getIntegrationsSpeechTtsEngines",
  "getIntegrationsSpeechTtsEngineVoice",
  "getIntegrationsSpeechTtsEngineVoices",
  "getIntegrationsSpeechTtsSettings",
  "getIntegrationsType",
  "getIntegrationsTypeConfigschema",
  "getIntegrationsTypes",
  "getIntegrationsUnifiedcommunicationsClientapp",
  "getIntegrationsUnifiedcommunicationsClientapps",
  "getIntegrationsUserapps",
  "patchIntegration",
  "patchIntegrationsAction",
  "patchIntegrationsActionDraft",
  "postIntegrations",
  "postIntegrationsActionDraft",
  "postIntegrationsActionDraftPublish",
  "postIntegrationsActionDraftTest",
  "postIntegrationsActionExecute",
  "postIntegrationsActions",
  "postIntegrationsActionsDrafts",
  "postIntegrationsActionTest",
  "postIntegrationsCredentials",
  "postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs",
  "postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs",
  "postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate",
  "postIntegrationsWebhookEvents",
  "putIntegrationConfigCurrent"
] as const;
export type GenesysCloudFullApiIntegrations01OperationKey = typeof GenesysCloudFullApiIntegrations01OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiIntegrations01OperationPathParamMap {
  "deleteIntegration": { "integrationId": GenesysCloudFullApiPathParamValue };
  "deleteIntegrationsAction": { "actionId": GenesysCloudFullApiPathParamValue };
  "deleteIntegrationsActionDraft": { "actionId": GenesysCloudFullApiPathParamValue };
  "deleteIntegrationsCredential": { "credentialId": GenesysCloudFullApiPathParamValue };
  "getIntegration": { "integrationId": GenesysCloudFullApiPathParamValue };
  "getIntegrationConfigCurrent": { "integrationId": GenesysCloudFullApiPathParamValue };
  "getIntegrations": {};
  "getIntegrationsAction": { "actionId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsActionDraft": { "actionId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsActionDraftFunction": { "actionId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsActionDraftSchema": { "actionId": GenesysCloudFullApiPathParamValue; "fileName": GenesysCloudFullApiPathParamValue };
  "getIntegrationsActionDraftTemplate": { "actionId": GenesysCloudFullApiPathParamValue; "fileName": GenesysCloudFullApiPathParamValue };
  "getIntegrationsActionDraftValidation": { "actionId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsActionFunction": { "actionId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsActions": {};
  "getIntegrationsActionsCategories": {};
  "getIntegrationsActionsCertificates": {};
  "getIntegrationsActionsCertificatesTruststore": {};
  "getIntegrationsActionSchema": { "actionId": GenesysCloudFullApiPathParamValue; "fileName": GenesysCloudFullApiPathParamValue };
  "getIntegrationsActionsDrafts": {};
  "getIntegrationsActionsFunctionsRuntimes": {};
  "getIntegrationsActionTemplate": { "actionId": GenesysCloudFullApiPathParamValue; "fileName": GenesysCloudFullApiPathParamValue };
  "getIntegrationsBotconnectorIntegrationIdBot": { "integrationId": GenesysCloudFullApiPathParamValue; "botId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsBotconnectorIntegrationIdBots": { "integrationId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsBotconnectorIntegrationIdBotsSummaries": { "integrationId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsBotconnectorIntegrationIdBotVersions": { "integrationId": GenesysCloudFullApiPathParamValue; "botId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsClientapps": {};
  "getIntegrationsClientappsUnifiedcommunications": {};
  "getIntegrationsCredential": { "credentialId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsCredentials": {};
  "getIntegrationsCredentialsListing": {};
  "getIntegrationsCredentialsTypes": {};
  "getIntegrationsSpeechAudioconnector": {};
  "getIntegrationsSpeechAudioconnectorIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsSpeechDialogflowAgent": { "agentId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsSpeechDialogflowAgents": {};
  "getIntegrationsSpeechDialogflowcxAgent": { "agentId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsSpeechDialogflowcxAgents": {};
  "getIntegrationsSpeechLexBotAlias": { "aliasId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsSpeechLexBotBotIdAliases": { "botId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsSpeechLexBots": {};
  "getIntegrationsSpeechLexv2BotAlias": { "aliasId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsSpeechLexv2BotBotIdAliases": { "botId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsSpeechLexv2Bots": {};
  "getIntegrationsSpeechNuanceNuanceIntegrationIdBot": { "nuanceIntegrationId": GenesysCloudFullApiPathParamValue; "botId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob": { "nuanceIntegrationId": GenesysCloudFullApiPathParamValue; "botId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults": { "nuanceIntegrationId": GenesysCloudFullApiPathParamValue; "botId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsSpeechNuanceNuanceIntegrationIdBots": { "nuanceIntegrationId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob": { "nuanceIntegrationId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults": { "nuanceIntegrationId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsSpeechSttEngine": { "engineId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsSpeechSttEngines": {};
  "getIntegrationsSpeechTtsEngine": { "engineId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsSpeechTtsEngines": {};
  "getIntegrationsSpeechTtsEngineVoice": { "engineId": GenesysCloudFullApiPathParamValue; "voiceId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsSpeechTtsEngineVoices": { "engineId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsSpeechTtsSettings": {};
  "getIntegrationsType": { "typeId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsTypeConfigschema": { "typeId": GenesysCloudFullApiPathParamValue; "configType": GenesysCloudFullApiPathParamValue };
  "getIntegrationsTypes": {};
  "getIntegrationsUnifiedcommunicationsClientapp": { "ucIntegrationId": GenesysCloudFullApiPathParamValue };
  "getIntegrationsUnifiedcommunicationsClientapps": {};
  "getIntegrationsUserapps": {};
  "patchIntegration": { "integrationId": GenesysCloudFullApiPathParamValue };
  "patchIntegrationsAction": { "actionId": GenesysCloudFullApiPathParamValue };
  "patchIntegrationsActionDraft": { "actionId": GenesysCloudFullApiPathParamValue };
  "postIntegrations": {};
  "postIntegrationsActionDraft": { "actionId": GenesysCloudFullApiPathParamValue };
  "postIntegrationsActionDraftPublish": { "actionId": GenesysCloudFullApiPathParamValue };
  "postIntegrationsActionDraftTest": { "actionId": GenesysCloudFullApiPathParamValue };
  "postIntegrationsActionExecute": { "actionId": GenesysCloudFullApiPathParamValue };
  "postIntegrationsActions": {};
  "postIntegrationsActionsDrafts": {};
  "postIntegrationsActionTest": { "actionId": GenesysCloudFullApiPathParamValue };
  "postIntegrationsCredentials": {};
  "postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs": { "nuanceIntegrationId": GenesysCloudFullApiPathParamValue; "botId": GenesysCloudFullApiPathParamValue };
  "postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs": { "nuanceIntegrationId": GenesysCloudFullApiPathParamValue };
  "postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate": { "nuanceIntegrationId": GenesysCloudFullApiPathParamValue };
  "postIntegrationsWebhookEvents": { "tokenId": GenesysCloudFullApiPathParamValue };
  "putIntegrationConfigCurrent": { "integrationId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiIntegrations01OperationRequestMap {
  "deleteIntegration": GenesysCloudFullApiOperationInput<"deleteIntegration">;
  "deleteIntegrationsAction": GenesysCloudFullApiOperationInput<"deleteIntegrationsAction">;
  "deleteIntegrationsActionDraft": GenesysCloudFullApiOperationInput<"deleteIntegrationsActionDraft">;
  "deleteIntegrationsCredential": GenesysCloudFullApiOperationInput<"deleteIntegrationsCredential">;
  "getIntegration": GenesysCloudFullApiOperationInput<"getIntegration">;
  "getIntegrationConfigCurrent": GenesysCloudFullApiOperationInput<"getIntegrationConfigCurrent">;
  "getIntegrations": GenesysCloudFullApiOperationInput<"getIntegrations">;
  "getIntegrationsAction": GenesysCloudFullApiOperationInput<"getIntegrationsAction">;
  "getIntegrationsActionDraft": GenesysCloudFullApiOperationInput<"getIntegrationsActionDraft">;
  "getIntegrationsActionDraftFunction": GenesysCloudFullApiOperationInput<"getIntegrationsActionDraftFunction">;
  "getIntegrationsActionDraftSchema": GenesysCloudFullApiOperationInput<"getIntegrationsActionDraftSchema">;
  "getIntegrationsActionDraftTemplate": GenesysCloudFullApiOperationInput<"getIntegrationsActionDraftTemplate">;
  "getIntegrationsActionDraftValidation": GenesysCloudFullApiOperationInput<"getIntegrationsActionDraftValidation">;
  "getIntegrationsActionFunction": GenesysCloudFullApiOperationInput<"getIntegrationsActionFunction">;
  "getIntegrationsActions": GenesysCloudFullApiOperationInput<"getIntegrationsActions">;
  "getIntegrationsActionsCategories": GenesysCloudFullApiOperationInput<"getIntegrationsActionsCategories">;
  "getIntegrationsActionsCertificates": GenesysCloudFullApiOperationInput<"getIntegrationsActionsCertificates">;
  "getIntegrationsActionsCertificatesTruststore": GenesysCloudFullApiOperationInput<"getIntegrationsActionsCertificatesTruststore">;
  "getIntegrationsActionSchema": GenesysCloudFullApiOperationInput<"getIntegrationsActionSchema">;
  "getIntegrationsActionsDrafts": GenesysCloudFullApiOperationInput<"getIntegrationsActionsDrafts">;
  "getIntegrationsActionsFunctionsRuntimes": GenesysCloudFullApiOperationInput<"getIntegrationsActionsFunctionsRuntimes">;
  "getIntegrationsActionTemplate": GenesysCloudFullApiOperationInput<"getIntegrationsActionTemplate">;
  "getIntegrationsBotconnectorIntegrationIdBot": GenesysCloudFullApiOperationInput<"getIntegrationsBotconnectorIntegrationIdBot">;
  "getIntegrationsBotconnectorIntegrationIdBots": GenesysCloudFullApiOperationInput<"getIntegrationsBotconnectorIntegrationIdBots">;
  "getIntegrationsBotconnectorIntegrationIdBotsSummaries": GenesysCloudFullApiOperationInput<"getIntegrationsBotconnectorIntegrationIdBotsSummaries">;
  "getIntegrationsBotconnectorIntegrationIdBotVersions": GenesysCloudFullApiOperationInput<"getIntegrationsBotconnectorIntegrationIdBotVersions">;
  "getIntegrationsClientapps": GenesysCloudFullApiOperationInput<"getIntegrationsClientapps">;
  "getIntegrationsClientappsUnifiedcommunications": GenesysCloudFullApiOperationInput<"getIntegrationsClientappsUnifiedcommunications">;
  "getIntegrationsCredential": GenesysCloudFullApiOperationInput<"getIntegrationsCredential">;
  "getIntegrationsCredentials": GenesysCloudFullApiOperationInput<"getIntegrationsCredentials">;
  "getIntegrationsCredentialsListing": GenesysCloudFullApiOperationInput<"getIntegrationsCredentialsListing">;
  "getIntegrationsCredentialsTypes": GenesysCloudFullApiOperationInput<"getIntegrationsCredentialsTypes">;
  "getIntegrationsSpeechAudioconnector": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechAudioconnector">;
  "getIntegrationsSpeechAudioconnectorIntegrationId": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechAudioconnectorIntegrationId">;
  "getIntegrationsSpeechDialogflowAgent": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechDialogflowAgent">;
  "getIntegrationsSpeechDialogflowAgents": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechDialogflowAgents">;
  "getIntegrationsSpeechDialogflowcxAgent": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechDialogflowcxAgent">;
  "getIntegrationsSpeechDialogflowcxAgents": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechDialogflowcxAgents">;
  "getIntegrationsSpeechLexBotAlias": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechLexBotAlias">;
  "getIntegrationsSpeechLexBotBotIdAliases": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechLexBotBotIdAliases">;
  "getIntegrationsSpeechLexBots": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechLexBots">;
  "getIntegrationsSpeechLexv2BotAlias": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechLexv2BotAlias">;
  "getIntegrationsSpeechLexv2BotBotIdAliases": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechLexv2BotBotIdAliases">;
  "getIntegrationsSpeechLexv2Bots": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechLexv2Bots">;
  "getIntegrationsSpeechNuanceNuanceIntegrationIdBot": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechNuanceNuanceIntegrationIdBot">;
  "getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob">;
  "getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults">;
  "getIntegrationsSpeechNuanceNuanceIntegrationIdBots": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechNuanceNuanceIntegrationIdBots">;
  "getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob">;
  "getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults">;
  "getIntegrationsSpeechSttEngine": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechSttEngine">;
  "getIntegrationsSpeechSttEngines": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechSttEngines">;
  "getIntegrationsSpeechTtsEngine": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechTtsEngine">;
  "getIntegrationsSpeechTtsEngines": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechTtsEngines">;
  "getIntegrationsSpeechTtsEngineVoice": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechTtsEngineVoice">;
  "getIntegrationsSpeechTtsEngineVoices": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechTtsEngineVoices">;
  "getIntegrationsSpeechTtsSettings": GenesysCloudFullApiOperationInput<"getIntegrationsSpeechTtsSettings">;
  "getIntegrationsType": GenesysCloudFullApiOperationInput<"getIntegrationsType">;
  "getIntegrationsTypeConfigschema": GenesysCloudFullApiOperationInput<"getIntegrationsTypeConfigschema">;
  "getIntegrationsTypes": GenesysCloudFullApiOperationInput<"getIntegrationsTypes">;
  "getIntegrationsUnifiedcommunicationsClientapp": GenesysCloudFullApiOperationInput<"getIntegrationsUnifiedcommunicationsClientapp">;
  "getIntegrationsUnifiedcommunicationsClientapps": GenesysCloudFullApiOperationInput<"getIntegrationsUnifiedcommunicationsClientapps">;
  "getIntegrationsUserapps": GenesysCloudFullApiOperationInput<"getIntegrationsUserapps">;
  "patchIntegration": GenesysCloudFullApiOperationInput<"patchIntegration">;
  "patchIntegrationsAction": GenesysCloudFullApiOperationInput<"patchIntegrationsAction">;
  "patchIntegrationsActionDraft": GenesysCloudFullApiOperationInput<"patchIntegrationsActionDraft">;
  "postIntegrations": GenesysCloudFullApiOperationInput<"postIntegrations">;
  "postIntegrationsActionDraft": GenesysCloudFullApiOperationInput<"postIntegrationsActionDraft">;
  "postIntegrationsActionDraftPublish": GenesysCloudFullApiOperationInput<"postIntegrationsActionDraftPublish">;
  "postIntegrationsActionDraftTest": GenesysCloudFullApiOperationInput<"postIntegrationsActionDraftTest">;
  "postIntegrationsActionExecute": GenesysCloudFullApiOperationInput<"postIntegrationsActionExecute">;
  "postIntegrationsActions": GenesysCloudFullApiOperationInput<"postIntegrationsActions">;
  "postIntegrationsActionsDrafts": GenesysCloudFullApiOperationInput<"postIntegrationsActionsDrafts">;
  "postIntegrationsActionTest": GenesysCloudFullApiOperationInput<"postIntegrationsActionTest">;
  "postIntegrationsCredentials": GenesysCloudFullApiOperationInput<"postIntegrationsCredentials">;
  "postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs": GenesysCloudFullApiOperationInput<"postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs">;
  "postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs": GenesysCloudFullApiOperationInput<"postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs">;
  "postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate": GenesysCloudFullApiOperationInput<"postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate">;
  "postIntegrationsWebhookEvents": GenesysCloudFullApiOperationInput<"postIntegrationsWebhookEvents">;
  "putIntegrationConfigCurrent": GenesysCloudFullApiOperationInput<"putIntegrationConfigCurrent">;
}

export interface GenesysCloudFullApiIntegrations01GeneratedClient {
  DeleteIntegration(...args: GenesysCloudFullApiOperationArgs<"deleteIntegration">): Promise<GenesysCloudFullApiOperationResponseMap["deleteIntegration"]>;
  DeleteIntegrationsAction(...args: GenesysCloudFullApiOperationArgs<"deleteIntegrationsAction">): Promise<GenesysCloudFullApiOperationResponseMap["deleteIntegrationsAction"]>;
  DeleteIntegrationsActionDraft(...args: GenesysCloudFullApiOperationArgs<"deleteIntegrationsActionDraft">): Promise<GenesysCloudFullApiOperationResponseMap["deleteIntegrationsActionDraft"]>;
  DeleteIntegrationsCredential(...args: GenesysCloudFullApiOperationArgs<"deleteIntegrationsCredential">): Promise<GenesysCloudFullApiOperationResponseMap["deleteIntegrationsCredential"]>;
  GetIntegration(...args: GenesysCloudFullApiOperationArgs<"getIntegration">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegration"]>;
  GetIntegrationConfigCurrent(...args: GenesysCloudFullApiOperationArgs<"getIntegrationConfigCurrent">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationConfigCurrent"]>;
  GetIntegrations(...args: GenesysCloudFullApiOperationArgs<"getIntegrations">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrations"]>;
  GetIntegrationsAction(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsAction">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsAction"]>;
  GetIntegrationsActionDraft(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsActionDraft">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsActionDraft"]>;
  GetIntegrationsActionDraftFunction(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsActionDraftFunction">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsActionDraftFunction"]>;
  GetIntegrationsActionDraftSchema(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsActionDraftSchema">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsActionDraftSchema"]>;
  GetIntegrationsActionDraftTemplate(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsActionDraftTemplate">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsActionDraftTemplate"]>;
  GetIntegrationsActionDraftValidation(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsActionDraftValidation">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsActionDraftValidation"]>;
  GetIntegrationsActionFunction(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsActionFunction">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsActionFunction"]>;
  GetIntegrationsActions(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsActions">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsActions"]>;
  GetIntegrationsActionsCategories(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsActionsCategories">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsActionsCategories"]>;
  GetIntegrationsActionsCertificates(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsActionsCertificates">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsActionsCertificates"]>;
  GetIntegrationsActionsCertificatesTruststore(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsActionsCertificatesTruststore">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsActionsCertificatesTruststore"]>;
  GetIntegrationsActionSchema(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsActionSchema">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsActionSchema"]>;
  GetIntegrationsActionsDrafts(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsActionsDrafts">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsActionsDrafts"]>;
  GetIntegrationsActionsFunctionsRuntimes(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsActionsFunctionsRuntimes">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsActionsFunctionsRuntimes"]>;
  GetIntegrationsActionTemplate(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsActionTemplate">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsActionTemplate"]>;
  GetIntegrationsBotconnectorIntegrationIdBot(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsBotconnectorIntegrationIdBot">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsBotconnectorIntegrationIdBot"]>;
  GetIntegrationsBotconnectorIntegrationIdBots(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsBotconnectorIntegrationIdBots">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsBotconnectorIntegrationIdBots"]>;
  GetIntegrationsBotconnectorIntegrationIdBotsSummaries(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsBotconnectorIntegrationIdBotsSummaries">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsBotconnectorIntegrationIdBotsSummaries"]>;
  GetIntegrationsBotconnectorIntegrationIdBotVersions(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsBotconnectorIntegrationIdBotVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsBotconnectorIntegrationIdBotVersions"]>;
  GetIntegrationsClientapps(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsClientapps">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsClientapps"]>;
  GetIntegrationsClientappsUnifiedcommunications(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsClientappsUnifiedcommunications">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsClientappsUnifiedcommunications"]>;
  GetIntegrationsCredential(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsCredential">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsCredential"]>;
  GetIntegrationsCredentials(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsCredentials">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsCredentials"]>;
  GetIntegrationsCredentialsListing(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsCredentialsListing">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsCredentialsListing"]>;
  GetIntegrationsCredentialsTypes(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsCredentialsTypes">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsCredentialsTypes"]>;
  GetIntegrationsSpeechAudioconnector(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechAudioconnector">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechAudioconnector"]>;
  GetIntegrationsSpeechAudioconnectorIntegrationId(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechAudioconnectorIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechAudioconnectorIntegrationId"]>;
  GetIntegrationsSpeechDialogflowAgent(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechDialogflowAgent">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechDialogflowAgent"]>;
  GetIntegrationsSpeechDialogflowAgents(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechDialogflowAgents">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechDialogflowAgents"]>;
  GetIntegrationsSpeechDialogflowcxAgent(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechDialogflowcxAgent">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechDialogflowcxAgent"]>;
  GetIntegrationsSpeechDialogflowcxAgents(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechDialogflowcxAgents">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechDialogflowcxAgents"]>;
  GetIntegrationsSpeechLexBotAlias(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechLexBotAlias">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechLexBotAlias"]>;
  GetIntegrationsSpeechLexBotBotIdAliases(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechLexBotBotIdAliases">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechLexBotBotIdAliases"]>;
  GetIntegrationsSpeechLexBots(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechLexBots">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechLexBots"]>;
  GetIntegrationsSpeechLexv2BotAlias(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechLexv2BotAlias">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechLexv2BotAlias"]>;
  GetIntegrationsSpeechLexv2BotBotIdAliases(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechLexv2BotBotIdAliases">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechLexv2BotBotIdAliases"]>;
  GetIntegrationsSpeechLexv2Bots(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechLexv2Bots">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechLexv2Bots"]>;
  GetIntegrationsSpeechNuanceNuanceIntegrationIdBot(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechNuanceNuanceIntegrationIdBot">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechNuanceNuanceIntegrationIdBot"]>;
  GetIntegrationsSpeechNuanceNuanceIntegrationIdBotJob(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob"]>;
  GetIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults"]>;
  GetIntegrationsSpeechNuanceNuanceIntegrationIdBots(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechNuanceNuanceIntegrationIdBots">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechNuanceNuanceIntegrationIdBots"]>;
  GetIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob"]>;
  GetIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults"]>;
  GetIntegrationsSpeechSttEngine(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechSttEngine">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechSttEngine"]>;
  GetIntegrationsSpeechSttEngines(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechSttEngines">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechSttEngines"]>;
  GetIntegrationsSpeechTtsEngine(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechTtsEngine">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechTtsEngine"]>;
  GetIntegrationsSpeechTtsEngines(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechTtsEngines">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechTtsEngines"]>;
  GetIntegrationsSpeechTtsEngineVoice(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechTtsEngineVoice">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechTtsEngineVoice"]>;
  GetIntegrationsSpeechTtsEngineVoices(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechTtsEngineVoices">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechTtsEngineVoices"]>;
  GetIntegrationsSpeechTtsSettings(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechTtsSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsSpeechTtsSettings"]>;
  GetIntegrationsType(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsType">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsType"]>;
  GetIntegrationsTypeConfigschema(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsTypeConfigschema">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsTypeConfigschema"]>;
  GetIntegrationsTypes(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsTypes">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsTypes"]>;
  GetIntegrationsUnifiedcommunicationsClientapp(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsUnifiedcommunicationsClientapp">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsUnifiedcommunicationsClientapp"]>;
  GetIntegrationsUnifiedcommunicationsClientapps(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsUnifiedcommunicationsClientapps">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsUnifiedcommunicationsClientapps"]>;
  GetIntegrationsUserapps(...args: GenesysCloudFullApiOperationArgs<"getIntegrationsUserapps">): Promise<GenesysCloudFullApiOperationResponseMap["getIntegrationsUserapps"]>;
  PatchIntegration(...args: GenesysCloudFullApiOperationArgs<"patchIntegration">): Promise<GenesysCloudFullApiOperationResponseMap["patchIntegration"]>;
  PatchIntegrationsAction(...args: GenesysCloudFullApiOperationArgs<"patchIntegrationsAction">): Promise<GenesysCloudFullApiOperationResponseMap["patchIntegrationsAction"]>;
  PatchIntegrationsActionDraft(...args: GenesysCloudFullApiOperationArgs<"patchIntegrationsActionDraft">): Promise<GenesysCloudFullApiOperationResponseMap["patchIntegrationsActionDraft"]>;
  PostIntegrations(...args: GenesysCloudFullApiOperationArgs<"postIntegrations">): Promise<GenesysCloudFullApiOperationResponseMap["postIntegrations"]>;
  PostIntegrationsActionDraft(...args: GenesysCloudFullApiOperationArgs<"postIntegrationsActionDraft">): Promise<GenesysCloudFullApiOperationResponseMap["postIntegrationsActionDraft"]>;
  PostIntegrationsActionDraftPublish(...args: GenesysCloudFullApiOperationArgs<"postIntegrationsActionDraftPublish">): Promise<GenesysCloudFullApiOperationResponseMap["postIntegrationsActionDraftPublish"]>;
  PostIntegrationsActionDraftTest(...args: GenesysCloudFullApiOperationArgs<"postIntegrationsActionDraftTest">): Promise<GenesysCloudFullApiOperationResponseMap["postIntegrationsActionDraftTest"]>;
  PostIntegrationsActionExecute(...args: GenesysCloudFullApiOperationArgs<"postIntegrationsActionExecute">): Promise<GenesysCloudFullApiOperationResponseMap["postIntegrationsActionExecute"]>;
  PostIntegrationsActions(...args: GenesysCloudFullApiOperationArgs<"postIntegrationsActions">): Promise<GenesysCloudFullApiOperationResponseMap["postIntegrationsActions"]>;
  PostIntegrationsActionsDrafts(...args: GenesysCloudFullApiOperationArgs<"postIntegrationsActionsDrafts">): Promise<GenesysCloudFullApiOperationResponseMap["postIntegrationsActionsDrafts"]>;
  PostIntegrationsActionTest(...args: GenesysCloudFullApiOperationArgs<"postIntegrationsActionTest">): Promise<GenesysCloudFullApiOperationResponseMap["postIntegrationsActionTest"]>;
  PostIntegrationsCredentials(...args: GenesysCloudFullApiOperationArgs<"postIntegrationsCredentials">): Promise<GenesysCloudFullApiOperationResponseMap["postIntegrationsCredentials"]>;
  PostIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs(...args: GenesysCloudFullApiOperationArgs<"postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs"]>;
  PostIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs(...args: GenesysCloudFullApiOperationArgs<"postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs"]>;
  PostIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate(...args: GenesysCloudFullApiOperationArgs<"postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate">): Promise<GenesysCloudFullApiOperationResponseMap["postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate"]>;
  PostIntegrationsWebhookEvents(...args: GenesysCloudFullApiOperationArgs<"postIntegrationsWebhookEvents">): Promise<GenesysCloudFullApiOperationResponseMap["postIntegrationsWebhookEvents"]>;
  PutIntegrationConfigCurrent(...args: GenesysCloudFullApiOperationArgs<"putIntegrationConfigCurrent">): Promise<GenesysCloudFullApiOperationResponseMap["putIntegrationConfigCurrent"]>;
}

export const GenesysCloudFullApiIntegrations01GeneratedFunctionNames = [
  "DeleteIntegration",
  "DeleteIntegrationsAction",
  "DeleteIntegrationsActionDraft",
  "DeleteIntegrationsCredential",
  "GetIntegration",
  "GetIntegrationConfigCurrent",
  "GetIntegrations",
  "GetIntegrationsAction",
  "GetIntegrationsActionDraft",
  "GetIntegrationsActionDraftFunction",
  "GetIntegrationsActionDraftSchema",
  "GetIntegrationsActionDraftTemplate",
  "GetIntegrationsActionDraftValidation",
  "GetIntegrationsActionFunction",
  "GetIntegrationsActions",
  "GetIntegrationsActionsCategories",
  "GetIntegrationsActionsCertificates",
  "GetIntegrationsActionsCertificatesTruststore",
  "GetIntegrationsActionSchema",
  "GetIntegrationsActionsDrafts",
  "GetIntegrationsActionsFunctionsRuntimes",
  "GetIntegrationsActionTemplate",
  "GetIntegrationsBotconnectorIntegrationIdBot",
  "GetIntegrationsBotconnectorIntegrationIdBots",
  "GetIntegrationsBotconnectorIntegrationIdBotsSummaries",
  "GetIntegrationsBotconnectorIntegrationIdBotVersions",
  "GetIntegrationsClientapps",
  "GetIntegrationsClientappsUnifiedcommunications",
  "GetIntegrationsCredential",
  "GetIntegrationsCredentials",
  "GetIntegrationsCredentialsListing",
  "GetIntegrationsCredentialsTypes",
  "GetIntegrationsSpeechAudioconnector",
  "GetIntegrationsSpeechAudioconnectorIntegrationId",
  "GetIntegrationsSpeechDialogflowAgent",
  "GetIntegrationsSpeechDialogflowAgents",
  "GetIntegrationsSpeechDialogflowcxAgent",
  "GetIntegrationsSpeechDialogflowcxAgents",
  "GetIntegrationsSpeechLexBotAlias",
  "GetIntegrationsSpeechLexBotBotIdAliases",
  "GetIntegrationsSpeechLexBots",
  "GetIntegrationsSpeechLexv2BotAlias",
  "GetIntegrationsSpeechLexv2BotBotIdAliases",
  "GetIntegrationsSpeechLexv2Bots",
  "GetIntegrationsSpeechNuanceNuanceIntegrationIdBot",
  "GetIntegrationsSpeechNuanceNuanceIntegrationIdBotJob",
  "GetIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults",
  "GetIntegrationsSpeechNuanceNuanceIntegrationIdBots",
  "GetIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob",
  "GetIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults",
  "GetIntegrationsSpeechSttEngine",
  "GetIntegrationsSpeechSttEngines",
  "GetIntegrationsSpeechTtsEngine",
  "GetIntegrationsSpeechTtsEngines",
  "GetIntegrationsSpeechTtsEngineVoice",
  "GetIntegrationsSpeechTtsEngineVoices",
  "GetIntegrationsSpeechTtsSettings",
  "GetIntegrationsType",
  "GetIntegrationsTypeConfigschema",
  "GetIntegrationsTypes",
  "GetIntegrationsUnifiedcommunicationsClientapp",
  "GetIntegrationsUnifiedcommunicationsClientapps",
  "GetIntegrationsUserapps",
  "PatchIntegration",
  "PatchIntegrationsAction",
  "PatchIntegrationsActionDraft",
  "PostIntegrations",
  "PostIntegrationsActionDraft",
  "PostIntegrationsActionDraftPublish",
  "PostIntegrationsActionDraftTest",
  "PostIntegrationsActionExecute",
  "PostIntegrationsActions",
  "PostIntegrationsActionsDrafts",
  "PostIntegrationsActionTest",
  "PostIntegrationsCredentials",
  "PostIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs",
  "PostIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs",
  "PostIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate",
  "PostIntegrationsWebhookEvents",
  "PutIntegrationConfigCurrent"
] as const satisfies readonly (keyof GenesysCloudFullApiIntegrations01GeneratedClient)[];

export function createGenesysCloudFullApiIntegrations01GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiIntegrations01GeneratedClient {
  return {
    DeleteIntegration: (...args) => callOperation("deleteIntegration", ...(args as GenesysCloudFullApiOperationArgs<"deleteIntegration">)),
    DeleteIntegrationsAction: (...args) => callOperation("deleteIntegrationsAction", ...(args as GenesysCloudFullApiOperationArgs<"deleteIntegrationsAction">)),
    DeleteIntegrationsActionDraft: (...args) => callOperation("deleteIntegrationsActionDraft", ...(args as GenesysCloudFullApiOperationArgs<"deleteIntegrationsActionDraft">)),
    DeleteIntegrationsCredential: (...args) => callOperation("deleteIntegrationsCredential", ...(args as GenesysCloudFullApiOperationArgs<"deleteIntegrationsCredential">)),
    GetIntegration: (...args) => callOperation("getIntegration", ...(args as GenesysCloudFullApiOperationArgs<"getIntegration">)),
    GetIntegrationConfigCurrent: (...args) => callOperation("getIntegrationConfigCurrent", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationConfigCurrent">)),
    GetIntegrations: (...args) => callOperation("getIntegrations", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrations">)),
    GetIntegrationsAction: (...args) => callOperation("getIntegrationsAction", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsAction">)),
    GetIntegrationsActionDraft: (...args) => callOperation("getIntegrationsActionDraft", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsActionDraft">)),
    GetIntegrationsActionDraftFunction: (...args) => callOperation("getIntegrationsActionDraftFunction", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsActionDraftFunction">)),
    GetIntegrationsActionDraftSchema: (...args) => callOperation("getIntegrationsActionDraftSchema", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsActionDraftSchema">)),
    GetIntegrationsActionDraftTemplate: (...args) => callOperation("getIntegrationsActionDraftTemplate", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsActionDraftTemplate">)),
    GetIntegrationsActionDraftValidation: (...args) => callOperation("getIntegrationsActionDraftValidation", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsActionDraftValidation">)),
    GetIntegrationsActionFunction: (...args) => callOperation("getIntegrationsActionFunction", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsActionFunction">)),
    GetIntegrationsActions: (...args) => callOperation("getIntegrationsActions", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsActions">)),
    GetIntegrationsActionsCategories: (...args) => callOperation("getIntegrationsActionsCategories", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsActionsCategories">)),
    GetIntegrationsActionsCertificates: (...args) => callOperation("getIntegrationsActionsCertificates", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsActionsCertificates">)),
    GetIntegrationsActionsCertificatesTruststore: (...args) => callOperation("getIntegrationsActionsCertificatesTruststore", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsActionsCertificatesTruststore">)),
    GetIntegrationsActionSchema: (...args) => callOperation("getIntegrationsActionSchema", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsActionSchema">)),
    GetIntegrationsActionsDrafts: (...args) => callOperation("getIntegrationsActionsDrafts", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsActionsDrafts">)),
    GetIntegrationsActionsFunctionsRuntimes: (...args) => callOperation("getIntegrationsActionsFunctionsRuntimes", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsActionsFunctionsRuntimes">)),
    GetIntegrationsActionTemplate: (...args) => callOperation("getIntegrationsActionTemplate", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsActionTemplate">)),
    GetIntegrationsBotconnectorIntegrationIdBot: (...args) => callOperation("getIntegrationsBotconnectorIntegrationIdBot", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsBotconnectorIntegrationIdBot">)),
    GetIntegrationsBotconnectorIntegrationIdBots: (...args) => callOperation("getIntegrationsBotconnectorIntegrationIdBots", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsBotconnectorIntegrationIdBots">)),
    GetIntegrationsBotconnectorIntegrationIdBotsSummaries: (...args) => callOperation("getIntegrationsBotconnectorIntegrationIdBotsSummaries", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsBotconnectorIntegrationIdBotsSummaries">)),
    GetIntegrationsBotconnectorIntegrationIdBotVersions: (...args) => callOperation("getIntegrationsBotconnectorIntegrationIdBotVersions", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsBotconnectorIntegrationIdBotVersions">)),
    GetIntegrationsClientapps: (...args) => callOperation("getIntegrationsClientapps", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsClientapps">)),
    GetIntegrationsClientappsUnifiedcommunications: (...args) => callOperation("getIntegrationsClientappsUnifiedcommunications", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsClientappsUnifiedcommunications">)),
    GetIntegrationsCredential: (...args) => callOperation("getIntegrationsCredential", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsCredential">)),
    GetIntegrationsCredentials: (...args) => callOperation("getIntegrationsCredentials", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsCredentials">)),
    GetIntegrationsCredentialsListing: (...args) => callOperation("getIntegrationsCredentialsListing", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsCredentialsListing">)),
    GetIntegrationsCredentialsTypes: (...args) => callOperation("getIntegrationsCredentialsTypes", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsCredentialsTypes">)),
    GetIntegrationsSpeechAudioconnector: (...args) => callOperation("getIntegrationsSpeechAudioconnector", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechAudioconnector">)),
    GetIntegrationsSpeechAudioconnectorIntegrationId: (...args) => callOperation("getIntegrationsSpeechAudioconnectorIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechAudioconnectorIntegrationId">)),
    GetIntegrationsSpeechDialogflowAgent: (...args) => callOperation("getIntegrationsSpeechDialogflowAgent", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechDialogflowAgent">)),
    GetIntegrationsSpeechDialogflowAgents: (...args) => callOperation("getIntegrationsSpeechDialogflowAgents", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechDialogflowAgents">)),
    GetIntegrationsSpeechDialogflowcxAgent: (...args) => callOperation("getIntegrationsSpeechDialogflowcxAgent", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechDialogflowcxAgent">)),
    GetIntegrationsSpeechDialogflowcxAgents: (...args) => callOperation("getIntegrationsSpeechDialogflowcxAgents", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechDialogflowcxAgents">)),
    GetIntegrationsSpeechLexBotAlias: (...args) => callOperation("getIntegrationsSpeechLexBotAlias", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechLexBotAlias">)),
    GetIntegrationsSpeechLexBotBotIdAliases: (...args) => callOperation("getIntegrationsSpeechLexBotBotIdAliases", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechLexBotBotIdAliases">)),
    GetIntegrationsSpeechLexBots: (...args) => callOperation("getIntegrationsSpeechLexBots", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechLexBots">)),
    GetIntegrationsSpeechLexv2BotAlias: (...args) => callOperation("getIntegrationsSpeechLexv2BotAlias", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechLexv2BotAlias">)),
    GetIntegrationsSpeechLexv2BotBotIdAliases: (...args) => callOperation("getIntegrationsSpeechLexv2BotBotIdAliases", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechLexv2BotBotIdAliases">)),
    GetIntegrationsSpeechLexv2Bots: (...args) => callOperation("getIntegrationsSpeechLexv2Bots", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechLexv2Bots">)),
    GetIntegrationsSpeechNuanceNuanceIntegrationIdBot: (...args) => callOperation("getIntegrationsSpeechNuanceNuanceIntegrationIdBot", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechNuanceNuanceIntegrationIdBot">)),
    GetIntegrationsSpeechNuanceNuanceIntegrationIdBotJob: (...args) => callOperation("getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob">)),
    GetIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults: (...args) => callOperation("getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults">)),
    GetIntegrationsSpeechNuanceNuanceIntegrationIdBots: (...args) => callOperation("getIntegrationsSpeechNuanceNuanceIntegrationIdBots", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechNuanceNuanceIntegrationIdBots">)),
    GetIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob: (...args) => callOperation("getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob">)),
    GetIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults: (...args) => callOperation("getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults">)),
    GetIntegrationsSpeechSttEngine: (...args) => callOperation("getIntegrationsSpeechSttEngine", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechSttEngine">)),
    GetIntegrationsSpeechSttEngines: (...args) => callOperation("getIntegrationsSpeechSttEngines", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechSttEngines">)),
    GetIntegrationsSpeechTtsEngine: (...args) => callOperation("getIntegrationsSpeechTtsEngine", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechTtsEngine">)),
    GetIntegrationsSpeechTtsEngines: (...args) => callOperation("getIntegrationsSpeechTtsEngines", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechTtsEngines">)),
    GetIntegrationsSpeechTtsEngineVoice: (...args) => callOperation("getIntegrationsSpeechTtsEngineVoice", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechTtsEngineVoice">)),
    GetIntegrationsSpeechTtsEngineVoices: (...args) => callOperation("getIntegrationsSpeechTtsEngineVoices", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechTtsEngineVoices">)),
    GetIntegrationsSpeechTtsSettings: (...args) => callOperation("getIntegrationsSpeechTtsSettings", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsSpeechTtsSettings">)),
    GetIntegrationsType: (...args) => callOperation("getIntegrationsType", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsType">)),
    GetIntegrationsTypeConfigschema: (...args) => callOperation("getIntegrationsTypeConfigschema", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsTypeConfigschema">)),
    GetIntegrationsTypes: (...args) => callOperation("getIntegrationsTypes", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsTypes">)),
    GetIntegrationsUnifiedcommunicationsClientapp: (...args) => callOperation("getIntegrationsUnifiedcommunicationsClientapp", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsUnifiedcommunicationsClientapp">)),
    GetIntegrationsUnifiedcommunicationsClientapps: (...args) => callOperation("getIntegrationsUnifiedcommunicationsClientapps", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsUnifiedcommunicationsClientapps">)),
    GetIntegrationsUserapps: (...args) => callOperation("getIntegrationsUserapps", ...(args as GenesysCloudFullApiOperationArgs<"getIntegrationsUserapps">)),
    PatchIntegration: (...args) => callOperation("patchIntegration", ...(args as GenesysCloudFullApiOperationArgs<"patchIntegration">)),
    PatchIntegrationsAction: (...args) => callOperation("patchIntegrationsAction", ...(args as GenesysCloudFullApiOperationArgs<"patchIntegrationsAction">)),
    PatchIntegrationsActionDraft: (...args) => callOperation("patchIntegrationsActionDraft", ...(args as GenesysCloudFullApiOperationArgs<"patchIntegrationsActionDraft">)),
    PostIntegrations: (...args) => callOperation("postIntegrations", ...(args as GenesysCloudFullApiOperationArgs<"postIntegrations">)),
    PostIntegrationsActionDraft: (...args) => callOperation("postIntegrationsActionDraft", ...(args as GenesysCloudFullApiOperationArgs<"postIntegrationsActionDraft">)),
    PostIntegrationsActionDraftPublish: (...args) => callOperation("postIntegrationsActionDraftPublish", ...(args as GenesysCloudFullApiOperationArgs<"postIntegrationsActionDraftPublish">)),
    PostIntegrationsActionDraftTest: (...args) => callOperation("postIntegrationsActionDraftTest", ...(args as GenesysCloudFullApiOperationArgs<"postIntegrationsActionDraftTest">)),
    PostIntegrationsActionExecute: (...args) => callOperation("postIntegrationsActionExecute", ...(args as GenesysCloudFullApiOperationArgs<"postIntegrationsActionExecute">)),
    PostIntegrationsActions: (...args) => callOperation("postIntegrationsActions", ...(args as GenesysCloudFullApiOperationArgs<"postIntegrationsActions">)),
    PostIntegrationsActionsDrafts: (...args) => callOperation("postIntegrationsActionsDrafts", ...(args as GenesysCloudFullApiOperationArgs<"postIntegrationsActionsDrafts">)),
    PostIntegrationsActionTest: (...args) => callOperation("postIntegrationsActionTest", ...(args as GenesysCloudFullApiOperationArgs<"postIntegrationsActionTest">)),
    PostIntegrationsCredentials: (...args) => callOperation("postIntegrationsCredentials", ...(args as GenesysCloudFullApiOperationArgs<"postIntegrationsCredentials">)),
    PostIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs: (...args) => callOperation("postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs", ...(args as GenesysCloudFullApiOperationArgs<"postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs">)),
    PostIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs: (...args) => callOperation("postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs", ...(args as GenesysCloudFullApiOperationArgs<"postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs">)),
    PostIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate: (...args) => callOperation("postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate", ...(args as GenesysCloudFullApiOperationArgs<"postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate">)),
    PostIntegrationsWebhookEvents: (...args) => callOperation("postIntegrationsWebhookEvents", ...(args as GenesysCloudFullApiOperationArgs<"postIntegrationsWebhookEvents">)),
    PutIntegrationConfigCurrent: (...args) => callOperation("putIntegrationConfigCurrent", ...(args as GenesysCloudFullApiOperationArgs<"putIntegrationConfigCurrent">)),
  };
}
