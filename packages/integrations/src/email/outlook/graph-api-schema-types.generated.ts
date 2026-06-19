// Generated provider schema DTOs for OutlookGraph.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type OutlookGraphSchemaJsonPrimitive = string | number | boolean | null;
export type OutlookGraphSchemaJsonValue = OutlookGraphSchemaJsonPrimitive | readonly OutlookGraphSchemaJsonValue[] | { readonly [key: string]: OutlookGraphSchemaJsonValue | undefined };

export type OutlookGraphSchemaMicrosoftGraphUser = (OutlookGraphSchemaMicrosoftGraphDirectoryObject & {
  aboutMe?: string | null;
  accountEnabled?: boolean | null;
  ageGroup?: string | null;
  assignedLicenses?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphAssignedLicense>;
  assignedPlans?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphAssignedPlan>;
  authorizationInfo?: (OutlookGraphSchemaMicrosoftGraphAuthorizationInfo | {} | null);
  birthday?: string;
  businessPhones?: ReadonlyArray<string>;
  city?: string | null;
  companyName?: string | null;
  consentProvidedForMinor?: string | null;
  country?: string | null;
  createdDateTime?: string | null;
  creationType?: string | null;
  customSecurityAttributes?: (OutlookGraphSchemaMicrosoftGraphCustomSecurityAttributeValue | {} | null);
  department?: string | null;
  deviceEnrollmentLimit?: number;
  displayName?: string | null;
  employeeHireDate?: string | null;
  employeeId?: string | null;
  employeeLeaveDateTime?: string | null;
  employeeOrgData?: (OutlookGraphSchemaMicrosoftGraphEmployeeOrgData | {} | null);
  employeeType?: string | null;
  externalUserState?: string | null;
  externalUserStateChangeDateTime?: string | null;
  faxNumber?: string | null;
  givenName?: string | null;
  hireDate?: string;
  identities?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphObjectIdentity>;
  identityParentId?: string | null;
  imAddresses?: ReadonlyArray<string | null>;
  interests?: ReadonlyArray<string | null>;
  isManagementRestricted?: boolean | null;
  isResourceAccount?: boolean | null;
  jobTitle?: string | null;
  lastPasswordChangeDateTime?: string | null;
  legalAgeGroupClassification?: string | null;
  licenseAssignmentStates?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphLicenseAssignmentState>;
  mail?: string | null;
  mailboxSettings?: (OutlookGraphSchemaMicrosoftGraphMailboxSettings | {} | null);
  mailNickname?: string | null;
  mobilePhone?: string | null;
  mySite?: string | null;
  officeLocation?: string | null;
  onPremisesDistinguishedName?: string | null;
  onPremisesDomainName?: string | null;
  onPremisesExtensionAttributes?: (OutlookGraphSchemaMicrosoftGraphOnPremisesExtensionAttributes | {} | null);
  onPremisesImmutableId?: string | null;
  onPremisesLastSyncDateTime?: string | null;
  onPremisesProvisioningErrors?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphOnPremisesProvisioningError>;
  onPremisesSamAccountName?: string | null;
  onPremisesSecurityIdentifier?: string | null;
  onPremisesSyncEnabled?: boolean | null;
  onPremisesUserPrincipalName?: string | null;
  otherMails?: ReadonlyArray<string>;
  passwordPolicies?: string | null;
  passwordProfile?: (OutlookGraphSchemaMicrosoftGraphPasswordProfile | {} | null);
  pastProjects?: ReadonlyArray<string | null>;
  postalCode?: string | null;
  preferredDataLocation?: string | null;
  preferredLanguage?: string | null;
  preferredName?: string | null;
  print?: (OutlookGraphSchemaMicrosoftGraphUserPrint | {} | null);
  provisionedPlans?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphProvisionedPlan>;
  proxyAddresses?: ReadonlyArray<string>;
  responsibilities?: ReadonlyArray<string | null>;
  schools?: ReadonlyArray<string | null>;
  securityIdentifier?: string | null;
  serviceProvisioningErrors?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphServiceProvisioningError>;
  showInAddressList?: boolean | null;
  signInActivity?: (OutlookGraphSchemaMicrosoftGraphSignInActivity | {} | null);
  signInSessionsValidFromDateTime?: string | null;
  skills?: ReadonlyArray<string | null>;
  state?: string | null;
  streetAddress?: string | null;
  surname?: string | null;
  usageLocation?: string | null;
  userPrincipalName?: string | null;
  userType?: string | null;
  activities?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphUserActivity>;
  adhocCalls?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphAdhocCall>;
  agreementAcceptances?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphAgreementAcceptance>;
  appRoleAssignments?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphAppRoleAssignment>;
  authentication?: (OutlookGraphSchemaMicrosoftGraphAuthentication | {} | null);
  calendar?: (OutlookGraphSchemaMicrosoftGraphCalendar | {} | null);
  calendarGroups?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphCalendarGroup>;
  calendars?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphCalendar>;
  calendarView?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphEvent>;
  chats?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphChat>;
  cloudClipboard?: (OutlookGraphSchemaMicrosoftGraphCloudClipboardRoot | {} | null);
  cloudPCs?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphCloudPC>;
  contactFolders?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphContactFolder>;
  contacts?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphContact>;
  createdObjects?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDirectoryObject>;
  dataSecurityAndGovernance?: (OutlookGraphSchemaMicrosoftGraphUserDataSecurityAndGovernance | {} | null);
  deviceManagementTroubleshootingEvents?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDeviceManagementTroubleshootingEvent>;
  directReports?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDirectoryObject>;
  drive?: (OutlookGraphSchemaMicrosoftGraphDrive | {} | null);
  drives?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDrive>;
  employeeExperience?: (OutlookGraphSchemaMicrosoftGraphEmployeeExperienceUser | {} | null);
  events?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphEvent>;
  extensions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphExtension>;
  followedSites?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSite>;
  inferenceClassification?: (OutlookGraphSchemaMicrosoftGraphInferenceClassification | {} | null);
  insights?: (OutlookGraphSchemaMicrosoftGraphItemInsights | {} | null);
  joinedTeams?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTeam>;
  licenseDetails?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphLicenseDetails>;
  mailFolders?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMailFolder>;
  managedAppRegistrations?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphManagedAppRegistration>;
  managedDevices?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphManagedDevice>;
  manager?: (OutlookGraphSchemaMicrosoftGraphDirectoryObject | {} | null);
  memberOf?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDirectoryObject>;
  messages?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMessage>;
  oauth2PermissionGrants?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphOAuth2PermissionGrant>;
  onenote?: (OutlookGraphSchemaMicrosoftGraphOnenote | {} | null);
  onlineMeetings?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphOnlineMeeting>;
  onPremisesSyncBehavior?: (OutlookGraphSchemaMicrosoftGraphOnPremisesSyncBehavior | {} | null);
  outlook?: (OutlookGraphSchemaMicrosoftGraphOutlookUser | {} | null);
  ownedDevices?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDirectoryObject>;
  ownedObjects?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDirectoryObject>;
  people?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPerson>;
  permissionGrants?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphResourceSpecificPermissionGrant>;
  photo?: (OutlookGraphSchemaMicrosoftGraphProfilePhoto | {} | null);
  photos?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphProfilePhoto>;
  planner?: (OutlookGraphSchemaMicrosoftGraphPlannerUser | {} | null);
  presence?: (OutlookGraphSchemaMicrosoftGraphPresence | {} | null);
  registeredDevices?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDirectoryObject>;
  scopedRoleMemberOf?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphScopedRoleMembership>;
  settings?: (OutlookGraphSchemaMicrosoftGraphUserSettings | {} | null);
  solutions?: (OutlookGraphSchemaMicrosoftGraphUserSolutionRoot | {} | null);
  sponsors?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDirectoryObject>;
  teamwork?: (OutlookGraphSchemaMicrosoftGraphUserTeamwork | {} | null);
  todo?: (OutlookGraphSchemaMicrosoftGraphTodo | {} | null);
  transitiveMemberOf?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDirectoryObject>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphMailFolderCollectionResponse = (OutlookGraphSchemaBaseCollectionPaginationCountResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMailFolder>;
});

export type OutlookGraphSchemaMicrosoftGraphMailFolder = (OutlookGraphSchemaMicrosoftGraphEntity & {
  childFolderCount?: number | null;
  displayName?: string | null;
  isHidden?: boolean | null;
  parentFolderId?: string | null;
  totalItemCount?: number | null;
  unreadItemCount?: number | null;
  childFolders?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMailFolder>;
  messageRules?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMessageRule>;
  messages?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMessage>;
  multiValueExtendedProperties?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMultiValueLegacyExtendedProperty>;
  singleValueExtendedProperties?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSingleValueLegacyExtendedProperty>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphODataErrorsODataError = {
  error: OutlookGraphSchemaMicrosoftGraphODataErrorsMainError;
};

export type OutlookGraphSchemaMicrosoftGraphMessageRuleCollectionResponse = (OutlookGraphSchemaBaseCollectionPaginationCountResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMessageRule>;
});

export type OutlookGraphSchemaMicrosoftGraphMessageRule = (OutlookGraphSchemaMicrosoftGraphEntity & {
  actions?: (OutlookGraphSchemaMicrosoftGraphMessageRuleActions | {} | null);
  conditions?: (OutlookGraphSchemaMicrosoftGraphMessageRulePredicates | {} | null);
  displayName?: string | null;
  exceptions?: (OutlookGraphSchemaMicrosoftGraphMessageRulePredicates | {} | null);
  hasError?: boolean | null;
  isEnabled?: boolean | null;
  isReadOnly?: boolean | null;
  sequence?: number | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaODataCountResponse = number;

export type OutlookGraphSchemaMicrosoftGraphMessageCollectionResponse = (OutlookGraphSchemaBaseCollectionPaginationCountResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMessage>;
});

export type OutlookGraphSchemaMicrosoftGraphMessage = (OutlookGraphSchemaMicrosoftGraphOutlookItem & {
  bccRecipients?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  body?: (OutlookGraphSchemaMicrosoftGraphItemBody | {} | null);
  bodyPreview?: string | null;
  ccRecipients?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  conversationId?: string | null;
  conversationIndex?: string | null;
  flag?: (OutlookGraphSchemaMicrosoftGraphFollowupFlag | {} | null);
  from?: (OutlookGraphSchemaMicrosoftGraphRecipient | {} | null);
  hasAttachments?: boolean | null;
  importance?: (OutlookGraphSchemaMicrosoftGraphImportance | {} | null);
  inferenceClassification?: (OutlookGraphSchemaMicrosoftGraphInferenceClassificationType | {} | null);
  internetMessageHeaders?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphInternetMessageHeader>;
  internetMessageId?: string | null;
  isDeliveryReceiptRequested?: boolean | null;
  isDraft?: boolean | null;
  isRead?: boolean | null;
  isReadReceiptRequested?: boolean | null;
  parentFolderId?: string | null;
  receivedDateTime?: string | null;
  replyTo?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  sender?: (OutlookGraphSchemaMicrosoftGraphRecipient | {} | null);
  sentDateTime?: string | null;
  subject?: string | null;
  toRecipients?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  uniqueBody?: (OutlookGraphSchemaMicrosoftGraphItemBody | {} | null);
  webLink?: string | null;
  attachments?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphAttachment>;
  extensions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphExtension>;
  multiValueExtendedProperties?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMultiValueLegacyExtendedProperty>;
  singleValueExtendedProperties?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSingleValueLegacyExtendedProperty>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphAttachmentCollectionResponse = (OutlookGraphSchemaBaseCollectionPaginationCountResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphAttachment>;
});

export type OutlookGraphSchemaMicrosoftGraphAttachment = (OutlookGraphSchemaMicrosoftGraphEntity & {
  contentType?: string | null;
  isInline?: boolean;
  lastModifiedDateTime?: string | null;
  name?: string | null;
  size?: number;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphAttachmentItem = {
  attachmentType?: (OutlookGraphSchemaMicrosoftGraphAttachmentType | {} | null);
  contentId?: string | null;
  contentType?: string | null;
  isInline?: boolean | null;
  name?: string | null;
  size?: number | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphUploadSession = {
  expirationDateTime?: string | null;
  nextExpectedRanges?: ReadonlyArray<string | null>;
  uploadUrl?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphExtensionCollectionResponse = (OutlookGraphSchemaBaseCollectionPaginationCountResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphExtension>;
});

export type OutlookGraphSchemaMicrosoftGraphExtension = (OutlookGraphSchemaMicrosoftGraphEntity & {
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphRecipient = {
  emailAddress?: (OutlookGraphSchemaMicrosoftGraphEmailAddress | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaBaseDeltaFunctionResponse = {
  "@odata.nextLink"?: string | null;
  "@odata.deltaLink"?: string | null;
};

export type OutlookGraphSchemaMicrosoftGraphOutlookUser = (OutlookGraphSchemaMicrosoftGraphEntity & {
  masterCategories?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphOutlookCategory>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphOutlookCategoryCollectionResponse = (OutlookGraphSchemaBaseCollectionPaginationCountResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphOutlookCategory>;
});

export type OutlookGraphSchemaMicrosoftGraphOutlookCategory = (OutlookGraphSchemaMicrosoftGraphEntity & {
  color?: (OutlookGraphSchemaMicrosoftGraphCategoryColor | {} | null);
  displayName?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaBaseCollectionPaginationCountResponse = {
  "@odata.count"?: number | null;
  "@odata.nextLink"?: string | null;
};

export type OutlookGraphSchemaMicrosoftGraphLocaleInfo = {
  displayName?: string | null;
  locale?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTimeZoneInformation = {
  alias?: string | null;
  displayName?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphSubscriptionCollectionResponse = (OutlookGraphSchemaBaseCollectionPaginationCountResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSubscription>;
});

export type OutlookGraphSchemaMicrosoftGraphSubscription = (OutlookGraphSchemaMicrosoftGraphEntity & {
  applicationId?: string | null;
  changeType?: string;
  clientState?: string | null;
  creatorId?: string | null;
  encryptionCertificate?: string | null;
  encryptionCertificateId?: string | null;
  expirationDateTime?: string;
  includeResourceData?: boolean | null;
  latestSupportedTlsVersion?: string | null;
  lifecycleNotificationUrl?: string | null;
  notificationQueryOptions?: string | null;
  notificationUrl?: string;
  notificationUrlAppId?: string | null;
  resource?: string;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphDirectoryObject = (OutlookGraphSchemaMicrosoftGraphEntity & {
  deletedDateTime?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphAssignedLicense = {
  disabledPlans?: ReadonlyArray<string>;
  skuId?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphAssignedPlan = {
  assignedDateTime?: string | null;
  capabilityStatus?: string | null;
  service?: string | null;
  servicePlanId?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphAuthorizationInfo = {
  certificateUserIds?: ReadonlyArray<string | null>;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphCustomSecurityAttributeValue = {
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphEmployeeOrgData = {
  costCenter?: string | null;
  division?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphObjectIdentity = {
  issuer?: string | null;
  issuerAssignedId?: string | null;
  signInType?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphLicenseAssignmentState = {
  assignedByGroup?: string | null;
  disabledPlans?: ReadonlyArray<string | null>;
  error?: string | null;
  lastUpdatedDateTime?: string | null;
  skuId?: string | null;
  state?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphMailboxSettings = {
  archiveFolder?: string | null;
  automaticRepliesSetting?: (OutlookGraphSchemaMicrosoftGraphAutomaticRepliesSetting | {} | null);
  dateFormat?: string | null;
  delegateMeetingMessageDeliveryOptions?: (OutlookGraphSchemaMicrosoftGraphDelegateMeetingMessageDeliveryOptions | {} | null);
  language?: (OutlookGraphSchemaMicrosoftGraphLocaleInfo | {} | null);
  timeFormat?: string | null;
  timeZone?: string | null;
  userPurpose?: (OutlookGraphSchemaMicrosoftGraphUserPurpose | {} | null);
  workingHours?: (OutlookGraphSchemaMicrosoftGraphWorkingHours | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphOnPremisesExtensionAttributes = {
  extensionAttribute1?: string | null;
  extensionAttribute10?: string | null;
  extensionAttribute11?: string | null;
  extensionAttribute12?: string | null;
  extensionAttribute13?: string | null;
  extensionAttribute14?: string | null;
  extensionAttribute15?: string | null;
  extensionAttribute2?: string | null;
  extensionAttribute3?: string | null;
  extensionAttribute4?: string | null;
  extensionAttribute5?: string | null;
  extensionAttribute6?: string | null;
  extensionAttribute7?: string | null;
  extensionAttribute8?: string | null;
  extensionAttribute9?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphOnPremisesProvisioningError = {
  category?: string | null;
  occurredDateTime?: string | null;
  propertyCausingError?: string | null;
  value?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPasswordProfile = {
  forceChangePasswordNextSignIn?: boolean | null;
  forceChangePasswordNextSignInWithMfa?: boolean | null;
  password?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphUserPrint = {
  recentPrinterShares?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPrinterShare>;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphProvisionedPlan = {
  capabilityStatus?: string | null;
  provisioningStatus?: string | null;
  service?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphServiceProvisioningError = {
  createdDateTime?: string | null;
  isResolved?: boolean | null;
  serviceInstance?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphSignInActivity = {
  lastNonInteractiveSignInDateTime?: string | null;
  lastNonInteractiveSignInRequestId?: string | null;
  lastSignInDateTime?: string | null;
  lastSignInRequestId?: string | null;
  lastSuccessfulSignInDateTime?: string | null;
  lastSuccessfulSignInRequestId?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphUserActivity = (OutlookGraphSchemaMicrosoftGraphEntity & {
  activationUrl?: string;
  activitySourceHost?: string;
  appActivityId?: string;
  appDisplayName?: string | null;
  contentInfo?: OutlookGraphSchemaJsonValue;
  contentUrl?: string | null;
  createdDateTime?: string | null;
  expirationDateTime?: string | null;
  fallbackUrl?: string | null;
  lastModifiedDateTime?: string | null;
  status?: (OutlookGraphSchemaMicrosoftGraphStatus | {} | null);
  userTimezone?: string | null;
  visualElements?: OutlookGraphSchemaMicrosoftGraphVisualInfo;
  historyItems?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphActivityHistoryItem>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphAdhocCall = (OutlookGraphSchemaMicrosoftGraphEntity & {
  recordings?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphCallRecording>;
  transcripts?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphCallTranscript>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphAgreementAcceptance = (OutlookGraphSchemaMicrosoftGraphEntity & {
  agreementFileId?: string | null;
  agreementId?: string | null;
  deviceDisplayName?: string | null;
  deviceId?: string | null;
  deviceOSType?: string | null;
  deviceOSVersion?: string | null;
  expirationDateTime?: string | null;
  recordedDateTime?: string | null;
  state?: (OutlookGraphSchemaMicrosoftGraphAgreementAcceptanceState | {} | null);
  userDisplayName?: string | null;
  userEmail?: string | null;
  userId?: string | null;
  userPrincipalName?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphAppRoleAssignment = (OutlookGraphSchemaMicrosoftGraphDirectoryObject & {
  appRoleId?: string;
  createdDateTime?: string | null;
  principalDisplayName?: string | null;
  principalId?: string | null;
  principalType?: string | null;
  resourceDisplayName?: string | null;
  resourceId?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphAuthentication = (OutlookGraphSchemaMicrosoftGraphEntity & {
  emailMethods?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphEmailAuthenticationMethod>;
  externalAuthenticationMethods?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphExternalAuthenticationMethod>;
  fido2Methods?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphFido2AuthenticationMethod>;
  methods?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphAuthenticationMethod>;
  microsoftAuthenticatorMethods?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMicrosoftAuthenticatorAuthenticationMethod>;
  operations?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphLongRunningOperation>;
  passwordMethods?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPasswordAuthenticationMethod>;
  phoneMethods?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPhoneAuthenticationMethod>;
  platformCredentialMethods?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPlatformCredentialAuthenticationMethod>;
  softwareOathMethods?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSoftwareOathAuthenticationMethod>;
  temporaryAccessPassMethods?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTemporaryAccessPassAuthenticationMethod>;
  windowsHelloForBusinessMethods?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWindowsHelloForBusinessAuthenticationMethod>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphCalendar = (OutlookGraphSchemaMicrosoftGraphEntity & {
  allowedOnlineMeetingProviders?: ReadonlyArray<(OutlookGraphSchemaMicrosoftGraphOnlineMeetingProviderType | {} | null)>;
  canEdit?: boolean | null;
  canShare?: boolean | null;
  canViewPrivateItems?: boolean | null;
  changeKey?: string | null;
  color?: (OutlookGraphSchemaMicrosoftGraphCalendarColor | {} | null);
  defaultOnlineMeetingProvider?: (OutlookGraphSchemaMicrosoftGraphOnlineMeetingProviderType | {} | null);
  hexColor?: string | null;
  isDefaultCalendar?: boolean | null;
  isRemovable?: boolean | null;
  isTallyingResponses?: boolean | null;
  name?: string | null;
  owner?: (OutlookGraphSchemaMicrosoftGraphEmailAddress | {} | null);
  calendarPermissions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphCalendarPermission>;
  calendarView?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphEvent>;
  events?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphEvent>;
  multiValueExtendedProperties?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMultiValueLegacyExtendedProperty>;
  singleValueExtendedProperties?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSingleValueLegacyExtendedProperty>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphCalendarGroup = (OutlookGraphSchemaMicrosoftGraphEntity & {
  changeKey?: string | null;
  classId?: string | null;
  name?: string | null;
  calendars?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphCalendar>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphEvent = (OutlookGraphSchemaMicrosoftGraphOutlookItem & {
  allowNewTimeProposals?: boolean | null;
  attendees?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphAttendee>;
  body?: (OutlookGraphSchemaMicrosoftGraphItemBody | {} | null);
  bodyPreview?: string | null;
  cancelledOccurrences?: ReadonlyArray<string>;
  end?: (OutlookGraphSchemaMicrosoftGraphDateTimeTimeZone | {} | null);
  hasAttachments?: boolean | null;
  hideAttendees?: boolean | null;
  iCalUId?: string | null;
  importance?: (OutlookGraphSchemaMicrosoftGraphImportance | {} | null);
  isAllDay?: boolean | null;
  isCancelled?: boolean | null;
  isDraft?: boolean | null;
  isOnlineMeeting?: boolean | null;
  isOrganizer?: boolean | null;
  isReminderOn?: boolean | null;
  location?: (OutlookGraphSchemaMicrosoftGraphLocation | {} | null);
  locations?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphLocation>;
  onlineMeeting?: (OutlookGraphSchemaMicrosoftGraphOnlineMeetingInfo | {} | null);
  onlineMeetingProvider?: (OutlookGraphSchemaMicrosoftGraphOnlineMeetingProviderType | {} | null);
  onlineMeetingUrl?: string | null;
  organizer?: (OutlookGraphSchemaMicrosoftGraphRecipient | {} | null);
  originalEndTimeZone?: string | null;
  originalStart?: string | null;
  originalStartTimeZone?: string | null;
  recurrence?: (OutlookGraphSchemaMicrosoftGraphPatternedRecurrence | {} | null);
  reminderMinutesBeforeStart?: number | null;
  responseRequested?: boolean | null;
  responseStatus?: (OutlookGraphSchemaMicrosoftGraphResponseStatus | {} | null);
  sensitivity?: (OutlookGraphSchemaMicrosoftGraphSensitivity | {} | null);
  seriesMasterId?: string | null;
  showAs?: (OutlookGraphSchemaMicrosoftGraphFreeBusyStatus | {} | null);
  start?: (OutlookGraphSchemaMicrosoftGraphDateTimeTimeZone | {} | null);
  subject?: string | null;
  transactionId?: string | null;
  type?: (OutlookGraphSchemaMicrosoftGraphEventType | {} | null);
  webLink?: string | null;
  attachments?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphAttachment>;
  calendar?: (OutlookGraphSchemaMicrosoftGraphCalendar | {} | null);
  exceptionOccurrences?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphEvent>;
  extensions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphExtension>;
  instances?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphEvent>;
  multiValueExtendedProperties?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMultiValueLegacyExtendedProperty>;
  singleValueExtendedProperties?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSingleValueLegacyExtendedProperty>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphChat = (OutlookGraphSchemaMicrosoftGraphEntity & {
  chatType?: OutlookGraphSchemaMicrosoftGraphChatType;
  createdDateTime?: string | null;
  isHiddenForAllMembers?: boolean | null;
  lastUpdatedDateTime?: string | null;
  migrationMode?: (OutlookGraphSchemaMicrosoftGraphMigrationMode | {} | null);
  onlineMeetingInfo?: (OutlookGraphSchemaMicrosoftGraphTeamworkOnlineMeetingInfo | {} | null);
  originalCreatedDateTime?: string | null;
  tenantId?: string | null;
  topic?: string | null;
  viewpoint?: (OutlookGraphSchemaMicrosoftGraphChatViewpoint | {} | null);
  webUrl?: string | null;
  installedApps?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTeamsAppInstallation>;
  lastMessagePreview?: (OutlookGraphSchemaMicrosoftGraphChatMessageInfo | {} | null);
  members?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphConversationMember>;
  messages?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphChatMessage>;
  permissionGrants?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphResourceSpecificPermissionGrant>;
  pinnedMessages?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPinnedChatMessageInfo>;
  tabs?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTeamsTab>;
  targetedMessages?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTargetedChatMessage>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphCloudClipboardRoot = (OutlookGraphSchemaMicrosoftGraphEntity & {
  items?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphCloudClipboardItem>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphCloudPC = (OutlookGraphSchemaMicrosoftGraphEntity & {
  aadDeviceId?: string | null;
  displayName?: string | null;
  gracePeriodEndDateTime?: string | null;
  imageDisplayName?: string | null;
  lastModifiedDateTime?: string;
  managedDeviceId?: string | null;
  managedDeviceName?: string | null;
  onPremisesConnectionName?: string | null;
  provisioningPolicyId?: string | null;
  provisioningPolicyName?: string | null;
  provisioningType?: (OutlookGraphSchemaMicrosoftGraphCloudPcProvisioningType | {} | null);
  servicePlanId?: string | null;
  servicePlanName?: string | null;
  userPrincipalName?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphContactFolder = (OutlookGraphSchemaMicrosoftGraphEntity & {
  displayName?: string | null;
  parentFolderId?: string | null;
  childFolders?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphContactFolder>;
  contacts?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphContact>;
  multiValueExtendedProperties?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMultiValueLegacyExtendedProperty>;
  singleValueExtendedProperties?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSingleValueLegacyExtendedProperty>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphContact = (OutlookGraphSchemaMicrosoftGraphOutlookItem & {
  assistantName?: string | null;
  birthday?: string | null;
  businessAddress?: (OutlookGraphSchemaMicrosoftGraphPhysicalAddress | {} | null);
  businessHomePage?: string | null;
  businessPhones?: ReadonlyArray<string | null>;
  children?: ReadonlyArray<string | null>;
  companyName?: string | null;
  department?: string | null;
  displayName?: string | null;
  emailAddresses?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphEmailAddress>;
  fileAs?: string | null;
  generation?: string | null;
  givenName?: string | null;
  homeAddress?: (OutlookGraphSchemaMicrosoftGraphPhysicalAddress | {} | null);
  homePhones?: ReadonlyArray<string | null>;
  imAddresses?: ReadonlyArray<string | null>;
  initials?: string | null;
  jobTitle?: string | null;
  manager?: string | null;
  middleName?: string | null;
  mobilePhone?: string | null;
  nickName?: string | null;
  officeLocation?: string | null;
  otherAddress?: (OutlookGraphSchemaMicrosoftGraphPhysicalAddress | {} | null);
  parentFolderId?: string | null;
  personalNotes?: string | null;
  primaryEmailAddress?: (OutlookGraphSchemaMicrosoftGraphEmailAddress | {} | null);
  profession?: string | null;
  secondaryEmailAddress?: (OutlookGraphSchemaMicrosoftGraphEmailAddress | {} | null);
  spouseName?: string | null;
  surname?: string | null;
  tertiaryEmailAddress?: (OutlookGraphSchemaMicrosoftGraphEmailAddress | {} | null);
  title?: string | null;
  yomiCompanyName?: string | null;
  yomiGivenName?: string | null;
  yomiSurname?: string | null;
  extensions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphExtension>;
  multiValueExtendedProperties?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMultiValueLegacyExtendedProperty>;
  photo?: (OutlookGraphSchemaMicrosoftGraphProfilePhoto | {} | null);
  singleValueExtendedProperties?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSingleValueLegacyExtendedProperty>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphUserDataSecurityAndGovernance = (OutlookGraphSchemaMicrosoftGraphDataSecurityAndGovernance & {
  activities?: (OutlookGraphSchemaMicrosoftGraphActivitiesContainer | {} | null);
  protectionScopes?: (OutlookGraphSchemaMicrosoftGraphUserProtectionScopeContainer | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphDeviceManagementTroubleshootingEvent = (OutlookGraphSchemaMicrosoftGraphEntity & {
  correlationId?: string | null;
  eventDateTime?: string;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphDrive = (OutlookGraphSchemaMicrosoftGraphBaseItem & {
  driveType?: string | null;
  owner?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  quota?: (OutlookGraphSchemaMicrosoftGraphQuota | {} | null);
  sharePointIds?: (OutlookGraphSchemaMicrosoftGraphSharepointIds | {} | null);
  system?: (OutlookGraphSchemaMicrosoftGraphSystemFacet | {} | null);
  bundles?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDriveItem>;
  following?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDriveItem>;
  items?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDriveItem>;
  list?: (OutlookGraphSchemaMicrosoftGraphList | {} | null);
  root?: (OutlookGraphSchemaMicrosoftGraphDriveItem | {} | null);
  special?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDriveItem>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphEmployeeExperienceUser = (OutlookGraphSchemaMicrosoftGraphEntity & {
  assignedRoles?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphEngagementRole>;
  learningCourseActivities?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphLearningCourseActivity>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphSite = (OutlookGraphSchemaMicrosoftGraphBaseItem & {
  displayName?: string | null;
  error?: (OutlookGraphSchemaMicrosoftGraphPublicError | {} | null);
  isPersonalSite?: boolean | null;
  root?: (OutlookGraphSchemaMicrosoftGraphRoot | {} | null);
  sharepointIds?: (OutlookGraphSchemaMicrosoftGraphSharepointIds | {} | null);
  siteCollection?: (OutlookGraphSchemaMicrosoftGraphSiteCollection | {} | null);
  analytics?: (OutlookGraphSchemaMicrosoftGraphItemAnalytics | {} | null);
  columns?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphColumnDefinition>;
  contentTypes?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphContentType>;
  drive?: (OutlookGraphSchemaMicrosoftGraphDrive | {} | null);
  drives?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDrive>;
  externalColumns?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphColumnDefinition>;
  items?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphBaseItem>;
  lists?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphList>;
  onenote?: (OutlookGraphSchemaMicrosoftGraphOnenote | {} | null);
  operations?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRichLongRunningOperation>;
  pages?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphBaseSitePage>;
  permissions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPermission>;
  sites?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSite>;
  termStore?: (OutlookGraphSchemaMicrosoftGraphTermStoreStore | {} | null);
  termStores?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTermStoreStore>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphInferenceClassification = (OutlookGraphSchemaMicrosoftGraphEntity & {
  overrides?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphInferenceClassificationOverride>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphItemInsights = (OutlookGraphSchemaMicrosoftGraphOfficeGraphInsights & {
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTeam = (OutlookGraphSchemaMicrosoftGraphEntity & {
  classification?: string | null;
  createdDateTime?: string | null;
  description?: string | null;
  displayName?: string | null;
  firstChannelName?: string | null;
  funSettings?: (OutlookGraphSchemaMicrosoftGraphTeamFunSettings | {} | null);
  guestSettings?: (OutlookGraphSchemaMicrosoftGraphTeamGuestSettings | {} | null);
  internalId?: string | null;
  isArchived?: boolean | null;
  memberSettings?: (OutlookGraphSchemaMicrosoftGraphTeamMemberSettings | {} | null);
  messagingSettings?: (OutlookGraphSchemaMicrosoftGraphTeamMessagingSettings | {} | null);
  specialization?: (OutlookGraphSchemaMicrosoftGraphTeamSpecialization | {} | null);
  summary?: (OutlookGraphSchemaMicrosoftGraphTeamSummary | {} | null);
  tenantId?: string | null;
  visibility?: (OutlookGraphSchemaMicrosoftGraphTeamVisibilityType | {} | null);
  webUrl?: string | null;
  allChannels?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphChannel>;
  channels?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphChannel>;
  group?: (OutlookGraphSchemaMicrosoftGraphGroup | {} | null);
  incomingChannels?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphChannel>;
  installedApps?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTeamsAppInstallation>;
  members?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphConversationMember>;
  operations?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTeamsAsyncOperation>;
  permissionGrants?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphResourceSpecificPermissionGrant>;
  photo?: (OutlookGraphSchemaMicrosoftGraphProfilePhoto | {} | null);
  primaryChannel?: (OutlookGraphSchemaMicrosoftGraphChannel | {} | null);
  schedule?: (OutlookGraphSchemaMicrosoftGraphSchedule | {} | null);
  tags?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTeamworkTag>;
  template?: (OutlookGraphSchemaMicrosoftGraphTeamsTemplate | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphLicenseDetails = (OutlookGraphSchemaMicrosoftGraphEntity & {
  servicePlans?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphServicePlanInfo>;
  skuId?: string | null;
  skuPartNumber?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphManagedAppRegistration = (OutlookGraphSchemaMicrosoftGraphEntity & {
  appIdentifier?: (OutlookGraphSchemaMicrosoftGraphMobileAppIdentifier | {} | null);
  applicationVersion?: string | null;
  createdDateTime?: string;
  deviceName?: string | null;
  deviceTag?: string | null;
  deviceType?: string | null;
  flaggedReasons?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphManagedAppFlaggedReason>;
  lastSyncDateTime?: string;
  managementSdkVersion?: string | null;
  platformVersion?: string | null;
  userId?: string | null;
  version?: string | null;
  appliedPolicies?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphManagedAppPolicy>;
  intendedPolicies?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphManagedAppPolicy>;
  operations?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphManagedAppOperation>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphManagedDevice = (OutlookGraphSchemaMicrosoftGraphEntity & {
  activationLockBypassCode?: string | null;
  androidSecurityPatchLevel?: string | null;
  azureADDeviceId?: string | null;
  azureADRegistered?: boolean | null;
  complianceGracePeriodExpirationDateTime?: string;
  complianceState?: OutlookGraphSchemaMicrosoftGraphComplianceState;
  configurationManagerClientEnabledFeatures?: (OutlookGraphSchemaMicrosoftGraphConfigurationManagerClientEnabledFeatures | {} | null);
  deviceActionResults?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDeviceActionResult>;
  deviceCategoryDisplayName?: string | null;
  deviceEnrollmentType?: OutlookGraphSchemaMicrosoftGraphDeviceEnrollmentType;
  deviceHealthAttestationState?: (OutlookGraphSchemaMicrosoftGraphDeviceHealthAttestationState | {} | null);
  deviceName?: string | null;
  deviceRegistrationState?: OutlookGraphSchemaMicrosoftGraphDeviceRegistrationState;
  easActivated?: boolean;
  easActivationDateTime?: string;
  easDeviceId?: string | null;
  emailAddress?: string | null;
  enrolledDateTime?: string;
  enrollmentProfileName?: string | null;
  ethernetMacAddress?: string | null;
  exchangeAccessState?: OutlookGraphSchemaMicrosoftGraphDeviceManagementExchangeAccessState;
  exchangeAccessStateReason?: OutlookGraphSchemaMicrosoftGraphDeviceManagementExchangeAccessStateReason;
  exchangeLastSuccessfulSyncDateTime?: string;
  freeStorageSpaceInBytes?: number;
  iccid?: string | null;
  imei?: string | null;
  isEncrypted?: boolean;
  isSupervised?: boolean;
  jailBroken?: string | null;
  lastSyncDateTime?: string;
  managedDeviceName?: string | null;
  managedDeviceOwnerType?: OutlookGraphSchemaMicrosoftGraphManagedDeviceOwnerType;
  managementAgent?: OutlookGraphSchemaMicrosoftGraphManagementAgentType;
  managementCertificateExpirationDate?: string;
  managementState?: OutlookGraphSchemaMicrosoftGraphManagementState;
  manufacturer?: string | null;
  meid?: string | null;
  model?: string | null;
  notes?: string | null;
  operatingSystem?: string | null;
  osVersion?: string | null;
  partnerReportedThreatState?: OutlookGraphSchemaMicrosoftGraphManagedDevicePartnerReportedHealthState;
  phoneNumber?: string | null;
  physicalMemoryInBytes?: number;
  remoteAssistanceSessionErrorDetails?: string | null;
  remoteAssistanceSessionUrl?: string | null;
  requireUserEnrollmentApproval?: boolean | null;
  serialNumber?: string | null;
  subscriberCarrier?: string | null;
  totalStorageSpaceInBytes?: number;
  udid?: string | null;
  userDisplayName?: string | null;
  userId?: string | null;
  userPrincipalName?: string | null;
  wiFiMacAddress?: string | null;
  deviceCategory?: (OutlookGraphSchemaMicrosoftGraphDeviceCategory | {} | null);
  deviceCompliancePolicyStates?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDeviceCompliancePolicyState>;
  deviceConfigurationStates?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDeviceConfigurationState>;
  logCollectionRequests?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDeviceLogCollectionResponse>;
  users?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphUser>;
  windowsProtectionState?: (OutlookGraphSchemaMicrosoftGraphWindowsProtectionState | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphOAuth2PermissionGrant = (OutlookGraphSchemaMicrosoftGraphEntity & {
  clientId?: string;
  consentType?: string | null;
  principalId?: string | null;
  resourceId?: string;
  scope?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphOnenote = (OutlookGraphSchemaMicrosoftGraphEntity & {
  notebooks?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphNotebook>;
  operations?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphOnenoteOperation>;
  pages?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphOnenotePage>;
  resources?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphOnenoteResource>;
  sectionGroups?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSectionGroup>;
  sections?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphOnenoteSection>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphOnlineMeeting = (OutlookGraphSchemaMicrosoftGraphOnlineMeetingBase & {
  attendeeReport?: string | null;
  broadcastSettings?: (OutlookGraphSchemaMicrosoftGraphBroadcastMeetingSettings | {} | null);
  creationDateTime?: string | null;
  endDateTime?: string | null;
  externalId?: string | null;
  isBroadcast?: boolean | null;
  meetingTemplateId?: string | null;
  participants?: (OutlookGraphSchemaMicrosoftGraphMeetingParticipants | {} | null);
  startDateTime?: string | null;
  recordings?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphCallRecording>;
  transcripts?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphCallTranscript>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphOnPremisesSyncBehavior = (OutlookGraphSchemaMicrosoftGraphEntity & {
  isCloudManaged?: boolean;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPerson = (OutlookGraphSchemaMicrosoftGraphEntity & {
  birthday?: string | null;
  companyName?: string | null;
  department?: string | null;
  displayName?: string | null;
  givenName?: string | null;
  imAddress?: string | null;
  isFavorite?: boolean | null;
  jobTitle?: string | null;
  officeLocation?: string | null;
  personNotes?: string | null;
  personType?: (OutlookGraphSchemaMicrosoftGraphPersonType | {} | null);
  phones?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPhone>;
  postalAddresses?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphLocation>;
  profession?: string | null;
  scoredEmailAddresses?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphScoredEmailAddress>;
  surname?: string | null;
  userPrincipalName?: string | null;
  websites?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWebsite>;
  yomiCompany?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphResourceSpecificPermissionGrant = (OutlookGraphSchemaMicrosoftGraphDirectoryObject & {
  clientAppId?: string | null;
  clientId?: string | null;
  permission?: string | null;
  permissionType?: string | null;
  resourceAppId?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphProfilePhoto = (OutlookGraphSchemaMicrosoftGraphEntity & {
  height?: number | null;
  width?: number | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPlannerUser = (OutlookGraphSchemaMicrosoftGraphEntity & {
  plans?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPlannerPlan>;
  tasks?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPlannerTask>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPresence = (OutlookGraphSchemaMicrosoftGraphEntity & {
  activity?: string | null;
  availability?: string | null;
  outOfOfficeSettings?: (OutlookGraphSchemaMicrosoftGraphOutOfOfficeSettings | {} | null);
  sequenceNumber?: string | null;
  statusMessage?: (OutlookGraphSchemaMicrosoftGraphPresenceStatusMessage | {} | null);
  workLocation?: (OutlookGraphSchemaMicrosoftGraphUserWorkLocation | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphScopedRoleMembership = (OutlookGraphSchemaMicrosoftGraphEntity & {
  administrativeUnitId?: string;
  roleId?: string;
  roleMemberInfo?: OutlookGraphSchemaMicrosoftGraphIdentity;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphUserSettings = (OutlookGraphSchemaMicrosoftGraphEntity & {
  contributionToContentDiscoveryAsOrganizationDisabled?: boolean;
  contributionToContentDiscoveryDisabled?: boolean;
  exchange?: (OutlookGraphSchemaMicrosoftGraphExchangeSettings | {} | null);
  itemInsights?: (OutlookGraphSchemaMicrosoftGraphUserInsightsSettings | {} | null);
  shiftPreferences?: (OutlookGraphSchemaMicrosoftGraphShiftPreferences | {} | null);
  storage?: (OutlookGraphSchemaMicrosoftGraphUserStorage | {} | null);
  windows?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWindowsSetting>;
  workHoursAndLocations?: (OutlookGraphSchemaMicrosoftGraphWorkHoursAndLocationsSetting | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphUserSolutionRoot = (OutlookGraphSchemaMicrosoftGraphEntity & {
  workingTimeSchedule?: (OutlookGraphSchemaMicrosoftGraphWorkingTimeSchedule | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphUserTeamwork = (OutlookGraphSchemaMicrosoftGraphEntity & {
  locale?: string | null;
  region?: string | null;
  associatedTeams?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphAssociatedTeamInfo>;
  installedApps?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphUserScopeTeamsAppInstallation>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTodo = (OutlookGraphSchemaMicrosoftGraphEntity & {
  lists?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTodoTaskList>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphEntity = {
  id?: string;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphMultiValueLegacyExtendedProperty = (OutlookGraphSchemaMicrosoftGraphEntity & {
  value?: ReadonlyArray<string | null>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphSingleValueLegacyExtendedProperty = (OutlookGraphSchemaMicrosoftGraphEntity & {
  value?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphODataErrorsMainError = {
  code: string;
  message: string;
  target?: string | null;
  details?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphODataErrorsErrorDetails>;
  innerError?: OutlookGraphSchemaMicrosoftGraphODataErrorsInnerError;
};

export type OutlookGraphSchemaMicrosoftGraphMessageRuleActions = {
  assignCategories?: ReadonlyArray<string | null>;
  copyToFolder?: string | null;
  delete?: boolean | null;
  forwardAsAttachmentTo?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  forwardTo?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  markAsRead?: boolean | null;
  markImportance?: (OutlookGraphSchemaMicrosoftGraphImportance | {} | null);
  moveToFolder?: string | null;
  permanentDelete?: boolean | null;
  redirectTo?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  stopProcessingRules?: boolean | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphMessageRulePredicates = {
  bodyContains?: ReadonlyArray<string | null>;
  bodyOrSubjectContains?: ReadonlyArray<string | null>;
  categories?: ReadonlyArray<string | null>;
  fromAddresses?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  hasAttachments?: boolean | null;
  headerContains?: ReadonlyArray<string | null>;
  importance?: (OutlookGraphSchemaMicrosoftGraphImportance | {} | null);
  isApprovalRequest?: boolean | null;
  isAutomaticForward?: boolean | null;
  isAutomaticReply?: boolean | null;
  isEncrypted?: boolean | null;
  isMeetingRequest?: boolean | null;
  isMeetingResponse?: boolean | null;
  isNonDeliveryReport?: boolean | null;
  isPermissionControlled?: boolean | null;
  isReadReceipt?: boolean | null;
  isSigned?: boolean | null;
  isVoicemail?: boolean | null;
  messageActionFlag?: (OutlookGraphSchemaMicrosoftGraphMessageActionFlag | {} | null);
  notSentToMe?: boolean | null;
  recipientContains?: ReadonlyArray<string | null>;
  senderContains?: ReadonlyArray<string | null>;
  sensitivity?: (OutlookGraphSchemaMicrosoftGraphSensitivity | {} | null);
  sentCcMe?: boolean | null;
  sentOnlyToMe?: boolean | null;
  sentToAddresses?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  sentToMe?: boolean | null;
  sentToOrCcMe?: boolean | null;
  subjectContains?: ReadonlyArray<string | null>;
  withinSizeRange?: (OutlookGraphSchemaMicrosoftGraphSizeRange | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphOutlookItem = (OutlookGraphSchemaMicrosoftGraphEntity & {
  categories?: ReadonlyArray<string | null>;
  changeKey?: string | null;
  createdDateTime?: string | null;
  lastModifiedDateTime?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphItemBody = {
  content?: string | null;
  contentType?: (OutlookGraphSchemaMicrosoftGraphBodyType | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphFollowupFlag = {
  completedDateTime?: (OutlookGraphSchemaMicrosoftGraphDateTimeTimeZone | {} | null);
  dueDateTime?: (OutlookGraphSchemaMicrosoftGraphDateTimeTimeZone | {} | null);
  flagStatus?: (OutlookGraphSchemaMicrosoftGraphFollowupFlagStatus | {} | null);
  startDateTime?: (OutlookGraphSchemaMicrosoftGraphDateTimeTimeZone | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphImportance = "low" | "normal" | "high";

export type OutlookGraphSchemaMicrosoftGraphInferenceClassificationType = "focused" | "other";

export type OutlookGraphSchemaMicrosoftGraphInternetMessageHeader = {
  name?: string | null;
  value?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphAttachmentType = "file" | "item" | "reference";

export type OutlookGraphSchemaMicrosoftGraphEmailAddress = {
  address?: string | null;
  name?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphCategoryColor = "none" | "preset0" | "preset1" | "preset2" | "preset3" | "preset4" | "preset5" | "preset6" | "preset7" | "preset8" | "preset9" | "preset10" | "preset11" | "preset12" | "preset13" | "preset14" | "preset15" | "preset16" | "preset17" | "preset18" | "preset19" | "preset20" | "preset21" | "preset22" | "preset23" | "preset24";

export type OutlookGraphSchemaMicrosoftGraphAutomaticRepliesSetting = {
  externalAudience?: (OutlookGraphSchemaMicrosoftGraphExternalAudienceScope | {} | null);
  externalReplyMessage?: string | null;
  internalReplyMessage?: string | null;
  scheduledEndDateTime?: (OutlookGraphSchemaMicrosoftGraphDateTimeTimeZone | {} | null);
  scheduledStartDateTime?: (OutlookGraphSchemaMicrosoftGraphDateTimeTimeZone | {} | null);
  status?: (OutlookGraphSchemaMicrosoftGraphAutomaticRepliesStatus | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphDelegateMeetingMessageDeliveryOptions = "sendToDelegateAndInformationToPrincipal" | "sendToDelegateAndPrincipal" | "sendToDelegateOnly";

export type OutlookGraphSchemaMicrosoftGraphUserPurpose = "user" | "linked" | "shared" | "room" | "equipment" | "others" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphWorkingHours = {
  daysOfWeek?: ReadonlyArray<(OutlookGraphSchemaMicrosoftGraphDayOfWeek | {} | null)>;
  endTime?: string | null;
  startTime?: string | null;
  timeZone?: (OutlookGraphSchemaMicrosoftGraphTimeZoneBase | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPrinterShare = (OutlookGraphSchemaMicrosoftGraphPrinterBase & {
  allowAllUsers?: boolean;
  createdDateTime?: string;
  viewPoint?: (OutlookGraphSchemaMicrosoftGraphPrinterShareViewpoint | {} | null);
  allowedGroups?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphGroup>;
  allowedUsers?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphUser>;
  printer?: (OutlookGraphSchemaMicrosoftGraphPrinter | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphStatus = "active" | "updated" | "deleted" | "ignored" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphVisualInfo = {
  attribution?: (OutlookGraphSchemaMicrosoftGraphImageInfo | {} | null);
  backgroundColor?: string | null;
  content?: OutlookGraphSchemaJsonValue;
  description?: string | null;
  displayText?: string;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphActivityHistoryItem = (OutlookGraphSchemaMicrosoftGraphEntity & {
  activeDurationSeconds?: number | null;
  createdDateTime?: string | null;
  expirationDateTime?: string | null;
  lastActiveDateTime?: string | null;
  lastModifiedDateTime?: string | null;
  startedDateTime?: string;
  status?: (OutlookGraphSchemaMicrosoftGraphStatus | {} | null);
  userTimezone?: string | null;
  activity?: OutlookGraphSchemaMicrosoftGraphUserActivity;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphCallRecording = (OutlookGraphSchemaMicrosoftGraphEntity & {
  callId?: string | null;
  content?: string | null;
  contentCorrelationId?: string | null;
  createdDateTime?: string | null;
  endDateTime?: string | null;
  meetingId?: string | null;
  meetingOrganizer?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  recordingContentUrl?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphCallTranscript = (OutlookGraphSchemaMicrosoftGraphEntity & {
  callId?: string | null;
  content?: string | null;
  contentCorrelationId?: string | null;
  createdDateTime?: string | null;
  endDateTime?: string | null;
  meetingId?: string | null;
  meetingOrganizer?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  metadataContent?: string | null;
  transcriptContentUrl?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphAgreementAcceptanceState = "accepted" | "declined" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphEmailAuthenticationMethod = (OutlookGraphSchemaMicrosoftGraphAuthenticationMethod & {
  emailAddress?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphExternalAuthenticationMethod = (OutlookGraphSchemaMicrosoftGraphAuthenticationMethod & {
  configurationId?: string;
  displayName?: string;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphFido2AuthenticationMethod = (OutlookGraphSchemaMicrosoftGraphAuthenticationMethod & {
  aaGuid?: string | null;
  attestationCertificates?: ReadonlyArray<string | null>;
  attestationLevel?: (OutlookGraphSchemaMicrosoftGraphAttestationLevel | {} | null);
  displayName?: string | null;
  model?: string | null;
  passkeyType?: (OutlookGraphSchemaMicrosoftGraphPasskeyType | {} | null);
  publicKeyCredential?: (OutlookGraphSchemaMicrosoftGraphWebauthnPublicKeyCredential | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphAuthenticationMethod = (OutlookGraphSchemaMicrosoftGraphEntity & {
  createdDateTime?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphMicrosoftAuthenticatorAuthenticationMethod = (OutlookGraphSchemaMicrosoftGraphAuthenticationMethod & {
  deviceTag?: string | null;
  displayName?: string | null;
  phoneAppVersion?: string | null;
  device?: (OutlookGraphSchemaMicrosoftGraphDevice | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphLongRunningOperation = (OutlookGraphSchemaMicrosoftGraphEntity & {
  createdDateTime?: string | null;
  lastActionDateTime?: string | null;
  resourceLocation?: string | null;
  status?: (OutlookGraphSchemaMicrosoftGraphLongRunningOperationStatus | {} | null);
  statusDetail?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPasswordAuthenticationMethod = (OutlookGraphSchemaMicrosoftGraphAuthenticationMethod & {
  password?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPhoneAuthenticationMethod = (OutlookGraphSchemaMicrosoftGraphAuthenticationMethod & {
  phoneNumber?: string | null;
  phoneType?: (OutlookGraphSchemaMicrosoftGraphAuthenticationPhoneType | {} | null);
  smsSignInState?: (OutlookGraphSchemaMicrosoftGraphAuthenticationMethodSignInState | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPlatformCredentialAuthenticationMethod = (OutlookGraphSchemaMicrosoftGraphAuthenticationMethod & {
  displayName?: string | null;
  keyStrength?: (OutlookGraphSchemaMicrosoftGraphAuthenticationMethodKeyStrength | {} | null);
  platform?: (OutlookGraphSchemaMicrosoftGraphAuthenticationMethodPlatform | {} | null);
  device?: (OutlookGraphSchemaMicrosoftGraphDevice | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphSoftwareOathAuthenticationMethod = (OutlookGraphSchemaMicrosoftGraphAuthenticationMethod & {
  secretKey?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTemporaryAccessPassAuthenticationMethod = (OutlookGraphSchemaMicrosoftGraphAuthenticationMethod & {
  isUsable?: boolean | null;
  isUsableOnce?: boolean | null;
  lifetimeInMinutes?: number | null;
  methodUsabilityReason?: string | null;
  startDateTime?: string | null;
  temporaryAccessPass?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWindowsHelloForBusinessAuthenticationMethod = (OutlookGraphSchemaMicrosoftGraphAuthenticationMethod & {
  displayName?: string | null;
  keyStrength?: (OutlookGraphSchemaMicrosoftGraphAuthenticationMethodKeyStrength | {} | null);
  device?: (OutlookGraphSchemaMicrosoftGraphDevice | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphOnlineMeetingProviderType = "unknown" | "skypeForBusiness" | "skypeForConsumer" | "teamsForBusiness";

export type OutlookGraphSchemaMicrosoftGraphCalendarColor = "auto" | "lightBlue" | "lightGreen" | "lightOrange" | "lightGray" | "lightYellow" | "lightTeal" | "lightPink" | "lightBrown" | "lightRed" | "maxColor";

export type OutlookGraphSchemaMicrosoftGraphCalendarPermission = (OutlookGraphSchemaMicrosoftGraphEntity & {
  allowedRoles?: ReadonlyArray<(OutlookGraphSchemaMicrosoftGraphCalendarRoleType | {} | null)>;
  emailAddress?: (OutlookGraphSchemaMicrosoftGraphEmailAddress | {} | null);
  isInsideOrganization?: boolean | null;
  isRemovable?: boolean | null;
  role?: (OutlookGraphSchemaMicrosoftGraphCalendarRoleType | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphAttendee = (OutlookGraphSchemaMicrosoftGraphAttendeeBase & {
  proposedNewTime?: (OutlookGraphSchemaMicrosoftGraphTimeSlot | {} | null);
  status?: (OutlookGraphSchemaMicrosoftGraphResponseStatus | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphDateTimeTimeZone = {
  dateTime?: string;
  timeZone?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphLocation = {
  address?: (OutlookGraphSchemaMicrosoftGraphPhysicalAddress | {} | null);
  coordinates?: (OutlookGraphSchemaMicrosoftGraphOutlookGeoCoordinates | {} | null);
  displayName?: string | null;
  locationEmailAddress?: string | null;
  locationType?: (OutlookGraphSchemaMicrosoftGraphLocationType | {} | null);
  locationUri?: string | null;
  uniqueId?: string | null;
  uniqueIdType?: (OutlookGraphSchemaMicrosoftGraphLocationUniqueIdType | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphOnlineMeetingInfo = {
  conferenceId?: string | null;
  joinUrl?: string | null;
  phones?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPhone>;
  quickDial?: string | null;
  tollFreeNumbers?: ReadonlyArray<string | null>;
  tollNumber?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPatternedRecurrence = {
  pattern?: (OutlookGraphSchemaMicrosoftGraphRecurrencePattern | {} | null);
  range?: (OutlookGraphSchemaMicrosoftGraphRecurrenceRange | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphResponseStatus = {
  response?: (OutlookGraphSchemaMicrosoftGraphResponseType | {} | null);
  time?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphSensitivity = "normal" | "personal" | "private" | "confidential";

export type OutlookGraphSchemaMicrosoftGraphFreeBusyStatus = "unknown" | "free" | "tentative" | "busy" | "oof" | "workingElsewhere";

export type OutlookGraphSchemaMicrosoftGraphEventType = "singleInstance" | "occurrence" | "exception" | "seriesMaster";

export type OutlookGraphSchemaMicrosoftGraphChatType = "oneOnOne" | "group" | "meeting" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphMigrationMode = "inProgress" | "completed" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphTeamworkOnlineMeetingInfo = {
  calendarEventId?: string | null;
  joinWebUrl?: string | null;
  organizer?: (OutlookGraphSchemaMicrosoftGraphTeamworkUserIdentity | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphChatViewpoint = {
  isHidden?: boolean | null;
  lastMessageReadDateTime?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTeamsAppInstallation = (OutlookGraphSchemaMicrosoftGraphEntity & {
  consentedPermissionSet?: (OutlookGraphSchemaMicrosoftGraphTeamsAppPermissionSet | {} | null);
  teamsApp?: (OutlookGraphSchemaMicrosoftGraphTeamsApp | {} | null);
  teamsAppDefinition?: (OutlookGraphSchemaMicrosoftGraphTeamsAppDefinition | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphChatMessageInfo = (OutlookGraphSchemaMicrosoftGraphEntity & {
  body?: (OutlookGraphSchemaMicrosoftGraphItemBody | {} | null);
  createdDateTime?: string | null;
  eventDetail?: (OutlookGraphSchemaMicrosoftGraphEventMessageDetail | {} | null);
  from?: (OutlookGraphSchemaMicrosoftGraphChatMessageFromIdentitySet | {} | null);
  isDeleted?: boolean | null;
  messageType?: OutlookGraphSchemaMicrosoftGraphChatMessageType;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphConversationMember = (OutlookGraphSchemaMicrosoftGraphEntity & {
  displayName?: string | null;
  roles?: ReadonlyArray<string | null>;
  visibleHistoryStartDateTime?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphChatMessage = (OutlookGraphSchemaMicrosoftGraphEntity & {
  attachments?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphChatMessageAttachment>;
  body?: OutlookGraphSchemaMicrosoftGraphItemBody;
  channelIdentity?: (OutlookGraphSchemaMicrosoftGraphChannelIdentity | {} | null);
  chatId?: string | null;
  createdDateTime?: string | null;
  deletedDateTime?: string | null;
  etag?: string | null;
  eventDetail?: (OutlookGraphSchemaMicrosoftGraphEventMessageDetail | {} | null);
  from?: (OutlookGraphSchemaMicrosoftGraphChatMessageFromIdentitySet | {} | null);
  importance?: OutlookGraphSchemaMicrosoftGraphChatMessageImportance;
  lastEditedDateTime?: string | null;
  lastModifiedDateTime?: string | null;
  locale?: string;
  mentions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphChatMessageMention>;
  messageHistory?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphChatMessageHistoryItem>;
  messageType?: OutlookGraphSchemaMicrosoftGraphChatMessageType;
  policyViolation?: (OutlookGraphSchemaMicrosoftGraphChatMessagePolicyViolation | {} | null);
  reactions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphChatMessageReaction>;
  replyToId?: string | null;
  subject?: string | null;
  summary?: string | null;
  webUrl?: string | null;
  hostedContents?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphChatMessageHostedContent>;
  replies?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphChatMessage>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPinnedChatMessageInfo = (OutlookGraphSchemaMicrosoftGraphEntity & {
  message?: (OutlookGraphSchemaMicrosoftGraphChatMessage | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTeamsTab = (OutlookGraphSchemaMicrosoftGraphEntity & {
  configuration?: (OutlookGraphSchemaMicrosoftGraphTeamsTabConfiguration | {} | null);
  displayName?: string | null;
  webUrl?: string | null;
  teamsApp?: (OutlookGraphSchemaMicrosoftGraphTeamsApp | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTargetedChatMessage = (OutlookGraphSchemaMicrosoftGraphChatMessage & {
  recipient?: (OutlookGraphSchemaMicrosoftGraphIdentity | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphCloudClipboardItem = (OutlookGraphSchemaMicrosoftGraphEntity & {
  createdDateTime?: string;
  expirationDateTime?: string;
  lastModifiedDateTime?: string | null;
  payloads?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphCloudClipboardItemPayload>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphCloudPcProvisioningType = "dedicated" | "shared" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphPhysicalAddress = {
  city?: string | null;
  countryOrRegion?: string | null;
  postalCode?: string | null;
  state?: string | null;
  street?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphDataSecurityAndGovernance = (OutlookGraphSchemaMicrosoftGraphEntity & {
  sensitivityLabels?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSensitivityLabel>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphActivitiesContainer = (OutlookGraphSchemaMicrosoftGraphEntity & {
  contentActivities?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphContentActivity>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphUserProtectionScopeContainer = (OutlookGraphSchemaMicrosoftGraphEntity & {
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphBaseItem = (OutlookGraphSchemaMicrosoftGraphEntity & {
  createdBy?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  createdDateTime?: string;
  description?: string | null;
  eTag?: string | null;
  lastModifiedBy?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  lastModifiedDateTime?: string;
  name?: string | null;
  parentReference?: (OutlookGraphSchemaMicrosoftGraphItemReference | {} | null);
  webUrl?: string | null;
  createdByUser?: (OutlookGraphSchemaMicrosoftGraphUser | {} | null);
  lastModifiedByUser?: (OutlookGraphSchemaMicrosoftGraphUser | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphIdentitySet = {
  application?: (OutlookGraphSchemaMicrosoftGraphIdentity | {} | null);
  device?: (OutlookGraphSchemaMicrosoftGraphIdentity | {} | null);
  user?: (OutlookGraphSchemaMicrosoftGraphIdentity | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphQuota = {
  deleted?: number | null;
  remaining?: number | null;
  state?: string | null;
  storagePlanInformation?: (OutlookGraphSchemaMicrosoftGraphStoragePlanInformation | {} | null);
  total?: number | null;
  used?: number | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphSharepointIds = {
  listId?: string | null;
  listItemId?: string | null;
  listItemUniqueId?: string | null;
  siteId?: string | null;
  siteUrl?: string | null;
  tenantId?: string | null;
  webId?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphSystemFacet = {
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphDriveItem = (OutlookGraphSchemaMicrosoftGraphBaseItem & {
  audio?: (OutlookGraphSchemaMicrosoftGraphAudio | {} | null);
  bundle?: (OutlookGraphSchemaMicrosoftGraphBundle | {} | null);
  content?: string | null;
  cTag?: string | null;
  deleted?: (OutlookGraphSchemaMicrosoftGraphDeleted | {} | null);
  file?: (OutlookGraphSchemaMicrosoftGraphFile | {} | null);
  fileSystemInfo?: (OutlookGraphSchemaMicrosoftGraphFileSystemInfo | {} | null);
  folder?: (OutlookGraphSchemaMicrosoftGraphFolder | {} | null);
  image?: (OutlookGraphSchemaMicrosoftGraphImage | {} | null);
  location?: (OutlookGraphSchemaMicrosoftGraphGeoCoordinates | {} | null);
  malware?: (OutlookGraphSchemaMicrosoftGraphMalware | {} | null);
  package?: (OutlookGraphSchemaMicrosoftGraphPackage | {} | null);
  pendingOperations?: (OutlookGraphSchemaMicrosoftGraphPendingOperations | {} | null);
  photo?: (OutlookGraphSchemaMicrosoftGraphPhoto | {} | null);
  publication?: (OutlookGraphSchemaMicrosoftGraphPublicationFacet | {} | null);
  remoteItem?: (OutlookGraphSchemaMicrosoftGraphRemoteItem | {} | null);
  root?: (OutlookGraphSchemaMicrosoftGraphRoot | {} | null);
  searchResult?: (OutlookGraphSchemaMicrosoftGraphSearchResult | {} | null);
  shared?: (OutlookGraphSchemaMicrosoftGraphShared | {} | null);
  sharepointIds?: (OutlookGraphSchemaMicrosoftGraphSharepointIds | {} | null);
  size?: number | null;
  specialFolder?: (OutlookGraphSchemaMicrosoftGraphSpecialFolder | {} | null);
  video?: (OutlookGraphSchemaMicrosoftGraphVideo | {} | null);
  webDavUrl?: string | null;
  analytics?: (OutlookGraphSchemaMicrosoftGraphItemAnalytics | {} | null);
  children?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDriveItem>;
  listItem?: (OutlookGraphSchemaMicrosoftGraphListItem | {} | null);
  permissions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPermission>;
  retentionLabel?: (OutlookGraphSchemaMicrosoftGraphItemRetentionLabel | {} | null);
  subscriptions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSubscription>;
  thumbnails?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphThumbnailSet>;
  versions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDriveItemVersion>;
  workbook?: (OutlookGraphSchemaMicrosoftGraphWorkbook | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphList = (OutlookGraphSchemaMicrosoftGraphBaseItem & {
  displayName?: string | null;
  list?: (OutlookGraphSchemaMicrosoftGraphListInfo | {} | null);
  sharepointIds?: (OutlookGraphSchemaMicrosoftGraphSharepointIds | {} | null);
  system?: (OutlookGraphSchemaMicrosoftGraphSystemFacet | {} | null);
  columns?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphColumnDefinition>;
  contentTypes?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphContentType>;
  drive?: (OutlookGraphSchemaMicrosoftGraphDrive | {} | null);
  items?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphListItem>;
  operations?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRichLongRunningOperation>;
  subscriptions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSubscription>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphEngagementRole = (OutlookGraphSchemaMicrosoftGraphEntity & {
  displayName?: string;
  members?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphEngagementRoleMember>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphLearningCourseActivity = (OutlookGraphSchemaMicrosoftGraphEntity & {
  completedDateTime?: string | null;
  completionPercentage?: number | null;
  externalcourseActivityId?: string | null;
  learnerUserId?: string;
  learningContentId?: string;
  learningProviderId?: string | null;
  status?: (OutlookGraphSchemaMicrosoftGraphCourseStatus | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPublicError = {
  code?: string | null;
  details?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPublicErrorDetail>;
  innerError?: (OutlookGraphSchemaMicrosoftGraphPublicInnerError | {} | null);
  message?: string | null;
  target?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphRoot = {
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphSiteCollection = {
  archivalDetails?: (OutlookGraphSchemaMicrosoftGraphSiteArchivalDetails | {} | null);
  dataLocationCode?: string | null;
  hostname?: string | null;
  root?: (OutlookGraphSchemaMicrosoftGraphRoot | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphItemAnalytics = (OutlookGraphSchemaMicrosoftGraphEntity & {
  allTime?: (OutlookGraphSchemaMicrosoftGraphItemActivityStat | {} | null);
  itemActivityStats?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphItemActivityStat>;
  lastSevenDays?: (OutlookGraphSchemaMicrosoftGraphItemActivityStat | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphColumnDefinition = (OutlookGraphSchemaMicrosoftGraphEntity & {
  boolean?: (OutlookGraphSchemaMicrosoftGraphBooleanColumn | {} | null);
  calculated?: (OutlookGraphSchemaMicrosoftGraphCalculatedColumn | {} | null);
  choice?: (OutlookGraphSchemaMicrosoftGraphChoiceColumn | {} | null);
  columnGroup?: string | null;
  contentApprovalStatus?: (OutlookGraphSchemaMicrosoftGraphContentApprovalStatusColumn | {} | null);
  currency?: (OutlookGraphSchemaMicrosoftGraphCurrencyColumn | {} | null);
  dateTime?: (OutlookGraphSchemaMicrosoftGraphDateTimeColumn | {} | null);
  defaultValue?: (OutlookGraphSchemaMicrosoftGraphDefaultColumnValue | {} | null);
  description?: string | null;
  displayName?: string | null;
  enforceUniqueValues?: boolean | null;
  geolocation?: (OutlookGraphSchemaMicrosoftGraphGeolocationColumn | {} | null);
  hidden?: boolean | null;
  hyperlinkOrPicture?: (OutlookGraphSchemaMicrosoftGraphHyperlinkOrPictureColumn | {} | null);
  indexed?: boolean | null;
  isDeletable?: boolean | null;
  isReorderable?: boolean | null;
  isSealed?: boolean | null;
  lookup?: (OutlookGraphSchemaMicrosoftGraphLookupColumn | {} | null);
  name?: string | null;
  number?: (OutlookGraphSchemaMicrosoftGraphNumberColumn | {} | null);
  personOrGroup?: (OutlookGraphSchemaMicrosoftGraphPersonOrGroupColumn | {} | null);
  propagateChanges?: boolean | null;
  readOnly?: boolean | null;
  required?: boolean | null;
  sourceContentType?: (OutlookGraphSchemaMicrosoftGraphContentTypeInfo | {} | null);
  term?: (OutlookGraphSchemaMicrosoftGraphTermColumn | {} | null);
  text?: (OutlookGraphSchemaMicrosoftGraphTextColumn | {} | null);
  thumbnail?: (OutlookGraphSchemaMicrosoftGraphThumbnailColumn | {} | null);
  type?: (OutlookGraphSchemaMicrosoftGraphColumnTypes | {} | null);
  validation?: (OutlookGraphSchemaMicrosoftGraphColumnValidation | {} | null);
  sourceColumn?: (OutlookGraphSchemaMicrosoftGraphColumnDefinition | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphContentType = (OutlookGraphSchemaMicrosoftGraphEntity & {
  associatedHubsUrls?: ReadonlyArray<string | null>;
  description?: string | null;
  documentSet?: (OutlookGraphSchemaMicrosoftGraphDocumentSet | {} | null);
  documentTemplate?: (OutlookGraphSchemaMicrosoftGraphDocumentSetContent | {} | null);
  group?: string | null;
  hidden?: boolean | null;
  inheritedFrom?: (OutlookGraphSchemaMicrosoftGraphItemReference | {} | null);
  isBuiltIn?: boolean | null;
  name?: string | null;
  order?: (OutlookGraphSchemaMicrosoftGraphContentTypeOrder | {} | null);
  parentId?: string | null;
  propagateChanges?: boolean | null;
  readOnly?: boolean | null;
  sealed?: boolean | null;
  base?: (OutlookGraphSchemaMicrosoftGraphContentType | {} | null);
  baseTypes?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphContentType>;
  columnLinks?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphColumnLink>;
  columnPositions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphColumnDefinition>;
  columns?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphColumnDefinition>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphRichLongRunningOperation = (OutlookGraphSchemaMicrosoftGraphLongRunningOperation & {
  error?: (OutlookGraphSchemaMicrosoftGraphPublicError | {} | null);
  percentageComplete?: number | null;
  resourceId?: string | null;
  type?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphBaseSitePage = (OutlookGraphSchemaMicrosoftGraphBaseItem & {
  pageLayout?: (OutlookGraphSchemaMicrosoftGraphPageLayoutType | {} | null);
  publishingState?: (OutlookGraphSchemaMicrosoftGraphPublicationFacet | {} | null);
  title?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPermission = (OutlookGraphSchemaMicrosoftGraphEntity & {
  expirationDateTime?: string | null;
  grantedTo?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  grantedToIdentities?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphIdentitySet>;
  grantedToIdentitiesV2?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSharePointIdentitySet>;
  grantedToV2?: (OutlookGraphSchemaMicrosoftGraphSharePointIdentitySet | {} | null);
  hasPassword?: boolean | null;
  inheritedFrom?: (OutlookGraphSchemaMicrosoftGraphItemReference | {} | null);
  invitation?: (OutlookGraphSchemaMicrosoftGraphSharingInvitation | {} | null);
  link?: (OutlookGraphSchemaMicrosoftGraphSharingLink | {} | null);
  roles?: ReadonlyArray<string | null>;
  shareId?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTermStoreStore = (OutlookGraphSchemaMicrosoftGraphEntity & {
  defaultLanguageTag?: string;
  languageTags?: ReadonlyArray<string>;
  groups?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTermStoreGroup>;
  sets?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTermStoreSet>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphInferenceClassificationOverride = (OutlookGraphSchemaMicrosoftGraphEntity & {
  classifyAs?: (OutlookGraphSchemaMicrosoftGraphInferenceClassificationType | {} | null);
  senderEmailAddress?: (OutlookGraphSchemaMicrosoftGraphEmailAddress | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphOfficeGraphInsights = (OutlookGraphSchemaMicrosoftGraphEntity & {
  shared?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSharedInsight>;
  trending?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTrending>;
  used?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphUsedInsight>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTeamFunSettings = {
  allowCustomMemes?: boolean | null;
  allowGiphy?: boolean | null;
  allowStickersAndMemes?: boolean | null;
  giphyContentRating?: (OutlookGraphSchemaMicrosoftGraphGiphyRatingType | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTeamGuestSettings = {
  allowCreateUpdateChannels?: boolean | null;
  allowDeleteChannels?: boolean | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTeamMemberSettings = {
  allowAddRemoveApps?: boolean | null;
  allowCreatePrivateChannels?: boolean | null;
  allowCreateUpdateChannels?: boolean | null;
  allowCreateUpdateRemoveConnectors?: boolean | null;
  allowCreateUpdateRemoveTabs?: boolean | null;
  allowDeleteChannels?: boolean | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTeamMessagingSettings = {
  allowChannelMentions?: boolean | null;
  allowOwnerDeleteMessages?: boolean | null;
  allowTeamMentions?: boolean | null;
  allowUserDeleteMessages?: boolean | null;
  allowUserEditMessages?: boolean | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTeamSpecialization = "none" | "educationStandard" | "educationClass" | "educationProfessionalLearningCommunity" | "educationStaff" | "healthcareStandard" | "healthcareCareCoordination" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphTeamSummary = {
  guestsCount?: number | null;
  membersCount?: number | null;
  ownersCount?: number | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTeamVisibilityType = "private" | "public" | "hiddenMembership" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphChannel = (OutlookGraphSchemaMicrosoftGraphEntity & {
  createdDateTime?: string | null;
  description?: string | null;
  displayName?: string;
  email?: string | null;
  isArchived?: boolean | null;
  isFavoriteByDefault?: boolean | null;
  layoutType?: (OutlookGraphSchemaMicrosoftGraphChannelLayoutType | {} | null);
  membershipType?: (OutlookGraphSchemaMicrosoftGraphChannelMembershipType | {} | null);
  migrationMode?: (OutlookGraphSchemaMicrosoftGraphMigrationMode | {} | null);
  originalCreatedDateTime?: string | null;
  summary?: (OutlookGraphSchemaMicrosoftGraphChannelSummary | {} | null);
  tenantId?: string | null;
  webUrl?: string | null;
  allMembers?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphConversationMember>;
  enabledApps?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTeamsApp>;
  filesFolder?: (OutlookGraphSchemaMicrosoftGraphDriveItem | {} | null);
  members?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphConversationMember>;
  messages?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphChatMessage>;
  sharedWithTeams?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSharedWithChannelTeamInfo>;
  tabs?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTeamsTab>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphGroup = (OutlookGraphSchemaMicrosoftGraphDirectoryObject & {
  allowExternalSenders?: boolean | null;
  assignedLabels?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphAssignedLabel>;
  assignedLicenses?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphAssignedLicense>;
  autoSubscribeNewMembers?: boolean | null;
  classification?: string | null;
  createdDateTime?: string | null;
  description?: string | null;
  displayName?: string | null;
  expirationDateTime?: string | null;
  groupTypes?: ReadonlyArray<string>;
  hasMembersWithLicenseErrors?: boolean | null;
  hideFromAddressLists?: boolean | null;
  hideFromOutlookClients?: boolean | null;
  infoCatalogs?: ReadonlyArray<string>;
  isArchived?: boolean | null;
  isAssignableToRole?: boolean | null;
  isManagementRestricted?: boolean | null;
  isSubscribedByMail?: boolean | null;
  licenseProcessingState?: (OutlookGraphSchemaMicrosoftGraphLicenseProcessingState | {} | null);
  mail?: string | null;
  mailEnabled?: boolean | null;
  mailNickname?: string | null;
  membershipRule?: string | null;
  membershipRuleProcessingState?: string | null;
  onPremisesDomainName?: string | null;
  onPremisesLastSyncDateTime?: string | null;
  onPremisesNetBiosName?: string | null;
  onPremisesProvisioningErrors?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphOnPremisesProvisioningError>;
  onPremisesSamAccountName?: string | null;
  onPremisesSecurityIdentifier?: string | null;
  onPremisesSyncEnabled?: boolean | null;
  preferredDataLocation?: string | null;
  preferredLanguage?: string | null;
  proxyAddresses?: ReadonlyArray<string>;
  renewedDateTime?: string | null;
  resourceBehaviorOptions?: ReadonlyArray<string>;
  resourceProvisioningOptions?: ReadonlyArray<string>;
  securityEnabled?: boolean | null;
  securityIdentifier?: string | null;
  serviceProvisioningErrors?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphServiceProvisioningError>;
  theme?: string | null;
  uniqueName?: string | null;
  unseenCount?: number | null;
  visibility?: string | null;
  welcomeMessageEnabled?: boolean | null;
  acceptedSenders?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDirectoryObject>;
  appRoleAssignments?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphAppRoleAssignment>;
  calendar?: (OutlookGraphSchemaMicrosoftGraphCalendar | {} | null);
  calendarView?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphEvent>;
  conversations?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphConversation>;
  createdOnBehalfOf?: (OutlookGraphSchemaMicrosoftGraphDirectoryObject | {} | null);
  drive?: (OutlookGraphSchemaMicrosoftGraphDrive | {} | null);
  drives?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDrive>;
  events?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphEvent>;
  extensions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphExtension>;
  groupLifecyclePolicies?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphGroupLifecyclePolicy>;
  memberOf?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDirectoryObject>;
  members?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDirectoryObject>;
  membersWithLicenseErrors?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDirectoryObject>;
  onenote?: (OutlookGraphSchemaMicrosoftGraphOnenote | {} | null);
  onPremisesSyncBehavior?: (OutlookGraphSchemaMicrosoftGraphOnPremisesSyncBehavior | {} | null);
  owners?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDirectoryObject>;
  permissionGrants?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphResourceSpecificPermissionGrant>;
  photo?: (OutlookGraphSchemaMicrosoftGraphProfilePhoto | {} | null);
  photos?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphProfilePhoto>;
  planner?: (OutlookGraphSchemaMicrosoftGraphPlannerGroup | {} | null);
  rejectedSenders?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDirectoryObject>;
  settings?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphGroupSetting>;
  sites?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSite>;
  team?: (OutlookGraphSchemaMicrosoftGraphTeam | {} | null);
  threads?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphConversationThread>;
  transitiveMemberOf?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDirectoryObject>;
  transitiveMembers?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDirectoryObject>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTeamsAsyncOperation = (OutlookGraphSchemaMicrosoftGraphEntity & {
  attemptsCount?: number;
  createdDateTime?: string;
  error?: (OutlookGraphSchemaMicrosoftGraphOperationError | {} | null);
  lastActionDateTime?: string;
  operationType?: OutlookGraphSchemaMicrosoftGraphTeamsAsyncOperationType;
  status?: OutlookGraphSchemaMicrosoftGraphTeamsAsyncOperationStatus;
  targetResourceId?: string | null;
  targetResourceLocation?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphSchedule = (OutlookGraphSchemaMicrosoftGraphEntity & {
  enabled?: boolean | null;
  isActivitiesIncludedWhenCopyingShiftsEnabled?: boolean | null;
  offerShiftRequestsEnabled?: boolean | null;
  openShiftsEnabled?: boolean | null;
  provisionStatus?: (OutlookGraphSchemaMicrosoftGraphOperationStatus | {} | null);
  provisionStatusCode?: string | null;
  startDayOfWeek?: (OutlookGraphSchemaMicrosoftGraphDayOfWeek | {} | null);
  swapShiftsRequestsEnabled?: boolean | null;
  timeClockEnabled?: boolean | null;
  timeClockSettings?: (OutlookGraphSchemaMicrosoftGraphTimeClockSettings | {} | null);
  timeOffRequestsEnabled?: boolean | null;
  timeZone?: string | null;
  workforceIntegrationIds?: ReadonlyArray<string | null>;
  dayNotes?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDayNote>;
  offerShiftRequests?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphOfferShiftRequest>;
  openShiftChangeRequests?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphOpenShiftChangeRequest>;
  openShifts?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphOpenShift>;
  schedulingGroups?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSchedulingGroup>;
  shifts?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphShift>;
  swapShiftsChangeRequests?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSwapShiftsChangeRequest>;
  timeCards?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTimeCard>;
  timeOffReasons?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTimeOffReason>;
  timeOffRequests?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTimeOffRequest>;
  timesOff?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTimeOff>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTeamworkTag = (OutlookGraphSchemaMicrosoftGraphEntity & {
  description?: string | null;
  displayName?: string | null;
  memberCount?: number | null;
  tagType?: (OutlookGraphSchemaMicrosoftGraphTeamworkTagType | {} | null);
  teamId?: string | null;
  members?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTeamworkTagMember>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTeamsTemplate = (OutlookGraphSchemaMicrosoftGraphEntity & {
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphServicePlanInfo = {
  appliesTo?: string | null;
  provisioningStatus?: string | null;
  servicePlanId?: string | null;
  servicePlanName?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphMobileAppIdentifier = {
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphManagedAppFlaggedReason = "none" | "rootedDevice";

export type OutlookGraphSchemaMicrosoftGraphManagedAppPolicy = (OutlookGraphSchemaMicrosoftGraphEntity & {
  createdDateTime?: string;
  description?: string | null;
  displayName?: string;
  lastModifiedDateTime?: string;
  version?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphManagedAppOperation = (OutlookGraphSchemaMicrosoftGraphEntity & {
  displayName?: string | null;
  lastModifiedDateTime?: string;
  state?: string | null;
  version?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphComplianceState = "unknown" | "compliant" | "noncompliant" | "conflict" | "error" | "inGracePeriod" | "configManager";

export type OutlookGraphSchemaMicrosoftGraphConfigurationManagerClientEnabledFeatures = {
  compliancePolicy?: boolean;
  deviceConfiguration?: boolean;
  inventory?: boolean;
  modernApps?: boolean;
  resourceAccess?: boolean;
  windowsUpdateForBusiness?: boolean;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphDeviceActionResult = {
  actionName?: string | null;
  actionState?: OutlookGraphSchemaMicrosoftGraphActionState;
  lastUpdatedDateTime?: string;
  startDateTime?: string;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphDeviceEnrollmentType = "unknown" | "userEnrollment" | "deviceEnrollmentManager" | "appleBulkWithUser" | "appleBulkWithoutUser" | "windowsAzureADJoin" | "windowsBulkUserless" | "windowsAutoEnrollment" | "windowsBulkAzureDomainJoin" | "windowsCoManagement" | "windowsAzureADJoinUsingDeviceAuth" | "appleUserEnrollment" | "appleUserEnrollmentWithServiceAccount" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphDeviceHealthAttestationState = {
  attestationIdentityKey?: string | null;
  bitLockerStatus?: string | null;
  bootAppSecurityVersion?: string | null;
  bootDebugging?: string | null;
  bootManagerSecurityVersion?: string | null;
  bootManagerVersion?: string | null;
  bootRevisionListInfo?: string | null;
  codeIntegrity?: string | null;
  codeIntegrityCheckVersion?: string | null;
  codeIntegrityPolicy?: string | null;
  contentNamespaceUrl?: string | null;
  contentVersion?: string | null;
  dataExcutionPolicy?: string | null;
  deviceHealthAttestationStatus?: string | null;
  earlyLaunchAntiMalwareDriverProtection?: string | null;
  healthAttestationSupportedStatus?: string | null;
  healthStatusMismatchInfo?: string | null;
  issuedDateTime?: string;
  lastUpdateDateTime?: string | null;
  operatingSystemKernelDebugging?: string | null;
  operatingSystemRevListInfo?: string | null;
  pcr0?: string | null;
  pcrHashAlgorithm?: string | null;
  resetCount?: number;
  restartCount?: number;
  safeMode?: string | null;
  secureBoot?: string | null;
  secureBootConfigurationPolicyFingerPrint?: string | null;
  testSigning?: string | null;
  tpmVersion?: string | null;
  virtualSecureMode?: string | null;
  windowsPE?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphDeviceRegistrationState = "notRegistered" | "registered" | "revoked" | "keyConflict" | "approvalPending" | "certificateReset" | "notRegisteredPendingEnrollment" | "unknown";

export type OutlookGraphSchemaMicrosoftGraphDeviceManagementExchangeAccessState = "none" | "unknown" | "allowed" | "blocked" | "quarantined";

export type OutlookGraphSchemaMicrosoftGraphDeviceManagementExchangeAccessStateReason = "none" | "unknown" | "exchangeGlobalRule" | "exchangeIndividualRule" | "exchangeDeviceRule" | "exchangeUpgrade" | "exchangeMailboxPolicy" | "other" | "compliant" | "notCompliant" | "notEnrolled" | "unknownLocation" | "mfaRequired" | "azureADBlockDueToAccessPolicy" | "compromisedPassword" | "deviceNotKnownWithManagedApp";

export type OutlookGraphSchemaMicrosoftGraphManagedDeviceOwnerType = "unknown" | "company" | "personal" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphManagementAgentType = "eas" | "mdm" | "easMdm" | "intuneClient" | "easIntuneClient" | "configurationManagerClient" | "configurationManagerClientMdm" | "configurationManagerClientMdmEas" | "unknown" | "jamf" | "googleCloudDevicePolicyController" | "microsoft365ManagedMdm" | "msSense";

export type OutlookGraphSchemaMicrosoftGraphManagementState = "managed" | "retirePending" | "retireFailed" | "wipePending" | "wipeFailed" | "unhealthy" | "deletePending" | "retireIssued" | "wipeIssued" | "wipeCanceled" | "retireCanceled" | "discovered" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphManagedDevicePartnerReportedHealthState = "unknown" | "activated" | "deactivated" | "secured" | "lowSeverity" | "mediumSeverity" | "highSeverity" | "unresponsive" | "compromised" | "misconfigured";

export type OutlookGraphSchemaMicrosoftGraphDeviceCategory = (OutlookGraphSchemaMicrosoftGraphEntity & {
  description?: string | null;
  displayName?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphDeviceCompliancePolicyState = (OutlookGraphSchemaMicrosoftGraphEntity & {
  displayName?: string | null;
  platformType?: OutlookGraphSchemaMicrosoftGraphPolicyPlatformType;
  settingCount?: number;
  settingStates?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDeviceCompliancePolicySettingState>;
  state?: OutlookGraphSchemaMicrosoftGraphComplianceStatus;
  version?: number;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphDeviceConfigurationState = (OutlookGraphSchemaMicrosoftGraphEntity & {
  displayName?: string | null;
  platformType?: OutlookGraphSchemaMicrosoftGraphPolicyPlatformType;
  settingCount?: number;
  settingStates?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDeviceConfigurationSettingState>;
  state?: OutlookGraphSchemaMicrosoftGraphComplianceStatus;
  version?: number;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphDeviceLogCollectionResponse = (OutlookGraphSchemaMicrosoftGraphEntity & {
  enrolledByUser?: string | null;
  expirationDateTimeUTC?: string | null;
  initiatedByUserPrincipalName?: string | null;
  managedDeviceId?: string;
  receivedDateTimeUTC?: string | null;
  requestedDateTimeUTC?: string | null;
  sizeInKB?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  status?: OutlookGraphSchemaMicrosoftGraphAppLogUploadState;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWindowsProtectionState = (OutlookGraphSchemaMicrosoftGraphEntity & {
  antiMalwareVersion?: string | null;
  controlledConfigurationEnabled?: boolean | null;
  deviceState?: (OutlookGraphSchemaMicrosoftGraphWindowsDeviceHealthState | {} | null);
  engineVersion?: string | null;
  fullScanOverdue?: boolean | null;
  fullScanRequired?: boolean | null;
  isVirtualMachine?: boolean | null;
  lastFullScanDateTime?: string | null;
  lastFullScanSignatureVersion?: string | null;
  lastQuickScanDateTime?: string | null;
  lastQuickScanSignatureVersion?: string | null;
  lastReportedDateTime?: string | null;
  malwareProtectionEnabled?: boolean | null;
  networkInspectionSystemEnabled?: boolean | null;
  productStatus?: (OutlookGraphSchemaMicrosoftGraphWindowsDefenderProductStatus | {} | null);
  quickScanOverdue?: boolean | null;
  realTimeProtectionEnabled?: boolean | null;
  rebootRequired?: boolean | null;
  signatureUpdateOverdue?: boolean | null;
  signatureVersion?: string | null;
  tamperProtectionEnabled?: boolean | null;
  detectedMalwareState?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWindowsDeviceMalwareState>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphNotebook = (OutlookGraphSchemaMicrosoftGraphOnenoteEntityHierarchyModel & {
  isDefault?: boolean | null;
  isShared?: boolean | null;
  links?: (OutlookGraphSchemaMicrosoftGraphNotebookLinks | {} | null);
  sectionGroupsUrl?: string | null;
  sectionsUrl?: string | null;
  userRole?: (OutlookGraphSchemaMicrosoftGraphOnenoteUserRole | {} | null);
  sectionGroups?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSectionGroup>;
  sections?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphOnenoteSection>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphOnenoteOperation = (OutlookGraphSchemaMicrosoftGraphOperation & {
  error?: (OutlookGraphSchemaMicrosoftGraphOnenoteOperationError | {} | null);
  percentComplete?: string | null;
  resourceId?: string | null;
  resourceLocation?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphOnenotePage = (OutlookGraphSchemaMicrosoftGraphOnenoteEntitySchemaObjectModel & {
  content?: string | null;
  contentUrl?: string | null;
  createdByAppId?: string | null;
  lastModifiedDateTime?: string | null;
  level?: number | null;
  links?: (OutlookGraphSchemaMicrosoftGraphPageLinks | {} | null);
  order?: number | null;
  title?: string | null;
  userTags?: ReadonlyArray<string | null>;
  parentNotebook?: (OutlookGraphSchemaMicrosoftGraphNotebook | {} | null);
  parentSection?: (OutlookGraphSchemaMicrosoftGraphOnenoteSection | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphOnenoteResource = (OutlookGraphSchemaMicrosoftGraphOnenoteEntityBaseModel & {
  content?: string | null;
  contentUrl?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphSectionGroup = (OutlookGraphSchemaMicrosoftGraphOnenoteEntityHierarchyModel & {
  sectionGroupsUrl?: string | null;
  sectionsUrl?: string | null;
  parentNotebook?: (OutlookGraphSchemaMicrosoftGraphNotebook | {} | null);
  parentSectionGroup?: (OutlookGraphSchemaMicrosoftGraphSectionGroup | {} | null);
  sectionGroups?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSectionGroup>;
  sections?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphOnenoteSection>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphOnenoteSection = (OutlookGraphSchemaMicrosoftGraphOnenoteEntityHierarchyModel & {
  isDefault?: boolean | null;
  links?: (OutlookGraphSchemaMicrosoftGraphSectionLinks | {} | null);
  pagesUrl?: string | null;
  pages?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphOnenotePage>;
  parentNotebook?: (OutlookGraphSchemaMicrosoftGraphNotebook | {} | null);
  parentSectionGroup?: (OutlookGraphSchemaMicrosoftGraphSectionGroup | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphOnlineMeetingBase = (OutlookGraphSchemaMicrosoftGraphEntity & {
  allowAttendeeToEnableCamera?: boolean | null;
  allowAttendeeToEnableMic?: boolean | null;
  allowBreakoutRooms?: boolean | null;
  allowCopyingAndSharingMeetingContent?: boolean | null;
  allowedLobbyAdmitters?: (OutlookGraphSchemaMicrosoftGraphAllowedLobbyAdmitterRoles | {} | null);
  allowedPresenters?: (OutlookGraphSchemaMicrosoftGraphOnlineMeetingPresenters | {} | null);
  allowLiveShare?: (OutlookGraphSchemaMicrosoftGraphMeetingLiveShareOptions | {} | null);
  allowMeetingChat?: (OutlookGraphSchemaMicrosoftGraphMeetingChatMode | {} | null);
  allowParticipantsToChangeName?: boolean | null;
  allowPowerPointSharing?: boolean | null;
  allowRecording?: boolean | null;
  allowTeamworkReactions?: boolean | null;
  allowTranscription?: boolean | null;
  allowWhiteboard?: boolean | null;
  audioConferencing?: (OutlookGraphSchemaMicrosoftGraphAudioConferencing | {} | null);
  chatInfo?: (OutlookGraphSchemaMicrosoftGraphChatInfo | {} | null);
  chatRestrictions?: (OutlookGraphSchemaMicrosoftGraphChatRestrictions | {} | null);
  expiryDateTime?: string | null;
  isEndToEndEncryptionEnabled?: boolean | null;
  isEntryExitAnnounced?: boolean | null;
  joinInformation?: (OutlookGraphSchemaMicrosoftGraphItemBody | {} | null);
  joinMeetingIdSettings?: (OutlookGraphSchemaMicrosoftGraphJoinMeetingIdSettings | {} | null);
  joinWebUrl?: string | null;
  lobbyBypassSettings?: (OutlookGraphSchemaMicrosoftGraphLobbyBypassSettings | {} | null);
  meetingOptionsWebUrl?: string | null;
  meetingSpokenLanguageTag?: string | null;
  recordAutomatically?: boolean | null;
  sensitivityLabelAssignment?: (OutlookGraphSchemaMicrosoftGraphOnlineMeetingSensitivityLabelAssignment | {} | null);
  shareMeetingChatHistoryDefault?: (OutlookGraphSchemaMicrosoftGraphMeetingChatHistoryDefaultMode | {} | null);
  subject?: string | null;
  videoTeleconferenceId?: string | null;
  watermarkProtection?: (OutlookGraphSchemaMicrosoftGraphWatermarkProtectionValues | {} | null);
  attendanceReports?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMeetingAttendanceReport>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphBroadcastMeetingSettings = {
  allowedAudience?: (OutlookGraphSchemaMicrosoftGraphBroadcastMeetingAudience | {} | null);
  captions?: (OutlookGraphSchemaMicrosoftGraphBroadcastMeetingCaptionSettings | {} | null);
  isAttendeeReportEnabled?: boolean | null;
  isQuestionAndAnswerEnabled?: boolean | null;
  isRecordingEnabled?: boolean | null;
  isVideoOnDemandEnabled?: boolean | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphMeetingParticipants = {
  attendees?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMeetingParticipantInfo>;
  organizer?: (OutlookGraphSchemaMicrosoftGraphMeetingParticipantInfo | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPersonType = {
  class?: string | null;
  subclass?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPhone = {
  language?: string | null;
  number?: string | null;
  region?: string | null;
  type?: (OutlookGraphSchemaMicrosoftGraphPhoneType | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphScoredEmailAddress = {
  address?: string | null;
  itemId?: string | null;
  relevanceScore?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  selectionLikelihood?: (OutlookGraphSchemaMicrosoftGraphSelectionLikelihoodInfo | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphWebsite = {
  address?: string | null;
  displayName?: string | null;
  type?: (OutlookGraphSchemaMicrosoftGraphWebsiteType | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPlannerPlan = (OutlookGraphSchemaMicrosoftGraphEntity & {
  container?: (OutlookGraphSchemaMicrosoftGraphPlannerPlanContainer | {} | null);
  createdBy?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  createdDateTime?: string | null;
  owner?: string | null;
  title?: string;
  buckets?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPlannerBucket>;
  details?: (OutlookGraphSchemaMicrosoftGraphPlannerPlanDetails | {} | null);
  tasks?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPlannerTask>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPlannerTask = (OutlookGraphSchemaMicrosoftGraphEntity & {
  activeChecklistItemCount?: number | null;
  appliedCategories?: (OutlookGraphSchemaMicrosoftGraphPlannerAppliedCategories | {} | null);
  assigneePriority?: string | null;
  assignments?: (OutlookGraphSchemaMicrosoftGraphPlannerAssignments | {} | null);
  bucketId?: string | null;
  checklistItemCount?: number | null;
  completedBy?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  completedDateTime?: string | null;
  conversationThreadId?: string | null;
  createdBy?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  createdDateTime?: string | null;
  dueDateTime?: string | null;
  hasDescription?: boolean | null;
  orderHint?: string | null;
  percentComplete?: number | null;
  planId?: string | null;
  previewType?: (OutlookGraphSchemaMicrosoftGraphPlannerPreviewType | {} | null);
  priority?: number | null;
  referenceCount?: number | null;
  startDateTime?: string | null;
  title?: string;
  assignedToTaskBoardFormat?: (OutlookGraphSchemaMicrosoftGraphPlannerAssignedToTaskBoardTaskFormat | {} | null);
  bucketTaskBoardFormat?: (OutlookGraphSchemaMicrosoftGraphPlannerBucketTaskBoardTaskFormat | {} | null);
  details?: (OutlookGraphSchemaMicrosoftGraphPlannerTaskDetails | {} | null);
  progressTaskBoardFormat?: (OutlookGraphSchemaMicrosoftGraphPlannerProgressTaskBoardTaskFormat | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphOutOfOfficeSettings = {
  isOutOfOffice?: boolean | null;
  message?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPresenceStatusMessage = {
  expiryDateTime?: (OutlookGraphSchemaMicrosoftGraphDateTimeTimeZone | {} | null);
  message?: (OutlookGraphSchemaMicrosoftGraphItemBody | {} | null);
  publishedDateTime?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphUserWorkLocation = {
  placeId?: string | null;
  source?: OutlookGraphSchemaMicrosoftGraphWorkLocationSource;
  workLocationType?: OutlookGraphSchemaMicrosoftGraphWorkLocationType;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphIdentity = {
  displayName?: string | null;
  id?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphExchangeSettings = (OutlookGraphSchemaMicrosoftGraphEntity & {
  primaryMailboxId?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphUserInsightsSettings = (OutlookGraphSchemaMicrosoftGraphEntity & {
  isEnabled?: boolean;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphShiftPreferences = (OutlookGraphSchemaMicrosoftGraphChangeTrackedEntity & {
  availability?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphShiftAvailability>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphUserStorage = (OutlookGraphSchemaMicrosoftGraphEntity & {
  quota?: (OutlookGraphSchemaMicrosoftGraphUnifiedStorageQuota | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWindowsSetting = (OutlookGraphSchemaMicrosoftGraphEntity & {
  payloadType?: string | null;
  settingType?: OutlookGraphSchemaMicrosoftGraphWindowsSettingType;
  windowsDeviceId?: string | null;
  instances?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWindowsSettingInstance>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkHoursAndLocationsSetting = (OutlookGraphSchemaMicrosoftGraphEntity & {
  maxSharedWorkLocationDetails?: OutlookGraphSchemaMicrosoftGraphMaxWorkLocationDetails;
  occurrences?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWorkPlanOccurrence>;
  recurrences?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWorkPlanRecurrence>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkingTimeSchedule = (OutlookGraphSchemaMicrosoftGraphEntity & {
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphAssociatedTeamInfo = (OutlookGraphSchemaMicrosoftGraphTeamInfo & {
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphUserScopeTeamsAppInstallation = (OutlookGraphSchemaMicrosoftGraphTeamsAppInstallation & {
  chat?: (OutlookGraphSchemaMicrosoftGraphChat | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTodoTaskList = (OutlookGraphSchemaMicrosoftGraphEntity & {
  displayName?: string | null;
  isOwner?: boolean;
  isShared?: boolean;
  wellknownListName?: OutlookGraphSchemaMicrosoftGraphWellknownListName;
  extensions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphExtension>;
  tasks?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTodoTask>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphODataErrorsErrorDetails = {
  code: string;
  message: string;
  target?: string | null;
};

export type OutlookGraphSchemaMicrosoftGraphODataErrorsInnerError = {
  "request-id"?: string | null;
  "client-request-id"?: string | null;
  date?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphMessageActionFlag = "any" | "call" | "doNotForward" | "followUp" | "fyi" | "forward" | "noResponseNecessary" | "read" | "reply" | "replyToAll" | "review";

export type OutlookGraphSchemaMicrosoftGraphSizeRange = {
  maximumSize?: number | null;
  minimumSize?: number | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphBodyType = "text" | "html";

export type OutlookGraphSchemaMicrosoftGraphFollowupFlagStatus = "notFlagged" | "complete" | "flagged";

export type OutlookGraphSchemaMicrosoftGraphExternalAudienceScope = "none" | "contactsOnly" | "all";

export type OutlookGraphSchemaMicrosoftGraphAutomaticRepliesStatus = "disabled" | "alwaysEnabled" | "scheduled";

export type OutlookGraphSchemaMicrosoftGraphDayOfWeek = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";

export type OutlookGraphSchemaMicrosoftGraphTimeZoneBase = {
  name?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPrinterBase = (OutlookGraphSchemaMicrosoftGraphEntity & {
  capabilities?: (OutlookGraphSchemaMicrosoftGraphPrinterCapabilities | {} | null);
  defaults?: (OutlookGraphSchemaMicrosoftGraphPrinterDefaults | {} | null);
  displayName?: string;
  isAcceptingJobs?: boolean | null;
  location?: (OutlookGraphSchemaMicrosoftGraphPrinterLocation | {} | null);
  manufacturer?: string | null;
  model?: string | null;
  status?: OutlookGraphSchemaMicrosoftGraphPrinterStatus;
  jobs?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPrintJob>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPrinterShareViewpoint = {
  lastUsedDateTime?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPrinter = (OutlookGraphSchemaMicrosoftGraphPrinterBase & {
  hasPhysicalDevice?: boolean;
  isShared?: boolean;
  lastSeenDateTime?: string | null;
  registeredDateTime?: string;
  connectors?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPrintConnector>;
  shares?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPrinterShare>;
  taskTriggers?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPrintTaskTrigger>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphImageInfo = {
  addImageQuery?: boolean | null;
  alternateText?: string | null;
  alternativeText?: string | null;
  iconUrl?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphAttestationLevel = "attested" | "notAttested" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphPasskeyType = "deviceBound" | "synced" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphWebauthnPublicKeyCredential = {
  clientExtensionResults?: (OutlookGraphSchemaMicrosoftGraphWebauthnAuthenticationExtensionsClientOutputs | {} | null);
  id?: string | null;
  response?: (OutlookGraphSchemaMicrosoftGraphWebauthnAuthenticatorAttestationResponse | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphDevice = (OutlookGraphSchemaMicrosoftGraphDirectoryObject & {
  accountEnabled?: boolean | null;
  alternativeSecurityIds?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphAlternativeSecurityId>;
  approximateLastSignInDateTime?: string | null;
  complianceExpirationDateTime?: string | null;
  deviceCategory?: string | null;
  deviceId?: string | null;
  deviceMetadata?: string | null;
  deviceOwnership?: string | null;
  deviceVersion?: number | null;
  displayName?: string | null;
  enrollmentProfileName?: string | null;
  enrollmentType?: string | null;
  isCompliant?: boolean | null;
  isManaged?: boolean | null;
  isManagementRestricted?: boolean | null;
  isRooted?: boolean | null;
  managementType?: string | null;
  manufacturer?: string | null;
  mdmAppId?: string | null;
  model?: string | null;
  onPremisesLastSyncDateTime?: string | null;
  onPremisesSecurityIdentifier?: string | null;
  onPremisesSyncEnabled?: boolean | null;
  operatingSystem?: string | null;
  operatingSystemVersion?: string | null;
  physicalIds?: ReadonlyArray<string>;
  profileType?: string | null;
  registrationDateTime?: string | null;
  systemLabels?: ReadonlyArray<string>;
  trustType?: string | null;
  extensions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphExtension>;
  memberOf?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDirectoryObject>;
  registeredOwners?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDirectoryObject>;
  registeredUsers?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDirectoryObject>;
  transitiveMemberOf?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDirectoryObject>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphLongRunningOperationStatus = "notStarted" | "running" | "succeeded" | "failed" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphAuthenticationPhoneType = "mobile" | "alternateMobile" | "office" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphAuthenticationMethodSignInState = "notSupported" | "notAllowedByPolicy" | "notEnabled" | "phoneNumberNotUnique" | "ready" | "notConfigured" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphAuthenticationMethodKeyStrength = "normal" | "weak" | "unknown";

export type OutlookGraphSchemaMicrosoftGraphAuthenticationMethodPlatform = "unknown" | "windows" | "macOS" | "iOS" | "android" | "linux" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphCalendarRoleType = "none" | "freeBusyRead" | "limitedRead" | "read" | "write" | "delegateWithoutPrivateEventAccess" | "delegateWithPrivateEventAccess" | "custom";

export type OutlookGraphSchemaMicrosoftGraphAttendeeBase = (OutlookGraphSchemaMicrosoftGraphRecipient & {
  type?: (OutlookGraphSchemaMicrosoftGraphAttendeeType | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTimeSlot = {
  end?: OutlookGraphSchemaMicrosoftGraphDateTimeTimeZone;
  start?: OutlookGraphSchemaMicrosoftGraphDateTimeTimeZone;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphOutlookGeoCoordinates = {
  accuracy?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  altitude?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  altitudeAccuracy?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  latitude?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  longitude?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphLocationType = "default" | "conferenceRoom" | "homeAddress" | "businessAddress" | "geoCoordinates" | "streetAddress" | "hotel" | "restaurant" | "localBusiness" | "postalAddress";

export type OutlookGraphSchemaMicrosoftGraphLocationUniqueIdType = "unknown" | "locationStore" | "directory" | "private" | "bing";

export type OutlookGraphSchemaMicrosoftGraphRecurrencePattern = {
  dayOfMonth?: number;
  daysOfWeek?: ReadonlyArray<(OutlookGraphSchemaMicrosoftGraphDayOfWeek | {} | null)>;
  firstDayOfWeek?: (OutlookGraphSchemaMicrosoftGraphDayOfWeek | {} | null);
  index?: (OutlookGraphSchemaMicrosoftGraphWeekIndex | {} | null);
  interval?: number;
  month?: number;
  type?: (OutlookGraphSchemaMicrosoftGraphRecurrencePatternType | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphRecurrenceRange = {
  endDate?: string | null;
  numberOfOccurrences?: number;
  recurrenceTimeZone?: string | null;
  startDate?: string | null;
  type?: (OutlookGraphSchemaMicrosoftGraphRecurrenceRangeType | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphResponseType = "none" | "organizer" | "tentativelyAccepted" | "accepted" | "declined" | "notResponded";

export type OutlookGraphSchemaMicrosoftGraphTeamworkUserIdentity = (OutlookGraphSchemaMicrosoftGraphIdentity & {
  userIdentityType?: (OutlookGraphSchemaMicrosoftGraphTeamworkUserIdentityType | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTeamsAppPermissionSet = {
  resourceSpecificPermissions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTeamsAppResourceSpecificPermission>;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTeamsApp = (OutlookGraphSchemaMicrosoftGraphEntity & {
  displayName?: string | null;
  distributionMethod?: (OutlookGraphSchemaMicrosoftGraphTeamsAppDistributionMethod | {} | null);
  externalId?: string | null;
  appDefinitions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTeamsAppDefinition>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTeamsAppDefinition = (OutlookGraphSchemaMicrosoftGraphEntity & {
  authorization?: (OutlookGraphSchemaMicrosoftGraphTeamsAppAuthorization | {} | null);
  createdBy?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  description?: string | null;
  displayName?: string | null;
  lastModifiedDateTime?: string | null;
  publishingState?: (OutlookGraphSchemaMicrosoftGraphTeamsAppPublishingState | {} | null);
  shortDescription?: string | null;
  teamsAppId?: string | null;
  version?: string | null;
  bot?: (OutlookGraphSchemaMicrosoftGraphTeamworkBot | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphEventMessageDetail = {
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphChatMessageFromIdentitySet = (OutlookGraphSchemaMicrosoftGraphIdentitySet & {
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphChatMessageType = "message" | "chatEvent" | "typing" | "unknownFutureValue" | "systemEventMessage";

export type OutlookGraphSchemaMicrosoftGraphChatMessageAttachment = {
  content?: string | null;
  contentType?: string | null;
  contentUrl?: string | null;
  id?: string | null;
  name?: string | null;
  teamsAppId?: string | null;
  thumbnailUrl?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphChannelIdentity = {
  channelId?: string | null;
  teamId?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphChatMessageImportance = "normal" | "high" | "urgent" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphChatMessageMention = {
  id?: number | null;
  mentioned?: (OutlookGraphSchemaMicrosoftGraphChatMessageMentionedIdentitySet | {} | null);
  mentionText?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphChatMessageHistoryItem = {
  actions?: OutlookGraphSchemaMicrosoftGraphChatMessageActions;
  modifiedDateTime?: string;
  reaction?: (OutlookGraphSchemaMicrosoftGraphChatMessageReaction | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphChatMessagePolicyViolation = {
  dlpAction?: (OutlookGraphSchemaMicrosoftGraphChatMessagePolicyViolationDlpActionTypes | {} | null);
  justificationText?: string | null;
  policyTip?: (OutlookGraphSchemaMicrosoftGraphChatMessagePolicyViolationPolicyTip | {} | null);
  userAction?: (OutlookGraphSchemaMicrosoftGraphChatMessagePolicyViolationUserActionTypes | {} | null);
  verdictDetails?: (OutlookGraphSchemaMicrosoftGraphChatMessagePolicyViolationVerdictDetailsTypes | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphChatMessageReaction = {
  createdDateTime?: string;
  displayName?: string | null;
  reactionContentUrl?: string | null;
  reactionType?: string;
  user?: OutlookGraphSchemaMicrosoftGraphChatMessageReactionIdentitySet;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphChatMessageHostedContent = (OutlookGraphSchemaMicrosoftGraphTeamworkHostedContent & {
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTeamsTabConfiguration = {
  contentUrl?: string | null;
  entityId?: string | null;
  removeUrl?: string | null;
  websiteUrl?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphCloudClipboardItemPayload = {
  content?: string;
  formatName?: string;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphSensitivityLabel = (OutlookGraphSchemaMicrosoftGraphEntity & {
  actionSource?: (OutlookGraphSchemaMicrosoftGraphLabelActionSource | {} | null);
  autoTooltip?: string | null;
  description?: string | null;
  displayName?: string | null;
  hasProtection?: boolean | null;
  isDefault?: boolean | null;
  isEndpointProtectionEnabled?: boolean | null;
  isScopedToUser?: boolean | null;
  locale?: string | null;
  name?: string | null;
  priority?: number | null;
  toolTip?: string | null;
  rights?: (OutlookGraphSchemaMicrosoftGraphUsageRightsIncluded | {} | null);
  sublabels?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSensitivityLabel>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphContentActivity = (OutlookGraphSchemaMicrosoftGraphEntity & {
  contentMetadata?: OutlookGraphSchemaMicrosoftGraphProcessContentRequest;
  scopeIdentifier?: string | null;
  userId?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphItemReference = {
  driveId?: string | null;
  driveType?: string | null;
  id?: string | null;
  name?: string | null;
  path?: string | null;
  shareId?: string | null;
  sharepointIds?: (OutlookGraphSchemaMicrosoftGraphSharepointIds | {} | null);
  siteId?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphStoragePlanInformation = {
  upgradeAvailable?: boolean | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphAudio = {
  album?: string | null;
  albumArtist?: string | null;
  artist?: string | null;
  bitrate?: number | null;
  composers?: string | null;
  copyright?: string | null;
  disc?: number | null;
  discCount?: number | null;
  duration?: number | null;
  genre?: string | null;
  hasDrm?: boolean | null;
  isVariableBitrate?: boolean | null;
  title?: string | null;
  track?: number | null;
  trackCount?: number | null;
  year?: number | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphBundle = {
  album?: (OutlookGraphSchemaMicrosoftGraphAlbum | {} | null);
  childCount?: number | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphDeleted = {
  state?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphFile = {
  hashes?: (OutlookGraphSchemaMicrosoftGraphHashes | {} | null);
  mimeType?: string | null;
  processingMetadata?: boolean | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphFileSystemInfo = {
  createdDateTime?: string | null;
  lastAccessedDateTime?: string | null;
  lastModifiedDateTime?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphFolder = {
  childCount?: number | null;
  view?: (OutlookGraphSchemaMicrosoftGraphFolderView | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphImage = {
  height?: number | null;
  width?: number | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphGeoCoordinates = {
  altitude?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  latitude?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  longitude?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphMalware = {
  description?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPackage = {
  type?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPendingOperations = {
  pendingContentUpdate?: (OutlookGraphSchemaMicrosoftGraphPendingContentUpdate | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPhoto = {
  cameraMake?: string | null;
  cameraModel?: string | null;
  exposureDenominator?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  exposureNumerator?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  fNumber?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  focalLength?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  iso?: number | null;
  orientation?: number | null;
  takenDateTime?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPublicationFacet = {
  checkedOutBy?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  level?: string | null;
  versionId?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphRemoteItem = {
  createdBy?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  createdDateTime?: string | null;
  file?: (OutlookGraphSchemaMicrosoftGraphFile | {} | null);
  fileSystemInfo?: (OutlookGraphSchemaMicrosoftGraphFileSystemInfo | {} | null);
  folder?: (OutlookGraphSchemaMicrosoftGraphFolder | {} | null);
  id?: string | null;
  image?: (OutlookGraphSchemaMicrosoftGraphImage | {} | null);
  lastModifiedBy?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  lastModifiedDateTime?: string | null;
  name?: string | null;
  package?: (OutlookGraphSchemaMicrosoftGraphPackage | {} | null);
  parentReference?: (OutlookGraphSchemaMicrosoftGraphItemReference | {} | null);
  shared?: (OutlookGraphSchemaMicrosoftGraphShared | {} | null);
  sharepointIds?: (OutlookGraphSchemaMicrosoftGraphSharepointIds | {} | null);
  size?: number | null;
  specialFolder?: (OutlookGraphSchemaMicrosoftGraphSpecialFolder | {} | null);
  video?: (OutlookGraphSchemaMicrosoftGraphVideo | {} | null);
  webDavUrl?: string | null;
  webUrl?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphSearchResult = {
  onClickTelemetryUrl?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphShared = {
  owner?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  scope?: string | null;
  sharedBy?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  sharedDateTime?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphSpecialFolder = {
  name?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphVideo = {
  audioBitsPerSample?: number | null;
  audioChannels?: number | null;
  audioFormat?: string | null;
  audioSamplesPerSecond?: number | null;
  bitrate?: number | null;
  duration?: number | null;
  fourCC?: string | null;
  frameRate?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  height?: number | null;
  width?: number | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphListItem = (OutlookGraphSchemaMicrosoftGraphBaseItem & {
  contentType?: (OutlookGraphSchemaMicrosoftGraphContentTypeInfo | {} | null);
  deleted?: (OutlookGraphSchemaMicrosoftGraphDeleted | {} | null);
  sharepointIds?: (OutlookGraphSchemaMicrosoftGraphSharepointIds | {} | null);
  analytics?: (OutlookGraphSchemaMicrosoftGraphItemAnalytics | {} | null);
  documentSetVersions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDocumentSetVersion>;
  driveItem?: (OutlookGraphSchemaMicrosoftGraphDriveItem | {} | null);
  fields?: (OutlookGraphSchemaMicrosoftGraphFieldValueSet | {} | null);
  versions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphListItemVersion>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphItemRetentionLabel = (OutlookGraphSchemaMicrosoftGraphEntity & {
  isLabelAppliedExplicitly?: boolean | null;
  labelAppliedBy?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  labelAppliedDateTime?: string | null;
  name?: string | null;
  retentionSettings?: (OutlookGraphSchemaMicrosoftGraphRetentionLabelSettings | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphThumbnailSet = (OutlookGraphSchemaMicrosoftGraphEntity & {
  large?: (OutlookGraphSchemaMicrosoftGraphThumbnail | {} | null);
  medium?: (OutlookGraphSchemaMicrosoftGraphThumbnail | {} | null);
  small?: (OutlookGraphSchemaMicrosoftGraphThumbnail | {} | null);
  source?: (OutlookGraphSchemaMicrosoftGraphThumbnail | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphDriveItemVersion = (OutlookGraphSchemaMicrosoftGraphBaseItemVersion & {
  content?: string | null;
  size?: number | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbook = (OutlookGraphSchemaMicrosoftGraphEntity & {
  application?: (OutlookGraphSchemaMicrosoftGraphWorkbookApplication | {} | null);
  comments?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWorkbookComment>;
  functions?: (OutlookGraphSchemaMicrosoftGraphWorkbookFunctions | {} | null);
  names?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWorkbookNamedItem>;
  operations?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWorkbookOperation>;
  tables?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWorkbookTable>;
  worksheets?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWorkbookWorksheet>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphListInfo = {
  contentTypesEnabled?: boolean | null;
  hidden?: boolean | null;
  template?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphEngagementRoleMember = (OutlookGraphSchemaMicrosoftGraphEntity & {
  createdDateTime?: string;
  userId?: string | null;
  user?: (OutlookGraphSchemaMicrosoftGraphUser | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphCourseStatus = "notStarted" | "inProgress" | "completed" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphPublicErrorDetail = {
  code?: string | null;
  message?: string | null;
  target?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPublicInnerError = {
  code?: string | null;
  details?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPublicErrorDetail>;
  message?: string | null;
  target?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphSiteArchivalDetails = {
  archiveStatus?: (OutlookGraphSchemaMicrosoftGraphSiteArchiveStatus | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphItemActivityStat = (OutlookGraphSchemaMicrosoftGraphEntity & {
  access?: (OutlookGraphSchemaMicrosoftGraphItemActionStat | {} | null);
  create?: (OutlookGraphSchemaMicrosoftGraphItemActionStat | {} | null);
  delete?: (OutlookGraphSchemaMicrosoftGraphItemActionStat | {} | null);
  edit?: (OutlookGraphSchemaMicrosoftGraphItemActionStat | {} | null);
  endDateTime?: string | null;
  incompleteData?: (OutlookGraphSchemaMicrosoftGraphIncompleteData | {} | null);
  isTrending?: boolean | null;
  move?: (OutlookGraphSchemaMicrosoftGraphItemActionStat | {} | null);
  startDateTime?: string | null;
  activities?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphItemActivity>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphBooleanColumn = {
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphCalculatedColumn = {
  format?: string | null;
  formula?: string | null;
  outputType?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphChoiceColumn = {
  allowTextEntry?: boolean | null;
  choices?: ReadonlyArray<string | null>;
  displayAs?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphContentApprovalStatusColumn = {
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphCurrencyColumn = {
  locale?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphDateTimeColumn = {
  displayAs?: string | null;
  format?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphDefaultColumnValue = {
  formula?: string | null;
  value?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphGeolocationColumn = {
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphHyperlinkOrPictureColumn = {
  isPicture?: boolean | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphLookupColumn = {
  allowMultipleValues?: boolean | null;
  allowUnlimitedLength?: boolean | null;
  columnName?: string | null;
  listId?: string | null;
  primaryLookupColumnId?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphNumberColumn = {
  decimalPlaces?: string | null;
  displayAs?: string | null;
  maximum?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  minimum?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPersonOrGroupColumn = {
  allowMultipleSelection?: boolean | null;
  chooseFromType?: string | null;
  displayAs?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphContentTypeInfo = {
  id?: string | null;
  name?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTermColumn = {
  allowMultipleValues?: boolean | null;
  showFullyQualifiedName?: boolean | null;
  parentTerm?: (OutlookGraphSchemaMicrosoftGraphTermStoreTerm | {} | null);
  termSet?: (OutlookGraphSchemaMicrosoftGraphTermStoreSet | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTextColumn = {
  allowMultipleLines?: boolean | null;
  appendChangesToExistingText?: boolean | null;
  linesForEditing?: number | null;
  maxLength?: number | null;
  textType?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphThumbnailColumn = {
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphColumnTypes = "note" | "text" | "choice" | "multichoice" | "number" | "currency" | "dateTime" | "lookup" | "boolean" | "user" | "url" | "calculated" | "location" | "geolocation" | "term" | "multiterm" | "thumbnail" | "approvalStatus" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphColumnValidation = {
  defaultLanguage?: string | null;
  descriptions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDisplayNameLocalization>;
  formula?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphDocumentSet = {
  allowedContentTypes?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphContentTypeInfo>;
  defaultContents?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDocumentSetContent>;
  propagateWelcomePageChanges?: boolean | null;
  shouldPrefixNameToFile?: boolean | null;
  welcomePageUrl?: string | null;
  sharedColumns?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphColumnDefinition>;
  welcomePageColumns?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphColumnDefinition>;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphDocumentSetContent = {
  contentType?: (OutlookGraphSchemaMicrosoftGraphContentTypeInfo | {} | null);
  fileName?: string | null;
  folderName?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphContentTypeOrder = {
  default?: boolean | null;
  position?: number | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphColumnLink = (OutlookGraphSchemaMicrosoftGraphEntity & {
  name?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPageLayoutType = "microsoftReserved" | "article" | "home" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphSharePointIdentitySet = (OutlookGraphSchemaMicrosoftGraphIdentitySet & {
  group?: (OutlookGraphSchemaMicrosoftGraphIdentity | {} | null);
  sharePointGroup?: (OutlookGraphSchemaMicrosoftGraphSharePointGroupIdentity | {} | null);
  siteGroup?: (OutlookGraphSchemaMicrosoftGraphSharePointIdentity | {} | null);
  siteUser?: (OutlookGraphSchemaMicrosoftGraphSharePointIdentity | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphSharingInvitation = {
  email?: string | null;
  invitedBy?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  redeemedBy?: string | null;
  signInRequired?: boolean | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphSharingLink = {
  application?: (OutlookGraphSchemaMicrosoftGraphIdentity | {} | null);
  preventsDownload?: boolean | null;
  scope?: string | null;
  type?: string | null;
  webHtml?: string | null;
  webUrl?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTermStoreGroup = (OutlookGraphSchemaMicrosoftGraphEntity & {
  createdDateTime?: string | null;
  description?: string | null;
  displayName?: string | null;
  parentSiteId?: string | null;
  scope?: (OutlookGraphSchemaMicrosoftGraphTermStoreTermGroupScope | {} | null);
  sets?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTermStoreSet>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTermStoreSet = (OutlookGraphSchemaMicrosoftGraphEntity & {
  createdDateTime?: string | null;
  description?: string | null;
  localizedNames?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTermStoreLocalizedName>;
  properties?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphKeyValue>;
  children?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTermStoreTerm>;
  parentGroup?: OutlookGraphSchemaMicrosoftGraphTermStoreGroup;
  relations?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTermStoreRelation>;
  terms?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTermStoreTerm>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphSharedInsight = (OutlookGraphSchemaMicrosoftGraphEntity & {
  lastShared?: (OutlookGraphSchemaMicrosoftGraphSharingDetail | {} | null);
  resourceReference?: (OutlookGraphSchemaMicrosoftGraphResourceReference | {} | null);
  resourceVisualization?: (OutlookGraphSchemaMicrosoftGraphResourceVisualization | {} | null);
  sharingHistory?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSharingDetail>;
  lastSharedMethod?: (OutlookGraphSchemaMicrosoftGraphEntity | {} | null);
  resource?: (OutlookGraphSchemaMicrosoftGraphEntity | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTrending = (OutlookGraphSchemaMicrosoftGraphEntity & {
  lastModifiedDateTime?: string | null;
  resourceReference?: (OutlookGraphSchemaMicrosoftGraphResourceReference | {} | null);
  resourceVisualization?: (OutlookGraphSchemaMicrosoftGraphResourceVisualization | {} | null);
  weight?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  resource?: (OutlookGraphSchemaMicrosoftGraphEntity | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphUsedInsight = (OutlookGraphSchemaMicrosoftGraphEntity & {
  lastUsed?: (OutlookGraphSchemaMicrosoftGraphUsageDetails | {} | null);
  resourceReference?: (OutlookGraphSchemaMicrosoftGraphResourceReference | {} | null);
  resourceVisualization?: (OutlookGraphSchemaMicrosoftGraphResourceVisualization | {} | null);
  resource?: (OutlookGraphSchemaMicrosoftGraphEntity | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphGiphyRatingType = "strict" | "moderate" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphChannelLayoutType = "post" | "chat" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphChannelMembershipType = "standard" | "private" | "unknownFutureValue" | "shared";

export type OutlookGraphSchemaMicrosoftGraphChannelSummary = {
  guestsCount?: number | null;
  hasMembersFromOtherTenants?: boolean | null;
  membersCount?: number | null;
  ownersCount?: number | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphSharedWithChannelTeamInfo = (OutlookGraphSchemaMicrosoftGraphTeamInfo & {
  isHostTeam?: boolean | null;
  allowedMembers?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphConversationMember>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphAssignedLabel = {
  displayName?: string | null;
  labelId?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphLicenseProcessingState = {
  state?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphConversation = (OutlookGraphSchemaMicrosoftGraphEntity & {
  hasAttachments?: boolean;
  lastDeliveredDateTime?: string;
  preview?: string;
  topic?: string;
  uniqueSenders?: ReadonlyArray<string>;
  threads?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphConversationThread>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphGroupLifecyclePolicy = (OutlookGraphSchemaMicrosoftGraphEntity & {
  alternateNotificationEmails?: string | null;
  groupLifetimeInDays?: number | null;
  managedGroupTypes?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPlannerGroup = (OutlookGraphSchemaMicrosoftGraphEntity & {
  plans?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPlannerPlan>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphGroupSetting = (OutlookGraphSchemaMicrosoftGraphEntity & {
  displayName?: string | null;
  templateId?: string | null;
  values?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSettingValue>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphConversationThread = (OutlookGraphSchemaMicrosoftGraphEntity & {
  ccRecipients?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  hasAttachments?: boolean;
  isLocked?: boolean;
  lastDeliveredDateTime?: string;
  preview?: string;
  topic?: string;
  toRecipients?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  uniqueSenders?: ReadonlyArray<string>;
  posts?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPost>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphOperationError = {
  code?: string | null;
  message?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTeamsAsyncOperationType = "invalid" | "cloneTeam" | "archiveTeam" | "unarchiveTeam" | "createTeam" | "unknownFutureValue" | "teamifyGroup" | "createChannel" | "archiveChannel" | "unarchiveChannel";

export type OutlookGraphSchemaMicrosoftGraphTeamsAsyncOperationStatus = "invalid" | "notStarted" | "inProgress" | "succeeded" | "failed" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphOperationStatus = "NotStarted" | "Running" | "Completed" | "Failed";

export type OutlookGraphSchemaMicrosoftGraphTimeClockSettings = {
  approvedLocation?: (OutlookGraphSchemaMicrosoftGraphGeoCoordinates | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphDayNote = (OutlookGraphSchemaMicrosoftGraphChangeTrackedEntity & {
  dayNoteDate?: string | null;
  draftDayNote?: (OutlookGraphSchemaMicrosoftGraphItemBody | {} | null);
  sharedDayNote?: (OutlookGraphSchemaMicrosoftGraphItemBody | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphOfferShiftRequest = (OutlookGraphSchemaMicrosoftGraphScheduleChangeRequest & {
  recipientActionDateTime?: string | null;
  recipientActionMessage?: string | null;
  recipientUserId?: string | null;
  senderShiftId?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphOpenShiftChangeRequest = (OutlookGraphSchemaMicrosoftGraphScheduleChangeRequest & {
  openShiftId?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphOpenShift = (OutlookGraphSchemaMicrosoftGraphChangeTrackedEntity & {
  draftOpenShift?: (OutlookGraphSchemaMicrosoftGraphOpenShiftItem | {} | null);
  isStagedForDeletion?: boolean | null;
  schedulingGroupId?: string | null;
  sharedOpenShift?: (OutlookGraphSchemaMicrosoftGraphOpenShiftItem | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphSchedulingGroup = (OutlookGraphSchemaMicrosoftGraphChangeTrackedEntity & {
  code?: string | null;
  displayName?: string | null;
  isActive?: boolean | null;
  userIds?: ReadonlyArray<string | null>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphShift = (OutlookGraphSchemaMicrosoftGraphChangeTrackedEntity & {
  draftShift?: (OutlookGraphSchemaMicrosoftGraphShiftItem | {} | null);
  isStagedForDeletion?: boolean | null;
  schedulingGroupId?: string | null;
  sharedShift?: (OutlookGraphSchemaMicrosoftGraphShiftItem | {} | null);
  userId?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphSwapShiftsChangeRequest = (OutlookGraphSchemaMicrosoftGraphOfferShiftRequest & {
  recipientShiftId?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTimeCard = (OutlookGraphSchemaMicrosoftGraphChangeTrackedEntity & {
  breaks?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTimeCardBreak>;
  clockInEvent?: (OutlookGraphSchemaMicrosoftGraphTimeCardEvent | {} | null);
  clockOutEvent?: (OutlookGraphSchemaMicrosoftGraphTimeCardEvent | {} | null);
  confirmedBy?: (OutlookGraphSchemaMicrosoftGraphConfirmedBy | {} | null);
  notes?: (OutlookGraphSchemaMicrosoftGraphItemBody | {} | null);
  originalEntry?: (OutlookGraphSchemaMicrosoftGraphTimeCardEntry | {} | null);
  state?: (OutlookGraphSchemaMicrosoftGraphTimeCardState | {} | null);
  userId?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTimeOffReason = (OutlookGraphSchemaMicrosoftGraphChangeTrackedEntity & {
  code?: string | null;
  displayName?: string | null;
  iconType?: (OutlookGraphSchemaMicrosoftGraphTimeOffReasonIconType | {} | null);
  isActive?: boolean | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTimeOffRequest = (OutlookGraphSchemaMicrosoftGraphScheduleChangeRequest & {
  endDateTime?: string | null;
  startDateTime?: string | null;
  timeOffReasonId?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTimeOff = (OutlookGraphSchemaMicrosoftGraphChangeTrackedEntity & {
  draftTimeOff?: (OutlookGraphSchemaMicrosoftGraphTimeOffItem | {} | null);
  isStagedForDeletion?: boolean | null;
  sharedTimeOff?: (OutlookGraphSchemaMicrosoftGraphTimeOffItem | {} | null);
  userId?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTeamworkTagType = "standard" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphTeamworkTagMember = (OutlookGraphSchemaMicrosoftGraphEntity & {
  displayName?: string | null;
  tenantId?: string | null;
  userId?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphActionState = "none" | "pending" | "canceled" | "active" | "done" | "failed" | "notSupported";

export type OutlookGraphSchemaMicrosoftGraphPolicyPlatformType = "android" | "androidForWork" | "iOS" | "macOS" | "windowsPhone81" | "windows81AndLater" | "windows10AndLater" | "all";

export type OutlookGraphSchemaMicrosoftGraphDeviceCompliancePolicySettingState = {
  currentValue?: string | null;
  errorCode?: number;
  errorDescription?: string | null;
  instanceDisplayName?: string | null;
  setting?: string | null;
  settingName?: string | null;
  sources?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSettingSource>;
  state?: OutlookGraphSchemaMicrosoftGraphComplianceStatus;
  userEmail?: string | null;
  userId?: string | null;
  userName?: string | null;
  userPrincipalName?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphComplianceStatus = "unknown" | "notApplicable" | "compliant" | "remediated" | "nonCompliant" | "error" | "conflict" | "notAssigned";

export type OutlookGraphSchemaMicrosoftGraphDeviceConfigurationSettingState = {
  currentValue?: string | null;
  errorCode?: number;
  errorDescription?: string | null;
  instanceDisplayName?: string | null;
  setting?: string | null;
  settingName?: string | null;
  sources?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSettingSource>;
  state?: OutlookGraphSchemaMicrosoftGraphComplianceStatus;
  userEmail?: string | null;
  userId?: string | null;
  userName?: string | null;
  userPrincipalName?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaReferenceNumeric = "-INF" | "INF" | "NaN";

export type OutlookGraphSchemaMicrosoftGraphAppLogUploadState = "pending" | "completed" | "failed" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphWindowsDeviceHealthState = "clean" | "fullScanPending" | "rebootPending" | "manualStepsPending" | "offlineScanPending" | "critical";

export type OutlookGraphSchemaMicrosoftGraphWindowsDefenderProductStatus = "noStatus" | "serviceNotRunning" | "serviceStartedWithoutMalwareProtection" | "pendingFullScanDueToThreatAction" | "pendingRebootDueToThreatAction" | "pendingManualStepsDueToThreatAction" | "avSignaturesOutOfDate" | "asSignaturesOutOfDate" | "noQuickScanHappenedForSpecifiedPeriod" | "noFullScanHappenedForSpecifiedPeriod" | "systemInitiatedScanInProgress" | "systemInitiatedCleanInProgress" | "samplesPendingSubmission" | "productRunningInEvaluationMode" | "productRunningInNonGenuineMode" | "productExpired" | "offlineScanRequired" | "serviceShutdownAsPartOfSystemShutdown" | "threatRemediationFailedCritically" | "threatRemediationFailedNonCritically" | "noStatusFlagsSet" | "platformOutOfDate" | "platformUpdateInProgress" | "platformAboutToBeOutdated" | "signatureOrPlatformEndOfLifeIsPastOrIsImpending" | "windowsSModeSignaturesInUseOnNonWin10SInstall";

export type OutlookGraphSchemaMicrosoftGraphWindowsDeviceMalwareState = (OutlookGraphSchemaMicrosoftGraphEntity & {
  additionalInformationUrl?: string | null;
  category?: (OutlookGraphSchemaMicrosoftGraphWindowsMalwareCategory | {} | null);
  detectionCount?: number | null;
  displayName?: string | null;
  executionState?: (OutlookGraphSchemaMicrosoftGraphWindowsMalwareExecutionState | {} | null);
  initialDetectionDateTime?: string | null;
  lastStateChangeDateTime?: string | null;
  severity?: (OutlookGraphSchemaMicrosoftGraphWindowsMalwareSeverity | {} | null);
  state?: (OutlookGraphSchemaMicrosoftGraphWindowsMalwareState | {} | null);
  threatState?: (OutlookGraphSchemaMicrosoftGraphWindowsMalwareThreatState | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphOnenoteEntityHierarchyModel = (OutlookGraphSchemaMicrosoftGraphOnenoteEntitySchemaObjectModel & {
  createdBy?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  displayName?: string | null;
  lastModifiedBy?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  lastModifiedDateTime?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphNotebookLinks = {
  oneNoteClientUrl?: (OutlookGraphSchemaMicrosoftGraphExternalLink | {} | null);
  oneNoteWebUrl?: (OutlookGraphSchemaMicrosoftGraphExternalLink | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphOnenoteUserRole = "None" | "Owner" | "Contributor" | "Reader";

export type OutlookGraphSchemaMicrosoftGraphOperation = (OutlookGraphSchemaMicrosoftGraphEntity & {
  createdDateTime?: string | null;
  lastActionDateTime?: string | null;
  status?: (OutlookGraphSchemaMicrosoftGraphOperationStatus | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphOnenoteOperationError = {
  code?: string | null;
  message?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphOnenoteEntitySchemaObjectModel = (OutlookGraphSchemaMicrosoftGraphOnenoteEntityBaseModel & {
  createdDateTime?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPageLinks = {
  oneNoteClientUrl?: (OutlookGraphSchemaMicrosoftGraphExternalLink | {} | null);
  oneNoteWebUrl?: (OutlookGraphSchemaMicrosoftGraphExternalLink | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphOnenoteEntityBaseModel = (OutlookGraphSchemaMicrosoftGraphEntity & {
  self?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphSectionLinks = {
  oneNoteClientUrl?: (OutlookGraphSchemaMicrosoftGraphExternalLink | {} | null);
  oneNoteWebUrl?: (OutlookGraphSchemaMicrosoftGraphExternalLink | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphAllowedLobbyAdmitterRoles = "organizerAndCoOrganizersAndPresenters" | "organizerAndCoOrganizers" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphOnlineMeetingPresenters = "everyone" | "organization" | "roleIsPresenter" | "organizer" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphMeetingLiveShareOptions = "enabled" | "disabled" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphMeetingChatMode = "enabled" | "disabled" | "limited" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphAudioConferencing = {
  conferenceId?: string | null;
  dialinUrl?: string | null;
  tollFreeNumber?: string | null;
  tollFreeNumbers?: ReadonlyArray<string | null>;
  tollNumber?: string | null;
  tollNumbers?: ReadonlyArray<string | null>;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphChatInfo = {
  messageId?: string | null;
  replyChainMessageId?: string | null;
  threadId?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphChatRestrictions = {
  allowTextOnly?: boolean | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphJoinMeetingIdSettings = {
  isPasscodeRequired?: boolean | null;
  joinMeetingId?: string | null;
  passcode?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphLobbyBypassSettings = {
  isDialInBypassEnabled?: boolean | null;
  scope?: (OutlookGraphSchemaMicrosoftGraphLobbyBypassScope | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphOnlineMeetingSensitivityLabelAssignment = {
  sensitivityLabelId?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphMeetingChatHistoryDefaultMode = "none" | "all" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphWatermarkProtectionValues = {
  isEnabledForContentSharing?: boolean | null;
  isEnabledForVideo?: boolean | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphMeetingAttendanceReport = (OutlookGraphSchemaMicrosoftGraphEntity & {
  externalEventInformation?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphVirtualEventExternalInformation>;
  meetingEndDateTime?: string | null;
  meetingStartDateTime?: string | null;
  totalParticipantCount?: number | null;
  attendanceRecords?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphAttendanceRecord>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphBroadcastMeetingAudience = "roleIsAttendee" | "organization" | "everyone" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphBroadcastMeetingCaptionSettings = {
  isCaptionEnabled?: boolean | null;
  spokenLanguage?: string | null;
  translationLanguages?: ReadonlyArray<string | null>;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphMeetingParticipantInfo = {
  identity?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  role?: (OutlookGraphSchemaMicrosoftGraphOnlineMeetingRole | {} | null);
  upn?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPhoneType = "home" | "business" | "mobile" | "other" | "assistant" | "homeFax" | "businessFax" | "otherFax" | "pager" | "radio";

export type OutlookGraphSchemaMicrosoftGraphSelectionLikelihoodInfo = "notSpecified" | "high";

export type OutlookGraphSchemaMicrosoftGraphWebsiteType = "other" | "home" | "work" | "blog" | "profile";

export type OutlookGraphSchemaMicrosoftGraphPlannerPlanContainer = {
  containerId?: string | null;
  type?: (OutlookGraphSchemaMicrosoftGraphPlannerContainerType | {} | null);
  url?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPlannerBucket = (OutlookGraphSchemaMicrosoftGraphEntity & {
  name?: string;
  orderHint?: string | null;
  planId?: string | null;
  tasks?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPlannerTask>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPlannerPlanDetails = (OutlookGraphSchemaMicrosoftGraphEntity & {
  categoryDescriptions?: (OutlookGraphSchemaMicrosoftGraphPlannerCategoryDescriptions | {} | null);
  sharedWith?: (OutlookGraphSchemaMicrosoftGraphPlannerUserIds | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPlannerAppliedCategories = {
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPlannerAssignments = {
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPlannerPreviewType = "automatic" | "noPreview" | "checklist" | "description" | "reference";

export type OutlookGraphSchemaMicrosoftGraphPlannerAssignedToTaskBoardTaskFormat = (OutlookGraphSchemaMicrosoftGraphEntity & {
  orderHintsByAssignee?: (OutlookGraphSchemaMicrosoftGraphPlannerOrderHintsByAssignee | {} | null);
  unassignedOrderHint?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPlannerBucketTaskBoardTaskFormat = (OutlookGraphSchemaMicrosoftGraphEntity & {
  orderHint?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPlannerTaskDetails = (OutlookGraphSchemaMicrosoftGraphEntity & {
  checklist?: (OutlookGraphSchemaMicrosoftGraphPlannerChecklistItems | {} | null);
  description?: string | null;
  previewType?: (OutlookGraphSchemaMicrosoftGraphPlannerPreviewType | {} | null);
  references?: (OutlookGraphSchemaMicrosoftGraphPlannerExternalReferences | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPlannerProgressTaskBoardTaskFormat = (OutlookGraphSchemaMicrosoftGraphEntity & {
  orderHint?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkLocationSource = "none" | "manual" | "scheduled" | "automatic" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphWorkLocationType = "unspecified" | "office" | "remote" | "timeOff" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphChangeTrackedEntity = (OutlookGraphSchemaMicrosoftGraphEntity & {
  createdBy?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  createdDateTime?: string | null;
  lastModifiedBy?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  lastModifiedDateTime?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphShiftAvailability = {
  recurrence?: (OutlookGraphSchemaMicrosoftGraphPatternedRecurrence | {} | null);
  timeSlots?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTimeRange>;
  timeZone?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphUnifiedStorageQuota = (OutlookGraphSchemaMicrosoftGraphEntity & {
  deleted?: number | null;
  manageWebUrl?: string | null;
  remaining?: number | null;
  state?: string | null;
  total?: number | null;
  used?: number | null;
  services?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphServiceStorageQuotaBreakdown>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWindowsSettingType = "roaming" | "backup" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphWindowsSettingInstance = (OutlookGraphSchemaMicrosoftGraphEntity & {
  createdDateTime?: string;
  expirationDateTime?: string;
  lastModifiedDateTime?: string | null;
  payload?: string;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphMaxWorkLocationDetails = "unknown" | "none" | "approximate" | "specific" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphWorkPlanOccurrence = (OutlookGraphSchemaMicrosoftGraphEntity & {
  end?: OutlookGraphSchemaMicrosoftGraphDateTimeTimeZone;
  placeId?: string | null;
  recurrenceId?: string | null;
  start?: OutlookGraphSchemaMicrosoftGraphDateTimeTimeZone;
  timeOffDetails?: (OutlookGraphSchemaMicrosoftGraphTimeOffDetails | {} | null);
  workLocationType?: OutlookGraphSchemaMicrosoftGraphWorkLocationType;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkPlanRecurrence = (OutlookGraphSchemaMicrosoftGraphEntity & {
  end?: OutlookGraphSchemaMicrosoftGraphDateTimeTimeZone;
  placeId?: string | null;
  recurrence?: OutlookGraphSchemaMicrosoftGraphPatternedRecurrence;
  start?: OutlookGraphSchemaMicrosoftGraphDateTimeTimeZone;
  workLocationType?: OutlookGraphSchemaMicrosoftGraphWorkLocationType;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTeamInfo = (OutlookGraphSchemaMicrosoftGraphEntity & {
  displayName?: string | null;
  tenantId?: string | null;
  team?: (OutlookGraphSchemaMicrosoftGraphTeam | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWellknownListName = "none" | "defaultList" | "flaggedEmails" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphTodoTask = (OutlookGraphSchemaMicrosoftGraphEntity & {
  body?: (OutlookGraphSchemaMicrosoftGraphItemBody | {} | null);
  bodyLastModifiedDateTime?: string;
  categories?: ReadonlyArray<string | null>;
  completedDateTime?: (OutlookGraphSchemaMicrosoftGraphDateTimeTimeZone | {} | null);
  createdDateTime?: string;
  dueDateTime?: (OutlookGraphSchemaMicrosoftGraphDateTimeTimeZone | {} | null);
  hasAttachments?: boolean | null;
  importance?: OutlookGraphSchemaMicrosoftGraphImportance;
  isReminderOn?: boolean;
  lastModifiedDateTime?: string;
  recurrence?: (OutlookGraphSchemaMicrosoftGraphPatternedRecurrence | {} | null);
  reminderDateTime?: (OutlookGraphSchemaMicrosoftGraphDateTimeTimeZone | {} | null);
  startDateTime?: (OutlookGraphSchemaMicrosoftGraphDateTimeTimeZone | {} | null);
  status?: OutlookGraphSchemaMicrosoftGraphTaskStatus;
  title?: string | null;
  attachments?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphAttachmentBase>;
  attachmentSessions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphAttachmentSession>;
  checklistItems?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphChecklistItem>;
  extensions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphExtension>;
  linkedResources?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphLinkedResource>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPrinterCapabilities = {
  bottomMargins?: ReadonlyArray<number | null>;
  collation?: boolean | null;
  colorModes?: ReadonlyArray<(OutlookGraphSchemaMicrosoftGraphPrintColorMode | {} | null)>;
  contentTypes?: ReadonlyArray<string | null>;
  copiesPerJob?: (OutlookGraphSchemaMicrosoftGraphIntegerRange | {} | null);
  dpis?: ReadonlyArray<number | null>;
  duplexModes?: ReadonlyArray<(OutlookGraphSchemaMicrosoftGraphPrintDuplexMode | {} | null)>;
  feedOrientations?: ReadonlyArray<(OutlookGraphSchemaMicrosoftGraphPrinterFeedOrientation | {} | null)>;
  finishings?: ReadonlyArray<(OutlookGraphSchemaMicrosoftGraphPrintFinishing | {} | null)>;
  inputBins?: ReadonlyArray<string | null>;
  isColorPrintingSupported?: boolean | null;
  isPageRangeSupported?: boolean | null;
  leftMargins?: ReadonlyArray<number | null>;
  mediaColors?: ReadonlyArray<string | null>;
  mediaSizes?: ReadonlyArray<string | null>;
  mediaTypes?: ReadonlyArray<string | null>;
  multipageLayouts?: ReadonlyArray<(OutlookGraphSchemaMicrosoftGraphPrintMultipageLayout | {} | null)>;
  orientations?: ReadonlyArray<(OutlookGraphSchemaMicrosoftGraphPrintOrientation | {} | null)>;
  outputBins?: ReadonlyArray<string | null>;
  pagesPerSheet?: ReadonlyArray<number | null>;
  qualities?: ReadonlyArray<(OutlookGraphSchemaMicrosoftGraphPrintQuality | {} | null)>;
  rightMargins?: ReadonlyArray<number | null>;
  scalings?: ReadonlyArray<(OutlookGraphSchemaMicrosoftGraphPrintScaling | {} | null)>;
  supportsFitPdfToPage?: boolean | null;
  topMargins?: ReadonlyArray<number | null>;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPrinterDefaults = {
  colorMode?: (OutlookGraphSchemaMicrosoftGraphPrintColorMode | {} | null);
  contentType?: string | null;
  copiesPerJob?: number | null;
  dpi?: number | null;
  duplexMode?: (OutlookGraphSchemaMicrosoftGraphPrintDuplexMode | {} | null);
  finishings?: ReadonlyArray<(OutlookGraphSchemaMicrosoftGraphPrintFinishing | {} | null)>;
  fitPdfToPage?: boolean | null;
  inputBin?: string | null;
  mediaColor?: string | null;
  mediaSize?: string | null;
  mediaType?: string | null;
  multipageLayout?: (OutlookGraphSchemaMicrosoftGraphPrintMultipageLayout | {} | null);
  orientation?: (OutlookGraphSchemaMicrosoftGraphPrintOrientation | {} | null);
  outputBin?: string | null;
  pagesPerSheet?: number | null;
  quality?: (OutlookGraphSchemaMicrosoftGraphPrintQuality | {} | null);
  scaling?: (OutlookGraphSchemaMicrosoftGraphPrintScaling | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPrinterLocation = {
  altitudeInMeters?: number | null;
  building?: string | null;
  city?: string | null;
  countryOrRegion?: string | null;
  floor?: string | null;
  floorDescription?: string | null;
  latitude?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  longitude?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  organization?: ReadonlyArray<string | null>;
  postalCode?: string | null;
  roomDescription?: string | null;
  roomName?: string | null;
  site?: string | null;
  stateOrProvince?: string | null;
  streetAddress?: string | null;
  subdivision?: ReadonlyArray<string | null>;
  subunit?: ReadonlyArray<string | null>;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPrinterStatus = {
  description?: string | null;
  details?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPrinterProcessingStateDetail>;
  state?: OutlookGraphSchemaMicrosoftGraphPrinterProcessingState;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPrintJob = (OutlookGraphSchemaMicrosoftGraphEntity & {
  acknowledgedDateTime?: string | null;
  configuration?: OutlookGraphSchemaMicrosoftGraphPrintJobConfiguration;
  createdBy?: (OutlookGraphSchemaMicrosoftGraphUserIdentity | {} | null);
  createdDateTime?: string;
  errorCode?: number | null;
  isFetchable?: boolean;
  redirectedFrom?: string | null;
  redirectedTo?: string | null;
  status?: OutlookGraphSchemaMicrosoftGraphPrintJobStatus;
  documents?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPrintDocument>;
  tasks?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPrintTask>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPrintConnector = (OutlookGraphSchemaMicrosoftGraphEntity & {
  appVersion?: string;
  displayName?: string;
  fullyQualifiedDomainName?: string;
  location?: (OutlookGraphSchemaMicrosoftGraphPrinterLocation | {} | null);
  operatingSystem?: string;
  registeredDateTime?: string;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPrintTaskTrigger = (OutlookGraphSchemaMicrosoftGraphEntity & {
  event?: OutlookGraphSchemaMicrosoftGraphPrintEvent;
  definition?: OutlookGraphSchemaMicrosoftGraphPrintTaskDefinition;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWebauthnAuthenticationExtensionsClientOutputs = {
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphWebauthnAuthenticatorAttestationResponse = {
  attestationObject?: string | null;
  clientDataJSON?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphAlternativeSecurityId = {
  identityProvider?: string | null;
  key?: string | null;
  type?: number | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphAttendeeType = "required" | "optional" | "resource";

export type OutlookGraphSchemaMicrosoftGraphWeekIndex = "first" | "second" | "third" | "fourth" | "last";

export type OutlookGraphSchemaMicrosoftGraphRecurrencePatternType = "daily" | "weekly" | "absoluteMonthly" | "relativeMonthly" | "absoluteYearly" | "relativeYearly";

export type OutlookGraphSchemaMicrosoftGraphRecurrenceRangeType = "endDate" | "noEnd" | "numbered";

export type OutlookGraphSchemaMicrosoftGraphTeamworkUserIdentityType = "aadUser" | "onPremiseAadUser" | "anonymousGuest" | "federatedUser" | "personalMicrosoftAccountUser" | "skypeUser" | "phoneUser" | "unknownFutureValue" | "emailUser";

export type OutlookGraphSchemaMicrosoftGraphTeamsAppResourceSpecificPermission = {
  permissionType?: (OutlookGraphSchemaMicrosoftGraphTeamsAppResourceSpecificPermissionType | {} | null);
  permissionValue?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTeamsAppDistributionMethod = "store" | "organization" | "sideloaded" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphTeamsAppAuthorization = {
  clientAppId?: string | null;
  requiredPermissionSet?: (OutlookGraphSchemaMicrosoftGraphTeamsAppPermissionSet | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTeamsAppPublishingState = "submitted" | "rejected" | "published" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphTeamworkBot = (OutlookGraphSchemaMicrosoftGraphEntity & {
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphChatMessageMentionedIdentitySet = (OutlookGraphSchemaMicrosoftGraphIdentitySet & {
  conversation?: (OutlookGraphSchemaMicrosoftGraphTeamworkConversationIdentity | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphChatMessageActions = "reactionAdded" | "reactionRemoved" | "actionUndefined" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphChatMessagePolicyViolationDlpActionTypes = "none" | "notifySender" | "blockAccess" | "blockAccessExternal";

export type OutlookGraphSchemaMicrosoftGraphChatMessagePolicyViolationPolicyTip = {
  complianceUrl?: string | null;
  generalText?: string | null;
  matchedConditionDescriptions?: ReadonlyArray<string | null>;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphChatMessagePolicyViolationUserActionTypes = "none" | "override" | "reportFalsePositive";

export type OutlookGraphSchemaMicrosoftGraphChatMessagePolicyViolationVerdictDetailsTypes = "none" | "allowFalsePositiveOverride" | "allowOverrideWithoutJustification" | "allowOverrideWithJustification";

export type OutlookGraphSchemaMicrosoftGraphChatMessageReactionIdentitySet = (OutlookGraphSchemaMicrosoftGraphIdentitySet & {
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTeamworkHostedContent = (OutlookGraphSchemaMicrosoftGraphEntity & {
  contentBytes?: string | null;
  contentType?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphLabelActionSource = "manual" | "automatic" | "recommended" | "none" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphUsageRightsIncluded = (OutlookGraphSchemaMicrosoftGraphEntity & {
  ownerEmail?: string | null;
  userEmail?: string | null;
  value?: OutlookGraphSchemaMicrosoftGraphUsageRights;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphProcessContentRequest = {
  activityMetadata?: OutlookGraphSchemaMicrosoftGraphActivityMetadata;
  contentEntries?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphProcessContentMetadataBase>;
  deviceMetadata?: OutlookGraphSchemaMicrosoftGraphDeviceMetadata;
  integratedAppMetadata?: OutlookGraphSchemaMicrosoftGraphIntegratedApplicationMetadata;
  protectedAppMetadata?: (OutlookGraphSchemaMicrosoftGraphProtectedApplicationMetadata | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphAlbum = {
  coverImageItemId?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphHashes = {
  crc32Hash?: string | null;
  quickXorHash?: string | null;
  sha1Hash?: string | null;
  sha256Hash?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphFolderView = {
  sortBy?: string | null;
  sortOrder?: string | null;
  viewType?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPendingContentUpdate = {
  queuedDateTime?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphDocumentSetVersion = (OutlookGraphSchemaMicrosoftGraphListItemVersion & {
  comment?: string | null;
  createdBy?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  createdDateTime?: string | null;
  items?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphDocumentSetVersionItem>;
  shouldCaptureMinorVersion?: boolean | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphFieldValueSet = (OutlookGraphSchemaMicrosoftGraphEntity & {
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphListItemVersion = (OutlookGraphSchemaMicrosoftGraphBaseItemVersion & {
  fields?: (OutlookGraphSchemaMicrosoftGraphFieldValueSet | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphRetentionLabelSettings = {
  behaviorDuringRetentionPeriod?: (OutlookGraphSchemaMicrosoftGraphSecurityBehaviorDuringRetentionPeriod | {} | null);
  isContentUpdateAllowed?: boolean | null;
  isDeleteAllowed?: boolean | null;
  isLabelUpdateAllowed?: boolean | null;
  isMetadataUpdateAllowed?: boolean | null;
  isRecordLocked?: boolean | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphThumbnail = {
  content?: string | null;
  height?: number | null;
  sourceItemId?: string | null;
  url?: string | null;
  width?: number | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphBaseItemVersion = (OutlookGraphSchemaMicrosoftGraphEntity & {
  lastModifiedBy?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  lastModifiedDateTime?: string | null;
  publication?: (OutlookGraphSchemaMicrosoftGraphPublicationFacet | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookApplication = (OutlookGraphSchemaMicrosoftGraphEntity & {
  calculationMode?: string;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookComment = (OutlookGraphSchemaMicrosoftGraphEntity & {
  content?: string | null;
  contentType?: string;
  replies?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWorkbookCommentReply>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookFunctions = (OutlookGraphSchemaMicrosoftGraphEntity & {
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookNamedItem = (OutlookGraphSchemaMicrosoftGraphEntity & {
  comment?: string | null;
  name?: string | null;
  scope?: string;
  type?: string | null;
  value?: OutlookGraphSchemaJsonValue;
  visible?: boolean;
  worksheet?: (OutlookGraphSchemaMicrosoftGraphWorkbookWorksheet | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookOperation = (OutlookGraphSchemaMicrosoftGraphEntity & {
  error?: (OutlookGraphSchemaMicrosoftGraphWorkbookOperationError | {} | null);
  resourceLocation?: string | null;
  status?: OutlookGraphSchemaMicrosoftGraphWorkbookOperationStatus;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookTable = (OutlookGraphSchemaMicrosoftGraphEntity & {
  highlightFirstColumn?: boolean;
  highlightLastColumn?: boolean;
  legacyId?: string | null;
  name?: string | null;
  showBandedColumns?: boolean;
  showBandedRows?: boolean;
  showFilterButton?: boolean;
  showHeaders?: boolean;
  showTotals?: boolean;
  style?: string | null;
  columns?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWorkbookTableColumn>;
  rows?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWorkbookTableRow>;
  sort?: (OutlookGraphSchemaMicrosoftGraphWorkbookTableSort | {} | null);
  worksheet?: (OutlookGraphSchemaMicrosoftGraphWorkbookWorksheet | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookWorksheet = (OutlookGraphSchemaMicrosoftGraphEntity & {
  name?: string | null;
  position?: number;
  visibility?: string;
  charts?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWorkbookChart>;
  names?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWorkbookNamedItem>;
  pivotTables?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWorkbookPivotTable>;
  protection?: (OutlookGraphSchemaMicrosoftGraphWorkbookWorksheetProtection | {} | null);
  tables?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWorkbookTable>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphSiteArchiveStatus = "recentlyArchived" | "fullyArchived" | "reactivating" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphItemActionStat = {
  actionCount?: number | null;
  actorCount?: number | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphIncompleteData = {
  missingDataBeforeDateTime?: string | null;
  wasThrottled?: boolean | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphItemActivity = (OutlookGraphSchemaMicrosoftGraphEntity & {
  access?: (OutlookGraphSchemaMicrosoftGraphAccessAction | {} | null);
  activityDateTime?: string | null;
  actor?: (OutlookGraphSchemaMicrosoftGraphIdentitySet | {} | null);
  driveItem?: (OutlookGraphSchemaMicrosoftGraphDriveItem | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTermStoreTerm = (OutlookGraphSchemaMicrosoftGraphEntity & {
  createdDateTime?: string | null;
  descriptions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTermStoreLocalizedDescription>;
  labels?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTermStoreLocalizedLabel>;
  lastModifiedDateTime?: string | null;
  properties?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphKeyValue>;
  children?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTermStoreTerm>;
  relations?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTermStoreRelation>;
  set?: (OutlookGraphSchemaMicrosoftGraphTermStoreSet | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphDisplayNameLocalization = {
  displayName?: string | null;
  languageTag?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphSharePointGroupIdentity = (OutlookGraphSchemaMicrosoftGraphIdentity & {
  principalId?: string | null;
  title?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphSharePointIdentity = (OutlookGraphSchemaMicrosoftGraphIdentity & {
  loginName?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTermStoreTermGroupScope = "global" | "system" | "siteCollection" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphTermStoreLocalizedName = {
  languageTag?: string | null;
  name?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphKeyValue = {
  key?: string | null;
  value?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTermStoreRelation = (OutlookGraphSchemaMicrosoftGraphEntity & {
  relationship?: (OutlookGraphSchemaMicrosoftGraphTermStoreRelationType | {} | null);
  fromTerm?: (OutlookGraphSchemaMicrosoftGraphTermStoreTerm | {} | null);
  set?: (OutlookGraphSchemaMicrosoftGraphTermStoreSet | {} | null);
  toTerm?: (OutlookGraphSchemaMicrosoftGraphTermStoreTerm | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphSharingDetail = {
  sharedBy?: (OutlookGraphSchemaMicrosoftGraphInsightIdentity | {} | null);
  sharedDateTime?: string | null;
  sharingReference?: (OutlookGraphSchemaMicrosoftGraphResourceReference | {} | null);
  sharingSubject?: string | null;
  sharingType?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphResourceReference = {
  id?: string | null;
  type?: string | null;
  webUrl?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphResourceVisualization = {
  containerDisplayName?: string | null;
  containerType?: string | null;
  containerWebUrl?: string | null;
  mediaType?: string | null;
  previewImageUrl?: string | null;
  previewText?: string | null;
  title?: string | null;
  type?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphUsageDetails = {
  lastAccessedDateTime?: string | null;
  lastModifiedDateTime?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphSettingValue = {
  name?: string | null;
  value?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPost = (OutlookGraphSchemaMicrosoftGraphOutlookItem & {
  body?: (OutlookGraphSchemaMicrosoftGraphItemBody | {} | null);
  conversationId?: string | null;
  conversationThreadId?: string | null;
  from?: OutlookGraphSchemaMicrosoftGraphRecipient;
  hasAttachments?: boolean;
  newParticipants?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  receivedDateTime?: string;
  sender?: (OutlookGraphSchemaMicrosoftGraphRecipient | {} | null);
  attachments?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphAttachment>;
  extensions?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphExtension>;
  inReplyTo?: (OutlookGraphSchemaMicrosoftGraphPost | {} | null);
  multiValueExtendedProperties?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMultiValueLegacyExtendedProperty>;
  singleValueExtendedProperties?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphSingleValueLegacyExtendedProperty>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphScheduleChangeRequest = (OutlookGraphSchemaMicrosoftGraphChangeTrackedEntity & {
  assignedTo?: (OutlookGraphSchemaMicrosoftGraphScheduleChangeRequestActor | {} | null);
  managerActionDateTime?: string | null;
  managerActionMessage?: string | null;
  managerUserId?: string | null;
  senderDateTime?: string | null;
  senderMessage?: string | null;
  senderUserId?: string | null;
  state?: (OutlookGraphSchemaMicrosoftGraphScheduleChangeState | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphOpenShiftItem = (OutlookGraphSchemaMicrosoftGraphShiftItem & {
  openSlotCount?: number;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphShiftItem = (OutlookGraphSchemaMicrosoftGraphScheduleEntity & {
  activities?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphShiftActivity>;
  displayName?: string | null;
  notes?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTimeCardBreak = {
  breakId?: string | null;
  end?: (OutlookGraphSchemaMicrosoftGraphTimeCardEvent | {} | null);
  notes?: (OutlookGraphSchemaMicrosoftGraphItemBody | {} | null);
  start?: OutlookGraphSchemaMicrosoftGraphTimeCardEvent;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTimeCardEvent = {
  dateTime?: string;
  isAtApprovedLocation?: boolean | null;
  notes?: (OutlookGraphSchemaMicrosoftGraphItemBody | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphConfirmedBy = "none" | "user" | "manager" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphTimeCardEntry = {
  breaks?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTimeCardBreak>;
  clockInEvent?: (OutlookGraphSchemaMicrosoftGraphTimeCardEvent | {} | null);
  clockOutEvent?: (OutlookGraphSchemaMicrosoftGraphTimeCardEvent | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTimeCardState = "clockedIn" | "onBreak" | "clockedOut" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphTimeOffReasonIconType = "none" | "car" | "calendar" | "running" | "plane" | "firstAid" | "doctor" | "notWorking" | "clock" | "juryDuty" | "globe" | "cup" | "phone" | "weather" | "umbrella" | "piggyBank" | "dog" | "cake" | "trafficCone" | "pin" | "sunny" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphTimeOffItem = (OutlookGraphSchemaMicrosoftGraphScheduleEntity & {
  timeOffReasonId?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphSettingSource = {
  displayName?: string | null;
  id?: string | null;
  sourceType?: OutlookGraphSchemaMicrosoftGraphSettingSourceType;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphWindowsMalwareCategory = "invalid" | "adware" | "spyware" | "passwordStealer" | "trojanDownloader" | "worm" | "backdoor" | "remoteAccessTrojan" | "trojan" | "emailFlooder" | "keylogger" | "dialer" | "monitoringSoftware" | "browserModifier" | "cookie" | "browserPlugin" | "aolExploit" | "nuker" | "securityDisabler" | "jokeProgram" | "hostileActiveXControl" | "softwareBundler" | "stealthNotifier" | "settingsModifier" | "toolBar" | "remoteControlSoftware" | "trojanFtp" | "potentialUnwantedSoftware" | "icqExploit" | "trojanTelnet" | "exploit" | "filesharingProgram" | "malwareCreationTool" | "remote_Control_Software" | "tool" | "trojanDenialOfService" | "trojanDropper" | "trojanMassMailer" | "trojanMonitoringSoftware" | "trojanProxyServer" | "virus" | "known" | "unknown" | "spp" | "behavior" | "vulnerability" | "policy" | "enterpriseUnwantedSoftware" | "ransom" | "hipsRule";

export type OutlookGraphSchemaMicrosoftGraphWindowsMalwareExecutionState = "unknown" | "blocked" | "allowed" | "running" | "notRunning";

export type OutlookGraphSchemaMicrosoftGraphWindowsMalwareSeverity = "unknown" | "low" | "moderate" | "high" | "severe";

export type OutlookGraphSchemaMicrosoftGraphWindowsMalwareState = "unknown" | "detected" | "cleaned" | "quarantined" | "removed" | "allowed" | "blocked" | "cleanFailed" | "quarantineFailed" | "removeFailed" | "allowFailed" | "abandoned" | "blockFailed";

export type OutlookGraphSchemaMicrosoftGraphWindowsMalwareThreatState = "active" | "actionFailed" | "manualStepsRequired" | "fullScanRequired" | "rebootRequired" | "remediatedWithNonCriticalFailures" | "quarantined" | "removed" | "cleaned" | "allowed" | "noStatusCleared";

export type OutlookGraphSchemaMicrosoftGraphExternalLink = {
  href?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphLobbyBypassScope = "organizer" | "organization" | "organizationAndFederated" | "everyone" | "unknownFutureValue" | "invited" | "organizationExcludingGuests";

export type OutlookGraphSchemaMicrosoftGraphVirtualEventExternalInformation = {
  applicationId?: string | null;
  externalEventId?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphAttendanceRecord = (OutlookGraphSchemaMicrosoftGraphEntity & {
  attendanceIntervals?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphAttendanceInterval>;
  emailAddress?: string | null;
  externalRegistrationInformation?: (OutlookGraphSchemaMicrosoftGraphVirtualEventExternalRegistrationInformation | {} | null);
  identity?: (OutlookGraphSchemaMicrosoftGraphIdentity | {} | null);
  registrationId?: string | null;
  role?: string | null;
  totalAttendanceInSeconds?: number | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphOnlineMeetingRole = "attendee" | "presenter" | "unknownFutureValue" | "producer" | "coorganizer";

export type OutlookGraphSchemaMicrosoftGraphPlannerContainerType = "group" | "unknownFutureValue" | "roster";

export type OutlookGraphSchemaMicrosoftGraphPlannerCategoryDescriptions = {
  category1?: string | null;
  category10?: string | null;
  category11?: string | null;
  category12?: string | null;
  category13?: string | null;
  category14?: string | null;
  category15?: string | null;
  category16?: string | null;
  category17?: string | null;
  category18?: string | null;
  category19?: string | null;
  category2?: string | null;
  category20?: string | null;
  category21?: string | null;
  category22?: string | null;
  category23?: string | null;
  category24?: string | null;
  category25?: string | null;
  category3?: string | null;
  category4?: string | null;
  category5?: string | null;
  category6?: string | null;
  category7?: string | null;
  category8?: string | null;
  category9?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPlannerUserIds = {
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPlannerOrderHintsByAssignee = {
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPlannerChecklistItems = {
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPlannerExternalReferences = {
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTimeRange = {
  endTime?: string | null;
  startTime?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphServiceStorageQuotaBreakdown = (OutlookGraphSchemaMicrosoftGraphStorageQuotaBreakdown & {
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTimeOffDetails = {
  isAllDay?: boolean;
  subject?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTaskStatus = "notStarted" | "inProgress" | "completed" | "waitingOnOthers" | "deferred";

export type OutlookGraphSchemaMicrosoftGraphAttachmentBase = (OutlookGraphSchemaMicrosoftGraphEntity & {
  contentType?: string | null;
  lastModifiedDateTime?: string | null;
  name?: string | null;
  size?: number;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphAttachmentSession = (OutlookGraphSchemaMicrosoftGraphEntity & {
  content?: string | null;
  expirationDateTime?: string | null;
  nextExpectedRanges?: ReadonlyArray<string | null>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphChecklistItem = (OutlookGraphSchemaMicrosoftGraphEntity & {
  checkedDateTime?: string | null;
  createdDateTime?: string;
  displayName?: string | null;
  isChecked?: boolean | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphLinkedResource = (OutlookGraphSchemaMicrosoftGraphEntity & {
  applicationName?: string | null;
  displayName?: string | null;
  externalId?: string | null;
  webUrl?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPrintColorMode = "blackAndWhite" | "grayscale" | "color" | "auto" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphIntegerRange = {
  end?: number | null;
  start?: number | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPrintDuplexMode = "flipOnLongEdge" | "flipOnShortEdge" | "oneSided" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphPrinterFeedOrientation = "longEdgeFirst" | "shortEdgeFirst" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphPrintFinishing = "none" | "staple" | "punch" | "cover" | "bind" | "saddleStitch" | "stitchEdge" | "stapleTopLeft" | "stapleBottomLeft" | "stapleTopRight" | "stapleBottomRight" | "stitchLeftEdge" | "stitchTopEdge" | "stitchRightEdge" | "stitchBottomEdge" | "stapleDualLeft" | "stapleDualTop" | "stapleDualRight" | "stapleDualBottom" | "unknownFutureValue" | "stapleTripleLeft" | "stapleTripleTop" | "stapleTripleRight" | "stapleTripleBottom" | "bindLeft" | "bindTop" | "bindRight" | "bindBottom" | "foldAccordion" | "foldDoubleGate" | "foldGate" | "foldHalf" | "foldHalfZ" | "foldLeftGate" | "foldLetter" | "foldParallel" | "foldPoster" | "foldRightGate" | "foldZ" | "foldEngineeringZ" | "punchTopLeft" | "punchBottomLeft" | "punchTopRight" | "punchBottomRight" | "punchDualLeft" | "punchDualTop" | "punchDualRight" | "punchDualBottom" | "punchTripleLeft" | "punchTripleTop" | "punchTripleRight" | "punchTripleBottom" | "punchQuadLeft" | "punchQuadTop" | "punchQuadRight" | "punchQuadBottom" | "fold" | "trim" | "bale" | "bookletMaker" | "coat" | "laminate" | "trimAfterPages" | "trimAfterDocuments" | "trimAfterCopies" | "trimAfterJob";

export type OutlookGraphSchemaMicrosoftGraphPrintMultipageLayout = "clockwiseFromTopLeft" | "counterclockwiseFromTopLeft" | "counterclockwiseFromTopRight" | "clockwiseFromTopRight" | "counterclockwiseFromBottomLeft" | "clockwiseFromBottomLeft" | "counterclockwiseFromBottomRight" | "clockwiseFromBottomRight" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphPrintOrientation = "portrait" | "landscape" | "reverseLandscape" | "reversePortrait" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphPrintQuality = "low" | "medium" | "high" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphPrintScaling = "auto" | "shrinkToFit" | "fill" | "fit" | "none" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphPrinterProcessingStateDetail = "paused" | "mediaJam" | "mediaNeeded" | "mediaLow" | "mediaEmpty" | "coverOpen" | "interlockOpen" | "outputTrayMissing" | "outputAreaFull" | "markerSupplyLow" | "markerSupplyEmpty" | "inputTrayMissing" | "outputAreaAlmostFull" | "markerWasteAlmostFull" | "markerWasteFull" | "fuserOverTemp" | "fuserUnderTemp" | "other" | "none" | "movingToPaused" | "shutdown" | "connectingToDevice" | "timedOut" | "stopping" | "stoppedPartially" | "tonerLow" | "tonerEmpty" | "spoolAreaFull" | "doorOpen" | "opticalPhotoConductorNearEndOfLife" | "opticalPhotoConductorLifeOver" | "developerLow" | "developerEmpty" | "interpreterResourceUnavailable" | "unknownFutureValue" | "alertRemovalOfBinaryChangeEntry" | "banderAdded" | "banderAlmostEmpty" | "banderAlmostFull" | "banderAtLimit" | "banderClosed" | "banderConfigurationChange" | "banderCoverClosed" | "banderCoverOpen" | "banderEmpty" | "banderFull" | "banderInterlockClosed" | "banderInterlockOpen" | "banderJam" | "banderLifeAlmostOver" | "banderLifeOver" | "banderMemoryExhausted" | "banderMissing" | "banderMotorFailure" | "banderNearLimit" | "banderOffline" | "banderOpened" | "banderOverTemperature" | "banderPowerSaver" | "banderRecoverableFailure" | "banderRecoverableStorage" | "banderRemoved" | "banderResourceAdded" | "banderResourceRemoved" | "banderThermistorFailure" | "banderTimingFailure" | "banderTurnedOff" | "banderTurnedOn" | "banderUnderTemperature" | "banderUnrecoverableFailure" | "banderUnrecoverableStorageError" | "banderWarmingUp" | "binderAdded" | "binderAlmostEmpty" | "binderAlmostFull" | "binderAtLimit" | "binderClosed" | "binderConfigurationChange" | "binderCoverClosed" | "binderCoverOpen" | "binderEmpty" | "binderFull" | "binderInterlockClosed" | "binderInterlockOpen" | "binderJam" | "binderLifeAlmostOver" | "binderLifeOver" | "binderMemoryExhausted" | "binderMissing" | "binderMotorFailure" | "binderNearLimit" | "binderOffline" | "binderOpened" | "binderOverTemperature" | "binderPowerSaver" | "binderRecoverableFailure" | "binderRecoverableStorage" | "binderRemoved" | "binderResourceAdded" | "binderResourceRemoved" | "binderThermistorFailure" | "binderTimingFailure" | "binderTurnedOff" | "binderTurnedOn" | "binderUnderTemperature" | "binderUnrecoverableFailure" | "binderUnrecoverableStorageError" | "binderWarmingUp" | "cameraFailure" | "chamberCooling" | "chamberFailure" | "chamberHeating" | "chamberTemperatureHigh" | "chamberTemperatureLow" | "cleanerLifeAlmostOver" | "cleanerLifeOver" | "configurationChange" | "deactivated" | "deleted" | "dieCutterAdded" | "dieCutterAlmostEmpty" | "dieCutterAlmostFull" | "dieCutterAtLimit" | "dieCutterClosed" | "dieCutterConfigurationChange" | "dieCutterCoverClosed" | "dieCutterCoverOpen" | "dieCutterEmpty" | "dieCutterFull" | "dieCutterInterlockClosed" | "dieCutterInterlockOpen" | "dieCutterJam" | "dieCutterLifeAlmostOver" | "dieCutterLifeOver" | "dieCutterMemoryExhausted" | "dieCutterMissing" | "dieCutterMotorFailure" | "dieCutterNearLimit" | "dieCutterOffline" | "dieCutterOpened" | "dieCutterOverTemperature" | "dieCutterPowerSaver" | "dieCutterRecoverableFailure" | "dieCutterRecoverableStorage" | "dieCutterRemoved" | "dieCutterResourceAdded" | "dieCutterResourceRemoved" | "dieCutterThermistorFailure" | "dieCutterTimingFailure" | "dieCutterTurnedOff" | "dieCutterTurnedOn" | "dieCutterUnderTemperature" | "dieCutterUnrecoverableFailure" | "dieCutterUnrecoverableStorageError" | "dieCutterWarmingUp" | "extruderCooling" | "extruderFailure" | "extruderHeating" | "extruderJam" | "extruderTemperatureHigh" | "extruderTemperatureLow" | "fanFailure" | "faxModemLifeAlmostOver" | "faxModemLifeOver" | "faxModemMissing" | "faxModemTurnedOff" | "faxModemTurnedOn" | "folderAdded" | "folderAlmostEmpty" | "folderAlmostFull" | "folderAtLimit" | "folderClosed" | "folderConfigurationChange" | "folderCoverClosed" | "folderCoverOpen" | "folderEmpty" | "folderFull" | "folderInterlockClosed" | "folderInterlockOpen" | "folderJam" | "folderLifeAlmostOver" | "folderLifeOver" | "folderMemoryExhausted" | "folderMissing" | "folderMotorFailure" | "folderNearLimit" | "folderOffline" | "folderOpened" | "folderOverTemperature" | "folderPowerSaver" | "folderRecoverableFailure" | "folderRecoverableStorage" | "folderRemoved" | "folderResourceAdded" | "folderResourceRemoved" | "folderThermistorFailure" | "folderTimingFailure" | "folderTurnedOff" | "folderTurnedOn" | "folderUnderTemperature" | "folderUnrecoverableFailure" | "folderUnrecoverableStorageError" | "folderWarmingUp" | "hibernate" | "holdNewJobs" | "identifyPrinterRequested" | "imprinterAdded" | "imprinterAlmostEmpty" | "imprinterAlmostFull" | "imprinterAtLimit" | "imprinterClosed" | "imprinterConfigurationChange" | "imprinterCoverClosed" | "imprinterCoverOpen" | "imprinterEmpty" | "imprinterFull" | "imprinterInterlockClosed" | "imprinterInterlockOpen" | "imprinterJam" | "imprinterLifeAlmostOver" | "imprinterLifeOver" | "imprinterMemoryExhausted" | "imprinterMissing" | "imprinterMotorFailure" | "imprinterNearLimit" | "imprinterOffline" | "imprinterOpened" | "imprinterOverTemperature" | "imprinterPowerSaver" | "imprinterRecoverableFailure" | "imprinterRecoverableStorage" | "imprinterRemoved" | "imprinterResourceAdded" | "imprinterResourceRemoved" | "imprinterThermistorFailure" | "imprinterTimingFailure" | "imprinterTurnedOff" | "imprinterTurnedOn" | "imprinterUnderTemperature" | "imprinterUnrecoverableFailure" | "imprinterUnrecoverableStorageError" | "imprinterWarmingUp" | "inputCannotFeedSizeSelected" | "inputManualInputRequest" | "inputMediaColorChange" | "inputMediaFormPartsChange" | "inputMediaSizeChange" | "inputMediaTrayFailure" | "inputMediaTrayFeedError" | "inputMediaTrayJam" | "inputMediaTypeChange" | "inputMediaWeightChange" | "inputPickRollerFailure" | "inputPickRollerLifeOver" | "inputPickRollerLifeWarn" | "inputPickRollerMissing" | "inputTrayElevationFailure" | "inputTrayPositionFailure" | "inserterAdded" | "inserterAlmostEmpty" | "inserterAlmostFull" | "inserterAtLimit" | "inserterClosed" | "inserterConfigurationChange" | "inserterCoverClosed" | "inserterCoverOpen" | "inserterEmpty" | "inserterFull" | "inserterInterlockClosed" | "inserterInterlockOpen" | "inserterJam" | "inserterLifeAlmostOver" | "inserterLifeOver" | "inserterMemoryExhausted" | "inserterMissing" | "inserterMotorFailure" | "inserterNearLimit" | "inserterOffline" | "inserterOpened" | "inserterOverTemperature" | "inserterPowerSaver" | "inserterRecoverableFailure" | "inserterRecoverableStorage" | "inserterRemoved" | "inserterResourceAdded" | "inserterResourceRemoved" | "inserterThermistorFailure" | "inserterTimingFailure" | "inserterTurnedOff" | "inserterTurnedOn" | "inserterUnderTemperature" | "inserterUnrecoverableFailure" | "inserterUnrecoverableStorageError" | "inserterWarmingUp" | "interlockClosed" | "interpreterCartridgeAdded" | "interpreterCartridgeDeleted" | "interpreterComplexPageEncountered" | "interpreterMemoryDecrease" | "interpreterMemoryIncrease" | "interpreterResourceAdded" | "interpreterResourceDeleted" | "lampAtEol" | "lampFailure" | "lampNearEol" | "laserAtEol" | "laserFailure" | "laserNearEol" | "makeEnvelopeAdded" | "makeEnvelopeAlmostEmpty" | "makeEnvelopeAlmostFull" | "makeEnvelopeAtLimit" | "makeEnvelopeClosed" | "makeEnvelopeConfigurationChange" | "makeEnvelopeCoverClosed" | "makeEnvelopeCoverOpen" | "makeEnvelopeEmpty" | "makeEnvelopeFull" | "makeEnvelopeInterlockClosed" | "makeEnvelopeInterlockOpen" | "makeEnvelopeJam" | "makeEnvelopeLifeAlmostOver" | "makeEnvelopeLifeOver" | "makeEnvelopeMemoryExhausted" | "makeEnvelopeMissing" | "makeEnvelopeMotorFailure" | "makeEnvelopeNearLimit" | "makeEnvelopeOffline" | "makeEnvelopeOpened" | "makeEnvelopeOverTemperature" | "makeEnvelopePowerSaver" | "makeEnvelopeRecoverableFailure" | "makeEnvelopeRecoverableStorage" | "makeEnvelopeRemoved" | "makeEnvelopeResourceAdded" | "makeEnvelopeResourceRemoved" | "makeEnvelopeThermistorFailure" | "makeEnvelopeTimingFailure" | "makeEnvelopeTurnedOff" | "makeEnvelopeTurnedOn" | "makeEnvelopeUnderTemperature" | "makeEnvelopeUnrecoverableFailure" | "makeEnvelopeUnrecoverableStorageError" | "makeEnvelopeWarmingUp" | "markerAdjustingPrintQuality" | "markerCleanerMissing" | "markerDeveloperAlmostEmpty" | "markerDeveloperEmpty" | "markerDeveloperMissing" | "markerFuserMissing" | "markerFuserThermistorFailure" | "markerFuserTimingFailure" | "markerInkAlmostEmpty" | "markerInkEmpty" | "markerInkMissing" | "markerOpcMissing" | "markerPrintRibbonAlmostEmpty" | "markerPrintRibbonEmpty" | "markerPrintRibbonMissing" | "markerSupplyAlmostEmpty" | "markerSupplyMissing" | "markerTonerCartridgeMissing" | "markerTonerMissing" | "markerWasteInkReceptacleAlmostFull" | "markerWasteInkReceptacleFull" | "markerWasteInkReceptacleMissing" | "markerWasteMissing" | "markerWasteTonerReceptacleAlmostFull" | "markerWasteTonerReceptacleFull" | "markerWasteTonerReceptacleMissing" | "materialEmpty" | "materialLow" | "materialNeeded" | "mediaDrying" | "mediaPathCannotDuplexMediaSelected" | "mediaPathFailure" | "mediaPathInputEmpty" | "mediaPathInputFeedError" | "mediaPathInputJam" | "mediaPathInputRequest" | "mediaPathJam" | "mediaPathMediaTrayAlmostFull" | "mediaPathMediaTrayFull" | "mediaPathMediaTrayMissing" | "mediaPathOutputFeedError" | "mediaPathOutputFull" | "mediaPathOutputJam" | "mediaPathPickRollerFailure" | "mediaPathPickRollerLifeOver" | "mediaPathPickRollerLifeWarn" | "mediaPathPickRollerMissing" | "motorFailure" | "outputMailboxSelectFailure" | "outputMediaTrayFailure" | "outputMediaTrayFeedError" | "outputMediaTrayJam" | "perforaterAdded" | "perforaterAlmostEmpty" | "perforaterAlmostFull" | "perforaterAtLimit" | "perforaterClosed" | "perforaterConfigurationChange" | "perforaterCoverClosed" | "perforaterCoverOpen" | "perforaterEmpty" | "perforaterFull" | "perforaterInterlockClosed" | "perforaterInterlockOpen" | "perforaterJam" | "perforaterLifeAlmostOver" | "perforaterLifeOver" | "perforaterMemoryExhausted" | "perforaterMissing" | "perforaterMotorFailure" | "perforaterNearLimit" | "perforaterOffline" | "perforaterOpened" | "perforaterOverTemperature" | "perforaterPowerSaver" | "perforaterRecoverableFailure" | "perforaterRecoverableStorage" | "perforaterRemoved" | "perforaterResourceAdded" | "perforaterResourceRemoved" | "perforaterThermistorFailure" | "perforaterTimingFailure" | "perforaterTurnedOff" | "perforaterTurnedOn" | "perforaterUnderTemperature" | "perforaterUnrecoverableFailure" | "perforaterUnrecoverableStorageError" | "perforaterWarmingUp" | "platformCooling" | "platformFailure" | "platformHeating" | "platformTemperatureHigh" | "platformTemperatureLow" | "powerDown" | "powerUp" | "printerManualReset" | "printerNmsReset" | "printerReadyToPrint" | "puncherAdded" | "puncherAlmostEmpty" | "puncherAlmostFull" | "puncherAtLimit" | "puncherClosed" | "puncherConfigurationChange" | "puncherCoverClosed" | "puncherCoverOpen" | "puncherEmpty" | "puncherFull" | "puncherInterlockClosed" | "puncherInterlockOpen" | "puncherJam" | "puncherLifeAlmostOver" | "puncherLifeOver" | "puncherMemoryExhausted" | "puncherMissing" | "puncherMotorFailure" | "puncherNearLimit" | "puncherOffline" | "puncherOpened" | "puncherOverTemperature" | "puncherPowerSaver" | "puncherRecoverableFailure" | "puncherRecoverableStorage" | "puncherRemoved" | "puncherResourceAdded" | "puncherResourceRemoved" | "puncherThermistorFailure" | "puncherTimingFailure" | "puncherTurnedOff" | "puncherTurnedOn" | "puncherUnderTemperature" | "puncherUnrecoverableFailure" | "puncherUnrecoverableStorageError" | "puncherWarmingUp" | "resuming" | "scanMediaPathFailure" | "scanMediaPathInputEmpty" | "scanMediaPathInputFeedError" | "scanMediaPathInputJam" | "scanMediaPathInputRequest" | "scanMediaPathJam" | "scanMediaPathOutputFeedError" | "scanMediaPathOutputFull" | "scanMediaPathOutputJam" | "scanMediaPathPickRollerFailure" | "scanMediaPathPickRollerLifeOver" | "scanMediaPathPickRollerLifeWarn" | "scanMediaPathPickRollerMissing" | "scanMediaPathTrayAlmostFull" | "scanMediaPathTrayFull" | "scanMediaPathTrayMissing" | "scannerLightFailure" | "scannerLightLifeAlmostOver" | "scannerLightLifeOver" | "scannerLightMissing" | "scannerSensorFailure" | "scannerSensorLifeAlmostOver" | "scannerSensorLifeOver" | "scannerSensorMissing" | "separationCutterAdded" | "separationCutterAlmostEmpty" | "separationCutterAlmostFull" | "separationCutterAtLimit" | "separationCutterClosed" | "separationCutterConfigurationChange" | "separationCutterCoverClosed" | "separationCutterCoverOpen" | "separationCutterEmpty" | "separationCutterFull" | "separationCutterInterlockClosed" | "separationCutterInterlockOpen" | "separationCutterJam" | "separationCutterLifeAlmostOver" | "separationCutterLifeOver" | "separationCutterMemoryExhausted" | "separationCutterMissing" | "separationCutterMotorFailure" | "separationCutterNearLimit" | "separationCutterOffline" | "separationCutterOpened" | "separationCutterOverTemperature" | "separationCutterPowerSaver" | "separationCutterRecoverableFailure" | "separationCutterRecoverableStorage" | "separationCutterRemoved" | "separationCutterResourceAdded" | "separationCutterResourceRemoved" | "separationCutterThermistorFailure" | "separationCutterTimingFailure" | "separationCutterTurnedOff" | "separationCutterTurnedOn" | "separationCutterUnderTemperature" | "separationCutterUnrecoverableFailure" | "separationCutterUnrecoverableStorageError" | "separationCutterWarmingUp" | "sheetRotatorAdded" | "sheetRotatorAlmostEmpty" | "sheetRotatorAlmostFull" | "sheetRotatorAtLimit" | "sheetRotatorClosed" | "sheetRotatorConfigurationChange" | "sheetRotatorCoverClosed" | "sheetRotatorCoverOpen" | "sheetRotatorEmpty" | "sheetRotatorFull" | "sheetRotatorInterlockClosed" | "sheetRotatorInterlockOpen" | "sheetRotatorJam" | "sheetRotatorLifeAlmostOver" | "sheetRotatorLifeOver" | "sheetRotatorMemoryExhausted" | "sheetRotatorMissing" | "sheetRotatorMotorFailure" | "sheetRotatorNearLimit" | "sheetRotatorOffline" | "sheetRotatorOpened" | "sheetRotatorOverTemperature" | "sheetRotatorPowerSaver" | "sheetRotatorRecoverableFailure" | "sheetRotatorRecoverableStorage" | "sheetRotatorRemoved" | "sheetRotatorResourceAdded" | "sheetRotatorResourceRemoved" | "sheetRotatorThermistorFailure" | "sheetRotatorTimingFailure" | "sheetRotatorTurnedOff" | "sheetRotatorTurnedOn" | "sheetRotatorUnderTemperature" | "sheetRotatorUnrecoverableFailure" | "sheetRotatorUnrecoverableStorageError" | "sheetRotatorWarmingUp" | "slitterAdded" | "slitterAlmostEmpty" | "slitterAlmostFull" | "slitterAtLimit" | "slitterClosed" | "slitterConfigurationChange" | "slitterCoverClosed" | "slitterCoverOpen" | "slitterEmpty" | "slitterFull" | "slitterInterlockClosed" | "slitterInterlockOpen" | "slitterJam" | "slitterLifeAlmostOver" | "slitterLifeOver" | "slitterMemoryExhausted" | "slitterMissing" | "slitterMotorFailure" | "slitterNearLimit" | "slitterOffline" | "slitterOpened" | "slitterOverTemperature" | "slitterPowerSaver" | "slitterRecoverableFailure" | "slitterRecoverableStorage" | "slitterRemoved" | "slitterResourceAdded" | "slitterResourceRemoved" | "slitterThermistorFailure" | "slitterTimingFailure" | "slitterTurnedOff" | "slitterTurnedOn" | "slitterUnderTemperature" | "slitterUnrecoverableFailure" | "slitterUnrecoverableStorageError" | "slitterWarmingUp" | "stackerAdded" | "stackerAlmostEmpty" | "stackerAlmostFull" | "stackerAtLimit" | "stackerClosed" | "stackerConfigurationChange" | "stackerCoverClosed" | "stackerCoverOpen" | "stackerEmpty" | "stackerFull" | "stackerInterlockClosed" | "stackerInterlockOpen" | "stackerJam" | "stackerLifeAlmostOver" | "stackerLifeOver" | "stackerMemoryExhausted" | "stackerMissing" | "stackerMotorFailure" | "stackerNearLimit" | "stackerOffline" | "stackerOpened" | "stackerOverTemperature" | "stackerPowerSaver" | "stackerRecoverableFailure" | "stackerRecoverableStorage" | "stackerRemoved" | "stackerResourceAdded" | "stackerResourceRemoved" | "stackerThermistorFailure" | "stackerTimingFailure" | "stackerTurnedOff" | "stackerTurnedOn" | "stackerUnderTemperature" | "stackerUnrecoverableFailure" | "stackerUnrecoverableStorageError" | "stackerWarmingUp" | "standby" | "staplerAdded" | "staplerAlmostEmpty" | "staplerAlmostFull" | "staplerAtLimit" | "staplerClosed" | "staplerConfigurationChange" | "staplerCoverClosed" | "staplerCoverOpen" | "staplerEmpty" | "staplerFull" | "staplerInterlockClosed" | "staplerInterlockOpen" | "staplerJam" | "staplerLifeAlmostOver" | "staplerLifeOver" | "staplerMemoryExhausted" | "staplerMissing" | "staplerMotorFailure" | "staplerNearLimit" | "staplerOffline" | "staplerOpened" | "staplerOverTemperature" | "staplerPowerSaver" | "staplerRecoverableFailure" | "staplerRecoverableStorage" | "staplerRemoved" | "staplerResourceAdded" | "staplerResourceRemoved" | "staplerThermistorFailure" | "staplerTimingFailure" | "staplerTurnedOff" | "staplerTurnedOn" | "staplerUnderTemperature" | "staplerUnrecoverableFailure" | "staplerUnrecoverableStorageError" | "staplerWarmingUp" | "stitcherAdded" | "stitcherAlmostEmpty" | "stitcherAlmostFull" | "stitcherAtLimit" | "stitcherClosed" | "stitcherConfigurationChange" | "stitcherCoverClosed" | "stitcherCoverOpen" | "stitcherEmpty" | "stitcherFull" | "stitcherInterlockClosed" | "stitcherInterlockOpen" | "stitcherJam" | "stitcherLifeAlmostOver" | "stitcherLifeOver" | "stitcherMemoryExhausted" | "stitcherMissing" | "stitcherMotorFailure" | "stitcherNearLimit" | "stitcherOffline" | "stitcherOpened" | "stitcherOverTemperature" | "stitcherPowerSaver" | "stitcherRecoverableFailure" | "stitcherRecoverableStorage" | "stitcherRemoved" | "stitcherResourceAdded" | "stitcherResourceRemoved" | "stitcherThermistorFailure" | "stitcherTimingFailure" | "stitcherTurnedOff" | "stitcherTurnedOn" | "stitcherUnderTemperature" | "stitcherUnrecoverableFailure" | "stitcherUnrecoverableStorageError" | "stitcherWarmingUp" | "subunitAdded" | "subunitAlmostEmpty" | "subunitAlmostFull" | "subunitAtLimit" | "subunitClosed" | "subunitCoolingDown" | "subunitEmpty" | "subunitFull" | "subunitLifeAlmostOver" | "subunitLifeOver" | "subunitMemoryExhausted" | "subunitMissing" | "subunitMotorFailure" | "subunitNearLimit" | "subunitOffline" | "subunitOpened" | "subunitOverTemperature" | "subunitPowerSaver" | "subunitRecoverableFailure" | "subunitRecoverableStorage" | "subunitRemoved" | "subunitResourceAdded" | "subunitResourceRemoved" | "subunitThermistorFailure" | "subunitTimingFailure" | "subunitTurnedOff" | "subunitTurnedOn" | "subunitUnderTemperature" | "subunitUnrecoverableFailure" | "subunitUnrecoverableStorage" | "subunitWarmingUp" | "suspend" | "testing" | "trimmerAdded" | "trimmerAlmostEmpty" | "trimmerAlmostFull" | "trimmerAtLimit" | "trimmerClosed" | "trimmerConfigurationChange" | "trimmerCoverClosed" | "trimmerCoverOpen" | "trimmerEmpty" | "trimmerFull" | "trimmerInterlockClosed" | "trimmerInterlockOpen" | "trimmerJam" | "trimmerLifeAlmostOver" | "trimmerLifeOver" | "trimmerMemoryExhausted" | "trimmerMissing" | "trimmerMotorFailure" | "trimmerNearLimit" | "trimmerOffline" | "trimmerOpened" | "trimmerOverTemperature" | "trimmerPowerSaver" | "trimmerRecoverableFailure" | "trimmerRecoverableStorage" | "trimmerRemoved" | "trimmerResourceAdded" | "trimmerResourceRemoved" | "trimmerThermistorFailure" | "trimmerTimingFailure" | "trimmerTurnedOff" | "trimmerTurnedOn" | "trimmerUnderTemperature" | "trimmerUnrecoverableFailure" | "trimmerUnrecoverableStorageError" | "trimmerWarmingUp" | "unknown" | "wrapperAdded" | "wrapperAlmostEmpty" | "wrapperAlmostFull" | "wrapperAtLimit" | "wrapperClosed" | "wrapperConfigurationChange" | "wrapperCoverClosed" | "wrapperCoverOpen" | "wrapperEmpty" | "wrapperFull" | "wrapperInterlockClosed" | "wrapperInterlockOpen" | "wrapperJam" | "wrapperLifeAlmostOver" | "wrapperLifeOver" | "wrapperMemoryExhausted" | "wrapperMissing" | "wrapperMotorFailure" | "wrapperNearLimit" | "wrapperOffline" | "wrapperOpened" | "wrapperOverTemperature" | "wrapperPowerSaver" | "wrapperRecoverableFailure" | "wrapperRecoverableStorage" | "wrapperRemoved" | "wrapperResourceAdded" | "wrapperResourceRemoved" | "wrapperThermistorFailure" | "wrapperTimingFailure" | "wrapperTurnedOff" | "wrapperTurnedOn" | "wrapperUnderTemperature" | "wrapperUnrecoverableFailure" | "wrapperUnrecoverableStorageError" | "wrapperWarmingUp";

export type OutlookGraphSchemaMicrosoftGraphPrinterProcessingState = "unknown" | "idle" | "processing" | "stopped" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphPrintJobConfiguration = {
  collate?: boolean | null;
  colorMode?: (OutlookGraphSchemaMicrosoftGraphPrintColorMode | {} | null);
  copies?: number | null;
  dpi?: number | null;
  duplexMode?: (OutlookGraphSchemaMicrosoftGraphPrintDuplexMode | {} | null);
  feedOrientation?: (OutlookGraphSchemaMicrosoftGraphPrinterFeedOrientation | {} | null);
  finishings?: ReadonlyArray<(OutlookGraphSchemaMicrosoftGraphPrintFinishing | {} | null)>;
  fitPdfToPage?: boolean | null;
  inputBin?: string | null;
  margin?: (OutlookGraphSchemaMicrosoftGraphPrintMargin | {} | null);
  mediaSize?: string | null;
  mediaType?: string | null;
  multipageLayout?: (OutlookGraphSchemaMicrosoftGraphPrintMultipageLayout | {} | null);
  orientation?: (OutlookGraphSchemaMicrosoftGraphPrintOrientation | {} | null);
  outputBin?: string | null;
  pageRanges?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphIntegerRange>;
  pagesPerSheet?: number | null;
  quality?: (OutlookGraphSchemaMicrosoftGraphPrintQuality | {} | null);
  scaling?: (OutlookGraphSchemaMicrosoftGraphPrintScaling | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphUserIdentity = (OutlookGraphSchemaMicrosoftGraphIdentity & {
  ipAddress?: string | null;
  userPrincipalName?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPrintJobStatus = {
  description?: string;
  details?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPrintJobStateDetail>;
  isAcquiredByPrinter?: boolean;
  state?: OutlookGraphSchemaMicrosoftGraphPrintJobProcessingState;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPrintDocument = (OutlookGraphSchemaMicrosoftGraphEntity & {
  contentType?: string | null;
  displayName?: string | null;
  downloadedDateTime?: string | null;
  size?: number;
  uploadedDateTime?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPrintTask = (OutlookGraphSchemaMicrosoftGraphEntity & {
  parentUrl?: string;
  status?: OutlookGraphSchemaMicrosoftGraphPrintTaskStatus;
  definition?: OutlookGraphSchemaMicrosoftGraphPrintTaskDefinition;
  trigger?: OutlookGraphSchemaMicrosoftGraphPrintTaskTrigger;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPrintEvent = "jobStarted" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphPrintTaskDefinition = (OutlookGraphSchemaMicrosoftGraphEntity & {
  createdBy?: OutlookGraphSchemaMicrosoftGraphAppIdentity;
  displayName?: string;
  tasks?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphPrintTask>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphTeamsAppResourceSpecificPermissionType = "delegated" | "application" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphTeamworkConversationIdentity = (OutlookGraphSchemaMicrosoftGraphIdentity & {
  conversationIdentityType?: (OutlookGraphSchemaMicrosoftGraphTeamworkConversationIdentityType | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphUsageRights = "unknown" | "docEdit" | "edit" | "comment" | "export" | "forward" | "owner" | "print" | "reply" | "replyAll" | "view" | "extract" | "viewRightsData" | "editRightsData" | "objModel" | "accessDenied" | "userDefinedProtectionTypeNotSupportedException" | "encryptedProtectionTypeNotSupportedException" | "purviewClaimsChallengeNotSupportedException" | "exception" | "labelNotFoundException" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphActivityMetadata = {
  activity?: OutlookGraphSchemaMicrosoftGraphUserActivityType;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphProcessContentMetadataBase = {
  content?: (OutlookGraphSchemaMicrosoftGraphContentBase | {} | null);
  correlationId?: string | null;
  createdDateTime?: string;
  identifier?: string;
  isTruncated?: boolean;
  length?: number | null;
  modifiedDateTime?: string;
  name?: string;
  sequenceNumber?: number | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphDeviceMetadata = {
  deviceType?: string | null;
  ipAddress?: string | null;
  operatingSystemSpecifications?: (OutlookGraphSchemaMicrosoftGraphOperatingSystemSpecifications | {} | null);
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphIntegratedApplicationMetadata = {
  name?: string | null;
  version?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphProtectedApplicationMetadata = (OutlookGraphSchemaMicrosoftGraphIntegratedApplicationMetadata & {
  applicationLocation?: (OutlookGraphSchemaMicrosoftGraphPolicyLocation | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphDocumentSetVersionItem = {
  itemId?: string | null;
  title?: string | null;
  versionId?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphSecurityBehaviorDuringRetentionPeriod = "doNotRetain" | "retain" | "retainAsRecord" | "retainAsRegulatoryRecord" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphWorkbookCommentReply = (OutlookGraphSchemaMicrosoftGraphEntity & {
  content?: string | null;
  contentType?: string;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookOperationError = {
  code?: string | null;
  innerError?: (OutlookGraphSchemaMicrosoftGraphWorkbookOperationError | {} | null);
  message?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphWorkbookOperationStatus = "notStarted" | "running" | "succeeded" | "failed";

export type OutlookGraphSchemaMicrosoftGraphWorkbookTableColumn = (OutlookGraphSchemaMicrosoftGraphEntity & {
  index?: number;
  name?: string | null;
  values?: OutlookGraphSchemaJsonValue;
  filter?: (OutlookGraphSchemaMicrosoftGraphWorkbookFilter | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookTableRow = (OutlookGraphSchemaMicrosoftGraphEntity & {
  index?: number;
  values?: OutlookGraphSchemaJsonValue;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookTableSort = (OutlookGraphSchemaMicrosoftGraphEntity & {
  fields?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWorkbookSortField>;
  matchCase?: boolean;
  method?: string;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookChart = (OutlookGraphSchemaMicrosoftGraphEntity & {
  height?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  left?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  name?: string | null;
  top?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  width?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  axes?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartAxes | {} | null);
  dataLabels?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartDataLabels | {} | null);
  format?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartAreaFormat | {} | null);
  legend?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartLegend | {} | null);
  series?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWorkbookChartSeries>;
  title?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartTitle | {} | null);
  worksheet?: (OutlookGraphSchemaMicrosoftGraphWorkbookWorksheet | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookPivotTable = (OutlookGraphSchemaMicrosoftGraphEntity & {
  name?: string | null;
  worksheet?: (OutlookGraphSchemaMicrosoftGraphWorkbookWorksheet | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookWorksheetProtection = (OutlookGraphSchemaMicrosoftGraphEntity & {
  options?: (OutlookGraphSchemaMicrosoftGraphWorkbookWorksheetProtectionOptions | {} | null);
  protected?: boolean;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphAccessAction = {
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTermStoreLocalizedDescription = {
  description?: string | null;
  languageTag?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTermStoreLocalizedLabel = {
  isDefault?: boolean | null;
  languageTag?: string | null;
  name?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTermStoreRelationType = "pin" | "reuse" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphInsightIdentity = {
  address?: string | null;
  displayName?: string | null;
  id?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphScheduleChangeRequestActor = "sender" | "recipient" | "manager" | "system" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphScheduleChangeState = "pending" | "approved" | "declined" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphScheduleEntity = {
  endDateTime?: string | null;
  startDateTime?: string | null;
  theme?: OutlookGraphSchemaMicrosoftGraphScheduleEntityTheme;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphShiftActivity = {
  code?: string | null;
  displayName?: string | null;
  endDateTime?: string | null;
  isPaid?: boolean | null;
  startDateTime?: string | null;
  theme?: OutlookGraphSchemaMicrosoftGraphScheduleEntityTheme;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphSettingSourceType = "deviceConfiguration" | "deviceIntent";

export type OutlookGraphSchemaMicrosoftGraphAttendanceInterval = {
  durationInSeconds?: number | null;
  joinDateTime?: string | null;
  leaveDateTime?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphVirtualEventExternalRegistrationInformation = {
  referrer?: string | null;
  registrationId?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphStorageQuotaBreakdown = (OutlookGraphSchemaMicrosoftGraphEntity & {
  displayName?: string | null;
  manageWebUrl?: string | null;
  used?: number | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphPrintMargin = {
  bottom?: number | null;
  left?: number | null;
  right?: number | null;
  top?: number | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPrintJobStateDetail = "uploadPending" | "transforming" | "completedSuccessfully" | "completedWithWarnings" | "completedWithErrors" | "releaseWait" | "interpreting" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphPrintJobProcessingState = "unknown" | "pending" | "processing" | "paused" | "stopped" | "completed" | "canceled" | "aborted" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphPrintTaskStatus = {
  description?: string;
  state?: OutlookGraphSchemaMicrosoftGraphPrintTaskProcessingState;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphAppIdentity = {
  appId?: string | null;
  displayName?: string | null;
  servicePrincipalId?: string | null;
  servicePrincipalName?: string | null;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphTeamworkConversationIdentityType = "team" | "channel" | "chat" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphUserActivityType = "uploadText" | "uploadFile" | "downloadText" | "downloadFile" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphContentBase = {
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphOperatingSystemSpecifications = {
  operatingSystemPlatform?: string;
  operatingSystemVersion?: string;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphPolicyLocation = {
  value?: string;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphWorkbookFilter = (OutlookGraphSchemaMicrosoftGraphEntity & {
  criteria?: (OutlookGraphSchemaMicrosoftGraphWorkbookFilterCriteria | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookSortField = {
  ascending?: boolean;
  color?: string | null;
  dataOption?: string;
  icon?: (OutlookGraphSchemaMicrosoftGraphWorkbookIcon | {} | null);
  key?: number;
  sortOn?: string;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphWorkbookChartAxes = (OutlookGraphSchemaMicrosoftGraphEntity & {
  categoryAxis?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartAxis | {} | null);
  seriesAxis?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartAxis | {} | null);
  valueAxis?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartAxis | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookChartDataLabels = (OutlookGraphSchemaMicrosoftGraphEntity & {
  position?: string | null;
  separator?: string | null;
  showBubbleSize?: boolean | null;
  showCategoryName?: boolean | null;
  showLegendKey?: boolean | null;
  showPercentage?: boolean | null;
  showSeriesName?: boolean | null;
  showValue?: boolean | null;
  format?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartDataLabelFormat | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookChartAreaFormat = (OutlookGraphSchemaMicrosoftGraphEntity & {
  fill?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartFill | {} | null);
  font?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartFont | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookChartLegend = (OutlookGraphSchemaMicrosoftGraphEntity & {
  overlay?: boolean | null;
  position?: string | null;
  visible?: boolean;
  format?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartLegendFormat | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookChartSeries = (OutlookGraphSchemaMicrosoftGraphEntity & {
  name?: string | null;
  format?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartSeriesFormat | {} | null);
  points?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphWorkbookChartPoint>;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookChartTitle = (OutlookGraphSchemaMicrosoftGraphEntity & {
  overlay?: boolean | null;
  text?: string | null;
  visible?: boolean;
  format?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartTitleFormat | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookWorksheetProtectionOptions = {
  allowAutoFilter?: boolean;
  allowDeleteColumns?: boolean;
  allowDeleteRows?: boolean;
  allowFormatCells?: boolean;
  allowFormatColumns?: boolean;
  allowFormatRows?: boolean;
  allowInsertColumns?: boolean;
  allowInsertHyperlinks?: boolean;
  allowInsertRows?: boolean;
  allowPivotTables?: boolean;
  allowSort?: boolean;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphScheduleEntityTheme = "white" | "blue" | "green" | "purple" | "pink" | "yellow" | "gray" | "darkBlue" | "darkGreen" | "darkPurple" | "darkPink" | "darkYellow" | "unknownFutureValue" | "darkRed" | "cranberry" | "darkOrange" | "bronze" | "peach" | "gold" | "lime" | "forest" | "lightGreen" | "jade" | "lightTeal" | "darkTeal" | "steel" | "skyBlue" | "blueGray" | "lavender" | "lilac" | "plum" | "magenta" | "darkBrown" | "beige" | "charcoal" | "silver";

export type OutlookGraphSchemaMicrosoftGraphPrintTaskProcessingState = "pending" | "processing" | "completed" | "aborted" | "unknownFutureValue";

export type OutlookGraphSchemaMicrosoftGraphWorkbookFilterCriteria = {
  color?: string | null;
  criterion1?: string | null;
  criterion2?: string | null;
  dynamicCriteria?: string;
  filterOn?: string;
  icon?: (OutlookGraphSchemaMicrosoftGraphWorkbookIcon | {} | null);
  operator?: string;
  values?: OutlookGraphSchemaJsonValue;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphWorkbookIcon = {
  index?: number;
  set?: string;
  "@odata.type": string;
};

export type OutlookGraphSchemaMicrosoftGraphWorkbookChartAxis = (OutlookGraphSchemaMicrosoftGraphEntity & {
  majorUnit?: OutlookGraphSchemaJsonValue;
  maximum?: OutlookGraphSchemaJsonValue;
  minimum?: OutlookGraphSchemaJsonValue;
  minorUnit?: OutlookGraphSchemaJsonValue;
  format?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartAxisFormat | {} | null);
  majorGridlines?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartGridlines | {} | null);
  minorGridlines?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartGridlines | {} | null);
  title?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartAxisTitle | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookChartDataLabelFormat = (OutlookGraphSchemaMicrosoftGraphEntity & {
  fill?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartFill | {} | null);
  font?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartFont | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookChartFill = (OutlookGraphSchemaMicrosoftGraphEntity & {
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookChartFont = (OutlookGraphSchemaMicrosoftGraphEntity & {
  bold?: boolean | null;
  color?: string | null;
  italic?: boolean | null;
  name?: string | null;
  size?: (number | null | string | null | OutlookGraphSchemaReferenceNumeric);
  underline?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookChartLegendFormat = (OutlookGraphSchemaMicrosoftGraphEntity & {
  fill?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartFill | {} | null);
  font?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartFont | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookChartSeriesFormat = (OutlookGraphSchemaMicrosoftGraphEntity & {
  fill?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartFill | {} | null);
  line?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartLineFormat | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookChartPoint = (OutlookGraphSchemaMicrosoftGraphEntity & {
  value?: OutlookGraphSchemaJsonValue;
  format?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartPointFormat | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookChartTitleFormat = (OutlookGraphSchemaMicrosoftGraphEntity & {
  fill?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartFill | {} | null);
  font?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartFont | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookChartAxisFormat = (OutlookGraphSchemaMicrosoftGraphEntity & {
  font?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartFont | {} | null);
  line?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartLineFormat | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookChartGridlines = (OutlookGraphSchemaMicrosoftGraphEntity & {
  visible?: boolean;
  format?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartGridlinesFormat | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookChartAxisTitle = (OutlookGraphSchemaMicrosoftGraphEntity & {
  text?: string | null;
  visible?: boolean;
  format?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartAxisTitleFormat | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookChartLineFormat = (OutlookGraphSchemaMicrosoftGraphEntity & {
  color?: string | null;
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookChartPointFormat = (OutlookGraphSchemaMicrosoftGraphEntity & {
  fill?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartFill | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookChartGridlinesFormat = (OutlookGraphSchemaMicrosoftGraphEntity & {
  line?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartLineFormat | {} | null);
  "@odata.type": string;
});

export type OutlookGraphSchemaMicrosoftGraphWorkbookChartAxisTitleFormat = (OutlookGraphSchemaMicrosoftGraphEntity & {
  font?: (OutlookGraphSchemaMicrosoftGraphWorkbookChartFont | {} | null);
  "@odata.type": string;
});

export interface OutlookGraphOperationQueryMap {
  "me.user.GetUser": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.user.UpdateUser": {};
  "me.ListMailFolders": {
  includeHiddenFolders?: string;
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.CreateMailFolders": {};
  "me.GetMailFolders": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.UpdateMailFolders": {};
  "me.DeleteMailFolders": {};
  "me.mailFolders.ListChildFolders": {
  includeHiddenFolders?: string;
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.mailFolders.CreateChildFolders": {};
  "me.mailFolders.GetChildFolders": {
  includeHiddenFolders?: string;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.mailFolders.UpdateChildFolders": {};
  "me.mailFolders.DeleteChildFolders": {};
  "me.mailFolders.childFolders.ListMessageRules": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.mailFolders.childFolders.CreateMessageRules": {};
  "me.mailFolders.childFolders.GetMessageRules": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.mailFolders.childFolders.UpdateMessageRules": {};
  "me.mailFolders.childFolders.DeleteMessageRules": {};
  "me.mailFolders.childFolders.messageRules.GetCount-6a96": {
  $search?: string;
  $filter?: string;
};
  "me.mailFolders.childFolders.ListMessages": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.mailFolders.childFolders.CreateMessages": {};
  "me.mailFolders.childFolders.GetMessages": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.mailFolders.childFolders.UpdateMessages": {};
  "me.mailFolders.childFolders.DeleteMessages": {};
  "me.mailFolders.childFolders.GetMessagesContent": {};
  "me.mailFolders.childFolders.UpdateMessagesContent": {};
  "me.mailFolders.childFolders.DeleteMessagesContent": {};
  "me.mailFolders.childFolders.messages.ListAttachments": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.mailFolders.childFolders.messages.CreateAttachments": {};
  "me.mailFolders.childFolders.messages.GetAttachments": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.mailFolders.childFolders.messages.DeleteAttachments": {};
  "me.mailFolders.childFolders.messages.attachments.GetCount-65b2": {
  $search?: string;
  $filter?: string;
};
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession": {};
  "me.mailFolders.childFolders.messages.ListExtensions": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.mailFolders.childFolders.messages.CreateExtensions": {};
  "me.mailFolders.childFolders.messages.GetExtensions": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.mailFolders.childFolders.messages.UpdateExtensions": {};
  "me.mailFolders.childFolders.messages.DeleteExtensions": {};
  "me.mailFolders.childFolders.messages.extensions.GetCount-cf94": {
  $search?: string;
  $filter?: string;
};
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy": {};
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward": {};
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply": {};
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll": {};
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward": {};
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move": {};
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete": {};
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply": {};
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll": {};
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send": {};
  "me.mailFolders.childFolders.messages.GetCount-56da": {
  $search?: string;
  $filter?: string;
};
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.delta": {
  changeType?: string;
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $select?: ReadonlyArray<string>;
  $orderby?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.mailFolders.mailFolder.childFolders.mailFolder.copy": {};
  "me.mailFolders.mailFolder.childFolders.mailFolder.move": {};
  "me.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete": {};
  "me.mailFolders.childFolders.GetCount-25bc": {
  includeHiddenFolders?: string;
  $search?: string;
  $filter?: string;
};
  "me.mailFolders.mailFolder.childFolders.delta": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $select?: ReadonlyArray<string>;
  $orderby?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.mailFolders.ListMessageRules": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.mailFolders.CreateMessageRules": {};
  "me.mailFolders.GetMessageRules": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.mailFolders.UpdateMessageRules": {};
  "me.mailFolders.DeleteMessageRules": {};
  "me.mailFolders.messageRules.GetCount-3d24": {
  $search?: string;
  $filter?: string;
};
  "me.mailFolders.ListMessages": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.mailFolders.CreateMessages": {};
  "me.mailFolders.GetMessages": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.mailFolders.UpdateMessages": {};
  "me.mailFolders.DeleteMessages": {};
  "me.mailFolders.GetMessagesContent": {};
  "me.mailFolders.UpdateMessagesContent": {};
  "me.mailFolders.DeleteMessagesContent": {};
  "me.mailFolders.messages.ListAttachments": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.mailFolders.messages.CreateAttachments": {};
  "me.mailFolders.messages.GetAttachments": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.mailFolders.messages.DeleteAttachments": {};
  "me.mailFolders.messages.attachments.GetCount-16fa": {
  $search?: string;
  $filter?: string;
};
  "me.mailFolders.mailFolder.messages.message.attachments.createUploadSession": {};
  "me.mailFolders.messages.ListExtensions": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.mailFolders.messages.CreateExtensions": {};
  "me.mailFolders.messages.GetExtensions": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.mailFolders.messages.UpdateExtensions": {};
  "me.mailFolders.messages.DeleteExtensions": {};
  "me.mailFolders.messages.extensions.GetCount-8860": {
  $search?: string;
  $filter?: string;
};
  "me.mailFolders.mailFolder.messages.message.copy": {};
  "me.mailFolders.mailFolder.messages.message.createForward": {};
  "me.mailFolders.mailFolder.messages.message.createReply": {};
  "me.mailFolders.mailFolder.messages.message.createReplyAll": {};
  "me.mailFolders.mailFolder.messages.message.forward": {};
  "me.mailFolders.mailFolder.messages.message.move": {};
  "me.mailFolders.mailFolder.messages.message.permanentDelete": {};
  "me.mailFolders.mailFolder.messages.message.reply": {};
  "me.mailFolders.mailFolder.messages.message.replyAll": {};
  "me.mailFolders.mailFolder.messages.message.send": {};
  "me.mailFolders.messages.GetCount-363a": {
  $search?: string;
  $filter?: string;
};
  "me.mailFolders.mailFolder.messages.delta": {
  changeType?: string;
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $select?: ReadonlyArray<string>;
  $orderby?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.mailFolders.mailFolder.copy": {};
  "me.mailFolders.mailFolder.move": {};
  "me.mailFolders.mailFolder.permanentDelete": {};
  "me.mailFolders.GetCount-c00e": {
  includeHiddenFolders?: string;
  $search?: string;
  $filter?: string;
};
  "me.mailFolders.delta": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $select?: ReadonlyArray<string>;
  $orderby?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.ListMessages": {
  includeHiddenMessages?: string;
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.CreateMessages": {};
  "me.GetMessages": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.UpdateMessages": {};
  "me.DeleteMessages": {};
  "me.GetMessagesContent": {
  includeHiddenMessages?: string;
};
  "me.UpdateMessagesContent": {};
  "me.DeleteMessagesContent": {};
  "me.messages.ListAttachments": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.messages.CreateAttachments": {};
  "me.messages.GetAttachments": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.messages.DeleteAttachments": {};
  "me.messages.attachments.GetCount-2181": {
  $search?: string;
  $filter?: string;
};
  "me.messages.message.attachments.createUploadSession": {};
  "me.messages.ListExtensions": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.messages.CreateExtensions": {};
  "me.messages.GetExtensions": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.messages.UpdateExtensions": {};
  "me.messages.DeleteExtensions": {};
  "me.messages.extensions.GetCount-d960": {
  $search?: string;
  $filter?: string;
};
  "me.messages.message.copy": {};
  "me.messages.message.createForward": {};
  "me.messages.message.createReply": {};
  "me.messages.message.createReplyAll": {};
  "me.messages.message.forward": {};
  "me.messages.message.move": {};
  "me.messages.message.permanentDelete": {};
  "me.messages.message.reply": {};
  "me.messages.message.replyAll": {};
  "me.messages.message.send": {};
  "me.messages.GetCount-a82e": {
  includeHiddenMessages?: string;
  $search?: string;
  $filter?: string;
};
  "me.messages.delta": {
  changeType?: string;
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $select?: ReadonlyArray<string>;
  $orderby?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.sendMail": {};
  "me.GetOutlook": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.outlook.ListMasterCategories": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.outlook.CreateMasterCategories": {};
  "me.outlook.GetMasterCategories": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "me.outlook.UpdateMasterCategories": {};
  "me.outlook.DeleteMasterCategories": {};
  "me.outlook.masterCategories.GetCount-7754": {
  $search?: string;
  $filter?: string;
};
  "me.outlook.supportedLanguages": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
};
  "me.outlook.supportedTimeZones-5c4f": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
};
  "me.outlook.supportedTimeZones-0d20": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
};
  "subscriptions.subscription.ListSubscription": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "subscriptions.subscription.CreateSubscription": {};
  "subscriptions.subscription.GetSubscription": {
  $select?: ReadonlyArray<string>;
};
  "subscriptions.subscription.UpdateSubscription": {};
  "subscriptions.subscription.DeleteSubscription": {};
  "subscriptions.subscription.reauthorize": {};
  "users.user.GetUser": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.user.UpdateUser": {};
  "users.user.DeleteUser": {};
  "users.ListMailFolders": {
  includeHiddenFolders?: string;
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.CreateMailFolders": {};
  "users.GetMailFolders": {
  includeHiddenFolders?: string;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.UpdateMailFolders": {};
  "users.DeleteMailFolders": {};
  "users.mailFolders.ListChildFolders": {
  includeHiddenFolders?: string;
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.mailFolders.CreateChildFolders": {};
  "users.mailFolders.GetChildFolders": {
  includeHiddenFolders?: string;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.mailFolders.UpdateChildFolders": {};
  "users.mailFolders.DeleteChildFolders": {};
  "users.mailFolders.childFolders.ListMessageRules": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.mailFolders.childFolders.CreateMessageRules": {};
  "users.mailFolders.childFolders.GetMessageRules": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.mailFolders.childFolders.UpdateMessageRules": {};
  "users.mailFolders.childFolders.DeleteMessageRules": {};
  "users.mailFolders.childFolders.messageRules.GetCount-22e6": {
  $search?: string;
  $filter?: string;
};
  "users.mailFolders.childFolders.ListMessages": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.mailFolders.childFolders.CreateMessages": {};
  "users.mailFolders.childFolders.GetMessages": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.mailFolders.childFolders.UpdateMessages": {};
  "users.mailFolders.childFolders.DeleteMessages": {};
  "users.mailFolders.childFolders.GetMessagesContent": {};
  "users.mailFolders.childFolders.UpdateMessagesContent": {};
  "users.mailFolders.childFolders.DeleteMessagesContent": {};
  "users.mailFolders.childFolders.messages.ListAttachments": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.mailFolders.childFolders.messages.CreateAttachments": {};
  "users.mailFolders.childFolders.messages.GetAttachments": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.mailFolders.childFolders.messages.DeleteAttachments": {};
  "users.mailFolders.childFolders.messages.attachments.GetCount-5ef0": {
  $search?: string;
  $filter?: string;
};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession": {};
  "users.mailFolders.childFolders.messages.ListExtensions": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.mailFolders.childFolders.messages.CreateExtensions": {};
  "users.mailFolders.childFolders.messages.GetExtensions": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.mailFolders.childFolders.messages.UpdateExtensions": {};
  "users.mailFolders.childFolders.messages.DeleteExtensions": {};
  "users.mailFolders.childFolders.messages.extensions.GetCount-1433": {
  $search?: string;
  $filter?: string;
};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy": {};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward": {};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply": {};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll": {};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward": {};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move": {};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete": {};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply": {};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll": {};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send": {};
  "users.mailFolders.childFolders.messages.GetCount-a576": {
  $search?: string;
  $filter?: string;
};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.delta": {
  changeType?: string;
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $select?: ReadonlyArray<string>;
  $orderby?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.copy": {};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.move": {};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete": {};
  "users.mailFolders.childFolders.GetCount-d2d8": {
  $search?: string;
  $filter?: string;
};
  "users.user.mailFolders.mailFolder.childFolders.delta": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $select?: ReadonlyArray<string>;
  $orderby?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.mailFolders.ListMessageRules": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.mailFolders.CreateMessageRules": {};
  "users.mailFolders.GetMessageRules": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.mailFolders.UpdateMessageRules": {};
  "users.mailFolders.DeleteMessageRules": {};
  "users.mailFolders.messageRules.GetCount-f330": {
  $search?: string;
  $filter?: string;
};
  "users.mailFolders.ListMessages": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.mailFolders.CreateMessages": {};
  "users.mailFolders.GetMessages": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.mailFolders.UpdateMessages": {};
  "users.mailFolders.DeleteMessages": {};
  "users.mailFolders.GetMessagesContent": {};
  "users.mailFolders.UpdateMessagesContent": {};
  "users.mailFolders.DeleteMessagesContent": {};
  "users.mailFolders.messages.ListAttachments": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.mailFolders.messages.CreateAttachments": {};
  "users.mailFolders.messages.GetAttachments": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.mailFolders.messages.DeleteAttachments": {};
  "users.mailFolders.messages.attachments.GetCount-3c73": {
  $search?: string;
  $filter?: string;
};
  "users.user.mailFolders.mailFolder.messages.message.attachments.createUploadSession": {};
  "users.mailFolders.messages.ListExtensions": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.mailFolders.messages.CreateExtensions": {};
  "users.mailFolders.messages.GetExtensions": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.mailFolders.messages.UpdateExtensions": {};
  "users.mailFolders.messages.DeleteExtensions": {};
  "users.mailFolders.messages.extensions.GetCount-651d": {
  $search?: string;
  $filter?: string;
};
  "users.user.mailFolders.mailFolder.messages.message.copy": {};
  "users.user.mailFolders.mailFolder.messages.message.createForward": {};
  "users.user.mailFolders.mailFolder.messages.message.createReply": {};
  "users.user.mailFolders.mailFolder.messages.message.createReplyAll": {};
  "users.user.mailFolders.mailFolder.messages.message.forward": {};
  "users.user.mailFolders.mailFolder.messages.message.move": {};
  "users.user.mailFolders.mailFolder.messages.message.permanentDelete": {};
  "users.user.mailFolders.mailFolder.messages.message.reply": {};
  "users.user.mailFolders.mailFolder.messages.message.replyAll": {};
  "users.user.mailFolders.mailFolder.messages.message.send": {};
  "users.mailFolders.messages.GetCount-9534": {
  $search?: string;
  $filter?: string;
};
  "users.user.mailFolders.mailFolder.messages.delta": {
  changeType?: string;
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $select?: ReadonlyArray<string>;
  $orderby?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.user.mailFolders.mailFolder.copy": {};
  "users.user.mailFolders.mailFolder.move": {};
  "users.user.mailFolders.mailFolder.permanentDelete": {};
  "users.mailFolders.GetCount-7dc9": {
  $search?: string;
  $filter?: string;
};
  "users.user.mailFolders.delta": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $select?: ReadonlyArray<string>;
  $orderby?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.ListMessages": {
  includeHiddenMessages?: string;
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.CreateMessages": {};
  "users.GetMessages": {
  includeHiddenMessages?: string;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.UpdateMessages": {};
  "users.DeleteMessages": {};
  "users.GetMessagesContent": {};
  "users.UpdateMessagesContent": {};
  "users.DeleteMessagesContent": {};
  "users.messages.ListAttachments": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.messages.CreateAttachments": {};
  "users.messages.GetAttachments": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.messages.DeleteAttachments": {};
  "users.messages.attachments.GetCount-a586": {
  $search?: string;
  $filter?: string;
};
  "users.user.messages.message.attachments.createUploadSession": {};
  "users.messages.ListExtensions": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.messages.CreateExtensions": {};
  "users.messages.GetExtensions": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.messages.UpdateExtensions": {};
  "users.messages.DeleteExtensions": {};
  "users.messages.extensions.GetCount-5628": {
  $search?: string;
  $filter?: string;
};
  "users.user.messages.message.copy": {};
  "users.user.messages.message.createForward": {};
  "users.user.messages.message.createReply": {};
  "users.user.messages.message.createReplyAll": {};
  "users.user.messages.message.forward": {};
  "users.user.messages.message.move": {};
  "users.user.messages.message.permanentDelete": {};
  "users.user.messages.message.reply": {};
  "users.user.messages.message.replyAll": {};
  "users.user.messages.message.send": {};
  "users.messages.GetCount-0f52": {
  $search?: string;
  $filter?: string;
};
  "users.user.messages.delta": {
  changeType?: string;
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $select?: ReadonlyArray<string>;
  $orderby?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.user.sendMail": {};
  "users.GetOutlook": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.outlook.ListMasterCategories": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
  $orderby?: ReadonlyArray<string>;
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.outlook.CreateMasterCategories": {};
  "users.outlook.GetMasterCategories": {
  $select?: ReadonlyArray<string>;
  $expand?: ReadonlyArray<string>;
};
  "users.outlook.UpdateMasterCategories": {};
  "users.outlook.DeleteMasterCategories": {};
  "users.outlook.masterCategories.GetCount-8560": {
  $search?: string;
  $filter?: string;
};
  "users.user.outlook.supportedLanguages": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
};
  "users.user.outlook.supportedTimeZones-5c4f": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
};
  "users.user.outlook.supportedTimeZones-0d20": {
  $top?: number;
  $skip?: number;
  $search?: string;
  $filter?: string;
  $count?: boolean;
};
}

export interface OutlookGraphOperationQueryRequiredMap {
  "me.user.GetUser": false;
  "me.user.UpdateUser": false;
  "me.ListMailFolders": false;
  "me.CreateMailFolders": false;
  "me.GetMailFolders": false;
  "me.UpdateMailFolders": false;
  "me.DeleteMailFolders": false;
  "me.mailFolders.ListChildFolders": false;
  "me.mailFolders.CreateChildFolders": false;
  "me.mailFolders.GetChildFolders": false;
  "me.mailFolders.UpdateChildFolders": false;
  "me.mailFolders.DeleteChildFolders": false;
  "me.mailFolders.childFolders.ListMessageRules": false;
  "me.mailFolders.childFolders.CreateMessageRules": false;
  "me.mailFolders.childFolders.GetMessageRules": false;
  "me.mailFolders.childFolders.UpdateMessageRules": false;
  "me.mailFolders.childFolders.DeleteMessageRules": false;
  "me.mailFolders.childFolders.messageRules.GetCount-6a96": false;
  "me.mailFolders.childFolders.ListMessages": false;
  "me.mailFolders.childFolders.CreateMessages": false;
  "me.mailFolders.childFolders.GetMessages": false;
  "me.mailFolders.childFolders.UpdateMessages": false;
  "me.mailFolders.childFolders.DeleteMessages": false;
  "me.mailFolders.childFolders.GetMessagesContent": false;
  "me.mailFolders.childFolders.UpdateMessagesContent": false;
  "me.mailFolders.childFolders.DeleteMessagesContent": false;
  "me.mailFolders.childFolders.messages.ListAttachments": false;
  "me.mailFolders.childFolders.messages.CreateAttachments": false;
  "me.mailFolders.childFolders.messages.GetAttachments": false;
  "me.mailFolders.childFolders.messages.DeleteAttachments": false;
  "me.mailFolders.childFolders.messages.attachments.GetCount-65b2": false;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession": false;
  "me.mailFolders.childFolders.messages.ListExtensions": false;
  "me.mailFolders.childFolders.messages.CreateExtensions": false;
  "me.mailFolders.childFolders.messages.GetExtensions": false;
  "me.mailFolders.childFolders.messages.UpdateExtensions": false;
  "me.mailFolders.childFolders.messages.DeleteExtensions": false;
  "me.mailFolders.childFolders.messages.extensions.GetCount-cf94": false;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy": false;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward": false;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply": false;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll": false;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward": false;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move": false;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete": false;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply": false;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll": false;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send": false;
  "me.mailFolders.childFolders.messages.GetCount-56da": false;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.delta": false;
  "me.mailFolders.mailFolder.childFolders.mailFolder.copy": false;
  "me.mailFolders.mailFolder.childFolders.mailFolder.move": false;
  "me.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete": false;
  "me.mailFolders.childFolders.GetCount-25bc": false;
  "me.mailFolders.mailFolder.childFolders.delta": false;
  "me.mailFolders.ListMessageRules": false;
  "me.mailFolders.CreateMessageRules": false;
  "me.mailFolders.GetMessageRules": false;
  "me.mailFolders.UpdateMessageRules": false;
  "me.mailFolders.DeleteMessageRules": false;
  "me.mailFolders.messageRules.GetCount-3d24": false;
  "me.mailFolders.ListMessages": false;
  "me.mailFolders.CreateMessages": false;
  "me.mailFolders.GetMessages": false;
  "me.mailFolders.UpdateMessages": false;
  "me.mailFolders.DeleteMessages": false;
  "me.mailFolders.GetMessagesContent": false;
  "me.mailFolders.UpdateMessagesContent": false;
  "me.mailFolders.DeleteMessagesContent": false;
  "me.mailFolders.messages.ListAttachments": false;
  "me.mailFolders.messages.CreateAttachments": false;
  "me.mailFolders.messages.GetAttachments": false;
  "me.mailFolders.messages.DeleteAttachments": false;
  "me.mailFolders.messages.attachments.GetCount-16fa": false;
  "me.mailFolders.mailFolder.messages.message.attachments.createUploadSession": false;
  "me.mailFolders.messages.ListExtensions": false;
  "me.mailFolders.messages.CreateExtensions": false;
  "me.mailFolders.messages.GetExtensions": false;
  "me.mailFolders.messages.UpdateExtensions": false;
  "me.mailFolders.messages.DeleteExtensions": false;
  "me.mailFolders.messages.extensions.GetCount-8860": false;
  "me.mailFolders.mailFolder.messages.message.copy": false;
  "me.mailFolders.mailFolder.messages.message.createForward": false;
  "me.mailFolders.mailFolder.messages.message.createReply": false;
  "me.mailFolders.mailFolder.messages.message.createReplyAll": false;
  "me.mailFolders.mailFolder.messages.message.forward": false;
  "me.mailFolders.mailFolder.messages.message.move": false;
  "me.mailFolders.mailFolder.messages.message.permanentDelete": false;
  "me.mailFolders.mailFolder.messages.message.reply": false;
  "me.mailFolders.mailFolder.messages.message.replyAll": false;
  "me.mailFolders.mailFolder.messages.message.send": false;
  "me.mailFolders.messages.GetCount-363a": false;
  "me.mailFolders.mailFolder.messages.delta": false;
  "me.mailFolders.mailFolder.copy": false;
  "me.mailFolders.mailFolder.move": false;
  "me.mailFolders.mailFolder.permanentDelete": false;
  "me.mailFolders.GetCount-c00e": false;
  "me.mailFolders.delta": false;
  "me.ListMessages": false;
  "me.CreateMessages": false;
  "me.GetMessages": false;
  "me.UpdateMessages": false;
  "me.DeleteMessages": false;
  "me.GetMessagesContent": false;
  "me.UpdateMessagesContent": false;
  "me.DeleteMessagesContent": false;
  "me.messages.ListAttachments": false;
  "me.messages.CreateAttachments": false;
  "me.messages.GetAttachments": false;
  "me.messages.DeleteAttachments": false;
  "me.messages.attachments.GetCount-2181": false;
  "me.messages.message.attachments.createUploadSession": false;
  "me.messages.ListExtensions": false;
  "me.messages.CreateExtensions": false;
  "me.messages.GetExtensions": false;
  "me.messages.UpdateExtensions": false;
  "me.messages.DeleteExtensions": false;
  "me.messages.extensions.GetCount-d960": false;
  "me.messages.message.copy": false;
  "me.messages.message.createForward": false;
  "me.messages.message.createReply": false;
  "me.messages.message.createReplyAll": false;
  "me.messages.message.forward": false;
  "me.messages.message.move": false;
  "me.messages.message.permanentDelete": false;
  "me.messages.message.reply": false;
  "me.messages.message.replyAll": false;
  "me.messages.message.send": false;
  "me.messages.GetCount-a82e": false;
  "me.messages.delta": false;
  "me.sendMail": false;
  "me.GetOutlook": false;
  "me.outlook.ListMasterCategories": false;
  "me.outlook.CreateMasterCategories": false;
  "me.outlook.GetMasterCategories": false;
  "me.outlook.UpdateMasterCategories": false;
  "me.outlook.DeleteMasterCategories": false;
  "me.outlook.masterCategories.GetCount-7754": false;
  "me.outlook.supportedLanguages": false;
  "me.outlook.supportedTimeZones-5c4f": false;
  "me.outlook.supportedTimeZones-0d20": false;
  "subscriptions.subscription.ListSubscription": false;
  "subscriptions.subscription.CreateSubscription": false;
  "subscriptions.subscription.GetSubscription": false;
  "subscriptions.subscription.UpdateSubscription": false;
  "subscriptions.subscription.DeleteSubscription": false;
  "subscriptions.subscription.reauthorize": false;
  "users.user.GetUser": false;
  "users.user.UpdateUser": false;
  "users.user.DeleteUser": false;
  "users.ListMailFolders": false;
  "users.CreateMailFolders": false;
  "users.GetMailFolders": false;
  "users.UpdateMailFolders": false;
  "users.DeleteMailFolders": false;
  "users.mailFolders.ListChildFolders": false;
  "users.mailFolders.CreateChildFolders": false;
  "users.mailFolders.GetChildFolders": false;
  "users.mailFolders.UpdateChildFolders": false;
  "users.mailFolders.DeleteChildFolders": false;
  "users.mailFolders.childFolders.ListMessageRules": false;
  "users.mailFolders.childFolders.CreateMessageRules": false;
  "users.mailFolders.childFolders.GetMessageRules": false;
  "users.mailFolders.childFolders.UpdateMessageRules": false;
  "users.mailFolders.childFolders.DeleteMessageRules": false;
  "users.mailFolders.childFolders.messageRules.GetCount-22e6": false;
  "users.mailFolders.childFolders.ListMessages": false;
  "users.mailFolders.childFolders.CreateMessages": false;
  "users.mailFolders.childFolders.GetMessages": false;
  "users.mailFolders.childFolders.UpdateMessages": false;
  "users.mailFolders.childFolders.DeleteMessages": false;
  "users.mailFolders.childFolders.GetMessagesContent": false;
  "users.mailFolders.childFolders.UpdateMessagesContent": false;
  "users.mailFolders.childFolders.DeleteMessagesContent": false;
  "users.mailFolders.childFolders.messages.ListAttachments": false;
  "users.mailFolders.childFolders.messages.CreateAttachments": false;
  "users.mailFolders.childFolders.messages.GetAttachments": false;
  "users.mailFolders.childFolders.messages.DeleteAttachments": false;
  "users.mailFolders.childFolders.messages.attachments.GetCount-5ef0": false;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession": false;
  "users.mailFolders.childFolders.messages.ListExtensions": false;
  "users.mailFolders.childFolders.messages.CreateExtensions": false;
  "users.mailFolders.childFolders.messages.GetExtensions": false;
  "users.mailFolders.childFolders.messages.UpdateExtensions": false;
  "users.mailFolders.childFolders.messages.DeleteExtensions": false;
  "users.mailFolders.childFolders.messages.extensions.GetCount-1433": false;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy": false;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward": false;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply": false;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll": false;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward": false;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move": false;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete": false;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply": false;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll": false;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send": false;
  "users.mailFolders.childFolders.messages.GetCount-a576": false;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.delta": false;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.copy": false;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.move": false;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete": false;
  "users.mailFolders.childFolders.GetCount-d2d8": false;
  "users.user.mailFolders.mailFolder.childFolders.delta": false;
  "users.mailFolders.ListMessageRules": false;
  "users.mailFolders.CreateMessageRules": false;
  "users.mailFolders.GetMessageRules": false;
  "users.mailFolders.UpdateMessageRules": false;
  "users.mailFolders.DeleteMessageRules": false;
  "users.mailFolders.messageRules.GetCount-f330": false;
  "users.mailFolders.ListMessages": false;
  "users.mailFolders.CreateMessages": false;
  "users.mailFolders.GetMessages": false;
  "users.mailFolders.UpdateMessages": false;
  "users.mailFolders.DeleteMessages": false;
  "users.mailFolders.GetMessagesContent": false;
  "users.mailFolders.UpdateMessagesContent": false;
  "users.mailFolders.DeleteMessagesContent": false;
  "users.mailFolders.messages.ListAttachments": false;
  "users.mailFolders.messages.CreateAttachments": false;
  "users.mailFolders.messages.GetAttachments": false;
  "users.mailFolders.messages.DeleteAttachments": false;
  "users.mailFolders.messages.attachments.GetCount-3c73": false;
  "users.user.mailFolders.mailFolder.messages.message.attachments.createUploadSession": false;
  "users.mailFolders.messages.ListExtensions": false;
  "users.mailFolders.messages.CreateExtensions": false;
  "users.mailFolders.messages.GetExtensions": false;
  "users.mailFolders.messages.UpdateExtensions": false;
  "users.mailFolders.messages.DeleteExtensions": false;
  "users.mailFolders.messages.extensions.GetCount-651d": false;
  "users.user.mailFolders.mailFolder.messages.message.copy": false;
  "users.user.mailFolders.mailFolder.messages.message.createForward": false;
  "users.user.mailFolders.mailFolder.messages.message.createReply": false;
  "users.user.mailFolders.mailFolder.messages.message.createReplyAll": false;
  "users.user.mailFolders.mailFolder.messages.message.forward": false;
  "users.user.mailFolders.mailFolder.messages.message.move": false;
  "users.user.mailFolders.mailFolder.messages.message.permanentDelete": false;
  "users.user.mailFolders.mailFolder.messages.message.reply": false;
  "users.user.mailFolders.mailFolder.messages.message.replyAll": false;
  "users.user.mailFolders.mailFolder.messages.message.send": false;
  "users.mailFolders.messages.GetCount-9534": false;
  "users.user.mailFolders.mailFolder.messages.delta": false;
  "users.user.mailFolders.mailFolder.copy": false;
  "users.user.mailFolders.mailFolder.move": false;
  "users.user.mailFolders.mailFolder.permanentDelete": false;
  "users.mailFolders.GetCount-7dc9": false;
  "users.user.mailFolders.delta": false;
  "users.ListMessages": false;
  "users.CreateMessages": false;
  "users.GetMessages": false;
  "users.UpdateMessages": false;
  "users.DeleteMessages": false;
  "users.GetMessagesContent": false;
  "users.UpdateMessagesContent": false;
  "users.DeleteMessagesContent": false;
  "users.messages.ListAttachments": false;
  "users.messages.CreateAttachments": false;
  "users.messages.GetAttachments": false;
  "users.messages.DeleteAttachments": false;
  "users.messages.attachments.GetCount-a586": false;
  "users.user.messages.message.attachments.createUploadSession": false;
  "users.messages.ListExtensions": false;
  "users.messages.CreateExtensions": false;
  "users.messages.GetExtensions": false;
  "users.messages.UpdateExtensions": false;
  "users.messages.DeleteExtensions": false;
  "users.messages.extensions.GetCount-5628": false;
  "users.user.messages.message.copy": false;
  "users.user.messages.message.createForward": false;
  "users.user.messages.message.createReply": false;
  "users.user.messages.message.createReplyAll": false;
  "users.user.messages.message.forward": false;
  "users.user.messages.message.move": false;
  "users.user.messages.message.permanentDelete": false;
  "users.user.messages.message.reply": false;
  "users.user.messages.message.replyAll": false;
  "users.user.messages.message.send": false;
  "users.messages.GetCount-0f52": false;
  "users.user.messages.delta": false;
  "users.user.sendMail": false;
  "users.GetOutlook": false;
  "users.outlook.ListMasterCategories": false;
  "users.outlook.CreateMasterCategories": false;
  "users.outlook.GetMasterCategories": false;
  "users.outlook.UpdateMasterCategories": false;
  "users.outlook.DeleteMasterCategories": false;
  "users.outlook.masterCategories.GetCount-8560": false;
  "users.user.outlook.supportedLanguages": false;
  "users.user.outlook.supportedTimeZones-5c4f": false;
  "users.user.outlook.supportedTimeZones-0d20": false;
}

export interface OutlookGraphOperationRequestBodyMap {
  "me.user.GetUser": never;
  "me.user.UpdateUser": OutlookGraphSchemaMicrosoftGraphUser;
  "me.ListMailFolders": never;
  "me.CreateMailFolders": OutlookGraphSchemaMicrosoftGraphMailFolder;
  "me.GetMailFolders": never;
  "me.UpdateMailFolders": OutlookGraphSchemaMicrosoftGraphMailFolder;
  "me.DeleteMailFolders": never;
  "me.mailFolders.ListChildFolders": never;
  "me.mailFolders.CreateChildFolders": OutlookGraphSchemaMicrosoftGraphMailFolder;
  "me.mailFolders.GetChildFolders": never;
  "me.mailFolders.UpdateChildFolders": OutlookGraphSchemaMicrosoftGraphMailFolder;
  "me.mailFolders.DeleteChildFolders": never;
  "me.mailFolders.childFolders.ListMessageRules": never;
  "me.mailFolders.childFolders.CreateMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRule;
  "me.mailFolders.childFolders.GetMessageRules": never;
  "me.mailFolders.childFolders.UpdateMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRule;
  "me.mailFolders.childFolders.DeleteMessageRules": never;
  "me.mailFolders.childFolders.messageRules.GetCount-6a96": never;
  "me.mailFolders.childFolders.ListMessages": never;
  "me.mailFolders.childFolders.CreateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "me.mailFolders.childFolders.GetMessages": never;
  "me.mailFolders.childFolders.UpdateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "me.mailFolders.childFolders.DeleteMessages": never;
  "me.mailFolders.childFolders.GetMessagesContent": never;
  "me.mailFolders.childFolders.UpdateMessagesContent": string;
  "me.mailFolders.childFolders.DeleteMessagesContent": never;
  "me.mailFolders.childFolders.messages.ListAttachments": never;
  "me.mailFolders.childFolders.messages.CreateAttachments": OutlookGraphSchemaMicrosoftGraphAttachment;
  "me.mailFolders.childFolders.messages.GetAttachments": never;
  "me.mailFolders.childFolders.messages.DeleteAttachments": never;
  "me.mailFolders.childFolders.messages.attachments.GetCount-65b2": never;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession": {
  AttachmentItem?: OutlookGraphSchemaMicrosoftGraphAttachmentItem;
};
  "me.mailFolders.childFolders.messages.ListExtensions": never;
  "me.mailFolders.childFolders.messages.CreateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "me.mailFolders.childFolders.messages.GetExtensions": never;
  "me.mailFolders.childFolders.messages.UpdateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "me.mailFolders.childFolders.messages.DeleteExtensions": never;
  "me.mailFolders.childFolders.messages.extensions.GetCount-cf94": never;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy": {
  DestinationId?: string;
};
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward": {
  ToRecipients?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward": {
  ToRecipients?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move": {
  DestinationId?: string;
};
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete": never;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send": never;
  "me.mailFolders.childFolders.messages.GetCount-56da": never;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.delta": never;
  "me.mailFolders.mailFolder.childFolders.mailFolder.copy": {
  DestinationId?: string;
};
  "me.mailFolders.mailFolder.childFolders.mailFolder.move": {
  DestinationId?: string;
};
  "me.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete": never;
  "me.mailFolders.childFolders.GetCount-25bc": never;
  "me.mailFolders.mailFolder.childFolders.delta": never;
  "me.mailFolders.ListMessageRules": never;
  "me.mailFolders.CreateMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRule;
  "me.mailFolders.GetMessageRules": never;
  "me.mailFolders.UpdateMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRule;
  "me.mailFolders.DeleteMessageRules": never;
  "me.mailFolders.messageRules.GetCount-3d24": never;
  "me.mailFolders.ListMessages": never;
  "me.mailFolders.CreateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "me.mailFolders.GetMessages": never;
  "me.mailFolders.UpdateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "me.mailFolders.DeleteMessages": never;
  "me.mailFolders.GetMessagesContent": never;
  "me.mailFolders.UpdateMessagesContent": string;
  "me.mailFolders.DeleteMessagesContent": never;
  "me.mailFolders.messages.ListAttachments": never;
  "me.mailFolders.messages.CreateAttachments": OutlookGraphSchemaMicrosoftGraphAttachment;
  "me.mailFolders.messages.GetAttachments": never;
  "me.mailFolders.messages.DeleteAttachments": never;
  "me.mailFolders.messages.attachments.GetCount-16fa": never;
  "me.mailFolders.mailFolder.messages.message.attachments.createUploadSession": {
  AttachmentItem?: OutlookGraphSchemaMicrosoftGraphAttachmentItem;
};
  "me.mailFolders.messages.ListExtensions": never;
  "me.mailFolders.messages.CreateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "me.mailFolders.messages.GetExtensions": never;
  "me.mailFolders.messages.UpdateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "me.mailFolders.messages.DeleteExtensions": never;
  "me.mailFolders.messages.extensions.GetCount-8860": never;
  "me.mailFolders.mailFolder.messages.message.copy": {
  DestinationId?: string;
};
  "me.mailFolders.mailFolder.messages.message.createForward": {
  ToRecipients?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "me.mailFolders.mailFolder.messages.message.createReply": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "me.mailFolders.mailFolder.messages.message.createReplyAll": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "me.mailFolders.mailFolder.messages.message.forward": {
  ToRecipients?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "me.mailFolders.mailFolder.messages.message.move": {
  DestinationId?: string;
};
  "me.mailFolders.mailFolder.messages.message.permanentDelete": never;
  "me.mailFolders.mailFolder.messages.message.reply": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "me.mailFolders.mailFolder.messages.message.replyAll": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "me.mailFolders.mailFolder.messages.message.send": never;
  "me.mailFolders.messages.GetCount-363a": never;
  "me.mailFolders.mailFolder.messages.delta": never;
  "me.mailFolders.mailFolder.copy": {
  DestinationId?: string;
};
  "me.mailFolders.mailFolder.move": {
  DestinationId?: string;
};
  "me.mailFolders.mailFolder.permanentDelete": never;
  "me.mailFolders.GetCount-c00e": never;
  "me.mailFolders.delta": never;
  "me.ListMessages": never;
  "me.CreateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "me.GetMessages": never;
  "me.UpdateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "me.DeleteMessages": never;
  "me.GetMessagesContent": never;
  "me.UpdateMessagesContent": string;
  "me.DeleteMessagesContent": never;
  "me.messages.ListAttachments": never;
  "me.messages.CreateAttachments": OutlookGraphSchemaMicrosoftGraphAttachment;
  "me.messages.GetAttachments": never;
  "me.messages.DeleteAttachments": never;
  "me.messages.attachments.GetCount-2181": never;
  "me.messages.message.attachments.createUploadSession": {
  AttachmentItem?: OutlookGraphSchemaMicrosoftGraphAttachmentItem;
};
  "me.messages.ListExtensions": never;
  "me.messages.CreateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "me.messages.GetExtensions": never;
  "me.messages.UpdateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "me.messages.DeleteExtensions": never;
  "me.messages.extensions.GetCount-d960": never;
  "me.messages.message.copy": {
  DestinationId?: string;
};
  "me.messages.message.createForward": {
  ToRecipients?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "me.messages.message.createReply": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "me.messages.message.createReplyAll": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "me.messages.message.forward": {
  ToRecipients?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "me.messages.message.move": {
  DestinationId?: string;
};
  "me.messages.message.permanentDelete": never;
  "me.messages.message.reply": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "me.messages.message.replyAll": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "me.messages.message.send": never;
  "me.messages.GetCount-a82e": never;
  "me.messages.delta": never;
  "me.sendMail": {
  Message?: OutlookGraphSchemaMicrosoftGraphMessage;
  SaveToSentItems?: boolean | null;
};
  "me.GetOutlook": never;
  "me.outlook.ListMasterCategories": never;
  "me.outlook.CreateMasterCategories": OutlookGraphSchemaMicrosoftGraphOutlookCategory;
  "me.outlook.GetMasterCategories": never;
  "me.outlook.UpdateMasterCategories": OutlookGraphSchemaMicrosoftGraphOutlookCategory;
  "me.outlook.DeleteMasterCategories": never;
  "me.outlook.masterCategories.GetCount-7754": never;
  "me.outlook.supportedLanguages": never;
  "me.outlook.supportedTimeZones-5c4f": never;
  "me.outlook.supportedTimeZones-0d20": never;
  "subscriptions.subscription.ListSubscription": never;
  "subscriptions.subscription.CreateSubscription": OutlookGraphSchemaMicrosoftGraphSubscription;
  "subscriptions.subscription.GetSubscription": never;
  "subscriptions.subscription.UpdateSubscription": OutlookGraphSchemaMicrosoftGraphSubscription;
  "subscriptions.subscription.DeleteSubscription": never;
  "subscriptions.subscription.reauthorize": never;
  "users.user.GetUser": never;
  "users.user.UpdateUser": OutlookGraphSchemaMicrosoftGraphUser;
  "users.user.DeleteUser": never;
  "users.ListMailFolders": never;
  "users.CreateMailFolders": OutlookGraphSchemaMicrosoftGraphMailFolder;
  "users.GetMailFolders": never;
  "users.UpdateMailFolders": OutlookGraphSchemaMicrosoftGraphMailFolder;
  "users.DeleteMailFolders": never;
  "users.mailFolders.ListChildFolders": never;
  "users.mailFolders.CreateChildFolders": OutlookGraphSchemaMicrosoftGraphMailFolder;
  "users.mailFolders.GetChildFolders": never;
  "users.mailFolders.UpdateChildFolders": OutlookGraphSchemaMicrosoftGraphMailFolder;
  "users.mailFolders.DeleteChildFolders": never;
  "users.mailFolders.childFolders.ListMessageRules": never;
  "users.mailFolders.childFolders.CreateMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRule;
  "users.mailFolders.childFolders.GetMessageRules": never;
  "users.mailFolders.childFolders.UpdateMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRule;
  "users.mailFolders.childFolders.DeleteMessageRules": never;
  "users.mailFolders.childFolders.messageRules.GetCount-22e6": never;
  "users.mailFolders.childFolders.ListMessages": never;
  "users.mailFolders.childFolders.CreateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "users.mailFolders.childFolders.GetMessages": never;
  "users.mailFolders.childFolders.UpdateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "users.mailFolders.childFolders.DeleteMessages": never;
  "users.mailFolders.childFolders.GetMessagesContent": never;
  "users.mailFolders.childFolders.UpdateMessagesContent": string;
  "users.mailFolders.childFolders.DeleteMessagesContent": never;
  "users.mailFolders.childFolders.messages.ListAttachments": never;
  "users.mailFolders.childFolders.messages.CreateAttachments": OutlookGraphSchemaMicrosoftGraphAttachment;
  "users.mailFolders.childFolders.messages.GetAttachments": never;
  "users.mailFolders.childFolders.messages.DeleteAttachments": never;
  "users.mailFolders.childFolders.messages.attachments.GetCount-5ef0": never;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession": {
  AttachmentItem?: OutlookGraphSchemaMicrosoftGraphAttachmentItem;
};
  "users.mailFolders.childFolders.messages.ListExtensions": never;
  "users.mailFolders.childFolders.messages.CreateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "users.mailFolders.childFolders.messages.GetExtensions": never;
  "users.mailFolders.childFolders.messages.UpdateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "users.mailFolders.childFolders.messages.DeleteExtensions": never;
  "users.mailFolders.childFolders.messages.extensions.GetCount-1433": never;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy": {
  DestinationId?: string;
};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward": {
  ToRecipients?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward": {
  ToRecipients?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move": {
  DestinationId?: string;
};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete": never;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send": never;
  "users.mailFolders.childFolders.messages.GetCount-a576": never;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.delta": never;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.copy": {
  DestinationId?: string;
};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.move": {
  DestinationId?: string;
};
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete": never;
  "users.mailFolders.childFolders.GetCount-d2d8": never;
  "users.user.mailFolders.mailFolder.childFolders.delta": never;
  "users.mailFolders.ListMessageRules": never;
  "users.mailFolders.CreateMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRule;
  "users.mailFolders.GetMessageRules": never;
  "users.mailFolders.UpdateMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRule;
  "users.mailFolders.DeleteMessageRules": never;
  "users.mailFolders.messageRules.GetCount-f330": never;
  "users.mailFolders.ListMessages": never;
  "users.mailFolders.CreateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "users.mailFolders.GetMessages": never;
  "users.mailFolders.UpdateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "users.mailFolders.DeleteMessages": never;
  "users.mailFolders.GetMessagesContent": never;
  "users.mailFolders.UpdateMessagesContent": string;
  "users.mailFolders.DeleteMessagesContent": never;
  "users.mailFolders.messages.ListAttachments": never;
  "users.mailFolders.messages.CreateAttachments": OutlookGraphSchemaMicrosoftGraphAttachment;
  "users.mailFolders.messages.GetAttachments": never;
  "users.mailFolders.messages.DeleteAttachments": never;
  "users.mailFolders.messages.attachments.GetCount-3c73": never;
  "users.user.mailFolders.mailFolder.messages.message.attachments.createUploadSession": {
  AttachmentItem?: OutlookGraphSchemaMicrosoftGraphAttachmentItem;
};
  "users.mailFolders.messages.ListExtensions": never;
  "users.mailFolders.messages.CreateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "users.mailFolders.messages.GetExtensions": never;
  "users.mailFolders.messages.UpdateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "users.mailFolders.messages.DeleteExtensions": never;
  "users.mailFolders.messages.extensions.GetCount-651d": never;
  "users.user.mailFolders.mailFolder.messages.message.copy": {
  DestinationId?: string;
};
  "users.user.mailFolders.mailFolder.messages.message.createForward": {
  ToRecipients?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "users.user.mailFolders.mailFolder.messages.message.createReply": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "users.user.mailFolders.mailFolder.messages.message.createReplyAll": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "users.user.mailFolders.mailFolder.messages.message.forward": {
  ToRecipients?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "users.user.mailFolders.mailFolder.messages.message.move": {
  DestinationId?: string;
};
  "users.user.mailFolders.mailFolder.messages.message.permanentDelete": never;
  "users.user.mailFolders.mailFolder.messages.message.reply": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "users.user.mailFolders.mailFolder.messages.message.replyAll": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "users.user.mailFolders.mailFolder.messages.message.send": never;
  "users.mailFolders.messages.GetCount-9534": never;
  "users.user.mailFolders.mailFolder.messages.delta": never;
  "users.user.mailFolders.mailFolder.copy": {
  DestinationId?: string;
};
  "users.user.mailFolders.mailFolder.move": {
  DestinationId?: string;
};
  "users.user.mailFolders.mailFolder.permanentDelete": never;
  "users.mailFolders.GetCount-7dc9": never;
  "users.user.mailFolders.delta": never;
  "users.ListMessages": never;
  "users.CreateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "users.GetMessages": never;
  "users.UpdateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "users.DeleteMessages": never;
  "users.GetMessagesContent": never;
  "users.UpdateMessagesContent": string;
  "users.DeleteMessagesContent": never;
  "users.messages.ListAttachments": never;
  "users.messages.CreateAttachments": OutlookGraphSchemaMicrosoftGraphAttachment;
  "users.messages.GetAttachments": never;
  "users.messages.DeleteAttachments": never;
  "users.messages.attachments.GetCount-a586": never;
  "users.user.messages.message.attachments.createUploadSession": {
  AttachmentItem?: OutlookGraphSchemaMicrosoftGraphAttachmentItem;
};
  "users.messages.ListExtensions": never;
  "users.messages.CreateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "users.messages.GetExtensions": never;
  "users.messages.UpdateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "users.messages.DeleteExtensions": never;
  "users.messages.extensions.GetCount-5628": never;
  "users.user.messages.message.copy": {
  DestinationId?: string;
};
  "users.user.messages.message.createForward": {
  ToRecipients?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "users.user.messages.message.createReply": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "users.user.messages.message.createReplyAll": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "users.user.messages.message.forward": {
  ToRecipients?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphRecipient>;
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "users.user.messages.message.move": {
  DestinationId?: string;
};
  "users.user.messages.message.permanentDelete": never;
  "users.user.messages.message.reply": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "users.user.messages.message.replyAll": {
  Message?: (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  Comment?: string | null;
};
  "users.user.messages.message.send": never;
  "users.messages.GetCount-0f52": never;
  "users.user.messages.delta": never;
  "users.user.sendMail": {
  Message?: OutlookGraphSchemaMicrosoftGraphMessage;
  SaveToSentItems?: boolean | null;
};
  "users.GetOutlook": never;
  "users.outlook.ListMasterCategories": never;
  "users.outlook.CreateMasterCategories": OutlookGraphSchemaMicrosoftGraphOutlookCategory;
  "users.outlook.GetMasterCategories": never;
  "users.outlook.UpdateMasterCategories": OutlookGraphSchemaMicrosoftGraphOutlookCategory;
  "users.outlook.DeleteMasterCategories": never;
  "users.outlook.masterCategories.GetCount-8560": never;
  "users.user.outlook.supportedLanguages": never;
  "users.user.outlook.supportedTimeZones-5c4f": never;
  "users.user.outlook.supportedTimeZones-0d20": never;
}

export interface OutlookGraphOperationRequestBodyRequiredMap {
  "me.user.GetUser": false;
  "me.user.UpdateUser": true;
  "me.ListMailFolders": false;
  "me.CreateMailFolders": true;
  "me.GetMailFolders": false;
  "me.UpdateMailFolders": true;
  "me.DeleteMailFolders": false;
  "me.mailFolders.ListChildFolders": false;
  "me.mailFolders.CreateChildFolders": true;
  "me.mailFolders.GetChildFolders": false;
  "me.mailFolders.UpdateChildFolders": true;
  "me.mailFolders.DeleteChildFolders": false;
  "me.mailFolders.childFolders.ListMessageRules": false;
  "me.mailFolders.childFolders.CreateMessageRules": true;
  "me.mailFolders.childFolders.GetMessageRules": false;
  "me.mailFolders.childFolders.UpdateMessageRules": true;
  "me.mailFolders.childFolders.DeleteMessageRules": false;
  "me.mailFolders.childFolders.messageRules.GetCount-6a96": false;
  "me.mailFolders.childFolders.ListMessages": false;
  "me.mailFolders.childFolders.CreateMessages": true;
  "me.mailFolders.childFolders.GetMessages": false;
  "me.mailFolders.childFolders.UpdateMessages": true;
  "me.mailFolders.childFolders.DeleteMessages": false;
  "me.mailFolders.childFolders.GetMessagesContent": false;
  "me.mailFolders.childFolders.UpdateMessagesContent": true;
  "me.mailFolders.childFolders.DeleteMessagesContent": false;
  "me.mailFolders.childFolders.messages.ListAttachments": false;
  "me.mailFolders.childFolders.messages.CreateAttachments": true;
  "me.mailFolders.childFolders.messages.GetAttachments": false;
  "me.mailFolders.childFolders.messages.DeleteAttachments": false;
  "me.mailFolders.childFolders.messages.attachments.GetCount-65b2": false;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession": true;
  "me.mailFolders.childFolders.messages.ListExtensions": false;
  "me.mailFolders.childFolders.messages.CreateExtensions": true;
  "me.mailFolders.childFolders.messages.GetExtensions": false;
  "me.mailFolders.childFolders.messages.UpdateExtensions": true;
  "me.mailFolders.childFolders.messages.DeleteExtensions": false;
  "me.mailFolders.childFolders.messages.extensions.GetCount-cf94": false;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy": true;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward": true;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply": true;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll": true;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward": true;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move": true;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete": false;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply": true;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll": true;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send": false;
  "me.mailFolders.childFolders.messages.GetCount-56da": false;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.delta": false;
  "me.mailFolders.mailFolder.childFolders.mailFolder.copy": true;
  "me.mailFolders.mailFolder.childFolders.mailFolder.move": true;
  "me.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete": false;
  "me.mailFolders.childFolders.GetCount-25bc": false;
  "me.mailFolders.mailFolder.childFolders.delta": false;
  "me.mailFolders.ListMessageRules": false;
  "me.mailFolders.CreateMessageRules": true;
  "me.mailFolders.GetMessageRules": false;
  "me.mailFolders.UpdateMessageRules": true;
  "me.mailFolders.DeleteMessageRules": false;
  "me.mailFolders.messageRules.GetCount-3d24": false;
  "me.mailFolders.ListMessages": false;
  "me.mailFolders.CreateMessages": true;
  "me.mailFolders.GetMessages": false;
  "me.mailFolders.UpdateMessages": true;
  "me.mailFolders.DeleteMessages": false;
  "me.mailFolders.GetMessagesContent": false;
  "me.mailFolders.UpdateMessagesContent": true;
  "me.mailFolders.DeleteMessagesContent": false;
  "me.mailFolders.messages.ListAttachments": false;
  "me.mailFolders.messages.CreateAttachments": true;
  "me.mailFolders.messages.GetAttachments": false;
  "me.mailFolders.messages.DeleteAttachments": false;
  "me.mailFolders.messages.attachments.GetCount-16fa": false;
  "me.mailFolders.mailFolder.messages.message.attachments.createUploadSession": true;
  "me.mailFolders.messages.ListExtensions": false;
  "me.mailFolders.messages.CreateExtensions": true;
  "me.mailFolders.messages.GetExtensions": false;
  "me.mailFolders.messages.UpdateExtensions": true;
  "me.mailFolders.messages.DeleteExtensions": false;
  "me.mailFolders.messages.extensions.GetCount-8860": false;
  "me.mailFolders.mailFolder.messages.message.copy": true;
  "me.mailFolders.mailFolder.messages.message.createForward": true;
  "me.mailFolders.mailFolder.messages.message.createReply": true;
  "me.mailFolders.mailFolder.messages.message.createReplyAll": true;
  "me.mailFolders.mailFolder.messages.message.forward": true;
  "me.mailFolders.mailFolder.messages.message.move": true;
  "me.mailFolders.mailFolder.messages.message.permanentDelete": false;
  "me.mailFolders.mailFolder.messages.message.reply": true;
  "me.mailFolders.mailFolder.messages.message.replyAll": true;
  "me.mailFolders.mailFolder.messages.message.send": false;
  "me.mailFolders.messages.GetCount-363a": false;
  "me.mailFolders.mailFolder.messages.delta": false;
  "me.mailFolders.mailFolder.copy": true;
  "me.mailFolders.mailFolder.move": true;
  "me.mailFolders.mailFolder.permanentDelete": false;
  "me.mailFolders.GetCount-c00e": false;
  "me.mailFolders.delta": false;
  "me.ListMessages": false;
  "me.CreateMessages": true;
  "me.GetMessages": false;
  "me.UpdateMessages": true;
  "me.DeleteMessages": false;
  "me.GetMessagesContent": false;
  "me.UpdateMessagesContent": true;
  "me.DeleteMessagesContent": false;
  "me.messages.ListAttachments": false;
  "me.messages.CreateAttachments": true;
  "me.messages.GetAttachments": false;
  "me.messages.DeleteAttachments": false;
  "me.messages.attachments.GetCount-2181": false;
  "me.messages.message.attachments.createUploadSession": true;
  "me.messages.ListExtensions": false;
  "me.messages.CreateExtensions": true;
  "me.messages.GetExtensions": false;
  "me.messages.UpdateExtensions": true;
  "me.messages.DeleteExtensions": false;
  "me.messages.extensions.GetCount-d960": false;
  "me.messages.message.copy": true;
  "me.messages.message.createForward": true;
  "me.messages.message.createReply": true;
  "me.messages.message.createReplyAll": true;
  "me.messages.message.forward": true;
  "me.messages.message.move": true;
  "me.messages.message.permanentDelete": false;
  "me.messages.message.reply": true;
  "me.messages.message.replyAll": true;
  "me.messages.message.send": false;
  "me.messages.GetCount-a82e": false;
  "me.messages.delta": false;
  "me.sendMail": true;
  "me.GetOutlook": false;
  "me.outlook.ListMasterCategories": false;
  "me.outlook.CreateMasterCategories": true;
  "me.outlook.GetMasterCategories": false;
  "me.outlook.UpdateMasterCategories": true;
  "me.outlook.DeleteMasterCategories": false;
  "me.outlook.masterCategories.GetCount-7754": false;
  "me.outlook.supportedLanguages": false;
  "me.outlook.supportedTimeZones-5c4f": false;
  "me.outlook.supportedTimeZones-0d20": false;
  "subscriptions.subscription.ListSubscription": false;
  "subscriptions.subscription.CreateSubscription": true;
  "subscriptions.subscription.GetSubscription": false;
  "subscriptions.subscription.UpdateSubscription": true;
  "subscriptions.subscription.DeleteSubscription": false;
  "subscriptions.subscription.reauthorize": false;
  "users.user.GetUser": false;
  "users.user.UpdateUser": true;
  "users.user.DeleteUser": false;
  "users.ListMailFolders": false;
  "users.CreateMailFolders": true;
  "users.GetMailFolders": false;
  "users.UpdateMailFolders": true;
  "users.DeleteMailFolders": false;
  "users.mailFolders.ListChildFolders": false;
  "users.mailFolders.CreateChildFolders": true;
  "users.mailFolders.GetChildFolders": false;
  "users.mailFolders.UpdateChildFolders": true;
  "users.mailFolders.DeleteChildFolders": false;
  "users.mailFolders.childFolders.ListMessageRules": false;
  "users.mailFolders.childFolders.CreateMessageRules": true;
  "users.mailFolders.childFolders.GetMessageRules": false;
  "users.mailFolders.childFolders.UpdateMessageRules": true;
  "users.mailFolders.childFolders.DeleteMessageRules": false;
  "users.mailFolders.childFolders.messageRules.GetCount-22e6": false;
  "users.mailFolders.childFolders.ListMessages": false;
  "users.mailFolders.childFolders.CreateMessages": true;
  "users.mailFolders.childFolders.GetMessages": false;
  "users.mailFolders.childFolders.UpdateMessages": true;
  "users.mailFolders.childFolders.DeleteMessages": false;
  "users.mailFolders.childFolders.GetMessagesContent": false;
  "users.mailFolders.childFolders.UpdateMessagesContent": true;
  "users.mailFolders.childFolders.DeleteMessagesContent": false;
  "users.mailFolders.childFolders.messages.ListAttachments": false;
  "users.mailFolders.childFolders.messages.CreateAttachments": true;
  "users.mailFolders.childFolders.messages.GetAttachments": false;
  "users.mailFolders.childFolders.messages.DeleteAttachments": false;
  "users.mailFolders.childFolders.messages.attachments.GetCount-5ef0": false;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession": true;
  "users.mailFolders.childFolders.messages.ListExtensions": false;
  "users.mailFolders.childFolders.messages.CreateExtensions": true;
  "users.mailFolders.childFolders.messages.GetExtensions": false;
  "users.mailFolders.childFolders.messages.UpdateExtensions": true;
  "users.mailFolders.childFolders.messages.DeleteExtensions": false;
  "users.mailFolders.childFolders.messages.extensions.GetCount-1433": false;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy": true;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward": true;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply": true;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll": true;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward": true;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move": true;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete": false;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply": true;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll": true;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send": false;
  "users.mailFolders.childFolders.messages.GetCount-a576": false;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.delta": false;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.copy": true;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.move": true;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete": false;
  "users.mailFolders.childFolders.GetCount-d2d8": false;
  "users.user.mailFolders.mailFolder.childFolders.delta": false;
  "users.mailFolders.ListMessageRules": false;
  "users.mailFolders.CreateMessageRules": true;
  "users.mailFolders.GetMessageRules": false;
  "users.mailFolders.UpdateMessageRules": true;
  "users.mailFolders.DeleteMessageRules": false;
  "users.mailFolders.messageRules.GetCount-f330": false;
  "users.mailFolders.ListMessages": false;
  "users.mailFolders.CreateMessages": true;
  "users.mailFolders.GetMessages": false;
  "users.mailFolders.UpdateMessages": true;
  "users.mailFolders.DeleteMessages": false;
  "users.mailFolders.GetMessagesContent": false;
  "users.mailFolders.UpdateMessagesContent": true;
  "users.mailFolders.DeleteMessagesContent": false;
  "users.mailFolders.messages.ListAttachments": false;
  "users.mailFolders.messages.CreateAttachments": true;
  "users.mailFolders.messages.GetAttachments": false;
  "users.mailFolders.messages.DeleteAttachments": false;
  "users.mailFolders.messages.attachments.GetCount-3c73": false;
  "users.user.mailFolders.mailFolder.messages.message.attachments.createUploadSession": true;
  "users.mailFolders.messages.ListExtensions": false;
  "users.mailFolders.messages.CreateExtensions": true;
  "users.mailFolders.messages.GetExtensions": false;
  "users.mailFolders.messages.UpdateExtensions": true;
  "users.mailFolders.messages.DeleteExtensions": false;
  "users.mailFolders.messages.extensions.GetCount-651d": false;
  "users.user.mailFolders.mailFolder.messages.message.copy": true;
  "users.user.mailFolders.mailFolder.messages.message.createForward": true;
  "users.user.mailFolders.mailFolder.messages.message.createReply": true;
  "users.user.mailFolders.mailFolder.messages.message.createReplyAll": true;
  "users.user.mailFolders.mailFolder.messages.message.forward": true;
  "users.user.mailFolders.mailFolder.messages.message.move": true;
  "users.user.mailFolders.mailFolder.messages.message.permanentDelete": false;
  "users.user.mailFolders.mailFolder.messages.message.reply": true;
  "users.user.mailFolders.mailFolder.messages.message.replyAll": true;
  "users.user.mailFolders.mailFolder.messages.message.send": false;
  "users.mailFolders.messages.GetCount-9534": false;
  "users.user.mailFolders.mailFolder.messages.delta": false;
  "users.user.mailFolders.mailFolder.copy": true;
  "users.user.mailFolders.mailFolder.move": true;
  "users.user.mailFolders.mailFolder.permanentDelete": false;
  "users.mailFolders.GetCount-7dc9": false;
  "users.user.mailFolders.delta": false;
  "users.ListMessages": false;
  "users.CreateMessages": true;
  "users.GetMessages": false;
  "users.UpdateMessages": true;
  "users.DeleteMessages": false;
  "users.GetMessagesContent": false;
  "users.UpdateMessagesContent": true;
  "users.DeleteMessagesContent": false;
  "users.messages.ListAttachments": false;
  "users.messages.CreateAttachments": true;
  "users.messages.GetAttachments": false;
  "users.messages.DeleteAttachments": false;
  "users.messages.attachments.GetCount-a586": false;
  "users.user.messages.message.attachments.createUploadSession": true;
  "users.messages.ListExtensions": false;
  "users.messages.CreateExtensions": true;
  "users.messages.GetExtensions": false;
  "users.messages.UpdateExtensions": true;
  "users.messages.DeleteExtensions": false;
  "users.messages.extensions.GetCount-5628": false;
  "users.user.messages.message.copy": true;
  "users.user.messages.message.createForward": true;
  "users.user.messages.message.createReply": true;
  "users.user.messages.message.createReplyAll": true;
  "users.user.messages.message.forward": true;
  "users.user.messages.message.move": true;
  "users.user.messages.message.permanentDelete": false;
  "users.user.messages.message.reply": true;
  "users.user.messages.message.replyAll": true;
  "users.user.messages.message.send": false;
  "users.messages.GetCount-0f52": false;
  "users.user.messages.delta": false;
  "users.user.sendMail": true;
  "users.GetOutlook": false;
  "users.outlook.ListMasterCategories": false;
  "users.outlook.CreateMasterCategories": true;
  "users.outlook.GetMasterCategories": false;
  "users.outlook.UpdateMasterCategories": true;
  "users.outlook.DeleteMasterCategories": false;
  "users.outlook.masterCategories.GetCount-8560": false;
  "users.user.outlook.supportedLanguages": false;
  "users.user.outlook.supportedTimeZones-5c4f": false;
  "users.user.outlook.supportedTimeZones-0d20": false;
}

export interface OutlookGraphOperationResponseMap {
  "me.user.GetUser": OutlookGraphSchemaMicrosoftGraphUser;
  "me.user.UpdateUser": OutlookGraphSchemaMicrosoftGraphUser;
  "me.ListMailFolders": OutlookGraphSchemaMicrosoftGraphMailFolderCollectionResponse;
  "me.CreateMailFolders": OutlookGraphSchemaMicrosoftGraphMailFolder;
  "me.GetMailFolders": OutlookGraphSchemaMicrosoftGraphMailFolder;
  "me.UpdateMailFolders": OutlookGraphSchemaMicrosoftGraphMailFolder;
  "me.DeleteMailFolders": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.ListChildFolders": OutlookGraphSchemaMicrosoftGraphMailFolderCollectionResponse;
  "me.mailFolders.CreateChildFolders": OutlookGraphSchemaMicrosoftGraphMailFolder;
  "me.mailFolders.GetChildFolders": OutlookGraphSchemaMicrosoftGraphMailFolder;
  "me.mailFolders.UpdateChildFolders": OutlookGraphSchemaMicrosoftGraphMailFolder;
  "me.mailFolders.DeleteChildFolders": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.childFolders.ListMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRuleCollectionResponse;
  "me.mailFolders.childFolders.CreateMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRule;
  "me.mailFolders.childFolders.GetMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRule;
  "me.mailFolders.childFolders.UpdateMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRule;
  "me.mailFolders.childFolders.DeleteMessageRules": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.childFolders.messageRules.GetCount-6a96": OutlookGraphSchemaODataCountResponse;
  "me.mailFolders.childFolders.ListMessages": OutlookGraphSchemaMicrosoftGraphMessageCollectionResponse;
  "me.mailFolders.childFolders.CreateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "me.mailFolders.childFolders.GetMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "me.mailFolders.childFolders.UpdateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "me.mailFolders.childFolders.DeleteMessages": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.childFolders.GetMessagesContent": string;
  "me.mailFolders.childFolders.UpdateMessagesContent": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.childFolders.DeleteMessagesContent": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.childFolders.messages.ListAttachments": OutlookGraphSchemaMicrosoftGraphAttachmentCollectionResponse;
  "me.mailFolders.childFolders.messages.CreateAttachments": OutlookGraphSchemaMicrosoftGraphAttachment;
  "me.mailFolders.childFolders.messages.GetAttachments": OutlookGraphSchemaMicrosoftGraphAttachment;
  "me.mailFolders.childFolders.messages.DeleteAttachments": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.childFolders.messages.attachments.GetCount-65b2": OutlookGraphSchemaODataCountResponse;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession": (OutlookGraphSchemaMicrosoftGraphUploadSession | {} | null);
  "me.mailFolders.childFolders.messages.ListExtensions": OutlookGraphSchemaMicrosoftGraphExtensionCollectionResponse;
  "me.mailFolders.childFolders.messages.CreateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "me.mailFolders.childFolders.messages.GetExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "me.mailFolders.childFolders.messages.UpdateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "me.mailFolders.childFolders.messages.DeleteExtensions": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.childFolders.messages.extensions.GetCount-cf94": OutlookGraphSchemaODataCountResponse;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.childFolders.messages.GetCount-56da": OutlookGraphSchemaODataCountResponse;
  "me.mailFolders.mailFolder.childFolders.mailFolder.messages.delta": (OutlookGraphSchemaBaseDeltaFunctionResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMessage>;
});
  "me.mailFolders.mailFolder.childFolders.mailFolder.copy": (OutlookGraphSchemaMicrosoftGraphMailFolder | {} | null);
  "me.mailFolders.mailFolder.childFolders.mailFolder.move": (OutlookGraphSchemaMicrosoftGraphMailFolder | {} | null);
  "me.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.childFolders.GetCount-25bc": OutlookGraphSchemaODataCountResponse;
  "me.mailFolders.mailFolder.childFolders.delta": (OutlookGraphSchemaBaseDeltaFunctionResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMailFolder>;
});
  "me.mailFolders.ListMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRuleCollectionResponse;
  "me.mailFolders.CreateMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRule;
  "me.mailFolders.GetMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRule;
  "me.mailFolders.UpdateMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRule;
  "me.mailFolders.DeleteMessageRules": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.messageRules.GetCount-3d24": OutlookGraphSchemaODataCountResponse;
  "me.mailFolders.ListMessages": OutlookGraphSchemaMicrosoftGraphMessageCollectionResponse;
  "me.mailFolders.CreateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "me.mailFolders.GetMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "me.mailFolders.UpdateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "me.mailFolders.DeleteMessages": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.GetMessagesContent": string;
  "me.mailFolders.UpdateMessagesContent": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.DeleteMessagesContent": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.messages.ListAttachments": OutlookGraphSchemaMicrosoftGraphAttachmentCollectionResponse;
  "me.mailFolders.messages.CreateAttachments": OutlookGraphSchemaMicrosoftGraphAttachment;
  "me.mailFolders.messages.GetAttachments": OutlookGraphSchemaMicrosoftGraphAttachment;
  "me.mailFolders.messages.DeleteAttachments": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.messages.attachments.GetCount-16fa": OutlookGraphSchemaODataCountResponse;
  "me.mailFolders.mailFolder.messages.message.attachments.createUploadSession": (OutlookGraphSchemaMicrosoftGraphUploadSession | {} | null);
  "me.mailFolders.messages.ListExtensions": OutlookGraphSchemaMicrosoftGraphExtensionCollectionResponse;
  "me.mailFolders.messages.CreateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "me.mailFolders.messages.GetExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "me.mailFolders.messages.UpdateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "me.mailFolders.messages.DeleteExtensions": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.messages.extensions.GetCount-8860": OutlookGraphSchemaODataCountResponse;
  "me.mailFolders.mailFolder.messages.message.copy": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "me.mailFolders.mailFolder.messages.message.createForward": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "me.mailFolders.mailFolder.messages.message.createReply": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "me.mailFolders.mailFolder.messages.message.createReplyAll": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "me.mailFolders.mailFolder.messages.message.forward": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.mailFolder.messages.message.move": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "me.mailFolders.mailFolder.messages.message.permanentDelete": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.mailFolder.messages.message.reply": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.mailFolder.messages.message.replyAll": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.mailFolder.messages.message.send": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.messages.GetCount-363a": OutlookGraphSchemaODataCountResponse;
  "me.mailFolders.mailFolder.messages.delta": (OutlookGraphSchemaBaseDeltaFunctionResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMessage>;
});
  "me.mailFolders.mailFolder.copy": (OutlookGraphSchemaMicrosoftGraphMailFolder | {} | null);
  "me.mailFolders.mailFolder.move": (OutlookGraphSchemaMicrosoftGraphMailFolder | {} | null);
  "me.mailFolders.mailFolder.permanentDelete": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.mailFolders.GetCount-c00e": OutlookGraphSchemaODataCountResponse;
  "me.mailFolders.delta": (OutlookGraphSchemaBaseDeltaFunctionResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMailFolder>;
});
  "me.ListMessages": OutlookGraphSchemaMicrosoftGraphMessageCollectionResponse;
  "me.CreateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "me.GetMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "me.UpdateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "me.DeleteMessages": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.GetMessagesContent": string;
  "me.UpdateMessagesContent": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.DeleteMessagesContent": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.messages.ListAttachments": OutlookGraphSchemaMicrosoftGraphAttachmentCollectionResponse;
  "me.messages.CreateAttachments": OutlookGraphSchemaMicrosoftGraphAttachment;
  "me.messages.GetAttachments": OutlookGraphSchemaMicrosoftGraphAttachment;
  "me.messages.DeleteAttachments": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.messages.attachments.GetCount-2181": OutlookGraphSchemaODataCountResponse;
  "me.messages.message.attachments.createUploadSession": (OutlookGraphSchemaMicrosoftGraphUploadSession | {} | null);
  "me.messages.ListExtensions": OutlookGraphSchemaMicrosoftGraphExtensionCollectionResponse;
  "me.messages.CreateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "me.messages.GetExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "me.messages.UpdateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "me.messages.DeleteExtensions": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.messages.extensions.GetCount-d960": OutlookGraphSchemaODataCountResponse;
  "me.messages.message.copy": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "me.messages.message.createForward": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "me.messages.message.createReply": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "me.messages.message.createReplyAll": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "me.messages.message.forward": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.messages.message.move": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "me.messages.message.permanentDelete": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.messages.message.reply": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.messages.message.replyAll": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.messages.message.send": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.messages.GetCount-a82e": OutlookGraphSchemaODataCountResponse;
  "me.messages.delta": (OutlookGraphSchemaBaseDeltaFunctionResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMessage>;
});
  "me.sendMail": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.GetOutlook": OutlookGraphSchemaMicrosoftGraphOutlookUser;
  "me.outlook.ListMasterCategories": OutlookGraphSchemaMicrosoftGraphOutlookCategoryCollectionResponse;
  "me.outlook.CreateMasterCategories": OutlookGraphSchemaMicrosoftGraphOutlookCategory;
  "me.outlook.GetMasterCategories": OutlookGraphSchemaMicrosoftGraphOutlookCategory;
  "me.outlook.UpdateMasterCategories": OutlookGraphSchemaMicrosoftGraphOutlookCategory;
  "me.outlook.DeleteMasterCategories": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "me.outlook.masterCategories.GetCount-7754": OutlookGraphSchemaODataCountResponse;
  "me.outlook.supportedLanguages": (OutlookGraphSchemaBaseCollectionPaginationCountResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphLocaleInfo>;
});
  "me.outlook.supportedTimeZones-5c4f": (OutlookGraphSchemaBaseCollectionPaginationCountResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTimeZoneInformation>;
});
  "me.outlook.supportedTimeZones-0d20": (OutlookGraphSchemaBaseCollectionPaginationCountResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTimeZoneInformation>;
});
  "subscriptions.subscription.ListSubscription": OutlookGraphSchemaMicrosoftGraphSubscriptionCollectionResponse;
  "subscriptions.subscription.CreateSubscription": OutlookGraphSchemaMicrosoftGraphSubscription;
  "subscriptions.subscription.GetSubscription": OutlookGraphSchemaMicrosoftGraphSubscription;
  "subscriptions.subscription.UpdateSubscription": OutlookGraphSchemaMicrosoftGraphSubscription;
  "subscriptions.subscription.DeleteSubscription": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "subscriptions.subscription.reauthorize": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.user.GetUser": OutlookGraphSchemaMicrosoftGraphUser;
  "users.user.UpdateUser": OutlookGraphSchemaMicrosoftGraphUser;
  "users.user.DeleteUser": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.ListMailFolders": OutlookGraphSchemaMicrosoftGraphMailFolderCollectionResponse;
  "users.CreateMailFolders": OutlookGraphSchemaMicrosoftGraphMailFolder;
  "users.GetMailFolders": OutlookGraphSchemaMicrosoftGraphMailFolder;
  "users.UpdateMailFolders": OutlookGraphSchemaMicrosoftGraphMailFolder;
  "users.DeleteMailFolders": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.mailFolders.ListChildFolders": OutlookGraphSchemaMicrosoftGraphMailFolderCollectionResponse;
  "users.mailFolders.CreateChildFolders": OutlookGraphSchemaMicrosoftGraphMailFolder;
  "users.mailFolders.GetChildFolders": OutlookGraphSchemaMicrosoftGraphMailFolder;
  "users.mailFolders.UpdateChildFolders": OutlookGraphSchemaMicrosoftGraphMailFolder;
  "users.mailFolders.DeleteChildFolders": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.mailFolders.childFolders.ListMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRuleCollectionResponse;
  "users.mailFolders.childFolders.CreateMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRule;
  "users.mailFolders.childFolders.GetMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRule;
  "users.mailFolders.childFolders.UpdateMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRule;
  "users.mailFolders.childFolders.DeleteMessageRules": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.mailFolders.childFolders.messageRules.GetCount-22e6": OutlookGraphSchemaODataCountResponse;
  "users.mailFolders.childFolders.ListMessages": OutlookGraphSchemaMicrosoftGraphMessageCollectionResponse;
  "users.mailFolders.childFolders.CreateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "users.mailFolders.childFolders.GetMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "users.mailFolders.childFolders.UpdateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "users.mailFolders.childFolders.DeleteMessages": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.mailFolders.childFolders.GetMessagesContent": string;
  "users.mailFolders.childFolders.UpdateMessagesContent": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.mailFolders.childFolders.DeleteMessagesContent": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.mailFolders.childFolders.messages.ListAttachments": OutlookGraphSchemaMicrosoftGraphAttachmentCollectionResponse;
  "users.mailFolders.childFolders.messages.CreateAttachments": OutlookGraphSchemaMicrosoftGraphAttachment;
  "users.mailFolders.childFolders.messages.GetAttachments": OutlookGraphSchemaMicrosoftGraphAttachment;
  "users.mailFolders.childFolders.messages.DeleteAttachments": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.mailFolders.childFolders.messages.attachments.GetCount-5ef0": OutlookGraphSchemaODataCountResponse;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.attachments.createUploadSession": (OutlookGraphSchemaMicrosoftGraphUploadSession | {} | null);
  "users.mailFolders.childFolders.messages.ListExtensions": OutlookGraphSchemaMicrosoftGraphExtensionCollectionResponse;
  "users.mailFolders.childFolders.messages.CreateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "users.mailFolders.childFolders.messages.GetExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "users.mailFolders.childFolders.messages.UpdateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "users.mailFolders.childFolders.messages.DeleteExtensions": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.mailFolders.childFolders.messages.extensions.GetCount-1433": OutlookGraphSchemaODataCountResponse;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.copy": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createForward": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReply": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.createReplyAll": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.forward": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.move": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.permanentDelete": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.reply": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.replyAll": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.message.send": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.mailFolders.childFolders.messages.GetCount-a576": OutlookGraphSchemaODataCountResponse;
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.messages.delta": (OutlookGraphSchemaBaseDeltaFunctionResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMessage>;
});
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.copy": (OutlookGraphSchemaMicrosoftGraphMailFolder | {} | null);
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.move": (OutlookGraphSchemaMicrosoftGraphMailFolder | {} | null);
  "users.user.mailFolders.mailFolder.childFolders.mailFolder.permanentDelete": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.mailFolders.childFolders.GetCount-d2d8": OutlookGraphSchemaODataCountResponse;
  "users.user.mailFolders.mailFolder.childFolders.delta": (OutlookGraphSchemaBaseDeltaFunctionResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMailFolder>;
});
  "users.mailFolders.ListMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRuleCollectionResponse;
  "users.mailFolders.CreateMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRule;
  "users.mailFolders.GetMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRule;
  "users.mailFolders.UpdateMessageRules": OutlookGraphSchemaMicrosoftGraphMessageRule;
  "users.mailFolders.DeleteMessageRules": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.mailFolders.messageRules.GetCount-f330": OutlookGraphSchemaODataCountResponse;
  "users.mailFolders.ListMessages": OutlookGraphSchemaMicrosoftGraphMessageCollectionResponse;
  "users.mailFolders.CreateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "users.mailFolders.GetMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "users.mailFolders.UpdateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "users.mailFolders.DeleteMessages": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.mailFolders.GetMessagesContent": string;
  "users.mailFolders.UpdateMessagesContent": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.mailFolders.DeleteMessagesContent": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.mailFolders.messages.ListAttachments": OutlookGraphSchemaMicrosoftGraphAttachmentCollectionResponse;
  "users.mailFolders.messages.CreateAttachments": OutlookGraphSchemaMicrosoftGraphAttachment;
  "users.mailFolders.messages.GetAttachments": OutlookGraphSchemaMicrosoftGraphAttachment;
  "users.mailFolders.messages.DeleteAttachments": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.mailFolders.messages.attachments.GetCount-3c73": OutlookGraphSchemaODataCountResponse;
  "users.user.mailFolders.mailFolder.messages.message.attachments.createUploadSession": (OutlookGraphSchemaMicrosoftGraphUploadSession | {} | null);
  "users.mailFolders.messages.ListExtensions": OutlookGraphSchemaMicrosoftGraphExtensionCollectionResponse;
  "users.mailFolders.messages.CreateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "users.mailFolders.messages.GetExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "users.mailFolders.messages.UpdateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "users.mailFolders.messages.DeleteExtensions": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.mailFolders.messages.extensions.GetCount-651d": OutlookGraphSchemaODataCountResponse;
  "users.user.mailFolders.mailFolder.messages.message.copy": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "users.user.mailFolders.mailFolder.messages.message.createForward": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "users.user.mailFolders.mailFolder.messages.message.createReply": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "users.user.mailFolders.mailFolder.messages.message.createReplyAll": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "users.user.mailFolders.mailFolder.messages.message.forward": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.user.mailFolders.mailFolder.messages.message.move": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "users.user.mailFolders.mailFolder.messages.message.permanentDelete": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.user.mailFolders.mailFolder.messages.message.reply": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.user.mailFolders.mailFolder.messages.message.replyAll": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.user.mailFolders.mailFolder.messages.message.send": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.mailFolders.messages.GetCount-9534": OutlookGraphSchemaODataCountResponse;
  "users.user.mailFolders.mailFolder.messages.delta": (OutlookGraphSchemaBaseDeltaFunctionResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMessage>;
});
  "users.user.mailFolders.mailFolder.copy": (OutlookGraphSchemaMicrosoftGraphMailFolder | {} | null);
  "users.user.mailFolders.mailFolder.move": (OutlookGraphSchemaMicrosoftGraphMailFolder | {} | null);
  "users.user.mailFolders.mailFolder.permanentDelete": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.mailFolders.GetCount-7dc9": OutlookGraphSchemaODataCountResponse;
  "users.user.mailFolders.delta": (OutlookGraphSchemaBaseDeltaFunctionResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMailFolder>;
});
  "users.ListMessages": OutlookGraphSchemaMicrosoftGraphMessageCollectionResponse;
  "users.CreateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "users.GetMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "users.UpdateMessages": OutlookGraphSchemaMicrosoftGraphMessage;
  "users.DeleteMessages": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.GetMessagesContent": string;
  "users.UpdateMessagesContent": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.DeleteMessagesContent": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.messages.ListAttachments": OutlookGraphSchemaMicrosoftGraphAttachmentCollectionResponse;
  "users.messages.CreateAttachments": OutlookGraphSchemaMicrosoftGraphAttachment;
  "users.messages.GetAttachments": OutlookGraphSchemaMicrosoftGraphAttachment;
  "users.messages.DeleteAttachments": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.messages.attachments.GetCount-a586": OutlookGraphSchemaODataCountResponse;
  "users.user.messages.message.attachments.createUploadSession": (OutlookGraphSchemaMicrosoftGraphUploadSession | {} | null);
  "users.messages.ListExtensions": OutlookGraphSchemaMicrosoftGraphExtensionCollectionResponse;
  "users.messages.CreateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "users.messages.GetExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "users.messages.UpdateExtensions": OutlookGraphSchemaMicrosoftGraphExtension;
  "users.messages.DeleteExtensions": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.messages.extensions.GetCount-5628": OutlookGraphSchemaODataCountResponse;
  "users.user.messages.message.copy": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "users.user.messages.message.createForward": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "users.user.messages.message.createReply": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "users.user.messages.message.createReplyAll": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "users.user.messages.message.forward": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.user.messages.message.move": (OutlookGraphSchemaMicrosoftGraphMessage | {} | null);
  "users.user.messages.message.permanentDelete": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.user.messages.message.reply": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.user.messages.message.replyAll": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.user.messages.message.send": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.messages.GetCount-0f52": OutlookGraphSchemaODataCountResponse;
  "users.user.messages.delta": (OutlookGraphSchemaBaseDeltaFunctionResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphMessage>;
});
  "users.user.sendMail": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.GetOutlook": OutlookGraphSchemaMicrosoftGraphOutlookUser;
  "users.outlook.ListMasterCategories": OutlookGraphSchemaMicrosoftGraphOutlookCategoryCollectionResponse;
  "users.outlook.CreateMasterCategories": OutlookGraphSchemaMicrosoftGraphOutlookCategory;
  "users.outlook.GetMasterCategories": OutlookGraphSchemaMicrosoftGraphOutlookCategory;
  "users.outlook.UpdateMasterCategories": OutlookGraphSchemaMicrosoftGraphOutlookCategory;
  "users.outlook.DeleteMasterCategories": OutlookGraphSchemaMicrosoftGraphODataErrorsODataError;
  "users.outlook.masterCategories.GetCount-8560": OutlookGraphSchemaODataCountResponse;
  "users.user.outlook.supportedLanguages": (OutlookGraphSchemaBaseCollectionPaginationCountResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphLocaleInfo>;
});
  "users.user.outlook.supportedTimeZones-5c4f": (OutlookGraphSchemaBaseCollectionPaginationCountResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTimeZoneInformation>;
});
  "users.user.outlook.supportedTimeZones-0d20": (OutlookGraphSchemaBaseCollectionPaginationCountResponse & {
  value?: ReadonlyArray<OutlookGraphSchemaMicrosoftGraphTimeZoneInformation>;
});
}
