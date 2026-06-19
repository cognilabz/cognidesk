// Generated from AWS official API models (https://github.com/aws/api-models-aws/tree/main/models).
// Do not edit by hand; run scripts/generate-amazon-connect-full-api.mjs after checking upstream docs.

import type { AmazonConnectOperationRequestInput } from "./index.js";
import type {
  AmazonConnectFullApiOperationQueryMap,
  AmazonConnectFullApiOperationQueryRequiredMap,
  AmazonConnectFullApiOperationRequestBodyMap,
  AmazonConnectFullApiOperationRequestBodyRequiredMap,
  AmazonConnectFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createAmazonConnectFullApiAgentStatusGeneratedClient,
  AmazonConnectFullApiAgentStatusGeneratedFunctionNames,
  type AmazonConnectFullApiAgentStatusGeneratedClient,
  type AmazonConnectFullApiAgentStatusOperationPathParamMap,
  type AmazonConnectFullApiAgentStatusOperationRequestMap,
} from "./full-api.generated/client/agent-status-chunk.generated.js";
import {
  createAmazonConnectFullApiAnalyticsDataGeneratedClient,
  AmazonConnectFullApiAnalyticsDataGeneratedFunctionNames,
  type AmazonConnectFullApiAnalyticsDataGeneratedClient,
  type AmazonConnectFullApiAnalyticsDataOperationPathParamMap,
  type AmazonConnectFullApiAnalyticsDataOperationRequestMap,
} from "./full-api.generated/client/analytics-data-chunk.generated.js";
import {
  createAmazonConnectFullApiApplicationsGeneratedClient,
  AmazonConnectFullApiApplicationsGeneratedFunctionNames,
  type AmazonConnectFullApiApplicationsGeneratedClient,
  type AmazonConnectFullApiApplicationsOperationPathParamMap,
  type AmazonConnectFullApiApplicationsOperationRequestMap,
} from "./full-api.generated/client/applications-chunk.generated.js";
import {
  createAmazonConnectFullApiAssistantsGeneratedClient,
  AmazonConnectFullApiAssistantsGeneratedFunctionNames,
  type AmazonConnectFullApiAssistantsGeneratedClient,
  type AmazonConnectFullApiAssistantsOperationPathParamMap,
  type AmazonConnectFullApiAssistantsOperationRequestMap,
} from "./full-api.generated/client/assistants-chunk.generated.js";
import {
  createAmazonConnectFullApiAssociateSecurityProfilesGeneratedClient,
  AmazonConnectFullApiAssociateSecurityProfilesGeneratedFunctionNames,
  type AmazonConnectFullApiAssociateSecurityProfilesGeneratedClient,
  type AmazonConnectFullApiAssociateSecurityProfilesOperationPathParamMap,
  type AmazonConnectFullApiAssociateSecurityProfilesOperationRequestMap,
} from "./full-api.generated/client/associate-security-profiles-chunk.generated.js";
import {
  createAmazonConnectFullApiAttachedFilesGeneratedClient,
  AmazonConnectFullApiAttachedFilesGeneratedFunctionNames,
  type AmazonConnectFullApiAttachedFilesGeneratedClient,
  type AmazonConnectFullApiAttachedFilesOperationPathParamMap,
  type AmazonConnectFullApiAttachedFilesOperationRequestMap,
} from "./full-api.generated/client/attached-files-chunk.generated.js";
import {
  createAmazonConnectFullApiAttachedFilesConfigurationsGeneratedClient,
  AmazonConnectFullApiAttachedFilesConfigurationsGeneratedFunctionNames,
  type AmazonConnectFullApiAttachedFilesConfigurationsGeneratedClient,
  type AmazonConnectFullApiAttachedFilesConfigurationsOperationPathParamMap,
  type AmazonConnectFullApiAttachedFilesConfigurationsOperationRequestMap,
} from "./full-api.generated/client/attached-files-configurations-chunk.generated.js";
import {
  createAmazonConnectFullApiAuthenticationProfilesGeneratedClient,
  AmazonConnectFullApiAuthenticationProfilesGeneratedFunctionNames,
  type AmazonConnectFullApiAuthenticationProfilesGeneratedClient,
  type AmazonConnectFullApiAuthenticationProfilesOperationPathParamMap,
  type AmazonConnectFullApiAuthenticationProfilesOperationRequestMap,
} from "./full-api.generated/client/authentication-profiles-chunk.generated.js";
import {
  createAmazonConnectFullApiAuthenticationProfilesSummaryGeneratedClient,
  AmazonConnectFullApiAuthenticationProfilesSummaryGeneratedFunctionNames,
  type AmazonConnectFullApiAuthenticationProfilesSummaryGeneratedClient,
  type AmazonConnectFullApiAuthenticationProfilesSummaryOperationPathParamMap,
  type AmazonConnectFullApiAuthenticationProfilesSummaryOperationRequestMap,
} from "./full-api.generated/client/authentication-profiles-summary-chunk.generated.js";
import {
  createAmazonConnectFullApiCampaignsGeneratedClient,
  AmazonConnectFullApiCampaignsGeneratedFunctionNames,
  type AmazonConnectFullApiCampaignsGeneratedClient,
  type AmazonConnectFullApiCampaignsOperationPathParamMap,
  type AmazonConnectFullApiCampaignsOperationRequestMap,
} from "./full-api.generated/client/campaigns-chunk.generated.js";
import {
  createAmazonConnectFullApiCampaignsStateGeneratedClient,
  AmazonConnectFullApiCampaignsStateGeneratedFunctionNames,
  type AmazonConnectFullApiCampaignsStateGeneratedClient,
  type AmazonConnectFullApiCampaignsStateOperationPathParamMap,
  type AmazonConnectFullApiCampaignsStateOperationRequestMap,
} from "./full-api.generated/client/campaigns-state-chunk.generated.js";
import {
  createAmazonConnectFullApiCampaignsSummaryGeneratedClient,
  AmazonConnectFullApiCampaignsSummaryGeneratedFunctionNames,
  type AmazonConnectFullApiCampaignsSummaryGeneratedClient,
  type AmazonConnectFullApiCampaignsSummaryOperationPathParamMap,
  type AmazonConnectFullApiCampaignsSummaryOperationRequestMap,
} from "./full-api.generated/client/campaigns-summary-chunk.generated.js";
import {
  createAmazonConnectFullApiChatIntegrationEventGeneratedClient,
  AmazonConnectFullApiChatIntegrationEventGeneratedFunctionNames,
  type AmazonConnectFullApiChatIntegrationEventGeneratedClient,
  type AmazonConnectFullApiChatIntegrationEventOperationPathParamMap,
  type AmazonConnectFullApiChatIntegrationEventOperationRequestMap,
} from "./full-api.generated/client/chat-integration-event-chunk.generated.js";
import {
  createAmazonConnectFullApiConnectInstanceGeneratedClient,
  AmazonConnectFullApiConnectInstanceGeneratedFunctionNames,
  type AmazonConnectFullApiConnectInstanceGeneratedClient,
  type AmazonConnectFullApiConnectInstanceOperationPathParamMap,
  type AmazonConnectFullApiConnectInstanceOperationRequestMap,
} from "./full-api.generated/client/connect-instance-chunk.generated.js";
import {
  createAmazonConnectFullApiContactGeneratedClient,
  AmazonConnectFullApiContactGeneratedFunctionNames,
  type AmazonConnectFullApiContactGeneratedClient,
  type AmazonConnectFullApiContactOperationPathParamMap,
  type AmazonConnectFullApiContactOperationRequestMap,
} from "./full-api.generated/client/contact-chunk.generated.js";
import {
  createAmazonConnectFullApiContactEvaluationsGeneratedClient,
  AmazonConnectFullApiContactEvaluationsGeneratedFunctionNames,
  type AmazonConnectFullApiContactEvaluationsGeneratedClient,
  type AmazonConnectFullApiContactEvaluationsOperationPathParamMap,
  type AmazonConnectFullApiContactEvaluationsOperationRequestMap,
} from "./full-api.generated/client/contact-evaluations-chunk.generated.js";
import {
  createAmazonConnectFullApiContactFlowModulesGeneratedClient,
  AmazonConnectFullApiContactFlowModulesGeneratedFunctionNames,
  type AmazonConnectFullApiContactFlowModulesGeneratedClient,
  type AmazonConnectFullApiContactFlowModulesOperationPathParamMap,
  type AmazonConnectFullApiContactFlowModulesOperationRequestMap,
} from "./full-api.generated/client/contact-flow-modules-chunk.generated.js";
import {
  createAmazonConnectFullApiContactFlowModulesSummaryGeneratedClient,
  AmazonConnectFullApiContactFlowModulesSummaryGeneratedFunctionNames,
  type AmazonConnectFullApiContactFlowModulesSummaryGeneratedClient,
  type AmazonConnectFullApiContactFlowModulesSummaryOperationPathParamMap,
  type AmazonConnectFullApiContactFlowModulesSummaryOperationRequestMap,
} from "./full-api.generated/client/contact-flow-modules-summary-chunk.generated.js";
import {
  createAmazonConnectFullApiContactFlowsGeneratedClient,
  AmazonConnectFullApiContactFlowsGeneratedFunctionNames,
  type AmazonConnectFullApiContactFlowsGeneratedClient,
  type AmazonConnectFullApiContactFlowsOperationPathParamMap,
  type AmazonConnectFullApiContactFlowsOperationRequestMap,
} from "./full-api.generated/client/contact-flows-chunk.generated.js";
import {
  createAmazonConnectFullApiContactFlowsSummaryGeneratedClient,
  AmazonConnectFullApiContactFlowsSummaryGeneratedFunctionNames,
  type AmazonConnectFullApiContactFlowsSummaryGeneratedClient,
  type AmazonConnectFullApiContactFlowsSummaryOperationPathParamMap,
  type AmazonConnectFullApiContactFlowsSummaryOperationRequestMap,
} from "./full-api.generated/client/contact-flows-summary-chunk.generated.js";
import {
  createAmazonConnectFullApiContactsGeneratedClient,
  AmazonConnectFullApiContactsGeneratedFunctionNames,
  type AmazonConnectFullApiContactsGeneratedClient,
  type AmazonConnectFullApiContactsOperationPathParamMap,
  type AmazonConnectFullApiContactsOperationRequestMap,
} from "./full-api.generated/client/contacts-chunk.generated.js";
import {
  createAmazonConnectFullApiDataTablesGeneratedClient,
  AmazonConnectFullApiDataTablesGeneratedFunctionNames,
  type AmazonConnectFullApiDataTablesGeneratedClient,
  type AmazonConnectFullApiDataTablesOperationPathParamMap,
  type AmazonConnectFullApiDataTablesOperationRequestMap,
} from "./full-api.generated/client/data-tables-chunk.generated.js";
import {
  createAmazonConnectFullApiDataIntegrationsGeneratedClient,
  AmazonConnectFullApiDataIntegrationsGeneratedFunctionNames,
  type AmazonConnectFullApiDataIntegrationsGeneratedClient,
  type AmazonConnectFullApiDataIntegrationsOperationPathParamMap,
  type AmazonConnectFullApiDataIntegrationsOperationRequestMap,
} from "./full-api.generated/client/data-integrations-chunk.generated.js";
import {
  createAmazonConnectFullApiDefaultVocabularyGeneratedClient,
  AmazonConnectFullApiDefaultVocabularyGeneratedFunctionNames,
  type AmazonConnectFullApiDefaultVocabularyGeneratedClient,
  type AmazonConnectFullApiDefaultVocabularyOperationPathParamMap,
  type AmazonConnectFullApiDefaultVocabularyOperationRequestMap,
} from "./full-api.generated/client/default-vocabulary-chunk.generated.js";
import {
  createAmazonConnectFullApiDefaultVocabularySummaryGeneratedClient,
  AmazonConnectFullApiDefaultVocabularySummaryGeneratedFunctionNames,
  type AmazonConnectFullApiDefaultVocabularySummaryGeneratedClient,
  type AmazonConnectFullApiDefaultVocabularySummaryOperationPathParamMap,
  type AmazonConnectFullApiDefaultVocabularySummaryOperationRequestMap,
} from "./full-api.generated/client/default-vocabulary-summary-chunk.generated.js";
import {
  createAmazonConnectFullApiDisassociateSecurityProfilesGeneratedClient,
  AmazonConnectFullApiDisassociateSecurityProfilesGeneratedFunctionNames,
  type AmazonConnectFullApiDisassociateSecurityProfilesGeneratedClient,
  type AmazonConnectFullApiDisassociateSecurityProfilesOperationPathParamMap,
  type AmazonConnectFullApiDisassociateSecurityProfilesOperationRequestMap,
} from "./full-api.generated/client/disassociate-security-profiles-chunk.generated.js";
import {
  createAmazonConnectFullApiDomainGeneratedClient,
  AmazonConnectFullApiDomainGeneratedFunctionNames,
  type AmazonConnectFullApiDomainGeneratedClient,
  type AmazonConnectFullApiDomainOperationPathParamMap,
  type AmazonConnectFullApiDomainOperationRequestMap,
} from "./full-api.generated/client/domain-chunk.generated.js";
import {
  createAmazonConnectFullApiDomains01GeneratedClient,
  AmazonConnectFullApiDomains01GeneratedFunctionNames,
  type AmazonConnectFullApiDomains01GeneratedClient,
  type AmazonConnectFullApiDomains01OperationPathParamMap,
  type AmazonConnectFullApiDomains01OperationRequestMap,
} from "./full-api.generated/client/domains-01-chunk.generated.js";
import {
  createAmazonConnectFullApiDomains02GeneratedClient,
  AmazonConnectFullApiDomains02GeneratedFunctionNames,
  type AmazonConnectFullApiDomains02GeneratedClient,
  type AmazonConnectFullApiDomains02OperationPathParamMap,
  type AmazonConnectFullApiDomains02OperationRequestMap,
} from "./full-api.generated/client/domains-02-chunk.generated.js";
import {
  createAmazonConnectFullApiDomainsListGeneratedClient,
  AmazonConnectFullApiDomainsListGeneratedFunctionNames,
  type AmazonConnectFullApiDomainsListGeneratedClient,
  type AmazonConnectFullApiDomainsListOperationPathParamMap,
  type AmazonConnectFullApiDomainsListOperationRequestMap,
} from "./full-api.generated/client/domains-list-chunk.generated.js";
import {
  createAmazonConnectFullApiEffectiveHoursOfOperationsGeneratedClient,
  AmazonConnectFullApiEffectiveHoursOfOperationsGeneratedFunctionNames,
  type AmazonConnectFullApiEffectiveHoursOfOperationsGeneratedClient,
  type AmazonConnectFullApiEffectiveHoursOfOperationsOperationPathParamMap,
  type AmazonConnectFullApiEffectiveHoursOfOperationsOperationRequestMap,
} from "./full-api.generated/client/effective-hours-of-operations-chunk.generated.js";
import {
  createAmazonConnectFullApiEmailAddressesGeneratedClient,
  AmazonConnectFullApiEmailAddressesGeneratedFunctionNames,
  type AmazonConnectFullApiEmailAddressesGeneratedClient,
  type AmazonConnectFullApiEmailAddressesOperationPathParamMap,
  type AmazonConnectFullApiEmailAddressesOperationRequestMap,
} from "./full-api.generated/client/email-addresses-chunk.generated.js";
import {
  createAmazonConnectFullApiEntitySecurityProfilesSummaryGeneratedClient,
  AmazonConnectFullApiEntitySecurityProfilesSummaryGeneratedFunctionNames,
  type AmazonConnectFullApiEntitySecurityProfilesSummaryGeneratedClient,
  type AmazonConnectFullApiEntitySecurityProfilesSummaryOperationPathParamMap,
  type AmazonConnectFullApiEntitySecurityProfilesSummaryOperationRequestMap,
} from "./full-api.generated/client/entity-security-profiles-summary-chunk.generated.js";
import {
  createAmazonConnectFullApiEvaluationFormsGeneratedClient,
  AmazonConnectFullApiEvaluationFormsGeneratedFunctionNames,
  type AmazonConnectFullApiEvaluationFormsGeneratedClient,
  type AmazonConnectFullApiEvaluationFormsOperationPathParamMap,
  type AmazonConnectFullApiEvaluationFormsOperationRequestMap,
} from "./full-api.generated/client/evaluation-forms-chunk.generated.js";
import {
  createAmazonConnectFullApiEventIntegrationsGeneratedClient,
  AmazonConnectFullApiEventIntegrationsGeneratedFunctionNames,
  type AmazonConnectFullApiEventIntegrationsGeneratedClient,
  type AmazonConnectFullApiEventIntegrationsOperationPathParamMap,
  type AmazonConnectFullApiEventIntegrationsOperationRequestMap,
} from "./full-api.generated/client/event-integrations-chunk.generated.js";
import {
  createAmazonConnectFullApiFlowAssociationsGeneratedClient,
  AmazonConnectFullApiFlowAssociationsGeneratedFunctionNames,
  type AmazonConnectFullApiFlowAssociationsGeneratedClient,
  type AmazonConnectFullApiFlowAssociationsOperationPathParamMap,
  type AmazonConnectFullApiFlowAssociationsOperationRequestMap,
} from "./full-api.generated/client/flow-associations-chunk.generated.js";
import {
  createAmazonConnectFullApiFlowAssociationsBatchGeneratedClient,
  AmazonConnectFullApiFlowAssociationsBatchGeneratedFunctionNames,
  type AmazonConnectFullApiFlowAssociationsBatchGeneratedClient,
  type AmazonConnectFullApiFlowAssociationsBatchOperationPathParamMap,
  type AmazonConnectFullApiFlowAssociationsBatchOperationRequestMap,
} from "./full-api.generated/client/flow-associations-batch-chunk.generated.js";
import {
  createAmazonConnectFullApiFlowAssociationsSummaryGeneratedClient,
  AmazonConnectFullApiFlowAssociationsSummaryGeneratedFunctionNames,
  type AmazonConnectFullApiFlowAssociationsSummaryGeneratedClient,
  type AmazonConnectFullApiFlowAssociationsSummaryOperationPathParamMap,
  type AmazonConnectFullApiFlowAssociationsSummaryOperationRequestMap,
} from "./full-api.generated/client/flow-associations-summary-chunk.generated.js";
import {
  createAmazonConnectFullApiHoursOfOperationsGeneratedClient,
  AmazonConnectFullApiHoursOfOperationsGeneratedFunctionNames,
  type AmazonConnectFullApiHoursOfOperationsGeneratedClient,
  type AmazonConnectFullApiHoursOfOperationsOperationPathParamMap,
  type AmazonConnectFullApiHoursOfOperationsOperationRequestMap,
} from "./full-api.generated/client/hours-of-operations-chunk.generated.js";
import {
  createAmazonConnectFullApiHoursOfOperationsSummaryGeneratedClient,
  AmazonConnectFullApiHoursOfOperationsSummaryGeneratedFunctionNames,
  type AmazonConnectFullApiHoursOfOperationsSummaryGeneratedClient,
  type AmazonConnectFullApiHoursOfOperationsSummaryOperationPathParamMap,
  type AmazonConnectFullApiHoursOfOperationsSummaryOperationRequestMap,
} from "./full-api.generated/client/hours-of-operations-summary-chunk.generated.js";
import {
  createAmazonConnectFullApiInstanceGeneratedClient,
  AmazonConnectFullApiInstanceGeneratedFunctionNames,
  type AmazonConnectFullApiInstanceGeneratedClient,
  type AmazonConnectFullApiInstanceOperationPathParamMap,
  type AmazonConnectFullApiInstanceOperationRequestMap,
} from "./full-api.generated/client/instance-chunk.generated.js";
import {
  createAmazonConnectFullApiIntegrationsGeneratedClient,
  AmazonConnectFullApiIntegrationsGeneratedFunctionNames,
  type AmazonConnectFullApiIntegrationsGeneratedClient,
  type AmazonConnectFullApiIntegrationsOperationPathParamMap,
  type AmazonConnectFullApiIntegrationsOperationRequestMap,
} from "./full-api.generated/client/integrations-chunk.generated.js";
import {
  createAmazonConnectFullApiKnowledgeBasesGeneratedClient,
  AmazonConnectFullApiKnowledgeBasesGeneratedFunctionNames,
  type AmazonConnectFullApiKnowledgeBasesGeneratedClient,
  type AmazonConnectFullApiKnowledgeBasesOperationPathParamMap,
  type AmazonConnectFullApiKnowledgeBasesOperationRequestMap,
} from "./full-api.generated/client/knowledge-bases-chunk.generated.js";
import {
  createAmazonConnectFullApiMedicalScribeStreamGeneratedClient,
  AmazonConnectFullApiMedicalScribeStreamGeneratedFunctionNames,
  type AmazonConnectFullApiMedicalScribeStreamGeneratedClient,
  type AmazonConnectFullApiMedicalScribeStreamOperationPathParamMap,
  type AmazonConnectFullApiMedicalScribeStreamOperationRequestMap,
} from "./full-api.generated/client/medical-scribe-stream-chunk.generated.js";
import {
  createAmazonConnectFullApiMetricsGeneratedClient,
  AmazonConnectFullApiMetricsGeneratedFunctionNames,
  type AmazonConnectFullApiMetricsGeneratedClient,
  type AmazonConnectFullApiMetricsOperationPathParamMap,
  type AmazonConnectFullApiMetricsOperationRequestMap,
} from "./full-api.generated/client/metrics-chunk.generated.js";
import {
  createAmazonConnectFullApiNotificationsGeneratedClient,
  AmazonConnectFullApiNotificationsGeneratedFunctionNames,
  type AmazonConnectFullApiNotificationsGeneratedClient,
  type AmazonConnectFullApiNotificationsOperationPathParamMap,
  type AmazonConnectFullApiNotificationsOperationRequestMap,
} from "./full-api.generated/client/notifications-chunk.generated.js";
import {
  createAmazonConnectFullApiParticipantGeneratedClient,
  AmazonConnectFullApiParticipantGeneratedFunctionNames,
  type AmazonConnectFullApiParticipantGeneratedClient,
  type AmazonConnectFullApiParticipantOperationPathParamMap,
  type AmazonConnectFullApiParticipantOperationRequestMap,
} from "./full-api.generated/client/participant-chunk.generated.js";
import {
  createAmazonConnectFullApiPhoneNumberGeneratedClient,
  AmazonConnectFullApiPhoneNumberGeneratedFunctionNames,
  type AmazonConnectFullApiPhoneNumberGeneratedClient,
  type AmazonConnectFullApiPhoneNumberOperationPathParamMap,
  type AmazonConnectFullApiPhoneNumberOperationRequestMap,
} from "./full-api.generated/client/phone-number-chunk.generated.js";
import {
  createAmazonConnectFullApiPhoneNumbersSummaryGeneratedClient,
  AmazonConnectFullApiPhoneNumbersSummaryGeneratedFunctionNames,
  type AmazonConnectFullApiPhoneNumbersSummaryGeneratedClient,
  type AmazonConnectFullApiPhoneNumbersSummaryOperationPathParamMap,
  type AmazonConnectFullApiPhoneNumbersSummaryOperationRequestMap,
} from "./full-api.generated/client/phone-numbers-summary-chunk.generated.js";
import {
  createAmazonConnectFullApiPredefinedAttributesGeneratedClient,
  AmazonConnectFullApiPredefinedAttributesGeneratedFunctionNames,
  type AmazonConnectFullApiPredefinedAttributesGeneratedClient,
  type AmazonConnectFullApiPredefinedAttributesOperationPathParamMap,
  type AmazonConnectFullApiPredefinedAttributesOperationRequestMap,
} from "./full-api.generated/client/predefined-attributes-chunk.generated.js";
import {
  createAmazonConnectFullApiPromptsGeneratedClient,
  AmazonConnectFullApiPromptsGeneratedFunctionNames,
  type AmazonConnectFullApiPromptsGeneratedClient,
  type AmazonConnectFullApiPromptsOperationPathParamMap,
  type AmazonConnectFullApiPromptsOperationRequestMap,
} from "./full-api.generated/client/prompts-chunk.generated.js";
import {
  createAmazonConnectFullApiPromptsSummaryGeneratedClient,
  AmazonConnectFullApiPromptsSummaryGeneratedFunctionNames,
  type AmazonConnectFullApiPromptsSummaryGeneratedClient,
  type AmazonConnectFullApiPromptsSummaryOperationPathParamMap,
  type AmazonConnectFullApiPromptsSummaryOperationRequestMap,
} from "./full-api.generated/client/prompts-summary-chunk.generated.js";
import {
  createAmazonConnectFullApiPushNotificationGeneratedClient,
  AmazonConnectFullApiPushNotificationGeneratedFunctionNames,
  type AmazonConnectFullApiPushNotificationGeneratedClient,
  type AmazonConnectFullApiPushNotificationOperationPathParamMap,
  type AmazonConnectFullApiPushNotificationOperationRequestMap,
} from "./full-api.generated/client/push-notification-chunk.generated.js";
import {
  createAmazonConnectFullApiQueuesGeneratedClient,
  AmazonConnectFullApiQueuesGeneratedFunctionNames,
  type AmazonConnectFullApiQueuesGeneratedClient,
  type AmazonConnectFullApiQueuesOperationPathParamMap,
  type AmazonConnectFullApiQueuesOperationRequestMap,
} from "./full-api.generated/client/queues-chunk.generated.js";
import {
  createAmazonConnectFullApiQueuesSummaryGeneratedClient,
  AmazonConnectFullApiQueuesSummaryGeneratedFunctionNames,
  type AmazonConnectFullApiQueuesSummaryGeneratedClient,
  type AmazonConnectFullApiQueuesSummaryOperationPathParamMap,
  type AmazonConnectFullApiQueuesSummaryOperationRequestMap,
} from "./full-api.generated/client/queues-summary-chunk.generated.js";
import {
  createAmazonConnectFullApiQuickConnectsGeneratedClient,
  AmazonConnectFullApiQuickConnectsGeneratedFunctionNames,
  type AmazonConnectFullApiQuickConnectsGeneratedClient,
  type AmazonConnectFullApiQuickConnectsOperationPathParamMap,
  type AmazonConnectFullApiQuickConnectsOperationRequestMap,
} from "./full-api.generated/client/quick-connects-chunk.generated.js";
import {
  createAmazonConnectFullApiRealtimeContactAnalysisGeneratedClient,
  AmazonConnectFullApiRealtimeContactAnalysisGeneratedFunctionNames,
  type AmazonConnectFullApiRealtimeContactAnalysisGeneratedClient,
  type AmazonConnectFullApiRealtimeContactAnalysisOperationPathParamMap,
  type AmazonConnectFullApiRealtimeContactAnalysisOperationRequestMap,
} from "./full-api.generated/client/realtime-contact-analysis-chunk.generated.js";
import {
  createAmazonConnectFullApiRecommenderRecipesGeneratedClient,
  AmazonConnectFullApiRecommenderRecipesGeneratedFunctionNames,
  type AmazonConnectFullApiRecommenderRecipesGeneratedClient,
  type AmazonConnectFullApiRecommenderRecipesOperationPathParamMap,
  type AmazonConnectFullApiRecommenderRecipesOperationRequestMap,
} from "./full-api.generated/client/recommender-recipes-chunk.generated.js";
import {
  createAmazonConnectFullApiRoutingProfilesGeneratedClient,
  AmazonConnectFullApiRoutingProfilesGeneratedFunctionNames,
  type AmazonConnectFullApiRoutingProfilesGeneratedClient,
  type AmazonConnectFullApiRoutingProfilesOperationPathParamMap,
  type AmazonConnectFullApiRoutingProfilesOperationRequestMap,
} from "./full-api.generated/client/routing-profiles-chunk.generated.js";
import {
  createAmazonConnectFullApiRoutingProfilesSummaryGeneratedClient,
  AmazonConnectFullApiRoutingProfilesSummaryGeneratedFunctionNames,
  type AmazonConnectFullApiRoutingProfilesSummaryGeneratedClient,
  type AmazonConnectFullApiRoutingProfilesSummaryOperationPathParamMap,
  type AmazonConnectFullApiRoutingProfilesSummaryOperationRequestMap,
} from "./full-api.generated/client/routing-profiles-summary-chunk.generated.js";
import {
  createAmazonConnectFullApiRulesGeneratedClient,
  AmazonConnectFullApiRulesGeneratedFunctionNames,
  type AmazonConnectFullApiRulesGeneratedClient,
  type AmazonConnectFullApiRulesOperationPathParamMap,
  type AmazonConnectFullApiRulesOperationRequestMap,
} from "./full-api.generated/client/rules-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchAgentStatusesGeneratedClient,
  AmazonConnectFullApiSearchAgentStatusesGeneratedFunctionNames,
  type AmazonConnectFullApiSearchAgentStatusesGeneratedClient,
  type AmazonConnectFullApiSearchAgentStatusesOperationPathParamMap,
  type AmazonConnectFullApiSearchAgentStatusesOperationRequestMap,
} from "./full-api.generated/client/search-agent-statuses-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchContactEvaluationsGeneratedClient,
  AmazonConnectFullApiSearchContactEvaluationsGeneratedFunctionNames,
  type AmazonConnectFullApiSearchContactEvaluationsGeneratedClient,
  type AmazonConnectFullApiSearchContactEvaluationsOperationPathParamMap,
  type AmazonConnectFullApiSearchContactEvaluationsOperationRequestMap,
} from "./full-api.generated/client/search-contact-evaluations-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchContactFlowModulesGeneratedClient,
  AmazonConnectFullApiSearchContactFlowModulesGeneratedFunctionNames,
  type AmazonConnectFullApiSearchContactFlowModulesGeneratedClient,
  type AmazonConnectFullApiSearchContactFlowModulesOperationPathParamMap,
  type AmazonConnectFullApiSearchContactFlowModulesOperationRequestMap,
} from "./full-api.generated/client/search-contact-flow-modules-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchContactFlowsGeneratedClient,
  AmazonConnectFullApiSearchContactFlowsGeneratedFunctionNames,
  type AmazonConnectFullApiSearchContactFlowsGeneratedClient,
  type AmazonConnectFullApiSearchContactFlowsOperationPathParamMap,
  type AmazonConnectFullApiSearchContactFlowsOperationRequestMap,
} from "./full-api.generated/client/search-contact-flows-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchContactsGeneratedClient,
  AmazonConnectFullApiSearchContactsGeneratedFunctionNames,
  type AmazonConnectFullApiSearchContactsGeneratedClient,
  type AmazonConnectFullApiSearchContactsOperationPathParamMap,
  type AmazonConnectFullApiSearchContactsOperationRequestMap,
} from "./full-api.generated/client/search-contacts-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchDataTablesGeneratedClient,
  AmazonConnectFullApiSearchDataTablesGeneratedFunctionNames,
  type AmazonConnectFullApiSearchDataTablesGeneratedClient,
  type AmazonConnectFullApiSearchDataTablesOperationPathParamMap,
  type AmazonConnectFullApiSearchDataTablesOperationRequestMap,
} from "./full-api.generated/client/search-data-tables-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchEmailAddressesGeneratedClient,
  AmazonConnectFullApiSearchEmailAddressesGeneratedFunctionNames,
  type AmazonConnectFullApiSearchEmailAddressesGeneratedClient,
  type AmazonConnectFullApiSearchEmailAddressesOperationPathParamMap,
  type AmazonConnectFullApiSearchEmailAddressesOperationRequestMap,
} from "./full-api.generated/client/search-email-addresses-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchEvaluationFormsGeneratedClient,
  AmazonConnectFullApiSearchEvaluationFormsGeneratedFunctionNames,
  type AmazonConnectFullApiSearchEvaluationFormsGeneratedClient,
  type AmazonConnectFullApiSearchEvaluationFormsOperationPathParamMap,
  type AmazonConnectFullApiSearchEvaluationFormsOperationRequestMap,
} from "./full-api.generated/client/search-evaluation-forms-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchHoursOfOperationOverridesGeneratedClient,
  AmazonConnectFullApiSearchHoursOfOperationOverridesGeneratedFunctionNames,
  type AmazonConnectFullApiSearchHoursOfOperationOverridesGeneratedClient,
  type AmazonConnectFullApiSearchHoursOfOperationOverridesOperationPathParamMap,
  type AmazonConnectFullApiSearchHoursOfOperationOverridesOperationRequestMap,
} from "./full-api.generated/client/search-hours-of-operation-overrides-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchHoursOfOperationsGeneratedClient,
  AmazonConnectFullApiSearchHoursOfOperationsGeneratedFunctionNames,
  type AmazonConnectFullApiSearchHoursOfOperationsGeneratedClient,
  type AmazonConnectFullApiSearchHoursOfOperationsOperationPathParamMap,
  type AmazonConnectFullApiSearchHoursOfOperationsOperationRequestMap,
} from "./full-api.generated/client/search-hours-of-operations-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchNotificationsGeneratedClient,
  AmazonConnectFullApiSearchNotificationsGeneratedFunctionNames,
  type AmazonConnectFullApiSearchNotificationsGeneratedClient,
  type AmazonConnectFullApiSearchNotificationsOperationPathParamMap,
  type AmazonConnectFullApiSearchNotificationsOperationRequestMap,
} from "./full-api.generated/client/search-notifications-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchPredefinedAttributesGeneratedClient,
  AmazonConnectFullApiSearchPredefinedAttributesGeneratedFunctionNames,
  type AmazonConnectFullApiSearchPredefinedAttributesGeneratedClient,
  type AmazonConnectFullApiSearchPredefinedAttributesOperationPathParamMap,
  type AmazonConnectFullApiSearchPredefinedAttributesOperationRequestMap,
} from "./full-api.generated/client/search-predefined-attributes-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchPromptsGeneratedClient,
  AmazonConnectFullApiSearchPromptsGeneratedFunctionNames,
  type AmazonConnectFullApiSearchPromptsGeneratedClient,
  type AmazonConnectFullApiSearchPromptsOperationPathParamMap,
  type AmazonConnectFullApiSearchPromptsOperationRequestMap,
} from "./full-api.generated/client/search-prompts-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchQueuesGeneratedClient,
  AmazonConnectFullApiSearchQueuesGeneratedFunctionNames,
  type AmazonConnectFullApiSearchQueuesGeneratedClient,
  type AmazonConnectFullApiSearchQueuesOperationPathParamMap,
  type AmazonConnectFullApiSearchQueuesOperationRequestMap,
} from "./full-api.generated/client/search-queues-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchQuickConnectsGeneratedClient,
  AmazonConnectFullApiSearchQuickConnectsGeneratedFunctionNames,
  type AmazonConnectFullApiSearchQuickConnectsGeneratedClient,
  type AmazonConnectFullApiSearchQuickConnectsOperationPathParamMap,
  type AmazonConnectFullApiSearchQuickConnectsOperationRequestMap,
} from "./full-api.generated/client/search-quick-connects-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchResourceTagsGeneratedClient,
  AmazonConnectFullApiSearchResourceTagsGeneratedFunctionNames,
  type AmazonConnectFullApiSearchResourceTagsGeneratedClient,
  type AmazonConnectFullApiSearchResourceTagsOperationPathParamMap,
  type AmazonConnectFullApiSearchResourceTagsOperationRequestMap,
} from "./full-api.generated/client/search-resource-tags-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchRoutingProfilesGeneratedClient,
  AmazonConnectFullApiSearchRoutingProfilesGeneratedFunctionNames,
  type AmazonConnectFullApiSearchRoutingProfilesGeneratedClient,
  type AmazonConnectFullApiSearchRoutingProfilesOperationPathParamMap,
  type AmazonConnectFullApiSearchRoutingProfilesOperationRequestMap,
} from "./full-api.generated/client/search-routing-profiles-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchSecurityProfilesGeneratedClient,
  AmazonConnectFullApiSearchSecurityProfilesGeneratedFunctionNames,
  type AmazonConnectFullApiSearchSecurityProfilesGeneratedClient,
  type AmazonConnectFullApiSearchSecurityProfilesOperationPathParamMap,
  type AmazonConnectFullApiSearchSecurityProfilesOperationRequestMap,
} from "./full-api.generated/client/search-security-profiles-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchTestCasesGeneratedClient,
  AmazonConnectFullApiSearchTestCasesGeneratedFunctionNames,
  type AmazonConnectFullApiSearchTestCasesGeneratedClient,
  type AmazonConnectFullApiSearchTestCasesOperationPathParamMap,
  type AmazonConnectFullApiSearchTestCasesOperationRequestMap,
} from "./full-api.generated/client/search-test-cases-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchUserHierarchyGroupsGeneratedClient,
  AmazonConnectFullApiSearchUserHierarchyGroupsGeneratedFunctionNames,
  type AmazonConnectFullApiSearchUserHierarchyGroupsGeneratedClient,
  type AmazonConnectFullApiSearchUserHierarchyGroupsOperationPathParamMap,
  type AmazonConnectFullApiSearchUserHierarchyGroupsOperationRequestMap,
} from "./full-api.generated/client/search-user-hierarchy-groups-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchUsersGeneratedClient,
  AmazonConnectFullApiSearchUsersGeneratedFunctionNames,
  type AmazonConnectFullApiSearchUsersGeneratedClient,
  type AmazonConnectFullApiSearchUsersOperationPathParamMap,
  type AmazonConnectFullApiSearchUsersOperationRequestMap,
} from "./full-api.generated/client/search-users-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchViewsGeneratedClient,
  AmazonConnectFullApiSearchViewsGeneratedFunctionNames,
  type AmazonConnectFullApiSearchViewsGeneratedClient,
  type AmazonConnectFullApiSearchViewsOperationPathParamMap,
  type AmazonConnectFullApiSearchViewsOperationRequestMap,
} from "./full-api.generated/client/search-views-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchWorkspaceAssociationsGeneratedClient,
  AmazonConnectFullApiSearchWorkspaceAssociationsGeneratedFunctionNames,
  type AmazonConnectFullApiSearchWorkspaceAssociationsGeneratedClient,
  type AmazonConnectFullApiSearchWorkspaceAssociationsOperationPathParamMap,
  type AmazonConnectFullApiSearchWorkspaceAssociationsOperationRequestMap,
} from "./full-api.generated/client/search-workspace-associations-chunk.generated.js";
import {
  createAmazonConnectFullApiSearchWorkspacesGeneratedClient,
  AmazonConnectFullApiSearchWorkspacesGeneratedFunctionNames,
  type AmazonConnectFullApiSearchWorkspacesGeneratedClient,
  type AmazonConnectFullApiSearchWorkspacesOperationPathParamMap,
  type AmazonConnectFullApiSearchWorkspacesOperationRequestMap,
} from "./full-api.generated/client/search-workspaces-chunk.generated.js";
import {
  createAmazonConnectFullApiSecurityProfilesGeneratedClient,
  AmazonConnectFullApiSecurityProfilesGeneratedFunctionNames,
  type AmazonConnectFullApiSecurityProfilesGeneratedClient,
  type AmazonConnectFullApiSecurityProfilesOperationPathParamMap,
  type AmazonConnectFullApiSecurityProfilesOperationRequestMap,
} from "./full-api.generated/client/security-profiles-chunk.generated.js";
import {
  createAmazonConnectFullApiSecurityProfilesApplicationsGeneratedClient,
  AmazonConnectFullApiSecurityProfilesApplicationsGeneratedFunctionNames,
  type AmazonConnectFullApiSecurityProfilesApplicationsGeneratedClient,
  type AmazonConnectFullApiSecurityProfilesApplicationsOperationPathParamMap,
  type AmazonConnectFullApiSecurityProfilesApplicationsOperationRequestMap,
} from "./full-api.generated/client/security-profiles-applications-chunk.generated.js";
import {
  createAmazonConnectFullApiSecurityProfilesFlowModulesGeneratedClient,
  AmazonConnectFullApiSecurityProfilesFlowModulesGeneratedFunctionNames,
  type AmazonConnectFullApiSecurityProfilesFlowModulesGeneratedClient,
  type AmazonConnectFullApiSecurityProfilesFlowModulesOperationPathParamMap,
  type AmazonConnectFullApiSecurityProfilesFlowModulesOperationRequestMap,
} from "./full-api.generated/client/security-profiles-flow-modules-chunk.generated.js";
import {
  createAmazonConnectFullApiSecurityProfilesPermissionsGeneratedClient,
  AmazonConnectFullApiSecurityProfilesPermissionsGeneratedFunctionNames,
  type AmazonConnectFullApiSecurityProfilesPermissionsGeneratedClient,
  type AmazonConnectFullApiSecurityProfilesPermissionsOperationPathParamMap,
  type AmazonConnectFullApiSecurityProfilesPermissionsOperationRequestMap,
} from "./full-api.generated/client/security-profiles-permissions-chunk.generated.js";
import {
  createAmazonConnectFullApiSecurityProfilesSummaryGeneratedClient,
  AmazonConnectFullApiSecurityProfilesSummaryGeneratedFunctionNames,
  type AmazonConnectFullApiSecurityProfilesSummaryGeneratedClient,
  type AmazonConnectFullApiSecurityProfilesSummaryOperationPathParamMap,
  type AmazonConnectFullApiSecurityProfilesSummaryOperationRequestMap,
} from "./full-api.generated/client/security-profiles-summary-chunk.generated.js";
import {
  createAmazonConnectFullApiTagsGeneratedClient,
  AmazonConnectFullApiTagsGeneratedFunctionNames,
  type AmazonConnectFullApiTagsGeneratedClient,
  type AmazonConnectFullApiTagsOperationPathParamMap,
  type AmazonConnectFullApiTagsOperationRequestMap,
} from "./full-api.generated/client/tags-chunk.generated.js";
import {
  createAmazonConnectFullApiTemplatesGeneratedClient,
  AmazonConnectFullApiTemplatesGeneratedFunctionNames,
  type AmazonConnectFullApiTemplatesGeneratedClient,
  type AmazonConnectFullApiTemplatesOperationPathParamMap,
  type AmazonConnectFullApiTemplatesOperationRequestMap,
} from "./full-api.generated/client/templates-chunk.generated.js";
import {
  createAmazonConnectFullApiTestCaseExecutionsGeneratedClient,
  AmazonConnectFullApiTestCaseExecutionsGeneratedFunctionNames,
  type AmazonConnectFullApiTestCaseExecutionsGeneratedClient,
  type AmazonConnectFullApiTestCaseExecutionsOperationPathParamMap,
  type AmazonConnectFullApiTestCaseExecutionsOperationRequestMap,
} from "./full-api.generated/client/test-case-executions-chunk.generated.js";
import {
  createAmazonConnectFullApiTestCasesGeneratedClient,
  AmazonConnectFullApiTestCasesGeneratedFunctionNames,
  type AmazonConnectFullApiTestCasesGeneratedClient,
  type AmazonConnectFullApiTestCasesOperationPathParamMap,
  type AmazonConnectFullApiTestCasesOperationRequestMap,
} from "./full-api.generated/client/test-cases-chunk.generated.js";
import {
  createAmazonConnectFullApiTestCasesSummaryGeneratedClient,
  AmazonConnectFullApiTestCasesSummaryGeneratedFunctionNames,
  type AmazonConnectFullApiTestCasesSummaryGeneratedClient,
  type AmazonConnectFullApiTestCasesSummaryOperationPathParamMap,
  type AmazonConnectFullApiTestCasesSummaryOperationRequestMap,
} from "./full-api.generated/client/test-cases-summary-chunk.generated.js";
import {
  createAmazonConnectFullApiTrafficDistributionGeneratedClient,
  AmazonConnectFullApiTrafficDistributionGeneratedFunctionNames,
  type AmazonConnectFullApiTrafficDistributionGeneratedClient,
  type AmazonConnectFullApiTrafficDistributionOperationPathParamMap,
  type AmazonConnectFullApiTrafficDistributionOperationRequestMap,
} from "./full-api.generated/client/traffic-distribution-chunk.generated.js";
import {
  createAmazonConnectFullApiTrafficDistributionGroupGeneratedClient,
  AmazonConnectFullApiTrafficDistributionGroupGeneratedFunctionNames,
  type AmazonConnectFullApiTrafficDistributionGroupGeneratedClient,
  type AmazonConnectFullApiTrafficDistributionGroupOperationPathParamMap,
  type AmazonConnectFullApiTrafficDistributionGroupOperationRequestMap,
} from "./full-api.generated/client/traffic-distribution-group-chunk.generated.js";
import {
  createAmazonConnectFullApiTrafficDistributionGroupsGeneratedClient,
  AmazonConnectFullApiTrafficDistributionGroupsGeneratedFunctionNames,
  type AmazonConnectFullApiTrafficDistributionGroupsGeneratedClient,
  type AmazonConnectFullApiTrafficDistributionGroupsOperationPathParamMap,
  type AmazonConnectFullApiTrafficDistributionGroupsOperationRequestMap,
} from "./full-api.generated/client/traffic-distribution-groups-chunk.generated.js";
import {
  createAmazonConnectFullApiUserGeneratedClient,
  AmazonConnectFullApiUserGeneratedFunctionNames,
  type AmazonConnectFullApiUserGeneratedClient,
  type AmazonConnectFullApiUserOperationPathParamMap,
  type AmazonConnectFullApiUserOperationRequestMap,
} from "./full-api.generated/client/user-chunk.generated.js";
import {
  createAmazonConnectFullApiUserHierarchyGroupsGeneratedClient,
  AmazonConnectFullApiUserHierarchyGroupsGeneratedFunctionNames,
  type AmazonConnectFullApiUserHierarchyGroupsGeneratedClient,
  type AmazonConnectFullApiUserHierarchyGroupsOperationPathParamMap,
  type AmazonConnectFullApiUserHierarchyGroupsOperationRequestMap,
} from "./full-api.generated/client/user-hierarchy-groups-chunk.generated.js";
import {
  createAmazonConnectFullApiUserHierarchyGroupsSummaryGeneratedClient,
  AmazonConnectFullApiUserHierarchyGroupsSummaryGeneratedFunctionNames,
  type AmazonConnectFullApiUserHierarchyGroupsSummaryGeneratedClient,
  type AmazonConnectFullApiUserHierarchyGroupsSummaryOperationPathParamMap,
  type AmazonConnectFullApiUserHierarchyGroupsSummaryOperationRequestMap,
} from "./full-api.generated/client/user-hierarchy-groups-summary-chunk.generated.js";
import {
  createAmazonConnectFullApiUserHierarchyStructureGeneratedClient,
  AmazonConnectFullApiUserHierarchyStructureGeneratedFunctionNames,
  type AmazonConnectFullApiUserHierarchyStructureGeneratedClient,
  type AmazonConnectFullApiUserHierarchyStructureOperationPathParamMap,
  type AmazonConnectFullApiUserHierarchyStructureOperationRequestMap,
} from "./full-api.generated/client/user-hierarchy-structure-chunk.generated.js";
import {
  createAmazonConnectFullApiUsersGeneratedClient,
  AmazonConnectFullApiUsersGeneratedFunctionNames,
  type AmazonConnectFullApiUsersGeneratedClient,
  type AmazonConnectFullApiUsersOperationPathParamMap,
  type AmazonConnectFullApiUsersOperationRequestMap,
} from "./full-api.generated/client/users-chunk.generated.js";
import {
  createAmazonConnectFullApiUsersSummaryGeneratedClient,
  AmazonConnectFullApiUsersSummaryGeneratedFunctionNames,
  type AmazonConnectFullApiUsersSummaryGeneratedClient,
  type AmazonConnectFullApiUsersSummaryOperationPathParamMap,
  type AmazonConnectFullApiUsersSummaryOperationRequestMap,
} from "./full-api.generated/client/users-summary-chunk.generated.js";
import {
  createAmazonConnectFullApiV2GeneratedClient,
  AmazonConnectFullApiV2GeneratedFunctionNames,
  type AmazonConnectFullApiV2GeneratedClient,
  type AmazonConnectFullApiV2OperationPathParamMap,
  type AmazonConnectFullApiV2OperationRequestMap,
} from "./full-api.generated/client/v2-chunk.generated.js";
import {
  createAmazonConnectFullApiViewsGeneratedClient,
  AmazonConnectFullApiViewsGeneratedFunctionNames,
  type AmazonConnectFullApiViewsGeneratedClient,
  type AmazonConnectFullApiViewsOperationPathParamMap,
  type AmazonConnectFullApiViewsOperationRequestMap,
} from "./full-api.generated/client/views-chunk.generated.js";
import {
  createAmazonConnectFullApiVocabularyGeneratedClient,
  AmazonConnectFullApiVocabularyGeneratedFunctionNames,
  type AmazonConnectFullApiVocabularyGeneratedClient,
  type AmazonConnectFullApiVocabularyOperationPathParamMap,
  type AmazonConnectFullApiVocabularyOperationRequestMap,
} from "./full-api.generated/client/vocabulary-chunk.generated.js";
import {
  createAmazonConnectFullApiVocabularyRemoveGeneratedClient,
  AmazonConnectFullApiVocabularyRemoveGeneratedFunctionNames,
  type AmazonConnectFullApiVocabularyRemoveGeneratedClient,
  type AmazonConnectFullApiVocabularyRemoveOperationPathParamMap,
  type AmazonConnectFullApiVocabularyRemoveOperationRequestMap,
} from "./full-api.generated/client/vocabulary-remove-chunk.generated.js";
import {
  createAmazonConnectFullApiVocabularySummaryGeneratedClient,
  AmazonConnectFullApiVocabularySummaryGeneratedFunctionNames,
  type AmazonConnectFullApiVocabularySummaryGeneratedClient,
  type AmazonConnectFullApiVocabularySummaryOperationPathParamMap,
  type AmazonConnectFullApiVocabularySummaryOperationRequestMap,
} from "./full-api.generated/client/vocabulary-summary-chunk.generated.js";
import {
  createAmazonConnectFullApiWorkspacesGeneratedClient,
  AmazonConnectFullApiWorkspacesGeneratedFunctionNames,
  type AmazonConnectFullApiWorkspacesGeneratedClient,
  type AmazonConnectFullApiWorkspacesOperationPathParamMap,
  type AmazonConnectFullApiWorkspacesOperationRequestMap,
} from "./full-api.generated/client/workspaces-chunk.generated.js";

export type AmazonConnectFullApiPathParamValue = string | number;
export interface AmazonConnectFullApiOperationPathParamMap extends AmazonConnectFullApiAgentStatusOperationPathParamMap, AmazonConnectFullApiAnalyticsDataOperationPathParamMap, AmazonConnectFullApiApplicationsOperationPathParamMap, AmazonConnectFullApiAssistantsOperationPathParamMap, AmazonConnectFullApiAssociateSecurityProfilesOperationPathParamMap, AmazonConnectFullApiAttachedFilesOperationPathParamMap, AmazonConnectFullApiAttachedFilesConfigurationsOperationPathParamMap, AmazonConnectFullApiAuthenticationProfilesOperationPathParamMap, AmazonConnectFullApiAuthenticationProfilesSummaryOperationPathParamMap, AmazonConnectFullApiCampaignsOperationPathParamMap, AmazonConnectFullApiCampaignsStateOperationPathParamMap, AmazonConnectFullApiCampaignsSummaryOperationPathParamMap, AmazonConnectFullApiChatIntegrationEventOperationPathParamMap, AmazonConnectFullApiConnectInstanceOperationPathParamMap, AmazonConnectFullApiContactOperationPathParamMap, AmazonConnectFullApiContactEvaluationsOperationPathParamMap, AmazonConnectFullApiContactFlowModulesOperationPathParamMap, AmazonConnectFullApiContactFlowModulesSummaryOperationPathParamMap, AmazonConnectFullApiContactFlowsOperationPathParamMap, AmazonConnectFullApiContactFlowsSummaryOperationPathParamMap, AmazonConnectFullApiContactsOperationPathParamMap, AmazonConnectFullApiDataTablesOperationPathParamMap, AmazonConnectFullApiDataIntegrationsOperationPathParamMap, AmazonConnectFullApiDefaultVocabularyOperationPathParamMap, AmazonConnectFullApiDefaultVocabularySummaryOperationPathParamMap, AmazonConnectFullApiDisassociateSecurityProfilesOperationPathParamMap, AmazonConnectFullApiDomainOperationPathParamMap, AmazonConnectFullApiDomains01OperationPathParamMap, AmazonConnectFullApiDomains02OperationPathParamMap, AmazonConnectFullApiDomainsListOperationPathParamMap, AmazonConnectFullApiEffectiveHoursOfOperationsOperationPathParamMap, AmazonConnectFullApiEmailAddressesOperationPathParamMap, AmazonConnectFullApiEntitySecurityProfilesSummaryOperationPathParamMap, AmazonConnectFullApiEvaluationFormsOperationPathParamMap, AmazonConnectFullApiEventIntegrationsOperationPathParamMap, AmazonConnectFullApiFlowAssociationsOperationPathParamMap, AmazonConnectFullApiFlowAssociationsBatchOperationPathParamMap, AmazonConnectFullApiFlowAssociationsSummaryOperationPathParamMap, AmazonConnectFullApiHoursOfOperationsOperationPathParamMap, AmazonConnectFullApiHoursOfOperationsSummaryOperationPathParamMap, AmazonConnectFullApiInstanceOperationPathParamMap, AmazonConnectFullApiIntegrationsOperationPathParamMap, AmazonConnectFullApiKnowledgeBasesOperationPathParamMap, AmazonConnectFullApiMedicalScribeStreamOperationPathParamMap, AmazonConnectFullApiMetricsOperationPathParamMap, AmazonConnectFullApiNotificationsOperationPathParamMap, AmazonConnectFullApiParticipantOperationPathParamMap, AmazonConnectFullApiPhoneNumberOperationPathParamMap, AmazonConnectFullApiPhoneNumbersSummaryOperationPathParamMap, AmazonConnectFullApiPredefinedAttributesOperationPathParamMap, AmazonConnectFullApiPromptsOperationPathParamMap, AmazonConnectFullApiPromptsSummaryOperationPathParamMap, AmazonConnectFullApiPushNotificationOperationPathParamMap, AmazonConnectFullApiQueuesOperationPathParamMap, AmazonConnectFullApiQueuesSummaryOperationPathParamMap, AmazonConnectFullApiQuickConnectsOperationPathParamMap, AmazonConnectFullApiRealtimeContactAnalysisOperationPathParamMap, AmazonConnectFullApiRecommenderRecipesOperationPathParamMap, AmazonConnectFullApiRoutingProfilesOperationPathParamMap, AmazonConnectFullApiRoutingProfilesSummaryOperationPathParamMap, AmazonConnectFullApiRulesOperationPathParamMap, AmazonConnectFullApiSearchAgentStatusesOperationPathParamMap, AmazonConnectFullApiSearchContactEvaluationsOperationPathParamMap, AmazonConnectFullApiSearchContactFlowModulesOperationPathParamMap, AmazonConnectFullApiSearchContactFlowsOperationPathParamMap, AmazonConnectFullApiSearchContactsOperationPathParamMap, AmazonConnectFullApiSearchDataTablesOperationPathParamMap, AmazonConnectFullApiSearchEmailAddressesOperationPathParamMap, AmazonConnectFullApiSearchEvaluationFormsOperationPathParamMap, AmazonConnectFullApiSearchHoursOfOperationOverridesOperationPathParamMap, AmazonConnectFullApiSearchHoursOfOperationsOperationPathParamMap, AmazonConnectFullApiSearchNotificationsOperationPathParamMap, AmazonConnectFullApiSearchPredefinedAttributesOperationPathParamMap, AmazonConnectFullApiSearchPromptsOperationPathParamMap, AmazonConnectFullApiSearchQueuesOperationPathParamMap, AmazonConnectFullApiSearchQuickConnectsOperationPathParamMap, AmazonConnectFullApiSearchResourceTagsOperationPathParamMap, AmazonConnectFullApiSearchRoutingProfilesOperationPathParamMap, AmazonConnectFullApiSearchSecurityProfilesOperationPathParamMap, AmazonConnectFullApiSearchTestCasesOperationPathParamMap, AmazonConnectFullApiSearchUserHierarchyGroupsOperationPathParamMap, AmazonConnectFullApiSearchUsersOperationPathParamMap, AmazonConnectFullApiSearchViewsOperationPathParamMap, AmazonConnectFullApiSearchWorkspaceAssociationsOperationPathParamMap, AmazonConnectFullApiSearchWorkspacesOperationPathParamMap, AmazonConnectFullApiSecurityProfilesOperationPathParamMap, AmazonConnectFullApiSecurityProfilesApplicationsOperationPathParamMap, AmazonConnectFullApiSecurityProfilesFlowModulesOperationPathParamMap, AmazonConnectFullApiSecurityProfilesPermissionsOperationPathParamMap, AmazonConnectFullApiSecurityProfilesSummaryOperationPathParamMap, AmazonConnectFullApiTagsOperationPathParamMap, AmazonConnectFullApiTemplatesOperationPathParamMap, AmazonConnectFullApiTestCaseExecutionsOperationPathParamMap, AmazonConnectFullApiTestCasesOperationPathParamMap, AmazonConnectFullApiTestCasesSummaryOperationPathParamMap, AmazonConnectFullApiTrafficDistributionOperationPathParamMap, AmazonConnectFullApiTrafficDistributionGroupOperationPathParamMap, AmazonConnectFullApiTrafficDistributionGroupsOperationPathParamMap, AmazonConnectFullApiUserOperationPathParamMap, AmazonConnectFullApiUserHierarchyGroupsOperationPathParamMap, AmazonConnectFullApiUserHierarchyGroupsSummaryOperationPathParamMap, AmazonConnectFullApiUserHierarchyStructureOperationPathParamMap, AmazonConnectFullApiUsersOperationPathParamMap, AmazonConnectFullApiUsersSummaryOperationPathParamMap, AmazonConnectFullApiV2OperationPathParamMap, AmazonConnectFullApiViewsOperationPathParamMap, AmazonConnectFullApiVocabularyOperationPathParamMap, AmazonConnectFullApiVocabularyRemoveOperationPathParamMap, AmazonConnectFullApiVocabularySummaryOperationPathParamMap, AmazonConnectFullApiWorkspacesOperationPathParamMap {}

export type AmazonConnectFullApiOperationKey = keyof AmazonConnectFullApiOperationPathParamMap & string;

export type AmazonConnectFullApiOperationQueryInput<OperationKey extends AmazonConnectFullApiOperationKey> =
  AmazonConnectFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: AmazonConnectFullApiOperationQueryMap[OperationKey] }
    : { query?: AmazonConnectFullApiOperationQueryMap[OperationKey] };

export type AmazonConnectFullApiOperationBodyInput<OperationKey extends AmazonConnectFullApiOperationKey> =
  [AmazonConnectFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : AmazonConnectFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: AmazonConnectFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: AmazonConnectFullApiOperationRequestBodyMap[OperationKey] };

export type AmazonConnectFullApiOperationInput<OperationKey extends AmazonConnectFullApiOperationKey> = Omit<AmazonConnectOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends AmazonConnectFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: AmazonConnectFullApiOperationPathParamMap[OperationKey] }
) & AmazonConnectFullApiOperationQueryInput<OperationKey> & AmazonConnectFullApiOperationBodyInput<OperationKey>;

export interface AmazonConnectFullApiOperationRequestMap extends AmazonConnectFullApiAgentStatusOperationRequestMap, AmazonConnectFullApiAnalyticsDataOperationRequestMap, AmazonConnectFullApiApplicationsOperationRequestMap, AmazonConnectFullApiAssistantsOperationRequestMap, AmazonConnectFullApiAssociateSecurityProfilesOperationRequestMap, AmazonConnectFullApiAttachedFilesOperationRequestMap, AmazonConnectFullApiAttachedFilesConfigurationsOperationRequestMap, AmazonConnectFullApiAuthenticationProfilesOperationRequestMap, AmazonConnectFullApiAuthenticationProfilesSummaryOperationRequestMap, AmazonConnectFullApiCampaignsOperationRequestMap, AmazonConnectFullApiCampaignsStateOperationRequestMap, AmazonConnectFullApiCampaignsSummaryOperationRequestMap, AmazonConnectFullApiChatIntegrationEventOperationRequestMap, AmazonConnectFullApiConnectInstanceOperationRequestMap, AmazonConnectFullApiContactOperationRequestMap, AmazonConnectFullApiContactEvaluationsOperationRequestMap, AmazonConnectFullApiContactFlowModulesOperationRequestMap, AmazonConnectFullApiContactFlowModulesSummaryOperationRequestMap, AmazonConnectFullApiContactFlowsOperationRequestMap, AmazonConnectFullApiContactFlowsSummaryOperationRequestMap, AmazonConnectFullApiContactsOperationRequestMap, AmazonConnectFullApiDataTablesOperationRequestMap, AmazonConnectFullApiDataIntegrationsOperationRequestMap, AmazonConnectFullApiDefaultVocabularyOperationRequestMap, AmazonConnectFullApiDefaultVocabularySummaryOperationRequestMap, AmazonConnectFullApiDisassociateSecurityProfilesOperationRequestMap, AmazonConnectFullApiDomainOperationRequestMap, AmazonConnectFullApiDomains01OperationRequestMap, AmazonConnectFullApiDomains02OperationRequestMap, AmazonConnectFullApiDomainsListOperationRequestMap, AmazonConnectFullApiEffectiveHoursOfOperationsOperationRequestMap, AmazonConnectFullApiEmailAddressesOperationRequestMap, AmazonConnectFullApiEntitySecurityProfilesSummaryOperationRequestMap, AmazonConnectFullApiEvaluationFormsOperationRequestMap, AmazonConnectFullApiEventIntegrationsOperationRequestMap, AmazonConnectFullApiFlowAssociationsOperationRequestMap, AmazonConnectFullApiFlowAssociationsBatchOperationRequestMap, AmazonConnectFullApiFlowAssociationsSummaryOperationRequestMap, AmazonConnectFullApiHoursOfOperationsOperationRequestMap, AmazonConnectFullApiHoursOfOperationsSummaryOperationRequestMap, AmazonConnectFullApiInstanceOperationRequestMap, AmazonConnectFullApiIntegrationsOperationRequestMap, AmazonConnectFullApiKnowledgeBasesOperationRequestMap, AmazonConnectFullApiMedicalScribeStreamOperationRequestMap, AmazonConnectFullApiMetricsOperationRequestMap, AmazonConnectFullApiNotificationsOperationRequestMap, AmazonConnectFullApiParticipantOperationRequestMap, AmazonConnectFullApiPhoneNumberOperationRequestMap, AmazonConnectFullApiPhoneNumbersSummaryOperationRequestMap, AmazonConnectFullApiPredefinedAttributesOperationRequestMap, AmazonConnectFullApiPromptsOperationRequestMap, AmazonConnectFullApiPromptsSummaryOperationRequestMap, AmazonConnectFullApiPushNotificationOperationRequestMap, AmazonConnectFullApiQueuesOperationRequestMap, AmazonConnectFullApiQueuesSummaryOperationRequestMap, AmazonConnectFullApiQuickConnectsOperationRequestMap, AmazonConnectFullApiRealtimeContactAnalysisOperationRequestMap, AmazonConnectFullApiRecommenderRecipesOperationRequestMap, AmazonConnectFullApiRoutingProfilesOperationRequestMap, AmazonConnectFullApiRoutingProfilesSummaryOperationRequestMap, AmazonConnectFullApiRulesOperationRequestMap, AmazonConnectFullApiSearchAgentStatusesOperationRequestMap, AmazonConnectFullApiSearchContactEvaluationsOperationRequestMap, AmazonConnectFullApiSearchContactFlowModulesOperationRequestMap, AmazonConnectFullApiSearchContactFlowsOperationRequestMap, AmazonConnectFullApiSearchContactsOperationRequestMap, AmazonConnectFullApiSearchDataTablesOperationRequestMap, AmazonConnectFullApiSearchEmailAddressesOperationRequestMap, AmazonConnectFullApiSearchEvaluationFormsOperationRequestMap, AmazonConnectFullApiSearchHoursOfOperationOverridesOperationRequestMap, AmazonConnectFullApiSearchHoursOfOperationsOperationRequestMap, AmazonConnectFullApiSearchNotificationsOperationRequestMap, AmazonConnectFullApiSearchPredefinedAttributesOperationRequestMap, AmazonConnectFullApiSearchPromptsOperationRequestMap, AmazonConnectFullApiSearchQueuesOperationRequestMap, AmazonConnectFullApiSearchQuickConnectsOperationRequestMap, AmazonConnectFullApiSearchResourceTagsOperationRequestMap, AmazonConnectFullApiSearchRoutingProfilesOperationRequestMap, AmazonConnectFullApiSearchSecurityProfilesOperationRequestMap, AmazonConnectFullApiSearchTestCasesOperationRequestMap, AmazonConnectFullApiSearchUserHierarchyGroupsOperationRequestMap, AmazonConnectFullApiSearchUsersOperationRequestMap, AmazonConnectFullApiSearchViewsOperationRequestMap, AmazonConnectFullApiSearchWorkspaceAssociationsOperationRequestMap, AmazonConnectFullApiSearchWorkspacesOperationRequestMap, AmazonConnectFullApiSecurityProfilesOperationRequestMap, AmazonConnectFullApiSecurityProfilesApplicationsOperationRequestMap, AmazonConnectFullApiSecurityProfilesFlowModulesOperationRequestMap, AmazonConnectFullApiSecurityProfilesPermissionsOperationRequestMap, AmazonConnectFullApiSecurityProfilesSummaryOperationRequestMap, AmazonConnectFullApiTagsOperationRequestMap, AmazonConnectFullApiTemplatesOperationRequestMap, AmazonConnectFullApiTestCaseExecutionsOperationRequestMap, AmazonConnectFullApiTestCasesOperationRequestMap, AmazonConnectFullApiTestCasesSummaryOperationRequestMap, AmazonConnectFullApiTrafficDistributionOperationRequestMap, AmazonConnectFullApiTrafficDistributionGroupOperationRequestMap, AmazonConnectFullApiTrafficDistributionGroupsOperationRequestMap, AmazonConnectFullApiUserOperationRequestMap, AmazonConnectFullApiUserHierarchyGroupsOperationRequestMap, AmazonConnectFullApiUserHierarchyGroupsSummaryOperationRequestMap, AmazonConnectFullApiUserHierarchyStructureOperationRequestMap, AmazonConnectFullApiUsersOperationRequestMap, AmazonConnectFullApiUsersSummaryOperationRequestMap, AmazonConnectFullApiV2OperationRequestMap, AmazonConnectFullApiViewsOperationRequestMap, AmazonConnectFullApiVocabularyOperationRequestMap, AmazonConnectFullApiVocabularyRemoveOperationRequestMap, AmazonConnectFullApiVocabularySummaryOperationRequestMap, AmazonConnectFullApiWorkspacesOperationRequestMap {}

export type AmazonConnectFullApiOperationArgs<OperationKey extends AmazonConnectFullApiOperationKey> = {} extends AmazonConnectFullApiOperationPathParamMap[OperationKey]
  ? [input?: AmazonConnectFullApiOperationRequestMap[OperationKey]]
  : [input: AmazonConnectFullApiOperationRequestMap[OperationKey]];

export type AmazonConnectGeneratedOperationCaller = <OperationKey extends AmazonConnectFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: AmazonConnectFullApiOperationArgs<OperationKey>
) => Promise<AmazonConnectFullApiOperationResponseMap[OperationKey]>;

export interface AmazonConnectFullApiGeneratedClient extends AmazonConnectFullApiAgentStatusGeneratedClient, AmazonConnectFullApiAnalyticsDataGeneratedClient, AmazonConnectFullApiApplicationsGeneratedClient, AmazonConnectFullApiAssistantsGeneratedClient, AmazonConnectFullApiAssociateSecurityProfilesGeneratedClient, AmazonConnectFullApiAttachedFilesGeneratedClient, AmazonConnectFullApiAttachedFilesConfigurationsGeneratedClient, AmazonConnectFullApiAuthenticationProfilesGeneratedClient, AmazonConnectFullApiAuthenticationProfilesSummaryGeneratedClient, AmazonConnectFullApiCampaignsGeneratedClient, AmazonConnectFullApiCampaignsStateGeneratedClient, AmazonConnectFullApiCampaignsSummaryGeneratedClient, AmazonConnectFullApiChatIntegrationEventGeneratedClient, AmazonConnectFullApiConnectInstanceGeneratedClient, AmazonConnectFullApiContactGeneratedClient, AmazonConnectFullApiContactEvaluationsGeneratedClient, AmazonConnectFullApiContactFlowModulesGeneratedClient, AmazonConnectFullApiContactFlowModulesSummaryGeneratedClient, AmazonConnectFullApiContactFlowsGeneratedClient, AmazonConnectFullApiContactFlowsSummaryGeneratedClient, AmazonConnectFullApiContactsGeneratedClient, AmazonConnectFullApiDataTablesGeneratedClient, AmazonConnectFullApiDataIntegrationsGeneratedClient, AmazonConnectFullApiDefaultVocabularyGeneratedClient, AmazonConnectFullApiDefaultVocabularySummaryGeneratedClient, AmazonConnectFullApiDisassociateSecurityProfilesGeneratedClient, AmazonConnectFullApiDomainGeneratedClient, AmazonConnectFullApiDomains01GeneratedClient, AmazonConnectFullApiDomains02GeneratedClient, AmazonConnectFullApiDomainsListGeneratedClient, AmazonConnectFullApiEffectiveHoursOfOperationsGeneratedClient, AmazonConnectFullApiEmailAddressesGeneratedClient, AmazonConnectFullApiEntitySecurityProfilesSummaryGeneratedClient, AmazonConnectFullApiEvaluationFormsGeneratedClient, AmazonConnectFullApiEventIntegrationsGeneratedClient, AmazonConnectFullApiFlowAssociationsGeneratedClient, AmazonConnectFullApiFlowAssociationsBatchGeneratedClient, AmazonConnectFullApiFlowAssociationsSummaryGeneratedClient, AmazonConnectFullApiHoursOfOperationsGeneratedClient, AmazonConnectFullApiHoursOfOperationsSummaryGeneratedClient, AmazonConnectFullApiInstanceGeneratedClient, AmazonConnectFullApiIntegrationsGeneratedClient, AmazonConnectFullApiKnowledgeBasesGeneratedClient, AmazonConnectFullApiMedicalScribeStreamGeneratedClient, AmazonConnectFullApiMetricsGeneratedClient, AmazonConnectFullApiNotificationsGeneratedClient, AmazonConnectFullApiParticipantGeneratedClient, AmazonConnectFullApiPhoneNumberGeneratedClient, AmazonConnectFullApiPhoneNumbersSummaryGeneratedClient, AmazonConnectFullApiPredefinedAttributesGeneratedClient, AmazonConnectFullApiPromptsGeneratedClient, AmazonConnectFullApiPromptsSummaryGeneratedClient, AmazonConnectFullApiPushNotificationGeneratedClient, AmazonConnectFullApiQueuesGeneratedClient, AmazonConnectFullApiQueuesSummaryGeneratedClient, AmazonConnectFullApiQuickConnectsGeneratedClient, AmazonConnectFullApiRealtimeContactAnalysisGeneratedClient, AmazonConnectFullApiRecommenderRecipesGeneratedClient, AmazonConnectFullApiRoutingProfilesGeneratedClient, AmazonConnectFullApiRoutingProfilesSummaryGeneratedClient, AmazonConnectFullApiRulesGeneratedClient, AmazonConnectFullApiSearchAgentStatusesGeneratedClient, AmazonConnectFullApiSearchContactEvaluationsGeneratedClient, AmazonConnectFullApiSearchContactFlowModulesGeneratedClient, AmazonConnectFullApiSearchContactFlowsGeneratedClient, AmazonConnectFullApiSearchContactsGeneratedClient, AmazonConnectFullApiSearchDataTablesGeneratedClient, AmazonConnectFullApiSearchEmailAddressesGeneratedClient, AmazonConnectFullApiSearchEvaluationFormsGeneratedClient, AmazonConnectFullApiSearchHoursOfOperationOverridesGeneratedClient, AmazonConnectFullApiSearchHoursOfOperationsGeneratedClient, AmazonConnectFullApiSearchNotificationsGeneratedClient, AmazonConnectFullApiSearchPredefinedAttributesGeneratedClient, AmazonConnectFullApiSearchPromptsGeneratedClient, AmazonConnectFullApiSearchQueuesGeneratedClient, AmazonConnectFullApiSearchQuickConnectsGeneratedClient, AmazonConnectFullApiSearchResourceTagsGeneratedClient, AmazonConnectFullApiSearchRoutingProfilesGeneratedClient, AmazonConnectFullApiSearchSecurityProfilesGeneratedClient, AmazonConnectFullApiSearchTestCasesGeneratedClient, AmazonConnectFullApiSearchUserHierarchyGroupsGeneratedClient, AmazonConnectFullApiSearchUsersGeneratedClient, AmazonConnectFullApiSearchViewsGeneratedClient, AmazonConnectFullApiSearchWorkspaceAssociationsGeneratedClient, AmazonConnectFullApiSearchWorkspacesGeneratedClient, AmazonConnectFullApiSecurityProfilesGeneratedClient, AmazonConnectFullApiSecurityProfilesApplicationsGeneratedClient, AmazonConnectFullApiSecurityProfilesFlowModulesGeneratedClient, AmazonConnectFullApiSecurityProfilesPermissionsGeneratedClient, AmazonConnectFullApiSecurityProfilesSummaryGeneratedClient, AmazonConnectFullApiTagsGeneratedClient, AmazonConnectFullApiTemplatesGeneratedClient, AmazonConnectFullApiTestCaseExecutionsGeneratedClient, AmazonConnectFullApiTestCasesGeneratedClient, AmazonConnectFullApiTestCasesSummaryGeneratedClient, AmazonConnectFullApiTrafficDistributionGeneratedClient, AmazonConnectFullApiTrafficDistributionGroupGeneratedClient, AmazonConnectFullApiTrafficDistributionGroupsGeneratedClient, AmazonConnectFullApiUserGeneratedClient, AmazonConnectFullApiUserHierarchyGroupsGeneratedClient, AmazonConnectFullApiUserHierarchyGroupsSummaryGeneratedClient, AmazonConnectFullApiUserHierarchyStructureGeneratedClient, AmazonConnectFullApiUsersGeneratedClient, AmazonConnectFullApiUsersSummaryGeneratedClient, AmazonConnectFullApiV2GeneratedClient, AmazonConnectFullApiViewsGeneratedClient, AmazonConnectFullApiVocabularyGeneratedClient, AmazonConnectFullApiVocabularyRemoveGeneratedClient, AmazonConnectFullApiVocabularySummaryGeneratedClient, AmazonConnectFullApiWorkspacesGeneratedClient {}

export const AMAZON_CONNECT_FULL_API_GENERATED_FUNCTION_COUNT = 765 as const;
export const AMAZON_CONNECT_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...AmazonConnectFullApiAgentStatusGeneratedFunctionNames,
  ...AmazonConnectFullApiAnalyticsDataGeneratedFunctionNames,
  ...AmazonConnectFullApiApplicationsGeneratedFunctionNames,
  ...AmazonConnectFullApiAssistantsGeneratedFunctionNames,
  ...AmazonConnectFullApiAssociateSecurityProfilesGeneratedFunctionNames,
  ...AmazonConnectFullApiAttachedFilesGeneratedFunctionNames,
  ...AmazonConnectFullApiAttachedFilesConfigurationsGeneratedFunctionNames,
  ...AmazonConnectFullApiAuthenticationProfilesGeneratedFunctionNames,
  ...AmazonConnectFullApiAuthenticationProfilesSummaryGeneratedFunctionNames,
  ...AmazonConnectFullApiCampaignsGeneratedFunctionNames,
  ...AmazonConnectFullApiCampaignsStateGeneratedFunctionNames,
  ...AmazonConnectFullApiCampaignsSummaryGeneratedFunctionNames,
  ...AmazonConnectFullApiChatIntegrationEventGeneratedFunctionNames,
  ...AmazonConnectFullApiConnectInstanceGeneratedFunctionNames,
  ...AmazonConnectFullApiContactGeneratedFunctionNames,
  ...AmazonConnectFullApiContactEvaluationsGeneratedFunctionNames,
  ...AmazonConnectFullApiContactFlowModulesGeneratedFunctionNames,
  ...AmazonConnectFullApiContactFlowModulesSummaryGeneratedFunctionNames,
  ...AmazonConnectFullApiContactFlowsGeneratedFunctionNames,
  ...AmazonConnectFullApiContactFlowsSummaryGeneratedFunctionNames,
  ...AmazonConnectFullApiContactsGeneratedFunctionNames,
  ...AmazonConnectFullApiDataTablesGeneratedFunctionNames,
  ...AmazonConnectFullApiDataIntegrationsGeneratedFunctionNames,
  ...AmazonConnectFullApiDefaultVocabularyGeneratedFunctionNames,
  ...AmazonConnectFullApiDefaultVocabularySummaryGeneratedFunctionNames,
  ...AmazonConnectFullApiDisassociateSecurityProfilesGeneratedFunctionNames,
  ...AmazonConnectFullApiDomainGeneratedFunctionNames,
  ...AmazonConnectFullApiDomains01GeneratedFunctionNames,
  ...AmazonConnectFullApiDomains02GeneratedFunctionNames,
  ...AmazonConnectFullApiDomainsListGeneratedFunctionNames,
  ...AmazonConnectFullApiEffectiveHoursOfOperationsGeneratedFunctionNames,
  ...AmazonConnectFullApiEmailAddressesGeneratedFunctionNames,
  ...AmazonConnectFullApiEntitySecurityProfilesSummaryGeneratedFunctionNames,
  ...AmazonConnectFullApiEvaluationFormsGeneratedFunctionNames,
  ...AmazonConnectFullApiEventIntegrationsGeneratedFunctionNames,
  ...AmazonConnectFullApiFlowAssociationsGeneratedFunctionNames,
  ...AmazonConnectFullApiFlowAssociationsBatchGeneratedFunctionNames,
  ...AmazonConnectFullApiFlowAssociationsSummaryGeneratedFunctionNames,
  ...AmazonConnectFullApiHoursOfOperationsGeneratedFunctionNames,
  ...AmazonConnectFullApiHoursOfOperationsSummaryGeneratedFunctionNames,
  ...AmazonConnectFullApiInstanceGeneratedFunctionNames,
  ...AmazonConnectFullApiIntegrationsGeneratedFunctionNames,
  ...AmazonConnectFullApiKnowledgeBasesGeneratedFunctionNames,
  ...AmazonConnectFullApiMedicalScribeStreamGeneratedFunctionNames,
  ...AmazonConnectFullApiMetricsGeneratedFunctionNames,
  ...AmazonConnectFullApiNotificationsGeneratedFunctionNames,
  ...AmazonConnectFullApiParticipantGeneratedFunctionNames,
  ...AmazonConnectFullApiPhoneNumberGeneratedFunctionNames,
  ...AmazonConnectFullApiPhoneNumbersSummaryGeneratedFunctionNames,
  ...AmazonConnectFullApiPredefinedAttributesGeneratedFunctionNames,
  ...AmazonConnectFullApiPromptsGeneratedFunctionNames,
  ...AmazonConnectFullApiPromptsSummaryGeneratedFunctionNames,
  ...AmazonConnectFullApiPushNotificationGeneratedFunctionNames,
  ...AmazonConnectFullApiQueuesGeneratedFunctionNames,
  ...AmazonConnectFullApiQueuesSummaryGeneratedFunctionNames,
  ...AmazonConnectFullApiQuickConnectsGeneratedFunctionNames,
  ...AmazonConnectFullApiRealtimeContactAnalysisGeneratedFunctionNames,
  ...AmazonConnectFullApiRecommenderRecipesGeneratedFunctionNames,
  ...AmazonConnectFullApiRoutingProfilesGeneratedFunctionNames,
  ...AmazonConnectFullApiRoutingProfilesSummaryGeneratedFunctionNames,
  ...AmazonConnectFullApiRulesGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchAgentStatusesGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchContactEvaluationsGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchContactFlowModulesGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchContactFlowsGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchContactsGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchDataTablesGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchEmailAddressesGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchEvaluationFormsGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchHoursOfOperationOverridesGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchHoursOfOperationsGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchNotificationsGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchPredefinedAttributesGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchPromptsGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchQueuesGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchQuickConnectsGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchResourceTagsGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchRoutingProfilesGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchSecurityProfilesGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchTestCasesGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchUserHierarchyGroupsGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchUsersGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchViewsGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchWorkspaceAssociationsGeneratedFunctionNames,
  ...AmazonConnectFullApiSearchWorkspacesGeneratedFunctionNames,
  ...AmazonConnectFullApiSecurityProfilesGeneratedFunctionNames,
  ...AmazonConnectFullApiSecurityProfilesApplicationsGeneratedFunctionNames,
  ...AmazonConnectFullApiSecurityProfilesFlowModulesGeneratedFunctionNames,
  ...AmazonConnectFullApiSecurityProfilesPermissionsGeneratedFunctionNames,
  ...AmazonConnectFullApiSecurityProfilesSummaryGeneratedFunctionNames,
  ...AmazonConnectFullApiTagsGeneratedFunctionNames,
  ...AmazonConnectFullApiTemplatesGeneratedFunctionNames,
  ...AmazonConnectFullApiTestCaseExecutionsGeneratedFunctionNames,
  ...AmazonConnectFullApiTestCasesGeneratedFunctionNames,
  ...AmazonConnectFullApiTestCasesSummaryGeneratedFunctionNames,
  ...AmazonConnectFullApiTrafficDistributionGeneratedFunctionNames,
  ...AmazonConnectFullApiTrafficDistributionGroupGeneratedFunctionNames,
  ...AmazonConnectFullApiTrafficDistributionGroupsGeneratedFunctionNames,
  ...AmazonConnectFullApiUserGeneratedFunctionNames,
  ...AmazonConnectFullApiUserHierarchyGroupsGeneratedFunctionNames,
  ...AmazonConnectFullApiUserHierarchyGroupsSummaryGeneratedFunctionNames,
  ...AmazonConnectFullApiUserHierarchyStructureGeneratedFunctionNames,
  ...AmazonConnectFullApiUsersGeneratedFunctionNames,
  ...AmazonConnectFullApiUsersSummaryGeneratedFunctionNames,
  ...AmazonConnectFullApiV2GeneratedFunctionNames,
  ...AmazonConnectFullApiViewsGeneratedFunctionNames,
  ...AmazonConnectFullApiVocabularyGeneratedFunctionNames,
  ...AmazonConnectFullApiVocabularyRemoveGeneratedFunctionNames,
  ...AmazonConnectFullApiVocabularySummaryGeneratedFunctionNames,
  ...AmazonConnectFullApiWorkspacesGeneratedFunctionNames,
] as const satisfies readonly (keyof AmazonConnectFullApiGeneratedClient)[];

export function createAmazonConnectFullApiGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiGeneratedClient {
  return Object.assign(
    {},
    createAmazonConnectFullApiAgentStatusGeneratedClient(callOperation),
    createAmazonConnectFullApiAnalyticsDataGeneratedClient(callOperation),
    createAmazonConnectFullApiApplicationsGeneratedClient(callOperation),
    createAmazonConnectFullApiAssistantsGeneratedClient(callOperation),
    createAmazonConnectFullApiAssociateSecurityProfilesGeneratedClient(callOperation),
    createAmazonConnectFullApiAttachedFilesGeneratedClient(callOperation),
    createAmazonConnectFullApiAttachedFilesConfigurationsGeneratedClient(callOperation),
    createAmazonConnectFullApiAuthenticationProfilesGeneratedClient(callOperation),
    createAmazonConnectFullApiAuthenticationProfilesSummaryGeneratedClient(callOperation),
    createAmazonConnectFullApiCampaignsGeneratedClient(callOperation),
    createAmazonConnectFullApiCampaignsStateGeneratedClient(callOperation),
    createAmazonConnectFullApiCampaignsSummaryGeneratedClient(callOperation),
    createAmazonConnectFullApiChatIntegrationEventGeneratedClient(callOperation),
    createAmazonConnectFullApiConnectInstanceGeneratedClient(callOperation),
    createAmazonConnectFullApiContactGeneratedClient(callOperation),
    createAmazonConnectFullApiContactEvaluationsGeneratedClient(callOperation),
    createAmazonConnectFullApiContactFlowModulesGeneratedClient(callOperation),
    createAmazonConnectFullApiContactFlowModulesSummaryGeneratedClient(callOperation),
    createAmazonConnectFullApiContactFlowsGeneratedClient(callOperation),
    createAmazonConnectFullApiContactFlowsSummaryGeneratedClient(callOperation),
    createAmazonConnectFullApiContactsGeneratedClient(callOperation),
    createAmazonConnectFullApiDataTablesGeneratedClient(callOperation),
    createAmazonConnectFullApiDataIntegrationsGeneratedClient(callOperation),
    createAmazonConnectFullApiDefaultVocabularyGeneratedClient(callOperation),
    createAmazonConnectFullApiDefaultVocabularySummaryGeneratedClient(callOperation),
    createAmazonConnectFullApiDisassociateSecurityProfilesGeneratedClient(callOperation),
    createAmazonConnectFullApiDomainGeneratedClient(callOperation),
    createAmazonConnectFullApiDomains01GeneratedClient(callOperation),
    createAmazonConnectFullApiDomains02GeneratedClient(callOperation),
    createAmazonConnectFullApiDomainsListGeneratedClient(callOperation),
    createAmazonConnectFullApiEffectiveHoursOfOperationsGeneratedClient(callOperation),
    createAmazonConnectFullApiEmailAddressesGeneratedClient(callOperation),
    createAmazonConnectFullApiEntitySecurityProfilesSummaryGeneratedClient(callOperation),
    createAmazonConnectFullApiEvaluationFormsGeneratedClient(callOperation),
    createAmazonConnectFullApiEventIntegrationsGeneratedClient(callOperation),
    createAmazonConnectFullApiFlowAssociationsGeneratedClient(callOperation),
    createAmazonConnectFullApiFlowAssociationsBatchGeneratedClient(callOperation),
    createAmazonConnectFullApiFlowAssociationsSummaryGeneratedClient(callOperation),
    createAmazonConnectFullApiHoursOfOperationsGeneratedClient(callOperation),
    createAmazonConnectFullApiHoursOfOperationsSummaryGeneratedClient(callOperation),
    createAmazonConnectFullApiInstanceGeneratedClient(callOperation),
    createAmazonConnectFullApiIntegrationsGeneratedClient(callOperation),
    createAmazonConnectFullApiKnowledgeBasesGeneratedClient(callOperation),
    createAmazonConnectFullApiMedicalScribeStreamGeneratedClient(callOperation),
    createAmazonConnectFullApiMetricsGeneratedClient(callOperation),
    createAmazonConnectFullApiNotificationsGeneratedClient(callOperation),
    createAmazonConnectFullApiParticipantGeneratedClient(callOperation),
    createAmazonConnectFullApiPhoneNumberGeneratedClient(callOperation),
    createAmazonConnectFullApiPhoneNumbersSummaryGeneratedClient(callOperation),
    createAmazonConnectFullApiPredefinedAttributesGeneratedClient(callOperation),
    createAmazonConnectFullApiPromptsGeneratedClient(callOperation),
    createAmazonConnectFullApiPromptsSummaryGeneratedClient(callOperation),
    createAmazonConnectFullApiPushNotificationGeneratedClient(callOperation),
    createAmazonConnectFullApiQueuesGeneratedClient(callOperation),
    createAmazonConnectFullApiQueuesSummaryGeneratedClient(callOperation),
    createAmazonConnectFullApiQuickConnectsGeneratedClient(callOperation),
    createAmazonConnectFullApiRealtimeContactAnalysisGeneratedClient(callOperation),
    createAmazonConnectFullApiRecommenderRecipesGeneratedClient(callOperation),
    createAmazonConnectFullApiRoutingProfilesGeneratedClient(callOperation),
    createAmazonConnectFullApiRoutingProfilesSummaryGeneratedClient(callOperation),
    createAmazonConnectFullApiRulesGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchAgentStatusesGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchContactEvaluationsGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchContactFlowModulesGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchContactFlowsGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchContactsGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchDataTablesGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchEmailAddressesGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchEvaluationFormsGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchHoursOfOperationOverridesGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchHoursOfOperationsGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchNotificationsGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchPredefinedAttributesGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchPromptsGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchQueuesGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchQuickConnectsGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchResourceTagsGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchRoutingProfilesGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchSecurityProfilesGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchTestCasesGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchUserHierarchyGroupsGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchUsersGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchViewsGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchWorkspaceAssociationsGeneratedClient(callOperation),
    createAmazonConnectFullApiSearchWorkspacesGeneratedClient(callOperation),
    createAmazonConnectFullApiSecurityProfilesGeneratedClient(callOperation),
    createAmazonConnectFullApiSecurityProfilesApplicationsGeneratedClient(callOperation),
    createAmazonConnectFullApiSecurityProfilesFlowModulesGeneratedClient(callOperation),
    createAmazonConnectFullApiSecurityProfilesPermissionsGeneratedClient(callOperation),
    createAmazonConnectFullApiSecurityProfilesSummaryGeneratedClient(callOperation),
    createAmazonConnectFullApiTagsGeneratedClient(callOperation),
    createAmazonConnectFullApiTemplatesGeneratedClient(callOperation),
    createAmazonConnectFullApiTestCaseExecutionsGeneratedClient(callOperation),
    createAmazonConnectFullApiTestCasesGeneratedClient(callOperation),
    createAmazonConnectFullApiTestCasesSummaryGeneratedClient(callOperation),
    createAmazonConnectFullApiTrafficDistributionGeneratedClient(callOperation),
    createAmazonConnectFullApiTrafficDistributionGroupGeneratedClient(callOperation),
    createAmazonConnectFullApiTrafficDistributionGroupsGeneratedClient(callOperation),
    createAmazonConnectFullApiUserGeneratedClient(callOperation),
    createAmazonConnectFullApiUserHierarchyGroupsGeneratedClient(callOperation),
    createAmazonConnectFullApiUserHierarchyGroupsSummaryGeneratedClient(callOperation),
    createAmazonConnectFullApiUserHierarchyStructureGeneratedClient(callOperation),
    createAmazonConnectFullApiUsersGeneratedClient(callOperation),
    createAmazonConnectFullApiUsersSummaryGeneratedClient(callOperation),
    createAmazonConnectFullApiV2GeneratedClient(callOperation),
    createAmazonConnectFullApiViewsGeneratedClient(callOperation),
    createAmazonConnectFullApiVocabularyGeneratedClient(callOperation),
    createAmazonConnectFullApiVocabularyRemoveGeneratedClient(callOperation),
    createAmazonConnectFullApiVocabularySummaryGeneratedClient(callOperation),
    createAmazonConnectFullApiWorkspacesGeneratedClient(callOperation),
  ) as AmazonConnectFullApiGeneratedClient;
}
