// Generated endpoint chunk for SesFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  SesGeneratedOperationCaller,
  SesFullApiOperationArgs,
  SesFullApiOperationInput,
  SesFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { SesFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const SesFullApiGeneralOperationKeys = [
  "ses:CloneReceiptRuleSet",
  "ses:CreateConfigurationSetEventDestination",
  "ses:CreateConfigurationSet",
  "ses:CreateConfigurationSetTrackingOptions",
  "ses:CreateCustomVerificationEmailTemplate",
  "ses:CreateReceiptFilter",
  "ses:CreateReceiptRule",
  "ses:CreateReceiptRuleSet",
  "ses:CreateTemplate",
  "ses:DeleteConfigurationSetEventDestination",
  "ses:DeleteConfigurationSet",
  "ses:DeleteConfigurationSetTrackingOptions",
  "ses:DeleteCustomVerificationEmailTemplate",
  "ses:DeleteIdentity",
  "ses:DeleteIdentityPolicy",
  "ses:DeleteReceiptFilter",
  "ses:DeleteReceiptRule",
  "ses:DeleteReceiptRuleSet",
  "ses:DeleteTemplate",
  "ses:DeleteVerifiedEmailAddress",
  "ses:DescribeActiveReceiptRuleSet",
  "ses:DescribeConfigurationSet",
  "ses:DescribeReceiptRule",
  "ses:DescribeReceiptRuleSet",
  "ses:GetAccountSendingEnabled",
  "ses:GetCustomVerificationEmailTemplate",
  "ses:GetIdentityDkimAttributes",
  "ses:GetIdentityMailFromDomainAttributes",
  "ses:GetIdentityNotificationAttributes",
  "ses:GetIdentityPolicies",
  "ses:GetIdentityVerificationAttributes",
  "ses:GetSendQuota",
  "ses:GetSendStatistics",
  "ses:GetTemplate",
  "ses:ListConfigurationSets",
  "ses:ListCustomVerificationEmailTemplates",
  "ses:ListIdentities",
  "ses:ListIdentityPolicies",
  "ses:ListReceiptFilters",
  "ses:ListReceiptRuleSets",
  "ses:ListTemplates",
  "ses:ListVerifiedEmailAddresses",
  "ses:PutConfigurationSetDeliveryOptions",
  "ses:PutIdentityPolicy",
  "ses:ReorderReceiptRuleSet",
  "ses:SendBounce",
  "ses:SendBulkTemplatedEmail",
  "ses:SendCustomVerificationEmail",
  "ses:SendEmail",
  "ses:SendRawEmail",
  "ses:SendTemplatedEmail",
  "ses:SetActiveReceiptRuleSet",
  "ses:SetIdentityDkimEnabled",
  "ses:SetIdentityFeedbackForwardingEnabled",
  "ses:SetIdentityHeadersInNotificationsEnabled",
  "ses:SetIdentityMailFromDomain",
  "ses:SetIdentityNotificationTopic",
  "ses:SetReceiptRulePosition",
  "ses:TestRenderTemplate",
  "ses:UpdateAccountSendingEnabled",
  "ses:UpdateConfigurationSetEventDestination",
  "ses:UpdateConfigurationSetReputationMetricsEnabled",
  "ses:UpdateConfigurationSetSendingEnabled",
  "ses:UpdateConfigurationSetTrackingOptions",
  "ses:UpdateCustomVerificationEmailTemplate",
  "ses:UpdateReceiptRule",
  "ses:UpdateTemplate",
  "ses:VerifyDomainDkim",
  "ses:VerifyDomainIdentity",
  "ses:VerifyEmailAddress",
  "ses:VerifyEmailIdentity"
] as const;
export type SesFullApiGeneralOperationKey = typeof SesFullApiGeneralOperationKeys[number];
// End hardened literal operation keys.

export interface SesFullApiGeneralOperationPathParamMap {
  "ses:CloneReceiptRuleSet": {};
  "ses:CreateConfigurationSetEventDestination": {};
  "ses:CreateConfigurationSet": {};
  "ses:CreateConfigurationSetTrackingOptions": {};
  "ses:CreateCustomVerificationEmailTemplate": {};
  "ses:CreateReceiptFilter": {};
  "ses:CreateReceiptRule": {};
  "ses:CreateReceiptRuleSet": {};
  "ses:CreateTemplate": {};
  "ses:DeleteConfigurationSetEventDestination": {};
  "ses:DeleteConfigurationSet": {};
  "ses:DeleteConfigurationSetTrackingOptions": {};
  "ses:DeleteCustomVerificationEmailTemplate": {};
  "ses:DeleteIdentity": {};
  "ses:DeleteIdentityPolicy": {};
  "ses:DeleteReceiptFilter": {};
  "ses:DeleteReceiptRule": {};
  "ses:DeleteReceiptRuleSet": {};
  "ses:DeleteTemplate": {};
  "ses:DeleteVerifiedEmailAddress": {};
  "ses:DescribeActiveReceiptRuleSet": {};
  "ses:DescribeConfigurationSet": {};
  "ses:DescribeReceiptRule": {};
  "ses:DescribeReceiptRuleSet": {};
  "ses:GetAccountSendingEnabled": {};
  "ses:GetCustomVerificationEmailTemplate": {};
  "ses:GetIdentityDkimAttributes": {};
  "ses:GetIdentityMailFromDomainAttributes": {};
  "ses:GetIdentityNotificationAttributes": {};
  "ses:GetIdentityPolicies": {};
  "ses:GetIdentityVerificationAttributes": {};
  "ses:GetSendQuota": {};
  "ses:GetSendStatistics": {};
  "ses:GetTemplate": {};
  "ses:ListConfigurationSets": {};
  "ses:ListCustomVerificationEmailTemplates": {};
  "ses:ListIdentities": {};
  "ses:ListIdentityPolicies": {};
  "ses:ListReceiptFilters": {};
  "ses:ListReceiptRuleSets": {};
  "ses:ListTemplates": {};
  "ses:ListVerifiedEmailAddresses": {};
  "ses:PutConfigurationSetDeliveryOptions": {};
  "ses:PutIdentityPolicy": {};
  "ses:ReorderReceiptRuleSet": {};
  "ses:SendBounce": {};
  "ses:SendBulkTemplatedEmail": {};
  "ses:SendCustomVerificationEmail": {};
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
  "ses:TestRenderTemplate": {};
  "ses:UpdateAccountSendingEnabled": {};
  "ses:UpdateConfigurationSetEventDestination": {};
  "ses:UpdateConfigurationSetReputationMetricsEnabled": {};
  "ses:UpdateConfigurationSetSendingEnabled": {};
  "ses:UpdateConfigurationSetTrackingOptions": {};
  "ses:UpdateCustomVerificationEmailTemplate": {};
  "ses:UpdateReceiptRule": {};
  "ses:UpdateTemplate": {};
  "ses:VerifyDomainDkim": {};
  "ses:VerifyDomainIdentity": {};
  "ses:VerifyEmailAddress": {};
  "ses:VerifyEmailIdentity": {};
}

export interface SesFullApiGeneralOperationRequestMap {
  "ses:CloneReceiptRuleSet": SesFullApiOperationInput<"ses:CloneReceiptRuleSet">;
  "ses:CreateConfigurationSetEventDestination": SesFullApiOperationInput<"ses:CreateConfigurationSetEventDestination">;
  "ses:CreateConfigurationSet": SesFullApiOperationInput<"ses:CreateConfigurationSet">;
  "ses:CreateConfigurationSetTrackingOptions": SesFullApiOperationInput<"ses:CreateConfigurationSetTrackingOptions">;
  "ses:CreateCustomVerificationEmailTemplate": SesFullApiOperationInput<"ses:CreateCustomVerificationEmailTemplate">;
  "ses:CreateReceiptFilter": SesFullApiOperationInput<"ses:CreateReceiptFilter">;
  "ses:CreateReceiptRule": SesFullApiOperationInput<"ses:CreateReceiptRule">;
  "ses:CreateReceiptRuleSet": SesFullApiOperationInput<"ses:CreateReceiptRuleSet">;
  "ses:CreateTemplate": SesFullApiOperationInput<"ses:CreateTemplate">;
  "ses:DeleteConfigurationSetEventDestination": SesFullApiOperationInput<"ses:DeleteConfigurationSetEventDestination">;
  "ses:DeleteConfigurationSet": SesFullApiOperationInput<"ses:DeleteConfigurationSet">;
  "ses:DeleteConfigurationSetTrackingOptions": SesFullApiOperationInput<"ses:DeleteConfigurationSetTrackingOptions">;
  "ses:DeleteCustomVerificationEmailTemplate": SesFullApiOperationInput<"ses:DeleteCustomVerificationEmailTemplate">;
  "ses:DeleteIdentity": SesFullApiOperationInput<"ses:DeleteIdentity">;
  "ses:DeleteIdentityPolicy": SesFullApiOperationInput<"ses:DeleteIdentityPolicy">;
  "ses:DeleteReceiptFilter": SesFullApiOperationInput<"ses:DeleteReceiptFilter">;
  "ses:DeleteReceiptRule": SesFullApiOperationInput<"ses:DeleteReceiptRule">;
  "ses:DeleteReceiptRuleSet": SesFullApiOperationInput<"ses:DeleteReceiptRuleSet">;
  "ses:DeleteTemplate": SesFullApiOperationInput<"ses:DeleteTemplate">;
  "ses:DeleteVerifiedEmailAddress": SesFullApiOperationInput<"ses:DeleteVerifiedEmailAddress">;
  "ses:DescribeActiveReceiptRuleSet": SesFullApiOperationInput<"ses:DescribeActiveReceiptRuleSet">;
  "ses:DescribeConfigurationSet": SesFullApiOperationInput<"ses:DescribeConfigurationSet">;
  "ses:DescribeReceiptRule": SesFullApiOperationInput<"ses:DescribeReceiptRule">;
  "ses:DescribeReceiptRuleSet": SesFullApiOperationInput<"ses:DescribeReceiptRuleSet">;
  "ses:GetAccountSendingEnabled": SesFullApiOperationInput<"ses:GetAccountSendingEnabled">;
  "ses:GetCustomVerificationEmailTemplate": SesFullApiOperationInput<"ses:GetCustomVerificationEmailTemplate">;
  "ses:GetIdentityDkimAttributes": SesFullApiOperationInput<"ses:GetIdentityDkimAttributes">;
  "ses:GetIdentityMailFromDomainAttributes": SesFullApiOperationInput<"ses:GetIdentityMailFromDomainAttributes">;
  "ses:GetIdentityNotificationAttributes": SesFullApiOperationInput<"ses:GetIdentityNotificationAttributes">;
  "ses:GetIdentityPolicies": SesFullApiOperationInput<"ses:GetIdentityPolicies">;
  "ses:GetIdentityVerificationAttributes": SesFullApiOperationInput<"ses:GetIdentityVerificationAttributes">;
  "ses:GetSendQuota": SesFullApiOperationInput<"ses:GetSendQuota">;
  "ses:GetSendStatistics": SesFullApiOperationInput<"ses:GetSendStatistics">;
  "ses:GetTemplate": SesFullApiOperationInput<"ses:GetTemplate">;
  "ses:ListConfigurationSets": SesFullApiOperationInput<"ses:ListConfigurationSets">;
  "ses:ListCustomVerificationEmailTemplates": SesFullApiOperationInput<"ses:ListCustomVerificationEmailTemplates">;
  "ses:ListIdentities": SesFullApiOperationInput<"ses:ListIdentities">;
  "ses:ListIdentityPolicies": SesFullApiOperationInput<"ses:ListIdentityPolicies">;
  "ses:ListReceiptFilters": SesFullApiOperationInput<"ses:ListReceiptFilters">;
  "ses:ListReceiptRuleSets": SesFullApiOperationInput<"ses:ListReceiptRuleSets">;
  "ses:ListTemplates": SesFullApiOperationInput<"ses:ListTemplates">;
  "ses:ListVerifiedEmailAddresses": SesFullApiOperationInput<"ses:ListVerifiedEmailAddresses">;
  "ses:PutConfigurationSetDeliveryOptions": SesFullApiOperationInput<"ses:PutConfigurationSetDeliveryOptions">;
  "ses:PutIdentityPolicy": SesFullApiOperationInput<"ses:PutIdentityPolicy">;
  "ses:ReorderReceiptRuleSet": SesFullApiOperationInput<"ses:ReorderReceiptRuleSet">;
  "ses:SendBounce": SesFullApiOperationInput<"ses:SendBounce">;
  "ses:SendBulkTemplatedEmail": SesFullApiOperationInput<"ses:SendBulkTemplatedEmail">;
  "ses:SendCustomVerificationEmail": SesFullApiOperationInput<"ses:SendCustomVerificationEmail">;
  "ses:SendEmail": SesFullApiOperationInput<"ses:SendEmail">;
  "ses:SendRawEmail": SesFullApiOperationInput<"ses:SendRawEmail">;
  "ses:SendTemplatedEmail": SesFullApiOperationInput<"ses:SendTemplatedEmail">;
  "ses:SetActiveReceiptRuleSet": SesFullApiOperationInput<"ses:SetActiveReceiptRuleSet">;
  "ses:SetIdentityDkimEnabled": SesFullApiOperationInput<"ses:SetIdentityDkimEnabled">;
  "ses:SetIdentityFeedbackForwardingEnabled": SesFullApiOperationInput<"ses:SetIdentityFeedbackForwardingEnabled">;
  "ses:SetIdentityHeadersInNotificationsEnabled": SesFullApiOperationInput<"ses:SetIdentityHeadersInNotificationsEnabled">;
  "ses:SetIdentityMailFromDomain": SesFullApiOperationInput<"ses:SetIdentityMailFromDomain">;
  "ses:SetIdentityNotificationTopic": SesFullApiOperationInput<"ses:SetIdentityNotificationTopic">;
  "ses:SetReceiptRulePosition": SesFullApiOperationInput<"ses:SetReceiptRulePosition">;
  "ses:TestRenderTemplate": SesFullApiOperationInput<"ses:TestRenderTemplate">;
  "ses:UpdateAccountSendingEnabled": SesFullApiOperationInput<"ses:UpdateAccountSendingEnabled">;
  "ses:UpdateConfigurationSetEventDestination": SesFullApiOperationInput<"ses:UpdateConfigurationSetEventDestination">;
  "ses:UpdateConfigurationSetReputationMetricsEnabled": SesFullApiOperationInput<"ses:UpdateConfigurationSetReputationMetricsEnabled">;
  "ses:UpdateConfigurationSetSendingEnabled": SesFullApiOperationInput<"ses:UpdateConfigurationSetSendingEnabled">;
  "ses:UpdateConfigurationSetTrackingOptions": SesFullApiOperationInput<"ses:UpdateConfigurationSetTrackingOptions">;
  "ses:UpdateCustomVerificationEmailTemplate": SesFullApiOperationInput<"ses:UpdateCustomVerificationEmailTemplate">;
  "ses:UpdateReceiptRule": SesFullApiOperationInput<"ses:UpdateReceiptRule">;
  "ses:UpdateTemplate": SesFullApiOperationInput<"ses:UpdateTemplate">;
  "ses:VerifyDomainDkim": SesFullApiOperationInput<"ses:VerifyDomainDkim">;
  "ses:VerifyDomainIdentity": SesFullApiOperationInput<"ses:VerifyDomainIdentity">;
  "ses:VerifyEmailAddress": SesFullApiOperationInput<"ses:VerifyEmailAddress">;
  "ses:VerifyEmailIdentity": SesFullApiOperationInput<"ses:VerifyEmailIdentity">;
}

export interface SesFullApiGeneralGeneratedClient {
  CloneReceiptRuleSet(...args: SesFullApiOperationArgs<"ses:CloneReceiptRuleSet">): Promise<SesFullApiOperationResponseMap["ses:CloneReceiptRuleSet"]>;
  CreateConfigurationSetEventDestinationSes(...args: SesFullApiOperationArgs<"ses:CreateConfigurationSetEventDestination">): Promise<SesFullApiOperationResponseMap["ses:CreateConfigurationSetEventDestination"]>;
  CreateConfigurationSetSes(...args: SesFullApiOperationArgs<"ses:CreateConfigurationSet">): Promise<SesFullApiOperationResponseMap["ses:CreateConfigurationSet"]>;
  CreateConfigurationSetTrackingOptions(...args: SesFullApiOperationArgs<"ses:CreateConfigurationSetTrackingOptions">): Promise<SesFullApiOperationResponseMap["ses:CreateConfigurationSetTrackingOptions"]>;
  CreateCustomVerificationEmailTemplateSes(...args: SesFullApiOperationArgs<"ses:CreateCustomVerificationEmailTemplate">): Promise<SesFullApiOperationResponseMap["ses:CreateCustomVerificationEmailTemplate"]>;
  CreateReceiptFilter(...args: SesFullApiOperationArgs<"ses:CreateReceiptFilter">): Promise<SesFullApiOperationResponseMap["ses:CreateReceiptFilter"]>;
  CreateReceiptRule(...args: SesFullApiOperationArgs<"ses:CreateReceiptRule">): Promise<SesFullApiOperationResponseMap["ses:CreateReceiptRule"]>;
  CreateReceiptRuleSet(...args: SesFullApiOperationArgs<"ses:CreateReceiptRuleSet">): Promise<SesFullApiOperationResponseMap["ses:CreateReceiptRuleSet"]>;
  CreateTemplate(...args: SesFullApiOperationArgs<"ses:CreateTemplate">): Promise<SesFullApiOperationResponseMap["ses:CreateTemplate"]>;
  DeleteConfigurationSetEventDestinationSes(...args: SesFullApiOperationArgs<"ses:DeleteConfigurationSetEventDestination">): Promise<SesFullApiOperationResponseMap["ses:DeleteConfigurationSetEventDestination"]>;
  DeleteConfigurationSetSes(...args: SesFullApiOperationArgs<"ses:DeleteConfigurationSet">): Promise<SesFullApiOperationResponseMap["ses:DeleteConfigurationSet"]>;
  DeleteConfigurationSetTrackingOptions(...args: SesFullApiOperationArgs<"ses:DeleteConfigurationSetTrackingOptions">): Promise<SesFullApiOperationResponseMap["ses:DeleteConfigurationSetTrackingOptions"]>;
  DeleteCustomVerificationEmailTemplateSes(...args: SesFullApiOperationArgs<"ses:DeleteCustomVerificationEmailTemplate">): Promise<SesFullApiOperationResponseMap["ses:DeleteCustomVerificationEmailTemplate"]>;
  DeleteIdentity(...args: SesFullApiOperationArgs<"ses:DeleteIdentity">): Promise<SesFullApiOperationResponseMap["ses:DeleteIdentity"]>;
  DeleteIdentityPolicy(...args: SesFullApiOperationArgs<"ses:DeleteIdentityPolicy">): Promise<SesFullApiOperationResponseMap["ses:DeleteIdentityPolicy"]>;
  DeleteReceiptFilter(...args: SesFullApiOperationArgs<"ses:DeleteReceiptFilter">): Promise<SesFullApiOperationResponseMap["ses:DeleteReceiptFilter"]>;
  DeleteReceiptRule(...args: SesFullApiOperationArgs<"ses:DeleteReceiptRule">): Promise<SesFullApiOperationResponseMap["ses:DeleteReceiptRule"]>;
  DeleteReceiptRuleSet(...args: SesFullApiOperationArgs<"ses:DeleteReceiptRuleSet">): Promise<SesFullApiOperationResponseMap["ses:DeleteReceiptRuleSet"]>;
  DeleteTemplate(...args: SesFullApiOperationArgs<"ses:DeleteTemplate">): Promise<SesFullApiOperationResponseMap["ses:DeleteTemplate"]>;
  DeleteVerifiedEmailAddress(...args: SesFullApiOperationArgs<"ses:DeleteVerifiedEmailAddress">): Promise<SesFullApiOperationResponseMap["ses:DeleteVerifiedEmailAddress"]>;
  DescribeActiveReceiptRuleSet(...args: SesFullApiOperationArgs<"ses:DescribeActiveReceiptRuleSet">): Promise<SesFullApiOperationResponseMap["ses:DescribeActiveReceiptRuleSet"]>;
  DescribeConfigurationSet(...args: SesFullApiOperationArgs<"ses:DescribeConfigurationSet">): Promise<SesFullApiOperationResponseMap["ses:DescribeConfigurationSet"]>;
  DescribeReceiptRule(...args: SesFullApiOperationArgs<"ses:DescribeReceiptRule">): Promise<SesFullApiOperationResponseMap["ses:DescribeReceiptRule"]>;
  DescribeReceiptRuleSet(...args: SesFullApiOperationArgs<"ses:DescribeReceiptRuleSet">): Promise<SesFullApiOperationResponseMap["ses:DescribeReceiptRuleSet"]>;
  GetAccountSendingEnabled(...args: SesFullApiOperationArgs<"ses:GetAccountSendingEnabled">): Promise<SesFullApiOperationResponseMap["ses:GetAccountSendingEnabled"]>;
  GetCustomVerificationEmailTemplateSes(...args: SesFullApiOperationArgs<"ses:GetCustomVerificationEmailTemplate">): Promise<SesFullApiOperationResponseMap["ses:GetCustomVerificationEmailTemplate"]>;
  GetIdentityDkimAttributes(...args: SesFullApiOperationArgs<"ses:GetIdentityDkimAttributes">): Promise<SesFullApiOperationResponseMap["ses:GetIdentityDkimAttributes"]>;
  GetIdentityMailFromDomainAttributes(...args: SesFullApiOperationArgs<"ses:GetIdentityMailFromDomainAttributes">): Promise<SesFullApiOperationResponseMap["ses:GetIdentityMailFromDomainAttributes"]>;
  GetIdentityNotificationAttributes(...args: SesFullApiOperationArgs<"ses:GetIdentityNotificationAttributes">): Promise<SesFullApiOperationResponseMap["ses:GetIdentityNotificationAttributes"]>;
  GetIdentityPolicies(...args: SesFullApiOperationArgs<"ses:GetIdentityPolicies">): Promise<SesFullApiOperationResponseMap["ses:GetIdentityPolicies"]>;
  GetIdentityVerificationAttributes(...args: SesFullApiOperationArgs<"ses:GetIdentityVerificationAttributes">): Promise<SesFullApiOperationResponseMap["ses:GetIdentityVerificationAttributes"]>;
  GetSendQuota(...args: SesFullApiOperationArgs<"ses:GetSendQuota">): Promise<SesFullApiOperationResponseMap["ses:GetSendQuota"]>;
  GetSendStatistics(...args: SesFullApiOperationArgs<"ses:GetSendStatistics">): Promise<SesFullApiOperationResponseMap["ses:GetSendStatistics"]>;
  GetTemplate(...args: SesFullApiOperationArgs<"ses:GetTemplate">): Promise<SesFullApiOperationResponseMap["ses:GetTemplate"]>;
  ListConfigurationSetsSes(...args: SesFullApiOperationArgs<"ses:ListConfigurationSets">): Promise<SesFullApiOperationResponseMap["ses:ListConfigurationSets"]>;
  ListCustomVerificationEmailTemplatesSes(...args: SesFullApiOperationArgs<"ses:ListCustomVerificationEmailTemplates">): Promise<SesFullApiOperationResponseMap["ses:ListCustomVerificationEmailTemplates"]>;
  ListIdentities(...args: SesFullApiOperationArgs<"ses:ListIdentities">): Promise<SesFullApiOperationResponseMap["ses:ListIdentities"]>;
  ListIdentityPolicies(...args: SesFullApiOperationArgs<"ses:ListIdentityPolicies">): Promise<SesFullApiOperationResponseMap["ses:ListIdentityPolicies"]>;
  ListReceiptFilters(...args: SesFullApiOperationArgs<"ses:ListReceiptFilters">): Promise<SesFullApiOperationResponseMap["ses:ListReceiptFilters"]>;
  ListReceiptRuleSets(...args: SesFullApiOperationArgs<"ses:ListReceiptRuleSets">): Promise<SesFullApiOperationResponseMap["ses:ListReceiptRuleSets"]>;
  ListTemplates(...args: SesFullApiOperationArgs<"ses:ListTemplates">): Promise<SesFullApiOperationResponseMap["ses:ListTemplates"]>;
  ListVerifiedEmailAddresses(...args: SesFullApiOperationArgs<"ses:ListVerifiedEmailAddresses">): Promise<SesFullApiOperationResponseMap["ses:ListVerifiedEmailAddresses"]>;
  PutConfigurationSetDeliveryOptionsSes(...args: SesFullApiOperationArgs<"ses:PutConfigurationSetDeliveryOptions">): Promise<SesFullApiOperationResponseMap["ses:PutConfigurationSetDeliveryOptions"]>;
  PutIdentityPolicy(...args: SesFullApiOperationArgs<"ses:PutIdentityPolicy">): Promise<SesFullApiOperationResponseMap["ses:PutIdentityPolicy"]>;
  ReorderReceiptRuleSet(...args: SesFullApiOperationArgs<"ses:ReorderReceiptRuleSet">): Promise<SesFullApiOperationResponseMap["ses:ReorderReceiptRuleSet"]>;
  SendBounce(...args: SesFullApiOperationArgs<"ses:SendBounce">): Promise<SesFullApiOperationResponseMap["ses:SendBounce"]>;
  SendBulkTemplatedEmail(...args: SesFullApiOperationArgs<"ses:SendBulkTemplatedEmail">): Promise<SesFullApiOperationResponseMap["ses:SendBulkTemplatedEmail"]>;
  SendCustomVerificationEmailSes(...args: SesFullApiOperationArgs<"ses:SendCustomVerificationEmail">): Promise<SesFullApiOperationResponseMap["ses:SendCustomVerificationEmail"]>;
  SendEmailSes(...args: SesFullApiOperationArgs<"ses:SendEmail">): Promise<SesFullApiOperationResponseMap["ses:SendEmail"]>;
  SendRawEmail(...args: SesFullApiOperationArgs<"ses:SendRawEmail">): Promise<SesFullApiOperationResponseMap["ses:SendRawEmail"]>;
  SendTemplatedEmail(...args: SesFullApiOperationArgs<"ses:SendTemplatedEmail">): Promise<SesFullApiOperationResponseMap["ses:SendTemplatedEmail"]>;
  SetActiveReceiptRuleSet(...args: SesFullApiOperationArgs<"ses:SetActiveReceiptRuleSet">): Promise<SesFullApiOperationResponseMap["ses:SetActiveReceiptRuleSet"]>;
  SetIdentityDkimEnabled(...args: SesFullApiOperationArgs<"ses:SetIdentityDkimEnabled">): Promise<SesFullApiOperationResponseMap["ses:SetIdentityDkimEnabled"]>;
  SetIdentityFeedbackForwardingEnabled(...args: SesFullApiOperationArgs<"ses:SetIdentityFeedbackForwardingEnabled">): Promise<SesFullApiOperationResponseMap["ses:SetIdentityFeedbackForwardingEnabled"]>;
  SetIdentityHeadersInNotificationsEnabled(...args: SesFullApiOperationArgs<"ses:SetIdentityHeadersInNotificationsEnabled">): Promise<SesFullApiOperationResponseMap["ses:SetIdentityHeadersInNotificationsEnabled"]>;
  SetIdentityMailFromDomain(...args: SesFullApiOperationArgs<"ses:SetIdentityMailFromDomain">): Promise<SesFullApiOperationResponseMap["ses:SetIdentityMailFromDomain"]>;
  SetIdentityNotificationTopic(...args: SesFullApiOperationArgs<"ses:SetIdentityNotificationTopic">): Promise<SesFullApiOperationResponseMap["ses:SetIdentityNotificationTopic"]>;
  SetReceiptRulePosition(...args: SesFullApiOperationArgs<"ses:SetReceiptRulePosition">): Promise<SesFullApiOperationResponseMap["ses:SetReceiptRulePosition"]>;
  TestRenderTemplate(...args: SesFullApiOperationArgs<"ses:TestRenderTemplate">): Promise<SesFullApiOperationResponseMap["ses:TestRenderTemplate"]>;
  UpdateAccountSendingEnabled(...args: SesFullApiOperationArgs<"ses:UpdateAccountSendingEnabled">): Promise<SesFullApiOperationResponseMap["ses:UpdateAccountSendingEnabled"]>;
  UpdateConfigurationSetEventDestinationSes(...args: SesFullApiOperationArgs<"ses:UpdateConfigurationSetEventDestination">): Promise<SesFullApiOperationResponseMap["ses:UpdateConfigurationSetEventDestination"]>;
  UpdateConfigurationSetReputationMetricsEnabled(...args: SesFullApiOperationArgs<"ses:UpdateConfigurationSetReputationMetricsEnabled">): Promise<SesFullApiOperationResponseMap["ses:UpdateConfigurationSetReputationMetricsEnabled"]>;
  UpdateConfigurationSetSendingEnabled(...args: SesFullApiOperationArgs<"ses:UpdateConfigurationSetSendingEnabled">): Promise<SesFullApiOperationResponseMap["ses:UpdateConfigurationSetSendingEnabled"]>;
  UpdateConfigurationSetTrackingOptions(...args: SesFullApiOperationArgs<"ses:UpdateConfigurationSetTrackingOptions">): Promise<SesFullApiOperationResponseMap["ses:UpdateConfigurationSetTrackingOptions"]>;
  UpdateCustomVerificationEmailTemplateSes(...args: SesFullApiOperationArgs<"ses:UpdateCustomVerificationEmailTemplate">): Promise<SesFullApiOperationResponseMap["ses:UpdateCustomVerificationEmailTemplate"]>;
  UpdateReceiptRule(...args: SesFullApiOperationArgs<"ses:UpdateReceiptRule">): Promise<SesFullApiOperationResponseMap["ses:UpdateReceiptRule"]>;
  UpdateTemplate(...args: SesFullApiOperationArgs<"ses:UpdateTemplate">): Promise<SesFullApiOperationResponseMap["ses:UpdateTemplate"]>;
  VerifyDomainDkim(...args: SesFullApiOperationArgs<"ses:VerifyDomainDkim">): Promise<SesFullApiOperationResponseMap["ses:VerifyDomainDkim"]>;
  VerifyDomainIdentity(...args: SesFullApiOperationArgs<"ses:VerifyDomainIdentity">): Promise<SesFullApiOperationResponseMap["ses:VerifyDomainIdentity"]>;
  VerifyEmailAddress(...args: SesFullApiOperationArgs<"ses:VerifyEmailAddress">): Promise<SesFullApiOperationResponseMap["ses:VerifyEmailAddress"]>;
  VerifyEmailIdentity(...args: SesFullApiOperationArgs<"ses:VerifyEmailIdentity">): Promise<SesFullApiOperationResponseMap["ses:VerifyEmailIdentity"]>;
}

export const SesFullApiGeneralGeneratedFunctionNames = [
  "CloneReceiptRuleSet",
  "CreateConfigurationSetEventDestinationSes",
  "CreateConfigurationSetSes",
  "CreateConfigurationSetTrackingOptions",
  "CreateCustomVerificationEmailTemplateSes",
  "CreateReceiptFilter",
  "CreateReceiptRule",
  "CreateReceiptRuleSet",
  "CreateTemplate",
  "DeleteConfigurationSetEventDestinationSes",
  "DeleteConfigurationSetSes",
  "DeleteConfigurationSetTrackingOptions",
  "DeleteCustomVerificationEmailTemplateSes",
  "DeleteIdentity",
  "DeleteIdentityPolicy",
  "DeleteReceiptFilter",
  "DeleteReceiptRule",
  "DeleteReceiptRuleSet",
  "DeleteTemplate",
  "DeleteVerifiedEmailAddress",
  "DescribeActiveReceiptRuleSet",
  "DescribeConfigurationSet",
  "DescribeReceiptRule",
  "DescribeReceiptRuleSet",
  "GetAccountSendingEnabled",
  "GetCustomVerificationEmailTemplateSes",
  "GetIdentityDkimAttributes",
  "GetIdentityMailFromDomainAttributes",
  "GetIdentityNotificationAttributes",
  "GetIdentityPolicies",
  "GetIdentityVerificationAttributes",
  "GetSendQuota",
  "GetSendStatistics",
  "GetTemplate",
  "ListConfigurationSetsSes",
  "ListCustomVerificationEmailTemplatesSes",
  "ListIdentities",
  "ListIdentityPolicies",
  "ListReceiptFilters",
  "ListReceiptRuleSets",
  "ListTemplates",
  "ListVerifiedEmailAddresses",
  "PutConfigurationSetDeliveryOptionsSes",
  "PutIdentityPolicy",
  "ReorderReceiptRuleSet",
  "SendBounce",
  "SendBulkTemplatedEmail",
  "SendCustomVerificationEmailSes",
  "SendEmailSes",
  "SendRawEmail",
  "SendTemplatedEmail",
  "SetActiveReceiptRuleSet",
  "SetIdentityDkimEnabled",
  "SetIdentityFeedbackForwardingEnabled",
  "SetIdentityHeadersInNotificationsEnabled",
  "SetIdentityMailFromDomain",
  "SetIdentityNotificationTopic",
  "SetReceiptRulePosition",
  "TestRenderTemplate",
  "UpdateAccountSendingEnabled",
  "UpdateConfigurationSetEventDestinationSes",
  "UpdateConfigurationSetReputationMetricsEnabled",
  "UpdateConfigurationSetSendingEnabled",
  "UpdateConfigurationSetTrackingOptions",
  "UpdateCustomVerificationEmailTemplateSes",
  "UpdateReceiptRule",
  "UpdateTemplate",
  "VerifyDomainDkim",
  "VerifyDomainIdentity",
  "VerifyEmailAddress",
  "VerifyEmailIdentity"
] as const satisfies readonly (keyof SesFullApiGeneralGeneratedClient)[];

export function createSesFullApiGeneralGeneratedClient(
  callOperation: SesGeneratedOperationCaller,
): SesFullApiGeneralGeneratedClient {
  return {
    CloneReceiptRuleSet: (...args) => callOperation("ses:CloneReceiptRuleSet", ...(args as SesFullApiOperationArgs<"ses:CloneReceiptRuleSet">)),
    CreateConfigurationSetEventDestinationSes: (...args) => callOperation("ses:CreateConfigurationSetEventDestination", ...(args as SesFullApiOperationArgs<"ses:CreateConfigurationSetEventDestination">)),
    CreateConfigurationSetSes: (...args) => callOperation("ses:CreateConfigurationSet", ...(args as SesFullApiOperationArgs<"ses:CreateConfigurationSet">)),
    CreateConfigurationSetTrackingOptions: (...args) => callOperation("ses:CreateConfigurationSetTrackingOptions", ...(args as SesFullApiOperationArgs<"ses:CreateConfigurationSetTrackingOptions">)),
    CreateCustomVerificationEmailTemplateSes: (...args) => callOperation("ses:CreateCustomVerificationEmailTemplate", ...(args as SesFullApiOperationArgs<"ses:CreateCustomVerificationEmailTemplate">)),
    CreateReceiptFilter: (...args) => callOperation("ses:CreateReceiptFilter", ...(args as SesFullApiOperationArgs<"ses:CreateReceiptFilter">)),
    CreateReceiptRule: (...args) => callOperation("ses:CreateReceiptRule", ...(args as SesFullApiOperationArgs<"ses:CreateReceiptRule">)),
    CreateReceiptRuleSet: (...args) => callOperation("ses:CreateReceiptRuleSet", ...(args as SesFullApiOperationArgs<"ses:CreateReceiptRuleSet">)),
    CreateTemplate: (...args) => callOperation("ses:CreateTemplate", ...(args as SesFullApiOperationArgs<"ses:CreateTemplate">)),
    DeleteConfigurationSetEventDestinationSes: (...args) => callOperation("ses:DeleteConfigurationSetEventDestination", ...(args as SesFullApiOperationArgs<"ses:DeleteConfigurationSetEventDestination">)),
    DeleteConfigurationSetSes: (...args) => callOperation("ses:DeleteConfigurationSet", ...(args as SesFullApiOperationArgs<"ses:DeleteConfigurationSet">)),
    DeleteConfigurationSetTrackingOptions: (...args) => callOperation("ses:DeleteConfigurationSetTrackingOptions", ...(args as SesFullApiOperationArgs<"ses:DeleteConfigurationSetTrackingOptions">)),
    DeleteCustomVerificationEmailTemplateSes: (...args) => callOperation("ses:DeleteCustomVerificationEmailTemplate", ...(args as SesFullApiOperationArgs<"ses:DeleteCustomVerificationEmailTemplate">)),
    DeleteIdentity: (...args) => callOperation("ses:DeleteIdentity", ...(args as SesFullApiOperationArgs<"ses:DeleteIdentity">)),
    DeleteIdentityPolicy: (...args) => callOperation("ses:DeleteIdentityPolicy", ...(args as SesFullApiOperationArgs<"ses:DeleteIdentityPolicy">)),
    DeleteReceiptFilter: (...args) => callOperation("ses:DeleteReceiptFilter", ...(args as SesFullApiOperationArgs<"ses:DeleteReceiptFilter">)),
    DeleteReceiptRule: (...args) => callOperation("ses:DeleteReceiptRule", ...(args as SesFullApiOperationArgs<"ses:DeleteReceiptRule">)),
    DeleteReceiptRuleSet: (...args) => callOperation("ses:DeleteReceiptRuleSet", ...(args as SesFullApiOperationArgs<"ses:DeleteReceiptRuleSet">)),
    DeleteTemplate: (...args) => callOperation("ses:DeleteTemplate", ...(args as SesFullApiOperationArgs<"ses:DeleteTemplate">)),
    DeleteVerifiedEmailAddress: (...args) => callOperation("ses:DeleteVerifiedEmailAddress", ...(args as SesFullApiOperationArgs<"ses:DeleteVerifiedEmailAddress">)),
    DescribeActiveReceiptRuleSet: (...args) => callOperation("ses:DescribeActiveReceiptRuleSet", ...(args as SesFullApiOperationArgs<"ses:DescribeActiveReceiptRuleSet">)),
    DescribeConfigurationSet: (...args) => callOperation("ses:DescribeConfigurationSet", ...(args as SesFullApiOperationArgs<"ses:DescribeConfigurationSet">)),
    DescribeReceiptRule: (...args) => callOperation("ses:DescribeReceiptRule", ...(args as SesFullApiOperationArgs<"ses:DescribeReceiptRule">)),
    DescribeReceiptRuleSet: (...args) => callOperation("ses:DescribeReceiptRuleSet", ...(args as SesFullApiOperationArgs<"ses:DescribeReceiptRuleSet">)),
    GetAccountSendingEnabled: (...args) => callOperation("ses:GetAccountSendingEnabled", ...(args as SesFullApiOperationArgs<"ses:GetAccountSendingEnabled">)),
    GetCustomVerificationEmailTemplateSes: (...args) => callOperation("ses:GetCustomVerificationEmailTemplate", ...(args as SesFullApiOperationArgs<"ses:GetCustomVerificationEmailTemplate">)),
    GetIdentityDkimAttributes: (...args) => callOperation("ses:GetIdentityDkimAttributes", ...(args as SesFullApiOperationArgs<"ses:GetIdentityDkimAttributes">)),
    GetIdentityMailFromDomainAttributes: (...args) => callOperation("ses:GetIdentityMailFromDomainAttributes", ...(args as SesFullApiOperationArgs<"ses:GetIdentityMailFromDomainAttributes">)),
    GetIdentityNotificationAttributes: (...args) => callOperation("ses:GetIdentityNotificationAttributes", ...(args as SesFullApiOperationArgs<"ses:GetIdentityNotificationAttributes">)),
    GetIdentityPolicies: (...args) => callOperation("ses:GetIdentityPolicies", ...(args as SesFullApiOperationArgs<"ses:GetIdentityPolicies">)),
    GetIdentityVerificationAttributes: (...args) => callOperation("ses:GetIdentityVerificationAttributes", ...(args as SesFullApiOperationArgs<"ses:GetIdentityVerificationAttributes">)),
    GetSendQuota: (...args) => callOperation("ses:GetSendQuota", ...(args as SesFullApiOperationArgs<"ses:GetSendQuota">)),
    GetSendStatistics: (...args) => callOperation("ses:GetSendStatistics", ...(args as SesFullApiOperationArgs<"ses:GetSendStatistics">)),
    GetTemplate: (...args) => callOperation("ses:GetTemplate", ...(args as SesFullApiOperationArgs<"ses:GetTemplate">)),
    ListConfigurationSetsSes: (...args) => callOperation("ses:ListConfigurationSets", ...(args as SesFullApiOperationArgs<"ses:ListConfigurationSets">)),
    ListCustomVerificationEmailTemplatesSes: (...args) => callOperation("ses:ListCustomVerificationEmailTemplates", ...(args as SesFullApiOperationArgs<"ses:ListCustomVerificationEmailTemplates">)),
    ListIdentities: (...args) => callOperation("ses:ListIdentities", ...(args as SesFullApiOperationArgs<"ses:ListIdentities">)),
    ListIdentityPolicies: (...args) => callOperation("ses:ListIdentityPolicies", ...(args as SesFullApiOperationArgs<"ses:ListIdentityPolicies">)),
    ListReceiptFilters: (...args) => callOperation("ses:ListReceiptFilters", ...(args as SesFullApiOperationArgs<"ses:ListReceiptFilters">)),
    ListReceiptRuleSets: (...args) => callOperation("ses:ListReceiptRuleSets", ...(args as SesFullApiOperationArgs<"ses:ListReceiptRuleSets">)),
    ListTemplates: (...args) => callOperation("ses:ListTemplates", ...(args as SesFullApiOperationArgs<"ses:ListTemplates">)),
    ListVerifiedEmailAddresses: (...args) => callOperation("ses:ListVerifiedEmailAddresses", ...(args as SesFullApiOperationArgs<"ses:ListVerifiedEmailAddresses">)),
    PutConfigurationSetDeliveryOptionsSes: (...args) => callOperation("ses:PutConfigurationSetDeliveryOptions", ...(args as SesFullApiOperationArgs<"ses:PutConfigurationSetDeliveryOptions">)),
    PutIdentityPolicy: (...args) => callOperation("ses:PutIdentityPolicy", ...(args as SesFullApiOperationArgs<"ses:PutIdentityPolicy">)),
    ReorderReceiptRuleSet: (...args) => callOperation("ses:ReorderReceiptRuleSet", ...(args as SesFullApiOperationArgs<"ses:ReorderReceiptRuleSet">)),
    SendBounce: (...args) => callOperation("ses:SendBounce", ...(args as SesFullApiOperationArgs<"ses:SendBounce">)),
    SendBulkTemplatedEmail: (...args) => callOperation("ses:SendBulkTemplatedEmail", ...(args as SesFullApiOperationArgs<"ses:SendBulkTemplatedEmail">)),
    SendCustomVerificationEmailSes: (...args) => callOperation("ses:SendCustomVerificationEmail", ...(args as SesFullApiOperationArgs<"ses:SendCustomVerificationEmail">)),
    SendEmailSes: (...args) => callOperation("ses:SendEmail", ...(args as SesFullApiOperationArgs<"ses:SendEmail">)),
    SendRawEmail: (...args) => callOperation("ses:SendRawEmail", ...(args as SesFullApiOperationArgs<"ses:SendRawEmail">)),
    SendTemplatedEmail: (...args) => callOperation("ses:SendTemplatedEmail", ...(args as SesFullApiOperationArgs<"ses:SendTemplatedEmail">)),
    SetActiveReceiptRuleSet: (...args) => callOperation("ses:SetActiveReceiptRuleSet", ...(args as SesFullApiOperationArgs<"ses:SetActiveReceiptRuleSet">)),
    SetIdentityDkimEnabled: (...args) => callOperation("ses:SetIdentityDkimEnabled", ...(args as SesFullApiOperationArgs<"ses:SetIdentityDkimEnabled">)),
    SetIdentityFeedbackForwardingEnabled: (...args) => callOperation("ses:SetIdentityFeedbackForwardingEnabled", ...(args as SesFullApiOperationArgs<"ses:SetIdentityFeedbackForwardingEnabled">)),
    SetIdentityHeadersInNotificationsEnabled: (...args) => callOperation("ses:SetIdentityHeadersInNotificationsEnabled", ...(args as SesFullApiOperationArgs<"ses:SetIdentityHeadersInNotificationsEnabled">)),
    SetIdentityMailFromDomain: (...args) => callOperation("ses:SetIdentityMailFromDomain", ...(args as SesFullApiOperationArgs<"ses:SetIdentityMailFromDomain">)),
    SetIdentityNotificationTopic: (...args) => callOperation("ses:SetIdentityNotificationTopic", ...(args as SesFullApiOperationArgs<"ses:SetIdentityNotificationTopic">)),
    SetReceiptRulePosition: (...args) => callOperation("ses:SetReceiptRulePosition", ...(args as SesFullApiOperationArgs<"ses:SetReceiptRulePosition">)),
    TestRenderTemplate: (...args) => callOperation("ses:TestRenderTemplate", ...(args as SesFullApiOperationArgs<"ses:TestRenderTemplate">)),
    UpdateAccountSendingEnabled: (...args) => callOperation("ses:UpdateAccountSendingEnabled", ...(args as SesFullApiOperationArgs<"ses:UpdateAccountSendingEnabled">)),
    UpdateConfigurationSetEventDestinationSes: (...args) => callOperation("ses:UpdateConfigurationSetEventDestination", ...(args as SesFullApiOperationArgs<"ses:UpdateConfigurationSetEventDestination">)),
    UpdateConfigurationSetReputationMetricsEnabled: (...args) => callOperation("ses:UpdateConfigurationSetReputationMetricsEnabled", ...(args as SesFullApiOperationArgs<"ses:UpdateConfigurationSetReputationMetricsEnabled">)),
    UpdateConfigurationSetSendingEnabled: (...args) => callOperation("ses:UpdateConfigurationSetSendingEnabled", ...(args as SesFullApiOperationArgs<"ses:UpdateConfigurationSetSendingEnabled">)),
    UpdateConfigurationSetTrackingOptions: (...args) => callOperation("ses:UpdateConfigurationSetTrackingOptions", ...(args as SesFullApiOperationArgs<"ses:UpdateConfigurationSetTrackingOptions">)),
    UpdateCustomVerificationEmailTemplateSes: (...args) => callOperation("ses:UpdateCustomVerificationEmailTemplate", ...(args as SesFullApiOperationArgs<"ses:UpdateCustomVerificationEmailTemplate">)),
    UpdateReceiptRule: (...args) => callOperation("ses:UpdateReceiptRule", ...(args as SesFullApiOperationArgs<"ses:UpdateReceiptRule">)),
    UpdateTemplate: (...args) => callOperation("ses:UpdateTemplate", ...(args as SesFullApiOperationArgs<"ses:UpdateTemplate">)),
    VerifyDomainDkim: (...args) => callOperation("ses:VerifyDomainDkim", ...(args as SesFullApiOperationArgs<"ses:VerifyDomainDkim">)),
    VerifyDomainIdentity: (...args) => callOperation("ses:VerifyDomainIdentity", ...(args as SesFullApiOperationArgs<"ses:VerifyDomainIdentity">)),
    VerifyEmailAddress: (...args) => callOperation("ses:VerifyEmailAddress", ...(args as SesFullApiOperationArgs<"ses:VerifyEmailAddress">)),
    VerifyEmailIdentity: (...args) => callOperation("ses:VerifyEmailIdentity", ...(args as SesFullApiOperationArgs<"ses:VerifyEmailIdentity">)),
  };
}
