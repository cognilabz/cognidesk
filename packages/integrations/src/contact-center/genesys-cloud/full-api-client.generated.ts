// Generated from Genesys Cloud Platform API Swagger (https://api.mypurecloud.com/api/v2/docs/swagger).
// Do not edit by hand; run scripts/generate-genesys-cloud-full-api.mjs after checking upstream docs.

import type { GenesysCloudOperationRequestInput } from "./index.js";
import type {
  GenesysCloudFullApiOperationQueryMap,
  GenesysCloudFullApiOperationQueryRequiredMap,
  GenesysCloudFullApiOperationRequestBodyMap,
  GenesysCloudFullApiOperationRequestBodyRequiredMap,
  GenesysCloudFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createGenesysCloudFullApiAgentAssistantsGeneratedClient,
  GenesysCloudFullApiAgentAssistantsGeneratedFunctionNames,
  type GenesysCloudFullApiAgentAssistantsGeneratedClient,
  type GenesysCloudFullApiAgentAssistantsOperationPathParamMap,
  type GenesysCloudFullApiAgentAssistantsOperationRequestMap,
} from "./full-api.generated/client/agent-assistants-chunk.generated.js";
import {
  createGenesysCloudFullApiAgentCopilotGeneratedClient,
  GenesysCloudFullApiAgentCopilotGeneratedFunctionNames,
  type GenesysCloudFullApiAgentCopilotGeneratedClient,
  type GenesysCloudFullApiAgentCopilotOperationPathParamMap,
  type GenesysCloudFullApiAgentCopilotOperationRequestMap,
} from "./full-api.generated/client/agent-copilot-chunk.generated.js";
import {
  createGenesysCloudFullApiAgentUIGeneratedClient,
  GenesysCloudFullApiAgentUIGeneratedFunctionNames,
  type GenesysCloudFullApiAgentUIGeneratedClient,
  type GenesysCloudFullApiAgentUIOperationPathParamMap,
  type GenesysCloudFullApiAgentUIOperationRequestMap,
} from "./full-api.generated/client/agent-ui-chunk.generated.js";
import {
  createGenesysCloudFullApiAIStudioGeneratedClient,
  GenesysCloudFullApiAIStudioGeneratedFunctionNames,
  type GenesysCloudFullApiAIStudioGeneratedClient,
  type GenesysCloudFullApiAIStudioOperationPathParamMap,
  type GenesysCloudFullApiAIStudioOperationRequestMap,
} from "./full-api.generated/client/ai-studio-chunk.generated.js";
import {
  createGenesysCloudFullApiAlertingGeneratedClient,
  GenesysCloudFullApiAlertingGeneratedFunctionNames,
  type GenesysCloudFullApiAlertingGeneratedClient,
  type GenesysCloudFullApiAlertingOperationPathParamMap,
  type GenesysCloudFullApiAlertingOperationRequestMap,
} from "./full-api.generated/client/alerting-chunk.generated.js";
import {
  createGenesysCloudFullApiAnalytics01GeneratedClient,
  GenesysCloudFullApiAnalytics01GeneratedFunctionNames,
  type GenesysCloudFullApiAnalytics01GeneratedClient,
  type GenesysCloudFullApiAnalytics01OperationPathParamMap,
  type GenesysCloudFullApiAnalytics01OperationRequestMap,
} from "./full-api.generated/client/analytics-01-chunk.generated.js";
import {
  createGenesysCloudFullApiAnalytics02GeneratedClient,
  GenesysCloudFullApiAnalytics02GeneratedFunctionNames,
  type GenesysCloudFullApiAnalytics02GeneratedClient,
  type GenesysCloudFullApiAnalytics02OperationPathParamMap,
  type GenesysCloudFullApiAnalytics02OperationRequestMap,
} from "./full-api.generated/client/analytics-02-chunk.generated.js";
import {
  createGenesysCloudFullApiArchitect01GeneratedClient,
  GenesysCloudFullApiArchitect01GeneratedFunctionNames,
  type GenesysCloudFullApiArchitect01GeneratedClient,
  type GenesysCloudFullApiArchitect01OperationPathParamMap,
  type GenesysCloudFullApiArchitect01OperationRequestMap,
} from "./full-api.generated/client/architect-01-chunk.generated.js";
import {
  createGenesysCloudFullApiArchitect02GeneratedClient,
  GenesysCloudFullApiArchitect02GeneratedFunctionNames,
  type GenesysCloudFullApiArchitect02GeneratedClient,
  type GenesysCloudFullApiArchitect02OperationPathParamMap,
  type GenesysCloudFullApiArchitect02OperationRequestMap,
} from "./full-api.generated/client/architect-02-chunk.generated.js";
import {
  createGenesysCloudFullApiAssistantCopilotVariationsGeneratedClient,
  GenesysCloudFullApiAssistantCopilotVariationsGeneratedFunctionNames,
  type GenesysCloudFullApiAssistantCopilotVariationsGeneratedClient,
  type GenesysCloudFullApiAssistantCopilotVariationsOperationPathParamMap,
  type GenesysCloudFullApiAssistantCopilotVariationsOperationRequestMap,
} from "./full-api.generated/client/assistant-copilot-variations-chunk.generated.js";
import {
  createGenesysCloudFullApiAuditGeneratedClient,
  GenesysCloudFullApiAuditGeneratedFunctionNames,
  type GenesysCloudFullApiAuditGeneratedClient,
  type GenesysCloudFullApiAuditOperationPathParamMap,
  type GenesysCloudFullApiAuditOperationRequestMap,
} from "./full-api.generated/client/audit-chunk.generated.js";
import {
  createGenesysCloudFullApiAuthorizationGeneratedClient,
  GenesysCloudFullApiAuthorizationGeneratedFunctionNames,
  type GenesysCloudFullApiAuthorizationGeneratedClient,
  type GenesysCloudFullApiAuthorizationOperationPathParamMap,
  type GenesysCloudFullApiAuthorizationOperationRequestMap,
} from "./full-api.generated/client/authorization-chunk.generated.js";
import {
  createGenesysCloudFullApiBackgroundAssistantGeneratedClient,
  GenesysCloudFullApiBackgroundAssistantGeneratedFunctionNames,
  type GenesysCloudFullApiBackgroundAssistantGeneratedClient,
  type GenesysCloudFullApiBackgroundAssistantOperationPathParamMap,
  type GenesysCloudFullApiBackgroundAssistantOperationRequestMap,
} from "./full-api.generated/client/background-assistant-chunk.generated.js";
import {
  createGenesysCloudFullApiBillingGeneratedClient,
  GenesysCloudFullApiBillingGeneratedFunctionNames,
  type GenesysCloudFullApiBillingGeneratedClient,
  type GenesysCloudFullApiBillingOperationPathParamMap,
  type GenesysCloudFullApiBillingOperationRequestMap,
} from "./full-api.generated/client/billing-chunk.generated.js";
import {
  createGenesysCloudFullApiBusinessRulesGeneratedClient,
  GenesysCloudFullApiBusinessRulesGeneratedFunctionNames,
  type GenesysCloudFullApiBusinessRulesGeneratedClient,
  type GenesysCloudFullApiBusinessRulesOperationPathParamMap,
  type GenesysCloudFullApiBusinessRulesOperationRequestMap,
} from "./full-api.generated/client/business-rules-chunk.generated.js";
import {
  createGenesysCloudFullApiCarrierServicesGeneratedClient,
  GenesysCloudFullApiCarrierServicesGeneratedFunctionNames,
  type GenesysCloudFullApiCarrierServicesGeneratedClient,
  type GenesysCloudFullApiCarrierServicesOperationPathParamMap,
  type GenesysCloudFullApiCarrierServicesOperationRequestMap,
} from "./full-api.generated/client/carrier-services-chunk.generated.js";
import {
  createGenesysCloudFullApiCaseManagementGeneratedClient,
  GenesysCloudFullApiCaseManagementGeneratedFunctionNames,
  type GenesysCloudFullApiCaseManagementGeneratedClient,
  type GenesysCloudFullApiCaseManagementOperationPathParamMap,
  type GenesysCloudFullApiCaseManagementOperationRequestMap,
} from "./full-api.generated/client/case-management-chunk.generated.js";
import {
  createGenesysCloudFullApiChatGeneratedClient,
  GenesysCloudFullApiChatGeneratedFunctionNames,
  type GenesysCloudFullApiChatGeneratedClient,
  type GenesysCloudFullApiChatOperationPathParamMap,
  type GenesysCloudFullApiChatOperationRequestMap,
} from "./full-api.generated/client/chat-chunk.generated.js";
import {
  createGenesysCloudFullApiCoachingGeneratedClient,
  GenesysCloudFullApiCoachingGeneratedFunctionNames,
  type GenesysCloudFullApiCoachingGeneratedClient,
  type GenesysCloudFullApiCoachingOperationPathParamMap,
  type GenesysCloudFullApiCoachingOperationRequestMap,
} from "./full-api.generated/client/coaching-chunk.generated.js";
import {
  createGenesysCloudFullApiContentManagementGeneratedClient,
  GenesysCloudFullApiContentManagementGeneratedFunctionNames,
  type GenesysCloudFullApiContentManagementGeneratedClient,
  type GenesysCloudFullApiContentManagementOperationPathParamMap,
  type GenesysCloudFullApiContentManagementOperationRequestMap,
} from "./full-api.generated/client/content-management-chunk.generated.js";
import {
  createGenesysCloudFullApiConversations01GeneratedClient,
  GenesysCloudFullApiConversations01GeneratedFunctionNames,
  type GenesysCloudFullApiConversations01GeneratedClient,
  type GenesysCloudFullApiConversations01OperationPathParamMap,
  type GenesysCloudFullApiConversations01OperationRequestMap,
} from "./full-api.generated/client/conversations-01-chunk.generated.js";
import {
  createGenesysCloudFullApiConversations02GeneratedClient,
  GenesysCloudFullApiConversations02GeneratedFunctionNames,
  type GenesysCloudFullApiConversations02GeneratedClient,
  type GenesysCloudFullApiConversations02OperationPathParamMap,
  type GenesysCloudFullApiConversations02OperationRequestMap,
} from "./full-api.generated/client/conversations-02-chunk.generated.js";
import {
  createGenesysCloudFullApiConversations03GeneratedClient,
  GenesysCloudFullApiConversations03GeneratedFunctionNames,
  type GenesysCloudFullApiConversations03GeneratedClient,
  type GenesysCloudFullApiConversations03OperationPathParamMap,
  type GenesysCloudFullApiConversations03OperationRequestMap,
} from "./full-api.generated/client/conversations-03-chunk.generated.js";
import {
  createGenesysCloudFullApiConversations04GeneratedClient,
  GenesysCloudFullApiConversations04GeneratedFunctionNames,
  type GenesysCloudFullApiConversations04GeneratedClient,
  type GenesysCloudFullApiConversations04OperationPathParamMap,
  type GenesysCloudFullApiConversations04OperationRequestMap,
} from "./full-api.generated/client/conversations-04-chunk.generated.js";
import {
  createGenesysCloudFullApiDataExtensionsGeneratedClient,
  GenesysCloudFullApiDataExtensionsGeneratedFunctionNames,
  type GenesysCloudFullApiDataExtensionsGeneratedClient,
  type GenesysCloudFullApiDataExtensionsOperationPathParamMap,
  type GenesysCloudFullApiDataExtensionsOperationRequestMap,
} from "./full-api.generated/client/data-extensions-chunk.generated.js";
import {
  createGenesysCloudFullApiDataPrivacyGeneratedClient,
  GenesysCloudFullApiDataPrivacyGeneratedFunctionNames,
  type GenesysCloudFullApiDataPrivacyGeneratedClient,
  type GenesysCloudFullApiDataPrivacyOperationPathParamMap,
  type GenesysCloudFullApiDataPrivacyOperationRequestMap,
} from "./full-api.generated/client/data-privacy-chunk.generated.js";
import {
  createGenesysCloudFullApiDownloadsGeneratedClient,
  GenesysCloudFullApiDownloadsGeneratedFunctionNames,
  type GenesysCloudFullApiDownloadsGeneratedClient,
  type GenesysCloudFullApiDownloadsOperationPathParamMap,
  type GenesysCloudFullApiDownloadsOperationRequestMap,
} from "./full-api.generated/client/downloads-chunk.generated.js";
import {
  createGenesysCloudFullApiEmailsGeneratedClient,
  GenesysCloudFullApiEmailsGeneratedFunctionNames,
  type GenesysCloudFullApiEmailsGeneratedClient,
  type GenesysCloudFullApiEmailsOperationPathParamMap,
  type GenesysCloudFullApiEmailsOperationRequestMap,
} from "./full-api.generated/client/emails-chunk.generated.js";
import {
  createGenesysCloudFullApiEmployeeEngagementGeneratedClient,
  GenesysCloudFullApiEmployeeEngagementGeneratedFunctionNames,
  type GenesysCloudFullApiEmployeeEngagementGeneratedClient,
  type GenesysCloudFullApiEmployeeEngagementOperationPathParamMap,
  type GenesysCloudFullApiEmployeeEngagementOperationRequestMap,
} from "./full-api.generated/client/employee-engagement-chunk.generated.js";
import {
  createGenesysCloudFullApiEventsGeneratedClient,
  GenesysCloudFullApiEventsGeneratedFunctionNames,
  type GenesysCloudFullApiEventsGeneratedClient,
  type GenesysCloudFullApiEventsOperationPathParamMap,
  type GenesysCloudFullApiEventsOperationRequestMap,
} from "./full-api.generated/client/events-chunk.generated.js";
import {
  createGenesysCloudFullApiExternalContacts01GeneratedClient,
  GenesysCloudFullApiExternalContacts01GeneratedFunctionNames,
  type GenesysCloudFullApiExternalContacts01GeneratedClient,
  type GenesysCloudFullApiExternalContacts01OperationPathParamMap,
  type GenesysCloudFullApiExternalContacts01OperationRequestMap,
} from "./full-api.generated/client/external-contacts-01-chunk.generated.js";
import {
  createGenesysCloudFullApiExternalContacts02GeneratedClient,
  GenesysCloudFullApiExternalContacts02GeneratedFunctionNames,
  type GenesysCloudFullApiExternalContacts02GeneratedClient,
  type GenesysCloudFullApiExternalContacts02OperationPathParamMap,
  type GenesysCloudFullApiExternalContacts02OperationRequestMap,
} from "./full-api.generated/client/external-contacts-02-chunk.generated.js";
import {
  createGenesysCloudFullApiFaxGeneratedClient,
  GenesysCloudFullApiFaxGeneratedFunctionNames,
  type GenesysCloudFullApiFaxGeneratedClient,
  type GenesysCloudFullApiFaxOperationPathParamMap,
  type GenesysCloudFullApiFaxOperationRequestMap,
} from "./full-api.generated/client/fax-chunk.generated.js";
import {
  createGenesysCloudFullApiGamificationGeneratedClient,
  GenesysCloudFullApiGamificationGeneratedFunctionNames,
  type GenesysCloudFullApiGamificationGeneratedClient,
  type GenesysCloudFullApiGamificationOperationPathParamMap,
  type GenesysCloudFullApiGamificationOperationRequestMap,
} from "./full-api.generated/client/gamification-chunk.generated.js";
import {
  createGenesysCloudFullApiGeneralDataProtectionRegulationGeneratedClient,
  GenesysCloudFullApiGeneralDataProtectionRegulationGeneratedFunctionNames,
  type GenesysCloudFullApiGeneralDataProtectionRegulationGeneratedClient,
  type GenesysCloudFullApiGeneralDataProtectionRegulationOperationPathParamMap,
  type GenesysCloudFullApiGeneralDataProtectionRegulationOperationRequestMap,
} from "./full-api.generated/client/general-data-protection-regulation-chunk.generated.js";
import {
  createGenesysCloudFullApiGeolocationGeneratedClient,
  GenesysCloudFullApiGeolocationGeneratedFunctionNames,
  type GenesysCloudFullApiGeolocationGeneratedClient,
  type GenesysCloudFullApiGeolocationOperationPathParamMap,
  type GenesysCloudFullApiGeolocationOperationRequestMap,
} from "./full-api.generated/client/geolocation-chunk.generated.js";
import {
  createGenesysCloudFullApiGreetingsGeneratedClient,
  GenesysCloudFullApiGreetingsGeneratedFunctionNames,
  type GenesysCloudFullApiGreetingsGeneratedClient,
  type GenesysCloudFullApiGreetingsOperationPathParamMap,
  type GenesysCloudFullApiGreetingsOperationRequestMap,
} from "./full-api.generated/client/greetings-chunk.generated.js";
import {
  createGenesysCloudFullApiGroupsGeneratedClient,
  GenesysCloudFullApiGroupsGeneratedFunctionNames,
  type GenesysCloudFullApiGroupsGeneratedClient,
  type GenesysCloudFullApiGroupsOperationPathParamMap,
  type GenesysCloudFullApiGroupsOperationRequestMap,
} from "./full-api.generated/client/groups-chunk.generated.js";
import {
  createGenesysCloudFullApiIdentityProviderGeneratedClient,
  GenesysCloudFullApiIdentityProviderGeneratedFunctionNames,
  type GenesysCloudFullApiIdentityProviderGeneratedClient,
  type GenesysCloudFullApiIdentityProviderOperationPathParamMap,
  type GenesysCloudFullApiIdentityProviderOperationRequestMap,
} from "./full-api.generated/client/identity-provider-chunk.generated.js";
import {
  createGenesysCloudFullApiInfrastructureAsCodeGeneratedClient,
  GenesysCloudFullApiInfrastructureAsCodeGeneratedFunctionNames,
  type GenesysCloudFullApiInfrastructureAsCodeGeneratedClient,
  type GenesysCloudFullApiInfrastructureAsCodeOperationPathParamMap,
  type GenesysCloudFullApiInfrastructureAsCodeOperationRequestMap,
} from "./full-api.generated/client/infrastructure-as-code-chunk.generated.js";
import {
  createGenesysCloudFullApiIntegrations01GeneratedClient,
  GenesysCloudFullApiIntegrations01GeneratedFunctionNames,
  type GenesysCloudFullApiIntegrations01GeneratedClient,
  type GenesysCloudFullApiIntegrations01OperationPathParamMap,
  type GenesysCloudFullApiIntegrations01OperationRequestMap,
} from "./full-api.generated/client/integrations-01-chunk.generated.js";
import {
  createGenesysCloudFullApiIntegrations02GeneratedClient,
  GenesysCloudFullApiIntegrations02GeneratedFunctionNames,
  type GenesysCloudFullApiIntegrations02GeneratedClient,
  type GenesysCloudFullApiIntegrations02OperationPathParamMap,
  type GenesysCloudFullApiIntegrations02OperationRequestMap,
} from "./full-api.generated/client/integrations-02-chunk.generated.js";
import {
  createGenesysCloudFullApiIntentsGeneratedClient,
  GenesysCloudFullApiIntentsGeneratedFunctionNames,
  type GenesysCloudFullApiIntentsGeneratedClient,
  type GenesysCloudFullApiIntentsOperationPathParamMap,
  type GenesysCloudFullApiIntentsOperationRequestMap,
} from "./full-api.generated/client/intents-chunk.generated.js";
import {
  createGenesysCloudFullApiJourney01GeneratedClient,
  GenesysCloudFullApiJourney01GeneratedFunctionNames,
  type GenesysCloudFullApiJourney01GeneratedClient,
  type GenesysCloudFullApiJourney01OperationPathParamMap,
  type GenesysCloudFullApiJourney01OperationRequestMap,
} from "./full-api.generated/client/journey-01-chunk.generated.js";
import {
  createGenesysCloudFullApiJourney02GeneratedClient,
  GenesysCloudFullApiJourney02GeneratedFunctionNames,
  type GenesysCloudFullApiJourney02GeneratedClient,
  type GenesysCloudFullApiJourney02OperationPathParamMap,
  type GenesysCloudFullApiJourney02OperationRequestMap,
} from "./full-api.generated/client/journey-02-chunk.generated.js";
import {
  createGenesysCloudFullApiKnowledge01GeneratedClient,
  GenesysCloudFullApiKnowledge01GeneratedFunctionNames,
  type GenesysCloudFullApiKnowledge01GeneratedClient,
  type GenesysCloudFullApiKnowledge01OperationPathParamMap,
  type GenesysCloudFullApiKnowledge01OperationRequestMap,
} from "./full-api.generated/client/knowledge-01-chunk.generated.js";
import {
  createGenesysCloudFullApiKnowledge02GeneratedClient,
  GenesysCloudFullApiKnowledge02GeneratedFunctionNames,
  type GenesysCloudFullApiKnowledge02GeneratedClient,
  type GenesysCloudFullApiKnowledge02OperationPathParamMap,
  type GenesysCloudFullApiKnowledge02OperationRequestMap,
} from "./full-api.generated/client/knowledge-02-chunk.generated.js";
import {
  createGenesysCloudFullApiLanguageUnderstandingGeneratedClient,
  GenesysCloudFullApiLanguageUnderstandingGeneratedFunctionNames,
  type GenesysCloudFullApiLanguageUnderstandingGeneratedClient,
  type GenesysCloudFullApiLanguageUnderstandingOperationPathParamMap,
  type GenesysCloudFullApiLanguageUnderstandingOperationRequestMap,
} from "./full-api.generated/client/language-understanding-chunk.generated.js";
import {
  createGenesysCloudFullApiLanguagesGeneratedClient,
  GenesysCloudFullApiLanguagesGeneratedFunctionNames,
  type GenesysCloudFullApiLanguagesGeneratedClient,
  type GenesysCloudFullApiLanguagesOperationPathParamMap,
  type GenesysCloudFullApiLanguagesOperationRequestMap,
} from "./full-api.generated/client/languages-chunk.generated.js";
import {
  createGenesysCloudFullApiLearningGeneratedClient,
  GenesysCloudFullApiLearningGeneratedFunctionNames,
  type GenesysCloudFullApiLearningGeneratedClient,
  type GenesysCloudFullApiLearningOperationPathParamMap,
  type GenesysCloudFullApiLearningOperationRequestMap,
} from "./full-api.generated/client/learning-chunk.generated.js";
import {
  createGenesysCloudFullApiLicenseGeneratedClient,
  GenesysCloudFullApiLicenseGeneratedFunctionNames,
  type GenesysCloudFullApiLicenseGeneratedClient,
  type GenesysCloudFullApiLicenseOperationPathParamMap,
  type GenesysCloudFullApiLicenseOperationRequestMap,
} from "./full-api.generated/client/license-chunk.generated.js";
import {
  createGenesysCloudFullApiLocationsGeneratedClient,
  GenesysCloudFullApiLocationsGeneratedFunctionNames,
  type GenesysCloudFullApiLocationsGeneratedClient,
  type GenesysCloudFullApiLocationsOperationPathParamMap,
  type GenesysCloudFullApiLocationsOperationRequestMap,
} from "./full-api.generated/client/locations-chunk.generated.js";
import {
  createGenesysCloudFullApiLogCaptureGeneratedClient,
  GenesysCloudFullApiLogCaptureGeneratedFunctionNames,
  type GenesysCloudFullApiLogCaptureGeneratedClient,
  type GenesysCloudFullApiLogCaptureOperationPathParamMap,
  type GenesysCloudFullApiLogCaptureOperationRequestMap,
} from "./full-api.generated/client/log-capture-chunk.generated.js";
import {
  createGenesysCloudFullApiMessagingGeneratedClient,
  GenesysCloudFullApiMessagingGeneratedFunctionNames,
  type GenesysCloudFullApiMessagingGeneratedClient,
  type GenesysCloudFullApiMessagingOperationPathParamMap,
  type GenesysCloudFullApiMessagingOperationRequestMap,
} from "./full-api.generated/client/messaging-chunk.generated.js";
import {
  createGenesysCloudFullApiMobileDevicesGeneratedClient,
  GenesysCloudFullApiMobileDevicesGeneratedFunctionNames,
  type GenesysCloudFullApiMobileDevicesGeneratedClient,
  type GenesysCloudFullApiMobileDevicesOperationPathParamMap,
  type GenesysCloudFullApiMobileDevicesOperationRequestMap,
} from "./full-api.generated/client/mobile-devices-chunk.generated.js";
import {
  createGenesysCloudFullApiNotificationsGeneratedClient,
  GenesysCloudFullApiNotificationsGeneratedFunctionNames,
  type GenesysCloudFullApiNotificationsGeneratedClient,
  type GenesysCloudFullApiNotificationsOperationPathParamMap,
  type GenesysCloudFullApiNotificationsOperationRequestMap,
} from "./full-api.generated/client/notifications-chunk.generated.js";
import {
  createGenesysCloudFullApiOAuthGeneratedClient,
  GenesysCloudFullApiOAuthGeneratedFunctionNames,
  type GenesysCloudFullApiOAuthGeneratedClient,
  type GenesysCloudFullApiOAuthOperationPathParamMap,
  type GenesysCloudFullApiOAuthOperationRequestMap,
} from "./full-api.generated/client/oauth-chunk.generated.js";
import {
  createGenesysCloudFullApiOperationalEventsGeneratedClient,
  GenesysCloudFullApiOperationalEventsGeneratedFunctionNames,
  type GenesysCloudFullApiOperationalEventsGeneratedClient,
  type GenesysCloudFullApiOperationalEventsOperationPathParamMap,
  type GenesysCloudFullApiOperationalEventsOperationRequestMap,
} from "./full-api.generated/client/operational-events-chunk.generated.js";
import {
  createGenesysCloudFullApiOrganizationGeneratedClient,
  GenesysCloudFullApiOrganizationGeneratedFunctionNames,
  type GenesysCloudFullApiOrganizationGeneratedClient,
  type GenesysCloudFullApiOrganizationOperationPathParamMap,
  type GenesysCloudFullApiOrganizationOperationRequestMap,
} from "./full-api.generated/client/organization-chunk.generated.js";
import {
  createGenesysCloudFullApiOrganizationAuthorizationGeneratedClient,
  GenesysCloudFullApiOrganizationAuthorizationGeneratedFunctionNames,
  type GenesysCloudFullApiOrganizationAuthorizationGeneratedClient,
  type GenesysCloudFullApiOrganizationAuthorizationOperationPathParamMap,
  type GenesysCloudFullApiOrganizationAuthorizationOperationRequestMap,
} from "./full-api.generated/client/organization-authorization-chunk.generated.js";
import {
  createGenesysCloudFullApiOutbound01GeneratedClient,
  GenesysCloudFullApiOutbound01GeneratedFunctionNames,
  type GenesysCloudFullApiOutbound01GeneratedClient,
  type GenesysCloudFullApiOutbound01OperationPathParamMap,
  type GenesysCloudFullApiOutbound01OperationRequestMap,
} from "./full-api.generated/client/outbound-01-chunk.generated.js";
import {
  createGenesysCloudFullApiOutbound02GeneratedClient,
  GenesysCloudFullApiOutbound02GeneratedFunctionNames,
  type GenesysCloudFullApiOutbound02GeneratedClient,
  type GenesysCloudFullApiOutbound02OperationPathParamMap,
  type GenesysCloudFullApiOutbound02OperationRequestMap,
} from "./full-api.generated/client/outbound-02-chunk.generated.js";
import {
  createGenesysCloudFullApiOutbound03GeneratedClient,
  GenesysCloudFullApiOutbound03GeneratedFunctionNames,
  type GenesysCloudFullApiOutbound03GeneratedClient,
  type GenesysCloudFullApiOutbound03OperationPathParamMap,
  type GenesysCloudFullApiOutbound03OperationRequestMap,
} from "./full-api.generated/client/outbound-03-chunk.generated.js";
import {
  createGenesysCloudFullApiPresenceGeneratedClient,
  GenesysCloudFullApiPresenceGeneratedFunctionNames,
  type GenesysCloudFullApiPresenceGeneratedClient,
  type GenesysCloudFullApiPresenceOperationPathParamMap,
  type GenesysCloudFullApiPresenceOperationRequestMap,
} from "./full-api.generated/client/presence-chunk.generated.js";
import {
  createGenesysCloudFullApiProcessAutomationGeneratedClient,
  GenesysCloudFullApiProcessAutomationGeneratedFunctionNames,
  type GenesysCloudFullApiProcessAutomationGeneratedClient,
  type GenesysCloudFullApiProcessAutomationOperationPathParamMap,
  type GenesysCloudFullApiProcessAutomationOperationRequestMap,
} from "./full-api.generated/client/process-automation-chunk.generated.js";
import {
  createGenesysCloudFullApiQualityGeneratedClient,
  GenesysCloudFullApiQualityGeneratedFunctionNames,
  type GenesysCloudFullApiQualityGeneratedClient,
  type GenesysCloudFullApiQualityOperationPathParamMap,
  type GenesysCloudFullApiQualityOperationRequestMap,
} from "./full-api.generated/client/quality-chunk.generated.js";
import {
  createGenesysCloudFullApiRecordingGeneratedClient,
  GenesysCloudFullApiRecordingGeneratedFunctionNames,
  type GenesysCloudFullApiRecordingGeneratedClient,
  type GenesysCloudFullApiRecordingOperationPathParamMap,
  type GenesysCloudFullApiRecordingOperationRequestMap,
} from "./full-api.generated/client/recording-chunk.generated.js";
import {
  createGenesysCloudFullApiResponseManagementGeneratedClient,
  GenesysCloudFullApiResponseManagementGeneratedFunctionNames,
  type GenesysCloudFullApiResponseManagementGeneratedClient,
  type GenesysCloudFullApiResponseManagementOperationPathParamMap,
  type GenesysCloudFullApiResponseManagementOperationRequestMap,
} from "./full-api.generated/client/response-management-chunk.generated.js";
import {
  createGenesysCloudFullApiRouting01GeneratedClient,
  GenesysCloudFullApiRouting01GeneratedFunctionNames,
  type GenesysCloudFullApiRouting01GeneratedClient,
  type GenesysCloudFullApiRouting01OperationPathParamMap,
  type GenesysCloudFullApiRouting01OperationRequestMap,
} from "./full-api.generated/client/routing-01-chunk.generated.js";
import {
  createGenesysCloudFullApiRouting02GeneratedClient,
  GenesysCloudFullApiRouting02GeneratedFunctionNames,
  type GenesysCloudFullApiRouting02GeneratedClient,
  type GenesysCloudFullApiRouting02OperationPathParamMap,
  type GenesysCloudFullApiRouting02OperationRequestMap,
} from "./full-api.generated/client/routing-02-chunk.generated.js";
import {
  createGenesysCloudFullApiSCIMGeneratedClient,
  GenesysCloudFullApiSCIMGeneratedFunctionNames,
  type GenesysCloudFullApiSCIMGeneratedClient,
  type GenesysCloudFullApiSCIMOperationPathParamMap,
  type GenesysCloudFullApiSCIMOperationRequestMap,
} from "./full-api.generated/client/scim-chunk.generated.js";
import {
  createGenesysCloudFullApiScriptsGeneratedClient,
  GenesysCloudFullApiScriptsGeneratedFunctionNames,
  type GenesysCloudFullApiScriptsGeneratedClient,
  type GenesysCloudFullApiScriptsOperationPathParamMap,
  type GenesysCloudFullApiScriptsOperationRequestMap,
} from "./full-api.generated/client/scripts-chunk.generated.js";
import {
  createGenesysCloudFullApiSearchGeneratedClient,
  GenesysCloudFullApiSearchGeneratedFunctionNames,
  type GenesysCloudFullApiSearchGeneratedClient,
  type GenesysCloudFullApiSearchOperationPathParamMap,
  type GenesysCloudFullApiSearchOperationRequestMap,
} from "./full-api.generated/client/search-chunk.generated.js";
import {
  createGenesysCloudFullApiSettingsGeneratedClient,
  GenesysCloudFullApiSettingsGeneratedFunctionNames,
  type GenesysCloudFullApiSettingsGeneratedClient,
  type GenesysCloudFullApiSettingsOperationPathParamMap,
  type GenesysCloudFullApiSettingsOperationRequestMap,
} from "./full-api.generated/client/settings-chunk.generated.js";
import {
  createGenesysCloudFullApiSocialMediaGeneratedClient,
  GenesysCloudFullApiSocialMediaGeneratedFunctionNames,
  type GenesysCloudFullApiSocialMediaGeneratedClient,
  type GenesysCloudFullApiSocialMediaOperationPathParamMap,
  type GenesysCloudFullApiSocialMediaOperationRequestMap,
} from "./full-api.generated/client/social-media-chunk.generated.js";
import {
  createGenesysCloudFullApiSpeechTextAnalyticsGeneratedClient,
  GenesysCloudFullApiSpeechTextAnalyticsGeneratedFunctionNames,
  type GenesysCloudFullApiSpeechTextAnalyticsGeneratedClient,
  type GenesysCloudFullApiSpeechTextAnalyticsOperationPathParamMap,
  type GenesysCloudFullApiSpeechTextAnalyticsOperationRequestMap,
} from "./full-api.generated/client/speech-text-analytics-chunk.generated.js";
import {
  createGenesysCloudFullApiStationsGeneratedClient,
  GenesysCloudFullApiStationsGeneratedFunctionNames,
  type GenesysCloudFullApiStationsGeneratedClient,
  type GenesysCloudFullApiStationsOperationPathParamMap,
  type GenesysCloudFullApiStationsOperationRequestMap,
} from "./full-api.generated/client/stations-chunk.generated.js";
import {
  createGenesysCloudFullApiTaskManagementGeneratedClient,
  GenesysCloudFullApiTaskManagementGeneratedFunctionNames,
  type GenesysCloudFullApiTaskManagementGeneratedClient,
  type GenesysCloudFullApiTaskManagementOperationPathParamMap,
  type GenesysCloudFullApiTaskManagementOperationRequestMap,
} from "./full-api.generated/client/task-management-chunk.generated.js";
import {
  createGenesysCloudFullApiTeamsGeneratedClient,
  GenesysCloudFullApiTeamsGeneratedFunctionNames,
  type GenesysCloudFullApiTeamsGeneratedClient,
  type GenesysCloudFullApiTeamsOperationPathParamMap,
  type GenesysCloudFullApiTeamsOperationRequestMap,
} from "./full-api.generated/client/teams-chunk.generated.js";
import {
  createGenesysCloudFullApiTelephonyGeneratedClient,
  GenesysCloudFullApiTelephonyGeneratedFunctionNames,
  type GenesysCloudFullApiTelephonyGeneratedClient,
  type GenesysCloudFullApiTelephonyOperationPathParamMap,
  type GenesysCloudFullApiTelephonyOperationRequestMap,
} from "./full-api.generated/client/telephony-chunk.generated.js";
import {
  createGenesysCloudFullApiTelephonyProvidersEdge01GeneratedClient,
  GenesysCloudFullApiTelephonyProvidersEdge01GeneratedFunctionNames,
  type GenesysCloudFullApiTelephonyProvidersEdge01GeneratedClient,
  type GenesysCloudFullApiTelephonyProvidersEdge01OperationPathParamMap,
  type GenesysCloudFullApiTelephonyProvidersEdge01OperationRequestMap,
} from "./full-api.generated/client/telephony-providers-edge-01-chunk.generated.js";
import {
  createGenesysCloudFullApiTelephonyProvidersEdge02GeneratedClient,
  GenesysCloudFullApiTelephonyProvidersEdge02GeneratedFunctionNames,
  type GenesysCloudFullApiTelephonyProvidersEdge02GeneratedClient,
  type GenesysCloudFullApiTelephonyProvidersEdge02OperationPathParamMap,
  type GenesysCloudFullApiTelephonyProvidersEdge02OperationRequestMap,
} from "./full-api.generated/client/telephony-providers-edge-02-chunk.generated.js";
import {
  createGenesysCloudFullApiTextbotsGeneratedClient,
  GenesysCloudFullApiTextbotsGeneratedFunctionNames,
  type GenesysCloudFullApiTextbotsGeneratedClient,
  type GenesysCloudFullApiTextbotsOperationPathParamMap,
  type GenesysCloudFullApiTextbotsOperationRequestMap,
} from "./full-api.generated/client/textbots-chunk.generated.js";
import {
  createGenesysCloudFullApiTokensGeneratedClient,
  GenesysCloudFullApiTokensGeneratedFunctionNames,
  type GenesysCloudFullApiTokensGeneratedClient,
  type GenesysCloudFullApiTokensOperationPathParamMap,
  type GenesysCloudFullApiTokensOperationRequestMap,
} from "./full-api.generated/client/tokens-chunk.generated.js";
import {
  createGenesysCloudFullApiUploadsGeneratedClient,
  GenesysCloudFullApiUploadsGeneratedFunctionNames,
  type GenesysCloudFullApiUploadsGeneratedClient,
  type GenesysCloudFullApiUploadsOperationPathParamMap,
  type GenesysCloudFullApiUploadsOperationRequestMap,
} from "./full-api.generated/client/uploads-chunk.generated.js";
import {
  createGenesysCloudFullApiUsageGeneratedClient,
  GenesysCloudFullApiUsageGeneratedFunctionNames,
  type GenesysCloudFullApiUsageGeneratedClient,
  type GenesysCloudFullApiUsageOperationPathParamMap,
  type GenesysCloudFullApiUsageOperationRequestMap,
} from "./full-api.generated/client/usage-chunk.generated.js";
import {
  createGenesysCloudFullApiUserRecordingsGeneratedClient,
  GenesysCloudFullApiUserRecordingsGeneratedFunctionNames,
  type GenesysCloudFullApiUserRecordingsGeneratedClient,
  type GenesysCloudFullApiUserRecordingsOperationPathParamMap,
  type GenesysCloudFullApiUserRecordingsOperationRequestMap,
} from "./full-api.generated/client/user-recordings-chunk.generated.js";
import {
  createGenesysCloudFullApiUsers01GeneratedClient,
  GenesysCloudFullApiUsers01GeneratedFunctionNames,
  type GenesysCloudFullApiUsers01GeneratedClient,
  type GenesysCloudFullApiUsers01OperationPathParamMap,
  type GenesysCloudFullApiUsers01OperationRequestMap,
} from "./full-api.generated/client/users-01-chunk.generated.js";
import {
  createGenesysCloudFullApiUsers02GeneratedClient,
  GenesysCloudFullApiUsers02GeneratedFunctionNames,
  type GenesysCloudFullApiUsers02GeneratedClient,
  type GenesysCloudFullApiUsers02OperationPathParamMap,
  type GenesysCloudFullApiUsers02OperationRequestMap,
} from "./full-api.generated/client/users-02-chunk.generated.js";
import {
  createGenesysCloudFullApiUsersRulesGeneratedClient,
  GenesysCloudFullApiUsersRulesGeneratedFunctionNames,
  type GenesysCloudFullApiUsersRulesGeneratedClient,
  type GenesysCloudFullApiUsersRulesOperationPathParamMap,
  type GenesysCloudFullApiUsersRulesOperationRequestMap,
} from "./full-api.generated/client/users-rules-chunk.generated.js";
import {
  createGenesysCloudFullApiUtilitiesGeneratedClient,
  GenesysCloudFullApiUtilitiesGeneratedFunctionNames,
  type GenesysCloudFullApiUtilitiesGeneratedClient,
  type GenesysCloudFullApiUtilitiesOperationPathParamMap,
  type GenesysCloudFullApiUtilitiesOperationRequestMap,
} from "./full-api.generated/client/utilities-chunk.generated.js";
import {
  createGenesysCloudFullApiVoicemailGeneratedClient,
  GenesysCloudFullApiVoicemailGeneratedFunctionNames,
  type GenesysCloudFullApiVoicemailGeneratedClient,
  type GenesysCloudFullApiVoicemailOperationPathParamMap,
  type GenesysCloudFullApiVoicemailOperationRequestMap,
} from "./full-api.generated/client/voicemail-chunk.generated.js";
import {
  createGenesysCloudFullApiWebDeploymentsGeneratedClient,
  GenesysCloudFullApiWebDeploymentsGeneratedFunctionNames,
  type GenesysCloudFullApiWebDeploymentsGeneratedClient,
  type GenesysCloudFullApiWebDeploymentsOperationPathParamMap,
  type GenesysCloudFullApiWebDeploymentsOperationRequestMap,
} from "./full-api.generated/client/web-deployments-chunk.generated.js";
import {
  createGenesysCloudFullApiWebChatGeneratedClient,
  GenesysCloudFullApiWebChatGeneratedFunctionNames,
  type GenesysCloudFullApiWebChatGeneratedClient,
  type GenesysCloudFullApiWebChatOperationPathParamMap,
  type GenesysCloudFullApiWebChatOperationRequestMap,
} from "./full-api.generated/client/web-chat-chunk.generated.js";
import {
  createGenesysCloudFullApiWebMessagingGeneratedClient,
  GenesysCloudFullApiWebMessagingGeneratedFunctionNames,
  type GenesysCloudFullApiWebMessagingGeneratedClient,
  type GenesysCloudFullApiWebMessagingOperationPathParamMap,
  type GenesysCloudFullApiWebMessagingOperationRequestMap,
} from "./full-api.generated/client/web-messaging-chunk.generated.js";
import {
  createGenesysCloudFullApiWidgetsGeneratedClient,
  GenesysCloudFullApiWidgetsGeneratedFunctionNames,
  type GenesysCloudFullApiWidgetsGeneratedClient,
  type GenesysCloudFullApiWidgetsOperationPathParamMap,
  type GenesysCloudFullApiWidgetsOperationRequestMap,
} from "./full-api.generated/client/widgets-chunk.generated.js";
import {
  createGenesysCloudFullApiWorkforceManagement01GeneratedClient,
  GenesysCloudFullApiWorkforceManagement01GeneratedFunctionNames,
  type GenesysCloudFullApiWorkforceManagement01GeneratedClient,
  type GenesysCloudFullApiWorkforceManagement01OperationPathParamMap,
  type GenesysCloudFullApiWorkforceManagement01OperationRequestMap,
} from "./full-api.generated/client/workforce-management-01-chunk.generated.js";
import {
  createGenesysCloudFullApiWorkforceManagement02GeneratedClient,
  GenesysCloudFullApiWorkforceManagement02GeneratedFunctionNames,
  type GenesysCloudFullApiWorkforceManagement02GeneratedClient,
  type GenesysCloudFullApiWorkforceManagement02OperationPathParamMap,
  type GenesysCloudFullApiWorkforceManagement02OperationRequestMap,
} from "./full-api.generated/client/workforce-management-02-chunk.generated.js";
import {
  createGenesysCloudFullApiWorkforceManagement03GeneratedClient,
  GenesysCloudFullApiWorkforceManagement03GeneratedFunctionNames,
  type GenesysCloudFullApiWorkforceManagement03GeneratedClient,
  type GenesysCloudFullApiWorkforceManagement03OperationPathParamMap,
  type GenesysCloudFullApiWorkforceManagement03OperationRequestMap,
} from "./full-api.generated/client/workforce-management-03-chunk.generated.js";
import {
  createGenesysCloudFullApiWorkforceManagement04GeneratedClient,
  GenesysCloudFullApiWorkforceManagement04GeneratedFunctionNames,
  type GenesysCloudFullApiWorkforceManagement04GeneratedClient,
  type GenesysCloudFullApiWorkforceManagement04OperationPathParamMap,
  type GenesysCloudFullApiWorkforceManagement04OperationRequestMap,
} from "./full-api.generated/client/workforce-management-04-chunk.generated.js";
import {
  createGenesysCloudFullApiWorkforceManagement05GeneratedClient,
  GenesysCloudFullApiWorkforceManagement05GeneratedFunctionNames,
  type GenesysCloudFullApiWorkforceManagement05GeneratedClient,
  type GenesysCloudFullApiWorkforceManagement05OperationPathParamMap,
  type GenesysCloudFullApiWorkforceManagement05OperationRequestMap,
} from "./full-api.generated/client/workforce-management-05-chunk.generated.js";

export type GenesysCloudFullApiPathParamValue = string | number;
export interface GenesysCloudFullApiOperationPathParamMap extends GenesysCloudFullApiAgentAssistantsOperationPathParamMap, GenesysCloudFullApiAgentCopilotOperationPathParamMap, GenesysCloudFullApiAgentUIOperationPathParamMap, GenesysCloudFullApiAIStudioOperationPathParamMap, GenesysCloudFullApiAlertingOperationPathParamMap, GenesysCloudFullApiAnalytics01OperationPathParamMap, GenesysCloudFullApiAnalytics02OperationPathParamMap, GenesysCloudFullApiArchitect01OperationPathParamMap, GenesysCloudFullApiArchitect02OperationPathParamMap, GenesysCloudFullApiAssistantCopilotVariationsOperationPathParamMap, GenesysCloudFullApiAuditOperationPathParamMap, GenesysCloudFullApiAuthorizationOperationPathParamMap, GenesysCloudFullApiBackgroundAssistantOperationPathParamMap, GenesysCloudFullApiBillingOperationPathParamMap, GenesysCloudFullApiBusinessRulesOperationPathParamMap, GenesysCloudFullApiCarrierServicesOperationPathParamMap, GenesysCloudFullApiCaseManagementOperationPathParamMap, GenesysCloudFullApiChatOperationPathParamMap, GenesysCloudFullApiCoachingOperationPathParamMap, GenesysCloudFullApiContentManagementOperationPathParamMap, GenesysCloudFullApiConversations01OperationPathParamMap, GenesysCloudFullApiConversations02OperationPathParamMap, GenesysCloudFullApiConversations03OperationPathParamMap, GenesysCloudFullApiConversations04OperationPathParamMap, GenesysCloudFullApiDataExtensionsOperationPathParamMap, GenesysCloudFullApiDataPrivacyOperationPathParamMap, GenesysCloudFullApiDownloadsOperationPathParamMap, GenesysCloudFullApiEmailsOperationPathParamMap, GenesysCloudFullApiEmployeeEngagementOperationPathParamMap, GenesysCloudFullApiEventsOperationPathParamMap, GenesysCloudFullApiExternalContacts01OperationPathParamMap, GenesysCloudFullApiExternalContacts02OperationPathParamMap, GenesysCloudFullApiFaxOperationPathParamMap, GenesysCloudFullApiGamificationOperationPathParamMap, GenesysCloudFullApiGeneralDataProtectionRegulationOperationPathParamMap, GenesysCloudFullApiGeolocationOperationPathParamMap, GenesysCloudFullApiGreetingsOperationPathParamMap, GenesysCloudFullApiGroupsOperationPathParamMap, GenesysCloudFullApiIdentityProviderOperationPathParamMap, GenesysCloudFullApiInfrastructureAsCodeOperationPathParamMap, GenesysCloudFullApiIntegrations01OperationPathParamMap, GenesysCloudFullApiIntegrations02OperationPathParamMap, GenesysCloudFullApiIntentsOperationPathParamMap, GenesysCloudFullApiJourney01OperationPathParamMap, GenesysCloudFullApiJourney02OperationPathParamMap, GenesysCloudFullApiKnowledge01OperationPathParamMap, GenesysCloudFullApiKnowledge02OperationPathParamMap, GenesysCloudFullApiLanguageUnderstandingOperationPathParamMap, GenesysCloudFullApiLanguagesOperationPathParamMap, GenesysCloudFullApiLearningOperationPathParamMap, GenesysCloudFullApiLicenseOperationPathParamMap, GenesysCloudFullApiLocationsOperationPathParamMap, GenesysCloudFullApiLogCaptureOperationPathParamMap, GenesysCloudFullApiMessagingOperationPathParamMap, GenesysCloudFullApiMobileDevicesOperationPathParamMap, GenesysCloudFullApiNotificationsOperationPathParamMap, GenesysCloudFullApiOAuthOperationPathParamMap, GenesysCloudFullApiOperationalEventsOperationPathParamMap, GenesysCloudFullApiOrganizationOperationPathParamMap, GenesysCloudFullApiOrganizationAuthorizationOperationPathParamMap, GenesysCloudFullApiOutbound01OperationPathParamMap, GenesysCloudFullApiOutbound02OperationPathParamMap, GenesysCloudFullApiOutbound03OperationPathParamMap, GenesysCloudFullApiPresenceOperationPathParamMap, GenesysCloudFullApiProcessAutomationOperationPathParamMap, GenesysCloudFullApiQualityOperationPathParamMap, GenesysCloudFullApiRecordingOperationPathParamMap, GenesysCloudFullApiResponseManagementOperationPathParamMap, GenesysCloudFullApiRouting01OperationPathParamMap, GenesysCloudFullApiRouting02OperationPathParamMap, GenesysCloudFullApiSCIMOperationPathParamMap, GenesysCloudFullApiScriptsOperationPathParamMap, GenesysCloudFullApiSearchOperationPathParamMap, GenesysCloudFullApiSettingsOperationPathParamMap, GenesysCloudFullApiSocialMediaOperationPathParamMap, GenesysCloudFullApiSpeechTextAnalyticsOperationPathParamMap, GenesysCloudFullApiStationsOperationPathParamMap, GenesysCloudFullApiTaskManagementOperationPathParamMap, GenesysCloudFullApiTeamsOperationPathParamMap, GenesysCloudFullApiTelephonyOperationPathParamMap, GenesysCloudFullApiTelephonyProvidersEdge01OperationPathParamMap, GenesysCloudFullApiTelephonyProvidersEdge02OperationPathParamMap, GenesysCloudFullApiTextbotsOperationPathParamMap, GenesysCloudFullApiTokensOperationPathParamMap, GenesysCloudFullApiUploadsOperationPathParamMap, GenesysCloudFullApiUsageOperationPathParamMap, GenesysCloudFullApiUserRecordingsOperationPathParamMap, GenesysCloudFullApiUsers01OperationPathParamMap, GenesysCloudFullApiUsers02OperationPathParamMap, GenesysCloudFullApiUsersRulesOperationPathParamMap, GenesysCloudFullApiUtilitiesOperationPathParamMap, GenesysCloudFullApiVoicemailOperationPathParamMap, GenesysCloudFullApiWebDeploymentsOperationPathParamMap, GenesysCloudFullApiWebChatOperationPathParamMap, GenesysCloudFullApiWebMessagingOperationPathParamMap, GenesysCloudFullApiWidgetsOperationPathParamMap, GenesysCloudFullApiWorkforceManagement01OperationPathParamMap, GenesysCloudFullApiWorkforceManagement02OperationPathParamMap, GenesysCloudFullApiWorkforceManagement03OperationPathParamMap, GenesysCloudFullApiWorkforceManagement04OperationPathParamMap, GenesysCloudFullApiWorkforceManagement05OperationPathParamMap {}

export type GenesysCloudFullApiOperationKey = keyof GenesysCloudFullApiOperationPathParamMap & string;

export type GenesysCloudFullApiOperationQueryInput<OperationKey extends GenesysCloudFullApiOperationKey> =
  GenesysCloudFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: GenesysCloudFullApiOperationQueryMap[OperationKey] }
    : { query?: GenesysCloudFullApiOperationQueryMap[OperationKey] };

export type GenesysCloudFullApiOperationBodyInput<OperationKey extends GenesysCloudFullApiOperationKey> =
  [GenesysCloudFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : GenesysCloudFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: GenesysCloudFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: GenesysCloudFullApiOperationRequestBodyMap[OperationKey] };

export type GenesysCloudFullApiOperationInput<OperationKey extends GenesysCloudFullApiOperationKey> = Omit<GenesysCloudOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends GenesysCloudFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: GenesysCloudFullApiOperationPathParamMap[OperationKey] }
) & GenesysCloudFullApiOperationQueryInput<OperationKey> & GenesysCloudFullApiOperationBodyInput<OperationKey>;

export interface GenesysCloudFullApiOperationRequestMap extends GenesysCloudFullApiAgentAssistantsOperationRequestMap, GenesysCloudFullApiAgentCopilotOperationRequestMap, GenesysCloudFullApiAgentUIOperationRequestMap, GenesysCloudFullApiAIStudioOperationRequestMap, GenesysCloudFullApiAlertingOperationRequestMap, GenesysCloudFullApiAnalytics01OperationRequestMap, GenesysCloudFullApiAnalytics02OperationRequestMap, GenesysCloudFullApiArchitect01OperationRequestMap, GenesysCloudFullApiArchitect02OperationRequestMap, GenesysCloudFullApiAssistantCopilotVariationsOperationRequestMap, GenesysCloudFullApiAuditOperationRequestMap, GenesysCloudFullApiAuthorizationOperationRequestMap, GenesysCloudFullApiBackgroundAssistantOperationRequestMap, GenesysCloudFullApiBillingOperationRequestMap, GenesysCloudFullApiBusinessRulesOperationRequestMap, GenesysCloudFullApiCarrierServicesOperationRequestMap, GenesysCloudFullApiCaseManagementOperationRequestMap, GenesysCloudFullApiChatOperationRequestMap, GenesysCloudFullApiCoachingOperationRequestMap, GenesysCloudFullApiContentManagementOperationRequestMap, GenesysCloudFullApiConversations01OperationRequestMap, GenesysCloudFullApiConversations02OperationRequestMap, GenesysCloudFullApiConversations03OperationRequestMap, GenesysCloudFullApiConversations04OperationRequestMap, GenesysCloudFullApiDataExtensionsOperationRequestMap, GenesysCloudFullApiDataPrivacyOperationRequestMap, GenesysCloudFullApiDownloadsOperationRequestMap, GenesysCloudFullApiEmailsOperationRequestMap, GenesysCloudFullApiEmployeeEngagementOperationRequestMap, GenesysCloudFullApiEventsOperationRequestMap, GenesysCloudFullApiExternalContacts01OperationRequestMap, GenesysCloudFullApiExternalContacts02OperationRequestMap, GenesysCloudFullApiFaxOperationRequestMap, GenesysCloudFullApiGamificationOperationRequestMap, GenesysCloudFullApiGeneralDataProtectionRegulationOperationRequestMap, GenesysCloudFullApiGeolocationOperationRequestMap, GenesysCloudFullApiGreetingsOperationRequestMap, GenesysCloudFullApiGroupsOperationRequestMap, GenesysCloudFullApiIdentityProviderOperationRequestMap, GenesysCloudFullApiInfrastructureAsCodeOperationRequestMap, GenesysCloudFullApiIntegrations01OperationRequestMap, GenesysCloudFullApiIntegrations02OperationRequestMap, GenesysCloudFullApiIntentsOperationRequestMap, GenesysCloudFullApiJourney01OperationRequestMap, GenesysCloudFullApiJourney02OperationRequestMap, GenesysCloudFullApiKnowledge01OperationRequestMap, GenesysCloudFullApiKnowledge02OperationRequestMap, GenesysCloudFullApiLanguageUnderstandingOperationRequestMap, GenesysCloudFullApiLanguagesOperationRequestMap, GenesysCloudFullApiLearningOperationRequestMap, GenesysCloudFullApiLicenseOperationRequestMap, GenesysCloudFullApiLocationsOperationRequestMap, GenesysCloudFullApiLogCaptureOperationRequestMap, GenesysCloudFullApiMessagingOperationRequestMap, GenesysCloudFullApiMobileDevicesOperationRequestMap, GenesysCloudFullApiNotificationsOperationRequestMap, GenesysCloudFullApiOAuthOperationRequestMap, GenesysCloudFullApiOperationalEventsOperationRequestMap, GenesysCloudFullApiOrganizationOperationRequestMap, GenesysCloudFullApiOrganizationAuthorizationOperationRequestMap, GenesysCloudFullApiOutbound01OperationRequestMap, GenesysCloudFullApiOutbound02OperationRequestMap, GenesysCloudFullApiOutbound03OperationRequestMap, GenesysCloudFullApiPresenceOperationRequestMap, GenesysCloudFullApiProcessAutomationOperationRequestMap, GenesysCloudFullApiQualityOperationRequestMap, GenesysCloudFullApiRecordingOperationRequestMap, GenesysCloudFullApiResponseManagementOperationRequestMap, GenesysCloudFullApiRouting01OperationRequestMap, GenesysCloudFullApiRouting02OperationRequestMap, GenesysCloudFullApiSCIMOperationRequestMap, GenesysCloudFullApiScriptsOperationRequestMap, GenesysCloudFullApiSearchOperationRequestMap, GenesysCloudFullApiSettingsOperationRequestMap, GenesysCloudFullApiSocialMediaOperationRequestMap, GenesysCloudFullApiSpeechTextAnalyticsOperationRequestMap, GenesysCloudFullApiStationsOperationRequestMap, GenesysCloudFullApiTaskManagementOperationRequestMap, GenesysCloudFullApiTeamsOperationRequestMap, GenesysCloudFullApiTelephonyOperationRequestMap, GenesysCloudFullApiTelephonyProvidersEdge01OperationRequestMap, GenesysCloudFullApiTelephonyProvidersEdge02OperationRequestMap, GenesysCloudFullApiTextbotsOperationRequestMap, GenesysCloudFullApiTokensOperationRequestMap, GenesysCloudFullApiUploadsOperationRequestMap, GenesysCloudFullApiUsageOperationRequestMap, GenesysCloudFullApiUserRecordingsOperationRequestMap, GenesysCloudFullApiUsers01OperationRequestMap, GenesysCloudFullApiUsers02OperationRequestMap, GenesysCloudFullApiUsersRulesOperationRequestMap, GenesysCloudFullApiUtilitiesOperationRequestMap, GenesysCloudFullApiVoicemailOperationRequestMap, GenesysCloudFullApiWebDeploymentsOperationRequestMap, GenesysCloudFullApiWebChatOperationRequestMap, GenesysCloudFullApiWebMessagingOperationRequestMap, GenesysCloudFullApiWidgetsOperationRequestMap, GenesysCloudFullApiWorkforceManagement01OperationRequestMap, GenesysCloudFullApiWorkforceManagement02OperationRequestMap, GenesysCloudFullApiWorkforceManagement03OperationRequestMap, GenesysCloudFullApiWorkforceManagement04OperationRequestMap, GenesysCloudFullApiWorkforceManagement05OperationRequestMap {}

export type GenesysCloudFullApiOperationArgs<OperationKey extends GenesysCloudFullApiOperationKey> = {} extends GenesysCloudFullApiOperationPathParamMap[OperationKey]
  ? [input?: GenesysCloudFullApiOperationRequestMap[OperationKey]]
  : [input: GenesysCloudFullApiOperationRequestMap[OperationKey]];

export type GenesysCloudGeneratedOperationCaller = <OperationKey extends GenesysCloudFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: GenesysCloudFullApiOperationArgs<OperationKey>
) => Promise<GenesysCloudFullApiOperationResponseMap[OperationKey]>;

export interface GenesysCloudFullApiGeneratedClient extends GenesysCloudFullApiAgentAssistantsGeneratedClient, GenesysCloudFullApiAgentCopilotGeneratedClient, GenesysCloudFullApiAgentUIGeneratedClient, GenesysCloudFullApiAIStudioGeneratedClient, GenesysCloudFullApiAlertingGeneratedClient, GenesysCloudFullApiAnalytics01GeneratedClient, GenesysCloudFullApiAnalytics02GeneratedClient, GenesysCloudFullApiArchitect01GeneratedClient, GenesysCloudFullApiArchitect02GeneratedClient, GenesysCloudFullApiAssistantCopilotVariationsGeneratedClient, GenesysCloudFullApiAuditGeneratedClient, GenesysCloudFullApiAuthorizationGeneratedClient, GenesysCloudFullApiBackgroundAssistantGeneratedClient, GenesysCloudFullApiBillingGeneratedClient, GenesysCloudFullApiBusinessRulesGeneratedClient, GenesysCloudFullApiCarrierServicesGeneratedClient, GenesysCloudFullApiCaseManagementGeneratedClient, GenesysCloudFullApiChatGeneratedClient, GenesysCloudFullApiCoachingGeneratedClient, GenesysCloudFullApiContentManagementGeneratedClient, GenesysCloudFullApiConversations01GeneratedClient, GenesysCloudFullApiConversations02GeneratedClient, GenesysCloudFullApiConversations03GeneratedClient, GenesysCloudFullApiConversations04GeneratedClient, GenesysCloudFullApiDataExtensionsGeneratedClient, GenesysCloudFullApiDataPrivacyGeneratedClient, GenesysCloudFullApiDownloadsGeneratedClient, GenesysCloudFullApiEmailsGeneratedClient, GenesysCloudFullApiEmployeeEngagementGeneratedClient, GenesysCloudFullApiEventsGeneratedClient, GenesysCloudFullApiExternalContacts01GeneratedClient, GenesysCloudFullApiExternalContacts02GeneratedClient, GenesysCloudFullApiFaxGeneratedClient, GenesysCloudFullApiGamificationGeneratedClient, GenesysCloudFullApiGeneralDataProtectionRegulationGeneratedClient, GenesysCloudFullApiGeolocationGeneratedClient, GenesysCloudFullApiGreetingsGeneratedClient, GenesysCloudFullApiGroupsGeneratedClient, GenesysCloudFullApiIdentityProviderGeneratedClient, GenesysCloudFullApiInfrastructureAsCodeGeneratedClient, GenesysCloudFullApiIntegrations01GeneratedClient, GenesysCloudFullApiIntegrations02GeneratedClient, GenesysCloudFullApiIntentsGeneratedClient, GenesysCloudFullApiJourney01GeneratedClient, GenesysCloudFullApiJourney02GeneratedClient, GenesysCloudFullApiKnowledge01GeneratedClient, GenesysCloudFullApiKnowledge02GeneratedClient, GenesysCloudFullApiLanguageUnderstandingGeneratedClient, GenesysCloudFullApiLanguagesGeneratedClient, GenesysCloudFullApiLearningGeneratedClient, GenesysCloudFullApiLicenseGeneratedClient, GenesysCloudFullApiLocationsGeneratedClient, GenesysCloudFullApiLogCaptureGeneratedClient, GenesysCloudFullApiMessagingGeneratedClient, GenesysCloudFullApiMobileDevicesGeneratedClient, GenesysCloudFullApiNotificationsGeneratedClient, GenesysCloudFullApiOAuthGeneratedClient, GenesysCloudFullApiOperationalEventsGeneratedClient, GenesysCloudFullApiOrganizationGeneratedClient, GenesysCloudFullApiOrganizationAuthorizationGeneratedClient, GenesysCloudFullApiOutbound01GeneratedClient, GenesysCloudFullApiOutbound02GeneratedClient, GenesysCloudFullApiOutbound03GeneratedClient, GenesysCloudFullApiPresenceGeneratedClient, GenesysCloudFullApiProcessAutomationGeneratedClient, GenesysCloudFullApiQualityGeneratedClient, GenesysCloudFullApiRecordingGeneratedClient, GenesysCloudFullApiResponseManagementGeneratedClient, GenesysCloudFullApiRouting01GeneratedClient, GenesysCloudFullApiRouting02GeneratedClient, GenesysCloudFullApiSCIMGeneratedClient, GenesysCloudFullApiScriptsGeneratedClient, GenesysCloudFullApiSearchGeneratedClient, GenesysCloudFullApiSettingsGeneratedClient, GenesysCloudFullApiSocialMediaGeneratedClient, GenesysCloudFullApiSpeechTextAnalyticsGeneratedClient, GenesysCloudFullApiStationsGeneratedClient, GenesysCloudFullApiTaskManagementGeneratedClient, GenesysCloudFullApiTeamsGeneratedClient, GenesysCloudFullApiTelephonyGeneratedClient, GenesysCloudFullApiTelephonyProvidersEdge01GeneratedClient, GenesysCloudFullApiTelephonyProvidersEdge02GeneratedClient, GenesysCloudFullApiTextbotsGeneratedClient, GenesysCloudFullApiTokensGeneratedClient, GenesysCloudFullApiUploadsGeneratedClient, GenesysCloudFullApiUsageGeneratedClient, GenesysCloudFullApiUserRecordingsGeneratedClient, GenesysCloudFullApiUsers01GeneratedClient, GenesysCloudFullApiUsers02GeneratedClient, GenesysCloudFullApiUsersRulesGeneratedClient, GenesysCloudFullApiUtilitiesGeneratedClient, GenesysCloudFullApiVoicemailGeneratedClient, GenesysCloudFullApiWebDeploymentsGeneratedClient, GenesysCloudFullApiWebChatGeneratedClient, GenesysCloudFullApiWebMessagingGeneratedClient, GenesysCloudFullApiWidgetsGeneratedClient, GenesysCloudFullApiWorkforceManagement01GeneratedClient, GenesysCloudFullApiWorkforceManagement02GeneratedClient, GenesysCloudFullApiWorkforceManagement03GeneratedClient, GenesysCloudFullApiWorkforceManagement04GeneratedClient, GenesysCloudFullApiWorkforceManagement05GeneratedClient {}

export const GENESYS_CLOUD_FULL_API_GENERATED_FUNCTION_COUNT = 3147 as const;
export const GENESYS_CLOUD_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...GenesysCloudFullApiAgentAssistantsGeneratedFunctionNames,
  ...GenesysCloudFullApiAgentCopilotGeneratedFunctionNames,
  ...GenesysCloudFullApiAgentUIGeneratedFunctionNames,
  ...GenesysCloudFullApiAIStudioGeneratedFunctionNames,
  ...GenesysCloudFullApiAlertingGeneratedFunctionNames,
  ...GenesysCloudFullApiAnalytics01GeneratedFunctionNames,
  ...GenesysCloudFullApiAnalytics02GeneratedFunctionNames,
  ...GenesysCloudFullApiArchitect01GeneratedFunctionNames,
  ...GenesysCloudFullApiArchitect02GeneratedFunctionNames,
  ...GenesysCloudFullApiAssistantCopilotVariationsGeneratedFunctionNames,
  ...GenesysCloudFullApiAuditGeneratedFunctionNames,
  ...GenesysCloudFullApiAuthorizationGeneratedFunctionNames,
  ...GenesysCloudFullApiBackgroundAssistantGeneratedFunctionNames,
  ...GenesysCloudFullApiBillingGeneratedFunctionNames,
  ...GenesysCloudFullApiBusinessRulesGeneratedFunctionNames,
  ...GenesysCloudFullApiCarrierServicesGeneratedFunctionNames,
  ...GenesysCloudFullApiCaseManagementGeneratedFunctionNames,
  ...GenesysCloudFullApiChatGeneratedFunctionNames,
  ...GenesysCloudFullApiCoachingGeneratedFunctionNames,
  ...GenesysCloudFullApiContentManagementGeneratedFunctionNames,
  ...GenesysCloudFullApiConversations01GeneratedFunctionNames,
  ...GenesysCloudFullApiConversations02GeneratedFunctionNames,
  ...GenesysCloudFullApiConversations03GeneratedFunctionNames,
  ...GenesysCloudFullApiConversations04GeneratedFunctionNames,
  ...GenesysCloudFullApiDataExtensionsGeneratedFunctionNames,
  ...GenesysCloudFullApiDataPrivacyGeneratedFunctionNames,
  ...GenesysCloudFullApiDownloadsGeneratedFunctionNames,
  ...GenesysCloudFullApiEmailsGeneratedFunctionNames,
  ...GenesysCloudFullApiEmployeeEngagementGeneratedFunctionNames,
  ...GenesysCloudFullApiEventsGeneratedFunctionNames,
  ...GenesysCloudFullApiExternalContacts01GeneratedFunctionNames,
  ...GenesysCloudFullApiExternalContacts02GeneratedFunctionNames,
  ...GenesysCloudFullApiFaxGeneratedFunctionNames,
  ...GenesysCloudFullApiGamificationGeneratedFunctionNames,
  ...GenesysCloudFullApiGeneralDataProtectionRegulationGeneratedFunctionNames,
  ...GenesysCloudFullApiGeolocationGeneratedFunctionNames,
  ...GenesysCloudFullApiGreetingsGeneratedFunctionNames,
  ...GenesysCloudFullApiGroupsGeneratedFunctionNames,
  ...GenesysCloudFullApiIdentityProviderGeneratedFunctionNames,
  ...GenesysCloudFullApiInfrastructureAsCodeGeneratedFunctionNames,
  ...GenesysCloudFullApiIntegrations01GeneratedFunctionNames,
  ...GenesysCloudFullApiIntegrations02GeneratedFunctionNames,
  ...GenesysCloudFullApiIntentsGeneratedFunctionNames,
  ...GenesysCloudFullApiJourney01GeneratedFunctionNames,
  ...GenesysCloudFullApiJourney02GeneratedFunctionNames,
  ...GenesysCloudFullApiKnowledge01GeneratedFunctionNames,
  ...GenesysCloudFullApiKnowledge02GeneratedFunctionNames,
  ...GenesysCloudFullApiLanguageUnderstandingGeneratedFunctionNames,
  ...GenesysCloudFullApiLanguagesGeneratedFunctionNames,
  ...GenesysCloudFullApiLearningGeneratedFunctionNames,
  ...GenesysCloudFullApiLicenseGeneratedFunctionNames,
  ...GenesysCloudFullApiLocationsGeneratedFunctionNames,
  ...GenesysCloudFullApiLogCaptureGeneratedFunctionNames,
  ...GenesysCloudFullApiMessagingGeneratedFunctionNames,
  ...GenesysCloudFullApiMobileDevicesGeneratedFunctionNames,
  ...GenesysCloudFullApiNotificationsGeneratedFunctionNames,
  ...GenesysCloudFullApiOAuthGeneratedFunctionNames,
  ...GenesysCloudFullApiOperationalEventsGeneratedFunctionNames,
  ...GenesysCloudFullApiOrganizationGeneratedFunctionNames,
  ...GenesysCloudFullApiOrganizationAuthorizationGeneratedFunctionNames,
  ...GenesysCloudFullApiOutbound01GeneratedFunctionNames,
  ...GenesysCloudFullApiOutbound02GeneratedFunctionNames,
  ...GenesysCloudFullApiOutbound03GeneratedFunctionNames,
  ...GenesysCloudFullApiPresenceGeneratedFunctionNames,
  ...GenesysCloudFullApiProcessAutomationGeneratedFunctionNames,
  ...GenesysCloudFullApiQualityGeneratedFunctionNames,
  ...GenesysCloudFullApiRecordingGeneratedFunctionNames,
  ...GenesysCloudFullApiResponseManagementGeneratedFunctionNames,
  ...GenesysCloudFullApiRouting01GeneratedFunctionNames,
  ...GenesysCloudFullApiRouting02GeneratedFunctionNames,
  ...GenesysCloudFullApiSCIMGeneratedFunctionNames,
  ...GenesysCloudFullApiScriptsGeneratedFunctionNames,
  ...GenesysCloudFullApiSearchGeneratedFunctionNames,
  ...GenesysCloudFullApiSettingsGeneratedFunctionNames,
  ...GenesysCloudFullApiSocialMediaGeneratedFunctionNames,
  ...GenesysCloudFullApiSpeechTextAnalyticsGeneratedFunctionNames,
  ...GenesysCloudFullApiStationsGeneratedFunctionNames,
  ...GenesysCloudFullApiTaskManagementGeneratedFunctionNames,
  ...GenesysCloudFullApiTeamsGeneratedFunctionNames,
  ...GenesysCloudFullApiTelephonyGeneratedFunctionNames,
  ...GenesysCloudFullApiTelephonyProvidersEdge01GeneratedFunctionNames,
  ...GenesysCloudFullApiTelephonyProvidersEdge02GeneratedFunctionNames,
  ...GenesysCloudFullApiTextbotsGeneratedFunctionNames,
  ...GenesysCloudFullApiTokensGeneratedFunctionNames,
  ...GenesysCloudFullApiUploadsGeneratedFunctionNames,
  ...GenesysCloudFullApiUsageGeneratedFunctionNames,
  ...GenesysCloudFullApiUserRecordingsGeneratedFunctionNames,
  ...GenesysCloudFullApiUsers01GeneratedFunctionNames,
  ...GenesysCloudFullApiUsers02GeneratedFunctionNames,
  ...GenesysCloudFullApiUsersRulesGeneratedFunctionNames,
  ...GenesysCloudFullApiUtilitiesGeneratedFunctionNames,
  ...GenesysCloudFullApiVoicemailGeneratedFunctionNames,
  ...GenesysCloudFullApiWebDeploymentsGeneratedFunctionNames,
  ...GenesysCloudFullApiWebChatGeneratedFunctionNames,
  ...GenesysCloudFullApiWebMessagingGeneratedFunctionNames,
  ...GenesysCloudFullApiWidgetsGeneratedFunctionNames,
  ...GenesysCloudFullApiWorkforceManagement01GeneratedFunctionNames,
  ...GenesysCloudFullApiWorkforceManagement02GeneratedFunctionNames,
  ...GenesysCloudFullApiWorkforceManagement03GeneratedFunctionNames,
  ...GenesysCloudFullApiWorkforceManagement04GeneratedFunctionNames,
  ...GenesysCloudFullApiWorkforceManagement05GeneratedFunctionNames,
] as const satisfies readonly (keyof GenesysCloudFullApiGeneratedClient)[];

export function createGenesysCloudFullApiGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiGeneratedClient {
  return Object.assign(
    {},
    createGenesysCloudFullApiAgentAssistantsGeneratedClient(callOperation),
    createGenesysCloudFullApiAgentCopilotGeneratedClient(callOperation),
    createGenesysCloudFullApiAgentUIGeneratedClient(callOperation),
    createGenesysCloudFullApiAIStudioGeneratedClient(callOperation),
    createGenesysCloudFullApiAlertingGeneratedClient(callOperation),
    createGenesysCloudFullApiAnalytics01GeneratedClient(callOperation),
    createGenesysCloudFullApiAnalytics02GeneratedClient(callOperation),
    createGenesysCloudFullApiArchitect01GeneratedClient(callOperation),
    createGenesysCloudFullApiArchitect02GeneratedClient(callOperation),
    createGenesysCloudFullApiAssistantCopilotVariationsGeneratedClient(callOperation),
    createGenesysCloudFullApiAuditGeneratedClient(callOperation),
    createGenesysCloudFullApiAuthorizationGeneratedClient(callOperation),
    createGenesysCloudFullApiBackgroundAssistantGeneratedClient(callOperation),
    createGenesysCloudFullApiBillingGeneratedClient(callOperation),
    createGenesysCloudFullApiBusinessRulesGeneratedClient(callOperation),
    createGenesysCloudFullApiCarrierServicesGeneratedClient(callOperation),
    createGenesysCloudFullApiCaseManagementGeneratedClient(callOperation),
    createGenesysCloudFullApiChatGeneratedClient(callOperation),
    createGenesysCloudFullApiCoachingGeneratedClient(callOperation),
    createGenesysCloudFullApiContentManagementGeneratedClient(callOperation),
    createGenesysCloudFullApiConversations01GeneratedClient(callOperation),
    createGenesysCloudFullApiConversations02GeneratedClient(callOperation),
    createGenesysCloudFullApiConversations03GeneratedClient(callOperation),
    createGenesysCloudFullApiConversations04GeneratedClient(callOperation),
    createGenesysCloudFullApiDataExtensionsGeneratedClient(callOperation),
    createGenesysCloudFullApiDataPrivacyGeneratedClient(callOperation),
    createGenesysCloudFullApiDownloadsGeneratedClient(callOperation),
    createGenesysCloudFullApiEmailsGeneratedClient(callOperation),
    createGenesysCloudFullApiEmployeeEngagementGeneratedClient(callOperation),
    createGenesysCloudFullApiEventsGeneratedClient(callOperation),
    createGenesysCloudFullApiExternalContacts01GeneratedClient(callOperation),
    createGenesysCloudFullApiExternalContacts02GeneratedClient(callOperation),
    createGenesysCloudFullApiFaxGeneratedClient(callOperation),
    createGenesysCloudFullApiGamificationGeneratedClient(callOperation),
    createGenesysCloudFullApiGeneralDataProtectionRegulationGeneratedClient(callOperation),
    createGenesysCloudFullApiGeolocationGeneratedClient(callOperation),
    createGenesysCloudFullApiGreetingsGeneratedClient(callOperation),
    createGenesysCloudFullApiGroupsGeneratedClient(callOperation),
    createGenesysCloudFullApiIdentityProviderGeneratedClient(callOperation),
    createGenesysCloudFullApiInfrastructureAsCodeGeneratedClient(callOperation),
    createGenesysCloudFullApiIntegrations01GeneratedClient(callOperation),
    createGenesysCloudFullApiIntegrations02GeneratedClient(callOperation),
    createGenesysCloudFullApiIntentsGeneratedClient(callOperation),
    createGenesysCloudFullApiJourney01GeneratedClient(callOperation),
    createGenesysCloudFullApiJourney02GeneratedClient(callOperation),
    createGenesysCloudFullApiKnowledge01GeneratedClient(callOperation),
    createGenesysCloudFullApiKnowledge02GeneratedClient(callOperation),
    createGenesysCloudFullApiLanguageUnderstandingGeneratedClient(callOperation),
    createGenesysCloudFullApiLanguagesGeneratedClient(callOperation),
    createGenesysCloudFullApiLearningGeneratedClient(callOperation),
    createGenesysCloudFullApiLicenseGeneratedClient(callOperation),
    createGenesysCloudFullApiLocationsGeneratedClient(callOperation),
    createGenesysCloudFullApiLogCaptureGeneratedClient(callOperation),
    createGenesysCloudFullApiMessagingGeneratedClient(callOperation),
    createGenesysCloudFullApiMobileDevicesGeneratedClient(callOperation),
    createGenesysCloudFullApiNotificationsGeneratedClient(callOperation),
    createGenesysCloudFullApiOAuthGeneratedClient(callOperation),
    createGenesysCloudFullApiOperationalEventsGeneratedClient(callOperation),
    createGenesysCloudFullApiOrganizationGeneratedClient(callOperation),
    createGenesysCloudFullApiOrganizationAuthorizationGeneratedClient(callOperation),
    createGenesysCloudFullApiOutbound01GeneratedClient(callOperation),
    createGenesysCloudFullApiOutbound02GeneratedClient(callOperation),
    createGenesysCloudFullApiOutbound03GeneratedClient(callOperation),
    createGenesysCloudFullApiPresenceGeneratedClient(callOperation),
    createGenesysCloudFullApiProcessAutomationGeneratedClient(callOperation),
    createGenesysCloudFullApiQualityGeneratedClient(callOperation),
    createGenesysCloudFullApiRecordingGeneratedClient(callOperation),
    createGenesysCloudFullApiResponseManagementGeneratedClient(callOperation),
    createGenesysCloudFullApiRouting01GeneratedClient(callOperation),
    createGenesysCloudFullApiRouting02GeneratedClient(callOperation),
    createGenesysCloudFullApiSCIMGeneratedClient(callOperation),
    createGenesysCloudFullApiScriptsGeneratedClient(callOperation),
    createGenesysCloudFullApiSearchGeneratedClient(callOperation),
    createGenesysCloudFullApiSettingsGeneratedClient(callOperation),
    createGenesysCloudFullApiSocialMediaGeneratedClient(callOperation),
    createGenesysCloudFullApiSpeechTextAnalyticsGeneratedClient(callOperation),
    createGenesysCloudFullApiStationsGeneratedClient(callOperation),
    createGenesysCloudFullApiTaskManagementGeneratedClient(callOperation),
    createGenesysCloudFullApiTeamsGeneratedClient(callOperation),
    createGenesysCloudFullApiTelephonyGeneratedClient(callOperation),
    createGenesysCloudFullApiTelephonyProvidersEdge01GeneratedClient(callOperation),
    createGenesysCloudFullApiTelephonyProvidersEdge02GeneratedClient(callOperation),
    createGenesysCloudFullApiTextbotsGeneratedClient(callOperation),
    createGenesysCloudFullApiTokensGeneratedClient(callOperation),
    createGenesysCloudFullApiUploadsGeneratedClient(callOperation),
    createGenesysCloudFullApiUsageGeneratedClient(callOperation),
    createGenesysCloudFullApiUserRecordingsGeneratedClient(callOperation),
    createGenesysCloudFullApiUsers01GeneratedClient(callOperation),
    createGenesysCloudFullApiUsers02GeneratedClient(callOperation),
    createGenesysCloudFullApiUsersRulesGeneratedClient(callOperation),
    createGenesysCloudFullApiUtilitiesGeneratedClient(callOperation),
    createGenesysCloudFullApiVoicemailGeneratedClient(callOperation),
    createGenesysCloudFullApiWebDeploymentsGeneratedClient(callOperation),
    createGenesysCloudFullApiWebChatGeneratedClient(callOperation),
    createGenesysCloudFullApiWebMessagingGeneratedClient(callOperation),
    createGenesysCloudFullApiWidgetsGeneratedClient(callOperation),
    createGenesysCloudFullApiWorkforceManagement01GeneratedClient(callOperation),
    createGenesysCloudFullApiWorkforceManagement02GeneratedClient(callOperation),
    createGenesysCloudFullApiWorkforceManagement03GeneratedClient(callOperation),
    createGenesysCloudFullApiWorkforceManagement04GeneratedClient(callOperation),
    createGenesysCloudFullApiWorkforceManagement05GeneratedClient(callOperation),
  ) as GenesysCloudFullApiGeneratedClient;
}
