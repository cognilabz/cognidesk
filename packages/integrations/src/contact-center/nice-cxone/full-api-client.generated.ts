// Generated from NICE CXone public OpenAPI specs (https://developer.niceincontact.com/API).
// Do not edit by hand; run scripts/generate-nice-cxone-full-api.mjs after checking upstream docs.

import type { NiceCxoneOperationRequestInput } from "./index.js";
import type {
  NiceCxoneFullApiOperationQueryMap,
  NiceCxoneFullApiOperationQueryRequiredMap,
  NiceCxoneFullApiOperationRequestBodyMap,
  NiceCxoneFullApiOperationRequestBodyRequiredMap,
  NiceCxoneFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createNiceCxoneFullApiAccessKeysGeneratedClient,
  NiceCxoneFullApiAccessKeysGeneratedFunctionNames,
  type NiceCxoneFullApiAccessKeysGeneratedClient,
  type NiceCxoneFullApiAccessKeysOperationPathParamMap,
  type NiceCxoneFullApiAccessKeysOperationRequestMap,
} from "./full-api.generated/client/access-keys-chunk.generated.js";
import {
  createNiceCxoneFullApiAddressBookGeneratedClient,
  NiceCxoneFullApiAddressBookGeneratedFunctionNames,
  type NiceCxoneFullApiAddressBookGeneratedClient,
  type NiceCxoneFullApiAddressBookOperationPathParamMap,
  type NiceCxoneFullApiAddressBookOperationRequestMap,
} from "./full-api.generated/client/address-book-chunk.generated.js";
import {
  createNiceCxoneFullApiAgentMessagingGeneratedClient,
  NiceCxoneFullApiAgentMessagingGeneratedFunctionNames,
  type NiceCxoneFullApiAgentMessagingGeneratedClient,
  type NiceCxoneFullApiAgentMessagingOperationPathParamMap,
  type NiceCxoneFullApiAgentMessagingOperationRequestMap,
} from "./full-api.generated/client/agent-messaging-chunk.generated.js";
import {
  createNiceCxoneFullApiAgentPhoneGeneratedClient,
  NiceCxoneFullApiAgentPhoneGeneratedFunctionNames,
  type NiceCxoneFullApiAgentPhoneGeneratedClient,
  type NiceCxoneFullApiAgentPhoneOperationPathParamMap,
  type NiceCxoneFullApiAgentPhoneOperationRequestMap,
} from "./full-api.generated/client/agent-phone-chunk.generated.js";
import {
  createNiceCxoneFullApiAgentsGeneratedClient,
  NiceCxoneFullApiAgentsGeneratedFunctionNames,
  type NiceCxoneFullApiAgentsGeneratedClient,
  type NiceCxoneFullApiAgentsOperationPathParamMap,
  type NiceCxoneFullApiAgentsOperationRequestMap,
} from "./full-api.generated/client/agents-chunk.generated.js";
import {
  createNiceCxoneFullApiAnalyzedInteractionSegmentsGeneratedClient,
  NiceCxoneFullApiAnalyzedInteractionSegmentsGeneratedFunctionNames,
  type NiceCxoneFullApiAnalyzedInteractionSegmentsGeneratedClient,
  type NiceCxoneFullApiAnalyzedInteractionSegmentsOperationPathParamMap,
  type NiceCxoneFullApiAnalyzedInteractionSegmentsOperationRequestMap,
} from "./full-api.generated/client/analyzed-interaction-segments-chunk.generated.js";
import {
  createNiceCxoneFullApiApplicationsGeneratedClient,
  NiceCxoneFullApiApplicationsGeneratedFunctionNames,
  type NiceCxoneFullApiApplicationsGeneratedClient,
  type NiceCxoneFullApiApplicationsOperationPathParamMap,
  type NiceCxoneFullApiApplicationsOperationRequestMap,
} from "./full-api.generated/client/applications-chunk.generated.js";
import {
  createNiceCxoneFullApiAssociationGeneratedClient,
  NiceCxoneFullApiAssociationGeneratedFunctionNames,
  type NiceCxoneFullApiAssociationGeneratedClient,
  type NiceCxoneFullApiAssociationOperationPathParamMap,
  type NiceCxoneFullApiAssociationOperationRequestMap,
} from "./full-api.generated/client/association-chunk.generated.js";
import {
  createNiceCxoneFullApiAttachmentGeneratedClient,
  NiceCxoneFullApiAttachmentGeneratedFunctionNames,
  type NiceCxoneFullApiAttachmentGeneratedClient,
  type NiceCxoneFullApiAttachmentOperationPathParamMap,
  type NiceCxoneFullApiAttachmentOperationRequestMap,
} from "./full-api.generated/client/attachment-chunk.generated.js";
import {
  createNiceCxoneFullApiAuthenticateGeneratedClient,
  NiceCxoneFullApiAuthenticateGeneratedFunctionNames,
  type NiceCxoneFullApiAuthenticateGeneratedClient,
  type NiceCxoneFullApiAuthenticateOperationPathParamMap,
  type NiceCxoneFullApiAuthenticateOperationRequestMap,
} from "./full-api.generated/client/authenticate-chunk.generated.js";
import {
  createNiceCxoneFullApiAuthorizationManagementGeneratedClient,
  NiceCxoneFullApiAuthorizationManagementGeneratedFunctionNames,
  type NiceCxoneFullApiAuthorizationManagementGeneratedClient,
  type NiceCxoneFullApiAuthorizationManagementOperationPathParamMap,
  type NiceCxoneFullApiAuthorizationManagementOperationRequestMap,
} from "./full-api.generated/client/authorization-management-chunk.generated.js";
import {
  createNiceCxoneFullApiAuthorizeGeneratedClient,
  NiceCxoneFullApiAuthorizeGeneratedFunctionNames,
  type NiceCxoneFullApiAuthorizeGeneratedClient,
  type NiceCxoneFullApiAuthorizeOperationPathParamMap,
  type NiceCxoneFullApiAuthorizeOperationRequestMap,
} from "./full-api.generated/client/authorize-chunk.generated.js";
import {
  createNiceCxoneFullApiBillingProductUsageGeneratedClient,
  NiceCxoneFullApiBillingProductUsageGeneratedFunctionNames,
  type NiceCxoneFullApiBillingProductUsageGeneratedClient,
  type NiceCxoneFullApiBillingProductUsageOperationPathParamMap,
  type NiceCxoneFullApiBillingProductUsageOperationRequestMap,
} from "./full-api.generated/client/billing-product-usage-chunk.generated.js";
import {
  createNiceCxoneFullApiBusinessDataGeneratedClient,
  NiceCxoneFullApiBusinessDataGeneratedFunctionNames,
  type NiceCxoneFullApiBusinessDataGeneratedClient,
  type NiceCxoneFullApiBusinessDataOperationPathParamMap,
  type NiceCxoneFullApiBusinessDataOperationRequestMap,
} from "./full-api.generated/client/business-data-chunk.generated.js";
import {
  createNiceCxoneFullApiBusinessDataAPIGeneratedClient,
  NiceCxoneFullApiBusinessDataAPIGeneratedFunctionNames,
  type NiceCxoneFullApiBusinessDataAPIGeneratedClient,
  type NiceCxoneFullApiBusinessDataAPIOperationPathParamMap,
  type NiceCxoneFullApiBusinessDataAPIOperationRequestMap,
} from "./full-api.generated/client/business-data-api-chunk.generated.js";
import {
  createNiceCxoneFullApiCallbackGeneratedClient,
  NiceCxoneFullApiCallbackGeneratedFunctionNames,
  type NiceCxoneFullApiCallbackGeneratedClient,
  type NiceCxoneFullApiCallbackOperationPathParamMap,
  type NiceCxoneFullApiCallbackOperationRequestMap,
} from "./full-api.generated/client/callback-chunk.generated.js";
import {
  createNiceCxoneFullApiChannelPointOfContactGeneratedClient,
  NiceCxoneFullApiChannelPointOfContactGeneratedFunctionNames,
  type NiceCxoneFullApiChannelPointOfContactGeneratedClient,
  type NiceCxoneFullApiChannelPointOfContactOperationPathParamMap,
  type NiceCxoneFullApiChannelPointOfContactOperationRequestMap,
} from "./full-api.generated/client/channel-point-of-contact-chunk.generated.js";
import {
  createNiceCxoneFullApiChatRequestsGeneratedClient,
  NiceCxoneFullApiChatRequestsGeneratedFunctionNames,
  type NiceCxoneFullApiChatRequestsGeneratedClient,
  type NiceCxoneFullApiChatRequestsOperationPathParamMap,
  type NiceCxoneFullApiChatRequestsOperationRequestMap,
} from "./full-api.generated/client/chat-requests-chunk.generated.js";
import {
  createNiceCxoneFullApiCommitmentsGeneratedClient,
  NiceCxoneFullApiCommitmentsGeneratedFunctionNames,
  type NiceCxoneFullApiCommitmentsGeneratedClient,
  type NiceCxoneFullApiCommitmentsOperationPathParamMap,
  type NiceCxoneFullApiCommitmentsOperationRequestMap,
} from "./full-api.generated/client/commitments-chunk.generated.js";
import {
  createNiceCxoneFullApiContactGeneratedClient,
  NiceCxoneFullApiContactGeneratedFunctionNames,
  type NiceCxoneFullApiContactGeneratedClient,
  type NiceCxoneFullApiContactOperationPathParamMap,
  type NiceCxoneFullApiContactOperationRequestMap,
} from "./full-api.generated/client/contact-chunk.generated.js";
import {
  createNiceCxoneFullApiContactsGeneratedClient,
  NiceCxoneFullApiContactsGeneratedFunctionNames,
  type NiceCxoneFullApiContactsGeneratedClient,
  type NiceCxoneFullApiContactsOperationPathParamMap,
  type NiceCxoneFullApiContactsOperationRequestMap,
} from "./full-api.generated/client/contacts-chunk.generated.js";
import {
  createNiceCxoneFullApiCorrelationManagementGeneratedClient,
  NiceCxoneFullApiCorrelationManagementGeneratedFunctionNames,
  type NiceCxoneFullApiCorrelationManagementGeneratedClient,
  type NiceCxoneFullApiCorrelationManagementOperationPathParamMap,
  type NiceCxoneFullApiCorrelationManagementOperationRequestMap,
} from "./full-api.generated/client/correlation-management-chunk.generated.js";
import {
  createNiceCxoneFullApiCustomFieldDefinitionsGeneratedClient,
  NiceCxoneFullApiCustomFieldDefinitionsGeneratedFunctionNames,
  type NiceCxoneFullApiCustomFieldDefinitionsGeneratedClient,
  type NiceCxoneFullApiCustomFieldDefinitionsOperationPathParamMap,
  type NiceCxoneFullApiCustomFieldDefinitionsOperationRequestMap,
} from "./full-api.generated/client/custom-field-definitions-chunk.generated.js";
import {
  createNiceCxoneFullApiCustomerGeneratedClient,
  NiceCxoneFullApiCustomerGeneratedFunctionNames,
  type NiceCxoneFullApiCustomerGeneratedClient,
  type NiceCxoneFullApiCustomerOperationPathParamMap,
  type NiceCxoneFullApiCustomerOperationRequestMap,
} from "./full-api.generated/client/customer-chunk.generated.js";
import {
  createNiceCxoneFullApiDesktopProfilesGeneratedClient,
  NiceCxoneFullApiDesktopProfilesGeneratedFunctionNames,
  type NiceCxoneFullApiDesktopProfilesGeneratedClient,
  type NiceCxoneFullApiDesktopProfilesOperationPathParamMap,
  type NiceCxoneFullApiDesktopProfilesOperationRequestMap,
} from "./full-api.generated/client/desktop-profiles-chunk.generated.js";
import {
  createNiceCxoneFullApiDiscoveryGeneratedClient,
  NiceCxoneFullApiDiscoveryGeneratedFunctionNames,
  type NiceCxoneFullApiDiscoveryGeneratedClient,
  type NiceCxoneFullApiDiscoveryOperationPathParamMap,
  type NiceCxoneFullApiDiscoveryOperationRequestMap,
} from "./full-api.generated/client/discovery-chunk.generated.js";
import {
  createNiceCxoneFullApiDivisionManagementGeneratedClient,
  NiceCxoneFullApiDivisionManagementGeneratedFunctionNames,
  type NiceCxoneFullApiDivisionManagementGeneratedClient,
  type NiceCxoneFullApiDivisionManagementOperationPathParamMap,
  type NiceCxoneFullApiDivisionManagementOperationRequestMap,
} from "./full-api.generated/client/division-management-chunk.generated.js";
import {
  createNiceCxoneFullApiDocumentsGeneratedClient,
  NiceCxoneFullApiDocumentsGeneratedFunctionNames,
  type NiceCxoneFullApiDocumentsGeneratedClient,
  type NiceCxoneFullApiDocumentsOperationPathParamMap,
  type NiceCxoneFullApiDocumentsOperationRequestMap,
} from "./full-api.generated/client/documents-chunk.generated.js";
import {
  createNiceCxoneFullApiEmailsGeneratedClient,
  NiceCxoneFullApiEmailsGeneratedFunctionNames,
  type NiceCxoneFullApiEmailsGeneratedClient,
  type NiceCxoneFullApiEmailsOperationPathParamMap,
  type NiceCxoneFullApiEmailsOperationRequestMap,
} from "./full-api.generated/client/emails-chunk.generated.js";
import {
  createNiceCxoneFullApiExportSummaryGeneratedClient,
  NiceCxoneFullApiExportSummaryGeneratedFunctionNames,
  type NiceCxoneFullApiExportSummaryGeneratedClient,
  type NiceCxoneFullApiExportSummaryOperationPathParamMap,
  type NiceCxoneFullApiExportSummaryOperationRequestMap,
} from "./full-api.generated/client/export-summary-chunk.generated.js";
import {
  createNiceCxoneFullApiExtractingDataGeneratedClient,
  NiceCxoneFullApiExtractingDataGeneratedFunctionNames,
  type NiceCxoneFullApiExtractingDataGeneratedClient,
  type NiceCxoneFullApiExtractingDataOperationPathParamMap,
  type NiceCxoneFullApiExtractingDataOperationRequestMap,
} from "./full-api.generated/client/extracting-data-chunk.generated.js";
import {
  createNiceCxoneFullApiGdprManagerRequestControllerGeneratedClient,
  NiceCxoneFullApiGdprManagerRequestControllerGeneratedFunctionNames,
  type NiceCxoneFullApiGdprManagerRequestControllerGeneratedClient,
  type NiceCxoneFullApiGdprManagerRequestControllerOperationPathParamMap,
  type NiceCxoneFullApiGdprManagerRequestControllerOperationRequestMap,
} from "./full-api.generated/client/gdpr-manager-request-controller-chunk.generated.js";
import {
  createNiceCxoneFullApiGeneralGeneratedClient,
  NiceCxoneFullApiGeneralGeneratedFunctionNames,
  type NiceCxoneFullApiGeneralGeneratedClient,
  type NiceCxoneFullApiGeneralOperationPathParamMap,
  type NiceCxoneFullApiGeneralOperationRequestMap,
} from "./full-api.generated/client/general-chunk.generated.js";
import {
  createNiceCxoneFullApiGroupsGeneratedClient,
  NiceCxoneFullApiGroupsGeneratedFunctionNames,
  type NiceCxoneFullApiGroupsGeneratedClient,
  type NiceCxoneFullApiGroupsOperationPathParamMap,
  type NiceCxoneFullApiGroupsOperationRequestMap,
} from "./full-api.generated/client/groups-chunk.generated.js";
import {
  createNiceCxoneFullApiImportAllotmentsGeneratedClient,
  NiceCxoneFullApiImportAllotmentsGeneratedFunctionNames,
  type NiceCxoneFullApiImportAllotmentsGeneratedClient,
  type NiceCxoneFullApiImportAllotmentsOperationPathParamMap,
  type NiceCxoneFullApiImportAllotmentsOperationRequestMap,
} from "./full-api.generated/client/import-allotments-chunk.generated.js";
import {
  createNiceCxoneFullApiJWKSGeneratedClient,
  NiceCxoneFullApiJWKSGeneratedFunctionNames,
  type NiceCxoneFullApiJWKSGeneratedClient,
  type NiceCxoneFullApiJWKSOperationPathParamMap,
  type NiceCxoneFullApiJWKSOperationRequestMap,
} from "./full-api.generated/client/jwks-chunk.generated.js";
import {
  createNiceCxoneFullApiListGeneratedClient,
  NiceCxoneFullApiListGeneratedFunctionNames,
  type NiceCxoneFullApiListGeneratedClient,
  type NiceCxoneFullApiListOperationPathParamMap,
  type NiceCxoneFullApiListOperationRequestMap,
} from "./full-api.generated/client/list-chunk.generated.js";
import {
  createNiceCxoneFullApiLogoutGeneratedClient,
  NiceCxoneFullApiLogoutGeneratedFunctionNames,
  type NiceCxoneFullApiLogoutGeneratedClient,
  type NiceCxoneFullApiLogoutOperationPathParamMap,
  type NiceCxoneFullApiLogoutOperationRequestMap,
} from "./full-api.generated/client/logout-chunk.generated.js";
import {
  createNiceCxoneFullApiMaskingGeneratedClient,
  NiceCxoneFullApiMaskingGeneratedFunctionNames,
  type NiceCxoneFullApiMaskingGeneratedClient,
  type NiceCxoneFullApiMaskingOperationPathParamMap,
  type NiceCxoneFullApiMaskingOperationRequestMap,
} from "./full-api.generated/client/masking-chunk.generated.js";
import {
  createNiceCxoneFullApiMessageGeneratedClient,
  NiceCxoneFullApiMessageGeneratedFunctionNames,
  type NiceCxoneFullApiMessageGeneratedClient,
  type NiceCxoneFullApiMessageOperationPathParamMap,
  type NiceCxoneFullApiMessageOperationRequestMap,
} from "./full-api.generated/client/message-chunk.generated.js";
import {
  createNiceCxoneFullApiPersonalConGeneratedClient,
  NiceCxoneFullApiPersonalConGeneratedFunctionNames,
  type NiceCxoneFullApiPersonalConGeneratedClient,
  type NiceCxoneFullApiPersonalConOperationPathParamMap,
  type NiceCxoneFullApiPersonalConOperationRequestMap,
} from "./full-api.generated/client/personal-con-chunk.generated.js";
import {
  createNiceCxoneFullApiPhoneCallsGeneratedClient,
  NiceCxoneFullApiPhoneCallsGeneratedFunctionNames,
  type NiceCxoneFullApiPhoneCallsGeneratedClient,
  type NiceCxoneFullApiPhoneCallsOperationPathParamMap,
  type NiceCxoneFullApiPhoneCallsOperationRequestMap,
} from "./full-api.generated/client/phone-calls-chunk.generated.js";
import {
  createNiceCxoneFullApiPolicyInstanceServicesGeneratedClient,
  NiceCxoneFullApiPolicyInstanceServicesGeneratedFunctionNames,
  type NiceCxoneFullApiPolicyInstanceServicesGeneratedClient,
  type NiceCxoneFullApiPolicyInstanceServicesOperationPathParamMap,
  type NiceCxoneFullApiPolicyInstanceServicesOperationRequestMap,
} from "./full-api.generated/client/policy-instance-services-chunk.generated.js";
import {
  createNiceCxoneFullApiPolicyServicesGeneratedClient,
  NiceCxoneFullApiPolicyServicesGeneratedFunctionNames,
  type NiceCxoneFullApiPolicyServicesGeneratedClient,
  type NiceCxoneFullApiPolicyServicesOperationPathParamMap,
  type NiceCxoneFullApiPolicyServicesOperationRequestMap,
} from "./full-api.generated/client/policy-services-chunk.generated.js";
import {
  createNiceCxoneFullApiRealTimeGeneratedClient,
  NiceCxoneFullApiRealTimeGeneratedFunctionNames,
  type NiceCxoneFullApiRealTimeGeneratedClient,
  type NiceCxoneFullApiRealTimeOperationPathParamMap,
  type NiceCxoneFullApiRealTimeOperationRequestMap,
} from "./full-api.generated/client/real-time-chunk.generated.js";
import {
  createNiceCxoneFullApiRecordingControlGeneratedClient,
  NiceCxoneFullApiRecordingControlGeneratedFunctionNames,
  type NiceCxoneFullApiRecordingControlGeneratedClient,
  type NiceCxoneFullApiRecordingControlOperationPathParamMap,
  type NiceCxoneFullApiRecordingControlOperationRequestMap,
} from "./full-api.generated/client/recording-control-chunk.generated.js";
import {
  createNiceCxoneFullApiRecordingMediaPlaybackGeneratedClient,
  NiceCxoneFullApiRecordingMediaPlaybackGeneratedFunctionNames,
  type NiceCxoneFullApiRecordingMediaPlaybackGeneratedClient,
  type NiceCxoneFullApiRecordingMediaPlaybackOperationPathParamMap,
  type NiceCxoneFullApiRecordingMediaPlaybackOperationRequestMap,
} from "./full-api.generated/client/recording-media-playback-chunk.generated.js";
import {
  createNiceCxoneFullApiRecordingStatusGeneratedClient,
  NiceCxoneFullApiRecordingStatusGeneratedFunctionNames,
  type NiceCxoneFullApiRecordingStatusGeneratedClient,
  type NiceCxoneFullApiRecordingStatusOperationPathParamMap,
  type NiceCxoneFullApiRecordingStatusOperationRequestMap,
} from "./full-api.generated/client/recording-status-chunk.generated.js";
import {
  createNiceCxoneFullApiReportingGeneratedClient,
  NiceCxoneFullApiReportingGeneratedFunctionNames,
  type NiceCxoneFullApiReportingGeneratedClient,
  type NiceCxoneFullApiReportingOperationPathParamMap,
  type NiceCxoneFullApiReportingOperationRequestMap,
} from "./full-api.generated/client/reporting-chunk.generated.js";
import {
  createNiceCxoneFullApiRoutingAttributesGeneratedClient,
  NiceCxoneFullApiRoutingAttributesGeneratedFunctionNames,
  type NiceCxoneFullApiRoutingAttributesGeneratedClient,
  type NiceCxoneFullApiRoutingAttributesOperationPathParamMap,
  type NiceCxoneFullApiRoutingAttributesOperationRequestMap,
} from "./full-api.generated/client/routing-attributes-chunk.generated.js";
import {
  createNiceCxoneFullApiRoutingQueueGeneratedClient,
  NiceCxoneFullApiRoutingQueueGeneratedFunctionNames,
  type NiceCxoneFullApiRoutingQueueGeneratedClient,
  type NiceCxoneFullApiRoutingQueueOperationPathParamMap,
  type NiceCxoneFullApiRoutingQueueOperationRequestMap,
} from "./full-api.generated/client/routing-queue-chunk.generated.js";
import {
  createNiceCxoneFullApiScheduledCallbacksGeneratedClient,
  NiceCxoneFullApiScheduledCallbacksGeneratedFunctionNames,
  type NiceCxoneFullApiScheduledCallbacksGeneratedClient,
  type NiceCxoneFullApiScheduledCallbacksOperationPathParamMap,
  type NiceCxoneFullApiScheduledCallbacksOperationRequestMap,
} from "./full-api.generated/client/scheduled-callbacks-chunk.generated.js";
import {
  createNiceCxoneFullApiSchedulesGeneratedClient,
  NiceCxoneFullApiSchedulesGeneratedFunctionNames,
  type NiceCxoneFullApiSchedulesGeneratedClient,
  type NiceCxoneFullApiSchedulesOperationPathParamMap,
  type NiceCxoneFullApiSchedulesOperationRequestMap,
} from "./full-api.generated/client/schedules-chunk.generated.js";
import {
  createNiceCxoneFullApiSCIMGeneratedClient,
  NiceCxoneFullApiSCIMGeneratedFunctionNames,
  type NiceCxoneFullApiSCIMGeneratedClient,
  type NiceCxoneFullApiSCIMOperationPathParamMap,
  type NiceCxoneFullApiSCIMOperationRequestMap,
} from "./full-api.generated/client/scim-chunk.generated.js";
import {
  createNiceCxoneFullApiScreenInteractionGeneratedClient,
  NiceCxoneFullApiScreenInteractionGeneratedFunctionNames,
  type NiceCxoneFullApiScreenInteractionGeneratedClient,
  type NiceCxoneFullApiScreenInteractionOperationPathParamMap,
  type NiceCxoneFullApiScreenInteractionOperationRequestMap,
} from "./full-api.generated/client/screen-interaction-chunk.generated.js";
import {
  createNiceCxoneFullApiScriptSchedulesGeneratedClient,
  NiceCxoneFullApiScriptSchedulesGeneratedFunctionNames,
  type NiceCxoneFullApiScriptSchedulesGeneratedClient,
  type NiceCxoneFullApiScriptSchedulesOperationPathParamMap,
  type NiceCxoneFullApiScriptSchedulesOperationRequestMap,
} from "./full-api.generated/client/script-schedules-chunk.generated.js";
import {
  createNiceCxoneFullApiSessionsGeneratedClient,
  NiceCxoneFullApiSessionsGeneratedFunctionNames,
  type NiceCxoneFullApiSessionsGeneratedClient,
  type NiceCxoneFullApiSessionsOperationPathParamMap,
  type NiceCxoneFullApiSessionsOperationRequestMap,
} from "./full-api.generated/client/sessions-chunk.generated.js";
import {
  createNiceCxoneFullApiSkillsGeneratedClient,
  NiceCxoneFullApiSkillsGeneratedFunctionNames,
  type NiceCxoneFullApiSkillsGeneratedClient,
  type NiceCxoneFullApiSkillsOperationPathParamMap,
  type NiceCxoneFullApiSkillsOperationRequestMap,
} from "./full-api.generated/client/skills-chunk.generated.js";
import {
  createNiceCxoneFullApiStationProfilesGeneratedClient,
  NiceCxoneFullApiStationProfilesGeneratedFunctionNames,
  type NiceCxoneFullApiStationProfilesGeneratedClient,
  type NiceCxoneFullApiStationProfilesOperationPathParamMap,
  type NiceCxoneFullApiStationProfilesOperationRequestMap,
} from "./full-api.generated/client/station-profiles-chunk.generated.js";
import {
  createNiceCxoneFullApiStationsGeneratedClient,
  NiceCxoneFullApiStationsGeneratedFunctionNames,
  type NiceCxoneFullApiStationsGeneratedClient,
  type NiceCxoneFullApiStationsOperationPathParamMap,
  type NiceCxoneFullApiStationsOperationRequestMap,
} from "./full-api.generated/client/stations-chunk.generated.js";
import {
  createNiceCxoneFullApiSupervisorGeneratedClient,
  NiceCxoneFullApiSupervisorGeneratedFunctionNames,
  type NiceCxoneFullApiSupervisorGeneratedClient,
  type NiceCxoneFullApiSupervisorOperationPathParamMap,
  type NiceCxoneFullApiSupervisorOperationRequestMap,
} from "./full-api.generated/client/supervisor-chunk.generated.js";
import {
  createNiceCxoneFullApiTableExportGeneratedClient,
  NiceCxoneFullApiTableExportGeneratedFunctionNames,
  type NiceCxoneFullApiTableExportGeneratedClient,
  type NiceCxoneFullApiTableExportOperationPathParamMap,
  type NiceCxoneFullApiTableExportOperationRequestMap,
} from "./full-api.generated/client/table-export-chunk.generated.js";
import {
  createNiceCxoneFullApiTagGeneratedClient,
  NiceCxoneFullApiTagGeneratedFunctionNames,
  type NiceCxoneFullApiTagGeneratedClient,
  type NiceCxoneFullApiTagOperationPathParamMap,
  type NiceCxoneFullApiTagOperationRequestMap,
} from "./full-api.generated/client/tag-chunk.generated.js";
import {
  createNiceCxoneFullApiThreadGeneratedClient,
  NiceCxoneFullApiThreadGeneratedFunctionNames,
  type NiceCxoneFullApiThreadGeneratedClient,
  type NiceCxoneFullApiThreadOperationPathParamMap,
  type NiceCxoneFullApiThreadOperationRequestMap,
} from "./full-api.generated/client/thread-chunk.generated.js";
import {
  createNiceCxoneFullApiTokenGeneratedClient,
  NiceCxoneFullApiTokenGeneratedFunctionNames,
  type NiceCxoneFullApiTokenGeneratedClient,
  type NiceCxoneFullApiTokenOperationPathParamMap,
  type NiceCxoneFullApiTokenOperationRequestMap,
} from "./full-api.generated/client/token-chunk.generated.js";
import {
  createNiceCxoneFullApiUnavailableCodesGeneratedClient,
  NiceCxoneFullApiUnavailableCodesGeneratedFunctionNames,
  type NiceCxoneFullApiUnavailableCodesGeneratedClient,
  type NiceCxoneFullApiUnavailableCodesOperationPathParamMap,
  type NiceCxoneFullApiUnavailableCodesOperationRequestMap,
} from "./full-api.generated/client/unavailable-codes-chunk.generated.js";
import {
  createNiceCxoneFullApiUniversalApplicationGeneratedClient,
  NiceCxoneFullApiUniversalApplicationGeneratedFunctionNames,
  type NiceCxoneFullApiUniversalApplicationGeneratedClient,
  type NiceCxoneFullApiUniversalApplicationOperationPathParamMap,
  type NiceCxoneFullApiUniversalApplicationOperationRequestMap,
} from "./full-api.generated/client/universal-application-chunk.generated.js";
import {
  createNiceCxoneFullApiUserinfoGeneratedClient,
  NiceCxoneFullApiUserinfoGeneratedFunctionNames,
  type NiceCxoneFullApiUserinfoGeneratedClient,
  type NiceCxoneFullApiUserinfoOperationPathParamMap,
  type NiceCxoneFullApiUserinfoOperationRequestMap,
} from "./full-api.generated/client/userinfo-chunk.generated.js";
import {
  createNiceCxoneFullApiUserManagementGeneratedClient,
  NiceCxoneFullApiUserManagementGeneratedFunctionNames,
  type NiceCxoneFullApiUserManagementGeneratedClient,
  type NiceCxoneFullApiUserManagementOperationPathParamMap,
  type NiceCxoneFullApiUserManagementOperationRequestMap,
} from "./full-api.generated/client/user-management-chunk.generated.js";
import {
  createNiceCxoneFullApiVerificationTokenGeneratedClient,
  NiceCxoneFullApiVerificationTokenGeneratedFunctionNames,
  type NiceCxoneFullApiVerificationTokenGeneratedClient,
  type NiceCxoneFullApiVerificationTokenOperationPathParamMap,
  type NiceCxoneFullApiVerificationTokenOperationRequestMap,
} from "./full-api.generated/client/verification-token-chunk.generated.js";
import {
  createNiceCxoneFullApiVoicemailsGeneratedClient,
  NiceCxoneFullApiVoicemailsGeneratedFunctionNames,
  type NiceCxoneFullApiVoicemailsGeneratedClient,
  type NiceCxoneFullApiVoicemailsOperationPathParamMap,
  type NiceCxoneFullApiVoicemailsOperationRequestMap,
} from "./full-api.generated/client/voicemails-chunk.generated.js";
import {
  createNiceCxoneFullApiWFMDataGeneratedClient,
  NiceCxoneFullApiWFMDataGeneratedFunctionNames,
  type NiceCxoneFullApiWFMDataGeneratedClient,
  type NiceCxoneFullApiWFMDataOperationPathParamMap,
  type NiceCxoneFullApiWFMDataOperationRequestMap,
} from "./full-api.generated/client/wfmdata-chunk.generated.js";
import {
  createNiceCxoneFullApiWorkflowDataGeneratedClient,
  NiceCxoneFullApiWorkflowDataGeneratedFunctionNames,
  type NiceCxoneFullApiWorkflowDataGeneratedClient,
  type NiceCxoneFullApiWorkflowDataOperationPathParamMap,
  type NiceCxoneFullApiWorkflowDataOperationRequestMap,
} from "./full-api.generated/client/workflow-data-chunk.generated.js";
import {
  createNiceCxoneFullApiWorkItemGeneratedClient,
  NiceCxoneFullApiWorkItemGeneratedFunctionNames,
  type NiceCxoneFullApiWorkItemGeneratedClient,
  type NiceCxoneFullApiWorkItemOperationPathParamMap,
  type NiceCxoneFullApiWorkItemOperationRequestMap,
} from "./full-api.generated/client/work-item-chunk.generated.js";
import {
  createNiceCxoneFullApiWorkItemsGeneratedClient,
  NiceCxoneFullApiWorkItemsGeneratedFunctionNames,
  type NiceCxoneFullApiWorkItemsGeneratedClient,
  type NiceCxoneFullApiWorkItemsOperationPathParamMap,
  type NiceCxoneFullApiWorkItemsOperationRequestMap,
} from "./full-api.generated/client/work-items-chunk.generated.js";

export type NiceCxoneFullApiPathParamValue = string | number;
export interface NiceCxoneFullApiOperationPathParamMap extends NiceCxoneFullApiAccessKeysOperationPathParamMap, NiceCxoneFullApiAddressBookOperationPathParamMap, NiceCxoneFullApiAgentMessagingOperationPathParamMap, NiceCxoneFullApiAgentPhoneOperationPathParamMap, NiceCxoneFullApiAgentsOperationPathParamMap, NiceCxoneFullApiAnalyzedInteractionSegmentsOperationPathParamMap, NiceCxoneFullApiApplicationsOperationPathParamMap, NiceCxoneFullApiAssociationOperationPathParamMap, NiceCxoneFullApiAttachmentOperationPathParamMap, NiceCxoneFullApiAuthenticateOperationPathParamMap, NiceCxoneFullApiAuthorizationManagementOperationPathParamMap, NiceCxoneFullApiAuthorizeOperationPathParamMap, NiceCxoneFullApiBillingProductUsageOperationPathParamMap, NiceCxoneFullApiBusinessDataOperationPathParamMap, NiceCxoneFullApiBusinessDataAPIOperationPathParamMap, NiceCxoneFullApiCallbackOperationPathParamMap, NiceCxoneFullApiChannelPointOfContactOperationPathParamMap, NiceCxoneFullApiChatRequestsOperationPathParamMap, NiceCxoneFullApiCommitmentsOperationPathParamMap, NiceCxoneFullApiContactOperationPathParamMap, NiceCxoneFullApiContactsOperationPathParamMap, NiceCxoneFullApiCorrelationManagementOperationPathParamMap, NiceCxoneFullApiCustomFieldDefinitionsOperationPathParamMap, NiceCxoneFullApiCustomerOperationPathParamMap, NiceCxoneFullApiDesktopProfilesOperationPathParamMap, NiceCxoneFullApiDiscoveryOperationPathParamMap, NiceCxoneFullApiDivisionManagementOperationPathParamMap, NiceCxoneFullApiDocumentsOperationPathParamMap, NiceCxoneFullApiEmailsOperationPathParamMap, NiceCxoneFullApiExportSummaryOperationPathParamMap, NiceCxoneFullApiExtractingDataOperationPathParamMap, NiceCxoneFullApiGdprManagerRequestControllerOperationPathParamMap, NiceCxoneFullApiGeneralOperationPathParamMap, NiceCxoneFullApiGroupsOperationPathParamMap, NiceCxoneFullApiImportAllotmentsOperationPathParamMap, NiceCxoneFullApiJWKSOperationPathParamMap, NiceCxoneFullApiListOperationPathParamMap, NiceCxoneFullApiLogoutOperationPathParamMap, NiceCxoneFullApiMaskingOperationPathParamMap, NiceCxoneFullApiMessageOperationPathParamMap, NiceCxoneFullApiPersonalConOperationPathParamMap, NiceCxoneFullApiPhoneCallsOperationPathParamMap, NiceCxoneFullApiPolicyInstanceServicesOperationPathParamMap, NiceCxoneFullApiPolicyServicesOperationPathParamMap, NiceCxoneFullApiRealTimeOperationPathParamMap, NiceCxoneFullApiRecordingControlOperationPathParamMap, NiceCxoneFullApiRecordingMediaPlaybackOperationPathParamMap, NiceCxoneFullApiRecordingStatusOperationPathParamMap, NiceCxoneFullApiReportingOperationPathParamMap, NiceCxoneFullApiRoutingAttributesOperationPathParamMap, NiceCxoneFullApiRoutingQueueOperationPathParamMap, NiceCxoneFullApiScheduledCallbacksOperationPathParamMap, NiceCxoneFullApiSchedulesOperationPathParamMap, NiceCxoneFullApiSCIMOperationPathParamMap, NiceCxoneFullApiScreenInteractionOperationPathParamMap, NiceCxoneFullApiScriptSchedulesOperationPathParamMap, NiceCxoneFullApiSessionsOperationPathParamMap, NiceCxoneFullApiSkillsOperationPathParamMap, NiceCxoneFullApiStationProfilesOperationPathParamMap, NiceCxoneFullApiStationsOperationPathParamMap, NiceCxoneFullApiSupervisorOperationPathParamMap, NiceCxoneFullApiTableExportOperationPathParamMap, NiceCxoneFullApiTagOperationPathParamMap, NiceCxoneFullApiThreadOperationPathParamMap, NiceCxoneFullApiTokenOperationPathParamMap, NiceCxoneFullApiUnavailableCodesOperationPathParamMap, NiceCxoneFullApiUniversalApplicationOperationPathParamMap, NiceCxoneFullApiUserinfoOperationPathParamMap, NiceCxoneFullApiUserManagementOperationPathParamMap, NiceCxoneFullApiVerificationTokenOperationPathParamMap, NiceCxoneFullApiVoicemailsOperationPathParamMap, NiceCxoneFullApiWFMDataOperationPathParamMap, NiceCxoneFullApiWorkflowDataOperationPathParamMap, NiceCxoneFullApiWorkItemOperationPathParamMap, NiceCxoneFullApiWorkItemsOperationPathParamMap {}

export type NiceCxoneFullApiOperationKey = keyof NiceCxoneFullApiOperationPathParamMap & string;

export type NiceCxoneFullApiOperationQueryInput<OperationKey extends NiceCxoneFullApiOperationKey> =
  NiceCxoneFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: NiceCxoneFullApiOperationQueryMap[OperationKey] }
    : { query?: NiceCxoneFullApiOperationQueryMap[OperationKey] };

export type NiceCxoneFullApiOperationBodyInput<OperationKey extends NiceCxoneFullApiOperationKey> =
  [NiceCxoneFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : NiceCxoneFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: NiceCxoneFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: NiceCxoneFullApiOperationRequestBodyMap[OperationKey] };

export type NiceCxoneFullApiOperationInput<OperationKey extends NiceCxoneFullApiOperationKey> = Omit<NiceCxoneOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends NiceCxoneFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: NiceCxoneFullApiOperationPathParamMap[OperationKey] }
) & NiceCxoneFullApiOperationQueryInput<OperationKey> & NiceCxoneFullApiOperationBodyInput<OperationKey>;

export interface NiceCxoneFullApiOperationRequestMap extends NiceCxoneFullApiAccessKeysOperationRequestMap, NiceCxoneFullApiAddressBookOperationRequestMap, NiceCxoneFullApiAgentMessagingOperationRequestMap, NiceCxoneFullApiAgentPhoneOperationRequestMap, NiceCxoneFullApiAgentsOperationRequestMap, NiceCxoneFullApiAnalyzedInteractionSegmentsOperationRequestMap, NiceCxoneFullApiApplicationsOperationRequestMap, NiceCxoneFullApiAssociationOperationRequestMap, NiceCxoneFullApiAttachmentOperationRequestMap, NiceCxoneFullApiAuthenticateOperationRequestMap, NiceCxoneFullApiAuthorizationManagementOperationRequestMap, NiceCxoneFullApiAuthorizeOperationRequestMap, NiceCxoneFullApiBillingProductUsageOperationRequestMap, NiceCxoneFullApiBusinessDataOperationRequestMap, NiceCxoneFullApiBusinessDataAPIOperationRequestMap, NiceCxoneFullApiCallbackOperationRequestMap, NiceCxoneFullApiChannelPointOfContactOperationRequestMap, NiceCxoneFullApiChatRequestsOperationRequestMap, NiceCxoneFullApiCommitmentsOperationRequestMap, NiceCxoneFullApiContactOperationRequestMap, NiceCxoneFullApiContactsOperationRequestMap, NiceCxoneFullApiCorrelationManagementOperationRequestMap, NiceCxoneFullApiCustomFieldDefinitionsOperationRequestMap, NiceCxoneFullApiCustomerOperationRequestMap, NiceCxoneFullApiDesktopProfilesOperationRequestMap, NiceCxoneFullApiDiscoveryOperationRequestMap, NiceCxoneFullApiDivisionManagementOperationRequestMap, NiceCxoneFullApiDocumentsOperationRequestMap, NiceCxoneFullApiEmailsOperationRequestMap, NiceCxoneFullApiExportSummaryOperationRequestMap, NiceCxoneFullApiExtractingDataOperationRequestMap, NiceCxoneFullApiGdprManagerRequestControllerOperationRequestMap, NiceCxoneFullApiGeneralOperationRequestMap, NiceCxoneFullApiGroupsOperationRequestMap, NiceCxoneFullApiImportAllotmentsOperationRequestMap, NiceCxoneFullApiJWKSOperationRequestMap, NiceCxoneFullApiListOperationRequestMap, NiceCxoneFullApiLogoutOperationRequestMap, NiceCxoneFullApiMaskingOperationRequestMap, NiceCxoneFullApiMessageOperationRequestMap, NiceCxoneFullApiPersonalConOperationRequestMap, NiceCxoneFullApiPhoneCallsOperationRequestMap, NiceCxoneFullApiPolicyInstanceServicesOperationRequestMap, NiceCxoneFullApiPolicyServicesOperationRequestMap, NiceCxoneFullApiRealTimeOperationRequestMap, NiceCxoneFullApiRecordingControlOperationRequestMap, NiceCxoneFullApiRecordingMediaPlaybackOperationRequestMap, NiceCxoneFullApiRecordingStatusOperationRequestMap, NiceCxoneFullApiReportingOperationRequestMap, NiceCxoneFullApiRoutingAttributesOperationRequestMap, NiceCxoneFullApiRoutingQueueOperationRequestMap, NiceCxoneFullApiScheduledCallbacksOperationRequestMap, NiceCxoneFullApiSchedulesOperationRequestMap, NiceCxoneFullApiSCIMOperationRequestMap, NiceCxoneFullApiScreenInteractionOperationRequestMap, NiceCxoneFullApiScriptSchedulesOperationRequestMap, NiceCxoneFullApiSessionsOperationRequestMap, NiceCxoneFullApiSkillsOperationRequestMap, NiceCxoneFullApiStationProfilesOperationRequestMap, NiceCxoneFullApiStationsOperationRequestMap, NiceCxoneFullApiSupervisorOperationRequestMap, NiceCxoneFullApiTableExportOperationRequestMap, NiceCxoneFullApiTagOperationRequestMap, NiceCxoneFullApiThreadOperationRequestMap, NiceCxoneFullApiTokenOperationRequestMap, NiceCxoneFullApiUnavailableCodesOperationRequestMap, NiceCxoneFullApiUniversalApplicationOperationRequestMap, NiceCxoneFullApiUserinfoOperationRequestMap, NiceCxoneFullApiUserManagementOperationRequestMap, NiceCxoneFullApiVerificationTokenOperationRequestMap, NiceCxoneFullApiVoicemailsOperationRequestMap, NiceCxoneFullApiWFMDataOperationRequestMap, NiceCxoneFullApiWorkflowDataOperationRequestMap, NiceCxoneFullApiWorkItemOperationRequestMap, NiceCxoneFullApiWorkItemsOperationRequestMap {}

export type NiceCxoneFullApiOperationArgs<OperationKey extends NiceCxoneFullApiOperationKey> = {} extends NiceCxoneFullApiOperationPathParamMap[OperationKey]
  ? [input?: NiceCxoneFullApiOperationRequestMap[OperationKey]]
  : [input: NiceCxoneFullApiOperationRequestMap[OperationKey]];

export type NiceCxoneGeneratedOperationCaller = <OperationKey extends NiceCxoneFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: NiceCxoneFullApiOperationArgs<OperationKey>
) => Promise<NiceCxoneFullApiOperationResponseMap[OperationKey]>;

export interface NiceCxoneFullApiGeneratedClient extends NiceCxoneFullApiAccessKeysGeneratedClient, NiceCxoneFullApiAddressBookGeneratedClient, NiceCxoneFullApiAgentMessagingGeneratedClient, NiceCxoneFullApiAgentPhoneGeneratedClient, NiceCxoneFullApiAgentsGeneratedClient, NiceCxoneFullApiAnalyzedInteractionSegmentsGeneratedClient, NiceCxoneFullApiApplicationsGeneratedClient, NiceCxoneFullApiAssociationGeneratedClient, NiceCxoneFullApiAttachmentGeneratedClient, NiceCxoneFullApiAuthenticateGeneratedClient, NiceCxoneFullApiAuthorizationManagementGeneratedClient, NiceCxoneFullApiAuthorizeGeneratedClient, NiceCxoneFullApiBillingProductUsageGeneratedClient, NiceCxoneFullApiBusinessDataGeneratedClient, NiceCxoneFullApiBusinessDataAPIGeneratedClient, NiceCxoneFullApiCallbackGeneratedClient, NiceCxoneFullApiChannelPointOfContactGeneratedClient, NiceCxoneFullApiChatRequestsGeneratedClient, NiceCxoneFullApiCommitmentsGeneratedClient, NiceCxoneFullApiContactGeneratedClient, NiceCxoneFullApiContactsGeneratedClient, NiceCxoneFullApiCorrelationManagementGeneratedClient, NiceCxoneFullApiCustomFieldDefinitionsGeneratedClient, NiceCxoneFullApiCustomerGeneratedClient, NiceCxoneFullApiDesktopProfilesGeneratedClient, NiceCxoneFullApiDiscoveryGeneratedClient, NiceCxoneFullApiDivisionManagementGeneratedClient, NiceCxoneFullApiDocumentsGeneratedClient, NiceCxoneFullApiEmailsGeneratedClient, NiceCxoneFullApiExportSummaryGeneratedClient, NiceCxoneFullApiExtractingDataGeneratedClient, NiceCxoneFullApiGdprManagerRequestControllerGeneratedClient, NiceCxoneFullApiGeneralGeneratedClient, NiceCxoneFullApiGroupsGeneratedClient, NiceCxoneFullApiImportAllotmentsGeneratedClient, NiceCxoneFullApiJWKSGeneratedClient, NiceCxoneFullApiListGeneratedClient, NiceCxoneFullApiLogoutGeneratedClient, NiceCxoneFullApiMaskingGeneratedClient, NiceCxoneFullApiMessageGeneratedClient, NiceCxoneFullApiPersonalConGeneratedClient, NiceCxoneFullApiPhoneCallsGeneratedClient, NiceCxoneFullApiPolicyInstanceServicesGeneratedClient, NiceCxoneFullApiPolicyServicesGeneratedClient, NiceCxoneFullApiRealTimeGeneratedClient, NiceCxoneFullApiRecordingControlGeneratedClient, NiceCxoneFullApiRecordingMediaPlaybackGeneratedClient, NiceCxoneFullApiRecordingStatusGeneratedClient, NiceCxoneFullApiReportingGeneratedClient, NiceCxoneFullApiRoutingAttributesGeneratedClient, NiceCxoneFullApiRoutingQueueGeneratedClient, NiceCxoneFullApiScheduledCallbacksGeneratedClient, NiceCxoneFullApiSchedulesGeneratedClient, NiceCxoneFullApiSCIMGeneratedClient, NiceCxoneFullApiScreenInteractionGeneratedClient, NiceCxoneFullApiScriptSchedulesGeneratedClient, NiceCxoneFullApiSessionsGeneratedClient, NiceCxoneFullApiSkillsGeneratedClient, NiceCxoneFullApiStationProfilesGeneratedClient, NiceCxoneFullApiStationsGeneratedClient, NiceCxoneFullApiSupervisorGeneratedClient, NiceCxoneFullApiTableExportGeneratedClient, NiceCxoneFullApiTagGeneratedClient, NiceCxoneFullApiThreadGeneratedClient, NiceCxoneFullApiTokenGeneratedClient, NiceCxoneFullApiUnavailableCodesGeneratedClient, NiceCxoneFullApiUniversalApplicationGeneratedClient, NiceCxoneFullApiUserinfoGeneratedClient, NiceCxoneFullApiUserManagementGeneratedClient, NiceCxoneFullApiVerificationTokenGeneratedClient, NiceCxoneFullApiVoicemailsGeneratedClient, NiceCxoneFullApiWFMDataGeneratedClient, NiceCxoneFullApiWorkflowDataGeneratedClient, NiceCxoneFullApiWorkItemGeneratedClient, NiceCxoneFullApiWorkItemsGeneratedClient {}

export const NICE_CXONE_FULL_API_GENERATED_FUNCTION_COUNT = 618 as const;
export const NICE_CXONE_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...NiceCxoneFullApiAccessKeysGeneratedFunctionNames,
  ...NiceCxoneFullApiAddressBookGeneratedFunctionNames,
  ...NiceCxoneFullApiAgentMessagingGeneratedFunctionNames,
  ...NiceCxoneFullApiAgentPhoneGeneratedFunctionNames,
  ...NiceCxoneFullApiAgentsGeneratedFunctionNames,
  ...NiceCxoneFullApiAnalyzedInteractionSegmentsGeneratedFunctionNames,
  ...NiceCxoneFullApiApplicationsGeneratedFunctionNames,
  ...NiceCxoneFullApiAssociationGeneratedFunctionNames,
  ...NiceCxoneFullApiAttachmentGeneratedFunctionNames,
  ...NiceCxoneFullApiAuthenticateGeneratedFunctionNames,
  ...NiceCxoneFullApiAuthorizationManagementGeneratedFunctionNames,
  ...NiceCxoneFullApiAuthorizeGeneratedFunctionNames,
  ...NiceCxoneFullApiBillingProductUsageGeneratedFunctionNames,
  ...NiceCxoneFullApiBusinessDataGeneratedFunctionNames,
  ...NiceCxoneFullApiBusinessDataAPIGeneratedFunctionNames,
  ...NiceCxoneFullApiCallbackGeneratedFunctionNames,
  ...NiceCxoneFullApiChannelPointOfContactGeneratedFunctionNames,
  ...NiceCxoneFullApiChatRequestsGeneratedFunctionNames,
  ...NiceCxoneFullApiCommitmentsGeneratedFunctionNames,
  ...NiceCxoneFullApiContactGeneratedFunctionNames,
  ...NiceCxoneFullApiContactsGeneratedFunctionNames,
  ...NiceCxoneFullApiCorrelationManagementGeneratedFunctionNames,
  ...NiceCxoneFullApiCustomFieldDefinitionsGeneratedFunctionNames,
  ...NiceCxoneFullApiCustomerGeneratedFunctionNames,
  ...NiceCxoneFullApiDesktopProfilesGeneratedFunctionNames,
  ...NiceCxoneFullApiDiscoveryGeneratedFunctionNames,
  ...NiceCxoneFullApiDivisionManagementGeneratedFunctionNames,
  ...NiceCxoneFullApiDocumentsGeneratedFunctionNames,
  ...NiceCxoneFullApiEmailsGeneratedFunctionNames,
  ...NiceCxoneFullApiExportSummaryGeneratedFunctionNames,
  ...NiceCxoneFullApiExtractingDataGeneratedFunctionNames,
  ...NiceCxoneFullApiGdprManagerRequestControllerGeneratedFunctionNames,
  ...NiceCxoneFullApiGeneralGeneratedFunctionNames,
  ...NiceCxoneFullApiGroupsGeneratedFunctionNames,
  ...NiceCxoneFullApiImportAllotmentsGeneratedFunctionNames,
  ...NiceCxoneFullApiJWKSGeneratedFunctionNames,
  ...NiceCxoneFullApiListGeneratedFunctionNames,
  ...NiceCxoneFullApiLogoutGeneratedFunctionNames,
  ...NiceCxoneFullApiMaskingGeneratedFunctionNames,
  ...NiceCxoneFullApiMessageGeneratedFunctionNames,
  ...NiceCxoneFullApiPersonalConGeneratedFunctionNames,
  ...NiceCxoneFullApiPhoneCallsGeneratedFunctionNames,
  ...NiceCxoneFullApiPolicyInstanceServicesGeneratedFunctionNames,
  ...NiceCxoneFullApiPolicyServicesGeneratedFunctionNames,
  ...NiceCxoneFullApiRealTimeGeneratedFunctionNames,
  ...NiceCxoneFullApiRecordingControlGeneratedFunctionNames,
  ...NiceCxoneFullApiRecordingMediaPlaybackGeneratedFunctionNames,
  ...NiceCxoneFullApiRecordingStatusGeneratedFunctionNames,
  ...NiceCxoneFullApiReportingGeneratedFunctionNames,
  ...NiceCxoneFullApiRoutingAttributesGeneratedFunctionNames,
  ...NiceCxoneFullApiRoutingQueueGeneratedFunctionNames,
  ...NiceCxoneFullApiScheduledCallbacksGeneratedFunctionNames,
  ...NiceCxoneFullApiSchedulesGeneratedFunctionNames,
  ...NiceCxoneFullApiSCIMGeneratedFunctionNames,
  ...NiceCxoneFullApiScreenInteractionGeneratedFunctionNames,
  ...NiceCxoneFullApiScriptSchedulesGeneratedFunctionNames,
  ...NiceCxoneFullApiSessionsGeneratedFunctionNames,
  ...NiceCxoneFullApiSkillsGeneratedFunctionNames,
  ...NiceCxoneFullApiStationProfilesGeneratedFunctionNames,
  ...NiceCxoneFullApiStationsGeneratedFunctionNames,
  ...NiceCxoneFullApiSupervisorGeneratedFunctionNames,
  ...NiceCxoneFullApiTableExportGeneratedFunctionNames,
  ...NiceCxoneFullApiTagGeneratedFunctionNames,
  ...NiceCxoneFullApiThreadGeneratedFunctionNames,
  ...NiceCxoneFullApiTokenGeneratedFunctionNames,
  ...NiceCxoneFullApiUnavailableCodesGeneratedFunctionNames,
  ...NiceCxoneFullApiUniversalApplicationGeneratedFunctionNames,
  ...NiceCxoneFullApiUserinfoGeneratedFunctionNames,
  ...NiceCxoneFullApiUserManagementGeneratedFunctionNames,
  ...NiceCxoneFullApiVerificationTokenGeneratedFunctionNames,
  ...NiceCxoneFullApiVoicemailsGeneratedFunctionNames,
  ...NiceCxoneFullApiWFMDataGeneratedFunctionNames,
  ...NiceCxoneFullApiWorkflowDataGeneratedFunctionNames,
  ...NiceCxoneFullApiWorkItemGeneratedFunctionNames,
  ...NiceCxoneFullApiWorkItemsGeneratedFunctionNames,
] as const satisfies readonly (keyof NiceCxoneFullApiGeneratedClient)[];

export function createNiceCxoneFullApiGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiGeneratedClient {
  return Object.assign(
    {},
    createNiceCxoneFullApiAccessKeysGeneratedClient(callOperation),
    createNiceCxoneFullApiAddressBookGeneratedClient(callOperation),
    createNiceCxoneFullApiAgentMessagingGeneratedClient(callOperation),
    createNiceCxoneFullApiAgentPhoneGeneratedClient(callOperation),
    createNiceCxoneFullApiAgentsGeneratedClient(callOperation),
    createNiceCxoneFullApiAnalyzedInteractionSegmentsGeneratedClient(callOperation),
    createNiceCxoneFullApiApplicationsGeneratedClient(callOperation),
    createNiceCxoneFullApiAssociationGeneratedClient(callOperation),
    createNiceCxoneFullApiAttachmentGeneratedClient(callOperation),
    createNiceCxoneFullApiAuthenticateGeneratedClient(callOperation),
    createNiceCxoneFullApiAuthorizationManagementGeneratedClient(callOperation),
    createNiceCxoneFullApiAuthorizeGeneratedClient(callOperation),
    createNiceCxoneFullApiBillingProductUsageGeneratedClient(callOperation),
    createNiceCxoneFullApiBusinessDataGeneratedClient(callOperation),
    createNiceCxoneFullApiBusinessDataAPIGeneratedClient(callOperation),
    createNiceCxoneFullApiCallbackGeneratedClient(callOperation),
    createNiceCxoneFullApiChannelPointOfContactGeneratedClient(callOperation),
    createNiceCxoneFullApiChatRequestsGeneratedClient(callOperation),
    createNiceCxoneFullApiCommitmentsGeneratedClient(callOperation),
    createNiceCxoneFullApiContactGeneratedClient(callOperation),
    createNiceCxoneFullApiContactsGeneratedClient(callOperation),
    createNiceCxoneFullApiCorrelationManagementGeneratedClient(callOperation),
    createNiceCxoneFullApiCustomFieldDefinitionsGeneratedClient(callOperation),
    createNiceCxoneFullApiCustomerGeneratedClient(callOperation),
    createNiceCxoneFullApiDesktopProfilesGeneratedClient(callOperation),
    createNiceCxoneFullApiDiscoveryGeneratedClient(callOperation),
    createNiceCxoneFullApiDivisionManagementGeneratedClient(callOperation),
    createNiceCxoneFullApiDocumentsGeneratedClient(callOperation),
    createNiceCxoneFullApiEmailsGeneratedClient(callOperation),
    createNiceCxoneFullApiExportSummaryGeneratedClient(callOperation),
    createNiceCxoneFullApiExtractingDataGeneratedClient(callOperation),
    createNiceCxoneFullApiGdprManagerRequestControllerGeneratedClient(callOperation),
    createNiceCxoneFullApiGeneralGeneratedClient(callOperation),
    createNiceCxoneFullApiGroupsGeneratedClient(callOperation),
    createNiceCxoneFullApiImportAllotmentsGeneratedClient(callOperation),
    createNiceCxoneFullApiJWKSGeneratedClient(callOperation),
    createNiceCxoneFullApiListGeneratedClient(callOperation),
    createNiceCxoneFullApiLogoutGeneratedClient(callOperation),
    createNiceCxoneFullApiMaskingGeneratedClient(callOperation),
    createNiceCxoneFullApiMessageGeneratedClient(callOperation),
    createNiceCxoneFullApiPersonalConGeneratedClient(callOperation),
    createNiceCxoneFullApiPhoneCallsGeneratedClient(callOperation),
    createNiceCxoneFullApiPolicyInstanceServicesGeneratedClient(callOperation),
    createNiceCxoneFullApiPolicyServicesGeneratedClient(callOperation),
    createNiceCxoneFullApiRealTimeGeneratedClient(callOperation),
    createNiceCxoneFullApiRecordingControlGeneratedClient(callOperation),
    createNiceCxoneFullApiRecordingMediaPlaybackGeneratedClient(callOperation),
    createNiceCxoneFullApiRecordingStatusGeneratedClient(callOperation),
    createNiceCxoneFullApiReportingGeneratedClient(callOperation),
    createNiceCxoneFullApiRoutingAttributesGeneratedClient(callOperation),
    createNiceCxoneFullApiRoutingQueueGeneratedClient(callOperation),
    createNiceCxoneFullApiScheduledCallbacksGeneratedClient(callOperation),
    createNiceCxoneFullApiSchedulesGeneratedClient(callOperation),
    createNiceCxoneFullApiSCIMGeneratedClient(callOperation),
    createNiceCxoneFullApiScreenInteractionGeneratedClient(callOperation),
    createNiceCxoneFullApiScriptSchedulesGeneratedClient(callOperation),
    createNiceCxoneFullApiSessionsGeneratedClient(callOperation),
    createNiceCxoneFullApiSkillsGeneratedClient(callOperation),
    createNiceCxoneFullApiStationProfilesGeneratedClient(callOperation),
    createNiceCxoneFullApiStationsGeneratedClient(callOperation),
    createNiceCxoneFullApiSupervisorGeneratedClient(callOperation),
    createNiceCxoneFullApiTableExportGeneratedClient(callOperation),
    createNiceCxoneFullApiTagGeneratedClient(callOperation),
    createNiceCxoneFullApiThreadGeneratedClient(callOperation),
    createNiceCxoneFullApiTokenGeneratedClient(callOperation),
    createNiceCxoneFullApiUnavailableCodesGeneratedClient(callOperation),
    createNiceCxoneFullApiUniversalApplicationGeneratedClient(callOperation),
    createNiceCxoneFullApiUserinfoGeneratedClient(callOperation),
    createNiceCxoneFullApiUserManagementGeneratedClient(callOperation),
    createNiceCxoneFullApiVerificationTokenGeneratedClient(callOperation),
    createNiceCxoneFullApiVoicemailsGeneratedClient(callOperation),
    createNiceCxoneFullApiWFMDataGeneratedClient(callOperation),
    createNiceCxoneFullApiWorkflowDataGeneratedClient(callOperation),
    createNiceCxoneFullApiWorkItemGeneratedClient(callOperation),
    createNiceCxoneFullApiWorkItemsGeneratedClient(callOperation),
  ) as NiceCxoneFullApiGeneratedClient;
}
