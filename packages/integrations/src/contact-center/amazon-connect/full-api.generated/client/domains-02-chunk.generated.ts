// Generated endpoint chunk for AmazonConnectFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonConnectGeneratedOperationCaller,
  AmazonConnectFullApiOperationArgs,
  AmazonConnectFullApiOperationInput,
  AmazonConnectFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonConnectFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonConnectFullApiDomains02OperationKeys = [
  "customer-profiles:GetCalculatedAttributeDefinition",
  "customer-profiles:GetCalculatedAttributeForProfile",
  "customer-profiles:GetDomain",
  "customer-profiles:GetDomainLayout",
  "customer-profiles:GetDomainObjectType",
  "customer-profiles:GetEventStream",
  "customer-profiles:GetEventTrigger",
  "customer-profiles:GetIdentityResolutionJob",
  "customer-profiles:GetIntegration",
  "customer-profiles:GetMatches",
  "customer-profiles:GetObjectTypeAttributeStatistics",
  "customer-profiles:GetProfileHistoryRecord",
  "customer-profiles:GetProfileObjectType",
  "customer-profiles:GetProfileRecommendations",
  "customer-profiles:GetRecommender",
  "customer-profiles:GetRecommenderFilter",
  "customer-profiles:GetRecommenderSchema",
  "customer-profiles:GetSegmentDefinition",
  "customer-profiles:GetSegmentEstimate",
  "customer-profiles:GetSegmentMembership",
  "customer-profiles:GetSegmentSnapshot",
  "customer-profiles:GetSimilarProfiles",
  "customer-profiles:GetUploadJob",
  "customer-profiles:GetUploadJobPath",
  "customer-profiles:GetWorkflow",
  "customer-profiles:GetWorkflowSteps",
  "customer-profiles:ListCalculatedAttributeDefinitions",
  "customer-profiles:ListCalculatedAttributesForProfile",
  "customer-profiles:ListDomainLayouts",
  "customer-profiles:ListDomainObjectTypes",
  "customer-profiles:ListDomains",
  "customer-profiles:ListEventStreams",
  "customer-profiles:ListEventTriggers",
  "customer-profiles:ListIdentityResolutionJobs",
  "customer-profiles:ListIntegrations",
  "customer-profiles:ListObjectTypeAttributeValues",
  "customer-profiles:ListObjectTypeAttributes",
  "customer-profiles:ListProfileAttributeValues",
  "customer-profiles:ListProfileHistoryRecords",
  "customer-profiles:ListProfileObjectTypes",
  "customer-profiles:ListProfileObjects",
  "customer-profiles:ListRecommenderFilters",
  "customer-profiles:ListRecommenderSchemas",
  "customer-profiles:ListRecommenders",
  "customer-profiles:ListRuleBasedMatches",
  "customer-profiles:ListSegmentDefinitions",
  "customer-profiles:ListUploadJobs",
  "customer-profiles:ListWorkflows",
  "customer-profiles:MergeProfiles",
  "customer-profiles:PutDomainObjectType",
  "customer-profiles:PutIntegration",
  "customer-profiles:PutProfileObject",
  "customer-profiles:PutProfileObjectType",
  "customer-profiles:SearchProfiles",
  "customer-profiles:StartRecommender",
  "customer-profiles:StartUploadJob",
  "customer-profiles:StopRecommender",
  "customer-profiles:StopUploadJob",
  "customer-profiles:UpdateCalculatedAttributeDefinition",
  "customer-profiles:UpdateDomain",
  "customer-profiles:UpdateDomainLayout",
  "customer-profiles:UpdateEventTrigger",
  "customer-profiles:UpdateProfile",
  "customer-profiles:UpdateRecommender"
] as const;
export type AmazonConnectFullApiDomains02OperationKey = typeof AmazonConnectFullApiDomains02OperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiDomains02OperationPathParamMap {
  "customer-profiles:GetCalculatedAttributeDefinition": { "DomainName": AmazonConnectFullApiPathParamValue; "CalculatedAttributeName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetCalculatedAttributeForProfile": { "DomainName": AmazonConnectFullApiPathParamValue; "ProfileId": AmazonConnectFullApiPathParamValue; "CalculatedAttributeName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetDomain": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetDomainLayout": { "DomainName": AmazonConnectFullApiPathParamValue; "LayoutDefinitionName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetDomainObjectType": { "DomainName": AmazonConnectFullApiPathParamValue; "ObjectTypeName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetEventStream": { "DomainName": AmazonConnectFullApiPathParamValue; "EventStreamName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetEventTrigger": { "DomainName": AmazonConnectFullApiPathParamValue; "EventTriggerName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetIdentityResolutionJob": { "DomainName": AmazonConnectFullApiPathParamValue; "JobId": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetIntegration": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetMatches": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetObjectTypeAttributeStatistics": { "DomainName": AmazonConnectFullApiPathParamValue; "ObjectTypeName": AmazonConnectFullApiPathParamValue; "AttributeName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetProfileHistoryRecord": { "DomainName": AmazonConnectFullApiPathParamValue; "ProfileId": AmazonConnectFullApiPathParamValue; "Id": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetProfileObjectType": { "DomainName": AmazonConnectFullApiPathParamValue; "ObjectTypeName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetProfileRecommendations": { "DomainName": AmazonConnectFullApiPathParamValue; "ProfileId": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetRecommender": { "DomainName": AmazonConnectFullApiPathParamValue; "RecommenderName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetRecommenderFilter": { "DomainName": AmazonConnectFullApiPathParamValue; "RecommenderFilterName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetRecommenderSchema": { "DomainName": AmazonConnectFullApiPathParamValue; "RecommenderSchemaName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetSegmentDefinition": { "DomainName": AmazonConnectFullApiPathParamValue; "SegmentDefinitionName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetSegmentEstimate": { "DomainName": AmazonConnectFullApiPathParamValue; "EstimateId": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetSegmentMembership": { "DomainName": AmazonConnectFullApiPathParamValue; "SegmentDefinitionName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetSegmentSnapshot": { "DomainName": AmazonConnectFullApiPathParamValue; "SegmentDefinitionName": AmazonConnectFullApiPathParamValue; "SnapshotId": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetSimilarProfiles": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetUploadJob": { "DomainName": AmazonConnectFullApiPathParamValue; "JobId": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetUploadJobPath": { "DomainName": AmazonConnectFullApiPathParamValue; "JobId": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetWorkflow": { "DomainName": AmazonConnectFullApiPathParamValue; "WorkflowId": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetWorkflowSteps": { "DomainName": AmazonConnectFullApiPathParamValue; "WorkflowId": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListCalculatedAttributeDefinitions": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListCalculatedAttributesForProfile": { "DomainName": AmazonConnectFullApiPathParamValue; "ProfileId": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListDomainLayouts": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListDomainObjectTypes": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListDomains": {};
  "customer-profiles:ListEventStreams": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListEventTriggers": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListIdentityResolutionJobs": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListIntegrations": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListObjectTypeAttributeValues": { "DomainName": AmazonConnectFullApiPathParamValue; "ObjectTypeName": AmazonConnectFullApiPathParamValue; "AttributeName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListObjectTypeAttributes": { "DomainName": AmazonConnectFullApiPathParamValue; "ObjectTypeName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListProfileAttributeValues": { "DomainName": AmazonConnectFullApiPathParamValue; "AttributeName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListProfileHistoryRecords": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListProfileObjectTypes": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListProfileObjects": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListRecommenderFilters": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListRecommenderSchemas": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListRecommenders": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListRuleBasedMatches": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListSegmentDefinitions": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListUploadJobs": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListWorkflows": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:MergeProfiles": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:PutDomainObjectType": { "DomainName": AmazonConnectFullApiPathParamValue; "ObjectTypeName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:PutIntegration": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:PutProfileObject": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:PutProfileObjectType": { "DomainName": AmazonConnectFullApiPathParamValue; "ObjectTypeName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:SearchProfiles": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:StartRecommender": { "DomainName": AmazonConnectFullApiPathParamValue; "RecommenderName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:StartUploadJob": { "DomainName": AmazonConnectFullApiPathParamValue; "JobId": AmazonConnectFullApiPathParamValue };
  "customer-profiles:StopRecommender": { "DomainName": AmazonConnectFullApiPathParamValue; "RecommenderName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:StopUploadJob": { "DomainName": AmazonConnectFullApiPathParamValue; "JobId": AmazonConnectFullApiPathParamValue };
  "customer-profiles:UpdateCalculatedAttributeDefinition": { "DomainName": AmazonConnectFullApiPathParamValue; "CalculatedAttributeName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:UpdateDomain": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:UpdateDomainLayout": { "DomainName": AmazonConnectFullApiPathParamValue; "LayoutDefinitionName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:UpdateEventTrigger": { "DomainName": AmazonConnectFullApiPathParamValue; "EventTriggerName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:UpdateProfile": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:UpdateRecommender": { "DomainName": AmazonConnectFullApiPathParamValue; "RecommenderName": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiDomains02OperationRequestMap {
  "customer-profiles:GetCalculatedAttributeDefinition": AmazonConnectFullApiOperationInput<"customer-profiles:GetCalculatedAttributeDefinition">;
  "customer-profiles:GetCalculatedAttributeForProfile": AmazonConnectFullApiOperationInput<"customer-profiles:GetCalculatedAttributeForProfile">;
  "customer-profiles:GetDomain": AmazonConnectFullApiOperationInput<"customer-profiles:GetDomain">;
  "customer-profiles:GetDomainLayout": AmazonConnectFullApiOperationInput<"customer-profiles:GetDomainLayout">;
  "customer-profiles:GetDomainObjectType": AmazonConnectFullApiOperationInput<"customer-profiles:GetDomainObjectType">;
  "customer-profiles:GetEventStream": AmazonConnectFullApiOperationInput<"customer-profiles:GetEventStream">;
  "customer-profiles:GetEventTrigger": AmazonConnectFullApiOperationInput<"customer-profiles:GetEventTrigger">;
  "customer-profiles:GetIdentityResolutionJob": AmazonConnectFullApiOperationInput<"customer-profiles:GetIdentityResolutionJob">;
  "customer-profiles:GetIntegration": AmazonConnectFullApiOperationInput<"customer-profiles:GetIntegration">;
  "customer-profiles:GetMatches": AmazonConnectFullApiOperationInput<"customer-profiles:GetMatches">;
  "customer-profiles:GetObjectTypeAttributeStatistics": AmazonConnectFullApiOperationInput<"customer-profiles:GetObjectTypeAttributeStatistics">;
  "customer-profiles:GetProfileHistoryRecord": AmazonConnectFullApiOperationInput<"customer-profiles:GetProfileHistoryRecord">;
  "customer-profiles:GetProfileObjectType": AmazonConnectFullApiOperationInput<"customer-profiles:GetProfileObjectType">;
  "customer-profiles:GetProfileRecommendations": AmazonConnectFullApiOperationInput<"customer-profiles:GetProfileRecommendations">;
  "customer-profiles:GetRecommender": AmazonConnectFullApiOperationInput<"customer-profiles:GetRecommender">;
  "customer-profiles:GetRecommenderFilter": AmazonConnectFullApiOperationInput<"customer-profiles:GetRecommenderFilter">;
  "customer-profiles:GetRecommenderSchema": AmazonConnectFullApiOperationInput<"customer-profiles:GetRecommenderSchema">;
  "customer-profiles:GetSegmentDefinition": AmazonConnectFullApiOperationInput<"customer-profiles:GetSegmentDefinition">;
  "customer-profiles:GetSegmentEstimate": AmazonConnectFullApiOperationInput<"customer-profiles:GetSegmentEstimate">;
  "customer-profiles:GetSegmentMembership": AmazonConnectFullApiOperationInput<"customer-profiles:GetSegmentMembership">;
  "customer-profiles:GetSegmentSnapshot": AmazonConnectFullApiOperationInput<"customer-profiles:GetSegmentSnapshot">;
  "customer-profiles:GetSimilarProfiles": AmazonConnectFullApiOperationInput<"customer-profiles:GetSimilarProfiles">;
  "customer-profiles:GetUploadJob": AmazonConnectFullApiOperationInput<"customer-profiles:GetUploadJob">;
  "customer-profiles:GetUploadJobPath": AmazonConnectFullApiOperationInput<"customer-profiles:GetUploadJobPath">;
  "customer-profiles:GetWorkflow": AmazonConnectFullApiOperationInput<"customer-profiles:GetWorkflow">;
  "customer-profiles:GetWorkflowSteps": AmazonConnectFullApiOperationInput<"customer-profiles:GetWorkflowSteps">;
  "customer-profiles:ListCalculatedAttributeDefinitions": AmazonConnectFullApiOperationInput<"customer-profiles:ListCalculatedAttributeDefinitions">;
  "customer-profiles:ListCalculatedAttributesForProfile": AmazonConnectFullApiOperationInput<"customer-profiles:ListCalculatedAttributesForProfile">;
  "customer-profiles:ListDomainLayouts": AmazonConnectFullApiOperationInput<"customer-profiles:ListDomainLayouts">;
  "customer-profiles:ListDomainObjectTypes": AmazonConnectFullApiOperationInput<"customer-profiles:ListDomainObjectTypes">;
  "customer-profiles:ListDomains": AmazonConnectFullApiOperationInput<"customer-profiles:ListDomains">;
  "customer-profiles:ListEventStreams": AmazonConnectFullApiOperationInput<"customer-profiles:ListEventStreams">;
  "customer-profiles:ListEventTriggers": AmazonConnectFullApiOperationInput<"customer-profiles:ListEventTriggers">;
  "customer-profiles:ListIdentityResolutionJobs": AmazonConnectFullApiOperationInput<"customer-profiles:ListIdentityResolutionJobs">;
  "customer-profiles:ListIntegrations": AmazonConnectFullApiOperationInput<"customer-profiles:ListIntegrations">;
  "customer-profiles:ListObjectTypeAttributeValues": AmazonConnectFullApiOperationInput<"customer-profiles:ListObjectTypeAttributeValues">;
  "customer-profiles:ListObjectTypeAttributes": AmazonConnectFullApiOperationInput<"customer-profiles:ListObjectTypeAttributes">;
  "customer-profiles:ListProfileAttributeValues": AmazonConnectFullApiOperationInput<"customer-profiles:ListProfileAttributeValues">;
  "customer-profiles:ListProfileHistoryRecords": AmazonConnectFullApiOperationInput<"customer-profiles:ListProfileHistoryRecords">;
  "customer-profiles:ListProfileObjectTypes": AmazonConnectFullApiOperationInput<"customer-profiles:ListProfileObjectTypes">;
  "customer-profiles:ListProfileObjects": AmazonConnectFullApiOperationInput<"customer-profiles:ListProfileObjects">;
  "customer-profiles:ListRecommenderFilters": AmazonConnectFullApiOperationInput<"customer-profiles:ListRecommenderFilters">;
  "customer-profiles:ListRecommenderSchemas": AmazonConnectFullApiOperationInput<"customer-profiles:ListRecommenderSchemas">;
  "customer-profiles:ListRecommenders": AmazonConnectFullApiOperationInput<"customer-profiles:ListRecommenders">;
  "customer-profiles:ListRuleBasedMatches": AmazonConnectFullApiOperationInput<"customer-profiles:ListRuleBasedMatches">;
  "customer-profiles:ListSegmentDefinitions": AmazonConnectFullApiOperationInput<"customer-profiles:ListSegmentDefinitions">;
  "customer-profiles:ListUploadJobs": AmazonConnectFullApiOperationInput<"customer-profiles:ListUploadJobs">;
  "customer-profiles:ListWorkflows": AmazonConnectFullApiOperationInput<"customer-profiles:ListWorkflows">;
  "customer-profiles:MergeProfiles": AmazonConnectFullApiOperationInput<"customer-profiles:MergeProfiles">;
  "customer-profiles:PutDomainObjectType": AmazonConnectFullApiOperationInput<"customer-profiles:PutDomainObjectType">;
  "customer-profiles:PutIntegration": AmazonConnectFullApiOperationInput<"customer-profiles:PutIntegration">;
  "customer-profiles:PutProfileObject": AmazonConnectFullApiOperationInput<"customer-profiles:PutProfileObject">;
  "customer-profiles:PutProfileObjectType": AmazonConnectFullApiOperationInput<"customer-profiles:PutProfileObjectType">;
  "customer-profiles:SearchProfiles": AmazonConnectFullApiOperationInput<"customer-profiles:SearchProfiles">;
  "customer-profiles:StartRecommender": AmazonConnectFullApiOperationInput<"customer-profiles:StartRecommender">;
  "customer-profiles:StartUploadJob": AmazonConnectFullApiOperationInput<"customer-profiles:StartUploadJob">;
  "customer-profiles:StopRecommender": AmazonConnectFullApiOperationInput<"customer-profiles:StopRecommender">;
  "customer-profiles:StopUploadJob": AmazonConnectFullApiOperationInput<"customer-profiles:StopUploadJob">;
  "customer-profiles:UpdateCalculatedAttributeDefinition": AmazonConnectFullApiOperationInput<"customer-profiles:UpdateCalculatedAttributeDefinition">;
  "customer-profiles:UpdateDomain": AmazonConnectFullApiOperationInput<"customer-profiles:UpdateDomain">;
  "customer-profiles:UpdateDomainLayout": AmazonConnectFullApiOperationInput<"customer-profiles:UpdateDomainLayout">;
  "customer-profiles:UpdateEventTrigger": AmazonConnectFullApiOperationInput<"customer-profiles:UpdateEventTrigger">;
  "customer-profiles:UpdateProfile": AmazonConnectFullApiOperationInput<"customer-profiles:UpdateProfile">;
  "customer-profiles:UpdateRecommender": AmazonConnectFullApiOperationInput<"customer-profiles:UpdateRecommender">;
}

export interface AmazonConnectFullApiDomains02GeneratedClient {
  GetCalculatedAttributeDefinition(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetCalculatedAttributeDefinition">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetCalculatedAttributeDefinition"]>;
  GetCalculatedAttributeForProfile(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetCalculatedAttributeForProfile">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetCalculatedAttributeForProfile"]>;
  GetDomainCustomerProfiles(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetDomain">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetDomain"]>;
  GetDomainLayout(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetDomainLayout">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetDomainLayout"]>;
  GetDomainObjectType(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetDomainObjectType">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetDomainObjectType"]>;
  GetEventStream(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetEventStream">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetEventStream"]>;
  GetEventTrigger(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetEventTrigger">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetEventTrigger"]>;
  GetIdentityResolutionJob(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetIdentityResolutionJob">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetIdentityResolutionJob"]>;
  GetIntegration(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetIntegration">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetIntegration"]>;
  GetMatches(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetMatches">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetMatches"]>;
  GetObjectTypeAttributeStatistics(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetObjectTypeAttributeStatistics">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetObjectTypeAttributeStatistics"]>;
  GetProfileHistoryRecord(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetProfileHistoryRecord">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetProfileHistoryRecord"]>;
  GetProfileObjectType(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetProfileObjectType">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetProfileObjectType"]>;
  GetProfileRecommendations(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetProfileRecommendations">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetProfileRecommendations"]>;
  GetRecommender(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetRecommender">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetRecommender"]>;
  GetRecommenderFilter(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetRecommenderFilter">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetRecommenderFilter"]>;
  GetRecommenderSchema(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetRecommenderSchema">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetRecommenderSchema"]>;
  GetSegmentDefinition(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetSegmentDefinition">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetSegmentDefinition"]>;
  GetSegmentEstimate(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetSegmentEstimate">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetSegmentEstimate"]>;
  GetSegmentMembership(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetSegmentMembership">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetSegmentMembership"]>;
  GetSegmentSnapshot(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetSegmentSnapshot">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetSegmentSnapshot"]>;
  GetSimilarProfiles(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetSimilarProfiles">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetSimilarProfiles"]>;
  GetUploadJob(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetUploadJob">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetUploadJob"]>;
  GetUploadJobPath(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetUploadJobPath">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetUploadJobPath"]>;
  GetWorkflow(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetWorkflow">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetWorkflow"]>;
  GetWorkflowSteps(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetWorkflowSteps">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetWorkflowSteps"]>;
  ListCalculatedAttributeDefinitions(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListCalculatedAttributeDefinitions">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListCalculatedAttributeDefinitions"]>;
  ListCalculatedAttributesForProfile(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListCalculatedAttributesForProfile">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListCalculatedAttributesForProfile"]>;
  ListDomainLayouts(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListDomainLayouts">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListDomainLayouts"]>;
  ListDomainObjectTypes(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListDomainObjectTypes">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListDomainObjectTypes"]>;
  ListDomainsCustomerProfiles(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListDomains">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListDomains"]>;
  ListEventStreams(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListEventStreams">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListEventStreams"]>;
  ListEventTriggers(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListEventTriggers">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListEventTriggers"]>;
  ListIdentityResolutionJobs(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListIdentityResolutionJobs">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListIdentityResolutionJobs"]>;
  ListIntegrations(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListIntegrations">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListIntegrations"]>;
  ListObjectTypeAttributeValues(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListObjectTypeAttributeValues">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListObjectTypeAttributeValues"]>;
  ListObjectTypeAttributes(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListObjectTypeAttributes">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListObjectTypeAttributes"]>;
  ListProfileAttributeValues(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListProfileAttributeValues">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListProfileAttributeValues"]>;
  ListProfileHistoryRecords(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListProfileHistoryRecords">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListProfileHistoryRecords"]>;
  ListProfileObjectTypes(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListProfileObjectTypes">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListProfileObjectTypes"]>;
  ListProfileObjects(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListProfileObjects">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListProfileObjects"]>;
  ListRecommenderFilters(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListRecommenderFilters">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListRecommenderFilters"]>;
  ListRecommenderSchemas(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListRecommenderSchemas">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListRecommenderSchemas"]>;
  ListRecommenders(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListRecommenders">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListRecommenders"]>;
  ListRuleBasedMatches(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListRuleBasedMatches">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListRuleBasedMatches"]>;
  ListSegmentDefinitions(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListSegmentDefinitions">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListSegmentDefinitions"]>;
  ListUploadJobs(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListUploadJobs">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListUploadJobs"]>;
  ListWorkflows(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListWorkflows">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListWorkflows"]>;
  MergeProfiles(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:MergeProfiles">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:MergeProfiles"]>;
  PutDomainObjectType(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:PutDomainObjectType">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:PutDomainObjectType"]>;
  PutIntegration(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:PutIntegration">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:PutIntegration"]>;
  PutProfileObject(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:PutProfileObject">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:PutProfileObject"]>;
  PutProfileObjectType(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:PutProfileObjectType">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:PutProfileObjectType"]>;
  SearchProfiles(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:SearchProfiles">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:SearchProfiles"]>;
  StartRecommender(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:StartRecommender">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:StartRecommender"]>;
  StartUploadJob(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:StartUploadJob">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:StartUploadJob"]>;
  StopRecommender(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:StopRecommender">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:StopRecommender"]>;
  StopUploadJob(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:StopUploadJob">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:StopUploadJob"]>;
  UpdateCalculatedAttributeDefinition(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:UpdateCalculatedAttributeDefinition">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:UpdateCalculatedAttributeDefinition"]>;
  UpdateDomain(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:UpdateDomain">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:UpdateDomain"]>;
  UpdateDomainLayout(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:UpdateDomainLayout">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:UpdateDomainLayout"]>;
  UpdateEventTrigger(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:UpdateEventTrigger">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:UpdateEventTrigger"]>;
  UpdateProfile(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:UpdateProfile">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:UpdateProfile"]>;
  UpdateRecommender(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:UpdateRecommender">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:UpdateRecommender"]>;
}

export const AmazonConnectFullApiDomains02GeneratedFunctionNames = [
  "GetCalculatedAttributeDefinition",
  "GetCalculatedAttributeForProfile",
  "GetDomainCustomerProfiles",
  "GetDomainLayout",
  "GetDomainObjectType",
  "GetEventStream",
  "GetEventTrigger",
  "GetIdentityResolutionJob",
  "GetIntegration",
  "GetMatches",
  "GetObjectTypeAttributeStatistics",
  "GetProfileHistoryRecord",
  "GetProfileObjectType",
  "GetProfileRecommendations",
  "GetRecommender",
  "GetRecommenderFilter",
  "GetRecommenderSchema",
  "GetSegmentDefinition",
  "GetSegmentEstimate",
  "GetSegmentMembership",
  "GetSegmentSnapshot",
  "GetSimilarProfiles",
  "GetUploadJob",
  "GetUploadJobPath",
  "GetWorkflow",
  "GetWorkflowSteps",
  "ListCalculatedAttributeDefinitions",
  "ListCalculatedAttributesForProfile",
  "ListDomainLayouts",
  "ListDomainObjectTypes",
  "ListDomainsCustomerProfiles",
  "ListEventStreams",
  "ListEventTriggers",
  "ListIdentityResolutionJobs",
  "ListIntegrations",
  "ListObjectTypeAttributeValues",
  "ListObjectTypeAttributes",
  "ListProfileAttributeValues",
  "ListProfileHistoryRecords",
  "ListProfileObjectTypes",
  "ListProfileObjects",
  "ListRecommenderFilters",
  "ListRecommenderSchemas",
  "ListRecommenders",
  "ListRuleBasedMatches",
  "ListSegmentDefinitions",
  "ListUploadJobs",
  "ListWorkflows",
  "MergeProfiles",
  "PutDomainObjectType",
  "PutIntegration",
  "PutProfileObject",
  "PutProfileObjectType",
  "SearchProfiles",
  "StartRecommender",
  "StartUploadJob",
  "StopRecommender",
  "StopUploadJob",
  "UpdateCalculatedAttributeDefinition",
  "UpdateDomain",
  "UpdateDomainLayout",
  "UpdateEventTrigger",
  "UpdateProfile",
  "UpdateRecommender"
] as const satisfies readonly (keyof AmazonConnectFullApiDomains02GeneratedClient)[];

export function createAmazonConnectFullApiDomains02GeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiDomains02GeneratedClient {
  return {
    GetCalculatedAttributeDefinition: (...args) => callOperation("customer-profiles:GetCalculatedAttributeDefinition", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetCalculatedAttributeDefinition">)),
    GetCalculatedAttributeForProfile: (...args) => callOperation("customer-profiles:GetCalculatedAttributeForProfile", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetCalculatedAttributeForProfile">)),
    GetDomainCustomerProfiles: (...args) => callOperation("customer-profiles:GetDomain", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetDomain">)),
    GetDomainLayout: (...args) => callOperation("customer-profiles:GetDomainLayout", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetDomainLayout">)),
    GetDomainObjectType: (...args) => callOperation("customer-profiles:GetDomainObjectType", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetDomainObjectType">)),
    GetEventStream: (...args) => callOperation("customer-profiles:GetEventStream", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetEventStream">)),
    GetEventTrigger: (...args) => callOperation("customer-profiles:GetEventTrigger", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetEventTrigger">)),
    GetIdentityResolutionJob: (...args) => callOperation("customer-profiles:GetIdentityResolutionJob", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetIdentityResolutionJob">)),
    GetIntegration: (...args) => callOperation("customer-profiles:GetIntegration", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetIntegration">)),
    GetMatches: (...args) => callOperation("customer-profiles:GetMatches", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetMatches">)),
    GetObjectTypeAttributeStatistics: (...args) => callOperation("customer-profiles:GetObjectTypeAttributeStatistics", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetObjectTypeAttributeStatistics">)),
    GetProfileHistoryRecord: (...args) => callOperation("customer-profiles:GetProfileHistoryRecord", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetProfileHistoryRecord">)),
    GetProfileObjectType: (...args) => callOperation("customer-profiles:GetProfileObjectType", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetProfileObjectType">)),
    GetProfileRecommendations: (...args) => callOperation("customer-profiles:GetProfileRecommendations", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetProfileRecommendations">)),
    GetRecommender: (...args) => callOperation("customer-profiles:GetRecommender", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetRecommender">)),
    GetRecommenderFilter: (...args) => callOperation("customer-profiles:GetRecommenderFilter", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetRecommenderFilter">)),
    GetRecommenderSchema: (...args) => callOperation("customer-profiles:GetRecommenderSchema", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetRecommenderSchema">)),
    GetSegmentDefinition: (...args) => callOperation("customer-profiles:GetSegmentDefinition", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetSegmentDefinition">)),
    GetSegmentEstimate: (...args) => callOperation("customer-profiles:GetSegmentEstimate", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetSegmentEstimate">)),
    GetSegmentMembership: (...args) => callOperation("customer-profiles:GetSegmentMembership", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetSegmentMembership">)),
    GetSegmentSnapshot: (...args) => callOperation("customer-profiles:GetSegmentSnapshot", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetSegmentSnapshot">)),
    GetSimilarProfiles: (...args) => callOperation("customer-profiles:GetSimilarProfiles", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetSimilarProfiles">)),
    GetUploadJob: (...args) => callOperation("customer-profiles:GetUploadJob", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetUploadJob">)),
    GetUploadJobPath: (...args) => callOperation("customer-profiles:GetUploadJobPath", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetUploadJobPath">)),
    GetWorkflow: (...args) => callOperation("customer-profiles:GetWorkflow", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetWorkflow">)),
    GetWorkflowSteps: (...args) => callOperation("customer-profiles:GetWorkflowSteps", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetWorkflowSteps">)),
    ListCalculatedAttributeDefinitions: (...args) => callOperation("customer-profiles:ListCalculatedAttributeDefinitions", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListCalculatedAttributeDefinitions">)),
    ListCalculatedAttributesForProfile: (...args) => callOperation("customer-profiles:ListCalculatedAttributesForProfile", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListCalculatedAttributesForProfile">)),
    ListDomainLayouts: (...args) => callOperation("customer-profiles:ListDomainLayouts", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListDomainLayouts">)),
    ListDomainObjectTypes: (...args) => callOperation("customer-profiles:ListDomainObjectTypes", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListDomainObjectTypes">)),
    ListDomainsCustomerProfiles: (...args) => callOperation("customer-profiles:ListDomains", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListDomains">)),
    ListEventStreams: (...args) => callOperation("customer-profiles:ListEventStreams", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListEventStreams">)),
    ListEventTriggers: (...args) => callOperation("customer-profiles:ListEventTriggers", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListEventTriggers">)),
    ListIdentityResolutionJobs: (...args) => callOperation("customer-profiles:ListIdentityResolutionJobs", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListIdentityResolutionJobs">)),
    ListIntegrations: (...args) => callOperation("customer-profiles:ListIntegrations", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListIntegrations">)),
    ListObjectTypeAttributeValues: (...args) => callOperation("customer-profiles:ListObjectTypeAttributeValues", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListObjectTypeAttributeValues">)),
    ListObjectTypeAttributes: (...args) => callOperation("customer-profiles:ListObjectTypeAttributes", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListObjectTypeAttributes">)),
    ListProfileAttributeValues: (...args) => callOperation("customer-profiles:ListProfileAttributeValues", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListProfileAttributeValues">)),
    ListProfileHistoryRecords: (...args) => callOperation("customer-profiles:ListProfileHistoryRecords", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListProfileHistoryRecords">)),
    ListProfileObjectTypes: (...args) => callOperation("customer-profiles:ListProfileObjectTypes", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListProfileObjectTypes">)),
    ListProfileObjects: (...args) => callOperation("customer-profiles:ListProfileObjects", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListProfileObjects">)),
    ListRecommenderFilters: (...args) => callOperation("customer-profiles:ListRecommenderFilters", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListRecommenderFilters">)),
    ListRecommenderSchemas: (...args) => callOperation("customer-profiles:ListRecommenderSchemas", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListRecommenderSchemas">)),
    ListRecommenders: (...args) => callOperation("customer-profiles:ListRecommenders", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListRecommenders">)),
    ListRuleBasedMatches: (...args) => callOperation("customer-profiles:ListRuleBasedMatches", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListRuleBasedMatches">)),
    ListSegmentDefinitions: (...args) => callOperation("customer-profiles:ListSegmentDefinitions", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListSegmentDefinitions">)),
    ListUploadJobs: (...args) => callOperation("customer-profiles:ListUploadJobs", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListUploadJobs">)),
    ListWorkflows: (...args) => callOperation("customer-profiles:ListWorkflows", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListWorkflows">)),
    MergeProfiles: (...args) => callOperation("customer-profiles:MergeProfiles", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:MergeProfiles">)),
    PutDomainObjectType: (...args) => callOperation("customer-profiles:PutDomainObjectType", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:PutDomainObjectType">)),
    PutIntegration: (...args) => callOperation("customer-profiles:PutIntegration", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:PutIntegration">)),
    PutProfileObject: (...args) => callOperation("customer-profiles:PutProfileObject", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:PutProfileObject">)),
    PutProfileObjectType: (...args) => callOperation("customer-profiles:PutProfileObjectType", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:PutProfileObjectType">)),
    SearchProfiles: (...args) => callOperation("customer-profiles:SearchProfiles", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:SearchProfiles">)),
    StartRecommender: (...args) => callOperation("customer-profiles:StartRecommender", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:StartRecommender">)),
    StartUploadJob: (...args) => callOperation("customer-profiles:StartUploadJob", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:StartUploadJob">)),
    StopRecommender: (...args) => callOperation("customer-profiles:StopRecommender", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:StopRecommender">)),
    StopUploadJob: (...args) => callOperation("customer-profiles:StopUploadJob", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:StopUploadJob">)),
    UpdateCalculatedAttributeDefinition: (...args) => callOperation("customer-profiles:UpdateCalculatedAttributeDefinition", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:UpdateCalculatedAttributeDefinition">)),
    UpdateDomain: (...args) => callOperation("customer-profiles:UpdateDomain", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:UpdateDomain">)),
    UpdateDomainLayout: (...args) => callOperation("customer-profiles:UpdateDomainLayout", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:UpdateDomainLayout">)),
    UpdateEventTrigger: (...args) => callOperation("customer-profiles:UpdateEventTrigger", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:UpdateEventTrigger">)),
    UpdateProfile: (...args) => callOperation("customer-profiles:UpdateProfile", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:UpdateProfile">)),
    UpdateRecommender: (...args) => callOperation("customer-profiles:UpdateRecommender", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:UpdateRecommender">)),
  };
}
