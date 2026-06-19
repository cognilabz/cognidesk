// Generated from Talkdesk OpenAPI (https://api-docs.talkdeskapp.com/public-api).
// Do not edit by hand; run scripts/generate-talkdesk-full-api.mjs after checking upstream docs.

import type { TalkdeskOperationRequestInput } from "./index.js";
import type {
  TalkdeskFullApiOperationQueryMap,
  TalkdeskFullApiOperationQueryRequiredMap,
  TalkdeskFullApiOperationRequestBodyMap,
  TalkdeskFullApiOperationRequestBodyRequiredMap,
  TalkdeskFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createTalkdeskFullApiAccountsAPIGeneratedClient,
  TalkdeskFullApiAccountsAPIGeneratedFunctionNames,
  type TalkdeskFullApiAccountsAPIGeneratedClient,
  type TalkdeskFullApiAccountsAPIOperationPathParamMap,
  type TalkdeskFullApiAccountsAPIOperationRequestMap,
} from "./full-api.generated/client/accounts-api-chunk.generated.js";
import {
  createTalkdeskFullApiAppointmentSchedulingServiceGeneratedClient,
  TalkdeskFullApiAppointmentSchedulingServiceGeneratedFunctionNames,
  type TalkdeskFullApiAppointmentSchedulingServiceGeneratedClient,
  type TalkdeskFullApiAppointmentSchedulingServiceOperationPathParamMap,
  type TalkdeskFullApiAppointmentSchedulingServiceOperationRequestMap,
} from "./full-api.generated/client/appointment-scheduling-service-chunk.generated.js";
import {
  createTalkdeskFullApiAppsAPIGeneratedClient,
  TalkdeskFullApiAppsAPIGeneratedFunctionNames,
  type TalkdeskFullApiAppsAPIGeneratedClient,
  type TalkdeskFullApiAppsAPIOperationPathParamMap,
  type TalkdeskFullApiAppsAPIOperationRequestMap,
} from "./full-api.generated/client/apps-api-chunk.generated.js";
import {
  createTalkdeskFullApiAttachmentsGeneratedClient,
  TalkdeskFullApiAttachmentsGeneratedFunctionNames,
  type TalkdeskFullApiAttachmentsGeneratedClient,
  type TalkdeskFullApiAttachmentsOperationPathParamMap,
  type TalkdeskFullApiAttachmentsOperationRequestMap,
} from "./full-api.generated/client/attachments-chunk.generated.js";
import {
  createTalkdeskFullApiAttributesAPIGeneratedClient,
  TalkdeskFullApiAttributesAPIGeneratedFunctionNames,
  type TalkdeskFullApiAttributesAPIGeneratedClient,
  type TalkdeskFullApiAttributesAPIOperationPathParamMap,
  type TalkdeskFullApiAttributesAPIOperationRequestMap,
} from "./full-api.generated/client/attributes-api-chunk.generated.js";
import {
  createTalkdeskFullApiAuthenticationGeneratedClient,
  TalkdeskFullApiAuthenticationGeneratedFunctionNames,
  type TalkdeskFullApiAuthenticationGeneratedClient,
  type TalkdeskFullApiAuthenticationOperationPathParamMap,
  type TalkdeskFullApiAuthenticationOperationRequestMap,
} from "./full-api.generated/client/authentication-chunk.generated.js";
import {
  createTalkdeskFullApiAutomatedNotificationsGeneratedClient,
  TalkdeskFullApiAutomatedNotificationsGeneratedFunctionNames,
  type TalkdeskFullApiAutomatedNotificationsGeneratedClient,
  type TalkdeskFullApiAutomatedNotificationsOperationPathParamMap,
  type TalkdeskFullApiAutomatedNotificationsOperationRequestMap,
} from "./full-api.generated/client/automated-notifications-chunk.generated.js";
import {
  createTalkdeskFullApiBillingGeneratedClient,
  TalkdeskFullApiBillingGeneratedFunctionNames,
  type TalkdeskFullApiBillingGeneratedClient,
  type TalkdeskFullApiBillingOperationPathParamMap,
  type TalkdeskFullApiBillingOperationRequestMap,
} from "./full-api.generated/client/billing-chunk.generated.js";
import {
  createTalkdeskFullApiBillingInsightsAPIGeneratedClient,
  TalkdeskFullApiBillingInsightsAPIGeneratedFunctionNames,
  type TalkdeskFullApiBillingInsightsAPIGeneratedClient,
  type TalkdeskFullApiBillingInsightsAPIOperationPathParamMap,
  type TalkdeskFullApiBillingInsightsAPIOperationRequestMap,
} from "./full-api.generated/client/billing-insights-api-chunk.generated.js";
import {
  createTalkdeskFullApiBulkImportAPIGeneratedClient,
  TalkdeskFullApiBulkImportAPIGeneratedFunctionNames,
  type TalkdeskFullApiBulkImportAPIGeneratedClient,
  type TalkdeskFullApiBulkImportAPIOperationPathParamMap,
  type TalkdeskFullApiBulkImportAPIOperationRequestMap,
} from "./full-api.generated/client/bulk-import-api-chunk.generated.js";
import {
  createTalkdeskFullApiCallbackAPIGeneratedClient,
  TalkdeskFullApiCallbackAPIGeneratedFunctionNames,
  type TalkdeskFullApiCallbackAPIGeneratedClient,
  type TalkdeskFullApiCallbackAPIOperationPathParamMap,
  type TalkdeskFullApiCallbackAPIOperationRequestMap,
} from "./full-api.generated/client/callback-api-chunk.generated.js";
import {
  createTalkdeskFullApiCampaignManagementAPIGeneratedClient,
  TalkdeskFullApiCampaignManagementAPIGeneratedFunctionNames,
  type TalkdeskFullApiCampaignManagementAPIGeneratedClient,
  type TalkdeskFullApiCampaignManagementAPIOperationPathParamMap,
  type TalkdeskFullApiCampaignManagementAPIOperationRequestMap,
} from "./full-api.generated/client/campaign-management-api-chunk.generated.js";
import {
  createTalkdeskFullApiCaseAPIGeneratedClient,
  TalkdeskFullApiCaseAPIGeneratedFunctionNames,
  type TalkdeskFullApiCaseAPIGeneratedClient,
  type TalkdeskFullApiCaseAPIOperationPathParamMap,
  type TalkdeskFullApiCaseAPIOperationRequestMap,
} from "./full-api.generated/client/case-api-chunk.generated.js";
import {
  createTalkdeskFullApiContactsAPIGeneratedClient,
  TalkdeskFullApiContactsAPIGeneratedFunctionNames,
  type TalkdeskFullApiContactsAPIGeneratedClient,
  type TalkdeskFullApiContactsAPIOperationPathParamMap,
  type TalkdeskFullApiContactsAPIOperationRequestMap,
} from "./full-api.generated/client/contacts-api-chunk.generated.js";
import {
  createTalkdeskFullApiDCETrackingGeneratedClient,
  TalkdeskFullApiDCETrackingGeneratedFunctionNames,
  type TalkdeskFullApiDCETrackingGeneratedClient,
  type TalkdeskFullApiDCETrackingOperationPathParamMap,
  type TalkdeskFullApiDCETrackingOperationRequestMap,
} from "./full-api.generated/client/dce-tracking-chunk.generated.js";
import {
  createTalkdeskFullApiDialerIntegrationsGeneratedClient,
  TalkdeskFullApiDialerIntegrationsGeneratedFunctionNames,
  type TalkdeskFullApiDialerIntegrationsGeneratedClient,
  type TalkdeskFullApiDialerIntegrationsOperationPathParamMap,
  type TalkdeskFullApiDialerIntegrationsOperationRequestMap,
} from "./full-api.generated/client/dialer-integrations-chunk.generated.js";
import {
  createTalkdeskFullApiDigitalConnectAPIGeneratedClient,
  TalkdeskFullApiDigitalConnectAPIGeneratedFunctionNames,
  type TalkdeskFullApiDigitalConnectAPIGeneratedClient,
  type TalkdeskFullApiDigitalConnectAPIOperationPathParamMap,
  type TalkdeskFullApiDigitalConnectAPIOperationRequestMap,
} from "./full-api.generated/client/digital-connect-api-chunk.generated.js";
import {
  createTalkdeskFullApiEventsAPIGeneratedClient,
  TalkdeskFullApiEventsAPIGeneratedFunctionNames,
  type TalkdeskFullApiEventsAPIGeneratedClient,
  type TalkdeskFullApiEventsAPIOperationPathParamMap,
  type TalkdeskFullApiEventsAPIOperationRequestMap,
} from "./full-api.generated/client/events-api-chunk.generated.js";
import {
  createTalkdeskFullApiExploreAPIGeneratedClient,
  TalkdeskFullApiExploreAPIGeneratedFunctionNames,
  type TalkdeskFullApiExploreAPIGeneratedClient,
  type TalkdeskFullApiExploreAPIOperationPathParamMap,
  type TalkdeskFullApiExploreAPIOperationRequestMap,
} from "./full-api.generated/client/explore-api-chunk.generated.js";
import {
  createTalkdeskFullApiEXPRESSAPIGeneratedClient,
  TalkdeskFullApiEXPRESSAPIGeneratedFunctionNames,
  type TalkdeskFullApiEXPRESSAPIGeneratedClient,
  type TalkdeskFullApiEXPRESSAPIOperationPathParamMap,
  type TalkdeskFullApiEXPRESSAPIOperationRequestMap,
} from "./full-api.generated/client/express-api-chunk.generated.js";
import {
  createTalkdeskFullApiExternalCredentialsGeneratedClient,
  TalkdeskFullApiExternalCredentialsGeneratedFunctionNames,
  type TalkdeskFullApiExternalCredentialsGeneratedClient,
  type TalkdeskFullApiExternalCredentialsOperationPathParamMap,
  type TalkdeskFullApiExternalCredentialsOperationRequestMap,
} from "./full-api.generated/client/external-credentials-chunk.generated.js";
import {
  createTalkdeskFullApiFallbackExperienceGeneratedClient,
  TalkdeskFullApiFallbackExperienceGeneratedFunctionNames,
  type TalkdeskFullApiFallbackExperienceGeneratedClient,
  type TalkdeskFullApiFallbackExperienceOperationPathParamMap,
  type TalkdeskFullApiFallbackExperienceOperationRequestMap,
} from "./full-api.generated/client/fallback-experience-chunk.generated.js";
import {
  createTalkdeskFullApiFeedbackAPIGeneratedClient,
  TalkdeskFullApiFeedbackAPIGeneratedFunctionNames,
  type TalkdeskFullApiFeedbackAPIGeneratedClient,
  type TalkdeskFullApiFeedbackAPIOperationPathParamMap,
  type TalkdeskFullApiFeedbackAPIOperationRequestMap,
} from "./full-api.generated/client/feedback-api-chunk.generated.js";
import {
  createTalkdeskFullApiFinancialServicesExperienceCloudForBankingGeneratedClient,
  TalkdeskFullApiFinancialServicesExperienceCloudForBankingGeneratedFunctionNames,
  type TalkdeskFullApiFinancialServicesExperienceCloudForBankingGeneratedClient,
  type TalkdeskFullApiFinancialServicesExperienceCloudForBankingOperationPathParamMap,
  type TalkdeskFullApiFinancialServicesExperienceCloudForBankingOperationRequestMap,
} from "./full-api.generated/client/financial-services-experience-cloud-for-banking-chunk.generated.js";
import {
  createTalkdeskFullApiFinancialServicesExperienceCloudForInsuranceGeneratedClient,
  TalkdeskFullApiFinancialServicesExperienceCloudForInsuranceGeneratedFunctionNames,
  type TalkdeskFullApiFinancialServicesExperienceCloudForInsuranceGeneratedClient,
  type TalkdeskFullApiFinancialServicesExperienceCloudForInsuranceOperationPathParamMap,
  type TalkdeskFullApiFinancialServicesExperienceCloudForInsuranceOperationRequestMap,
} from "./full-api.generated/client/financial-services-experience-cloud-for-insurance-chunk.generated.js";
import {
  createTalkdeskFullApiFlowsAPIGeneratedClient,
  TalkdeskFullApiFlowsAPIGeneratedFunctionNames,
  type TalkdeskFullApiFlowsAPIGeneratedClient,
  type TalkdeskFullApiFlowsAPIOperationPathParamMap,
  type TalkdeskFullApiFlowsAPIOperationRequestMap,
} from "./full-api.generated/client/flows-api-chunk.generated.js";
import {
  createTalkdeskFullApiFlowsPlatformGeneratedClient,
  TalkdeskFullApiFlowsPlatformGeneratedFunctionNames,
  type TalkdeskFullApiFlowsPlatformGeneratedClient,
  type TalkdeskFullApiFlowsPlatformOperationPathParamMap,
  type TalkdeskFullApiFlowsPlatformOperationRequestMap,
} from "./full-api.generated/client/flows-platform-chunk.generated.js";
import {
  createTalkdeskFullApiFSIIntegrationsAPIGeneratedClient,
  TalkdeskFullApiFSIIntegrationsAPIGeneratedFunctionNames,
  type TalkdeskFullApiFSIIntegrationsAPIGeneratedClient,
  type TalkdeskFullApiFSIIntegrationsAPIOperationPathParamMap,
  type TalkdeskFullApiFSIIntegrationsAPIOperationRequestMap,
} from "./full-api.generated/client/fsi-integrations-api-chunk.generated.js";
import {
  createTalkdeskFullApiFunctionsGeneratedClient,
  TalkdeskFullApiFunctionsGeneratedFunctionNames,
  type TalkdeskFullApiFunctionsGeneratedClient,
  type TalkdeskFullApiFunctionsOperationPathParamMap,
  type TalkdeskFullApiFunctionsOperationRequestMap,
} from "./full-api.generated/client/functions-chunk.generated.js";
import {
  createTalkdeskFullApiGuardianAPIGeneratedClient,
  TalkdeskFullApiGuardianAPIGeneratedFunctionNames,
  type TalkdeskFullApiGuardianAPIGeneratedClient,
  type TalkdeskFullApiGuardianAPIOperationPathParamMap,
  type TalkdeskFullApiGuardianAPIOperationRequestMap,
} from "./full-api.generated/client/guardian-api-chunk.generated.js";
import {
  createTalkdeskFullApiHLSPayersGeneratedClient,
  TalkdeskFullApiHLSPayersGeneratedFunctionNames,
  type TalkdeskFullApiHLSPayersGeneratedClient,
  type TalkdeskFullApiHLSPayersOperationPathParamMap,
  type TalkdeskFullApiHLSPayersOperationRequestMap,
} from "./full-api.generated/client/hls-payers-chunk.generated.js";
import {
  createTalkdeskFullApiHLSProvidersGeneratedClient,
  TalkdeskFullApiHLSProvidersGeneratedFunctionNames,
  type TalkdeskFullApiHLSProvidersGeneratedClient,
  type TalkdeskFullApiHLSProvidersOperationPathParamMap,
  type TalkdeskFullApiHLSProvidersOperationRequestMap,
} from "./full-api.generated/client/hls-providers-chunk.generated.js";
import {
  createTalkdeskFullApiHLSSycurioIntegrationGeneratedClient,
  TalkdeskFullApiHLSSycurioIntegrationGeneratedFunctionNames,
  type TalkdeskFullApiHLSSycurioIntegrationGeneratedClient,
  type TalkdeskFullApiHLSSycurioIntegrationOperationPathParamMap,
  type TalkdeskFullApiHLSSycurioIntegrationOperationRequestMap,
} from "./full-api.generated/client/hls-sycurio-integration-chunk.generated.js";
import {
  createTalkdeskFullApiIdentityGeneratedClient,
  TalkdeskFullApiIdentityGeneratedFunctionNames,
  type TalkdeskFullApiIdentityGeneratedClient,
  type TalkdeskFullApiIdentityOperationPathParamMap,
  type TalkdeskFullApiIdentityOperationRequestMap,
} from "./full-api.generated/client/identity-chunk.generated.js";
import {
  createTalkdeskFullApiIdentityAPIGeneratedClient,
  TalkdeskFullApiIdentityAPIGeneratedFunctionNames,
  type TalkdeskFullApiIdentityAPIGeneratedClient,
  type TalkdeskFullApiIdentityAPIOperationPathParamMap,
  type TalkdeskFullApiIdentityAPIOperationRequestMap,
} from "./full-api.generated/client/identity-api-chunk.generated.js";
import {
  createTalkdeskFullApiIndustriesActivityAPIGeneratedClient,
  TalkdeskFullApiIndustriesActivityAPIGeneratedFunctionNames,
  type TalkdeskFullApiIndustriesActivityAPIGeneratedClient,
  type TalkdeskFullApiIndustriesActivityAPIOperationPathParamMap,
  type TalkdeskFullApiIndustriesActivityAPIOperationRequestMap,
} from "./full-api.generated/client/industries-activity-api-chunk.generated.js";
import {
  createTalkdeskFullApiIndustriesContextsGeneratedClient,
  TalkdeskFullApiIndustriesContextsGeneratedFunctionNames,
  type TalkdeskFullApiIndustriesContextsGeneratedClient,
  type TalkdeskFullApiIndustriesContextsOperationPathParamMap,
  type TalkdeskFullApiIndustriesContextsOperationRequestMap,
} from "./full-api.generated/client/industries-contexts-chunk.generated.js";
import {
  createTalkdeskFullApiIndustriesExternalEntityMapperGeneratedClient,
  TalkdeskFullApiIndustriesExternalEntityMapperGeneratedFunctionNames,
  type TalkdeskFullApiIndustriesExternalEntityMapperGeneratedClient,
  type TalkdeskFullApiIndustriesExternalEntityMapperOperationPathParamMap,
  type TalkdeskFullApiIndustriesExternalEntityMapperOperationRequestMap,
} from "./full-api.generated/client/industries-external-entity-mapper-chunk.generated.js";
import {
  createTalkdeskFullApiIndustriesMessagingServiceGeneratedClient,
  TalkdeskFullApiIndustriesMessagingServiceGeneratedFunctionNames,
  type TalkdeskFullApiIndustriesMessagingServiceGeneratedClient,
  type TalkdeskFullApiIndustriesMessagingServiceOperationPathParamMap,
  type TalkdeskFullApiIndustriesMessagingServiceOperationRequestMap,
} from "./full-api.generated/client/industries-messaging-service-chunk.generated.js";
import {
  createTalkdeskFullApiINDUSTRIESSCHEDULERAPIGeneratedClient,
  TalkdeskFullApiINDUSTRIESSCHEDULERAPIGeneratedFunctionNames,
  type TalkdeskFullApiINDUSTRIESSCHEDULERAPIGeneratedClient,
  type TalkdeskFullApiINDUSTRIESSCHEDULERAPIOperationPathParamMap,
  type TalkdeskFullApiINDUSTRIESSCHEDULERAPIOperationRequestMap,
} from "./full-api.generated/client/industries-scheduler-api-chunk.generated.js";
import {
  createTalkdeskFullApiIndustriesSettingsGeneratedClient,
  TalkdeskFullApiIndustriesSettingsGeneratedFunctionNames,
  type TalkdeskFullApiIndustriesSettingsGeneratedClient,
  type TalkdeskFullApiIndustriesSettingsOperationPathParamMap,
  type TalkdeskFullApiIndustriesSettingsOperationRequestMap,
} from "./full-api.generated/client/industries-settings-chunk.generated.js";
import {
  createTalkdeskFullApiIndustriesWorkflowsGeneratedClient,
  TalkdeskFullApiIndustriesWorkflowsGeneratedFunctionNames,
  type TalkdeskFullApiIndustriesWorkflowsGeneratedClient,
  type TalkdeskFullApiIndustriesWorkflowsOperationPathParamMap,
  type TalkdeskFullApiIndustriesWorkflowsOperationRequestMap,
} from "./full-api.generated/client/industries-workflows-chunk.generated.js";
import {
  createTalkdeskFullApiKnowledgeManagementGeneratedClient,
  TalkdeskFullApiKnowledgeManagementGeneratedFunctionNames,
  type TalkdeskFullApiKnowledgeManagementGeneratedClient,
  type TalkdeskFullApiKnowledgeManagementOperationPathParamMap,
  type TalkdeskFullApiKnowledgeManagementOperationRequestMap,
} from "./full-api.generated/client/knowledge-management-chunk.generated.js";
import {
  createTalkdeskFullApiLicensesManagerGeneratedClient,
  TalkdeskFullApiLicensesManagerGeneratedFunctionNames,
  type TalkdeskFullApiLicensesManagerGeneratedClient,
  type TalkdeskFullApiLicensesManagerOperationPathParamMap,
  type TalkdeskFullApiLicensesManagerOperationRequestMap,
} from "./full-api.generated/client/licenses-manager-chunk.generated.js";
import {
  createTalkdeskFullApiLiveAPIGeneratedClient,
  TalkdeskFullApiLiveAPIGeneratedFunctionNames,
  type TalkdeskFullApiLiveAPIGeneratedClient,
  type TalkdeskFullApiLiveAPIOperationPathParamMap,
  type TalkdeskFullApiLiveAPIOperationRequestMap,
} from "./full-api.generated/client/live-api-chunk.generated.js";
import {
  createTalkdeskFullApiLocationsDirectoryGeneratedClient,
  TalkdeskFullApiLocationsDirectoryGeneratedFunctionNames,
  type TalkdeskFullApiLocationsDirectoryGeneratedClient,
  type TalkdeskFullApiLocationsDirectoryOperationPathParamMap,
  type TalkdeskFullApiLocationsDirectoryOperationRequestMap,
} from "./full-api.generated/client/locations-directory-chunk.generated.js";
import {
  createTalkdeskFullApiMessagesGeneratedClient,
  TalkdeskFullApiMessagesGeneratedFunctionNames,
  type TalkdeskFullApiMessagesGeneratedClient,
  type TalkdeskFullApiMessagesOperationPathParamMap,
  type TalkdeskFullApiMessagesOperationRequestMap,
} from "./full-api.generated/client/messages-chunk.generated.js";
import {
  createTalkdeskFullApiNumbersGeneratedClient,
  TalkdeskFullApiNumbersGeneratedFunctionNames,
  type TalkdeskFullApiNumbersGeneratedClient,
  type TalkdeskFullApiNumbersOperationPathParamMap,
  type TalkdeskFullApiNumbersOperationRequestMap,
} from "./full-api.generated/client/numbers-chunk.generated.js";
import {
  createTalkdeskFullApiOmnichannelAPIGeneratedClient,
  TalkdeskFullApiOmnichannelAPIGeneratedFunctionNames,
  type TalkdeskFullApiOmnichannelAPIGeneratedClient,
  type TalkdeskFullApiOmnichannelAPIOperationPathParamMap,
  type TalkdeskFullApiOmnichannelAPIOperationRequestMap,
} from "./full-api.generated/client/omnichannel-api-chunk.generated.js";
import {
  createTalkdeskFullApiOutboundNotificationsAPIGeneratedClient,
  TalkdeskFullApiOutboundNotificationsAPIGeneratedFunctionNames,
  type TalkdeskFullApiOutboundNotificationsAPIGeneratedClient,
  type TalkdeskFullApiOutboundNotificationsAPIOperationPathParamMap,
  type TalkdeskFullApiOutboundNotificationsAPIOperationRequestMap,
} from "./full-api.generated/client/outbound-notifications-api-chunk.generated.js";
import {
  createTalkdeskFullApiPhoneDetailsGeneratedClient,
  TalkdeskFullApiPhoneDetailsGeneratedFunctionNames,
  type TalkdeskFullApiPhoneDetailsGeneratedClient,
  type TalkdeskFullApiPhoneDetailsOperationPathParamMap,
  type TalkdeskFullApiPhoneDetailsOperationRequestMap,
} from "./full-api.generated/client/phone-details-chunk.generated.js";
import {
  createTalkdeskFullApiPhoneLabelsGeneratedClient,
  TalkdeskFullApiPhoneLabelsGeneratedFunctionNames,
  type TalkdeskFullApiPhoneLabelsGeneratedClient,
  type TalkdeskFullApiPhoneLabelsOperationPathParamMap,
  type TalkdeskFullApiPhoneLabelsOperationRequestMap,
} from "./full-api.generated/client/phone-labels-chunk.generated.js";
import {
  createTalkdeskFullApiPresenceGeneratedClient,
  TalkdeskFullApiPresenceGeneratedFunctionNames,
  type TalkdeskFullApiPresenceGeneratedClient,
  type TalkdeskFullApiPresenceOperationPathParamMap,
  type TalkdeskFullApiPresenceOperationRequestMap,
} from "./full-api.generated/client/presence-chunk.generated.js";
import {
  createTalkdeskFullApiProactiveOutboundClientCustomAutomationsGeneratedClient,
  TalkdeskFullApiProactiveOutboundClientCustomAutomationsGeneratedFunctionNames,
  type TalkdeskFullApiProactiveOutboundClientCustomAutomationsGeneratedClient,
  type TalkdeskFullApiProactiveOutboundClientCustomAutomationsOperationPathParamMap,
  type TalkdeskFullApiProactiveOutboundClientCustomAutomationsOperationRequestMap,
} from "./full-api.generated/client/proactive-outbound-client-custom-automations-chunk.generated.js";
import {
  createTalkdeskFullApiPromptsAPIGeneratedClient,
  TalkdeskFullApiPromptsAPIGeneratedFunctionNames,
  type TalkdeskFullApiPromptsAPIGeneratedClient,
  type TalkdeskFullApiPromptsAPIOperationPathParamMap,
  type TalkdeskFullApiPromptsAPIOperationRequestMap,
} from "./full-api.generated/client/prompts-api-chunk.generated.js";
import {
  createTalkdeskFullApiQueuesAPIGeneratedClient,
  TalkdeskFullApiQueuesAPIGeneratedFunctionNames,
  type TalkdeskFullApiQueuesAPIGeneratedClient,
  type TalkdeskFullApiQueuesAPIOperationPathParamMap,
  type TalkdeskFullApiQueuesAPIOperationRequestMap,
} from "./full-api.generated/client/queues-api-chunk.generated.js";
import {
  createTalkdeskFullApiRecordListsAPIGeneratedClient,
  TalkdeskFullApiRecordListsAPIGeneratedFunctionNames,
  type TalkdeskFullApiRecordListsAPIGeneratedClient,
  type TalkdeskFullApiRecordListsAPIOperationPathParamMap,
  type TalkdeskFullApiRecordListsAPIOperationRequestMap,
} from "./full-api.generated/client/record-lists-api-chunk.generated.js";
import {
  createTalkdeskFullApiRecordingsAPIGeneratedClient,
  TalkdeskFullApiRecordingsAPIGeneratedFunctionNames,
  type TalkdeskFullApiRecordingsAPIGeneratedClient,
  type TalkdeskFullApiRecordingsAPIOperationPathParamMap,
  type TalkdeskFullApiRecordingsAPIOperationRequestMap,
} from "./full-api.generated/client/recordings-api-chunk.generated.js";
import {
  createTalkdeskFullApiReportingCustomFieldsAPIGeneratedClient,
  TalkdeskFullApiReportingCustomFieldsAPIGeneratedFunctionNames,
  type TalkdeskFullApiReportingCustomFieldsAPIGeneratedClient,
  type TalkdeskFullApiReportingCustomFieldsAPIOperationPathParamMap,
  type TalkdeskFullApiReportingCustomFieldsAPIOperationRequestMap,
} from "./full-api.generated/client/reporting-custom-fields-api-chunk.generated.js";
import {
  createTalkdeskFullApiRetailExperienceCloudERCEcommerceIntegrationsGeneratedClient,
  TalkdeskFullApiRetailExperienceCloudERCEcommerceIntegrationsGeneratedFunctionNames,
  type TalkdeskFullApiRetailExperienceCloudERCEcommerceIntegrationsGeneratedClient,
  type TalkdeskFullApiRetailExperienceCloudERCEcommerceIntegrationsOperationPathParamMap,
  type TalkdeskFullApiRetailExperienceCloudERCEcommerceIntegrationsOperationRequestMap,
} from "./full-api.generated/client/retail-experience-cloud-erc-ecommerce-integrations-chunk.generated.js";
import {
  createTalkdeskFullApiRetailExperienceCloudBridgeGeneratedClient,
  TalkdeskFullApiRetailExperienceCloudBridgeGeneratedFunctionNames,
  type TalkdeskFullApiRetailExperienceCloudBridgeGeneratedClient,
  type TalkdeskFullApiRetailExperienceCloudBridgeOperationPathParamMap,
  type TalkdeskFullApiRetailExperienceCloudBridgeOperationRequestMap,
} from "./full-api.generated/client/retail-experience-cloud-bridge-chunk.generated.js";
import {
  createTalkdeskFullApiRingGroupsAPIGeneratedClient,
  TalkdeskFullApiRingGroupsAPIGeneratedFunctionNames,
  type TalkdeskFullApiRingGroupsAPIGeneratedClient,
  type TalkdeskFullApiRingGroupsAPIOperationPathParamMap,
  type TalkdeskFullApiRingGroupsAPIOperationRequestMap,
} from "./full-api.generated/client/ring-groups-api-chunk.generated.js";
import {
  createTalkdeskFullApiScheduleCallbacksGeneratedClient,
  TalkdeskFullApiScheduleCallbacksGeneratedFunctionNames,
  type TalkdeskFullApiScheduleCallbacksGeneratedClient,
  type TalkdeskFullApiScheduleCallbacksOperationPathParamMap,
  type TalkdeskFullApiScheduleCallbacksOperationRequestMap,
} from "./full-api.generated/client/schedule-callbacks-chunk.generated.js";
import {
  createTalkdeskFullApiScheduleEventImportAPIGeneratedClient,
  TalkdeskFullApiScheduleEventImportAPIGeneratedFunctionNames,
  type TalkdeskFullApiScheduleEventImportAPIGeneratedClient,
  type TalkdeskFullApiScheduleEventImportAPIOperationPathParamMap,
  type TalkdeskFullApiScheduleEventImportAPIOperationRequestMap,
} from "./full-api.generated/client/schedule-event-import-api-chunk.generated.js";
import {
  createTalkdeskFullApiScheduledTimeOffAPIGeneratedClient,
  TalkdeskFullApiScheduledTimeOffAPIGeneratedFunctionNames,
  type TalkdeskFullApiScheduledTimeOffAPIGeneratedClient,
  type TalkdeskFullApiScheduledTimeOffAPIOperationPathParamMap,
  type TalkdeskFullApiScheduledTimeOffAPIOperationRequestMap,
} from "./full-api.generated/client/scheduled-time-off-api-chunk.generated.js";
import {
  createTalkdeskFullApiSCIMAPIGeneratedClient,
  TalkdeskFullApiSCIMAPIGeneratedFunctionNames,
  type TalkdeskFullApiSCIMAPIGeneratedClient,
  type TalkdeskFullApiSCIMAPIOperationPathParamMap,
  type TalkdeskFullApiSCIMAPIOperationRequestMap,
} from "./full-api.generated/client/scim-api-chunk.generated.js";
import {
  createTalkdeskFullApiSeatManagerGeneratedClient,
  TalkdeskFullApiSeatManagerGeneratedFunctionNames,
  type TalkdeskFullApiSeatManagerGeneratedClient,
  type TalkdeskFullApiSeatManagerOperationPathParamMap,
  type TalkdeskFullApiSeatManagerOperationRequestMap,
} from "./full-api.generated/client/seat-manager-chunk.generated.js";
import {
  createTalkdeskFullApiSimulatedEmailAPIGeneratedClient,
  TalkdeskFullApiSimulatedEmailAPIGeneratedFunctionNames,
  type TalkdeskFullApiSimulatedEmailAPIGeneratedClient,
  type TalkdeskFullApiSimulatedEmailAPIOperationPathParamMap,
  type TalkdeskFullApiSimulatedEmailAPIOperationRequestMap,
} from "./full-api.generated/client/simulated-email-api-chunk.generated.js";
import {
  createTalkdeskFullApiStudioCallbackGeneratedClient,
  TalkdeskFullApiStudioCallbackGeneratedFunctionNames,
  type TalkdeskFullApiStudioCallbackGeneratedClient,
  type TalkdeskFullApiStudioCallbackOperationPathParamMap,
  type TalkdeskFullApiStudioCallbackOperationRequestMap,
} from "./full-api.generated/client/studio-callback-chunk.generated.js";
import {
  createTalkdeskFullApiUsageManagerAPIGeneratedClient,
  TalkdeskFullApiUsageManagerAPIGeneratedFunctionNames,
  type TalkdeskFullApiUsageManagerAPIGeneratedClient,
  type TalkdeskFullApiUsageManagerAPIOperationPathParamMap,
  type TalkdeskFullApiUsageManagerAPIOperationRequestMap,
} from "./full-api.generated/client/usage-manager-api-chunk.generated.js";
import {
  createTalkdeskFullApiUserStatusAPIGeneratedClient,
  TalkdeskFullApiUserStatusAPIGeneratedFunctionNames,
  type TalkdeskFullApiUserStatusAPIGeneratedClient,
  type TalkdeskFullApiUserStatusAPIOperationPathParamMap,
  type TalkdeskFullApiUserStatusAPIOperationRequestMap,
} from "./full-api.generated/client/user-status-api-chunk.generated.js";
import {
  createTalkdeskFullApiUsersAPIGeneratedClient,
  TalkdeskFullApiUsersAPIGeneratedFunctionNames,
  type TalkdeskFullApiUsersAPIGeneratedClient,
  type TalkdeskFullApiUsersAPIOperationPathParamMap,
  type TalkdeskFullApiUsersAPIOperationRequestMap,
} from "./full-api.generated/client/users-api-chunk.generated.js";
import {
  createTalkdeskFullApiWebhookTriggerAPIGeneratedClient,
  TalkdeskFullApiWebhookTriggerAPIGeneratedFunctionNames,
  type TalkdeskFullApiWebhookTriggerAPIGeneratedClient,
  type TalkdeskFullApiWebhookTriggerAPIOperationPathParamMap,
  type TalkdeskFullApiWebhookTriggerAPIOperationRequestMap,
} from "./full-api.generated/client/webhook-trigger-api-chunk.generated.js";
import {
  createTalkdeskFullApiWFMGeneratedClient,
  TalkdeskFullApiWFMGeneratedFunctionNames,
  type TalkdeskFullApiWFMGeneratedClient,
  type TalkdeskFullApiWFMOperationPathParamMap,
  type TalkdeskFullApiWFMOperationRequestMap,
} from "./full-api.generated/client/wfm-chunk.generated.js";
import {
  createTalkdeskFullApiWFMRequestManagementAPIGeneratedClient,
  TalkdeskFullApiWFMRequestManagementAPIGeneratedFunctionNames,
  type TalkdeskFullApiWFMRequestManagementAPIGeneratedClient,
  type TalkdeskFullApiWFMRequestManagementAPIOperationPathParamMap,
  type TalkdeskFullApiWFMRequestManagementAPIOperationRequestMap,
} from "./full-api.generated/client/wfm-request-management-api-chunk.generated.js";

export type TalkdeskFullApiPathParamValue = string | number;
export interface TalkdeskFullApiOperationPathParamMap extends TalkdeskFullApiAccountsAPIOperationPathParamMap, TalkdeskFullApiAppointmentSchedulingServiceOperationPathParamMap, TalkdeskFullApiAppsAPIOperationPathParamMap, TalkdeskFullApiAttachmentsOperationPathParamMap, TalkdeskFullApiAttributesAPIOperationPathParamMap, TalkdeskFullApiAuthenticationOperationPathParamMap, TalkdeskFullApiAutomatedNotificationsOperationPathParamMap, TalkdeskFullApiBillingOperationPathParamMap, TalkdeskFullApiBillingInsightsAPIOperationPathParamMap, TalkdeskFullApiBulkImportAPIOperationPathParamMap, TalkdeskFullApiCallbackAPIOperationPathParamMap, TalkdeskFullApiCampaignManagementAPIOperationPathParamMap, TalkdeskFullApiCaseAPIOperationPathParamMap, TalkdeskFullApiContactsAPIOperationPathParamMap, TalkdeskFullApiDCETrackingOperationPathParamMap, TalkdeskFullApiDialerIntegrationsOperationPathParamMap, TalkdeskFullApiDigitalConnectAPIOperationPathParamMap, TalkdeskFullApiEventsAPIOperationPathParamMap, TalkdeskFullApiExploreAPIOperationPathParamMap, TalkdeskFullApiEXPRESSAPIOperationPathParamMap, TalkdeskFullApiExternalCredentialsOperationPathParamMap, TalkdeskFullApiFallbackExperienceOperationPathParamMap, TalkdeskFullApiFeedbackAPIOperationPathParamMap, TalkdeskFullApiFinancialServicesExperienceCloudForBankingOperationPathParamMap, TalkdeskFullApiFinancialServicesExperienceCloudForInsuranceOperationPathParamMap, TalkdeskFullApiFlowsAPIOperationPathParamMap, TalkdeskFullApiFlowsPlatformOperationPathParamMap, TalkdeskFullApiFSIIntegrationsAPIOperationPathParamMap, TalkdeskFullApiFunctionsOperationPathParamMap, TalkdeskFullApiGuardianAPIOperationPathParamMap, TalkdeskFullApiHLSPayersOperationPathParamMap, TalkdeskFullApiHLSProvidersOperationPathParamMap, TalkdeskFullApiHLSSycurioIntegrationOperationPathParamMap, TalkdeskFullApiIdentityOperationPathParamMap, TalkdeskFullApiIdentityAPIOperationPathParamMap, TalkdeskFullApiIndustriesActivityAPIOperationPathParamMap, TalkdeskFullApiIndustriesContextsOperationPathParamMap, TalkdeskFullApiIndustriesExternalEntityMapperOperationPathParamMap, TalkdeskFullApiIndustriesMessagingServiceOperationPathParamMap, TalkdeskFullApiINDUSTRIESSCHEDULERAPIOperationPathParamMap, TalkdeskFullApiIndustriesSettingsOperationPathParamMap, TalkdeskFullApiIndustriesWorkflowsOperationPathParamMap, TalkdeskFullApiKnowledgeManagementOperationPathParamMap, TalkdeskFullApiLicensesManagerOperationPathParamMap, TalkdeskFullApiLiveAPIOperationPathParamMap, TalkdeskFullApiLocationsDirectoryOperationPathParamMap, TalkdeskFullApiMessagesOperationPathParamMap, TalkdeskFullApiNumbersOperationPathParamMap, TalkdeskFullApiOmnichannelAPIOperationPathParamMap, TalkdeskFullApiOutboundNotificationsAPIOperationPathParamMap, TalkdeskFullApiPhoneDetailsOperationPathParamMap, TalkdeskFullApiPhoneLabelsOperationPathParamMap, TalkdeskFullApiPresenceOperationPathParamMap, TalkdeskFullApiProactiveOutboundClientCustomAutomationsOperationPathParamMap, TalkdeskFullApiPromptsAPIOperationPathParamMap, TalkdeskFullApiQueuesAPIOperationPathParamMap, TalkdeskFullApiRecordListsAPIOperationPathParamMap, TalkdeskFullApiRecordingsAPIOperationPathParamMap, TalkdeskFullApiReportingCustomFieldsAPIOperationPathParamMap, TalkdeskFullApiRetailExperienceCloudERCEcommerceIntegrationsOperationPathParamMap, TalkdeskFullApiRetailExperienceCloudBridgeOperationPathParamMap, TalkdeskFullApiRingGroupsAPIOperationPathParamMap, TalkdeskFullApiScheduleCallbacksOperationPathParamMap, TalkdeskFullApiScheduleEventImportAPIOperationPathParamMap, TalkdeskFullApiScheduledTimeOffAPIOperationPathParamMap, TalkdeskFullApiSCIMAPIOperationPathParamMap, TalkdeskFullApiSeatManagerOperationPathParamMap, TalkdeskFullApiSimulatedEmailAPIOperationPathParamMap, TalkdeskFullApiStudioCallbackOperationPathParamMap, TalkdeskFullApiUsageManagerAPIOperationPathParamMap, TalkdeskFullApiUserStatusAPIOperationPathParamMap, TalkdeskFullApiUsersAPIOperationPathParamMap, TalkdeskFullApiWebhookTriggerAPIOperationPathParamMap, TalkdeskFullApiWFMOperationPathParamMap, TalkdeskFullApiWFMRequestManagementAPIOperationPathParamMap {}

export type TalkdeskFullApiOperationKey = keyof TalkdeskFullApiOperationPathParamMap & string;

export type TalkdeskFullApiOperationQueryInput<OperationKey extends TalkdeskFullApiOperationKey> =
  TalkdeskFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: TalkdeskFullApiOperationQueryMap[OperationKey] }
    : { query?: TalkdeskFullApiOperationQueryMap[OperationKey] };

export type TalkdeskFullApiOperationBodyInput<OperationKey extends TalkdeskFullApiOperationKey> =
  [TalkdeskFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : TalkdeskFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: TalkdeskFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: TalkdeskFullApiOperationRequestBodyMap[OperationKey] };

export type TalkdeskFullApiOperationInput<OperationKey extends TalkdeskFullApiOperationKey> = Omit<TalkdeskOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends TalkdeskFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: TalkdeskFullApiOperationPathParamMap[OperationKey] }
) & TalkdeskFullApiOperationQueryInput<OperationKey> & TalkdeskFullApiOperationBodyInput<OperationKey>;

export interface TalkdeskFullApiOperationRequestMap extends TalkdeskFullApiAccountsAPIOperationRequestMap, TalkdeskFullApiAppointmentSchedulingServiceOperationRequestMap, TalkdeskFullApiAppsAPIOperationRequestMap, TalkdeskFullApiAttachmentsOperationRequestMap, TalkdeskFullApiAttributesAPIOperationRequestMap, TalkdeskFullApiAuthenticationOperationRequestMap, TalkdeskFullApiAutomatedNotificationsOperationRequestMap, TalkdeskFullApiBillingOperationRequestMap, TalkdeskFullApiBillingInsightsAPIOperationRequestMap, TalkdeskFullApiBulkImportAPIOperationRequestMap, TalkdeskFullApiCallbackAPIOperationRequestMap, TalkdeskFullApiCampaignManagementAPIOperationRequestMap, TalkdeskFullApiCaseAPIOperationRequestMap, TalkdeskFullApiContactsAPIOperationRequestMap, TalkdeskFullApiDCETrackingOperationRequestMap, TalkdeskFullApiDialerIntegrationsOperationRequestMap, TalkdeskFullApiDigitalConnectAPIOperationRequestMap, TalkdeskFullApiEventsAPIOperationRequestMap, TalkdeskFullApiExploreAPIOperationRequestMap, TalkdeskFullApiEXPRESSAPIOperationRequestMap, TalkdeskFullApiExternalCredentialsOperationRequestMap, TalkdeskFullApiFallbackExperienceOperationRequestMap, TalkdeskFullApiFeedbackAPIOperationRequestMap, TalkdeskFullApiFinancialServicesExperienceCloudForBankingOperationRequestMap, TalkdeskFullApiFinancialServicesExperienceCloudForInsuranceOperationRequestMap, TalkdeskFullApiFlowsAPIOperationRequestMap, TalkdeskFullApiFlowsPlatformOperationRequestMap, TalkdeskFullApiFSIIntegrationsAPIOperationRequestMap, TalkdeskFullApiFunctionsOperationRequestMap, TalkdeskFullApiGuardianAPIOperationRequestMap, TalkdeskFullApiHLSPayersOperationRequestMap, TalkdeskFullApiHLSProvidersOperationRequestMap, TalkdeskFullApiHLSSycurioIntegrationOperationRequestMap, TalkdeskFullApiIdentityOperationRequestMap, TalkdeskFullApiIdentityAPIOperationRequestMap, TalkdeskFullApiIndustriesActivityAPIOperationRequestMap, TalkdeskFullApiIndustriesContextsOperationRequestMap, TalkdeskFullApiIndustriesExternalEntityMapperOperationRequestMap, TalkdeskFullApiIndustriesMessagingServiceOperationRequestMap, TalkdeskFullApiINDUSTRIESSCHEDULERAPIOperationRequestMap, TalkdeskFullApiIndustriesSettingsOperationRequestMap, TalkdeskFullApiIndustriesWorkflowsOperationRequestMap, TalkdeskFullApiKnowledgeManagementOperationRequestMap, TalkdeskFullApiLicensesManagerOperationRequestMap, TalkdeskFullApiLiveAPIOperationRequestMap, TalkdeskFullApiLocationsDirectoryOperationRequestMap, TalkdeskFullApiMessagesOperationRequestMap, TalkdeskFullApiNumbersOperationRequestMap, TalkdeskFullApiOmnichannelAPIOperationRequestMap, TalkdeskFullApiOutboundNotificationsAPIOperationRequestMap, TalkdeskFullApiPhoneDetailsOperationRequestMap, TalkdeskFullApiPhoneLabelsOperationRequestMap, TalkdeskFullApiPresenceOperationRequestMap, TalkdeskFullApiProactiveOutboundClientCustomAutomationsOperationRequestMap, TalkdeskFullApiPromptsAPIOperationRequestMap, TalkdeskFullApiQueuesAPIOperationRequestMap, TalkdeskFullApiRecordListsAPIOperationRequestMap, TalkdeskFullApiRecordingsAPIOperationRequestMap, TalkdeskFullApiReportingCustomFieldsAPIOperationRequestMap, TalkdeskFullApiRetailExperienceCloudERCEcommerceIntegrationsOperationRequestMap, TalkdeskFullApiRetailExperienceCloudBridgeOperationRequestMap, TalkdeskFullApiRingGroupsAPIOperationRequestMap, TalkdeskFullApiScheduleCallbacksOperationRequestMap, TalkdeskFullApiScheduleEventImportAPIOperationRequestMap, TalkdeskFullApiScheduledTimeOffAPIOperationRequestMap, TalkdeskFullApiSCIMAPIOperationRequestMap, TalkdeskFullApiSeatManagerOperationRequestMap, TalkdeskFullApiSimulatedEmailAPIOperationRequestMap, TalkdeskFullApiStudioCallbackOperationRequestMap, TalkdeskFullApiUsageManagerAPIOperationRequestMap, TalkdeskFullApiUserStatusAPIOperationRequestMap, TalkdeskFullApiUsersAPIOperationRequestMap, TalkdeskFullApiWebhookTriggerAPIOperationRequestMap, TalkdeskFullApiWFMOperationRequestMap, TalkdeskFullApiWFMRequestManagementAPIOperationRequestMap {}

export type TalkdeskFullApiOperationArgs<OperationKey extends TalkdeskFullApiOperationKey> = {} extends TalkdeskFullApiOperationPathParamMap[OperationKey]
  ? [input?: TalkdeskFullApiOperationRequestMap[OperationKey]]
  : [input: TalkdeskFullApiOperationRequestMap[OperationKey]];

export type TalkdeskGeneratedOperationCaller = <OperationKey extends TalkdeskFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: TalkdeskFullApiOperationArgs<OperationKey>
) => Promise<TalkdeskFullApiOperationResponseMap[OperationKey]>;

export interface TalkdeskFullApiGeneratedClient extends TalkdeskFullApiAccountsAPIGeneratedClient, TalkdeskFullApiAppointmentSchedulingServiceGeneratedClient, TalkdeskFullApiAppsAPIGeneratedClient, TalkdeskFullApiAttachmentsGeneratedClient, TalkdeskFullApiAttributesAPIGeneratedClient, TalkdeskFullApiAuthenticationGeneratedClient, TalkdeskFullApiAutomatedNotificationsGeneratedClient, TalkdeskFullApiBillingGeneratedClient, TalkdeskFullApiBillingInsightsAPIGeneratedClient, TalkdeskFullApiBulkImportAPIGeneratedClient, TalkdeskFullApiCallbackAPIGeneratedClient, TalkdeskFullApiCampaignManagementAPIGeneratedClient, TalkdeskFullApiCaseAPIGeneratedClient, TalkdeskFullApiContactsAPIGeneratedClient, TalkdeskFullApiDCETrackingGeneratedClient, TalkdeskFullApiDialerIntegrationsGeneratedClient, TalkdeskFullApiDigitalConnectAPIGeneratedClient, TalkdeskFullApiEventsAPIGeneratedClient, TalkdeskFullApiExploreAPIGeneratedClient, TalkdeskFullApiEXPRESSAPIGeneratedClient, TalkdeskFullApiExternalCredentialsGeneratedClient, TalkdeskFullApiFallbackExperienceGeneratedClient, TalkdeskFullApiFeedbackAPIGeneratedClient, TalkdeskFullApiFinancialServicesExperienceCloudForBankingGeneratedClient, TalkdeskFullApiFinancialServicesExperienceCloudForInsuranceGeneratedClient, TalkdeskFullApiFlowsAPIGeneratedClient, TalkdeskFullApiFlowsPlatformGeneratedClient, TalkdeskFullApiFSIIntegrationsAPIGeneratedClient, TalkdeskFullApiFunctionsGeneratedClient, TalkdeskFullApiGuardianAPIGeneratedClient, TalkdeskFullApiHLSPayersGeneratedClient, TalkdeskFullApiHLSProvidersGeneratedClient, TalkdeskFullApiHLSSycurioIntegrationGeneratedClient, TalkdeskFullApiIdentityGeneratedClient, TalkdeskFullApiIdentityAPIGeneratedClient, TalkdeskFullApiIndustriesActivityAPIGeneratedClient, TalkdeskFullApiIndustriesContextsGeneratedClient, TalkdeskFullApiIndustriesExternalEntityMapperGeneratedClient, TalkdeskFullApiIndustriesMessagingServiceGeneratedClient, TalkdeskFullApiINDUSTRIESSCHEDULERAPIGeneratedClient, TalkdeskFullApiIndustriesSettingsGeneratedClient, TalkdeskFullApiIndustriesWorkflowsGeneratedClient, TalkdeskFullApiKnowledgeManagementGeneratedClient, TalkdeskFullApiLicensesManagerGeneratedClient, TalkdeskFullApiLiveAPIGeneratedClient, TalkdeskFullApiLocationsDirectoryGeneratedClient, TalkdeskFullApiMessagesGeneratedClient, TalkdeskFullApiNumbersGeneratedClient, TalkdeskFullApiOmnichannelAPIGeneratedClient, TalkdeskFullApiOutboundNotificationsAPIGeneratedClient, TalkdeskFullApiPhoneDetailsGeneratedClient, TalkdeskFullApiPhoneLabelsGeneratedClient, TalkdeskFullApiPresenceGeneratedClient, TalkdeskFullApiProactiveOutboundClientCustomAutomationsGeneratedClient, TalkdeskFullApiPromptsAPIGeneratedClient, TalkdeskFullApiQueuesAPIGeneratedClient, TalkdeskFullApiRecordListsAPIGeneratedClient, TalkdeskFullApiRecordingsAPIGeneratedClient, TalkdeskFullApiReportingCustomFieldsAPIGeneratedClient, TalkdeskFullApiRetailExperienceCloudERCEcommerceIntegrationsGeneratedClient, TalkdeskFullApiRetailExperienceCloudBridgeGeneratedClient, TalkdeskFullApiRingGroupsAPIGeneratedClient, TalkdeskFullApiScheduleCallbacksGeneratedClient, TalkdeskFullApiScheduleEventImportAPIGeneratedClient, TalkdeskFullApiScheduledTimeOffAPIGeneratedClient, TalkdeskFullApiSCIMAPIGeneratedClient, TalkdeskFullApiSeatManagerGeneratedClient, TalkdeskFullApiSimulatedEmailAPIGeneratedClient, TalkdeskFullApiStudioCallbackGeneratedClient, TalkdeskFullApiUsageManagerAPIGeneratedClient, TalkdeskFullApiUserStatusAPIGeneratedClient, TalkdeskFullApiUsersAPIGeneratedClient, TalkdeskFullApiWebhookTriggerAPIGeneratedClient, TalkdeskFullApiWFMGeneratedClient, TalkdeskFullApiWFMRequestManagementAPIGeneratedClient {}

export const TALKDESK_FULL_API_GENERATED_FUNCTION_COUNT = 515 as const;
export const TALKDESK_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...TalkdeskFullApiAccountsAPIGeneratedFunctionNames,
  ...TalkdeskFullApiAppointmentSchedulingServiceGeneratedFunctionNames,
  ...TalkdeskFullApiAppsAPIGeneratedFunctionNames,
  ...TalkdeskFullApiAttachmentsGeneratedFunctionNames,
  ...TalkdeskFullApiAttributesAPIGeneratedFunctionNames,
  ...TalkdeskFullApiAuthenticationGeneratedFunctionNames,
  ...TalkdeskFullApiAutomatedNotificationsGeneratedFunctionNames,
  ...TalkdeskFullApiBillingGeneratedFunctionNames,
  ...TalkdeskFullApiBillingInsightsAPIGeneratedFunctionNames,
  ...TalkdeskFullApiBulkImportAPIGeneratedFunctionNames,
  ...TalkdeskFullApiCallbackAPIGeneratedFunctionNames,
  ...TalkdeskFullApiCampaignManagementAPIGeneratedFunctionNames,
  ...TalkdeskFullApiCaseAPIGeneratedFunctionNames,
  ...TalkdeskFullApiContactsAPIGeneratedFunctionNames,
  ...TalkdeskFullApiDCETrackingGeneratedFunctionNames,
  ...TalkdeskFullApiDialerIntegrationsGeneratedFunctionNames,
  ...TalkdeskFullApiDigitalConnectAPIGeneratedFunctionNames,
  ...TalkdeskFullApiEventsAPIGeneratedFunctionNames,
  ...TalkdeskFullApiExploreAPIGeneratedFunctionNames,
  ...TalkdeskFullApiEXPRESSAPIGeneratedFunctionNames,
  ...TalkdeskFullApiExternalCredentialsGeneratedFunctionNames,
  ...TalkdeskFullApiFallbackExperienceGeneratedFunctionNames,
  ...TalkdeskFullApiFeedbackAPIGeneratedFunctionNames,
  ...TalkdeskFullApiFinancialServicesExperienceCloudForBankingGeneratedFunctionNames,
  ...TalkdeskFullApiFinancialServicesExperienceCloudForInsuranceGeneratedFunctionNames,
  ...TalkdeskFullApiFlowsAPIGeneratedFunctionNames,
  ...TalkdeskFullApiFlowsPlatformGeneratedFunctionNames,
  ...TalkdeskFullApiFSIIntegrationsAPIGeneratedFunctionNames,
  ...TalkdeskFullApiFunctionsGeneratedFunctionNames,
  ...TalkdeskFullApiGuardianAPIGeneratedFunctionNames,
  ...TalkdeskFullApiHLSPayersGeneratedFunctionNames,
  ...TalkdeskFullApiHLSProvidersGeneratedFunctionNames,
  ...TalkdeskFullApiHLSSycurioIntegrationGeneratedFunctionNames,
  ...TalkdeskFullApiIdentityGeneratedFunctionNames,
  ...TalkdeskFullApiIdentityAPIGeneratedFunctionNames,
  ...TalkdeskFullApiIndustriesActivityAPIGeneratedFunctionNames,
  ...TalkdeskFullApiIndustriesContextsGeneratedFunctionNames,
  ...TalkdeskFullApiIndustriesExternalEntityMapperGeneratedFunctionNames,
  ...TalkdeskFullApiIndustriesMessagingServiceGeneratedFunctionNames,
  ...TalkdeskFullApiINDUSTRIESSCHEDULERAPIGeneratedFunctionNames,
  ...TalkdeskFullApiIndustriesSettingsGeneratedFunctionNames,
  ...TalkdeskFullApiIndustriesWorkflowsGeneratedFunctionNames,
  ...TalkdeskFullApiKnowledgeManagementGeneratedFunctionNames,
  ...TalkdeskFullApiLicensesManagerGeneratedFunctionNames,
  ...TalkdeskFullApiLiveAPIGeneratedFunctionNames,
  ...TalkdeskFullApiLocationsDirectoryGeneratedFunctionNames,
  ...TalkdeskFullApiMessagesGeneratedFunctionNames,
  ...TalkdeskFullApiNumbersGeneratedFunctionNames,
  ...TalkdeskFullApiOmnichannelAPIGeneratedFunctionNames,
  ...TalkdeskFullApiOutboundNotificationsAPIGeneratedFunctionNames,
  ...TalkdeskFullApiPhoneDetailsGeneratedFunctionNames,
  ...TalkdeskFullApiPhoneLabelsGeneratedFunctionNames,
  ...TalkdeskFullApiPresenceGeneratedFunctionNames,
  ...TalkdeskFullApiProactiveOutboundClientCustomAutomationsGeneratedFunctionNames,
  ...TalkdeskFullApiPromptsAPIGeneratedFunctionNames,
  ...TalkdeskFullApiQueuesAPIGeneratedFunctionNames,
  ...TalkdeskFullApiRecordListsAPIGeneratedFunctionNames,
  ...TalkdeskFullApiRecordingsAPIGeneratedFunctionNames,
  ...TalkdeskFullApiReportingCustomFieldsAPIGeneratedFunctionNames,
  ...TalkdeskFullApiRetailExperienceCloudERCEcommerceIntegrationsGeneratedFunctionNames,
  ...TalkdeskFullApiRetailExperienceCloudBridgeGeneratedFunctionNames,
  ...TalkdeskFullApiRingGroupsAPIGeneratedFunctionNames,
  ...TalkdeskFullApiScheduleCallbacksGeneratedFunctionNames,
  ...TalkdeskFullApiScheduleEventImportAPIGeneratedFunctionNames,
  ...TalkdeskFullApiScheduledTimeOffAPIGeneratedFunctionNames,
  ...TalkdeskFullApiSCIMAPIGeneratedFunctionNames,
  ...TalkdeskFullApiSeatManagerGeneratedFunctionNames,
  ...TalkdeskFullApiSimulatedEmailAPIGeneratedFunctionNames,
  ...TalkdeskFullApiStudioCallbackGeneratedFunctionNames,
  ...TalkdeskFullApiUsageManagerAPIGeneratedFunctionNames,
  ...TalkdeskFullApiUserStatusAPIGeneratedFunctionNames,
  ...TalkdeskFullApiUsersAPIGeneratedFunctionNames,
  ...TalkdeskFullApiWebhookTriggerAPIGeneratedFunctionNames,
  ...TalkdeskFullApiWFMGeneratedFunctionNames,
  ...TalkdeskFullApiWFMRequestManagementAPIGeneratedFunctionNames,
] as const satisfies readonly (keyof TalkdeskFullApiGeneratedClient)[];

export function createTalkdeskFullApiGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiGeneratedClient {
  return Object.assign(
    {},
    createTalkdeskFullApiAccountsAPIGeneratedClient(callOperation),
    createTalkdeskFullApiAppointmentSchedulingServiceGeneratedClient(callOperation),
    createTalkdeskFullApiAppsAPIGeneratedClient(callOperation),
    createTalkdeskFullApiAttachmentsGeneratedClient(callOperation),
    createTalkdeskFullApiAttributesAPIGeneratedClient(callOperation),
    createTalkdeskFullApiAuthenticationGeneratedClient(callOperation),
    createTalkdeskFullApiAutomatedNotificationsGeneratedClient(callOperation),
    createTalkdeskFullApiBillingGeneratedClient(callOperation),
    createTalkdeskFullApiBillingInsightsAPIGeneratedClient(callOperation),
    createTalkdeskFullApiBulkImportAPIGeneratedClient(callOperation),
    createTalkdeskFullApiCallbackAPIGeneratedClient(callOperation),
    createTalkdeskFullApiCampaignManagementAPIGeneratedClient(callOperation),
    createTalkdeskFullApiCaseAPIGeneratedClient(callOperation),
    createTalkdeskFullApiContactsAPIGeneratedClient(callOperation),
    createTalkdeskFullApiDCETrackingGeneratedClient(callOperation),
    createTalkdeskFullApiDialerIntegrationsGeneratedClient(callOperation),
    createTalkdeskFullApiDigitalConnectAPIGeneratedClient(callOperation),
    createTalkdeskFullApiEventsAPIGeneratedClient(callOperation),
    createTalkdeskFullApiExploreAPIGeneratedClient(callOperation),
    createTalkdeskFullApiEXPRESSAPIGeneratedClient(callOperation),
    createTalkdeskFullApiExternalCredentialsGeneratedClient(callOperation),
    createTalkdeskFullApiFallbackExperienceGeneratedClient(callOperation),
    createTalkdeskFullApiFeedbackAPIGeneratedClient(callOperation),
    createTalkdeskFullApiFinancialServicesExperienceCloudForBankingGeneratedClient(callOperation),
    createTalkdeskFullApiFinancialServicesExperienceCloudForInsuranceGeneratedClient(callOperation),
    createTalkdeskFullApiFlowsAPIGeneratedClient(callOperation),
    createTalkdeskFullApiFlowsPlatformGeneratedClient(callOperation),
    createTalkdeskFullApiFSIIntegrationsAPIGeneratedClient(callOperation),
    createTalkdeskFullApiFunctionsGeneratedClient(callOperation),
    createTalkdeskFullApiGuardianAPIGeneratedClient(callOperation),
    createTalkdeskFullApiHLSPayersGeneratedClient(callOperation),
    createTalkdeskFullApiHLSProvidersGeneratedClient(callOperation),
    createTalkdeskFullApiHLSSycurioIntegrationGeneratedClient(callOperation),
    createTalkdeskFullApiIdentityGeneratedClient(callOperation),
    createTalkdeskFullApiIdentityAPIGeneratedClient(callOperation),
    createTalkdeskFullApiIndustriesActivityAPIGeneratedClient(callOperation),
    createTalkdeskFullApiIndustriesContextsGeneratedClient(callOperation),
    createTalkdeskFullApiIndustriesExternalEntityMapperGeneratedClient(callOperation),
    createTalkdeskFullApiIndustriesMessagingServiceGeneratedClient(callOperation),
    createTalkdeskFullApiINDUSTRIESSCHEDULERAPIGeneratedClient(callOperation),
    createTalkdeskFullApiIndustriesSettingsGeneratedClient(callOperation),
    createTalkdeskFullApiIndustriesWorkflowsGeneratedClient(callOperation),
    createTalkdeskFullApiKnowledgeManagementGeneratedClient(callOperation),
    createTalkdeskFullApiLicensesManagerGeneratedClient(callOperation),
    createTalkdeskFullApiLiveAPIGeneratedClient(callOperation),
    createTalkdeskFullApiLocationsDirectoryGeneratedClient(callOperation),
    createTalkdeskFullApiMessagesGeneratedClient(callOperation),
    createTalkdeskFullApiNumbersGeneratedClient(callOperation),
    createTalkdeskFullApiOmnichannelAPIGeneratedClient(callOperation),
    createTalkdeskFullApiOutboundNotificationsAPIGeneratedClient(callOperation),
    createTalkdeskFullApiPhoneDetailsGeneratedClient(callOperation),
    createTalkdeskFullApiPhoneLabelsGeneratedClient(callOperation),
    createTalkdeskFullApiPresenceGeneratedClient(callOperation),
    createTalkdeskFullApiProactiveOutboundClientCustomAutomationsGeneratedClient(callOperation),
    createTalkdeskFullApiPromptsAPIGeneratedClient(callOperation),
    createTalkdeskFullApiQueuesAPIGeneratedClient(callOperation),
    createTalkdeskFullApiRecordListsAPIGeneratedClient(callOperation),
    createTalkdeskFullApiRecordingsAPIGeneratedClient(callOperation),
    createTalkdeskFullApiReportingCustomFieldsAPIGeneratedClient(callOperation),
    createTalkdeskFullApiRetailExperienceCloudERCEcommerceIntegrationsGeneratedClient(callOperation),
    createTalkdeskFullApiRetailExperienceCloudBridgeGeneratedClient(callOperation),
    createTalkdeskFullApiRingGroupsAPIGeneratedClient(callOperation),
    createTalkdeskFullApiScheduleCallbacksGeneratedClient(callOperation),
    createTalkdeskFullApiScheduleEventImportAPIGeneratedClient(callOperation),
    createTalkdeskFullApiScheduledTimeOffAPIGeneratedClient(callOperation),
    createTalkdeskFullApiSCIMAPIGeneratedClient(callOperation),
    createTalkdeskFullApiSeatManagerGeneratedClient(callOperation),
    createTalkdeskFullApiSimulatedEmailAPIGeneratedClient(callOperation),
    createTalkdeskFullApiStudioCallbackGeneratedClient(callOperation),
    createTalkdeskFullApiUsageManagerAPIGeneratedClient(callOperation),
    createTalkdeskFullApiUserStatusAPIGeneratedClient(callOperation),
    createTalkdeskFullApiUsersAPIGeneratedClient(callOperation),
    createTalkdeskFullApiWebhookTriggerAPIGeneratedClient(callOperation),
    createTalkdeskFullApiWFMGeneratedClient(callOperation),
    createTalkdeskFullApiWFMRequestManagementAPIGeneratedClient(callOperation),
  ) as TalkdeskFullApiGeneratedClient;
}
