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
export const AmazonConnectFullApiDomains01OperationKeys = [
  "connectcases:BatchGetCaseRule",
  "connectcases:BatchGetField",
  "connectcases:BatchPutFieldOptions",
  "connectcases:CreateCase",
  "connectcases:CreateCaseRule",
  "connectcases:CreateDomain",
  "connectcases:CreateField",
  "connectcases:CreateLayout",
  "connectcases:CreateRelatedItem",
  "connectcases:CreateTemplate",
  "connectcases:DeleteCase",
  "connectcases:DeleteCaseRule",
  "connectcases:DeleteDomain",
  "connectcases:DeleteField",
  "connectcases:DeleteLayout",
  "connectcases:DeleteRelatedItem",
  "connectcases:DeleteTemplate",
  "connectcases:GetCase",
  "connectcases:GetCaseAuditEvents",
  "connectcases:GetCaseEventConfiguration",
  "connectcases:GetDomain",
  "connectcases:GetLayout",
  "connectcases:GetTemplate",
  "connectcases:ListCaseRules",
  "connectcases:ListCasesForContact",
  "connectcases:ListFieldOptions",
  "connectcases:ListFields",
  "connectcases:ListLayouts",
  "connectcases:ListTemplates",
  "connectcases:PutCaseEventConfiguration",
  "connectcases:SearchAllRelatedItems",
  "connectcases:SearchCases",
  "connectcases:SearchRelatedItems",
  "connectcases:UpdateCase",
  "connectcases:UpdateCaseRule",
  "connectcases:UpdateField",
  "connectcases:UpdateLayout",
  "connectcases:UpdateRelatedItem",
  "connectcases:UpdateTemplate",
  "connecthealth:ActivateSubscription",
  "connecthealth:CreateSubscription",
  "connecthealth:DeactivateSubscription",
  "connecthealth:GetSubscription",
  "connecthealth:ListSubscriptions",
  "customer-profiles:AddProfileKey",
  "customer-profiles:BatchGetCalculatedAttributeForProfile",
  "customer-profiles:BatchGetProfile",
  "customer-profiles:BatchPutProfileObject",
  "customer-profiles:CreateCalculatedAttributeDefinition",
  "customer-profiles:CreateDomain",
  "customer-profiles:CreateDomainLayout",
  "customer-profiles:CreateEventStream",
  "customer-profiles:CreateEventTrigger",
  "customer-profiles:CreateIntegrationWorkflow",
  "customer-profiles:CreateProfile",
  "customer-profiles:CreateRecommender",
  "customer-profiles:CreateRecommenderFilter",
  "customer-profiles:CreateRecommenderSchema",
  "customer-profiles:CreateSegmentDefinition",
  "customer-profiles:CreateSegmentEstimate",
  "customer-profiles:CreateSegmentSnapshot",
  "customer-profiles:CreateUploadJob",
  "customer-profiles:DeleteCalculatedAttributeDefinition",
  "customer-profiles:DeleteDomain",
  "customer-profiles:DeleteDomainLayout",
  "customer-profiles:DeleteDomainObjectType",
  "customer-profiles:DeleteEventStream",
  "customer-profiles:DeleteEventTrigger",
  "customer-profiles:DeleteIntegration",
  "customer-profiles:DeleteProfile",
  "customer-profiles:DeleteProfileKey",
  "customer-profiles:DeleteProfileObject",
  "customer-profiles:DeleteProfileObjectType",
  "customer-profiles:DeleteRecommender",
  "customer-profiles:DeleteRecommenderFilter",
  "customer-profiles:DeleteRecommenderSchema",
  "customer-profiles:DeleteSegmentDefinition",
  "customer-profiles:DeleteWorkflow",
  "customer-profiles:DetectProfileObjectType",
  "customer-profiles:GetAutoMergingPreview"
] as const;
export type AmazonConnectFullApiDomains01OperationKey = typeof AmazonConnectFullApiDomains01OperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiDomains01OperationPathParamMap {
  "connectcases:BatchGetCaseRule": { "domainId": AmazonConnectFullApiPathParamValue };
  "connectcases:BatchGetField": { "domainId": AmazonConnectFullApiPathParamValue };
  "connectcases:BatchPutFieldOptions": { "domainId": AmazonConnectFullApiPathParamValue; "fieldId": AmazonConnectFullApiPathParamValue };
  "connectcases:CreateCase": { "domainId": AmazonConnectFullApiPathParamValue };
  "connectcases:CreateCaseRule": { "domainId": AmazonConnectFullApiPathParamValue };
  "connectcases:CreateDomain": {};
  "connectcases:CreateField": { "domainId": AmazonConnectFullApiPathParamValue };
  "connectcases:CreateLayout": { "domainId": AmazonConnectFullApiPathParamValue };
  "connectcases:CreateRelatedItem": { "domainId": AmazonConnectFullApiPathParamValue; "caseId": AmazonConnectFullApiPathParamValue };
  "connectcases:CreateTemplate": { "domainId": AmazonConnectFullApiPathParamValue };
  "connectcases:DeleteCase": { "domainId": AmazonConnectFullApiPathParamValue; "caseId": AmazonConnectFullApiPathParamValue };
  "connectcases:DeleteCaseRule": { "domainId": AmazonConnectFullApiPathParamValue; "caseRuleId": AmazonConnectFullApiPathParamValue };
  "connectcases:DeleteDomain": { "domainId": AmazonConnectFullApiPathParamValue };
  "connectcases:DeleteField": { "domainId": AmazonConnectFullApiPathParamValue; "fieldId": AmazonConnectFullApiPathParamValue };
  "connectcases:DeleteLayout": { "domainId": AmazonConnectFullApiPathParamValue; "layoutId": AmazonConnectFullApiPathParamValue };
  "connectcases:DeleteRelatedItem": { "domainId": AmazonConnectFullApiPathParamValue; "caseId": AmazonConnectFullApiPathParamValue; "relatedItemId": AmazonConnectFullApiPathParamValue };
  "connectcases:DeleteTemplate": { "domainId": AmazonConnectFullApiPathParamValue; "templateId": AmazonConnectFullApiPathParamValue };
  "connectcases:GetCase": { "domainId": AmazonConnectFullApiPathParamValue; "caseId": AmazonConnectFullApiPathParamValue };
  "connectcases:GetCaseAuditEvents": { "domainId": AmazonConnectFullApiPathParamValue; "caseId": AmazonConnectFullApiPathParamValue };
  "connectcases:GetCaseEventConfiguration": { "domainId": AmazonConnectFullApiPathParamValue };
  "connectcases:GetDomain": { "domainId": AmazonConnectFullApiPathParamValue };
  "connectcases:GetLayout": { "domainId": AmazonConnectFullApiPathParamValue; "layoutId": AmazonConnectFullApiPathParamValue };
  "connectcases:GetTemplate": { "domainId": AmazonConnectFullApiPathParamValue; "templateId": AmazonConnectFullApiPathParamValue };
  "connectcases:ListCaseRules": { "domainId": AmazonConnectFullApiPathParamValue };
  "connectcases:ListCasesForContact": { "domainId": AmazonConnectFullApiPathParamValue };
  "connectcases:ListFieldOptions": { "domainId": AmazonConnectFullApiPathParamValue; "fieldId": AmazonConnectFullApiPathParamValue };
  "connectcases:ListFields": { "domainId": AmazonConnectFullApiPathParamValue };
  "connectcases:ListLayouts": { "domainId": AmazonConnectFullApiPathParamValue };
  "connectcases:ListTemplates": { "domainId": AmazonConnectFullApiPathParamValue };
  "connectcases:PutCaseEventConfiguration": { "domainId": AmazonConnectFullApiPathParamValue };
  "connectcases:SearchAllRelatedItems": { "domainId": AmazonConnectFullApiPathParamValue };
  "connectcases:SearchCases": { "domainId": AmazonConnectFullApiPathParamValue };
  "connectcases:SearchRelatedItems": { "domainId": AmazonConnectFullApiPathParamValue; "caseId": AmazonConnectFullApiPathParamValue };
  "connectcases:UpdateCase": { "domainId": AmazonConnectFullApiPathParamValue; "caseId": AmazonConnectFullApiPathParamValue };
  "connectcases:UpdateCaseRule": { "domainId": AmazonConnectFullApiPathParamValue; "caseRuleId": AmazonConnectFullApiPathParamValue };
  "connectcases:UpdateField": { "domainId": AmazonConnectFullApiPathParamValue; "fieldId": AmazonConnectFullApiPathParamValue };
  "connectcases:UpdateLayout": { "domainId": AmazonConnectFullApiPathParamValue; "layoutId": AmazonConnectFullApiPathParamValue };
  "connectcases:UpdateRelatedItem": { "domainId": AmazonConnectFullApiPathParamValue; "caseId": AmazonConnectFullApiPathParamValue; "relatedItemId": AmazonConnectFullApiPathParamValue };
  "connectcases:UpdateTemplate": { "domainId": AmazonConnectFullApiPathParamValue; "templateId": AmazonConnectFullApiPathParamValue };
  "connecthealth:ActivateSubscription": { "domainId": AmazonConnectFullApiPathParamValue; "subscriptionId": AmazonConnectFullApiPathParamValue };
  "connecthealth:CreateSubscription": { "domainId": AmazonConnectFullApiPathParamValue };
  "connecthealth:DeactivateSubscription": { "domainId": AmazonConnectFullApiPathParamValue; "subscriptionId": AmazonConnectFullApiPathParamValue };
  "connecthealth:GetSubscription": { "domainId": AmazonConnectFullApiPathParamValue; "subscriptionId": AmazonConnectFullApiPathParamValue };
  "connecthealth:ListSubscriptions": { "domainId": AmazonConnectFullApiPathParamValue };
  "customer-profiles:AddProfileKey": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:BatchGetCalculatedAttributeForProfile": { "DomainName": AmazonConnectFullApiPathParamValue; "CalculatedAttributeName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:BatchGetProfile": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:BatchPutProfileObject": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:CreateCalculatedAttributeDefinition": { "DomainName": AmazonConnectFullApiPathParamValue; "CalculatedAttributeName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:CreateDomain": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:CreateDomainLayout": { "DomainName": AmazonConnectFullApiPathParamValue; "LayoutDefinitionName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:CreateEventStream": { "DomainName": AmazonConnectFullApiPathParamValue; "EventStreamName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:CreateEventTrigger": { "DomainName": AmazonConnectFullApiPathParamValue; "EventTriggerName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:CreateIntegrationWorkflow": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:CreateProfile": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:CreateRecommender": { "DomainName": AmazonConnectFullApiPathParamValue; "RecommenderName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:CreateRecommenderFilter": { "DomainName": AmazonConnectFullApiPathParamValue; "RecommenderFilterName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:CreateRecommenderSchema": { "DomainName": AmazonConnectFullApiPathParamValue; "RecommenderSchemaName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:CreateSegmentDefinition": { "DomainName": AmazonConnectFullApiPathParamValue; "SegmentDefinitionName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:CreateSegmentEstimate": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:CreateSegmentSnapshot": { "DomainName": AmazonConnectFullApiPathParamValue; "SegmentDefinitionName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:CreateUploadJob": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:DeleteCalculatedAttributeDefinition": { "DomainName": AmazonConnectFullApiPathParamValue; "CalculatedAttributeName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:DeleteDomain": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:DeleteDomainLayout": { "DomainName": AmazonConnectFullApiPathParamValue; "LayoutDefinitionName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:DeleteDomainObjectType": { "DomainName": AmazonConnectFullApiPathParamValue; "ObjectTypeName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:DeleteEventStream": { "DomainName": AmazonConnectFullApiPathParamValue; "EventStreamName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:DeleteEventTrigger": { "DomainName": AmazonConnectFullApiPathParamValue; "EventTriggerName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:DeleteIntegration": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:DeleteProfile": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:DeleteProfileKey": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:DeleteProfileObject": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:DeleteProfileObjectType": { "DomainName": AmazonConnectFullApiPathParamValue; "ObjectTypeName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:DeleteRecommender": { "DomainName": AmazonConnectFullApiPathParamValue; "RecommenderName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:DeleteRecommenderFilter": { "DomainName": AmazonConnectFullApiPathParamValue; "RecommenderFilterName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:DeleteRecommenderSchema": { "DomainName": AmazonConnectFullApiPathParamValue; "RecommenderSchemaName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:DeleteSegmentDefinition": { "DomainName": AmazonConnectFullApiPathParamValue; "SegmentDefinitionName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:DeleteWorkflow": { "DomainName": AmazonConnectFullApiPathParamValue; "WorkflowId": AmazonConnectFullApiPathParamValue };
  "customer-profiles:DetectProfileObjectType": { "DomainName": AmazonConnectFullApiPathParamValue };
  "customer-profiles:GetAutoMergingPreview": { "DomainName": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiDomains01OperationRequestMap {
  "connectcases:BatchGetCaseRule": AmazonConnectFullApiOperationInput<"connectcases:BatchGetCaseRule">;
  "connectcases:BatchGetField": AmazonConnectFullApiOperationInput<"connectcases:BatchGetField">;
  "connectcases:BatchPutFieldOptions": AmazonConnectFullApiOperationInput<"connectcases:BatchPutFieldOptions">;
  "connectcases:CreateCase": AmazonConnectFullApiOperationInput<"connectcases:CreateCase">;
  "connectcases:CreateCaseRule": AmazonConnectFullApiOperationInput<"connectcases:CreateCaseRule">;
  "connectcases:CreateDomain": AmazonConnectFullApiOperationInput<"connectcases:CreateDomain">;
  "connectcases:CreateField": AmazonConnectFullApiOperationInput<"connectcases:CreateField">;
  "connectcases:CreateLayout": AmazonConnectFullApiOperationInput<"connectcases:CreateLayout">;
  "connectcases:CreateRelatedItem": AmazonConnectFullApiOperationInput<"connectcases:CreateRelatedItem">;
  "connectcases:CreateTemplate": AmazonConnectFullApiOperationInput<"connectcases:CreateTemplate">;
  "connectcases:DeleteCase": AmazonConnectFullApiOperationInput<"connectcases:DeleteCase">;
  "connectcases:DeleteCaseRule": AmazonConnectFullApiOperationInput<"connectcases:DeleteCaseRule">;
  "connectcases:DeleteDomain": AmazonConnectFullApiOperationInput<"connectcases:DeleteDomain">;
  "connectcases:DeleteField": AmazonConnectFullApiOperationInput<"connectcases:DeleteField">;
  "connectcases:DeleteLayout": AmazonConnectFullApiOperationInput<"connectcases:DeleteLayout">;
  "connectcases:DeleteRelatedItem": AmazonConnectFullApiOperationInput<"connectcases:DeleteRelatedItem">;
  "connectcases:DeleteTemplate": AmazonConnectFullApiOperationInput<"connectcases:DeleteTemplate">;
  "connectcases:GetCase": AmazonConnectFullApiOperationInput<"connectcases:GetCase">;
  "connectcases:GetCaseAuditEvents": AmazonConnectFullApiOperationInput<"connectcases:GetCaseAuditEvents">;
  "connectcases:GetCaseEventConfiguration": AmazonConnectFullApiOperationInput<"connectcases:GetCaseEventConfiguration">;
  "connectcases:GetDomain": AmazonConnectFullApiOperationInput<"connectcases:GetDomain">;
  "connectcases:GetLayout": AmazonConnectFullApiOperationInput<"connectcases:GetLayout">;
  "connectcases:GetTemplate": AmazonConnectFullApiOperationInput<"connectcases:GetTemplate">;
  "connectcases:ListCaseRules": AmazonConnectFullApiOperationInput<"connectcases:ListCaseRules">;
  "connectcases:ListCasesForContact": AmazonConnectFullApiOperationInput<"connectcases:ListCasesForContact">;
  "connectcases:ListFieldOptions": AmazonConnectFullApiOperationInput<"connectcases:ListFieldOptions">;
  "connectcases:ListFields": AmazonConnectFullApiOperationInput<"connectcases:ListFields">;
  "connectcases:ListLayouts": AmazonConnectFullApiOperationInput<"connectcases:ListLayouts">;
  "connectcases:ListTemplates": AmazonConnectFullApiOperationInput<"connectcases:ListTemplates">;
  "connectcases:PutCaseEventConfiguration": AmazonConnectFullApiOperationInput<"connectcases:PutCaseEventConfiguration">;
  "connectcases:SearchAllRelatedItems": AmazonConnectFullApiOperationInput<"connectcases:SearchAllRelatedItems">;
  "connectcases:SearchCases": AmazonConnectFullApiOperationInput<"connectcases:SearchCases">;
  "connectcases:SearchRelatedItems": AmazonConnectFullApiOperationInput<"connectcases:SearchRelatedItems">;
  "connectcases:UpdateCase": AmazonConnectFullApiOperationInput<"connectcases:UpdateCase">;
  "connectcases:UpdateCaseRule": AmazonConnectFullApiOperationInput<"connectcases:UpdateCaseRule">;
  "connectcases:UpdateField": AmazonConnectFullApiOperationInput<"connectcases:UpdateField">;
  "connectcases:UpdateLayout": AmazonConnectFullApiOperationInput<"connectcases:UpdateLayout">;
  "connectcases:UpdateRelatedItem": AmazonConnectFullApiOperationInput<"connectcases:UpdateRelatedItem">;
  "connectcases:UpdateTemplate": AmazonConnectFullApiOperationInput<"connectcases:UpdateTemplate">;
  "connecthealth:ActivateSubscription": AmazonConnectFullApiOperationInput<"connecthealth:ActivateSubscription">;
  "connecthealth:CreateSubscription": AmazonConnectFullApiOperationInput<"connecthealth:CreateSubscription">;
  "connecthealth:DeactivateSubscription": AmazonConnectFullApiOperationInput<"connecthealth:DeactivateSubscription">;
  "connecthealth:GetSubscription": AmazonConnectFullApiOperationInput<"connecthealth:GetSubscription">;
  "connecthealth:ListSubscriptions": AmazonConnectFullApiOperationInput<"connecthealth:ListSubscriptions">;
  "customer-profiles:AddProfileKey": AmazonConnectFullApiOperationInput<"customer-profiles:AddProfileKey">;
  "customer-profiles:BatchGetCalculatedAttributeForProfile": AmazonConnectFullApiOperationInput<"customer-profiles:BatchGetCalculatedAttributeForProfile">;
  "customer-profiles:BatchGetProfile": AmazonConnectFullApiOperationInput<"customer-profiles:BatchGetProfile">;
  "customer-profiles:BatchPutProfileObject": AmazonConnectFullApiOperationInput<"customer-profiles:BatchPutProfileObject">;
  "customer-profiles:CreateCalculatedAttributeDefinition": AmazonConnectFullApiOperationInput<"customer-profiles:CreateCalculatedAttributeDefinition">;
  "customer-profiles:CreateDomain": AmazonConnectFullApiOperationInput<"customer-profiles:CreateDomain">;
  "customer-profiles:CreateDomainLayout": AmazonConnectFullApiOperationInput<"customer-profiles:CreateDomainLayout">;
  "customer-profiles:CreateEventStream": AmazonConnectFullApiOperationInput<"customer-profiles:CreateEventStream">;
  "customer-profiles:CreateEventTrigger": AmazonConnectFullApiOperationInput<"customer-profiles:CreateEventTrigger">;
  "customer-profiles:CreateIntegrationWorkflow": AmazonConnectFullApiOperationInput<"customer-profiles:CreateIntegrationWorkflow">;
  "customer-profiles:CreateProfile": AmazonConnectFullApiOperationInput<"customer-profiles:CreateProfile">;
  "customer-profiles:CreateRecommender": AmazonConnectFullApiOperationInput<"customer-profiles:CreateRecommender">;
  "customer-profiles:CreateRecommenderFilter": AmazonConnectFullApiOperationInput<"customer-profiles:CreateRecommenderFilter">;
  "customer-profiles:CreateRecommenderSchema": AmazonConnectFullApiOperationInput<"customer-profiles:CreateRecommenderSchema">;
  "customer-profiles:CreateSegmentDefinition": AmazonConnectFullApiOperationInput<"customer-profiles:CreateSegmentDefinition">;
  "customer-profiles:CreateSegmentEstimate": AmazonConnectFullApiOperationInput<"customer-profiles:CreateSegmentEstimate">;
  "customer-profiles:CreateSegmentSnapshot": AmazonConnectFullApiOperationInput<"customer-profiles:CreateSegmentSnapshot">;
  "customer-profiles:CreateUploadJob": AmazonConnectFullApiOperationInput<"customer-profiles:CreateUploadJob">;
  "customer-profiles:DeleteCalculatedAttributeDefinition": AmazonConnectFullApiOperationInput<"customer-profiles:DeleteCalculatedAttributeDefinition">;
  "customer-profiles:DeleteDomain": AmazonConnectFullApiOperationInput<"customer-profiles:DeleteDomain">;
  "customer-profiles:DeleteDomainLayout": AmazonConnectFullApiOperationInput<"customer-profiles:DeleteDomainLayout">;
  "customer-profiles:DeleteDomainObjectType": AmazonConnectFullApiOperationInput<"customer-profiles:DeleteDomainObjectType">;
  "customer-profiles:DeleteEventStream": AmazonConnectFullApiOperationInput<"customer-profiles:DeleteEventStream">;
  "customer-profiles:DeleteEventTrigger": AmazonConnectFullApiOperationInput<"customer-profiles:DeleteEventTrigger">;
  "customer-profiles:DeleteIntegration": AmazonConnectFullApiOperationInput<"customer-profiles:DeleteIntegration">;
  "customer-profiles:DeleteProfile": AmazonConnectFullApiOperationInput<"customer-profiles:DeleteProfile">;
  "customer-profiles:DeleteProfileKey": AmazonConnectFullApiOperationInput<"customer-profiles:DeleteProfileKey">;
  "customer-profiles:DeleteProfileObject": AmazonConnectFullApiOperationInput<"customer-profiles:DeleteProfileObject">;
  "customer-profiles:DeleteProfileObjectType": AmazonConnectFullApiOperationInput<"customer-profiles:DeleteProfileObjectType">;
  "customer-profiles:DeleteRecommender": AmazonConnectFullApiOperationInput<"customer-profiles:DeleteRecommender">;
  "customer-profiles:DeleteRecommenderFilter": AmazonConnectFullApiOperationInput<"customer-profiles:DeleteRecommenderFilter">;
  "customer-profiles:DeleteRecommenderSchema": AmazonConnectFullApiOperationInput<"customer-profiles:DeleteRecommenderSchema">;
  "customer-profiles:DeleteSegmentDefinition": AmazonConnectFullApiOperationInput<"customer-profiles:DeleteSegmentDefinition">;
  "customer-profiles:DeleteWorkflow": AmazonConnectFullApiOperationInput<"customer-profiles:DeleteWorkflow">;
  "customer-profiles:DetectProfileObjectType": AmazonConnectFullApiOperationInput<"customer-profiles:DetectProfileObjectType">;
  "customer-profiles:GetAutoMergingPreview": AmazonConnectFullApiOperationInput<"customer-profiles:GetAutoMergingPreview">;
}

export interface AmazonConnectFullApiDomains01GeneratedClient {
  BatchGetCaseRule(...args: AmazonConnectFullApiOperationArgs<"connectcases:BatchGetCaseRule">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:BatchGetCaseRule"]>;
  BatchGetField(...args: AmazonConnectFullApiOperationArgs<"connectcases:BatchGetField">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:BatchGetField"]>;
  BatchPutFieldOptions(...args: AmazonConnectFullApiOperationArgs<"connectcases:BatchPutFieldOptions">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:BatchPutFieldOptions"]>;
  CreateCase(...args: AmazonConnectFullApiOperationArgs<"connectcases:CreateCase">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:CreateCase"]>;
  CreateCaseRule(...args: AmazonConnectFullApiOperationArgs<"connectcases:CreateCaseRule">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:CreateCaseRule"]>;
  CreateDomain(...args: AmazonConnectFullApiOperationArgs<"connectcases:CreateDomain">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:CreateDomain"]>;
  CreateField(...args: AmazonConnectFullApiOperationArgs<"connectcases:CreateField">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:CreateField"]>;
  CreateLayout(...args: AmazonConnectFullApiOperationArgs<"connectcases:CreateLayout">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:CreateLayout"]>;
  CreateRelatedItem(...args: AmazonConnectFullApiOperationArgs<"connectcases:CreateRelatedItem">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:CreateRelatedItem"]>;
  CreateTemplate(...args: AmazonConnectFullApiOperationArgs<"connectcases:CreateTemplate">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:CreateTemplate"]>;
  DeleteCase(...args: AmazonConnectFullApiOperationArgs<"connectcases:DeleteCase">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:DeleteCase"]>;
  DeleteCaseRule(...args: AmazonConnectFullApiOperationArgs<"connectcases:DeleteCaseRule">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:DeleteCaseRule"]>;
  DeleteDomain(...args: AmazonConnectFullApiOperationArgs<"connectcases:DeleteDomain">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:DeleteDomain"]>;
  DeleteField(...args: AmazonConnectFullApiOperationArgs<"connectcases:DeleteField">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:DeleteField"]>;
  DeleteLayout(...args: AmazonConnectFullApiOperationArgs<"connectcases:DeleteLayout">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:DeleteLayout"]>;
  DeleteRelatedItem(...args: AmazonConnectFullApiOperationArgs<"connectcases:DeleteRelatedItem">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:DeleteRelatedItem"]>;
  DeleteTemplate(...args: AmazonConnectFullApiOperationArgs<"connectcases:DeleteTemplate">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:DeleteTemplate"]>;
  GetCase(...args: AmazonConnectFullApiOperationArgs<"connectcases:GetCase">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:GetCase"]>;
  GetCaseAuditEvents(...args: AmazonConnectFullApiOperationArgs<"connectcases:GetCaseAuditEvents">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:GetCaseAuditEvents"]>;
  GetCaseEventConfiguration(...args: AmazonConnectFullApiOperationArgs<"connectcases:GetCaseEventConfiguration">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:GetCaseEventConfiguration"]>;
  GetDomain(...args: AmazonConnectFullApiOperationArgs<"connectcases:GetDomain">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:GetDomain"]>;
  GetLayout(...args: AmazonConnectFullApiOperationArgs<"connectcases:GetLayout">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:GetLayout"]>;
  GetTemplate(...args: AmazonConnectFullApiOperationArgs<"connectcases:GetTemplate">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:GetTemplate"]>;
  ListCaseRules(...args: AmazonConnectFullApiOperationArgs<"connectcases:ListCaseRules">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:ListCaseRules"]>;
  ListCasesForContact(...args: AmazonConnectFullApiOperationArgs<"connectcases:ListCasesForContact">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:ListCasesForContact"]>;
  ListFieldOptions(...args: AmazonConnectFullApiOperationArgs<"connectcases:ListFieldOptions">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:ListFieldOptions"]>;
  ListFields(...args: AmazonConnectFullApiOperationArgs<"connectcases:ListFields">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:ListFields"]>;
  ListLayouts(...args: AmazonConnectFullApiOperationArgs<"connectcases:ListLayouts">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:ListLayouts"]>;
  ListTemplates(...args: AmazonConnectFullApiOperationArgs<"connectcases:ListTemplates">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:ListTemplates"]>;
  PutCaseEventConfiguration(...args: AmazonConnectFullApiOperationArgs<"connectcases:PutCaseEventConfiguration">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:PutCaseEventConfiguration"]>;
  SearchAllRelatedItems(...args: AmazonConnectFullApiOperationArgs<"connectcases:SearchAllRelatedItems">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:SearchAllRelatedItems"]>;
  SearchCases(...args: AmazonConnectFullApiOperationArgs<"connectcases:SearchCases">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:SearchCases"]>;
  SearchRelatedItems(...args: AmazonConnectFullApiOperationArgs<"connectcases:SearchRelatedItems">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:SearchRelatedItems"]>;
  UpdateCase(...args: AmazonConnectFullApiOperationArgs<"connectcases:UpdateCase">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:UpdateCase"]>;
  UpdateCaseRule(...args: AmazonConnectFullApiOperationArgs<"connectcases:UpdateCaseRule">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:UpdateCaseRule"]>;
  UpdateField(...args: AmazonConnectFullApiOperationArgs<"connectcases:UpdateField">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:UpdateField"]>;
  UpdateLayout(...args: AmazonConnectFullApiOperationArgs<"connectcases:UpdateLayout">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:UpdateLayout"]>;
  UpdateRelatedItem(...args: AmazonConnectFullApiOperationArgs<"connectcases:UpdateRelatedItem">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:UpdateRelatedItem"]>;
  UpdateTemplate(...args: AmazonConnectFullApiOperationArgs<"connectcases:UpdateTemplate">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:UpdateTemplate"]>;
  ActivateSubscription(...args: AmazonConnectFullApiOperationArgs<"connecthealth:ActivateSubscription">): Promise<AmazonConnectFullApiOperationResponseMap["connecthealth:ActivateSubscription"]>;
  CreateSubscription(...args: AmazonConnectFullApiOperationArgs<"connecthealth:CreateSubscription">): Promise<AmazonConnectFullApiOperationResponseMap["connecthealth:CreateSubscription"]>;
  DeactivateSubscription(...args: AmazonConnectFullApiOperationArgs<"connecthealth:DeactivateSubscription">): Promise<AmazonConnectFullApiOperationResponseMap["connecthealth:DeactivateSubscription"]>;
  GetSubscription(...args: AmazonConnectFullApiOperationArgs<"connecthealth:GetSubscription">): Promise<AmazonConnectFullApiOperationResponseMap["connecthealth:GetSubscription"]>;
  ListSubscriptions(...args: AmazonConnectFullApiOperationArgs<"connecthealth:ListSubscriptions">): Promise<AmazonConnectFullApiOperationResponseMap["connecthealth:ListSubscriptions"]>;
  AddProfileKey(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:AddProfileKey">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:AddProfileKey"]>;
  BatchGetCalculatedAttributeForProfile(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:BatchGetCalculatedAttributeForProfile">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:BatchGetCalculatedAttributeForProfile"]>;
  BatchGetProfile(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:BatchGetProfile">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:BatchGetProfile"]>;
  BatchPutProfileObject(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:BatchPutProfileObject">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:BatchPutProfileObject"]>;
  CreateCalculatedAttributeDefinition(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:CreateCalculatedAttributeDefinition">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:CreateCalculatedAttributeDefinition"]>;
  CreateDomainCustomerProfiles(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:CreateDomain">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:CreateDomain"]>;
  CreateDomainLayout(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:CreateDomainLayout">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:CreateDomainLayout"]>;
  CreateEventStream(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:CreateEventStream">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:CreateEventStream"]>;
  CreateEventTrigger(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:CreateEventTrigger">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:CreateEventTrigger"]>;
  CreateIntegrationWorkflow(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:CreateIntegrationWorkflow">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:CreateIntegrationWorkflow"]>;
  CreateProfile(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:CreateProfile">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:CreateProfile"]>;
  CreateRecommender(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:CreateRecommender">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:CreateRecommender"]>;
  CreateRecommenderFilter(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:CreateRecommenderFilter">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:CreateRecommenderFilter"]>;
  CreateRecommenderSchema(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:CreateRecommenderSchema">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:CreateRecommenderSchema"]>;
  CreateSegmentDefinition(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:CreateSegmentDefinition">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:CreateSegmentDefinition"]>;
  CreateSegmentEstimate(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:CreateSegmentEstimate">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:CreateSegmentEstimate"]>;
  CreateSegmentSnapshot(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:CreateSegmentSnapshot">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:CreateSegmentSnapshot"]>;
  CreateUploadJob(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:CreateUploadJob">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:CreateUploadJob"]>;
  DeleteCalculatedAttributeDefinition(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteCalculatedAttributeDefinition">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:DeleteCalculatedAttributeDefinition"]>;
  DeleteDomainCustomerProfiles(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteDomain">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:DeleteDomain"]>;
  DeleteDomainLayout(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteDomainLayout">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:DeleteDomainLayout"]>;
  DeleteDomainObjectType(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteDomainObjectType">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:DeleteDomainObjectType"]>;
  DeleteEventStream(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteEventStream">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:DeleteEventStream"]>;
  DeleteEventTrigger(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteEventTrigger">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:DeleteEventTrigger"]>;
  DeleteIntegration(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteIntegration">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:DeleteIntegration"]>;
  DeleteProfile(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteProfile">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:DeleteProfile"]>;
  DeleteProfileKey(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteProfileKey">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:DeleteProfileKey"]>;
  DeleteProfileObject(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteProfileObject">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:DeleteProfileObject"]>;
  DeleteProfileObjectType(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteProfileObjectType">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:DeleteProfileObjectType"]>;
  DeleteRecommender(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteRecommender">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:DeleteRecommender"]>;
  DeleteRecommenderFilter(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteRecommenderFilter">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:DeleteRecommenderFilter"]>;
  DeleteRecommenderSchema(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteRecommenderSchema">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:DeleteRecommenderSchema"]>;
  DeleteSegmentDefinition(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteSegmentDefinition">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:DeleteSegmentDefinition"]>;
  DeleteWorkflow(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteWorkflow">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:DeleteWorkflow"]>;
  DetectProfileObjectType(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:DetectProfileObjectType">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:DetectProfileObjectType"]>;
  GetAutoMergingPreview(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetAutoMergingPreview">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetAutoMergingPreview"]>;
}

export const AmazonConnectFullApiDomains01GeneratedFunctionNames = [
  "BatchGetCaseRule",
  "BatchGetField",
  "BatchPutFieldOptions",
  "CreateCase",
  "CreateCaseRule",
  "CreateDomain",
  "CreateField",
  "CreateLayout",
  "CreateRelatedItem",
  "CreateTemplate",
  "DeleteCase",
  "DeleteCaseRule",
  "DeleteDomain",
  "DeleteField",
  "DeleteLayout",
  "DeleteRelatedItem",
  "DeleteTemplate",
  "GetCase",
  "GetCaseAuditEvents",
  "GetCaseEventConfiguration",
  "GetDomain",
  "GetLayout",
  "GetTemplate",
  "ListCaseRules",
  "ListCasesForContact",
  "ListFieldOptions",
  "ListFields",
  "ListLayouts",
  "ListTemplates",
  "PutCaseEventConfiguration",
  "SearchAllRelatedItems",
  "SearchCases",
  "SearchRelatedItems",
  "UpdateCase",
  "UpdateCaseRule",
  "UpdateField",
  "UpdateLayout",
  "UpdateRelatedItem",
  "UpdateTemplate",
  "ActivateSubscription",
  "CreateSubscription",
  "DeactivateSubscription",
  "GetSubscription",
  "ListSubscriptions",
  "AddProfileKey",
  "BatchGetCalculatedAttributeForProfile",
  "BatchGetProfile",
  "BatchPutProfileObject",
  "CreateCalculatedAttributeDefinition",
  "CreateDomainCustomerProfiles",
  "CreateDomainLayout",
  "CreateEventStream",
  "CreateEventTrigger",
  "CreateIntegrationWorkflow",
  "CreateProfile",
  "CreateRecommender",
  "CreateRecommenderFilter",
  "CreateRecommenderSchema",
  "CreateSegmentDefinition",
  "CreateSegmentEstimate",
  "CreateSegmentSnapshot",
  "CreateUploadJob",
  "DeleteCalculatedAttributeDefinition",
  "DeleteDomainCustomerProfiles",
  "DeleteDomainLayout",
  "DeleteDomainObjectType",
  "DeleteEventStream",
  "DeleteEventTrigger",
  "DeleteIntegration",
  "DeleteProfile",
  "DeleteProfileKey",
  "DeleteProfileObject",
  "DeleteProfileObjectType",
  "DeleteRecommender",
  "DeleteRecommenderFilter",
  "DeleteRecommenderSchema",
  "DeleteSegmentDefinition",
  "DeleteWorkflow",
  "DetectProfileObjectType",
  "GetAutoMergingPreview"
] as const satisfies readonly (keyof AmazonConnectFullApiDomains01GeneratedClient)[];

export function createAmazonConnectFullApiDomains01GeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiDomains01GeneratedClient {
  return {
    BatchGetCaseRule: (...args) => callOperation("connectcases:BatchGetCaseRule", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:BatchGetCaseRule">)),
    BatchGetField: (...args) => callOperation("connectcases:BatchGetField", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:BatchGetField">)),
    BatchPutFieldOptions: (...args) => callOperation("connectcases:BatchPutFieldOptions", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:BatchPutFieldOptions">)),
    CreateCase: (...args) => callOperation("connectcases:CreateCase", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:CreateCase">)),
    CreateCaseRule: (...args) => callOperation("connectcases:CreateCaseRule", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:CreateCaseRule">)),
    CreateDomain: (...args) => callOperation("connectcases:CreateDomain", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:CreateDomain">)),
    CreateField: (...args) => callOperation("connectcases:CreateField", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:CreateField">)),
    CreateLayout: (...args) => callOperation("connectcases:CreateLayout", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:CreateLayout">)),
    CreateRelatedItem: (...args) => callOperation("connectcases:CreateRelatedItem", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:CreateRelatedItem">)),
    CreateTemplate: (...args) => callOperation("connectcases:CreateTemplate", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:CreateTemplate">)),
    DeleteCase: (...args) => callOperation("connectcases:DeleteCase", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:DeleteCase">)),
    DeleteCaseRule: (...args) => callOperation("connectcases:DeleteCaseRule", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:DeleteCaseRule">)),
    DeleteDomain: (...args) => callOperation("connectcases:DeleteDomain", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:DeleteDomain">)),
    DeleteField: (...args) => callOperation("connectcases:DeleteField", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:DeleteField">)),
    DeleteLayout: (...args) => callOperation("connectcases:DeleteLayout", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:DeleteLayout">)),
    DeleteRelatedItem: (...args) => callOperation("connectcases:DeleteRelatedItem", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:DeleteRelatedItem">)),
    DeleteTemplate: (...args) => callOperation("connectcases:DeleteTemplate", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:DeleteTemplate">)),
    GetCase: (...args) => callOperation("connectcases:GetCase", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:GetCase">)),
    GetCaseAuditEvents: (...args) => callOperation("connectcases:GetCaseAuditEvents", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:GetCaseAuditEvents">)),
    GetCaseEventConfiguration: (...args) => callOperation("connectcases:GetCaseEventConfiguration", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:GetCaseEventConfiguration">)),
    GetDomain: (...args) => callOperation("connectcases:GetDomain", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:GetDomain">)),
    GetLayout: (...args) => callOperation("connectcases:GetLayout", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:GetLayout">)),
    GetTemplate: (...args) => callOperation("connectcases:GetTemplate", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:GetTemplate">)),
    ListCaseRules: (...args) => callOperation("connectcases:ListCaseRules", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:ListCaseRules">)),
    ListCasesForContact: (...args) => callOperation("connectcases:ListCasesForContact", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:ListCasesForContact">)),
    ListFieldOptions: (...args) => callOperation("connectcases:ListFieldOptions", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:ListFieldOptions">)),
    ListFields: (...args) => callOperation("connectcases:ListFields", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:ListFields">)),
    ListLayouts: (...args) => callOperation("connectcases:ListLayouts", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:ListLayouts">)),
    ListTemplates: (...args) => callOperation("connectcases:ListTemplates", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:ListTemplates">)),
    PutCaseEventConfiguration: (...args) => callOperation("connectcases:PutCaseEventConfiguration", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:PutCaseEventConfiguration">)),
    SearchAllRelatedItems: (...args) => callOperation("connectcases:SearchAllRelatedItems", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:SearchAllRelatedItems">)),
    SearchCases: (...args) => callOperation("connectcases:SearchCases", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:SearchCases">)),
    SearchRelatedItems: (...args) => callOperation("connectcases:SearchRelatedItems", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:SearchRelatedItems">)),
    UpdateCase: (...args) => callOperation("connectcases:UpdateCase", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:UpdateCase">)),
    UpdateCaseRule: (...args) => callOperation("connectcases:UpdateCaseRule", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:UpdateCaseRule">)),
    UpdateField: (...args) => callOperation("connectcases:UpdateField", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:UpdateField">)),
    UpdateLayout: (...args) => callOperation("connectcases:UpdateLayout", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:UpdateLayout">)),
    UpdateRelatedItem: (...args) => callOperation("connectcases:UpdateRelatedItem", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:UpdateRelatedItem">)),
    UpdateTemplate: (...args) => callOperation("connectcases:UpdateTemplate", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:UpdateTemplate">)),
    ActivateSubscription: (...args) => callOperation("connecthealth:ActivateSubscription", ...(args as AmazonConnectFullApiOperationArgs<"connecthealth:ActivateSubscription">)),
    CreateSubscription: (...args) => callOperation("connecthealth:CreateSubscription", ...(args as AmazonConnectFullApiOperationArgs<"connecthealth:CreateSubscription">)),
    DeactivateSubscription: (...args) => callOperation("connecthealth:DeactivateSubscription", ...(args as AmazonConnectFullApiOperationArgs<"connecthealth:DeactivateSubscription">)),
    GetSubscription: (...args) => callOperation("connecthealth:GetSubscription", ...(args as AmazonConnectFullApiOperationArgs<"connecthealth:GetSubscription">)),
    ListSubscriptions: (...args) => callOperation("connecthealth:ListSubscriptions", ...(args as AmazonConnectFullApiOperationArgs<"connecthealth:ListSubscriptions">)),
    AddProfileKey: (...args) => callOperation("customer-profiles:AddProfileKey", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:AddProfileKey">)),
    BatchGetCalculatedAttributeForProfile: (...args) => callOperation("customer-profiles:BatchGetCalculatedAttributeForProfile", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:BatchGetCalculatedAttributeForProfile">)),
    BatchGetProfile: (...args) => callOperation("customer-profiles:BatchGetProfile", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:BatchGetProfile">)),
    BatchPutProfileObject: (...args) => callOperation("customer-profiles:BatchPutProfileObject", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:BatchPutProfileObject">)),
    CreateCalculatedAttributeDefinition: (...args) => callOperation("customer-profiles:CreateCalculatedAttributeDefinition", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:CreateCalculatedAttributeDefinition">)),
    CreateDomainCustomerProfiles: (...args) => callOperation("customer-profiles:CreateDomain", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:CreateDomain">)),
    CreateDomainLayout: (...args) => callOperation("customer-profiles:CreateDomainLayout", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:CreateDomainLayout">)),
    CreateEventStream: (...args) => callOperation("customer-profiles:CreateEventStream", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:CreateEventStream">)),
    CreateEventTrigger: (...args) => callOperation("customer-profiles:CreateEventTrigger", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:CreateEventTrigger">)),
    CreateIntegrationWorkflow: (...args) => callOperation("customer-profiles:CreateIntegrationWorkflow", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:CreateIntegrationWorkflow">)),
    CreateProfile: (...args) => callOperation("customer-profiles:CreateProfile", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:CreateProfile">)),
    CreateRecommender: (...args) => callOperation("customer-profiles:CreateRecommender", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:CreateRecommender">)),
    CreateRecommenderFilter: (...args) => callOperation("customer-profiles:CreateRecommenderFilter", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:CreateRecommenderFilter">)),
    CreateRecommenderSchema: (...args) => callOperation("customer-profiles:CreateRecommenderSchema", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:CreateRecommenderSchema">)),
    CreateSegmentDefinition: (...args) => callOperation("customer-profiles:CreateSegmentDefinition", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:CreateSegmentDefinition">)),
    CreateSegmentEstimate: (...args) => callOperation("customer-profiles:CreateSegmentEstimate", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:CreateSegmentEstimate">)),
    CreateSegmentSnapshot: (...args) => callOperation("customer-profiles:CreateSegmentSnapshot", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:CreateSegmentSnapshot">)),
    CreateUploadJob: (...args) => callOperation("customer-profiles:CreateUploadJob", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:CreateUploadJob">)),
    DeleteCalculatedAttributeDefinition: (...args) => callOperation("customer-profiles:DeleteCalculatedAttributeDefinition", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteCalculatedAttributeDefinition">)),
    DeleteDomainCustomerProfiles: (...args) => callOperation("customer-profiles:DeleteDomain", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteDomain">)),
    DeleteDomainLayout: (...args) => callOperation("customer-profiles:DeleteDomainLayout", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteDomainLayout">)),
    DeleteDomainObjectType: (...args) => callOperation("customer-profiles:DeleteDomainObjectType", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteDomainObjectType">)),
    DeleteEventStream: (...args) => callOperation("customer-profiles:DeleteEventStream", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteEventStream">)),
    DeleteEventTrigger: (...args) => callOperation("customer-profiles:DeleteEventTrigger", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteEventTrigger">)),
    DeleteIntegration: (...args) => callOperation("customer-profiles:DeleteIntegration", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteIntegration">)),
    DeleteProfile: (...args) => callOperation("customer-profiles:DeleteProfile", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteProfile">)),
    DeleteProfileKey: (...args) => callOperation("customer-profiles:DeleteProfileKey", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteProfileKey">)),
    DeleteProfileObject: (...args) => callOperation("customer-profiles:DeleteProfileObject", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteProfileObject">)),
    DeleteProfileObjectType: (...args) => callOperation("customer-profiles:DeleteProfileObjectType", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteProfileObjectType">)),
    DeleteRecommender: (...args) => callOperation("customer-profiles:DeleteRecommender", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteRecommender">)),
    DeleteRecommenderFilter: (...args) => callOperation("customer-profiles:DeleteRecommenderFilter", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteRecommenderFilter">)),
    DeleteRecommenderSchema: (...args) => callOperation("customer-profiles:DeleteRecommenderSchema", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteRecommenderSchema">)),
    DeleteSegmentDefinition: (...args) => callOperation("customer-profiles:DeleteSegmentDefinition", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteSegmentDefinition">)),
    DeleteWorkflow: (...args) => callOperation("customer-profiles:DeleteWorkflow", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:DeleteWorkflow">)),
    DetectProfileObjectType: (...args) => callOperation("customer-profiles:DetectProfileObjectType", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:DetectProfileObjectType">)),
    GetAutoMergingPreview: (...args) => callOperation("customer-profiles:GetAutoMergingPreview", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetAutoMergingPreview">)),
  };
}
