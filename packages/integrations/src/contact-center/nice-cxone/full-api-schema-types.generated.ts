// Generated provider schema DTOs for NiceCxoneFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type NiceCxoneFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type NiceCxoneFullApiSchemaJsonValue = NiceCxoneFullApiSchemaJsonPrimitive | readonly NiceCxoneFullApiSchemaJsonValue[] | { readonly [key: string]: NiceCxoneFullApiSchemaJsonValue | undefined };

export type NiceCxoneFullApiSchemaGetAddressBooksResponse = {
  addressBooks?: ReadonlyArray<{
  addressBookName?: string;
  addressBookId?: number;
  addressBookType?: string;
  appId?: string;
  agents?: ReadonlyArray<{
  agentId?: number;
  userName?: string;
}>;
  teams?: ReadonlyArray<{
  teamId?: number;
  teamName?: string;
}>;
  skills?: ReadonlyArray<{
  skillId?: number;
  skillName?: string;
}>;
  campaigns?: ReadonlyArray<{
  campaignId?: number;
  campaignName?: string;
}>;
}>;
};

export type NiceCxoneFullApiSchemaPostAddressBooksResponse = {
  resultSet?: {
  addressBookId?: number;
  addressBookType?: string;
  addressBookName?: string;
};
};

export type NiceCxoneFullApiSchemaPostAddressBookAssignmentsRequest = {
  addressBookAssignments: ReadonlyArray<{
  entityId: string;
}>;
};

export type NiceCxoneFullApiSchemaPostAddressBookAssignmentsResponse = {
  assignResults?: ReadonlyArray<{
  success?: boolean;
  entityId?: string;
  error?: string;
  entityType?: string;
}>;
};

export type NiceCxoneFullApiSchemaPutAddressBookDynamicEntriesRequest = {
  addressBookEntries: ReadonlyArray<{
  externalId: string;
  stateId: number;
  externalState: string;
  firstName: string;
  middleName: string;
  lastName: string;
  company: string;
  phone: string;
  mobile: string;
  email: string;
}>;
};

export type NiceCxoneFullApiSchemaPutAddressBookDynamicEntriesResponse = {
  entryResults?: ReadonlyArray<{
  success?: boolean;
  created?: boolean;
  addressBookEntryId?: number;
  externalId?: number;
  error?: string;
}>;
};

export type NiceCxoneFullApiSchemaPostAddressBookEntriesRequest = {
  addressBookEntries: ReadonlyArray<{
  firstName: string;
  middleName?: string;
  lastName: string;
  company?: string;
  phone?: string;
  mobile?: string;
  email?: string;
}>;
};

export type NiceCxoneFullApiSchemaPostAddressBookEntriesResponse = {
  entryResults?: ReadonlyArray<{
  success?: boolean;
  addressBookEntryId?: number;
  error?: string;
}>;
};

export type NiceCxoneFullApiSchemaPutAddressBookEntriesRequest = {
  addressBookEntries: ReadonlyArray<{
  firstName: string;
  middleName: string;
  lastName: string;
  company: string;
  phone: string;
  mobile: string;
  email: string;
}>;
};

export type NiceCxoneFullApiSchemaGetCampaignAddressBooksResponse = {
  lastPollTime?: string;
  addressBooks?: ReadonlyArray<{
  addressBookName?: string;
  addressBookId?: number;
  addressBookType?: string;
  appId?: string;
}>;
};

export type NiceCxoneFullApiSchemaGetSkillAddressBooksResponse = {
  totalRecords?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  lastPollTime?: string;
  addressBooks?: ReadonlyArray<{
  addressBookName?: string;
  addressBookId?: number;
  addressBookType?: string;
  appId?: string;
  fullLoad?: boolean;
  addressBookEntries?: ReadonlyArray<{
  addressBookEntryId?: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  company?: string;
  phone?: string;
  mobile?: string;
  email?: string;
  lastUpdateTime?: string;
  externalId?: string;
  stateId?: number;
  externalState?: string;
  isDeleted?: boolean;
}>;
}>;
};

export type NiceCxoneFullApiSchemaGetTeamAddressBooksResponse = {
  lastPollTime?: string;
  addressBooks?: ReadonlyArray<{
  addressBookName?: string;
  addressBookId?: number;
  addressBookType?: string;
  appId?: string;
}>;
};

export type NiceCxoneFullApiSchemaAgents = ReadonlyArray<{
  userId?: number;
  firstName?: string;
  lastName?: string;
  team?: string;
  teamNumber?: number;
}>;

export type NiceCxoneFullApiSchemaTeams = ReadonlyArray<{
  rowNumber?: number;
  teamId?: number;
  teamName?: string;
}>;

export type NiceCxoneFullApiSchemaStations = ReadonlyArray<{
  stationId?: number;
  stationName?: string;
  phoneNumber?: string;
  callerId?: string;
  status?: boolean;
  profile?: number;
}>;

export type NiceCxoneFullApiSchemaPostAgentSearchResponse = {
  totalRecords?: number;
  businessUnitId?: number;
  lastPollTime?: string;
  hiddenAgents?: number;
  errorCount?: number;
  agentResults?: ReadonlyArray<ReadonlyArray<{
  success?: boolean;
  agentRecord?: {
  agentID_alt?: number;
  userName?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  userID?: string;
  emailAddress?: string;
  isActive?: boolean;
  teamId?: number;
  teamName?: string;
  reportToId?: number;
  reportToName?: string;
  isSupervisor?: boolean;
  lastLogin?: string;
  lastUpdated?: string;
  location?: string;
  custom1?: string;
  custom2?: string;
  custom3?: string;
  custom4?: string;
  custom5?: string;
  internalId?: string;
  profileId?: number;
  profileName?: string;
  timeZone?: string;
  country?: string;
  countryName?: string;
  state?: string;
  city?: string;
  chatRefusalTimeout?: number;
  phoneRefusalTimeout?: number;
  workItemRefusalTimeout?: number;
  defaultDialingPattern?: number;
  defaultDialingPatternName?: string;
  useTeamMaxConcurrentChats?: boolean;
  maxConcurrentChats?: number;
  notes?: string;
  createDate?: string;
  inactiveDate?: string;
  hireDate?: string;
  terminationDate?: string;
  hourlyCost?: number;
  rehireStatus?: boolean;
  employmentType?: number;
  employmentTypeName?: string;
  referral?: string;
  atHome?: boolean;
  hiringSource?: number;
  ntLoginName?: string;
  scheduleNotification?: number;
  federatedId?: string;
  useTeamEmailAutoParkingLimit?: boolean;
  maxEmailAutoParkingLimit?: number;
  sipUser?: string;
  systemUser?: string;
  systemDomain?: string;
  crmUserName?: string;
  useAgentTimeZone?: boolean;
  timeDisplayFormat?: string;
  sendEmailNotifications?: boolean;
  apiKey?: string;
  telephone1?: string;
  telephone2?: string;
  userType?: string;
  isWhatIfAgent?: boolean;
  timeZoneOffset?: string;
  requestContact?: boolean;
  chatThreshold?: number;
  useTeamChatThreshold?: boolean;
  emailThreshold?: number;
  useTeamEmailThreshold?: boolean;
  workItemThreshold?: number;
  useTeamWorkItemThreshold?: boolean;
  contactAutoFocus?: boolean;
  useTeamContactAutoFocus?: boolean;
  useTeamRequestContact?: boolean;
  voiceThreshold?: number;
  useTeamVoiceThreshold?: boolean;
  recordingNumbers?: ReadonlyArray<{
  number: string;
}>;
  subject?: string;
  issuer?: string;
  isOpenIdProfileComplete?: boolean;
  teamUuId?: string;
  maxPreview?: boolean;
  deliveryMode?: string;
  totalContactCount?: number;
  useTeamDeliveryModeSettings?: boolean;
  emailRefusalTimeout?: number;
  voicemailRefusalTimeout?: number;
  smsRefusalTimeout?: number;
  isBillable?: boolean;
  agentVoiceThreshold?: number;
  agentChatThreshold?: number;
  agentWorkItemThreshold?: number;
  agentEmailThreshold?: number;
  agentDeliveryMode?: string;
  agentTotalContactCount?: number;
  agentContactAutoFocus?: boolean;
  agentRequestContact?: boolean;
  agentMaxVersion?: number;
  integratedSoftphoneWebRtcUrls?: ReadonlyArray<{
  urlName?: string;
  weight?: string;
}>;
  customerCard?: boolean;
  locked?: boolean;
  userNameDomain?: string;
  combinedUserNameDomain?: string;
  rowNumber?: number;
  SmsThreshold?: number;
  UseTeamsmsThreshold?: boolean;
  LoginAuthenticatorId?: number;
  DigitalThreshold?: number;
  UseTeamDigitalThreshold?: boolean;
  AgentPhoneTimeout?: number;
  AgentPhoneTimeoutSeconds?: number;
  address1?: string;
  address2?: string;
  zipCode?: string;
  noFixedAddress?: boolean;
  DigitalRefusalTimeout?: number;
  agentCxaClientVersion?: number;
  agentCxaReleasePrevious?: boolean;
  stateCode?: string;
};
}>>;
};

export type NiceCxoneFullApiSchemaGetagentagentidgroups = {
  agentGroups?: ReadonlyArray<{
  groupId?: number;
  groupName?: string;
  isActive?: boolean;
  notes?: string;
  lastUpdated?: string;
}>;
};

export type NiceCxoneFullApiSchemaGetAgentSkillsResponse = {
  totalRecords?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  lastPollTime?: string;
  businessUnitId?: number;
  agentSkillAssignments?: ReadonlyArray<{
  agentID_alt?: number;
  userId?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  agentProficiencyValue?: number;
  agentProficiencyName?: string;
  campaignId?: number;
  campaignName?: string;
  emailFromAddress?: string;
  internalId?: string;
  isActive?: boolean;
  isSkillActive?: boolean;
  teamId?: number;
  teamName?: string;
  isDialer?: boolean;
  isNaturalCalling?: boolean;
  isNaturalCallingRunning?: boolean;
  isOutbound?: boolean;
  lastUpdateTime?: string;
  mediaTypeId?: number;
  mediaTypeName?: string;
  notes?: string;
  requireDisposition?: boolean;
  scriptDisposition?: boolean;
  skillId?: number;
  skillName?: string;
  useACW?: boolean;
  useDisposition?: boolean;
  useSecondaryDispositions?: boolean;
  outboundStrategy?: string;
  priorityBlending?: boolean;
  screenPopTriggerEvent?: string;
  isRestricted?: boolean;
}>;
};

export type NiceCxoneFullApiSchemaPostAgentSkillsResponse = {
  resultSet: {
  errorCount: number;
  skillResults: ReadonlyArray<{
  success: boolean;
  skillId?: number;
  error?: string;
}>;
};
};

export type NiceCxoneFullApiSchemaGetAgentUnassignedSkillsResponse = {
  resultSet: {
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  businessUnitId: number;
  totalRecords: number;
  skills: ReadonlyArray<{
  skillId: number;
  skillName: string;
  isSkillActive: boolean;
  mediaTypeId: number;
  mediaTypeName: string;
  campaignId: number;
  campaignName: string;
}>;
};
};

export type NiceCxoneFullApiSchemaGetAgentSkillsDataResponse = {
  totalRecords?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  agentSkillData: {
  agents: ReadonlyArray<{
  agent: number;
  skills: ReadonlyArray<{
  SkillNo?: number;
  OfferedContacts?: number;
  AnsweredContacts?: number;
  HoldCalls?: number;
  TalkTime?: number;
  HeldTime?: number;
  ACWTime?: number;
  mediaTypeId?: number;
  isOutbound?: boolean;
}>;
}>;
};
};

export type NiceCxoneFullApiSchemaGetAgentsQuickRepliesResponse = {
  totalRecords?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  quickReplies?: ReadonlyArray<{
  quickReplyId?: number;
  title?: string;
  keyWords?: string;
  content?: string;
  isFavorite?: boolean;
  skills?: ReadonlyArray<{
  skillId?: number;
  skillName?: string;
}>;
}>;
};

export type NiceCxoneFullApiSchemaGetAgentQuickRepliesResponse = {
  quickReplies: ReadonlyArray<{
  quickReplyId: number;
  title: string;
  keyWords: string;
  content: string;
  isFavorite: number;
  skills: ReadonlyArray<{
  skillId: number;
  skillName: string;
}>;
}>;
};

export type NiceCxoneFullApiSchemaPostAgentsMessagesRequest = {
  agentMessages: ReadonlyArray<{
  expireMinutes?: number;
  message: string;
  startDate?: string;
  subject: string;
  targetId?: number;
  targetType: "Agent" | "Team" | "Everyone" | "Station";
  validUntil?: string;
}>;
};

export type NiceCxoneFullApiSchemaGetAgentMessagesResponse = {
  messages: ReadonlyArray<{
  messageId: number;
  messageText: string;
  expireTimer: number;
  messageHint: string;
  indicatorId: number;
  subject: string;
  validUntil: string;
  startDate: string;
}>;
};

export type NiceCxoneFullApiSchemaGetAgentIndicatorsResponse = {
  indicators: ReadonlyArray<{
  indicatorName: string;
  senderContactId: number;
  imageFile: string;
  actionType: string;
  action: string;
  toolTip: string;
  enable: boolean;
}>;
};

export type NiceCxoneFullApiSchemaGetAgentPatternsResponse = {
  dialingPatterns: ReadonlyArray<{
  patternId: number;
  patternName: string;
  input: string;
  output: string;
}>;
};

export type NiceCxoneFullApiSchemaGetAgentStatesResponse = {
  agentStates: ReadonlyArray<{
  agentID_alt?: number;
  agentStateId: number;
  agentStateName: string;
  businessUnitId?: number;
  contactId?: number;
  isActive?: boolean;
  isAcw?: boolean;
  isOutbound?: boolean;
  firstName?: string;
  fromAddress?: string;
  lastName?: string;
  lastPollTime?: string;
  lastUpdateTime?: string;
  mediaName?: string;
  mediaType?: number;
  openContacts?: number;
  outStateDescription?: number;
  outStateId?: number;
  skillId?: number;
  skillName?: string;
  startDate?: string;
  stationId?: number;
  stationPhoneNumber?: string;
  teamId?: number;
  teamName?: string;
  toAddress?: string;
  userName?: string;
}>;
};

export type NiceCxoneFullApiSchemaGetTargetScheduledCallbacksResponse = {
  callbacks?: ReadonlyArray<{
  callbackId: number;
  target: string;
  agentId: number;
  skillId: number;
  dialNumber: string;
  origNumber: string;
  firstName: string;
  lastName: string;
  notes: string;
  callbackTime: string;
}>;
};

export type NiceCxoneFullApiSchemaGetChatTranscriptResponse = {
  messages: ReadonlyArray<{
  Text: string;
  TimeStamp: string;
  PartyType: string;
  Label: string;
  RoomId: number;
}>;
};

export type NiceCxoneFullApiSchemaGetEmailTranscriptResponse = {
  emails: ReadonlyArray<{
  emailTypeId: number;
  sentDate: string;
  fromAddress: string;
  toAddress: string;
  ccAddress: string;
  bccAddress: string;
  subject: string;
  rawFileName?: string;
  bodyHtml: string;
  hasAttachments?: boolean;
  attachments?: ReadonlyArray<{
  attachmentName: string;
  attachment: string;
}>;
}>;
};

export type NiceCxoneFullApiSchemaPostContactMonitorRequest = {
  phoneNumber: number;
};

export type NiceCxoneFullApiSchemaPostContactTagsRequest = {
  tags: ReadonlyArray<{
  tagId: number;
}>;
};

export type NiceCxoneFullApiSchemaPostContactTagsResponse = {
  resultSet: ReadonlyArray<{
  errorCount: number;
  tagResults: ReadonlyArray<{
  success: boolean;
  tagId?: number;
  error?: string;
}>;
}>;
};

export type NiceCxoneFullApiSchemaGetContactStateDescriptions = {
  contactStateDescriptions: ReadonlyArray<{
  ContactStateCategory: string;
  ContactStateDescription: string;
  ContactStateId: number;
}>;
};

export type NiceCxoneFullApiSchemaGetBrandingProfilesResponse = {
  resultSet: {
  profileId: number;
  profileName: string;
  brandName: string;
  adminEmail: string;
  active: boolean;
  subdomain: string;
  stylePackName: string;
  coBrand: boolean;
  centralLogo?: string;
  centralFavicon?: string;
  agentLogo?: string;
  chatLogo?: string;
  sfdcAgentLogo?: string;
  maxAgentLogo?: string;
  maxGlanceLogo?: string;
};
};

export type NiceCxoneFullApiSchemaGetBusinessUnitResponse = {
  businessUnits?: ReadonlyArray<{
  businessUnitId?: number;
  businessUnitName?: string;
  globalCallerId?: string;
  phoneTimeout?: number;
  userSessionTimeout?: number;
  startDayOfWeek?: number;
  defaultTimeZone?: string;
  agentsUseDefaultTimeZone?: boolean;
  maxScriptHistory?: number;
  authGUID?: string;
  coBrand?: boolean;
  coBrandProfileId?: number;
  coBrandProfileName?: string;
  connectivityType?: string;
  clientConnectorPort?: number;
  callSuppression?: boolean;
  priorityBasedBlending?: boolean;
  enableFiltering?: boolean;
  allowPredictiveDialing?: boolean;
  enableTrueBlending?: boolean;
  enableSkillAbandonRate?: boolean;
  abandonRateScope?: number;
  defaultConfirmationDeliveryModeId?: number;
  defaultConfirmationDeliveryMode?: string;
  defaultComplianceRecordTypeId?: number;
  defaultComplianceRecordType?: string;
  defaultContactExpirationMinutes?: number;
  daysUntilListSourceIsFlaggedForDeletion?: number;
  scriptNamespace?: string;
  apiPublishedLimit?: number;
  concurrentPortLimit?: number;
  ivrSurveyCallbackLimit?: number;
  stationLimit?: number;
  userLimit?: number;
  concurrentAgentLimit?: number;
  outboundPortLimit?: number;
  agentlessPortLimit?: number;
  maxConferenceParties?: number;
  custom1?: string;
  custom2?: string;
  custom3?: string;
  custom4?: string;
  custom5?: string;
  isActive?: boolean;
  presenceMasterId?: number;
  tenantId?: string;
  parentTenantId?: string;
  features?: ReadonlyArray<{
  productId?: number;
  productDescription?: string;
  isEnabled?: boolean;
}>;
  fileExtensions?: ReadonlyArray<{
  extension: string;
}>;
  timeZones?: ReadonlyArray<{
  displayName: string;
  standardName: string;
}>;
  parentBusinessUnitID?: number;
  isIntegratedTenant?: boolean;
  niceEngageConfigId?: number;
  niceWFMConfigID?: number;
  niceQMTenantID?: number;
  niceWFMTenantId?: number;
  ieX_CustomerName?: string;
  isMultiContactHandling?: boolean;
  enableMaxReleasePreview?: boolean;
  isVFMEnabled?: boolean;
  maxClientVersion?: number;
  permitPerAgentVersioning?: boolean;
  permitDevVersion?: boolean;
  defaultToPrevious?: boolean;
  emergencyCallNotificationEmail?: string;
}>;
};

export type NiceCxoneFullApiSchemaGetCountriesResponse = {
  countries: ReadonlyArray<{
  countryId: number;
  countryCode: string;
  countryName: string;
}>;
};

export type NiceCxoneFullApiSchemaGetCountryStatesResponse = {
  resultSet: {
  countryId: number;
  countryName: string;
  states?: ReadonlyArray<{
  stateId: number;
  stateName: string;
  stateCode: string;
}>;
};
};

export type NiceCxoneFullApiSchemaGetDataDefinitionsDataTypesResponse = {
  dataTypes: ReadonlyArray<{
  dataTypeId: number;
  dataTypeName: string;
}>;
};

export type NiceCxoneFullApiSchemaGetFilesResponse = {
  files: {
  file: string;
  fileName: string;
};
};

export type NiceCxoneFullApiSchemaPostUploadFile = {
  fileName: string;
  file: string;
  overwrite?: boolean;
};

export type NiceCxoneFullApiSchemaDeleteFile = {
  fileName: string;
};

export type NiceCxoneFullApiSchemaGetFeedbackCategoriesAndPrioritiesResponse = {
  categoriesAndPriorities?: {
  feedbackCategories: ReadonlyArray<{
  title: number;
  name: string;
}>;
  feedbackPriorities: ReadonlyArray<{
  name: string;
}>;
};
};

export type NiceCxoneFullApiSchemaGetHiringSourcesResponse = {
  sources: ReadonlyArray<{
  sourceId: number;
  sourceName: string;
}>;
};

export type NiceCxoneFullApiSchemaPostHiringSourcesResponse = {
  sourceId: number;
};

export type NiceCxoneFullApiSchemaGetLocationsResponse = {
  locations: ReadonlyArray<{
  locationId?: number;
  locationName: string;
  agents?: ReadonlyArray<{
  agentId: number;
  firstName: string;
  lastName: string;
}>;
}>;
};

export type NiceCxoneFullApiSchemaGetMediaTypesResponse = {
  mediaTypes: ReadonlyArray<{
  mediaTypeName?: string;
  mediaTypeId?: number;
  subTypes?: ReadonlyArray<{
  subTypeId?: number;
  subTypeName?: string;
}>;
}>;
};

export type NiceCxoneFullApiSchemaGetMessageTemplatesResponse = {
  messageTemplates: ReadonlyArray<{
  templateId: number;
  templateName: string;
  templateTypeId: number;
  templateTypeDesc: string;
  isActive: boolean;
  isHTML?: boolean;
  ccAddress?: string;
  bccAddress?: string;
  replyToAddress?: string;
  fromName?: string;
  fromAddress?: string;
  body?: string;
  subject?: string;
  isRTL?: boolean;
}>;
};

export type NiceCxoneFullApiSchemaPostMessageTemplatesResponse = {
  templateId: number;
};

export type NiceCxoneFullApiSchemaGetMessageTemplateResponse = {
  messageTemplate: {
  templateId: number;
  templateName: string;
  templateTypeId: number;
  templateTypeDesc: string;
  isActive: boolean;
  isHTML?: boolean;
  ccAddress?: string;
  bccAddress?: string;
  replyToAddress?: string;
  fromName?: string;
  fromAddress?: string;
  body?: string;
  subject?: string;
  isRTL?: boolean;
};
};

export type NiceCxoneFullApiSchemaGetPermissionsResponse = {
  permissions: ReadonlyArray<{
  BusinessUnitId: number;
  Key: string;
  Value: string;
}>;
};

export type NiceCxoneFullApiSchemaGetPhoneCodesResponse = {
  phoneCodes: ReadonlyArray<{
  transportCode: number;
  transportTypeId: number;
  transportTypeDesc: string;
  note: string;
}>;
};

export type NiceCxoneFullApiSchemaGetPointsOfContactResponse = {
  businessUnitId?: number;
  lastPollTime?: string;
  pointsOfContact: ReadonlyArray<{
  businessUnitId?: number;
  contactAddress?: string;
  contactCode?: number;
  contactDescription?: string;
  defaultSkillId?: number;
  isActive?: boolean;
  mediaTypeId?: number;
  subType?: string;
  mediaTypeName?: string;
  notes?: string;
  outboundSkill?: boolean;
  scriptName?: string;
}>;
};

export type NiceCxoneFullApiSchemaSecurityProfiles = {
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  profiles?: ReadonlyArray<NiceCxoneFullApiSchemaSecurityProfile>;
};

export type NiceCxoneFullApiSchemaGetSecurityProfileResponse = {
  profile: {
  profileId: number;
  profileName: string;
  description: string;
  isActive: boolean;
  isExternal: boolean;
  pwUseRandom: boolean;
  pwMinLength: number;
  pwMinLower: number;
  pwMinUpper: number;
  pwMinNumeric: number;
  pwMinNonAlpha: number;
  assignedAgents?: ReadonlyArray<{
  agentId: number;
  firstName: string;
  lastName: string;
}>;
};
};

export type NiceCxoneFullApiSchemaGetServerTimeResponse = {
  ServerTime: string;
};

export type NiceCxoneFullApiSchemaGetTagsResponse = {
  tags: ReadonlyArray<{
  tagId: number;
  tagName: string;
  isActive: boolean;
  notes: string;
}>;
};

export type NiceCxoneFullApiSchemaPostTagsResponse = {
  tagId: number;
};

export type NiceCxoneFullApiSchemaGetTimeZonesResponse = {
  timeZones: ReadonlyArray<{
  displayName: string;
  standardName: string;
  offset: string;
}>;
};

export type NiceCxoneFullApiSchemaGetgroupsresponse = {
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  totalRecords?: number;
  groups?: ReadonlyArray<{
  groupId?: number;
  groupName?: string;
  notes?: string;
  isActive?: boolean;
  lastUpdated?: string;
}>;
};

export type NiceCxoneFullApiSchemaPostgroupsrequest = {
  groups: ReadonlyArray<{
  groupName?: string | null;
  isActive?: boolean;
  notes?: string | null;
} | null> | null;
};

export type NiceCxoneFullApiSchemaPostgroupsresponse = {
  errorCount?: number;
  groupResults?: ReadonlyArray<{
  success?: boolean;
  groupId?: number;
  error?: string;
}>;
};

export type NiceCxoneFullApiSchemaGetgroupgroupidresponse = {
  totalRecords?: number;
  groups?: ReadonlyArray<{
  groupId?: number;
  groupName?: string;
  notes?: string;
  isActive?: boolean;
  lastUpdated?: string;
}>;
};

export type NiceCxoneFullApiSchemaDeletegroupgroupidrequest = {
  agents?: ReadonlyArray<{
  agentId?: number;
}>;
};

export type NiceCxoneFullApiSchemaDeletegroupgroupidresponse = {
  errorCount?: number;
  agentResults?: ReadonlyArray<{
  agentId: number;
  success?: boolean;
  error?: string;
}>;
};

export type NiceCxoneFullApiSchemaGetDNCGroupsResponse = {
  resultSet: {
  totalGroups: number;
  dncGroups?: ReadonlyArray<{
  dncGroupId: number;
  dncGroupName: string;
  dncGroupDescription: string;
  validRecords: number;
  isActive: boolean;
  isRemoved: boolean;
  createDate: string;
  lastUpdateTime: string;
}>;
};
};

export type NiceCxoneFullApiSchemaGetDNCGroupResponseById = {
  resultSet?: {
  dncGroups?: ReadonlyArray<{
  dncGroupId?: number;
  dncGroupName?: string;
  dncGroupDescription?: string;
  validRecords?: number;
  isActive?: boolean;
  isRemoved?: boolean;
  createDate?: string;
  lastUpdateTime?: string;
}>;
};
};

export type NiceCxoneFullApiSchemaPostDNCGroupsResponse = {
  dncGroups: ReadonlyArray<{
  dncGroupId: number;
  dncGroupName: string;
  dncGroupDescription: string;
  validRecords: number;
  isActive: boolean;
  isRemoved: boolean;
  createDate: string;
  lastUpdateTime: string;
}>;
};

export type NiceCxoneFullApiSchemaGetDNCGroupContributingSkillsResponse = {
  totalRecords?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  contributingSkills: ReadonlyArray<{
  skillId: number;
  skillName: string;
}>;
};

export type NiceCxoneFullApiSchemaGetDNCGroupRecordsResponseById = {
  resultSet?: {
  totalRecords?: number;
  dncRecords?: ReadonlyArray<{
  recordId?: number;
  createdBy?: number;
  phoneNumber?: string;
  formattedPhone?: string;
  expiredDate?: string;
  dateCollected?: string;
  lastUpdateTime?: string;
}>;
};
};

export type NiceCxoneFullApiSchemaPostDNCGroupRecordsResponse = {
  resultSet?: {
  errorCount?: number;
  recordResults?: ReadonlyArray<{
  success?: boolean;
  error?: string;
  formattedPhone?: string;
}>;
};
};

export type NiceCxoneFullApiSchemaDeleteDNCGroupRecordsResponse = {
  errorCount: number;
  recordResults: ReadonlyArray<{
  success?: boolean;
  error?: string;
  formattedPhone?: string;
}>;
};

export type NiceCxoneFullApiSchemaGetDNCGroupScrubbedSkillsResponse = {
  totalRecords?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  scrubbedSkills: ReadonlyArray<{
  skillId: number;
  skillName: string;
}>;
};

export type NiceCxoneFullApiSchemaGetSearchDNCGroupsResponse = {
  searchResults: ReadonlyArray<{
  dncGroupId: number;
  dncGroupName: string;
  dncGroupDescription: number;
  formattedPhone: string;
  expiredDate: string;
  dateCollected: string;
  lastUpdateTime: string;
}>;
};

export type NiceCxoneFullApiSchemaGetCallingListsResponse = {
  totalRecords?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  callingLists: ReadonlyArray<{
  listId: number;
  listName: string;
  prospectiveContactCount: number;
  status: "Active" | "Inactive";
  totalRecords: number;
  invalidRecords: number;
  validRecords: number;
  finalizedRecords: number;
  createDate: string;
  uploadDate: string;
  updateDate: string;
  removeDate: string;
  skills?: ReadonlyArray<{
  skillId?: string;
  skillName?: string;
  totalRecords?: string;
  freshRecords?: string;
  finalizedRecords?: string;
  retriedRecords?: string;
}>;
}>;
};

export type NiceCxoneFullApiSchemaGetCallingListResponseById = {
  resultSet?: {
  listName?: string;
  lastPollTime?: string;
  prospectiveContactCount?: number;
  status?: string;
  totalRecords?: number;
  invalidRecords?: number;
  validRecords?: number;
  finalizedRecords?: number;
  createDate?: string;
  uploadDate?: string;
  updateDate?: string;
  removeDate?: string;
  listExpirationDate?: string;
  skills?: ReadonlyArray<{
  skillId?: number;
  skillName?: string;
  totalRecords?: number;
  freshRecords?: number;
  finalizedRecords?: number;
  retriedRecords?: number;
}>;
  contactRecords?: ReadonlyArray<{
  externalId?: string;
  score?: string;
  customer1?: string;
  customer2?: string;
  callerId?: string;
  priority?: string;
  complianceReq?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  timeZone?: string;
  confirmReq?: string;
  agentId?: number;
  overrideFinalization?: boolean;
  callRequestTime?: string;
  callRequestStaleMins?: number;
  notes?: string;
  expirationDate?: string;
  icAttempts?: number;
  icFinalStatus?: string;
  icAssignedSkillId?: number;
  icConfirmationReq?: string;
  icComplianceRecord?: string;
  icPriority?: string;
  icSourceActive?: boolean;
  icSourceRemoved?: boolean;
  icTimeZoneNames?: string;
  icTargetAgent?: number;
  icTargetAgentName?: string;
  icDateOfLastCall?: string;
  icLastCallDuration?: string;
  icSystemClassification?: number;
  icSystemClassificationName?: string;
  icAgentDisposition?: number;
  icAgentDispositionDesc?: string;
  icAgentNo?: number;
  icAgentName?: string;
  icCallNotes?: string;
  icCommitmentAmount?: string;
  icCallerIdUsed?: boolean;
  icDeliveredComplianceRecord?: boolean;
  icDeliveredConfirmationRequired?: boolean;
  icContactDeliveryType?: boolean;
  icDeliveredPriority?: boolean;
  icDeliveredAsCallback?: boolean;
  icDeliveredAgentSpecific?: boolean;
  icCallbackDateTime?: string;
  icCallbackAgent?: number;
  icCallbackAgentName?: string;
  icCallbackNumber?: string;
  icCallbackNotes?: string;
  icCreateDate?: string;
  icModifiedDate?: string;
  icProspectiveContactDestValue?: number;
  icProspectiveContactDestDesc?: string;
  icProspectiveContactDestType?: string;
  icProspectiveContactExpireDate?: string;
  icCallRequestTime?: string;
  icCallRequestStaleMins?: number;
  destinations?: ReadonlyArray<{
  formattedDestination?: string;
  description?: string;
  compliance?: string;
  maxAttempts?: number;
}>;
  otherFields?: ReadonlyArray<{
  fieldName?: string;
  fieldMapping?: string;
  fieldValue?: string;
}>;
}>;
};
};

export type NiceCxoneFullApiSchemaGetCallingListAttemptsResponse = {
  resultSet?: {
  listName?: string;
  prospectiveContactCount?: number;
  status?: string;
  totalRecords?: number;
  validRecords?: number;
  invalidRecords?: number;
  finalizedRecords?: number;
  createDate?: string;
  uploadDate?: string;
  updateDate?: string;
  removeDate?: string;
  contactAttempts?: ReadonlyArray<{
  contactId?: number;
  externalId?: string;
  formattedPhone?: string;
  dateOfCall?: string;
  lastDuration?: string;
  systemClass?: number;
  systemClassName?: string;
  agentDisp?: number;
  agentDispDesc?: string;
  agentId?: number;
  confirmReq?: boolean;
  complianceRec?: boolean;
  deliveryType?: string;
  callNotes?: string;
  commitAmount?: string;
  callbackDate?: string;
  amDefinedExperience?: string;
  amWaveFile?: string;
  callerIdUsed?: string;
  callRequestDate?: string;
  causeCode?: number;
  deliveredAgentSpecific?: boolean;
  deliveredAsCallback?: boolean;
  deliveredPriority?: boolean;
  detectionType?: string;
  pcDestinationDesc?: string;
  pcDestinationValue?: string;
  targetAgent?: number;
  timeZone?: string;
}>;
};
};

export type NiceCxoneFullApiSchemaPostListUpload = {
  listFile: string;
  fileName?: string;
  skillId?: number;
  defaultTimeZone?: string;
  forceOverwrite: boolean;
  expirationDate: string;
  startSkill: boolean;
  sendEmail: boolean;
};

export type NiceCxoneFullApiSchemaGetCallingListjobResponse = {
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  businessUnitId?: number;
  lastPollTime?: string;
  totalRecords?: number;
  uploadJobs?: ReadonlyArray<{
  jobId?: number;
  listId?: number;
  listName?: string;
  startDate?: string;
  submitDate?: string;
  isComplete?: boolean;
  isCancelled?: boolean;
  completedDate?: string;
}>;
};

export type NiceCxoneFullApiSchemaGetCallingListByJobIDResponse = {
  uploadJobs?: ReadonlyArray<{
  jobId?: number;
  listId?: number;
  listName?: string;
  startDate?: string;
  submitDate?: string;
  isComplete?: boolean;
  isCancelled?: boolean;
  completedDate?: string;
}>;
};

export type NiceCxoneFullApiSchemaRoutingAttributeGetListResponse = {
  routingAttributes?: ReadonlyArray<NiceCxoneFullApiSchemaRoutingAttribute>;
  totalRecords?: number;
};

export type NiceCxoneFullApiSchemaRoutingAttribute = {
  Attribute_No?: number;
  Bus_No?: number;
  Attribute_Name?: string;
  Status?: "CURR" | "DISC";
  Notes?: string;
};

export type NiceCxoneFullApiSchemaRoutingAttributePutRequest = {
  routingAttributeName?: string;
  status?: string;
  notes?: string;
  modAgentNo?: number;
};

export type NiceCxoneFullApiSchemaRoutingAttributeAgentsResponse = {
  routingAttributes?: ReadonlyArray<NiceCxoneFullApiSchemaRoutingAttributeAgent>;
  totalRecords?: number;
  hiddenAgents?: number;
};

export type NiceCxoneFullApiSchemaAgentRoutingAttributesResponse = {
  routingAttributes?: ReadonlyArray<NiceCxoneFullApiSchemaAgentRoutingAttributes>;
  totalRecords?: number;
  hiddenAgents?: number;
};

export type NiceCxoneFullApiSchemaAgentRoutingAttributePutRequest = {
  routingAttributeNo?: number;
  status?: string;
  modAgentNo?: number;
};

export type NiceCxoneFullApiSchemaAgentRoutingAttribute = {
  RoutingAttributeNo?: number;
  Success?: boolean;
};

export type NiceCxoneFullApiSchemaAgentRoutingAttributeDeleteRequest = {
  agentNo?: number;
  modAgentNo?: number;
};

export type NiceCxoneFullApiSchemaGetSkillAgentsResponse = {
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  lastPollTime: string;
  businessUnitId: number;
  totalRecords: number;
  hiddenAgents?: number;
  agentSkillAssignments?: ReadonlyArray<{
  agentId: number;
  userId?: string;
  firstName: string;
  middleName: string;
  lastName: string;
  agentProficiencyValue: number;
  agentProficiencyName: string;
  agentSklStatus?: string;
  campaignId: number;
  campaignName: string;
  emailFromAddress: string;
  internalId: string;
  isActive: boolean;
  isAssigned?: boolean;
  isSkillActive: boolean;
  isDialer: boolean;
  isNaturalCalling: boolean;
  isNaturalCallingRunning: boolean;
  isOutbound: boolean;
  lastUpdateTime: string;
  mediaTypeId: number;
  mediaTypeName: string;
  notes: string;
  outboundStrategy: string;
  priorityBlending: boolean;
  requireDisposition: boolean;
  scriptDisposition: boolean;
  skillId: number;
  skillName: string;
  teamId: number;
  teamName: string;
  useACW: boolean;
  useDisposition: boolean;
  useSecondaryDispositions: boolean;
  screenPopTriggerEvent: string;
}>;
};

export type NiceCxoneFullApiSchemaPostSkillAgentsRequest = {
  agents: ReadonlyArray<{
  agentId: string;
  isActive?: boolean;
  proficiency?: 1 | 2 | 3 | 4 | 5;
}>;
};

export type NiceCxoneFullApiSchemaPostSkillAgentsResponse = {
  resultSet: {
  errorCount: number;
  agentResults: ReadonlyArray<{
  success: boolean;
  agentId?: number;
  error?: string;
}>;
};
};

export type NiceCxoneFullApiSchemaDeleteSkillAgentsResponse = {
  resultSet: {
  errorCount: number;
  agentResults: ReadonlyArray<{
  success: boolean;
  agentId?: number;
  error?: boolean;
}>;
};
};

export type NiceCxoneFullApiSchemaGetSkillAgentsUnassignedResponse = {
  resultSet: {
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  totalRecords: number;
  agents?: ReadonlyArray<{
  agentId: number;
  firstName: string;
  middleName: string;
  lastName: string;
  isActive: boolean;
  teamId: number;
  teamName: string;
}>;
};
};

export type NiceCxoneFullApiSchemaGetSkillsCallDataResponse = {
  SkillCallData: {
  SkillName: string;
  SkillId: number;
  BusinessUnitId: number;
  EnteredQueueContacts: number;
  OfferedContacts: number;
  AnsweredContacts: number;
  AnsweredServiceLevelContacts: number;
  AbandonedContacts: number;
  AbandonedTime: number;
  AverageAbandonedTime: number;
  AverageACDTime: number;
  AverageHandleTime: number;
  AverageSpeedAnswerTime: number;
};
};

export type NiceCxoneFullApiSchemaGetSkillDispositionsResponse = {
  totalRecords?: number;
  _links?: {
  self: string;
  next?: string;
  previous?: string;
};
  skillId?: number;
  skillName?: string;
  dispositions?: ReadonlyArray<{
  dispositionId?: number;
  dispositionName?: string;
  displayOrder?: number;
  classification?: string;
  reportingGroup?: string;
  systemOutcome?: string;
  requireCommitmentAmount?: boolean;
  requireRescheduleDate?: boolean;
  agentSpecific?: boolean;
  isPreviewDisposition?: boolean;
  dispositionCategoryName?: string;
}>;
};

export type NiceCxoneFullApiSchemaGetSkillDispositionsUnassignedResponse = {
  totalRecords?: number;
  dispositions?: ReadonlyArray<{
  dispositionId: number;
  dispositionName: string;
  displayOrder?: number;
  classification: string;
  reportingGroup: string;
  systemOutcome: string;
  requireCommitmentAmount: boolean;
  requireRescheduleDate: boolean;
  agentSpecific: boolean;
  isPreviewDisposition?: boolean;
}>;
};

export type NiceCxoneFullApiSchemaGetSkillTagsResponse = {
  totalRecords?: number;
  _links?: {
  self: string;
  next?: string;
  previous?: string;
};
  resultSet?: {
  skillId?: string;
  skillName?: string;
  tags?: ReadonlyArray<{
  tagId?: string;
  tagName?: string;
  isActive?: string;
  notes?: string;
}>;
};
};

export type NiceCxoneFullApiSchemaPostSkillTagsRequest = {
  tags: ReadonlyArray<{
  tagId: number;
}>;
};

export type NiceCxoneFullApiSchemaPostSkillTagsResponse = {
  resultSet: {
  errorCount: number;
  tagResults: ReadonlyArray<{
  success: boolean;
  tagId?: number;
  error?: string;
}>;
};
};

export type NiceCxoneFullApiSchemaDeleteSkillTagsResponse = {
  errorCount?: string;
  tagResults?: ReadonlyArray<{
  success?: string;
  tagId?: string;
  error?: string;
}>;
};

export type NiceCxoneFullApiSchemaGetOutBoundSkillSettingsResponse = {
  minimumRetryMinutes?: number;
  maximumAttempts?: number;
  defaultContactExpiration?: number;
  getPriorityContactsOnContactInsertion?: boolean;
  loadCallbacks?: boolean;
  loadFresh?: boolean;
  loadNonFresh?: boolean;
  overrideBusinessUnitAbandonRate?: boolean;
  maximumRingingDuration?: number;
  beginDampenPercentage?: number;
  abandonRateCutoff?: number;
  abandonRateThreshold?: number;
  inactiveBlenderTimer?: number;
  maximumRatio?: number;
  aggressiveness?: string;
  endOfListNotificationsDelay?: number;
  notifyAgentsWhenListIsEmpty?: boolean;
  percentageOfAgentsBeforeOverdial?: number;
  blockMultipleCalls?: boolean;
  consecutiveAttemptsWithoutALiveConnect?: number;
  enableDialingByProficiency?: boolean;
  proficiencyFactor?: number;
  waitTimeFactor?: number;
  maxConcurrentCallsPerAgent?: number;
  maxWaitTimeSeconds?: number;
  deliverCallbacksOnDNCHolidays?: boolean;
  deliverPrioritiesOnDNCHolidays?: boolean;
};

export type NiceCxoneFullApiSchemaUpdateSkillGenral = {
  generalSettings: {
  minimumRetryMinutes?: number | null;
  maximumAttempts?: number | null;
  defaultContactExpiration?: number | null;
  getPriorityContactsOnContactInsertion?: boolean;
  loadCallbacks?: boolean;
  loadFresh?: boolean;
  loadNonFresh?: boolean;
  overrideBusinessUnitAbandonRate?: boolean;
  maximumRingingDuration?: number | null;
  beginDampenPercentage?: number | null;
  abandonRateCutoff?: number | null;
  abandonRateThreshold?: number | null;
  inactiveBlenderTimer?: number | null;
  maximumRatio?: number | null;
  aggressiveness?: string | null;
  endOfListNotificationsDelay?: number | null;
  notifyAgentsWhenListIsEmpty?: boolean | null;
  percentageOfAgentsBeforeOverdial?: number | null;
  blockMultipleCalls?: boolean | null;
  consecutiveAttemptsWithoutALiveConnect?: number | null;
  enableDialingByProficiency?: boolean | null;
  proficiencyFactor?: number;
  waitTimeFactor?: number;
  maxConcurrentCallsPerAgent?: number;
  maxWaitTimeSeconds?: number;
  deliverCallbacksOnDNCHolidays?: boolean | null;
  deliverPrioritiesOnDNCHolidays?: boolean | null;
};
};

export type NiceCxoneFullApiSchemaStationProfileRequestBody = {
  stationProfileName?: string;
  stationTimeout?: number;
};

export type NiceCxoneFullApiSchemaGetSessionsResponse = {
  sessionId: string;
};

export type NiceCxoneFullApiSchemaGetNextEventResponse = {
  sessionId: string;
  events: ReadonlyArray<{
  IISHost: string;
  VCHost: string;
  Type: string;
  eventProperty_1?: {};
  eventProperty_2?: string;
  eventProperty_3?: {};
  "eventProperty_..."?: {};
  eventProperty_n?: {};
}>;
};

export type NiceCxoneFullApiSchemaPostReskill = {
  continueReskill?: boolean;
};

export type NiceCxoneFullApiSchemaDisposition = {
  primaryDispositionId: number;
  primaryDispositionNotes?: string;
  primaryCommitmentAmount?: number;
  primaryCallbackTime?: string;
  primaryCallbackNumber?: string;
  secondaryDispositionId?: number;
  previewDispositionId?: number;
};

export type NiceCxoneFullApiSchemaOidcDiscovery = {
  issuer?: "https://cxone.niceincontact.com" | "https://cxone-gov.niceincontact.com";
  authorization_endpoint?: string;
  token_endpoint?: string;
  token_endpoint_auth_methods_supported?: ReadonlyArray<"client_secret_basic">;
  token_endpoint_auth_signing_alg_values_supported?: ReadonlyArray<"RS256">;
  end_session_endpoint?: string;
  scopes_supported?: ReadonlyArray<"openid">;
  response_types_supported?: ReadonlyArray<"code">;
  subject_types_supported?: ReadonlyArray<"public">;
  id_token_signing_alg_values_supported?: ReadonlyArray<"RS256">;
  request_object_signing_alg_values_supported?: ReadonlyArray<"none">;
  display_values_supported?: ReadonlyArray<"page" | "popup">;
  claim_types_supported?: ReadonlyArray<"normal">;
};

export type NiceCxoneFullApiSchemaAuthenticateOIDCRequest = {
  tenantId?: string;
  resellerId?: string;
  scope: "openid";
  response_type: "code";
  client_id: string;
  redirect_uri: string;
  state?: string;
  nonce?: string;
  display?: "page" | "popup";
  prompt?: "none" | "login";
  max_age?: number;
  id_token_hint?: string;
  login_hint?: string;
  acr_values?: ReadonlyArray<string>;
  ui_locales?: ReadonlyArray<string>;
  code_challenge?: string;
  code_challenge_method?: "S256";
};

export type NiceCxoneFullApiSchemaAuthenticateUXRequest = {
  tenantFQDN: string;
  username?: string;
  state: string;
};

export type NiceCxoneFullApiSchemaTokenAuthcodeRequest = {
  client_id?: string;
  client_secret?: string;
  grant_type: "authorization_code";
  code: string;
  redirect_uri: string;
  code_verifier?: string;
};

export type NiceCxoneFullApiSchemaTokenAccessKeyRequest = {
  client_id?: string;
  client_secret?: string;
  grant_type: "password";
  username: string;
  password: string;
};

export type NiceCxoneFullApiSchemaTokenRefreshRequest = {
  client_id: string;
  grant_type: "refresh_token";
  refresh_token: string;
};

export type NiceCxoneFullApiSchemaTokenExchangeRequest = {
  grant_type: "token-exchange";
  subject_token: string;
  subject_token_type: "access_token";
};

export type NiceCxoneFullApiSchemaTokenImpersonationExchangeRequest = {
  grant_type: "urn:ietf:params:oauth:grant-type:associated-user-token-exchange" | "urn:ietf:params:oauth:grant-type:role-impersonation-token-exchange" | "urn:ietf:params:oauth:grant-type:user-impersonation-token-exchange" | "urn:ietf:params:oauth:grant-type:impersonate-configure-token-exchange" | "urn:ietf:params:oauth:grant-type:impersonate-support-token-exchange";
  audience: string;
  subject_token: string;
  subject_token_type: "access_token";
};

export type NiceCxoneFullApiSchemaLogoutRequest = {
  id_token_hint?: string;
  post_logout_redirect_uri?: string;
  state?: string;
  ui_locales?: ReadonlyArray<string>;
  yes?: string;
  no?: string;
};

export type NiceCxoneFullApiSchemaGetAssociationsResponse = {
  userId?: string;
  username?: string;
  tenantName?: string;
};

export type NiceCxoneFullApiSchemaCreateApplicationV1 = (NiceCxoneFullApiSchemaCreateApplicationV1Full | NiceCxoneFullApiSchemaCreateApplicationV1Existing);

export type NiceCxoneFullApiSchemaGetCreatedApplicationV1 = (NiceCxoneFullApiSchemaGetApplicationBaseV1 & NiceCxoneFullApiSchemaSECRET);

export type NiceCxoneFullApiSchemaListApplicationV1 = NiceCxoneFullApiSchemaListOfApplicationV1;

export type NiceCxoneFullApiSchemaGetApplicationV1 = NiceCxoneFullApiSchemaGetApplicationBaseV1;

export type NiceCxoneFullApiSchemaPatchApplicationV1 = NiceCxoneFullApiSchemaPatchApplicationBaseV1;

export type NiceCxoneFullApiSchemaERROR = {
  error?: string;
  errorDescription?: string;
};

export type NiceCxoneFullApiSchemaBody = {
  userId?: string;
  tenantId?: string;
};

export type NiceCxoneFullApiSchemaPostAccessKeysResponse = {
  resultSet?: {
  accessKeyId?: string;
  accessKeySecret?: string;
  userId?: string;
  tenantId?: string;
  agentId?: number;
  billingId?: number;
  isActive?: boolean;
};
};

export type NiceCxoneFullApiSchemaBody1 = {
  isActive?: boolean;
};

export type NiceCxoneFullApiSchemaGetAccessKeysResponse = {
  totalRecords?: number;
  _links?: NiceCxoneFullApiSchemaGetAccessKeysResponseLinks;
  accessKeys?: ReadonlyArray<NiceCxoneFullApiSchemaGetAccessKeysResponseAccessKeys>;
};

export type NiceCxoneFullApiSchemaGetAccessKeyIDResponse = {
  resultSet?: {
  accessKeySecret?: string;
  userId?: string;
  tenantId?: string;
  agentId?: number;
  billingId?: number;
  isActive?: boolean;
  lastUsedDate?: string;
};
};

export type NiceCxoneFullApiSchemaSearchCritera = {
  filter?: {
  readonly [key: string]: ReadonlyArray<string> | undefined;
};
  operations?: {
  readonly [key: string]: "LIKE" | "BETWEEN" | "NOT" | undefined;
};
  page?: NiceCxoneFullApiSchemaPage;
  metrices?: NiceCxoneFullApiSchemaMetrices;
  orderBy?: {
  readonly [key: string]: "ASC" | "DESC" | undefined;
};
};

export type NiceCxoneFullApiSchemaRoleSearchResponseV1 = {
  roles?: ReadonlyArray<NiceCxoneFullApiSchemaRoleV1>;
};

export type NiceCxoneFullApiSchemaProductUsageRequest = {
  tenantId: string;
  productTypeId: number;
  productQuantity: number;
  queryDate: string;
  partnerBillingId?: number;
};

export type NiceCxoneFullApiSchemaProductUsage = {
  success?: boolean;
};

export type NiceCxoneFullApiSchemaProductUsageFetchResponse = {
  totalRecords?: number;
  productUsage?: ReadonlyArray<NiceCxoneFullApiSchemaProductUsageGetResponse>;
  skip?: number;
  top?: number;
  links?: {
  readonly [key: string]: string | undefined;
};
};

export type NiceCxoneFullApiSchemaCreateCorrelationRequest = {
  correlationId: string;
  entity: string;
  domain: string;
  entityId: string;
  entityName: string;
  version?: number;
  isPrimary: boolean;
  status?: "ACTIVE" | "INACTIVE" | "PENDING";
  syncDone?: boolean;
};

export type NiceCxoneFullApiSchemaCorrelationResponse = {
  correlationId?: string;
  entity?: string;
  domain?: string;
  entityId?: string;
  entityName?: string;
  version?: number;
  isPrimary?: boolean;
  status?: string;
  syncDone?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type NiceCxoneFullApiSchemaUpdateCorrelationRequest = {
  version?: number;
  status?: "ACTIVE" | "INACTIVE" | "PENDING";
  syncDone?: boolean;
  entityName?: string;
};

export type NiceCxoneFullApiSchemaUpdateCorrelationResponse = {
  success?: boolean;
  message?: string;
};

export type NiceCxoneFullApiSchemaSearchCorrelationRequest = {
  correlationId?: string;
  entityType?: string;
  domain?: string;
  entityId?: string;
  status?: "ACTIVE" | "INACTIVE" | "PENDING";
  tenantId?: string;
  page?: number;
  pageSize?: number;
};

export type NiceCxoneFullApiSchemaSearchCorrelationResponse = {
  totalRecords?: number;
  page?: number;
  pageSize?: number;
  correlations?: ReadonlyArray<NiceCxoneFullApiSchemaCorrelationResponse>;
};

export type NiceCxoneFullApiSchemaCreateDivisionRequest = {
  name: string;
  description?: string;
  parentDivisionId?: number;
  status: "ACTIVE" | "INACTIVE";
  isDefault: boolean;
  divisionType?: string;
  billingCode?: number;
};

export type NiceCxoneFullApiSchemaCreateDivisionResponse = {
  divisionId?: number;
};

export type NiceCxoneFullApiSchemaUpdateDivisionRequest = {
  divisionId?: number;
  name: string;
  description?: string;
  parentDivisionId?: number;
  status: "ACTIVE" | "INACTIVE";
  isDefault: boolean;
  divisionType?: string;
  billingCode?: number;
};

export type NiceCxoneFullApiSchemaUpdateDivisionResponse = {
  success?: boolean;
};

export type NiceCxoneFullApiSchemaDivisionResponse = {
  name?: string;
  divisionId?: number;
  description?: string;
  parentDivisionId?: number;
  status?: "ACTIVE" | "INACTIVE";
  isDefault?: boolean;
  divisionType?: string;
  parentDivisionName?: string;
  billingCode?: number;
  level?: number;
};

export type NiceCxoneFullApiSchemaDivisionSearchRequest = {
  filter?: {
  readonly [key: string]: ReadonlyArray<string> | undefined;
};
  fields?: ReadonlyArray<string>;
  skip?: number;
  top?: number;
  operations?: {
  readonly [key: string]: "LIKE" | "BETWEEN" | "NOT" | undefined;
};
  orderBy?: {
  readonly [key: string]: "ASC" | "DESC" | undefined;
};
};

export type NiceCxoneFullApiSchemaDivisionSearchResponse = {
  totalRecords?: number;
  skip?: number;
  top?: number;
  division?: ReadonlyArray<NiceCxoneFullApiSchemaDivisionResponse>;
};

export type NiceCxoneFullApiSchemaDivisionIdentitiesResponse = {
  totalRecords?: number;
  skip?: number;
  top?: number;
  divisions?: ReadonlyArray<NiceCxoneFullApiSchemaDivisionResponse>;
};

export type NiceCxoneFullApiSchemaBillingCodeResponse = {
  billingCodes?: ReadonlyArray<number>;
};

export type NiceCxoneFullApiSchemaDocumentSnapshotResponse = {
  documents: ReadonlyArray<NiceCxoneFullApiSchemaDocumentInfo>;
  nextPageToken?: string | null;
};

export type NiceCxoneFullApiSchemaCopilotKBTableRequest = {
  dateRange: NiceCxoneFullApiSchemaDateRange;
  timeZone: string;
  channels?: ReadonlyArray<"digital" | "voice">;
  filters?: NiceCxoneFullApiSchemaCopilotFilters;
};

export type NiceCxoneFullApiSchemaErrorResponse = {
  message?: string;
  statusCode?: number;
  traceId?: string;
  exception?: {
  message?: string;
  statusCode?: number;
};
};

export type NiceCxoneFullApiSchemaCopilotAQTableRequest = {
  dateRange: NiceCxoneFullApiSchemaDateRange;
  timeZone: string;
  filters?: NiceCxoneFullApiSchemaCopilotAQFilters;
};

export type NiceCxoneFullApiSchemaCopilotASTableRequest = {
  dateRange: NiceCxoneFullApiSchemaDateRange;
  timeZone: string;
  channels?: ReadonlyArray<"digital" | "voice">;
  filters?: NiceCxoneFullApiSchemaCopilotFilters;
};

export type NiceCxoneFullApiSchemaAutopilotKnowledgeGRTableRequest = {
  dateRange: NiceCxoneFullApiSchemaDateRange;
  timeZone: string;
};

export type NiceCxoneFullApiSchemaAutopilotGRTableRequest = {
  dateRange: NiceCxoneFullApiSchemaDateRange;
  timeZone: string;
};

export type NiceCxoneFullApiSchemaScimUserSearchResponse = {
  schemas?: ReadonlyArray<string>;
  totalResults?: number;
  Resources?: ReadonlyArray<NiceCxoneFullApiSchemaUserSearchItemsResponse>;
};

export type NiceCxoneFullApiSchemaScimRequestCreate = {
  userName: string;
  name: NiceCxoneFullApiSchemaNameAttribute;
  emails: ReadonlyArray<NiceCxoneFullApiSchemaEmailAttribute>;
  "urn:ietf:params:scim:schemas:extension:nice:2.0:User"?: NiceCxoneFullApiSchemaUserExtension;
  roles?: ReadonlyArray<NiceCxoneFullApiSchemaScimRoleRequest>;
  displayName?: string;
  active?: boolean;
  userType?: string;
  timezone?: string;
  phoneNumbers?: ReadonlyArray<{
  type?: string;
  value: string;
  primary?: boolean;
}>;
};

export type NiceCxoneFullApiSchemaScimResponse = {
  schemas?: ReadonlyArray<string>;
  id?: string;
  userName?: string;
  name?: NiceCxoneFullApiSchemaNameAttribute;
  emails?: ReadonlyArray<NiceCxoneFullApiSchemaEmailAttribute>;
  displayName?: string;
  locale?: string;
  externalId?: string;
  active?: boolean;
  meta?: {
  resourceType?: string;
};
  userType?: string;
  "urn:ietf:params:scim:schemas:extension:nice:2.0:User"?: NiceCxoneFullApiSchemaUserExtension;
  roles?: ReadonlyArray<NiceCxoneFullApiSchemaScimRole>;
  phoneNumbers?: ReadonlyArray<{
  type?: string;
  value?: string;
  primary?: boolean;
}>;
  timeZone?: string;
};

export type NiceCxoneFullApiSchemaScimRequestUpdate = {
  id: string;
  userName: string;
  name: NiceCxoneFullApiSchemaNameAttribute;
  emails: ReadonlyArray<NiceCxoneFullApiSchemaEmailAttribute>;
  displayName?: string;
  active: boolean;
  userType?: string;
  "urn:ietf:params:scim:schemas:extension:nice:2.0:User"?: NiceCxoneFullApiSchemaUserExtension;
  roles?: ReadonlyArray<NiceCxoneFullApiSchemaScimRoleRequest>;
  phoneNumbers?: ReadonlyArray<{
  type?: string;
  value: string;
  primary?: boolean;
}>;
  timezone?: string;
};

export type NiceCxoneFullApiSchemaScimRequestPatchUpdate = {
  schemas: ReadonlyArray<string>;
  Operations: ReadonlyArray<{
  path: string;
  value: string;
}>;
};

export type NiceCxoneFullApiSchemaSchemaResponse = {
  schemas?: ReadonlyArray<string>;
  totalResults?: number;
  startIndex?: number;
  itemsPerPage?: number;
  Resources?: ReadonlyArray<NiceCxoneFullApiSchemaSchemaAttribute>;
};

export type NiceCxoneFullApiSchemaTeamRequestCreate = {
  id?: string;
  name: string;
  description?: string;
  status: "ACTIVE" | "INACTIVE";
  leadUserId?: string;
  createdBy?: string;
  lastModified?: string;
  voiceThreshold?: number;
  chatThreshold?: number;
  maxConcurrentChats?: number;
  emailThreshold?: number;
  maxEmailAutoParkingLimit?: number;
  workItemThreshold?: number;
  requestContact?: boolean;
  contactAutoFocus?: boolean;
  deliveryMode?: number;
  totalContactCount?: number;
  userCount?: number;
  unavailableCodes?: ReadonlyArray<NiceCxoneFullApiSchemaUnavailableCode>;
  customAttributes?: NiceCxoneFullApiSchemaCustomAttribute;
  isDefault?: boolean;
  divisionId?: number;
};

export type NiceCxoneFullApiSchemaTeamResponse = {
  message?: string;
  detailedMessage?: string;
  httpCode?: number;
  team?: NiceCxoneFullApiSchemaTeamCreateUpdateResponse;
};

export type NiceCxoneFullApiSchemaTeamRequestUpdate = {
  id: string;
  name: string;
  description?: string;
  status: "ACTIVE" | "INACTIVE";
  leadUserId?: string;
  createdBy?: string;
  lastModified?: string;
  voiceThreshold?: number;
  chatThreshold?: number;
  maxConcurrentChats?: number;
  emailThreshold?: number;
  maxEmailAutoParkingLimit?: number;
  workItemThreshold?: number;
  requestContact?: boolean;
  contactAutoFocus?: boolean;
  deliveryMode?: number;
  totalContactCount?: number;
  userCount?: number;
  unavailableCodes?: ReadonlyArray<NiceCxoneFullApiSchemaUnavailableCode>;
  customAttributes?: NiceCxoneFullApiSchemaCustomAttribute;
  isDefault?: boolean;
  divisionId?: number;
};

export type NiceCxoneFullApiSchemaGetTeamResponse = {
  team?: {
  id?: string;
  name?: string;
  description?: string;
  leadUserId?: string;
  status?: "ACTIVE" | "INACTIVE";
  createdBy?: string;
  lastModified?: string;
  customAttributes?: NiceCxoneFullApiSchemaCustomAttribute;
  isDefault?: boolean;
  divisionId?: number;
};
};

export type NiceCxoneFullApiSchemaSearchRequestV1 = {
  filter?: {
  id?: ReadonlyArray<string>;
  name?: ReadonlyArray<string>;
  divisionId?: ReadonlyArray<number>;
};
  fields?: ReadonlyArray<string>;
  operations?: {
  id?: "LIKE" | "BETWEEN" | "NOT" | "IN" | "EQ";
  name?: "LIKE" | "BETWEEN" | "NOT" | "IN" | "EQ";
};
  skip?: number;
  top?: number;
  orderBy?: {
  id?: "ASC" | "DESC";
  name?: "ASC" | "DESC";
};
};

export type NiceCxoneFullApiSchemaTeamSearchResponseV4 = {
  totalRecords?: number;
  skip?: number;
  top?: number;
  teams?: ReadonlyArray<NiceCxoneFullApiSchemaTeamV3>;
};

export type NiceCxoneFullApiSchemaUsersResponse = {
  users?: ReadonlyArray<NiceCxoneFullApiSchemaUser2>;
};

export type NiceCxoneFullApiSchemaUserRegistrationRequest = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  customAttributes?: NiceCxoneFullApiSchemaCustomAttribute;
  mobileNumber?: string;
  assignedGroup?: string;
  rank?: number;
  timeZone?: string;
  role: string;
  teamId?: string;
  hireDate?: string;
  acdInfos?: ReadonlyArray<NiceCxoneFullApiSchemaAcdInfo>;
  groupIds?: ReadonlyArray<string>;
  userName?: string;
  applicationAttributes?: {
  readonly [key: string]: ReadonlyArray<NiceCxoneFullApiSchemaApplicationAttribute> | undefined;
};
  emailToBeVerified?: string;
  externalIdentity?: string;
  billable?: boolean;
  secondaryRoleIds?: ReadonlyArray<string>;
  views?: ReadonlyArray<NiceCxoneFullApiSchemaUserView>;
};

export type NiceCxoneFullApiSchemaRegisterUserResponse = {
  success?: boolean;
  message?: string;
  error?: string;
  uuid?: string;
  msg?: string;
};

export type NiceCxoneFullApiSchemaUserUpdateRequest = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  customAttributes?: NiceCxoneFullApiSchemaCustomAttribute;
  mobileNumber?: string;
  assignedGroup: string;
  rank?: number;
  timeZone?: string;
  role: string;
  teamId?: string;
  hireDate?: string;
  acdInfos?: ReadonlyArray<NiceCxoneFullApiSchemaAcdInfo>;
  groupIds?: ReadonlyArray<string>;
  userName: string;
  applicationAttributes?: {
  readonly [key: string]: ReadonlyArray<NiceCxoneFullApiSchemaApplicationAttribute> | undefined;
};
  emailToBeVerified: string;
  externalIdentity?: string;
  billable?: boolean;
  secondaryRoleIds?: ReadonlyArray<string>;
  views?: ReadonlyArray<NiceCxoneFullApiSchemaUserView>;
  id: string;
};

export type NiceCxoneFullApiSchemaUpdateUserResponse = {
  success?: boolean;
  message?: string;
  error?: string;
  msg?: string;
};

export type NiceCxoneFullApiSchemaUserDeactivateRequest = {
  userIds: ReadonlyArray<string>;
};

export type NiceCxoneFullApiSchemaUserDeactivateResponse = {
  notDeletedUserIds?: ReadonlyArray<string>;
};

export type NiceCxoneFullApiSchemaUserResponseV3 = {
  user?: NiceCxoneFullApiSchemaUserV3;
};

export type NiceCxoneFullApiSchemaReviveUserResponse = {
  success?: boolean;
  uuid?: string;
};

export type NiceCxoneFullApiSchemaSearchRequest = {
  filter?: {
  readonly [key: string]: {} | undefined;
};
  fields?: ReadonlyArray<string>;
  operations?: {
  readonly [key: string]: "LIKE" | "BETWEEN" | "NOT" | "OR" | undefined;
};
  skip?: number;
  top?: number;
  orderBy?: {
  readonly [key: string]: "ASC" | "DESC" | undefined;
};
};

export type NiceCxoneFullApiSchemaUserSearchResponse = {
  totalRecords?: number;
  skip?: number;
  top?: number;
  users?: ReadonlyArray<NiceCxoneFullApiSchemaSearchedUser>;
};

export type NiceCxoneFullApiSchemaUserIdentityListResponseV2 = {
  totalRecords?: number;
  users?: ReadonlyArray<NiceCxoneFullApiSchemaUserIdentityV2>;
  _links?: NiceCxoneFullApiSchemaLinks4;
};

export type NiceCxoneFullApiSchemaUserInvitationRequestEmail = {
  emailAddressesList: ReadonlyArray<string>;
  senderEmail: string;
};

export type NiceCxoneFullApiSchemaBooleanResponse = {
  success?: boolean;
};

export type NiceCxoneFullApiSchemaUserInvitationV2Request = {
  inviteUserIds: ReadonlyArray<string>;
  senderUserId: string;
};

export type NiceCxoneFullApiSchemaUserIdentityResponseV1 = {
  user?: NiceCxoneFullApiSchemaUserIdentityV1;
};

export type NiceCxoneFullApiSchemaAssignAuthenticatorRequest = {
  authenticatorId?: string;
};

export type NiceCxoneFullApiSchemaBulkEntityUserAssignResponse = {
  success?: boolean;
  message?: string;
};

export type NiceCxoneFullApiSchemaJobsResponse = {
  jobs?: ReadonlyArray<NiceCxoneFullApiSchemaJobState>;
};

export type NiceCxoneFullApiSchemaExportRequest = {
  entityName?: string;
  version?: string;
  startDate?: string;
  endDate?: string;
};

export type NiceCxoneFullApiSchemaJobResponse = {
  jobStatus?: NiceCxoneFullApiSchemaJobStatus;
};

export type NiceCxoneFullApiSchemaExternalPlatformTemplate = {
  template: string;
  category: "TRANSACTIONAL" | "MARKETING";
  messageContent: {
  type: "PLUGIN";
  payload: {
  elements: ReadonlyArray<{
  id: string;
  text: string;
  type: "TEXT_TEMPLATE";
  template: string;
  variables?: ReadonlyArray<NiceCxoneFullApiSchemaJsonValue>;
}>;
};
};
};

export type NiceCxoneFullApiSchemaLinks = {
  self?: string;
  next?: string;
  previous?: string;
};

export type NiceCxoneFullApiSchemaNewChannel = {
  id: string;
  idOnExternalPlatform: string;
  channelIntegrationId: string;
  realExternalPlatformId: "apple-apps-reviews" | "apple-business-chat" | "bg" | "bw" | "chat" | "congstar-forum" | "custom" | "cypress" | "discussions" | "email" | "facebook" | "fb" | "fm" | "forum" | "gcse" | "gl" | "google-business-messages" | "google-places" | "google-play" | "google-rcs" | "gp" | "ig" | "in-contact-email" | "ind" | "instagram" | "kik" | "lc" | "li" | "line" | "mediatoolkit" | "microsoft-teams" | "mock" | "monitora" | "news" | "nw" | "ok-ru" | "phpbb" | "rss" | "sandbox" | "sandbox-facebook" | "sandbox-twitter" | "sendbird" | "slack" | "smooch-io-we-chat" | "sms" | "social-watch" | "t-mobile-austria-forum" | "talkdesk" | "telegram" | "tmobile-forum" | "tw" | "twitter" | "viber" | "vk" | "vo" | "voice" | "we-chat" | "whatsapp" | "youscan" | "yt" | "zoom";
  name: string;
  isPrivate: boolean;
  hasTreeStructure: boolean;
  hasReply?: boolean;
  contentFormat?: "html" | "plain";
  hasAbilityToSendFiles?: boolean;
  hasOutboundFlow?: boolean;
  translationGroup?: "default" | "email" | "phone";
  externalPlatformAvatar?: string;
  externalPlatformIcon?: "amazon" | "apple" | "apple-apps" | "apple-imessage" | "co-browsing" | "contact-form" | "email" | "facebook" | "facebook-dm" | "facebook-messenger" | "forum" | "google" | "google-dm" | "google-maps" | "google-play" | "google-search" | "instagram" | "instagram-dm" | "kakao-talk" | "kik" | "line-message" | "linkedin" | "listening" | "livechat" | "livechat-contact-form" | "ok-ru" | "pinterest" | "rcs" | "rss" | "slack" | "sms" | "snapchat" | "tango" | "telegram" | "tumblr" | "twitter" | "twitter-dm" | "viber" | "vkontakte" | "vkontakte-dm" | "voice" | "wechat" | "whatsapp" | "youtube";
  ownerUserId?: number;
  hasAbilityToLike?: boolean;
  hasAbilityToShare?: boolean;
  hasAbilityToDelete?: boolean;
  hasAbilityToTag?: boolean;
  hasAbilityToChangeFrom?: boolean;
  wysiwygEnabled?: boolean;
  isAutomaticSignatureAttached?: boolean;
  isCaseBasedStorage?: boolean;
  hasOutboundTemplates?: boolean;
  hasManualOutboundFlow?: boolean;
  studioScript?: string;
  hasPublishing?: boolean;
  hasMultipleRecipient?: boolean;
  hasCcAndBcc?: boolean;
  hasVisibleTitle?: boolean;
  hasEditableTitle?: boolean;
  hasVisibleRecipients?: boolean;
  hasAbilityToForwardMessage?: boolean;
  hasAbilityToChangeRecipient?: boolean;
  hasMultipleThreadsPerEndUser?: boolean;
  hasPostAsPlaceholder?: boolean;
  canAgentInviteCustomersToContact?: boolean;
  canReplyToAnyMessage?: boolean;
  isLiveChat?: boolean;
  hasAbilityToHide?: boolean;
};

export type NiceCxoneFullApiSchemaApiErrorCollection = {
  errors: ReadonlyArray<NiceCxoneFullApiSchemaApiError>;
  uid?: string;
};

export type NiceCxoneFullApiSchemaChannelV2 = {
  id: string;
  idOnExternalPlatform: string;
  realExternalPlatformId: "apple-apps-reviews" | "apple-business-chat" | "bg" | "bw" | "chat" | "congstar-forum" | "custom" | "cypress" | "discussions" | "email" | "facebook" | "fb" | "fm" | "forum" | "gcse" | "gl" | "google-business-messages" | "google-places" | "google-play" | "google-rcs" | "gp" | "ig" | "in-contact-email" | "ind" | "instagram" | "kik" | "lc" | "li" | "line" | "mediatoolkit" | "microsoft-teams" | "mock" | "monitora" | "news" | "nw" | "ok-ru" | "phpbb" | "rss" | "sandbox" | "sandbox-facebook" | "sandbox-twitter" | "sendbird" | "slack" | "smooch-io-we-chat" | "sms" | "social-watch" | "t-mobile-austria-forum" | "talkdesk" | "telegram" | "tmobile-forum" | "tw" | "twitter" | "viber" | "vk" | "vo" | "voice" | "we-chat" | "whatsapp" | "youscan" | "yt" | "zoom";
  name: string;
  externalPlatformAvatar?: string;
  externalPlatformIcon?: "amazon" | "apple" | "apple-apps" | "apple-imessage" | "co-browsing" | "contact-form" | "email" | "facebook" | "facebook-dm" | "facebook-messenger" | "forum" | "google" | "google-dm" | "google-maps" | "google-play" | "google-search" | "instagram" | "instagram-dm" | "kakao-talk" | "kik" | "line-message" | "linkedin" | "listening" | "livechat" | "livechat-contact-form" | "ok-ru" | "pinterest" | "rcs" | "rss" | "slack" | "sms" | "snapchat" | "tango" | "telegram" | "tumblr" | "twitter" | "twitter-dm" | "viber" | "vkontakte" | "vkontakte-dm" | "voice" | "wechat" | "whatsapp" | "youtube";
  channelIntegrationId: string;
  hasReply?: boolean;
  hasTreeStructure: boolean;
  contentFormat?: "html" | "plain";
  hasCustomerOnThirdParty?: boolean;
  isPostWritable?: boolean;
  hasAbilityToQuoteMessage?: boolean;
  hasAbilityToLike?: boolean;
  isPrivate: boolean;
  isHidden?: boolean;
  wysiwygEnabled?: boolean;
  hasAbilityToTag?: boolean;
  ownerUserId?: number;
  hasPublishing?: boolean;
  hasAbilityToSendFiles?: boolean;
  hasOutboundFlow?: boolean;
  hasAbilityToShare?: boolean;
  hasAbilityToHide?: boolean;
  hasAbilityToDelete?: boolean;
  replyPrefixMentionTemplate?: string;
  nicknameOnExternalPlatform?: string;
  isLiveChat?: boolean;
  hasAbilityToChangeRecipient?: boolean;
  hasMultipleRecipient?: boolean;
  hasCcAndBcc?: boolean;
  hasVisibleTitle?: boolean;
  hasEditableTitle?: boolean;
  hasVisibleRecipients?: boolean;
  hasAbilityToForwardMessage?: boolean;
  canSaveResponse?: boolean;
  hasAbilityToChangeFrom?: boolean;
  isAutomaticSignatureAttached?: boolean;
  hasOutboundTemplates?: boolean;
  hasManualOutboundFlow?: boolean;
  hasMultipleThreadsPerEndUser?: boolean;
  translationGroup?: "default" | "email" | "phone";
  studioScript?: string;
  canAgentInviteCustomersToContact?: boolean;
  canReplyToAnyMessage?: boolean;
};

export type NiceCxoneFullApiSchemaContact = {
  id?: string;
  contactId?: string;
  customerContactId?: string;
  interactionId?: string;
  abandon?: NiceCxoneFullApiSchemaContactAbandon;
  authorEndUserIdentity?: NiceCxoneFullApiSchemaAuthorCustomerIdentity;
  consumerContactStorageId?: string;
  channelId?: string;
  direction?: "inbound" | "outbound";
  detailUrl?: string;
  createdAt?: string;
  customFields?: ReadonlyArray<NiceCxoneFullApiSchemaCustomField>;
  endUser?: NiceCxoneFullApiSchemaCustomer2;
  inboxAssigneeUser?: NiceCxoneFullApiSchemaUser3;
  inboxPreAssigneeUser?: NiceCxoneFullApiSchemaUser3;
  ownerAssigneeUser?: NiceCxoneFullApiSchemaUser3;
  recipients?: ReadonlyArray<NiceCxoneFullApiSchemaRecipient>;
  routingQueueId?: string | null;
  routingQueuePriority?: number;
  status?: NiceCxoneFullApiSchemaContactStatus;
  statusUpdatedAt?: string;
  threadId?: string;
  threadIdOnExternalPlatform?: string;
  userFingerprint?: NiceCxoneFullApiSchemaDeviceFingerprint;
};

export type NiceCxoneFullApiSchemaApiErrorCollection2 = {
  errors: ReadonlyArray<NiceCxoneFullApiSchemaApiError2>;
  uid?: string;
};

export type NiceCxoneFullApiSchemaPagination = {
  previous?: string;
  next?: string;
};

export type NiceCxoneFullApiSchemaMessageDetail = {
  id?: string;
  idOnExternalPlatform?: string;
  isDeletedOnExternalPlatform?: boolean;
  isHiddenOnExternalPlatform?: boolean;
  isReplyAllowed?: boolean;
  url?: string | null;
  direction?: "inbound" | "outbound";
  createdAt?: string;
  createdAtWithMilliseconds?: string;
  authorEndUserIdentity?: NiceCxoneFullApiSchemaAuthorCustomerIdentity;
  reactionStatistics?: NiceCxoneFullApiSchemaReactionStatistics;
  messageContent?: NiceCxoneFullApiSchemaMessageContent;
  hasAdditionalMessageContent?: boolean;
  attachments?: ReadonlyArray<NiceCxoneFullApiSchemaAttachment>;
  authorNameRemoved?: NiceCxoneFullApiSchemaContentRemoved;
  contentRemoved?: NiceCxoneFullApiSchemaContentRemoved;
  authorUser?: NiceCxoneFullApiSchemaUser3;
  contactNumber?: string;
  customerStatistics?: {
  seenAt?: string | null;
};
  recipients?: ReadonlyArray<NiceCxoneFullApiSchemaRecipient>;
  replyChannel?: NiceCxoneFullApiSchemaChannelV22;
  channel?: {
  id?: string;
};
  replyToMessage?: NiceCxoneFullApiSchemaPlatformBackendReplyToMessage;
  sentiment?: NiceCxoneFullApiSchemaSentiment2;
  tags?: ReadonlyArray<NiceCxoneFullApiSchemaTag2>;
  threadId?: string;
  threadIdOnExternalPlatform?: string;
  title?: string;
  userStatistics?: {
  createdToReadSeconds?: {
  notReflectingBusinessHours?: number;
  reflectingBusinessHours?: number;
} | null;
  readAt?: string | null;
  seenAt?: string | null;
};
};

export type NiceCxoneFullApiSchemaContactInboxAssignmentUpdate = ({
  userId: number;
} | {
  inboxAssignee: number;
} | {
  inboxAssigneeCxoneId: string;
});

export type NiceCxoneFullApiSchemaCustomField = {
  ident: string;
  value: string;
  updatedAt?: string;
};

export type NiceCxoneFullApiSchemaContactRoutingQueueUpdate = (NiceCxoneFullApiSchemaJsonValue | NiceCxoneFullApiSchemaJsonValue);

export type NiceCxoneFullApiSchemaContactRoutingPropertiesUpdate = ({
  not?: NiceCxoneFullApiSchemaJsonValue;
} | {
  not?: NiceCxoneFullApiSchemaJsonValue;
} | {
  not?: NiceCxoneFullApiSchemaJsonValue;
} | {
  not?: NiceCxoneFullApiSchemaJsonValue;
} | {
  not?: NiceCxoneFullApiSchemaJsonValue;
} | {
  not?: NiceCxoneFullApiSchemaJsonValue;
} | {
  not?: NiceCxoneFullApiSchemaJsonValue;
} | {
  not?: NiceCxoneFullApiSchemaJsonValue;
} | {
  not?: NiceCxoneFullApiSchemaJsonValue;
} | {
  not?: NiceCxoneFullApiSchemaJsonValue;
} | {
  not?: NiceCxoneFullApiSchemaJsonValue;
} | {
  not?: NiceCxoneFullApiSchemaJsonValue;
} | {
  not?: NiceCxoneFullApiSchemaJsonValue;
} | {
  not?: NiceCxoneFullApiSchemaJsonValue;
} | {
  not?: NiceCxoneFullApiSchemaJsonValue;
} | {
  not?: NiceCxoneFullApiSchemaJsonValue;
});

export type NiceCxoneFullApiSchemaRecipient = {
  idOnExternalPlatform: string;
  name?: string;
  isPrimary?: boolean;
  isPrivate?: boolean;
  anonymizedAt?: string;
  anonymizedReason?: NiceCxoneFullApiSchemaContentRemovedReason;
};

export type NiceCxoneFullApiSchemaContactStatusUpdate = {
  status: "closed" | "escalated" | "new" | "open" | "pending" | "resolved" | "trashed";
  updatedByUserId?: number;
};

export type NiceCxoneFullApiSchemaCustomer = {
  id: string;
  updatedAt: string;
  firstName?: string;
  surname?: string;
  fullName?: string;
  customFields?: ReadonlyArray<NiceCxoneFullApiSchemaCustomField2>;
  image?: string;
  identities: ReadonlyArray<NiceCxoneFullApiSchemaAuthorCustomerIdentity2>;
  messageStatistics: NiceCxoneFullApiSchemaCustomerMessageStatistics;
  sentimentStatistics: NiceCxoneFullApiSchemaCustomerSentimentStatistics;
};

export type NiceCxoneFullApiSchemaCustomerNote = {
  id: string;
  user: NiceCxoneFullApiSchemaUser4;
  createdAt: string;
  updatedAt: string;
  content: string;
};

export type NiceCxoneFullApiSchemaLinks2 = {
  self?: string;
  next?: string;
  previous?: string;
};

export type NiceCxoneFullApiSchemaApiErrorCollection3 = {
  errors: ReadonlyArray<NiceCxoneFullApiSchemaApiError3>;
  uid?: string;
};

export type NiceCxoneFullApiSchemaCustomField2 = {
  ident: string;
  value: string;
  updatedAt?: string;
};

export type NiceCxoneFullApiSchemaContactCustomFieldDefinition = {
  ident: string;
  label: string;
  type: "text" | "email" | "list" | "date";
  required: boolean;
  visibleInPostDetail?: boolean;
  visibleInLiveChat?: boolean;
  isEditable: boolean;
  values?: (ReadonlyArray<{
  name?: string;
  value?: string;
}> | {
  dateOptionsType: "absolute" | "relative";
  maxDate: string;
  minDate: string;
  startDate: string;
});
};

export type NiceCxoneFullApiSchemaCustomerCustomFieldDefinition = {
  ident: string;
  label: string;
  type: "text" | "email" | "list";
  isRequired: boolean;
  isEditable: boolean;
  isVisibleInRightPanel: boolean;
  isVisibleInCustomerCard: boolean;
  values?: ReadonlyArray<{
  name?: string;
  value?: string;
}>;
};

export type NiceCxoneFullApiSchemaCustomerCustomFieldDefinitionToCreate = {
  ident: string;
  label: string;
  type: "text" | "email" | "list";
  isRequired?: boolean;
  isEditable?: boolean;
  isVisibleInRightPanel?: boolean;
  isVisibleInCustomerCard?: boolean;
  values?: {};
};

export type NiceCxoneFullApiSchemaApiErrorCollection4 = {
  errors: ReadonlyArray<NiceCxoneFullApiSchemaApiError4>;
  uid?: string;
};

export type NiceCxoneFullApiSchemaNewMessage = {
  idOnExternalPlatform: string;
  deletedOnExternalPlatform?: boolean;
  url?: string;
  direction: "inbound" | "outbound";
  createdAtWithMilliseconds: string;
  tagIds?: ReadonlyArray<number>;
  reactionStatistics?: NiceCxoneFullApiSchemaReactionStatistics2;
  thread: (NiceCxoneFullApiSchemaThreadToCreate & {
  idOnExternalPlatform: string;
});
  replyToMessage?: NiceCxoneFullApiSchemaPlatformBackendReplyToMessage2;
  isReplyToSpecificMessage?: boolean;
  title?: string;
  messageContent: NiceCxoneFullApiSchemaPlatformBackendMessageContentToCreate;
  authorEndUserIdentity: NiceCxoneFullApiSchemaAuthorCustomerIdentity3;
  browserFingerprint?: NiceCxoneFullApiSchemaDeviceFingerprint2;
  contact?: NiceCxoneFullApiSchemaContactInformation;
  attachments?: ReadonlyArray<NiceCxoneFullApiSchemaAttachment2>;
  recipients?: ReadonlyArray<NiceCxoneFullApiSchemaRecipient2>;
  authorRecipients?: ReadonlyArray<NiceCxoneFullApiSchemaRecipient2>;
  externalAttributes?: ReadonlyArray<NiceCxoneFullApiSchemaExternalAttribute>;
};

export type NiceCxoneFullApiSchemaContact2 = {
  id?: string;
  contactId?: string;
  customerContactId?: string;
  interactionId?: string;
  abandon?: NiceCxoneFullApiSchemaContactAbandon2;
  authorEndUserIdentity?: NiceCxoneFullApiSchemaAuthorCustomerIdentity3;
  consumerContactStorageId?: string;
  channelId?: string;
  direction?: "inbound" | "outbound";
  detailUrl?: string;
  createdAt?: string;
  customFields?: ReadonlyArray<NiceCxoneFullApiSchemaCustomField3>;
  endUser?: NiceCxoneFullApiSchemaCustomer3;
  inboxAssigneeUser?: NiceCxoneFullApiSchemaUser5;
  inboxPreAssigneeUser?: NiceCxoneFullApiSchemaUser5;
  ownerAssigneeUser?: NiceCxoneFullApiSchemaUser5;
  recipients?: ReadonlyArray<NiceCxoneFullApiSchemaRecipient2>;
  routingQueueId?: string | null;
  routingQueuePriority?: number;
  status?: NiceCxoneFullApiSchemaContactStatus2;
  statusUpdatedAt?: string;
  threadId?: string;
  threadIdOnExternalPlatform?: string;
  userFingerprint?: NiceCxoneFullApiSchemaDeviceFingerprint2;
};

export type NiceCxoneFullApiSchemaMessageDetail2 = {
  id?: string;
  idOnExternalPlatform?: string;
  isDeletedOnExternalPlatform?: boolean;
  isHiddenOnExternalPlatform?: boolean;
  isReplyAllowed?: boolean;
  url?: string | null;
  direction?: "inbound" | "outbound";
  createdAt?: string;
  createdAtWithMilliseconds?: string;
  authorEndUserIdentity?: NiceCxoneFullApiSchemaAuthorCustomerIdentity3;
  reactionStatistics?: NiceCxoneFullApiSchemaReactionStatistics2;
  messageContent?: NiceCxoneFullApiSchemaMessageContent2;
  hasAdditionalMessageContent?: boolean;
  attachments?: ReadonlyArray<NiceCxoneFullApiSchemaAttachment2>;
  authorNameRemoved?: NiceCxoneFullApiSchemaContentRemoved2;
  contentRemoved?: NiceCxoneFullApiSchemaContentRemoved2;
  authorUser?: NiceCxoneFullApiSchemaUser5;
  contactNumber?: string;
  customerStatistics?: {
  seenAt?: string | null;
};
  recipients?: ReadonlyArray<NiceCxoneFullApiSchemaRecipient2>;
  replyChannel?: NiceCxoneFullApiSchemaChannelV23;
  channel?: {
  id?: string;
};
  replyToMessage?: NiceCxoneFullApiSchemaPlatformBackendReplyToMessage2;
  sentiment?: NiceCxoneFullApiSchemaSentiment;
  tags?: ReadonlyArray<NiceCxoneFullApiSchemaTag3>;
  threadId?: string;
  threadIdOnExternalPlatform?: string;
  title?: string;
  userStatistics?: {
  createdToReadSeconds?: {
  notReflectingBusinessHours?: number;
  reflectingBusinessHours?: number;
} | null;
  readAt?: string | null;
  seenAt?: string | null;
};
};

export type NiceCxoneFullApiSchemaMessageStatus = {
  status: "delivered" | "seen" | "failed";
  updatedAt: string;
  reason?: string;
};

export type NiceCxoneFullApiSchemaApiErrorCollection5 = {
  errors: ReadonlyArray<NiceCxoneFullApiSchemaApiError5>;
  uid?: string;
};

export type NiceCxoneFullApiSchemaOutboundMessageToCreate = (NiceCxoneFullApiSchemaOutboundMessageToCreateBaseSchema & {
  contact?: NiceCxoneFullApiSchemaContactInformation;
});

export type NiceCxoneFullApiSchemaSendInbound = {
  messageContent: NiceCxoneFullApiSchemaPlatformBackendMessageContentToCreate;
  authorCustomerIdentity: NiceCxoneFullApiSchemaAuthorCustomerIdentity3;
  thread?: NiceCxoneFullApiSchemaPlatformBackendThreadToCreate;
  recipients?: ReadonlyArray<NiceCxoneFullApiSchemaRecipient2>;
  attachments?: ReadonlyArray<NiceCxoneFullApiSchemaAttachment2>;
  title?: string;
  contact?: {
  customFields?: ReadonlyArray<NiceCxoneFullApiSchemaCustomFieldToCreate>;
};
};

export type NiceCxoneFullApiSchemaSetContentRemoved = {
  reason?: NiceCxoneFullApiSchemaContentRemovedReason2;
};

export type NiceCxoneFullApiSchemaMessageNote = {
  id: string;
  createdAt: string;
  updatedAt: string;
  user: NiceCxoneFullApiSchemaUser5;
  currentAssignee?: NiceCxoneFullApiSchemaUser5;
  message?: NiceCxoneFullApiSchemaMessageMinimum;
  content: string;
  status: NiceCxoneFullApiSchemaNoteStatus;
};

export type NiceCxoneFullApiSchemaSentiment = "neutral" | "positive" | "negative";

export type NiceCxoneFullApiSchemaRoutingQueue = {
  id: string;
  name: string;
  isSubqueue: boolean;
  isDeleted: boolean;
};

export type NiceCxoneFullApiSchemaTag = {
  id: number;
  color?: string;
  title: string;
};

export type NiceCxoneFullApiSchemaTagToCreate = {
  color?: "#289D29" | "#E11616" | "#FFC20A" | "#2E8FCE" | "#982910" | "#DF23E6" | "#85289D" | "#ADADAD" | "#1DD6D4" | "#9D7D28";
  title: string;
};

export type NiceCxoneFullApiSchemaThread = {
  id: string;
  idOnExternalPlatform: string;
  threadName: string;
  channelId: string;
  canAddMoreMessages?: boolean | null;
};

export type NiceCxoneFullApiSchemaLinks3 = {
  self?: string;
  next?: string;
  previous?: string;
};

export type NiceCxoneFullApiSchemaMessageDetail3 = {
  id?: string;
  idOnExternalPlatform?: string;
  isDeletedOnExternalPlatform?: boolean;
  isHiddenOnExternalPlatform?: boolean;
  isReplyAllowed?: boolean;
  url?: string | null;
  direction?: "inbound" | "outbound";
  createdAt?: string;
  createdAtWithMilliseconds?: string;
  authorEndUserIdentity?: NiceCxoneFullApiSchemaAuthorCustomerIdentity4;
  reactionStatistics?: NiceCxoneFullApiSchemaReactionStatistics3;
  messageContent?: NiceCxoneFullApiSchemaMessageContent3;
  hasAdditionalMessageContent?: boolean;
  attachments?: ReadonlyArray<NiceCxoneFullApiSchemaAttachment3>;
  authorNameRemoved?: NiceCxoneFullApiSchemaContentRemoved3;
  contentRemoved?: NiceCxoneFullApiSchemaContentRemoved3;
  authorUser?: NiceCxoneFullApiSchemaUser6;
  contactNumber?: string;
  customerStatistics?: {
  seenAt?: string | null;
};
  recipients?: ReadonlyArray<NiceCxoneFullApiSchemaRecipient3>;
  replyChannel?: NiceCxoneFullApiSchemaChannelV24;
  channel?: {
  id?: string;
};
  replyToMessage?: NiceCxoneFullApiSchemaPlatformBackendReplyToMessage3;
  sentiment?: NiceCxoneFullApiSchemaSentiment3;
  tags?: ReadonlyArray<NiceCxoneFullApiSchemaTag4>;
  threadId?: string;
  threadIdOnExternalPlatform?: string;
  title?: string;
  userStatistics?: {
  createdToReadSeconds?: {
  notReflectingBusinessHours?: number;
  reflectingBusinessHours?: number;
} | null;
  readAt?: string | null;
  seenAt?: string | null;
};
};

export type NiceCxoneFullApiSchemaChannel = {
  id: string;
  idOnExternalPlatform: string;
  name: string;
  channelIntegrationId: string;
  integrationBoxIdentifier?: string;
  realExternalPlatformId: "apple-apps-reviews" | "apple-business-chat" | "bg" | "bw" | "chat" | "congstar-forum" | "custom" | "cypress" | "discussions" | "email" | "facebook" | "fb" | "fm" | "forum" | "gcse" | "gl" | "google-business-messages" | "google-places" | "google-play" | "google-rcs" | "gp" | "ig" | "in-contact-email" | "ind" | "instagram" | "kik" | "lc" | "li" | "line" | "mediatoolkit" | "microsoft-teams" | "mock" | "monitora" | "news" | "nw" | "ok-ru" | "phpbb" | "rss" | "sandbox" | "sandbox-facebook" | "sandbox-twitter" | "sendbird" | "slack" | "smooch-io-we-chat" | "sms" | "social-watch" | "t-mobile-austria-forum" | "talkdesk" | "telegram" | "tmobile-forum" | "tw" | "twitter" | "viber" | "vk" | "vo" | "voice" | "we-chat" | "whatsapp" | "youscan" | "yt" | "zoom";
  externalPlatformAvatar?: string;
  externalPlatformIcon?: "amazon" | "apple" | "apple-apps" | "apple-imessage" | "co-browsing" | "contact-form" | "email" | "facebook" | "facebook-dm" | "facebook-messenger" | "forum" | "google" | "google-dm" | "google-maps" | "google-play" | "google-search" | "instagram" | "instagram-dm" | "kakao-talk" | "kik" | "line-message" | "linkedin" | "listening" | "livechat" | "livechat-contact-form" | "ok-ru" | "pinterest" | "rcs" | "rss" | "slack" | "sms" | "snapchat" | "tango" | "telegram" | "tumblr" | "twitter" | "twitter-dm" | "viber" | "vkontakte" | "vkontakte-dm" | "voice" | "wechat" | "whatsapp" | "youtube";
  isPrivate: boolean;
  hasTreeStructure: boolean;
  isDeleted?: boolean;
  isHidden?: boolean;
  contentFormat: "html" | "plain";
  hasReply?: boolean;
  replyPrefixMentionTemplate?: string;
  nicknameOnExternalPlatform?: string;
  hasCustomerOnThirdParty?: boolean;
  hasAbilityToSendFiles?: boolean;
  hasOutboundFlow?: boolean;
  hasOutboundTemplates?: boolean;
  translationGroup?: "default" | "email" | "phone";
  ownerUserId?: number;
  isLiveChat?: boolean;
  canSaveResponse?: boolean;
  hasAbilityToShare?: boolean;
  hasAbilityToLike?: boolean;
  hasAbilityToTag?: boolean;
  hasAbilityToHide?: boolean;
  hasAbilityToDelete?: boolean;
  hasAbilityToQuoteMessage?: boolean;
  hasAbilityToChangeFrom?: boolean;
  wysiwygEnabled?: boolean;
  hasAbilityToChangeRecipient?: boolean;
  hasMultipleRecipient?: boolean;
  hasMultipleThreadsPerEndUser?: boolean;
  hasCcAndBcc?: boolean;
  hasVisibleTitle?: boolean;
  hasEditableTitle?: boolean;
  hasVisibleRecipients?: boolean;
  hasAbilityToForwardMessage?: boolean;
  canAgentInviteCustomersToContact?: boolean;
  canReplyToAnyMessage?: boolean;
  isAutomaticSignatureAttached?: boolean;
  isPostWritable?: boolean;
  hasPublishing?: boolean;
  studioScript?: string | null;
  defaultSkillId?: number | null;
  mediaType?: number;
  hasAgentsAsRecipients?: boolean;
  canSendSenderActions?: boolean;
};

export type NiceCxoneFullApiSchemaApiErrorCollection6 = {
  errors: ReadonlyArray<NiceCxoneFullApiSchemaApiError6>;
  uid?: string;
};

export type NiceCxoneFullApiSchemaApiErrorCollection7 = {
  errors: ReadonlyArray<NiceCxoneFullApiSchemaApiError7>;
  uid?: string;
};

export type NiceCxoneFullApiSchemaBrand = {
  id: number;
  friendlyName: string;
  timezone: string;
  brandHash: string;
  tenantId?: string | null;
  businessUnitId?: number | null;
  acdClusterId?: string | null;
};

export type NiceCxoneFullApiSchemaUser = {
  id: number;
  incontactId?: string;
  emailAddress: string;
  loginUsername: string;
  firstName: string;
  surname: string;
  nickname?: string;
  imageUrl?: string;
  isBotUser: boolean;
  isSurveyUser: boolean;
};

export type NiceCxoneFullApiSchemaQueryDateField = "startTime" | "firstAnnotatedAt";

export type NiceCxoneFullApiSchemaSortOrder = "asc" | "desc";

export type NiceCxoneFullApiSchemaInteractionWrapper = {
  totalRecords?: number;
  interactions?: ReadonlyArray<NiceCxoneFullApiSchemaInteraction>;
  links?: {
  self?: string;
  previous?: string;
  next?: string;
};
};

export type NiceCxoneFullApiSchemaContact3 = {
  type?: string;
  language?: string;
  recordSource?: string;
  fromInterwovenTranscript?: boolean;
  annotatedDateTime?: string;
  voiceFile?: string;
  transcriptBlocks?: ReadonlyArray<NiceCxoneFullApiSchemaTranscriptBlock>;
  annotations?: ReadonlyArray<NiceCxoneFullApiSchemaTranscriptAnnotation>;
  enlightenMetrics?: ReadonlyArray<NiceCxoneFullApiSchemaEnlightenMetric>;
  metrics?: {
  readonly [key: string]: string | undefined;
};
  segmentSummary?: NiceCxoneFullApiSchemaSegmentSummary;
};

export type NiceCxoneFullApiSchemaApiResponse = {
  contactId?: string;
  acdcontactId?: string;
  elevatedInteraction?: boolean;
  interactions?: ReadonlyArray<{
  mediaType?: "voice-only" | "voice-and-screen" | "chat" | "chat-and-screen" | "email" | "email-and-screen" | "BE" | "BE_AND_SCREEN" | "WORKITEM";
  channelType?: "PHONE_CALL" | "EMAIL" | "CHAT" | "PHONE_CALL_IVR" | "SMS" | "TW_PRIVATE" | "FB_PRIVATE" | "WHATSAPP_PRIVATE" | "TELEGRAM_PRIVATE" | "APPLE_BUSINESS_CHAT_PRIVATE" | "LINE_PRIVATE" | "VIBER_PRIVATE" | "WE_CHAT_PRIVATE" | "CUSTOM_PRIVATE" | "WORKITEM" | "GOOGLE_BUSINESS_MESSAGES_PRIVATE" | "SLACK_PRIVATE" | "MICROSOFT_TEAMS_PRIVATE";
  startTime?: string;
  endTime?: string;
  data?: (NiceCxoneFullApiSchemaVoiceAndScreen | NiceCxoneFullApiSchemaChat | NiceCxoneFullApiSchemaEmail);
  "@type"?: "call" | "chat" | "email";
  callTaggingList?: ReadonlyArray<{}> | null;
  dynamicBusinessData?: ReadonlyArray<NiceCxoneFullApiSchemaDynamicBusinessData> | null;
}>;
};

export type NiceCxoneFullApiSchemaApiResponseSegment = {
  contactId?: string;
  acdcontactId?: string;
  elevatedInteraction?: boolean;
  Interactions?: ReadonlyArray<{
  mediaType?: "voice-only" | "voice-and-screen" | "chat" | "chat-and-screen" | "email" | "email-and-screen" | "BE" | "BE_AND_SCREEN" | "WORKITEM";
  channelType?: "PHONE_CALL" | "EMAIL" | "CHAT" | "PHONE_CALL_IVR" | "SMS" | "TW_PRIVATE" | "FB_PRIVATE" | "WHATSAPP_PRIVATE" | "TELEGRAM_PRIVATE" | "APPLE_BUSINESS_CHAT_PRIVATE" | "LINE_PRIVATE" | "VIBER_PRIVATE" | "WE_CHAT_PRIVATE" | "CUSTOM_PRIVATE" | "WORKITEM" | "GOOGLE_BUSINESS_MESSAGES_PRIVATE" | "SLACK_PRIVATE" | "MICROSOFT_TEAMS_PRIVATE";
  startTime?: string;
  endTime?: string;
  data?: (NiceCxoneFullApiSchemaVoiceAndScreenSegment | NiceCxoneFullApiSchemaChatSegment | NiceCxoneFullApiSchemaEmailSegment);
  "@type"?: "call" | "chat" | "email";
  callTaggingList?: ReadonlyArray<{}> | null;
  dynamicBusinessData?: ReadonlyArray<NiceCxoneFullApiSchemaDynamicBusinessData> | null;
}>;
};

export type NiceCxoneFullApiSchemaSendText = {
  label: string;
  message: string;
  chatTarget?: string;
};

export type NiceCxoneFullApiSchemaPolicyCreationRequest = {
  policyName: string;
  policyType: string;
  entityType: "MASTER_CONTACT" | "SEGMENT";
  description?: string;
  criteria: ReadonlyArray<NiceCxoneFullApiSchemaCriteria>;
  recurring?: boolean;
  recurrenceConfig?: NiceCxoneFullApiSchemaRecurrenceConfig;
  retentionValueInDays?: string;
  applyToMediaTypes?: "VOICE" | "SCREEN";
};

export type NiceCxoneFullApiSchemaPolicyCreationResponse = {
  policyId?: string;
  entityType?: string;
  applyToMediaTypes?: ReadonlyArray<string>;
  scheduling?: NiceCxoneFullApiSchemaSchedule;
  recurring?: boolean;
};

export type NiceCxoneFullApiSchemaPolicySearchRequest = {
  pagination?: NiceCxoneFullApiSchemaSearchPaginationRequest;
  filters: ReadonlyArray<NiceCxoneFullApiSchemaPolicyFilterRequest>;
  orderBy?: NiceCxoneFullApiSchemaSearchSortRequest;
};

export type NiceCxoneFullApiSchemaPolicySearchResponse = {
  records?: ReadonlyArray<NiceCxoneFullApiSchemaPolicyRetrievalResponse>;
  totalCount?: number;
  skip?: number;
};

export type NiceCxoneFullApiSchemaPolicyRetrievalResponse = {
  policyId?: string;
  policyName?: string;
  initiatorType?: string;
  policyType?: string;
  entityType?: string;
  applyToMediaTypes?: ReadonlyArray<string>;
  criteria?: ReadonlyArray<NiceCxoneFullApiSchemaCriteria>;
  schedule?: NiceCxoneFullApiSchemaSchedule;
  lastModifiedDate?: string;
  description?: string;
  recurring?: boolean;
  recurrenceConfig?: NiceCxoneFullApiSchemaRecurrenceConfigOutput;
  autoApproveLimit?: number;
  needsApproval?: boolean;
  createdBy?: string;
  creationDate?: string;
  retentionValueInDays?: string;
};

export type NiceCxoneFullApiSchemaPolicyInstanceRetrievalResponse = {
  policyId?: string;
  policyInstanceId?: string;
  policyName?: string;
  policyType?: string;
  entityType?: string;
  applyToMediaTypes?: ReadonlyArray<string>;
  retentionValueInDays?: string;
  status?: "PENDING_APPROVAL" | "SEARCHING" | "APPLYING_ACTION" | "SUCCEEDED" | "PARTIALLY_SUCCEEDED" | "FAILED" | "DECLINED" | "SUCCEEDED_WITH_ZERO_RESULTS" | "SEARCH_FAILED";
  declineReason?: string;
  criteria?: ReadonlyArray<NiceCxoneFullApiSchemaCriteria>;
  lastModifiedDate?: string;
  needsApproval?: boolean;
  resultSummary?: NiceCxoneFullApiSchemaPolicyInstanceResultSummary;
  enableEvidenceReportDownload?: boolean;
  evidenceReportStatus?: string;
  description?: string;
  creationDate?: string;
  completionDate?: string;
  retrievalCompletionDate?: string;
  approvedDate?: string;
  approverId?: string;
  policyInstanceNo?: number;
  recurring?: boolean;
  recurrenceConfig?: NiceCxoneFullApiSchemaRecurrenceConfigOutput;
  autoApproveLimit?: number;
  createdBy?: string;
};

export type NiceCxoneFullApiSchemaEvidenceReportResponse = {
  "presigned-url"?: string;
};

export type NiceCxoneFullApiSchemaPolicyInstanceSearchResponse = {
  totalRecords?: number;
  records?: ReadonlyArray<NiceCxoneFullApiSchemaPolicyInstanceRetrievalResponse>;
};

export type NiceCxoneFullApiSchemaPolicyInstancesActivitySearchRequest = {
  lastEvaluatedKey?: string;
  filters: ReadonlyArray<{
  fieldId?: string;
  operator?: string;
  value?: string;
}>;
};

export type NiceCxoneFullApiSchemaPolicyInstancesActivitySearchResponse = {
  totalRecords?: number;
  lastEvaluatedKey?: string;
  records?: ReadonlyArray<{
  policyId?: string;
  policyInstanceId?: string;
  policyName?: string;
  policyType?: string;
  lastModificationDate?: string;
  creationDate?: string;
  status?: string;
  summaryStatus?: string;
  completionDate?: string;
  policyInstanceNo?: number;
}>;
};

export type NiceCxoneFullApiSchemaGdprErasureRequest = {
  subjectIdentifier: string;
  subjectIdentifierType: "PHONENO" | "EMAIL" | "USER";
};

export type NiceCxoneFullApiSchemaGdprErasureRequestAdmin = {
  tenantId?: string;
  subjectIdentifier: string;
  subjectIdentifierType: "PHONENO" | "EMAIL" | "USER";
};

export type NiceCxoneFullApiSchemaGdprErasureRequestResponse = {
  requestId?: string;
};

export type NiceCxoneFullApiSchemaContactsActive = {
  totalRecords?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  businessUnitId?: number;
  lastPollTime?: string;
  contacts?: ReadonlyArray<{
  agentId?: number;
  agentStartDate?: string;
  campaignId?: number;
  campaignName?: string;
  contactId?: number;
  contactStartDate?: number;
  contactStateCategory?: string;
  digitalContactStateId?: number;
  digitalContactStateName?: string;
  fileName?: string;
  firstName?: string;
  fromAddress?: string;
  highProficiency?: number;
  holdCount?: number;
  isLogged?: boolean;
  isOutbound?: boolean;
  isTakeover?: boolean;
  lastName?: string;
  lastUpdateTime?: string;
  lowProficiency?: number;
  masterContactId?: number;
  mediaSubTypeId?: number;
  mediaSubTypeName?: string;
  mediaTypeId?: number;
  mediaTypeName?: string;
  pointOfContactId?: number;
  pointOfContactName?: string;
  routingAttribute?: number;
  skillId?: number;
  skillName?: string;
  stateId?: number;
  stateName?: string;
  targetAgentId?: number;
  teamId?: number;
  teamName?: string;
  toAddress?: string;
  transferIndicatorId?: number;
  transferIndicatorName?: string;
}>;
};

export type NiceCxoneFullApiSchemaContactsCompeleted = {
  totalRecords?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  businessUnitId?: number;
  lastPollTime?: string;
  contacts?: ReadonlyArray<{
  abandoned?: boolean;
  abandonSeconds?: number;
  acwSeconds?: number;
  agentId?: number;
  agentSeconds?: number;
  analyticsProcessedDate?: string;
  callbackTime?: number;
  campaignId?: number;
  campaignName?: string;
  conferenceSeconds?: number;
  contactId?: number;
  contactStartDate?: string;
  dateACWWarehoused?: string;
  dateContactWarehoused?: string;
  digitalContactStateId?: number;
  digitalContactStateName?: string;
  dispositionNotes?: string;
  endReason?: string;
  firstName?: string;
  fromAddress?: string;
  highProficiency?: number;
  holdCount?: number;
  holdSeconds?: number;
  inQueueSeconds?: number;
  isActive?: boolean;
  isAnalyticsProcessed?: boolean;
  isLogged?: boolean;
  isOutbound?: boolean;
  isRefused?: boolean;
  isShortAbandon?: boolean;
  isTakeover?: boolean;
  isWarehoused?: boolean;
  lastName?: string;
  lastUpdateTime?: string;
  lowProficiency?: number;
  masterContactId?: number;
  mediaSubTypeId?: number;
  mediaSubTypeName?: string;
  mediaTypeId?: number;
  mediaTypeName?: string;
  pointOfContactId?: number;
  pointOfContactName?: number;
  postQueueSeconds?: number;
  preQueueSeconds?: number;
  primaryDispositionId?: number;
  refuseReason?: string;
  refuseTime?: number;
  releaseSeconds?: number;
  routingAttribute?: number;
  routingTime?: number;
  secondaryDispositionId?: number;
  serviceLevelFlag?: number;
  skillId?: number;
  skillName?: string;
  stateId?: number;
  stateName?: string;
  teamId?: number;
  teamName?: string;
  toAddress?: string;
  totalDurationSeconds?: number;
  transferIndicatorId?: number;
  transferIndicatorName?: number;
  tags?: ReadonlyArray<{
  tagId?: number;
  tagName?: string;
}>;
}>;
};

export type NiceCxoneFullApiSchemaContactActive = {
  businessUnitId?: number;
  lastPollTime?: string;
  contactId?: {
  agentId?: number;
  agentStartDate?: string;
  campaignId?: number;
  campaignName?: string;
  contactId?: number;
  contactStartDate?: number;
  contactStateCategory?: string;
  digitalContactStateId?: number;
  digitalContactStateName?: string;
  fileName?: string;
  firstName?: string;
  fromAddress?: string;
  highProficiency?: number;
  holdCount?: number;
  isLogged?: boolean;
  isOutbound?: boolean;
  isTakeover?: boolean;
  lastName?: string;
  lastUpdateTime?: string;
  lowProficiency?: number;
  masterContactId?: number;
  mediaSubTypeId?: number;
  mediaSubTypeName?: string;
  mediaTypeId?: number;
  mediaTypeName?: string;
  pointOfContactId?: number;
  pointOfContactName?: string;
  routingAttribute?: number;
  skillId?: number;
  skillName?: string;
  stateId?: number;
  stateName?: string;
  targetAgentId?: number;
  teamId?: number;
  teamName?: string;
  toAddress?: string;
  transferIndicatorId?: number;
  transferIndicatorName?: string;
};
};

export type NiceCxoneFullApiSchemaContactCompeleted = {
  businessUnitId?: number;
  lastPollTime?: string;
  contactId?: {
  abandoned?: boolean;
  abandonSeconds?: number;
  acwSeconds?: number;
  agentId?: number;
  agentSeconds?: number;
  analyticsProcessedDate?: string;
  callbackTime?: number;
  campaignId?: number;
  campaignName?: string;
  conferenceSeconds?: number;
  contactId?: number;
  contactStartDate?: string;
  dateACWWarehoused?: string;
  dateContactWarehoused?: string;
  digitalContactStateId?: number;
  digitalContactStateName?: string;
  dispositionNotes?: string;
  endReason?: string;
  firstName?: string;
  fromAddress?: string;
  highProficiency?: number;
  holdCount?: number;
  holdSeconds?: number;
  inQueueSeconds?: number;
  isActive?: boolean;
  isAnalyticsProcessed?: boolean;
  isLogged?: boolean;
  isOutbound?: boolean;
  isRefused?: boolean;
  isShortAbandon?: boolean;
  isTakeover?: boolean;
  isWarehoused?: boolean;
  lastName?: string;
  lastUpdateTime?: string;
  lowProficiency?: number;
  masterContactId?: number;
  mediaSubTypeId?: number;
  mediaSubTypeName?: string;
  mediaTypeId?: number;
  mediaTypeName?: string;
  pointOfContactId?: number;
  pointOfContactName?: number;
  postQueueSeconds?: number;
  preQueueSeconds?: number;
  primaryDispositionId?: number;
  refuseReason?: string;
  refuseTime?: number;
  releaseSeconds?: number;
  routingAttribute?: number;
  routingTime?: number;
  secondaryDispositionId?: number;
  serviceLevelFlag?: number;
  skillId?: number;
  skillName?: string;
  stateId?: number;
  stateName?: string;
  teamId?: number;
  teamName?: string;
  toAddress?: string;
  totalDurationSeconds?: number;
  transferIndicatorId?: number;
  transferIndicatorName?: number;
  tags?: ReadonlyArray<{
  tagId?: number;
  tagName?: string;
}>;
};
};

export type NiceCxoneFullApiSchemaExportScheduleRequest = {
  startDate: string;
  endDate: string;
  userID: string;
};

export type NiceCxoneFullApiSchemaExportScheduleResponse = {
  agentSchedules: ReadonlyArray<{
  userId?: string;
  shifts?: ReadonlyArray<{
  shiftNotes?: string;
  activityIntervals?: ReadonlyArray<NiceCxoneFullApiSchemaJsonValue>;
  baseActivityCode?: {
  title?: string;
  open?: boolean;
  work?: boolean;
  overTime?: boolean;
};
  start?: string;
  end?: string;
}>;
}>;
  start: string;
  end: string;
};

export type NiceCxoneFullApiSchemaTimeOffSummaryByActivityCodeNameResponse = {
  totalRecords?: number;
  top?: number;
  skip?: number;
  timeOffUserSummaryList?: ReadonlyArray<{
  userName?: string;
  activityCodeName?: string;
  timeZone?: string;
  hireDateInUtc?: string;
  daysPerYear?: number;
  daysTaken?: number;
  scheduled?: number;
  remaining?: number;
  earned?: number;
  carriedOver?: string;
  accrualValueInDays?: number;
  accrualType?: string;
  hoursPerDay?: number;
  totalHours?: string;
  hoursTaken?: string;
  hoursScheduled?: string;
  hoursRemaining?: string;
  hoursEarned?: string;
  hoursCarriedOver?: string;
  accrualValueInHours?: string;
}>;
};

export type NiceCxoneFullApiSchemaImportUsersAllotmentRequest = {
  activityCodeName: string;
  allotmentType: "Days" | "Hours";
  allotmentByUserName: {
  readonly [key: string]: number | undefined;
};
};

export type NiceCxoneFullApiSchemaImportUsersAllotmentResponse = {
  code?: string;
  details?: {};
};

export type NiceCxoneFullApiSchemaSecurityProfile = {
  roleId?: string;
  securityProfileId?: number;
  securityProfileName?: string;
  description?: string;
  securityProfileStatusName?: string;
  isInternal?: boolean;
  permissions?: ReadonlyArray<{
  permissionKey?: string;
  optionKeys?: ReadonlyArray<string>;
}>;
  dataRestrictions?: ReadonlyArray<{
  dataRoleEntityTypeName?: string;
  accessibilityType?: string;
  entityIds?: ReadonlyArray<number>;
}>;
};

export type NiceCxoneFullApiSchemaRoutingAttributeAgent = {
  Agent_No?: number;
  First_Name?: string;
  Last_Name?: string;
  Team_Name?: string;
};

export type NiceCxoneFullApiSchemaAgentRoutingAttributes = {
  Agent_No?: number;
  Bus_No?: number;
  Attribute_No?: number;
  Attribute_Name?: string;
  Status?: "CURR" | "DISC";
};

export type NiceCxoneFullApiSchemaCreateApplicationV1Full = (NiceCxoneFullApiSchemaNAME & NiceCxoneFullApiSchemaDESCRIPTION & NiceCxoneFullApiSchemaCONTACTS & NiceCxoneFullApiSchemaTYPE & NiceCxoneFullApiSchemaTENANCY & NiceCxoneFullApiSchemaREDIRECTS & NiceCxoneFullApiSchemaORIGINS & NiceCxoneFullApiSchemaLOGOUTS & NiceCxoneFullApiSchemaAUTHMETHOD & NiceCxoneFullApiSchemaJWKSENDPOINT & NiceCxoneFullApiSchemaSCOPE);

export type NiceCxoneFullApiSchemaCreateApplicationV1Existing = (NiceCxoneFullApiSchemaID & NiceCxoneFullApiSchemaSECRET);

export type NiceCxoneFullApiSchemaGetApplicationBaseV1 = (NiceCxoneFullApiSchemaID & NiceCxoneFullApiSchemaNAME & NiceCxoneFullApiSchemaDESCRIPTION & NiceCxoneFullApiSchemaCONTACTS & NiceCxoneFullApiSchemaTYPE & NiceCxoneFullApiSchemaTENANCY & NiceCxoneFullApiSchemaREDIRECTS & NiceCxoneFullApiSchemaORIGINS & NiceCxoneFullApiSchemaLOGOUTS & NiceCxoneFullApiSchemaAUTHMETHOD & NiceCxoneFullApiSchemaJWKSENDPOINT & NiceCxoneFullApiSchemaSCOPE & NiceCxoneFullApiSchemaISENABLED & NiceCxoneFullApiSchemaCREATEDBY & NiceCxoneFullApiSchemaCREATEDTIME & NiceCxoneFullApiSchemaLASTMODIFIEDBY & NiceCxoneFullApiSchemaLASTMODIFIEDTIME & NiceCxoneFullApiSchemaLASTUSEDTIME & NiceCxoneFullApiSchemaSCHEDULEDDELETIONTIME);

export type NiceCxoneFullApiSchemaSECRET = {
  secret?: string;
};

export type NiceCxoneFullApiSchemaListOfApplicationV1 = {
  applications?: ReadonlyArray<NiceCxoneFullApiSchemaGetApplicationV1>;
};

export type NiceCxoneFullApiSchemaPatchApplicationBaseV1 = (NiceCxoneFullApiSchemaID & NiceCxoneFullApiSchemaNAME & NiceCxoneFullApiSchemaDESCRIPTION & NiceCxoneFullApiSchemaCONTACTS & NiceCxoneFullApiSchemaTYPE & NiceCxoneFullApiSchemaTENANCY & NiceCxoneFullApiSchemaREDIRECTS & NiceCxoneFullApiSchemaORIGINS & NiceCxoneFullApiSchemaLOGOUTS & NiceCxoneFullApiSchemaAUTHMETHOD & NiceCxoneFullApiSchemaJWKSENDPOINT & NiceCxoneFullApiSchemaSCOPE & NiceCxoneFullApiSchemaISENABLED & NiceCxoneFullApiSchemaCREATEDBY & NiceCxoneFullApiSchemaCREATEDTIME & NiceCxoneFullApiSchemaLASTMODIFIEDBY & NiceCxoneFullApiSchemaLASTMODIFIEDTIME & NiceCxoneFullApiSchemaLASTUSEDTIME & NiceCxoneFullApiSchemaSCHEDULEDDELETIONTIME);

export type NiceCxoneFullApiSchemaGetAccessKeysResponseLinks = {
  self?: string;
  next?: string;
  previous?: string;
};

export type NiceCxoneFullApiSchemaGetAccessKeysResponseAccessKeys = {
  accessKeyId?: string;
  userId?: string;
  tenantId?: string;
  agentId?: number;
  billingId?: number;
  isActive?: boolean;
  lastUsedDate?: string;
};

export type NiceCxoneFullApiSchemaPage = {
  pageSize?: number;
  pageNo?: number;
  totalRecords?: number;
};

export type NiceCxoneFullApiSchemaMetrices = {
  columns?: ReadonlyArray<string>;
};

export type NiceCxoneFullApiSchemaRoleV1 = {
  roleId?: string;
  roleName?: string;
  permissions?: ReadonlyArray<NiceCxoneFullApiSchemaPermission>;
  applications?: ReadonlyArray<NiceCxoneFullApiSchemaApplication>;
  displayName?: string;
  sequence?: number;
  description?: string;
  modifiable?: number;
  internal?: number;
  status?: "ACTIVE" | "INACTIVE" | "DELETED" | "DRAFT";
  lastModifiedTime?: string;
  parentAccess?: boolean;
  loginAuthenticatorId?: string;
};

export type NiceCxoneFullApiSchemaProductUsageGetResponse = {
  tenantId?: string;
  productTypeId?: number;
  partnerBillingId?: number;
  productUsageId?: string;
  productQuantity?: number;
  queryDate?: string;
  submittedBy?: string;
  createdTimeStamp?: string;
  modifiedTimeStamp?: string;
  productUsageTrackingId?: string;
  partnerTenantId?: string;
};

export type NiceCxoneFullApiSchemaDocumentInfo = {
  documentIdentifier: string;
  lastUpdatedTimestamp: string;
  ingestionStatus: "INDEXED" | "PARTIALLY_INDEXED" | "PENDING" | "FAILED" | "METADATA_PARTIALLY_INDEXED" | "METADATA_UPDATE_FAILED" | "IGNORED" | "NOT_FOUND" | "STARTING" | "IN_PROGRESS" | "DELETING" | "DELETE_IN_PROGRESS";
};

export type NiceCxoneFullApiSchemaDateRange = {
  startDate: string;
  endDate: string;
};

export type NiceCxoneFullApiSchemaCopilotFilters = {
  Team?: ReadonlyArray<string>;
  Skill?: ReadonlyArray<string>;
  CopilotProfileId?: ReadonlyArray<string>;
  AgentNumber?: ReadonlyArray<string>;
};

export type NiceCxoneFullApiSchemaCopilotAQFilters = {
  CopilotProfileId?: ReadonlyArray<string>;
  AgentNumber?: ReadonlyArray<string>;
};

export type NiceCxoneFullApiSchemaUserSearchItemsResponse = {
  schemas?: ReadonlyArray<string>;
  id?: string;
  userName?: string;
  name?: NiceCxoneFullApiSchemaNameAttribute;
  emails?: ReadonlyArray<NiceCxoneFullApiSchemaEmailAttribute>;
  displayName?: string;
  locale?: string;
  externalId?: string;
  active?: boolean;
  timeZone?: string;
  meta?: {
  resourceType?: string;
};
  "urn:ietf:params:scim:schemas:extension:nice:2.0:User"?: NiceCxoneFullApiSchemaUserExtension;
  roles?: ReadonlyArray<NiceCxoneFullApiSchemaScimRole>;
  userType?: string;
};

export type NiceCxoneFullApiSchemaNameAttribute = {
  givenName: string;
  familyName: string;
  middleName?: string;
};

export type NiceCxoneFullApiSchemaEmailAttribute = {
  type?: string;
  value: string;
  primary?: boolean;
};

export type NiceCxoneFullApiSchemaUserExtension = {
  team?: NiceCxoneFullApiSchemaScimTeam;
  loginAuthenticator?: NiceCxoneFullApiSchemaScimLoginAuthenticator;
};

export type NiceCxoneFullApiSchemaScimRoleRequest = {
  display?: string;
  value?: string;
};

export type NiceCxoneFullApiSchemaScimRole = {
  display?: string;
  value?: string;
  primary?: boolean;
};

export type NiceCxoneFullApiSchemaSchemaAttribute = {
  schemas?: ReadonlyArray<string>;
  meta?: {
  resourceType?: string;
  location?: string;
};
  id?: string;
  name?: string;
  description?: string;
  attributes?: ReadonlyArray<NiceCxoneFullApiSchemaAttribute>;
};

export type NiceCxoneFullApiSchemaUnavailableCode = {
  outStateId?: number;
  outStateName?: string;
  isActive?: boolean;
  isAcw?: boolean;
  agentTimeoutMins?: number;
};

export type NiceCxoneFullApiSchemaCustomAttribute = {
  id?: string;
  values?: ReadonlyArray<NiceCxoneFullApiSchemaAttributeValue>;
};

export type NiceCxoneFullApiSchemaTeamCreateUpdateResponse = {
  id?: string;
  name?: string;
  status?: "ACTIVE" | "INACTIVE";
  createdBy?: string;
  lastModified?: string;
  customAttributes?: NiceCxoneFullApiSchemaCustomAttribute;
  isDefault?: boolean;
  divisionId?: number;
};

export type NiceCxoneFullApiSchemaTeamV3 = {
  id?: string;
  name?: string;
  description?: string;
  status?: "ACTIVE" | "INACTIVE";
  leadUserId?: string;
  teamCustomAttributes?: {
  readonly [key: string]: NiceCxoneFullApiSchemaTeamCustomAttribute | undefined;
};
  isDefault?: boolean;
};

export type NiceCxoneFullApiSchemaUser2 = {
  id?: string;
  userName?: string;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  customAttributes?: {
  readonly [key: string]: NiceCxoneFullApiSchemaCustomAttribute | undefined;
};
  organizationName?: string;
  mobileNumber?: string;
  assignedGroup?: string;
  rank?: number;
  country?: string;
  timeZone?: string;
  role?: string;
  roleUUID?: string;
  hireDate?: string;
  status?: "UNREGISTERED" | "PENDING" | "ACTIVE" | "BLOCKED" | "DELETED";
  invitationExpired?: boolean;
  acdUserMappings?: ReadonlyArray<NiceCxoneFullApiSchemaAcdUserMapping>;
  acdInfos?: ReadonlyArray<NiceCxoneFullApiSchemaAcdInfo>;
  groupIds?: ReadonlyArray<string>;
  deletedDate?: string;
  icBUId?: string;
  icClusterId?: string;
  impersonated?: boolean;
  applicationAttributes?: {
  readonly [key: string]: ReadonlyArray<NiceCxoneFullApiSchemaApplicationAttribute> | undefined;
};
  billable?: boolean;
  modifiable?: boolean;
  idmType?: "KEYCLOAK" | "COGNITO" | "EVOLVECG";
  passwordPolicyUpdated?: boolean;
  teamId?: string;
  update?: boolean;
  defaultAdminUserRequired?: boolean;
  externalIdentity?: string;
  creationDate?: string;
  emailToBeVerified?: string;
  secondaryRoleIds?: ReadonlyArray<string>;
  password?: string;
  fullName?: string;
};

export type NiceCxoneFullApiSchemaAcdInfo = {
  loginId?: string;
};

export type NiceCxoneFullApiSchemaApplicationAttribute = {
  name?: string;
  values?: ReadonlyArray<string>;
  objects?: ReadonlyArray<{
  readonly [key: string]: {} | undefined;
}>;
};

export type NiceCxoneFullApiSchemaUserView = {
  id?: string;
  objectType?: string;
};

export type NiceCxoneFullApiSchemaUserV3 = {
  id?: string;
  userName?: string;
  firstName?: string;
  middleName?: string;
  displayName?: string;
  lastName?: string;
  emailAddress?: string;
  customAttributes?: {
  readonly [key: string]: NiceCxoneFullApiSchemaCustomAttribute | undefined;
};
  type?: string;
  mobileNumber?: string;
  mobileNumber2?: string;
  assignedGroup?: string;
  rank?: number;
  country?: string;
  timeZone?: string;
  role?: string;
  roleUUID?: string;
  hireDate?: string;
  status?: "UNREGISTERED" | "PENDING" | "ACTIVE" | "BLOCKED" | "DELETED";
  acdInfos?: ReadonlyArray<NiceCxoneFullApiSchemaAcdInfo>;
  groupIds?: ReadonlyArray<string>;
  deletedDate?: string;
  impersonated?: boolean;
  billable?: boolean;
  teamId?: string;
  externalIdentity?: string;
  emailToBeVerified?: string;
  secondaryRoleIds?: ReadonlyArray<string>;
  views?: ReadonlyArray<NiceCxoneFullApiSchemaUserView>;
  fullName?: string;
  loginAuthenticatorId?: string;
};

export type NiceCxoneFullApiSchemaSearchedUser = {
  id?: string;
  userName?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  displayName?: string;
  emailAddress?: string;
  customAttributes?: {
  readonly [key: string]: NiceCxoneFullApiSchemaCustomAttributeV2 | undefined;
};
  mobileNumber?: string;
  mobileNumber2?: string;
  assignedGroup?: string;
  rank?: number;
  country?: string;
  timeZone?: string;
  role?: string;
  roleUUID?: string;
  type?: string;
  hireDate?: string;
  status?: "UNREGISTERED" | "PENDING" | "ACTIVE" | "BLOCKED" | "DELETED";
  invitationExpired?: boolean;
  acdUserMappings?: ReadonlyArray<NiceCxoneFullApiSchemaAcdUserMappingV2>;
  acdInfos?: ReadonlyArray<NiceCxoneFullApiSchemaAcdInfoV2>;
  groupIds?: ReadonlyArray<string>;
  deletedDate?: string;
  impersonated?: boolean;
  billable?: boolean;
  modifiable?: boolean;
  passwordPolicyUpdated?: boolean;
  teamId?: string;
  externalIdentity?: string;
  creationDate?: string;
  emailToBeVerified?: string;
  secondaryRoleIds?: ReadonlyArray<string>;
  fullName?: string;
  views?: ReadonlyArray<NiceCxoneFullApiSchemaUserView>;
  divisionId?: number;
};

export type NiceCxoneFullApiSchemaUserIdentityV2 = {
  id?: string;
  displayName?: string;
  status?: "UNREGISTERED" | "PENDING" | "ACTIVE" | "BLOCKED" | "DELETED";
};

export type NiceCxoneFullApiSchemaLinks4 = {
  self?: string;
  next?: string;
  previous?: string;
};

export type NiceCxoneFullApiSchemaUserIdentityV1 = {
  id?: string;
  fullName?: string;
};

export type NiceCxoneFullApiSchemaJobState = {
  id?: string;
  status?: "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELLED" | "EXPIRED";
};

export type NiceCxoneFullApiSchemaJobStatus = {
  id?: string;
  status?: "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELLED" | "EXPIRED";
  result?: NiceCxoneFullApiSchemaJobResult;
};

export type NiceCxoneFullApiSchemaApiError = {
  field: string;
  message: string;
  parameters: {};
  errorCode?: string;
};

export type NiceCxoneFullApiSchemaContactAbandon = {
  type: "abandon" | "expired" | "shortAbandon";
  abandonedAt: string;
};

export type NiceCxoneFullApiSchemaAuthorCustomerIdentity = {
  idOnExternalPlatform: string;
  firstName?: string;
  lastName?: string;
  nickname?: string;
  image?: string;
  customFields?: ReadonlyArray<NiceCxoneFullApiSchemaCustomField>;
};

export type NiceCxoneFullApiSchemaCustomer2 = {
  id: string;
  updatedAt: string;
  firstName?: string;
  surname?: string;
  fullName?: string;
  customFields?: ReadonlyArray<NiceCxoneFullApiSchemaCustomField>;
  image?: string;
  identities: ReadonlyArray<NiceCxoneFullApiSchemaAuthorCustomerIdentity>;
  messageStatistics: NiceCxoneFullApiSchemaCustomerMessageStatistics2;
  sentimentStatistics: NiceCxoneFullApiSchemaCustomerSentimentStatistics2;
};

export type NiceCxoneFullApiSchemaUser3 = {
  id: number;
  incontactId?: string;
  emailAddress: string;
  loginUsername: string;
  firstName: string;
  surname: string;
  nickname?: string;
  imageUrl?: string;
  isBotUser: boolean;
  isSurveyUser: boolean;
};

export type NiceCxoneFullApiSchemaContactStatus = "closed" | "escalated" | "new" | "open" | "pending" | "resolved" | "trashed";

export type NiceCxoneFullApiSchemaDeviceFingerprint = {
  browser?: string;
  browserVersion?: string;
  os?: string;
  osVersion?: string;
  language?: string;
  ip?: string;
  location?: string;
  country?: string;
  deviceType?: string;
  deviceToken?: string;
  applicationType?: string;
  supportedMessageTypes?: ReadonlyArray<"ADAPTIVE_CARD" | "DYNAMIC_CONTENT" | "FORM" | "LIST_PICKER" | "PLUGIN" | "POSTBACK" | "QUICK_REPLIES" | "RICH_LINK" | "TEXT" | "TIME_PICKER" | "UNSUPPORTED">;
};

export type NiceCxoneFullApiSchemaApiError2 = {
  field?: string;
  message: string;
  parameters?: {};
  errorCode?: string;
};

export type NiceCxoneFullApiSchemaReactionStatistics = {
  likes?: number;
  shares?: number;
  isLikedByChannel?: boolean;
  isSharedByChannel?: boolean;
};

export type NiceCxoneFullApiSchemaMessageContent = {
  type: "TEXT" | "PLUGIN" | "QUICK_REPLIES" | "LIST_PICKER" | "RICH_LINK" | "ADAPTIVE_CARD";
  payload: (NiceCxoneFullApiSchemaTextPayload | NiceCxoneFullApiSchemaElementsPayload | NiceCxoneFullApiSchemaQuickRepliesPayload | NiceCxoneFullApiSchemaListPickerPayload | NiceCxoneFullApiSchemaRichLinkPayload | NiceCxoneFullApiSchemaAdaptiveCardPayload);
  fallbackText: string;
  postback: string | null;
};

export type NiceCxoneFullApiSchemaAttachment = {
  friendlyName: string;
  url: string;
};

export type NiceCxoneFullApiSchemaContentRemoved = {
  reason?: NiceCxoneFullApiSchemaContentRemovedReason;
  removedAt?: string;
};

export type NiceCxoneFullApiSchemaChannelV22 = {
  id: string;
  idOnExternalPlatform: string;
  realExternalPlatformId: "apple-apps-reviews" | "apple-business-chat" | "bg" | "bw" | "chat" | "congstar-forum" | "custom" | "cypress" | "discussions" | "email" | "facebook" | "fb" | "fm" | "forum" | "gcse" | "gl" | "google-business-messages" | "google-places" | "google-play" | "google-rcs" | "gp" | "ig" | "in-contact-email" | "ind" | "instagram" | "kik" | "lc" | "li" | "line" | "mediatoolkit" | "microsoft-teams" | "mock" | "monitora" | "news" | "nw" | "ok-ru" | "phpbb" | "rss" | "sandbox" | "sandbox-facebook" | "sandbox-twitter" | "sendbird" | "slack" | "smooch-io-we-chat" | "sms" | "social-watch" | "t-mobile-austria-forum" | "talkdesk" | "telegram" | "tmobile-forum" | "tw" | "twitter" | "viber" | "vk" | "vo" | "voice" | "we-chat" | "whatsapp" | "youscan" | "yt" | "zoom";
  name: string;
  externalPlatformAvatar?: string;
  externalPlatformIcon?: "amazon" | "apple" | "apple-apps" | "apple-imessage" | "co-browsing" | "contact-form" | "email" | "facebook" | "facebook-dm" | "facebook-messenger" | "forum" | "google" | "google-dm" | "google-maps" | "google-play" | "google-search" | "instagram" | "instagram-dm" | "kakao-talk" | "kik" | "line-message" | "linkedin" | "listening" | "livechat" | "livechat-contact-form" | "ok-ru" | "pinterest" | "rcs" | "rss" | "slack" | "sms" | "snapchat" | "tango" | "telegram" | "tumblr" | "twitter" | "twitter-dm" | "viber" | "vkontakte" | "vkontakte-dm" | "voice" | "wechat" | "whatsapp" | "youtube";
  channelIntegrationId: string;
  hasReply?: boolean;
  hasTreeStructure: boolean;
  contentFormat: "html" | "plain";
  hasCustomerOnThirdParty?: boolean;
  isPostWritable?: boolean;
  hasAbilityToQuoteMessage?: boolean;
  hasAbilityToLike?: boolean;
  isPrivate: boolean;
  isHidden?: boolean;
  wysiwygEnabled?: boolean;
  hasAbilityToTag?: boolean;
  ownerUserId?: number;
  hasPublishing?: boolean;
  hasAbilityToSendFiles?: boolean;
  hasOutboundFlow?: boolean;
  hasAbilityToShare?: boolean;
  hasAbilityToHide?: boolean;
  hasAbilityToDelete?: boolean;
  replyPrefixMentionTemplate?: string;
  nicknameOnExternalPlatform?: string;
  isLiveChat?: boolean;
  hasAbilityToChangeRecipient?: boolean;
  hasMultipleRecipient?: boolean;
  hasCcAndBcc?: boolean;
  hasVisibleTitle?: boolean;
  hasEditableTitle?: boolean;
  hasVisibleRecipients?: boolean;
  hasAbilityToForwardMessage?: boolean;
  canSaveResponse?: boolean;
  hasAbilityToChangeFrom?: boolean;
  isAutomaticSignatureAttached?: boolean;
  hasOutboundTemplates?: boolean;
  hasManualOutboundFlow?: boolean;
  hasMultipleThreadsPerEndUser?: boolean;
  translationGroup?: "default" | "email" | "phone";
  studioScript?: string | null;
  defaultSkillId?: number | null;
  canAgentInviteCustomersToContact?: boolean;
  canReplyToAnyMessage?: boolean;
  hasAgentsAsRecipients?: boolean;
  canSendSenderActions?: boolean;
};

export type NiceCxoneFullApiSchemaPlatformBackendReplyToMessage = {
  idOnExternalPlatform?: string;
};

export type NiceCxoneFullApiSchemaSentiment2 = "neutral" | "positive" | "negative";

export type NiceCxoneFullApiSchemaTag2 = {
  id: number;
  color?: string;
  title: string;
};

export type NiceCxoneFullApiSchemaContentRemovedReason = "GDPR" | "TTL" | "other";

export type NiceCxoneFullApiSchemaAuthorCustomerIdentity2 = {
  idOnExternalPlatform: string;
  firstName?: string;
  lastName?: string;
  nickname?: string;
  image?: string;
  customFields?: ReadonlyArray<NiceCxoneFullApiSchemaCustomField2>;
};

export type NiceCxoneFullApiSchemaCustomerMessageStatistics = {
  inbound?: number;
  outbound?: number;
};

export type NiceCxoneFullApiSchemaCustomerSentimentStatistics = {
  positive?: number;
  neutral?: number;
  negative?: number;
};

export type NiceCxoneFullApiSchemaUser4 = {
  id: number;
  incontactId?: string;
  emailAddress: string;
  loginUsername: string;
  firstName: string;
  surname: string;
  nickname?: string;
  imageUrl?: string;
  isBotUser: boolean;
  isSurveyUser: boolean;
};

export type NiceCxoneFullApiSchemaApiError3 = {
  field?: string;
  message: string;
  parameters?: {};
  errorCode?: string;
};

export type NiceCxoneFullApiSchemaApiError4 = {
  field?: string;
  message: string;
  parameters?: {};
  errorCode?: string;
};

export type NiceCxoneFullApiSchemaReactionStatistics2 = {
  likes?: number;
  shares?: number;
  isLikedByChannel?: boolean;
  isSharedByChannel?: boolean;
};

export type NiceCxoneFullApiSchemaThreadToCreate = {
  idOnExternalPlatform?: string;
  threadName?: string;
};

export type NiceCxoneFullApiSchemaPlatformBackendReplyToMessage2 = {
  idOnExternalPlatform?: string;
};

export type NiceCxoneFullApiSchemaPlatformBackendMessageContentToCreate = {
  type: "TEXT" | "PLUGIN" | "QUICK_REPLIES" | "LIST_PICKER" | "RICH_LINK" | "ADAPTIVE_CARD";
  payload: (NiceCxoneFullApiSchemaTextPayload2 | NiceCxoneFullApiSchemaElementsPayload2 | NiceCxoneFullApiSchemaQuickRepliesPayload2 | NiceCxoneFullApiSchemaListPickerPayload2 | NiceCxoneFullApiSchemaRichLinkPayload2 | NiceCxoneFullApiSchemaAdaptiveCardPayload2);
  fallbackText?: string;
  postback?: string | null;
};

export type NiceCxoneFullApiSchemaAuthorCustomerIdentity3 = {
  idOnExternalPlatform: string;
  firstName?: string;
  lastName?: string;
  nickname?: string;
  image?: string;
  customFields?: ReadonlyArray<NiceCxoneFullApiSchemaCustomField3>;
};

export type NiceCxoneFullApiSchemaDeviceFingerprint2 = {
  browser?: string;
  browserVersion?: string;
  os?: string;
  osVersion?: string;
  language?: string;
  ip?: string;
  location?: string;
  country?: string;
  deviceType?: string;
  deviceToken?: string;
  applicationType?: string;
  supportedMessageTypes?: ReadonlyArray<"ADAPTIVE_CARD" | "DYNAMIC_CONTENT" | "FORM" | "LIST_PICKER" | "PLUGIN" | "POSTBACK" | "QUICK_REPLIES" | "RICH_LINK" | "TEXT" | "TIME_PICKER" | "UNSUPPORTED">;
};

export type NiceCxoneFullApiSchemaContactInformation = (NiceCxoneFullApiSchemaContactInformationBase & {
  status?: "escalated" | "pending" | "resolved";
});

export type NiceCxoneFullApiSchemaAttachment2 = {
  friendlyName: string;
  url: string;
};

export type NiceCxoneFullApiSchemaRecipient2 = {
  idOnExternalPlatform: string;
  name?: string;
  isPrimary?: boolean;
  isPrivate?: boolean;
  anonymizedAt?: string;
  anonymizedReason?: NiceCxoneFullApiSchemaContentRemovedReason2;
};

export type NiceCxoneFullApiSchemaExternalAttribute = {
  key: string;
  value: string;
};

export type NiceCxoneFullApiSchemaContactAbandon2 = {
  type: "abandon" | "expired" | "shortAbandon";
  abandonedAt: string;
};

export type NiceCxoneFullApiSchemaCustomField3 = {
  ident: string;
  value: string;
  updatedAt?: string;
};

export type NiceCxoneFullApiSchemaCustomer3 = {
  id: string;
  updatedAt: string;
  firstName?: string;
  surname?: string;
  fullName?: string;
  customFields?: ReadonlyArray<NiceCxoneFullApiSchemaCustomField3>;
  image?: string;
  identities: ReadonlyArray<NiceCxoneFullApiSchemaAuthorCustomerIdentity3>;
  messageStatistics: NiceCxoneFullApiSchemaCustomerMessageStatistics3;
  sentimentStatistics: NiceCxoneFullApiSchemaCustomerSentimentStatistics3;
};

export type NiceCxoneFullApiSchemaUser5 = {
  id: number;
  incontactId?: string;
  emailAddress: string;
  loginUsername: string;
  firstName: string;
  surname: string;
  nickname?: string;
  imageUrl?: string;
  isBotUser: boolean;
  isSurveyUser: boolean;
};

export type NiceCxoneFullApiSchemaContactStatus2 = "closed" | "escalated" | "new" | "open" | "pending" | "resolved" | "trashed";

export type NiceCxoneFullApiSchemaMessageContent2 = {
  type: "TEXT" | "PLUGIN" | "QUICK_REPLIES" | "LIST_PICKER" | "RICH_LINK" | "ADAPTIVE_CARD";
  payload: (NiceCxoneFullApiSchemaTextPayload2 | NiceCxoneFullApiSchemaElementsPayload2 | NiceCxoneFullApiSchemaQuickRepliesPayload2 | NiceCxoneFullApiSchemaListPickerPayload2 | NiceCxoneFullApiSchemaRichLinkPayload2 | NiceCxoneFullApiSchemaAdaptiveCardPayload2);
  fallbackText: string;
  postback: string | null;
};

export type NiceCxoneFullApiSchemaContentRemoved2 = {
  reason?: NiceCxoneFullApiSchemaContentRemovedReason2;
  removedAt?: string;
};

export type NiceCxoneFullApiSchemaChannelV23 = {
  id: string;
  idOnExternalPlatform: string;
  realExternalPlatformId: "apple-apps-reviews" | "apple-business-chat" | "bg" | "bw" | "chat" | "congstar-forum" | "custom" | "cypress" | "discussions" | "email" | "facebook" | "fb" | "fm" | "forum" | "gcse" | "gl" | "google-business-messages" | "google-places" | "google-play" | "google-rcs" | "gp" | "ig" | "in-contact-email" | "ind" | "instagram" | "kik" | "lc" | "li" | "line" | "mediatoolkit" | "microsoft-teams" | "mock" | "monitora" | "news" | "nw" | "ok-ru" | "phpbb" | "rss" | "sandbox" | "sandbox-facebook" | "sandbox-twitter" | "sendbird" | "slack" | "smooch-io-we-chat" | "sms" | "social-watch" | "t-mobile-austria-forum" | "talkdesk" | "telegram" | "tmobile-forum" | "tw" | "twitter" | "viber" | "vk" | "vo" | "voice" | "we-chat" | "whatsapp" | "youscan" | "yt" | "zoom";
  name: string;
  externalPlatformAvatar?: string;
  externalPlatformIcon?: "amazon" | "apple" | "apple-apps" | "apple-imessage" | "co-browsing" | "contact-form" | "email" | "facebook" | "facebook-dm" | "facebook-messenger" | "forum" | "google" | "google-dm" | "google-maps" | "google-play" | "google-search" | "instagram" | "instagram-dm" | "kakao-talk" | "kik" | "line-message" | "linkedin" | "listening" | "livechat" | "livechat-contact-form" | "ok-ru" | "pinterest" | "rcs" | "rss" | "slack" | "sms" | "snapchat" | "tango" | "telegram" | "tumblr" | "twitter" | "twitter-dm" | "viber" | "vkontakte" | "vkontakte-dm" | "voice" | "wechat" | "whatsapp" | "youtube";
  channelIntegrationId: string;
  hasReply?: boolean;
  hasTreeStructure: boolean;
  contentFormat: "html" | "plain";
  hasCustomerOnThirdParty?: boolean;
  isPostWritable?: boolean;
  hasAbilityToQuoteMessage?: boolean;
  hasAbilityToLike?: boolean;
  isPrivate: boolean;
  isHidden?: boolean;
  wysiwygEnabled?: boolean;
  hasAbilityToTag?: boolean;
  ownerUserId?: number;
  hasPublishing?: boolean;
  hasAbilityToSendFiles?: boolean;
  hasOutboundFlow?: boolean;
  hasAbilityToShare?: boolean;
  hasAbilityToHide?: boolean;
  hasAbilityToDelete?: boolean;
  replyPrefixMentionTemplate?: string;
  nicknameOnExternalPlatform?: string;
  isLiveChat?: boolean;
  hasAbilityToChangeRecipient?: boolean;
  hasMultipleRecipient?: boolean;
  hasCcAndBcc?: boolean;
  hasVisibleTitle?: boolean;
  hasEditableTitle?: boolean;
  hasVisibleRecipients?: boolean;
  hasAbilityToForwardMessage?: boolean;
  canSaveResponse?: boolean;
  hasAbilityToChangeFrom?: boolean;
  isAutomaticSignatureAttached?: boolean;
  hasOutboundTemplates?: boolean;
  hasManualOutboundFlow?: boolean;
  hasMultipleThreadsPerEndUser?: boolean;
  translationGroup?: "default" | "email" | "phone";
  studioScript?: string | null;
  defaultSkillId?: number | null;
  canAgentInviteCustomersToContact?: boolean;
  canReplyToAnyMessage?: boolean;
  hasAgentsAsRecipients?: boolean;
  canSendSenderActions?: boolean;
};

export type NiceCxoneFullApiSchemaTag3 = {
  id: number;
  color?: string;
  title: string;
};

export type NiceCxoneFullApiSchemaApiError5 = {
  field?: string;
  message: string;
  parameters?: {};
  errorCode?: string;
};

export type NiceCxoneFullApiSchemaOutboundMessageToCreateBaseSchema = ({
  thread: NiceCxoneFullApiSchemaJsonValue;
} | NiceCxoneFullApiSchemaJsonValue);

export type NiceCxoneFullApiSchemaPlatformBackendThreadToCreate = {
  idOnExternalPlatform?: string;
  threadName?: string;
};

export type NiceCxoneFullApiSchemaCustomFieldToCreate = {
  ident: string;
  value: string;
};

export type NiceCxoneFullApiSchemaContentRemovedReason2 = "GDPR" | "TTL" | "other";

export type NiceCxoneFullApiSchemaMessageMinimum = {
  id: string;
};

export type NiceCxoneFullApiSchemaNoteStatus = {
  type: "new" | "checked";
};

export type NiceCxoneFullApiSchemaAuthorCustomerIdentity4 = {
  idOnExternalPlatform: string;
  firstName?: string;
  lastName?: string;
  nickname?: string;
  image?: string;
  customFields?: ReadonlyArray<NiceCxoneFullApiSchemaCustomField4>;
};

export type NiceCxoneFullApiSchemaReactionStatistics3 = {
  likes?: number;
  shares?: number;
  isLikedByChannel?: boolean;
  isSharedByChannel?: boolean;
};

export type NiceCxoneFullApiSchemaMessageContent3 = {
  type: "TEXT" | "PLUGIN" | "QUICK_REPLIES" | "LIST_PICKER" | "RICH_LINK" | "ADAPTIVE_CARD";
  payload: (NiceCxoneFullApiSchemaTextPayload3 | NiceCxoneFullApiSchemaElementsPayload3 | NiceCxoneFullApiSchemaQuickRepliesPayload3 | NiceCxoneFullApiSchemaListPickerPayload3 | NiceCxoneFullApiSchemaRichLinkPayload3 | NiceCxoneFullApiSchemaAdaptiveCardPayload3);
  fallbackText: string;
  postback: string | null;
};

export type NiceCxoneFullApiSchemaAttachment3 = {
  friendlyName: string;
  url: string;
};

export type NiceCxoneFullApiSchemaContentRemoved3 = {
  reason?: NiceCxoneFullApiSchemaContentRemovedReason3;
  removedAt?: string;
};

export type NiceCxoneFullApiSchemaUser6 = {
  id: number;
  incontactId?: string;
  emailAddress: string;
  loginUsername: string;
  firstName: string;
  surname: string;
  nickname?: string;
  imageUrl?: string;
  isBotUser: boolean;
  isSurveyUser: boolean;
};

export type NiceCxoneFullApiSchemaRecipient3 = {
  idOnExternalPlatform: string;
  name?: string;
  isPrimary?: boolean;
  isPrivate?: boolean;
  anonymizedAt?: string;
  anonymizedReason?: NiceCxoneFullApiSchemaContentRemovedReason3;
};

export type NiceCxoneFullApiSchemaChannelV24 = {
  id: string;
  idOnExternalPlatform: string;
  realExternalPlatformId: "apple-apps-reviews" | "apple-business-chat" | "bg" | "bw" | "chat" | "congstar-forum" | "custom" | "cypress" | "discussions" | "email" | "facebook" | "fb" | "fm" | "forum" | "gcse" | "gl" | "google-business-messages" | "google-places" | "google-play" | "google-rcs" | "gp" | "ig" | "in-contact-email" | "ind" | "instagram" | "kik" | "lc" | "li" | "line" | "mediatoolkit" | "microsoft-teams" | "mock" | "monitora" | "news" | "nw" | "ok-ru" | "phpbb" | "rss" | "sandbox" | "sandbox-facebook" | "sandbox-twitter" | "sendbird" | "slack" | "smooch-io-we-chat" | "sms" | "social-watch" | "t-mobile-austria-forum" | "talkdesk" | "telegram" | "tmobile-forum" | "tw" | "twitter" | "viber" | "vk" | "vo" | "voice" | "we-chat" | "whatsapp" | "youscan" | "yt" | "zoom";
  name: string;
  externalPlatformAvatar?: string;
  externalPlatformIcon?: "amazon" | "apple" | "apple-apps" | "apple-imessage" | "co-browsing" | "contact-form" | "email" | "facebook" | "facebook-dm" | "facebook-messenger" | "forum" | "google" | "google-dm" | "google-maps" | "google-play" | "google-search" | "instagram" | "instagram-dm" | "kakao-talk" | "kik" | "line-message" | "linkedin" | "listening" | "livechat" | "livechat-contact-form" | "ok-ru" | "pinterest" | "rcs" | "rss" | "slack" | "sms" | "snapchat" | "tango" | "telegram" | "tumblr" | "twitter" | "twitter-dm" | "viber" | "vkontakte" | "vkontakte-dm" | "voice" | "wechat" | "whatsapp" | "youtube";
  channelIntegrationId: string;
  hasReply?: boolean;
  hasTreeStructure: boolean;
  contentFormat: "html" | "plain";
  hasCustomerOnThirdParty?: boolean;
  isPostWritable?: boolean;
  hasAbilityToQuoteMessage?: boolean;
  hasAbilityToLike?: boolean;
  isPrivate: boolean;
  isHidden?: boolean;
  wysiwygEnabled?: boolean;
  hasAbilityToTag?: boolean;
  ownerUserId?: number;
  hasPublishing?: boolean;
  hasAbilityToSendFiles?: boolean;
  hasOutboundFlow?: boolean;
  hasAbilityToShare?: boolean;
  hasAbilityToHide?: boolean;
  hasAbilityToDelete?: boolean;
  replyPrefixMentionTemplate?: string;
  nicknameOnExternalPlatform?: string;
  isLiveChat?: boolean;
  hasAbilityToChangeRecipient?: boolean;
  hasMultipleRecipient?: boolean;
  hasCcAndBcc?: boolean;
  hasVisibleTitle?: boolean;
  hasEditableTitle?: boolean;
  hasVisibleRecipients?: boolean;
  hasAbilityToForwardMessage?: boolean;
  canSaveResponse?: boolean;
  hasAbilityToChangeFrom?: boolean;
  isAutomaticSignatureAttached?: boolean;
  hasOutboundTemplates?: boolean;
  hasManualOutboundFlow?: boolean;
  hasMultipleThreadsPerEndUser?: boolean;
  translationGroup?: "default" | "email" | "phone";
  studioScript?: string | null;
  defaultSkillId?: number | null;
  canAgentInviteCustomersToContact?: boolean;
  canReplyToAnyMessage?: boolean;
  hasAgentsAsRecipients?: boolean;
  canSendSenderActions?: boolean;
};

export type NiceCxoneFullApiSchemaPlatformBackendReplyToMessage3 = {
  idOnExternalPlatform?: string;
};

export type NiceCxoneFullApiSchemaSentiment3 = "neutral" | "positive" | "negative";

export type NiceCxoneFullApiSchemaTag4 = {
  id: number;
  color?: string;
  title: string;
};

export type NiceCxoneFullApiSchemaApiError6 = {
  field?: string;
  message: string;
  parameters?: {};
  errorCode?: string;
};

export type NiceCxoneFullApiSchemaApiError7 = {
  field?: string;
  message: string;
  parameters?: {};
  errorCode?: string;
};

export type NiceCxoneFullApiSchemaInteraction = {
  tenantId?: string;
  segmentId?: string;
  acdContactId?: number;
  agentContactId?: string;
  resolved?: boolean;
  publishedAt?: string;
  startTime?: string;
  endTime?: string;
  enlightenMetrics?: ReadonlyArray<NiceCxoneFullApiSchemaEnlightenMetric>;
  channels?: ReadonlyArray<NiceCxoneFullApiSchemaChannel2>;
  categoryMatches?: ReadonlyArray<NiceCxoneFullApiSchemaCategory>;
  entities?: ReadonlyArray<NiceCxoneFullApiSchemaEntity>;
  mediaType?: string;
  firstAnnotatedAt?: string;
  contactNo?: ReadonlyArray<string>;
  interactionId?: string;
  holdCount?: number;
  holdSeconds?: number;
  contactEndReason?: string;
  dispositionCode?: string;
  nonHoldNotableSilenceSeconds?: number;
  nonHoldNotableSilencePercentage?: number;
  notableSilenceSeconds?: number;
  notableSilencePercentage?: number;
  enlightenSentimentRawScore?: number;
  enlightenSentimentIndexScore?: number;
  segmentSummaryPrimaryIntentCategory?: string;
  segmentSummaryPrimaryIntentTopic?: string;
  segmentSummaryPrimaryIntentName?: string;
  segmentSummaryActions?: ReadonlyArray<string>;
  segmentSummaryOutcomes?: ReadonlyArray<string>;
};

export type NiceCxoneFullApiSchemaTranscriptBlock = {
  channelId?: number;
  channelName?: string;
  offset?: number;
  length?: number;
  blockId?: number;
  text?: string;
  userId?: string;
  channelUuid?: string;
  channelType?: string;
  userType?: string;
  voiceMetadata?: NiceCxoneFullApiSchemaVoiceMetadata;
  chatMetadata?: NiceCxoneFullApiSchemaChatMetadata;
  emailMetadata?: NiceCxoneFullApiSchemaEmailMetadata;
};

export type NiceCxoneFullApiSchemaTranscriptAnnotation = {
  objectType?: string;
  type?: string;
  value?: string;
  offset?: number;
  highlightLength?: number;
  transcriptOffset?: number;
  transcriptChunk?: number;
  channelName?: string;
  categoryPath?: string;
  datasetIds?: ReadonlyArray<number>;
  domainRole?: string;
  stem?: string;
  displayText?: string;
  sentimentCueStrength?: number;
};

export type NiceCxoneFullApiSchemaEnlightenMetric = {
  behaviorName?: string;
  indexScore?: number;
  rawScore?: number;
  enlightenPackageModels?: ReadonlyArray<string>;
};

export type NiceCxoneFullApiSchemaSegmentSummary = {
  summary?: string;
  actions?: ReadonlyArray<NiceCxoneFullApiSchemaAction>;
  primaryIntent?: NiceCxoneFullApiSchemaIntent;
  outcomes?: ReadonlyArray<NiceCxoneFullApiSchemaOutcome>;
};

export type NiceCxoneFullApiSchemaVoiceAndScreen = {
  startTime?: string;
  endTime?: string;
  acwEndTime?: string;
  fileToPlayUrl?: string;
  videoImageUrl?: string;
  waveformDataList?: ReadonlyArray<NiceCxoneFullApiSchemaWaveformData>;
  participantDataList?: ReadonlyArray<NiceCxoneFullApiSchemaVoiceAndScreenParticipant>;
  segmentsDataList?: ReadonlyArray<NiceCxoneFullApiSchemaSegmentsData>;
  categoryMatchesList?: ReadonlyArray<NiceCxoneFullApiSchemaCategoryMatches>;
  sentiments?: ReadonlyArray<NiceCxoneFullApiSchemaSentiment4>;
  dfoStages?: ReadonlyArray<NiceCxoneFullApiSchemaDfoStage> | null;
};

export type NiceCxoneFullApiSchemaChat = {
  startTime?: string;
  endTime?: string;
  acwEndTime?: string;
  fileToPlayUrl?: string;
  transferPoints?: string;
  participants?: ReadonlyArray<NiceCxoneFullApiSchemaChatParticipant>;
  messages?: ReadonlyArray<NiceCxoneFullApiSchemaChatMessages>;
  segmentsDataList?: ReadonlyArray<NiceCxoneFullApiSchemaSegmentsData>;
  dfoStages?: ReadonlyArray<NiceCxoneFullApiSchemaDfoStage> | null;
};

export type NiceCxoneFullApiSchemaEmail = {
  startTime?: string;
  endTime?: string;
  acwEndTime?: string;
  fileToPlayUrl?: string;
  participants?: ReadonlyArray<NiceCxoneFullApiSchemaEmailParticipant>;
  content?: NiceCxoneFullApiSchemaEmailContent;
  segmentsDataList?: ReadonlyArray<NiceCxoneFullApiSchemaSegmentsData>;
  dfoStages?: ReadonlyArray<NiceCxoneFullApiSchemaDfoStage> | null;
};

export type NiceCxoneFullApiSchemaDynamicBusinessData = {
  id?: string;
  value?: string;
};

export type NiceCxoneFullApiSchemaVoiceAndScreenSegment = {
  startTime?: string;
  endTime?: string;
  acwEndTime?: string;
  fileToPlayUrl?: string;
  videoImageUrl?: string;
  waveformDataList?: ReadonlyArray<NiceCxoneFullApiSchemaWaveformData>;
  participantDataList?: ReadonlyArray<NiceCxoneFullApiSchemaVoiceAndScreenParticipant>;
  segmentsDataList?: ReadonlyArray<NiceCxoneFullApiSchemaSegmentData>;
  categoryMatchesList?: ReadonlyArray<NiceCxoneFullApiSchemaCategoryMatches>;
  sentiments?: ReadonlyArray<NiceCxoneFullApiSchemaSentiment4>;
  dfoStages?: ReadonlyArray<NiceCxoneFullApiSchemaDfoStage> | null;
};

export type NiceCxoneFullApiSchemaChatSegment = {
  startTime?: string;
  endTime?: string;
  acwEndTime?: string;
  fileToPlayUrl?: string;
  transferPoints?: string;
  participants?: ReadonlyArray<NiceCxoneFullApiSchemaChatParticipant>;
  messages?: ReadonlyArray<NiceCxoneFullApiSchemaChatMessages>;
  segmentsDataList?: ReadonlyArray<NiceCxoneFullApiSchemaSegmentData>;
  "dfoStages\""?: ReadonlyArray<NiceCxoneFullApiSchemaDfoStage> | null;
};

export type NiceCxoneFullApiSchemaEmailSegment = {
  startTime?: string;
  endTime?: string;
  acwEndTime?: string;
  fileToPlayUrl?: string;
  participants?: ReadonlyArray<NiceCxoneFullApiSchemaEmailParticipant>;
  content?: NiceCxoneFullApiSchemaEmailContent;
  segmentsDataList?: ReadonlyArray<NiceCxoneFullApiSchemaSegmentData>;
};

export type NiceCxoneFullApiSchemaCriteria = {
  fieldId?: string;
  operator?: string;
  range?: NiceCxoneFullApiSchemaRange;
  value?: string;
  values?: ReadonlyArray<string>;
};

export type NiceCxoneFullApiSchemaRecurrenceConfig = {
  frequency?: "DAILY" | "WEEKLY" | "MONTHLY";
  recurrenceEndType?: "DATE" | "NO_OF_OCCURRENCES" | "NEVER";
  recurrenceEndDate?: string;
  totalNoOfRecurrences?: number;
  dayOfWeek?: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  dayOfMonth?: number;
};

export type NiceCxoneFullApiSchemaSchedule = {
  executeNow?: boolean;
};

export type NiceCxoneFullApiSchemaSearchPaginationRequest = {
  skip?: number;
  top?: number;
};

export type NiceCxoneFullApiSchemaPolicyFilterRequest = {
  fieldId?: string;
  operator?: string;
  value?: string;
  values?: ReadonlyArray<string>;
};

export type NiceCxoneFullApiSchemaSearchSortRequest = {
  columnName?: string;
  order?: string;
};

export type NiceCxoneFullApiSchemaRecurrenceConfigOutput = {
  frequency?: "DAILY" | "WEEKLY" | "MONTHLY";
  recurrenceEndType?: "DATE" | "NO_OF_OCCURRENCES" | "NEVER";
  recurrenceEndDate?: string;
  totalNoOfRecurrences?: number;
  dayOfWeek?: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  dayOfMonth?: number;
  recurrenceStatus?: string;
  recurrenceTime?: string;
};

export type NiceCxoneFullApiSchemaPolicyInstanceResultSummary = {
  successCount?: number;
  failureCount?: number;
  partialCount?: number;
  litigationHoldCount?: number;
  progress?: number;
  totalEntities?: number;
};

export type NiceCxoneFullApiSchemaNAME = {
  name?: string;
};

export type NiceCxoneFullApiSchemaDESCRIPTION = {
  description?: string;
};

export type NiceCxoneFullApiSchemaCONTACTS = {
  contacts?: ReadonlyArray<string>;
};

export type NiceCxoneFullApiSchemaTYPE = {
  type?: "confidential" | "public" | "backend";
};

export type NiceCxoneFullApiSchemaTENANCY = {
  tenancy?: "single" | "all";
};

export type NiceCxoneFullApiSchemaREDIRECTS = {
  redirects?: ReadonlyArray<string>;
};

export type NiceCxoneFullApiSchemaORIGINS = {
  origins?: ReadonlyArray<string>;
};

export type NiceCxoneFullApiSchemaLOGOUTS = {
  logouts?: ReadonlyArray<string>;
};

export type NiceCxoneFullApiSchemaAUTHMETHOD = {
  authMethod?: "client_secret_post" | "client_secret_basic";
};

export type NiceCxoneFullApiSchemaJWKSENDPOINT = {
  jwksEndpoint?: string;
};

export type NiceCxoneFullApiSchemaSCOPE = {
  scope?: string;
};

export type NiceCxoneFullApiSchemaID = {
  id?: string;
};

export type NiceCxoneFullApiSchemaISENABLED = {
  isEnabled?: boolean;
};

export type NiceCxoneFullApiSchemaCREATEDBY = {
  createdBy?: string;
};

export type NiceCxoneFullApiSchemaCREATEDTIME = {
  createdTime?: string;
};

export type NiceCxoneFullApiSchemaLASTMODIFIEDBY = {
  lastModifiedBy?: string;
};

export type NiceCxoneFullApiSchemaLASTMODIFIEDTIME = {
  lastModifiedTime?: string;
};

export type NiceCxoneFullApiSchemaLASTUSEDTIME = {
  lastModifiedTime?: string;
};

export type NiceCxoneFullApiSchemaSCHEDULEDDELETIONTIME = {
  scheduledDeletionTime?: string | null;
};

export type NiceCxoneFullApiSchemaPermission = {
  permission?: string;
};

export type NiceCxoneFullApiSchemaApplication = {
  applicationId?: string;
  privileges?: ReadonlyArray<NiceCxoneFullApiSchemaPrivilege>;
  features?: ReadonlyArray<NiceCxoneFullApiSchemaFeature>;
};

export type NiceCxoneFullApiSchemaScimTeam = {
  display?: string;
  value?: string;
};

export type NiceCxoneFullApiSchemaScimLoginAuthenticator = {
  display?: string;
  value?: string;
};

export type NiceCxoneFullApiSchemaAttribute = {
  name?: string;
  type?: string;
  multiValued?: boolean;
  description?: string;
  required?: boolean;
  caseExact?: boolean;
  mutability?: string;
  returned?: string;
  uniqueness?: string;
};

export type NiceCxoneFullApiSchemaAttributeValue = {
  value?: string;
  resolvedValue?: {};
};

export type NiceCxoneFullApiSchemaTeamCustomAttribute = {
  id?: string;
  values?: ReadonlyArray<NiceCxoneFullApiSchemaAttributeValue>;
};

export type NiceCxoneFullApiSchemaAcdUserMapping = {
  loginId?: string;
};

export type NiceCxoneFullApiSchemaCustomAttributeV2 = {
  id?: string;
  values?: ReadonlyArray<NiceCxoneFullApiSchemaAttributeValueV2>;
};

export type NiceCxoneFullApiSchemaAcdUserMappingV2 = {
  loginId?: string;
};

export type NiceCxoneFullApiSchemaAcdInfoV2 = {
  loginId?: string;
};

export type NiceCxoneFullApiSchemaJobResult = {
  url?: string;
  errorMessage?: string;
};

export type NiceCxoneFullApiSchemaCustomerMessageStatistics2 = {
  inbound?: number;
  outbound?: number;
};

export type NiceCxoneFullApiSchemaCustomerSentimentStatistics2 = {
  positive?: number;
  neutral?: number;
  negative?: number;
};

export type NiceCxoneFullApiSchemaTextPayload = {
  text?: string;
};

export type NiceCxoneFullApiSchemaElementsPayload = {
  postback?: string;
  elements?: ReadonlyArray<NiceCxoneFullApiSchemaMessageContentElement>;
};

export type NiceCxoneFullApiSchemaQuickRepliesPayload = {
  text: NiceCxoneFullApiSchemaPayloadTextField;
  actions: ReadonlyArray<NiceCxoneFullApiSchemaActionButton>;
};

export type NiceCxoneFullApiSchemaListPickerPayload = {
  title: NiceCxoneFullApiSchemaPayloadTextField;
  text: NiceCxoneFullApiSchemaPayloadTextField;
  actions: ReadonlyArray<NiceCxoneFullApiSchemaActionButton>;
};

export type NiceCxoneFullApiSchemaRichLinkPayload = {
  media: NiceCxoneFullApiSchemaPayloadMediaField;
  title: NiceCxoneFullApiSchemaPayloadTextField;
  url: string;
};

export type NiceCxoneFullApiSchemaAdaptiveCardPayload = {
  type: string;
  version: string;
};

export type NiceCxoneFullApiSchemaTextPayload2 = {
  text?: string;
};

export type NiceCxoneFullApiSchemaElementsPayload2 = {
  postback?: string;
  elements?: ReadonlyArray<NiceCxoneFullApiSchemaMessageContentElement2>;
};

export type NiceCxoneFullApiSchemaQuickRepliesPayload2 = {
  text: NiceCxoneFullApiSchemaPayloadTextField2;
  actions: ReadonlyArray<NiceCxoneFullApiSchemaActionButton2>;
};

export type NiceCxoneFullApiSchemaListPickerPayload2 = {
  title: NiceCxoneFullApiSchemaPayloadTextField2;
  text: NiceCxoneFullApiSchemaPayloadTextField2;
  actions: ReadonlyArray<NiceCxoneFullApiSchemaActionButton2>;
};

export type NiceCxoneFullApiSchemaRichLinkPayload2 = {
  media: NiceCxoneFullApiSchemaPayloadMediaField2;
  title: NiceCxoneFullApiSchemaPayloadTextField2;
  url: string;
};

export type NiceCxoneFullApiSchemaAdaptiveCardPayload2 = {
  type: string;
  version: string;
};

export type NiceCxoneFullApiSchemaContactInformationBase = {
  customFields?: ReadonlyArray<NiceCxoneFullApiSchemaCustomFieldToCreate>;
  elevation?: NiceCxoneFullApiSchemaElevation;
  status?: string;
  direction?: "inbound" | "outbound";
  statusUpdatedAt?: string;
  skillId?: number;
};

export type NiceCxoneFullApiSchemaCustomerMessageStatistics3 = {
  inbound?: number;
  outbound?: number;
};

export type NiceCxoneFullApiSchemaCustomerSentimentStatistics3 = {
  positive?: number;
  neutral?: number;
  negative?: number;
};

export type NiceCxoneFullApiSchemaCustomField4 = {
  ident: string;
  value: string;
  updatedAt?: string;
};

export type NiceCxoneFullApiSchemaTextPayload3 = {
  text?: string;
};

export type NiceCxoneFullApiSchemaElementsPayload3 = {
  postback?: string;
  elements?: ReadonlyArray<NiceCxoneFullApiSchemaMessageContentElement3>;
};

export type NiceCxoneFullApiSchemaQuickRepliesPayload3 = {
  text: NiceCxoneFullApiSchemaPayloadTextField3;
  actions: ReadonlyArray<NiceCxoneFullApiSchemaActionButton3>;
};

export type NiceCxoneFullApiSchemaListPickerPayload3 = {
  title: NiceCxoneFullApiSchemaPayloadTextField3;
  text: NiceCxoneFullApiSchemaPayloadTextField3;
  actions: ReadonlyArray<NiceCxoneFullApiSchemaActionButton3>;
};

export type NiceCxoneFullApiSchemaRichLinkPayload3 = {
  media: NiceCxoneFullApiSchemaPayloadMediaField3;
  title: NiceCxoneFullApiSchemaPayloadTextField3;
  url: string;
};

export type NiceCxoneFullApiSchemaAdaptiveCardPayload3 = {
  type: string;
  version: string;
};

export type NiceCxoneFullApiSchemaContentRemovedReason3 = "GDPR" | "TTL" | "other";

export type NiceCxoneFullApiSchemaChannel2 = {
  name?: string;
  sentiment?: NiceCxoneFullApiSchemaSentiment5;
  beginSentiment?: NiceCxoneFullApiSchemaSentiment5;
  endSentiment?: NiceCxoneFullApiSchemaSentiment5;
  frustration?: NiceCxoneFullApiSchemaFrustration;
};

export type NiceCxoneFullApiSchemaCategory = {
  channelName?: string;
  fullPaths?: ReadonlyArray<string>;
};

export type NiceCxoneFullApiSchemaEntity = {
  channelName?: string;
  displayText?: string;
  type?: string;
  sentimentValue?: string;
  custom?: boolean;
};

export type NiceCxoneFullApiSchemaVoiceMetadata = {
  startTime?: number;
  endTime?: number;
  confidence?: number;
};

export type NiceCxoneFullApiSchemaChatMetadata = {
  timestamp?: number;
};

export type NiceCxoneFullApiSchemaEmailMetadata = {
  sentDate?: number;
  subject?: string;
  from?: string;
  to?: string;
};

export type NiceCxoneFullApiSchemaAction = {
  text?: string;
  score?: number;
  snippet?: NiceCxoneFullApiSchemaSnippet;
};

export type NiceCxoneFullApiSchemaIntent = {
  category?: string;
  score?: number;
  topic?: string;
  name?: string;
  snippet?: NiceCxoneFullApiSchemaSnippet;
};

export type NiceCxoneFullApiSchemaOutcome = {
  name?: string;
  score?: number;
  snippet?: NiceCxoneFullApiSchemaSnippet;
};

export type NiceCxoneFullApiSchemaWaveformData = {
  channel?: number;
  normalizedPcmData?: ReadonlyArray<number>;
};

export type NiceCxoneFullApiSchemaVoiceAndScreenParticipant = {
  participantType?: "AGENT" | "CUSTOMER";
  agentName?: string;
  participantId?: string;
  segmentId?: string;
  userId?: string;
  voiceStages?: ReadonlyArray<NiceCxoneFullApiSchemaVoiceStage>;
  screenStages?: ReadonlyArray<NiceCxoneFullApiSchemaScreenStage>;
  channel?: number;
};

export type NiceCxoneFullApiSchemaSegmentsData = {
  startTime?: string;
  endTime?: string;
  acwEndTime?: string;
  openReasonType?: "SEGMENT" | "TRANSFER" | "CONFERENCE" | "CONTACT" | "IVR" | "ELEVATED" | "TRANSFERRED_TO_EXTERNAL_NUMBER" | "EXTERNAL_TRANSFER";
  closeReasonType?: "SEGMENT" | "TRANSFER" | "CONFERENCE" | "CONTACT" | "IVR" | "ELEVATED" | "TRANSFERRED_TO_EXTERNAL_NUMBER" | "EXTERNAL_TRANSFER";
  directionType?: "INBOUND" | "OUTBOUND" | "INTERNAL" | "UNKNOWN";
  source?: string | null;
  firstSegment?: boolean;
  originalSourceFromSdr?: string;
  segmentId?: string;
  channelType?: "PHONE_CALL" | "EMAIL" | "CHAT" | "PHONE_CALL_IVR" | "SMS" | "TW_PRIVATE" | "FB_PRIVATE" | "WHATSAPP_PRIVATE" | "TELEGRAM_PRIVATE" | "APPLE_BUSINESS_CHAT_PRIVATE" | "LINE_PRIVATE" | "VIBER_PRIVATE" | "WE_CHAT_PRIVATE" | "CUSTOM_PRIVATE" | "WORKITEM" | "GOOGLE_BUSINESS_MESSAGES_PRIVATE" | "SLACK_PRIVATE" | "MICROSOFT_TEAMS_PRIVATE";
  customerRestricted?: boolean;
};

export type NiceCxoneFullApiSchemaCategoryMatches = {
  categoryHierarchy?: ReadonlyArray<string>;
  secondsOffsets?: ReadonlyArray<number>;
  confidence?: number;
};

export type NiceCxoneFullApiSchemaSentiment4 = {
  overallSentiment?: "POSITIVE" | "NEGATIVE" | "MIXED" | "NEUTRAL";
  segmentStartTime?: string;
  channel?: number;
};

export type NiceCxoneFullApiSchemaDfoStage = {
  stageType?: "ACTIVE" | "HOLD" | "MASK" | "SOD_ROD" | "ROD" | "SOD" | "WRAP_UP" | "ThreadFocused";
  startTime?: string;
  endTime?: string;
  recordingID?: string;
  displays?: ReadonlyArray<NiceCxoneFullApiSchemaDisplayProperties> | null;
};

export type NiceCxoneFullApiSchemaChatParticipant = {
  participantType?: "AGENT" | "CUSTOMER";
  participantName?: string;
  screenStages?: ReadonlyArray<NiceCxoneFullApiSchemaScreenStage>;
};

export type NiceCxoneFullApiSchemaChatMessages = {
  participantType?: "AGENT" | "CUSTOMER";
  participantName?: string;
  text?: string;
  timeStamp?: string;
};

export type NiceCxoneFullApiSchemaEmailParticipant = {
  participantType?: "AGENT" | "CUSTOMER";
  participantName?: string;
  actions?: ReadonlyArray<NiceCxoneFullApiSchemaEmailActions>;
  screenStages?: ReadonlyArray<NiceCxoneFullApiSchemaScreenStage>;
};

export type NiceCxoneFullApiSchemaEmailContent = {
  sentTime?: string;
  from?: string;
  to?: ReadonlyArray<string>;
  cc?: ReadonlyArray<string>;
  bcc?: ReadonlyArray<string>;
  subject?: string;
  body?: string;
};

export type NiceCxoneFullApiSchemaSegmentData = {
  startTime?: string;
  endTime?: string;
  acwEndTime?: string;
  openReasonType?: "SEGMENT" | "TRANSFER" | "CONFERENCE";
  closeReasonType?: "SEGMENT" | "TRANSFER" | "CONFERENCE";
  directionType?: "INBOUND" | "OUTBOUND" | "INTERNAL";
  source?: string | null;
  firstSegment?: boolean;
  originalSourceFromSdr?: string;
  segmentId?: string;
  isCustomerRestricted?: boolean;
  channelType?: "PHONE_CALL" | "EMAIL" | "CHAT" | "PHONE_CALL_IVR" | "SMS" | "TW_PRIVATE" | "FB_PRIVATE" | "WHATSAPP_PRIVATE" | "TELEGRAM_PRIVATE" | "LINE_PRIVATE" | "VIBER_PRIVATE" | "WE_CHAT_PRIVATE" | "CUSTOM_PRIVATE" | "WORKITEM" | "GOOGLE_BUSINESS_MESSAGES_PRIVATE" | "SLACK_PRIVATE" | "MICROSOFT_TEAMS_PRIVATE";
  customerRestricted?: boolean;
};

export type NiceCxoneFullApiSchemaRange = {
  from?: string;
  to?: string;
};

export type NiceCxoneFullApiSchemaPrivilege = {
  privilegeId?: string;
  actions?: ReadonlyArray<string>;
};

export type NiceCxoneFullApiSchemaFeature = {
  featureId?: string;
  privileges?: ReadonlyArray<NiceCxoneFullApiSchemaPrivilege>;
};

export type NiceCxoneFullApiSchemaAttributeValueV2 = {
  value?: string;
  resolvedValue?: {};
};

export type NiceCxoneFullApiSchemaMessageContentElement = {
  id?: string;
  text?: string;
  type?: "TEXT" | "BUTTON" | "MENU" | "TITLE";
  elements?: ReadonlyArray<NiceCxoneFullApiSchemaMessageContentElement>;
};

export type NiceCxoneFullApiSchemaPayloadTextField = {
  content: string;
};

export type NiceCxoneFullApiSchemaActionButton = {
  text: string;
  type: "REPLY_BUTTON";
  postback?: string;
  icon?: NiceCxoneFullApiSchemaPayloadMediaField;
  description?: string;
};

export type NiceCxoneFullApiSchemaPayloadMediaField = {
  fileName: string;
  mimeType: string;
  url: string;
};

export type NiceCxoneFullApiSchemaMessageContentElement2 = {
  id?: string;
  text?: string;
  type?: "TEXT" | "BUTTON" | "MENU" | "TITLE";
  elements?: ReadonlyArray<NiceCxoneFullApiSchemaMessageContentElement2>;
};

export type NiceCxoneFullApiSchemaPayloadTextField2 = {
  content: string;
};

export type NiceCxoneFullApiSchemaActionButton2 = {
  text: string;
  type: "REPLY_BUTTON";
  postback?: string;
  icon?: NiceCxoneFullApiSchemaPayloadMediaField2;
  description?: string;
};

export type NiceCxoneFullApiSchemaPayloadMediaField2 = {
  fileName: string;
  mimeType: string;
  url: string;
};

export type NiceCxoneFullApiSchemaElevation = {
  contact?: {
  contactId: string;
  contactNumber?: NiceCxoneFullApiSchemaContactNumber;
};
  agentContact?: {
  id: string;
};
  interaction: {
  id: string;
};
  fromProvider?: "acd" | "dfo" | "em";
};

export type NiceCxoneFullApiSchemaMessageContentElement3 = {
  id?: string;
  text?: string;
  type?: "TEXT" | "BUTTON" | "MENU" | "TITLE";
  elements?: ReadonlyArray<NiceCxoneFullApiSchemaMessageContentElement3>;
};

export type NiceCxoneFullApiSchemaPayloadTextField3 = {
  content: string;
};

export type NiceCxoneFullApiSchemaActionButton3 = {
  text: string;
  type: "REPLY_BUTTON";
  postback?: string;
  icon?: NiceCxoneFullApiSchemaPayloadMediaField3;
  description?: string;
};

export type NiceCxoneFullApiSchemaPayloadMediaField3 = {
  fileName: string;
  mimeType: string;
  url: string;
};

export type NiceCxoneFullApiSchemaSentiment5 = {
  value?: string;
};

export type NiceCxoneFullApiSchemaFrustration = {
  type?: string;
};

export type NiceCxoneFullApiSchemaSnippet = {
  snippet?: string;
  text?: string;
  startOffset?: number;
  endOffset?: number;
};

export type NiceCxoneFullApiSchemaVoiceStage = {
  stageType?: "ACTIVE" | "HOLD" | "MASK" | "SOD_ROD" | "ROD" | "SOD" | "WRAP_UP" | "ThreadFocused";
  startTime?: string;
  endTime?: string;
  recordingID?: string;
  displays?: ReadonlyArray<NiceCxoneFullApiSchemaDisplayProperties> | null;
};

export type NiceCxoneFullApiSchemaScreenStage = {
  stageType?: "ACTIVE" | "HOLD" | "MASK" | "SOD_ROD" | "ROD" | "SOD" | "WRAP_UP" | "ThreadFocused";
  startTime?: string;
  endTime?: string;
  recordingID?: string;
  displays?: ReadonlyArray<NiceCxoneFullApiSchemaDisplayProperties>;
};

export type NiceCxoneFullApiSchemaDisplayProperties = {
  width?: number;
  height?: number;
  topLeftX?: number;
  topLeftY?: number;
};

export type NiceCxoneFullApiSchemaEmailActions = {
  timeStamp?: string;
  action?: "Send" | "EndEmail" | "Accept" | "Transfer" | "Forward" | "Park" | "UnPark" | "Reply" | "NewOutbound";
};

export type NiceCxoneFullApiSchemaContactNumber = string;

export interface NiceCxoneFullApiOperationQueryMap {
  "admin-addressbook-api-docs:getAddressBooks:GET:/address-books": {};
  "admin-addressbook-api-docs:CreateAddressBookv4:POST:/address-books": {
  addressBookName: string;
  addressBookType: "Standard" | "Dynamic";
};
  "admin-addressbook-api-docs:DeleteAddressbook:DELETE:/address-books/{addressBookId}": {};
  "admin-addressbook-api-docs:get-address-books-id-agents-assigned:GET:/address-books/{addressBookId}/agents/assigned": {
  searchString?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-addressbook-api-docs:get-address-books-id-agents-unassigned:GET:/address-books/{addressBookId}/agents/unassigned": {
  searchString?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-addressbook-api-docs:AddressBookAssignmentV4:POST:/address-books/{addressBookId}/assignment": {
  entityType: "Agent" | "Skill" | "Team" | "Campaign" | "Everyone";
};
  "admin-addressbook-api-docs:get-address-books-id-dynamic-entries:GET:/address-books/{addressBookId}/dynamic-entries": {
  fullLoad: true | false;
  top?: number;
  skip?: number;
  orderBy?: string;
  updatedSince?: string;
  searchString?: string;
  fields?: string;
};
  "admin-addressbook-api-docs:CreateOrUpdateDynamicAddressbook:PUT:/address-books/{addressBookId}/dynamic-entries": {
  fullLoad: boolean;
};
  "admin-addressbook-api-docs:DeleteDynamicAddressBookEntry:DELETE:/address-books/{addressBookId}/dynamic-entries/{externalId}": {};
  "admin-addressbook-api-docs:get-address-books-id-entries:GET:/address-books/{addressBookId}/entries": {
  searchString?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
  updatedSince?: string;
};
  "admin-addressbook-api-docs:CreateAddressBookEntries:POST:/address-books/{addressBookId}/entries": {};
  "admin-addressbook-api-docs:UpdateAddressBookEntries:PUT:/address-books/{addressBookId}/entries": {};
  "admin-addressbook-api-docs:DeleteAddressBookEntry:DELETE:/address-books/{addressBookId}/entries/{addressBookEntryId}": {};
  "admin-addressbook-api-docs:AddressBookListForAnAgent:GET:/agents/{agentId}/address-books": {
  includeEntries: boolean;
  addressBookType: number;
  updatedSince?: string;
  searchString?: string;
};
  "admin-addressbook-api-docs:AddressBookForCampaign:GET:/campaigns/{campaignId}/address-books": {
  includeEntries: boolean;
  updatedSince?: string;
};
  "admin-addressbook-api-docs:AddressBookForSkill:GET:/skills/{skillId}/address-books": {
  includeEntries?: true | false;
  updatedSince?: string;
  skip?: number;
  top?: number;
};
  "admin-addressbook-api-docs:AddressBooksTeam:GET:/teams/{teamId}/address-books": {
  includeEntries?: true | false;
  updatedSince?: string;
};
  "admin-agentmessage-api-docs:get-agent-messages:GET:/communications/agent-messages": {
  searchString?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-agentmessage-api-docs:post-agent-messages:POST:/communications/agent-messages": {};
  "admin-agentmessage-api-docs:delete-communications-agent-messages:DELETE:/communications/agent-messages": {};
  "admin-agentmessage-api-docs:get-agent-messages-id:GET:/communications/agent-messages/{messageGroupId}": {
  authContext?: string;
  searchString?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-agentmessage-api-docs:delete-agent-messages-id:DELETE:/communications/agent-messages/{messageGroupId}": {};
  "admin-agents-api-docs:get-agents:GET:/agents": {
  updateSince?: string;
  isActive?: boolean;
  isLocked?: boolean;
  searchString?: string;
  fields?: string;
  skip?: string;
  top?: string;
  orderBy?: string;
};
  "admin-agents-api-docs:operations-Agents-post-agents:POST:/agents": {};
  "admin-agents-api-docs:operations-Agents-put-agents:PUT:/agents": {};
  "admin-agents-api-docs:operations-Agents-get-agents-id:GET:/agents/{agentId|userId}": {
  fields?: string;
};
  "admin-agents-api-docs:operations-Agents-put-agents-id:PUT:/agents/{agentId|userId}": {};
  "admin-agents-api-docs:SetAgentState:POST:/agents/{agentId}/state": {
  state: "Available" | "Unavailable";
  outStateId?: number;
};
  "admin-agents-api-docs:get-agents-skills:GET:/agents/skills": {
  UpdatedSince?: string;
  fields?: string;
  searchString?: string;
  mediaTypeId?: number;
  outboundStrategy?: string;
  isSkillActive?: boolean;
  isAgentActive: boolean;
  isActive: boolean;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-agents-api-docs:post-agents-skills:POST:/agents/skills": {};
  "admin-agents-api-docs:post-agents-search:POST:/agents/search": {};
  "admin-agents-api-docs:post-skills-agents-search:POST:/skills/agents/search": {};
  "admin-agents-api-docs:get-agent-configuration:GET:/agents/{agentId}/agent-configuration": {
  fields?: string;
};
  "admin-agents-api-docs:getagentbyagentidgroups:GET:/agents/{agentId}/groups": {
  fields?: string;
};
  "admin-agents-api-docs:getSkillsByAgentId:GET:/agents/{agentId|userId}/skills": {
  updatedSince?: string;
  fields?: string;
  mediaTypeId?: number;
  outboundStrategy?: string;
  isSkillActive?: boolean;
  searchString?: string;
  isAssignedSkillActive?: boolean;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-agents-api-docs:AssignsSkillsToAnAgent:POST:/agents/{agentId|userId}/skills": {};
  "admin-agents-api-docs:ModifySkillAssignmentsForAgent:PUT:/agents/{agentId|userId}/skills": {};
  "admin-agents-api-docs:RemoveSkillAssignmentsForAgent:DELETE:/agents/{agentId|userId}/skills": {};
  "admin-agents-api-docs:GetSkillsNotAssignedToAgent:GET:/agents/{agentId}/skills/unassigned": {
  fields?: string;
  mediaTypeId?: number;
  outboundStrategy?: string;
  isSkillActive?: boolean;
  searchString?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-agents-api-docs:AgentSkillData:GET:/agents/skill-data": {
  startDate: string;
  endDate: string;
};
  "admin-agents-api-docs:AgentSkillDataForSkillid:GET:/agents/{agentId}/skill-data": {
  startDate: string;
  endDate: string;
  mediaTypeId?: number;
  isOutbound?: boolean;
  skip?: number;
  top?: number;
};
  "admin-agents-api-docs:put_/agents/{agentId}/custom-event:PUT:/agents/{agentId}/custom-event": {
  eventName?: string;
  persistInMemory?: true | false;
  data?: string;
};
  "admin-agents-api-docs:QuickReplies:GET:/agents/quick-replies": {
  skip?: number;
  top?: number;
};
  "admin-agents-api-docs:QuickRepliesByAgent:GET:/agents/{agentId}/quick-replies": {
  skillId: string;
  contactId?: string;
  skip?: number;
  top?: number;
};
  "admin-agents-api-docs:CreateMessage:POST:/agents/messages": {};
  "admin-agents-api-docs:deleteMessagebyMessageId:DELETE:/agents/messages/{messageId}": {};
  "admin-agents-api-docs:AgentMessageList:GET:/agents/{agentId}/messages": {};
  "admin-agents-api-docs:AgentIndicatorList:GET:/agents/{agentId}/indicators": {};
  "admin-agents-api-docs:agentLogout:POST:/agents/{agentId}/logout": {};
  "admin-agents-api-docs:GetAgentDialingPatterns:GET:/agent-patterns": {};
  "admin-agents-api-docs:post-agent-patterns-id-transform-phonenumbers:POST:/agent-patterns/{agentpatternId}/transform-phonenumbers": {
  "inputPhoneNum "?: string;
  externalId?: string;
};
  "admin-agents-api-docs:getAgentStates:GET:/agents-states": {
  reqBUIds?: string;
};
  "admin-agents-api-docs:get-agents-extended:GET:/agents/extended": {
  activeUsersOnly?: boolean;
};
  "admin-agents-api-docs:get-agents-issues:GET:/agents/issues": {
  isClosed: boolean;
  agentName?: string;
  issueType?: string;
  teamName?: string;
};
  "admin-agents-api-docs:get-agent-messages-id:GET:/agent-messages/{messageGroupId}": {};
  "admin-agents-api-docs:get-gents-skills-download:GET:/agents/skills-download": {
  skillRecordTypeID?: string;
  fields?: string;
  skip?: number;
  top?: number;
};
  "admin-agents-api-docs:get_/teams:GET:/teams": {
  fields?: string;
  updateSince?: string;
  isActive?: boolean;
  searchString?: string;
  skip?: string;
  top?: string;
  orderBy?: string;
};
  "admin-agents-api-docs:post-teams:POST:/teams": {};
  "admin-agents-api-docs:get-teams-id:GET:/teams/{teamId}": {
  fields?: string;
};
  "admin-agents-api-docs:put-teams-id:PUT:/teams/{teamId}": {};
  "admin-agents-api-docs:TeamsAgents:GET:/teams/agents": {
  fields?: string;
  updateSince?: string;
};
  "admin-agents-api-docs:get-teams-id-agents:GET:/teams/{teamId}/agents": {
  searchString?: string;
  fields?: string;
  skip?: string;
  top?: string;
  orderBy?: string;
  updateSince?: string;
  isActive?: boolean;
};
  "admin-agents-api-docs:AssignAgentsToTeam:POST:/teams/{teamId}/agents": {};
  "admin-agents-api-docs:RemoveAgentsFromTeam:DELETE:/teams/{teamId}/agents": {
  transferTeamId: string;
};
  "admin-agents-api-docs:get-teams-id-unavailable-codes:GET:/teams/{teamId}/unavailable-codes": {
  activeOnly?: string;
};
  "admin-agents-api-docs:AssignUnavailableCode:POST:/teams/{teamId}/unavailable-codes": {};
  "admin-agents-api-docs:put-teams-id-unavailable-codes:PUT:/teams/{teamId}/unavailable-codes": {
  securityUser?: string;
};
  "admin-agents-api-docs:RemoveUnavailableCodeTeam:DELETE:/teams/{teamId}/unavailable-codes": {};
  "admin-agents-api-docs:get-access-keys:GET:/access-keys": {
  agentId: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-agents-api-docs:post-access-keys:POST:/access-keys": {
  agentId?: number;
};
  "admin-agents-api-docs:get-access-keys-id:GET:/access-keys/{accessKeyId}": {};
  "admin-agents-api-docs:delete-access-keys-id:DELETE:/access-keys/{accessKeyId}": {};
  "admin-agents-api-docs:patch-access-keys-id:PATCH:/access-keys/{accessKeyId}": {
  isActive?: boolean;
};
  "admin-agents-api-docs:get-activesupervisors:GET:/activesupervisors": {
  teamIds?: string;
  skip?: number;
  top?: number;
};
  "admin-agents-api-docs:enhancedCustomerCard:POST:/enhancedcustomercard": {};
  "admin-commitments-api-docs:AgentScheduledCallbacks:GET:/agents/{agentId}/scheduled-callbacks": {};
  "admin-commitments-api-docs:CreateScheduledCallback:POST:/scheduled-callbacks": {
  phoneNumber?: string;
  scheduleDate?: string;
  firstName?: string;
  lastName?: string;
  targetAgentId?: number;
  notes?: string;
  msCalendarEventId?: string;
};
  "admin-commitments-api-docs:UpdateScheduledCallback:PUT:/scheduled-callbacks/{callbackId}": {
  phoneNumber?: string;
  scheduleDate?: string;
  firstName?: string;
  lastName?: string;
  targetAgentId?: number;
  notes?: string;
  msCalendarEventId?: string;
};
  "admin-commitments-api-docs:DeleteScheduledCallback:DELETE:/scheduled-callbacks/{callbackId}": {};
  "admin-commitments-api-docs:SkillScheduledCallbacks:GET:/skills/{skillId}/scheduled-callbacks": {};
  "admin-contacts-api-docs:ChatTranscript:GET:/contacts/{contactId}/chat-transcript": {};
  "admin-contacts-api-docs:get-contacts-id-disposition:GET:/contacts/{contactId}/disposition": {};
  "admin-contacts-api-docs:getHistoricalChatTranscript:GET:/contacts/{contactId}/historical-chat-transcript": {};
  "admin-contacts-api-docs:EmailTranscript:GET:/contacts/{contactId}/email-transcript": {
  includeAttachments?: boolean;
};
  "admin-contacts-api-docs:ContactFiles:GET:/contacts/{contactId}/files": {
  fields?: string;
};
  "admin-contacts-api-docs:endAContact:POST:/contacts/{contactId}/end": {};
  "admin-contacts-api-docs:monitorAContactCall:POST:/contacts/{contactId}/monitor": {};
  "admin-contacts-api-docs:recordAContact:POST:/contacts/{contactId}/record": {};
  "admin-contacts-api-docs:post-contacts-id-set-disposition:POST:/contacts/{contactId}/set-disposition": {};
  "admin-contacts-api-docs:AssignTagsContact:POST:/contacts/{contactId}/tags": {};
  "admin-contacts-api-docs:getContactStateDescriptions:GET:/contact-state-descriptions": {};
  "admin-contacts-api-docs:getContactStateById:GET:/contact-state-descriptions/{contactStateId}": {};
  "admin-contacts-api-docs:put-persistent-contacts-id:PUT:/persistent-contacts/{contactId}": {};
  "admin-contacts-api-docs:SignalAContact:POST:/interactions/{contactId}/signal": {
  p1?: string;
  p2?: string;
  p3?: string;
  p4?: string;
  p5?: string;
  p6?: string;
  p7?: string;
  p8?: string;
  p9?: string;
};
  "admin-contacts-api-docs:Get-contacts-id-sms-historical-transcript:GET:/contacts/{contactId}/sms-historical-transcript": {
  businessUnitId: number;
};
  "admin-contacts-api-docs:get-contacts-sms-historical-contacts:GET:/contacts/sms-historical-contacts": {
  ani: number;
  skillId: number;
  businessUnitId: number;
};
  "admin-general-api-docs:get-apiversion:GET:/apiversion": {
  searchUriText?: string;
  verb?: string;
};
  "admin-general-api-docs:get-apiversionreleaseinfo:GET:/apiversionreleaseinfo": {
  apiversion?: string;
};
  "admin-general-api-docs:BrandingProfiles:GET:/branding-profiles": {
  businessUnitId: number;
  fields?: string;
};
  "admin-general-api-docs:BusinessUnitInfo:GET:/business-unit": {
  fields?: string;
  includeTrustedBusinessUnits?: boolean;
};
  "admin-general-api-docs:get-business-unit-outbound-routes:GET:/business-unit/outbound-routes": {};
  "admin-general-api-docs:get-agents-id-agent-settings:GET:/agents/{agentId}/agent-settings": {
  fields?: string;
};
  "admin-general-api-docs:GetCountries:GET:/countries": {};
  "admin-general-api-docs:GetsStatesProvinces:GET:/countries/{countryId}/states": {};
  "admin-general-api-docs:DataDefinitions:GET:/data-definitions/data-types": {};
  "admin-general-api-docs:RetrieveAFile:GET:/files": {
  fileName: string;
};
  "admin-general-api-docs:UploadFile:POST:/files": {};
  "admin-general-api-docs:MoveFile:PUT:/files": {
  oldPath: string;
  newPath: string;
  overwrite?: boolean;
};
  "admin-general-api-docs:DeleteFile:DELETE:/files": {};
  "admin-general-api-docs:GetExternalfiles:GET:/files/external": {
  folderPath?: string;
};
  "admin-general-api-docs:postexternalfiles:POST:/files/external": {
  fileName: string;
  file: string;
  overwrite?: boolean;
  needsProcessing?: boolean;
};
  "admin-general-api-docs:putexteranlfiles:PUT:/files/external": {
  fileName: string;
  needsProcessing: boolean;
};
  "admin-general-api-docs:ReturnFolder:GET:/folders": {
  folderName: string;
};
  "admin-general-api-docs:DeleteFolder:DELETE:/folders": {
  folderName: string;
};
  "admin-general-api-docs:CategoriesAndPriorities:GET:/feedback-categories-and-priorities": {};
  "admin-general-api-docs:GetHiringSources:GET:/hiring-sources": {};
  "admin-general-api-docs:CreateHiringScource:POST:/hiring-sources": {
  sourceName: string;
};
  "admin-general-api-docs:get-hours-of-operation:GET:/hours-of-operation": {
  searchString?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
  isDeleted: boolean;
};
  "admin-general-api-docs:post-hours-of-operation:POST:/hours-of-operation": {};
  "admin-general-api-docs:get-hours-of-operation-identities:GET:/hours-of-operation/identities": {
  searchString?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-general-api-docs:get-hours-of-operation-by-id:GET:/hours-of-operation/{hoursOfOperationProfileId}": {};
  "admin-general-api-docs:update-hours-of-operation:PUT:/hours-of-operation/{hoursOfOperationProfileId}": {};
  "admin-general-api-docs:delete-hours-of-operation:DELETE:/hours-of-operation/{hoursOfOperationProfileId}": {};
  "admin-general-api-docs:update-hours-of-operation-skills:PUT:/hours-of-operation/{hoursOfOperationProfileId}/skills": {};
  "admin-general-api-docs:ReturnsLocations:GET:/locations": {
  includeAgents?: boolean;
};
  "admin-general-api-docs:getMediaTypes:GET:/media-types": {};
  "admin-general-api-docs:getMediaTypeById:GET:/media-types/{mediaTypeId}": {};
  "admin-general-api-docs:MessageTemplates:GET:/message-templates": {
  templateTypeId?: 1 | 2;
};
  "admin-general-api-docs:CreatesMessageTemplate:POST:/message-templates": {
  templateName: string;
  templateTypeId: 1 | 2;
  subject: string;
  body: string;
  isHTML?: boolean;
  ccAddress?: string;
  bccAddress?: string;
  replyToAddress?: string;
  fromName?: string;
  fromAddress?: string;
  isRTL?: boolean;
};
  "admin-general-api-docs:MessageTemplate:GET:/message-templates/{templateId}": {};
  "admin-general-api-docs:UpdatesMessageTemplate:PUT:/message-templates/{templateId}": {
  templateName?: string;
  isActive?: boolean;
  subject?: string;
  body?: string;
  isHTML?: boolean;
  ccAddress?: string;
  bccAddress?: string;
  replyToAddress?: string;
  fromName?: string;
  fromAddress?: string;
  isRTL?: boolean;
};
  "admin-general-api-docs:getPermissions:GET:/permissions": {};
  "admin-general-api-docs:AgentPermissionsList:GET:/permissions/{agentId}": {};
  "admin-general-api-docs:PhoneCodes:GET:/phone-codes": {};
  "admin-general-api-docs:getPointsOfContact:GET:/points-of-contact": {
  mediaTypeId?: 1 | 3 | 4 | 5 | 6;
  skip?: number;
  top?: number;
};
  "admin-general-api-docs:post-points-of-contact:POST:/points-of-contact": {};
  "admin-general-api-docs:getPointOfContactById:GET:/points-of-contact/{pointOfContactId}": {};
  "admin-general-api-docs:put-points-of-contact-id:PUT:/points-of-contact/{pointOfContactId}": {};
  "admin-general-api-docs:GetSecurityProfiles:GET:/security-profiles": {
  securityProfileStatusName?: string;
  isSupportProfile?: string;
  isInternal?: string;
  searchString?: string;
  fields?: string;
  skip?: string;
  top?: string;
  orderBy?: string;
};
  "admin-general-api-docs:GetSecurityProfilesID:GET:/security-profiles/{profileId}": {};
  "admin-general-api-docs:get-script:GET:/scripts": {
  scriptPath?: string;
  scriptId?: number;
  libraryId?: string;
};
  "admin-general-api-docs:create-script:POST:/scripts": {};
  "admin-general-api-docs:delete-script:DELETE:/scripts": {
  scriptPath: string;
};
  "admin-general-api-docs:update-script:PUT:/scripts": {
  scriptPath: string;
  lockScript: boolean;
};
  "admin-general-api-docs:get-scripts-id:GET:/scripts/{scriptId}": {};
  "admin-general-api-docs:get-search-script:GET:/scripts/search": {
  mediaType?: number;
  scriptName?: string;
  includeInactive?: boolean;
  includeTrusted?: boolean;
  modStartDate?: string;
  modEndDate?: string;
  toolName?: string;
  caption?: string;
  parameters?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-general-api-docs:get_/scripts/files:GET:/scripts/files": {
  fileFullName: string;
  includeFileContent?: string;
};
  "admin-general-api-docs:post_/scripts/files:POST:/scripts/files": {};
  "admin-general-api-docs:put_/scripts/files:PUT:/scripts/files": {};
  "admin-general-api-docs:delete_/scripts/files:DELETE:/scripts/files": {
  fileFullName: string;
};
  "admin-general-api-docs:get_/scripts/files/search:GET:/scripts/files/search": {
  rootFolder: string;
  filter?: string;
  inclusionFilePurposeTypeList?: string;
};
  "admin-general-api-docs:post-kick-script:POST:/scripts/kick": {
  scriptPath: string;
};
  "admin-general-api-docs:get-script-history:GET:/scripts/historyByName": {
  scriptPath: string;
};
  "admin-general-api-docs:post-start-script:POST:/scripts/start": {
  skillId: number;
  scriptId: string;
  scriptPath: string;
  Parameters?: string;
  startDate?: string;
};
  "admin-general-api-docs:get-scripts-folders:GET:/script-folders": {
  folder?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
  status?: string;
};
  "admin-general-api-docs:getServerTime:GET:/server-time": {};
  "admin-general-api-docs:ReturnsTags:GET:/tags": {
  isActive?: boolean;
  searchString?: string;
};
  "admin-general-api-docs:CreatesTag:POST:/tags": {
  tagName: string;
  notes?: string;
};
  "admin-general-api-docs:GetTagDetailsById:GET:/tags/{tagId}": {};
  "admin-general-api-docs:UpdatesTag:PUT:/tags/{tagId}": {
  tagName?: string;
  notes?: string;
  isActive?: boolean;
};
  "admin-general-api-docs:get-suppressed-contact:GET:/suppressed-contact": {};
  "admin-general-api-docs:post-suppressed-contact:POST:/suppressed-contact": {};
  "admin-general-api-docs:Timezones:GET:/timezones": {};
  "admin-general-api-docs:get-business-unit-time-zones:GET:/business-unit/time-zones": {};
  "admin-general-api-docs:put-business-unit-time-zones:PUT:/business-unit/time-zones": {};
  "admin-general-api-docs:get-unavailable-codes:GET:/unavailable-codes": {
  isActive?: boolean;
  searchString?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-general-api-docs:post-unavailable-codes:POST:/unavailable-codes": {};
  "admin-general-api-docs:get-phone-numbers:GET:/phone-numbers": {
  searchString?: string;
  skip?: number;
  top?: number;
};
  "admin-general-api-docs:get-suppressed-contact-id:GET:/suppressed-contact/{suppressedContactId}": {};
  "admin-general-api-docs:put-suppressed-contact-id:PUT:/suppressed-contact/{suppressedContactId}": {};
  "admin-general-api-docs:delete-suppressed-contact-id:DELETE:/suppressed-contact/{suppressedContactId}": {};
  "admin-groups-api-docs:getgroups:GET:/groups": {
  top?: number;
  skip?: number;
  orderBy?: string;
  searchString?: string;
  isActive?: boolean;
  fields?: string;
};
  "admin-groups-api-docs:postgroups:POST:/groups": {};
  "admin-groups-api-docs:getgroupsbygroupid:GET:/groups/{groupId}": {
  fields?: string;
};
  "admin-groups-api-docs:putgroupsbygroupid:PUT:/groups/{groupId}": {
  groupName: string;
  isActive?: boolean;
  notes?: string;
};
  "admin-groups-api-docs:GetGroupAgent:GET:/groups/{groupId}/agents": {
  assigned?: boolean;
  top?: number;
  skip?: number;
  orderBy?: string;
  fields?: string;
  searchString?: string;
};
  "admin-groups-api-docs:blank:POST:/groups/{groupId}/agents": {};
  "admin-groups-api-docs:deleteGroupAgents:DELETE:/groups/{groupId}/agents": {};
  "admin-lists-api-docs:DncGroupsResultSet:GET:/dnc-groups": {
  fields?: string;
  updatedSince?: string;
};
  "admin-lists-api-docs:post-dnc-groups:POST:/dnc-groups": {};
  "admin-lists-api-docs:GetDNCgroupByID:GET:/dnc-groups/{groupId}": {
  fields?: string;
};
  "admin-lists-api-docs:PutDNCgroupByID:PUT:/dnc-groups/{groupId}": {
  dncGroupName?: string;
  dncGroupDescription?: string;
  isActive?: boolean;
};
  "admin-lists-api-docs:GetDncGroupsContribSkills:GET:/dnc-groups/{groupId}/contributing-skills": {
  skip?: number;
  top?: number;
};
  "admin-lists-api-docs:PostDncGroupsContribSkillsById:POST:/dnc-groups/{groupId}/contributing-skills/{skillId}": {};
  "admin-lists-api-docs:DeleteDncGroupsContribSkillsById:DELETE:/dnc-groups/{groupId}/contributing-skills/{skillId}": {};
  "admin-lists-api-docs:DncGroupsRecords:GET:/dnc-groups/{groupId}/records": {
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-lists-api-docs:CreateDncGroupRecords:POST:/dnc-groups/{groupId}/records": {};
  "admin-lists-api-docs:DeleteDncGroupRecords:DELETE:/dnc-groups/{groupId}/records": {};
  "admin-lists-api-docs:GetDncGroupsScrubbedSkills:GET:/dnc-groups/{groupId}/scrubbed-skills": {
  skip?: number;
  top?: number;
};
  "admin-lists-api-docs:PostDncGroupsScrubbedSkills:POST:/dnc-groups/{groupId}/scrubbed-skills/{skillId}": {};
  "admin-lists-api-docs:DeleteDncGroupsScrubbedSkills:DELETE:/dnc-groups/{groupId}/scrubbed-skills/{skillId}": {};
  "admin-lists-api-docs:ReturnAListOfGroupsByPhonenumber:POST:/dnc-groups/search": {
  phoneNumber: string;
};
  "admin-lists-api-docs:get-dnis:GET:/dnis": {
  isActive?: boolean;
  skip?: number;
  top?: number;
  searchString?: string;
  orderBy?: string;
};
  "admin-lists-api-docs:ReturnCallList:GET:/lists/call-lists": {
  skip?: number;
  top?: number;
};
  "admin-lists-api-docs:post_/lists/call-lists:POST:/lists/call-lists": {
  listName: string;
  externalIdColumn: string;
  listExpirationDate?: string;
  scoreColumn?: string;
  customer1Column?: string;
  customer2Column?: string;
  callerIdColumn?: string;
  priorityColumn?: string;
  complianceReqColumn?: string;
  firstNameColumn?: string;
  lastNameColumn?: string;
  addressColumn?: string;
  cityColumn?: string;
  stateColumn?: string;
  zipColumn?: string;
  timeZoneColumn?: string;
  confirmReqColumn?: string;
  overrideFinalizationColumn?: string;
  agentIdColumn?: string;
  callRequestTimeColumn?: string;
  callRequestStaleColumn?: string;
  notesColumn?: string;
  expirationDateColumn?: string;
};
  "admin-lists-api-docs:DownloadACallList:GET:/lists/call-lists/{listId}": {
  finalized?: boolean;
  includeRecords?: boolean;
  updatedSince?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-lists-api-docs:delete_/lists/call-lists/{listId}:DELETE:/lists/call-lists/{listId}": {
  forceInactive?: boolean;
  forceDelete?: boolean;
};
  "admin-lists-api-docs:DownloadACallListAttempts:GET:/lists/call-lists/{listId}/attempts": {
  finalized?: boolean;
  updatedSince?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-lists-api-docs:UploadingCallingList:POST:/lists/call-lists/{listId}/upload": {};
  "admin-lists-api-docs:delete-lists-call-lists-id-removeProspects:DELETE:/lists/call-lists/{sourceName}/removeProspects": {};
  "admin-lists-api-docs:GetListJob:GET:/lists/call-lists/jobs": {
  fields?: string;
  top?: number;
  skip?: number;
  orderBy?: string;
  startDate: string;
  endDate: string;
};
  "admin-lists-api-docs:GetCallingList:GET:/lists/call-lists/jobs/{jobId}": {
  fields?: string;
};
  "admin-lists-api-docs:CancelList:DELETE:/lists/call-lists/jobs/{jobId}": {};
  "admin-routingattributes-api-docs:getRoutingAttributes:GET:/routing-attributes": {
  status: 0 | 1 | 2;
  maximumRows: number;
  startRowIndex: number;
  orderColumn: string;
  orderAsc: true | false;
  searchText?: string;
};
  "admin-routingattributes-api-docs:getRoutingAttribute:GET:/routing-attributes/{routingAttributeNo}": {};
  "admin-routingattributes-api-docs:addUpdateRoutingAttribute:PUT:/routing-attributes/{routingAttributeNo}": {};
  "admin-routingattributes-api-docs:getRoutingAttributeAgents:GET:/routing-attributes/{routingAttributeNo}/agents": {
  maximumRows: number;
  startRowIndex: number;
  orderColumn?: string;
  orderAsc: true | false;
  searchText: string;
  assigned: true | false;
  status: 0 | 1 | 2;
};
  "admin-routingattributes-api-docs:getAgentRoutingAttributes:GET:/agents/{agentNo}/routing-attributes": {
  status: 0 | 1 | 2;
  maximumRows: number;
  startRowIndex: number;
  orderColumn: string;
  orderAsc: true | false;
  searchText: string;
  assigned: true | false;
};
  "admin-routingattributes-api-docs:updateAgentRoutingAttributes:PUT:/agents/{agentNo}/routing-attributes": {};
  "admin-routingattributes-api-docs:removeAgentRoutingAttribute:DELETE:/agents/routing-attributes/{routingAttributeNo}": {};
  "admin-scriptschedules-api-docs:get-script-schedules:GET:/script-schedules": {
  isActive?: boolean;
  searchString: string;
  fields?: string;
  top?: number;
  skip?: number;
  orderBy?: string;
};
  "admin-scriptschedules-api-docs:get-script-schedules-id:GET:/script-schedules/{scriptScheduleId}": {};
  "admin-scriptschedules-api-docs:get-script-schedules-id-audit-history:GET:/script-schedules/{scriptScheduleId}/audit-history": {
  searchString: string;
  fields?: string;
  top?: number;
  skip?: number;
  orderBy?: string;
  startDate?: string;
  endDate?: string;
};
  "admin-scriptschedules-api-docs:get-script-schedules-scripts:GET:/script-schedules/scripts": {
  searchString: string;
  fields?: string;
  top?: number;
  skip?: number;
  orderBy?: string;
};
  "admin-scriptschedules-api-docs:get-script-schedules-skills:GET:/script-schedules/skills": {
  searchString: string;
  fields?: string;
  top?: number;
  skip?: number;
  orderBy?: string;
};
  "admin-skills-api-docs:get-campaigns:GET:/campaigns": {
  isActive?: boolean;
  searchString?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
  isSkillFiltered?: boolean;
};
  "admin-skills-api-docs:post-campaigns:POST:/campaigns": {};
  "admin-skills-api-docs:get-campaigns-id:GET:/campaigns/{campaignId}": {};
  "admin-skills-api-docs:put-campaigns-id:PUT:/campaigns/{campaignId}": {};
  "admin-skills-api-docs:get-campaigns-id-skills-unassigned:GET:/campaigns/{campaignId}/skills/unassigned": {
  searchString?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-skills-api-docs:patch-campaigns-id-status:PATCH:/campaigns/{campaignId}/status": {
  isActive?: boolean;
};
  "admin-skills-api-docs:get-campaigns-id-audit-history:GET:/campaigns/{campaignId}/audit-history": {
  searchString?: string;
  fields?: string;
  top?: number;
  skip?: number;
  orderBy?: string;
  startDate?: string;
  endDate?: string;
};
  "admin-skills-api-docs:get-dispositions-skills:GET:/dispositions/skills": {
  updatedSince?: string;
  isActive?: boolean;
  searchString?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-skills-api-docs:get-dispositions-id:GET:/dispositions/{dispositionId}": {
  fields?: string;
};
  "admin-skills-api-docs:put-dispositions-id:PUT:/dispositions/{dispositionId}": {};
  "admin-skills-api-docs:get-dispositions-id-skills:GET:/dispositions/{dispositionId}/skills": {
  fields?: string;
  searchString?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-skills-api-docs:DispostionClassifications:GET:/dispositions/classifications": {
  fields?: string;
  classificationType?: number;
  direction?: number;
  isPreviewDisposition?: boolean;
  searchString?: string;
  top?: number;
  skip?: number;
  orderBy?: string;
};
  "admin-skills-api-docs:patch-status-by-dispositions-id:PATCH:/dispositions/{dispositionId}/status": {
  isActive?: boolean;
};
  "admin-skills-api-docs:get-dispositions-id-audit-history:GET:/dispositions/{dispositionId}/audit-history": {
  searchString?: string;
  fields?: string;
  top?: number;
  skip?: number;
  orderBy?: string;
  startDate?: string;
  endDate?: string;
};
  "admin-skills-api-docs:get-skills:GET:/skills": {
  updatedSince?: string;
  mediaTypeId?: number;
  outboundStrategy?: string;
  isActive?: boolean;
  searchString?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-skills-api-docs:post-skills:POST:/skills": {};
  "admin-skills-api-docs:get-skills-parameters:GET:/skills/parameters": {
  fields?: string;
};
  "admin-skills-api-docs:get-skills-id:GET:/skills/{skillId}": {
  fields?: string;
};
  "admin-skills-api-docs:put-skills-id:PUT:/skills/{skillId}": {};
  "admin-skills-api-docs:get-skills-id-parameters:GET:/skills/{skillId}/parameters": {
  fields?: string;
};
  "admin-skills-api-docs:get-skills-id-thank-you-page:GET:/skills/{skillId}/thank-you-page": {};
  "admin-skills-api-docs:post_/skills/{skillId}/start:POST:/skills/{skillId}/start": {};
  "admin-skills-api-docs:post_/skills/{skillId}/stop:POST:/skills/{skillId}/stop": {
  force?: true | false;
};
  "admin-skills-api-docs:getAgentsAllSkills:GET:/skills/agents": {
  fields?: string;
  updatedSince?: string;
  skills: string;
};
  "admin-skills-api-docs:getAgentsBySkillId:GET:/skills/{skillId}/agents": {
  updatedSince?: string;
  fields?: string;
  searchString?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-skills-api-docs:AgentAssignmentsSkill:POST:/skills/{skillId}/agents": {};
  "admin-skills-api-docs:ModifyAssignmentsSkill:PUT:/skills/{skillId}/agents": {};
  "admin-skills-api-docs:RemoveAgentAssignmentsSkill:DELETE:/skills/{skillId}/agents": {};
  "admin-skills-api-docs:delete-skills-id-agents-id:DELETE:/skills/{skillId}/agents/{agentId}": {};
  "admin-skills-api-docs:GetAgentsThatAreNotAssignedToSkill:GET:/skills/{skillId}/agents/unassigned": {
  searchString?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-skills-api-docs:SKILLCALLDATA:GET:/skills/call-data": {
  startDate?: string;
  endDate?: string;
};
  "admin-skills-api-docs:SkillCallData:GET:/skills/{skillId}/call-data": {
  startDate?: string;
  endDate?: string;
};
  "admin-skills-api-docs:DispositionList:GET:/skills/{skillId}/dispositions": {
  skip?: number;
  top?: number;
};
  "admin-skills-api-docs:DispositionsNotAssignedSkill:GET:/skills/{skillId}/dispositions/unassigned": {
  searchString?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-skills-api-docs:GetTagsSkill:GET:/skills/{skillId}/tags": {
  skip?: number;
  top?: number;
};
  "admin-skills-api-docs:AssignTagSkill:POST:/skills/{skillId}/tags": {};
  "admin-skills-api-docs:RemoveTagsSkill:DELETE:/skills/{skillId}/tags": {};
  "admin-skills-api-docs:get-skills-id-parameters-general-settings:GET:/skills/{skillId}/parameters/general-settings": {
  fields?: string;
};
  "admin-skills-api-docs:put-skills-id-parameters-general-settings:PUT:/skills/{skillId}/parameters/general-settings": {};
  "admin-skills-api-docs:get-skills-id-parameters-cpa-management:GET:/skills/{skillId}/parameters/cpa-management": {
  fields?: string;
};
  "admin-skills-api-docs:put-skills-id-parameters-cpa-management:PUT:/skills/{skillId}/parameters/cpa-management": {};
  "admin-skills-api-docs:get-skills-id-parameters-xs-settings:GET:/skills/{skillId}/parameters/xs-settings": {
  fields?: string;
};
  "admin-skills-api-docs:put-skills-id-parameters-xs-settings:PUT:/skills/{skillId}/parameters/xs-settings": {};
  "admin-skills-api-docs:get-skills-id-parameters-delivery-preferences:GET:/skills/{skillId}/parameters/delivery-preferences": {
  fields?: string;
};
  "admin-skills-api-docs:put-skills-id-parameters-delivery-preferences:PUT:/skills/{skillId}/parameters/delivery-preferences": {};
  "admin-skills-api-docs:get-skills-id-parameters-retry-settings:GET:/skills/{skillId}/parameters/retry-settings": {
  fields?: string;
};
  "admin-skills-api-docs:put-skills-id-parameters-retry-settings:PUT:/skills/{skillId}/parameters/retry-settings": {};
  "admin-skills-api-docs:get-skills-id-parameters-schedule-settings:GET:/skills/{skillId}/parameters/schedule-settings": {};
  "admin-skills-api-docs:put-skills-id-parameters-schedule-settings:PUT:/skills/{skillId}/parameters/schedule-settings": {};
  "admin-skills-api-docs:put-skills-id-parameters-cadence-settings:PUT:/skills/{skillId}/parameters/cadence-settings": {};
  "admin-skills-api-docs:get-skills-id-parameters-time-zones:GET:/skills/{skillId}/parameters/time-zones": {};
  "admin-skills-api-docs:put-skills-id-parameters-time-zones:PUT:/skills/{skillId}/parameters/time-zones": {};
  "admin-skills-api-docs:put-skills-id-parameters-list-management:PUT:/skills/{skillId}/parameters/list-management": {};
  "admin-skills-api-docs:get-campaigns-id-skills:GET:/campaigns/{campaignId}/skills": {
  searchString?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-skills-api-docs:post-campaigns-id-skills:POST:/campaigns/{campaignId}/skills": {};
  "admin-skills-api-docs:delete-campaigns-id-skills:DELETE:/campaigns/{campaignId}/skills": {};
  "admin-skills-api-docs:get-dispositions:GET:/dispositions": {
  skip?: number;
  top?: number;
  searchString?: string;
  fields?: string;
  orderBy?: string;
  isActive?: boolean;
  isPreviewDispositions?: boolean;
  updatedSince?: string;
};
  "admin-skills-api-docs:post-dispositions:POST:/dispositions": {};
  "admin-stationprofiles-api-docs:get-station-profiles:GET:/station-profiles": {
  searchString?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-stationprofiles-api-docs:post-station-profiles:POST:/station-profiles": {};
  "admin-stationprofiles-api-docs:get-station-profiles-id:GET:/station-profiles/{stationProfileId}": {};
  "admin-stationprofiles-api-docs:put-station-profiles-id:PUT:/station-profiles/{stationProfileId}": {};
  "admin-stationprofiles-api-docs:delete-station-profiles-id:DELETE:/station-profiles/{stationProfileId}": {};
  "admin-stationprofiles-api-docs:get-station-profiles-id-audit-history:GET:/station-profiles/{stationProfileId}/audit-history": {
  searchString: string;
  fields?: string;
  top?: number;
  skip?: number;
  orderBy?: string;
  startDate?: string;
  endDate?: string;
};
  "admin-stations-api-docs:get-stations:GET:/stations": {
  searchString?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
  isActive?: boolean;
};
  "admin-stations-api-docs:create-station:POST:/stations": {};
  "admin-stations-api-docs:get-station-by-id:GET:/stations/{stationId}": {};
  "admin-stations-api-docs:update-station:PUT:/stations/{stationId}": {};
  "admin-stations-api-docs:get-stations-audit-history:GET:/stations/{stationId}/audit-history": {
  searchString?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
  startDate?: string;
  endDate?: string;
};
  "admin-stations-api-docs:get-stations-login-history:GET:/stations/{stationId}/login-history": {
  searchString?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-stations-api-docs:update-station-status:PATCH:/stations/{stationId}/status": {};
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-audit-history:GET:/unavailable-codes/{unavailableCodeId}/audit-history": {
  searchString: string;
  fields?: string;
  top?: number;
  skip?: number;
  orderBy?: string;
  startDate?: string;
  endDate?: string;
};
  "admin-unavailablecodes-api-docs:patch-status-by-unavailable-codes-id:PATCH:/unavailable-codes/{unavailableCodeId}/status": {
  isActive: boolean;
};
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams:GET:/unavailable-codes/{unavailableCodeId}/teams": {
  searchString?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-unavailablecodes-api-docs:post-unavailable-codes-id-teams:POST:/unavailable-codes/{unavailableCodeId}/teams": {
  addAll: boolean;
};
  "admin-unavailablecodes-api-docs:put-unavailable-codes-id-teams:PUT:/unavailable-codes/{unavailableCodeId}/teams": {
  securityUser?: string;
};
  "admin-unavailablecodes-api-docs:delete-unavailable-codes-id-teams:DELETE:/unavailable-codes/{unavailableCodeId}/teams": {
  removeAll: boolean;
};
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams-unassigned:GET:/unavailable-codes/{unavailableCodeId}/teams/unassigned": {
  searchString?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id:GET:/unavailable-codes/{unavailableCodeId}": {};
  "admin-unavailablecodes-api-docs:put-unavailable-codes-id:PUT:/unavailable-codes/{unavailableCodeId}": {};
  "admin-workflowdata-api-docs:list-workflow-data:GET:/workflow-data/list/{activeFlag}": {};
  "admin-workflowdata-api-docs:get-workflow-data:GET:/workflow-data": {
  isActive?: boolean;
  searchString?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-workflowdata-api-docs:create-workflow-data:POST:/workflow-data": {};
  "admin-workflowdata-api-docs:update-workflow-data:PUT:/workflow-data": {};
  "admin-workflowdata-api-docs:get-workflow-data-identities:GET:/workflow-data/identities": {
  isActive?: boolean;
  searchString?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "admin-workflowdata-api-docs:get-workflow-data-id:GET:/workflow-data/{workFlowDataId}": {};
  "admin-workflowdata-api-docs:deactivate-workflow-data:PUT:/workflow-data/{workflowDataId}/deactivate": {};
  "admin-workflowdata-api-docs:activate-workflow-data:PUT:/workflow-data/{workflowDataId}/activate": {};
  "agentphone-api-docs:dialAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/dial": {};
  "agentphone-api-docs:muteAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/mute": {};
  "agentphone-api-docs:unmuteAgentLeg:POST:/agent-sessions/{sessionId}/agent-phone/unmute": {};
  "agentphone-api-docs:disconnectAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/end": {};
  "chatrequests-api-docs:addChatContact:POST:/agent-sessions/{sessionId}/interactions/add-chat": {};
  "chatrequests-api-docs:post-agent-sessions-id-interactions-add-text:POST:/agent-sessions/{sessionId}/interactions/add-text": {
  mediaType: number;
};
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-accept:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept": {};
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-reject:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject": {};
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-end:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": {};
  "chatrequests-api-docs:activateChatContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate-chat": {};
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-send-chat-text:POST:/agent-sessions/{sessionId}/interactions/{contactId}/send-chat-text": {
  chatText: string;
  chatTarget: string;
};
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-agent": {
  targetAgentId: number;
};
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-skill": {
  targetSkillId: number;
};
  "chatrequests-api-docs:AgentTyping:POST:/agent-sessions/{sessionId}/interactions/{contactId}/typing": {
  isTyping?: boolean;
  isTextEntered?: boolean;
};
  "emails-api-docs:AddEmail:POST:/agent-sessions/{sessionId}/interactions/add-email": {};
  "emails-api-docs:EmailOutbound:POST:/agent-sessions/{sessionId}/interactions/email-outbound": {
  skillId: number;
  toAddress: string;
  parentContactId?: number;
};
  "emails-api-docs:post-agent-sessions-sessionId-interactions-contactId-email-forward:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-forward": {
  skillId?: number;
  toAddress?: string;
  fromAddress?: string;
  ccAddress?: string;
  bccAddress?: string;
  subject?: string;
  bodyHtml?: string;
  attachments?: string;
  attachmentNames?: string;
  originalAttachmentNames?: string;
};
  "emails-api-docs:EmailReply:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-reply": {
  skillId?: number;
  toAddress?: string;
  fromAddress?: string;
  ccAddress?: string;
  bccAddress?: string;
  subject?: string;
  bodyHtml?: string;
  attachments?: string;
  attachmentNames?: string;
};
  "emails-api-docs:EmailSend:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-send": {
  skillId?: number;
  toAddress?: string;
  fromAddress?: string;
  ccAddress?: string;
  bccAddress?: string;
  subject?: string;
  bodyHtml?: string;
  attachments?: string;
  attachmentNames?: string;
};
  "emails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": {};
  "emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-agent": {};
  "emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-skill": {};
  "emails-api-docs:ParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-park": {
  toAddress?: string;
  fromAddress?: string;
  ccAddress?: string;
  bccAddress?: string;
  subject?: string;
  bodyHtml?: string;
  attachments?: string;
  attachmentNames?: string;
  isDraft?: boolean;
  primaryDispositionId?: string;
  secondaryDispositionId?: string;
  tags?: string;
  notes?: string;
  originalAttachmentNames?: string;
};
  "emails-api-docs:UnParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-unpark": {
  isImmediate?: boolean;
};
  "emails-api-docs:PreveiwEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-preview": {};
  "emails-api-docs:RestoreEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-restore": {};
  "emails-api-docs:post-agent-sessions-id-interactions-id-email-save-draft:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-save-draft": {
  toAddress?: string;
  fromAddress?: string;
  ccAddress?: string;
  bccAddress?: string;
  subject?: string;
  bodyHtml?: string;
  attachments?: string;
  attachmentNames?: string;
  draftEmailGuidStr?: string;
  primaryDispositionId?: string;
  secondaryDispositionId?: string;
  tags?: string;
  notes?: string;
  originalAttachmentNames?: string;
};
  "personalcon-api-docs:dialerLogon:POST:/agent-sessions/{sessionId}/dialer-login": {
  skillName: string;
};
  "personalcon-api-docs:dialerLogout:POST:/agent-sessions/{sessionId}/dialer-logout": {};
  "personalcon-api-docs:PersonalConSnoozes:POST:/agent-sessions/{sessionId}/interactions/{contactId}/snooze": {};
  "phonecalls-api-docs:agentTransfer:POST:/agent-sessions/{sessionId}/dial-agent": {};
  "phonecalls-api-docs:dialPhone:POST:/agent-sessions/{sessionId}/dial-phone": {};
  "phonecalls-api-docs:dialSkill:POST:/agent-sessions/{sessionId}/dial-skill": {};
  "phonecalls-api-docs:SendDtmfTone:POST:/agent-sessions/{sessionId}/send-dtmf": {
  dtmfSequence: string;
  toneDurationMS: number;
  toneSpacingMS?: number;
};
  "phonecalls-api-docs:dialAgentConsult:POST:/agent-sessions/{sessionId}/consult-agent": {};
  "phonecalls-api-docs:transferCall:POST:/agent-sessions/{sessionId}/interactions/transfer-calls": {};
  "phonecalls-api-docs:conferenceCall:POST:/agent-sessions/{sessionId}/interactions/conference-calls": {};
  "phonecalls-api-docs:acceptConsultRequest:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept-consult": {};
  "phonecalls-api-docs:holdCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold": {};
  "phonecalls-api-docs:resumeCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume": {};
  "phonecalls-api-docs:endCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": {};
  "phonecalls-api-docs:AmdOverride:POST:/agent-sessions/{sessionId}/interactions/{contactId}/amd-override": {
  type: "faxMachine" | "answeringMachine";
};
  "phonecalls-api-docs:recordACall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/record": {};
  "phonecalls-api-docs:maskACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/mask": {
  maskRecordingMedia?: string;
};
  "phonecalls-api-docs:stopMaskingACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/unmask": {
  maskRecordingMedia?: string;
};
  "phonecalls-api-docs:IndependentDialed:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial": {};
  "phonecalls-api-docs:IndependentDialOutcome:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial-outcome": {
  outcome?: "Answered" | "Busy" | "Fax" | "Intercept" | "No Answer";
};
  "scheduledcallbacks-api-docs:DialCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/dial": {};
  "scheduledcallbacks-api-docs:RescheduleCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/reschedule": {
  rescheduleDate: string;
};
  "scheduledcallbacks-api-docs:agentinteractionscallbackcancel:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/cancel": {};
  "sessions-api-docs:startSession:POST:/agent-sessions": {
  stationId: string;
  stationPhoneNumber?: string;
  inactivityTimeout?: number;
  inactivityForceLogout?: boolean;
  asAgentId?: number;
};
  "sessions-api-docs:joinSession:POST:/agent-sessions/join": {
  asAgentId: string;
};
  "sessions-api-docs:endSession:DELETE:/agent-sessions/{sessionId}": {
  forceLogoff?: boolean;
  endContacts?: boolean;
  ignorePersonalQueue?: boolean;
};
  "sessions-api-docs:getNextEvent:GET:/agent-sessions/{sessionId}/get-next-event": {
  timeout: number;
};
  "sessions-api-docs:ContinueReskill:POST:/agent-sessions/{sessionId}/continue-reskill": {};
  "sessions-api-docs:DispositionContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/disposition": {};
  "sessions-api-docs:setAgentStatus:POST:/agent-sessions/{sessionId}/state": {
  state: "Available" | "Unavailable";
  reason?: string;
};
  "sessions-api-docs:SendFeedback:POST:/agent-sessions/{sessionId}/submit-feedback": {
  categoryId: number;
  priority: string;
  comment: string;
  customData?: string;
};
  "sessions-api-docs:PostCustomData:POST:/agent-sessions/{sessionId}/interactions/{contactId}/custom-data": {
  indicatorName?: string;
  data?: string;
};
  "sessions-api-docs:agentAddContact:POST:/agent-sessions/{sessionId}/add-contact": {
  chat?: boolean;
  email?: boolean;
  workItem?: boolean;
};
  "sessions-api-docs:post-agent-sessions-id-interactions-sms-outbound:POST:/agent-sessions/{sessionId}/interactions/sms-outbound": {
  phoneNumber?: string;
  skillId: number;
  parentContactId?: number;
};
  "sessions-api-docs:post-agent-sessions-id-interactions-id-activate:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate": {};
  "sessions-api-docs:holdASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold": {};
  "sessions-api-docs:resumeASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume": {};
  "sessions-api-docs:endASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": {};
  "sessions-api-docs:acceptSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept": {};
  "sessions-api-docs:rejectSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject": {};
  "supervisor-api-docs:contactMonitor:POST:/agent-sessions/{sessionId}/monitor": {
  targetAgentId: number;
};
  "supervisor-api-docs:contactCoach:POST:/agent-sessions/{sessionId}/coach": {};
  "supervisor-api-docs:contactBarge:POST:/agent-sessions/{sessionId}/barge": {};
  "supervisor-api-docs:post-agent-sessions-sessionId-take-over:POST:/agent-sessions/{sessionId}/take-over": {};
  "voicemails-api-docs:PlayVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/play-voicemail": {};
  "voicemails-api-docs:PauseVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/pause-voicemail": {};
  "voicemails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": {};
  "voicemails-api-docs:VoicemailTransferAgent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-agent": {
  targetAgentId: number;
};
  "voicemails-api-docs:VoicemailTransferSkill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-skill": {
  targetSkillId: number;
};
  "workitems-api-docs:acceptWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept": {};
  "workitems-api-docs:rejectWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject": {};
  "workitems-api-docs:holdAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold": {};
  "workitems-api-docs:resumeAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume": {};
  "workitems-api-docs:endAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": {};
  "authentication-authenticate-api-docs:passwordReset:PUT:/agents/{agentId}/reset-password": {
  requestedPassword?: string;
  forceChangeOnLogon?: boolean;
};
  "authentication-authenticate-api-docs:PasswordChange:PUT:/agents/change-password": {
  currentPassword: string;
  newPassword: string;
};
  "authentication-globalauthentication-api-docs:getOIDCConfig:GET:/.well-known/openid-configuration": {};
  "authentication-globalauthentication-api-docs:getCXoneConfig:GET:/.well-known/cxone-configuration": {
  tenantId: string;
};
  "authentication-globalauthentication-api-docs:get_/auth/jwks:GET:/auth/jwks": {};
  "authentication-globalauthentication-api-docs:getAuthAuthorize:GET:/auth/authorize": {
  tenantId?: string;
  resellerId?: string;
  scope?: ReadonlyArray<"openid">;
  response_type?: "code";
  client_id?: string;
  redirect_uri?: string;
  state?: string;
  nonce?: string;
  display?: "page" | "popup";
  prompt?: "none" | "login";
  max_age?: number;
  id_token_hint?: string;
  login_hint?: string;
  acr_values?: ReadonlyArray<string>;
  ui_locales?: ReadonlyArray<string>;
  code_challenge?: string;
  code_challenge_method?: "S256";
  code?: string;
};
  "authentication-globalauthentication-api-docs:authAuthorize:POST:/auth/authorize": {};
  "authentication-globalauthentication-api-docs:getToken:POST:/auth/token": {};
  "authentication-globalauthentication-api-docs:get_/auth/authorize/logout:GET:/auth/authorize/logout": {
  id_token_hint?: string;
  post_logout_redirect_uri?: string;
  state?: string;
  ui_locales?: ReadonlyArray<string>;
};
  "authentication-globalauthentication-api-docs:post_/auth/authorize/logout:POST:/auth/authorize/logout": {};
  "authentication-globalauthentication-api-docs:get_/auth/userinfo:GET:/auth/userinfo": {};
  "authentication-globalauthentication-api-docs:post_/auth/userinfo:POST:/auth/userinfo": {};
  "authentication-globalauthentication-api-docs:getAccountAccessAssociations:GET:/account-access/v1/associations": {};
  "authentication-integrations-api-docs:createApplication:POST:/applications": {};
  "authentication-integrations-api-docs:listApplication:GET:/applications": {};
  "authentication-integrations-api-docs:viewApplication:GET:/applications/{applicationId}": {};
  "authentication-integrations-api-docs:patchApplication:PATCH:/applications/{applicationId}": {};
  "authentication-integrations-api-docs:deleteApplication:DELETE:/applications/{applicationId}": {};
  "authentication-integrations-api-docs:enableApplication:POST:/applications/{applicationId}-enable": {};
  "authentication-integrations-api-docs:disableApplication:POST:/applications/{applicationId}-disable": {};
  "authentication-universalapplication-api-docs:redirectToGA:GET:/GALandingPage": {};
  "authentication-universalapplication-api-docs:getCallback:GET:/callback": {
  code: string;
};
  "businessdata-businessdata-api-docs:updateBusinessDataFieldForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}": {};
  "businessdata-businessdata-api-docs:updateBusinessDataFieldAtSegmentLevelForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}/segment/{segmentId}": {};
  "cxone-accesskeys-api-docs:CreateAnAccessKeyForAUser:POST:/access-key-management/v1/access-keys": {};
  "cxone-accesskeys-api-docs:Updates an access key for a user:PATCH:/access-key-management/v1/access-keys": {
  tenantId?: string;
  userId?: string;
  accessKeyId: string;
};
  "cxone-accesskeys-api-docs:ReturnsAListOfAccessKeys:GET:/access-key-management/v1/access-keys": {
  userId?: string;
  agentId?: number;
};
  "cxone-accesskeys-api-docs:ReturnsAnAccessKeyConfig:GET:/access-key-management/v1/access-keys/{accessKeyId}": {};
  "cxone-accesskeys-api-docs:DeletesAnAccessKey:DELETE:/access-key-management/v1/access-keys/{accessKeyId}": {};
  "cxone-authorizationmanagement-api-docs:searchRole:POST:/authorization/v1/roles/search": {};
  "cxone-billing-api-docs:submitProductUsages:POST:/billing/v1.0/product-usage": {};
  "cxone-billing-api-docs:getProductUsageById:GET:/billing/v1.0/product-usage/{productTypeId}": {
  skip?: number;
  top?: number;
  startDate: string;
  endDate: string;
};
  "cxone-correlationmanagement-api-docs:createCorrelation:POST:/correlation-manager/v1/correlations": {};
  "cxone-correlationmanagement-api-docs:updateCorrelation:PUT:/correlation-manager/v1/correlations/{correlationId}/{entityId}": {};
  "cxone-correlationmanagement-api-docs:searchCorrelations:POST:/correlation-manager/v1/correlations/search": {};
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/assigned:GET:/agent-profiles/v1/assigned": {};
  "cxone-desktopprofiles-api-docs:AssignableConfigurations:GET:/agent-profiles/v1/configurations": {};
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/search:POST:/agent-profiles/v1/profiles/search": {};
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}:GET:/agent-profiles/v1/profiles/{id}": {};
  "cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/{id}:PUT:/agent-profiles/v1/profiles/{id}": {};
  "cxone-desktopprofiles-api-docs:AgentProfile:GET:/agent-profiles/v1/profiles": {
  skip?: number;
  top?: number;
  orderBy?: string;
  fields?: string;
};
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles:POST:/agent-profiles/v1/profiles": {};
  "cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/status:PUT:/agent-profiles/v1/profiles/status": {};
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}/teams:GET:/agent-profiles/v1/profiles/{id}/teams": {};
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/{id}/teams:POST:/agent-profiles/v1/profiles/{id}/teams": {};
  "cxone-desktopprofiles-api-docs:delete_/agent-profiles/v1/profiles/{id}/teams:DELETE:/agent-profiles/v1/profiles/{id}/teams": {};
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/teams/search:POST:/agent-profiles/v1/profiles/teams/search": {};
  "cxone-division-api-docs:post_/division-management/v1/division:POST:/division-management/v1/division": {};
  "cxone-division-api-docs:put_/division-management/v1/division:PUT:/division-management/v1/division": {};
  "cxone-division-api-docs:get_/division-management/v1/division/{divisionId}:GET:/division-management/v1/division/{divisionId}": {};
  "cxone-division-api-docs:post_/division-management/v1/division/search:POST:/division-management/v1/division/search": {};
  "cxone-division-api-docs:post_/division-management/v1/division/identities:POST:/division-management/v1/division/identities": {};
  "cxone-division-api-docs:get_/division-management/v1/division/{divisionId}/getAllBillingCodes:GET:/division-management/v1/division/{divisionId}/getAllBillingCodes": {};
  "cxone-division-api-docs:get_/division-management/v1/division/billingCode/{billingCode}/validate:GET:/division-management/v1/division/billingCode/{billingCode}/validate": {};
  "cxone-documents-api-docs:createKnowledgeHubConfiguration:POST:/eai-knowledge-hub-services/ingestion-service/v1/documents": {};
  "cxone-documents-api-docs:getDocumentSnapshot:POST:/eai-knowledge-hub-services/ingestion-service/v1/{khId}/documents/snapshot": {};
  "cxone-exportapi-api-docs:exportCopilotKBTable:POST:/observabilitydashboard/v2/tables/Copilot/KBTable/export-data": {};
  "cxone-exportapi-api-docs:exportCopilotAQTable:POST:/observabilitydashboard/v2/tables/Copilot/AQTable/export-data": {};
  "cxone-exportapi-api-docs:exportCopilotASTable:POST:/observabilitydashboard/v2/tables/Copilot/ASTable/export-data": {};
  "cxone-exportapi-api-docs:exportAutopilotKnowledgeGRTable:POST:/observabilitydashboard/v2/tables/AutopilotKnowledge/GRTable/export-data": {};
  "cxone-exportapi-api-docs:exportAutopilotGRTable:POST:/observabilitydashboard/v2/tables/autopilot/GRTable/export-data": {};
  "cxone-scim-api-docs:searchUser:GET:/scim/v2/Users": {
  filter: string;
};
  "cxone-scim-api-docs:registerScimUser:POST:/scim/v2/Users": {};
  "cxone-scim-api-docs:getScimUserById:GET:/scim/v2/Users/{userId}": {};
  "cxone-scim-api-docs:updateScimUser:PUT:/scim/v2/Users/{userId}": {};
  "cxone-scim-api-docs:updateScimUserPatch:PATCH:/scim/v2/Users/{userId}": {};
  "cxone-scim-api-docs:getSchemas:GET:/scim/v2/Schemas": {};
  "cxone-scim-api-docs:get-basic-auth-Users:GET:/basic-auth/scim/v2/Users": {
  filter: string;
};
  "cxone-scim-api-docs:post-basic-auth-users:POST:/basic-auth/scim/v2/Users": {};
  "cxone-scim-api-docs:get-basicauth-ScimUserbyID:GET:/basic-auth/scim/v2/Users/{userId}": {};
  "cxone-scim-api-docs:put-basicauth-ScimUserbyID:PUT:/basic-auth/scim/v2/Users/{userId}": {};
  "cxone-scim-api-docs:patch-basic-auth-ScimUserbyID:PATCH:/basic-auth/scim/v2/Users/{userId}": {};
  "cxone-scim-api-docs:get-basic-auth-Schemas:GET:/basic-auth/scim/v2/Schemas": {};
  "cxone-usermanagement-api-docs:createTeam:POST:/user-management/v3/teams": {};
  "cxone-usermanagement-api-docs:updateTeam:PUT:/user-management/v3/teams": {};
  "cxone-usermanagement-api-docs:getTeamById:GET:/user-management/v3/teams/{teamId}": {};
  "cxone-usermanagement-api-docs:getTeamsByCriteria:POST:/user-management/v4/teams/search": {};
  "cxone-usermanagement-api-docs:getUserList:GET:/user-management/v1/users": {
  includeDeleted?: boolean;
  withAndWithoutEmail?: string;
  includeDeletedAfter?: string;
  fullNameContains?: string;
  excludeImpersonated?: boolean;
  onlyImpersonated?: string;
};
  "cxone-usermanagement-api-docs:registerUserV1:POST:/user-management/v1/users": {};
  "cxone-usermanagement-api-docs:updateUserV1:PUT:/user-management/v1/users": {};
  "cxone-usermanagement-api-docs:deactivateUser:POST:/user-management/v1/users/deactivate": {};
  "cxone-usermanagement-api-docs:getUserByIdV3:GET:/user-management/v3/users/{userId}": {};
  "cxone-usermanagement-api-docs:reviveUser:POST:/user-management/v1/users/{userId}/revive": {};
  "cxone-usermanagement-api-docs:getUsersByCriteria:POST:/user-management/v2/users/search": {};
  "cxone-usermanagement-api-docs:getUserIdentityList:GET:/user-management/v2/users/identities": {
  skip?: number;
  top?: number;
  orderBy?: string;
  fields?: string;
  filter?: string;
};
  "cxone-usermanagement-api-docs:inviteUserByEmail:POST:/user-management/v2/users/inviteByEmail": {};
  "cxone-usermanagement-api-docs:inviteUserById:POST:/user-management/v2/users/inviteById": {};
  "cxone-usermanagement-api-docs:getUserIdentity:GET:/user-management/v1/users/{userId}/identities": {};
  "cxone-usermanagement-api-docs:assignAuthenticatorV1:PUT:/user-management/v1/users/{userId}/login-authenticator": {};
  "dataextraction-dataextraction-api-docs:getAllJobs:GET:/data-extraction/v1/jobs": {};
  "dataextraction-dataextraction-api-docs:extractData:POST:/data-extraction/v1/jobs": {};
  "dataextraction-dataextraction-api-docs:getJobStatus:GET:/data-extraction/v1/jobs/{jobId}": {};
  "digital-attachment-api-docs:post_attachments_temporary:POST:/attachments/temporary": {};
  "digital-channel-api-docs:get-external-templates:GET:/channels/{channelId}/external-platform-templates": {};
  "digital-channel-api-docs:create-update-Channel:POST:/channels": {};
  "digital-channel-api-docs:get-Channels:GET:/channels": {
  "id[]"?: ReadonlyArray<string>;
  isPrivate?: boolean;
  hasManualOutboundFlow?: boolean;
  withPermissionToManualOutbound?: boolean;
  size?: number;
  page?: number;
  orderBy?: "id" | "title" | "createdAt";
  order?: "asc" | "desc";
};
  "digital-channel-api-docs:deleteChannel:DELETE:/channels/{channelId}": {};
  "digital-contact-api-docs:searchContacts:GET:/contacts": {
  "channel[]"?: ReadonlyArray<string>;
  "tag[]"?: ReadonlyArray<number>;
  "routingQueueId[]"?: ReadonlyArray<string>;
  "status[]"?: ReadonlyArray<string>;
  "endUserIdOnExternalPlatform[]"?: ReadonlyArray<string>;
  query?: string;
  calculateClosedFrtNoReply?: boolean;
  scrollToken?: string;
  sorting?: "createdAt" | "id" | "slaFrt" | "slaRt" | "status" | "updatedAt";
  sortingType?: "asc" | "desc";
};
  "digital-contact-api-docs:getContact:GET:/contacts/{contactNumber}": {};
  "digital-contact-api-docs:updateContact:PUT:/contacts/{contactNumber}": {};
  "digital-contact-api-docs:create-contacts-contactnumber-abandon:POST:/contacts/{contactNumber}/abandon": {};
  "digital-contact-api-docs:getContactDetailPagination:GET:/contacts/{contactNumber}/detail/pagination": {};
  "digital-contact-api-docs:getContactMessages:GET:/contacts/{contactNumber}/messages": {};
  "digital-contact-api-docs:changeContactInboxAssignee:PUT:/contacts/{contactNumber}/inbox-assignment": {};
  "digital-contact-api-docs:unassignContactInboxAssignee:DELETE:/contacts/{contactNumber}/inbox-assignment": {};
  "digital-contact-api-docs:setContactCustomFieldValues:PUT:/contacts/{contactNumber}/custom-fields": {};
  "digital-contact-api-docs:removeContactCustomFieldValue:DELETE:/contacts/{contactNumber}/custom-fields/{customFieldIdentifier}": {};
  "digital-contact-api-docs:changeContactRoutingQueue:PUT:/contacts/{contactNumber}/routing-queue": {};
  "digital-contact-api-docs:updateContactRoutingProperties:PUT:/contacts/{contactNumber}/routing-properties": {};
  "digital-contact-api-docs:sendContactTranscript:POST:/contacts/{contactNumber}/transcript": {};
  "digital-contact-api-docs:create-contacts-agent-contacts-close:PUT:/contacts/{contactNumber}/agent-contacts/{agentContactId}/close": {};
  "digital-contact-api-docs:changeContactStatus:PUT:/contacts/{contactNumber}/status": {};
  "digital-customer-api-docs:searchCustomers:GET:/customers": {
  query?: string;
  limit?: number;
  page?: number;
  orderBy?: "relevance" | "createdAt" | "updatedAt" | "firstName" | "lastName" | "firstInteractionAt" | "lastInteractionAt" | "numberOfInbounds" | "numberOfOutbounds";
  order?: "asc" | "desc";
};
  "digital-customer-api-docs:getCustomer:GET:/customers/{customerId}": {};
  "digital-customer-api-docs:getCustomerNotes:GET:/customers/{customerId}/notes": {};
  "digital-customer-api-docs:createCustomerNote:POST:/customers/{customerId}/notes": {};
  "digital-customer-api-docs:updateCustomerNote:PUT:/customers/{customerId}/notes/{noteId}": {};
  "digital-customer-api-docs:deleteCustomerNote:DELETE:/customers/{customerId}/notes/{noteId}": {};
  "digital-customer-api-docs:mergeCustomer:PUT:/customers/{customerId}/merge": {};
  "digital-customer-api-docs:removeCustomerCustomFieldValue:DELETE:/customers/{customerId}/custom-fields/{customFieldIdentifier}": {};
  "digital-customer-api-docs:updateCustomerCustomFields:PUT:/customers/{customerId}/custom-fields": {};
  "digital-customfields-api-docs:getContactCustomFieldDefinitions:GET:/consumer-contact-custom-fields": {};
  "digital-customfields-api-docs:getCustomerCustomFieldDefinitions:GET:/customers/custom-field-definitions": {};
  "digital-customfields-api-docs:createOrUpdateCustomerCustomFieldDefinition:PUT:/customers/custom-field-definitions": {};
  "digital-message-api-docs:channels-channelId-createmessage:POST:/channels/{channelId}/messages": {};
  "digital-message-api-docs:updateMessageStatus:PUT:/channels/{channelId}/messages/{messageIdOnExternalPlatform}/status": {};
  "digital-message-api-docs:sendOutboundMessage:POST:/channels/{channelId}/outbound": {};
  "digital-message-api-docs:sendInboundMessage:POST:/channels/{channelId}/inbound": {};
  "digital-message-api-docs:searchMessages:GET:/messages": {
  query?: string;
  "idOnExternalPlatform[]"?: ReadonlyArray<string>;
  "channel[]"?: ReadonlyArray<string>;
  "tag[]"?: ReadonlyArray<number>;
  "excludeTag[]"?: ReadonlyArray<number>;
  contactNumber?: number;
  "authorIdOnExternalPlatform[]"?: ReadonlyArray<string>;
  direction?: "inbound" | "outbound";
  contentContains?: string;
  contentNotContains?: string;
};
  "digital-message-api-docs:getMessage:GET:/messages/{messageId}": {};
  "digital-message-api-docs:removeMessageAuthorName:POST:/messages/{messageId}/author-name-removal": {};
  "digital-message-api-docs:addMessageTag:PUT:/messages/{messageId}/tags/{tagId}": {};
  "digital-message-api-docs:removeMessageTag:DELETE:/messages/{messageId}/tags/{tagId}": {};
  "digital-message-api-docs:removeMessageContent:POST:/messages/{messageId}/content-removal": {};
  "digital-message-api-docs:delete-DFO-message-bymessageId:POST:/messages/{messageId}/delete": {};
  "digital-message-api-docs:createMessageNote:POST:/messages/{messageId}/notes": {};
  "digital-message-api-docs:updateMessageNote:PUT:/messages/{messageId}/notes/{noteId}": {};
  "digital-message-api-docs:deleteMessageNote:DELETE:/messages/{messageId}/notes/{noteId}": {};
  "digital-message-api-docs:mark-DFO-message-read:PUT:/messages/{messageId}/read": {};
  "digital-message-api-docs:setMessageSentiment:PUT:/messages/{messageId}/sentiment": {};
  "digital-message-api-docs:add-DFO-message-react:POST:/messages/{messageId}/react/{reactionType}": {};
  "digital-message-api-docs:delete-DFO-message-react:DELETE:/messages/{messageId}/react/{reactionType}": {};
  "digital-routingqueue-api-docs:searchRoutingQueues:GET:/routing-queues": {
  "id[]"?: ReadonlyArray<string>;
  nameContains?: string;
  withDeleted?: boolean;
  size?: number;
  isAssignableByMe?: boolean;
  isAssignableByUser?: number;
};
  "digital-tag-api-docs:getTags:GET:/tags": {
  "id[]"?: ReadonlyArray<number>;
};
  "digital-tag-api-docs:createTag:PUT:/tags": {};
  "digital-thread-api-docs:searchThreads:GET:/threads": {
  withContext?: number;
  query?: string;
};
  "digital-thread-api-docs:sendSenderAction:POST:/channels/{channelId}/threads/{threadIdOnExternalPlatform}/sender-actions": {};
  "digital-thread-api-docs:updateThread:PUT:/channels/{channelId}/threads/{threadIdOnExternalPlatform}": {};
  "digital-verificationtoken-api-docs:getOneTimeToken:GET:/one-time-token/authentication": {
  redirectUrl: string;
  state: string;
};
  "digital-verificationtoken-api-docs:verifyOneTimeToken:POST:/one-time-token/verification": {};
  "interactionanalytics-interactions-api-docs:get-segments-analyzed:GET:/interaction-analytics-gateway/v2/segments/analyzed": {
  dateField?: NiceCxoneFullApiSchemaQueryDateField;
  beginningDate?: string;
  endingDate?: string;
  mediaType?: string;
  lang?: string;
  pageSize?: number;
  cursor?: number;
  order?: NiceCxoneFullApiSchemaSortOrder;
};
  "interactionanalytics-interactions-api-docs:get-segments-segmentId-analyzed-transcript:GET:/interaction-analytics-gateway/v2/segments/{segmentId}/analyzed-transcript": {
  wordLevel?: boolean;
};
  "mediaplayback-mediaplayback-api-docs:getACDContactRecordingData:GET:/media-playback/v1/contacts": {
  "acd-call-id": string;
  "media-type"?: ReadonlyArray<"voice-only" | "voice-and-screen" | "chat" | "email" | "all">;
  "exclude-waveforms"?: true | false;
  "exclude-qm-categories"?: true | false;
  isDownload?: true | false;
};
  "mediaplayback-mediaplayback-api-docs:getDataToPlayByContactStatementId:GET:/media-playback/v1/acd-contacts/{acdContactId}/statements/{statementId}": {
  "media-type"?: ReadonlyArray<"voice-only" | "voice-and-screen" | "chat" | "email" | "all">;
  isDownload?: boolean;
  "exclude-qm-categories"?: boolean;
};
  "mediaplayback-mediaplayback-api-docs:getSegmentRecordingData:GET:/media-playback/v1/segments/{segmentId}": {
  "media-type"?: ReadonlyArray<"voice-only" | "voice-and-screen" | "chat" | "email" | "all">;
  "exclude-waveforms"?: boolean;
  "exclude-qm-categories"?: boolean;
};
  "patron-callback-api-docs:requestACallback:POST:/queuecallback": {
  phoneNumber: string;
  callerId?: string;
  callDelay?: number;
  skill: number;
  targetAgent?: number;
  priorityManagement?: string;
  initialPriority?: number;
  acceleration?: number;
  maxPriority?: number;
  sequence?: string;
  zipTone?: string;
  screenPopSrc?: string;
  screenPopUrl?: string;
  timeout?: number;
};
  "patron-callback-api-docs:scheduleACallback:POST:/promise": {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  skill: number;
  targetAgent?: number;
  promiseDate: string;
  promiseTime: string;
  notes?: string;
  timeZone?: string;
};
  "patron-chatrequests-api-docs:post-contacts-chats:POST:/contacts/chats": {};
  "patron-chatrequests-api-docs:getChatText:GET:/contacts/chats/{chatSession}": {
  timeout: number;
};
  "patron-chatrequests-api-docs:endChat:DELETE:/contacts/chats/{chatSession}": {};
  "patron-chatrequests-api-docs:post-contacts-chats-id-send-text:POST:/contacts/chats/{chatSession}/send-text": {};
  "patron-chatrequests-api-docs:PatronTyping:POST:/contacts/chats/{chatSession}/typing": {
  isTyping?: boolean;
  isTextEntered?: boolean;
  label?: string;
};
  "patron-chatrequests-api-docs:PatronTypingPreview:POST:/contacts/chats/{chatSession}/typing-preview": {
  previewText?: string;
  label?: string;
};
  "patron-chatrequests-api-docs:post-contacts-chats-send-email:POST:/contacts/chats/send-email": {};
  "patron-chatrequests-api-docs:getPointChatProfile:GET:/points-of-contact/{pointsOfContactId}/chat-profile": {};
  "patron-workitem-api-docs:requestAWorkitem:POST:/interactions/work-items": {
  pointOfContact: string;
  workItemID?: string;
  workItemPayload?: string;
  workItemType?: string;
  from?: string;
};
  "patron-workitem-api-docs:post-interactions-work-items-persistent:POST:/interactions/work-items-persistent": {
  workItemID?: string;
  workItemPayload?: string;
  workItemType?: string;
  from?: string;
  pointOfContact?: string;
};
  "policy-policyinstance-api-docs:createPolicyDefinition:POST:/data-policies/v1/policies": {};
  "policy-policyinstance-api-docs:getPolicies:POST:/data-policies/v1/policies/search": {};
  "policy-policyinstance-api-docs:getPolicyDefinition:GET:/data-policies/v1/policies/{policyId}": {};
  "policy-policyinstance-api-docs:getPolicyInstance:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}": {};
  "policy-policyinstance-api-docs:generateEvidenceReportUrl:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}/evidence-reports": {};
  "policy-policyinstance-api-docs:getAllPolicyInstances:GET:/data-policies/v1/policies/{policyId}/policy-instances": {};
  "policy-policyinstance-api-docs:getPolicyInstances:POST:/data-policies/v1/policies/policy-instances/search": {};
  "privacy-gdpr-api-docs:createGdprErasureRequest:POST:/privacy/v1/erasure": {};
  "realtimedata-realtime-api-docs:getAgentStates:GET:/agents/states": {
  updatedSince?: string;
  reqBUIds?: string;
  top?: number;
  skip?: number;
  fields?: string;
  orderBy?: string;
};
  "realtimedata-realtime-api-docs:get-agents-client-data:GET:/agents/client-data": {
  agentId?: number;
  errorArgList?: string;
};
  "realtimedata-realtime-api-docs:put-agents-client-data:PUT:/agents/client-data": {
  agentId?: number;
  dataSet?: string;
};
  "realtimedata-realtime-api-docs:getAgentStateByid:GET:/agents/{agentId}/states": {
  updatedSince?: string;
  fields?: string;
};
  "realtimedata-realtime-api-docs:ActiveContacts:GET:/contacts/active": {
  updatedSince?: string;
  fields?: string;
  mediaSubTypeId?: number;
  mediaTypeId?: number;
  skillId?: number;
  campaignId?: number;
  agentId?: number;
  teamId?: number;
  orderBy?: string;
  toAddress?: string;
  fromAddress?: string;
  digitalContactStateId?: number;
  stateId?: number;
  top?: number;
  skip?: number;
  contactId?: string;
};
  "realtimedata-realtime-api-docs:ParkedContactDetails:GET:/contacts/parked": {
  updatedSince?: string;
  fields?: string;
  mediaTypeId?: 1 | 3 | 4 | 5 | 6;
  skillId?: number;
  campaignId?: number;
  agentId?: number;
  teamId?: number;
  toAddr?: string;
  fromAddr?: string;
};
  "realtimedata-realtime-api-docs:get_/contacts/states:GET:/contacts/states": {
  updatedSince?: string;
  fields?: string;
  agentId?: number;
  orderBy?: string;
  top?: number;
  skip?: number;
};
  "realtimedata-realtime-api-docs:SkillActivity:GET:/skills/activity": {
  mediaTypeId?: number;
  IsOutbound?: boolean;
  fields?: string;
  updatedSince?: string;
  skip?: number;
  top?: number;
};
  "realtimedata-realtime-api-docs:post-skills-activity-search:POST:/skills/activity/search": {};
  "realtimedata-realtime-api-docs:SkillActivityById:GET:/skills/{skillId}/activity": {
  fields?: string;
  updatedSince?: string;
};
  "realtimedata-realtime-api-docs:agents_agentId_queues:GET:/agents/{agentId}/queues": {
  fields?: string;
};
  "realtimedata-realtime-api-docs:agents_agentIds_queues_details:GET:/agents/{agentId}/queues-detail": {
  fields?: string;
};
  "recording-businessdata-api-docs:post_/interaction-recording-management-service/v1/interactions/business-data-update:POST:/interaction-recording-management-service/v1/interactions/business-data-update": {
  userId: string;
};
  "recording-interactions-api-docs:post-interaction-mask:POST:/interaction-recording-management-service/v1/interactions/mask": {
  userId: string;
};
  "recording-interactions-api-docs:post-interaction-unmask:POST:/interaction-recording-management-service/v1/interactions/unmask": {
  userId: string;
};
  "recording-recordingondemand-api-docs:StopRecord:POST:/interaction-recording-management-service/v1/interactions/start-recording-on-demand": {
  userId: string;
  mediaType?: "voice" | "voiceAndScreen";
};
  "recording-recordingondemand-api-docs:ReleaseRecording:POST:/interaction-recording-management-service/v1/interactions/stop-recording-on-demand": {
  userId: string;
};
  "recording-recordingondemand-api-docs:DoNotRecord:POST:/interaction-recording-management-service/v1/interactions/do-not-record": {
  userId: string;
};
  "recording-recordingstatus-api-docs:GetRecordingStatus:GET:/interaction-recording-management-service/v1/interactions/get-recording-status": {
  userId: string;
};
  "recording-screeninteractions-api-docs:StartScreenrecord:POST:/interaction-recording-management-service/v1/interactions/start-screen-interaction-recording": {
  userId: string;
  recordingDuration: string;
};
  "recording-screeninteractions-api-docs:StopScreenRecording:POST:/interaction-recording-management-service/v1/interactions/stop-screen-interaction-recording": {
  userId: string;
  contactId: number;
};
  "reporting-reporting-api-docs:get_/agents/interaction-history:GET:/agents/interaction-history": {
  startDate?: string;
  endDate?: string;
  updatedSince?: string;
  mediaTypeId?: number;
  mediaSubTypeId?: number;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "reporting-reporting-api-docs:getAgentHistoryByid:GET:/agents/{agentId}/interaction-history": {
  startDate: string;
  endDate: string;
  updatedSince?: string;
  mediaTypeId: 1 | 3 | 4 | 5 | 6 | 7 | 8;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
  mediaSubTypeId?: number;
};
  "reporting-reporting-api-docs:RecentContactHistory:GET:/agents/{agentId}/interaction-recent": {
  mediaTypeId?: number;
  top?: number;
  fields?: string;
  startDate: string;
  endDate: string;
};
  "reporting-reporting-api-docs:AgentLoginHistory:GET:/agents/{agentId}/login-history": {
  startDate: string;
  endDate: string;
  searchString?: string;
  fields?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "reporting-reporting-api-docs:get_/agents/state-history:GET:/agents/state-history": {
  startDate?: string;
  endDate?: string;
  updatedSince?: string;
  top?: number;
  skip?: number;
  fields?: string;
  orderBy?: string;
  searchString?: string;
  mediaTypeId?: string;
  outboundStrategy?: string;
};
  "reporting-reporting-api-docs:get_/agents/{agentId}/state-history:GET:/agents/{agentId}/state-history": {
  startDate?: string;
  endDate?: string;
  updatedSince?: string;
  top?: number;
  skip?: number;
  fields?: string;
  orderBy?: string;
  searchString?: string;
  mediaTypeId?: string;
  outboundStrategy?: string;
};
  "reporting-reporting-api-docs:PerformanceSummary:GET:/agents/performance": {
  startDate: string;
  endDate: string;
  fields?: string;
};
  "reporting-reporting-api-docs:AgentPerformanceSummary:GET:/agents/{agentId}/performance": {
  startDate: string;
  endDate: string;
  fields?: string;
};
  "reporting-reporting-api-docs:get_/contacts:GET:/contacts": {
  startDate?: string;
  endDate?: string;
  fields?: string;
  top?: number;
  skip?: number;
  orderBy?: string;
};
  "reporting-reporting-api-docs:get_/contacts/{contactId}:GET:/contacts/{contactId}": {
  fields?: string;
};
  "reporting-reporting-api-docs:SmsTranscripts:GET:/contacts/sms-transcripts": {
  transportCode: string;
  startDate: string;
  endDate: string;
  skip?: number;
  top?: number;
  orderBy?: string;
  agentId: number;
};
  "reporting-reporting-api-docs:ContactIdSmsTranscripts:GET:/contacts/{contactId}/sms-transcripts": {
  transportCode: string;
  startDate: string;
  endDate: string;
  skip?: number;
  top?: number;
};
  "reporting-reporting-api-docs:CompletedContactDetails:GET:/contacts/completed": {
  startDate?: string;
  endDate?: string;
  updatedSince?: string;
  fields?: string;
  top?: number;
  skip?: number;
  orderBy?: string;
  mediaSubTypeId?: number;
  mediaSubTypeName?: string;
  mediaTypeId?: number;
  skillId?: number;
  campaignId?: number;
  agentId?: number;
  teamId?: number;
  toAddress?: string;
  fromAddress?: string;
  isLogged?: boolean;
  isRefused?: boolean;
  isTakeover?: boolean;
  tags?: boolean;
  analyticsProcessed?: boolean;
};
  "reporting-reporting-api-docs:get_/contacts/state-history:GET:/contacts/state-history": {
  startDate: string;
  endDate: string;
  updatedSince?: string;
  skip?: number;
  top?: number;
  orderBy?: string;
};
  "reporting-reporting-api-docs:ContactStateHistory:GET:/contacts/{contactId}/state-history": {};
  "reporting-reporting-api-docs:get_/contacts/custom-data:GET:/contacts/custom-data": {
  startDate: string;
  endDate?: string;
  top?: number;
  skip?: number;
};
  "reporting-reporting-api-docs:ContactCustomData:GET:/contacts/{contactId}/custom-data": {};
  "reporting-reporting-api-docs:getFullSkillSummaries:GET:/skills/summary": {
  startDate: string;
  endDate: string;
  mediaTypeId?: number;
  isOutbound?: boolean;
  fields?: string;
};
  "reporting-reporting-api-docs:get_/skills/{skillId}/summary:GET:/skills/{skillId}/summary": {
  startDate: string;
  endDate: string;
  fields?: string;
};
  "reporting-reporting-api-docs:getFullSLASummaries:GET:/skills/sla-summary": {
  startDate: string;
  endDate: string;
  skip?: number;
  top?: number;
};
  "reporting-reporting-api-docs:getFullSLASkillSummary:GET:/skills/{skillId}/sla-summary": {
  startDate: string;
  endDate: string;
};
  "reporting-reporting-api-docs:TeamPerformanceSummaryTotalsAll:GET:/teams/performance-total": {
  startDate: string;
  endDate: string;
  fields?: string;
};
  "reporting-reporting-api-docs:TeamPerformanceSummaryTotals:GET:/teams/{teamId}/performance-total": {
  startDate: string;
  endDate: string;
  fields?: string;
};
  "reporting-reporting-api-docs:CustomReports:GET:/reports": {
  reportType?: string;
};
  "reporting-reporting-api-docs:ReportJobs:GET:/report-jobs": {
  fields?: string;
  reportId?: number;
  jobStatus?: string;
  jobSpan?: number;
};
  "reporting-reporting-api-docs:ReportJobByID:GET:/report-jobs/{jobId}": {
  fields?: string;
};
  "reporting-reporting-api-docs:StartReportJob:POST:/report-jobs/{reportId}": {
  fileType?: "CSV" | "PDF" | "XML" | "Excel";
  includeHeaders?: boolean;
  appendDate?: boolean;
  deleteAfter?: number;
  overwrite?: boolean;
};
  "reporting-reporting-api-docs:GenerateADatadownloadReportFile:POST:/report-jobs/datadownload/{reportId}": {
  fileName?: string;
  startDate: string;
  endDate: string;
  saveAsFile?: boolean;
  includeHeaders?: boolean;
};
  "reporting-reporting-api-docs:wfmskillscontacts:GET:/wfm-data/skills/contacts": {
  fields?: string;
  startDate: string;
  endDate: string;
  mediaTypeId: 1 | 3 | 4 | 5 | 6 | 7 | 8;
};
  "reporting-reporting-api-docs:wfmDataAgent:GET:/wfm-data/agents": {
  fields?: string;
  startDate: string;
  endDate: string;
};
  "reporting-reporting-api-docs:wfmDailerContactStatistics:GET:/wfm-data/skills/dialer-contacts": {
  fields?: string;
  startDate: string;
  endDate: string;
  mediaTypeId: 1 | 3 | 4 | 5 | 6 | 7 | 8;
};
  "reporting-reporting-api-docs:wfmAdherenceStatistics:GET:/wfm-data/agents/schedule-adherence": {
  fields?: string;
  startDate: string;
  endDate: string;
};
  "reporting-reporting-api-docs:wfmAgentScorecard:GET:/wfm-data/agents/scorecards": {
  fields?: string;
  startDate: string;
  endDate: string;
};
  "reporting-reporting-api-docs:wfmAgentPerformance:GET:/wfm-data/skills/agent-performance": {
  startDate: string;
  endDate: string;
  fields?: string;
};
  "reporting-reporting-api-docs:get-contacts-id-hierarchy:GET:/contacts/{contactId}/hierarchy": {};
  "wfm-exportschedule-api-docs:exportScheduleAsList:POST:/schedules/export": {};
  "wfm-exportsummary-api-docs:get-summary:GET:/timeoff-manager/summary/{activityCodeName}": {
  top?: number;
  skip?: number;
};
  "wfm-importallotment-api-docs:put-allotments:PUT:/timeoff-manager/allotments/import": {};
}

export interface NiceCxoneFullApiOperationQueryRequiredMap {
  "admin-addressbook-api-docs:getAddressBooks:GET:/address-books": false;
  "admin-addressbook-api-docs:CreateAddressBookv4:POST:/address-books": true;
  "admin-addressbook-api-docs:DeleteAddressbook:DELETE:/address-books/{addressBookId}": false;
  "admin-addressbook-api-docs:get-address-books-id-agents-assigned:GET:/address-books/{addressBookId}/agents/assigned": false;
  "admin-addressbook-api-docs:get-address-books-id-agents-unassigned:GET:/address-books/{addressBookId}/agents/unassigned": false;
  "admin-addressbook-api-docs:AddressBookAssignmentV4:POST:/address-books/{addressBookId}/assignment": true;
  "admin-addressbook-api-docs:get-address-books-id-dynamic-entries:GET:/address-books/{addressBookId}/dynamic-entries": true;
  "admin-addressbook-api-docs:CreateOrUpdateDynamicAddressbook:PUT:/address-books/{addressBookId}/dynamic-entries": true;
  "admin-addressbook-api-docs:DeleteDynamicAddressBookEntry:DELETE:/address-books/{addressBookId}/dynamic-entries/{externalId}": false;
  "admin-addressbook-api-docs:get-address-books-id-entries:GET:/address-books/{addressBookId}/entries": false;
  "admin-addressbook-api-docs:CreateAddressBookEntries:POST:/address-books/{addressBookId}/entries": false;
  "admin-addressbook-api-docs:UpdateAddressBookEntries:PUT:/address-books/{addressBookId}/entries": false;
  "admin-addressbook-api-docs:DeleteAddressBookEntry:DELETE:/address-books/{addressBookId}/entries/{addressBookEntryId}": false;
  "admin-addressbook-api-docs:AddressBookListForAnAgent:GET:/agents/{agentId}/address-books": true;
  "admin-addressbook-api-docs:AddressBookForCampaign:GET:/campaigns/{campaignId}/address-books": true;
  "admin-addressbook-api-docs:AddressBookForSkill:GET:/skills/{skillId}/address-books": false;
  "admin-addressbook-api-docs:AddressBooksTeam:GET:/teams/{teamId}/address-books": false;
  "admin-agentmessage-api-docs:get-agent-messages:GET:/communications/agent-messages": false;
  "admin-agentmessage-api-docs:post-agent-messages:POST:/communications/agent-messages": false;
  "admin-agentmessage-api-docs:delete-communications-agent-messages:DELETE:/communications/agent-messages": false;
  "admin-agentmessage-api-docs:get-agent-messages-id:GET:/communications/agent-messages/{messageGroupId}": false;
  "admin-agentmessage-api-docs:delete-agent-messages-id:DELETE:/communications/agent-messages/{messageGroupId}": false;
  "admin-agents-api-docs:get-agents:GET:/agents": false;
  "admin-agents-api-docs:operations-Agents-post-agents:POST:/agents": false;
  "admin-agents-api-docs:operations-Agents-put-agents:PUT:/agents": false;
  "admin-agents-api-docs:operations-Agents-get-agents-id:GET:/agents/{agentId|userId}": false;
  "admin-agents-api-docs:operations-Agents-put-agents-id:PUT:/agents/{agentId|userId}": false;
  "admin-agents-api-docs:SetAgentState:POST:/agents/{agentId}/state": true;
  "admin-agents-api-docs:get-agents-skills:GET:/agents/skills": true;
  "admin-agents-api-docs:post-agents-skills:POST:/agents/skills": false;
  "admin-agents-api-docs:post-agents-search:POST:/agents/search": false;
  "admin-agents-api-docs:post-skills-agents-search:POST:/skills/agents/search": false;
  "admin-agents-api-docs:get-agent-configuration:GET:/agents/{agentId}/agent-configuration": false;
  "admin-agents-api-docs:getagentbyagentidgroups:GET:/agents/{agentId}/groups": false;
  "admin-agents-api-docs:getSkillsByAgentId:GET:/agents/{agentId|userId}/skills": false;
  "admin-agents-api-docs:AssignsSkillsToAnAgent:POST:/agents/{agentId|userId}/skills": false;
  "admin-agents-api-docs:ModifySkillAssignmentsForAgent:PUT:/agents/{agentId|userId}/skills": false;
  "admin-agents-api-docs:RemoveSkillAssignmentsForAgent:DELETE:/agents/{agentId|userId}/skills": false;
  "admin-agents-api-docs:GetSkillsNotAssignedToAgent:GET:/agents/{agentId}/skills/unassigned": false;
  "admin-agents-api-docs:AgentSkillData:GET:/agents/skill-data": true;
  "admin-agents-api-docs:AgentSkillDataForSkillid:GET:/agents/{agentId}/skill-data": true;
  "admin-agents-api-docs:put_/agents/{agentId}/custom-event:PUT:/agents/{agentId}/custom-event": false;
  "admin-agents-api-docs:QuickReplies:GET:/agents/quick-replies": false;
  "admin-agents-api-docs:QuickRepliesByAgent:GET:/agents/{agentId}/quick-replies": true;
  "admin-agents-api-docs:CreateMessage:POST:/agents/messages": false;
  "admin-agents-api-docs:deleteMessagebyMessageId:DELETE:/agents/messages/{messageId}": false;
  "admin-agents-api-docs:AgentMessageList:GET:/agents/{agentId}/messages": false;
  "admin-agents-api-docs:AgentIndicatorList:GET:/agents/{agentId}/indicators": false;
  "admin-agents-api-docs:agentLogout:POST:/agents/{agentId}/logout": false;
  "admin-agents-api-docs:GetAgentDialingPatterns:GET:/agent-patterns": false;
  "admin-agents-api-docs:post-agent-patterns-id-transform-phonenumbers:POST:/agent-patterns/{agentpatternId}/transform-phonenumbers": false;
  "admin-agents-api-docs:getAgentStates:GET:/agents-states": false;
  "admin-agents-api-docs:get-agents-extended:GET:/agents/extended": false;
  "admin-agents-api-docs:get-agents-issues:GET:/agents/issues": true;
  "admin-agents-api-docs:get-agent-messages-id:GET:/agent-messages/{messageGroupId}": false;
  "admin-agents-api-docs:get-gents-skills-download:GET:/agents/skills-download": false;
  "admin-agents-api-docs:get_/teams:GET:/teams": false;
  "admin-agents-api-docs:post-teams:POST:/teams": false;
  "admin-agents-api-docs:get-teams-id:GET:/teams/{teamId}": false;
  "admin-agents-api-docs:put-teams-id:PUT:/teams/{teamId}": false;
  "admin-agents-api-docs:TeamsAgents:GET:/teams/agents": false;
  "admin-agents-api-docs:get-teams-id-agents:GET:/teams/{teamId}/agents": false;
  "admin-agents-api-docs:AssignAgentsToTeam:POST:/teams/{teamId}/agents": false;
  "admin-agents-api-docs:RemoveAgentsFromTeam:DELETE:/teams/{teamId}/agents": true;
  "admin-agents-api-docs:get-teams-id-unavailable-codes:GET:/teams/{teamId}/unavailable-codes": false;
  "admin-agents-api-docs:AssignUnavailableCode:POST:/teams/{teamId}/unavailable-codes": false;
  "admin-agents-api-docs:put-teams-id-unavailable-codes:PUT:/teams/{teamId}/unavailable-codes": false;
  "admin-agents-api-docs:RemoveUnavailableCodeTeam:DELETE:/teams/{teamId}/unavailable-codes": false;
  "admin-agents-api-docs:get-access-keys:GET:/access-keys": true;
  "admin-agents-api-docs:post-access-keys:POST:/access-keys": false;
  "admin-agents-api-docs:get-access-keys-id:GET:/access-keys/{accessKeyId}": false;
  "admin-agents-api-docs:delete-access-keys-id:DELETE:/access-keys/{accessKeyId}": false;
  "admin-agents-api-docs:patch-access-keys-id:PATCH:/access-keys/{accessKeyId}": false;
  "admin-agents-api-docs:get-activesupervisors:GET:/activesupervisors": false;
  "admin-agents-api-docs:enhancedCustomerCard:POST:/enhancedcustomercard": false;
  "admin-commitments-api-docs:AgentScheduledCallbacks:GET:/agents/{agentId}/scheduled-callbacks": false;
  "admin-commitments-api-docs:CreateScheduledCallback:POST:/scheduled-callbacks": false;
  "admin-commitments-api-docs:UpdateScheduledCallback:PUT:/scheduled-callbacks/{callbackId}": false;
  "admin-commitments-api-docs:DeleteScheduledCallback:DELETE:/scheduled-callbacks/{callbackId}": false;
  "admin-commitments-api-docs:SkillScheduledCallbacks:GET:/skills/{skillId}/scheduled-callbacks": false;
  "admin-contacts-api-docs:ChatTranscript:GET:/contacts/{contactId}/chat-transcript": false;
  "admin-contacts-api-docs:get-contacts-id-disposition:GET:/contacts/{contactId}/disposition": false;
  "admin-contacts-api-docs:getHistoricalChatTranscript:GET:/contacts/{contactId}/historical-chat-transcript": false;
  "admin-contacts-api-docs:EmailTranscript:GET:/contacts/{contactId}/email-transcript": false;
  "admin-contacts-api-docs:ContactFiles:GET:/contacts/{contactId}/files": false;
  "admin-contacts-api-docs:endAContact:POST:/contacts/{contactId}/end": false;
  "admin-contacts-api-docs:monitorAContactCall:POST:/contacts/{contactId}/monitor": false;
  "admin-contacts-api-docs:recordAContact:POST:/contacts/{contactId}/record": false;
  "admin-contacts-api-docs:post-contacts-id-set-disposition:POST:/contacts/{contactId}/set-disposition": false;
  "admin-contacts-api-docs:AssignTagsContact:POST:/contacts/{contactId}/tags": false;
  "admin-contacts-api-docs:getContactStateDescriptions:GET:/contact-state-descriptions": false;
  "admin-contacts-api-docs:getContactStateById:GET:/contact-state-descriptions/{contactStateId}": false;
  "admin-contacts-api-docs:put-persistent-contacts-id:PUT:/persistent-contacts/{contactId}": false;
  "admin-contacts-api-docs:SignalAContact:POST:/interactions/{contactId}/signal": false;
  "admin-contacts-api-docs:Get-contacts-id-sms-historical-transcript:GET:/contacts/{contactId}/sms-historical-transcript": true;
  "admin-contacts-api-docs:get-contacts-sms-historical-contacts:GET:/contacts/sms-historical-contacts": true;
  "admin-general-api-docs:get-apiversion:GET:/apiversion": false;
  "admin-general-api-docs:get-apiversionreleaseinfo:GET:/apiversionreleaseinfo": false;
  "admin-general-api-docs:BrandingProfiles:GET:/branding-profiles": true;
  "admin-general-api-docs:BusinessUnitInfo:GET:/business-unit": false;
  "admin-general-api-docs:get-business-unit-outbound-routes:GET:/business-unit/outbound-routes": false;
  "admin-general-api-docs:get-agents-id-agent-settings:GET:/agents/{agentId}/agent-settings": false;
  "admin-general-api-docs:GetCountries:GET:/countries": false;
  "admin-general-api-docs:GetsStatesProvinces:GET:/countries/{countryId}/states": false;
  "admin-general-api-docs:DataDefinitions:GET:/data-definitions/data-types": false;
  "admin-general-api-docs:RetrieveAFile:GET:/files": true;
  "admin-general-api-docs:UploadFile:POST:/files": false;
  "admin-general-api-docs:MoveFile:PUT:/files": true;
  "admin-general-api-docs:DeleteFile:DELETE:/files": false;
  "admin-general-api-docs:GetExternalfiles:GET:/files/external": false;
  "admin-general-api-docs:postexternalfiles:POST:/files/external": true;
  "admin-general-api-docs:putexteranlfiles:PUT:/files/external": true;
  "admin-general-api-docs:ReturnFolder:GET:/folders": true;
  "admin-general-api-docs:DeleteFolder:DELETE:/folders": true;
  "admin-general-api-docs:CategoriesAndPriorities:GET:/feedback-categories-and-priorities": false;
  "admin-general-api-docs:GetHiringSources:GET:/hiring-sources": false;
  "admin-general-api-docs:CreateHiringScource:POST:/hiring-sources": true;
  "admin-general-api-docs:get-hours-of-operation:GET:/hours-of-operation": true;
  "admin-general-api-docs:post-hours-of-operation:POST:/hours-of-operation": false;
  "admin-general-api-docs:get-hours-of-operation-identities:GET:/hours-of-operation/identities": false;
  "admin-general-api-docs:get-hours-of-operation-by-id:GET:/hours-of-operation/{hoursOfOperationProfileId}": false;
  "admin-general-api-docs:update-hours-of-operation:PUT:/hours-of-operation/{hoursOfOperationProfileId}": false;
  "admin-general-api-docs:delete-hours-of-operation:DELETE:/hours-of-operation/{hoursOfOperationProfileId}": false;
  "admin-general-api-docs:update-hours-of-operation-skills:PUT:/hours-of-operation/{hoursOfOperationProfileId}/skills": false;
  "admin-general-api-docs:ReturnsLocations:GET:/locations": false;
  "admin-general-api-docs:getMediaTypes:GET:/media-types": false;
  "admin-general-api-docs:getMediaTypeById:GET:/media-types/{mediaTypeId}": false;
  "admin-general-api-docs:MessageTemplates:GET:/message-templates": false;
  "admin-general-api-docs:CreatesMessageTemplate:POST:/message-templates": true;
  "admin-general-api-docs:MessageTemplate:GET:/message-templates/{templateId}": false;
  "admin-general-api-docs:UpdatesMessageTemplate:PUT:/message-templates/{templateId}": false;
  "admin-general-api-docs:getPermissions:GET:/permissions": false;
  "admin-general-api-docs:AgentPermissionsList:GET:/permissions/{agentId}": false;
  "admin-general-api-docs:PhoneCodes:GET:/phone-codes": false;
  "admin-general-api-docs:getPointsOfContact:GET:/points-of-contact": false;
  "admin-general-api-docs:post-points-of-contact:POST:/points-of-contact": false;
  "admin-general-api-docs:getPointOfContactById:GET:/points-of-contact/{pointOfContactId}": false;
  "admin-general-api-docs:put-points-of-contact-id:PUT:/points-of-contact/{pointOfContactId}": false;
  "admin-general-api-docs:GetSecurityProfiles:GET:/security-profiles": false;
  "admin-general-api-docs:GetSecurityProfilesID:GET:/security-profiles/{profileId}": false;
  "admin-general-api-docs:get-script:GET:/scripts": false;
  "admin-general-api-docs:create-script:POST:/scripts": false;
  "admin-general-api-docs:delete-script:DELETE:/scripts": true;
  "admin-general-api-docs:update-script:PUT:/scripts": true;
  "admin-general-api-docs:get-scripts-id:GET:/scripts/{scriptId}": false;
  "admin-general-api-docs:get-search-script:GET:/scripts/search": false;
  "admin-general-api-docs:get_/scripts/files:GET:/scripts/files": true;
  "admin-general-api-docs:post_/scripts/files:POST:/scripts/files": false;
  "admin-general-api-docs:put_/scripts/files:PUT:/scripts/files": false;
  "admin-general-api-docs:delete_/scripts/files:DELETE:/scripts/files": true;
  "admin-general-api-docs:get_/scripts/files/search:GET:/scripts/files/search": true;
  "admin-general-api-docs:post-kick-script:POST:/scripts/kick": true;
  "admin-general-api-docs:get-script-history:GET:/scripts/historyByName": true;
  "admin-general-api-docs:post-start-script:POST:/scripts/start": true;
  "admin-general-api-docs:get-scripts-folders:GET:/script-folders": false;
  "admin-general-api-docs:getServerTime:GET:/server-time": false;
  "admin-general-api-docs:ReturnsTags:GET:/tags": false;
  "admin-general-api-docs:CreatesTag:POST:/tags": true;
  "admin-general-api-docs:GetTagDetailsById:GET:/tags/{tagId}": false;
  "admin-general-api-docs:UpdatesTag:PUT:/tags/{tagId}": false;
  "admin-general-api-docs:get-suppressed-contact:GET:/suppressed-contact": false;
  "admin-general-api-docs:post-suppressed-contact:POST:/suppressed-contact": false;
  "admin-general-api-docs:Timezones:GET:/timezones": false;
  "admin-general-api-docs:get-business-unit-time-zones:GET:/business-unit/time-zones": false;
  "admin-general-api-docs:put-business-unit-time-zones:PUT:/business-unit/time-zones": false;
  "admin-general-api-docs:get-unavailable-codes:GET:/unavailable-codes": false;
  "admin-general-api-docs:post-unavailable-codes:POST:/unavailable-codes": false;
  "admin-general-api-docs:get-phone-numbers:GET:/phone-numbers": false;
  "admin-general-api-docs:get-suppressed-contact-id:GET:/suppressed-contact/{suppressedContactId}": false;
  "admin-general-api-docs:put-suppressed-contact-id:PUT:/suppressed-contact/{suppressedContactId}": false;
  "admin-general-api-docs:delete-suppressed-contact-id:DELETE:/suppressed-contact/{suppressedContactId}": false;
  "admin-groups-api-docs:getgroups:GET:/groups": false;
  "admin-groups-api-docs:postgroups:POST:/groups": false;
  "admin-groups-api-docs:getgroupsbygroupid:GET:/groups/{groupId}": false;
  "admin-groups-api-docs:putgroupsbygroupid:PUT:/groups/{groupId}": true;
  "admin-groups-api-docs:GetGroupAgent:GET:/groups/{groupId}/agents": false;
  "admin-groups-api-docs:blank:POST:/groups/{groupId}/agents": false;
  "admin-groups-api-docs:deleteGroupAgents:DELETE:/groups/{groupId}/agents": false;
  "admin-lists-api-docs:DncGroupsResultSet:GET:/dnc-groups": false;
  "admin-lists-api-docs:post-dnc-groups:POST:/dnc-groups": false;
  "admin-lists-api-docs:GetDNCgroupByID:GET:/dnc-groups/{groupId}": false;
  "admin-lists-api-docs:PutDNCgroupByID:PUT:/dnc-groups/{groupId}": false;
  "admin-lists-api-docs:GetDncGroupsContribSkills:GET:/dnc-groups/{groupId}/contributing-skills": false;
  "admin-lists-api-docs:PostDncGroupsContribSkillsById:POST:/dnc-groups/{groupId}/contributing-skills/{skillId}": false;
  "admin-lists-api-docs:DeleteDncGroupsContribSkillsById:DELETE:/dnc-groups/{groupId}/contributing-skills/{skillId}": false;
  "admin-lists-api-docs:DncGroupsRecords:GET:/dnc-groups/{groupId}/records": false;
  "admin-lists-api-docs:CreateDncGroupRecords:POST:/dnc-groups/{groupId}/records": false;
  "admin-lists-api-docs:DeleteDncGroupRecords:DELETE:/dnc-groups/{groupId}/records": false;
  "admin-lists-api-docs:GetDncGroupsScrubbedSkills:GET:/dnc-groups/{groupId}/scrubbed-skills": false;
  "admin-lists-api-docs:PostDncGroupsScrubbedSkills:POST:/dnc-groups/{groupId}/scrubbed-skills/{skillId}": false;
  "admin-lists-api-docs:DeleteDncGroupsScrubbedSkills:DELETE:/dnc-groups/{groupId}/scrubbed-skills/{skillId}": false;
  "admin-lists-api-docs:ReturnAListOfGroupsByPhonenumber:POST:/dnc-groups/search": true;
  "admin-lists-api-docs:get-dnis:GET:/dnis": false;
  "admin-lists-api-docs:ReturnCallList:GET:/lists/call-lists": false;
  "admin-lists-api-docs:post_/lists/call-lists:POST:/lists/call-lists": true;
  "admin-lists-api-docs:DownloadACallList:GET:/lists/call-lists/{listId}": false;
  "admin-lists-api-docs:delete_/lists/call-lists/{listId}:DELETE:/lists/call-lists/{listId}": false;
  "admin-lists-api-docs:DownloadACallListAttempts:GET:/lists/call-lists/{listId}/attempts": false;
  "admin-lists-api-docs:UploadingCallingList:POST:/lists/call-lists/{listId}/upload": false;
  "admin-lists-api-docs:delete-lists-call-lists-id-removeProspects:DELETE:/lists/call-lists/{sourceName}/removeProspects": false;
  "admin-lists-api-docs:GetListJob:GET:/lists/call-lists/jobs": true;
  "admin-lists-api-docs:GetCallingList:GET:/lists/call-lists/jobs/{jobId}": false;
  "admin-lists-api-docs:CancelList:DELETE:/lists/call-lists/jobs/{jobId}": false;
  "admin-routingattributes-api-docs:getRoutingAttributes:GET:/routing-attributes": true;
  "admin-routingattributes-api-docs:getRoutingAttribute:GET:/routing-attributes/{routingAttributeNo}": false;
  "admin-routingattributes-api-docs:addUpdateRoutingAttribute:PUT:/routing-attributes/{routingAttributeNo}": false;
  "admin-routingattributes-api-docs:getRoutingAttributeAgents:GET:/routing-attributes/{routingAttributeNo}/agents": true;
  "admin-routingattributes-api-docs:getAgentRoutingAttributes:GET:/agents/{agentNo}/routing-attributes": true;
  "admin-routingattributes-api-docs:updateAgentRoutingAttributes:PUT:/agents/{agentNo}/routing-attributes": false;
  "admin-routingattributes-api-docs:removeAgentRoutingAttribute:DELETE:/agents/routing-attributes/{routingAttributeNo}": false;
  "admin-scriptschedules-api-docs:get-script-schedules:GET:/script-schedules": true;
  "admin-scriptschedules-api-docs:get-script-schedules-id:GET:/script-schedules/{scriptScheduleId}": false;
  "admin-scriptschedules-api-docs:get-script-schedules-id-audit-history:GET:/script-schedules/{scriptScheduleId}/audit-history": true;
  "admin-scriptschedules-api-docs:get-script-schedules-scripts:GET:/script-schedules/scripts": true;
  "admin-scriptschedules-api-docs:get-script-schedules-skills:GET:/script-schedules/skills": true;
  "admin-skills-api-docs:get-campaigns:GET:/campaigns": false;
  "admin-skills-api-docs:post-campaigns:POST:/campaigns": false;
  "admin-skills-api-docs:get-campaigns-id:GET:/campaigns/{campaignId}": false;
  "admin-skills-api-docs:put-campaigns-id:PUT:/campaigns/{campaignId}": false;
  "admin-skills-api-docs:get-campaigns-id-skills-unassigned:GET:/campaigns/{campaignId}/skills/unassigned": false;
  "admin-skills-api-docs:patch-campaigns-id-status:PATCH:/campaigns/{campaignId}/status": false;
  "admin-skills-api-docs:get-campaigns-id-audit-history:GET:/campaigns/{campaignId}/audit-history": false;
  "admin-skills-api-docs:get-dispositions-skills:GET:/dispositions/skills": false;
  "admin-skills-api-docs:get-dispositions-id:GET:/dispositions/{dispositionId}": false;
  "admin-skills-api-docs:put-dispositions-id:PUT:/dispositions/{dispositionId}": false;
  "admin-skills-api-docs:get-dispositions-id-skills:GET:/dispositions/{dispositionId}/skills": false;
  "admin-skills-api-docs:DispostionClassifications:GET:/dispositions/classifications": false;
  "admin-skills-api-docs:patch-status-by-dispositions-id:PATCH:/dispositions/{dispositionId}/status": false;
  "admin-skills-api-docs:get-dispositions-id-audit-history:GET:/dispositions/{dispositionId}/audit-history": false;
  "admin-skills-api-docs:get-skills:GET:/skills": false;
  "admin-skills-api-docs:post-skills:POST:/skills": false;
  "admin-skills-api-docs:get-skills-parameters:GET:/skills/parameters": false;
  "admin-skills-api-docs:get-skills-id:GET:/skills/{skillId}": false;
  "admin-skills-api-docs:put-skills-id:PUT:/skills/{skillId}": false;
  "admin-skills-api-docs:get-skills-id-parameters:GET:/skills/{skillId}/parameters": false;
  "admin-skills-api-docs:get-skills-id-thank-you-page:GET:/skills/{skillId}/thank-you-page": false;
  "admin-skills-api-docs:post_/skills/{skillId}/start:POST:/skills/{skillId}/start": false;
  "admin-skills-api-docs:post_/skills/{skillId}/stop:POST:/skills/{skillId}/stop": false;
  "admin-skills-api-docs:getAgentsAllSkills:GET:/skills/agents": true;
  "admin-skills-api-docs:getAgentsBySkillId:GET:/skills/{skillId}/agents": false;
  "admin-skills-api-docs:AgentAssignmentsSkill:POST:/skills/{skillId}/agents": false;
  "admin-skills-api-docs:ModifyAssignmentsSkill:PUT:/skills/{skillId}/agents": false;
  "admin-skills-api-docs:RemoveAgentAssignmentsSkill:DELETE:/skills/{skillId}/agents": false;
  "admin-skills-api-docs:delete-skills-id-agents-id:DELETE:/skills/{skillId}/agents/{agentId}": false;
  "admin-skills-api-docs:GetAgentsThatAreNotAssignedToSkill:GET:/skills/{skillId}/agents/unassigned": false;
  "admin-skills-api-docs:SKILLCALLDATA:GET:/skills/call-data": false;
  "admin-skills-api-docs:SkillCallData:GET:/skills/{skillId}/call-data": false;
  "admin-skills-api-docs:DispositionList:GET:/skills/{skillId}/dispositions": false;
  "admin-skills-api-docs:DispositionsNotAssignedSkill:GET:/skills/{skillId}/dispositions/unassigned": false;
  "admin-skills-api-docs:GetTagsSkill:GET:/skills/{skillId}/tags": false;
  "admin-skills-api-docs:AssignTagSkill:POST:/skills/{skillId}/tags": false;
  "admin-skills-api-docs:RemoveTagsSkill:DELETE:/skills/{skillId}/tags": false;
  "admin-skills-api-docs:get-skills-id-parameters-general-settings:GET:/skills/{skillId}/parameters/general-settings": false;
  "admin-skills-api-docs:put-skills-id-parameters-general-settings:PUT:/skills/{skillId}/parameters/general-settings": false;
  "admin-skills-api-docs:get-skills-id-parameters-cpa-management:GET:/skills/{skillId}/parameters/cpa-management": false;
  "admin-skills-api-docs:put-skills-id-parameters-cpa-management:PUT:/skills/{skillId}/parameters/cpa-management": false;
  "admin-skills-api-docs:get-skills-id-parameters-xs-settings:GET:/skills/{skillId}/parameters/xs-settings": false;
  "admin-skills-api-docs:put-skills-id-parameters-xs-settings:PUT:/skills/{skillId}/parameters/xs-settings": false;
  "admin-skills-api-docs:get-skills-id-parameters-delivery-preferences:GET:/skills/{skillId}/parameters/delivery-preferences": false;
  "admin-skills-api-docs:put-skills-id-parameters-delivery-preferences:PUT:/skills/{skillId}/parameters/delivery-preferences": false;
  "admin-skills-api-docs:get-skills-id-parameters-retry-settings:GET:/skills/{skillId}/parameters/retry-settings": false;
  "admin-skills-api-docs:put-skills-id-parameters-retry-settings:PUT:/skills/{skillId}/parameters/retry-settings": false;
  "admin-skills-api-docs:get-skills-id-parameters-schedule-settings:GET:/skills/{skillId}/parameters/schedule-settings": false;
  "admin-skills-api-docs:put-skills-id-parameters-schedule-settings:PUT:/skills/{skillId}/parameters/schedule-settings": false;
  "admin-skills-api-docs:put-skills-id-parameters-cadence-settings:PUT:/skills/{skillId}/parameters/cadence-settings": false;
  "admin-skills-api-docs:get-skills-id-parameters-time-zones:GET:/skills/{skillId}/parameters/time-zones": false;
  "admin-skills-api-docs:put-skills-id-parameters-time-zones:PUT:/skills/{skillId}/parameters/time-zones": false;
  "admin-skills-api-docs:put-skills-id-parameters-list-management:PUT:/skills/{skillId}/parameters/list-management": false;
  "admin-skills-api-docs:get-campaigns-id-skills:GET:/campaigns/{campaignId}/skills": false;
  "admin-skills-api-docs:post-campaigns-id-skills:POST:/campaigns/{campaignId}/skills": false;
  "admin-skills-api-docs:delete-campaigns-id-skills:DELETE:/campaigns/{campaignId}/skills": false;
  "admin-skills-api-docs:get-dispositions:GET:/dispositions": false;
  "admin-skills-api-docs:post-dispositions:POST:/dispositions": false;
  "admin-stationprofiles-api-docs:get-station-profiles:GET:/station-profiles": false;
  "admin-stationprofiles-api-docs:post-station-profiles:POST:/station-profiles": false;
  "admin-stationprofiles-api-docs:get-station-profiles-id:GET:/station-profiles/{stationProfileId}": false;
  "admin-stationprofiles-api-docs:put-station-profiles-id:PUT:/station-profiles/{stationProfileId}": false;
  "admin-stationprofiles-api-docs:delete-station-profiles-id:DELETE:/station-profiles/{stationProfileId}": false;
  "admin-stationprofiles-api-docs:get-station-profiles-id-audit-history:GET:/station-profiles/{stationProfileId}/audit-history": true;
  "admin-stations-api-docs:get-stations:GET:/stations": false;
  "admin-stations-api-docs:create-station:POST:/stations": false;
  "admin-stations-api-docs:get-station-by-id:GET:/stations/{stationId}": false;
  "admin-stations-api-docs:update-station:PUT:/stations/{stationId}": false;
  "admin-stations-api-docs:get-stations-audit-history:GET:/stations/{stationId}/audit-history": false;
  "admin-stations-api-docs:get-stations-login-history:GET:/stations/{stationId}/login-history": false;
  "admin-stations-api-docs:update-station-status:PATCH:/stations/{stationId}/status": false;
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-audit-history:GET:/unavailable-codes/{unavailableCodeId}/audit-history": true;
  "admin-unavailablecodes-api-docs:patch-status-by-unavailable-codes-id:PATCH:/unavailable-codes/{unavailableCodeId}/status": true;
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams:GET:/unavailable-codes/{unavailableCodeId}/teams": false;
  "admin-unavailablecodes-api-docs:post-unavailable-codes-id-teams:POST:/unavailable-codes/{unavailableCodeId}/teams": true;
  "admin-unavailablecodes-api-docs:put-unavailable-codes-id-teams:PUT:/unavailable-codes/{unavailableCodeId}/teams": false;
  "admin-unavailablecodes-api-docs:delete-unavailable-codes-id-teams:DELETE:/unavailable-codes/{unavailableCodeId}/teams": true;
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams-unassigned:GET:/unavailable-codes/{unavailableCodeId}/teams/unassigned": false;
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id:GET:/unavailable-codes/{unavailableCodeId}": false;
  "admin-unavailablecodes-api-docs:put-unavailable-codes-id:PUT:/unavailable-codes/{unavailableCodeId}": false;
  "admin-workflowdata-api-docs:list-workflow-data:GET:/workflow-data/list/{activeFlag}": false;
  "admin-workflowdata-api-docs:get-workflow-data:GET:/workflow-data": false;
  "admin-workflowdata-api-docs:create-workflow-data:POST:/workflow-data": false;
  "admin-workflowdata-api-docs:update-workflow-data:PUT:/workflow-data": false;
  "admin-workflowdata-api-docs:get-workflow-data-identities:GET:/workflow-data/identities": false;
  "admin-workflowdata-api-docs:get-workflow-data-id:GET:/workflow-data/{workFlowDataId}": false;
  "admin-workflowdata-api-docs:deactivate-workflow-data:PUT:/workflow-data/{workflowDataId}/deactivate": false;
  "admin-workflowdata-api-docs:activate-workflow-data:PUT:/workflow-data/{workflowDataId}/activate": false;
  "agentphone-api-docs:dialAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/dial": false;
  "agentphone-api-docs:muteAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/mute": false;
  "agentphone-api-docs:unmuteAgentLeg:POST:/agent-sessions/{sessionId}/agent-phone/unmute": false;
  "agentphone-api-docs:disconnectAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/end": false;
  "chatrequests-api-docs:addChatContact:POST:/agent-sessions/{sessionId}/interactions/add-chat": false;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-add-text:POST:/agent-sessions/{sessionId}/interactions/add-text": true;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-accept:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept": false;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-reject:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject": false;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-end:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": false;
  "chatrequests-api-docs:activateChatContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate-chat": false;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-send-chat-text:POST:/agent-sessions/{sessionId}/interactions/{contactId}/send-chat-text": true;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-agent": true;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-skill": true;
  "chatrequests-api-docs:AgentTyping:POST:/agent-sessions/{sessionId}/interactions/{contactId}/typing": false;
  "emails-api-docs:AddEmail:POST:/agent-sessions/{sessionId}/interactions/add-email": false;
  "emails-api-docs:EmailOutbound:POST:/agent-sessions/{sessionId}/interactions/email-outbound": true;
  "emails-api-docs:post-agent-sessions-sessionId-interactions-contactId-email-forward:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-forward": false;
  "emails-api-docs:EmailReply:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-reply": false;
  "emails-api-docs:EmailSend:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-send": false;
  "emails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": false;
  "emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-agent": false;
  "emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-skill": false;
  "emails-api-docs:ParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-park": false;
  "emails-api-docs:UnParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-unpark": false;
  "emails-api-docs:PreveiwEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-preview": false;
  "emails-api-docs:RestoreEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-restore": false;
  "emails-api-docs:post-agent-sessions-id-interactions-id-email-save-draft:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-save-draft": false;
  "personalcon-api-docs:dialerLogon:POST:/agent-sessions/{sessionId}/dialer-login": true;
  "personalcon-api-docs:dialerLogout:POST:/agent-sessions/{sessionId}/dialer-logout": false;
  "personalcon-api-docs:PersonalConSnoozes:POST:/agent-sessions/{sessionId}/interactions/{contactId}/snooze": false;
  "phonecalls-api-docs:agentTransfer:POST:/agent-sessions/{sessionId}/dial-agent": false;
  "phonecalls-api-docs:dialPhone:POST:/agent-sessions/{sessionId}/dial-phone": false;
  "phonecalls-api-docs:dialSkill:POST:/agent-sessions/{sessionId}/dial-skill": false;
  "phonecalls-api-docs:SendDtmfTone:POST:/agent-sessions/{sessionId}/send-dtmf": true;
  "phonecalls-api-docs:dialAgentConsult:POST:/agent-sessions/{sessionId}/consult-agent": false;
  "phonecalls-api-docs:transferCall:POST:/agent-sessions/{sessionId}/interactions/transfer-calls": false;
  "phonecalls-api-docs:conferenceCall:POST:/agent-sessions/{sessionId}/interactions/conference-calls": false;
  "phonecalls-api-docs:acceptConsultRequest:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept-consult": false;
  "phonecalls-api-docs:holdCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold": false;
  "phonecalls-api-docs:resumeCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume": false;
  "phonecalls-api-docs:endCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": false;
  "phonecalls-api-docs:AmdOverride:POST:/agent-sessions/{sessionId}/interactions/{contactId}/amd-override": true;
  "phonecalls-api-docs:recordACall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/record": false;
  "phonecalls-api-docs:maskACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/mask": false;
  "phonecalls-api-docs:stopMaskingACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/unmask": false;
  "phonecalls-api-docs:IndependentDialed:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial": false;
  "phonecalls-api-docs:IndependentDialOutcome:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial-outcome": false;
  "scheduledcallbacks-api-docs:DialCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/dial": false;
  "scheduledcallbacks-api-docs:RescheduleCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/reschedule": true;
  "scheduledcallbacks-api-docs:agentinteractionscallbackcancel:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/cancel": false;
  "sessions-api-docs:startSession:POST:/agent-sessions": true;
  "sessions-api-docs:joinSession:POST:/agent-sessions/join": true;
  "sessions-api-docs:endSession:DELETE:/agent-sessions/{sessionId}": false;
  "sessions-api-docs:getNextEvent:GET:/agent-sessions/{sessionId}/get-next-event": true;
  "sessions-api-docs:ContinueReskill:POST:/agent-sessions/{sessionId}/continue-reskill": false;
  "sessions-api-docs:DispositionContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/disposition": false;
  "sessions-api-docs:setAgentStatus:POST:/agent-sessions/{sessionId}/state": true;
  "sessions-api-docs:SendFeedback:POST:/agent-sessions/{sessionId}/submit-feedback": true;
  "sessions-api-docs:PostCustomData:POST:/agent-sessions/{sessionId}/interactions/{contactId}/custom-data": false;
  "sessions-api-docs:agentAddContact:POST:/agent-sessions/{sessionId}/add-contact": false;
  "sessions-api-docs:post-agent-sessions-id-interactions-sms-outbound:POST:/agent-sessions/{sessionId}/interactions/sms-outbound": true;
  "sessions-api-docs:post-agent-sessions-id-interactions-id-activate:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate": false;
  "sessions-api-docs:holdASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold": false;
  "sessions-api-docs:resumeASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume": false;
  "sessions-api-docs:endASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": false;
  "sessions-api-docs:acceptSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept": false;
  "sessions-api-docs:rejectSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject": false;
  "supervisor-api-docs:contactMonitor:POST:/agent-sessions/{sessionId}/monitor": true;
  "supervisor-api-docs:contactCoach:POST:/agent-sessions/{sessionId}/coach": false;
  "supervisor-api-docs:contactBarge:POST:/agent-sessions/{sessionId}/barge": false;
  "supervisor-api-docs:post-agent-sessions-sessionId-take-over:POST:/agent-sessions/{sessionId}/take-over": false;
  "voicemails-api-docs:PlayVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/play-voicemail": false;
  "voicemails-api-docs:PauseVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/pause-voicemail": false;
  "voicemails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": false;
  "voicemails-api-docs:VoicemailTransferAgent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-agent": true;
  "voicemails-api-docs:VoicemailTransferSkill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-skill": true;
  "workitems-api-docs:acceptWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept": false;
  "workitems-api-docs:rejectWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject": false;
  "workitems-api-docs:holdAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold": false;
  "workitems-api-docs:resumeAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume": false;
  "workitems-api-docs:endAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": false;
  "authentication-authenticate-api-docs:passwordReset:PUT:/agents/{agentId}/reset-password": false;
  "authentication-authenticate-api-docs:PasswordChange:PUT:/agents/change-password": true;
  "authentication-globalauthentication-api-docs:getOIDCConfig:GET:/.well-known/openid-configuration": false;
  "authentication-globalauthentication-api-docs:getCXoneConfig:GET:/.well-known/cxone-configuration": true;
  "authentication-globalauthentication-api-docs:get_/auth/jwks:GET:/auth/jwks": false;
  "authentication-globalauthentication-api-docs:getAuthAuthorize:GET:/auth/authorize": false;
  "authentication-globalauthentication-api-docs:authAuthorize:POST:/auth/authorize": false;
  "authentication-globalauthentication-api-docs:getToken:POST:/auth/token": false;
  "authentication-globalauthentication-api-docs:get_/auth/authorize/logout:GET:/auth/authorize/logout": false;
  "authentication-globalauthentication-api-docs:post_/auth/authorize/logout:POST:/auth/authorize/logout": false;
  "authentication-globalauthentication-api-docs:get_/auth/userinfo:GET:/auth/userinfo": false;
  "authentication-globalauthentication-api-docs:post_/auth/userinfo:POST:/auth/userinfo": false;
  "authentication-globalauthentication-api-docs:getAccountAccessAssociations:GET:/account-access/v1/associations": false;
  "authentication-integrations-api-docs:createApplication:POST:/applications": false;
  "authentication-integrations-api-docs:listApplication:GET:/applications": false;
  "authentication-integrations-api-docs:viewApplication:GET:/applications/{applicationId}": false;
  "authentication-integrations-api-docs:patchApplication:PATCH:/applications/{applicationId}": false;
  "authentication-integrations-api-docs:deleteApplication:DELETE:/applications/{applicationId}": false;
  "authentication-integrations-api-docs:enableApplication:POST:/applications/{applicationId}-enable": false;
  "authentication-integrations-api-docs:disableApplication:POST:/applications/{applicationId}-disable": false;
  "authentication-universalapplication-api-docs:redirectToGA:GET:/GALandingPage": false;
  "authentication-universalapplication-api-docs:getCallback:GET:/callback": true;
  "businessdata-businessdata-api-docs:updateBusinessDataFieldForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}": false;
  "businessdata-businessdata-api-docs:updateBusinessDataFieldAtSegmentLevelForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}/segment/{segmentId}": false;
  "cxone-accesskeys-api-docs:CreateAnAccessKeyForAUser:POST:/access-key-management/v1/access-keys": false;
  "cxone-accesskeys-api-docs:Updates an access key for a user:PATCH:/access-key-management/v1/access-keys": true;
  "cxone-accesskeys-api-docs:ReturnsAListOfAccessKeys:GET:/access-key-management/v1/access-keys": false;
  "cxone-accesskeys-api-docs:ReturnsAnAccessKeyConfig:GET:/access-key-management/v1/access-keys/{accessKeyId}": false;
  "cxone-accesskeys-api-docs:DeletesAnAccessKey:DELETE:/access-key-management/v1/access-keys/{accessKeyId}": false;
  "cxone-authorizationmanagement-api-docs:searchRole:POST:/authorization/v1/roles/search": false;
  "cxone-billing-api-docs:submitProductUsages:POST:/billing/v1.0/product-usage": false;
  "cxone-billing-api-docs:getProductUsageById:GET:/billing/v1.0/product-usage/{productTypeId}": true;
  "cxone-correlationmanagement-api-docs:createCorrelation:POST:/correlation-manager/v1/correlations": false;
  "cxone-correlationmanagement-api-docs:updateCorrelation:PUT:/correlation-manager/v1/correlations/{correlationId}/{entityId}": false;
  "cxone-correlationmanagement-api-docs:searchCorrelations:POST:/correlation-manager/v1/correlations/search": false;
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/assigned:GET:/agent-profiles/v1/assigned": false;
  "cxone-desktopprofiles-api-docs:AssignableConfigurations:GET:/agent-profiles/v1/configurations": false;
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/search:POST:/agent-profiles/v1/profiles/search": false;
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}:GET:/agent-profiles/v1/profiles/{id}": false;
  "cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/{id}:PUT:/agent-profiles/v1/profiles/{id}": false;
  "cxone-desktopprofiles-api-docs:AgentProfile:GET:/agent-profiles/v1/profiles": false;
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles:POST:/agent-profiles/v1/profiles": false;
  "cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/status:PUT:/agent-profiles/v1/profiles/status": false;
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}/teams:GET:/agent-profiles/v1/profiles/{id}/teams": false;
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/{id}/teams:POST:/agent-profiles/v1/profiles/{id}/teams": false;
  "cxone-desktopprofiles-api-docs:delete_/agent-profiles/v1/profiles/{id}/teams:DELETE:/agent-profiles/v1/profiles/{id}/teams": false;
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/teams/search:POST:/agent-profiles/v1/profiles/teams/search": false;
  "cxone-division-api-docs:post_/division-management/v1/division:POST:/division-management/v1/division": false;
  "cxone-division-api-docs:put_/division-management/v1/division:PUT:/division-management/v1/division": false;
  "cxone-division-api-docs:get_/division-management/v1/division/{divisionId}:GET:/division-management/v1/division/{divisionId}": false;
  "cxone-division-api-docs:post_/division-management/v1/division/search:POST:/division-management/v1/division/search": false;
  "cxone-division-api-docs:post_/division-management/v1/division/identities:POST:/division-management/v1/division/identities": false;
  "cxone-division-api-docs:get_/division-management/v1/division/{divisionId}/getAllBillingCodes:GET:/division-management/v1/division/{divisionId}/getAllBillingCodes": false;
  "cxone-division-api-docs:get_/division-management/v1/division/billingCode/{billingCode}/validate:GET:/division-management/v1/division/billingCode/{billingCode}/validate": false;
  "cxone-documents-api-docs:createKnowledgeHubConfiguration:POST:/eai-knowledge-hub-services/ingestion-service/v1/documents": false;
  "cxone-documents-api-docs:getDocumentSnapshot:POST:/eai-knowledge-hub-services/ingestion-service/v1/{khId}/documents/snapshot": false;
  "cxone-exportapi-api-docs:exportCopilotKBTable:POST:/observabilitydashboard/v2/tables/Copilot/KBTable/export-data": false;
  "cxone-exportapi-api-docs:exportCopilotAQTable:POST:/observabilitydashboard/v2/tables/Copilot/AQTable/export-data": false;
  "cxone-exportapi-api-docs:exportCopilotASTable:POST:/observabilitydashboard/v2/tables/Copilot/ASTable/export-data": false;
  "cxone-exportapi-api-docs:exportAutopilotKnowledgeGRTable:POST:/observabilitydashboard/v2/tables/AutopilotKnowledge/GRTable/export-data": false;
  "cxone-exportapi-api-docs:exportAutopilotGRTable:POST:/observabilitydashboard/v2/tables/autopilot/GRTable/export-data": false;
  "cxone-scim-api-docs:searchUser:GET:/scim/v2/Users": true;
  "cxone-scim-api-docs:registerScimUser:POST:/scim/v2/Users": false;
  "cxone-scim-api-docs:getScimUserById:GET:/scim/v2/Users/{userId}": false;
  "cxone-scim-api-docs:updateScimUser:PUT:/scim/v2/Users/{userId}": false;
  "cxone-scim-api-docs:updateScimUserPatch:PATCH:/scim/v2/Users/{userId}": false;
  "cxone-scim-api-docs:getSchemas:GET:/scim/v2/Schemas": false;
  "cxone-scim-api-docs:get-basic-auth-Users:GET:/basic-auth/scim/v2/Users": true;
  "cxone-scim-api-docs:post-basic-auth-users:POST:/basic-auth/scim/v2/Users": false;
  "cxone-scim-api-docs:get-basicauth-ScimUserbyID:GET:/basic-auth/scim/v2/Users/{userId}": false;
  "cxone-scim-api-docs:put-basicauth-ScimUserbyID:PUT:/basic-auth/scim/v2/Users/{userId}": false;
  "cxone-scim-api-docs:patch-basic-auth-ScimUserbyID:PATCH:/basic-auth/scim/v2/Users/{userId}": false;
  "cxone-scim-api-docs:get-basic-auth-Schemas:GET:/basic-auth/scim/v2/Schemas": false;
  "cxone-usermanagement-api-docs:createTeam:POST:/user-management/v3/teams": false;
  "cxone-usermanagement-api-docs:updateTeam:PUT:/user-management/v3/teams": false;
  "cxone-usermanagement-api-docs:getTeamById:GET:/user-management/v3/teams/{teamId}": false;
  "cxone-usermanagement-api-docs:getTeamsByCriteria:POST:/user-management/v4/teams/search": false;
  "cxone-usermanagement-api-docs:getUserList:GET:/user-management/v1/users": false;
  "cxone-usermanagement-api-docs:registerUserV1:POST:/user-management/v1/users": false;
  "cxone-usermanagement-api-docs:updateUserV1:PUT:/user-management/v1/users": false;
  "cxone-usermanagement-api-docs:deactivateUser:POST:/user-management/v1/users/deactivate": false;
  "cxone-usermanagement-api-docs:getUserByIdV3:GET:/user-management/v3/users/{userId}": false;
  "cxone-usermanagement-api-docs:reviveUser:POST:/user-management/v1/users/{userId}/revive": false;
  "cxone-usermanagement-api-docs:getUsersByCriteria:POST:/user-management/v2/users/search": false;
  "cxone-usermanagement-api-docs:getUserIdentityList:GET:/user-management/v2/users/identities": false;
  "cxone-usermanagement-api-docs:inviteUserByEmail:POST:/user-management/v2/users/inviteByEmail": false;
  "cxone-usermanagement-api-docs:inviteUserById:POST:/user-management/v2/users/inviteById": false;
  "cxone-usermanagement-api-docs:getUserIdentity:GET:/user-management/v1/users/{userId}/identities": false;
  "cxone-usermanagement-api-docs:assignAuthenticatorV1:PUT:/user-management/v1/users/{userId}/login-authenticator": false;
  "dataextraction-dataextraction-api-docs:getAllJobs:GET:/data-extraction/v1/jobs": false;
  "dataextraction-dataextraction-api-docs:extractData:POST:/data-extraction/v1/jobs": false;
  "dataextraction-dataextraction-api-docs:getJobStatus:GET:/data-extraction/v1/jobs/{jobId}": false;
  "digital-attachment-api-docs:post_attachments_temporary:POST:/attachments/temporary": false;
  "digital-channel-api-docs:get-external-templates:GET:/channels/{channelId}/external-platform-templates": false;
  "digital-channel-api-docs:create-update-Channel:POST:/channels": false;
  "digital-channel-api-docs:get-Channels:GET:/channels": false;
  "digital-channel-api-docs:deleteChannel:DELETE:/channels/{channelId}": false;
  "digital-contact-api-docs:searchContacts:GET:/contacts": false;
  "digital-contact-api-docs:getContact:GET:/contacts/{contactNumber}": false;
  "digital-contact-api-docs:updateContact:PUT:/contacts/{contactNumber}": false;
  "digital-contact-api-docs:create-contacts-contactnumber-abandon:POST:/contacts/{contactNumber}/abandon": false;
  "digital-contact-api-docs:getContactDetailPagination:GET:/contacts/{contactNumber}/detail/pagination": false;
  "digital-contact-api-docs:getContactMessages:GET:/contacts/{contactNumber}/messages": false;
  "digital-contact-api-docs:changeContactInboxAssignee:PUT:/contacts/{contactNumber}/inbox-assignment": false;
  "digital-contact-api-docs:unassignContactInboxAssignee:DELETE:/contacts/{contactNumber}/inbox-assignment": false;
  "digital-contact-api-docs:setContactCustomFieldValues:PUT:/contacts/{contactNumber}/custom-fields": false;
  "digital-contact-api-docs:removeContactCustomFieldValue:DELETE:/contacts/{contactNumber}/custom-fields/{customFieldIdentifier}": false;
  "digital-contact-api-docs:changeContactRoutingQueue:PUT:/contacts/{contactNumber}/routing-queue": false;
  "digital-contact-api-docs:updateContactRoutingProperties:PUT:/contacts/{contactNumber}/routing-properties": false;
  "digital-contact-api-docs:sendContactTranscript:POST:/contacts/{contactNumber}/transcript": false;
  "digital-contact-api-docs:create-contacts-agent-contacts-close:PUT:/contacts/{contactNumber}/agent-contacts/{agentContactId}/close": false;
  "digital-contact-api-docs:changeContactStatus:PUT:/contacts/{contactNumber}/status": false;
  "digital-customer-api-docs:searchCustomers:GET:/customers": false;
  "digital-customer-api-docs:getCustomer:GET:/customers/{customerId}": false;
  "digital-customer-api-docs:getCustomerNotes:GET:/customers/{customerId}/notes": false;
  "digital-customer-api-docs:createCustomerNote:POST:/customers/{customerId}/notes": false;
  "digital-customer-api-docs:updateCustomerNote:PUT:/customers/{customerId}/notes/{noteId}": false;
  "digital-customer-api-docs:deleteCustomerNote:DELETE:/customers/{customerId}/notes/{noteId}": false;
  "digital-customer-api-docs:mergeCustomer:PUT:/customers/{customerId}/merge": false;
  "digital-customer-api-docs:removeCustomerCustomFieldValue:DELETE:/customers/{customerId}/custom-fields/{customFieldIdentifier}": false;
  "digital-customer-api-docs:updateCustomerCustomFields:PUT:/customers/{customerId}/custom-fields": false;
  "digital-customfields-api-docs:getContactCustomFieldDefinitions:GET:/consumer-contact-custom-fields": false;
  "digital-customfields-api-docs:getCustomerCustomFieldDefinitions:GET:/customers/custom-field-definitions": false;
  "digital-customfields-api-docs:createOrUpdateCustomerCustomFieldDefinition:PUT:/customers/custom-field-definitions": false;
  "digital-message-api-docs:channels-channelId-createmessage:POST:/channels/{channelId}/messages": false;
  "digital-message-api-docs:updateMessageStatus:PUT:/channels/{channelId}/messages/{messageIdOnExternalPlatform}/status": false;
  "digital-message-api-docs:sendOutboundMessage:POST:/channels/{channelId}/outbound": false;
  "digital-message-api-docs:sendInboundMessage:POST:/channels/{channelId}/inbound": false;
  "digital-message-api-docs:searchMessages:GET:/messages": false;
  "digital-message-api-docs:getMessage:GET:/messages/{messageId}": false;
  "digital-message-api-docs:removeMessageAuthorName:POST:/messages/{messageId}/author-name-removal": false;
  "digital-message-api-docs:addMessageTag:PUT:/messages/{messageId}/tags/{tagId}": false;
  "digital-message-api-docs:removeMessageTag:DELETE:/messages/{messageId}/tags/{tagId}": false;
  "digital-message-api-docs:removeMessageContent:POST:/messages/{messageId}/content-removal": false;
  "digital-message-api-docs:delete-DFO-message-bymessageId:POST:/messages/{messageId}/delete": false;
  "digital-message-api-docs:createMessageNote:POST:/messages/{messageId}/notes": false;
  "digital-message-api-docs:updateMessageNote:PUT:/messages/{messageId}/notes/{noteId}": false;
  "digital-message-api-docs:deleteMessageNote:DELETE:/messages/{messageId}/notes/{noteId}": false;
  "digital-message-api-docs:mark-DFO-message-read:PUT:/messages/{messageId}/read": false;
  "digital-message-api-docs:setMessageSentiment:PUT:/messages/{messageId}/sentiment": false;
  "digital-message-api-docs:add-DFO-message-react:POST:/messages/{messageId}/react/{reactionType}": false;
  "digital-message-api-docs:delete-DFO-message-react:DELETE:/messages/{messageId}/react/{reactionType}": false;
  "digital-routingqueue-api-docs:searchRoutingQueues:GET:/routing-queues": false;
  "digital-tag-api-docs:getTags:GET:/tags": false;
  "digital-tag-api-docs:createTag:PUT:/tags": false;
  "digital-thread-api-docs:searchThreads:GET:/threads": false;
  "digital-thread-api-docs:sendSenderAction:POST:/channels/{channelId}/threads/{threadIdOnExternalPlatform}/sender-actions": false;
  "digital-thread-api-docs:updateThread:PUT:/channels/{channelId}/threads/{threadIdOnExternalPlatform}": false;
  "digital-verificationtoken-api-docs:getOneTimeToken:GET:/one-time-token/authentication": true;
  "digital-verificationtoken-api-docs:verifyOneTimeToken:POST:/one-time-token/verification": false;
  "interactionanalytics-interactions-api-docs:get-segments-analyzed:GET:/interaction-analytics-gateway/v2/segments/analyzed": false;
  "interactionanalytics-interactions-api-docs:get-segments-segmentId-analyzed-transcript:GET:/interaction-analytics-gateway/v2/segments/{segmentId}/analyzed-transcript": false;
  "mediaplayback-mediaplayback-api-docs:getACDContactRecordingData:GET:/media-playback/v1/contacts": true;
  "mediaplayback-mediaplayback-api-docs:getDataToPlayByContactStatementId:GET:/media-playback/v1/acd-contacts/{acdContactId}/statements/{statementId}": false;
  "mediaplayback-mediaplayback-api-docs:getSegmentRecordingData:GET:/media-playback/v1/segments/{segmentId}": false;
  "patron-callback-api-docs:requestACallback:POST:/queuecallback": true;
  "patron-callback-api-docs:scheduleACallback:POST:/promise": true;
  "patron-chatrequests-api-docs:post-contacts-chats:POST:/contacts/chats": false;
  "patron-chatrequests-api-docs:getChatText:GET:/contacts/chats/{chatSession}": true;
  "patron-chatrequests-api-docs:endChat:DELETE:/contacts/chats/{chatSession}": false;
  "patron-chatrequests-api-docs:post-contacts-chats-id-send-text:POST:/contacts/chats/{chatSession}/send-text": false;
  "patron-chatrequests-api-docs:PatronTyping:POST:/contacts/chats/{chatSession}/typing": false;
  "patron-chatrequests-api-docs:PatronTypingPreview:POST:/contacts/chats/{chatSession}/typing-preview": false;
  "patron-chatrequests-api-docs:post-contacts-chats-send-email:POST:/contacts/chats/send-email": false;
  "patron-chatrequests-api-docs:getPointChatProfile:GET:/points-of-contact/{pointsOfContactId}/chat-profile": false;
  "patron-workitem-api-docs:requestAWorkitem:POST:/interactions/work-items": true;
  "patron-workitem-api-docs:post-interactions-work-items-persistent:POST:/interactions/work-items-persistent": false;
  "policy-policyinstance-api-docs:createPolicyDefinition:POST:/data-policies/v1/policies": false;
  "policy-policyinstance-api-docs:getPolicies:POST:/data-policies/v1/policies/search": false;
  "policy-policyinstance-api-docs:getPolicyDefinition:GET:/data-policies/v1/policies/{policyId}": false;
  "policy-policyinstance-api-docs:getPolicyInstance:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}": false;
  "policy-policyinstance-api-docs:generateEvidenceReportUrl:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}/evidence-reports": false;
  "policy-policyinstance-api-docs:getAllPolicyInstances:GET:/data-policies/v1/policies/{policyId}/policy-instances": false;
  "policy-policyinstance-api-docs:getPolicyInstances:POST:/data-policies/v1/policies/policy-instances/search": false;
  "privacy-gdpr-api-docs:createGdprErasureRequest:POST:/privacy/v1/erasure": false;
  "realtimedata-realtime-api-docs:getAgentStates:GET:/agents/states": false;
  "realtimedata-realtime-api-docs:get-agents-client-data:GET:/agents/client-data": false;
  "realtimedata-realtime-api-docs:put-agents-client-data:PUT:/agents/client-data": false;
  "realtimedata-realtime-api-docs:getAgentStateByid:GET:/agents/{agentId}/states": false;
  "realtimedata-realtime-api-docs:ActiveContacts:GET:/contacts/active": false;
  "realtimedata-realtime-api-docs:ParkedContactDetails:GET:/contacts/parked": false;
  "realtimedata-realtime-api-docs:get_/contacts/states:GET:/contacts/states": false;
  "realtimedata-realtime-api-docs:SkillActivity:GET:/skills/activity": false;
  "realtimedata-realtime-api-docs:post-skills-activity-search:POST:/skills/activity/search": false;
  "realtimedata-realtime-api-docs:SkillActivityById:GET:/skills/{skillId}/activity": false;
  "realtimedata-realtime-api-docs:agents_agentId_queues:GET:/agents/{agentId}/queues": false;
  "realtimedata-realtime-api-docs:agents_agentIds_queues_details:GET:/agents/{agentId}/queues-detail": false;
  "recording-businessdata-api-docs:post_/interaction-recording-management-service/v1/interactions/business-data-update:POST:/interaction-recording-management-service/v1/interactions/business-data-update": true;
  "recording-interactions-api-docs:post-interaction-mask:POST:/interaction-recording-management-service/v1/interactions/mask": true;
  "recording-interactions-api-docs:post-interaction-unmask:POST:/interaction-recording-management-service/v1/interactions/unmask": true;
  "recording-recordingondemand-api-docs:StopRecord:POST:/interaction-recording-management-service/v1/interactions/start-recording-on-demand": true;
  "recording-recordingondemand-api-docs:ReleaseRecording:POST:/interaction-recording-management-service/v1/interactions/stop-recording-on-demand": true;
  "recording-recordingondemand-api-docs:DoNotRecord:POST:/interaction-recording-management-service/v1/interactions/do-not-record": true;
  "recording-recordingstatus-api-docs:GetRecordingStatus:GET:/interaction-recording-management-service/v1/interactions/get-recording-status": true;
  "recording-screeninteractions-api-docs:StartScreenrecord:POST:/interaction-recording-management-service/v1/interactions/start-screen-interaction-recording": true;
  "recording-screeninteractions-api-docs:StopScreenRecording:POST:/interaction-recording-management-service/v1/interactions/stop-screen-interaction-recording": true;
  "reporting-reporting-api-docs:get_/agents/interaction-history:GET:/agents/interaction-history": false;
  "reporting-reporting-api-docs:getAgentHistoryByid:GET:/agents/{agentId}/interaction-history": true;
  "reporting-reporting-api-docs:RecentContactHistory:GET:/agents/{agentId}/interaction-recent": true;
  "reporting-reporting-api-docs:AgentLoginHistory:GET:/agents/{agentId}/login-history": true;
  "reporting-reporting-api-docs:get_/agents/state-history:GET:/agents/state-history": false;
  "reporting-reporting-api-docs:get_/agents/{agentId}/state-history:GET:/agents/{agentId}/state-history": false;
  "reporting-reporting-api-docs:PerformanceSummary:GET:/agents/performance": true;
  "reporting-reporting-api-docs:AgentPerformanceSummary:GET:/agents/{agentId}/performance": true;
  "reporting-reporting-api-docs:get_/contacts:GET:/contacts": false;
  "reporting-reporting-api-docs:get_/contacts/{contactId}:GET:/contacts/{contactId}": false;
  "reporting-reporting-api-docs:SmsTranscripts:GET:/contacts/sms-transcripts": true;
  "reporting-reporting-api-docs:ContactIdSmsTranscripts:GET:/contacts/{contactId}/sms-transcripts": true;
  "reporting-reporting-api-docs:CompletedContactDetails:GET:/contacts/completed": false;
  "reporting-reporting-api-docs:get_/contacts/state-history:GET:/contacts/state-history": true;
  "reporting-reporting-api-docs:ContactStateHistory:GET:/contacts/{contactId}/state-history": false;
  "reporting-reporting-api-docs:get_/contacts/custom-data:GET:/contacts/custom-data": true;
  "reporting-reporting-api-docs:ContactCustomData:GET:/contacts/{contactId}/custom-data": false;
  "reporting-reporting-api-docs:getFullSkillSummaries:GET:/skills/summary": true;
  "reporting-reporting-api-docs:get_/skills/{skillId}/summary:GET:/skills/{skillId}/summary": true;
  "reporting-reporting-api-docs:getFullSLASummaries:GET:/skills/sla-summary": true;
  "reporting-reporting-api-docs:getFullSLASkillSummary:GET:/skills/{skillId}/sla-summary": true;
  "reporting-reporting-api-docs:TeamPerformanceSummaryTotalsAll:GET:/teams/performance-total": true;
  "reporting-reporting-api-docs:TeamPerformanceSummaryTotals:GET:/teams/{teamId}/performance-total": true;
  "reporting-reporting-api-docs:CustomReports:GET:/reports": false;
  "reporting-reporting-api-docs:ReportJobs:GET:/report-jobs": false;
  "reporting-reporting-api-docs:ReportJobByID:GET:/report-jobs/{jobId}": false;
  "reporting-reporting-api-docs:StartReportJob:POST:/report-jobs/{reportId}": false;
  "reporting-reporting-api-docs:GenerateADatadownloadReportFile:POST:/report-jobs/datadownload/{reportId}": true;
  "reporting-reporting-api-docs:wfmskillscontacts:GET:/wfm-data/skills/contacts": true;
  "reporting-reporting-api-docs:wfmDataAgent:GET:/wfm-data/agents": true;
  "reporting-reporting-api-docs:wfmDailerContactStatistics:GET:/wfm-data/skills/dialer-contacts": true;
  "reporting-reporting-api-docs:wfmAdherenceStatistics:GET:/wfm-data/agents/schedule-adherence": true;
  "reporting-reporting-api-docs:wfmAgentScorecard:GET:/wfm-data/agents/scorecards": true;
  "reporting-reporting-api-docs:wfmAgentPerformance:GET:/wfm-data/skills/agent-performance": true;
  "reporting-reporting-api-docs:get-contacts-id-hierarchy:GET:/contacts/{contactId}/hierarchy": false;
  "wfm-exportschedule-api-docs:exportScheduleAsList:POST:/schedules/export": false;
  "wfm-exportsummary-api-docs:get-summary:GET:/timeoff-manager/summary/{activityCodeName}": false;
  "wfm-importallotment-api-docs:put-allotments:PUT:/timeoff-manager/allotments/import": false;
}

export interface NiceCxoneFullApiOperationRequestBodyMap {
  "admin-addressbook-api-docs:getAddressBooks:GET:/address-books": never;
  "admin-addressbook-api-docs:CreateAddressBookv4:POST:/address-books": never;
  "admin-addressbook-api-docs:DeleteAddressbook:DELETE:/address-books/{addressBookId}": never;
  "admin-addressbook-api-docs:get-address-books-id-agents-assigned:GET:/address-books/{addressBookId}/agents/assigned": never;
  "admin-addressbook-api-docs:get-address-books-id-agents-unassigned:GET:/address-books/{addressBookId}/agents/unassigned": never;
  "admin-addressbook-api-docs:AddressBookAssignmentV4:POST:/address-books/{addressBookId}/assignment": NiceCxoneFullApiSchemaPostAddressBookAssignmentsRequest;
  "admin-addressbook-api-docs:get-address-books-id-dynamic-entries:GET:/address-books/{addressBookId}/dynamic-entries": never;
  "admin-addressbook-api-docs:CreateOrUpdateDynamicAddressbook:PUT:/address-books/{addressBookId}/dynamic-entries": NiceCxoneFullApiSchemaPutAddressBookDynamicEntriesRequest;
  "admin-addressbook-api-docs:DeleteDynamicAddressBookEntry:DELETE:/address-books/{addressBookId}/dynamic-entries/{externalId}": never;
  "admin-addressbook-api-docs:get-address-books-id-entries:GET:/address-books/{addressBookId}/entries": never;
  "admin-addressbook-api-docs:CreateAddressBookEntries:POST:/address-books/{addressBookId}/entries": NiceCxoneFullApiSchemaPostAddressBookEntriesRequest;
  "admin-addressbook-api-docs:UpdateAddressBookEntries:PUT:/address-books/{addressBookId}/entries": NiceCxoneFullApiSchemaPutAddressBookEntriesRequest;
  "admin-addressbook-api-docs:DeleteAddressBookEntry:DELETE:/address-books/{addressBookId}/entries/{addressBookEntryId}": never;
  "admin-addressbook-api-docs:AddressBookListForAnAgent:GET:/agents/{agentId}/address-books": never;
  "admin-addressbook-api-docs:AddressBookForCampaign:GET:/campaigns/{campaignId}/address-books": never;
  "admin-addressbook-api-docs:AddressBookForSkill:GET:/skills/{skillId}/address-books": never;
  "admin-addressbook-api-docs:AddressBooksTeam:GET:/teams/{teamId}/address-books": never;
  "admin-agentmessage-api-docs:get-agent-messages:GET:/communications/agent-messages": never;
  "admin-agentmessage-api-docs:post-agent-messages:POST:/communications/agent-messages": {
  expireMinutes: number;
  message: string;
  subject: string;
  targetIds?: ReadonlyArray<number>;
  targetType: "agent" | "team" | "station" | "everyone";
  validUntil: string;
};
  "admin-agentmessage-api-docs:delete-communications-agent-messages:DELETE:/communications/agent-messages": {
  groupMessageIds?: ReadonlyArray<string>;
};
  "admin-agentmessage-api-docs:get-agent-messages-id:GET:/communications/agent-messages/{messageGroupId}": never;
  "admin-agentmessage-api-docs:delete-agent-messages-id:DELETE:/communications/agent-messages/{messageGroupId}": never;
  "admin-agents-api-docs:get-agents:GET:/agents": never;
  "admin-agents-api-docs:operations-Agents-post-agents:POST:/agents": {
  agents: ReadonlyArray<{
  firstName: string;
  middleName?: string;
  lastName: string;
  teamId: string;
  teamUuid?: string;
  reportToId?: number;
  internalId?: string;
  profileId: number;
  roleId?: string;
  password?: string;
  forceChangeOnLogon?: boolean;
  emailAddress: string;
  userName: string;
  userId?: string;
  timeZone: string;
  country: string;
  state?: string;
  city: string;
  chatRefusalTimeout?: number;
  phoneRefusalTimeout?: number;
  workItemRefusalTimeout?: number;
  digitalRefusalTimeout?: number;
  defaultDialingPattern?: number;
  useTeamMaxConcurrentChats?: boolean;
  maxConcurrentChats?: number;
  isActive?: boolean;
  locationId?: number;
  notes?: string;
  hireDate?: string;
  terminationDate?: string;
  hourlyCost?: number;
  rehireStatus?: boolean;
  employmentType?: number;
  referral?: string;
  atHome?: boolean;
  hiringSource?: number;
  ntLoginName?: string;
  custom1?: string;
  custom2?: string;
  custom3?: string;
  custom4?: string;
  custom5?: string;
  scheduleNotification?: number;
  federatedId?: string;
  useTeamEmailAutoParkingLimit?: boolean;
  maxEmailAutoParkingLimit?: number;
  sipUser?: string;
  systemUser?: string;
  systemDomain?: string;
  crmUserName?: string;
  useAgentTimeZone?: boolean;
  timeDisplayFormat?: number;
  sendEmailNotifications?: boolean;
  apiKey?: string;
  telephone1?: string;
  telephone2?: string;
  userType?: string;
  isWhatIfAgent?: boolean;
  requestContact?: boolean;
  chatThreshold?: number;
  useTeamChatThreshold?: boolean;
  emailThreshold?: number;
  useTeamEmailThreshold?: boolean;
  workItemThreshold?: number;
  useTeamWorkItemThreshold?: boolean;
  voiceThreshold?: number;
  useTeamVoiceThreshold?: boolean;
  contactAutoFocus?: boolean;
  useTeamContactAutoFocus?: boolean;
  useTeamRequestContact?: boolean;
  recordingNumbers?: ReadonlyArray<{
  number: string;
}>;
  subject?: string;
  issuer?: string;
  isOpenIdProfileComplete?: boolean;
  maxPreview?: boolean;
  deliveryMode?: string;
  totalContactCount?: number;
  useTeamDeliveryModeSettings?: boolean;
  emailRefusalTimeOut?: number;
  voicemailRefusalTimeOut?: number;
  smsRefusalTimeout?: number;
  isBillable?: boolean;
  useTeamDefaults?: boolean;
  agentVoiceThreshold?: number;
  agentChatThreshold?: number;
  agentEmailThreshold?: number;
  agentWorkItemthreshold?: number;
  agentDeliveryMode?: string;
  agentTotalContactCount?: number;
  agentContactAutoFocus?: boolean;
  agentRequestContact?: boolean;
  integratedSoftphoneWebRtcUrls?: ReadonlyArray<{
  urlName?: string;
  weight?: string;
}>;
  customerCard?: boolean;
  loginAuthenticatorId?: string;
  smsThreshold?: number;
  useTeamSmsThreshold?: boolean;
  agentSmsThreshold?: boolean;
  digitalThreshold?: number;
  useTeamDigitalThreshold?: boolean;
  agentDigitalThreshold?: boolean;
  agentPhoneTimeout?: number;
  address1?: string;
  address2?: string;
  zipCode?: string;
  noFixedAddress?: boolean;
  agentSyncTime?: string;
  agentCxaClientVersion?: number;
  agentCxaReleasePrevious?: boolean;
  agentIntegration?: boolean;
  channelLock?: boolean;
  digitalEngagementEnabled?: boolean;
  ACWEnabled?: boolean;
  ACWRange?: number;
}>;
};
  "admin-agents-api-docs:operations-Agents-put-agents:PUT:/agents": {
  agents: ReadonlyArray<{
  agentId: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  teamId?: string;
  teamUuid?: string;
  reportToId?: number;
  internalId?: string;
  profileId?: number;
  roleId?: string;
  emailAddress?: string;
  userName?: string;
  userId?: string;
  timeZone?: string;
  country?: string;
  state?: string;
  city?: string;
  chatRefusalTimeout?: number;
  phoneRefusalTimeout?: number;
  workItemRefusalTimeout?: number;
  defaultDialingPattern?: number;
  useTeamMaxConcurrentChats?: boolean;
  maxConcurrentChats?: number;
  isActive?: boolean;
  locationId?: number;
  notes?: string;
  hireDate?: string;
  terminationDate?: string;
  hourlyCost?: number;
  rehireStatus?: boolean;
  employmentType?: number;
  referral?: string;
  atHome?: boolean;
  hiringSource?: number;
  ntLoginName?: string;
  customerCard?: boolean;
  custom1?: string;
  custom2?: string;
  custom3?: string;
  custom4?: string;
  custom5?: string;
  scheduleNotification?: number;
  federatedId?: string;
  useTeamEmailAutoParkingLimit?: boolean;
  maxEmailAutoParkingLimit?: number;
  sipUser?: string;
  systemUser?: string;
  systemDomain?: string;
  crmUserName?: string;
  useAgentTimeZone?: boolean;
  timeDisplayFormat?: number;
  sendEmailNotifications?: boolean;
  apiKey?: string;
  telephone1?: string;
  telephone2?: string;
  userType?: string;
  isWhatIfAgent?: boolean;
  requestContact?: boolean;
  chatThreshold?: number;
  useTeamChatThreshold?: boolean;
  emailThreshold?: number;
  useTeamEmailThreshold?: boolean;
  workItemThreshold?: number;
  useTeamWorkItemThreshold?: boolean;
  smsThreshold?: number;
  useTeamSmsThreshold?: boolean;
  digitalThreshold?: number;
  useTeamDigitalThreshold?: boolean;
  voiceThreshold?: number;
  useTeamVoiceThreshold?: boolean;
  contactAutoFocus?: boolean;
  useTeamContactAutoFocus?: boolean;
  useTeamRequestContact?: boolean;
  recordingNumbers?: ReadonlyArray<{
  number: string;
}>;
  subject?: string;
  issuer?: string;
  isOpenIdProfileComplete?: boolean;
  deliveryMode?: string;
  totalContactCount?: number;
  useTeamDeliveryModeSettings?: boolean;
  emailRefusalTimeOut?: number;
  voicemailRefusalTimeOut?: number;
  smsRefusalTimeout?: number;
  isBillable?: boolean;
  useTeamDefaults?: boolean;
  agentVoiceThreshold?: number;
  agentChatThreshold?: number;
  agentEmailThreshold?: number;
  agentWorkItemThreshold?: number;
  agentSmsThreshold?: number;
  agentDeliveryMode?: string;
  agentTotalContactCount?: number;
  agentRequestContact?: boolean;
  agentContactAutoFocus?: boolean;
  integratedSoftphoneWebRtcUrls?: ReadonlyArray<{
  urlName?: string;
  weight?: string;
}>;
  agentMaxVersion?: number;
  agentPhoneTimeout?: number;
  address1?: string;
  address2?: string;
  zipCode?: string;
  noFixedAddress?: boolean;
  digitalRefusalTimeout?: number;
  agentSyncTime?: string;
  agentIntegration?: boolean;
  channelLock?: boolean;
  digitalEngagementEnabled?: boolean;
  teams_channel_Id?: string;
  divisionNo?: number;
  ACWEnabled?: boolean;
  ACWRange?: number;
}>;
};
  "admin-agents-api-docs:operations-Agents-get-agents-id:GET:/agents/{agentId|userId}": never;
  "admin-agents-api-docs:operations-Agents-put-agents-id:PUT:/agents/{agentId|userId}": {
  agent?: {
  agentId: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  teamId?: string;
  teamUuid?: string;
  reportToId?: number;
  internalId?: string;
  profileId?: number;
  roleId?: string;
  emailAddress?: string;
  userName?: string;
  userId?: string;
  timeZone?: string;
  country?: string;
  state?: string;
  city?: string;
  chatRefusalTimeout?: number;
  phoneRefusalTimeout?: number;
  workItemRefusalTimeout?: number;
  defaultDialingPattern?: number;
  useTeamMaxConcurrentChats?: boolean;
  maxConcurrentChats?: number;
  isActive?: boolean;
  locationId?: number;
  notes?: string;
  hireDate?: string;
  terminationDate?: string;
  hourlyCost?: number;
  rehireStatus?: boolean;
  employmentType?: number;
  referral?: string;
  atHome?: boolean;
  hiringSource?: number;
  ntLoginName?: string;
  customerCard?: boolean;
  custom1?: string;
  custom2?: string;
  custom3?: string;
  custom4?: string;
  custom5?: string;
  scheduleNotification?: number;
  federatedId?: string;
  useTeamEmailAutoParkingLimit?: boolean;
  maxEmailAutoParkingLimit?: number;
  sipUser?: string;
  systemUser?: string;
  systemDomain?: string;
  crmUserName?: string;
  useAgentTimeZone?: boolean;
  timeDisplayFormat?: number;
  sendEmailNotifications?: boolean;
  apiKey?: string;
  telephone1?: string;
  telephone2?: string;
  userType?: string;
  isWhatIfAgent?: boolean;
  requestContact?: boolean;
  chatThreshold?: number;
  useTeamChatThreshold?: boolean;
  emailThreshold?: number;
  useTeamEmailThreshold?: boolean;
  workItemThreshold?: number;
  useTeamWorkItemThreshold?: boolean;
  smsThreshold?: number;
  useTeamSmsThreshold?: boolean;
  digitalThreshold?: number;
  useTeamDigitalThreshold?: boolean;
  voiceThreshold?: number;
  useTeamVoiceThreshold?: boolean;
  contactAutoFocus?: boolean;
  useTeamContactAutoFocus?: boolean;
  useTeamRequestContact?: boolean;
  recordingNumbers?: ReadonlyArray<{
  number: string;
}>;
  subject?: string;
  issuer?: string;
  isOpenIdProfileComplete?: boolean;
  deliveryMode?: string;
  totalContactCount?: number;
  useTeamDeliveryModeSettings?: boolean;
  emailRefusalTimeOut?: number;
  voicemailRefusalTimeOut?: number;
  smsRefusalTimeout?: number;
  isBillable?: boolean;
  useTeamDefaults?: boolean;
  agentVoiceThreshold?: number;
  agentChatThreshold?: number;
  agentEmailThreshold?: number;
  agentWorkItemThreshold?: number;
  agentSmsThreshold?: number;
  agentDeliveryMode?: string;
  agentTotalContactCount?: number;
  agentRequestContact?: boolean;
  agentContactAutoFocus?: boolean;
  integratedSoftphoneWebRtcUrls?: ReadonlyArray<{
  urlName?: string;
  weight?: string;
}>;
  agentMaxVersion?: number;
  agentPhoneTimeout?: number;
  address1?: string;
  address2?: string;
  zipCode?: string;
  noFixedAddress?: boolean;
  digitalRefusalTimeout?: number;
  agentSyncTime?: string;
  agentIntegration?: boolean;
  channelLock?: boolean;
  digitalEngagementEnabled?: boolean;
  ACWEnabled?: boolean;
  ACWRange?: number;
};
};
  "admin-agents-api-docs:SetAgentState:POST:/agents/{agentId}/state": never;
  "admin-agents-api-docs:get-agents-skills:GET:/agents/skills": never;
  "admin-agents-api-docs:post-agents-skills:POST:/agents/skills": {
  agentAndSkillDetails?: ReadonlyArray<{
  agentIds?: ReadonlyArray<string>;
  skills?: ReadonlyArray<{
  skillIds: ReadonlyArray<string>;
  isActive?: boolean;
  proficiency?: 1 | 2 | 3 | 4 | 5;
}>;
}>;
};
  "admin-agents-api-docs:post-agents-search:POST:/agents/search": {
  agentIds?: ReadonlyArray<string>;
  updatedSince?: string;
  isActive?: boolean;
  isLocked?: boolean;
  searchString?: string;
  fields?: string;
  orderby?: string;
};
  "admin-agents-api-docs:post-skills-agents-search:POST:/skills/agents/search": {
  skillIds?: ReadonlyArray<number>;
  updatedSince?: string;
  searchString?: string;
  fields?: string;
  orderby?: string;
  skip?: string;
  top?: string;
  campaignIds?: ReadonlyArray<number>;
  isAssigned?: boolean;
};
  "admin-agents-api-docs:get-agent-configuration:GET:/agents/{agentId}/agent-configuration": never;
  "admin-agents-api-docs:getagentbyagentidgroups:GET:/agents/{agentId}/groups": never;
  "admin-agents-api-docs:getSkillsByAgentId:GET:/agents/{agentId|userId}/skills": never;
  "admin-agents-api-docs:AssignsSkillsToAnAgent:POST:/agents/{agentId|userId}/skills": {
  skills?: ReadonlyArray<{
  skillId: string;
  proficiency?: number;
  isActive?: boolean;
}>;
};
  "admin-agents-api-docs:ModifySkillAssignmentsForAgent:PUT:/agents/{agentId|userId}/skills": {
  skills?: ReadonlyArray<{
  skillId: string;
  proficiency?: number;
  isActive: boolean;
}>;
};
  "admin-agents-api-docs:RemoveSkillAssignmentsForAgent:DELETE:/agents/{agentId|userId}/skills": never;
  "admin-agents-api-docs:GetSkillsNotAssignedToAgent:GET:/agents/{agentId}/skills/unassigned": never;
  "admin-agents-api-docs:AgentSkillData:GET:/agents/skill-data": never;
  "admin-agents-api-docs:AgentSkillDataForSkillid:GET:/agents/{agentId}/skill-data": never;
  "admin-agents-api-docs:put_/agents/{agentId}/custom-event:PUT:/agents/{agentId}/custom-event": never;
  "admin-agents-api-docs:QuickReplies:GET:/agents/quick-replies": never;
  "admin-agents-api-docs:QuickRepliesByAgent:GET:/agents/{agentId}/quick-replies": never;
  "admin-agents-api-docs:CreateMessage:POST:/agents/messages": NiceCxoneFullApiSchemaPostAgentsMessagesRequest;
  "admin-agents-api-docs:deleteMessagebyMessageId:DELETE:/agents/messages/{messageId}": never;
  "admin-agents-api-docs:AgentMessageList:GET:/agents/{agentId}/messages": never;
  "admin-agents-api-docs:AgentIndicatorList:GET:/agents/{agentId}/indicators": never;
  "admin-agents-api-docs:agentLogout:POST:/agents/{agentId}/logout": never;
  "admin-agents-api-docs:GetAgentDialingPatterns:GET:/agent-patterns": never;
  "admin-agents-api-docs:post-agent-patterns-id-transform-phonenumbers:POST:/agent-patterns/{agentpatternId}/transform-phonenumbers": never;
  "admin-agents-api-docs:getAgentStates:GET:/agents-states": never;
  "admin-agents-api-docs:get-agents-extended:GET:/agents/extended": never;
  "admin-agents-api-docs:get-agents-issues:GET:/agents/issues": never;
  "admin-agents-api-docs:get-agent-messages-id:GET:/agent-messages/{messageGroupId}": never;
  "admin-agents-api-docs:get-gents-skills-download:GET:/agents/skills-download": never;
  "admin-agents-api-docs:get_/teams:GET:/teams": never;
  "admin-agents-api-docs:post-teams:POST:/teams": {
  teams: ReadonlyArray<{
  teamName: string;
  isActive?: boolean;
  maxConcurrentChats?: number;
  wfoEnabled?: boolean;
  wfm2Enabled?: boolean;
  qm2Enabled?: boolean;
  inViewEnabled?: boolean;
  inViewGamificationEnabled?: boolean;
  inViewWallboardEnabled?: boolean;
  inViewLMSEnabled?: boolean;
  notes?: string;
  maxEmailAutoParkingLimit?: number;
  analyticsEnabled?: boolean;
  requestContact?: boolean;
  contactAutoFocus?: boolean;
  chatThreshold?: number;
  emailThreshold?: number;
  workItemThreshold?: number;
  voiceThreshold?: number;
  smsThreshold?: number;
  digitalThreshold?: number;
  teamUuid?: string;
  teamLeadId?: string;
  deliveryMode?: string;
  totalContactCount?: number;
  niceAudioRecordingEnabled?: boolean;
  niceCoachingEnabled?: boolean;
  niceDesktopAnalyticsEnabled?: boolean;
  niceLessonManagementEnabled?: boolean;
  nicePerformanceManagementEnabled?: boolean;
  niceQmEnabled?: boolean;
  niceQualityOptimizationEnabled?: boolean;
  niceScreenRecordingEnabled?: boolean;
  niceShiftBiddingEnabled?: boolean;
  niceSpeechAnalyticsEnabled?: boolean;
  niceStrategicPlannerEnabled?: boolean;
  niceSurvey_CustomerEnabled?: boolean;
  niceWfmEnabled?: boolean;
  niceWfoAdvancedEnabled?: boolean;
  cxOneCustomerAuthenticationEnabled?: boolean;
  niceWfoEssentialsEnabled?: boolean;
  description?: string;
  channelLock?: boolean;
  divisionNo?: number;
}>;
};
  "admin-agents-api-docs:get-teams-id:GET:/teams/{teamId}": never;
  "admin-agents-api-docs:put-teams-id:PUT:/teams/{teamId}": {
  forceInactive?: boolean;
  team: {
  teamName: string;
  isActive?: boolean;
  maxConcurrentChats?: number;
  wfoEnabled?: boolean;
  wfm2Enabled?: boolean;
  qm2Enabled?: boolean;
  inViewEnabled?: boolean;
  inViewGamificationEnabled?: boolean;
  inViewWallboardEnabled?: boolean;
  inViewLMSEnabled?: boolean;
  notes?: string;
  maxEmailAutoParkingLimit?: number;
  analyticsEnabled?: boolean;
  requestContact?: boolean;
  contactAutoFocus?: boolean;
  chatThreshold?: number;
  emailThreshold?: number;
  workItemThreshold?: number;
  smsThreshold?: number;
  digitalThreshold?: number;
  voiceThreshold?: number;
  teamUuid?: string;
  teamLeadId?: string;
  deliveryMode?: string;
  totalContactCount?: number;
  niceAudioRecordingEnabled?: boolean;
  niceCoachingEnabled?: boolean;
  niceDesktopAnalyticsEnabled?: boolean;
  niceLessonManagementEnabled?: boolean;
  nicePerformanceManagementEnabled?: boolean;
  niceQmEnabled?: boolean;
  niceQualityOptimizationEnabled?: boolean;
  niceScreenRecordingEnabled?: boolean;
  niceShiftBiddingEnabled?: boolean;
  niceSpeechAnalyticsEnabled?: boolean;
  niceStrategicPlannerEnabled?: boolean;
  niceSurvey_CustomerEnabled?: boolean;
  niceWfmEnabled?: boolean;
  niceWfoAdvancedEnabled?: boolean;
  cxOneCustomerAuthenticationEnabled?: boolean;
  niceWfoEssentialsEnabled?: boolean;
  description?: string;
  channelLock?: boolean;
  divisionNo?: number;
};
};
  "admin-agents-api-docs:TeamsAgents:GET:/teams/agents": never;
  "admin-agents-api-docs:get-teams-id-agents:GET:/teams/{teamId}/agents": never;
  "admin-agents-api-docs:AssignAgentsToTeam:POST:/teams/{teamId}/agents": {
  agents: ReadonlyArray<{
  agentId: string;
}>;
};
  "admin-agents-api-docs:RemoveAgentsFromTeam:DELETE:/teams/{teamId}/agents": {
  agents: ReadonlyArray<{
  agentId: string;
}>;
};
  "admin-agents-api-docs:get-teams-id-unavailable-codes:GET:/teams/{teamId}/unavailable-codes": never;
  "admin-agents-api-docs:AssignUnavailableCode:POST:/teams/{teamId}/unavailable-codes": {
  codes: ReadonlyArray<{
  outstateId: number;
}>;
};
  "admin-agents-api-docs:put-teams-id-unavailable-codes:PUT:/teams/{teamId}/unavailable-codes": {
  unavailableCodes: ReadonlyArray<{
  outStateId: string;
}>;
};
  "admin-agents-api-docs:RemoveUnavailableCodeTeam:DELETE:/teams/{teamId}/unavailable-codes": {
  codes: ReadonlyArray<{
  outstateId: string;
}>;
};
  "admin-agents-api-docs:get-access-keys:GET:/access-keys": never;
  "admin-agents-api-docs:post-access-keys:POST:/access-keys": never;
  "admin-agents-api-docs:get-access-keys-id:GET:/access-keys/{accessKeyId}": never;
  "admin-agents-api-docs:delete-access-keys-id:DELETE:/access-keys/{accessKeyId}": never;
  "admin-agents-api-docs:patch-access-keys-id:PATCH:/access-keys/{accessKeyId}": never;
  "admin-agents-api-docs:get-activesupervisors:GET:/activesupervisors": never;
  "admin-agents-api-docs:enhancedCustomerCard:POST:/enhancedcustomercard": {
  tenantId?: string;
  payload?: {
  action?: string;
  customerPoc?: string;
  ani?: string;
  startTime?: string;
  interactionType?: string;
  interactionSubtype?: string;
  result?: string;
  firstName?: string;
  lastName?: string;
  text?: string;
  messagingBusinessPoc?: string;
  externalAgentId?: string;
  externalInteractionId?: string;
  externalThreadId?: string;
};
};
  "admin-commitments-api-docs:AgentScheduledCallbacks:GET:/agents/{agentId}/scheduled-callbacks": never;
  "admin-commitments-api-docs:CreateScheduledCallback:POST:/scheduled-callbacks": never;
  "admin-commitments-api-docs:UpdateScheduledCallback:PUT:/scheduled-callbacks/{callbackId}": never;
  "admin-commitments-api-docs:DeleteScheduledCallback:DELETE:/scheduled-callbacks/{callbackId}": never;
  "admin-commitments-api-docs:SkillScheduledCallbacks:GET:/skills/{skillId}/scheduled-callbacks": never;
  "admin-contacts-api-docs:ChatTranscript:GET:/contacts/{contactId}/chat-transcript": never;
  "admin-contacts-api-docs:get-contacts-id-disposition:GET:/contacts/{contactId}/disposition": never;
  "admin-contacts-api-docs:getHistoricalChatTranscript:GET:/contacts/{contactId}/historical-chat-transcript": never;
  "admin-contacts-api-docs:EmailTranscript:GET:/contacts/{contactId}/email-transcript": never;
  "admin-contacts-api-docs:ContactFiles:GET:/contacts/{contactId}/files": never;
  "admin-contacts-api-docs:endAContact:POST:/contacts/{contactId}/end": never;
  "admin-contacts-api-docs:monitorAContactCall:POST:/contacts/{contactId}/monitor": NiceCxoneFullApiSchemaPostContactMonitorRequest;
  "admin-contacts-api-docs:recordAContact:POST:/contacts/{contactId}/record": never;
  "admin-contacts-api-docs:post-contacts-id-set-disposition:POST:/contacts/{contactId}/set-disposition": {
  dispositionInfo?: {
  skill: string;
  dispositionCode: string;
  callbackNumber?: string;
  callbackTime?: string;
  commitmentAmount?: string;
  notes?: string;
};
};
  "admin-contacts-api-docs:AssignTagsContact:POST:/contacts/{contactId}/tags": NiceCxoneFullApiSchemaPostContactTagsRequest;
  "admin-contacts-api-docs:getContactStateDescriptions:GET:/contact-state-descriptions": never;
  "admin-contacts-api-docs:getContactStateById:GET:/contact-state-descriptions/{contactStateId}": never;
  "admin-contacts-api-docs:put-persistent-contacts-id:PUT:/persistent-contacts/{contactId}": {
  persistentContact: {
  skillId?: number | null;
  targetAgentId?: number | null;
  initialPriority?: number | null;
  acceleration?: number | null;
  maxPriority?: number | null;
};
};
  "admin-contacts-api-docs:SignalAContact:POST:/interactions/{contactId}/signal": never;
  "admin-contacts-api-docs:Get-contacts-id-sms-historical-transcript:GET:/contacts/{contactId}/sms-historical-transcript": never;
  "admin-contacts-api-docs:get-contacts-sms-historical-contacts:GET:/contacts/sms-historical-contacts": never;
  "admin-general-api-docs:get-apiversion:GET:/apiversion": never;
  "admin-general-api-docs:get-apiversionreleaseinfo:GET:/apiversionreleaseinfo": never;
  "admin-general-api-docs:BrandingProfiles:GET:/branding-profiles": never;
  "admin-general-api-docs:BusinessUnitInfo:GET:/business-unit": never;
  "admin-general-api-docs:get-business-unit-outbound-routes:GET:/business-unit/outbound-routes": never;
  "admin-general-api-docs:get-agents-id-agent-settings:GET:/agents/{agentId}/agent-settings": never;
  "admin-general-api-docs:GetCountries:GET:/countries": never;
  "admin-general-api-docs:GetsStatesProvinces:GET:/countries/{countryId}/states": never;
  "admin-general-api-docs:DataDefinitions:GET:/data-definitions/data-types": never;
  "admin-general-api-docs:RetrieveAFile:GET:/files": never;
  "admin-general-api-docs:UploadFile:POST:/files": NiceCxoneFullApiSchemaPostUploadFile;
  "admin-general-api-docs:MoveFile:PUT:/files": never;
  "admin-general-api-docs:DeleteFile:DELETE:/files": NiceCxoneFullApiSchemaDeleteFile;
  "admin-general-api-docs:GetExternalfiles:GET:/files/external": never;
  "admin-general-api-docs:postexternalfiles:POST:/files/external": never;
  "admin-general-api-docs:putexteranlfiles:PUT:/files/external": never;
  "admin-general-api-docs:ReturnFolder:GET:/folders": never;
  "admin-general-api-docs:DeleteFolder:DELETE:/folders": never;
  "admin-general-api-docs:CategoriesAndPriorities:GET:/feedback-categories-and-priorities": never;
  "admin-general-api-docs:GetHiringSources:GET:/hiring-sources": never;
  "admin-general-api-docs:CreateHiringScource:POST:/hiring-sources": never;
  "admin-general-api-docs:get-hours-of-operation:GET:/hours-of-operation": never;
  "admin-general-api-docs:post-hours-of-operation:POST:/hours-of-operation": {
  profileName: string;
  description?: string;
  notes?: string;
  days?: ReadonlyArray<{
  day?: string;
  openTime?: string;
  closeTime?: string;
  hasAdditionalHours?: boolean;
  additionalOpenTime?: string;
  additionalCloseTime?: string;
  isClosedAllDay?: boolean;
}>;
  holidays?: ReadonlyArray<{
  holidayName?: string;
  date?: string;
  openTime?: string;
  closeTime?: string;
  hasAdditionalHours?: boolean;
  additionalOpenTime?: string;
  additionalCloseTime?: string;
  isClosedAllDay?: boolean;
}>;
  overrideBranch?: string;
  overrideExpirationDate?: string;
  skills?: ReadonlyArray<{
  skillId?: number;
}>;
};
  "admin-general-api-docs:get-hours-of-operation-identities:GET:/hours-of-operation/identities": never;
  "admin-general-api-docs:get-hours-of-operation-by-id:GET:/hours-of-operation/{hoursOfOperationProfileId}": never;
  "admin-general-api-docs:update-hours-of-operation:PUT:/hours-of-operation/{hoursOfOperationProfileId}": {
  hoursOfOperationProfileName: string;
  description?: string;
  notes?: string;
  overrideBranch?: string;
  overrideExpirationDate?: string;
  days: ReadonlyArray<{
  day?: string;
  openTime?: string;
  closeTime?: string;
  hasAdditionalHours?: boolean;
  additionalOpenTime?: string;
  additionalCloseTime?: string;
  isClosedAllDay?: boolean;
}>;
  holidays: ReadonlyArray<{
  holidayName?: string;
  date?: string;
  openTime?: string;
  closeTime?: string;
  hasAdditionalHours?: boolean;
  additionalOpenTime?: string;
  additionalCloseTime?: string;
  isClosedAllDay?: boolean;
}>;
};
  "admin-general-api-docs:delete-hours-of-operation:DELETE:/hours-of-operation/{hoursOfOperationProfileId}": never;
  "admin-general-api-docs:update-hours-of-operation-skills:PUT:/hours-of-operation/{hoursOfOperationProfileId}/skills": {
  assign?: boolean;
  all?: boolean;
  skills?: ReadonlyArray<number>;
};
  "admin-general-api-docs:ReturnsLocations:GET:/locations": never;
  "admin-general-api-docs:getMediaTypes:GET:/media-types": never;
  "admin-general-api-docs:getMediaTypeById:GET:/media-types/{mediaTypeId}": never;
  "admin-general-api-docs:MessageTemplates:GET:/message-templates": never;
  "admin-general-api-docs:CreatesMessageTemplate:POST:/message-templates": never;
  "admin-general-api-docs:MessageTemplate:GET:/message-templates/{templateId}": never;
  "admin-general-api-docs:UpdatesMessageTemplate:PUT:/message-templates/{templateId}": never;
  "admin-general-api-docs:getPermissions:GET:/permissions": never;
  "admin-general-api-docs:AgentPermissionsList:GET:/permissions/{agentId}": never;
  "admin-general-api-docs:PhoneCodes:GET:/phone-codes": never;
  "admin-general-api-docs:getPointsOfContact:GET:/points-of-contact": never;
  "admin-general-api-docs:post-points-of-contact:POST:/points-of-contact": {
  pointOfContact: string;
  pointOfContactName: string;
  skillId: number;
  isActive?: boolean;
  mediaTypeId?: number;
  scriptName: string;
  ivrReportingEnabled?: boolean;
  chatProfileId?: number;
};
  "admin-general-api-docs:getPointOfContactById:GET:/points-of-contact/{pointOfContactId}": never;
  "admin-general-api-docs:put-points-of-contact-id:PUT:/points-of-contact/{pointOfContactId}": {
  pointOfContactName: string;
  skillId: number;
  isActive?: boolean;
  scriptName: string;
  ivrReportingEnabled?: boolean;
  chatProfileId?: number;
};
  "admin-general-api-docs:GetSecurityProfiles:GET:/security-profiles": never;
  "admin-general-api-docs:GetSecurityProfilesID:GET:/security-profiles/{profileId}": never;
  "admin-general-api-docs:get-script:GET:/scripts": never;
  "admin-general-api-docs:create-script:POST:/scripts": {
  scriptContent?: {
  header?: {
  scriptName?: string;
  busNo?: number;
  libraryId?: string;
  masterId?: number;
  mediaType?: number;
  mediaTypeName?: string;
  variableRedaction?: string;
  nextActionId?: number;
  timestamp?: string;
  purposeType?: string;
  lockInfo?: {
  lockedName?: string;
  lockedId?: string;
  lockedDate?: string;
};
  lastSavedIn?: string;
};
  actions?: {
  "{actionId}"?: {
  actionId?: number;
  libraryId?: string;
  name?: string;
  version?: number;
  label?: string;
  dependencyOrder?: string;
  implType?: string;
  x?: number;
  y?: number;
  xws?: number;
  yws?: number;
};
};
  properties?: {
  "{actionId}"?: {
  "{propertyNumber}"?: {
  name?: string;
  value?: string;
  hidden?: string;
};
};
};
  branches?: {
  "{actionId}"?: ReadonlyArray<{
  to?: number;
  label?: string;
  type?: string;
  index?: number;
  ports?: string;
}>;
};
};
};
  "admin-general-api-docs:delete-script:DELETE:/scripts": never;
  "admin-general-api-docs:update-script:PUT:/scripts": never;
  "admin-general-api-docs:get-scripts-id:GET:/scripts/{scriptId}": never;
  "admin-general-api-docs:get-search-script:GET:/scripts/search": never;
  "admin-general-api-docs:get_/scripts/files:GET:/scripts/files": never;
  "admin-general-api-docs:post_/scripts/files:POST:/scripts/files": {
  fileFullName: string;
  fileContent: string;
};
  "admin-general-api-docs:put_/scripts/files:PUT:/scripts/files": never;
  "admin-general-api-docs:delete_/scripts/files:DELETE:/scripts/files": never;
  "admin-general-api-docs:get_/scripts/files/search:GET:/scripts/files/search": never;
  "admin-general-api-docs:post-kick-script:POST:/scripts/kick": never;
  "admin-general-api-docs:get-script-history:GET:/scripts/historyByName": never;
  "admin-general-api-docs:post-start-script:POST:/scripts/start": never;
  "admin-general-api-docs:get-scripts-folders:GET:/script-folders": never;
  "admin-general-api-docs:getServerTime:GET:/server-time": never;
  "admin-general-api-docs:ReturnsTags:GET:/tags": never;
  "admin-general-api-docs:CreatesTag:POST:/tags": never;
  "admin-general-api-docs:GetTagDetailsById:GET:/tags/{tagId}": never;
  "admin-general-api-docs:UpdatesTag:PUT:/tags/{tagId}": never;
  "admin-general-api-docs:get-suppressed-contact:GET:/suppressed-contact": never;
  "admin-general-api-docs:post-suppressed-contact:POST:/suppressed-contact": {
  suppressedContactData: {
  startDate?: string;
  endDate?: string;
  value?: string;
  skills?: string;
};
};
  "admin-general-api-docs:Timezones:GET:/timezones": never;
  "admin-general-api-docs:get-business-unit-time-zones:GET:/business-unit/time-zones": never;
  "admin-general-api-docs:put-business-unit-time-zones:PUT:/business-unit/time-zones": {
  timezones?: string;
  items?: string;
};
  "admin-general-api-docs:get-unavailable-codes:GET:/unavailable-codes": never;
  "admin-general-api-docs:post-unavailable-codes:POST:/unavailable-codes": {
  name: string;
  isACW?: boolean;
  agentTimeout?: number;
  notes?: string;
};
  "admin-general-api-docs:get-phone-numbers:GET:/phone-numbers": never;
  "admin-general-api-docs:get-suppressed-contact-id:GET:/suppressed-contact/{suppressedContactId}": never;
  "admin-general-api-docs:put-suppressed-contact-id:PUT:/suppressed-contact/{suppressedContactId}": {
  suppressedContactData: {
  startDate?: string;
  endDate?: string;
  value?: string;
  skills?: string;
};
};
  "admin-general-api-docs:delete-suppressed-contact-id:DELETE:/suppressed-contact/{suppressedContactId}": never;
  "admin-groups-api-docs:getgroups:GET:/groups": never;
  "admin-groups-api-docs:postgroups:POST:/groups": NiceCxoneFullApiSchemaPostgroupsrequest;
  "admin-groups-api-docs:getgroupsbygroupid:GET:/groups/{groupId}": never;
  "admin-groups-api-docs:putgroupsbygroupid:PUT:/groups/{groupId}": never;
  "admin-groups-api-docs:GetGroupAgent:GET:/groups/{groupId}/agents": never;
  "admin-groups-api-docs:blank:POST:/groups/{groupId}/agents": {
  agents?: ReadonlyArray<{
  agentId?: number;
}>;
};
  "admin-groups-api-docs:deleteGroupAgents:DELETE:/groups/{groupId}/agents": NiceCxoneFullApiSchemaDeletegroupgroupidrequest;
  "admin-lists-api-docs:DncGroupsResultSet:GET:/dnc-groups": never;
  "admin-lists-api-docs:post-dnc-groups:POST:/dnc-groups": {
  dncGroupName: string;
  dncGroupDescription?: string;
};
  "admin-lists-api-docs:GetDNCgroupByID:GET:/dnc-groups/{groupId}": never;
  "admin-lists-api-docs:PutDNCgroupByID:PUT:/dnc-groups/{groupId}": never;
  "admin-lists-api-docs:GetDncGroupsContribSkills:GET:/dnc-groups/{groupId}/contributing-skills": never;
  "admin-lists-api-docs:PostDncGroupsContribSkillsById:POST:/dnc-groups/{groupId}/contributing-skills/{skillId}": never;
  "admin-lists-api-docs:DeleteDncGroupsContribSkillsById:DELETE:/dnc-groups/{groupId}/contributing-skills/{skillId}": never;
  "admin-lists-api-docs:DncGroupsRecords:GET:/dnc-groups/{groupId}/records": never;
  "admin-lists-api-docs:CreateDncGroupRecords:POST:/dnc-groups/{groupId}/records": {
  dncGroupRecords: ReadonlyArray<{
  phoneNumber: number;
  expiredDate?: string;
}>;
};
  "admin-lists-api-docs:DeleteDncGroupRecords:DELETE:/dnc-groups/{groupId}/records": {
  dncGroupRecords: ReadonlyArray<{
  phoneNumber: string;
  expiredDate?: string;
}>;
};
  "admin-lists-api-docs:GetDncGroupsScrubbedSkills:GET:/dnc-groups/{groupId}/scrubbed-skills": never;
  "admin-lists-api-docs:PostDncGroupsScrubbedSkills:POST:/dnc-groups/{groupId}/scrubbed-skills/{skillId}": never;
  "admin-lists-api-docs:DeleteDncGroupsScrubbedSkills:DELETE:/dnc-groups/{groupId}/scrubbed-skills/{skillId}": never;
  "admin-lists-api-docs:ReturnAListOfGroupsByPhonenumber:POST:/dnc-groups/search": never;
  "admin-lists-api-docs:get-dnis:GET:/dnis": never;
  "admin-lists-api-docs:ReturnCallList:GET:/lists/call-lists": never;
  "admin-lists-api-docs:post_/lists/call-lists:POST:/lists/call-lists": {
  destinationMappings: ReadonlyArray<{
  fieldName: string;
  fieldValue: string;
}>;
};
  "admin-lists-api-docs:DownloadACallList:GET:/lists/call-lists/{listId}": never;
  "admin-lists-api-docs:delete_/lists/call-lists/{listId}:DELETE:/lists/call-lists/{listId}": never;
  "admin-lists-api-docs:DownloadACallListAttempts:GET:/lists/call-lists/{listId}/attempts": never;
  "admin-lists-api-docs:UploadingCallingList:POST:/lists/call-lists/{listId}/upload": NiceCxoneFullApiSchemaPostListUpload;
  "admin-lists-api-docs:delete-lists-call-lists-id-removeProspects:DELETE:/lists/call-lists/{sourceName}/removeProspects": {
  prospectsToRemove?: ReadonlyArray<{
  externalId?: number;
} | null> | null;
};
  "admin-lists-api-docs:GetListJob:GET:/lists/call-lists/jobs": never;
  "admin-lists-api-docs:GetCallingList:GET:/lists/call-lists/jobs/{jobId}": never;
  "admin-lists-api-docs:CancelList:DELETE:/lists/call-lists/jobs/{jobId}": never;
  "admin-routingattributes-api-docs:getRoutingAttributes:GET:/routing-attributes": never;
  "admin-routingattributes-api-docs:getRoutingAttribute:GET:/routing-attributes/{routingAttributeNo}": never;
  "admin-routingattributes-api-docs:addUpdateRoutingAttribute:PUT:/routing-attributes/{routingAttributeNo}": NiceCxoneFullApiSchemaRoutingAttributePutRequest;
  "admin-routingattributes-api-docs:getRoutingAttributeAgents:GET:/routing-attributes/{routingAttributeNo}/agents": never;
  "admin-routingattributes-api-docs:getAgentRoutingAttributes:GET:/agents/{agentNo}/routing-attributes": never;
  "admin-routingattributes-api-docs:updateAgentRoutingAttributes:PUT:/agents/{agentNo}/routing-attributes": NiceCxoneFullApiSchemaAgentRoutingAttributePutRequest;
  "admin-routingattributes-api-docs:removeAgentRoutingAttribute:DELETE:/agents/routing-attributes/{routingAttributeNo}": NiceCxoneFullApiSchemaAgentRoutingAttributeDeleteRequest;
  "admin-scriptschedules-api-docs:get-script-schedules:GET:/script-schedules": never;
  "admin-scriptschedules-api-docs:get-script-schedules-id:GET:/script-schedules/{scriptScheduleId}": never;
  "admin-scriptschedules-api-docs:get-script-schedules-id-audit-history:GET:/script-schedules/{scriptScheduleId}/audit-history": never;
  "admin-scriptschedules-api-docs:get-script-schedules-scripts:GET:/script-schedules/scripts": never;
  "admin-scriptschedules-api-docs:get-script-schedules-skills:GET:/script-schedules/skills": never;
  "admin-skills-api-docs:get-campaigns:GET:/campaigns": never;
  "admin-skills-api-docs:post-campaigns:POST:/campaigns": {
  name: string;
  divisionId?: number;
  notes?: string;
  description?: string;
  isActive?: boolean;
};
  "admin-skills-api-docs:get-campaigns-id:GET:/campaigns/{campaignId}": never;
  "admin-skills-api-docs:put-campaigns-id:PUT:/campaigns/{campaignId}": {
  name: string;
  divisionId?: number;
  notes?: string;
  description?: string;
  isActive?: boolean;
};
  "admin-skills-api-docs:get-campaigns-id-skills-unassigned:GET:/campaigns/{campaignId}/skills/unassigned": never;
  "admin-skills-api-docs:patch-campaigns-id-status:PATCH:/campaigns/{campaignId}/status": never;
  "admin-skills-api-docs:get-campaigns-id-audit-history:GET:/campaigns/{campaignId}/audit-history": never;
  "admin-skills-api-docs:get-dispositions-skills:GET:/dispositions/skills": never;
  "admin-skills-api-docs:get-dispositions-id:GET:/dispositions/{dispositionId}": never;
  "admin-skills-api-docs:put-dispositions-id:PUT:/dispositions/{dispositionId}": {
  dispositionName?: string;
  classificationId?: number;
  isPreviewDisposition?: boolean;
  isActive?: boolean;
  notes?: string;
};
  "admin-skills-api-docs:get-dispositions-id-skills:GET:/dispositions/{dispositionId}/skills": never;
  "admin-skills-api-docs:DispostionClassifications:GET:/dispositions/classifications": never;
  "admin-skills-api-docs:patch-status-by-dispositions-id:PATCH:/dispositions/{dispositionId}/status": never;
  "admin-skills-api-docs:get-dispositions-id-audit-history:GET:/dispositions/{dispositionId}/audit-history": never;
  "admin-skills-api-docs:get-skills:GET:/skills": never;
  "admin-skills-api-docs:post-skills:POST:/skills": {
  skills?: ReadonlyArray<{
  mediaTypeId?: number;
  skillName?: string;
  divisionNo?: number;
  isOutbound?: boolean;
  outboundStrategy?: string;
  outboundTelecomRouteId?: number;
  campaignId?: number;
  callerIdOverride?: string;
  emailFromAddress?: string;
  emailFromEditable?: boolean;
  emailBccAddress?: string;
  FocusMetric?: number;
  EquityLevel?: number;
  FocusLock?: number;
  FallbackTime?: number;
  scriptId?: number;
  reskillHours?: number;
  minWFIAgents?: number;
  minWFIAvailableAgents?: number;
  requireManualAccept?: boolean;
  interruptible?: boolean;
  enableParking?: boolean;
  minWorkingTime?: number;
  agentless?: boolean;
  agentlessPorts?: number;
  notes?: string;
  acwTypeId?: number;
  requireDisposition?: boolean;
  allowSecondaryDisposition?: boolean;
  stateIdACW?: number;
  maxSecondsACW?: number;
  agentRestTime?: number;
  displayThankyou?: boolean;
  thankYouLink?: string;
  popThankYou?: boolean;
  popThankYouURL?: string;
  makeTranscriptAvailable?: boolean;
  transcriptFromAddress?: string;
  priorityBlending?: boolean;
  callSuppressionScriptId?: number;
  useScreenPops?: boolean;
  screenPopTriggerEvent?: number;
  useCustomScreenPops?: boolean;
  screenPopType?: string;
  screenPopDetails?: string;
  initialPriority?: number;
  acceleration?: number;
  maxPriority?: number;
  serviceLevelThreshold?: number;
  serviceLevelGoal?: number;
  enableShortAbandon?: boolean;
  shortAbandonThreshold?: number;
  countShortAbandons?: boolean;
  chatWarningThreshold?: number;
  agentTypingIndicator?: boolean;
  patronTypingPreview?: boolean;
  smsTransportCodeId?: number;
  messageTemplateId?: number;
  dispositions?: ReadonlyArray<{
  dispositionId: number;
  priority: number;
}>;
  deliverMultipleNumbersSerially?: boolean;
  cradleToGrave?: boolean;
  priorityInterrupt?: boolean;
  acwPostTimeoutStateId?: number;
  workItemQueueType?: string;
  evaluationCriteria?: number;
}>;
};
  "admin-skills-api-docs:get-skills-parameters:GET:/skills/parameters": never;
  "admin-skills-api-docs:get-skills-id:GET:/skills/{skillId}": never;
  "admin-skills-api-docs:put-skills-id:PUT:/skills/{skillId}": {
  skill: {
  skillName?: string;
  mediatypeid?: number;
  divisionNo?: number;
  campaignId?: number;
  callerIdOverride?: string;
  emailFromAddress?: string;
  emailFromEditable?: boolean;
  emailBccAddress?: string;
  scriptId?: number;
  reskillHours?: number;
  minWFIAgents?: number;
  minWFIAvailableAgents?: number;
  requireManualAccept?: boolean;
  interruptible?: boolean;
  isActive?: boolean;
  enableParking?: boolean;
  minWorkingTime?: number;
  agentless?: boolean;
  agentlessPorts?: number;
  notes?: string;
  acwTypeId?: number;
  requireDisposition?: boolean;
  allowSecondaryDisposition?: boolean;
  stateIdACW?: number;
  maxSecondsACW?: number;
  agentRestTime?: number;
  displayThankyou?: boolean;
  thankYouLink?: string;
  popThankYou?: boolean;
  popThankYouUrl?: string;
  makeTranscriptAvailable?: boolean;
  transcriptFromAddress?: string;
  priorityBlending?: boolean;
  callSuppressionScriptId?: number;
  useScreenPops?: boolean;
  screenPopTriggerEvent?: number;
  useCustomScreenPops?: boolean;
  screenPopType?: string;
  screenPopDetails?: string;
  initialPriority?: number;
  acceleration?: number;
  maxPriority?: number;
  serviceLevelThreshold?: number;
  serviceLevelGoal?: number;
  enableShortAbandon?: boolean;
  shortAbandonThreshold?: number;
  countShortAbandons?: boolean;
  chatWarningThreshold?: number;
  agentTypingIndicator?: boolean;
  patronTypingIndicator?: boolean;
  smsTransportCodeId?: number;
  messageTemplateId?: number;
  dispositions?: ReadonlyArray<{
  dispositionId: number;
  priority: number;
}>;
  deliverMultipleNumbersSerially?: boolean;
  cradleToGrave?: boolean;
  priorityInterrupt?: boolean;
  acwPostTimeoutStateId?: number;
  outboundTelecomRouteId?: number;
  evaluationCriteria?: number;
  EquityLevel?: number;
  FallbackTime?: number;
  FocusLock?: number;
  FocusMetric?: number;
};
};
  "admin-skills-api-docs:get-skills-id-parameters:GET:/skills/{skillId}/parameters": never;
  "admin-skills-api-docs:get-skills-id-thank-you-page:GET:/skills/{skillId}/thank-you-page": never;
  "admin-skills-api-docs:post_/skills/{skillId}/start:POST:/skills/{skillId}/start": never;
  "admin-skills-api-docs:post_/skills/{skillId}/stop:POST:/skills/{skillId}/stop": never;
  "admin-skills-api-docs:getAgentsAllSkills:GET:/skills/agents": never;
  "admin-skills-api-docs:getAgentsBySkillId:GET:/skills/{skillId}/agents": never;
  "admin-skills-api-docs:AgentAssignmentsSkill:POST:/skills/{skillId}/agents": NiceCxoneFullApiSchemaPostSkillAgentsRequest;
  "admin-skills-api-docs:ModifyAssignmentsSkill:PUT:/skills/{skillId}/agents": NiceCxoneFullApiSchemaPostSkillAgentsRequest;
  "admin-skills-api-docs:RemoveAgentAssignmentsSkill:DELETE:/skills/{skillId}/agents": never;
  "admin-skills-api-docs:delete-skills-id-agents-id:DELETE:/skills/{skillId}/agents/{agentId}": never;
  "admin-skills-api-docs:GetAgentsThatAreNotAssignedToSkill:GET:/skills/{skillId}/agents/unassigned": never;
  "admin-skills-api-docs:SKILLCALLDATA:GET:/skills/call-data": never;
  "admin-skills-api-docs:SkillCallData:GET:/skills/{skillId}/call-data": never;
  "admin-skills-api-docs:DispositionList:GET:/skills/{skillId}/dispositions": never;
  "admin-skills-api-docs:DispositionsNotAssignedSkill:GET:/skills/{skillId}/dispositions/unassigned": never;
  "admin-skills-api-docs:GetTagsSkill:GET:/skills/{skillId}/tags": never;
  "admin-skills-api-docs:AssignTagSkill:POST:/skills/{skillId}/tags": NiceCxoneFullApiSchemaPostSkillTagsRequest;
  "admin-skills-api-docs:RemoveTagsSkill:DELETE:/skills/{skillId}/tags": never;
  "admin-skills-api-docs:get-skills-id-parameters-general-settings:GET:/skills/{skillId}/parameters/general-settings": never;
  "admin-skills-api-docs:put-skills-id-parameters-general-settings:PUT:/skills/{skillId}/parameters/general-settings": NiceCxoneFullApiSchemaUpdateSkillGenral;
  "admin-skills-api-docs:get-skills-id-parameters-cpa-management:GET:/skills/{skillId}/parameters/cpa-management": never;
  "admin-skills-api-docs:put-skills-id-parameters-cpa-management:PUT:/skills/{skillId}/parameters/cpa-management": {
  cpaSettings: {
  abandonMessagePath?: string;
  abandonMsgMode?: 0 | 1 | 2;
  abandonTimeout?: number;
  agentNoResponseSeconds?: number;
  agentOverrideOptionAnsweringMachine?: boolean;
  agentOverrideOptionBadNumber?: boolean;
  agentOverrideOptionFax?: boolean;
  agentResponseUtteranceMinimumSeconds?: number;
  agentVoiceThreshold?: number;
  ansMachineDetMode?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  ansMachineMsg?: string | null;
  ansMachineOverrideSeconds?: number;
  customerLiveSilenceSeconds?: number | null;
  customerVoiceThreshold?: number | null;
  enableCPALogging?: boolean | null;
  exceptions?: ReadonlyArray<{
  attempt_No?: number;
  ansMachineDetMode?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  ansMachineMsg?: string | null;
} | null>;
  machineEndSilenceSeconds?: number | null;
  machineEndTimeoutSeconds?: number;
  machineMinimumWithAgentSeconds?: number | null;
  machineMinimumWithoutAgentSeconds?: number | null;
  preConnectCPAEnabled?: boolean | null;
  preConnectCPARecording?: boolean;
  treatProgressAsRinging?: boolean | null;
  utteranceMinimumSeconds?: number | null;
};
};
  "admin-skills-api-docs:get-skills-id-parameters-xs-settings:GET:/skills/{skillId}/parameters/xs-settings": never;
  "admin-skills-api-docs:put-skills-id-parameters-xs-settings:PUT:/skills/{skillId}/parameters/xs-settings": {
  xsSettings: {
  xsScriptID?: number;
  xsCheckinScriptID?: number;
  externalOutboundSkill_No?: string;
  xsSkillChangedActive?: boolean;
  xsGetContactsActive?: boolean;
  xsFreshThreshold?: number;
  xsAvailableThreshold?: number;
  xsReadyThreshold?: number;
  xsNumberToRetrieve?: number;
};
};
  "admin-skills-api-docs:get-skills-id-parameters-delivery-preferences:GET:/skills/{skillId}/parameters/delivery-preferences": never;
  "admin-skills-api-docs:put-skills-id-parameters-delivery-preferences:PUT:/skills/{skillId}/parameters/delivery-preferences": {
  deliveryPreferences: {
  confirmationRequiredDisabled?: boolean;
  confirmationRequiredDeliveryType?: 0 | 1 | 2 | 3 | 4 | 5;
  confirmationRequiredTimeout?: number;
  confirmationRequiredTimeoutSubsequent?: number;
  confirmationRequiredDefaultAccept?: boolean | null;
  confirmationRequiredDefault?: boolean;
  complianceRecordsDisabled?: boolean;
  complianceRecordsDeliveryType?: 0 | 1 | 2 | 3 | 4 | 5;
  complianceRecordsTimeout?: number;
  complianceRecordsTimeoutSubsequent?: number;
  complianceRecordsDefaultAccept?: boolean | null;
  showComplianceButtonReschedule?: boolean;
  showComplianceButtonRequeue?: boolean;
  showComplianceButtonSnooze?: boolean;
  showComplianceButtonDisposition?: boolean;
  showPreviewButtonReschedule?: boolean;
  showPreviewButtonRequeue?: boolean;
  showPreviewButtonSnooze?: boolean;
  showPreviewButtonDisposition?: boolean;
};
};
  "admin-skills-api-docs:get-skills-id-parameters-retry-settings:GET:/skills/{skillId}/parameters/retry-settings": never;
  "admin-skills-api-docs:put-skills-id-parameters-retry-settings:PUT:/skills/{skillId}/parameters/retry-settings": {
  retrySettings: {
  loadNonFresh?: boolean;
  finalizeWhenExhausted?: boolean;
  maximumAttempts?: number;
  minimumRetryMinutes?: number;
  maximumNumberOfHandledCalls?: number;
  restrictedCallingMinutes?: number;
  restrictedCallingMaxAttempts?: number;
  generalStaleMinutes?: number;
  callbackRestMinutes?: number;
  releaseAgentSpecificCalls?: boolean;
  maximumNumberOfCallbacks?: number;
  callbackStaleMinutes?: number;
};
};
  "admin-skills-api-docs:get-skills-id-parameters-schedule-settings:GET:/skills/{skillId}/parameters/schedule-settings": never;
  "admin-skills-api-docs:put-skills-id-parameters-schedule-settings:PUT:/skills/{skillId}/parameters/schedule-settings": {
  scheduleSettings: {
  isScheduled?: boolean;
  sundayStartTime?: string;
  sundayEndTime?: string;
  sundayIsActive?: boolean;
  mondayStartTime?: string;
  mondayEndTime?: string;
  mondayIsActive?: boolean;
  tuesdayStartTime?: string;
  tuesdayEndTime?: string;
  tuesdayIsActive?: boolean;
  wednesdayStartTime?: string;
  wednesdayEndTime?: string;
  wednesdayIsActive?: boolean;
  thursdayStartTime?: string;
  thursdayEndTime?: string;
  thursdayIsActive?: boolean;
  fridayStartTime?: string;
  fridayEndTime?: string;
  fridayIsActive?: boolean;
  saturdayStartTime?: string;
  saturdayEndTime?: string;
  saturdayIsActive?: boolean;
};
};
  "admin-skills-api-docs:put-skills-id-parameters-cadence-settings:PUT:/skills/{skillId}/parameters/cadence-settings": {
  attemptMode?: string | null;
  recordRequestMode?: string | null;
  destinationRetryRestMinutes?: number;
  maximumAttempts?: ReadonlyArray<{
  fieldName?: string | null;
  attempts?: number;
} | null> | null;
  cadences?: ReadonlyArray<{
  fieldName?: string | null;
  attempts?: number;
  timeConstraints?: {
  weekdayTimeConstraints?: ReadonlyArray<{
  startTime?: string | null;
  endTime?: string | null;
} | null> | null;
  weekendTimeConstraints?: ReadonlyArray<{
  startTime?: string | null;
  endTime?: string | null;
} | null> | null;
} | null;
} | null> | null;
};
  "admin-skills-api-docs:get-skills-id-parameters-time-zones:GET:/skills/{skillId}/parameters/time-zones": never;
  "admin-skills-api-docs:put-skills-id-parameters-time-zones:PUT:/skills/{skillId}/parameters/time-zones": {
  timeZoneSettings?: ReadonlyArray<{
  standardName?: string | null;
  startTime?: string | null;
  endTime?: string | null;
  timeZoneActiveToCall?: boolean;
  overrideTime?: boolean;
} | null> | null;
};
  "admin-skills-api-docs:put-skills-id-parameters-list-management:PUT:/skills/{skillId}/parameters/list-management": {
  displayField1Name?: string | null;
  displayField2Name?: string | null;
  listOrderingOptions?: ReadonlyArray<{
  orderType?: string | null;
  direction?: string | null;
} | null> | null;
};
  "admin-skills-api-docs:get-campaigns-id-skills:GET:/campaigns/{campaignId}/skills": never;
  "admin-skills-api-docs:post-campaigns-id-skills:POST:/campaigns/{campaignId}/skills": {
  addAll?: boolean;
  skills?: ReadonlyArray<number>;
};
  "admin-skills-api-docs:delete-campaigns-id-skills:DELETE:/campaigns/{campaignId}/skills": never;
  "admin-skills-api-docs:get-dispositions:GET:/dispositions": never;
  "admin-skills-api-docs:post-dispositions:POST:/dispositions": {
  dispositions: ReadonlyArray<{
  dispositionName: string;
  isPreviewDisposition: boolean;
  classificationId?: number;
}>;
};
  "admin-stationprofiles-api-docs:get-station-profiles:GET:/station-profiles": never;
  "admin-stationprofiles-api-docs:post-station-profiles:POST:/station-profiles": NiceCxoneFullApiSchemaStationProfileRequestBody;
  "admin-stationprofiles-api-docs:get-station-profiles-id:GET:/station-profiles/{stationProfileId}": never;
  "admin-stationprofiles-api-docs:put-station-profiles-id:PUT:/station-profiles/{stationProfileId}": NiceCxoneFullApiSchemaStationProfileRequestBody;
  "admin-stationprofiles-api-docs:delete-station-profiles-id:DELETE:/station-profiles/{stationProfileId}": never;
  "admin-stationprofiles-api-docs:get-station-profiles-id-audit-history:GET:/station-profiles/{stationProfileId}/audit-history": never;
  "admin-stations-api-docs:get-stations:GET:/stations": never;
  "admin-stations-api-docs:create-station:POST:/stations": {
  stationName: string;
  phoneNumber: string;
  callerId: string;
  stationProfileId: number;
  isActive: boolean;
  notes?: string;
  emailRefusalTimeout?: number;
  documentRefusalTimeout?: number;
  chatRefusalTimeout?: number;
  phoneCallRefusalTimeout?: number;
  voiceMailRefusalTimeout?: number;
  workItemRefusalTimeout?: number;
  machineIdentifier?: string;
};
  "admin-stations-api-docs:get-station-by-id:GET:/stations/{stationId}": never;
  "admin-stations-api-docs:update-station:PUT:/stations/{stationId}": {
  stationName: string;
  phoneNumber: string;
  callerId: string;
  stationProfileId: number;
  isActive: boolean;
  notes?: string;
  emailRefusalTimeout?: number;
  documentRefusalTimeout?: number;
  chatRefusalTimeout?: number;
  phoneCallRefusalTimeout?: number;
  voiceMailRefusalTimeout?: number;
  workItemRefusalTimeout?: number;
  machineIdentifier?: string;
};
  "admin-stations-api-docs:get-stations-audit-history:GET:/stations/{stationId}/audit-history": never;
  "admin-stations-api-docs:get-stations-login-history:GET:/stations/{stationId}/login-history": never;
  "admin-stations-api-docs:update-station-status:PATCH:/stations/{stationId}/status": {
  isActive: boolean;
};
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-audit-history:GET:/unavailable-codes/{unavailableCodeId}/audit-history": never;
  "admin-unavailablecodes-api-docs:patch-status-by-unavailable-codes-id:PATCH:/unavailable-codes/{unavailableCodeId}/status": never;
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams:GET:/unavailable-codes/{unavailableCodeId}/teams": never;
  "admin-unavailablecodes-api-docs:post-unavailable-codes-id-teams:POST:/unavailable-codes/{unavailableCodeId}/teams": {
  teams: ReadonlyArray<{
  id: string;
}>;
};
  "admin-unavailablecodes-api-docs:put-unavailable-codes-id-teams:PUT:/unavailable-codes/{unavailableCodeId}/teams": {
  teams: ReadonlyArray<{
  teamId?: string | null;
} | null>;
};
  "admin-unavailablecodes-api-docs:delete-unavailable-codes-id-teams:DELETE:/unavailable-codes/{unavailableCodeId}/teams": {
  teams: ReadonlyArray<{
  id: string;
}>;
};
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams-unassigned:GET:/unavailable-codes/{unavailableCodeId}/teams/unassigned": never;
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id:GET:/unavailable-codes/{unavailableCodeId}": never;
  "admin-unavailablecodes-api-docs:put-unavailable-codes-id:PUT:/unavailable-codes/{unavailableCodeId}": {
  name: string;
  isACW?: boolean;
  agentTimeout?: number;
  isActive?: boolean;
  notes?: string;
};
  "admin-workflowdata-api-docs:list-workflow-data:GET:/workflow-data/list/{activeFlag}": never;
  "admin-workflowdata-api-docs:get-workflow-data:GET:/workflow-data": never;
  "admin-workflowdata-api-docs:create-workflow-data:POST:/workflow-data": {
  profile?: {
  ProfileName?: string;
  Description?: string;
  ProfileID?: number;
};
  data?: {
  date?: {
  Value?: ReadonlyArray<string>;
  Visible?: string;
  Type?: string;
  Ref?: string;
};
};
};
  "admin-workflowdata-api-docs:update-workflow-data:PUT:/workflow-data": {
  profile?: {
  ProfileName?: string;
  Description?: string;
  ProfileID?: number;
};
  data?: {
  date?: {
  Value?: ReadonlyArray<string>;
  Visible?: string;
  Type?: string;
  Ref?: string;
};
};
};
  "admin-workflowdata-api-docs:get-workflow-data-identities:GET:/workflow-data/identities": never;
  "admin-workflowdata-api-docs:get-workflow-data-id:GET:/workflow-data/{workFlowDataId}": never;
  "admin-workflowdata-api-docs:deactivate-workflow-data:PUT:/workflow-data/{workflowDataId}/deactivate": never;
  "admin-workflowdata-api-docs:activate-workflow-data:PUT:/workflow-data/{workflowDataId}/activate": never;
  "agentphone-api-docs:dialAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/dial": never;
  "agentphone-api-docs:muteAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/mute": never;
  "agentphone-api-docs:unmuteAgentLeg:POST:/agent-sessions/{sessionId}/agent-phone/unmute": never;
  "agentphone-api-docs:disconnectAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/end": never;
  "chatrequests-api-docs:addChatContact:POST:/agent-sessions/{sessionId}/interactions/add-chat": never;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-add-text:POST:/agent-sessions/{sessionId}/interactions/add-text": never;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-accept:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept": never;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-reject:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject": never;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-end:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": never;
  "chatrequests-api-docs:activateChatContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate-chat": never;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-send-chat-text:POST:/agent-sessions/{sessionId}/interactions/{contactId}/send-chat-text": never;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-agent": never;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-skill": never;
  "chatrequests-api-docs:AgentTyping:POST:/agent-sessions/{sessionId}/interactions/{contactId}/typing": never;
  "emails-api-docs:AddEmail:POST:/agent-sessions/{sessionId}/interactions/add-email": never;
  "emails-api-docs:EmailOutbound:POST:/agent-sessions/{sessionId}/interactions/email-outbound": never;
  "emails-api-docs:post-agent-sessions-sessionId-interactions-contactId-email-forward:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-forward": never;
  "emails-api-docs:EmailReply:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-reply": never;
  "emails-api-docs:EmailSend:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-send": never;
  "emails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": never;
  "emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-agent": {
  targetAgentId?: string;
  toAddress?: string;
  fromAddress?: string;
  ccAddress?: string;
  bccAddress?: string;
  subject?: string;
  bodyHtml?: string;
  attachments?: string;
  attachmentNames?: string;
  isDraft?: boolean;
  draftEmailGuidStr?: string;
  primaryDispositionId?: string;
  secondaryDispositionId?: string;
  tags?: string;
  notes?: string;
  originalAttachmentNames?: string;
};
  "emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-skill": {
  targetSkillID?: string;
  toAddress?: string;
  fromAddress?: string;
  ccAddress?: string;
  bccAddress?: string;
  subject?: string;
  bodyHtml?: string;
  attachments?: string;
  attachmentNames?: string;
  isDraft?: boolean;
  draftEmailGuidStr?: string;
  primaryDispositionId?: string;
  secondaryDispositionId?: string;
  tags?: string;
  notes?: string;
  originalAttachmentNames?: string;
};
  "emails-api-docs:ParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-park": never;
  "emails-api-docs:UnParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-unpark": never;
  "emails-api-docs:PreveiwEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-preview": never;
  "emails-api-docs:RestoreEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-restore": never;
  "emails-api-docs:post-agent-sessions-id-interactions-id-email-save-draft:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-save-draft": never;
  "personalcon-api-docs:dialerLogon:POST:/agent-sessions/{sessionId}/dialer-login": never;
  "personalcon-api-docs:dialerLogout:POST:/agent-sessions/{sessionId}/dialer-logout": never;
  "personalcon-api-docs:PersonalConSnoozes:POST:/agent-sessions/{sessionId}/interactions/{contactId}/snooze": never;
  "phonecalls-api-docs:agentTransfer:POST:/agent-sessions/{sessionId}/dial-agent": {
  targetAgentId?: string;
  parentContactId?: string;
};
  "phonecalls-api-docs:dialPhone:POST:/agent-sessions/{sessionId}/dial-phone": {
  phoneNumber?: string;
  skillId?: number;
  parentContactId?: number;
  customerId?: string;
  zipCode?: string;
};
  "phonecalls-api-docs:dialSkill:POST:/agent-sessions/{sessionId}/dial-skill": {
  skillId?: number;
  parentContactId?: number;
};
  "phonecalls-api-docs:SendDtmfTone:POST:/agent-sessions/{sessionId}/send-dtmf": never;
  "phonecalls-api-docs:dialAgentConsult:POST:/agent-sessions/{sessionId}/consult-agent": {
  targetAgentId?: string;
  parentContactId?: string;
};
  "phonecalls-api-docs:transferCall:POST:/agent-sessions/{sessionId}/interactions/transfer-calls": never;
  "phonecalls-api-docs:conferenceCall:POST:/agent-sessions/{sessionId}/interactions/conference-calls": never;
  "phonecalls-api-docs:acceptConsultRequest:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept-consult": never;
  "phonecalls-api-docs:holdCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold": never;
  "phonecalls-api-docs:resumeCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume": never;
  "phonecalls-api-docs:endCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": never;
  "phonecalls-api-docs:AmdOverride:POST:/agent-sessions/{sessionId}/interactions/{contactId}/amd-override": never;
  "phonecalls-api-docs:recordACall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/record": never;
  "phonecalls-api-docs:maskACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/mask": never;
  "phonecalls-api-docs:stopMaskingACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/unmask": never;
  "phonecalls-api-docs:IndependentDialed:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial": never;
  "phonecalls-api-docs:IndependentDialOutcome:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial-outcome": never;
  "scheduledcallbacks-api-docs:DialCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/dial": never;
  "scheduledcallbacks-api-docs:RescheduleCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/reschedule": never;
  "scheduledcallbacks-api-docs:agentinteractionscallbackcancel:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/cancel": {
  notes?: string;
};
  "sessions-api-docs:startSession:POST:/agent-sessions": never;
  "sessions-api-docs:joinSession:POST:/agent-sessions/join": never;
  "sessions-api-docs:endSession:DELETE:/agent-sessions/{sessionId}": never;
  "sessions-api-docs:getNextEvent:GET:/agent-sessions/{sessionId}/get-next-event": never;
  "sessions-api-docs:ContinueReskill:POST:/agent-sessions/{sessionId}/continue-reskill": NiceCxoneFullApiSchemaPostReskill;
  "sessions-api-docs:DispositionContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/disposition": NiceCxoneFullApiSchemaDisposition;
  "sessions-api-docs:setAgentStatus:POST:/agent-sessions/{sessionId}/state": never;
  "sessions-api-docs:SendFeedback:POST:/agent-sessions/{sessionId}/submit-feedback": never;
  "sessions-api-docs:PostCustomData:POST:/agent-sessions/{sessionId}/interactions/{contactId}/custom-data": never;
  "sessions-api-docs:agentAddContact:POST:/agent-sessions/{sessionId}/add-contact": never;
  "sessions-api-docs:post-agent-sessions-id-interactions-sms-outbound:POST:/agent-sessions/{sessionId}/interactions/sms-outbound": never;
  "sessions-api-docs:post-agent-sessions-id-interactions-id-activate:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate": never;
  "sessions-api-docs:holdASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold": never;
  "sessions-api-docs:resumeASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume": never;
  "sessions-api-docs:endASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": never;
  "sessions-api-docs:acceptSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept": never;
  "sessions-api-docs:rejectSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject": never;
  "supervisor-api-docs:contactMonitor:POST:/agent-sessions/{sessionId}/monitor": never;
  "supervisor-api-docs:contactCoach:POST:/agent-sessions/{sessionId}/coach": never;
  "supervisor-api-docs:contactBarge:POST:/agent-sessions/{sessionId}/barge": never;
  "supervisor-api-docs:post-agent-sessions-sessionId-take-over:POST:/agent-sessions/{sessionId}/take-over": never;
  "voicemails-api-docs:PlayVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/play-voicemail": number;
  "voicemails-api-docs:PauseVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/pause-voicemail": never;
  "voicemails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": never;
  "voicemails-api-docs:VoicemailTransferAgent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-agent": never;
  "voicemails-api-docs:VoicemailTransferSkill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-skill": never;
  "workitems-api-docs:acceptWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept": never;
  "workitems-api-docs:rejectWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject": never;
  "workitems-api-docs:holdAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold": never;
  "workitems-api-docs:resumeAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume": never;
  "workitems-api-docs:endAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": never;
  "authentication-authenticate-api-docs:passwordReset:PUT:/agents/{agentId}/reset-password": never;
  "authentication-authenticate-api-docs:PasswordChange:PUT:/agents/change-password": never;
  "authentication-globalauthentication-api-docs:getOIDCConfig:GET:/.well-known/openid-configuration": never;
  "authentication-globalauthentication-api-docs:getCXoneConfig:GET:/.well-known/cxone-configuration": never;
  "authentication-globalauthentication-api-docs:get_/auth/jwks:GET:/auth/jwks": never;
  "authentication-globalauthentication-api-docs:getAuthAuthorize:GET:/auth/authorize": never;
  "authentication-globalauthentication-api-docs:authAuthorize:POST:/auth/authorize": (NiceCxoneFullApiSchemaAuthenticateOIDCRequest | NiceCxoneFullApiSchemaAuthenticateUXRequest);
  "authentication-globalauthentication-api-docs:getToken:POST:/auth/token": (NiceCxoneFullApiSchemaTokenAuthcodeRequest | NiceCxoneFullApiSchemaTokenAccessKeyRequest | NiceCxoneFullApiSchemaTokenRefreshRequest | NiceCxoneFullApiSchemaTokenExchangeRequest | NiceCxoneFullApiSchemaTokenImpersonationExchangeRequest);
  "authentication-globalauthentication-api-docs:get_/auth/authorize/logout:GET:/auth/authorize/logout": never;
  "authentication-globalauthentication-api-docs:post_/auth/authorize/logout:POST:/auth/authorize/logout": NiceCxoneFullApiSchemaLogoutRequest;
  "authentication-globalauthentication-api-docs:get_/auth/userinfo:GET:/auth/userinfo": never;
  "authentication-globalauthentication-api-docs:post_/auth/userinfo:POST:/auth/userinfo": never;
  "authentication-globalauthentication-api-docs:getAccountAccessAssociations:GET:/account-access/v1/associations": never;
  "authentication-integrations-api-docs:createApplication:POST:/applications": NiceCxoneFullApiSchemaCreateApplicationV1;
  "authentication-integrations-api-docs:listApplication:GET:/applications": never;
  "authentication-integrations-api-docs:viewApplication:GET:/applications/{applicationId}": never;
  "authentication-integrations-api-docs:patchApplication:PATCH:/applications/{applicationId}": NiceCxoneFullApiSchemaPatchApplicationV1;
  "authentication-integrations-api-docs:deleteApplication:DELETE:/applications/{applicationId}": never;
  "authentication-integrations-api-docs:enableApplication:POST:/applications/{applicationId}-enable": never;
  "authentication-integrations-api-docs:disableApplication:POST:/applications/{applicationId}-disable": never;
  "authentication-universalapplication-api-docs:redirectToGA:GET:/GALandingPage": never;
  "authentication-universalapplication-api-docs:getCallback:GET:/callback": never;
  "businessdata-businessdata-api-docs:updateBusinessDataFieldForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}": ReadonlyArray<{}>;
  "businessdata-businessdata-api-docs:updateBusinessDataFieldAtSegmentLevelForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}/segment/{segmentId}": ReadonlyArray<{}>;
  "cxone-accesskeys-api-docs:CreateAnAccessKeyForAUser:POST:/access-key-management/v1/access-keys": NiceCxoneFullApiSchemaBody;
  "cxone-accesskeys-api-docs:Updates an access key for a user:PATCH:/access-key-management/v1/access-keys": NiceCxoneFullApiSchemaBody1;
  "cxone-accesskeys-api-docs:ReturnsAListOfAccessKeys:GET:/access-key-management/v1/access-keys": never;
  "cxone-accesskeys-api-docs:ReturnsAnAccessKeyConfig:GET:/access-key-management/v1/access-keys/{accessKeyId}": never;
  "cxone-accesskeys-api-docs:DeletesAnAccessKey:DELETE:/access-key-management/v1/access-keys/{accessKeyId}": never;
  "cxone-authorizationmanagement-api-docs:searchRole:POST:/authorization/v1/roles/search": NiceCxoneFullApiSchemaSearchCritera;
  "cxone-billing-api-docs:submitProductUsages:POST:/billing/v1.0/product-usage": ReadonlyArray<NiceCxoneFullApiSchemaProductUsageRequest>;
  "cxone-billing-api-docs:getProductUsageById:GET:/billing/v1.0/product-usage/{productTypeId}": never;
  "cxone-correlationmanagement-api-docs:createCorrelation:POST:/correlation-manager/v1/correlations": NiceCxoneFullApiSchemaCreateCorrelationRequest;
  "cxone-correlationmanagement-api-docs:updateCorrelation:PUT:/correlation-manager/v1/correlations/{correlationId}/{entityId}": NiceCxoneFullApiSchemaUpdateCorrelationRequest;
  "cxone-correlationmanagement-api-docs:searchCorrelations:POST:/correlation-manager/v1/correlations/search": NiceCxoneFullApiSchemaSearchCorrelationRequest;
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/assigned:GET:/agent-profiles/v1/assigned": never;
  "cxone-desktopprofiles-api-docs:AssignableConfigurations:GET:/agent-profiles/v1/configurations": never;
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/search:POST:/agent-profiles/v1/profiles/search": {
  fields?: ReadonlyArray<string>;
  filter?: {
  agentProfileName?: ReadonlyArray<string>;
  status?: ReadonlyArray<string>;
};
  orderBy?: string;
  skip?: number;
  top?: number;
};
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}:GET:/agent-profiles/v1/profiles/{id}": never;
  "cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/{id}:PUT:/agent-profiles/v1/profiles/{id}": {
  agentProfileName?: string;
  agentProfileDescription?: string;
  agentProfileConfigurations?: ReadonlyArray<{
  subCategoryId?: number;
  elementId?: string;
  value?: ReadonlyArray<string>;
}>;
};
  "cxone-desktopprofiles-api-docs:AgentProfile:GET:/agent-profiles/v1/profiles": never;
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles:POST:/agent-profiles/v1/profiles": {
  agentProfileName?: string;
  agentProfileDescription?: string;
  agentProfileConfigurations?: ReadonlyArray<{
  subCategoryId?: number;
  elementId?: string;
  value?: ReadonlyArray<string>;
}>;
};
  "cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/status:PUT:/agent-profiles/v1/profiles/status": {
  agentProfileId?: number;
  status?: string;
};
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}/teams:GET:/agent-profiles/v1/profiles/{id}/teams": never;
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/{id}/teams:POST:/agent-profiles/v1/profiles/{id}/teams": {
  teamId?: ReadonlyArray<number>;
};
  "cxone-desktopprofiles-api-docs:delete_/agent-profiles/v1/profiles/{id}/teams:DELETE:/agent-profiles/v1/profiles/{id}/teams": {
  teamId?: ReadonlyArray<number>;
};
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/teams/search:POST:/agent-profiles/v1/profiles/teams/search": {
  fields?: ReadonlyArray<string>;
  filter?: {
  teamName?: ReadonlyArray<string>;
  status?: ReadonlyArray<string>;
  teamUuids?: ReadonlyArray<string>;
};
  operations?: {
  teamUuid?: string;
};
  orderBy?: string;
  skip?: number;
  top?: number;
};
  "cxone-division-api-docs:post_/division-management/v1/division:POST:/division-management/v1/division": NiceCxoneFullApiSchemaCreateDivisionRequest;
  "cxone-division-api-docs:put_/division-management/v1/division:PUT:/division-management/v1/division": NiceCxoneFullApiSchemaUpdateDivisionRequest;
  "cxone-division-api-docs:get_/division-management/v1/division/{divisionId}:GET:/division-management/v1/division/{divisionId}": never;
  "cxone-division-api-docs:post_/division-management/v1/division/search:POST:/division-management/v1/division/search": NiceCxoneFullApiSchemaDivisionSearchRequest;
  "cxone-division-api-docs:post_/division-management/v1/division/identities:POST:/division-management/v1/division/identities": NiceCxoneFullApiSchemaDivisionSearchRequest;
  "cxone-division-api-docs:get_/division-management/v1/division/{divisionId}/getAllBillingCodes:GET:/division-management/v1/division/{divisionId}/getAllBillingCodes": never;
  "cxone-division-api-docs:get_/division-management/v1/division/billingCode/{billingCode}/validate:GET:/division-management/v1/division/billingCode/{billingCode}/validate": never;
  "cxone-documents-api-docs:createKnowledgeHubConfiguration:POST:/eai-knowledge-hub-services/ingestion-service/v1/documents": {
  clientToken: string;
  dataSourceId: string;
  knowledgeHubId: string;
  documents: string;
  documentParseConfig?: string;
};
  "cxone-documents-api-docs:getDocumentSnapshot:POST:/eai-knowledge-hub-services/ingestion-service/v1/{khId}/documents/snapshot": {
  dataSourceId: string;
  pageToken?: string;
};
  "cxone-exportapi-api-docs:exportCopilotKBTable:POST:/observabilitydashboard/v2/tables/Copilot/KBTable/export-data": NiceCxoneFullApiSchemaCopilotKBTableRequest;
  "cxone-exportapi-api-docs:exportCopilotAQTable:POST:/observabilitydashboard/v2/tables/Copilot/AQTable/export-data": NiceCxoneFullApiSchemaCopilotAQTableRequest;
  "cxone-exportapi-api-docs:exportCopilotASTable:POST:/observabilitydashboard/v2/tables/Copilot/ASTable/export-data": NiceCxoneFullApiSchemaCopilotASTableRequest;
  "cxone-exportapi-api-docs:exportAutopilotKnowledgeGRTable:POST:/observabilitydashboard/v2/tables/AutopilotKnowledge/GRTable/export-data": NiceCxoneFullApiSchemaAutopilotKnowledgeGRTableRequest;
  "cxone-exportapi-api-docs:exportAutopilotGRTable:POST:/observabilitydashboard/v2/tables/autopilot/GRTable/export-data": NiceCxoneFullApiSchemaAutopilotGRTableRequest;
  "cxone-scim-api-docs:searchUser:GET:/scim/v2/Users": never;
  "cxone-scim-api-docs:registerScimUser:POST:/scim/v2/Users": NiceCxoneFullApiSchemaScimRequestCreate;
  "cxone-scim-api-docs:getScimUserById:GET:/scim/v2/Users/{userId}": never;
  "cxone-scim-api-docs:updateScimUser:PUT:/scim/v2/Users/{userId}": NiceCxoneFullApiSchemaScimRequestUpdate;
  "cxone-scim-api-docs:updateScimUserPatch:PATCH:/scim/v2/Users/{userId}": NiceCxoneFullApiSchemaScimRequestPatchUpdate;
  "cxone-scim-api-docs:getSchemas:GET:/scim/v2/Schemas": never;
  "cxone-scim-api-docs:get-basic-auth-Users:GET:/basic-auth/scim/v2/Users": never;
  "cxone-scim-api-docs:post-basic-auth-users:POST:/basic-auth/scim/v2/Users": NiceCxoneFullApiSchemaScimRequestCreate;
  "cxone-scim-api-docs:get-basicauth-ScimUserbyID:GET:/basic-auth/scim/v2/Users/{userId}": never;
  "cxone-scim-api-docs:put-basicauth-ScimUserbyID:PUT:/basic-auth/scim/v2/Users/{userId}": NiceCxoneFullApiSchemaScimRequestUpdate;
  "cxone-scim-api-docs:patch-basic-auth-ScimUserbyID:PATCH:/basic-auth/scim/v2/Users/{userId}": NiceCxoneFullApiSchemaScimRequestPatchUpdate;
  "cxone-scim-api-docs:get-basic-auth-Schemas:GET:/basic-auth/scim/v2/Schemas": never;
  "cxone-usermanagement-api-docs:createTeam:POST:/user-management/v3/teams": NiceCxoneFullApiSchemaTeamRequestCreate;
  "cxone-usermanagement-api-docs:updateTeam:PUT:/user-management/v3/teams": NiceCxoneFullApiSchemaTeamRequestUpdate;
  "cxone-usermanagement-api-docs:getTeamById:GET:/user-management/v3/teams/{teamId}": never;
  "cxone-usermanagement-api-docs:getTeamsByCriteria:POST:/user-management/v4/teams/search": NiceCxoneFullApiSchemaSearchRequestV1;
  "cxone-usermanagement-api-docs:getUserList:GET:/user-management/v1/users": never;
  "cxone-usermanagement-api-docs:registerUserV1:POST:/user-management/v1/users": NiceCxoneFullApiSchemaUserRegistrationRequest;
  "cxone-usermanagement-api-docs:updateUserV1:PUT:/user-management/v1/users": NiceCxoneFullApiSchemaUserUpdateRequest;
  "cxone-usermanagement-api-docs:deactivateUser:POST:/user-management/v1/users/deactivate": NiceCxoneFullApiSchemaUserDeactivateRequest;
  "cxone-usermanagement-api-docs:getUserByIdV3:GET:/user-management/v3/users/{userId}": never;
  "cxone-usermanagement-api-docs:reviveUser:POST:/user-management/v1/users/{userId}/revive": never;
  "cxone-usermanagement-api-docs:getUsersByCriteria:POST:/user-management/v2/users/search": NiceCxoneFullApiSchemaSearchRequest;
  "cxone-usermanagement-api-docs:getUserIdentityList:GET:/user-management/v2/users/identities": never;
  "cxone-usermanagement-api-docs:inviteUserByEmail:POST:/user-management/v2/users/inviteByEmail": NiceCxoneFullApiSchemaUserInvitationRequestEmail;
  "cxone-usermanagement-api-docs:inviteUserById:POST:/user-management/v2/users/inviteById": NiceCxoneFullApiSchemaUserInvitationV2Request;
  "cxone-usermanagement-api-docs:getUserIdentity:GET:/user-management/v1/users/{userId}/identities": never;
  "cxone-usermanagement-api-docs:assignAuthenticatorV1:PUT:/user-management/v1/users/{userId}/login-authenticator": NiceCxoneFullApiSchemaAssignAuthenticatorRequest;
  "dataextraction-dataextraction-api-docs:getAllJobs:GET:/data-extraction/v1/jobs": never;
  "dataextraction-dataextraction-api-docs:extractData:POST:/data-extraction/v1/jobs": NiceCxoneFullApiSchemaExportRequest;
  "dataextraction-dataextraction-api-docs:getJobStatus:GET:/data-extraction/v1/jobs/{jobId}": never;
  "digital-attachment-api-docs:post_attachments_temporary:POST:/attachments/temporary": {
  content: string;
  mimeType: string;
};
  "digital-channel-api-docs:get-external-templates:GET:/channels/{channelId}/external-platform-templates": never;
  "digital-channel-api-docs:create-update-Channel:POST:/channels": NiceCxoneFullApiSchemaNewChannel;
  "digital-channel-api-docs:get-Channels:GET:/channels": never;
  "digital-channel-api-docs:deleteChannel:DELETE:/channels/{channelId}": never;
  "digital-contact-api-docs:searchContacts:GET:/contacts": never;
  "digital-contact-api-docs:getContact:GET:/contacts/{contactNumber}": never;
  "digital-contact-api-docs:updateContact:PUT:/contacts/{contactNumber}": {
  routingQueuePriority?: number;
  proficiency?: {
  from: number;
  to: number;
};
};
  "digital-contact-api-docs:create-contacts-contactnumber-abandon:POST:/contacts/{contactNumber}/abandon": {
  type: "abandon" | "expired" | "shortAbandon";
};
  "digital-contact-api-docs:getContactDetailPagination:GET:/contacts/{contactNumber}/detail/pagination": never;
  "digital-contact-api-docs:getContactMessages:GET:/contacts/{contactNumber}/messages": never;
  "digital-contact-api-docs:changeContactInboxAssignee:PUT:/contacts/{contactNumber}/inbox-assignment": NiceCxoneFullApiSchemaContactInboxAssignmentUpdate;
  "digital-contact-api-docs:unassignContactInboxAssignee:DELETE:/contacts/{contactNumber}/inbox-assignment": never;
  "digital-contact-api-docs:setContactCustomFieldValues:PUT:/contacts/{contactNumber}/custom-fields": ReadonlyArray<NiceCxoneFullApiSchemaCustomField>;
  "digital-contact-api-docs:removeContactCustomFieldValue:DELETE:/contacts/{contactNumber}/custom-fields/{customFieldIdentifier}": never;
  "digital-contact-api-docs:changeContactRoutingQueue:PUT:/contacts/{contactNumber}/routing-queue": NiceCxoneFullApiSchemaContactRoutingQueueUpdate;
  "digital-contact-api-docs:updateContactRoutingProperties:PUT:/contacts/{contactNumber}/routing-properties": NiceCxoneFullApiSchemaContactRoutingPropertiesUpdate;
  "digital-contact-api-docs:sendContactTranscript:POST:/contacts/{contactNumber}/transcript": {
  recipients?: ReadonlyArray<NiceCxoneFullApiSchemaRecipient>;
};
  "digital-contact-api-docs:create-contacts-agent-contacts-close:PUT:/contacts/{contactNumber}/agent-contacts/{agentContactId}/close": never;
  "digital-contact-api-docs:changeContactStatus:PUT:/contacts/{contactNumber}/status": NiceCxoneFullApiSchemaContactStatusUpdate;
  "digital-customer-api-docs:searchCustomers:GET:/customers": never;
  "digital-customer-api-docs:getCustomer:GET:/customers/{customerId}": never;
  "digital-customer-api-docs:getCustomerNotes:GET:/customers/{customerId}/notes": never;
  "digital-customer-api-docs:createCustomerNote:POST:/customers/{customerId}/notes": {
  content: string;
};
  "digital-customer-api-docs:updateCustomerNote:PUT:/customers/{customerId}/notes/{noteId}": {
  content: string;
};
  "digital-customer-api-docs:deleteCustomerNote:DELETE:/customers/{customerId}/notes/{noteId}": never;
  "digital-customer-api-docs:mergeCustomer:PUT:/customers/{customerId}/merge": {
  customerToMerge?: {
  id?: string;
};
};
  "digital-customer-api-docs:removeCustomerCustomFieldValue:DELETE:/customers/{customerId}/custom-fields/{customFieldIdentifier}": never;
  "digital-customer-api-docs:updateCustomerCustomFields:PUT:/customers/{customerId}/custom-fields": ReadonlyArray<NiceCxoneFullApiSchemaCustomField2>;
  "digital-customfields-api-docs:getContactCustomFieldDefinitions:GET:/consumer-contact-custom-fields": never;
  "digital-customfields-api-docs:getCustomerCustomFieldDefinitions:GET:/customers/custom-field-definitions": never;
  "digital-customfields-api-docs:createOrUpdateCustomerCustomFieldDefinition:PUT:/customers/custom-field-definitions": NiceCxoneFullApiSchemaCustomerCustomFieldDefinitionToCreate;
  "digital-message-api-docs:channels-channelId-createmessage:POST:/channels/{channelId}/messages": NiceCxoneFullApiSchemaNewMessage;
  "digital-message-api-docs:updateMessageStatus:PUT:/channels/{channelId}/messages/{messageIdOnExternalPlatform}/status": NiceCxoneFullApiSchemaMessageStatus;
  "digital-message-api-docs:sendOutboundMessage:POST:/channels/{channelId}/outbound": NiceCxoneFullApiSchemaOutboundMessageToCreate;
  "digital-message-api-docs:sendInboundMessage:POST:/channels/{channelId}/inbound": NiceCxoneFullApiSchemaSendInbound;
  "digital-message-api-docs:searchMessages:GET:/messages": never;
  "digital-message-api-docs:getMessage:GET:/messages/{messageId}": never;
  "digital-message-api-docs:removeMessageAuthorName:POST:/messages/{messageId}/author-name-removal": NiceCxoneFullApiSchemaSetContentRemoved;
  "digital-message-api-docs:addMessageTag:PUT:/messages/{messageId}/tags/{tagId}": never;
  "digital-message-api-docs:removeMessageTag:DELETE:/messages/{messageId}/tags/{tagId}": never;
  "digital-message-api-docs:removeMessageContent:POST:/messages/{messageId}/content-removal": NiceCxoneFullApiSchemaSetContentRemoved;
  "digital-message-api-docs:delete-DFO-message-bymessageId:POST:/messages/{messageId}/delete": never;
  "digital-message-api-docs:createMessageNote:POST:/messages/{messageId}/notes": {
  content?: string;
};
  "digital-message-api-docs:updateMessageNote:PUT:/messages/{messageId}/notes/{noteId}": {
  content: string;
};
  "digital-message-api-docs:deleteMessageNote:DELETE:/messages/{messageId}/notes/{noteId}": never;
  "digital-message-api-docs:mark-DFO-message-read:PUT:/messages/{messageId}/read": {
  isRead: boolean;
};
  "digital-message-api-docs:setMessageSentiment:PUT:/messages/{messageId}/sentiment": {
  sentiment: NiceCxoneFullApiSchemaSentiment;
};
  "digital-message-api-docs:add-DFO-message-react:POST:/messages/{messageId}/react/{reactionType}": never;
  "digital-message-api-docs:delete-DFO-message-react:DELETE:/messages/{messageId}/react/{reactionType}": never;
  "digital-routingqueue-api-docs:searchRoutingQueues:GET:/routing-queues": never;
  "digital-tag-api-docs:getTags:GET:/tags": never;
  "digital-tag-api-docs:createTag:PUT:/tags": NiceCxoneFullApiSchemaTagToCreate;
  "digital-thread-api-docs:searchThreads:GET:/threads": never;
  "digital-thread-api-docs:sendSenderAction:POST:/channels/{channelId}/threads/{threadIdOnExternalPlatform}/sender-actions": {
  action?: "isTypingOn" | "isTypingOff";
};
  "digital-thread-api-docs:updateThread:PUT:/channels/{channelId}/threads/{threadIdOnExternalPlatform}": {
  canAddMoreMessages?: boolean;
};
  "digital-verificationtoken-api-docs:getOneTimeToken:GET:/one-time-token/authentication": never;
  "digital-verificationtoken-api-docs:verifyOneTimeToken:POST:/one-time-token/verification": {
  brandId: number;
  userId: number;
  token: string;
  purpose: "login" | "channel-integration" | "custom-component-login";
};
  "interactionanalytics-interactions-api-docs:get-segments-analyzed:GET:/interaction-analytics-gateway/v2/segments/analyzed": never;
  "interactionanalytics-interactions-api-docs:get-segments-segmentId-analyzed-transcript:GET:/interaction-analytics-gateway/v2/segments/{segmentId}/analyzed-transcript": never;
  "mediaplayback-mediaplayback-api-docs:getACDContactRecordingData:GET:/media-playback/v1/contacts": never;
  "mediaplayback-mediaplayback-api-docs:getDataToPlayByContactStatementId:GET:/media-playback/v1/acd-contacts/{acdContactId}/statements/{statementId}": never;
  "mediaplayback-mediaplayback-api-docs:getSegmentRecordingData:GET:/media-playback/v1/segments/{segmentId}": never;
  "patron-callback-api-docs:requestACallback:POST:/queuecallback": never;
  "patron-callback-api-docs:scheduleACallback:POST:/promise": never;
  "patron-chatrequests-api-docs:post-contacts-chats:POST:/contacts/chats": {
  pointOfContact: string;
  fromAddress?: string;
  chatRoomId?: number;
  mediaType: number;
  parameters?: ReadonlyArray<string>;
};
  "patron-chatrequests-api-docs:getChatText:GET:/contacts/chats/{chatSession}": never;
  "patron-chatrequests-api-docs:endChat:DELETE:/contacts/chats/{chatSession}": never;
  "patron-chatrequests-api-docs:post-contacts-chats-id-send-text:POST:/contacts/chats/{chatSession}/send-text": NiceCxoneFullApiSchemaSendText;
  "patron-chatrequests-api-docs:PatronTyping:POST:/contacts/chats/{chatSession}/typing": never;
  "patron-chatrequests-api-docs:PatronTypingPreview:POST:/contacts/chats/{chatSession}/typing-preview": never;
  "patron-chatrequests-api-docs:post-contacts-chats-send-email:POST:/contacts/chats/send-email": {
  toAddress: string;
  fromAddress: string;
  emailBody: string;
};
  "patron-chatrequests-api-docs:getPointChatProfile:GET:/points-of-contact/{pointsOfContactId}/chat-profile": never;
  "patron-workitem-api-docs:requestAWorkitem:POST:/interactions/work-items": never;
  "patron-workitem-api-docs:post-interactions-work-items-persistent:POST:/interactions/work-items-persistent": never;
  "policy-policyinstance-api-docs:createPolicyDefinition:POST:/data-policies/v1/policies": NiceCxoneFullApiSchemaPolicyCreationRequest;
  "policy-policyinstance-api-docs:getPolicies:POST:/data-policies/v1/policies/search": NiceCxoneFullApiSchemaPolicySearchRequest;
  "policy-policyinstance-api-docs:getPolicyDefinition:GET:/data-policies/v1/policies/{policyId}": never;
  "policy-policyinstance-api-docs:getPolicyInstance:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}": never;
  "policy-policyinstance-api-docs:generateEvidenceReportUrl:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}/evidence-reports": never;
  "policy-policyinstance-api-docs:getAllPolicyInstances:GET:/data-policies/v1/policies/{policyId}/policy-instances": never;
  "policy-policyinstance-api-docs:getPolicyInstances:POST:/data-policies/v1/policies/policy-instances/search": NiceCxoneFullApiSchemaPolicyInstancesActivitySearchRequest;
  "privacy-gdpr-api-docs:createGdprErasureRequest:POST:/privacy/v1/erasure": (NiceCxoneFullApiSchemaGdprErasureRequest | NiceCxoneFullApiSchemaGdprErasureRequestAdmin);
  "realtimedata-realtime-api-docs:getAgentStates:GET:/agents/states": never;
  "realtimedata-realtime-api-docs:get-agents-client-data:GET:/agents/client-data": never;
  "realtimedata-realtime-api-docs:put-agents-client-data:PUT:/agents/client-data": never;
  "realtimedata-realtime-api-docs:getAgentStateByid:GET:/agents/{agentId}/states": never;
  "realtimedata-realtime-api-docs:ActiveContacts:GET:/contacts/active": never;
  "realtimedata-realtime-api-docs:ParkedContactDetails:GET:/contacts/parked": never;
  "realtimedata-realtime-api-docs:get_/contacts/states:GET:/contacts/states": never;
  "realtimedata-realtime-api-docs:SkillActivity:GET:/skills/activity": never;
  "realtimedata-realtime-api-docs:post-skills-activity-search:POST:/skills/activity/search": {
  fields?: string;
  top?: number;
  skip?: number;
  filter?: {
  updatedSince?: string;
  mediaTypeId?: string;
  isOutbound?: string;
  skillIds?: ReadonlyArray<number>;
  campaignIds?: ReadonlyArray<number>;
};
};
  "realtimedata-realtime-api-docs:SkillActivityById:GET:/skills/{skillId}/activity": never;
  "realtimedata-realtime-api-docs:agents_agentId_queues:GET:/agents/{agentId}/queues": never;
  "realtimedata-realtime-api-docs:agents_agentIds_queues_details:GET:/agents/{agentId}/queues-detail": never;
  "recording-businessdata-api-docs:post_/interaction-recording-management-service/v1/interactions/business-data-update:POST:/interaction-recording-management-service/v1/interactions/business-data-update": ReadonlyArray<{
  "business-data-key-name"?: string;
}>;
  "recording-interactions-api-docs:post-interaction-mask:POST:/interaction-recording-management-service/v1/interactions/mask": never;
  "recording-interactions-api-docs:post-interaction-unmask:POST:/interaction-recording-management-service/v1/interactions/unmask": never;
  "recording-recordingondemand-api-docs:StopRecord:POST:/interaction-recording-management-service/v1/interactions/start-recording-on-demand": never;
  "recording-recordingondemand-api-docs:ReleaseRecording:POST:/interaction-recording-management-service/v1/interactions/stop-recording-on-demand": never;
  "recording-recordingondemand-api-docs:DoNotRecord:POST:/interaction-recording-management-service/v1/interactions/do-not-record": never;
  "recording-recordingstatus-api-docs:GetRecordingStatus:GET:/interaction-recording-management-service/v1/interactions/get-recording-status": never;
  "recording-screeninteractions-api-docs:StartScreenrecord:POST:/interaction-recording-management-service/v1/interactions/start-screen-interaction-recording": never;
  "recording-screeninteractions-api-docs:StopScreenRecording:POST:/interaction-recording-management-service/v1/interactions/stop-screen-interaction-recording": never;
  "reporting-reporting-api-docs:get_/agents/interaction-history:GET:/agents/interaction-history": never;
  "reporting-reporting-api-docs:getAgentHistoryByid:GET:/agents/{agentId}/interaction-history": never;
  "reporting-reporting-api-docs:RecentContactHistory:GET:/agents/{agentId}/interaction-recent": never;
  "reporting-reporting-api-docs:AgentLoginHistory:GET:/agents/{agentId}/login-history": never;
  "reporting-reporting-api-docs:get_/agents/state-history:GET:/agents/state-history": never;
  "reporting-reporting-api-docs:get_/agents/{agentId}/state-history:GET:/agents/{agentId}/state-history": never;
  "reporting-reporting-api-docs:PerformanceSummary:GET:/agents/performance": never;
  "reporting-reporting-api-docs:AgentPerformanceSummary:GET:/agents/{agentId}/performance": never;
  "reporting-reporting-api-docs:get_/contacts:GET:/contacts": never;
  "reporting-reporting-api-docs:get_/contacts/{contactId}:GET:/contacts/{contactId}": never;
  "reporting-reporting-api-docs:SmsTranscripts:GET:/contacts/sms-transcripts": never;
  "reporting-reporting-api-docs:ContactIdSmsTranscripts:GET:/contacts/{contactId}/sms-transcripts": never;
  "reporting-reporting-api-docs:CompletedContactDetails:GET:/contacts/completed": never;
  "reporting-reporting-api-docs:get_/contacts/state-history:GET:/contacts/state-history": never;
  "reporting-reporting-api-docs:ContactStateHistory:GET:/contacts/{contactId}/state-history": never;
  "reporting-reporting-api-docs:get_/contacts/custom-data:GET:/contacts/custom-data": never;
  "reporting-reporting-api-docs:ContactCustomData:GET:/contacts/{contactId}/custom-data": never;
  "reporting-reporting-api-docs:getFullSkillSummaries:GET:/skills/summary": never;
  "reporting-reporting-api-docs:get_/skills/{skillId}/summary:GET:/skills/{skillId}/summary": never;
  "reporting-reporting-api-docs:getFullSLASummaries:GET:/skills/sla-summary": never;
  "reporting-reporting-api-docs:getFullSLASkillSummary:GET:/skills/{skillId}/sla-summary": never;
  "reporting-reporting-api-docs:TeamPerformanceSummaryTotalsAll:GET:/teams/performance-total": never;
  "reporting-reporting-api-docs:TeamPerformanceSummaryTotals:GET:/teams/{teamId}/performance-total": never;
  "reporting-reporting-api-docs:CustomReports:GET:/reports": never;
  "reporting-reporting-api-docs:ReportJobs:GET:/report-jobs": never;
  "reporting-reporting-api-docs:ReportJobByID:GET:/report-jobs/{jobId}": never;
  "reporting-reporting-api-docs:StartReportJob:POST:/report-jobs/{reportId}": never;
  "reporting-reporting-api-docs:GenerateADatadownloadReportFile:POST:/report-jobs/datadownload/{reportId}": never;
  "reporting-reporting-api-docs:wfmskillscontacts:GET:/wfm-data/skills/contacts": never;
  "reporting-reporting-api-docs:wfmDataAgent:GET:/wfm-data/agents": never;
  "reporting-reporting-api-docs:wfmDailerContactStatistics:GET:/wfm-data/skills/dialer-contacts": never;
  "reporting-reporting-api-docs:wfmAdherenceStatistics:GET:/wfm-data/agents/schedule-adherence": never;
  "reporting-reporting-api-docs:wfmAgentScorecard:GET:/wfm-data/agents/scorecards": never;
  "reporting-reporting-api-docs:wfmAgentPerformance:GET:/wfm-data/skills/agent-performance": never;
  "reporting-reporting-api-docs:get-contacts-id-hierarchy:GET:/contacts/{contactId}/hierarchy": never;
  "wfm-exportschedule-api-docs:exportScheduleAsList:POST:/schedules/export": NiceCxoneFullApiSchemaExportScheduleRequest;
  "wfm-exportsummary-api-docs:get-summary:GET:/timeoff-manager/summary/{activityCodeName}": never;
  "wfm-importallotment-api-docs:put-allotments:PUT:/timeoff-manager/allotments/import": NiceCxoneFullApiSchemaImportUsersAllotmentRequest;
}

export interface NiceCxoneFullApiOperationRequestBodyRequiredMap {
  "admin-addressbook-api-docs:getAddressBooks:GET:/address-books": false;
  "admin-addressbook-api-docs:CreateAddressBookv4:POST:/address-books": false;
  "admin-addressbook-api-docs:DeleteAddressbook:DELETE:/address-books/{addressBookId}": false;
  "admin-addressbook-api-docs:get-address-books-id-agents-assigned:GET:/address-books/{addressBookId}/agents/assigned": false;
  "admin-addressbook-api-docs:get-address-books-id-agents-unassigned:GET:/address-books/{addressBookId}/agents/unassigned": false;
  "admin-addressbook-api-docs:AddressBookAssignmentV4:POST:/address-books/{addressBookId}/assignment": false;
  "admin-addressbook-api-docs:get-address-books-id-dynamic-entries:GET:/address-books/{addressBookId}/dynamic-entries": false;
  "admin-addressbook-api-docs:CreateOrUpdateDynamicAddressbook:PUT:/address-books/{addressBookId}/dynamic-entries": false;
  "admin-addressbook-api-docs:DeleteDynamicAddressBookEntry:DELETE:/address-books/{addressBookId}/dynamic-entries/{externalId}": false;
  "admin-addressbook-api-docs:get-address-books-id-entries:GET:/address-books/{addressBookId}/entries": false;
  "admin-addressbook-api-docs:CreateAddressBookEntries:POST:/address-books/{addressBookId}/entries": false;
  "admin-addressbook-api-docs:UpdateAddressBookEntries:PUT:/address-books/{addressBookId}/entries": false;
  "admin-addressbook-api-docs:DeleteAddressBookEntry:DELETE:/address-books/{addressBookId}/entries/{addressBookEntryId}": false;
  "admin-addressbook-api-docs:AddressBookListForAnAgent:GET:/agents/{agentId}/address-books": false;
  "admin-addressbook-api-docs:AddressBookForCampaign:GET:/campaigns/{campaignId}/address-books": false;
  "admin-addressbook-api-docs:AddressBookForSkill:GET:/skills/{skillId}/address-books": false;
  "admin-addressbook-api-docs:AddressBooksTeam:GET:/teams/{teamId}/address-books": false;
  "admin-agentmessage-api-docs:get-agent-messages:GET:/communications/agent-messages": false;
  "admin-agentmessage-api-docs:post-agent-messages:POST:/communications/agent-messages": true;
  "admin-agentmessage-api-docs:delete-communications-agent-messages:DELETE:/communications/agent-messages": true;
  "admin-agentmessage-api-docs:get-agent-messages-id:GET:/communications/agent-messages/{messageGroupId}": false;
  "admin-agentmessage-api-docs:delete-agent-messages-id:DELETE:/communications/agent-messages/{messageGroupId}": false;
  "admin-agents-api-docs:get-agents:GET:/agents": false;
  "admin-agents-api-docs:operations-Agents-post-agents:POST:/agents": false;
  "admin-agents-api-docs:operations-Agents-put-agents:PUT:/agents": false;
  "admin-agents-api-docs:operations-Agents-get-agents-id:GET:/agents/{agentId|userId}": false;
  "admin-agents-api-docs:operations-Agents-put-agents-id:PUT:/agents/{agentId|userId}": false;
  "admin-agents-api-docs:SetAgentState:POST:/agents/{agentId}/state": false;
  "admin-agents-api-docs:get-agents-skills:GET:/agents/skills": false;
  "admin-agents-api-docs:post-agents-skills:POST:/agents/skills": false;
  "admin-agents-api-docs:post-agents-search:POST:/agents/search": true;
  "admin-agents-api-docs:post-skills-agents-search:POST:/skills/agents/search": true;
  "admin-agents-api-docs:get-agent-configuration:GET:/agents/{agentId}/agent-configuration": false;
  "admin-agents-api-docs:getagentbyagentidgroups:GET:/agents/{agentId}/groups": false;
  "admin-agents-api-docs:getSkillsByAgentId:GET:/agents/{agentId|userId}/skills": false;
  "admin-agents-api-docs:AssignsSkillsToAnAgent:POST:/agents/{agentId|userId}/skills": false;
  "admin-agents-api-docs:ModifySkillAssignmentsForAgent:PUT:/agents/{agentId|userId}/skills": false;
  "admin-agents-api-docs:RemoveSkillAssignmentsForAgent:DELETE:/agents/{agentId|userId}/skills": false;
  "admin-agents-api-docs:GetSkillsNotAssignedToAgent:GET:/agents/{agentId}/skills/unassigned": false;
  "admin-agents-api-docs:AgentSkillData:GET:/agents/skill-data": false;
  "admin-agents-api-docs:AgentSkillDataForSkillid:GET:/agents/{agentId}/skill-data": false;
  "admin-agents-api-docs:put_/agents/{agentId}/custom-event:PUT:/agents/{agentId}/custom-event": false;
  "admin-agents-api-docs:QuickReplies:GET:/agents/quick-replies": false;
  "admin-agents-api-docs:QuickRepliesByAgent:GET:/agents/{agentId}/quick-replies": false;
  "admin-agents-api-docs:CreateMessage:POST:/agents/messages": false;
  "admin-agents-api-docs:deleteMessagebyMessageId:DELETE:/agents/messages/{messageId}": false;
  "admin-agents-api-docs:AgentMessageList:GET:/agents/{agentId}/messages": false;
  "admin-agents-api-docs:AgentIndicatorList:GET:/agents/{agentId}/indicators": false;
  "admin-agents-api-docs:agentLogout:POST:/agents/{agentId}/logout": false;
  "admin-agents-api-docs:GetAgentDialingPatterns:GET:/agent-patterns": false;
  "admin-agents-api-docs:post-agent-patterns-id-transform-phonenumbers:POST:/agent-patterns/{agentpatternId}/transform-phonenumbers": false;
  "admin-agents-api-docs:getAgentStates:GET:/agents-states": false;
  "admin-agents-api-docs:get-agents-extended:GET:/agents/extended": false;
  "admin-agents-api-docs:get-agents-issues:GET:/agents/issues": false;
  "admin-agents-api-docs:get-agent-messages-id:GET:/agent-messages/{messageGroupId}": false;
  "admin-agents-api-docs:get-gents-skills-download:GET:/agents/skills-download": false;
  "admin-agents-api-docs:get_/teams:GET:/teams": false;
  "admin-agents-api-docs:post-teams:POST:/teams": false;
  "admin-agents-api-docs:get-teams-id:GET:/teams/{teamId}": false;
  "admin-agents-api-docs:put-teams-id:PUT:/teams/{teamId}": false;
  "admin-agents-api-docs:TeamsAgents:GET:/teams/agents": false;
  "admin-agents-api-docs:get-teams-id-agents:GET:/teams/{teamId}/agents": false;
  "admin-agents-api-docs:AssignAgentsToTeam:POST:/teams/{teamId}/agents": false;
  "admin-agents-api-docs:RemoveAgentsFromTeam:DELETE:/teams/{teamId}/agents": false;
  "admin-agents-api-docs:get-teams-id-unavailable-codes:GET:/teams/{teamId}/unavailable-codes": false;
  "admin-agents-api-docs:AssignUnavailableCode:POST:/teams/{teamId}/unavailable-codes": true;
  "admin-agents-api-docs:put-teams-id-unavailable-codes:PUT:/teams/{teamId}/unavailable-codes": true;
  "admin-agents-api-docs:RemoveUnavailableCodeTeam:DELETE:/teams/{teamId}/unavailable-codes": false;
  "admin-agents-api-docs:get-access-keys:GET:/access-keys": false;
  "admin-agents-api-docs:post-access-keys:POST:/access-keys": false;
  "admin-agents-api-docs:get-access-keys-id:GET:/access-keys/{accessKeyId}": false;
  "admin-agents-api-docs:delete-access-keys-id:DELETE:/access-keys/{accessKeyId}": false;
  "admin-agents-api-docs:patch-access-keys-id:PATCH:/access-keys/{accessKeyId}": false;
  "admin-agents-api-docs:get-activesupervisors:GET:/activesupervisors": false;
  "admin-agents-api-docs:enhancedCustomerCard:POST:/enhancedcustomercard": true;
  "admin-commitments-api-docs:AgentScheduledCallbacks:GET:/agents/{agentId}/scheduled-callbacks": false;
  "admin-commitments-api-docs:CreateScheduledCallback:POST:/scheduled-callbacks": false;
  "admin-commitments-api-docs:UpdateScheduledCallback:PUT:/scheduled-callbacks/{callbackId}": false;
  "admin-commitments-api-docs:DeleteScheduledCallback:DELETE:/scheduled-callbacks/{callbackId}": false;
  "admin-commitments-api-docs:SkillScheduledCallbacks:GET:/skills/{skillId}/scheduled-callbacks": false;
  "admin-contacts-api-docs:ChatTranscript:GET:/contacts/{contactId}/chat-transcript": false;
  "admin-contacts-api-docs:get-contacts-id-disposition:GET:/contacts/{contactId}/disposition": false;
  "admin-contacts-api-docs:getHistoricalChatTranscript:GET:/contacts/{contactId}/historical-chat-transcript": false;
  "admin-contacts-api-docs:EmailTranscript:GET:/contacts/{contactId}/email-transcript": false;
  "admin-contacts-api-docs:ContactFiles:GET:/contacts/{contactId}/files": false;
  "admin-contacts-api-docs:endAContact:POST:/contacts/{contactId}/end": false;
  "admin-contacts-api-docs:monitorAContactCall:POST:/contacts/{contactId}/monitor": false;
  "admin-contacts-api-docs:recordAContact:POST:/contacts/{contactId}/record": false;
  "admin-contacts-api-docs:post-contacts-id-set-disposition:POST:/contacts/{contactId}/set-disposition": true;
  "admin-contacts-api-docs:AssignTagsContact:POST:/contacts/{contactId}/tags": false;
  "admin-contacts-api-docs:getContactStateDescriptions:GET:/contact-state-descriptions": false;
  "admin-contacts-api-docs:getContactStateById:GET:/contact-state-descriptions/{contactStateId}": false;
  "admin-contacts-api-docs:put-persistent-contacts-id:PUT:/persistent-contacts/{contactId}": false;
  "admin-contacts-api-docs:SignalAContact:POST:/interactions/{contactId}/signal": false;
  "admin-contacts-api-docs:Get-contacts-id-sms-historical-transcript:GET:/contacts/{contactId}/sms-historical-transcript": false;
  "admin-contacts-api-docs:get-contacts-sms-historical-contacts:GET:/contacts/sms-historical-contacts": false;
  "admin-general-api-docs:get-apiversion:GET:/apiversion": false;
  "admin-general-api-docs:get-apiversionreleaseinfo:GET:/apiversionreleaseinfo": false;
  "admin-general-api-docs:BrandingProfiles:GET:/branding-profiles": false;
  "admin-general-api-docs:BusinessUnitInfo:GET:/business-unit": false;
  "admin-general-api-docs:get-business-unit-outbound-routes:GET:/business-unit/outbound-routes": false;
  "admin-general-api-docs:get-agents-id-agent-settings:GET:/agents/{agentId}/agent-settings": false;
  "admin-general-api-docs:GetCountries:GET:/countries": false;
  "admin-general-api-docs:GetsStatesProvinces:GET:/countries/{countryId}/states": false;
  "admin-general-api-docs:DataDefinitions:GET:/data-definitions/data-types": false;
  "admin-general-api-docs:RetrieveAFile:GET:/files": false;
  "admin-general-api-docs:UploadFile:POST:/files": false;
  "admin-general-api-docs:MoveFile:PUT:/files": false;
  "admin-general-api-docs:DeleteFile:DELETE:/files": false;
  "admin-general-api-docs:GetExternalfiles:GET:/files/external": false;
  "admin-general-api-docs:postexternalfiles:POST:/files/external": false;
  "admin-general-api-docs:putexteranlfiles:PUT:/files/external": false;
  "admin-general-api-docs:ReturnFolder:GET:/folders": false;
  "admin-general-api-docs:DeleteFolder:DELETE:/folders": false;
  "admin-general-api-docs:CategoriesAndPriorities:GET:/feedback-categories-and-priorities": false;
  "admin-general-api-docs:GetHiringSources:GET:/hiring-sources": false;
  "admin-general-api-docs:CreateHiringScource:POST:/hiring-sources": false;
  "admin-general-api-docs:get-hours-of-operation:GET:/hours-of-operation": false;
  "admin-general-api-docs:post-hours-of-operation:POST:/hours-of-operation": false;
  "admin-general-api-docs:get-hours-of-operation-identities:GET:/hours-of-operation/identities": false;
  "admin-general-api-docs:get-hours-of-operation-by-id:GET:/hours-of-operation/{hoursOfOperationProfileId}": false;
  "admin-general-api-docs:update-hours-of-operation:PUT:/hours-of-operation/{hoursOfOperationProfileId}": true;
  "admin-general-api-docs:delete-hours-of-operation:DELETE:/hours-of-operation/{hoursOfOperationProfileId}": false;
  "admin-general-api-docs:update-hours-of-operation-skills:PUT:/hours-of-operation/{hoursOfOperationProfileId}/skills": true;
  "admin-general-api-docs:ReturnsLocations:GET:/locations": false;
  "admin-general-api-docs:getMediaTypes:GET:/media-types": false;
  "admin-general-api-docs:getMediaTypeById:GET:/media-types/{mediaTypeId}": false;
  "admin-general-api-docs:MessageTemplates:GET:/message-templates": false;
  "admin-general-api-docs:CreatesMessageTemplate:POST:/message-templates": false;
  "admin-general-api-docs:MessageTemplate:GET:/message-templates/{templateId}": false;
  "admin-general-api-docs:UpdatesMessageTemplate:PUT:/message-templates/{templateId}": false;
  "admin-general-api-docs:getPermissions:GET:/permissions": false;
  "admin-general-api-docs:AgentPermissionsList:GET:/permissions/{agentId}": false;
  "admin-general-api-docs:PhoneCodes:GET:/phone-codes": false;
  "admin-general-api-docs:getPointsOfContact:GET:/points-of-contact": false;
  "admin-general-api-docs:post-points-of-contact:POST:/points-of-contact": false;
  "admin-general-api-docs:getPointOfContactById:GET:/points-of-contact/{pointOfContactId}": false;
  "admin-general-api-docs:put-points-of-contact-id:PUT:/points-of-contact/{pointOfContactId}": false;
  "admin-general-api-docs:GetSecurityProfiles:GET:/security-profiles": false;
  "admin-general-api-docs:GetSecurityProfilesID:GET:/security-profiles/{profileId}": false;
  "admin-general-api-docs:get-script:GET:/scripts": false;
  "admin-general-api-docs:create-script:POST:/scripts": true;
  "admin-general-api-docs:delete-script:DELETE:/scripts": false;
  "admin-general-api-docs:update-script:PUT:/scripts": false;
  "admin-general-api-docs:get-scripts-id:GET:/scripts/{scriptId}": false;
  "admin-general-api-docs:get-search-script:GET:/scripts/search": false;
  "admin-general-api-docs:get_/scripts/files:GET:/scripts/files": false;
  "admin-general-api-docs:post_/scripts/files:POST:/scripts/files": false;
  "admin-general-api-docs:put_/scripts/files:PUT:/scripts/files": false;
  "admin-general-api-docs:delete_/scripts/files:DELETE:/scripts/files": false;
  "admin-general-api-docs:get_/scripts/files/search:GET:/scripts/files/search": false;
  "admin-general-api-docs:post-kick-script:POST:/scripts/kick": false;
  "admin-general-api-docs:get-script-history:GET:/scripts/historyByName": false;
  "admin-general-api-docs:post-start-script:POST:/scripts/start": false;
  "admin-general-api-docs:get-scripts-folders:GET:/script-folders": false;
  "admin-general-api-docs:getServerTime:GET:/server-time": false;
  "admin-general-api-docs:ReturnsTags:GET:/tags": false;
  "admin-general-api-docs:CreatesTag:POST:/tags": false;
  "admin-general-api-docs:GetTagDetailsById:GET:/tags/{tagId}": false;
  "admin-general-api-docs:UpdatesTag:PUT:/tags/{tagId}": false;
  "admin-general-api-docs:get-suppressed-contact:GET:/suppressed-contact": false;
  "admin-general-api-docs:post-suppressed-contact:POST:/suppressed-contact": false;
  "admin-general-api-docs:Timezones:GET:/timezones": false;
  "admin-general-api-docs:get-business-unit-time-zones:GET:/business-unit/time-zones": false;
  "admin-general-api-docs:put-business-unit-time-zones:PUT:/business-unit/time-zones": false;
  "admin-general-api-docs:get-unavailable-codes:GET:/unavailable-codes": false;
  "admin-general-api-docs:post-unavailable-codes:POST:/unavailable-codes": true;
  "admin-general-api-docs:get-phone-numbers:GET:/phone-numbers": false;
  "admin-general-api-docs:get-suppressed-contact-id:GET:/suppressed-contact/{suppressedContactId}": false;
  "admin-general-api-docs:put-suppressed-contact-id:PUT:/suppressed-contact/{suppressedContactId}": false;
  "admin-general-api-docs:delete-suppressed-contact-id:DELETE:/suppressed-contact/{suppressedContactId}": false;
  "admin-groups-api-docs:getgroups:GET:/groups": false;
  "admin-groups-api-docs:postgroups:POST:/groups": false;
  "admin-groups-api-docs:getgroupsbygroupid:GET:/groups/{groupId}": false;
  "admin-groups-api-docs:putgroupsbygroupid:PUT:/groups/{groupId}": false;
  "admin-groups-api-docs:GetGroupAgent:GET:/groups/{groupId}/agents": false;
  "admin-groups-api-docs:blank:POST:/groups/{groupId}/agents": false;
  "admin-groups-api-docs:deleteGroupAgents:DELETE:/groups/{groupId}/agents": false;
  "admin-lists-api-docs:DncGroupsResultSet:GET:/dnc-groups": false;
  "admin-lists-api-docs:post-dnc-groups:POST:/dnc-groups": true;
  "admin-lists-api-docs:GetDNCgroupByID:GET:/dnc-groups/{groupId}": false;
  "admin-lists-api-docs:PutDNCgroupByID:PUT:/dnc-groups/{groupId}": false;
  "admin-lists-api-docs:GetDncGroupsContribSkills:GET:/dnc-groups/{groupId}/contributing-skills": false;
  "admin-lists-api-docs:PostDncGroupsContribSkillsById:POST:/dnc-groups/{groupId}/contributing-skills/{skillId}": false;
  "admin-lists-api-docs:DeleteDncGroupsContribSkillsById:DELETE:/dnc-groups/{groupId}/contributing-skills/{skillId}": false;
  "admin-lists-api-docs:DncGroupsRecords:GET:/dnc-groups/{groupId}/records": false;
  "admin-lists-api-docs:CreateDncGroupRecords:POST:/dnc-groups/{groupId}/records": true;
  "admin-lists-api-docs:DeleteDncGroupRecords:DELETE:/dnc-groups/{groupId}/records": true;
  "admin-lists-api-docs:GetDncGroupsScrubbedSkills:GET:/dnc-groups/{groupId}/scrubbed-skills": false;
  "admin-lists-api-docs:PostDncGroupsScrubbedSkills:POST:/dnc-groups/{groupId}/scrubbed-skills/{skillId}": false;
  "admin-lists-api-docs:DeleteDncGroupsScrubbedSkills:DELETE:/dnc-groups/{groupId}/scrubbed-skills/{skillId}": false;
  "admin-lists-api-docs:ReturnAListOfGroupsByPhonenumber:POST:/dnc-groups/search": false;
  "admin-lists-api-docs:get-dnis:GET:/dnis": false;
  "admin-lists-api-docs:ReturnCallList:GET:/lists/call-lists": false;
  "admin-lists-api-docs:post_/lists/call-lists:POST:/lists/call-lists": true;
  "admin-lists-api-docs:DownloadACallList:GET:/lists/call-lists/{listId}": false;
  "admin-lists-api-docs:delete_/lists/call-lists/{listId}:DELETE:/lists/call-lists/{listId}": false;
  "admin-lists-api-docs:DownloadACallListAttempts:GET:/lists/call-lists/{listId}/attempts": false;
  "admin-lists-api-docs:UploadingCallingList:POST:/lists/call-lists/{listId}/upload": false;
  "admin-lists-api-docs:delete-lists-call-lists-id-removeProspects:DELETE:/lists/call-lists/{sourceName}/removeProspects": false;
  "admin-lists-api-docs:GetListJob:GET:/lists/call-lists/jobs": false;
  "admin-lists-api-docs:GetCallingList:GET:/lists/call-lists/jobs/{jobId}": false;
  "admin-lists-api-docs:CancelList:DELETE:/lists/call-lists/jobs/{jobId}": false;
  "admin-routingattributes-api-docs:getRoutingAttributes:GET:/routing-attributes": false;
  "admin-routingattributes-api-docs:getRoutingAttribute:GET:/routing-attributes/{routingAttributeNo}": false;
  "admin-routingattributes-api-docs:addUpdateRoutingAttribute:PUT:/routing-attributes/{routingAttributeNo}": false;
  "admin-routingattributes-api-docs:getRoutingAttributeAgents:GET:/routing-attributes/{routingAttributeNo}/agents": false;
  "admin-routingattributes-api-docs:getAgentRoutingAttributes:GET:/agents/{agentNo}/routing-attributes": false;
  "admin-routingattributes-api-docs:updateAgentRoutingAttributes:PUT:/agents/{agentNo}/routing-attributes": false;
  "admin-routingattributes-api-docs:removeAgentRoutingAttribute:DELETE:/agents/routing-attributes/{routingAttributeNo}": false;
  "admin-scriptschedules-api-docs:get-script-schedules:GET:/script-schedules": false;
  "admin-scriptschedules-api-docs:get-script-schedules-id:GET:/script-schedules/{scriptScheduleId}": false;
  "admin-scriptschedules-api-docs:get-script-schedules-id-audit-history:GET:/script-schedules/{scriptScheduleId}/audit-history": false;
  "admin-scriptschedules-api-docs:get-script-schedules-scripts:GET:/script-schedules/scripts": false;
  "admin-scriptschedules-api-docs:get-script-schedules-skills:GET:/script-schedules/skills": false;
  "admin-skills-api-docs:get-campaigns:GET:/campaigns": false;
  "admin-skills-api-docs:post-campaigns:POST:/campaigns": true;
  "admin-skills-api-docs:get-campaigns-id:GET:/campaigns/{campaignId}": false;
  "admin-skills-api-docs:put-campaigns-id:PUT:/campaigns/{campaignId}": true;
  "admin-skills-api-docs:get-campaigns-id-skills-unassigned:GET:/campaigns/{campaignId}/skills/unassigned": false;
  "admin-skills-api-docs:patch-campaigns-id-status:PATCH:/campaigns/{campaignId}/status": false;
  "admin-skills-api-docs:get-campaigns-id-audit-history:GET:/campaigns/{campaignId}/audit-history": false;
  "admin-skills-api-docs:get-dispositions-skills:GET:/dispositions/skills": false;
  "admin-skills-api-docs:get-dispositions-id:GET:/dispositions/{dispositionId}": false;
  "admin-skills-api-docs:put-dispositions-id:PUT:/dispositions/{dispositionId}": true;
  "admin-skills-api-docs:get-dispositions-id-skills:GET:/dispositions/{dispositionId}/skills": false;
  "admin-skills-api-docs:DispostionClassifications:GET:/dispositions/classifications": false;
  "admin-skills-api-docs:patch-status-by-dispositions-id:PATCH:/dispositions/{dispositionId}/status": false;
  "admin-skills-api-docs:get-dispositions-id-audit-history:GET:/dispositions/{dispositionId}/audit-history": false;
  "admin-skills-api-docs:get-skills:GET:/skills": false;
  "admin-skills-api-docs:post-skills:POST:/skills": true;
  "admin-skills-api-docs:get-skills-parameters:GET:/skills/parameters": false;
  "admin-skills-api-docs:get-skills-id:GET:/skills/{skillId}": false;
  "admin-skills-api-docs:put-skills-id:PUT:/skills/{skillId}": false;
  "admin-skills-api-docs:get-skills-id-parameters:GET:/skills/{skillId}/parameters": false;
  "admin-skills-api-docs:get-skills-id-thank-you-page:GET:/skills/{skillId}/thank-you-page": false;
  "admin-skills-api-docs:post_/skills/{skillId}/start:POST:/skills/{skillId}/start": false;
  "admin-skills-api-docs:post_/skills/{skillId}/stop:POST:/skills/{skillId}/stop": false;
  "admin-skills-api-docs:getAgentsAllSkills:GET:/skills/agents": false;
  "admin-skills-api-docs:getAgentsBySkillId:GET:/skills/{skillId}/agents": false;
  "admin-skills-api-docs:AgentAssignmentsSkill:POST:/skills/{skillId}/agents": true;
  "admin-skills-api-docs:ModifyAssignmentsSkill:PUT:/skills/{skillId}/agents": true;
  "admin-skills-api-docs:RemoveAgentAssignmentsSkill:DELETE:/skills/{skillId}/agents": false;
  "admin-skills-api-docs:delete-skills-id-agents-id:DELETE:/skills/{skillId}/agents/{agentId}": false;
  "admin-skills-api-docs:GetAgentsThatAreNotAssignedToSkill:GET:/skills/{skillId}/agents/unassigned": false;
  "admin-skills-api-docs:SKILLCALLDATA:GET:/skills/call-data": false;
  "admin-skills-api-docs:SkillCallData:GET:/skills/{skillId}/call-data": false;
  "admin-skills-api-docs:DispositionList:GET:/skills/{skillId}/dispositions": false;
  "admin-skills-api-docs:DispositionsNotAssignedSkill:GET:/skills/{skillId}/dispositions/unassigned": false;
  "admin-skills-api-docs:GetTagsSkill:GET:/skills/{skillId}/tags": false;
  "admin-skills-api-docs:AssignTagSkill:POST:/skills/{skillId}/tags": true;
  "admin-skills-api-docs:RemoveTagsSkill:DELETE:/skills/{skillId}/tags": false;
  "admin-skills-api-docs:get-skills-id-parameters-general-settings:GET:/skills/{skillId}/parameters/general-settings": false;
  "admin-skills-api-docs:put-skills-id-parameters-general-settings:PUT:/skills/{skillId}/parameters/general-settings": false;
  "admin-skills-api-docs:get-skills-id-parameters-cpa-management:GET:/skills/{skillId}/parameters/cpa-management": false;
  "admin-skills-api-docs:put-skills-id-parameters-cpa-management:PUT:/skills/{skillId}/parameters/cpa-management": false;
  "admin-skills-api-docs:get-skills-id-parameters-xs-settings:GET:/skills/{skillId}/parameters/xs-settings": false;
  "admin-skills-api-docs:put-skills-id-parameters-xs-settings:PUT:/skills/{skillId}/parameters/xs-settings": false;
  "admin-skills-api-docs:get-skills-id-parameters-delivery-preferences:GET:/skills/{skillId}/parameters/delivery-preferences": false;
  "admin-skills-api-docs:put-skills-id-parameters-delivery-preferences:PUT:/skills/{skillId}/parameters/delivery-preferences": false;
  "admin-skills-api-docs:get-skills-id-parameters-retry-settings:GET:/skills/{skillId}/parameters/retry-settings": false;
  "admin-skills-api-docs:put-skills-id-parameters-retry-settings:PUT:/skills/{skillId}/parameters/retry-settings": false;
  "admin-skills-api-docs:get-skills-id-parameters-schedule-settings:GET:/skills/{skillId}/parameters/schedule-settings": false;
  "admin-skills-api-docs:put-skills-id-parameters-schedule-settings:PUT:/skills/{skillId}/parameters/schedule-settings": false;
  "admin-skills-api-docs:put-skills-id-parameters-cadence-settings:PUT:/skills/{skillId}/parameters/cadence-settings": false;
  "admin-skills-api-docs:get-skills-id-parameters-time-zones:GET:/skills/{skillId}/parameters/time-zones": false;
  "admin-skills-api-docs:put-skills-id-parameters-time-zones:PUT:/skills/{skillId}/parameters/time-zones": false;
  "admin-skills-api-docs:put-skills-id-parameters-list-management:PUT:/skills/{skillId}/parameters/list-management": false;
  "admin-skills-api-docs:get-campaigns-id-skills:GET:/campaigns/{campaignId}/skills": false;
  "admin-skills-api-docs:post-campaigns-id-skills:POST:/campaigns/{campaignId}/skills": true;
  "admin-skills-api-docs:delete-campaigns-id-skills:DELETE:/campaigns/{campaignId}/skills": false;
  "admin-skills-api-docs:get-dispositions:GET:/dispositions": false;
  "admin-skills-api-docs:post-dispositions:POST:/dispositions": false;
  "admin-stationprofiles-api-docs:get-station-profiles:GET:/station-profiles": false;
  "admin-stationprofiles-api-docs:post-station-profiles:POST:/station-profiles": true;
  "admin-stationprofiles-api-docs:get-station-profiles-id:GET:/station-profiles/{stationProfileId}": false;
  "admin-stationprofiles-api-docs:put-station-profiles-id:PUT:/station-profiles/{stationProfileId}": true;
  "admin-stationprofiles-api-docs:delete-station-profiles-id:DELETE:/station-profiles/{stationProfileId}": false;
  "admin-stationprofiles-api-docs:get-station-profiles-id-audit-history:GET:/station-profiles/{stationProfileId}/audit-history": false;
  "admin-stations-api-docs:get-stations:GET:/stations": false;
  "admin-stations-api-docs:create-station:POST:/stations": true;
  "admin-stations-api-docs:get-station-by-id:GET:/stations/{stationId}": false;
  "admin-stations-api-docs:update-station:PUT:/stations/{stationId}": true;
  "admin-stations-api-docs:get-stations-audit-history:GET:/stations/{stationId}/audit-history": false;
  "admin-stations-api-docs:get-stations-login-history:GET:/stations/{stationId}/login-history": false;
  "admin-stations-api-docs:update-station-status:PATCH:/stations/{stationId}/status": true;
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-audit-history:GET:/unavailable-codes/{unavailableCodeId}/audit-history": false;
  "admin-unavailablecodes-api-docs:patch-status-by-unavailable-codes-id:PATCH:/unavailable-codes/{unavailableCodeId}/status": false;
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams:GET:/unavailable-codes/{unavailableCodeId}/teams": false;
  "admin-unavailablecodes-api-docs:post-unavailable-codes-id-teams:POST:/unavailable-codes/{unavailableCodeId}/teams": false;
  "admin-unavailablecodes-api-docs:put-unavailable-codes-id-teams:PUT:/unavailable-codes/{unavailableCodeId}/teams": false;
  "admin-unavailablecodes-api-docs:delete-unavailable-codes-id-teams:DELETE:/unavailable-codes/{unavailableCodeId}/teams": false;
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams-unassigned:GET:/unavailable-codes/{unavailableCodeId}/teams/unassigned": false;
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id:GET:/unavailable-codes/{unavailableCodeId}": false;
  "admin-unavailablecodes-api-docs:put-unavailable-codes-id:PUT:/unavailable-codes/{unavailableCodeId}": true;
  "admin-workflowdata-api-docs:list-workflow-data:GET:/workflow-data/list/{activeFlag}": false;
  "admin-workflowdata-api-docs:get-workflow-data:GET:/workflow-data": false;
  "admin-workflowdata-api-docs:create-workflow-data:POST:/workflow-data": false;
  "admin-workflowdata-api-docs:update-workflow-data:PUT:/workflow-data": false;
  "admin-workflowdata-api-docs:get-workflow-data-identities:GET:/workflow-data/identities": false;
  "admin-workflowdata-api-docs:get-workflow-data-id:GET:/workflow-data/{workFlowDataId}": false;
  "admin-workflowdata-api-docs:deactivate-workflow-data:PUT:/workflow-data/{workflowDataId}/deactivate": false;
  "admin-workflowdata-api-docs:activate-workflow-data:PUT:/workflow-data/{workflowDataId}/activate": false;
  "agentphone-api-docs:dialAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/dial": false;
  "agentphone-api-docs:muteAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/mute": false;
  "agentphone-api-docs:unmuteAgentLeg:POST:/agent-sessions/{sessionId}/agent-phone/unmute": false;
  "agentphone-api-docs:disconnectAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/end": false;
  "chatrequests-api-docs:addChatContact:POST:/agent-sessions/{sessionId}/interactions/add-chat": false;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-add-text:POST:/agent-sessions/{sessionId}/interactions/add-text": false;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-accept:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept": false;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-reject:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject": false;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-end:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": false;
  "chatrequests-api-docs:activateChatContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate-chat": false;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-send-chat-text:POST:/agent-sessions/{sessionId}/interactions/{contactId}/send-chat-text": false;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-agent": false;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-skill": false;
  "chatrequests-api-docs:AgentTyping:POST:/agent-sessions/{sessionId}/interactions/{contactId}/typing": false;
  "emails-api-docs:AddEmail:POST:/agent-sessions/{sessionId}/interactions/add-email": false;
  "emails-api-docs:EmailOutbound:POST:/agent-sessions/{sessionId}/interactions/email-outbound": false;
  "emails-api-docs:post-agent-sessions-sessionId-interactions-contactId-email-forward:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-forward": false;
  "emails-api-docs:EmailReply:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-reply": false;
  "emails-api-docs:EmailSend:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-send": false;
  "emails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": false;
  "emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-agent": true;
  "emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-skill": true;
  "emails-api-docs:ParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-park": false;
  "emails-api-docs:UnParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-unpark": false;
  "emails-api-docs:PreveiwEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-preview": false;
  "emails-api-docs:RestoreEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-restore": false;
  "emails-api-docs:post-agent-sessions-id-interactions-id-email-save-draft:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-save-draft": false;
  "personalcon-api-docs:dialerLogon:POST:/agent-sessions/{sessionId}/dialer-login": false;
  "personalcon-api-docs:dialerLogout:POST:/agent-sessions/{sessionId}/dialer-logout": false;
  "personalcon-api-docs:PersonalConSnoozes:POST:/agent-sessions/{sessionId}/interactions/{contactId}/snooze": false;
  "phonecalls-api-docs:agentTransfer:POST:/agent-sessions/{sessionId}/dial-agent": true;
  "phonecalls-api-docs:dialPhone:POST:/agent-sessions/{sessionId}/dial-phone": true;
  "phonecalls-api-docs:dialSkill:POST:/agent-sessions/{sessionId}/dial-skill": true;
  "phonecalls-api-docs:SendDtmfTone:POST:/agent-sessions/{sessionId}/send-dtmf": false;
  "phonecalls-api-docs:dialAgentConsult:POST:/agent-sessions/{sessionId}/consult-agent": true;
  "phonecalls-api-docs:transferCall:POST:/agent-sessions/{sessionId}/interactions/transfer-calls": false;
  "phonecalls-api-docs:conferenceCall:POST:/agent-sessions/{sessionId}/interactions/conference-calls": false;
  "phonecalls-api-docs:acceptConsultRequest:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept-consult": false;
  "phonecalls-api-docs:holdCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold": false;
  "phonecalls-api-docs:resumeCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume": false;
  "phonecalls-api-docs:endCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": false;
  "phonecalls-api-docs:AmdOverride:POST:/agent-sessions/{sessionId}/interactions/{contactId}/amd-override": false;
  "phonecalls-api-docs:recordACall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/record": false;
  "phonecalls-api-docs:maskACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/mask": false;
  "phonecalls-api-docs:stopMaskingACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/unmask": false;
  "phonecalls-api-docs:IndependentDialed:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial": false;
  "phonecalls-api-docs:IndependentDialOutcome:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial-outcome": false;
  "scheduledcallbacks-api-docs:DialCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/dial": false;
  "scheduledcallbacks-api-docs:RescheduleCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/reschedule": false;
  "scheduledcallbacks-api-docs:agentinteractionscallbackcancel:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/cancel": false;
  "sessions-api-docs:startSession:POST:/agent-sessions": false;
  "sessions-api-docs:joinSession:POST:/agent-sessions/join": false;
  "sessions-api-docs:endSession:DELETE:/agent-sessions/{sessionId}": false;
  "sessions-api-docs:getNextEvent:GET:/agent-sessions/{sessionId}/get-next-event": false;
  "sessions-api-docs:ContinueReskill:POST:/agent-sessions/{sessionId}/continue-reskill": false;
  "sessions-api-docs:DispositionContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/disposition": true;
  "sessions-api-docs:setAgentStatus:POST:/agent-sessions/{sessionId}/state": false;
  "sessions-api-docs:SendFeedback:POST:/agent-sessions/{sessionId}/submit-feedback": false;
  "sessions-api-docs:PostCustomData:POST:/agent-sessions/{sessionId}/interactions/{contactId}/custom-data": false;
  "sessions-api-docs:agentAddContact:POST:/agent-sessions/{sessionId}/add-contact": false;
  "sessions-api-docs:post-agent-sessions-id-interactions-sms-outbound:POST:/agent-sessions/{sessionId}/interactions/sms-outbound": false;
  "sessions-api-docs:post-agent-sessions-id-interactions-id-activate:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate": false;
  "sessions-api-docs:holdASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold": false;
  "sessions-api-docs:resumeASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume": false;
  "sessions-api-docs:endASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": false;
  "sessions-api-docs:acceptSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept": false;
  "sessions-api-docs:rejectSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject": false;
  "supervisor-api-docs:contactMonitor:POST:/agent-sessions/{sessionId}/monitor": false;
  "supervisor-api-docs:contactCoach:POST:/agent-sessions/{sessionId}/coach": false;
  "supervisor-api-docs:contactBarge:POST:/agent-sessions/{sessionId}/barge": false;
  "supervisor-api-docs:post-agent-sessions-sessionId-take-over:POST:/agent-sessions/{sessionId}/take-over": false;
  "voicemails-api-docs:PlayVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/play-voicemail": false;
  "voicemails-api-docs:PauseVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/pause-voicemail": false;
  "voicemails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": false;
  "voicemails-api-docs:VoicemailTransferAgent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-agent": false;
  "voicemails-api-docs:VoicemailTransferSkill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-skill": false;
  "workitems-api-docs:acceptWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept": false;
  "workitems-api-docs:rejectWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject": false;
  "workitems-api-docs:holdAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold": false;
  "workitems-api-docs:resumeAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume": false;
  "workitems-api-docs:endAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": false;
  "authentication-authenticate-api-docs:passwordReset:PUT:/agents/{agentId}/reset-password": false;
  "authentication-authenticate-api-docs:PasswordChange:PUT:/agents/change-password": false;
  "authentication-globalauthentication-api-docs:getOIDCConfig:GET:/.well-known/openid-configuration": false;
  "authentication-globalauthentication-api-docs:getCXoneConfig:GET:/.well-known/cxone-configuration": false;
  "authentication-globalauthentication-api-docs:get_/auth/jwks:GET:/auth/jwks": false;
  "authentication-globalauthentication-api-docs:getAuthAuthorize:GET:/auth/authorize": false;
  "authentication-globalauthentication-api-docs:authAuthorize:POST:/auth/authorize": false;
  "authentication-globalauthentication-api-docs:getToken:POST:/auth/token": false;
  "authentication-globalauthentication-api-docs:get_/auth/authorize/logout:GET:/auth/authorize/logout": false;
  "authentication-globalauthentication-api-docs:post_/auth/authorize/logout:POST:/auth/authorize/logout": true;
  "authentication-globalauthentication-api-docs:get_/auth/userinfo:GET:/auth/userinfo": false;
  "authentication-globalauthentication-api-docs:post_/auth/userinfo:POST:/auth/userinfo": false;
  "authentication-globalauthentication-api-docs:getAccountAccessAssociations:GET:/account-access/v1/associations": false;
  "authentication-integrations-api-docs:createApplication:POST:/applications": false;
  "authentication-integrations-api-docs:listApplication:GET:/applications": false;
  "authentication-integrations-api-docs:viewApplication:GET:/applications/{applicationId}": false;
  "authentication-integrations-api-docs:patchApplication:PATCH:/applications/{applicationId}": false;
  "authentication-integrations-api-docs:deleteApplication:DELETE:/applications/{applicationId}": false;
  "authentication-integrations-api-docs:enableApplication:POST:/applications/{applicationId}-enable": false;
  "authentication-integrations-api-docs:disableApplication:POST:/applications/{applicationId}-disable": false;
  "authentication-universalapplication-api-docs:redirectToGA:GET:/GALandingPage": false;
  "authentication-universalapplication-api-docs:getCallback:GET:/callback": false;
  "businessdata-businessdata-api-docs:updateBusinessDataFieldForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}": true;
  "businessdata-businessdata-api-docs:updateBusinessDataFieldAtSegmentLevelForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}/segment/{segmentId}": true;
  "cxone-accesskeys-api-docs:CreateAnAccessKeyForAUser:POST:/access-key-management/v1/access-keys": false;
  "cxone-accesskeys-api-docs:Updates an access key for a user:PATCH:/access-key-management/v1/access-keys": false;
  "cxone-accesskeys-api-docs:ReturnsAListOfAccessKeys:GET:/access-key-management/v1/access-keys": false;
  "cxone-accesskeys-api-docs:ReturnsAnAccessKeyConfig:GET:/access-key-management/v1/access-keys/{accessKeyId}": false;
  "cxone-accesskeys-api-docs:DeletesAnAccessKey:DELETE:/access-key-management/v1/access-keys/{accessKeyId}": false;
  "cxone-authorizationmanagement-api-docs:searchRole:POST:/authorization/v1/roles/search": false;
  "cxone-billing-api-docs:submitProductUsages:POST:/billing/v1.0/product-usage": false;
  "cxone-billing-api-docs:getProductUsageById:GET:/billing/v1.0/product-usage/{productTypeId}": false;
  "cxone-correlationmanagement-api-docs:createCorrelation:POST:/correlation-manager/v1/correlations": true;
  "cxone-correlationmanagement-api-docs:updateCorrelation:PUT:/correlation-manager/v1/correlations/{correlationId}/{entityId}": true;
  "cxone-correlationmanagement-api-docs:searchCorrelations:POST:/correlation-manager/v1/correlations/search": true;
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/assigned:GET:/agent-profiles/v1/assigned": false;
  "cxone-desktopprofiles-api-docs:AssignableConfigurations:GET:/agent-profiles/v1/configurations": false;
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/search:POST:/agent-profiles/v1/profiles/search": true;
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}:GET:/agent-profiles/v1/profiles/{id}": false;
  "cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/{id}:PUT:/agent-profiles/v1/profiles/{id}": true;
  "cxone-desktopprofiles-api-docs:AgentProfile:GET:/agent-profiles/v1/profiles": false;
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles:POST:/agent-profiles/v1/profiles": true;
  "cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/status:PUT:/agent-profiles/v1/profiles/status": true;
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}/teams:GET:/agent-profiles/v1/profiles/{id}/teams": false;
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/{id}/teams:POST:/agent-profiles/v1/profiles/{id}/teams": true;
  "cxone-desktopprofiles-api-docs:delete_/agent-profiles/v1/profiles/{id}/teams:DELETE:/agent-profiles/v1/profiles/{id}/teams": true;
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/teams/search:POST:/agent-profiles/v1/profiles/teams/search": true;
  "cxone-division-api-docs:post_/division-management/v1/division:POST:/division-management/v1/division": true;
  "cxone-division-api-docs:put_/division-management/v1/division:PUT:/division-management/v1/division": true;
  "cxone-division-api-docs:get_/division-management/v1/division/{divisionId}:GET:/division-management/v1/division/{divisionId}": false;
  "cxone-division-api-docs:post_/division-management/v1/division/search:POST:/division-management/v1/division/search": true;
  "cxone-division-api-docs:post_/division-management/v1/division/identities:POST:/division-management/v1/division/identities": true;
  "cxone-division-api-docs:get_/division-management/v1/division/{divisionId}/getAllBillingCodes:GET:/division-management/v1/division/{divisionId}/getAllBillingCodes": false;
  "cxone-division-api-docs:get_/division-management/v1/division/billingCode/{billingCode}/validate:GET:/division-management/v1/division/billingCode/{billingCode}/validate": false;
  "cxone-documents-api-docs:createKnowledgeHubConfiguration:POST:/eai-knowledge-hub-services/ingestion-service/v1/documents": true;
  "cxone-documents-api-docs:getDocumentSnapshot:POST:/eai-knowledge-hub-services/ingestion-service/v1/{khId}/documents/snapshot": true;
  "cxone-exportapi-api-docs:exportCopilotKBTable:POST:/observabilitydashboard/v2/tables/Copilot/KBTable/export-data": true;
  "cxone-exportapi-api-docs:exportCopilotAQTable:POST:/observabilitydashboard/v2/tables/Copilot/AQTable/export-data": true;
  "cxone-exportapi-api-docs:exportCopilotASTable:POST:/observabilitydashboard/v2/tables/Copilot/ASTable/export-data": true;
  "cxone-exportapi-api-docs:exportAutopilotKnowledgeGRTable:POST:/observabilitydashboard/v2/tables/AutopilotKnowledge/GRTable/export-data": true;
  "cxone-exportapi-api-docs:exportAutopilotGRTable:POST:/observabilitydashboard/v2/tables/autopilot/GRTable/export-data": true;
  "cxone-scim-api-docs:searchUser:GET:/scim/v2/Users": false;
  "cxone-scim-api-docs:registerScimUser:POST:/scim/v2/Users": true;
  "cxone-scim-api-docs:getScimUserById:GET:/scim/v2/Users/{userId}": false;
  "cxone-scim-api-docs:updateScimUser:PUT:/scim/v2/Users/{userId}": true;
  "cxone-scim-api-docs:updateScimUserPatch:PATCH:/scim/v2/Users/{userId}": true;
  "cxone-scim-api-docs:getSchemas:GET:/scim/v2/Schemas": false;
  "cxone-scim-api-docs:get-basic-auth-Users:GET:/basic-auth/scim/v2/Users": false;
  "cxone-scim-api-docs:post-basic-auth-users:POST:/basic-auth/scim/v2/Users": true;
  "cxone-scim-api-docs:get-basicauth-ScimUserbyID:GET:/basic-auth/scim/v2/Users/{userId}": false;
  "cxone-scim-api-docs:put-basicauth-ScimUserbyID:PUT:/basic-auth/scim/v2/Users/{userId}": true;
  "cxone-scim-api-docs:patch-basic-auth-ScimUserbyID:PATCH:/basic-auth/scim/v2/Users/{userId}": true;
  "cxone-scim-api-docs:get-basic-auth-Schemas:GET:/basic-auth/scim/v2/Schemas": false;
  "cxone-usermanagement-api-docs:createTeam:POST:/user-management/v3/teams": false;
  "cxone-usermanagement-api-docs:updateTeam:PUT:/user-management/v3/teams": false;
  "cxone-usermanagement-api-docs:getTeamById:GET:/user-management/v3/teams/{teamId}": false;
  "cxone-usermanagement-api-docs:getTeamsByCriteria:POST:/user-management/v4/teams/search": false;
  "cxone-usermanagement-api-docs:getUserList:GET:/user-management/v1/users": false;
  "cxone-usermanagement-api-docs:registerUserV1:POST:/user-management/v1/users": false;
  "cxone-usermanagement-api-docs:updateUserV1:PUT:/user-management/v1/users": false;
  "cxone-usermanagement-api-docs:deactivateUser:POST:/user-management/v1/users/deactivate": false;
  "cxone-usermanagement-api-docs:getUserByIdV3:GET:/user-management/v3/users/{userId}": false;
  "cxone-usermanagement-api-docs:reviveUser:POST:/user-management/v1/users/{userId}/revive": false;
  "cxone-usermanagement-api-docs:getUsersByCriteria:POST:/user-management/v2/users/search": false;
  "cxone-usermanagement-api-docs:getUserIdentityList:GET:/user-management/v2/users/identities": false;
  "cxone-usermanagement-api-docs:inviteUserByEmail:POST:/user-management/v2/users/inviteByEmail": true;
  "cxone-usermanagement-api-docs:inviteUserById:POST:/user-management/v2/users/inviteById": true;
  "cxone-usermanagement-api-docs:getUserIdentity:GET:/user-management/v1/users/{userId}/identities": false;
  "cxone-usermanagement-api-docs:assignAuthenticatorV1:PUT:/user-management/v1/users/{userId}/login-authenticator": false;
  "dataextraction-dataextraction-api-docs:getAllJobs:GET:/data-extraction/v1/jobs": false;
  "dataextraction-dataextraction-api-docs:extractData:POST:/data-extraction/v1/jobs": true;
  "dataextraction-dataextraction-api-docs:getJobStatus:GET:/data-extraction/v1/jobs/{jobId}": false;
  "digital-attachment-api-docs:post_attachments_temporary:POST:/attachments/temporary": true;
  "digital-channel-api-docs:get-external-templates:GET:/channels/{channelId}/external-platform-templates": false;
  "digital-channel-api-docs:create-update-Channel:POST:/channels": true;
  "digital-channel-api-docs:get-Channels:GET:/channels": false;
  "digital-channel-api-docs:deleteChannel:DELETE:/channels/{channelId}": false;
  "digital-contact-api-docs:searchContacts:GET:/contacts": false;
  "digital-contact-api-docs:getContact:GET:/contacts/{contactNumber}": false;
  "digital-contact-api-docs:updateContact:PUT:/contacts/{contactNumber}": false;
  "digital-contact-api-docs:create-contacts-contactnumber-abandon:POST:/contacts/{contactNumber}/abandon": true;
  "digital-contact-api-docs:getContactDetailPagination:GET:/contacts/{contactNumber}/detail/pagination": false;
  "digital-contact-api-docs:getContactMessages:GET:/contacts/{contactNumber}/messages": false;
  "digital-contact-api-docs:changeContactInboxAssignee:PUT:/contacts/{contactNumber}/inbox-assignment": true;
  "digital-contact-api-docs:unassignContactInboxAssignee:DELETE:/contacts/{contactNumber}/inbox-assignment": false;
  "digital-contact-api-docs:setContactCustomFieldValues:PUT:/contacts/{contactNumber}/custom-fields": true;
  "digital-contact-api-docs:removeContactCustomFieldValue:DELETE:/contacts/{contactNumber}/custom-fields/{customFieldIdentifier}": false;
  "digital-contact-api-docs:changeContactRoutingQueue:PUT:/contacts/{contactNumber}/routing-queue": true;
  "digital-contact-api-docs:updateContactRoutingProperties:PUT:/contacts/{contactNumber}/routing-properties": true;
  "digital-contact-api-docs:sendContactTranscript:POST:/contacts/{contactNumber}/transcript": true;
  "digital-contact-api-docs:create-contacts-agent-contacts-close:PUT:/contacts/{contactNumber}/agent-contacts/{agentContactId}/close": false;
  "digital-contact-api-docs:changeContactStatus:PUT:/contacts/{contactNumber}/status": true;
  "digital-customer-api-docs:searchCustomers:GET:/customers": false;
  "digital-customer-api-docs:getCustomer:GET:/customers/{customerId}": false;
  "digital-customer-api-docs:getCustomerNotes:GET:/customers/{customerId}/notes": false;
  "digital-customer-api-docs:createCustomerNote:POST:/customers/{customerId}/notes": true;
  "digital-customer-api-docs:updateCustomerNote:PUT:/customers/{customerId}/notes/{noteId}": true;
  "digital-customer-api-docs:deleteCustomerNote:DELETE:/customers/{customerId}/notes/{noteId}": false;
  "digital-customer-api-docs:mergeCustomer:PUT:/customers/{customerId}/merge": true;
  "digital-customer-api-docs:removeCustomerCustomFieldValue:DELETE:/customers/{customerId}/custom-fields/{customFieldIdentifier}": false;
  "digital-customer-api-docs:updateCustomerCustomFields:PUT:/customers/{customerId}/custom-fields": true;
  "digital-customfields-api-docs:getContactCustomFieldDefinitions:GET:/consumer-contact-custom-fields": false;
  "digital-customfields-api-docs:getCustomerCustomFieldDefinitions:GET:/customers/custom-field-definitions": false;
  "digital-customfields-api-docs:createOrUpdateCustomerCustomFieldDefinition:PUT:/customers/custom-field-definitions": true;
  "digital-message-api-docs:channels-channelId-createmessage:POST:/channels/{channelId}/messages": true;
  "digital-message-api-docs:updateMessageStatus:PUT:/channels/{channelId}/messages/{messageIdOnExternalPlatform}/status": true;
  "digital-message-api-docs:sendOutboundMessage:POST:/channels/{channelId}/outbound": true;
  "digital-message-api-docs:sendInboundMessage:POST:/channels/{channelId}/inbound": true;
  "digital-message-api-docs:searchMessages:GET:/messages": false;
  "digital-message-api-docs:getMessage:GET:/messages/{messageId}": false;
  "digital-message-api-docs:removeMessageAuthorName:POST:/messages/{messageId}/author-name-removal": true;
  "digital-message-api-docs:addMessageTag:PUT:/messages/{messageId}/tags/{tagId}": false;
  "digital-message-api-docs:removeMessageTag:DELETE:/messages/{messageId}/tags/{tagId}": false;
  "digital-message-api-docs:removeMessageContent:POST:/messages/{messageId}/content-removal": true;
  "digital-message-api-docs:delete-DFO-message-bymessageId:POST:/messages/{messageId}/delete": false;
  "digital-message-api-docs:createMessageNote:POST:/messages/{messageId}/notes": true;
  "digital-message-api-docs:updateMessageNote:PUT:/messages/{messageId}/notes/{noteId}": true;
  "digital-message-api-docs:deleteMessageNote:DELETE:/messages/{messageId}/notes/{noteId}": false;
  "digital-message-api-docs:mark-DFO-message-read:PUT:/messages/{messageId}/read": true;
  "digital-message-api-docs:setMessageSentiment:PUT:/messages/{messageId}/sentiment": true;
  "digital-message-api-docs:add-DFO-message-react:POST:/messages/{messageId}/react/{reactionType}": false;
  "digital-message-api-docs:delete-DFO-message-react:DELETE:/messages/{messageId}/react/{reactionType}": false;
  "digital-routingqueue-api-docs:searchRoutingQueues:GET:/routing-queues": false;
  "digital-tag-api-docs:getTags:GET:/tags": false;
  "digital-tag-api-docs:createTag:PUT:/tags": true;
  "digital-thread-api-docs:searchThreads:GET:/threads": false;
  "digital-thread-api-docs:sendSenderAction:POST:/channels/{channelId}/threads/{threadIdOnExternalPlatform}/sender-actions": true;
  "digital-thread-api-docs:updateThread:PUT:/channels/{channelId}/threads/{threadIdOnExternalPlatform}": true;
  "digital-verificationtoken-api-docs:getOneTimeToken:GET:/one-time-token/authentication": false;
  "digital-verificationtoken-api-docs:verifyOneTimeToken:POST:/one-time-token/verification": true;
  "interactionanalytics-interactions-api-docs:get-segments-analyzed:GET:/interaction-analytics-gateway/v2/segments/analyzed": false;
  "interactionanalytics-interactions-api-docs:get-segments-segmentId-analyzed-transcript:GET:/interaction-analytics-gateway/v2/segments/{segmentId}/analyzed-transcript": false;
  "mediaplayback-mediaplayback-api-docs:getACDContactRecordingData:GET:/media-playback/v1/contacts": false;
  "mediaplayback-mediaplayback-api-docs:getDataToPlayByContactStatementId:GET:/media-playback/v1/acd-contacts/{acdContactId}/statements/{statementId}": false;
  "mediaplayback-mediaplayback-api-docs:getSegmentRecordingData:GET:/media-playback/v1/segments/{segmentId}": false;
  "patron-callback-api-docs:requestACallback:POST:/queuecallback": false;
  "patron-callback-api-docs:scheduleACallback:POST:/promise": false;
  "patron-chatrequests-api-docs:post-contacts-chats:POST:/contacts/chats": false;
  "patron-chatrequests-api-docs:getChatText:GET:/contacts/chats/{chatSession}": false;
  "patron-chatrequests-api-docs:endChat:DELETE:/contacts/chats/{chatSession}": false;
  "patron-chatrequests-api-docs:post-contacts-chats-id-send-text:POST:/contacts/chats/{chatSession}/send-text": true;
  "patron-chatrequests-api-docs:PatronTyping:POST:/contacts/chats/{chatSession}/typing": false;
  "patron-chatrequests-api-docs:PatronTypingPreview:POST:/contacts/chats/{chatSession}/typing-preview": false;
  "patron-chatrequests-api-docs:post-contacts-chats-send-email:POST:/contacts/chats/send-email": true;
  "patron-chatrequests-api-docs:getPointChatProfile:GET:/points-of-contact/{pointsOfContactId}/chat-profile": false;
  "patron-workitem-api-docs:requestAWorkitem:POST:/interactions/work-items": false;
  "patron-workitem-api-docs:post-interactions-work-items-persistent:POST:/interactions/work-items-persistent": false;
  "policy-policyinstance-api-docs:createPolicyDefinition:POST:/data-policies/v1/policies": true;
  "policy-policyinstance-api-docs:getPolicies:POST:/data-policies/v1/policies/search": true;
  "policy-policyinstance-api-docs:getPolicyDefinition:GET:/data-policies/v1/policies/{policyId}": false;
  "policy-policyinstance-api-docs:getPolicyInstance:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}": false;
  "policy-policyinstance-api-docs:generateEvidenceReportUrl:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}/evidence-reports": false;
  "policy-policyinstance-api-docs:getAllPolicyInstances:GET:/data-policies/v1/policies/{policyId}/policy-instances": false;
  "policy-policyinstance-api-docs:getPolicyInstances:POST:/data-policies/v1/policies/policy-instances/search": true;
  "privacy-gdpr-api-docs:createGdprErasureRequest:POST:/privacy/v1/erasure": true;
  "realtimedata-realtime-api-docs:getAgentStates:GET:/agents/states": false;
  "realtimedata-realtime-api-docs:get-agents-client-data:GET:/agents/client-data": false;
  "realtimedata-realtime-api-docs:put-agents-client-data:PUT:/agents/client-data": false;
  "realtimedata-realtime-api-docs:getAgentStateByid:GET:/agents/{agentId}/states": false;
  "realtimedata-realtime-api-docs:ActiveContacts:GET:/contacts/active": false;
  "realtimedata-realtime-api-docs:ParkedContactDetails:GET:/contacts/parked": false;
  "realtimedata-realtime-api-docs:get_/contacts/states:GET:/contacts/states": false;
  "realtimedata-realtime-api-docs:SkillActivity:GET:/skills/activity": false;
  "realtimedata-realtime-api-docs:post-skills-activity-search:POST:/skills/activity/search": false;
  "realtimedata-realtime-api-docs:SkillActivityById:GET:/skills/{skillId}/activity": false;
  "realtimedata-realtime-api-docs:agents_agentId_queues:GET:/agents/{agentId}/queues": false;
  "realtimedata-realtime-api-docs:agents_agentIds_queues_details:GET:/agents/{agentId}/queues-detail": false;
  "recording-businessdata-api-docs:post_/interaction-recording-management-service/v1/interactions/business-data-update:POST:/interaction-recording-management-service/v1/interactions/business-data-update": true;
  "recording-interactions-api-docs:post-interaction-mask:POST:/interaction-recording-management-service/v1/interactions/mask": false;
  "recording-interactions-api-docs:post-interaction-unmask:POST:/interaction-recording-management-service/v1/interactions/unmask": false;
  "recording-recordingondemand-api-docs:StopRecord:POST:/interaction-recording-management-service/v1/interactions/start-recording-on-demand": false;
  "recording-recordingondemand-api-docs:ReleaseRecording:POST:/interaction-recording-management-service/v1/interactions/stop-recording-on-demand": false;
  "recording-recordingondemand-api-docs:DoNotRecord:POST:/interaction-recording-management-service/v1/interactions/do-not-record": false;
  "recording-recordingstatus-api-docs:GetRecordingStatus:GET:/interaction-recording-management-service/v1/interactions/get-recording-status": false;
  "recording-screeninteractions-api-docs:StartScreenrecord:POST:/interaction-recording-management-service/v1/interactions/start-screen-interaction-recording": false;
  "recording-screeninteractions-api-docs:StopScreenRecording:POST:/interaction-recording-management-service/v1/interactions/stop-screen-interaction-recording": false;
  "reporting-reporting-api-docs:get_/agents/interaction-history:GET:/agents/interaction-history": false;
  "reporting-reporting-api-docs:getAgentHistoryByid:GET:/agents/{agentId}/interaction-history": false;
  "reporting-reporting-api-docs:RecentContactHistory:GET:/agents/{agentId}/interaction-recent": false;
  "reporting-reporting-api-docs:AgentLoginHistory:GET:/agents/{agentId}/login-history": false;
  "reporting-reporting-api-docs:get_/agents/state-history:GET:/agents/state-history": false;
  "reporting-reporting-api-docs:get_/agents/{agentId}/state-history:GET:/agents/{agentId}/state-history": false;
  "reporting-reporting-api-docs:PerformanceSummary:GET:/agents/performance": false;
  "reporting-reporting-api-docs:AgentPerformanceSummary:GET:/agents/{agentId}/performance": false;
  "reporting-reporting-api-docs:get_/contacts:GET:/contacts": false;
  "reporting-reporting-api-docs:get_/contacts/{contactId}:GET:/contacts/{contactId}": false;
  "reporting-reporting-api-docs:SmsTranscripts:GET:/contacts/sms-transcripts": false;
  "reporting-reporting-api-docs:ContactIdSmsTranscripts:GET:/contacts/{contactId}/sms-transcripts": false;
  "reporting-reporting-api-docs:CompletedContactDetails:GET:/contacts/completed": false;
  "reporting-reporting-api-docs:get_/contacts/state-history:GET:/contacts/state-history": false;
  "reporting-reporting-api-docs:ContactStateHistory:GET:/contacts/{contactId}/state-history": false;
  "reporting-reporting-api-docs:get_/contacts/custom-data:GET:/contacts/custom-data": false;
  "reporting-reporting-api-docs:ContactCustomData:GET:/contacts/{contactId}/custom-data": false;
  "reporting-reporting-api-docs:getFullSkillSummaries:GET:/skills/summary": false;
  "reporting-reporting-api-docs:get_/skills/{skillId}/summary:GET:/skills/{skillId}/summary": false;
  "reporting-reporting-api-docs:getFullSLASummaries:GET:/skills/sla-summary": false;
  "reporting-reporting-api-docs:getFullSLASkillSummary:GET:/skills/{skillId}/sla-summary": false;
  "reporting-reporting-api-docs:TeamPerformanceSummaryTotalsAll:GET:/teams/performance-total": false;
  "reporting-reporting-api-docs:TeamPerformanceSummaryTotals:GET:/teams/{teamId}/performance-total": false;
  "reporting-reporting-api-docs:CustomReports:GET:/reports": false;
  "reporting-reporting-api-docs:ReportJobs:GET:/report-jobs": false;
  "reporting-reporting-api-docs:ReportJobByID:GET:/report-jobs/{jobId}": false;
  "reporting-reporting-api-docs:StartReportJob:POST:/report-jobs/{reportId}": false;
  "reporting-reporting-api-docs:GenerateADatadownloadReportFile:POST:/report-jobs/datadownload/{reportId}": false;
  "reporting-reporting-api-docs:wfmskillscontacts:GET:/wfm-data/skills/contacts": false;
  "reporting-reporting-api-docs:wfmDataAgent:GET:/wfm-data/agents": false;
  "reporting-reporting-api-docs:wfmDailerContactStatistics:GET:/wfm-data/skills/dialer-contacts": false;
  "reporting-reporting-api-docs:wfmAdherenceStatistics:GET:/wfm-data/agents/schedule-adherence": false;
  "reporting-reporting-api-docs:wfmAgentScorecard:GET:/wfm-data/agents/scorecards": false;
  "reporting-reporting-api-docs:wfmAgentPerformance:GET:/wfm-data/skills/agent-performance": false;
  "reporting-reporting-api-docs:get-contacts-id-hierarchy:GET:/contacts/{contactId}/hierarchy": false;
  "wfm-exportschedule-api-docs:exportScheduleAsList:POST:/schedules/export": true;
  "wfm-exportsummary-api-docs:get-summary:GET:/timeoff-manager/summary/{activityCodeName}": false;
  "wfm-importallotment-api-docs:put-allotments:PUT:/timeoff-manager/allotments/import": true;
}

export interface NiceCxoneFullApiOperationResponseMap {
  "admin-addressbook-api-docs:getAddressBooks:GET:/address-books": NiceCxoneFullApiSchemaGetAddressBooksResponse;
  "admin-addressbook-api-docs:CreateAddressBookv4:POST:/address-books": NiceCxoneFullApiSchemaPostAddressBooksResponse;
  "admin-addressbook-api-docs:DeleteAddressbook:DELETE:/address-books/{addressBookId}": void;
  "admin-addressbook-api-docs:get-address-books-id-agents-assigned:GET:/address-books/{addressBookId}/agents/assigned": {
  agentId?: number;
  firstName?: string;
  lastName?: string;
  hiddenAgents?: number;
};
  "admin-addressbook-api-docs:get-address-books-id-agents-unassigned:GET:/address-books/{addressBookId}/agents/unassigned": {
  agentId?: number;
  firstName?: string;
  lastName?: string;
};
  "admin-addressbook-api-docs:AddressBookAssignmentV4:POST:/address-books/{addressBookId}/assignment": NiceCxoneFullApiSchemaPostAddressBookAssignmentsResponse;
  "admin-addressbook-api-docs:get-address-books-id-dynamic-entries:GET:/address-books/{addressBookId}/dynamic-entries": {
  totalRecords?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  addressBook?: {
  addressBookName?: string;
  addressBookId?: number;
  addressBookType?: string;
  fullLoad?: boolean;
  serverTime?: string;
  addressBookEntries?: ReadonlyArray<{
  addressBookEntryId?: number;
  externalId?: number;
  stateId?: number;
  externalState?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  company?: string;
  phone?: string;
  mobile?: string;
  email?: string;
  isDeleted?: boolean;
  lastUpdateTime?: string;
}>;
};
};
  "admin-addressbook-api-docs:CreateOrUpdateDynamicAddressbook:PUT:/address-books/{addressBookId}/dynamic-entries": NiceCxoneFullApiSchemaPutAddressBookDynamicEntriesResponse;
  "admin-addressbook-api-docs:DeleteDynamicAddressBookEntry:DELETE:/address-books/{addressBookId}/dynamic-entries/{externalId}": void;
  "admin-addressbook-api-docs:get-address-books-id-entries:GET:/address-books/{addressBookId}/entries": {
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  businessUnitId?: number;
  lastPollTime?: string;
  totalRecords?: number;
  addressBook?: {
  addressBookName?: string;
  addressBookId?: number;
  addressBookType?: string;
  addressBookEntries?: ReadonlyArray<{
  addressBookEntryId?: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  company?: string;
  phone?: string;
  mobile?: string;
  email?: string;
}>;
};
};
  "admin-addressbook-api-docs:CreateAddressBookEntries:POST:/address-books/{addressBookId}/entries": NiceCxoneFullApiSchemaPostAddressBookEntriesResponse;
  "admin-addressbook-api-docs:UpdateAddressBookEntries:PUT:/address-books/{addressBookId}/entries": {
  entryResults?: ReadonlyArray<{
  success?: boolean;
  addressBookEntryId?: number;
  error?: string;
}>;
};
  "admin-addressbook-api-docs:DeleteAddressBookEntry:DELETE:/address-books/{addressBookId}/entries/{addressBookEntryId}": void;
  "admin-addressbook-api-docs:AddressBookListForAnAgent:GET:/agents/{agentId}/address-books": {
  lastPollTime?: string;
  addressBooks?: ReadonlyArray<{
  dynamicaddressbook?: {
  addressBookName?: string;
  addressBookId?: number;
  addressBookType?: string;
  appId?: string;
  fullLoad?: boolean;
  addressBookEntries?: ReadonlyArray<{
  addressBookEntryId?: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  company?: string;
  phone?: string;
  mobile?: string;
  email?: string;
  lastUpdateTime?: string;
  externalId?: string;
  stateId?: number;
  externalState?: string;
  isDeleted?: boolean;
}>;
};
  standardaddressbook?: {
  addressBookName?: string;
  addressBookId?: number;
  addressBookType?: string;
  appId?: string;
  fullLoad?: boolean;
  addressBookEntries?: ReadonlyArray<{
  addressBookEntryId?: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  company?: string;
  phone?: string;
  mobile?: string;
  email?: string;
  lastUpdateTime?: string;
}>;
};
}>;
};
  "admin-addressbook-api-docs:AddressBookForCampaign:GET:/campaigns/{campaignId}/address-books": NiceCxoneFullApiSchemaGetCampaignAddressBooksResponse;
  "admin-addressbook-api-docs:AddressBookForSkill:GET:/skills/{skillId}/address-books": NiceCxoneFullApiSchemaGetSkillAddressBooksResponse;
  "admin-addressbook-api-docs:AddressBooksTeam:GET:/teams/{teamId}/address-books": NiceCxoneFullApiSchemaGetTeamAddressBooksResponse;
  "admin-agentmessage-api-docs:get-agent-messages:GET:/communications/agent-messages": {
  totalRecords?: number;
  businessUnitId?: number;
  agentMessaging?: ReadonlyArray<{
  messageGroupGuid?: string;
  subject?: string;
  startDate?: string;
  target?: string;
}>;
};
  "admin-agentmessage-api-docs:post-agent-messages:POST:/communications/agent-messages": {
  messageGroupGuid?: string;
  assignedTargetIds?: ReadonlyArray<number>;
  invalidTargetIds?: ReadonlyArray<number>;
};
  "admin-agentmessage-api-docs:delete-communications-agent-messages:DELETE:/communications/agent-messages": {
  deletedGroupMessageIds?: ReadonlyArray<number>;
  invalidGroupMessageIds?: ReadonlyArray<number>;
};
  "admin-agentmessage-api-docs:get-agent-messages-id:GET:/communications/agent-messages/{messageGroupId}": {
  messageGroupGuid?: string;
  sentOn?: string;
  expireDate?: string;
  duration?: number;
  subject?: string;
  message?: string;
  targetType?: string;
  totalRowCount?: number;
  hiddenAgents?: number;
  agents?: NiceCxoneFullApiSchemaAgents;
  teams?: NiceCxoneFullApiSchemaTeams;
  stations?: NiceCxoneFullApiSchemaStations;
};
  "admin-agentmessage-api-docs:delete-agent-messages-id:DELETE:/communications/agent-messages/{messageGroupId}": {
  error?: string;
  error_description?: string;
};
  "admin-agents-api-docs:get-agents:GET:/agents": {
  businessUnitId?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  lastPollTime?: string;
  totalRecords?: number;
  hiddenAgents?: number;
  agents?: ReadonlyArray<{
  agentId?: number;
  userName?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  userID?: string;
  emailAddress?: string;
  isActive?: boolean;
  teamId?: number;
  teamName?: string;
  reportToId?: number;
  reportToName?: string;
  isSupervisor?: boolean;
  lastLogin?: string;
  lastUpdated?: string;
  location?: string;
  custom1?: string;
  custom2?: string;
  custom3?: string;
  custom4?: string;
  custom5?: string;
  internalId?: string;
  profileId?: number;
  profileName?: string;
  timeZone?: string;
  country?: string;
  countryName?: string;
  state?: string;
  city?: string;
  chatRefusalTimeout?: number;
  phoneRefusalTimeout?: number;
  workItemRefusalTimeout?: number;
  defaultDialingPattern?: number;
  defaultDialingPatternName?: string;
  useTeamMaxConcurrentChats?: boolean;
  maxConcurrentChats?: number;
  notes?: string;
  createDate?: string;
  inactiveDate?: string;
  hireDate?: string;
  terminationDate?: string;
  hourlyCost?: number;
  rehireStatus?: boolean;
  employmentType?: number;
  employmentTypeName?: string;
  referral?: string;
  atHome?: boolean;
  hiringSource?: number;
  ntLoginName?: string;
  scheduleNotification?: number;
  federatedId?: string;
  useTeamEmailAutoParkingLimit?: boolean;
  maxEmailAutoParkingLimit?: number;
  sipUser?: string;
  systemUser?: string;
  systemDomain?: string;
  crmUserName?: string;
  useAgentTimeZone?: boolean;
  timeDisplayFormat?: string;
  sendEmailNotifications?: boolean;
  apiKey?: string;
  telephone1?: string;
  telephone2?: string;
  userType?: string;
  isWhatIfAgent?: boolean;
  timeZoneOffset?: string;
  requestContact?: boolean;
  chatThreshold?: number;
  useTeamChatThreshold?: boolean;
  emailThreshold?: number;
  customerCard?: boolean;
  useTeamEmailThreshold?: boolean;
  workItemThreshold?: number;
  useTeamWorkItemThreshold?: boolean;
  locked?: boolean;
  userNameDomain?: string;
  combinedUserNameDomain?: string;
  rowNumber?: number;
  smsThreshold?: number;
  useTeamSmsThreshold?: boolean;
  digitalThreshold?: number;
  LoginAuthenticatorId?: string;
  useTeamDigitalThreshold?: boolean;
  contactAutoFocus?: boolean;
  useTeamContactAutoFocus?: boolean;
  useTeamRequestContact?: boolean;
  voiceThreshold?: number;
  subject?: string;
  issuer?: string;
  useTeamVoiceThreshold?: boolean;
  recordingNumbers?: ReadonlyArray<{
  number: string;
}>;
  isOpenIdProfileComplete?: boolean;
  teamUuId?: string;
  maxPreview?: boolean;
  deliveryMode?: string;
  totalContactCount?: number;
  useTeamDeliveryModeSettings?: boolean;
  emailRefusalTimeout?: number;
  voicemailRefusalTimeout?: number;
  isBillable?: boolean;
  agentVoiceThreshold?: number;
  agentEmailThreshold?: number;
  agentWorkItemThreshold?: number;
  agentDeliveryMode?: string;
  agentTotalContactCount?: number;
  agentContactAutoFocus?: boolean;
  smsRefusalTimeout?: number;
  agentRequestContact?: boolean;
  agentMaxVersion?: number;
  agentPhoneTimeout?: number;
  agentPhoneTimeoutSeconds?: number;
  address1?: string;
  address2?: string;
  zipCode?: string;
  noFixedAddress?: boolean;
  digitalRefusalTimeout?: number;
  agentCxaClientVersion?: number;
  agentCxaReleasePrevious?: boolean;
  stateCode?: string;
  agentIntegration?: boolean;
  channelLock?: boolean;
  DigitalEngagementEnabled?: boolean;
  Teams_channel_Id?: string;
  DivisionNo?: number;
  ACWEnabled?: boolean;
  ACWRange?: number;
  IsDirectVoicemailTransferEnabled?: boolean;
  AttendantUserStatus?: number;
}>;
};
  "admin-agents-api-docs:operations-Agents-post-agents:POST:/agents": {
  errorCount?: number;
  agentResults?: ReadonlyArray<{
  agentId?: number;
  success?: boolean;
  error?: string;
}>;
};
  "admin-agents-api-docs:operations-Agents-put-agents:PUT:/agents": {
  errorCount?: number;
  agentResults?: ReadonlyArray<{
  agentId?: string;
  success?: boolean;
  error?: string;
}>;
};
  "admin-agents-api-docs:operations-Agents-get-agents-id:GET:/agents/{agentId|userId}": {
  agents?: ReadonlyArray<{
  agentId?: number;
  userName?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  userID?: string;
  emailAddress?: string;
  isActive?: boolean;
  teamId?: number;
  teamName?: string;
  reportToId?: number;
  reportToName?: string;
  isSupervisor?: boolean;
  lastLogin?: string;
  lastUpdated?: string;
  location?: string;
  custom1?: string;
  custom2?: string;
  custom3?: string;
  custom4?: string;
  custom5?: string;
  internalId?: string;
  profileId?: number;
  profileName?: string;
  timeZone?: string;
  country?: string;
  countryName?: string;
  state?: string;
  city?: string;
  chatRefusalTimeout?: number;
  phoneRefusalTimeout?: number;
  workItemRefusalTimeout?: number;
  defaultDialingPattern?: number;
  defaultDialingPatternName?: string;
  useTeamMaxConcurrentChats?: boolean;
  maxConcurrentChats?: number;
  notes?: string;
  createDate?: string;
  inactiveDate?: string;
  hireDate?: string;
  terminationDate?: string;
  hourlyCost?: number;
  rehireStatus?: boolean;
  employmentType?: number;
  employmentTypeName?: string;
  referral?: string;
  atHome?: boolean;
  hiringSource?: number;
  ntLoginName?: string;
  scheduleNotification?: number;
  federatedId?: string;
  useTeamEmailAutoParkingLimit?: boolean;
  maxEmailAutoParkingLimit?: number;
  sipUser?: string;
  systemUser?: string;
  systemDomain?: string;
  crmUserName?: string;
  useAgentTimeZone?: boolean;
  timeDisplayFormat?: string;
  sendEmailNotifications?: boolean;
  apiKey?: string;
  telephone1?: string;
  telephone2?: string;
  userType?: string;
  isWhatIfAgent?: boolean;
  timeZoneOffset?: string;
  requestContact?: boolean;
  chatThreshold?: number;
  useTeamChatThreshold?: boolean;
  emailThreshold?: number;
  useTeamEmailThreshold?: boolean;
  workItemThreshold?: number;
  useTeamWorkItemThreshold?: boolean;
  smsThreshold?: number;
  useTeamSmsThreshold?: boolean;
  digitalThreshold?: number;
  useTeamDigitalThreshold?: boolean;
  contactAutoFocus?: boolean;
  useTeamContactAutoFocus?: boolean;
  useTeamRequestContact?: boolean;
  subject?: string;
  issuer?: string;
  recordingNumbers?: ReadonlyArray<{
  number: string;
}>;
  isOpenIdProfileComplete?: boolean;
  teamUuId?: string;
  maxPreview?: boolean;
  totalContactCount?: number;
  useTeamDeliveryModeSettings?: boolean;
  emailRefusalTimeout?: number;
  voicemailRefusalTimeout?: number;
  smsRefusalTimeout?: number;
  agentMaxVersion?: number;
  agentPhoneTimeout?: number;
  agentPhoneTimeoutSeconds?: number;
  address1?: string;
  address2?: string;
  zipCode?: string;
  noFixedAddress?: boolean;
  digitalRefusalTimeout?: number;
  agentCxaClientVersion?: number;
  agentCxaReleasePrevious?: boolean;
  agentIntegration?: boolean;
  channelLock?: boolean;
  digitalEngagementEnabled?: boolean;
  teams_channel_Id?: string;
  divisionNo?: number;
  ACWEnabled?: boolean;
  ACWRange?: number;
  AttendantUserStatus?: number;
  IsDirectVoicemailTransferEnabled?: boolean;
}>;
};
  "admin-agents-api-docs:operations-Agents-put-agents-id:PUT:/agents/{agentId|userId}": {
  error?: string;
};
  "admin-agents-api-docs:SetAgentState:POST:/agents/{agentId}/state": {
  error?: string;
  error_description?: string;
};
  "admin-agents-api-docs:get-agents-skills:GET:/agents/skills": {
  totalRecords?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  lastPollTime?: string;
  businessUnitId?: string;
  agentSkillAssignments?: ReadonlyArray<{
  isActive?: boolean;
  agentProficiencyValue?: number;
  agentProficiencyName?: string;
  internalId?: string;
  agentId?: number;
  teamId?: number;
  agentName?: string;
  campaignId?: number;
  emailFromAddress?: string;
  isSkillActive?: boolean;
  isDialer?: boolean;
  isNaturalCalling?: boolean;
  isOutbound?: boolean;
  lastUpdateTime?: string;
  mediaType?: number;
  notes?: string;
  requireDisposition?: boolean;
  scriptDisposition?: boolean;
  skillId?: number;
  skillName?: string;
  useACW?: boolean;
  useDisposition?: boolean;
  useSecondaryDispositions?: boolean;
  outboundStrategy?: string;
  campaignName?: string;
  priorityBlending?: boolean;
  isNaturalCallingRunning?: number;
  mediaTypeName?: string;
  screenPopTriggerEvent?: string;
  lastPollTime?: string;
  isAgentActive?: boolean;
}>;
};
  "admin-agents-api-docs:post-agents-skills:POST:/agents/skills": {
  resultSet?: {
  errorCount?: string;
  skillResults?: ReadonlyArray<{
  success?: boolean;
  skillId?: string;
  agentId?: string;
}>;
};
};
  "admin-agents-api-docs:post-agents-search:POST:/agents/search": NiceCxoneFullApiSchemaPostAgentSearchResponse;
  "admin-agents-api-docs:post-skills-agents-search:POST:/skills/agents/search": {
  businessUnitId?: number;
  lastPollTime?: string;
  hiddenAgents?: number;
  errorCount?: number;
  totalRecords?: number;
  agentAndSkillRecords?: ReadonlyArray<{
  success?: boolean;
  skillId?: string;
  agentSkillAssignment?: ReadonlyArray<{
  agentId?: string;
  userId?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  agentProficiencyValue?: string;
  agentProficiencyName?: string;
  agentSklStatus?: string;
  campaignId?: string;
  campaignName?: string;
  emailFromAddress?: string;
  internalId?: string;
  isActive?: string;
  isAssigned?: string;
  isSkillActive?: string;
  isDialer?: string;
  isNaturalCalling?: string;
  isNaturalCallingRunning?: string;
  isOutbound?: string;
  lastUpdateTime?: string;
  mediaTypeId?: string;
  mediaTypeName?: string;
  notes?: string;
  outboundStrategy?: string;
  priorityBlending?: string;
  requireDisposition?: string;
  scriptDisposition?: string;
  skillId?: string;
  skillName?: string;
  teamId?: string;
  teamName?: string;
  useACW?: string;
  useDisposition?: string;
  useSecondaryDispositions?: string;
  screenPopTriggerEvent?: string;
}>;
}>;
};
  "admin-agents-api-docs:get-agent-configuration:GET:/agents/{agentId}/agent-configuration": {
  maxConferenceParties?: number;
  deleteCommitmentId?: number;
  deleteCommitmentString?: string;
  persistentPanels?: ReadonlyArray<{
  persistentPanelId?: number;
  persistentPanelLabel?: string;
  persistentPanelURI?: string;
}>;
  webRTCType?: string;
  wfoWebsiteUrl?: string;
  wfoWebServiceUrl?: string;
  wfoApiUrl?: string;
  webRTCWSSUrls?: ReadonlyArray<{
  urlName?: string;
  weight?: string;
}>;
  webRTCServerDomain?: string;
  webRTCDNIS?: string;
  helpSiteVersion?: string;
  digitalEngagementUrl?: string;
  emergencyPhoneNumbers?: ReadonlyArray<string>;
  isExternalDirConfigure?: boolean;
};
  "admin-agents-api-docs:getagentbyagentidgroups:GET:/agents/{agentId}/groups": NiceCxoneFullApiSchemaGetagentagentidgroups;
  "admin-agents-api-docs:getSkillsByAgentId:GET:/agents/{agentId|userId}/skills": NiceCxoneFullApiSchemaGetAgentSkillsResponse;
  "admin-agents-api-docs:AssignsSkillsToAnAgent:POST:/agents/{agentId|userId}/skills": NiceCxoneFullApiSchemaPostAgentSkillsResponse;
  "admin-agents-api-docs:ModifySkillAssignmentsForAgent:PUT:/agents/{agentId|userId}/skills": NiceCxoneFullApiSchemaPostAgentSkillsResponse;
  "admin-agents-api-docs:RemoveSkillAssignmentsForAgent:DELETE:/agents/{agentId|userId}/skills": NiceCxoneFullApiSchemaPostAgentSkillsResponse;
  "admin-agents-api-docs:GetSkillsNotAssignedToAgent:GET:/agents/{agentId}/skills/unassigned": NiceCxoneFullApiSchemaGetAgentUnassignedSkillsResponse;
  "admin-agents-api-docs:AgentSkillData:GET:/agents/skill-data": NiceCxoneFullApiSchemaGetAgentSkillsDataResponse;
  "admin-agents-api-docs:AgentSkillDataForSkillid:GET:/agents/{agentId}/skill-data": NiceCxoneFullApiSchemaGetAgentSkillsDataResponse;
  "admin-agents-api-docs:put_/agents/{agentId}/custom-event:PUT:/agents/{agentId}/custom-event": void;
  "admin-agents-api-docs:QuickReplies:GET:/agents/quick-replies": NiceCxoneFullApiSchemaGetAgentsQuickRepliesResponse;
  "admin-agents-api-docs:QuickRepliesByAgent:GET:/agents/{agentId}/quick-replies": NiceCxoneFullApiSchemaGetAgentQuickRepliesResponse;
  "admin-agents-api-docs:CreateMessage:POST:/agents/messages": {
  errorCount?: number;
  agentMessageResults?: ReadonlyArray<{
  agentMessageId?: number;
  success?: boolean;
  error?: string;
}>;
};
  "admin-agents-api-docs:deleteMessagebyMessageId:DELETE:/agents/messages/{messageId}": void;
  "admin-agents-api-docs:AgentMessageList:GET:/agents/{agentId}/messages": NiceCxoneFullApiSchemaGetAgentMessagesResponse;
  "admin-agents-api-docs:AgentIndicatorList:GET:/agents/{agentId}/indicators": NiceCxoneFullApiSchemaGetAgentIndicatorsResponse;
  "admin-agents-api-docs:agentLogout:POST:/agents/{agentId}/logout": {
  error?: string;
  error_description?: string;
};
  "admin-agents-api-docs:GetAgentDialingPatterns:GET:/agent-patterns": NiceCxoneFullApiSchemaGetAgentPatternsResponse;
  "admin-agents-api-docs:post-agent-patterns-id-transform-phonenumbers:POST:/agent-patterns/{agentpatternId}/transform-phonenumbers": {
  transformNumOut?: ReadonlyArray<{
  inputNumber?: string;
  outputNumber?: string;
  externalId?: string;
  errorDescription?: string;
  isTransformed?: boolean;
}>;
};
  "admin-agents-api-docs:getAgentStates:GET:/agents-states": NiceCxoneFullApiSchemaGetAgentStatesResponse;
  "admin-agents-api-docs:get-agents-extended:GET:/agents/extended": {
  totalRecords?: number;
  hiddenAgents?: number;
  agents?: ReadonlyArray<{
  userID?: number;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  team_no?: number;
  reportTo?: number;
  secondaryID?: string;
  securityProfileID?: number;
  email?: string;
  combinedUserNameDomain?: string;
  isActive?: boolean;
  notes?: string;
  chatRefusalTimeout?: number;
  emailRefusalTimeout?: number;
  phoneCallRefusalTimeout?: number;
  smsRefusalTimeout?: number;
  voiceMailRefusalTimeout?: number;
  workItemRefusalTimeout?: number;
  skillInfo?: string;
  agentDialingPatternID?: number;
  timeZone?: string;
  country?: string;
  state?: string;
  city?: string;
  wfmNotificationEnabled?: boolean;
  wfmNotificationInterval?: number;
  sipUserId?: string;
  agentPhoneOther?: string;
  hireDate?: string;
  terminationDate?: string;
  employmentType?: number;
  hourlyCost?: number;
  rehireStatus?: boolean;
  location?: number;
  hiringSourceId?: number;
  atHomeWorker?: boolean;
  referral?: string;
  custom1?: string;
  custom2?: string;
  custom3?: string;
  custom4?: string;
  custom5?: string;
  crmUsername?: string;
  systemDomain?: string;
  systemUsername?: string;
  shiftTimes?: boolean;
  display24Hour?: boolean;
  userType?: string;
  maxEmailInboxCount?: number;
  mchVoice?: number;
  mchChat?: number;
  mchEmail?: number;
  mchSocial?: number;
  mchWorkitem?: number;
  mchRequestContact?: boolean;
  useTeamMCHChat?: boolean;
  useTeamMCHEmail?: boolean;
  useTeamMCHWorkItem?: boolean;
  useTeamMCHRequestContact?: boolean;
  schRequestContact?: boolean;
  useDefaultEmail?: boolean;
  useDefaultRequestContact?: boolean;
  totalContactCount?: number;
  useTeamDeliveryModeSettings?: boolean;
  mchContactAutoFocus?: boolean;
  useTeamMCHContactAutoFocus?: boolean;
  deliveryMode?: number;
  locationNo?: number;
  locationname?: string;
  useTeamMaxConcurrentChats?: boolean;
  maxConcurrentChats?: number;
  ntLoginName?: string;
  hiringSourceDesc?: string;
  federatedId?: string;
  externalIdentity?: string;
  autoAttendantAccessType?: number;
  groupIds?: string;
  phones?: string;
  integratedSoftphoneWebRtcUrls?: string;
  agentPhoneHome?: string;
  useTeamMaxEmailInboxCount?: boolean;
}>;
};
  "admin-agents-api-docs:get-agents-issues:GET:/agents/issues": {
  hiddenAgents?: number;
  agentIssue?: ReadonlyArray<{
  rowNumber?: number;
  agentIssueId?: number;
  agent_Name?: string;
  contact_ID?: number;
  issueTypeName?: string;
  scriptName?: string;
  description?: string;
  salesForceCaseID?: string;
  submitTime?: string;
  team_Name?: string;
}>;
};
  "admin-agents-api-docs:get-agent-messages-id:GET:/agent-messages/{messageGroupId}": {
  totalRecords?: number;
  hiddenAgents?: number;
  agentMessage?: ReadonlyArray<{
  userID?: number;
  firstName?: string;
  lastName?: string;
  userName?: string;
  userNameDomain?: string;
  combinedUserNameDomain?: string;
  email?: string;
  team?: string;
  team_no?: number;
  isActive?: boolean;
  subject?: string;
  date?: string;
  sentOn?: string;
  sentTo?: string;
  duration?: number;
  expireDate?: string;
  msgText?: string;
  msgId?: number;
  msgType?: string;
  delivered?: number;
  messageGroupGuid?: string;
}>;
};
  "admin-agents-api-docs:get-gents-skills-download:GET:/agents/skills-download": {
  totalRecords?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  agentSkillDownload?: ReadonlyArray<{
  skill_Name?: string;
  skill_No?: number;
  divisionId?: number;
  divisionName?: string;
  media_Type?: number;
  status?: string;
  campaign_No?: number;
  isOutbound?: boolean;
  service_Threshold?: number;
  service_Goal?: number;
  interruptible?: boolean;
  screen_Pops?: boolean;
  custom_Screen_Pops?: boolean;
  isActive?: boolean;
  initial_Priority?: number;
  max_Priority?: number;
  acceleration?: number;
  dispositionsRequired?: string;
  emailFromAddress?: string;
  enlightenAIEquityLevel?: number;
  fallbackTime?: number;
  finalizeWhenExhausted?: boolean;
  focusLock?: number;
  focusMetric?: number;
  shortAbandonThreshold?: number;
  useShortAbandonThreshold?: boolean;
  includeShortAbandons?: boolean;
  includeOtherAbandons?: boolean;
  hoursOfOperation?: number;
  timeBeforeInterrupt?: number;
  isDialer?: boolean;
  isNaturalCalling?: boolean;
  callerID?: string;
  skillRecordTypeID?: number;
  defaultRoutingCriteria?: string;
  queueDefaultMasterID?: number;
  wfiMinimumAgentsLevel?: number;
  wfiMinimumAvailableAgentsLevel?: number;
  emailParking?: boolean;
  chatWarningThreshold?: number;
  agentTypingIndicator?: boolean;
  patronTypingPreview?: boolean;
  emailBccAddress?: string;
  notes?: string;
  enableChatMessagingTimeout?: boolean;
  timetoInactiveChatMessage?: number;
  inactiveChatMessage?: string;
  chatTerminationCountDown?: number;
  chatTerminatedMessage?: string;
  media_Name?: string;
  campaign_Name?: string;
  custom_Screen_Pop_Application?: string;
  hoursOfOperationName?: string;
  customScript?: string;
  assignedAgents?: string;
  assignedUserIds?: string;
  assignedPOCs?: string;
  callingLists?: string;
  multiNumberSerialDeliveryId?: number;
  agentless?: boolean;
  agentlessPortsUsed?: number;
  smsMessageTemplateId?: number;
  treatProgressAsRinging?: boolean;
  preConnectCPAEnabled?: boolean;
  agentOverrideButtonOptions?: number;
  ansMachineOverrideSeconds?: number;
  screenPopTriggerEvent?: number;
  ratio?: number;
  maximumRingingDuration?: number;
  minimumPercentageHopDestinations?: number;
  ansMachineDetMode?: number;
  ansMachineMsg?: string;
  abandonMsg?: string;
  abandonMsgMode?: number;
  customerLiveSilenceSeconds?: number;
  machineEndSilenceSeconds?: number;
  machineMinimumWithoutAgentSeconds?: number;
  machineEndTimeoutSeconds?: number;
  utteranceMinimumSeconds?: number;
  machineMinimumWithAgentSeconds?: number;
  agentNoResponseSeconds?: number;
  agentResponseUtteranceMinimumSeconds?: number;
  agentVoiceThreshold?: number;
  customerVoiceThreshold?: number;
  recordPlaceCallAudio?: boolean;
  cpaPatternForLogging?: string;
  blockMultipleCalls?: boolean;
  notifyAgentsWhenListIsEmpty?: boolean;
  endOfListNotificationDelaySeconds?: number;
  confirmationRequiredDeliveryTypeID?: number;
  confirmationRequiredTimeout?: number;
  confirmationRequiredTimeoutSubsequent?: number;
  confirmationRequiredDefaultAccept?: boolean;
  complianceRecordsDeliveryTypeID?: number;
  complianceRecordsTimeout?: number;
  complianceRecordsTimeoutSubsequent?: number;
  complianceRecordsDefaultAccept?: boolean;
  overrideBUAbandonRate?: boolean;
  beginDampenPercentage?: number;
  abandonRateCutoff?: number;
  abandonRateThreshold?: number;
  aggressiveRatioFactor?: number;
  abandonTimeout?: number;
  isScheduled?: boolean;
  enableDialingByProficiency?: boolean;
  proficiencyFactor?: number;
  waitTimeFactor?: number;
  maxConcurrentCallsPerAgent?: number;
  maxWaitTimeSeconds?: number;
  complianceButtonOptions?: number;
  previewButtonOptions?: number;
  smsMessageTemplate?: string;
  transportCode?: string;
  enableBlending?: boolean;
  inactiveBlendingTimerSeconds?: number;
  callbackInitialPriority?: number;
  priorityInitialPriority?: number;
  externalOutboundSkill_No?: string;
  minCallbackMinutes?: number;
  maximumAttempts?: number;
  loadFresh?: boolean;
  loadCallbacks?: boolean;
  loadNonFresh?: boolean;
  defaultContactExpirationMinutes?: number;
  restrictedCallingMaxAttempts?: number;
  restrictedCallingMinutes?: number;
  confirmationRequiredDefault?: boolean;
  runGetPriorityContactsOnContactInsertion?: boolean;
  scheduleDayOfWeek?: number;
  scheduleDurationMinutes?: number;
  scheduleIsActive?: number;
  scheduleSkillNo?: number;
  scheduleStartTime?: number;
  scheduleStartTimeMinutes?: number;
  xsGetContactsActive?: boolean;
  xsReadyThreshold?: number;
  xsFreshThreshold?: number;
  xsAvailableThreshold?: number;
  xsNumberToRetrieve?: number;
  xsSkillChangedActive?: boolean;
  complianceRecordsDisabled?: boolean;
  confirmationRequiredDisabled?: boolean;
  maxBlendingAttempts?: number;
  maxNumAnsweredCalls?: number;
  maxNumCallbacks?: number;
  callbackRestMinutes?: number;
  unassignAgentSpecificCallbacks?: boolean;
  staleMinutesCallbacks?: number;
  staleMinutesGeneral?: number;
  xsScriptID?: number;
  xsCheckinScriptID?: number;
  skillSchedule?: ReadonlyArray<{
  dayOfWeek?: number;
  startTime?: string;
  startTimeMinutes?: number;
  durationMinutes?: number;
  isActive?: boolean;
  startDate?: string;
  timeZoneCreatedIn?: string;
  userId?: number;
}>;
  isPersistentWorkItem?: boolean;
  isRequireManualAccept?: boolean;
  evaluationCriteria?: number;
  oldEnlightenAIFocusMetric?: number;
  deliverCallbacksOnDNCHolidays?: boolean;
  deliverPrioritiesOnDNCHolidays?: boolean;
  agentlessDeliveryDelaySeconds?: number;
}>;
};
  "admin-agents-api-docs:get_/teams:GET:/teams": {
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  businessUnitId?: number;
  lastPollTime?: string;
  totalRecords?: number;
  teams?: ReadonlyArray<{
  unavailableCodes?: ReadonlyArray<ReadonlyArray<{
  outStateId?: number;
  outstateName?: string;
  isActive?: boolean;
  isAcw?: boolean;
  agentTimeoutMins?: string;
}>>;
  teamId?: number;
  teamName?: string;
  isActive?: boolean;
  description?: string;
  notes?: string;
  lastUpdateTime?: string;
  inViewEnabled?: boolean;
  wfoEnabled?: boolean;
  wfm2Enabled?: boolean;
  qm2Enabled?: boolean;
  maxConcurrentChats?: number;
  agentCount?: number;
  maxEmailAutoParkingLimit?: number;
  inViewGamificationEnabled?: boolean;
  inViewChatEnabled?: boolean;
  inViewWallboardEnabled?: boolean;
  inViewLMSEnabled?: boolean;
  analyticsEnabled?: boolean;
  requestContact?: boolean;
  contactAutoFocus?: boolean;
  chatThreshold?: number;
  emailThreshold?: number;
  workItemThreshold?: number;
  smsThreshold?: number;
  digitalThreshold?: number;
  voiceThreshold?: number;
  teamLeadId?: string;
  deliveryMode?: string;
  totalContactCount?: number;
  niceAudioRecordingEnabled?: boolean;
  niceDesktopAnalyticsEnabled?: boolean;
  niceQmEnabled?: boolean;
  niceScreenRecordingEnabled?: boolean;
  niceSpeechAnalyticsEnabled?: boolean;
  niceWfmEnabled?: boolean;
  niceQualityOptimizationEnabled?: boolean;
  niceSurvey_CustomerEnabled?: boolean;
  nicePerformanceManagementEnabled?: boolean;
  niceAnalyticsEnabled?: boolean;
  niceLessonManagementEnabled?: boolean;
  niceCoachingEnabled?: boolean;
  niceStrategicPlannerEnabled?: boolean;
  niceShiftBiddingEnabled?: boolean;
  niceWfoAdvancedEnabled?: boolean;
  niceWfoEssentialsEnabled?: boolean;
  cxoneCustomerAuthenticationEnabled?: boolean;
  socialThreshold?: number;
  teamUuid?: string;
  channelLock?: boolean;
  divisionNo?: number;
}>;
};
  "admin-agents-api-docs:post-teams:POST:/teams": {
  errorCount?: number;
  results?: ReadonlyArray<{
  success?: boolean;
  teamId?: number;
  error?: string;
}>;
};
  "admin-agents-api-docs:get-teams-id:GET:/teams/{teamId}": {
  businessUnitId?: number;
  lastPollTime?: string;
  teams?: ReadonlyArray<{
  UnavailableCodes?: ReadonlyArray<ReadonlyArray<{
  outstateId?: number;
  outstateName?: string;
  isActive?: boolean;
  isAcw?: boolean;
  agentTimeoutMins?: string;
}>>;
  teamId?: number;
  teamName?: string;
  isActive?: boolean;
  description?: string;
  notes?: string;
  lastUpdateTime?: string;
  inViewEnabled?: boolean;
  wfoEnabled?: boolean;
  wfm2Enabled?: boolean;
  qm2Enabled?: boolean;
  maxConcurrentChats?: number;
  agentCount?: number;
  maxEmailAutoParkingLimit?: number;
  inViewGamificationEnabled?: boolean;
  inViewChatEnabled?: boolean;
  inViewWallboardEnabled?: boolean;
  inViewLMSEnabled?: boolean;
  analyticsEnabled?: boolean;
  requestContact?: boolean;
  contactAutoFocus?: boolean;
  chatThreshold?: number;
  emailThreshold?: number;
  workItemThreshold?: number;
  smsThreshold?: number;
  digitalThreshold?: number;
  socialThreshold?: number;
  voiceThreshold?: number;
  evolveTeamId?: string;
  teamUuid?: string;
  teamLeadId?: string;
  deliveryMode?: string;
  totalContactCount?: number;
  niceAudioRecordingEnabled?: boolean;
  niceDesktopAnalyticsEnabled?: boolean;
  niceQmEnabled?: boolean;
  niceScreenRecordingEnabled?: boolean;
  niceSpeechAnalyticsEnabled?: boolean;
  niceWfmEnabled?: boolean;
  niceQualityOptimizationEnabled?: boolean;
  niceSurvey_CustomerEnabled?: boolean;
  nicePerformanceManagementEnabled?: boolean;
  niceAnalyticsEnabled?: boolean;
  niceLessonManagementEnabled?: boolean;
  niceCoachingEnabled?: boolean;
  niceStrategicPlannerEnabled?: boolean;
  niceShiftBiddingEnabled?: boolean;
  niceWfoAdvancedEnabled?: boolean;
  cxOneCustomerAuthenticationEnabled?: boolean;
  niceWfoEssentialsEnabled?: boolean;
  agents?: ReadonlyArray<{
  agentId?: number;
  firstName?: string;
  lastName?: string;
}>;
  channelLock?: boolean;
  divisionNo?: number;
}>;
};
  "admin-agents-api-docs:put-teams-id:PUT:/teams/{teamId}": {
  error?: string;
  error_description?: string;
};
  "admin-agents-api-docs:TeamsAgents:GET:/teams/agents": {
  lastPollTime?: string;
  teams?: ReadonlyArray<{
  teamId?: number;
  teamName?: string;
  isActive?: boolean;
  description?: string;
  notes?: string;
  lastUpdateTime?: string;
  inViewEnabled?: boolean;
  wfoEnabled?: boolean;
  wfm2Enabled?: boolean;
  qm2Enabled?: boolean;
  maxConcurrentChats?: number;
  agentCount?: number;
  maxEmailAutoParkingLimit?: number;
  inViewGamificationEnabled?: boolean;
  inViewChatEnabled?: boolean;
  inViewLMSEnabled?: boolean;
  analyticsEnabled?: boolean;
  voiceThreshold?: number;
  chatThreshold?: number;
  emailThreshold?: number;
  socialThreshold?: number;
  workItemThreshold?: number;
  requestContact?: boolean;
  contactAutoFocus?: boolean;
  divisionNo?: number;
  agents?: ReadonlyArray<{
  agentId?: number;
  userName?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  emailAddress?: string;
  isActive?: boolean;
  teamId?: number;
  teamName?: string;
  reportToId?: number;
  isSupervisor?: boolean;
  lastLogin?: string;
  lastModified?: string;
  locationId?: number;
  custom1?: string;
  custom2?: string;
  custom3?: string;
  custom4?: string;
  custom5?: string;
  internalId?: string;
  securityProfileId?: number;
  timeZone?: string;
  country?: string;
  state?: string;
  city?: string;
  chatRefusalTimeout?: number;
  phoneRefusalTimeout?: number;
  voicemailRefusalTimeout?: number;
  workItemRefusalTimeout?: number;
  defaultDialingPattern?: number;
  maxConcurrentChats?: number;
  notes?: string;
  hireDate?: string;
  terminationDate?: string;
  hourlyCost?: number;
  rehireStatus?: boolean;
  employmentType?: number;
  referral?: string;
  atHome?: boolean;
  hiringSource?: number;
  ntLoginName?: string;
  scheduleNotification?: number;
  federatedIdValue?: string;
}>;
}>;
};
  "admin-agents-api-docs:get-teams-id-agents:GET:/teams/{teamId}/agents": {
  businessUnitId?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  totalRecords?: number;
  lastPollTime?: string;
  teams?: ReadonlyArray<{
  teamId?: number;
  teamName?: string;
  isActive?: boolean;
  description?: string;
  notes?: string;
  lastUpdateTime?: string;
  agentCount?: number;
  wfoEnabled?: boolean;
  wfmEnabled?: boolean;
  qmEnabled?: boolean;
  inViewEnabled?: boolean;
  maxConcurrentChats?: number;
  analyticsEnabled?: boolean;
  maxEmailInboxCount?: number;
  inViewGamificationEnabled?: boolean;
  inViewChatMessagingEnabled?: boolean;
  inViewLMSEnabled?: boolean;
  voiceThreshold?: number;
  chatThreshold?: number;
  emailThreshold?: number;
  socialThreshold?: number;
  workItemThreshold?: number;
  requestContact?: boolean;
  contactAutoFocus?: boolean;
  smsThreshold?: number;
  digitalThreshold?: number;
  inViewWallboardEnabled?: boolean;
  channelLock?: boolean;
  divisionNo?: number;
  agents?: ReadonlyArray<{
  agentId?: number;
  userName?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  emailAddress?: string;
  isActive?: boolean;
  teamId?: number;
  teamName?: string;
  reportToId?: number;
  isSupervisor?: boolean;
  lastLogin?: string;
  lastUpdated?: string;
  locationId?: number;
  custom1?: string;
  custom2?: string;
  custom3?: string;
  custom4?: string;
  custom5?: string;
  internalId?: number;
  profileId?: number;
  timeZone?: string;
  country?: string;
  state?: string;
  city?: string;
  chatRefusalTimeout?: number;
  phoneRefusalTimeout?: number;
  voicemailRefusalTimeout?: number;
  workItemRefusalTimeout?: number;
  defaultDialingPattern?: string;
  defaultDialingPatternName?: string;
  maxConcurrentChats?: number;
  notes?: string;
  hireDate?: string;
  terminationDate?: string;
  hourlyCost?: number;
  rehireStatus?: boolean;
  employmentType?: number;
  referral?: string;
  atHome?: boolean;
  hiringSource?: number;
  ntLoginName?: string;
  scheduleNotification?: number;
  federatedId?: string;
  apiKey?: string;
  chatThreshold?: number;
  contactAutoFocus?: boolean;
  countryName?: string;
  createDate?: string;
  crmUserName?: string;
  deliveryMode?: string;
  emailRefusalTimeout?: number;
  emailThreshold?: number;
  employmentTypeName?: string;
  inactiveDate?: string;
  isBillable?: boolean;
  isOpenIdProfileComplete?: boolean;
  isWhatIfAgent?: boolean;
  issuer?: string;
  location?: number;
  maxEmailAutoParkingLimit?: number;
  maxPreview?: boolean;
  profileName?: string;
  recordingNumbers?: ReadonlyArray<{
  number: string;
}>;
  reportToName?: string;
  requestContact?: boolean;
  sendEmailNotifications?: boolean;
  sipUser?: string;
  smsRefusalTimeout?: number;
  subject?: string;
  systemDomain?: string;
  systemUser?: string;
  teamUuId?: string;
  telephone1?: string;
  telephone2?: string;
  timeDisplayFormat?: string;
  timeZoneOffset?: string;
  totalContactCount?: number;
  useAgentTimeZone?: boolean;
  useTeamChatThreshold?: boolean;
  useTeamContactAutoFocus?: boolean;
  useTeamDeliveryModeSettings?: boolean;
  useTeamEmailAutoParkingLimit?: boolean;
  useTeamEmailThreshold?: boolean;
  useTeamMaxConcurrentChats?: boolean;
  useTeamRequestContact?: boolean;
  useTeamWorkItemThreshold?: boolean;
  useTeamSmsThreshold?: boolean;
  useTeamDigitalThreshold?: boolean;
  userID?: string;
  userType?: string;
  voiceThreshold?: number;
  workItemThreshold?: number;
  smsThreshold?: number;
  digitalThreshold?: number;
  agentVoiceThreshold?: number;
  agentChatThreshold?: number;
  agentEmailThreshold?: number;
  agentWorkItemThreshold?: number;
  agentSmsThreshold?: number;
  agentDigitalThreshold?: number;
  agentTotalContactCount?: number;
  agentDeliveryMode?: string;
  useTeamVoiceThreshold?: boolean;
  agentRequestContact?: boolean;
  agentContactAutoFocus?: boolean;
  agentMaxVersion?: number;
  channelLock?: boolean;
  agentChannelLock?: boolean;
  useTeamChannelLock?: boolean;
  agentStateName?: string;
  contactId?: string;
  isOutbound?: boolean;
  lastPollTime?: string;
  lastUpdateTime?: string;
  mediaName?: NiceCxoneFullApiSchemaJsonValue;
  outStateCode?: string;
  outStateDescription?: string;
  skillId?: number;
  skillName?: string;
  startDate?: string;
  stationPhoneNumber?: string;
}>;
}>;
};
  "admin-agents-api-docs:AssignAgentsToTeam:POST:/teams/{teamId}/agents": {
  resultSet?: {
  errorCount?: number;
  agentResults?: ReadonlyArray<{
  success?: boolean;
  error?: string;
  agentId?: string;
}>;
};
};
  "admin-agents-api-docs:RemoveAgentsFromTeam:DELETE:/teams/{teamId}/agents": {
  errorCount?: string;
  agentResults?: ReadonlyArray<{
  success?: string;
  agentId?: string;
}>;
};
  "admin-agents-api-docs:get-teams-id-unavailable-codes:GET:/teams/{teamId}/unavailable-codes": {
  teamId: number;
  teamName: string;
  teamUuid?: string;
  divisionNo?: number;
  unavailableCodes?: ReadonlyArray<{
  outstateId: number;
  outstateName: string;
  isActive: boolean;
  isAcw: boolean;
  agentTimeoutMins?: string;
}>;
};
  "admin-agents-api-docs:AssignUnavailableCode:POST:/teams/{teamId}/unavailable-codes": {
  resultSet?: {
  errorCount?: string;
  codeResults?: ReadonlyArray<{
  success?: string;
  outstateId?: string;
  error?: string;
}>;
};
};
  "admin-agents-api-docs:put-teams-id-unavailable-codes:PUT:/teams/{teamId}/unavailable-codes": {
  error?: string;
  error_description?: string;
};
  "admin-agents-api-docs:RemoveUnavailableCodeTeam:DELETE:/teams/{teamId}/unavailable-codes": {
  errorCount?: number;
  codeResults?: ReadonlyArray<{
  outstateId?: number;
  success?: boolean;
  error?: string;
}>;
};
  "admin-agents-api-docs:get-access-keys:GET:/access-keys": {
  totalRecords?: number;
  accesskeys?: ReadonlyArray<{
  accessKeyId?: string;
  agentId?: number;
  billingId?: number;
  isActive?: boolean;
  lastUsedDate?: string;
}>;
};
  "admin-agents-api-docs:post-access-keys:POST:/access-keys": {
  accesskeys?: ReadonlyArray<{
  accessKeyId?: string;
  accessKeySecret?: string;
  agentId?: number;
  billingId?: number;
  isActive?: boolean;
}>;
};
  "admin-agents-api-docs:get-access-keys-id:GET:/access-keys/{accessKeyId}": {
  accessKey?: {
  accessKeyId?: string;
  agentId?: number;
  billingId?: number;
  isActive?: boolean;
  lastUsedDate?: string;
};
};
  "admin-agents-api-docs:delete-access-keys-id:DELETE:/access-keys/{accessKeyId}": void;
  "admin-agents-api-docs:patch-access-keys-id:PATCH:/access-keys/{accessKeyId}": void;
  "admin-agents-api-docs:get-activesupervisors:GET:/activesupervisors": {
  totalRecords?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  businessUnitId?: number;
  supervisorStatuslist?: ReadonlyArray<{
  initiatingAgentNo?: number;
  contactEventTypeId?: number;
  eventStateDescription?: string;
  targetAgentNo?: number;
  contactId?: number;
  startTimeStamp?: string;
}>;
};
  "admin-agents-api-docs:enhancedCustomerCard:POST:/enhancedcustomercard": {
  message?: string;
  data?: {
  interactionId?: string;
};
};
  "admin-commitments-api-docs:AgentScheduledCallbacks:GET:/agents/{agentId}/scheduled-callbacks": {
  callbacks?: ReadonlyArray<{
  callbackId?: number;
  target?: string;
  agentId?: number;
  skillId?: number;
  dialNumber?: string;
  origNumber?: string;
  firstName?: string;
  lastName?: string;
  notes?: string;
  callbackTime?: string;
  msteamsclientid?: string;
}>;
};
  "admin-commitments-api-docs:CreateScheduledCallback:POST:/scheduled-callbacks": {
  callbackId?: number;
};
  "admin-commitments-api-docs:UpdateScheduledCallback:PUT:/scheduled-callbacks/{callbackId}": {};
  "admin-commitments-api-docs:DeleteScheduledCallback:DELETE:/scheduled-callbacks/{callbackId}": void;
  "admin-commitments-api-docs:SkillScheduledCallbacks:GET:/skills/{skillId}/scheduled-callbacks": NiceCxoneFullApiSchemaGetTargetScheduledCallbacksResponse;
  "admin-contacts-api-docs:ChatTranscript:GET:/contacts/{contactId}/chat-transcript": NiceCxoneFullApiSchemaGetChatTranscriptResponse;
  "admin-contacts-api-docs:get-contacts-id-disposition:GET:/contacts/{contactId}/disposition": {
  dispositionId?: number;
  dispositionName?: string;
  dispositionByAgendId?: number;
  notes?: string;
  lastUpdated?: string;
};
  "admin-contacts-api-docs:getHistoricalChatTranscript:GET:/contacts/{contactId}/historical-chat-transcript": {
  transcript?: {
  cloudState?: string;
  transcript?: ReadonlyArray<{
  text?: string;
  timestamp?: string;
  partyType?: string;
  label?: string;
  roomId?: number;
}>;
};
};
  "admin-contacts-api-docs:EmailTranscript:GET:/contacts/{contactId}/email-transcript": NiceCxoneFullApiSchemaGetEmailTranscriptResponse;
  "admin-contacts-api-docs:ContactFiles:GET:/contacts/{contactId}/files": {
  files?: ReadonlyArray<{
  isDeleted: boolean;
  businessUnitId: number;
  fileName: string;
  fullFileName: string;
  weblink: boolean;
  contactId: number;
  createDate: string;
  modifiedDate: string;
  accessDate: string;
  authorId: number;
  modifiedId: number;
  size: number;
  physicalBytes: number;
  deleteDate: string;
  purposeId: number;
  purposeName: number;
  mailStatusId: number;
  mailStatusName: string;
}>;
};
  "admin-contacts-api-docs:endAContact:POST:/contacts/{contactId}/end": void;
  "admin-contacts-api-docs:monitorAContactCall:POST:/contacts/{contactId}/monitor": void;
  "admin-contacts-api-docs:recordAContact:POST:/contacts/{contactId}/record": {
  error?: string;
  error_description?: string;
};
  "admin-contacts-api-docs:post-contacts-id-set-disposition:POST:/contacts/{contactId}/set-disposition": void;
  "admin-contacts-api-docs:AssignTagsContact:POST:/contacts/{contactId}/tags": NiceCxoneFullApiSchemaPostContactTagsResponse;
  "admin-contacts-api-docs:getContactStateDescriptions:GET:/contact-state-descriptions": NiceCxoneFullApiSchemaGetContactStateDescriptions;
  "admin-contacts-api-docs:getContactStateById:GET:/contact-state-descriptions/{contactStateId}": NiceCxoneFullApiSchemaGetContactStateDescriptions;
  "admin-contacts-api-docs:put-persistent-contacts-id:PUT:/persistent-contacts/{contactId}": void;
  "admin-contacts-api-docs:SignalAContact:POST:/interactions/{contactId}/signal": void;
  "admin-contacts-api-docs:Get-contacts-id-sms-historical-transcript:GET:/contacts/{contactId}/sms-historical-transcript": void;
  "admin-contacts-api-docs:get-contacts-sms-historical-contacts:GET:/contacts/sms-historical-contacts": void;
  "admin-general-api-docs:get-apiversion:GET:/apiversion": {
  apiInfo?: ReadonlyArray<{
  uri?: string;
  version?: number;
  verb?: string;
}>;
};
  "admin-general-api-docs:get-apiversionreleaseinfo:GET:/apiversionreleaseinfo": {
  versionInfo?: ReadonlyArray<{
  version?: number;
  release?: string;
}>;
};
  "admin-general-api-docs:BrandingProfiles:GET:/branding-profiles": NiceCxoneFullApiSchemaGetBrandingProfilesResponse;
  "admin-general-api-docs:BusinessUnitInfo:GET:/business-unit": NiceCxoneFullApiSchemaGetBusinessUnitResponse;
  "admin-general-api-docs:get-business-unit-outbound-routes:GET:/business-unit/outbound-routes": {
  outboundRoutes?: ReadonlyArray<{
  outboundTelecomRouteId?: number;
  routeDescription?: string;
}>;
};
  "admin-general-api-docs:get-agents-id-agent-settings:GET:/agents/{agentId}/agent-settings": {
  maxConferenceParties?: number;
  deleteCommitmentId?: number;
  deleteCommitmentString?: string;
  persistentPanels?: ReadonlyArray<{
  persistentPanelId?: number;
  persistentPanelURI?: string;
}>;
  raygunApiKeyMAX?: string;
  raygunApiKeySupervisor?: string;
  googleAccountNumberMAX?: string;
  googleAccountNumberSupervisor?: string;
  wfoWebsiteUrl?: string;
  wfoWebServiceUrl?: string;
  wfoApiUrl?: string;
  maxClientVersion?: number;
  webRTCWSSUrls?: ReadonlyArray<{
  urlName?: string;
  weight?: string;
}>;
  emergencyPhoneNumbers?: ReadonlyArray<string>;
};
  "admin-general-api-docs:GetCountries:GET:/countries": NiceCxoneFullApiSchemaGetCountriesResponse;
  "admin-general-api-docs:GetsStatesProvinces:GET:/countries/{countryId}/states": NiceCxoneFullApiSchemaGetCountryStatesResponse;
  "admin-general-api-docs:DataDefinitions:GET:/data-definitions/data-types": NiceCxoneFullApiSchemaGetDataDefinitionsDataTypesResponse;
  "admin-general-api-docs:RetrieveAFile:GET:/files": NiceCxoneFullApiSchemaGetFilesResponse;
  "admin-general-api-docs:UploadFile:POST:/files": void;
  "admin-general-api-docs:MoveFile:PUT:/files": void;
  "admin-general-api-docs:DeleteFile:DELETE:/files": void;
  "admin-general-api-docs:GetExternalfiles:GET:/files/external": {
  files?: ReadonlyArray<{
  fileName?: string;
  fileNameWithPath?: string;
  needsProcessing?: boolean;
}>;
};
  "admin-general-api-docs:postexternalfiles:POST:/files/external": void;
  "admin-general-api-docs:putexteranlfiles:PUT:/files/external": void;
  "admin-general-api-docs:ReturnFolder:GET:/folders": void;
  "admin-general-api-docs:DeleteFolder:DELETE:/folders": void;
  "admin-general-api-docs:CategoriesAndPriorities:GET:/feedback-categories-and-priorities": NiceCxoneFullApiSchemaGetFeedbackCategoriesAndPrioritiesResponse;
  "admin-general-api-docs:GetHiringSources:GET:/hiring-sources": NiceCxoneFullApiSchemaGetHiringSourcesResponse;
  "admin-general-api-docs:CreateHiringScource:POST:/hiring-sources": NiceCxoneFullApiSchemaPostHiringSourcesResponse;
  "admin-general-api-docs:get-hours-of-operation:GET:/hours-of-operation": {
  businessUnit?: number;
  totalRecords?: number;
  hoursOfOperation?: ReadonlyArray<{
  hoursOfOperationProfileId?: number;
  hoursOfOperationProfileName?: string;
  description?: string;
  isDeleted?: boolean;
}>;
};
  "admin-general-api-docs:post-hours-of-operation:POST:/hours-of-operation": {
  profileId?: string;
  profileName?: string;
};
  "admin-general-api-docs:get-hours-of-operation-identities:GET:/hours-of-operation/identities": {
  businessUnitId?: number;
  totalRecords?: number;
  hoursOfOperation?: ReadonlyArray<{
  hooId?: number;
  hooName?: string;
}>;
};
  "admin-general-api-docs:get-hours-of-operation-by-id:GET:/hours-of-operation/{hoursOfOperationProfileId}": {
  hoursOfOperationProfileId?: number;
  hoursOfOperationProfileName?: string;
  description?: string;
  notes?: string;
  overrideBranch?: string;
  overrideExpirationDate?: string;
  lastUpdateTime?: string;
  days?: ReadonlyArray<{
  day?: string;
  openTime?: string;
  closeTime?: string;
  hasAdditionalHours?: boolean;
  additionalOpenTime?: string;
  additionalCloseTime?: string;
  isClosedAllDay?: boolean;
}>;
  holidays?: ReadonlyArray<{
  name?: string;
  date?: string;
  openTime?: string;
  closeTime?: string;
  hasAdditionalHours?: boolean;
  additionalOpenTime?: string;
  additionalCloseTime?: string;
  isClosedAllDay?: boolean;
}>;
  skills?: ReadonlyArray<{
  skillId?: number;
  skillName?: string;
}>;
  scripts?: ReadonlyArray<{
  scriptId?: number;
  scriptName?: string;
}>;
};
  "admin-general-api-docs:update-hours-of-operation:PUT:/hours-of-operation/{hoursOfOperationProfileId}": void;
  "admin-general-api-docs:delete-hours-of-operation:DELETE:/hours-of-operation/{hoursOfOperationProfileId}": void;
  "admin-general-api-docs:update-hours-of-operation-skills:PUT:/hours-of-operation/{hoursOfOperationProfileId}/skills": {
  error?: string;
  error_description?: string;
};
  "admin-general-api-docs:ReturnsLocations:GET:/locations": NiceCxoneFullApiSchemaGetLocationsResponse;
  "admin-general-api-docs:getMediaTypes:GET:/media-types": NiceCxoneFullApiSchemaGetMediaTypesResponse;
  "admin-general-api-docs:getMediaTypeById:GET:/media-types/{mediaTypeId}": NiceCxoneFullApiSchemaGetMediaTypesResponse;
  "admin-general-api-docs:MessageTemplates:GET:/message-templates": NiceCxoneFullApiSchemaGetMessageTemplatesResponse;
  "admin-general-api-docs:CreatesMessageTemplate:POST:/message-templates": NiceCxoneFullApiSchemaPostMessageTemplatesResponse;
  "admin-general-api-docs:MessageTemplate:GET:/message-templates/{templateId}": NiceCxoneFullApiSchemaGetMessageTemplateResponse;
  "admin-general-api-docs:UpdatesMessageTemplate:PUT:/message-templates/{templateId}": void;
  "admin-general-api-docs:getPermissions:GET:/permissions": NiceCxoneFullApiSchemaGetPermissionsResponse;
  "admin-general-api-docs:AgentPermissionsList:GET:/permissions/{agentId}": NiceCxoneFullApiSchemaGetPermissionsResponse;
  "admin-general-api-docs:PhoneCodes:GET:/phone-codes": NiceCxoneFullApiSchemaGetPhoneCodesResponse;
  "admin-general-api-docs:getPointsOfContact:GET:/points-of-contact": NiceCxoneFullApiSchemaGetPointsOfContactResponse;
  "admin-general-api-docs:post-points-of-contact:POST:/points-of-contact": {
  error?: string;
  error_Description?: string;
};
  "admin-general-api-docs:getPointOfContactById:GET:/points-of-contact/{pointOfContactId}": NiceCxoneFullApiSchemaGetPointsOfContactResponse;
  "admin-general-api-docs:put-points-of-contact-id:PUT:/points-of-contact/{pointOfContactId}": {
  error?: string;
  error_Description?: string;
};
  "admin-general-api-docs:GetSecurityProfiles:GET:/security-profiles": NiceCxoneFullApiSchemaSecurityProfiles;
  "admin-general-api-docs:GetSecurityProfilesID:GET:/security-profiles/{profileId}": NiceCxoneFullApiSchemaGetSecurityProfileResponse;
  "admin-general-api-docs:get-script:GET:/scripts": {
  header?: {
  masterId?: number;
  scriptName?: string;
  busNo?: number;
  mediaType?: number;
  mediaTypeName?: string;
  purposeType?: string;
  variableRedaction?: string;
  libraryId?: string;
  lockInfo?: {
  lockedName?: string;
  lockedId?: string;
  lockedDate?: string;
};
  nextActionId?: number;
  status?: string;
  lastSavedIn?: string;
};
  actions?: {
  "{actionId}"?: {
  actionId?: number;
  libraryId?: string;
  name?: string;
  version?: number;
  label?: string;
  dependencyOrder?: string;
  implType?: string;
  x?: number;
  y?: number;
};
};
  properties?: {
  "{actionId}"?: {
  "{propertyNumber}"?: {
  name?: string;
  value?: string;
  hidden?: string;
};
};
};
  branches?: {
  "{actionId}"?: ReadonlyArray<{
  to?: number;
  label?: string;
  type?: string;
  index?: number;
  ports?: string;
  lineType?: string;
  elbows?: ReadonlyArray<string>;
}>;
};
};
  "admin-general-api-docs:create-script:POST:/scripts": {
  errorCount?: number;
  results?: ReadonlyArray<{
  success?: boolean;
  libraryId?: string;
}>;
};
  "admin-general-api-docs:delete-script:DELETE:/scripts": void;
  "admin-general-api-docs:update-script:PUT:/scripts": {
  errorState?: boolean;
  errorMessage?: string;
  lockUnlockResult?: string;
};
  "admin-general-api-docs:get-scripts-id:GET:/scripts/{scriptId}": {
  name?: string;
  filePath?: string;
  scriptId?: number;
  status?: string;
  scriptContent?: string;
};
  "admin-general-api-docs:get-search-script:GET:/scripts/search": {
  totalRecords?: number;
  busNo?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  scriptName?: string;
  scriptSearchDetails?: ReadonlyArray<{
  masterID?: number;
  busNo?: number;
  scriptName?: string;
  status?: string;
  mediaType?: number;
  modifyDate?: string;
  mUser?: string;
  actions?: ReadonlyArray<{
  actionId?: number;
  libraryId?: string;
  name?: string;
  label?: string;
}>;
}>;
};
  "admin-general-api-docs:get_/scripts/files:GET:/scripts/files": void;
  "admin-general-api-docs:post_/scripts/files:POST:/scripts/files": void;
  "admin-general-api-docs:put_/scripts/files:PUT:/scripts/files": void;
  "admin-general-api-docs:delete_/scripts/files:DELETE:/scripts/files": void;
  "admin-general-api-docs:get_/scripts/files/search:GET:/scripts/files/search": void;
  "admin-general-api-docs:post-kick-script:POST:/scripts/kick": {
  kickDate?: string;
  ErrorMessage?: string;
  ErrorState?: boolean;
  KickResult?: string;
  MasterID?: number;
  CurrLockedBy?: number;
};
  "admin-general-api-docs:get-script-history:GET:/scripts/historyByName": {
  name?: string;
  versions?: ReadonlyArray<{
  scriptId?: number;
  modifyDate?: string;
  modifyUser?: string;
  status?: string;
}>;
};
  "admin-general-api-docs:post-start-script:POST:/scripts/start": {
  contactId?: number;
};
  "admin-general-api-docs:get-scripts-folders:GET:/script-folders": {
  totalRecords?: number;
  businessUnitId?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  scriptList?: ReadonlyArray<{
  scriptName?: string;
  status?: string;
  masterID?: number;
  createDate?: string;
  modifyDate?: string;
  mediaType?: number;
  mediaTypeName?: string;
  size?: number;
  isFolder?: boolean;
  hidden?: boolean;
  readOnly?: boolean;
  scriptLockingType?: string;
  lockedBy?: string;
  modifiedBy?: string;
}>;
};
  "admin-general-api-docs:getServerTime:GET:/server-time": NiceCxoneFullApiSchemaGetServerTimeResponse;
  "admin-general-api-docs:ReturnsTags:GET:/tags": NiceCxoneFullApiSchemaGetTagsResponse;
  "admin-general-api-docs:CreatesTag:POST:/tags": NiceCxoneFullApiSchemaPostTagsResponse;
  "admin-general-api-docs:GetTagDetailsById:GET:/tags/{tagId}": NiceCxoneFullApiSchemaGetTagsResponse;
  "admin-general-api-docs:UpdatesTag:PUT:/tags/{tagId}": void;
  "admin-general-api-docs:get-suppressed-contact:GET:/suppressed-contact": {
  suppressedContacts?: ReadonlyArray<{
  suppressedContactId?: number;
  bus_No?: number;
  startDate?: string;
  endDate?: string;
  value?: string;
  source?: string;
  fileName?: string;
  createDate?: string;
  createdBy?: number;
  modifiedDate?: string;
  modifiedBy?: number;
  suppressedContactMappings?: ReadonlyArray<{
  suppressedContactId?: number;
  skill_No?: number;
  bus_No?: number;
  createDate?: string;
  createdBy?: number;
  modifiedDate?: string;
  modifiedBy?: number;
}>;
}>;
};
  "admin-general-api-docs:post-suppressed-contact:POST:/suppressed-contact": void;
  "admin-general-api-docs:Timezones:GET:/timezones": NiceCxoneFullApiSchemaGetTimeZonesResponse;
  "admin-general-api-docs:get-business-unit-time-zones:GET:/business-unit/time-zones": void;
  "admin-general-api-docs:put-business-unit-time-zones:PUT:/business-unit/time-zones": void;
  "admin-general-api-docs:get-unavailable-codes:GET:/unavailable-codes": {
  totalRecords?: number;
  businessUnitId?: number;
  unavailableCodes?: ReadonlyArray<{
  id?: number;
  name?: string;
  isActive?: boolean;
  isACW?: boolean;
  agentTimeout?: number;
}>;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
};
  "admin-general-api-docs:post-unavailable-codes:POST:/unavailable-codes": {
  id?: number;
};
  "admin-general-api-docs:get-phone-numbers:GET:/phone-numbers": {
  _links?: {
  self: string;
  next?: string;
  previous?: string;
};
  totalRecords?: number;
  phoneCollection?: ReadonlyArray<{
  phonenumber?: string;
}>;
};
  "admin-general-api-docs:get-suppressed-contact-id:GET:/suppressed-contact/{suppressedContactId}": {
  suppressedContactId?: number;
  bus_No?: number;
  startDate?: string;
  endDate?: string;
  value?: string;
  source?: string;
  fileName?: string;
  createDate?: string;
  createdBy?: number;
  modifiedDate?: string;
  modifiedBy?: number;
  suppressedContactMappings?: ReadonlyArray<{
  suppressedContactId?: number;
  skill_No?: number;
  bus_No?: number;
  createDate?: string;
  createdBy?: number;
  modifiedDate?: string;
  modifiedBy?: number;
}>;
};
  "admin-general-api-docs:put-suppressed-contact-id:PUT:/suppressed-contact/{suppressedContactId}": void;
  "admin-general-api-docs:delete-suppressed-contact-id:DELETE:/suppressed-contact/{suppressedContactId}": void;
  "admin-groups-api-docs:getgroups:GET:/groups": NiceCxoneFullApiSchemaGetgroupsresponse;
  "admin-groups-api-docs:postgroups:POST:/groups": NiceCxoneFullApiSchemaPostgroupsresponse;
  "admin-groups-api-docs:getgroupsbygroupid:GET:/groups/{groupId}": NiceCxoneFullApiSchemaGetgroupgroupidresponse;
  "admin-groups-api-docs:putgroupsbygroupid:PUT:/groups/{groupId}": void;
  "admin-groups-api-docs:GetGroupAgent:GET:/groups/{groupId}/agents": {
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  totalRecords?: number;
  agents?: ReadonlyArray<{
  agentId?: number;
  userName?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  emailAddress?: string;
  isActive?: boolean;
  teamId?: number;
  teamName?: string;
  reportToId?: number;
  reportToName?: string;
  isSupervisor?: boolean;
  lastLogin?: string;
  lastUpdated?: string;
  location?: string;
  custom1?: string;
  custom2?: string;
  custom3?: string;
  custom4?: string;
  custom5?: string;
  internalId?: string;
  profileId?: number;
  profileName?: string;
  timeZone?: string;
  country?: string;
  countryName?: string;
  state?: string;
  city?: string;
  chatRefusalTimeout?: number;
  phoneRefusalTimeout?: number;
  workItemRefusalTimeout?: number;
  defaultDialingPattern?: number;
  defaultDialingPatternName?: string;
  useTeamMaxConcurrentChats?: boolean;
  maxConcurrentChats?: number;
  notes?: string;
  createDate?: string;
  inactiveDate?: string;
  hireDate?: string;
  terminationDate?: string;
  hourlyCost?: number;
  rehireStatus?: boolean;
  employmentType?: number;
  employmentTypeName?: string;
  referral?: string;
  atHome?: boolean;
  hiringSource?: number;
  ntLoginName?: string;
  scheduleNotification?: number;
  federatedId?: string;
  useTeamEmailAutoParkingLimit?: boolean;
  maxEmailAutoParkingLimit?: number;
  sipUser?: string;
  systemUser?: string;
  systemDomain?: string;
  crmUserName?: string;
  useAgentTimeZone?: boolean;
  timeDisplayFormat?: string;
  sendEmailNotifications?: boolean;
  apiKey?: string;
  telephone1?: string;
  telephone2?: string;
  userType?: string;
  isWhatIfAgent?: boolean;
  timeZoneOffset?: string;
  requestContact?: boolean;
  chatThreshold?: number;
  useTeamChatThreshold?: boolean;
  emailThreshold?: number;
  useTeamEmailThreshold?: boolean;
  workItemThreshold?: number;
  useTeamWorkItemThreshold?: boolean;
  contactAutoFocus?: boolean;
  useTeamContactAutoFocus?: boolean;
  useTeamRequestContact?: boolean;
  subject?: string;
  issuer?: string;
  recordingNumbers?: ReadonlyArray<{
  number: string;
}>;
  isOpenIdProfileComplete?: boolean;
}>;
};
  "admin-groups-api-docs:blank:POST:/groups/{groupId}/agents": {
  agents?: ReadonlyArray<{
  agentId?: number;
}>;
};
  "admin-groups-api-docs:deleteGroupAgents:DELETE:/groups/{groupId}/agents": NiceCxoneFullApiSchemaDeletegroupgroupidresponse;
  "admin-lists-api-docs:DncGroupsResultSet:GET:/dnc-groups": NiceCxoneFullApiSchemaGetDNCGroupsResponse;
  "admin-lists-api-docs:post-dnc-groups:POST:/dnc-groups": {
  dncGroups?: ReadonlyArray<{
  dncGroupId?: number;
  dncGroupName?: string;
  dncGroupDescription?: string;
  validRecords?: number;
  isActive?: boolean;
  isRemoved?: boolean;
  createDate?: string;
  lastUpdateTime?: string;
}>;
};
  "admin-lists-api-docs:GetDNCgroupByID:GET:/dnc-groups/{groupId}": NiceCxoneFullApiSchemaGetDNCGroupResponseById;
  "admin-lists-api-docs:PutDNCgroupByID:PUT:/dnc-groups/{groupId}": NiceCxoneFullApiSchemaPostDNCGroupsResponse;
  "admin-lists-api-docs:GetDncGroupsContribSkills:GET:/dnc-groups/{groupId}/contributing-skills": NiceCxoneFullApiSchemaGetDNCGroupContributingSkillsResponse;
  "admin-lists-api-docs:PostDncGroupsContribSkillsById:POST:/dnc-groups/{groupId}/contributing-skills/{skillId}": void;
  "admin-lists-api-docs:DeleteDncGroupsContribSkillsById:DELETE:/dnc-groups/{groupId}/contributing-skills/{skillId}": void;
  "admin-lists-api-docs:DncGroupsRecords:GET:/dnc-groups/{groupId}/records": NiceCxoneFullApiSchemaGetDNCGroupRecordsResponseById;
  "admin-lists-api-docs:CreateDncGroupRecords:POST:/dnc-groups/{groupId}/records": NiceCxoneFullApiSchemaPostDNCGroupRecordsResponse;
  "admin-lists-api-docs:DeleteDncGroupRecords:DELETE:/dnc-groups/{groupId}/records": NiceCxoneFullApiSchemaDeleteDNCGroupRecordsResponse;
  "admin-lists-api-docs:GetDncGroupsScrubbedSkills:GET:/dnc-groups/{groupId}/scrubbed-skills": NiceCxoneFullApiSchemaGetDNCGroupScrubbedSkillsResponse;
  "admin-lists-api-docs:PostDncGroupsScrubbedSkills:POST:/dnc-groups/{groupId}/scrubbed-skills/{skillId}": void;
  "admin-lists-api-docs:DeleteDncGroupsScrubbedSkills:DELETE:/dnc-groups/{groupId}/scrubbed-skills/{skillId}": void;
  "admin-lists-api-docs:ReturnAListOfGroupsByPhonenumber:POST:/dnc-groups/search": NiceCxoneFullApiSchemaGetSearchDNCGroupsResponse;
  "admin-lists-api-docs:get-dnis:GET:/dnis": {
  totalRecords?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  dnisEntries?: ReadonlyArray<{
  dnis?: string;
  isActive?: boolean;
}>;
};
  "admin-lists-api-docs:ReturnCallList:GET:/lists/call-lists": NiceCxoneFullApiSchemaGetCallingListsResponse;
  "admin-lists-api-docs:post_/lists/call-lists:POST:/lists/call-lists": {
  listId: number;
};
  "admin-lists-api-docs:DownloadACallList:GET:/lists/call-lists/{listId}": NiceCxoneFullApiSchemaGetCallingListResponseById;
  "admin-lists-api-docs:delete_/lists/call-lists/{listId}:DELETE:/lists/call-lists/{listId}": void;
  "admin-lists-api-docs:DownloadACallListAttempts:GET:/lists/call-lists/{listId}/attempts": NiceCxoneFullApiSchemaGetCallingListAttemptsResponse;
  "admin-lists-api-docs:UploadingCallingList:POST:/lists/call-lists/{listId}/upload": {
  jobId?: number;
};
  "admin-lists-api-docs:delete-lists-call-lists-id-removeProspects:DELETE:/lists/call-lists/{sourceName}/removeProspects": {
  successfulRecords?: ReadonlyArray<{
  externalId?: string;
  resultCode?: string;
}>;
  failedRecords?: ReadonlyArray<{
  externalId?: string;
  resultCode?: string;
}>;
};
  "admin-lists-api-docs:GetListJob:GET:/lists/call-lists/jobs": NiceCxoneFullApiSchemaGetCallingListjobResponse;
  "admin-lists-api-docs:GetCallingList:GET:/lists/call-lists/jobs/{jobId}": NiceCxoneFullApiSchemaGetCallingListByJobIDResponse;
  "admin-lists-api-docs:CancelList:DELETE:/lists/call-lists/jobs/{jobId}": void;
  "admin-routingattributes-api-docs:getRoutingAttributes:GET:/routing-attributes": NiceCxoneFullApiSchemaRoutingAttributeGetListResponse;
  "admin-routingattributes-api-docs:getRoutingAttribute:GET:/routing-attributes/{routingAttributeNo}": NiceCxoneFullApiSchemaRoutingAttribute;
  "admin-routingattributes-api-docs:addUpdateRoutingAttribute:PUT:/routing-attributes/{routingAttributeNo}": void;
  "admin-routingattributes-api-docs:getRoutingAttributeAgents:GET:/routing-attributes/{routingAttributeNo}/agents": NiceCxoneFullApiSchemaRoutingAttributeAgentsResponse;
  "admin-routingattributes-api-docs:getAgentRoutingAttributes:GET:/agents/{agentNo}/routing-attributes": NiceCxoneFullApiSchemaAgentRoutingAttributesResponse;
  "admin-routingattributes-api-docs:updateAgentRoutingAttributes:PUT:/agents/{agentNo}/routing-attributes": NiceCxoneFullApiSchemaAgentRoutingAttribute;
  "admin-routingattributes-api-docs:removeAgentRoutingAttribute:DELETE:/agents/routing-attributes/{routingAttributeNo}": NiceCxoneFullApiSchemaAgentRoutingAttribute;
  "admin-scriptschedules-api-docs:get-script-schedules:GET:/script-schedules": {
  businessUnitId?: number;
  totalRecords?: number;
  scriptSchedules?: ReadonlyArray<{
  id?: number;
  name?: string;
  scheduleType?: number;
  lastRunTime?: string;
  nextRunTime?: string;
  state?: number;
  nextAttemptRunTime?: string;
  status?: boolean;
}>;
};
  "admin-scriptschedules-api-docs:get-script-schedules-id:GET:/script-schedules/{scriptScheduleId}": {
  scriptSchedule?: {
  id?: number;
  busNo?: number;
  skill?: number;
  name?: string;
  parameters?: ReadonlyArray<string>;
  script?: string;
  status?: boolean;
  state?: number;
  lastRunTime?: string;
  nextRunTime?: string;
  scheduleType?: number;
  startDate?: string;
  ends?: number;
  endDate?: string;
  occurrencesRemaining?: number;
  timeOut?: number;
  recursType?: number;
  everyXDays?: number;
  everyXWeeks?: number;
  weeklyDays?: number;
  dayOfMonth?: number;
  everyXmonth?: number;
  ordinalMonthWeek?: number;
  monthWeekDays?: number;
  nextAttemptRunTime?: string;
  attemptCount?: number;
};
};
  "admin-scriptschedules-api-docs:get-script-schedules-id-audit-history:GET:/script-schedules/{scriptScheduleId}/audit-history": {
  businessUnitId?: number;
  createdBy?: string;
  modifiedBy?: string;
  createdDate?: string;
  modifiedDate?: string;
  totalRecords?: number;
  auditHistoryEntries?: ReadonlyArray<{
  columnName?: string;
  newValue?: string;
  oldValue?: string;
  date?: string;
  modifiedBy?: number;
  modifiedByName?: string;
}>;
};
  "admin-scriptschedules-api-docs:get-script-schedules-scripts:GET:/script-schedules/scripts": {
  businessUnitId?: number;
  totalRecords?: number;
  scripts?: ReadonlyArray<{
  id?: number;
  name?: string;
  mediaTypeId?: number;
}>;
};
  "admin-scriptschedules-api-docs:get-script-schedules-skills:GET:/script-schedules/skills": {
  businessUnitId?: number;
  totalRecords?: number;
  skills?: ReadonlyArray<{
  id?: number;
  name?: string;
}>;
};
  "admin-skills-api-docs:get-campaigns:GET:/campaigns": {
  totalRecords?: number;
  businessUnitId?: number;
  campaigns?: ReadonlyArray<{
  id?: number;
  name?: string;
  isActive?: boolean;
  description?: string;
  notes?: string;
  lastUpdateTime?: string;
}>;
};
  "admin-skills-api-docs:post-campaigns:POST:/campaigns": {
  id?: number;
};
  "admin-skills-api-docs:get-campaigns-id:GET:/campaigns/{campaignId}": {
  id?: number;
  name?: string;
  divisionId?: number;
  notes?: string;
  description?: string;
  isActive?: boolean;
  lastUpdateTime?: string;
};
  "admin-skills-api-docs:put-campaigns-id:PUT:/campaigns/{campaignId}": {
  error?: string;
  error_description?: string;
};
  "admin-skills-api-docs:get-campaigns-id-skills-unassigned:GET:/campaigns/{campaignId}/skills/unassigned": {
  businessUnitId?: number;
  totalRecords?: number;
  skills?: ReadonlyArray<{
  mediaType?: number;
  mediaName?: string;
  skillId?: number;
  skillName?: string;
}>;
};
  "admin-skills-api-docs:patch-campaigns-id-status:PATCH:/campaigns/{campaignId}/status": {
  error?: string;
  error_description?: string;
};
  "admin-skills-api-docs:get-campaigns-id-audit-history:GET:/campaigns/{campaignId}/audit-history": {
  businessUnitId?: number;
  createdBy?: string;
  modifiedBy?: string;
  createdDate?: string;
  modifiedDate?: string;
  totalRecords?: number;
  auditHistoryEntries?: ReadonlyArray<{
  auditHistoryId?: number;
  columnName?: string;
  newValue?: string;
  oldValue?: string;
  date?: string;
  modifiedBy?: number;
  modifiedByName?: string;
}>;
};
  "admin-skills-api-docs:get-dispositions-skills:GET:/dispositions/skills": {
  dispositionId?: number;
  dispositionName?: string;
  isActive?: boolean;
  skills?: ReadonlyArray<{
  skillId?: number;
  mediaTypeId?: number;
  mediaTypeName?: number;
}>;
};
  "admin-skills-api-docs:get-dispositions-id:GET:/dispositions/{dispositionId}": {
  dispositionId: number;
  dispositionName?: string;
  classificationId?: number;
  classificationName?: string;
  isActive?: boolean;
  dialerAgentOutcomeId?: number;
  dialerAgentOutcomeName?: string;
  reportingGroupId?: number;
  showCommitmentAmount?: boolean;
  showRescheduleDate?: boolean;
  isAgentSpecific?: boolean;
  notes?: string;
  lastUpdated?: string;
  systemOutcome?: string;
  isPreviewDisposition?: boolean;
};
  "admin-skills-api-docs:put-dispositions-id:PUT:/dispositions/{dispositionId}": void;
  "admin-skills-api-docs:get-dispositions-id-skills:GET:/dispositions/{dispositionId}/skills": {
  totalRecords?: number;
  businessUnitId?: number;
  skills?: ReadonlyArray<{
  skillId?: number;
  skillName?: string;
  mediaTypeId?: number;
  mediaTypeName?: string;
  campaignId?: number;
  campaignName?: string;
  direction?: string;
  sla?: string;
  skillStatus?: number;
}>;
};
  "admin-skills-api-docs:DispostionClassifications:GET:/dispositions/classifications": {
  totalRecords?: number;
  businessUnitId?: number;
  classificationResults?: ReadonlyArray<{
  classificationId: number;
  businessUnitId?: number;
  classificationName?: string;
  classificationTypeID?: number;
  direction?: number;
  dialingOutcomeId?: number;
  reportingGroupId?: number;
  description?: string;
  showCommitmentAmount?: boolean;
  showRescheduleDate?: boolean;
  isAgentSpecific?: boolean;
  isDestinationFinal?: boolean;
  isContactFinal?: boolean;
  excludeFromSerialDelivery?: boolean;
  carryoverForCallback?: boolean;
  reportingGroupName?: string;
  isPreviewDisposition?: boolean;
  classificationLocalizationKey?: string;
  dialingOutcomeLocalizationKey?: string;
  reportingGroupLocalizationKey?: string;
}>;
};
  "admin-skills-api-docs:patch-status-by-dispositions-id:PATCH:/dispositions/{dispositionId}/status": void;
  "admin-skills-api-docs:get-dispositions-id-audit-history:GET:/dispositions/{dispositionId}/audit-history": {
  businessUnitId?: number;
  createdBy?: string;
  modifiedBy?: string;
  createdDate?: string;
  modifiedDate?: string;
  totalRecords?: number;
  auditHistoryRecords?: ReadonlyArray<{
  auditHistoryID?: number;
  columnName?: string;
  newValue?: string;
  oldValue?: string;
  date?: string;
  modifiedBy?: number;
  modifiedByName?: string;
}>;
};
  "admin-skills-api-docs:get-skills:GET:/skills": void;
  "admin-skills-api-docs:post-skills:POST:/skills": {
  errorCount?: number;
  skillsResults?: ReadonlyArray<{
  success?: boolean;
  error?: string;
}>;
};
  "admin-skills-api-docs:get-skills-parameters:GET:/skills/parameters": {
  skills?: ReadonlyArray<{
  skillName?: string;
  skillNo?: number;
  generalSettings?: {
  minimumRetryMinutes?: number;
  maximumAttempts?: number;
  defaultContactExpiration?: number;
  getPriorityContactsOnContactInsertion?: boolean;
  loadCallbacks?: boolean;
  loadFresh?: boolean;
  loadNonFresh?: boolean;
  overrideBusinessUnitAbandonRate?: boolean;
  maximumRingingDuration?: number;
  beginDampenPercentage?: number;
  abandonRateCutoff?: number;
  abandonRateThreshold?: number;
  inactiveBlenderTimer?: number;
  maximumRatio?: number;
  aggressiveness?: number;
  endOfListNotificationsDelay?: number;
  notifyAgentsWhenListIsEmpty?: boolean;
  percentageOfAgentsBeforeOverdial?: number;
  blockMultipleCalls?: boolean;
  consecutiveAttemptsWithoutALiveConnect?: number;
  enableDialingByProficiency?: boolean;
  proficiencyFactor?: number;
  waitTimeFactor?: boolean;
  maxConcurrentCallsPerAgent?: number;
  maxWaitTimeSeconds?: number;
};
  cadenceSettings?: {
  cadenceMaximumAttempts?: ReadonlyArray<{
  label?: string;
  maxAttempts?: number;
}>;
  attemptMode?: number;
  recordRequestMode?: number;
  destinationRetryRestMinutes?: number;
  cadences?: ReadonlyArray<{
  fieldName?: string;
  attempts?: number;
  order?: number;
  timeConstraints?: ReadonlyArray<{
  dayType?: string;
  startTime?: string;
  endTime?: string;
}>;
}>;
};
  deliveryPreferences?: {
  confirmationRequiredDisabled?: boolean;
  confirmationRequiredDeliveryType?: number;
  confirmationRequiredTimeout?: number;
  confirmationRequiredTimeoutSubsequent?: number;
  confirmationRequiredDefaultAccept?: boolean;
  confirmationRequiredDefault?: boolean;
  complianceRecordsDisabled?: boolean;
  complianceRecordsDeliveryType?: number;
  complianceRecordsTimeout?: number;
  complianceRecordsTimeoutSubsequent?: number;
  complianceRecordsDefaultAccept?: boolean;
  showComplianceButtonReschedule?: boolean;
  showComplianceButtonRequeue?: boolean;
  showComplianceButtonSnooze?: boolean;
  showComplianceButtonDisposition?: boolean;
  showPreviewButtonReschedule?: boolean;
  showPreviewButtonRequeue?: boolean;
  showPreviewButtonSnooze?: boolean;
  showPreviewButtonDisposition?: boolean;
};
  callingLists?: ReadonlyArray<{
  id?: number;
  name?: string;
}>;
  cpaSettings?: {
  abandonTimeout?: number;
  abandonMessagePath?: string;
  abandonMsgMode?: number;
  ansMachineDetMode?: number;
  ansMachineMsg?: string;
  exceptions?: ReadonlyArray<{
  attemptNo?: number;
  ansMachineDetMode?: number;
  ansMachineMsg?: string;
}>;
  treatProgressAsRinging?: boolean;
  preConnectCPAEnabled?: boolean;
  agentOverrideOptionFax?: boolean;
  agentOverrideOptionAnsweringMachine?: boolean;
  agentOverrideOptionBadNumber?: boolean;
  utteranceMinimumSeconds?: number;
  customerLiveSilenceSeconds?: number;
  machineMinimumWithAgentSeconds?: number;
  machineMinimumWithoutAgentSeconds?: number;
  machineEndSilenceSeconds?: number;
  machineEndTimeoutSeconds?: number;
  agentResponseUtteranceMinimumSeconds?: number;
  agentNoResponseSeconds?: number;
  agentVoiceThreshold?: number;
  customerVoiceThreshold?: number;
  preConnectCPARecording?: boolean;
  enableCPALogging?: string;
};
  retrySettings?: {
  loadNonFresh?: boolean;
  finalizeWhenExhausted?: boolean;
  maximumAttempts?: number;
  minimumRetryMinutes?: number;
  maximumNumberOfHandledCalls?: number;
  restrictedCallingMinutes?: number;
  restrictedCallingMaxAttempts?: number;
  generalStaleMinutes?: number;
  callbackRestMinutes?: number;
  releaseAgentSpecificCalls?: boolean;
  maximumNumberOfCallbacks?: number;
  callbackStaleMinutes?: number;
};
  filterSettings?: {
  isFilterActive?: boolean;
  excludePriority?: boolean;
  excludeCallback?: boolean;
  applyOptions?: number;
  filterConditions?: ReadonlyArray<{
  column?: string;
  operator?: string;
  value?: string;
}>;
};
  listManagementSettings?: {
  displayField1Id?: number;
  displayField1Name?: string;
  displayField2Id?: number;
  displayField2NAme?: string;
  listOrderingOptions?: ReadonlyArray<{
  orderType?: string;
  direction?: string;
}>;
};
  scheduleSettings?: {
  isScheduled?: boolean;
  schedules?: ReadonlyArray<{
  day?: string;
  active?: boolean;
  startTime?: string;
  endTime?: string;
}>;
};
  timeZoneSettings?: ReadonlyArray<{
  name?: string;
  description?: string;
  overrideTime?: boolean;
  timeZoneActiveToCall?: boolean;
  startTime?: string;
  endTime?: string;
}>;
  xsSettings?: {
  xsScriptId?: number;
  xsCheckinScriptId?: number;
  externalOutboundSkill_No?: string;
  xsSkillChangedActive?: boolean;
  xsGetContactsActive?: boolean;
  xsFreshThreshold?: number;
  xsAvailableThreshold?: number;
  xsReadyThreshold?: number;
  xsNumberToRetrieve?: number;
};
}>;
};
  "admin-skills-api-docs:get-skills-id:GET:/skills/{skillId}": {
  skillId?: number;
  skillName?: string;
  mediaTypeId?: number;
  mediaTypeName?: string;
  workItemQueueType?: string;
  isActive?: boolean;
  campaignId?: number;
  campaignName?: string;
  notes?: string;
  acwTypeId?: 1 | 2 | 3;
  agentFirstResponseTime?: number;
  agentFollowOnResponseTime?: number;
  agentResponseEnabled?: boolean;
  customerIdleTime?: number;
  customerResponseEnabled?: boolean;
  IsSubSkill?: boolean;
  PresentAcceptReject?: boolean;
  routingQueueId?: number;
  TenantId?: string;
  timeExtensionEnabled?: boolean;
  stateIdACW?: number;
  stateNameACW?: string;
  maxSecondsACW?: number;
  acwPostTimeoutStateId?: number;
  acwPostTimeoutStateName?: string;
  requireDisposition?: boolean;
  allowSecondaryDisposition?: boolean;
  agentRestTime?: number;
  makeTranscriptAvailable?: boolean;
  transcriptFromAddress?: string;
  displayThankyou?: boolean;
  thankYouLink?: string;
  popThankYou?: boolean;
  popThankYouURL?: string;
  isOutbound?: boolean;
  outboundStrategy?: string;
  isRunning?: boolean;
  priorityBlending?: boolean;
  callerIdOverride?: string;
  scriptId?: number;
  scriptName?: string;
  emailFromAddress?: string;
  emailFromEditable?: boolean;
  emailBccAddress?: string;
  emailParking?: boolean;
  EquityLevel?: number;
  evaluationCriteria?: number;
  FallbackTime?: number;
  FocusLock?: number;
  FocusMetric?: number;
  chatWarningThreshold?: number;
  agentTypingIndicator?: boolean;
  patronTypingPreview?: boolean;
  interruptible?: boolean;
  callSuppressionScriptId?: number;
  reskillHours?: number;
  reskillHoursName?: string;
  countReskillHours?: boolean;
  minWFIAgents?: number;
  minWFIAvailableAgents?: number;
  useScreenPops?: boolean;
  screenPopTriggerEvent?: string;
  useCustomScreenPops?: boolean;
  screenPopDetail?: string;
  minWorkingTime?: number;
  agentless?: boolean;
  agentlessPorts?: number;
  initialPriority?: number;
  acceleration?: number;
  maxPriority?: number;
  serviceLevelThreshold?: number;
  serviceLevelGoal?: number;
  enableShortAbandon?: boolean;
  shortAbandonThreshold?: number;
  countShortAbandons?: boolean;
  messageTemplateId?: number;
  smsTransportCodeId?: number;
  smsTransportCode?: string;
  dispositions?: ReadonlyArray<{
  dispositionId?: number;
  dispositionName?: string;
  priority?: number;
  isPreviewDisposition?: boolean;
}>;
  deliverMultipleNumbersSerially?: boolean;
  cradleToGrave?: boolean;
  priorityInterrupt?: boolean;
  outboundTelecomRouteId?: number;
  requireManualAccept?: boolean;
};
  "admin-skills-api-docs:put-skills-id:PUT:/skills/{skillId}": {
  success?: boolean;
  skillId?: number;
};
  "admin-skills-api-docs:get-skills-id-parameters:GET:/skills/{skillId}/parameters": {
  skillName?: string;
  skillNo?: number;
  generalSettings?: {
  minimumRetryMinutes?: number;
  maximumAttempts?: number;
  defaultContactExpiration?: number;
  getPriorityContactsOnContactInsertion?: boolean;
  loadCallbacks?: boolean;
  loadFresh?: boolean;
  loadNonFresh?: boolean;
  overrideBusinessUnitAbandonRate?: boolean;
  maximumRingingDuration?: number;
  beginDampenPercentage?: number;
  abandonRateCutoff?: number;
  abandonRateThreshold?: number;
  inactiveBlenderTimer?: number;
  maximumRatio?: number;
  aggressiveness?: number;
  endOfListNotificationsDelay?: number;
  notifyAgentsWhenListIsEmpty?: boolean;
  percentageOfAgentsBeforeOverdial?: number;
  blockMultipleCalls?: boolean;
  consecutiveAttemptsWithoutALiveConnect?: number;
  enableDialingByProficiency?: boolean;
  proficiencyFactor?: number;
  waitTimeFactor?: boolean;
  maxConcurrentCallsPerAgent?: number;
  maxWaitTimeSeconds?: number;
};
  cadenceSettings?: {
  cadenceMaximumAttempts?: ReadonlyArray<{
  label?: string;
  maxAttempts?: number;
}>;
  attemptMode?: number;
  recordRequestMode?: number;
  destinationRetryRestMinutes?: number;
  cadences?: ReadonlyArray<{
  fieldName?: string;
  attempts?: number;
  order?: number;
  timeConstraints?: ReadonlyArray<{
  dayType?: string;
  startTime?: string;
  endTime?: string;
}>;
}>;
};
  deliveryPreferences?: {
  confirmationRequiredDisabled?: boolean;
  confirmationRequiredDeliveryType?: number;
  confirmationRequiredTimeout?: number;
  confirmationRequiredTimeoutSubsequent?: number;
  confirmationRequiredDefaultAccept?: boolean;
  confirmationRequiredDefault?: boolean;
  complianceRecordsDisabled?: boolean;
  complianceRecordsDeliveryType?: number;
  complianceRecordsTimeout?: number;
  complianceRecordsTimeoutSubsequent?: number;
  complianceRecordsDefaultAccept?: boolean;
  showComplianceButtonReschedule?: boolean;
  showComplianceButtonRequeue?: boolean;
  showComplianceButtonSnooze?: boolean;
  showComplianceButtonDisposition?: boolean;
  showPreviewButtonReschedule?: boolean;
  showPreviewButtonRequeue?: boolean;
  showPreviewButtonSnooze?: boolean;
  showPreviewButtonDisposition?: boolean;
};
  callingLists?: ReadonlyArray<{
  id?: number;
  name?: string;
}>;
  cpaSettings?: {
  abandonTimeout?: number;
  abandonMessagePath?: string;
  abandonMsgMode?: number;
  ansMachineDetMode?: number;
  ansMachineMsg?: string;
  exceptions?: ReadonlyArray<{
  attemptNo?: number;
  ansMachineDetMode?: number;
  ansMachineMsg?: string;
}>;
  treatProgressAsRinging?: boolean;
  preConnectCPAEnabled?: boolean;
  agentOverrideOptionFax?: boolean;
  agentOverrideOptionAnsweringMachine?: boolean;
  agentOverrideOptionBadNumber?: boolean;
  utteranceMinimumSeconds?: number;
  customerLiveSilenceSeconds?: number;
  machineMinimumWithAgentSeconds?: number;
  machineMinimumWithoutAgentSeconds?: number;
  machineEndSilenceSeconds?: number;
  machineEndTimeoutSeconds?: number;
  agentResponseUtteranceMinimumSeconds?: number;
  agentNoResponseSeconds?: number;
  agentVoiceThreshold?: number;
  customerVoiceThreshold?: number;
  preConnectCPARecording?: boolean;
  enableCPALogging?: string;
};
  retrySettings?: {
  loadNonFresh?: boolean;
  finalizeWhenExhausted?: boolean;
  maximumAttempts?: number;
  minimumRetryMinutes?: number;
  maximumNumberOfHandledCalls?: number;
  restrictedCallingMinutes?: number;
  restrictedCallingMaxAttempts?: number;
  generalStaleMinutes?: number;
  callbackRestMinutes?: number;
  releaseAgentSpecificCalls?: boolean;
  maximumNumberOfCallbacks?: number;
  callbackStaleMinutes?: number;
};
  filterSettings?: {
  isFilterActive?: boolean;
  excludePriority?: boolean;
  excludeCallback?: boolean;
  applyOptions?: number;
  filterConditions?: ReadonlyArray<{
  column?: string;
  operator?: string;
  value?: string;
}>;
};
  listManagementSettings?: {
  displayField1Id?: number;
  displayField1Name?: string;
  displayField2Id?: number;
  displayField2NAme?: string;
  listOrderingOptions?: ReadonlyArray<{
  orderType?: string;
  direction?: string;
}>;
};
  scheduleSettings?: {
  isScheduled?: boolean;
  schedules?: ReadonlyArray<{
  day?: string;
  active?: boolean;
  startTime?: string;
  endTime?: string;
}>;
};
  timeZoneSettings?: ReadonlyArray<{
  name?: string;
  description?: string;
  overrideTime?: boolean;
  timeZoneActiveToCall?: boolean;
  startTime?: string;
  endTime?: string;
}>;
  xsSettings?: {
  xsScriptId?: number;
  xsCheckinScriptId?: number;
  externalOutboundSkill_No?: string;
  xsSkillChangedActive?: boolean;
  xsGetContactsActive?: boolean;
  xsFreshThreshold?: number;
  xsAvailableThreshold?: number;
  xsReadyThreshold?: number;
  xsNumberToRetrieve?: number;
};
};
  "admin-skills-api-docs:get-skills-id-thank-you-page:GET:/skills/{skillId}/thank-you-page": {
  canDownloadChatTranscript?: boolean;
  chatThankPopURL?: string;
  displayChatThankPage?: boolean;
  thankMessage?: string;
  useChatThankPopURL?: boolean;
  fromAddress?: string;
};
  "admin-skills-api-docs:post_/skills/{skillId}/start:POST:/skills/{skillId}/start": void;
  "admin-skills-api-docs:post_/skills/{skillId}/stop:POST:/skills/{skillId}/stop": void;
  "admin-skills-api-docs:getAgentsAllSkills:GET:/skills/agents": {
  lastPollTime?: string;
  businessUnitId?: number;
  agentSkillAssignments?: ReadonlyArray<{
  agentId?: number;
  agentName?: string;
  agentProficiencyValue?: number;
  agentProficiencyName?: string;
  campaignId?: number;
  campaignName?: string;
  emailFromAddress?: string;
  internalId?: string;
  isActive?: boolean;
  isSkillActive?: boolean;
  isNaturalCalling?: boolean;
  isNaturalCallingRunning?: boolean;
  isOutbound?: boolean;
  lastUpdateTime?: string;
  mediaType?: number;
  mediaTypeName?: string;
  notes?: string;
  outboundStrategy?: string;
  priorityBlending?: boolean;
  requireDispositions?: boolean;
  scriptDisposition?: boolean;
  skillId?: number;
  skillName?: string;
  useACW?: boolean;
  useDisposition?: boolean;
  useSecondaryDisposition?: boolean;
  screenPopTriggerEvent?: string;
  isAssigned?: boolean;
}>;
  invalidSkills?: ReadonlyArray<{
  skillId?: number;
}>;
};
  "admin-skills-api-docs:getAgentsBySkillId:GET:/skills/{skillId}/agents": NiceCxoneFullApiSchemaGetSkillAgentsResponse;
  "admin-skills-api-docs:AgentAssignmentsSkill:POST:/skills/{skillId}/agents": NiceCxoneFullApiSchemaPostSkillAgentsResponse;
  "admin-skills-api-docs:ModifyAssignmentsSkill:PUT:/skills/{skillId}/agents": NiceCxoneFullApiSchemaPostSkillAgentsResponse;
  "admin-skills-api-docs:RemoveAgentAssignmentsSkill:DELETE:/skills/{skillId}/agents": NiceCxoneFullApiSchemaDeleteSkillAgentsResponse;
  "admin-skills-api-docs:delete-skills-id-agents-id:DELETE:/skills/{skillId}/agents/{agentId}": void;
  "admin-skills-api-docs:GetAgentsThatAreNotAssignedToSkill:GET:/skills/{skillId}/agents/unassigned": NiceCxoneFullApiSchemaGetSkillAgentsUnassignedResponse;
  "admin-skills-api-docs:SKILLCALLDATA:GET:/skills/call-data": NiceCxoneFullApiSchemaGetSkillsCallDataResponse;
  "admin-skills-api-docs:SkillCallData:GET:/skills/{skillId}/call-data": NiceCxoneFullApiSchemaGetSkillsCallDataResponse;
  "admin-skills-api-docs:DispositionList:GET:/skills/{skillId}/dispositions": NiceCxoneFullApiSchemaGetSkillDispositionsResponse;
  "admin-skills-api-docs:DispositionsNotAssignedSkill:GET:/skills/{skillId}/dispositions/unassigned": NiceCxoneFullApiSchemaGetSkillDispositionsUnassignedResponse;
  "admin-skills-api-docs:GetTagsSkill:GET:/skills/{skillId}/tags": NiceCxoneFullApiSchemaGetSkillTagsResponse;
  "admin-skills-api-docs:AssignTagSkill:POST:/skills/{skillId}/tags": NiceCxoneFullApiSchemaPostSkillTagsResponse;
  "admin-skills-api-docs:RemoveTagsSkill:DELETE:/skills/{skillId}/tags": NiceCxoneFullApiSchemaDeleteSkillTagsResponse;
  "admin-skills-api-docs:get-skills-id-parameters-general-settings:GET:/skills/{skillId}/parameters/general-settings": NiceCxoneFullApiSchemaGetOutBoundSkillSettingsResponse;
  "admin-skills-api-docs:put-skills-id-parameters-general-settings:PUT:/skills/{skillId}/parameters/general-settings": void;
  "admin-skills-api-docs:get-skills-id-parameters-cpa-management:GET:/skills/{skillId}/parameters/cpa-management": {
  AnsMachineOverrideSeconds?: number;
};
  "admin-skills-api-docs:put-skills-id-parameters-cpa-management:PUT:/skills/{skillId}/parameters/cpa-management": void;
  "admin-skills-api-docs:get-skills-id-parameters-xs-settings:GET:/skills/{skillId}/parameters/xs-settings": void;
  "admin-skills-api-docs:put-skills-id-parameters-xs-settings:PUT:/skills/{skillId}/parameters/xs-settings": void;
  "admin-skills-api-docs:get-skills-id-parameters-delivery-preferences:GET:/skills/{skillId}/parameters/delivery-preferences": void;
  "admin-skills-api-docs:put-skills-id-parameters-delivery-preferences:PUT:/skills/{skillId}/parameters/delivery-preferences": void;
  "admin-skills-api-docs:get-skills-id-parameters-retry-settings:GET:/skills/{skillId}/parameters/retry-settings": void;
  "admin-skills-api-docs:put-skills-id-parameters-retry-settings:PUT:/skills/{skillId}/parameters/retry-settings": void;
  "admin-skills-api-docs:get-skills-id-parameters-schedule-settings:GET:/skills/{skillId}/parameters/schedule-settings": {
  isScheduled?: boolean;
  sundayStartTime?: string;
  sundayEndTime?: string;
  sundayIsActive?: boolean;
  mondayStartTime?: string;
  mondayEndTime?: string;
  mondayIsActive?: boolean;
  tuesdayStartTime?: string;
  tuesdayEndTime?: string;
  tuesdayIsActive?: boolean;
  wednesdayStartTime?: string;
  wednesdayEndTime?: string;
  wednesdayIsActive?: boolean;
  thursdayStartTime?: string;
  thursdayEndTime?: string;
  thursdayIsActive?: boolean;
  fridayStartTime?: string;
  fridayEndTime?: string;
  fridayIsActive?: boolean;
  saturdayStartTime?: string;
  saturdayEndTime?: string;
  saturdayIsActive?: boolean;
};
  "admin-skills-api-docs:put-skills-id-parameters-schedule-settings:PUT:/skills/{skillId}/parameters/schedule-settings": void;
  "admin-skills-api-docs:put-skills-id-parameters-cadence-settings:PUT:/skills/{skillId}/parameters/cadence-settings": void;
  "admin-skills-api-docs:get-skills-id-parameters-time-zones:GET:/skills/{skillId}/parameters/time-zones": void;
  "admin-skills-api-docs:put-skills-id-parameters-time-zones:PUT:/skills/{skillId}/parameters/time-zones": void;
  "admin-skills-api-docs:put-skills-id-parameters-list-management:PUT:/skills/{skillId}/parameters/list-management": void;
  "admin-skills-api-docs:get-campaigns-id-skills:GET:/campaigns/{campaignId}/skills": {
  businessUnitId?: number;
  totalRecords?: number;
  skills?: ReadonlyArray<{
  mediaType?: number;
  mediaName?: string;
  skillId?: number;
  skillName?: string;
}>;
};
  "admin-skills-api-docs:post-campaigns-id-skills:POST:/campaigns/{campaignId}/skills": {
  assignedSkills?: ReadonlyArray<number>;
  invalidSkills?: ReadonlyArray<number>;
};
  "admin-skills-api-docs:delete-campaigns-id-skills:DELETE:/campaigns/{campaignId}/skills": {
  assignedSkills?: ReadonlyArray<number>;
  invalidSkills?: ReadonlyArray<number>;
};
  "admin-skills-api-docs:get-dispositions:GET:/dispositions": {
  totalRecords?: number;
  businessUnitId?: number;
  dispositions?: ReadonlyArray<{
  dispositionId?: number;
  dispositionName?: string;
  notes?: string;
  lastUpdated?: string;
  classificationId?: number;
  systemOutcome?: string;
  isActive?: boolean;
  isPreviewDisposition?: boolean;
}>;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
};
  "admin-skills-api-docs:post-dispositions:POST:/dispositions": {
  errorCount?: number;
  dispositionResults?: ReadonlyArray<{
  dispositionId: number;
  success?: boolean;
  error?: string;
}>;
};
  "admin-stationprofiles-api-docs:get-station-profiles:GET:/station-profiles": {
  businessUnitId?: number;
  totalRecords?: number;
  stationProfiles?: ReadonlyArray<{
  stationProfileId?: number;
  stationProfileName?: string;
  stationTimeout?: number;
}>;
};
  "admin-stationprofiles-api-docs:post-station-profiles:POST:/station-profiles": {
  stationProfileId?: number;
};
  "admin-stationprofiles-api-docs:get-station-profiles-id:GET:/station-profiles/{stationProfileId}": {
  stationProfile?: {
  stationProfileId?: number;
  stationProfileName?: string;
  stationTimeout?: number;
  stationProfileIsInUse?: boolean;
};
};
  "admin-stationprofiles-api-docs:put-station-profiles-id:PUT:/station-profiles/{stationProfileId}": void;
  "admin-stationprofiles-api-docs:delete-station-profiles-id:DELETE:/station-profiles/{stationProfileId}": void;
  "admin-stationprofiles-api-docs:get-station-profiles-id-audit-history:GET:/station-profiles/{stationProfileId}/audit-history": {
  businessUnitId?: number;
  createdBy?: string;
  modifiedBy?: string;
  createdDate?: string;
  modifiedDate?: string;
  totalRecords?: number;
  auditHistoryEntries?: ReadonlyArray<{
  auditHistoryID?: number;
  columnName?: string;
  newValue?: string;
  oldValue?: string;
  date?: string;
  modifiedBy?: number;
  modifiedByName?: string;
}>;
};
  "admin-stations-api-docs:get-stations:GET:/stations": {
  businessUnitId?: number;
  totalRecords?: number;
  activeStationsCount?: number;
  activeStationsLimit?: number;
  stations?: ReadonlyArray<{
  id?: number;
  name?: string;
  phoneNumber?: string;
  callerId?: string;
  isActive?: boolean;
  stationProfileId?: number;
  stationProfileName?: string;
}>;
};
  "admin-stations-api-docs:create-station:POST:/stations": {
  id?: number;
  activeStationCount?: number;
  stationLimit?: number;
};
  "admin-stations-api-docs:get-station-by-id:GET:/stations/{stationId}": {
  stationId?: number;
  stationName?: string;
  phoneNumber?: string;
  callerId?: string;
  stationProfileId?: number;
  stationProfileName?: string;
  notes?: string;
  isActive?: boolean;
  emailRefusalTimeout?: number;
  documentRefusalTimeout?: number;
  chatRefusalTimeout?: number;
  phoneCallRefusalTimeout?: number;
  voiceMailRefusalTimeout?: number;
  workItemRefusalTimeout?: number;
  machineIdentifier?: string;
};
  "admin-stations-api-docs:update-station:PUT:/stations/{stationId}": {
  activeStationCount?: number;
  stationLimit?: number;
};
  "admin-stations-api-docs:get-stations-audit-history:GET:/stations/{stationId}/audit-history": {
  businessUnitId?: number;
  totalRecords?: number;
  modifiedDate?: string;
  createdDate?: string;
  modifiedBy?: string;
  createdBy?: string;
  auditHistoryEntries?: ReadonlyArray<{
  auditHistoryId?: number;
  columnName?: string;
  newValue?: string;
  oldValue?: string;
  date?: string;
  modifiedBy?: number;
  modifiedByName?: string;
}>;
};
  "admin-stations-api-docs:get-stations-login-history:GET:/stations/{stationId}/login-history": {
  businessUnitId?: number;
  totalRecords?: number;
  loginHistoryEntries?: ReadonlyArray<{
  agentNo?: number;
  agentName?: string;
  PhoneNo?: string;
  callerId?: string;
  loginDate?: string;
}>;
};
  "admin-stations-api-docs:update-station-status:PATCH:/stations/{stationId}/status": void;
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-audit-history:GET:/unavailable-codes/{unavailableCodeId}/audit-history": {
  businessUnitId?: number;
  createdBy?: string;
  modifiedBy?: string;
  createdDate?: string;
  modifiedDate?: string;
  totalRecords?: number;
  auditHistoryEntries?: ReadonlyArray<{
  auditHistoryID?: number;
  columnName?: string;
  newValue?: string;
  oldValue?: string;
  date?: string;
  modifiedBy?: number;
  modifiedByName?: string;
}>;
};
  "admin-unavailablecodes-api-docs:patch-status-by-unavailable-codes-id:PATCH:/unavailable-codes/{unavailableCodeId}/status": void;
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams:GET:/unavailable-codes/{unavailableCodeId}/teams": {
  businessUnitId?: number;
  totalRecords?: number;
  teams?: ReadonlyArray<{
  id?: number;
  name?: string;
  uuid?: string;
}>;
};
  "admin-unavailablecodes-api-docs:post-unavailable-codes-id-teams:POST:/unavailable-codes/{unavailableCodeId}/teams": {
  assignedTeams?: ReadonlyArray<{
  teamId?: number;
}>;
  invalidTeams?: ReadonlyArray<{
  teamId?: number;
}>;
};
  "admin-unavailablecodes-api-docs:put-unavailable-codes-id-teams:PUT:/unavailable-codes/{unavailableCodeId}/teams": {
  error?: string;
  error_Description?: string;
};
  "admin-unavailablecodes-api-docs:delete-unavailable-codes-id-teams:DELETE:/unavailable-codes/{unavailableCodeId}/teams": {
  unassignedTeams?: ReadonlyArray<{
  teamId?: number;
}>;
  invalidTeams?: ReadonlyArray<{
  teamId?: number;
}>;
};
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams-unassigned:GET:/unavailable-codes/{unavailableCodeId}/teams/unassigned": {
  businessUnitId?: number;
  totalRecords?: number;
  teams?: ReadonlyArray<{
  id?: number;
  name?: string;
  uuid?: string;
}>;
};
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id:GET:/unavailable-codes/{unavailableCodeId}": {
  unavailableCode?: {
  id?: number;
  name?: string;
  isActive?: boolean;
  isACW?: boolean;
  notes?: string;
  agentTimeout?: number;
};
};
  "admin-unavailablecodes-api-docs:put-unavailable-codes-id:PUT:/unavailable-codes/{unavailableCodeId}": void;
  "admin-workflowdata-api-docs:list-workflow-data:GET:/workflow-data/list/{activeFlag}": {
  profile?: {
  ProfileName?: string;
  Description?: string;
  ProfileID?: number;
};
  data?: {
  Value?: string;
  Visible?: string;
  Type?: string;
  Ref?: string;
};
};
  "admin-workflowdata-api-docs:get-workflow-data:GET:/workflow-data": {
  businessUnitId?: number;
  totalRecords?: number;
  profiles?: ReadonlyArray<{
  profile?: {
  profileId?: number;
  profileName?: string;
  description?: string;
  isActive?: boolean;
};
  data?: string;
}>;
};
  "admin-workflowdata-api-docs:create-workflow-data:POST:/workflow-data": void;
  "admin-workflowdata-api-docs:update-workflow-data:PUT:/workflow-data": void;
  "admin-workflowdata-api-docs:get-workflow-data-identities:GET:/workflow-data/identities": {
  businessUnitId?: number;
  totalRecords?: number;
  workflowDataIdentities?: ReadonlyArray<{
  wfdId?: number;
  wfdName?: string;
}>;
};
  "admin-workflowdata-api-docs:get-workflow-data-id:GET:/workflow-data/{workFlowDataId}": {
  profile?: {
  profileId?: number;
  profileName?: string;
  description?: string;
  isActive?: boolean;
  businessUnitId?: string;
};
  data?: string;
};
  "admin-workflowdata-api-docs:deactivate-workflow-data:PUT:/workflow-data/{workflowDataId}/deactivate": void;
  "admin-workflowdata-api-docs:activate-workflow-data:PUT:/workflow-data/{workflowDataId}/activate": void;
  "agentphone-api-docs:dialAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/dial": void;
  "agentphone-api-docs:muteAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/mute": void;
  "agentphone-api-docs:unmuteAgentLeg:POST:/agent-sessions/{sessionId}/agent-phone/unmute": void;
  "agentphone-api-docs:disconnectAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/end": {
  error?: string;
  error_description?: string;
};
  "chatrequests-api-docs:addChatContact:POST:/agent-sessions/{sessionId}/interactions/add-chat": void;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-add-text:POST:/agent-sessions/{sessionId}/interactions/add-text": void;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-accept:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept": void;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-reject:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject": void;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-end:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": void;
  "chatrequests-api-docs:activateChatContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate-chat": void;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-send-chat-text:POST:/agent-sessions/{sessionId}/interactions/{contactId}/send-chat-text": void;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-agent": void;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-skill": void;
  "chatrequests-api-docs:AgentTyping:POST:/agent-sessions/{sessionId}/interactions/{contactId}/typing": void;
  "emails-api-docs:AddEmail:POST:/agent-sessions/{sessionId}/interactions/add-email": void;
  "emails-api-docs:EmailOutbound:POST:/agent-sessions/{sessionId}/interactions/email-outbound": void;
  "emails-api-docs:post-agent-sessions-sessionId-interactions-contactId-email-forward:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-forward": void;
  "emails-api-docs:EmailReply:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-reply": void;
  "emails-api-docs:EmailSend:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-send": void;
  "emails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": void;
  "emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-agent": void;
  "emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-skill": void;
  "emails-api-docs:ParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-park": void;
  "emails-api-docs:UnParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-unpark": void;
  "emails-api-docs:PreveiwEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-preview": void;
  "emails-api-docs:RestoreEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-restore": void;
  "emails-api-docs:post-agent-sessions-id-interactions-id-email-save-draft:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-save-draft": void;
  "personalcon-api-docs:dialerLogon:POST:/agent-sessions/{sessionId}/dialer-login": void;
  "personalcon-api-docs:dialerLogout:POST:/agent-sessions/{sessionId}/dialer-logout": void;
  "personalcon-api-docs:PersonalConSnoozes:POST:/agent-sessions/{sessionId}/interactions/{contactId}/snooze": void;
  "phonecalls-api-docs:agentTransfer:POST:/agent-sessions/{sessionId}/dial-agent": {
  error?: string;
  error_description?: string;
};
  "phonecalls-api-docs:dialPhone:POST:/agent-sessions/{sessionId}/dial-phone": {
  error?: string;
  error_description?: string;
};
  "phonecalls-api-docs:dialSkill:POST:/agent-sessions/{sessionId}/dial-skill": {
  error?: string;
  error_description?: string;
};
  "phonecalls-api-docs:SendDtmfTone:POST:/agent-sessions/{sessionId}/send-dtmf": void;
  "phonecalls-api-docs:dialAgentConsult:POST:/agent-sessions/{sessionId}/consult-agent": {
  error?: string;
  error_description?: string;
};
  "phonecalls-api-docs:transferCall:POST:/agent-sessions/{sessionId}/interactions/transfer-calls": void;
  "phonecalls-api-docs:conferenceCall:POST:/agent-sessions/{sessionId}/interactions/conference-calls": void;
  "phonecalls-api-docs:acceptConsultRequest:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept-consult": void;
  "phonecalls-api-docs:holdCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold": void;
  "phonecalls-api-docs:resumeCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume": void;
  "phonecalls-api-docs:endCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": void;
  "phonecalls-api-docs:AmdOverride:POST:/agent-sessions/{sessionId}/interactions/{contactId}/amd-override": void;
  "phonecalls-api-docs:recordACall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/record": void;
  "phonecalls-api-docs:maskACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/mask": void;
  "phonecalls-api-docs:stopMaskingACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/unmask": void;
  "phonecalls-api-docs:IndependentDialed:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial": void;
  "phonecalls-api-docs:IndependentDialOutcome:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial-outcome": void;
  "scheduledcallbacks-api-docs:DialCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/dial": void;
  "scheduledcallbacks-api-docs:RescheduleCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/reschedule": void;
  "scheduledcallbacks-api-docs:agentinteractionscallbackcancel:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/cancel": void;
  "sessions-api-docs:startSession:POST:/agent-sessions": NiceCxoneFullApiSchemaGetSessionsResponse;
  "sessions-api-docs:joinSession:POST:/agent-sessions/join": NiceCxoneFullApiSchemaGetSessionsResponse;
  "sessions-api-docs:endSession:DELETE:/agent-sessions/{sessionId}": void;
  "sessions-api-docs:getNextEvent:GET:/agent-sessions/{sessionId}/get-next-event": NiceCxoneFullApiSchemaGetNextEventResponse;
  "sessions-api-docs:ContinueReskill:POST:/agent-sessions/{sessionId}/continue-reskill": void;
  "sessions-api-docs:DispositionContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/disposition": void;
  "sessions-api-docs:setAgentStatus:POST:/agent-sessions/{sessionId}/state": void;
  "sessions-api-docs:SendFeedback:POST:/agent-sessions/{sessionId}/submit-feedback": void;
  "sessions-api-docs:PostCustomData:POST:/agent-sessions/{sessionId}/interactions/{contactId}/custom-data": void;
  "sessions-api-docs:agentAddContact:POST:/agent-sessions/{sessionId}/add-contact": void;
  "sessions-api-docs:post-agent-sessions-id-interactions-sms-outbound:POST:/agent-sessions/{sessionId}/interactions/sms-outbound": void;
  "sessions-api-docs:post-agent-sessions-id-interactions-id-activate:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate": void;
  "sessions-api-docs:holdASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold": void;
  "sessions-api-docs:resumeASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume": void;
  "sessions-api-docs:endASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": void;
  "sessions-api-docs:acceptSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept": void;
  "sessions-api-docs:rejectSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject": void;
  "supervisor-api-docs:contactMonitor:POST:/agent-sessions/{sessionId}/monitor": {
  error?: string;
  error_description?: string;
};
  "supervisor-api-docs:contactCoach:POST:/agent-sessions/{sessionId}/coach": {
  error?: string;
  error_description?: string;
};
  "supervisor-api-docs:contactBarge:POST:/agent-sessions/{sessionId}/barge": {
  error?: string;
  error_description?: string;
};
  "supervisor-api-docs:post-agent-sessions-sessionId-take-over:POST:/agent-sessions/{sessionId}/take-over": {
  error?: string;
  error_description?: string;
};
  "voicemails-api-docs:PlayVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/play-voicemail": void;
  "voicemails-api-docs:PauseVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/pause-voicemail": void;
  "voicemails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": void;
  "voicemails-api-docs:VoicemailTransferAgent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-agent": {
  error?: string;
  error_description?: string;
};
  "voicemails-api-docs:VoicemailTransferSkill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-skill": {
  error?: string;
  error_description?: string;
};
  "workitems-api-docs:acceptWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept": void;
  "workitems-api-docs:rejectWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject": void;
  "workitems-api-docs:holdAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold": void;
  "workitems-api-docs:resumeAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume": void;
  "workitems-api-docs:endAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": void;
  "authentication-authenticate-api-docs:passwordReset:PUT:/agents/{agentId}/reset-password": {
  resetResult?: {
  passwordComplexityResult?: string;
};
};
  "authentication-authenticate-api-docs:PasswordChange:PUT:/agents/change-password": {
  changeResult?: {
  passwordComplexityResult?: string;
};
};
  "authentication-globalauthentication-api-docs:getOIDCConfig:GET:/.well-known/openid-configuration": NiceCxoneFullApiSchemaOidcDiscovery;
  "authentication-globalauthentication-api-docs:getCXoneConfig:GET:/.well-known/cxone-configuration": {
  private: boolean;
  ui_endpoint: string;
  auth_endpoint: string;
  api_endpoint: string;
  area?: string;
  cluster?: string;
  domain: string;
  acdDomain?: string;
  uhDomain: string;
  tenantId?: string;
  globaldomain?: string;
};
  "authentication-globalauthentication-api-docs:get_/auth/jwks:GET:/auth/jwks": {
  keys: ReadonlyArray<{
  kty: string;
  use?: "sig";
  alg?: string;
  kid?: string;
  n?: string;
  e?: string;
}>;
};
  "authentication-globalauthentication-api-docs:getAuthAuthorize:GET:/auth/authorize": string;
  "authentication-globalauthentication-api-docs:authAuthorize:POST:/auth/authorize": string;
  "authentication-globalauthentication-api-docs:getToken:POST:/auth/token": {
  access_token: string;
  token_type: string;
  issued_token_type?: string;
  refresh_token: string;
  expires_in: number;
  id_token: string;
};
  "authentication-globalauthentication-api-docs:get_/auth/authorize/logout:GET:/auth/authorize/logout": string;
  "authentication-globalauthentication-api-docs:post_/auth/authorize/logout:POST:/auth/authorize/logout": string;
  "authentication-globalauthentication-api-docs:get_/auth/userinfo:GET:/auth/userinfo": {
  sub?: string;
  name?: string;
  given_name?: string;
  family_name?: string;
  email?: string;
};
  "authentication-globalauthentication-api-docs:post_/auth/userinfo:POST:/auth/userinfo": {
  sub?: string;
  name?: string;
  given_name?: string;
  family_name?: string;
  email?: string;
};
  "authentication-globalauthentication-api-docs:getAccountAccessAssociations:GET:/account-access/v1/associations": ReadonlyArray<NiceCxoneFullApiSchemaGetAssociationsResponse>;
  "authentication-integrations-api-docs:createApplication:POST:/applications": NiceCxoneFullApiSchemaGetCreatedApplicationV1;
  "authentication-integrations-api-docs:listApplication:GET:/applications": NiceCxoneFullApiSchemaListApplicationV1;
  "authentication-integrations-api-docs:viewApplication:GET:/applications/{applicationId}": NiceCxoneFullApiSchemaGetApplicationV1;
  "authentication-integrations-api-docs:patchApplication:PATCH:/applications/{applicationId}": NiceCxoneFullApiSchemaGetApplicationV1;
  "authentication-integrations-api-docs:deleteApplication:DELETE:/applications/{applicationId}": NiceCxoneFullApiSchemaGetApplicationV1;
  "authentication-integrations-api-docs:enableApplication:POST:/applications/{applicationId}-enable": NiceCxoneFullApiSchemaERROR;
  "authentication-integrations-api-docs:disableApplication:POST:/applications/{applicationId}-disable": NiceCxoneFullApiSchemaERROR;
  "authentication-universalapplication-api-docs:redirectToGA:GET:/GALandingPage": NiceCxoneFullApiSchemaJsonValue;
  "authentication-universalapplication-api-docs:getCallback:GET:/callback": void;
  "businessdata-businessdata-api-docs:updateBusinessDataFieldForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}": {
  code?: string;
  details?: string;
  hostName?: string;
  entityType?: string;
  errors?: {
  businessDataName?: {
  errorCode?: string;
  message?: string;
};
};
};
  "businessdata-businessdata-api-docs:updateBusinessDataFieldAtSegmentLevelForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}/segment/{segmentId}": {
  code?: string;
  details?: string;
  hostName?: string;
  entityType?: string;
  errors?: {
  businessDataName?: {
  errorCode?: string;
  message?: string;
};
};
};
  "cxone-accesskeys-api-docs:CreateAnAccessKeyForAUser:POST:/access-key-management/v1/access-keys": NiceCxoneFullApiSchemaPostAccessKeysResponse;
  "cxone-accesskeys-api-docs:Updates an access key for a user:PATCH:/access-key-management/v1/access-keys": void;
  "cxone-accesskeys-api-docs:ReturnsAListOfAccessKeys:GET:/access-key-management/v1/access-keys": NiceCxoneFullApiSchemaGetAccessKeysResponse;
  "cxone-accesskeys-api-docs:ReturnsAnAccessKeyConfig:GET:/access-key-management/v1/access-keys/{accessKeyId}": NiceCxoneFullApiSchemaGetAccessKeyIDResponse;
  "cxone-accesskeys-api-docs:DeletesAnAccessKey:DELETE:/access-key-management/v1/access-keys/{accessKeyId}": void;
  "cxone-authorizationmanagement-api-docs:searchRole:POST:/authorization/v1/roles/search": NiceCxoneFullApiSchemaRoleSearchResponseV1;
  "cxone-billing-api-docs:submitProductUsages:POST:/billing/v1.0/product-usage": NiceCxoneFullApiSchemaProductUsage;
  "cxone-billing-api-docs:getProductUsageById:GET:/billing/v1.0/product-usage/{productTypeId}": NiceCxoneFullApiSchemaProductUsageFetchResponse;
  "cxone-correlationmanagement-api-docs:createCorrelation:POST:/correlation-manager/v1/correlations": NiceCxoneFullApiSchemaCorrelationResponse;
  "cxone-correlationmanagement-api-docs:updateCorrelation:PUT:/correlation-manager/v1/correlations/{correlationId}/{entityId}": NiceCxoneFullApiSchemaUpdateCorrelationResponse;
  "cxone-correlationmanagement-api-docs:searchCorrelations:POST:/correlation-manager/v1/correlations/search": NiceCxoneFullApiSchemaSearchCorrelationResponse;
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/assigned:GET:/agent-profiles/v1/assigned": {
  agentProfileId?: number;
  agentProfileConfigurations?: ReadonlyArray<{
  subCategoryId?: number;
  subCategoryName?: string;
  elementId?: string;
  value?: ReadonlyArray<string>;
}>;
};
  "cxone-desktopprofiles-api-docs:AssignableConfigurations:GET:/agent-profiles/v1/configurations": ReadonlyArray<{
  subCateogryId?: number;
  categoryId?: number;
  categoryName?: string;
  name?: string;
  elements?: ReadonlyArray<{
  type?: number;
  id?: string;
  label?: string;
  checked?: string;
  options?: ReadonlyArray<string>;
  dependency?: ReadonlyArray<{
  elementId?: string;
  trigger?: string;
  value?: boolean;
  createElements?: ReadonlyArray<{
  type?: number;
  id?: string;
  label?: string;
  defaultPlaceholder?: string;
}>;
}>;
}>;
}>;
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/search:POST:/agent-profiles/v1/profiles/search": {
  totalRecords?: number;
  agentProfiles?: ReadonlyArray<{
  agentProfileId?: number;
  busId?: number;
  name?: string;
  description?: string;
  status?: string;
  totalAssignedTeams?: number;
  archive?: string;
}>;
  skip?: number;
  top?: number;
};
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}:GET:/agent-profiles/v1/profiles/{id}": {
  agentProfileId?: number;
  agentProfileName?: string;
  agentProfileDescription?: string;
  status?: string;
  agentProfileConfigurations?: ReadonlyArray<{
  subCategoryId?: number;
  subCategoryName?: string;
  value?: ReadonlyArray<string>;
  elementId?: string;
}>;
};
  "cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/{id}:PUT:/agent-profiles/v1/profiles/{id}": {
  success?: boolean;
  message?: string;
};
  "cxone-desktopprofiles-api-docs:AgentProfile:GET:/agent-profiles/v1/profiles": {
  totalRecords?: number;
  agentProfiles?: ReadonlyArray<{
  agentProfileId?: number;
  busId?: number;
  name?: string;
  description?: string;
  status?: string;
  totalAssignedTeams?: number;
}>;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
};
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles:POST:/agent-profiles/v1/profiles": {
  success?: boolean;
  message?: string;
  agentProfileId?: number;
  agentProfileName?: string;
};
  "cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/status:PUT:/agent-profiles/v1/profiles/status": {
  success?: boolean;
  message?: string;
};
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}/teams:GET:/agent-profiles/v1/profiles/{id}/teams": {
  agentProfileId?: number;
  teams?: ReadonlyArray<{
  teamUuid?: string;
  teamId?: number;
  teamName?: string;
  status?: string;
  agentCount?: number;
}>;
};
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/{id}/teams:POST:/agent-profiles/v1/profiles/{id}/teams": {
  success?: boolean;
  message?: string;
};
  "cxone-desktopprofiles-api-docs:delete_/agent-profiles/v1/profiles/{id}/teams:DELETE:/agent-profiles/v1/profiles/{id}/teams": {
  success?: boolean;
  message?: string;
};
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/teams/search:POST:/agent-profiles/v1/profiles/teams/search": {
  totalRecords?: number;
  teams?: ReadonlyArray<{
  teamUuid?: string;
  teamId?: number;
  teamName?: string;
  status?: string;
  agentCount?: number;
  agentProfileName?: number;
}>;
  skip?: number;
  top?: number;
};
  "cxone-division-api-docs:post_/division-management/v1/division:POST:/division-management/v1/division": NiceCxoneFullApiSchemaCreateDivisionResponse;
  "cxone-division-api-docs:put_/division-management/v1/division:PUT:/division-management/v1/division": NiceCxoneFullApiSchemaUpdateDivisionResponse;
  "cxone-division-api-docs:get_/division-management/v1/division/{divisionId}:GET:/division-management/v1/division/{divisionId}": NiceCxoneFullApiSchemaDivisionResponse;
  "cxone-division-api-docs:post_/division-management/v1/division/search:POST:/division-management/v1/division/search": NiceCxoneFullApiSchemaDivisionSearchResponse;
  "cxone-division-api-docs:post_/division-management/v1/division/identities:POST:/division-management/v1/division/identities": NiceCxoneFullApiSchemaDivisionIdentitiesResponse;
  "cxone-division-api-docs:get_/division-management/v1/division/{divisionId}/getAllBillingCodes:GET:/division-management/v1/division/{divisionId}/getAllBillingCodes": NiceCxoneFullApiSchemaBillingCodeResponse;
  "cxone-division-api-docs:get_/division-management/v1/division/billingCode/{billingCode}/validate:GET:/division-management/v1/division/billingCode/{billingCode}/validate": NiceCxoneFullApiSchemaUpdateDivisionResponse;
  "cxone-documents-api-docs:createKnowledgeHubConfiguration:POST:/eai-knowledge-hub-services/ingestion-service/v1/documents": {
  documentDetails?: ReadonlyArray<{
  documentIdentifier?: string;
  status?: "SUBMITTED_SUCCESSFULLY" | "VALIDATION_ERROR" | "UNKNOWN_ERROR";
  statusReason?: string;
  updatedAt?: string;
}>;
};
  "cxone-documents-api-docs:getDocumentSnapshot:POST:/eai-knowledge-hub-services/ingestion-service/v1/{khId}/documents/snapshot": NiceCxoneFullApiSchemaDocumentSnapshotResponse;
  "cxone-exportapi-api-docs:exportCopilotKBTable:POST:/observabilitydashboard/v2/tables/Copilot/KBTable/export-data": NiceCxoneFullApiSchemaErrorResponse;
  "cxone-exportapi-api-docs:exportCopilotAQTable:POST:/observabilitydashboard/v2/tables/Copilot/AQTable/export-data": NiceCxoneFullApiSchemaErrorResponse;
  "cxone-exportapi-api-docs:exportCopilotASTable:POST:/observabilitydashboard/v2/tables/Copilot/ASTable/export-data": NiceCxoneFullApiSchemaErrorResponse;
  "cxone-exportapi-api-docs:exportAutopilotKnowledgeGRTable:POST:/observabilitydashboard/v2/tables/AutopilotKnowledge/GRTable/export-data": NiceCxoneFullApiSchemaErrorResponse;
  "cxone-exportapi-api-docs:exportAutopilotGRTable:POST:/observabilitydashboard/v2/tables/autopilot/GRTable/export-data": NiceCxoneFullApiSchemaErrorResponse;
  "cxone-scim-api-docs:searchUser:GET:/scim/v2/Users": NiceCxoneFullApiSchemaScimUserSearchResponse;
  "cxone-scim-api-docs:registerScimUser:POST:/scim/v2/Users": NiceCxoneFullApiSchemaScimResponse;
  "cxone-scim-api-docs:getScimUserById:GET:/scim/v2/Users/{userId}": NiceCxoneFullApiSchemaScimResponse;
  "cxone-scim-api-docs:updateScimUser:PUT:/scim/v2/Users/{userId}": NiceCxoneFullApiSchemaScimResponse;
  "cxone-scim-api-docs:updateScimUserPatch:PATCH:/scim/v2/Users/{userId}": NiceCxoneFullApiSchemaScimResponse;
  "cxone-scim-api-docs:getSchemas:GET:/scim/v2/Schemas": NiceCxoneFullApiSchemaSchemaResponse;
  "cxone-scim-api-docs:get-basic-auth-Users:GET:/basic-auth/scim/v2/Users": NiceCxoneFullApiSchemaScimUserSearchResponse;
  "cxone-scim-api-docs:post-basic-auth-users:POST:/basic-auth/scim/v2/Users": NiceCxoneFullApiSchemaScimResponse;
  "cxone-scim-api-docs:get-basicauth-ScimUserbyID:GET:/basic-auth/scim/v2/Users/{userId}": NiceCxoneFullApiSchemaScimResponse;
  "cxone-scim-api-docs:put-basicauth-ScimUserbyID:PUT:/basic-auth/scim/v2/Users/{userId}": NiceCxoneFullApiSchemaScimResponse;
  "cxone-scim-api-docs:patch-basic-auth-ScimUserbyID:PATCH:/basic-auth/scim/v2/Users/{userId}": NiceCxoneFullApiSchemaScimResponse;
  "cxone-scim-api-docs:get-basic-auth-Schemas:GET:/basic-auth/scim/v2/Schemas": NiceCxoneFullApiSchemaSchemaResponse;
  "cxone-usermanagement-api-docs:createTeam:POST:/user-management/v3/teams": NiceCxoneFullApiSchemaTeamResponse;
  "cxone-usermanagement-api-docs:updateTeam:PUT:/user-management/v3/teams": NiceCxoneFullApiSchemaTeamResponse;
  "cxone-usermanagement-api-docs:getTeamById:GET:/user-management/v3/teams/{teamId}": NiceCxoneFullApiSchemaGetTeamResponse;
  "cxone-usermanagement-api-docs:getTeamsByCriteria:POST:/user-management/v4/teams/search": NiceCxoneFullApiSchemaTeamSearchResponseV4;
  "cxone-usermanagement-api-docs:getUserList:GET:/user-management/v1/users": NiceCxoneFullApiSchemaUsersResponse;
  "cxone-usermanagement-api-docs:registerUserV1:POST:/user-management/v1/users": NiceCxoneFullApiSchemaRegisterUserResponse;
  "cxone-usermanagement-api-docs:updateUserV1:PUT:/user-management/v1/users": NiceCxoneFullApiSchemaUpdateUserResponse;
  "cxone-usermanagement-api-docs:deactivateUser:POST:/user-management/v1/users/deactivate": NiceCxoneFullApiSchemaUserDeactivateResponse;
  "cxone-usermanagement-api-docs:getUserByIdV3:GET:/user-management/v3/users/{userId}": NiceCxoneFullApiSchemaUserResponseV3;
  "cxone-usermanagement-api-docs:reviveUser:POST:/user-management/v1/users/{userId}/revive": NiceCxoneFullApiSchemaReviveUserResponse;
  "cxone-usermanagement-api-docs:getUsersByCriteria:POST:/user-management/v2/users/search": NiceCxoneFullApiSchemaUserSearchResponse;
  "cxone-usermanagement-api-docs:getUserIdentityList:GET:/user-management/v2/users/identities": NiceCxoneFullApiSchemaUserIdentityListResponseV2;
  "cxone-usermanagement-api-docs:inviteUserByEmail:POST:/user-management/v2/users/inviteByEmail": NiceCxoneFullApiSchemaBooleanResponse;
  "cxone-usermanagement-api-docs:inviteUserById:POST:/user-management/v2/users/inviteById": NiceCxoneFullApiSchemaBooleanResponse;
  "cxone-usermanagement-api-docs:getUserIdentity:GET:/user-management/v1/users/{userId}/identities": NiceCxoneFullApiSchemaUserIdentityResponseV1;
  "cxone-usermanagement-api-docs:assignAuthenticatorV1:PUT:/user-management/v1/users/{userId}/login-authenticator": NiceCxoneFullApiSchemaBulkEntityUserAssignResponse;
  "dataextraction-dataextraction-api-docs:getAllJobs:GET:/data-extraction/v1/jobs": NiceCxoneFullApiSchemaJobsResponse;
  "dataextraction-dataextraction-api-docs:extractData:POST:/data-extraction/v1/jobs": string;
  "dataextraction-dataextraction-api-docs:getJobStatus:GET:/data-extraction/v1/jobs/{jobId}": NiceCxoneFullApiSchemaJobResponse;
  "digital-attachment-api-docs:post_attachments_temporary:POST:/attachments/temporary": {
  id?: string;
  url?: string;
  expireAt?: string;
};
  "digital-channel-api-docs:get-external-templates:GET:/channels/{channelId}/external-platform-templates": {
  totalRecords?: number;
  data?: ReadonlyArray<NiceCxoneFullApiSchemaExternalPlatformTemplate>;
  _links?: NiceCxoneFullApiSchemaLinks;
};
  "digital-channel-api-docs:create-update-Channel:POST:/channels": NiceCxoneFullApiSchemaApiErrorCollection;
  "digital-channel-api-docs:get-Channels:GET:/channels": ReadonlyArray<NiceCxoneFullApiSchemaChannelV2>;
  "digital-channel-api-docs:deleteChannel:DELETE:/channels/{channelId}": NiceCxoneFullApiSchemaApiErrorCollection;
  "digital-contact-api-docs:searchContacts:GET:/contacts": {
  hits?: number;
  data?: ReadonlyArray<NiceCxoneFullApiSchemaContact>;
};
  "digital-contact-api-docs:getContact:GET:/contacts/{contactNumber}": NiceCxoneFullApiSchemaContact;
  "digital-contact-api-docs:updateContact:PUT:/contacts/{contactNumber}": NiceCxoneFullApiSchemaApiErrorCollection2;
  "digital-contact-api-docs:create-contacts-contactnumber-abandon:POST:/contacts/{contactNumber}/abandon": NiceCxoneFullApiSchemaApiErrorCollection2;
  "digital-contact-api-docs:getContactDetailPagination:GET:/contacts/{contactNumber}/detail/pagination": NiceCxoneFullApiSchemaPagination;
  "digital-contact-api-docs:getContactMessages:GET:/contacts/{contactNumber}/messages": {
  hits?: number;
  data?: ReadonlyArray<NiceCxoneFullApiSchemaMessageDetail>;
};
  "digital-contact-api-docs:changeContactInboxAssignee:PUT:/contacts/{contactNumber}/inbox-assignment": NiceCxoneFullApiSchemaApiErrorCollection2;
  "digital-contact-api-docs:unassignContactInboxAssignee:DELETE:/contacts/{contactNumber}/inbox-assignment": NiceCxoneFullApiSchemaApiErrorCollection2;
  "digital-contact-api-docs:setContactCustomFieldValues:PUT:/contacts/{contactNumber}/custom-fields": NiceCxoneFullApiSchemaApiErrorCollection2;
  "digital-contact-api-docs:removeContactCustomFieldValue:DELETE:/contacts/{contactNumber}/custom-fields/{customFieldIdentifier}": NiceCxoneFullApiSchemaApiErrorCollection2;
  "digital-contact-api-docs:changeContactRoutingQueue:PUT:/contacts/{contactNumber}/routing-queue": NiceCxoneFullApiSchemaApiErrorCollection2;
  "digital-contact-api-docs:updateContactRoutingProperties:PUT:/contacts/{contactNumber}/routing-properties": NiceCxoneFullApiSchemaApiErrorCollection2;
  "digital-contact-api-docs:sendContactTranscript:POST:/contacts/{contactNumber}/transcript": NiceCxoneFullApiSchemaApiErrorCollection2;
  "digital-contact-api-docs:create-contacts-agent-contacts-close:PUT:/contacts/{contactNumber}/agent-contacts/{agentContactId}/close": NiceCxoneFullApiSchemaApiErrorCollection2;
  "digital-contact-api-docs:changeContactStatus:PUT:/contacts/{contactNumber}/status": NiceCxoneFullApiSchemaApiErrorCollection2;
  "digital-customer-api-docs:searchCustomers:GET:/customers": {
  hits?: number;
  data?: ReadonlyArray<NiceCxoneFullApiSchemaCustomer>;
};
  "digital-customer-api-docs:getCustomer:GET:/customers/{customerId}": NiceCxoneFullApiSchemaCustomer;
  "digital-customer-api-docs:getCustomerNotes:GET:/customers/{customerId}/notes": {
  totalRecords?: number;
  data?: ReadonlyArray<NiceCxoneFullApiSchemaCustomerNote>;
  _links?: NiceCxoneFullApiSchemaLinks2;
};
  "digital-customer-api-docs:createCustomerNote:POST:/customers/{customerId}/notes": NiceCxoneFullApiSchemaCustomerNote;
  "digital-customer-api-docs:updateCustomerNote:PUT:/customers/{customerId}/notes/{noteId}": NiceCxoneFullApiSchemaCustomerNote;
  "digital-customer-api-docs:deleteCustomerNote:DELETE:/customers/{customerId}/notes/{noteId}": NiceCxoneFullApiSchemaApiErrorCollection3;
  "digital-customer-api-docs:mergeCustomer:PUT:/customers/{customerId}/merge": NiceCxoneFullApiSchemaApiErrorCollection3;
  "digital-customer-api-docs:removeCustomerCustomFieldValue:DELETE:/customers/{customerId}/custom-fields/{customFieldIdentifier}": NiceCxoneFullApiSchemaApiErrorCollection3;
  "digital-customer-api-docs:updateCustomerCustomFields:PUT:/customers/{customerId}/custom-fields": NiceCxoneFullApiSchemaApiErrorCollection3;
  "digital-customfields-api-docs:getContactCustomFieldDefinitions:GET:/consumer-contact-custom-fields": ReadonlyArray<NiceCxoneFullApiSchemaContactCustomFieldDefinition>;
  "digital-customfields-api-docs:getCustomerCustomFieldDefinitions:GET:/customers/custom-field-definitions": ReadonlyArray<NiceCxoneFullApiSchemaCustomerCustomFieldDefinition>;
  "digital-customfields-api-docs:createOrUpdateCustomerCustomFieldDefinition:PUT:/customers/custom-field-definitions": NiceCxoneFullApiSchemaApiErrorCollection4;
  "digital-message-api-docs:channels-channelId-createmessage:POST:/channels/{channelId}/messages": {
  consumerContact?: NiceCxoneFullApiSchemaContact2;
  message?: NiceCxoneFullApiSchemaMessageDetail2;
};
  "digital-message-api-docs:updateMessageStatus:PUT:/channels/{channelId}/messages/{messageIdOnExternalPlatform}/status": NiceCxoneFullApiSchemaApiErrorCollection5;
  "digital-message-api-docs:sendOutboundMessage:POST:/channels/{channelId}/outbound": {
  consumerContact?: NiceCxoneFullApiSchemaContact2;
  message?: NiceCxoneFullApiSchemaMessageDetail2;
};
  "digital-message-api-docs:sendInboundMessage:POST:/channels/{channelId}/inbound": {
  contact?: NiceCxoneFullApiSchemaContact2;
};
  "digital-message-api-docs:searchMessages:GET:/messages": {
  hits?: number;
  data?: ReadonlyArray<NiceCxoneFullApiSchemaMessageDetail2>;
};
  "digital-message-api-docs:getMessage:GET:/messages/{messageId}": NiceCxoneFullApiSchemaMessageDetail2;
  "digital-message-api-docs:removeMessageAuthorName:POST:/messages/{messageId}/author-name-removal": NiceCxoneFullApiSchemaApiErrorCollection5;
  "digital-message-api-docs:addMessageTag:PUT:/messages/{messageId}/tags/{tagId}": NiceCxoneFullApiSchemaMessageDetail2;
  "digital-message-api-docs:removeMessageTag:DELETE:/messages/{messageId}/tags/{tagId}": NiceCxoneFullApiSchemaMessageDetail2;
  "digital-message-api-docs:removeMessageContent:POST:/messages/{messageId}/content-removal": NiceCxoneFullApiSchemaApiErrorCollection5;
  "digital-message-api-docs:delete-DFO-message-bymessageId:POST:/messages/{messageId}/delete": NiceCxoneFullApiSchemaApiErrorCollection5;
  "digital-message-api-docs:createMessageNote:POST:/messages/{messageId}/notes": NiceCxoneFullApiSchemaMessageNote;
  "digital-message-api-docs:updateMessageNote:PUT:/messages/{messageId}/notes/{noteId}": NiceCxoneFullApiSchemaMessageNote;
  "digital-message-api-docs:deleteMessageNote:DELETE:/messages/{messageId}/notes/{noteId}": NiceCxoneFullApiSchemaApiErrorCollection5;
  "digital-message-api-docs:mark-DFO-message-read:PUT:/messages/{messageId}/read": NiceCxoneFullApiSchemaMessageDetail2;
  "digital-message-api-docs:setMessageSentiment:PUT:/messages/{messageId}/sentiment": NiceCxoneFullApiSchemaMessageDetail2;
  "digital-message-api-docs:add-DFO-message-react:POST:/messages/{messageId}/react/{reactionType}": NiceCxoneFullApiSchemaApiErrorCollection5;
  "digital-message-api-docs:delete-DFO-message-react:DELETE:/messages/{messageId}/react/{reactionType}": NiceCxoneFullApiSchemaApiErrorCollection5;
  "digital-routingqueue-api-docs:searchRoutingQueues:GET:/routing-queues": {
  hits?: number;
  data?: ReadonlyArray<NiceCxoneFullApiSchemaRoutingQueue>;
};
  "digital-tag-api-docs:getTags:GET:/tags": {
  hits?: number;
  data?: ReadonlyArray<NiceCxoneFullApiSchemaTag>;
};
  "digital-tag-api-docs:createTag:PUT:/tags": NiceCxoneFullApiSchemaTag;
  "digital-thread-api-docs:searchThreads:GET:/threads": {
  totalRecords?: number;
  data?: ReadonlyArray<NiceCxoneFullApiSchemaThread>;
  _links?: NiceCxoneFullApiSchemaLinks3;
  _context?: {
  messages?: ReadonlyArray<NiceCxoneFullApiSchemaMessageDetail3>;
  channels?: ReadonlyArray<NiceCxoneFullApiSchemaChannel>;
};
};
  "digital-thread-api-docs:sendSenderAction:POST:/channels/{channelId}/threads/{threadIdOnExternalPlatform}/sender-actions": NiceCxoneFullApiSchemaApiErrorCollection6;
  "digital-thread-api-docs:updateThread:PUT:/channels/{channelId}/threads/{threadIdOnExternalPlatform}": NiceCxoneFullApiSchemaApiErrorCollection6;
  "digital-verificationtoken-api-docs:getOneTimeToken:GET:/one-time-token/authentication": NiceCxoneFullApiSchemaApiErrorCollection7;
  "digital-verificationtoken-api-docs:verifyOneTimeToken:POST:/one-time-token/verification": {
  brand: NiceCxoneFullApiSchemaBrand;
  user: NiceCxoneFullApiSchemaUser;
  accessToken: string;
};
  "interactionanalytics-interactions-api-docs:get-segments-analyzed:GET:/interaction-analytics-gateway/v2/segments/analyzed": NiceCxoneFullApiSchemaInteractionWrapper;
  "interactionanalytics-interactions-api-docs:get-segments-segmentId-analyzed-transcript:GET:/interaction-analytics-gateway/v2/segments/{segmentId}/analyzed-transcript": NiceCxoneFullApiSchemaContact3;
  "mediaplayback-mediaplayback-api-docs:getACDContactRecordingData:GET:/media-playback/v1/contacts": NiceCxoneFullApiSchemaApiResponse;
  "mediaplayback-mediaplayback-api-docs:getDataToPlayByContactStatementId:GET:/media-playback/v1/acd-contacts/{acdContactId}/statements/{statementId}": NiceCxoneFullApiSchemaApiResponse;
  "mediaplayback-mediaplayback-api-docs:getSegmentRecordingData:GET:/media-playback/v1/segments/{segmentId}": NiceCxoneFullApiSchemaApiResponseSegment;
  "patron-callback-api-docs:requestACallback:POST:/queuecallback": {
  error?: string;
  error_description?: string;
};
  "patron-callback-api-docs:scheduleACallback:POST:/promise": {
  error?: string;
  error_description?: string;
};
  "patron-chatrequests-api-docs:post-contacts-chats:POST:/contacts/chats": {
  chatSessionId?: string;
  contactId?: number;
};
  "patron-chatrequests-api-docs:getChatText:GET:/contacts/chats/{chatSession}": {
  chatSession?: string;
  messages?: ReadonlyArray<{
  Label?: string;
  PartyTypeId?: number;
  PartyTypeValue?: string;
  Text?: string;
  Timestamp?: string;
}>;
};
  "patron-chatrequests-api-docs:endChat:DELETE:/contacts/chats/{chatSession}": {
  errorDescription?: string;
};
  "patron-chatrequests-api-docs:post-contacts-chats-id-send-text:POST:/contacts/chats/{chatSession}/send-text": void;
  "patron-chatrequests-api-docs:PatronTyping:POST:/contacts/chats/{chatSession}/typing": void;
  "patron-chatrequests-api-docs:PatronTypingPreview:POST:/contacts/chats/{chatSession}/typing-preview": void;
  "patron-chatrequests-api-docs:post-contacts-chats-send-email:POST:/contacts/chats/send-email": void;
  "patron-chatrequests-api-docs:getPointChatProfile:GET:/points-of-contact/{pointsOfContactId}/chat-profile": {
  chatProfile?: {
  chatProfileId?: number;
  chatProfileName?: string;
  chatInterfaceTypeId?: number;
  "topBarColor "?: string;
  "topBarTextColor "?: string;
  "agentChatBubbleColor "?: string;
  "agentChatBubbleTextColor "?: string;
  chatAppearance?: {
  primaryColor?: string;
  primaryTextColor?: string;
  agentColor?: string;
  agentInitialColor?: string;
  font?: string;
  chatButtonPosition?: string;
};
  preChatFormEnabled?: boolean;
  preChatWelcomeMessage?: string;
  preChatFields?: ReadonlyArray<{
  fieldType?: string;
  fieldLabel?: string;
  fieldIsRequired?: boolean;
  fieldOptions?: ReadonlyArray<{
  label?: string;
}>;
}>;
  waitingEnabled?: boolean;
  waitingMessage?: string;
  waitingBackgroundColor?: string;
  waitingTextColor?: string;
  waitingLogo?: string;
  heroImage?: string;
  legacyAppearance?: ReadonlyArray<{
  logoImage?: string;
  chatHeaderBackground?: string;
  chatStatusBackground?: string;
  chatBackground?: string;
  chatFooterBackground?: string;
  font?: string;
  chatBorderStyle?: string;
  chatBorderColor?: string;
  primaryButtonBackground?: string;
  isBackgroundGradient?: string;
  fontSizeSmall?: string;
  fontSizeRegular?: string;
  fontSizeLarge?: string;
  systemMessageColor?: string;
  agentMessageBackground?: string;
  agentMessageColor?: string;
  customerMessageBackground?: string;
  customerMessageColor?: string;
  chatStatusColorConnected?: string;
  chatStatusColorWaiting?: string;
  chatStatusColorQnA?: string;
  chatStatusColorEnd?: string;
}>;
};
};
  "patron-workitem-api-docs:requestAWorkitem:POST:/interactions/work-items": {
  contactId?: number;
};
  "patron-workitem-api-docs:post-interactions-work-items-persistent:POST:/interactions/work-items-persistent": NiceCxoneFullApiSchemaJsonValue;
  "policy-policyinstance-api-docs:createPolicyDefinition:POST:/data-policies/v1/policies": NiceCxoneFullApiSchemaPolicyCreationResponse;
  "policy-policyinstance-api-docs:getPolicies:POST:/data-policies/v1/policies/search": NiceCxoneFullApiSchemaPolicySearchResponse;
  "policy-policyinstance-api-docs:getPolicyDefinition:GET:/data-policies/v1/policies/{policyId}": NiceCxoneFullApiSchemaPolicyRetrievalResponse;
  "policy-policyinstance-api-docs:getPolicyInstance:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}": NiceCxoneFullApiSchemaPolicyInstanceRetrievalResponse;
  "policy-policyinstance-api-docs:generateEvidenceReportUrl:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}/evidence-reports": NiceCxoneFullApiSchemaEvidenceReportResponse;
  "policy-policyinstance-api-docs:getAllPolicyInstances:GET:/data-policies/v1/policies/{policyId}/policy-instances": NiceCxoneFullApiSchemaPolicyInstanceSearchResponse;
  "policy-policyinstance-api-docs:getPolicyInstances:POST:/data-policies/v1/policies/policy-instances/search": NiceCxoneFullApiSchemaPolicyInstancesActivitySearchResponse;
  "privacy-gdpr-api-docs:createGdprErasureRequest:POST:/privacy/v1/erasure": NiceCxoneFullApiSchemaGdprErasureRequestResponse;
  "realtimedata-realtime-api-docs:getAgentStates:GET:/agents/states": {
  totalRecords?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  lastPollTime?: string;
  agentStates?: ReadonlyArray<{
  agentId?: number;
  agentStateId?: number;
  agentStateName?: string;
  agentStateCategory?: string;
  businessUnitId?: number;
  contactId?: number;
  contactStartHandleTime?: string;
  isActive?: boolean;
  isACW?: boolean;
  isOutbound?: boolean;
  firstName?: string;
  fromAddress?: string;
  lastName?: string;
  lastUpdateTime?: string;
  mediaTypeName?: string;
  mediaTypeId?: number;
  openContacts?: number;
  outStateDescription?: string;
  outStateId?: number;
  sessionStartTime?: string;
  skillId?: number;
  skillName?: string;
  startDate?: string;
  stationId?: number;
  stationPhoneNumber?: string;
  teamId?: number;
  teamName?: string;
  toAddress?: string;
  userName?: string;
}>;
};
  "realtimedata-realtime-api-docs:get-agents-client-data:GET:/agents/client-data": {
  data?: string;
};
  "realtimedata-realtime-api-docs:put-agents-client-data:PUT:/agents/client-data": void;
  "realtimedata-realtime-api-docs:getAgentStateByid:GET:/agents/{agentId}/states": {
  agentStates?: ReadonlyArray<{
  agentId?: number;
  agentStateId?: number;
  agentStateName?: "LoggedOut" | "Available" | "Unavailable" | "InboundContact" | "OutboundContact" | "InboundConsult" | "OutboundConsult" | "Dialer" | "LoggedIn";
  businessUnitId?: number;
  contactId?: number;
  isACW?: boolean;
  isOutbound?: boolean;
  firstName?: string;
  fromAddress?: string;
  lastName?: string;
  lastPollTime?: string;
  lastUpdateTime?: string;
  mediaName?: string;
  mediaType?: number;
  openContacts?: number;
  outStateDescription?: string;
  outStateId?: number;
  skillId?: number;
  skillName?: string;
  startDate?: string;
  stationId?: number;
  stationPhoneNumber?: string;
  teamId?: number;
  teamName?: string;
  toAddress?: string;
}>;
};
  "realtimedata-realtime-api-docs:ActiveContacts:GET:/contacts/active": {
  totalRecords?: number;
  _links?: {
  self: string;
  next?: string;
  previous?: string;
};
  businessUnitId?: number;
  lastPollTime?: string;
  activeContacts?: ReadonlyArray<{
  agentId?: number;
  agentStartDate?: string;
  campaignId?: number;
  campaignName?: string;
  contactId?: number;
  contactStartDate?: number;
  digitalContactStateName?: string;
  digitalContactStateId?: number;
  fileName?: string;
  firstName?: string;
  fromAddress?: string;
  highProficiency?: number;
  holdCount?: number;
  isLogged?: boolean;
  isOutbound?: boolean;
  isTakeover?: boolean;
  lastName?: string;
  lastUpdateTime?: string;
  lowProficiency?: number;
  masterContactId?: number;
  mediaSubTypeId?: number;
  mediaSubTypeName?: string;
  mediaTypeId?: number;
  mediaTypeName?: string;
  pointOfContactId?: number;
  pointOfContactName?: string;
  routingAttribute?: number;
  skillId?: number;
  skillName?: string;
  stateName?: string;
  stateId?: number;
  contactStateCategory?: string;
  targetAgentId?: number;
  teamId?: number;
  teamName?: string;
  toAddress?: string;
  transferIndicatorId?: number;
  transferIndicatorName?: string;
}>;
};
  "realtimedata-realtime-api-docs:ParkedContactDetails:GET:/contacts/parked": {
  resultSet?: {
  businessUnitId?: number;
  lastPollTime?: string;
  parkedContacts?: ReadonlyArray<{
  agentId?: number;
  campaignId?: number;
  campaignName?: string;
  contactId?: number;
  contactStart?: string;
  fileName?: string;
  firstName?: string;
  fromAddr?: string;
  isLogged?: boolean;
  isOutbound?: boolean;
  isTakeover?: boolean;
  lastName?: string;
  lastUpdateTime?: string;
  masterContactId?: number;
  mediaType?: number;
  mediaTypeName?: string;
  pointOfContactId?: number;
  pointOfContactName?: string;
  primaryDispositionId?: number;
  secondaryDispositionId?: number;
  skillId?: number;
  skillName?: string;
  state?: string;
  stateId?: number;
  subject?: string;
  tags?: string;
  targetAgentId?: number;
  teamId?: number;
  teamName?: string;
  toAddr?: string;
  transferIndicatorId?: number;
  transferIndicatorName?: string;
}>;
};
};
  "realtimedata-realtime-api-docs:get_/contacts/states:GET:/contacts/states": {
  totalRecords?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  businessUnitId?: number;
  lastPollTime?: string;
  contactStates?: ReadonlyArray<{
  agentId?: number;
  campaignName?: string;
  campaignId?: number;
  contactId?: number;
  contactStateId?: number;
  contactStateName?: string;
  digitalContactStateName?: string;
  digitalContactStateId?: number;
  firstName?: string;
  fromAddress?: string;
  highProficiency?: number;
  lastName?: string;
  lastUpdateTime?: string;
  lowProficiency?: number;
  masterContactId?: number;
  mediaTypeName?: string;
  mediaTypeId?: number;
  mediaSubTypeId?: number;
  mediaSubTypeName?: string;
  routingAttribute?: number;
  skillName?: string;
  skillId?: number;
  startDate?: string;
  teamId?: number;
  teamName?: string;
  toAddress?: string;
}>;
};
  "realtimedata-realtime-api-docs:SkillActivity:GET:/skills/activity": {
  totalRecords?: number;
  _links?: {
  self: string;
  next?: string;
  previous?: string;
};
  lastPollTime?: string;
  skillActivity?: ReadonlyArray<{
  serverTime?: string;
  businessUnitId?: number;
  agentsACW?: number;
  agentsAvailable?: number;
  agentsIdle?: number;
  agentsLoggedIn?: number;
  agentsUnavailable?: number;
  agentsWorking?: number;
  campaignId?: number;
  campaignName?: string;
  contactsActive?: number;
  earliestQueueTime?: string;
  emailFromAddress?: string;
  isActive?: boolean;
  inSLA?: number;
  isNaturalCalling?: boolean;
  isOutbound?: boolean;
  mediaTypeId?: number;
  mediaTypeName?: string;
  outSLA?: number;
  queueCount?: number;
  serviceLevel?: number;
  serviceLevelGoal?: number;
  serviceLevelThreshold?: number;
  skillName?: string;
  skillId?: number;
  skillQueueCount?: number;
  personalQueueCount?: number;
  parkedCount?: number;
  divisionNo?: number;
}>;
};
  "realtimedata-realtime-api-docs:post-skills-activity-search:POST:/skills/activity/search": {
  serverTime?: string;
  businessUnitId?: number;
  agentsACW?: number;
  agentsAvaliable?: number;
  agentsIdle?: number;
  agentsLoggedIn?: number;
  agentsUnavaliable?: number;
  agentsWorking?: number;
  campaignId?: number;
  campaignName?: string;
  contactsActive?: number;
  earliestQueueTime?: string;
  emailFromAddress?: string;
  isActive?: boolean;
  isNaturalCalling?: boolean;
  isOutbound?: boolean;
  mediaTypeId?: number;
  mediaTypeName?: string;
  queueCount?: number;
  serviceLevel?: number;
  serviceLevelGoal?: number;
  serviceLevelThreshold?: number;
  skillName?: string;
  skillId?: number;
  skillQueueCount?: number;
  personalQueueCount?: number;
  parkedCount?: number;
  divisionNo?: number;
};
  "realtimedata-realtime-api-docs:SkillActivityById:GET:/skills/{skillId}/activity": {
  lastPollTime?: string;
  skillActivity?: ReadonlyArray<{
  serverTime?: string;
  businessUnitId?: number;
  agentsACW?: number;
  agentsAvailable?: number;
  agentsIdle?: number;
  agentsLoggedIn?: number;
  agentsUnavailable?: number;
  agentsWorking?: number;
  campaignId?: number;
  campaignName?: string;
  contactsActive?: number;
  earliestQueueTime?: string;
  emailFromAddress?: string;
  isActive?: boolean;
  inSLA?: number;
  isNaturalCalling?: boolean;
  isOutbound?: boolean;
  mediaTypeId?: number;
  mediaTypeName?: string;
  outSLA?: number;
  queueCount?: number;
  serviceLevel?: number;
  serviceLevelGoal?: number;
  serviceLevelThreshold?: number;
  skillName?: string;
  skillId?: number;
  skillQueueCount?: number;
  personalQueueCount?: number;
  parkedCount?: number;
}>;
};
  "realtimedata-realtime-api-docs:agents_agentId_queues:GET:/agents/{agentId}/queues": {
  resultset?: {
  lastPollTime?: string;
  queues?: ReadonlyArray<{
  agentId?: string;
  businessUnitId?: string;
  skillId?: string;
  skillName?: string;
  campaignId?: string;
  mediaType?: string;
  queueCount?: string;
  longestQueueTimeInSeconds?: string;
  earliestQueueTimeInUTC?: string;
}>;
};
};
  "realtimedata-realtime-api-docs:agents_agentIds_queues_details:GET:/agents/{agentId}/queues-detail": {
  resultSet?: {
  contacts?: ReadonlyArray<{
  agentId?: string;
  businessUnitId?: string;
  campaignName?: string;
  campaignId?: string;
  contactId?: string;
  contactStateCode?: string;
  currentContactState?: string;
  firstName?: string;
  fromAddr?: string;
  lastName?: string;
  lastUpdateTime?: string;
  interactionId?: string;
  channelNo?: string;
  channelName?: string;
  skillName?: string;
  skillId?: string;
  startDate?: string;
  teamName?: string;
  teamId?: string;
  toAddr?: string;
}>;
  lastPollTime?: string;
};
};
  "recording-businessdata-api-docs:post_/interaction-recording-management-service/v1/interactions/business-data-update:POST:/interaction-recording-management-service/v1/interactions/business-data-update": {
  contactId?: string;
  description?: string;
  segmentId?: string;
  interactionId?: string;
  httpStatus?: string;
};
  "recording-interactions-api-docs:post-interaction-mask:POST:/interaction-recording-management-service/v1/interactions/mask": void;
  "recording-interactions-api-docs:post-interaction-unmask:POST:/interaction-recording-management-service/v1/interactions/unmask": void;
  "recording-recordingondemand-api-docs:StopRecord:POST:/interaction-recording-management-service/v1/interactions/start-recording-on-demand": {
  description?: string;
  contactId?: string;
  httpStatus?: string;
};
  "recording-recordingondemand-api-docs:ReleaseRecording:POST:/interaction-recording-management-service/v1/interactions/stop-recording-on-demand": {
  description?: string;
  contactId?: string;
  httpStatus?: string;
};
  "recording-recordingondemand-api-docs:DoNotRecord:POST:/interaction-recording-management-service/v1/interactions/do-not-record": {
  description?: string;
  contactId?: string;
  httpStatus?: string;
};
  "recording-recordingstatus-api-docs:GetRecordingStatus:GET:/interaction-recording-management-service/v1/interactions/get-recording-status": {
  contactId?: string;
  segmentId?: string;
  interactionId?: string;
  statusReason?: "Policy" | "Hold" | "Mask" | "RecordOnDemand" | "BusinessData" | "StopOnDemand" | "CustomerDisconsent";
  recordingStatusToAgent?: "Recording" | "Stopped" | "RecordingFailure" | "NoRecording" | "PoorRecordingQuality";
  recordingStatusFromAgent?: "Recording" | "Stopped" | "RecordingFailure" | "NoRecording";
};
  "recording-screeninteractions-api-docs:StartScreenrecord:POST:/interaction-recording-management-service/v1/interactions/start-screen-interaction-recording": {
  description?: string;
  contactId?: string;
  interactionId?: string;
  httpStatus?: string;
};
  "recording-screeninteractions-api-docs:StopScreenRecording:POST:/interaction-recording-management-service/v1/interactions/stop-screen-interaction-recording": {
  description?: string;
  contactId?: string;
  httpStatus?: string;
};
  "reporting-reporting-api-docs:get_/agents/interaction-history:GET:/agents/interaction-history": {
  totalRecords?: number;
  _links?: {
  self: string;
  next?: string;
  previous?: string;
};
  businessUnitId?: number;
  lastPollTime?: string;
  contactStates?: ReadonlyArray<{
  contactId?: number;
  masterContactId?: number;
  contactStartDate?: string;
  targetAgentId?: number;
  fileName?: string;
  pointOfContact?: string;
  lastUpdateTime?: string;
  mediaTypeId?: number;
  mediaTypeName?: string;
  mediaSubTypeId?: number;
  mediaSubTypeName?: string;
  agentId?: number;
  firstName?: string;
  lastName?: string;
  teamId?: number;
  teamName?: string;
  campaignId?: number;
  campaignName?: string;
  skillId?: number;
  skillName?: string;
  isOutbound?: boolean;
  fromAddr?: string;
  toAddr?: string;
  primaryDispositionId?: number;
  secondaryDispositionId?: number;
  transferIndicatorId?: number;
}>;
};
  "reporting-reporting-api-docs:getAgentHistoryByid:GET:/agents/{agentId}/interaction-history": {
  lastPollTime?: string;
  businessUnitId?: number;
  contactStates?: ReadonlyArray<{
  transferIndicatorId?: number;
  transferIndicatorName?: "None" | "ReSkill" | "ReAgent" | "Consult" | "TakeOver" | "External";
  contactId?: number;
  masterContactId?: number;
  contactStartDate?: string;
  targetAgentId?: number;
  fileName?: string;
  pointOfContact?: string;
  lastUpdateTime?: string;
  mediaTypeId?: number;
  mediaTypeName?: string;
  agentId?: number;
  firstName?: string;
  lastName?: string;
  teamId?: number;
  teamName?: string;
  campaignId?: number;
  campaignName?: string;
  skillId?: number;
  skillName?: string;
  isOutbound?: boolean;
  fromAddr?: string;
  toAddr?: string;
  primaryDispositionId?: string;
  secondaryDispositionId?: string;
}>;
};
  "reporting-reporting-api-docs:RecentContactHistory:GET:/agents/{agentId}/interaction-recent": {
  resultSet?: {
  agentId?: number;
  firstName?: string;
  lastName?: string;
  contactData?: ReadonlyArray<{
  toAgentId?: number;
  toAgentFirstName?: string;
  toAgentLastName?: string;
  toSkillId?: number;
  toSkillName?: string;
  toAddress?: string;
  lastContactStartDate?: string;
}>;
};
};
  "reporting-reporting-api-docs:AgentLoginHistory:GET:/agents/{agentId}/login-history": {
  totalRecords?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  businessUnitId?: number;
  lastPollTime?: string;
  agentLogins?: ReadonlyArray<{
  stationPhoneNumber?: string;
  stationCallerId?: string;
  stationId?: number;
  stationName?: string;
  loginDate?: string;
}>;
};
  "reporting-reporting-api-docs:get_/agents/state-history:GET:/agents/state-history": {
  totalRecords?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  businessUnitId?: number;
  lastPollTime?: string;
  agentStateHistory?: ReadonlyArray<{
  stateIndex?: number;
  startDate?: string;
  agentId?: number;
  agentStateId?: number;
  agentStateName?: string;
  agentSessionId?: number;
  contactId?: number;
  skillId?: number;
  skillName?: string;
  mediaTypeId?: number;
  mediaTypeName?: string;
  fromAddress?: string;
  toAddress?: string;
  outStateId?: number;
  outStateDescription?: number;
  duration?: string;
  isOutbound?: boolean;
  isNaturalCalling?: boolean;
  stationId?: number;
  stationName?: string;
  teamId?: number;
}>;
};
  "reporting-reporting-api-docs:get_/agents/{agentId}/state-history:GET:/agents/{agentId}/state-history": {
  totalRecords?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  businessUnitId?: number;
  lastPollTime?: string;
  agentStateHistory?: ReadonlyArray<{
  stateIndex?: number;
  startDate?: string;
  agentId?: number;
  agentStateId?: number;
  agentStateName?: string;
  agentSessionId?: number;
  contactId?: number;
  skillId?: number;
  skillName?: string;
  mediaTypeId?: number;
  mediaTypeName?: string;
  fromAddress?: string;
  toAddress?: string;
  outStateId?: number;
  outStateDescription?: number;
  duration?: string;
  isOutbound?: boolean;
  isNaturalCalling?: boolean;
  stationId?: number;
  stationName?: string;
  teamId?: number;
}>;
};
  "reporting-reporting-api-docs:PerformanceSummary:GET:/agents/performance": {
  agentPerformance?: ReadonlyArray<{
  agentId?: number;
  teamId?: number;
  agentOffered?: number;
  inboundHandled?: number;
  inboundTime?: string;
  inboundTalkTime?: string;
  inboundAvgTalkTime?: string;
  outboundHandled?: number;
  outboundTime?: string;
  outboundTalkTime?: string;
  outboundAvgTalkTime?: string;
  totalHandled?: number;
  totalTalkTime?: string;
  totalAvgTalkTime?: string;
  totalAvgHandleTime?: string;
  consultTime?: string;
  availableTime?: string;
  unavailableTime?: string;
  acwTime?: string;
  refused?: number;
  percentRefused?: number;
  loginTime?: string;
  workingRate?: number;
  occupancy?: number;
}>;
};
  "reporting-reporting-api-docs:AgentPerformanceSummary:GET:/agents/{agentId}/performance": {
  businessUnitId?: number;
  lastPollTime?: string;
  agentPerformance?: ReadonlyArray<{
  agentId?: number;
  teamId?: number;
  agentOffered?: number;
  inboundHandled?: number;
  inboundTime?: number;
  inboundTalkTime?: string;
  inboundAvgTalkTime?: string;
  outboundHandled?: number;
  outboundTime?: string;
  outboundTalkTime?: string;
  outboundAvgTalkTime?: string;
  totalHandled?: number;
  totalTalkTime?: string;
  totalAvgTalkTime?: string;
  totalAvgHandleTime?: string;
  consultTime?: number;
  availableTime?: string;
  unavailableTime?: string;
  acwTime?: string;
  refused?: number;
  percentRefused?: number;
  loginTime?: string;
  workingRate?: number;
  occupancy?: number;
}>;
};
  "reporting-reporting-api-docs:get_/contacts:GET:/contacts": (NiceCxoneFullApiSchemaContactsActive | NiceCxoneFullApiSchemaContactsCompeleted);
  "reporting-reporting-api-docs:get_/contacts/{contactId}:GET:/contacts/{contactId}": (NiceCxoneFullApiSchemaContactActive | NiceCxoneFullApiSchemaContactCompeleted);
  "reporting-reporting-api-docs:SmsTranscripts:GET:/contacts/sms-transcripts": {
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  businessUnitId?: number;
  totalRecords?: number;
  smsTranscripts?: ReadonlyArray<{
  messageStart?: string;
  messageBody?: string;
  from?: string;
  contactId?: number;
}>;
};
  "reporting-reporting-api-docs:ContactIdSmsTranscripts:GET:/contacts/{contactId}/sms-transcripts": {
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  businessUnitId?: number;
  totalRecords?: number;
  smsTranscripts?: ReadonlyArray<{
  messageStart?: string;
  messageBody?: string;
  from?: string;
}>;
};
  "reporting-reporting-api-docs:CompletedContactDetails:GET:/contacts/completed": {
  totalRecords?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  businessUnitId?: number;
  lastPollTime?: string;
  completedContacts?: ReadonlyArray<{
  abandoned?: boolean;
  abandonSeconds?: number;
  acwSeconds?: number;
  agentId?: number;
  agentSeconds?: number;
  analyticsProcessedDate?: string;
  callbackTime?: number;
  campaignId?: number;
  campaignName?: string;
  conferenceSeconds?: number;
  contactId?: number;
  contactStartDate?: string;
  dateACWWarehoused?: string;
  dateContactWarehoused?: string;
  dispositionNotes?: string;
  endReason?: string;
  firstName?: string;
  fromAddress?: string;
  highProficiency?: number;
  holdCount?: number;
  holdSeconds?: number;
  inQueueSeconds?: number;
  isAnalyticsProcessed?: boolean;
  isLogged?: boolean;
  isOutbound?: boolean;
  isRefused?: boolean;
  isShortAbandon?: boolean;
  isTakeover?: boolean;
  lastName?: string;
  lastUpdateTime?: string;
  lowProficiency?: number;
  masterContactId?: number;
  mediaSubTypeId?: number;
  mediaSubTypeName?: string;
  mediaTypeId?: number;
  mediaTypeName?: string;
  pointOfContactId?: number;
  pointOfContactName?: string;
  postQueueSeconds?: number;
  preQueueSeconds?: number;
  primaryDispositionId?: number;
  refuseReason?: string;
  refuseTime?: string;
  releaseSeconds?: number;
  routingAttribute?: number;
  routingTime?: number;
  secondaryDispositionId?: number;
  serviceLevelFlag?: number;
  skillId?: number;
  skillName?: string;
  teamId?: number;
  teamName?: string;
  toAddress?: string;
  totalDurationSeconds?: number;
  transferIndicatorId?: number;
  transferIndicatorName?: string;
  tags?: ReadonlyArray<{
  contactId?: number;
  tagId?: number;
  tagName?: string;
}>;
  divisionNo?: number;
}>;
};
  "reporting-reporting-api-docs:get_/contacts/state-history:GET:/contacts/state-history": {
  totalRecords?: number;
  _links?: {
  self: string;
  next?: string;
  previous?: string;
};
  lastPollTime?: string;
  businessUnit?: number;
  contactStateHistory?: ReadonlyArray<{
  stateIndex?: number;
  contactId?: string;
  contactStateId?: number;
  contactStateName?: string;
  digitalContactStateName?: string;
  digitalContactStateId?: string;
  startDate?: string;
  isWarehoused?: boolean;
  agentId?: number;
  skillId?: number;
  skillName?: string;
  duration?: string;
}>;
};
  "reporting-reporting-api-docs:ContactStateHistory:GET:/contacts/{contactId}/state-history": {
  contactStateHistory?: ReadonlyArray<{
  stateIndex?: number;
  contactId?: string;
  contactStateId?: number;
  contactStateName?: string;
  digitalContactStateName?: string;
  digitalContactStateId?: string;
  startDate?: string;
  isWarehoused?: boolean;
  agentId?: number;
  skillId?: number;
  skillName?: string;
  duration?: string;
  divisionNo?: number;
}>;
};
  "reporting-reporting-api-docs:get_/contacts/custom-data:GET:/contacts/custom-data": {
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  businessUnitId?: number;
  lastPollTime?: string;
  ContactCustomData?: ReadonlyArray<{
  contactId?: number;
  name?: string;
  value?: string;
}>;
};
  "reporting-reporting-api-docs:ContactCustomData:GET:/contacts/{contactId}/custom-data": {
  contactCustomData?: ReadonlyArray<{
  name?: string;
  value?: string;
}>;
};
  "reporting-reporting-api-docs:getFullSkillSummaries:GET:/skills/summary": {
  skillSummaries?: ReadonlyArray<{
  businessUnitId?: number;
  businessUnitName?: string;
  abandonCount?: number;
  abandonRate?: number;
  agentsAcw?: number;
  agentsAvailable?: number;
  agentsIdle?: number;
  agentsLoggedIn?: number;
  agentsUnavailable?: number;
  agentsWorking?: number;
  averageHandleTime?: string;
  averageInqueueTime?: string;
  averageSpeedToAnswer?: string;
  averageTalkTime?: string;
  averageWrapTime?: string;
  campaignId?: number;
  campaignName?: string;
  contactsActive?: number;
  contactsHandled?: number;
  contactsOffered?: number;
  contactsQueued?: number;
  contactsOutOfSLA?: number;
  contactsWithinSLA?: number;
  holdTime?: string;
  isOutbound?: boolean;
  longestQueueDur?: string;
  mediaTypeId?: number;
  mediaTypeName?: string;
  queueCount?: number;
  serviceLevel?: number;
  skillName?: string;
  skillId?: number;
  serviceLevelGoal?: number;
  serviceLevelThreshold?: number;
  totalContactTime?: string;
  dials?: number;
  connects?: number;
  connectsAHT?: string;
  rightPartyConnects?: number;
  rightPartyConnectsAHT?: string;
}>;
};
  "reporting-reporting-api-docs:get_/skills/{skillId}/summary:GET:/skills/{skillId}/summary": {
  skillSummaries?: ReadonlyArray<{
  businessUnitId?: number;
  businessUnitName?: string;
  abandonCount?: number;
  abandonRate?: number;
  agentsAcw?: number;
  agentsAvailable?: number;
  agentsIdle?: number;
  agentsLoggedIn?: number;
  agentsUnavailable?: number;
  agentsWorking?: number;
  averageHandleTime?: string;
  averageInqueueTime?: string;
  averageSpeedToAnswer?: string;
  averageTalkTime?: string;
  averageWrapTime?: string;
  campaignId?: number;
  campaignName?: string;
  contactsActive?: number;
  contactsHandled?: number;
  contactsOffered?: number;
  contactsQueued?: number;
  contactsOutOfSLA?: number;
  contactsWithinSLA?: number;
  holdTime?: string;
  isOutbound?: boolean;
  longestQueueDur?: string;
  mediaTypeId?: number;
  mediaTypeName?: string;
  queueCount?: number;
  serviceLevel?: number;
  skillName?: string;
  skillId?: number;
  serviceLevelGoal?: number;
  serviceLevelThreshold?: number;
  totalContactTime?: string;
  dials?: number;
  connects?: number;
  connectsAHT?: string;
  rightPartyConnects?: number;
  rightPartyConnectsAHT?: string;
}>;
};
  "reporting-reporting-api-docs:getFullSLASummaries:GET:/skills/sla-summary": {
  totalRecords?: number;
  _links?: {
  self?: string;
  next?: string;
  previous?: string;
};
  serviceLevelSummaries?: ReadonlyArray<{
  BusinessUnitId?: number;
  SkillId?: number;
  SkillName?: string;
  ContactsWithinSLA?: number;
  ContactsOutOfSLA?: number;
  TotalContacts?: number;
  ServiceLevel?: number;
}>;
};
  "reporting-reporting-api-docs:getFullSLASkillSummary:GET:/skills/{skillId}/sla-summary": {
  serviceLevelSummaries?: ReadonlyArray<{
  BusinessUnitId?: number;
  SkillId?: number;
  SkillName?: string;
  ContactsWithinSLA?: number;
  ContactsOutOfSLA?: number;
  TotalContacts?: number;
  ServiceLevel?: number;
}>;
};
  "reporting-reporting-api-docs:TeamPerformanceSummaryTotalsAll:GET:/teams/performance-total": {
  teamPerformanceTotal?: ReadonlyArray<{
  teamId?: number;
  agentOffered?: number;
  inboundHandled?: number;
  inboundTime?: string;
  inboundTalkTime?: string;
  inboundAvgTalkTime?: string;
  outboundHandled?: number;
  outboundTime?: string;
  outboundTalkTime?: string;
  outboundAvgTalkTime?: string;
  totalHandled?: number;
  totalAvgHandled?: number;
  totalTalkTime?: string;
  totalAvgTalkTime?: string;
  totalAvgHandleTime?: string;
  consultTime?: string;
  availableTime?: string;
  unavailableTime?: string;
  avgAvailableTime?: string;
  avgUnavailableTime?: string;
  acwTime?: string;
  refused?: number;
  percentRefused?: number;
  loginTime?: string;
  workingRate?: number;
  occupancy?: number;
}>;
};
  "reporting-reporting-api-docs:TeamPerformanceSummaryTotals:GET:/teams/{teamId}/performance-total": {
  teamPerformanceTotal?: ReadonlyArray<{
  teamId?: number;
  agentOffered?: number;
  inboundHandled?: number;
  inboundTime?: string;
  inboundTalkTime?: string;
  inboundAvgTalkTime?: string;
  outboundHandled?: number;
  outboundTime?: string;
  outboundTalkTime?: string;
  outboundAvgTalkTime?: string;
  totalHandled?: number;
  totalAvgHandled?: number;
  totalTalkTime?: string;
  totalAvgTalkTime?: string;
  totalAvgHandleTime?: string;
  consultTime?: string;
  availableTime?: string;
  unavailableTime?: string;
  avgAvailableTime?: string;
  avgUnavailableTime?: string;
  acwTime?: string;
  refused?: number;
  percentRefused?: number;
  loginTime?: string;
  workingRate?: number;
  occupancy?: number;
}>;
};
  "reporting-reporting-api-docs:CustomReports:GET:/reports": {
  reports?: ReadonlyArray<{
  businessUnitId?: number;
  reportId?: number;
  reportName?: string;
  reportType?: string;
  reportSubType?: string;
  reportDescription?: string;
  url?: string;
}>;
};
  "reporting-reporting-api-docs:ReportJobs:GET:/report-jobs": {
  runningJobs?: ReadonlyArray<{
  jobId?: number;
  reportId?: number;
  reportName?: string;
  jobStart?: string;
}>;
  completedJobs?: ReadonlyArray<{
  jobId?: number;
  reportId?: number;
  reportName?: string;
  jobStart?: string;
  jobEnd?: string;
  fileName?: string;
  resultFileURL?: string;
  deleteTime?: string;
}>;
};
  "reporting-reporting-api-docs:ReportJobByID:GET:/report-jobs/{jobId}": {
  jobId?: number;
  reportId?: number;
  reportName?: string;
  jobStart?: string;
  jobEnd?: string;
  fileName?: string;
  resultFileURL?: string;
  state?: string;
  deleteTime?: string;
};
  "reporting-reporting-api-docs:StartReportJob:POST:/report-jobs/{reportId}": {
  jobId?: number;
};
  "reporting-reporting-api-docs:GenerateADatadownloadReportFile:POST:/report-jobs/datadownload/{reportId}": {
  errorMessage?: string;
  fileName?: string;
  file?: string;
  fileType?: string;
  URI?: string;
};
  "reporting-reporting-api-docs:wfmskillscontacts:GET:/wfm-data/skills/contacts": {
  businessUnitId?: number;
  businessUnitName?: string;
  intervalStartDate?: string;
  skillId?: number;
  skillName?: string;
  isOutbound?: boolean;
  serviceLevel?: number;
  mediaTypeId?: number;
  MediaTypeName?: string;
  totalContacts?: number;
  totalHandled?: number;
  averageHandleTime?: number;
  abandonCount?: number;
  averageSpeedOfAnswer?: number;
  totalContactTime?: number;
};
  "reporting-reporting-api-docs:wfmDataAgent:GET:/wfm-data/agents": {
  wfM_Data_Agents?: ReadonlyArray<{
  agentNo?: number;
  teamName?: string;
  teamNo?: number;
  businessUnitId?: number;
  businessUnitName?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  status?: string;
  createDate?: string;
  modDateTime?: string;
  productId?: number;
  ntLoginName?: string;
}>;
};
  "reporting-reporting-api-docs:wfmDailerContactStatistics:GET:/wfm-data/skills/dialer-contacts": {
  wfM_OB_StatsV9?: ReadonlyArray<{
  businessUnitId?: number;
  businessUnitName?: string;
  intervalStartDate?: string;
  skillId?: number;
  skillName?: string;
  mediaTypeId?: number;
  mediaTypeName?: string;
  dials?: number;
  connects?: number;
  connectsAHT?: number;
  rightPartyConnects?: number;
  rightPartyConnectsAHT?: number;
  abandons?: number;
}>;
};
  "reporting-reporting-api-docs:wfmAdherenceStatistics:GET:/wfm-data/agents/schedule-adherence": {
  agentStateHistory?: ReadonlyArray<{
  businessUnitId?: number;
  businessUnitName?: string;
  agentId?: number;
  stateIndex?: number;
  startDate?: string;
  agentStateId?: number;
  agentSessionId?: number;
  skillId?: number;
  outStateId?: number;
  outStateDescription?: string;
  duration?: number;
}>;
};
  "reporting-reporting-api-docs:wfmAgentScorecard:GET:/wfm-data/agents/scorecards": {
  agentStateHistory?: ReadonlyArray<{
  businessUnitId?: number;
  businessUnitName?: string;
  agentId?: number;
  stateIndex?: number;
  startDate?: string;
  agentStateId?: number;
  agentSessionId?: number;
  skillId?: number;
  outStateId?: number;
  outStateDescription?: string;
  duration?: number;
}>;
};
  "reporting-reporting-api-docs:wfmAgentPerformance:GET:/wfm-data/skills/agent-performance": {
  businessUnitId?: number;
  businessUnitName?: string;
  skillId?: number;
  skillName?: string;
  agentId?: number;
  firstName?: string;
  lastName?: string;
  halfHour?: number;
  totalHandled?: number;
  totalHandledTime?: number;
  totalACWTime?: number;
};
  "reporting-reporting-api-docs:get-contacts-id-hierarchy:GET:/contacts/{contactId}/hierarchy": {
  masterContactId?: number;
  childContacts?: ReadonlyArray<{
  contactId?: number;
  startTime?: string;
  endTime?: string;
}>;
};
  "wfm-exportschedule-api-docs:exportScheduleAsList:POST:/schedules/export": NiceCxoneFullApiSchemaExportScheduleResponse;
  "wfm-exportsummary-api-docs:get-summary:GET:/timeoff-manager/summary/{activityCodeName}": NiceCxoneFullApiSchemaTimeOffSummaryByActivityCodeNameResponse;
  "wfm-importallotment-api-docs:put-allotments:PUT:/timeoff-manager/allotments/import": NiceCxoneFullApiSchemaImportUsersAllotmentResponse;
}
