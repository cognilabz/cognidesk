// Generated provider schema DTOs for AmazonConnectFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type AmazonConnectFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type AmazonConnectFullApiSchemaJsonValue = AmazonConnectFullApiSchemaJsonPrimitive | readonly AmazonConnectFullApiSchemaJsonValue[] | { readonly [key: string]: AmazonConnectFullApiSchemaJsonValue | undefined };

export type AmazonConnectFullApiSchemaApplicationSourceConfig = {
  ExternalUrlConfig?: AmazonConnectFullApiSchemaExternalUrlConfig;
};

export type AmazonConnectFullApiSchemaSubscriptionList = ReadonlyArray<AmazonConnectFullApiSchemaSubscription>;

export type AmazonConnectFullApiSchemaPublicationList = ReadonlyArray<AmazonConnectFullApiSchemaPublication>;

export type AmazonConnectFullApiSchemaTagMap = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaPermissionList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaApplicationConfig = {
  ContactHandling?: AmazonConnectFullApiSchemaContactHandling;
};

export type AmazonConnectFullApiSchemaIframeConfig = {
  Allow?: AmazonConnectFullApiSchemaIframePermissionList;
  Sandbox?: AmazonConnectFullApiSchemaIframePermissionList;
};

export type AmazonConnectFullApiSchemaApplicationType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCreateApplicationResponse = {
  Arn?: string;
  Id?: string;
};

export type AmazonConnectFullApiSchemaScheduleConfiguration = {
  FirstExecutionFrom?: string;
  Object?: string;
  ScheduleExpression: string;
};

export type AmazonConnectFullApiSchemaFileConfiguration = {
  Folders: AmazonConnectFullApiSchemaFolderList;
  Filters?: AmazonConnectFullApiSchemaFieldsMap;
};

export type AmazonConnectFullApiSchemaObjectConfiguration = {
  readonly [key: string]: AmazonConnectFullApiSchemaFieldsMap | undefined;
};

export type AmazonConnectFullApiSchemaCreateDataIntegrationResponse = {
  Arn?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  KmsKey?: string;
  SourceURI?: string;
  ScheduleConfiguration?: AmazonConnectFullApiSchemaScheduleConfiguration;
  Tags?: AmazonConnectFullApiSchemaTagMap;
  ClientToken?: string;
  FileConfiguration?: AmazonConnectFullApiSchemaFileConfiguration;
  ObjectConfiguration?: AmazonConnectFullApiSchemaObjectConfiguration;
};

export type AmazonConnectFullApiSchemaClientAssociationMetadata = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaExecutionConfiguration = {
  ExecutionMode: AmazonConnectFullApiSchemaExecutionMode;
  OnDemandConfiguration?: AmazonConnectFullApiSchemaOnDemandConfiguration;
  ScheduleConfiguration?: AmazonConnectFullApiSchemaScheduleConfiguration;
};

export type AmazonConnectFullApiSchemaCreateDataIntegrationAssociationResponse = {
  DataIntegrationAssociationId?: string;
  DataIntegrationArn?: string;
};

export type AmazonConnectFullApiSchemaEventFilter = {
  Source: string;
};

export type AmazonConnectFullApiSchemaCreateEventIntegrationResponse = {
  EventIntegrationArn?: string;
};

export type AmazonConnectFullApiSchemaDeleteApplicationResponse = {};

export type AmazonConnectFullApiSchemaDeleteDataIntegrationResponse = {};

export type AmazonConnectFullApiSchemaDeleteEventIntegrationResponse = {};

export type AmazonConnectFullApiSchemaGetApplicationResponse = {
  Arn?: string;
  Id?: string;
  Name?: string;
  Namespace?: string;
  Description?: string;
  ApplicationSourceConfig?: AmazonConnectFullApiSchemaApplicationSourceConfig;
  Subscriptions?: AmazonConnectFullApiSchemaSubscriptionList;
  Publications?: AmazonConnectFullApiSchemaPublicationList;
  CreatedTime?: string;
  LastModifiedTime?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap;
  Permissions?: AmazonConnectFullApiSchemaPermissionList;
  IsService?: boolean;
  InitializationTimeout?: number;
  ApplicationConfig?: AmazonConnectFullApiSchemaApplicationConfig;
  IframeConfig?: AmazonConnectFullApiSchemaIframeConfig;
  ApplicationType?: AmazonConnectFullApiSchemaApplicationType;
};

export type AmazonConnectFullApiSchemaGetDataIntegrationResponse = {
  Arn?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  KmsKey?: string;
  SourceURI?: string;
  ScheduleConfiguration?: AmazonConnectFullApiSchemaScheduleConfiguration;
  Tags?: AmazonConnectFullApiSchemaTagMap;
  FileConfiguration?: AmazonConnectFullApiSchemaFileConfiguration;
  ObjectConfiguration?: AmazonConnectFullApiSchemaObjectConfiguration;
};

export type AmazonConnectFullApiSchemaGetEventIntegrationResponse = {
  Name?: string;
  Description?: string;
  EventIntegrationArn?: string;
  EventBridgeBus?: string;
  EventFilter?: AmazonConnectFullApiSchemaEventFilter;
  Tags?: AmazonConnectFullApiSchemaTagMap;
};

export type AmazonConnectFullApiSchemaListApplicationAssociationsResponse = {
  ApplicationAssociations?: AmazonConnectFullApiSchemaApplicationAssociationsList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListApplicationsResponse = {
  Applications?: AmazonConnectFullApiSchemaApplicationsList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListDataIntegrationAssociationsResponse = {
  DataIntegrationAssociations?: AmazonConnectFullApiSchemaDataIntegrationAssociationsList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListDataIntegrationsResponse = {
  DataIntegrations?: AmazonConnectFullApiSchemaDataIntegrationsList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListEventIntegrationAssociationsResponse = {
  EventIntegrationAssociations?: AmazonConnectFullApiSchemaEventIntegrationAssociationsList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListEventIntegrationsResponse = {
  EventIntegrations?: AmazonConnectFullApiSchemaEventIntegrationsList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListTagsForResourceResponse = {
  tags?: AmazonConnectFullApiSchemaTagMap;
};

export type AmazonConnectFullApiSchemaTagResourceResponse = {};

export type AmazonConnectFullApiSchemaTagKeyList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaUntagResourceResponse = {};

export type AmazonConnectFullApiSchemaUpdateApplicationResponse = {};

export type AmazonConnectFullApiSchemaUpdateDataIntegrationResponse = {};

export type AmazonConnectFullApiSchemaUpdateDataIntegrationAssociationResponse = {};

export type AmazonConnectFullApiSchemaUpdateEventIntegrationResponse = {};

export type AmazonConnectFullApiSchemaActivateEvaluationFormResponse = {
  EvaluationFormId: string;
  EvaluationFormArn: string;
  EvaluationFormVersion: number;
};

export type AmazonConnectFullApiSchemaAssociateAnalyticsDataSetResponse = {
  DataSetId?: string;
  TargetAccountId?: string;
  ResourceShareId?: string;
  ResourceShareArn?: string;
};

export type AmazonConnectFullApiSchemaLexBot = {
  Name: string;
  LexRegion: string;
};

export type AmazonConnectFullApiSchemaLexV2Bot = {
  AliasArn?: string;
};

export type AmazonConnectFullApiSchemaAssociateContactWithUserResponse = {};

export type AmazonConnectFullApiSchemaAssociateDefaultVocabularyResponse = {};

export type AmazonConnectFullApiSchemaAliasConfiguration = {
  EmailAddressId: string;
};

export type AmazonConnectFullApiSchemaAssociateEmailAddressAliasResponse = {};

export type AmazonConnectFullApiSchemaFlowAssociationResourceType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaAssociateFlowResponse = {};

export type AmazonConnectFullApiSchemaParentHoursOfOperationConfigList = ReadonlyArray<AmazonConnectFullApiSchemaParentHoursOfOperationConfig>;

export type AmazonConnectFullApiSchemaInstanceStorageResourceType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaInstanceStorageConfig = {
  AssociationId?: string;
  StorageType: AmazonConnectFullApiSchemaStorageType;
  S3Config?: AmazonConnectFullApiSchemaS3Config;
  KinesisVideoStreamConfig?: AmazonConnectFullApiSchemaKinesisVideoStreamConfig;
  KinesisStreamConfig?: AmazonConnectFullApiSchemaKinesisStreamConfig;
  KinesisFirehoseConfig?: AmazonConnectFullApiSchemaKinesisFirehoseConfig;
};

export type AmazonConnectFullApiSchemaAssociateInstanceStorageConfigResponse = {
  AssociationId?: string;
};

export type AmazonConnectFullApiSchemaEmailAddressConfigList = ReadonlyArray<AmazonConnectFullApiSchemaEmailAddressConfig>;

export type AmazonConnectFullApiSchemaQuickConnectsList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaRoutingProfileQueueConfigList = ReadonlyArray<AmazonConnectFullApiSchemaRoutingProfileQueueConfig>;

export type AmazonConnectFullApiSchemaRoutingProfileManualAssignmentQueueConfigList = ReadonlyArray<AmazonConnectFullApiSchemaRoutingProfileManualAssignmentQueueConfig>;

export type AmazonConnectFullApiSchemaAssociateSecurityKeyResponse = {
  AssociationId?: string;
};

export type AmazonConnectFullApiSchemaSecurityProfiles = ReadonlyArray<AmazonConnectFullApiSchemaSecurityProfileItem>;

export type AmazonConnectFullApiSchemaEntityType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaAssociateTrafficDistributionGroupUserResponse = {};

export type AmazonConnectFullApiSchemaUserProficiencyList = ReadonlyArray<AmazonConnectFullApiSchemaUserProficiency>;

export type AmazonConnectFullApiSchemaWorkspaceResourceArnList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaAssociateWorkspaceResponse = {
  SuccessfulList?: AmazonConnectFullApiSchemaSuccessfulBatchAssociationSummaryList;
  FailedList?: AmazonConnectFullApiSchemaFailedBatchAssociationSummaryList;
};

export type AmazonConnectFullApiSchemaDataSetIds = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaBatchAssociateAnalyticsDataSetResponse = {
  Created?: AmazonConnectFullApiSchemaAnalyticsDataAssociationResults;
  Errors?: AmazonConnectFullApiSchemaErrorResults;
};

export type AmazonConnectFullApiSchemaDataTableValueList = ReadonlyArray<AmazonConnectFullApiSchemaDataTableValue>;

export type AmazonConnectFullApiSchemaBatchCreateDataTableValueResponse = {
  Successful: AmazonConnectFullApiSchemaBatchCreateDataTableValueSuccessResultList;
  Failed: AmazonConnectFullApiSchemaBatchCreateDataTableValueFailureResultList;
};

export type AmazonConnectFullApiSchemaDataTableDeleteValueIdentifierList = ReadonlyArray<AmazonConnectFullApiSchemaDataTableDeleteValueIdentifier>;

export type AmazonConnectFullApiSchemaBatchDeleteDataTableValueResponse = {
  Successful: AmazonConnectFullApiSchemaBatchDeleteDataTableValueSuccessResultList;
  Failed: AmazonConnectFullApiSchemaBatchDeleteDataTableValueFailureResultList;
};

export type AmazonConnectFullApiSchemaDataTableValueIdentifierList = ReadonlyArray<AmazonConnectFullApiSchemaDataTableValueIdentifier>;

export type AmazonConnectFullApiSchemaBatchDescribeDataTableValueResponse = {
  Successful: AmazonConnectFullApiSchemaBatchDescribeDataTableValueSuccessResultList;
  Failed: AmazonConnectFullApiSchemaBatchDescribeDataTableValueFailureResultList;
};

export type AmazonConnectFullApiSchemaBatchDisassociateAnalyticsDataSetResponse = {
  Deleted?: AmazonConnectFullApiSchemaDataSetIds;
  Errors?: AmazonConnectFullApiSchemaErrorResults;
};

export type AmazonConnectFullApiSchemaFileIdList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaBatchGetAttachedFileMetadataResponse = {
  Files?: AmazonConnectFullApiSchemaAttachedFilesList;
  Errors?: AmazonConnectFullApiSchemaAttachedFileErrorsList;
};

export type AmazonConnectFullApiSchemaResourceArnListMaxLimit100 = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaListFlowAssociationResourceType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaBatchGetFlowAssociationResponse = {
  FlowAssociationSummaryList?: AmazonConnectFullApiSchemaFlowAssociationSummaryList;
};

export type AmazonConnectFullApiSchemaContactDataRequestList = ReadonlyArray<AmazonConnectFullApiSchemaContactDataRequest>;

export type AmazonConnectFullApiSchemaBatchPutContactResponse = {
  SuccessfulRequestList?: AmazonConnectFullApiSchemaSuccessfulRequestList;
  FailedRequestList?: AmazonConnectFullApiSchemaFailedRequestList;
};

export type AmazonConnectFullApiSchemaBatchUpdateDataTableValueResponse = {
  Successful: AmazonConnectFullApiSchemaBatchUpdateDataTableValueSuccessResultList;
  Failed: AmazonConnectFullApiSchemaBatchUpdateDataTableValueFailureResultList;
};

export type AmazonConnectFullApiSchemaTagMap2 = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaClaimPhoneNumberResponse = {
  PhoneNumberId?: string;
  PhoneNumberArn?: string;
};

export type AmazonConnectFullApiSchemaCompleteAttachedFileUploadResponse = {};

export type AmazonConnectFullApiSchemaAgentStatusState = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCreateAgentStatusResponse = {
  AgentStatusARN?: string;
  AgentStatusId?: string;
};

export type AmazonConnectFullApiSchemaAttributes = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaContactReferences = {
  readonly [key: string]: AmazonConnectFullApiSchemaReference | undefined;
};

export type AmazonConnectFullApiSchemaChannel = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaContactInitiationMethod = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaUserInfo = {
  UserId?: string;
};

export type AmazonConnectFullApiSchemaInitiateAs = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaSegmentAttributes = {
  readonly [key: string]: AmazonConnectFullApiSchemaSegmentAttributeValue | undefined;
};

export type AmazonConnectFullApiSchemaCreateContactResponse = {
  ContactId?: string;
  ContactArn?: string;
};

export type AmazonConnectFullApiSchemaContactFlowType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaContactFlowStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCreateContactFlowResponse = {
  ContactFlowId?: string;
  ContactFlowArn?: string;
  FlowContentSha256?: string;
};

export type AmazonConnectFullApiSchemaExternalInvocationConfiguration = {
  Enabled?: boolean;
};

export type AmazonConnectFullApiSchemaCreateContactFlowModuleResponse = {
  Id?: string;
  Arn?: string;
};

export type AmazonConnectFullApiSchemaCreateContactFlowModuleAliasResponse = {
  ContactFlowModuleArn?: string;
  Id?: string;
};

export type AmazonConnectFullApiSchemaCreateContactFlowModuleVersionResponse = {
  ContactFlowModuleArn?: string;
  Version?: number;
};

export type AmazonConnectFullApiSchemaCreateContactFlowVersionResponse = {
  ContactFlowArn?: string;
  Version?: number;
};

export type AmazonConnectFullApiSchemaDataTableLockLevel = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaDataTableStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCreateDataTableResponse = {
  Id: string;
  Arn: string;
  LockVersion: AmazonConnectFullApiSchemaDataTableLockVersion;
};

export type AmazonConnectFullApiSchemaDataTableAttributeValueType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaValidation = {
  MinLength?: number;
  MaxLength?: number;
  MinValues?: number;
  MaxValues?: number;
  IgnoreCase?: boolean;
  Minimum?: number;
  Maximum?: number;
  ExclusiveMinimum?: number;
  ExclusiveMaximum?: number;
  MultipleOf?: number;
  Enum?: AmazonConnectFullApiSchemaValidationEnum;
};

export type AmazonConnectFullApiSchemaCreateDataTableAttributeResponse = {
  Name: string;
  AttributeId?: string;
  LockVersion: AmazonConnectFullApiSchemaDataTableLockVersion;
};

export type AmazonConnectFullApiSchemaCreateEmailAddressResponse = {
  EmailAddressId?: string;
  EmailAddressArn?: string;
};

export type AmazonConnectFullApiSchemaEvaluationFormItemsList = ReadonlyArray<AmazonConnectFullApiSchemaEvaluationFormItem>;

export type AmazonConnectFullApiSchemaEvaluationFormScoringStrategy = {
  Mode: AmazonConnectFullApiSchemaEvaluationFormScoringMode;
  Status: AmazonConnectFullApiSchemaEvaluationFormScoringStatus;
};

export type AmazonConnectFullApiSchemaEvaluationFormAutoEvaluationConfiguration = {
  Enabled: boolean;
};

export type AmazonConnectFullApiSchemaEvaluationReviewConfiguration = {
  ReviewNotificationRecipients: AmazonConnectFullApiSchemaEvaluationReviewNotificationRecipientList;
  EligibilityDays?: number;
};

export type AmazonConnectFullApiSchemaEvaluationFormTargetConfiguration = {
  ContactInteractionType: AmazonConnectFullApiSchemaContactInteractionType;
};

export type AmazonConnectFullApiSchemaEvaluationFormLanguageConfiguration = {
  FormLanguage?: AmazonConnectFullApiSchemaEvaluationFormLanguageCode;
};

export type AmazonConnectFullApiSchemaCreateEvaluationFormResponse = {
  EvaluationFormId: string;
  EvaluationFormArn: string;
};

export type AmazonConnectFullApiSchemaHoursOfOperationConfigList = ReadonlyArray<AmazonConnectFullApiSchemaHoursOfOperationConfig>;

export type AmazonConnectFullApiSchemaCreateHoursOfOperationResponse = {
  HoursOfOperationId?: string;
  HoursOfOperationArn?: string;
};

export type AmazonConnectFullApiSchemaHoursOfOperationOverrideConfigList = ReadonlyArray<AmazonConnectFullApiSchemaHoursOfOperationOverrideConfig>;

export type AmazonConnectFullApiSchemaRecurrenceConfig = {
  RecurrencePattern: AmazonConnectFullApiSchemaRecurrencePattern;
};

export type AmazonConnectFullApiSchemaOverrideType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCreateHoursOfOperationOverrideResponse = {
  HoursOfOperationOverrideId?: string;
};

export type AmazonConnectFullApiSchemaDirectoryType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCreateInstanceResponse = {
  Id?: string;
  Arn?: string;
};

export type AmazonConnectFullApiSchemaIntegrationType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaSourceType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCreateIntegrationAssociationResponse = {
  IntegrationAssociationId?: string;
  IntegrationAssociationArn?: string;
};

export type AmazonConnectFullApiSchemaRecipientList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaConfigurableNotificationPriority = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaNotificationContent = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaCreateNotificationResponse = {
  NotificationId: string;
  NotificationArn: string;
};

export type AmazonConnectFullApiSchemaParticipantDetailsToAdd = {
  ParticipantRole?: AmazonConnectFullApiSchemaParticipantRole;
  DisplayName?: string;
  ParticipantCapabilities?: AmazonConnectFullApiSchemaParticipantCapabilities;
};

export type AmazonConnectFullApiSchemaCreateParticipantResponse = {
  ParticipantCredentials?: AmazonConnectFullApiSchemaParticipantTokenCredentials;
  ParticipantId?: string;
};

export type AmazonConnectFullApiSchemaRehydrationType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCreatePersistentContactAssociationResponse = {
  ContinuedFromContactId?: string;
};

export type AmazonConnectFullApiSchemaPredefinedAttributeValues = {
  StringList: AmazonConnectFullApiSchemaPredefinedAttributeStringValuesList;
};

export type AmazonConnectFullApiSchemaPredefinedAttributePurposeNameList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaInputPredefinedAttributeConfiguration = {
  EnableValueValidationOnAssociation?: boolean;
};

export type AmazonConnectFullApiSchemaCreatePromptResponse = {
  PromptARN?: string;
  PromptId?: string;
};

export type AmazonConnectFullApiSchemaDeviceType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaContactConfiguration = {
  ContactId: string;
  ParticipantRole?: AmazonConnectFullApiSchemaParticipantRole;
  IncludeRawMessage?: boolean;
};

export type AmazonConnectFullApiSchemaCreatePushNotificationRegistrationResponse = {
  RegistrationId: string;
};

export type AmazonConnectFullApiSchemaOutboundCallerConfig = {
  OutboundCallerIdName?: string;
  OutboundCallerIdNumberId?: string;
  OutboundFlowId?: string;
};

export type AmazonConnectFullApiSchemaOutboundEmailConfig = {
  OutboundEmailAddressId?: string;
};

export type AmazonConnectFullApiSchemaCreateQueueResponse = {
  QueueArn?: string;
  QueueId?: string;
};

export type AmazonConnectFullApiSchemaQuickConnectConfig = {
  QuickConnectType: AmazonConnectFullApiSchemaQuickConnectType;
  UserConfig?: AmazonConnectFullApiSchemaUserQuickConnectConfig;
  QueueConfig?: AmazonConnectFullApiSchemaQueueQuickConnectConfig;
  PhoneConfig?: AmazonConnectFullApiSchemaPhoneNumberQuickConnectConfig;
  FlowConfig?: AmazonConnectFullApiSchemaFlowQuickConnectConfig;
};

export type AmazonConnectFullApiSchemaCreateQuickConnectResponse = {
  QuickConnectARN?: string;
  QuickConnectId?: string;
};

export type AmazonConnectFullApiSchemaMediaConcurrencies = ReadonlyArray<AmazonConnectFullApiSchemaMediaConcurrency>;

export type AmazonConnectFullApiSchemaAgentAvailabilityTimer = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCreateRoutingProfileResponse = {
  RoutingProfileArn?: string;
  RoutingProfileId?: string;
};

export type AmazonConnectFullApiSchemaRuleTriggerEventSource = {
  EventSourceName: AmazonConnectFullApiSchemaEventSourceName;
  IntegrationAssociationId?: string;
};

export type AmazonConnectFullApiSchemaRuleActions = ReadonlyArray<AmazonConnectFullApiSchemaRuleAction>;

export type AmazonConnectFullApiSchemaRulePublishStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCreateRuleResponse = {
  RuleArn: string;
  RuleId: string;
};

export type AmazonConnectFullApiSchemaPermissionsList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaAllowedAccessControlTags = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaTagRestrictedResourceList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaApplications = ReadonlyArray<AmazonConnectFullApiSchemaApplication>;

export type AmazonConnectFullApiSchemaHierarchyRestrictedResourceList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaAllowedFlowModules = ReadonlyArray<AmazonConnectFullApiSchemaFlowModule>;

export type AmazonConnectFullApiSchemaGranularAccessControlConfiguration = {
  DataTableAccessControlConfiguration?: AmazonConnectFullApiSchemaDataTableAccessControlConfiguration;
};

export type AmazonConnectFullApiSchemaCreateSecurityProfileResponse = {
  SecurityProfileId?: string;
  SecurityProfileArn?: string;
};

export type AmazonConnectFullApiSchemaTaskTemplateConstraints = {
  RequiredFields?: AmazonConnectFullApiSchemaRequiredTaskTemplateFields;
  ReadOnlyFields?: AmazonConnectFullApiSchemaReadOnlyTaskTemplateFields;
  InvisibleFields?: AmazonConnectFullApiSchemaInvisibleTaskTemplateFields;
};

export type AmazonConnectFullApiSchemaTaskTemplateDefaults = {
  DefaultFieldValues?: AmazonConnectFullApiSchemaTaskTemplateDefaultFieldValueList;
};

export type AmazonConnectFullApiSchemaTaskTemplateStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaTaskTemplateFields = ReadonlyArray<AmazonConnectFullApiSchemaTaskTemplateField>;

export type AmazonConnectFullApiSchemaCreateTaskTemplateResponse = {
  Id: string;
  Arn: string;
};

export type AmazonConnectFullApiSchemaTestCaseEntryPoint = {
  Type?: AmazonConnectFullApiSchemaTestCaseEntryPointType;
  VoiceCallEntryPointParameters?: AmazonConnectFullApiSchemaVoiceCallEntryPointParameters;
  ChatEntryPointParameters?: AmazonConnectFullApiSchemaChatEntryPointParameters;
};

export type AmazonConnectFullApiSchemaTestCaseStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCreateTestCaseResponse = {
  TestCaseId?: string;
  TestCaseArn?: string;
};

export type AmazonConnectFullApiSchemaCreateTrafficDistributionGroupResponse = {
  Id?: string;
  Arn?: string;
};

export type AmazonConnectFullApiSchemaUseCaseType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCreateUseCaseResponse = {
  UseCaseId?: string;
  UseCaseArn?: string;
};

export type AmazonConnectFullApiSchemaUserIdentityInfo = {
  FirstName?: string;
  LastName?: string;
  Email?: string;
  SecondaryEmail?: string;
  Mobile?: string;
};

export type AmazonConnectFullApiSchemaUserPhoneConfig = {
  PhoneType?: AmazonConnectFullApiSchemaPhoneType;
  AutoAccept?: boolean;
  AfterContactWorkTimeLimit?: number;
  DeskPhoneNumber?: string;
  PersistentConnection?: boolean;
};

export type AmazonConnectFullApiSchemaSecurityProfileIds = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaAutoAcceptConfigs = ReadonlyArray<AmazonConnectFullApiSchemaAutoAcceptConfig>;

export type AmazonConnectFullApiSchemaAfterContactWorkConfigs = ReadonlyArray<AmazonConnectFullApiSchemaAfterContactWorkConfigPerChannel>;

export type AmazonConnectFullApiSchemaPhoneNumberConfigs = ReadonlyArray<AmazonConnectFullApiSchemaPhoneNumberConfig>;

export type AmazonConnectFullApiSchemaPersistentConnectionConfigs = ReadonlyArray<AmazonConnectFullApiSchemaPersistentConnectionConfig>;

export type AmazonConnectFullApiSchemaVoiceEnhancementConfigs = ReadonlyArray<AmazonConnectFullApiSchemaVoiceEnhancementConfig>;

export type AmazonConnectFullApiSchemaCreateUserResponse = {
  UserId?: string;
  UserArn?: string;
};

export type AmazonConnectFullApiSchemaCreateUserHierarchyGroupResponse = {
  HierarchyGroupId?: string;
  HierarchyGroupArn?: string;
};

export type AmazonConnectFullApiSchemaViewStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaViewInputContent = {
  Template?: string;
  Actions?: AmazonConnectFullApiSchemaViewActions;
};

export type AmazonConnectFullApiSchemaCreateViewResponse = {
  View?: AmazonConnectFullApiSchemaView;
};

export type AmazonConnectFullApiSchemaCreateViewVersionResponse = {
  View?: AmazonConnectFullApiSchemaView;
};

export type AmazonConnectFullApiSchemaVocabularyLanguageCode = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCreateVocabularyResponse = {
  VocabularyArn: string;
  VocabularyId: string;
  State: AmazonConnectFullApiSchemaVocabularyState;
};

export type AmazonConnectFullApiSchemaWorkspaceTheme = {
  Light?: AmazonConnectFullApiSchemaWorkspaceThemeConfig;
  Dark?: AmazonConnectFullApiSchemaWorkspaceThemeConfig;
};

export type AmazonConnectFullApiSchemaCreateWorkspaceResponse = {
  WorkspaceId: string;
  WorkspaceArn: string;
};

export type AmazonConnectFullApiSchemaCreateWorkspacePageResponse = {};

export type AmazonConnectFullApiSchemaDeactivateEvaluationFormResponse = {
  EvaluationFormId: string;
  EvaluationFormArn: string;
  EvaluationFormVersion: number;
};

export type AmazonConnectFullApiSchemaDeleteAttachedFileResponse = {};

export type AmazonConnectFullApiSchemaDeleteContactFlowResponse = {};

export type AmazonConnectFullApiSchemaDeleteContactFlowModuleResponse = {};

export type AmazonConnectFullApiSchemaDeleteContactFlowModuleAliasResponse = {};

export type AmazonConnectFullApiSchemaDeleteContactFlowModuleVersionResponse = {};

export type AmazonConnectFullApiSchemaDeleteContactFlowVersionResponse = {};

export type AmazonConnectFullApiSchemaDeleteDataTableResponse = {};

export type AmazonConnectFullApiSchemaDeleteDataTableAttributeResponse = {
  LockVersion: AmazonConnectFullApiSchemaDataTableLockVersion;
};

export type AmazonConnectFullApiSchemaDeleteEmailAddressResponse = {};

export type AmazonConnectFullApiSchemaDeleteNotificationResponse = {};

export type AmazonConnectFullApiSchemaDeletePushNotificationRegistrationResponse = {};

export type AmazonConnectFullApiSchemaDeleteTaskTemplateResponse = {};

export type AmazonConnectFullApiSchemaDeleteTestCaseResponse = {};

export type AmazonConnectFullApiSchemaDeleteTrafficDistributionGroupResponse = {};

export type AmazonConnectFullApiSchemaDeleteViewResponse = {};

export type AmazonConnectFullApiSchemaDeleteViewVersionResponse = {};

export type AmazonConnectFullApiSchemaDeleteVocabularyResponse = {
  VocabularyArn: string;
  VocabularyId: string;
  State: AmazonConnectFullApiSchemaVocabularyState;
};

export type AmazonConnectFullApiSchemaDeleteWorkspaceResponse = {};

export type AmazonConnectFullApiSchemaMediaType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaDeleteWorkspaceMediaResponse = {};

export type AmazonConnectFullApiSchemaDeleteWorkspacePageResponse = {};

export type AmazonConnectFullApiSchemaDescribeAgentStatusResponse = {
  AgentStatus?: AmazonConnectFullApiSchemaAgentStatus;
};

export type AmazonConnectFullApiSchemaDescribeAttachedFilesConfigurationResponse = {
  AttachedFilesConfiguration: AmazonConnectFullApiSchemaAttachedFilesConfiguration;
};

export type AmazonConnectFullApiSchemaDescribeAuthenticationProfileResponse = {
  AuthenticationProfile?: AmazonConnectFullApiSchemaAuthenticationProfile;
};

export type AmazonConnectFullApiSchemaDescribeContactResponse = {
  Contact?: AmazonConnectFullApiSchemaContact;
};

export type AmazonConnectFullApiSchemaDescribeContactEvaluationResponse = {
  Evaluation: AmazonConnectFullApiSchemaEvaluation;
  EvaluationForm: AmazonConnectFullApiSchemaEvaluationFormContent;
};

export type AmazonConnectFullApiSchemaDescribeContactFlowResponse = {
  ContactFlow?: AmazonConnectFullApiSchemaContactFlow;
};

export type AmazonConnectFullApiSchemaDescribeContactFlowModuleResponse = {
  ContactFlowModule?: AmazonConnectFullApiSchemaContactFlowModule;
};

export type AmazonConnectFullApiSchemaDescribeContactFlowModuleAliasResponse = {
  ContactFlowModuleAlias?: AmazonConnectFullApiSchemaContactFlowModuleAliasInfo;
};

export type AmazonConnectFullApiSchemaDescribeDataTableResponse = {
  DataTable: AmazonConnectFullApiSchemaDataTable;
};

export type AmazonConnectFullApiSchemaDescribeDataTableAttributeResponse = {
  Attribute: AmazonConnectFullApiSchemaDataTableAttribute;
};

export type AmazonConnectFullApiSchemaDescribeEmailAddressResponse = {
  EmailAddressId?: string;
  EmailAddressArn?: string;
  EmailAddress?: string;
  DisplayName?: string;
  Description?: string;
  CreateTimestamp?: string;
  ModifiedTimestamp?: string;
  AliasConfigurations?: AmazonConnectFullApiSchemaAliasConfigurationList;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};

export type AmazonConnectFullApiSchemaDescribeEvaluationFormResponse = {
  EvaluationForm: AmazonConnectFullApiSchemaEvaluationForm;
};

export type AmazonConnectFullApiSchemaDescribeHoursOfOperationResponse = {
  HoursOfOperation?: AmazonConnectFullApiSchemaHoursOfOperation;
};

export type AmazonConnectFullApiSchemaDescribeHoursOfOperationOverrideResponse = {
  HoursOfOperationOverride?: AmazonConnectFullApiSchemaHoursOfOperationOverride;
};

export type AmazonConnectFullApiSchemaDescribeInstanceResponse = {
  Instance?: AmazonConnectFullApiSchemaInstance;
  ReplicationConfiguration?: AmazonConnectFullApiSchemaReplicationConfiguration;
};

export type AmazonConnectFullApiSchemaDescribeInstanceAttributeResponse = {
  Attribute?: AmazonConnectFullApiSchemaAttribute;
};

export type AmazonConnectFullApiSchemaDescribeInstanceStorageConfigResponse = {
  StorageConfig?: AmazonConnectFullApiSchemaInstanceStorageConfig;
};

export type AmazonConnectFullApiSchemaDescribeNotificationResponse = {
  Notification: AmazonConnectFullApiSchemaNotification;
};

export type AmazonConnectFullApiSchemaDescribePhoneNumberResponse = {
  ClaimedPhoneNumberSummary?: AmazonConnectFullApiSchemaClaimedPhoneNumberSummary;
};

export type AmazonConnectFullApiSchemaDescribePredefinedAttributeResponse = {
  PredefinedAttribute?: AmazonConnectFullApiSchemaPredefinedAttribute;
};

export type AmazonConnectFullApiSchemaDescribePromptResponse = {
  Prompt?: AmazonConnectFullApiSchemaPrompt;
};

export type AmazonConnectFullApiSchemaDescribeQueueResponse = {
  Queue?: AmazonConnectFullApiSchemaQueue;
};

export type AmazonConnectFullApiSchemaDescribeQuickConnectResponse = {
  QuickConnect?: AmazonConnectFullApiSchemaQuickConnect;
};

export type AmazonConnectFullApiSchemaDescribeRoutingProfileResponse = {
  RoutingProfile?: AmazonConnectFullApiSchemaRoutingProfile;
};

export type AmazonConnectFullApiSchemaDescribeRuleResponse = {
  Rule: AmazonConnectFullApiSchemaRule;
};

export type AmazonConnectFullApiSchemaDescribeSecurityProfileResponse = {
  SecurityProfile?: AmazonConnectFullApiSchemaSecurityProfile;
};

export type AmazonConnectFullApiSchemaDescribeTestCaseResponse = {
  TestCase?: AmazonConnectFullApiSchemaTestCase;
};

export type AmazonConnectFullApiSchemaDescribeTrafficDistributionGroupResponse = {
  TrafficDistributionGroup?: AmazonConnectFullApiSchemaTrafficDistributionGroup;
};

export type AmazonConnectFullApiSchemaDescribeUserResponse = {
  User?: AmazonConnectFullApiSchemaUser;
};

export type AmazonConnectFullApiSchemaDescribeUserHierarchyGroupResponse = {
  HierarchyGroup?: AmazonConnectFullApiSchemaHierarchyGroup;
};

export type AmazonConnectFullApiSchemaDescribeUserHierarchyStructureResponse = {
  HierarchyStructure?: AmazonConnectFullApiSchemaHierarchyStructure;
};

export type AmazonConnectFullApiSchemaDescribeViewResponse = {
  View?: AmazonConnectFullApiSchemaView;
};

export type AmazonConnectFullApiSchemaDescribeVocabularyResponse = {
  Vocabulary: AmazonConnectFullApiSchemaVocabulary;
};

export type AmazonConnectFullApiSchemaDescribeWorkspaceResponse = {
  Workspace: AmazonConnectFullApiSchemaWorkspace;
};

export type AmazonConnectFullApiSchemaDisassociateEmailAddressAliasResponse = {};

export type AmazonConnectFullApiSchemaDisassociateFlowResponse = {};

export type AmazonConnectFullApiSchemaParentHoursOfOperationIdList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaEmailAddressIdList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaRoutingProfileQueueReferenceList = ReadonlyArray<AmazonConnectFullApiSchemaRoutingProfileQueueReference>;

export type AmazonConnectFullApiSchemaDisassociateTrafficDistributionGroupUserResponse = {};

export type AmazonConnectFullApiSchemaUserProficiencyDisassociateList = ReadonlyArray<AmazonConnectFullApiSchemaUserProficiencyDisassociate>;

export type AmazonConnectFullApiSchemaDisassociateWorkspaceResponse = {
  SuccessfulList?: AmazonConnectFullApiSchemaSuccessfulBatchAssociationSummaryList;
  FailedList?: AmazonConnectFullApiSchemaFailedBatchAssociationSummaryList;
};

export type AmazonConnectFullApiSchemaDismissUserContactResponse = {};

export type AmazonConnectFullApiSchemaDataTableValueEvaluationSetList = ReadonlyArray<AmazonConnectFullApiSchemaDataTableValueEvaluationSet>;

export type AmazonConnectFullApiSchemaEvaluateDataTableValuesResponse = {
  Values: AmazonConnectFullApiSchemaDataTableEvaluatedValueList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaGetAttachedFileResponse = {
  FileArn?: string;
  FileId?: string;
  CreationTime?: string;
  FileStatus?: AmazonConnectFullApiSchemaFileStatusType;
  FileName?: string;
  FileSizeInBytes: number;
  AssociatedResourceArn?: string;
  FileUseCaseType?: AmazonConnectFullApiSchemaFileUseCaseType;
  CreatedBy?: AmazonConnectFullApiSchemaCreatedByInfo;
  DownloadUrlMetadata?: AmazonConnectFullApiSchemaDownloadUrlMetadata;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};

export type AmazonConnectFullApiSchemaGetContactAttributesResponse = {
  Attributes?: AmazonConnectFullApiSchemaAttributes;
};

export type AmazonConnectFullApiSchemaContactMetrics = ReadonlyArray<AmazonConnectFullApiSchemaContactMetricInfo>;

export type AmazonConnectFullApiSchemaGetContactMetricsResponse = {
  MetricResults?: AmazonConnectFullApiSchemaContactMetricResults;
  Id?: string;
  Arn?: string;
};

export type AmazonConnectFullApiSchemaFilters = {
  Queues?: AmazonConnectFullApiSchemaQueues;
  Channels?: AmazonConnectFullApiSchemaChannels3;
  RoutingProfiles?: AmazonConnectFullApiSchemaRoutingProfiles;
  RoutingStepExpressions?: AmazonConnectFullApiSchemaRoutingExpressions;
  AgentStatuses?: AmazonConnectFullApiSchemaAgentStatuses;
  Subtypes?: AmazonConnectFullApiSchemaSubtypes;
  ValidationTestTypes?: AmazonConnectFullApiSchemaValidationTestTypes;
};

export type AmazonConnectFullApiSchemaGroupings = ReadonlyArray<AmazonConnectFullApiSchemaGrouping>;

export type AmazonConnectFullApiSchemaCurrentMetrics = ReadonlyArray<AmazonConnectFullApiSchemaCurrentMetric>;

export type AmazonConnectFullApiSchemaCurrentMetricSortCriteriaMaxOne = ReadonlyArray<AmazonConnectFullApiSchemaCurrentMetricSortCriteria>;

export type AmazonConnectFullApiSchemaGetCurrentMetricDataResponse = {
  NextToken?: string;
  MetricResults?: AmazonConnectFullApiSchemaCurrentMetricResults;
  DataSnapshotTime?: string;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaUserDataFilters = {
  Queues?: AmazonConnectFullApiSchemaQueues;
  ContactFilter?: AmazonConnectFullApiSchemaContactFilter;
  RoutingProfiles?: AmazonConnectFullApiSchemaRoutingProfiles;
  Agents?: AmazonConnectFullApiSchemaAgentsMinOneMaxHundred;
  UserHierarchyGroups?: AmazonConnectFullApiSchemaUserDataHierarchyGroups;
};

export type AmazonConnectFullApiSchemaGetCurrentUserDataResponse = {
  NextToken?: string;
  UserDataList?: AmazonConnectFullApiSchemaUserDataList;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaGetEffectiveHoursOfOperationsResponse = {
  EffectiveHoursOfOperationList?: AmazonConnectFullApiSchemaEffectiveHoursOfOperationList;
  EffectiveOverrideHoursList?: AmazonConnectFullApiSchemaEffectiveOverrideHoursList;
  TimeZone?: string;
};

export type AmazonConnectFullApiSchemaGetFederationTokenResponse = {
  Credentials?: AmazonConnectFullApiSchemaCredentials;
  SignInUrl?: string;
  UserArn?: string;
  UserId?: string;
};

export type AmazonConnectFullApiSchemaGetFlowAssociationResponse = {
  ResourceId?: string;
  FlowId?: string;
  ResourceType?: AmazonConnectFullApiSchemaFlowAssociationResourceType;
};

export type AmazonConnectFullApiSchemaHistoricalMetrics = ReadonlyArray<AmazonConnectFullApiSchemaHistoricalMetric>;

export type AmazonConnectFullApiSchemaGetMetricDataResponse = {
  NextToken?: string;
  MetricResults?: AmazonConnectFullApiSchemaHistoricalMetricResults;
};

export type AmazonConnectFullApiSchemaIntervalDetails = {
  TimeZone?: string;
  IntervalPeriod?: AmazonConnectFullApiSchemaIntervalPeriod;
};

export type AmazonConnectFullApiSchemaFiltersV2List = ReadonlyArray<AmazonConnectFullApiSchemaFilterV2>;

export type AmazonConnectFullApiSchemaGroupingsV2 = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaMetricsV2 = ReadonlyArray<AmazonConnectFullApiSchemaMetricV2>;

export type AmazonConnectFullApiSchemaGetMetricDataV2Response = {
  NextToken?: string;
  MetricResults?: AmazonConnectFullApiSchemaMetricResultsV2;
};

export type AmazonConnectFullApiSchemaGetPromptFileResponse = {
  PromptPresignedUrl?: string;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaGetTaskTemplateResponse = {
  InstanceId?: string;
  Id: string;
  Arn: string;
  Name: string;
  Description?: string;
  ContactFlowId?: string;
  SelfAssignFlowId?: string;
  Constraints?: AmazonConnectFullApiSchemaTaskTemplateConstraints;
  Defaults?: AmazonConnectFullApiSchemaTaskTemplateDefaults;
  Fields?: AmazonConnectFullApiSchemaTaskTemplateFields;
  Status?: AmazonConnectFullApiSchemaTaskTemplateStatus;
  LastModifiedTime?: string;
  CreatedTime?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};

export type AmazonConnectFullApiSchemaGetTestCaseExecutionSummaryResponse = {
  StartTime?: string;
  EndTime?: string;
  Status?: AmazonConnectFullApiSchemaTestCaseExecutionStatus;
  ObservationSummary?: AmazonConnectFullApiSchemaObservationSummary;
};

export type AmazonConnectFullApiSchemaGetTrafficDistributionResponse = {
  TelephonyConfig?: AmazonConnectFullApiSchemaTelephonyConfig;
  Id?: string;
  Arn?: string;
  SignInConfig?: AmazonConnectFullApiSchemaSignInConfig;
  AgentConfig?: AmazonConnectFullApiSchemaAgentConfig;
};

export type AmazonConnectFullApiSchemaImportPhoneNumberResponse = {
  PhoneNumberId?: string;
  PhoneNumberArn?: string;
};

export type AmazonConnectFullApiSchemaImportWorkspaceMediaResponse = {};

export type AmazonConnectFullApiSchemaAgentStatusTypes = ReadonlyArray<AmazonConnectFullApiSchemaAgentStatusType>;

export type AmazonConnectFullApiSchemaListAgentStatusResponse = {
  NextToken?: string;
  AgentStatusSummaryList?: AmazonConnectFullApiSchemaAgentStatusSummaryList;
};

export type AmazonConnectFullApiSchemaListAnalyticsDataAssociationsResponse = {
  Results?: AmazonConnectFullApiSchemaAnalyticsDataAssociationResults;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListAnalyticsDataLakeDataSetsResponse = {
  Results?: AmazonConnectFullApiSchemaAnalyticsDataSetsResults;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListApprovedOriginsResponse = {
  Origins?: AmazonConnectFullApiSchemaOriginsList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListAssociatedContactsResponse = {
  ContactSummaryList?: AmazonConnectFullApiSchemaAssociatedContactSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListAttachedFilesConfigurationsResponse = {
  AttachedFilesConfigurations?: AmazonConnectFullApiSchemaAttachedFilesConfigurationSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListAuthenticationProfilesResponse = {
  AuthenticationProfileSummaryList?: AmazonConnectFullApiSchemaAuthenticationProfileSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaLexVersion = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaListBotsResponse = {
  LexBots?: AmazonConnectFullApiSchemaLexBotConfigList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListChildHoursOfOperationsResponse = {
  NextToken?: string;
  ChildHoursOfOperationsSummaryList?: AmazonConnectFullApiSchemaChildHoursOfOperationsList;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaListContactEvaluationsResponse = {
  EvaluationSummaryList: AmazonConnectFullApiSchemaEvaluationSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListContactFlowModuleAliasesResponse = {
  ContactFlowModuleAliasSummaryList?: AmazonConnectFullApiSchemaContactFlowModuleAliasSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListContactFlowModuleVersionsResponse = {
  ContactFlowModuleVersionSummaryList?: AmazonConnectFullApiSchemaContactFlowModuleVersionSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaContactFlowModuleState = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaListContactFlowModulesResponse = {
  ContactFlowModulesSummaryList?: AmazonConnectFullApiSchemaContactFlowModulesSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListContactFlowVersionsResponse = {
  ContactFlowVersionSummaryList?: AmazonConnectFullApiSchemaContactFlowVersionSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaContactFlowTypes = ReadonlyArray<AmazonConnectFullApiSchemaContactFlowType>;

export type AmazonConnectFullApiSchemaListContactFlowsResponse = {
  ContactFlowSummaryList?: AmazonConnectFullApiSchemaContactFlowSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaReferenceTypes = ReadonlyArray<AmazonConnectFullApiSchemaReferenceType>;

export type AmazonConnectFullApiSchemaListContactReferencesResponse = {
  ReferenceSummaryList?: AmazonConnectFullApiSchemaReferenceSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaAttributeIds = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaListDataTableAttributesResponse = {
  NextToken?: string;
  Attributes: AmazonConnectFullApiSchemaAttributeList;
};

export type AmazonConnectFullApiSchemaRecordIds = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaPrimaryAttributeValueFilters = ReadonlyArray<AmazonConnectFullApiSchemaPrimaryAttributeValueFilter>;

export type AmazonConnectFullApiSchemaListDataTablePrimaryValuesResponse = {
  NextToken?: string;
  PrimaryValuesList: AmazonConnectFullApiSchemaPrimaryValuesList;
};

export type AmazonConnectFullApiSchemaListDataTableValuesResponse = {
  NextToken?: string;
  Values: AmazonConnectFullApiSchemaDataTableValueSummaryList;
};

export type AmazonConnectFullApiSchemaListDataTablesResponse = {
  NextToken?: string;
  DataTableSummaryList: AmazonConnectFullApiSchemaDataTableSummaryList;
};

export type AmazonConnectFullApiSchemaListDefaultVocabulariesResponse = {
  DefaultVocabularyList: AmazonConnectFullApiSchemaDefaultVocabularyList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListEntitySecurityProfilesResponse = {
  SecurityProfiles?: AmazonConnectFullApiSchemaSecurityProfiles100;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListEvaluationFormVersionsResponse = {
  EvaluationFormVersionSummaryList: AmazonConnectFullApiSchemaEvaluationFormVersionSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListEvaluationFormsResponse = {
  EvaluationFormSummaryList: AmazonConnectFullApiSchemaEvaluationFormSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListFlowAssociationsResponse = {
  FlowAssociationSummaryList?: AmazonConnectFullApiSchemaFlowAssociationSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListHoursOfOperationOverridesResponse = {
  NextToken?: string;
  HoursOfOperationOverrideList?: AmazonConnectFullApiSchemaHoursOfOperationOverrideList;
  LastModifiedRegion?: string;
  LastModifiedTime?: string;
};

export type AmazonConnectFullApiSchemaListHoursOfOperationsResponse = {
  HoursOfOperationSummaryList?: AmazonConnectFullApiSchemaHoursOfOperationSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListInstanceAttributesResponse = {
  Attributes?: AmazonConnectFullApiSchemaAttributesList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListInstanceStorageConfigsResponse = {
  StorageConfigs?: AmazonConnectFullApiSchemaInstanceStorageConfigs;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListInstancesResponse = {
  InstanceSummaryList?: AmazonConnectFullApiSchemaInstanceSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListIntegrationAssociationsResponse = {
  IntegrationAssociationSummaryList?: AmazonConnectFullApiSchemaIntegrationAssociationSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListLambdaFunctionsResponse = {
  LambdaFunctions?: AmazonConnectFullApiSchemaFunctionArnsList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListLexBotsResponse = {
  LexBots?: AmazonConnectFullApiSchemaLexBotsList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListNotificationsResponse = {
  NextToken?: string;
  NotificationSummaryList: AmazonConnectFullApiSchemaNotificationSummaryList;
};

export type AmazonConnectFullApiSchemaPhoneNumberTypes = ReadonlyArray<AmazonConnectFullApiSchemaPhoneNumberType>;

export type AmazonConnectFullApiSchemaPhoneNumberCountryCodes = ReadonlyArray<AmazonConnectFullApiSchemaPhoneNumberCountryCode>;

export type AmazonConnectFullApiSchemaListPhoneNumbersResponse = {
  PhoneNumberSummaryList?: AmazonConnectFullApiSchemaPhoneNumberSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListPhoneNumbersV2Response = {
  NextToken?: string;
  ListPhoneNumbersSummaryList?: AmazonConnectFullApiSchemaListPhoneNumbersSummaryList;
};

export type AmazonConnectFullApiSchemaListPredefinedAttributesResponse = {
  NextToken?: string;
  PredefinedAttributeSummaryList?: AmazonConnectFullApiSchemaPredefinedAttributeSummaryList;
};

export type AmazonConnectFullApiSchemaListPromptsResponse = {
  PromptSummaryList?: AmazonConnectFullApiSchemaPromptSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListQueueEmailAddressesResponse = {
  NextToken?: string;
  EmailAddressMetadataList?: AmazonConnectFullApiSchemaEmailAddressMetadataList;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaListQueueQuickConnectsResponse = {
  NextToken?: string;
  QuickConnectSummaryList?: AmazonConnectFullApiSchemaQuickConnectSummaryList;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaQueueTypes = ReadonlyArray<AmazonConnectFullApiSchemaQueueType>;

export type AmazonConnectFullApiSchemaListQueuesResponse = {
  QueueSummaryList?: AmazonConnectFullApiSchemaQueueSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaQuickConnectTypes = ReadonlyArray<AmazonConnectFullApiSchemaQuickConnectType>;

export type AmazonConnectFullApiSchemaListQuickConnectsResponse = {
  QuickConnectSummaryList?: AmazonConnectFullApiSchemaQuickConnectSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisOutputType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisSegmentTypes = ReadonlyArray<AmazonConnectFullApiSchemaRealTimeContactAnalysisSegmentType>;

export type AmazonConnectFullApiSchemaListRealtimeContactAnalysisSegmentsV2Response = {
  Channel: AmazonConnectFullApiSchemaRealTimeContactAnalysisSupportedChannel;
  Status: AmazonConnectFullApiSchemaRealTimeContactAnalysisStatus;
  Segments: AmazonConnectFullApiSchemaRealtimeContactAnalysisSegments;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListRoutingProfileManualAssignmentQueuesResponse = {
  NextToken?: string;
  RoutingProfileManualAssignmentQueueConfigSummaryList?: AmazonConnectFullApiSchemaRoutingProfileManualAssignmentQueueConfigSummaryList;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaListRoutingProfileQueuesResponse = {
  NextToken?: string;
  RoutingProfileQueueConfigSummaryList?: AmazonConnectFullApiSchemaRoutingProfileQueueConfigSummaryList;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaListRoutingProfilesResponse = {
  RoutingProfileSummaryList?: AmazonConnectFullApiSchemaRoutingProfileSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaEventSourceName = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaListRulesResponse = {
  RuleSummaryList: AmazonConnectFullApiSchemaRuleSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListSecurityKeysResponse = {
  SecurityKeys?: AmazonConnectFullApiSchemaSecurityKeysList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListSecurityProfileApplicationsResponse = {
  Applications?: AmazonConnectFullApiSchemaApplications;
  NextToken?: string;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaListSecurityProfileFlowModulesResponse = {
  AllowedFlowModules?: AmazonConnectFullApiSchemaAllowedFlowModules;
  NextToken?: string;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaListSecurityProfilePermissionsResponse = {
  Permissions?: AmazonConnectFullApiSchemaPermissionsList;
  NextToken?: string;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaListSecurityProfilesResponse = {
  SecurityProfileSummaryList?: AmazonConnectFullApiSchemaSecurityProfileSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListTagsForResourceResponse2 = {
  tags?: AmazonConnectFullApiSchemaTagMap2;
};

export type AmazonConnectFullApiSchemaListTaskTemplatesResponse = {
  TaskTemplates?: AmazonConnectFullApiSchemaTaskTemplateList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaTestCaseExecutionStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaListTestCaseExecutionRecordsResponse = {
  ExecutionRecords?: AmazonConnectFullApiSchemaExecutionRecordList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListTestCaseExecutionsResponse = {
  TestCaseExecutions?: AmazonConnectFullApiSchemaTestCaseExecutionList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListTestCasesResponse = {
  TestCaseSummaryList?: AmazonConnectFullApiSchemaTestCaseSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListTrafficDistributionGroupUsersResponse = {
  NextToken?: string;
  TrafficDistributionGroupUserSummaryList?: AmazonConnectFullApiSchemaTrafficDistributionGroupUserSummaryList;
};

export type AmazonConnectFullApiSchemaListTrafficDistributionGroupsResponse = {
  NextToken?: string;
  TrafficDistributionGroupSummaryList?: AmazonConnectFullApiSchemaTrafficDistributionGroupSummaryList;
};

export type AmazonConnectFullApiSchemaListUseCasesResponse = {
  UseCaseSummaryList?: AmazonConnectFullApiSchemaUseCaseSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListUserHierarchyGroupsResponse = {
  UserHierarchyGroupSummaryList?: AmazonConnectFullApiSchemaHierarchyGroupSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListUserNotificationsResponse = {
  UserNotifications?: AmazonConnectFullApiSchemaUserNotificationSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListUserProficienciesResponse = {
  NextToken?: string;
  UserProficiencyList?: AmazonConnectFullApiSchemaUserProficiencyList;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaListUsersResponse = {
  UserSummaryList?: AmazonConnectFullApiSchemaUserSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListViewVersionsResponse = {
  ViewVersionSummaryList?: AmazonConnectFullApiSchemaViewVersionSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaViewType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaListViewsResponse = {
  ViewsSummaryList?: AmazonConnectFullApiSchemaViewsSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListWorkspaceMediaResponse = {
  Media?: AmazonConnectFullApiSchemaMediaList;
};

export type AmazonConnectFullApiSchemaListWorkspacePagesResponse = {
  NextToken?: string;
  WorkspacePageList: AmazonConnectFullApiSchemaWorkspacePageList;
};

export type AmazonConnectFullApiSchemaListWorkspacesResponse = {
  NextToken?: string;
  WorkspaceSummaryList: AmazonConnectFullApiSchemaWorkspaceSummaryList;
};

export type AmazonConnectFullApiSchemaAllowedMonitorCapabilities = ReadonlyArray<AmazonConnectFullApiSchemaMonitorCapability>;

export type AmazonConnectFullApiSchemaMonitorContactResponse = {
  ContactId?: string;
  ContactArn?: string;
};

export type AmazonConnectFullApiSchemaPauseContactResponse = {};

export type AmazonConnectFullApiSchemaPutUserStatusResponse = {};

export type AmazonConnectFullApiSchemaReplicateInstanceResponse = {
  Id?: string;
  Arn?: string;
};

export type AmazonConnectFullApiSchemaResumeContactResponse = {};

export type AmazonConnectFullApiSchemaContactRecordingType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaResumeContactRecordingResponse = {};

export type AmazonConnectFullApiSchemaAgentStatusSearchFilter = {
  AttributeFilter?: AmazonConnectFullApiSchemaControlPlaneAttributeFilter;
};

export type AmazonConnectFullApiSchemaAgentStatusSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaAgentStatusSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaAgentStatusSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
};

export type AmazonConnectFullApiSchemaSearchAgentStatusesResponse = {
  AgentStatuses?: AmazonConnectFullApiSchemaAgentStatusList;
  NextToken?: string;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaPhoneNumberCountryCode = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaPhoneNumberType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaSearchAvailablePhoneNumbersResponse = {
  NextToken?: string;
  AvailableNumbersList?: AmazonConnectFullApiSchemaAvailableNumbersList;
};

export type AmazonConnectFullApiSchemaEvaluationSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaEvaluationSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaEvaluationSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
  NumberCondition?: AmazonConnectFullApiSchemaNumberCondition;
  BooleanCondition?: AmazonConnectFullApiSchemaBooleanCondition;
  DateTimeCondition?: AmazonConnectFullApiSchemaDateTimeCondition;
  DecimalCondition?: AmazonConnectFullApiSchemaDecimalCondition;
};

export type AmazonConnectFullApiSchemaEvaluationSearchFilter = {
  AttributeFilter?: AmazonConnectFullApiSchemaControlPlaneAttributeFilter;
};

export type AmazonConnectFullApiSchemaSearchContactEvaluationsResponse = {
  EvaluationSearchSummaryList?: AmazonConnectFullApiSchemaEvaluationSearchSummaryList;
  NextToken?: string;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaContactFlowModuleSearchFilter = {
  TagFilter?: AmazonConnectFullApiSchemaControlPlaneTagFilter;
};

export type AmazonConnectFullApiSchemaContactFlowModuleSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaContactFlowModuleSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaContactFlowModuleSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
  StateCondition?: AmazonConnectFullApiSchemaContactFlowModuleState;
  StatusCondition?: AmazonConnectFullApiSchemaContactFlowModuleStatus;
};

export type AmazonConnectFullApiSchemaSearchContactFlowModulesResponse = {
  ContactFlowModules?: AmazonConnectFullApiSchemaContactFlowModuleSearchSummaryList;
  NextToken?: string;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaContactFlowSearchFilter = {
  TagFilter?: AmazonConnectFullApiSchemaControlPlaneTagFilter;
  FlowAttributeFilter?: AmazonConnectFullApiSchemaContactFlowAttributeFilter;
};

export type AmazonConnectFullApiSchemaContactFlowSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaContactFlowSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaContactFlowSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
  TypeCondition?: AmazonConnectFullApiSchemaContactFlowType;
  StateCondition?: AmazonConnectFullApiSchemaContactFlowState;
  StatusCondition?: AmazonConnectFullApiSchemaContactFlowStatus;
};

export type AmazonConnectFullApiSchemaSearchContactFlowsResponse = {
  ContactFlows?: AmazonConnectFullApiSchemaContactFlowSearchSummaryList;
  NextToken?: string;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaSearchContactsTimeRange = {
  Type: AmazonConnectFullApiSchemaSearchContactsTimeRangeType;
  StartTime: string;
  EndTime: string;
};

export type AmazonConnectFullApiSchemaSearchCriteria = {
  Name?: AmazonConnectFullApiSchemaNameCriteria;
  AgentIds?: AmazonConnectFullApiSchemaAgentResourceIdList;
  AgentHierarchyGroups?: AmazonConnectFullApiSchemaAgentHierarchyGroups;
  Channels?: AmazonConnectFullApiSchemaChannelList;
  ContactAnalysis?: AmazonConnectFullApiSchemaContactAnalysis;
  InitiationMethods?: AmazonConnectFullApiSchemaInitiationMethodList;
  QueueIds?: AmazonConnectFullApiSchemaQueueIdList;
  RoutingCriteria?: AmazonConnectFullApiSchemaSearchableRoutingCriteria;
  AdditionalTimeRange?: AmazonConnectFullApiSchemaSearchContactsAdditionalTimeRange;
  SearchableContactAttributes?: AmazonConnectFullApiSchemaSearchableContactAttributes;
  SearchableSegmentAttributes?: AmazonConnectFullApiSchemaSearchableSegmentAttributes;
  ActiveRegions?: AmazonConnectFullApiSchemaActiveRegionList;
  ContactTags?: AmazonConnectFullApiSchemaControlPlaneTagFilter;
  AiAgents?: AmazonConnectFullApiSchemaAiAgentsCriteria;
};

export type AmazonConnectFullApiSchemaSort = {
  FieldName: AmazonConnectFullApiSchemaSortableFieldName;
  Order: AmazonConnectFullApiSchemaSortOrder;
};

export type AmazonConnectFullApiSchemaSearchContactsResponse = {
  Contacts: AmazonConnectFullApiSchemaContacts;
  NextToken?: string;
  TotalCount?: number;
};

export type AmazonConnectFullApiSchemaDataTableSearchFilter = {
  AttributeFilter?: AmazonConnectFullApiSchemaControlPlaneAttributeFilter;
};

export type AmazonConnectFullApiSchemaDataTableSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaDataTableSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaDataTableSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
};

export type AmazonConnectFullApiSchemaSearchDataTablesResponse = {
  DataTables?: AmazonConnectFullApiSchemaDataTableList;
  NextToken?: string;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaEmailAddressSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaEmailAddressSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaEmailAddressSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
};

export type AmazonConnectFullApiSchemaEmailAddressSearchFilter = {
  TagFilter?: AmazonConnectFullApiSchemaControlPlaneTagFilter;
};

export type AmazonConnectFullApiSchemaSearchEmailAddressesResponse = {
  NextToken?: string;
  EmailAddresses?: AmazonConnectFullApiSchemaEmailAddressList;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaEvaluationFormSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaEvaluationFormSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaEvaluationFormSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
  NumberCondition?: AmazonConnectFullApiSchemaNumberCondition;
  BooleanCondition?: AmazonConnectFullApiSchemaBooleanCondition;
  DateTimeCondition?: AmazonConnectFullApiSchemaDateTimeCondition;
};

export type AmazonConnectFullApiSchemaEvaluationFormSearchFilter = {
  AttributeFilter?: AmazonConnectFullApiSchemaControlPlaneAttributeFilter;
};

export type AmazonConnectFullApiSchemaSearchEvaluationFormsResponse = {
  EvaluationFormSearchSummaryList?: AmazonConnectFullApiSchemaEvaluationFormSearchSummaryList;
  NextToken?: string;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaHoursOfOperationSearchFilter = {
  TagFilter?: AmazonConnectFullApiSchemaControlPlaneTagFilter;
};

export type AmazonConnectFullApiSchemaHoursOfOperationOverrideSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaHoursOfOperationOverrideSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaHoursOfOperationOverrideSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
  DateCondition?: AmazonConnectFullApiSchemaDateCondition;
};

export type AmazonConnectFullApiSchemaSearchHoursOfOperationOverridesResponse = {
  HoursOfOperationOverrides?: AmazonConnectFullApiSchemaHoursOfOperationOverrideList;
  NextToken?: string;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaHoursOfOperationSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaHoursOfOperationSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaHoursOfOperationSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
};

export type AmazonConnectFullApiSchemaSearchHoursOfOperationsResponse = {
  HoursOfOperations?: AmazonConnectFullApiSchemaHoursOfOperationList;
  NextToken?: string;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaNotificationSearchFilter = {
  AttributeFilter?: AmazonConnectFullApiSchemaControlPlaneAttributeFilter;
};

export type AmazonConnectFullApiSchemaNotificationSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaNotificationSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaNotificationSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
};

export type AmazonConnectFullApiSchemaSearchNotificationsResponse = {
  Notifications?: AmazonConnectFullApiSchemaNotificationSearchSummaryList;
  NextToken?: string;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaPredefinedAttributeSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaPredefinedAttributeSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaPredefinedAttributeSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
};

export type AmazonConnectFullApiSchemaSearchPredefinedAttributesResponse = {
  PredefinedAttributes?: AmazonConnectFullApiSchemaPredefinedAttributeSearchSummaryList;
  NextToken?: string;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaPromptSearchFilter = {
  TagFilter?: AmazonConnectFullApiSchemaControlPlaneTagFilter;
};

export type AmazonConnectFullApiSchemaPromptSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaPromptSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaPromptSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
};

export type AmazonConnectFullApiSchemaSearchPromptsResponse = {
  Prompts?: AmazonConnectFullApiSchemaPromptList;
  NextToken?: string;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaQueueSearchFilter = {
  TagFilter?: AmazonConnectFullApiSchemaControlPlaneTagFilter;
};

export type AmazonConnectFullApiSchemaQueueSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaQueueSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaQueueSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
  QueueTypeCondition?: AmazonConnectFullApiSchemaSearchableQueueType;
};

export type AmazonConnectFullApiSchemaSearchQueuesResponse = {
  Queues?: AmazonConnectFullApiSchemaQueueSearchSummaryList;
  NextToken?: string;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaQuickConnectSearchFilter = {
  TagFilter?: AmazonConnectFullApiSchemaControlPlaneTagFilter;
};

export type AmazonConnectFullApiSchemaQuickConnectSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaQuickConnectSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaQuickConnectSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
};

export type AmazonConnectFullApiSchemaSearchQuickConnectsResponse = {
  QuickConnects?: AmazonConnectFullApiSchemaQuickConnectSearchSummaryList;
  NextToken?: string;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaResourceTypeList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaResourceTagsSearchCriteria = {
  TagSearchCondition?: AmazonConnectFullApiSchemaTagSearchCondition;
};

export type AmazonConnectFullApiSchemaSearchResourceTagsResponse = {
  Tags?: AmazonConnectFullApiSchemaTagsList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaRoutingProfileSearchFilter = {
  TagFilter?: AmazonConnectFullApiSchemaControlPlaneTagFilter;
};

export type AmazonConnectFullApiSchemaRoutingProfileSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaRoutingProfileSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaRoutingProfileSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
};

export type AmazonConnectFullApiSchemaSearchRoutingProfilesResponse = {
  RoutingProfiles?: AmazonConnectFullApiSchemaRoutingProfileList;
  NextToken?: string;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaSecurityProfileSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaSecurityProfileSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaSecurityProfileSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
};

export type AmazonConnectFullApiSchemaSecurityProfilesSearchFilter = {
  TagFilter?: AmazonConnectFullApiSchemaControlPlaneTagFilter;
};

export type AmazonConnectFullApiSchemaSearchSecurityProfilesResponse = {
  SecurityProfiles?: AmazonConnectFullApiSchemaSecurityProfilesSearchSummaryList;
  NextToken?: string;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaTestCaseSearchFilter = {
  TagFilter?: AmazonConnectFullApiSchemaControlPlaneTagFilter;
};

export type AmazonConnectFullApiSchemaTestCaseSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaTestCaseSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaTestCaseSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
  StatusCondition?: AmazonConnectFullApiSchemaTestCaseStatus;
};

export type AmazonConnectFullApiSchemaSearchTestCasesResponse = {
  TestCases?: AmazonConnectFullApiSchemaTestCaseSearchSummaryList;
  NextToken?: string;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaUserHierarchyGroupSearchFilter = {
  AttributeFilter?: AmazonConnectFullApiSchemaControlPlaneAttributeFilter;
};

export type AmazonConnectFullApiSchemaUserHierarchyGroupSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaUserHierarchyGroupSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaUserHierarchyGroupSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
};

export type AmazonConnectFullApiSchemaSearchUserHierarchyGroupsResponse = {
  UserHierarchyGroups?: AmazonConnectFullApiSchemaUserHierarchyGroupList;
  NextToken?: string;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaUserSearchFilter = {
  TagFilter?: AmazonConnectFullApiSchemaControlPlaneTagFilter;
  UserAttributeFilter?: AmazonConnectFullApiSchemaControlPlaneUserAttributeFilter;
};

export type AmazonConnectFullApiSchemaUserSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaUserSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaUserSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
  ListCondition?: AmazonConnectFullApiSchemaListCondition;
  HierarchyGroupCondition?: AmazonConnectFullApiSchemaHierarchyGroupCondition;
};

export type AmazonConnectFullApiSchemaSearchUsersResponse = {
  Users?: AmazonConnectFullApiSchemaUserSearchSummaryList;
  NextToken?: string;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaViewSearchFilter = {
  AttributeFilter?: AmazonConnectFullApiSchemaControlPlaneAttributeFilter;
};

export type AmazonConnectFullApiSchemaViewSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaViewSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaViewSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
  ViewTypeCondition?: AmazonConnectFullApiSchemaViewType;
  ViewStatusCondition?: AmazonConnectFullApiSchemaViewStatus;
};

export type AmazonConnectFullApiSchemaSearchViewsResponse = {
  Views?: AmazonConnectFullApiSchemaViewSearchSummaryList;
  NextToken?: string;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaVocabularyState = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaSearchVocabulariesResponse = {
  VocabularySummaryList?: AmazonConnectFullApiSchemaVocabularySummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaWorkspaceAssociationSearchFilter = {
  AttributeFilter?: AmazonConnectFullApiSchemaControlPlaneAttributeFilter;
};

export type AmazonConnectFullApiSchemaWorkspaceAssociationSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaWorkspaceAssociationSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaWorkspaceAssociationSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
};

export type AmazonConnectFullApiSchemaSearchWorkspaceAssociationsResponse = {
  NextToken?: string;
  WorkspaceAssociations?: AmazonConnectFullApiSchemaWorkspaceAssociationSearchSummaryList;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaWorkspaceSearchFilter = {
  AttributeFilter?: AmazonConnectFullApiSchemaControlPlaneAttributeFilter;
};

export type AmazonConnectFullApiSchemaWorkspaceSearchCriteria = {
  OrConditions?: AmazonConnectFullApiSchemaWorkspaceSearchConditionList;
  AndConditions?: AmazonConnectFullApiSchemaWorkspaceSearchConditionList;
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
};

export type AmazonConnectFullApiSchemaSearchWorkspacesResponse = {
  NextToken?: string;
  Workspaces?: AmazonConnectFullApiSchemaWorkspaceSearchSummaryList;
  ApproximateTotalCount?: number;
};

export type AmazonConnectFullApiSchemaChatEvent = {
  Type: AmazonConnectFullApiSchemaChatEventType;
  ContentType?: string;
  Content?: string;
};

export type AmazonConnectFullApiSchemaNewSessionDetails = {
  SupportedMessagingContentTypes?: AmazonConnectFullApiSchemaSupportedMessagingContentTypes;
  ParticipantDetails?: AmazonConnectFullApiSchemaParticipantDetails;
  Attributes?: AmazonConnectFullApiSchemaAttributes;
  StreamingConfiguration?: AmazonConnectFullApiSchemaChatStreamingConfiguration;
};

export type AmazonConnectFullApiSchemaSendChatIntegrationEventResponse = {
  InitialContactId?: string;
  NewChatCreated?: boolean;
};

export type AmazonConnectFullApiSchemaEmailAddressInfo = {
  EmailAddress: string;
  DisplayName?: string;
};

export type AmazonConnectFullApiSchemaOutboundAdditionalRecipients = {
  CcEmailAddresses?: AmazonConnectFullApiSchemaEmailAddressRecipientList;
};

export type AmazonConnectFullApiSchemaOutboundEmailContent = {
  MessageSourceType: AmazonConnectFullApiSchemaOutboundMessageSourceType;
  TemplatedMessageConfig?: AmazonConnectFullApiSchemaTemplatedMessageConfig;
  RawMessage?: AmazonConnectFullApiSchemaOutboundRawMessage;
};

export type AmazonConnectFullApiSchemaTrafficType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaSourceCampaign = {
  CampaignId?: string;
  OutboundRequestId?: string;
};

export type AmazonConnectFullApiSchemaSendOutboundEmailResponse = {};

export type AmazonConnectFullApiSchemaFileUseCaseType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCreatedByInfo = {
  ConnectUserArn: string;
} | {
  AWSIdentityArn: string;
};

export type AmazonConnectFullApiSchemaStartAttachedFileUploadResponse = {
  FileArn?: string;
  FileId?: string;
  CreationTime?: string;
  FileStatus?: AmazonConnectFullApiSchemaFileStatusType;
  CreatedBy?: AmazonConnectFullApiSchemaCreatedByInfo;
  UploadUrlMetadata?: AmazonConnectFullApiSchemaUploadUrlMetadata;
};

export type AmazonConnectFullApiSchemaParticipantDetails = {
  DisplayName: string;
};

export type AmazonConnectFullApiSchemaParticipantConfiguration = {
  ResponseMode?: AmazonConnectFullApiSchemaResponseMode;
};

export type AmazonConnectFullApiSchemaChatMessage = {
  ContentType: string;
  Content: string;
};

export type AmazonConnectFullApiSchemaSupportedMessagingContentTypes = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaPersistentChat = {
  RehydrationType?: AmazonConnectFullApiSchemaRehydrationType;
  SourceContactId?: string;
};

export type AmazonConnectFullApiSchemaDisconnectOnCustomerExit = ReadonlyArray<AmazonConnectFullApiSchemaDisconnectOnCustomerExitParticipantType>;

export type AmazonConnectFullApiSchemaStartChatContactResponse = {
  ContactId?: string;
  ParticipantId?: string;
  ParticipantToken?: string;
  ContinuedFromContactId?: string;
};

export type AmazonConnectFullApiSchemaAutoEvaluationConfiguration = {
  Enabled: boolean;
};

export type AmazonConnectFullApiSchemaStartContactEvaluationResponse = {
  EvaluationId: string;
  EvaluationArn: string;
};

export type AmazonConnectFullApiSchemaContactMediaProcessingFailureMode = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaStartContactMediaProcessingResponse = {};

export type AmazonConnectFullApiSchemaVoiceRecordingConfiguration = {
  VoiceRecordingTrack?: AmazonConnectFullApiSchemaVoiceRecordingTrack;
  IvrRecordingTrack?: AmazonConnectFullApiSchemaIvrRecordingTrack;
};

export type AmazonConnectFullApiSchemaStartContactRecordingResponse = {};

export type AmazonConnectFullApiSchemaChatStreamingConfiguration = {
  StreamingEndpointArn: string;
};

export type AmazonConnectFullApiSchemaStartContactStreamingResponse = {
  StreamingId: string;
};

export type AmazonConnectFullApiSchemaInboundEmailContent = {
  MessageSourceType: AmazonConnectFullApiSchemaInboundMessageSourceType;
  RawMessage?: AmazonConnectFullApiSchemaInboundRawMessage;
};

export type AmazonConnectFullApiSchemaInboundAdditionalRecipients = {
  ToAddresses?: AmazonConnectFullApiSchemaEmailAddressRecipientList;
  CcAddresses?: AmazonConnectFullApiSchemaEmailAddressRecipientList;
};

export type AmazonConnectFullApiSchemaEmailAttachments = ReadonlyArray<AmazonConnectFullApiSchemaEmailAttachment>;

export type AmazonConnectFullApiSchemaStartEmailContactResponse = {
  ContactId?: string;
};

export type AmazonConnectFullApiSchemaEndpoint = {
  Type?: AmazonConnectFullApiSchemaEndpointType;
  Address?: string;
};

export type AmazonConnectFullApiSchemaTemplatedMessageConfig = {
  KnowledgeBaseId: string;
  MessageTemplateId: string;
  TemplateAttributes: AmazonConnectFullApiSchemaTemplateAttributes;
};

export type AmazonConnectFullApiSchemaStartOutboundChatContactResponse = {
  ContactId?: string;
};

export type AmazonConnectFullApiSchemaStartOutboundEmailContactResponse = {
  ContactId?: string;
};

export type AmazonConnectFullApiSchemaAnswerMachineDetectionConfig = {
  EnableAnswerMachineDetection?: boolean;
  AwaitAnswerMachinePrompt?: boolean;
};

export type AmazonConnectFullApiSchemaOutboundStrategy = {
  Type: AmazonConnectFullApiSchemaOutboundStrategyType;
  Config?: AmazonConnectFullApiSchemaOutboundStrategyConfig;
};

export type AmazonConnectFullApiSchemaStartOutboundVoiceContactResponse = {
  ContactId?: string;
};

export type AmazonConnectFullApiSchemaStartScreenSharingResponse = {};

export type AmazonConnectFullApiSchemaTaskAttachments = ReadonlyArray<AmazonConnectFullApiSchemaTaskAttachment>;

export type AmazonConnectFullApiSchemaStartTaskContactResponse = {
  ContactId?: string;
};

export type AmazonConnectFullApiSchemaStartTestCaseExecutionResponse = {
  TestCaseExecutionId?: string;
  TestCaseId?: string;
  Status?: AmazonConnectFullApiSchemaTestCaseExecutionStatus;
};

export type AmazonConnectFullApiSchemaAllowedCapabilities = {
  Customer?: AmazonConnectFullApiSchemaParticipantCapabilities;
  Agent?: AmazonConnectFullApiSchemaParticipantCapabilities;
};

export type AmazonConnectFullApiSchemaStartWebRTCContactResponse = {
  ConnectionData?: AmazonConnectFullApiSchemaConnectionData;
  ContactId?: string;
  ParticipantId?: string;
  ParticipantToken?: string;
};

export type AmazonConnectFullApiSchemaDisconnectReason = {
  Code?: string;
};

export type AmazonConnectFullApiSchemaStopContactResponse = {};

export type AmazonConnectFullApiSchemaStopContactMediaProcessingResponse = {};

export type AmazonConnectFullApiSchemaStopContactRecordingResponse = {};

export type AmazonConnectFullApiSchemaStopContactStreamingResponse = {};

export type AmazonConnectFullApiSchemaStopTestCaseExecutionResponse = {};

export type AmazonConnectFullApiSchemaEvaluationAnswersInputMap = {
  readonly [key: string]: AmazonConnectFullApiSchemaEvaluationAnswerInput | undefined;
};

export type AmazonConnectFullApiSchemaEvaluationNotesMap = {
  readonly [key: string]: AmazonConnectFullApiSchemaEvaluationNote | undefined;
};

export type AmazonConnectFullApiSchemaEvaluatorUserUnion = {
  ConnectUserArn: string;
};

export type AmazonConnectFullApiSchemaSubmitContactEvaluationResponse = {
  EvaluationId: string;
  EvaluationArn: string;
};

export type AmazonConnectFullApiSchemaSuspendContactRecordingResponse = {};

export type AmazonConnectFullApiSchemaContactTagMap = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaTagContactResponse = {};

export type AmazonConnectFullApiSchemaTransferContactResponse = {
  ContactId?: string;
  ContactArn?: string;
};

export type AmazonConnectFullApiSchemaContactTagKeys = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaUntagContactResponse = {};

export type AmazonConnectFullApiSchemaTagKeyList2 = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaExtensionConfiguration = {
  AllowedExtensions: AmazonConnectFullApiSchemaAllowedExtensionsList;
};

export type AmazonConnectFullApiSchemaUpdateAttachedFilesConfigurationResponse = {
  InstanceId: string;
  AttachmentScope: AmazonConnectFullApiSchemaAttachmentScope;
  MaximumSizeLimitInBytes?: number;
  ExtensionConfiguration?: AmazonConnectFullApiSchemaExtensionConfiguration;
  LastModifiedTime?: string;
};

export type AmazonConnectFullApiSchemaIpCidrList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaQueueInfoInput = {
  Id?: string;
};

export type AmazonConnectFullApiSchemaUpdateContactResponse = {};

export type AmazonConnectFullApiSchemaUpdateContactAttributesResponse = {};

export type AmazonConnectFullApiSchemaUpdateContactEvaluationResponse = {
  EvaluationId: string;
  EvaluationArn: string;
};

export type AmazonConnectFullApiSchemaUpdateContactFlowContentResponse = {};

export type AmazonConnectFullApiSchemaContactFlowState = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaUpdateContactFlowMetadataResponse = {};

export type AmazonConnectFullApiSchemaUpdateContactFlowModuleAliasResponse = {};

export type AmazonConnectFullApiSchemaUpdateContactFlowModuleContentResponse = {};

export type AmazonConnectFullApiSchemaUpdateContactFlowModuleMetadataResponse = {};

export type AmazonConnectFullApiSchemaUpdateContactFlowNameResponse = {};

export type AmazonConnectFullApiSchemaRoutingCriteriaInput = {
  Steps?: AmazonConnectFullApiSchemaRoutingCriteriaInputSteps;
};

export type AmazonConnectFullApiSchemaUpdateContactRoutingDataResponse = {};

export type AmazonConnectFullApiSchemaUpdateContactScheduleResponse = {};

export type AmazonConnectFullApiSchemaUpdateDataTableAttributeResponse = {
  Name: string;
  LockVersion: AmazonConnectFullApiSchemaDataTableLockVersion;
};

export type AmazonConnectFullApiSchemaUpdateDataTableMetadataResponse = {
  LockVersion: AmazonConnectFullApiSchemaDataTableLockVersion;
};

export type AmazonConnectFullApiSchemaPrimaryValuesSet = ReadonlyArray<AmazonConnectFullApiSchemaPrimaryValue>;

export type AmazonConnectFullApiSchemaDataTableLockVersion = {
  DataTable?: string;
  Attribute?: string;
  PrimaryValues?: string;
  Value?: string;
};

export type AmazonConnectFullApiSchemaUpdateDataTablePrimaryValuesResponse = {
  LockVersion: AmazonConnectFullApiSchemaDataTableLockVersion;
};

export type AmazonConnectFullApiSchemaUpdateEmailAddressMetadataResponse = {
  EmailAddressId?: string;
  EmailAddressArn?: string;
};

export type AmazonConnectFullApiSchemaUpdateEvaluationFormResponse = {
  EvaluationFormId: string;
  EvaluationFormArn: string;
  EvaluationFormVersion: number;
};

export type AmazonConnectFullApiSchemaUpdateNotificationContentResponse = {};

export type AmazonConnectFullApiSchemaUpdateParticipantAuthenticationResponse = {};

export type AmazonConnectFullApiSchemaUpdateParticipantRoleConfigChannelInfo = {
  Chat: AmazonConnectFullApiSchemaChatParticipantRoleConfig;
};

export type AmazonConnectFullApiSchemaUpdateParticipantRoleConfigResponse = {};

export type AmazonConnectFullApiSchemaUpdatePhoneNumberResponse = {
  PhoneNumberId?: string;
  PhoneNumberArn?: string;
};

export type AmazonConnectFullApiSchemaUpdatePromptResponse = {
  PromptARN?: string;
  PromptId?: string;
};

export type AmazonConnectFullApiSchemaQueueStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaUpdateTaskTemplateResponse = {
  InstanceId?: string;
  Id?: string;
  Arn?: string;
  Name?: string;
  Description?: string;
  ContactFlowId?: string;
  SelfAssignFlowId?: string;
  Constraints?: AmazonConnectFullApiSchemaTaskTemplateConstraints;
  Defaults?: AmazonConnectFullApiSchemaTaskTemplateDefaults;
  Fields?: AmazonConnectFullApiSchemaTaskTemplateFields;
  Status?: AmazonConnectFullApiSchemaTaskTemplateStatus;
  LastModifiedTime?: string;
  CreatedTime?: string;
};

export type AmazonConnectFullApiSchemaUpdateTestCaseResponse = {};

export type AmazonConnectFullApiSchemaTelephonyConfig = {
  Distributions: AmazonConnectFullApiSchemaDistributionList;
};

export type AmazonConnectFullApiSchemaSignInConfig = {
  Distributions: AmazonConnectFullApiSchemaSignInDistributionList;
};

export type AmazonConnectFullApiSchemaAgentConfig = {
  Distributions: AmazonConnectFullApiSchemaDistributionList;
};

export type AmazonConnectFullApiSchemaUpdateTrafficDistributionResponse = {};

export type AmazonConnectFullApiSchemaHierarchyStructureUpdate = {
  LevelOne?: AmazonConnectFullApiSchemaHierarchyLevelUpdate;
  LevelTwo?: AmazonConnectFullApiSchemaHierarchyLevelUpdate;
  LevelThree?: AmazonConnectFullApiSchemaHierarchyLevelUpdate;
  LevelFour?: AmazonConnectFullApiSchemaHierarchyLevelUpdate;
  LevelFive?: AmazonConnectFullApiSchemaHierarchyLevelUpdate;
};

export type AmazonConnectFullApiSchemaNotificationStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaUpdateUserNotificationStatusResponse = {};

export type AmazonConnectFullApiSchemaUpdateViewContentResponse = {
  View?: AmazonConnectFullApiSchemaView;
};

export type AmazonConnectFullApiSchemaUpdateViewMetadataResponse = {};

export type AmazonConnectFullApiSchemaUpdateWorkspaceMetadataResponse = {};

export type AmazonConnectFullApiSchemaUpdateWorkspacePageResponse = {};

export type AmazonConnectFullApiSchemaUpdateWorkspaceThemeResponse = {};

export type AmazonConnectFullApiSchemaVisibility = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaUpdateWorkspaceVisibilityResponse = {};

export type AmazonConnectFullApiSchemaCancelParticipantAuthenticationResponse = {};

export type AmazonConnectFullApiSchemaAttachmentIdList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaCompleteAttachmentUploadResponse = {};

export type AmazonConnectFullApiSchemaConnectionTypeList = ReadonlyArray<AmazonConnectFullApiSchemaConnectionType>;

export type AmazonConnectFullApiSchemaCreateParticipantConnectionResponse = {
  Websocket?: AmazonConnectFullApiSchemaWebsocket;
  ConnectionCredentials?: AmazonConnectFullApiSchemaConnectionCredentials;
  WebRTCConnection?: AmazonConnectFullApiSchemaWebRTCConnection;
};

export type AmazonConnectFullApiSchemaDescribeViewResponse2 = {
  View?: AmazonConnectFullApiSchemaView2;
};

export type AmazonConnectFullApiSchemaDisconnectParticipantResponse = {};

export type AmazonConnectFullApiSchemaGetAttachmentResponse = {
  Url?: string;
  UrlExpiry?: string;
  AttachmentSizeInBytes: number;
};

export type AmazonConnectFullApiSchemaGetAuthenticationUrlResponse = {
  AuthenticationUrl?: string;
};

export type AmazonConnectFullApiSchemaScanDirection = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaSortKey = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaStartPosition = {
  Id?: string;
  AbsoluteTime?: string;
  MostRecent?: number;
};

export type AmazonConnectFullApiSchemaGetTranscriptResponse = {
  InitialContactId?: string;
  Transcript?: AmazonConnectFullApiSchemaTranscript;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaSendEventResponse = {
  Id?: string;
  AbsoluteTime?: string;
};

export type AmazonConnectFullApiSchemaSendMessageResponse = {
  Id?: string;
  AbsoluteTime?: string;
  MessageMetadata?: AmazonConnectFullApiSchemaMessageProcessingMetadata;
};

export type AmazonConnectFullApiSchemaStartAttachmentUploadResponse = {
  AttachmentId?: string;
  UploadMetadata?: AmazonConnectFullApiSchemaUploadMetadata;
};

export type AmazonConnectFullApiSchemaCaseRuleIdentifierList = ReadonlyArray<AmazonConnectFullApiSchemaCaseRuleIdentifier>;

export type AmazonConnectFullApiSchemaBatchGetCaseRuleResponse = {
  caseRules: AmazonConnectFullApiSchemaBatchGetCaseRuleList;
  errors: AmazonConnectFullApiSchemaBatchGetCaseRuleErrorList;
  unprocessedCaseRules?: AmazonConnectFullApiSchemaBatchGetCaseRuleUnprocessedList;
};

export type AmazonConnectFullApiSchemaBatchGetFieldIdentifierList = ReadonlyArray<AmazonConnectFullApiSchemaFieldIdentifier>;

export type AmazonConnectFullApiSchemaBatchGetFieldResponse = {
  fields: AmazonConnectFullApiSchemaBatchGetFieldList;
  errors: AmazonConnectFullApiSchemaBatchGetFieldErrorList;
};

export type AmazonConnectFullApiSchemaFieldOptionsList = ReadonlyArray<AmazonConnectFullApiSchemaFieldOption>;

export type AmazonConnectFullApiSchemaBatchPutFieldOptionsResponse = {
  errors?: AmazonConnectFullApiSchemaFieldOptionErrorList;
};

export type AmazonConnectFullApiSchemaFieldValueList = ReadonlyArray<AmazonConnectFullApiSchemaFieldValue>;

export type AmazonConnectFullApiSchemaUserUnion = {
  userArn: string;
} | {
  customEntity: string;
};

export type AmazonConnectFullApiSchemaMutableTags = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaCreateCaseResponse = {
  caseId: string;
  caseArn: string;
};

export type AmazonConnectFullApiSchemaCaseRuleDetails = {
  required: AmazonConnectFullApiSchemaRequiredCaseRule;
} | {
  fieldOptions: AmazonConnectFullApiSchemaFieldOptionsCaseRule;
} | {
  hidden: AmazonConnectFullApiSchemaHiddenCaseRule;
};

export type AmazonConnectFullApiSchemaCreateCaseRuleResponse = {
  caseRuleId: string;
  caseRuleArn: string;
};

export type AmazonConnectFullApiSchemaCreateDomainResponse = {
  domainId: string;
  domainArn: string;
  domainStatus: "Active" | "CreationInProgress" | "CreationFailed";
};

export type AmazonConnectFullApiSchemaFieldAttributes = {
  text: AmazonConnectFullApiSchemaTextAttributes;
};

export type AmazonConnectFullApiSchemaCreateFieldResponse = {
  fieldId: string;
  fieldArn: string;
};

export type AmazonConnectFullApiSchemaLayoutContent = {
  basic: AmazonConnectFullApiSchemaBasicLayout;
};

export type AmazonConnectFullApiSchemaCreateLayoutResponse = {
  layoutId: string;
  layoutArn: string;
};

export type AmazonConnectFullApiSchemaRelatedItemInputContent = {
  contact: AmazonConnectFullApiSchemaContact2;
} | {
  comment: AmazonConnectFullApiSchemaCommentContent;
} | {
  file: AmazonConnectFullApiSchemaFileContent;
} | {
  sla: AmazonConnectFullApiSchemaSlaInputContent;
} | {
  connectCase: AmazonConnectFullApiSchemaConnectCaseInputContent;
} | {
  custom: AmazonConnectFullApiSchemaCustomInputContent;
};

export type AmazonConnectFullApiSchemaCreateRelatedItemResponse = {
  relatedItemId: string;
  relatedItemArn: string;
};

export type AmazonConnectFullApiSchemaLayoutConfiguration = {
  defaultLayout?: string;
};

export type AmazonConnectFullApiSchemaRequiredFieldList = ReadonlyArray<AmazonConnectFullApiSchemaRequiredField>;

export type AmazonConnectFullApiSchemaTemplateCaseRuleList = ReadonlyArray<AmazonConnectFullApiSchemaTemplateRule>;

export type AmazonConnectFullApiSchemaTagPropagationConfigurationList = ReadonlyArray<AmazonConnectFullApiSchemaTagPropagationConfiguration>;

export type AmazonConnectFullApiSchemaCreateTemplateResponse = {
  templateId: string;
  templateArn: string;
};

export type AmazonConnectFullApiSchemaDeleteCaseResponse = {};

export type AmazonConnectFullApiSchemaDeleteCaseRuleResponse = {};

export type AmazonConnectFullApiSchemaDeleteDomainResponse = {};

export type AmazonConnectFullApiSchemaDeleteFieldResponse = {};

export type AmazonConnectFullApiSchemaDeleteLayoutResponse = {};

export type AmazonConnectFullApiSchemaDeleteRelatedItemResponse = {};

export type AmazonConnectFullApiSchemaDeleteTemplateResponse = {};

export type AmazonConnectFullApiSchemaFieldIdentifierList = ReadonlyArray<AmazonConnectFullApiSchemaFieldIdentifier>;

export type AmazonConnectFullApiSchemaGetCaseResponse = {
  fields: AmazonConnectFullApiSchemaFieldValueList;
  templateId: string;
  nextToken?: string;
  tags?: AmazonConnectFullApiSchemaTags;
};

export type AmazonConnectFullApiSchemaGetCaseAuditEventsResponse = {
  nextToken?: string;
  auditEvents: AmazonConnectFullApiSchemaAuditEventsList;
};

export type AmazonConnectFullApiSchemaGetCaseEventConfigurationResponse = {
  eventBridge: AmazonConnectFullApiSchemaEventBridgeConfiguration;
};

export type AmazonConnectFullApiSchemaGetDomainResponse = {
  domainId: string;
  domainArn: string;
  name: string;
  createdTime: string;
  domainStatus: "Active" | "CreationInProgress" | "CreationFailed";
  tags?: AmazonConnectFullApiSchemaTags;
};

export type AmazonConnectFullApiSchemaGetLayoutResponse = {
  layoutId: string;
  layoutArn: string;
  name: string;
  content: AmazonConnectFullApiSchemaLayoutContent;
  tags?: AmazonConnectFullApiSchemaTags;
  deleted?: boolean;
  createdTime?: string;
  lastModifiedTime?: string;
};

export type AmazonConnectFullApiSchemaGetTemplateResponse = {
  templateId: string;
  templateArn: string;
  name: string;
  description?: string;
  layoutConfiguration?: AmazonConnectFullApiSchemaLayoutConfiguration;
  requiredFields?: AmazonConnectFullApiSchemaRequiredFieldList;
  tags?: AmazonConnectFullApiSchemaTags;
  status: "Active" | "Inactive";
  deleted?: boolean;
  createdTime?: string;
  lastModifiedTime?: string;
  rules?: AmazonConnectFullApiSchemaTemplateCaseRuleList;
  tagPropagationConfigurations?: AmazonConnectFullApiSchemaTagPropagationConfigurationList;
};

export type AmazonConnectFullApiSchemaListCaseRulesResponse = {
  caseRules: AmazonConnectFullApiSchemaCaseRuleSummaryList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListCasesForContactResponse = {
  cases: AmazonConnectFullApiSchemaCaseSummaryList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListDomainsResponse = {
  domains: AmazonConnectFullApiSchemaDomainSummaryList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaValuesList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaListFieldOptionsResponse = {
  options: AmazonConnectFullApiSchemaFieldOptionsList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListFieldsResponse = {
  fields: AmazonConnectFullApiSchemaFieldSummaryList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListLayoutsResponse = {
  layouts: AmazonConnectFullApiSchemaLayoutSummaryList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListTagsForResourceResponse3 = {
  tags?: AmazonConnectFullApiSchemaTags;
};

export type AmazonConnectFullApiSchemaTemplateStatusFilters = ReadonlyArray<"Active" | "Inactive">;

export type AmazonConnectFullApiSchemaListTemplatesResponse = {
  templates: AmazonConnectFullApiSchemaTemplateSummaryList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaEventBridgeConfiguration = {
  enabled: boolean;
  includedData?: AmazonConnectFullApiSchemaEventIncludedData;
};

export type AmazonConnectFullApiSchemaPutCaseEventConfigurationResponse = {};

export type AmazonConnectFullApiSchemaRelatedItemFilterList = ReadonlyArray<AmazonConnectFullApiSchemaRelatedItemTypeFilter>;

export type AmazonConnectFullApiSchemaSearchAllRelatedItemsSortList = ReadonlyArray<AmazonConnectFullApiSchemaSearchAllRelatedItemsSort>;

export type AmazonConnectFullApiSchemaSearchAllRelatedItemsResponse = {
  nextToken?: string;
  relatedItems: AmazonConnectFullApiSchemaSearchAllRelatedItemsResponseItemList;
};

export type AmazonConnectFullApiSchemaCaseFilter = {
  field: AmazonConnectFullApiSchemaFieldFilter;
} | {
  not: AmazonConnectFullApiSchemaCaseFilter;
} | {
  tag: AmazonConnectFullApiSchemaTagFilter2;
} | {
  andAll: AmazonConnectFullApiSchemaCaseFilterList;
} | {
  orAll: AmazonConnectFullApiSchemaCaseFilterList;
};

export type AmazonConnectFullApiSchemaSortList = ReadonlyArray<AmazonConnectFullApiSchemaSort2>;

export type AmazonConnectFullApiSchemaSearchCasesResponse = {
  nextToken?: string;
  cases: AmazonConnectFullApiSchemaSearchCasesResponseItemList;
  totalCount?: number;
};

export type AmazonConnectFullApiSchemaSearchRelatedItemsResponse = {
  nextToken?: string;
  relatedItems: AmazonConnectFullApiSchemaSearchRelatedItemsResponseItemList;
};

export type AmazonConnectFullApiSchemaTags = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaTagKeyList3 = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaUpdateCaseResponse = {};

export type AmazonConnectFullApiSchemaUpdateCaseRuleResponse = {};

export type AmazonConnectFullApiSchemaUpdateFieldResponse = {};

export type AmazonConnectFullApiSchemaUpdateLayoutResponse = {};

export type AmazonConnectFullApiSchemaRelatedItemUpdateContent = {
  comment: AmazonConnectFullApiSchemaCommentUpdateContent;
} | {
  custom: AmazonConnectFullApiSchemaCustomUpdateContent;
};

export type AmazonConnectFullApiSchemaUpdateRelatedItemResponse = {
  relatedItemId: string;
  relatedItemArn: string;
  type: "Contact" | "Comment" | "File" | "Sla" | "ConnectCase" | "Custom";
  content: AmazonConnectFullApiSchemaRelatedItemContent;
  associationTime: string;
  tags?: AmazonConnectFullApiSchemaTags;
  lastUpdatedUser?: AmazonConnectFullApiSchemaUserUnion;
  createdBy?: AmazonConnectFullApiSchemaUserUnion;
};

export type AmazonConnectFullApiSchemaUpdateTemplateResponse = {};

export type AmazonConnectFullApiSchemaDialerConfig = {
  progressiveDialerConfig: AmazonConnectFullApiSchemaProgressiveDialerConfig;
} | {
  predictiveDialerConfig: AmazonConnectFullApiSchemaPredictiveDialerConfig;
} | {
  agentlessDialerConfig: AmazonConnectFullApiSchemaAgentlessDialerConfig;
};

export type AmazonConnectFullApiSchemaOutboundCallConfig = {
  connectContactFlowId: string;
  connectSourcePhoneNumber?: string;
  connectQueueId?: string;
  answerMachineDetectionConfig?: AmazonConnectFullApiSchemaAnswerMachineDetectionConfig2;
};

export type AmazonConnectFullApiSchemaTagMap3 = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaCreateCampaignResponse = {
  id?: string;
  arn?: string;
  tags?: AmazonConnectFullApiSchemaTagMap3;
};

export type AmazonConnectFullApiSchemaDescribeCampaignResponse = {
  campaign?: AmazonConnectFullApiSchemaCampaign;
};

export type AmazonConnectFullApiSchemaGetCampaignStateResponse = {
  state?: "Initialized" | "Running" | "Paused" | "Stopped" | "Failed";
};

export type AmazonConnectFullApiSchemaCampaignIdList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaGetCampaignStateBatchResponse = {
  successfulRequests?: AmazonConnectFullApiSchemaSuccessfulCampaignStateResponseList;
  failedRequests?: AmazonConnectFullApiSchemaFailedCampaignStateResponseList;
};

export type AmazonConnectFullApiSchemaGetConnectInstanceConfigResponse = {
  connectInstanceConfig?: AmazonConnectFullApiSchemaInstanceConfig;
};

export type AmazonConnectFullApiSchemaGetInstanceOnboardingJobStatusResponse = {
  connectInstanceOnboardingJobStatus?: AmazonConnectFullApiSchemaInstanceOnboardingJobStatus;
};

export type AmazonConnectFullApiSchemaCampaignFilters = {
  instanceIdFilter?: AmazonConnectFullApiSchemaInstanceIdFilter;
};

export type AmazonConnectFullApiSchemaListCampaignsResponse = {
  nextToken?: string;
  campaignSummaryList?: AmazonConnectFullApiSchemaCampaignSummaryList;
};

export type AmazonConnectFullApiSchemaListTagsForResourceResponse4 = {
  tags?: AmazonConnectFullApiSchemaTagMap3;
};

export type AmazonConnectFullApiSchemaDialRequestList = ReadonlyArray<AmazonConnectFullApiSchemaDialRequest>;

export type AmazonConnectFullApiSchemaPutDialRequestBatchResponse = {
  successfulRequests?: AmazonConnectFullApiSchemaSuccessfulRequestList2;
  failedRequests?: AmazonConnectFullApiSchemaFailedRequestList2;
};

export type AmazonConnectFullApiSchemaEncryptionConfig = {
  enabled: boolean;
  encryptionType?: "KMS";
  keyArn?: string;
};

export type AmazonConnectFullApiSchemaStartInstanceOnboardingJobResponse = {
  connectInstanceOnboardingJobStatus?: AmazonConnectFullApiSchemaInstanceOnboardingJobStatus;
};

export type AmazonConnectFullApiSchemaTagKeyList4 = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaAnswerMachineDetectionConfig2 = {
  enableAnswerMachineDetection: boolean;
  awaitAnswerMachinePrompt?: boolean;
};

export type AmazonConnectFullApiSchemaChannelSubtypeConfig = {
  telephony?: AmazonConnectFullApiSchemaTelephonyChannelSubtypeConfig;
  sms?: AmazonConnectFullApiSchemaSmsChannelSubtypeConfig;
  email?: AmazonConnectFullApiSchemaEmailChannelSubtypeConfig;
  whatsApp?: AmazonConnectFullApiSchemaWhatsAppChannelSubtypeConfig;
};

export type AmazonConnectFullApiSchemaSource = {
  customerProfilesSegmentArn: string;
} | {
  eventTrigger: AmazonConnectFullApiSchemaEventTrigger;
};

export type AmazonConnectFullApiSchemaSchedule = {
  startTime: string;
  endTime: string;
  refreshFrequency?: string;
};

export type AmazonConnectFullApiSchemaEntryLimitsConfig = {
  maxEntryCount: number;
  minEntryInterval: string;
};

export type AmazonConnectFullApiSchemaCommunicationTimeConfig = {
  localTimeZoneConfig: AmazonConnectFullApiSchemaLocalTimeZoneConfig;
  telephony?: AmazonConnectFullApiSchemaTimeWindow;
  sms?: AmazonConnectFullApiSchemaTimeWindow;
  email?: AmazonConnectFullApiSchemaTimeWindow;
  whatsApp?: AmazonConnectFullApiSchemaTimeWindow;
};

export type AmazonConnectFullApiSchemaCommunicationLimitsConfig = {
  allChannelSubtypes?: AmazonConnectFullApiSchemaCommunicationLimits;
  instanceLimitsHandling?: "OPT_IN" | "OPT_OUT";
};

export type AmazonConnectFullApiSchemaTagMap4 = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaCreateCampaignResponse2 = {
  id?: string;
  arn?: string;
  tags?: AmazonConnectFullApiSchemaTagMap4;
};

export type AmazonConnectFullApiSchemaIntegrationIdentifier = {
  customerProfiles: AmazonConnectFullApiSchemaCustomerProfilesIntegrationIdentifier;
} | {
  qConnect: AmazonConnectFullApiSchemaQConnectIntegrationIdentifier;
} | {
  lambda: AmazonConnectFullApiSchemaLambdaIntegrationIdentifier;
};

export type AmazonConnectFullApiSchemaDescribeCampaignResponse2 = {
  campaign?: AmazonConnectFullApiSchemaCampaign2;
};

export type AmazonConnectFullApiSchemaGetCampaignStateResponse2 = {
  state?: "Initialized" | "Running" | "Paused" | "Stopped" | "Failed" | "Completed";
};

export type AmazonConnectFullApiSchemaCampaignIdList2 = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaGetCampaignStateBatchResponse2 = {
  successfulRequests?: AmazonConnectFullApiSchemaSuccessfulCampaignStateResponseList2;
  failedRequests?: AmazonConnectFullApiSchemaFailedCampaignStateResponseList2;
};

export type AmazonConnectFullApiSchemaGetConnectInstanceConfigResponse2 = {
  connectInstanceConfig?: AmazonConnectFullApiSchemaInstanceConfig2;
};

export type AmazonConnectFullApiSchemaGetInstanceCommunicationLimitsResponse = {
  communicationLimitsConfig?: AmazonConnectFullApiSchemaInstanceCommunicationLimitsConfig;
};

export type AmazonConnectFullApiSchemaGetInstanceOnboardingJobStatusResponse2 = {
  connectInstanceOnboardingJobStatus?: AmazonConnectFullApiSchemaInstanceOnboardingJobStatus2;
};

export type AmazonConnectFullApiSchemaCampaignFilters2 = {
  instanceIdFilter?: AmazonConnectFullApiSchemaInstanceIdFilter2;
};

export type AmazonConnectFullApiSchemaListCampaignsResponse2 = {
  nextToken?: string;
  campaignSummaryList?: AmazonConnectFullApiSchemaCampaignSummaryList2;
};

export type AmazonConnectFullApiSchemaListConnectInstanceIntegrationsResponse = {
  nextToken?: string;
  integrationSummaryList?: AmazonConnectFullApiSchemaIntegrationSummaryList;
};

export type AmazonConnectFullApiSchemaListTagsForResourceResponse5 = {
  tags?: AmazonConnectFullApiSchemaTagMap4;
};

export type AmazonConnectFullApiSchemaIntegrationConfig = {
  customerProfiles: AmazonConnectFullApiSchemaCustomerProfilesIntegrationConfig;
} | {
  qConnect: AmazonConnectFullApiSchemaQConnectIntegrationConfig;
} | {
  lambda: AmazonConnectFullApiSchemaLambdaIntegrationConfig;
};

export type AmazonConnectFullApiSchemaInstanceCommunicationLimitsConfig = {
  allChannelSubtypes?: AmazonConnectFullApiSchemaCommunicationLimits;
};

export type AmazonConnectFullApiSchemaOutboundRequestList = ReadonlyArray<AmazonConnectFullApiSchemaOutboundRequest>;

export type AmazonConnectFullApiSchemaPutOutboundRequestBatchResponse = {
  successfulRequests?: AmazonConnectFullApiSchemaSuccessfulRequestList3;
  failedRequests?: AmazonConnectFullApiSchemaFailedRequestList3;
};

export type AmazonConnectFullApiSchemaProfileOutboundRequestList = ReadonlyArray<AmazonConnectFullApiSchemaProfileOutboundRequest>;

export type AmazonConnectFullApiSchemaPutProfileOutboundRequestBatchResponse = {
  successfulRequests?: AmazonConnectFullApiSchemaSuccessfulProfileOutboundRequestList;
  failedRequests?: AmazonConnectFullApiSchemaFailedProfileOutboundRequestList;
};

export type AmazonConnectFullApiSchemaEncryptionConfig2 = {
  enabled: boolean;
  encryptionType?: "KMS";
  keyArn?: string;
};

export type AmazonConnectFullApiSchemaStartInstanceOnboardingJobResponse2 = {
  connectInstanceOnboardingJobStatus?: AmazonConnectFullApiSchemaInstanceOnboardingJobStatus2;
};

export type AmazonConnectFullApiSchemaTagKeyList5 = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaListRealtimeContactAnalysisSegmentsResponse = {
  Segments: AmazonConnectFullApiSchemaRealtimeContactAnalysisSegments2;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaActivateSubscriptionOutput = {
  subscription?: AmazonConnectFullApiSchemaSubscriptionDescription;
};

export type AmazonConnectFullApiSchemaCreateWebAppConfiguration = {
  ehrRole: string;
  idcInstanceId: string;
  idcRegion: string;
};

export type AmazonConnectFullApiSchemaTagMap5 = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaCreateDomainOutput = {
  domainId: string;
  arn: string;
  name: string;
  kmsKeyArn?: string;
  encryptionContext?: AmazonConnectFullApiSchemaEncryptionContext;
  status: AmazonConnectFullApiSchemaDomainStatus;
  webAppUrl?: string;
  webAppConfiguration?: AmazonConnectFullApiSchemaWebAppConfiguration;
  createdAt: string;
};

export type AmazonConnectFullApiSchemaCreateSubscriptionOutput = {
  domainId: string;
  subscriptionId: string;
  arn: string;
  status: AmazonConnectFullApiSchemaSubscriptionStatus;
  createdAt: string;
  lastUpdatedAt: string;
  activatedAt?: string;
  deactivatedAt?: string;
};

export type AmazonConnectFullApiSchemaDeactivateSubscriptionOutput = {
  subscription?: AmazonConnectFullApiSchemaSubscriptionDescription;
};

export type AmazonConnectFullApiSchemaDeleteDomainOutput = {
  domainId: string;
  arn: string;
  status: AmazonConnectFullApiSchemaDomainStatus;
};

export type AmazonConnectFullApiSchemaGetDomainOutput = {
  domainId: string;
  arn: string;
  name: string;
  kmsKeyArn?: string;
  encryptionContext?: AmazonConnectFullApiSchemaEncryptionContext;
  status: AmazonConnectFullApiSchemaDomainStatus;
  webAppUrl?: string;
  webAppConfiguration?: AmazonConnectFullApiSchemaWebAppConfiguration;
  createdAt: string;
  tags?: AmazonConnectFullApiSchemaTagMap5;
};

export type AmazonConnectFullApiSchemaGetMedicalScribeListeningSessionOutput = {
  medicalScribeListeningSessionDetails?: AmazonConnectFullApiSchemaMedicalScribeListeningSessionDetails;
};

export type AmazonConnectFullApiSchemaGetPatientInsightsJobResponse = {
  jobId: string;
  jobArn: string;
  jobStatus: AmazonConnectFullApiSchemaJobStatus;
  creationTime?: string;
  updatedTime?: string;
  insightsOutput?: AmazonConnectFullApiSchemaInsightsOutput;
  statusDetails?: string;
  patientContext: AmazonConnectFullApiSchemaPatientInsightsPatientContext;
  insightsContext: AmazonConnectFullApiSchemaInsightsContext;
  encounterContext: AmazonConnectFullApiSchemaPatientInsightsEncounterContext;
  userContext: AmazonConnectFullApiSchemaUserContext;
  inputDataConfig: AmazonConnectFullApiSchemaInputDataConfig;
  outputDataConfig: AmazonConnectFullApiSchemaOutputDataConfig;
};

export type AmazonConnectFullApiSchemaGetSubscriptionOutput = {
  subscription?: AmazonConnectFullApiSchemaSubscriptionDescription;
};

export type AmazonConnectFullApiSchemaDomainStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaListDomainsOutput = {
  domains: AmazonConnectFullApiSchemaDomainSummaryList2;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListSubscriptionsOutput = {
  subscriptions: AmazonConnectFullApiSchemaSubscriptionList2;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListTagsForResourceOutput = {
  tags?: AmazonConnectFullApiSchemaTagMap5;
};

export type AmazonConnectFullApiSchemaMedicalScribeInputStream = {
  audioEvent: AmazonConnectFullApiSchemaMedicalScribeAudioEvent;
} | {
  binaryAudioEvent: AmazonConnectFullApiSchemaMedicalScribeBinaryAudioEvent;
} | {
  sessionControlEvent: AmazonConnectFullApiSchemaMedicalScribeSessionControlEvent;
} | {
  configurationEvent: AmazonConnectFullApiSchemaMedicalScribeConfigurationEvent;
};

export type AmazonConnectFullApiSchemaStartMedicalScribeListeningSessionOutput = {
  sessionId?: string;
  domainId?: string;
  subscriptionId?: string;
  requestId?: string;
  languageCode?: AmazonConnectFullApiSchemaMedicalScribeLanguageCode;
  mediaSampleRateHertz?: number;
  mediaEncoding?: AmazonConnectFullApiSchemaMedicalScribeMediaEncoding;
  responseStream?: AmazonConnectFullApiSchemaMedicalScribeOutputStream;
};

export type AmazonConnectFullApiSchemaPatientInsightsPatientContext = {
  patientId: string;
  dateOfBirth?: string;
  pronouns?: AmazonConnectFullApiSchemaPronouns;
};

export type AmazonConnectFullApiSchemaInsightsContext = {
  insightsType: AmazonConnectFullApiSchemaInsightsType;
};

export type AmazonConnectFullApiSchemaPatientInsightsEncounterContext = {
  encounterReason: string;
};

export type AmazonConnectFullApiSchemaUserContext = {
  role: AmazonConnectFullApiSchemaProviderRole;
  userId: string;
  specialty?: AmazonConnectFullApiSchemaSpecialty;
};

export type AmazonConnectFullApiSchemaInputDataConfig = {
  fhirServer?: AmazonConnectFullApiSchemaFHIRServer;
  s3Sources?: AmazonConnectFullApiSchemaS3Sources;
};

export type AmazonConnectFullApiSchemaOutputDataConfig = {
  s3OutputPath: string;
};

export type AmazonConnectFullApiSchemaStartPatientInsightsJobResponse = {
  jobArn: string;
  jobId: string;
  creationTime?: string;
};

export type AmazonConnectFullApiSchemaTagKeyList6 = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaRequestValueList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaAddProfileKeyResponse = {
  KeyName?: string;
  Values?: AmazonConnectFullApiSchemaRequestValueList;
};

export type AmazonConnectFullApiSchemaBatchGetCalculatedAttributeForProfileIdList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaConditionOverrides = {
  Range?: AmazonConnectFullApiSchemaRangeOverride;
};

export type AmazonConnectFullApiSchemaBatchGetCalculatedAttributeForProfileResponse = {
  Errors?: AmazonConnectFullApiSchemaBatchGetCalculatedAttributeForProfileErrorList;
  CalculatedAttributeValues?: AmazonConnectFullApiSchemaCalculatedAttributeValueList;
  ConditionOverrides?: AmazonConnectFullApiSchemaConditionOverrides;
};

export type AmazonConnectFullApiSchemaBatchGetProfileIdList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaBatchGetProfileResponse = {
  Errors?: AmazonConnectFullApiSchemaBatchGetProfileErrorList;
  Profiles?: AmazonConnectFullApiSchemaProfileList;
};

export type AmazonConnectFullApiSchemaBatchPutProfileObjectRequestItemList = ReadonlyArray<AmazonConnectFullApiSchemaBatchPutProfileObjectRequestItem>;

export type AmazonConnectFullApiSchemaBatchPutProfileObjectResponse = {
  Successful?: AmazonConnectFullApiSchemaBatchPutProfileObjectResponseList;
  Failed?: AmazonConnectFullApiSchemaBatchPutProfileObjectErrorList;
};

export type AmazonConnectFullApiSchemaAttributeDetails = {
  Attributes: AmazonConnectFullApiSchemaAttributeList2;
  Expression: string;
};

export type AmazonConnectFullApiSchemaConditions = {
  Range?: AmazonConnectFullApiSchemaRange;
  ObjectCount?: number;
  Threshold?: AmazonConnectFullApiSchemaThreshold;
};

export type AmazonConnectFullApiSchemaFilter = {
  Include: AmazonConnectFullApiSchemaInclude;
  Groups: AmazonConnectFullApiSchemaGroupList;
};

export type AmazonConnectFullApiSchemaStatistic = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaTagMap6 = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaCreateCalculatedAttributeDefinitionResponse = {
  CalculatedAttributeName?: string;
  DisplayName?: string;
  Description?: string;
  AttributeDetails?: AmazonConnectFullApiSchemaAttributeDetails;
  Conditions?: AmazonConnectFullApiSchemaConditions;
  Filter?: AmazonConnectFullApiSchemaFilter;
  Statistic?: AmazonConnectFullApiSchemaStatistic;
  CreatedAt?: string;
  LastUpdatedAt?: string;
  UseHistoricalData?: boolean;
  Status?: AmazonConnectFullApiSchemaReadinessStatus;
  Readiness?: AmazonConnectFullApiSchemaReadiness;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaMatchingRequest = {
  Enabled: boolean;
  JobSchedule?: AmazonConnectFullApiSchemaJobSchedule;
  AutoMerging?: AmazonConnectFullApiSchemaAutoMerging;
  ExportingConfig?: AmazonConnectFullApiSchemaExportingConfig;
};

export type AmazonConnectFullApiSchemaRuleBasedMatchingRequest = {
  Enabled: boolean;
  MatchingRules?: AmazonConnectFullApiSchemaMatchingRules;
  MaxAllowedRuleLevelForMerging?: number;
  MaxAllowedRuleLevelForMatching?: number;
  AttributeTypesSelector?: AmazonConnectFullApiSchemaAttributeTypesSelector;
  ConflictResolution?: AmazonConnectFullApiSchemaConflictResolution;
  ExportingConfig?: AmazonConnectFullApiSchemaExportingConfig;
};

export type AmazonConnectFullApiSchemaDataStoreRequest = {
  Enabled?: boolean;
};

export type AmazonConnectFullApiSchemaCreateDomainResponse2 = {
  DomainName: string;
  DefaultExpirationDays: number;
  DefaultEncryptionKey?: string;
  DeadLetterQueueUrl?: string;
  Matching?: AmazonConnectFullApiSchemaMatchingResponse;
  RuleBasedMatching?: AmazonConnectFullApiSchemaRuleBasedMatchingResponse;
  DataStore?: AmazonConnectFullApiSchemaDataStoreResponse;
  CreatedAt: string;
  LastUpdatedAt: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaLayoutType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCreateDomainLayoutResponse = {
  LayoutDefinitionName: string;
  Description: string;
  DisplayName: string;
  IsDefault?: boolean;
  LayoutType: AmazonConnectFullApiSchemaLayoutType;
  Layout: string;
  Version: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
  CreatedAt: string;
  LastUpdatedAt?: string;
};

export type AmazonConnectFullApiSchemaCreateEventStreamResponse = {
  EventStreamArn: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaEventTriggerConditions = ReadonlyArray<AmazonConnectFullApiSchemaEventTriggerCondition>;

export type AmazonConnectFullApiSchemaEventTriggerLimits = {
  EventExpiration?: number;
  Periods?: AmazonConnectFullApiSchemaPeriods;
};

export type AmazonConnectFullApiSchemaCreateEventTriggerResponse = {
  EventTriggerName?: string;
  ObjectTypeName?: string;
  Description?: string;
  EventTriggerConditions?: AmazonConnectFullApiSchemaEventTriggerConditions;
  SegmentFilter?: string;
  EventTriggerLimits?: AmazonConnectFullApiSchemaEventTriggerLimits;
  CreatedAt?: string;
  LastUpdatedAt?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaWorkflowType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaIntegrationConfig2 = {
  AppflowIntegration?: AmazonConnectFullApiSchemaAppflowIntegration;
};

export type AmazonConnectFullApiSchemaCreateIntegrationWorkflowResponse = {
  WorkflowId: string;
  Message: string;
};

export type AmazonConnectFullApiSchemaPartyType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaGender = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaAddress = {
  Address1?: string;
  Address2?: string;
  Address3?: string;
  Address4?: string;
  City?: string;
  County?: string;
  State?: string;
  Province?: string;
  Country?: string;
  PostalCode?: string;
};

export type AmazonConnectFullApiSchemaAttributes2 = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaProfileType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEngagementPreferences = {
  Phone?: AmazonConnectFullApiSchemaPhonePreferenceList;
  Email?: AmazonConnectFullApiSchemaEmailPreferenceList;
};

export type AmazonConnectFullApiSchemaCreateProfileResponse = {
  ProfileId: string;
};

export type AmazonConnectFullApiSchemaRecommenderRecipeName = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaRecommenderConfig = {
  EventsConfig?: AmazonConnectFullApiSchemaEventsConfig;
  TrainingFrequency?: number;
  InferenceConfig?: AmazonConnectFullApiSchemaInferenceConfig;
  IncludedColumns?: AmazonConnectFullApiSchemaIncludedColumns;
  ExcludedColumns?: AmazonConnectFullApiSchemaIncludedColumns;
};

export type AmazonConnectFullApiSchemaCreateRecommenderResponse = {
  RecommenderArn: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaCreateRecommenderFilterResponse = {
  RecommenderFilterArn: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaRecommenderSchemaFields = {
  readonly [key: string]: AmazonConnectFullApiSchemaRecommenderSchemaFieldList | undefined;
};

export type AmazonConnectFullApiSchemaCreateRecommenderSchemaResponse = {
  RecommenderSchemaArn: string;
  RecommenderSchemaName: string;
  Fields: AmazonConnectFullApiSchemaRecommenderSchemaFields;
  CreatedAt: string;
  Status: AmazonConnectFullApiSchemaRecommenderSchemaStatus;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaSegmentGroup = {
  Groups?: AmazonConnectFullApiSchemaSegmentGroupList;
  Include?: AmazonConnectFullApiSchemaIncludeOptions;
};

export type AmazonConnectFullApiSchemaSegmentSort = {
  Attributes: AmazonConnectFullApiSchemaSortAttributeList;
};

export type AmazonConnectFullApiSchemaCreateSegmentDefinitionResponse = {
  SegmentDefinitionName: string;
  DisplayName?: string;
  Description?: string;
  CreatedAt?: string;
  SegmentDefinitionArn?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaSegmentGroupStructure = {
  Groups?: AmazonConnectFullApiSchemaSegmentGroupList;
  Include?: AmazonConnectFullApiSchemaIncludeOptions;
};

export type AmazonConnectFullApiSchemaCreateSegmentEstimateResponse = {
  DomainName?: string;
  EstimateId?: string;
  StatusCode?: number;
};

export type AmazonConnectFullApiSchemaDataFormat = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCreateSegmentSnapshotResponse = {
  SnapshotId: string;
};

export type AmazonConnectFullApiSchemaFieldMap = {
  readonly [key: string]: AmazonConnectFullApiSchemaObjectTypeField | undefined;
};

export type AmazonConnectFullApiSchemaCreateUploadJobResponse = {
  JobId: string;
};

export type AmazonConnectFullApiSchemaDeleteCalculatedAttributeDefinitionResponse = {};

export type AmazonConnectFullApiSchemaDeleteDomainResponse2 = {
  Message: string;
};

export type AmazonConnectFullApiSchemaDeleteDomainLayoutResponse = {
  Message: string;
};

export type AmazonConnectFullApiSchemaDeleteDomainObjectTypeResponse = {};

export type AmazonConnectFullApiSchemaDeleteEventStreamResponse = {};

export type AmazonConnectFullApiSchemaDeleteEventTriggerResponse = {
  Message: string;
};

export type AmazonConnectFullApiSchemaDeleteIntegrationResponse = {
  Message: string;
};

export type AmazonConnectFullApiSchemaDeleteProfileResponse = {
  Message?: string;
};

export type AmazonConnectFullApiSchemaDeleteProfileKeyResponse = {
  Message?: string;
};

export type AmazonConnectFullApiSchemaDeleteProfileObjectResponse = {
  Message?: string;
};

export type AmazonConnectFullApiSchemaDeleteProfileObjectTypeResponse = {
  Message: string;
};

export type AmazonConnectFullApiSchemaDeleteRecommenderResponse = {};

export type AmazonConnectFullApiSchemaDeleteRecommenderFilterResponse = {
  Message: string;
};

export type AmazonConnectFullApiSchemaDeleteRecommenderSchemaResponse = {};

export type AmazonConnectFullApiSchemaDeleteSegmentDefinitionResponse = {
  Message?: string;
};

export type AmazonConnectFullApiSchemaDeleteWorkflowResponse = {};

export type AmazonConnectFullApiSchemaObjects = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaDetectProfileObjectTypeResponse = {
  DetectedProfileObjectTypes?: AmazonConnectFullApiSchemaDetectedProfileObjectTypes;
};

export type AmazonConnectFullApiSchemaConsolidation = {
  MatchingAttributesList: AmazonConnectFullApiSchemaMatchingAttributesList;
};

export type AmazonConnectFullApiSchemaConflictResolution = {
  ConflictResolvingModel: AmazonConnectFullApiSchemaConflictResolvingModel;
  SourceName?: string;
};

export type AmazonConnectFullApiSchemaGetAutoMergingPreviewResponse = {
  DomainName: string;
  NumberOfMatchesInSample?: number;
  NumberOfProfilesInSample?: number;
  NumberOfProfilesWillBeMerged?: number;
};

export type AmazonConnectFullApiSchemaGetCalculatedAttributeDefinitionResponse = {
  CalculatedAttributeName?: string;
  DisplayName?: string;
  Description?: string;
  CreatedAt?: string;
  LastUpdatedAt?: string;
  Statistic?: AmazonConnectFullApiSchemaStatistic;
  Filter?: AmazonConnectFullApiSchemaFilter;
  Conditions?: AmazonConnectFullApiSchemaConditions;
  AttributeDetails?: AmazonConnectFullApiSchemaAttributeDetails;
  UseHistoricalData?: boolean;
  Status?: AmazonConnectFullApiSchemaReadinessStatus;
  Readiness?: AmazonConnectFullApiSchemaReadiness;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaGetCalculatedAttributeForProfileResponse = {
  CalculatedAttributeName?: string;
  DisplayName?: string;
  IsDataPartial?: string;
  Value?: string;
  LastObjectTimestamp?: string;
};

export type AmazonConnectFullApiSchemaGetDomainResponse2 = {
  DomainName: string;
  DefaultExpirationDays?: number;
  DefaultEncryptionKey?: string;
  DeadLetterQueueUrl?: string;
  Stats?: AmazonConnectFullApiSchemaDomainStats;
  Matching?: AmazonConnectFullApiSchemaMatchingResponse;
  RuleBasedMatching?: AmazonConnectFullApiSchemaRuleBasedMatchingResponse;
  DataStore?: AmazonConnectFullApiSchemaDataStoreResponse;
  CreatedAt: string;
  LastUpdatedAt: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaGetDomainLayoutResponse = {
  LayoutDefinitionName: string;
  Description: string;
  DisplayName: string;
  IsDefault?: boolean;
  LayoutType: AmazonConnectFullApiSchemaLayoutType;
  Layout: string;
  Version: string;
  CreatedAt: string;
  LastUpdatedAt: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaGetDomainObjectTypeResponse = {
  ObjectTypeName: string;
  Description?: string;
  EncryptionKey?: string;
  Fields?: AmazonConnectFullApiSchemaDomainObjectTypeFields;
  CreatedAt?: string;
  LastUpdatedAt?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaGetEventStreamResponse = {
  DomainName: string;
  EventStreamArn: string;
  CreatedAt: string;
  State: AmazonConnectFullApiSchemaEventStreamState;
  StoppedSince?: string;
  DestinationDetails: AmazonConnectFullApiSchemaEventStreamDestinationDetails;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaGetEventTriggerResponse = {
  EventTriggerName?: string;
  ObjectTypeName?: string;
  Description?: string;
  EventTriggerConditions?: AmazonConnectFullApiSchemaEventTriggerConditions;
  SegmentFilter?: string;
  EventTriggerLimits?: AmazonConnectFullApiSchemaEventTriggerLimits;
  CreatedAt?: string;
  LastUpdatedAt?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaGetIdentityResolutionJobResponse = {
  DomainName?: string;
  JobId?: string;
  Status?: AmazonConnectFullApiSchemaIdentityResolutionJobStatus;
  Message?: string;
  JobStartTime?: string;
  JobEndTime?: string;
  LastUpdatedAt?: string;
  JobExpirationTime?: string;
  AutoMerging?: AmazonConnectFullApiSchemaAutoMerging;
  ExportingLocation?: AmazonConnectFullApiSchemaExportingLocation;
  JobStats?: AmazonConnectFullApiSchemaJobStats;
};

export type AmazonConnectFullApiSchemaGetIntegrationResponse = {
  DomainName: string;
  Uri: string;
  ObjectTypeName?: string;
  CreatedAt: string;
  LastUpdatedAt: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
  ObjectTypeNames?: AmazonConnectFullApiSchemaObjectTypeNames;
  WorkflowId?: string;
  IsUnstructured?: boolean;
  RoleArn?: string;
  EventTriggerNames?: AmazonConnectFullApiSchemaEventTriggerNames;
  Scope?: AmazonConnectFullApiSchemaScope;
};

export type AmazonConnectFullApiSchemaGetMatchesResponse = {
  NextToken?: string;
  MatchGenerationDate?: string;
  PotentialMatches?: number;
  Matches?: AmazonConnectFullApiSchemaMatchesList;
};

export type AmazonConnectFullApiSchemaGetObjectTypeAttributeStatisticsResponse = {
  Statistics: AmazonConnectFullApiSchemaGetObjectTypeAttributeStatisticsStats;
  CalculatedAt: string;
};

export type AmazonConnectFullApiSchemaGetProfileHistoryRecordResponse = {
  Id: string;
  ObjectTypeName: string;
  CreatedAt: string;
  LastUpdatedAt?: string;
  ActionType: AmazonConnectFullApiSchemaActionType;
  ProfileObjectUniqueKey?: string;
  Content?: string;
  PerformedBy?: string;
};

export type AmazonConnectFullApiSchemaGetProfileObjectTypeResponse = {
  ObjectTypeName: string;
  Description: string;
  TemplateId?: string;
  ExpirationDays?: number;
  EncryptionKey?: string;
  AllowProfileCreation?: boolean;
  SourceLastUpdatedTimestampFormat?: string;
  MaxAvailableProfileObjectCount?: number;
  MaxProfileObjectCount?: number;
  SourcePriority?: number;
  Fields?: AmazonConnectFullApiSchemaFieldMap;
  Keys?: AmazonConnectFullApiSchemaKeyMap;
  CreatedAt?: string;
  LastUpdatedAt?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaGetProfileObjectTypeTemplateResponse = {
  TemplateId?: string;
  SourceName?: string;
  SourceObject?: string;
  AllowProfileCreation?: boolean;
  SourceLastUpdatedTimestampFormat?: string;
  Fields?: AmazonConnectFullApiSchemaFieldMap;
  Keys?: AmazonConnectFullApiSchemaKeyMap;
};

export type AmazonConnectFullApiSchemaRecommenderContext = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaRecommenderFilters = ReadonlyArray<AmazonConnectFullApiSchemaRecommenderFilter>;

export type AmazonConnectFullApiSchemaRecommenderPromotionalFilters = ReadonlyArray<AmazonConnectFullApiSchemaRecommenderPromotionalFilter>;

export type AmazonConnectFullApiSchemaCandidateIdList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaMetadataConfig = {
  MetadataColumns?: AmazonConnectFullApiSchemaMetadataColumnsList;
};

export type AmazonConnectFullApiSchemaGetProfileRecommendationsResponse = {
  Recommendations?: AmazonConnectFullApiSchemaRecommendations;
};

export type AmazonConnectFullApiSchemaGetRecommenderResponse = {
  RecommenderName: string;
  RecommenderRecipeName: AmazonConnectFullApiSchemaRecommenderRecipeName;
  RecommenderSchemaName?: string;
  RecommenderConfig?: AmazonConnectFullApiSchemaRecommenderConfig;
  Description?: string;
  Status?: AmazonConnectFullApiSchemaRecommenderStatus;
  LastUpdatedAt?: string;
  CreatedAt?: string;
  FailureReason?: string;
  LatestRecommenderUpdate?: AmazonConnectFullApiSchemaRecommenderUpdate;
  TrainingMetrics?: AmazonConnectFullApiSchemaTrainingMetricsList;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaGetRecommenderFilterResponse = {
  RecommenderFilterName: string;
  RecommenderFilterExpression: string;
  RecommenderSchemaName?: string;
  CreatedAt: string;
  Status: AmazonConnectFullApiSchemaRecommenderFilterStatus;
  Description?: string;
  FailureReason?: string;
  Tags: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaGetRecommenderSchemaResponse = {
  RecommenderSchemaName: string;
  Fields: AmazonConnectFullApiSchemaRecommenderSchemaFields;
  CreatedAt: string;
  Status: AmazonConnectFullApiSchemaRecommenderSchemaStatus;
};

export type AmazonConnectFullApiSchemaGetSegmentDefinitionResponse = {
  SegmentDefinitionName?: string;
  DisplayName?: string;
  Description?: string;
  SegmentGroups?: AmazonConnectFullApiSchemaSegmentGroup;
  SegmentSort?: AmazonConnectFullApiSchemaSegmentSort;
  SegmentDefinitionArn: string;
  CreatedAt?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
  SegmentSqlQuery?: string;
  SegmentType?: AmazonConnectFullApiSchemaSegmentType;
};

export type AmazonConnectFullApiSchemaGetSegmentEstimateResponse = {
  DomainName?: string;
  EstimateId?: string;
  Status?: AmazonConnectFullApiSchemaEstimateStatus;
  Estimate?: string;
  Message?: string;
  StatusCode?: number;
};

export type AmazonConnectFullApiSchemaProfileIds = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaGetSegmentMembershipResponse = {
  SegmentDefinitionName?: string;
  Profiles?: AmazonConnectFullApiSchemaProfiles;
  Failures?: AmazonConnectFullApiSchemaFailures;
  LastComputedAt?: string;
};

export type AmazonConnectFullApiSchemaGetSegmentSnapshotResponse = {
  SnapshotId: string;
  Status: AmazonConnectFullApiSchemaSegmentSnapshotStatus;
  StatusMessage?: string;
  DataFormat: AmazonConnectFullApiSchemaDataFormat;
  EncryptionKey?: string;
  RoleArn?: string;
  DestinationUri?: string;
};

export type AmazonConnectFullApiSchemaMatchType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaGetSimilarProfilesResponse = {
  ProfileIds?: AmazonConnectFullApiSchemaProfileIdList;
  MatchId?: string;
  MatchType?: AmazonConnectFullApiSchemaMatchType;
  RuleLevel?: number;
  ConfidenceScore?: number;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaGetUploadJobResponse = {
  JobId?: string;
  DisplayName?: string;
  Status?: AmazonConnectFullApiSchemaUploadJobStatus;
  StatusReason?: AmazonConnectFullApiSchemaStatusReason;
  CreatedAt?: string;
  CompletedAt?: string;
  Fields?: AmazonConnectFullApiSchemaFieldMap;
  UniqueKey?: string;
  ResultsSummary?: AmazonConnectFullApiSchemaResultsSummary;
  DataExpiry?: number;
};

export type AmazonConnectFullApiSchemaGetUploadJobPathResponse = {
  Url: string;
  ClientToken?: string;
  ValidUntil?: string;
};

export type AmazonConnectFullApiSchemaGetWorkflowResponse = {
  WorkflowId?: string;
  WorkflowType?: AmazonConnectFullApiSchemaWorkflowType;
  Status?: AmazonConnectFullApiSchemaStatus;
  ErrorDescription?: string;
  StartDate?: string;
  LastUpdatedAt?: string;
  Attributes?: AmazonConnectFullApiSchemaWorkflowAttributes;
  Metrics?: AmazonConnectFullApiSchemaWorkflowMetrics;
};

export type AmazonConnectFullApiSchemaGetWorkflowStepsResponse = {
  WorkflowId?: string;
  WorkflowType?: AmazonConnectFullApiSchemaWorkflowType;
  Items?: AmazonConnectFullApiSchemaWorkflowStepsList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListAccountIntegrationsResponse = {
  Items?: AmazonConnectFullApiSchemaIntegrationList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListCalculatedAttributeDefinitionsResponse = {
  Items?: AmazonConnectFullApiSchemaCalculatedAttributeDefinitionsList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListCalculatedAttributesForProfileResponse = {
  Items?: AmazonConnectFullApiSchemaCalculatedAttributesForProfileList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListDomainLayoutsResponse = {
  Items?: AmazonConnectFullApiSchemaLayoutList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListDomainObjectTypesResponse = {
  Items?: AmazonConnectFullApiSchemaDomainObjectTypesList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListDomainsResponse2 = {
  Items?: AmazonConnectFullApiSchemaDomainList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListEventStreamsResponse = {
  Items?: AmazonConnectFullApiSchemaEventStreamSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListEventTriggersResponse = {
  Items?: AmazonConnectFullApiSchemaEventTriggerSummaryList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListIdentityResolutionJobsResponse = {
  IdentityResolutionJobsList?: AmazonConnectFullApiSchemaIdentityResolutionJobsList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListIntegrationsResponse = {
  Items?: AmazonConnectFullApiSchemaIntegrationList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListObjectTypeAttributeValuesResponse = {
  Items?: AmazonConnectFullApiSchemaListObjectTypeAttributeValuesList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListObjectTypeAttributesResponse = {
  Items?: AmazonConnectFullApiSchemaListObjectTypeAttributesList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaProfileAttributeValuesResponse = {
  DomainName?: string;
  AttributeName?: string;
  Items?: AmazonConnectFullApiSchemaAttributeValueItemList;
  StatusCode?: number;
};

export type AmazonConnectFullApiSchemaActionType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaListProfileHistoryRecordsResponse = {
  ProfileHistoryRecords?: AmazonConnectFullApiSchemaProfileHistoryRecords;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListProfileObjectTypeTemplatesResponse = {
  Items?: AmazonConnectFullApiSchemaProfileObjectTypeTemplateList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListProfileObjectTypesResponse = {
  Items?: AmazonConnectFullApiSchemaProfileObjectTypeList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaObjectFilter = {
  KeyName: string;
  Values: AmazonConnectFullApiSchemaRequestValueList;
};

export type AmazonConnectFullApiSchemaListProfileObjectsResponse = {
  Items?: AmazonConnectFullApiSchemaProfileObjectList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListRecommenderFiltersResponse = {
  NextToken?: string;
  RecommenderFilters?: AmazonConnectFullApiSchemaRecommenderFilterSummaryList;
};

export type AmazonConnectFullApiSchemaListRecommenderRecipesResponse = {
  NextToken?: string;
  RecommenderRecipes?: AmazonConnectFullApiSchemaRecommenderRecipesList;
};

export type AmazonConnectFullApiSchemaListRecommenderSchemasResponse = {
  NextToken?: string;
  RecommenderSchemas?: AmazonConnectFullApiSchemaRecommenderSchemaSummaryList;
};

export type AmazonConnectFullApiSchemaListRecommendersResponse = {
  NextToken?: string;
  Recommenders?: AmazonConnectFullApiSchemaRecommenderSummaryList;
};

export type AmazonConnectFullApiSchemaListRuleBasedMatchesResponse = {
  MatchIds?: AmazonConnectFullApiSchemaMatchIdList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaListSegmentDefinitionsResponse = {
  NextToken?: string;
  Items?: AmazonConnectFullApiSchemaSegmentDefinitionsList;
};

export type AmazonConnectFullApiSchemaListTagsForResourceResponse6 = {
  tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaListUploadJobsResponse = {
  NextToken?: string;
  Items?: AmazonConnectFullApiSchemaUploadJobsList;
};

export type AmazonConnectFullApiSchemaStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaListWorkflowsResponse = {
  Items?: AmazonConnectFullApiSchemaWorkflowList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaProfileIdToBeMergedList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaFieldSourceProfileIds = {
  AccountNumber?: string;
  AdditionalInformation?: string;
  PartyType?: string;
  BusinessName?: string;
  FirstName?: string;
  MiddleName?: string;
  LastName?: string;
  BirthDate?: string;
  Gender?: string;
  PhoneNumber?: string;
  MobilePhoneNumber?: string;
  HomePhoneNumber?: string;
  BusinessPhoneNumber?: string;
  EmailAddress?: string;
  PersonalEmailAddress?: string;
  BusinessEmailAddress?: string;
  Address?: string;
  ShippingAddress?: string;
  MailingAddress?: string;
  BillingAddress?: string;
  Attributes?: AmazonConnectFullApiSchemaAttributeSourceIdMap;
  ProfileType?: string;
  EngagementPreferences?: string;
};

export type AmazonConnectFullApiSchemaMergeProfilesResponse = {
  Message?: string;
};

export type AmazonConnectFullApiSchemaDomainObjectTypeFields = {
  readonly [key: string]: AmazonConnectFullApiSchemaDomainObjectTypeField | undefined;
};

export type AmazonConnectFullApiSchemaPutDomainObjectTypeResponse = {
  ObjectTypeName?: string;
  Description?: string;
  EncryptionKey?: string;
  Fields?: AmazonConnectFullApiSchemaDomainObjectTypeFields;
  CreatedAt?: string;
  LastUpdatedAt?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaObjectTypeNames = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaFlowDefinition = {
  Description?: string;
  FlowName: string;
  KmsArn: string;
  SourceFlowConfig: AmazonConnectFullApiSchemaSourceFlowConfig;
  Tasks: AmazonConnectFullApiSchemaTasks;
  TriggerConfig: AmazonConnectFullApiSchemaTriggerConfig;
};

export type AmazonConnectFullApiSchemaEventTriggerNames = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaScope = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaPutIntegrationResponse = {
  DomainName: string;
  Uri: string;
  ObjectTypeName?: string;
  CreatedAt: string;
  LastUpdatedAt: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
  ObjectTypeNames?: AmazonConnectFullApiSchemaObjectTypeNames;
  WorkflowId?: string;
  IsUnstructured?: boolean;
  RoleArn?: string;
  EventTriggerNames?: AmazonConnectFullApiSchemaEventTriggerNames;
  Scope?: AmazonConnectFullApiSchemaScope;
};

export type AmazonConnectFullApiSchemaPutProfileObjectResponse = {
  ProfileObjectUniqueKey?: string;
};

export type AmazonConnectFullApiSchemaKeyMap = {
  readonly [key: string]: AmazonConnectFullApiSchemaObjectTypeKeyList | undefined;
};

export type AmazonConnectFullApiSchemaPutProfileObjectTypeResponse = {
  ObjectTypeName: string;
  Description: string;
  TemplateId?: string;
  ExpirationDays?: number;
  EncryptionKey?: string;
  AllowProfileCreation?: boolean;
  SourceLastUpdatedTimestampFormat?: string;
  MaxProfileObjectCount?: number;
  MaxAvailableProfileObjectCount?: number;
  SourcePriority?: number;
  Fields?: AmazonConnectFullApiSchemaFieldMap;
  Keys?: AmazonConnectFullApiSchemaKeyMap;
  CreatedAt?: string;
  LastUpdatedAt?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaAdditionalSearchKeysList = ReadonlyArray<AmazonConnectFullApiSchemaAdditionalSearchKey>;

export type AmazonConnectFullApiSchemaLogicalOperator = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaSearchProfilesResponse = {
  Items?: AmazonConnectFullApiSchemaProfileList;
  NextToken?: string;
};

export type AmazonConnectFullApiSchemaStartRecommenderResponse = {};

export type AmazonConnectFullApiSchemaStartUploadJobResponse = {};

export type AmazonConnectFullApiSchemaStopRecommenderResponse = {};

export type AmazonConnectFullApiSchemaStopUploadJobResponse = {};

export type AmazonConnectFullApiSchemaTagResourceResponse2 = {};

export type AmazonConnectFullApiSchemaTagKeyList7 = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaUntagResourceResponse2 = {};

export type AmazonConnectFullApiSchemaUpdateCalculatedAttributeDefinitionResponse = {
  CalculatedAttributeName?: string;
  DisplayName?: string;
  Description?: string;
  CreatedAt?: string;
  LastUpdatedAt?: string;
  Statistic?: AmazonConnectFullApiSchemaStatistic;
  Conditions?: AmazonConnectFullApiSchemaConditions;
  AttributeDetails?: AmazonConnectFullApiSchemaAttributeDetails;
  UseHistoricalData?: boolean;
  Status?: AmazonConnectFullApiSchemaReadinessStatus;
  Readiness?: AmazonConnectFullApiSchemaReadiness;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaUpdateDomainResponse = {
  DomainName: string;
  DefaultExpirationDays?: number;
  DefaultEncryptionKey?: string;
  DeadLetterQueueUrl?: string;
  Matching?: AmazonConnectFullApiSchemaMatchingResponse;
  RuleBasedMatching?: AmazonConnectFullApiSchemaRuleBasedMatchingResponse;
  DataStore?: AmazonConnectFullApiSchemaDataStoreResponse;
  CreatedAt: string;
  LastUpdatedAt: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaUpdateDomainLayoutResponse = {
  LayoutDefinitionName?: string;
  Description?: string;
  DisplayName?: string;
  IsDefault?: boolean;
  LayoutType?: AmazonConnectFullApiSchemaLayoutType;
  Layout?: string;
  Version?: string;
  CreatedAt?: string;
  LastUpdatedAt?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaUpdateEventTriggerResponse = {
  EventTriggerName?: string;
  ObjectTypeName?: string;
  Description?: string;
  EventTriggerConditions?: AmazonConnectFullApiSchemaEventTriggerConditions;
  SegmentFilter?: string;
  EventTriggerLimits?: AmazonConnectFullApiSchemaEventTriggerLimits;
  CreatedAt?: string;
  LastUpdatedAt?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaUpdateAddress = {
  Address1?: string;
  Address2?: string;
  Address3?: string;
  Address4?: string;
  City?: string;
  County?: string;
  State?: string;
  Province?: string;
  Country?: string;
  PostalCode?: string;
};

export type AmazonConnectFullApiSchemaUpdateAttributes = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaUpdateProfileResponse = {
  ProfileId: string;
};

export type AmazonConnectFullApiSchemaUpdateRecommenderResponse = {
  RecommenderName: string;
};

export type AmazonConnectFullApiSchemaActivateMessageTemplateResponse = {
  messageTemplateArn: string;
  messageTemplateId: string;
  versionNumber: number;
};

export type AmazonConnectFullApiSchemaAIAgentConfiguration = {
  manualSearchAIAgentConfiguration: AmazonConnectFullApiSchemaManualSearchAIAgentConfiguration;
} | {
  answerRecommendationAIAgentConfiguration: AmazonConnectFullApiSchemaAnswerRecommendationAIAgentConfiguration;
} | {
  selfServiceAIAgentConfiguration: AmazonConnectFullApiSchemaSelfServiceAIAgentConfiguration;
} | {
  emailResponseAIAgentConfiguration: AmazonConnectFullApiSchemaEmailResponseAIAgentConfiguration;
} | {
  emailOverviewAIAgentConfiguration: AmazonConnectFullApiSchemaEmailOverviewAIAgentConfiguration;
} | {
  emailGenerativeAnswerAIAgentConfiguration: AmazonConnectFullApiSchemaEmailGenerativeAnswerAIAgentConfiguration;
} | {
  orchestrationAIAgentConfiguration: AmazonConnectFullApiSchemaOrchestrationAIAgentConfiguration;
} | {
  noteTakingAIAgentConfiguration: AmazonConnectFullApiSchemaNoteTakingAIAgentConfiguration;
} | {
  caseSummarizationAIAgentConfiguration: AmazonConnectFullApiSchemaCaseSummarizationAIAgentConfiguration;
};

export type AmazonConnectFullApiSchemaTags2 = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaCreateAIAgentResponse = {
  aiAgent?: AmazonConnectFullApiSchemaAIAgentData;
};

export type AmazonConnectFullApiSchemaCreateAIAgentVersionResponse = {
  aiAgent?: AmazonConnectFullApiSchemaAIAgentData;
  versionNumber?: number;
};

export type AmazonConnectFullApiSchemaAIGuardrailTopicPolicyConfig = {
  topicsConfig: AmazonConnectFullApiSchemaGuardrailTopicsConfig;
};

export type AmazonConnectFullApiSchemaAIGuardrailContentPolicyConfig = {
  filtersConfig: AmazonConnectFullApiSchemaGuardrailContentFiltersConfig;
};

export type AmazonConnectFullApiSchemaAIGuardrailWordPolicyConfig = {
  wordsConfig?: AmazonConnectFullApiSchemaGuardrailWordsConfig;
  managedWordListsConfig?: AmazonConnectFullApiSchemaGuardrailManagedWordListsConfig;
};

export type AmazonConnectFullApiSchemaAIGuardrailSensitiveInformationPolicyConfig = {
  piiEntitiesConfig?: AmazonConnectFullApiSchemaGuardrailPiiEntitiesConfig;
  regexesConfig?: AmazonConnectFullApiSchemaGuardrailRegexesConfig;
};

export type AmazonConnectFullApiSchemaAIGuardrailContextualGroundingPolicyConfig = {
  filtersConfig: AmazonConnectFullApiSchemaGuardrailContextualGroundingFiltersConfig;
};

export type AmazonConnectFullApiSchemaCreateAIGuardrailResponse = {
  aiGuardrail?: AmazonConnectFullApiSchemaAIGuardrailData;
};

export type AmazonConnectFullApiSchemaCreateAIGuardrailVersionResponse = {
  aiGuardrail?: AmazonConnectFullApiSchemaAIGuardrailData;
  versionNumber?: number;
};

export type AmazonConnectFullApiSchemaAIPromptTemplateConfiguration = {
  textFullAIPromptEditTemplateConfiguration: AmazonConnectFullApiSchemaTextFullAIPromptEditTemplateConfiguration;
};

export type AmazonConnectFullApiSchemaAIPromptInferenceConfiguration = {
  temperature?: number;
  topP?: number;
  topK?: number;
  maxTokensToSample?: number;
};

export type AmazonConnectFullApiSchemaCreateAIPromptResponse = {
  aiPrompt?: AmazonConnectFullApiSchemaAIPromptData;
};

export type AmazonConnectFullApiSchemaCreateAIPromptVersionResponse = {
  aiPrompt?: AmazonConnectFullApiSchemaAIPromptData;
  versionNumber?: number;
};

export type AmazonConnectFullApiSchemaServerSideEncryptionConfiguration = {
  kmsKeyId?: string;
};

export type AmazonConnectFullApiSchemaCreateAssistantResponse = {
  assistant?: AmazonConnectFullApiSchemaAssistantData;
};

export type AmazonConnectFullApiSchemaAssistantAssociationInputData = {
  knowledgeBaseId: string;
} | {
  externalBedrockKnowledgeBaseConfig: AmazonConnectFullApiSchemaExternalBedrockKnowledgeBaseConfig;
};

export type AmazonConnectFullApiSchemaCreateAssistantAssociationResponse = {
  assistantAssociation?: AmazonConnectFullApiSchemaAssistantAssociationData;
};

export type AmazonConnectFullApiSchemaContentMetadata = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaCreateContentResponse = {
  content?: AmazonConnectFullApiSchemaContentData;
};

export type AmazonConnectFullApiSchemaContentAssociationContents = {
  amazonConnectGuideAssociation: AmazonConnectFullApiSchemaAmazonConnectGuideAssociationData;
};

export type AmazonConnectFullApiSchemaCreateContentAssociationResponse = {
  contentAssociation?: AmazonConnectFullApiSchemaContentAssociationData;
};

export type AmazonConnectFullApiSchemaSourceConfiguration = {
  appIntegrations: AmazonConnectFullApiSchemaAppIntegrationsConfiguration;
} | {
  managedSourceConfiguration: AmazonConnectFullApiSchemaManagedSourceConfiguration;
};

export type AmazonConnectFullApiSchemaRenderingConfiguration = {
  templateUri?: string;
};

export type AmazonConnectFullApiSchemaVectorIngestionConfiguration = {
  chunkingConfiguration?: AmazonConnectFullApiSchemaChunkingConfiguration;
  parsingConfiguration?: AmazonConnectFullApiSchemaParsingConfiguration;
};

export type AmazonConnectFullApiSchemaCreateKnowledgeBaseResponse = {
  knowledgeBase?: AmazonConnectFullApiSchemaKnowledgeBaseData;
};

export type AmazonConnectFullApiSchemaMessageTemplateContentProvider = {
  email: AmazonConnectFullApiSchemaEmailMessageTemplateContent;
} | {
  sms: AmazonConnectFullApiSchemaSMSMessageTemplateContent;
} | {
  whatsApp: AmazonConnectFullApiSchemaWhatsAppMessageTemplateContent;
} | {
  push: AmazonConnectFullApiSchemaPushMessageTemplateContent;
};

export type AmazonConnectFullApiSchemaMessageTemplateSourceConfiguration = {
  whatsApp: AmazonConnectFullApiSchemaWhatsAppMessageTemplateSourceConfiguration;
};

export type AmazonConnectFullApiSchemaMessageTemplateAttributes = {
  systemAttributes?: AmazonConnectFullApiSchemaSystemAttributes;
  agentAttributes?: AmazonConnectFullApiSchemaAgentAttributes;
  customerProfileAttributes?: AmazonConnectFullApiSchemaCustomerProfileAttributes;
  customAttributes?: AmazonConnectFullApiSchemaCustomAttributes;
};

export type AmazonConnectFullApiSchemaGroupingConfiguration = {
  criteria?: string;
  values?: AmazonConnectFullApiSchemaGroupingValues;
};

export type AmazonConnectFullApiSchemaCreateMessageTemplateResponse = {
  messageTemplate?: AmazonConnectFullApiSchemaMessageTemplateData;
};

export type AmazonConnectFullApiSchemaCreateMessageTemplateAttachmentResponse = {
  attachment?: AmazonConnectFullApiSchemaMessageTemplateAttachment;
};

export type AmazonConnectFullApiSchemaCreateMessageTemplateVersionResponse = {
  messageTemplate?: AmazonConnectFullApiSchemaExtendedMessageTemplateData;
};

export type AmazonConnectFullApiSchemaQuickResponseDataProvider = {
  content: string;
};

export type AmazonConnectFullApiSchemaChannels = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaCreateQuickResponseResponse = {
  quickResponse?: AmazonConnectFullApiSchemaQuickResponseData;
};

export type AmazonConnectFullApiSchemaTagFilter = {
  tagCondition: AmazonConnectFullApiSchemaTagCondition;
} | {
  andConditions: AmazonConnectFullApiSchemaAndConditions;
} | {
  orConditions: AmazonConnectFullApiSchemaOrConditions;
};

export type AmazonConnectFullApiSchemaAIAgentConfigurationMap = {
  readonly [key: string]: AmazonConnectFullApiSchemaAIAgentConfigurationData | undefined;
};

export type AmazonConnectFullApiSchemaOrchestratorConfigurationList = ReadonlyArray<AmazonConnectFullApiSchemaOrchestratorConfigurationEntry>;

export type AmazonConnectFullApiSchemaCreateSessionResponse = {
  session?: AmazonConnectFullApiSchemaSessionData;
};

export type AmazonConnectFullApiSchemaDeactivateMessageTemplateResponse = {
  messageTemplateArn: string;
  messageTemplateId: string;
  versionNumber: number;
};

export type AmazonConnectFullApiSchemaDeleteAIAgentResponse = {};

export type AmazonConnectFullApiSchemaDeleteAIAgentVersionResponse = {};

export type AmazonConnectFullApiSchemaDeleteAIGuardrailResponse = {};

export type AmazonConnectFullApiSchemaDeleteAIGuardrailVersionResponse = {};

export type AmazonConnectFullApiSchemaDeleteAIPromptResponse = {};

export type AmazonConnectFullApiSchemaDeleteAIPromptVersionResponse = {};

export type AmazonConnectFullApiSchemaDeleteAssistantResponse = {};

export type AmazonConnectFullApiSchemaDeleteAssistantAssociationResponse = {};

export type AmazonConnectFullApiSchemaDeleteContentResponse = {};

export type AmazonConnectFullApiSchemaDeleteContentAssociationResponse = {};

export type AmazonConnectFullApiSchemaDeleteImportJobResponse = {};

export type AmazonConnectFullApiSchemaDeleteKnowledgeBaseResponse = {};

export type AmazonConnectFullApiSchemaDeleteMessageTemplateResponse = {};

export type AmazonConnectFullApiSchemaDeleteMessageTemplateAttachmentResponse = {};

export type AmazonConnectFullApiSchemaDeleteQuickResponseResponse = {};

export type AmazonConnectFullApiSchemaGetAIAgentResponse = {
  aiAgent?: AmazonConnectFullApiSchemaAIAgentData;
  versionNumber?: number;
};

export type AmazonConnectFullApiSchemaGetAIGuardrailResponse = {
  aiGuardrail?: AmazonConnectFullApiSchemaAIGuardrailData;
  versionNumber?: number;
};

export type AmazonConnectFullApiSchemaGetAIPromptResponse = {
  aiPrompt?: AmazonConnectFullApiSchemaAIPromptData;
  versionNumber?: number;
};

export type AmazonConnectFullApiSchemaGetAssistantResponse = {
  assistant?: AmazonConnectFullApiSchemaAssistantData;
};

export type AmazonConnectFullApiSchemaGetAssistantAssociationResponse = {
  assistantAssociation?: AmazonConnectFullApiSchemaAssistantAssociationData;
};

export type AmazonConnectFullApiSchemaGetContentResponse = {
  content?: AmazonConnectFullApiSchemaContentData;
};

export type AmazonConnectFullApiSchemaGetContentAssociationResponse = {
  contentAssociation?: AmazonConnectFullApiSchemaContentAssociationData;
};

export type AmazonConnectFullApiSchemaGetContentSummaryResponse = {
  contentSummary?: AmazonConnectFullApiSchemaContentSummary;
};

export type AmazonConnectFullApiSchemaGetImportJobResponse = {
  importJob?: AmazonConnectFullApiSchemaImportJobData;
};

export type AmazonConnectFullApiSchemaGetKnowledgeBaseResponse = {
  knowledgeBase?: AmazonConnectFullApiSchemaKnowledgeBaseData;
};

export type AmazonConnectFullApiSchemaGetMessageTemplateResponse = {
  messageTemplate?: AmazonConnectFullApiSchemaExtendedMessageTemplateData;
};

export type AmazonConnectFullApiSchemaGetNextMessageResponse = {
  type: "TEXT" | "TOOL_USE_RESULT";
  response: AmazonConnectFullApiSchemaMessageOutput;
  requestMessageId: string;
  conversationState: AmazonConnectFullApiSchemaConversationState;
  nextMessageToken?: string;
  conversationSessionData?: AmazonConnectFullApiSchemaRuntimeSessionDataList;
  chunkedResponseTerminated?: boolean;
};

export type AmazonConnectFullApiSchemaGetQuickResponseResponse = {
  quickResponse?: AmazonConnectFullApiSchemaQuickResponseData;
};

export type AmazonConnectFullApiSchemaGetRecommendationsResponse = {
  recommendations: AmazonConnectFullApiSchemaRecommendationList;
  triggers?: AmazonConnectFullApiSchemaRecommendationTriggerList;
};

export type AmazonConnectFullApiSchemaGetSessionResponse = {
  session?: AmazonConnectFullApiSchemaSessionData;
};

export type AmazonConnectFullApiSchemaListAIAgentVersionsResponse = {
  aiAgentVersionSummaries: AmazonConnectFullApiSchemaAIAgentVersionSummariesList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListAIAgentsResponse = {
  aiAgentSummaries: AmazonConnectFullApiSchemaAIAgentSummaryList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListAIGuardrailVersionsResponse = {
  aiGuardrailVersionSummaries: AmazonConnectFullApiSchemaAIGuardrailVersionSummariesList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListAIGuardrailsResponse = {
  aiGuardrailSummaries: AmazonConnectFullApiSchemaAIGuardrailSummariesList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListAIPromptVersionsResponse = {
  aiPromptVersionSummaries: AmazonConnectFullApiSchemaAIPromptVersionSummariesList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListAIPromptsResponse = {
  aiPromptSummaries: AmazonConnectFullApiSchemaAIPromptSummaryList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListAssistantAssociationsResponse = {
  assistantAssociationSummaries: AmazonConnectFullApiSchemaAssistantAssociationSummaryList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListAssistantsResponse = {
  assistantSummaries: AmazonConnectFullApiSchemaAssistantList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListContentAssociationsResponse = {
  contentAssociationSummaries: AmazonConnectFullApiSchemaContentAssociationSummaryList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListContentsResponse = {
  contentSummaries: AmazonConnectFullApiSchemaContentSummaryList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListImportJobsResponse = {
  importJobSummaries: AmazonConnectFullApiSchemaImportJobList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListKnowledgeBasesResponse = {
  knowledgeBaseSummaries: AmazonConnectFullApiSchemaKnowledgeBaseList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListMessageTemplateVersionsResponse = {
  messageTemplateVersionSummaries: AmazonConnectFullApiSchemaMessageTemplateVersionSummaryList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListMessageTemplatesResponse = {
  messageTemplateSummaries: AmazonConnectFullApiSchemaMessageTemplateSummaryList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListMessagesResponse = {
  messages: AmazonConnectFullApiSchemaMessageList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListModelsResponse = {
  modelSummaries: AmazonConnectFullApiSchemaModelSummaryList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListQuickResponsesResponse = {
  quickResponseSummaries: AmazonConnectFullApiSchemaQuickResponseSummaryList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListSpansResponse = {
  spans: AmazonConnectFullApiSchemaSpanList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListTagsForResourceResponse7 = {
  tags?: AmazonConnectFullApiSchemaTags2;
};

export type AmazonConnectFullApiSchemaRecommendationIdList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaNotifyRecommendationsReceivedResponse = {
  recommendationIds?: AmazonConnectFullApiSchemaRecommendationIdList;
  errors?: AmazonConnectFullApiSchemaNotifyRecommendationsReceivedErrorList;
};

export type AmazonConnectFullApiSchemaContentFeedbackData = {
  generativeContentFeedbackData: AmazonConnectFullApiSchemaGenerativeContentFeedbackData;
};

export type AmazonConnectFullApiSchemaPutFeedbackResponse = {
  assistantId: string;
  assistantArn: string;
  targetId: string;
  targetType: "RECOMMENDATION" | "RESULT" | "MESSAGE";
  contentFeedback: AmazonConnectFullApiSchemaContentFeedbackData;
};

export type AmazonConnectFullApiSchemaQueryConditionExpression = ReadonlyArray<AmazonConnectFullApiSchemaQueryCondition>;

export type AmazonConnectFullApiSchemaQueryInputData = {
  queryTextInputData: AmazonConnectFullApiSchemaQueryTextInputData;
} | {
  intentInputData: AmazonConnectFullApiSchemaIntentInputData;
} | {
  caseSummarizationInputData: AmazonConnectFullApiSchemaCaseSummarizationInputData;
};

export type AmazonConnectFullApiSchemaQueryAssistantResponse = {
  results: AmazonConnectFullApiSchemaQueryResultsList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaRemoveAssistantAIAgentResponse = {};

export type AmazonConnectFullApiSchemaRemoveKnowledgeBaseTemplateUriResponse = {};

export type AmazonConnectFullApiSchemaRenderMessageTemplateResponse = {
  content?: AmazonConnectFullApiSchemaMessageTemplateContentProvider;
  sourceConfigurationSummary?: AmazonConnectFullApiSchemaMessageTemplateSourceConfigurationSummary;
  attributesNotInterpolated?: AmazonConnectFullApiSchemaMessageTemplateAttributeKeyList;
  attachments?: AmazonConnectFullApiSchemaMessageTemplateAttachmentList;
};

export type AmazonConnectFullApiSchemaRetrievalConfiguration = {
  knowledgeSource: AmazonConnectFullApiSchemaKnowledgeSource;
  filter?: AmazonConnectFullApiSchemaRetrievalFilterConfiguration;
  numberOfResults?: number;
  overrideKnowledgeBaseSearchType?: "HYBRID" | "SEMANTIC";
};

export type AmazonConnectFullApiSchemaRetrieveResponse = {
  results: AmazonConnectFullApiSchemaRetrieveResultList;
};

export type AmazonConnectFullApiSchemaSearchExpression = {
  filters: AmazonConnectFullApiSchemaFilterList;
};

export type AmazonConnectFullApiSchemaSearchContentResponse = {
  contentSummaries: AmazonConnectFullApiSchemaContentSummaryList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaMessageTemplateSearchExpression = {
  queries?: AmazonConnectFullApiSchemaMessageTemplateQueryFieldList;
  filters?: AmazonConnectFullApiSchemaMessageTemplateFilterFieldList;
  orderOnField?: AmazonConnectFullApiSchemaMessageTemplateOrderField;
};

export type AmazonConnectFullApiSchemaSearchMessageTemplatesResponse = {
  results: AmazonConnectFullApiSchemaMessageTemplateSearchResultsList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaQuickResponseSearchExpression = {
  queries?: AmazonConnectFullApiSchemaQuickResponseQueryFieldList;
  filters?: AmazonConnectFullApiSchemaQuickResponseFilterFieldList;
  orderOnField?: AmazonConnectFullApiSchemaQuickResponseOrderField;
};

export type AmazonConnectFullApiSchemaContactAttributes = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaSearchQuickResponsesResponse = {
  results: AmazonConnectFullApiSchemaQuickResponseSearchResultsList;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaSearchSessionsResponse = {
  sessionSummaries: AmazonConnectFullApiSchemaSessionSummaries;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaMessageInput = {
  value: AmazonConnectFullApiSchemaMessageData;
};

export type AmazonConnectFullApiSchemaConversationContext = {
  selfServiceConversationHistory: AmazonConnectFullApiSchemaSelfServiceConversationHistoryList;
};

export type AmazonConnectFullApiSchemaMessageConfiguration = {
  generateFillerMessage?: boolean;
  generateChunkedMessage?: boolean;
};

export type AmazonConnectFullApiSchemaMessageMetadata = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaSendMessageResponse2 = {
  requestMessageId: string;
  configuration?: AmazonConnectFullApiSchemaMessageConfiguration;
  nextMessageToken: string;
};

export type AmazonConnectFullApiSchemaStartContentUploadResponse = {
  uploadId: string;
  url: string;
  urlExpiry: string;
  headersToInclude: AmazonConnectFullApiSchemaHeaders;
};

export type AmazonConnectFullApiSchemaExternalSourceConfiguration = {
  source: "AMAZON_CONNECT";
  configuration: AmazonConnectFullApiSchemaConfiguration;
};

export type AmazonConnectFullApiSchemaStartImportJobResponse = {
  importJob?: AmazonConnectFullApiSchemaImportJobData;
};

export type AmazonConnectFullApiSchemaTagResourceResponse3 = {};

export type AmazonConnectFullApiSchemaTagKeyList8 = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaUntagResourceResponse3 = {};

export type AmazonConnectFullApiSchemaUpdateAIAgentResponse = {
  aiAgent?: AmazonConnectFullApiSchemaAIAgentData;
};

export type AmazonConnectFullApiSchemaUpdateAIGuardrailResponse = {
  aiGuardrail?: AmazonConnectFullApiSchemaAIGuardrailData;
};

export type AmazonConnectFullApiSchemaUpdateAIPromptResponse = {
  aiPrompt?: AmazonConnectFullApiSchemaAIPromptData;
};

export type AmazonConnectFullApiSchemaAIAgentConfigurationData = {
  aiAgentId: string;
};

export type AmazonConnectFullApiSchemaUpdateAssistantAIAgentResponse = {
  assistant?: AmazonConnectFullApiSchemaAssistantData;
};

export type AmazonConnectFullApiSchemaUpdateContentResponse = {
  content?: AmazonConnectFullApiSchemaContentData;
};

export type AmazonConnectFullApiSchemaUpdateKnowledgeBaseTemplateUriResponse = {
  knowledgeBase?: AmazonConnectFullApiSchemaKnowledgeBaseData;
};

export type AmazonConnectFullApiSchemaUpdateMessageTemplateResponse = {
  messageTemplate?: AmazonConnectFullApiSchemaMessageTemplateData;
};

export type AmazonConnectFullApiSchemaUpdateMessageTemplateMetadataResponse = {
  messageTemplate?: AmazonConnectFullApiSchemaMessageTemplateData;
};

export type AmazonConnectFullApiSchemaUpdateQuickResponseResponse = {
  quickResponse?: AmazonConnectFullApiSchemaQuickResponseData;
};

export type AmazonConnectFullApiSchemaUpdateSessionResponse = {
  session?: AmazonConnectFullApiSchemaSessionData;
};

export type AmazonConnectFullApiSchemaRuntimeSessionDataList = ReadonlyArray<AmazonConnectFullApiSchemaRuntimeSessionData>;

export type AmazonConnectFullApiSchemaUpdateSessionDataResponse = {
  sessionArn: string;
  sessionId: string;
  namespace: "Custom";
  data: AmazonConnectFullApiSchemaRuntimeSessionDataList;
};

export type AmazonConnectFullApiSchemaTags3 = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaServerSideEncryptionConfiguration2 = {
  kmsKeyId?: string;
};

export type AmazonConnectFullApiSchemaCreateAssistantResponse2 = {
  assistant?: AmazonConnectFullApiSchemaAssistantData2;
};

export type AmazonConnectFullApiSchemaAssistantAssociationInputData2 = {
  knowledgeBaseId: string;
};

export type AmazonConnectFullApiSchemaCreateAssistantAssociationResponse2 = {
  assistantAssociation?: AmazonConnectFullApiSchemaAssistantAssociationData2;
};

export type AmazonConnectFullApiSchemaContentMetadata2 = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaCreateContentResponse2 = {
  content?: AmazonConnectFullApiSchemaContentData2;
};

export type AmazonConnectFullApiSchemaSourceConfiguration2 = {
  appIntegrations: AmazonConnectFullApiSchemaAppIntegrationsConfiguration2;
};

export type AmazonConnectFullApiSchemaRenderingConfiguration2 = {
  templateUri?: string;
};

export type AmazonConnectFullApiSchemaCreateKnowledgeBaseResponse2 = {
  knowledgeBase?: AmazonConnectFullApiSchemaKnowledgeBaseData2;
};

export type AmazonConnectFullApiSchemaQuickResponseDataProvider2 = {
  content: string;
};

export type AmazonConnectFullApiSchemaGroupingConfiguration2 = {
  criteria?: string;
  values?: AmazonConnectFullApiSchemaGroupingValues2;
};

export type AmazonConnectFullApiSchemaChannels2 = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaCreateQuickResponseResponse2 = {
  quickResponse?: AmazonConnectFullApiSchemaQuickResponseData2;
};

export type AmazonConnectFullApiSchemaCreateSessionResponse2 = {
  session?: AmazonConnectFullApiSchemaSessionData2;
};

export type AmazonConnectFullApiSchemaDeleteAssistantResponse2 = {};

export type AmazonConnectFullApiSchemaDeleteAssistantAssociationResponse2 = {};

export type AmazonConnectFullApiSchemaDeleteContentResponse2 = {};

export type AmazonConnectFullApiSchemaDeleteImportJobResponse2 = {};

export type AmazonConnectFullApiSchemaDeleteKnowledgeBaseResponse2 = {};

export type AmazonConnectFullApiSchemaDeleteQuickResponseResponse2 = {};

export type AmazonConnectFullApiSchemaGetAssistantResponse2 = {
  assistant?: AmazonConnectFullApiSchemaAssistantData2;
};

export type AmazonConnectFullApiSchemaGetAssistantAssociationResponse2 = {
  assistantAssociation?: AmazonConnectFullApiSchemaAssistantAssociationData2;
};

export type AmazonConnectFullApiSchemaGetContentResponse2 = {
  content?: AmazonConnectFullApiSchemaContentData2;
};

export type AmazonConnectFullApiSchemaGetContentSummaryResponse2 = {
  contentSummary?: AmazonConnectFullApiSchemaContentSummary2;
};

export type AmazonConnectFullApiSchemaGetImportJobResponse2 = {
  importJob?: AmazonConnectFullApiSchemaImportJobData2;
};

export type AmazonConnectFullApiSchemaGetKnowledgeBaseResponse2 = {
  knowledgeBase?: AmazonConnectFullApiSchemaKnowledgeBaseData2;
};

export type AmazonConnectFullApiSchemaGetQuickResponseResponse2 = {
  quickResponse?: AmazonConnectFullApiSchemaQuickResponseData2;
};

export type AmazonConnectFullApiSchemaGetRecommendationsResponse2 = {
  recommendations: AmazonConnectFullApiSchemaRecommendationList2;
  triggers?: AmazonConnectFullApiSchemaRecommendationTriggerList2;
};

export type AmazonConnectFullApiSchemaGetSessionResponse2 = {
  session?: AmazonConnectFullApiSchemaSessionData2;
};

export type AmazonConnectFullApiSchemaListAssistantAssociationsResponse2 = {
  assistantAssociationSummaries: AmazonConnectFullApiSchemaAssistantAssociationSummaryList2;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListAssistantsResponse2 = {
  assistantSummaries: AmazonConnectFullApiSchemaAssistantList2;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListContentsResponse2 = {
  contentSummaries: AmazonConnectFullApiSchemaContentSummaryList2;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListImportJobsResponse2 = {
  importJobSummaries: AmazonConnectFullApiSchemaImportJobList2;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListKnowledgeBasesResponse2 = {
  knowledgeBaseSummaries: AmazonConnectFullApiSchemaKnowledgeBaseList2;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListQuickResponsesResponse2 = {
  quickResponseSummaries: AmazonConnectFullApiSchemaQuickResponseSummaryList2;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaListTagsForResourceResponse8 = {
  tags?: AmazonConnectFullApiSchemaTags3;
};

export type AmazonConnectFullApiSchemaRecommendationIdList2 = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaNotifyRecommendationsReceivedResponse2 = {
  recommendationIds?: AmazonConnectFullApiSchemaRecommendationIdList2;
  errors?: AmazonConnectFullApiSchemaNotifyRecommendationsReceivedErrorList2;
};

export type AmazonConnectFullApiSchemaQueryAssistantResponse2 = {
  results: AmazonConnectFullApiSchemaQueryResultsList2;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaRemoveKnowledgeBaseTemplateUriResponse2 = {};

export type AmazonConnectFullApiSchemaSearchExpression2 = {
  filters: AmazonConnectFullApiSchemaFilterList2;
};

export type AmazonConnectFullApiSchemaSearchContentResponse2 = {
  contentSummaries: AmazonConnectFullApiSchemaContentSummaryList2;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaQuickResponseSearchExpression2 = {
  queries?: AmazonConnectFullApiSchemaQuickResponseQueryFieldList2;
  filters?: AmazonConnectFullApiSchemaQuickResponseFilterFieldList2;
  orderOnField?: AmazonConnectFullApiSchemaQuickResponseOrderField2;
};

export type AmazonConnectFullApiSchemaContactAttributes2 = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaSearchQuickResponsesResponse2 = {
  results: AmazonConnectFullApiSchemaQuickResponseSearchResultsList2;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaSearchSessionsResponse2 = {
  sessionSummaries: AmazonConnectFullApiSchemaSessionSummaries2;
  nextToken?: string;
};

export type AmazonConnectFullApiSchemaStartContentUploadResponse2 = {
  uploadId: string;
  url: string;
  urlExpiry: string;
  headersToInclude: AmazonConnectFullApiSchemaHeaders2;
};

export type AmazonConnectFullApiSchemaExternalSourceConfiguration2 = {
  source: "AMAZON_CONNECT";
  configuration: AmazonConnectFullApiSchemaConfiguration2;
};

export type AmazonConnectFullApiSchemaStartImportJobResponse2 = {
  importJob?: AmazonConnectFullApiSchemaImportJobData2;
};

export type AmazonConnectFullApiSchemaTagResourceResponse4 = {};

export type AmazonConnectFullApiSchemaTagKeyList9 = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaUntagResourceResponse4 = {};

export type AmazonConnectFullApiSchemaUpdateContentResponse2 = {
  content?: AmazonConnectFullApiSchemaContentData2;
};

export type AmazonConnectFullApiSchemaUpdateKnowledgeBaseTemplateUriResponse2 = {
  knowledgeBase?: AmazonConnectFullApiSchemaKnowledgeBaseData2;
};

export type AmazonConnectFullApiSchemaUpdateQuickResponseResponse2 = {
  quickResponse?: AmazonConnectFullApiSchemaQuickResponseData2;
};

export type AmazonConnectFullApiSchemaExternalUrlConfig = {
  AccessUrl: string;
  ApprovedOrigins?: AmazonConnectFullApiSchemaApplicationApprovedOrigins;
};

export type AmazonConnectFullApiSchemaSubscription = {
  Event: string;
  Description?: string;
};

export type AmazonConnectFullApiSchemaPublication = {
  Event: string;
  Schema: string;
  Description?: string;
};

export type AmazonConnectFullApiSchemaContactHandling = {
  Scope?: AmazonConnectFullApiSchemaContactHandlingScope;
};

export type AmazonConnectFullApiSchemaIframePermissionList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaFolderList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaFieldsMap = {
  readonly [key: string]: AmazonConnectFullApiSchemaFieldsList | undefined;
};

export type AmazonConnectFullApiSchemaExecutionMode = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaOnDemandConfiguration = {
  StartTime: string;
  EndTime?: string;
};

export type AmazonConnectFullApiSchemaApplicationAssociationsList = ReadonlyArray<AmazonConnectFullApiSchemaApplicationAssociationSummary>;

export type AmazonConnectFullApiSchemaApplicationsList = ReadonlyArray<AmazonConnectFullApiSchemaApplicationSummary>;

export type AmazonConnectFullApiSchemaDataIntegrationAssociationsList = ReadonlyArray<AmazonConnectFullApiSchemaDataIntegrationAssociationSummary>;

export type AmazonConnectFullApiSchemaDataIntegrationsList = ReadonlyArray<AmazonConnectFullApiSchemaDataIntegrationSummary>;

export type AmazonConnectFullApiSchemaEventIntegrationAssociationsList = ReadonlyArray<AmazonConnectFullApiSchemaEventIntegrationAssociation>;

export type AmazonConnectFullApiSchemaEventIntegrationsList = ReadonlyArray<AmazonConnectFullApiSchemaEventIntegration>;

export type AmazonConnectFullApiSchemaParentHoursOfOperationConfig = {
  HoursOfOperationId?: string;
};

export type AmazonConnectFullApiSchemaStorageType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaS3Config = {
  BucketName: string;
  BucketPrefix: string;
  EncryptionConfig?: AmazonConnectFullApiSchemaEncryptionConfig3;
};

export type AmazonConnectFullApiSchemaKinesisVideoStreamConfig = {
  Prefix: string;
  RetentionPeriodHours: number;
  EncryptionConfig: AmazonConnectFullApiSchemaEncryptionConfig3;
};

export type AmazonConnectFullApiSchemaKinesisStreamConfig = {
  StreamArn: string;
};

export type AmazonConnectFullApiSchemaKinesisFirehoseConfig = {
  FirehoseArn: string;
};

export type AmazonConnectFullApiSchemaEmailAddressConfig = {
  EmailAddressId: string;
};

export type AmazonConnectFullApiSchemaRoutingProfileQueueConfig = {
  QueueReference: AmazonConnectFullApiSchemaRoutingProfileQueueReference;
  Priority: number;
  Delay: number;
};

export type AmazonConnectFullApiSchemaRoutingProfileManualAssignmentQueueConfig = {
  QueueReference: AmazonConnectFullApiSchemaRoutingProfileQueueReference;
};

export type AmazonConnectFullApiSchemaSecurityProfileItem = {
  Id?: string;
};

export type AmazonConnectFullApiSchemaUserProficiency = {
  AttributeName: string;
  AttributeValue: string;
  Level: number;
};

export type AmazonConnectFullApiSchemaSuccessfulBatchAssociationSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaSuccessfulBatchAssociationSummary>;

export type AmazonConnectFullApiSchemaFailedBatchAssociationSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaFailedBatchAssociationSummary>;

export type AmazonConnectFullApiSchemaAnalyticsDataAssociationResults = ReadonlyArray<AmazonConnectFullApiSchemaAnalyticsDataAssociationResult>;

export type AmazonConnectFullApiSchemaErrorResults = ReadonlyArray<AmazonConnectFullApiSchemaErrorResult>;

export type AmazonConnectFullApiSchemaDataTableValue = {
  PrimaryValues?: AmazonConnectFullApiSchemaPrimaryValuesSet;
  AttributeName: string;
  Value: string;
  LockVersion?: AmazonConnectFullApiSchemaDataTableLockVersion;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaBatchCreateDataTableValueSuccessResultList = ReadonlyArray<AmazonConnectFullApiSchemaBatchCreateDataTableValueSuccessResult>;

export type AmazonConnectFullApiSchemaBatchCreateDataTableValueFailureResultList = ReadonlyArray<AmazonConnectFullApiSchemaBatchCreateDataTableValueFailureResult>;

export type AmazonConnectFullApiSchemaDataTableDeleteValueIdentifier = {
  PrimaryValues?: AmazonConnectFullApiSchemaPrimaryValuesSet;
  AttributeName: string;
  LockVersion: AmazonConnectFullApiSchemaDataTableLockVersion;
};

export type AmazonConnectFullApiSchemaBatchDeleteDataTableValueSuccessResultList = ReadonlyArray<AmazonConnectFullApiSchemaBatchDeleteDataTableValueSuccessResult>;

export type AmazonConnectFullApiSchemaBatchDeleteDataTableValueFailureResultList = ReadonlyArray<AmazonConnectFullApiSchemaBatchDeleteDataTableValueFailureResult>;

export type AmazonConnectFullApiSchemaDataTableValueIdentifier = {
  PrimaryValues?: AmazonConnectFullApiSchemaPrimaryValuesSet;
  AttributeName: string;
};

export type AmazonConnectFullApiSchemaBatchDescribeDataTableValueSuccessResultList = ReadonlyArray<AmazonConnectFullApiSchemaBatchDescribeDataTableValueSuccessResult>;

export type AmazonConnectFullApiSchemaBatchDescribeDataTableValueFailureResultList = ReadonlyArray<AmazonConnectFullApiSchemaBatchDescribeDataTableValueFailureResult>;

export type AmazonConnectFullApiSchemaAttachedFilesList = ReadonlyArray<AmazonConnectFullApiSchemaAttachedFile>;

export type AmazonConnectFullApiSchemaAttachedFileErrorsList = ReadonlyArray<AmazonConnectFullApiSchemaAttachedFileError>;

export type AmazonConnectFullApiSchemaFlowAssociationSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaFlowAssociationSummary>;

export type AmazonConnectFullApiSchemaContactDataRequest = {
  SystemEndpoint?: AmazonConnectFullApiSchemaEndpoint;
  CustomerEndpoint?: AmazonConnectFullApiSchemaEndpoint;
  RequestIdentifier?: string;
  QueueId?: string;
  Attributes?: AmazonConnectFullApiSchemaAttributes;
  Campaign?: AmazonConnectFullApiSchemaCampaign3;
  OutboundStrategy?: AmazonConnectFullApiSchemaOutboundStrategy;
};

export type AmazonConnectFullApiSchemaSuccessfulRequestList = ReadonlyArray<AmazonConnectFullApiSchemaSuccessfulRequest>;

export type AmazonConnectFullApiSchemaFailedRequestList = ReadonlyArray<AmazonConnectFullApiSchemaFailedRequest>;

export type AmazonConnectFullApiSchemaBatchUpdateDataTableValueSuccessResultList = ReadonlyArray<AmazonConnectFullApiSchemaBatchUpdateDataTableValueSuccessResult>;

export type AmazonConnectFullApiSchemaBatchUpdateDataTableValueFailureResultList = ReadonlyArray<AmazonConnectFullApiSchemaBatchUpdateDataTableValueFailureResult>;

export type AmazonConnectFullApiSchemaReference = {
  Value?: string;
  Type: AmazonConnectFullApiSchemaReferenceType;
  Status?: AmazonConnectFullApiSchemaReferenceStatus;
  Arn?: string;
  StatusReason?: string;
};

export type AmazonConnectFullApiSchemaSegmentAttributeValue = {
  ValueString?: string;
  ValueMap?: AmazonConnectFullApiSchemaSegmentAttributeValueMap;
  ValueInteger?: number;
  ValueList?: AmazonConnectFullApiSchemaSegmentAttributeValueList;
  ValueArn?: string;
};

export type AmazonConnectFullApiSchemaValidationEnum = {
  Strict?: boolean;
  Values?: AmazonConnectFullApiSchemaValidationEnumValues;
};

export type AmazonConnectFullApiSchemaEvaluationFormItem = {
  Section: AmazonConnectFullApiSchemaEvaluationFormSection;
} | {
  Question: AmazonConnectFullApiSchemaEvaluationFormQuestion;
};

export type AmazonConnectFullApiSchemaEvaluationFormScoringMode = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationFormScoringStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationReviewNotificationRecipientList = ReadonlyArray<AmazonConnectFullApiSchemaEvaluationReviewNotificationRecipient>;

export type AmazonConnectFullApiSchemaContactInteractionType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationFormLanguageCode = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaHoursOfOperationConfig = {
  Day: AmazonConnectFullApiSchemaHoursOfOperationDays;
  StartTime: AmazonConnectFullApiSchemaHoursOfOperationTimeSlice;
  EndTime: AmazonConnectFullApiSchemaHoursOfOperationTimeSlice;
};

export type AmazonConnectFullApiSchemaHoursOfOperationOverrideConfig = {
  Day?: AmazonConnectFullApiSchemaOverrideDays;
  StartTime?: AmazonConnectFullApiSchemaOverrideTimeSlice;
  EndTime?: AmazonConnectFullApiSchemaOverrideTimeSlice;
};

export type AmazonConnectFullApiSchemaRecurrencePattern = {
  Frequency: AmazonConnectFullApiSchemaRecurrenceFrequency;
  Interval: number;
  ByMonth?: AmazonConnectFullApiSchemaMonthList;
  ByMonthDay?: AmazonConnectFullApiSchemaMonthDayList;
  ByWeekdayOccurrence?: AmazonConnectFullApiSchemaWeekdayOccurrenceList;
};

export type AmazonConnectFullApiSchemaParticipantRole = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaParticipantCapabilities = {
  Video?: AmazonConnectFullApiSchemaVideoCapability;
  ScreenShare?: AmazonConnectFullApiSchemaScreenShareCapability;
};

export type AmazonConnectFullApiSchemaParticipantTokenCredentials = {
  ParticipantToken?: string;
  Expiry?: string;
};

export type AmazonConnectFullApiSchemaPredefinedAttributeStringValuesList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaQuickConnectType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaUserQuickConnectConfig = {
  UserId: string;
  ContactFlowId: string;
};

export type AmazonConnectFullApiSchemaQueueQuickConnectConfig = {
  QueueId: string;
  ContactFlowId: string;
};

export type AmazonConnectFullApiSchemaPhoneNumberQuickConnectConfig = {
  PhoneNumber: string;
};

export type AmazonConnectFullApiSchemaFlowQuickConnectConfig = {
  ContactFlowId: string;
};

export type AmazonConnectFullApiSchemaMediaConcurrency = {
  Channel: AmazonConnectFullApiSchemaChannel;
  Concurrency: number;
  CrossChannelBehavior?: AmazonConnectFullApiSchemaCrossChannelBehavior;
};

export type AmazonConnectFullApiSchemaRuleAction = {
  ActionType: AmazonConnectFullApiSchemaActionType2;
  TaskAction?: AmazonConnectFullApiSchemaTaskActionDefinition;
  EventBridgeAction?: AmazonConnectFullApiSchemaEventBridgeActionDefinition;
  AssignContactCategoryAction?: AmazonConnectFullApiSchemaAssignContactCategoryActionDefinition;
  SendNotificationAction?: AmazonConnectFullApiSchemaSendNotificationActionDefinition;
  CreateCaseAction?: AmazonConnectFullApiSchemaCreateCaseActionDefinition;
  UpdateCaseAction?: AmazonConnectFullApiSchemaUpdateCaseActionDefinition;
  AssignSlaAction?: AmazonConnectFullApiSchemaAssignSlaActionDefinition;
  EndAssociatedTasksAction?: AmazonConnectFullApiSchemaEndAssociatedTasksActionDefinition;
  SubmitAutoEvaluationAction?: AmazonConnectFullApiSchemaSubmitAutoEvaluationActionDefinition;
};

export type AmazonConnectFullApiSchemaApplication = {
  Namespace?: string;
  ApplicationPermissions?: AmazonConnectFullApiSchemaApplicationPermissions;
  Type?: AmazonConnectFullApiSchemaApplicationType2;
};

export type AmazonConnectFullApiSchemaFlowModule = {
  Type?: AmazonConnectFullApiSchemaFlowModuleType;
  FlowModuleId?: string;
};

export type AmazonConnectFullApiSchemaDataTableAccessControlConfiguration = {
  PrimaryAttributeAccessControlConfiguration?: AmazonConnectFullApiSchemaPrimaryAttributeAccessControlConfigurationItem;
};

export type AmazonConnectFullApiSchemaRequiredTaskTemplateFields = ReadonlyArray<AmazonConnectFullApiSchemaRequiredFieldInfo>;

export type AmazonConnectFullApiSchemaReadOnlyTaskTemplateFields = ReadonlyArray<AmazonConnectFullApiSchemaReadOnlyFieldInfo>;

export type AmazonConnectFullApiSchemaInvisibleTaskTemplateFields = ReadonlyArray<AmazonConnectFullApiSchemaInvisibleFieldInfo>;

export type AmazonConnectFullApiSchemaTaskTemplateDefaultFieldValueList = ReadonlyArray<AmazonConnectFullApiSchemaTaskTemplateDefaultFieldValue>;

export type AmazonConnectFullApiSchemaTaskTemplateField = {
  Id: AmazonConnectFullApiSchemaTaskTemplateFieldIdentifier;
  Description?: string;
  Type?: AmazonConnectFullApiSchemaTaskTemplateFieldType;
  SingleSelectOptions?: AmazonConnectFullApiSchemaSingleSelectOptions;
};

export type AmazonConnectFullApiSchemaTestCaseEntryPointType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaVoiceCallEntryPointParameters = {
  SourcePhoneNumber?: string;
  DestinationPhoneNumber?: string;
  FlowId?: string;
};

export type AmazonConnectFullApiSchemaChatEntryPointParameters = {
  FlowId?: string;
};

export type AmazonConnectFullApiSchemaPhoneType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaAutoAcceptConfig = {
  Channel: AmazonConnectFullApiSchemaChannel;
  AutoAccept: boolean;
  AgentFirstCallbackAutoAccept?: boolean;
};

export type AmazonConnectFullApiSchemaAfterContactWorkConfigPerChannel = {
  Channel: AmazonConnectFullApiSchemaChannel;
  AfterContactWorkConfig: AmazonConnectFullApiSchemaAfterContactWorkConfig;
  AgentFirstCallbackAfterContactWorkConfig?: AmazonConnectFullApiSchemaAfterContactWorkConfig;
};

export type AmazonConnectFullApiSchemaPhoneNumberConfig = {
  Channel: AmazonConnectFullApiSchemaChannel;
  PhoneType: AmazonConnectFullApiSchemaPhoneType;
  PhoneNumber?: string;
};

export type AmazonConnectFullApiSchemaPersistentConnectionConfig = {
  Channel: AmazonConnectFullApiSchemaChannel;
  PersistentConnection: boolean;
};

export type AmazonConnectFullApiSchemaVoiceEnhancementConfig = {
  Channel: AmazonConnectFullApiSchemaChannel;
  VoiceEnhancementMode: AmazonConnectFullApiSchemaVoiceEnhancementMode;
};

export type AmazonConnectFullApiSchemaViewActions = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaView = {
  Id?: string;
  Arn?: string;
  Name?: string;
  Status?: AmazonConnectFullApiSchemaViewStatus;
  Type?: AmazonConnectFullApiSchemaViewType;
  Description?: string;
  Version?: number;
  VersionDescription?: string;
  Content?: AmazonConnectFullApiSchemaViewContent;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  CreatedTime?: string;
  LastModifiedTime?: string;
  ViewContentSha256?: string;
};

export type AmazonConnectFullApiSchemaWorkspaceThemeConfig = {
  Palette?: AmazonConnectFullApiSchemaWorkspaceThemePalette;
  Images?: AmazonConnectFullApiSchemaWorkspaceThemeImages;
  Typography?: AmazonConnectFullApiSchemaWorkspaceThemeTypography;
};

export type AmazonConnectFullApiSchemaAgentStatus = {
  AgentStatusARN?: string;
  AgentStatusId?: string;
  Name?: string;
  Description?: string;
  Type?: AmazonConnectFullApiSchemaAgentStatusType;
  DisplayOrder?: number;
  State?: AmazonConnectFullApiSchemaAgentStatusState;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaAttachedFilesConfiguration = {
  InstanceId: string;
  AttachmentScope: AmazonConnectFullApiSchemaAttachmentScope;
  MaximumSizeLimitInBytes?: number;
  ExtensionConfiguration?: AmazonConnectFullApiSchemaExtensionConfiguration;
  LastModifiedTime?: string;
};

export type AmazonConnectFullApiSchemaAuthenticationProfile = {
  Id?: string;
  Arn?: string;
  Name?: string;
  Description?: string;
  AllowedIps?: AmazonConnectFullApiSchemaIpCidrList;
  BlockedIps?: AmazonConnectFullApiSchemaIpCidrList;
  IsDefault?: boolean;
  CreatedTime?: string;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
  PeriodicSessionDuration?: number;
  MaxSessionDuration?: number;
  SessionInactivityDuration?: number;
  SessionInactivityHandlingEnabled?: boolean;
};

export type AmazonConnectFullApiSchemaContact = {
  Arn?: string;
  Id?: string;
  InitialContactId?: string;
  PreviousContactId?: string;
  ContactAssociationId?: string;
  InitiationMethod?: AmazonConnectFullApiSchemaContactInitiationMethod;
  Name?: string;
  Description?: string;
  Channel?: AmazonConnectFullApiSchemaChannel;
  QueueInfo?: AmazonConnectFullApiSchemaQueueInfo;
  AgentInfo?: AmazonConnectFullApiSchemaAgentInfo;
  InitiationTimestamp?: string;
  DisconnectTimestamp?: string;
  LastUpdateTimestamp?: string;
  LastPausedTimestamp?: string;
  LastResumedTimestamp?: string;
  RingStartTimestamp?: string;
  TotalPauseCount?: number;
  TotalPauseDurationInSeconds?: number;
  ScheduledTimestamp?: string;
  RelatedContactId?: string;
  WisdomInfo?: AmazonConnectFullApiSchemaWisdomInfo;
  CustomerId?: string;
  CustomerEndpoint?: AmazonConnectFullApiSchemaEndpointInfo;
  SystemEndpoint?: AmazonConnectFullApiSchemaEndpointInfo;
  QueueTimeAdjustmentSeconds?: number;
  QueuePriority?: number;
  Tags?: AmazonConnectFullApiSchemaContactTagMap;
  ConnectedToSystemTimestamp?: string;
  RoutingCriteria?: AmazonConnectFullApiSchemaRoutingCriteria;
  Customer?: AmazonConnectFullApiSchemaCustomer;
  Campaign?: AmazonConnectFullApiSchemaCampaign3;
  AnsweringMachineDetectionStatus?: AmazonConnectFullApiSchemaAnsweringMachineDetectionStatus;
  CustomerVoiceActivity?: AmazonConnectFullApiSchemaCustomerVoiceActivity;
  QualityMetrics?: AmazonConnectFullApiSchemaQualityMetrics;
  ChatMetrics?: AmazonConnectFullApiSchemaChatMetrics;
  DisconnectDetails?: AmazonConnectFullApiSchemaDisconnectDetails;
  AdditionalEmailRecipients?: AmazonConnectFullApiSchemaAdditionalEmailRecipients;
  SegmentAttributes?: AmazonConnectFullApiSchemaSegmentAttributes;
  Recordings?: AmazonConnectFullApiSchemaRecordings;
  DisconnectReason?: string;
  ContactEvaluations?: AmazonConnectFullApiSchemaContactEvaluations;
  TaskTemplateInfo?: AmazonConnectFullApiSchemaTaskTemplateInfoV2;
  ContactDetails?: AmazonConnectFullApiSchemaContactDetails;
  OutboundStrategy?: AmazonConnectFullApiSchemaOutboundStrategy;
  Attributes?: AmazonConnectFullApiSchemaAttributes;
  NextContacts?: AmazonConnectFullApiSchemaNextContacts;
  GlobalResiliencyMetadata?: AmazonConnectFullApiSchemaGlobalResiliencyMetadata;
};

export type AmazonConnectFullApiSchemaEvaluation = {
  EvaluationId: string;
  EvaluationArn: string;
  Metadata: AmazonConnectFullApiSchemaEvaluationMetadata;
  Answers: AmazonConnectFullApiSchemaEvaluationAnswersOutputMap;
  Notes: AmazonConnectFullApiSchemaEvaluationNotesMap;
  Status: AmazonConnectFullApiSchemaEvaluationStatus;
  Scores?: AmazonConnectFullApiSchemaEvaluationScoresMap;
  CreatedTime: string;
  LastModifiedTime: string;
  EvaluationType?: AmazonConnectFullApiSchemaEvaluationType;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};

export type AmazonConnectFullApiSchemaEvaluationFormContent = {
  EvaluationFormVersion: number;
  EvaluationFormId: string;
  EvaluationFormArn: string;
  Title: string;
  Description?: string;
  Items: AmazonConnectFullApiSchemaEvaluationFormItemsList;
  ScoringStrategy?: AmazonConnectFullApiSchemaEvaluationFormScoringStrategy;
  AutoEvaluationConfiguration?: AmazonConnectFullApiSchemaEvaluationFormAutoEvaluationConfiguration;
  TargetConfiguration?: AmazonConnectFullApiSchemaEvaluationFormTargetConfiguration;
  LanguageConfiguration?: AmazonConnectFullApiSchemaEvaluationFormLanguageConfiguration;
  ReviewConfiguration?: AmazonConnectFullApiSchemaEvaluationReviewConfiguration;
};

export type AmazonConnectFullApiSchemaContactFlow = {
  Arn?: string;
  Id?: string;
  Name?: string;
  Type?: AmazonConnectFullApiSchemaContactFlowType;
  State?: AmazonConnectFullApiSchemaContactFlowState;
  Status?: AmazonConnectFullApiSchemaContactFlowStatus;
  Description?: string;
  Content?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  FlowContentSha256?: string;
  Version?: number;
  VersionDescription?: string;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaContactFlowModule = {
  Arn?: string;
  Id?: string;
  Name?: string;
  Content?: string;
  Description?: string;
  State?: AmazonConnectFullApiSchemaContactFlowModuleState;
  Status?: AmazonConnectFullApiSchemaContactFlowModuleStatus;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  FlowModuleContentSha256?: string;
  Version?: number;
  VersionDescription?: string;
  Settings?: string;
  ExternalInvocationConfiguration?: AmazonConnectFullApiSchemaExternalInvocationConfiguration;
};

export type AmazonConnectFullApiSchemaContactFlowModuleAliasInfo = {
  ContactFlowModuleId?: string;
  ContactFlowModuleArn?: string;
  AliasId?: string;
  Version?: number;
  Name?: string;
  Description?: string;
  LastModifiedRegion?: string;
  LastModifiedTime?: string;
};

export type AmazonConnectFullApiSchemaDataTable = {
  Name: string;
  Id: string;
  Arn: string;
  TimeZone: string;
  Description?: string;
  ValueLockLevel?: AmazonConnectFullApiSchemaDataTableLockLevel;
  LockVersion?: AmazonConnectFullApiSchemaDataTableLockVersion;
  Version?: string;
  VersionDescription?: string;
  Status?: AmazonConnectFullApiSchemaDataTableStatus;
  CreatedTime?: string;
  LastModifiedTime: string;
  LastModifiedRegion?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};

export type AmazonConnectFullApiSchemaDataTableAttribute = {
  AttributeId?: string;
  Name: string;
  ValueType: AmazonConnectFullApiSchemaDataTableAttributeValueType;
  Description?: string;
  DataTableId?: string;
  DataTableArn?: string;
  Primary?: boolean;
  Version?: string;
  LockVersion?: AmazonConnectFullApiSchemaDataTableLockVersion;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
  Validation?: AmazonConnectFullApiSchemaValidation;
};

export type AmazonConnectFullApiSchemaAliasConfigurationList = ReadonlyArray<AmazonConnectFullApiSchemaAliasConfiguration>;

export type AmazonConnectFullApiSchemaEvaluationForm = {
  EvaluationFormId: string;
  EvaluationFormVersion: number;
  Locked: boolean;
  EvaluationFormArn: string;
  Title: string;
  Description?: string;
  Status: AmazonConnectFullApiSchemaEvaluationFormVersionStatus;
  Items: AmazonConnectFullApiSchemaEvaluationFormItemsList;
  ScoringStrategy?: AmazonConnectFullApiSchemaEvaluationFormScoringStrategy;
  CreatedTime: string;
  CreatedBy: string;
  LastModifiedTime: string;
  LastModifiedBy: string;
  AutoEvaluationConfiguration?: AmazonConnectFullApiSchemaEvaluationFormAutoEvaluationConfiguration;
  ReviewConfiguration?: AmazonConnectFullApiSchemaEvaluationReviewConfiguration;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  TargetConfiguration?: AmazonConnectFullApiSchemaEvaluationFormTargetConfiguration;
  LanguageConfiguration?: AmazonConnectFullApiSchemaEvaluationFormLanguageConfiguration;
};

export type AmazonConnectFullApiSchemaHoursOfOperation = {
  HoursOfOperationId?: string;
  HoursOfOperationArn?: string;
  Name?: string;
  Description?: string;
  TimeZone?: string;
  Config?: AmazonConnectFullApiSchemaHoursOfOperationConfigList;
  ParentHoursOfOperations?: AmazonConnectFullApiSchemaParentHoursOfOperationsList;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaHoursOfOperationOverride = {
  HoursOfOperationOverrideId?: string;
  HoursOfOperationId?: string;
  HoursOfOperationArn?: string;
  Name?: string;
  Description?: string;
  Config?: AmazonConnectFullApiSchemaHoursOfOperationOverrideConfigList;
  EffectiveFrom?: string;
  EffectiveTill?: string;
  RecurrenceConfig?: AmazonConnectFullApiSchemaRecurrenceConfig;
  OverrideType?: AmazonConnectFullApiSchemaOverrideType;
};

export type AmazonConnectFullApiSchemaInstance = {
  Id?: string;
  Arn?: string;
  IdentityManagementType?: AmazonConnectFullApiSchemaDirectoryType;
  InstanceAlias?: string;
  CreatedTime?: string;
  ServiceRole?: string;
  InstanceStatus?: AmazonConnectFullApiSchemaInstanceStatus;
  StatusReason?: AmazonConnectFullApiSchemaInstanceStatusReason;
  InboundCallsEnabled?: boolean;
  OutboundCallsEnabled?: boolean;
  InstanceAccessUrl?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};

export type AmazonConnectFullApiSchemaReplicationConfiguration = {
  ReplicationStatusSummaryList?: AmazonConnectFullApiSchemaReplicationStatusSummaryList;
  SourceRegion?: string;
  GlobalSignInEndpoint?: string;
};

export type AmazonConnectFullApiSchemaAttribute = {
  AttributeType?: AmazonConnectFullApiSchemaInstanceAttributeType;
  Value?: string;
};

export type AmazonConnectFullApiSchemaNotification = {
  Content?: AmazonConnectFullApiSchemaNotificationContent;
  Id: string;
  Arn: string;
  Priority?: AmazonConnectFullApiSchemaNotificationPriority;
  Recipients?: AmazonConnectFullApiSchemaRecipientList;
  LastModifiedTime: string;
  CreatedAt?: string;
  ExpiresAt?: string;
  LastModifiedRegion?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};

export type AmazonConnectFullApiSchemaClaimedPhoneNumberSummary = {
  PhoneNumberId?: string;
  PhoneNumberArn?: string;
  PhoneNumber?: string;
  PhoneNumberCountryCode?: AmazonConnectFullApiSchemaPhoneNumberCountryCode;
  PhoneNumberType?: AmazonConnectFullApiSchemaPhoneNumberType;
  PhoneNumberDescription?: string;
  TargetArn?: string;
  InstanceId?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  PhoneNumberStatus?: AmazonConnectFullApiSchemaPhoneNumberStatus;
  SourcePhoneNumberArn?: string;
};

export type AmazonConnectFullApiSchemaPredefinedAttribute = {
  Name?: string;
  Values?: AmazonConnectFullApiSchemaPredefinedAttributeValues;
  Purposes?: AmazonConnectFullApiSchemaPredefinedAttributePurposeNameList;
  AttributeConfiguration?: AmazonConnectFullApiSchemaPredefinedAttributeConfiguration;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaPrompt = {
  PromptARN?: string;
  PromptId?: string;
  Name?: string;
  Description?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaQueue = {
  Name?: string;
  QueueArn?: string;
  QueueId?: string;
  Description?: string;
  OutboundCallerConfig?: AmazonConnectFullApiSchemaOutboundCallerConfig;
  OutboundEmailConfig?: AmazonConnectFullApiSchemaOutboundEmailConfig;
  HoursOfOperationId?: string;
  MaxContacts?: number;
  Status?: AmazonConnectFullApiSchemaQueueStatus;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaQuickConnect = {
  QuickConnectARN?: string;
  QuickConnectId?: string;
  Name?: string;
  Description?: string;
  QuickConnectConfig?: AmazonConnectFullApiSchemaQuickConnectConfig;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaRoutingProfile = {
  InstanceId?: string;
  Name?: string;
  RoutingProfileArn?: string;
  RoutingProfileId?: string;
  Description?: string;
  MediaConcurrencies?: AmazonConnectFullApiSchemaMediaConcurrencies;
  DefaultOutboundQueueId?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  NumberOfAssociatedQueues?: number;
  NumberOfAssociatedManualAssignmentQueues?: number;
  NumberOfAssociatedUsers?: number;
  AgentAvailabilityTimer?: AmazonConnectFullApiSchemaAgentAvailabilityTimer;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
  IsDefault?: boolean;
  AssociatedQueueIds?: AmazonConnectFullApiSchemaAssociatedQueueIdList;
  AssociatedManualAssignmentQueueIds?: AmazonConnectFullApiSchemaAssociatedQueueIdList;
};

export type AmazonConnectFullApiSchemaRule = {
  Name: string;
  RuleId: string;
  RuleArn: string;
  TriggerEventSource: AmazonConnectFullApiSchemaRuleTriggerEventSource;
  Function: string;
  Actions: AmazonConnectFullApiSchemaRuleActions;
  PublishStatus: AmazonConnectFullApiSchemaRulePublishStatus;
  CreatedTime: string;
  LastUpdatedTime: string;
  LastUpdatedBy: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};

export type AmazonConnectFullApiSchemaSecurityProfile = {
  Id?: string;
  OrganizationResourceId?: string;
  Arn?: string;
  SecurityProfileName?: string;
  Description?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  AllowedAccessControlTags?: AmazonConnectFullApiSchemaAllowedAccessControlTags;
  TagRestrictedResources?: AmazonConnectFullApiSchemaTagRestrictedResourceList;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
  HierarchyRestrictedResources?: AmazonConnectFullApiSchemaHierarchyRestrictedResourceList;
  AllowedAccessControlHierarchyGroupId?: string;
  GranularAccessControlConfiguration?: AmazonConnectFullApiSchemaGranularAccessControlConfiguration;
};

export type AmazonConnectFullApiSchemaTestCase = {
  Arn?: string;
  Id?: string;
  Name?: string;
  Content?: string;
  EntryPoint?: AmazonConnectFullApiSchemaTestCaseEntryPoint;
  InitializationData?: string;
  Description?: string;
  Status?: AmazonConnectFullApiSchemaTestCaseStatus;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  TestCaseSha256?: string;
};

export type AmazonConnectFullApiSchemaTrafficDistributionGroup = {
  Id?: string;
  Arn?: string;
  Name?: string;
  Description?: string;
  InstanceArn?: string;
  Status?: AmazonConnectFullApiSchemaTrafficDistributionGroupStatus;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  IsDefault?: boolean;
};

export type AmazonConnectFullApiSchemaUser = {
  Id?: string;
  Arn?: string;
  Username?: string;
  IdentityInfo?: AmazonConnectFullApiSchemaUserIdentityInfo;
  PhoneConfig?: AmazonConnectFullApiSchemaUserPhoneConfig;
  DirectoryUserId?: string;
  SecurityProfileIds?: AmazonConnectFullApiSchemaSecurityProfileIds;
  RoutingProfileId?: string;
  HierarchyGroupId?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  AutoAcceptConfigs?: AmazonConnectFullApiSchemaAutoAcceptConfigs;
  AfterContactWorkConfigs?: AmazonConnectFullApiSchemaAfterContactWorkConfigs;
  PhoneNumberConfigs?: AmazonConnectFullApiSchemaPhoneNumberConfigs;
  PersistentConnectionConfigs?: AmazonConnectFullApiSchemaPersistentConnectionConfigs;
  VoiceEnhancementConfigs?: AmazonConnectFullApiSchemaVoiceEnhancementConfigs;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaHierarchyGroup = {
  Id?: string;
  Arn?: string;
  Name?: string;
  LevelId?: string;
  HierarchyPath?: AmazonConnectFullApiSchemaHierarchyPath;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaHierarchyStructure = {
  LevelOne?: AmazonConnectFullApiSchemaHierarchyLevel;
  LevelTwo?: AmazonConnectFullApiSchemaHierarchyLevel;
  LevelThree?: AmazonConnectFullApiSchemaHierarchyLevel;
  LevelFour?: AmazonConnectFullApiSchemaHierarchyLevel;
  LevelFive?: AmazonConnectFullApiSchemaHierarchyLevel;
};

export type AmazonConnectFullApiSchemaVocabulary = {
  Name: string;
  Id: string;
  Arn: string;
  LanguageCode: AmazonConnectFullApiSchemaVocabularyLanguageCode;
  State: AmazonConnectFullApiSchemaVocabularyState;
  LastModifiedTime: string;
  FailureReason?: string;
  Content?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};

export type AmazonConnectFullApiSchemaWorkspace = {
  Visibility?: AmazonConnectFullApiSchemaVisibility;
  Id: string;
  Name: string;
  Arn: string;
  Description?: string;
  Theme?: AmazonConnectFullApiSchemaWorkspaceTheme;
  Title?: string;
  LastModifiedTime: string;
  LastModifiedRegion?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};

export type AmazonConnectFullApiSchemaRoutingProfileQueueReference = {
  QueueId: string;
  Channel: AmazonConnectFullApiSchemaChannel;
};

export type AmazonConnectFullApiSchemaUserProficiencyDisassociate = {
  AttributeName: string;
  AttributeValue: string;
};

export type AmazonConnectFullApiSchemaDataTableValueEvaluationSet = {
  PrimaryValues?: AmazonConnectFullApiSchemaPrimaryValuesSet;
  AttributeNames: AmazonConnectFullApiSchemaAttributeNameList;
};

export type AmazonConnectFullApiSchemaDataTableEvaluatedValueList = ReadonlyArray<AmazonConnectFullApiSchemaDataTableEvaluatedValue>;

export type AmazonConnectFullApiSchemaFileStatusType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaDownloadUrlMetadata = {
  Url?: string;
  UrlExpiry?: string;
};

export type AmazonConnectFullApiSchemaContactMetricInfo = {
  Name: AmazonConnectFullApiSchemaContactMetricName;
};

export type AmazonConnectFullApiSchemaContactMetricResults = ReadonlyArray<AmazonConnectFullApiSchemaContactMetricResult>;

export type AmazonConnectFullApiSchemaQueues = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaChannels3 = ReadonlyArray<AmazonConnectFullApiSchemaChannel>;

export type AmazonConnectFullApiSchemaRoutingProfiles = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaRoutingExpressions = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaAgentStatuses = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaSubtypes = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaValidationTestTypes = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaGrouping = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCurrentMetric = {
  Name?: AmazonConnectFullApiSchemaCurrentMetricName;
  MetricId?: string;
  Unit?: AmazonConnectFullApiSchemaUnit;
};

export type AmazonConnectFullApiSchemaCurrentMetricSortCriteria = {
  SortByMetric?: AmazonConnectFullApiSchemaCurrentMetricName;
  SortOrder?: AmazonConnectFullApiSchemaSortOrder;
};

export type AmazonConnectFullApiSchemaCurrentMetricResults = ReadonlyArray<AmazonConnectFullApiSchemaCurrentMetricResult>;

export type AmazonConnectFullApiSchemaContactFilter = {
  ContactStates?: AmazonConnectFullApiSchemaContactStates;
};

export type AmazonConnectFullApiSchemaAgentsMinOneMaxHundred = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaUserDataHierarchyGroups = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaUserDataList = ReadonlyArray<AmazonConnectFullApiSchemaUserData>;

export type AmazonConnectFullApiSchemaEffectiveHoursOfOperationList = ReadonlyArray<AmazonConnectFullApiSchemaEffectiveHoursOfOperations>;

export type AmazonConnectFullApiSchemaEffectiveOverrideHoursList = ReadonlyArray<AmazonConnectFullApiSchemaEffectiveOverrideHours>;

export type AmazonConnectFullApiSchemaCredentials = {
  AccessToken?: string;
  AccessTokenExpiration?: string;
  RefreshToken?: string;
  RefreshTokenExpiration?: string;
};

export type AmazonConnectFullApiSchemaHistoricalMetric = {
  Name?: AmazonConnectFullApiSchemaHistoricalMetricName;
  Threshold?: AmazonConnectFullApiSchemaThreshold2;
  Statistic?: AmazonConnectFullApiSchemaStatistic2;
  Unit?: AmazonConnectFullApiSchemaUnit;
};

export type AmazonConnectFullApiSchemaHistoricalMetricResults = ReadonlyArray<AmazonConnectFullApiSchemaHistoricalMetricResult>;

export type AmazonConnectFullApiSchemaIntervalPeriod = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaFilterV2 = {
  FilterKey?: string;
  FilterValues?: AmazonConnectFullApiSchemaFilterValueList;
  StringCondition?: AmazonConnectFullApiSchemaFilterV2StringCondition;
};

export type AmazonConnectFullApiSchemaMetricV2 = {
  Name?: string;
  Threshold?: AmazonConnectFullApiSchemaThresholdCollections;
  MetricId?: string;
  MetricFilters?: AmazonConnectFullApiSchemaMetricFiltersV2List;
};

export type AmazonConnectFullApiSchemaMetricResultsV2 = ReadonlyArray<AmazonConnectFullApiSchemaMetricResultV2>;

export type AmazonConnectFullApiSchemaObservationSummary = {
  TotalObservations?: number;
  ObservationsPassed?: number;
  ObservationsFailed?: number;
};

export type AmazonConnectFullApiSchemaAgentStatusType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaAgentStatusSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaAgentStatusSummary>;

export type AmazonConnectFullApiSchemaAnalyticsDataSetsResults = ReadonlyArray<AmazonConnectFullApiSchemaAnalyticsDataSetsResult>;

export type AmazonConnectFullApiSchemaOriginsList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaAssociatedContactSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaAssociatedContactSummary>;

export type AmazonConnectFullApiSchemaAttachedFilesConfigurationSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaAttachedFilesConfigurationSummary>;

export type AmazonConnectFullApiSchemaAuthenticationProfileSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaAuthenticationProfileSummary>;

export type AmazonConnectFullApiSchemaLexBotConfigList = ReadonlyArray<AmazonConnectFullApiSchemaLexBotConfig>;

export type AmazonConnectFullApiSchemaChildHoursOfOperationsList = ReadonlyArray<AmazonConnectFullApiSchemaHoursOfOperationsIdentifier>;

export type AmazonConnectFullApiSchemaEvaluationSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaEvaluationSummary>;

export type AmazonConnectFullApiSchemaContactFlowModuleAliasSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaContactFlowModuleAliasSummary>;

export type AmazonConnectFullApiSchemaContactFlowModuleVersionSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaContactFlowModuleVersionSummary>;

export type AmazonConnectFullApiSchemaContactFlowModulesSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaContactFlowModuleSummary>;

export type AmazonConnectFullApiSchemaContactFlowVersionSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaContactFlowVersionSummary>;

export type AmazonConnectFullApiSchemaContactFlowSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaContactFlowSummary>;

export type AmazonConnectFullApiSchemaReferenceType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaReferenceSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaReferenceSummary>;

export type AmazonConnectFullApiSchemaAttributeList = ReadonlyArray<AmazonConnectFullApiSchemaDataTableAttribute>;

export type AmazonConnectFullApiSchemaPrimaryAttributeValueFilter = {
  AttributeName: string;
  Values: AmazonConnectFullApiSchemaValueList;
};

export type AmazonConnectFullApiSchemaPrimaryValuesList = ReadonlyArray<AmazonConnectFullApiSchemaRecordPrimaryValue>;

export type AmazonConnectFullApiSchemaDataTableValueSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaDataTableValueSummary>;

export type AmazonConnectFullApiSchemaDataTableSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaDataTableSummary>;

export type AmazonConnectFullApiSchemaDefaultVocabularyList = ReadonlyArray<AmazonConnectFullApiSchemaDefaultVocabulary>;

export type AmazonConnectFullApiSchemaSecurityProfiles100 = ReadonlyArray<AmazonConnectFullApiSchemaSecurityProfileItem>;

export type AmazonConnectFullApiSchemaEvaluationFormVersionSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaEvaluationFormVersionSummary>;

export type AmazonConnectFullApiSchemaEvaluationFormSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaEvaluationFormSummary>;

export type AmazonConnectFullApiSchemaHoursOfOperationOverrideList = ReadonlyArray<AmazonConnectFullApiSchemaHoursOfOperationOverride>;

export type AmazonConnectFullApiSchemaHoursOfOperationSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaHoursOfOperationSummary>;

export type AmazonConnectFullApiSchemaAttributesList = ReadonlyArray<AmazonConnectFullApiSchemaAttribute>;

export type AmazonConnectFullApiSchemaInstanceStorageConfigs = ReadonlyArray<AmazonConnectFullApiSchemaInstanceStorageConfig>;

export type AmazonConnectFullApiSchemaInstanceSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaInstanceSummary>;

export type AmazonConnectFullApiSchemaIntegrationAssociationSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaIntegrationAssociationSummary>;

export type AmazonConnectFullApiSchemaFunctionArnsList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaLexBotsList = ReadonlyArray<AmazonConnectFullApiSchemaLexBot>;

export type AmazonConnectFullApiSchemaNotificationSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaNotification>;

export type AmazonConnectFullApiSchemaPhoneNumberSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaPhoneNumberSummary>;

export type AmazonConnectFullApiSchemaListPhoneNumbersSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaListPhoneNumbersSummary>;

export type AmazonConnectFullApiSchemaPredefinedAttributeSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaPredefinedAttributeSummary>;

export type AmazonConnectFullApiSchemaPromptSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaPromptSummary>;

export type AmazonConnectFullApiSchemaEmailAddressMetadataList = ReadonlyArray<AmazonConnectFullApiSchemaEmailAddressSummary>;

export type AmazonConnectFullApiSchemaQuickConnectSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaQuickConnectSummary>;

export type AmazonConnectFullApiSchemaQueueType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaQueueSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaQueueSummary>;

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisSegmentType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisSupportedChannel = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaRealtimeContactAnalysisSegments = ReadonlyArray<AmazonConnectFullApiSchemaRealtimeContactAnalysisSegment>;

export type AmazonConnectFullApiSchemaRoutingProfileManualAssignmentQueueConfigSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaRoutingProfileManualAssignmentQueueConfigSummary>;

export type AmazonConnectFullApiSchemaRoutingProfileQueueConfigSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaRoutingProfileQueueConfigSummary>;

export type AmazonConnectFullApiSchemaRoutingProfileSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaRoutingProfileSummary>;

export type AmazonConnectFullApiSchemaRuleSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaRuleSummary>;

export type AmazonConnectFullApiSchemaSecurityKeysList = ReadonlyArray<AmazonConnectFullApiSchemaSecurityKey>;

export type AmazonConnectFullApiSchemaSecurityProfileSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaSecurityProfileSummary>;

export type AmazonConnectFullApiSchemaTaskTemplateList = ReadonlyArray<AmazonConnectFullApiSchemaTaskTemplateMetadata>;

export type AmazonConnectFullApiSchemaExecutionRecordList = ReadonlyArray<AmazonConnectFullApiSchemaExecutionRecord>;

export type AmazonConnectFullApiSchemaTestCaseExecutionList = ReadonlyArray<AmazonConnectFullApiSchemaTestCaseExecution>;

export type AmazonConnectFullApiSchemaTestCaseSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaTestCaseSummary>;

export type AmazonConnectFullApiSchemaTrafficDistributionGroupUserSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaTrafficDistributionGroupUserSummary>;

export type AmazonConnectFullApiSchemaTrafficDistributionGroupSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaTrafficDistributionGroupSummary>;

export type AmazonConnectFullApiSchemaUseCaseSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaUseCase>;

export type AmazonConnectFullApiSchemaHierarchyGroupSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaHierarchyGroupSummary>;

export type AmazonConnectFullApiSchemaUserNotificationSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaUserNotificationSummary>;

export type AmazonConnectFullApiSchemaUserSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaUserSummary>;

export type AmazonConnectFullApiSchemaViewVersionSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaViewVersionSummary>;

export type AmazonConnectFullApiSchemaViewsSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaViewSummary>;

export type AmazonConnectFullApiSchemaMediaList = ReadonlyArray<AmazonConnectFullApiSchemaMediaItem>;

export type AmazonConnectFullApiSchemaWorkspacePageList = ReadonlyArray<AmazonConnectFullApiSchemaWorkspacePage>;

export type AmazonConnectFullApiSchemaWorkspaceSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaWorkspaceSummary>;

export type AmazonConnectFullApiSchemaMonitorCapability = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaControlPlaneAttributeFilter = {
  OrConditions?: AmazonConnectFullApiSchemaCommonAttributeOrConditionList;
  AndCondition?: AmazonConnectFullApiSchemaCommonAttributeAndCondition;
  TagCondition?: AmazonConnectFullApiSchemaTagCondition2;
};

export type AmazonConnectFullApiSchemaAgentStatusSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaAgentStatusSearchCriteria>;

export type AmazonConnectFullApiSchemaStringCondition = {
  FieldName?: string;
  Value?: string;
  ComparisonType?: AmazonConnectFullApiSchemaStringComparisonType;
};

export type AmazonConnectFullApiSchemaAgentStatusList = ReadonlyArray<AmazonConnectFullApiSchemaAgentStatus>;

export type AmazonConnectFullApiSchemaAvailableNumbersList = ReadonlyArray<AmazonConnectFullApiSchemaAvailableNumberSummary>;

export type AmazonConnectFullApiSchemaEvaluationSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaEvaluationSearchCriteria>;

export type AmazonConnectFullApiSchemaNumberCondition = {
  FieldName?: string;
  MinValue?: number;
  MaxValue?: number;
  ComparisonType?: AmazonConnectFullApiSchemaNumberComparisonType;
};

export type AmazonConnectFullApiSchemaBooleanCondition = {
  FieldName?: string;
  ComparisonType?: AmazonConnectFullApiSchemaBooleanComparisonType;
};

export type AmazonConnectFullApiSchemaDateTimeCondition = {
  FieldName?: string;
  MinValue?: string;
  MaxValue?: string;
  ComparisonType?: AmazonConnectFullApiSchemaDateTimeComparisonType;
};

export type AmazonConnectFullApiSchemaDecimalCondition = {
  FieldName?: string;
  MinValue?: number;
  MaxValue?: number;
  ComparisonType?: AmazonConnectFullApiSchemaDecimalComparisonType;
};

export type AmazonConnectFullApiSchemaEvaluationSearchSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaEvaluationSearchSummary>;

export type AmazonConnectFullApiSchemaControlPlaneTagFilter = {
  OrConditions?: AmazonConnectFullApiSchemaTagOrConditionList;
  AndConditions?: AmazonConnectFullApiSchemaTagAndConditionList;
  TagCondition?: AmazonConnectFullApiSchemaTagCondition2;
};

export type AmazonConnectFullApiSchemaContactFlowModuleSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaContactFlowModuleSearchCriteria>;

export type AmazonConnectFullApiSchemaContactFlowModuleStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaContactFlowModuleSearchSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaContactFlowModule>;

export type AmazonConnectFullApiSchemaContactFlowAttributeFilter = {
  OrConditions?: AmazonConnectFullApiSchemaContactFlowAttributeOrConditionList;
  AndCondition?: AmazonConnectFullApiSchemaContactFlowAttributeAndCondition;
  TagCondition?: AmazonConnectFullApiSchemaTagCondition2;
  ContactFlowTypeCondition?: AmazonConnectFullApiSchemaContactFlowTypeCondition;
};

export type AmazonConnectFullApiSchemaContactFlowSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaContactFlowSearchCriteria>;

export type AmazonConnectFullApiSchemaContactFlowSearchSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaContactFlow>;

export type AmazonConnectFullApiSchemaSearchContactsTimeRangeType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaNameCriteria = {
  SearchText: AmazonConnectFullApiSchemaSearchTextList;
  MatchType: AmazonConnectFullApiSchemaSearchContactsMatchType;
};

export type AmazonConnectFullApiSchemaAgentResourceIdList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaAgentHierarchyGroups = {
  L1Ids?: AmazonConnectFullApiSchemaHierarchyGroupIdList;
  L2Ids?: AmazonConnectFullApiSchemaHierarchyGroupIdList;
  L3Ids?: AmazonConnectFullApiSchemaHierarchyGroupIdList;
  L4Ids?: AmazonConnectFullApiSchemaHierarchyGroupIdList;
  L5Ids?: AmazonConnectFullApiSchemaHierarchyGroupIdList;
};

export type AmazonConnectFullApiSchemaChannelList = ReadonlyArray<AmazonConnectFullApiSchemaChannel>;

export type AmazonConnectFullApiSchemaContactAnalysis = {
  Transcript?: AmazonConnectFullApiSchemaTranscript2;
};

export type AmazonConnectFullApiSchemaInitiationMethodList = ReadonlyArray<AmazonConnectFullApiSchemaContactInitiationMethod>;

export type AmazonConnectFullApiSchemaQueueIdList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaSearchableRoutingCriteria = {
  Steps?: AmazonConnectFullApiSchemaSearchableRoutingCriteriaStepList;
};

export type AmazonConnectFullApiSchemaSearchContactsAdditionalTimeRange = {
  Criteria: AmazonConnectFullApiSchemaSearchContactsAdditionalTimeRangeCriteriaList;
  MatchType: AmazonConnectFullApiSchemaSearchContactsMatchType;
};

export type AmazonConnectFullApiSchemaSearchableContactAttributes = {
  Criteria: AmazonConnectFullApiSchemaSearchableContactAttributesCriteriaList;
  MatchType?: AmazonConnectFullApiSchemaSearchContactsMatchType;
};

export type AmazonConnectFullApiSchemaSearchableSegmentAttributes = {
  Criteria: AmazonConnectFullApiSchemaSearchableSegmentAttributesCriteriaList;
  MatchType?: AmazonConnectFullApiSchemaSearchContactsMatchType;
};

export type AmazonConnectFullApiSchemaActiveRegionList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaAiAgentsCriteria = {
  Criteria?: AmazonConnectFullApiSchemaAiAgentSearchCriteriaList;
};

export type AmazonConnectFullApiSchemaSortableFieldName = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaSortOrder = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaContacts = ReadonlyArray<AmazonConnectFullApiSchemaContactSearchSummary>;

export type AmazonConnectFullApiSchemaDataTableSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaDataTableSearchCriteria>;

export type AmazonConnectFullApiSchemaDataTableList = ReadonlyArray<AmazonConnectFullApiSchemaDataTable>;

export type AmazonConnectFullApiSchemaEmailAddressSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaEmailAddressSearchCriteria>;

export type AmazonConnectFullApiSchemaEmailAddressList = ReadonlyArray<AmazonConnectFullApiSchemaEmailAddressMetadata>;

export type AmazonConnectFullApiSchemaEvaluationFormSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaEvaluationFormSearchCriteria>;

export type AmazonConnectFullApiSchemaEvaluationFormSearchSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaEvaluationFormSearchSummary>;

export type AmazonConnectFullApiSchemaHoursOfOperationOverrideSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaHoursOfOperationOverrideSearchCriteria>;

export type AmazonConnectFullApiSchemaDateCondition = {
  FieldName?: string;
  Value?: string;
  ComparisonType?: AmazonConnectFullApiSchemaDateComparisonType;
};

export type AmazonConnectFullApiSchemaHoursOfOperationSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaHoursOfOperationSearchCriteria>;

export type AmazonConnectFullApiSchemaHoursOfOperationList = ReadonlyArray<AmazonConnectFullApiSchemaHoursOfOperation>;

export type AmazonConnectFullApiSchemaNotificationSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaNotificationSearchCriteria>;

export type AmazonConnectFullApiSchemaNotificationSearchSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaNotificationSearchSummary>;

export type AmazonConnectFullApiSchemaPredefinedAttributeSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaPredefinedAttributeSearchCriteria>;

export type AmazonConnectFullApiSchemaPredefinedAttributeSearchSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaPredefinedAttribute>;

export type AmazonConnectFullApiSchemaPromptSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaPromptSearchCriteria>;

export type AmazonConnectFullApiSchemaPromptList = ReadonlyArray<AmazonConnectFullApiSchemaPrompt>;

export type AmazonConnectFullApiSchemaQueueSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaQueueSearchCriteria>;

export type AmazonConnectFullApiSchemaSearchableQueueType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaQueueSearchSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaQueue>;

export type AmazonConnectFullApiSchemaQuickConnectSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaQuickConnectSearchCriteria>;

export type AmazonConnectFullApiSchemaQuickConnectSearchSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaQuickConnect>;

export type AmazonConnectFullApiSchemaTagSearchCondition = {
  tagKey?: string;
  tagValue?: string;
  tagKeyComparisonType?: AmazonConnectFullApiSchemaStringComparisonType;
  tagValueComparisonType?: AmazonConnectFullApiSchemaStringComparisonType;
};

export type AmazonConnectFullApiSchemaTagsList = ReadonlyArray<AmazonConnectFullApiSchemaTagSet>;

export type AmazonConnectFullApiSchemaRoutingProfileSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaRoutingProfileSearchCriteria>;

export type AmazonConnectFullApiSchemaRoutingProfileList = ReadonlyArray<AmazonConnectFullApiSchemaRoutingProfile>;

export type AmazonConnectFullApiSchemaSecurityProfileSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaSecurityProfileSearchCriteria>;

export type AmazonConnectFullApiSchemaSecurityProfilesSearchSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaSecurityProfileSearchSummary>;

export type AmazonConnectFullApiSchemaTestCaseSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaTestCaseSearchCriteria>;

export type AmazonConnectFullApiSchemaTestCaseSearchSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaTestCase>;

export type AmazonConnectFullApiSchemaUserHierarchyGroupSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaUserHierarchyGroupSearchCriteria>;

export type AmazonConnectFullApiSchemaUserHierarchyGroupList = ReadonlyArray<AmazonConnectFullApiSchemaHierarchyGroup>;

export type AmazonConnectFullApiSchemaControlPlaneUserAttributeFilter = {
  OrConditions?: AmazonConnectFullApiSchemaAttributeOrConditionList;
  AndCondition?: AmazonConnectFullApiSchemaAttributeAndCondition;
  TagCondition?: AmazonConnectFullApiSchemaTagCondition2;
  HierarchyGroupCondition?: AmazonConnectFullApiSchemaHierarchyGroupCondition;
};

export type AmazonConnectFullApiSchemaUserSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaUserSearchCriteria>;

export type AmazonConnectFullApiSchemaListCondition = {
  TargetListType?: AmazonConnectFullApiSchemaTargetListType;
  Conditions?: AmazonConnectFullApiSchemaConditions2;
};

export type AmazonConnectFullApiSchemaHierarchyGroupCondition = {
  Value?: string;
  HierarchyGroupMatchType?: AmazonConnectFullApiSchemaHierarchyGroupMatchType;
};

export type AmazonConnectFullApiSchemaUserSearchSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaUserSearchSummary>;

export type AmazonConnectFullApiSchemaViewSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaViewSearchCriteria>;

export type AmazonConnectFullApiSchemaViewSearchSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaView>;

export type AmazonConnectFullApiSchemaVocabularySummaryList = ReadonlyArray<AmazonConnectFullApiSchemaVocabularySummary>;

export type AmazonConnectFullApiSchemaWorkspaceAssociationSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaWorkspaceAssociationSearchCriteria>;

export type AmazonConnectFullApiSchemaWorkspaceAssociationSearchSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaWorkspaceAssociationSearchSummary>;

export type AmazonConnectFullApiSchemaWorkspaceSearchConditionList = ReadonlyArray<AmazonConnectFullApiSchemaWorkspaceSearchCriteria>;

export type AmazonConnectFullApiSchemaWorkspaceSearchSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaWorkspaceSearchSummary>;

export type AmazonConnectFullApiSchemaChatEventType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEmailAddressRecipientList = ReadonlyArray<AmazonConnectFullApiSchemaEmailAddressInfo>;

export type AmazonConnectFullApiSchemaOutboundMessageSourceType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaOutboundRawMessage = {
  Subject: string;
  Body: string;
  ContentType: string;
};

export type AmazonConnectFullApiSchemaUploadUrlMetadata = {
  Url?: string;
  UrlExpiry?: string;
  HeadersToInclude?: AmazonConnectFullApiSchemaUrlMetadataSignedHeaders;
};

export type AmazonConnectFullApiSchemaResponseMode = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaDisconnectOnCustomerExitParticipantType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaVoiceRecordingTrack = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaIvrRecordingTrack = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaInboundMessageSourceType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaInboundRawMessage = {
  Subject: string;
  Body: string;
  ContentType: string;
  Headers?: AmazonConnectFullApiSchemaEmailHeaders;
};

export type AmazonConnectFullApiSchemaEmailAttachment = {
  FileName: string;
  S3Url: string;
};

export type AmazonConnectFullApiSchemaEndpointType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaTemplateAttributes = {
  CustomAttributes?: AmazonConnectFullApiSchemaAttributes;
  CustomerProfileAttributes?: string;
};

export type AmazonConnectFullApiSchemaOutboundStrategyType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaOutboundStrategyConfig = {
  AgentFirst?: AmazonConnectFullApiSchemaAgentFirst;
};

export type AmazonConnectFullApiSchemaTaskAttachment = {
  FileName: string;
  S3Url: string;
};

export type AmazonConnectFullApiSchemaConnectionData = {
  Attendee?: AmazonConnectFullApiSchemaAttendee;
  Meeting?: AmazonConnectFullApiSchemaMeeting;
};

export type AmazonConnectFullApiSchemaEvaluationAnswerInput = {
  Value?: AmazonConnectFullApiSchemaEvaluationAnswerData;
};

export type AmazonConnectFullApiSchemaEvaluationNote = {
  Value?: string;
};

export type AmazonConnectFullApiSchemaAllowedExtensionsList = ReadonlyArray<AmazonConnectFullApiSchemaAllowedExtension>;

export type AmazonConnectFullApiSchemaAttachmentScope = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaRoutingCriteriaInputSteps = ReadonlyArray<AmazonConnectFullApiSchemaRoutingCriteriaInputStep>;

export type AmazonConnectFullApiSchemaPrimaryValue = {
  AttributeName: string;
  Value: string;
};

export type AmazonConnectFullApiSchemaChatParticipantRoleConfig = {
  ParticipantTimerConfigList: AmazonConnectFullApiSchemaParticipantTimerConfigList;
};

export type AmazonConnectFullApiSchemaDistributionList = ReadonlyArray<AmazonConnectFullApiSchemaDistribution>;

export type AmazonConnectFullApiSchemaSignInDistributionList = ReadonlyArray<AmazonConnectFullApiSchemaSignInDistribution>;

export type AmazonConnectFullApiSchemaHierarchyLevelUpdate = {
  Name: string;
};

export type AmazonConnectFullApiSchemaConnectionType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaWebsocket = {
  Url?: string;
  ConnectionExpiry?: string;
};

export type AmazonConnectFullApiSchemaConnectionCredentials = {
  ConnectionToken?: string;
  Expiry?: string;
};

export type AmazonConnectFullApiSchemaWebRTCConnection = {
  Attendee?: AmazonConnectFullApiSchemaAttendee2;
  Meeting?: AmazonConnectFullApiSchemaWebRTCMeeting;
};

export type AmazonConnectFullApiSchemaView2 = {
  Id?: string;
  Arn?: string;
  Name?: string;
  Version?: number;
  Content?: AmazonConnectFullApiSchemaViewContent2;
};

export type AmazonConnectFullApiSchemaTranscript = ReadonlyArray<AmazonConnectFullApiSchemaItem>;

export type AmazonConnectFullApiSchemaMessageProcessingMetadata = {
  MessageProcessingStatus?: AmazonConnectFullApiSchemaMessageProcessingStatus;
};

export type AmazonConnectFullApiSchemaUploadMetadata = {
  Url?: string;
  UrlExpiry?: string;
  HeadersToInclude?: AmazonConnectFullApiSchemaUploadMetadataSignedHeaders;
};

export type AmazonConnectFullApiSchemaCaseRuleIdentifier = {
  id: string;
};

export type AmazonConnectFullApiSchemaBatchGetCaseRuleList = ReadonlyArray<AmazonConnectFullApiSchemaGetCaseRuleResponse>;

export type AmazonConnectFullApiSchemaBatchGetCaseRuleErrorList = ReadonlyArray<AmazonConnectFullApiSchemaCaseRuleError>;

export type AmazonConnectFullApiSchemaBatchGetCaseRuleUnprocessedList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaFieldIdentifier = {
  id: string;
};

export type AmazonConnectFullApiSchemaBatchGetFieldList = ReadonlyArray<AmazonConnectFullApiSchemaGetFieldResponse>;

export type AmazonConnectFullApiSchemaBatchGetFieldErrorList = ReadonlyArray<AmazonConnectFullApiSchemaFieldError>;

export type AmazonConnectFullApiSchemaFieldOption = {
  name: string;
  value: string;
  active: boolean;
};

export type AmazonConnectFullApiSchemaFieldOptionErrorList = ReadonlyArray<AmazonConnectFullApiSchemaFieldOptionError>;

export type AmazonConnectFullApiSchemaFieldValue = {
  id: string;
  value: AmazonConnectFullApiSchemaFieldValueUnion;
};

export type AmazonConnectFullApiSchemaRequiredCaseRule = {
  defaultValue: boolean;
  conditions: AmazonConnectFullApiSchemaBooleanConditionList;
};

export type AmazonConnectFullApiSchemaFieldOptionsCaseRule = {
  parentFieldId?: string;
  childFieldId?: string;
  parentChildFieldOptionsMappings: AmazonConnectFullApiSchemaParentChildFieldOptionsMappingList;
};

export type AmazonConnectFullApiSchemaHiddenCaseRule = {
  defaultValue: boolean;
  conditions: AmazonConnectFullApiSchemaBooleanConditionList;
};

export type AmazonConnectFullApiSchemaTextAttributes = {
  isMultiline: boolean;
};

export type AmazonConnectFullApiSchemaBasicLayout = {
  topPanel?: AmazonConnectFullApiSchemaLayoutSections;
  moreInfo?: AmazonConnectFullApiSchemaLayoutSections;
};

export type AmazonConnectFullApiSchemaContact2 = {
  contactArn: string;
};

export type AmazonConnectFullApiSchemaCommentContent = {
  body: string;
  contentType: "Text/Plain";
};

export type AmazonConnectFullApiSchemaFileContent = {
  fileArn: string;
};

export type AmazonConnectFullApiSchemaSlaInputContent = {
  slaInputConfiguration: AmazonConnectFullApiSchemaSlaInputConfiguration;
};

export type AmazonConnectFullApiSchemaConnectCaseInputContent = {
  caseId: string;
};

export type AmazonConnectFullApiSchemaCustomInputContent = {
  fields: AmazonConnectFullApiSchemaFieldValueList;
};

export type AmazonConnectFullApiSchemaRequiredField = {
  fieldId: string;
};

export type AmazonConnectFullApiSchemaTemplateRule = {
  caseRuleId: string;
  fieldId?: string;
};

export type AmazonConnectFullApiSchemaTagPropagationConfiguration = {
  resourceType: "Cases";
  tagMap: AmazonConnectFullApiSchemaMutableTags;
};

export type AmazonConnectFullApiSchemaAuditEventsList = ReadonlyArray<AmazonConnectFullApiSchemaAuditEvent>;

export type AmazonConnectFullApiSchemaCaseRuleSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaCaseRuleSummary>;

export type AmazonConnectFullApiSchemaCaseSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaCaseSummary>;

export type AmazonConnectFullApiSchemaDomainSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaDomainSummary>;

export type AmazonConnectFullApiSchemaFieldSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaFieldSummary>;

export type AmazonConnectFullApiSchemaLayoutSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaLayoutSummary>;

export type AmazonConnectFullApiSchemaTemplateSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaTemplateSummary>;

export type AmazonConnectFullApiSchemaEventIncludedData = {
  caseData?: AmazonConnectFullApiSchemaCaseEventIncludedData;
  relatedItemData?: AmazonConnectFullApiSchemaRelatedItemEventIncludedData;
};

export type AmazonConnectFullApiSchemaRelatedItemTypeFilter = {
  contact: AmazonConnectFullApiSchemaContactFilter2;
} | {
  comment: AmazonConnectFullApiSchemaCommentFilter;
} | {
  file: AmazonConnectFullApiSchemaFileFilter;
} | {
  sla: AmazonConnectFullApiSchemaSlaFilter;
} | {
  connectCase: AmazonConnectFullApiSchemaConnectCaseFilter;
} | {
  custom: AmazonConnectFullApiSchemaCustomFilter;
};

export type AmazonConnectFullApiSchemaSearchAllRelatedItemsSort = {
  sortProperty: "AssociationTime" | "CaseId";
  sortOrder: "Asc" | "Desc";
};

export type AmazonConnectFullApiSchemaSearchAllRelatedItemsResponseItemList = ReadonlyArray<AmazonConnectFullApiSchemaSearchAllRelatedItemsResponseItem>;

export type AmazonConnectFullApiSchemaFieldFilter = {
  equalTo: AmazonConnectFullApiSchemaFieldValue;
} | {
  contains: AmazonConnectFullApiSchemaFieldValue;
} | {
  greaterThan: AmazonConnectFullApiSchemaFieldValue;
} | {
  greaterThanOrEqualTo: AmazonConnectFullApiSchemaFieldValue;
} | {
  lessThan: AmazonConnectFullApiSchemaFieldValue;
} | {
  lessThanOrEqualTo: AmazonConnectFullApiSchemaFieldValue;
};

export type AmazonConnectFullApiSchemaTagFilter2 = {
  equalTo: AmazonConnectFullApiSchemaTagValue;
};

export type AmazonConnectFullApiSchemaCaseFilterList = ReadonlyArray<AmazonConnectFullApiSchemaCaseFilter>;

export type AmazonConnectFullApiSchemaSort2 = {
  fieldId: string;
  sortOrder: "Asc" | "Desc";
};

export type AmazonConnectFullApiSchemaSearchCasesResponseItemList = ReadonlyArray<AmazonConnectFullApiSchemaSearchCasesResponseItem>;

export type AmazonConnectFullApiSchemaSearchRelatedItemsResponseItemList = ReadonlyArray<AmazonConnectFullApiSchemaSearchRelatedItemsResponseItem>;

export type AmazonConnectFullApiSchemaCommentUpdateContent = {
  body: string;
  contentType: "Text/Plain";
};

export type AmazonConnectFullApiSchemaCustomUpdateContent = {
  fields: AmazonConnectFullApiSchemaFieldValueList;
};

export type AmazonConnectFullApiSchemaRelatedItemContent = {
  contact: AmazonConnectFullApiSchemaContactContent;
} | {
  comment: AmazonConnectFullApiSchemaCommentContent;
} | {
  file: AmazonConnectFullApiSchemaFileContent;
} | {
  sla: AmazonConnectFullApiSchemaSlaContent;
} | {
  connectCase: AmazonConnectFullApiSchemaConnectCaseContent;
} | {
  custom: AmazonConnectFullApiSchemaCustomContent;
};

export type AmazonConnectFullApiSchemaProgressiveDialerConfig = {
  bandwidthAllocation: number;
  dialingCapacity?: number;
};

export type AmazonConnectFullApiSchemaPredictiveDialerConfig = {
  bandwidthAllocation: number;
  dialingCapacity?: number;
};

export type AmazonConnectFullApiSchemaAgentlessDialerConfig = {
  dialingCapacity?: number;
};

export type AmazonConnectFullApiSchemaCampaign = {
  id: string;
  arn: string;
  name: string;
  connectInstanceId: string;
  dialerConfig: AmazonConnectFullApiSchemaDialerConfig;
  outboundCallConfig: AmazonConnectFullApiSchemaOutboundCallConfig;
  tags?: AmazonConnectFullApiSchemaTagMap3;
};

export type AmazonConnectFullApiSchemaSuccessfulCampaignStateResponseList = ReadonlyArray<AmazonConnectFullApiSchemaSuccessfulCampaignStateResponse>;

export type AmazonConnectFullApiSchemaFailedCampaignStateResponseList = ReadonlyArray<AmazonConnectFullApiSchemaFailedCampaignStateResponse>;

export type AmazonConnectFullApiSchemaInstanceConfig = {
  connectInstanceId: string;
  serviceLinkedRoleArn: string;
  encryptionConfig: AmazonConnectFullApiSchemaEncryptionConfig;
};

export type AmazonConnectFullApiSchemaInstanceOnboardingJobStatus = {
  connectInstanceId: string;
  status: "IN_PROGRESS" | "SUCCEEDED" | "FAILED";
  failureCode?: "EVENT_BRIDGE_ACCESS_DENIED" | "EVENT_BRIDGE_MANAGED_RULE_LIMIT_EXCEEDED" | "IAM_ACCESS_DENIED" | "KMS_ACCESS_DENIED" | "KMS_KEY_NOT_FOUND" | "INTERNAL_FAILURE";
};

export type AmazonConnectFullApiSchemaInstanceIdFilter = {
  value: string;
  operator: "Eq";
};

export type AmazonConnectFullApiSchemaCampaignSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaCampaignSummary>;

export type AmazonConnectFullApiSchemaDialRequest = {
  clientToken: string;
  phoneNumber: string;
  expirationTime: string;
  attributes: AmazonConnectFullApiSchemaAttributes3;
};

export type AmazonConnectFullApiSchemaSuccessfulRequestList2 = ReadonlyArray<AmazonConnectFullApiSchemaSuccessfulRequest2>;

export type AmazonConnectFullApiSchemaFailedRequestList2 = ReadonlyArray<AmazonConnectFullApiSchemaFailedRequest2>;

export type AmazonConnectFullApiSchemaTelephonyChannelSubtypeConfig = {
  capacity?: number;
  connectQueueId?: string;
  outboundMode: AmazonConnectFullApiSchemaTelephonyOutboundMode;
  defaultOutboundConfig: AmazonConnectFullApiSchemaTelephonyOutboundConfig;
};

export type AmazonConnectFullApiSchemaSmsChannelSubtypeConfig = {
  capacity?: number;
  outboundMode: AmazonConnectFullApiSchemaSmsOutboundMode;
  defaultOutboundConfig: AmazonConnectFullApiSchemaSmsOutboundConfig;
};

export type AmazonConnectFullApiSchemaEmailChannelSubtypeConfig = {
  capacity?: number;
  outboundMode: AmazonConnectFullApiSchemaEmailOutboundMode;
  defaultOutboundConfig: AmazonConnectFullApiSchemaEmailOutboundConfig;
};

export type AmazonConnectFullApiSchemaWhatsAppChannelSubtypeConfig = {
  capacity?: number;
  outboundMode: AmazonConnectFullApiSchemaWhatsAppOutboundMode;
  defaultOutboundConfig: AmazonConnectFullApiSchemaWhatsAppOutboundConfig;
};

export type AmazonConnectFullApiSchemaEventTrigger = {
  customerProfilesDomainArn?: string;
};

export type AmazonConnectFullApiSchemaLocalTimeZoneConfig = {
  defaultTimeZone?: string;
  localTimeZoneDetection?: AmazonConnectFullApiSchemaLocalTimeZoneDetection;
  localTimeZoneDetectionScope?: "PRIMARY_ONLY" | "ALL_AVAILABLE";
};

export type AmazonConnectFullApiSchemaTimeWindow = {
  openHours: AmazonConnectFullApiSchemaOpenHours;
  restrictedPeriods?: AmazonConnectFullApiSchemaRestrictedPeriods;
};

export type AmazonConnectFullApiSchemaCommunicationLimits = {
  communicationLimitsList: AmazonConnectFullApiSchemaCommunicationLimitList;
};

export type AmazonConnectFullApiSchemaCustomerProfilesIntegrationIdentifier = {
  domainArn: string;
};

export type AmazonConnectFullApiSchemaQConnectIntegrationIdentifier = {
  knowledgeBaseArn: string;
};

export type AmazonConnectFullApiSchemaLambdaIntegrationIdentifier = {
  functionArn: string;
};

export type AmazonConnectFullApiSchemaCampaign2 = {
  id: string;
  arn: string;
  name: string;
  connectInstanceId: string;
  channelSubtypeConfig?: AmazonConnectFullApiSchemaChannelSubtypeConfig;
  type?: "MANAGED" | "JOURNEY";
  source?: AmazonConnectFullApiSchemaSource;
  connectCampaignFlowArn?: string;
  schedule?: AmazonConnectFullApiSchemaSchedule;
  entryLimitsConfig?: AmazonConnectFullApiSchemaEntryLimitsConfig;
  communicationTimeConfig?: AmazonConnectFullApiSchemaCommunicationTimeConfig;
  communicationLimitsOverride?: AmazonConnectFullApiSchemaCommunicationLimitsConfig;
  tags?: AmazonConnectFullApiSchemaTagMap4;
};

export type AmazonConnectFullApiSchemaSuccessfulCampaignStateResponseList2 = ReadonlyArray<AmazonConnectFullApiSchemaSuccessfulCampaignStateResponse2>;

export type AmazonConnectFullApiSchemaFailedCampaignStateResponseList2 = ReadonlyArray<AmazonConnectFullApiSchemaFailedCampaignStateResponse2>;

export type AmazonConnectFullApiSchemaInstanceConfig2 = {
  connectInstanceId: string;
  serviceLinkedRoleArn: string;
  encryptionConfig: AmazonConnectFullApiSchemaEncryptionConfig2;
};

export type AmazonConnectFullApiSchemaInstanceOnboardingJobStatus2 = {
  connectInstanceId: string;
  status: "IN_PROGRESS" | "SUCCEEDED" | "FAILED";
  failureCode?: "EVENT_BRIDGE_ACCESS_DENIED" | "EVENT_BRIDGE_MANAGED_RULE_LIMIT_EXCEEDED" | "IAM_ACCESS_DENIED" | "KMS_ACCESS_DENIED" | "KMS_KEY_NOT_FOUND" | "INTERNAL_FAILURE";
};

export type AmazonConnectFullApiSchemaInstanceIdFilter2 = {
  value: string;
  operator: "Eq";
};

export type AmazonConnectFullApiSchemaCampaignSummaryList2 = ReadonlyArray<AmazonConnectFullApiSchemaCampaignSummary2>;

export type AmazonConnectFullApiSchemaIntegrationSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaIntegrationSummary>;

export type AmazonConnectFullApiSchemaCustomerProfilesIntegrationConfig = {
  domainArn: string;
  objectTypeNames: AmazonConnectFullApiSchemaObjectTypeNamesMap;
};

export type AmazonConnectFullApiSchemaQConnectIntegrationConfig = {
  knowledgeBaseArn: string;
};

export type AmazonConnectFullApiSchemaLambdaIntegrationConfig = {
  functionArn: string;
};

export type AmazonConnectFullApiSchemaOutboundRequest = {
  clientToken: string;
  expirationTime: string;
  channelSubtypeParameters: AmazonConnectFullApiSchemaChannelSubtypeParameters;
};

export type AmazonConnectFullApiSchemaSuccessfulRequestList3 = ReadonlyArray<AmazonConnectFullApiSchemaSuccessfulRequest3>;

export type AmazonConnectFullApiSchemaFailedRequestList3 = ReadonlyArray<AmazonConnectFullApiSchemaFailedRequest3>;

export type AmazonConnectFullApiSchemaProfileOutboundRequest = {
  clientToken: string;
  profileId: string;
  expirationTime?: string;
};

export type AmazonConnectFullApiSchemaSuccessfulProfileOutboundRequestList = ReadonlyArray<AmazonConnectFullApiSchemaSuccessfulProfileOutboundRequest>;

export type AmazonConnectFullApiSchemaFailedProfileOutboundRequestList = ReadonlyArray<AmazonConnectFullApiSchemaFailedProfileOutboundRequest>;

export type AmazonConnectFullApiSchemaRealtimeContactAnalysisSegments2 = ReadonlyArray<AmazonConnectFullApiSchemaRealtimeContactAnalysisSegment2>;

export type AmazonConnectFullApiSchemaSubscriptionDescription = {
  domainId: string;
  subscriptionId: string;
  arn: string;
  status: AmazonConnectFullApiSchemaSubscriptionStatus;
  createdAt: string;
  lastUpdatedAt: string;
  activatedAt?: string;
  deactivatedAt?: string;
};

export type AmazonConnectFullApiSchemaEncryptionContext = {
  encryptionType: AmazonConnectFullApiSchemaEncryptionType;
  kmsKeyArn?: string;
};

export type AmazonConnectFullApiSchemaWebAppConfiguration = {
  ehrRole: string;
  idcApplicationId: string;
  idcRegion: string;
};

export type AmazonConnectFullApiSchemaSubscriptionStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaMedicalScribeListeningSessionDetails = {
  sessionId?: string;
  domainId?: string;
  subscriptionId?: string;
  languageCode?: AmazonConnectFullApiSchemaMedicalScribeLanguageCode;
  mediaSampleRateHertz?: number;
  mediaEncoding?: AmazonConnectFullApiSchemaMedicalScribeMediaEncoding;
  channelDefinitions?: AmazonConnectFullApiSchemaMedicalScribeChannelDefinitions;
  postStreamActionSettings?: AmazonConnectFullApiSchemaMedicalScribePostStreamActionSettingsResponse;
  postStreamActionResult?: AmazonConnectFullApiSchemaMedicalScribePostStreamActionsResult;
  encounterContextProvided?: boolean;
  streamStatus?: AmazonConnectFullApiSchemaMedicalScribeStreamStatus;
  streamCreationTime?: string;
  streamEndTime?: string;
};

export type AmazonConnectFullApiSchemaJobStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaInsightsOutput = {
  uri: string;
};

export type AmazonConnectFullApiSchemaDomainSummaryList2 = ReadonlyArray<AmazonConnectFullApiSchemaDomainSummary2>;

export type AmazonConnectFullApiSchemaSubscriptionList2 = ReadonlyArray<AmazonConnectFullApiSchemaSubscriptionDescription>;

export type AmazonConnectFullApiSchemaMedicalScribeAudioEvent = {
  audioChunk: string;
};

export type AmazonConnectFullApiSchemaMedicalScribeBinaryAudioEvent = {
  audioChunk: string;
};

export type AmazonConnectFullApiSchemaMedicalScribeSessionControlEvent = {
  type?: AmazonConnectFullApiSchemaMedicalScribeSessionControlEventType;
};

export type AmazonConnectFullApiSchemaMedicalScribeConfigurationEvent = {
  postStreamActionSettings: AmazonConnectFullApiSchemaMedicalScribePostStreamActionSettings;
  channelDefinitions?: AmazonConnectFullApiSchemaMedicalScribeChannelDefinitions;
  encounterContext?: AmazonConnectFullApiSchemaEncounterContext;
};

export type AmazonConnectFullApiSchemaMedicalScribeLanguageCode = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaMedicalScribeMediaEncoding = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaMedicalScribeOutputStream = {
  transcriptEvent: AmazonConnectFullApiSchemaMedicalScribeTranscriptEvent;
} | {
  internalFailureException: AmazonConnectFullApiSchemaInternalServerException;
} | {
  validationException: AmazonConnectFullApiSchemaValidationException;
};

export type AmazonConnectFullApiSchemaPronouns = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaInsightsType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaProviderRole = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaSpecialty = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaFHIRServer = {
  fhirEndpoint: string;
  oauthToken?: string;
};

export type AmazonConnectFullApiSchemaS3Sources = ReadonlyArray<AmazonConnectFullApiSchemaS3Source>;

export type AmazonConnectFullApiSchemaRangeOverride = {
  Start: number;
  End?: number;
  Unit: AmazonConnectFullApiSchemaRangeUnit;
};

export type AmazonConnectFullApiSchemaBatchGetCalculatedAttributeForProfileErrorList = ReadonlyArray<AmazonConnectFullApiSchemaBatchGetCalculatedAttributeForProfileError>;

export type AmazonConnectFullApiSchemaCalculatedAttributeValueList = ReadonlyArray<AmazonConnectFullApiSchemaCalculatedAttributeValue>;

export type AmazonConnectFullApiSchemaBatchGetProfileErrorList = ReadonlyArray<AmazonConnectFullApiSchemaBatchGetProfileError>;

export type AmazonConnectFullApiSchemaProfileList = ReadonlyArray<AmazonConnectFullApiSchemaProfile>;

export type AmazonConnectFullApiSchemaBatchPutProfileObjectRequestItem = {
  Id: string;
  Object: string;
};

export type AmazonConnectFullApiSchemaBatchPutProfileObjectResponseList = ReadonlyArray<AmazonConnectFullApiSchemaBatchPutProfileObjectResponseItem>;

export type AmazonConnectFullApiSchemaBatchPutProfileObjectErrorList = ReadonlyArray<AmazonConnectFullApiSchemaBatchPutProfileObjectErrorItem>;

export type AmazonConnectFullApiSchemaAttributeList2 = ReadonlyArray<AmazonConnectFullApiSchemaAttributeItem>;

export type AmazonConnectFullApiSchemaRange = {
  Value?: number;
  Unit?: AmazonConnectFullApiSchemaUnit2;
  ValueRange?: AmazonConnectFullApiSchemaValueRange;
  TimestampSource?: string;
  TimestampFormat?: string;
};

export type AmazonConnectFullApiSchemaThreshold = {
  Value: string;
  Operator: AmazonConnectFullApiSchemaOperator;
};

export type AmazonConnectFullApiSchemaInclude = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaGroupList = ReadonlyArray<AmazonConnectFullApiSchemaFilterGroup>;

export type AmazonConnectFullApiSchemaReadinessStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaReadiness = {
  ProgressPercentage?: number;
  Message?: string;
};

export type AmazonConnectFullApiSchemaJobSchedule = {
  DayOfTheWeek: AmazonConnectFullApiSchemaJobScheduleDayOfTheWeek;
  Time: string;
};

export type AmazonConnectFullApiSchemaAutoMerging = {
  Enabled: boolean;
  Consolidation?: AmazonConnectFullApiSchemaConsolidation;
  ConflictResolution?: AmazonConnectFullApiSchemaConflictResolution;
  MinAllowedConfidenceScoreForMerging?: number;
};

export type AmazonConnectFullApiSchemaExportingConfig = {
  S3Exporting?: AmazonConnectFullApiSchemaS3ExportingConfig;
};

export type AmazonConnectFullApiSchemaMatchingRules = ReadonlyArray<AmazonConnectFullApiSchemaMatchingRule>;

export type AmazonConnectFullApiSchemaAttributeTypesSelector = {
  AttributeMatchingModel: AmazonConnectFullApiSchemaAttributeMatchingModel;
  Address?: AmazonConnectFullApiSchemaAddressList;
  PhoneNumber?: AmazonConnectFullApiSchemaPhoneNumberList;
  EmailAddress?: AmazonConnectFullApiSchemaEmailList;
};

export type AmazonConnectFullApiSchemaMatchingResponse = {
  Enabled?: boolean;
  JobSchedule?: AmazonConnectFullApiSchemaJobSchedule;
  AutoMerging?: AmazonConnectFullApiSchemaAutoMerging;
  ExportingConfig?: AmazonConnectFullApiSchemaExportingConfig;
};

export type AmazonConnectFullApiSchemaRuleBasedMatchingResponse = {
  Enabled?: boolean;
  MatchingRules?: AmazonConnectFullApiSchemaMatchingRules;
  Status?: AmazonConnectFullApiSchemaRuleBasedMatchingStatus;
  MaxAllowedRuleLevelForMerging?: number;
  MaxAllowedRuleLevelForMatching?: number;
  AttributeTypesSelector?: AmazonConnectFullApiSchemaAttributeTypesSelector;
  ConflictResolution?: AmazonConnectFullApiSchemaConflictResolution;
  ExportingConfig?: AmazonConnectFullApiSchemaExportingConfig;
};

export type AmazonConnectFullApiSchemaDataStoreResponse = {
  Enabled?: boolean;
  Readiness?: AmazonConnectFullApiSchemaReadiness;
};

export type AmazonConnectFullApiSchemaEventTriggerCondition = {
  EventTriggerDimensions: AmazonConnectFullApiSchemaEventTriggerDimensions;
  LogicalOperator: AmazonConnectFullApiSchemaEventTriggerLogicalOperator;
};

export type AmazonConnectFullApiSchemaPeriods = ReadonlyArray<AmazonConnectFullApiSchemaPeriod>;

export type AmazonConnectFullApiSchemaAppflowIntegration = {
  FlowDefinition: AmazonConnectFullApiSchemaFlowDefinition;
  Batches?: AmazonConnectFullApiSchemaBatches;
};

export type AmazonConnectFullApiSchemaPhonePreferenceList = ReadonlyArray<AmazonConnectFullApiSchemaContactPreference>;

export type AmazonConnectFullApiSchemaEmailPreferenceList = ReadonlyArray<AmazonConnectFullApiSchemaContactPreference>;

export type AmazonConnectFullApiSchemaEventsConfig = {
  EventParametersList: AmazonConnectFullApiSchemaEventParametersList;
};

export type AmazonConnectFullApiSchemaInferenceConfig = {
  MinProvisionedTPS?: number;
};

export type AmazonConnectFullApiSchemaIncludedColumns = {
  readonly [key: string]: AmazonConnectFullApiSchemaColumnNamesList | undefined;
};

export type AmazonConnectFullApiSchemaRecommenderSchemaFieldList = ReadonlyArray<AmazonConnectFullApiSchemaRecommenderSchemaField>;

export type AmazonConnectFullApiSchemaRecommenderSchemaStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaSegmentGroupList = ReadonlyArray<AmazonConnectFullApiSchemaGroup>;

export type AmazonConnectFullApiSchemaIncludeOptions = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaSortAttributeList = ReadonlyArray<AmazonConnectFullApiSchemaSortAttribute>;

export type AmazonConnectFullApiSchemaObjectTypeField = {
  Source?: string;
  Target?: string;
  ContentType?: AmazonConnectFullApiSchemaFieldContentType;
};

export type AmazonConnectFullApiSchemaDetectedProfileObjectTypes = ReadonlyArray<AmazonConnectFullApiSchemaDetectedProfileObjectType>;

export type AmazonConnectFullApiSchemaMatchingAttributesList = ReadonlyArray<AmazonConnectFullApiSchemaMatchingAttributes>;

export type AmazonConnectFullApiSchemaConflictResolvingModel = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaDomainStats = {
  ProfileCount?: number;
  MeteringProfileCount?: number;
  ObjectCount?: number;
  TotalSize?: number;
};

export type AmazonConnectFullApiSchemaEventStreamState = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEventStreamDestinationDetails = {
  Uri: string;
  Status: AmazonConnectFullApiSchemaEventStreamDestinationStatus;
  UnhealthySince?: string;
  Message?: string;
};

export type AmazonConnectFullApiSchemaIdentityResolutionJobStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaExportingLocation = {
  S3Exporting?: AmazonConnectFullApiSchemaS3ExportingLocation;
};

export type AmazonConnectFullApiSchemaJobStats = {
  NumberOfProfilesReviewed?: number;
  NumberOfMatchesFound?: number;
  NumberOfMergesDone?: number;
};

export type AmazonConnectFullApiSchemaMatchesList = ReadonlyArray<AmazonConnectFullApiSchemaMatchItem>;

export type AmazonConnectFullApiSchemaGetObjectTypeAttributeStatisticsStats = {
  Maximum: number;
  Minimum: number;
  Average: number;
  StandardDeviation: number;
  Percentiles: AmazonConnectFullApiSchemaGetObjectTypeAttributeStatisticsPercentiles;
};

export type AmazonConnectFullApiSchemaRecommenderFilter = {
  Name?: string;
  Values?: AmazonConnectFullApiSchemaRecommenderFilterValues;
};

export type AmazonConnectFullApiSchemaRecommenderPromotionalFilter = {
  Name?: string;
  Values?: AmazonConnectFullApiSchemaRecommenderFilterValues;
  PromotionName?: string;
  PercentPromotedItems?: number;
};

export type AmazonConnectFullApiSchemaMetadataColumnsList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaRecommendations = ReadonlyArray<AmazonConnectFullApiSchemaRecommendation>;

export type AmazonConnectFullApiSchemaRecommenderStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaRecommenderUpdate = {
  RecommenderConfig?: AmazonConnectFullApiSchemaRecommenderConfig;
  Status?: AmazonConnectFullApiSchemaRecommenderStatus;
  CreatedAt?: string;
  LastUpdatedAt?: string;
  FailureReason?: string;
};

export type AmazonConnectFullApiSchemaTrainingMetricsList = ReadonlyArray<AmazonConnectFullApiSchemaTrainingMetrics>;

export type AmazonConnectFullApiSchemaRecommenderFilterStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaSegmentType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEstimateStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaProfiles = ReadonlyArray<AmazonConnectFullApiSchemaProfileQueryResult>;

export type AmazonConnectFullApiSchemaFailures = ReadonlyArray<AmazonConnectFullApiSchemaProfileQueryFailures>;

export type AmazonConnectFullApiSchemaSegmentSnapshotStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaProfileIdList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaUploadJobStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaStatusReason = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaResultsSummary = {
  UpdatedRecords?: number;
  CreatedRecords?: number;
  FailedRecords?: number;
};

export type AmazonConnectFullApiSchemaWorkflowAttributes = {
  AppflowIntegration?: AmazonConnectFullApiSchemaAppflowIntegrationWorkflowAttributes;
};

export type AmazonConnectFullApiSchemaWorkflowMetrics = {
  AppflowIntegration?: AmazonConnectFullApiSchemaAppflowIntegrationWorkflowMetrics;
};

export type AmazonConnectFullApiSchemaWorkflowStepsList = ReadonlyArray<AmazonConnectFullApiSchemaWorkflowStepItem>;

export type AmazonConnectFullApiSchemaIntegrationList = ReadonlyArray<AmazonConnectFullApiSchemaListIntegrationItem>;

export type AmazonConnectFullApiSchemaCalculatedAttributeDefinitionsList = ReadonlyArray<AmazonConnectFullApiSchemaListCalculatedAttributeDefinitionItem>;

export type AmazonConnectFullApiSchemaCalculatedAttributesForProfileList = ReadonlyArray<AmazonConnectFullApiSchemaListCalculatedAttributeForProfileItem>;

export type AmazonConnectFullApiSchemaLayoutList = ReadonlyArray<AmazonConnectFullApiSchemaLayoutItem>;

export type AmazonConnectFullApiSchemaDomainObjectTypesList = ReadonlyArray<AmazonConnectFullApiSchemaDomainObjectTypesListItem>;

export type AmazonConnectFullApiSchemaDomainList = ReadonlyArray<AmazonConnectFullApiSchemaListDomainItem>;

export type AmazonConnectFullApiSchemaEventStreamSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaEventStreamSummary>;

export type AmazonConnectFullApiSchemaEventTriggerSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaEventTriggerSummaryItem>;

export type AmazonConnectFullApiSchemaIdentityResolutionJobsList = ReadonlyArray<AmazonConnectFullApiSchemaIdentityResolutionJob>;

export type AmazonConnectFullApiSchemaListObjectTypeAttributeValuesList = ReadonlyArray<AmazonConnectFullApiSchemaListObjectTypeAttributeValuesItem>;

export type AmazonConnectFullApiSchemaListObjectTypeAttributesList = ReadonlyArray<AmazonConnectFullApiSchemaListObjectTypeAttributeItem>;

export type AmazonConnectFullApiSchemaAttributeValueItemList = ReadonlyArray<AmazonConnectFullApiSchemaAttributeValueItem>;

export type AmazonConnectFullApiSchemaProfileHistoryRecords = ReadonlyArray<AmazonConnectFullApiSchemaProfileHistoryRecord>;

export type AmazonConnectFullApiSchemaProfileObjectTypeTemplateList = ReadonlyArray<AmazonConnectFullApiSchemaListProfileObjectTypeTemplateItem>;

export type AmazonConnectFullApiSchemaProfileObjectTypeList = ReadonlyArray<AmazonConnectFullApiSchemaListProfileObjectTypeItem>;

export type AmazonConnectFullApiSchemaProfileObjectList = ReadonlyArray<AmazonConnectFullApiSchemaListProfileObjectsItem>;

export type AmazonConnectFullApiSchemaRecommenderFilterSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaRecommenderFilterSummary>;

export type AmazonConnectFullApiSchemaRecommenderRecipesList = ReadonlyArray<AmazonConnectFullApiSchemaRecommenderRecipe>;

export type AmazonConnectFullApiSchemaRecommenderSchemaSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaRecommenderSchemaSummary>;

export type AmazonConnectFullApiSchemaRecommenderSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaRecommenderSummary>;

export type AmazonConnectFullApiSchemaMatchIdList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaSegmentDefinitionsList = ReadonlyArray<AmazonConnectFullApiSchemaSegmentDefinitionItem>;

export type AmazonConnectFullApiSchemaUploadJobsList = ReadonlyArray<AmazonConnectFullApiSchemaUploadJobItem>;

export type AmazonConnectFullApiSchemaWorkflowList = ReadonlyArray<AmazonConnectFullApiSchemaListWorkflowsItem>;

export type AmazonConnectFullApiSchemaAttributeSourceIdMap = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaDomainObjectTypeField = {
  Source: string;
  Target: string;
  ContentType?: AmazonConnectFullApiSchemaContentType;
  FeatureType?: AmazonConnectFullApiSchemaFeatureType;
};

export type AmazonConnectFullApiSchemaSourceFlowConfig = {
  ConnectorProfileName?: string;
  ConnectorType: AmazonConnectFullApiSchemaSourceConnectorType;
  IncrementalPullConfig?: AmazonConnectFullApiSchemaIncrementalPullConfig;
  SourceConnectorProperties: AmazonConnectFullApiSchemaSourceConnectorProperties;
};

export type AmazonConnectFullApiSchemaTasks = ReadonlyArray<AmazonConnectFullApiSchemaTask>;

export type AmazonConnectFullApiSchemaTriggerConfig = {
  TriggerType: AmazonConnectFullApiSchemaTriggerType;
  TriggerProperties?: AmazonConnectFullApiSchemaTriggerProperties;
};

export type AmazonConnectFullApiSchemaObjectTypeKeyList = ReadonlyArray<AmazonConnectFullApiSchemaObjectTypeKey>;

export type AmazonConnectFullApiSchemaAdditionalSearchKey = {
  KeyName: string;
  Values: AmazonConnectFullApiSchemaRequestValueList;
};

export type AmazonConnectFullApiSchemaManualSearchAIAgentConfiguration = {
  answerGenerationAIPromptId?: string;
  answerGenerationAIGuardrailId?: string;
  associationConfigurations?: AmazonConnectFullApiSchemaAssociationConfigurationList;
  locale?: string;
};

export type AmazonConnectFullApiSchemaAnswerRecommendationAIAgentConfiguration = {
  intentLabelingGenerationAIPromptId?: string;
  queryReformulationAIPromptId?: string;
  answerGenerationAIPromptId?: string;
  answerGenerationAIGuardrailId?: string;
  associationConfigurations?: AmazonConnectFullApiSchemaAssociationConfigurationList;
  locale?: string;
  suggestedMessages?: AmazonConnectFullApiSchemaSuggestedMessagesList;
};

export type AmazonConnectFullApiSchemaSelfServiceAIAgentConfiguration = {
  selfServicePreProcessingAIPromptId?: string;
  selfServiceAnswerGenerationAIPromptId?: string;
  selfServiceAIGuardrailId?: string;
  associationConfigurations?: AmazonConnectFullApiSchemaAssociationConfigurationList;
};

export type AmazonConnectFullApiSchemaEmailResponseAIAgentConfiguration = {
  emailResponseAIPromptId?: string;
  emailQueryReformulationAIPromptId?: string;
  locale?: string;
  associationConfigurations?: AmazonConnectFullApiSchemaAssociationConfigurationList;
};

export type AmazonConnectFullApiSchemaEmailOverviewAIAgentConfiguration = {
  emailOverviewAIPromptId?: string;
  locale?: string;
};

export type AmazonConnectFullApiSchemaEmailGenerativeAnswerAIAgentConfiguration = {
  emailGenerativeAnswerAIPromptId?: string;
  emailQueryReformulationAIPromptId?: string;
  locale?: string;
  associationConfigurations?: AmazonConnectFullApiSchemaAssociationConfigurationList;
};

export type AmazonConnectFullApiSchemaOrchestrationAIAgentConfiguration = {
  orchestrationAIPromptId: string;
  orchestrationAIGuardrailId?: string;
  toolConfigurations?: AmazonConnectFullApiSchemaToolConfigurationList;
  connectInstanceArn?: string;
  locale?: string;
};

export type AmazonConnectFullApiSchemaNoteTakingAIAgentConfiguration = {
  noteTakingAIPromptId?: string;
  noteTakingAIGuardrailId?: string;
  locale?: string;
};

export type AmazonConnectFullApiSchemaCaseSummarizationAIAgentConfiguration = {
  caseSummarizationAIPromptId?: string;
  caseSummarizationAIGuardrailId?: string;
  locale?: string;
};

export type AmazonConnectFullApiSchemaAIAgentData = {
  assistantId: string;
  assistantArn: string;
  aiAgentId: string;
  aiAgentArn: string;
  name: string;
  type: "MANUAL_SEARCH" | "ANSWER_RECOMMENDATION" | "SELF_SERVICE" | "EMAIL_RESPONSE" | "EMAIL_OVERVIEW" | "EMAIL_GENERATIVE_ANSWER" | "ORCHESTRATION" | "NOTE_TAKING" | "CASE_SUMMARIZATION";
  configuration: AmazonConnectFullApiSchemaAIAgentConfiguration;
  modifiedTime?: string;
  description?: string;
  visibilityStatus: "SAVED" | "PUBLISHED";
  tags?: AmazonConnectFullApiSchemaTags2;
  origin?: "SYSTEM" | "CUSTOMER";
  status?: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "ACTIVE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED";
};

export type AmazonConnectFullApiSchemaGuardrailTopicsConfig = ReadonlyArray<AmazonConnectFullApiSchemaGuardrailTopicConfig>;

export type AmazonConnectFullApiSchemaGuardrailContentFiltersConfig = ReadonlyArray<AmazonConnectFullApiSchemaGuardrailContentFilterConfig>;

export type AmazonConnectFullApiSchemaGuardrailWordsConfig = ReadonlyArray<AmazonConnectFullApiSchemaGuardrailWordConfig>;

export type AmazonConnectFullApiSchemaGuardrailManagedWordListsConfig = ReadonlyArray<AmazonConnectFullApiSchemaGuardrailManagedWordsConfig>;

export type AmazonConnectFullApiSchemaGuardrailPiiEntitiesConfig = ReadonlyArray<AmazonConnectFullApiSchemaGuardrailPiiEntityConfig>;

export type AmazonConnectFullApiSchemaGuardrailRegexesConfig = ReadonlyArray<AmazonConnectFullApiSchemaGuardrailRegexConfig>;

export type AmazonConnectFullApiSchemaGuardrailContextualGroundingFiltersConfig = ReadonlyArray<AmazonConnectFullApiSchemaGuardrailContextualGroundingFilterConfig>;

export type AmazonConnectFullApiSchemaAIGuardrailData = {
  assistantId: string;
  assistantArn: string;
  aiGuardrailArn: string;
  aiGuardrailId: string;
  name: string;
  visibilityStatus: "SAVED" | "PUBLISHED";
  blockedInputMessaging: string;
  blockedOutputsMessaging: string;
  description?: string;
  topicPolicyConfig?: AmazonConnectFullApiSchemaAIGuardrailTopicPolicyConfig;
  contentPolicyConfig?: AmazonConnectFullApiSchemaAIGuardrailContentPolicyConfig;
  wordPolicyConfig?: AmazonConnectFullApiSchemaAIGuardrailWordPolicyConfig;
  sensitiveInformationPolicyConfig?: AmazonConnectFullApiSchemaAIGuardrailSensitiveInformationPolicyConfig;
  contextualGroundingPolicyConfig?: AmazonConnectFullApiSchemaAIGuardrailContextualGroundingPolicyConfig;
  tags?: AmazonConnectFullApiSchemaTags2;
  status?: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "ACTIVE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED";
  modifiedTime?: string;
};

export type AmazonConnectFullApiSchemaTextFullAIPromptEditTemplateConfiguration = {
  text: string;
};

export type AmazonConnectFullApiSchemaAIPromptData = {
  assistantId: string;
  assistantArn: string;
  aiPromptId: string;
  aiPromptArn: string;
  name: string;
  type: "ANSWER_GENERATION" | "INTENT_LABELING_GENERATION" | "QUERY_REFORMULATION" | "SELF_SERVICE_PRE_PROCESSING" | "SELF_SERVICE_ANSWER_GENERATION" | "EMAIL_RESPONSE" | "EMAIL_OVERVIEW" | "EMAIL_GENERATIVE_ANSWER" | "EMAIL_QUERY_REFORMULATION" | "ORCHESTRATION" | "NOTE_TAKING" | "CASE_SUMMARIZATION";
  templateType: "TEXT";
  modelId: string;
  apiFormat: "ANTHROPIC_CLAUDE_MESSAGES" | "ANTHROPIC_CLAUDE_TEXT_COMPLETIONS" | "MESSAGES" | "TEXT_COMPLETIONS";
  templateConfiguration: AmazonConnectFullApiSchemaAIPromptTemplateConfiguration;
  inferenceConfiguration?: AmazonConnectFullApiSchemaAIPromptInferenceConfiguration;
  modifiedTime?: string;
  description?: string;
  visibilityStatus: "SAVED" | "PUBLISHED";
  tags?: AmazonConnectFullApiSchemaTags2;
  origin?: "SYSTEM" | "CUSTOMER";
  status?: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "ACTIVE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED";
};

export type AmazonConnectFullApiSchemaAssistantData = {
  assistantId: string;
  assistantArn: string;
  name: string;
  type: "AGENT";
  status: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "ACTIVE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED";
  description?: string;
  tags?: AmazonConnectFullApiSchemaTags2;
  serverSideEncryptionConfiguration?: AmazonConnectFullApiSchemaServerSideEncryptionConfiguration;
  integrationConfiguration?: AmazonConnectFullApiSchemaAssistantIntegrationConfiguration;
  capabilityConfiguration?: AmazonConnectFullApiSchemaAssistantCapabilityConfiguration;
  aiAgentConfiguration?: AmazonConnectFullApiSchemaAIAgentConfigurationMap;
  orchestratorConfigurationList?: AmazonConnectFullApiSchemaOrchestratorConfigurationList;
};

export type AmazonConnectFullApiSchemaExternalBedrockKnowledgeBaseConfig = {
  bedrockKnowledgeBaseArn: string;
  accessRoleArn: string;
};

export type AmazonConnectFullApiSchemaAssistantAssociationData = {
  assistantAssociationId: string;
  assistantAssociationArn: string;
  assistantId: string;
  assistantArn: string;
  associationType: "KNOWLEDGE_BASE" | "EXTERNAL_BEDROCK_KNOWLEDGE_BASE";
  associationData: AmazonConnectFullApiSchemaAssistantAssociationOutputData;
  tags?: AmazonConnectFullApiSchemaTags2;
};

export type AmazonConnectFullApiSchemaContentData = {
  contentArn: string;
  contentId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  revisionId: string;
  title: string;
  contentType: string;
  status: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "ACTIVE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED" | "UPDATE_FAILED";
  metadata: AmazonConnectFullApiSchemaContentMetadata;
  tags?: AmazonConnectFullApiSchemaTags2;
  linkOutUri?: string;
  url: string;
  urlExpiry: string;
};

export type AmazonConnectFullApiSchemaAmazonConnectGuideAssociationData = {
  flowId?: string;
};

export type AmazonConnectFullApiSchemaContentAssociationData = {
  knowledgeBaseId: string;
  knowledgeBaseArn: string;
  contentId: string;
  contentArn: string;
  contentAssociationId: string;
  contentAssociationArn: string;
  associationType: "AMAZON_CONNECT_GUIDE";
  associationData: AmazonConnectFullApiSchemaContentAssociationContents;
  tags?: AmazonConnectFullApiSchemaTags2;
};

export type AmazonConnectFullApiSchemaAppIntegrationsConfiguration = {
  appIntegrationArn: string;
  objectFields?: AmazonConnectFullApiSchemaObjectFieldsList;
};

export type AmazonConnectFullApiSchemaManagedSourceConfiguration = {
  webCrawlerConfiguration: AmazonConnectFullApiSchemaWebCrawlerConfiguration;
};

export type AmazonConnectFullApiSchemaChunkingConfiguration = {
  chunkingStrategy: "FIXED_SIZE" | "NONE" | "HIERARCHICAL" | "SEMANTIC";
  fixedSizeChunkingConfiguration?: AmazonConnectFullApiSchemaFixedSizeChunkingConfiguration;
  hierarchicalChunkingConfiguration?: AmazonConnectFullApiSchemaHierarchicalChunkingConfiguration;
  semanticChunkingConfiguration?: AmazonConnectFullApiSchemaSemanticChunkingConfiguration;
};

export type AmazonConnectFullApiSchemaParsingConfiguration = {
  parsingStrategy: "BEDROCK_FOUNDATION_MODEL";
  bedrockFoundationModelConfiguration?: AmazonConnectFullApiSchemaBedrockFoundationModelConfigurationForParsing;
};

export type AmazonConnectFullApiSchemaKnowledgeBaseData = {
  knowledgeBaseId: string;
  knowledgeBaseArn: string;
  name: string;
  knowledgeBaseType: "EXTERNAL" | "CUSTOM" | "QUICK_RESPONSES" | "MESSAGE_TEMPLATES" | "MANAGED";
  status: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "ACTIVE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED";
  lastContentModificationTime?: string;
  vectorIngestionConfiguration?: AmazonConnectFullApiSchemaVectorIngestionConfiguration;
  sourceConfiguration?: AmazonConnectFullApiSchemaSourceConfiguration;
  renderingConfiguration?: AmazonConnectFullApiSchemaRenderingConfiguration;
  serverSideEncryptionConfiguration?: AmazonConnectFullApiSchemaServerSideEncryptionConfiguration;
  description?: string;
  tags?: AmazonConnectFullApiSchemaTags2;
  ingestionStatus?: "SYNC_FAILED" | "SYNCING_IN_PROGRESS" | "SYNC_SUCCESS" | "CREATE_IN_PROGRESS";
  ingestionFailureReasons?: AmazonConnectFullApiSchemaFailureReason;
};

export type AmazonConnectFullApiSchemaEmailMessageTemplateContent = {
  subject?: string;
  body?: AmazonConnectFullApiSchemaEmailMessageTemplateContentBody;
  headers?: AmazonConnectFullApiSchemaEmailHeaders2;
};

export type AmazonConnectFullApiSchemaSMSMessageTemplateContent = {
  body?: AmazonConnectFullApiSchemaSMSMessageTemplateContentBody;
};

export type AmazonConnectFullApiSchemaWhatsAppMessageTemplateContent = {
  data?: string;
};

export type AmazonConnectFullApiSchemaPushMessageTemplateContent = {
  adm?: AmazonConnectFullApiSchemaPushADMMessageTemplateContent;
  apns?: AmazonConnectFullApiSchemaPushAPNSMessageTemplateContent;
  fcm?: AmazonConnectFullApiSchemaPushFCMMessageTemplateContent;
  baidu?: AmazonConnectFullApiSchemaPushBaiduMessageTemplateContent;
};

export type AmazonConnectFullApiSchemaWhatsAppMessageTemplateSourceConfiguration = {
  businessAccountId: string;
  templateId: string;
  components?: AmazonConnectFullApiSchemaWhatsAppMessageTemplateComponents;
};

export type AmazonConnectFullApiSchemaSystemAttributes = {
  name?: string;
  customerEndpoint?: AmazonConnectFullApiSchemaSystemEndpointAttributes;
  systemEndpoint?: AmazonConnectFullApiSchemaSystemEndpointAttributes;
};

export type AmazonConnectFullApiSchemaAgentAttributes = {
  firstName?: string;
  lastName?: string;
};

export type AmazonConnectFullApiSchemaCustomerProfileAttributes = {
  profileId?: string;
  profileARN?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  accountNumber?: string;
  emailAddress?: string;
  phoneNumber?: string;
  additionalInformation?: string;
  partyType?: string;
  businessName?: string;
  birthDate?: string;
  gender?: string;
  mobilePhoneNumber?: string;
  homePhoneNumber?: string;
  businessPhoneNumber?: string;
  businessEmailAddress?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  address4?: string;
  city?: string;
  county?: string;
  country?: string;
  postalCode?: string;
  province?: string;
  state?: string;
  shippingAddress1?: string;
  shippingAddress2?: string;
  shippingAddress3?: string;
  shippingAddress4?: string;
  shippingCity?: string;
  shippingCounty?: string;
  shippingCountry?: string;
  shippingPostalCode?: string;
  shippingProvince?: string;
  shippingState?: string;
  mailingAddress1?: string;
  mailingAddress2?: string;
  mailingAddress3?: string;
  mailingAddress4?: string;
  mailingCity?: string;
  mailingCounty?: string;
  mailingCountry?: string;
  mailingPostalCode?: string;
  mailingProvince?: string;
  mailingState?: string;
  billingAddress1?: string;
  billingAddress2?: string;
  billingAddress3?: string;
  billingAddress4?: string;
  billingCity?: string;
  billingCounty?: string;
  billingCountry?: string;
  billingPostalCode?: string;
  billingProvince?: string;
  billingState?: string;
  custom?: AmazonConnectFullApiSchemaCustomAttributes;
};

export type AmazonConnectFullApiSchemaCustomAttributes = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaGroupingValues = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaMessageTemplateData = {
  messageTemplateArn: string;
  messageTemplateId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  channel?: string;
  channelSubtype: "EMAIL" | "SMS" | "WHATSAPP" | "PUSH";
  createdTime: string;
  lastModifiedTime: string;
  lastModifiedBy: string;
  content?: AmazonConnectFullApiSchemaMessageTemplateContentProvider;
  description?: string;
  language?: string;
  sourceConfigurationSummary?: AmazonConnectFullApiSchemaMessageTemplateSourceConfigurationSummary;
  groupingConfiguration?: AmazonConnectFullApiSchemaGroupingConfiguration;
  defaultAttributes?: AmazonConnectFullApiSchemaMessageTemplateAttributes;
  attributeTypes?: AmazonConnectFullApiSchemaMessageTemplateAttributeTypeList;
  messageTemplateContentSha256: string;
  tags?: AmazonConnectFullApiSchemaTags2;
};

export type AmazonConnectFullApiSchemaMessageTemplateAttachment = {
  contentDisposition: "ATTACHMENT";
  name: string;
  uploadedTime: string;
  url: string;
  urlExpiry: string;
  attachmentId: string;
};

export type AmazonConnectFullApiSchemaExtendedMessageTemplateData = {
  messageTemplateArn: string;
  messageTemplateId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  channel?: string;
  channelSubtype: "EMAIL" | "SMS" | "WHATSAPP" | "PUSH";
  createdTime: string;
  lastModifiedTime: string;
  lastModifiedBy: string;
  content?: AmazonConnectFullApiSchemaMessageTemplateContentProvider;
  description?: string;
  language?: string;
  sourceConfigurationSummary?: AmazonConnectFullApiSchemaMessageTemplateSourceConfigurationSummary;
  groupingConfiguration?: AmazonConnectFullApiSchemaGroupingConfiguration;
  defaultAttributes?: AmazonConnectFullApiSchemaMessageTemplateAttributes;
  attributeTypes?: AmazonConnectFullApiSchemaMessageTemplateAttributeTypeList;
  attachments?: AmazonConnectFullApiSchemaMessageTemplateAttachmentList;
  isActive?: boolean;
  versionNumber?: number;
  messageTemplateContentSha256: string;
  tags?: AmazonConnectFullApiSchemaTags2;
};

export type AmazonConnectFullApiSchemaQuickResponseData = {
  quickResponseArn: string;
  quickResponseId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  contentType: string;
  status: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "CREATED" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED" | "UPDATE_IN_PROGRESS" | "UPDATE_FAILED";
  createdTime: string;
  lastModifiedTime: string;
  contents?: AmazonConnectFullApiSchemaQuickResponseContents;
  description?: string;
  groupingConfiguration?: AmazonConnectFullApiSchemaGroupingConfiguration;
  shortcutKey?: string;
  lastModifiedBy?: string;
  isActive?: boolean;
  channels?: AmazonConnectFullApiSchemaChannels;
  language?: string;
  tags?: AmazonConnectFullApiSchemaTags2;
};

export type AmazonConnectFullApiSchemaTagCondition = {
  key: string;
  value?: string;
};

export type AmazonConnectFullApiSchemaAndConditions = ReadonlyArray<AmazonConnectFullApiSchemaTagCondition>;

export type AmazonConnectFullApiSchemaOrConditions = ReadonlyArray<AmazonConnectFullApiSchemaOrCondition>;

export type AmazonConnectFullApiSchemaOrchestratorConfigurationEntry = {
  aiAgentId?: string;
  orchestratorUseCase: string;
};

export type AmazonConnectFullApiSchemaSessionData = {
  sessionArn: string;
  sessionId: string;
  name: string;
  description?: string;
  tags?: AmazonConnectFullApiSchemaTags2;
  integrationConfiguration?: AmazonConnectFullApiSchemaSessionIntegrationConfiguration;
  tagFilter?: AmazonConnectFullApiSchemaTagFilter;
  aiAgentConfiguration?: AmazonConnectFullApiSchemaAIAgentConfigurationMap;
  origin?: "SYSTEM" | "CUSTOMER";
  orchestratorConfigurationList?: AmazonConnectFullApiSchemaOrchestratorConfigurationList;
};

export type AmazonConnectFullApiSchemaContentSummary = {
  contentArn: string;
  contentId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  revisionId: string;
  title: string;
  contentType: string;
  status: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "ACTIVE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED" | "UPDATE_FAILED";
  metadata: AmazonConnectFullApiSchemaContentMetadata;
  tags?: AmazonConnectFullApiSchemaTags2;
};

export type AmazonConnectFullApiSchemaImportJobData = {
  importJobId: string;
  knowledgeBaseId: string;
  uploadId: string;
  knowledgeBaseArn: string;
  importJobType: "QUICK_RESPONSES";
  status: "START_IN_PROGRESS" | "FAILED" | "COMPLETE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED";
  url: string;
  failedRecordReport?: string;
  urlExpiry: string;
  createdTime: string;
  lastModifiedTime: string;
  metadata?: AmazonConnectFullApiSchemaContentMetadata;
  externalSourceConfiguration?: AmazonConnectFullApiSchemaExternalSourceConfiguration;
};

export type AmazonConnectFullApiSchemaMessageOutput = {
  value: AmazonConnectFullApiSchemaMessageData;
  messageId: string;
  participant: "CUSTOMER" | "AGENT" | "BOT";
  timestamp: string;
};

export type AmazonConnectFullApiSchemaConversationState = {
  status: "CLOSED" | "READY" | "PROCESSING";
  reason?: "SUCCESS" | "FAILED" | "REJECTED";
};

export type AmazonConnectFullApiSchemaRecommendationList = ReadonlyArray<AmazonConnectFullApiSchemaRecommendationData>;

export type AmazonConnectFullApiSchemaRecommendationTriggerList = ReadonlyArray<AmazonConnectFullApiSchemaRecommendationTrigger>;

export type AmazonConnectFullApiSchemaAIAgentVersionSummariesList = ReadonlyArray<AmazonConnectFullApiSchemaAIAgentVersionSummary>;

export type AmazonConnectFullApiSchemaAIAgentSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaAIAgentSummary>;

export type AmazonConnectFullApiSchemaAIGuardrailVersionSummariesList = ReadonlyArray<AmazonConnectFullApiSchemaAIGuardrailVersionSummary>;

export type AmazonConnectFullApiSchemaAIGuardrailSummariesList = ReadonlyArray<AmazonConnectFullApiSchemaAIGuardrailSummary>;

export type AmazonConnectFullApiSchemaAIPromptVersionSummariesList = ReadonlyArray<AmazonConnectFullApiSchemaAIPromptVersionSummary>;

export type AmazonConnectFullApiSchemaAIPromptSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaAIPromptSummary>;

export type AmazonConnectFullApiSchemaAssistantAssociationSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaAssistantAssociationSummary>;

export type AmazonConnectFullApiSchemaAssistantList = ReadonlyArray<AmazonConnectFullApiSchemaAssistantSummary>;

export type AmazonConnectFullApiSchemaContentAssociationSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaContentAssociationSummary>;

export type AmazonConnectFullApiSchemaContentSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaContentSummary>;

export type AmazonConnectFullApiSchemaImportJobList = ReadonlyArray<AmazonConnectFullApiSchemaImportJobSummary>;

export type AmazonConnectFullApiSchemaKnowledgeBaseList = ReadonlyArray<AmazonConnectFullApiSchemaKnowledgeBaseSummary>;

export type AmazonConnectFullApiSchemaMessageTemplateVersionSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaMessageTemplateVersionSummary>;

export type AmazonConnectFullApiSchemaMessageTemplateSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaMessageTemplateSummary>;

export type AmazonConnectFullApiSchemaMessageList = ReadonlyArray<AmazonConnectFullApiSchemaMessageOutput>;

export type AmazonConnectFullApiSchemaModelSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaModelSummary>;

export type AmazonConnectFullApiSchemaQuickResponseSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaQuickResponseSummary>;

export type AmazonConnectFullApiSchemaSpanList = ReadonlyArray<AmazonConnectFullApiSchemaSpan>;

export type AmazonConnectFullApiSchemaNotifyRecommendationsReceivedErrorList = ReadonlyArray<AmazonConnectFullApiSchemaNotifyRecommendationsReceivedError>;

export type AmazonConnectFullApiSchemaGenerativeContentFeedbackData = {
  relevance: "HELPFUL" | "NOT_HELPFUL";
};

export type AmazonConnectFullApiSchemaQueryCondition = {
  single: AmazonConnectFullApiSchemaQueryConditionItem;
};

export type AmazonConnectFullApiSchemaQueryTextInputData = {
  text: string;
};

export type AmazonConnectFullApiSchemaIntentInputData = {
  intentId: string;
};

export type AmazonConnectFullApiSchemaCaseSummarizationInputData = {
  caseArn: string;
};

export type AmazonConnectFullApiSchemaQueryResultsList = ReadonlyArray<AmazonConnectFullApiSchemaResultData>;

export type AmazonConnectFullApiSchemaMessageTemplateSourceConfigurationSummary = {
  whatsApp: AmazonConnectFullApiSchemaWhatsAppMessageTemplateSourceConfigurationSummary;
};

export type AmazonConnectFullApiSchemaMessageTemplateAttributeKeyList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaMessageTemplateAttachmentList = ReadonlyArray<AmazonConnectFullApiSchemaMessageTemplateAttachment>;

export type AmazonConnectFullApiSchemaKnowledgeSource = {
  assistantAssociationIds: AmazonConnectFullApiSchemaAssistantAssociationIdList;
};

export type AmazonConnectFullApiSchemaRetrievalFilterConfiguration = {
  andAll: AmazonConnectFullApiSchemaRetrievalFilterList;
} | {
  equals: AmazonConnectFullApiSchemaFilterAttribute;
} | {
  greaterThan: AmazonConnectFullApiSchemaFilterAttribute;
} | {
  greaterThanOrEquals: AmazonConnectFullApiSchemaFilterAttribute;
} | {
  in: AmazonConnectFullApiSchemaFilterAttribute;
} | {
  lessThan: AmazonConnectFullApiSchemaFilterAttribute;
} | {
  lessThanOrEquals: AmazonConnectFullApiSchemaFilterAttribute;
} | {
  listContains: AmazonConnectFullApiSchemaFilterAttribute;
} | {
  notEquals: AmazonConnectFullApiSchemaFilterAttribute;
} | {
  notIn: AmazonConnectFullApiSchemaFilterAttribute;
} | {
  orAll: AmazonConnectFullApiSchemaRetrievalFilterList;
} | {
  startsWith: AmazonConnectFullApiSchemaFilterAttribute;
} | {
  stringContains: AmazonConnectFullApiSchemaFilterAttribute;
};

export type AmazonConnectFullApiSchemaRetrieveResultList = ReadonlyArray<AmazonConnectFullApiSchemaRetrieveResult>;

export type AmazonConnectFullApiSchemaFilterList = ReadonlyArray<AmazonConnectFullApiSchemaFilter2>;

export type AmazonConnectFullApiSchemaMessageTemplateQueryFieldList = ReadonlyArray<AmazonConnectFullApiSchemaMessageTemplateQueryField>;

export type AmazonConnectFullApiSchemaMessageTemplateFilterFieldList = ReadonlyArray<AmazonConnectFullApiSchemaMessageTemplateFilterField>;

export type AmazonConnectFullApiSchemaMessageTemplateOrderField = {
  name: string;
  order?: "ASC" | "DESC";
};

export type AmazonConnectFullApiSchemaMessageTemplateSearchResultsList = ReadonlyArray<AmazonConnectFullApiSchemaMessageTemplateSearchResultData>;

export type AmazonConnectFullApiSchemaQuickResponseQueryFieldList = ReadonlyArray<AmazonConnectFullApiSchemaQuickResponseQueryField>;

export type AmazonConnectFullApiSchemaQuickResponseFilterFieldList = ReadonlyArray<AmazonConnectFullApiSchemaQuickResponseFilterField>;

export type AmazonConnectFullApiSchemaQuickResponseOrderField = {
  name: string;
  order?: "ASC" | "DESC";
};

export type AmazonConnectFullApiSchemaQuickResponseSearchResultsList = ReadonlyArray<AmazonConnectFullApiSchemaQuickResponseSearchResultData>;

export type AmazonConnectFullApiSchemaSessionSummaries = ReadonlyArray<AmazonConnectFullApiSchemaSessionSummary>;

export type AmazonConnectFullApiSchemaMessageData = {
  text: AmazonConnectFullApiSchemaTextMessage;
} | {
  toolUseResult: AmazonConnectFullApiSchemaToolUseResultData;
};

export type AmazonConnectFullApiSchemaSelfServiceConversationHistoryList = ReadonlyArray<AmazonConnectFullApiSchemaSelfServiceConversationHistory>;

export type AmazonConnectFullApiSchemaHeaders = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaConfiguration = {
  connectConfiguration: AmazonConnectFullApiSchemaConnectConfiguration;
};

export type AmazonConnectFullApiSchemaRuntimeSessionData = {
  key: string;
  value: AmazonConnectFullApiSchemaRuntimeSessionDataValue;
};

export type AmazonConnectFullApiSchemaAssistantData2 = {
  assistantId: string;
  assistantArn: string;
  name: string;
  type: "AGENT";
  status: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "ACTIVE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED";
  description?: string;
  tags?: AmazonConnectFullApiSchemaTags3;
  serverSideEncryptionConfiguration?: AmazonConnectFullApiSchemaServerSideEncryptionConfiguration2;
  integrationConfiguration?: AmazonConnectFullApiSchemaAssistantIntegrationConfiguration2;
};

export type AmazonConnectFullApiSchemaAssistantAssociationData2 = {
  assistantAssociationId: string;
  assistantAssociationArn: string;
  assistantId: string;
  assistantArn: string;
  associationType: "KNOWLEDGE_BASE";
  associationData: AmazonConnectFullApiSchemaAssistantAssociationOutputData2;
  tags?: AmazonConnectFullApiSchemaTags3;
};

export type AmazonConnectFullApiSchemaContentData2 = {
  contentArn: string;
  contentId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  revisionId: string;
  title: string;
  contentType: string;
  status: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "ACTIVE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED" | "UPDATE_FAILED";
  metadata: AmazonConnectFullApiSchemaContentMetadata2;
  tags?: AmazonConnectFullApiSchemaTags3;
  linkOutUri?: string;
  url: string;
  urlExpiry: string;
};

export type AmazonConnectFullApiSchemaAppIntegrationsConfiguration2 = {
  appIntegrationArn: string;
  objectFields?: AmazonConnectFullApiSchemaObjectFieldsList2;
};

export type AmazonConnectFullApiSchemaKnowledgeBaseData2 = {
  knowledgeBaseId: string;
  knowledgeBaseArn: string;
  name: string;
  knowledgeBaseType: "EXTERNAL" | "CUSTOM" | "QUICK_RESPONSES";
  status: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "ACTIVE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED";
  lastContentModificationTime?: string;
  sourceConfiguration?: AmazonConnectFullApiSchemaSourceConfiguration2;
  renderingConfiguration?: AmazonConnectFullApiSchemaRenderingConfiguration2;
  serverSideEncryptionConfiguration?: AmazonConnectFullApiSchemaServerSideEncryptionConfiguration2;
  description?: string;
  tags?: AmazonConnectFullApiSchemaTags3;
};

export type AmazonConnectFullApiSchemaGroupingValues2 = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaQuickResponseData2 = {
  quickResponseArn: string;
  quickResponseId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  contentType: string;
  status: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "CREATED" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED" | "UPDATE_IN_PROGRESS" | "UPDATE_FAILED";
  createdTime: string;
  lastModifiedTime: string;
  contents?: AmazonConnectFullApiSchemaQuickResponseContents2;
  description?: string;
  groupingConfiguration?: AmazonConnectFullApiSchemaGroupingConfiguration2;
  shortcutKey?: string;
  lastModifiedBy?: string;
  isActive?: boolean;
  channels?: AmazonConnectFullApiSchemaChannels2;
  language?: string;
  tags?: AmazonConnectFullApiSchemaTags3;
};

export type AmazonConnectFullApiSchemaSessionData2 = {
  sessionArn: string;
  sessionId: string;
  name: string;
  description?: string;
  tags?: AmazonConnectFullApiSchemaTags3;
  integrationConfiguration?: AmazonConnectFullApiSchemaSessionIntegrationConfiguration2;
};

export type AmazonConnectFullApiSchemaContentSummary2 = {
  contentArn: string;
  contentId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  revisionId: string;
  title: string;
  contentType: string;
  status: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "ACTIVE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED" | "UPDATE_FAILED";
  metadata: AmazonConnectFullApiSchemaContentMetadata2;
  tags?: AmazonConnectFullApiSchemaTags3;
};

export type AmazonConnectFullApiSchemaImportJobData2 = {
  importJobId: string;
  knowledgeBaseId: string;
  uploadId: string;
  knowledgeBaseArn: string;
  importJobType: "QUICK_RESPONSES";
  status: "START_IN_PROGRESS" | "FAILED" | "COMPLETE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED";
  url: string;
  failedRecordReport?: string;
  urlExpiry: string;
  createdTime: string;
  lastModifiedTime: string;
  metadata?: AmazonConnectFullApiSchemaContentMetadata2;
  externalSourceConfiguration?: AmazonConnectFullApiSchemaExternalSourceConfiguration2;
};

export type AmazonConnectFullApiSchemaRecommendationList2 = ReadonlyArray<AmazonConnectFullApiSchemaRecommendationData2>;

export type AmazonConnectFullApiSchemaRecommendationTriggerList2 = ReadonlyArray<AmazonConnectFullApiSchemaRecommendationTrigger2>;

export type AmazonConnectFullApiSchemaAssistantAssociationSummaryList2 = ReadonlyArray<AmazonConnectFullApiSchemaAssistantAssociationSummary2>;

export type AmazonConnectFullApiSchemaAssistantList2 = ReadonlyArray<AmazonConnectFullApiSchemaAssistantSummary2>;

export type AmazonConnectFullApiSchemaContentSummaryList2 = ReadonlyArray<AmazonConnectFullApiSchemaContentSummary2>;

export type AmazonConnectFullApiSchemaImportJobList2 = ReadonlyArray<AmazonConnectFullApiSchemaImportJobSummary2>;

export type AmazonConnectFullApiSchemaKnowledgeBaseList2 = ReadonlyArray<AmazonConnectFullApiSchemaKnowledgeBaseSummary2>;

export type AmazonConnectFullApiSchemaQuickResponseSummaryList2 = ReadonlyArray<AmazonConnectFullApiSchemaQuickResponseSummary2>;

export type AmazonConnectFullApiSchemaNotifyRecommendationsReceivedErrorList2 = ReadonlyArray<AmazonConnectFullApiSchemaNotifyRecommendationsReceivedError2>;

export type AmazonConnectFullApiSchemaQueryResultsList2 = ReadonlyArray<AmazonConnectFullApiSchemaResultData2>;

export type AmazonConnectFullApiSchemaFilterList2 = ReadonlyArray<AmazonConnectFullApiSchemaFilter3>;

export type AmazonConnectFullApiSchemaQuickResponseQueryFieldList2 = ReadonlyArray<AmazonConnectFullApiSchemaQuickResponseQueryField2>;

export type AmazonConnectFullApiSchemaQuickResponseFilterFieldList2 = ReadonlyArray<AmazonConnectFullApiSchemaQuickResponseFilterField2>;

export type AmazonConnectFullApiSchemaQuickResponseOrderField2 = {
  name: string;
  order?: "ASC" | "DESC";
};

export type AmazonConnectFullApiSchemaQuickResponseSearchResultsList2 = ReadonlyArray<AmazonConnectFullApiSchemaQuickResponseSearchResultData2>;

export type AmazonConnectFullApiSchemaSessionSummaries2 = ReadonlyArray<AmazonConnectFullApiSchemaSessionSummary2>;

export type AmazonConnectFullApiSchemaHeaders2 = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaConfiguration2 = {
  connectConfiguration: AmazonConnectFullApiSchemaConnectConfiguration2;
};

export type AmazonConnectFullApiSchemaApplicationApprovedOrigins = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaContactHandlingScope = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaFieldsList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaApplicationAssociationSummary = {
  ApplicationAssociationArn?: string;
  ApplicationArn?: string;
  ClientId?: string;
};

export type AmazonConnectFullApiSchemaApplicationSummary = {
  Arn?: string;
  Id?: string;
  Name?: string;
  Namespace?: string;
  CreatedTime?: string;
  LastModifiedTime?: string;
  IsService?: boolean;
  ApplicationType?: AmazonConnectFullApiSchemaApplicationType;
};

export type AmazonConnectFullApiSchemaDataIntegrationAssociationSummary = {
  DataIntegrationAssociationArn?: string;
  DataIntegrationArn?: string;
  ClientId?: string;
  DestinationURI?: string;
  LastExecutionStatus?: AmazonConnectFullApiSchemaLastExecutionStatus;
  ExecutionConfiguration?: AmazonConnectFullApiSchemaExecutionConfiguration;
};

export type AmazonConnectFullApiSchemaDataIntegrationSummary = {
  Arn?: string;
  Name?: string;
  SourceURI?: string;
};

export type AmazonConnectFullApiSchemaEventIntegrationAssociation = {
  EventIntegrationAssociationArn?: string;
  EventIntegrationAssociationId?: string;
  EventIntegrationName?: string;
  ClientId?: string;
  EventBridgeRuleName?: string;
  ClientAssociationMetadata?: AmazonConnectFullApiSchemaClientAssociationMetadata;
};

export type AmazonConnectFullApiSchemaEventIntegration = {
  EventIntegrationArn?: string;
  Name?: string;
  Description?: string;
  EventFilter?: AmazonConnectFullApiSchemaEventFilter;
  EventBridgeBus?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap;
};

export type AmazonConnectFullApiSchemaEncryptionConfig3 = {
  EncryptionType: AmazonConnectFullApiSchemaEncryptionType2;
  KeyId: string;
};

export type AmazonConnectFullApiSchemaSuccessfulBatchAssociationSummary = {
  ResourceArn?: string;
};

export type AmazonConnectFullApiSchemaFailedBatchAssociationSummary = {
  ResourceArn?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
};

export type AmazonConnectFullApiSchemaAnalyticsDataAssociationResult = {
  DataSetId?: string;
  TargetAccountId?: string;
  ResourceShareId?: string;
  ResourceShareArn?: string;
  ResourceShareStatus?: string;
};

export type AmazonConnectFullApiSchemaErrorResult = {
  ErrorCode?: string;
  ErrorMessage?: string;
};

export type AmazonConnectFullApiSchemaBatchCreateDataTableValueSuccessResult = {
  PrimaryValues: AmazonConnectFullApiSchemaPrimaryValuesSet;
  AttributeName: string;
  RecordId: string;
  LockVersion: AmazonConnectFullApiSchemaDataTableLockVersion;
};

export type AmazonConnectFullApiSchemaBatchCreateDataTableValueFailureResult = {
  PrimaryValues: AmazonConnectFullApiSchemaPrimaryValuesSet;
  AttributeName: string;
  Message: string;
};

export type AmazonConnectFullApiSchemaBatchDeleteDataTableValueSuccessResult = {
  PrimaryValues: AmazonConnectFullApiSchemaPrimaryValuesSet;
  AttributeName: string;
  LockVersion: AmazonConnectFullApiSchemaDataTableLockVersion;
};

export type AmazonConnectFullApiSchemaBatchDeleteDataTableValueFailureResult = {
  PrimaryValues: AmazonConnectFullApiSchemaPrimaryValuesSet;
  AttributeName: string;
  Message: string;
};

export type AmazonConnectFullApiSchemaBatchDescribeDataTableValueSuccessResult = {
  RecordId: string;
  AttributeId: string;
  PrimaryValues: AmazonConnectFullApiSchemaPrimaryValuesResponseSet;
  AttributeName: string;
  Value?: string;
  LockVersion: AmazonConnectFullApiSchemaDataTableLockVersion;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaBatchDescribeDataTableValueFailureResult = {
  PrimaryValues: AmazonConnectFullApiSchemaPrimaryValuesSet;
  AttributeName: string;
  Message: string;
};

export type AmazonConnectFullApiSchemaAttachedFile = {
  CreationTime: string;
  FileArn: string;
  FileId: string;
  FileName: string;
  FileSizeInBytes: number;
  FileStatus: AmazonConnectFullApiSchemaFileStatusType;
  CreatedBy?: AmazonConnectFullApiSchemaCreatedByInfo;
  FileUseCaseType?: AmazonConnectFullApiSchemaFileUseCaseType;
  AssociatedResourceArn?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};

export type AmazonConnectFullApiSchemaAttachedFileError = {
  ErrorCode?: string;
  ErrorMessage?: string;
  FileId?: string;
};

export type AmazonConnectFullApiSchemaFlowAssociationSummary = {
  ResourceId?: string;
  FlowId?: string;
  ResourceType?: AmazonConnectFullApiSchemaListFlowAssociationResourceType;
};

export type AmazonConnectFullApiSchemaCampaign3 = {
  CampaignId?: string;
};

export type AmazonConnectFullApiSchemaSuccessfulRequest = {
  RequestIdentifier?: string;
  ContactId?: string;
};

export type AmazonConnectFullApiSchemaFailedRequest = {
  RequestIdentifier?: string;
  FailureReasonCode?: AmazonConnectFullApiSchemaFailureReasonCode;
  FailureReasonMessage?: string;
};

export type AmazonConnectFullApiSchemaBatchUpdateDataTableValueSuccessResult = {
  PrimaryValues: AmazonConnectFullApiSchemaPrimaryValuesSet;
  AttributeName: string;
  LockVersion: AmazonConnectFullApiSchemaDataTableLockVersion;
};

export type AmazonConnectFullApiSchemaBatchUpdateDataTableValueFailureResult = {
  PrimaryValues: AmazonConnectFullApiSchemaPrimaryValuesSet;
  AttributeName: string;
  Message: string;
};

export type AmazonConnectFullApiSchemaReferenceStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaSegmentAttributeValueMap = {
  readonly [key: string]: AmazonConnectFullApiSchemaSegmentAttributeValue | undefined;
};

export type AmazonConnectFullApiSchemaSegmentAttributeValueList = ReadonlyArray<AmazonConnectFullApiSchemaSegmentAttributeValue>;

export type AmazonConnectFullApiSchemaValidationEnumValues = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaEvaluationFormSection = {
  Title: string;
  RefId: string;
  Instructions?: string;
  Items: AmazonConnectFullApiSchemaEvaluationFormItemsList;
  Weight?: number;
};

export type AmazonConnectFullApiSchemaEvaluationFormQuestion = {
  Title: string;
  Instructions?: string;
  RefId: string;
  NotApplicableEnabled?: boolean;
  QuestionType: AmazonConnectFullApiSchemaEvaluationFormQuestionType;
  QuestionTypeProperties?: AmazonConnectFullApiSchemaEvaluationFormQuestionTypeProperties;
  Enablement?: AmazonConnectFullApiSchemaEvaluationFormItemEnablementConfiguration;
  Weight?: number;
};

export type AmazonConnectFullApiSchemaEvaluationReviewNotificationRecipient = {
  Type: AmazonConnectFullApiSchemaEvaluationReviewNotificationRecipientType;
  Value: AmazonConnectFullApiSchemaEvaluationReviewNotificationRecipientValue;
};

export type AmazonConnectFullApiSchemaHoursOfOperationDays = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaHoursOfOperationTimeSlice = {
  Hours: number;
  Minutes: number;
};

export type AmazonConnectFullApiSchemaOverrideDays = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaOverrideTimeSlice = {
  Hours: number;
  Minutes: number;
};

export type AmazonConnectFullApiSchemaRecurrenceFrequency = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaMonthList = ReadonlyArray<number>;

export type AmazonConnectFullApiSchemaMonthDayList = ReadonlyArray<number>;

export type AmazonConnectFullApiSchemaWeekdayOccurrenceList = ReadonlyArray<number>;

export type AmazonConnectFullApiSchemaVideoCapability = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaScreenShareCapability = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCrossChannelBehavior = {
  BehaviorType: AmazonConnectFullApiSchemaBehaviorType;
};

export type AmazonConnectFullApiSchemaActionType2 = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaTaskActionDefinition = {
  Name: string;
  Description?: string;
  ContactFlowId: string;
  References?: AmazonConnectFullApiSchemaContactReferences;
};

export type AmazonConnectFullApiSchemaEventBridgeActionDefinition = {
  Name: string;
};

export type AmazonConnectFullApiSchemaAssignContactCategoryActionDefinition = {};

export type AmazonConnectFullApiSchemaSendNotificationActionDefinition = {
  DeliveryMethod: AmazonConnectFullApiSchemaNotificationDeliveryType;
  Subject?: string;
  Content: string;
  ContentType: AmazonConnectFullApiSchemaNotificationContentType;
  Recipient: AmazonConnectFullApiSchemaNotificationRecipientType;
  Exclusion?: AmazonConnectFullApiSchemaNotificationRecipientType;
};

export type AmazonConnectFullApiSchemaCreateCaseActionDefinition = {
  Fields: AmazonConnectFullApiSchemaFieldValues;
  TemplateId: string;
};

export type AmazonConnectFullApiSchemaUpdateCaseActionDefinition = {
  Fields: AmazonConnectFullApiSchemaFieldValues;
};

export type AmazonConnectFullApiSchemaAssignSlaActionDefinition = {
  SlaAssignmentType: AmazonConnectFullApiSchemaSlaAssignmentType;
  CaseSlaConfiguration?: AmazonConnectFullApiSchemaCaseSlaConfiguration;
};

export type AmazonConnectFullApiSchemaEndAssociatedTasksActionDefinition = {};

export type AmazonConnectFullApiSchemaSubmitAutoEvaluationActionDefinition = {
  EvaluationFormId: string;
};

export type AmazonConnectFullApiSchemaApplicationPermissions = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaApplicationType2 = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaFlowModuleType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaPrimaryAttributeAccessControlConfigurationItem = {
  PrimaryAttributeValues?: AmazonConnectFullApiSchemaPrimaryAttributeValuesSet;
};

export type AmazonConnectFullApiSchemaRequiredFieldInfo = {
  Id?: AmazonConnectFullApiSchemaTaskTemplateFieldIdentifier;
};

export type AmazonConnectFullApiSchemaReadOnlyFieldInfo = {
  Id?: AmazonConnectFullApiSchemaTaskTemplateFieldIdentifier;
};

export type AmazonConnectFullApiSchemaInvisibleFieldInfo = {
  Id?: AmazonConnectFullApiSchemaTaskTemplateFieldIdentifier;
};

export type AmazonConnectFullApiSchemaTaskTemplateDefaultFieldValue = {
  Id?: AmazonConnectFullApiSchemaTaskTemplateFieldIdentifier;
  DefaultValue?: string;
};

export type AmazonConnectFullApiSchemaTaskTemplateFieldIdentifier = {
  Name?: string;
};

export type AmazonConnectFullApiSchemaTaskTemplateFieldType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaSingleSelectOptions = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaAfterContactWorkConfig = {
  AfterContactWorkTimeLimit?: number;
};

export type AmazonConnectFullApiSchemaVoiceEnhancementMode = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaViewContent = {
  InputSchema?: string;
  Template?: string;
  Actions?: AmazonConnectFullApiSchemaViewActions;
};

export type AmazonConnectFullApiSchemaWorkspaceThemePalette = {
  Header?: AmazonConnectFullApiSchemaPaletteHeader;
  Navigation?: AmazonConnectFullApiSchemaPaletteNavigation;
  Canvas?: AmazonConnectFullApiSchemaPaletteCanvas;
  Primary?: AmazonConnectFullApiSchemaPalettePrimary;
};

export type AmazonConnectFullApiSchemaWorkspaceThemeImages = {
  Logo?: AmazonConnectFullApiSchemaImagesLogo;
};

export type AmazonConnectFullApiSchemaWorkspaceThemeTypography = {
  FontFamily?: AmazonConnectFullApiSchemaFontFamily;
};

export type AmazonConnectFullApiSchemaQueueInfo = {
  Id?: string;
  EnqueueTimestamp?: string;
};

export type AmazonConnectFullApiSchemaAgentInfo = {
  Id?: string;
  AcceptedByAgentTimestamp?: string;
  PreviewEndTimestamp?: string;
  ConnectedToAgentTimestamp?: string;
  AgentPauseDurationInSeconds?: number;
  HierarchyGroups?: AmazonConnectFullApiSchemaHierarchyGroups;
  DeviceInfo?: AmazonConnectFullApiSchemaDeviceInfo;
  Capabilities?: AmazonConnectFullApiSchemaParticipantCapabilities;
  AfterContactWorkDuration?: number;
  AfterContactWorkStartTimestamp?: string;
  AfterContactWorkEndTimestamp?: string;
  AgentInitiatedHoldDuration?: number;
  StateTransitions?: AmazonConnectFullApiSchemaStateTransitions;
  VoiceEnhancementMode?: AmazonConnectFullApiSchemaVoiceEnhancementMode;
};

export type AmazonConnectFullApiSchemaWisdomInfo = {
  SessionArn?: string;
  AiAgents?: AmazonConnectFullApiSchemaAiAgents;
};

export type AmazonConnectFullApiSchemaEndpointInfo = {
  Type?: AmazonConnectFullApiSchemaEndpointType;
  Address?: string;
  DisplayName?: string;
};

export type AmazonConnectFullApiSchemaRoutingCriteria = {
  Steps?: AmazonConnectFullApiSchemaSteps;
  ActivationTimestamp?: string;
  Index?: number;
};

export type AmazonConnectFullApiSchemaCustomer = {
  DeviceInfo?: AmazonConnectFullApiSchemaDeviceInfo;
  Capabilities?: AmazonConnectFullApiSchemaParticipantCapabilities;
};

export type AmazonConnectFullApiSchemaAnsweringMachineDetectionStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCustomerVoiceActivity = {
  GreetingStartTimestamp?: string;
  GreetingEndTimestamp?: string;
};

export type AmazonConnectFullApiSchemaQualityMetrics = {
  Agent?: AmazonConnectFullApiSchemaAgentQualityMetrics;
  Customer?: AmazonConnectFullApiSchemaCustomerQualityMetrics;
};

export type AmazonConnectFullApiSchemaChatMetrics = {
  ChatContactMetrics?: AmazonConnectFullApiSchemaChatContactMetrics;
  AgentMetrics?: AmazonConnectFullApiSchemaParticipantMetrics;
  CustomerMetrics?: AmazonConnectFullApiSchemaParticipantMetrics;
};

export type AmazonConnectFullApiSchemaDisconnectDetails = {
  PotentialDisconnectIssue?: string;
};

export type AmazonConnectFullApiSchemaAdditionalEmailRecipients = {
  ToList?: AmazonConnectFullApiSchemaEmailRecipientsList;
  CcList?: AmazonConnectFullApiSchemaEmailRecipientsList;
};

export type AmazonConnectFullApiSchemaRecordings = ReadonlyArray<AmazonConnectFullApiSchemaRecordingInfo>;

export type AmazonConnectFullApiSchemaContactEvaluations = {
  readonly [key: string]: AmazonConnectFullApiSchemaContactEvaluation | undefined;
};

export type AmazonConnectFullApiSchemaTaskTemplateInfoV2 = {
  Arn?: string;
  Name?: string;
};

export type AmazonConnectFullApiSchemaContactDetails = {
  Name?: string;
  Description?: string;
};

export type AmazonConnectFullApiSchemaNextContacts = ReadonlyArray<AmazonConnectFullApiSchemaNextContactEntry>;

export type AmazonConnectFullApiSchemaGlobalResiliencyMetadata = {
  ActiveRegion?: string;
  OriginRegion?: string;
  TrafficDistributionGroupId?: string;
};

export type AmazonConnectFullApiSchemaEvaluationMetadata = {
  ContactId: string;
  EvaluatorArn: string;
  ContactAgentId?: string;
  CalibrationSessionId?: string;
  Score?: AmazonConnectFullApiSchemaEvaluationScore;
  AutoEvaluation?: AmazonConnectFullApiSchemaAutoEvaluationDetails;
  Acknowledgement?: AmazonConnectFullApiSchemaEvaluationAcknowledgement;
  Review?: AmazonConnectFullApiSchemaEvaluationReviewMetadata;
  ContactParticipant?: AmazonConnectFullApiSchemaEvaluationContactParticipant;
  SamplingJobId?: string;
};

export type AmazonConnectFullApiSchemaEvaluationAnswersOutputMap = {
  readonly [key: string]: AmazonConnectFullApiSchemaEvaluationAnswerOutput | undefined;
};

export type AmazonConnectFullApiSchemaEvaluationStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationScoresMap = {
  readonly [key: string]: AmazonConnectFullApiSchemaEvaluationScore | undefined;
};

export type AmazonConnectFullApiSchemaEvaluationType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationFormVersionStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaParentHoursOfOperationsList = ReadonlyArray<AmazonConnectFullApiSchemaHoursOfOperationsIdentifier>;

export type AmazonConnectFullApiSchemaInstanceStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaInstanceStatusReason = {
  Message?: string;
};

export type AmazonConnectFullApiSchemaReplicationStatusSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaReplicationStatusSummary>;

export type AmazonConnectFullApiSchemaInstanceAttributeType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaNotificationPriority = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaPhoneNumberStatus = {
  Status?: AmazonConnectFullApiSchemaPhoneNumberWorkflowStatus;
  Message?: string;
};

export type AmazonConnectFullApiSchemaPredefinedAttributeConfiguration = {
  EnableValueValidationOnAssociation?: boolean;
  IsReadOnly?: boolean;
};

export type AmazonConnectFullApiSchemaAssociatedQueueIdList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaTrafficDistributionGroupStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaHierarchyPath = {
  LevelOne?: AmazonConnectFullApiSchemaHierarchyGroupSummary;
  LevelTwo?: AmazonConnectFullApiSchemaHierarchyGroupSummary;
  LevelThree?: AmazonConnectFullApiSchemaHierarchyGroupSummary;
  LevelFour?: AmazonConnectFullApiSchemaHierarchyGroupSummary;
  LevelFive?: AmazonConnectFullApiSchemaHierarchyGroupSummary;
};

export type AmazonConnectFullApiSchemaHierarchyLevel = {
  Id?: string;
  Arn?: string;
  Name?: string;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaAttributeNameList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaDataTableEvaluatedValue = {
  RecordId: string;
  PrimaryValues: AmazonConnectFullApiSchemaPrimaryValuesSet;
  AttributeName: string;
  ValueType: AmazonConnectFullApiSchemaDataTableAttributeValueType;
  Found: boolean;
  Error: boolean;
  EvaluatedValue: string;
};

export type AmazonConnectFullApiSchemaContactMetricName = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaContactMetricResult = {
  Name: AmazonConnectFullApiSchemaContactMetricName;
  Value: AmazonConnectFullApiSchemaContactMetricValue;
};

export type AmazonConnectFullApiSchemaCurrentMetricName = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaUnit = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCurrentMetricResult = {
  Dimensions?: AmazonConnectFullApiSchemaDimensions;
  Collections?: AmazonConnectFullApiSchemaCurrentMetricDataCollections;
};

export type AmazonConnectFullApiSchemaContactStates = ReadonlyArray<AmazonConnectFullApiSchemaContactState>;

export type AmazonConnectFullApiSchemaUserData = {
  User?: AmazonConnectFullApiSchemaUserReference;
  RoutingProfile?: AmazonConnectFullApiSchemaRoutingProfileReference;
  HierarchyPath?: AmazonConnectFullApiSchemaHierarchyPathReference;
  Status?: AmazonConnectFullApiSchemaAgentStatusReference;
  AvailableSlotsByChannel?: AmazonConnectFullApiSchemaChannelToCountMap;
  MaxSlotsByChannel?: AmazonConnectFullApiSchemaChannelToCountMap;
  ActiveSlotsByChannel?: AmazonConnectFullApiSchemaChannelToCountMap;
  Contacts?: AmazonConnectFullApiSchemaAgentContactReferenceList;
  NextStatus?: string;
};

export type AmazonConnectFullApiSchemaEffectiveHoursOfOperations = {
  Date?: string;
  OperationalHours?: AmazonConnectFullApiSchemaOperationalHours;
};

export type AmazonConnectFullApiSchemaEffectiveOverrideHours = {
  Date?: string;
  OverrideHours?: AmazonConnectFullApiSchemaOverrideHours;
};

export type AmazonConnectFullApiSchemaHistoricalMetricName = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaThreshold2 = {
  Comparison?: AmazonConnectFullApiSchemaComparison;
  ThresholdValue?: number;
};

export type AmazonConnectFullApiSchemaStatistic2 = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaHistoricalMetricResult = {
  Dimensions?: AmazonConnectFullApiSchemaDimensions;
  Collections?: AmazonConnectFullApiSchemaHistoricalMetricDataCollections;
};

export type AmazonConnectFullApiSchemaFilterValueList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaFilterV2StringCondition = {
  Comparison?: AmazonConnectFullApiSchemaFilterV2StringConditionComparisonOperator;
};

export type AmazonConnectFullApiSchemaThresholdCollections = ReadonlyArray<AmazonConnectFullApiSchemaThresholdV2>;

export type AmazonConnectFullApiSchemaMetricFiltersV2List = ReadonlyArray<AmazonConnectFullApiSchemaMetricFilterV2>;

export type AmazonConnectFullApiSchemaMetricResultV2 = {
  Dimensions?: AmazonConnectFullApiSchemaDimensionsV2Map;
  MetricInterval?: AmazonConnectFullApiSchemaMetricInterval;
  Collections?: AmazonConnectFullApiSchemaMetricDataCollectionsV2;
};

export type AmazonConnectFullApiSchemaAgentStatusSummary = {
  Id?: string;
  Arn?: string;
  Name?: string;
  Type?: AmazonConnectFullApiSchemaAgentStatusType;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaAnalyticsDataSetsResult = {
  DataSetId?: string;
  DataSetName?: string;
};

export type AmazonConnectFullApiSchemaAssociatedContactSummary = {
  ContactId?: string;
  ContactArn?: string;
  InitiationTimestamp?: string;
  DisconnectTimestamp?: string;
  InitialContactId?: string;
  PreviousContactId?: string;
  RelatedContactId?: string;
  InitiationMethod?: AmazonConnectFullApiSchemaContactInitiationMethod;
  Channel?: AmazonConnectFullApiSchemaChannel;
};

export type AmazonConnectFullApiSchemaAttachedFilesConfigurationSummary = {
  InstanceId: string;
  AttachmentScope: AmazonConnectFullApiSchemaAttachmentScope;
  MaximumSizeLimitInBytes?: number;
  ExtensionConfiguration?: AmazonConnectFullApiSchemaExtensionConfiguration;
};

export type AmazonConnectFullApiSchemaAuthenticationProfileSummary = {
  Id?: string;
  Arn?: string;
  Name?: string;
  IsDefault?: boolean;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaLexBotConfig = {
  LexBot?: AmazonConnectFullApiSchemaLexBot;
  LexV2Bot?: AmazonConnectFullApiSchemaLexV2Bot;
};

export type AmazonConnectFullApiSchemaHoursOfOperationsIdentifier = {
  Name: string;
  Id: string;
  Arn?: string;
};

export type AmazonConnectFullApiSchemaEvaluationSummary = {
  EvaluationId: string;
  EvaluationArn: string;
  EvaluationFormTitle: string;
  EvaluationFormId: string;
  CalibrationSessionId?: string;
  Status: AmazonConnectFullApiSchemaEvaluationStatus;
  AutoEvaluationEnabled?: boolean;
  AutoEvaluationStatus?: AmazonConnectFullApiSchemaAutoEvaluationStatus;
  EvaluatorArn: string;
  Score?: AmazonConnectFullApiSchemaEvaluationScore;
  Acknowledgement?: AmazonConnectFullApiSchemaEvaluationAcknowledgementSummary;
  EvaluationType?: AmazonConnectFullApiSchemaEvaluationType;
  CreatedTime: string;
  LastModifiedTime: string;
  ContactParticipant?: AmazonConnectFullApiSchemaEvaluationContactParticipant;
};

export type AmazonConnectFullApiSchemaContactFlowModuleAliasSummary = {
  Arn?: string;
  AliasId?: string;
  Version?: number;
  AliasName?: string;
  AliasDescription?: string;
  LastModifiedTime?: string;
};

export type AmazonConnectFullApiSchemaContactFlowModuleVersionSummary = {
  Arn?: string;
  VersionDescription?: string;
  Version?: number;
};

export type AmazonConnectFullApiSchemaContactFlowModuleSummary = {
  Id?: string;
  Arn?: string;
  Name?: string;
  State?: AmazonConnectFullApiSchemaContactFlowModuleState;
};

export type AmazonConnectFullApiSchemaContactFlowVersionSummary = {
  Arn?: string;
  VersionDescription?: string;
  Version?: number;
};

export type AmazonConnectFullApiSchemaContactFlowSummary = {
  Id?: string;
  Arn?: string;
  Name?: string;
  ContactFlowType?: AmazonConnectFullApiSchemaContactFlowType;
  ContactFlowState?: AmazonConnectFullApiSchemaContactFlowState;
  ContactFlowStatus?: AmazonConnectFullApiSchemaContactFlowStatus;
};

export type AmazonConnectFullApiSchemaReferenceSummary = {
  Url: AmazonConnectFullApiSchemaUrlReference;
} | {
  Attachment: AmazonConnectFullApiSchemaAttachmentReference;
} | {
  EmailMessage: AmazonConnectFullApiSchemaEmailMessageReference;
} | {
  EmailMessageRedacted: AmazonConnectFullApiSchemaEmailMessageReference;
} | {
  EmailMessagePlainText: AmazonConnectFullApiSchemaEmailMessageReference;
} | {
  EmailMessagePlainTextRedacted: AmazonConnectFullApiSchemaEmailMessageReference;
} | {
  String: AmazonConnectFullApiSchemaStringReference;
} | {
  Number: AmazonConnectFullApiSchemaNumberReference;
} | {
  Date: AmazonConnectFullApiSchemaDateReference;
} | {
  Email: AmazonConnectFullApiSchemaEmailReference;
};

export type AmazonConnectFullApiSchemaValueList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaRecordPrimaryValue = {
  RecordId?: string;
  PrimaryValues?: AmazonConnectFullApiSchemaPrimaryValuesResponseSet;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaDataTableValueSummary = {
  RecordId?: string;
  AttributeId?: string;
  PrimaryValues: AmazonConnectFullApiSchemaPrimaryValuesResponseSet;
  AttributeName: string;
  ValueType: AmazonConnectFullApiSchemaDataTableAttributeValueType;
  Value: string;
  LockVersion?: AmazonConnectFullApiSchemaDataTableLockVersion;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaDataTableSummary = {
  Name?: string;
  Id?: string;
  Arn?: string;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaDefaultVocabulary = {
  InstanceId: string;
  LanguageCode: AmazonConnectFullApiSchemaVocabularyLanguageCode;
  VocabularyId: string;
  VocabularyName: string;
};

export type AmazonConnectFullApiSchemaEvaluationFormVersionSummary = {
  EvaluationFormArn: string;
  EvaluationFormId: string;
  EvaluationFormVersion: number;
  Locked: boolean;
  Status: AmazonConnectFullApiSchemaEvaluationFormVersionStatus;
  CreatedTime: string;
  CreatedBy: string;
  LastModifiedTime: string;
  LastModifiedBy: string;
};

export type AmazonConnectFullApiSchemaEvaluationFormSummary = {
  EvaluationFormId: string;
  EvaluationFormArn: string;
  Title: string;
  CreatedTime: string;
  CreatedBy: string;
  LastModifiedTime: string;
  LastModifiedBy: string;
  LastActivatedTime?: string;
  LastActivatedBy?: string;
  LatestVersion: number;
  ActiveVersion?: number;
};

export type AmazonConnectFullApiSchemaHoursOfOperationSummary = {
  Id?: string;
  Arn?: string;
  Name?: string;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaInstanceSummary = {
  Id?: string;
  Arn?: string;
  IdentityManagementType?: AmazonConnectFullApiSchemaDirectoryType;
  InstanceAlias?: string;
  CreatedTime?: string;
  ServiceRole?: string;
  InstanceStatus?: AmazonConnectFullApiSchemaInstanceStatus;
  InboundCallsEnabled?: boolean;
  OutboundCallsEnabled?: boolean;
  InstanceAccessUrl?: string;
};

export type AmazonConnectFullApiSchemaIntegrationAssociationSummary = {
  IntegrationAssociationId?: string;
  IntegrationAssociationArn?: string;
  InstanceId?: string;
  IntegrationType?: AmazonConnectFullApiSchemaIntegrationType;
  IntegrationArn?: string;
  SourceApplicationUrl?: string;
  SourceApplicationName?: string;
  SourceType?: AmazonConnectFullApiSchemaSourceType;
};

export type AmazonConnectFullApiSchemaPhoneNumberSummary = {
  Id?: string;
  Arn?: string;
  PhoneNumber?: string;
  PhoneNumberType?: AmazonConnectFullApiSchemaPhoneNumberType;
  PhoneNumberCountryCode?: AmazonConnectFullApiSchemaPhoneNumberCountryCode;
};

export type AmazonConnectFullApiSchemaListPhoneNumbersSummary = {
  PhoneNumberId?: string;
  PhoneNumberArn?: string;
  PhoneNumber?: string;
  PhoneNumberCountryCode?: AmazonConnectFullApiSchemaPhoneNumberCountryCode;
  PhoneNumberType?: AmazonConnectFullApiSchemaPhoneNumberType;
  TargetArn?: string;
  InstanceId?: string;
  PhoneNumberDescription?: string;
  SourcePhoneNumberArn?: string;
};

export type AmazonConnectFullApiSchemaPredefinedAttributeSummary = {
  Name?: string;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaPromptSummary = {
  Id?: string;
  Arn?: string;
  Name?: string;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaEmailAddressSummary = {
  Id?: string;
  Arn?: string;
  IsDefaultOutboundEmail?: boolean;
};

export type AmazonConnectFullApiSchemaQuickConnectSummary = {
  Id?: string;
  Arn?: string;
  Name?: string;
  QuickConnectType?: AmazonConnectFullApiSchemaQuickConnectType;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaQueueSummary = {
  Id?: string;
  Arn?: string;
  Name?: string;
  QueueType?: AmazonConnectFullApiSchemaQueueType;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaRealtimeContactAnalysisSegment = {
  Transcript: AmazonConnectFullApiSchemaRealTimeContactAnalysisSegmentTranscript;
} | {
  Categories: AmazonConnectFullApiSchemaRealTimeContactAnalysisSegmentCategories;
} | {
  Issues: AmazonConnectFullApiSchemaRealTimeContactAnalysisSegmentIssues;
} | {
  Event: AmazonConnectFullApiSchemaRealTimeContactAnalysisSegmentEvent;
} | {
  Attachments: AmazonConnectFullApiSchemaRealTimeContactAnalysisSegmentAttachments;
} | {
  PostContactSummary: AmazonConnectFullApiSchemaRealTimeContactAnalysisSegmentPostContactSummary;
};

export type AmazonConnectFullApiSchemaRoutingProfileManualAssignmentQueueConfigSummary = {
  QueueId: string;
  QueueArn: string;
  QueueName: string;
  Channel: AmazonConnectFullApiSchemaChannel;
};

export type AmazonConnectFullApiSchemaRoutingProfileQueueConfigSummary = {
  QueueId: string;
  QueueArn: string;
  QueueName: string;
  Priority: number;
  Delay: number;
  Channel: AmazonConnectFullApiSchemaChannel;
};

export type AmazonConnectFullApiSchemaRoutingProfileSummary = {
  Id?: string;
  Arn?: string;
  Name?: string;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaRuleSummary = {
  Name: string;
  RuleId: string;
  RuleArn: string;
  EventSourceName: AmazonConnectFullApiSchemaEventSourceName;
  PublishStatus: AmazonConnectFullApiSchemaRulePublishStatus;
  ActionSummaries: AmazonConnectFullApiSchemaActionSummaries;
  CreatedTime: string;
  LastUpdatedTime: string;
};

export type AmazonConnectFullApiSchemaSecurityKey = {
  AssociationId?: string;
  Key?: string;
  CreationTime?: string;
};

export type AmazonConnectFullApiSchemaSecurityProfileSummary = {
  Id?: string;
  Arn?: string;
  Name?: string;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaTaskTemplateMetadata = {
  Id?: string;
  Arn?: string;
  Name?: string;
  Description?: string;
  Status?: AmazonConnectFullApiSchemaTaskTemplateStatus;
  LastModifiedTime?: string;
  CreatedTime?: string;
};

export type AmazonConnectFullApiSchemaExecutionRecord = {
  ObservationId?: string;
  Status?: AmazonConnectFullApiSchemaExecutionRecordStatus;
  Timestamp?: string;
  Record?: string;
};

export type AmazonConnectFullApiSchemaTestCaseExecution = {
  StartTime?: string;
  EndTime?: string;
  TestCaseExecutionId?: string;
  TestCaseId?: string;
  TestCaseExecutionStatus?: AmazonConnectFullApiSchemaTestCaseExecutionStatus;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};

export type AmazonConnectFullApiSchemaTestCaseSummary = {
  Id?: string;
  Arn?: string;
  Name?: string;
  Status?: AmazonConnectFullApiSchemaTestCaseStatus;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaTrafficDistributionGroupUserSummary = {
  UserId?: string;
};

export type AmazonConnectFullApiSchemaTrafficDistributionGroupSummary = {
  Id?: string;
  Arn?: string;
  Name?: string;
  InstanceArn?: string;
  Status?: AmazonConnectFullApiSchemaTrafficDistributionGroupStatus;
  IsDefault?: boolean;
};

export type AmazonConnectFullApiSchemaUseCase = {
  UseCaseId?: string;
  UseCaseArn?: string;
  UseCaseType?: AmazonConnectFullApiSchemaUseCaseType;
};

export type AmazonConnectFullApiSchemaHierarchyGroupSummary = {
  Id?: string;
  Arn?: string;
  Name?: string;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaUserNotificationSummary = {
  NotificationId?: string;
  NotificationStatus?: AmazonConnectFullApiSchemaNotificationStatus;
  InstanceId?: string;
  RecipientId?: string;
  Content?: AmazonConnectFullApiSchemaNotificationContent;
  Priority?: AmazonConnectFullApiSchemaNotificationPriority;
  Source?: AmazonConnectFullApiSchemaNotificationSource;
  CreatedAt?: string;
  ExpiresAt?: string;
};

export type AmazonConnectFullApiSchemaUserSummary = {
  Id?: string;
  Arn?: string;
  Username?: string;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaViewVersionSummary = {
  Id?: string;
  Arn?: string;
  Description?: string;
  Name?: string;
  Type?: AmazonConnectFullApiSchemaViewType;
  Version?: number;
  VersionDescription?: string;
};

export type AmazonConnectFullApiSchemaViewSummary = {
  Id?: string;
  Arn?: string;
  Name?: string;
  Type?: AmazonConnectFullApiSchemaViewType;
  Status?: AmazonConnectFullApiSchemaViewStatus;
  Description?: string;
};

export type AmazonConnectFullApiSchemaMediaItem = {
  Type?: AmazonConnectFullApiSchemaMediaType;
  Source?: string;
};

export type AmazonConnectFullApiSchemaWorkspacePage = {
  ResourceArn?: string;
  Page?: string;
  Slug?: string;
  InputData?: string;
};

export type AmazonConnectFullApiSchemaWorkspaceSummary = {
  Id?: string;
  Name?: string;
  Arn?: string;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};

export type AmazonConnectFullApiSchemaCommonAttributeOrConditionList = ReadonlyArray<AmazonConnectFullApiSchemaCommonAttributeAndCondition>;

export type AmazonConnectFullApiSchemaCommonAttributeAndCondition = {
  TagConditions?: AmazonConnectFullApiSchemaTagAndConditionList;
};

export type AmazonConnectFullApiSchemaTagCondition2 = {
  TagKey?: string;
  TagValue?: string;
};

export type AmazonConnectFullApiSchemaStringComparisonType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaAvailableNumberSummary = {
  PhoneNumber?: string;
  PhoneNumberCountryCode?: AmazonConnectFullApiSchemaPhoneNumberCountryCode;
  PhoneNumberType?: AmazonConnectFullApiSchemaPhoneNumberType;
};

export type AmazonConnectFullApiSchemaNumberComparisonType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaBooleanComparisonType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaDateTimeComparisonType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaDecimalComparisonType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationSearchSummary = {
  EvaluationId: string;
  EvaluationArn: string;
  EvaluationFormId?: string;
  EvaluationFormVersion: number;
  EvaluationFormTitle?: string;
  Metadata: AmazonConnectFullApiSchemaEvaluationSearchMetadata;
  Status: AmazonConnectFullApiSchemaEvaluationStatus;
  EvaluationType?: AmazonConnectFullApiSchemaEvaluationType;
  CreatedTime: string;
  LastModifiedTime: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};

export type AmazonConnectFullApiSchemaTagOrConditionList = ReadonlyArray<AmazonConnectFullApiSchemaTagAndConditionList>;

export type AmazonConnectFullApiSchemaTagAndConditionList = ReadonlyArray<AmazonConnectFullApiSchemaTagCondition2>;

export type AmazonConnectFullApiSchemaContactFlowAttributeOrConditionList = ReadonlyArray<AmazonConnectFullApiSchemaContactFlowAttributeAndCondition>;

export type AmazonConnectFullApiSchemaContactFlowAttributeAndCondition = {
  TagConditions?: AmazonConnectFullApiSchemaTagAndConditionList;
  ContactFlowTypeCondition?: AmazonConnectFullApiSchemaContactFlowTypeCondition;
};

export type AmazonConnectFullApiSchemaContactFlowTypeCondition = {
  ContactFlowType?: AmazonConnectFullApiSchemaContactFlowType;
};

export type AmazonConnectFullApiSchemaSearchTextList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaSearchContactsMatchType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaHierarchyGroupIdList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaTranscript2 = {
  Criteria: AmazonConnectFullApiSchemaTranscriptCriteriaList;
  MatchType?: AmazonConnectFullApiSchemaSearchContactsMatchType;
};

export type AmazonConnectFullApiSchemaSearchableRoutingCriteriaStepList = ReadonlyArray<AmazonConnectFullApiSchemaSearchableRoutingCriteriaStep>;

export type AmazonConnectFullApiSchemaSearchContactsAdditionalTimeRangeCriteriaList = ReadonlyArray<AmazonConnectFullApiSchemaSearchContactsAdditionalTimeRangeCriteria>;

export type AmazonConnectFullApiSchemaSearchableContactAttributesCriteriaList = ReadonlyArray<AmazonConnectFullApiSchemaSearchableContactAttributesCriteria>;

export type AmazonConnectFullApiSchemaSearchableSegmentAttributesCriteriaList = ReadonlyArray<AmazonConnectFullApiSchemaSearchableSegmentAttributesCriteria>;

export type AmazonConnectFullApiSchemaAiAgentSearchCriteriaList = ReadonlyArray<AmazonConnectFullApiSchemaAiAgentSearchCriteria>;

export type AmazonConnectFullApiSchemaContactSearchSummary = {
  Arn?: string;
  Id?: string;
  InitialContactId?: string;
  PreviousContactId?: string;
  InitiationMethod?: AmazonConnectFullApiSchemaContactInitiationMethod;
  Channel?: AmazonConnectFullApiSchemaChannel;
  QueueInfo?: AmazonConnectFullApiSchemaContactSearchSummaryQueueInfo;
  AgentInfo?: AmazonConnectFullApiSchemaContactSearchSummaryAgentInfo;
  InitiationTimestamp?: string;
  DisconnectTimestamp?: string;
  ScheduledTimestamp?: string;
  SegmentAttributes?: AmazonConnectFullApiSchemaContactSearchSummarySegmentAttributes;
  Name?: string;
  RoutingCriteria?: AmazonConnectFullApiSchemaRoutingCriteria;
  Tags?: AmazonConnectFullApiSchemaContactTagMap;
  GlobalResiliencyMetadata?: AmazonConnectFullApiSchemaGlobalResiliencyMetadata;
  AiAgentInfo?: AmazonConnectFullApiSchemaContactSearchSummaryAiAgentInfoList;
};

export type AmazonConnectFullApiSchemaEmailAddressMetadata = {
  EmailAddressId?: string;
  EmailAddressArn?: string;
  EmailAddress?: string;
  Description?: string;
  DisplayName?: string;
  AliasConfigurations?: AmazonConnectFullApiSchemaAliasConfigurationList;
};

export type AmazonConnectFullApiSchemaEvaluationFormSearchSummary = {
  EvaluationFormId: string;
  EvaluationFormArn: string;
  Title: string;
  Status: AmazonConnectFullApiSchemaEvaluationFormVersionStatus;
  Description?: string;
  CreatedTime: string;
  CreatedBy: string;
  LastModifiedTime: string;
  LastModifiedBy: string;
  LastActivatedTime?: string;
  LastActivatedBy?: string;
  LatestVersion: number;
  ActiveVersion?: number;
  AutoEvaluationEnabled?: boolean;
  EvaluationFormLanguage?: AmazonConnectFullApiSchemaEvaluationFormLanguageCode;
  ContactInteractionType?: AmazonConnectFullApiSchemaContactInteractionType;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};

export type AmazonConnectFullApiSchemaDateComparisonType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaNotificationSearchSummary = {
  Id?: string;
  Arn?: string;
  InstanceId?: string;
  Content?: AmazonConnectFullApiSchemaNotificationContent;
  Priority?: AmazonConnectFullApiSchemaNotificationPriority;
  Recipients?: AmazonConnectFullApiSchemaRecipientList;
  CreatedAt?: string;
  ExpiresAt?: string;
  LastModifiedRegion?: string;
  LastModifiedTime?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};

export type AmazonConnectFullApiSchemaTagSet = {
  key?: string;
  value?: string;
};

export type AmazonConnectFullApiSchemaSecurityProfileSearchSummary = {
  Id?: string;
  OrganizationResourceId?: string;
  Arn?: string;
  SecurityProfileName?: string;
  Description?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};

export type AmazonConnectFullApiSchemaAttributeOrConditionList = ReadonlyArray<AmazonConnectFullApiSchemaAttributeAndCondition>;

export type AmazonConnectFullApiSchemaAttributeAndCondition = {
  TagConditions?: AmazonConnectFullApiSchemaTagAndConditionList;
  HierarchyGroupCondition?: AmazonConnectFullApiSchemaHierarchyGroupCondition;
};

export type AmazonConnectFullApiSchemaTargetListType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaConditions2 = ReadonlyArray<AmazonConnectFullApiSchemaCondition>;

export type AmazonConnectFullApiSchemaHierarchyGroupMatchType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaUserSearchSummary = {
  Arn?: string;
  DirectoryUserId?: string;
  HierarchyGroupId?: string;
  Id?: string;
  IdentityInfo?: AmazonConnectFullApiSchemaUserIdentityInfoLite;
  PhoneConfig?: AmazonConnectFullApiSchemaUserPhoneConfig;
  RoutingProfileId?: string;
  SecurityProfileIds?: AmazonConnectFullApiSchemaSecurityProfileIds;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  Username?: string;
  AutoAcceptConfigs?: AmazonConnectFullApiSchemaAutoAcceptConfigs;
  AfterContactWorkConfigs?: AmazonConnectFullApiSchemaAfterContactWorkConfigs;
  PhoneNumberConfigs?: AmazonConnectFullApiSchemaPhoneNumberConfigs;
  PersistentConnectionConfigs?: AmazonConnectFullApiSchemaPersistentConnectionConfigs;
  VoiceEnhancementConfigs?: AmazonConnectFullApiSchemaVoiceEnhancementConfigs;
};

export type AmazonConnectFullApiSchemaVocabularySummary = {
  Name: string;
  Id: string;
  Arn: string;
  LanguageCode: AmazonConnectFullApiSchemaVocabularyLanguageCode;
  State: AmazonConnectFullApiSchemaVocabularyState;
  LastModifiedTime: string;
  FailureReason?: string;
};

export type AmazonConnectFullApiSchemaWorkspaceAssociationSearchSummary = {
  WorkspaceId?: string;
  WorkspaceArn?: string;
  ResourceId?: string;
  ResourceArn?: string;
  ResourceType?: string;
  ResourceName?: string;
};

export type AmazonConnectFullApiSchemaWorkspaceSearchSummary = {
  Id?: string;
  Name?: string;
  Visibility?: AmazonConnectFullApiSchemaVisibility;
  Description?: string;
  Title?: string;
  Arn?: string;
  CreatedAt?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};

export type AmazonConnectFullApiSchemaUrlMetadataSignedHeaders = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaEmailHeaders = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaAgentFirst = {
  Preview?: AmazonConnectFullApiSchemaPreview;
};

export type AmazonConnectFullApiSchemaAttendee = {
  AttendeeId?: string;
  JoinToken?: string;
};

export type AmazonConnectFullApiSchemaMeeting = {
  MediaRegion?: string;
  MediaPlacement?: AmazonConnectFullApiSchemaMediaPlacement;
  MeetingFeatures?: AmazonConnectFullApiSchemaMeetingFeaturesConfiguration;
  MeetingId?: string;
};

export type AmazonConnectFullApiSchemaEvaluationAnswerData = {
  StringValue: string;
} | {
  NumericValue: number;
} | {
  StringValues: AmazonConnectFullApiSchemaEvaluationAnswerDataStringValueList;
} | {
  DateTimeValue: string;
} | {
  NotApplicable: boolean;
};

export type AmazonConnectFullApiSchemaAllowedExtension = {
  Extension: string;
};

export type AmazonConnectFullApiSchemaRoutingCriteriaInputStep = {
  Expiry?: AmazonConnectFullApiSchemaRoutingCriteriaInputStepExpiry;
  Expression?: AmazonConnectFullApiSchemaExpression;
};

export type AmazonConnectFullApiSchemaParticipantTimerConfigList = ReadonlyArray<AmazonConnectFullApiSchemaParticipantTimerConfiguration>;

export type AmazonConnectFullApiSchemaDistribution = {
  Region: string;
  Percentage: number;
};

export type AmazonConnectFullApiSchemaSignInDistribution = {
  Region: string;
  Enabled: boolean;
};

export type AmazonConnectFullApiSchemaAttendee2 = {
  AttendeeId?: string;
  JoinToken?: string;
};

export type AmazonConnectFullApiSchemaWebRTCMeeting = {
  MediaPlacement?: AmazonConnectFullApiSchemaWebRTCMediaPlacement;
  MeetingFeatures?: AmazonConnectFullApiSchemaMeetingFeaturesConfiguration2;
  MeetingId?: string;
};

export type AmazonConnectFullApiSchemaViewContent2 = {
  InputSchema?: string;
  Template?: string;
  Actions?: AmazonConnectFullApiSchemaViewActions2;
};

export type AmazonConnectFullApiSchemaItem = {
  AbsoluteTime?: string;
  Content?: string;
  ContentType?: string;
  Id?: string;
  Type?: AmazonConnectFullApiSchemaChatItemType;
  ParticipantId?: string;
  DisplayName?: string;
  ParticipantRole?: AmazonConnectFullApiSchemaParticipantRole2;
  Attachments?: AmazonConnectFullApiSchemaAttachments;
  MessageMetadata?: AmazonConnectFullApiSchemaMessageMetadata2;
  RelatedContactId?: string;
  ContactId?: string;
};

export type AmazonConnectFullApiSchemaMessageProcessingStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaUploadMetadataSignedHeaders = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaGetCaseRuleResponse = {
  caseRuleId: string;
  name: string;
  caseRuleArn: string;
  rule: AmazonConnectFullApiSchemaCaseRuleDetails;
  description?: string;
  deleted?: boolean;
  createdTime?: string;
  lastModifiedTime?: string;
  tags?: AmazonConnectFullApiSchemaTags;
};

export type AmazonConnectFullApiSchemaCaseRuleError = {
  id: string;
  errorCode: string;
  message?: string;
};

export type AmazonConnectFullApiSchemaGetFieldResponse = {
  fieldId: string;
  name: string;
  fieldArn: string;
  description?: string;
  type: "Text" | "Number" | "Boolean" | "DateTime" | "SingleSelect" | "Url" | "User";
  namespace: "System" | "Custom";
  tags?: AmazonConnectFullApiSchemaTags;
  deleted?: boolean;
  createdTime?: string;
  lastModifiedTime?: string;
  attributes?: AmazonConnectFullApiSchemaFieldAttributes;
};

export type AmazonConnectFullApiSchemaFieldError = {
  id: string;
  errorCode: string;
  message?: string;
};

export type AmazonConnectFullApiSchemaFieldOptionError = {
  message: string;
  errorCode: string;
  value: string;
};

export type AmazonConnectFullApiSchemaFieldValueUnion = {
  stringValue: string;
} | {
  doubleValue: number;
} | {
  booleanValue: boolean;
} | {
  emptyValue: AmazonConnectFullApiSchemaEmptyFieldValue;
} | {
  userArnValue: string;
};

export type AmazonConnectFullApiSchemaBooleanConditionList = ReadonlyArray<AmazonConnectFullApiSchemaBooleanCondition2>;

export type AmazonConnectFullApiSchemaParentChildFieldOptionsMappingList = ReadonlyArray<AmazonConnectFullApiSchemaParentChildFieldOptionsMapping>;

export type AmazonConnectFullApiSchemaLayoutSections = {
  sections?: AmazonConnectFullApiSchemaSectionsList;
};

export type AmazonConnectFullApiSchemaSlaInputConfiguration = {
  name: string;
  type: "CaseField";
  fieldId?: string;
  targetFieldValues?: AmazonConnectFullApiSchemaSlaFieldValueUnionList;
  targetSlaMinutes: number;
};

export type AmazonConnectFullApiSchemaAuditEvent = {
  eventId: string;
  type: "Case.Created" | "Case.Updated" | "RelatedItem.Created" | "RelatedItem.Deleted" | "RelatedItem.Updated";
  relatedItemType?: "Contact" | "Comment" | "File" | "Sla" | "ConnectCase" | "Custom";
  performedTime: string;
  fields: AmazonConnectFullApiSchemaAuditEventFieldList;
  performedBy?: AmazonConnectFullApiSchemaAuditEventPerformedBy;
};

export type AmazonConnectFullApiSchemaCaseRuleSummary = {
  caseRuleId: string;
  name: string;
  caseRuleArn: string;
  ruleType: "Required" | "Hidden" | "FieldOptions";
  description?: string;
};

export type AmazonConnectFullApiSchemaCaseSummary = {
  caseId: string;
  templateId: string;
};

export type AmazonConnectFullApiSchemaDomainSummary = {
  domainId: string;
  domainArn: string;
  name: string;
};

export type AmazonConnectFullApiSchemaFieldSummary = {
  fieldId: string;
  fieldArn: string;
  name: string;
  type: "Text" | "Number" | "Boolean" | "DateTime" | "SingleSelect" | "Url" | "User";
  namespace: "System" | "Custom";
  attributes?: AmazonConnectFullApiSchemaFieldAttributes;
};

export type AmazonConnectFullApiSchemaLayoutSummary = {
  layoutId: string;
  layoutArn: string;
  name: string;
};

export type AmazonConnectFullApiSchemaTemplateSummary = {
  templateId: string;
  templateArn: string;
  name: string;
  status: "Active" | "Inactive";
  tagPropagationConfigurations?: AmazonConnectFullApiSchemaTagPropagationConfigurationList;
};

export type AmazonConnectFullApiSchemaCaseEventIncludedData = {
  fields: AmazonConnectFullApiSchemaFieldIdentifierList;
};

export type AmazonConnectFullApiSchemaRelatedItemEventIncludedData = {
  includeContent: boolean;
};

export type AmazonConnectFullApiSchemaContactFilter2 = {
  channel?: AmazonConnectFullApiSchemaChannelList2;
  contactArn?: string;
};

export type AmazonConnectFullApiSchemaCommentFilter = {};

export type AmazonConnectFullApiSchemaFileFilter = {
  fileArn?: string;
};

export type AmazonConnectFullApiSchemaSlaFilter = {
  name?: string;
  status?: "Active" | "Overdue" | "Met" | "NotMet";
};

export type AmazonConnectFullApiSchemaConnectCaseFilter = {
  caseId?: string;
};

export type AmazonConnectFullApiSchemaCustomFilter = {
  fields?: AmazonConnectFullApiSchemaCustomFieldsFilter;
};

export type AmazonConnectFullApiSchemaSearchAllRelatedItemsResponseItem = {
  relatedItemId: string;
  caseId: string;
  type: "Contact" | "Comment" | "File" | "Sla" | "ConnectCase" | "Custom";
  associationTime: string;
  content: AmazonConnectFullApiSchemaRelatedItemContent;
  performedBy?: AmazonConnectFullApiSchemaUserUnion;
  tags?: AmazonConnectFullApiSchemaTags;
};

export type AmazonConnectFullApiSchemaTagValue = {
  key?: string;
  value?: string;
};

export type AmazonConnectFullApiSchemaSearchCasesResponseItem = {
  caseId: string;
  templateId: string;
  fields: AmazonConnectFullApiSchemaFieldValueList;
  tags?: AmazonConnectFullApiSchemaTags;
};

export type AmazonConnectFullApiSchemaSearchRelatedItemsResponseItem = {
  relatedItemId: string;
  type: "Contact" | "Comment" | "File" | "Sla" | "ConnectCase" | "Custom";
  associationTime: string;
  content: AmazonConnectFullApiSchemaRelatedItemContent;
  tags?: AmazonConnectFullApiSchemaTags;
  performedBy?: AmazonConnectFullApiSchemaUserUnion;
};

export type AmazonConnectFullApiSchemaContactContent = {
  contactArn: string;
  channel: string;
  connectedToSystemTime: string;
};

export type AmazonConnectFullApiSchemaSlaContent = {
  slaConfiguration: AmazonConnectFullApiSchemaSlaConfiguration;
};

export type AmazonConnectFullApiSchemaConnectCaseContent = {
  caseId: string;
};

export type AmazonConnectFullApiSchemaCustomContent = {
  fields: AmazonConnectFullApiSchemaFieldValueList;
};

export type AmazonConnectFullApiSchemaSuccessfulCampaignStateResponse = {
  campaignId?: string;
  state?: "Initialized" | "Running" | "Paused" | "Stopped" | "Failed";
};

export type AmazonConnectFullApiSchemaFailedCampaignStateResponse = {
  campaignId?: string;
  failureCode?: "ResourceNotFound" | "UnknownError";
};

export type AmazonConnectFullApiSchemaCampaignSummary = {
  id: string;
  arn: string;
  name: string;
  connectInstanceId: string;
};

export type AmazonConnectFullApiSchemaAttributes3 = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaSuccessfulRequest2 = {
  clientToken?: string;
  id?: string;
};

export type AmazonConnectFullApiSchemaFailedRequest2 = {
  clientToken?: string;
  id?: string;
  failureCode?: "InvalidInput" | "RequestThrottled" | "UnknownError";
};

export type AmazonConnectFullApiSchemaTelephonyOutboundMode = {
  progressive: AmazonConnectFullApiSchemaProgressiveConfig;
} | {
  predictive: AmazonConnectFullApiSchemaPredictiveConfig;
} | {
  agentless: AmazonConnectFullApiSchemaAgentlessConfig;
} | {
  preview: AmazonConnectFullApiSchemaPreviewConfig;
};

export type AmazonConnectFullApiSchemaTelephonyOutboundConfig = {
  connectContactFlowId: string;
  connectSourcePhoneNumber?: string;
  answerMachineDetectionConfig?: AmazonConnectFullApiSchemaAnswerMachineDetectionConfig3;
  ringTimeout?: number;
};

export type AmazonConnectFullApiSchemaSmsOutboundMode = {
  agentless: AmazonConnectFullApiSchemaAgentlessConfig;
};

export type AmazonConnectFullApiSchemaSmsOutboundConfig = {
  connectSourcePhoneNumberArn: string;
  wisdomTemplateArn: string;
};

export type AmazonConnectFullApiSchemaEmailOutboundMode = {
  agentless: AmazonConnectFullApiSchemaAgentlessConfig;
};

export type AmazonConnectFullApiSchemaEmailOutboundConfig = {
  connectSourceEmailAddress: string;
  sourceEmailAddressDisplayName?: string;
  wisdomTemplateArn: string;
};

export type AmazonConnectFullApiSchemaWhatsAppOutboundMode = {
  agentless: AmazonConnectFullApiSchemaAgentlessConfig;
};

export type AmazonConnectFullApiSchemaWhatsAppOutboundConfig = {
  connectSourcePhoneNumberArn: string;
  wisdomTemplateArn: string;
};

export type AmazonConnectFullApiSchemaLocalTimeZoneDetection = ReadonlyArray<"ZIP_CODE" | "AREA_CODE">;

export type AmazonConnectFullApiSchemaOpenHours = {
  dailyHours: AmazonConnectFullApiSchemaDailyHours;
};

export type AmazonConnectFullApiSchemaRestrictedPeriods = {
  restrictedPeriodList: AmazonConnectFullApiSchemaRestrictedPeriodList;
};

export type AmazonConnectFullApiSchemaCommunicationLimitList = ReadonlyArray<AmazonConnectFullApiSchemaCommunicationLimit>;

export type AmazonConnectFullApiSchemaSuccessfulCampaignStateResponse2 = {
  campaignId?: string;
  state?: "Initialized" | "Running" | "Paused" | "Stopped" | "Failed" | "Completed";
};

export type AmazonConnectFullApiSchemaFailedCampaignStateResponse2 = {
  campaignId?: string;
  failureCode?: "ResourceNotFound" | "UnknownError";
};

export type AmazonConnectFullApiSchemaCampaignSummary2 = {
  id: string;
  arn: string;
  name: string;
  connectInstanceId: string;
  channelSubtypes: AmazonConnectFullApiSchemaChannelSubtypeList;
  type?: "MANAGED" | "JOURNEY";
  schedule?: AmazonConnectFullApiSchemaSchedule;
  entryLimitsConfig?: AmazonConnectFullApiSchemaEntryLimitsConfig;
  connectCampaignFlowArn?: string;
};

export type AmazonConnectFullApiSchemaIntegrationSummary = {
  customerProfiles: AmazonConnectFullApiSchemaCustomerProfilesIntegrationSummary;
} | {
  qConnect: AmazonConnectFullApiSchemaQConnectIntegrationSummary;
} | {
  lambda: AmazonConnectFullApiSchemaLambdaIntegrationSummary;
};

export type AmazonConnectFullApiSchemaObjectTypeNamesMap = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaChannelSubtypeParameters = {
  telephony: AmazonConnectFullApiSchemaTelephonyChannelSubtypeParameters;
} | {
  sms: AmazonConnectFullApiSchemaSmsChannelSubtypeParameters;
} | {
  email: AmazonConnectFullApiSchemaEmailChannelSubtypeParameters;
} | {
  whatsApp: AmazonConnectFullApiSchemaWhatsAppChannelSubtypeParameters;
};

export type AmazonConnectFullApiSchemaSuccessfulRequest3 = {
  clientToken?: string;
  id?: string;
};

export type AmazonConnectFullApiSchemaFailedRequest3 = {
  clientToken?: string;
  id?: string;
  failureCode?: "InvalidInput" | "RequestThrottled" | "UnknownError" | "BufferLimitExceeded";
};

export type AmazonConnectFullApiSchemaSuccessfulProfileOutboundRequest = {
  clientToken?: string;
  id?: string;
};

export type AmazonConnectFullApiSchemaFailedProfileOutboundRequest = {
  clientToken?: string;
  id?: string;
  failureCode?: "UnknownError" | "ResourceNotFound" | "Conflict" | "RequestThrottled" | "InvalidInput";
};

export type AmazonConnectFullApiSchemaRealtimeContactAnalysisSegment2 = {
  Transcript?: AmazonConnectFullApiSchemaTranscript3;
  Categories?: AmazonConnectFullApiSchemaCategories;
  PostContactSummary?: AmazonConnectFullApiSchemaPostContactSummary;
};

export type AmazonConnectFullApiSchemaEncryptionType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaMedicalScribeChannelDefinitions = ReadonlyArray<AmazonConnectFullApiSchemaMedicalScribeChannelDefinition>;

export type AmazonConnectFullApiSchemaMedicalScribePostStreamActionSettingsResponse = {
  outputS3Uri: string;
  clinicalNoteGenerationSettings: AmazonConnectFullApiSchemaClinicalNoteGenerationSettingsResponse;
};

export type AmazonConnectFullApiSchemaMedicalScribePostStreamActionsResult = {
  clinicalNoteGenerationResult?: AmazonConnectFullApiSchemaClinicalNoteGenerationResult;
};

export type AmazonConnectFullApiSchemaMedicalScribeStreamStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaDomainSummary2 = {
  domainId: string;
  arn: string;
  name: string;
  status: AmazonConnectFullApiSchemaDomainStatus;
  createdAt: string;
};

export type AmazonConnectFullApiSchemaMedicalScribeSessionControlEventType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaMedicalScribePostStreamActionSettings = {
  outputS3Uri: string;
  clinicalNoteGenerationSettings: AmazonConnectFullApiSchemaClinicalNoteGenerationSettings;
};

export type AmazonConnectFullApiSchemaEncounterContext = {
  unstructuredContext?: string;
};

export type AmazonConnectFullApiSchemaMedicalScribeTranscriptEvent = {
  transcriptSegment?: AmazonConnectFullApiSchemaMedicalScribeTranscriptSegment;
};

export type AmazonConnectFullApiSchemaInternalServerException = {
  message?: string;
};

export type AmazonConnectFullApiSchemaValidationException = {
  message?: string;
};

export type AmazonConnectFullApiSchemaS3Source = {
  uri: string;
};

export type AmazonConnectFullApiSchemaRangeUnit = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaBatchGetCalculatedAttributeForProfileError = {
  Code: string;
  Message: string;
  ProfileId: string;
};

export type AmazonConnectFullApiSchemaCalculatedAttributeValue = {
  CalculatedAttributeName?: string;
  DisplayName?: string;
  IsDataPartial?: string;
  ProfileId?: string;
  Value?: string;
  LastObjectTimestamp?: string;
};

export type AmazonConnectFullApiSchemaBatchGetProfileError = {
  Code: string;
  Message: string;
  ProfileId: string;
};

export type AmazonConnectFullApiSchemaProfile = {
  ProfileId?: string;
  AccountNumber?: string;
  AdditionalInformation?: string;
  PartyType?: AmazonConnectFullApiSchemaPartyType;
  BusinessName?: string;
  FirstName?: string;
  MiddleName?: string;
  LastName?: string;
  BirthDate?: string;
  Gender?: AmazonConnectFullApiSchemaGender;
  PhoneNumber?: string;
  MobilePhoneNumber?: string;
  HomePhoneNumber?: string;
  BusinessPhoneNumber?: string;
  EmailAddress?: string;
  PersonalEmailAddress?: string;
  BusinessEmailAddress?: string;
  Address?: AmazonConnectFullApiSchemaAddress;
  ShippingAddress?: AmazonConnectFullApiSchemaAddress;
  MailingAddress?: AmazonConnectFullApiSchemaAddress;
  BillingAddress?: AmazonConnectFullApiSchemaAddress;
  Attributes?: AmazonConnectFullApiSchemaAttributes2;
  FoundByItems?: AmazonConnectFullApiSchemaFoundByList;
  PartyTypeString?: string;
  GenderString?: string;
  ProfileType?: AmazonConnectFullApiSchemaProfileType;
  EngagementPreferences?: AmazonConnectFullApiSchemaEngagementPreferences;
};

export type AmazonConnectFullApiSchemaBatchPutProfileObjectResponseItem = {
  Id: string;
  ProfileObjectUniqueKey: string;
};

export type AmazonConnectFullApiSchemaBatchPutProfileObjectErrorItem = {
  Id: string;
  Code: number;
  Message?: string;
};

export type AmazonConnectFullApiSchemaAttributeItem = {
  Name: string;
};

export type AmazonConnectFullApiSchemaUnit2 = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaValueRange = {
  Start: number;
  End: number;
};

export type AmazonConnectFullApiSchemaOperator = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaFilterGroup = {
  Type: AmazonConnectFullApiSchemaType;
  Dimensions: AmazonConnectFullApiSchemaFilterDimensionList;
};

export type AmazonConnectFullApiSchemaJobScheduleDayOfTheWeek = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaS3ExportingConfig = {
  S3BucketName: string;
  S3KeyName?: string;
};

export type AmazonConnectFullApiSchemaMatchingRule = {
  Rule: AmazonConnectFullApiSchemaMatchingRuleAttributeList;
};

export type AmazonConnectFullApiSchemaAttributeMatchingModel = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaAddressList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaPhoneNumberList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaEmailList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaRuleBasedMatchingStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEventTriggerDimensions = ReadonlyArray<AmazonConnectFullApiSchemaEventTriggerDimension>;

export type AmazonConnectFullApiSchemaEventTriggerLogicalOperator = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaPeriod = {
  Unit: AmazonConnectFullApiSchemaPeriodUnit;
  Value: number;
  MaxInvocationsPerProfile?: number;
  Unlimited?: boolean;
};

export type AmazonConnectFullApiSchemaBatches = ReadonlyArray<AmazonConnectFullApiSchemaBatch>;

export type AmazonConnectFullApiSchemaContactPreference = {
  KeyName?: string;
  KeyValue?: string;
  ProfileId?: string;
  ContactType?: AmazonConnectFullApiSchemaContactType;
};

export type AmazonConnectFullApiSchemaEventParametersList = ReadonlyArray<AmazonConnectFullApiSchemaEventParameters>;

export type AmazonConnectFullApiSchemaColumnNamesList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaRecommenderSchemaField = {
  TargetFieldName: string;
  ContentType?: AmazonConnectFullApiSchemaContentType;
  FeatureType?: AmazonConnectFullApiSchemaFeatureType;
};

export type AmazonConnectFullApiSchemaGroup = {
  Dimensions?: AmazonConnectFullApiSchemaDimensionList;
  SourceSegments?: AmazonConnectFullApiSchemaSourceSegmentList;
  SourceType?: AmazonConnectFullApiSchemaIncludeOptions;
  Type?: AmazonConnectFullApiSchemaIncludeOptions;
};

export type AmazonConnectFullApiSchemaSortAttribute = {
  Name: string;
  DataType?: AmazonConnectFullApiSchemaSegmentSortDataType;
  Order: AmazonConnectFullApiSchemaSegmentSortOrder;
  Type?: AmazonConnectFullApiSchemaSortAttributeType;
};

export type AmazonConnectFullApiSchemaFieldContentType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaDetectedProfileObjectType = {
  SourceLastUpdatedTimestampFormat?: string;
  Fields?: AmazonConnectFullApiSchemaFieldMap;
  Keys?: AmazonConnectFullApiSchemaKeyMap;
};

export type AmazonConnectFullApiSchemaMatchingAttributes = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaEventStreamDestinationStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaS3ExportingLocation = {
  S3BucketName?: string;
  S3KeyName?: string;
};

export type AmazonConnectFullApiSchemaMatchItem = {
  MatchId?: string;
  ProfileIds?: AmazonConnectFullApiSchemaProfileIdList;
  ConfidenceScore?: number;
};

export type AmazonConnectFullApiSchemaGetObjectTypeAttributeStatisticsPercentiles = {
  P5: number;
  P25: number;
  P50: number;
  P75: number;
  P95: number;
};

export type AmazonConnectFullApiSchemaRecommenderFilterValues = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaRecommendation = {
  CatalogItem?: AmazonConnectFullApiSchemaCatalogItem;
  Score?: number;
};

export type AmazonConnectFullApiSchemaTrainingMetrics = {
  Time?: string;
  Metrics?: AmazonConnectFullApiSchemaMetrics;
};

export type AmazonConnectFullApiSchemaProfileQueryResult = {
  ProfileId: string;
  QueryResult: AmazonConnectFullApiSchemaQueryResult;
  Profile?: AmazonConnectFullApiSchemaProfile;
};

export type AmazonConnectFullApiSchemaProfileQueryFailures = {
  ProfileId: string;
  Message: string;
  Status?: number;
};

export type AmazonConnectFullApiSchemaAppflowIntegrationWorkflowAttributes = {
  SourceConnectorType: AmazonConnectFullApiSchemaSourceConnectorType;
  ConnectorProfileName: string;
  RoleArn?: string;
};

export type AmazonConnectFullApiSchemaAppflowIntegrationWorkflowMetrics = {
  RecordsProcessed: number;
  StepsCompleted: number;
  TotalSteps: number;
};

export type AmazonConnectFullApiSchemaWorkflowStepItem = {
  AppflowIntegration?: AmazonConnectFullApiSchemaAppflowIntegrationWorkflowStep;
};

export type AmazonConnectFullApiSchemaListIntegrationItem = {
  DomainName: string;
  Uri: string;
  ObjectTypeName?: string;
  CreatedAt: string;
  LastUpdatedAt: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
  ObjectTypeNames?: AmazonConnectFullApiSchemaObjectTypeNames;
  WorkflowId?: string;
  IsUnstructured?: boolean;
  RoleArn?: string;
  EventTriggerNames?: AmazonConnectFullApiSchemaEventTriggerNames;
  Scope?: AmazonConnectFullApiSchemaScope;
};

export type AmazonConnectFullApiSchemaListCalculatedAttributeDefinitionItem = {
  CalculatedAttributeName?: string;
  DisplayName?: string;
  Description?: string;
  CreatedAt?: string;
  LastUpdatedAt?: string;
  UseHistoricalData?: boolean;
  Status?: AmazonConnectFullApiSchemaReadinessStatus;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaListCalculatedAttributeForProfileItem = {
  CalculatedAttributeName?: string;
  DisplayName?: string;
  IsDataPartial?: string;
  Value?: string;
  LastObjectTimestamp?: string;
};

export type AmazonConnectFullApiSchemaLayoutItem = {
  LayoutDefinitionName: string;
  Description: string;
  DisplayName: string;
  IsDefault?: boolean;
  LayoutType: AmazonConnectFullApiSchemaLayoutType;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
  CreatedAt: string;
  LastUpdatedAt: string;
};

export type AmazonConnectFullApiSchemaDomainObjectTypesListItem = {
  ObjectTypeName: string;
  Description?: string;
  CreatedAt?: string;
  LastUpdatedAt?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaListDomainItem = {
  DomainName: string;
  CreatedAt: string;
  LastUpdatedAt: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaEventStreamSummary = {
  DomainName: string;
  EventStreamName: string;
  EventStreamArn: string;
  State: AmazonConnectFullApiSchemaEventStreamState;
  StoppedSince?: string;
  DestinationSummary?: AmazonConnectFullApiSchemaDestinationSummary;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaEventTriggerSummaryItem = {
  ObjectTypeName?: string;
  EventTriggerName?: string;
  Description?: string;
  CreatedAt?: string;
  LastUpdatedAt?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaIdentityResolutionJob = {
  DomainName?: string;
  JobId?: string;
  Status?: AmazonConnectFullApiSchemaIdentityResolutionJobStatus;
  JobStartTime?: string;
  JobEndTime?: string;
  JobStats?: AmazonConnectFullApiSchemaJobStats;
  ExportingLocation?: AmazonConnectFullApiSchemaExportingLocation;
  Message?: string;
};

export type AmazonConnectFullApiSchemaListObjectTypeAttributeValuesItem = {
  Value: string;
  LastUpdatedAt: string;
};

export type AmazonConnectFullApiSchemaListObjectTypeAttributeItem = {
  AttributeName: string;
  LastUpdatedAt: string;
};

export type AmazonConnectFullApiSchemaAttributeValueItem = {
  Value?: string;
};

export type AmazonConnectFullApiSchemaProfileHistoryRecord = {
  Id: string;
  ObjectTypeName: string;
  CreatedAt: string;
  LastUpdatedAt?: string;
  ActionType: AmazonConnectFullApiSchemaActionType;
  ProfileObjectUniqueKey?: string;
  PerformedBy?: string;
};

export type AmazonConnectFullApiSchemaListProfileObjectTypeTemplateItem = {
  TemplateId?: string;
  SourceName?: string;
  SourceObject?: string;
};

export type AmazonConnectFullApiSchemaListProfileObjectTypeItem = {
  ObjectTypeName: string;
  Description: string;
  CreatedAt?: string;
  LastUpdatedAt?: string;
  MaxProfileObjectCount?: number;
  MaxAvailableProfileObjectCount?: number;
  SourcePriority?: number;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaListProfileObjectsItem = {
  ObjectTypeName?: string;
  ProfileObjectUniqueKey?: string;
  Object?: string;
};

export type AmazonConnectFullApiSchemaRecommenderFilterSummary = {
  RecommenderFilterName?: string;
  RecommenderSchemaName?: string;
  RecommenderFilterExpression?: string;
  CreatedAt?: string;
  Description?: string;
  Status?: AmazonConnectFullApiSchemaRecommenderFilterStatus;
  FailureReason?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};

export type AmazonConnectFullApiSchemaRecommenderRecipe = {
  name?: AmazonConnectFullApiSchemaRecommenderRecipeName;
  description?: string;
};

export type AmazonConnectFullApiSchemaRecommenderSchemaSummary = {
  RecommenderSchemaName: string;
  Fields: AmazonConnectFullApiSchemaRecommenderSchemaFields;
  CreatedAt: string;
  Status: AmazonConnectFullApiSchemaRecommenderSchemaStatus;
};

export type AmazonConnectFullApiSchemaRecommenderSummary = {
  RecommenderName?: string;
  RecipeName?: AmazonConnectFullApiSchemaRecommenderRecipeName;
  RecommenderSchemaName?: string;
  RecommenderConfig?: AmazonConnectFullApiSchemaRecommenderConfig;
  CreatedAt?: string;
  Description?: string;
  Status?: AmazonConnectFullApiSchemaRecommenderStatus;
  LastUpdatedAt?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
  FailureReason?: string;
  LatestRecommenderUpdate?: AmazonConnectFullApiSchemaRecommenderUpdate;
};

export type AmazonConnectFullApiSchemaSegmentDefinitionItem = {
  SegmentDefinitionName?: string;
  DisplayName?: string;
  Description?: string;
  SegmentDefinitionArn?: string;
  CreatedAt?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
  SegmentType?: AmazonConnectFullApiSchemaSegmentType;
};

export type AmazonConnectFullApiSchemaUploadJobItem = {
  JobId?: string;
  DisplayName?: string;
  Status?: AmazonConnectFullApiSchemaUploadJobStatus;
  StatusReason?: AmazonConnectFullApiSchemaStatusReason;
  CreatedAt?: string;
  CompletedAt?: string;
  DataExpiry?: number;
};

export type AmazonConnectFullApiSchemaListWorkflowsItem = {
  WorkflowType: AmazonConnectFullApiSchemaWorkflowType;
  WorkflowId: string;
  Status: AmazonConnectFullApiSchemaStatus;
  StatusDescription: string;
  CreatedAt: string;
  LastUpdatedAt: string;
};

export type AmazonConnectFullApiSchemaContentType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaFeatureType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaSourceConnectorType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaIncrementalPullConfig = {
  DatetimeTypeFieldName?: string;
};

export type AmazonConnectFullApiSchemaSourceConnectorProperties = {
  Marketo?: AmazonConnectFullApiSchemaMarketoSourceProperties;
  S3?: AmazonConnectFullApiSchemaS3SourceProperties;
  Salesforce?: AmazonConnectFullApiSchemaSalesforceSourceProperties;
  ServiceNow?: AmazonConnectFullApiSchemaServiceNowSourceProperties;
  Zendesk?: AmazonConnectFullApiSchemaZendeskSourceProperties;
};

export type AmazonConnectFullApiSchemaTask = {
  ConnectorOperator?: AmazonConnectFullApiSchemaConnectorOperator;
  DestinationField?: string;
  SourceFields: AmazonConnectFullApiSchemaSourceFields;
  TaskProperties?: AmazonConnectFullApiSchemaTaskPropertiesMap;
  TaskType: AmazonConnectFullApiSchemaTaskType;
};

export type AmazonConnectFullApiSchemaTriggerType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaTriggerProperties = {
  Scheduled?: AmazonConnectFullApiSchemaScheduledTriggerProperties;
};

export type AmazonConnectFullApiSchemaObjectTypeKey = {
  StandardIdentifiers?: AmazonConnectFullApiSchemaStandardIdentifierList;
  FieldNames?: AmazonConnectFullApiSchemaFieldNameList;
};

export type AmazonConnectFullApiSchemaAssociationConfigurationList = ReadonlyArray<AmazonConnectFullApiSchemaAssociationConfiguration>;

export type AmazonConnectFullApiSchemaSuggestedMessagesList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaToolConfigurationList = ReadonlyArray<AmazonConnectFullApiSchemaToolConfiguration>;

export type AmazonConnectFullApiSchemaGuardrailTopicConfig = {
  name: string;
  definition: string;
  examples?: AmazonConnectFullApiSchemaGuardrailTopicExamples;
  type: "DENY";
};

export type AmazonConnectFullApiSchemaGuardrailContentFilterConfig = {
  type: "SEXUAL" | "VIOLENCE" | "HATE" | "INSULTS" | "MISCONDUCT" | "PROMPT_ATTACK";
  inputStrength: "NONE" | "LOW" | "MEDIUM" | "HIGH";
  outputStrength: "NONE" | "LOW" | "MEDIUM" | "HIGH";
};

export type AmazonConnectFullApiSchemaGuardrailWordConfig = {
  text: string;
};

export type AmazonConnectFullApiSchemaGuardrailManagedWordsConfig = {
  type: "PROFANITY";
};

export type AmazonConnectFullApiSchemaGuardrailPiiEntityConfig = {
  type: "ADDRESS" | "AGE" | "AWS_ACCESS_KEY" | "AWS_SECRET_KEY" | "CA_HEALTH_NUMBER" | "CA_SOCIAL_INSURANCE_NUMBER" | "CREDIT_DEBIT_CARD_CVV" | "CREDIT_DEBIT_CARD_EXPIRY" | "CREDIT_DEBIT_CARD_NUMBER" | "DRIVER_ID" | "EMAIL" | "INTERNATIONAL_BANK_ACCOUNT_NUMBER" | "IP_ADDRESS" | "LICENSE_PLATE" | "MAC_ADDRESS" | "NAME" | "PASSWORD" | "PHONE" | "PIN" | "SWIFT_CODE" | "UK_NATIONAL_HEALTH_SERVICE_NUMBER" | "UK_NATIONAL_INSURANCE_NUMBER" | "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" | "URL" | "USERNAME" | "US_BANK_ACCOUNT_NUMBER" | "US_BANK_ROUTING_NUMBER" | "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" | "US_PASSPORT_NUMBER" | "US_SOCIAL_SECURITY_NUMBER" | "VEHICLE_IDENTIFICATION_NUMBER";
  action: "BLOCK" | "ANONYMIZE";
};

export type AmazonConnectFullApiSchemaGuardrailRegexConfig = {
  name: string;
  description?: string;
  pattern: string;
  action: "BLOCK" | "ANONYMIZE";
};

export type AmazonConnectFullApiSchemaGuardrailContextualGroundingFilterConfig = {
  type: "GROUNDING" | "RELEVANCE";
  threshold: number;
};

export type AmazonConnectFullApiSchemaAssistantIntegrationConfiguration = {
  topicIntegrationArn?: string;
};

export type AmazonConnectFullApiSchemaAssistantCapabilityConfiguration = {
  type?: "V1" | "V2";
};

export type AmazonConnectFullApiSchemaAssistantAssociationOutputData = {
  knowledgeBaseAssociation: AmazonConnectFullApiSchemaKnowledgeBaseAssociationData;
} | {
  externalBedrockKnowledgeBaseConfig: AmazonConnectFullApiSchemaExternalBedrockKnowledgeBaseConfig;
};

export type AmazonConnectFullApiSchemaObjectFieldsList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaWebCrawlerConfiguration = {
  urlConfiguration: AmazonConnectFullApiSchemaUrlConfiguration;
  crawlerLimits?: AmazonConnectFullApiSchemaWebCrawlerLimits;
  inclusionFilters?: AmazonConnectFullApiSchemaUrlFilterList;
  exclusionFilters?: AmazonConnectFullApiSchemaUrlFilterList;
  scope?: "HOST_ONLY" | "SUBDOMAINS";
};

export type AmazonConnectFullApiSchemaFixedSizeChunkingConfiguration = {
  maxTokens: number;
  overlapPercentage: number;
};

export type AmazonConnectFullApiSchemaHierarchicalChunkingConfiguration = {
  levelConfigurations: AmazonConnectFullApiSchemaHierarchicalChunkingLevelConfigurations;
  overlapTokens: number;
};

export type AmazonConnectFullApiSchemaSemanticChunkingConfiguration = {
  maxTokens: number;
  bufferSize: number;
  breakpointPercentileThreshold: number;
};

export type AmazonConnectFullApiSchemaBedrockFoundationModelConfigurationForParsing = {
  modelArn: string;
  parsingPrompt?: AmazonConnectFullApiSchemaParsingPrompt;
};

export type AmazonConnectFullApiSchemaFailureReason = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaEmailMessageTemplateContentBody = {
  plainText?: AmazonConnectFullApiSchemaMessageTemplateBodyContentProvider;
  html?: AmazonConnectFullApiSchemaMessageTemplateBodyContentProvider;
};

export type AmazonConnectFullApiSchemaEmailHeaders2 = ReadonlyArray<AmazonConnectFullApiSchemaEmailHeader>;

export type AmazonConnectFullApiSchemaSMSMessageTemplateContentBody = {
  plainText?: AmazonConnectFullApiSchemaMessageTemplateBodyContentProvider;
};

export type AmazonConnectFullApiSchemaPushADMMessageTemplateContent = {
  title?: string;
  body?: AmazonConnectFullApiSchemaMessageTemplateBodyContentProvider;
  action?: "OPEN_APP" | "DEEP_LINK" | "URL";
  sound?: string;
  url?: string;
  imageUrl?: string;
  imageIconUrl?: string;
  smallImageIconUrl?: string;
  rawContent?: AmazonConnectFullApiSchemaMessageTemplateBodyContentProvider;
};

export type AmazonConnectFullApiSchemaPushAPNSMessageTemplateContent = {
  title?: string;
  body?: AmazonConnectFullApiSchemaMessageTemplateBodyContentProvider;
  action?: "OPEN_APP" | "DEEP_LINK" | "URL";
  sound?: string;
  url?: string;
  mediaUrl?: string;
  rawContent?: AmazonConnectFullApiSchemaMessageTemplateBodyContentProvider;
};

export type AmazonConnectFullApiSchemaPushFCMMessageTemplateContent = {
  title?: string;
  body?: AmazonConnectFullApiSchemaMessageTemplateBodyContentProvider;
  action?: "OPEN_APP" | "DEEP_LINK" | "URL";
  sound?: string;
  url?: string;
  imageUrl?: string;
  imageIconUrl?: string;
  smallImageIconUrl?: string;
  rawContent?: AmazonConnectFullApiSchemaMessageTemplateBodyContentProvider;
};

export type AmazonConnectFullApiSchemaPushBaiduMessageTemplateContent = {
  title?: string;
  body?: AmazonConnectFullApiSchemaMessageTemplateBodyContentProvider;
  action?: "OPEN_APP" | "DEEP_LINK" | "URL";
  sound?: string;
  url?: string;
  imageUrl?: string;
  imageIconUrl?: string;
  smallImageIconUrl?: string;
  rawContent?: AmazonConnectFullApiSchemaMessageTemplateBodyContentProvider;
};

export type AmazonConnectFullApiSchemaWhatsAppMessageTemplateComponents = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaSystemEndpointAttributes = {
  address?: string;
};

export type AmazonConnectFullApiSchemaMessageTemplateAttributeTypeList = ReadonlyArray<"SYSTEM" | "AGENT" | "CUSTOMER_PROFILE" | "CUSTOM">;

export type AmazonConnectFullApiSchemaQuickResponseContents = {
  plainText?: AmazonConnectFullApiSchemaQuickResponseContentProvider;
  markdown?: AmazonConnectFullApiSchemaQuickResponseContentProvider;
};

export type AmazonConnectFullApiSchemaOrCondition = {
  andConditions: AmazonConnectFullApiSchemaAndConditions;
} | {
  tagCondition: AmazonConnectFullApiSchemaTagCondition;
};

export type AmazonConnectFullApiSchemaSessionIntegrationConfiguration = {
  topicIntegrationArn?: string;
};

export type AmazonConnectFullApiSchemaRecommendationData = {
  recommendationId: string;
  document?: AmazonConnectFullApiSchemaDocument;
  relevanceScore?: number;
  relevanceLevel?: "HIGH" | "MEDIUM" | "LOW";
  type?: "KNOWLEDGE_CONTENT" | "GENERATIVE_RESPONSE" | "GENERATIVE_ANSWER" | "DETECTED_INTENT" | "GENERATIVE_ANSWER_CHUNK" | "BLOCKED_GENERATIVE_ANSWER_CHUNK" | "INTENT_ANSWER_CHUNK" | "BLOCKED_INTENT_ANSWER_CHUNK" | "EMAIL_RESPONSE_CHUNK" | "EMAIL_OVERVIEW_CHUNK" | "EMAIL_GENERATIVE_ANSWER_CHUNK" | "CASE_SUMMARIZATION_CHUNK" | "BLOCKED_CASE_SUMMARIZATION_CHUNK" | "SUGGESTED_MESSAGE" | "NOTES_CHUNK" | "BLOCKED_NOTES_CHUNK";
  data?: AmazonConnectFullApiSchemaDataSummary;
};

export type AmazonConnectFullApiSchemaRecommendationTrigger = {
  id: string;
  type: "QUERY" | "GENERATIVE";
  source: "ISSUE_DETECTION" | "RULE_EVALUATION" | "OTHER";
  data: AmazonConnectFullApiSchemaRecommendationTriggerData;
  recommendationIds: AmazonConnectFullApiSchemaRecommendationIdList;
};

export type AmazonConnectFullApiSchemaAIAgentVersionSummary = {
  aiAgentSummary?: AmazonConnectFullApiSchemaAIAgentSummary;
  versionNumber?: number;
};

export type AmazonConnectFullApiSchemaAIAgentSummary = {
  name: string;
  assistantId: string;
  assistantArn: string;
  aiAgentId: string;
  type: "MANUAL_SEARCH" | "ANSWER_RECOMMENDATION" | "SELF_SERVICE" | "EMAIL_RESPONSE" | "EMAIL_OVERVIEW" | "EMAIL_GENERATIVE_ANSWER" | "ORCHESTRATION" | "NOTE_TAKING" | "CASE_SUMMARIZATION";
  aiAgentArn: string;
  modifiedTime?: string;
  visibilityStatus: "SAVED" | "PUBLISHED";
  configuration?: AmazonConnectFullApiSchemaAIAgentConfiguration;
  origin?: "SYSTEM" | "CUSTOMER";
  description?: string;
  status?: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "ACTIVE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED";
  tags?: AmazonConnectFullApiSchemaTags2;
};

export type AmazonConnectFullApiSchemaAIGuardrailVersionSummary = {
  aiGuardrailSummary?: AmazonConnectFullApiSchemaAIGuardrailSummary;
  versionNumber?: number;
};

export type AmazonConnectFullApiSchemaAIGuardrailSummary = {
  name: string;
  assistantId: string;
  assistantArn: string;
  aiGuardrailId: string;
  aiGuardrailArn: string;
  modifiedTime?: string;
  visibilityStatus: "SAVED" | "PUBLISHED";
  description?: string;
  status?: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "ACTIVE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED";
  tags?: AmazonConnectFullApiSchemaTags2;
};

export type AmazonConnectFullApiSchemaAIPromptVersionSummary = {
  aiPromptSummary?: AmazonConnectFullApiSchemaAIPromptSummary;
  versionNumber?: number;
};

export type AmazonConnectFullApiSchemaAIPromptSummary = {
  name: string;
  assistantId: string;
  assistantArn: string;
  aiPromptId: string;
  type: "ANSWER_GENERATION" | "INTENT_LABELING_GENERATION" | "QUERY_REFORMULATION" | "SELF_SERVICE_PRE_PROCESSING" | "SELF_SERVICE_ANSWER_GENERATION" | "EMAIL_RESPONSE" | "EMAIL_OVERVIEW" | "EMAIL_GENERATIVE_ANSWER" | "EMAIL_QUERY_REFORMULATION" | "ORCHESTRATION" | "NOTE_TAKING" | "CASE_SUMMARIZATION";
  aiPromptArn: string;
  modifiedTime?: string;
  templateType: "TEXT";
  modelId: string;
  apiFormat: "ANTHROPIC_CLAUDE_MESSAGES" | "ANTHROPIC_CLAUDE_TEXT_COMPLETIONS" | "MESSAGES" | "TEXT_COMPLETIONS";
  visibilityStatus: "SAVED" | "PUBLISHED";
  origin?: "SYSTEM" | "CUSTOMER";
  description?: string;
  status?: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "ACTIVE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED";
  tags?: AmazonConnectFullApiSchemaTags2;
};

export type AmazonConnectFullApiSchemaAssistantAssociationSummary = {
  assistantAssociationId: string;
  assistantAssociationArn: string;
  assistantId: string;
  assistantArn: string;
  associationType: "KNOWLEDGE_BASE" | "EXTERNAL_BEDROCK_KNOWLEDGE_BASE";
  associationData: AmazonConnectFullApiSchemaAssistantAssociationOutputData;
  tags?: AmazonConnectFullApiSchemaTags2;
};

export type AmazonConnectFullApiSchemaAssistantSummary = {
  assistantId: string;
  assistantArn: string;
  name: string;
  type: "AGENT";
  status: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "ACTIVE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED";
  description?: string;
  tags?: AmazonConnectFullApiSchemaTags2;
  serverSideEncryptionConfiguration?: AmazonConnectFullApiSchemaServerSideEncryptionConfiguration;
  integrationConfiguration?: AmazonConnectFullApiSchemaAssistantIntegrationConfiguration;
  capabilityConfiguration?: AmazonConnectFullApiSchemaAssistantCapabilityConfiguration;
  aiAgentConfiguration?: AmazonConnectFullApiSchemaAIAgentConfigurationMap;
  orchestratorConfigurationList?: AmazonConnectFullApiSchemaOrchestratorConfigurationList;
};

export type AmazonConnectFullApiSchemaContentAssociationSummary = {
  knowledgeBaseId: string;
  knowledgeBaseArn: string;
  contentId: string;
  contentArn: string;
  contentAssociationId: string;
  contentAssociationArn: string;
  associationType: "AMAZON_CONNECT_GUIDE";
  associationData: AmazonConnectFullApiSchemaContentAssociationContents;
  tags?: AmazonConnectFullApiSchemaTags2;
};

export type AmazonConnectFullApiSchemaImportJobSummary = {
  importJobId: string;
  knowledgeBaseId: string;
  uploadId: string;
  knowledgeBaseArn: string;
  importJobType: "QUICK_RESPONSES";
  status: "START_IN_PROGRESS" | "FAILED" | "COMPLETE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED";
  createdTime: string;
  lastModifiedTime: string;
  metadata?: AmazonConnectFullApiSchemaContentMetadata;
  externalSourceConfiguration?: AmazonConnectFullApiSchemaExternalSourceConfiguration;
};

export type AmazonConnectFullApiSchemaKnowledgeBaseSummary = {
  knowledgeBaseId: string;
  knowledgeBaseArn: string;
  name: string;
  knowledgeBaseType: "EXTERNAL" | "CUSTOM" | "QUICK_RESPONSES" | "MESSAGE_TEMPLATES" | "MANAGED";
  status: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "ACTIVE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED";
  sourceConfiguration?: AmazonConnectFullApiSchemaSourceConfiguration;
  vectorIngestionConfiguration?: AmazonConnectFullApiSchemaVectorIngestionConfiguration;
  renderingConfiguration?: AmazonConnectFullApiSchemaRenderingConfiguration;
  serverSideEncryptionConfiguration?: AmazonConnectFullApiSchemaServerSideEncryptionConfiguration;
  description?: string;
  tags?: AmazonConnectFullApiSchemaTags2;
};

export type AmazonConnectFullApiSchemaMessageTemplateVersionSummary = {
  messageTemplateArn: string;
  messageTemplateId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  channel?: string;
  channelSubtype: "EMAIL" | "SMS" | "WHATSAPP" | "PUSH";
  isActive: boolean;
  versionNumber: number;
};

export type AmazonConnectFullApiSchemaMessageTemplateSummary = {
  messageTemplateArn: string;
  messageTemplateId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  channel?: string;
  channelSubtype: "EMAIL" | "SMS" | "WHATSAPP" | "PUSH";
  createdTime: string;
  lastModifiedTime: string;
  lastModifiedBy: string;
  sourceConfiguration?: AmazonConnectFullApiSchemaMessageTemplateSourceConfiguration;
  activeVersionNumber?: number;
  description?: string;
  tags?: AmazonConnectFullApiSchemaTags2;
};

export type AmazonConnectFullApiSchemaModelSummary = {
  modelId: string;
  displayName: string;
  crossRegionStatus?: "NONE" | "REGIONAL" | "GLOBAL";
  supportsPromptCaching?: boolean;
  supportedAIPromptTypes?: AmazonConnectFullApiSchemaAIPromptTypeList;
  modelLifecycle?: "ACTIVE" | "LEGACY";
  legacyTimestamp?: string;
  endOfLifeTimestamp?: string;
};

export type AmazonConnectFullApiSchemaQuickResponseSummary = {
  quickResponseArn: string;
  quickResponseId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  contentType: string;
  status: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "CREATED" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED" | "UPDATE_IN_PROGRESS" | "UPDATE_FAILED";
  createdTime: string;
  lastModifiedTime: string;
  description?: string;
  lastModifiedBy?: string;
  isActive?: boolean;
  channels?: AmazonConnectFullApiSchemaChannels;
  tags?: AmazonConnectFullApiSchemaTags2;
};

export type AmazonConnectFullApiSchemaSpan = {
  spanId: string;
  assistantId: string;
  sessionId: string;
  parentSpanId?: string;
  spanName: string;
  spanType: "CLIENT" | "SERVER" | "INTERNAL";
  startTimestamp: string;
  endTimestamp: string;
  status: "OK" | "ERROR" | "TIMEOUT";
  statusDescription?: string;
  requestId: string;
  originRequestId?: string;
  attributes: AmazonConnectFullApiSchemaSpanAttributes;
};

export type AmazonConnectFullApiSchemaNotifyRecommendationsReceivedError = {
  recommendationId?: string;
  message?: string;
};

export type AmazonConnectFullApiSchemaQueryConditionItem = {
  field: "RESULT_TYPE";
  comparator: "EQUALS";
  value: string;
};

export type AmazonConnectFullApiSchemaResultData = {
  resultId: string;
  document?: AmazonConnectFullApiSchemaDocument;
  relevanceScore?: number;
  data?: AmazonConnectFullApiSchemaDataSummary;
  type?: "KNOWLEDGE_CONTENT" | "INTENT_ANSWER" | "GENERATIVE_ANSWER" | "GENERATIVE_ANSWER_CHUNK" | "BLOCKED_GENERATIVE_ANSWER_CHUNK" | "INTENT_ANSWER_CHUNK" | "BLOCKED_INTENT_ANSWER_CHUNK" | "EMAIL_RESPONSE_CHUNK" | "EMAIL_OVERVIEW_CHUNK" | "EMAIL_GENERATIVE_ANSWER_CHUNK" | "CASE_SUMMARIZATION_CHUNK" | "BLOCKED_CASE_SUMMARIZATION_CHUNK" | "NOTES" | "NOTES_CHUNK" | "BLOCKED_NOTES_CHUNK";
};

export type AmazonConnectFullApiSchemaWhatsAppMessageTemplateSourceConfigurationSummary = {
  businessAccountId: string;
  templateId: string;
  name?: string;
  language?: string;
  components?: AmazonConnectFullApiSchemaWhatsAppMessageTemplateComponents;
  status?: "VALID" | "INVALID" | "REJECTED";
  statusReason?: string;
};

export type AmazonConnectFullApiSchemaAssistantAssociationIdList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaRetrievalFilterList = ReadonlyArray<AmazonConnectFullApiSchemaRetrievalFilterConfiguration>;

export type AmazonConnectFullApiSchemaFilterAttribute = {
  key: string;
  value: AmazonConnectFullApiSchemaJsonValue;
};

export type AmazonConnectFullApiSchemaRetrieveResult = {
  associationId: string;
  sourceId: string;
  referenceType: "WEB_CRAWLER" | "KNOWLEDGE_BASE" | "BEDROCK_KB_S3" | "BEDROCK_KB_WEB" | "BEDROCK_KB_CONFLUENCE" | "BEDROCK_KB_SALESFORCE" | "BEDROCK_KB_SHAREPOINT" | "BEDROCK_KB_KENDRA" | "BEDROCK_KB_CUSTOM_DOCUMENT" | "BEDROCK_KB_SQL";
  contentText: string;
};

export type AmazonConnectFullApiSchemaFilter2 = {
  field: "NAME";
  operator: "EQUALS";
  value: string;
};

export type AmazonConnectFullApiSchemaMessageTemplateQueryField = {
  name: string;
  values: AmazonConnectFullApiSchemaMessageTemplateQueryValueList;
  operator: "CONTAINS" | "CONTAINS_AND_PREFIX";
  allowFuzziness?: boolean;
  priority?: "HIGH" | "MEDIUM" | "LOW";
};

export type AmazonConnectFullApiSchemaMessageTemplateFilterField = {
  name: string;
  values?: AmazonConnectFullApiSchemaMessageTemplateFilterValueList;
  operator: "EQUALS" | "PREFIX";
  includeNoExistence?: boolean;
};

export type AmazonConnectFullApiSchemaMessageTemplateSearchResultData = {
  messageTemplateArn: string;
  messageTemplateId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  channel?: string;
  channelSubtype: "EMAIL" | "SMS" | "WHATSAPP" | "PUSH";
  createdTime: string;
  lastModifiedTime: string;
  lastModifiedBy: string;
  isActive?: boolean;
  versionNumber?: number;
  description?: string;
  sourceConfigurationSummary?: AmazonConnectFullApiSchemaMessageTemplateSourceConfigurationSummary;
  groupingConfiguration?: AmazonConnectFullApiSchemaGroupingConfiguration;
  language?: string;
  tags?: AmazonConnectFullApiSchemaTags2;
};

export type AmazonConnectFullApiSchemaQuickResponseQueryField = {
  name: string;
  values: AmazonConnectFullApiSchemaQuickResponseQueryValueList;
  operator: "CONTAINS" | "CONTAINS_AND_PREFIX";
  allowFuzziness?: boolean;
  priority?: "HIGH" | "MEDIUM" | "LOW";
};

export type AmazonConnectFullApiSchemaQuickResponseFilterField = {
  name: string;
  values?: AmazonConnectFullApiSchemaQuickResponseFilterValueList;
  operator: "EQUALS" | "PREFIX";
  includeNoExistence?: boolean;
};

export type AmazonConnectFullApiSchemaQuickResponseSearchResultData = {
  quickResponseArn: string;
  quickResponseId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  contentType: string;
  status: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "CREATED" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED" | "UPDATE_IN_PROGRESS" | "UPDATE_FAILED";
  contents: AmazonConnectFullApiSchemaQuickResponseContents;
  createdTime: string;
  lastModifiedTime: string;
  isActive: boolean;
  description?: string;
  groupingConfiguration?: AmazonConnectFullApiSchemaGroupingConfiguration;
  shortcutKey?: string;
  lastModifiedBy?: string;
  channels?: AmazonConnectFullApiSchemaChannels;
  language?: string;
  attributesNotInterpolated?: AmazonConnectFullApiSchemaContactAttributeKeys;
  attributesInterpolated?: AmazonConnectFullApiSchemaContactAttributeKeys;
  tags?: AmazonConnectFullApiSchemaTags2;
};

export type AmazonConnectFullApiSchemaSessionSummary = {
  sessionId: string;
  sessionArn: string;
  assistantId: string;
  assistantArn: string;
};

export type AmazonConnectFullApiSchemaTextMessage = {
  value?: string;
  citations?: AmazonConnectFullApiSchemaCitations;
  aiGuardrailAssessment?: AmazonConnectFullApiSchemaAIGuardrailAssessment;
};

export type AmazonConnectFullApiSchemaToolUseResultData = {
  toolUseId: string;
  toolName: string;
  toolResult: AmazonConnectFullApiSchemaJsonValue;
  inputSchema?: AmazonConnectFullApiSchemaJsonValue;
};

export type AmazonConnectFullApiSchemaSelfServiceConversationHistory = {
  turnNumber?: number;
  inputTranscript?: string;
  botResponse?: string;
  timestamp?: string;
};

export type AmazonConnectFullApiSchemaConnectConfiguration = {
  instanceId?: string;
};

export type AmazonConnectFullApiSchemaRuntimeSessionDataValue = {
  stringValue: string;
};

export type AmazonConnectFullApiSchemaAssistantIntegrationConfiguration2 = {
  topicIntegrationArn?: string;
};

export type AmazonConnectFullApiSchemaAssistantAssociationOutputData2 = {
  knowledgeBaseAssociation: AmazonConnectFullApiSchemaKnowledgeBaseAssociationData2;
};

export type AmazonConnectFullApiSchemaObjectFieldsList2 = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaQuickResponseContents2 = {
  plainText?: AmazonConnectFullApiSchemaQuickResponseContentProvider2;
  markdown?: AmazonConnectFullApiSchemaQuickResponseContentProvider2;
};

export type AmazonConnectFullApiSchemaSessionIntegrationConfiguration2 = {
  topicIntegrationArn?: string;
};

export type AmazonConnectFullApiSchemaRecommendationData2 = {
  recommendationId: string;
  document: AmazonConnectFullApiSchemaDocument2;
  relevanceScore?: number;
  relevanceLevel?: "HIGH" | "MEDIUM" | "LOW";
  type?: "KNOWLEDGE_CONTENT";
};

export type AmazonConnectFullApiSchemaRecommendationTrigger2 = {
  id: string;
  type: "QUERY";
  source: "ISSUE_DETECTION" | "RULE_EVALUATION" | "OTHER";
  data: AmazonConnectFullApiSchemaRecommendationTriggerData2;
  recommendationIds: AmazonConnectFullApiSchemaRecommendationIdList2;
};

export type AmazonConnectFullApiSchemaAssistantAssociationSummary2 = {
  assistantAssociationId: string;
  assistantAssociationArn: string;
  assistantId: string;
  assistantArn: string;
  associationType: "KNOWLEDGE_BASE";
  associationData: AmazonConnectFullApiSchemaAssistantAssociationOutputData2;
  tags?: AmazonConnectFullApiSchemaTags3;
};

export type AmazonConnectFullApiSchemaAssistantSummary2 = {
  assistantId: string;
  assistantArn: string;
  name: string;
  type: "AGENT";
  status: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "ACTIVE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED";
  description?: string;
  tags?: AmazonConnectFullApiSchemaTags3;
  serverSideEncryptionConfiguration?: AmazonConnectFullApiSchemaServerSideEncryptionConfiguration2;
  integrationConfiguration?: AmazonConnectFullApiSchemaAssistantIntegrationConfiguration2;
};

export type AmazonConnectFullApiSchemaImportJobSummary2 = {
  importJobId: string;
  knowledgeBaseId: string;
  uploadId: string;
  knowledgeBaseArn: string;
  importJobType: "QUICK_RESPONSES";
  status: "START_IN_PROGRESS" | "FAILED" | "COMPLETE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED";
  createdTime: string;
  lastModifiedTime: string;
  metadata?: AmazonConnectFullApiSchemaContentMetadata2;
  externalSourceConfiguration?: AmazonConnectFullApiSchemaExternalSourceConfiguration2;
};

export type AmazonConnectFullApiSchemaKnowledgeBaseSummary2 = {
  knowledgeBaseId: string;
  knowledgeBaseArn: string;
  name: string;
  knowledgeBaseType: "EXTERNAL" | "CUSTOM" | "QUICK_RESPONSES";
  status: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "ACTIVE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED";
  sourceConfiguration?: AmazonConnectFullApiSchemaSourceConfiguration2;
  renderingConfiguration?: AmazonConnectFullApiSchemaRenderingConfiguration2;
  serverSideEncryptionConfiguration?: AmazonConnectFullApiSchemaServerSideEncryptionConfiguration2;
  description?: string;
  tags?: AmazonConnectFullApiSchemaTags3;
};

export type AmazonConnectFullApiSchemaQuickResponseSummary2 = {
  quickResponseArn: string;
  quickResponseId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  contentType: string;
  status: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "CREATED" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED" | "UPDATE_IN_PROGRESS" | "UPDATE_FAILED";
  createdTime: string;
  lastModifiedTime: string;
  description?: string;
  lastModifiedBy?: string;
  isActive?: boolean;
  channels?: AmazonConnectFullApiSchemaChannels2;
  tags?: AmazonConnectFullApiSchemaTags3;
};

export type AmazonConnectFullApiSchemaNotifyRecommendationsReceivedError2 = {
  recommendationId?: string;
  message?: string;
};

export type AmazonConnectFullApiSchemaResultData2 = {
  resultId: string;
  document: AmazonConnectFullApiSchemaDocument2;
  relevanceScore?: number;
};

export type AmazonConnectFullApiSchemaFilter3 = {
  field: "NAME";
  operator: "EQUALS";
  value: string;
};

export type AmazonConnectFullApiSchemaQuickResponseQueryField2 = {
  name: string;
  values: AmazonConnectFullApiSchemaQuickResponseQueryValueList2;
  operator: "CONTAINS" | "CONTAINS_AND_PREFIX";
  allowFuzziness?: boolean;
  priority?: "HIGH" | "MEDIUM" | "LOW";
};

export type AmazonConnectFullApiSchemaQuickResponseFilterField2 = {
  name: string;
  values?: AmazonConnectFullApiSchemaQuickResponseFilterValueList2;
  operator: "EQUALS" | "PREFIX";
  includeNoExistence?: boolean;
};

export type AmazonConnectFullApiSchemaQuickResponseSearchResultData2 = {
  quickResponseArn: string;
  quickResponseId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  contentType: string;
  status: "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "CREATED" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETED" | "UPDATE_IN_PROGRESS" | "UPDATE_FAILED";
  contents: AmazonConnectFullApiSchemaQuickResponseContents2;
  createdTime: string;
  lastModifiedTime: string;
  isActive: boolean;
  description?: string;
  groupingConfiguration?: AmazonConnectFullApiSchemaGroupingConfiguration2;
  shortcutKey?: string;
  lastModifiedBy?: string;
  channels?: AmazonConnectFullApiSchemaChannels2;
  language?: string;
  attributesNotInterpolated?: AmazonConnectFullApiSchemaContactAttributeKeys2;
  attributesInterpolated?: AmazonConnectFullApiSchemaContactAttributeKeys2;
  tags?: AmazonConnectFullApiSchemaTags3;
};

export type AmazonConnectFullApiSchemaSessionSummary2 = {
  sessionId: string;
  sessionArn: string;
  assistantId: string;
  assistantArn: string;
};

export type AmazonConnectFullApiSchemaConnectConfiguration2 = {
  instanceId?: string;
};

export type AmazonConnectFullApiSchemaLastExecutionStatus = {
  ExecutionStatus?: AmazonConnectFullApiSchemaExecutionStatus;
  StatusMessage?: string;
};

export type AmazonConnectFullApiSchemaEncryptionType2 = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaPrimaryValuesResponseSet = ReadonlyArray<AmazonConnectFullApiSchemaPrimaryValueResponse>;

export type AmazonConnectFullApiSchemaFailureReasonCode = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationFormQuestionType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationFormQuestionTypeProperties = {
  Numeric: AmazonConnectFullApiSchemaEvaluationFormNumericQuestionProperties;
} | {
  SingleSelect: AmazonConnectFullApiSchemaEvaluationFormSingleSelectQuestionProperties;
} | {
  Text: AmazonConnectFullApiSchemaEvaluationFormTextQuestionProperties;
} | {
  MultiSelect: AmazonConnectFullApiSchemaEvaluationFormMultiSelectQuestionProperties;
};

export type AmazonConnectFullApiSchemaEvaluationFormItemEnablementConfiguration = {
  Condition: AmazonConnectFullApiSchemaEvaluationFormItemEnablementCondition;
  Action: AmazonConnectFullApiSchemaEvaluationFormItemEnablementAction;
  DefaultAction?: AmazonConnectFullApiSchemaEvaluationFormItemEnablementAction;
};

export type AmazonConnectFullApiSchemaEvaluationReviewNotificationRecipientType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationReviewNotificationRecipientValue = {
  UserId?: string;
};

export type AmazonConnectFullApiSchemaBehaviorType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaNotificationDeliveryType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaNotificationContentType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaNotificationRecipientType = {
  UserTags?: AmazonConnectFullApiSchemaUserTagMap;
  UserIds?: AmazonConnectFullApiSchemaUserIdList;
};

export type AmazonConnectFullApiSchemaFieldValues = ReadonlyArray<AmazonConnectFullApiSchemaFieldValue2>;

export type AmazonConnectFullApiSchemaSlaAssignmentType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCaseSlaConfiguration = {
  Name: string;
  Type: AmazonConnectFullApiSchemaSlaType;
  FieldId?: string;
  TargetFieldValues?: AmazonConnectFullApiSchemaSlaFieldValueUnionList2;
  TargetSlaMinutes: number;
};

export type AmazonConnectFullApiSchemaPrimaryAttributeValuesSet = ReadonlyArray<AmazonConnectFullApiSchemaPrimaryAttributeValue>;

export type AmazonConnectFullApiSchemaPaletteHeader = {
  Background?: string;
  Text?: string;
  TextHover?: string;
  InvertActionsColors?: boolean;
};

export type AmazonConnectFullApiSchemaPaletteNavigation = {
  Background?: string;
  TextBackgroundHover?: string;
  TextBackgroundActive?: string;
  Text?: string;
  TextHover?: string;
  TextActive?: string;
  InvertActionsColors?: boolean;
};

export type AmazonConnectFullApiSchemaPaletteCanvas = {
  ContainerBackground?: string;
  PageBackground?: string;
  ActiveBackground?: string;
};

export type AmazonConnectFullApiSchemaPalettePrimary = {
  Default?: string;
  Active?: string;
  ContrastText?: string;
};

export type AmazonConnectFullApiSchemaImagesLogo = {
  Default?: string;
  Favicon?: string;
};

export type AmazonConnectFullApiSchemaFontFamily = {
  Default?: AmazonConnectFullApiSchemaWorkspaceFontFamily;
};

export type AmazonConnectFullApiSchemaHierarchyGroups = {
  Level1?: AmazonConnectFullApiSchemaAgentHierarchyGroup;
  Level2?: AmazonConnectFullApiSchemaAgentHierarchyGroup;
  Level3?: AmazonConnectFullApiSchemaAgentHierarchyGroup;
  Level4?: AmazonConnectFullApiSchemaAgentHierarchyGroup;
  Level5?: AmazonConnectFullApiSchemaAgentHierarchyGroup;
};

export type AmazonConnectFullApiSchemaDeviceInfo = {
  PlatformName?: string;
  PlatformVersion?: string;
  OperatingSystem?: string;
};

export type AmazonConnectFullApiSchemaStateTransitions = ReadonlyArray<AmazonConnectFullApiSchemaStateTransition>;

export type AmazonConnectFullApiSchemaAiAgents = ReadonlyArray<AmazonConnectFullApiSchemaAiAgentInfo>;

export type AmazonConnectFullApiSchemaSteps = ReadonlyArray<AmazonConnectFullApiSchemaStep>;

export type AmazonConnectFullApiSchemaAgentQualityMetrics = {
  Audio?: AmazonConnectFullApiSchemaAudioQualityMetricsInfo;
};

export type AmazonConnectFullApiSchemaCustomerQualityMetrics = {
  Audio?: AmazonConnectFullApiSchemaAudioQualityMetricsInfo;
};

export type AmazonConnectFullApiSchemaChatContactMetrics = {
  MultiParty?: boolean;
  TotalMessages?: number;
  TotalBotMessages?: number;
  TotalBotMessageLengthInChars?: number;
  ConversationCloseTimeInMillis?: number;
  ConversationTurnCount?: number;
  AgentFirstResponseTimestamp?: string;
  AgentFirstResponseTimeInMillis?: number;
};

export type AmazonConnectFullApiSchemaParticipantMetrics = {
  ParticipantId?: string;
  ParticipantType?: AmazonConnectFullApiSchemaParticipantType;
  ConversationAbandon?: boolean;
  MessagesSent?: number;
  NumResponses?: number;
  MessageLengthInChars?: number;
  TotalResponseTimeInMillis?: number;
  MaxResponseTimeInMillis?: number;
  LastMessageTimestamp?: string;
};

export type AmazonConnectFullApiSchemaEmailRecipientsList = ReadonlyArray<AmazonConnectFullApiSchemaEmailRecipient>;

export type AmazonConnectFullApiSchemaRecordingInfo = {
  StorageType?: AmazonConnectFullApiSchemaStorageType;
  Location?: string;
  MediaStreamType?: AmazonConnectFullApiSchemaMediaStreamType;
  ParticipantType?: AmazonConnectFullApiSchemaParticipantType;
  FragmentStartNumber?: string;
  FragmentStopNumber?: string;
  StartTimestamp?: string;
  StopTimestamp?: string;
  Status?: AmazonConnectFullApiSchemaRecordingStatus;
  DeletionReason?: string;
  UnprocessedTranscriptLocation?: string;
};

export type AmazonConnectFullApiSchemaContactEvaluation = {
  FormId?: string;
  EvaluationArn?: string;
  Status?: AmazonConnectFullApiSchemaStatus2;
  StartTimestamp?: string;
  EndTimestamp?: string;
  DeleteTimestamp?: string;
  ExportLocation?: string;
};

export type AmazonConnectFullApiSchemaNextContactEntry = {
  Type?: AmazonConnectFullApiSchemaNextContactType;
  NextContactMetadata?: AmazonConnectFullApiSchemaNextContactMetadata;
};

export type AmazonConnectFullApiSchemaEvaluationScore = {
  Percentage?: number;
  NotApplicable?: boolean;
  AutomaticFail?: boolean;
  AppliedWeight?: number;
};

export type AmazonConnectFullApiSchemaAutoEvaluationDetails = {
  AutoEvaluationEnabled: boolean;
  AutoEvaluationStatus?: AmazonConnectFullApiSchemaAutoEvaluationStatus;
};

export type AmazonConnectFullApiSchemaEvaluationAcknowledgement = {
  AcknowledgedTime: string;
  AcknowledgedBy: string;
  AcknowledgerComment?: string;
};

export type AmazonConnectFullApiSchemaEvaluationReviewMetadata = {
  ReviewId?: string;
  RequestedTime?: string;
  RequestedBy?: string;
  CreatedTime?: string;
  CreatedBy?: string;
  ReviewRequestComments: AmazonConnectFullApiSchemaEvaluationReviewRequestCommentList;
};

export type AmazonConnectFullApiSchemaEvaluationContactParticipant = {
  ContactParticipantRole?: AmazonConnectFullApiSchemaContactParticipantRole;
  ContactParticipantId?: string;
};

export type AmazonConnectFullApiSchemaEvaluationAnswerOutput = {
  Value?: AmazonConnectFullApiSchemaEvaluationAnswerData;
  SystemSuggestedValue?: AmazonConnectFullApiSchemaEvaluationAnswerData;
  SuggestedAnswers?: AmazonConnectFullApiSchemaEvaluationSuggestedAnswersList;
};

export type AmazonConnectFullApiSchemaReplicationStatusSummary = {
  Region?: string;
  ReplicationStatus?: AmazonConnectFullApiSchemaInstanceReplicationStatus;
  ReplicationStatusReason?: string;
};

export type AmazonConnectFullApiSchemaPhoneNumberWorkflowStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaContactMetricValue = {
  Number: number;
};

export type AmazonConnectFullApiSchemaDimensions = {
  Queue?: AmazonConnectFullApiSchemaQueueReference;
  Channel?: AmazonConnectFullApiSchemaChannel;
  RoutingProfile?: AmazonConnectFullApiSchemaRoutingProfileReference;
  RoutingStepExpression?: string;
  AgentStatus?: AmazonConnectFullApiSchemaAgentStatusIdentifier;
  Subtype?: string;
  ValidationTestType?: string;
};

export type AmazonConnectFullApiSchemaCurrentMetricDataCollections = ReadonlyArray<AmazonConnectFullApiSchemaCurrentMetricData>;

export type AmazonConnectFullApiSchemaContactState = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaUserReference = {
  Id?: string;
  Arn?: string;
};

export type AmazonConnectFullApiSchemaRoutingProfileReference = {
  Id?: string;
  Arn?: string;
};

export type AmazonConnectFullApiSchemaHierarchyPathReference = {
  LevelOne?: AmazonConnectFullApiSchemaHierarchyGroupSummaryReference;
  LevelTwo?: AmazonConnectFullApiSchemaHierarchyGroupSummaryReference;
  LevelThree?: AmazonConnectFullApiSchemaHierarchyGroupSummaryReference;
  LevelFour?: AmazonConnectFullApiSchemaHierarchyGroupSummaryReference;
  LevelFive?: AmazonConnectFullApiSchemaHierarchyGroupSummaryReference;
};

export type AmazonConnectFullApiSchemaAgentStatusReference = {
  StatusStartTimestamp?: string;
  StatusArn?: string;
  StatusName?: string;
};

export type AmazonConnectFullApiSchemaChannelToCountMap = {
  readonly [key: string]: number | undefined;
};

export type AmazonConnectFullApiSchemaAgentContactReferenceList = ReadonlyArray<AmazonConnectFullApiSchemaAgentContactReference>;

export type AmazonConnectFullApiSchemaOperationalHours = ReadonlyArray<AmazonConnectFullApiSchemaOperationalHour>;

export type AmazonConnectFullApiSchemaOverrideHours = ReadonlyArray<AmazonConnectFullApiSchemaOverrideHour>;

export type AmazonConnectFullApiSchemaComparison = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaHistoricalMetricDataCollections = ReadonlyArray<AmazonConnectFullApiSchemaHistoricalMetricData>;

export type AmazonConnectFullApiSchemaFilterV2StringConditionComparisonOperator = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaThresholdV2 = {
  Comparison?: string;
  ThresholdValue?: number;
};

export type AmazonConnectFullApiSchemaMetricFilterV2 = {
  MetricFilterKey?: string;
  MetricFilterValues?: AmazonConnectFullApiSchemaMetricFilterValueList;
  Negate?: boolean;
};

export type AmazonConnectFullApiSchemaDimensionsV2Map = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaMetricInterval = {
  Interval?: AmazonConnectFullApiSchemaIntervalPeriod;
  StartTime?: string;
  EndTime?: string;
};

export type AmazonConnectFullApiSchemaMetricDataCollectionsV2 = ReadonlyArray<AmazonConnectFullApiSchemaMetricDataV2>;

export type AmazonConnectFullApiSchemaAutoEvaluationStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationAcknowledgementSummary = {
  AcknowledgedTime?: string;
  AcknowledgedBy?: string;
  AcknowledgerComment?: string;
};

export type AmazonConnectFullApiSchemaUrlReference = {
  Name?: string;
  Value?: string;
};

export type AmazonConnectFullApiSchemaAttachmentReference = {
  Name?: string;
  Value?: string;
  Status?: AmazonConnectFullApiSchemaReferenceStatus;
  Arn?: string;
};

export type AmazonConnectFullApiSchemaEmailMessageReference = {
  Name?: string;
  Arn?: string;
};

export type AmazonConnectFullApiSchemaStringReference = {
  Name?: string;
  Value?: string;
};

export type AmazonConnectFullApiSchemaNumberReference = {
  Name?: string;
  Value?: string;
};

export type AmazonConnectFullApiSchemaDateReference = {
  Name?: string;
  Value?: string;
};

export type AmazonConnectFullApiSchemaEmailReference = {
  Name?: string;
  Value?: string;
};

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisSegmentTranscript = {
  Id: string;
  ParticipantId: string;
  ParticipantRole: AmazonConnectFullApiSchemaParticipantRole;
  DisplayName?: string;
  Content: string;
  ContentType?: string;
  Time: AmazonConnectFullApiSchemaRealTimeContactAnalysisTimeData;
  Redaction?: AmazonConnectFullApiSchemaRealTimeContactAnalysisTranscriptItemRedaction;
  Sentiment?: AmazonConnectFullApiSchemaRealTimeContactAnalysisSentimentLabel;
};

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisSegmentCategories = {
  MatchedDetails: AmazonConnectFullApiSchemaRealTimeContactAnalysisMatchedDetails;
};

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisSegmentIssues = {
  IssuesDetected: AmazonConnectFullApiSchemaRealTimeContactAnalysisIssuesDetected;
};

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisSegmentEvent = {
  Id: string;
  ParticipantId?: string;
  ParticipantRole?: AmazonConnectFullApiSchemaParticipantRole;
  DisplayName?: string;
  EventType: string;
  Time: AmazonConnectFullApiSchemaRealTimeContactAnalysisTimeData;
};

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisSegmentAttachments = {
  Id: string;
  ParticipantId: string;
  ParticipantRole: AmazonConnectFullApiSchemaParticipantRole;
  DisplayName?: string;
  Attachments: AmazonConnectFullApiSchemaRealTimeContactAnalysisAttachments;
  Time: AmazonConnectFullApiSchemaRealTimeContactAnalysisTimeData;
};

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisSegmentPostContactSummary = {
  Content?: string;
  Status: AmazonConnectFullApiSchemaRealTimeContactAnalysisPostContactSummaryStatus;
  FailureCode?: AmazonConnectFullApiSchemaRealTimeContactAnalysisPostContactSummaryFailureCode;
};

export type AmazonConnectFullApiSchemaActionSummaries = ReadonlyArray<AmazonConnectFullApiSchemaActionSummary>;

export type AmazonConnectFullApiSchemaExecutionRecordStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaNotificationSource = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationSearchMetadata = {
  ContactId: string;
  EvaluatorArn: string;
  ContactAgentId?: string;
  CalibrationSessionId?: string;
  ScorePercentage?: number;
  ScoreAutomaticFail?: boolean;
  ScoreNotApplicable?: boolean;
  AutoEvaluationEnabled?: boolean;
  AutoEvaluationStatus?: AmazonConnectFullApiSchemaAutoEvaluationStatus;
  AcknowledgedTime?: string;
  AcknowledgedBy?: string;
  AcknowledgerComment?: string;
  SamplingJobId?: string;
  ReviewId?: string;
  ContactParticipantRole?: AmazonConnectFullApiSchemaContactParticipantRole;
  ContactParticipantId?: string;
};

export type AmazonConnectFullApiSchemaTranscriptCriteriaList = ReadonlyArray<AmazonConnectFullApiSchemaTranscriptCriteria>;

export type AmazonConnectFullApiSchemaSearchableRoutingCriteriaStep = {
  AgentCriteria?: AmazonConnectFullApiSchemaSearchableAgentCriteriaStep;
};

export type AmazonConnectFullApiSchemaSearchContactsAdditionalTimeRangeCriteria = {
  TimeRange?: AmazonConnectFullApiSchemaSearchContactsTimeRange;
  TimestampCondition?: AmazonConnectFullApiSchemaSearchContactsTimestampCondition;
};

export type AmazonConnectFullApiSchemaSearchableContactAttributesCriteria = {
  Key: string;
  Values: AmazonConnectFullApiSchemaSearchableContactAttributeValueList;
};

export type AmazonConnectFullApiSchemaSearchableSegmentAttributesCriteria = {
  Key: string;
  Values: AmazonConnectFullApiSchemaSearchableSegmentAttributeValueList;
};

export type AmazonConnectFullApiSchemaAiAgentSearchCriteria = {
  Id?: string;
  VersionNumber?: number;
  AiAgentEscalated?: boolean;
  AiUseCase?: AmazonConnectFullApiSchemaAiUseCase;
};

export type AmazonConnectFullApiSchemaContactSearchSummaryQueueInfo = {
  Id?: string;
  EnqueueTimestamp?: string;
};

export type AmazonConnectFullApiSchemaContactSearchSummaryAgentInfo = {
  Id?: string;
  ConnectedToAgentTimestamp?: string;
};

export type AmazonConnectFullApiSchemaContactSearchSummarySegmentAttributes = {
  readonly [key: string]: AmazonConnectFullApiSchemaContactSearchSummarySegmentAttributeValue | undefined;
};

export type AmazonConnectFullApiSchemaContactSearchSummaryAiAgentInfoList = ReadonlyArray<AmazonConnectFullApiSchemaContactSearchSummaryAiAgentInfo>;

export type AmazonConnectFullApiSchemaCondition = {
  StringCondition?: AmazonConnectFullApiSchemaStringCondition;
  NumberCondition?: AmazonConnectFullApiSchemaNumberCondition;
};

export type AmazonConnectFullApiSchemaUserIdentityInfoLite = {
  FirstName?: string;
  LastName?: string;
};

export type AmazonConnectFullApiSchemaPreview = {
  PostAcceptTimeoutConfig: AmazonConnectFullApiSchemaPostAcceptTimeoutConfig;
  AllowedUserActions: AmazonConnectFullApiSchemaAllowedUserActions;
};

export type AmazonConnectFullApiSchemaMediaPlacement = {
  AudioHostUrl?: string;
  AudioFallbackUrl?: string;
  SignalingUrl?: string;
  TurnControlUrl?: string;
  EventIngestionUrl?: string;
};

export type AmazonConnectFullApiSchemaMeetingFeaturesConfiguration = {
  Audio?: AmazonConnectFullApiSchemaAudioFeatures;
};

export type AmazonConnectFullApiSchemaEvaluationAnswerDataStringValueList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaRoutingCriteriaInputStepExpiry = {
  DurationInSeconds?: number;
};

export type AmazonConnectFullApiSchemaExpression = {
  AttributeCondition?: AmazonConnectFullApiSchemaAttributeCondition;
  AndExpression?: AmazonConnectFullApiSchemaExpressions;
  OrExpression?: AmazonConnectFullApiSchemaExpressions;
  NotAttributeCondition?: AmazonConnectFullApiSchemaAttributeCondition;
};

export type AmazonConnectFullApiSchemaParticipantTimerConfiguration = {
  ParticipantRole: AmazonConnectFullApiSchemaTimerEligibleParticipantRoles;
  TimerType: AmazonConnectFullApiSchemaParticipantTimerType;
  TimerValue: AmazonConnectFullApiSchemaParticipantTimerValue;
};

export type AmazonConnectFullApiSchemaWebRTCMediaPlacement = {
  AudioHostUrl?: string;
  AudioFallbackUrl?: string;
  SignalingUrl?: string;
  EventIngestionUrl?: string;
};

export type AmazonConnectFullApiSchemaMeetingFeaturesConfiguration2 = {
  Audio?: AmazonConnectFullApiSchemaAudioFeatures2;
};

export type AmazonConnectFullApiSchemaViewActions2 = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaChatItemType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaParticipantRole2 = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaAttachments = ReadonlyArray<AmazonConnectFullApiSchemaAttachmentItem>;

export type AmazonConnectFullApiSchemaMessageMetadata2 = {
  MessageId?: string;
  Receipts?: AmazonConnectFullApiSchemaReceipts;
  MessageProcessingStatus?: AmazonConnectFullApiSchemaMessageProcessingStatus;
};

export type AmazonConnectFullApiSchemaEmptyFieldValue = {};

export type AmazonConnectFullApiSchemaBooleanCondition2 = {
  equalTo: AmazonConnectFullApiSchemaBooleanOperands;
} | {
  notEqualTo: AmazonConnectFullApiSchemaBooleanOperands;
} | {
  andAll: AmazonConnectFullApiSchemaCompoundCondition;
} | {
  orAll: AmazonConnectFullApiSchemaCompoundCondition;
};

export type AmazonConnectFullApiSchemaParentChildFieldOptionsMapping = {
  parentFieldOptionValue: string;
  childFieldOptionValues: AmazonConnectFullApiSchemaParentChildFieldOptionValueList;
};

export type AmazonConnectFullApiSchemaSectionsList = ReadonlyArray<AmazonConnectFullApiSchemaSection>;

export type AmazonConnectFullApiSchemaSlaFieldValueUnionList = ReadonlyArray<AmazonConnectFullApiSchemaFieldValueUnion>;

export type AmazonConnectFullApiSchemaAuditEventFieldList = ReadonlyArray<AmazonConnectFullApiSchemaAuditEventField>;

export type AmazonConnectFullApiSchemaAuditEventPerformedBy = {
  user?: AmazonConnectFullApiSchemaUserUnion;
  iamPrincipalArn: string;
};

export type AmazonConnectFullApiSchemaChannelList2 = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaCustomFieldsFilter = {
  field: AmazonConnectFullApiSchemaFieldFilter;
} | {
  not: AmazonConnectFullApiSchemaCustomFieldsFilter;
} | {
  andAll: AmazonConnectFullApiSchemaCustomFieldsFilterList;
} | {
  orAll: AmazonConnectFullApiSchemaCustomFieldsFilterList;
};

export type AmazonConnectFullApiSchemaSlaConfiguration = {
  name: string;
  type: "CaseField";
  status: "Active" | "Overdue" | "Met" | "NotMet";
  fieldId?: string;
  targetFieldValues?: AmazonConnectFullApiSchemaSlaFieldValueUnionList;
  targetTime: string;
  completionTime?: string;
};

export type AmazonConnectFullApiSchemaProgressiveConfig = {
  bandwidthAllocation: number;
};

export type AmazonConnectFullApiSchemaPredictiveConfig = {
  bandwidthAllocation: number;
};

export type AmazonConnectFullApiSchemaAgentlessConfig = {};

export type AmazonConnectFullApiSchemaPreviewConfig = {
  bandwidthAllocation: number;
  timeoutConfig: AmazonConnectFullApiSchemaTimeoutConfig;
  agentActions?: AmazonConnectFullApiSchemaAgentActions;
};

export type AmazonConnectFullApiSchemaAnswerMachineDetectionConfig3 = {
  enableAnswerMachineDetection: boolean;
  awaitAnswerMachinePrompt?: boolean;
};

export type AmazonConnectFullApiSchemaDailyHours = {
  readonly [key: string]: AmazonConnectFullApiSchemaTimeRangeList | undefined;
};

export type AmazonConnectFullApiSchemaRestrictedPeriodList = ReadonlyArray<AmazonConnectFullApiSchemaRestrictedPeriod>;

export type AmazonConnectFullApiSchemaCommunicationLimit = {
  maxCountPerRecipient: number;
  frequency: number;
  unit: "DAY";
};

export type AmazonConnectFullApiSchemaChannelSubtypeList = ReadonlyArray<"TELEPHONY" | "SMS" | "EMAIL" | "WHATSAPP">;

export type AmazonConnectFullApiSchemaCustomerProfilesIntegrationSummary = {
  domainArn: string;
  objectTypeNames: AmazonConnectFullApiSchemaObjectTypeNamesMap;
};

export type AmazonConnectFullApiSchemaQConnectIntegrationSummary = {
  knowledgeBaseArn: string;
};

export type AmazonConnectFullApiSchemaLambdaIntegrationSummary = {
  functionArn: string;
};

export type AmazonConnectFullApiSchemaTelephonyChannelSubtypeParameters = {
  destinationPhoneNumber: string;
  attributes: AmazonConnectFullApiSchemaAttributes4;
  connectSourcePhoneNumber?: string;
  answerMachineDetectionConfig?: AmazonConnectFullApiSchemaAnswerMachineDetectionConfig3;
  ringTimeout?: number;
};

export type AmazonConnectFullApiSchemaSmsChannelSubtypeParameters = {
  destinationPhoneNumber: string;
  connectSourcePhoneNumberArn?: string;
  templateArn?: string;
  templateParameters: AmazonConnectFullApiSchemaAttributes4;
};

export type AmazonConnectFullApiSchemaEmailChannelSubtypeParameters = {
  destinationEmailAddress: string;
  connectSourceEmailAddress?: string;
  templateArn?: string;
  templateParameters: AmazonConnectFullApiSchemaAttributes4;
};

export type AmazonConnectFullApiSchemaWhatsAppChannelSubtypeParameters = {
  destinationPhoneNumber: string;
  connectSourcePhoneNumberArn?: string;
  templateArn?: string;
  templateParameters: AmazonConnectFullApiSchemaAttributes4;
};

export type AmazonConnectFullApiSchemaTranscript3 = {
  Id: string;
  ParticipantId: string;
  ParticipantRole: string;
  Content: string;
  BeginOffsetMillis: number;
  EndOffsetMillis: number;
  Sentiment?: AmazonConnectFullApiSchemaSentimentValue;
  IssuesDetected?: AmazonConnectFullApiSchemaIssuesDetected;
};

export type AmazonConnectFullApiSchemaCategories = {
  MatchedCategories: AmazonConnectFullApiSchemaMatchedCategories;
  MatchedDetails: AmazonConnectFullApiSchemaMatchedDetails;
};

export type AmazonConnectFullApiSchemaPostContactSummary = {
  Content?: string;
  Status: AmazonConnectFullApiSchemaPostContactSummaryStatus;
  FailureCode?: AmazonConnectFullApiSchemaPostContactSummaryFailureCode;
};

export type AmazonConnectFullApiSchemaMedicalScribeChannelDefinition = {
  channelId: number;
  participantRole: AmazonConnectFullApiSchemaMedicalScribeParticipantRole;
};

export type AmazonConnectFullApiSchemaClinicalNoteGenerationSettingsResponse = {
  noteTemplateSettings?: AmazonConnectFullApiSchemaNoteTemplateSettingsResponse;
};

export type AmazonConnectFullApiSchemaClinicalNoteGenerationResult = {
  noteResult?: AmazonConnectFullApiSchemaArtifactDetails;
  transcriptResult?: AmazonConnectFullApiSchemaArtifactDetails;
  afterVisitSummaryResult?: AmazonConnectFullApiSchemaArtifactDetails;
};

export type AmazonConnectFullApiSchemaClinicalNoteGenerationSettings = {
  noteTemplateSettings: AmazonConnectFullApiSchemaNoteTemplateSettings;
};

export type AmazonConnectFullApiSchemaMedicalScribeTranscriptSegment = {
  segmentId?: string;
  audioBeginOffset?: number;
  audioEndOffset?: number;
  isPartial?: boolean;
  channelId?: string;
  content?: string;
};

export type AmazonConnectFullApiSchemaFoundByList = ReadonlyArray<AmazonConnectFullApiSchemaFoundByKeyValue>;

export type AmazonConnectFullApiSchemaType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaFilterDimensionList = ReadonlyArray<AmazonConnectFullApiSchemaFilterDimension>;

export type AmazonConnectFullApiSchemaMatchingRuleAttributeList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaEventTriggerDimension = {
  ObjectAttributes: AmazonConnectFullApiSchemaObjectAttributes;
};

export type AmazonConnectFullApiSchemaPeriodUnit = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaBatch = {
  StartTime: string;
  EndTime: string;
};

export type AmazonConnectFullApiSchemaContactType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEventParameters = {
  EventType: string;
  EventValueThreshold?: number;
  EventWeight?: number;
};

export type AmazonConnectFullApiSchemaDimensionList = ReadonlyArray<AmazonConnectFullApiSchemaDimension>;

export type AmazonConnectFullApiSchemaSourceSegmentList = ReadonlyArray<AmazonConnectFullApiSchemaSourceSegment>;

export type AmazonConnectFullApiSchemaSegmentSortDataType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaSegmentSortOrder = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaSortAttributeType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCatalogItem = {
  Id?: string;
  Name?: string;
  Code?: string;
  Type?: string;
  Category?: string;
  Description?: string;
  AdditionalInformation?: string;
  ImageLink?: string;
  Link?: string;
  CreatedAt?: string;
  UpdatedAt?: string;
  Price?: string;
  Attributes?: AmazonConnectFullApiSchemaAttributes2;
};

export type AmazonConnectFullApiSchemaMetrics = {
  readonly [key: string]: number | undefined;
};

export type AmazonConnectFullApiSchemaQueryResult = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaAppflowIntegrationWorkflowStep = {
  FlowName: string;
  Status: AmazonConnectFullApiSchemaStatus;
  ExecutionMessage: string;
  RecordsProcessed: number;
  BatchRecordsStartTime: string;
  BatchRecordsEndTime: string;
  CreatedAt: string;
  LastUpdatedAt: string;
};

export type AmazonConnectFullApiSchemaDestinationSummary = {
  Uri: string;
  Status: AmazonConnectFullApiSchemaEventStreamDestinationStatus;
  UnhealthySince?: string;
};

export type AmazonConnectFullApiSchemaMarketoSourceProperties = {
  Object: string;
};

export type AmazonConnectFullApiSchemaS3SourceProperties = {
  BucketName: string;
  BucketPrefix?: string;
};

export type AmazonConnectFullApiSchemaSalesforceSourceProperties = {
  Object: string;
  EnableDynamicFieldUpdate?: boolean;
  IncludeDeletedRecords?: boolean;
};

export type AmazonConnectFullApiSchemaServiceNowSourceProperties = {
  Object: string;
};

export type AmazonConnectFullApiSchemaZendeskSourceProperties = {
  Object: string;
};

export type AmazonConnectFullApiSchemaConnectorOperator = {
  Marketo?: AmazonConnectFullApiSchemaMarketoConnectorOperator;
  S3?: AmazonConnectFullApiSchemaS3ConnectorOperator;
  Salesforce?: AmazonConnectFullApiSchemaSalesforceConnectorOperator;
  ServiceNow?: AmazonConnectFullApiSchemaServiceNowConnectorOperator;
  Zendesk?: AmazonConnectFullApiSchemaZendeskConnectorOperator;
};

export type AmazonConnectFullApiSchemaSourceFields = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaTaskPropertiesMap = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaTaskType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaScheduledTriggerProperties = {
  ScheduleExpression: string;
  DataPullMode?: AmazonConnectFullApiSchemaDataPullMode;
  ScheduleStartTime?: string;
  ScheduleEndTime?: string;
  Timezone?: string;
  ScheduleOffset?: number;
  FirstExecutionFrom?: string;
};

export type AmazonConnectFullApiSchemaStandardIdentifierList = ReadonlyArray<AmazonConnectFullApiSchemaStandardIdentifier>;

export type AmazonConnectFullApiSchemaFieldNameList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaAssociationConfiguration = {
  associationId?: string;
  associationType?: "KNOWLEDGE_BASE";
  associationConfigurationData?: AmazonConnectFullApiSchemaAssociationConfigurationData;
};

export type AmazonConnectFullApiSchemaToolConfiguration = {
  toolName: string;
  toolType: "MODEL_CONTEXT_PROTOCOL" | "RETURN_TO_CONTROL" | "CONSTANT";
  title?: string;
  toolId?: string;
  description?: string;
  instruction?: AmazonConnectFullApiSchemaToolInstruction;
  overrideInputValues?: AmazonConnectFullApiSchemaToolOverrideInputValueList;
  outputFilters?: AmazonConnectFullApiSchemaToolOutputFilterList;
  inputSchema?: AmazonConnectFullApiSchemaJsonValue;
  outputSchema?: AmazonConnectFullApiSchemaJsonValue;
  annotations?: AmazonConnectFullApiSchemaAnnotation;
  userInteractionConfiguration?: AmazonConnectFullApiSchemaUserInteractionConfiguration;
};

export type AmazonConnectFullApiSchemaGuardrailTopicExamples = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaKnowledgeBaseAssociationData = {
  knowledgeBaseId?: string;
  knowledgeBaseArn?: string;
};

export type AmazonConnectFullApiSchemaUrlConfiguration = {
  seedUrls?: AmazonConnectFullApiSchemaSeedUrls;
};

export type AmazonConnectFullApiSchemaWebCrawlerLimits = {
  rateLimit?: number;
};

export type AmazonConnectFullApiSchemaUrlFilterList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaHierarchicalChunkingLevelConfigurations = ReadonlyArray<AmazonConnectFullApiSchemaHierarchicalChunkingLevelConfiguration>;

export type AmazonConnectFullApiSchemaParsingPrompt = {
  parsingPromptText: string;
};

export type AmazonConnectFullApiSchemaMessageTemplateBodyContentProvider = {
  content: string;
};

export type AmazonConnectFullApiSchemaEmailHeader = {
  name?: string;
  value?: string;
};

export type AmazonConnectFullApiSchemaQuickResponseContentProvider = {
  content: string;
};

export type AmazonConnectFullApiSchemaDocument = {
  contentReference: AmazonConnectFullApiSchemaContentReference;
  title?: AmazonConnectFullApiSchemaDocumentText;
  excerpt?: AmazonConnectFullApiSchemaDocumentText;
};

export type AmazonConnectFullApiSchemaDataSummary = {
  reference: AmazonConnectFullApiSchemaDataReference;
  details: AmazonConnectFullApiSchemaDataDetails;
};

export type AmazonConnectFullApiSchemaRecommendationTriggerData = {
  query: AmazonConnectFullApiSchemaQueryRecommendationTriggerData;
};

export type AmazonConnectFullApiSchemaAIPromptTypeList = ReadonlyArray<"ANSWER_GENERATION" | "INTENT_LABELING_GENERATION" | "QUERY_REFORMULATION" | "SELF_SERVICE_PRE_PROCESSING" | "SELF_SERVICE_ANSWER_GENERATION" | "EMAIL_RESPONSE" | "EMAIL_OVERVIEW" | "EMAIL_GENERATIVE_ANSWER" | "EMAIL_QUERY_REFORMULATION" | "ORCHESTRATION" | "NOTE_TAKING" | "CASE_SUMMARIZATION">;

export type AmazonConnectFullApiSchemaSpanAttributes = {
  operationName?: string;
  providerName?: string;
  errorType?: string;
  agentId?: string;
  instanceArn?: string;
  contactId?: string;
  initialContactId?: string;
  sessionName?: string;
  aiAgentArn?: string;
  aiAgentType?: "MANUAL_SEARCH" | "ANSWER_RECOMMENDATION" | "SELF_SERVICE" | "EMAIL_RESPONSE" | "EMAIL_OVERVIEW" | "EMAIL_GENERATIVE_ANSWER" | "ORCHESTRATION" | "NOTE_TAKING" | "CASE_SUMMARIZATION";
  aiAgentName?: string;
  aiAgentId?: string;
  aiAgentVersion?: number;
  aiAgentInvoker?: string;
  aiAgentOrchestratorUseCase?: string;
  requestModel?: string;
  requestMaxTokens?: number;
  temperature?: number;
  topP?: number;
  responseModel?: string;
  responseFinishReasons?: AmazonConnectFullApiSchemaSpanFinishReasonList;
  usageInputTokens?: number;
  usageOutputTokens?: number;
  usageTotalTokens?: number;
  cacheReadInputTokens?: number;
  cacheWriteInputTokens?: number;
  inputMessages?: AmazonConnectFullApiSchemaSpanMessageList;
  outputMessages?: AmazonConnectFullApiSchemaSpanMessageList;
  systemInstructions?: AmazonConnectFullApiSchemaSpanMessageValueList;
  promptArn?: string;
  promptId?: string;
  promptType?: "ANSWER_GENERATION" | "INTENT_LABELING_GENERATION" | "QUERY_REFORMULATION" | "SELF_SERVICE_PRE_PROCESSING" | "SELF_SERVICE_ANSWER_GENERATION" | "EMAIL_RESPONSE" | "EMAIL_OVERVIEW" | "EMAIL_GENERATIVE_ANSWER" | "EMAIL_QUERY_REFORMULATION" | "ORCHESTRATION" | "NOTE_TAKING" | "CASE_SUMMARIZATION";
  promptName?: string;
  promptVersion?: number;
  timeToFirstTokenMs?: number;
  guardrailAssessments?: AmazonConnectFullApiSchemaSpanGuardrailAssessmentList;
};

export type AmazonConnectFullApiSchemaMessageTemplateQueryValueList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaMessageTemplateFilterValueList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaQuickResponseQueryValueList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaQuickResponseFilterValueList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaContactAttributeKeys = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaCitations = ReadonlyArray<AmazonConnectFullApiSchemaCitation>;

export type AmazonConnectFullApiSchemaAIGuardrailAssessment = {
  blocked: boolean;
};

export type AmazonConnectFullApiSchemaKnowledgeBaseAssociationData2 = {
  knowledgeBaseId?: string;
  knowledgeBaseArn?: string;
};

export type AmazonConnectFullApiSchemaQuickResponseContentProvider2 = {
  content: string;
};

export type AmazonConnectFullApiSchemaDocument2 = {
  contentReference: AmazonConnectFullApiSchemaContentReference2;
  title?: AmazonConnectFullApiSchemaDocumentText2;
  excerpt?: AmazonConnectFullApiSchemaDocumentText2;
};

export type AmazonConnectFullApiSchemaRecommendationTriggerData2 = {
  query: AmazonConnectFullApiSchemaQueryRecommendationTriggerData2;
};

export type AmazonConnectFullApiSchemaQuickResponseQueryValueList2 = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaQuickResponseFilterValueList2 = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaContactAttributeKeys2 = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaExecutionStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaPrimaryValueResponse = {
  AttributeName?: string;
  AttributeId?: string;
  Value?: string;
};

export type AmazonConnectFullApiSchemaEvaluationFormNumericQuestionProperties = {
  MinValue: number;
  MaxValue: number;
  Options?: AmazonConnectFullApiSchemaEvaluationFormNumericQuestionOptionList;
  Automation?: AmazonConnectFullApiSchemaEvaluationFormNumericQuestionAutomation;
};

export type AmazonConnectFullApiSchemaEvaluationFormSingleSelectQuestionProperties = {
  Options: AmazonConnectFullApiSchemaEvaluationFormSingleSelectQuestionOptionList;
  DisplayAs?: AmazonConnectFullApiSchemaEvaluationFormSingleSelectQuestionDisplayMode;
  Automation?: AmazonConnectFullApiSchemaEvaluationFormSingleSelectQuestionAutomation;
};

export type AmazonConnectFullApiSchemaEvaluationFormTextQuestionProperties = {
  Automation?: AmazonConnectFullApiSchemaEvaluationFormTextQuestionAutomation;
};

export type AmazonConnectFullApiSchemaEvaluationFormMultiSelectQuestionProperties = {
  Options: AmazonConnectFullApiSchemaEvaluationFormMultiSelectQuestionOptionList;
  DisplayAs?: AmazonConnectFullApiSchemaEvaluationFormMultiSelectQuestionDisplayMode;
  Automation?: AmazonConnectFullApiSchemaEvaluationFormMultiSelectQuestionAutomation;
};

export type AmazonConnectFullApiSchemaEvaluationFormItemEnablementCondition = {
  Operands: AmazonConnectFullApiSchemaEvaluationFormItemEnablementConditionOperandList;
  Operator?: AmazonConnectFullApiSchemaEvaluationFormItemEnablementOperator;
};

export type AmazonConnectFullApiSchemaEvaluationFormItemEnablementAction = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaUserTagMap = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaUserIdList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaFieldValue2 = {
  Id: string;
  Value: AmazonConnectFullApiSchemaFieldValueUnion2;
};

export type AmazonConnectFullApiSchemaSlaType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaSlaFieldValueUnionList2 = ReadonlyArray<AmazonConnectFullApiSchemaFieldValueUnion2>;

export type AmazonConnectFullApiSchemaPrimaryAttributeValue = {
  AccessType?: AmazonConnectFullApiSchemaAccessType;
  AttributeName?: string;
  Values?: AmazonConnectFullApiSchemaPrimaryValueList;
};

export type AmazonConnectFullApiSchemaWorkspaceFontFamily = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaAgentHierarchyGroup = {
  Arn?: string;
};

export type AmazonConnectFullApiSchemaStateTransition = {
  State?: AmazonConnectFullApiSchemaParticipantState;
  StateStartTimestamp?: string;
  StateEndTimestamp?: string;
};

export type AmazonConnectFullApiSchemaAiAgentInfo = {
  AiUseCase?: AmazonConnectFullApiSchemaAiUseCase;
  AiAgentVersionId?: string;
  AiAgentEscalated?: boolean;
};

export type AmazonConnectFullApiSchemaStep = {
  Expiry?: AmazonConnectFullApiSchemaExpiry;
  Expression?: AmazonConnectFullApiSchemaExpression;
  Status?: AmazonConnectFullApiSchemaRoutingCriteriaStepStatus;
};

export type AmazonConnectFullApiSchemaAudioQualityMetricsInfo = {
  QualityScore?: number;
  PotentialQualityIssues?: AmazonConnectFullApiSchemaPotentialAudioQualityIssues;
};

export type AmazonConnectFullApiSchemaParticipantType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEmailRecipient = {
  Address?: string;
  DisplayName?: string;
};

export type AmazonConnectFullApiSchemaMediaStreamType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaRecordingStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaStatus2 = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaNextContactType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaNextContactMetadata = {
  QuickConnectContactData: AmazonConnectFullApiSchemaQuickConnectContactData;
};

export type AmazonConnectFullApiSchemaEvaluationReviewRequestCommentList = ReadonlyArray<AmazonConnectFullApiSchemaEvaluationReviewRequestComment>;

export type AmazonConnectFullApiSchemaContactParticipantRole = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationSuggestedAnswersList = ReadonlyArray<AmazonConnectFullApiSchemaEvaluationSuggestedAnswer>;

export type AmazonConnectFullApiSchemaInstanceReplicationStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaQueueReference = {
  Id?: string;
  Arn?: string;
};

export type AmazonConnectFullApiSchemaAgentStatusIdentifier = {
  Arn?: string;
  Id?: string;
};

export type AmazonConnectFullApiSchemaCurrentMetricData = {
  Metric?: AmazonConnectFullApiSchemaCurrentMetric;
  Value?: number;
};

export type AmazonConnectFullApiSchemaHierarchyGroupSummaryReference = {
  Id?: string;
  Arn?: string;
};

export type AmazonConnectFullApiSchemaAgentContactReference = {
  ContactId?: string;
  Channel?: AmazonConnectFullApiSchemaChannel;
  InitiationMethod?: AmazonConnectFullApiSchemaContactInitiationMethod;
  AgentContactState?: AmazonConnectFullApiSchemaContactState;
  StateStartTimestamp?: string;
  ConnectedToAgentTimestamp?: string;
  Queue?: AmazonConnectFullApiSchemaQueueReference;
};

export type AmazonConnectFullApiSchemaOperationalHour = {
  Start?: AmazonConnectFullApiSchemaOverrideTimeSlice;
  End?: AmazonConnectFullApiSchemaOverrideTimeSlice;
};

export type AmazonConnectFullApiSchemaOverrideHour = {
  Start?: AmazonConnectFullApiSchemaOverrideTimeSlice;
  End?: AmazonConnectFullApiSchemaOverrideTimeSlice;
  OverrideName?: string;
  OperationalStatus?: AmazonConnectFullApiSchemaOperationalStatus;
};

export type AmazonConnectFullApiSchemaHistoricalMetricData = {
  Metric?: AmazonConnectFullApiSchemaHistoricalMetric;
  Value?: number;
};

export type AmazonConnectFullApiSchemaMetricFilterValueList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaMetricDataV2 = {
  Metric?: AmazonConnectFullApiSchemaMetricV2;
  Value?: number;
};

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisTimeData = {
  AbsoluteTime: string;
};

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisTranscriptItemRedaction = {
  CharacterOffsets?: AmazonConnectFullApiSchemaRealTimeContactAnalysisCharacterIntervals;
};

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisSentimentLabel = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisMatchedDetails = {
  readonly [key: string]: AmazonConnectFullApiSchemaRealTimeContactAnalysisCategoryDetails | undefined;
};

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisIssuesDetected = ReadonlyArray<AmazonConnectFullApiSchemaRealTimeContactAnalysisIssueDetected>;

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisAttachments = ReadonlyArray<AmazonConnectFullApiSchemaRealTimeContactAnalysisAttachment>;

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisPostContactSummaryStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisPostContactSummaryFailureCode = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaActionSummary = {
  ActionType: AmazonConnectFullApiSchemaActionType2;
};

export type AmazonConnectFullApiSchemaTranscriptCriteria = {
  ParticipantRole: AmazonConnectFullApiSchemaParticipantRole;
  SearchText: AmazonConnectFullApiSchemaSearchTextList;
  MatchType: AmazonConnectFullApiSchemaSearchContactsMatchType;
};

export type AmazonConnectFullApiSchemaSearchableAgentCriteriaStep = {
  AgentIds?: AmazonConnectFullApiSchemaAgentResourceIdList;
  MatchType?: AmazonConnectFullApiSchemaSearchContactsMatchType;
};

export type AmazonConnectFullApiSchemaSearchContactsTimestampCondition = {
  Type: AmazonConnectFullApiSchemaSearchContactsTimeRangeType;
  ConditionType: AmazonConnectFullApiSchemaSearchContactsTimeRangeConditionType;
};

export type AmazonConnectFullApiSchemaSearchableContactAttributeValueList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaSearchableSegmentAttributeValueList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaAiUseCase = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaContactSearchSummarySegmentAttributeValue = {
  ValueString?: string;
  ValueMap?: AmazonConnectFullApiSchemaSegmentAttributeValueMap;
};

export type AmazonConnectFullApiSchemaContactSearchSummaryAiAgentInfo = {
  AiAgentVersionId?: string;
  AiAgentEscalated?: boolean;
  AiUseCase?: AmazonConnectFullApiSchemaAiUseCase;
};

export type AmazonConnectFullApiSchemaPostAcceptTimeoutConfig = {
  DurationInSeconds: number;
};

export type AmazonConnectFullApiSchemaAllowedUserActions = ReadonlyArray<AmazonConnectFullApiSchemaAllowedUserAction>;

export type AmazonConnectFullApiSchemaAudioFeatures = {
  EchoReduction?: AmazonConnectFullApiSchemaMeetingFeatureStatus;
};

export type AmazonConnectFullApiSchemaAttributeCondition = {
  Name?: string;
  Value?: string;
  ProficiencyLevel?: number;
  Range?: AmazonConnectFullApiSchemaRange2;
  MatchCriteria?: AmazonConnectFullApiSchemaMatchCriteria;
  ComparisonOperator?: string;
};

export type AmazonConnectFullApiSchemaExpressions = ReadonlyArray<AmazonConnectFullApiSchemaExpression>;

export type AmazonConnectFullApiSchemaTimerEligibleParticipantRoles = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaParticipantTimerType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaParticipantTimerValue = {
  ParticipantTimerAction: AmazonConnectFullApiSchemaParticipantTimerAction;
} | {
  ParticipantTimerDurationInMinutes: number;
};

export type AmazonConnectFullApiSchemaAudioFeatures2 = {
  EchoReduction?: AmazonConnectFullApiSchemaMeetingFeatureStatus2;
};

export type AmazonConnectFullApiSchemaAttachmentItem = {
  ContentType?: string;
  AttachmentId?: string;
  AttachmentName?: string;
  Status?: AmazonConnectFullApiSchemaArtifactStatus;
};

export type AmazonConnectFullApiSchemaReceipts = ReadonlyArray<AmazonConnectFullApiSchemaReceipt>;

export type AmazonConnectFullApiSchemaBooleanOperands = {
  operandOne: AmazonConnectFullApiSchemaOperandOne;
  operandTwo: AmazonConnectFullApiSchemaOperandTwo;
  result: boolean;
};

export type AmazonConnectFullApiSchemaCompoundCondition = {
  conditions: AmazonConnectFullApiSchemaBooleanConditionList;
};

export type AmazonConnectFullApiSchemaParentChildFieldOptionValueList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaSection = {
  fieldGroup: AmazonConnectFullApiSchemaFieldGroup;
};

export type AmazonConnectFullApiSchemaAuditEventField = {
  eventFieldId: string;
  oldValue?: AmazonConnectFullApiSchemaAuditEventFieldValueUnion;
  newValue: AmazonConnectFullApiSchemaAuditEventFieldValueUnion;
};

export type AmazonConnectFullApiSchemaCustomFieldsFilterList = ReadonlyArray<AmazonConnectFullApiSchemaCustomFieldsFilter>;

export type AmazonConnectFullApiSchemaTimeoutConfig = {
  durationInSeconds: number;
};

export type AmazonConnectFullApiSchemaAgentActions = ReadonlyArray<"DISCARD">;

export type AmazonConnectFullApiSchemaTimeRangeList = ReadonlyArray<AmazonConnectFullApiSchemaTimeRange>;

export type AmazonConnectFullApiSchemaRestrictedPeriod = {
  name?: string;
  startDate: string;
  endDate: string;
};

export type AmazonConnectFullApiSchemaAttributes4 = {
  readonly [key: string]: string | undefined;
};

export type AmazonConnectFullApiSchemaSentimentValue = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaIssuesDetected = ReadonlyArray<AmazonConnectFullApiSchemaIssueDetected>;

export type AmazonConnectFullApiSchemaMatchedCategories = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaMatchedDetails = {
  readonly [key: string]: AmazonConnectFullApiSchemaCategoryDetails | undefined;
};

export type AmazonConnectFullApiSchemaPostContactSummaryStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaPostContactSummaryFailureCode = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaMedicalScribeParticipantRole = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaNoteTemplateSettingsResponse = {
  managedTemplate: AmazonConnectFullApiSchemaManagedTemplateResponse;
} | {
  customTemplate: AmazonConnectFullApiSchemaCustomTemplateResponse;
};

export type AmazonConnectFullApiSchemaArtifactDetails = {
  outputLocation?: string;
  status?: AmazonConnectFullApiSchemaPostStreamArtifactGenerationStatus;
  failureReason?: string;
};

export type AmazonConnectFullApiSchemaNoteTemplateSettings = {
  managedTemplate: AmazonConnectFullApiSchemaManagedTemplate;
} | {
  customTemplate: AmazonConnectFullApiSchemaCustomTemplate;
};

export type AmazonConnectFullApiSchemaFoundByKeyValue = {
  KeyName?: string;
  Values?: AmazonConnectFullApiSchemaRequestValueList;
};

export type AmazonConnectFullApiSchemaFilterDimension = {
  Attributes: AmazonConnectFullApiSchemaAttributeMap;
};

export type AmazonConnectFullApiSchemaObjectAttributes = ReadonlyArray<AmazonConnectFullApiSchemaObjectAttribute>;

export type AmazonConnectFullApiSchemaDimension = {
  ProfileAttributes: AmazonConnectFullApiSchemaProfileAttributes;
} | {
  CalculatedAttributes: AmazonConnectFullApiSchemaCalculatedCustomAttributes;
};

export type AmazonConnectFullApiSchemaSourceSegment = {
  SegmentDefinitionName?: string;
};

export type AmazonConnectFullApiSchemaMarketoConnectorOperator = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaS3ConnectorOperator = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaSalesforceConnectorOperator = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaServiceNowConnectorOperator = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaZendeskConnectorOperator = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaDataPullMode = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaStandardIdentifier = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaAssociationConfigurationData = {
  knowledgeBaseAssociationConfigurationData: AmazonConnectFullApiSchemaKnowledgeBaseAssociationConfigurationData;
};

export type AmazonConnectFullApiSchemaToolInstruction = {
  instruction?: string;
  examples?: AmazonConnectFullApiSchemaToolExampleList;
};

export type AmazonConnectFullApiSchemaToolOverrideInputValueList = ReadonlyArray<AmazonConnectFullApiSchemaToolOverrideInputValue>;

export type AmazonConnectFullApiSchemaToolOutputFilterList = ReadonlyArray<AmazonConnectFullApiSchemaToolOutputFilter>;

export type AmazonConnectFullApiSchemaAnnotation = {
  title?: string;
  destructiveHint?: boolean;
};

export type AmazonConnectFullApiSchemaUserInteractionConfiguration = {
  isUserConfirmationRequired?: boolean;
};

export type AmazonConnectFullApiSchemaSeedUrls = ReadonlyArray<AmazonConnectFullApiSchemaSeedUrl>;

export type AmazonConnectFullApiSchemaHierarchicalChunkingLevelConfiguration = {
  maxTokens: number;
};

export type AmazonConnectFullApiSchemaContentReference = {
  knowledgeBaseArn?: string;
  knowledgeBaseId?: string;
  contentArn?: string;
  contentId?: string;
  sourceURL?: string;
  referenceType?: "WEB_CRAWLER" | "KNOWLEDGE_BASE" | "BEDROCK_KB_S3" | "BEDROCK_KB_WEB" | "BEDROCK_KB_CONFLUENCE" | "BEDROCK_KB_SALESFORCE" | "BEDROCK_KB_SHAREPOINT" | "BEDROCK_KB_KENDRA" | "BEDROCK_KB_CUSTOM_DOCUMENT" | "BEDROCK_KB_SQL";
};

export type AmazonConnectFullApiSchemaDocumentText = {
  text?: string;
  highlights?: AmazonConnectFullApiSchemaHighlights;
};

export type AmazonConnectFullApiSchemaDataReference = {
  contentReference: AmazonConnectFullApiSchemaContentReference;
} | {
  generativeReference: AmazonConnectFullApiSchemaGenerativeReference;
} | {
  suggestedMessageReference: AmazonConnectFullApiSchemaSuggestedMessageReference;
};

export type AmazonConnectFullApiSchemaDataDetails = {
  contentData: AmazonConnectFullApiSchemaContentDataDetails;
} | {
  generativeData: AmazonConnectFullApiSchemaGenerativeDataDetails;
} | {
  intentDetectedData: AmazonConnectFullApiSchemaIntentDetectedDataDetails;
} | {
  sourceContentData: AmazonConnectFullApiSchemaSourceContentDataDetails;
} | {
  generativeChunkData: AmazonConnectFullApiSchemaGenerativeChunkDataDetails;
} | {
  emailResponseChunkData: AmazonConnectFullApiSchemaEmailResponseChunkDataDetails;
} | {
  emailOverviewChunkData: AmazonConnectFullApiSchemaEmailOverviewChunkDataDetails;
} | {
  emailGenerativeAnswerChunkData: AmazonConnectFullApiSchemaEmailGenerativeAnswerChunkDataDetails;
} | {
  caseSummarizationChunkData: AmazonConnectFullApiSchemaCaseSummarizationChunkDataDetails;
} | {
  suggestedMessageData: AmazonConnectFullApiSchemaSuggestedMessageDataDetails;
} | {
  notesData: AmazonConnectFullApiSchemaNotesDataDetails;
} | {
  notesChunkData: AmazonConnectFullApiSchemaNotesChunkDataDetails;
};

export type AmazonConnectFullApiSchemaQueryRecommendationTriggerData = {
  text?: string;
};

export type AmazonConnectFullApiSchemaSpanFinishReasonList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaSpanMessageList = ReadonlyArray<AmazonConnectFullApiSchemaSpanMessage>;

export type AmazonConnectFullApiSchemaSpanMessageValueList = ReadonlyArray<AmazonConnectFullApiSchemaSpanMessageValue>;

export type AmazonConnectFullApiSchemaSpanGuardrailAssessmentList = ReadonlyArray<AmazonConnectFullApiSchemaSpanGuardrailAssessment>;

export type AmazonConnectFullApiSchemaCitation = {
  contentId?: string;
  title?: string;
  knowledgeBaseId?: string;
  citationSpan: AmazonConnectFullApiSchemaCitationSpan;
  sourceURL?: string;
  referenceType: "WEB_CRAWLER" | "KNOWLEDGE_BASE" | "BEDROCK_KB_S3" | "BEDROCK_KB_WEB" | "BEDROCK_KB_CONFLUENCE" | "BEDROCK_KB_SALESFORCE" | "BEDROCK_KB_SHAREPOINT" | "BEDROCK_KB_KENDRA" | "BEDROCK_KB_CUSTOM_DOCUMENT" | "BEDROCK_KB_SQL";
};

export type AmazonConnectFullApiSchemaContentReference2 = {
  knowledgeBaseArn?: string;
  knowledgeBaseId?: string;
  contentArn?: string;
  contentId?: string;
};

export type AmazonConnectFullApiSchemaDocumentText2 = {
  text?: string;
  highlights?: AmazonConnectFullApiSchemaHighlights2;
};

export type AmazonConnectFullApiSchemaQueryRecommendationTriggerData2 = {
  text?: string;
};

export type AmazonConnectFullApiSchemaEvaluationFormNumericQuestionOptionList = ReadonlyArray<AmazonConnectFullApiSchemaEvaluationFormNumericQuestionOption>;

export type AmazonConnectFullApiSchemaEvaluationFormNumericQuestionAutomation = {
  PropertyValue: AmazonConnectFullApiSchemaNumericQuestionPropertyValueAutomation;
} | {
  AnswerSource: AmazonConnectFullApiSchemaEvaluationFormQuestionAutomationAnswerSource;
};

export type AmazonConnectFullApiSchemaEvaluationFormSingleSelectQuestionOptionList = ReadonlyArray<AmazonConnectFullApiSchemaEvaluationFormSingleSelectQuestionOption>;

export type AmazonConnectFullApiSchemaEvaluationFormSingleSelectQuestionDisplayMode = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationFormSingleSelectQuestionAutomation = {
  Options?: AmazonConnectFullApiSchemaEvaluationFormSingleSelectQuestionAutomationOptionList;
  DefaultOptionRefId?: string;
  AnswerSource?: AmazonConnectFullApiSchemaEvaluationFormQuestionAutomationAnswerSource;
};

export type AmazonConnectFullApiSchemaEvaluationFormTextQuestionAutomation = {
  AnswerSource?: AmazonConnectFullApiSchemaEvaluationFormQuestionAutomationAnswerSource;
};

export type AmazonConnectFullApiSchemaEvaluationFormMultiSelectQuestionOptionList = ReadonlyArray<AmazonConnectFullApiSchemaEvaluationFormMultiSelectQuestionOption>;

export type AmazonConnectFullApiSchemaEvaluationFormMultiSelectQuestionDisplayMode = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationFormMultiSelectQuestionAutomation = {
  Options?: AmazonConnectFullApiSchemaEvaluationFormMultiSelectQuestionAutomationOptionList;
  DefaultOptionRefIds?: AmazonConnectFullApiSchemaReferenceIdList;
  AnswerSource?: AmazonConnectFullApiSchemaEvaluationFormQuestionAutomationAnswerSource;
};

export type AmazonConnectFullApiSchemaEvaluationFormItemEnablementConditionOperandList = ReadonlyArray<AmazonConnectFullApiSchemaEvaluationFormItemEnablementConditionOperand>;

export type AmazonConnectFullApiSchemaEvaluationFormItemEnablementOperator = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaFieldValueUnion2 = {
  BooleanValue?: boolean;
  DoubleValue?: number;
  EmptyValue?: AmazonConnectFullApiSchemaEmptyFieldValue2;
  StringValue?: string;
};

export type AmazonConnectFullApiSchemaAccessType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaPrimaryValueList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaParticipantState = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaExpiry = {
  DurationInSeconds?: number;
  ExpiryTimestamp?: string;
};

export type AmazonConnectFullApiSchemaRoutingCriteriaStepStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaPotentialAudioQualityIssues = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaQuickConnectContactData = {
  ContactId?: string;
  InitiationTimestamp?: string;
  QuickConnectId?: string;
  QuickConnectName?: string;
  QuickConnectType?: AmazonConnectFullApiSchemaQuickConnectType;
};

export type AmazonConnectFullApiSchemaEvaluationReviewRequestComment = {
  Comment?: string;
  CreatedTime?: string;
  CreatedBy?: string;
};

export type AmazonConnectFullApiSchemaEvaluationSuggestedAnswer = {
  Value?: AmazonConnectFullApiSchemaEvaluationAnswerData;
  Status: AmazonConnectFullApiSchemaEvaluationSuggestedAnswerStatus;
  Input?: AmazonConnectFullApiSchemaEvaluationQuestionInputDetails;
  AnalysisType: AmazonConnectFullApiSchemaEvaluationQuestionAnswerAnalysisType;
  AnalysisDetails?: AmazonConnectFullApiSchemaEvaluationQuestionAnswerAnalysisDetails;
};

export type AmazonConnectFullApiSchemaOperationalStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisCharacterIntervals = ReadonlyArray<AmazonConnectFullApiSchemaRealTimeContactAnalysisCharacterInterval>;

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisCategoryDetails = {
  PointsOfInterest: AmazonConnectFullApiSchemaRealTimeContactAnalysisPointsOfInterest;
};

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisIssueDetected = {
  TranscriptItems: AmazonConnectFullApiSchemaRealTimeContactAnalysisTranscriptItemsWithContent;
};

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisAttachment = {
  AttachmentName: string;
  ContentType?: string;
  AttachmentId: string;
  Status?: AmazonConnectFullApiSchemaArtifactStatus2;
};

export type AmazonConnectFullApiSchemaSearchContactsTimeRangeConditionType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaAllowedUserAction = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaMeetingFeatureStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaRange2 = {
  MinProficiencyLevel?: number;
  MaxProficiencyLevel?: number;
};

export type AmazonConnectFullApiSchemaMatchCriteria = {
  AgentsCriteria?: AmazonConnectFullApiSchemaAgentsCriteria;
};

export type AmazonConnectFullApiSchemaParticipantTimerAction = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaMeetingFeatureStatus2 = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaArtifactStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaReceipt = {
  DeliveredTimestamp?: string;
  ReadTimestamp?: string;
  RecipientParticipantId?: string;
};

export type AmazonConnectFullApiSchemaOperandOne = {
  fieldId: string;
};

export type AmazonConnectFullApiSchemaOperandTwo = {
  stringValue: string;
} | {
  booleanValue: boolean;
} | {
  doubleValue: number;
} | {
  emptyValue: AmazonConnectFullApiSchemaEmptyOperandValue;
};

export type AmazonConnectFullApiSchemaFieldGroup = {
  name?: string;
  fields: AmazonConnectFullApiSchemaFieldList;
};

export type AmazonConnectFullApiSchemaAuditEventFieldValueUnion = {
  stringValue: string;
} | {
  doubleValue: number;
} | {
  booleanValue: boolean;
} | {
  emptyValue: AmazonConnectFullApiSchemaEmptyFieldValue;
} | {
  userArnValue: string;
};

export type AmazonConnectFullApiSchemaTimeRange = {
  startTime: string;
  endTime: string;
};

export type AmazonConnectFullApiSchemaIssueDetected = {
  CharacterOffsets: AmazonConnectFullApiSchemaCharacterOffsets;
};

export type AmazonConnectFullApiSchemaCategoryDetails = {
  PointsOfInterest: AmazonConnectFullApiSchemaPointsOfInterest;
};

export type AmazonConnectFullApiSchemaManagedTemplateResponse = {
  templateType?: AmazonConnectFullApiSchemaManagedNoteTemplate;
};

export type AmazonConnectFullApiSchemaCustomTemplateResponse = {
  templateType?: AmazonConnectFullApiSchemaCustomTemplateBase;
};

export type AmazonConnectFullApiSchemaPostStreamArtifactGenerationStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaManagedTemplate = {
  templateType: AmazonConnectFullApiSchemaManagedNoteTemplate;
};

export type AmazonConnectFullApiSchemaCustomTemplate = {
  templateType: AmazonConnectFullApiSchemaCustomTemplateBase;
  templateInstructions: AmazonConnectFullApiSchemaTemplateInstructions;
};

export type AmazonConnectFullApiSchemaAttributeMap = {
  readonly [key: string]: AmazonConnectFullApiSchemaFilterAttributeDimension | undefined;
};

export type AmazonConnectFullApiSchemaObjectAttribute = {
  Source?: string;
  FieldName?: string;
  ComparisonOperator: AmazonConnectFullApiSchemaComparisonOperator;
  Values: AmazonConnectFullApiSchemaEventTriggerValues;
};

export type AmazonConnectFullApiSchemaProfileAttributes = {
  AccountNumber?: AmazonConnectFullApiSchemaProfileDimension;
  AdditionalInformation?: AmazonConnectFullApiSchemaExtraLengthValueProfileDimension;
  FirstName?: AmazonConnectFullApiSchemaProfileDimension;
  LastName?: AmazonConnectFullApiSchemaProfileDimension;
  MiddleName?: AmazonConnectFullApiSchemaProfileDimension;
  GenderString?: AmazonConnectFullApiSchemaProfileDimension;
  PartyTypeString?: AmazonConnectFullApiSchemaProfileDimension;
  BirthDate?: AmazonConnectFullApiSchemaDateDimension;
  PhoneNumber?: AmazonConnectFullApiSchemaProfileDimension;
  BusinessName?: AmazonConnectFullApiSchemaProfileDimension;
  BusinessPhoneNumber?: AmazonConnectFullApiSchemaProfileDimension;
  HomePhoneNumber?: AmazonConnectFullApiSchemaProfileDimension;
  MobilePhoneNumber?: AmazonConnectFullApiSchemaProfileDimension;
  EmailAddress?: AmazonConnectFullApiSchemaProfileDimension;
  PersonalEmailAddress?: AmazonConnectFullApiSchemaProfileDimension;
  BusinessEmailAddress?: AmazonConnectFullApiSchemaProfileDimension;
  Address?: AmazonConnectFullApiSchemaAddressDimension;
  ShippingAddress?: AmazonConnectFullApiSchemaAddressDimension;
  MailingAddress?: AmazonConnectFullApiSchemaAddressDimension;
  BillingAddress?: AmazonConnectFullApiSchemaAddressDimension;
  Attributes?: AmazonConnectFullApiSchemaCustomAttributes2;
  ProfileType?: AmazonConnectFullApiSchemaProfileTypeDimension;
};

export type AmazonConnectFullApiSchemaCalculatedCustomAttributes = {
  readonly [key: string]: AmazonConnectFullApiSchemaCalculatedAttributeDimension | undefined;
};

export type AmazonConnectFullApiSchemaKnowledgeBaseAssociationConfigurationData = {
  contentTagFilter?: AmazonConnectFullApiSchemaTagFilter;
  maxResults?: number;
  overrideKnowledgeBaseSearchType?: "HYBRID" | "SEMANTIC";
};

export type AmazonConnectFullApiSchemaToolExampleList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaToolOverrideInputValue = {
  jsonPath: string;
  value: AmazonConnectFullApiSchemaToolOverrideInputValueConfiguration;
};

export type AmazonConnectFullApiSchemaToolOutputFilter = {
  jsonPath: string;
  outputConfiguration?: AmazonConnectFullApiSchemaToolOutputConfiguration;
};

export type AmazonConnectFullApiSchemaSeedUrl = {
  url?: string;
};

export type AmazonConnectFullApiSchemaHighlights = ReadonlyArray<AmazonConnectFullApiSchemaHighlight>;

export type AmazonConnectFullApiSchemaGenerativeReference = {
  modelId?: string;
  generationId?: string;
};

export type AmazonConnectFullApiSchemaSuggestedMessageReference = {
  aiAgentId: string;
  aiAgentArn: string;
};

export type AmazonConnectFullApiSchemaContentDataDetails = {
  textData: AmazonConnectFullApiSchemaTextData;
  rankingData: AmazonConnectFullApiSchemaRankingData;
};

export type AmazonConnectFullApiSchemaGenerativeDataDetails = {
  completion: string;
  references: AmazonConnectFullApiSchemaDataSummaryList;
  rankingData: AmazonConnectFullApiSchemaRankingData;
};

export type AmazonConnectFullApiSchemaIntentDetectedDataDetails = {
  intent: string;
  intentId: string;
  relevanceLevel?: "HIGH" | "MEDIUM" | "LOW";
};

export type AmazonConnectFullApiSchemaSourceContentDataDetails = {
  id: string;
  type: "KNOWLEDGE_CONTENT";
  textData: AmazonConnectFullApiSchemaTextData;
  rankingData: AmazonConnectFullApiSchemaRankingData;
  citationSpan?: AmazonConnectFullApiSchemaCitationSpan;
};

export type AmazonConnectFullApiSchemaGenerativeChunkDataDetails = {
  completion?: string;
  references?: AmazonConnectFullApiSchemaDataSummaryList;
  nextChunkToken?: string;
};

export type AmazonConnectFullApiSchemaEmailResponseChunkDataDetails = {
  completion?: string;
  nextChunkToken?: string;
};

export type AmazonConnectFullApiSchemaEmailOverviewChunkDataDetails = {
  completion?: string;
  nextChunkToken?: string;
};

export type AmazonConnectFullApiSchemaEmailGenerativeAnswerChunkDataDetails = {
  completion?: string;
  references?: AmazonConnectFullApiSchemaDataSummaryList;
  nextChunkToken?: string;
};

export type AmazonConnectFullApiSchemaCaseSummarizationChunkDataDetails = {
  completion?: string;
  nextChunkToken?: string;
};

export type AmazonConnectFullApiSchemaSuggestedMessageDataDetails = {
  messageText: string;
};

export type AmazonConnectFullApiSchemaNotesDataDetails = {
  completion?: string;
};

export type AmazonConnectFullApiSchemaNotesChunkDataDetails = {
  completion?: string;
  nextChunkToken?: string;
};

export type AmazonConnectFullApiSchemaSpanMessage = {
  messageId: string;
  participant: "CUSTOMER" | "AGENT" | "BOT";
  timestamp: string;
  values: AmazonConnectFullApiSchemaSpanMessageValueList;
};

export type AmazonConnectFullApiSchemaSpanMessageValue = {
  text: AmazonConnectFullApiSchemaSpanTextValue;
} | {
  toolUse: AmazonConnectFullApiSchemaSpanToolUseValue;
} | {
  toolResult: AmazonConnectFullApiSchemaSpanToolResultValue;
} | {
  reasoning: AmazonConnectFullApiSchemaSpanReasoningValue;
};

export type AmazonConnectFullApiSchemaSpanGuardrailAssessment = {
  guardrailId: string;
  guardrailName: string;
  source: "INPUT" | "OUTPUT";
  action: "NONE" | "BLOCKED" | "MASKED";
  policies?: AmazonConnectFullApiSchemaGuardrailPolicyResultList;
};

export type AmazonConnectFullApiSchemaCitationSpan = {
  beginOffsetInclusive?: number;
  endOffsetExclusive?: number;
};

export type AmazonConnectFullApiSchemaHighlights2 = ReadonlyArray<AmazonConnectFullApiSchemaHighlight2>;

export type AmazonConnectFullApiSchemaEvaluationFormNumericQuestionOption = {
  MinValue: number;
  MaxValue: number;
  Score?: number;
  AutomaticFail?: boolean;
  AutomaticFailConfiguration?: AmazonConnectFullApiSchemaAutomaticFailConfiguration;
};

export type AmazonConnectFullApiSchemaNumericQuestionPropertyValueAutomation = {
  Label: AmazonConnectFullApiSchemaNumericQuestionPropertyAutomationLabel;
};

export type AmazonConnectFullApiSchemaEvaluationFormQuestionAutomationAnswerSource = {
  SourceType: AmazonConnectFullApiSchemaEvaluationFormQuestionAutomationAnswerSourceType;
};

export type AmazonConnectFullApiSchemaEvaluationFormSingleSelectQuestionOption = {
  RefId: string;
  Text: string;
  Score?: number;
  AutomaticFail?: boolean;
  AutomaticFailConfiguration?: AmazonConnectFullApiSchemaAutomaticFailConfiguration;
};

export type AmazonConnectFullApiSchemaEvaluationFormSingleSelectQuestionAutomationOptionList = ReadonlyArray<AmazonConnectFullApiSchemaEvaluationFormSingleSelectQuestionAutomationOption>;

export type AmazonConnectFullApiSchemaEvaluationFormMultiSelectQuestionOption = {
  RefId: string;
  Text: string;
};

export type AmazonConnectFullApiSchemaEvaluationFormMultiSelectQuestionAutomationOptionList = ReadonlyArray<AmazonConnectFullApiSchemaEvaluationFormMultiSelectQuestionAutomationOption>;

export type AmazonConnectFullApiSchemaReferenceIdList = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaEvaluationFormItemEnablementConditionOperand = {
  Expression: AmazonConnectFullApiSchemaEvaluationFormItemEnablementExpression;
} | {
  Condition: AmazonConnectFullApiSchemaEvaluationFormItemEnablementCondition;
};

export type AmazonConnectFullApiSchemaEmptyFieldValue2 = {};

export type AmazonConnectFullApiSchemaEvaluationSuggestedAnswerStatus = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationQuestionInputDetails = {
  TranscriptType?: AmazonConnectFullApiSchemaEvaluationTranscriptType;
};

export type AmazonConnectFullApiSchemaEvaluationQuestionAnswerAnalysisType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationQuestionAnswerAnalysisDetails = {
  GenAI: AmazonConnectFullApiSchemaEvaluationGenAIAnswerAnalysisDetails;
} | {
  ContactLens: AmazonConnectFullApiSchemaEvaluationContactLensAnswerAnalysisDetails;
};

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisCharacterInterval = {
  BeginOffsetChar: number;
  EndOffsetChar: number;
};

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisPointsOfInterest = ReadonlyArray<AmazonConnectFullApiSchemaRealTimeContactAnalysisPointOfInterest>;

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisTranscriptItemsWithContent = ReadonlyArray<AmazonConnectFullApiSchemaRealTimeContactAnalysisTranscriptItemWithContent>;

export type AmazonConnectFullApiSchemaArtifactStatus2 = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaAgentsCriteria = {
  AgentIds?: AmazonConnectFullApiSchemaAgentIds;
};

export type AmazonConnectFullApiSchemaEmptyOperandValue = {};

export type AmazonConnectFullApiSchemaFieldList = ReadonlyArray<AmazonConnectFullApiSchemaFieldItem>;

export type AmazonConnectFullApiSchemaCharacterOffsets = {
  BeginOffsetChar: number;
  EndOffsetChar: number;
};

export type AmazonConnectFullApiSchemaPointsOfInterest = ReadonlyArray<AmazonConnectFullApiSchemaPointOfInterest>;

export type AmazonConnectFullApiSchemaManagedNoteTemplate = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaCustomTemplateBase = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaTemplateInstructions = ReadonlyArray<AmazonConnectFullApiSchemaTemplateSectionInstruction>;

export type AmazonConnectFullApiSchemaFilterAttributeDimension = {
  DimensionType: AmazonConnectFullApiSchemaFilterDimensionType;
  Values: AmazonConnectFullApiSchemaValueList2;
};

export type AmazonConnectFullApiSchemaComparisonOperator = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEventTriggerValues = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaProfileDimension = {
  DimensionType: AmazonConnectFullApiSchemaStringDimensionType;
  Values: AmazonConnectFullApiSchemaValues;
};

export type AmazonConnectFullApiSchemaExtraLengthValueProfileDimension = {
  DimensionType: AmazonConnectFullApiSchemaStringDimensionType;
  Values: AmazonConnectFullApiSchemaExtraLengthValues;
};

export type AmazonConnectFullApiSchemaDateDimension = {
  DimensionType: AmazonConnectFullApiSchemaDateDimensionType;
  Values: AmazonConnectFullApiSchemaDateValues;
};

export type AmazonConnectFullApiSchemaAddressDimension = {
  City?: AmazonConnectFullApiSchemaProfileDimension;
  Country?: AmazonConnectFullApiSchemaProfileDimension;
  County?: AmazonConnectFullApiSchemaProfileDimension;
  PostalCode?: AmazonConnectFullApiSchemaProfileDimension;
  Province?: AmazonConnectFullApiSchemaProfileDimension;
  State?: AmazonConnectFullApiSchemaProfileDimension;
};

export type AmazonConnectFullApiSchemaCustomAttributes2 = {
  readonly [key: string]: AmazonConnectFullApiSchemaAttributeDimension | undefined;
};

export type AmazonConnectFullApiSchemaProfileTypeDimension = {
  DimensionType: AmazonConnectFullApiSchemaProfileTypeDimensionType;
  Values: AmazonConnectFullApiSchemaProfileTypeValues;
};

export type AmazonConnectFullApiSchemaCalculatedAttributeDimension = {
  DimensionType: AmazonConnectFullApiSchemaAttributeDimensionType;
  Values: AmazonConnectFullApiSchemaValues;
  ConditionOverrides?: AmazonConnectFullApiSchemaConditionOverrides;
};

export type AmazonConnectFullApiSchemaToolOverrideInputValueConfiguration = {
  constant: AmazonConnectFullApiSchemaToolOverrideConstantInputValue;
};

export type AmazonConnectFullApiSchemaToolOutputConfiguration = {
  outputVariableNameOverride?: string;
  sessionDataNamespace?: string;
};

export type AmazonConnectFullApiSchemaHighlight = {
  beginOffsetInclusive?: number;
  endOffsetExclusive?: number;
};

export type AmazonConnectFullApiSchemaTextData = {
  title?: AmazonConnectFullApiSchemaDocumentText;
  excerpt?: AmazonConnectFullApiSchemaDocumentText;
};

export type AmazonConnectFullApiSchemaRankingData = {
  relevanceScore?: number;
  relevanceLevel?: "HIGH" | "MEDIUM" | "LOW";
};

export type AmazonConnectFullApiSchemaDataSummaryList = ReadonlyArray<AmazonConnectFullApiSchemaDataSummary>;

export type AmazonConnectFullApiSchemaSpanTextValue = {
  value: string;
  citations?: AmazonConnectFullApiSchemaSpanCitationList;
  aiGuardrailAssessment?: AmazonConnectFullApiSchemaAIGuardrailAssessment;
};

export type AmazonConnectFullApiSchemaSpanToolUseValue = {
  toolUseId: string;
  name: string;
  arguments: AmazonConnectFullApiSchemaJsonValue;
};

export type AmazonConnectFullApiSchemaSpanToolResultValue = {
  toolUseId: string;
  values: AmazonConnectFullApiSchemaSpanMessageValueList;
  error?: string;
};

export type AmazonConnectFullApiSchemaSpanReasoningValue = {
  value: string;
};

export type AmazonConnectFullApiSchemaGuardrailPolicyResultList = ReadonlyArray<AmazonConnectFullApiSchemaGuardrailPolicyResult>;

export type AmazonConnectFullApiSchemaHighlight2 = {
  beginOffsetInclusive?: number;
  endOffsetExclusive?: number;
};

export type AmazonConnectFullApiSchemaAutomaticFailConfiguration = {
  TargetSection?: string;
};

export type AmazonConnectFullApiSchemaNumericQuestionPropertyAutomationLabel = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationFormQuestionAutomationAnswerSourceType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationFormSingleSelectQuestionAutomationOption = {
  RuleCategory: AmazonConnectFullApiSchemaSingleSelectQuestionRuleCategoryAutomation;
};

export type AmazonConnectFullApiSchemaEvaluationFormMultiSelectQuestionAutomationOption = {
  RuleCategory: AmazonConnectFullApiSchemaMultiSelectQuestionRuleCategoryAutomation;
};

export type AmazonConnectFullApiSchemaEvaluationFormItemEnablementExpression = {
  Source: AmazonConnectFullApiSchemaEvaluationFormItemEnablementSource;
  Values: AmazonConnectFullApiSchemaEvaluationFormItemEnablementSourceValueList;
  Comparator: AmazonConnectFullApiSchemaEvaluationFormItemSourceValuesComparator;
};

export type AmazonConnectFullApiSchemaEvaluationTranscriptType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationGenAIAnswerAnalysisDetails = {
  Justification?: string;
  PointsOfInterest?: AmazonConnectFullApiSchemaEvaluationTranscriptPointsOfInterest;
};

export type AmazonConnectFullApiSchemaEvaluationContactLensAnswerAnalysisDetails = {
  MatchedRuleCategories?: AmazonConnectFullApiSchemaEvaluationAutomationRuleCategoryList;
};

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisPointOfInterest = {
  TranscriptItems?: AmazonConnectFullApiSchemaRealTimeContactAnalysisTranscriptItemsWithCharacterOffsets;
};

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisTranscriptItemWithContent = {
  Content?: string;
  Id: string;
  CharacterOffsets?: AmazonConnectFullApiSchemaRealTimeContactAnalysisCharacterInterval;
};

export type AmazonConnectFullApiSchemaAgentIds = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaFieldItem = {
  id: string;
};

export type AmazonConnectFullApiSchemaPointOfInterest = {
  BeginOffsetMillis: number;
  EndOffsetMillis: number;
};

export type AmazonConnectFullApiSchemaTemplateSectionInstruction = {
  sectionHeader: string;
  sectionInstruction: string;
};

export type AmazonConnectFullApiSchemaFilterDimensionType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaValueList2 = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaStringDimensionType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaValues = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaExtraLengthValues = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaDateDimensionType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaDateValues = ReadonlyArray<string>;

export type AmazonConnectFullApiSchemaAttributeDimension = {
  DimensionType: AmazonConnectFullApiSchemaAttributeDimensionType;
  Values: AmazonConnectFullApiSchemaValues;
};

export type AmazonConnectFullApiSchemaProfileTypeDimensionType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaProfileTypeValues = ReadonlyArray<AmazonConnectFullApiSchemaProfileType>;

export type AmazonConnectFullApiSchemaAttributeDimensionType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaToolOverrideConstantInputValue = {
  type: "STRING" | "NUMBER" | "JSON_STRING";
  value: string;
};

export type AmazonConnectFullApiSchemaSpanCitationList = ReadonlyArray<AmazonConnectFullApiSchemaSpanCitation>;

export type AmazonConnectFullApiSchemaGuardrailPolicyResult = {
  policyType: "CONTENT_FILTER" | "TOPIC" | "WORD" | "SENSITIVE_INFORMATION_PII" | "SENSITIVE_INFORMATION_REGEX" | "CONTEXTUAL_GROUNDING";
  action: "NONE" | "BLOCKED" | "MASKED";
  details?: string;
};

export type AmazonConnectFullApiSchemaSingleSelectQuestionRuleCategoryAutomation = {
  Category: string;
  Condition: AmazonConnectFullApiSchemaSingleSelectQuestionRuleCategoryAutomationCondition;
  OptionRefId: string;
};

export type AmazonConnectFullApiSchemaMultiSelectQuestionRuleCategoryAutomation = {
  Category: string;
  Condition: AmazonConnectFullApiSchemaMultiSelectQuestionRuleCategoryAutomationCondition;
  OptionRefIds: AmazonConnectFullApiSchemaReferenceIdList;
};

export type AmazonConnectFullApiSchemaEvaluationFormItemEnablementSource = {
  Type: AmazonConnectFullApiSchemaEvaluationFormItemEnablementSourceType;
  RefId?: string;
};

export type AmazonConnectFullApiSchemaEvaluationFormItemEnablementSourceValueList = ReadonlyArray<AmazonConnectFullApiSchemaEvaluationFormItemEnablementSourceValue>;

export type AmazonConnectFullApiSchemaEvaluationFormItemSourceValuesComparator = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationTranscriptPointsOfInterest = ReadonlyArray<AmazonConnectFullApiSchemaEvaluationTranscriptPointOfInterest>;

export type AmazonConnectFullApiSchemaEvaluationAutomationRuleCategoryList = ReadonlyArray<AmazonConnectFullApiSchemaEvaluationAutomationRuleCategory>;

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisTranscriptItemsWithCharacterOffsets = ReadonlyArray<AmazonConnectFullApiSchemaRealTimeContactAnalysisTranscriptItemWithCharacterOffsets>;

export type AmazonConnectFullApiSchemaSpanCitation = {
  contentId?: string;
  title?: string;
  knowledgeBaseId?: string;
  knowledgeBaseArn?: string;
};

export type AmazonConnectFullApiSchemaSingleSelectQuestionRuleCategoryAutomationCondition = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaMultiSelectQuestionRuleCategoryAutomationCondition = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationFormItemEnablementSourceType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationFormItemEnablementSourceValue = {
  Type: AmazonConnectFullApiSchemaEvaluationFormItemEnablementSourceValueType;
  RefId?: string;
};

export type AmazonConnectFullApiSchemaEvaluationTranscriptPointOfInterest = {
  MillisecondOffsets?: AmazonConnectFullApiSchemaEvaluationSuggestedAnswerTranscriptMillisecondOffsets;
  TranscriptSegment?: string;
};

export type AmazonConnectFullApiSchemaEvaluationAutomationRuleCategory = {
  Category: string;
  Condition: AmazonConnectFullApiSchemaQuestionRuleCategoryAutomationCondition;
  PointsOfInterest?: AmazonConnectFullApiSchemaEvaluationTranscriptPointsOfInterest;
};

export type AmazonConnectFullApiSchemaRealTimeContactAnalysisTranscriptItemWithCharacterOffsets = {
  Id: string;
  CharacterOffsets?: AmazonConnectFullApiSchemaRealTimeContactAnalysisCharacterInterval;
};

export type AmazonConnectFullApiSchemaEvaluationFormItemEnablementSourceValueType = AmazonConnectFullApiSchemaJsonValue;

export type AmazonConnectFullApiSchemaEvaluationSuggestedAnswerTranscriptMillisecondOffsets = {
  BeginOffsetMillis: number;
};

export type AmazonConnectFullApiSchemaQuestionRuleCategoryAutomationCondition = AmazonConnectFullApiSchemaJsonValue;

export interface AmazonConnectFullApiOperationQueryMap {
  "appintegrations:CreateApplication": {};
  "appintegrations:CreateDataIntegration": {};
  "appintegrations:CreateDataIntegrationAssociation": {};
  "appintegrations:CreateEventIntegration": {};
  "appintegrations:DeleteApplication": {};
  "appintegrations:DeleteDataIntegration": {};
  "appintegrations:DeleteEventIntegration": {};
  "appintegrations:GetApplication": {};
  "appintegrations:GetDataIntegration": {};
  "appintegrations:GetEventIntegration": {};
  "appintegrations:ListApplicationAssociations": {
  NextToken?: string;
  MaxResults?: number;
};
  "appintegrations:ListApplications": {
  NextToken?: string;
  MaxResults?: number;
  ApplicationType?: AmazonConnectFullApiSchemaApplicationType;
};
  "appintegrations:ListDataIntegrationAssociations": {
  NextToken?: string;
  MaxResults?: number;
};
  "appintegrations:ListDataIntegrations": {
  NextToken?: string;
  MaxResults?: number;
};
  "appintegrations:ListEventIntegrationAssociations": {
  NextToken?: string;
  MaxResults?: number;
};
  "appintegrations:ListEventIntegrations": {
  NextToken?: string;
  MaxResults?: number;
};
  "appintegrations:ListTagsForResource": {};
  "appintegrations:TagResource": {};
  "appintegrations:UntagResource": {
  tagKeys: AmazonConnectFullApiSchemaTagKeyList;
};
  "appintegrations:UpdateApplication": {};
  "appintegrations:UpdateDataIntegration": {};
  "appintegrations:UpdateDataIntegrationAssociation": {};
  "appintegrations:UpdateEventIntegration": {};
  "connect:ActivateEvaluationForm": {};
  "connect:AssociateAnalyticsDataSet": {};
  "connect:AssociateApprovedOrigin": {};
  "connect:AssociateBot": {};
  "connect:AssociateContactWithUser": {};
  "connect:AssociateDefaultVocabulary": {};
  "connect:AssociateEmailAddressAlias": {};
  "connect:AssociateFlow": {};
  "connect:AssociateHoursOfOperations": {};
  "connect:AssociateInstanceStorageConfig": {};
  "connect:AssociateLambdaFunction": {};
  "connect:AssociateLexBot": {};
  "connect:AssociatePhoneNumberContactFlow": {};
  "connect:AssociateQueueEmailAddresses": {};
  "connect:AssociateQueueQuickConnects": {};
  "connect:AssociateRoutingProfileQueues": {};
  "connect:AssociateSecurityKey": {};
  "connect:AssociateSecurityProfiles": {};
  "connect:AssociateTrafficDistributionGroupUser": {};
  "connect:AssociateUserProficiencies": {};
  "connect:AssociateWorkspace": {};
  "connect:BatchAssociateAnalyticsDataSet": {};
  "connect:BatchCreateDataTableValue": {};
  "connect:BatchDeleteDataTableValue": {};
  "connect:BatchDescribeDataTableValue": {};
  "connect:BatchDisassociateAnalyticsDataSet": {};
  "connect:BatchGetAttachedFileMetadata": {
  AssociatedResourceArn: string;
};
  "connect:BatchGetFlowAssociation": {};
  "connect:BatchPutContact": {};
  "connect:BatchUpdateDataTableValue": {};
  "connect:ClaimPhoneNumber": {};
  "connect:CompleteAttachedFileUpload": {
  AssociatedResourceArn: string;
};
  "connect:CreateAgentStatus": {};
  "connect:CreateContact": {};
  "connect:CreateContactFlow": {};
  "connect:CreateContactFlowModule": {};
  "connect:CreateContactFlowModuleAlias": {};
  "connect:CreateContactFlowModuleVersion": {};
  "connect:CreateContactFlowVersion": {};
  "connect:CreateDataTable": {};
  "connect:CreateDataTableAttribute": {};
  "connect:CreateEmailAddress": {};
  "connect:CreateEvaluationForm": {};
  "connect:CreateHoursOfOperation": {};
  "connect:CreateHoursOfOperationOverride": {};
  "connect:CreateInstance": {};
  "connect:CreateIntegrationAssociation": {};
  "connect:CreateNotification": {};
  "connect:CreateParticipant": {};
  "connect:CreatePersistentContactAssociation": {};
  "connect:CreatePredefinedAttribute": {};
  "connect:CreatePrompt": {};
  "connect:CreatePushNotificationRegistration": {};
  "connect:CreateQueue": {};
  "connect:CreateQuickConnect": {};
  "connect:CreateRoutingProfile": {};
  "connect:CreateRule": {};
  "connect:CreateSecurityProfile": {};
  "connect:CreateTaskTemplate": {};
  "connect:CreateTestCase": {};
  "connect:CreateTrafficDistributionGroup": {};
  "connect:CreateUseCase": {};
  "connect:CreateUser": {};
  "connect:CreateUserHierarchyGroup": {};
  "connect:CreateView": {};
  "connect:CreateViewVersion": {};
  "connect:CreateVocabulary": {};
  "connect:CreateWorkspace": {};
  "connect:CreateWorkspacePage": {};
  "connect:DeactivateEvaluationForm": {};
  "connect:DeleteAttachedFile": {
  AssociatedResourceArn: string;
};
  "connect:DeleteContactEvaluation": {};
  "connect:DeleteContactFlow": {};
  "connect:DeleteContactFlowModule": {};
  "connect:DeleteContactFlowModuleAlias": {};
  "connect:DeleteContactFlowModuleVersion": {};
  "connect:DeleteContactFlowVersion": {};
  "connect:DeleteDataTable": {};
  "connect:DeleteDataTableAttribute": {};
  "connect:DeleteEmailAddress": {};
  "connect:DeleteEvaluationForm": {
  EvaluationFormVersion?: number;
};
  "connect:DeleteHoursOfOperation": {};
  "connect:DeleteHoursOfOperationOverride": {};
  "connect:DeleteInstance": {
  ClientToken?: string;
};
  "connect:DeleteIntegrationAssociation": {};
  "connect:DeleteNotification": {};
  "connect:DeletePredefinedAttribute": {};
  "connect:DeletePrompt": {};
  "connect:DeletePushNotificationRegistration": {
  ContactId: string;
};
  "connect:DeleteQueue": {};
  "connect:DeleteQuickConnect": {};
  "connect:DeleteRoutingProfile": {};
  "connect:DeleteRule": {};
  "connect:DeleteSecurityProfile": {};
  "connect:DeleteTaskTemplate": {};
  "connect:DeleteTestCase": {};
  "connect:DeleteTrafficDistributionGroup": {};
  "connect:DeleteUseCase": {};
  "connect:DeleteUser": {};
  "connect:DeleteUserHierarchyGroup": {};
  "connect:DeleteView": {};
  "connect:DeleteViewVersion": {};
  "connect:DeleteVocabulary": {};
  "connect:DeleteWorkspace": {};
  "connect:DeleteWorkspaceMedia": {
  MediaType: AmazonConnectFullApiSchemaMediaType;
};
  "connect:DeleteWorkspacePage": {};
  "connect:DescribeAgentStatus": {};
  "connect:DescribeAttachedFilesConfiguration": {};
  "connect:DescribeAuthenticationProfile": {};
  "connect:DescribeContact": {};
  "connect:DescribeContactEvaluation": {};
  "connect:DescribeContactFlow": {};
  "connect:DescribeContactFlowModule": {};
  "connect:DescribeContactFlowModuleAlias": {};
  "connect:DescribeDataTable": {};
  "connect:DescribeDataTableAttribute": {};
  "connect:DescribeEmailAddress": {};
  "connect:DescribeEvaluationForm": {
  EvaluationFormVersion?: number;
};
  "connect:DescribeHoursOfOperation": {};
  "connect:DescribeHoursOfOperationOverride": {};
  "connect:DescribeInstance": {};
  "connect:DescribeInstanceAttribute": {};
  "connect:DescribeInstanceStorageConfig": {
  ResourceType: AmazonConnectFullApiSchemaInstanceStorageResourceType;
};
  "connect:DescribeNotification": {};
  "connect:DescribePhoneNumber": {};
  "connect:DescribePredefinedAttribute": {};
  "connect:DescribePrompt": {};
  "connect:DescribeQueue": {};
  "connect:DescribeQuickConnect": {};
  "connect:DescribeRoutingProfile": {};
  "connect:DescribeRule": {};
  "connect:DescribeSecurityProfile": {};
  "connect:DescribeTestCase": {
  Status?: AmazonConnectFullApiSchemaTestCaseStatus;
};
  "connect:DescribeTrafficDistributionGroup": {};
  "connect:DescribeUser": {};
  "connect:DescribeUserHierarchyGroup": {};
  "connect:DescribeUserHierarchyStructure": {};
  "connect:DescribeView": {};
  "connect:DescribeVocabulary": {};
  "connect:DescribeWorkspace": {};
  "connect:DisassociateAnalyticsDataSet": {};
  "connect:DisassociateApprovedOrigin": {
  Origin: string;
  ClientToken?: string;
};
  "connect:DisassociateBot": {};
  "connect:DisassociateEmailAddressAlias": {};
  "connect:DisassociateFlow": {};
  "connect:DisassociateHoursOfOperations": {};
  "connect:DisassociateInstanceStorageConfig": {
  ResourceType: AmazonConnectFullApiSchemaInstanceStorageResourceType;
  ClientToken?: string;
};
  "connect:DisassociateLambdaFunction": {
  FunctionArn: string;
  ClientToken?: string;
};
  "connect:DisassociateLexBot": {
  BotName: string;
  LexRegion: string;
  ClientToken?: string;
};
  "connect:DisassociatePhoneNumberContactFlow": {
  InstanceId: string;
};
  "connect:DisassociateQueueEmailAddresses": {};
  "connect:DisassociateQueueQuickConnects": {};
  "connect:DisassociateRoutingProfileQueues": {};
  "connect:DisassociateSecurityKey": {
  ClientToken?: string;
};
  "connect:DisassociateSecurityProfiles": {};
  "connect:DisassociateTrafficDistributionGroupUser": {
  UserId: string;
  InstanceId: string;
};
  "connect:DisassociateUserProficiencies": {};
  "connect:DisassociateWorkspace": {};
  "connect:DismissUserContact": {};
  "connect:EvaluateDataTableValues": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:GetAttachedFile": {
  UrlExpiryInSeconds?: number;
  AssociatedResourceArn: string;
};
  "connect:GetContactAttributes": {};
  "connect:GetContactMetrics": {};
  "connect:GetCurrentMetricData": {};
  "connect:GetCurrentUserData": {};
  "connect:GetEffectiveHoursOfOperations": {
  FromDate: string;
  ToDate: string;
};
  "connect:GetFederationToken": {};
  "connect:GetFlowAssociation": {};
  "connect:GetMetricData": {};
  "connect:GetMetricDataV2": {};
  "connect:GetPromptFile": {};
  "connect:GetTaskTemplate": {
  SnapshotVersion?: string;
};
  "connect:GetTestCaseExecutionSummary": {};
  "connect:GetTrafficDistribution": {};
  "connect:ImportPhoneNumber": {};
  "connect:ImportWorkspaceMedia": {};
  "connect:ListAgentStatuses": {
  NextToken?: string;
  MaxResults?: number;
  AgentStatusTypes?: AmazonConnectFullApiSchemaAgentStatusTypes;
};
  "connect:ListAnalyticsDataAssociations": {
  DataSetId?: string;
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListAnalyticsDataLakeDataSets": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListApprovedOrigins": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListAssociatedContacts": {
  ContactId: string;
  MaxResults?: number;
  NextToken?: string;
};
  "connect:ListAttachedFilesConfigurations": {
  MaxResults?: number;
  NextToken?: string;
};
  "connect:ListAuthenticationProfiles": {
  MaxResults?: number;
  NextToken?: string;
};
  "connect:ListBots": {
  NextToken?: string;
  MaxResults?: number;
  LexVersion: AmazonConnectFullApiSchemaLexVersion;
};
  "connect:ListChildHoursOfOperations": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListContactEvaluations": {
  ContactId: string;
  NextToken?: string;
};
  "connect:ListContactFlowModuleAliases": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListContactFlowModuleVersions": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListContactFlowModules": {
  NextToken?: string;
  MaxResults?: number;
  ContactFlowModuleState?: AmazonConnectFullApiSchemaContactFlowModuleState;
};
  "connect:ListContactFlowVersions": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListContactFlows": {
  ContactFlowTypes?: AmazonConnectFullApiSchemaContactFlowTypes;
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListContactReferences": {
  ReferenceTypes: AmazonConnectFullApiSchemaReferenceTypes;
  NextToken?: string;
};
  "connect:ListDataTableAttributes": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListDataTablePrimaryValues": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListDataTableValues": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListDataTables": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListDefaultVocabularies": {};
  "connect:ListEntitySecurityProfiles": {};
  "connect:ListEvaluationFormVersions": {
  MaxResults?: number;
  NextToken?: string;
};
  "connect:ListEvaluationForms": {
  MaxResults?: number;
  NextToken?: string;
};
  "connect:ListFlowAssociations": {
  ResourceType?: AmazonConnectFullApiSchemaListFlowAssociationResourceType;
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListHoursOfOperationOverrides": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListHoursOfOperations": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListInstanceAttributes": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListInstanceStorageConfigs": {
  ResourceType: AmazonConnectFullApiSchemaInstanceStorageResourceType;
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListInstances": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListIntegrationAssociations": {
  IntegrationType?: AmazonConnectFullApiSchemaIntegrationType;
  NextToken?: string;
  MaxResults?: number;
  IntegrationArn?: string;
};
  "connect:ListLambdaFunctions": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListLexBots": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListNotifications": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListPhoneNumbers": {
  PhoneNumberTypes?: AmazonConnectFullApiSchemaPhoneNumberTypes;
  PhoneNumberCountryCodes?: AmazonConnectFullApiSchemaPhoneNumberCountryCodes;
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListPhoneNumbersV2": {};
  "connect:ListPredefinedAttributes": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListPrompts": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListQueueEmailAddresses": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListQueueQuickConnects": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListQueues": {
  QueueTypes?: AmazonConnectFullApiSchemaQueueTypes;
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListQuickConnects": {
  NextToken?: string;
  MaxResults?: number;
  QuickConnectTypes?: AmazonConnectFullApiSchemaQuickConnectTypes;
};
  "connect:ListRealtimeContactAnalysisSegmentsV2": {};
  "connect:ListRoutingProfileManualAssignmentQueues": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListRoutingProfileQueues": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListRoutingProfiles": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListRules": {
  PublishStatus?: AmazonConnectFullApiSchemaRulePublishStatus;
  EventSourceName?: AmazonConnectFullApiSchemaEventSourceName;
  MaxResults?: number;
  NextToken?: string;
};
  "connect:ListSecurityKeys": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListSecurityProfileApplications": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListSecurityProfileFlowModules": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListSecurityProfilePermissions": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListSecurityProfiles": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListTagsForResource": {};
  "connect:ListTaskTemplates": {
  NextToken?: string;
  MaxResults?: number;
  Status?: AmazonConnectFullApiSchemaTaskTemplateStatus;
  Name?: string;
};
  "connect:ListTestCaseExecutionRecords": {
  Status?: AmazonConnectFullApiSchemaTestCaseExecutionStatus;
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListTestCaseExecutions": {
  TestCaseId?: string;
  TestCaseName?: string;
  StartTime?: number;
  EndTime?: number;
  Status?: AmazonConnectFullApiSchemaTestCaseExecutionStatus;
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListTestCases": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListTrafficDistributionGroupUsers": {
  MaxResults?: number;
  NextToken?: string;
};
  "connect:ListTrafficDistributionGroups": {
  MaxResults?: number;
  NextToken?: string;
  InstanceId?: string;
};
  "connect:ListUseCases": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListUserHierarchyGroups": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListUserNotifications": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListUserProficiencies": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListUsers": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListViewVersions": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListViews": {
  Type?: AmazonConnectFullApiSchemaViewType;
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListWorkspaceMedia": {};
  "connect:ListWorkspacePages": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListWorkspaces": {
  NextToken?: string;
  MaxResults?: number;
};
  "connect:MonitorContact": {};
  "connect:PauseContact": {};
  "connect:PutUserStatus": {};
  "connect:ReleasePhoneNumber": {
  ClientToken?: string;
};
  "connect:ReplicateInstance": {};
  "connect:ResumeContact": {};
  "connect:ResumeContactRecording": {};
  "connect:SearchAgentStatuses": {};
  "connect:SearchAvailablePhoneNumbers": {};
  "connect:SearchContactEvaluations": {};
  "connect:SearchContactFlowModules": {};
  "connect:SearchContactFlows": {};
  "connect:SearchContacts": {};
  "connect:SearchDataTables": {};
  "connect:SearchEmailAddresses": {};
  "connect:SearchEvaluationForms": {};
  "connect:SearchHoursOfOperationOverrides": {};
  "connect:SearchHoursOfOperations": {};
  "connect:SearchNotifications": {};
  "connect:SearchPredefinedAttributes": {};
  "connect:SearchPrompts": {};
  "connect:SearchQueues": {};
  "connect:SearchQuickConnects": {};
  "connect:SearchResourceTags": {};
  "connect:SearchRoutingProfiles": {};
  "connect:SearchSecurityProfiles": {};
  "connect:SearchTestCases": {};
  "connect:SearchUserHierarchyGroups": {};
  "connect:SearchUsers": {};
  "connect:SearchViews": {};
  "connect:SearchVocabularies": {};
  "connect:SearchWorkspaceAssociations": {};
  "connect:SearchWorkspaces": {};
  "connect:SendChatIntegrationEvent": {};
  "connect:SendOutboundEmail": {};
  "connect:StartAttachedFileUpload": {
  AssociatedResourceArn: string;
};
  "connect:StartChatContact": {};
  "connect:StartContactEvaluation": {};
  "connect:StartContactMediaProcessing": {};
  "connect:StartContactRecording": {};
  "connect:StartContactStreaming": {};
  "connect:StartEmailContact": {};
  "connect:StartOutboundChatContact": {};
  "connect:StartOutboundEmailContact": {};
  "connect:StartOutboundVoiceContact": {};
  "connect:StartScreenSharing": {};
  "connect:StartTaskContact": {};
  "connect:StartTestCaseExecution": {};
  "connect:StartWebRTCContact": {};
  "connect:StopContact": {};
  "connect:StopContactMediaProcessing": {};
  "connect:StopContactRecording": {};
  "connect:StopContactStreaming": {};
  "connect:StopTestCaseExecution": {};
  "connect:SubmitContactEvaluation": {};
  "connect:SuspendContactRecording": {};
  "connect:TagContact": {};
  "connect:TagResource": {};
  "connect:TransferContact": {};
  "connect:UntagContact": {
  TagKeys: AmazonConnectFullApiSchemaContactTagKeys;
};
  "connect:UntagResource": {
  tagKeys: AmazonConnectFullApiSchemaTagKeyList2;
};
  "connect:UpdateAgentStatus": {};
  "connect:UpdateAttachedFilesConfiguration": {};
  "connect:UpdateAuthenticationProfile": {};
  "connect:UpdateContact": {};
  "connect:UpdateContactAttributes": {};
  "connect:UpdateContactEvaluation": {};
  "connect:UpdateContactFlowContent": {};
  "connect:UpdateContactFlowMetadata": {};
  "connect:UpdateContactFlowModuleAlias": {};
  "connect:UpdateContactFlowModuleContent": {};
  "connect:UpdateContactFlowModuleMetadata": {};
  "connect:UpdateContactFlowName": {};
  "connect:UpdateContactRoutingData": {};
  "connect:UpdateContactSchedule": {};
  "connect:UpdateDataTableAttribute": {};
  "connect:UpdateDataTableMetadata": {};
  "connect:UpdateDataTablePrimaryValues": {};
  "connect:UpdateEmailAddressMetadata": {};
  "connect:UpdateEvaluationForm": {};
  "connect:UpdateHoursOfOperation": {};
  "connect:UpdateHoursOfOperationOverride": {};
  "connect:UpdateInstanceAttribute": {};
  "connect:UpdateInstanceStorageConfig": {
  ResourceType: AmazonConnectFullApiSchemaInstanceStorageResourceType;
};
  "connect:UpdateNotificationContent": {};
  "connect:UpdateParticipantAuthentication": {};
  "connect:UpdateParticipantRoleConfig": {};
  "connect:UpdatePhoneNumber": {};
  "connect:UpdatePhoneNumberMetadata": {};
  "connect:UpdatePredefinedAttribute": {};
  "connect:UpdatePrompt": {};
  "connect:UpdateQueueHoursOfOperation": {};
  "connect:UpdateQueueMaxContacts": {};
  "connect:UpdateQueueName": {};
  "connect:UpdateQueueOutboundCallerConfig": {};
  "connect:UpdateQueueOutboundEmailConfig": {};
  "connect:UpdateQueueStatus": {};
  "connect:UpdateQuickConnectConfig": {};
  "connect:UpdateQuickConnectName": {};
  "connect:UpdateRoutingProfileAgentAvailabilityTimer": {};
  "connect:UpdateRoutingProfileConcurrency": {};
  "connect:UpdateRoutingProfileDefaultOutboundQueue": {};
  "connect:UpdateRoutingProfileName": {};
  "connect:UpdateRoutingProfileQueues": {};
  "connect:UpdateRule": {};
  "connect:UpdateSecurityProfile": {};
  "connect:UpdateTaskTemplate": {};
  "connect:UpdateTestCase": {};
  "connect:UpdateTrafficDistribution": {};
  "connect:UpdateUserConfig": {};
  "connect:UpdateUserHierarchy": {};
  "connect:UpdateUserHierarchyGroupName": {};
  "connect:UpdateUserHierarchyStructure": {};
  "connect:UpdateUserIdentityInfo": {};
  "connect:UpdateUserNotificationStatus": {};
  "connect:UpdateUserPhoneConfig": {};
  "connect:UpdateUserProficiencies": {};
  "connect:UpdateUserRoutingProfile": {};
  "connect:UpdateUserSecurityProfiles": {};
  "connect:UpdateViewContent": {};
  "connect:UpdateViewMetadata": {};
  "connect:UpdateWorkspaceMetadata": {};
  "connect:UpdateWorkspacePage": {};
  "connect:UpdateWorkspaceTheme": {};
  "connect:UpdateWorkspaceVisibility": {};
  "connectparticipant:CancelParticipantAuthentication": {};
  "connectparticipant:CompleteAttachmentUpload": {};
  "connectparticipant:CreateParticipantConnection": {};
  "connectparticipant:DescribeView": {};
  "connectparticipant:DisconnectParticipant": {};
  "connectparticipant:GetAttachment": {};
  "connectparticipant:GetAuthenticationUrl": {};
  "connectparticipant:GetTranscript": {};
  "connectparticipant:SendEvent": {};
  "connectparticipant:SendMessage": {};
  "connectparticipant:StartAttachmentUpload": {};
  "connectcases:BatchGetCaseRule": {};
  "connectcases:BatchGetField": {};
  "connectcases:BatchPutFieldOptions": {};
  "connectcases:CreateCase": {};
  "connectcases:CreateCaseRule": {};
  "connectcases:CreateDomain": {};
  "connectcases:CreateField": {};
  "connectcases:CreateLayout": {};
  "connectcases:CreateRelatedItem": {};
  "connectcases:CreateTemplate": {};
  "connectcases:DeleteCase": {};
  "connectcases:DeleteCaseRule": {};
  "connectcases:DeleteDomain": {};
  "connectcases:DeleteField": {};
  "connectcases:DeleteLayout": {};
  "connectcases:DeleteRelatedItem": {};
  "connectcases:DeleteTemplate": {};
  "connectcases:GetCase": {};
  "connectcases:GetCaseAuditEvents": {};
  "connectcases:GetCaseEventConfiguration": {};
  "connectcases:GetDomain": {};
  "connectcases:GetLayout": {};
  "connectcases:GetTemplate": {};
  "connectcases:ListCaseRules": {
  maxResults?: number;
  nextToken?: string;
};
  "connectcases:ListCasesForContact": {};
  "connectcases:ListDomains": {
  maxResults?: number;
  nextToken?: string;
};
  "connectcases:ListFieldOptions": {
  maxResults?: number;
  nextToken?: string;
  values?: AmazonConnectFullApiSchemaValuesList;
};
  "connectcases:ListFields": {
  maxResults?: number;
  nextToken?: string;
};
  "connectcases:ListLayouts": {
  maxResults?: number;
  nextToken?: string;
};
  "connectcases:ListTagsForResource": {};
  "connectcases:ListTemplates": {
  maxResults?: number;
  nextToken?: string;
  status?: AmazonConnectFullApiSchemaTemplateStatusFilters;
};
  "connectcases:PutCaseEventConfiguration": {};
  "connectcases:SearchAllRelatedItems": {};
  "connectcases:SearchCases": {};
  "connectcases:SearchRelatedItems": {};
  "connectcases:TagResource": {};
  "connectcases:UntagResource": {
  tagKeys: AmazonConnectFullApiSchemaTagKeyList3;
};
  "connectcases:UpdateCase": {};
  "connectcases:UpdateCaseRule": {};
  "connectcases:UpdateField": {};
  "connectcases:UpdateLayout": {};
  "connectcases:UpdateRelatedItem": {};
  "connectcases:UpdateTemplate": {};
  "connectcampaigns:CreateCampaign": {};
  "connectcampaigns:DeleteCampaign": {};
  "connectcampaigns:DeleteConnectInstanceConfig": {};
  "connectcampaigns:DeleteInstanceOnboardingJob": {};
  "connectcampaigns:DescribeCampaign": {};
  "connectcampaigns:GetCampaignState": {};
  "connectcampaigns:GetCampaignStateBatch": {};
  "connectcampaigns:GetConnectInstanceConfig": {};
  "connectcampaigns:GetInstanceOnboardingJobStatus": {};
  "connectcampaigns:ListCampaigns": {};
  "connectcampaigns:ListTagsForResource": {};
  "connectcampaigns:PauseCampaign": {};
  "connectcampaigns:PutDialRequestBatch": {};
  "connectcampaigns:ResumeCampaign": {};
  "connectcampaigns:StartCampaign": {};
  "connectcampaigns:StartInstanceOnboardingJob": {};
  "connectcampaigns:StopCampaign": {};
  "connectcampaigns:TagResource": {};
  "connectcampaigns:UntagResource": {
  tagKeys: AmazonConnectFullApiSchemaTagKeyList4;
};
  "connectcampaigns:UpdateCampaignDialerConfig": {};
  "connectcampaigns:UpdateCampaignName": {};
  "connectcampaigns:UpdateCampaignOutboundCallConfig": {};
  "connectcampaignsv2:CreateCampaign": {};
  "connectcampaignsv2:DeleteCampaign": {};
  "connectcampaignsv2:DeleteCampaignChannelSubtypeConfig": {
  channelSubtype: "TELEPHONY" | "SMS" | "EMAIL" | "WHATSAPP";
};
  "connectcampaignsv2:DeleteCampaignCommunicationLimits": {
  config: "ALL_CHANNEL_SUBTYPES";
};
  "connectcampaignsv2:DeleteCampaignCommunicationTime": {
  config: "TELEPHONY" | "SMS" | "EMAIL" | "WHATSAPP";
};
  "connectcampaignsv2:DeleteCampaignEntryLimits": {};
  "connectcampaignsv2:DeleteConnectInstanceConfig": {
  campaignDeletionPolicy?: "RETAIN_ALL" | "DELETE_ALL";
};
  "connectcampaignsv2:DeleteConnectInstanceIntegration": {};
  "connectcampaignsv2:DeleteInstanceOnboardingJob": {};
  "connectcampaignsv2:DescribeCampaign": {};
  "connectcampaignsv2:GetCampaignState": {};
  "connectcampaignsv2:GetCampaignStateBatch": {};
  "connectcampaignsv2:GetConnectInstanceConfig": {};
  "connectcampaignsv2:GetInstanceCommunicationLimits": {};
  "connectcampaignsv2:GetInstanceOnboardingJobStatus": {};
  "connectcampaignsv2:ListCampaigns": {};
  "connectcampaignsv2:ListConnectInstanceIntegrations": {
  maxResults?: number;
  nextToken?: string;
};
  "connectcampaignsv2:ListTagsForResource": {};
  "connectcampaignsv2:PauseCampaign": {};
  "connectcampaignsv2:PutConnectInstanceIntegration": {};
  "connectcampaignsv2:PutInstanceCommunicationLimits": {};
  "connectcampaignsv2:PutOutboundRequestBatch": {};
  "connectcampaignsv2:PutProfileOutboundRequestBatch": {};
  "connectcampaignsv2:ResumeCampaign": {};
  "connectcampaignsv2:StartCampaign": {};
  "connectcampaignsv2:StartInstanceOnboardingJob": {};
  "connectcampaignsv2:StopCampaign": {};
  "connectcampaignsv2:TagResource": {};
  "connectcampaignsv2:UntagResource": {
  tagKeys: AmazonConnectFullApiSchemaTagKeyList5;
};
  "connectcampaignsv2:UpdateCampaignChannelSubtypeConfig": {};
  "connectcampaignsv2:UpdateCampaignCommunicationLimits": {};
  "connectcampaignsv2:UpdateCampaignCommunicationTime": {};
  "connectcampaignsv2:UpdateCampaignEntryLimits": {};
  "connectcampaignsv2:UpdateCampaignFlowAssociation": {};
  "connectcampaignsv2:UpdateCampaignName": {};
  "connectcampaignsv2:UpdateCampaignSchedule": {};
  "connectcampaignsv2:UpdateCampaignSource": {};
  "connect-contact-lens:ListRealtimeContactAnalysisSegments": {};
  "connecthealth:ActivateSubscription": {};
  "connecthealth:CreateDomain": {};
  "connecthealth:CreateSubscription": {};
  "connecthealth:DeactivateSubscription": {};
  "connecthealth:DeleteDomain": {};
  "connecthealth:GetDomain": {};
  "connecthealth:GetMedicalScribeListeningSession": {};
  "connecthealth:GetPatientInsightsJob": {};
  "connecthealth:GetSubscription": {};
  "connecthealth:ListDomains": {
  status?: AmazonConnectFullApiSchemaDomainStatus;
  maxResults?: number;
  nextToken?: string;
};
  "connecthealth:ListSubscriptions": {
  maxResults?: number;
  nextToken?: string;
};
  "connecthealth:ListTagsForResource": {};
  "connecthealth:StartMedicalScribeListeningSession": {};
  "connecthealth:StartPatientInsightsJob": {};
  "connecthealth:TagResource": {};
  "connecthealth:UntagResource": {
  tagKeys: AmazonConnectFullApiSchemaTagKeyList6;
};
  "customer-profiles:AddProfileKey": {};
  "customer-profiles:BatchGetCalculatedAttributeForProfile": {};
  "customer-profiles:BatchGetProfile": {};
  "customer-profiles:BatchPutProfileObject": {};
  "customer-profiles:CreateCalculatedAttributeDefinition": {};
  "customer-profiles:CreateDomain": {};
  "customer-profiles:CreateDomainLayout": {};
  "customer-profiles:CreateEventStream": {};
  "customer-profiles:CreateEventTrigger": {};
  "customer-profiles:CreateIntegrationWorkflow": {};
  "customer-profiles:CreateProfile": {};
  "customer-profiles:CreateRecommender": {};
  "customer-profiles:CreateRecommenderFilter": {};
  "customer-profiles:CreateRecommenderSchema": {};
  "customer-profiles:CreateSegmentDefinition": {};
  "customer-profiles:CreateSegmentEstimate": {};
  "customer-profiles:CreateSegmentSnapshot": {};
  "customer-profiles:CreateUploadJob": {};
  "customer-profiles:DeleteCalculatedAttributeDefinition": {};
  "customer-profiles:DeleteDomain": {};
  "customer-profiles:DeleteDomainLayout": {};
  "customer-profiles:DeleteDomainObjectType": {};
  "customer-profiles:DeleteEventStream": {};
  "customer-profiles:DeleteEventTrigger": {};
  "customer-profiles:DeleteIntegration": {};
  "customer-profiles:DeleteProfile": {};
  "customer-profiles:DeleteProfileKey": {};
  "customer-profiles:DeleteProfileObject": {};
  "customer-profiles:DeleteProfileObjectType": {};
  "customer-profiles:DeleteRecommender": {};
  "customer-profiles:DeleteRecommenderFilter": {};
  "customer-profiles:DeleteRecommenderSchema": {};
  "customer-profiles:DeleteSegmentDefinition": {};
  "customer-profiles:DeleteWorkflow": {};
  "customer-profiles:DetectProfileObjectType": {};
  "customer-profiles:GetAutoMergingPreview": {};
  "customer-profiles:GetCalculatedAttributeDefinition": {};
  "customer-profiles:GetCalculatedAttributeForProfile": {};
  "customer-profiles:GetDomain": {};
  "customer-profiles:GetDomainLayout": {};
  "customer-profiles:GetDomainObjectType": {};
  "customer-profiles:GetEventStream": {};
  "customer-profiles:GetEventTrigger": {};
  "customer-profiles:GetIdentityResolutionJob": {};
  "customer-profiles:GetIntegration": {};
  "customer-profiles:GetMatches": {
  NextToken?: string;
  MaxResults?: number;
};
  "customer-profiles:GetObjectTypeAttributeStatistics": {};
  "customer-profiles:GetProfileHistoryRecord": {};
  "customer-profiles:GetProfileObjectType": {};
  "customer-profiles:GetProfileObjectTypeTemplate": {};
  "customer-profiles:GetProfileRecommendations": {};
  "customer-profiles:GetRecommender": {
  TrainingMetricsCount?: number;
};
  "customer-profiles:GetRecommenderFilter": {};
  "customer-profiles:GetRecommenderSchema": {};
  "customer-profiles:GetSegmentDefinition": {};
  "customer-profiles:GetSegmentEstimate": {};
  "customer-profiles:GetSegmentMembership": {};
  "customer-profiles:GetSegmentSnapshot": {};
  "customer-profiles:GetSimilarProfiles": {
  NextToken?: string;
  MaxResults?: number;
};
  "customer-profiles:GetUploadJob": {};
  "customer-profiles:GetUploadJobPath": {};
  "customer-profiles:GetWorkflow": {};
  "customer-profiles:GetWorkflowSteps": {
  NextToken?: string;
  MaxResults?: number;
};
  "customer-profiles:ListAccountIntegrations": {
  NextToken?: string;
  MaxResults?: number;
  IncludeHidden?: boolean;
};
  "customer-profiles:ListCalculatedAttributeDefinitions": {
  NextToken?: string;
  MaxResults?: number;
};
  "customer-profiles:ListCalculatedAttributesForProfile": {
  NextToken?: string;
  MaxResults?: number;
};
  "customer-profiles:ListDomainLayouts": {
  NextToken?: string;
  MaxResults?: number;
};
  "customer-profiles:ListDomainObjectTypes": {
  MaxResults?: number;
  NextToken?: string;
};
  "customer-profiles:ListDomains": {
  NextToken?: string;
  MaxResults?: number;
};
  "customer-profiles:ListEventStreams": {
  NextToken?: string;
  MaxResults?: number;
};
  "customer-profiles:ListEventTriggers": {
  NextToken?: string;
  MaxResults?: number;
};
  "customer-profiles:ListIdentityResolutionJobs": {
  NextToken?: string;
  MaxResults?: number;
};
  "customer-profiles:ListIntegrations": {
  NextToken?: string;
  MaxResults?: number;
  IncludeHidden?: boolean;
};
  "customer-profiles:ListObjectTypeAttributeValues": {
  NextToken?: string;
  MaxResults?: number;
};
  "customer-profiles:ListObjectTypeAttributes": {
  NextToken?: string;
  MaxResults?: number;
};
  "customer-profiles:ListProfileAttributeValues": {};
  "customer-profiles:ListProfileHistoryRecords": {
  NextToken?: string;
  MaxResults?: number;
};
  "customer-profiles:ListProfileObjectTypeTemplates": {
  NextToken?: string;
  MaxResults?: number;
};
  "customer-profiles:ListProfileObjectTypes": {
  NextToken?: string;
  MaxResults?: number;
};
  "customer-profiles:ListProfileObjects": {
  NextToken?: string;
  MaxResults?: number;
};
  "customer-profiles:ListRecommenderFilters": {
  MaxResults?: number;
  NextToken?: string;
};
  "customer-profiles:ListRecommenderRecipes": {
  MaxResults?: number;
  NextToken?: string;
};
  "customer-profiles:ListRecommenderSchemas": {
  MaxResults?: number;
  NextToken?: string;
};
  "customer-profiles:ListRecommenders": {
  MaxResults?: number;
  NextToken?: string;
};
  "customer-profiles:ListRuleBasedMatches": {
  NextToken?: string;
  MaxResults?: number;
};
  "customer-profiles:ListSegmentDefinitions": {
  MaxResults?: number;
  NextToken?: string;
};
  "customer-profiles:ListTagsForResource": {};
  "customer-profiles:ListUploadJobs": {
  MaxResults?: number;
  NextToken?: string;
};
  "customer-profiles:ListWorkflows": {
  NextToken?: string;
  MaxResults?: number;
};
  "customer-profiles:MergeProfiles": {};
  "customer-profiles:PutDomainObjectType": {};
  "customer-profiles:PutIntegration": {};
  "customer-profiles:PutProfileObject": {};
  "customer-profiles:PutProfileObjectType": {};
  "customer-profiles:SearchProfiles": {
  NextToken?: string;
  MaxResults?: number;
};
  "customer-profiles:StartRecommender": {};
  "customer-profiles:StartUploadJob": {};
  "customer-profiles:StopRecommender": {};
  "customer-profiles:StopUploadJob": {};
  "customer-profiles:TagResource": {};
  "customer-profiles:UntagResource": {
  tagKeys: AmazonConnectFullApiSchemaTagKeyList7;
};
  "customer-profiles:UpdateCalculatedAttributeDefinition": {};
  "customer-profiles:UpdateDomain": {};
  "customer-profiles:UpdateDomainLayout": {};
  "customer-profiles:UpdateEventTrigger": {};
  "customer-profiles:UpdateProfile": {};
  "customer-profiles:UpdateRecommender": {};
  "qconnect:ActivateMessageTemplate": {};
  "qconnect:CreateAIAgent": {};
  "qconnect:CreateAIAgentVersion": {};
  "qconnect:CreateAIGuardrail": {};
  "qconnect:CreateAIGuardrailVersion": {};
  "qconnect:CreateAIPrompt": {};
  "qconnect:CreateAIPromptVersion": {};
  "qconnect:CreateAssistant": {};
  "qconnect:CreateAssistantAssociation": {};
  "qconnect:CreateContent": {};
  "qconnect:CreateContentAssociation": {};
  "qconnect:CreateKnowledgeBase": {};
  "qconnect:CreateMessageTemplate": {};
  "qconnect:CreateMessageTemplateAttachment": {};
  "qconnect:CreateMessageTemplateVersion": {};
  "qconnect:CreateQuickResponse": {};
  "qconnect:CreateSession": {};
  "qconnect:DeactivateMessageTemplate": {};
  "qconnect:DeleteAIAgent": {};
  "qconnect:DeleteAIAgentVersion": {};
  "qconnect:DeleteAIGuardrail": {};
  "qconnect:DeleteAIGuardrailVersion": {};
  "qconnect:DeleteAIPrompt": {};
  "qconnect:DeleteAIPromptVersion": {};
  "qconnect:DeleteAssistant": {};
  "qconnect:DeleteAssistantAssociation": {};
  "qconnect:DeleteContent": {};
  "qconnect:DeleteContentAssociation": {};
  "qconnect:DeleteImportJob": {};
  "qconnect:DeleteKnowledgeBase": {};
  "qconnect:DeleteMessageTemplate": {};
  "qconnect:DeleteMessageTemplateAttachment": {};
  "qconnect:DeleteQuickResponse": {};
  "qconnect:GetAIAgent": {};
  "qconnect:GetAIGuardrail": {};
  "qconnect:GetAIPrompt": {};
  "qconnect:GetAssistant": {};
  "qconnect:GetAssistantAssociation": {};
  "qconnect:GetContent": {};
  "qconnect:GetContentAssociation": {};
  "qconnect:GetContentSummary": {};
  "qconnect:GetImportJob": {};
  "qconnect:GetKnowledgeBase": {};
  "qconnect:GetMessageTemplate": {};
  "qconnect:GetNextMessage": {
  nextMessageToken: string;
};
  "qconnect:GetQuickResponse": {};
  "qconnect:GetRecommendations": {
  maxResults?: number;
  waitTimeSeconds?: number;
  nextChunkToken?: string;
  recommendationType?: "KNOWLEDGE_CONTENT" | "GENERATIVE_RESPONSE" | "GENERATIVE_ANSWER" | "DETECTED_INTENT" | "GENERATIVE_ANSWER_CHUNK" | "BLOCKED_GENERATIVE_ANSWER_CHUNK" | "INTENT_ANSWER_CHUNK" | "BLOCKED_INTENT_ANSWER_CHUNK" | "EMAIL_RESPONSE_CHUNK" | "EMAIL_OVERVIEW_CHUNK" | "EMAIL_GENERATIVE_ANSWER_CHUNK" | "CASE_SUMMARIZATION_CHUNK" | "BLOCKED_CASE_SUMMARIZATION_CHUNK" | "SUGGESTED_MESSAGE" | "NOTES_CHUNK" | "BLOCKED_NOTES_CHUNK";
};
  "qconnect:GetSession": {};
  "qconnect:ListAIAgentVersions": {
  nextToken?: string;
  maxResults?: number;
  origin?: "SYSTEM" | "CUSTOMER";
};
  "qconnect:ListAIAgents": {
  nextToken?: string;
  maxResults?: number;
  origin?: "SYSTEM" | "CUSTOMER";
};
  "qconnect:ListAIGuardrailVersions": {
  nextToken?: string;
  maxResults?: number;
};
  "qconnect:ListAIGuardrails": {
  nextToken?: string;
  maxResults?: number;
};
  "qconnect:ListAIPromptVersions": {
  nextToken?: string;
  maxResults?: number;
  origin?: "SYSTEM" | "CUSTOMER";
};
  "qconnect:ListAIPrompts": {
  nextToken?: string;
  maxResults?: number;
  origin?: "SYSTEM" | "CUSTOMER";
};
  "qconnect:ListAssistantAssociations": {
  nextToken?: string;
  maxResults?: number;
};
  "qconnect:ListAssistants": {
  nextToken?: string;
  maxResults?: number;
};
  "qconnect:ListContentAssociations": {
  nextToken?: string;
  maxResults?: number;
};
  "qconnect:ListContents": {
  nextToken?: string;
  maxResults?: number;
};
  "qconnect:ListImportJobs": {
  nextToken?: string;
  maxResults?: number;
};
  "qconnect:ListKnowledgeBases": {
  nextToken?: string;
  maxResults?: number;
};
  "qconnect:ListMessageTemplateVersions": {
  nextToken?: string;
  maxResults?: number;
};
  "qconnect:ListMessageTemplates": {
  nextToken?: string;
  maxResults?: number;
};
  "qconnect:ListMessages": {
  nextToken?: string;
  maxResults?: number;
  filter?: "ALL" | "TEXT_ONLY";
};
  "qconnect:ListModels": {
  aiPromptType?: "ANSWER_GENERATION" | "INTENT_LABELING_GENERATION" | "QUERY_REFORMULATION" | "SELF_SERVICE_PRE_PROCESSING" | "SELF_SERVICE_ANSWER_GENERATION" | "EMAIL_RESPONSE" | "EMAIL_OVERVIEW" | "EMAIL_GENERATIVE_ANSWER" | "EMAIL_QUERY_REFORMULATION" | "ORCHESTRATION" | "NOTE_TAKING" | "CASE_SUMMARIZATION";
  modelLifecycle?: "ACTIVE" | "LEGACY";
  nextToken?: string;
  maxResults?: number;
};
  "qconnect:ListQuickResponses": {
  nextToken?: string;
  maxResults?: number;
};
  "qconnect:ListSpans": {
  nextToken?: string;
  maxResults?: number;
};
  "qconnect:ListTagsForResource": {};
  "qconnect:NotifyRecommendationsReceived": {};
  "qconnect:PutFeedback": {};
  "qconnect:QueryAssistant": {};
  "qconnect:RemoveAssistantAIAgent": {
  aiAgentType: "MANUAL_SEARCH" | "ANSWER_RECOMMENDATION" | "SELF_SERVICE" | "EMAIL_RESPONSE" | "EMAIL_OVERVIEW" | "EMAIL_GENERATIVE_ANSWER" | "ORCHESTRATION" | "NOTE_TAKING" | "CASE_SUMMARIZATION";
  orchestratorUseCase?: string;
};
  "qconnect:RemoveKnowledgeBaseTemplateUri": {};
  "qconnect:RenderMessageTemplate": {};
  "qconnect:Retrieve": {};
  "qconnect:SearchContent": {
  nextToken?: string;
  maxResults?: number;
};
  "qconnect:SearchMessageTemplates": {
  nextToken?: string;
  maxResults?: number;
};
  "qconnect:SearchQuickResponses": {
  nextToken?: string;
  maxResults?: number;
};
  "qconnect:SearchSessions": {
  nextToken?: string;
  maxResults?: number;
};
  "qconnect:SendMessage": {};
  "qconnect:StartContentUpload": {};
  "qconnect:StartImportJob": {};
  "qconnect:TagResource": {};
  "qconnect:UntagResource": {
  tagKeys: AmazonConnectFullApiSchemaTagKeyList8;
};
  "qconnect:UpdateAIAgent": {};
  "qconnect:UpdateAIGuardrail": {};
  "qconnect:UpdateAIPrompt": {};
  "qconnect:UpdateAssistantAIAgent": {};
  "qconnect:UpdateContent": {};
  "qconnect:UpdateKnowledgeBaseTemplateUri": {};
  "qconnect:UpdateMessageTemplate": {};
  "qconnect:UpdateMessageTemplateMetadata": {};
  "qconnect:UpdateQuickResponse": {};
  "qconnect:UpdateSession": {};
  "qconnect:UpdateSessionData": {};
  "wisdom:CreateAssistant": {};
  "wisdom:CreateAssistantAssociation": {};
  "wisdom:CreateContent": {};
  "wisdom:CreateKnowledgeBase": {};
  "wisdom:CreateQuickResponse": {};
  "wisdom:CreateSession": {};
  "wisdom:DeleteAssistant": {};
  "wisdom:DeleteAssistantAssociation": {};
  "wisdom:DeleteContent": {};
  "wisdom:DeleteImportJob": {};
  "wisdom:DeleteKnowledgeBase": {};
  "wisdom:DeleteQuickResponse": {};
  "wisdom:GetAssistant": {};
  "wisdom:GetAssistantAssociation": {};
  "wisdom:GetContent": {};
  "wisdom:GetContentSummary": {};
  "wisdom:GetImportJob": {};
  "wisdom:GetKnowledgeBase": {};
  "wisdom:GetQuickResponse": {};
  "wisdom:GetRecommendations": {
  maxResults?: number;
  waitTimeSeconds?: number;
};
  "wisdom:GetSession": {};
  "wisdom:ListAssistantAssociations": {
  nextToken?: string;
  maxResults?: number;
};
  "wisdom:ListAssistants": {
  nextToken?: string;
  maxResults?: number;
};
  "wisdom:ListContents": {
  nextToken?: string;
  maxResults?: number;
};
  "wisdom:ListImportJobs": {
  nextToken?: string;
  maxResults?: number;
};
  "wisdom:ListKnowledgeBases": {
  nextToken?: string;
  maxResults?: number;
};
  "wisdom:ListQuickResponses": {
  nextToken?: string;
  maxResults?: number;
};
  "wisdom:ListTagsForResource": {};
  "wisdom:NotifyRecommendationsReceived": {};
  "wisdom:QueryAssistant": {};
  "wisdom:RemoveKnowledgeBaseTemplateUri": {};
  "wisdom:SearchContent": {
  nextToken?: string;
  maxResults?: number;
};
  "wisdom:SearchQuickResponses": {
  nextToken?: string;
  maxResults?: number;
};
  "wisdom:SearchSessions": {
  nextToken?: string;
  maxResults?: number;
};
  "wisdom:StartContentUpload": {};
  "wisdom:StartImportJob": {};
  "wisdom:TagResource": {};
  "wisdom:UntagResource": {
  tagKeys: AmazonConnectFullApiSchemaTagKeyList9;
};
  "wisdom:UpdateContent": {};
  "wisdom:UpdateKnowledgeBaseTemplateUri": {};
  "wisdom:UpdateQuickResponse": {};
}

export interface AmazonConnectFullApiOperationQueryRequiredMap {
  "appintegrations:CreateApplication": false;
  "appintegrations:CreateDataIntegration": false;
  "appintegrations:CreateDataIntegrationAssociation": false;
  "appintegrations:CreateEventIntegration": false;
  "appintegrations:DeleteApplication": false;
  "appintegrations:DeleteDataIntegration": false;
  "appintegrations:DeleteEventIntegration": false;
  "appintegrations:GetApplication": false;
  "appintegrations:GetDataIntegration": false;
  "appintegrations:GetEventIntegration": false;
  "appintegrations:ListApplicationAssociations": false;
  "appintegrations:ListApplications": false;
  "appintegrations:ListDataIntegrationAssociations": false;
  "appintegrations:ListDataIntegrations": false;
  "appintegrations:ListEventIntegrationAssociations": false;
  "appintegrations:ListEventIntegrations": false;
  "appintegrations:ListTagsForResource": false;
  "appintegrations:TagResource": false;
  "appintegrations:UntagResource": true;
  "appintegrations:UpdateApplication": false;
  "appintegrations:UpdateDataIntegration": false;
  "appintegrations:UpdateDataIntegrationAssociation": false;
  "appintegrations:UpdateEventIntegration": false;
  "connect:ActivateEvaluationForm": false;
  "connect:AssociateAnalyticsDataSet": false;
  "connect:AssociateApprovedOrigin": false;
  "connect:AssociateBot": false;
  "connect:AssociateContactWithUser": false;
  "connect:AssociateDefaultVocabulary": false;
  "connect:AssociateEmailAddressAlias": false;
  "connect:AssociateFlow": false;
  "connect:AssociateHoursOfOperations": false;
  "connect:AssociateInstanceStorageConfig": false;
  "connect:AssociateLambdaFunction": false;
  "connect:AssociateLexBot": false;
  "connect:AssociatePhoneNumberContactFlow": false;
  "connect:AssociateQueueEmailAddresses": false;
  "connect:AssociateQueueQuickConnects": false;
  "connect:AssociateRoutingProfileQueues": false;
  "connect:AssociateSecurityKey": false;
  "connect:AssociateSecurityProfiles": false;
  "connect:AssociateTrafficDistributionGroupUser": false;
  "connect:AssociateUserProficiencies": false;
  "connect:AssociateWorkspace": false;
  "connect:BatchAssociateAnalyticsDataSet": false;
  "connect:BatchCreateDataTableValue": false;
  "connect:BatchDeleteDataTableValue": false;
  "connect:BatchDescribeDataTableValue": false;
  "connect:BatchDisassociateAnalyticsDataSet": false;
  "connect:BatchGetAttachedFileMetadata": true;
  "connect:BatchGetFlowAssociation": false;
  "connect:BatchPutContact": false;
  "connect:BatchUpdateDataTableValue": false;
  "connect:ClaimPhoneNumber": false;
  "connect:CompleteAttachedFileUpload": true;
  "connect:CreateAgentStatus": false;
  "connect:CreateContact": false;
  "connect:CreateContactFlow": false;
  "connect:CreateContactFlowModule": false;
  "connect:CreateContactFlowModuleAlias": false;
  "connect:CreateContactFlowModuleVersion": false;
  "connect:CreateContactFlowVersion": false;
  "connect:CreateDataTable": false;
  "connect:CreateDataTableAttribute": false;
  "connect:CreateEmailAddress": false;
  "connect:CreateEvaluationForm": false;
  "connect:CreateHoursOfOperation": false;
  "connect:CreateHoursOfOperationOverride": false;
  "connect:CreateInstance": false;
  "connect:CreateIntegrationAssociation": false;
  "connect:CreateNotification": false;
  "connect:CreateParticipant": false;
  "connect:CreatePersistentContactAssociation": false;
  "connect:CreatePredefinedAttribute": false;
  "connect:CreatePrompt": false;
  "connect:CreatePushNotificationRegistration": false;
  "connect:CreateQueue": false;
  "connect:CreateQuickConnect": false;
  "connect:CreateRoutingProfile": false;
  "connect:CreateRule": false;
  "connect:CreateSecurityProfile": false;
  "connect:CreateTaskTemplate": false;
  "connect:CreateTestCase": false;
  "connect:CreateTrafficDistributionGroup": false;
  "connect:CreateUseCase": false;
  "connect:CreateUser": false;
  "connect:CreateUserHierarchyGroup": false;
  "connect:CreateView": false;
  "connect:CreateViewVersion": false;
  "connect:CreateVocabulary": false;
  "connect:CreateWorkspace": false;
  "connect:CreateWorkspacePage": false;
  "connect:DeactivateEvaluationForm": false;
  "connect:DeleteAttachedFile": true;
  "connect:DeleteContactEvaluation": false;
  "connect:DeleteContactFlow": false;
  "connect:DeleteContactFlowModule": false;
  "connect:DeleteContactFlowModuleAlias": false;
  "connect:DeleteContactFlowModuleVersion": false;
  "connect:DeleteContactFlowVersion": false;
  "connect:DeleteDataTable": false;
  "connect:DeleteDataTableAttribute": false;
  "connect:DeleteEmailAddress": false;
  "connect:DeleteEvaluationForm": false;
  "connect:DeleteHoursOfOperation": false;
  "connect:DeleteHoursOfOperationOverride": false;
  "connect:DeleteInstance": false;
  "connect:DeleteIntegrationAssociation": false;
  "connect:DeleteNotification": false;
  "connect:DeletePredefinedAttribute": false;
  "connect:DeletePrompt": false;
  "connect:DeletePushNotificationRegistration": true;
  "connect:DeleteQueue": false;
  "connect:DeleteQuickConnect": false;
  "connect:DeleteRoutingProfile": false;
  "connect:DeleteRule": false;
  "connect:DeleteSecurityProfile": false;
  "connect:DeleteTaskTemplate": false;
  "connect:DeleteTestCase": false;
  "connect:DeleteTrafficDistributionGroup": false;
  "connect:DeleteUseCase": false;
  "connect:DeleteUser": false;
  "connect:DeleteUserHierarchyGroup": false;
  "connect:DeleteView": false;
  "connect:DeleteViewVersion": false;
  "connect:DeleteVocabulary": false;
  "connect:DeleteWorkspace": false;
  "connect:DeleteWorkspaceMedia": true;
  "connect:DeleteWorkspacePage": false;
  "connect:DescribeAgentStatus": false;
  "connect:DescribeAttachedFilesConfiguration": false;
  "connect:DescribeAuthenticationProfile": false;
  "connect:DescribeContact": false;
  "connect:DescribeContactEvaluation": false;
  "connect:DescribeContactFlow": false;
  "connect:DescribeContactFlowModule": false;
  "connect:DescribeContactFlowModuleAlias": false;
  "connect:DescribeDataTable": false;
  "connect:DescribeDataTableAttribute": false;
  "connect:DescribeEmailAddress": false;
  "connect:DescribeEvaluationForm": false;
  "connect:DescribeHoursOfOperation": false;
  "connect:DescribeHoursOfOperationOverride": false;
  "connect:DescribeInstance": false;
  "connect:DescribeInstanceAttribute": false;
  "connect:DescribeInstanceStorageConfig": true;
  "connect:DescribeNotification": false;
  "connect:DescribePhoneNumber": false;
  "connect:DescribePredefinedAttribute": false;
  "connect:DescribePrompt": false;
  "connect:DescribeQueue": false;
  "connect:DescribeQuickConnect": false;
  "connect:DescribeRoutingProfile": false;
  "connect:DescribeRule": false;
  "connect:DescribeSecurityProfile": false;
  "connect:DescribeTestCase": false;
  "connect:DescribeTrafficDistributionGroup": false;
  "connect:DescribeUser": false;
  "connect:DescribeUserHierarchyGroup": false;
  "connect:DescribeUserHierarchyStructure": false;
  "connect:DescribeView": false;
  "connect:DescribeVocabulary": false;
  "connect:DescribeWorkspace": false;
  "connect:DisassociateAnalyticsDataSet": false;
  "connect:DisassociateApprovedOrigin": true;
  "connect:DisassociateBot": false;
  "connect:DisassociateEmailAddressAlias": false;
  "connect:DisassociateFlow": false;
  "connect:DisassociateHoursOfOperations": false;
  "connect:DisassociateInstanceStorageConfig": true;
  "connect:DisassociateLambdaFunction": true;
  "connect:DisassociateLexBot": true;
  "connect:DisassociatePhoneNumberContactFlow": true;
  "connect:DisassociateQueueEmailAddresses": false;
  "connect:DisassociateQueueQuickConnects": false;
  "connect:DisassociateRoutingProfileQueues": false;
  "connect:DisassociateSecurityKey": false;
  "connect:DisassociateSecurityProfiles": false;
  "connect:DisassociateTrafficDistributionGroupUser": true;
  "connect:DisassociateUserProficiencies": false;
  "connect:DisassociateWorkspace": false;
  "connect:DismissUserContact": false;
  "connect:EvaluateDataTableValues": false;
  "connect:GetAttachedFile": true;
  "connect:GetContactAttributes": false;
  "connect:GetContactMetrics": false;
  "connect:GetCurrentMetricData": false;
  "connect:GetCurrentUserData": false;
  "connect:GetEffectiveHoursOfOperations": true;
  "connect:GetFederationToken": false;
  "connect:GetFlowAssociation": false;
  "connect:GetMetricData": false;
  "connect:GetMetricDataV2": false;
  "connect:GetPromptFile": false;
  "connect:GetTaskTemplate": false;
  "connect:GetTestCaseExecutionSummary": false;
  "connect:GetTrafficDistribution": false;
  "connect:ImportPhoneNumber": false;
  "connect:ImportWorkspaceMedia": false;
  "connect:ListAgentStatuses": false;
  "connect:ListAnalyticsDataAssociations": false;
  "connect:ListAnalyticsDataLakeDataSets": false;
  "connect:ListApprovedOrigins": false;
  "connect:ListAssociatedContacts": true;
  "connect:ListAttachedFilesConfigurations": false;
  "connect:ListAuthenticationProfiles": false;
  "connect:ListBots": true;
  "connect:ListChildHoursOfOperations": false;
  "connect:ListContactEvaluations": true;
  "connect:ListContactFlowModuleAliases": false;
  "connect:ListContactFlowModuleVersions": false;
  "connect:ListContactFlowModules": false;
  "connect:ListContactFlowVersions": false;
  "connect:ListContactFlows": false;
  "connect:ListContactReferences": true;
  "connect:ListDataTableAttributes": false;
  "connect:ListDataTablePrimaryValues": false;
  "connect:ListDataTableValues": false;
  "connect:ListDataTables": false;
  "connect:ListDefaultVocabularies": false;
  "connect:ListEntitySecurityProfiles": false;
  "connect:ListEvaluationFormVersions": false;
  "connect:ListEvaluationForms": false;
  "connect:ListFlowAssociations": false;
  "connect:ListHoursOfOperationOverrides": false;
  "connect:ListHoursOfOperations": false;
  "connect:ListInstanceAttributes": false;
  "connect:ListInstanceStorageConfigs": true;
  "connect:ListInstances": false;
  "connect:ListIntegrationAssociations": false;
  "connect:ListLambdaFunctions": false;
  "connect:ListLexBots": false;
  "connect:ListNotifications": false;
  "connect:ListPhoneNumbers": false;
  "connect:ListPhoneNumbersV2": false;
  "connect:ListPredefinedAttributes": false;
  "connect:ListPrompts": false;
  "connect:ListQueueEmailAddresses": false;
  "connect:ListQueueQuickConnects": false;
  "connect:ListQueues": false;
  "connect:ListQuickConnects": false;
  "connect:ListRealtimeContactAnalysisSegmentsV2": false;
  "connect:ListRoutingProfileManualAssignmentQueues": false;
  "connect:ListRoutingProfileQueues": false;
  "connect:ListRoutingProfiles": false;
  "connect:ListRules": false;
  "connect:ListSecurityKeys": false;
  "connect:ListSecurityProfileApplications": false;
  "connect:ListSecurityProfileFlowModules": false;
  "connect:ListSecurityProfilePermissions": false;
  "connect:ListSecurityProfiles": false;
  "connect:ListTagsForResource": false;
  "connect:ListTaskTemplates": false;
  "connect:ListTestCaseExecutionRecords": false;
  "connect:ListTestCaseExecutions": false;
  "connect:ListTestCases": false;
  "connect:ListTrafficDistributionGroupUsers": false;
  "connect:ListTrafficDistributionGroups": false;
  "connect:ListUseCases": false;
  "connect:ListUserHierarchyGroups": false;
  "connect:ListUserNotifications": false;
  "connect:ListUserProficiencies": false;
  "connect:ListUsers": false;
  "connect:ListViewVersions": false;
  "connect:ListViews": false;
  "connect:ListWorkspaceMedia": false;
  "connect:ListWorkspacePages": false;
  "connect:ListWorkspaces": false;
  "connect:MonitorContact": false;
  "connect:PauseContact": false;
  "connect:PutUserStatus": false;
  "connect:ReleasePhoneNumber": false;
  "connect:ReplicateInstance": false;
  "connect:ResumeContact": false;
  "connect:ResumeContactRecording": false;
  "connect:SearchAgentStatuses": false;
  "connect:SearchAvailablePhoneNumbers": false;
  "connect:SearchContactEvaluations": false;
  "connect:SearchContactFlowModules": false;
  "connect:SearchContactFlows": false;
  "connect:SearchContacts": false;
  "connect:SearchDataTables": false;
  "connect:SearchEmailAddresses": false;
  "connect:SearchEvaluationForms": false;
  "connect:SearchHoursOfOperationOverrides": false;
  "connect:SearchHoursOfOperations": false;
  "connect:SearchNotifications": false;
  "connect:SearchPredefinedAttributes": false;
  "connect:SearchPrompts": false;
  "connect:SearchQueues": false;
  "connect:SearchQuickConnects": false;
  "connect:SearchResourceTags": false;
  "connect:SearchRoutingProfiles": false;
  "connect:SearchSecurityProfiles": false;
  "connect:SearchTestCases": false;
  "connect:SearchUserHierarchyGroups": false;
  "connect:SearchUsers": false;
  "connect:SearchViews": false;
  "connect:SearchVocabularies": false;
  "connect:SearchWorkspaceAssociations": false;
  "connect:SearchWorkspaces": false;
  "connect:SendChatIntegrationEvent": false;
  "connect:SendOutboundEmail": false;
  "connect:StartAttachedFileUpload": true;
  "connect:StartChatContact": false;
  "connect:StartContactEvaluation": false;
  "connect:StartContactMediaProcessing": false;
  "connect:StartContactRecording": false;
  "connect:StartContactStreaming": false;
  "connect:StartEmailContact": false;
  "connect:StartOutboundChatContact": false;
  "connect:StartOutboundEmailContact": false;
  "connect:StartOutboundVoiceContact": false;
  "connect:StartScreenSharing": false;
  "connect:StartTaskContact": false;
  "connect:StartTestCaseExecution": false;
  "connect:StartWebRTCContact": false;
  "connect:StopContact": false;
  "connect:StopContactMediaProcessing": false;
  "connect:StopContactRecording": false;
  "connect:StopContactStreaming": false;
  "connect:StopTestCaseExecution": false;
  "connect:SubmitContactEvaluation": false;
  "connect:SuspendContactRecording": false;
  "connect:TagContact": false;
  "connect:TagResource": false;
  "connect:TransferContact": false;
  "connect:UntagContact": true;
  "connect:UntagResource": true;
  "connect:UpdateAgentStatus": false;
  "connect:UpdateAttachedFilesConfiguration": false;
  "connect:UpdateAuthenticationProfile": false;
  "connect:UpdateContact": false;
  "connect:UpdateContactAttributes": false;
  "connect:UpdateContactEvaluation": false;
  "connect:UpdateContactFlowContent": false;
  "connect:UpdateContactFlowMetadata": false;
  "connect:UpdateContactFlowModuleAlias": false;
  "connect:UpdateContactFlowModuleContent": false;
  "connect:UpdateContactFlowModuleMetadata": false;
  "connect:UpdateContactFlowName": false;
  "connect:UpdateContactRoutingData": false;
  "connect:UpdateContactSchedule": false;
  "connect:UpdateDataTableAttribute": false;
  "connect:UpdateDataTableMetadata": false;
  "connect:UpdateDataTablePrimaryValues": false;
  "connect:UpdateEmailAddressMetadata": false;
  "connect:UpdateEvaluationForm": false;
  "connect:UpdateHoursOfOperation": false;
  "connect:UpdateHoursOfOperationOverride": false;
  "connect:UpdateInstanceAttribute": false;
  "connect:UpdateInstanceStorageConfig": true;
  "connect:UpdateNotificationContent": false;
  "connect:UpdateParticipantAuthentication": false;
  "connect:UpdateParticipantRoleConfig": false;
  "connect:UpdatePhoneNumber": false;
  "connect:UpdatePhoneNumberMetadata": false;
  "connect:UpdatePredefinedAttribute": false;
  "connect:UpdatePrompt": false;
  "connect:UpdateQueueHoursOfOperation": false;
  "connect:UpdateQueueMaxContacts": false;
  "connect:UpdateQueueName": false;
  "connect:UpdateQueueOutboundCallerConfig": false;
  "connect:UpdateQueueOutboundEmailConfig": false;
  "connect:UpdateQueueStatus": false;
  "connect:UpdateQuickConnectConfig": false;
  "connect:UpdateQuickConnectName": false;
  "connect:UpdateRoutingProfileAgentAvailabilityTimer": false;
  "connect:UpdateRoutingProfileConcurrency": false;
  "connect:UpdateRoutingProfileDefaultOutboundQueue": false;
  "connect:UpdateRoutingProfileName": false;
  "connect:UpdateRoutingProfileQueues": false;
  "connect:UpdateRule": false;
  "connect:UpdateSecurityProfile": false;
  "connect:UpdateTaskTemplate": false;
  "connect:UpdateTestCase": false;
  "connect:UpdateTrafficDistribution": false;
  "connect:UpdateUserConfig": false;
  "connect:UpdateUserHierarchy": false;
  "connect:UpdateUserHierarchyGroupName": false;
  "connect:UpdateUserHierarchyStructure": false;
  "connect:UpdateUserIdentityInfo": false;
  "connect:UpdateUserNotificationStatus": false;
  "connect:UpdateUserPhoneConfig": false;
  "connect:UpdateUserProficiencies": false;
  "connect:UpdateUserRoutingProfile": false;
  "connect:UpdateUserSecurityProfiles": false;
  "connect:UpdateViewContent": false;
  "connect:UpdateViewMetadata": false;
  "connect:UpdateWorkspaceMetadata": false;
  "connect:UpdateWorkspacePage": false;
  "connect:UpdateWorkspaceTheme": false;
  "connect:UpdateWorkspaceVisibility": false;
  "connectparticipant:CancelParticipantAuthentication": false;
  "connectparticipant:CompleteAttachmentUpload": false;
  "connectparticipant:CreateParticipantConnection": false;
  "connectparticipant:DescribeView": false;
  "connectparticipant:DisconnectParticipant": false;
  "connectparticipant:GetAttachment": false;
  "connectparticipant:GetAuthenticationUrl": false;
  "connectparticipant:GetTranscript": false;
  "connectparticipant:SendEvent": false;
  "connectparticipant:SendMessage": false;
  "connectparticipant:StartAttachmentUpload": false;
  "connectcases:BatchGetCaseRule": false;
  "connectcases:BatchGetField": false;
  "connectcases:BatchPutFieldOptions": false;
  "connectcases:CreateCase": false;
  "connectcases:CreateCaseRule": false;
  "connectcases:CreateDomain": false;
  "connectcases:CreateField": false;
  "connectcases:CreateLayout": false;
  "connectcases:CreateRelatedItem": false;
  "connectcases:CreateTemplate": false;
  "connectcases:DeleteCase": false;
  "connectcases:DeleteCaseRule": false;
  "connectcases:DeleteDomain": false;
  "connectcases:DeleteField": false;
  "connectcases:DeleteLayout": false;
  "connectcases:DeleteRelatedItem": false;
  "connectcases:DeleteTemplate": false;
  "connectcases:GetCase": false;
  "connectcases:GetCaseAuditEvents": false;
  "connectcases:GetCaseEventConfiguration": false;
  "connectcases:GetDomain": false;
  "connectcases:GetLayout": false;
  "connectcases:GetTemplate": false;
  "connectcases:ListCaseRules": false;
  "connectcases:ListCasesForContact": false;
  "connectcases:ListDomains": false;
  "connectcases:ListFieldOptions": false;
  "connectcases:ListFields": false;
  "connectcases:ListLayouts": false;
  "connectcases:ListTagsForResource": false;
  "connectcases:ListTemplates": false;
  "connectcases:PutCaseEventConfiguration": false;
  "connectcases:SearchAllRelatedItems": false;
  "connectcases:SearchCases": false;
  "connectcases:SearchRelatedItems": false;
  "connectcases:TagResource": false;
  "connectcases:UntagResource": true;
  "connectcases:UpdateCase": false;
  "connectcases:UpdateCaseRule": false;
  "connectcases:UpdateField": false;
  "connectcases:UpdateLayout": false;
  "connectcases:UpdateRelatedItem": false;
  "connectcases:UpdateTemplate": false;
  "connectcampaigns:CreateCampaign": false;
  "connectcampaigns:DeleteCampaign": false;
  "connectcampaigns:DeleteConnectInstanceConfig": false;
  "connectcampaigns:DeleteInstanceOnboardingJob": false;
  "connectcampaigns:DescribeCampaign": false;
  "connectcampaigns:GetCampaignState": false;
  "connectcampaigns:GetCampaignStateBatch": false;
  "connectcampaigns:GetConnectInstanceConfig": false;
  "connectcampaigns:GetInstanceOnboardingJobStatus": false;
  "connectcampaigns:ListCampaigns": false;
  "connectcampaigns:ListTagsForResource": false;
  "connectcampaigns:PauseCampaign": false;
  "connectcampaigns:PutDialRequestBatch": false;
  "connectcampaigns:ResumeCampaign": false;
  "connectcampaigns:StartCampaign": false;
  "connectcampaigns:StartInstanceOnboardingJob": false;
  "connectcampaigns:StopCampaign": false;
  "connectcampaigns:TagResource": false;
  "connectcampaigns:UntagResource": true;
  "connectcampaigns:UpdateCampaignDialerConfig": false;
  "connectcampaigns:UpdateCampaignName": false;
  "connectcampaigns:UpdateCampaignOutboundCallConfig": false;
  "connectcampaignsv2:CreateCampaign": false;
  "connectcampaignsv2:DeleteCampaign": false;
  "connectcampaignsv2:DeleteCampaignChannelSubtypeConfig": true;
  "connectcampaignsv2:DeleteCampaignCommunicationLimits": true;
  "connectcampaignsv2:DeleteCampaignCommunicationTime": true;
  "connectcampaignsv2:DeleteCampaignEntryLimits": false;
  "connectcampaignsv2:DeleteConnectInstanceConfig": false;
  "connectcampaignsv2:DeleteConnectInstanceIntegration": false;
  "connectcampaignsv2:DeleteInstanceOnboardingJob": false;
  "connectcampaignsv2:DescribeCampaign": false;
  "connectcampaignsv2:GetCampaignState": false;
  "connectcampaignsv2:GetCampaignStateBatch": false;
  "connectcampaignsv2:GetConnectInstanceConfig": false;
  "connectcampaignsv2:GetInstanceCommunicationLimits": false;
  "connectcampaignsv2:GetInstanceOnboardingJobStatus": false;
  "connectcampaignsv2:ListCampaigns": false;
  "connectcampaignsv2:ListConnectInstanceIntegrations": false;
  "connectcampaignsv2:ListTagsForResource": false;
  "connectcampaignsv2:PauseCampaign": false;
  "connectcampaignsv2:PutConnectInstanceIntegration": false;
  "connectcampaignsv2:PutInstanceCommunicationLimits": false;
  "connectcampaignsv2:PutOutboundRequestBatch": false;
  "connectcampaignsv2:PutProfileOutboundRequestBatch": false;
  "connectcampaignsv2:ResumeCampaign": false;
  "connectcampaignsv2:StartCampaign": false;
  "connectcampaignsv2:StartInstanceOnboardingJob": false;
  "connectcampaignsv2:StopCampaign": false;
  "connectcampaignsv2:TagResource": false;
  "connectcampaignsv2:UntagResource": true;
  "connectcampaignsv2:UpdateCampaignChannelSubtypeConfig": false;
  "connectcampaignsv2:UpdateCampaignCommunicationLimits": false;
  "connectcampaignsv2:UpdateCampaignCommunicationTime": false;
  "connectcampaignsv2:UpdateCampaignEntryLimits": false;
  "connectcampaignsv2:UpdateCampaignFlowAssociation": false;
  "connectcampaignsv2:UpdateCampaignName": false;
  "connectcampaignsv2:UpdateCampaignSchedule": false;
  "connectcampaignsv2:UpdateCampaignSource": false;
  "connect-contact-lens:ListRealtimeContactAnalysisSegments": false;
  "connecthealth:ActivateSubscription": false;
  "connecthealth:CreateDomain": false;
  "connecthealth:CreateSubscription": false;
  "connecthealth:DeactivateSubscription": false;
  "connecthealth:DeleteDomain": false;
  "connecthealth:GetDomain": false;
  "connecthealth:GetMedicalScribeListeningSession": false;
  "connecthealth:GetPatientInsightsJob": false;
  "connecthealth:GetSubscription": false;
  "connecthealth:ListDomains": false;
  "connecthealth:ListSubscriptions": false;
  "connecthealth:ListTagsForResource": false;
  "connecthealth:StartMedicalScribeListeningSession": false;
  "connecthealth:StartPatientInsightsJob": false;
  "connecthealth:TagResource": false;
  "connecthealth:UntagResource": true;
  "customer-profiles:AddProfileKey": false;
  "customer-profiles:BatchGetCalculatedAttributeForProfile": false;
  "customer-profiles:BatchGetProfile": false;
  "customer-profiles:BatchPutProfileObject": false;
  "customer-profiles:CreateCalculatedAttributeDefinition": false;
  "customer-profiles:CreateDomain": false;
  "customer-profiles:CreateDomainLayout": false;
  "customer-profiles:CreateEventStream": false;
  "customer-profiles:CreateEventTrigger": false;
  "customer-profiles:CreateIntegrationWorkflow": false;
  "customer-profiles:CreateProfile": false;
  "customer-profiles:CreateRecommender": false;
  "customer-profiles:CreateRecommenderFilter": false;
  "customer-profiles:CreateRecommenderSchema": false;
  "customer-profiles:CreateSegmentDefinition": false;
  "customer-profiles:CreateSegmentEstimate": false;
  "customer-profiles:CreateSegmentSnapshot": false;
  "customer-profiles:CreateUploadJob": false;
  "customer-profiles:DeleteCalculatedAttributeDefinition": false;
  "customer-profiles:DeleteDomain": false;
  "customer-profiles:DeleteDomainLayout": false;
  "customer-profiles:DeleteDomainObjectType": false;
  "customer-profiles:DeleteEventStream": false;
  "customer-profiles:DeleteEventTrigger": false;
  "customer-profiles:DeleteIntegration": false;
  "customer-profiles:DeleteProfile": false;
  "customer-profiles:DeleteProfileKey": false;
  "customer-profiles:DeleteProfileObject": false;
  "customer-profiles:DeleteProfileObjectType": false;
  "customer-profiles:DeleteRecommender": false;
  "customer-profiles:DeleteRecommenderFilter": false;
  "customer-profiles:DeleteRecommenderSchema": false;
  "customer-profiles:DeleteSegmentDefinition": false;
  "customer-profiles:DeleteWorkflow": false;
  "customer-profiles:DetectProfileObjectType": false;
  "customer-profiles:GetAutoMergingPreview": false;
  "customer-profiles:GetCalculatedAttributeDefinition": false;
  "customer-profiles:GetCalculatedAttributeForProfile": false;
  "customer-profiles:GetDomain": false;
  "customer-profiles:GetDomainLayout": false;
  "customer-profiles:GetDomainObjectType": false;
  "customer-profiles:GetEventStream": false;
  "customer-profiles:GetEventTrigger": false;
  "customer-profiles:GetIdentityResolutionJob": false;
  "customer-profiles:GetIntegration": false;
  "customer-profiles:GetMatches": false;
  "customer-profiles:GetObjectTypeAttributeStatistics": false;
  "customer-profiles:GetProfileHistoryRecord": false;
  "customer-profiles:GetProfileObjectType": false;
  "customer-profiles:GetProfileObjectTypeTemplate": false;
  "customer-profiles:GetProfileRecommendations": false;
  "customer-profiles:GetRecommender": false;
  "customer-profiles:GetRecommenderFilter": false;
  "customer-profiles:GetRecommenderSchema": false;
  "customer-profiles:GetSegmentDefinition": false;
  "customer-profiles:GetSegmentEstimate": false;
  "customer-profiles:GetSegmentMembership": false;
  "customer-profiles:GetSegmentSnapshot": false;
  "customer-profiles:GetSimilarProfiles": false;
  "customer-profiles:GetUploadJob": false;
  "customer-profiles:GetUploadJobPath": false;
  "customer-profiles:GetWorkflow": false;
  "customer-profiles:GetWorkflowSteps": false;
  "customer-profiles:ListAccountIntegrations": false;
  "customer-profiles:ListCalculatedAttributeDefinitions": false;
  "customer-profiles:ListCalculatedAttributesForProfile": false;
  "customer-profiles:ListDomainLayouts": false;
  "customer-profiles:ListDomainObjectTypes": false;
  "customer-profiles:ListDomains": false;
  "customer-profiles:ListEventStreams": false;
  "customer-profiles:ListEventTriggers": false;
  "customer-profiles:ListIdentityResolutionJobs": false;
  "customer-profiles:ListIntegrations": false;
  "customer-profiles:ListObjectTypeAttributeValues": false;
  "customer-profiles:ListObjectTypeAttributes": false;
  "customer-profiles:ListProfileAttributeValues": false;
  "customer-profiles:ListProfileHistoryRecords": false;
  "customer-profiles:ListProfileObjectTypeTemplates": false;
  "customer-profiles:ListProfileObjectTypes": false;
  "customer-profiles:ListProfileObjects": false;
  "customer-profiles:ListRecommenderFilters": false;
  "customer-profiles:ListRecommenderRecipes": false;
  "customer-profiles:ListRecommenderSchemas": false;
  "customer-profiles:ListRecommenders": false;
  "customer-profiles:ListRuleBasedMatches": false;
  "customer-profiles:ListSegmentDefinitions": false;
  "customer-profiles:ListTagsForResource": false;
  "customer-profiles:ListUploadJobs": false;
  "customer-profiles:ListWorkflows": false;
  "customer-profiles:MergeProfiles": false;
  "customer-profiles:PutDomainObjectType": false;
  "customer-profiles:PutIntegration": false;
  "customer-profiles:PutProfileObject": false;
  "customer-profiles:PutProfileObjectType": false;
  "customer-profiles:SearchProfiles": false;
  "customer-profiles:StartRecommender": false;
  "customer-profiles:StartUploadJob": false;
  "customer-profiles:StopRecommender": false;
  "customer-profiles:StopUploadJob": false;
  "customer-profiles:TagResource": false;
  "customer-profiles:UntagResource": true;
  "customer-profiles:UpdateCalculatedAttributeDefinition": false;
  "customer-profiles:UpdateDomain": false;
  "customer-profiles:UpdateDomainLayout": false;
  "customer-profiles:UpdateEventTrigger": false;
  "customer-profiles:UpdateProfile": false;
  "customer-profiles:UpdateRecommender": false;
  "qconnect:ActivateMessageTemplate": false;
  "qconnect:CreateAIAgent": false;
  "qconnect:CreateAIAgentVersion": false;
  "qconnect:CreateAIGuardrail": false;
  "qconnect:CreateAIGuardrailVersion": false;
  "qconnect:CreateAIPrompt": false;
  "qconnect:CreateAIPromptVersion": false;
  "qconnect:CreateAssistant": false;
  "qconnect:CreateAssistantAssociation": false;
  "qconnect:CreateContent": false;
  "qconnect:CreateContentAssociation": false;
  "qconnect:CreateKnowledgeBase": false;
  "qconnect:CreateMessageTemplate": false;
  "qconnect:CreateMessageTemplateAttachment": false;
  "qconnect:CreateMessageTemplateVersion": false;
  "qconnect:CreateQuickResponse": false;
  "qconnect:CreateSession": false;
  "qconnect:DeactivateMessageTemplate": false;
  "qconnect:DeleteAIAgent": false;
  "qconnect:DeleteAIAgentVersion": false;
  "qconnect:DeleteAIGuardrail": false;
  "qconnect:DeleteAIGuardrailVersion": false;
  "qconnect:DeleteAIPrompt": false;
  "qconnect:DeleteAIPromptVersion": false;
  "qconnect:DeleteAssistant": false;
  "qconnect:DeleteAssistantAssociation": false;
  "qconnect:DeleteContent": false;
  "qconnect:DeleteContentAssociation": false;
  "qconnect:DeleteImportJob": false;
  "qconnect:DeleteKnowledgeBase": false;
  "qconnect:DeleteMessageTemplate": false;
  "qconnect:DeleteMessageTemplateAttachment": false;
  "qconnect:DeleteQuickResponse": false;
  "qconnect:GetAIAgent": false;
  "qconnect:GetAIGuardrail": false;
  "qconnect:GetAIPrompt": false;
  "qconnect:GetAssistant": false;
  "qconnect:GetAssistantAssociation": false;
  "qconnect:GetContent": false;
  "qconnect:GetContentAssociation": false;
  "qconnect:GetContentSummary": false;
  "qconnect:GetImportJob": false;
  "qconnect:GetKnowledgeBase": false;
  "qconnect:GetMessageTemplate": false;
  "qconnect:GetNextMessage": true;
  "qconnect:GetQuickResponse": false;
  "qconnect:GetRecommendations": false;
  "qconnect:GetSession": false;
  "qconnect:ListAIAgentVersions": false;
  "qconnect:ListAIAgents": false;
  "qconnect:ListAIGuardrailVersions": false;
  "qconnect:ListAIGuardrails": false;
  "qconnect:ListAIPromptVersions": false;
  "qconnect:ListAIPrompts": false;
  "qconnect:ListAssistantAssociations": false;
  "qconnect:ListAssistants": false;
  "qconnect:ListContentAssociations": false;
  "qconnect:ListContents": false;
  "qconnect:ListImportJobs": false;
  "qconnect:ListKnowledgeBases": false;
  "qconnect:ListMessageTemplateVersions": false;
  "qconnect:ListMessageTemplates": false;
  "qconnect:ListMessages": false;
  "qconnect:ListModels": false;
  "qconnect:ListQuickResponses": false;
  "qconnect:ListSpans": false;
  "qconnect:ListTagsForResource": false;
  "qconnect:NotifyRecommendationsReceived": false;
  "qconnect:PutFeedback": false;
  "qconnect:QueryAssistant": false;
  "qconnect:RemoveAssistantAIAgent": true;
  "qconnect:RemoveKnowledgeBaseTemplateUri": false;
  "qconnect:RenderMessageTemplate": false;
  "qconnect:Retrieve": false;
  "qconnect:SearchContent": false;
  "qconnect:SearchMessageTemplates": false;
  "qconnect:SearchQuickResponses": false;
  "qconnect:SearchSessions": false;
  "qconnect:SendMessage": false;
  "qconnect:StartContentUpload": false;
  "qconnect:StartImportJob": false;
  "qconnect:TagResource": false;
  "qconnect:UntagResource": true;
  "qconnect:UpdateAIAgent": false;
  "qconnect:UpdateAIGuardrail": false;
  "qconnect:UpdateAIPrompt": false;
  "qconnect:UpdateAssistantAIAgent": false;
  "qconnect:UpdateContent": false;
  "qconnect:UpdateKnowledgeBaseTemplateUri": false;
  "qconnect:UpdateMessageTemplate": false;
  "qconnect:UpdateMessageTemplateMetadata": false;
  "qconnect:UpdateQuickResponse": false;
  "qconnect:UpdateSession": false;
  "qconnect:UpdateSessionData": false;
  "wisdom:CreateAssistant": false;
  "wisdom:CreateAssistantAssociation": false;
  "wisdom:CreateContent": false;
  "wisdom:CreateKnowledgeBase": false;
  "wisdom:CreateQuickResponse": false;
  "wisdom:CreateSession": false;
  "wisdom:DeleteAssistant": false;
  "wisdom:DeleteAssistantAssociation": false;
  "wisdom:DeleteContent": false;
  "wisdom:DeleteImportJob": false;
  "wisdom:DeleteKnowledgeBase": false;
  "wisdom:DeleteQuickResponse": false;
  "wisdom:GetAssistant": false;
  "wisdom:GetAssistantAssociation": false;
  "wisdom:GetContent": false;
  "wisdom:GetContentSummary": false;
  "wisdom:GetImportJob": false;
  "wisdom:GetKnowledgeBase": false;
  "wisdom:GetQuickResponse": false;
  "wisdom:GetRecommendations": false;
  "wisdom:GetSession": false;
  "wisdom:ListAssistantAssociations": false;
  "wisdom:ListAssistants": false;
  "wisdom:ListContents": false;
  "wisdom:ListImportJobs": false;
  "wisdom:ListKnowledgeBases": false;
  "wisdom:ListQuickResponses": false;
  "wisdom:ListTagsForResource": false;
  "wisdom:NotifyRecommendationsReceived": false;
  "wisdom:QueryAssistant": false;
  "wisdom:RemoveKnowledgeBaseTemplateUri": false;
  "wisdom:SearchContent": false;
  "wisdom:SearchQuickResponses": false;
  "wisdom:SearchSessions": false;
  "wisdom:StartContentUpload": false;
  "wisdom:StartImportJob": false;
  "wisdom:TagResource": false;
  "wisdom:UntagResource": true;
  "wisdom:UpdateContent": false;
  "wisdom:UpdateKnowledgeBaseTemplateUri": false;
  "wisdom:UpdateQuickResponse": false;
}

export interface AmazonConnectFullApiOperationRequestBodyMap {
  "appintegrations:CreateApplication": {
  Name: string;
  Namespace: string;
  Description?: string;
  ApplicationSourceConfig: AmazonConnectFullApiSchemaApplicationSourceConfig;
  Subscriptions?: AmazonConnectFullApiSchemaSubscriptionList;
  Publications?: AmazonConnectFullApiSchemaPublicationList;
  ClientToken?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap;
  Permissions?: AmazonConnectFullApiSchemaPermissionList;
  IsService?: boolean;
  InitializationTimeout?: number;
  ApplicationConfig?: AmazonConnectFullApiSchemaApplicationConfig;
  IframeConfig?: AmazonConnectFullApiSchemaIframeConfig;
  ApplicationType?: AmazonConnectFullApiSchemaApplicationType;
};
  "appintegrations:CreateDataIntegration": {
  Name: string;
  Description?: string;
  KmsKey: string;
  SourceURI?: string;
  ScheduleConfig?: AmazonConnectFullApiSchemaScheduleConfiguration;
  Tags?: AmazonConnectFullApiSchemaTagMap;
  ClientToken?: string;
  FileConfiguration?: AmazonConnectFullApiSchemaFileConfiguration;
  ObjectConfiguration?: AmazonConnectFullApiSchemaObjectConfiguration;
};
  "appintegrations:CreateDataIntegrationAssociation": {
  ClientId?: string;
  ObjectConfiguration?: AmazonConnectFullApiSchemaObjectConfiguration;
  DestinationURI?: string;
  ClientAssociationMetadata?: AmazonConnectFullApiSchemaClientAssociationMetadata;
  ClientToken?: string;
  ExecutionConfiguration?: AmazonConnectFullApiSchemaExecutionConfiguration;
};
  "appintegrations:CreateEventIntegration": {
  Name: string;
  Description?: string;
  EventFilter: AmazonConnectFullApiSchemaEventFilter;
  EventBridgeBus: string;
  ClientToken?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap;
};
  "appintegrations:DeleteApplication": never;
  "appintegrations:DeleteDataIntegration": never;
  "appintegrations:DeleteEventIntegration": never;
  "appintegrations:GetApplication": never;
  "appintegrations:GetDataIntegration": never;
  "appintegrations:GetEventIntegration": never;
  "appintegrations:ListApplicationAssociations": never;
  "appintegrations:ListApplications": never;
  "appintegrations:ListDataIntegrationAssociations": never;
  "appintegrations:ListDataIntegrations": never;
  "appintegrations:ListEventIntegrationAssociations": never;
  "appintegrations:ListEventIntegrations": never;
  "appintegrations:ListTagsForResource": never;
  "appintegrations:TagResource": {
  tags: AmazonConnectFullApiSchemaTagMap;
};
  "appintegrations:UntagResource": never;
  "appintegrations:UpdateApplication": {
  Name?: string;
  Description?: string;
  ApplicationSourceConfig?: AmazonConnectFullApiSchemaApplicationSourceConfig;
  Subscriptions?: AmazonConnectFullApiSchemaSubscriptionList;
  Publications?: AmazonConnectFullApiSchemaPublicationList;
  Permissions?: AmazonConnectFullApiSchemaPermissionList;
  IsService?: boolean;
  InitializationTimeout?: number;
  ApplicationConfig?: AmazonConnectFullApiSchemaApplicationConfig;
  IframeConfig?: AmazonConnectFullApiSchemaIframeConfig;
  ApplicationType?: AmazonConnectFullApiSchemaApplicationType;
};
  "appintegrations:UpdateDataIntegration": {
  Name?: string;
  Description?: string;
};
  "appintegrations:UpdateDataIntegrationAssociation": {
  ExecutionConfiguration: AmazonConnectFullApiSchemaExecutionConfiguration;
};
  "appintegrations:UpdateEventIntegration": {
  Description?: string;
};
  "connect:ActivateEvaluationForm": {
  EvaluationFormVersion: number;
};
  "connect:AssociateAnalyticsDataSet": {
  DataSetId: string;
  TargetAccountId?: string;
};
  "connect:AssociateApprovedOrigin": {
  Origin: string;
  ClientToken?: string;
};
  "connect:AssociateBot": {
  LexBot?: AmazonConnectFullApiSchemaLexBot;
  LexV2Bot?: AmazonConnectFullApiSchemaLexV2Bot;
  ClientToken?: string;
};
  "connect:AssociateContactWithUser": {
  UserId: string;
};
  "connect:AssociateDefaultVocabulary": {
  VocabularyId?: string;
};
  "connect:AssociateEmailAddressAlias": {
  AliasConfiguration: AmazonConnectFullApiSchemaAliasConfiguration;
  ClientToken?: string;
};
  "connect:AssociateFlow": {
  ResourceId: string;
  FlowId: string;
  ResourceType: AmazonConnectFullApiSchemaFlowAssociationResourceType;
};
  "connect:AssociateHoursOfOperations": {
  ParentHoursOfOperationConfigs: AmazonConnectFullApiSchemaParentHoursOfOperationConfigList;
};
  "connect:AssociateInstanceStorageConfig": {
  ResourceType: AmazonConnectFullApiSchemaInstanceStorageResourceType;
  StorageConfig: AmazonConnectFullApiSchemaInstanceStorageConfig;
  ClientToken?: string;
};
  "connect:AssociateLambdaFunction": {
  FunctionArn: string;
  ClientToken?: string;
};
  "connect:AssociateLexBot": {
  LexBot: AmazonConnectFullApiSchemaLexBot;
  ClientToken?: string;
};
  "connect:AssociatePhoneNumberContactFlow": {
  InstanceId: string;
  ContactFlowId: string;
};
  "connect:AssociateQueueEmailAddresses": {
  EmailAddressesConfig: AmazonConnectFullApiSchemaEmailAddressConfigList;
  ClientToken?: string;
};
  "connect:AssociateQueueQuickConnects": {
  QuickConnectIds: AmazonConnectFullApiSchemaQuickConnectsList;
};
  "connect:AssociateRoutingProfileQueues": {
  QueueConfigs?: AmazonConnectFullApiSchemaRoutingProfileQueueConfigList;
  ManualAssignmentQueueConfigs?: AmazonConnectFullApiSchemaRoutingProfileManualAssignmentQueueConfigList;
};
  "connect:AssociateSecurityKey": {
  Key: string;
  ClientToken?: string;
};
  "connect:AssociateSecurityProfiles": {
  SecurityProfiles: AmazonConnectFullApiSchemaSecurityProfiles;
  EntityType: AmazonConnectFullApiSchemaEntityType;
  EntityArn: string;
};
  "connect:AssociateTrafficDistributionGroupUser": {
  UserId: string;
  InstanceId: string;
};
  "connect:AssociateUserProficiencies": {
  UserProficiencies: AmazonConnectFullApiSchemaUserProficiencyList;
};
  "connect:AssociateWorkspace": {
  ResourceArns: AmazonConnectFullApiSchemaWorkspaceResourceArnList;
};
  "connect:BatchAssociateAnalyticsDataSet": {
  DataSetIds: AmazonConnectFullApiSchemaDataSetIds;
  TargetAccountId?: string;
};
  "connect:BatchCreateDataTableValue": {
  Values: AmazonConnectFullApiSchemaDataTableValueList;
};
  "connect:BatchDeleteDataTableValue": {
  Values: AmazonConnectFullApiSchemaDataTableDeleteValueIdentifierList;
};
  "connect:BatchDescribeDataTableValue": {
  Values: AmazonConnectFullApiSchemaDataTableValueIdentifierList;
};
  "connect:BatchDisassociateAnalyticsDataSet": {
  DataSetIds: AmazonConnectFullApiSchemaDataSetIds;
  TargetAccountId?: string;
};
  "connect:BatchGetAttachedFileMetadata": {
  FileIds: AmazonConnectFullApiSchemaFileIdList;
};
  "connect:BatchGetFlowAssociation": {
  ResourceIds: AmazonConnectFullApiSchemaResourceArnListMaxLimit100;
  ResourceType?: AmazonConnectFullApiSchemaListFlowAssociationResourceType;
};
  "connect:BatchPutContact": {
  ClientToken?: string;
  ContactDataRequestList: AmazonConnectFullApiSchemaContactDataRequestList;
};
  "connect:BatchUpdateDataTableValue": {
  Values: AmazonConnectFullApiSchemaDataTableValueList;
};
  "connect:ClaimPhoneNumber": {
  TargetArn?: string;
  InstanceId?: string;
  PhoneNumber: string;
  PhoneNumberDescription?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  ClientToken?: string;
};
  "connect:CompleteAttachedFileUpload": never;
  "connect:CreateAgentStatus": {
  Name: string;
  Description?: string;
  State: AmazonConnectFullApiSchemaAgentStatusState;
  DisplayOrder?: number;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};
  "connect:CreateContact": {
  InstanceId: string;
  ClientToken?: string;
  RelatedContactId?: string;
  Attributes?: AmazonConnectFullApiSchemaAttributes;
  References?: AmazonConnectFullApiSchemaContactReferences;
  Channel: AmazonConnectFullApiSchemaChannel;
  InitiationMethod: AmazonConnectFullApiSchemaContactInitiationMethod;
  ExpiryDurationInMinutes?: number;
  UserInfo?: AmazonConnectFullApiSchemaUserInfo;
  InitiateAs?: AmazonConnectFullApiSchemaInitiateAs;
  Name?: string;
  Description?: string;
  SegmentAttributes?: AmazonConnectFullApiSchemaSegmentAttributes;
  PreviousContactId?: string;
};
  "connect:CreateContactFlow": {
  Name: string;
  Type: AmazonConnectFullApiSchemaContactFlowType;
  Description?: string;
  Content: string;
  Status?: AmazonConnectFullApiSchemaContactFlowStatus;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};
  "connect:CreateContactFlowModule": {
  Name: string;
  Description?: string;
  Content: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  ClientToken?: string;
  Settings?: string;
  ExternalInvocationConfiguration?: AmazonConnectFullApiSchemaExternalInvocationConfiguration;
};
  "connect:CreateContactFlowModuleAlias": {
  Description?: string;
  ContactFlowModuleVersion: number;
  AliasName: string;
};
  "connect:CreateContactFlowModuleVersion": {
  Description?: string;
  FlowModuleContentSha256?: string;
};
  "connect:CreateContactFlowVersion": {
  Description?: string;
  FlowContentSha256?: string;
  ContactFlowVersion?: number;
  LastModifiedTime?: string;
  LastModifiedRegion?: string;
};
  "connect:CreateDataTable": {
  Name: string;
  Description?: string;
  TimeZone: string;
  ValueLockLevel: AmazonConnectFullApiSchemaDataTableLockLevel;
  Status: AmazonConnectFullApiSchemaDataTableStatus;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};
  "connect:CreateDataTableAttribute": {
  Name: string;
  ValueType: AmazonConnectFullApiSchemaDataTableAttributeValueType;
  Description?: string;
  Primary?: boolean;
  Validation?: AmazonConnectFullApiSchemaValidation;
};
  "connect:CreateEmailAddress": {
  Description?: string;
  EmailAddress: string;
  DisplayName?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  ClientToken?: string;
};
  "connect:CreateEvaluationForm": {
  Title: string;
  Description?: string;
  Items: AmazonConnectFullApiSchemaEvaluationFormItemsList;
  ScoringStrategy?: AmazonConnectFullApiSchemaEvaluationFormScoringStrategy;
  AutoEvaluationConfiguration?: AmazonConnectFullApiSchemaEvaluationFormAutoEvaluationConfiguration;
  ClientToken?: string;
  AsDraft?: boolean;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  ReviewConfiguration?: AmazonConnectFullApiSchemaEvaluationReviewConfiguration;
  TargetConfiguration?: AmazonConnectFullApiSchemaEvaluationFormTargetConfiguration;
  LanguageConfiguration?: AmazonConnectFullApiSchemaEvaluationFormLanguageConfiguration;
};
  "connect:CreateHoursOfOperation": {
  Name: string;
  Description?: string;
  TimeZone: string;
  Config: AmazonConnectFullApiSchemaHoursOfOperationConfigList;
  ParentHoursOfOperationConfigs?: AmazonConnectFullApiSchemaParentHoursOfOperationConfigList;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};
  "connect:CreateHoursOfOperationOverride": {
  Name: string;
  Description?: string;
  Config: AmazonConnectFullApiSchemaHoursOfOperationOverrideConfigList;
  EffectiveFrom: string;
  EffectiveTill: string;
  RecurrenceConfig?: AmazonConnectFullApiSchemaRecurrenceConfig;
  OverrideType?: AmazonConnectFullApiSchemaOverrideType;
};
  "connect:CreateInstance": {
  ClientToken?: string;
  IdentityManagementType: AmazonConnectFullApiSchemaDirectoryType;
  InstanceAlias?: string;
  DirectoryId?: string;
  InboundCallsEnabled: boolean;
  OutboundCallsEnabled: boolean;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};
  "connect:CreateIntegrationAssociation": {
  IntegrationType: AmazonConnectFullApiSchemaIntegrationType;
  IntegrationArn: string;
  SourceApplicationUrl?: string;
  SourceApplicationName?: string;
  SourceType?: AmazonConnectFullApiSchemaSourceType;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};
  "connect:CreateNotification": {
  ExpiresAt?: string;
  Recipients: AmazonConnectFullApiSchemaRecipientList;
  Priority?: AmazonConnectFullApiSchemaConfigurableNotificationPriority;
  Content: AmazonConnectFullApiSchemaNotificationContent;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  PredefinedNotificationId?: string;
  ClientToken?: string;
};
  "connect:CreateParticipant": {
  InstanceId: string;
  ContactId: string;
  ClientToken?: string;
  ParticipantDetails: AmazonConnectFullApiSchemaParticipantDetailsToAdd;
};
  "connect:CreatePersistentContactAssociation": {
  RehydrationType: AmazonConnectFullApiSchemaRehydrationType;
  SourceContactId: string;
  ClientToken?: string;
};
  "connect:CreatePredefinedAttribute": {
  Name: string;
  Values?: AmazonConnectFullApiSchemaPredefinedAttributeValues;
  Purposes?: AmazonConnectFullApiSchemaPredefinedAttributePurposeNameList;
  AttributeConfiguration?: AmazonConnectFullApiSchemaInputPredefinedAttributeConfiguration;
};
  "connect:CreatePrompt": {
  Name: string;
  Description?: string;
  S3Uri: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};
  "connect:CreatePushNotificationRegistration": {
  ClientToken?: string;
  PinpointAppArn: string;
  DeviceToken: string;
  DeviceType: AmazonConnectFullApiSchemaDeviceType;
  ContactConfiguration: AmazonConnectFullApiSchemaContactConfiguration;
};
  "connect:CreateQueue": {
  Name: string;
  Description?: string;
  OutboundCallerConfig?: AmazonConnectFullApiSchemaOutboundCallerConfig;
  OutboundEmailConfig?: AmazonConnectFullApiSchemaOutboundEmailConfig;
  HoursOfOperationId: string;
  MaxContacts?: number;
  QuickConnectIds?: AmazonConnectFullApiSchemaQuickConnectsList;
  EmailAddressesConfig?: AmazonConnectFullApiSchemaEmailAddressConfigList;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};
  "connect:CreateQuickConnect": {
  Name: string;
  Description?: string;
  QuickConnectConfig: AmazonConnectFullApiSchemaQuickConnectConfig;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};
  "connect:CreateRoutingProfile": {
  Name: string;
  Description: string;
  DefaultOutboundQueueId: string;
  QueueConfigs?: AmazonConnectFullApiSchemaRoutingProfileQueueConfigList;
  ManualAssignmentQueueConfigs?: AmazonConnectFullApiSchemaRoutingProfileManualAssignmentQueueConfigList;
  MediaConcurrencies: AmazonConnectFullApiSchemaMediaConcurrencies;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  AgentAvailabilityTimer?: AmazonConnectFullApiSchemaAgentAvailabilityTimer;
};
  "connect:CreateRule": {
  Name: string;
  TriggerEventSource: AmazonConnectFullApiSchemaRuleTriggerEventSource;
  Function: string;
  Actions: AmazonConnectFullApiSchemaRuleActions;
  PublishStatus: AmazonConnectFullApiSchemaRulePublishStatus;
  ClientToken?: string;
};
  "connect:CreateSecurityProfile": {
  SecurityProfileName: string;
  Description?: string;
  Permissions?: AmazonConnectFullApiSchemaPermissionsList;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  AllowedAccessControlTags?: AmazonConnectFullApiSchemaAllowedAccessControlTags;
  TagRestrictedResources?: AmazonConnectFullApiSchemaTagRestrictedResourceList;
  Applications?: AmazonConnectFullApiSchemaApplications;
  HierarchyRestrictedResources?: AmazonConnectFullApiSchemaHierarchyRestrictedResourceList;
  AllowedAccessControlHierarchyGroupId?: string;
  AllowedFlowModules?: AmazonConnectFullApiSchemaAllowedFlowModules;
  GranularAccessControlConfiguration?: AmazonConnectFullApiSchemaGranularAccessControlConfiguration;
};
  "connect:CreateTaskTemplate": {
  Name: string;
  Description?: string;
  ContactFlowId?: string;
  SelfAssignFlowId?: string;
  Constraints?: AmazonConnectFullApiSchemaTaskTemplateConstraints;
  Defaults?: AmazonConnectFullApiSchemaTaskTemplateDefaults;
  Status?: AmazonConnectFullApiSchemaTaskTemplateStatus;
  Fields: AmazonConnectFullApiSchemaTaskTemplateFields;
  ClientToken?: string;
};
  "connect:CreateTestCase": {
  Name: string;
  Description?: string;
  Content: string;
  EntryPoint?: AmazonConnectFullApiSchemaTestCaseEntryPoint;
  InitializationData?: string;
  Status?: AmazonConnectFullApiSchemaTestCaseStatus;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};
  "connect:CreateTrafficDistributionGroup": {
  Name: string;
  Description?: string;
  InstanceId: string;
  ClientToken?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};
  "connect:CreateUseCase": {
  UseCaseType: AmazonConnectFullApiSchemaUseCaseType;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};
  "connect:CreateUser": {
  Username: string;
  Password?: string;
  IdentityInfo?: AmazonConnectFullApiSchemaUserIdentityInfo;
  PhoneConfig?: AmazonConnectFullApiSchemaUserPhoneConfig;
  DirectoryUserId?: string;
  SecurityProfileIds: AmazonConnectFullApiSchemaSecurityProfileIds;
  RoutingProfileId: string;
  HierarchyGroupId?: string;
  AutoAcceptConfigs?: AmazonConnectFullApiSchemaAutoAcceptConfigs;
  AfterContactWorkConfigs?: AmazonConnectFullApiSchemaAfterContactWorkConfigs;
  PhoneNumberConfigs?: AmazonConnectFullApiSchemaPhoneNumberConfigs;
  PersistentConnectionConfigs?: AmazonConnectFullApiSchemaPersistentConnectionConfigs;
  VoiceEnhancementConfigs?: AmazonConnectFullApiSchemaVoiceEnhancementConfigs;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};
  "connect:CreateUserHierarchyGroup": {
  Name: string;
  ParentGroupId?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};
  "connect:CreateView": {
  ClientToken?: string;
  Status: AmazonConnectFullApiSchemaViewStatus;
  Content: AmazonConnectFullApiSchemaViewInputContent;
  Description?: string;
  Name: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};
  "connect:CreateViewVersion": {
  VersionDescription?: string;
  ViewContentSha256?: string;
};
  "connect:CreateVocabulary": {
  ClientToken?: string;
  VocabularyName: string;
  LanguageCode: AmazonConnectFullApiSchemaVocabularyLanguageCode;
  Content: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};
  "connect:CreateWorkspace": {
  Name: string;
  Description?: string;
  Theme?: AmazonConnectFullApiSchemaWorkspaceTheme;
  Title?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};
  "connect:CreateWorkspacePage": {
  ResourceArn: string;
  Page: string;
  Slug?: string;
  InputData?: string;
};
  "connect:DeactivateEvaluationForm": {
  EvaluationFormVersion: number;
};
  "connect:DeleteAttachedFile": never;
  "connect:DeleteContactEvaluation": never;
  "connect:DeleteContactFlow": never;
  "connect:DeleteContactFlowModule": never;
  "connect:DeleteContactFlowModuleAlias": never;
  "connect:DeleteContactFlowModuleVersion": never;
  "connect:DeleteContactFlowVersion": never;
  "connect:DeleteDataTable": never;
  "connect:DeleteDataTableAttribute": never;
  "connect:DeleteEmailAddress": never;
  "connect:DeleteEvaluationForm": never;
  "connect:DeleteHoursOfOperation": never;
  "connect:DeleteHoursOfOperationOverride": never;
  "connect:DeleteInstance": never;
  "connect:DeleteIntegrationAssociation": never;
  "connect:DeleteNotification": never;
  "connect:DeletePredefinedAttribute": never;
  "connect:DeletePrompt": never;
  "connect:DeletePushNotificationRegistration": never;
  "connect:DeleteQueue": never;
  "connect:DeleteQuickConnect": never;
  "connect:DeleteRoutingProfile": never;
  "connect:DeleteRule": never;
  "connect:DeleteSecurityProfile": never;
  "connect:DeleteTaskTemplate": never;
  "connect:DeleteTestCase": never;
  "connect:DeleteTrafficDistributionGroup": never;
  "connect:DeleteUseCase": never;
  "connect:DeleteUser": never;
  "connect:DeleteUserHierarchyGroup": never;
  "connect:DeleteView": never;
  "connect:DeleteViewVersion": never;
  "connect:DeleteVocabulary": never;
  "connect:DeleteWorkspace": never;
  "connect:DeleteWorkspaceMedia": never;
  "connect:DeleteWorkspacePage": never;
  "connect:DescribeAgentStatus": never;
  "connect:DescribeAttachedFilesConfiguration": never;
  "connect:DescribeAuthenticationProfile": never;
  "connect:DescribeContact": never;
  "connect:DescribeContactEvaluation": never;
  "connect:DescribeContactFlow": never;
  "connect:DescribeContactFlowModule": never;
  "connect:DescribeContactFlowModuleAlias": never;
  "connect:DescribeDataTable": never;
  "connect:DescribeDataTableAttribute": never;
  "connect:DescribeEmailAddress": never;
  "connect:DescribeEvaluationForm": never;
  "connect:DescribeHoursOfOperation": never;
  "connect:DescribeHoursOfOperationOverride": never;
  "connect:DescribeInstance": never;
  "connect:DescribeInstanceAttribute": never;
  "connect:DescribeInstanceStorageConfig": never;
  "connect:DescribeNotification": never;
  "connect:DescribePhoneNumber": never;
  "connect:DescribePredefinedAttribute": never;
  "connect:DescribePrompt": never;
  "connect:DescribeQueue": never;
  "connect:DescribeQuickConnect": never;
  "connect:DescribeRoutingProfile": never;
  "connect:DescribeRule": never;
  "connect:DescribeSecurityProfile": never;
  "connect:DescribeTestCase": never;
  "connect:DescribeTrafficDistributionGroup": never;
  "connect:DescribeUser": never;
  "connect:DescribeUserHierarchyGroup": never;
  "connect:DescribeUserHierarchyStructure": never;
  "connect:DescribeView": never;
  "connect:DescribeVocabulary": never;
  "connect:DescribeWorkspace": never;
  "connect:DisassociateAnalyticsDataSet": {
  DataSetId: string;
  TargetAccountId?: string;
};
  "connect:DisassociateApprovedOrigin": never;
  "connect:DisassociateBot": {
  LexBot?: AmazonConnectFullApiSchemaLexBot;
  LexV2Bot?: AmazonConnectFullApiSchemaLexV2Bot;
  ClientToken?: string;
};
  "connect:DisassociateEmailAddressAlias": {
  AliasConfiguration: AmazonConnectFullApiSchemaAliasConfiguration;
  ClientToken?: string;
};
  "connect:DisassociateFlow": never;
  "connect:DisassociateHoursOfOperations": {
  ParentHoursOfOperationIds: AmazonConnectFullApiSchemaParentHoursOfOperationIdList;
};
  "connect:DisassociateInstanceStorageConfig": never;
  "connect:DisassociateLambdaFunction": never;
  "connect:DisassociateLexBot": never;
  "connect:DisassociatePhoneNumberContactFlow": never;
  "connect:DisassociateQueueEmailAddresses": {
  EmailAddressesId: AmazonConnectFullApiSchemaEmailAddressIdList;
  ClientToken?: string;
};
  "connect:DisassociateQueueQuickConnects": {
  QuickConnectIds: AmazonConnectFullApiSchemaQuickConnectsList;
};
  "connect:DisassociateRoutingProfileQueues": {
  QueueReferences?: AmazonConnectFullApiSchemaRoutingProfileQueueReferenceList;
  ManualAssignmentQueueReferences?: AmazonConnectFullApiSchemaRoutingProfileQueueReferenceList;
};
  "connect:DisassociateSecurityKey": never;
  "connect:DisassociateSecurityProfiles": {
  SecurityProfiles: AmazonConnectFullApiSchemaSecurityProfiles;
  EntityType: AmazonConnectFullApiSchemaEntityType;
  EntityArn: string;
};
  "connect:DisassociateTrafficDistributionGroupUser": never;
  "connect:DisassociateUserProficiencies": {
  UserProficiencies: AmazonConnectFullApiSchemaUserProficiencyDisassociateList;
};
  "connect:DisassociateWorkspace": {
  ResourceArns: AmazonConnectFullApiSchemaWorkspaceResourceArnList;
};
  "connect:DismissUserContact": {
  ContactId: string;
};
  "connect:EvaluateDataTableValues": {
  Values: AmazonConnectFullApiSchemaDataTableValueEvaluationSetList;
  TimeZone?: string;
};
  "connect:GetAttachedFile": never;
  "connect:GetContactAttributes": never;
  "connect:GetContactMetrics": {
  InstanceId: string;
  ContactId: string;
  Metrics: AmazonConnectFullApiSchemaContactMetrics;
};
  "connect:GetCurrentMetricData": {
  Filters: AmazonConnectFullApiSchemaFilters;
  Groupings?: AmazonConnectFullApiSchemaGroupings;
  CurrentMetrics: AmazonConnectFullApiSchemaCurrentMetrics;
  NextToken?: string;
  MaxResults?: number;
  SortCriteria?: AmazonConnectFullApiSchemaCurrentMetricSortCriteriaMaxOne;
};
  "connect:GetCurrentUserData": {
  Filters: AmazonConnectFullApiSchemaUserDataFilters;
  NextToken?: string;
  MaxResults?: number;
};
  "connect:GetEffectiveHoursOfOperations": never;
  "connect:GetFederationToken": never;
  "connect:GetFlowAssociation": never;
  "connect:GetMetricData": {
  StartTime: string;
  EndTime: string;
  Filters: AmazonConnectFullApiSchemaFilters;
  Groupings?: AmazonConnectFullApiSchemaGroupings;
  HistoricalMetrics: AmazonConnectFullApiSchemaHistoricalMetrics;
  NextToken?: string;
  MaxResults?: number;
};
  "connect:GetMetricDataV2": {
  ResourceArn: string;
  StartTime: string;
  EndTime: string;
  Interval?: AmazonConnectFullApiSchemaIntervalDetails;
  Filters: AmazonConnectFullApiSchemaFiltersV2List;
  Groupings?: AmazonConnectFullApiSchemaGroupingsV2;
  Metrics: AmazonConnectFullApiSchemaMetricsV2;
  NextToken?: string;
  MaxResults?: number;
};
  "connect:GetPromptFile": never;
  "connect:GetTaskTemplate": never;
  "connect:GetTestCaseExecutionSummary": never;
  "connect:GetTrafficDistribution": never;
  "connect:ImportPhoneNumber": {
  InstanceId: string;
  SourcePhoneNumberArn: string;
  PhoneNumberDescription?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
  ClientToken?: string;
};
  "connect:ImportWorkspaceMedia": {
  MediaType: AmazonConnectFullApiSchemaMediaType;
  MediaSource: string;
};
  "connect:ListAgentStatuses": never;
  "connect:ListAnalyticsDataAssociations": never;
  "connect:ListAnalyticsDataLakeDataSets": never;
  "connect:ListApprovedOrigins": never;
  "connect:ListAssociatedContacts": never;
  "connect:ListAttachedFilesConfigurations": never;
  "connect:ListAuthenticationProfiles": never;
  "connect:ListBots": never;
  "connect:ListChildHoursOfOperations": never;
  "connect:ListContactEvaluations": never;
  "connect:ListContactFlowModuleAliases": never;
  "connect:ListContactFlowModuleVersions": never;
  "connect:ListContactFlowModules": never;
  "connect:ListContactFlowVersions": never;
  "connect:ListContactFlows": never;
  "connect:ListContactReferences": never;
  "connect:ListDataTableAttributes": {
  AttributeIds?: AmazonConnectFullApiSchemaAttributeIds;
};
  "connect:ListDataTablePrimaryValues": {
  RecordIds?: AmazonConnectFullApiSchemaRecordIds;
  PrimaryAttributeValues?: AmazonConnectFullApiSchemaPrimaryAttributeValueFilters;
};
  "connect:ListDataTableValues": {
  RecordIds?: AmazonConnectFullApiSchemaRecordIds;
  PrimaryAttributeValues?: AmazonConnectFullApiSchemaPrimaryAttributeValueFilters;
};
  "connect:ListDataTables": never;
  "connect:ListDefaultVocabularies": {
  LanguageCode?: AmazonConnectFullApiSchemaVocabularyLanguageCode;
  MaxResults?: number;
  NextToken?: string;
};
  "connect:ListEntitySecurityProfiles": {
  EntityType: AmazonConnectFullApiSchemaEntityType;
  EntityArn: string;
  NextToken?: string;
  MaxResults?: number;
};
  "connect:ListEvaluationFormVersions": never;
  "connect:ListEvaluationForms": never;
  "connect:ListFlowAssociations": never;
  "connect:ListHoursOfOperationOverrides": never;
  "connect:ListHoursOfOperations": never;
  "connect:ListInstanceAttributes": never;
  "connect:ListInstanceStorageConfigs": never;
  "connect:ListInstances": never;
  "connect:ListIntegrationAssociations": never;
  "connect:ListLambdaFunctions": never;
  "connect:ListLexBots": never;
  "connect:ListNotifications": never;
  "connect:ListPhoneNumbers": never;
  "connect:ListPhoneNumbersV2": {
  TargetArn?: string;
  InstanceId?: string;
  MaxResults?: number;
  NextToken?: string;
  PhoneNumberCountryCodes?: AmazonConnectFullApiSchemaPhoneNumberCountryCodes;
  PhoneNumberTypes?: AmazonConnectFullApiSchemaPhoneNumberTypes;
  PhoneNumberPrefix?: string;
};
  "connect:ListPredefinedAttributes": never;
  "connect:ListPrompts": never;
  "connect:ListQueueEmailAddresses": never;
  "connect:ListQueueQuickConnects": never;
  "connect:ListQueues": never;
  "connect:ListQuickConnects": never;
  "connect:ListRealtimeContactAnalysisSegmentsV2": {
  MaxResults?: number;
  NextToken?: string;
  OutputType: AmazonConnectFullApiSchemaRealTimeContactAnalysisOutputType;
  SegmentTypes: AmazonConnectFullApiSchemaRealTimeContactAnalysisSegmentTypes;
};
  "connect:ListRoutingProfileManualAssignmentQueues": never;
  "connect:ListRoutingProfileQueues": never;
  "connect:ListRoutingProfiles": never;
  "connect:ListRules": never;
  "connect:ListSecurityKeys": never;
  "connect:ListSecurityProfileApplications": never;
  "connect:ListSecurityProfileFlowModules": never;
  "connect:ListSecurityProfilePermissions": never;
  "connect:ListSecurityProfiles": never;
  "connect:ListTagsForResource": never;
  "connect:ListTaskTemplates": never;
  "connect:ListTestCaseExecutionRecords": never;
  "connect:ListTestCaseExecutions": never;
  "connect:ListTestCases": never;
  "connect:ListTrafficDistributionGroupUsers": never;
  "connect:ListTrafficDistributionGroups": never;
  "connect:ListUseCases": never;
  "connect:ListUserHierarchyGroups": never;
  "connect:ListUserNotifications": never;
  "connect:ListUserProficiencies": never;
  "connect:ListUsers": never;
  "connect:ListViewVersions": never;
  "connect:ListViews": never;
  "connect:ListWorkspaceMedia": never;
  "connect:ListWorkspacePages": never;
  "connect:ListWorkspaces": never;
  "connect:MonitorContact": {
  InstanceId: string;
  ContactId: string;
  UserId: string;
  AllowedMonitorCapabilities?: AmazonConnectFullApiSchemaAllowedMonitorCapabilities;
  ClientToken?: string;
};
  "connect:PauseContact": {
  ContactId: string;
  InstanceId: string;
  ContactFlowId?: string;
};
  "connect:PutUserStatus": {
  AgentStatusId: string;
};
  "connect:ReleasePhoneNumber": never;
  "connect:ReplicateInstance": {
  ReplicaRegion: string;
  ClientToken?: string;
  ReplicaAlias: string;
};
  "connect:ResumeContact": {
  ContactId: string;
  InstanceId: string;
  ContactFlowId?: string;
};
  "connect:ResumeContactRecording": {
  InstanceId: string;
  ContactId: string;
  InitialContactId: string;
  ContactRecordingType?: AmazonConnectFullApiSchemaContactRecordingType;
};
  "connect:SearchAgentStatuses": {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: AmazonConnectFullApiSchemaAgentStatusSearchFilter;
  SearchCriteria?: AmazonConnectFullApiSchemaAgentStatusSearchCriteria;
};
  "connect:SearchAvailablePhoneNumbers": {
  TargetArn?: string;
  InstanceId?: string;
  PhoneNumberCountryCode: AmazonConnectFullApiSchemaPhoneNumberCountryCode;
  PhoneNumberType: AmazonConnectFullApiSchemaPhoneNumberType;
  PhoneNumberPrefix?: string;
  MaxResults?: number;
  NextToken?: string;
};
  "connect:SearchContactEvaluations": {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchCriteria?: AmazonConnectFullApiSchemaEvaluationSearchCriteria;
  SearchFilter?: AmazonConnectFullApiSchemaEvaluationSearchFilter;
};
  "connect:SearchContactFlowModules": {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: AmazonConnectFullApiSchemaContactFlowModuleSearchFilter;
  SearchCriteria?: AmazonConnectFullApiSchemaContactFlowModuleSearchCriteria;
};
  "connect:SearchContactFlows": {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: AmazonConnectFullApiSchemaContactFlowSearchFilter;
  SearchCriteria?: AmazonConnectFullApiSchemaContactFlowSearchCriteria;
};
  "connect:SearchContacts": {
  InstanceId: string;
  TimeRange: AmazonConnectFullApiSchemaSearchContactsTimeRange;
  SearchCriteria?: AmazonConnectFullApiSchemaSearchCriteria;
  MaxResults?: number;
  NextToken?: string;
  Sort?: AmazonConnectFullApiSchemaSort;
};
  "connect:SearchDataTables": {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: AmazonConnectFullApiSchemaDataTableSearchFilter;
  SearchCriteria?: AmazonConnectFullApiSchemaDataTableSearchCriteria;
};
  "connect:SearchEmailAddresses": {
  InstanceId: string;
  MaxResults?: number;
  NextToken?: string;
  SearchCriteria?: AmazonConnectFullApiSchemaEmailAddressSearchCriteria;
  SearchFilter?: AmazonConnectFullApiSchemaEmailAddressSearchFilter;
};
  "connect:SearchEvaluationForms": {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchCriteria?: AmazonConnectFullApiSchemaEvaluationFormSearchCriteria;
  SearchFilter?: AmazonConnectFullApiSchemaEvaluationFormSearchFilter;
};
  "connect:SearchHoursOfOperationOverrides": {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: AmazonConnectFullApiSchemaHoursOfOperationSearchFilter;
  SearchCriteria?: AmazonConnectFullApiSchemaHoursOfOperationOverrideSearchCriteria;
};
  "connect:SearchHoursOfOperations": {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: AmazonConnectFullApiSchemaHoursOfOperationSearchFilter;
  SearchCriteria?: AmazonConnectFullApiSchemaHoursOfOperationSearchCriteria;
};
  "connect:SearchNotifications": {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: AmazonConnectFullApiSchemaNotificationSearchFilter;
  SearchCriteria?: AmazonConnectFullApiSchemaNotificationSearchCriteria;
};
  "connect:SearchPredefinedAttributes": {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchCriteria?: AmazonConnectFullApiSchemaPredefinedAttributeSearchCriteria;
};
  "connect:SearchPrompts": {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: AmazonConnectFullApiSchemaPromptSearchFilter;
  SearchCriteria?: AmazonConnectFullApiSchemaPromptSearchCriteria;
};
  "connect:SearchQueues": {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: AmazonConnectFullApiSchemaQueueSearchFilter;
  SearchCriteria?: AmazonConnectFullApiSchemaQueueSearchCriteria;
};
  "connect:SearchQuickConnects": {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: AmazonConnectFullApiSchemaQuickConnectSearchFilter;
  SearchCriteria?: AmazonConnectFullApiSchemaQuickConnectSearchCriteria;
};
  "connect:SearchResourceTags": {
  InstanceId: string;
  ResourceTypes?: AmazonConnectFullApiSchemaResourceTypeList;
  NextToken?: string;
  MaxResults?: number;
  SearchCriteria?: AmazonConnectFullApiSchemaResourceTagsSearchCriteria;
};
  "connect:SearchRoutingProfiles": {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: AmazonConnectFullApiSchemaRoutingProfileSearchFilter;
  SearchCriteria?: AmazonConnectFullApiSchemaRoutingProfileSearchCriteria;
};
  "connect:SearchSecurityProfiles": {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchCriteria?: AmazonConnectFullApiSchemaSecurityProfileSearchCriteria;
  SearchFilter?: AmazonConnectFullApiSchemaSecurityProfilesSearchFilter;
};
  "connect:SearchTestCases": {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: AmazonConnectFullApiSchemaTestCaseSearchFilter;
  SearchCriteria?: AmazonConnectFullApiSchemaTestCaseSearchCriteria;
};
  "connect:SearchUserHierarchyGroups": {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: AmazonConnectFullApiSchemaUserHierarchyGroupSearchFilter;
  SearchCriteria?: AmazonConnectFullApiSchemaUserHierarchyGroupSearchCriteria;
};
  "connect:SearchUsers": {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: AmazonConnectFullApiSchemaUserSearchFilter;
  SearchCriteria?: AmazonConnectFullApiSchemaUserSearchCriteria;
};
  "connect:SearchViews": {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: AmazonConnectFullApiSchemaViewSearchFilter;
  SearchCriteria?: AmazonConnectFullApiSchemaViewSearchCriteria;
};
  "connect:SearchVocabularies": {
  MaxResults?: number;
  NextToken?: string;
  State?: AmazonConnectFullApiSchemaVocabularyState;
  NameStartsWith?: string;
  LanguageCode?: AmazonConnectFullApiSchemaVocabularyLanguageCode;
};
  "connect:SearchWorkspaceAssociations": {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: AmazonConnectFullApiSchemaWorkspaceAssociationSearchFilter;
  SearchCriteria?: AmazonConnectFullApiSchemaWorkspaceAssociationSearchCriteria;
};
  "connect:SearchWorkspaces": {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: AmazonConnectFullApiSchemaWorkspaceSearchFilter;
  SearchCriteria?: AmazonConnectFullApiSchemaWorkspaceSearchCriteria;
};
  "connect:SendChatIntegrationEvent": {
  SourceId: string;
  DestinationId: string;
  Subtype?: string;
  Event: AmazonConnectFullApiSchemaChatEvent;
  NewSessionDetails?: AmazonConnectFullApiSchemaNewSessionDetails;
};
  "connect:SendOutboundEmail": {
  FromEmailAddress: AmazonConnectFullApiSchemaEmailAddressInfo;
  DestinationEmailAddress: AmazonConnectFullApiSchemaEmailAddressInfo;
  AdditionalRecipients?: AmazonConnectFullApiSchemaOutboundAdditionalRecipients;
  EmailMessage: AmazonConnectFullApiSchemaOutboundEmailContent;
  TrafficType: AmazonConnectFullApiSchemaTrafficType;
  SourceCampaign?: AmazonConnectFullApiSchemaSourceCampaign;
  ClientToken?: string;
};
  "connect:StartAttachedFileUpload": {
  ClientToken?: string;
  FileName: string;
  FileSizeInBytes: number;
  UrlExpiryInSeconds?: number;
  FileUseCaseType: AmazonConnectFullApiSchemaFileUseCaseType;
  CreatedBy?: AmazonConnectFullApiSchemaCreatedByInfo;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};
  "connect:StartChatContact": {
  InstanceId: string;
  ContactFlowId: string;
  Attributes?: AmazonConnectFullApiSchemaAttributes;
  ParticipantDetails: AmazonConnectFullApiSchemaParticipantDetails;
  ParticipantConfiguration?: AmazonConnectFullApiSchemaParticipantConfiguration;
  InitialMessage?: AmazonConnectFullApiSchemaChatMessage;
  ClientToken?: string;
  ChatDurationInMinutes?: number;
  SupportedMessagingContentTypes?: AmazonConnectFullApiSchemaSupportedMessagingContentTypes;
  PersistentChat?: AmazonConnectFullApiSchemaPersistentChat;
  RelatedContactId?: string;
  SegmentAttributes?: AmazonConnectFullApiSchemaSegmentAttributes;
  CustomerId?: string;
  DisconnectOnCustomerExit?: AmazonConnectFullApiSchemaDisconnectOnCustomerExit;
};
  "connect:StartContactEvaluation": {
  ContactId: string;
  EvaluationFormId: string;
  AutoEvaluationConfiguration?: AmazonConnectFullApiSchemaAutoEvaluationConfiguration;
  ClientToken?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap2;
};
  "connect:StartContactMediaProcessing": {
  InstanceId?: string;
  ContactId?: string;
  ProcessorArn?: string;
  FailureMode?: AmazonConnectFullApiSchemaContactMediaProcessingFailureMode;
};
  "connect:StartContactRecording": {
  InstanceId: string;
  ContactId: string;
  InitialContactId: string;
  VoiceRecordingConfiguration: AmazonConnectFullApiSchemaVoiceRecordingConfiguration;
};
  "connect:StartContactStreaming": {
  InstanceId: string;
  ContactId: string;
  ChatStreamingConfiguration: AmazonConnectFullApiSchemaChatStreamingConfiguration;
  ClientToken: string;
};
  "connect:StartEmailContact": {
  InstanceId: string;
  FromEmailAddress: AmazonConnectFullApiSchemaEmailAddressInfo;
  DestinationEmailAddress: string;
  Description?: string;
  References?: AmazonConnectFullApiSchemaContactReferences;
  Name?: string;
  EmailMessage: AmazonConnectFullApiSchemaInboundEmailContent;
  AdditionalRecipients?: AmazonConnectFullApiSchemaInboundAdditionalRecipients;
  Attachments?: AmazonConnectFullApiSchemaEmailAttachments;
  ContactFlowId?: string;
  RelatedContactId?: string;
  Attributes?: AmazonConnectFullApiSchemaAttributes;
  SegmentAttributes?: AmazonConnectFullApiSchemaSegmentAttributes;
  ClientToken?: string;
};
  "connect:StartOutboundChatContact": {
  SourceEndpoint: AmazonConnectFullApiSchemaEndpoint;
  DestinationEndpoint: AmazonConnectFullApiSchemaEndpoint;
  InstanceId: string;
  SegmentAttributes: AmazonConnectFullApiSchemaSegmentAttributes;
  Attributes?: AmazonConnectFullApiSchemaAttributes;
  ContactFlowId: string;
  ChatDurationInMinutes?: number;
  ParticipantDetails?: AmazonConnectFullApiSchemaParticipantDetails;
  InitialSystemMessage?: AmazonConnectFullApiSchemaChatMessage;
  InitialTemplatedSystemMessage?: AmazonConnectFullApiSchemaTemplatedMessageConfig;
  RelatedContactId?: string;
  SupportedMessagingContentTypes?: AmazonConnectFullApiSchemaSupportedMessagingContentTypes;
  ClientToken?: string;
};
  "connect:StartOutboundEmailContact": {
  InstanceId: string;
  ContactId: string;
  FromEmailAddress?: AmazonConnectFullApiSchemaEmailAddressInfo;
  DestinationEmailAddress: AmazonConnectFullApiSchemaEmailAddressInfo;
  AdditionalRecipients?: AmazonConnectFullApiSchemaOutboundAdditionalRecipients;
  EmailMessage: AmazonConnectFullApiSchemaOutboundEmailContent;
  ClientToken?: string;
};
  "connect:StartOutboundVoiceContact": {
  Name?: string;
  Description?: string;
  References?: AmazonConnectFullApiSchemaContactReferences;
  RelatedContactId?: string;
  DestinationPhoneNumber: string;
  ContactFlowId: string;
  InstanceId: string;
  ClientToken?: string;
  SourcePhoneNumber?: string;
  QueueId?: string;
  Attributes?: AmazonConnectFullApiSchemaAttributes;
  AnswerMachineDetectionConfig?: AmazonConnectFullApiSchemaAnswerMachineDetectionConfig;
  CampaignId?: string;
  TrafficType?: AmazonConnectFullApiSchemaTrafficType;
  OutboundStrategy?: AmazonConnectFullApiSchemaOutboundStrategy;
  RingTimeoutInSeconds?: number;
};
  "connect:StartScreenSharing": {
  ClientToken?: string;
  InstanceId: string;
  ContactId: string;
};
  "connect:StartTaskContact": {
  InstanceId: string;
  PreviousContactId?: string;
  ContactFlowId?: string;
  Attributes?: AmazonConnectFullApiSchemaAttributes;
  Name: string;
  References?: AmazonConnectFullApiSchemaContactReferences;
  Description?: string;
  ClientToken?: string;
  ScheduledTime?: string;
  TaskTemplateId?: string;
  QuickConnectId?: string;
  RelatedContactId?: string;
  SegmentAttributes?: AmazonConnectFullApiSchemaSegmentAttributes;
  Attachments?: AmazonConnectFullApiSchemaTaskAttachments;
};
  "connect:StartTestCaseExecution": {
  ClientToken?: string;
};
  "connect:StartWebRTCContact": {
  Attributes?: AmazonConnectFullApiSchemaAttributes;
  ClientToken?: string;
  ContactFlowId: string;
  InstanceId: string;
  AllowedCapabilities?: AmazonConnectFullApiSchemaAllowedCapabilities;
  ParticipantDetails: AmazonConnectFullApiSchemaParticipantDetails;
  RelatedContactId?: string;
  References?: AmazonConnectFullApiSchemaContactReferences;
  Description?: string;
};
  "connect:StopContact": {
  ContactId: string;
  InstanceId: string;
  DisconnectReason?: AmazonConnectFullApiSchemaDisconnectReason;
};
  "connect:StopContactMediaProcessing": {
  InstanceId?: string;
  ContactId?: string;
};
  "connect:StopContactRecording": {
  InstanceId: string;
  ContactId: string;
  InitialContactId: string;
  ContactRecordingType?: AmazonConnectFullApiSchemaContactRecordingType;
};
  "connect:StopContactStreaming": {
  InstanceId: string;
  ContactId: string;
  StreamingId: string;
};
  "connect:StopTestCaseExecution": {
  ClientToken?: string;
};
  "connect:SubmitContactEvaluation": {
  Answers?: AmazonConnectFullApiSchemaEvaluationAnswersInputMap;
  Notes?: AmazonConnectFullApiSchemaEvaluationNotesMap;
  SubmittedBy?: AmazonConnectFullApiSchemaEvaluatorUserUnion;
};
  "connect:SuspendContactRecording": {
  InstanceId: string;
  ContactId: string;
  InitialContactId: string;
  ContactRecordingType?: AmazonConnectFullApiSchemaContactRecordingType;
};
  "connect:TagContact": {
  ContactId: string;
  InstanceId: string;
  Tags: AmazonConnectFullApiSchemaContactTagMap;
};
  "connect:TagResource": {
  tags: AmazonConnectFullApiSchemaTagMap2;
};
  "connect:TransferContact": {
  InstanceId: string;
  ContactId: string;
  QueueId?: string;
  UserId?: string;
  ContactFlowId: string;
  ClientToken?: string;
};
  "connect:UntagContact": never;
  "connect:UntagResource": never;
  "connect:UpdateAgentStatus": {
  Name?: string;
  Description?: string;
  State?: AmazonConnectFullApiSchemaAgentStatusState;
  DisplayOrder?: number;
  ResetOrderNumber?: boolean;
};
  "connect:UpdateAttachedFilesConfiguration": {
  MaximumSizeLimitInBytes?: number;
  ExtensionConfiguration?: AmazonConnectFullApiSchemaExtensionConfiguration;
};
  "connect:UpdateAuthenticationProfile": {
  Name?: string;
  Description?: string;
  AllowedIps?: AmazonConnectFullApiSchemaIpCidrList;
  BlockedIps?: AmazonConnectFullApiSchemaIpCidrList;
  PeriodicSessionDuration?: number;
  SessionInactivityDuration?: number;
  SessionInactivityHandlingEnabled?: boolean;
};
  "connect:UpdateContact": {
  Name?: string;
  Description?: string;
  References?: AmazonConnectFullApiSchemaContactReferences;
  SegmentAttributes?: AmazonConnectFullApiSchemaSegmentAttributes;
  QueueInfo?: AmazonConnectFullApiSchemaQueueInfoInput;
  UserInfo?: AmazonConnectFullApiSchemaUserInfo;
  CustomerEndpoint?: AmazonConnectFullApiSchemaEndpoint;
  SystemEndpoint?: AmazonConnectFullApiSchemaEndpoint;
};
  "connect:UpdateContactAttributes": {
  InitialContactId: string;
  InstanceId: string;
  Attributes: AmazonConnectFullApiSchemaAttributes;
};
  "connect:UpdateContactEvaluation": {
  Answers?: AmazonConnectFullApiSchemaEvaluationAnswersInputMap;
  Notes?: AmazonConnectFullApiSchemaEvaluationNotesMap;
  UpdatedBy?: AmazonConnectFullApiSchemaEvaluatorUserUnion;
};
  "connect:UpdateContactFlowContent": {
  Content: string;
};
  "connect:UpdateContactFlowMetadata": {
  Name?: string;
  Description?: string;
  ContactFlowState?: AmazonConnectFullApiSchemaContactFlowState;
};
  "connect:UpdateContactFlowModuleAlias": {
  Name?: string;
  Description?: string;
  ContactFlowModuleVersion?: number;
};
  "connect:UpdateContactFlowModuleContent": {
  Content?: string;
  Settings?: string;
};
  "connect:UpdateContactFlowModuleMetadata": {
  Name?: string;
  Description?: string;
  State?: AmazonConnectFullApiSchemaContactFlowModuleState;
};
  "connect:UpdateContactFlowName": {
  Name?: string;
  Description?: string;
};
  "connect:UpdateContactRoutingData": {
  QueueTimeAdjustmentSeconds?: number;
  QueuePriority?: number;
  RoutingCriteria?: AmazonConnectFullApiSchemaRoutingCriteriaInput;
};
  "connect:UpdateContactSchedule": {
  InstanceId: string;
  ContactId: string;
  ScheduledTime: string;
};
  "connect:UpdateDataTableAttribute": {
  Name: string;
  ValueType: AmazonConnectFullApiSchemaDataTableAttributeValueType;
  Description?: string;
  Primary?: boolean;
  Validation?: AmazonConnectFullApiSchemaValidation;
};
  "connect:UpdateDataTableMetadata": {
  Name: string;
  Description?: string;
  ValueLockLevel: AmazonConnectFullApiSchemaDataTableLockLevel;
  TimeZone: string;
};
  "connect:UpdateDataTablePrimaryValues": {
  PrimaryValues: AmazonConnectFullApiSchemaPrimaryValuesSet;
  NewPrimaryValues: AmazonConnectFullApiSchemaPrimaryValuesSet;
  LockVersion: AmazonConnectFullApiSchemaDataTableLockVersion;
};
  "connect:UpdateEmailAddressMetadata": {
  Description?: string;
  DisplayName?: string;
  ClientToken?: string;
};
  "connect:UpdateEvaluationForm": {
  EvaluationFormVersion: number;
  CreateNewVersion?: boolean;
  Title: string;
  Description?: string;
  Items: AmazonConnectFullApiSchemaEvaluationFormItemsList;
  ScoringStrategy?: AmazonConnectFullApiSchemaEvaluationFormScoringStrategy;
  AutoEvaluationConfiguration?: AmazonConnectFullApiSchemaEvaluationFormAutoEvaluationConfiguration;
  ReviewConfiguration?: AmazonConnectFullApiSchemaEvaluationReviewConfiguration;
  AsDraft?: boolean;
  ClientToken?: string;
  TargetConfiguration?: AmazonConnectFullApiSchemaEvaluationFormTargetConfiguration;
  LanguageConfiguration?: AmazonConnectFullApiSchemaEvaluationFormLanguageConfiguration;
};
  "connect:UpdateHoursOfOperation": {
  Name?: string;
  Description?: string;
  TimeZone?: string;
  Config?: AmazonConnectFullApiSchemaHoursOfOperationConfigList;
};
  "connect:UpdateHoursOfOperationOverride": {
  Name?: string;
  Description?: string;
  Config?: AmazonConnectFullApiSchemaHoursOfOperationOverrideConfigList;
  EffectiveFrom?: string;
  EffectiveTill?: string;
  RecurrenceConfig?: AmazonConnectFullApiSchemaRecurrenceConfig;
  OverrideType?: AmazonConnectFullApiSchemaOverrideType;
};
  "connect:UpdateInstanceAttribute": {
  Value: string;
  ClientToken?: string;
};
  "connect:UpdateInstanceStorageConfig": {
  StorageConfig: AmazonConnectFullApiSchemaInstanceStorageConfig;
  ClientToken?: string;
};
  "connect:UpdateNotificationContent": {
  Content: AmazonConnectFullApiSchemaNotificationContent;
};
  "connect:UpdateParticipantAuthentication": {
  State: string;
  InstanceId: string;
  Code?: string;
  Error?: string;
  ErrorDescription?: string;
};
  "connect:UpdateParticipantRoleConfig": {
  ChannelConfiguration: AmazonConnectFullApiSchemaUpdateParticipantRoleConfigChannelInfo;
};
  "connect:UpdatePhoneNumber": {
  TargetArn?: string;
  InstanceId?: string;
  ClientToken?: string;
};
  "connect:UpdatePhoneNumberMetadata": {
  PhoneNumberDescription?: string;
  ClientToken?: string;
};
  "connect:UpdatePredefinedAttribute": {
  Values?: AmazonConnectFullApiSchemaPredefinedAttributeValues;
  Purposes?: AmazonConnectFullApiSchemaPredefinedAttributePurposeNameList;
  AttributeConfiguration?: AmazonConnectFullApiSchemaInputPredefinedAttributeConfiguration;
};
  "connect:UpdatePrompt": {
  Name?: string;
  Description?: string;
  S3Uri?: string;
};
  "connect:UpdateQueueHoursOfOperation": {
  HoursOfOperationId: string;
};
  "connect:UpdateQueueMaxContacts": {
  MaxContacts?: number;
};
  "connect:UpdateQueueName": {
  Name?: string;
  Description?: string;
};
  "connect:UpdateQueueOutboundCallerConfig": {
  OutboundCallerConfig: AmazonConnectFullApiSchemaOutboundCallerConfig;
};
  "connect:UpdateQueueOutboundEmailConfig": {
  OutboundEmailConfig: AmazonConnectFullApiSchemaOutboundEmailConfig;
};
  "connect:UpdateQueueStatus": {
  Status: AmazonConnectFullApiSchemaQueueStatus;
};
  "connect:UpdateQuickConnectConfig": {
  QuickConnectConfig: AmazonConnectFullApiSchemaQuickConnectConfig;
};
  "connect:UpdateQuickConnectName": {
  Name?: string;
  Description?: string;
};
  "connect:UpdateRoutingProfileAgentAvailabilityTimer": {
  AgentAvailabilityTimer: AmazonConnectFullApiSchemaAgentAvailabilityTimer;
};
  "connect:UpdateRoutingProfileConcurrency": {
  MediaConcurrencies: AmazonConnectFullApiSchemaMediaConcurrencies;
};
  "connect:UpdateRoutingProfileDefaultOutboundQueue": {
  DefaultOutboundQueueId: string;
};
  "connect:UpdateRoutingProfileName": {
  Name?: string;
  Description?: string;
};
  "connect:UpdateRoutingProfileQueues": {
  QueueConfigs: AmazonConnectFullApiSchemaRoutingProfileQueueConfigList;
};
  "connect:UpdateRule": {
  Name: string;
  Function: string;
  Actions: AmazonConnectFullApiSchemaRuleActions;
  PublishStatus: AmazonConnectFullApiSchemaRulePublishStatus;
};
  "connect:UpdateSecurityProfile": {
  Description?: string;
  Permissions?: AmazonConnectFullApiSchemaPermissionsList;
  AllowedAccessControlTags?: AmazonConnectFullApiSchemaAllowedAccessControlTags;
  TagRestrictedResources?: AmazonConnectFullApiSchemaTagRestrictedResourceList;
  Applications?: AmazonConnectFullApiSchemaApplications;
  HierarchyRestrictedResources?: AmazonConnectFullApiSchemaHierarchyRestrictedResourceList;
  AllowedAccessControlHierarchyGroupId?: string;
  AllowedFlowModules?: AmazonConnectFullApiSchemaAllowedFlowModules;
  GranularAccessControlConfiguration?: AmazonConnectFullApiSchemaGranularAccessControlConfiguration;
};
  "connect:UpdateTaskTemplate": {
  Name?: string;
  Description?: string;
  ContactFlowId?: string;
  SelfAssignFlowId?: string;
  Constraints?: AmazonConnectFullApiSchemaTaskTemplateConstraints;
  Defaults?: AmazonConnectFullApiSchemaTaskTemplateDefaults;
  Status?: AmazonConnectFullApiSchemaTaskTemplateStatus;
  Fields?: AmazonConnectFullApiSchemaTaskTemplateFields;
};
  "connect:UpdateTestCase": {
  Content?: string;
  EntryPoint?: AmazonConnectFullApiSchemaTestCaseEntryPoint;
  InitializationData?: string;
  Name?: string;
  Description?: string;
  Status?: AmazonConnectFullApiSchemaTestCaseStatus;
};
  "connect:UpdateTrafficDistribution": {
  TelephonyConfig?: AmazonConnectFullApiSchemaTelephonyConfig;
  SignInConfig?: AmazonConnectFullApiSchemaSignInConfig;
  AgentConfig?: AmazonConnectFullApiSchemaAgentConfig;
};
  "connect:UpdateUserConfig": {
  AutoAcceptConfigs?: AmazonConnectFullApiSchemaAutoAcceptConfigs;
  AfterContactWorkConfigs?: AmazonConnectFullApiSchemaAfterContactWorkConfigs;
  PhoneNumberConfigs?: AmazonConnectFullApiSchemaPhoneNumberConfigs;
  PersistentConnectionConfigs?: AmazonConnectFullApiSchemaPersistentConnectionConfigs;
  VoiceEnhancementConfigs?: AmazonConnectFullApiSchemaVoiceEnhancementConfigs;
};
  "connect:UpdateUserHierarchy": {
  HierarchyGroupId?: string;
};
  "connect:UpdateUserHierarchyGroupName": {
  Name: string;
};
  "connect:UpdateUserHierarchyStructure": {
  HierarchyStructure: AmazonConnectFullApiSchemaHierarchyStructureUpdate;
};
  "connect:UpdateUserIdentityInfo": {
  IdentityInfo: AmazonConnectFullApiSchemaUserIdentityInfo;
};
  "connect:UpdateUserNotificationStatus": {
  Status: AmazonConnectFullApiSchemaNotificationStatus;
};
  "connect:UpdateUserPhoneConfig": {
  PhoneConfig: AmazonConnectFullApiSchemaUserPhoneConfig;
};
  "connect:UpdateUserProficiencies": {
  UserProficiencies: AmazonConnectFullApiSchemaUserProficiencyList;
};
  "connect:UpdateUserRoutingProfile": {
  RoutingProfileId: string;
};
  "connect:UpdateUserSecurityProfiles": {
  SecurityProfileIds: AmazonConnectFullApiSchemaSecurityProfileIds;
};
  "connect:UpdateViewContent": {
  Status: AmazonConnectFullApiSchemaViewStatus;
  Content: AmazonConnectFullApiSchemaViewInputContent;
};
  "connect:UpdateViewMetadata": {
  Name?: string;
  Description?: string;
};
  "connect:UpdateWorkspaceMetadata": {
  Name?: string;
  Description?: string;
  Title?: string;
};
  "connect:UpdateWorkspacePage": {
  NewPage?: string;
  ResourceArn?: string;
  Slug?: string;
  InputData?: string;
};
  "connect:UpdateWorkspaceTheme": {
  Theme?: AmazonConnectFullApiSchemaWorkspaceTheme;
};
  "connect:UpdateWorkspaceVisibility": {
  Visibility: AmazonConnectFullApiSchemaVisibility;
};
  "connectparticipant:CancelParticipantAuthentication": {
  SessionId: string;
};
  "connectparticipant:CompleteAttachmentUpload": {
  AttachmentIds: AmazonConnectFullApiSchemaAttachmentIdList;
  ClientToken: string;
};
  "connectparticipant:CreateParticipantConnection": {
  Type?: AmazonConnectFullApiSchemaConnectionTypeList;
  ConnectParticipant?: boolean;
};
  "connectparticipant:DescribeView": never;
  "connectparticipant:DisconnectParticipant": {
  ClientToken?: string;
};
  "connectparticipant:GetAttachment": {
  AttachmentId: string;
  UrlExpiryInSeconds?: number;
};
  "connectparticipant:GetAuthenticationUrl": {
  SessionId: string;
  RedirectUri: string;
};
  "connectparticipant:GetTranscript": {
  ContactId?: string;
  MaxResults?: number;
  NextToken?: string;
  ScanDirection?: AmazonConnectFullApiSchemaScanDirection;
  SortOrder?: AmazonConnectFullApiSchemaSortKey;
  StartPosition?: AmazonConnectFullApiSchemaStartPosition;
};
  "connectparticipant:SendEvent": {
  ContentType: string;
  Content?: string;
  ClientToken?: string;
};
  "connectparticipant:SendMessage": {
  ContentType: string;
  Content: string;
  ClientToken?: string;
};
  "connectparticipant:StartAttachmentUpload": {
  ContentType: string;
  AttachmentSizeInBytes: number;
  AttachmentName: string;
  ClientToken: string;
};
  "connectcases:BatchGetCaseRule": {
  caseRules: AmazonConnectFullApiSchemaCaseRuleIdentifierList;
};
  "connectcases:BatchGetField": {
  fields: AmazonConnectFullApiSchemaBatchGetFieldIdentifierList;
};
  "connectcases:BatchPutFieldOptions": {
  options: AmazonConnectFullApiSchemaFieldOptionsList;
};
  "connectcases:CreateCase": {
  templateId: string;
  fields: AmazonConnectFullApiSchemaFieldValueList;
  clientToken?: string;
  performedBy?: AmazonConnectFullApiSchemaUserUnion;
  tags?: AmazonConnectFullApiSchemaMutableTags;
};
  "connectcases:CreateCaseRule": {
  name: string;
  description?: string;
  rule: AmazonConnectFullApiSchemaCaseRuleDetails;
};
  "connectcases:CreateDomain": {
  name: string;
};
  "connectcases:CreateField": {
  name: string;
  type: "Text" | "Number" | "Boolean" | "DateTime" | "SingleSelect" | "Url" | "User";
  description?: string;
  attributes?: AmazonConnectFullApiSchemaFieldAttributes;
};
  "connectcases:CreateLayout": {
  name: string;
  content: AmazonConnectFullApiSchemaLayoutContent;
};
  "connectcases:CreateRelatedItem": {
  type: "Contact" | "Comment" | "File" | "Sla" | "ConnectCase" | "Custom";
  content: AmazonConnectFullApiSchemaRelatedItemInputContent;
  performedBy?: AmazonConnectFullApiSchemaUserUnion;
};
  "connectcases:CreateTemplate": {
  name: string;
  description?: string;
  layoutConfiguration?: AmazonConnectFullApiSchemaLayoutConfiguration;
  requiredFields?: AmazonConnectFullApiSchemaRequiredFieldList;
  status?: "Active" | "Inactive";
  rules?: AmazonConnectFullApiSchemaTemplateCaseRuleList;
  tagPropagationConfigurations?: AmazonConnectFullApiSchemaTagPropagationConfigurationList;
};
  "connectcases:DeleteCase": never;
  "connectcases:DeleteCaseRule": never;
  "connectcases:DeleteDomain": never;
  "connectcases:DeleteField": never;
  "connectcases:DeleteLayout": never;
  "connectcases:DeleteRelatedItem": never;
  "connectcases:DeleteTemplate": never;
  "connectcases:GetCase": {
  fields: AmazonConnectFullApiSchemaFieldIdentifierList;
  nextToken?: string;
};
  "connectcases:GetCaseAuditEvents": {
  maxResults?: number;
  nextToken?: string;
};
  "connectcases:GetCaseEventConfiguration": never;
  "connectcases:GetDomain": never;
  "connectcases:GetLayout": never;
  "connectcases:GetTemplate": never;
  "connectcases:ListCaseRules": never;
  "connectcases:ListCasesForContact": {
  contactArn: string;
  maxResults?: number;
  nextToken?: string;
};
  "connectcases:ListDomains": never;
  "connectcases:ListFieldOptions": never;
  "connectcases:ListFields": never;
  "connectcases:ListLayouts": never;
  "connectcases:ListTagsForResource": never;
  "connectcases:ListTemplates": never;
  "connectcases:PutCaseEventConfiguration": {
  eventBridge: AmazonConnectFullApiSchemaEventBridgeConfiguration;
};
  "connectcases:SearchAllRelatedItems": {
  maxResults?: number;
  nextToken?: string;
  filters?: AmazonConnectFullApiSchemaRelatedItemFilterList;
  sorts?: AmazonConnectFullApiSchemaSearchAllRelatedItemsSortList;
};
  "connectcases:SearchCases": {
  maxResults?: number;
  nextToken?: string;
  searchTerm?: string;
  filter?: AmazonConnectFullApiSchemaCaseFilter;
  sorts?: AmazonConnectFullApiSchemaSortList;
  fields?: AmazonConnectFullApiSchemaFieldIdentifierList;
};
  "connectcases:SearchRelatedItems": {
  maxResults?: number;
  nextToken?: string;
  filters?: AmazonConnectFullApiSchemaRelatedItemFilterList;
};
  "connectcases:TagResource": {
  tags: AmazonConnectFullApiSchemaTags;
};
  "connectcases:UntagResource": never;
  "connectcases:UpdateCase": {
  fields: AmazonConnectFullApiSchemaFieldValueList;
  performedBy?: AmazonConnectFullApiSchemaUserUnion;
};
  "connectcases:UpdateCaseRule": {
  name?: string;
  description?: string;
  rule?: AmazonConnectFullApiSchemaCaseRuleDetails;
};
  "connectcases:UpdateField": {
  name?: string;
  description?: string;
  attributes?: AmazonConnectFullApiSchemaFieldAttributes;
};
  "connectcases:UpdateLayout": {
  name?: string;
  content?: AmazonConnectFullApiSchemaLayoutContent;
};
  "connectcases:UpdateRelatedItem": {
  content: AmazonConnectFullApiSchemaRelatedItemUpdateContent;
  performedBy?: AmazonConnectFullApiSchemaUserUnion;
};
  "connectcases:UpdateTemplate": {
  name?: string;
  description?: string;
  layoutConfiguration?: AmazonConnectFullApiSchemaLayoutConfiguration;
  requiredFields?: AmazonConnectFullApiSchemaRequiredFieldList;
  status?: "Active" | "Inactive";
  rules?: AmazonConnectFullApiSchemaTemplateCaseRuleList;
  tagPropagationConfigurations?: AmazonConnectFullApiSchemaTagPropagationConfigurationList;
};
  "connectcampaigns:CreateCampaign": {
  name: string;
  connectInstanceId: string;
  dialerConfig: AmazonConnectFullApiSchemaDialerConfig;
  outboundCallConfig: AmazonConnectFullApiSchemaOutboundCallConfig;
  tags?: AmazonConnectFullApiSchemaTagMap3;
};
  "connectcampaigns:DeleteCampaign": never;
  "connectcampaigns:DeleteConnectInstanceConfig": never;
  "connectcampaigns:DeleteInstanceOnboardingJob": never;
  "connectcampaigns:DescribeCampaign": never;
  "connectcampaigns:GetCampaignState": never;
  "connectcampaigns:GetCampaignStateBatch": {
  campaignIds: AmazonConnectFullApiSchemaCampaignIdList;
};
  "connectcampaigns:GetConnectInstanceConfig": never;
  "connectcampaigns:GetInstanceOnboardingJobStatus": never;
  "connectcampaigns:ListCampaigns": {
  maxResults?: number;
  nextToken?: string;
  filters?: AmazonConnectFullApiSchemaCampaignFilters;
};
  "connectcampaigns:ListTagsForResource": never;
  "connectcampaigns:PauseCampaign": never;
  "connectcampaigns:PutDialRequestBatch": {
  dialRequests: AmazonConnectFullApiSchemaDialRequestList;
};
  "connectcampaigns:ResumeCampaign": never;
  "connectcampaigns:StartCampaign": never;
  "connectcampaigns:StartInstanceOnboardingJob": {
  encryptionConfig: AmazonConnectFullApiSchemaEncryptionConfig;
};
  "connectcampaigns:StopCampaign": never;
  "connectcampaigns:TagResource": {
  tags: AmazonConnectFullApiSchemaTagMap3;
};
  "connectcampaigns:UntagResource": never;
  "connectcampaigns:UpdateCampaignDialerConfig": {
  dialerConfig: AmazonConnectFullApiSchemaDialerConfig;
};
  "connectcampaigns:UpdateCampaignName": {
  name: string;
};
  "connectcampaigns:UpdateCampaignOutboundCallConfig": {
  connectContactFlowId?: string;
  connectSourcePhoneNumber?: string;
  answerMachineDetectionConfig?: AmazonConnectFullApiSchemaAnswerMachineDetectionConfig2;
};
  "connectcampaignsv2:CreateCampaign": {
  name: string;
  connectInstanceId: string;
  channelSubtypeConfig?: AmazonConnectFullApiSchemaChannelSubtypeConfig;
  type?: "MANAGED" | "JOURNEY";
  source?: AmazonConnectFullApiSchemaSource;
  connectCampaignFlowArn?: string;
  schedule?: AmazonConnectFullApiSchemaSchedule;
  entryLimitsConfig?: AmazonConnectFullApiSchemaEntryLimitsConfig;
  communicationTimeConfig?: AmazonConnectFullApiSchemaCommunicationTimeConfig;
  communicationLimitsOverride?: AmazonConnectFullApiSchemaCommunicationLimitsConfig;
  tags?: AmazonConnectFullApiSchemaTagMap4;
};
  "connectcampaignsv2:DeleteCampaign": never;
  "connectcampaignsv2:DeleteCampaignChannelSubtypeConfig": never;
  "connectcampaignsv2:DeleteCampaignCommunicationLimits": never;
  "connectcampaignsv2:DeleteCampaignCommunicationTime": never;
  "connectcampaignsv2:DeleteCampaignEntryLimits": never;
  "connectcampaignsv2:DeleteConnectInstanceConfig": never;
  "connectcampaignsv2:DeleteConnectInstanceIntegration": {
  integrationIdentifier: AmazonConnectFullApiSchemaIntegrationIdentifier;
};
  "connectcampaignsv2:DeleteInstanceOnboardingJob": never;
  "connectcampaignsv2:DescribeCampaign": never;
  "connectcampaignsv2:GetCampaignState": never;
  "connectcampaignsv2:GetCampaignStateBatch": {
  campaignIds: AmazonConnectFullApiSchemaCampaignIdList2;
};
  "connectcampaignsv2:GetConnectInstanceConfig": never;
  "connectcampaignsv2:GetInstanceCommunicationLimits": never;
  "connectcampaignsv2:GetInstanceOnboardingJobStatus": never;
  "connectcampaignsv2:ListCampaigns": {
  maxResults?: number;
  nextToken?: string;
  filters?: AmazonConnectFullApiSchemaCampaignFilters2;
};
  "connectcampaignsv2:ListConnectInstanceIntegrations": never;
  "connectcampaignsv2:ListTagsForResource": never;
  "connectcampaignsv2:PauseCampaign": never;
  "connectcampaignsv2:PutConnectInstanceIntegration": {
  integrationConfig: AmazonConnectFullApiSchemaIntegrationConfig;
};
  "connectcampaignsv2:PutInstanceCommunicationLimits": {
  communicationLimitsConfig: AmazonConnectFullApiSchemaInstanceCommunicationLimitsConfig;
};
  "connectcampaignsv2:PutOutboundRequestBatch": {
  outboundRequests: AmazonConnectFullApiSchemaOutboundRequestList;
};
  "connectcampaignsv2:PutProfileOutboundRequestBatch": {
  profileOutboundRequests: AmazonConnectFullApiSchemaProfileOutboundRequestList;
};
  "connectcampaignsv2:ResumeCampaign": never;
  "connectcampaignsv2:StartCampaign": never;
  "connectcampaignsv2:StartInstanceOnboardingJob": {
  encryptionConfig: AmazonConnectFullApiSchemaEncryptionConfig2;
};
  "connectcampaignsv2:StopCampaign": never;
  "connectcampaignsv2:TagResource": {
  tags: AmazonConnectFullApiSchemaTagMap4;
};
  "connectcampaignsv2:UntagResource": never;
  "connectcampaignsv2:UpdateCampaignChannelSubtypeConfig": {
  channelSubtypeConfig: AmazonConnectFullApiSchemaChannelSubtypeConfig;
};
  "connectcampaignsv2:UpdateCampaignCommunicationLimits": {
  communicationLimitsOverride: AmazonConnectFullApiSchemaCommunicationLimitsConfig;
};
  "connectcampaignsv2:UpdateCampaignCommunicationTime": {
  communicationTimeConfig: AmazonConnectFullApiSchemaCommunicationTimeConfig;
};
  "connectcampaignsv2:UpdateCampaignEntryLimits": {
  entryLimitsConfig: AmazonConnectFullApiSchemaEntryLimitsConfig;
};
  "connectcampaignsv2:UpdateCampaignFlowAssociation": {
  connectCampaignFlowArn: string;
};
  "connectcampaignsv2:UpdateCampaignName": {
  name: string;
};
  "connectcampaignsv2:UpdateCampaignSchedule": {
  schedule: AmazonConnectFullApiSchemaSchedule;
};
  "connectcampaignsv2:UpdateCampaignSource": {
  source: AmazonConnectFullApiSchemaSource;
};
  "connect-contact-lens:ListRealtimeContactAnalysisSegments": {
  InstanceId: string;
  ContactId: string;
  MaxResults?: number;
  NextToken?: string;
};
  "connecthealth:ActivateSubscription": never;
  "connecthealth:CreateDomain": {
  name: string;
  kmsKeyArn?: string;
  webAppSetupConfiguration?: AmazonConnectFullApiSchemaCreateWebAppConfiguration;
  tags?: AmazonConnectFullApiSchemaTagMap5;
};
  "connecthealth:CreateSubscription": never;
  "connecthealth:DeactivateSubscription": never;
  "connecthealth:DeleteDomain": never;
  "connecthealth:GetDomain": never;
  "connecthealth:GetMedicalScribeListeningSession": never;
  "connecthealth:GetPatientInsightsJob": never;
  "connecthealth:GetSubscription": never;
  "connecthealth:ListDomains": never;
  "connecthealth:ListSubscriptions": never;
  "connecthealth:ListTagsForResource": never;
  "connecthealth:StartMedicalScribeListeningSession": AmazonConnectFullApiSchemaMedicalScribeInputStream;
  "connecthealth:StartPatientInsightsJob": {
  patientContext: AmazonConnectFullApiSchemaPatientInsightsPatientContext;
  insightsContext: AmazonConnectFullApiSchemaInsightsContext;
  encounterContext: AmazonConnectFullApiSchemaPatientInsightsEncounterContext;
  userContext: AmazonConnectFullApiSchemaUserContext;
  inputDataConfig: AmazonConnectFullApiSchemaInputDataConfig;
  outputDataConfig: AmazonConnectFullApiSchemaOutputDataConfig;
  clientToken?: string;
};
  "connecthealth:TagResource": {
  tags: AmazonConnectFullApiSchemaTagMap5;
};
  "connecthealth:UntagResource": never;
  "customer-profiles:AddProfileKey": {
  ProfileId: string;
  KeyName: string;
  Values: AmazonConnectFullApiSchemaRequestValueList;
};
  "customer-profiles:BatchGetCalculatedAttributeForProfile": {
  ProfileIds: AmazonConnectFullApiSchemaBatchGetCalculatedAttributeForProfileIdList;
  ConditionOverrides?: AmazonConnectFullApiSchemaConditionOverrides;
};
  "customer-profiles:BatchGetProfile": {
  ProfileIds: AmazonConnectFullApiSchemaBatchGetProfileIdList;
};
  "customer-profiles:BatchPutProfileObject": {
  ObjectTypeName: string;
  Items: AmazonConnectFullApiSchemaBatchPutProfileObjectRequestItemList;
};
  "customer-profiles:CreateCalculatedAttributeDefinition": {
  DisplayName?: string;
  Description?: string;
  AttributeDetails: AmazonConnectFullApiSchemaAttributeDetails;
  Conditions?: AmazonConnectFullApiSchemaConditions;
  Filter?: AmazonConnectFullApiSchemaFilter;
  Statistic: AmazonConnectFullApiSchemaStatistic;
  UseHistoricalData?: boolean;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};
  "customer-profiles:CreateDomain": {
  DefaultExpirationDays: number;
  DefaultEncryptionKey?: string;
  DeadLetterQueueUrl?: string;
  Matching?: AmazonConnectFullApiSchemaMatchingRequest;
  RuleBasedMatching?: AmazonConnectFullApiSchemaRuleBasedMatchingRequest;
  DataStore?: AmazonConnectFullApiSchemaDataStoreRequest;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};
  "customer-profiles:CreateDomainLayout": {
  Description: string;
  DisplayName: string;
  IsDefault?: boolean;
  LayoutType: AmazonConnectFullApiSchemaLayoutType;
  Layout: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};
  "customer-profiles:CreateEventStream": {
  Uri: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};
  "customer-profiles:CreateEventTrigger": {
  ObjectTypeName: string;
  Description?: string;
  EventTriggerConditions: AmazonConnectFullApiSchemaEventTriggerConditions;
  SegmentFilter?: string;
  EventTriggerLimits?: AmazonConnectFullApiSchemaEventTriggerLimits;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};
  "customer-profiles:CreateIntegrationWorkflow": {
  WorkflowType: AmazonConnectFullApiSchemaWorkflowType;
  IntegrationConfig: AmazonConnectFullApiSchemaIntegrationConfig2;
  ObjectTypeName: string;
  RoleArn: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};
  "customer-profiles:CreateProfile": {
  AccountNumber?: string;
  AdditionalInformation?: string;
  PartyType?: AmazonConnectFullApiSchemaPartyType;
  BusinessName?: string;
  FirstName?: string;
  MiddleName?: string;
  LastName?: string;
  BirthDate?: string;
  Gender?: AmazonConnectFullApiSchemaGender;
  PhoneNumber?: string;
  MobilePhoneNumber?: string;
  HomePhoneNumber?: string;
  BusinessPhoneNumber?: string;
  EmailAddress?: string;
  PersonalEmailAddress?: string;
  BusinessEmailAddress?: string;
  Address?: AmazonConnectFullApiSchemaAddress;
  ShippingAddress?: AmazonConnectFullApiSchemaAddress;
  MailingAddress?: AmazonConnectFullApiSchemaAddress;
  BillingAddress?: AmazonConnectFullApiSchemaAddress;
  Attributes?: AmazonConnectFullApiSchemaAttributes2;
  PartyTypeString?: string;
  GenderString?: string;
  ProfileType?: AmazonConnectFullApiSchemaProfileType;
  EngagementPreferences?: AmazonConnectFullApiSchemaEngagementPreferences;
};
  "customer-profiles:CreateRecommender": {
  RecommenderRecipeName: AmazonConnectFullApiSchemaRecommenderRecipeName;
  RecommenderConfig?: AmazonConnectFullApiSchemaRecommenderConfig;
  Description?: string;
  RecommenderSchemaName?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};
  "customer-profiles:CreateRecommenderFilter": {
  RecommenderFilterExpression: string;
  RecommenderSchemaName?: string;
  Description?: string;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};
  "customer-profiles:CreateRecommenderSchema": {
  Fields: AmazonConnectFullApiSchemaRecommenderSchemaFields;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};
  "customer-profiles:CreateSegmentDefinition": {
  DisplayName: string;
  Description?: string;
  SegmentGroups?: AmazonConnectFullApiSchemaSegmentGroup;
  SegmentSqlQuery?: string;
  SegmentSort?: AmazonConnectFullApiSchemaSegmentSort;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};
  "customer-profiles:CreateSegmentEstimate": {
  SegmentQuery?: AmazonConnectFullApiSchemaSegmentGroupStructure;
  SegmentSqlQuery?: string;
};
  "customer-profiles:CreateSegmentSnapshot": {
  DataFormat: AmazonConnectFullApiSchemaDataFormat;
  EncryptionKey?: string;
  RoleArn?: string;
  DestinationUri?: string;
};
  "customer-profiles:CreateUploadJob": {
  DisplayName: string;
  Fields: AmazonConnectFullApiSchemaFieldMap;
  UniqueKey: string;
  DataExpiry?: number;
};
  "customer-profiles:DeleteCalculatedAttributeDefinition": never;
  "customer-profiles:DeleteDomain": never;
  "customer-profiles:DeleteDomainLayout": never;
  "customer-profiles:DeleteDomainObjectType": never;
  "customer-profiles:DeleteEventStream": never;
  "customer-profiles:DeleteEventTrigger": never;
  "customer-profiles:DeleteIntegration": {
  Uri: string;
};
  "customer-profiles:DeleteProfile": {
  ProfileId: string;
};
  "customer-profiles:DeleteProfileKey": {
  ProfileId: string;
  KeyName: string;
  Values: AmazonConnectFullApiSchemaRequestValueList;
};
  "customer-profiles:DeleteProfileObject": {
  ProfileId: string;
  ProfileObjectUniqueKey: string;
  ObjectTypeName: string;
};
  "customer-profiles:DeleteProfileObjectType": never;
  "customer-profiles:DeleteRecommender": never;
  "customer-profiles:DeleteRecommenderFilter": never;
  "customer-profiles:DeleteRecommenderSchema": never;
  "customer-profiles:DeleteSegmentDefinition": never;
  "customer-profiles:DeleteWorkflow": never;
  "customer-profiles:DetectProfileObjectType": {
  Objects: AmazonConnectFullApiSchemaObjects;
};
  "customer-profiles:GetAutoMergingPreview": {
  Consolidation: AmazonConnectFullApiSchemaConsolidation;
  ConflictResolution: AmazonConnectFullApiSchemaConflictResolution;
  MinAllowedConfidenceScoreForMerging?: number;
};
  "customer-profiles:GetCalculatedAttributeDefinition": never;
  "customer-profiles:GetCalculatedAttributeForProfile": never;
  "customer-profiles:GetDomain": never;
  "customer-profiles:GetDomainLayout": never;
  "customer-profiles:GetDomainObjectType": never;
  "customer-profiles:GetEventStream": never;
  "customer-profiles:GetEventTrigger": never;
  "customer-profiles:GetIdentityResolutionJob": never;
  "customer-profiles:GetIntegration": {
  Uri: string;
};
  "customer-profiles:GetMatches": never;
  "customer-profiles:GetObjectTypeAttributeStatistics": never;
  "customer-profiles:GetProfileHistoryRecord": never;
  "customer-profiles:GetProfileObjectType": never;
  "customer-profiles:GetProfileObjectTypeTemplate": never;
  "customer-profiles:GetProfileRecommendations": {
  RecommenderName: string;
  Context?: AmazonConnectFullApiSchemaRecommenderContext;
  RecommenderFilters?: AmazonConnectFullApiSchemaRecommenderFilters;
  RecommenderPromotionalFilters?: AmazonConnectFullApiSchemaRecommenderPromotionalFilters;
  CandidateIds?: AmazonConnectFullApiSchemaCandidateIdList;
  MaxResults?: number;
  MetadataConfig?: AmazonConnectFullApiSchemaMetadataConfig;
};
  "customer-profiles:GetRecommender": never;
  "customer-profiles:GetRecommenderFilter": never;
  "customer-profiles:GetRecommenderSchema": never;
  "customer-profiles:GetSegmentDefinition": never;
  "customer-profiles:GetSegmentEstimate": never;
  "customer-profiles:GetSegmentMembership": {
  ProfileIds: AmazonConnectFullApiSchemaProfileIds;
};
  "customer-profiles:GetSegmentSnapshot": never;
  "customer-profiles:GetSimilarProfiles": {
  MatchType: AmazonConnectFullApiSchemaMatchType;
  SearchKey: string;
  SearchValue: string;
};
  "customer-profiles:GetUploadJob": never;
  "customer-profiles:GetUploadJobPath": never;
  "customer-profiles:GetWorkflow": never;
  "customer-profiles:GetWorkflowSteps": never;
  "customer-profiles:ListAccountIntegrations": {
  Uri: string;
};
  "customer-profiles:ListCalculatedAttributeDefinitions": never;
  "customer-profiles:ListCalculatedAttributesForProfile": never;
  "customer-profiles:ListDomainLayouts": never;
  "customer-profiles:ListDomainObjectTypes": never;
  "customer-profiles:ListDomains": never;
  "customer-profiles:ListEventStreams": never;
  "customer-profiles:ListEventTriggers": never;
  "customer-profiles:ListIdentityResolutionJobs": never;
  "customer-profiles:ListIntegrations": never;
  "customer-profiles:ListObjectTypeAttributeValues": never;
  "customer-profiles:ListObjectTypeAttributes": never;
  "customer-profiles:ListProfileAttributeValues": never;
  "customer-profiles:ListProfileHistoryRecords": {
  ProfileId: string;
  ObjectTypeName?: string;
  ActionType?: AmazonConnectFullApiSchemaActionType;
  PerformedBy?: string;
};
  "customer-profiles:ListProfileObjectTypeTemplates": never;
  "customer-profiles:ListProfileObjectTypes": never;
  "customer-profiles:ListProfileObjects": {
  ObjectTypeName: string;
  ProfileId: string;
  ObjectFilter?: AmazonConnectFullApiSchemaObjectFilter;
};
  "customer-profiles:ListRecommenderFilters": never;
  "customer-profiles:ListRecommenderRecipes": never;
  "customer-profiles:ListRecommenderSchemas": never;
  "customer-profiles:ListRecommenders": never;
  "customer-profiles:ListRuleBasedMatches": never;
  "customer-profiles:ListSegmentDefinitions": never;
  "customer-profiles:ListTagsForResource": never;
  "customer-profiles:ListUploadJobs": never;
  "customer-profiles:ListWorkflows": {
  WorkflowType?: AmazonConnectFullApiSchemaWorkflowType;
  Status?: AmazonConnectFullApiSchemaStatus;
  QueryStartDate?: string;
  QueryEndDate?: string;
};
  "customer-profiles:MergeProfiles": {
  MainProfileId: string;
  ProfileIdsToBeMerged: AmazonConnectFullApiSchemaProfileIdToBeMergedList;
  FieldSourceProfileIds?: AmazonConnectFullApiSchemaFieldSourceProfileIds;
};
  "customer-profiles:PutDomainObjectType": {
  Description?: string;
  EncryptionKey?: string;
  Fields: AmazonConnectFullApiSchemaDomainObjectTypeFields;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};
  "customer-profiles:PutIntegration": {
  Uri?: string;
  ObjectTypeName?: string;
  ObjectTypeNames?: AmazonConnectFullApiSchemaObjectTypeNames;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
  FlowDefinition?: AmazonConnectFullApiSchemaFlowDefinition;
  RoleArn?: string;
  EventTriggerNames?: AmazonConnectFullApiSchemaEventTriggerNames;
  Scope?: AmazonConnectFullApiSchemaScope;
};
  "customer-profiles:PutProfileObject": {
  ObjectTypeName: string;
  Object: string;
};
  "customer-profiles:PutProfileObjectType": {
  Description: string;
  TemplateId?: string;
  ExpirationDays?: number;
  EncryptionKey?: string;
  AllowProfileCreation?: boolean;
  SourceLastUpdatedTimestampFormat?: string;
  MaxProfileObjectCount?: number;
  SourcePriority?: number;
  Fields?: AmazonConnectFullApiSchemaFieldMap;
  Keys?: AmazonConnectFullApiSchemaKeyMap;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};
  "customer-profiles:SearchProfiles": {
  KeyName: string;
  Values: AmazonConnectFullApiSchemaRequestValueList;
  AdditionalSearchKeys?: AmazonConnectFullApiSchemaAdditionalSearchKeysList;
  LogicalOperator?: AmazonConnectFullApiSchemaLogicalOperator;
};
  "customer-profiles:StartRecommender": never;
  "customer-profiles:StartUploadJob": never;
  "customer-profiles:StopRecommender": never;
  "customer-profiles:StopUploadJob": never;
  "customer-profiles:TagResource": {
  tags: AmazonConnectFullApiSchemaTagMap6;
};
  "customer-profiles:UntagResource": never;
  "customer-profiles:UpdateCalculatedAttributeDefinition": {
  DisplayName?: string;
  Description?: string;
  Conditions?: AmazonConnectFullApiSchemaConditions;
};
  "customer-profiles:UpdateDomain": {
  DefaultExpirationDays?: number;
  DefaultEncryptionKey?: string;
  DeadLetterQueueUrl?: string;
  Matching?: AmazonConnectFullApiSchemaMatchingRequest;
  RuleBasedMatching?: AmazonConnectFullApiSchemaRuleBasedMatchingRequest;
  DataStore?: AmazonConnectFullApiSchemaDataStoreRequest;
  Tags?: AmazonConnectFullApiSchemaTagMap6;
};
  "customer-profiles:UpdateDomainLayout": {
  Description?: string;
  DisplayName?: string;
  IsDefault?: boolean;
  LayoutType?: AmazonConnectFullApiSchemaLayoutType;
  Layout?: string;
};
  "customer-profiles:UpdateEventTrigger": {
  ObjectTypeName?: string;
  Description?: string;
  EventTriggerConditions?: AmazonConnectFullApiSchemaEventTriggerConditions;
  SegmentFilter?: string;
  EventTriggerLimits?: AmazonConnectFullApiSchemaEventTriggerLimits;
};
  "customer-profiles:UpdateProfile": {
  ProfileId: string;
  AdditionalInformation?: string;
  AccountNumber?: string;
  PartyType?: AmazonConnectFullApiSchemaPartyType;
  BusinessName?: string;
  FirstName?: string;
  MiddleName?: string;
  LastName?: string;
  BirthDate?: string;
  Gender?: AmazonConnectFullApiSchemaGender;
  PhoneNumber?: string;
  MobilePhoneNumber?: string;
  HomePhoneNumber?: string;
  BusinessPhoneNumber?: string;
  EmailAddress?: string;
  PersonalEmailAddress?: string;
  BusinessEmailAddress?: string;
  Address?: AmazonConnectFullApiSchemaUpdateAddress;
  ShippingAddress?: AmazonConnectFullApiSchemaUpdateAddress;
  MailingAddress?: AmazonConnectFullApiSchemaUpdateAddress;
  BillingAddress?: AmazonConnectFullApiSchemaUpdateAddress;
  Attributes?: AmazonConnectFullApiSchemaUpdateAttributes;
  PartyTypeString?: string;
  GenderString?: string;
  ProfileType?: AmazonConnectFullApiSchemaProfileType;
  EngagementPreferences?: AmazonConnectFullApiSchemaEngagementPreferences;
};
  "customer-profiles:UpdateRecommender": {
  Description?: string;
  RecommenderConfig?: AmazonConnectFullApiSchemaRecommenderConfig;
};
  "qconnect:ActivateMessageTemplate": {
  versionNumber: number;
};
  "qconnect:CreateAIAgent": {
  clientToken?: string;
  name: string;
  type: "MANUAL_SEARCH" | "ANSWER_RECOMMENDATION" | "SELF_SERVICE" | "EMAIL_RESPONSE" | "EMAIL_OVERVIEW" | "EMAIL_GENERATIVE_ANSWER" | "ORCHESTRATION" | "NOTE_TAKING" | "CASE_SUMMARIZATION";
  configuration: AmazonConnectFullApiSchemaAIAgentConfiguration;
  visibilityStatus: "SAVED" | "PUBLISHED";
  tags?: AmazonConnectFullApiSchemaTags2;
  description?: string;
};
  "qconnect:CreateAIAgentVersion": {
  modifiedTime?: string;
  clientToken?: string;
};
  "qconnect:CreateAIGuardrail": {
  clientToken?: string;
  name: string;
  blockedInputMessaging: string;
  blockedOutputsMessaging: string;
  visibilityStatus: "SAVED" | "PUBLISHED";
  description?: string;
  topicPolicyConfig?: AmazonConnectFullApiSchemaAIGuardrailTopicPolicyConfig;
  contentPolicyConfig?: AmazonConnectFullApiSchemaAIGuardrailContentPolicyConfig;
  wordPolicyConfig?: AmazonConnectFullApiSchemaAIGuardrailWordPolicyConfig;
  sensitiveInformationPolicyConfig?: AmazonConnectFullApiSchemaAIGuardrailSensitiveInformationPolicyConfig;
  contextualGroundingPolicyConfig?: AmazonConnectFullApiSchemaAIGuardrailContextualGroundingPolicyConfig;
  tags?: AmazonConnectFullApiSchemaTags2;
};
  "qconnect:CreateAIGuardrailVersion": {
  modifiedTime?: string;
  clientToken?: string;
};
  "qconnect:CreateAIPrompt": {
  clientToken?: string;
  name: string;
  type: "ANSWER_GENERATION" | "INTENT_LABELING_GENERATION" | "QUERY_REFORMULATION" | "SELF_SERVICE_PRE_PROCESSING" | "SELF_SERVICE_ANSWER_GENERATION" | "EMAIL_RESPONSE" | "EMAIL_OVERVIEW" | "EMAIL_GENERATIVE_ANSWER" | "EMAIL_QUERY_REFORMULATION" | "ORCHESTRATION" | "NOTE_TAKING" | "CASE_SUMMARIZATION";
  templateConfiguration: AmazonConnectFullApiSchemaAIPromptTemplateConfiguration;
  visibilityStatus: "SAVED" | "PUBLISHED";
  templateType: "TEXT";
  modelId: string;
  apiFormat: "ANTHROPIC_CLAUDE_MESSAGES" | "ANTHROPIC_CLAUDE_TEXT_COMPLETIONS" | "MESSAGES" | "TEXT_COMPLETIONS";
  tags?: AmazonConnectFullApiSchemaTags2;
  description?: string;
  inferenceConfiguration?: AmazonConnectFullApiSchemaAIPromptInferenceConfiguration;
};
  "qconnect:CreateAIPromptVersion": {
  modifiedTime?: string;
  clientToken?: string;
};
  "qconnect:CreateAssistant": {
  clientToken?: string;
  name: string;
  type: "AGENT";
  description?: string;
  tags?: AmazonConnectFullApiSchemaTags2;
  serverSideEncryptionConfiguration?: AmazonConnectFullApiSchemaServerSideEncryptionConfiguration;
};
  "qconnect:CreateAssistantAssociation": {
  associationType: "KNOWLEDGE_BASE" | "EXTERNAL_BEDROCK_KNOWLEDGE_BASE";
  association: AmazonConnectFullApiSchemaAssistantAssociationInputData;
  clientToken?: string;
  tags?: AmazonConnectFullApiSchemaTags2;
};
  "qconnect:CreateContent": {
  name: string;
  title?: string;
  overrideLinkOutUri?: string;
  metadata?: AmazonConnectFullApiSchemaContentMetadata;
  uploadId: string;
  clientToken?: string;
  tags?: AmazonConnectFullApiSchemaTags2;
};
  "qconnect:CreateContentAssociation": {
  clientToken?: string;
  associationType: "AMAZON_CONNECT_GUIDE";
  association: AmazonConnectFullApiSchemaContentAssociationContents;
  tags?: AmazonConnectFullApiSchemaTags2;
};
  "qconnect:CreateKnowledgeBase": {
  clientToken?: string;
  name: string;
  knowledgeBaseType: "EXTERNAL" | "CUSTOM" | "QUICK_RESPONSES" | "MESSAGE_TEMPLATES" | "MANAGED";
  sourceConfiguration?: AmazonConnectFullApiSchemaSourceConfiguration;
  renderingConfiguration?: AmazonConnectFullApiSchemaRenderingConfiguration;
  vectorIngestionConfiguration?: AmazonConnectFullApiSchemaVectorIngestionConfiguration;
  serverSideEncryptionConfiguration?: AmazonConnectFullApiSchemaServerSideEncryptionConfiguration;
  description?: string;
  tags?: AmazonConnectFullApiSchemaTags2;
};
  "qconnect:CreateMessageTemplate": {
  name?: string;
  content?: AmazonConnectFullApiSchemaMessageTemplateContentProvider;
  description?: string;
  channelSubtype: "EMAIL" | "SMS" | "WHATSAPP" | "PUSH";
  language?: string;
  sourceConfiguration?: AmazonConnectFullApiSchemaMessageTemplateSourceConfiguration;
  defaultAttributes?: AmazonConnectFullApiSchemaMessageTemplateAttributes;
  groupingConfiguration?: AmazonConnectFullApiSchemaGroupingConfiguration;
  clientToken?: string;
  tags?: AmazonConnectFullApiSchemaTags2;
};
  "qconnect:CreateMessageTemplateAttachment": {
  contentDisposition: "ATTACHMENT";
  name: string;
  body: string;
  clientToken?: string;
};
  "qconnect:CreateMessageTemplateVersion": {
  messageTemplateContentSha256?: string;
};
  "qconnect:CreateQuickResponse": {
  name: string;
  content: AmazonConnectFullApiSchemaQuickResponseDataProvider;
  contentType?: string;
  groupingConfiguration?: AmazonConnectFullApiSchemaGroupingConfiguration;
  description?: string;
  shortcutKey?: string;
  isActive?: boolean;
  channels?: AmazonConnectFullApiSchemaChannels;
  language?: string;
  clientToken?: string;
  tags?: AmazonConnectFullApiSchemaTags2;
};
  "qconnect:CreateSession": {
  clientToken?: string;
  name: string;
  description?: string;
  tags?: AmazonConnectFullApiSchemaTags2;
  tagFilter?: AmazonConnectFullApiSchemaTagFilter;
  aiAgentConfiguration?: AmazonConnectFullApiSchemaAIAgentConfigurationMap;
  contactArn?: string;
  orchestratorConfigurationList?: AmazonConnectFullApiSchemaOrchestratorConfigurationList;
  removeOrchestratorConfigurationList?: boolean;
};
  "qconnect:DeactivateMessageTemplate": {
  versionNumber: number;
};
  "qconnect:DeleteAIAgent": never;
  "qconnect:DeleteAIAgentVersion": never;
  "qconnect:DeleteAIGuardrail": never;
  "qconnect:DeleteAIGuardrailVersion": never;
  "qconnect:DeleteAIPrompt": never;
  "qconnect:DeleteAIPromptVersion": never;
  "qconnect:DeleteAssistant": never;
  "qconnect:DeleteAssistantAssociation": never;
  "qconnect:DeleteContent": never;
  "qconnect:DeleteContentAssociation": never;
  "qconnect:DeleteImportJob": never;
  "qconnect:DeleteKnowledgeBase": never;
  "qconnect:DeleteMessageTemplate": never;
  "qconnect:DeleteMessageTemplateAttachment": never;
  "qconnect:DeleteQuickResponse": never;
  "qconnect:GetAIAgent": never;
  "qconnect:GetAIGuardrail": never;
  "qconnect:GetAIPrompt": never;
  "qconnect:GetAssistant": never;
  "qconnect:GetAssistantAssociation": never;
  "qconnect:GetContent": never;
  "qconnect:GetContentAssociation": never;
  "qconnect:GetContentSummary": never;
  "qconnect:GetImportJob": never;
  "qconnect:GetKnowledgeBase": never;
  "qconnect:GetMessageTemplate": never;
  "qconnect:GetNextMessage": never;
  "qconnect:GetQuickResponse": never;
  "qconnect:GetRecommendations": never;
  "qconnect:GetSession": never;
  "qconnect:ListAIAgentVersions": never;
  "qconnect:ListAIAgents": never;
  "qconnect:ListAIGuardrailVersions": never;
  "qconnect:ListAIGuardrails": never;
  "qconnect:ListAIPromptVersions": never;
  "qconnect:ListAIPrompts": never;
  "qconnect:ListAssistantAssociations": never;
  "qconnect:ListAssistants": never;
  "qconnect:ListContentAssociations": never;
  "qconnect:ListContents": never;
  "qconnect:ListImportJobs": never;
  "qconnect:ListKnowledgeBases": never;
  "qconnect:ListMessageTemplateVersions": never;
  "qconnect:ListMessageTemplates": never;
  "qconnect:ListMessages": never;
  "qconnect:ListModels": never;
  "qconnect:ListQuickResponses": never;
  "qconnect:ListSpans": never;
  "qconnect:ListTagsForResource": never;
  "qconnect:NotifyRecommendationsReceived": {
  recommendationIds: AmazonConnectFullApiSchemaRecommendationIdList;
};
  "qconnect:PutFeedback": {
  targetId: string;
  targetType: "RECOMMENDATION" | "RESULT" | "MESSAGE";
  contentFeedback: AmazonConnectFullApiSchemaContentFeedbackData;
};
  "qconnect:QueryAssistant": {
  queryText?: string;
  nextToken?: string;
  maxResults?: number;
  sessionId?: string;
  queryCondition?: AmazonConnectFullApiSchemaQueryConditionExpression;
  queryInputData?: AmazonConnectFullApiSchemaQueryInputData;
  overrideKnowledgeBaseSearchType?: "HYBRID" | "SEMANTIC";
};
  "qconnect:RemoveAssistantAIAgent": never;
  "qconnect:RemoveKnowledgeBaseTemplateUri": never;
  "qconnect:RenderMessageTemplate": {
  attributes: AmazonConnectFullApiSchemaMessageTemplateAttributes;
};
  "qconnect:Retrieve": {
  retrievalConfiguration: AmazonConnectFullApiSchemaRetrievalConfiguration;
  retrievalQuery: string;
};
  "qconnect:SearchContent": {
  searchExpression: AmazonConnectFullApiSchemaSearchExpression;
};
  "qconnect:SearchMessageTemplates": {
  searchExpression: AmazonConnectFullApiSchemaMessageTemplateSearchExpression;
};
  "qconnect:SearchQuickResponses": {
  searchExpression: AmazonConnectFullApiSchemaQuickResponseSearchExpression;
  attributes?: AmazonConnectFullApiSchemaContactAttributes;
};
  "qconnect:SearchSessions": {
  searchExpression: AmazonConnectFullApiSchemaSearchExpression;
};
  "qconnect:SendMessage": {
  type: "TEXT" | "TOOL_USE_RESULT";
  message: AmazonConnectFullApiSchemaMessageInput;
  aiAgentId?: string;
  conversationContext?: AmazonConnectFullApiSchemaConversationContext;
  configuration?: AmazonConnectFullApiSchemaMessageConfiguration;
  clientToken?: string;
  orchestratorUseCase?: string;
  metadata?: AmazonConnectFullApiSchemaMessageMetadata;
  originRequestId?: string;
};
  "qconnect:StartContentUpload": {
  contentType: string;
  presignedUrlTimeToLive?: number;
};
  "qconnect:StartImportJob": {
  importJobType: "QUICK_RESPONSES";
  uploadId: string;
  clientToken?: string;
  metadata?: AmazonConnectFullApiSchemaContentMetadata;
  externalSourceConfiguration?: AmazonConnectFullApiSchemaExternalSourceConfiguration;
};
  "qconnect:TagResource": {
  tags: AmazonConnectFullApiSchemaTags2;
};
  "qconnect:UntagResource": never;
  "qconnect:UpdateAIAgent": {
  clientToken?: string;
  visibilityStatus: "SAVED" | "PUBLISHED";
  configuration?: AmazonConnectFullApiSchemaAIAgentConfiguration;
  description?: string;
};
  "qconnect:UpdateAIGuardrail": {
  clientToken?: string;
  visibilityStatus: "SAVED" | "PUBLISHED";
  blockedInputMessaging: string;
  blockedOutputsMessaging: string;
  description?: string;
  topicPolicyConfig?: AmazonConnectFullApiSchemaAIGuardrailTopicPolicyConfig;
  contentPolicyConfig?: AmazonConnectFullApiSchemaAIGuardrailContentPolicyConfig;
  wordPolicyConfig?: AmazonConnectFullApiSchemaAIGuardrailWordPolicyConfig;
  sensitiveInformationPolicyConfig?: AmazonConnectFullApiSchemaAIGuardrailSensitiveInformationPolicyConfig;
  contextualGroundingPolicyConfig?: AmazonConnectFullApiSchemaAIGuardrailContextualGroundingPolicyConfig;
};
  "qconnect:UpdateAIPrompt": {
  clientToken?: string;
  visibilityStatus: "SAVED" | "PUBLISHED";
  templateConfiguration?: AmazonConnectFullApiSchemaAIPromptTemplateConfiguration;
  description?: string;
  modelId?: string;
  inferenceConfiguration?: AmazonConnectFullApiSchemaAIPromptInferenceConfiguration;
};
  "qconnect:UpdateAssistantAIAgent": {
  aiAgentType: "MANUAL_SEARCH" | "ANSWER_RECOMMENDATION" | "SELF_SERVICE" | "EMAIL_RESPONSE" | "EMAIL_OVERVIEW" | "EMAIL_GENERATIVE_ANSWER" | "ORCHESTRATION" | "NOTE_TAKING" | "CASE_SUMMARIZATION";
  configuration: AmazonConnectFullApiSchemaAIAgentConfigurationData;
  orchestratorUseCase?: string;
};
  "qconnect:UpdateContent": {
  revisionId?: string;
  title?: string;
  overrideLinkOutUri?: string;
  removeOverrideLinkOutUri?: boolean;
  metadata?: AmazonConnectFullApiSchemaContentMetadata;
  uploadId?: string;
};
  "qconnect:UpdateKnowledgeBaseTemplateUri": {
  templateUri: string;
};
  "qconnect:UpdateMessageTemplate": {
  content?: AmazonConnectFullApiSchemaMessageTemplateContentProvider;
  language?: string;
  sourceConfiguration?: AmazonConnectFullApiSchemaMessageTemplateSourceConfiguration;
  defaultAttributes?: AmazonConnectFullApiSchemaMessageTemplateAttributes;
};
  "qconnect:UpdateMessageTemplateMetadata": {
  name?: string;
  description?: string;
  groupingConfiguration?: AmazonConnectFullApiSchemaGroupingConfiguration;
};
  "qconnect:UpdateQuickResponse": {
  name?: string;
  content?: AmazonConnectFullApiSchemaQuickResponseDataProvider;
  contentType?: string;
  groupingConfiguration?: AmazonConnectFullApiSchemaGroupingConfiguration;
  removeGroupingConfiguration?: boolean;
  description?: string;
  removeDescription?: boolean;
  shortcutKey?: string;
  removeShortcutKey?: boolean;
  isActive?: boolean;
  channels?: AmazonConnectFullApiSchemaChannels;
  language?: string;
};
  "qconnect:UpdateSession": {
  description?: string;
  tagFilter?: AmazonConnectFullApiSchemaTagFilter;
  aiAgentConfiguration?: AmazonConnectFullApiSchemaAIAgentConfigurationMap;
  orchestratorConfigurationList?: AmazonConnectFullApiSchemaOrchestratorConfigurationList;
  removeOrchestratorConfigurationList?: boolean;
};
  "qconnect:UpdateSessionData": {
  namespace?: "Custom";
  data: AmazonConnectFullApiSchemaRuntimeSessionDataList;
};
  "wisdom:CreateAssistant": {
  clientToken?: string;
  name: string;
  type: "AGENT";
  description?: string;
  tags?: AmazonConnectFullApiSchemaTags3;
  serverSideEncryptionConfiguration?: AmazonConnectFullApiSchemaServerSideEncryptionConfiguration2;
};
  "wisdom:CreateAssistantAssociation": {
  associationType: "KNOWLEDGE_BASE";
  association: AmazonConnectFullApiSchemaAssistantAssociationInputData2;
  clientToken?: string;
  tags?: AmazonConnectFullApiSchemaTags3;
};
  "wisdom:CreateContent": {
  name: string;
  title?: string;
  overrideLinkOutUri?: string;
  metadata?: AmazonConnectFullApiSchemaContentMetadata2;
  uploadId: string;
  clientToken?: string;
  tags?: AmazonConnectFullApiSchemaTags3;
};
  "wisdom:CreateKnowledgeBase": {
  clientToken?: string;
  name: string;
  knowledgeBaseType: "EXTERNAL" | "CUSTOM" | "QUICK_RESPONSES";
  sourceConfiguration?: AmazonConnectFullApiSchemaSourceConfiguration2;
  renderingConfiguration?: AmazonConnectFullApiSchemaRenderingConfiguration2;
  serverSideEncryptionConfiguration?: AmazonConnectFullApiSchemaServerSideEncryptionConfiguration2;
  description?: string;
  tags?: AmazonConnectFullApiSchemaTags3;
};
  "wisdom:CreateQuickResponse": {
  name: string;
  content: AmazonConnectFullApiSchemaQuickResponseDataProvider2;
  contentType?: string;
  groupingConfiguration?: AmazonConnectFullApiSchemaGroupingConfiguration2;
  description?: string;
  shortcutKey?: string;
  isActive?: boolean;
  channels?: AmazonConnectFullApiSchemaChannels2;
  language?: string;
  clientToken?: string;
  tags?: AmazonConnectFullApiSchemaTags3;
};
  "wisdom:CreateSession": {
  clientToken?: string;
  name: string;
  description?: string;
  tags?: AmazonConnectFullApiSchemaTags3;
};
  "wisdom:DeleteAssistant": never;
  "wisdom:DeleteAssistantAssociation": never;
  "wisdom:DeleteContent": never;
  "wisdom:DeleteImportJob": never;
  "wisdom:DeleteKnowledgeBase": never;
  "wisdom:DeleteQuickResponse": never;
  "wisdom:GetAssistant": never;
  "wisdom:GetAssistantAssociation": never;
  "wisdom:GetContent": never;
  "wisdom:GetContentSummary": never;
  "wisdom:GetImportJob": never;
  "wisdom:GetKnowledgeBase": never;
  "wisdom:GetQuickResponse": never;
  "wisdom:GetRecommendations": never;
  "wisdom:GetSession": never;
  "wisdom:ListAssistantAssociations": never;
  "wisdom:ListAssistants": never;
  "wisdom:ListContents": never;
  "wisdom:ListImportJobs": never;
  "wisdom:ListKnowledgeBases": never;
  "wisdom:ListQuickResponses": never;
  "wisdom:ListTagsForResource": never;
  "wisdom:NotifyRecommendationsReceived": {
  recommendationIds: AmazonConnectFullApiSchemaRecommendationIdList2;
};
  "wisdom:QueryAssistant": {
  queryText: string;
  nextToken?: string;
  maxResults?: number;
};
  "wisdom:RemoveKnowledgeBaseTemplateUri": never;
  "wisdom:SearchContent": {
  searchExpression: AmazonConnectFullApiSchemaSearchExpression2;
};
  "wisdom:SearchQuickResponses": {
  searchExpression: AmazonConnectFullApiSchemaQuickResponseSearchExpression2;
  attributes?: AmazonConnectFullApiSchemaContactAttributes2;
};
  "wisdom:SearchSessions": {
  searchExpression: AmazonConnectFullApiSchemaSearchExpression2;
};
  "wisdom:StartContentUpload": {
  contentType: string;
  presignedUrlTimeToLive?: number;
};
  "wisdom:StartImportJob": {
  importJobType: "QUICK_RESPONSES";
  uploadId: string;
  clientToken?: string;
  metadata?: AmazonConnectFullApiSchemaContentMetadata2;
  externalSourceConfiguration?: AmazonConnectFullApiSchemaExternalSourceConfiguration2;
};
  "wisdom:TagResource": {
  tags: AmazonConnectFullApiSchemaTags3;
};
  "wisdom:UntagResource": never;
  "wisdom:UpdateContent": {
  revisionId?: string;
  title?: string;
  overrideLinkOutUri?: string;
  removeOverrideLinkOutUri?: boolean;
  metadata?: AmazonConnectFullApiSchemaContentMetadata2;
  uploadId?: string;
};
  "wisdom:UpdateKnowledgeBaseTemplateUri": {
  templateUri: string;
};
  "wisdom:UpdateQuickResponse": {
  name?: string;
  content?: AmazonConnectFullApiSchemaQuickResponseDataProvider2;
  contentType?: string;
  groupingConfiguration?: AmazonConnectFullApiSchemaGroupingConfiguration2;
  removeGroupingConfiguration?: boolean;
  description?: string;
  removeDescription?: boolean;
  shortcutKey?: string;
  removeShortcutKey?: boolean;
  isActive?: boolean;
  channels?: AmazonConnectFullApiSchemaChannels2;
  language?: string;
};
}

export interface AmazonConnectFullApiOperationRequestBodyRequiredMap {
  "appintegrations:CreateApplication": true;
  "appintegrations:CreateDataIntegration": true;
  "appintegrations:CreateDataIntegrationAssociation": false;
  "appintegrations:CreateEventIntegration": true;
  "appintegrations:DeleteApplication": false;
  "appintegrations:DeleteDataIntegration": false;
  "appintegrations:DeleteEventIntegration": false;
  "appintegrations:GetApplication": false;
  "appintegrations:GetDataIntegration": false;
  "appintegrations:GetEventIntegration": false;
  "appintegrations:ListApplicationAssociations": false;
  "appintegrations:ListApplications": false;
  "appintegrations:ListDataIntegrationAssociations": false;
  "appintegrations:ListDataIntegrations": false;
  "appintegrations:ListEventIntegrationAssociations": false;
  "appintegrations:ListEventIntegrations": false;
  "appintegrations:ListTagsForResource": false;
  "appintegrations:TagResource": true;
  "appintegrations:UntagResource": false;
  "appintegrations:UpdateApplication": false;
  "appintegrations:UpdateDataIntegration": false;
  "appintegrations:UpdateDataIntegrationAssociation": true;
  "appintegrations:UpdateEventIntegration": false;
  "connect:ActivateEvaluationForm": true;
  "connect:AssociateAnalyticsDataSet": true;
  "connect:AssociateApprovedOrigin": true;
  "connect:AssociateBot": false;
  "connect:AssociateContactWithUser": true;
  "connect:AssociateDefaultVocabulary": false;
  "connect:AssociateEmailAddressAlias": true;
  "connect:AssociateFlow": true;
  "connect:AssociateHoursOfOperations": true;
  "connect:AssociateInstanceStorageConfig": true;
  "connect:AssociateLambdaFunction": true;
  "connect:AssociateLexBot": true;
  "connect:AssociatePhoneNumberContactFlow": true;
  "connect:AssociateQueueEmailAddresses": true;
  "connect:AssociateQueueQuickConnects": true;
  "connect:AssociateRoutingProfileQueues": false;
  "connect:AssociateSecurityKey": true;
  "connect:AssociateSecurityProfiles": true;
  "connect:AssociateTrafficDistributionGroupUser": true;
  "connect:AssociateUserProficiencies": true;
  "connect:AssociateWorkspace": true;
  "connect:BatchAssociateAnalyticsDataSet": true;
  "connect:BatchCreateDataTableValue": true;
  "connect:BatchDeleteDataTableValue": true;
  "connect:BatchDescribeDataTableValue": true;
  "connect:BatchDisassociateAnalyticsDataSet": true;
  "connect:BatchGetAttachedFileMetadata": true;
  "connect:BatchGetFlowAssociation": true;
  "connect:BatchPutContact": true;
  "connect:BatchUpdateDataTableValue": true;
  "connect:ClaimPhoneNumber": true;
  "connect:CompleteAttachedFileUpload": false;
  "connect:CreateAgentStatus": true;
  "connect:CreateContact": true;
  "connect:CreateContactFlow": true;
  "connect:CreateContactFlowModule": true;
  "connect:CreateContactFlowModuleAlias": true;
  "connect:CreateContactFlowModuleVersion": false;
  "connect:CreateContactFlowVersion": false;
  "connect:CreateDataTable": true;
  "connect:CreateDataTableAttribute": true;
  "connect:CreateEmailAddress": true;
  "connect:CreateEvaluationForm": true;
  "connect:CreateHoursOfOperation": true;
  "connect:CreateHoursOfOperationOverride": true;
  "connect:CreateInstance": true;
  "connect:CreateIntegrationAssociation": true;
  "connect:CreateNotification": true;
  "connect:CreateParticipant": true;
  "connect:CreatePersistentContactAssociation": true;
  "connect:CreatePredefinedAttribute": true;
  "connect:CreatePrompt": true;
  "connect:CreatePushNotificationRegistration": true;
  "connect:CreateQueue": true;
  "connect:CreateQuickConnect": true;
  "connect:CreateRoutingProfile": true;
  "connect:CreateRule": true;
  "connect:CreateSecurityProfile": true;
  "connect:CreateTaskTemplate": true;
  "connect:CreateTestCase": true;
  "connect:CreateTrafficDistributionGroup": true;
  "connect:CreateUseCase": true;
  "connect:CreateUser": true;
  "connect:CreateUserHierarchyGroup": true;
  "connect:CreateView": true;
  "connect:CreateViewVersion": false;
  "connect:CreateVocabulary": true;
  "connect:CreateWorkspace": true;
  "connect:CreateWorkspacePage": true;
  "connect:DeactivateEvaluationForm": true;
  "connect:DeleteAttachedFile": false;
  "connect:DeleteContactEvaluation": false;
  "connect:DeleteContactFlow": false;
  "connect:DeleteContactFlowModule": false;
  "connect:DeleteContactFlowModuleAlias": false;
  "connect:DeleteContactFlowModuleVersion": false;
  "connect:DeleteContactFlowVersion": false;
  "connect:DeleteDataTable": false;
  "connect:DeleteDataTableAttribute": false;
  "connect:DeleteEmailAddress": false;
  "connect:DeleteEvaluationForm": false;
  "connect:DeleteHoursOfOperation": false;
  "connect:DeleteHoursOfOperationOverride": false;
  "connect:DeleteInstance": false;
  "connect:DeleteIntegrationAssociation": false;
  "connect:DeleteNotification": false;
  "connect:DeletePredefinedAttribute": false;
  "connect:DeletePrompt": false;
  "connect:DeletePushNotificationRegistration": false;
  "connect:DeleteQueue": false;
  "connect:DeleteQuickConnect": false;
  "connect:DeleteRoutingProfile": false;
  "connect:DeleteRule": false;
  "connect:DeleteSecurityProfile": false;
  "connect:DeleteTaskTemplate": false;
  "connect:DeleteTestCase": false;
  "connect:DeleteTrafficDistributionGroup": false;
  "connect:DeleteUseCase": false;
  "connect:DeleteUser": false;
  "connect:DeleteUserHierarchyGroup": false;
  "connect:DeleteView": false;
  "connect:DeleteViewVersion": false;
  "connect:DeleteVocabulary": false;
  "connect:DeleteWorkspace": false;
  "connect:DeleteWorkspaceMedia": false;
  "connect:DeleteWorkspacePage": false;
  "connect:DescribeAgentStatus": false;
  "connect:DescribeAttachedFilesConfiguration": false;
  "connect:DescribeAuthenticationProfile": false;
  "connect:DescribeContact": false;
  "connect:DescribeContactEvaluation": false;
  "connect:DescribeContactFlow": false;
  "connect:DescribeContactFlowModule": false;
  "connect:DescribeContactFlowModuleAlias": false;
  "connect:DescribeDataTable": false;
  "connect:DescribeDataTableAttribute": false;
  "connect:DescribeEmailAddress": false;
  "connect:DescribeEvaluationForm": false;
  "connect:DescribeHoursOfOperation": false;
  "connect:DescribeHoursOfOperationOverride": false;
  "connect:DescribeInstance": false;
  "connect:DescribeInstanceAttribute": false;
  "connect:DescribeInstanceStorageConfig": false;
  "connect:DescribeNotification": false;
  "connect:DescribePhoneNumber": false;
  "connect:DescribePredefinedAttribute": false;
  "connect:DescribePrompt": false;
  "connect:DescribeQueue": false;
  "connect:DescribeQuickConnect": false;
  "connect:DescribeRoutingProfile": false;
  "connect:DescribeRule": false;
  "connect:DescribeSecurityProfile": false;
  "connect:DescribeTestCase": false;
  "connect:DescribeTrafficDistributionGroup": false;
  "connect:DescribeUser": false;
  "connect:DescribeUserHierarchyGroup": false;
  "connect:DescribeUserHierarchyStructure": false;
  "connect:DescribeView": false;
  "connect:DescribeVocabulary": false;
  "connect:DescribeWorkspace": false;
  "connect:DisassociateAnalyticsDataSet": true;
  "connect:DisassociateApprovedOrigin": false;
  "connect:DisassociateBot": false;
  "connect:DisassociateEmailAddressAlias": true;
  "connect:DisassociateFlow": false;
  "connect:DisassociateHoursOfOperations": true;
  "connect:DisassociateInstanceStorageConfig": false;
  "connect:DisassociateLambdaFunction": false;
  "connect:DisassociateLexBot": false;
  "connect:DisassociatePhoneNumberContactFlow": false;
  "connect:DisassociateQueueEmailAddresses": true;
  "connect:DisassociateQueueQuickConnects": true;
  "connect:DisassociateRoutingProfileQueues": false;
  "connect:DisassociateSecurityKey": false;
  "connect:DisassociateSecurityProfiles": true;
  "connect:DisassociateTrafficDistributionGroupUser": false;
  "connect:DisassociateUserProficiencies": true;
  "connect:DisassociateWorkspace": true;
  "connect:DismissUserContact": true;
  "connect:EvaluateDataTableValues": true;
  "connect:GetAttachedFile": false;
  "connect:GetContactAttributes": false;
  "connect:GetContactMetrics": true;
  "connect:GetCurrentMetricData": true;
  "connect:GetCurrentUserData": true;
  "connect:GetEffectiveHoursOfOperations": false;
  "connect:GetFederationToken": false;
  "connect:GetFlowAssociation": false;
  "connect:GetMetricData": true;
  "connect:GetMetricDataV2": true;
  "connect:GetPromptFile": false;
  "connect:GetTaskTemplate": false;
  "connect:GetTestCaseExecutionSummary": false;
  "connect:GetTrafficDistribution": false;
  "connect:ImportPhoneNumber": true;
  "connect:ImportWorkspaceMedia": true;
  "connect:ListAgentStatuses": false;
  "connect:ListAnalyticsDataAssociations": false;
  "connect:ListAnalyticsDataLakeDataSets": false;
  "connect:ListApprovedOrigins": false;
  "connect:ListAssociatedContacts": false;
  "connect:ListAttachedFilesConfigurations": false;
  "connect:ListAuthenticationProfiles": false;
  "connect:ListBots": false;
  "connect:ListChildHoursOfOperations": false;
  "connect:ListContactEvaluations": false;
  "connect:ListContactFlowModuleAliases": false;
  "connect:ListContactFlowModuleVersions": false;
  "connect:ListContactFlowModules": false;
  "connect:ListContactFlowVersions": false;
  "connect:ListContactFlows": false;
  "connect:ListContactReferences": false;
  "connect:ListDataTableAttributes": false;
  "connect:ListDataTablePrimaryValues": false;
  "connect:ListDataTableValues": false;
  "connect:ListDataTables": false;
  "connect:ListDefaultVocabularies": false;
  "connect:ListEntitySecurityProfiles": true;
  "connect:ListEvaluationFormVersions": false;
  "connect:ListEvaluationForms": false;
  "connect:ListFlowAssociations": false;
  "connect:ListHoursOfOperationOverrides": false;
  "connect:ListHoursOfOperations": false;
  "connect:ListInstanceAttributes": false;
  "connect:ListInstanceStorageConfigs": false;
  "connect:ListInstances": false;
  "connect:ListIntegrationAssociations": false;
  "connect:ListLambdaFunctions": false;
  "connect:ListLexBots": false;
  "connect:ListNotifications": false;
  "connect:ListPhoneNumbers": false;
  "connect:ListPhoneNumbersV2": false;
  "connect:ListPredefinedAttributes": false;
  "connect:ListPrompts": false;
  "connect:ListQueueEmailAddresses": false;
  "connect:ListQueueQuickConnects": false;
  "connect:ListQueues": false;
  "connect:ListQuickConnects": false;
  "connect:ListRealtimeContactAnalysisSegmentsV2": true;
  "connect:ListRoutingProfileManualAssignmentQueues": false;
  "connect:ListRoutingProfileQueues": false;
  "connect:ListRoutingProfiles": false;
  "connect:ListRules": false;
  "connect:ListSecurityKeys": false;
  "connect:ListSecurityProfileApplications": false;
  "connect:ListSecurityProfileFlowModules": false;
  "connect:ListSecurityProfilePermissions": false;
  "connect:ListSecurityProfiles": false;
  "connect:ListTagsForResource": false;
  "connect:ListTaskTemplates": false;
  "connect:ListTestCaseExecutionRecords": false;
  "connect:ListTestCaseExecutions": false;
  "connect:ListTestCases": false;
  "connect:ListTrafficDistributionGroupUsers": false;
  "connect:ListTrafficDistributionGroups": false;
  "connect:ListUseCases": false;
  "connect:ListUserHierarchyGroups": false;
  "connect:ListUserNotifications": false;
  "connect:ListUserProficiencies": false;
  "connect:ListUsers": false;
  "connect:ListViewVersions": false;
  "connect:ListViews": false;
  "connect:ListWorkspaceMedia": false;
  "connect:ListWorkspacePages": false;
  "connect:ListWorkspaces": false;
  "connect:MonitorContact": true;
  "connect:PauseContact": true;
  "connect:PutUserStatus": true;
  "connect:ReleasePhoneNumber": false;
  "connect:ReplicateInstance": true;
  "connect:ResumeContact": true;
  "connect:ResumeContactRecording": true;
  "connect:SearchAgentStatuses": true;
  "connect:SearchAvailablePhoneNumbers": true;
  "connect:SearchContactEvaluations": true;
  "connect:SearchContactFlowModules": true;
  "connect:SearchContactFlows": true;
  "connect:SearchContacts": true;
  "connect:SearchDataTables": true;
  "connect:SearchEmailAddresses": true;
  "connect:SearchEvaluationForms": true;
  "connect:SearchHoursOfOperationOverrides": true;
  "connect:SearchHoursOfOperations": true;
  "connect:SearchNotifications": true;
  "connect:SearchPredefinedAttributes": true;
  "connect:SearchPrompts": true;
  "connect:SearchQueues": true;
  "connect:SearchQuickConnects": true;
  "connect:SearchResourceTags": true;
  "connect:SearchRoutingProfiles": true;
  "connect:SearchSecurityProfiles": true;
  "connect:SearchTestCases": true;
  "connect:SearchUserHierarchyGroups": true;
  "connect:SearchUsers": true;
  "connect:SearchViews": true;
  "connect:SearchVocabularies": false;
  "connect:SearchWorkspaceAssociations": true;
  "connect:SearchWorkspaces": true;
  "connect:SendChatIntegrationEvent": true;
  "connect:SendOutboundEmail": true;
  "connect:StartAttachedFileUpload": true;
  "connect:StartChatContact": true;
  "connect:StartContactEvaluation": true;
  "connect:StartContactMediaProcessing": false;
  "connect:StartContactRecording": true;
  "connect:StartContactStreaming": true;
  "connect:StartEmailContact": true;
  "connect:StartOutboundChatContact": true;
  "connect:StartOutboundEmailContact": true;
  "connect:StartOutboundVoiceContact": true;
  "connect:StartScreenSharing": true;
  "connect:StartTaskContact": true;
  "connect:StartTestCaseExecution": false;
  "connect:StartWebRTCContact": true;
  "connect:StopContact": true;
  "connect:StopContactMediaProcessing": false;
  "connect:StopContactRecording": true;
  "connect:StopContactStreaming": true;
  "connect:StopTestCaseExecution": false;
  "connect:SubmitContactEvaluation": false;
  "connect:SuspendContactRecording": true;
  "connect:TagContact": true;
  "connect:TagResource": true;
  "connect:TransferContact": true;
  "connect:UntagContact": false;
  "connect:UntagResource": false;
  "connect:UpdateAgentStatus": false;
  "connect:UpdateAttachedFilesConfiguration": false;
  "connect:UpdateAuthenticationProfile": false;
  "connect:UpdateContact": false;
  "connect:UpdateContactAttributes": true;
  "connect:UpdateContactEvaluation": false;
  "connect:UpdateContactFlowContent": true;
  "connect:UpdateContactFlowMetadata": false;
  "connect:UpdateContactFlowModuleAlias": false;
  "connect:UpdateContactFlowModuleContent": false;
  "connect:UpdateContactFlowModuleMetadata": false;
  "connect:UpdateContactFlowName": false;
  "connect:UpdateContactRoutingData": false;
  "connect:UpdateContactSchedule": true;
  "connect:UpdateDataTableAttribute": true;
  "connect:UpdateDataTableMetadata": true;
  "connect:UpdateDataTablePrimaryValues": true;
  "connect:UpdateEmailAddressMetadata": false;
  "connect:UpdateEvaluationForm": true;
  "connect:UpdateHoursOfOperation": false;
  "connect:UpdateHoursOfOperationOverride": false;
  "connect:UpdateInstanceAttribute": true;
  "connect:UpdateInstanceStorageConfig": true;
  "connect:UpdateNotificationContent": true;
  "connect:UpdateParticipantAuthentication": true;
  "connect:UpdateParticipantRoleConfig": true;
  "connect:UpdatePhoneNumber": false;
  "connect:UpdatePhoneNumberMetadata": false;
  "connect:UpdatePredefinedAttribute": false;
  "connect:UpdatePrompt": false;
  "connect:UpdateQueueHoursOfOperation": true;
  "connect:UpdateQueueMaxContacts": false;
  "connect:UpdateQueueName": false;
  "connect:UpdateQueueOutboundCallerConfig": true;
  "connect:UpdateQueueOutboundEmailConfig": true;
  "connect:UpdateQueueStatus": true;
  "connect:UpdateQuickConnectConfig": true;
  "connect:UpdateQuickConnectName": false;
  "connect:UpdateRoutingProfileAgentAvailabilityTimer": true;
  "connect:UpdateRoutingProfileConcurrency": true;
  "connect:UpdateRoutingProfileDefaultOutboundQueue": true;
  "connect:UpdateRoutingProfileName": false;
  "connect:UpdateRoutingProfileQueues": true;
  "connect:UpdateRule": true;
  "connect:UpdateSecurityProfile": false;
  "connect:UpdateTaskTemplate": false;
  "connect:UpdateTestCase": false;
  "connect:UpdateTrafficDistribution": false;
  "connect:UpdateUserConfig": false;
  "connect:UpdateUserHierarchy": false;
  "connect:UpdateUserHierarchyGroupName": true;
  "connect:UpdateUserHierarchyStructure": true;
  "connect:UpdateUserIdentityInfo": true;
  "connect:UpdateUserNotificationStatus": true;
  "connect:UpdateUserPhoneConfig": true;
  "connect:UpdateUserProficiencies": true;
  "connect:UpdateUserRoutingProfile": true;
  "connect:UpdateUserSecurityProfiles": true;
  "connect:UpdateViewContent": true;
  "connect:UpdateViewMetadata": false;
  "connect:UpdateWorkspaceMetadata": false;
  "connect:UpdateWorkspacePage": false;
  "connect:UpdateWorkspaceTheme": false;
  "connect:UpdateWorkspaceVisibility": true;
  "connectparticipant:CancelParticipantAuthentication": true;
  "connectparticipant:CompleteAttachmentUpload": true;
  "connectparticipant:CreateParticipantConnection": false;
  "connectparticipant:DescribeView": false;
  "connectparticipant:DisconnectParticipant": false;
  "connectparticipant:GetAttachment": true;
  "connectparticipant:GetAuthenticationUrl": true;
  "connectparticipant:GetTranscript": false;
  "connectparticipant:SendEvent": true;
  "connectparticipant:SendMessage": true;
  "connectparticipant:StartAttachmentUpload": true;
  "connectcases:BatchGetCaseRule": true;
  "connectcases:BatchGetField": true;
  "connectcases:BatchPutFieldOptions": true;
  "connectcases:CreateCase": true;
  "connectcases:CreateCaseRule": true;
  "connectcases:CreateDomain": true;
  "connectcases:CreateField": true;
  "connectcases:CreateLayout": true;
  "connectcases:CreateRelatedItem": true;
  "connectcases:CreateTemplate": true;
  "connectcases:DeleteCase": false;
  "connectcases:DeleteCaseRule": false;
  "connectcases:DeleteDomain": false;
  "connectcases:DeleteField": false;
  "connectcases:DeleteLayout": false;
  "connectcases:DeleteRelatedItem": false;
  "connectcases:DeleteTemplate": false;
  "connectcases:GetCase": true;
  "connectcases:GetCaseAuditEvents": false;
  "connectcases:GetCaseEventConfiguration": false;
  "connectcases:GetDomain": false;
  "connectcases:GetLayout": false;
  "connectcases:GetTemplate": false;
  "connectcases:ListCaseRules": false;
  "connectcases:ListCasesForContact": true;
  "connectcases:ListDomains": false;
  "connectcases:ListFieldOptions": false;
  "connectcases:ListFields": false;
  "connectcases:ListLayouts": false;
  "connectcases:ListTagsForResource": false;
  "connectcases:ListTemplates": false;
  "connectcases:PutCaseEventConfiguration": true;
  "connectcases:SearchAllRelatedItems": false;
  "connectcases:SearchCases": false;
  "connectcases:SearchRelatedItems": false;
  "connectcases:TagResource": true;
  "connectcases:UntagResource": false;
  "connectcases:UpdateCase": true;
  "connectcases:UpdateCaseRule": false;
  "connectcases:UpdateField": false;
  "connectcases:UpdateLayout": false;
  "connectcases:UpdateRelatedItem": true;
  "connectcases:UpdateTemplate": false;
  "connectcampaigns:CreateCampaign": true;
  "connectcampaigns:DeleteCampaign": false;
  "connectcampaigns:DeleteConnectInstanceConfig": false;
  "connectcampaigns:DeleteInstanceOnboardingJob": false;
  "connectcampaigns:DescribeCampaign": false;
  "connectcampaigns:GetCampaignState": false;
  "connectcampaigns:GetCampaignStateBatch": true;
  "connectcampaigns:GetConnectInstanceConfig": false;
  "connectcampaigns:GetInstanceOnboardingJobStatus": false;
  "connectcampaigns:ListCampaigns": false;
  "connectcampaigns:ListTagsForResource": false;
  "connectcampaigns:PauseCampaign": false;
  "connectcampaigns:PutDialRequestBatch": true;
  "connectcampaigns:ResumeCampaign": false;
  "connectcampaigns:StartCampaign": false;
  "connectcampaigns:StartInstanceOnboardingJob": true;
  "connectcampaigns:StopCampaign": false;
  "connectcampaigns:TagResource": true;
  "connectcampaigns:UntagResource": false;
  "connectcampaigns:UpdateCampaignDialerConfig": true;
  "connectcampaigns:UpdateCampaignName": true;
  "connectcampaigns:UpdateCampaignOutboundCallConfig": false;
  "connectcampaignsv2:CreateCampaign": true;
  "connectcampaignsv2:DeleteCampaign": false;
  "connectcampaignsv2:DeleteCampaignChannelSubtypeConfig": false;
  "connectcampaignsv2:DeleteCampaignCommunicationLimits": false;
  "connectcampaignsv2:DeleteCampaignCommunicationTime": false;
  "connectcampaignsv2:DeleteCampaignEntryLimits": false;
  "connectcampaignsv2:DeleteConnectInstanceConfig": false;
  "connectcampaignsv2:DeleteConnectInstanceIntegration": true;
  "connectcampaignsv2:DeleteInstanceOnboardingJob": false;
  "connectcampaignsv2:DescribeCampaign": false;
  "connectcampaignsv2:GetCampaignState": false;
  "connectcampaignsv2:GetCampaignStateBatch": true;
  "connectcampaignsv2:GetConnectInstanceConfig": false;
  "connectcampaignsv2:GetInstanceCommunicationLimits": false;
  "connectcampaignsv2:GetInstanceOnboardingJobStatus": false;
  "connectcampaignsv2:ListCampaigns": false;
  "connectcampaignsv2:ListConnectInstanceIntegrations": false;
  "connectcampaignsv2:ListTagsForResource": false;
  "connectcampaignsv2:PauseCampaign": false;
  "connectcampaignsv2:PutConnectInstanceIntegration": true;
  "connectcampaignsv2:PutInstanceCommunicationLimits": true;
  "connectcampaignsv2:PutOutboundRequestBatch": true;
  "connectcampaignsv2:PutProfileOutboundRequestBatch": true;
  "connectcampaignsv2:ResumeCampaign": false;
  "connectcampaignsv2:StartCampaign": false;
  "connectcampaignsv2:StartInstanceOnboardingJob": true;
  "connectcampaignsv2:StopCampaign": false;
  "connectcampaignsv2:TagResource": true;
  "connectcampaignsv2:UntagResource": false;
  "connectcampaignsv2:UpdateCampaignChannelSubtypeConfig": true;
  "connectcampaignsv2:UpdateCampaignCommunicationLimits": true;
  "connectcampaignsv2:UpdateCampaignCommunicationTime": true;
  "connectcampaignsv2:UpdateCampaignEntryLimits": true;
  "connectcampaignsv2:UpdateCampaignFlowAssociation": true;
  "connectcampaignsv2:UpdateCampaignName": true;
  "connectcampaignsv2:UpdateCampaignSchedule": true;
  "connectcampaignsv2:UpdateCampaignSource": true;
  "connect-contact-lens:ListRealtimeContactAnalysisSegments": true;
  "connecthealth:ActivateSubscription": false;
  "connecthealth:CreateDomain": true;
  "connecthealth:CreateSubscription": false;
  "connecthealth:DeactivateSubscription": false;
  "connecthealth:DeleteDomain": false;
  "connecthealth:GetDomain": false;
  "connecthealth:GetMedicalScribeListeningSession": false;
  "connecthealth:GetPatientInsightsJob": false;
  "connecthealth:GetSubscription": false;
  "connecthealth:ListDomains": false;
  "connecthealth:ListSubscriptions": false;
  "connecthealth:ListTagsForResource": false;
  "connecthealth:StartMedicalScribeListeningSession": false;
  "connecthealth:StartPatientInsightsJob": true;
  "connecthealth:TagResource": true;
  "connecthealth:UntagResource": false;
  "customer-profiles:AddProfileKey": true;
  "customer-profiles:BatchGetCalculatedAttributeForProfile": true;
  "customer-profiles:BatchGetProfile": true;
  "customer-profiles:BatchPutProfileObject": true;
  "customer-profiles:CreateCalculatedAttributeDefinition": true;
  "customer-profiles:CreateDomain": true;
  "customer-profiles:CreateDomainLayout": true;
  "customer-profiles:CreateEventStream": true;
  "customer-profiles:CreateEventTrigger": true;
  "customer-profiles:CreateIntegrationWorkflow": true;
  "customer-profiles:CreateProfile": false;
  "customer-profiles:CreateRecommender": true;
  "customer-profiles:CreateRecommenderFilter": true;
  "customer-profiles:CreateRecommenderSchema": true;
  "customer-profiles:CreateSegmentDefinition": true;
  "customer-profiles:CreateSegmentEstimate": false;
  "customer-profiles:CreateSegmentSnapshot": true;
  "customer-profiles:CreateUploadJob": true;
  "customer-profiles:DeleteCalculatedAttributeDefinition": false;
  "customer-profiles:DeleteDomain": false;
  "customer-profiles:DeleteDomainLayout": false;
  "customer-profiles:DeleteDomainObjectType": false;
  "customer-profiles:DeleteEventStream": false;
  "customer-profiles:DeleteEventTrigger": false;
  "customer-profiles:DeleteIntegration": true;
  "customer-profiles:DeleteProfile": true;
  "customer-profiles:DeleteProfileKey": true;
  "customer-profiles:DeleteProfileObject": true;
  "customer-profiles:DeleteProfileObjectType": false;
  "customer-profiles:DeleteRecommender": false;
  "customer-profiles:DeleteRecommenderFilter": false;
  "customer-profiles:DeleteRecommenderSchema": false;
  "customer-profiles:DeleteSegmentDefinition": false;
  "customer-profiles:DeleteWorkflow": false;
  "customer-profiles:DetectProfileObjectType": true;
  "customer-profiles:GetAutoMergingPreview": true;
  "customer-profiles:GetCalculatedAttributeDefinition": false;
  "customer-profiles:GetCalculatedAttributeForProfile": false;
  "customer-profiles:GetDomain": false;
  "customer-profiles:GetDomainLayout": false;
  "customer-profiles:GetDomainObjectType": false;
  "customer-profiles:GetEventStream": false;
  "customer-profiles:GetEventTrigger": false;
  "customer-profiles:GetIdentityResolutionJob": false;
  "customer-profiles:GetIntegration": true;
  "customer-profiles:GetMatches": false;
  "customer-profiles:GetObjectTypeAttributeStatistics": false;
  "customer-profiles:GetProfileHistoryRecord": false;
  "customer-profiles:GetProfileObjectType": false;
  "customer-profiles:GetProfileObjectTypeTemplate": false;
  "customer-profiles:GetProfileRecommendations": true;
  "customer-profiles:GetRecommender": false;
  "customer-profiles:GetRecommenderFilter": false;
  "customer-profiles:GetRecommenderSchema": false;
  "customer-profiles:GetSegmentDefinition": false;
  "customer-profiles:GetSegmentEstimate": false;
  "customer-profiles:GetSegmentMembership": true;
  "customer-profiles:GetSegmentSnapshot": false;
  "customer-profiles:GetSimilarProfiles": true;
  "customer-profiles:GetUploadJob": false;
  "customer-profiles:GetUploadJobPath": false;
  "customer-profiles:GetWorkflow": false;
  "customer-profiles:GetWorkflowSteps": false;
  "customer-profiles:ListAccountIntegrations": true;
  "customer-profiles:ListCalculatedAttributeDefinitions": false;
  "customer-profiles:ListCalculatedAttributesForProfile": false;
  "customer-profiles:ListDomainLayouts": false;
  "customer-profiles:ListDomainObjectTypes": false;
  "customer-profiles:ListDomains": false;
  "customer-profiles:ListEventStreams": false;
  "customer-profiles:ListEventTriggers": false;
  "customer-profiles:ListIdentityResolutionJobs": false;
  "customer-profiles:ListIntegrations": false;
  "customer-profiles:ListObjectTypeAttributeValues": false;
  "customer-profiles:ListObjectTypeAttributes": false;
  "customer-profiles:ListProfileAttributeValues": false;
  "customer-profiles:ListProfileHistoryRecords": true;
  "customer-profiles:ListProfileObjectTypeTemplates": false;
  "customer-profiles:ListProfileObjectTypes": false;
  "customer-profiles:ListProfileObjects": true;
  "customer-profiles:ListRecommenderFilters": false;
  "customer-profiles:ListRecommenderRecipes": false;
  "customer-profiles:ListRecommenderSchemas": false;
  "customer-profiles:ListRecommenders": false;
  "customer-profiles:ListRuleBasedMatches": false;
  "customer-profiles:ListSegmentDefinitions": false;
  "customer-profiles:ListTagsForResource": false;
  "customer-profiles:ListUploadJobs": false;
  "customer-profiles:ListWorkflows": false;
  "customer-profiles:MergeProfiles": true;
  "customer-profiles:PutDomainObjectType": true;
  "customer-profiles:PutIntegration": false;
  "customer-profiles:PutProfileObject": true;
  "customer-profiles:PutProfileObjectType": true;
  "customer-profiles:SearchProfiles": true;
  "customer-profiles:StartRecommender": false;
  "customer-profiles:StartUploadJob": false;
  "customer-profiles:StopRecommender": false;
  "customer-profiles:StopUploadJob": false;
  "customer-profiles:TagResource": true;
  "customer-profiles:UntagResource": false;
  "customer-profiles:UpdateCalculatedAttributeDefinition": false;
  "customer-profiles:UpdateDomain": false;
  "customer-profiles:UpdateDomainLayout": false;
  "customer-profiles:UpdateEventTrigger": false;
  "customer-profiles:UpdateProfile": true;
  "customer-profiles:UpdateRecommender": false;
  "qconnect:ActivateMessageTemplate": true;
  "qconnect:CreateAIAgent": true;
  "qconnect:CreateAIAgentVersion": false;
  "qconnect:CreateAIGuardrail": true;
  "qconnect:CreateAIGuardrailVersion": false;
  "qconnect:CreateAIPrompt": true;
  "qconnect:CreateAIPromptVersion": false;
  "qconnect:CreateAssistant": true;
  "qconnect:CreateAssistantAssociation": true;
  "qconnect:CreateContent": true;
  "qconnect:CreateContentAssociation": true;
  "qconnect:CreateKnowledgeBase": true;
  "qconnect:CreateMessageTemplate": true;
  "qconnect:CreateMessageTemplateAttachment": true;
  "qconnect:CreateMessageTemplateVersion": false;
  "qconnect:CreateQuickResponse": true;
  "qconnect:CreateSession": true;
  "qconnect:DeactivateMessageTemplate": true;
  "qconnect:DeleteAIAgent": false;
  "qconnect:DeleteAIAgentVersion": false;
  "qconnect:DeleteAIGuardrail": false;
  "qconnect:DeleteAIGuardrailVersion": false;
  "qconnect:DeleteAIPrompt": false;
  "qconnect:DeleteAIPromptVersion": false;
  "qconnect:DeleteAssistant": false;
  "qconnect:DeleteAssistantAssociation": false;
  "qconnect:DeleteContent": false;
  "qconnect:DeleteContentAssociation": false;
  "qconnect:DeleteImportJob": false;
  "qconnect:DeleteKnowledgeBase": false;
  "qconnect:DeleteMessageTemplate": false;
  "qconnect:DeleteMessageTemplateAttachment": false;
  "qconnect:DeleteQuickResponse": false;
  "qconnect:GetAIAgent": false;
  "qconnect:GetAIGuardrail": false;
  "qconnect:GetAIPrompt": false;
  "qconnect:GetAssistant": false;
  "qconnect:GetAssistantAssociation": false;
  "qconnect:GetContent": false;
  "qconnect:GetContentAssociation": false;
  "qconnect:GetContentSummary": false;
  "qconnect:GetImportJob": false;
  "qconnect:GetKnowledgeBase": false;
  "qconnect:GetMessageTemplate": false;
  "qconnect:GetNextMessage": false;
  "qconnect:GetQuickResponse": false;
  "qconnect:GetRecommendations": false;
  "qconnect:GetSession": false;
  "qconnect:ListAIAgentVersions": false;
  "qconnect:ListAIAgents": false;
  "qconnect:ListAIGuardrailVersions": false;
  "qconnect:ListAIGuardrails": false;
  "qconnect:ListAIPromptVersions": false;
  "qconnect:ListAIPrompts": false;
  "qconnect:ListAssistantAssociations": false;
  "qconnect:ListAssistants": false;
  "qconnect:ListContentAssociations": false;
  "qconnect:ListContents": false;
  "qconnect:ListImportJobs": false;
  "qconnect:ListKnowledgeBases": false;
  "qconnect:ListMessageTemplateVersions": false;
  "qconnect:ListMessageTemplates": false;
  "qconnect:ListMessages": false;
  "qconnect:ListModels": false;
  "qconnect:ListQuickResponses": false;
  "qconnect:ListSpans": false;
  "qconnect:ListTagsForResource": false;
  "qconnect:NotifyRecommendationsReceived": true;
  "qconnect:PutFeedback": true;
  "qconnect:QueryAssistant": false;
  "qconnect:RemoveAssistantAIAgent": false;
  "qconnect:RemoveKnowledgeBaseTemplateUri": false;
  "qconnect:RenderMessageTemplate": true;
  "qconnect:Retrieve": true;
  "qconnect:SearchContent": true;
  "qconnect:SearchMessageTemplates": true;
  "qconnect:SearchQuickResponses": true;
  "qconnect:SearchSessions": true;
  "qconnect:SendMessage": true;
  "qconnect:StartContentUpload": true;
  "qconnect:StartImportJob": true;
  "qconnect:TagResource": true;
  "qconnect:UntagResource": false;
  "qconnect:UpdateAIAgent": true;
  "qconnect:UpdateAIGuardrail": true;
  "qconnect:UpdateAIPrompt": true;
  "qconnect:UpdateAssistantAIAgent": true;
  "qconnect:UpdateContent": false;
  "qconnect:UpdateKnowledgeBaseTemplateUri": true;
  "qconnect:UpdateMessageTemplate": false;
  "qconnect:UpdateMessageTemplateMetadata": false;
  "qconnect:UpdateQuickResponse": false;
  "qconnect:UpdateSession": false;
  "qconnect:UpdateSessionData": true;
  "wisdom:CreateAssistant": true;
  "wisdom:CreateAssistantAssociation": true;
  "wisdom:CreateContent": true;
  "wisdom:CreateKnowledgeBase": true;
  "wisdom:CreateQuickResponse": true;
  "wisdom:CreateSession": true;
  "wisdom:DeleteAssistant": false;
  "wisdom:DeleteAssistantAssociation": false;
  "wisdom:DeleteContent": false;
  "wisdom:DeleteImportJob": false;
  "wisdom:DeleteKnowledgeBase": false;
  "wisdom:DeleteQuickResponse": false;
  "wisdom:GetAssistant": false;
  "wisdom:GetAssistantAssociation": false;
  "wisdom:GetContent": false;
  "wisdom:GetContentSummary": false;
  "wisdom:GetImportJob": false;
  "wisdom:GetKnowledgeBase": false;
  "wisdom:GetQuickResponse": false;
  "wisdom:GetRecommendations": false;
  "wisdom:GetSession": false;
  "wisdom:ListAssistantAssociations": false;
  "wisdom:ListAssistants": false;
  "wisdom:ListContents": false;
  "wisdom:ListImportJobs": false;
  "wisdom:ListKnowledgeBases": false;
  "wisdom:ListQuickResponses": false;
  "wisdom:ListTagsForResource": false;
  "wisdom:NotifyRecommendationsReceived": true;
  "wisdom:QueryAssistant": true;
  "wisdom:RemoveKnowledgeBaseTemplateUri": false;
  "wisdom:SearchContent": true;
  "wisdom:SearchQuickResponses": true;
  "wisdom:SearchSessions": true;
  "wisdom:StartContentUpload": true;
  "wisdom:StartImportJob": true;
  "wisdom:TagResource": true;
  "wisdom:UntagResource": false;
  "wisdom:UpdateContent": false;
  "wisdom:UpdateKnowledgeBaseTemplateUri": true;
  "wisdom:UpdateQuickResponse": false;
}

export interface AmazonConnectFullApiOperationResponseMap {
  "appintegrations:CreateApplication": AmazonConnectFullApiSchemaCreateApplicationResponse;
  "appintegrations:CreateDataIntegration": AmazonConnectFullApiSchemaCreateDataIntegrationResponse;
  "appintegrations:CreateDataIntegrationAssociation": AmazonConnectFullApiSchemaCreateDataIntegrationAssociationResponse;
  "appintegrations:CreateEventIntegration": AmazonConnectFullApiSchemaCreateEventIntegrationResponse;
  "appintegrations:DeleteApplication": AmazonConnectFullApiSchemaDeleteApplicationResponse;
  "appintegrations:DeleteDataIntegration": AmazonConnectFullApiSchemaDeleteDataIntegrationResponse;
  "appintegrations:DeleteEventIntegration": AmazonConnectFullApiSchemaDeleteEventIntegrationResponse;
  "appintegrations:GetApplication": AmazonConnectFullApiSchemaGetApplicationResponse;
  "appintegrations:GetDataIntegration": AmazonConnectFullApiSchemaGetDataIntegrationResponse;
  "appintegrations:GetEventIntegration": AmazonConnectFullApiSchemaGetEventIntegrationResponse;
  "appintegrations:ListApplicationAssociations": AmazonConnectFullApiSchemaListApplicationAssociationsResponse;
  "appintegrations:ListApplications": AmazonConnectFullApiSchemaListApplicationsResponse;
  "appintegrations:ListDataIntegrationAssociations": AmazonConnectFullApiSchemaListDataIntegrationAssociationsResponse;
  "appintegrations:ListDataIntegrations": AmazonConnectFullApiSchemaListDataIntegrationsResponse;
  "appintegrations:ListEventIntegrationAssociations": AmazonConnectFullApiSchemaListEventIntegrationAssociationsResponse;
  "appintegrations:ListEventIntegrations": AmazonConnectFullApiSchemaListEventIntegrationsResponse;
  "appintegrations:ListTagsForResource": AmazonConnectFullApiSchemaListTagsForResourceResponse;
  "appintegrations:TagResource": AmazonConnectFullApiSchemaTagResourceResponse;
  "appintegrations:UntagResource": AmazonConnectFullApiSchemaUntagResourceResponse;
  "appintegrations:UpdateApplication": AmazonConnectFullApiSchemaUpdateApplicationResponse;
  "appintegrations:UpdateDataIntegration": AmazonConnectFullApiSchemaUpdateDataIntegrationResponse;
  "appintegrations:UpdateDataIntegrationAssociation": AmazonConnectFullApiSchemaUpdateDataIntegrationAssociationResponse;
  "appintegrations:UpdateEventIntegration": AmazonConnectFullApiSchemaUpdateEventIntegrationResponse;
  "connect:ActivateEvaluationForm": AmazonConnectFullApiSchemaActivateEvaluationFormResponse;
  "connect:AssociateAnalyticsDataSet": AmazonConnectFullApiSchemaAssociateAnalyticsDataSetResponse;
  "connect:AssociateApprovedOrigin": void;
  "connect:AssociateBot": void;
  "connect:AssociateContactWithUser": AmazonConnectFullApiSchemaAssociateContactWithUserResponse;
  "connect:AssociateDefaultVocabulary": AmazonConnectFullApiSchemaAssociateDefaultVocabularyResponse;
  "connect:AssociateEmailAddressAlias": AmazonConnectFullApiSchemaAssociateEmailAddressAliasResponse;
  "connect:AssociateFlow": AmazonConnectFullApiSchemaAssociateFlowResponse;
  "connect:AssociateHoursOfOperations": void;
  "connect:AssociateInstanceStorageConfig": AmazonConnectFullApiSchemaAssociateInstanceStorageConfigResponse;
  "connect:AssociateLambdaFunction": void;
  "connect:AssociateLexBot": void;
  "connect:AssociatePhoneNumberContactFlow": void;
  "connect:AssociateQueueEmailAddresses": void;
  "connect:AssociateQueueQuickConnects": void;
  "connect:AssociateRoutingProfileQueues": void;
  "connect:AssociateSecurityKey": AmazonConnectFullApiSchemaAssociateSecurityKeyResponse;
  "connect:AssociateSecurityProfiles": void;
  "connect:AssociateTrafficDistributionGroupUser": AmazonConnectFullApiSchemaAssociateTrafficDistributionGroupUserResponse;
  "connect:AssociateUserProficiencies": void;
  "connect:AssociateWorkspace": AmazonConnectFullApiSchemaAssociateWorkspaceResponse;
  "connect:BatchAssociateAnalyticsDataSet": AmazonConnectFullApiSchemaBatchAssociateAnalyticsDataSetResponse;
  "connect:BatchCreateDataTableValue": AmazonConnectFullApiSchemaBatchCreateDataTableValueResponse;
  "connect:BatchDeleteDataTableValue": AmazonConnectFullApiSchemaBatchDeleteDataTableValueResponse;
  "connect:BatchDescribeDataTableValue": AmazonConnectFullApiSchemaBatchDescribeDataTableValueResponse;
  "connect:BatchDisassociateAnalyticsDataSet": AmazonConnectFullApiSchemaBatchDisassociateAnalyticsDataSetResponse;
  "connect:BatchGetAttachedFileMetadata": AmazonConnectFullApiSchemaBatchGetAttachedFileMetadataResponse;
  "connect:BatchGetFlowAssociation": AmazonConnectFullApiSchemaBatchGetFlowAssociationResponse;
  "connect:BatchPutContact": AmazonConnectFullApiSchemaBatchPutContactResponse;
  "connect:BatchUpdateDataTableValue": AmazonConnectFullApiSchemaBatchUpdateDataTableValueResponse;
  "connect:ClaimPhoneNumber": AmazonConnectFullApiSchemaClaimPhoneNumberResponse;
  "connect:CompleteAttachedFileUpload": AmazonConnectFullApiSchemaCompleteAttachedFileUploadResponse;
  "connect:CreateAgentStatus": AmazonConnectFullApiSchemaCreateAgentStatusResponse;
  "connect:CreateContact": AmazonConnectFullApiSchemaCreateContactResponse;
  "connect:CreateContactFlow": AmazonConnectFullApiSchemaCreateContactFlowResponse;
  "connect:CreateContactFlowModule": AmazonConnectFullApiSchemaCreateContactFlowModuleResponse;
  "connect:CreateContactFlowModuleAlias": AmazonConnectFullApiSchemaCreateContactFlowModuleAliasResponse;
  "connect:CreateContactFlowModuleVersion": AmazonConnectFullApiSchemaCreateContactFlowModuleVersionResponse;
  "connect:CreateContactFlowVersion": AmazonConnectFullApiSchemaCreateContactFlowVersionResponse;
  "connect:CreateDataTable": AmazonConnectFullApiSchemaCreateDataTableResponse;
  "connect:CreateDataTableAttribute": AmazonConnectFullApiSchemaCreateDataTableAttributeResponse;
  "connect:CreateEmailAddress": AmazonConnectFullApiSchemaCreateEmailAddressResponse;
  "connect:CreateEvaluationForm": AmazonConnectFullApiSchemaCreateEvaluationFormResponse;
  "connect:CreateHoursOfOperation": AmazonConnectFullApiSchemaCreateHoursOfOperationResponse;
  "connect:CreateHoursOfOperationOverride": AmazonConnectFullApiSchemaCreateHoursOfOperationOverrideResponse;
  "connect:CreateInstance": AmazonConnectFullApiSchemaCreateInstanceResponse;
  "connect:CreateIntegrationAssociation": AmazonConnectFullApiSchemaCreateIntegrationAssociationResponse;
  "connect:CreateNotification": AmazonConnectFullApiSchemaCreateNotificationResponse;
  "connect:CreateParticipant": AmazonConnectFullApiSchemaCreateParticipantResponse;
  "connect:CreatePersistentContactAssociation": AmazonConnectFullApiSchemaCreatePersistentContactAssociationResponse;
  "connect:CreatePredefinedAttribute": void;
  "connect:CreatePrompt": AmazonConnectFullApiSchemaCreatePromptResponse;
  "connect:CreatePushNotificationRegistration": AmazonConnectFullApiSchemaCreatePushNotificationRegistrationResponse;
  "connect:CreateQueue": AmazonConnectFullApiSchemaCreateQueueResponse;
  "connect:CreateQuickConnect": AmazonConnectFullApiSchemaCreateQuickConnectResponse;
  "connect:CreateRoutingProfile": AmazonConnectFullApiSchemaCreateRoutingProfileResponse;
  "connect:CreateRule": AmazonConnectFullApiSchemaCreateRuleResponse;
  "connect:CreateSecurityProfile": AmazonConnectFullApiSchemaCreateSecurityProfileResponse;
  "connect:CreateTaskTemplate": AmazonConnectFullApiSchemaCreateTaskTemplateResponse;
  "connect:CreateTestCase": AmazonConnectFullApiSchemaCreateTestCaseResponse;
  "connect:CreateTrafficDistributionGroup": AmazonConnectFullApiSchemaCreateTrafficDistributionGroupResponse;
  "connect:CreateUseCase": AmazonConnectFullApiSchemaCreateUseCaseResponse;
  "connect:CreateUser": AmazonConnectFullApiSchemaCreateUserResponse;
  "connect:CreateUserHierarchyGroup": AmazonConnectFullApiSchemaCreateUserHierarchyGroupResponse;
  "connect:CreateView": AmazonConnectFullApiSchemaCreateViewResponse;
  "connect:CreateViewVersion": AmazonConnectFullApiSchemaCreateViewVersionResponse;
  "connect:CreateVocabulary": AmazonConnectFullApiSchemaCreateVocabularyResponse;
  "connect:CreateWorkspace": AmazonConnectFullApiSchemaCreateWorkspaceResponse;
  "connect:CreateWorkspacePage": AmazonConnectFullApiSchemaCreateWorkspacePageResponse;
  "connect:DeactivateEvaluationForm": AmazonConnectFullApiSchemaDeactivateEvaluationFormResponse;
  "connect:DeleteAttachedFile": AmazonConnectFullApiSchemaDeleteAttachedFileResponse;
  "connect:DeleteContactEvaluation": void;
  "connect:DeleteContactFlow": AmazonConnectFullApiSchemaDeleteContactFlowResponse;
  "connect:DeleteContactFlowModule": AmazonConnectFullApiSchemaDeleteContactFlowModuleResponse;
  "connect:DeleteContactFlowModuleAlias": AmazonConnectFullApiSchemaDeleteContactFlowModuleAliasResponse;
  "connect:DeleteContactFlowModuleVersion": AmazonConnectFullApiSchemaDeleteContactFlowModuleVersionResponse;
  "connect:DeleteContactFlowVersion": AmazonConnectFullApiSchemaDeleteContactFlowVersionResponse;
  "connect:DeleteDataTable": AmazonConnectFullApiSchemaDeleteDataTableResponse;
  "connect:DeleteDataTableAttribute": AmazonConnectFullApiSchemaDeleteDataTableAttributeResponse;
  "connect:DeleteEmailAddress": AmazonConnectFullApiSchemaDeleteEmailAddressResponse;
  "connect:DeleteEvaluationForm": void;
  "connect:DeleteHoursOfOperation": void;
  "connect:DeleteHoursOfOperationOverride": void;
  "connect:DeleteInstance": void;
  "connect:DeleteIntegrationAssociation": void;
  "connect:DeleteNotification": AmazonConnectFullApiSchemaDeleteNotificationResponse;
  "connect:DeletePredefinedAttribute": void;
  "connect:DeletePrompt": void;
  "connect:DeletePushNotificationRegistration": AmazonConnectFullApiSchemaDeletePushNotificationRegistrationResponse;
  "connect:DeleteQueue": void;
  "connect:DeleteQuickConnect": void;
  "connect:DeleteRoutingProfile": void;
  "connect:DeleteRule": void;
  "connect:DeleteSecurityProfile": void;
  "connect:DeleteTaskTemplate": AmazonConnectFullApiSchemaDeleteTaskTemplateResponse;
  "connect:DeleteTestCase": AmazonConnectFullApiSchemaDeleteTestCaseResponse;
  "connect:DeleteTrafficDistributionGroup": AmazonConnectFullApiSchemaDeleteTrafficDistributionGroupResponse;
  "connect:DeleteUseCase": void;
  "connect:DeleteUser": void;
  "connect:DeleteUserHierarchyGroup": void;
  "connect:DeleteView": AmazonConnectFullApiSchemaDeleteViewResponse;
  "connect:DeleteViewVersion": AmazonConnectFullApiSchemaDeleteViewVersionResponse;
  "connect:DeleteVocabulary": AmazonConnectFullApiSchemaDeleteVocabularyResponse;
  "connect:DeleteWorkspace": AmazonConnectFullApiSchemaDeleteWorkspaceResponse;
  "connect:DeleteWorkspaceMedia": AmazonConnectFullApiSchemaDeleteWorkspaceMediaResponse;
  "connect:DeleteWorkspacePage": AmazonConnectFullApiSchemaDeleteWorkspacePageResponse;
  "connect:DescribeAgentStatus": AmazonConnectFullApiSchemaDescribeAgentStatusResponse;
  "connect:DescribeAttachedFilesConfiguration": AmazonConnectFullApiSchemaDescribeAttachedFilesConfigurationResponse;
  "connect:DescribeAuthenticationProfile": AmazonConnectFullApiSchemaDescribeAuthenticationProfileResponse;
  "connect:DescribeContact": AmazonConnectFullApiSchemaDescribeContactResponse;
  "connect:DescribeContactEvaluation": AmazonConnectFullApiSchemaDescribeContactEvaluationResponse;
  "connect:DescribeContactFlow": AmazonConnectFullApiSchemaDescribeContactFlowResponse;
  "connect:DescribeContactFlowModule": AmazonConnectFullApiSchemaDescribeContactFlowModuleResponse;
  "connect:DescribeContactFlowModuleAlias": AmazonConnectFullApiSchemaDescribeContactFlowModuleAliasResponse;
  "connect:DescribeDataTable": AmazonConnectFullApiSchemaDescribeDataTableResponse;
  "connect:DescribeDataTableAttribute": AmazonConnectFullApiSchemaDescribeDataTableAttributeResponse;
  "connect:DescribeEmailAddress": AmazonConnectFullApiSchemaDescribeEmailAddressResponse;
  "connect:DescribeEvaluationForm": AmazonConnectFullApiSchemaDescribeEvaluationFormResponse;
  "connect:DescribeHoursOfOperation": AmazonConnectFullApiSchemaDescribeHoursOfOperationResponse;
  "connect:DescribeHoursOfOperationOverride": AmazonConnectFullApiSchemaDescribeHoursOfOperationOverrideResponse;
  "connect:DescribeInstance": AmazonConnectFullApiSchemaDescribeInstanceResponse;
  "connect:DescribeInstanceAttribute": AmazonConnectFullApiSchemaDescribeInstanceAttributeResponse;
  "connect:DescribeInstanceStorageConfig": AmazonConnectFullApiSchemaDescribeInstanceStorageConfigResponse;
  "connect:DescribeNotification": AmazonConnectFullApiSchemaDescribeNotificationResponse;
  "connect:DescribePhoneNumber": AmazonConnectFullApiSchemaDescribePhoneNumberResponse;
  "connect:DescribePredefinedAttribute": AmazonConnectFullApiSchemaDescribePredefinedAttributeResponse;
  "connect:DescribePrompt": AmazonConnectFullApiSchemaDescribePromptResponse;
  "connect:DescribeQueue": AmazonConnectFullApiSchemaDescribeQueueResponse;
  "connect:DescribeQuickConnect": AmazonConnectFullApiSchemaDescribeQuickConnectResponse;
  "connect:DescribeRoutingProfile": AmazonConnectFullApiSchemaDescribeRoutingProfileResponse;
  "connect:DescribeRule": AmazonConnectFullApiSchemaDescribeRuleResponse;
  "connect:DescribeSecurityProfile": AmazonConnectFullApiSchemaDescribeSecurityProfileResponse;
  "connect:DescribeTestCase": AmazonConnectFullApiSchemaDescribeTestCaseResponse;
  "connect:DescribeTrafficDistributionGroup": AmazonConnectFullApiSchemaDescribeTrafficDistributionGroupResponse;
  "connect:DescribeUser": AmazonConnectFullApiSchemaDescribeUserResponse;
  "connect:DescribeUserHierarchyGroup": AmazonConnectFullApiSchemaDescribeUserHierarchyGroupResponse;
  "connect:DescribeUserHierarchyStructure": AmazonConnectFullApiSchemaDescribeUserHierarchyStructureResponse;
  "connect:DescribeView": AmazonConnectFullApiSchemaDescribeViewResponse;
  "connect:DescribeVocabulary": AmazonConnectFullApiSchemaDescribeVocabularyResponse;
  "connect:DescribeWorkspace": AmazonConnectFullApiSchemaDescribeWorkspaceResponse;
  "connect:DisassociateAnalyticsDataSet": void;
  "connect:DisassociateApprovedOrigin": void;
  "connect:DisassociateBot": void;
  "connect:DisassociateEmailAddressAlias": AmazonConnectFullApiSchemaDisassociateEmailAddressAliasResponse;
  "connect:DisassociateFlow": AmazonConnectFullApiSchemaDisassociateFlowResponse;
  "connect:DisassociateHoursOfOperations": void;
  "connect:DisassociateInstanceStorageConfig": void;
  "connect:DisassociateLambdaFunction": void;
  "connect:DisassociateLexBot": void;
  "connect:DisassociatePhoneNumberContactFlow": void;
  "connect:DisassociateQueueEmailAddresses": void;
  "connect:DisassociateQueueQuickConnects": void;
  "connect:DisassociateRoutingProfileQueues": void;
  "connect:DisassociateSecurityKey": void;
  "connect:DisassociateSecurityProfiles": void;
  "connect:DisassociateTrafficDistributionGroupUser": AmazonConnectFullApiSchemaDisassociateTrafficDistributionGroupUserResponse;
  "connect:DisassociateUserProficiencies": void;
  "connect:DisassociateWorkspace": AmazonConnectFullApiSchemaDisassociateWorkspaceResponse;
  "connect:DismissUserContact": AmazonConnectFullApiSchemaDismissUserContactResponse;
  "connect:EvaluateDataTableValues": AmazonConnectFullApiSchemaEvaluateDataTableValuesResponse;
  "connect:GetAttachedFile": AmazonConnectFullApiSchemaGetAttachedFileResponse;
  "connect:GetContactAttributes": AmazonConnectFullApiSchemaGetContactAttributesResponse;
  "connect:GetContactMetrics": AmazonConnectFullApiSchemaGetContactMetricsResponse;
  "connect:GetCurrentMetricData": AmazonConnectFullApiSchemaGetCurrentMetricDataResponse;
  "connect:GetCurrentUserData": AmazonConnectFullApiSchemaGetCurrentUserDataResponse;
  "connect:GetEffectiveHoursOfOperations": AmazonConnectFullApiSchemaGetEffectiveHoursOfOperationsResponse;
  "connect:GetFederationToken": AmazonConnectFullApiSchemaGetFederationTokenResponse;
  "connect:GetFlowAssociation": AmazonConnectFullApiSchemaGetFlowAssociationResponse;
  "connect:GetMetricData": AmazonConnectFullApiSchemaGetMetricDataResponse;
  "connect:GetMetricDataV2": AmazonConnectFullApiSchemaGetMetricDataV2Response;
  "connect:GetPromptFile": AmazonConnectFullApiSchemaGetPromptFileResponse;
  "connect:GetTaskTemplate": AmazonConnectFullApiSchemaGetTaskTemplateResponse;
  "connect:GetTestCaseExecutionSummary": AmazonConnectFullApiSchemaGetTestCaseExecutionSummaryResponse;
  "connect:GetTrafficDistribution": AmazonConnectFullApiSchemaGetTrafficDistributionResponse;
  "connect:ImportPhoneNumber": AmazonConnectFullApiSchemaImportPhoneNumberResponse;
  "connect:ImportWorkspaceMedia": AmazonConnectFullApiSchemaImportWorkspaceMediaResponse;
  "connect:ListAgentStatuses": AmazonConnectFullApiSchemaListAgentStatusResponse;
  "connect:ListAnalyticsDataAssociations": AmazonConnectFullApiSchemaListAnalyticsDataAssociationsResponse;
  "connect:ListAnalyticsDataLakeDataSets": AmazonConnectFullApiSchemaListAnalyticsDataLakeDataSetsResponse;
  "connect:ListApprovedOrigins": AmazonConnectFullApiSchemaListApprovedOriginsResponse;
  "connect:ListAssociatedContacts": AmazonConnectFullApiSchemaListAssociatedContactsResponse;
  "connect:ListAttachedFilesConfigurations": AmazonConnectFullApiSchemaListAttachedFilesConfigurationsResponse;
  "connect:ListAuthenticationProfiles": AmazonConnectFullApiSchemaListAuthenticationProfilesResponse;
  "connect:ListBots": AmazonConnectFullApiSchemaListBotsResponse;
  "connect:ListChildHoursOfOperations": AmazonConnectFullApiSchemaListChildHoursOfOperationsResponse;
  "connect:ListContactEvaluations": AmazonConnectFullApiSchemaListContactEvaluationsResponse;
  "connect:ListContactFlowModuleAliases": AmazonConnectFullApiSchemaListContactFlowModuleAliasesResponse;
  "connect:ListContactFlowModuleVersions": AmazonConnectFullApiSchemaListContactFlowModuleVersionsResponse;
  "connect:ListContactFlowModules": AmazonConnectFullApiSchemaListContactFlowModulesResponse;
  "connect:ListContactFlowVersions": AmazonConnectFullApiSchemaListContactFlowVersionsResponse;
  "connect:ListContactFlows": AmazonConnectFullApiSchemaListContactFlowsResponse;
  "connect:ListContactReferences": AmazonConnectFullApiSchemaListContactReferencesResponse;
  "connect:ListDataTableAttributes": AmazonConnectFullApiSchemaListDataTableAttributesResponse;
  "connect:ListDataTablePrimaryValues": AmazonConnectFullApiSchemaListDataTablePrimaryValuesResponse;
  "connect:ListDataTableValues": AmazonConnectFullApiSchemaListDataTableValuesResponse;
  "connect:ListDataTables": AmazonConnectFullApiSchemaListDataTablesResponse;
  "connect:ListDefaultVocabularies": AmazonConnectFullApiSchemaListDefaultVocabulariesResponse;
  "connect:ListEntitySecurityProfiles": AmazonConnectFullApiSchemaListEntitySecurityProfilesResponse;
  "connect:ListEvaluationFormVersions": AmazonConnectFullApiSchemaListEvaluationFormVersionsResponse;
  "connect:ListEvaluationForms": AmazonConnectFullApiSchemaListEvaluationFormsResponse;
  "connect:ListFlowAssociations": AmazonConnectFullApiSchemaListFlowAssociationsResponse;
  "connect:ListHoursOfOperationOverrides": AmazonConnectFullApiSchemaListHoursOfOperationOverridesResponse;
  "connect:ListHoursOfOperations": AmazonConnectFullApiSchemaListHoursOfOperationsResponse;
  "connect:ListInstanceAttributes": AmazonConnectFullApiSchemaListInstanceAttributesResponse;
  "connect:ListInstanceStorageConfigs": AmazonConnectFullApiSchemaListInstanceStorageConfigsResponse;
  "connect:ListInstances": AmazonConnectFullApiSchemaListInstancesResponse;
  "connect:ListIntegrationAssociations": AmazonConnectFullApiSchemaListIntegrationAssociationsResponse;
  "connect:ListLambdaFunctions": AmazonConnectFullApiSchemaListLambdaFunctionsResponse;
  "connect:ListLexBots": AmazonConnectFullApiSchemaListLexBotsResponse;
  "connect:ListNotifications": AmazonConnectFullApiSchemaListNotificationsResponse;
  "connect:ListPhoneNumbers": AmazonConnectFullApiSchemaListPhoneNumbersResponse;
  "connect:ListPhoneNumbersV2": AmazonConnectFullApiSchemaListPhoneNumbersV2Response;
  "connect:ListPredefinedAttributes": AmazonConnectFullApiSchemaListPredefinedAttributesResponse;
  "connect:ListPrompts": AmazonConnectFullApiSchemaListPromptsResponse;
  "connect:ListQueueEmailAddresses": AmazonConnectFullApiSchemaListQueueEmailAddressesResponse;
  "connect:ListQueueQuickConnects": AmazonConnectFullApiSchemaListQueueQuickConnectsResponse;
  "connect:ListQueues": AmazonConnectFullApiSchemaListQueuesResponse;
  "connect:ListQuickConnects": AmazonConnectFullApiSchemaListQuickConnectsResponse;
  "connect:ListRealtimeContactAnalysisSegmentsV2": AmazonConnectFullApiSchemaListRealtimeContactAnalysisSegmentsV2Response;
  "connect:ListRoutingProfileManualAssignmentQueues": AmazonConnectFullApiSchemaListRoutingProfileManualAssignmentQueuesResponse;
  "connect:ListRoutingProfileQueues": AmazonConnectFullApiSchemaListRoutingProfileQueuesResponse;
  "connect:ListRoutingProfiles": AmazonConnectFullApiSchemaListRoutingProfilesResponse;
  "connect:ListRules": AmazonConnectFullApiSchemaListRulesResponse;
  "connect:ListSecurityKeys": AmazonConnectFullApiSchemaListSecurityKeysResponse;
  "connect:ListSecurityProfileApplications": AmazonConnectFullApiSchemaListSecurityProfileApplicationsResponse;
  "connect:ListSecurityProfileFlowModules": AmazonConnectFullApiSchemaListSecurityProfileFlowModulesResponse;
  "connect:ListSecurityProfilePermissions": AmazonConnectFullApiSchemaListSecurityProfilePermissionsResponse;
  "connect:ListSecurityProfiles": AmazonConnectFullApiSchemaListSecurityProfilesResponse;
  "connect:ListTagsForResource": AmazonConnectFullApiSchemaListTagsForResourceResponse2;
  "connect:ListTaskTemplates": AmazonConnectFullApiSchemaListTaskTemplatesResponse;
  "connect:ListTestCaseExecutionRecords": AmazonConnectFullApiSchemaListTestCaseExecutionRecordsResponse;
  "connect:ListTestCaseExecutions": AmazonConnectFullApiSchemaListTestCaseExecutionsResponse;
  "connect:ListTestCases": AmazonConnectFullApiSchemaListTestCasesResponse;
  "connect:ListTrafficDistributionGroupUsers": AmazonConnectFullApiSchemaListTrafficDistributionGroupUsersResponse;
  "connect:ListTrafficDistributionGroups": AmazonConnectFullApiSchemaListTrafficDistributionGroupsResponse;
  "connect:ListUseCases": AmazonConnectFullApiSchemaListUseCasesResponse;
  "connect:ListUserHierarchyGroups": AmazonConnectFullApiSchemaListUserHierarchyGroupsResponse;
  "connect:ListUserNotifications": AmazonConnectFullApiSchemaListUserNotificationsResponse;
  "connect:ListUserProficiencies": AmazonConnectFullApiSchemaListUserProficienciesResponse;
  "connect:ListUsers": AmazonConnectFullApiSchemaListUsersResponse;
  "connect:ListViewVersions": AmazonConnectFullApiSchemaListViewVersionsResponse;
  "connect:ListViews": AmazonConnectFullApiSchemaListViewsResponse;
  "connect:ListWorkspaceMedia": AmazonConnectFullApiSchemaListWorkspaceMediaResponse;
  "connect:ListWorkspacePages": AmazonConnectFullApiSchemaListWorkspacePagesResponse;
  "connect:ListWorkspaces": AmazonConnectFullApiSchemaListWorkspacesResponse;
  "connect:MonitorContact": AmazonConnectFullApiSchemaMonitorContactResponse;
  "connect:PauseContact": AmazonConnectFullApiSchemaPauseContactResponse;
  "connect:PutUserStatus": AmazonConnectFullApiSchemaPutUserStatusResponse;
  "connect:ReleasePhoneNumber": void;
  "connect:ReplicateInstance": AmazonConnectFullApiSchemaReplicateInstanceResponse;
  "connect:ResumeContact": AmazonConnectFullApiSchemaResumeContactResponse;
  "connect:ResumeContactRecording": AmazonConnectFullApiSchemaResumeContactRecordingResponse;
  "connect:SearchAgentStatuses": AmazonConnectFullApiSchemaSearchAgentStatusesResponse;
  "connect:SearchAvailablePhoneNumbers": AmazonConnectFullApiSchemaSearchAvailablePhoneNumbersResponse;
  "connect:SearchContactEvaluations": AmazonConnectFullApiSchemaSearchContactEvaluationsResponse;
  "connect:SearchContactFlowModules": AmazonConnectFullApiSchemaSearchContactFlowModulesResponse;
  "connect:SearchContactFlows": AmazonConnectFullApiSchemaSearchContactFlowsResponse;
  "connect:SearchContacts": AmazonConnectFullApiSchemaSearchContactsResponse;
  "connect:SearchDataTables": AmazonConnectFullApiSchemaSearchDataTablesResponse;
  "connect:SearchEmailAddresses": AmazonConnectFullApiSchemaSearchEmailAddressesResponse;
  "connect:SearchEvaluationForms": AmazonConnectFullApiSchemaSearchEvaluationFormsResponse;
  "connect:SearchHoursOfOperationOverrides": AmazonConnectFullApiSchemaSearchHoursOfOperationOverridesResponse;
  "connect:SearchHoursOfOperations": AmazonConnectFullApiSchemaSearchHoursOfOperationsResponse;
  "connect:SearchNotifications": AmazonConnectFullApiSchemaSearchNotificationsResponse;
  "connect:SearchPredefinedAttributes": AmazonConnectFullApiSchemaSearchPredefinedAttributesResponse;
  "connect:SearchPrompts": AmazonConnectFullApiSchemaSearchPromptsResponse;
  "connect:SearchQueues": AmazonConnectFullApiSchemaSearchQueuesResponse;
  "connect:SearchQuickConnects": AmazonConnectFullApiSchemaSearchQuickConnectsResponse;
  "connect:SearchResourceTags": AmazonConnectFullApiSchemaSearchResourceTagsResponse;
  "connect:SearchRoutingProfiles": AmazonConnectFullApiSchemaSearchRoutingProfilesResponse;
  "connect:SearchSecurityProfiles": AmazonConnectFullApiSchemaSearchSecurityProfilesResponse;
  "connect:SearchTestCases": AmazonConnectFullApiSchemaSearchTestCasesResponse;
  "connect:SearchUserHierarchyGroups": AmazonConnectFullApiSchemaSearchUserHierarchyGroupsResponse;
  "connect:SearchUsers": AmazonConnectFullApiSchemaSearchUsersResponse;
  "connect:SearchViews": AmazonConnectFullApiSchemaSearchViewsResponse;
  "connect:SearchVocabularies": AmazonConnectFullApiSchemaSearchVocabulariesResponse;
  "connect:SearchWorkspaceAssociations": AmazonConnectFullApiSchemaSearchWorkspaceAssociationsResponse;
  "connect:SearchWorkspaces": AmazonConnectFullApiSchemaSearchWorkspacesResponse;
  "connect:SendChatIntegrationEvent": AmazonConnectFullApiSchemaSendChatIntegrationEventResponse;
  "connect:SendOutboundEmail": AmazonConnectFullApiSchemaSendOutboundEmailResponse;
  "connect:StartAttachedFileUpload": AmazonConnectFullApiSchemaStartAttachedFileUploadResponse;
  "connect:StartChatContact": AmazonConnectFullApiSchemaStartChatContactResponse;
  "connect:StartContactEvaluation": AmazonConnectFullApiSchemaStartContactEvaluationResponse;
  "connect:StartContactMediaProcessing": AmazonConnectFullApiSchemaStartContactMediaProcessingResponse;
  "connect:StartContactRecording": AmazonConnectFullApiSchemaStartContactRecordingResponse;
  "connect:StartContactStreaming": AmazonConnectFullApiSchemaStartContactStreamingResponse;
  "connect:StartEmailContact": AmazonConnectFullApiSchemaStartEmailContactResponse;
  "connect:StartOutboundChatContact": AmazonConnectFullApiSchemaStartOutboundChatContactResponse;
  "connect:StartOutboundEmailContact": AmazonConnectFullApiSchemaStartOutboundEmailContactResponse;
  "connect:StartOutboundVoiceContact": AmazonConnectFullApiSchemaStartOutboundVoiceContactResponse;
  "connect:StartScreenSharing": AmazonConnectFullApiSchemaStartScreenSharingResponse;
  "connect:StartTaskContact": AmazonConnectFullApiSchemaStartTaskContactResponse;
  "connect:StartTestCaseExecution": AmazonConnectFullApiSchemaStartTestCaseExecutionResponse;
  "connect:StartWebRTCContact": AmazonConnectFullApiSchemaStartWebRTCContactResponse;
  "connect:StopContact": AmazonConnectFullApiSchemaStopContactResponse;
  "connect:StopContactMediaProcessing": AmazonConnectFullApiSchemaStopContactMediaProcessingResponse;
  "connect:StopContactRecording": AmazonConnectFullApiSchemaStopContactRecordingResponse;
  "connect:StopContactStreaming": AmazonConnectFullApiSchemaStopContactStreamingResponse;
  "connect:StopTestCaseExecution": AmazonConnectFullApiSchemaStopTestCaseExecutionResponse;
  "connect:SubmitContactEvaluation": AmazonConnectFullApiSchemaSubmitContactEvaluationResponse;
  "connect:SuspendContactRecording": AmazonConnectFullApiSchemaSuspendContactRecordingResponse;
  "connect:TagContact": AmazonConnectFullApiSchemaTagContactResponse;
  "connect:TagResource": void;
  "connect:TransferContact": AmazonConnectFullApiSchemaTransferContactResponse;
  "connect:UntagContact": AmazonConnectFullApiSchemaUntagContactResponse;
  "connect:UntagResource": void;
  "connect:UpdateAgentStatus": void;
  "connect:UpdateAttachedFilesConfiguration": AmazonConnectFullApiSchemaUpdateAttachedFilesConfigurationResponse;
  "connect:UpdateAuthenticationProfile": void;
  "connect:UpdateContact": AmazonConnectFullApiSchemaUpdateContactResponse;
  "connect:UpdateContactAttributes": AmazonConnectFullApiSchemaUpdateContactAttributesResponse;
  "connect:UpdateContactEvaluation": AmazonConnectFullApiSchemaUpdateContactEvaluationResponse;
  "connect:UpdateContactFlowContent": AmazonConnectFullApiSchemaUpdateContactFlowContentResponse;
  "connect:UpdateContactFlowMetadata": AmazonConnectFullApiSchemaUpdateContactFlowMetadataResponse;
  "connect:UpdateContactFlowModuleAlias": AmazonConnectFullApiSchemaUpdateContactFlowModuleAliasResponse;
  "connect:UpdateContactFlowModuleContent": AmazonConnectFullApiSchemaUpdateContactFlowModuleContentResponse;
  "connect:UpdateContactFlowModuleMetadata": AmazonConnectFullApiSchemaUpdateContactFlowModuleMetadataResponse;
  "connect:UpdateContactFlowName": AmazonConnectFullApiSchemaUpdateContactFlowNameResponse;
  "connect:UpdateContactRoutingData": AmazonConnectFullApiSchemaUpdateContactRoutingDataResponse;
  "connect:UpdateContactSchedule": AmazonConnectFullApiSchemaUpdateContactScheduleResponse;
  "connect:UpdateDataTableAttribute": AmazonConnectFullApiSchemaUpdateDataTableAttributeResponse;
  "connect:UpdateDataTableMetadata": AmazonConnectFullApiSchemaUpdateDataTableMetadataResponse;
  "connect:UpdateDataTablePrimaryValues": AmazonConnectFullApiSchemaUpdateDataTablePrimaryValuesResponse;
  "connect:UpdateEmailAddressMetadata": AmazonConnectFullApiSchemaUpdateEmailAddressMetadataResponse;
  "connect:UpdateEvaluationForm": AmazonConnectFullApiSchemaUpdateEvaluationFormResponse;
  "connect:UpdateHoursOfOperation": void;
  "connect:UpdateHoursOfOperationOverride": void;
  "connect:UpdateInstanceAttribute": void;
  "connect:UpdateInstanceStorageConfig": void;
  "connect:UpdateNotificationContent": AmazonConnectFullApiSchemaUpdateNotificationContentResponse;
  "connect:UpdateParticipantAuthentication": AmazonConnectFullApiSchemaUpdateParticipantAuthenticationResponse;
  "connect:UpdateParticipantRoleConfig": AmazonConnectFullApiSchemaUpdateParticipantRoleConfigResponse;
  "connect:UpdatePhoneNumber": AmazonConnectFullApiSchemaUpdatePhoneNumberResponse;
  "connect:UpdatePhoneNumberMetadata": void;
  "connect:UpdatePredefinedAttribute": void;
  "connect:UpdatePrompt": AmazonConnectFullApiSchemaUpdatePromptResponse;
  "connect:UpdateQueueHoursOfOperation": void;
  "connect:UpdateQueueMaxContacts": void;
  "connect:UpdateQueueName": void;
  "connect:UpdateQueueOutboundCallerConfig": void;
  "connect:UpdateQueueOutboundEmailConfig": void;
  "connect:UpdateQueueStatus": void;
  "connect:UpdateQuickConnectConfig": void;
  "connect:UpdateQuickConnectName": void;
  "connect:UpdateRoutingProfileAgentAvailabilityTimer": void;
  "connect:UpdateRoutingProfileConcurrency": void;
  "connect:UpdateRoutingProfileDefaultOutboundQueue": void;
  "connect:UpdateRoutingProfileName": void;
  "connect:UpdateRoutingProfileQueues": void;
  "connect:UpdateRule": void;
  "connect:UpdateSecurityProfile": void;
  "connect:UpdateTaskTemplate": AmazonConnectFullApiSchemaUpdateTaskTemplateResponse;
  "connect:UpdateTestCase": AmazonConnectFullApiSchemaUpdateTestCaseResponse;
  "connect:UpdateTrafficDistribution": AmazonConnectFullApiSchemaUpdateTrafficDistributionResponse;
  "connect:UpdateUserConfig": void;
  "connect:UpdateUserHierarchy": void;
  "connect:UpdateUserHierarchyGroupName": void;
  "connect:UpdateUserHierarchyStructure": void;
  "connect:UpdateUserIdentityInfo": void;
  "connect:UpdateUserNotificationStatus": AmazonConnectFullApiSchemaUpdateUserNotificationStatusResponse;
  "connect:UpdateUserPhoneConfig": void;
  "connect:UpdateUserProficiencies": void;
  "connect:UpdateUserRoutingProfile": void;
  "connect:UpdateUserSecurityProfiles": void;
  "connect:UpdateViewContent": AmazonConnectFullApiSchemaUpdateViewContentResponse;
  "connect:UpdateViewMetadata": AmazonConnectFullApiSchemaUpdateViewMetadataResponse;
  "connect:UpdateWorkspaceMetadata": AmazonConnectFullApiSchemaUpdateWorkspaceMetadataResponse;
  "connect:UpdateWorkspacePage": AmazonConnectFullApiSchemaUpdateWorkspacePageResponse;
  "connect:UpdateWorkspaceTheme": AmazonConnectFullApiSchemaUpdateWorkspaceThemeResponse;
  "connect:UpdateWorkspaceVisibility": AmazonConnectFullApiSchemaUpdateWorkspaceVisibilityResponse;
  "connectparticipant:CancelParticipantAuthentication": AmazonConnectFullApiSchemaCancelParticipantAuthenticationResponse;
  "connectparticipant:CompleteAttachmentUpload": AmazonConnectFullApiSchemaCompleteAttachmentUploadResponse;
  "connectparticipant:CreateParticipantConnection": AmazonConnectFullApiSchemaCreateParticipantConnectionResponse;
  "connectparticipant:DescribeView": AmazonConnectFullApiSchemaDescribeViewResponse2;
  "connectparticipant:DisconnectParticipant": AmazonConnectFullApiSchemaDisconnectParticipantResponse;
  "connectparticipant:GetAttachment": AmazonConnectFullApiSchemaGetAttachmentResponse;
  "connectparticipant:GetAuthenticationUrl": AmazonConnectFullApiSchemaGetAuthenticationUrlResponse;
  "connectparticipant:GetTranscript": AmazonConnectFullApiSchemaGetTranscriptResponse;
  "connectparticipant:SendEvent": AmazonConnectFullApiSchemaSendEventResponse;
  "connectparticipant:SendMessage": AmazonConnectFullApiSchemaSendMessageResponse;
  "connectparticipant:StartAttachmentUpload": AmazonConnectFullApiSchemaStartAttachmentUploadResponse;
  "connectcases:BatchGetCaseRule": AmazonConnectFullApiSchemaBatchGetCaseRuleResponse;
  "connectcases:BatchGetField": AmazonConnectFullApiSchemaBatchGetFieldResponse;
  "connectcases:BatchPutFieldOptions": AmazonConnectFullApiSchemaBatchPutFieldOptionsResponse;
  "connectcases:CreateCase": AmazonConnectFullApiSchemaCreateCaseResponse;
  "connectcases:CreateCaseRule": AmazonConnectFullApiSchemaCreateCaseRuleResponse;
  "connectcases:CreateDomain": AmazonConnectFullApiSchemaCreateDomainResponse;
  "connectcases:CreateField": AmazonConnectFullApiSchemaCreateFieldResponse;
  "connectcases:CreateLayout": AmazonConnectFullApiSchemaCreateLayoutResponse;
  "connectcases:CreateRelatedItem": AmazonConnectFullApiSchemaCreateRelatedItemResponse;
  "connectcases:CreateTemplate": AmazonConnectFullApiSchemaCreateTemplateResponse;
  "connectcases:DeleteCase": AmazonConnectFullApiSchemaDeleteCaseResponse;
  "connectcases:DeleteCaseRule": AmazonConnectFullApiSchemaDeleteCaseRuleResponse;
  "connectcases:DeleteDomain": AmazonConnectFullApiSchemaDeleteDomainResponse;
  "connectcases:DeleteField": AmazonConnectFullApiSchemaDeleteFieldResponse;
  "connectcases:DeleteLayout": AmazonConnectFullApiSchemaDeleteLayoutResponse;
  "connectcases:DeleteRelatedItem": AmazonConnectFullApiSchemaDeleteRelatedItemResponse;
  "connectcases:DeleteTemplate": AmazonConnectFullApiSchemaDeleteTemplateResponse;
  "connectcases:GetCase": AmazonConnectFullApiSchemaGetCaseResponse;
  "connectcases:GetCaseAuditEvents": AmazonConnectFullApiSchemaGetCaseAuditEventsResponse;
  "connectcases:GetCaseEventConfiguration": AmazonConnectFullApiSchemaGetCaseEventConfigurationResponse;
  "connectcases:GetDomain": AmazonConnectFullApiSchemaGetDomainResponse;
  "connectcases:GetLayout": AmazonConnectFullApiSchemaGetLayoutResponse;
  "connectcases:GetTemplate": AmazonConnectFullApiSchemaGetTemplateResponse;
  "connectcases:ListCaseRules": AmazonConnectFullApiSchemaListCaseRulesResponse;
  "connectcases:ListCasesForContact": AmazonConnectFullApiSchemaListCasesForContactResponse;
  "connectcases:ListDomains": AmazonConnectFullApiSchemaListDomainsResponse;
  "connectcases:ListFieldOptions": AmazonConnectFullApiSchemaListFieldOptionsResponse;
  "connectcases:ListFields": AmazonConnectFullApiSchemaListFieldsResponse;
  "connectcases:ListLayouts": AmazonConnectFullApiSchemaListLayoutsResponse;
  "connectcases:ListTagsForResource": AmazonConnectFullApiSchemaListTagsForResourceResponse3;
  "connectcases:ListTemplates": AmazonConnectFullApiSchemaListTemplatesResponse;
  "connectcases:PutCaseEventConfiguration": AmazonConnectFullApiSchemaPutCaseEventConfigurationResponse;
  "connectcases:SearchAllRelatedItems": AmazonConnectFullApiSchemaSearchAllRelatedItemsResponse;
  "connectcases:SearchCases": AmazonConnectFullApiSchemaSearchCasesResponse;
  "connectcases:SearchRelatedItems": AmazonConnectFullApiSchemaSearchRelatedItemsResponse;
  "connectcases:TagResource": void;
  "connectcases:UntagResource": void;
  "connectcases:UpdateCase": AmazonConnectFullApiSchemaUpdateCaseResponse;
  "connectcases:UpdateCaseRule": AmazonConnectFullApiSchemaUpdateCaseRuleResponse;
  "connectcases:UpdateField": AmazonConnectFullApiSchemaUpdateFieldResponse;
  "connectcases:UpdateLayout": AmazonConnectFullApiSchemaUpdateLayoutResponse;
  "connectcases:UpdateRelatedItem": AmazonConnectFullApiSchemaUpdateRelatedItemResponse;
  "connectcases:UpdateTemplate": AmazonConnectFullApiSchemaUpdateTemplateResponse;
  "connectcampaigns:CreateCampaign": AmazonConnectFullApiSchemaCreateCampaignResponse;
  "connectcampaigns:DeleteCampaign": void;
  "connectcampaigns:DeleteConnectInstanceConfig": void;
  "connectcampaigns:DeleteInstanceOnboardingJob": void;
  "connectcampaigns:DescribeCampaign": AmazonConnectFullApiSchemaDescribeCampaignResponse;
  "connectcampaigns:GetCampaignState": AmazonConnectFullApiSchemaGetCampaignStateResponse;
  "connectcampaigns:GetCampaignStateBatch": AmazonConnectFullApiSchemaGetCampaignStateBatchResponse;
  "connectcampaigns:GetConnectInstanceConfig": AmazonConnectFullApiSchemaGetConnectInstanceConfigResponse;
  "connectcampaigns:GetInstanceOnboardingJobStatus": AmazonConnectFullApiSchemaGetInstanceOnboardingJobStatusResponse;
  "connectcampaigns:ListCampaigns": AmazonConnectFullApiSchemaListCampaignsResponse;
  "connectcampaigns:ListTagsForResource": AmazonConnectFullApiSchemaListTagsForResourceResponse4;
  "connectcampaigns:PauseCampaign": void;
  "connectcampaigns:PutDialRequestBatch": AmazonConnectFullApiSchemaPutDialRequestBatchResponse;
  "connectcampaigns:ResumeCampaign": void;
  "connectcampaigns:StartCampaign": void;
  "connectcampaigns:StartInstanceOnboardingJob": AmazonConnectFullApiSchemaStartInstanceOnboardingJobResponse;
  "connectcampaigns:StopCampaign": void;
  "connectcampaigns:TagResource": void;
  "connectcampaigns:UntagResource": void;
  "connectcampaigns:UpdateCampaignDialerConfig": void;
  "connectcampaigns:UpdateCampaignName": void;
  "connectcampaigns:UpdateCampaignOutboundCallConfig": void;
  "connectcampaignsv2:CreateCampaign": AmazonConnectFullApiSchemaCreateCampaignResponse2;
  "connectcampaignsv2:DeleteCampaign": void;
  "connectcampaignsv2:DeleteCampaignChannelSubtypeConfig": void;
  "connectcampaignsv2:DeleteCampaignCommunicationLimits": void;
  "connectcampaignsv2:DeleteCampaignCommunicationTime": void;
  "connectcampaignsv2:DeleteCampaignEntryLimits": void;
  "connectcampaignsv2:DeleteConnectInstanceConfig": void;
  "connectcampaignsv2:DeleteConnectInstanceIntegration": void;
  "connectcampaignsv2:DeleteInstanceOnboardingJob": void;
  "connectcampaignsv2:DescribeCampaign": AmazonConnectFullApiSchemaDescribeCampaignResponse2;
  "connectcampaignsv2:GetCampaignState": AmazonConnectFullApiSchemaGetCampaignStateResponse2;
  "connectcampaignsv2:GetCampaignStateBatch": AmazonConnectFullApiSchemaGetCampaignStateBatchResponse2;
  "connectcampaignsv2:GetConnectInstanceConfig": AmazonConnectFullApiSchemaGetConnectInstanceConfigResponse2;
  "connectcampaignsv2:GetInstanceCommunicationLimits": AmazonConnectFullApiSchemaGetInstanceCommunicationLimitsResponse;
  "connectcampaignsv2:GetInstanceOnboardingJobStatus": AmazonConnectFullApiSchemaGetInstanceOnboardingJobStatusResponse2;
  "connectcampaignsv2:ListCampaigns": AmazonConnectFullApiSchemaListCampaignsResponse2;
  "connectcampaignsv2:ListConnectInstanceIntegrations": AmazonConnectFullApiSchemaListConnectInstanceIntegrationsResponse;
  "connectcampaignsv2:ListTagsForResource": AmazonConnectFullApiSchemaListTagsForResourceResponse5;
  "connectcampaignsv2:PauseCampaign": void;
  "connectcampaignsv2:PutConnectInstanceIntegration": void;
  "connectcampaignsv2:PutInstanceCommunicationLimits": void;
  "connectcampaignsv2:PutOutboundRequestBatch": AmazonConnectFullApiSchemaPutOutboundRequestBatchResponse;
  "connectcampaignsv2:PutProfileOutboundRequestBatch": AmazonConnectFullApiSchemaPutProfileOutboundRequestBatchResponse;
  "connectcampaignsv2:ResumeCampaign": void;
  "connectcampaignsv2:StartCampaign": void;
  "connectcampaignsv2:StartInstanceOnboardingJob": AmazonConnectFullApiSchemaStartInstanceOnboardingJobResponse2;
  "connectcampaignsv2:StopCampaign": void;
  "connectcampaignsv2:TagResource": void;
  "connectcampaignsv2:UntagResource": void;
  "connectcampaignsv2:UpdateCampaignChannelSubtypeConfig": void;
  "connectcampaignsv2:UpdateCampaignCommunicationLimits": void;
  "connectcampaignsv2:UpdateCampaignCommunicationTime": void;
  "connectcampaignsv2:UpdateCampaignEntryLimits": void;
  "connectcampaignsv2:UpdateCampaignFlowAssociation": void;
  "connectcampaignsv2:UpdateCampaignName": void;
  "connectcampaignsv2:UpdateCampaignSchedule": void;
  "connectcampaignsv2:UpdateCampaignSource": void;
  "connect-contact-lens:ListRealtimeContactAnalysisSegments": AmazonConnectFullApiSchemaListRealtimeContactAnalysisSegmentsResponse;
  "connecthealth:ActivateSubscription": AmazonConnectFullApiSchemaActivateSubscriptionOutput;
  "connecthealth:CreateDomain": AmazonConnectFullApiSchemaCreateDomainOutput;
  "connecthealth:CreateSubscription": AmazonConnectFullApiSchemaCreateSubscriptionOutput;
  "connecthealth:DeactivateSubscription": AmazonConnectFullApiSchemaDeactivateSubscriptionOutput;
  "connecthealth:DeleteDomain": AmazonConnectFullApiSchemaDeleteDomainOutput;
  "connecthealth:GetDomain": AmazonConnectFullApiSchemaGetDomainOutput;
  "connecthealth:GetMedicalScribeListeningSession": AmazonConnectFullApiSchemaGetMedicalScribeListeningSessionOutput;
  "connecthealth:GetPatientInsightsJob": AmazonConnectFullApiSchemaGetPatientInsightsJobResponse;
  "connecthealth:GetSubscription": AmazonConnectFullApiSchemaGetSubscriptionOutput;
  "connecthealth:ListDomains": AmazonConnectFullApiSchemaListDomainsOutput;
  "connecthealth:ListSubscriptions": AmazonConnectFullApiSchemaListSubscriptionsOutput;
  "connecthealth:ListTagsForResource": AmazonConnectFullApiSchemaListTagsForResourceOutput;
  "connecthealth:StartMedicalScribeListeningSession": AmazonConnectFullApiSchemaStartMedicalScribeListeningSessionOutput;
  "connecthealth:StartPatientInsightsJob": AmazonConnectFullApiSchemaStartPatientInsightsJobResponse;
  "connecthealth:TagResource": void;
  "connecthealth:UntagResource": void;
  "customer-profiles:AddProfileKey": AmazonConnectFullApiSchemaAddProfileKeyResponse;
  "customer-profiles:BatchGetCalculatedAttributeForProfile": AmazonConnectFullApiSchemaBatchGetCalculatedAttributeForProfileResponse;
  "customer-profiles:BatchGetProfile": AmazonConnectFullApiSchemaBatchGetProfileResponse;
  "customer-profiles:BatchPutProfileObject": AmazonConnectFullApiSchemaBatchPutProfileObjectResponse;
  "customer-profiles:CreateCalculatedAttributeDefinition": AmazonConnectFullApiSchemaCreateCalculatedAttributeDefinitionResponse;
  "customer-profiles:CreateDomain": AmazonConnectFullApiSchemaCreateDomainResponse2;
  "customer-profiles:CreateDomainLayout": AmazonConnectFullApiSchemaCreateDomainLayoutResponse;
  "customer-profiles:CreateEventStream": AmazonConnectFullApiSchemaCreateEventStreamResponse;
  "customer-profiles:CreateEventTrigger": AmazonConnectFullApiSchemaCreateEventTriggerResponse;
  "customer-profiles:CreateIntegrationWorkflow": AmazonConnectFullApiSchemaCreateIntegrationWorkflowResponse;
  "customer-profiles:CreateProfile": AmazonConnectFullApiSchemaCreateProfileResponse;
  "customer-profiles:CreateRecommender": AmazonConnectFullApiSchemaCreateRecommenderResponse;
  "customer-profiles:CreateRecommenderFilter": AmazonConnectFullApiSchemaCreateRecommenderFilterResponse;
  "customer-profiles:CreateRecommenderSchema": AmazonConnectFullApiSchemaCreateRecommenderSchemaResponse;
  "customer-profiles:CreateSegmentDefinition": AmazonConnectFullApiSchemaCreateSegmentDefinitionResponse;
  "customer-profiles:CreateSegmentEstimate": AmazonConnectFullApiSchemaCreateSegmentEstimateResponse;
  "customer-profiles:CreateSegmentSnapshot": AmazonConnectFullApiSchemaCreateSegmentSnapshotResponse;
  "customer-profiles:CreateUploadJob": AmazonConnectFullApiSchemaCreateUploadJobResponse;
  "customer-profiles:DeleteCalculatedAttributeDefinition": AmazonConnectFullApiSchemaDeleteCalculatedAttributeDefinitionResponse;
  "customer-profiles:DeleteDomain": AmazonConnectFullApiSchemaDeleteDomainResponse2;
  "customer-profiles:DeleteDomainLayout": AmazonConnectFullApiSchemaDeleteDomainLayoutResponse;
  "customer-profiles:DeleteDomainObjectType": AmazonConnectFullApiSchemaDeleteDomainObjectTypeResponse;
  "customer-profiles:DeleteEventStream": AmazonConnectFullApiSchemaDeleteEventStreamResponse;
  "customer-profiles:DeleteEventTrigger": AmazonConnectFullApiSchemaDeleteEventTriggerResponse;
  "customer-profiles:DeleteIntegration": AmazonConnectFullApiSchemaDeleteIntegrationResponse;
  "customer-profiles:DeleteProfile": AmazonConnectFullApiSchemaDeleteProfileResponse;
  "customer-profiles:DeleteProfileKey": AmazonConnectFullApiSchemaDeleteProfileKeyResponse;
  "customer-profiles:DeleteProfileObject": AmazonConnectFullApiSchemaDeleteProfileObjectResponse;
  "customer-profiles:DeleteProfileObjectType": AmazonConnectFullApiSchemaDeleteProfileObjectTypeResponse;
  "customer-profiles:DeleteRecommender": AmazonConnectFullApiSchemaDeleteRecommenderResponse;
  "customer-profiles:DeleteRecommenderFilter": AmazonConnectFullApiSchemaDeleteRecommenderFilterResponse;
  "customer-profiles:DeleteRecommenderSchema": AmazonConnectFullApiSchemaDeleteRecommenderSchemaResponse;
  "customer-profiles:DeleteSegmentDefinition": AmazonConnectFullApiSchemaDeleteSegmentDefinitionResponse;
  "customer-profiles:DeleteWorkflow": AmazonConnectFullApiSchemaDeleteWorkflowResponse;
  "customer-profiles:DetectProfileObjectType": AmazonConnectFullApiSchemaDetectProfileObjectTypeResponse;
  "customer-profiles:GetAutoMergingPreview": AmazonConnectFullApiSchemaGetAutoMergingPreviewResponse;
  "customer-profiles:GetCalculatedAttributeDefinition": AmazonConnectFullApiSchemaGetCalculatedAttributeDefinitionResponse;
  "customer-profiles:GetCalculatedAttributeForProfile": AmazonConnectFullApiSchemaGetCalculatedAttributeForProfileResponse;
  "customer-profiles:GetDomain": AmazonConnectFullApiSchemaGetDomainResponse2;
  "customer-profiles:GetDomainLayout": AmazonConnectFullApiSchemaGetDomainLayoutResponse;
  "customer-profiles:GetDomainObjectType": AmazonConnectFullApiSchemaGetDomainObjectTypeResponse;
  "customer-profiles:GetEventStream": AmazonConnectFullApiSchemaGetEventStreamResponse;
  "customer-profiles:GetEventTrigger": AmazonConnectFullApiSchemaGetEventTriggerResponse;
  "customer-profiles:GetIdentityResolutionJob": AmazonConnectFullApiSchemaGetIdentityResolutionJobResponse;
  "customer-profiles:GetIntegration": AmazonConnectFullApiSchemaGetIntegrationResponse;
  "customer-profiles:GetMatches": AmazonConnectFullApiSchemaGetMatchesResponse;
  "customer-profiles:GetObjectTypeAttributeStatistics": AmazonConnectFullApiSchemaGetObjectTypeAttributeStatisticsResponse;
  "customer-profiles:GetProfileHistoryRecord": AmazonConnectFullApiSchemaGetProfileHistoryRecordResponse;
  "customer-profiles:GetProfileObjectType": AmazonConnectFullApiSchemaGetProfileObjectTypeResponse;
  "customer-profiles:GetProfileObjectTypeTemplate": AmazonConnectFullApiSchemaGetProfileObjectTypeTemplateResponse;
  "customer-profiles:GetProfileRecommendations": AmazonConnectFullApiSchemaGetProfileRecommendationsResponse;
  "customer-profiles:GetRecommender": AmazonConnectFullApiSchemaGetRecommenderResponse;
  "customer-profiles:GetRecommenderFilter": AmazonConnectFullApiSchemaGetRecommenderFilterResponse;
  "customer-profiles:GetRecommenderSchema": AmazonConnectFullApiSchemaGetRecommenderSchemaResponse;
  "customer-profiles:GetSegmentDefinition": AmazonConnectFullApiSchemaGetSegmentDefinitionResponse;
  "customer-profiles:GetSegmentEstimate": AmazonConnectFullApiSchemaGetSegmentEstimateResponse;
  "customer-profiles:GetSegmentMembership": AmazonConnectFullApiSchemaGetSegmentMembershipResponse;
  "customer-profiles:GetSegmentSnapshot": AmazonConnectFullApiSchemaGetSegmentSnapshotResponse;
  "customer-profiles:GetSimilarProfiles": AmazonConnectFullApiSchemaGetSimilarProfilesResponse;
  "customer-profiles:GetUploadJob": AmazonConnectFullApiSchemaGetUploadJobResponse;
  "customer-profiles:GetUploadJobPath": AmazonConnectFullApiSchemaGetUploadJobPathResponse;
  "customer-profiles:GetWorkflow": AmazonConnectFullApiSchemaGetWorkflowResponse;
  "customer-profiles:GetWorkflowSteps": AmazonConnectFullApiSchemaGetWorkflowStepsResponse;
  "customer-profiles:ListAccountIntegrations": AmazonConnectFullApiSchemaListAccountIntegrationsResponse;
  "customer-profiles:ListCalculatedAttributeDefinitions": AmazonConnectFullApiSchemaListCalculatedAttributeDefinitionsResponse;
  "customer-profiles:ListCalculatedAttributesForProfile": AmazonConnectFullApiSchemaListCalculatedAttributesForProfileResponse;
  "customer-profiles:ListDomainLayouts": AmazonConnectFullApiSchemaListDomainLayoutsResponse;
  "customer-profiles:ListDomainObjectTypes": AmazonConnectFullApiSchemaListDomainObjectTypesResponse;
  "customer-profiles:ListDomains": AmazonConnectFullApiSchemaListDomainsResponse2;
  "customer-profiles:ListEventStreams": AmazonConnectFullApiSchemaListEventStreamsResponse;
  "customer-profiles:ListEventTriggers": AmazonConnectFullApiSchemaListEventTriggersResponse;
  "customer-profiles:ListIdentityResolutionJobs": AmazonConnectFullApiSchemaListIdentityResolutionJobsResponse;
  "customer-profiles:ListIntegrations": AmazonConnectFullApiSchemaListIntegrationsResponse;
  "customer-profiles:ListObjectTypeAttributeValues": AmazonConnectFullApiSchemaListObjectTypeAttributeValuesResponse;
  "customer-profiles:ListObjectTypeAttributes": AmazonConnectFullApiSchemaListObjectTypeAttributesResponse;
  "customer-profiles:ListProfileAttributeValues": AmazonConnectFullApiSchemaProfileAttributeValuesResponse;
  "customer-profiles:ListProfileHistoryRecords": AmazonConnectFullApiSchemaListProfileHistoryRecordsResponse;
  "customer-profiles:ListProfileObjectTypeTemplates": AmazonConnectFullApiSchemaListProfileObjectTypeTemplatesResponse;
  "customer-profiles:ListProfileObjectTypes": AmazonConnectFullApiSchemaListProfileObjectTypesResponse;
  "customer-profiles:ListProfileObjects": AmazonConnectFullApiSchemaListProfileObjectsResponse;
  "customer-profiles:ListRecommenderFilters": AmazonConnectFullApiSchemaListRecommenderFiltersResponse;
  "customer-profiles:ListRecommenderRecipes": AmazonConnectFullApiSchemaListRecommenderRecipesResponse;
  "customer-profiles:ListRecommenderSchemas": AmazonConnectFullApiSchemaListRecommenderSchemasResponse;
  "customer-profiles:ListRecommenders": AmazonConnectFullApiSchemaListRecommendersResponse;
  "customer-profiles:ListRuleBasedMatches": AmazonConnectFullApiSchemaListRuleBasedMatchesResponse;
  "customer-profiles:ListSegmentDefinitions": AmazonConnectFullApiSchemaListSegmentDefinitionsResponse;
  "customer-profiles:ListTagsForResource": AmazonConnectFullApiSchemaListTagsForResourceResponse6;
  "customer-profiles:ListUploadJobs": AmazonConnectFullApiSchemaListUploadJobsResponse;
  "customer-profiles:ListWorkflows": AmazonConnectFullApiSchemaListWorkflowsResponse;
  "customer-profiles:MergeProfiles": AmazonConnectFullApiSchemaMergeProfilesResponse;
  "customer-profiles:PutDomainObjectType": AmazonConnectFullApiSchemaPutDomainObjectTypeResponse;
  "customer-profiles:PutIntegration": AmazonConnectFullApiSchemaPutIntegrationResponse;
  "customer-profiles:PutProfileObject": AmazonConnectFullApiSchemaPutProfileObjectResponse;
  "customer-profiles:PutProfileObjectType": AmazonConnectFullApiSchemaPutProfileObjectTypeResponse;
  "customer-profiles:SearchProfiles": AmazonConnectFullApiSchemaSearchProfilesResponse;
  "customer-profiles:StartRecommender": AmazonConnectFullApiSchemaStartRecommenderResponse;
  "customer-profiles:StartUploadJob": AmazonConnectFullApiSchemaStartUploadJobResponse;
  "customer-profiles:StopRecommender": AmazonConnectFullApiSchemaStopRecommenderResponse;
  "customer-profiles:StopUploadJob": AmazonConnectFullApiSchemaStopUploadJobResponse;
  "customer-profiles:TagResource": AmazonConnectFullApiSchemaTagResourceResponse2;
  "customer-profiles:UntagResource": AmazonConnectFullApiSchemaUntagResourceResponse2;
  "customer-profiles:UpdateCalculatedAttributeDefinition": AmazonConnectFullApiSchemaUpdateCalculatedAttributeDefinitionResponse;
  "customer-profiles:UpdateDomain": AmazonConnectFullApiSchemaUpdateDomainResponse;
  "customer-profiles:UpdateDomainLayout": AmazonConnectFullApiSchemaUpdateDomainLayoutResponse;
  "customer-profiles:UpdateEventTrigger": AmazonConnectFullApiSchemaUpdateEventTriggerResponse;
  "customer-profiles:UpdateProfile": AmazonConnectFullApiSchemaUpdateProfileResponse;
  "customer-profiles:UpdateRecommender": AmazonConnectFullApiSchemaUpdateRecommenderResponse;
  "qconnect:ActivateMessageTemplate": AmazonConnectFullApiSchemaActivateMessageTemplateResponse;
  "qconnect:CreateAIAgent": AmazonConnectFullApiSchemaCreateAIAgentResponse;
  "qconnect:CreateAIAgentVersion": AmazonConnectFullApiSchemaCreateAIAgentVersionResponse;
  "qconnect:CreateAIGuardrail": AmazonConnectFullApiSchemaCreateAIGuardrailResponse;
  "qconnect:CreateAIGuardrailVersion": AmazonConnectFullApiSchemaCreateAIGuardrailVersionResponse;
  "qconnect:CreateAIPrompt": AmazonConnectFullApiSchemaCreateAIPromptResponse;
  "qconnect:CreateAIPromptVersion": AmazonConnectFullApiSchemaCreateAIPromptVersionResponse;
  "qconnect:CreateAssistant": AmazonConnectFullApiSchemaCreateAssistantResponse;
  "qconnect:CreateAssistantAssociation": AmazonConnectFullApiSchemaCreateAssistantAssociationResponse;
  "qconnect:CreateContent": AmazonConnectFullApiSchemaCreateContentResponse;
  "qconnect:CreateContentAssociation": AmazonConnectFullApiSchemaCreateContentAssociationResponse;
  "qconnect:CreateKnowledgeBase": AmazonConnectFullApiSchemaCreateKnowledgeBaseResponse;
  "qconnect:CreateMessageTemplate": AmazonConnectFullApiSchemaCreateMessageTemplateResponse;
  "qconnect:CreateMessageTemplateAttachment": AmazonConnectFullApiSchemaCreateMessageTemplateAttachmentResponse;
  "qconnect:CreateMessageTemplateVersion": AmazonConnectFullApiSchemaCreateMessageTemplateVersionResponse;
  "qconnect:CreateQuickResponse": AmazonConnectFullApiSchemaCreateQuickResponseResponse;
  "qconnect:CreateSession": AmazonConnectFullApiSchemaCreateSessionResponse;
  "qconnect:DeactivateMessageTemplate": AmazonConnectFullApiSchemaDeactivateMessageTemplateResponse;
  "qconnect:DeleteAIAgent": AmazonConnectFullApiSchemaDeleteAIAgentResponse;
  "qconnect:DeleteAIAgentVersion": AmazonConnectFullApiSchemaDeleteAIAgentVersionResponse;
  "qconnect:DeleteAIGuardrail": AmazonConnectFullApiSchemaDeleteAIGuardrailResponse;
  "qconnect:DeleteAIGuardrailVersion": AmazonConnectFullApiSchemaDeleteAIGuardrailVersionResponse;
  "qconnect:DeleteAIPrompt": AmazonConnectFullApiSchemaDeleteAIPromptResponse;
  "qconnect:DeleteAIPromptVersion": AmazonConnectFullApiSchemaDeleteAIPromptVersionResponse;
  "qconnect:DeleteAssistant": AmazonConnectFullApiSchemaDeleteAssistantResponse;
  "qconnect:DeleteAssistantAssociation": AmazonConnectFullApiSchemaDeleteAssistantAssociationResponse;
  "qconnect:DeleteContent": AmazonConnectFullApiSchemaDeleteContentResponse;
  "qconnect:DeleteContentAssociation": AmazonConnectFullApiSchemaDeleteContentAssociationResponse;
  "qconnect:DeleteImportJob": AmazonConnectFullApiSchemaDeleteImportJobResponse;
  "qconnect:DeleteKnowledgeBase": AmazonConnectFullApiSchemaDeleteKnowledgeBaseResponse;
  "qconnect:DeleteMessageTemplate": AmazonConnectFullApiSchemaDeleteMessageTemplateResponse;
  "qconnect:DeleteMessageTemplateAttachment": AmazonConnectFullApiSchemaDeleteMessageTemplateAttachmentResponse;
  "qconnect:DeleteQuickResponse": AmazonConnectFullApiSchemaDeleteQuickResponseResponse;
  "qconnect:GetAIAgent": AmazonConnectFullApiSchemaGetAIAgentResponse;
  "qconnect:GetAIGuardrail": AmazonConnectFullApiSchemaGetAIGuardrailResponse;
  "qconnect:GetAIPrompt": AmazonConnectFullApiSchemaGetAIPromptResponse;
  "qconnect:GetAssistant": AmazonConnectFullApiSchemaGetAssistantResponse;
  "qconnect:GetAssistantAssociation": AmazonConnectFullApiSchemaGetAssistantAssociationResponse;
  "qconnect:GetContent": AmazonConnectFullApiSchemaGetContentResponse;
  "qconnect:GetContentAssociation": AmazonConnectFullApiSchemaGetContentAssociationResponse;
  "qconnect:GetContentSummary": AmazonConnectFullApiSchemaGetContentSummaryResponse;
  "qconnect:GetImportJob": AmazonConnectFullApiSchemaGetImportJobResponse;
  "qconnect:GetKnowledgeBase": AmazonConnectFullApiSchemaGetKnowledgeBaseResponse;
  "qconnect:GetMessageTemplate": AmazonConnectFullApiSchemaGetMessageTemplateResponse;
  "qconnect:GetNextMessage": AmazonConnectFullApiSchemaGetNextMessageResponse;
  "qconnect:GetQuickResponse": AmazonConnectFullApiSchemaGetQuickResponseResponse;
  "qconnect:GetRecommendations": AmazonConnectFullApiSchemaGetRecommendationsResponse;
  "qconnect:GetSession": AmazonConnectFullApiSchemaGetSessionResponse;
  "qconnect:ListAIAgentVersions": AmazonConnectFullApiSchemaListAIAgentVersionsResponse;
  "qconnect:ListAIAgents": AmazonConnectFullApiSchemaListAIAgentsResponse;
  "qconnect:ListAIGuardrailVersions": AmazonConnectFullApiSchemaListAIGuardrailVersionsResponse;
  "qconnect:ListAIGuardrails": AmazonConnectFullApiSchemaListAIGuardrailsResponse;
  "qconnect:ListAIPromptVersions": AmazonConnectFullApiSchemaListAIPromptVersionsResponse;
  "qconnect:ListAIPrompts": AmazonConnectFullApiSchemaListAIPromptsResponse;
  "qconnect:ListAssistantAssociations": AmazonConnectFullApiSchemaListAssistantAssociationsResponse;
  "qconnect:ListAssistants": AmazonConnectFullApiSchemaListAssistantsResponse;
  "qconnect:ListContentAssociations": AmazonConnectFullApiSchemaListContentAssociationsResponse;
  "qconnect:ListContents": AmazonConnectFullApiSchemaListContentsResponse;
  "qconnect:ListImportJobs": AmazonConnectFullApiSchemaListImportJobsResponse;
  "qconnect:ListKnowledgeBases": AmazonConnectFullApiSchemaListKnowledgeBasesResponse;
  "qconnect:ListMessageTemplateVersions": AmazonConnectFullApiSchemaListMessageTemplateVersionsResponse;
  "qconnect:ListMessageTemplates": AmazonConnectFullApiSchemaListMessageTemplatesResponse;
  "qconnect:ListMessages": AmazonConnectFullApiSchemaListMessagesResponse;
  "qconnect:ListModels": AmazonConnectFullApiSchemaListModelsResponse;
  "qconnect:ListQuickResponses": AmazonConnectFullApiSchemaListQuickResponsesResponse;
  "qconnect:ListSpans": AmazonConnectFullApiSchemaListSpansResponse;
  "qconnect:ListTagsForResource": AmazonConnectFullApiSchemaListTagsForResourceResponse7;
  "qconnect:NotifyRecommendationsReceived": AmazonConnectFullApiSchemaNotifyRecommendationsReceivedResponse;
  "qconnect:PutFeedback": AmazonConnectFullApiSchemaPutFeedbackResponse;
  "qconnect:QueryAssistant": AmazonConnectFullApiSchemaQueryAssistantResponse;
  "qconnect:RemoveAssistantAIAgent": AmazonConnectFullApiSchemaRemoveAssistantAIAgentResponse;
  "qconnect:RemoveKnowledgeBaseTemplateUri": AmazonConnectFullApiSchemaRemoveKnowledgeBaseTemplateUriResponse;
  "qconnect:RenderMessageTemplate": AmazonConnectFullApiSchemaRenderMessageTemplateResponse;
  "qconnect:Retrieve": AmazonConnectFullApiSchemaRetrieveResponse;
  "qconnect:SearchContent": AmazonConnectFullApiSchemaSearchContentResponse;
  "qconnect:SearchMessageTemplates": AmazonConnectFullApiSchemaSearchMessageTemplatesResponse;
  "qconnect:SearchQuickResponses": AmazonConnectFullApiSchemaSearchQuickResponsesResponse;
  "qconnect:SearchSessions": AmazonConnectFullApiSchemaSearchSessionsResponse;
  "qconnect:SendMessage": AmazonConnectFullApiSchemaSendMessageResponse2;
  "qconnect:StartContentUpload": AmazonConnectFullApiSchemaStartContentUploadResponse;
  "qconnect:StartImportJob": AmazonConnectFullApiSchemaStartImportJobResponse;
  "qconnect:TagResource": AmazonConnectFullApiSchemaTagResourceResponse3;
  "qconnect:UntagResource": AmazonConnectFullApiSchemaUntagResourceResponse3;
  "qconnect:UpdateAIAgent": AmazonConnectFullApiSchemaUpdateAIAgentResponse;
  "qconnect:UpdateAIGuardrail": AmazonConnectFullApiSchemaUpdateAIGuardrailResponse;
  "qconnect:UpdateAIPrompt": AmazonConnectFullApiSchemaUpdateAIPromptResponse;
  "qconnect:UpdateAssistantAIAgent": AmazonConnectFullApiSchemaUpdateAssistantAIAgentResponse;
  "qconnect:UpdateContent": AmazonConnectFullApiSchemaUpdateContentResponse;
  "qconnect:UpdateKnowledgeBaseTemplateUri": AmazonConnectFullApiSchemaUpdateKnowledgeBaseTemplateUriResponse;
  "qconnect:UpdateMessageTemplate": AmazonConnectFullApiSchemaUpdateMessageTemplateResponse;
  "qconnect:UpdateMessageTemplateMetadata": AmazonConnectFullApiSchemaUpdateMessageTemplateMetadataResponse;
  "qconnect:UpdateQuickResponse": AmazonConnectFullApiSchemaUpdateQuickResponseResponse;
  "qconnect:UpdateSession": AmazonConnectFullApiSchemaUpdateSessionResponse;
  "qconnect:UpdateSessionData": AmazonConnectFullApiSchemaUpdateSessionDataResponse;
  "wisdom:CreateAssistant": AmazonConnectFullApiSchemaCreateAssistantResponse2;
  "wisdom:CreateAssistantAssociation": AmazonConnectFullApiSchemaCreateAssistantAssociationResponse2;
  "wisdom:CreateContent": AmazonConnectFullApiSchemaCreateContentResponse2;
  "wisdom:CreateKnowledgeBase": AmazonConnectFullApiSchemaCreateKnowledgeBaseResponse2;
  "wisdom:CreateQuickResponse": AmazonConnectFullApiSchemaCreateQuickResponseResponse2;
  "wisdom:CreateSession": AmazonConnectFullApiSchemaCreateSessionResponse2;
  "wisdom:DeleteAssistant": AmazonConnectFullApiSchemaDeleteAssistantResponse2;
  "wisdom:DeleteAssistantAssociation": AmazonConnectFullApiSchemaDeleteAssistantAssociationResponse2;
  "wisdom:DeleteContent": AmazonConnectFullApiSchemaDeleteContentResponse2;
  "wisdom:DeleteImportJob": AmazonConnectFullApiSchemaDeleteImportJobResponse2;
  "wisdom:DeleteKnowledgeBase": AmazonConnectFullApiSchemaDeleteKnowledgeBaseResponse2;
  "wisdom:DeleteQuickResponse": AmazonConnectFullApiSchemaDeleteQuickResponseResponse2;
  "wisdom:GetAssistant": AmazonConnectFullApiSchemaGetAssistantResponse2;
  "wisdom:GetAssistantAssociation": AmazonConnectFullApiSchemaGetAssistantAssociationResponse2;
  "wisdom:GetContent": AmazonConnectFullApiSchemaGetContentResponse2;
  "wisdom:GetContentSummary": AmazonConnectFullApiSchemaGetContentSummaryResponse2;
  "wisdom:GetImportJob": AmazonConnectFullApiSchemaGetImportJobResponse2;
  "wisdom:GetKnowledgeBase": AmazonConnectFullApiSchemaGetKnowledgeBaseResponse2;
  "wisdom:GetQuickResponse": AmazonConnectFullApiSchemaGetQuickResponseResponse2;
  "wisdom:GetRecommendations": AmazonConnectFullApiSchemaGetRecommendationsResponse2;
  "wisdom:GetSession": AmazonConnectFullApiSchemaGetSessionResponse2;
  "wisdom:ListAssistantAssociations": AmazonConnectFullApiSchemaListAssistantAssociationsResponse2;
  "wisdom:ListAssistants": AmazonConnectFullApiSchemaListAssistantsResponse2;
  "wisdom:ListContents": AmazonConnectFullApiSchemaListContentsResponse2;
  "wisdom:ListImportJobs": AmazonConnectFullApiSchemaListImportJobsResponse2;
  "wisdom:ListKnowledgeBases": AmazonConnectFullApiSchemaListKnowledgeBasesResponse2;
  "wisdom:ListQuickResponses": AmazonConnectFullApiSchemaListQuickResponsesResponse2;
  "wisdom:ListTagsForResource": AmazonConnectFullApiSchemaListTagsForResourceResponse8;
  "wisdom:NotifyRecommendationsReceived": AmazonConnectFullApiSchemaNotifyRecommendationsReceivedResponse2;
  "wisdom:QueryAssistant": AmazonConnectFullApiSchemaQueryAssistantResponse2;
  "wisdom:RemoveKnowledgeBaseTemplateUri": AmazonConnectFullApiSchemaRemoveKnowledgeBaseTemplateUriResponse2;
  "wisdom:SearchContent": AmazonConnectFullApiSchemaSearchContentResponse2;
  "wisdom:SearchQuickResponses": AmazonConnectFullApiSchemaSearchQuickResponsesResponse2;
  "wisdom:SearchSessions": AmazonConnectFullApiSchemaSearchSessionsResponse2;
  "wisdom:StartContentUpload": AmazonConnectFullApiSchemaStartContentUploadResponse2;
  "wisdom:StartImportJob": AmazonConnectFullApiSchemaStartImportJobResponse2;
  "wisdom:TagResource": AmazonConnectFullApiSchemaTagResourceResponse4;
  "wisdom:UntagResource": AmazonConnectFullApiSchemaUntagResourceResponse4;
  "wisdom:UpdateContent": AmazonConnectFullApiSchemaUpdateContentResponse2;
  "wisdom:UpdateKnowledgeBaseTemplateUri": AmazonConnectFullApiSchemaUpdateKnowledgeBaseTemplateUriResponse2;
  "wisdom:UpdateQuickResponse": AmazonConnectFullApiSchemaUpdateQuickResponseResponse2;
}
