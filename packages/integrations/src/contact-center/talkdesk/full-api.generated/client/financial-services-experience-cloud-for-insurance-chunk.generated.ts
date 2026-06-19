// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiFinancialServicesExperienceCloudForInsuranceOperationKeys = [
  "create-fsi-insurance-connections-automated-notification",
  "SearchingFsiInsuranceAccount",
  "GettingFsiInsuranceAccount",
  "GettingFsiInsurancePolicies",
  "GettingFsiInsurancePoliciesPeriod",
  "fsi-insurance-integrations-policies-get",
  "fsi-insurance-integrations-policies-id-metadata-get",
  "fsi-insurance-integrations-claims-post",
  "fsi-insurance-integrations-account-holders-id-billing-get",
  "fsi-insurance-integrations-account-holders-id-billing-details-get",
  "fsi-insurance-integrations-accounts-account-number-claims-get",
  "fsi-insurance-integrations-claims-id-get",
  "fsi-insurance-integrations-contacts-id-patch",
  "fsi-insurance-integrations-document-deliveries-post",
  "fsi-insurance-connections-claims-id-get",
  "fsi-insurance-connections-policies-policy-number-claims-get",
  "fsi-insurance-connections-accounts-account-number-claims-get"
] as const;
export type TalkdeskFullApiFinancialServicesExperienceCloudForInsuranceOperationKey = typeof TalkdeskFullApiFinancialServicesExperienceCloudForInsuranceOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiFinancialServicesExperienceCloudForInsuranceOperationPathParamMap {
  "create-fsi-insurance-connections-automated-notification": {};
  "SearchingFsiInsuranceAccount": {};
  "GettingFsiInsuranceAccount": { "account_number": TalkdeskFullApiPathParamValue };
  "GettingFsiInsurancePolicies": { "id": TalkdeskFullApiPathParamValue };
  "GettingFsiInsurancePoliciesPeriod": { "id": TalkdeskFullApiPathParamValue };
  "fsi-insurance-integrations-policies-get": {};
  "fsi-insurance-integrations-policies-id-metadata-get": { "id": TalkdeskFullApiPathParamValue };
  "fsi-insurance-integrations-claims-post": {};
  "fsi-insurance-integrations-account-holders-id-billing-get": { "id": TalkdeskFullApiPathParamValue };
  "fsi-insurance-integrations-account-holders-id-billing-details-get": { "id": TalkdeskFullApiPathParamValue };
  "fsi-insurance-integrations-accounts-account-number-claims-get": { "account_number": TalkdeskFullApiPathParamValue };
  "fsi-insurance-integrations-claims-id-get": { "id": TalkdeskFullApiPathParamValue };
  "fsi-insurance-integrations-contacts-id-patch": { "id": TalkdeskFullApiPathParamValue };
  "fsi-insurance-integrations-document-deliveries-post": {};
  "fsi-insurance-connections-claims-id-get": { "id": TalkdeskFullApiPathParamValue };
  "fsi-insurance-connections-policies-policy-number-claims-get": { "policy_number": TalkdeskFullApiPathParamValue };
  "fsi-insurance-connections-accounts-account-number-claims-get": { "account_number": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiFinancialServicesExperienceCloudForInsuranceOperationRequestMap {
  "create-fsi-insurance-connections-automated-notification": TalkdeskFullApiOperationInput<"create-fsi-insurance-connections-automated-notification">;
  "SearchingFsiInsuranceAccount": TalkdeskFullApiOperationInput<"SearchingFsiInsuranceAccount">;
  "GettingFsiInsuranceAccount": TalkdeskFullApiOperationInput<"GettingFsiInsuranceAccount">;
  "GettingFsiInsurancePolicies": TalkdeskFullApiOperationInput<"GettingFsiInsurancePolicies">;
  "GettingFsiInsurancePoliciesPeriod": TalkdeskFullApiOperationInput<"GettingFsiInsurancePoliciesPeriod">;
  "fsi-insurance-integrations-policies-get": TalkdeskFullApiOperationInput<"fsi-insurance-integrations-policies-get">;
  "fsi-insurance-integrations-policies-id-metadata-get": TalkdeskFullApiOperationInput<"fsi-insurance-integrations-policies-id-metadata-get">;
  "fsi-insurance-integrations-claims-post": TalkdeskFullApiOperationInput<"fsi-insurance-integrations-claims-post">;
  "fsi-insurance-integrations-account-holders-id-billing-get": TalkdeskFullApiOperationInput<"fsi-insurance-integrations-account-holders-id-billing-get">;
  "fsi-insurance-integrations-account-holders-id-billing-details-get": TalkdeskFullApiOperationInput<"fsi-insurance-integrations-account-holders-id-billing-details-get">;
  "fsi-insurance-integrations-accounts-account-number-claims-get": TalkdeskFullApiOperationInput<"fsi-insurance-integrations-accounts-account-number-claims-get">;
  "fsi-insurance-integrations-claims-id-get": TalkdeskFullApiOperationInput<"fsi-insurance-integrations-claims-id-get">;
  "fsi-insurance-integrations-contacts-id-patch": TalkdeskFullApiOperationInput<"fsi-insurance-integrations-contacts-id-patch">;
  "fsi-insurance-integrations-document-deliveries-post": TalkdeskFullApiOperationInput<"fsi-insurance-integrations-document-deliveries-post">;
  "fsi-insurance-connections-claims-id-get": TalkdeskFullApiOperationInput<"fsi-insurance-connections-claims-id-get">;
  "fsi-insurance-connections-policies-policy-number-claims-get": TalkdeskFullApiOperationInput<"fsi-insurance-connections-policies-policy-number-claims-get">;
  "fsi-insurance-connections-accounts-account-number-claims-get": TalkdeskFullApiOperationInput<"fsi-insurance-connections-accounts-account-number-claims-get">;
}

export interface TalkdeskFullApiFinancialServicesExperienceCloudForInsuranceGeneratedClient {
  CreateFsiInsuranceConnectionsAutomatedNotification(...args: TalkdeskFullApiOperationArgs<"create-fsi-insurance-connections-automated-notification">): Promise<TalkdeskFullApiOperationResponseMap["create-fsi-insurance-connections-automated-notification"]>;
  SearchingFsiInsuranceAccount(...args: TalkdeskFullApiOperationArgs<"SearchingFsiInsuranceAccount">): Promise<TalkdeskFullApiOperationResponseMap["SearchingFsiInsuranceAccount"]>;
  GettingFsiInsuranceAccount(...args: TalkdeskFullApiOperationArgs<"GettingFsiInsuranceAccount">): Promise<TalkdeskFullApiOperationResponseMap["GettingFsiInsuranceAccount"]>;
  GettingFsiInsurancePolicies(...args: TalkdeskFullApiOperationArgs<"GettingFsiInsurancePolicies">): Promise<TalkdeskFullApiOperationResponseMap["GettingFsiInsurancePolicies"]>;
  GettingFsiInsurancePoliciesPeriod(...args: TalkdeskFullApiOperationArgs<"GettingFsiInsurancePoliciesPeriod">): Promise<TalkdeskFullApiOperationResponseMap["GettingFsiInsurancePoliciesPeriod"]>;
  FsiInsuranceIntegrationsPoliciesGet(...args: TalkdeskFullApiOperationArgs<"fsi-insurance-integrations-policies-get">): Promise<TalkdeskFullApiOperationResponseMap["fsi-insurance-integrations-policies-get"]>;
  FsiInsuranceIntegrationsPoliciesIdMetadataGet(...args: TalkdeskFullApiOperationArgs<"fsi-insurance-integrations-policies-id-metadata-get">): Promise<TalkdeskFullApiOperationResponseMap["fsi-insurance-integrations-policies-id-metadata-get"]>;
  FsiInsuranceIntegrationsClaimsPost(...args: TalkdeskFullApiOperationArgs<"fsi-insurance-integrations-claims-post">): Promise<TalkdeskFullApiOperationResponseMap["fsi-insurance-integrations-claims-post"]>;
  FsiInsuranceIntegrationsAccountHoldersIdBillingGet(...args: TalkdeskFullApiOperationArgs<"fsi-insurance-integrations-account-holders-id-billing-get">): Promise<TalkdeskFullApiOperationResponseMap["fsi-insurance-integrations-account-holders-id-billing-get"]>;
  FsiInsuranceIntegrationsAccountHoldersIdBillingDetailsGet(...args: TalkdeskFullApiOperationArgs<"fsi-insurance-integrations-account-holders-id-billing-details-get">): Promise<TalkdeskFullApiOperationResponseMap["fsi-insurance-integrations-account-holders-id-billing-details-get"]>;
  FsiInsuranceIntegrationsAccountsAccountNumberClaimsGet(...args: TalkdeskFullApiOperationArgs<"fsi-insurance-integrations-accounts-account-number-claims-get">): Promise<TalkdeskFullApiOperationResponseMap["fsi-insurance-integrations-accounts-account-number-claims-get"]>;
  FsiInsuranceIntegrationsClaimsIdGet(...args: TalkdeskFullApiOperationArgs<"fsi-insurance-integrations-claims-id-get">): Promise<TalkdeskFullApiOperationResponseMap["fsi-insurance-integrations-claims-id-get"]>;
  FsiInsuranceIntegrationsContactsIdPatch(...args: TalkdeskFullApiOperationArgs<"fsi-insurance-integrations-contacts-id-patch">): Promise<TalkdeskFullApiOperationResponseMap["fsi-insurance-integrations-contacts-id-patch"]>;
  FsiInsuranceIntegrationsDocumentDeliveriesPost(...args: TalkdeskFullApiOperationArgs<"fsi-insurance-integrations-document-deliveries-post">): Promise<TalkdeskFullApiOperationResponseMap["fsi-insurance-integrations-document-deliveries-post"]>;
  FsiInsuranceConnectionsClaimsIdGet(...args: TalkdeskFullApiOperationArgs<"fsi-insurance-connections-claims-id-get">): Promise<TalkdeskFullApiOperationResponseMap["fsi-insurance-connections-claims-id-get"]>;
  FsiInsuranceConnectionsPoliciesPolicyNumberClaimsGet(...args: TalkdeskFullApiOperationArgs<"fsi-insurance-connections-policies-policy-number-claims-get">): Promise<TalkdeskFullApiOperationResponseMap["fsi-insurance-connections-policies-policy-number-claims-get"]>;
  FsiInsuranceConnectionsAccountsAccountNumberClaimsGet(...args: TalkdeskFullApiOperationArgs<"fsi-insurance-connections-accounts-account-number-claims-get">): Promise<TalkdeskFullApiOperationResponseMap["fsi-insurance-connections-accounts-account-number-claims-get"]>;
}

export const TalkdeskFullApiFinancialServicesExperienceCloudForInsuranceGeneratedFunctionNames = [
  "CreateFsiInsuranceConnectionsAutomatedNotification",
  "SearchingFsiInsuranceAccount",
  "GettingFsiInsuranceAccount",
  "GettingFsiInsurancePolicies",
  "GettingFsiInsurancePoliciesPeriod",
  "FsiInsuranceIntegrationsPoliciesGet",
  "FsiInsuranceIntegrationsPoliciesIdMetadataGet",
  "FsiInsuranceIntegrationsClaimsPost",
  "FsiInsuranceIntegrationsAccountHoldersIdBillingGet",
  "FsiInsuranceIntegrationsAccountHoldersIdBillingDetailsGet",
  "FsiInsuranceIntegrationsAccountsAccountNumberClaimsGet",
  "FsiInsuranceIntegrationsClaimsIdGet",
  "FsiInsuranceIntegrationsContactsIdPatch",
  "FsiInsuranceIntegrationsDocumentDeliveriesPost",
  "FsiInsuranceConnectionsClaimsIdGet",
  "FsiInsuranceConnectionsPoliciesPolicyNumberClaimsGet",
  "FsiInsuranceConnectionsAccountsAccountNumberClaimsGet"
] as const satisfies readonly (keyof TalkdeskFullApiFinancialServicesExperienceCloudForInsuranceGeneratedClient)[];

export function createTalkdeskFullApiFinancialServicesExperienceCloudForInsuranceGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiFinancialServicesExperienceCloudForInsuranceGeneratedClient {
  return {
    CreateFsiInsuranceConnectionsAutomatedNotification: (...args) => callOperation("create-fsi-insurance-connections-automated-notification", ...(args as TalkdeskFullApiOperationArgs<"create-fsi-insurance-connections-automated-notification">)),
    SearchingFsiInsuranceAccount: (...args) => callOperation("SearchingFsiInsuranceAccount", ...(args as TalkdeskFullApiOperationArgs<"SearchingFsiInsuranceAccount">)),
    GettingFsiInsuranceAccount: (...args) => callOperation("GettingFsiInsuranceAccount", ...(args as TalkdeskFullApiOperationArgs<"GettingFsiInsuranceAccount">)),
    GettingFsiInsurancePolicies: (...args) => callOperation("GettingFsiInsurancePolicies", ...(args as TalkdeskFullApiOperationArgs<"GettingFsiInsurancePolicies">)),
    GettingFsiInsurancePoliciesPeriod: (...args) => callOperation("GettingFsiInsurancePoliciesPeriod", ...(args as TalkdeskFullApiOperationArgs<"GettingFsiInsurancePoliciesPeriod">)),
    FsiInsuranceIntegrationsPoliciesGet: (...args) => callOperation("fsi-insurance-integrations-policies-get", ...(args as TalkdeskFullApiOperationArgs<"fsi-insurance-integrations-policies-get">)),
    FsiInsuranceIntegrationsPoliciesIdMetadataGet: (...args) => callOperation("fsi-insurance-integrations-policies-id-metadata-get", ...(args as TalkdeskFullApiOperationArgs<"fsi-insurance-integrations-policies-id-metadata-get">)),
    FsiInsuranceIntegrationsClaimsPost: (...args) => callOperation("fsi-insurance-integrations-claims-post", ...(args as TalkdeskFullApiOperationArgs<"fsi-insurance-integrations-claims-post">)),
    FsiInsuranceIntegrationsAccountHoldersIdBillingGet: (...args) => callOperation("fsi-insurance-integrations-account-holders-id-billing-get", ...(args as TalkdeskFullApiOperationArgs<"fsi-insurance-integrations-account-holders-id-billing-get">)),
    FsiInsuranceIntegrationsAccountHoldersIdBillingDetailsGet: (...args) => callOperation("fsi-insurance-integrations-account-holders-id-billing-details-get", ...(args as TalkdeskFullApiOperationArgs<"fsi-insurance-integrations-account-holders-id-billing-details-get">)),
    FsiInsuranceIntegrationsAccountsAccountNumberClaimsGet: (...args) => callOperation("fsi-insurance-integrations-accounts-account-number-claims-get", ...(args as TalkdeskFullApiOperationArgs<"fsi-insurance-integrations-accounts-account-number-claims-get">)),
    FsiInsuranceIntegrationsClaimsIdGet: (...args) => callOperation("fsi-insurance-integrations-claims-id-get", ...(args as TalkdeskFullApiOperationArgs<"fsi-insurance-integrations-claims-id-get">)),
    FsiInsuranceIntegrationsContactsIdPatch: (...args) => callOperation("fsi-insurance-integrations-contacts-id-patch", ...(args as TalkdeskFullApiOperationArgs<"fsi-insurance-integrations-contacts-id-patch">)),
    FsiInsuranceIntegrationsDocumentDeliveriesPost: (...args) => callOperation("fsi-insurance-integrations-document-deliveries-post", ...(args as TalkdeskFullApiOperationArgs<"fsi-insurance-integrations-document-deliveries-post">)),
    FsiInsuranceConnectionsClaimsIdGet: (...args) => callOperation("fsi-insurance-connections-claims-id-get", ...(args as TalkdeskFullApiOperationArgs<"fsi-insurance-connections-claims-id-get">)),
    FsiInsuranceConnectionsPoliciesPolicyNumberClaimsGet: (...args) => callOperation("fsi-insurance-connections-policies-policy-number-claims-get", ...(args as TalkdeskFullApiOperationArgs<"fsi-insurance-connections-policies-policy-number-claims-get">)),
    FsiInsuranceConnectionsAccountsAccountNumberClaimsGet: (...args) => callOperation("fsi-insurance-connections-accounts-account-number-claims-get", ...(args as TalkdeskFullApiOperationArgs<"fsi-insurance-connections-accounts-account-number-claims-get">)),
  };
}
