// Generated provider schema DTOs for RingCentralVoiceApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type RingCentralVoiceApiSchemaJsonPrimitive = string | number | boolean | null;
export type RingCentralVoiceApiSchemaJsonValue = RingCentralVoiceApiSchemaJsonPrimitive | readonly RingCentralVoiceApiSchemaJsonValue[] | { readonly [key: string]: RingCentralVoiceApiSchemaJsonValue | undefined };

export type RingCentralVoiceApiSchemaAccessTokenUserDetails = {
  accessToken?: string;
  adminId?: number;
  adminPasswordReset?: boolean;
  adminUrl?: string;
  agentDetails?: ReadonlyArray<RingCentralVoiceApiSchemaAgentV2>;
  agentUrl?: string;
  analyticsUrl?: string;
  iqUrl?: string;
  isAdminPasswordReset?: boolean;
  loginHashcode?: string;
  mainAccountId?: string;
  platformId?: string;
  port?: number;
  rcUser?: RingCentralVoiceApiSchemaContact;
  redirectUrl?: string;
  refreshToken?: string;
  ssoLogin?: boolean;
  tokenType?: string;
};

export type RingCentralVoiceApiSchemaActiveCallListResponse = {
  accountId?: string;
  agentFirstName?: string;
  agentLastName?: string;
  ani?: string;
  archive?: boolean;
  callState?: string;
  cnam?: string;
  dequeueTime?: RingCentralVoiceApiSchemaDateTime;
  destinationName?: string;
  dnis?: string;
  dnisE164?: string;
  enqueueTime?: RingCentralVoiceApiSchemaDateTime;
  externalId?: string;
  uii?: string;
};

export type RingCentralVoiceApiSchemaPrerouteCheckStatus = {
  reason?: string;
  status?: boolean;
};

export type RingCentralVoiceApiSchemaAuditable = {
  fullPath?: string;
  name?: string;
};

export type RingCentralVoiceApiSchemaAuditLogSearchCriteria = {
  accountId?: string;
  ascOrDesc?: "ASCENDING" | "DESCENDING";
  auditActions?: ReadonlyArray<"DELETE" | "CREATE" | "UPDATE">;
  auditedEntityId?: string;
  createUserId?: string;
  endDateTime?: RingCentralVoiceApiSchemaDateTime;
  endDateTimeAsUnix?: number;
  orderBy?: string;
  searchEntities?: ReadonlyArray<string>;
  startDateTime?: RingCentralVoiceApiSchemaDateTime;
  startDateTimeAsUnix?: number;
};

export type RingCentralVoiceApiSchemaAuditLog = {
  accountId?: string;
  actionType?: "DELETE" | "CREATE" | "UPDATE";
  affectedEntityJson?: string;
  auditLogResultList?: ReadonlyArray<RingCentralVoiceApiSchemaAuditLogResult>;
  auditedEntityDescription?: {};
  auditedEntityId?: {};
  authUser?: RingCentralVoiceApiSchemaAuditLogAuthenticatedUser;
  createTime?: number;
  createTimeAsDateTime?: RingCentralVoiceApiSchemaDateTime;
  description?: string;
  id?: string;
};

export type RingCentralVoiceApiSchemaAgentGroup = {
  account?: RingCentralVoiceApiSchemaAccount;
  agentGroupId?: number;
  agents?: RingCentralVoiceApiSchemaCollectionAgent;
  groupName?: string;
  isDefault?: boolean;
  permissions?: ReadonlyArray<"CREATE" | "READ" | "UPDATE" | "DELETE" | "REPORT">;
};

export type RingCentralVoiceApiSchemaAgent = {
  accountAccess?: RingCentralVoiceApiSchemaCollectionAgentAccountAccess;
  active?: boolean;
  agentAccountAccess?: ReadonlyArray<RingCentralVoiceApiSchemaAgentAccountAccess>;
  agentChatGroupAccess?: ReadonlyArray<RingCentralVoiceApiSchemaAgentChatGroupAccess>;
  agentChatQueueAccesses?: RingCentralVoiceApiSchemaCollectionAgentChatQueueAccess;
  agentDialGroupMembers?: RingCentralVoiceApiSchemaCollectionAgentDialGroupMember;
  agentGateAccess?: RingCentralVoiceApiSchemaCollectionAgentGateAccess;
  agentGateGroupAccess?: ReadonlyArray<RingCentralVoiceApiSchemaAgentGateGroupAccess>;
  agentGroup?: RingCentralVoiceApiSchemaAgentGroup;
  agentId?: number;
  agentLoadBalance?: RingCentralVoiceApiSchemaCollectionAgentLoadBalanceMember;
  agentLoadBalanceMembers?: RingCentralVoiceApiSchemaCollectionAgentLoadBalanceMember;
  agentRank?: number;
  agentSkillProfiles?: RingCentralVoiceApiSchemaCollectionAgentSkillProfile;
  agentType?: "AGENT" | "SUPERVISOR" | "MULTI_USER" | "MULTI_SUPERVISOR";
  allowAgentReports?: boolean;
  allowAgentStats?: boolean;
  allowAutoAnswer?: boolean;
  allowBlended?: boolean;
  allowCallControl?: boolean;
  allowCampStats?: boolean;
  allowChat?: boolean;
  allowChatStats?: boolean;
  allowChatVoiceConcurrent?: boolean;
  allowCrossGateRequeue?: boolean;
  allowDirectAgentTransfer?: "DIRECT_TRANSFER_DISABLED" | "ALLOW_DIRECT_TRANSFER_TO_SAME_GROUP" | "ALLOW_DIRECT_TRANSFER_TO_ANY_GROUP";
  allowEndcallforeveryone?: boolean;
  allowExternalChat?: boolean;
  allowFromIpAddresses?: string;
  allowGateStats?: boolean;
  allowHangup?: boolean;
  allowHistoricalDialing?: boolean;
  allowHold?: boolean;
  allowInbound?: boolean;
  allowInboundIntlTransfer?: boolean;
  allowLeadInserts?: boolean;
  allowLoginControl?: boolean;
  allowLoginUpdates?: boolean;
  allowManualCalls?: boolean;
  allowManualIntlCalls?: boolean;
  allowManualIntlTransfer?: boolean;
  allowManualOutboundGates?: boolean;
  allowManualPass?: boolean;
  allowOffHook?: boolean;
  allowOutbound?: boolean;
  allowRequeue?: boolean;
  allowSelfAgentStats?: boolean;
  allowTransfer?: boolean;
  altDefaultLoginDest?: string;
  chatQueueAssignments?: ReadonlyArray<number>;
  createdOn?: RingCentralVoiceApiSchemaDateTime;
  defaultAutoAnswerOn?: boolean;
  defaultLoginDest?: string;
  dialGroupAssignments?: ReadonlyArray<number>;
  directAgentExtension?: string;
  disableSupervisorMonitoring?: boolean;
  email?: string;
  enableSoftphone?: boolean;
  externalAgentId?: string;
  firstName?: string;
  gateAssignments?: ReadonlyArray<number>;
  gatesControlAgentVisibility?: boolean;
  ghostRnaAction?: string;
  groupId?: number;
  initLoginBaseState?: string;
  initLoginBaseStateId?: number;
  isActive?: boolean;
  lastLoginDate?: RingCentralVoiceApiSchemaDateTime;
  lastName?: string;
  loadBalanceEnabled?: boolean;
  location?: string;
  manualOutboundDefaultCallerId?: string;
  manualOutboundDefaultCallerIdE164?: string;
  manualOutboundDefaultGate?: RingCentralVoiceApiSchemaGate;
  maxChats?: number;
  multiAccountAgent?: boolean;
  parentAgentId?: number;
  password?: string;
  permissions?: ReadonlyArray<"CREATE" | "READ" | "UPDATE" | "DELETE" | "REPORT">;
  phoneLoginDialGroup?: RingCentralVoiceApiSchemaDialGroup;
  phoneLoginPin?: string;
  rcUserId?: number;
  regionalSettings?: RingCentralVoiceApiSchemaRegionalSettingRequestResponse;
  showLeadHistory?: boolean;
  sipPassword?: string;
  sipSafeUsername?: string;
  softphoneId?: number;
  team?: string;
  transientAgent?: boolean;
  transientDelete?: boolean;
  transientDeleteDate?: RingCentralVoiceApiSchemaDateTime;
  userManagedByRC?: boolean;
  username?: string;
  whereSupervisee?: ReadonlyArray<RingCentralVoiceApiSchemaAgentSupervisor>;
  whereSupervisor?: RingCentralVoiceApiSchemaCollectionAgentSupervisor;
};

export type RingCentralVoiceApiSchemaAgentRequest = {
  accountAccess?: ReadonlyArray<RingCentralVoiceApiSchemaAgentAccountAccess>;
  active?: boolean;
  agentAccountAccess?: ReadonlyArray<RingCentralVoiceApiSchemaAgentAccountAccess>;
  agentChatGroupAccess?: ReadonlyArray<RingCentralVoiceApiSchemaAgentChatGroupAccess>;
  agentChatQueueAccesses?: RingCentralVoiceApiSchemaCollectionAgentChatQueueAccess;
  agentDialGroupMembers?: RingCentralVoiceApiSchemaCollectionAgentDialGroupMember;
  agentGateAccess?: ReadonlyArray<RingCentralVoiceApiSchemaAgentGateAccess>;
  agentGateGroupAccess?: ReadonlyArray<RingCentralVoiceApiSchemaAgentGateGroupAccess>;
  agentGroup?: RingCentralVoiceApiSchemaAgentGroup;
  agentId?: number;
  agentLoadBalance?: RingCentralVoiceApiSchemaCollectionAgentLoadBalanceMember;
  agentLoadBalanceMembers?: RingCentralVoiceApiSchemaCollectionAgentLoadBalanceMember;
  agentRank?: number;
  agentSkillProfiles?: ReadonlyArray<RingCentralVoiceApiSchemaAgentSkillProfile>;
  agentType?: "AGENT" | "SUPERVISOR" | "MULTI_USER" | "MULTI_SUPERVISOR";
  allowAgentReports?: boolean;
  allowAgentStats?: boolean;
  allowAutoAnswer?: boolean;
  allowBlended?: boolean;
  allowCallControl?: boolean;
  allowCampStats?: boolean;
  allowChat?: boolean;
  allowChatStats?: boolean;
  allowChatVoiceConcurrent?: boolean;
  allowCrossGateRequeue?: boolean;
  allowDirectAgentTransfer?: "DIRECT_TRANSFER_DISABLED" | "ALLOW_DIRECT_TRANSFER_TO_SAME_GROUP" | "ALLOW_DIRECT_TRANSFER_TO_ANY_GROUP";
  allowEndcallforeveryone?: boolean;
  allowExternalChat?: boolean;
  allowFromIpAddresses?: string;
  allowGateStats?: boolean;
  allowHangup?: boolean;
  allowHistoricalDialing?: boolean;
  allowHold?: boolean;
  allowInbound?: boolean;
  allowInboundIntlTransfer?: boolean;
  allowLeadInserts?: boolean;
  allowLoginControl?: boolean;
  allowLoginUpdates?: boolean;
  allowManualCalls?: boolean;
  allowManualIntlCalls?: boolean;
  allowManualIntlTransfer?: boolean;
  allowManualOutboundGates?: boolean;
  allowManualPass?: boolean;
  allowOffHook?: boolean;
  allowOutbound?: boolean;
  allowRequeue?: boolean;
  allowSelfAgentStats?: boolean;
  allowTransfer?: boolean;
  altDefaultLoginDest?: string;
  chatQueueAssignments?: ReadonlyArray<number>;
  createdOn?: RingCentralVoiceApiSchemaDateTime;
  defaultAutoAnswerOn?: boolean;
  defaultLoginDest?: string;
  dialGroupAssignments?: ReadonlyArray<number>;
  directAgentExtension?: string;
  disableSupervisorMonitoring?: boolean;
  email?: string;
  enableSoftphone?: boolean;
  externalAgentId?: string;
  firstName?: string;
  gateAssignments?: ReadonlyArray<number>;
  gatesControlAgentVisibility?: boolean;
  ghostRnaAction?: string;
  groupId?: number;
  initLoginBaseState?: string;
  initLoginBaseStateId?: number;
  isActive?: boolean;
  lastLoginDate?: RingCentralVoiceApiSchemaDateTime;
  lastName?: string;
  loadBalanceEnabled?: boolean;
  location?: string;
  manualOutboundDefaultCallerId?: string;
  manualOutboundDefaultCallerIdE164?: string;
  manualOutboundDefaultGate?: RingCentralVoiceApiSchemaGate;
  maxChats?: number;
  multiAccountAgent?: boolean;
  parentAgentId?: number;
  password?: string;
  permissions?: ReadonlyArray<"CREATE" | "READ" | "UPDATE" | "DELETE" | "REPORT">;
  phoneLoginDialGroup?: RingCentralVoiceApiSchemaDialGroup;
  phoneLoginPin?: string;
  phoneNumbersI18nEnabled?: boolean;
  rcUserId?: number;
  regionalSettings?: RingCentralVoiceApiSchemaRegionalSettingRequestResponse;
  showLeadHistory?: boolean;
  sipPassword?: string;
  sipSafeUsername?: string;
  softphoneId?: number;
  team?: string;
  transientAgent?: boolean;
  transientDelete?: boolean;
  transientDeleteDate?: RingCentralVoiceApiSchemaDateTime;
  userManagedByRC?: boolean;
  username?: string;
  whereSupervisee?: ReadonlyArray<RingCentralVoiceApiSchemaAgentSupervisor>;
  whereSupervisor?: RingCentralVoiceApiSchemaCollectionAgentSupervisor;
};

export type RingCentralVoiceApiSchemaLeadManagerRequest = {
  campaignLeadSearchCriteria?: RingCentralVoiceApiSchemaCampaignLeadSearchCriteria;
  leadActionParams?: RingCentralVoiceApiSchemaLeadActionParams;
};

export type RingCentralVoiceApiSchemaLeadActionResult = {
  dialerRefreshed?: boolean;
  errorMessage?: string;
  leadActionType?: string;
  leadDeleteCount?: number;
  leadUpdateCount?: number;
  redialDeleteCount?: number;
  success?: boolean;
};

export type RingCentralVoiceApiSchemaCampaignLeadSearchCriteria = {
  address1?: string;
  address2?: string;
  agentDispositions?: ReadonlyArray<string>;
  agentId?: number;
  auxData1?: string;
  auxData2?: string;
  auxData3?: string;
  auxData4?: string;
  auxData5?: string;
  callerId?: string;
  campaignIds?: ReadonlyArray<number>;
  city?: string;
  emailAddress?: string;
  externIds?: ReadonlyArray<string>;
  firstName?: string;
  lastName?: string;
  lastPassTimeCriteria?: RingCentralVoiceApiSchemaDateTimeComparableSearchField;
  leadIds?: ReadonlyArray<number>;
  leadPassesCriteria?: RingCentralVoiceApiSchemaComparableSearchField;
  leadPhoneNum?: string;
  leadPhoneNumbers?: ReadonlyArray<string>;
  leadStates?: ReadonlyArray<"ACTIVE" | "AGENT-CALLBACK" | "CALLBACK-CANCELLED" | "CALLBACK" | "CANCELLED" | "COMPLETE" | "DISCONNECTED" | "DO-NOT-CALL" | "INTERCEPT" | "MAX-DIAL-LIMIT" | "PAUSED" | "PENDING-CALLBACK" | "PENDING-ERR" | "PENDING-HCI" | "PENDING" | "READY" | "TRANSITIONED" | "WHITELIST">;
  leadTimezones?: ReadonlyArray<RingCentralVoiceApiSchemaTimezone>;
  listIds?: ReadonlyArray<number>;
  loadedDtsEnd?: RingCentralVoiceApiSchemaDateTime;
  loadedDtsStart?: RingCentralVoiceApiSchemaDateTime;
  nextDialTimeCriteria?: RingCentralVoiceApiSchemaDateTimeComparableSearchField;
  orphanedLeadsOnly?: boolean;
  pendingAgentId?: number;
  physicalStates?: ReadonlyArray<string>;
  suppressed?: "ONLY_SUPPRESSED" | "ONLY_UNSUPPRESSED" | "ALL";
  systemDispositions?: ReadonlyArray<"ANSWER" | "NOANSWER" | "BUSY" | "MACHINE" | "INTERCEPT" | "DISCONNECT" | "ABANDON" | "CONGESTION" | "MANUAL_PASS" | "INBOUND_CALLBACK" | "APP_DNC" | "APP_REQUEUE" | "APP_REQUEUE_COMPLETE" | "APP_REQUEUE_ABANDON" | "INBOUND_ABANDON" | "API_BLOCKED" | "API_ERROR">;
  zip?: string;
};

export type RingCentralVoiceApiSchemaCampaignLeadSearchResultsView = {
  address1?: string;
  address2?: string;
  agentDispostion?: string;
  auxData1?: string;
  auxData2?: string;
  auxData3?: string;
  auxData4?: string;
  auxData5?: string;
  auxExternalUrl?: string;
  auxGreeting?: string;
  auxPhone?: string;
  callerId?: string;
  campaignId?: number;
  campaignLead?: RingCentralVoiceApiSchemaCampaignLead;
  campaignName?: string;
  city?: string;
  dialGroupId?: number;
  dupeKeyOverride?: number;
  email?: string;
  externId?: string;
  extraData?: string;
  firstName?: string;
  gateKeeper?: string;
  lastName?: string;
  lastPassAgentName?: string;
  lastPassDate?: RingCentralVoiceApiSchemaDateTime;
  lastPassDispo?: string;
  lastPassDisposition?: string;
  lastPassDts?: RingCentralVoiceApiSchemaDateTime;
  leadId?: number;
  leadPasses?: number;
  leadPhone?: string;
  leadState?: string;
  leadTimezone?: string;
  listDesc?: string;
  listId?: number;
  liveAnswerMessage?: string;
  loadedDts?: RingCentralVoiceApiSchemaDateTime;
  machAnswerMessage?: string;
  maxPasses?: number;
  midName?: string;
  nextDialTime?: RingCentralVoiceApiSchemaDateTime;
  pendingAgentName?: string;
  sortCol?: string;
  speedToLeadAgentConn?: number;
  speedToLeadFirstPass?: number;
  state?: string;
  stateDts?: RingCentralVoiceApiSchemaDateTime;
  suffix?: string;
  suppressed?: boolean;
  title?: string;
  uploadDate?: RingCentralVoiceApiSchemaDateTime;
  uploadedBy?: string;
  zip?: string;
};

export type RingCentralVoiceApiSchemaCampaignLead = {
  address1?: string;
  address2?: string;
  auxData1?: string;
  auxData2?: string;
  auxData3?: string;
  auxData4?: string;
  auxData5?: string;
  auxExternalUrl?: string;
  auxGreeting?: string;
  auxPhone?: string;
  callerId?: string;
  campaign?: RingCentralVoiceApiSchemaCampaign;
  campaignRedials?: ReadonlyArray<RingCentralVoiceApiSchemaCampaignRedial>;
  city?: string;
  dupeKeyOverride?: number;
  email?: string;
  extendedLeadData?: {
  readonly [key: string]: string | undefined;
};
  externId?: string;
  firstName?: string;
  gateKeeper?: string;
  id?: number;
  lastName?: string;
  lastPassDisposition?: "ANSWER" | "NOANSWER" | "BUSY" | "MACHINE" | "INTERCEPT" | "DISCONNECT" | "ABANDON" | "CONGESTION" | "MANUAL_PASS" | "INBOUND_CALLBACK" | "APP_DNC" | "APP_REQUEUE" | "APP_REQUEUE_COMPLETE" | "APP_REQUEUE_ABANDON" | "INBOUND_ABANDON" | "API_BLOCKED" | "API_ERROR";
  lastPassDts?: RingCentralVoiceApiSchemaDateTime;
  leadId?: number;
  leadPasses?: number;
  leadPhone?: string;
  leadPriority?: number;
  leadState?: "ACTIVE" | "AGENT-CALLBACK" | "CALLBACK-CANCELLED" | "CALLBACK" | "CANCELLED" | "COMPLETE" | "DISCONNECTED" | "DO-NOT-CALL" | "INTERCEPT" | "MAX-DIAL-LIMIT" | "PAUSED" | "PENDING-CALLBACK" | "PENDING-ERR" | "PENDING-HCI" | "PENDING" | "READY" | "TRANSITIONED" | "WHITELIST";
  leadTimezone?: string;
  liveAnswerMessage?: string;
  loadedDts?: RingCentralVoiceApiSchemaDateTime;
  machAnswerMessage?: string;
  maxPasses?: number;
  midName?: string;
  name?: string;
  nextDialTime?: RingCentralVoiceApiSchemaDateTime;
  quotaTargetIds?: ReadonlyArray<number>;
  quotaTargets?: RingCentralVoiceApiSchemaCollectionQuotaTarget;
  sortCol?: string;
  state?: string;
  stateDts?: RingCentralVoiceApiSchemaDateTime;
  suffix?: string;
  suppressed?: boolean;
  title?: string;
  zip?: string;
};

export type RingCentralVoiceApiSchemaLeadListProcessingRequest = {
  description?: string;
  dialPriority?: "IMMEDIATE" | "NORMAL";
  dncTags?: ReadonlyArray<string>;
  duplicateHandling?: "RETAIN_ALL" | "REMOVE_ALL_EXISTING" | "REMOVE_FROM_LIST";
  extendedLeadDataMappings?: {
  readonly [key: string]: number | undefined;
};
  fileContainsHeaders?: boolean;
  fileType?: "EXCEL" | "PIPE" | "COMMA" | "TAB";
  listState?: "ACTIVE" | "PAUSED" | "PENDING_DNC" | "LOADING" | "DELETED" | "READY" | "CALLBACKS" | "CALLBACKS_AGENT" | "DUPLICATES_NOT_MERGED" | "DUPLICATES_NOT_MOVED";
  pageColumnMappings?: {
  readonly [key: string]: number | undefined;
};
  pageNumber?: number;
  quoteChar?: string;
  timeZoneOption?: "NPA_NXX" | "ZIPCODE" | "EXPLICIT" | "NOT_APPLICABLE";
  transactionId?: string;
  uploadLeads?: ReadonlyArray<RingCentralVoiceApiSchemaCampaignLead>;
};

export type RingCentralVoiceApiSchemaLeadListProcessingResult = {
  deletedCount?: number;
  dncReturnedCount?: number;
  dncUploadCount?: number;
  hasDeletedLeads?: boolean;
  internalDncCount?: number;
  leadsAccepted?: number;
  leadsConverted?: number;
  leadsInserted?: number;
  leadsSupplied?: number;
  listState?: "ACTIVE" | "PAUSED" | "PENDING_DNC" | "LOADING" | "DELETED" | "READY" | "CALLBACKS" | "CALLBACKS_AGENT" | "DUPLICATES_NOT_MERGED" | "DUPLICATES_NOT_MOVED";
  message?: string;
  processingResult?: string;
  processingStatus?: "NO_LEADS_PASSED_VALIDATION" | "DNC_ACCOUNT_SETTINGS" | "DNC_UPLOAD_FAILED" | "DEFAULT_NOT_A_FAILURE" | "DNC_GREATER_ONE_DAY" | "GENERAL_FAILURE";
  quotaCount?: number;
  rejectedRows?: ReadonlyArray<RingCentralVoiceApiSchemaRejectedRow>;
  timeZoneOption?: "NPA_NXX" | "ZIPCODE" | "EXPLICIT" | "NOT_APPLICABLE";
  uploadFileName?: string;
  whitelistCount?: number;
};

export type RingCentralVoiceApiSchemaLeadListPreviewResponse = {
  mappingColumns?: ReadonlyArray<"LEAD_PHONE" | "EXTERN_ID" | "STATE" | "LEAD_TIMEZONE" | "PENDING_AGENT_ID" | "TITLE" | "FIRST_NAME" | "MID_NAME" | "LAST_NAME" | "SUFFIX" | "EMAIL" | "ADDRESS1" | "ADDRESS2" | "CITY" | "ZIP" | "GATE_KEEPER" | "AUX_DATA1" | "AUX_DATA2" | "AUX_DATA3" | "AUX_DATA4" | "AUX_DATA5" | "AUX_PHONE" | "AUX_EXTERNAL_URL" | "AUX_GREETING" | "LIVE_ANSWER_MESSAGE" | "MACH_ANSWER_MESSAGE" | "CALLER_ID" | "LEAD_PRIORITY">;
  pagePreviews?: ReadonlyArray<RingCentralVoiceApiSchemaLeadListPagePreview>;
  transactionId?: string;
};

export type RingCentralVoiceApiSchemaCountryCode = {
  countryCode?: string;
  countryId?: string;
  countryName?: string;
  maxAniLength?: number;
  maxUtcOffset?: number;
  minAniLength?: number;
  minUtcOffset?: number;
};

export type RingCentralVoiceApiSchemaDialGroup = {
  agentDialGroupMembers?: RingCentralVoiceApiSchemaCollectionAgentDialGroupMember;
  agentsReady?: number;
  allowLeadSearch?: string;
  allowPreviewLeadFilters?: boolean;
  billingKey?: string;
  campaigns?: RingCentralVoiceApiSchemaCollectionCampaign;
  dialGroupDesc?: string;
  dialGroupId?: number;
  dialGroupName?: string;
  dialMode?: "PREVIEW" | "CLICK_TO_TALK" | "PREDICTIVE" | "POWER" | "TCPA_SAFE_MODE";
  enableAbsolutePriority?: boolean;
  enableAgentFilter?: boolean;
  enableCallbacksAfterMaxDailyPass?: boolean;
  enableCallbacksAfterMaxpass?: boolean;
  enableListPriority?: boolean;
  groupId?: number;
  hciEnabled?: "DISABLED" | "HCI_FETCH" | "HCI_PACING";
  isActive?: boolean;
  maxLeadsReturned?: number;
  maxPorts?: number;
  minPredictiveAgents?: number;
  outdialServerGroupId?: number;
  permissions?: ReadonlyArray<"CREATE" | "READ" | "UPDATE" | "DELETE" | "REPORT">;
  progressiveCallDelay?: number;
  progressiveEnabled?: boolean;
  realTimeAgentData?: boolean;
  requireFetchedLeadsCalled?: boolean;
};

export type RingCentralVoiceApiSchemaAgentDialGroupMember = {
  agentId?: number;
  dialGroupId?: number;
  hciClicker?: boolean;
};

export type RingCentralVoiceApiSchemaCollectionAgent = {};

export type RingCentralVoiceApiSchemaCampaign = {
  abandonMsg?: string;
  afterCallBaseState?: string;
  afterCallState?: RingCentralVoiceApiSchemaAccountAuxState;
  agentConnectSoapService?: RingCentralVoiceApiSchemaRemoteHttpService;
  agentPopMessage?: string;
  agentTermSoapService?: RingCentralVoiceApiSchemaRemoteHttpService;
  allowLeadInserts?: string;
  allowLeadUpdates?: string;
  amdProfileId?: RingCentralVoiceApiSchemaAmdProfile;
  appUrl?: string;
  aux1Label?: string;
  aux2Label?: string;
  aux3Label?: string;
  aux4Label?: string;
  aux5Label?: string;
  billingCode?: string;
  callerId?: string;
  callerIdBucket?: RingCentralVoiceApiSchemaCallerIdBucket;
  campaignDesc?: string;
  campaignDispositions?: RingCentralVoiceApiSchemaCollectionCampaignDisposition;
  campaignFilterStates?: RingCentralVoiceApiSchemaCollectionCampaignFilterStates;
  campaignFilterTimezones?: RingCentralVoiceApiSchemaCollectionCampaignFilterTimezones;
  campaignId?: number;
  campaignName?: string;
  campaignPriority?: number;
  campaignRequeueShortcuts?: RingCentralVoiceApiSchemaCollectionRequeueShortcut;
  campaignResultDest?: RingCentralVoiceApiSchemaResultFileDestination;
  campaignUnlimitedFieldGroup?: RingCentralVoiceApiSchemaCampaignUnlimitedFieldGroup;
  campaignWhitelistTagMembers?: RingCentralVoiceApiSchemaCollectionWhitelistTagMembers;
  countryId?: string;
  customDialZoneGroup?: RingCentralVoiceApiSchemaCustomDialZoneGroups;
  dialGroup?: RingCentralVoiceApiSchemaDialGroup;
  dialLoadedOrder?: number;
  dispositionTimeout?: number;
  dncScrubOption?: "DO_NOT_SCRUB" | "INTERNAL_AND_NATIONAL" | "INTERNAL_ONLY" | "CELLULAR_AND_INTERNAL" | "CELLULAR_ONLY";
  enableGlobalPhoneBook?: boolean;
  endCallMsg?: string;
  endDate?: RingCentralVoiceApiSchemaDateTime;
  exportFlag?: boolean;
  filterEnabled?: string;
  filterType?: string;
  friSched?: string;
  genericKeyValuePairs?: string;
  groupId?: number;
  hangupOnDisposition?: number;
  isActive?: number;
  lastPassDts?: RingCentralVoiceApiSchemaTimestamp;
  liveAnswerMsg?: string;
  machAnswerMsg?: string;
  machineDetect?: boolean;
  maxDailyPasses?: number;
  maxDailyPassesInclude?: string;
  maxDialLimit?: number;
  maxPasses?: number;
  maxPassesExclude?: string;
  maxRingTime?: number;
  maxRingTimeTransfer?: number;
  minPredictiveCallsHistory?: number;
  monSched?: string;
  onHoldMsg?: string;
  passDelayMin?: number;
  pauseRecordingSec?: number;
  permissions?: ReadonlyArray<"CREATE" | "READ" | "UPDATE" | "DELETE" | "REPORT">;
  perspectiveRecordingMode?: "DISABLED" | "ALL_AGENT_LEGS";
  postCallSoapService?: RingCentralVoiceApiSchemaRemoteHttpService;
  postDispSoapService?: RingCentralVoiceApiSchemaRemoteHttpService;
  quotaGroup?: RingCentralVoiceApiSchemaQuotaGroup;
  realtimeDncUrl?: string;
  recordCall?: number;
  recordingInConference?: boolean;
  recordingSettings?: "RECORD_FULL_CALL" | "AGENT_FULL_CONTROL_DEFAULT_ON" | "AGENT_FULL_CONTROL_DEFAULT_OFF" | "AGENT_PAUSE";
  requeueType?: "ADVANCED" | "RESTRICTED";
  rescrubInterval?: number;
  satSched?: string;
  script?: RingCentralVoiceApiSchemaScript;
  scrubDisconnectNoanswer?: string;
  seedAbandonRate?: number;
  seedSuccessRate?: number;
  showLeadInfo?: number;
  showLeadPasses?: boolean;
  showListName?: boolean;
  singleChannelEnabled?: boolean;
  startDate?: RingCentralVoiceApiSchemaDateTime;
  stopRecordingOnTransfer?: boolean;
  sunSched?: string;
  survey?: RingCentralVoiceApiSchemaSurvey;
  surveyPopType?: string;
  targetAbandonRate?: number;
  thuSched?: string;
  trackSpeedToLead?: string;
  transferCallerId?: string;
  transferTermSoapService?: RingCentralVoiceApiSchemaRemoteHttpService;
  tueSched?: string;
  useGlobalWhitelist?: boolean;
  wedSched?: string;
  whisperMsg?: string;
};

export type RingCentralVoiceApiSchemaGateGroup = {
  billingKey?: string;
  createdOn?: RingCentralVoiceApiSchemaDateTime;
  endDate?: RingCentralVoiceApiSchemaDateTime;
  gateGroupId?: number;
  gates?: ReadonlyArray<RingCentralVoiceApiSchemaGate>;
  groupName?: string;
  groupSkills?: ReadonlyArray<RingCentralVoiceApiSchemaGateGroupSkill>;
  permissions?: ReadonlyArray<"CREATE" | "READ" | "UPDATE" | "DELETE" | "REPORT">;
  startDate?: RingCentralVoiceApiSchemaDateTime;
};

export type RingCentralVoiceApiSchemaGate = {
  abandonCampaign?: RingCentralVoiceApiSchemaCampaign;
  acceptTime?: string;
  afterCallBaseState?: string;
  afterCallState?: RingCentralVoiceApiSchemaAccountAuxState;
  agentConnSoapService?: RingCentralVoiceApiSchemaRemoteHttpService;
  agentGateAccess?: ReadonlyArray<RingCentralVoiceApiSchemaAgentGateAccess>;
  agentPopMessage?: string;
  agentTermSoapService?: RingCentralVoiceApiSchemaRemoteHttpService;
  appUrl?: string;
  backupAppUrl?: string;
  billingCode?: string;
  blockedAniMessage?: string;
  callbackCampaign?: RingCentralVoiceApiSchemaCampaign;
  createdOn?: RingCentralVoiceApiSchemaDateTime;
  dequeueDelay?: number;
  dequeueSoapService?: RingCentralVoiceApiSchemaRemoteHttpService;
  dispositionTimeout?: number;
  enableGlobalPhoneBook?: boolean;
  enableIvrTokens?: boolean;
  endCallMessage?: string;
  fifoDisabled?: boolean;
  friSched?: string;
  gateClosedEvent?: string;
  gateDesc?: string;
  gateGroup?: RingCentralVoiceApiSchemaGateGroup;
  gateId?: number;
  gateName?: string;
  gateOpen?: boolean;
  gatePriority?: number;
  gatePriorityGroup?: RingCentralVoiceApiSchemaGatePriorityGroup;
  gateQueueEvents?: ReadonlyArray<RingCentralVoiceApiSchemaGateQueueEvent>;
  hangupOnDisposition?: boolean;
  isActive?: boolean;
  longCallTime?: number;
  manualCallerId?: string;
  manualCallerIdE164?: string;
  maxQueueEvent?: string;
  maxQueueLimit?: number;
  monSched?: string;
  noAgentEvent?: string;
  observeDst?: boolean;
  onHoldMessage?: string;
  outboundCallerId?: string;
  pauseRecordingSec?: number;
  permissions?: ReadonlyArray<"CREATE" | "READ" | "UPDATE" | "DELETE" | "REPORT">;
  perspectiveRecordingMode?: "DISABLED" | "ALL_AGENT_LEGS";
  phoneNumbersI18nEnabled?: boolean;
  postCallSoapService?: RingCentralVoiceApiSchemaRemoteHttpService;
  postDispSoapService?: RingCentralVoiceApiSchemaRemoteHttpService;
  recordCall?: number;
  recordingInConference?: boolean;
  recordingSettings?: "RECORD_FULL_CALL" | "AGENT_FULL_CONTROL_DEFAULT_ON" | "AGENT_FULL_CONTROL_DEFAULT_OFF" | "AGENT_PAUSE";
  requeueType?: "ADVANCED" | "RESTRICTED";
  resultFileDestination?: RingCentralVoiceApiSchemaResultFileDestination;
  revMatch?: boolean;
  satSched?: string;
  script?: RingCentralVoiceApiSchemaScript;
  shortAbandonTime?: number;
  shortCallTime?: number;
  singleChannelEnabled?: boolean;
  slaTime?: number;
  specialAniEvent?: string;
  stopRecordingOnTransfer?: boolean;
  sunSched?: string;
  survey?: RingCentralVoiceApiSchemaSurvey;
  surveyPopType?: string;
  syncQueueWait?: number;
  throttleCalls?: number;
  throttleDays?: number;
  throttlingAniEvent?: string;
  thuSched?: string;
  transferCallerId?: string;
  transferCallerIdE164?: string;
  transferTermSoapService?: RingCentralVoiceApiSchemaRemoteHttpService;
  ttAccept?: boolean;
  tueSched?: string;
  wedSched?: string;
  whisperMessage?: string;
  wrapTime?: number;
};

export type RingCentralVoiceApiSchemaAgentGateAccess = {
  agentId?: number;
  agentRank?: number;
  defaultDestOverride?: string;
  gateId?: number;
};

export type RingCentralVoiceApiSchemaGateDisposition = {
  destCampaign?: RingCentralVoiceApiSchemaCampaign;
  dispSoapService?: RingCentralVoiceApiSchemaRemoteHttpService;
  disposition?: string;
  dncTagLabel?: string;
  doNotCall?: boolean;
  dtmfMapping?: string;
  emailDestinations?: string;
  emailTemplate?: RingCentralVoiceApiSchemaEmailTemplate;
  gateDispositionId?: number;
  isComplete?: boolean;
  isContact?: boolean;
  isDefault?: boolean;
  isDisabled?: boolean;
  isRequeued?: number;
  isSuccess?: boolean;
  rank?: number;
  requeueDelay?: number;
  requireNote?: boolean;
  saveSurvey?: boolean;
  setAgentFlag?: boolean;
  timeout?: number;
  xfer?: string;
  xferDest?: string;
};

export type RingCentralVoiceApiSchemaGatesLoggedInAgentsView = {
  agentGroupId?: number;
  agentId?: number;
  firstName?: string;
  groupName?: string;
  lastName?: string;
  username?: string;
};

export type RingCentralVoiceApiSchemaGateQueueEvent = {
  enableDtmf?: string;
  eventDuration?: number;
  eventId?: number;
  eventRank?: number;
  gate?: RingCentralVoiceApiSchemaGate;
  queueEvent?: string;
};

export type RingCentralVoiceApiSchemaGateQueueDtmfEvent = {
  dtmf?: string;
  dtmfEvent?: string;
  dtmfEventId?: number;
};

export type RingCentralVoiceApiSchemaPhoneBookEntry = {
  accountId?: string;
  countryId?: string;
  dateCreated?: RingCentralVoiceApiSchemaDateTime;
  destName?: string;
  destination?: string;
  entryId?: number;
  notes?: string;
  type?: "GATE" | "GLOBAL" | "CAMPAIGN";
  typeId?: number;
};

export type RingCentralVoiceApiSchemaRequeueShortcut = {
  campaign?: RingCentralVoiceApiSchemaCampaign;
  gate?: RingCentralVoiceApiSchemaGate;
  groupSkill?: RingCentralVoiceApiSchemaGateGroupSkill;
  name?: string;
  rank?: number;
  requeueGate?: RingCentralVoiceApiSchemaGate;
  requeueGateGroup?: RingCentralVoiceApiSchemaGateGroup;
  requeueShortcutId?: number;
};

export type RingCentralVoiceApiSchemaGateScheduleOverride = {
  overrideClosedEvent?: string;
  overrideDate?: RingCentralVoiceApiSchemaDateTime;
  overrideLabel?: string;
  overrideSched?: string;
  scheduleOverrideId?: number;
};

export type RingCentralVoiceApiSchemaActiveStateBoolean = {
  isActive?: boolean;
};

export type RingCentralVoiceApiSchemaGateSpecialAni = {
  ani?: string;
  aniE164?: string;
  dateAdded?: RingCentralVoiceApiSchemaDateTime;
  phoneNumbersI18nEnabled?: boolean;
  type?: string;
};

export type RingCentralVoiceApiSchemaGateGroupSkill = {
  active?: boolean;
  agentSkillProfiles?: RingCentralVoiceApiSchemaCollectionAgentSkillProfile;
  createdOn?: RingCentralVoiceApiSchemaDateTime;
  requeueShortcut?: ReadonlyArray<RingCentralVoiceApiSchemaRequeueShortcut>;
  skillDesc?: string;
  skillId?: number;
  skillName?: string;
  whisperAudio?: string;
};

export type RingCentralVoiceApiSchemaReportCriteria = {
  accountId?: string;
  criteriaType?: "DIALER_RESULT_DOWNLOAD_CRITERIA" | "GLOBAL_CALL_TYPE_CRITERIA" | "IVR_DETAIL_CRITERIA" | "TFN_DID_MANAGER_CRITERIA" | "ALL_CALLS_CRITERIA" | "CASPER_CRITERIA";
  databaseTimezone?: string;
  endDate?: RingCentralVoiceApiSchemaDateTime;
  endDateRange?: RingCentralVoiceApiSchemaTimeRange;
  scheduleTimezoneName?: string;
  startDate?: RingCentralVoiceApiSchemaDateTime;
  startDateRange?: RingCentralVoiceApiSchemaTimeRange;
  timezoneName?: string;
};

export type RingCentralVoiceApiSchemaUser = {
  children?: ReadonlyArray<RingCentralVoiceApiSchemaUser>;
  creationDate?: RingCentralVoiceApiSchemaDateTime;
  enabled?: boolean;
  firstName?: string;
  fullName?: string;
  lastName?: string;
  parentPath?: string;
  phoneNumber?: string;
  phoneNumberE164?: string;
  phoneNumbersI18nEnabled?: boolean;
  rcAccountId?: string;
  rcUserId?: number;
  regionalSettings?: RingCentralVoiceApiSchemaRegionalSettingRequestResponse;
  roles?: ReadonlyArray<RingCentralVoiceApiSchemaRole>;
  rootUser?: boolean;
  userId?: number;
  userManagedByRC?: boolean;
  userName?: string;
};

export type RingCentralVoiceApiSchemaAdminUserRequest = {
  children?: ReadonlyArray<RingCentralVoiceApiSchemaUser>;
  creationDate?: RingCentralVoiceApiSchemaDateTime;
  enabled?: boolean;
  firstName?: string;
  fullName?: string;
  lastName?: string;
  parentPath?: string;
  phoneNumber?: string;
  phoneNumberE164?: string;
  phoneNumbersI18nEnabled?: boolean;
  rcAccountId?: string;
  rcUserId?: number;
  regionalSettings?: RingCentralVoiceApiSchemaRegionalSettingRequestResponse;
  roles?: ReadonlyArray<RingCentralVoiceApiSchemaRole>;
  rootUser?: boolean;
  userId?: number;
  userManagedByRC?: boolean;
  userName?: string;
};

export type RingCentralVoiceApiSchemaUserLoginView = {
  accounts?: ReadonlyArray<RingCentralVoiceApiSchemaAccountView>;
  authToken?: string;
  platformHost?: string;
  user?: RingCentralVoiceApiSchemaUser;
};

export type RingCentralVoiceApiSchemaSubAccount = {
  subAccountId: string;
  subAccountName: string;
  isActive: boolean;
};

export type RingCentralVoiceApiSchemaErrors = {
  cause?: string;
  details?: string;
  developerMessage?: string;
  generalMessage?: string;
  requestUri?: string;
  timestamp?: number;
  validationErrors?: ReadonlyArray<RingCentralVoiceApiSchemaValidationErrorData>;
};

export type RingCentralVoiceApiSchemaInteractionMetadataRequest = {
  segmentEndTime: string;
  timeInterval: number;
  timeZone: string;
};

export type RingCentralVoiceApiSchemaWEMInteractionSegmentMetaData2Array = ReadonlyArray<RingCentralVoiceApiSchemaWEMDialogSegmentMetaData>;

export type RingCentralVoiceApiSchemaRCInteractionTranscriptData = {
  channelClass?: string;
  errorCode?: string | null;
  errorMessage?: string | null;
  transcript?: ReadonlyArray<RingCentralVoiceApiSchemaTranscriptPhrase>;
};

export type RingCentralVoiceApiSchemaQueueGroup = {
  queueGroupId?: number;
  groupName?: string;
  queueGroupType?: "VOICE" | "DIGITAL";
};

export type RingCentralVoiceApiSchemaCXQueueWithAgents = {
  queueId: number;
  queueType?: "VOICE" | "DIGITAL";
  queueName: string;
  queueGroupId: number;
  isActive: boolean;
  createdOn: string;
  agentIds?: ReadonlyArray<number>;
};

export type RingCentralVoiceApiSchemaAggregatedIntegrationParams = {
  startDate: string;
  endDate: string;
  timeInterval: number;
  timeZone: string;
  outputFormat?: "CSV" | "XML";
};

export type RingCentralVoiceApiSchemaAggregatedQueueStats = {
  dateTimeFrom?: string;
  interval?: number;
  queue?: number;
  queueName?: string;
  offdDirectIxnCnt?: number;
  answIxnCnt?: number;
  abandIxnCnt?: number;
  abandShortIxnCnt?: number;
  abandWithinSlCnt?: number;
  ansServicelevelCnt?: number;
  completedContacts?: number;
  queuedAndAnswIxnDur?: number;
  queuedAndAbandIxnDur?: number;
  queuedAnswLongestQueDur?: number;
  queuedAbandLongestQueDur?: number;
  talkingIxnDur?: number;
  wrapUpDur?: number;
  waitDur?: number;
  segmentHoldTime?: number;
  overflowInIxnCnt?: number;
  overflowOutIxnCnt?: number;
};

export type RingCentralVoiceApiSchemaExtendedAggregatedQueueStats = {
  interval?: number;
  dateTimeFrom?: string;
  agentId?: number;
  agentName?: string;
  queue?: number;
  queueName?: string;
  talkingIxnDur?: number;
  wrapUpDur?: number;
  answIxnCnt?: number;
  transferOutIxnCnt?: number;
};

export type RingCentralVoiceApiSchemaAggregatedAgentStats = {
  interval?: number;
  dateTimeFrom?: string;
  agentId?: number;
  agentName?: string;
  availDur?: number;
  totWorkDur?: number;
  pauseDur?: number;
  waitDur?: number;
  adminDur?: number;
  directOutIxnCnt?: number;
  directOutIxnDur?: number;
  directInIxnCnt?: number;
  directInIxnDur?: number;
};

export type RingCentralVoiceApiSchemaDnisBulkUpdateRequest = {
  assignedDnis?: RingCentralVoiceApiSchemaAssignedDnisBulkUpdateDTO;
  assignedSmsDnis?: RingCentralVoiceApiSchemaAssignedSmsDnisBulkUpdateDTO;
  dnisPool?: ReadonlyArray<RingCentralVoiceApiSchemaDnisPoolDTO>;
  general?: RingCentralVoiceApiSchemaGeneralDTO;
  mediaCodes?: RingCentralVoiceApiSchemaMediaCodeDTO;
};

export type RingCentralVoiceApiSchemaDnisListRequest = {
  accountIds?: ReadonlyArray<string>;
  dnisState?: string;
  phoneNumbersI18nEnabled?: boolean;
  searchText?: string;
};

export type RingCentralVoiceApiSchemaDnisPool = {
  active?: boolean;
  assignedDnis?: RingCentralVoiceApiSchemaAssignedDnis;
  assignedSmsDnis?: RingCentralVoiceApiSchemaAssignedSmsDnis;
  carrier?: string;
  customAppString?: string;
  dateCreated?: RingCentralVoiceApiSchemaDateTime;
  dnis?: string;
  dnisCategory?: string;
  dnisDescription?: string;
  dnisE164?: string;
  dnisManagedByRC?: boolean;
  inboundContext?: string;
  lastModified?: RingCentralVoiceApiSchemaDateTime;
  lastModifiedBy?: string;
  mediaCode?: string;
  mediaFormat?: string;
  mediaIsci?: string;
  mediaLength?: string;
  mediaMarket?: string;
  mediaNetwork?: string;
  mediaUrl?: string;
  mediaVersion?: string;
  mediaWebSourcecode?: string;
  notes?: string;
  originatingDnis?: string;
  phoneNumbersI18nEnabled?: boolean;
  platformId?: string;
  reservedAccount?: RingCentralVoiceApiSchemaAccount;
  reservedAccountId?: string;
  resporg?: string;
  smsEnabled?: boolean;
  twilioApiKey?: string;
  vendorId?: string;
  vruNetworkId?: number;
};

export type RingCentralVoiceApiSchemaDnisBulkUpdateRespose = {
  message?: string;
  status?: string;
  updatedRows?: string;
};

export type RingCentralVoiceApiSchemaDnisListPreviewResponse = {
  records?: ReadonlyArray<RingCentralVoiceApiSchemaBaseCsvDto>;
  uploadStatus?: RingCentralVoiceApiSchemaDnisResponseValidation;
};

export type RingCentralVoiceApiSchemaUpdateProductReq = {
  productType: "QUEUE" | "CAMPAIGN";
  productId: number;
  subAccountId: string;
  mainAccountId?: string;
  rcAccountId?: string;
  streamingUrl: string;
  secret?: string;
};

export type RingCentralVoiceApiSchemaProductResponse = {
  subAccountId: string;
  mainAccountId: string;
  productType: "QUEUE" | "CAMPAIGN";
  productId: number;
  rcAccountId?: string;
  streamingUrl?: string;
  secret?: string;
};

export type RingCentralVoiceApiSchemaCreateProductReq = {
  productType: "QUEUE" | "CAMPAIGN";
  productId: number;
  subAccountId: string;
  mainAccountId: string;
  rcAccountId: string;
  streamingUrl: string;
  secret?: string;
};

export type RingCentralVoiceApiSchemaAgentV2 = {
  accountId?: string;
  accountName?: string;
  agentGroupId?: number;
  agentId?: number;
  agentRank?: number;
  agentType?: string;
  allowLoginControl?: boolean;
  allowLoginUpdates?: boolean;
  altDefaultLoginDest?: string;
  directAgentExtension?: string;
  email?: string;
  enableSoftphone?: boolean;
  externalAgentId?: string;
  firstName?: string;
  ghostRnaAction?: string;
  initLoginBaseState?: string;
  lastName?: string;
  location?: string;
  manualOutboundDefaultCallerId?: string;
  maxChats?: number;
  password?: string;
  phoneLoginPin?: string;
  rcUserId?: number;
  team?: string;
  username?: string;
};

export type RingCentralVoiceApiSchemaContact = {
  businessPhone?: string;
  company?: string;
  department?: string;
  email?: string;
  emailAsLoginName?: boolean;
  firstName?: string;
  jobTitle?: string;
  lastName?: string;
  mobilePhone?: string;
};

export type RingCentralVoiceApiSchemaDateTime = {
  afterNow?: boolean;
  beforeNow?: boolean;
  centuryOfEra?: number;
  chronology?: RingCentralVoiceApiSchemaChronology;
  dayOfMonth?: number;
  dayOfWeek?: number;
  dayOfYear?: number;
  equalNow?: boolean;
  era?: number;
  hourOfDay?: number;
  millis?: number;
  millisOfDay?: number;
  millisOfSecond?: number;
  minuteOfDay?: number;
  minuteOfHour?: number;
  monthOfYear?: number;
  secondOfDay?: number;
  secondOfMinute?: number;
  weekOfWeekyear?: number;
  weekyear?: number;
  year?: number;
  yearOfCentury?: number;
  yearOfEra?: number;
  zone?: RingCentralVoiceApiSchemaDateTimeZone;
};

export type RingCentralVoiceApiSchemaAuditLogResult = {
  attributeName?: string;
  classType?: string;
  newValue?: {};
  originalValue?: {};
};

export type RingCentralVoiceApiSchemaAuditLogAuthenticatedUser = {
  firstName?: string;
  fullJson?: string;
  lastName?: string;
  sourceId?: string;
  userId?: string;
  userName?: string;
};

export type RingCentralVoiceApiSchemaAccount = {
  accountId?: string;
  accountName?: string;
  amdDefaultProfile?: number;
  archivedAccount?: boolean;
  audioRetentionDays?: number;
  concurrentLogins?: number;
  crmHost?: string;
  crmInstance?: string;
  crmPwd?: string;
  crmUid?: string;
  dataRetentionDays?: number;
  databaseShardId?: string;
  defaultCallerid?: string;
  defaultHold?: string;
  defaultIntellidialServerId?: number;
  defaultOutdialServerGroupId?: number;
  dncOrgId?: string;
  dncOrgIdConfirmed?: boolean;
  emailFromAddress?: string;
  enable247Dialing?: boolean;
  enableAgentRankRouting?: boolean;
  enableAmdProfiles?: boolean;
  enableBlankCallerid?: boolean;
  enableCallEventTracking?: boolean;
  enableCellScrubbing?: boolean;
  enableCentralizedData?: boolean;
  enableChat?: boolean;
  enableCloudRouting?: boolean;
  enableCorporateDirectory?: boolean;
  enableCrmExport?: boolean;
  enableFifo?: boolean;
  enableFolderMode?: boolean;
  enableForceLegacy?: boolean;
  enableGoodData?: boolean;
  enableHciDialer?: boolean;
  enableInbound?: boolean;
  enableIntlOutbound?: boolean;
  enableListLoading?: boolean;
  enableMultiuser?: boolean;
  enableOutbound?: boolean;
  enableOutboundPredictive?: boolean;
  enableScheduledTasks?: boolean;
  enableSoftphones?: boolean;
  enableTaskMode?: boolean;
  enableTcpaSafeMachineDetect?: boolean;
  enableTracking?: boolean;
  enableVisualIvr?: boolean;
  enableVoiceBroadcast?: boolean;
  endDate?: RingCentralVoiceApiSchemaDateTime;
  ftpHost?: string;
  ftpPwd?: string;
  ftpUid?: string;
  ivrAppsEnabled?: boolean;
  mainAccount?: RingCentralVoiceApiSchemaMainAccount;
  mainAccountId?: string;
  mainAccountName?: string;
  maxBreakTime?: number;
  maxLunchTime?: number;
  maxOutPortsPerAgent?: number;
  minimumSec?: number;
  notificationEmail?: string;
  offHookHold?: string;
  offHookWhisper?: string;
  offHookWhisperGhost?: string;
  offhookCallerid?: string;
  outboundManualDefaultRingtime?: number;
  outboundPrepay?: boolean;
  overrideDispositions?: number;
  pciCompliance?: boolean;
  pciComplianceRequest?: boolean;
  phoneRecordingPin?: number;
  primaryTimezone?: number;
  rcAccountAccess?: "DISABLED" | "ENABLED" | "REQUIRED";
  recordingAccessMode?: "ANONYMOUS" | "ACCOUNT" | "RIGHTS_DOC" | "DISABLED";
  recordingFilenameFormat?: string;
  recordingsDelivery?: string;
  rounding?: number;
  securityKey?: string;
  softphoneHost?: string;
  softphoneWsdl?: string;
  startDate?: RingCentralVoiceApiSchemaDateTime;
  tcpaSafeMode?: boolean;
  usePowerBy?: boolean;
  weekOffset?: number;
  wfmType?: "GENERIC" | "GENERIC_UDP" | "ASPECT" | "AC2" | "PIPKINS" | "MONET" | "NONE";
};

export type RingCentralVoiceApiSchemaCollectionAgentAccountAccess = {};

export type RingCentralVoiceApiSchemaAgentAccountAccess = {
  account?: RingCentralVoiceApiSchemaAccount;
  accountId?: string;
  accountName?: string;
  agent?: RingCentralVoiceApiSchemaAgent;
  agentId?: number;
  name?: string;
};

export type RingCentralVoiceApiSchemaAgentChatGroupAccess = {
  agentId?: number;
  chatGroupId?: number;
};

export type RingCentralVoiceApiSchemaCollectionAgentChatQueueAccess = {};

export type RingCentralVoiceApiSchemaCollectionAgentDialGroupMember = {};

export type RingCentralVoiceApiSchemaCollectionAgentGateAccess = {};

export type RingCentralVoiceApiSchemaAgentGateGroupAccess = {
  agentId?: number;
  gateGroupId?: number;
};

export type RingCentralVoiceApiSchemaCollectionAgentLoadBalanceMember = {};

export type RingCentralVoiceApiSchemaCollectionAgentSkillProfile = {};

export type RingCentralVoiceApiSchemaRegionalSettingRequestResponse = {
  formattingLocale?: string;
  greetingLanguage?: string;
  homeCountry?: number;
  homeCountryCode?: string;
  language?: string;
  timeFormat?: string;
  timezone?: number;
};

export type RingCentralVoiceApiSchemaAgentSupervisor = {
  agentId?: number;
  supervisorId?: number;
};

export type RingCentralVoiceApiSchemaCollectionAgentSupervisor = {};

export type RingCentralVoiceApiSchemaAgentSkillProfile = {
  chatGroupSkills?: ReadonlyArray<RingCentralVoiceApiSchemaChatGroupSkill>;
  createdOn?: RingCentralVoiceApiSchemaDateTime;
  default?: boolean;
  gateGroupSkills?: ReadonlyArray<RingCentralVoiceApiSchemaGateGroupSkill>;
  groupSkills?: ReadonlyArray<RingCentralVoiceApiSchemaGateGroupSkill>;
  isDefault?: boolean;
  profileDesc?: string;
  profileId?: number;
  profileName?: string;
};

export type RingCentralVoiceApiSchemaLeadActionParams = {
  paramMap?: {};
};

export type RingCentralVoiceApiSchemaDateTimeComparableSearchField = {
  operator?: "GREATER_THAN" | "LESS_THAN" | "EQUALS";
  value?: RingCentralVoiceApiSchemaDateTime;
};

export type RingCentralVoiceApiSchemaComparableSearchField = {
  operator?: "GREATER_THAN" | "LESS_THAN" | "EQUALS";
  value?: {};
};

export type RingCentralVoiceApiSchemaTimezone = {
  description?: string;
  name?: string;
};

export type RingCentralVoiceApiSchemaCampaignRedial = {
  agentId?: number;
  callBackDate?: RingCentralVoiceApiSchemaDateTime;
  callBackPhone?: string;
  campaignLead?: RingCentralVoiceApiSchemaCampaignLead;
  campaignPass?: RingCentralVoiceApiSchemaCampaignPass;
  id?: number;
  name?: string;
  redialId?: number;
};

export type RingCentralVoiceApiSchemaCollectionQuotaTarget = {};

export type RingCentralVoiceApiSchemaRejectedRow = {
  message?: string;
  rowData?: ReadonlyArray<string>;
};

export type RingCentralVoiceApiSchemaLeadListPagePreview = {
  pageName?: string;
  pageNumber?: number;
  rowData?: ReadonlyArray<ReadonlyArray<string>>;
};

export type RingCentralVoiceApiSchemaCollectionCampaign = {};

export type RingCentralVoiceApiSchemaAccountAuxState = {
  agentAuxState?: string;
  baseAgentState?: RingCentralVoiceApiSchemaBaseAgentState;
  description?: string;
  isActive?: boolean;
  isAgentSelectable?: boolean;
  isRequired?: boolean;
  rank?: number;
  stateId?: number;
};

export type RingCentralVoiceApiSchemaRemoteHttpService = {
  accountId?: string;
  enableMappings?: boolean;
  httpPassword?: string;
  httpServiceConfig?: string;
  httpServiceGroup?: RingCentralVoiceApiSchemaRemoteHttpServiceGroup;
  httpServiceInputs?: RingCentralVoiceApiSchemaCollectionRemoteHttpServiceInput;
  httpUsername?: string;
  isDebug?: boolean;
  isEnabled?: boolean;
  permissions?: ReadonlyArray<"CREATE" | "READ" | "UPDATE" | "DELETE" | "REPORT">;
  returntype?: string;
  sendAllSurveyData?: boolean;
  serviceDescription?: string;
  serviceId?: number;
  serviceType?: "SOAP" | "HTTP_POST" | "HTTP_GET" | "HTTP";
  soapAction?: string;
  soapEndpoint?: string;
  soapOperationname?: string;
  soapPortname?: string;
  soapServicename?: string;
  targetNamespace?: string;
};

export type RingCentralVoiceApiSchemaAmdProfile = {
  accountId?: string;
  amdAfterGreetingSilence?: number;
  amdBetweenWordSilence?: number;
  amdGreeting?: number;
  amdInitSilence?: number;
  amdMaxWords?: number;
  amdMinWordLength?: number;
  amdProfileId?: number;
  amdProfileName?: string;
  amdSilenceThreshold?: number;
  amdTotalTime?: number;
  countOfCampaigns?: number;
  systemDefault?: boolean;
  systemProfile?: boolean;
};

export type RingCentralVoiceApiSchemaCallerIdBucket = {
  accountId?: string;
  active?: boolean;
  bucketId?: number;
  bucketName?: string;
  bwOrderId?: string;
  callerIdBucketNumbers?: ReadonlyArray<RingCentralVoiceApiSchemaCallerIdBucketNumber>;
  callerIdName?: string;
  createDate?: RingCentralVoiceApiSchemaDateTime;
  excludedStates?: ReadonlyArray<string>;
  forwardingDid?: string;
  forwardingDidE164?: string;
  isActive?: boolean;
  orderStatus?: "PENDING" | "COMPLETE" | "FAILED" | "DISCONNECT";
  phoneNumbersI18nEnabled?: boolean;
};

export type RingCentralVoiceApiSchemaCollectionCampaignDisposition = {};

export type RingCentralVoiceApiSchemaCollectionCampaignFilterStates = {};

export type RingCentralVoiceApiSchemaCollectionCampaignFilterTimezones = {};

export type RingCentralVoiceApiSchemaCollectionRequeueShortcut = {};

export type RingCentralVoiceApiSchemaResultFileDestination = {
  aggregateOutput?: string;
  destType?: string;
  destinationId?: number;
  destinationName?: string;
  emailDest?: string;
  ftpDir?: string;
  ftpPwd?: string;
  ftpServer?: string;
  ftpUid?: string;
  passive?: string;
  sendEmptyFiles?: string;
  sftp?: string;
};

export type RingCentralVoiceApiSchemaCampaignUnlimitedFieldGroup = {
  campaigns?: ReadonlyArray<RingCentralVoiceApiSchemaCampaign>;
  extraDataMappings?: string;
  groupName?: string;
  unlimitedFieldGroupId?: number;
};

export type RingCentralVoiceApiSchemaCollectionWhitelistTagMembers = {};

export type RingCentralVoiceApiSchemaCustomDialZoneGroups = {
  accountId?: string;
  baseTimezone?: string;
  customDialZones?: RingCentralVoiceApiSchemaCollectionCustomDialZone;
  zoneGroupId?: number;
  zoneGroupName?: string;
};

export type RingCentralVoiceApiSchemaTimestamp = {
  date?: number;
  day?: number;
  hours?: number;
  minutes?: number;
  month?: number;
  nanos?: number;
  seconds?: number;
  time?: number;
  timezoneOffset?: number;
  year?: number;
};

export type RingCentralVoiceApiSchemaQuotaGroup = {
  active?: boolean;
  campaigns?: RingCentralVoiceApiSchemaCollectionCampaign;
  isActive?: boolean;
  quotaGroupId?: number;
  quotaGroupName?: string;
  quotaTargets?: RingCentralVoiceApiSchemaCollectionQuotaTarget;
};

export type RingCentralVoiceApiSchemaScript = {
  account?: RingCentralVoiceApiSchemaAccount;
  created?: RingCentralVoiceApiSchemaDateTime;
  description?: string;
  groupId?: number;
  isActive?: boolean;
  name?: string;
  permissions?: ReadonlyArray<"CREATE" | "READ" | "UPDATE" | "DELETE" | "REPORT">;
  scriptGroup?: RingCentralVoiceApiSchemaScriptGroup;
  scriptId?: number;
  updated?: RingCentralVoiceApiSchemaDateTime;
};

export type RingCentralVoiceApiSchemaSurvey = {
  accountId?: string;
  active?: string;
  enableTokens?: number;
  exportFlag?: string;
  headingCss?: string;
  lastModified?: RingCentralVoiceApiSchemaTimestamp;
  name?: string;
  submitText?: string;
  surveyDesc?: string;
  surveyId?: number;
  surveyName?: string;
  tableCss?: string;
  textCss?: string;
};

export type RingCentralVoiceApiSchemaGatePriorityGroup = {
  gatePriorityGroupId?: number;
  gatePriorityGroupName?: string;
};

export type RingCentralVoiceApiSchemaEmailTemplate = {
  accountId?: string;
  allowBccChange?: boolean;
  allowBodyChange?: boolean;
  allowCcChange?: boolean;
  allowFromChange?: boolean;
  allowSubjectChange?: boolean;
  allowToChange?: boolean;
  emailBcc?: string;
  emailCc?: string;
  emailFrom?: string;
  emailRte?: string;
  emailSubject?: string;
  emailTemplateId?: number;
  emailTo?: string;
  sendFormat?: string;
  templateName?: string;
};

export type RingCentralVoiceApiSchemaTimeRange = {
  rangeType?: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | "NOW";
  rangeValue?: number;
  rangeValueValid?: boolean;
};

export type RingCentralVoiceApiSchemaRole = {
  description?: string;
  roleType?: "SUPER_USER" | "USER" | "MANAGE_USERS" | "MANAGE_RIGHTS" | "ACCESS_SIBLINGS" | "ACCESS_AUDIT_LOG" | "ACCESS_GOODDATA_ADMIN" | "ACCESS_GOODDATA_EDITOR" | "ACCESS_GOODDATA_EXPLORER" | "ACCESS_GOODDATA_VIEWER" | "ACCESS_GOODDATA_EMBEDDED_EXPLORER" | "ACCESS_GOODDATA_EMBEDDED_DASHBOARD" | "ASSUME_USERS" | "REPORT_ADMINISTRATIVE_USER" | "NO_ACCESS";
};

export type RingCentralVoiceApiSchemaAccountView = {
  accountId?: string;
  accountName?: string;
  databaseShardId?: string;
  defaultIntellidialServerId?: number;
  defaultOutdialServerGroupId?: number;
  emailFromAddress?: string;
  enable247Dialing?: boolean;
  enableAgentRankRouting?: boolean;
  enableAmdProfiles?: boolean;
  enableChat?: boolean;
  enableCloudRouting?: boolean;
  enableFifo?: boolean;
  enableFolderMode?: boolean;
  enableGoodData?: boolean;
  enableHciDialer?: boolean;
  enableInbound?: boolean;
  enableMultiUser?: boolean;
  enableOutbound?: boolean;
  enableSoftphones?: boolean;
  enableTaskMode?: boolean;
  enableTcpaSafeMachineDetect?: boolean;
  enableTracking?: boolean;
  enableVisualIvr?: boolean;
  enableVoiceBroadcast?: boolean;
  engageAccountId?: string;
  ivrAppsEnabled?: boolean;
  mainAccountId?: string;
  mainAccountName?: string;
  outboundPrepay?: boolean;
  rcAccountAccess?: "DISABLED" | "ENABLED" | "REQUIRED";
  rcAccountId?: string;
  tcpaSafeMode?: boolean;
  usePowerBy?: boolean;
};

export type RingCentralVoiceApiSchemaValidationErrorData = {
  attributeName?: string;
  message?: string;
  value?: string;
};

export type RingCentralVoiceApiSchemaWEMDialogSegmentMetaData = {
  subAccountId?: string;
  dialogId?: string;
  interactionId?: string;
  channelId?: string;
  channelType?: string;
  channelClass?: string;
  channelEndpointAddress?: string;
  contactEndpointAddress?: string;
  dialogOrigination?: string;
  dialogStartTimeMs?: string;
  dialogEndTimeMs?: string;
  dialogDurationMs?: number;
  segmentId?: string;
  segmentType?: string;
  segmentParticipantId?: string;
  segmentParticipantRcExtensionId?: string;
  segmentStartTimeMs?: string;
  segmentEndTimeMs?: string;
  segmentDurationMs?: number;
  segmentAgentGroupId?: string;
  systemDisposition?: string | null;
  agentDisposition?: string;
  agentNotes?: string;
  hasRecording?: boolean;
  hasTranscript?: boolean;
  segmentEvents?: ReadonlyArray<RingCentralVoiceApiSchemaInteractionSegmentEvent> | null;
};

export type RingCentralVoiceApiSchemaTranscriptPhrase = {
  participantId?: string;
  rcUserId?: string | null;
  participantName?: string | null;
  participantType?: string;
  timestamp?: string;
  message?: string;
};

export type RingCentralVoiceApiSchemaAssignedDnisBulkUpdateDTO = {
  dnisType?: "ACCOUNT" | "ACD" | "AGENT" | "CHAT_QUEUE" | "OUTBOUND" | "VISUAL_IVR" | "CLOUD_PROFILE" | "CLOUD_DESTINATION" | "TRAC_NUMBER" | "HTTP_SERVICES" | "SCRIPTING" | "TN_MANAGER" | "SURVEY" | "DNIS" | "TEAMS" | "KNOWLEDGE_BASE" | "UTILITIES";
  endDate?: string;
  id?: number;
  startDate?: string;
};

export type RingCentralVoiceApiSchemaAssignedSmsDnisBulkUpdateDTO = {
  endDate?: string;
  id?: number;
  startDate?: string;
};

export type RingCentralVoiceApiSchemaDnisPoolDTO = {
  dnis?: ReadonlyArray<string>;
  reservedAccountId?: string;
};

export type RingCentralVoiceApiSchemaGeneralDTO = {
  dnisDescription?: string;
  inboundContext?: string;
  originatingDnis?: string;
  reservedAccountId?: string;
};

export type RingCentralVoiceApiSchemaMediaCodeDTO = {
  dnisCategory?: string;
  mediaCode?: string;
  mediaFormat?: string;
  mediaIsci?: string;
  mediaLength?: string;
  mediaMarket?: string;
  mediaNetwork?: string;
  mediaUrl?: string;
  mediaVersion?: string;
  mediaWebSourcecode?: string;
};

export type RingCentralVoiceApiSchemaAssignedDnis = {
  cloudRouteProfile?: RingCentralVoiceApiSchemaCloudRouteProfileSkinny;
  dnis?: string;
  dnisDescription?: string;
  dnisE164?: string;
  endDate?: RingCentralVoiceApiSchemaDateTime;
  endPointId?: string;
  endPointType?: string;
  gate?: RingCentralVoiceApiSchemaGateSkinnyAssignable;
  isActive?: boolean;
  originatingDnis?: string;
  phoneNumbersI18nEnabled?: boolean;
  startDate?: RingCentralVoiceApiSchemaDateTime;
  tracNumber?: RingCentralVoiceApiSchemaTracNumberSkinny;
  visualIvr?: RingCentralVoiceApiSchemaVisualIvrSkinny;
};

export type RingCentralVoiceApiSchemaAssignedSmsDnis = {
  chatQueue?: RingCentralVoiceApiSchemaChatQueueSkinny;
  dnis?: string;
  dnisDescription?: string;
  dnisE164?: string;
  dnisPool?: RingCentralVoiceApiSchemaDnisPoolV2;
  endDate?: RingCentralVoiceApiSchemaDateTime;
  isActive?: boolean;
  originatingDnis?: string;
  phoneNumbersI18nEnabled?: boolean;
  startDate?: RingCentralVoiceApiSchemaDateTime;
};

export type RingCentralVoiceApiSchemaBaseCsvDto = {};

export type RingCentralVoiceApiSchemaDnisResponseValidation = {
  errorCode?: string;
  errorMessage?: ReadonlyArray<string>;
  totalRecords?: number;
  validRecords?: number;
  validated?: boolean;
};

export type RingCentralVoiceApiSchemaChronology = {
  zone?: RingCentralVoiceApiSchemaDateTimeZone;
};

export type RingCentralVoiceApiSchemaDateTimeZone = {
  fixed?: boolean;
  id?: string;
};

export type RingCentralVoiceApiSchemaMainAccount = {
  dataRetentionDays?: number;
  enableAmdProfiles?: boolean;
  enableConsultCall?: boolean;
  enablePhoneNumbersI18n?: boolean;
  engageAccountId?: string;
  isActive?: number;
  mainAccountId?: string;
  mainAccountName?: string;
  rcAccountId?: string;
};

export type RingCentralVoiceApiSchemaChatGroupSkill = {
  active?: boolean;
  agentSkillProfiles?: RingCentralVoiceApiSchemaCollectionAgentSkillProfile;
  chatRequeueShortcuts?: ReadonlyArray<RingCentralVoiceApiSchemaChatRequeueShortcut>;
  createdOn?: RingCentralVoiceApiSchemaDateTime;
  permissions?: ReadonlyArray<"CREATE" | "READ" | "UPDATE" | "DELETE" | "REPORT">;
  skillDesc?: string;
  skillId?: number;
  skillName?: string;
};

export type RingCentralVoiceApiSchemaCampaignPass = {
  agent?: RingCentralVoiceApiSchemaAgent;
  agentDisposition?: string;
  agentNotes?: string;
  callStart?: RingCentralVoiceApiSchemaDateTime;
  campaignRedials?: ReadonlyArray<RingCentralVoiceApiSchemaCampaignRedial>;
  dialDuration?: number;
  dialType?: boolean;
  duration?: number;
  export?: boolean;
  exportFlag?: boolean;
  leadPhone?: string;
  passDate?: RingCentralVoiceApiSchemaDateTime;
  passDisposition?: "ANSWER" | "NOANSWER" | "BUSY" | "MACHINE" | "INTERCEPT" | "DISCONNECT" | "ABANDON" | "CONGESTION" | "MANUAL_PASS" | "INBOUND_CALLBACK" | "APP_DNC" | "APP_REQUEUE" | "APP_REQUEUE_COMPLETE" | "APP_REQUEUE_ABANDON" | "INBOUND_ABANDON" | "API_BLOCKED" | "API_ERROR";
  passNumber?: number;
  passUii?: string;
};

export type RingCentralVoiceApiSchemaBaseAgentState = {
  colKey?: string;
  colLabel?: string;
  id?: number;
  isCore?: boolean;
  isRequired?: boolean;
  name?: string;
};

export type RingCentralVoiceApiSchemaRemoteHttpServiceGroup = {
  groupName?: string;
  isDefault?: boolean;
  permissions?: ReadonlyArray<"CREATE" | "READ" | "UPDATE" | "DELETE" | "REPORT">;
  serviceGroupId?: number;
  services?: RingCentralVoiceApiSchemaCollectionRemoteHttpService;
};

export type RingCentralVoiceApiSchemaCollectionRemoteHttpServiceInput = {};

export type RingCentralVoiceApiSchemaCallerIdBucketNumber = {
  city?: string;
  lat?: number;
  lon?: number;
  numberId?: number;
  state?: string;
  tnNumber?: string;
};

export type RingCentralVoiceApiSchemaCollectionCustomDialZone = {};

export type RingCentralVoiceApiSchemaScriptGroup = {
  account?: RingCentralVoiceApiSchemaAccount;
  groupId?: number;
  name?: string;
  permissions?: ReadonlyArray<"CREATE" | "READ" | "UPDATE" | "DELETE" | "REPORT">;
  scripts?: ReadonlyArray<RingCentralVoiceApiSchemaScript>;
};

export type RingCentralVoiceApiSchemaInteractionSegmentEvent = {
  eventTimeMs: string;
  clientEventTimeMs: string;
  eventType: "REC_START" | "REC_STOP";
};

export type RingCentralVoiceApiSchemaCloudRouteProfileSkinny = {
  accountId?: string;
  cloudGroupId?: number;
  cloudProfileId?: number;
  groupId?: number;
  isActive?: boolean;
  isDeleted?: boolean;
  profileName?: string;
};

export type RingCentralVoiceApiSchemaGateSkinnyAssignable = {
  accountId?: string;
  gateGroup?: RingCentralVoiceApiSchemaGateGroupV2;
  gateGroupId?: number;
  gateId?: number;
  gateName?: string;
  groupId?: number;
  isActive?: boolean;
};

export type RingCentralVoiceApiSchemaTracNumberSkinny = {
  accountId?: string;
  description?: string;
  groupId?: number;
  tracGroupId?: number;
  tracId?: number;
};

export type RingCentralVoiceApiSchemaVisualIvrSkinny = {
  accountId?: string;
  groupId?: number;
  isActive?: boolean;
  isDeleted?: boolean;
  visualIvrDesc?: string;
  visualIvrGroupId?: number;
  visualIvrId?: number;
  visualIvrName?: string;
};

export type RingCentralVoiceApiSchemaChatQueueSkinny = {
  accountId?: string;
  chatGroupId?: number;
  chatQueueId?: number;
  chatQueueName?: string;
  isActive?: boolean;
};

export type RingCentralVoiceApiSchemaDnisPoolV2 = {
  active?: boolean;
  assignedDnis?: RingCentralVoiceApiSchemaAssignedDnis;
  assignedSmsDnis?: RingCentralVoiceApiSchemaAssignedSmsDnis;
  carrier?: string;
  customAppString?: string;
  dateCreated?: RingCentralVoiceApiSchemaDateTime;
  dnis?: string;
  dnisCategory?: string;
  dnisDescription?: string;
  dnisE164?: string;
  inboundContext?: string;
  lastModified?: RingCentralVoiceApiSchemaDateTime;
  lastModifiedBy?: string;
  mediaCode?: string;
  mediaFormat?: string;
  mediaIsci?: string;
  mediaLength?: string;
  mediaMarket?: string;
  mediaNetwork?: string;
  mediaUrl?: string;
  mediaVersion?: string;
  mediaWebSourcecode?: string;
  notes?: string;
  originatingDnis?: string;
  phoneNumbersI18nEnabled?: boolean;
  platformId?: string;
  reservedAccount?: RingCentralVoiceApiSchemaAccount;
  reservedAccountId?: string;
  resporg?: string;
  smsEnabled?: boolean;
  twilioApiKey?: string;
  vendorId?: string;
  vruNetworkId?: number;
};

export type RingCentralVoiceApiSchemaChatRequeueShortcut = {
  chatGroupSkill?: RingCentralVoiceApiSchemaChatGroupSkill;
  chatRequeueShortcutId?: number;
  name?: string;
  rank?: number;
  requeueGroup?: RingCentralVoiceApiSchemaChatGroup;
  requeueQueue?: RingCentralVoiceApiSchemaChatQueue;
};

export type RingCentralVoiceApiSchemaCollectionRemoteHttpService = {};

export type RingCentralVoiceApiSchemaGateGroupV2 = {
  accountId?: string;
  billingKey?: string;
  gateGroupId?: number;
  groupName?: string;
};

export type RingCentralVoiceApiSchemaChatGroup = {
  billingKey?: string;
  chatGroupId?: number;
  chatGroupSkills?: ReadonlyArray<RingCentralVoiceApiSchemaChatGroupSkill>;
  chatGroups?: ReadonlyArray<RingCentralVoiceApiSchemaChatQueue>;
  chatQueues?: ReadonlyArray<RingCentralVoiceApiSchemaChatQueue>;
  createdOn?: RingCentralVoiceApiSchemaDateTime;
  groupName?: string;
  permissions?: ReadonlyArray<"CREATE" | "READ" | "UPDATE" | "DELETE" | "REPORT">;
};

export type RingCentralVoiceApiSchemaChatQueue = {
  account?: RingCentralVoiceApiSchemaAccount;
  accountId?: string;
  active?: boolean;
  agentConnectHttpService?: RingCentralVoiceApiSchemaRemoteHttpService;
  agentConnectMsg?: string;
  agentFrom?: string;
  agentMaxAcceptTime?: number;
  agentTermHttpService?: RingCentralVoiceApiSchemaRemoteHttpService;
  agentWrapTime?: number;
  appUrl?: string;
  callbackCampaign?: RingCentralVoiceApiSchemaCampaign;
  chatGroup?: RingCentralVoiceApiSchemaChatGroup;
  chatPriorityGroup?: RingCentralVoiceApiSchemaChatPriorityGroup;
  chatQueueDescription?: string;
  chatQueueId?: number;
  chatQueueName?: string;
  chatQueueOpen?: boolean;
  clientFrom?: string;
  companyLogo?: RingCentralVoiceApiSchemaBlob;
  createdOn?: RingCentralVoiceApiSchemaDateTime;
  dequeueHttpService?: RingCentralVoiceApiSchemaRemoteHttpService;
  dispTimeout?: number;
  friSched?: string;
  gateQueueAnips?: ReadonlyArray<RingCentralVoiceApiSchemaChatQueueAnip>;
  groupId?: number;
  idleTimeout?: number;
  isActive?: boolean;
  longChatTime?: number;
  maxQueueEvent?: string;
  maxQueueLimit?: number;
  monSched?: string;
  newChatHttpService?: RingCentralVoiceApiSchemaRemoteHttpService;
  noAgentEvent?: string;
  observeDst?: boolean;
  permissions?: ReadonlyArray<"CREATE" | "READ" | "UPDATE" | "DELETE" | "REPORT">;
  postChatHttpService?: RingCentralVoiceApiSchemaRemoteHttpService;
  postDispHttpService?: RingCentralVoiceApiSchemaRemoteHttpService;
  queueClosedEvent?: string;
  queuePriority?: number;
  requeueShortcutAccess?: ReadonlyArray<RingCentralVoiceApiSchemaChatRequeueShortcutGroupChatQueueAccess>;
  requeueType?: string;
  requireCaptcha?: boolean;
  satSched?: string;
  script?: RingCentralVoiceApiSchemaScript;
  shortChatTime?: number;
  slaTime?: number;
  specialIpEvent?: string;
  sunSched?: string;
  surveyId?: number;
  surveyPopType?: string;
  throttleCalls?: number;
  throttleDays?: number;
  throttleIpEvent?: string;
  thuSched?: string;
  tueSched?: string;
  wedSched?: string;
};

export type RingCentralVoiceApiSchemaChatPriorityGroup = {
  chatPriorityGroupId?: number;
  chatQueues?: ReadonlyArray<RingCentralVoiceApiSchemaChatQueue>;
  priorityGroupName?: string;
};

export type RingCentralVoiceApiSchemaBlob = {
  binaryStream?: RingCentralVoiceApiSchemaInputStream;
};

export type RingCentralVoiceApiSchemaChatQueueAnip = {
  anip?: string;
  chatQueueId?: number;
  dateAdded?: RingCentralVoiceApiSchemaDateTime;
  recordType?: string;
  type?: string;
};

export type RingCentralVoiceApiSchemaChatRequeueShortcutGroupChatQueueAccess = {
  chatQueue?: RingCentralVoiceApiSchemaChatQueue;
  chatQueueId?: number;
  chatRequeueShortcutGroup?: RingCentralVoiceApiSchemaChatRequeueShortcutGroup;
  chatRequeueShortcutGroupId?: number;
};

export type RingCentralVoiceApiSchemaInputStream = {};

export type RingCentralVoiceApiSchemaChatRequeueShortcutGroup = {
  chatRequeueShortcutGroupId?: number;
  name?: string;
};

export interface RingCentralVoiceApiOperationQueryMap {
  "POST /api/auth/login/rc/accesstoken": {
  includeRefresh?: string;
  rcAccessToken?: string;
  rcTokenType?: string;
};
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/createManualAgentCall": {
  username: string;
  destination: string;
  ringDuration: number;
  callerId: string;
};
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/list": {
  product?: "ACCOUNT" | "ACD" | "AGENT" | "CHAT_QUEUE" | "OUTBOUND" | "VISUAL_IVR" | "CLOUD_PROFILE" | "CLOUD_DESTINATION" | "TRAC_NUMBER" | "HTTP_SERVICES" | "SCRIPTING" | "TN_MANAGER" | "SURVEY" | "DNIS" | "TEAMS" | "KNOWLEDGE_BASE" | "UTILITIES";
  productId?: number;
  externalId?: string;
  page?: number;
  maxRows?: number;
};
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueStatus": {
  destination_number: string;
  maxq: number;
  phoneNumbersI18nEnabled?: boolean;
};
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueThreshold": {
  destination_number: string;
  maxCallsQueued?: number;
  phoneNumbersI18nEnabled?: boolean;
};
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/addSessionToCall": {
  destination: string;
  sessionType: "MONITOR" | "BARGEIN" | "COACHING";
};
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/dispositionCall": {
  disposition: string;
  callback: boolean;
  callBackDTS?: string;
  notes?: string;
};
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupCall": {};
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupSession": {
  phone: string;
};
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/toggleCallRecording": {
  record: boolean;
};
  "GET /voice/api/v1/admin/auditLogs/auditable": {};
  "PUT /voice/api/v1/admin/auditLogs/search": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups": {
  page?: number;
  maxRows?: number;
  includePermissions?: boolean;
};
  "POST /voice/api/v1/admin/accounts/{accountId}/agentGroups": {};
  "DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}": {
  includePermissions?: boolean;
};
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents": {};
  "POST /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents": {};
  "DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/gateGroups/{gateGroupId}/gates/{gateId}": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/actions": {
  leadAction: "RESET_LEADS" | "CANCEL_LEADS" | "DELETE_LEADS" | "PAUSE_LEADS" | "DIALER_REFRESH" | "READY_LEADS" | "MANUAL_LEADS" | "EMAIL_LEADS" | "CALLBACK_LEADS" | "MOVE_TO_CAMPAIGN" | "AGENT_RESERVATION" | "SUPPRESS_LEADS" | "UNSUPPRESS_LEADS";
};
  "POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearch": {
  count?: boolean;
  page?: number;
  maxRows?: number;
};
  "POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearchByPhoneList": {
  page?: number;
  maxRows?: number;
};
  "GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadStates": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/systemDispositions": {};
  "PATCH /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}": {
  campaignId: number;
  listId?: number;
  timezoneOption?: "NPA_NXX" | "ZIPCODE" | "EXPLICIT" | "NOT_APPLICABLE";
  duplicateHandling?: "RETAIN_ALL" | "REMOVE_ALL_EXISTING" | "REMOVE_FROM_LIST";
};
  "PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}": {
  campaignId: number;
  listId?: number;
  timezoneOption?: "NPA_NXX" | "ZIPCODE" | "EXPLICIT" | "NOT_APPLICABLE";
  duplicateHandling?: "RETAIN_ALL" | "REMOVE_ALL_EXISTING" | "REMOVE_FROM_LIST";
};
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/direct": {};
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/preview": {
  fileType: "EXCEL" | "PIPE" | "COMMA" | "TAB";
  quoteCharacter?: string;
};
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/process": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/countries/available": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups": {
  page?: number;
  maxRows?: number;
};
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/withChildren": {
  includePermissions?: string;
  page?: number;
  maxRows?: number;
};
  "DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignAgents": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignedAgents": {
  page?: number;
  maxRows?: number;
};
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns": {
  page?: number;
  maxRows?: number;
};
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns": {};
  "DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}": {};
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}/clearCache": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren": {
  includePermissions?: boolean;
  page?: number;
  maxRows?: number;
};
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren/additionalData": {
  page?: number;
  maxRows?: number;
};
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates": {
  page?: number;
  maxRows?: number;
};
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates": {};
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignAgents": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignGateToPriorityGroup": {
  priorityGroupId: number;
  priorityGroupRank: number;
};
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignedAgents": {
  page?: number;
  maxRows?: number;
};
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/clone": {
  newGateGroupId: number;
  newGateName: string;
};
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions": {};
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions": {};
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions/{gateDispositionId}": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions/{gateDispositionId}": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions/{gateDispositionId}": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateAgentAccessLogin": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents": {};
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents": {};
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents": {};
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents": {};
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents/{dtmfEventId}": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents/{dtmfEventId}": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents/{dtmfEventId}": {};
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/moveToGroup": {
  newGateGroupId: number;
};
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries": {
  page?: number;
  maxRows?: number;
};
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries": {};
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries/{entryId}": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries/{entryId}": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts": {};
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts": {};
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides": {};
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides": {};
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides/{scheduleOverrideId}": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides/{scheduleOverrideId}": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/setIsActive": {};
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis": {
  type: string;
  ani?: string;
};
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis": {
  type?: string;
  filter?: string;
  page?: number;
  maxRows?: number;
};
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis": {};
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis/upload": {
  operation?: string;
  type: "S-ANI" | "THROTTLE";
};
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/unassignAgent/{agentId}": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills": {};
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills": {};
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}": {};
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}": {};
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}": {};
  "GET /voice/api/v1/admin/reports/{reportType}": {};
  "GET /voice/api/v1/admin/token": {};
  "POST /voice/api/v1/admin/token": {};
  "DELETE /voice/api/v1/admin/token/{token}": {};
  "GET /voice/api/v1/admin/users": {
  activeOnly?: boolean;
  flatten?: boolean;
};
  "POST /voice/api/v1/admin/users": {
  parentUserId?: number;
  returnUri?: string;
  isSSO?: boolean;
};
  "POST /voice/api/v1/auth/login": {
  username: string;
  password: string;
  stayLoggedIn?: boolean;
};
  "GET /voice/api/integration/v1/admin/users/{mainAccountId}": {};
  "GET /voice/api/integration/v1/admin/accounts/{mainAccountId}/subaccounts": {};
  "GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups/{agentGroupId}/agents": {};
  "GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups": {};
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/recordings/dialogs/{dialogId}/segments/{segmentId}": {};
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/interaction-metadata": {};
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/transcripts/dialogs/{dialogId}/segments/{segmentId}": {};
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups": {};
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups/{queueGroupId}/with-agents": {};
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-queue-stats": {};
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-extended-stats": {};
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-stats": {};
  "PUT /v1/admin/utilities/tnManager/updateCustomerDnisBulk": {};
  "POST /v1/admin/utilities/tnManager/searchDnis": {};
  "PUT /v1/admin/utilities/tnManager/updateBulkDnisPool": {};
  "POST /v1/admin/utilities/tnManager/uploadDnisPool": {
  fileType: "COMMA";
};
  "PUT /platform/api/media/product": {};
  "POST /platform/api/media/product": {};
  "GET /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}": {};
  "DELETE /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}": {};
}

export interface RingCentralVoiceApiOperationQueryRequiredMap {
  "POST /api/auth/login/rc/accesstoken": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/createManualAgentCall": true;
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/list": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueStatus": true;
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueThreshold": true;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/addSessionToCall": true;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/dispositionCall": true;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupCall": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupSession": true;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/toggleCallRecording": true;
  "GET /voice/api/v1/admin/auditLogs/auditable": false;
  "PUT /voice/api/v1/admin/auditLogs/search": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/agentGroups": false;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents": false;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/gateGroups/{gateGroupId}/gates/{gateId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/actions": true;
  "POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearch": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearchByPhoneList": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadStates": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/systemDispositions": false;
  "PATCH /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}": true;
  "PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}": true;
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/direct": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/preview": true;
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/process": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/countries/available": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/withChildren": false;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignAgents": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignedAgents": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns": false;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}/clearCache": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren/additionalData": false;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates": false;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignAgents": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignGateToPriorityGroup": true;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignedAgents": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/clone": true;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions": false;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions/{gateDispositionId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions/{gateDispositionId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions/{gateDispositionId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateAgentAccessLogin": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents": false;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents": false;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents/{dtmfEventId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents/{dtmfEventId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents/{dtmfEventId}": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/moveToGroup": true;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries": false;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries/{entryId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries/{entryId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts": false;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides": false;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides/{scheduleOverrideId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides/{scheduleOverrideId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/setIsActive": false;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis": true;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis/upload": true;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/unassignAgent/{agentId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills": false;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}": false;
  "GET /voice/api/v1/admin/reports/{reportType}": false;
  "GET /voice/api/v1/admin/token": false;
  "POST /voice/api/v1/admin/token": false;
  "DELETE /voice/api/v1/admin/token/{token}": false;
  "GET /voice/api/v1/admin/users": false;
  "POST /voice/api/v1/admin/users": false;
  "POST /voice/api/v1/auth/login": true;
  "GET /voice/api/integration/v1/admin/users/{mainAccountId}": false;
  "GET /voice/api/integration/v1/admin/accounts/{mainAccountId}/subaccounts": false;
  "GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups/{agentGroupId}/agents": false;
  "GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups": false;
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/recordings/dialogs/{dialogId}/segments/{segmentId}": false;
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/interaction-metadata": false;
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/transcripts/dialogs/{dialogId}/segments/{segmentId}": false;
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups": false;
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups/{queueGroupId}/with-agents": false;
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-queue-stats": false;
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-extended-stats": false;
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-stats": false;
  "PUT /v1/admin/utilities/tnManager/updateCustomerDnisBulk": false;
  "POST /v1/admin/utilities/tnManager/searchDnis": false;
  "PUT /v1/admin/utilities/tnManager/updateBulkDnisPool": false;
  "POST /v1/admin/utilities/tnManager/uploadDnisPool": true;
  "PUT /platform/api/media/product": false;
  "POST /platform/api/media/product": false;
  "GET /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}": false;
  "DELETE /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}": false;
}

export interface RingCentralVoiceApiOperationRequestBodyMap {
  "POST /api/auth/login/rc/accesstoken": never;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/createManualAgentCall": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/list": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueStatus": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueThreshold": never;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/addSessionToCall": never;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/dispositionCall": never;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupCall": never;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupSession": never;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/toggleCallRecording": never;
  "GET /voice/api/v1/admin/auditLogs/auditable": never;
  "PUT /voice/api/v1/admin/auditLogs/search": RingCentralVoiceApiSchemaAuditLogSearchCriteria;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups": never;
  "POST /voice/api/v1/admin/accounts/{accountId}/agentGroups": RingCentralVoiceApiSchemaAgentGroup;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}": never;
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}": RingCentralVoiceApiSchemaAgentGroup;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents": never;
  "POST /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents": RingCentralVoiceApiSchemaAgentRequest;
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents": ReadonlyArray<RingCentralVoiceApiSchemaAgent>;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}": never;
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}": RingCentralVoiceApiSchemaAgentRequest;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/gateGroups/{gateGroupId}/gates/{gateId}": never;
  "PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/actions": RingCentralVoiceApiSchemaLeadManagerRequest;
  "POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearch": RingCentralVoiceApiSchemaCampaignLeadSearchCriteria;
  "POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearchByPhoneList": {
  file: string;
};
  "GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadStates": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/systemDispositions": never;
  "PATCH /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}": RingCentralVoiceApiSchemaCampaignLead;
  "PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}": RingCentralVoiceApiSchemaCampaignLead;
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/direct": RingCentralVoiceApiSchemaLeadListProcessingRequest;
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/preview": {
  file: string;
};
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/process": RingCentralVoiceApiSchemaLeadListProcessingRequest;
  "GET /voice/api/v1/admin/accounts/{accountId}/countries/available": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups": never;
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups": RingCentralVoiceApiSchemaDialGroup;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/withChildren": never;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}": never;
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}": RingCentralVoiceApiSchemaDialGroup;
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignAgents": ReadonlyArray<RingCentralVoiceApiSchemaAgentDialGroupMember>;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignedAgents": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns": never;
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns": RingCentralVoiceApiSchemaCampaign;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}": never;
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}": RingCentralVoiceApiSchemaCampaign;
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}/clearCache": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren/additionalData": never;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}": never;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}": RingCentralVoiceApiSchemaGateGroup;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates": never;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates": RingCentralVoiceApiSchemaGate;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}": never;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}": RingCentralVoiceApiSchemaGate;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignAgents": ReadonlyArray<RingCentralVoiceApiSchemaAgentGateAccess>;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignGateToPriorityGroup": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignedAgents": never;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/clone": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions": never;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions": RingCentralVoiceApiSchemaGateDisposition;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions": ReadonlyArray<RingCentralVoiceApiSchemaGateDisposition>;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions/{gateDispositionId}": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions/{gateDispositionId}": never;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions/{gateDispositionId}": RingCentralVoiceApiSchemaGateDisposition;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateAgentAccessLogin": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents": never;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents": RingCentralVoiceApiSchemaGateQueueEvent;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents": ReadonlyArray<RingCentralVoiceApiSchemaGateQueueEvent>;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}": never;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}": RingCentralVoiceApiSchemaGateQueueEvent;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents": never;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents": RingCentralVoiceApiSchemaGateQueueDtmfEvent;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents": ReadonlyArray<RingCentralVoiceApiSchemaGateQueueDtmfEvent>;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents/{dtmfEventId}": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents/{dtmfEventId}": never;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents/{dtmfEventId}": RingCentralVoiceApiSchemaGateQueueDtmfEvent;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/moveToGroup": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries": never;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries": RingCentralVoiceApiSchemaPhoneBookEntry;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries": ReadonlyArray<RingCentralVoiceApiSchemaPhoneBookEntry>;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries/{entryId}": never;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries/{entryId}": RingCentralVoiceApiSchemaPhoneBookEntry;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts": never;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts": RingCentralVoiceApiSchemaRequeueShortcut;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts": ReadonlyArray<RingCentralVoiceApiSchemaRequeueShortcut>;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}": never;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}": RingCentralVoiceApiSchemaRequeueShortcut;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides": never;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides": RingCentralVoiceApiSchemaGateScheduleOverride;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides": ReadonlyArray<RingCentralVoiceApiSchemaGateScheduleOverride>;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides/{scheduleOverrideId}": never;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides/{scheduleOverrideId}": RingCentralVoiceApiSchemaGateScheduleOverride;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/setIsActive": RingCentralVoiceApiSchemaActiveStateBoolean;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis": never;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis": RingCentralVoiceApiSchemaGateSpecialAni;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis/upload": {
  file: string;
};
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/unassignAgent/{agentId}": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills": never;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills": RingCentralVoiceApiSchemaGateGroupSkill;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills": ReadonlyArray<RingCentralVoiceApiSchemaGateGroupSkill>;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}": never;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}": never;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}": RingCentralVoiceApiSchemaGateGroupSkill;
  "GET /voice/api/v1/admin/reports/{reportType}": never;
  "GET /voice/api/v1/admin/token": never;
  "POST /voice/api/v1/admin/token": never;
  "DELETE /voice/api/v1/admin/token/{token}": never;
  "GET /voice/api/v1/admin/users": never;
  "POST /voice/api/v1/admin/users": RingCentralVoiceApiSchemaAdminUserRequest;
  "POST /voice/api/v1/auth/login": never;
  "GET /voice/api/integration/v1/admin/users/{mainAccountId}": never;
  "GET /voice/api/integration/v1/admin/accounts/{mainAccountId}/subaccounts": never;
  "GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups/{agentGroupId}/agents": never;
  "GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups": never;
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/recordings/dialogs/{dialogId}/segments/{segmentId}": never;
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/interaction-metadata": RingCentralVoiceApiSchemaInteractionMetadataRequest;
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/transcripts/dialogs/{dialogId}/segments/{segmentId}": never;
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups": never;
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups/{queueGroupId}/with-agents": never;
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-queue-stats": RingCentralVoiceApiSchemaAggregatedIntegrationParams;
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-extended-stats": RingCentralVoiceApiSchemaAggregatedIntegrationParams;
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-stats": RingCentralVoiceApiSchemaAggregatedIntegrationParams;
  "PUT /v1/admin/utilities/tnManager/updateCustomerDnisBulk": RingCentralVoiceApiSchemaDnisBulkUpdateRequest;
  "POST /v1/admin/utilities/tnManager/searchDnis": RingCentralVoiceApiSchemaDnisListRequest;
  "PUT /v1/admin/utilities/tnManager/updateBulkDnisPool": ReadonlyArray<RingCentralVoiceApiSchemaDnisPool>;
  "POST /v1/admin/utilities/tnManager/uploadDnisPool": {
  file: string;
};
  "PUT /platform/api/media/product": RingCentralVoiceApiSchemaUpdateProductReq;
  "POST /platform/api/media/product": RingCentralVoiceApiSchemaCreateProductReq;
  "GET /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}": never;
  "DELETE /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}": never;
}

export interface RingCentralVoiceApiOperationRequestBodyRequiredMap {
  "POST /api/auth/login/rc/accesstoken": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/createManualAgentCall": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/list": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueStatus": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueThreshold": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/addSessionToCall": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/dispositionCall": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupCall": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupSession": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/toggleCallRecording": false;
  "GET /voice/api/v1/admin/auditLogs/auditable": false;
  "PUT /voice/api/v1/admin/auditLogs/search": true;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/agentGroups": true;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}": true;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents": true;
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents": true;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}": true;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/gateGroups/{gateGroupId}/gates/{gateId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/actions": true;
  "POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearch": true;
  "POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearchByPhoneList": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadStates": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/systemDispositions": false;
  "PATCH /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}": true;
  "PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}": true;
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/direct": true;
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/preview": true;
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/process": true;
  "GET /voice/api/v1/admin/accounts/{accountId}/countries/available": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups": true;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/withChildren": false;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}": true;
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignAgents": true;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignedAgents": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns": true;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}": true;
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}/clearCache": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren/additionalData": false;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}": true;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates": true;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}": true;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignAgents": true;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignGateToPriorityGroup": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignedAgents": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/clone": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions": true;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions": true;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions/{gateDispositionId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions/{gateDispositionId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions/{gateDispositionId}": true;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateAgentAccessLogin": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents": true;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents": true;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}": true;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents": true;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents": true;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents/{dtmfEventId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents/{dtmfEventId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents/{dtmfEventId}": true;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/moveToGroup": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries": true;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries": true;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries/{entryId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries/{entryId}": true;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts": true;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts": true;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}": true;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides": true;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides": true;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides/{scheduleOverrideId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides/{scheduleOverrideId}": true;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/setIsActive": true;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis": true;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis/upload": false;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/unassignAgent/{agentId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills": false;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills": true;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills": true;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}": false;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}": false;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}": true;
  "GET /voice/api/v1/admin/reports/{reportType}": false;
  "GET /voice/api/v1/admin/token": false;
  "POST /voice/api/v1/admin/token": false;
  "DELETE /voice/api/v1/admin/token/{token}": false;
  "GET /voice/api/v1/admin/users": false;
  "POST /voice/api/v1/admin/users": true;
  "POST /voice/api/v1/auth/login": false;
  "GET /voice/api/integration/v1/admin/users/{mainAccountId}": false;
  "GET /voice/api/integration/v1/admin/accounts/{mainAccountId}/subaccounts": false;
  "GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups/{agentGroupId}/agents": false;
  "GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups": false;
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/recordings/dialogs/{dialogId}/segments/{segmentId}": false;
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/interaction-metadata": true;
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/transcripts/dialogs/{dialogId}/segments/{segmentId}": false;
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups": false;
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups/{queueGroupId}/with-agents": false;
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-queue-stats": true;
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-extended-stats": true;
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-stats": true;
  "PUT /v1/admin/utilities/tnManager/updateCustomerDnisBulk": true;
  "POST /v1/admin/utilities/tnManager/searchDnis": true;
  "PUT /v1/admin/utilities/tnManager/updateBulkDnisPool": true;
  "POST /v1/admin/utilities/tnManager/uploadDnisPool": true;
  "PUT /platform/api/media/product": true;
  "POST /platform/api/media/product": true;
  "GET /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}": false;
  "DELETE /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}": false;
}

export interface RingCentralVoiceApiOperationResponseMap {
  "POST /api/auth/login/rc/accesstoken": RingCentralVoiceApiSchemaAccessTokenUserDetails;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/createManualAgentCall": boolean;
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/list": ReadonlyArray<RingCentralVoiceApiSchemaActiveCallListResponse>;
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueStatus": RingCentralVoiceApiSchemaPrerouteCheckStatus;
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueThreshold": RingCentralVoiceApiSchemaPrerouteCheckStatus;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/addSessionToCall": boolean;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/dispositionCall": boolean;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupCall": boolean;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupSession": boolean;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/toggleCallRecording": boolean;
  "GET /voice/api/v1/admin/auditLogs/auditable": ReadonlyArray<RingCentralVoiceApiSchemaAuditable>;
  "PUT /voice/api/v1/admin/auditLogs/search": ReadonlyArray<RingCentralVoiceApiSchemaAuditLog>;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups": ReadonlyArray<RingCentralVoiceApiSchemaAgentGroup>;
  "POST /voice/api/v1/admin/accounts/{accountId}/agentGroups": RingCentralVoiceApiSchemaAgentGroup;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}": boolean;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}": RingCentralVoiceApiSchemaAgentGroup;
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}": RingCentralVoiceApiSchemaAgentGroup;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents": ReadonlyArray<RingCentralVoiceApiSchemaAgent>;
  "POST /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents": RingCentralVoiceApiSchemaAgent;
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents": ReadonlyArray<RingCentralVoiceApiSchemaAgent>;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}": boolean;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}": RingCentralVoiceApiSchemaAgent;
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}": RingCentralVoiceApiSchemaAgent;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/gateGroups/{gateGroupId}/gates/{gateId}": number;
  "PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/actions": RingCentralVoiceApiSchemaLeadActionResult;
  "POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearch": {};
  "POST /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadSearchByPhoneList": ReadonlyArray<RingCentralVoiceApiSchemaCampaignLeadSearchResultsView>;
  "GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/leadStates": ReadonlyArray<"ACTIVE" | "AGENT-CALLBACK" | "CALLBACK-CANCELLED" | "CALLBACK" | "CANCELLED" | "COMPLETE" | "DISCONNECTED" | "DO-NOT-CALL" | "INTERCEPT" | "MAX-DIAL-LIMIT" | "PAUSED" | "PENDING-CALLBACK" | "PENDING-ERR" | "PENDING-HCI" | "PENDING" | "READY" | "TRANSITIONED" | "WHITELIST">;
  "GET /voice/api/v1/admin/accounts/{accountId}/campaignLeads/systemDispositions": ReadonlyArray<"ANSWER" | "NOANSWER" | "BUSY" | "MACHINE" | "INTERCEPT" | "DISCONNECT" | "ABANDON" | "CONGESTION" | "MANUAL_PASS" | "INBOUND_CALLBACK" | "APP_DNC" | "APP_REQUEUE" | "APP_REQUEUE_COMPLETE" | "APP_REQUEUE_ABANDON" | "INBOUND_ABANDON" | "API_BLOCKED" | "API_ERROR">;
  "PATCH /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}": RingCentralVoiceApiSchemaCampaignLead;
  "PUT /voice/api/v1/admin/accounts/{accountId}/campaignLeads/{leadId}": RingCentralVoiceApiSchemaCampaignLead;
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/direct": RingCentralVoiceApiSchemaLeadListProcessingResult;
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/preview": RingCentralVoiceApiSchemaLeadListPreviewResponse;
  "POST /voice/api/v1/admin/accounts/{accountId}/campaigns/{campaignId}/leadLoader/process": void;
  "GET /voice/api/v1/admin/accounts/{accountId}/countries/available": ReadonlyArray<RingCentralVoiceApiSchemaCountryCode>;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups": ReadonlyArray<RingCentralVoiceApiSchemaDialGroup>;
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups": RingCentralVoiceApiSchemaDialGroup;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/withChildren": ReadonlyArray<RingCentralVoiceApiSchemaDialGroup>;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}": boolean;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}": RingCentralVoiceApiSchemaDialGroup;
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}": RingCentralVoiceApiSchemaDialGroup;
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignAgents": RingCentralVoiceApiSchemaCollectionAgent;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignedAgents": ReadonlyArray<RingCentralVoiceApiSchemaAgent>;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns": ReadonlyArray<RingCentralVoiceApiSchemaCampaign>;
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns": RingCentralVoiceApiSchemaCampaign;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}": boolean;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}": RingCentralVoiceApiSchemaCampaign;
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}": RingCentralVoiceApiSchemaCampaign;
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/campaigns/{campaignId}/clearCache": boolean;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren": ReadonlyArray<RingCentralVoiceApiSchemaGateGroup>;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren/additionalData": ReadonlyArray<RingCentralVoiceApiSchemaGateGroup>;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}": boolean;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}": RingCentralVoiceApiSchemaGateGroup;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}": RingCentralVoiceApiSchemaGateGroup;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates": ReadonlyArray<RingCentralVoiceApiSchemaGate>;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates": RingCentralVoiceApiSchemaGate;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}": boolean;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}": RingCentralVoiceApiSchemaGate;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}": RingCentralVoiceApiSchemaGate;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignAgents": ReadonlyArray<RingCentralVoiceApiSchemaAgent>;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignGateToPriorityGroup": RingCentralVoiceApiSchemaGate;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignedAgents": ReadonlyArray<RingCentralVoiceApiSchemaAgent>;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/clone": RingCentralVoiceApiSchemaGate;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions": ReadonlyArray<RingCentralVoiceApiSchemaGateDisposition>;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions": RingCentralVoiceApiSchemaGateDisposition;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions": ReadonlyArray<RingCentralVoiceApiSchemaGateDisposition>;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions/{gateDispositionId}": boolean;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions/{gateDispositionId}": RingCentralVoiceApiSchemaGateDisposition;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/dispositions/{gateDispositionId}": RingCentralVoiceApiSchemaGateDisposition;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateAgentAccessLogin": ReadonlyArray<RingCentralVoiceApiSchemaGatesLoggedInAgentsView>;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents": ReadonlyArray<RingCentralVoiceApiSchemaGateQueueEvent>;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents": RingCentralVoiceApiSchemaGateQueueEvent;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents": ReadonlyArray<RingCentralVoiceApiSchemaGateQueueEvent>;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}": void;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}": RingCentralVoiceApiSchemaGateQueueEvent;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}": RingCentralVoiceApiSchemaGateQueueEvent;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents": ReadonlyArray<RingCentralVoiceApiSchemaGateQueueDtmfEvent>;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents": RingCentralVoiceApiSchemaGateQueueDtmfEvent;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents": ReadonlyArray<RingCentralVoiceApiSchemaGateQueueDtmfEvent>;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents/{dtmfEventId}": void;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents/{dtmfEventId}": RingCentralVoiceApiSchemaGateQueueDtmfEvent;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateQueueEvents/{eventId}/gateQueueDtmfEvents/{dtmfEventId}": RingCentralVoiceApiSchemaGateQueueDtmfEvent;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/moveToGroup": boolean;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries": ReadonlyArray<RingCentralVoiceApiSchemaPhoneBookEntry>;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries": RingCentralVoiceApiSchemaPhoneBookEntry;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries": ReadonlyArray<RingCentralVoiceApiSchemaPhoneBookEntry>;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries/{entryId}": void;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/phoneBookEntries/{entryId}": RingCentralVoiceApiSchemaPhoneBookEntry;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts": ReadonlyArray<RingCentralVoiceApiSchemaRequeueShortcut>;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts": RingCentralVoiceApiSchemaRequeueShortcut;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts": ReadonlyArray<RingCentralVoiceApiSchemaRequeueShortcut>;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}": boolean;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}": RingCentralVoiceApiSchemaRequeueShortcut;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}": RingCentralVoiceApiSchemaRequeueShortcut;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides": ReadonlyArray<RingCentralVoiceApiSchemaGateScheduleOverride>;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides": RingCentralVoiceApiSchemaGateScheduleOverride;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides": ReadonlyArray<RingCentralVoiceApiSchemaGateScheduleOverride>;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides/{scheduleOverrideId}": void;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/scheduleOverrides/{scheduleOverrideId}": RingCentralVoiceApiSchemaGateScheduleOverride;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/setIsActive": boolean;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis": number;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis": ReadonlyArray<RingCentralVoiceApiSchemaGateSpecialAni>;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis": RingCentralVoiceApiSchemaGateSpecialAni;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/specialAnis/upload": number;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/unassignAgent/{agentId}": number;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills": ReadonlyArray<RingCentralVoiceApiSchemaGateGroupSkill>;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills": RingCentralVoiceApiSchemaGateGroupSkill;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills": ReadonlyArray<RingCentralVoiceApiSchemaGateGroupSkill>;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}": boolean;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}": RingCentralVoiceApiSchemaGateGroupSkill;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/skills/{skillId}": RingCentralVoiceApiSchemaGateGroupSkill;
  "GET /voice/api/v1/admin/reports/{reportType}": RingCentralVoiceApiSchemaReportCriteria;
  "GET /voice/api/v1/admin/token": ReadonlyArray<string>;
  "POST /voice/api/v1/admin/token": string;
  "DELETE /voice/api/v1/admin/token/{token}": boolean;
  "GET /voice/api/v1/admin/users": ReadonlyArray<RingCentralVoiceApiSchemaUser>;
  "POST /voice/api/v1/admin/users": RingCentralVoiceApiSchemaUser;
  "POST /voice/api/v1/auth/login": RingCentralVoiceApiSchemaUserLoginView;
  "GET /voice/api/integration/v1/admin/users/{mainAccountId}": ReadonlyArray<RingCentralVoiceApiSchemaUser>;
  "GET /voice/api/integration/v1/admin/accounts/{mainAccountId}/subaccounts": ReadonlyArray<RingCentralVoiceApiSchemaSubAccount>;
  "GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups/{agentGroupId}/agents": ReadonlyArray<RingCentralVoiceApiSchemaAgent>;
  "GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups": ReadonlyArray<RingCentralVoiceApiSchemaAgentGroup>;
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/recordings/dialogs/{dialogId}/segments/{segmentId}": RingCentralVoiceApiSchemaErrors;
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/interaction-metadata": RingCentralVoiceApiSchemaWEMInteractionSegmentMetaData2Array;
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/transcripts/dialogs/{dialogId}/segments/{segmentId}": RingCentralVoiceApiSchemaRCInteractionTranscriptData;
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups": ReadonlyArray<RingCentralVoiceApiSchemaQueueGroup>;
  "GET /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/queue-groups/{queueGroupId}/with-agents": ReadonlyArray<RingCentralVoiceApiSchemaCXQueueWithAgents>;
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-queue-stats": ReadonlyArray<RingCentralVoiceApiSchemaAggregatedQueueStats>;
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-extended-stats": ReadonlyArray<RingCentralVoiceApiSchemaExtendedAggregatedQueueStats>;
  "POST /voice/api/cx/integration/v1/accounts/{rcAccountId}/sub-accounts/{subAccountId}/agg-agent-stats": ReadonlyArray<RingCentralVoiceApiSchemaAggregatedAgentStats>;
  "PUT /v1/admin/utilities/tnManager/updateCustomerDnisBulk": boolean;
  "POST /v1/admin/utilities/tnManager/searchDnis": {};
  "PUT /v1/admin/utilities/tnManager/updateBulkDnisPool": RingCentralVoiceApiSchemaDnisBulkUpdateRespose;
  "POST /v1/admin/utilities/tnManager/uploadDnisPool": RingCentralVoiceApiSchemaDnisListPreviewResponse;
  "PUT /platform/api/media/product": RingCentralVoiceApiSchemaProductResponse;
  "POST /platform/api/media/product": RingCentralVoiceApiSchemaProductResponse;
  "GET /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}": RingCentralVoiceApiSchemaProductResponse;
  "DELETE /platform/api/media/product/account/{subAccountId}/type/{productTypeString}/id/{productId}": string;
}
