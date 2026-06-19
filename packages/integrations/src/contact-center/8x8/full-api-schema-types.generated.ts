// Generated provider schema DTOs for EightByEightContactCenterApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type EightByEightContactCenterApiSchemaJsonPrimitive = string | number | boolean | null;
export type EightByEightContactCenterApiSchemaJsonValue = EightByEightContactCenterApiSchemaJsonPrimitive | readonly EightByEightContactCenterApiSchemaJsonValue[] | { readonly [key: string]: EightByEightContactCenterApiSchemaJsonValue | undefined };

export type EightByEightContactCenterApiSchemaAuthResponse = {
  refresh_token_expires_in?: string;
  api_product_list?: ReadonlyArray<string>;
  organization_name?: string;
  token_type?: string;
  issued_at?: string;
  client_id?: string;
  access_token?: string;
  application_name?: string;
  scope?: string;
  expires_in?: string;
  refresh_count?: string;
  status?: string;
};

export type EightByEightContactCenterApiSchemaWebHooksV2ListResult = ({
  data?: ReadonlyArray<EightByEightContactCenterApiSchemaWebHookV2Result>;
} & EightByEightContactCenterApiSchemaPageResult);

export type EightByEightContactCenterApiSchemaWebHookV2CreateRequest = ({
  name: string;
  uri: string;
} & EightByEightContactCenterApiSchemaEventVersionIdentifierField);

export type EightByEightContactCenterApiSchemaWebHookV2Result = ({
  id?: string;
  name?: string;
  uri?: string;
} & EightByEightContactCenterApiSchemaEventVersionIdentifierField);

export type EightByEightContactCenterApiSchemaWebHookV2PutRequest = ({
  name: string;
  uri: string;
} & EightByEightContactCenterApiSchemaEventVersionIdentifierField);

export type EightByEightContactCenterApiSchemaInternalServerProblem = {
  message?: string;
  errors?: ReadonlyArray<string>;
  referenceId?: string;
};

export type EightByEightContactCenterApiSchemaWebHookV2VerifyRequest = {
  version: string;
  uri: string;
};

export type EightByEightContactCenterApiSchemaChannelsV2ListResult = ({
  data?: ReadonlyArray<EightByEightContactCenterApiSchemaChannelV2Result>;
} & EightByEightContactCenterApiSchemaPageResult);

export type EightByEightContactCenterApiSchemaChannelV2CreateRequest = ({
  name: string;
} & EightByEightContactCenterApiSchemaWebHookIdentifierField & EightByEightContactCenterApiSchemaChannelRoutingOptions);

export type EightByEightContactCenterApiSchemaChannelV2Result = ({
  id: string;
  name: string;
} & EightByEightContactCenterApiSchemaWebHookIdentifierField & EightByEightContactCenterApiSchemaChannelRoutingOptions);

export type EightByEightContactCenterApiSchemaChannelV2PutRequest = ({
  name: string;
} & EightByEightContactCenterApiSchemaWebHookIdentifierField & EightByEightContactCenterApiSchemaChannelRoutingOptions);

export type EightByEightContactCenterApiSchemaTransactionStatus = string;

export type EightByEightContactCenterApiSchemaConversationListResult = ({
  data?: ReadonlyArray<EightByEightContactCenterApiSchemaConversationResult>;
} & EightByEightContactCenterApiSchemaPageResult);

export type EightByEightContactCenterApiSchemaCreateTransactionRequest = (EightByEightContactCenterApiSchemaChannelIdentifierField & EightByEightContactCenterApiSchemaConversationCustomerData & {
  history?: {
  messages: ReadonlyArray<EightByEightContactCenterApiSchemaHistoryMessageV2>;
};
});

export type EightByEightContactCenterApiSchemaConversationIdentifierField = {
  conversationId?: string;
  timestamp?: number;
};

export type EightByEightContactCenterApiSchemaConversationResult = (EightByEightContactCenterApiSchemaChannelIdentifierField & EightByEightContactCenterApiSchemaConversationCustomerData & {
  id?: string;
  startTime?: string;
  interactions?: ReadonlyArray<EightByEightContactCenterApiSchemaInteractionInfo>;
});

export type EightByEightContactCenterApiSchemaConversationParticipants = {
  id?: string;
  type?: EightByEightContactCenterApiSchemaAuthorType;
  language?: EightByEightContactCenterApiSchemaLanguage;
};

export type EightByEightContactCenterApiSchemaUnauthorizedProblem = {
  fault?: {
  faultstring?: string;
  detail?: {
  errorcode?: string;
};
};
};

export type EightByEightContactCenterApiSchemaMessageListResult = {
  messages: ReadonlyArray<EightByEightContactCenterApiSchemaMessageResult2>;
};

export type EightByEightContactCenterApiSchemaSendConversationMessagePayload = {
  authorType?: EightByEightContactCenterApiSchemaExternalAuthorType2;
  text: string;
};

export type EightByEightContactCenterApiSchemaCampaignStatus = {
  status: "RUNNING" | "STOPPED" | "PAUSED" | "PURGED";
};

export type EightByEightContactCenterApiSchemaInternalServerError = {
  message: string;
};

export type EightByEightContactCenterApiSchemaCustomerItemList = ReadonlyArray<EightByEightContactCenterApiSchemaCustomerItem>;

export type EightByEightContactCenterApiSchemaCustomerItemResponseList = ReadonlyArray<EightByEightContactCenterApiSchemaCustomerItemResponse>;

export type EightByEightContactCenterApiSchemaAddRecordsRequest = {
  records: ReadonlyArray<EightByEightContactCenterApiSchemaAddRecordRequest>;
};

export type EightByEightContactCenterApiSchemaAddRecordsResponse = {
  records?: ReadonlyArray<EightByEightContactCenterApiSchemaRecord>;
};

export type EightByEightContactCenterApiSchemaModifyCampaignRequest = {
  action?: "BUILD" | "RESET" | "START" | "PAUSE" | "RESUME" | "RETRY" | "CANCEL" | "PURGE" | "BUILD" | "RESET" | "START" | "PAUSE" | "RESUME" | "RETRY" | "CANCEL" | "PURGE";
  enabled?: boolean;
};

export type EightByEightContactCenterApiSchemaStartCampaignRequest = (EightByEightContactCenterApiSchemaModifyCampaignRequest & {
  buildOnStart?: boolean;
});

export type EightByEightContactCenterApiSchemaCampaign = {
  id?: string;
  tenantId?: string;
  integrationType?: string;
  startTime?: string;
  endTime?: string;
  state?: "CREATED" | "BUILDING" | "READY" | "PENDING" | "STARTING" | "RUNNING" | "PAUSED" | "COMPLETE" | "BUILD_ERROR" | "RUN_ERROR" | "DELETED";
  displayStatus?: "NEW" | "BUILDING" | "BUILD_FAILED" | "READY_TO_RUN" | "SCHEDULED" | "RUNNING" | "PAUSED" | "PURGED" | "ERROR" | "ERROR_PURGED" | "COMPLETED" | "STOPPED" | "DISABLED";
  recordCount?: number;
  recordCounts?: ReadonlyArray<EightByEightContactCenterApiSchemaRecordCount>;
  lastBuildTime?: string;
  lastPurgedTime?: string;
  startedTime?: string;
  completedTime?: string;
};

export type EightByEightContactCenterApiSchemaSendMessageVO = {
  messageRaw?: string;
  room?: string;
};

export type EightByEightContactCenterApiSchemaSendMessageResponseVO = {
  parsed?: string;
};

export type EightByEightContactCenterApiSchemaMessageVO = {
  authorUser?: EightByEightContactCenterApiSchemaChatUserVO;
  id?: string;
  parsed?: string;
  timestamp?: number;
};

export type EightByEightContactCenterApiSchemaWebHooksV2ListResult2 = ({
  _embedded?: {
  webhooks?: ReadonlyArray<EightByEightContactCenterApiSchemaWebHookV2Result2>;
};
} & EightByEightContactCenterApiSchemaLinks & EightByEightContactCenterApiSchemaPageResult2);

export type EightByEightContactCenterApiSchemaWebHookV2CreateRequest2 = ({
  name: string;
  uri: string;
} & EightByEightContactCenterApiSchemaEventVersionIdentifierField2);

export type EightByEightContactCenterApiSchemaWebHookV2Result2 = ({
  id?: string;
  name?: string;
  uri?: string;
} & EightByEightContactCenterApiSchemaEventVersionIdentifierField2);

export type EightByEightContactCenterApiSchemaWebHookV2PutRequest2 = ({
  name: string;
  uri: string;
} & EightByEightContactCenterApiSchemaEventVersionIdentifierField2);

export type EightByEightContactCenterApiSchemaGenericExceptionPayload = {
  message?: string;
  errors?: ReadonlyArray<{
  code?: string;
  message?: string;
}>;
};

export type EightByEightContactCenterApiSchemaWebHookV2VerifyRequest2 = {
  version: string;
  uri: string;
};

export type EightByEightContactCenterApiSchemaChannelsV2ListResult2 = ({
  _embedded?: {
  channels?: ReadonlyArray<EightByEightContactCenterApiSchemaChannelV2Result2>;
};
} & EightByEightContactCenterApiSchemaLinks & EightByEightContactCenterApiSchemaPageResult2);

export type EightByEightContactCenterApiSchemaChannelV2CreateRequest2 = ({
  name: string;
} & EightByEightContactCenterApiSchemaChannelTypeField & EightByEightContactCenterApiSchemaWebHookIdentifierField2 & EightByEightContactCenterApiSchemaChannelRoutingOptions2);

export type EightByEightContactCenterApiSchemaChannelV2Result2 = ({
  id: string;
  name: string;
} & EightByEightContactCenterApiSchemaChannelTypeField & EightByEightContactCenterApiSchemaWebHookIdentifierField2 & EightByEightContactCenterApiSchemaChannelRoutingOptions2);

export type EightByEightContactCenterApiSchemaChannelV2PutRequest2 = ({
  name: string;
} & EightByEightContactCenterApiSchemaChannelTypeField & EightByEightContactCenterApiSchemaWebHookIdentifierField2 & EightByEightContactCenterApiSchemaChannelRoutingOptions2);

export type EightByEightContactCenterApiSchemaConversationListResult2 = ({
  _embedded?: {
  conversations?: ReadonlyArray<EightByEightContactCenterApiSchemaConversationResult2>;
};
} & EightByEightContactCenterApiSchemaLinks & EightByEightContactCenterApiSchemaPageResult2);

export type EightByEightContactCenterApiSchemaCreateTransactionRequest2 = (EightByEightContactCenterApiSchemaChannelIdentifierField2 & EightByEightContactCenterApiSchemaConversationUserData & EightByEightContactCenterApiSchemaAssignmentField & {
  history?: {
  messages: ReadonlyArray<(EightByEightContactCenterApiSchemaSendConversationMessagePayload2 | EightByEightContactCenterApiSchemaSendConversationMessageWithExternalProviderPayload)>;
};
});

export type EightByEightContactCenterApiSchemaConversationIdentifierField2 = {
  conversationId?: string;
  createdAt?: string;
};

export type EightByEightContactCenterApiSchemaUpdateTransactionRequest = (EightByEightContactCenterApiSchemaChannelIdentifierField2 & EightByEightContactCenterApiSchemaConversationUserData & EightByEightContactCenterApiSchemaAssignmentField);

export type EightByEightContactCenterApiSchemaConversationResult2 = (EightByEightContactCenterApiSchemaChannelIdentifierField2 & EightByEightContactCenterApiSchemaAssignmentField & EightByEightContactCenterApiSchemaConversationUserData & {
  id?: string;
  state?: "created" | "active" | "idle";
});

export type EightByEightContactCenterApiSchemaPatchTransactionRequest = (EightByEightContactCenterApiSchemaAssignmentField | EightByEightContactCenterApiSchemaConversationUserData);

export type EightByEightContactCenterApiSchemaInteractionsListResult = ({
  _embedded?: {
  interactions?: ReadonlyArray<EightByEightContactCenterApiSchemaInteractionInfo2>;
};
} & EightByEightContactCenterApiSchemaLinks & EightByEightContactCenterApiSchemaPageResult2);

export type EightByEightContactCenterApiSchemaPostAgentAssignmentRequest = ({
  id: string;
} & EightByEightContactCenterApiSchemaPostAgentAssignmentType & EightByEightContactCenterApiSchemaPostAgentAssignmentConfigurationRequest);

export type EightByEightContactCenterApiSchemaTypingRequest = ({
  authorType: "bot" | "user";
});

export type EightByEightContactCenterApiSchemaThinkingIndicatorRequest = {
  authorType?: "bot";
  maxThinkingTimeSeconds?: number;
};

export type EightByEightContactCenterApiSchemaReadReceiptRequest = {
  authorType: "bot" | "user";
  readAt: number;
};

export type EightByEightContactCenterApiSchemaConversationParticipants2 = ({
  _embedded?: {
  participants?: ReadonlyArray<EightByEightContactCenterApiSchemaConversationParticipant>;
};
} & EightByEightContactCenterApiSchemaLinks & EightByEightContactCenterApiSchemaPageResult2);

export type EightByEightContactCenterApiSchemaPatchUserParticipantRequest = {
  removed?: boolean;
};

export type EightByEightContactCenterApiSchemaUnauthorizedProblem2 = {
  message?: string;
  errors?: ReadonlyArray<{
  message?: string;
  code?: string;
}>;
  referenceId?: string;
};

export type EightByEightContactCenterApiSchemaMessageListResult2 = ({
  _embedded?: {
  messages?: ReadonlyArray<EightByEightContactCenterApiSchemaMessageResult>;
};
} & EightByEightContactCenterApiSchemaPageResult2);

export type EightByEightContactCenterApiSchemaSendConversationMessagePayload2 = ({
  authorType: EightByEightContactCenterApiSchemaExternalAuthorType;
  text?: string;
} & EightByEightContactCenterApiSchemaAttachments & EightByEightContactCenterApiSchemaCards);

export type EightByEightContactCenterApiSchemaSendConversationMessageWithExternalProviderPayload = ({
  externalProvider: EightByEightContactCenterApiSchemaExternalProviderPayload;
} & EightByEightContactCenterApiSchemaAttachments & EightByEightContactCenterApiSchemaCards);

export type EightByEightContactCenterApiSchemaMessageResult = ({
  id: string;
  text: string;
  createdAt?: string;
  author: EightByEightContactCenterApiSchemaConversationParticipant;
  externalProvider?: EightByEightContactCenterApiSchemaExternalProviderPayload;
} & EightByEightContactCenterApiSchemaAttachments & EightByEightContactCenterApiSchemaCards);

export type EightByEightContactCenterApiSchemaAttachmentsResult = ({
  _embedded?: {
  attachments?: ReadonlyArray<EightByEightContactCenterApiSchemaAttachmentResult>;
};
} & EightByEightContactCenterApiSchemaLinks & EightByEightContactCenterApiSchemaPageResult2);

export type EightByEightContactCenterApiSchemaExternalAuthorType = string;

export type EightByEightContactCenterApiSchemaAttachmentResult = {
  id: string;
  filename: string;
  sizeInBytes?: number;
  createdAt: string;
};

export type EightByEightContactCenterApiSchemaCardsListResult = ({
  _embedded?: {
  cards?: ReadonlyArray<EightByEightContactCenterApiSchemaAdaptiveCards>;
};
} & EightByEightContactCenterApiSchemaLinks & EightByEightContactCenterApiSchemaPageResult2);

export type EightByEightContactCenterApiSchemaAdaptiveCardActionSubmitPayload = {
  name?: string;
};

export type EightByEightContactCenterApiSchemaAdaptiveCardActionExecutePayload = {
  name?: string;
};

export type EightByEightContactCenterApiSchemaPhoneInteraction = {
  agentId: string;
  prefix: number;
  number: number;
  callerId: number;
  dialplanId?: number;
  queueId?: number;
  extTransactionData?: ReadonlyArray<EightByEightContactCenterApiSchemaUserParam>;
  ctlUserData?: ReadonlyArray<EightByEightContactCenterApiSchemaUserParam>;
  forceCall?: boolean;
};

export type EightByEightContactCenterApiSchemaCallResponse = {
  id?: string;
  reasons?: ReadonlyArray<(string | string)>;
  message?: string;
};

export type EightByEightContactCenterApiSchemaTransactionCodes = {
  selections?: ReadonlyArray<EightByEightContactCenterApiSchemaTransactionCodesList>;
};

export type EightByEightContactCenterApiSchemaTransactionCodesResponse = {
  reasons?: ReadonlyArray<string>;
  message?: string;
};

export type EightByEightContactCenterApiSchemaDeleteCallResponse = {
  reasons?: ReadonlyArray<(string | string)>;
  message?: string;
};

export type EightByEightContactCenterApiSchemaAgentsStatuses = {
  data?: ReadonlyArray<EightByEightContactCenterApiSchemaAgentStatus>;
  page?: EightByEightContactCenterApiSchemaPageResult3;
};

export type EightByEightContactCenterApiSchemaAgentsStatusRequest = {
  agents?: ReadonlyArray<EightByEightContactCenterApiSchemaAgentStatusRequestEx>;
};

export type EightByEightContactCenterApiSchemaProblem = {
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
  instance?: string;
};

export type EightByEightContactCenterApiSchemaAgentStatus = {
  "agent-id"?: string;
  name?: string;
  "agent-status"?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  "agent-sub-status"?: string;
  "status-code-list-id"?: number;
  "status-code-item-id"?: number;
  "status-code-item-short-code"?: string;
};

export type EightByEightContactCenterApiSchemaAgentStatusRequest = {
  "agent-status": 1 | 3 | 4 | 5;
  "status-code-list-id"?: number;
  "status-code-item-id"?: number;
  "status-code-item-short-code"?: string;
};

export type EightByEightContactCenterApiSchemaReportDefinitionRequest = {
  dateRange?: EightByEightContactCenterApiSchemaDateRange;
  intraDayTimeRange?: EightByEightContactCenterApiSchemaIntraDayTimeRange;
  granularity: string;
  groupBy?: EightByEightContactCenterApiSchemaGroupBy;
  metrics?: ReadonlyArray<string>;
  timezone?: string;
  includeSubTotal?: boolean;
  includeGrandTotal?: boolean;
  title: string;
  type: string;
};

export type EightByEightContactCenterApiSchemaResourceOfStatusResponse = {
  id?: number;
  reason?: string;
  status?: string;
};

export type EightByEightContactCenterApiSchemaReportDefinitionResponse = {
  id?: string;
  status?: string;
  dateRange?: EightByEightContactCenterApiSchemaDateRange;
  intraDayTimeRange?: EightByEightContactCenterApiSchemaIntraDayTimeRange;
  granularity?: string;
  groupBy?: EightByEightContactCenterApiSchemaGroupBy;
  metrics?: ReadonlyArray<string>;
  timezone?: string;
  includeSubTotal?: boolean;
  includeGrandTotal?: boolean;
  title?: string;
  type?: string;
};

export type EightByEightContactCenterApiSchemaResourceOfApiReportResponse = ReadonlyArray<EightByEightContactCenterApiSchemaRow>;

export type EightByEightContactCenterApiSchemaLinkItem = {
  link?: string;
  relation?: string;
};

export type EightByEightContactCenterApiSchemaApiReportTypeListResponse = ReadonlyArray<EightByEightContactCenterApiSchemaApiReportTypeResponse>;

export type EightByEightContactCenterApiSchemaApiReportTypeResponse = {
  groupBy?: ReadonlyArray<EightByEightContactCenterApiSchemaFilterResponse>;
  metrics?: ReadonlyArray<string>;
  type?: string;
};

export type EightByEightContactCenterApiSchemaDetailedReportDefinitionRequest = {
  dateRange?: EightByEightContactCenterApiSchemaDateRange;
  intraDayTimeRange?: EightByEightContactCenterApiSchemaIntraDayTimeRange;
  metrics?: ReadonlyArray<string>;
  timezone?: string;
  title: string;
  type: string;
  searchQuery?: ReadonlyArray<EightByEightContactCenterApiSchemaSearchQuery>;
  includeParticipants?: boolean;
  reportSettings?: EightByEightContactCenterApiSchemaReportSettings;
};

export type EightByEightContactCenterApiSchemaResourceOfDetailedApiReportResponse = ReadonlyArray<EightByEightContactCenterApiSchemaDetailedRow>;

export type EightByEightContactCenterApiSchemaSingleQueueResponse = {
  id?: string;
  name?: string;
  metrics?: ReadonlyArray<EightByEightContactCenterApiSchemaMetricItem>;
};

export type EightByEightContactCenterApiSchemaSingleGroupResponse = {
  id?: string;
  name?: string;
  metrics?: ReadonlyArray<EightByEightContactCenterApiSchemaMetricItem>;
};

export type EightByEightContactCenterApiSchemaAgentsInQueueGroupsResponse = {
  agents?: ReadonlyArray<EightByEightContactCenterApiSchemaAgentsInQueueResponse>;
  queues?: ReadonlyArray<EightByEightContactCenterApiSchemaQueueAgentsMetricsResponse>;
};

export type EightByEightContactCenterApiSchemaAgentsResponse = ReadonlyArray<EightByEightContactCenterApiSchemaSingleAgentWithMetricsResponse>;

export type EightByEightContactCenterApiSchemaInteractionType = "voiceInteraction" | "screenRecording" | "voiceScreen" | "other";

export type EightByEightContactCenterApiSchemaInteractionDetailsResponse = {
  pageNumber?: number;
  pageSize?: number;
  pageResultSize?: number;
  content?: ReadonlyArray<EightByEightContactCenterApiSchemaInteractionContent>;
  links?: ReadonlyArray<(EightByEightContactCenterApiSchemaNextUrlLink | EightByEightContactCenterApiSchemaPrevUrlLink)>;
};

export type EightByEightContactCenterApiSchemaTranscriptionValueResponse = {
  text?: string;
  confidence?: number;
  channel?: number;
  emotion?: string;
  gender?: string;
  timestampStart?: number;
  timestampEnd?: number;
};

export type EightByEightContactCenterApiSchemaTopic = {
  channel?: string;
  topic?: string;
  category?: string;
};

export type EightByEightContactCenterApiSchemaLabelValue = {
  text?: string;
  createdAt?: string;
  links?: ReadonlyArray<EightByEightContactCenterApiSchemaCreatorLink>;
};

export type EightByEightContactCenterApiSchemaNoteValue = {
  text?: string;
  interactionTimestamp?: number;
  createdAt?: string;
  "updatedAt `2018-03-02T06:14:53`"?: string;
  links?: ReadonlyArray<EightByEightContactCenterApiSchemaCreatorLink>;
};

export type EightByEightContactCenterApiSchemaUserDetailsResponse = {
  pageNumber?: number;
  pageSize?: number;
  pageResultSize?: number;
  content?: ReadonlyArray<EightByEightContactCenterApiSchemaUserContent>;
  links?: ReadonlyArray<(EightByEightContactCenterApiSchemaNextUrlLink | EightByEightContactCenterApiSchemaPrevUrlLink)>;
};

export type EightByEightContactCenterApiSchemaBasicUser = {
  userReference?: number;
  name?: string;
};

export type EightByEightContactCenterApiSchemaUserResponse = {
  userReference?: number;
  agentId?: string;
  name?: string;
  mainGroup?: string;
  phone?: string;
  email?: string;
  hireDate?: string;
  locked?: boolean;
  active?: boolean;
  links?: ReadonlyArray<EightByEightContactCenterApiSchemaUserInteractionsLink>;
};

export type EightByEightContactCenterApiSchemaEvaluationDetailsResponse = {
  pageNumber?: number;
  pageSize?: number;
  pageResultSize?: number;
  content?: ReadonlyArray<EightByEightContactCenterApiSchemaQualityEvaluationContent>;
  links?: ReadonlyArray<(EightByEightContactCenterApiSchemaNextUrlLink | EightByEightContactCenterApiSchemaPrevUrlLink)>;
};

export type EightByEightContactCenterApiSchemaEvaluationDetailResponse = {
  evaluationId?: number;
  sections?: ReadonlyArray<EightByEightContactCenterApiSchemaQualityEvaluationSections>;
};

export type EightByEightContactCenterApiSchemaSpeechCategoryResponse = {
  pageNumber?: number;
  pageSize?: number;
  pageResultSize?: number;
  content?: ReadonlyArray<EightByEightContactCenterApiSchemaSpeechCategoryContent>;
  links?: ReadonlyArray<(EightByEightContactCenterApiSchemaNextUrlLink | EightByEightContactCenterApiSchemaPrevUrlLink)>;
};

export type EightByEightContactCenterApiSchemaTopicListResponse = {
  pageNumber?: number;
  pageSize?: number;
  pageResultSize?: number;
  content?: ReadonlyArray<EightByEightContactCenterApiSchemaTopicDetailResponse>;
  links?: ReadonlyArray<(EightByEightContactCenterApiSchemaNextUrlLink | EightByEightContactCenterApiSchemaPrevUrlLink)>;
};

export type EightByEightContactCenterApiSchemaAuthResponse2 = {
  refresh_token_expires_in?: string;
  api_product_list?: ReadonlyArray<string>;
  organization_name?: string;
  token_type?: string;
  issued_at?: string;
  client_id?: string;
  access_token?: string;
  application_name?: string;
  scope?: string;
  expires_in?: string;
  refresh_count?: string;
  status?: string;
};

export type EightByEightContactCenterApiSchemaWebHooksV2ListResult3 = ({
  data?: ReadonlyArray<EightByEightContactCenterApiSchemaWebHookV2Result3>;
} & EightByEightContactCenterApiSchemaPageResult4);

export type EightByEightContactCenterApiSchemaWebHookV2CreateRequest3 = ({
  name: string;
  uri: string;
} & EightByEightContactCenterApiSchemaEventVersionIdentifierField3);

export type EightByEightContactCenterApiSchemaWebHookV2Result3 = ({
  id?: string;
  name?: string;
  uri?: string;
} & EightByEightContactCenterApiSchemaEventVersionIdentifierField3);

export type EightByEightContactCenterApiSchemaWebHookV2PutRequest3 = ({
  name: string;
  uri: string;
} & EightByEightContactCenterApiSchemaEventVersionIdentifierField3);

export type EightByEightContactCenterApiSchemaInternalServerProblem2 = {
  message?: string;
  errors?: ReadonlyArray<string>;
  referenceId?: string;
};

export type EightByEightContactCenterApiSchemaWebHookV2VerifyRequest3 = {
  version: string;
  uri: string;
};

export type EightByEightContactCenterApiSchemaChannelsV2ListResult3 = ({
  data?: ReadonlyArray<EightByEightContactCenterApiSchemaChannelV2Result3>;
} & EightByEightContactCenterApiSchemaPageResult4);

export type EightByEightContactCenterApiSchemaChannelV2CreateRequest3 = ({
  name: string;
} & EightByEightContactCenterApiSchemaWebHookIdentifierField3 & EightByEightContactCenterApiSchemaChannelRoutingOptions3);

export type EightByEightContactCenterApiSchemaChannelV2Result3 = ({
  id: string;
  name: string;
} & EightByEightContactCenterApiSchemaWebHookIdentifierField3 & EightByEightContactCenterApiSchemaChannelRoutingOptions3);

export type EightByEightContactCenterApiSchemaChannelV2PutRequest3 = ({
  name: string;
} & EightByEightContactCenterApiSchemaWebHookIdentifierField3 & EightByEightContactCenterApiSchemaChannelRoutingOptions3);

export type EightByEightContactCenterApiSchemaTransactionStatus2 = string;

export type EightByEightContactCenterApiSchemaConversationListResult3 = ({
  data?: ReadonlyArray<EightByEightContactCenterApiSchemaConversationResult3>;
} & EightByEightContactCenterApiSchemaPageResult4);

export type EightByEightContactCenterApiSchemaCreateTransactionRequest3 = (EightByEightContactCenterApiSchemaChannelIdentifierField3 & EightByEightContactCenterApiSchemaConversationCustomerData2 & {
  history?: {
  messages: ReadonlyArray<EightByEightContactCenterApiSchemaHistoryMessageV22>;
};
});

export type EightByEightContactCenterApiSchemaConversationIdentifierField3 = {
  conversationId?: string;
  timestamp?: number;
};

export type EightByEightContactCenterApiSchemaConversationResult3 = (EightByEightContactCenterApiSchemaChannelIdentifierField3 & EightByEightContactCenterApiSchemaConversationCustomerData2 & {
  id?: string;
  startTime?: string;
  interactions?: ReadonlyArray<EightByEightContactCenterApiSchemaInteractionInfo3>;
});

export type EightByEightContactCenterApiSchemaConversationParticipants3 = {
  id?: string;
  type?: EightByEightContactCenterApiSchemaAuthorType2;
  language?: EightByEightContactCenterApiSchemaLanguage2;
};

export type EightByEightContactCenterApiSchemaUnauthorizedProblem3 = {
  fault?: {
  faultstring?: string;
  detail?: {
  errorcode?: string;
};
};
};

export type EightByEightContactCenterApiSchemaMessageListResult3 = {
  messages: ReadonlyArray<EightByEightContactCenterApiSchemaMessageResult3>;
};

export type EightByEightContactCenterApiSchemaSendConversationMessagePayload3 = {
  authorType?: EightByEightContactCenterApiSchemaExternalAuthorType3;
  text: string;
};

export type EightByEightContactCenterApiSchemaPageResult = {
  page?: {
  pageSize?: number;
  pageIndex?: number;
  elementCount?: number;
  pageCount?: number;
};
};

export type EightByEightContactCenterApiSchemaEventVersionIdentifierField = {
  version?: EightByEightContactCenterApiSchemaEventVersion;
};

export type EightByEightContactCenterApiSchemaWebHookIdentifierField = {
  webHookId?: string;
};

export type EightByEightContactCenterApiSchemaChannelRoutingOptions = {
  routingOptions: {
  type: "queue";
  id: string;
};
};

export type EightByEightContactCenterApiSchemaChannelIdentifierField = {
  channelId?: string;
};

export type EightByEightContactCenterApiSchemaConversationCustomerData = {
  customer?: {
  name?: string;
  customerId?: string;
  email?: string;
  company?: string;
  caseId?: string;
  language?: EightByEightContactCenterApiSchemaLanguage;
  readonly [key: string]: string | EightByEightContactCenterApiSchemaLanguage | undefined;
};
};

export type EightByEightContactCenterApiSchemaHistoryMessageV2 = {
  text: string;
  type?: EightByEightContactCenterApiSchemaExternalAuthorType2;
};

export type EightByEightContactCenterApiSchemaInteractionInfo = {
  id?: string;
  startTime?: string;
  endTime?: string;
};

export type EightByEightContactCenterApiSchemaAuthorType = (EightByEightContactCenterApiSchemaExternalAuthorType2 & string);

export type EightByEightContactCenterApiSchemaLanguage = string;

export type EightByEightContactCenterApiSchemaMessageResult2 = {
  interactionId: string;
  originalText: string;
  translatedText?: string;
  authorType?: EightByEightContactCenterApiSchemaAuthorType;
  participantId?: string;
};

export type EightByEightContactCenterApiSchemaExternalAuthorType2 = string;

export type EightByEightContactCenterApiSchemaCustomerItem = {
  "customer-id": string;
  "schedule-date-time"?: string;
};

export type EightByEightContactCenterApiSchemaCustomerItemResponse = {
  "customer-id": string;
  "schedule-date-time"?: string;
  "http-status": string;
  message?: string;
};

export type EightByEightContactCenterApiSchemaAddRecordRequest = {
  crmRecordId: string;
  scheduleAt?: string;
  priority?: "HIGH" | "MEDIUM" | "LOW";
  rank?: number;
};

export type EightByEightContactCenterApiSchemaRecord = {
  id?: string;
  type?: "CRM_QUERY" | "DYNAMIC";
  crmRecordId?: string;
  priority?: "HIGH" | "MEDIUM" | "LOW";
  rank?: number;
  nextAttemptAfter?: string;
  retryCount?: number;
  state?: "PENDING" | "REQUESTED" | "QUEUED" | "CANCEL_REQUESTED" | "AGENT_ACCEPTED" | "COMPLETE" | "REJECTED" | "DELETED" | "ERROR";
  stateReason?: string;
  result?: "SUCCESS" | "NO_VALID_NUMBER" | "SCHEDULE_COMPLETE" | "INTERACTION_FAILED" | "MAX_ATTEMPTS_REACHED" | "INTERACTION_SKIPPED" | "CALLBACK_SCHEDULED";
};

export type EightByEightContactCenterApiSchemaRecordCount = {
  type?: "CRM_QUERY" | "DYNAMIC";
  state?: "PENDING" | "REQUESTED" | "QUEUED" | "CANCEL_REQUESTED" | "AGENT_ACCEPTED" | "COMPLETE" | "REJECTED" | "DELETED" | "ERROR";
  result?: "SUCCESS" | "NO_VALID_NUMBER" | "SCHEDULE_COMPLETE" | "INTERACTION_FAILED" | "MAX_ATTEMPTS_REACHED" | "INTERACTION_SKIPPED" | "CALLBACK_SCHEDULED";
  count?: number;
};

export type EightByEightContactCenterApiSchemaChatUserVO = {
  avatarUrl?: string;
  email?: string;
  id?: string;
  name?: string;
};

export type EightByEightContactCenterApiSchemaLinks = {
  _links?: {
  self?: {
  href?: string;
};
};
};

export type EightByEightContactCenterApiSchemaPageResult2 = {
  page?: {
  size?: number;
  number?: number;
  totalElements?: number;
  totalPages?: number;
};
};

export type EightByEightContactCenterApiSchemaEventVersionIdentifierField2 = {
  version?: EightByEightContactCenterApiSchemaEventVersion2;
};

export type EightByEightContactCenterApiSchemaChannelTypeField = {
  type?: string;
};

export type EightByEightContactCenterApiSchemaWebHookIdentifierField2 = {
  webHookId?: string;
};

export type EightByEightContactCenterApiSchemaChannelRoutingOptions2 = {
  routingOptions: {
  type: "queue";
  id: string;
};
};

export type EightByEightContactCenterApiSchemaChannelIdentifierField2 = {
  channelId?: string;
};

export type EightByEightContactCenterApiSchemaConversationUserData = {
  user?: {
  name?: string;
  userId?: string;
  email?: string;
  phone?: string;
  company?: string;
  caseId?: string;
  language?: EightByEightContactCenterApiSchemaLanguage3;
  additionalProperties?: ReadonlyArray<EightByEightContactCenterApiSchemaAdditionalPropertiesPayload>;
};
};

export type EightByEightContactCenterApiSchemaAssignmentField = {
  assignment?: {
  type?: string;
  id?: string;
};
};

export type EightByEightContactCenterApiSchemaInteractionInfo2 = {
  id?: string;
  startTime?: string;
  endTime?: string;
};

export type EightByEightContactCenterApiSchemaPostAgentAssignmentType = {
  type?: string;
};

export type EightByEightContactCenterApiSchemaPostAgentAssignmentConfigurationRequest = {
  configuration?: {
  notifyChannelWebhookIfExists?: string;
  maxTotalMinutes?: number;
  userTimeoutInMinutes?: number;
};
};

export type EightByEightContactCenterApiSchemaConversationParticipant = {
  id?: string;
  removed?: boolean;
  type?: EightByEightContactCenterApiSchemaAuthorType3;
  language?: EightByEightContactCenterApiSchemaLanguage3;
};

export type EightByEightContactCenterApiSchemaAttachments = {
  attachments?: ReadonlyArray<{
  id?: string;
}>;
};

export type EightByEightContactCenterApiSchemaCards = {
  cards?: ReadonlyArray<EightByEightContactCenterApiSchemaAdaptiveCards>;
};

export type EightByEightContactCenterApiSchemaExternalProviderPayload = {
  name: "X";
  externalMessageId: string;
};

export type EightByEightContactCenterApiSchemaAdaptiveCards = {
  id?: string;
  contentType?: EightByEightContactCenterApiSchemaContentType;
  content?: {};
  actionSubmitted?: boolean;
  actionExecuted?: boolean;
};

export type EightByEightContactCenterApiSchemaUserParam = {
  name?: string;
  value?: string;
};

export type EightByEightContactCenterApiSchemaTransactionCodesList = {
  id?: number;
  codes?: ReadonlyArray<EightByEightContactCenterApiSchemaTransactionCodesItem>;
};

export type EightByEightContactCenterApiSchemaPageResult3 = {
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
  pageIndex?: number;
};

export type EightByEightContactCenterApiSchemaAgentStatusRequestEx = (EightByEightContactCenterApiSchemaAgentStatusRequest & {
  "agent-id": string;
});

export type EightByEightContactCenterApiSchemaDateRange = {
  start: string;
  end: string;
};

export type EightByEightContactCenterApiSchemaIntraDayTimeRange = {
  start?: string;
  end?: string;
};

export type EightByEightContactCenterApiSchemaGroupBy = {
  filters?: ReadonlyArray<EightByEightContactCenterApiSchemaFilter>;
  name: string;
};

export type EightByEightContactCenterApiSchemaRow = {
  totals?: EightByEightContactCenterApiSchemaTotalItem;
  items?: ReadonlyArray<EightByEightContactCenterApiSchemaRowItem>;
};

export type EightByEightContactCenterApiSchemaFilterResponse = {
  filters?: ReadonlyArray<string>;
  name?: string;
};

export type EightByEightContactCenterApiSchemaSearchQuery = {
  field?: string;
  operator?: string;
  value?: string;
};

export type EightByEightContactCenterApiSchemaReportSettings = {
  showOngoingInteractions?: boolean;
  showInteractionsStateInTime?: boolean;
};

export type EightByEightContactCenterApiSchemaDetailedRow = {
  items?: ReadonlyArray<EightByEightContactCenterApiSchemaDetailedRowItem>;
};

export type EightByEightContactCenterApiSchemaMetricItem = {
  key?: string;
  value?: number;
};

export type EightByEightContactCenterApiSchemaAgentsInQueueResponse = {
  id?: string;
  name?: string;
  metrics?: {
  readonly [key: string]: string | undefined;
};
};

export type EightByEightContactCenterApiSchemaQueueAgentsMetricsResponse = {
  queueId?: string;
  assignedAgents?: ReadonlyArray<string>;
  agentMetrics?: ReadonlyArray<EightByEightContactCenterApiSchemaAgentsInQueueResponse>;
};

export type EightByEightContactCenterApiSchemaSingleAgentWithMetricsResponse = {
  id?: string;
  name?: string;
  groupId?: string;
  groupName?: string;
  metrics?: ReadonlyArray<EightByEightContactCenterApiSchemaMetricItem>;
};

export type EightByEightContactCenterApiSchemaInteractionContent = {
  createdAt?: string;
  interactionGuid?: string;
  agent?: EightByEightContactCenterApiSchemaInteractionAgent;
  telephony?: EightByEightContactCenterApiSchemaTelephonyDetails;
  media?: EightByEightContactCenterApiSchemaMedia;
  customFields?: EightByEightContactCenterApiSchemaCustomFieldMap;
  speechAnalysis?: EightByEightContactCenterApiSchemaSpeechDetails;
  links?: ReadonlyArray<EightByEightContactCenterApiSchemaNotesLink>;
};

export type EightByEightContactCenterApiSchemaNextUrlLink = {
  rel?: string;
  href?: string;
  type?: string;
};

export type EightByEightContactCenterApiSchemaPrevUrlLink = {
  rel?: string;
  href?: string;
  type?: string;
};

export type EightByEightContactCenterApiSchemaCreatorLink = {
  rel?: string;
  href?: string;
  type?: string;
};

export type EightByEightContactCenterApiSchemaUserContent = {
  userReference?: number;
  agentId?: string;
  name?: string;
  mainGroup?: string;
  phone?: string;
  email?: string;
  hireDate?: string;
  locked?: boolean;
  active?: boolean;
  links?: ReadonlyArray<EightByEightContactCenterApiSchemaUserInteractionsLink>;
};

export type EightByEightContactCenterApiSchemaUserInteractionsLink = {
  rel?: string;
  href?: string;
  type?: string;
};

export type EightByEightContactCenterApiSchemaQualityEvaluationContent = {
  evaluationId?: number;
  createdAt?: string;
  updatedAt?: string;
  interactionGuid?: string;
  templateName?: string;
  calibrated?: boolean;
  agent?: EightByEightContactCenterApiSchemaInteractionAgent;
  evaluator?: EightByEightContactCenterApiSchemaBasicUser;
  updater?: EightByEightContactCenterApiSchemaBasicUser;
  result?: EightByEightContactCenterApiSchemaQualityEvaluationResult;
  links?: ReadonlyArray<EightByEightContactCenterApiSchemaQualityEvaluationDetailsLink>;
};

export type EightByEightContactCenterApiSchemaQualityEvaluationSections = {
  sectionName?: string;
  questions?: ReadonlyArray<EightByEightContactCenterApiSchemaQualityEvaluationQuestions>;
};

export type EightByEightContactCenterApiSchemaSpeechCategoryContent = {
  categoryId?: number;
  name?: string;
  links?: ReadonlyArray<EightByEightContactCenterApiSchemaTopicsLink>;
};

export type EightByEightContactCenterApiSchemaTopicDetailResponse = {
  topicId?: number;
  categoryId?: number;
  name?: string;
  channel?: string;
  phrases?: ReadonlyArray<EightByEightContactCenterApiSchemaPhrases>;
};

export type EightByEightContactCenterApiSchemaPageResult4 = {
  page?: {
  pageSize?: number;
  pageIndex?: number;
  elementCount?: number;
  pageCount?: number;
};
};

export type EightByEightContactCenterApiSchemaEventVersionIdentifierField3 = {
  version?: EightByEightContactCenterApiSchemaEventVersion3;
};

export type EightByEightContactCenterApiSchemaWebHookIdentifierField3 = {
  webHookId?: string;
};

export type EightByEightContactCenterApiSchemaChannelRoutingOptions3 = {
  routingOptions: {
  type: "queue";
  id: string;
};
};

export type EightByEightContactCenterApiSchemaChannelIdentifierField3 = {
  channelId?: string;
};

export type EightByEightContactCenterApiSchemaConversationCustomerData2 = {
  customer?: {
  name?: string;
  customerId?: string;
  email?: string;
  company?: string;
  caseId?: string;
  language?: EightByEightContactCenterApiSchemaLanguage2;
  readonly [key: string]: string | EightByEightContactCenterApiSchemaLanguage2 | undefined;
};
};

export type EightByEightContactCenterApiSchemaHistoryMessageV22 = {
  text: string;
  type?: EightByEightContactCenterApiSchemaExternalAuthorType3;
};

export type EightByEightContactCenterApiSchemaInteractionInfo3 = {
  id?: string;
  startTime?: string;
  endTime?: string;
};

export type EightByEightContactCenterApiSchemaAuthorType2 = (EightByEightContactCenterApiSchemaExternalAuthorType3 & string);

export type EightByEightContactCenterApiSchemaLanguage2 = string;

export type EightByEightContactCenterApiSchemaMessageResult3 = {
  interactionId: string;
  originalText: string;
  translatedText?: string;
  authorType?: EightByEightContactCenterApiSchemaAuthorType2;
  participantId?: string;
};

export type EightByEightContactCenterApiSchemaExternalAuthorType3 = string;

export type EightByEightContactCenterApiSchemaEventVersion = "v1.0" | "v2.0";

export type EightByEightContactCenterApiSchemaEventVersion2 = "Chat Gateway v1.0";

export type EightByEightContactCenterApiSchemaLanguage3 = string;

export type EightByEightContactCenterApiSchemaAdditionalPropertiesPayload = {
  key?: string;
  value?: string;
};

export type EightByEightContactCenterApiSchemaAuthorType3 = (EightByEightContactCenterApiSchemaExternalAuthorType & string);

export type EightByEightContactCenterApiSchemaContentType = "application/vnd.microsoft.card.adaptive" | "application/8x8.quick.replies" | "Interactive" | "Location" | "Template" | "Suggestions" | "Buttons" | "Carousel";

export type EightByEightContactCenterApiSchemaTransactionCodesItem = {
  id?: number;
};

export type EightByEightContactCenterApiSchemaFilter = {
  name?: string;
  values?: ReadonlyArray<string>;
};

export type EightByEightContactCenterApiSchemaTotalItem = {
  type?: string;
  startIndex?: number;
  endIndex?: number;
};

export type EightByEightContactCenterApiSchemaRowItem = {
  key?: string;
  label?: string;
  value?: string;
};

export type EightByEightContactCenterApiSchemaDetailedRowItem = {
  key?: string;
  label?: string;
  value?: {};
};

export type EightByEightContactCenterApiSchemaInteractionAgent = {
  userReference?: number;
  agentId?: string;
  name?: string;
  mainGroup?: string;
  supervisorName?: string;
  trainerName?: string;
  site?: string;
};

export type EightByEightContactCenterApiSchemaTelephonyDetails = {
  direction?: string;
  callerPhoneNumber?: string;
  callerName?: string;
  dialedPhoneNumber?: string;
  vccTransactionId?: string;
  transferredFrom?: string;
  transferredTo?: string;
  holdDuration?: number;
  status?: string;
};

export type EightByEightContactCenterApiSchemaMedia = {
  interactionType?: string;
  interactionDuration?: number;
  videoSize?: number;
  audioSize?: number;
};

export type EightByEightContactCenterApiSchemaCustomFieldMap = {
  customField?: EightByEightContactCenterApiSchemaCustomFields;
  customField1?: EightByEightContactCenterApiSchemaCustomFields;
  customField2?: EightByEightContactCenterApiSchemaCustomFields;
  customField3?: EightByEightContactCenterApiSchemaCustomFields;
  customField4?: EightByEightContactCenterApiSchemaCustomFields;
  customField5?: EightByEightContactCenterApiSchemaCustomFields;
  customField6?: EightByEightContactCenterApiSchemaCustomFields;
  customField7?: EightByEightContactCenterApiSchemaCustomFields;
  customField8?: EightByEightContactCenterApiSchemaCustomFields;
  customField9?: EightByEightContactCenterApiSchemaCustomFields;
  customField10?: EightByEightContactCenterApiSchemaCustomFields;
  customField11?: EightByEightContactCenterApiSchemaCustomFields;
  customField12?: EightByEightContactCenterApiSchemaCustomFields;
  customField13?: EightByEightContactCenterApiSchemaCustomFields;
  customField14?: EightByEightContactCenterApiSchemaCustomFields;
  customField15?: EightByEightContactCenterApiSchemaCustomFields;
  customField16?: EightByEightContactCenterApiSchemaCustomFields;
  customField17?: EightByEightContactCenterApiSchemaCustomFields;
  customField18?: EightByEightContactCenterApiSchemaCustomFields;
  customField19?: EightByEightContactCenterApiSchemaCustomFields;
  customField20?: EightByEightContactCenterApiSchemaCustomFields;
  customField21?: EightByEightContactCenterApiSchemaCustomFields;
  customField22?: EightByEightContactCenterApiSchemaCustomFields;
  customField23?: EightByEightContactCenterApiSchemaCustomFields;
  customField24?: EightByEightContactCenterApiSchemaCustomFields;
  customField25?: EightByEightContactCenterApiSchemaCustomFields;
};

export type EightByEightContactCenterApiSchemaSpeechDetails = {
  overallEmotion?: string;
  overtalk?: number;
  clarity?: number;
};

export type EightByEightContactCenterApiSchemaNotesLink = {
  rel?: string;
  href?: string;
  type?: string;
};

export type EightByEightContactCenterApiSchemaQualityEvaluationResult = {
  score?: number;
  goal?: number;
  hasPassed?: boolean;
  timeSpent?: number;
};

export type EightByEightContactCenterApiSchemaQualityEvaluationDetailsLink = {
  rel?: string;
  href?: string;
  type?: string;
};

export type EightByEightContactCenterApiSchemaQualityEvaluationQuestions = {
  question?: string;
  answer?: ReadonlyArray<string>;
};

export type EightByEightContactCenterApiSchemaTopicsLink = {
  rel?: string;
  href?: string;
  type?: string;
};

export type EightByEightContactCenterApiSchemaPhrases = {
  text?: string;
};

export type EightByEightContactCenterApiSchemaEventVersion3 = "v1.0" | "v2.0";

export type EightByEightContactCenterApiSchemaCustomFields = {
  value?: string;
  displayName?: string;
};

export interface EightByEightContactCenterApiOperationQueryMap {
  "chat-api-v2-actions-events:POST /oauth/v2/token": {};
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": {
  size?: number;
  page?: number;
};
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": {};
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": {};
  "chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": {};
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": {};
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify": {};
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public": {};
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": {
  size?: number;
  page?: number;
  sort?: string;
  filter?: string;
};
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": {};
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": {};
  "chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": {};
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": {};
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": {
  size?: number;
  page?: number;
  "channel-id"?: string;
  status?: (string | EightByEightContactCenterApiSchemaTransactionStatus);
  order?: "asc" | "desc";
  userId?: string;
  "customer.email"?: string;
  "customer.<anyCustomerKeyName>"?: string;
};
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": {};
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}": {};
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants": {};
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer": {};
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": {
  "interaction-id"?: string;
};
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": {};
  "dynamic-campaigns:PATCH /{campaign-id}": {};
  "dynamic-campaigns:POST /{campaign-id}/customers": {};
  "dynamic-campaigns:DELETE /{campaign-id}/customers/{customer-id}": {};
  "campaigns-beta:POST /{campaignId}/records": {};
  "campaigns-beta:PATCH /{campaignId}": {};
  "chapi-chat-api:POST /api/chat/v1/messages/": {};
  "chapi-chat-api:GET /api/chat/v1/messages": {
  pageSize?: number;
  room?: string;
  ts?: number;
};
  "chat-gateway:GET /chat-gateway/v1/webhooks": {
  size?: number;
  page?: number;
  sort?: string;
  filter?: string;
};
  "chat-gateway:POST /chat-gateway/v1/webhooks": {};
  "chat-gateway:GET /chat-gateway/v1/webhooks/{webhookId}": {};
  "chat-gateway:PUT /chat-gateway/v1/webhooks/{webhookId}": {};
  "chat-gateway:DELETE /chat-gateway/v1/webhooks/{webhookId}": {};
  "chat-gateway:POST /chat-gateway/v1/webhooks/verify": {};
  "chat-gateway:GET /chat-gateway/v1/jwk/{jwkId}/public": {};
  "chat-gateway:GET /chat-gateway/v1/channels": {
  size?: number;
  page?: number;
  sort?: string;
  filter?: string;
};
  "chat-gateway:POST /chat-gateway/v1/channels": {};
  "chat-gateway:GET /chat-gateway/v1/channels/{channelId}": {};
  "chat-gateway:PUT /chat-gateway/v1/channels/{channelId}": {};
  "chat-gateway:DELETE /chat-gateway/v1/channels/{channelId}": {};
  "chat-gateway:GET /chat-gateway/v1/conversations": {
  size?: number;
  page?: number;
  sort?: string;
  filter?: string;
};
  "chat-gateway:POST /chat-gateway/v1/conversations": {};
  "chat-gateway:PUT /chat-gateway/v1/conversations/{conversationId}": {};
  "chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}": {};
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}": {};
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/interactions": {};
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/post-agent-assignment": {};
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/typing": {};
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/thinking": {};
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/read-receipt": {};
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/participants": {};
  "chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}/participants/user": {};
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages": {
  size?: number;
  page?: number;
  sort?: string;
};
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/messages": {};
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}": {};
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments": {
  size?: number;
  page?: number;
  sort?: string;
  filter?: string;
};
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/attachments": {};
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}": {};
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}/content": {};
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}/cards": {
  size?: number;
  page?: number;
  sort?: string;
};
  "chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-submit": {};
  "chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-execute": {};
  "call:POST /tenants/{tenantId}/calls": {};
  "call:PUT /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}/transaction-codes": {};
  "call:DELETE /tenants/{tenantId}/calls/{interactionId}": {
  endPostProcessing?: boolean;
};
  "call:DELETE /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}": {};
  "call:DELETE /tenants/{tenantId}/agents/{agentId}/calls": {};
  "call:DELETE /tenants/{tenantId}/agents/{agentId}/calls/line/{lineNo}": {};
  "agent-status:GET /tenants/{tenantId}/agentstatus/agents": {
  groupId?: string;
  pageSize?: number;
  pageIndex?: number;
};
  "agent-status:POST /tenants/{tenantId}/agentstatus/agents/bulk": {};
  "agent-status:GET /tenants/{tenantId}/agentstatus/agents/{agentId}": {};
  "agent-status:PUT /tenants/{tenantId}/agentstatus/agents/{agentId}": {};
  "historical-analytics:POST /": {};
  "historical-analytics:GET /{id}": {};
  "historical-analytics:GET /{id}/status": {};
  "historical-analytics:GET /{id}/data": {
  page?: number;
  size?: number;
};
  "historical-analytics:GET /{id}/download": {};
  "historical-analytics:GET /{id}/links": {};
  "historical-analytics:GET /report-types": {};
  "historical-analytics:GET /report-types/{type}": {};
  "historical-analytics:POST /detailed-reports": {};
  "historical-analytics:GET /detailed-reports/{id}/data": {
  size?: number;
  lastDocumentId?: string;
};
  "real-time-analytics:GET /queues": {
  metrics?: ReadonlyArray<string>;
  page?: number;
  "queue-ids"?: ReadonlyArray<string>;
  size?: number;
  summary?: boolean;
  timezone?: string;
  includeTotals?: boolean;
};
  "real-time-analytics:GET /queues/{id}": {
  metrics?: ReadonlyArray<string>;
  timezone?: string;
};
  "real-time-analytics:GET /queues/{queueId}/agents": {
  "agent-ids"?: ReadonlyArray<string>;
  metrics?: ReadonlyArray<string>;
  page?: number;
  size?: number;
  summary?: boolean;
  timezone?: string;
  includeTotals?: boolean;
};
  "real-time-analytics:GET /queues/{queueId}/agents/{agentId}": {
  metrics?: ReadonlyArray<string>;
  timezone?: string;
};
  "real-time-analytics:GET /groups": {
  metrics?: ReadonlyArray<string>;
  "group-ids"?: ReadonlyArray<string>;
  summary?: boolean;
  timezone?: string;
  page?: number;
  size?: number;
};
  "real-time-analytics:GET /groups/{id}": {
  metrics?: ReadonlyArray<string>;
  timezone?: string;
};
  "real-time-analytics:GET /groups/{groupId}/agents": {
  "agent-ids"?: ReadonlyArray<string>;
  summary?: boolean;
  metrics?: ReadonlyArray<string>;
  timezone?: string;
  page?: number;
  size?: number;
  includeTotals?: boolean;
};
  "real-time-analytics:GET /groups/{groupId}/agents/{agentId}": {
  metrics?: ReadonlyArray<string>;
  timezone?: string;
};
  "real-time-analytics:GET /agents-in-queue-groups": {
  "queue-ids"?: ReadonlyArray<string>;
  metrics?: ReadonlyArray<string>;
  timezone?: string;
};
  "real-time-analytics:GET /agents": {
  "agent-ids"?: ReadonlyArray<string>;
  "group-ids"?: ReadonlyArray<string>;
  summary?: boolean;
  metrics?: ReadonlyArray<string>;
  timezone?: string;
  page?: number;
  size?: number;
  includeTotals?: boolean;
};
  "qmsa:GET /interactions/count": {
  interactionType?: EightByEightContactCenterApiSchemaInteractionType;
  startTS?: string;
  endTS?: string;
  userReference?: number;
  customField?: ReadonlyArray<string>;
  customFieldValue?: string;
};
  "qmsa:GET /interactions": {
  startTS?: string;
  endTS?: string;
  page?: number;
  size?: number;
  interactionGuid?: ReadonlyArray<string>;
  userReference?: number;
  customField?: ReadonlyArray<string>;
  customFieldValue?: string;
  interactionType?: EightByEightContactCenterApiSchemaInteractionType;
};
  "qmsa:DELETE /interactions/{interactionGuid}": {};
  "qmsa:DELETE /interactions/{interactionGuid}/purge": {};
  "qmsa:PUT /interactions/{interactionGuid}/{customFieldNo}": {};
  "qmsa:DELETE /interactions/{interactionGuid}/{customFieldNo}": {};
  "qmsa:GET /interactions/{interactionGuid}/transcriptions": {};
  "qmsa:GET /interactions/{interactionGuid}/topics": {};
  "qmsa:GET /interactions/{interactionGuid}/labels": {};
  "qmsa:GET /interactions/{interactionGuid}/notes": {};
  "qmsa:GET /interactions/{interactionGuid}/media": {
  bitRate?: number;
  sampleRate?: number;
  stereoEnabled?: boolean;
};
  "qmsa:GET /interactions/redirect": {
  interactionGuid: string;
};
  "qmsa:GET /users/count": {
  activeUsers?: boolean;
};
  "qmsa:GET /users": {
  page?: number;
  size?: number;
  activeUsers?: boolean;
};
  "qmsa:GET /users/{userReference}/supervisors": {};
  "qmsa:GET /users/{userReference}/trainers": {};
  "qmsa:GET /users/{userReference}/details": {};
  "qmsa:GET /evaluations/count": {
  startTS?: string;
  endTS?: string;
  useInteractionTime?: boolean;
  interactionGuid?: ReadonlyArray<string>;
  userReference?: number;
};
  "qmsa:GET /evaluations": {
  startTS?: string;
  endTS?: string;
  useInteractionTime?: boolean;
  page?: number;
  size?: number;
  interactionGuid?: ReadonlyArray<string>;
  userReference?: number;
  templateName?: string;
};
  "qmsa:GET /evaluations/{evaluationId}/details": {};
  "qmsa:GET /speechAnalysis/categories/count": {};
  "qmsa:GET /speechAnalysis/categories": {
  page?: number;
  size?: number;
};
  "qmsa:GET /speechAnalysis/{categoryId}/topics/count": {};
  "qmsa:GET /speechAnalysis/{categoryId}/topics": {
  page?: number;
  size?: number;
};
  "chat-api-contactcenter:POST /oauth/v2/token": {};
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": {
  size?: number;
  page?: number;
};
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": {};
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": {};
  "chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": {};
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": {};
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify": {};
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public": {};
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": {
  size?: number;
  page?: number;
  sort?: string;
  filter?: string;
};
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": {};
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": {};
  "chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": {};
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": {};
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": {
  size?: number;
  page?: number;
  "channel-id"?: string;
  status?: (string | EightByEightContactCenterApiSchemaTransactionStatus2);
  order?: "asc" | "desc";
  userId?: string;
  "customer.email"?: string;
  "customer.<anyCustomerKeyName>"?: string;
};
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": {};
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}": {};
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants": {};
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer": {};
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": {
  "interaction-id"?: string;
};
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": {};
}

export interface EightByEightContactCenterApiOperationQueryRequiredMap {
  "chat-api-v2-actions-events:POST /oauth/v2/token": false;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": false;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": false;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": false;
  "chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": false;
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": false;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify": false;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public": false;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": false;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": false;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": false;
  "chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": false;
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": false;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": false;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": false;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}": false;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants": false;
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer": false;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": false;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": false;
  "dynamic-campaigns:PATCH /{campaign-id}": false;
  "dynamic-campaigns:POST /{campaign-id}/customers": false;
  "dynamic-campaigns:DELETE /{campaign-id}/customers/{customer-id}": false;
  "campaigns-beta:POST /{campaignId}/records": false;
  "campaigns-beta:PATCH /{campaignId}": false;
  "chapi-chat-api:POST /api/chat/v1/messages/": false;
  "chapi-chat-api:GET /api/chat/v1/messages": false;
  "chat-gateway:GET /chat-gateway/v1/webhooks": false;
  "chat-gateway:POST /chat-gateway/v1/webhooks": false;
  "chat-gateway:GET /chat-gateway/v1/webhooks/{webhookId}": false;
  "chat-gateway:PUT /chat-gateway/v1/webhooks/{webhookId}": false;
  "chat-gateway:DELETE /chat-gateway/v1/webhooks/{webhookId}": false;
  "chat-gateway:POST /chat-gateway/v1/webhooks/verify": false;
  "chat-gateway:GET /chat-gateway/v1/jwk/{jwkId}/public": false;
  "chat-gateway:GET /chat-gateway/v1/channels": false;
  "chat-gateway:POST /chat-gateway/v1/channels": false;
  "chat-gateway:GET /chat-gateway/v1/channels/{channelId}": false;
  "chat-gateway:PUT /chat-gateway/v1/channels/{channelId}": false;
  "chat-gateway:DELETE /chat-gateway/v1/channels/{channelId}": false;
  "chat-gateway:GET /chat-gateway/v1/conversations": false;
  "chat-gateway:POST /chat-gateway/v1/conversations": false;
  "chat-gateway:PUT /chat-gateway/v1/conversations/{conversationId}": false;
  "chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}": false;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}": false;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/interactions": false;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/post-agent-assignment": false;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/typing": false;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/thinking": false;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/read-receipt": false;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/participants": false;
  "chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}/participants/user": false;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages": false;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/messages": false;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}": false;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments": false;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/attachments": false;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}": false;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}/content": false;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}/cards": false;
  "chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-submit": false;
  "chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-execute": false;
  "call:POST /tenants/{tenantId}/calls": false;
  "call:PUT /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}/transaction-codes": false;
  "call:DELETE /tenants/{tenantId}/calls/{interactionId}": false;
  "call:DELETE /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}": false;
  "call:DELETE /tenants/{tenantId}/agents/{agentId}/calls": false;
  "call:DELETE /tenants/{tenantId}/agents/{agentId}/calls/line/{lineNo}": false;
  "agent-status:GET /tenants/{tenantId}/agentstatus/agents": false;
  "agent-status:POST /tenants/{tenantId}/agentstatus/agents/bulk": false;
  "agent-status:GET /tenants/{tenantId}/agentstatus/agents/{agentId}": false;
  "agent-status:PUT /tenants/{tenantId}/agentstatus/agents/{agentId}": false;
  "historical-analytics:POST /": false;
  "historical-analytics:GET /{id}": false;
  "historical-analytics:GET /{id}/status": false;
  "historical-analytics:GET /{id}/data": false;
  "historical-analytics:GET /{id}/download": false;
  "historical-analytics:GET /{id}/links": false;
  "historical-analytics:GET /report-types": false;
  "historical-analytics:GET /report-types/{type}": false;
  "historical-analytics:POST /detailed-reports": false;
  "historical-analytics:GET /detailed-reports/{id}/data": false;
  "real-time-analytics:GET /queues": false;
  "real-time-analytics:GET /queues/{id}": false;
  "real-time-analytics:GET /queues/{queueId}/agents": false;
  "real-time-analytics:GET /queues/{queueId}/agents/{agentId}": false;
  "real-time-analytics:GET /groups": false;
  "real-time-analytics:GET /groups/{id}": false;
  "real-time-analytics:GET /groups/{groupId}/agents": false;
  "real-time-analytics:GET /groups/{groupId}/agents/{agentId}": false;
  "real-time-analytics:GET /agents-in-queue-groups": false;
  "real-time-analytics:GET /agents": false;
  "qmsa:GET /interactions/count": false;
  "qmsa:GET /interactions": false;
  "qmsa:DELETE /interactions/{interactionGuid}": false;
  "qmsa:DELETE /interactions/{interactionGuid}/purge": false;
  "qmsa:PUT /interactions/{interactionGuid}/{customFieldNo}": false;
  "qmsa:DELETE /interactions/{interactionGuid}/{customFieldNo}": false;
  "qmsa:GET /interactions/{interactionGuid}/transcriptions": false;
  "qmsa:GET /interactions/{interactionGuid}/topics": false;
  "qmsa:GET /interactions/{interactionGuid}/labels": false;
  "qmsa:GET /interactions/{interactionGuid}/notes": false;
  "qmsa:GET /interactions/{interactionGuid}/media": false;
  "qmsa:GET /interactions/redirect": true;
  "qmsa:GET /users/count": false;
  "qmsa:GET /users": false;
  "qmsa:GET /users/{userReference}/supervisors": false;
  "qmsa:GET /users/{userReference}/trainers": false;
  "qmsa:GET /users/{userReference}/details": false;
  "qmsa:GET /evaluations/count": false;
  "qmsa:GET /evaluations": false;
  "qmsa:GET /evaluations/{evaluationId}/details": false;
  "qmsa:GET /speechAnalysis/categories/count": false;
  "qmsa:GET /speechAnalysis/categories": false;
  "qmsa:GET /speechAnalysis/{categoryId}/topics/count": false;
  "qmsa:GET /speechAnalysis/{categoryId}/topics": false;
  "chat-api-contactcenter:POST /oauth/v2/token": false;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": false;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": false;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": false;
  "chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": false;
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": false;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify": false;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public": false;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": false;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": false;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": false;
  "chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": false;
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": false;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": false;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": false;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}": false;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants": false;
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer": false;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": false;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": false;
}

export interface EightByEightContactCenterApiOperationRequestBodyMap {
  "chat-api-v2-actions-events:POST /oauth/v2/token": {
  grant_type: "client_credentials";
};
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": never;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": EightByEightContactCenterApiSchemaWebHookV2CreateRequest;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": never;
  "chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": EightByEightContactCenterApiSchemaWebHookV2PutRequest;
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": never;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify": EightByEightContactCenterApiSchemaWebHookV2VerifyRequest;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public": never;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": never;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": EightByEightContactCenterApiSchemaChannelV2CreateRequest;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": never;
  "chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": EightByEightContactCenterApiSchemaChannelV2PutRequest;
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": never;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": never;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": EightByEightContactCenterApiSchemaCreateTransactionRequest;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}": never;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants": never;
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer": never;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": never;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": EightByEightContactCenterApiSchemaSendConversationMessagePayload;
  "dynamic-campaigns:PATCH /{campaign-id}": EightByEightContactCenterApiSchemaCampaignStatus;
  "dynamic-campaigns:POST /{campaign-id}/customers": EightByEightContactCenterApiSchemaCustomerItemList;
  "dynamic-campaigns:DELETE /{campaign-id}/customers/{customer-id}": never;
  "campaigns-beta:POST /{campaignId}/records": EightByEightContactCenterApiSchemaAddRecordsRequest;
  "campaigns-beta:PATCH /{campaignId}": (EightByEightContactCenterApiSchemaModifyCampaignRequest | EightByEightContactCenterApiSchemaStartCampaignRequest);
  "chapi-chat-api:POST /api/chat/v1/messages/": EightByEightContactCenterApiSchemaSendMessageVO;
  "chapi-chat-api:GET /api/chat/v1/messages": never;
  "chat-gateway:GET /chat-gateway/v1/webhooks": never;
  "chat-gateway:POST /chat-gateway/v1/webhooks": EightByEightContactCenterApiSchemaWebHookV2CreateRequest2;
  "chat-gateway:GET /chat-gateway/v1/webhooks/{webhookId}": never;
  "chat-gateway:PUT /chat-gateway/v1/webhooks/{webhookId}": EightByEightContactCenterApiSchemaWebHookV2PutRequest2;
  "chat-gateway:DELETE /chat-gateway/v1/webhooks/{webhookId}": never;
  "chat-gateway:POST /chat-gateway/v1/webhooks/verify": EightByEightContactCenterApiSchemaWebHookV2VerifyRequest2;
  "chat-gateway:GET /chat-gateway/v1/jwk/{jwkId}/public": never;
  "chat-gateway:GET /chat-gateway/v1/channels": never;
  "chat-gateway:POST /chat-gateway/v1/channels": EightByEightContactCenterApiSchemaChannelV2CreateRequest2;
  "chat-gateway:GET /chat-gateway/v1/channels/{channelId}": never;
  "chat-gateway:PUT /chat-gateway/v1/channels/{channelId}": EightByEightContactCenterApiSchemaChannelV2PutRequest2;
  "chat-gateway:DELETE /chat-gateway/v1/channels/{channelId}": never;
  "chat-gateway:GET /chat-gateway/v1/conversations": never;
  "chat-gateway:POST /chat-gateway/v1/conversations": EightByEightContactCenterApiSchemaCreateTransactionRequest2;
  "chat-gateway:PUT /chat-gateway/v1/conversations/{conversationId}": EightByEightContactCenterApiSchemaUpdateTransactionRequest;
  "chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}": EightByEightContactCenterApiSchemaPatchTransactionRequest;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}": never;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/interactions": never;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/post-agent-assignment": EightByEightContactCenterApiSchemaPostAgentAssignmentRequest;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/typing": EightByEightContactCenterApiSchemaTypingRequest;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/thinking": EightByEightContactCenterApiSchemaThinkingIndicatorRequest;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/read-receipt": EightByEightContactCenterApiSchemaReadReceiptRequest;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/participants": never;
  "chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}/participants/user": EightByEightContactCenterApiSchemaPatchUserParticipantRequest;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages": never;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/messages": (EightByEightContactCenterApiSchemaSendConversationMessagePayload2 | EightByEightContactCenterApiSchemaSendConversationMessageWithExternalProviderPayload);
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}": never;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments": never;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/attachments": {
  attachment?: string;
  authorType?: EightByEightContactCenterApiSchemaExternalAuthorType;
};
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}": never;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}/content": never;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}/cards": never;
  "chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-submit": EightByEightContactCenterApiSchemaAdaptiveCardActionSubmitPayload;
  "chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-execute": EightByEightContactCenterApiSchemaAdaptiveCardActionExecutePayload;
  "call:POST /tenants/{tenantId}/calls": EightByEightContactCenterApiSchemaPhoneInteraction;
  "call:PUT /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}/transaction-codes": EightByEightContactCenterApiSchemaTransactionCodes;
  "call:DELETE /tenants/{tenantId}/calls/{interactionId}": never;
  "call:DELETE /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}": never;
  "call:DELETE /tenants/{tenantId}/agents/{agentId}/calls": never;
  "call:DELETE /tenants/{tenantId}/agents/{agentId}/calls/line/{lineNo}": never;
  "agent-status:GET /tenants/{tenantId}/agentstatus/agents": never;
  "agent-status:POST /tenants/{tenantId}/agentstatus/agents/bulk": EightByEightContactCenterApiSchemaAgentsStatusRequest;
  "agent-status:GET /tenants/{tenantId}/agentstatus/agents/{agentId}": never;
  "agent-status:PUT /tenants/{tenantId}/agentstatus/agents/{agentId}": EightByEightContactCenterApiSchemaAgentStatusRequest;
  "historical-analytics:POST /": EightByEightContactCenterApiSchemaReportDefinitionRequest;
  "historical-analytics:GET /{id}": never;
  "historical-analytics:GET /{id}/status": never;
  "historical-analytics:GET /{id}/data": never;
  "historical-analytics:GET /{id}/download": never;
  "historical-analytics:GET /{id}/links": never;
  "historical-analytics:GET /report-types": never;
  "historical-analytics:GET /report-types/{type}": never;
  "historical-analytics:POST /detailed-reports": EightByEightContactCenterApiSchemaDetailedReportDefinitionRequest;
  "historical-analytics:GET /detailed-reports/{id}/data": never;
  "real-time-analytics:GET /queues": never;
  "real-time-analytics:GET /queues/{id}": never;
  "real-time-analytics:GET /queues/{queueId}/agents": never;
  "real-time-analytics:GET /queues/{queueId}/agents/{agentId}": never;
  "real-time-analytics:GET /groups": never;
  "real-time-analytics:GET /groups/{id}": never;
  "real-time-analytics:GET /groups/{groupId}/agents": never;
  "real-time-analytics:GET /groups/{groupId}/agents/{agentId}": never;
  "real-time-analytics:GET /agents-in-queue-groups": never;
  "real-time-analytics:GET /agents": never;
  "qmsa:GET /interactions/count": never;
  "qmsa:GET /interactions": never;
  "qmsa:DELETE /interactions/{interactionGuid}": never;
  "qmsa:DELETE /interactions/{interactionGuid}/purge": never;
  "qmsa:PUT /interactions/{interactionGuid}/{customFieldNo}": string;
  "qmsa:DELETE /interactions/{interactionGuid}/{customFieldNo}": never;
  "qmsa:GET /interactions/{interactionGuid}/transcriptions": never;
  "qmsa:GET /interactions/{interactionGuid}/topics": never;
  "qmsa:GET /interactions/{interactionGuid}/labels": never;
  "qmsa:GET /interactions/{interactionGuid}/notes": never;
  "qmsa:GET /interactions/{interactionGuid}/media": never;
  "qmsa:GET /interactions/redirect": never;
  "qmsa:GET /users/count": never;
  "qmsa:GET /users": never;
  "qmsa:GET /users/{userReference}/supervisors": never;
  "qmsa:GET /users/{userReference}/trainers": never;
  "qmsa:GET /users/{userReference}/details": never;
  "qmsa:GET /evaluations/count": never;
  "qmsa:GET /evaluations": never;
  "qmsa:GET /evaluations/{evaluationId}/details": never;
  "qmsa:GET /speechAnalysis/categories/count": never;
  "qmsa:GET /speechAnalysis/categories": never;
  "qmsa:GET /speechAnalysis/{categoryId}/topics/count": never;
  "qmsa:GET /speechAnalysis/{categoryId}/topics": never;
  "chat-api-contactcenter:POST /oauth/v2/token": {
  grant_type: "client_credentials";
};
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": never;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": EightByEightContactCenterApiSchemaWebHookV2CreateRequest3;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": never;
  "chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": EightByEightContactCenterApiSchemaWebHookV2PutRequest3;
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": never;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify": EightByEightContactCenterApiSchemaWebHookV2VerifyRequest3;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public": never;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": never;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": EightByEightContactCenterApiSchemaChannelV2CreateRequest3;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": never;
  "chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": EightByEightContactCenterApiSchemaChannelV2PutRequest3;
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": never;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": never;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": EightByEightContactCenterApiSchemaCreateTransactionRequest3;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}": never;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants": never;
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer": never;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": never;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": EightByEightContactCenterApiSchemaSendConversationMessagePayload3;
}

export interface EightByEightContactCenterApiOperationRequestBodyRequiredMap {
  "chat-api-v2-actions-events:POST /oauth/v2/token": true;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": false;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": false;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": false;
  "chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": false;
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": false;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify": false;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public": false;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": false;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": false;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": false;
  "chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": false;
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": false;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": false;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": true;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}": false;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants": false;
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer": false;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": false;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": true;
  "dynamic-campaigns:PATCH /{campaign-id}": false;
  "dynamic-campaigns:POST /{campaign-id}/customers": false;
  "dynamic-campaigns:DELETE /{campaign-id}/customers/{customer-id}": false;
  "campaigns-beta:POST /{campaignId}/records": true;
  "campaigns-beta:PATCH /{campaignId}": true;
  "chapi-chat-api:POST /api/chat/v1/messages/": true;
  "chapi-chat-api:GET /api/chat/v1/messages": false;
  "chat-gateway:GET /chat-gateway/v1/webhooks": false;
  "chat-gateway:POST /chat-gateway/v1/webhooks": false;
  "chat-gateway:GET /chat-gateway/v1/webhooks/{webhookId}": false;
  "chat-gateway:PUT /chat-gateway/v1/webhooks/{webhookId}": false;
  "chat-gateway:DELETE /chat-gateway/v1/webhooks/{webhookId}": false;
  "chat-gateway:POST /chat-gateway/v1/webhooks/verify": false;
  "chat-gateway:GET /chat-gateway/v1/jwk/{jwkId}/public": false;
  "chat-gateway:GET /chat-gateway/v1/channels": false;
  "chat-gateway:POST /chat-gateway/v1/channels": false;
  "chat-gateway:GET /chat-gateway/v1/channels/{channelId}": false;
  "chat-gateway:PUT /chat-gateway/v1/channels/{channelId}": false;
  "chat-gateway:DELETE /chat-gateway/v1/channels/{channelId}": false;
  "chat-gateway:GET /chat-gateway/v1/conversations": false;
  "chat-gateway:POST /chat-gateway/v1/conversations": true;
  "chat-gateway:PUT /chat-gateway/v1/conversations/{conversationId}": true;
  "chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}": true;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}": false;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/interactions": false;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/post-agent-assignment": true;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/typing": true;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/thinking": false;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/read-receipt": true;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/participants": false;
  "chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}/participants/user": true;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages": false;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/messages": true;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}": false;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments": false;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/attachments": true;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}": false;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}/content": false;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}/cards": false;
  "chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-submit": true;
  "chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-execute": true;
  "call:POST /tenants/{tenantId}/calls": false;
  "call:PUT /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}/transaction-codes": false;
  "call:DELETE /tenants/{tenantId}/calls/{interactionId}": false;
  "call:DELETE /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}": false;
  "call:DELETE /tenants/{tenantId}/agents/{agentId}/calls": false;
  "call:DELETE /tenants/{tenantId}/agents/{agentId}/calls/line/{lineNo}": false;
  "agent-status:GET /tenants/{tenantId}/agentstatus/agents": false;
  "agent-status:POST /tenants/{tenantId}/agentstatus/agents/bulk": false;
  "agent-status:GET /tenants/{tenantId}/agentstatus/agents/{agentId}": false;
  "agent-status:PUT /tenants/{tenantId}/agentstatus/agents/{agentId}": false;
  "historical-analytics:POST /": true;
  "historical-analytics:GET /{id}": false;
  "historical-analytics:GET /{id}/status": false;
  "historical-analytics:GET /{id}/data": false;
  "historical-analytics:GET /{id}/download": false;
  "historical-analytics:GET /{id}/links": false;
  "historical-analytics:GET /report-types": false;
  "historical-analytics:GET /report-types/{type}": false;
  "historical-analytics:POST /detailed-reports": true;
  "historical-analytics:GET /detailed-reports/{id}/data": false;
  "real-time-analytics:GET /queues": false;
  "real-time-analytics:GET /queues/{id}": false;
  "real-time-analytics:GET /queues/{queueId}/agents": false;
  "real-time-analytics:GET /queues/{queueId}/agents/{agentId}": false;
  "real-time-analytics:GET /groups": false;
  "real-time-analytics:GET /groups/{id}": false;
  "real-time-analytics:GET /groups/{groupId}/agents": false;
  "real-time-analytics:GET /groups/{groupId}/agents/{agentId}": false;
  "real-time-analytics:GET /agents-in-queue-groups": false;
  "real-time-analytics:GET /agents": false;
  "qmsa:GET /interactions/count": false;
  "qmsa:GET /interactions": false;
  "qmsa:DELETE /interactions/{interactionGuid}": false;
  "qmsa:DELETE /interactions/{interactionGuid}/purge": false;
  "qmsa:PUT /interactions/{interactionGuid}/{customFieldNo}": true;
  "qmsa:DELETE /interactions/{interactionGuid}/{customFieldNo}": false;
  "qmsa:GET /interactions/{interactionGuid}/transcriptions": false;
  "qmsa:GET /interactions/{interactionGuid}/topics": false;
  "qmsa:GET /interactions/{interactionGuid}/labels": false;
  "qmsa:GET /interactions/{interactionGuid}/notes": false;
  "qmsa:GET /interactions/{interactionGuid}/media": false;
  "qmsa:GET /interactions/redirect": false;
  "qmsa:GET /users/count": false;
  "qmsa:GET /users": false;
  "qmsa:GET /users/{userReference}/supervisors": false;
  "qmsa:GET /users/{userReference}/trainers": false;
  "qmsa:GET /users/{userReference}/details": false;
  "qmsa:GET /evaluations/count": false;
  "qmsa:GET /evaluations": false;
  "qmsa:GET /evaluations/{evaluationId}/details": false;
  "qmsa:GET /speechAnalysis/categories/count": false;
  "qmsa:GET /speechAnalysis/categories": false;
  "qmsa:GET /speechAnalysis/{categoryId}/topics/count": false;
  "qmsa:GET /speechAnalysis/{categoryId}/topics": false;
  "chat-api-contactcenter:POST /oauth/v2/token": true;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": false;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": false;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": false;
  "chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": false;
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": false;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify": false;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public": false;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": false;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": false;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": false;
  "chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": false;
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": false;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": false;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": true;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}": false;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants": false;
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer": false;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": false;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": true;
}

export interface EightByEightContactCenterApiOperationResponseMap {
  "chat-api-v2-actions-events:POST /oauth/v2/token": EightByEightContactCenterApiSchemaAuthResponse;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": EightByEightContactCenterApiSchemaWebHooksV2ListResult;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": EightByEightContactCenterApiSchemaWebHookV2Result;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": EightByEightContactCenterApiSchemaWebHookV2Result;
  "chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": EightByEightContactCenterApiSchemaWebHookV2Result;
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": EightByEightContactCenterApiSchemaInternalServerProblem;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify": EightByEightContactCenterApiSchemaInternalServerProblem;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public": string;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": EightByEightContactCenterApiSchemaChannelsV2ListResult;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": EightByEightContactCenterApiSchemaChannelV2Result;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": EightByEightContactCenterApiSchemaChannelV2Result;
  "chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": EightByEightContactCenterApiSchemaChannelV2Result;
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": EightByEightContactCenterApiSchemaInternalServerProblem;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": EightByEightContactCenterApiSchemaConversationListResult;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": EightByEightContactCenterApiSchemaConversationIdentifierField;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}": EightByEightContactCenterApiSchemaConversationResult;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants": {
  participants: EightByEightContactCenterApiSchemaConversationParticipants;
};
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer": EightByEightContactCenterApiSchemaUnauthorizedProblem;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": EightByEightContactCenterApiSchemaMessageListResult;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": EightByEightContactCenterApiSchemaInternalServerProblem;
  "dynamic-campaigns:PATCH /{campaign-id}": EightByEightContactCenterApiSchemaInternalServerError;
  "dynamic-campaigns:POST /{campaign-id}/customers": EightByEightContactCenterApiSchemaCustomerItemResponseList;
  "dynamic-campaigns:DELETE /{campaign-id}/customers/{customer-id}": EightByEightContactCenterApiSchemaInternalServerError;
  "campaigns-beta:POST /{campaignId}/records": EightByEightContactCenterApiSchemaAddRecordsResponse;
  "campaigns-beta:PATCH /{campaignId}": EightByEightContactCenterApiSchemaCampaign;
  "chapi-chat-api:POST /api/chat/v1/messages/": EightByEightContactCenterApiSchemaSendMessageResponseVO;
  "chapi-chat-api:GET /api/chat/v1/messages": ReadonlyArray<EightByEightContactCenterApiSchemaMessageVO>;
  "chat-gateway:GET /chat-gateway/v1/webhooks": EightByEightContactCenterApiSchemaWebHooksV2ListResult2;
  "chat-gateway:POST /chat-gateway/v1/webhooks": EightByEightContactCenterApiSchemaWebHookV2Result2;
  "chat-gateway:GET /chat-gateway/v1/webhooks/{webhookId}": EightByEightContactCenterApiSchemaWebHookV2Result2;
  "chat-gateway:PUT /chat-gateway/v1/webhooks/{webhookId}": EightByEightContactCenterApiSchemaWebHookV2Result2;
  "chat-gateway:DELETE /chat-gateway/v1/webhooks/{webhookId}": EightByEightContactCenterApiSchemaGenericExceptionPayload;
  "chat-gateway:POST /chat-gateway/v1/webhooks/verify": EightByEightContactCenterApiSchemaGenericExceptionPayload;
  "chat-gateway:GET /chat-gateway/v1/jwk/{jwkId}/public": string;
  "chat-gateway:GET /chat-gateway/v1/channels": EightByEightContactCenterApiSchemaChannelsV2ListResult2;
  "chat-gateway:POST /chat-gateway/v1/channels": EightByEightContactCenterApiSchemaChannelV2Result2;
  "chat-gateway:GET /chat-gateway/v1/channels/{channelId}": EightByEightContactCenterApiSchemaChannelV2Result2;
  "chat-gateway:PUT /chat-gateway/v1/channels/{channelId}": EightByEightContactCenterApiSchemaChannelV2Result2;
  "chat-gateway:DELETE /chat-gateway/v1/channels/{channelId}": EightByEightContactCenterApiSchemaGenericExceptionPayload;
  "chat-gateway:GET /chat-gateway/v1/conversations": EightByEightContactCenterApiSchemaConversationListResult2;
  "chat-gateway:POST /chat-gateway/v1/conversations": EightByEightContactCenterApiSchemaConversationIdentifierField2;
  "chat-gateway:PUT /chat-gateway/v1/conversations/{conversationId}": EightByEightContactCenterApiSchemaConversationResult2;
  "chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}": EightByEightContactCenterApiSchemaConversationResult2;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}": EightByEightContactCenterApiSchemaConversationResult2;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/interactions": EightByEightContactCenterApiSchemaInteractionsListResult;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/post-agent-assignment": EightByEightContactCenterApiSchemaGenericExceptionPayload;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/typing": EightByEightContactCenterApiSchemaGenericExceptionPayload;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/thinking": EightByEightContactCenterApiSchemaGenericExceptionPayload;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/read-receipt": EightByEightContactCenterApiSchemaGenericExceptionPayload;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/participants": EightByEightContactCenterApiSchemaConversationParticipants2;
  "chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}/participants/user": EightByEightContactCenterApiSchemaUnauthorizedProblem2;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages": EightByEightContactCenterApiSchemaMessageListResult2;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/messages": EightByEightContactCenterApiSchemaGenericExceptionPayload;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}": EightByEightContactCenterApiSchemaMessageResult;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments": EightByEightContactCenterApiSchemaAttachmentsResult;
  "chat-gateway:POST /chat-gateway/v1/conversations/{conversationId}/attachments": EightByEightContactCenterApiSchemaAttachmentResult;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}": EightByEightContactCenterApiSchemaAttachmentResult;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/attachments/{attachmentId}/content": string;
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/messages/{messageId}/cards": EightByEightContactCenterApiSchemaCardsListResult;
  "chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-submit": EightByEightContactCenterApiSchemaGenericExceptionPayload;
  "chat-gateway:PUT /api/v1/tenant/{tenantId}/conversations/{conversationId}/cards/{cardId}/action-execute": EightByEightContactCenterApiSchemaGenericExceptionPayload;
  "call:POST /tenants/{tenantId}/calls": EightByEightContactCenterApiSchemaCallResponse;
  "call:PUT /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}/transaction-codes": EightByEightContactCenterApiSchemaTransactionCodesResponse;
  "call:DELETE /tenants/{tenantId}/calls/{interactionId}": EightByEightContactCenterApiSchemaDeleteCallResponse;
  "call:DELETE /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}": EightByEightContactCenterApiSchemaDeleteCallResponse;
  "call:DELETE /tenants/{tenantId}/agents/{agentId}/calls": EightByEightContactCenterApiSchemaDeleteCallResponse;
  "call:DELETE /tenants/{tenantId}/agents/{agentId}/calls/line/{lineNo}": EightByEightContactCenterApiSchemaDeleteCallResponse;
  "agent-status:GET /tenants/{tenantId}/agentstatus/agents": EightByEightContactCenterApiSchemaAgentsStatuses;
  "agent-status:POST /tenants/{tenantId}/agentstatus/agents/bulk": EightByEightContactCenterApiSchemaProblem;
  "agent-status:GET /tenants/{tenantId}/agentstatus/agents/{agentId}": EightByEightContactCenterApiSchemaAgentStatus;
  "agent-status:PUT /tenants/{tenantId}/agentstatus/agents/{agentId}": EightByEightContactCenterApiSchemaProblem;
  "historical-analytics:POST /": EightByEightContactCenterApiSchemaResourceOfStatusResponse;
  "historical-analytics:GET /{id}": EightByEightContactCenterApiSchemaReportDefinitionResponse;
  "historical-analytics:GET /{id}/status": EightByEightContactCenterApiSchemaResourceOfStatusResponse;
  "historical-analytics:GET /{id}/data": EightByEightContactCenterApiSchemaResourceOfApiReportResponse;
  "historical-analytics:GET /{id}/download": string;
  "historical-analytics:GET /{id}/links": ReadonlyArray<EightByEightContactCenterApiSchemaLinkItem>;
  "historical-analytics:GET /report-types": EightByEightContactCenterApiSchemaApiReportTypeListResponse;
  "historical-analytics:GET /report-types/{type}": EightByEightContactCenterApiSchemaApiReportTypeResponse;
  "historical-analytics:POST /detailed-reports": ReadonlyArray<EightByEightContactCenterApiSchemaResourceOfStatusResponse>;
  "historical-analytics:GET /detailed-reports/{id}/data": EightByEightContactCenterApiSchemaResourceOfDetailedApiReportResponse;
  "real-time-analytics:GET /queues": EightByEightContactCenterApiSchemaSingleQueueResponse;
  "real-time-analytics:GET /queues/{id}": EightByEightContactCenterApiSchemaSingleQueueResponse;
  "real-time-analytics:GET /queues/{queueId}/agents": EightByEightContactCenterApiSchemaSingleQueueResponse;
  "real-time-analytics:GET /queues/{queueId}/agents/{agentId}": EightByEightContactCenterApiSchemaSingleQueueResponse;
  "real-time-analytics:GET /groups": EightByEightContactCenterApiSchemaSingleGroupResponse;
  "real-time-analytics:GET /groups/{id}": EightByEightContactCenterApiSchemaSingleGroupResponse;
  "real-time-analytics:GET /groups/{groupId}/agents": EightByEightContactCenterApiSchemaSingleGroupResponse;
  "real-time-analytics:GET /groups/{groupId}/agents/{agentId}": EightByEightContactCenterApiSchemaSingleGroupResponse;
  "real-time-analytics:GET /agents-in-queue-groups": EightByEightContactCenterApiSchemaAgentsInQueueGroupsResponse;
  "real-time-analytics:GET /agents": EightByEightContactCenterApiSchemaAgentsResponse;
  "qmsa:GET /interactions/count": string;
  "qmsa:GET /interactions": EightByEightContactCenterApiSchemaInteractionDetailsResponse;
  "qmsa:DELETE /interactions/{interactionGuid}": void;
  "qmsa:DELETE /interactions/{interactionGuid}/purge": void;
  "qmsa:PUT /interactions/{interactionGuid}/{customFieldNo}": void;
  "qmsa:DELETE /interactions/{interactionGuid}/{customFieldNo}": void;
  "qmsa:GET /interactions/{interactionGuid}/transcriptions": ReadonlyArray<EightByEightContactCenterApiSchemaTranscriptionValueResponse>;
  "qmsa:GET /interactions/{interactionGuid}/topics": ReadonlyArray<EightByEightContactCenterApiSchemaTopic>;
  "qmsa:GET /interactions/{interactionGuid}/labels": ReadonlyArray<EightByEightContactCenterApiSchemaLabelValue>;
  "qmsa:GET /interactions/{interactionGuid}/notes": ReadonlyArray<EightByEightContactCenterApiSchemaNoteValue>;
  "qmsa:GET /interactions/{interactionGuid}/media": void;
  "qmsa:GET /interactions/redirect": void;
  "qmsa:GET /users/count": string;
  "qmsa:GET /users": EightByEightContactCenterApiSchemaUserDetailsResponse;
  "qmsa:GET /users/{userReference}/supervisors": ReadonlyArray<EightByEightContactCenterApiSchemaBasicUser>;
  "qmsa:GET /users/{userReference}/trainers": ReadonlyArray<EightByEightContactCenterApiSchemaBasicUser>;
  "qmsa:GET /users/{userReference}/details": EightByEightContactCenterApiSchemaUserResponse;
  "qmsa:GET /evaluations/count": string;
  "qmsa:GET /evaluations": EightByEightContactCenterApiSchemaEvaluationDetailsResponse;
  "qmsa:GET /evaluations/{evaluationId}/details": EightByEightContactCenterApiSchemaEvaluationDetailResponse;
  "qmsa:GET /speechAnalysis/categories/count": string;
  "qmsa:GET /speechAnalysis/categories": EightByEightContactCenterApiSchemaSpeechCategoryResponse;
  "qmsa:GET /speechAnalysis/{categoryId}/topics/count": string;
  "qmsa:GET /speechAnalysis/{categoryId}/topics": EightByEightContactCenterApiSchemaTopicListResponse;
  "chat-api-contactcenter:POST /oauth/v2/token": EightByEightContactCenterApiSchemaAuthResponse2;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": EightByEightContactCenterApiSchemaWebHooksV2ListResult3;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": EightByEightContactCenterApiSchemaWebHookV2Result3;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": EightByEightContactCenterApiSchemaWebHookV2Result3;
  "chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": EightByEightContactCenterApiSchemaWebHookV2Result3;
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": EightByEightContactCenterApiSchemaInternalServerProblem2;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify": EightByEightContactCenterApiSchemaInternalServerProblem2;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public": string;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": EightByEightContactCenterApiSchemaChannelsV2ListResult3;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": EightByEightContactCenterApiSchemaChannelV2Result3;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": EightByEightContactCenterApiSchemaChannelV2Result3;
  "chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": EightByEightContactCenterApiSchemaChannelV2Result3;
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": EightByEightContactCenterApiSchemaInternalServerProblem2;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": EightByEightContactCenterApiSchemaConversationListResult3;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations": EightByEightContactCenterApiSchemaConversationIdentifierField3;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}": EightByEightContactCenterApiSchemaConversationResult3;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants": {
  participants: EightByEightContactCenterApiSchemaConversationParticipants3;
};
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/participants/customer": EightByEightContactCenterApiSchemaUnauthorizedProblem3;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": EightByEightContactCenterApiSchemaMessageListResult3;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/conversations/{conversation-id}/messages": EightByEightContactCenterApiSchemaInternalServerProblem2;
}
