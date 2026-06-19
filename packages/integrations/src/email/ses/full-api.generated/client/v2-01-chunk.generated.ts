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
export const SesFullApiV201OperationKeys = [
  "sesv2:BatchGetMetricData",
  "sesv2:CancelExportJob",
  "sesv2:CreateConfigurationSet",
  "sesv2:CreateConfigurationSetEventDestination",
  "sesv2:CreateContact",
  "sesv2:CreateContactList",
  "sesv2:CreateCustomVerificationEmailTemplate",
  "sesv2:CreateDedicatedIpPool",
  "sesv2:CreateDeliverabilityTestReport",
  "sesv2:CreateEmailIdentity",
  "sesv2:CreateEmailIdentityPolicy",
  "sesv2:CreateEmailTemplate",
  "sesv2:CreateExportJob",
  "sesv2:CreateImportJob",
  "sesv2:CreateMultiRegionEndpoint",
  "sesv2:CreateTenant",
  "sesv2:CreateTenantResourceAssociation",
  "sesv2:DeleteConfigurationSet",
  "sesv2:DeleteConfigurationSetEventDestination",
  "sesv2:DeleteContact",
  "sesv2:DeleteContactList",
  "sesv2:DeleteCustomVerificationEmailTemplate",
  "sesv2:DeleteDedicatedIpPool",
  "sesv2:DeleteEmailIdentity",
  "sesv2:DeleteEmailIdentityPolicy",
  "sesv2:DeleteEmailTemplate",
  "sesv2:DeleteMultiRegionEndpoint",
  "sesv2:DeleteSuppressedDestination",
  "sesv2:DeleteTenant",
  "sesv2:DeleteTenantResourceAssociation",
  "sesv2:GetAccount",
  "sesv2:GetBlacklistReports",
  "sesv2:GetConfigurationSet",
  "sesv2:GetConfigurationSetEventDestinations",
  "sesv2:GetContact",
  "sesv2:GetContactList",
  "sesv2:GetCustomVerificationEmailTemplate",
  "sesv2:GetDedicatedIp",
  "sesv2:GetDedicatedIpPool",
  "sesv2:GetDedicatedIps",
  "sesv2:GetDeliverabilityDashboardOptions",
  "sesv2:GetDeliverabilityTestReport",
  "sesv2:GetDomainDeliverabilityCampaign",
  "sesv2:GetDomainStatisticsReport",
  "sesv2:GetEmailAddressInsights",
  "sesv2:GetEmailIdentity",
  "sesv2:GetEmailIdentityPolicies",
  "sesv2:GetEmailTemplate",
  "sesv2:GetExportJob",
  "sesv2:GetImportJob",
  "sesv2:GetMessageInsights",
  "sesv2:GetMultiRegionEndpoint",
  "sesv2:GetReputationEntity",
  "sesv2:GetSuppressedDestination",
  "sesv2:GetTenant",
  "sesv2:ListConfigurationSets",
  "sesv2:ListContactLists",
  "sesv2:ListContacts",
  "sesv2:ListCustomVerificationEmailTemplates",
  "sesv2:ListDedicatedIpPools",
  "sesv2:ListDeliverabilityTestReports",
  "sesv2:ListDomainDeliverabilityCampaigns",
  "sesv2:ListEmailIdentities",
  "sesv2:ListEmailTemplates",
  "sesv2:ListExportJobs",
  "sesv2:ListImportJobs",
  "sesv2:ListMultiRegionEndpoints",
  "sesv2:ListRecommendations",
  "sesv2:ListReputationEntities",
  "sesv2:ListResourceTenants",
  "sesv2:ListSuppressedDestinations",
  "sesv2:ListTagsForResource",
  "sesv2:ListTenantResources",
  "sesv2:ListTenants",
  "sesv2:PutAccountDedicatedIpWarmupAttributes",
  "sesv2:PutAccountDetails",
  "sesv2:PutAccountSendingAttributes",
  "sesv2:PutAccountSuppressionAttributes",
  "sesv2:PutAccountVdmAttributes",
  "sesv2:PutConfigurationSetArchivingOptions"
] as const;
export type SesFullApiV201OperationKey = typeof SesFullApiV201OperationKeys[number];
// End hardened literal operation keys.

export interface SesFullApiV201OperationPathParamMap {
  "sesv2:BatchGetMetricData": {};
  "sesv2:CancelExportJob": { "JobId": SesFullApiPathParamValue };
  "sesv2:CreateConfigurationSet": {};
  "sesv2:CreateConfigurationSetEventDestination": { "ConfigurationSetName": SesFullApiPathParamValue };
  "sesv2:CreateContact": { "ContactListName": SesFullApiPathParamValue };
  "sesv2:CreateContactList": {};
  "sesv2:CreateCustomVerificationEmailTemplate": {};
  "sesv2:CreateDedicatedIpPool": {};
  "sesv2:CreateDeliverabilityTestReport": {};
  "sesv2:CreateEmailIdentity": {};
  "sesv2:CreateEmailIdentityPolicy": { "EmailIdentity": SesFullApiPathParamValue; "PolicyName": SesFullApiPathParamValue };
  "sesv2:CreateEmailTemplate": {};
  "sesv2:CreateExportJob": {};
  "sesv2:CreateImportJob": {};
  "sesv2:CreateMultiRegionEndpoint": {};
  "sesv2:CreateTenant": {};
  "sesv2:CreateTenantResourceAssociation": {};
  "sesv2:DeleteConfigurationSet": { "ConfigurationSetName": SesFullApiPathParamValue };
  "sesv2:DeleteConfigurationSetEventDestination": { "ConfigurationSetName": SesFullApiPathParamValue; "EventDestinationName": SesFullApiPathParamValue };
  "sesv2:DeleteContact": { "ContactListName": SesFullApiPathParamValue; "EmailAddress": SesFullApiPathParamValue };
  "sesv2:DeleteContactList": { "ContactListName": SesFullApiPathParamValue };
  "sesv2:DeleteCustomVerificationEmailTemplate": { "TemplateName": SesFullApiPathParamValue };
  "sesv2:DeleteDedicatedIpPool": { "PoolName": SesFullApiPathParamValue };
  "sesv2:DeleteEmailIdentity": { "EmailIdentity": SesFullApiPathParamValue };
  "sesv2:DeleteEmailIdentityPolicy": { "EmailIdentity": SesFullApiPathParamValue; "PolicyName": SesFullApiPathParamValue };
  "sesv2:DeleteEmailTemplate": { "TemplateName": SesFullApiPathParamValue };
  "sesv2:DeleteMultiRegionEndpoint": { "EndpointName": SesFullApiPathParamValue };
  "sesv2:DeleteSuppressedDestination": { "EmailAddress": SesFullApiPathParamValue };
  "sesv2:DeleteTenant": {};
  "sesv2:DeleteTenantResourceAssociation": {};
  "sesv2:GetAccount": {};
  "sesv2:GetBlacklistReports": {};
  "sesv2:GetConfigurationSet": { "ConfigurationSetName": SesFullApiPathParamValue };
  "sesv2:GetConfigurationSetEventDestinations": { "ConfigurationSetName": SesFullApiPathParamValue };
  "sesv2:GetContact": { "ContactListName": SesFullApiPathParamValue; "EmailAddress": SesFullApiPathParamValue };
  "sesv2:GetContactList": { "ContactListName": SesFullApiPathParamValue };
  "sesv2:GetCustomVerificationEmailTemplate": { "TemplateName": SesFullApiPathParamValue };
  "sesv2:GetDedicatedIp": { "Ip": SesFullApiPathParamValue };
  "sesv2:GetDedicatedIpPool": { "PoolName": SesFullApiPathParamValue };
  "sesv2:GetDedicatedIps": {};
  "sesv2:GetDeliverabilityDashboardOptions": {};
  "sesv2:GetDeliverabilityTestReport": { "ReportId": SesFullApiPathParamValue };
  "sesv2:GetDomainDeliverabilityCampaign": { "CampaignId": SesFullApiPathParamValue };
  "sesv2:GetDomainStatisticsReport": { "Domain": SesFullApiPathParamValue };
  "sesv2:GetEmailAddressInsights": {};
  "sesv2:GetEmailIdentity": { "EmailIdentity": SesFullApiPathParamValue };
  "sesv2:GetEmailIdentityPolicies": { "EmailIdentity": SesFullApiPathParamValue };
  "sesv2:GetEmailTemplate": { "TemplateName": SesFullApiPathParamValue };
  "sesv2:GetExportJob": { "JobId": SesFullApiPathParamValue };
  "sesv2:GetImportJob": { "JobId": SesFullApiPathParamValue };
  "sesv2:GetMessageInsights": { "MessageId": SesFullApiPathParamValue };
  "sesv2:GetMultiRegionEndpoint": { "EndpointName": SesFullApiPathParamValue };
  "sesv2:GetReputationEntity": { "ReputationEntityType": SesFullApiPathParamValue; "ReputationEntityReference": SesFullApiPathParamValue };
  "sesv2:GetSuppressedDestination": { "EmailAddress": SesFullApiPathParamValue };
  "sesv2:GetTenant": {};
  "sesv2:ListConfigurationSets": {};
  "sesv2:ListContactLists": {};
  "sesv2:ListContacts": { "ContactListName": SesFullApiPathParamValue };
  "sesv2:ListCustomVerificationEmailTemplates": {};
  "sesv2:ListDedicatedIpPools": {};
  "sesv2:ListDeliverabilityTestReports": {};
  "sesv2:ListDomainDeliverabilityCampaigns": { "SubscribedDomain": SesFullApiPathParamValue };
  "sesv2:ListEmailIdentities": {};
  "sesv2:ListEmailTemplates": {};
  "sesv2:ListExportJobs": {};
  "sesv2:ListImportJobs": {};
  "sesv2:ListMultiRegionEndpoints": {};
  "sesv2:ListRecommendations": {};
  "sesv2:ListReputationEntities": {};
  "sesv2:ListResourceTenants": {};
  "sesv2:ListSuppressedDestinations": {};
  "sesv2:ListTagsForResource": {};
  "sesv2:ListTenantResources": {};
  "sesv2:ListTenants": {};
  "sesv2:PutAccountDedicatedIpWarmupAttributes": {};
  "sesv2:PutAccountDetails": {};
  "sesv2:PutAccountSendingAttributes": {};
  "sesv2:PutAccountSuppressionAttributes": {};
  "sesv2:PutAccountVdmAttributes": {};
  "sesv2:PutConfigurationSetArchivingOptions": { "ConfigurationSetName": SesFullApiPathParamValue };
}

export interface SesFullApiV201OperationRequestMap {
  "sesv2:BatchGetMetricData": SesFullApiOperationInput<"sesv2:BatchGetMetricData">;
  "sesv2:CancelExportJob": SesFullApiOperationInput<"sesv2:CancelExportJob">;
  "sesv2:CreateConfigurationSet": SesFullApiOperationInput<"sesv2:CreateConfigurationSet">;
  "sesv2:CreateConfigurationSetEventDestination": SesFullApiOperationInput<"sesv2:CreateConfigurationSetEventDestination">;
  "sesv2:CreateContact": SesFullApiOperationInput<"sesv2:CreateContact">;
  "sesv2:CreateContactList": SesFullApiOperationInput<"sesv2:CreateContactList">;
  "sesv2:CreateCustomVerificationEmailTemplate": SesFullApiOperationInput<"sesv2:CreateCustomVerificationEmailTemplate">;
  "sesv2:CreateDedicatedIpPool": SesFullApiOperationInput<"sesv2:CreateDedicatedIpPool">;
  "sesv2:CreateDeliverabilityTestReport": SesFullApiOperationInput<"sesv2:CreateDeliverabilityTestReport">;
  "sesv2:CreateEmailIdentity": SesFullApiOperationInput<"sesv2:CreateEmailIdentity">;
  "sesv2:CreateEmailIdentityPolicy": SesFullApiOperationInput<"sesv2:CreateEmailIdentityPolicy">;
  "sesv2:CreateEmailTemplate": SesFullApiOperationInput<"sesv2:CreateEmailTemplate">;
  "sesv2:CreateExportJob": SesFullApiOperationInput<"sesv2:CreateExportJob">;
  "sesv2:CreateImportJob": SesFullApiOperationInput<"sesv2:CreateImportJob">;
  "sesv2:CreateMultiRegionEndpoint": SesFullApiOperationInput<"sesv2:CreateMultiRegionEndpoint">;
  "sesv2:CreateTenant": SesFullApiOperationInput<"sesv2:CreateTenant">;
  "sesv2:CreateTenantResourceAssociation": SesFullApiOperationInput<"sesv2:CreateTenantResourceAssociation">;
  "sesv2:DeleteConfigurationSet": SesFullApiOperationInput<"sesv2:DeleteConfigurationSet">;
  "sesv2:DeleteConfigurationSetEventDestination": SesFullApiOperationInput<"sesv2:DeleteConfigurationSetEventDestination">;
  "sesv2:DeleteContact": SesFullApiOperationInput<"sesv2:DeleteContact">;
  "sesv2:DeleteContactList": SesFullApiOperationInput<"sesv2:DeleteContactList">;
  "sesv2:DeleteCustomVerificationEmailTemplate": SesFullApiOperationInput<"sesv2:DeleteCustomVerificationEmailTemplate">;
  "sesv2:DeleteDedicatedIpPool": SesFullApiOperationInput<"sesv2:DeleteDedicatedIpPool">;
  "sesv2:DeleteEmailIdentity": SesFullApiOperationInput<"sesv2:DeleteEmailIdentity">;
  "sesv2:DeleteEmailIdentityPolicy": SesFullApiOperationInput<"sesv2:DeleteEmailIdentityPolicy">;
  "sesv2:DeleteEmailTemplate": SesFullApiOperationInput<"sesv2:DeleteEmailTemplate">;
  "sesv2:DeleteMultiRegionEndpoint": SesFullApiOperationInput<"sesv2:DeleteMultiRegionEndpoint">;
  "sesv2:DeleteSuppressedDestination": SesFullApiOperationInput<"sesv2:DeleteSuppressedDestination">;
  "sesv2:DeleteTenant": SesFullApiOperationInput<"sesv2:DeleteTenant">;
  "sesv2:DeleteTenantResourceAssociation": SesFullApiOperationInput<"sesv2:DeleteTenantResourceAssociation">;
  "sesv2:GetAccount": SesFullApiOperationInput<"sesv2:GetAccount">;
  "sesv2:GetBlacklistReports": SesFullApiOperationInput<"sesv2:GetBlacklistReports">;
  "sesv2:GetConfigurationSet": SesFullApiOperationInput<"sesv2:GetConfigurationSet">;
  "sesv2:GetConfigurationSetEventDestinations": SesFullApiOperationInput<"sesv2:GetConfigurationSetEventDestinations">;
  "sesv2:GetContact": SesFullApiOperationInput<"sesv2:GetContact">;
  "sesv2:GetContactList": SesFullApiOperationInput<"sesv2:GetContactList">;
  "sesv2:GetCustomVerificationEmailTemplate": SesFullApiOperationInput<"sesv2:GetCustomVerificationEmailTemplate">;
  "sesv2:GetDedicatedIp": SesFullApiOperationInput<"sesv2:GetDedicatedIp">;
  "sesv2:GetDedicatedIpPool": SesFullApiOperationInput<"sesv2:GetDedicatedIpPool">;
  "sesv2:GetDedicatedIps": SesFullApiOperationInput<"sesv2:GetDedicatedIps">;
  "sesv2:GetDeliverabilityDashboardOptions": SesFullApiOperationInput<"sesv2:GetDeliverabilityDashboardOptions">;
  "sesv2:GetDeliverabilityTestReport": SesFullApiOperationInput<"sesv2:GetDeliverabilityTestReport">;
  "sesv2:GetDomainDeliverabilityCampaign": SesFullApiOperationInput<"sesv2:GetDomainDeliverabilityCampaign">;
  "sesv2:GetDomainStatisticsReport": SesFullApiOperationInput<"sesv2:GetDomainStatisticsReport">;
  "sesv2:GetEmailAddressInsights": SesFullApiOperationInput<"sesv2:GetEmailAddressInsights">;
  "sesv2:GetEmailIdentity": SesFullApiOperationInput<"sesv2:GetEmailIdentity">;
  "sesv2:GetEmailIdentityPolicies": SesFullApiOperationInput<"sesv2:GetEmailIdentityPolicies">;
  "sesv2:GetEmailTemplate": SesFullApiOperationInput<"sesv2:GetEmailTemplate">;
  "sesv2:GetExportJob": SesFullApiOperationInput<"sesv2:GetExportJob">;
  "sesv2:GetImportJob": SesFullApiOperationInput<"sesv2:GetImportJob">;
  "sesv2:GetMessageInsights": SesFullApiOperationInput<"sesv2:GetMessageInsights">;
  "sesv2:GetMultiRegionEndpoint": SesFullApiOperationInput<"sesv2:GetMultiRegionEndpoint">;
  "sesv2:GetReputationEntity": SesFullApiOperationInput<"sesv2:GetReputationEntity">;
  "sesv2:GetSuppressedDestination": SesFullApiOperationInput<"sesv2:GetSuppressedDestination">;
  "sesv2:GetTenant": SesFullApiOperationInput<"sesv2:GetTenant">;
  "sesv2:ListConfigurationSets": SesFullApiOperationInput<"sesv2:ListConfigurationSets">;
  "sesv2:ListContactLists": SesFullApiOperationInput<"sesv2:ListContactLists">;
  "sesv2:ListContacts": SesFullApiOperationInput<"sesv2:ListContacts">;
  "sesv2:ListCustomVerificationEmailTemplates": SesFullApiOperationInput<"sesv2:ListCustomVerificationEmailTemplates">;
  "sesv2:ListDedicatedIpPools": SesFullApiOperationInput<"sesv2:ListDedicatedIpPools">;
  "sesv2:ListDeliverabilityTestReports": SesFullApiOperationInput<"sesv2:ListDeliverabilityTestReports">;
  "sesv2:ListDomainDeliverabilityCampaigns": SesFullApiOperationInput<"sesv2:ListDomainDeliverabilityCampaigns">;
  "sesv2:ListEmailIdentities": SesFullApiOperationInput<"sesv2:ListEmailIdentities">;
  "sesv2:ListEmailTemplates": SesFullApiOperationInput<"sesv2:ListEmailTemplates">;
  "sesv2:ListExportJobs": SesFullApiOperationInput<"sesv2:ListExportJobs">;
  "sesv2:ListImportJobs": SesFullApiOperationInput<"sesv2:ListImportJobs">;
  "sesv2:ListMultiRegionEndpoints": SesFullApiOperationInput<"sesv2:ListMultiRegionEndpoints">;
  "sesv2:ListRecommendations": SesFullApiOperationInput<"sesv2:ListRecommendations">;
  "sesv2:ListReputationEntities": SesFullApiOperationInput<"sesv2:ListReputationEntities">;
  "sesv2:ListResourceTenants": SesFullApiOperationInput<"sesv2:ListResourceTenants">;
  "sesv2:ListSuppressedDestinations": SesFullApiOperationInput<"sesv2:ListSuppressedDestinations">;
  "sesv2:ListTagsForResource": SesFullApiOperationInput<"sesv2:ListTagsForResource">;
  "sesv2:ListTenantResources": SesFullApiOperationInput<"sesv2:ListTenantResources">;
  "sesv2:ListTenants": SesFullApiOperationInput<"sesv2:ListTenants">;
  "sesv2:PutAccountDedicatedIpWarmupAttributes": SesFullApiOperationInput<"sesv2:PutAccountDedicatedIpWarmupAttributes">;
  "sesv2:PutAccountDetails": SesFullApiOperationInput<"sesv2:PutAccountDetails">;
  "sesv2:PutAccountSendingAttributes": SesFullApiOperationInput<"sesv2:PutAccountSendingAttributes">;
  "sesv2:PutAccountSuppressionAttributes": SesFullApiOperationInput<"sesv2:PutAccountSuppressionAttributes">;
  "sesv2:PutAccountVdmAttributes": SesFullApiOperationInput<"sesv2:PutAccountVdmAttributes">;
  "sesv2:PutConfigurationSetArchivingOptions": SesFullApiOperationInput<"sesv2:PutConfigurationSetArchivingOptions">;
}

export interface SesFullApiV201GeneratedClient {
  BatchGetMetricData(...args: SesFullApiOperationArgs<"sesv2:BatchGetMetricData">): Promise<SesFullApiOperationResponseMap["sesv2:BatchGetMetricData"]>;
  CancelExportJob(...args: SesFullApiOperationArgs<"sesv2:CancelExportJob">): Promise<SesFullApiOperationResponseMap["sesv2:CancelExportJob"]>;
  CreateConfigurationSet(...args: SesFullApiOperationArgs<"sesv2:CreateConfigurationSet">): Promise<SesFullApiOperationResponseMap["sesv2:CreateConfigurationSet"]>;
  CreateConfigurationSetEventDestination(...args: SesFullApiOperationArgs<"sesv2:CreateConfigurationSetEventDestination">): Promise<SesFullApiOperationResponseMap["sesv2:CreateConfigurationSetEventDestination"]>;
  CreateContact(...args: SesFullApiOperationArgs<"sesv2:CreateContact">): Promise<SesFullApiOperationResponseMap["sesv2:CreateContact"]>;
  CreateContactList(...args: SesFullApiOperationArgs<"sesv2:CreateContactList">): Promise<SesFullApiOperationResponseMap["sesv2:CreateContactList"]>;
  CreateCustomVerificationEmailTemplate(...args: SesFullApiOperationArgs<"sesv2:CreateCustomVerificationEmailTemplate">): Promise<SesFullApiOperationResponseMap["sesv2:CreateCustomVerificationEmailTemplate"]>;
  CreateDedicatedIpPool(...args: SesFullApiOperationArgs<"sesv2:CreateDedicatedIpPool">): Promise<SesFullApiOperationResponseMap["sesv2:CreateDedicatedIpPool"]>;
  CreateDeliverabilityTestReport(...args: SesFullApiOperationArgs<"sesv2:CreateDeliverabilityTestReport">): Promise<SesFullApiOperationResponseMap["sesv2:CreateDeliverabilityTestReport"]>;
  CreateEmailIdentity(...args: SesFullApiOperationArgs<"sesv2:CreateEmailIdentity">): Promise<SesFullApiOperationResponseMap["sesv2:CreateEmailIdentity"]>;
  CreateEmailIdentityPolicy(...args: SesFullApiOperationArgs<"sesv2:CreateEmailIdentityPolicy">): Promise<SesFullApiOperationResponseMap["sesv2:CreateEmailIdentityPolicy"]>;
  CreateEmailTemplate(...args: SesFullApiOperationArgs<"sesv2:CreateEmailTemplate">): Promise<SesFullApiOperationResponseMap["sesv2:CreateEmailTemplate"]>;
  CreateExportJob(...args: SesFullApiOperationArgs<"sesv2:CreateExportJob">): Promise<SesFullApiOperationResponseMap["sesv2:CreateExportJob"]>;
  CreateImportJob(...args: SesFullApiOperationArgs<"sesv2:CreateImportJob">): Promise<SesFullApiOperationResponseMap["sesv2:CreateImportJob"]>;
  CreateMultiRegionEndpoint(...args: SesFullApiOperationArgs<"sesv2:CreateMultiRegionEndpoint">): Promise<SesFullApiOperationResponseMap["sesv2:CreateMultiRegionEndpoint"]>;
  CreateTenant(...args: SesFullApiOperationArgs<"sesv2:CreateTenant">): Promise<SesFullApiOperationResponseMap["sesv2:CreateTenant"]>;
  CreateTenantResourceAssociation(...args: SesFullApiOperationArgs<"sesv2:CreateTenantResourceAssociation">): Promise<SesFullApiOperationResponseMap["sesv2:CreateTenantResourceAssociation"]>;
  DeleteConfigurationSet(...args: SesFullApiOperationArgs<"sesv2:DeleteConfigurationSet">): Promise<SesFullApiOperationResponseMap["sesv2:DeleteConfigurationSet"]>;
  DeleteConfigurationSetEventDestination(...args: SesFullApiOperationArgs<"sesv2:DeleteConfigurationSetEventDestination">): Promise<SesFullApiOperationResponseMap["sesv2:DeleteConfigurationSetEventDestination"]>;
  DeleteContact(...args: SesFullApiOperationArgs<"sesv2:DeleteContact">): Promise<SesFullApiOperationResponseMap["sesv2:DeleteContact"]>;
  DeleteContactList(...args: SesFullApiOperationArgs<"sesv2:DeleteContactList">): Promise<SesFullApiOperationResponseMap["sesv2:DeleteContactList"]>;
  DeleteCustomVerificationEmailTemplate(...args: SesFullApiOperationArgs<"sesv2:DeleteCustomVerificationEmailTemplate">): Promise<SesFullApiOperationResponseMap["sesv2:DeleteCustomVerificationEmailTemplate"]>;
  DeleteDedicatedIpPool(...args: SesFullApiOperationArgs<"sesv2:DeleteDedicatedIpPool">): Promise<SesFullApiOperationResponseMap["sesv2:DeleteDedicatedIpPool"]>;
  DeleteEmailIdentity(...args: SesFullApiOperationArgs<"sesv2:DeleteEmailIdentity">): Promise<SesFullApiOperationResponseMap["sesv2:DeleteEmailIdentity"]>;
  DeleteEmailIdentityPolicy(...args: SesFullApiOperationArgs<"sesv2:DeleteEmailIdentityPolicy">): Promise<SesFullApiOperationResponseMap["sesv2:DeleteEmailIdentityPolicy"]>;
  DeleteEmailTemplate(...args: SesFullApiOperationArgs<"sesv2:DeleteEmailTemplate">): Promise<SesFullApiOperationResponseMap["sesv2:DeleteEmailTemplate"]>;
  DeleteMultiRegionEndpoint(...args: SesFullApiOperationArgs<"sesv2:DeleteMultiRegionEndpoint">): Promise<SesFullApiOperationResponseMap["sesv2:DeleteMultiRegionEndpoint"]>;
  DeleteSuppressedDestination(...args: SesFullApiOperationArgs<"sesv2:DeleteSuppressedDestination">): Promise<SesFullApiOperationResponseMap["sesv2:DeleteSuppressedDestination"]>;
  DeleteTenant(...args: SesFullApiOperationArgs<"sesv2:DeleteTenant">): Promise<SesFullApiOperationResponseMap["sesv2:DeleteTenant"]>;
  DeleteTenantResourceAssociation(...args: SesFullApiOperationArgs<"sesv2:DeleteTenantResourceAssociation">): Promise<SesFullApiOperationResponseMap["sesv2:DeleteTenantResourceAssociation"]>;
  GetAccount(...args: SesFullApiOperationArgs<"sesv2:GetAccount">): Promise<SesFullApiOperationResponseMap["sesv2:GetAccount"]>;
  GetBlacklistReports(...args: SesFullApiOperationArgs<"sesv2:GetBlacklistReports">): Promise<SesFullApiOperationResponseMap["sesv2:GetBlacklistReports"]>;
  GetConfigurationSet(...args: SesFullApiOperationArgs<"sesv2:GetConfigurationSet">): Promise<SesFullApiOperationResponseMap["sesv2:GetConfigurationSet"]>;
  GetConfigurationSetEventDestinations(...args: SesFullApiOperationArgs<"sesv2:GetConfigurationSetEventDestinations">): Promise<SesFullApiOperationResponseMap["sesv2:GetConfigurationSetEventDestinations"]>;
  GetContact(...args: SesFullApiOperationArgs<"sesv2:GetContact">): Promise<SesFullApiOperationResponseMap["sesv2:GetContact"]>;
  GetContactList(...args: SesFullApiOperationArgs<"sesv2:GetContactList">): Promise<SesFullApiOperationResponseMap["sesv2:GetContactList"]>;
  GetCustomVerificationEmailTemplate(...args: SesFullApiOperationArgs<"sesv2:GetCustomVerificationEmailTemplate">): Promise<SesFullApiOperationResponseMap["sesv2:GetCustomVerificationEmailTemplate"]>;
  GetDedicatedIp(...args: SesFullApiOperationArgs<"sesv2:GetDedicatedIp">): Promise<SesFullApiOperationResponseMap["sesv2:GetDedicatedIp"]>;
  GetDedicatedIpPool(...args: SesFullApiOperationArgs<"sesv2:GetDedicatedIpPool">): Promise<SesFullApiOperationResponseMap["sesv2:GetDedicatedIpPool"]>;
  GetDedicatedIps(...args: SesFullApiOperationArgs<"sesv2:GetDedicatedIps">): Promise<SesFullApiOperationResponseMap["sesv2:GetDedicatedIps"]>;
  GetDeliverabilityDashboardOptions(...args: SesFullApiOperationArgs<"sesv2:GetDeliverabilityDashboardOptions">): Promise<SesFullApiOperationResponseMap["sesv2:GetDeliverabilityDashboardOptions"]>;
  GetDeliverabilityTestReport(...args: SesFullApiOperationArgs<"sesv2:GetDeliverabilityTestReport">): Promise<SesFullApiOperationResponseMap["sesv2:GetDeliverabilityTestReport"]>;
  GetDomainDeliverabilityCampaign(...args: SesFullApiOperationArgs<"sesv2:GetDomainDeliverabilityCampaign">): Promise<SesFullApiOperationResponseMap["sesv2:GetDomainDeliverabilityCampaign"]>;
  GetDomainStatisticsReport(...args: SesFullApiOperationArgs<"sesv2:GetDomainStatisticsReport">): Promise<SesFullApiOperationResponseMap["sesv2:GetDomainStatisticsReport"]>;
  GetEmailAddressInsights(...args: SesFullApiOperationArgs<"sesv2:GetEmailAddressInsights">): Promise<SesFullApiOperationResponseMap["sesv2:GetEmailAddressInsights"]>;
  GetEmailIdentity(...args: SesFullApiOperationArgs<"sesv2:GetEmailIdentity">): Promise<SesFullApiOperationResponseMap["sesv2:GetEmailIdentity"]>;
  GetEmailIdentityPolicies(...args: SesFullApiOperationArgs<"sesv2:GetEmailIdentityPolicies">): Promise<SesFullApiOperationResponseMap["sesv2:GetEmailIdentityPolicies"]>;
  GetEmailTemplate(...args: SesFullApiOperationArgs<"sesv2:GetEmailTemplate">): Promise<SesFullApiOperationResponseMap["sesv2:GetEmailTemplate"]>;
  GetExportJob(...args: SesFullApiOperationArgs<"sesv2:GetExportJob">): Promise<SesFullApiOperationResponseMap["sesv2:GetExportJob"]>;
  GetImportJob(...args: SesFullApiOperationArgs<"sesv2:GetImportJob">): Promise<SesFullApiOperationResponseMap["sesv2:GetImportJob"]>;
  GetMessageInsights(...args: SesFullApiOperationArgs<"sesv2:GetMessageInsights">): Promise<SesFullApiOperationResponseMap["sesv2:GetMessageInsights"]>;
  GetMultiRegionEndpoint(...args: SesFullApiOperationArgs<"sesv2:GetMultiRegionEndpoint">): Promise<SesFullApiOperationResponseMap["sesv2:GetMultiRegionEndpoint"]>;
  GetReputationEntity(...args: SesFullApiOperationArgs<"sesv2:GetReputationEntity">): Promise<SesFullApiOperationResponseMap["sesv2:GetReputationEntity"]>;
  GetSuppressedDestination(...args: SesFullApiOperationArgs<"sesv2:GetSuppressedDestination">): Promise<SesFullApiOperationResponseMap["sesv2:GetSuppressedDestination"]>;
  GetTenant(...args: SesFullApiOperationArgs<"sesv2:GetTenant">): Promise<SesFullApiOperationResponseMap["sesv2:GetTenant"]>;
  ListConfigurationSets(...args: SesFullApiOperationArgs<"sesv2:ListConfigurationSets">): Promise<SesFullApiOperationResponseMap["sesv2:ListConfigurationSets"]>;
  ListContactLists(...args: SesFullApiOperationArgs<"sesv2:ListContactLists">): Promise<SesFullApiOperationResponseMap["sesv2:ListContactLists"]>;
  ListContacts(...args: SesFullApiOperationArgs<"sesv2:ListContacts">): Promise<SesFullApiOperationResponseMap["sesv2:ListContacts"]>;
  ListCustomVerificationEmailTemplates(...args: SesFullApiOperationArgs<"sesv2:ListCustomVerificationEmailTemplates">): Promise<SesFullApiOperationResponseMap["sesv2:ListCustomVerificationEmailTemplates"]>;
  ListDedicatedIpPools(...args: SesFullApiOperationArgs<"sesv2:ListDedicatedIpPools">): Promise<SesFullApiOperationResponseMap["sesv2:ListDedicatedIpPools"]>;
  ListDeliverabilityTestReports(...args: SesFullApiOperationArgs<"sesv2:ListDeliverabilityTestReports">): Promise<SesFullApiOperationResponseMap["sesv2:ListDeliverabilityTestReports"]>;
  ListDomainDeliverabilityCampaigns(...args: SesFullApiOperationArgs<"sesv2:ListDomainDeliverabilityCampaigns">): Promise<SesFullApiOperationResponseMap["sesv2:ListDomainDeliverabilityCampaigns"]>;
  ListEmailIdentities(...args: SesFullApiOperationArgs<"sesv2:ListEmailIdentities">): Promise<SesFullApiOperationResponseMap["sesv2:ListEmailIdentities"]>;
  ListEmailTemplates(...args: SesFullApiOperationArgs<"sesv2:ListEmailTemplates">): Promise<SesFullApiOperationResponseMap["sesv2:ListEmailTemplates"]>;
  ListExportJobs(...args: SesFullApiOperationArgs<"sesv2:ListExportJobs">): Promise<SesFullApiOperationResponseMap["sesv2:ListExportJobs"]>;
  ListImportJobs(...args: SesFullApiOperationArgs<"sesv2:ListImportJobs">): Promise<SesFullApiOperationResponseMap["sesv2:ListImportJobs"]>;
  ListMultiRegionEndpoints(...args: SesFullApiOperationArgs<"sesv2:ListMultiRegionEndpoints">): Promise<SesFullApiOperationResponseMap["sesv2:ListMultiRegionEndpoints"]>;
  ListRecommendations(...args: SesFullApiOperationArgs<"sesv2:ListRecommendations">): Promise<SesFullApiOperationResponseMap["sesv2:ListRecommendations"]>;
  ListReputationEntities(...args: SesFullApiOperationArgs<"sesv2:ListReputationEntities">): Promise<SesFullApiOperationResponseMap["sesv2:ListReputationEntities"]>;
  ListResourceTenants(...args: SesFullApiOperationArgs<"sesv2:ListResourceTenants">): Promise<SesFullApiOperationResponseMap["sesv2:ListResourceTenants"]>;
  ListSuppressedDestinations(...args: SesFullApiOperationArgs<"sesv2:ListSuppressedDestinations">): Promise<SesFullApiOperationResponseMap["sesv2:ListSuppressedDestinations"]>;
  ListTagsForResource(...args: SesFullApiOperationArgs<"sesv2:ListTagsForResource">): Promise<SesFullApiOperationResponseMap["sesv2:ListTagsForResource"]>;
  ListTenantResources(...args: SesFullApiOperationArgs<"sesv2:ListTenantResources">): Promise<SesFullApiOperationResponseMap["sesv2:ListTenantResources"]>;
  ListTenants(...args: SesFullApiOperationArgs<"sesv2:ListTenants">): Promise<SesFullApiOperationResponseMap["sesv2:ListTenants"]>;
  PutAccountDedicatedIpWarmupAttributes(...args: SesFullApiOperationArgs<"sesv2:PutAccountDedicatedIpWarmupAttributes">): Promise<SesFullApiOperationResponseMap["sesv2:PutAccountDedicatedIpWarmupAttributes"]>;
  PutAccountDetails(...args: SesFullApiOperationArgs<"sesv2:PutAccountDetails">): Promise<SesFullApiOperationResponseMap["sesv2:PutAccountDetails"]>;
  PutAccountSendingAttributes(...args: SesFullApiOperationArgs<"sesv2:PutAccountSendingAttributes">): Promise<SesFullApiOperationResponseMap["sesv2:PutAccountSendingAttributes"]>;
  PutAccountSuppressionAttributes(...args: SesFullApiOperationArgs<"sesv2:PutAccountSuppressionAttributes">): Promise<SesFullApiOperationResponseMap["sesv2:PutAccountSuppressionAttributes"]>;
  PutAccountVdmAttributes(...args: SesFullApiOperationArgs<"sesv2:PutAccountVdmAttributes">): Promise<SesFullApiOperationResponseMap["sesv2:PutAccountVdmAttributes"]>;
  PutConfigurationSetArchivingOptions(...args: SesFullApiOperationArgs<"sesv2:PutConfigurationSetArchivingOptions">): Promise<SesFullApiOperationResponseMap["sesv2:PutConfigurationSetArchivingOptions"]>;
}

export const SesFullApiV201GeneratedFunctionNames = [
  "BatchGetMetricData",
  "CancelExportJob",
  "CreateConfigurationSet",
  "CreateConfigurationSetEventDestination",
  "CreateContact",
  "CreateContactList",
  "CreateCustomVerificationEmailTemplate",
  "CreateDedicatedIpPool",
  "CreateDeliverabilityTestReport",
  "CreateEmailIdentity",
  "CreateEmailIdentityPolicy",
  "CreateEmailTemplate",
  "CreateExportJob",
  "CreateImportJob",
  "CreateMultiRegionEndpoint",
  "CreateTenant",
  "CreateTenantResourceAssociation",
  "DeleteConfigurationSet",
  "DeleteConfigurationSetEventDestination",
  "DeleteContact",
  "DeleteContactList",
  "DeleteCustomVerificationEmailTemplate",
  "DeleteDedicatedIpPool",
  "DeleteEmailIdentity",
  "DeleteEmailIdentityPolicy",
  "DeleteEmailTemplate",
  "DeleteMultiRegionEndpoint",
  "DeleteSuppressedDestination",
  "DeleteTenant",
  "DeleteTenantResourceAssociation",
  "GetAccount",
  "GetBlacklistReports",
  "GetConfigurationSet",
  "GetConfigurationSetEventDestinations",
  "GetContact",
  "GetContactList",
  "GetCustomVerificationEmailTemplate",
  "GetDedicatedIp",
  "GetDedicatedIpPool",
  "GetDedicatedIps",
  "GetDeliverabilityDashboardOptions",
  "GetDeliverabilityTestReport",
  "GetDomainDeliverabilityCampaign",
  "GetDomainStatisticsReport",
  "GetEmailAddressInsights",
  "GetEmailIdentity",
  "GetEmailIdentityPolicies",
  "GetEmailTemplate",
  "GetExportJob",
  "GetImportJob",
  "GetMessageInsights",
  "GetMultiRegionEndpoint",
  "GetReputationEntity",
  "GetSuppressedDestination",
  "GetTenant",
  "ListConfigurationSets",
  "ListContactLists",
  "ListContacts",
  "ListCustomVerificationEmailTemplates",
  "ListDedicatedIpPools",
  "ListDeliverabilityTestReports",
  "ListDomainDeliverabilityCampaigns",
  "ListEmailIdentities",
  "ListEmailTemplates",
  "ListExportJobs",
  "ListImportJobs",
  "ListMultiRegionEndpoints",
  "ListRecommendations",
  "ListReputationEntities",
  "ListResourceTenants",
  "ListSuppressedDestinations",
  "ListTagsForResource",
  "ListTenantResources",
  "ListTenants",
  "PutAccountDedicatedIpWarmupAttributes",
  "PutAccountDetails",
  "PutAccountSendingAttributes",
  "PutAccountSuppressionAttributes",
  "PutAccountVdmAttributes",
  "PutConfigurationSetArchivingOptions"
] as const satisfies readonly (keyof SesFullApiV201GeneratedClient)[];

export function createSesFullApiV201GeneratedClient(
  callOperation: SesGeneratedOperationCaller,
): SesFullApiV201GeneratedClient {
  return {
    BatchGetMetricData: (...args) => callOperation("sesv2:BatchGetMetricData", ...(args as SesFullApiOperationArgs<"sesv2:BatchGetMetricData">)),
    CancelExportJob: (...args) => callOperation("sesv2:CancelExportJob", ...(args as SesFullApiOperationArgs<"sesv2:CancelExportJob">)),
    CreateConfigurationSet: (...args) => callOperation("sesv2:CreateConfigurationSet", ...(args as SesFullApiOperationArgs<"sesv2:CreateConfigurationSet">)),
    CreateConfigurationSetEventDestination: (...args) => callOperation("sesv2:CreateConfigurationSetEventDestination", ...(args as SesFullApiOperationArgs<"sesv2:CreateConfigurationSetEventDestination">)),
    CreateContact: (...args) => callOperation("sesv2:CreateContact", ...(args as SesFullApiOperationArgs<"sesv2:CreateContact">)),
    CreateContactList: (...args) => callOperation("sesv2:CreateContactList", ...(args as SesFullApiOperationArgs<"sesv2:CreateContactList">)),
    CreateCustomVerificationEmailTemplate: (...args) => callOperation("sesv2:CreateCustomVerificationEmailTemplate", ...(args as SesFullApiOperationArgs<"sesv2:CreateCustomVerificationEmailTemplate">)),
    CreateDedicatedIpPool: (...args) => callOperation("sesv2:CreateDedicatedIpPool", ...(args as SesFullApiOperationArgs<"sesv2:CreateDedicatedIpPool">)),
    CreateDeliverabilityTestReport: (...args) => callOperation("sesv2:CreateDeliverabilityTestReport", ...(args as SesFullApiOperationArgs<"sesv2:CreateDeliverabilityTestReport">)),
    CreateEmailIdentity: (...args) => callOperation("sesv2:CreateEmailIdentity", ...(args as SesFullApiOperationArgs<"sesv2:CreateEmailIdentity">)),
    CreateEmailIdentityPolicy: (...args) => callOperation("sesv2:CreateEmailIdentityPolicy", ...(args as SesFullApiOperationArgs<"sesv2:CreateEmailIdentityPolicy">)),
    CreateEmailTemplate: (...args) => callOperation("sesv2:CreateEmailTemplate", ...(args as SesFullApiOperationArgs<"sesv2:CreateEmailTemplate">)),
    CreateExportJob: (...args) => callOperation("sesv2:CreateExportJob", ...(args as SesFullApiOperationArgs<"sesv2:CreateExportJob">)),
    CreateImportJob: (...args) => callOperation("sesv2:CreateImportJob", ...(args as SesFullApiOperationArgs<"sesv2:CreateImportJob">)),
    CreateMultiRegionEndpoint: (...args) => callOperation("sesv2:CreateMultiRegionEndpoint", ...(args as SesFullApiOperationArgs<"sesv2:CreateMultiRegionEndpoint">)),
    CreateTenant: (...args) => callOperation("sesv2:CreateTenant", ...(args as SesFullApiOperationArgs<"sesv2:CreateTenant">)),
    CreateTenantResourceAssociation: (...args) => callOperation("sesv2:CreateTenantResourceAssociation", ...(args as SesFullApiOperationArgs<"sesv2:CreateTenantResourceAssociation">)),
    DeleteConfigurationSet: (...args) => callOperation("sesv2:DeleteConfigurationSet", ...(args as SesFullApiOperationArgs<"sesv2:DeleteConfigurationSet">)),
    DeleteConfigurationSetEventDestination: (...args) => callOperation("sesv2:DeleteConfigurationSetEventDestination", ...(args as SesFullApiOperationArgs<"sesv2:DeleteConfigurationSetEventDestination">)),
    DeleteContact: (...args) => callOperation("sesv2:DeleteContact", ...(args as SesFullApiOperationArgs<"sesv2:DeleteContact">)),
    DeleteContactList: (...args) => callOperation("sesv2:DeleteContactList", ...(args as SesFullApiOperationArgs<"sesv2:DeleteContactList">)),
    DeleteCustomVerificationEmailTemplate: (...args) => callOperation("sesv2:DeleteCustomVerificationEmailTemplate", ...(args as SesFullApiOperationArgs<"sesv2:DeleteCustomVerificationEmailTemplate">)),
    DeleteDedicatedIpPool: (...args) => callOperation("sesv2:DeleteDedicatedIpPool", ...(args as SesFullApiOperationArgs<"sesv2:DeleteDedicatedIpPool">)),
    DeleteEmailIdentity: (...args) => callOperation("sesv2:DeleteEmailIdentity", ...(args as SesFullApiOperationArgs<"sesv2:DeleteEmailIdentity">)),
    DeleteEmailIdentityPolicy: (...args) => callOperation("sesv2:DeleteEmailIdentityPolicy", ...(args as SesFullApiOperationArgs<"sesv2:DeleteEmailIdentityPolicy">)),
    DeleteEmailTemplate: (...args) => callOperation("sesv2:DeleteEmailTemplate", ...(args as SesFullApiOperationArgs<"sesv2:DeleteEmailTemplate">)),
    DeleteMultiRegionEndpoint: (...args) => callOperation("sesv2:DeleteMultiRegionEndpoint", ...(args as SesFullApiOperationArgs<"sesv2:DeleteMultiRegionEndpoint">)),
    DeleteSuppressedDestination: (...args) => callOperation("sesv2:DeleteSuppressedDestination", ...(args as SesFullApiOperationArgs<"sesv2:DeleteSuppressedDestination">)),
    DeleteTenant: (...args) => callOperation("sesv2:DeleteTenant", ...(args as SesFullApiOperationArgs<"sesv2:DeleteTenant">)),
    DeleteTenantResourceAssociation: (...args) => callOperation("sesv2:DeleteTenantResourceAssociation", ...(args as SesFullApiOperationArgs<"sesv2:DeleteTenantResourceAssociation">)),
    GetAccount: (...args) => callOperation("sesv2:GetAccount", ...(args as SesFullApiOperationArgs<"sesv2:GetAccount">)),
    GetBlacklistReports: (...args) => callOperation("sesv2:GetBlacklistReports", ...(args as SesFullApiOperationArgs<"sesv2:GetBlacklistReports">)),
    GetConfigurationSet: (...args) => callOperation("sesv2:GetConfigurationSet", ...(args as SesFullApiOperationArgs<"sesv2:GetConfigurationSet">)),
    GetConfigurationSetEventDestinations: (...args) => callOperation("sesv2:GetConfigurationSetEventDestinations", ...(args as SesFullApiOperationArgs<"sesv2:GetConfigurationSetEventDestinations">)),
    GetContact: (...args) => callOperation("sesv2:GetContact", ...(args as SesFullApiOperationArgs<"sesv2:GetContact">)),
    GetContactList: (...args) => callOperation("sesv2:GetContactList", ...(args as SesFullApiOperationArgs<"sesv2:GetContactList">)),
    GetCustomVerificationEmailTemplate: (...args) => callOperation("sesv2:GetCustomVerificationEmailTemplate", ...(args as SesFullApiOperationArgs<"sesv2:GetCustomVerificationEmailTemplate">)),
    GetDedicatedIp: (...args) => callOperation("sesv2:GetDedicatedIp", ...(args as SesFullApiOperationArgs<"sesv2:GetDedicatedIp">)),
    GetDedicatedIpPool: (...args) => callOperation("sesv2:GetDedicatedIpPool", ...(args as SesFullApiOperationArgs<"sesv2:GetDedicatedIpPool">)),
    GetDedicatedIps: (...args) => callOperation("sesv2:GetDedicatedIps", ...(args as SesFullApiOperationArgs<"sesv2:GetDedicatedIps">)),
    GetDeliverabilityDashboardOptions: (...args) => callOperation("sesv2:GetDeliverabilityDashboardOptions", ...(args as SesFullApiOperationArgs<"sesv2:GetDeliverabilityDashboardOptions">)),
    GetDeliverabilityTestReport: (...args) => callOperation("sesv2:GetDeliverabilityTestReport", ...(args as SesFullApiOperationArgs<"sesv2:GetDeliverabilityTestReport">)),
    GetDomainDeliverabilityCampaign: (...args) => callOperation("sesv2:GetDomainDeliverabilityCampaign", ...(args as SesFullApiOperationArgs<"sesv2:GetDomainDeliverabilityCampaign">)),
    GetDomainStatisticsReport: (...args) => callOperation("sesv2:GetDomainStatisticsReport", ...(args as SesFullApiOperationArgs<"sesv2:GetDomainStatisticsReport">)),
    GetEmailAddressInsights: (...args) => callOperation("sesv2:GetEmailAddressInsights", ...(args as SesFullApiOperationArgs<"sesv2:GetEmailAddressInsights">)),
    GetEmailIdentity: (...args) => callOperation("sesv2:GetEmailIdentity", ...(args as SesFullApiOperationArgs<"sesv2:GetEmailIdentity">)),
    GetEmailIdentityPolicies: (...args) => callOperation("sesv2:GetEmailIdentityPolicies", ...(args as SesFullApiOperationArgs<"sesv2:GetEmailIdentityPolicies">)),
    GetEmailTemplate: (...args) => callOperation("sesv2:GetEmailTemplate", ...(args as SesFullApiOperationArgs<"sesv2:GetEmailTemplate">)),
    GetExportJob: (...args) => callOperation("sesv2:GetExportJob", ...(args as SesFullApiOperationArgs<"sesv2:GetExportJob">)),
    GetImportJob: (...args) => callOperation("sesv2:GetImportJob", ...(args as SesFullApiOperationArgs<"sesv2:GetImportJob">)),
    GetMessageInsights: (...args) => callOperation("sesv2:GetMessageInsights", ...(args as SesFullApiOperationArgs<"sesv2:GetMessageInsights">)),
    GetMultiRegionEndpoint: (...args) => callOperation("sesv2:GetMultiRegionEndpoint", ...(args as SesFullApiOperationArgs<"sesv2:GetMultiRegionEndpoint">)),
    GetReputationEntity: (...args) => callOperation("sesv2:GetReputationEntity", ...(args as SesFullApiOperationArgs<"sesv2:GetReputationEntity">)),
    GetSuppressedDestination: (...args) => callOperation("sesv2:GetSuppressedDestination", ...(args as SesFullApiOperationArgs<"sesv2:GetSuppressedDestination">)),
    GetTenant: (...args) => callOperation("sesv2:GetTenant", ...(args as SesFullApiOperationArgs<"sesv2:GetTenant">)),
    ListConfigurationSets: (...args) => callOperation("sesv2:ListConfigurationSets", ...(args as SesFullApiOperationArgs<"sesv2:ListConfigurationSets">)),
    ListContactLists: (...args) => callOperation("sesv2:ListContactLists", ...(args as SesFullApiOperationArgs<"sesv2:ListContactLists">)),
    ListContacts: (...args) => callOperation("sesv2:ListContacts", ...(args as SesFullApiOperationArgs<"sesv2:ListContacts">)),
    ListCustomVerificationEmailTemplates: (...args) => callOperation("sesv2:ListCustomVerificationEmailTemplates", ...(args as SesFullApiOperationArgs<"sesv2:ListCustomVerificationEmailTemplates">)),
    ListDedicatedIpPools: (...args) => callOperation("sesv2:ListDedicatedIpPools", ...(args as SesFullApiOperationArgs<"sesv2:ListDedicatedIpPools">)),
    ListDeliverabilityTestReports: (...args) => callOperation("sesv2:ListDeliverabilityTestReports", ...(args as SesFullApiOperationArgs<"sesv2:ListDeliverabilityTestReports">)),
    ListDomainDeliverabilityCampaigns: (...args) => callOperation("sesv2:ListDomainDeliverabilityCampaigns", ...(args as SesFullApiOperationArgs<"sesv2:ListDomainDeliverabilityCampaigns">)),
    ListEmailIdentities: (...args) => callOperation("sesv2:ListEmailIdentities", ...(args as SesFullApiOperationArgs<"sesv2:ListEmailIdentities">)),
    ListEmailTemplates: (...args) => callOperation("sesv2:ListEmailTemplates", ...(args as SesFullApiOperationArgs<"sesv2:ListEmailTemplates">)),
    ListExportJobs: (...args) => callOperation("sesv2:ListExportJobs", ...(args as SesFullApiOperationArgs<"sesv2:ListExportJobs">)),
    ListImportJobs: (...args) => callOperation("sesv2:ListImportJobs", ...(args as SesFullApiOperationArgs<"sesv2:ListImportJobs">)),
    ListMultiRegionEndpoints: (...args) => callOperation("sesv2:ListMultiRegionEndpoints", ...(args as SesFullApiOperationArgs<"sesv2:ListMultiRegionEndpoints">)),
    ListRecommendations: (...args) => callOperation("sesv2:ListRecommendations", ...(args as SesFullApiOperationArgs<"sesv2:ListRecommendations">)),
    ListReputationEntities: (...args) => callOperation("sesv2:ListReputationEntities", ...(args as SesFullApiOperationArgs<"sesv2:ListReputationEntities">)),
    ListResourceTenants: (...args) => callOperation("sesv2:ListResourceTenants", ...(args as SesFullApiOperationArgs<"sesv2:ListResourceTenants">)),
    ListSuppressedDestinations: (...args) => callOperation("sesv2:ListSuppressedDestinations", ...(args as SesFullApiOperationArgs<"sesv2:ListSuppressedDestinations">)),
    ListTagsForResource: (...args) => callOperation("sesv2:ListTagsForResource", ...(args as SesFullApiOperationArgs<"sesv2:ListTagsForResource">)),
    ListTenantResources: (...args) => callOperation("sesv2:ListTenantResources", ...(args as SesFullApiOperationArgs<"sesv2:ListTenantResources">)),
    ListTenants: (...args) => callOperation("sesv2:ListTenants", ...(args as SesFullApiOperationArgs<"sesv2:ListTenants">)),
    PutAccountDedicatedIpWarmupAttributes: (...args) => callOperation("sesv2:PutAccountDedicatedIpWarmupAttributes", ...(args as SesFullApiOperationArgs<"sesv2:PutAccountDedicatedIpWarmupAttributes">)),
    PutAccountDetails: (...args) => callOperation("sesv2:PutAccountDetails", ...(args as SesFullApiOperationArgs<"sesv2:PutAccountDetails">)),
    PutAccountSendingAttributes: (...args) => callOperation("sesv2:PutAccountSendingAttributes", ...(args as SesFullApiOperationArgs<"sesv2:PutAccountSendingAttributes">)),
    PutAccountSuppressionAttributes: (...args) => callOperation("sesv2:PutAccountSuppressionAttributes", ...(args as SesFullApiOperationArgs<"sesv2:PutAccountSuppressionAttributes">)),
    PutAccountVdmAttributes: (...args) => callOperation("sesv2:PutAccountVdmAttributes", ...(args as SesFullApiOperationArgs<"sesv2:PutAccountVdmAttributes">)),
    PutConfigurationSetArchivingOptions: (...args) => callOperation("sesv2:PutConfigurationSetArchivingOptions", ...(args as SesFullApiOperationArgs<"sesv2:PutConfigurationSetArchivingOptions">)),
  };
}
