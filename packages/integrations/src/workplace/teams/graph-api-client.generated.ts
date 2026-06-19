// Generated from Microsoft Graph v1.0 OpenAPI (https://raw.githubusercontent.com/microsoftgraph/msgraph-metadata/master/openapi/v1.0/openapi.yaml).
// This is the Teams/workplace collaboration slice for @cognidesk/integrations, not the full Microsoft Graph API.
// Do not edit by hand; run scripts/generate-teams-graph-api.mjs after checking upstream docs.

import type { TeamsGraphOperationRequestInput } from "./index.js";
import type {
  TeamsGraphOperationQueryMap,
  TeamsGraphOperationQueryRequiredMap,
  TeamsGraphOperationRequestBodyMap,
  TeamsGraphOperationRequestBodyRequiredMap,
  TeamsGraphOperationResponseMap,
} from "./graph-api-schema-types.generated.js";
import {
  createTeamsGraphAppCatalogsTeamsAppGeneratedClient,
  TeamsGraphAppCatalogsTeamsAppGeneratedFunctionNames,
  type TeamsGraphAppCatalogsTeamsAppGeneratedClient,
  type TeamsGraphAppCatalogsTeamsAppOperationPathParamMap,
  type TeamsGraphAppCatalogsTeamsAppOperationRequestMap,
} from "./graph-api.generated/client/app-catalogs-teams-app-chunk.generated.js";
import {
  createTeamsGraphChatsChatGeneratedClient,
  TeamsGraphChatsChatGeneratedFunctionNames,
  type TeamsGraphChatsChatGeneratedClient,
  type TeamsGraphChatsChatOperationPathParamMap,
  type TeamsGraphChatsChatOperationRequestMap,
} from "./graph-api.generated/client/chats-chat-chunk.generated.js";
import {
  createTeamsGraphChatsChatActionsGeneratedClient,
  TeamsGraphChatsChatActionsGeneratedFunctionNames,
  type TeamsGraphChatsChatActionsGeneratedClient,
  type TeamsGraphChatsChatActionsOperationPathParamMap,
  type TeamsGraphChatsChatActionsOperationRequestMap,
} from "./graph-api.generated/client/chats-chat-actions-chunk.generated.js";
import {
  createTeamsGraphChatsChatFunctionsGeneratedClient,
  TeamsGraphChatsChatFunctionsGeneratedFunctionNames,
  type TeamsGraphChatsChatFunctionsGeneratedClient,
  type TeamsGraphChatsChatFunctionsOperationPathParamMap,
  type TeamsGraphChatsChatFunctionsOperationRequestMap,
} from "./graph-api.generated/client/chats-chat-functions-chunk.generated.js";
import {
  createTeamsGraphChatsChatMessageGeneratedClient,
  TeamsGraphChatsChatMessageGeneratedFunctionNames,
  type TeamsGraphChatsChatMessageGeneratedClient,
  type TeamsGraphChatsChatMessageOperationPathParamMap,
  type TeamsGraphChatsChatMessageOperationRequestMap,
} from "./graph-api.generated/client/chats-chat-message-chunk.generated.js";
import {
  createTeamsGraphChatsChatMessageInfoGeneratedClient,
  TeamsGraphChatsChatMessageInfoGeneratedFunctionNames,
  type TeamsGraphChatsChatMessageInfoGeneratedClient,
  type TeamsGraphChatsChatMessageInfoOperationPathParamMap,
  type TeamsGraphChatsChatMessageInfoOperationRequestMap,
} from "./graph-api.generated/client/chats-chat-message-info-chunk.generated.js";
import {
  createTeamsGraphChatsConversationMemberGeneratedClient,
  TeamsGraphChatsConversationMemberGeneratedFunctionNames,
  type TeamsGraphChatsConversationMemberGeneratedClient,
  type TeamsGraphChatsConversationMemberOperationPathParamMap,
  type TeamsGraphChatsConversationMemberOperationRequestMap,
} from "./graph-api.generated/client/chats-conversation-member-chunk.generated.js";
import {
  createTeamsGraphChatsPinnedChatMessageInfoGeneratedClient,
  TeamsGraphChatsPinnedChatMessageInfoGeneratedFunctionNames,
  type TeamsGraphChatsPinnedChatMessageInfoGeneratedClient,
  type TeamsGraphChatsPinnedChatMessageInfoOperationPathParamMap,
  type TeamsGraphChatsPinnedChatMessageInfoOperationRequestMap,
} from "./graph-api.generated/client/chats-pinned-chat-message-info-chunk.generated.js";
import {
  createTeamsGraphChatsResourceSpecificPermissionGrantGeneratedClient,
  TeamsGraphChatsResourceSpecificPermissionGrantGeneratedFunctionNames,
  type TeamsGraphChatsResourceSpecificPermissionGrantGeneratedClient,
  type TeamsGraphChatsResourceSpecificPermissionGrantOperationPathParamMap,
  type TeamsGraphChatsResourceSpecificPermissionGrantOperationRequestMap,
} from "./graph-api.generated/client/chats-resource-specific-permission-grant-chunk.generated.js";
import {
  createTeamsGraphChatsTargetedChatMessageGeneratedClient,
  TeamsGraphChatsTargetedChatMessageGeneratedFunctionNames,
  type TeamsGraphChatsTargetedChatMessageGeneratedClient,
  type TeamsGraphChatsTargetedChatMessageOperationPathParamMap,
  type TeamsGraphChatsTargetedChatMessageOperationRequestMap,
} from "./graph-api.generated/client/chats-targeted-chat-message-chunk.generated.js";
import {
  createTeamsGraphChatsTeamsAppInstallationGeneratedClient,
  TeamsGraphChatsTeamsAppInstallationGeneratedFunctionNames,
  type TeamsGraphChatsTeamsAppInstallationGeneratedClient,
  type TeamsGraphChatsTeamsAppInstallationOperationPathParamMap,
  type TeamsGraphChatsTeamsAppInstallationOperationRequestMap,
} from "./graph-api.generated/client/chats-teams-app-installation-chunk.generated.js";
import {
  createTeamsGraphChatsTeamsTabGeneratedClient,
  TeamsGraphChatsTeamsTabGeneratedFunctionNames,
  type TeamsGraphChatsTeamsTabGeneratedClient,
  type TeamsGraphChatsTeamsTabOperationPathParamMap,
  type TeamsGraphChatsTeamsTabOperationRequestMap,
} from "./graph-api.generated/client/chats-teams-tab-chunk.generated.js";
import {
  createTeamsGraphCommunicationsAdhocCallGeneratedClient,
  TeamsGraphCommunicationsAdhocCallGeneratedFunctionNames,
  type TeamsGraphCommunicationsAdhocCallGeneratedClient,
  type TeamsGraphCommunicationsAdhocCallOperationPathParamMap,
  type TeamsGraphCommunicationsAdhocCallOperationRequestMap,
} from "./graph-api.generated/client/communications-adhoc-call-chunk.generated.js";
import {
  createTeamsGraphCommunicationsCallGeneratedClient,
  TeamsGraphCommunicationsCallGeneratedFunctionNames,
  type TeamsGraphCommunicationsCallGeneratedClient,
  type TeamsGraphCommunicationsCallOperationPathParamMap,
  type TeamsGraphCommunicationsCallOperationRequestMap,
} from "./graph-api.generated/client/communications-call-chunk.generated.js";
import {
  createTeamsGraphCommunicationsCallRecordGeneratedClient,
  TeamsGraphCommunicationsCallRecordGeneratedFunctionNames,
  type TeamsGraphCommunicationsCallRecordGeneratedClient,
  type TeamsGraphCommunicationsCallRecordOperationPathParamMap,
  type TeamsGraphCommunicationsCallRecordOperationRequestMap,
} from "./graph-api.generated/client/communications-call-record-chunk.generated.js";
import {
  createTeamsGraphCommunicationsCloudCommunicationsGeneratedClient,
  TeamsGraphCommunicationsCloudCommunicationsGeneratedFunctionNames,
  type TeamsGraphCommunicationsCloudCommunicationsGeneratedClient,
  type TeamsGraphCommunicationsCloudCommunicationsOperationPathParamMap,
  type TeamsGraphCommunicationsCloudCommunicationsOperationRequestMap,
} from "./graph-api.generated/client/communications-cloud-communications-chunk.generated.js";
import {
  createTeamsGraphCommunicationsCloudCommunicationsActionsGeneratedClient,
  TeamsGraphCommunicationsCloudCommunicationsActionsGeneratedFunctionNames,
  type TeamsGraphCommunicationsCloudCommunicationsActionsGeneratedClient,
  type TeamsGraphCommunicationsCloudCommunicationsActionsOperationPathParamMap,
  type TeamsGraphCommunicationsCloudCommunicationsActionsOperationRequestMap,
} from "./graph-api.generated/client/communications-cloud-communications-actions-chunk.generated.js";
import {
  createTeamsGraphCommunicationsCloudCommunicationsFunctionsGeneratedClient,
  TeamsGraphCommunicationsCloudCommunicationsFunctionsGeneratedFunctionNames,
  type TeamsGraphCommunicationsCloudCommunicationsFunctionsGeneratedClient,
  type TeamsGraphCommunicationsCloudCommunicationsFunctionsOperationPathParamMap,
  type TeamsGraphCommunicationsCloudCommunicationsFunctionsOperationRequestMap,
} from "./graph-api.generated/client/communications-cloud-communications-functions-chunk.generated.js";
import {
  createTeamsGraphCommunicationsOnlineMeetingGeneratedClient,
  TeamsGraphCommunicationsOnlineMeetingGeneratedFunctionNames,
  type TeamsGraphCommunicationsOnlineMeetingGeneratedClient,
  type TeamsGraphCommunicationsOnlineMeetingOperationPathParamMap,
  type TeamsGraphCommunicationsOnlineMeetingOperationRequestMap,
} from "./graph-api.generated/client/communications-online-meeting-chunk.generated.js";
import {
  createTeamsGraphCommunicationsOnlineMeetingEngagementConversationGeneratedClient,
  TeamsGraphCommunicationsOnlineMeetingEngagementConversationGeneratedFunctionNames,
  type TeamsGraphCommunicationsOnlineMeetingEngagementConversationGeneratedClient,
  type TeamsGraphCommunicationsOnlineMeetingEngagementConversationOperationPathParamMap,
  type TeamsGraphCommunicationsOnlineMeetingEngagementConversationOperationRequestMap,
} from "./graph-api.generated/client/communications-online-meeting-engagement-conversation-chunk.generated.js";
import {
  createTeamsGraphCommunicationsPresenceGeneratedClient,
  TeamsGraphCommunicationsPresenceGeneratedFunctionNames,
  type TeamsGraphCommunicationsPresenceGeneratedClient,
  type TeamsGraphCommunicationsPresenceOperationPathParamMap,
  type TeamsGraphCommunicationsPresenceOperationRequestMap,
} from "./graph-api.generated/client/communications-presence-chunk.generated.js";
import {
  createTeamsGraphGroupsTeam01GeneratedClient,
  TeamsGraphGroupsTeam01GeneratedFunctionNames,
  type TeamsGraphGroupsTeam01GeneratedClient,
  type TeamsGraphGroupsTeam01OperationPathParamMap,
  type TeamsGraphGroupsTeam01OperationRequestMap,
} from "./graph-api.generated/client/groups-team-01-chunk.generated.js";
import {
  createTeamsGraphGroupsTeam02GeneratedClient,
  TeamsGraphGroupsTeam02GeneratedFunctionNames,
  type TeamsGraphGroupsTeam02GeneratedClient,
  type TeamsGraphGroupsTeam02OperationPathParamMap,
  type TeamsGraphGroupsTeam02OperationRequestMap,
} from "./graph-api.generated/client/groups-team-02-chunk.generated.js";
import {
  createTeamsGraphGroupsTeam03GeneratedClient,
  TeamsGraphGroupsTeam03GeneratedFunctionNames,
  type TeamsGraphGroupsTeam03GeneratedClient,
  type TeamsGraphGroupsTeam03OperationPathParamMap,
  type TeamsGraphGroupsTeam03OperationRequestMap,
} from "./graph-api.generated/client/groups-team-03-chunk.generated.js";
import {
  createTeamsGraphGroupsTeam04GeneratedClient,
  TeamsGraphGroupsTeam04GeneratedFunctionNames,
  type TeamsGraphGroupsTeam04GeneratedClient,
  type TeamsGraphGroupsTeam04OperationPathParamMap,
  type TeamsGraphGroupsTeam04OperationRequestMap,
} from "./graph-api.generated/client/groups-team-04-chunk.generated.js";
import {
  createTeamsGraphGroupsTeam05GeneratedClient,
  TeamsGraphGroupsTeam05GeneratedFunctionNames,
  type TeamsGraphGroupsTeam05GeneratedClient,
  type TeamsGraphGroupsTeam05OperationPathParamMap,
  type TeamsGraphGroupsTeam05OperationRequestMap,
} from "./graph-api.generated/client/groups-team-05-chunk.generated.js";
import {
  createTeamsGraphMeChat01GeneratedClient,
  TeamsGraphMeChat01GeneratedFunctionNames,
  type TeamsGraphMeChat01GeneratedClient,
  type TeamsGraphMeChat01OperationPathParamMap,
  type TeamsGraphMeChat01OperationRequestMap,
} from "./graph-api.generated/client/me-chat-01-chunk.generated.js";
import {
  createTeamsGraphMeChat02GeneratedClient,
  TeamsGraphMeChat02GeneratedFunctionNames,
  type TeamsGraphMeChat02GeneratedClient,
  type TeamsGraphMeChat02OperationPathParamMap,
  type TeamsGraphMeChat02OperationRequestMap,
} from "./graph-api.generated/client/me-chat-02-chunk.generated.js";
import {
  createTeamsGraphMeOnlineMeetingGeneratedClient,
  TeamsGraphMeOnlineMeetingGeneratedFunctionNames,
  type TeamsGraphMeOnlineMeetingGeneratedClient,
  type TeamsGraphMeOnlineMeetingOperationPathParamMap,
  type TeamsGraphMeOnlineMeetingOperationRequestMap,
} from "./graph-api.generated/client/me-online-meeting-chunk.generated.js";
import {
  createTeamsGraphMePresenceGeneratedClient,
  TeamsGraphMePresenceGeneratedFunctionNames,
  type TeamsGraphMePresenceGeneratedClient,
  type TeamsGraphMePresenceOperationPathParamMap,
  type TeamsGraphMePresenceOperationRequestMap,
} from "./graph-api.generated/client/me-presence-chunk.generated.js";
import {
  createTeamsGraphMeTeam01GeneratedClient,
  TeamsGraphMeTeam01GeneratedFunctionNames,
  type TeamsGraphMeTeam01GeneratedClient,
  type TeamsGraphMeTeam01OperationPathParamMap,
  type TeamsGraphMeTeam01OperationRequestMap,
} from "./graph-api.generated/client/me-team-01-chunk.generated.js";
import {
  createTeamsGraphMeTeam02GeneratedClient,
  TeamsGraphMeTeam02GeneratedFunctionNames,
  type TeamsGraphMeTeam02GeneratedClient,
  type TeamsGraphMeTeam02OperationPathParamMap,
  type TeamsGraphMeTeam02OperationRequestMap,
} from "./graph-api.generated/client/me-team-02-chunk.generated.js";
import {
  createTeamsGraphMeTeam03GeneratedClient,
  TeamsGraphMeTeam03GeneratedFunctionNames,
  type TeamsGraphMeTeam03GeneratedClient,
  type TeamsGraphMeTeam03OperationPathParamMap,
  type TeamsGraphMeTeam03OperationRequestMap,
} from "./graph-api.generated/client/me-team-03-chunk.generated.js";
import {
  createTeamsGraphMeTeam04GeneratedClient,
  TeamsGraphMeTeam04GeneratedFunctionNames,
  type TeamsGraphMeTeam04GeneratedClient,
  type TeamsGraphMeTeam04OperationPathParamMap,
  type TeamsGraphMeTeam04OperationRequestMap,
} from "./graph-api.generated/client/me-team-04-chunk.generated.js";
import {
  createTeamsGraphMeTeam05GeneratedClient,
  TeamsGraphMeTeam05GeneratedFunctionNames,
  type TeamsGraphMeTeam05GeneratedClient,
  type TeamsGraphMeTeam05OperationPathParamMap,
  type TeamsGraphMeTeam05OperationRequestMap,
} from "./graph-api.generated/client/me-team-05-chunk.generated.js";
import {
  createTeamsGraphMeUserGeneratedClient,
  TeamsGraphMeUserGeneratedFunctionNames,
  type TeamsGraphMeUserGeneratedClient,
  type TeamsGraphMeUserOperationPathParamMap,
  type TeamsGraphMeUserOperationRequestMap,
} from "./graph-api.generated/client/me-user-chunk.generated.js";
import {
  createTeamsGraphMeUserTeamworkGeneratedClient,
  TeamsGraphMeUserTeamworkGeneratedFunctionNames,
  type TeamsGraphMeUserTeamworkGeneratedClient,
  type TeamsGraphMeUserTeamworkOperationPathParamMap,
  type TeamsGraphMeUserTeamworkOperationRequestMap,
} from "./graph-api.generated/client/me-user-teamwork-chunk.generated.js";
import {
  createTeamsGraphSubscriptionsSubscriptionGeneratedClient,
  TeamsGraphSubscriptionsSubscriptionGeneratedFunctionNames,
  type TeamsGraphSubscriptionsSubscriptionGeneratedClient,
  type TeamsGraphSubscriptionsSubscriptionOperationPathParamMap,
  type TeamsGraphSubscriptionsSubscriptionOperationRequestMap,
} from "./graph-api.generated/client/subscriptions-subscription-chunk.generated.js";
import {
  createTeamsGraphSubscriptionsSubscriptionActionsGeneratedClient,
  TeamsGraphSubscriptionsSubscriptionActionsGeneratedFunctionNames,
  type TeamsGraphSubscriptionsSubscriptionActionsGeneratedClient,
  type TeamsGraphSubscriptionsSubscriptionActionsOperationPathParamMap,
  type TeamsGraphSubscriptionsSubscriptionActionsOperationRequestMap,
} from "./graph-api.generated/client/subscriptions-subscription-actions-chunk.generated.js";
import {
  createTeamsGraphTeamsChannel01GeneratedClient,
  TeamsGraphTeamsChannel01GeneratedFunctionNames,
  type TeamsGraphTeamsChannel01GeneratedClient,
  type TeamsGraphTeamsChannel01OperationPathParamMap,
  type TeamsGraphTeamsChannel01OperationRequestMap,
} from "./graph-api.generated/client/teams-channel-01-chunk.generated.js";
import {
  createTeamsGraphTeamsChannel02GeneratedClient,
  TeamsGraphTeamsChannel02GeneratedFunctionNames,
  type TeamsGraphTeamsChannel02GeneratedClient,
  type TeamsGraphTeamsChannel02OperationPathParamMap,
  type TeamsGraphTeamsChannel02OperationRequestMap,
} from "./graph-api.generated/client/teams-channel-02-chunk.generated.js";
import {
  createTeamsGraphTeamsChannel03GeneratedClient,
  TeamsGraphTeamsChannel03GeneratedFunctionNames,
  type TeamsGraphTeamsChannel03GeneratedClient,
  type TeamsGraphTeamsChannel03OperationPathParamMap,
  type TeamsGraphTeamsChannel03OperationRequestMap,
} from "./graph-api.generated/client/teams-channel-03-chunk.generated.js";
import {
  createTeamsGraphTeamsConversationMemberGeneratedClient,
  TeamsGraphTeamsConversationMemberGeneratedFunctionNames,
  type TeamsGraphTeamsConversationMemberGeneratedClient,
  type TeamsGraphTeamsConversationMemberOperationPathParamMap,
  type TeamsGraphTeamsConversationMemberOperationRequestMap,
} from "./graph-api.generated/client/teams-conversation-member-chunk.generated.js";
import {
  createTeamsGraphTeamsGroupGeneratedClient,
  TeamsGraphTeamsGroupGeneratedFunctionNames,
  type TeamsGraphTeamsGroupGeneratedClient,
  type TeamsGraphTeamsGroupOperationPathParamMap,
  type TeamsGraphTeamsGroupOperationRequestMap,
} from "./graph-api.generated/client/teams-group-chunk.generated.js";
import {
  createTeamsGraphTeamsProfilePhotoGeneratedClient,
  TeamsGraphTeamsProfilePhotoGeneratedFunctionNames,
  type TeamsGraphTeamsProfilePhotoGeneratedClient,
  type TeamsGraphTeamsProfilePhotoOperationPathParamMap,
  type TeamsGraphTeamsProfilePhotoOperationRequestMap,
} from "./graph-api.generated/client/teams-profile-photo-chunk.generated.js";
import {
  createTeamsGraphTeamsResourceSpecificPermissionGrantGeneratedClient,
  TeamsGraphTeamsResourceSpecificPermissionGrantGeneratedFunctionNames,
  type TeamsGraphTeamsResourceSpecificPermissionGrantGeneratedClient,
  type TeamsGraphTeamsResourceSpecificPermissionGrantOperationPathParamMap,
  type TeamsGraphTeamsResourceSpecificPermissionGrantOperationRequestMap,
} from "./graph-api.generated/client/teams-resource-specific-permission-grant-chunk.generated.js";
import {
  createTeamsGraphTeamsScheduleGeneratedClient,
  TeamsGraphTeamsScheduleGeneratedFunctionNames,
  type TeamsGraphTeamsScheduleGeneratedClient,
  type TeamsGraphTeamsScheduleOperationPathParamMap,
  type TeamsGraphTeamsScheduleOperationRequestMap,
} from "./graph-api.generated/client/teams-schedule-chunk.generated.js";
import {
  createTeamsGraphTeamsTeamGeneratedClient,
  TeamsGraphTeamsTeamGeneratedFunctionNames,
  type TeamsGraphTeamsTeamGeneratedClient,
  type TeamsGraphTeamsTeamOperationPathParamMap,
  type TeamsGraphTeamsTeamOperationRequestMap,
} from "./graph-api.generated/client/teams-team-chunk.generated.js";
import {
  createTeamsGraphTeamsTeamActionsGeneratedClient,
  TeamsGraphTeamsTeamActionsGeneratedFunctionNames,
  type TeamsGraphTeamsTeamActionsGeneratedClient,
  type TeamsGraphTeamsTeamActionsOperationPathParamMap,
  type TeamsGraphTeamsTeamActionsOperationRequestMap,
} from "./graph-api.generated/client/teams-team-actions-chunk.generated.js";
import {
  createTeamsGraphTeamsTeamFunctionsGeneratedClient,
  TeamsGraphTeamsTeamFunctionsGeneratedFunctionNames,
  type TeamsGraphTeamsTeamFunctionsGeneratedClient,
  type TeamsGraphTeamsTeamFunctionsOperationPathParamMap,
  type TeamsGraphTeamsTeamFunctionsOperationRequestMap,
} from "./graph-api.generated/client/teams-team-functions-chunk.generated.js";
import {
  createTeamsGraphTeamsTeamsAppInstallationGeneratedClient,
  TeamsGraphTeamsTeamsAppInstallationGeneratedFunctionNames,
  type TeamsGraphTeamsTeamsAppInstallationGeneratedClient,
  type TeamsGraphTeamsTeamsAppInstallationOperationPathParamMap,
  type TeamsGraphTeamsTeamsAppInstallationOperationRequestMap,
} from "./graph-api.generated/client/teams-teams-app-installation-chunk.generated.js";
import {
  createTeamsGraphTeamsTeamsAsyncOperationGeneratedClient,
  TeamsGraphTeamsTeamsAsyncOperationGeneratedFunctionNames,
  type TeamsGraphTeamsTeamsAsyncOperationGeneratedClient,
  type TeamsGraphTeamsTeamsAsyncOperationOperationPathParamMap,
  type TeamsGraphTeamsTeamsAsyncOperationOperationRequestMap,
} from "./graph-api.generated/client/teams-teams-async-operation-chunk.generated.js";
import {
  createTeamsGraphTeamsTeamsTemplateGeneratedClient,
  TeamsGraphTeamsTeamsTemplateGeneratedFunctionNames,
  type TeamsGraphTeamsTeamsTemplateGeneratedClient,
  type TeamsGraphTeamsTeamsTemplateOperationPathParamMap,
  type TeamsGraphTeamsTeamsTemplateOperationRequestMap,
} from "./graph-api.generated/client/teams-teams-template-chunk.generated.js";
import {
  createTeamsGraphTeamsTeamworkTagGeneratedClient,
  TeamsGraphTeamsTeamworkTagGeneratedFunctionNames,
  type TeamsGraphTeamsTeamworkTagGeneratedClient,
  type TeamsGraphTeamsTeamworkTagOperationPathParamMap,
  type TeamsGraphTeamsTeamworkTagOperationRequestMap,
} from "./graph-api.generated/client/teams-teamwork-tag-chunk.generated.js";
import {
  createTeamsGraphTeamsTemplatesTeamsTemplateGeneratedClient,
  TeamsGraphTeamsTemplatesTeamsTemplateGeneratedFunctionNames,
  type TeamsGraphTeamsTemplatesTeamsTemplateGeneratedClient,
  type TeamsGraphTeamsTemplatesTeamsTemplateOperationPathParamMap,
  type TeamsGraphTeamsTemplatesTeamsTemplateOperationRequestMap,
} from "./graph-api.generated/client/teams-templates-teams-template-chunk.generated.js";
import {
  createTeamsGraphTeamworkDeletedChatGeneratedClient,
  TeamsGraphTeamworkDeletedChatGeneratedFunctionNames,
  type TeamsGraphTeamworkDeletedChatGeneratedClient,
  type TeamsGraphTeamworkDeletedChatOperationPathParamMap,
  type TeamsGraphTeamworkDeletedChatOperationRequestMap,
} from "./graph-api.generated/client/teamwork-deleted-chat-chunk.generated.js";
import {
  createTeamsGraphTeamworkDeletedTeam01GeneratedClient,
  TeamsGraphTeamworkDeletedTeam01GeneratedFunctionNames,
  type TeamsGraphTeamworkDeletedTeam01GeneratedClient,
  type TeamsGraphTeamworkDeletedTeam01OperationPathParamMap,
  type TeamsGraphTeamworkDeletedTeam01OperationRequestMap,
} from "./graph-api.generated/client/teamwork-deleted-team-01-chunk.generated.js";
import {
  createTeamsGraphTeamworkDeletedTeam02GeneratedClient,
  TeamsGraphTeamworkDeletedTeam02GeneratedFunctionNames,
  type TeamsGraphTeamworkDeletedTeam02GeneratedClient,
  type TeamsGraphTeamworkDeletedTeam02OperationPathParamMap,
  type TeamsGraphTeamworkDeletedTeam02OperationRequestMap,
} from "./graph-api.generated/client/teamwork-deleted-team-02-chunk.generated.js";
import {
  createTeamsGraphTeamworkTeamsAppSettingsGeneratedClient,
  TeamsGraphTeamworkTeamsAppSettingsGeneratedFunctionNames,
  type TeamsGraphTeamworkTeamsAppSettingsGeneratedClient,
  type TeamsGraphTeamworkTeamsAppSettingsOperationPathParamMap,
  type TeamsGraphTeamworkTeamsAppSettingsOperationRequestMap,
} from "./graph-api.generated/client/teamwork-teams-app-settings-chunk.generated.js";
import {
  createTeamsGraphTeamworkTeamworkGeneratedClient,
  TeamsGraphTeamworkTeamworkGeneratedFunctionNames,
  type TeamsGraphTeamworkTeamworkGeneratedClient,
  type TeamsGraphTeamworkTeamworkOperationPathParamMap,
  type TeamsGraphTeamworkTeamworkOperationRequestMap,
} from "./graph-api.generated/client/teamwork-teamwork-chunk.generated.js";
import {
  createTeamsGraphTeamworkTeamworkActionsGeneratedClient,
  TeamsGraphTeamworkTeamworkActionsGeneratedFunctionNames,
  type TeamsGraphTeamworkTeamworkActionsGeneratedClient,
  type TeamsGraphTeamworkTeamworkActionsOperationPathParamMap,
  type TeamsGraphTeamworkTeamworkActionsOperationRequestMap,
} from "./graph-api.generated/client/teamwork-teamwork-actions-chunk.generated.js";
import {
  createTeamsGraphTeamworkWorkforceIntegrationGeneratedClient,
  TeamsGraphTeamworkWorkforceIntegrationGeneratedFunctionNames,
  type TeamsGraphTeamworkWorkforceIntegrationGeneratedClient,
  type TeamsGraphTeamworkWorkforceIntegrationOperationPathParamMap,
  type TeamsGraphTeamworkWorkforceIntegrationOperationRequestMap,
} from "./graph-api.generated/client/teamwork-workforce-integration-chunk.generated.js";
import {
  createTeamsGraphUsersChat01GeneratedClient,
  TeamsGraphUsersChat01GeneratedFunctionNames,
  type TeamsGraphUsersChat01GeneratedClient,
  type TeamsGraphUsersChat01OperationPathParamMap,
  type TeamsGraphUsersChat01OperationRequestMap,
} from "./graph-api.generated/client/users-chat-01-chunk.generated.js";
import {
  createTeamsGraphUsersChat02GeneratedClient,
  TeamsGraphUsersChat02GeneratedFunctionNames,
  type TeamsGraphUsersChat02GeneratedClient,
  type TeamsGraphUsersChat02OperationPathParamMap,
  type TeamsGraphUsersChat02OperationRequestMap,
} from "./graph-api.generated/client/users-chat-02-chunk.generated.js";
import {
  createTeamsGraphUsersOnlineMeetingGeneratedClient,
  TeamsGraphUsersOnlineMeetingGeneratedFunctionNames,
  type TeamsGraphUsersOnlineMeetingGeneratedClient,
  type TeamsGraphUsersOnlineMeetingOperationPathParamMap,
  type TeamsGraphUsersOnlineMeetingOperationRequestMap,
} from "./graph-api.generated/client/users-online-meeting-chunk.generated.js";
import {
  createTeamsGraphUsersPresenceGeneratedClient,
  TeamsGraphUsersPresenceGeneratedFunctionNames,
  type TeamsGraphUsersPresenceGeneratedClient,
  type TeamsGraphUsersPresenceOperationPathParamMap,
  type TeamsGraphUsersPresenceOperationRequestMap,
} from "./graph-api.generated/client/users-presence-chunk.generated.js";
import {
  createTeamsGraphUsersTeam01GeneratedClient,
  TeamsGraphUsersTeam01GeneratedFunctionNames,
  type TeamsGraphUsersTeam01GeneratedClient,
  type TeamsGraphUsersTeam01OperationPathParamMap,
  type TeamsGraphUsersTeam01OperationRequestMap,
} from "./graph-api.generated/client/users-team-01-chunk.generated.js";
import {
  createTeamsGraphUsersTeam02GeneratedClient,
  TeamsGraphUsersTeam02GeneratedFunctionNames,
  type TeamsGraphUsersTeam02GeneratedClient,
  type TeamsGraphUsersTeam02OperationPathParamMap,
  type TeamsGraphUsersTeam02OperationRequestMap,
} from "./graph-api.generated/client/users-team-02-chunk.generated.js";
import {
  createTeamsGraphUsersTeam03GeneratedClient,
  TeamsGraphUsersTeam03GeneratedFunctionNames,
  type TeamsGraphUsersTeam03GeneratedClient,
  type TeamsGraphUsersTeam03OperationPathParamMap,
  type TeamsGraphUsersTeam03OperationRequestMap,
} from "./graph-api.generated/client/users-team-03-chunk.generated.js";
import {
  createTeamsGraphUsersTeam04GeneratedClient,
  TeamsGraphUsersTeam04GeneratedFunctionNames,
  type TeamsGraphUsersTeam04GeneratedClient,
  type TeamsGraphUsersTeam04OperationPathParamMap,
  type TeamsGraphUsersTeam04OperationRequestMap,
} from "./graph-api.generated/client/users-team-04-chunk.generated.js";
import {
  createTeamsGraphUsersTeam05GeneratedClient,
  TeamsGraphUsersTeam05GeneratedFunctionNames,
  type TeamsGraphUsersTeam05GeneratedClient,
  type TeamsGraphUsersTeam05OperationPathParamMap,
  type TeamsGraphUsersTeam05OperationRequestMap,
} from "./graph-api.generated/client/users-team-05-chunk.generated.js";
import {
  createTeamsGraphUsersUserGeneratedClient,
  TeamsGraphUsersUserGeneratedFunctionNames,
  type TeamsGraphUsersUserGeneratedClient,
  type TeamsGraphUsersUserOperationPathParamMap,
  type TeamsGraphUsersUserOperationRequestMap,
} from "./graph-api.generated/client/users-user-chunk.generated.js";
import {
  createTeamsGraphUsersUserTeamworkGeneratedClient,
  TeamsGraphUsersUserTeamworkGeneratedFunctionNames,
  type TeamsGraphUsersUserTeamworkGeneratedClient,
  type TeamsGraphUsersUserTeamworkOperationPathParamMap,
  type TeamsGraphUsersUserTeamworkOperationRequestMap,
} from "./graph-api.generated/client/users-user-teamwork-chunk.generated.js";

export type TeamsGraphPathParamValue = string | number;
export interface TeamsGraphOperationPathParamMap extends TeamsGraphAppCatalogsTeamsAppOperationPathParamMap, TeamsGraphChatsChatOperationPathParamMap, TeamsGraphChatsChatActionsOperationPathParamMap, TeamsGraphChatsChatFunctionsOperationPathParamMap, TeamsGraphChatsChatMessageOperationPathParamMap, TeamsGraphChatsChatMessageInfoOperationPathParamMap, TeamsGraphChatsConversationMemberOperationPathParamMap, TeamsGraphChatsPinnedChatMessageInfoOperationPathParamMap, TeamsGraphChatsResourceSpecificPermissionGrantOperationPathParamMap, TeamsGraphChatsTargetedChatMessageOperationPathParamMap, TeamsGraphChatsTeamsAppInstallationOperationPathParamMap, TeamsGraphChatsTeamsTabOperationPathParamMap, TeamsGraphCommunicationsAdhocCallOperationPathParamMap, TeamsGraphCommunicationsCallOperationPathParamMap, TeamsGraphCommunicationsCallRecordOperationPathParamMap, TeamsGraphCommunicationsCloudCommunicationsOperationPathParamMap, TeamsGraphCommunicationsCloudCommunicationsActionsOperationPathParamMap, TeamsGraphCommunicationsCloudCommunicationsFunctionsOperationPathParamMap, TeamsGraphCommunicationsOnlineMeetingOperationPathParamMap, TeamsGraphCommunicationsOnlineMeetingEngagementConversationOperationPathParamMap, TeamsGraphCommunicationsPresenceOperationPathParamMap, TeamsGraphGroupsTeam01OperationPathParamMap, TeamsGraphGroupsTeam02OperationPathParamMap, TeamsGraphGroupsTeam03OperationPathParamMap, TeamsGraphGroupsTeam04OperationPathParamMap, TeamsGraphGroupsTeam05OperationPathParamMap, TeamsGraphMeChat01OperationPathParamMap, TeamsGraphMeChat02OperationPathParamMap, TeamsGraphMeOnlineMeetingOperationPathParamMap, TeamsGraphMePresenceOperationPathParamMap, TeamsGraphMeTeam01OperationPathParamMap, TeamsGraphMeTeam02OperationPathParamMap, TeamsGraphMeTeam03OperationPathParamMap, TeamsGraphMeTeam04OperationPathParamMap, TeamsGraphMeTeam05OperationPathParamMap, TeamsGraphMeUserOperationPathParamMap, TeamsGraphMeUserTeamworkOperationPathParamMap, TeamsGraphSubscriptionsSubscriptionOperationPathParamMap, TeamsGraphSubscriptionsSubscriptionActionsOperationPathParamMap, TeamsGraphTeamsChannel01OperationPathParamMap, TeamsGraphTeamsChannel02OperationPathParamMap, TeamsGraphTeamsChannel03OperationPathParamMap, TeamsGraphTeamsConversationMemberOperationPathParamMap, TeamsGraphTeamsGroupOperationPathParamMap, TeamsGraphTeamsProfilePhotoOperationPathParamMap, TeamsGraphTeamsResourceSpecificPermissionGrantOperationPathParamMap, TeamsGraphTeamsScheduleOperationPathParamMap, TeamsGraphTeamsTeamOperationPathParamMap, TeamsGraphTeamsTeamActionsOperationPathParamMap, TeamsGraphTeamsTeamFunctionsOperationPathParamMap, TeamsGraphTeamsTeamsAppInstallationOperationPathParamMap, TeamsGraphTeamsTeamsAsyncOperationOperationPathParamMap, TeamsGraphTeamsTeamsTemplateOperationPathParamMap, TeamsGraphTeamsTeamworkTagOperationPathParamMap, TeamsGraphTeamsTemplatesTeamsTemplateOperationPathParamMap, TeamsGraphTeamworkDeletedChatOperationPathParamMap, TeamsGraphTeamworkDeletedTeam01OperationPathParamMap, TeamsGraphTeamworkDeletedTeam02OperationPathParamMap, TeamsGraphTeamworkTeamsAppSettingsOperationPathParamMap, TeamsGraphTeamworkTeamworkOperationPathParamMap, TeamsGraphTeamworkTeamworkActionsOperationPathParamMap, TeamsGraphTeamworkWorkforceIntegrationOperationPathParamMap, TeamsGraphUsersChat01OperationPathParamMap, TeamsGraphUsersChat02OperationPathParamMap, TeamsGraphUsersOnlineMeetingOperationPathParamMap, TeamsGraphUsersPresenceOperationPathParamMap, TeamsGraphUsersTeam01OperationPathParamMap, TeamsGraphUsersTeam02OperationPathParamMap, TeamsGraphUsersTeam03OperationPathParamMap, TeamsGraphUsersTeam04OperationPathParamMap, TeamsGraphUsersTeam05OperationPathParamMap, TeamsGraphUsersUserOperationPathParamMap, TeamsGraphUsersUserTeamworkOperationPathParamMap {}

export type TeamsGraphOperationKey = keyof TeamsGraphOperationPathParamMap & string;

export type TeamsGraphOperationQueryInput<OperationKey extends TeamsGraphOperationKey> =
  TeamsGraphOperationQueryRequiredMap[OperationKey] extends true
    ? { query: TeamsGraphOperationQueryMap[OperationKey] }
    : { query?: TeamsGraphOperationQueryMap[OperationKey] };

export type TeamsGraphOperationBodyInput<OperationKey extends TeamsGraphOperationKey> =
  [TeamsGraphOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : TeamsGraphOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: TeamsGraphOperationRequestBodyMap[OperationKey] }
      : { body?: TeamsGraphOperationRequestBodyMap[OperationKey] };

export type TeamsGraphOperationInput<OperationKey extends TeamsGraphOperationKey> = Omit<TeamsGraphOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends TeamsGraphOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: TeamsGraphOperationPathParamMap[OperationKey] }
) & TeamsGraphOperationQueryInput<OperationKey> & TeamsGraphOperationBodyInput<OperationKey>;

export interface TeamsGraphOperationRequestMap extends TeamsGraphAppCatalogsTeamsAppOperationRequestMap, TeamsGraphChatsChatOperationRequestMap, TeamsGraphChatsChatActionsOperationRequestMap, TeamsGraphChatsChatFunctionsOperationRequestMap, TeamsGraphChatsChatMessageOperationRequestMap, TeamsGraphChatsChatMessageInfoOperationRequestMap, TeamsGraphChatsConversationMemberOperationRequestMap, TeamsGraphChatsPinnedChatMessageInfoOperationRequestMap, TeamsGraphChatsResourceSpecificPermissionGrantOperationRequestMap, TeamsGraphChatsTargetedChatMessageOperationRequestMap, TeamsGraphChatsTeamsAppInstallationOperationRequestMap, TeamsGraphChatsTeamsTabOperationRequestMap, TeamsGraphCommunicationsAdhocCallOperationRequestMap, TeamsGraphCommunicationsCallOperationRequestMap, TeamsGraphCommunicationsCallRecordOperationRequestMap, TeamsGraphCommunicationsCloudCommunicationsOperationRequestMap, TeamsGraphCommunicationsCloudCommunicationsActionsOperationRequestMap, TeamsGraphCommunicationsCloudCommunicationsFunctionsOperationRequestMap, TeamsGraphCommunicationsOnlineMeetingOperationRequestMap, TeamsGraphCommunicationsOnlineMeetingEngagementConversationOperationRequestMap, TeamsGraphCommunicationsPresenceOperationRequestMap, TeamsGraphGroupsTeam01OperationRequestMap, TeamsGraphGroupsTeam02OperationRequestMap, TeamsGraphGroupsTeam03OperationRequestMap, TeamsGraphGroupsTeam04OperationRequestMap, TeamsGraphGroupsTeam05OperationRequestMap, TeamsGraphMeChat01OperationRequestMap, TeamsGraphMeChat02OperationRequestMap, TeamsGraphMeOnlineMeetingOperationRequestMap, TeamsGraphMePresenceOperationRequestMap, TeamsGraphMeTeam01OperationRequestMap, TeamsGraphMeTeam02OperationRequestMap, TeamsGraphMeTeam03OperationRequestMap, TeamsGraphMeTeam04OperationRequestMap, TeamsGraphMeTeam05OperationRequestMap, TeamsGraphMeUserOperationRequestMap, TeamsGraphMeUserTeamworkOperationRequestMap, TeamsGraphSubscriptionsSubscriptionOperationRequestMap, TeamsGraphSubscriptionsSubscriptionActionsOperationRequestMap, TeamsGraphTeamsChannel01OperationRequestMap, TeamsGraphTeamsChannel02OperationRequestMap, TeamsGraphTeamsChannel03OperationRequestMap, TeamsGraphTeamsConversationMemberOperationRequestMap, TeamsGraphTeamsGroupOperationRequestMap, TeamsGraphTeamsProfilePhotoOperationRequestMap, TeamsGraphTeamsResourceSpecificPermissionGrantOperationRequestMap, TeamsGraphTeamsScheduleOperationRequestMap, TeamsGraphTeamsTeamOperationRequestMap, TeamsGraphTeamsTeamActionsOperationRequestMap, TeamsGraphTeamsTeamFunctionsOperationRequestMap, TeamsGraphTeamsTeamsAppInstallationOperationRequestMap, TeamsGraphTeamsTeamsAsyncOperationOperationRequestMap, TeamsGraphTeamsTeamsTemplateOperationRequestMap, TeamsGraphTeamsTeamworkTagOperationRequestMap, TeamsGraphTeamsTemplatesTeamsTemplateOperationRequestMap, TeamsGraphTeamworkDeletedChatOperationRequestMap, TeamsGraphTeamworkDeletedTeam01OperationRequestMap, TeamsGraphTeamworkDeletedTeam02OperationRequestMap, TeamsGraphTeamworkTeamsAppSettingsOperationRequestMap, TeamsGraphTeamworkTeamworkOperationRequestMap, TeamsGraphTeamworkTeamworkActionsOperationRequestMap, TeamsGraphTeamworkWorkforceIntegrationOperationRequestMap, TeamsGraphUsersChat01OperationRequestMap, TeamsGraphUsersChat02OperationRequestMap, TeamsGraphUsersOnlineMeetingOperationRequestMap, TeamsGraphUsersPresenceOperationRequestMap, TeamsGraphUsersTeam01OperationRequestMap, TeamsGraphUsersTeam02OperationRequestMap, TeamsGraphUsersTeam03OperationRequestMap, TeamsGraphUsersTeam04OperationRequestMap, TeamsGraphUsersTeam05OperationRequestMap, TeamsGraphUsersUserOperationRequestMap, TeamsGraphUsersUserTeamworkOperationRequestMap {}

export type TeamsGraphOperationArgs<OperationKey extends TeamsGraphOperationKey> = {} extends TeamsGraphOperationPathParamMap[OperationKey]
  ? [input?: TeamsGraphOperationRequestMap[OperationKey]]
  : [input: TeamsGraphOperationRequestMap[OperationKey]];

export type TeamsGraphGeneratedOperationCaller = <OperationKey extends TeamsGraphOperationKey>(
  operationKey: OperationKey,
  ...args: TeamsGraphOperationArgs<OperationKey>
) => Promise<TeamsGraphOperationResponseMap[OperationKey]>;

export interface TeamsGraphGeneratedClient extends TeamsGraphAppCatalogsTeamsAppGeneratedClient, TeamsGraphChatsChatGeneratedClient, TeamsGraphChatsChatActionsGeneratedClient, TeamsGraphChatsChatFunctionsGeneratedClient, TeamsGraphChatsChatMessageGeneratedClient, TeamsGraphChatsChatMessageInfoGeneratedClient, TeamsGraphChatsConversationMemberGeneratedClient, TeamsGraphChatsPinnedChatMessageInfoGeneratedClient, TeamsGraphChatsResourceSpecificPermissionGrantGeneratedClient, TeamsGraphChatsTargetedChatMessageGeneratedClient, TeamsGraphChatsTeamsAppInstallationGeneratedClient, TeamsGraphChatsTeamsTabGeneratedClient, TeamsGraphCommunicationsAdhocCallGeneratedClient, TeamsGraphCommunicationsCallGeneratedClient, TeamsGraphCommunicationsCallRecordGeneratedClient, TeamsGraphCommunicationsCloudCommunicationsGeneratedClient, TeamsGraphCommunicationsCloudCommunicationsActionsGeneratedClient, TeamsGraphCommunicationsCloudCommunicationsFunctionsGeneratedClient, TeamsGraphCommunicationsOnlineMeetingGeneratedClient, TeamsGraphCommunicationsOnlineMeetingEngagementConversationGeneratedClient, TeamsGraphCommunicationsPresenceGeneratedClient, TeamsGraphGroupsTeam01GeneratedClient, TeamsGraphGroupsTeam02GeneratedClient, TeamsGraphGroupsTeam03GeneratedClient, TeamsGraphGroupsTeam04GeneratedClient, TeamsGraphGroupsTeam05GeneratedClient, TeamsGraphMeChat01GeneratedClient, TeamsGraphMeChat02GeneratedClient, TeamsGraphMeOnlineMeetingGeneratedClient, TeamsGraphMePresenceGeneratedClient, TeamsGraphMeTeam01GeneratedClient, TeamsGraphMeTeam02GeneratedClient, TeamsGraphMeTeam03GeneratedClient, TeamsGraphMeTeam04GeneratedClient, TeamsGraphMeTeam05GeneratedClient, TeamsGraphMeUserGeneratedClient, TeamsGraphMeUserTeamworkGeneratedClient, TeamsGraphSubscriptionsSubscriptionGeneratedClient, TeamsGraphSubscriptionsSubscriptionActionsGeneratedClient, TeamsGraphTeamsChannel01GeneratedClient, TeamsGraphTeamsChannel02GeneratedClient, TeamsGraphTeamsChannel03GeneratedClient, TeamsGraphTeamsConversationMemberGeneratedClient, TeamsGraphTeamsGroupGeneratedClient, TeamsGraphTeamsProfilePhotoGeneratedClient, TeamsGraphTeamsResourceSpecificPermissionGrantGeneratedClient, TeamsGraphTeamsScheduleGeneratedClient, TeamsGraphTeamsTeamGeneratedClient, TeamsGraphTeamsTeamActionsGeneratedClient, TeamsGraphTeamsTeamFunctionsGeneratedClient, TeamsGraphTeamsTeamsAppInstallationGeneratedClient, TeamsGraphTeamsTeamsAsyncOperationGeneratedClient, TeamsGraphTeamsTeamsTemplateGeneratedClient, TeamsGraphTeamsTeamworkTagGeneratedClient, TeamsGraphTeamsTemplatesTeamsTemplateGeneratedClient, TeamsGraphTeamworkDeletedChatGeneratedClient, TeamsGraphTeamworkDeletedTeam01GeneratedClient, TeamsGraphTeamworkDeletedTeam02GeneratedClient, TeamsGraphTeamworkTeamsAppSettingsGeneratedClient, TeamsGraphTeamworkTeamworkGeneratedClient, TeamsGraphTeamworkTeamworkActionsGeneratedClient, TeamsGraphTeamworkWorkforceIntegrationGeneratedClient, TeamsGraphUsersChat01GeneratedClient, TeamsGraphUsersChat02GeneratedClient, TeamsGraphUsersOnlineMeetingGeneratedClient, TeamsGraphUsersPresenceGeneratedClient, TeamsGraphUsersTeam01GeneratedClient, TeamsGraphUsersTeam02GeneratedClient, TeamsGraphUsersTeam03GeneratedClient, TeamsGraphUsersTeam04GeneratedClient, TeamsGraphUsersTeam05GeneratedClient, TeamsGraphUsersUserGeneratedClient, TeamsGraphUsersUserTeamworkGeneratedClient {}

export const TEAMS_GRAPH_API_GENERATED_FUNCTION_COUNT = 2293 as const;
export const TEAMS_GRAPH_API_GENERATED_FUNCTION_NAMES = [
  ...TeamsGraphAppCatalogsTeamsAppGeneratedFunctionNames,
  ...TeamsGraphChatsChatGeneratedFunctionNames,
  ...TeamsGraphChatsChatActionsGeneratedFunctionNames,
  ...TeamsGraphChatsChatFunctionsGeneratedFunctionNames,
  ...TeamsGraphChatsChatMessageGeneratedFunctionNames,
  ...TeamsGraphChatsChatMessageInfoGeneratedFunctionNames,
  ...TeamsGraphChatsConversationMemberGeneratedFunctionNames,
  ...TeamsGraphChatsPinnedChatMessageInfoGeneratedFunctionNames,
  ...TeamsGraphChatsResourceSpecificPermissionGrantGeneratedFunctionNames,
  ...TeamsGraphChatsTargetedChatMessageGeneratedFunctionNames,
  ...TeamsGraphChatsTeamsAppInstallationGeneratedFunctionNames,
  ...TeamsGraphChatsTeamsTabGeneratedFunctionNames,
  ...TeamsGraphCommunicationsAdhocCallGeneratedFunctionNames,
  ...TeamsGraphCommunicationsCallGeneratedFunctionNames,
  ...TeamsGraphCommunicationsCallRecordGeneratedFunctionNames,
  ...TeamsGraphCommunicationsCloudCommunicationsGeneratedFunctionNames,
  ...TeamsGraphCommunicationsCloudCommunicationsActionsGeneratedFunctionNames,
  ...TeamsGraphCommunicationsCloudCommunicationsFunctionsGeneratedFunctionNames,
  ...TeamsGraphCommunicationsOnlineMeetingGeneratedFunctionNames,
  ...TeamsGraphCommunicationsOnlineMeetingEngagementConversationGeneratedFunctionNames,
  ...TeamsGraphCommunicationsPresenceGeneratedFunctionNames,
  ...TeamsGraphGroupsTeam01GeneratedFunctionNames,
  ...TeamsGraphGroupsTeam02GeneratedFunctionNames,
  ...TeamsGraphGroupsTeam03GeneratedFunctionNames,
  ...TeamsGraphGroupsTeam04GeneratedFunctionNames,
  ...TeamsGraphGroupsTeam05GeneratedFunctionNames,
  ...TeamsGraphMeChat01GeneratedFunctionNames,
  ...TeamsGraphMeChat02GeneratedFunctionNames,
  ...TeamsGraphMeOnlineMeetingGeneratedFunctionNames,
  ...TeamsGraphMePresenceGeneratedFunctionNames,
  ...TeamsGraphMeTeam01GeneratedFunctionNames,
  ...TeamsGraphMeTeam02GeneratedFunctionNames,
  ...TeamsGraphMeTeam03GeneratedFunctionNames,
  ...TeamsGraphMeTeam04GeneratedFunctionNames,
  ...TeamsGraphMeTeam05GeneratedFunctionNames,
  ...TeamsGraphMeUserGeneratedFunctionNames,
  ...TeamsGraphMeUserTeamworkGeneratedFunctionNames,
  ...TeamsGraphSubscriptionsSubscriptionGeneratedFunctionNames,
  ...TeamsGraphSubscriptionsSubscriptionActionsGeneratedFunctionNames,
  ...TeamsGraphTeamsChannel01GeneratedFunctionNames,
  ...TeamsGraphTeamsChannel02GeneratedFunctionNames,
  ...TeamsGraphTeamsChannel03GeneratedFunctionNames,
  ...TeamsGraphTeamsConversationMemberGeneratedFunctionNames,
  ...TeamsGraphTeamsGroupGeneratedFunctionNames,
  ...TeamsGraphTeamsProfilePhotoGeneratedFunctionNames,
  ...TeamsGraphTeamsResourceSpecificPermissionGrantGeneratedFunctionNames,
  ...TeamsGraphTeamsScheduleGeneratedFunctionNames,
  ...TeamsGraphTeamsTeamGeneratedFunctionNames,
  ...TeamsGraphTeamsTeamActionsGeneratedFunctionNames,
  ...TeamsGraphTeamsTeamFunctionsGeneratedFunctionNames,
  ...TeamsGraphTeamsTeamsAppInstallationGeneratedFunctionNames,
  ...TeamsGraphTeamsTeamsAsyncOperationGeneratedFunctionNames,
  ...TeamsGraphTeamsTeamsTemplateGeneratedFunctionNames,
  ...TeamsGraphTeamsTeamworkTagGeneratedFunctionNames,
  ...TeamsGraphTeamsTemplatesTeamsTemplateGeneratedFunctionNames,
  ...TeamsGraphTeamworkDeletedChatGeneratedFunctionNames,
  ...TeamsGraphTeamworkDeletedTeam01GeneratedFunctionNames,
  ...TeamsGraphTeamworkDeletedTeam02GeneratedFunctionNames,
  ...TeamsGraphTeamworkTeamsAppSettingsGeneratedFunctionNames,
  ...TeamsGraphTeamworkTeamworkGeneratedFunctionNames,
  ...TeamsGraphTeamworkTeamworkActionsGeneratedFunctionNames,
  ...TeamsGraphTeamworkWorkforceIntegrationGeneratedFunctionNames,
  ...TeamsGraphUsersChat01GeneratedFunctionNames,
  ...TeamsGraphUsersChat02GeneratedFunctionNames,
  ...TeamsGraphUsersOnlineMeetingGeneratedFunctionNames,
  ...TeamsGraphUsersPresenceGeneratedFunctionNames,
  ...TeamsGraphUsersTeam01GeneratedFunctionNames,
  ...TeamsGraphUsersTeam02GeneratedFunctionNames,
  ...TeamsGraphUsersTeam03GeneratedFunctionNames,
  ...TeamsGraphUsersTeam04GeneratedFunctionNames,
  ...TeamsGraphUsersTeam05GeneratedFunctionNames,
  ...TeamsGraphUsersUserGeneratedFunctionNames,
  ...TeamsGraphUsersUserTeamworkGeneratedFunctionNames,
] as const satisfies readonly (keyof TeamsGraphGeneratedClient)[];

export function createTeamsGraphGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphGeneratedClient {
  return Object.assign(
    {},
    createTeamsGraphAppCatalogsTeamsAppGeneratedClient(callOperation),
    createTeamsGraphChatsChatGeneratedClient(callOperation),
    createTeamsGraphChatsChatActionsGeneratedClient(callOperation),
    createTeamsGraphChatsChatFunctionsGeneratedClient(callOperation),
    createTeamsGraphChatsChatMessageGeneratedClient(callOperation),
    createTeamsGraphChatsChatMessageInfoGeneratedClient(callOperation),
    createTeamsGraphChatsConversationMemberGeneratedClient(callOperation),
    createTeamsGraphChatsPinnedChatMessageInfoGeneratedClient(callOperation),
    createTeamsGraphChatsResourceSpecificPermissionGrantGeneratedClient(callOperation),
    createTeamsGraphChatsTargetedChatMessageGeneratedClient(callOperation),
    createTeamsGraphChatsTeamsAppInstallationGeneratedClient(callOperation),
    createTeamsGraphChatsTeamsTabGeneratedClient(callOperation),
    createTeamsGraphCommunicationsAdhocCallGeneratedClient(callOperation),
    createTeamsGraphCommunicationsCallGeneratedClient(callOperation),
    createTeamsGraphCommunicationsCallRecordGeneratedClient(callOperation),
    createTeamsGraphCommunicationsCloudCommunicationsGeneratedClient(callOperation),
    createTeamsGraphCommunicationsCloudCommunicationsActionsGeneratedClient(callOperation),
    createTeamsGraphCommunicationsCloudCommunicationsFunctionsGeneratedClient(callOperation),
    createTeamsGraphCommunicationsOnlineMeetingGeneratedClient(callOperation),
    createTeamsGraphCommunicationsOnlineMeetingEngagementConversationGeneratedClient(callOperation),
    createTeamsGraphCommunicationsPresenceGeneratedClient(callOperation),
    createTeamsGraphGroupsTeam01GeneratedClient(callOperation),
    createTeamsGraphGroupsTeam02GeneratedClient(callOperation),
    createTeamsGraphGroupsTeam03GeneratedClient(callOperation),
    createTeamsGraphGroupsTeam04GeneratedClient(callOperation),
    createTeamsGraphGroupsTeam05GeneratedClient(callOperation),
    createTeamsGraphMeChat01GeneratedClient(callOperation),
    createTeamsGraphMeChat02GeneratedClient(callOperation),
    createTeamsGraphMeOnlineMeetingGeneratedClient(callOperation),
    createTeamsGraphMePresenceGeneratedClient(callOperation),
    createTeamsGraphMeTeam01GeneratedClient(callOperation),
    createTeamsGraphMeTeam02GeneratedClient(callOperation),
    createTeamsGraphMeTeam03GeneratedClient(callOperation),
    createTeamsGraphMeTeam04GeneratedClient(callOperation),
    createTeamsGraphMeTeam05GeneratedClient(callOperation),
    createTeamsGraphMeUserGeneratedClient(callOperation),
    createTeamsGraphMeUserTeamworkGeneratedClient(callOperation),
    createTeamsGraphSubscriptionsSubscriptionGeneratedClient(callOperation),
    createTeamsGraphSubscriptionsSubscriptionActionsGeneratedClient(callOperation),
    createTeamsGraphTeamsChannel01GeneratedClient(callOperation),
    createTeamsGraphTeamsChannel02GeneratedClient(callOperation),
    createTeamsGraphTeamsChannel03GeneratedClient(callOperation),
    createTeamsGraphTeamsConversationMemberGeneratedClient(callOperation),
    createTeamsGraphTeamsGroupGeneratedClient(callOperation),
    createTeamsGraphTeamsProfilePhotoGeneratedClient(callOperation),
    createTeamsGraphTeamsResourceSpecificPermissionGrantGeneratedClient(callOperation),
    createTeamsGraphTeamsScheduleGeneratedClient(callOperation),
    createTeamsGraphTeamsTeamGeneratedClient(callOperation),
    createTeamsGraphTeamsTeamActionsGeneratedClient(callOperation),
    createTeamsGraphTeamsTeamFunctionsGeneratedClient(callOperation),
    createTeamsGraphTeamsTeamsAppInstallationGeneratedClient(callOperation),
    createTeamsGraphTeamsTeamsAsyncOperationGeneratedClient(callOperation),
    createTeamsGraphTeamsTeamsTemplateGeneratedClient(callOperation),
    createTeamsGraphTeamsTeamworkTagGeneratedClient(callOperation),
    createTeamsGraphTeamsTemplatesTeamsTemplateGeneratedClient(callOperation),
    createTeamsGraphTeamworkDeletedChatGeneratedClient(callOperation),
    createTeamsGraphTeamworkDeletedTeam01GeneratedClient(callOperation),
    createTeamsGraphTeamworkDeletedTeam02GeneratedClient(callOperation),
    createTeamsGraphTeamworkTeamsAppSettingsGeneratedClient(callOperation),
    createTeamsGraphTeamworkTeamworkGeneratedClient(callOperation),
    createTeamsGraphTeamworkTeamworkActionsGeneratedClient(callOperation),
    createTeamsGraphTeamworkWorkforceIntegrationGeneratedClient(callOperation),
    createTeamsGraphUsersChat01GeneratedClient(callOperation),
    createTeamsGraphUsersChat02GeneratedClient(callOperation),
    createTeamsGraphUsersOnlineMeetingGeneratedClient(callOperation),
    createTeamsGraphUsersPresenceGeneratedClient(callOperation),
    createTeamsGraphUsersTeam01GeneratedClient(callOperation),
    createTeamsGraphUsersTeam02GeneratedClient(callOperation),
    createTeamsGraphUsersTeam03GeneratedClient(callOperation),
    createTeamsGraphUsersTeam04GeneratedClient(callOperation),
    createTeamsGraphUsersTeam05GeneratedClient(callOperation),
    createTeamsGraphUsersUserGeneratedClient(callOperation),
    createTeamsGraphUsersUserTeamworkGeneratedClient(callOperation),
  ) as TeamsGraphGeneratedClient;
}
