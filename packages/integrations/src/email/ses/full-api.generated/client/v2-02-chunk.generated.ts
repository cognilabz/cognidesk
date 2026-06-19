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
export const SesFullApiV202OperationKeys = [
  "sesv2:PutConfigurationSetDeliveryOptions",
  "sesv2:PutConfigurationSetReputationOptions",
  "sesv2:PutConfigurationSetSendingOptions",
  "sesv2:PutConfigurationSetSuppressionOptions",
  "sesv2:PutConfigurationSetTrackingOptions",
  "sesv2:PutConfigurationSetVdmOptions",
  "sesv2:PutDedicatedIpInPool",
  "sesv2:PutDedicatedIpPoolScalingAttributes",
  "sesv2:PutDedicatedIpWarmupAttributes",
  "sesv2:PutDeliverabilityDashboardOption",
  "sesv2:PutEmailIdentityConfigurationSetAttributes",
  "sesv2:PutEmailIdentityDkimAttributes",
  "sesv2:PutEmailIdentityDkimSigningAttributes",
  "sesv2:PutEmailIdentityFeedbackAttributes",
  "sesv2:PutEmailIdentityMailFromAttributes",
  "sesv2:PutSuppressedDestination",
  "sesv2:PutTenantSuppressionAttributes",
  "sesv2:SendBulkEmail",
  "sesv2:SendCustomVerificationEmail",
  "sesv2:SendEmail",
  "sesv2:TagResource",
  "sesv2:TestRenderEmailTemplate",
  "sesv2:UntagResource",
  "sesv2:UpdateConfigurationSetEventDestination",
  "sesv2:UpdateContact",
  "sesv2:UpdateContactList",
  "sesv2:UpdateCustomVerificationEmailTemplate",
  "sesv2:UpdateEmailIdentityPolicy",
  "sesv2:UpdateEmailTemplate",
  "sesv2:UpdateReputationEntityCustomerManagedStatus",
  "sesv2:UpdateReputationEntityPolicy"
] as const;
export type SesFullApiV202OperationKey = typeof SesFullApiV202OperationKeys[number];
// End hardened literal operation keys.

export interface SesFullApiV202OperationPathParamMap {
  "sesv2:PutConfigurationSetDeliveryOptions": { "ConfigurationSetName": SesFullApiPathParamValue };
  "sesv2:PutConfigurationSetReputationOptions": { "ConfigurationSetName": SesFullApiPathParamValue };
  "sesv2:PutConfigurationSetSendingOptions": { "ConfigurationSetName": SesFullApiPathParamValue };
  "sesv2:PutConfigurationSetSuppressionOptions": { "ConfigurationSetName": SesFullApiPathParamValue };
  "sesv2:PutConfigurationSetTrackingOptions": { "ConfigurationSetName": SesFullApiPathParamValue };
  "sesv2:PutConfigurationSetVdmOptions": { "ConfigurationSetName": SesFullApiPathParamValue };
  "sesv2:PutDedicatedIpInPool": { "Ip": SesFullApiPathParamValue };
  "sesv2:PutDedicatedIpPoolScalingAttributes": { "PoolName": SesFullApiPathParamValue };
  "sesv2:PutDedicatedIpWarmupAttributes": { "Ip": SesFullApiPathParamValue };
  "sesv2:PutDeliverabilityDashboardOption": {};
  "sesv2:PutEmailIdentityConfigurationSetAttributes": { "EmailIdentity": SesFullApiPathParamValue };
  "sesv2:PutEmailIdentityDkimAttributes": { "EmailIdentity": SesFullApiPathParamValue };
  "sesv2:PutEmailIdentityDkimSigningAttributes": { "EmailIdentity": SesFullApiPathParamValue };
  "sesv2:PutEmailIdentityFeedbackAttributes": { "EmailIdentity": SesFullApiPathParamValue };
  "sesv2:PutEmailIdentityMailFromAttributes": { "EmailIdentity": SesFullApiPathParamValue };
  "sesv2:PutSuppressedDestination": {};
  "sesv2:PutTenantSuppressionAttributes": {};
  "sesv2:SendBulkEmail": {};
  "sesv2:SendCustomVerificationEmail": {};
  "sesv2:SendEmail": {};
  "sesv2:TagResource": {};
  "sesv2:TestRenderEmailTemplate": { "TemplateName": SesFullApiPathParamValue };
  "sesv2:UntagResource": {};
  "sesv2:UpdateConfigurationSetEventDestination": { "ConfigurationSetName": SesFullApiPathParamValue; "EventDestinationName": SesFullApiPathParamValue };
  "sesv2:UpdateContact": { "ContactListName": SesFullApiPathParamValue; "EmailAddress": SesFullApiPathParamValue };
  "sesv2:UpdateContactList": { "ContactListName": SesFullApiPathParamValue };
  "sesv2:UpdateCustomVerificationEmailTemplate": { "TemplateName": SesFullApiPathParamValue };
  "sesv2:UpdateEmailIdentityPolicy": { "EmailIdentity": SesFullApiPathParamValue; "PolicyName": SesFullApiPathParamValue };
  "sesv2:UpdateEmailTemplate": { "TemplateName": SesFullApiPathParamValue };
  "sesv2:UpdateReputationEntityCustomerManagedStatus": { "ReputationEntityType": SesFullApiPathParamValue; "ReputationEntityReference": SesFullApiPathParamValue };
  "sesv2:UpdateReputationEntityPolicy": { "ReputationEntityType": SesFullApiPathParamValue; "ReputationEntityReference": SesFullApiPathParamValue };
}

export interface SesFullApiV202OperationRequestMap {
  "sesv2:PutConfigurationSetDeliveryOptions": SesFullApiOperationInput<"sesv2:PutConfigurationSetDeliveryOptions">;
  "sesv2:PutConfigurationSetReputationOptions": SesFullApiOperationInput<"sesv2:PutConfigurationSetReputationOptions">;
  "sesv2:PutConfigurationSetSendingOptions": SesFullApiOperationInput<"sesv2:PutConfigurationSetSendingOptions">;
  "sesv2:PutConfigurationSetSuppressionOptions": SesFullApiOperationInput<"sesv2:PutConfigurationSetSuppressionOptions">;
  "sesv2:PutConfigurationSetTrackingOptions": SesFullApiOperationInput<"sesv2:PutConfigurationSetTrackingOptions">;
  "sesv2:PutConfigurationSetVdmOptions": SesFullApiOperationInput<"sesv2:PutConfigurationSetVdmOptions">;
  "sesv2:PutDedicatedIpInPool": SesFullApiOperationInput<"sesv2:PutDedicatedIpInPool">;
  "sesv2:PutDedicatedIpPoolScalingAttributes": SesFullApiOperationInput<"sesv2:PutDedicatedIpPoolScalingAttributes">;
  "sesv2:PutDedicatedIpWarmupAttributes": SesFullApiOperationInput<"sesv2:PutDedicatedIpWarmupAttributes">;
  "sesv2:PutDeliverabilityDashboardOption": SesFullApiOperationInput<"sesv2:PutDeliverabilityDashboardOption">;
  "sesv2:PutEmailIdentityConfigurationSetAttributes": SesFullApiOperationInput<"sesv2:PutEmailIdentityConfigurationSetAttributes">;
  "sesv2:PutEmailIdentityDkimAttributes": SesFullApiOperationInput<"sesv2:PutEmailIdentityDkimAttributes">;
  "sesv2:PutEmailIdentityDkimSigningAttributes": SesFullApiOperationInput<"sesv2:PutEmailIdentityDkimSigningAttributes">;
  "sesv2:PutEmailIdentityFeedbackAttributes": SesFullApiOperationInput<"sesv2:PutEmailIdentityFeedbackAttributes">;
  "sesv2:PutEmailIdentityMailFromAttributes": SesFullApiOperationInput<"sesv2:PutEmailIdentityMailFromAttributes">;
  "sesv2:PutSuppressedDestination": SesFullApiOperationInput<"sesv2:PutSuppressedDestination">;
  "sesv2:PutTenantSuppressionAttributes": SesFullApiOperationInput<"sesv2:PutTenantSuppressionAttributes">;
  "sesv2:SendBulkEmail": SesFullApiOperationInput<"sesv2:SendBulkEmail">;
  "sesv2:SendCustomVerificationEmail": SesFullApiOperationInput<"sesv2:SendCustomVerificationEmail">;
  "sesv2:SendEmail": SesFullApiOperationInput<"sesv2:SendEmail">;
  "sesv2:TagResource": SesFullApiOperationInput<"sesv2:TagResource">;
  "sesv2:TestRenderEmailTemplate": SesFullApiOperationInput<"sesv2:TestRenderEmailTemplate">;
  "sesv2:UntagResource": SesFullApiOperationInput<"sesv2:UntagResource">;
  "sesv2:UpdateConfigurationSetEventDestination": SesFullApiOperationInput<"sesv2:UpdateConfigurationSetEventDestination">;
  "sesv2:UpdateContact": SesFullApiOperationInput<"sesv2:UpdateContact">;
  "sesv2:UpdateContactList": SesFullApiOperationInput<"sesv2:UpdateContactList">;
  "sesv2:UpdateCustomVerificationEmailTemplate": SesFullApiOperationInput<"sesv2:UpdateCustomVerificationEmailTemplate">;
  "sesv2:UpdateEmailIdentityPolicy": SesFullApiOperationInput<"sesv2:UpdateEmailIdentityPolicy">;
  "sesv2:UpdateEmailTemplate": SesFullApiOperationInput<"sesv2:UpdateEmailTemplate">;
  "sesv2:UpdateReputationEntityCustomerManagedStatus": SesFullApiOperationInput<"sesv2:UpdateReputationEntityCustomerManagedStatus">;
  "sesv2:UpdateReputationEntityPolicy": SesFullApiOperationInput<"sesv2:UpdateReputationEntityPolicy">;
}

export interface SesFullApiV202GeneratedClient {
  PutConfigurationSetDeliveryOptions(...args: SesFullApiOperationArgs<"sesv2:PutConfigurationSetDeliveryOptions">): Promise<SesFullApiOperationResponseMap["sesv2:PutConfigurationSetDeliveryOptions"]>;
  PutConfigurationSetReputationOptions(...args: SesFullApiOperationArgs<"sesv2:PutConfigurationSetReputationOptions">): Promise<SesFullApiOperationResponseMap["sesv2:PutConfigurationSetReputationOptions"]>;
  PutConfigurationSetSendingOptions(...args: SesFullApiOperationArgs<"sesv2:PutConfigurationSetSendingOptions">): Promise<SesFullApiOperationResponseMap["sesv2:PutConfigurationSetSendingOptions"]>;
  PutConfigurationSetSuppressionOptions(...args: SesFullApiOperationArgs<"sesv2:PutConfigurationSetSuppressionOptions">): Promise<SesFullApiOperationResponseMap["sesv2:PutConfigurationSetSuppressionOptions"]>;
  PutConfigurationSetTrackingOptions(...args: SesFullApiOperationArgs<"sesv2:PutConfigurationSetTrackingOptions">): Promise<SesFullApiOperationResponseMap["sesv2:PutConfigurationSetTrackingOptions"]>;
  PutConfigurationSetVdmOptions(...args: SesFullApiOperationArgs<"sesv2:PutConfigurationSetVdmOptions">): Promise<SesFullApiOperationResponseMap["sesv2:PutConfigurationSetVdmOptions"]>;
  PutDedicatedIpInPool(...args: SesFullApiOperationArgs<"sesv2:PutDedicatedIpInPool">): Promise<SesFullApiOperationResponseMap["sesv2:PutDedicatedIpInPool"]>;
  PutDedicatedIpPoolScalingAttributes(...args: SesFullApiOperationArgs<"sesv2:PutDedicatedIpPoolScalingAttributes">): Promise<SesFullApiOperationResponseMap["sesv2:PutDedicatedIpPoolScalingAttributes"]>;
  PutDedicatedIpWarmupAttributes(...args: SesFullApiOperationArgs<"sesv2:PutDedicatedIpWarmupAttributes">): Promise<SesFullApiOperationResponseMap["sesv2:PutDedicatedIpWarmupAttributes"]>;
  PutDeliverabilityDashboardOption(...args: SesFullApiOperationArgs<"sesv2:PutDeliverabilityDashboardOption">): Promise<SesFullApiOperationResponseMap["sesv2:PutDeliverabilityDashboardOption"]>;
  PutEmailIdentityConfigurationSetAttributes(...args: SesFullApiOperationArgs<"sesv2:PutEmailIdentityConfigurationSetAttributes">): Promise<SesFullApiOperationResponseMap["sesv2:PutEmailIdentityConfigurationSetAttributes"]>;
  PutEmailIdentityDkimAttributes(...args: SesFullApiOperationArgs<"sesv2:PutEmailIdentityDkimAttributes">): Promise<SesFullApiOperationResponseMap["sesv2:PutEmailIdentityDkimAttributes"]>;
  PutEmailIdentityDkimSigningAttributes(...args: SesFullApiOperationArgs<"sesv2:PutEmailIdentityDkimSigningAttributes">): Promise<SesFullApiOperationResponseMap["sesv2:PutEmailIdentityDkimSigningAttributes"]>;
  PutEmailIdentityFeedbackAttributes(...args: SesFullApiOperationArgs<"sesv2:PutEmailIdentityFeedbackAttributes">): Promise<SesFullApiOperationResponseMap["sesv2:PutEmailIdentityFeedbackAttributes"]>;
  PutEmailIdentityMailFromAttributes(...args: SesFullApiOperationArgs<"sesv2:PutEmailIdentityMailFromAttributes">): Promise<SesFullApiOperationResponseMap["sesv2:PutEmailIdentityMailFromAttributes"]>;
  PutSuppressedDestination(...args: SesFullApiOperationArgs<"sesv2:PutSuppressedDestination">): Promise<SesFullApiOperationResponseMap["sesv2:PutSuppressedDestination"]>;
  PutTenantSuppressionAttributes(...args: SesFullApiOperationArgs<"sesv2:PutTenantSuppressionAttributes">): Promise<SesFullApiOperationResponseMap["sesv2:PutTenantSuppressionAttributes"]>;
  SendBulkEmail(...args: SesFullApiOperationArgs<"sesv2:SendBulkEmail">): Promise<SesFullApiOperationResponseMap["sesv2:SendBulkEmail"]>;
  SendCustomVerificationEmail(...args: SesFullApiOperationArgs<"sesv2:SendCustomVerificationEmail">): Promise<SesFullApiOperationResponseMap["sesv2:SendCustomVerificationEmail"]>;
  SendEmail(...args: SesFullApiOperationArgs<"sesv2:SendEmail">): Promise<SesFullApiOperationResponseMap["sesv2:SendEmail"]>;
  TagResource(...args: SesFullApiOperationArgs<"sesv2:TagResource">): Promise<SesFullApiOperationResponseMap["sesv2:TagResource"]>;
  TestRenderEmailTemplate(...args: SesFullApiOperationArgs<"sesv2:TestRenderEmailTemplate">): Promise<SesFullApiOperationResponseMap["sesv2:TestRenderEmailTemplate"]>;
  UntagResource(...args: SesFullApiOperationArgs<"sesv2:UntagResource">): Promise<SesFullApiOperationResponseMap["sesv2:UntagResource"]>;
  UpdateConfigurationSetEventDestination(...args: SesFullApiOperationArgs<"sesv2:UpdateConfigurationSetEventDestination">): Promise<SesFullApiOperationResponseMap["sesv2:UpdateConfigurationSetEventDestination"]>;
  UpdateContact(...args: SesFullApiOperationArgs<"sesv2:UpdateContact">): Promise<SesFullApiOperationResponseMap["sesv2:UpdateContact"]>;
  UpdateContactList(...args: SesFullApiOperationArgs<"sesv2:UpdateContactList">): Promise<SesFullApiOperationResponseMap["sesv2:UpdateContactList"]>;
  UpdateCustomVerificationEmailTemplate(...args: SesFullApiOperationArgs<"sesv2:UpdateCustomVerificationEmailTemplate">): Promise<SesFullApiOperationResponseMap["sesv2:UpdateCustomVerificationEmailTemplate"]>;
  UpdateEmailIdentityPolicy(...args: SesFullApiOperationArgs<"sesv2:UpdateEmailIdentityPolicy">): Promise<SesFullApiOperationResponseMap["sesv2:UpdateEmailIdentityPolicy"]>;
  UpdateEmailTemplate(...args: SesFullApiOperationArgs<"sesv2:UpdateEmailTemplate">): Promise<SesFullApiOperationResponseMap["sesv2:UpdateEmailTemplate"]>;
  UpdateReputationEntityCustomerManagedStatus(...args: SesFullApiOperationArgs<"sesv2:UpdateReputationEntityCustomerManagedStatus">): Promise<SesFullApiOperationResponseMap["sesv2:UpdateReputationEntityCustomerManagedStatus"]>;
  UpdateReputationEntityPolicy(...args: SesFullApiOperationArgs<"sesv2:UpdateReputationEntityPolicy">): Promise<SesFullApiOperationResponseMap["sesv2:UpdateReputationEntityPolicy"]>;
}

export const SesFullApiV202GeneratedFunctionNames = [
  "PutConfigurationSetDeliveryOptions",
  "PutConfigurationSetReputationOptions",
  "PutConfigurationSetSendingOptions",
  "PutConfigurationSetSuppressionOptions",
  "PutConfigurationSetTrackingOptions",
  "PutConfigurationSetVdmOptions",
  "PutDedicatedIpInPool",
  "PutDedicatedIpPoolScalingAttributes",
  "PutDedicatedIpWarmupAttributes",
  "PutDeliverabilityDashboardOption",
  "PutEmailIdentityConfigurationSetAttributes",
  "PutEmailIdentityDkimAttributes",
  "PutEmailIdentityDkimSigningAttributes",
  "PutEmailIdentityFeedbackAttributes",
  "PutEmailIdentityMailFromAttributes",
  "PutSuppressedDestination",
  "PutTenantSuppressionAttributes",
  "SendBulkEmail",
  "SendCustomVerificationEmail",
  "SendEmail",
  "TagResource",
  "TestRenderEmailTemplate",
  "UntagResource",
  "UpdateConfigurationSetEventDestination",
  "UpdateContact",
  "UpdateContactList",
  "UpdateCustomVerificationEmailTemplate",
  "UpdateEmailIdentityPolicy",
  "UpdateEmailTemplate",
  "UpdateReputationEntityCustomerManagedStatus",
  "UpdateReputationEntityPolicy"
] as const satisfies readonly (keyof SesFullApiV202GeneratedClient)[];

export function createSesFullApiV202GeneratedClient(
  callOperation: SesGeneratedOperationCaller,
): SesFullApiV202GeneratedClient {
  return {
    PutConfigurationSetDeliveryOptions: (...args) => callOperation("sesv2:PutConfigurationSetDeliveryOptions", ...(args as SesFullApiOperationArgs<"sesv2:PutConfigurationSetDeliveryOptions">)),
    PutConfigurationSetReputationOptions: (...args) => callOperation("sesv2:PutConfigurationSetReputationOptions", ...(args as SesFullApiOperationArgs<"sesv2:PutConfigurationSetReputationOptions">)),
    PutConfigurationSetSendingOptions: (...args) => callOperation("sesv2:PutConfigurationSetSendingOptions", ...(args as SesFullApiOperationArgs<"sesv2:PutConfigurationSetSendingOptions">)),
    PutConfigurationSetSuppressionOptions: (...args) => callOperation("sesv2:PutConfigurationSetSuppressionOptions", ...(args as SesFullApiOperationArgs<"sesv2:PutConfigurationSetSuppressionOptions">)),
    PutConfigurationSetTrackingOptions: (...args) => callOperation("sesv2:PutConfigurationSetTrackingOptions", ...(args as SesFullApiOperationArgs<"sesv2:PutConfigurationSetTrackingOptions">)),
    PutConfigurationSetVdmOptions: (...args) => callOperation("sesv2:PutConfigurationSetVdmOptions", ...(args as SesFullApiOperationArgs<"sesv2:PutConfigurationSetVdmOptions">)),
    PutDedicatedIpInPool: (...args) => callOperation("sesv2:PutDedicatedIpInPool", ...(args as SesFullApiOperationArgs<"sesv2:PutDedicatedIpInPool">)),
    PutDedicatedIpPoolScalingAttributes: (...args) => callOperation("sesv2:PutDedicatedIpPoolScalingAttributes", ...(args as SesFullApiOperationArgs<"sesv2:PutDedicatedIpPoolScalingAttributes">)),
    PutDedicatedIpWarmupAttributes: (...args) => callOperation("sesv2:PutDedicatedIpWarmupAttributes", ...(args as SesFullApiOperationArgs<"sesv2:PutDedicatedIpWarmupAttributes">)),
    PutDeliverabilityDashboardOption: (...args) => callOperation("sesv2:PutDeliverabilityDashboardOption", ...(args as SesFullApiOperationArgs<"sesv2:PutDeliverabilityDashboardOption">)),
    PutEmailIdentityConfigurationSetAttributes: (...args) => callOperation("sesv2:PutEmailIdentityConfigurationSetAttributes", ...(args as SesFullApiOperationArgs<"sesv2:PutEmailIdentityConfigurationSetAttributes">)),
    PutEmailIdentityDkimAttributes: (...args) => callOperation("sesv2:PutEmailIdentityDkimAttributes", ...(args as SesFullApiOperationArgs<"sesv2:PutEmailIdentityDkimAttributes">)),
    PutEmailIdentityDkimSigningAttributes: (...args) => callOperation("sesv2:PutEmailIdentityDkimSigningAttributes", ...(args as SesFullApiOperationArgs<"sesv2:PutEmailIdentityDkimSigningAttributes">)),
    PutEmailIdentityFeedbackAttributes: (...args) => callOperation("sesv2:PutEmailIdentityFeedbackAttributes", ...(args as SesFullApiOperationArgs<"sesv2:PutEmailIdentityFeedbackAttributes">)),
    PutEmailIdentityMailFromAttributes: (...args) => callOperation("sesv2:PutEmailIdentityMailFromAttributes", ...(args as SesFullApiOperationArgs<"sesv2:PutEmailIdentityMailFromAttributes">)),
    PutSuppressedDestination: (...args) => callOperation("sesv2:PutSuppressedDestination", ...(args as SesFullApiOperationArgs<"sesv2:PutSuppressedDestination">)),
    PutTenantSuppressionAttributes: (...args) => callOperation("sesv2:PutTenantSuppressionAttributes", ...(args as SesFullApiOperationArgs<"sesv2:PutTenantSuppressionAttributes">)),
    SendBulkEmail: (...args) => callOperation("sesv2:SendBulkEmail", ...(args as SesFullApiOperationArgs<"sesv2:SendBulkEmail">)),
    SendCustomVerificationEmail: (...args) => callOperation("sesv2:SendCustomVerificationEmail", ...(args as SesFullApiOperationArgs<"sesv2:SendCustomVerificationEmail">)),
    SendEmail: (...args) => callOperation("sesv2:SendEmail", ...(args as SesFullApiOperationArgs<"sesv2:SendEmail">)),
    TagResource: (...args) => callOperation("sesv2:TagResource", ...(args as SesFullApiOperationArgs<"sesv2:TagResource">)),
    TestRenderEmailTemplate: (...args) => callOperation("sesv2:TestRenderEmailTemplate", ...(args as SesFullApiOperationArgs<"sesv2:TestRenderEmailTemplate">)),
    UntagResource: (...args) => callOperation("sesv2:UntagResource", ...(args as SesFullApiOperationArgs<"sesv2:UntagResource">)),
    UpdateConfigurationSetEventDestination: (...args) => callOperation("sesv2:UpdateConfigurationSetEventDestination", ...(args as SesFullApiOperationArgs<"sesv2:UpdateConfigurationSetEventDestination">)),
    UpdateContact: (...args) => callOperation("sesv2:UpdateContact", ...(args as SesFullApiOperationArgs<"sesv2:UpdateContact">)),
    UpdateContactList: (...args) => callOperation("sesv2:UpdateContactList", ...(args as SesFullApiOperationArgs<"sesv2:UpdateContactList">)),
    UpdateCustomVerificationEmailTemplate: (...args) => callOperation("sesv2:UpdateCustomVerificationEmailTemplate", ...(args as SesFullApiOperationArgs<"sesv2:UpdateCustomVerificationEmailTemplate">)),
    UpdateEmailIdentityPolicy: (...args) => callOperation("sesv2:UpdateEmailIdentityPolicy", ...(args as SesFullApiOperationArgs<"sesv2:UpdateEmailIdentityPolicy">)),
    UpdateEmailTemplate: (...args) => callOperation("sesv2:UpdateEmailTemplate", ...(args as SesFullApiOperationArgs<"sesv2:UpdateEmailTemplate">)),
    UpdateReputationEntityCustomerManagedStatus: (...args) => callOperation("sesv2:UpdateReputationEntityCustomerManagedStatus", ...(args as SesFullApiOperationArgs<"sesv2:UpdateReputationEntityCustomerManagedStatus">)),
    UpdateReputationEntityPolicy: (...args) => callOperation("sesv2:UpdateReputationEntityPolicy", ...(args as SesFullApiOperationArgs<"sesv2:UpdateReputationEntityPolicy">)),
  };
}
