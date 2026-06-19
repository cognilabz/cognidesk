// Generated provider schema DTOs for SesFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type SesFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type SesFullApiSchemaJsonValue = SesFullApiSchemaJsonPrimitive | readonly SesFullApiSchemaJsonValue[] | { readonly [key: string]: SesFullApiSchemaJsonValue | undefined };

export type SesFullApiSchemaBatchGetMetricDataQueries = ReadonlyArray<SesFullApiSchemaBatchGetMetricDataQuery>;

export type SesFullApiSchemaBatchGetMetricDataResponse = {
  Results?: SesFullApiSchemaMetricDataResultList;
  Errors?: SesFullApiSchemaMetricDataErrorList;
};

export type SesFullApiSchemaCancelExportJobResponse = {};

export type SesFullApiSchemaCloneReceiptRuleSetResponse = {};

export type SesFullApiSchemaTrackingOptions = {
  CustomRedirectDomain: string;
  HttpsPolicy?: SesFullApiSchemaHttpsPolicy;
};

export type SesFullApiSchemaDeliveryOptions = {
  TlsPolicy?: SesFullApiSchemaTlsPolicy;
  SendingPoolName?: string;
  MaxDeliverySeconds?: number;
};

export type SesFullApiSchemaReputationOptions = {
  ReputationMetricsEnabled?: boolean;
  LastFreshStart?: string;
};

export type SesFullApiSchemaSendingOptions = {
  SendingEnabled?: boolean;
};

export type SesFullApiSchemaTagList = ReadonlyArray<SesFullApiSchemaTag>;

export type SesFullApiSchemaSuppressionOptions = {
  SuppressedReasons?: SesFullApiSchemaSuppressionListReasons;
  SuppressionScope?: SesFullApiSchemaSuppressionListScope;
  ValidationOptions?: SesFullApiSchemaSuppressionValidationOptions;
};

export type SesFullApiSchemaVdmOptions = {
  DashboardOptions?: SesFullApiSchemaDashboardOptions;
  GuardianOptions?: SesFullApiSchemaGuardianOptions;
};

export type SesFullApiSchemaArchivingOptions = {
  ArchiveArn?: string;
};

export type SesFullApiSchemaCreateConfigurationSetResponse = {};

export type SesFullApiSchemaEventDestinationDefinition = {
  Enabled?: boolean;
  MatchingEventTypes?: SesFullApiSchemaEventTypes;
  KinesisFirehoseDestination?: SesFullApiSchemaKinesisFirehoseDestination;
  CloudWatchDestination?: SesFullApiSchemaCloudWatchDestination;
  SnsDestination?: SesFullApiSchemaSnsDestination;
  EventBridgeDestination?: SesFullApiSchemaEventBridgeDestination;
  PinpointDestination?: SesFullApiSchemaPinpointDestination;
};

export type SesFullApiSchemaCreateConfigurationSetEventDestinationResponse = {};

export type SesFullApiSchemaEventDestination = {
  Name: string;
  Enabled?: boolean;
  MatchingEventTypes: SesFullApiSchemaEventTypes2;
  KinesisFirehoseDestination?: SesFullApiSchemaKinesisFirehoseDestination2;
  CloudWatchDestination?: SesFullApiSchemaCloudWatchDestination2;
  SNSDestination?: SesFullApiSchemaSNSDestination;
};

export type SesFullApiSchemaCreateConfigurationSetEventDestinationResponse2 = {};

export type SesFullApiSchemaConfigurationSet = {
  Name: string;
};

export type SesFullApiSchemaCreateConfigurationSetResponse2 = {};

export type SesFullApiSchemaTrackingOptions2 = {
  CustomRedirectDomain?: string;
};

export type SesFullApiSchemaCreateConfigurationSetTrackingOptionsResponse = {};

export type SesFullApiSchemaTopicPreferenceList = ReadonlyArray<SesFullApiSchemaTopicPreference>;

export type SesFullApiSchemaCreateContactResponse = {};

export type SesFullApiSchemaTopics = ReadonlyArray<SesFullApiSchemaTopic>;

export type SesFullApiSchemaCreateContactListResponse = {};

export type SesFullApiSchemaCreateCustomVerificationEmailTemplateResponse = {};

export type SesFullApiSchemaScalingMode = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaCreateDedicatedIpPoolResponse = {};

export type SesFullApiSchemaEmailContent = {
  Simple?: SesFullApiSchemaMessage2;
  Raw?: SesFullApiSchemaRawMessage2;
  Template?: SesFullApiSchemaTemplate2;
};

export type SesFullApiSchemaCreateDeliverabilityTestReportResponse = {
  ReportId: string;
  DeliverabilityTestStatus: SesFullApiSchemaDeliverabilityTestStatus;
};

export type SesFullApiSchemaDkimSigningAttributes = {
  DomainSigningSelector?: string;
  DomainSigningPrivateKey?: string;
  NextSigningKeyLength?: SesFullApiSchemaDkimSigningKeyLength;
  DomainSigningAttributesOrigin?: SesFullApiSchemaDkimSigningAttributesOrigin;
};

export type SesFullApiSchemaCreateEmailIdentityResponse = {
  IdentityType?: SesFullApiSchemaIdentityType2;
  VerifiedForSendingStatus?: boolean;
  DkimAttributes?: SesFullApiSchemaDkimAttributes;
};

export type SesFullApiSchemaCreateEmailIdentityPolicyResponse = {};

export type SesFullApiSchemaEmailTemplateContent = {
  Subject?: string;
  Text?: string;
  Html?: string;
};

export type SesFullApiSchemaCreateEmailTemplateResponse = {};

export type SesFullApiSchemaExportDataSource = {
  MetricsDataSource?: SesFullApiSchemaMetricsDataSource;
  MessageInsightsDataSource?: SesFullApiSchemaMessageInsightsDataSource;
};

export type SesFullApiSchemaExportDestination = {
  DataFormat: SesFullApiSchemaDataFormat;
  S3Url?: string;
};

export type SesFullApiSchemaCreateExportJobResponse = {
  JobId?: string;
};

export type SesFullApiSchemaImportDestination = {
  SuppressionListDestination?: SesFullApiSchemaSuppressionListDestination;
  ContactListDestination?: SesFullApiSchemaContactListDestination;
};

export type SesFullApiSchemaImportDataSource = {
  S3Url: string;
  DataFormat: SesFullApiSchemaDataFormat;
};

export type SesFullApiSchemaCreateImportJobResponse = {
  JobId?: string;
};

export type SesFullApiSchemaDetails = {
  RoutesDetails: SesFullApiSchemaRoutesDetails;
};

export type SesFullApiSchemaCreateMultiRegionEndpointResponse = {
  Status?: SesFullApiSchemaStatus;
  EndpointId?: string;
};

export type SesFullApiSchemaReceiptFilter = {
  Name: string;
  IpFilter: SesFullApiSchemaReceiptIpFilter;
};

export type SesFullApiSchemaCreateReceiptFilterResponse = {};

export type SesFullApiSchemaReceiptRule = {
  Name: string;
  Enabled?: boolean;
  TlsPolicy?: SesFullApiSchemaTlsPolicy2;
  Recipients?: SesFullApiSchemaRecipientsList;
  Actions?: SesFullApiSchemaReceiptActionsList;
  ScanEnabled?: boolean;
};

export type SesFullApiSchemaCreateReceiptRuleResponse = {};

export type SesFullApiSchemaCreateReceiptRuleSetResponse = {};

export type SesFullApiSchemaTemplate = {
  TemplateName: string;
  SubjectPart?: string;
  TextPart?: string;
  HtmlPart?: string;
};

export type SesFullApiSchemaCreateTemplateResponse = {};

export type SesFullApiSchemaTenantSuppressionAttributes = {
  SuppressedReasons?: SesFullApiSchemaSuppressionListReasons;
  SuppressionScope?: SesFullApiSchemaSuppressionListScope;
};

export type SesFullApiSchemaCreateTenantResponse = {
  TenantName?: string;
  TenantId?: string;
  TenantArn?: string;
  CreatedTimestamp?: string;
  Tags?: SesFullApiSchemaTagList;
  SendingStatus?: SesFullApiSchemaSendingStatus;
  SuppressionAttributes?: SesFullApiSchemaTenantSuppressionAttributes;
};

export type SesFullApiSchemaCreateTenantResourceAssociationResponse = {};

export type SesFullApiSchemaDeleteConfigurationSetResponse = {};

export type SesFullApiSchemaDeleteConfigurationSetEventDestinationResponse = {};

export type SesFullApiSchemaDeleteConfigurationSetEventDestinationResponse2 = {};

export type SesFullApiSchemaDeleteConfigurationSetResponse2 = {};

export type SesFullApiSchemaDeleteConfigurationSetTrackingOptionsResponse = {};

export type SesFullApiSchemaDeleteContactResponse = {};

export type SesFullApiSchemaDeleteContactListResponse = {};

export type SesFullApiSchemaDeleteCustomVerificationEmailTemplateResponse = {};

export type SesFullApiSchemaDeleteDedicatedIpPoolResponse = {};

export type SesFullApiSchemaDeleteEmailIdentityResponse = {};

export type SesFullApiSchemaDeleteEmailIdentityPolicyResponse = {};

export type SesFullApiSchemaDeleteEmailTemplateResponse = {};

export type SesFullApiSchemaDeleteIdentityResponse = {};

export type SesFullApiSchemaDeleteIdentityPolicyResponse = {};

export type SesFullApiSchemaDeleteMultiRegionEndpointResponse = {
  Status?: SesFullApiSchemaStatus;
};

export type SesFullApiSchemaDeleteReceiptFilterResponse = {};

export type SesFullApiSchemaDeleteReceiptRuleResponse = {};

export type SesFullApiSchemaDeleteReceiptRuleSetResponse = {};

export type SesFullApiSchemaDeleteSuppressedDestinationResponse = {};

export type SesFullApiSchemaDeleteTemplateResponse = {};

export type SesFullApiSchemaDeleteTenantResponse = {};

export type SesFullApiSchemaDeleteTenantResourceAssociationResponse = {};

export type SesFullApiSchemaDescribeActiveReceiptRuleSetResponse = {
  Metadata?: SesFullApiSchemaReceiptRuleSetMetadata;
  Rules?: SesFullApiSchemaReceiptRulesList;
};

export type SesFullApiSchemaConfigurationSetAttributeList = ReadonlyArray<SesFullApiSchemaConfigurationSetAttribute>;

export type SesFullApiSchemaDescribeConfigurationSetResponse = {
  ConfigurationSet?: SesFullApiSchemaConfigurationSet;
  EventDestinations?: SesFullApiSchemaEventDestinations;
  TrackingOptions?: SesFullApiSchemaTrackingOptions2;
  DeliveryOptions?: SesFullApiSchemaDeliveryOptions2;
  ReputationOptions?: SesFullApiSchemaReputationOptions2;
};

export type SesFullApiSchemaDescribeReceiptRuleResponse = {
  Rule?: SesFullApiSchemaReceiptRule;
};

export type SesFullApiSchemaDescribeReceiptRuleSetResponse = {
  Metadata?: SesFullApiSchemaReceiptRuleSetMetadata;
  Rules?: SesFullApiSchemaReceiptRulesList;
};

export type SesFullApiSchemaGetAccountResponse = {
  DedicatedIpAutoWarmupEnabled?: boolean;
  EnforcementStatus?: string;
  ProductionAccessEnabled?: boolean;
  SendQuota?: SesFullApiSchemaSendQuota;
  SendingEnabled?: boolean;
  SuppressionAttributes?: SesFullApiSchemaSuppressionAttributes;
  Details?: SesFullApiSchemaAccountDetails;
  VdmAttributes?: SesFullApiSchemaVdmAttributes;
};

export type SesFullApiSchemaGetAccountSendingEnabledResponse = {
  Enabled?: boolean;
};

export type SesFullApiSchemaBlacklistItemNames = ReadonlyArray<string>;

export type SesFullApiSchemaGetBlacklistReportsResponse = {
  BlacklistReport: SesFullApiSchemaBlacklistReport;
};

export type SesFullApiSchemaGetConfigurationSetResponse = {
  ConfigurationSetName?: string;
  TrackingOptions?: SesFullApiSchemaTrackingOptions;
  DeliveryOptions?: SesFullApiSchemaDeliveryOptions;
  ReputationOptions?: SesFullApiSchemaReputationOptions;
  SendingOptions?: SesFullApiSchemaSendingOptions;
  Tags?: SesFullApiSchemaTagList;
  SuppressionOptions?: SesFullApiSchemaSuppressionOptions;
  VdmOptions?: SesFullApiSchemaVdmOptions;
  ArchivingOptions?: SesFullApiSchemaArchivingOptions;
};

export type SesFullApiSchemaGetConfigurationSetEventDestinationsResponse = {
  EventDestinations?: SesFullApiSchemaEventDestinations2;
};

export type SesFullApiSchemaGetContactResponse = {
  ContactListName?: string;
  EmailAddress?: string;
  TopicPreferences?: SesFullApiSchemaTopicPreferenceList;
  TopicDefaultPreferences?: SesFullApiSchemaTopicPreferenceList;
  UnsubscribeAll?: boolean;
  AttributesData?: string;
  CreatedTimestamp?: string;
  LastUpdatedTimestamp?: string;
};

export type SesFullApiSchemaGetContactListResponse = {
  ContactListName?: string;
  Topics?: SesFullApiSchemaTopics;
  Description?: string;
  CreatedTimestamp?: string;
  LastUpdatedTimestamp?: string;
  Tags?: SesFullApiSchemaTagList;
};

export type SesFullApiSchemaGetCustomVerificationEmailTemplateResponse = {
  TemplateName?: string;
  FromEmailAddress?: string;
  TemplateSubject?: string;
  TemplateContent?: string;
  Tags?: SesFullApiSchemaTagList;
  SuccessRedirectionURL?: string;
  FailureRedirectionURL?: string;
};

export type SesFullApiSchemaGetCustomVerificationEmailTemplateResponse2 = {
  TemplateName?: string;
  FromEmailAddress?: string;
  TemplateSubject?: string;
  TemplateContent?: string;
  SuccessRedirectionURL?: string;
  FailureRedirectionURL?: string;
};

export type SesFullApiSchemaGetDedicatedIpResponse = {
  DedicatedIp?: SesFullApiSchemaDedicatedIp;
};

export type SesFullApiSchemaGetDedicatedIpPoolResponse = {
  DedicatedIpPool?: SesFullApiSchemaDedicatedIpPool;
};

export type SesFullApiSchemaGetDedicatedIpsResponse = {
  DedicatedIps?: SesFullApiSchemaDedicatedIpList;
  NextToken?: string;
};

export type SesFullApiSchemaGetDeliverabilityDashboardOptionsResponse = {
  DashboardEnabled: boolean;
  SubscriptionExpiryDate?: string;
  AccountStatus?: SesFullApiSchemaDeliverabilityDashboardAccountStatus;
  ActiveSubscribedDomains?: SesFullApiSchemaDomainDeliverabilityTrackingOptions;
  PendingExpirationSubscribedDomains?: SesFullApiSchemaDomainDeliverabilityTrackingOptions;
};

export type SesFullApiSchemaGetDeliverabilityTestReportResponse = {
  DeliverabilityTestReport: SesFullApiSchemaDeliverabilityTestReport;
  OverallPlacement: SesFullApiSchemaPlacementStatistics;
  IspPlacements: SesFullApiSchemaIspPlacements;
  Message?: string;
  Tags?: SesFullApiSchemaTagList;
};

export type SesFullApiSchemaGetDomainDeliverabilityCampaignResponse = {
  DomainDeliverabilityCampaign: SesFullApiSchemaDomainDeliverabilityCampaign;
};

export type SesFullApiSchemaGetDomainStatisticsReportResponse = {
  OverallVolume: SesFullApiSchemaOverallVolume;
  DailyVolumes: SesFullApiSchemaDailyVolumes;
};

export type SesFullApiSchemaGetEmailAddressInsightsResponse = {
  MailboxValidation?: SesFullApiSchemaMailboxValidation;
};

export type SesFullApiSchemaGetEmailIdentityResponse = {
  IdentityType?: SesFullApiSchemaIdentityType2;
  FeedbackForwardingStatus?: boolean;
  VerifiedForSendingStatus?: boolean;
  DkimAttributes?: SesFullApiSchemaDkimAttributes;
  MailFromAttributes?: SesFullApiSchemaMailFromAttributes;
  Policies?: SesFullApiSchemaPolicyMap;
  Tags?: SesFullApiSchemaTagList;
  ConfigurationSetName?: string;
  VerificationStatus?: SesFullApiSchemaVerificationStatus;
  VerificationInfo?: SesFullApiSchemaVerificationInfo;
};

export type SesFullApiSchemaGetEmailIdentityPoliciesResponse = {
  Policies?: SesFullApiSchemaPolicyMap;
};

export type SesFullApiSchemaGetEmailTemplateResponse = {
  TemplateName: string;
  TemplateContent: SesFullApiSchemaEmailTemplateContent;
  Tags?: SesFullApiSchemaTagList;
};

export type SesFullApiSchemaGetExportJobResponse = {
  JobId?: string;
  ExportSourceType?: SesFullApiSchemaExportSourceType;
  JobStatus?: SesFullApiSchemaJobStatus;
  ExportDestination?: SesFullApiSchemaExportDestination;
  ExportDataSource?: SesFullApiSchemaExportDataSource;
  CreatedTimestamp?: string;
  CompletedTimestamp?: string;
  FailureInfo?: SesFullApiSchemaFailureInfo;
  Statistics?: SesFullApiSchemaExportStatistics;
};

export type SesFullApiSchemaIdentityList = ReadonlyArray<string>;

export type SesFullApiSchemaGetIdentityDkimAttributesResponse = {
  DkimAttributes: SesFullApiSchemaDkimAttributes2;
};

export type SesFullApiSchemaGetIdentityMailFromDomainAttributesResponse = {
  MailFromDomainAttributes: SesFullApiSchemaMailFromDomainAttributes;
};

export type SesFullApiSchemaGetIdentityNotificationAttributesResponse = {
  NotificationAttributes: SesFullApiSchemaNotificationAttributes;
};

export type SesFullApiSchemaPolicyNameList = ReadonlyArray<string>;

export type SesFullApiSchemaGetIdentityPoliciesResponse = {
  Policies: SesFullApiSchemaPolicyMap2;
};

export type SesFullApiSchemaGetIdentityVerificationAttributesResponse = {
  VerificationAttributes: SesFullApiSchemaVerificationAttributes;
};

export type SesFullApiSchemaGetImportJobResponse = {
  JobId?: string;
  ImportDestination?: SesFullApiSchemaImportDestination;
  ImportDataSource?: SesFullApiSchemaImportDataSource;
  FailureInfo?: SesFullApiSchemaFailureInfo;
  JobStatus?: SesFullApiSchemaJobStatus;
  CreatedTimestamp?: string;
  CompletedTimestamp?: string;
  ProcessedRecordsCount?: number;
  FailedRecordsCount?: number;
};

export type SesFullApiSchemaGetMessageInsightsResponse = {
  MessageId?: string;
  FromEmailAddress?: string;
  Subject?: string;
  EmailTags?: SesFullApiSchemaMessageTagList;
  Insights?: SesFullApiSchemaEmailInsightsList;
};

export type SesFullApiSchemaGetMultiRegionEndpointResponse = {
  EndpointName?: string;
  EndpointId?: string;
  Routes?: SesFullApiSchemaRoutes;
  Status?: SesFullApiSchemaStatus;
  CreatedTimestamp?: string;
  LastUpdatedTimestamp?: string;
};

export type SesFullApiSchemaGetReputationEntityResponse = {
  ReputationEntity?: SesFullApiSchemaReputationEntity;
};

export type SesFullApiSchemaGetSendQuotaResponse = {
  Max24HourSend?: number;
  MaxSendRate?: number;
  SentLast24Hours?: number;
};

export type SesFullApiSchemaGetSendStatisticsResponse = {
  SendDataPoints?: SesFullApiSchemaSendDataPointList;
};

export type SesFullApiSchemaGetSuppressedDestinationResponse = {
  SuppressedDestination: SesFullApiSchemaSuppressedDestination;
};

export type SesFullApiSchemaGetTemplateResponse = {
  Template?: SesFullApiSchemaTemplate;
};

export type SesFullApiSchemaGetTenantResponse = {
  Tenant?: SesFullApiSchemaTenant;
};

export type SesFullApiSchemaListConfigurationSetsResponse = {
  ConfigurationSets?: SesFullApiSchemaConfigurationSetNameList;
  NextToken?: string;
};

export type SesFullApiSchemaListConfigurationSetsResponse2 = {
  ConfigurationSets?: SesFullApiSchemaConfigurationSets;
  NextToken?: string;
};

export type SesFullApiSchemaListContactListsResponse = {
  ContactLists?: SesFullApiSchemaListOfContactLists;
  NextToken?: string;
};

export type SesFullApiSchemaListContactsFilter = {
  FilteredStatus?: SesFullApiSchemaSubscriptionStatus;
  TopicFilter?: SesFullApiSchemaTopicFilter;
};

export type SesFullApiSchemaListContactsResponse = {
  Contacts?: SesFullApiSchemaListOfContacts;
  NextToken?: string;
};

export type SesFullApiSchemaListCustomVerificationEmailTemplatesResponse = {
  CustomVerificationEmailTemplates?: SesFullApiSchemaCustomVerificationEmailTemplatesList;
  NextToken?: string;
};

export type SesFullApiSchemaListCustomVerificationEmailTemplatesResponse2 = {
  CustomVerificationEmailTemplates?: SesFullApiSchemaCustomVerificationEmailTemplates;
  NextToken?: string;
};

export type SesFullApiSchemaListDedicatedIpPoolsResponse = {
  DedicatedIpPools?: SesFullApiSchemaListOfDedicatedIpPools;
  NextToken?: string;
};

export type SesFullApiSchemaListDeliverabilityTestReportsResponse = {
  DeliverabilityTestReports: SesFullApiSchemaDeliverabilityTestReports;
  NextToken?: string;
};

export type SesFullApiSchemaListDomainDeliverabilityCampaignsResponse = {
  DomainDeliverabilityCampaigns: SesFullApiSchemaDomainDeliverabilityCampaignList;
  NextToken?: string;
};

export type SesFullApiSchemaListEmailIdentitiesResponse = {
  EmailIdentities?: SesFullApiSchemaIdentityInfoList;
  NextToken?: string;
};

export type SesFullApiSchemaListEmailTemplatesResponse = {
  TemplatesMetadata?: SesFullApiSchemaEmailTemplateMetadataList;
  NextToken?: string;
};

export type SesFullApiSchemaExportSourceType = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaJobStatus = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaListExportJobsResponse = {
  ExportJobs?: SesFullApiSchemaExportJobSummaryList;
  NextToken?: string;
};

export type SesFullApiSchemaIdentityType = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaListIdentitiesResponse = {
  Identities: SesFullApiSchemaIdentityList;
  NextToken?: string;
};

export type SesFullApiSchemaListIdentityPoliciesResponse = {
  PolicyNames: SesFullApiSchemaPolicyNameList;
};

export type SesFullApiSchemaImportDestinationType = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaListImportJobsResponse = {
  ImportJobs?: SesFullApiSchemaImportJobSummaryList;
  NextToken?: string;
};

export type SesFullApiSchemaListMultiRegionEndpointsResponse = {
  MultiRegionEndpoints?: SesFullApiSchemaMultiRegionEndpoints;
  NextToken?: string;
};

export type SesFullApiSchemaListReceiptFiltersResponse = {
  Filters?: SesFullApiSchemaReceiptFilterList;
};

export type SesFullApiSchemaListReceiptRuleSetsResponse = {
  RuleSets?: SesFullApiSchemaReceiptRuleSetsLists;
  NextToken?: string;
};

export type SesFullApiSchemaListRecommendationsFilter = {
  readonly [key: string]: string | undefined;
};

export type SesFullApiSchemaListRecommendationsResponse = {
  Recommendations?: SesFullApiSchemaRecommendationsList;
  NextToken?: string;
};

export type SesFullApiSchemaReputationEntityFilter = {
  readonly [key: string]: string | undefined;
};

export type SesFullApiSchemaListReputationEntitiesResponse = {
  ReputationEntities?: SesFullApiSchemaReputationEntitiesList;
  NextToken?: string;
};

export type SesFullApiSchemaListResourceTenantsResponse = {
  ResourceTenants?: SesFullApiSchemaResourceTenantMetadataList;
  NextToken?: string;
};

export type SesFullApiSchemaSuppressionListReasons = ReadonlyArray<SesFullApiSchemaSuppressionListReason>;

export type SesFullApiSchemaListSuppressedDestinationsResponse = {
  SuppressedDestinationSummaries?: SesFullApiSchemaSuppressedDestinationSummaries;
  NextToken?: string;
};

export type SesFullApiSchemaListTagsForResourceResponse = {
  Tags: SesFullApiSchemaTagList;
};

export type SesFullApiSchemaListTemplatesResponse = {
  TemplatesMetadata?: SesFullApiSchemaTemplateMetadataList;
  NextToken?: string;
};

export type SesFullApiSchemaListTenantResourcesFilter = {
  readonly [key: string]: string | undefined;
};

export type SesFullApiSchemaListTenantResourcesResponse = {
  TenantResources?: SesFullApiSchemaTenantResourceList;
  NextToken?: string;
};

export type SesFullApiSchemaListTenantsResponse = {
  Tenants?: SesFullApiSchemaTenantInfoList;
  NextToken?: string;
};

export type SesFullApiSchemaListVerifiedEmailAddressesResponse = {
  VerifiedEmailAddresses?: SesFullApiSchemaAddressList;
};

export type SesFullApiSchemaPutAccountDedicatedIpWarmupAttributesResponse = {};

export type SesFullApiSchemaMailType = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaContactLanguage = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaAdditionalContactEmailAddresses = ReadonlyArray<string>;

export type SesFullApiSchemaPutAccountDetailsResponse = {};

export type SesFullApiSchemaPutAccountSendingAttributesResponse = {};

export type SesFullApiSchemaSuppressionValidationAttributes = {
  ConditionThreshold: SesFullApiSchemaSuppressionConditionThreshold;
};

export type SesFullApiSchemaPutAccountSuppressionAttributesResponse = {};

export type SesFullApiSchemaVdmAttributes = {
  VdmEnabled: SesFullApiSchemaFeatureStatus;
  DashboardAttributes?: SesFullApiSchemaDashboardAttributes;
  GuardianAttributes?: SesFullApiSchemaGuardianAttributes;
};

export type SesFullApiSchemaPutAccountVdmAttributesResponse = {};

export type SesFullApiSchemaPutConfigurationSetArchivingOptionsResponse = {};

export type SesFullApiSchemaTlsPolicy = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaPutConfigurationSetDeliveryOptionsResponse = {};

export type SesFullApiSchemaDeliveryOptions2 = {
  TlsPolicy?: SesFullApiSchemaTlsPolicy2;
};

export type SesFullApiSchemaPutConfigurationSetDeliveryOptionsResponse2 = {};

export type SesFullApiSchemaPutConfigurationSetReputationOptionsResponse = {};

export type SesFullApiSchemaPutConfigurationSetSendingOptionsResponse = {};

export type SesFullApiSchemaSuppressionListScope = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaSuppressionValidationOptions = {
  ConditionThreshold: SesFullApiSchemaSuppressionConditionThreshold;
};

export type SesFullApiSchemaPutConfigurationSetSuppressionOptionsResponse = {};

export type SesFullApiSchemaHttpsPolicy = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaPutConfigurationSetTrackingOptionsResponse = {};

export type SesFullApiSchemaPutConfigurationSetVdmOptionsResponse = {};

export type SesFullApiSchemaPutDedicatedIpInPoolResponse = {};

export type SesFullApiSchemaPutDedicatedIpPoolScalingAttributesResponse = {};

export type SesFullApiSchemaPutDedicatedIpWarmupAttributesResponse = {};

export type SesFullApiSchemaDomainDeliverabilityTrackingOptions = ReadonlyArray<SesFullApiSchemaDomainDeliverabilityTrackingOption>;

export type SesFullApiSchemaPutDeliverabilityDashboardOptionResponse = {};

export type SesFullApiSchemaPutEmailIdentityConfigurationSetAttributesResponse = {};

export type SesFullApiSchemaPutEmailIdentityDkimAttributesResponse = {};

export type SesFullApiSchemaDkimSigningAttributesOrigin = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaPutEmailIdentityDkimSigningAttributesResponse = {
  DkimStatus?: SesFullApiSchemaDkimStatus;
  DkimTokens?: SesFullApiSchemaDnsTokenList;
  SigningHostedZone?: string;
};

export type SesFullApiSchemaPutEmailIdentityFeedbackAttributesResponse = {};

export type SesFullApiSchemaBehaviorOnMxFailure = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaPutEmailIdentityMailFromAttributesResponse = {};

export type SesFullApiSchemaPutIdentityPolicyResponse = {};

export type SesFullApiSchemaSuppressionListReason = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaPutSuppressedDestinationResponse = {};

export type SesFullApiSchemaPutTenantSuppressionAttributesResponse = {};

export type SesFullApiSchemaReceiptRuleNamesList = ReadonlyArray<string>;

export type SesFullApiSchemaReorderReceiptRuleSetResponse = {};

export type SesFullApiSchemaMessageDsn = {
  ReportingMta: string;
  ArrivalDate?: string;
  ExtensionFields?: SesFullApiSchemaExtensionFieldList;
};

export type SesFullApiSchemaBouncedRecipientInfoList = ReadonlyArray<SesFullApiSchemaBouncedRecipientInfo>;

export type SesFullApiSchemaSendBounceResponse = {
  MessageId?: string;
};

export type SesFullApiSchemaEmailAddressList = ReadonlyArray<string>;

export type SesFullApiSchemaMessageTagList = ReadonlyArray<SesFullApiSchemaMessageTag>;

export type SesFullApiSchemaBulkEmailContent = {
  Template?: SesFullApiSchemaTemplate2;
};

export type SesFullApiSchemaBulkEmailEntryList = ReadonlyArray<SesFullApiSchemaBulkEmailEntry>;

export type SesFullApiSchemaSendBulkEmailResponse = {
  BulkEmailEntryResults: SesFullApiSchemaBulkEmailEntryResultList;
};

export type SesFullApiSchemaAddressList = ReadonlyArray<string>;

export type SesFullApiSchemaMessageTagList2 = ReadonlyArray<SesFullApiSchemaMessageTag2>;

export type SesFullApiSchemaBulkEmailDestinationList = ReadonlyArray<SesFullApiSchemaBulkEmailDestination>;

export type SesFullApiSchemaSendBulkTemplatedEmailResponse = {
  Status: SesFullApiSchemaBulkEmailDestinationStatusList;
};

export type SesFullApiSchemaSendCustomVerificationEmailResponse = {
  MessageId?: string;
};

export type SesFullApiSchemaSendCustomVerificationEmailResponse2 = {
  MessageId?: string;
};

export type SesFullApiSchemaDestination = {
  ToAddresses?: SesFullApiSchemaEmailAddressList;
  CcAddresses?: SesFullApiSchemaEmailAddressList;
  BccAddresses?: SesFullApiSchemaEmailAddressList;
};

export type SesFullApiSchemaListManagementOptions = {
  ContactListName: string;
  TopicName?: string;
};

export type SesFullApiSchemaSendEmailResponse = {
  MessageId?: string;
};

export type SesFullApiSchemaDestination2 = {
  ToAddresses?: SesFullApiSchemaAddressList;
  CcAddresses?: SesFullApiSchemaAddressList;
  BccAddresses?: SesFullApiSchemaAddressList;
};

export type SesFullApiSchemaMessage = {
  Subject: SesFullApiSchemaContent;
  Body: SesFullApiSchemaBody;
};

export type SesFullApiSchemaSendEmailResponse2 = {
  MessageId: string;
};

export type SesFullApiSchemaRawMessage = {
  Data: string;
};

export type SesFullApiSchemaSendRawEmailResponse = {
  MessageId: string;
};

export type SesFullApiSchemaSendTemplatedEmailResponse = {
  MessageId: string;
};

export type SesFullApiSchemaSetActiveReceiptRuleSetResponse = {};

export type SesFullApiSchemaSetIdentityDkimEnabledResponse = {};

export type SesFullApiSchemaSetIdentityFeedbackForwardingEnabledResponse = {};

export type SesFullApiSchemaNotificationType = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaSetIdentityHeadersInNotificationsEnabledResponse = {};

export type SesFullApiSchemaBehaviorOnMXFailure = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaSetIdentityMailFromDomainResponse = {};

export type SesFullApiSchemaSetIdentityNotificationTopicResponse = {};

export type SesFullApiSchemaSetReceiptRulePositionResponse = {};

export type SesFullApiSchemaTagResourceResponse = {};

export type SesFullApiSchemaTestRenderEmailTemplateResponse = {
  RenderedTemplate: string;
};

export type SesFullApiSchemaTestRenderTemplateResponse = {
  RenderedTemplate?: string;
};

export type SesFullApiSchemaTagKeyList = ReadonlyArray<string>;

export type SesFullApiSchemaUntagResourceResponse = {};

export type SesFullApiSchemaUpdateConfigurationSetEventDestinationResponse = {};

export type SesFullApiSchemaUpdateConfigurationSetEventDestinationResponse2 = {};

export type SesFullApiSchemaUpdateConfigurationSetTrackingOptionsResponse = {};

export type SesFullApiSchemaUpdateContactResponse = {};

export type SesFullApiSchemaUpdateContactListResponse = {};

export type SesFullApiSchemaUpdateCustomVerificationEmailTemplateResponse = {};

export type SesFullApiSchemaUpdateEmailIdentityPolicyResponse = {};

export type SesFullApiSchemaUpdateEmailTemplateResponse = {};

export type SesFullApiSchemaUpdateReceiptRuleResponse = {};

export type SesFullApiSchemaSendingStatus = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaUpdateReputationEntityCustomerManagedStatusResponse = {};

export type SesFullApiSchemaUpdateReputationEntityPolicyResponse = {};

export type SesFullApiSchemaUpdateTemplateResponse = {};

export type SesFullApiSchemaVerifyDomainDkimResponse = {
  DkimTokens: SesFullApiSchemaVerificationTokenList;
};

export type SesFullApiSchemaVerifyDomainIdentityResponse = {
  VerificationToken: string;
};

export type SesFullApiSchemaVerifyEmailIdentityResponse = {};

export type SesFullApiSchemaBatchGetMetricDataQuery = {
  Id: string;
  Namespace: SesFullApiSchemaMetricNamespace;
  Metric: SesFullApiSchemaMetric;
  Dimensions?: SesFullApiSchemaDimensions;
  StartDate: string;
  EndDate: string;
};

export type SesFullApiSchemaMetricDataResultList = ReadonlyArray<SesFullApiSchemaMetricDataResult>;

export type SesFullApiSchemaMetricDataErrorList = ReadonlyArray<SesFullApiSchemaMetricDataError>;

export type SesFullApiSchemaTag = {
  Key: string;
  Value: string;
};

export type SesFullApiSchemaDashboardOptions = {
  EngagementMetrics?: SesFullApiSchemaFeatureStatus;
};

export type SesFullApiSchemaGuardianOptions = {
  OptimizedSharedDelivery?: SesFullApiSchemaFeatureStatus;
};

export type SesFullApiSchemaEventTypes = ReadonlyArray<SesFullApiSchemaEventType>;

export type SesFullApiSchemaKinesisFirehoseDestination = {
  IamRoleArn: string;
  DeliveryStreamArn: string;
};

export type SesFullApiSchemaCloudWatchDestination = {
  DimensionConfigurations: SesFullApiSchemaCloudWatchDimensionConfigurations;
};

export type SesFullApiSchemaSnsDestination = {
  TopicArn: string;
};

export type SesFullApiSchemaEventBridgeDestination = {
  EventBusArn: string;
};

export type SesFullApiSchemaPinpointDestination = {
  ApplicationArn?: string;
};

export type SesFullApiSchemaEventTypes2 = ReadonlyArray<SesFullApiSchemaEventType2>;

export type SesFullApiSchemaKinesisFirehoseDestination2 = {
  IAMRoleARN: string;
  DeliveryStreamARN: string;
};

export type SesFullApiSchemaCloudWatchDestination2 = {
  DimensionConfigurations: SesFullApiSchemaCloudWatchDimensionConfigurations2;
};

export type SesFullApiSchemaSNSDestination = {
  TopicARN: string;
};

export type SesFullApiSchemaTopicPreference = {
  TopicName: string;
  SubscriptionStatus: SesFullApiSchemaSubscriptionStatus;
};

export type SesFullApiSchemaTopic = {
  TopicName: string;
  DisplayName: string;
  Description?: string;
  DefaultSubscriptionStatus: SesFullApiSchemaSubscriptionStatus;
};

export type SesFullApiSchemaMessage2 = {
  Subject: SesFullApiSchemaContent2;
  Body: SesFullApiSchemaBody2;
  Headers?: SesFullApiSchemaMessageHeaderList;
  Attachments?: SesFullApiSchemaAttachmentList;
};

export type SesFullApiSchemaRawMessage2 = {
  Data: string;
};

export type SesFullApiSchemaTemplate2 = {
  TemplateName?: string;
  TemplateArn?: string;
  TemplateContent?: SesFullApiSchemaEmailTemplateContent;
  TemplateData?: string;
  Headers?: SesFullApiSchemaMessageHeaderList;
  Attachments?: SesFullApiSchemaAttachmentList;
};

export type SesFullApiSchemaDeliverabilityTestStatus = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaDkimSigningKeyLength = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaIdentityType2 = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaDkimAttributes = {
  SigningEnabled?: boolean;
  Status?: SesFullApiSchemaDkimStatus;
  Tokens?: SesFullApiSchemaDnsTokenList;
  SigningHostedZone?: string;
  SigningAttributesOrigin?: SesFullApiSchemaDkimSigningAttributesOrigin;
  NextSigningKeyLength?: SesFullApiSchemaDkimSigningKeyLength;
  CurrentSigningKeyLength?: SesFullApiSchemaDkimSigningKeyLength;
  LastKeyGenerationTimestamp?: string;
};

export type SesFullApiSchemaMetricsDataSource = {
  Dimensions: SesFullApiSchemaExportDimensions;
  Namespace: SesFullApiSchemaMetricNamespace;
  Metrics: SesFullApiSchemaExportMetrics;
  StartDate: string;
  EndDate: string;
};

export type SesFullApiSchemaMessageInsightsDataSource = {
  StartDate: string;
  EndDate: string;
  Include?: SesFullApiSchemaMessageInsightsFilters;
  Exclude?: SesFullApiSchemaMessageInsightsFilters;
  MaxResults?: number;
};

export type SesFullApiSchemaDataFormat = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaSuppressionListDestination = {
  SuppressionListImportAction: SesFullApiSchemaSuppressionListImportAction;
};

export type SesFullApiSchemaContactListDestination = {
  ContactListName: string;
  ContactListImportAction: SesFullApiSchemaContactListImportAction;
};

export type SesFullApiSchemaRoutesDetails = ReadonlyArray<SesFullApiSchemaRouteDetails>;

export type SesFullApiSchemaStatus = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaReceiptIpFilter = {
  Policy: SesFullApiSchemaReceiptFilterPolicy;
  Cidr: string;
};

export type SesFullApiSchemaTlsPolicy2 = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaRecipientsList = ReadonlyArray<string>;

export type SesFullApiSchemaReceiptActionsList = ReadonlyArray<SesFullApiSchemaReceiptAction>;

export type SesFullApiSchemaReceiptRuleSetMetadata = {
  Name?: string;
  CreatedTimestamp?: string;
};

export type SesFullApiSchemaReceiptRulesList = ReadonlyArray<SesFullApiSchemaReceiptRule>;

export type SesFullApiSchemaConfigurationSetAttribute = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaEventDestinations = ReadonlyArray<SesFullApiSchemaEventDestination>;

export type SesFullApiSchemaReputationOptions2 = {
  SendingEnabled?: boolean;
  ReputationMetricsEnabled?: boolean;
  LastFreshStart?: string;
};

export type SesFullApiSchemaSendQuota = {
  Max24HourSend?: number;
  MaxSendRate?: number;
  SentLast24Hours?: number;
};

export type SesFullApiSchemaSuppressionAttributes = {
  SuppressedReasons?: SesFullApiSchemaSuppressionListReasons;
  ValidationAttributes?: SesFullApiSchemaSuppressionValidationAttributes;
};

export type SesFullApiSchemaAccountDetails = {
  MailType?: SesFullApiSchemaMailType;
  WebsiteURL?: string;
  ContactLanguage?: SesFullApiSchemaContactLanguage;
  UseCaseDescription?: string;
  AdditionalContactEmailAddresses?: SesFullApiSchemaAdditionalContactEmailAddresses;
  ReviewDetails?: SesFullApiSchemaReviewDetails;
};

export type SesFullApiSchemaBlacklistReport = {
  readonly [key: string]: SesFullApiSchemaBlacklistEntries | undefined;
};

export type SesFullApiSchemaEventDestinations2 = ReadonlyArray<SesFullApiSchemaEventDestination2>;

export type SesFullApiSchemaDedicatedIp = {
  Ip: string;
  WarmupStatus: SesFullApiSchemaWarmupStatus;
  WarmupPercentage: number;
  PoolName?: string;
};

export type SesFullApiSchemaDedicatedIpPool = {
  PoolName: string;
  ScalingMode: SesFullApiSchemaScalingMode;
};

export type SesFullApiSchemaDedicatedIpList = ReadonlyArray<SesFullApiSchemaDedicatedIp>;

export type SesFullApiSchemaDeliverabilityDashboardAccountStatus = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaDeliverabilityTestReport = {
  ReportId?: string;
  ReportName?: string;
  Subject?: string;
  FromEmailAddress?: string;
  CreateDate?: string;
  DeliverabilityTestStatus?: SesFullApiSchemaDeliverabilityTestStatus;
};

export type SesFullApiSchemaPlacementStatistics = {
  InboxPercentage?: number;
  SpamPercentage?: number;
  MissingPercentage?: number;
  SpfPercentage?: number;
  DkimPercentage?: number;
};

export type SesFullApiSchemaIspPlacements = ReadonlyArray<SesFullApiSchemaIspPlacement>;

export type SesFullApiSchemaDomainDeliverabilityCampaign = {
  CampaignId?: string;
  ImageUrl?: string;
  Subject?: string;
  FromAddress?: string;
  SendingIps?: SesFullApiSchemaIpList;
  FirstSeenDateTime?: string;
  LastSeenDateTime?: string;
  InboxCount?: number;
  SpamCount?: number;
  ReadRate?: number;
  DeleteRate?: number;
  ReadDeleteRate?: number;
  ProjectedVolume?: number;
  Esps?: SesFullApiSchemaEsps;
};

export type SesFullApiSchemaOverallVolume = {
  VolumeStatistics?: SesFullApiSchemaVolumeStatistics;
  ReadRatePercent?: number;
  DomainIspPlacements?: SesFullApiSchemaDomainIspPlacements;
};

export type SesFullApiSchemaDailyVolumes = ReadonlyArray<SesFullApiSchemaDailyVolume>;

export type SesFullApiSchemaMailboxValidation = {
  IsValid?: SesFullApiSchemaEmailAddressInsightsVerdict;
  Evaluations?: SesFullApiSchemaEmailAddressInsightsMailboxEvaluations;
};

export type SesFullApiSchemaMailFromAttributes = {
  MailFromDomain: string;
  MailFromDomainStatus: SesFullApiSchemaMailFromDomainStatus;
  BehaviorOnMxFailure: SesFullApiSchemaBehaviorOnMxFailure;
};

export type SesFullApiSchemaPolicyMap = {
  readonly [key: string]: string | undefined;
};

export type SesFullApiSchemaVerificationStatus = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaVerificationInfo = {
  LastCheckedTimestamp?: string;
  LastSuccessTimestamp?: string;
  ErrorType?: SesFullApiSchemaVerificationError;
  SOARecord?: SesFullApiSchemaSOARecord;
};

export type SesFullApiSchemaFailureInfo = {
  FailedRecordsS3Url?: string;
  ErrorMessage?: string;
};

export type SesFullApiSchemaExportStatistics = {
  ProcessedRecordsCount?: number;
  ExportedRecordsCount?: number;
};

export type SesFullApiSchemaDkimAttributes2 = {
  readonly [key: string]: SesFullApiSchemaIdentityDkimAttributes | undefined;
};

export type SesFullApiSchemaMailFromDomainAttributes = {
  readonly [key: string]: SesFullApiSchemaIdentityMailFromDomainAttributes | undefined;
};

export type SesFullApiSchemaNotificationAttributes = {
  readonly [key: string]: SesFullApiSchemaIdentityNotificationAttributes | undefined;
};

export type SesFullApiSchemaPolicyMap2 = {
  readonly [key: string]: string | undefined;
};

export type SesFullApiSchemaVerificationAttributes = {
  readonly [key: string]: SesFullApiSchemaIdentityVerificationAttributes | undefined;
};

export type SesFullApiSchemaEmailInsightsList = ReadonlyArray<SesFullApiSchemaEmailInsights>;

export type SesFullApiSchemaRoutes = ReadonlyArray<SesFullApiSchemaRoute>;

export type SesFullApiSchemaReputationEntity = {
  ReputationEntityReference?: string;
  ReputationEntityType?: SesFullApiSchemaReputationEntityType;
  ReputationManagementPolicy?: string;
  CustomerManagedStatus?: SesFullApiSchemaStatusRecord;
  AwsSesManagedStatus?: SesFullApiSchemaStatusRecord;
  SendingStatusAggregate?: SesFullApiSchemaSendingStatus;
  ReputationImpact?: SesFullApiSchemaRecommendationImpact;
};

export type SesFullApiSchemaSendDataPointList = ReadonlyArray<SesFullApiSchemaSendDataPoint>;

export type SesFullApiSchemaSuppressedDestination = {
  EmailAddress: string;
  Reason: SesFullApiSchemaSuppressionListReason;
  LastUpdateTime: string;
  Attributes?: SesFullApiSchemaSuppressedDestinationAttributes;
  TenantName?: string;
};

export type SesFullApiSchemaTenant = {
  TenantName?: string;
  TenantId?: string;
  TenantArn?: string;
  CreatedTimestamp?: string;
  Tags?: SesFullApiSchemaTagList;
  SendingStatus?: SesFullApiSchemaSendingStatus;
  SuppressionAttributes?: SesFullApiSchemaTenantSuppressionAttributes;
};

export type SesFullApiSchemaConfigurationSetNameList = ReadonlyArray<string>;

export type SesFullApiSchemaConfigurationSets = ReadonlyArray<SesFullApiSchemaConfigurationSet>;

export type SesFullApiSchemaListOfContactLists = ReadonlyArray<SesFullApiSchemaContactList>;

export type SesFullApiSchemaSubscriptionStatus = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaTopicFilter = {
  TopicName?: string;
  UseDefaultIfPreferenceUnavailable?: boolean;
};

export type SesFullApiSchemaListOfContacts = ReadonlyArray<SesFullApiSchemaContact>;

export type SesFullApiSchemaCustomVerificationEmailTemplatesList = ReadonlyArray<SesFullApiSchemaCustomVerificationEmailTemplateMetadata>;

export type SesFullApiSchemaCustomVerificationEmailTemplates = ReadonlyArray<SesFullApiSchemaCustomVerificationEmailTemplate>;

export type SesFullApiSchemaListOfDedicatedIpPools = ReadonlyArray<string>;

export type SesFullApiSchemaDeliverabilityTestReports = ReadonlyArray<SesFullApiSchemaDeliverabilityTestReport>;

export type SesFullApiSchemaDomainDeliverabilityCampaignList = ReadonlyArray<SesFullApiSchemaDomainDeliverabilityCampaign>;

export type SesFullApiSchemaIdentityInfoList = ReadonlyArray<SesFullApiSchemaIdentityInfo>;

export type SesFullApiSchemaEmailTemplateMetadataList = ReadonlyArray<SesFullApiSchemaEmailTemplateMetadata>;

export type SesFullApiSchemaExportJobSummaryList = ReadonlyArray<SesFullApiSchemaExportJobSummary>;

export type SesFullApiSchemaImportJobSummaryList = ReadonlyArray<SesFullApiSchemaImportJobSummary>;

export type SesFullApiSchemaMultiRegionEndpoints = ReadonlyArray<SesFullApiSchemaMultiRegionEndpoint>;

export type SesFullApiSchemaReceiptFilterList = ReadonlyArray<SesFullApiSchemaReceiptFilter>;

export type SesFullApiSchemaReceiptRuleSetsLists = ReadonlyArray<SesFullApiSchemaReceiptRuleSetMetadata>;

export type SesFullApiSchemaRecommendationsList = ReadonlyArray<SesFullApiSchemaRecommendation>;

export type SesFullApiSchemaReputationEntitiesList = ReadonlyArray<SesFullApiSchemaReputationEntity>;

export type SesFullApiSchemaResourceTenantMetadataList = ReadonlyArray<SesFullApiSchemaResourceTenantMetadata>;

export type SesFullApiSchemaSuppressedDestinationSummaries = ReadonlyArray<SesFullApiSchemaSuppressedDestinationSummary>;

export type SesFullApiSchemaTemplateMetadataList = ReadonlyArray<SesFullApiSchemaTemplateMetadata>;

export type SesFullApiSchemaTenantResourceList = ReadonlyArray<SesFullApiSchemaTenantResource>;

export type SesFullApiSchemaTenantInfoList = ReadonlyArray<SesFullApiSchemaTenantInfo>;

export type SesFullApiSchemaSuppressionConditionThreshold = {
  ConditionThresholdEnabled: SesFullApiSchemaFeatureStatus;
  OverallConfidenceThreshold?: SesFullApiSchemaSuppressionConfidenceThreshold;
};

export type SesFullApiSchemaFeatureStatus = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaDashboardAttributes = {
  EngagementMetrics?: SesFullApiSchemaFeatureStatus;
};

export type SesFullApiSchemaGuardianAttributes = {
  OptimizedSharedDelivery?: SesFullApiSchemaFeatureStatus;
};

export type SesFullApiSchemaDomainDeliverabilityTrackingOption = {
  Domain?: string;
  SubscriptionStartDate?: string;
  InboxPlacementTrackingOption?: SesFullApiSchemaInboxPlacementTrackingOption;
};

export type SesFullApiSchemaDkimStatus = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaDnsTokenList = ReadonlyArray<string>;

export type SesFullApiSchemaExtensionFieldList = ReadonlyArray<SesFullApiSchemaExtensionField>;

export type SesFullApiSchemaBouncedRecipientInfo = {
  Recipient: string;
  RecipientArn?: string;
  BounceType?: SesFullApiSchemaBounceType;
  RecipientDsnFields?: SesFullApiSchemaRecipientDsnFields;
};

export type SesFullApiSchemaMessageTag = {
  Name: string;
  Value: string;
};

export type SesFullApiSchemaBulkEmailEntry = {
  Destination: SesFullApiSchemaDestination;
  ReplacementTags?: SesFullApiSchemaMessageTagList;
  ReplacementEmailContent?: SesFullApiSchemaReplacementEmailContent;
  ReplacementHeaders?: SesFullApiSchemaMessageHeaderList;
};

export type SesFullApiSchemaBulkEmailEntryResultList = ReadonlyArray<SesFullApiSchemaBulkEmailEntryResult>;

export type SesFullApiSchemaMessageTag2 = {
  Name: string;
  Value: string;
};

export type SesFullApiSchemaBulkEmailDestination = {
  Destination: SesFullApiSchemaDestination2;
  ReplacementTags?: SesFullApiSchemaMessageTagList2;
  ReplacementTemplateData?: string;
};

export type SesFullApiSchemaBulkEmailDestinationStatusList = ReadonlyArray<SesFullApiSchemaBulkEmailDestinationStatus>;

export type SesFullApiSchemaContent = {
  Data: string;
  Charset?: string;
};

export type SesFullApiSchemaBody = {
  Text?: SesFullApiSchemaContent;
  Html?: SesFullApiSchemaContent;
};

export type SesFullApiSchemaVerificationTokenList = ReadonlyArray<string>;

export type SesFullApiSchemaMetricNamespace = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaMetric = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaDimensions = {
  readonly [key: string]: string | undefined;
};

export type SesFullApiSchemaMetricDataResult = {
  Id?: string;
  Timestamps?: SesFullApiSchemaTimestampList;
  Values?: SesFullApiSchemaMetricValueList;
};

export type SesFullApiSchemaMetricDataError = {
  Id?: string;
  Code?: SesFullApiSchemaQueryErrorCode;
  Message?: string;
};

export type SesFullApiSchemaEventType = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaCloudWatchDimensionConfigurations = ReadonlyArray<SesFullApiSchemaCloudWatchDimensionConfiguration>;

export type SesFullApiSchemaEventType2 = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaCloudWatchDimensionConfigurations2 = ReadonlyArray<SesFullApiSchemaCloudWatchDimensionConfiguration2>;

export type SesFullApiSchemaContent2 = {
  Data: string;
  Charset?: string;
};

export type SesFullApiSchemaBody2 = {
  Text?: SesFullApiSchemaContent2;
  Html?: SesFullApiSchemaContent2;
};

export type SesFullApiSchemaMessageHeaderList = ReadonlyArray<SesFullApiSchemaMessageHeader>;

export type SesFullApiSchemaAttachmentList = ReadonlyArray<SesFullApiSchemaAttachment>;

export type SesFullApiSchemaExportDimensions = {
  readonly [key: string]: SesFullApiSchemaExportDimensionValue | undefined;
};

export type SesFullApiSchemaExportMetrics = ReadonlyArray<SesFullApiSchemaExportMetric>;

export type SesFullApiSchemaMessageInsightsFilters = {
  FromEmailAddress?: SesFullApiSchemaEmailAddressFilterList;
  Destination?: SesFullApiSchemaEmailAddressFilterList;
  Subject?: SesFullApiSchemaEmailSubjectFilterList;
  Isp?: SesFullApiSchemaIspFilterList;
  LastDeliveryEvent?: SesFullApiSchemaLastDeliveryEventList;
  LastEngagementEvent?: SesFullApiSchemaLastEngagementEventList;
};

export type SesFullApiSchemaSuppressionListImportAction = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaContactListImportAction = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaRouteDetails = {
  Region: string;
};

export type SesFullApiSchemaReceiptFilterPolicy = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaReceiptAction = {
  S3Action?: SesFullApiSchemaS3Action;
  BounceAction?: SesFullApiSchemaBounceAction;
  WorkmailAction?: SesFullApiSchemaWorkmailAction;
  LambdaAction?: SesFullApiSchemaLambdaAction;
  StopAction?: SesFullApiSchemaStopAction;
  AddHeaderAction?: SesFullApiSchemaAddHeaderAction;
  SNSAction?: SesFullApiSchemaSNSAction;
  ConnectAction?: SesFullApiSchemaConnectAction;
};

export type SesFullApiSchemaReviewDetails = {
  Status?: SesFullApiSchemaReviewStatus;
  CaseId?: string;
};

export type SesFullApiSchemaBlacklistEntries = ReadonlyArray<SesFullApiSchemaBlacklistEntry>;

export type SesFullApiSchemaEventDestination2 = {
  Name: string;
  Enabled?: boolean;
  MatchingEventTypes: SesFullApiSchemaEventTypes;
  KinesisFirehoseDestination?: SesFullApiSchemaKinesisFirehoseDestination;
  CloudWatchDestination?: SesFullApiSchemaCloudWatchDestination;
  SnsDestination?: SesFullApiSchemaSnsDestination;
  EventBridgeDestination?: SesFullApiSchemaEventBridgeDestination;
  PinpointDestination?: SesFullApiSchemaPinpointDestination;
};

export type SesFullApiSchemaWarmupStatus = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaIspPlacement = {
  IspName?: string;
  PlacementStatistics?: SesFullApiSchemaPlacementStatistics;
};

export type SesFullApiSchemaIpList = ReadonlyArray<string>;

export type SesFullApiSchemaEsps = ReadonlyArray<string>;

export type SesFullApiSchemaVolumeStatistics = {
  InboxRawCount?: number;
  SpamRawCount?: number;
  ProjectedInbox?: number;
  ProjectedSpam?: number;
};

export type SesFullApiSchemaDomainIspPlacements = ReadonlyArray<SesFullApiSchemaDomainIspPlacement>;

export type SesFullApiSchemaDailyVolume = {
  StartDate?: string;
  VolumeStatistics?: SesFullApiSchemaVolumeStatistics;
  DomainIspPlacements?: SesFullApiSchemaDomainIspPlacements;
};

export type SesFullApiSchemaEmailAddressInsightsVerdict = {
  ConfidenceVerdict?: SesFullApiSchemaEmailAddressInsightsConfidenceVerdict;
};

export type SesFullApiSchemaEmailAddressInsightsMailboxEvaluations = {
  HasValidSyntax?: SesFullApiSchemaEmailAddressInsightsVerdict;
  HasValidDnsRecords?: SesFullApiSchemaEmailAddressInsightsVerdict;
  MailboxExists?: SesFullApiSchemaEmailAddressInsightsVerdict;
  IsRoleAddress?: SesFullApiSchemaEmailAddressInsightsVerdict;
  IsDisposable?: SesFullApiSchemaEmailAddressInsightsVerdict;
  IsRandomInput?: SesFullApiSchemaEmailAddressInsightsVerdict;
};

export type SesFullApiSchemaMailFromDomainStatus = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaVerificationError = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaSOARecord = {
  PrimaryNameServer?: string;
  AdminEmail?: string;
  SerialNumber?: number;
};

export type SesFullApiSchemaIdentityDkimAttributes = {
  DkimEnabled: boolean;
  DkimVerificationStatus: SesFullApiSchemaVerificationStatus2;
  DkimTokens?: SesFullApiSchemaVerificationTokenList;
};

export type SesFullApiSchemaIdentityMailFromDomainAttributes = {
  MailFromDomain: string;
  MailFromDomainStatus: SesFullApiSchemaCustomMailFromStatus;
  BehaviorOnMXFailure: SesFullApiSchemaBehaviorOnMXFailure;
};

export type SesFullApiSchemaIdentityNotificationAttributes = {
  BounceTopic: string;
  ComplaintTopic: string;
  DeliveryTopic: string;
  ForwardingEnabled: boolean;
  HeadersInBounceNotificationsEnabled?: boolean;
  HeadersInComplaintNotificationsEnabled?: boolean;
  HeadersInDeliveryNotificationsEnabled?: boolean;
};

export type SesFullApiSchemaIdentityVerificationAttributes = {
  VerificationStatus: SesFullApiSchemaVerificationStatus2;
  VerificationToken?: string;
};

export type SesFullApiSchemaEmailInsights = {
  Destination?: string;
  Isp?: string;
  Events?: SesFullApiSchemaInsightsEvents;
};

export type SesFullApiSchemaRoute = {
  Region: string;
};

export type SesFullApiSchemaReputationEntityType = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaStatusRecord = {
  Status?: SesFullApiSchemaSendingStatus;
  Cause?: string;
  LastUpdatedTimestamp?: string;
};

export type SesFullApiSchemaRecommendationImpact = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaSendDataPoint = {
  Timestamp?: string;
  DeliveryAttempts?: number;
  Bounces?: number;
  Complaints?: number;
  Rejects?: number;
};

export type SesFullApiSchemaSuppressedDestinationAttributes = {
  MessageId?: string;
  FeedbackId?: string;
};

export type SesFullApiSchemaContactList = {
  ContactListName?: string;
  LastUpdatedTimestamp?: string;
};

export type SesFullApiSchemaContact = {
  EmailAddress?: string;
  TopicPreferences?: SesFullApiSchemaTopicPreferenceList;
  TopicDefaultPreferences?: SesFullApiSchemaTopicPreferenceList;
  UnsubscribeAll?: boolean;
  LastUpdatedTimestamp?: string;
};

export type SesFullApiSchemaCustomVerificationEmailTemplateMetadata = {
  TemplateName?: string;
  FromEmailAddress?: string;
  TemplateSubject?: string;
  SuccessRedirectionURL?: string;
  FailureRedirectionURL?: string;
};

export type SesFullApiSchemaCustomVerificationEmailTemplate = {
  TemplateName?: string;
  FromEmailAddress?: string;
  TemplateSubject?: string;
  SuccessRedirectionURL?: string;
  FailureRedirectionURL?: string;
};

export type SesFullApiSchemaIdentityInfo = {
  IdentityType?: SesFullApiSchemaIdentityType2;
  IdentityName?: string;
  SendingEnabled?: boolean;
  VerificationStatus?: SesFullApiSchemaVerificationStatus;
};

export type SesFullApiSchemaEmailTemplateMetadata = {
  TemplateName?: string;
  CreatedTimestamp?: string;
};

export type SesFullApiSchemaExportJobSummary = {
  JobId?: string;
  ExportSourceType?: SesFullApiSchemaExportSourceType;
  JobStatus?: SesFullApiSchemaJobStatus;
  CreatedTimestamp?: string;
  CompletedTimestamp?: string;
};

export type SesFullApiSchemaImportJobSummary = {
  JobId?: string;
  ImportDestination?: SesFullApiSchemaImportDestination;
  JobStatus?: SesFullApiSchemaJobStatus;
  CreatedTimestamp?: string;
  ProcessedRecordsCount?: number;
  FailedRecordsCount?: number;
};

export type SesFullApiSchemaMultiRegionEndpoint = {
  EndpointName?: string;
  Status?: SesFullApiSchemaStatus;
  EndpointId?: string;
  Regions?: SesFullApiSchemaRegions;
  CreatedTimestamp?: string;
  LastUpdatedTimestamp?: string;
};

export type SesFullApiSchemaRecommendation = {
  ResourceArn?: string;
  Type?: SesFullApiSchemaRecommendationType;
  Description?: string;
  Status?: SesFullApiSchemaRecommendationStatus;
  CreatedTimestamp?: string;
  LastUpdatedTimestamp?: string;
  Impact?: SesFullApiSchemaRecommendationImpact;
};

export type SesFullApiSchemaResourceTenantMetadata = {
  TenantName?: string;
  TenantId?: string;
  ResourceArn?: string;
  AssociatedTimestamp?: string;
};

export type SesFullApiSchemaSuppressedDestinationSummary = {
  EmailAddress: string;
  Reason: SesFullApiSchemaSuppressionListReason;
  LastUpdateTime: string;
};

export type SesFullApiSchemaTemplateMetadata = {
  Name?: string;
  CreatedTimestamp?: string;
};

export type SesFullApiSchemaTenantResource = {
  ResourceType?: SesFullApiSchemaResourceType;
  ResourceArn?: string;
};

export type SesFullApiSchemaTenantInfo = {
  TenantName?: string;
  TenantId?: string;
  TenantArn?: string;
  CreatedTimestamp?: string;
};

export type SesFullApiSchemaSuppressionConfidenceThreshold = {
  ConfidenceVerdictThreshold: SesFullApiSchemaSuppressionConfidenceVerdictThreshold;
};

export type SesFullApiSchemaInboxPlacementTrackingOption = {
  Global?: boolean;
  TrackedIsps?: SesFullApiSchemaIspNameList;
};

export type SesFullApiSchemaExtensionField = {
  Name: string;
  Value: string;
};

export type SesFullApiSchemaBounceType = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaRecipientDsnFields = {
  FinalRecipient?: string;
  Action: SesFullApiSchemaDsnAction;
  RemoteMta?: string;
  Status: string;
  DiagnosticCode?: string;
  LastAttemptDate?: string;
  ExtensionFields?: SesFullApiSchemaExtensionFieldList;
};

export type SesFullApiSchemaReplacementEmailContent = {
  ReplacementTemplate?: SesFullApiSchemaReplacementTemplate;
};

export type SesFullApiSchemaBulkEmailEntryResult = {
  Status?: SesFullApiSchemaBulkEmailStatus;
  Error?: string;
  MessageId?: string;
};

export type SesFullApiSchemaBulkEmailDestinationStatus = {
  Status?: SesFullApiSchemaBulkEmailStatus2;
  Error?: string;
  MessageId?: string;
};

export type SesFullApiSchemaTimestampList = ReadonlyArray<string>;

export type SesFullApiSchemaMetricValueList = ReadonlyArray<number>;

export type SesFullApiSchemaQueryErrorCode = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaCloudWatchDimensionConfiguration = {
  DimensionName: string;
  DimensionValueSource: SesFullApiSchemaDimensionValueSource;
  DefaultDimensionValue: string;
};

export type SesFullApiSchemaCloudWatchDimensionConfiguration2 = {
  DimensionName: string;
  DimensionValueSource: SesFullApiSchemaDimensionValueSource2;
  DefaultDimensionValue: string;
};

export type SesFullApiSchemaMessageHeader = {
  Name: string;
  Value: string;
};

export type SesFullApiSchemaAttachment = {
  RawContent: string;
  ContentDisposition?: SesFullApiSchemaAttachmentContentDisposition;
  FileName: string;
  ContentDescription?: string;
  ContentId?: string;
  ContentTransferEncoding?: SesFullApiSchemaAttachmentContentTransferEncoding;
  ContentType?: string;
};

export type SesFullApiSchemaExportDimensionValue = ReadonlyArray<string>;

export type SesFullApiSchemaExportMetric = {
  Name?: SesFullApiSchemaMetric;
  Aggregation?: SesFullApiSchemaMetricAggregation;
};

export type SesFullApiSchemaEmailAddressFilterList = ReadonlyArray<string>;

export type SesFullApiSchemaEmailSubjectFilterList = ReadonlyArray<string>;

export type SesFullApiSchemaIspFilterList = ReadonlyArray<string>;

export type SesFullApiSchemaLastDeliveryEventList = ReadonlyArray<SesFullApiSchemaDeliveryEventType>;

export type SesFullApiSchemaLastEngagementEventList = ReadonlyArray<SesFullApiSchemaEngagementEventType>;

export type SesFullApiSchemaS3Action = {
  TopicArn?: string;
  BucketName: string;
  ObjectKeyPrefix?: string;
  KmsKeyArn?: string;
  IamRoleArn?: string;
};

export type SesFullApiSchemaBounceAction = {
  TopicArn?: string;
  SmtpReplyCode: string;
  StatusCode?: string;
  Message: string;
  Sender: string;
};

export type SesFullApiSchemaWorkmailAction = {
  TopicArn?: string;
  OrganizationArn: string;
};

export type SesFullApiSchemaLambdaAction = {
  TopicArn?: string;
  FunctionArn: string;
  InvocationType?: SesFullApiSchemaInvocationType;
};

export type SesFullApiSchemaStopAction = {
  Scope: SesFullApiSchemaStopScope;
  TopicArn?: string;
};

export type SesFullApiSchemaAddHeaderAction = {
  HeaderName: string;
  HeaderValue: string;
};

export type SesFullApiSchemaSNSAction = {
  TopicArn: string;
  Encoding?: SesFullApiSchemaSNSActionEncoding;
};

export type SesFullApiSchemaConnectAction = {
  InstanceARN: string;
  IAMRoleARN: string;
};

export type SesFullApiSchemaReviewStatus = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaBlacklistEntry = {
  RblName?: string;
  ListingTime?: string;
  Description?: string;
};

export type SesFullApiSchemaDomainIspPlacement = {
  IspName?: string;
  InboxRawCount?: number;
  SpamRawCount?: number;
  InboxPercentage?: number;
  SpamPercentage?: number;
};

export type SesFullApiSchemaEmailAddressInsightsConfidenceVerdict = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaVerificationStatus2 = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaCustomMailFromStatus = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaInsightsEvents = ReadonlyArray<SesFullApiSchemaInsightsEvent>;

export type SesFullApiSchemaRegions = ReadonlyArray<string>;

export type SesFullApiSchemaRecommendationType = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaRecommendationStatus = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaResourceType = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaSuppressionConfidenceVerdictThreshold = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaIspNameList = ReadonlyArray<string>;

export type SesFullApiSchemaDsnAction = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaReplacementTemplate = {
  ReplacementTemplateData?: string;
};

export type SesFullApiSchemaBulkEmailStatus = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaBulkEmailStatus2 = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaDimensionValueSource = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaDimensionValueSource2 = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaAttachmentContentDisposition = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaAttachmentContentTransferEncoding = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaMetricAggregation = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaDeliveryEventType = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaEngagementEventType = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaInvocationType = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaStopScope = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaSNSActionEncoding = SesFullApiSchemaJsonValue;

export type SesFullApiSchemaInsightsEvent = {
  Timestamp?: string;
  Type?: SesFullApiSchemaEventType;
  Details?: SesFullApiSchemaEventDetails;
};

export type SesFullApiSchemaEventDetails = {
  Bounce?: SesFullApiSchemaBounce;
  Complaint?: SesFullApiSchemaComplaint;
};

export type SesFullApiSchemaBounce = {
  BounceType?: SesFullApiSchemaBounceType2;
  BounceSubType?: string;
  DiagnosticCode?: string;
};

export type SesFullApiSchemaComplaint = {
  ComplaintSubType?: string;
  ComplaintFeedbackType?: string;
};

export type SesFullApiSchemaBounceType2 = SesFullApiSchemaJsonValue;

export interface SesFullApiOperationQueryMap {
  "sesv2:BatchGetMetricData": {};
  "sesv2:CancelExportJob": {};
  "ses:CloneReceiptRuleSet": {};
  "sesv2:CreateConfigurationSet": {};
  "sesv2:CreateConfigurationSetEventDestination": {};
  "ses:CreateConfigurationSetEventDestination": {};
  "ses:CreateConfigurationSet": {};
  "ses:CreateConfigurationSetTrackingOptions": {};
  "sesv2:CreateContact": {};
  "sesv2:CreateContactList": {};
  "sesv2:CreateCustomVerificationEmailTemplate": {};
  "ses:CreateCustomVerificationEmailTemplate": {};
  "sesv2:CreateDedicatedIpPool": {};
  "sesv2:CreateDeliverabilityTestReport": {};
  "sesv2:CreateEmailIdentity": {};
  "sesv2:CreateEmailIdentityPolicy": {};
  "sesv2:CreateEmailTemplate": {};
  "sesv2:CreateExportJob": {};
  "sesv2:CreateImportJob": {};
  "sesv2:CreateMultiRegionEndpoint": {};
  "ses:CreateReceiptFilter": {};
  "ses:CreateReceiptRule": {};
  "ses:CreateReceiptRuleSet": {};
  "ses:CreateTemplate": {};
  "sesv2:CreateTenant": {};
  "sesv2:CreateTenantResourceAssociation": {};
  "sesv2:DeleteConfigurationSet": {};
  "sesv2:DeleteConfigurationSetEventDestination": {};
  "ses:DeleteConfigurationSetEventDestination": {};
  "ses:DeleteConfigurationSet": {};
  "ses:DeleteConfigurationSetTrackingOptions": {};
  "sesv2:DeleteContact": {};
  "sesv2:DeleteContactList": {};
  "sesv2:DeleteCustomVerificationEmailTemplate": {};
  "ses:DeleteCustomVerificationEmailTemplate": {};
  "sesv2:DeleteDedicatedIpPool": {};
  "sesv2:DeleteEmailIdentity": {};
  "sesv2:DeleteEmailIdentityPolicy": {};
  "sesv2:DeleteEmailTemplate": {};
  "ses:DeleteIdentity": {};
  "ses:DeleteIdentityPolicy": {};
  "sesv2:DeleteMultiRegionEndpoint": {};
  "ses:DeleteReceiptFilter": {};
  "ses:DeleteReceiptRule": {};
  "ses:DeleteReceiptRuleSet": {};
  "sesv2:DeleteSuppressedDestination": {
  TenantName?: string;
};
  "ses:DeleteTemplate": {};
  "sesv2:DeleteTenant": {};
  "sesv2:DeleteTenantResourceAssociation": {};
  "ses:DeleteVerifiedEmailAddress": {};
  "ses:DescribeActiveReceiptRuleSet": {};
  "ses:DescribeConfigurationSet": {};
  "ses:DescribeReceiptRule": {};
  "ses:DescribeReceiptRuleSet": {};
  "sesv2:GetAccount": {};
  "ses:GetAccountSendingEnabled": {};
  "sesv2:GetBlacklistReports": {
  BlacklistItemNames: SesFullApiSchemaBlacklistItemNames;
};
  "sesv2:GetConfigurationSet": {};
  "sesv2:GetConfigurationSetEventDestinations": {};
  "sesv2:GetContact": {};
  "sesv2:GetContactList": {};
  "sesv2:GetCustomVerificationEmailTemplate": {};
  "ses:GetCustomVerificationEmailTemplate": {};
  "sesv2:GetDedicatedIp": {};
  "sesv2:GetDedicatedIpPool": {};
  "sesv2:GetDedicatedIps": {
  PoolName?: string;
  NextToken?: string;
  PageSize?: number;
};
  "sesv2:GetDeliverabilityDashboardOptions": {};
  "sesv2:GetDeliverabilityTestReport": {};
  "sesv2:GetDomainDeliverabilityCampaign": {};
  "sesv2:GetDomainStatisticsReport": {
  StartDate: string;
  EndDate: string;
};
  "sesv2:GetEmailAddressInsights": {};
  "sesv2:GetEmailIdentity": {};
  "sesv2:GetEmailIdentityPolicies": {};
  "sesv2:GetEmailTemplate": {};
  "sesv2:GetExportJob": {};
  "ses:GetIdentityDkimAttributes": {};
  "ses:GetIdentityMailFromDomainAttributes": {};
  "ses:GetIdentityNotificationAttributes": {};
  "ses:GetIdentityPolicies": {};
  "ses:GetIdentityVerificationAttributes": {};
  "sesv2:GetImportJob": {};
  "sesv2:GetMessageInsights": {};
  "sesv2:GetMultiRegionEndpoint": {};
  "sesv2:GetReputationEntity": {};
  "ses:GetSendQuota": {};
  "ses:GetSendStatistics": {};
  "sesv2:GetSuppressedDestination": {
  TenantName?: string;
};
  "ses:GetTemplate": {};
  "sesv2:GetTenant": {};
  "sesv2:ListConfigurationSets": {
  NextToken?: string;
  PageSize?: number;
};
  "ses:ListConfigurationSets": {};
  "sesv2:ListContactLists": {
  PageSize?: number;
  NextToken?: string;
};
  "sesv2:ListContacts": {};
  "sesv2:ListCustomVerificationEmailTemplates": {
  NextToken?: string;
  PageSize?: number;
};
  "ses:ListCustomVerificationEmailTemplates": {};
  "sesv2:ListDedicatedIpPools": {
  NextToken?: string;
  PageSize?: number;
};
  "sesv2:ListDeliverabilityTestReports": {
  NextToken?: string;
  PageSize?: number;
};
  "sesv2:ListDomainDeliverabilityCampaigns": {
  StartDate: string;
  EndDate: string;
  NextToken?: string;
  PageSize?: number;
};
  "sesv2:ListEmailIdentities": {
  NextToken?: string;
  PageSize?: number;
};
  "sesv2:ListEmailTemplates": {
  NextToken?: string;
  PageSize?: number;
};
  "sesv2:ListExportJobs": {};
  "ses:ListIdentities": {};
  "ses:ListIdentityPolicies": {};
  "sesv2:ListImportJobs": {};
  "sesv2:ListMultiRegionEndpoints": {
  NextToken?: string;
  PageSize?: number;
};
  "ses:ListReceiptFilters": {};
  "ses:ListReceiptRuleSets": {};
  "sesv2:ListRecommendations": {};
  "sesv2:ListReputationEntities": {};
  "sesv2:ListResourceTenants": {};
  "sesv2:ListSuppressedDestinations": {
  TenantName?: string;
  Reasons?: SesFullApiSchemaSuppressionListReasons;
  StartDate?: string;
  EndDate?: string;
  NextToken?: string;
  PageSize?: number;
};
  "sesv2:ListTagsForResource": {
  ResourceArn: string;
};
  "ses:ListTemplates": {};
  "sesv2:ListTenantResources": {};
  "sesv2:ListTenants": {};
  "ses:ListVerifiedEmailAddresses": {};
  "sesv2:PutAccountDedicatedIpWarmupAttributes": {};
  "sesv2:PutAccountDetails": {};
  "sesv2:PutAccountSendingAttributes": {};
  "sesv2:PutAccountSuppressionAttributes": {};
  "sesv2:PutAccountVdmAttributes": {};
  "sesv2:PutConfigurationSetArchivingOptions": {};
  "sesv2:PutConfigurationSetDeliveryOptions": {};
  "ses:PutConfigurationSetDeliveryOptions": {};
  "sesv2:PutConfigurationSetReputationOptions": {};
  "sesv2:PutConfigurationSetSendingOptions": {};
  "sesv2:PutConfigurationSetSuppressionOptions": {};
  "sesv2:PutConfigurationSetTrackingOptions": {};
  "sesv2:PutConfigurationSetVdmOptions": {};
  "sesv2:PutDedicatedIpInPool": {};
  "sesv2:PutDedicatedIpPoolScalingAttributes": {};
  "sesv2:PutDedicatedIpWarmupAttributes": {};
  "sesv2:PutDeliverabilityDashboardOption": {};
  "sesv2:PutEmailIdentityConfigurationSetAttributes": {};
  "sesv2:PutEmailIdentityDkimAttributes": {};
  "sesv2:PutEmailIdentityDkimSigningAttributes": {};
  "sesv2:PutEmailIdentityFeedbackAttributes": {};
  "sesv2:PutEmailIdentityMailFromAttributes": {};
  "ses:PutIdentityPolicy": {};
  "sesv2:PutSuppressedDestination": {};
  "sesv2:PutTenantSuppressionAttributes": {};
  "ses:ReorderReceiptRuleSet": {};
  "ses:SendBounce": {};
  "sesv2:SendBulkEmail": {};
  "ses:SendBulkTemplatedEmail": {};
  "sesv2:SendCustomVerificationEmail": {};
  "ses:SendCustomVerificationEmail": {};
  "sesv2:SendEmail": {};
  "ses:SendEmail": {};
  "ses:SendRawEmail": {};
  "ses:SendTemplatedEmail": {};
  "ses:SetActiveReceiptRuleSet": {};
  "ses:SetIdentityDkimEnabled": {};
  "ses:SetIdentityFeedbackForwardingEnabled": {};
  "ses:SetIdentityHeadersInNotificationsEnabled": {};
  "ses:SetIdentityMailFromDomain": {};
  "ses:SetIdentityNotificationTopic": {};
  "ses:SetReceiptRulePosition": {};
  "sesv2:TagResource": {};
  "sesv2:TestRenderEmailTemplate": {};
  "ses:TestRenderTemplate": {};
  "sesv2:UntagResource": {
  ResourceArn: string;
  TagKeys: SesFullApiSchemaTagKeyList;
};
  "ses:UpdateAccountSendingEnabled": {};
  "sesv2:UpdateConfigurationSetEventDestination": {};
  "ses:UpdateConfigurationSetEventDestination": {};
  "ses:UpdateConfigurationSetReputationMetricsEnabled": {};
  "ses:UpdateConfigurationSetSendingEnabled": {};
  "ses:UpdateConfigurationSetTrackingOptions": {};
  "sesv2:UpdateContact": {};
  "sesv2:UpdateContactList": {};
  "sesv2:UpdateCustomVerificationEmailTemplate": {};
  "ses:UpdateCustomVerificationEmailTemplate": {};
  "sesv2:UpdateEmailIdentityPolicy": {};
  "sesv2:UpdateEmailTemplate": {};
  "ses:UpdateReceiptRule": {};
  "sesv2:UpdateReputationEntityCustomerManagedStatus": {};
  "sesv2:UpdateReputationEntityPolicy": {};
  "ses:UpdateTemplate": {};
  "ses:VerifyDomainDkim": {};
  "ses:VerifyDomainIdentity": {};
  "ses:VerifyEmailAddress": {};
  "ses:VerifyEmailIdentity": {};
}

export interface SesFullApiOperationQueryRequiredMap {
  "sesv2:BatchGetMetricData": false;
  "sesv2:CancelExportJob": false;
  "ses:CloneReceiptRuleSet": false;
  "sesv2:CreateConfigurationSet": false;
  "sesv2:CreateConfigurationSetEventDestination": false;
  "ses:CreateConfigurationSetEventDestination": false;
  "ses:CreateConfigurationSet": false;
  "ses:CreateConfigurationSetTrackingOptions": false;
  "sesv2:CreateContact": false;
  "sesv2:CreateContactList": false;
  "sesv2:CreateCustomVerificationEmailTemplate": false;
  "ses:CreateCustomVerificationEmailTemplate": false;
  "sesv2:CreateDedicatedIpPool": false;
  "sesv2:CreateDeliverabilityTestReport": false;
  "sesv2:CreateEmailIdentity": false;
  "sesv2:CreateEmailIdentityPolicy": false;
  "sesv2:CreateEmailTemplate": false;
  "sesv2:CreateExportJob": false;
  "sesv2:CreateImportJob": false;
  "sesv2:CreateMultiRegionEndpoint": false;
  "ses:CreateReceiptFilter": false;
  "ses:CreateReceiptRule": false;
  "ses:CreateReceiptRuleSet": false;
  "ses:CreateTemplate": false;
  "sesv2:CreateTenant": false;
  "sesv2:CreateTenantResourceAssociation": false;
  "sesv2:DeleteConfigurationSet": false;
  "sesv2:DeleteConfigurationSetEventDestination": false;
  "ses:DeleteConfigurationSetEventDestination": false;
  "ses:DeleteConfigurationSet": false;
  "ses:DeleteConfigurationSetTrackingOptions": false;
  "sesv2:DeleteContact": false;
  "sesv2:DeleteContactList": false;
  "sesv2:DeleteCustomVerificationEmailTemplate": false;
  "ses:DeleteCustomVerificationEmailTemplate": false;
  "sesv2:DeleteDedicatedIpPool": false;
  "sesv2:DeleteEmailIdentity": false;
  "sesv2:DeleteEmailIdentityPolicy": false;
  "sesv2:DeleteEmailTemplate": false;
  "ses:DeleteIdentity": false;
  "ses:DeleteIdentityPolicy": false;
  "sesv2:DeleteMultiRegionEndpoint": false;
  "ses:DeleteReceiptFilter": false;
  "ses:DeleteReceiptRule": false;
  "ses:DeleteReceiptRuleSet": false;
  "sesv2:DeleteSuppressedDestination": false;
  "ses:DeleteTemplate": false;
  "sesv2:DeleteTenant": false;
  "sesv2:DeleteTenantResourceAssociation": false;
  "ses:DeleteVerifiedEmailAddress": false;
  "ses:DescribeActiveReceiptRuleSet": false;
  "ses:DescribeConfigurationSet": false;
  "ses:DescribeReceiptRule": false;
  "ses:DescribeReceiptRuleSet": false;
  "sesv2:GetAccount": false;
  "ses:GetAccountSendingEnabled": false;
  "sesv2:GetBlacklistReports": true;
  "sesv2:GetConfigurationSet": false;
  "sesv2:GetConfigurationSetEventDestinations": false;
  "sesv2:GetContact": false;
  "sesv2:GetContactList": false;
  "sesv2:GetCustomVerificationEmailTemplate": false;
  "ses:GetCustomVerificationEmailTemplate": false;
  "sesv2:GetDedicatedIp": false;
  "sesv2:GetDedicatedIpPool": false;
  "sesv2:GetDedicatedIps": false;
  "sesv2:GetDeliverabilityDashboardOptions": false;
  "sesv2:GetDeliverabilityTestReport": false;
  "sesv2:GetDomainDeliverabilityCampaign": false;
  "sesv2:GetDomainStatisticsReport": true;
  "sesv2:GetEmailAddressInsights": false;
  "sesv2:GetEmailIdentity": false;
  "sesv2:GetEmailIdentityPolicies": false;
  "sesv2:GetEmailTemplate": false;
  "sesv2:GetExportJob": false;
  "ses:GetIdentityDkimAttributes": false;
  "ses:GetIdentityMailFromDomainAttributes": false;
  "ses:GetIdentityNotificationAttributes": false;
  "ses:GetIdentityPolicies": false;
  "ses:GetIdentityVerificationAttributes": false;
  "sesv2:GetImportJob": false;
  "sesv2:GetMessageInsights": false;
  "sesv2:GetMultiRegionEndpoint": false;
  "sesv2:GetReputationEntity": false;
  "ses:GetSendQuota": false;
  "ses:GetSendStatistics": false;
  "sesv2:GetSuppressedDestination": false;
  "ses:GetTemplate": false;
  "sesv2:GetTenant": false;
  "sesv2:ListConfigurationSets": false;
  "ses:ListConfigurationSets": false;
  "sesv2:ListContactLists": false;
  "sesv2:ListContacts": false;
  "sesv2:ListCustomVerificationEmailTemplates": false;
  "ses:ListCustomVerificationEmailTemplates": false;
  "sesv2:ListDedicatedIpPools": false;
  "sesv2:ListDeliverabilityTestReports": false;
  "sesv2:ListDomainDeliverabilityCampaigns": true;
  "sesv2:ListEmailIdentities": false;
  "sesv2:ListEmailTemplates": false;
  "sesv2:ListExportJobs": false;
  "ses:ListIdentities": false;
  "ses:ListIdentityPolicies": false;
  "sesv2:ListImportJobs": false;
  "sesv2:ListMultiRegionEndpoints": false;
  "ses:ListReceiptFilters": false;
  "ses:ListReceiptRuleSets": false;
  "sesv2:ListRecommendations": false;
  "sesv2:ListReputationEntities": false;
  "sesv2:ListResourceTenants": false;
  "sesv2:ListSuppressedDestinations": false;
  "sesv2:ListTagsForResource": true;
  "ses:ListTemplates": false;
  "sesv2:ListTenantResources": false;
  "sesv2:ListTenants": false;
  "ses:ListVerifiedEmailAddresses": false;
  "sesv2:PutAccountDedicatedIpWarmupAttributes": false;
  "sesv2:PutAccountDetails": false;
  "sesv2:PutAccountSendingAttributes": false;
  "sesv2:PutAccountSuppressionAttributes": false;
  "sesv2:PutAccountVdmAttributes": false;
  "sesv2:PutConfigurationSetArchivingOptions": false;
  "sesv2:PutConfigurationSetDeliveryOptions": false;
  "ses:PutConfigurationSetDeliveryOptions": false;
  "sesv2:PutConfigurationSetReputationOptions": false;
  "sesv2:PutConfigurationSetSendingOptions": false;
  "sesv2:PutConfigurationSetSuppressionOptions": false;
  "sesv2:PutConfigurationSetTrackingOptions": false;
  "sesv2:PutConfigurationSetVdmOptions": false;
  "sesv2:PutDedicatedIpInPool": false;
  "sesv2:PutDedicatedIpPoolScalingAttributes": false;
  "sesv2:PutDedicatedIpWarmupAttributes": false;
  "sesv2:PutDeliverabilityDashboardOption": false;
  "sesv2:PutEmailIdentityConfigurationSetAttributes": false;
  "sesv2:PutEmailIdentityDkimAttributes": false;
  "sesv2:PutEmailIdentityDkimSigningAttributes": false;
  "sesv2:PutEmailIdentityFeedbackAttributes": false;
  "sesv2:PutEmailIdentityMailFromAttributes": false;
  "ses:PutIdentityPolicy": false;
  "sesv2:PutSuppressedDestination": false;
  "sesv2:PutTenantSuppressionAttributes": false;
  "ses:ReorderReceiptRuleSet": false;
  "ses:SendBounce": false;
  "sesv2:SendBulkEmail": false;
  "ses:SendBulkTemplatedEmail": false;
  "sesv2:SendCustomVerificationEmail": false;
  "ses:SendCustomVerificationEmail": false;
  "sesv2:SendEmail": false;
  "ses:SendEmail": false;
  "ses:SendRawEmail": false;
  "ses:SendTemplatedEmail": false;
  "ses:SetActiveReceiptRuleSet": false;
  "ses:SetIdentityDkimEnabled": false;
  "ses:SetIdentityFeedbackForwardingEnabled": false;
  "ses:SetIdentityHeadersInNotificationsEnabled": false;
  "ses:SetIdentityMailFromDomain": false;
  "ses:SetIdentityNotificationTopic": false;
  "ses:SetReceiptRulePosition": false;
  "sesv2:TagResource": false;
  "sesv2:TestRenderEmailTemplate": false;
  "ses:TestRenderTemplate": false;
  "sesv2:UntagResource": true;
  "ses:UpdateAccountSendingEnabled": false;
  "sesv2:UpdateConfigurationSetEventDestination": false;
  "ses:UpdateConfigurationSetEventDestination": false;
  "ses:UpdateConfigurationSetReputationMetricsEnabled": false;
  "ses:UpdateConfigurationSetSendingEnabled": false;
  "ses:UpdateConfigurationSetTrackingOptions": false;
  "sesv2:UpdateContact": false;
  "sesv2:UpdateContactList": false;
  "sesv2:UpdateCustomVerificationEmailTemplate": false;
  "ses:UpdateCustomVerificationEmailTemplate": false;
  "sesv2:UpdateEmailIdentityPolicy": false;
  "sesv2:UpdateEmailTemplate": false;
  "ses:UpdateReceiptRule": false;
  "sesv2:UpdateReputationEntityCustomerManagedStatus": false;
  "sesv2:UpdateReputationEntityPolicy": false;
  "ses:UpdateTemplate": false;
  "ses:VerifyDomainDkim": false;
  "ses:VerifyDomainIdentity": false;
  "ses:VerifyEmailAddress": false;
  "ses:VerifyEmailIdentity": false;
}

export interface SesFullApiOperationRequestBodyMap {
  "sesv2:BatchGetMetricData": {
  Queries: SesFullApiSchemaBatchGetMetricDataQueries;
};
  "sesv2:CancelExportJob": never;
  "ses:CloneReceiptRuleSet": {
  RuleSetName: string;
  OriginalRuleSetName: string;
};
  "sesv2:CreateConfigurationSet": {
  ConfigurationSetName: string;
  TrackingOptions?: SesFullApiSchemaTrackingOptions;
  DeliveryOptions?: SesFullApiSchemaDeliveryOptions;
  ReputationOptions?: SesFullApiSchemaReputationOptions;
  SendingOptions?: SesFullApiSchemaSendingOptions;
  Tags?: SesFullApiSchemaTagList;
  SuppressionOptions?: SesFullApiSchemaSuppressionOptions;
  VdmOptions?: SesFullApiSchemaVdmOptions;
  ArchivingOptions?: SesFullApiSchemaArchivingOptions;
};
  "sesv2:CreateConfigurationSetEventDestination": {
  EventDestinationName: string;
  EventDestination: SesFullApiSchemaEventDestinationDefinition;
};
  "ses:CreateConfigurationSetEventDestination": {
  ConfigurationSetName: string;
  EventDestination: SesFullApiSchemaEventDestination;
};
  "ses:CreateConfigurationSet": {
  ConfigurationSet: SesFullApiSchemaConfigurationSet;
};
  "ses:CreateConfigurationSetTrackingOptions": {
  ConfigurationSetName: string;
  TrackingOptions: SesFullApiSchemaTrackingOptions2;
};
  "sesv2:CreateContact": {
  EmailAddress: string;
  TopicPreferences?: SesFullApiSchemaTopicPreferenceList;
  UnsubscribeAll?: boolean;
  AttributesData?: string;
};
  "sesv2:CreateContactList": {
  ContactListName: string;
  Topics?: SesFullApiSchemaTopics;
  Description?: string;
  Tags?: SesFullApiSchemaTagList;
};
  "sesv2:CreateCustomVerificationEmailTemplate": {
  TemplateName: string;
  FromEmailAddress: string;
  TemplateSubject: string;
  TemplateContent: string;
  Tags?: SesFullApiSchemaTagList;
  SuccessRedirectionURL: string;
  FailureRedirectionURL: string;
};
  "ses:CreateCustomVerificationEmailTemplate": {
  TemplateName: string;
  FromEmailAddress: string;
  TemplateSubject: string;
  TemplateContent: string;
  SuccessRedirectionURL: string;
  FailureRedirectionURL: string;
};
  "sesv2:CreateDedicatedIpPool": {
  PoolName: string;
  Tags?: SesFullApiSchemaTagList;
  ScalingMode?: SesFullApiSchemaScalingMode;
};
  "sesv2:CreateDeliverabilityTestReport": {
  ReportName?: string;
  FromEmailAddress: string;
  Content: SesFullApiSchemaEmailContent;
  Tags?: SesFullApiSchemaTagList;
};
  "sesv2:CreateEmailIdentity": {
  EmailIdentity: string;
  Tags?: SesFullApiSchemaTagList;
  DkimSigningAttributes?: SesFullApiSchemaDkimSigningAttributes;
  ConfigurationSetName?: string;
};
  "sesv2:CreateEmailIdentityPolicy": {
  Policy: string;
};
  "sesv2:CreateEmailTemplate": {
  TemplateName: string;
  TemplateContent: SesFullApiSchemaEmailTemplateContent;
  Tags?: SesFullApiSchemaTagList;
};
  "sesv2:CreateExportJob": {
  ExportDataSource: SesFullApiSchemaExportDataSource;
  ExportDestination: SesFullApiSchemaExportDestination;
};
  "sesv2:CreateImportJob": {
  ImportDestination: SesFullApiSchemaImportDestination;
  ImportDataSource: SesFullApiSchemaImportDataSource;
};
  "sesv2:CreateMultiRegionEndpoint": {
  EndpointName: string;
  Details: SesFullApiSchemaDetails;
  Tags?: SesFullApiSchemaTagList;
};
  "ses:CreateReceiptFilter": {
  Filter: SesFullApiSchemaReceiptFilter;
};
  "ses:CreateReceiptRule": {
  RuleSetName: string;
  After?: string;
  Rule: SesFullApiSchemaReceiptRule;
};
  "ses:CreateReceiptRuleSet": {
  RuleSetName: string;
};
  "ses:CreateTemplate": {
  Template: SesFullApiSchemaTemplate;
};
  "sesv2:CreateTenant": {
  TenantName: string;
  Tags?: SesFullApiSchemaTagList;
  SuppressionAttributes?: SesFullApiSchemaTenantSuppressionAttributes;
};
  "sesv2:CreateTenantResourceAssociation": {
  TenantName: string;
  ResourceArn: string;
};
  "sesv2:DeleteConfigurationSet": never;
  "sesv2:DeleteConfigurationSetEventDestination": never;
  "ses:DeleteConfigurationSetEventDestination": {
  ConfigurationSetName: string;
  EventDestinationName: string;
};
  "ses:DeleteConfigurationSet": {
  ConfigurationSetName: string;
};
  "ses:DeleteConfigurationSetTrackingOptions": {
  ConfigurationSetName: string;
};
  "sesv2:DeleteContact": never;
  "sesv2:DeleteContactList": never;
  "sesv2:DeleteCustomVerificationEmailTemplate": never;
  "ses:DeleteCustomVerificationEmailTemplate": {
  TemplateName: string;
};
  "sesv2:DeleteDedicatedIpPool": never;
  "sesv2:DeleteEmailIdentity": never;
  "sesv2:DeleteEmailIdentityPolicy": never;
  "sesv2:DeleteEmailTemplate": never;
  "ses:DeleteIdentity": {
  Identity: string;
};
  "ses:DeleteIdentityPolicy": {
  Identity: string;
  PolicyName: string;
};
  "sesv2:DeleteMultiRegionEndpoint": never;
  "ses:DeleteReceiptFilter": {
  FilterName: string;
};
  "ses:DeleteReceiptRule": {
  RuleSetName: string;
  RuleName: string;
};
  "ses:DeleteReceiptRuleSet": {
  RuleSetName: string;
};
  "sesv2:DeleteSuppressedDestination": never;
  "ses:DeleteTemplate": {
  TemplateName: string;
};
  "sesv2:DeleteTenant": {
  TenantName: string;
};
  "sesv2:DeleteTenantResourceAssociation": {
  TenantName: string;
  ResourceArn: string;
};
  "ses:DeleteVerifiedEmailAddress": {
  EmailAddress: string;
};
  "ses:DescribeActiveReceiptRuleSet": never;
  "ses:DescribeConfigurationSet": {
  ConfigurationSetName: string;
  ConfigurationSetAttributeNames?: SesFullApiSchemaConfigurationSetAttributeList;
};
  "ses:DescribeReceiptRule": {
  RuleSetName: string;
  RuleName: string;
};
  "ses:DescribeReceiptRuleSet": {
  RuleSetName: string;
};
  "sesv2:GetAccount": never;
  "ses:GetAccountSendingEnabled": never;
  "sesv2:GetBlacklistReports": never;
  "sesv2:GetConfigurationSet": never;
  "sesv2:GetConfigurationSetEventDestinations": never;
  "sesv2:GetContact": never;
  "sesv2:GetContactList": never;
  "sesv2:GetCustomVerificationEmailTemplate": never;
  "ses:GetCustomVerificationEmailTemplate": {
  TemplateName: string;
};
  "sesv2:GetDedicatedIp": never;
  "sesv2:GetDedicatedIpPool": never;
  "sesv2:GetDedicatedIps": never;
  "sesv2:GetDeliverabilityDashboardOptions": never;
  "sesv2:GetDeliverabilityTestReport": never;
  "sesv2:GetDomainDeliverabilityCampaign": never;
  "sesv2:GetDomainStatisticsReport": never;
  "sesv2:GetEmailAddressInsights": {
  EmailAddress: string;
};
  "sesv2:GetEmailIdentity": never;
  "sesv2:GetEmailIdentityPolicies": never;
  "sesv2:GetEmailTemplate": never;
  "sesv2:GetExportJob": never;
  "ses:GetIdentityDkimAttributes": {
  Identities: SesFullApiSchemaIdentityList;
};
  "ses:GetIdentityMailFromDomainAttributes": {
  Identities: SesFullApiSchemaIdentityList;
};
  "ses:GetIdentityNotificationAttributes": {
  Identities: SesFullApiSchemaIdentityList;
};
  "ses:GetIdentityPolicies": {
  Identity: string;
  PolicyNames: SesFullApiSchemaPolicyNameList;
};
  "ses:GetIdentityVerificationAttributes": {
  Identities: SesFullApiSchemaIdentityList;
};
  "sesv2:GetImportJob": never;
  "sesv2:GetMessageInsights": never;
  "sesv2:GetMultiRegionEndpoint": never;
  "sesv2:GetReputationEntity": never;
  "ses:GetSendQuota": never;
  "ses:GetSendStatistics": never;
  "sesv2:GetSuppressedDestination": never;
  "ses:GetTemplate": {
  TemplateName: string;
};
  "sesv2:GetTenant": {
  TenantName: string;
};
  "sesv2:ListConfigurationSets": never;
  "ses:ListConfigurationSets": {
  NextToken?: string;
  MaxItems?: number;
};
  "sesv2:ListContactLists": never;
  "sesv2:ListContacts": {
  Filter?: SesFullApiSchemaListContactsFilter;
  PageSize?: number;
  NextToken?: string;
};
  "sesv2:ListCustomVerificationEmailTemplates": never;
  "ses:ListCustomVerificationEmailTemplates": {
  NextToken?: string;
  MaxResults?: number;
};
  "sesv2:ListDedicatedIpPools": never;
  "sesv2:ListDeliverabilityTestReports": never;
  "sesv2:ListDomainDeliverabilityCampaigns": never;
  "sesv2:ListEmailIdentities": never;
  "sesv2:ListEmailTemplates": never;
  "sesv2:ListExportJobs": {
  NextToken?: string;
  PageSize?: number;
  ExportSourceType?: SesFullApiSchemaExportSourceType;
  JobStatus?: SesFullApiSchemaJobStatus;
};
  "ses:ListIdentities": {
  IdentityType?: SesFullApiSchemaIdentityType;
  NextToken?: string;
  MaxItems?: number;
};
  "ses:ListIdentityPolicies": {
  Identity: string;
};
  "sesv2:ListImportJobs": {
  ImportDestinationType?: SesFullApiSchemaImportDestinationType;
  NextToken?: string;
  PageSize?: number;
};
  "sesv2:ListMultiRegionEndpoints": never;
  "ses:ListReceiptFilters": never;
  "ses:ListReceiptRuleSets": {
  NextToken?: string;
};
  "sesv2:ListRecommendations": {
  Filter?: SesFullApiSchemaListRecommendationsFilter;
  NextToken?: string;
  PageSize?: number;
};
  "sesv2:ListReputationEntities": {
  Filter?: SesFullApiSchemaReputationEntityFilter;
  NextToken?: string;
  PageSize?: number;
};
  "sesv2:ListResourceTenants": {
  ResourceArn: string;
  PageSize?: number;
  NextToken?: string;
};
  "sesv2:ListSuppressedDestinations": never;
  "sesv2:ListTagsForResource": never;
  "ses:ListTemplates": {
  NextToken?: string;
  MaxItems?: number;
};
  "sesv2:ListTenantResources": {
  TenantName: string;
  Filter?: SesFullApiSchemaListTenantResourcesFilter;
  PageSize?: number;
  NextToken?: string;
};
  "sesv2:ListTenants": {
  NextToken?: string;
  PageSize?: number;
};
  "ses:ListVerifiedEmailAddresses": never;
  "sesv2:PutAccountDedicatedIpWarmupAttributes": {
  AutoWarmupEnabled?: boolean;
};
  "sesv2:PutAccountDetails": {
  MailType: SesFullApiSchemaMailType;
  WebsiteURL: string;
  ContactLanguage?: SesFullApiSchemaContactLanguage;
  UseCaseDescription?: string;
  AdditionalContactEmailAddresses?: SesFullApiSchemaAdditionalContactEmailAddresses;
  ProductionAccessEnabled?: boolean;
};
  "sesv2:PutAccountSendingAttributes": {
  SendingEnabled?: boolean;
};
  "sesv2:PutAccountSuppressionAttributes": {
  SuppressedReasons?: SesFullApiSchemaSuppressionListReasons;
  ValidationAttributes?: SesFullApiSchemaSuppressionValidationAttributes;
};
  "sesv2:PutAccountVdmAttributes": {
  VdmAttributes: SesFullApiSchemaVdmAttributes;
};
  "sesv2:PutConfigurationSetArchivingOptions": {
  ArchiveArn?: string;
};
  "sesv2:PutConfigurationSetDeliveryOptions": {
  TlsPolicy?: SesFullApiSchemaTlsPolicy;
  SendingPoolName?: string;
  MaxDeliverySeconds?: number;
};
  "ses:PutConfigurationSetDeliveryOptions": {
  ConfigurationSetName: string;
  DeliveryOptions?: SesFullApiSchemaDeliveryOptions2;
};
  "sesv2:PutConfigurationSetReputationOptions": {
  ReputationMetricsEnabled?: boolean;
};
  "sesv2:PutConfigurationSetSendingOptions": {
  SendingEnabled?: boolean;
};
  "sesv2:PutConfigurationSetSuppressionOptions": {
  SuppressionScope?: SesFullApiSchemaSuppressionListScope;
  SuppressedReasons?: SesFullApiSchemaSuppressionListReasons;
  ValidationOptions?: SesFullApiSchemaSuppressionValidationOptions;
};
  "sesv2:PutConfigurationSetTrackingOptions": {
  CustomRedirectDomain?: string;
  HttpsPolicy?: SesFullApiSchemaHttpsPolicy;
};
  "sesv2:PutConfigurationSetVdmOptions": {
  VdmOptions?: SesFullApiSchemaVdmOptions;
};
  "sesv2:PutDedicatedIpInPool": {
  DestinationPoolName: string;
};
  "sesv2:PutDedicatedIpPoolScalingAttributes": {
  ScalingMode: SesFullApiSchemaScalingMode;
};
  "sesv2:PutDedicatedIpWarmupAttributes": {
  WarmupPercentage: number;
};
  "sesv2:PutDeliverabilityDashboardOption": {
  DashboardEnabled: boolean;
  SubscribedDomains?: SesFullApiSchemaDomainDeliverabilityTrackingOptions;
};
  "sesv2:PutEmailIdentityConfigurationSetAttributes": {
  ConfigurationSetName?: string;
};
  "sesv2:PutEmailIdentityDkimAttributes": {
  SigningEnabled?: boolean;
};
  "sesv2:PutEmailIdentityDkimSigningAttributes": {
  SigningAttributesOrigin: SesFullApiSchemaDkimSigningAttributesOrigin;
  SigningAttributes?: SesFullApiSchemaDkimSigningAttributes;
};
  "sesv2:PutEmailIdentityFeedbackAttributes": {
  EmailForwardingEnabled?: boolean;
};
  "sesv2:PutEmailIdentityMailFromAttributes": {
  MailFromDomain?: string;
  BehaviorOnMxFailure?: SesFullApiSchemaBehaviorOnMxFailure;
};
  "ses:PutIdentityPolicy": {
  Identity: string;
  PolicyName: string;
  Policy: string;
};
  "sesv2:PutSuppressedDestination": {
  EmailAddress: string;
  Reason: SesFullApiSchemaSuppressionListReason;
  TenantName?: string;
};
  "sesv2:PutTenantSuppressionAttributes": {
  TenantName: string;
  SuppressedReasons?: SesFullApiSchemaSuppressionListReasons;
  SuppressionScope?: SesFullApiSchemaSuppressionListScope;
};
  "ses:ReorderReceiptRuleSet": {
  RuleSetName: string;
  RuleNames: SesFullApiSchemaReceiptRuleNamesList;
};
  "ses:SendBounce": {
  OriginalMessageId: string;
  BounceSender: string;
  Explanation?: string;
  MessageDsn?: SesFullApiSchemaMessageDsn;
  BouncedRecipientInfoList: SesFullApiSchemaBouncedRecipientInfoList;
  BounceSenderArn?: string;
};
  "sesv2:SendBulkEmail": {
  FromEmailAddress?: string;
  FromEmailAddressIdentityArn?: string;
  ReplyToAddresses?: SesFullApiSchemaEmailAddressList;
  FeedbackForwardingEmailAddress?: string;
  FeedbackForwardingEmailAddressIdentityArn?: string;
  DefaultEmailTags?: SesFullApiSchemaMessageTagList;
  DefaultContent: SesFullApiSchemaBulkEmailContent;
  BulkEmailEntries: SesFullApiSchemaBulkEmailEntryList;
  ConfigurationSetName?: string;
  EndpointId?: string;
  TenantName?: string;
};
  "ses:SendBulkTemplatedEmail": {
  Source: string;
  SourceArn?: string;
  ReplyToAddresses?: SesFullApiSchemaAddressList;
  ReturnPath?: string;
  ReturnPathArn?: string;
  ConfigurationSetName?: string;
  DefaultTags?: SesFullApiSchemaMessageTagList2;
  Template: string;
  TemplateArn?: string;
  DefaultTemplateData: string;
  Destinations: SesFullApiSchemaBulkEmailDestinationList;
};
  "sesv2:SendCustomVerificationEmail": {
  EmailAddress: string;
  TemplateName: string;
  ConfigurationSetName?: string;
};
  "ses:SendCustomVerificationEmail": {
  EmailAddress: string;
  TemplateName: string;
  ConfigurationSetName?: string;
};
  "sesv2:SendEmail": {
  FromEmailAddress?: string;
  FromEmailAddressIdentityArn?: string;
  Destination?: SesFullApiSchemaDestination;
  ReplyToAddresses?: SesFullApiSchemaEmailAddressList;
  FeedbackForwardingEmailAddress?: string;
  FeedbackForwardingEmailAddressIdentityArn?: string;
  Content: SesFullApiSchemaEmailContent;
  EmailTags?: SesFullApiSchemaMessageTagList;
  ConfigurationSetName?: string;
  EndpointId?: string;
  TenantName?: string;
  ListManagementOptions?: SesFullApiSchemaListManagementOptions;
};
  "ses:SendEmail": {
  Source: string;
  Destination: SesFullApiSchemaDestination2;
  Message: SesFullApiSchemaMessage;
  ReplyToAddresses?: SesFullApiSchemaAddressList;
  ReturnPath?: string;
  SourceArn?: string;
  ReturnPathArn?: string;
  Tags?: SesFullApiSchemaMessageTagList2;
  ConfigurationSetName?: string;
};
  "ses:SendRawEmail": {
  Source?: string;
  Destinations?: SesFullApiSchemaAddressList;
  RawMessage: SesFullApiSchemaRawMessage;
  FromArn?: string;
  SourceArn?: string;
  ReturnPathArn?: string;
  Tags?: SesFullApiSchemaMessageTagList2;
  ConfigurationSetName?: string;
};
  "ses:SendTemplatedEmail": {
  Source: string;
  Destination: SesFullApiSchemaDestination2;
  ReplyToAddresses?: SesFullApiSchemaAddressList;
  ReturnPath?: string;
  SourceArn?: string;
  ReturnPathArn?: string;
  Tags?: SesFullApiSchemaMessageTagList2;
  ConfigurationSetName?: string;
  Template: string;
  TemplateArn?: string;
  TemplateData: string;
};
  "ses:SetActiveReceiptRuleSet": {
  RuleSetName?: string;
};
  "ses:SetIdentityDkimEnabled": {
  Identity: string;
  DkimEnabled: boolean;
};
  "ses:SetIdentityFeedbackForwardingEnabled": {
  Identity: string;
  ForwardingEnabled: boolean;
};
  "ses:SetIdentityHeadersInNotificationsEnabled": {
  Identity: string;
  NotificationType: SesFullApiSchemaNotificationType;
  Enabled: boolean;
};
  "ses:SetIdentityMailFromDomain": {
  Identity: string;
  MailFromDomain?: string;
  BehaviorOnMXFailure?: SesFullApiSchemaBehaviorOnMXFailure;
};
  "ses:SetIdentityNotificationTopic": {
  Identity: string;
  NotificationType: SesFullApiSchemaNotificationType;
  SnsTopic?: string;
};
  "ses:SetReceiptRulePosition": {
  RuleSetName: string;
  RuleName: string;
  After?: string;
};
  "sesv2:TagResource": {
  ResourceArn: string;
  Tags: SesFullApiSchemaTagList;
};
  "sesv2:TestRenderEmailTemplate": {
  TemplateData: string;
};
  "ses:TestRenderTemplate": {
  TemplateName: string;
  TemplateData: string;
};
  "sesv2:UntagResource": never;
  "ses:UpdateAccountSendingEnabled": {
  Enabled?: boolean;
};
  "sesv2:UpdateConfigurationSetEventDestination": {
  EventDestination: SesFullApiSchemaEventDestinationDefinition;
};
  "ses:UpdateConfigurationSetEventDestination": {
  ConfigurationSetName: string;
  EventDestination: SesFullApiSchemaEventDestination;
};
  "ses:UpdateConfigurationSetReputationMetricsEnabled": {
  ConfigurationSetName: string;
  Enabled: boolean;
};
  "ses:UpdateConfigurationSetSendingEnabled": {
  ConfigurationSetName: string;
  Enabled: boolean;
};
  "ses:UpdateConfigurationSetTrackingOptions": {
  ConfigurationSetName: string;
  TrackingOptions: SesFullApiSchemaTrackingOptions2;
};
  "sesv2:UpdateContact": {
  TopicPreferences?: SesFullApiSchemaTopicPreferenceList;
  UnsubscribeAll?: boolean;
  AttributesData?: string;
};
  "sesv2:UpdateContactList": {
  Topics?: SesFullApiSchemaTopics;
  Description?: string;
};
  "sesv2:UpdateCustomVerificationEmailTemplate": {
  FromEmailAddress: string;
  TemplateSubject: string;
  TemplateContent: string;
  SuccessRedirectionURL: string;
  FailureRedirectionURL: string;
};
  "ses:UpdateCustomVerificationEmailTemplate": {
  TemplateName: string;
  FromEmailAddress?: string;
  TemplateSubject?: string;
  TemplateContent?: string;
  SuccessRedirectionURL?: string;
  FailureRedirectionURL?: string;
};
  "sesv2:UpdateEmailIdentityPolicy": {
  Policy: string;
};
  "sesv2:UpdateEmailTemplate": {
  TemplateContent: SesFullApiSchemaEmailTemplateContent;
};
  "ses:UpdateReceiptRule": {
  RuleSetName: string;
  Rule: SesFullApiSchemaReceiptRule;
};
  "sesv2:UpdateReputationEntityCustomerManagedStatus": {
  SendingStatus: SesFullApiSchemaSendingStatus;
};
  "sesv2:UpdateReputationEntityPolicy": {
  ReputationEntityPolicy: string;
};
  "ses:UpdateTemplate": {
  Template: SesFullApiSchemaTemplate;
};
  "ses:VerifyDomainDkim": {
  Domain: string;
};
  "ses:VerifyDomainIdentity": {
  Domain: string;
};
  "ses:VerifyEmailAddress": {
  EmailAddress: string;
};
  "ses:VerifyEmailIdentity": {
  EmailAddress: string;
};
}

export interface SesFullApiOperationRequestBodyRequiredMap {
  "sesv2:BatchGetMetricData": true;
  "sesv2:CancelExportJob": false;
  "ses:CloneReceiptRuleSet": true;
  "sesv2:CreateConfigurationSet": true;
  "sesv2:CreateConfigurationSetEventDestination": true;
  "ses:CreateConfigurationSetEventDestination": true;
  "ses:CreateConfigurationSet": true;
  "ses:CreateConfigurationSetTrackingOptions": true;
  "sesv2:CreateContact": true;
  "sesv2:CreateContactList": true;
  "sesv2:CreateCustomVerificationEmailTemplate": true;
  "ses:CreateCustomVerificationEmailTemplate": true;
  "sesv2:CreateDedicatedIpPool": true;
  "sesv2:CreateDeliverabilityTestReport": true;
  "sesv2:CreateEmailIdentity": true;
  "sesv2:CreateEmailIdentityPolicy": true;
  "sesv2:CreateEmailTemplate": true;
  "sesv2:CreateExportJob": true;
  "sesv2:CreateImportJob": true;
  "sesv2:CreateMultiRegionEndpoint": true;
  "ses:CreateReceiptFilter": true;
  "ses:CreateReceiptRule": true;
  "ses:CreateReceiptRuleSet": true;
  "ses:CreateTemplate": true;
  "sesv2:CreateTenant": true;
  "sesv2:CreateTenantResourceAssociation": true;
  "sesv2:DeleteConfigurationSet": false;
  "sesv2:DeleteConfigurationSetEventDestination": false;
  "ses:DeleteConfigurationSetEventDestination": true;
  "ses:DeleteConfigurationSet": true;
  "ses:DeleteConfigurationSetTrackingOptions": true;
  "sesv2:DeleteContact": false;
  "sesv2:DeleteContactList": false;
  "sesv2:DeleteCustomVerificationEmailTemplate": false;
  "ses:DeleteCustomVerificationEmailTemplate": true;
  "sesv2:DeleteDedicatedIpPool": false;
  "sesv2:DeleteEmailIdentity": false;
  "sesv2:DeleteEmailIdentityPolicy": false;
  "sesv2:DeleteEmailTemplate": false;
  "ses:DeleteIdentity": true;
  "ses:DeleteIdentityPolicy": true;
  "sesv2:DeleteMultiRegionEndpoint": false;
  "ses:DeleteReceiptFilter": true;
  "ses:DeleteReceiptRule": true;
  "ses:DeleteReceiptRuleSet": true;
  "sesv2:DeleteSuppressedDestination": false;
  "ses:DeleteTemplate": true;
  "sesv2:DeleteTenant": true;
  "sesv2:DeleteTenantResourceAssociation": true;
  "ses:DeleteVerifiedEmailAddress": true;
  "ses:DescribeActiveReceiptRuleSet": false;
  "ses:DescribeConfigurationSet": true;
  "ses:DescribeReceiptRule": true;
  "ses:DescribeReceiptRuleSet": true;
  "sesv2:GetAccount": false;
  "ses:GetAccountSendingEnabled": false;
  "sesv2:GetBlacklistReports": false;
  "sesv2:GetConfigurationSet": false;
  "sesv2:GetConfigurationSetEventDestinations": false;
  "sesv2:GetContact": false;
  "sesv2:GetContactList": false;
  "sesv2:GetCustomVerificationEmailTemplate": false;
  "ses:GetCustomVerificationEmailTemplate": true;
  "sesv2:GetDedicatedIp": false;
  "sesv2:GetDedicatedIpPool": false;
  "sesv2:GetDedicatedIps": false;
  "sesv2:GetDeliverabilityDashboardOptions": false;
  "sesv2:GetDeliverabilityTestReport": false;
  "sesv2:GetDomainDeliverabilityCampaign": false;
  "sesv2:GetDomainStatisticsReport": false;
  "sesv2:GetEmailAddressInsights": true;
  "sesv2:GetEmailIdentity": false;
  "sesv2:GetEmailIdentityPolicies": false;
  "sesv2:GetEmailTemplate": false;
  "sesv2:GetExportJob": false;
  "ses:GetIdentityDkimAttributes": true;
  "ses:GetIdentityMailFromDomainAttributes": true;
  "ses:GetIdentityNotificationAttributes": true;
  "ses:GetIdentityPolicies": true;
  "ses:GetIdentityVerificationAttributes": true;
  "sesv2:GetImportJob": false;
  "sesv2:GetMessageInsights": false;
  "sesv2:GetMultiRegionEndpoint": false;
  "sesv2:GetReputationEntity": false;
  "ses:GetSendQuota": false;
  "ses:GetSendStatistics": false;
  "sesv2:GetSuppressedDestination": false;
  "ses:GetTemplate": true;
  "sesv2:GetTenant": true;
  "sesv2:ListConfigurationSets": false;
  "ses:ListConfigurationSets": false;
  "sesv2:ListContactLists": false;
  "sesv2:ListContacts": false;
  "sesv2:ListCustomVerificationEmailTemplates": false;
  "ses:ListCustomVerificationEmailTemplates": false;
  "sesv2:ListDedicatedIpPools": false;
  "sesv2:ListDeliverabilityTestReports": false;
  "sesv2:ListDomainDeliverabilityCampaigns": false;
  "sesv2:ListEmailIdentities": false;
  "sesv2:ListEmailTemplates": false;
  "sesv2:ListExportJobs": false;
  "ses:ListIdentities": false;
  "ses:ListIdentityPolicies": true;
  "sesv2:ListImportJobs": false;
  "sesv2:ListMultiRegionEndpoints": false;
  "ses:ListReceiptFilters": false;
  "ses:ListReceiptRuleSets": false;
  "sesv2:ListRecommendations": false;
  "sesv2:ListReputationEntities": false;
  "sesv2:ListResourceTenants": true;
  "sesv2:ListSuppressedDestinations": false;
  "sesv2:ListTagsForResource": false;
  "ses:ListTemplates": false;
  "sesv2:ListTenantResources": true;
  "sesv2:ListTenants": false;
  "ses:ListVerifiedEmailAddresses": false;
  "sesv2:PutAccountDedicatedIpWarmupAttributes": false;
  "sesv2:PutAccountDetails": true;
  "sesv2:PutAccountSendingAttributes": false;
  "sesv2:PutAccountSuppressionAttributes": false;
  "sesv2:PutAccountVdmAttributes": true;
  "sesv2:PutConfigurationSetArchivingOptions": false;
  "sesv2:PutConfigurationSetDeliveryOptions": false;
  "ses:PutConfigurationSetDeliveryOptions": true;
  "sesv2:PutConfigurationSetReputationOptions": false;
  "sesv2:PutConfigurationSetSendingOptions": false;
  "sesv2:PutConfigurationSetSuppressionOptions": false;
  "sesv2:PutConfigurationSetTrackingOptions": false;
  "sesv2:PutConfigurationSetVdmOptions": false;
  "sesv2:PutDedicatedIpInPool": true;
  "sesv2:PutDedicatedIpPoolScalingAttributes": true;
  "sesv2:PutDedicatedIpWarmupAttributes": true;
  "sesv2:PutDeliverabilityDashboardOption": true;
  "sesv2:PutEmailIdentityConfigurationSetAttributes": false;
  "sesv2:PutEmailIdentityDkimAttributes": false;
  "sesv2:PutEmailIdentityDkimSigningAttributes": true;
  "sesv2:PutEmailIdentityFeedbackAttributes": false;
  "sesv2:PutEmailIdentityMailFromAttributes": false;
  "ses:PutIdentityPolicy": true;
  "sesv2:PutSuppressedDestination": true;
  "sesv2:PutTenantSuppressionAttributes": true;
  "ses:ReorderReceiptRuleSet": true;
  "ses:SendBounce": true;
  "sesv2:SendBulkEmail": true;
  "ses:SendBulkTemplatedEmail": true;
  "sesv2:SendCustomVerificationEmail": true;
  "ses:SendCustomVerificationEmail": true;
  "sesv2:SendEmail": true;
  "ses:SendEmail": true;
  "ses:SendRawEmail": true;
  "ses:SendTemplatedEmail": true;
  "ses:SetActiveReceiptRuleSet": false;
  "ses:SetIdentityDkimEnabled": true;
  "ses:SetIdentityFeedbackForwardingEnabled": true;
  "ses:SetIdentityHeadersInNotificationsEnabled": true;
  "ses:SetIdentityMailFromDomain": true;
  "ses:SetIdentityNotificationTopic": true;
  "ses:SetReceiptRulePosition": true;
  "sesv2:TagResource": true;
  "sesv2:TestRenderEmailTemplate": true;
  "ses:TestRenderTemplate": true;
  "sesv2:UntagResource": false;
  "ses:UpdateAccountSendingEnabled": false;
  "sesv2:UpdateConfigurationSetEventDestination": true;
  "ses:UpdateConfigurationSetEventDestination": true;
  "ses:UpdateConfigurationSetReputationMetricsEnabled": true;
  "ses:UpdateConfigurationSetSendingEnabled": true;
  "ses:UpdateConfigurationSetTrackingOptions": true;
  "sesv2:UpdateContact": false;
  "sesv2:UpdateContactList": false;
  "sesv2:UpdateCustomVerificationEmailTemplate": true;
  "ses:UpdateCustomVerificationEmailTemplate": true;
  "sesv2:UpdateEmailIdentityPolicy": true;
  "sesv2:UpdateEmailTemplate": true;
  "ses:UpdateReceiptRule": true;
  "sesv2:UpdateReputationEntityCustomerManagedStatus": true;
  "sesv2:UpdateReputationEntityPolicy": true;
  "ses:UpdateTemplate": true;
  "ses:VerifyDomainDkim": true;
  "ses:VerifyDomainIdentity": true;
  "ses:VerifyEmailAddress": true;
  "ses:VerifyEmailIdentity": true;
}

export interface SesFullApiOperationResponseMap {
  "sesv2:BatchGetMetricData": SesFullApiSchemaBatchGetMetricDataResponse;
  "sesv2:CancelExportJob": SesFullApiSchemaCancelExportJobResponse;
  "ses:CloneReceiptRuleSet": SesFullApiSchemaCloneReceiptRuleSetResponse;
  "sesv2:CreateConfigurationSet": SesFullApiSchemaCreateConfigurationSetResponse;
  "sesv2:CreateConfigurationSetEventDestination": SesFullApiSchemaCreateConfigurationSetEventDestinationResponse;
  "ses:CreateConfigurationSetEventDestination": SesFullApiSchemaCreateConfigurationSetEventDestinationResponse2;
  "ses:CreateConfigurationSet": SesFullApiSchemaCreateConfigurationSetResponse2;
  "ses:CreateConfigurationSetTrackingOptions": SesFullApiSchemaCreateConfigurationSetTrackingOptionsResponse;
  "sesv2:CreateContact": SesFullApiSchemaCreateContactResponse;
  "sesv2:CreateContactList": SesFullApiSchemaCreateContactListResponse;
  "sesv2:CreateCustomVerificationEmailTemplate": SesFullApiSchemaCreateCustomVerificationEmailTemplateResponse;
  "ses:CreateCustomVerificationEmailTemplate": void;
  "sesv2:CreateDedicatedIpPool": SesFullApiSchemaCreateDedicatedIpPoolResponse;
  "sesv2:CreateDeliverabilityTestReport": SesFullApiSchemaCreateDeliverabilityTestReportResponse;
  "sesv2:CreateEmailIdentity": SesFullApiSchemaCreateEmailIdentityResponse;
  "sesv2:CreateEmailIdentityPolicy": SesFullApiSchemaCreateEmailIdentityPolicyResponse;
  "sesv2:CreateEmailTemplate": SesFullApiSchemaCreateEmailTemplateResponse;
  "sesv2:CreateExportJob": SesFullApiSchemaCreateExportJobResponse;
  "sesv2:CreateImportJob": SesFullApiSchemaCreateImportJobResponse;
  "sesv2:CreateMultiRegionEndpoint": SesFullApiSchemaCreateMultiRegionEndpointResponse;
  "ses:CreateReceiptFilter": SesFullApiSchemaCreateReceiptFilterResponse;
  "ses:CreateReceiptRule": SesFullApiSchemaCreateReceiptRuleResponse;
  "ses:CreateReceiptRuleSet": SesFullApiSchemaCreateReceiptRuleSetResponse;
  "ses:CreateTemplate": SesFullApiSchemaCreateTemplateResponse;
  "sesv2:CreateTenant": SesFullApiSchemaCreateTenantResponse;
  "sesv2:CreateTenantResourceAssociation": SesFullApiSchemaCreateTenantResourceAssociationResponse;
  "sesv2:DeleteConfigurationSet": SesFullApiSchemaDeleteConfigurationSetResponse;
  "sesv2:DeleteConfigurationSetEventDestination": SesFullApiSchemaDeleteConfigurationSetEventDestinationResponse;
  "ses:DeleteConfigurationSetEventDestination": SesFullApiSchemaDeleteConfigurationSetEventDestinationResponse2;
  "ses:DeleteConfigurationSet": SesFullApiSchemaDeleteConfigurationSetResponse2;
  "ses:DeleteConfigurationSetTrackingOptions": SesFullApiSchemaDeleteConfigurationSetTrackingOptionsResponse;
  "sesv2:DeleteContact": SesFullApiSchemaDeleteContactResponse;
  "sesv2:DeleteContactList": SesFullApiSchemaDeleteContactListResponse;
  "sesv2:DeleteCustomVerificationEmailTemplate": SesFullApiSchemaDeleteCustomVerificationEmailTemplateResponse;
  "ses:DeleteCustomVerificationEmailTemplate": void;
  "sesv2:DeleteDedicatedIpPool": SesFullApiSchemaDeleteDedicatedIpPoolResponse;
  "sesv2:DeleteEmailIdentity": SesFullApiSchemaDeleteEmailIdentityResponse;
  "sesv2:DeleteEmailIdentityPolicy": SesFullApiSchemaDeleteEmailIdentityPolicyResponse;
  "sesv2:DeleteEmailTemplate": SesFullApiSchemaDeleteEmailTemplateResponse;
  "ses:DeleteIdentity": SesFullApiSchemaDeleteIdentityResponse;
  "ses:DeleteIdentityPolicy": SesFullApiSchemaDeleteIdentityPolicyResponse;
  "sesv2:DeleteMultiRegionEndpoint": SesFullApiSchemaDeleteMultiRegionEndpointResponse;
  "ses:DeleteReceiptFilter": SesFullApiSchemaDeleteReceiptFilterResponse;
  "ses:DeleteReceiptRule": SesFullApiSchemaDeleteReceiptRuleResponse;
  "ses:DeleteReceiptRuleSet": SesFullApiSchemaDeleteReceiptRuleSetResponse;
  "sesv2:DeleteSuppressedDestination": SesFullApiSchemaDeleteSuppressedDestinationResponse;
  "ses:DeleteTemplate": SesFullApiSchemaDeleteTemplateResponse;
  "sesv2:DeleteTenant": SesFullApiSchemaDeleteTenantResponse;
  "sesv2:DeleteTenantResourceAssociation": SesFullApiSchemaDeleteTenantResourceAssociationResponse;
  "ses:DeleteVerifiedEmailAddress": void;
  "ses:DescribeActiveReceiptRuleSet": SesFullApiSchemaDescribeActiveReceiptRuleSetResponse;
  "ses:DescribeConfigurationSet": SesFullApiSchemaDescribeConfigurationSetResponse;
  "ses:DescribeReceiptRule": SesFullApiSchemaDescribeReceiptRuleResponse;
  "ses:DescribeReceiptRuleSet": SesFullApiSchemaDescribeReceiptRuleSetResponse;
  "sesv2:GetAccount": SesFullApiSchemaGetAccountResponse;
  "ses:GetAccountSendingEnabled": SesFullApiSchemaGetAccountSendingEnabledResponse;
  "sesv2:GetBlacklistReports": SesFullApiSchemaGetBlacklistReportsResponse;
  "sesv2:GetConfigurationSet": SesFullApiSchemaGetConfigurationSetResponse;
  "sesv2:GetConfigurationSetEventDestinations": SesFullApiSchemaGetConfigurationSetEventDestinationsResponse;
  "sesv2:GetContact": SesFullApiSchemaGetContactResponse;
  "sesv2:GetContactList": SesFullApiSchemaGetContactListResponse;
  "sesv2:GetCustomVerificationEmailTemplate": SesFullApiSchemaGetCustomVerificationEmailTemplateResponse;
  "ses:GetCustomVerificationEmailTemplate": SesFullApiSchemaGetCustomVerificationEmailTemplateResponse2;
  "sesv2:GetDedicatedIp": SesFullApiSchemaGetDedicatedIpResponse;
  "sesv2:GetDedicatedIpPool": SesFullApiSchemaGetDedicatedIpPoolResponse;
  "sesv2:GetDedicatedIps": SesFullApiSchemaGetDedicatedIpsResponse;
  "sesv2:GetDeliverabilityDashboardOptions": SesFullApiSchemaGetDeliverabilityDashboardOptionsResponse;
  "sesv2:GetDeliverabilityTestReport": SesFullApiSchemaGetDeliverabilityTestReportResponse;
  "sesv2:GetDomainDeliverabilityCampaign": SesFullApiSchemaGetDomainDeliverabilityCampaignResponse;
  "sesv2:GetDomainStatisticsReport": SesFullApiSchemaGetDomainStatisticsReportResponse;
  "sesv2:GetEmailAddressInsights": SesFullApiSchemaGetEmailAddressInsightsResponse;
  "sesv2:GetEmailIdentity": SesFullApiSchemaGetEmailIdentityResponse;
  "sesv2:GetEmailIdentityPolicies": SesFullApiSchemaGetEmailIdentityPoliciesResponse;
  "sesv2:GetEmailTemplate": SesFullApiSchemaGetEmailTemplateResponse;
  "sesv2:GetExportJob": SesFullApiSchemaGetExportJobResponse;
  "ses:GetIdentityDkimAttributes": SesFullApiSchemaGetIdentityDkimAttributesResponse;
  "ses:GetIdentityMailFromDomainAttributes": SesFullApiSchemaGetIdentityMailFromDomainAttributesResponse;
  "ses:GetIdentityNotificationAttributes": SesFullApiSchemaGetIdentityNotificationAttributesResponse;
  "ses:GetIdentityPolicies": SesFullApiSchemaGetIdentityPoliciesResponse;
  "ses:GetIdentityVerificationAttributes": SesFullApiSchemaGetIdentityVerificationAttributesResponse;
  "sesv2:GetImportJob": SesFullApiSchemaGetImportJobResponse;
  "sesv2:GetMessageInsights": SesFullApiSchemaGetMessageInsightsResponse;
  "sesv2:GetMultiRegionEndpoint": SesFullApiSchemaGetMultiRegionEndpointResponse;
  "sesv2:GetReputationEntity": SesFullApiSchemaGetReputationEntityResponse;
  "ses:GetSendQuota": SesFullApiSchemaGetSendQuotaResponse;
  "ses:GetSendStatistics": SesFullApiSchemaGetSendStatisticsResponse;
  "sesv2:GetSuppressedDestination": SesFullApiSchemaGetSuppressedDestinationResponse;
  "ses:GetTemplate": SesFullApiSchemaGetTemplateResponse;
  "sesv2:GetTenant": SesFullApiSchemaGetTenantResponse;
  "sesv2:ListConfigurationSets": SesFullApiSchemaListConfigurationSetsResponse;
  "ses:ListConfigurationSets": SesFullApiSchemaListConfigurationSetsResponse2;
  "sesv2:ListContactLists": SesFullApiSchemaListContactListsResponse;
  "sesv2:ListContacts": SesFullApiSchemaListContactsResponse;
  "sesv2:ListCustomVerificationEmailTemplates": SesFullApiSchemaListCustomVerificationEmailTemplatesResponse;
  "ses:ListCustomVerificationEmailTemplates": SesFullApiSchemaListCustomVerificationEmailTemplatesResponse2;
  "sesv2:ListDedicatedIpPools": SesFullApiSchemaListDedicatedIpPoolsResponse;
  "sesv2:ListDeliverabilityTestReports": SesFullApiSchemaListDeliverabilityTestReportsResponse;
  "sesv2:ListDomainDeliverabilityCampaigns": SesFullApiSchemaListDomainDeliverabilityCampaignsResponse;
  "sesv2:ListEmailIdentities": SesFullApiSchemaListEmailIdentitiesResponse;
  "sesv2:ListEmailTemplates": SesFullApiSchemaListEmailTemplatesResponse;
  "sesv2:ListExportJobs": SesFullApiSchemaListExportJobsResponse;
  "ses:ListIdentities": SesFullApiSchemaListIdentitiesResponse;
  "ses:ListIdentityPolicies": SesFullApiSchemaListIdentityPoliciesResponse;
  "sesv2:ListImportJobs": SesFullApiSchemaListImportJobsResponse;
  "sesv2:ListMultiRegionEndpoints": SesFullApiSchemaListMultiRegionEndpointsResponse;
  "ses:ListReceiptFilters": SesFullApiSchemaListReceiptFiltersResponse;
  "ses:ListReceiptRuleSets": SesFullApiSchemaListReceiptRuleSetsResponse;
  "sesv2:ListRecommendations": SesFullApiSchemaListRecommendationsResponse;
  "sesv2:ListReputationEntities": SesFullApiSchemaListReputationEntitiesResponse;
  "sesv2:ListResourceTenants": SesFullApiSchemaListResourceTenantsResponse;
  "sesv2:ListSuppressedDestinations": SesFullApiSchemaListSuppressedDestinationsResponse;
  "sesv2:ListTagsForResource": SesFullApiSchemaListTagsForResourceResponse;
  "ses:ListTemplates": SesFullApiSchemaListTemplatesResponse;
  "sesv2:ListTenantResources": SesFullApiSchemaListTenantResourcesResponse;
  "sesv2:ListTenants": SesFullApiSchemaListTenantsResponse;
  "ses:ListVerifiedEmailAddresses": SesFullApiSchemaListVerifiedEmailAddressesResponse;
  "sesv2:PutAccountDedicatedIpWarmupAttributes": SesFullApiSchemaPutAccountDedicatedIpWarmupAttributesResponse;
  "sesv2:PutAccountDetails": SesFullApiSchemaPutAccountDetailsResponse;
  "sesv2:PutAccountSendingAttributes": SesFullApiSchemaPutAccountSendingAttributesResponse;
  "sesv2:PutAccountSuppressionAttributes": SesFullApiSchemaPutAccountSuppressionAttributesResponse;
  "sesv2:PutAccountVdmAttributes": SesFullApiSchemaPutAccountVdmAttributesResponse;
  "sesv2:PutConfigurationSetArchivingOptions": SesFullApiSchemaPutConfigurationSetArchivingOptionsResponse;
  "sesv2:PutConfigurationSetDeliveryOptions": SesFullApiSchemaPutConfigurationSetDeliveryOptionsResponse;
  "ses:PutConfigurationSetDeliveryOptions": SesFullApiSchemaPutConfigurationSetDeliveryOptionsResponse2;
  "sesv2:PutConfigurationSetReputationOptions": SesFullApiSchemaPutConfigurationSetReputationOptionsResponse;
  "sesv2:PutConfigurationSetSendingOptions": SesFullApiSchemaPutConfigurationSetSendingOptionsResponse;
  "sesv2:PutConfigurationSetSuppressionOptions": SesFullApiSchemaPutConfigurationSetSuppressionOptionsResponse;
  "sesv2:PutConfigurationSetTrackingOptions": SesFullApiSchemaPutConfigurationSetTrackingOptionsResponse;
  "sesv2:PutConfigurationSetVdmOptions": SesFullApiSchemaPutConfigurationSetVdmOptionsResponse;
  "sesv2:PutDedicatedIpInPool": SesFullApiSchemaPutDedicatedIpInPoolResponse;
  "sesv2:PutDedicatedIpPoolScalingAttributes": SesFullApiSchemaPutDedicatedIpPoolScalingAttributesResponse;
  "sesv2:PutDedicatedIpWarmupAttributes": SesFullApiSchemaPutDedicatedIpWarmupAttributesResponse;
  "sesv2:PutDeliverabilityDashboardOption": SesFullApiSchemaPutDeliverabilityDashboardOptionResponse;
  "sesv2:PutEmailIdentityConfigurationSetAttributes": SesFullApiSchemaPutEmailIdentityConfigurationSetAttributesResponse;
  "sesv2:PutEmailIdentityDkimAttributes": SesFullApiSchemaPutEmailIdentityDkimAttributesResponse;
  "sesv2:PutEmailIdentityDkimSigningAttributes": SesFullApiSchemaPutEmailIdentityDkimSigningAttributesResponse;
  "sesv2:PutEmailIdentityFeedbackAttributes": SesFullApiSchemaPutEmailIdentityFeedbackAttributesResponse;
  "sesv2:PutEmailIdentityMailFromAttributes": SesFullApiSchemaPutEmailIdentityMailFromAttributesResponse;
  "ses:PutIdentityPolicy": SesFullApiSchemaPutIdentityPolicyResponse;
  "sesv2:PutSuppressedDestination": SesFullApiSchemaPutSuppressedDestinationResponse;
  "sesv2:PutTenantSuppressionAttributes": SesFullApiSchemaPutTenantSuppressionAttributesResponse;
  "ses:ReorderReceiptRuleSet": SesFullApiSchemaReorderReceiptRuleSetResponse;
  "ses:SendBounce": SesFullApiSchemaSendBounceResponse;
  "sesv2:SendBulkEmail": SesFullApiSchemaSendBulkEmailResponse;
  "ses:SendBulkTemplatedEmail": SesFullApiSchemaSendBulkTemplatedEmailResponse;
  "sesv2:SendCustomVerificationEmail": SesFullApiSchemaSendCustomVerificationEmailResponse;
  "ses:SendCustomVerificationEmail": SesFullApiSchemaSendCustomVerificationEmailResponse2;
  "sesv2:SendEmail": SesFullApiSchemaSendEmailResponse;
  "ses:SendEmail": SesFullApiSchemaSendEmailResponse2;
  "ses:SendRawEmail": SesFullApiSchemaSendRawEmailResponse;
  "ses:SendTemplatedEmail": SesFullApiSchemaSendTemplatedEmailResponse;
  "ses:SetActiveReceiptRuleSet": SesFullApiSchemaSetActiveReceiptRuleSetResponse;
  "ses:SetIdentityDkimEnabled": SesFullApiSchemaSetIdentityDkimEnabledResponse;
  "ses:SetIdentityFeedbackForwardingEnabled": SesFullApiSchemaSetIdentityFeedbackForwardingEnabledResponse;
  "ses:SetIdentityHeadersInNotificationsEnabled": SesFullApiSchemaSetIdentityHeadersInNotificationsEnabledResponse;
  "ses:SetIdentityMailFromDomain": SesFullApiSchemaSetIdentityMailFromDomainResponse;
  "ses:SetIdentityNotificationTopic": SesFullApiSchemaSetIdentityNotificationTopicResponse;
  "ses:SetReceiptRulePosition": SesFullApiSchemaSetReceiptRulePositionResponse;
  "sesv2:TagResource": SesFullApiSchemaTagResourceResponse;
  "sesv2:TestRenderEmailTemplate": SesFullApiSchemaTestRenderEmailTemplateResponse;
  "ses:TestRenderTemplate": SesFullApiSchemaTestRenderTemplateResponse;
  "sesv2:UntagResource": SesFullApiSchemaUntagResourceResponse;
  "ses:UpdateAccountSendingEnabled": void;
  "sesv2:UpdateConfigurationSetEventDestination": SesFullApiSchemaUpdateConfigurationSetEventDestinationResponse;
  "ses:UpdateConfigurationSetEventDestination": SesFullApiSchemaUpdateConfigurationSetEventDestinationResponse2;
  "ses:UpdateConfigurationSetReputationMetricsEnabled": void;
  "ses:UpdateConfigurationSetSendingEnabled": void;
  "ses:UpdateConfigurationSetTrackingOptions": SesFullApiSchemaUpdateConfigurationSetTrackingOptionsResponse;
  "sesv2:UpdateContact": SesFullApiSchemaUpdateContactResponse;
  "sesv2:UpdateContactList": SesFullApiSchemaUpdateContactListResponse;
  "sesv2:UpdateCustomVerificationEmailTemplate": SesFullApiSchemaUpdateCustomVerificationEmailTemplateResponse;
  "ses:UpdateCustomVerificationEmailTemplate": void;
  "sesv2:UpdateEmailIdentityPolicy": SesFullApiSchemaUpdateEmailIdentityPolicyResponse;
  "sesv2:UpdateEmailTemplate": SesFullApiSchemaUpdateEmailTemplateResponse;
  "ses:UpdateReceiptRule": SesFullApiSchemaUpdateReceiptRuleResponse;
  "sesv2:UpdateReputationEntityCustomerManagedStatus": SesFullApiSchemaUpdateReputationEntityCustomerManagedStatusResponse;
  "sesv2:UpdateReputationEntityPolicy": SesFullApiSchemaUpdateReputationEntityPolicyResponse;
  "ses:UpdateTemplate": SesFullApiSchemaUpdateTemplateResponse;
  "ses:VerifyDomainDkim": SesFullApiSchemaVerifyDomainDkimResponse;
  "ses:VerifyDomainIdentity": SesFullApiSchemaVerifyDomainIdentityResponse;
  "ses:VerifyEmailAddress": void;
  "ses:VerifyEmailIdentity": SesFullApiSchemaVerifyEmailIdentityResponse;
}
