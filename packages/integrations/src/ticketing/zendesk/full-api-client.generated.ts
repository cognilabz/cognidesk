// Generated from Zendesk Support OpenAPI (https://developer.zendesk.com/zendesk/oas.yaml).
// Do not edit by hand; run scripts/generate-zendesk-full-api.mjs after checking upstream docs.

import type { ZendeskOperationRequestInput } from "./index.js";
import type {
  ZendeskFullApiOperationQueryMap,
  ZendeskFullApiOperationQueryRequiredMap,
  ZendeskFullApiOperationRequestBodyMap,
  ZendeskFullApiOperationRequestBodyRequiredMap,
  ZendeskFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createZendeskFullApiAccountSettingsGeneratedClient,
  ZendeskFullApiAccountSettingsGeneratedFunctionNames,
  type ZendeskFullApiAccountSettingsGeneratedClient,
  type ZendeskFullApiAccountSettingsOperationPathParamMap,
  type ZendeskFullApiAccountSettingsOperationRequestMap,
} from "./full-api.generated/client/account-settings-chunk.generated.js";
import {
  createZendeskFullApiActivityStreamGeneratedClient,
  ZendeskFullApiActivityStreamGeneratedFunctionNames,
  type ZendeskFullApiActivityStreamGeneratedClient,
  type ZendeskFullApiActivityStreamOperationPathParamMap,
  type ZendeskFullApiActivityStreamOperationRequestMap,
} from "./full-api.generated/client/activity-stream-chunk.generated.js";
import {
  createZendeskFullApiApprovalRequestsGeneratedClient,
  ZendeskFullApiApprovalRequestsGeneratedFunctionNames,
  type ZendeskFullApiApprovalRequestsGeneratedClient,
  type ZendeskFullApiApprovalRequestsOperationPathParamMap,
  type ZendeskFullApiApprovalRequestsOperationRequestMap,
} from "./full-api.generated/client/approval-requests-chunk.generated.js";
import {
  createZendeskFullApiAttachmentsGeneratedClient,
  ZendeskFullApiAttachmentsGeneratedFunctionNames,
  type ZendeskFullApiAttachmentsGeneratedClient,
  type ZendeskFullApiAttachmentsOperationPathParamMap,
  type ZendeskFullApiAttachmentsOperationRequestMap,
} from "./full-api.generated/client/attachments-chunk.generated.js";
import {
  createZendeskFullApiAuditLogsGeneratedClient,
  ZendeskFullApiAuditLogsGeneratedFunctionNames,
  type ZendeskFullApiAuditLogsGeneratedClient,
  type ZendeskFullApiAuditLogsOperationPathParamMap,
  type ZendeskFullApiAuditLogsOperationRequestMap,
} from "./full-api.generated/client/audit-logs-chunk.generated.js";
import {
  createZendeskFullApiAutomationsGeneratedClient,
  ZendeskFullApiAutomationsGeneratedFunctionNames,
  type ZendeskFullApiAutomationsGeneratedClient,
  type ZendeskFullApiAutomationsOperationPathParamMap,
  type ZendeskFullApiAutomationsOperationRequestMap,
} from "./full-api.generated/client/automations-chunk.generated.js";
import {
  createZendeskFullApiBasicsGeneratedClient,
  ZendeskFullApiBasicsGeneratedFunctionNames,
  type ZendeskFullApiBasicsGeneratedClient,
  type ZendeskFullApiBasicsOperationPathParamMap,
  type ZendeskFullApiBasicsOperationRequestMap,
} from "./full-api.generated/client/basics-chunk.generated.js";
import {
  createZendeskFullApiBookmarksGeneratedClient,
  ZendeskFullApiBookmarksGeneratedFunctionNames,
  type ZendeskFullApiBookmarksGeneratedClient,
  type ZendeskFullApiBookmarksOperationPathParamMap,
  type ZendeskFullApiBookmarksOperationRequestMap,
} from "./full-api.generated/client/bookmarks-chunk.generated.js";
import {
  createZendeskFullApiBrandAgentsGeneratedClient,
  ZendeskFullApiBrandAgentsGeneratedFunctionNames,
  type ZendeskFullApiBrandAgentsGeneratedClient,
  type ZendeskFullApiBrandAgentsOperationPathParamMap,
  type ZendeskFullApiBrandAgentsOperationRequestMap,
} from "./full-api.generated/client/brand-agents-chunk.generated.js";
import {
  createZendeskFullApiBrandsGeneratedClient,
  ZendeskFullApiBrandsGeneratedFunctionNames,
  type ZendeskFullApiBrandsGeneratedClient,
  type ZendeskFullApiBrandsOperationPathParamMap,
  type ZendeskFullApiBrandsOperationRequestMap,
} from "./full-api.generated/client/brands-chunk.generated.js";
import {
  createZendeskFullApiChannelFrameworkGeneratedClient,
  ZendeskFullApiChannelFrameworkGeneratedFunctionNames,
  type ZendeskFullApiChannelFrameworkGeneratedClient,
  type ZendeskFullApiChannelFrameworkOperationPathParamMap,
  type ZendeskFullApiChannelFrameworkOperationRequestMap,
} from "./full-api.generated/client/channel-framework-chunk.generated.js";
import {
  createZendeskFullApiConversationLogGeneratedClient,
  ZendeskFullApiConversationLogGeneratedFunctionNames,
  type ZendeskFullApiConversationLogGeneratedClient,
  type ZendeskFullApiConversationLogOperationPathParamMap,
  type ZendeskFullApiConversationLogOperationRequestMap,
} from "./full-api.generated/client/conversation-log-chunk.generated.js";
import {
  createZendeskFullApiCustomObjectFieldsGeneratedClient,
  ZendeskFullApiCustomObjectFieldsGeneratedFunctionNames,
  type ZendeskFullApiCustomObjectFieldsGeneratedClient,
  type ZendeskFullApiCustomObjectFieldsOperationPathParamMap,
  type ZendeskFullApiCustomObjectFieldsOperationRequestMap,
} from "./full-api.generated/client/custom-object-fields-chunk.generated.js";
import {
  createZendeskFullApiCustomObjectPermissionsGeneratedClient,
  ZendeskFullApiCustomObjectPermissionsGeneratedFunctionNames,
  type ZendeskFullApiCustomObjectPermissionsGeneratedClient,
  type ZendeskFullApiCustomObjectPermissionsOperationPathParamMap,
  type ZendeskFullApiCustomObjectPermissionsOperationRequestMap,
} from "./full-api.generated/client/custom-object-permissions-chunk.generated.js";
import {
  createZendeskFullApiCustomObjectRecordAttachmentsGeneratedClient,
  ZendeskFullApiCustomObjectRecordAttachmentsGeneratedFunctionNames,
  type ZendeskFullApiCustomObjectRecordAttachmentsGeneratedClient,
  type ZendeskFullApiCustomObjectRecordAttachmentsOperationPathParamMap,
  type ZendeskFullApiCustomObjectRecordAttachmentsOperationRequestMap,
} from "./full-api.generated/client/custom-object-record-attachments-chunk.generated.js";
import {
  createZendeskFullApiCustomObjectRecordsGeneratedClient,
  ZendeskFullApiCustomObjectRecordsGeneratedFunctionNames,
  type ZendeskFullApiCustomObjectRecordsGeneratedClient,
  type ZendeskFullApiCustomObjectRecordsOperationPathParamMap,
  type ZendeskFullApiCustomObjectRecordsOperationRequestMap,
} from "./full-api.generated/client/custom-object-records-chunk.generated.js";
import {
  createZendeskFullApiCustomObjectsGeneratedClient,
  ZendeskFullApiCustomObjectsGeneratedFunctionNames,
  type ZendeskFullApiCustomObjectsGeneratedClient,
  type ZendeskFullApiCustomObjectsOperationPathParamMap,
  type ZendeskFullApiCustomObjectsOperationRequestMap,
} from "./full-api.generated/client/custom-objects-chunk.generated.js";
import {
  createZendeskFullApiCustomRolesGeneratedClient,
  ZendeskFullApiCustomRolesGeneratedFunctionNames,
  type ZendeskFullApiCustomRolesGeneratedClient,
  type ZendeskFullApiCustomRolesOperationPathParamMap,
  type ZendeskFullApiCustomRolesOperationRequestMap,
} from "./full-api.generated/client/custom-roles-chunk.generated.js";
import {
  createZendeskFullApiCustomTicketStatusesGeneratedClient,
  ZendeskFullApiCustomTicketStatusesGeneratedFunctionNames,
  type ZendeskFullApiCustomTicketStatusesGeneratedClient,
  type ZendeskFullApiCustomTicketStatusesOperationPathParamMap,
  type ZendeskFullApiCustomTicketStatusesOperationRequestMap,
} from "./full-api.generated/client/custom-ticket-statuses-chunk.generated.js";
import {
  createZendeskFullApiDeletionSchedulesGeneratedClient,
  ZendeskFullApiDeletionSchedulesGeneratedFunctionNames,
  type ZendeskFullApiDeletionSchedulesGeneratedClient,
  type ZendeskFullApiDeletionSchedulesOperationPathParamMap,
  type ZendeskFullApiDeletionSchedulesOperationRequestMap,
} from "./full-api.generated/client/deletion-schedules-chunk.generated.js";
import {
  createZendeskFullApiDynamicContentGeneratedClient,
  ZendeskFullApiDynamicContentGeneratedFunctionNames,
  type ZendeskFullApiDynamicContentGeneratedClient,
  type ZendeskFullApiDynamicContentOperationPathParamMap,
  type ZendeskFullApiDynamicContentOperationRequestMap,
} from "./full-api.generated/client/dynamic-content-chunk.generated.js";
import {
  createZendeskFullApiDynamicContentItemVariantsGeneratedClient,
  ZendeskFullApiDynamicContentItemVariantsGeneratedFunctionNames,
  type ZendeskFullApiDynamicContentItemVariantsGeneratedClient,
  type ZendeskFullApiDynamicContentItemVariantsOperationPathParamMap,
  type ZendeskFullApiDynamicContentItemVariantsOperationRequestMap,
} from "./full-api.generated/client/dynamic-content-item-variants-chunk.generated.js";
import {
  createZendeskFullApiEmailNotificationsGeneratedClient,
  ZendeskFullApiEmailNotificationsGeneratedFunctionNames,
  type ZendeskFullApiEmailNotificationsGeneratedClient,
  type ZendeskFullApiEmailNotificationsOperationPathParamMap,
  type ZendeskFullApiEmailNotificationsOperationRequestMap,
} from "./full-api.generated/client/email-notifications-chunk.generated.js";
import {
  createZendeskFullApiGlobalClientsGeneratedClient,
  ZendeskFullApiGlobalClientsGeneratedFunctionNames,
  type ZendeskFullApiGlobalClientsGeneratedClient,
  type ZendeskFullApiGlobalClientsOperationPathParamMap,
  type ZendeskFullApiGlobalClientsOperationRequestMap,
} from "./full-api.generated/client/global-clients-chunk.generated.js";
import {
  createZendeskFullApiGrantTypeTokensGeneratedClient,
  ZendeskFullApiGrantTypeTokensGeneratedFunctionNames,
  type ZendeskFullApiGrantTypeTokensGeneratedClient,
  type ZendeskFullApiGrantTypeTokensOperationPathParamMap,
  type ZendeskFullApiGrantTypeTokensOperationRequestMap,
} from "./full-api.generated/client/grant-type-tokens-chunk.generated.js";
import {
  createZendeskFullApiGroupMembershipsGeneratedClient,
  ZendeskFullApiGroupMembershipsGeneratedFunctionNames,
  type ZendeskFullApiGroupMembershipsGeneratedClient,
  type ZendeskFullApiGroupMembershipsOperationPathParamMap,
  type ZendeskFullApiGroupMembershipsOperationRequestMap,
} from "./full-api.generated/client/group-memberships-chunk.generated.js";
import {
  createZendeskFullApiGroupSLAPoliciesGeneratedClient,
  ZendeskFullApiGroupSLAPoliciesGeneratedFunctionNames,
  type ZendeskFullApiGroupSLAPoliciesGeneratedClient,
  type ZendeskFullApiGroupSLAPoliciesOperationPathParamMap,
  type ZendeskFullApiGroupSLAPoliciesOperationRequestMap,
} from "./full-api.generated/client/group-sla-policies-chunk.generated.js";
import {
  createZendeskFullApiGroupsGeneratedClient,
  ZendeskFullApiGroupsGeneratedFunctionNames,
  type ZendeskFullApiGroupsGeneratedClient,
  type ZendeskFullApiGroupsOperationPathParamMap,
  type ZendeskFullApiGroupsOperationRequestMap,
} from "./full-api.generated/client/groups-chunk.generated.js";
import {
  createZendeskFullApiIncrementalExportGeneratedClient,
  ZendeskFullApiIncrementalExportGeneratedFunctionNames,
  type ZendeskFullApiIncrementalExportGeneratedClient,
  type ZendeskFullApiIncrementalExportOperationPathParamMap,
  type ZendeskFullApiIncrementalExportOperationRequestMap,
} from "./full-api.generated/client/incremental-export-chunk.generated.js";
import {
  createZendeskFullApiIncrementalSkillBasedRoutingGeneratedClient,
  ZendeskFullApiIncrementalSkillBasedRoutingGeneratedFunctionNames,
  type ZendeskFullApiIncrementalSkillBasedRoutingGeneratedClient,
  type ZendeskFullApiIncrementalSkillBasedRoutingOperationPathParamMap,
  type ZendeskFullApiIncrementalSkillBasedRoutingOperationRequestMap,
} from "./full-api.generated/client/incremental-skill-based-routing-chunk.generated.js";
import {
  createZendeskFullApiITAMAssetFieldsGeneratedClient,
  ZendeskFullApiITAMAssetFieldsGeneratedFunctionNames,
  type ZendeskFullApiITAMAssetFieldsGeneratedClient,
  type ZendeskFullApiITAMAssetFieldsOperationPathParamMap,
  type ZendeskFullApiITAMAssetFieldsOperationRequestMap,
} from "./full-api.generated/client/itam-asset-fields-chunk.generated.js";
import {
  createZendeskFullApiITAMAssetLocationsGeneratedClient,
  ZendeskFullApiITAMAssetLocationsGeneratedFunctionNames,
  type ZendeskFullApiITAMAssetLocationsGeneratedClient,
  type ZendeskFullApiITAMAssetLocationsOperationPathParamMap,
  type ZendeskFullApiITAMAssetLocationsOperationRequestMap,
} from "./full-api.generated/client/itam-asset-locations-chunk.generated.js";
import {
  createZendeskFullApiITAMAssetStatusesGeneratedClient,
  ZendeskFullApiITAMAssetStatusesGeneratedFunctionNames,
  type ZendeskFullApiITAMAssetStatusesGeneratedClient,
  type ZendeskFullApiITAMAssetStatusesOperationPathParamMap,
  type ZendeskFullApiITAMAssetStatusesOperationRequestMap,
} from "./full-api.generated/client/itam-asset-statuses-chunk.generated.js";
import {
  createZendeskFullApiITAMAssetTypesGeneratedClient,
  ZendeskFullApiITAMAssetTypesGeneratedFunctionNames,
  type ZendeskFullApiITAMAssetTypesGeneratedClient,
  type ZendeskFullApiITAMAssetTypesOperationPathParamMap,
  type ZendeskFullApiITAMAssetTypesOperationRequestMap,
} from "./full-api.generated/client/itam-asset-types-chunk.generated.js";
import {
  createZendeskFullApiITAMAssetsGeneratedClient,
  ZendeskFullApiITAMAssetsGeneratedFunctionNames,
  type ZendeskFullApiITAMAssetsGeneratedClient,
  type ZendeskFullApiITAMAssetsOperationPathParamMap,
  type ZendeskFullApiITAMAssetsOperationRequestMap,
} from "./full-api.generated/client/itam-assets-chunk.generated.js";
import {
  createZendeskFullApiJobStatusesGeneratedClient,
  ZendeskFullApiJobStatusesGeneratedFunctionNames,
  type ZendeskFullApiJobStatusesGeneratedClient,
  type ZendeskFullApiJobStatusesOperationPathParamMap,
  type ZendeskFullApiJobStatusesOperationRequestMap,
} from "./full-api.generated/client/job-statuses-chunk.generated.js";
import {
  createZendeskFullApiLocalesGeneratedClient,
  ZendeskFullApiLocalesGeneratedFunctionNames,
  type ZendeskFullApiLocalesGeneratedClient,
  type ZendeskFullApiLocalesOperationPathParamMap,
  type ZendeskFullApiLocalesOperationRequestMap,
} from "./full-api.generated/client/locales-chunk.generated.js";
import {
  createZendeskFullApiLookupRelationshipsGeneratedClient,
  ZendeskFullApiLookupRelationshipsGeneratedFunctionNames,
  type ZendeskFullApiLookupRelationshipsGeneratedClient,
  type ZendeskFullApiLookupRelationshipsOperationPathParamMap,
  type ZendeskFullApiLookupRelationshipsOperationRequestMap,
} from "./full-api.generated/client/lookup-relationships-chunk.generated.js";
import {
  createZendeskFullApiMacrosGeneratedClient,
  ZendeskFullApiMacrosGeneratedFunctionNames,
  type ZendeskFullApiMacrosGeneratedClient,
  type ZendeskFullApiMacrosOperationPathParamMap,
  type ZendeskFullApiMacrosOperationRequestMap,
} from "./full-api.generated/client/macros-chunk.generated.js";
import {
  createZendeskFullApiOAuthClientsGeneratedClient,
  ZendeskFullApiOAuthClientsGeneratedFunctionNames,
  type ZendeskFullApiOAuthClientsGeneratedClient,
  type ZendeskFullApiOAuthClientsOperationPathParamMap,
  type ZendeskFullApiOAuthClientsOperationRequestMap,
} from "./full-api.generated/client/oauth-clients-chunk.generated.js";
import {
  createZendeskFullApiOAuthTokensGeneratedClient,
  ZendeskFullApiOAuthTokensGeneratedFunctionNames,
  type ZendeskFullApiOAuthTokensGeneratedClient,
  type ZendeskFullApiOAuthTokensOperationPathParamMap,
  type ZendeskFullApiOAuthTokensOperationRequestMap,
} from "./full-api.generated/client/oauth-tokens-chunk.generated.js";
import {
  createZendeskFullApiObjectTriggersGeneratedClient,
  ZendeskFullApiObjectTriggersGeneratedFunctionNames,
  type ZendeskFullApiObjectTriggersGeneratedClient,
  type ZendeskFullApiObjectTriggersOperationPathParamMap,
  type ZendeskFullApiObjectTriggersOperationRequestMap,
} from "./full-api.generated/client/object-triggers-chunk.generated.js";
import {
  createZendeskFullApiOmnichannelRoutingQueuesGeneratedClient,
  ZendeskFullApiOmnichannelRoutingQueuesGeneratedFunctionNames,
  type ZendeskFullApiOmnichannelRoutingQueuesGeneratedClient,
  type ZendeskFullApiOmnichannelRoutingQueuesOperationPathParamMap,
  type ZendeskFullApiOmnichannelRoutingQueuesOperationRequestMap,
} from "./full-api.generated/client/omnichannel-routing-queues-chunk.generated.js";
import {
  createZendeskFullApiOrganizationFieldsGeneratedClient,
  ZendeskFullApiOrganizationFieldsGeneratedFunctionNames,
  type ZendeskFullApiOrganizationFieldsGeneratedClient,
  type ZendeskFullApiOrganizationFieldsOperationPathParamMap,
  type ZendeskFullApiOrganizationFieldsOperationRequestMap,
} from "./full-api.generated/client/organization-fields-chunk.generated.js";
import {
  createZendeskFullApiOrganizationMembershipsGeneratedClient,
  ZendeskFullApiOrganizationMembershipsGeneratedFunctionNames,
  type ZendeskFullApiOrganizationMembershipsGeneratedClient,
  type ZendeskFullApiOrganizationMembershipsOperationPathParamMap,
  type ZendeskFullApiOrganizationMembershipsOperationRequestMap,
} from "./full-api.generated/client/organization-memberships-chunk.generated.js";
import {
  createZendeskFullApiOrganizationSubscriptionsGeneratedClient,
  ZendeskFullApiOrganizationSubscriptionsGeneratedFunctionNames,
  type ZendeskFullApiOrganizationSubscriptionsGeneratedClient,
  type ZendeskFullApiOrganizationSubscriptionsOperationPathParamMap,
  type ZendeskFullApiOrganizationSubscriptionsOperationRequestMap,
} from "./full-api.generated/client/organization-subscriptions-chunk.generated.js";
import {
  createZendeskFullApiOrganizationsGeneratedClient,
  ZendeskFullApiOrganizationsGeneratedFunctionNames,
  type ZendeskFullApiOrganizationsGeneratedClient,
  type ZendeskFullApiOrganizationsOperationPathParamMap,
  type ZendeskFullApiOrganizationsOperationRequestMap,
} from "./full-api.generated/client/organizations-chunk.generated.js";
import {
  createZendeskFullApiPushNotificationDevicesGeneratedClient,
  ZendeskFullApiPushNotificationDevicesGeneratedFunctionNames,
  type ZendeskFullApiPushNotificationDevicesGeneratedClient,
  type ZendeskFullApiPushNotificationDevicesOperationPathParamMap,
  type ZendeskFullApiPushNotificationDevicesOperationRequestMap,
} from "./full-api.generated/client/push-notification-devices-chunk.generated.js";
import {
  createZendeskFullApiRemoteAuthenticationsGeneratedClient,
  ZendeskFullApiRemoteAuthenticationsGeneratedFunctionNames,
  type ZendeskFullApiRemoteAuthenticationsGeneratedClient,
  type ZendeskFullApiRemoteAuthenticationsOperationPathParamMap,
  type ZendeskFullApiRemoteAuthenticationsOperationRequestMap,
} from "./full-api.generated/client/remote-authentications-chunk.generated.js";
import {
  createZendeskFullApiRequestsGeneratedClient,
  ZendeskFullApiRequestsGeneratedFunctionNames,
  type ZendeskFullApiRequestsGeneratedClient,
  type ZendeskFullApiRequestsOperationPathParamMap,
  type ZendeskFullApiRequestsOperationRequestMap,
} from "./full-api.generated/client/requests-chunk.generated.js";
import {
  createZendeskFullApiResellerGeneratedClient,
  ZendeskFullApiResellerGeneratedFunctionNames,
  type ZendeskFullApiResellerGeneratedClient,
  type ZendeskFullApiResellerOperationPathParamMap,
  type ZendeskFullApiResellerOperationRequestMap,
} from "./full-api.generated/client/reseller-chunk.generated.js";
import {
  createZendeskFullApiResourceCollectionsGeneratedClient,
  ZendeskFullApiResourceCollectionsGeneratedFunctionNames,
  type ZendeskFullApiResourceCollectionsGeneratedClient,
  type ZendeskFullApiResourceCollectionsOperationPathParamMap,
  type ZendeskFullApiResourceCollectionsOperationRequestMap,
} from "./full-api.generated/client/resource-collections-chunk.generated.js";
import {
  createZendeskFullApiSatisfactionRatingsGeneratedClient,
  ZendeskFullApiSatisfactionRatingsGeneratedFunctionNames,
  type ZendeskFullApiSatisfactionRatingsGeneratedClient,
  type ZendeskFullApiSatisfactionRatingsOperationPathParamMap,
  type ZendeskFullApiSatisfactionRatingsOperationRequestMap,
} from "./full-api.generated/client/satisfaction-ratings-chunk.generated.js";
import {
  createZendeskFullApiSatisfactionReasonsGeneratedClient,
  ZendeskFullApiSatisfactionReasonsGeneratedFunctionNames,
  type ZendeskFullApiSatisfactionReasonsGeneratedClient,
  type ZendeskFullApiSatisfactionReasonsOperationPathParamMap,
  type ZendeskFullApiSatisfactionReasonsOperationRequestMap,
} from "./full-api.generated/client/satisfaction-reasons-chunk.generated.js";
import {
  createZendeskFullApiSearchGeneratedClient,
  ZendeskFullApiSearchGeneratedFunctionNames,
  type ZendeskFullApiSearchGeneratedClient,
  type ZendeskFullApiSearchOperationPathParamMap,
  type ZendeskFullApiSearchOperationRequestMap,
} from "./full-api.generated/client/search-chunk.generated.js";
import {
  createZendeskFullApiSecuritySettingsGeneratedClient,
  ZendeskFullApiSecuritySettingsGeneratedFunctionNames,
  type ZendeskFullApiSecuritySettingsGeneratedClient,
  type ZendeskFullApiSecuritySettingsOperationPathParamMap,
  type ZendeskFullApiSecuritySettingsOperationRequestMap,
} from "./full-api.generated/client/security-settings-chunk.generated.js";
import {
  createZendeskFullApiSessionsGeneratedClient,
  ZendeskFullApiSessionsGeneratedFunctionNames,
  type ZendeskFullApiSessionsGeneratedClient,
  type ZendeskFullApiSessionsOperationPathParamMap,
  type ZendeskFullApiSessionsOperationRequestMap,
} from "./full-api.generated/client/sessions-chunk.generated.js";
import {
  createZendeskFullApiSharingAgreementsGeneratedClient,
  ZendeskFullApiSharingAgreementsGeneratedFunctionNames,
  type ZendeskFullApiSharingAgreementsGeneratedClient,
  type ZendeskFullApiSharingAgreementsOperationPathParamMap,
  type ZendeskFullApiSharingAgreementsOperationRequestMap,
} from "./full-api.generated/client/sharing-agreements-chunk.generated.js";
import {
  createZendeskFullApiSkillBasedRoutingGeneratedClient,
  ZendeskFullApiSkillBasedRoutingGeneratedFunctionNames,
  type ZendeskFullApiSkillBasedRoutingGeneratedClient,
  type ZendeskFullApiSkillBasedRoutingOperationPathParamMap,
  type ZendeskFullApiSkillBasedRoutingOperationRequestMap,
} from "./full-api.generated/client/skill-based-routing-chunk.generated.js";
import {
  createZendeskFullApiSLAPoliciesGeneratedClient,
  ZendeskFullApiSLAPoliciesGeneratedFunctionNames,
  type ZendeskFullApiSLAPoliciesGeneratedClient,
  type ZendeskFullApiSLAPoliciesOperationPathParamMap,
  type ZendeskFullApiSLAPoliciesOperationRequestMap,
} from "./full-api.generated/client/sla-policies-chunk.generated.js";
import {
  createZendeskFullApiSupportAddressesGeneratedClient,
  ZendeskFullApiSupportAddressesGeneratedFunctionNames,
  type ZendeskFullApiSupportAddressesGeneratedClient,
  type ZendeskFullApiSupportAddressesOperationPathParamMap,
  type ZendeskFullApiSupportAddressesOperationRequestMap,
} from "./full-api.generated/client/support-addresses-chunk.generated.js";
import {
  createZendeskFullApiSuspendedTicketsGeneratedClient,
  ZendeskFullApiSuspendedTicketsGeneratedFunctionNames,
  type ZendeskFullApiSuspendedTicketsGeneratedClient,
  type ZendeskFullApiSuspendedTicketsOperationPathParamMap,
  type ZendeskFullApiSuspendedTicketsOperationRequestMap,
} from "./full-api.generated/client/suspended-tickets-chunk.generated.js";
import {
  createZendeskFullApiTagsGeneratedClient,
  ZendeskFullApiTagsGeneratedFunctionNames,
  type ZendeskFullApiTagsGeneratedClient,
  type ZendeskFullApiTagsOperationPathParamMap,
  type ZendeskFullApiTagsOperationRequestMap,
} from "./full-api.generated/client/tags-chunk.generated.js";
import {
  createZendeskFullApiTargetFailuresGeneratedClient,
  ZendeskFullApiTargetFailuresGeneratedFunctionNames,
  type ZendeskFullApiTargetFailuresGeneratedClient,
  type ZendeskFullApiTargetFailuresOperationPathParamMap,
  type ZendeskFullApiTargetFailuresOperationRequestMap,
} from "./full-api.generated/client/target-failures-chunk.generated.js";
import {
  createZendeskFullApiTargetsGeneratedClient,
  ZendeskFullApiTargetsGeneratedFunctionNames,
  type ZendeskFullApiTargetsGeneratedClient,
  type ZendeskFullApiTargetsOperationPathParamMap,
  type ZendeskFullApiTargetsOperationRequestMap,
} from "./full-api.generated/client/targets-chunk.generated.js";
import {
  createZendeskFullApiTaskListTemplatesGeneratedClient,
  ZendeskFullApiTaskListTemplatesGeneratedFunctionNames,
  type ZendeskFullApiTaskListTemplatesGeneratedClient,
  type ZendeskFullApiTaskListTemplatesOperationPathParamMap,
  type ZendeskFullApiTaskListTemplatesOperationRequestMap,
} from "./full-api.generated/client/task-list-templates-chunk.generated.js";
import {
  createZendeskFullApiTaskListsGeneratedClient,
  ZendeskFullApiTaskListsGeneratedFunctionNames,
  type ZendeskFullApiTaskListsGeneratedClient,
  type ZendeskFullApiTaskListsOperationPathParamMap,
  type ZendeskFullApiTaskListsOperationRequestMap,
} from "./full-api.generated/client/task-lists-chunk.generated.js";
import {
  createZendeskFullApiTicketAuditsGeneratedClient,
  ZendeskFullApiTicketAuditsGeneratedFunctionNames,
  type ZendeskFullApiTicketAuditsGeneratedClient,
  type ZendeskFullApiTicketAuditsOperationPathParamMap,
  type ZendeskFullApiTicketAuditsOperationRequestMap,
} from "./full-api.generated/client/ticket-audits-chunk.generated.js";
import {
  createZendeskFullApiTicketCommentsGeneratedClient,
  ZendeskFullApiTicketCommentsGeneratedFunctionNames,
  type ZendeskFullApiTicketCommentsGeneratedClient,
  type ZendeskFullApiTicketCommentsOperationPathParamMap,
  type ZendeskFullApiTicketCommentsOperationRequestMap,
} from "./full-api.generated/client/ticket-comments-chunk.generated.js";
import {
  createZendeskFullApiTicketContentPinsGeneratedClient,
  ZendeskFullApiTicketContentPinsGeneratedFunctionNames,
  type ZendeskFullApiTicketContentPinsGeneratedClient,
  type ZendeskFullApiTicketContentPinsOperationPathParamMap,
  type ZendeskFullApiTicketContentPinsOperationRequestMap,
} from "./full-api.generated/client/ticket-content-pins-chunk.generated.js";
import {
  createZendeskFullApiTicketFieldsGeneratedClient,
  ZendeskFullApiTicketFieldsGeneratedFunctionNames,
  type ZendeskFullApiTicketFieldsGeneratedClient,
  type ZendeskFullApiTicketFieldsOperationPathParamMap,
  type ZendeskFullApiTicketFieldsOperationRequestMap,
} from "./full-api.generated/client/ticket-fields-chunk.generated.js";
import {
  createZendeskFullApiTicketFormStatusesGeneratedClient,
  ZendeskFullApiTicketFormStatusesGeneratedFunctionNames,
  type ZendeskFullApiTicketFormStatusesGeneratedClient,
  type ZendeskFullApiTicketFormStatusesOperationPathParamMap,
  type ZendeskFullApiTicketFormStatusesOperationRequestMap,
} from "./full-api.generated/client/ticket-form-statuses-chunk.generated.js";
import {
  createZendeskFullApiTicketFormsGeneratedClient,
  ZendeskFullApiTicketFormsGeneratedFunctionNames,
  type ZendeskFullApiTicketFormsGeneratedClient,
  type ZendeskFullApiTicketFormsOperationPathParamMap,
  type ZendeskFullApiTicketFormsOperationRequestMap,
} from "./full-api.generated/client/ticket-forms-chunk.generated.js";
import {
  createZendeskFullApiTicketImportGeneratedClient,
  ZendeskFullApiTicketImportGeneratedFunctionNames,
  type ZendeskFullApiTicketImportGeneratedClient,
  type ZendeskFullApiTicketImportOperationPathParamMap,
  type ZendeskFullApiTicketImportOperationRequestMap,
} from "./full-api.generated/client/ticket-import-chunk.generated.js";
import {
  createZendeskFullApiTicketMetricEventsGeneratedClient,
  ZendeskFullApiTicketMetricEventsGeneratedFunctionNames,
  type ZendeskFullApiTicketMetricEventsGeneratedClient,
  type ZendeskFullApiTicketMetricEventsOperationPathParamMap,
  type ZendeskFullApiTicketMetricEventsOperationRequestMap,
} from "./full-api.generated/client/ticket-metric-events-chunk.generated.js";
import {
  createZendeskFullApiTicketMetricsGeneratedClient,
  ZendeskFullApiTicketMetricsGeneratedFunctionNames,
  type ZendeskFullApiTicketMetricsGeneratedClient,
  type ZendeskFullApiTicketMetricsOperationPathParamMap,
  type ZendeskFullApiTicketMetricsOperationRequestMap,
} from "./full-api.generated/client/ticket-metrics-chunk.generated.js";
import {
  createZendeskFullApiTicketSkipsGeneratedClient,
  ZendeskFullApiTicketSkipsGeneratedFunctionNames,
  type ZendeskFullApiTicketSkipsGeneratedClient,
  type ZendeskFullApiTicketSkipsOperationPathParamMap,
  type ZendeskFullApiTicketSkipsOperationRequestMap,
} from "./full-api.generated/client/ticket-skips-chunk.generated.js";
import {
  createZendeskFullApiTicketsGeneratedClient,
  ZendeskFullApiTicketsGeneratedFunctionNames,
  type ZendeskFullApiTicketsGeneratedClient,
  type ZendeskFullApiTicketsOperationPathParamMap,
  type ZendeskFullApiTicketsOperationRequestMap,
} from "./full-api.generated/client/tickets-chunk.generated.js";
import {
  createZendeskFullApiTriggerCategoriesGeneratedClient,
  ZendeskFullApiTriggerCategoriesGeneratedFunctionNames,
  type ZendeskFullApiTriggerCategoriesGeneratedClient,
  type ZendeskFullApiTriggerCategoriesOperationPathParamMap,
  type ZendeskFullApiTriggerCategoriesOperationRequestMap,
} from "./full-api.generated/client/trigger-categories-chunk.generated.js";
import {
  createZendeskFullApiTriggersGeneratedClient,
  ZendeskFullApiTriggersGeneratedFunctionNames,
  type ZendeskFullApiTriggersGeneratedClient,
  type ZendeskFullApiTriggersOperationPathParamMap,
  type ZendeskFullApiTriggersOperationRequestMap,
} from "./full-api.generated/client/triggers-chunk.generated.js";
import {
  createZendeskFullApiUserFieldsGeneratedClient,
  ZendeskFullApiUserFieldsGeneratedFunctionNames,
  type ZendeskFullApiUserFieldsGeneratedClient,
  type ZendeskFullApiUserFieldsOperationPathParamMap,
  type ZendeskFullApiUserFieldsOperationRequestMap,
} from "./full-api.generated/client/user-fields-chunk.generated.js";
import {
  createZendeskFullApiUserIdentitiesGeneratedClient,
  ZendeskFullApiUserIdentitiesGeneratedFunctionNames,
  type ZendeskFullApiUserIdentitiesGeneratedClient,
  type ZendeskFullApiUserIdentitiesOperationPathParamMap,
  type ZendeskFullApiUserIdentitiesOperationRequestMap,
} from "./full-api.generated/client/user-identities-chunk.generated.js";
import {
  createZendeskFullApiUserPasswordsGeneratedClient,
  ZendeskFullApiUserPasswordsGeneratedFunctionNames,
  type ZendeskFullApiUserPasswordsGeneratedClient,
  type ZendeskFullApiUserPasswordsOperationPathParamMap,
  type ZendeskFullApiUserPasswordsOperationRequestMap,
} from "./full-api.generated/client/user-passwords-chunk.generated.js";
import {
  createZendeskFullApiUsersGeneratedClient,
  ZendeskFullApiUsersGeneratedFunctionNames,
  type ZendeskFullApiUsersGeneratedClient,
  type ZendeskFullApiUsersOperationPathParamMap,
  type ZendeskFullApiUsersOperationRequestMap,
} from "./full-api.generated/client/users-chunk.generated.js";
import {
  createZendeskFullApiViewsGeneratedClient,
  ZendeskFullApiViewsGeneratedFunctionNames,
  type ZendeskFullApiViewsGeneratedClient,
  type ZendeskFullApiViewsOperationPathParamMap,
  type ZendeskFullApiViewsOperationRequestMap,
} from "./full-api.generated/client/views-chunk.generated.js";
import {
  createZendeskFullApiWorkspacesGeneratedClient,
  ZendeskFullApiWorkspacesGeneratedFunctionNames,
  type ZendeskFullApiWorkspacesGeneratedClient,
  type ZendeskFullApiWorkspacesOperationPathParamMap,
  type ZendeskFullApiWorkspacesOperationRequestMap,
} from "./full-api.generated/client/workspaces-chunk.generated.js";
import {
  createZendeskFullApiXChannelGeneratedClient,
  ZendeskFullApiXChannelGeneratedFunctionNames,
  type ZendeskFullApiXChannelGeneratedClient,
  type ZendeskFullApiXChannelOperationPathParamMap,
  type ZendeskFullApiXChannelOperationRequestMap,
} from "./full-api.generated/client/x-channel-chunk.generated.js";

export type ZendeskFullApiPathParamValue = string | number;
export interface ZendeskFullApiOperationPathParamMap extends ZendeskFullApiAccountSettingsOperationPathParamMap, ZendeskFullApiActivityStreamOperationPathParamMap, ZendeskFullApiApprovalRequestsOperationPathParamMap, ZendeskFullApiAttachmentsOperationPathParamMap, ZendeskFullApiAuditLogsOperationPathParamMap, ZendeskFullApiAutomationsOperationPathParamMap, ZendeskFullApiBasicsOperationPathParamMap, ZendeskFullApiBookmarksOperationPathParamMap, ZendeskFullApiBrandAgentsOperationPathParamMap, ZendeskFullApiBrandsOperationPathParamMap, ZendeskFullApiChannelFrameworkOperationPathParamMap, ZendeskFullApiConversationLogOperationPathParamMap, ZendeskFullApiCustomObjectFieldsOperationPathParamMap, ZendeskFullApiCustomObjectPermissionsOperationPathParamMap, ZendeskFullApiCustomObjectRecordAttachmentsOperationPathParamMap, ZendeskFullApiCustomObjectRecordsOperationPathParamMap, ZendeskFullApiCustomObjectsOperationPathParamMap, ZendeskFullApiCustomRolesOperationPathParamMap, ZendeskFullApiCustomTicketStatusesOperationPathParamMap, ZendeskFullApiDeletionSchedulesOperationPathParamMap, ZendeskFullApiDynamicContentOperationPathParamMap, ZendeskFullApiDynamicContentItemVariantsOperationPathParamMap, ZendeskFullApiEmailNotificationsOperationPathParamMap, ZendeskFullApiGlobalClientsOperationPathParamMap, ZendeskFullApiGrantTypeTokensOperationPathParamMap, ZendeskFullApiGroupMembershipsOperationPathParamMap, ZendeskFullApiGroupSLAPoliciesOperationPathParamMap, ZendeskFullApiGroupsOperationPathParamMap, ZendeskFullApiIncrementalExportOperationPathParamMap, ZendeskFullApiIncrementalSkillBasedRoutingOperationPathParamMap, ZendeskFullApiITAMAssetFieldsOperationPathParamMap, ZendeskFullApiITAMAssetLocationsOperationPathParamMap, ZendeskFullApiITAMAssetStatusesOperationPathParamMap, ZendeskFullApiITAMAssetTypesOperationPathParamMap, ZendeskFullApiITAMAssetsOperationPathParamMap, ZendeskFullApiJobStatusesOperationPathParamMap, ZendeskFullApiLocalesOperationPathParamMap, ZendeskFullApiLookupRelationshipsOperationPathParamMap, ZendeskFullApiMacrosOperationPathParamMap, ZendeskFullApiOAuthClientsOperationPathParamMap, ZendeskFullApiOAuthTokensOperationPathParamMap, ZendeskFullApiObjectTriggersOperationPathParamMap, ZendeskFullApiOmnichannelRoutingQueuesOperationPathParamMap, ZendeskFullApiOrganizationFieldsOperationPathParamMap, ZendeskFullApiOrganizationMembershipsOperationPathParamMap, ZendeskFullApiOrganizationSubscriptionsOperationPathParamMap, ZendeskFullApiOrganizationsOperationPathParamMap, ZendeskFullApiPushNotificationDevicesOperationPathParamMap, ZendeskFullApiRemoteAuthenticationsOperationPathParamMap, ZendeskFullApiRequestsOperationPathParamMap, ZendeskFullApiResellerOperationPathParamMap, ZendeskFullApiResourceCollectionsOperationPathParamMap, ZendeskFullApiSatisfactionRatingsOperationPathParamMap, ZendeskFullApiSatisfactionReasonsOperationPathParamMap, ZendeskFullApiSearchOperationPathParamMap, ZendeskFullApiSecuritySettingsOperationPathParamMap, ZendeskFullApiSessionsOperationPathParamMap, ZendeskFullApiSharingAgreementsOperationPathParamMap, ZendeskFullApiSkillBasedRoutingOperationPathParamMap, ZendeskFullApiSLAPoliciesOperationPathParamMap, ZendeskFullApiSupportAddressesOperationPathParamMap, ZendeskFullApiSuspendedTicketsOperationPathParamMap, ZendeskFullApiTagsOperationPathParamMap, ZendeskFullApiTargetFailuresOperationPathParamMap, ZendeskFullApiTargetsOperationPathParamMap, ZendeskFullApiTaskListTemplatesOperationPathParamMap, ZendeskFullApiTaskListsOperationPathParamMap, ZendeskFullApiTicketAuditsOperationPathParamMap, ZendeskFullApiTicketCommentsOperationPathParamMap, ZendeskFullApiTicketContentPinsOperationPathParamMap, ZendeskFullApiTicketFieldsOperationPathParamMap, ZendeskFullApiTicketFormStatusesOperationPathParamMap, ZendeskFullApiTicketFormsOperationPathParamMap, ZendeskFullApiTicketImportOperationPathParamMap, ZendeskFullApiTicketMetricEventsOperationPathParamMap, ZendeskFullApiTicketMetricsOperationPathParamMap, ZendeskFullApiTicketSkipsOperationPathParamMap, ZendeskFullApiTicketsOperationPathParamMap, ZendeskFullApiTriggerCategoriesOperationPathParamMap, ZendeskFullApiTriggersOperationPathParamMap, ZendeskFullApiUserFieldsOperationPathParamMap, ZendeskFullApiUserIdentitiesOperationPathParamMap, ZendeskFullApiUserPasswordsOperationPathParamMap, ZendeskFullApiUsersOperationPathParamMap, ZendeskFullApiViewsOperationPathParamMap, ZendeskFullApiWorkspacesOperationPathParamMap, ZendeskFullApiXChannelOperationPathParamMap {}

export type ZendeskFullApiOperationKey = keyof ZendeskFullApiOperationPathParamMap & string;

export type ZendeskFullApiOperationQueryInput<OperationKey extends ZendeskFullApiOperationKey> =
  ZendeskFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: ZendeskFullApiOperationQueryMap[OperationKey] }
    : { query?: ZendeskFullApiOperationQueryMap[OperationKey] };

export type ZendeskFullApiOperationBodyInput<OperationKey extends ZendeskFullApiOperationKey> =
  [ZendeskFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : ZendeskFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: ZendeskFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: ZendeskFullApiOperationRequestBodyMap[OperationKey] };

export type ZendeskFullApiOperationInput<OperationKey extends ZendeskFullApiOperationKey> = Omit<ZendeskOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends ZendeskFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: ZendeskFullApiOperationPathParamMap[OperationKey] }
) & ZendeskFullApiOperationQueryInput<OperationKey> & ZendeskFullApiOperationBodyInput<OperationKey>;

export interface ZendeskFullApiOperationRequestMap extends ZendeskFullApiAccountSettingsOperationRequestMap, ZendeskFullApiActivityStreamOperationRequestMap, ZendeskFullApiApprovalRequestsOperationRequestMap, ZendeskFullApiAttachmentsOperationRequestMap, ZendeskFullApiAuditLogsOperationRequestMap, ZendeskFullApiAutomationsOperationRequestMap, ZendeskFullApiBasicsOperationRequestMap, ZendeskFullApiBookmarksOperationRequestMap, ZendeskFullApiBrandAgentsOperationRequestMap, ZendeskFullApiBrandsOperationRequestMap, ZendeskFullApiChannelFrameworkOperationRequestMap, ZendeskFullApiConversationLogOperationRequestMap, ZendeskFullApiCustomObjectFieldsOperationRequestMap, ZendeskFullApiCustomObjectPermissionsOperationRequestMap, ZendeskFullApiCustomObjectRecordAttachmentsOperationRequestMap, ZendeskFullApiCustomObjectRecordsOperationRequestMap, ZendeskFullApiCustomObjectsOperationRequestMap, ZendeskFullApiCustomRolesOperationRequestMap, ZendeskFullApiCustomTicketStatusesOperationRequestMap, ZendeskFullApiDeletionSchedulesOperationRequestMap, ZendeskFullApiDynamicContentOperationRequestMap, ZendeskFullApiDynamicContentItemVariantsOperationRequestMap, ZendeskFullApiEmailNotificationsOperationRequestMap, ZendeskFullApiGlobalClientsOperationRequestMap, ZendeskFullApiGrantTypeTokensOperationRequestMap, ZendeskFullApiGroupMembershipsOperationRequestMap, ZendeskFullApiGroupSLAPoliciesOperationRequestMap, ZendeskFullApiGroupsOperationRequestMap, ZendeskFullApiIncrementalExportOperationRequestMap, ZendeskFullApiIncrementalSkillBasedRoutingOperationRequestMap, ZendeskFullApiITAMAssetFieldsOperationRequestMap, ZendeskFullApiITAMAssetLocationsOperationRequestMap, ZendeskFullApiITAMAssetStatusesOperationRequestMap, ZendeskFullApiITAMAssetTypesOperationRequestMap, ZendeskFullApiITAMAssetsOperationRequestMap, ZendeskFullApiJobStatusesOperationRequestMap, ZendeskFullApiLocalesOperationRequestMap, ZendeskFullApiLookupRelationshipsOperationRequestMap, ZendeskFullApiMacrosOperationRequestMap, ZendeskFullApiOAuthClientsOperationRequestMap, ZendeskFullApiOAuthTokensOperationRequestMap, ZendeskFullApiObjectTriggersOperationRequestMap, ZendeskFullApiOmnichannelRoutingQueuesOperationRequestMap, ZendeskFullApiOrganizationFieldsOperationRequestMap, ZendeskFullApiOrganizationMembershipsOperationRequestMap, ZendeskFullApiOrganizationSubscriptionsOperationRequestMap, ZendeskFullApiOrganizationsOperationRequestMap, ZendeskFullApiPushNotificationDevicesOperationRequestMap, ZendeskFullApiRemoteAuthenticationsOperationRequestMap, ZendeskFullApiRequestsOperationRequestMap, ZendeskFullApiResellerOperationRequestMap, ZendeskFullApiResourceCollectionsOperationRequestMap, ZendeskFullApiSatisfactionRatingsOperationRequestMap, ZendeskFullApiSatisfactionReasonsOperationRequestMap, ZendeskFullApiSearchOperationRequestMap, ZendeskFullApiSecuritySettingsOperationRequestMap, ZendeskFullApiSessionsOperationRequestMap, ZendeskFullApiSharingAgreementsOperationRequestMap, ZendeskFullApiSkillBasedRoutingOperationRequestMap, ZendeskFullApiSLAPoliciesOperationRequestMap, ZendeskFullApiSupportAddressesOperationRequestMap, ZendeskFullApiSuspendedTicketsOperationRequestMap, ZendeskFullApiTagsOperationRequestMap, ZendeskFullApiTargetFailuresOperationRequestMap, ZendeskFullApiTargetsOperationRequestMap, ZendeskFullApiTaskListTemplatesOperationRequestMap, ZendeskFullApiTaskListsOperationRequestMap, ZendeskFullApiTicketAuditsOperationRequestMap, ZendeskFullApiTicketCommentsOperationRequestMap, ZendeskFullApiTicketContentPinsOperationRequestMap, ZendeskFullApiTicketFieldsOperationRequestMap, ZendeskFullApiTicketFormStatusesOperationRequestMap, ZendeskFullApiTicketFormsOperationRequestMap, ZendeskFullApiTicketImportOperationRequestMap, ZendeskFullApiTicketMetricEventsOperationRequestMap, ZendeskFullApiTicketMetricsOperationRequestMap, ZendeskFullApiTicketSkipsOperationRequestMap, ZendeskFullApiTicketsOperationRequestMap, ZendeskFullApiTriggerCategoriesOperationRequestMap, ZendeskFullApiTriggersOperationRequestMap, ZendeskFullApiUserFieldsOperationRequestMap, ZendeskFullApiUserIdentitiesOperationRequestMap, ZendeskFullApiUserPasswordsOperationRequestMap, ZendeskFullApiUsersOperationRequestMap, ZendeskFullApiViewsOperationRequestMap, ZendeskFullApiWorkspacesOperationRequestMap, ZendeskFullApiXChannelOperationRequestMap {}

export type ZendeskFullApiOperationArgs<OperationKey extends ZendeskFullApiOperationKey> = {} extends ZendeskFullApiOperationPathParamMap[OperationKey]
  ? [input?: ZendeskFullApiOperationRequestMap[OperationKey]]
  : [input: ZendeskFullApiOperationRequestMap[OperationKey]];

export type ZendeskGeneratedOperationCaller = <OperationKey extends ZendeskFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: ZendeskFullApiOperationArgs<OperationKey>
) => Promise<ZendeskFullApiOperationResponseMap[OperationKey]>;

export interface ZendeskFullApiGeneratedClient extends ZendeskFullApiAccountSettingsGeneratedClient, ZendeskFullApiActivityStreamGeneratedClient, ZendeskFullApiApprovalRequestsGeneratedClient, ZendeskFullApiAttachmentsGeneratedClient, ZendeskFullApiAuditLogsGeneratedClient, ZendeskFullApiAutomationsGeneratedClient, ZendeskFullApiBasicsGeneratedClient, ZendeskFullApiBookmarksGeneratedClient, ZendeskFullApiBrandAgentsGeneratedClient, ZendeskFullApiBrandsGeneratedClient, ZendeskFullApiChannelFrameworkGeneratedClient, ZendeskFullApiConversationLogGeneratedClient, ZendeskFullApiCustomObjectFieldsGeneratedClient, ZendeskFullApiCustomObjectPermissionsGeneratedClient, ZendeskFullApiCustomObjectRecordAttachmentsGeneratedClient, ZendeskFullApiCustomObjectRecordsGeneratedClient, ZendeskFullApiCustomObjectsGeneratedClient, ZendeskFullApiCustomRolesGeneratedClient, ZendeskFullApiCustomTicketStatusesGeneratedClient, ZendeskFullApiDeletionSchedulesGeneratedClient, ZendeskFullApiDynamicContentGeneratedClient, ZendeskFullApiDynamicContentItemVariantsGeneratedClient, ZendeskFullApiEmailNotificationsGeneratedClient, ZendeskFullApiGlobalClientsGeneratedClient, ZendeskFullApiGrantTypeTokensGeneratedClient, ZendeskFullApiGroupMembershipsGeneratedClient, ZendeskFullApiGroupSLAPoliciesGeneratedClient, ZendeskFullApiGroupsGeneratedClient, ZendeskFullApiIncrementalExportGeneratedClient, ZendeskFullApiIncrementalSkillBasedRoutingGeneratedClient, ZendeskFullApiITAMAssetFieldsGeneratedClient, ZendeskFullApiITAMAssetLocationsGeneratedClient, ZendeskFullApiITAMAssetStatusesGeneratedClient, ZendeskFullApiITAMAssetTypesGeneratedClient, ZendeskFullApiITAMAssetsGeneratedClient, ZendeskFullApiJobStatusesGeneratedClient, ZendeskFullApiLocalesGeneratedClient, ZendeskFullApiLookupRelationshipsGeneratedClient, ZendeskFullApiMacrosGeneratedClient, ZendeskFullApiOAuthClientsGeneratedClient, ZendeskFullApiOAuthTokensGeneratedClient, ZendeskFullApiObjectTriggersGeneratedClient, ZendeskFullApiOmnichannelRoutingQueuesGeneratedClient, ZendeskFullApiOrganizationFieldsGeneratedClient, ZendeskFullApiOrganizationMembershipsGeneratedClient, ZendeskFullApiOrganizationSubscriptionsGeneratedClient, ZendeskFullApiOrganizationsGeneratedClient, ZendeskFullApiPushNotificationDevicesGeneratedClient, ZendeskFullApiRemoteAuthenticationsGeneratedClient, ZendeskFullApiRequestsGeneratedClient, ZendeskFullApiResellerGeneratedClient, ZendeskFullApiResourceCollectionsGeneratedClient, ZendeskFullApiSatisfactionRatingsGeneratedClient, ZendeskFullApiSatisfactionReasonsGeneratedClient, ZendeskFullApiSearchGeneratedClient, ZendeskFullApiSecuritySettingsGeneratedClient, ZendeskFullApiSessionsGeneratedClient, ZendeskFullApiSharingAgreementsGeneratedClient, ZendeskFullApiSkillBasedRoutingGeneratedClient, ZendeskFullApiSLAPoliciesGeneratedClient, ZendeskFullApiSupportAddressesGeneratedClient, ZendeskFullApiSuspendedTicketsGeneratedClient, ZendeskFullApiTagsGeneratedClient, ZendeskFullApiTargetFailuresGeneratedClient, ZendeskFullApiTargetsGeneratedClient, ZendeskFullApiTaskListTemplatesGeneratedClient, ZendeskFullApiTaskListsGeneratedClient, ZendeskFullApiTicketAuditsGeneratedClient, ZendeskFullApiTicketCommentsGeneratedClient, ZendeskFullApiTicketContentPinsGeneratedClient, ZendeskFullApiTicketFieldsGeneratedClient, ZendeskFullApiTicketFormStatusesGeneratedClient, ZendeskFullApiTicketFormsGeneratedClient, ZendeskFullApiTicketImportGeneratedClient, ZendeskFullApiTicketMetricEventsGeneratedClient, ZendeskFullApiTicketMetricsGeneratedClient, ZendeskFullApiTicketSkipsGeneratedClient, ZendeskFullApiTicketsGeneratedClient, ZendeskFullApiTriggerCategoriesGeneratedClient, ZendeskFullApiTriggersGeneratedClient, ZendeskFullApiUserFieldsGeneratedClient, ZendeskFullApiUserIdentitiesGeneratedClient, ZendeskFullApiUserPasswordsGeneratedClient, ZendeskFullApiUsersGeneratedClient, ZendeskFullApiViewsGeneratedClient, ZendeskFullApiWorkspacesGeneratedClient, ZendeskFullApiXChannelGeneratedClient {}

export const ZENDESK_FULL_API_GENERATED_FUNCTION_COUNT = 610 as const;
export const ZENDESK_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...ZendeskFullApiAccountSettingsGeneratedFunctionNames,
  ...ZendeskFullApiActivityStreamGeneratedFunctionNames,
  ...ZendeskFullApiApprovalRequestsGeneratedFunctionNames,
  ...ZendeskFullApiAttachmentsGeneratedFunctionNames,
  ...ZendeskFullApiAuditLogsGeneratedFunctionNames,
  ...ZendeskFullApiAutomationsGeneratedFunctionNames,
  ...ZendeskFullApiBasicsGeneratedFunctionNames,
  ...ZendeskFullApiBookmarksGeneratedFunctionNames,
  ...ZendeskFullApiBrandAgentsGeneratedFunctionNames,
  ...ZendeskFullApiBrandsGeneratedFunctionNames,
  ...ZendeskFullApiChannelFrameworkGeneratedFunctionNames,
  ...ZendeskFullApiConversationLogGeneratedFunctionNames,
  ...ZendeskFullApiCustomObjectFieldsGeneratedFunctionNames,
  ...ZendeskFullApiCustomObjectPermissionsGeneratedFunctionNames,
  ...ZendeskFullApiCustomObjectRecordAttachmentsGeneratedFunctionNames,
  ...ZendeskFullApiCustomObjectRecordsGeneratedFunctionNames,
  ...ZendeskFullApiCustomObjectsGeneratedFunctionNames,
  ...ZendeskFullApiCustomRolesGeneratedFunctionNames,
  ...ZendeskFullApiCustomTicketStatusesGeneratedFunctionNames,
  ...ZendeskFullApiDeletionSchedulesGeneratedFunctionNames,
  ...ZendeskFullApiDynamicContentGeneratedFunctionNames,
  ...ZendeskFullApiDynamicContentItemVariantsGeneratedFunctionNames,
  ...ZendeskFullApiEmailNotificationsGeneratedFunctionNames,
  ...ZendeskFullApiGlobalClientsGeneratedFunctionNames,
  ...ZendeskFullApiGrantTypeTokensGeneratedFunctionNames,
  ...ZendeskFullApiGroupMembershipsGeneratedFunctionNames,
  ...ZendeskFullApiGroupSLAPoliciesGeneratedFunctionNames,
  ...ZendeskFullApiGroupsGeneratedFunctionNames,
  ...ZendeskFullApiIncrementalExportGeneratedFunctionNames,
  ...ZendeskFullApiIncrementalSkillBasedRoutingGeneratedFunctionNames,
  ...ZendeskFullApiITAMAssetFieldsGeneratedFunctionNames,
  ...ZendeskFullApiITAMAssetLocationsGeneratedFunctionNames,
  ...ZendeskFullApiITAMAssetStatusesGeneratedFunctionNames,
  ...ZendeskFullApiITAMAssetTypesGeneratedFunctionNames,
  ...ZendeskFullApiITAMAssetsGeneratedFunctionNames,
  ...ZendeskFullApiJobStatusesGeneratedFunctionNames,
  ...ZendeskFullApiLocalesGeneratedFunctionNames,
  ...ZendeskFullApiLookupRelationshipsGeneratedFunctionNames,
  ...ZendeskFullApiMacrosGeneratedFunctionNames,
  ...ZendeskFullApiOAuthClientsGeneratedFunctionNames,
  ...ZendeskFullApiOAuthTokensGeneratedFunctionNames,
  ...ZendeskFullApiObjectTriggersGeneratedFunctionNames,
  ...ZendeskFullApiOmnichannelRoutingQueuesGeneratedFunctionNames,
  ...ZendeskFullApiOrganizationFieldsGeneratedFunctionNames,
  ...ZendeskFullApiOrganizationMembershipsGeneratedFunctionNames,
  ...ZendeskFullApiOrganizationSubscriptionsGeneratedFunctionNames,
  ...ZendeskFullApiOrganizationsGeneratedFunctionNames,
  ...ZendeskFullApiPushNotificationDevicesGeneratedFunctionNames,
  ...ZendeskFullApiRemoteAuthenticationsGeneratedFunctionNames,
  ...ZendeskFullApiRequestsGeneratedFunctionNames,
  ...ZendeskFullApiResellerGeneratedFunctionNames,
  ...ZendeskFullApiResourceCollectionsGeneratedFunctionNames,
  ...ZendeskFullApiSatisfactionRatingsGeneratedFunctionNames,
  ...ZendeskFullApiSatisfactionReasonsGeneratedFunctionNames,
  ...ZendeskFullApiSearchGeneratedFunctionNames,
  ...ZendeskFullApiSecuritySettingsGeneratedFunctionNames,
  ...ZendeskFullApiSessionsGeneratedFunctionNames,
  ...ZendeskFullApiSharingAgreementsGeneratedFunctionNames,
  ...ZendeskFullApiSkillBasedRoutingGeneratedFunctionNames,
  ...ZendeskFullApiSLAPoliciesGeneratedFunctionNames,
  ...ZendeskFullApiSupportAddressesGeneratedFunctionNames,
  ...ZendeskFullApiSuspendedTicketsGeneratedFunctionNames,
  ...ZendeskFullApiTagsGeneratedFunctionNames,
  ...ZendeskFullApiTargetFailuresGeneratedFunctionNames,
  ...ZendeskFullApiTargetsGeneratedFunctionNames,
  ...ZendeskFullApiTaskListTemplatesGeneratedFunctionNames,
  ...ZendeskFullApiTaskListsGeneratedFunctionNames,
  ...ZendeskFullApiTicketAuditsGeneratedFunctionNames,
  ...ZendeskFullApiTicketCommentsGeneratedFunctionNames,
  ...ZendeskFullApiTicketContentPinsGeneratedFunctionNames,
  ...ZendeskFullApiTicketFieldsGeneratedFunctionNames,
  ...ZendeskFullApiTicketFormStatusesGeneratedFunctionNames,
  ...ZendeskFullApiTicketFormsGeneratedFunctionNames,
  ...ZendeskFullApiTicketImportGeneratedFunctionNames,
  ...ZendeskFullApiTicketMetricEventsGeneratedFunctionNames,
  ...ZendeskFullApiTicketMetricsGeneratedFunctionNames,
  ...ZendeskFullApiTicketSkipsGeneratedFunctionNames,
  ...ZendeskFullApiTicketsGeneratedFunctionNames,
  ...ZendeskFullApiTriggerCategoriesGeneratedFunctionNames,
  ...ZendeskFullApiTriggersGeneratedFunctionNames,
  ...ZendeskFullApiUserFieldsGeneratedFunctionNames,
  ...ZendeskFullApiUserIdentitiesGeneratedFunctionNames,
  ...ZendeskFullApiUserPasswordsGeneratedFunctionNames,
  ...ZendeskFullApiUsersGeneratedFunctionNames,
  ...ZendeskFullApiViewsGeneratedFunctionNames,
  ...ZendeskFullApiWorkspacesGeneratedFunctionNames,
  ...ZendeskFullApiXChannelGeneratedFunctionNames,
] as const satisfies readonly (keyof ZendeskFullApiGeneratedClient)[];

export function createZendeskFullApiGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiGeneratedClient {
  return Object.assign(
    {},
    createZendeskFullApiAccountSettingsGeneratedClient(callOperation),
    createZendeskFullApiActivityStreamGeneratedClient(callOperation),
    createZendeskFullApiApprovalRequestsGeneratedClient(callOperation),
    createZendeskFullApiAttachmentsGeneratedClient(callOperation),
    createZendeskFullApiAuditLogsGeneratedClient(callOperation),
    createZendeskFullApiAutomationsGeneratedClient(callOperation),
    createZendeskFullApiBasicsGeneratedClient(callOperation),
    createZendeskFullApiBookmarksGeneratedClient(callOperation),
    createZendeskFullApiBrandAgentsGeneratedClient(callOperation),
    createZendeskFullApiBrandsGeneratedClient(callOperation),
    createZendeskFullApiChannelFrameworkGeneratedClient(callOperation),
    createZendeskFullApiConversationLogGeneratedClient(callOperation),
    createZendeskFullApiCustomObjectFieldsGeneratedClient(callOperation),
    createZendeskFullApiCustomObjectPermissionsGeneratedClient(callOperation),
    createZendeskFullApiCustomObjectRecordAttachmentsGeneratedClient(callOperation),
    createZendeskFullApiCustomObjectRecordsGeneratedClient(callOperation),
    createZendeskFullApiCustomObjectsGeneratedClient(callOperation),
    createZendeskFullApiCustomRolesGeneratedClient(callOperation),
    createZendeskFullApiCustomTicketStatusesGeneratedClient(callOperation),
    createZendeskFullApiDeletionSchedulesGeneratedClient(callOperation),
    createZendeskFullApiDynamicContentGeneratedClient(callOperation),
    createZendeskFullApiDynamicContentItemVariantsGeneratedClient(callOperation),
    createZendeskFullApiEmailNotificationsGeneratedClient(callOperation),
    createZendeskFullApiGlobalClientsGeneratedClient(callOperation),
    createZendeskFullApiGrantTypeTokensGeneratedClient(callOperation),
    createZendeskFullApiGroupMembershipsGeneratedClient(callOperation),
    createZendeskFullApiGroupSLAPoliciesGeneratedClient(callOperation),
    createZendeskFullApiGroupsGeneratedClient(callOperation),
    createZendeskFullApiIncrementalExportGeneratedClient(callOperation),
    createZendeskFullApiIncrementalSkillBasedRoutingGeneratedClient(callOperation),
    createZendeskFullApiITAMAssetFieldsGeneratedClient(callOperation),
    createZendeskFullApiITAMAssetLocationsGeneratedClient(callOperation),
    createZendeskFullApiITAMAssetStatusesGeneratedClient(callOperation),
    createZendeskFullApiITAMAssetTypesGeneratedClient(callOperation),
    createZendeskFullApiITAMAssetsGeneratedClient(callOperation),
    createZendeskFullApiJobStatusesGeneratedClient(callOperation),
    createZendeskFullApiLocalesGeneratedClient(callOperation),
    createZendeskFullApiLookupRelationshipsGeneratedClient(callOperation),
    createZendeskFullApiMacrosGeneratedClient(callOperation),
    createZendeskFullApiOAuthClientsGeneratedClient(callOperation),
    createZendeskFullApiOAuthTokensGeneratedClient(callOperation),
    createZendeskFullApiObjectTriggersGeneratedClient(callOperation),
    createZendeskFullApiOmnichannelRoutingQueuesGeneratedClient(callOperation),
    createZendeskFullApiOrganizationFieldsGeneratedClient(callOperation),
    createZendeskFullApiOrganizationMembershipsGeneratedClient(callOperation),
    createZendeskFullApiOrganizationSubscriptionsGeneratedClient(callOperation),
    createZendeskFullApiOrganizationsGeneratedClient(callOperation),
    createZendeskFullApiPushNotificationDevicesGeneratedClient(callOperation),
    createZendeskFullApiRemoteAuthenticationsGeneratedClient(callOperation),
    createZendeskFullApiRequestsGeneratedClient(callOperation),
    createZendeskFullApiResellerGeneratedClient(callOperation),
    createZendeskFullApiResourceCollectionsGeneratedClient(callOperation),
    createZendeskFullApiSatisfactionRatingsGeneratedClient(callOperation),
    createZendeskFullApiSatisfactionReasonsGeneratedClient(callOperation),
    createZendeskFullApiSearchGeneratedClient(callOperation),
    createZendeskFullApiSecuritySettingsGeneratedClient(callOperation),
    createZendeskFullApiSessionsGeneratedClient(callOperation),
    createZendeskFullApiSharingAgreementsGeneratedClient(callOperation),
    createZendeskFullApiSkillBasedRoutingGeneratedClient(callOperation),
    createZendeskFullApiSLAPoliciesGeneratedClient(callOperation),
    createZendeskFullApiSupportAddressesGeneratedClient(callOperation),
    createZendeskFullApiSuspendedTicketsGeneratedClient(callOperation),
    createZendeskFullApiTagsGeneratedClient(callOperation),
    createZendeskFullApiTargetFailuresGeneratedClient(callOperation),
    createZendeskFullApiTargetsGeneratedClient(callOperation),
    createZendeskFullApiTaskListTemplatesGeneratedClient(callOperation),
    createZendeskFullApiTaskListsGeneratedClient(callOperation),
    createZendeskFullApiTicketAuditsGeneratedClient(callOperation),
    createZendeskFullApiTicketCommentsGeneratedClient(callOperation),
    createZendeskFullApiTicketContentPinsGeneratedClient(callOperation),
    createZendeskFullApiTicketFieldsGeneratedClient(callOperation),
    createZendeskFullApiTicketFormStatusesGeneratedClient(callOperation),
    createZendeskFullApiTicketFormsGeneratedClient(callOperation),
    createZendeskFullApiTicketImportGeneratedClient(callOperation),
    createZendeskFullApiTicketMetricEventsGeneratedClient(callOperation),
    createZendeskFullApiTicketMetricsGeneratedClient(callOperation),
    createZendeskFullApiTicketSkipsGeneratedClient(callOperation),
    createZendeskFullApiTicketsGeneratedClient(callOperation),
    createZendeskFullApiTriggerCategoriesGeneratedClient(callOperation),
    createZendeskFullApiTriggersGeneratedClient(callOperation),
    createZendeskFullApiUserFieldsGeneratedClient(callOperation),
    createZendeskFullApiUserIdentitiesGeneratedClient(callOperation),
    createZendeskFullApiUserPasswordsGeneratedClient(callOperation),
    createZendeskFullApiUsersGeneratedClient(callOperation),
    createZendeskFullApiViewsGeneratedClient(callOperation),
    createZendeskFullApiWorkspacesGeneratedClient(callOperation),
    createZendeskFullApiXChannelGeneratedClient(callOperation),
  ) as ZendeskFullApiGeneratedClient;
}
