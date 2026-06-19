// Generated endpoint chunk for StripeFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  StripeGeneratedOperationCaller,
  StripeFullApiOperationArgs,
  StripeFullApiOperationInput,
  StripeFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { StripeFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const StripeFullApiV101OperationKeys = [
  "DeleteAccountsAccount",
  "DeleteAccountsAccountBankAccountsId",
  "DeleteAccountsAccountExternalAccountsId",
  "DeleteAccountsAccountPeoplePerson",
  "DeleteAccountsAccountPersonsPerson",
  "DeleteApplePayDomainsDomain",
  "DeleteCouponsCoupon",
  "DeleteCustomersCustomer",
  "DeleteCustomersCustomerBankAccountsId",
  "DeleteCustomersCustomerCardsId",
  "DeleteCustomersCustomerDiscount",
  "DeleteCustomersCustomerSourcesId",
  "DeleteCustomersCustomerSubscriptionsSubscriptionExposedId",
  "DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount",
  "DeleteCustomersCustomerTaxIdsId",
  "DeleteEphemeralKeysKey",
  "DeleteInvoiceitemsInvoiceitem",
  "DeleteInvoicesInvoice",
  "DeletePlansPlan",
  "DeleteProductsId",
  "DeleteProductsProductFeaturesId",
  "DeleteRadarValueListItemsItem",
  "DeleteRadarValueListsValueList",
  "DeleteSubscriptionItemsItem",
  "DeleteSubscriptionsSubscriptionExposedId",
  "DeleteSubscriptionsSubscriptionExposedIdDiscount",
  "DeleteTaxIdsId",
  "DeleteTerminalConfigurationsConfiguration",
  "DeleteTerminalLocationsLocation",
  "DeleteTerminalReadersReader",
  "DeleteTestHelpersTestClocksTestClock",
  "DeleteWebhookEndpointsWebhookEndpoint",
  "GetAccount",
  "GetAccounts",
  "GetAccountsAccount",
  "GetAccountsAccountBankAccountsId",
  "GetAccountsAccountCapabilities",
  "GetAccountsAccountCapabilitiesCapability",
  "GetAccountsAccountExternalAccounts",
  "GetAccountsAccountExternalAccountsId",
  "GetAccountsAccountPeople",
  "GetAccountsAccountPeoplePerson",
  "GetAccountsAccountPersons",
  "GetAccountsAccountPersonsPerson",
  "GetApplePayDomains",
  "GetApplePayDomainsDomain",
  "GetApplicationFees",
  "GetApplicationFeesFeeRefundsId",
  "GetApplicationFeesId",
  "GetApplicationFeesIdRefunds",
  "GetAppsSecrets",
  "GetAppsSecretsFind",
  "GetBalance",
  "GetBalanceHistory",
  "GetBalanceHistoryId",
  "GetBalanceSettings",
  "GetBalanceTransactions",
  "GetBalanceTransactionsId",
  "GetBillingAlerts",
  "GetBillingAlertsId",
  "GetBillingCreditBalanceSummary",
  "GetBillingCreditBalanceTransactions",
  "GetBillingCreditBalanceTransactionsId",
  "GetBillingCreditGrants",
  "GetBillingCreditGrantsId",
  "GetBillingMeters",
  "GetBillingMetersId",
  "GetBillingMetersIdEventSummaries",
  "GetBillingPortalConfigurations",
  "GetBillingPortalConfigurationsConfiguration",
  "GetCharges",
  "GetChargesCharge",
  "GetChargesChargeDispute",
  "GetChargesChargeRefunds",
  "GetChargesChargeRefundsRefund",
  "GetChargesSearch",
  "GetCheckoutSessions",
  "GetCheckoutSessionsSession",
  "GetCheckoutSessionsSessionLineItems",
  "GetClimateOrders"
] as const;
export type StripeFullApiV101OperationKey = typeof StripeFullApiV101OperationKeys[number];
// End hardened literal operation keys.

export interface StripeFullApiV101OperationPathParamMap {
  "DeleteAccountsAccount": { "account": StripeFullApiPathParamValue };
  "DeleteAccountsAccountBankAccountsId": { "account": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "DeleteAccountsAccountExternalAccountsId": { "account": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "DeleteAccountsAccountPeoplePerson": { "account": StripeFullApiPathParamValue; "person": StripeFullApiPathParamValue };
  "DeleteAccountsAccountPersonsPerson": { "account": StripeFullApiPathParamValue; "person": StripeFullApiPathParamValue };
  "DeleteApplePayDomainsDomain": { "domain": StripeFullApiPathParamValue };
  "DeleteCouponsCoupon": { "coupon": StripeFullApiPathParamValue };
  "DeleteCustomersCustomer": { "customer": StripeFullApiPathParamValue };
  "DeleteCustomersCustomerBankAccountsId": { "customer": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "DeleteCustomersCustomerCardsId": { "customer": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "DeleteCustomersCustomerDiscount": { "customer": StripeFullApiPathParamValue };
  "DeleteCustomersCustomerSourcesId": { "customer": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "DeleteCustomersCustomerSubscriptionsSubscriptionExposedId": { "customer": StripeFullApiPathParamValue; "subscription_exposed_id": StripeFullApiPathParamValue };
  "DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount": { "customer": StripeFullApiPathParamValue; "subscription_exposed_id": StripeFullApiPathParamValue };
  "DeleteCustomersCustomerTaxIdsId": { "customer": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "DeleteEphemeralKeysKey": { "key": StripeFullApiPathParamValue };
  "DeleteInvoiceitemsInvoiceitem": { "invoiceitem": StripeFullApiPathParamValue };
  "DeleteInvoicesInvoice": { "invoice": StripeFullApiPathParamValue };
  "DeletePlansPlan": { "plan": StripeFullApiPathParamValue };
  "DeleteProductsId": { "id": StripeFullApiPathParamValue };
  "DeleteProductsProductFeaturesId": { "product": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "DeleteRadarValueListItemsItem": { "item": StripeFullApiPathParamValue };
  "DeleteRadarValueListsValueList": { "value_list": StripeFullApiPathParamValue };
  "DeleteSubscriptionItemsItem": { "item": StripeFullApiPathParamValue };
  "DeleteSubscriptionsSubscriptionExposedId": { "subscription_exposed_id": StripeFullApiPathParamValue };
  "DeleteSubscriptionsSubscriptionExposedIdDiscount": { "subscription_exposed_id": StripeFullApiPathParamValue };
  "DeleteTaxIdsId": { "id": StripeFullApiPathParamValue };
  "DeleteTerminalConfigurationsConfiguration": { "configuration": StripeFullApiPathParamValue };
  "DeleteTerminalLocationsLocation": { "location": StripeFullApiPathParamValue };
  "DeleteTerminalReadersReader": { "reader": StripeFullApiPathParamValue };
  "DeleteTestHelpersTestClocksTestClock": { "test_clock": StripeFullApiPathParamValue };
  "DeleteWebhookEndpointsWebhookEndpoint": { "webhook_endpoint": StripeFullApiPathParamValue };
  "GetAccount": {};
  "GetAccounts": {};
  "GetAccountsAccount": { "account": StripeFullApiPathParamValue };
  "GetAccountsAccountBankAccountsId": { "account": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "GetAccountsAccountCapabilities": { "account": StripeFullApiPathParamValue };
  "GetAccountsAccountCapabilitiesCapability": { "account": StripeFullApiPathParamValue; "capability": StripeFullApiPathParamValue };
  "GetAccountsAccountExternalAccounts": { "account": StripeFullApiPathParamValue };
  "GetAccountsAccountExternalAccountsId": { "account": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "GetAccountsAccountPeople": { "account": StripeFullApiPathParamValue };
  "GetAccountsAccountPeoplePerson": { "account": StripeFullApiPathParamValue; "person": StripeFullApiPathParamValue };
  "GetAccountsAccountPersons": { "account": StripeFullApiPathParamValue };
  "GetAccountsAccountPersonsPerson": { "account": StripeFullApiPathParamValue; "person": StripeFullApiPathParamValue };
  "GetApplePayDomains": {};
  "GetApplePayDomainsDomain": { "domain": StripeFullApiPathParamValue };
  "GetApplicationFees": {};
  "GetApplicationFeesFeeRefundsId": { "fee": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "GetApplicationFeesId": { "id": StripeFullApiPathParamValue };
  "GetApplicationFeesIdRefunds": { "id": StripeFullApiPathParamValue };
  "GetAppsSecrets": {};
  "GetAppsSecretsFind": {};
  "GetBalance": {};
  "GetBalanceHistory": {};
  "GetBalanceHistoryId": { "id": StripeFullApiPathParamValue };
  "GetBalanceSettings": {};
  "GetBalanceTransactions": {};
  "GetBalanceTransactionsId": { "id": StripeFullApiPathParamValue };
  "GetBillingAlerts": {};
  "GetBillingAlertsId": { "id": StripeFullApiPathParamValue };
  "GetBillingCreditBalanceSummary": {};
  "GetBillingCreditBalanceTransactions": {};
  "GetBillingCreditBalanceTransactionsId": { "id": StripeFullApiPathParamValue };
  "GetBillingCreditGrants": {};
  "GetBillingCreditGrantsId": { "id": StripeFullApiPathParamValue };
  "GetBillingMeters": {};
  "GetBillingMetersId": { "id": StripeFullApiPathParamValue };
  "GetBillingMetersIdEventSummaries": { "id": StripeFullApiPathParamValue };
  "GetBillingPortalConfigurations": {};
  "GetBillingPortalConfigurationsConfiguration": { "configuration": StripeFullApiPathParamValue };
  "GetCharges": {};
  "GetChargesCharge": { "charge": StripeFullApiPathParamValue };
  "GetChargesChargeDispute": { "charge": StripeFullApiPathParamValue };
  "GetChargesChargeRefunds": { "charge": StripeFullApiPathParamValue };
  "GetChargesChargeRefundsRefund": { "charge": StripeFullApiPathParamValue; "refund": StripeFullApiPathParamValue };
  "GetChargesSearch": {};
  "GetCheckoutSessions": {};
  "GetCheckoutSessionsSession": { "session": StripeFullApiPathParamValue };
  "GetCheckoutSessionsSessionLineItems": { "session": StripeFullApiPathParamValue };
  "GetClimateOrders": {};
}

export interface StripeFullApiV101OperationRequestMap {
  "DeleteAccountsAccount": StripeFullApiOperationInput<"DeleteAccountsAccount">;
  "DeleteAccountsAccountBankAccountsId": StripeFullApiOperationInput<"DeleteAccountsAccountBankAccountsId">;
  "DeleteAccountsAccountExternalAccountsId": StripeFullApiOperationInput<"DeleteAccountsAccountExternalAccountsId">;
  "DeleteAccountsAccountPeoplePerson": StripeFullApiOperationInput<"DeleteAccountsAccountPeoplePerson">;
  "DeleteAccountsAccountPersonsPerson": StripeFullApiOperationInput<"DeleteAccountsAccountPersonsPerson">;
  "DeleteApplePayDomainsDomain": StripeFullApiOperationInput<"DeleteApplePayDomainsDomain">;
  "DeleteCouponsCoupon": StripeFullApiOperationInput<"DeleteCouponsCoupon">;
  "DeleteCustomersCustomer": StripeFullApiOperationInput<"DeleteCustomersCustomer">;
  "DeleteCustomersCustomerBankAccountsId": StripeFullApiOperationInput<"DeleteCustomersCustomerBankAccountsId">;
  "DeleteCustomersCustomerCardsId": StripeFullApiOperationInput<"DeleteCustomersCustomerCardsId">;
  "DeleteCustomersCustomerDiscount": StripeFullApiOperationInput<"DeleteCustomersCustomerDiscount">;
  "DeleteCustomersCustomerSourcesId": StripeFullApiOperationInput<"DeleteCustomersCustomerSourcesId">;
  "DeleteCustomersCustomerSubscriptionsSubscriptionExposedId": StripeFullApiOperationInput<"DeleteCustomersCustomerSubscriptionsSubscriptionExposedId">;
  "DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount": StripeFullApiOperationInput<"DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount">;
  "DeleteCustomersCustomerTaxIdsId": StripeFullApiOperationInput<"DeleteCustomersCustomerTaxIdsId">;
  "DeleteEphemeralKeysKey": StripeFullApiOperationInput<"DeleteEphemeralKeysKey">;
  "DeleteInvoiceitemsInvoiceitem": StripeFullApiOperationInput<"DeleteInvoiceitemsInvoiceitem">;
  "DeleteInvoicesInvoice": StripeFullApiOperationInput<"DeleteInvoicesInvoice">;
  "DeletePlansPlan": StripeFullApiOperationInput<"DeletePlansPlan">;
  "DeleteProductsId": StripeFullApiOperationInput<"DeleteProductsId">;
  "DeleteProductsProductFeaturesId": StripeFullApiOperationInput<"DeleteProductsProductFeaturesId">;
  "DeleteRadarValueListItemsItem": StripeFullApiOperationInput<"DeleteRadarValueListItemsItem">;
  "DeleteRadarValueListsValueList": StripeFullApiOperationInput<"DeleteRadarValueListsValueList">;
  "DeleteSubscriptionItemsItem": StripeFullApiOperationInput<"DeleteSubscriptionItemsItem">;
  "DeleteSubscriptionsSubscriptionExposedId": StripeFullApiOperationInput<"DeleteSubscriptionsSubscriptionExposedId">;
  "DeleteSubscriptionsSubscriptionExposedIdDiscount": StripeFullApiOperationInput<"DeleteSubscriptionsSubscriptionExposedIdDiscount">;
  "DeleteTaxIdsId": StripeFullApiOperationInput<"DeleteTaxIdsId">;
  "DeleteTerminalConfigurationsConfiguration": StripeFullApiOperationInput<"DeleteTerminalConfigurationsConfiguration">;
  "DeleteTerminalLocationsLocation": StripeFullApiOperationInput<"DeleteTerminalLocationsLocation">;
  "DeleteTerminalReadersReader": StripeFullApiOperationInput<"DeleteTerminalReadersReader">;
  "DeleteTestHelpersTestClocksTestClock": StripeFullApiOperationInput<"DeleteTestHelpersTestClocksTestClock">;
  "DeleteWebhookEndpointsWebhookEndpoint": StripeFullApiOperationInput<"DeleteWebhookEndpointsWebhookEndpoint">;
  "GetAccount": StripeFullApiOperationInput<"GetAccount">;
  "GetAccounts": StripeFullApiOperationInput<"GetAccounts">;
  "GetAccountsAccount": StripeFullApiOperationInput<"GetAccountsAccount">;
  "GetAccountsAccountBankAccountsId": StripeFullApiOperationInput<"GetAccountsAccountBankAccountsId">;
  "GetAccountsAccountCapabilities": StripeFullApiOperationInput<"GetAccountsAccountCapabilities">;
  "GetAccountsAccountCapabilitiesCapability": StripeFullApiOperationInput<"GetAccountsAccountCapabilitiesCapability">;
  "GetAccountsAccountExternalAccounts": StripeFullApiOperationInput<"GetAccountsAccountExternalAccounts">;
  "GetAccountsAccountExternalAccountsId": StripeFullApiOperationInput<"GetAccountsAccountExternalAccountsId">;
  "GetAccountsAccountPeople": StripeFullApiOperationInput<"GetAccountsAccountPeople">;
  "GetAccountsAccountPeoplePerson": StripeFullApiOperationInput<"GetAccountsAccountPeoplePerson">;
  "GetAccountsAccountPersons": StripeFullApiOperationInput<"GetAccountsAccountPersons">;
  "GetAccountsAccountPersonsPerson": StripeFullApiOperationInput<"GetAccountsAccountPersonsPerson">;
  "GetApplePayDomains": StripeFullApiOperationInput<"GetApplePayDomains">;
  "GetApplePayDomainsDomain": StripeFullApiOperationInput<"GetApplePayDomainsDomain">;
  "GetApplicationFees": StripeFullApiOperationInput<"GetApplicationFees">;
  "GetApplicationFeesFeeRefundsId": StripeFullApiOperationInput<"GetApplicationFeesFeeRefundsId">;
  "GetApplicationFeesId": StripeFullApiOperationInput<"GetApplicationFeesId">;
  "GetApplicationFeesIdRefunds": StripeFullApiOperationInput<"GetApplicationFeesIdRefunds">;
  "GetAppsSecrets": StripeFullApiOperationInput<"GetAppsSecrets">;
  "GetAppsSecretsFind": StripeFullApiOperationInput<"GetAppsSecretsFind">;
  "GetBalance": StripeFullApiOperationInput<"GetBalance">;
  "GetBalanceHistory": StripeFullApiOperationInput<"GetBalanceHistory">;
  "GetBalanceHistoryId": StripeFullApiOperationInput<"GetBalanceHistoryId">;
  "GetBalanceSettings": StripeFullApiOperationInput<"GetBalanceSettings">;
  "GetBalanceTransactions": StripeFullApiOperationInput<"GetBalanceTransactions">;
  "GetBalanceTransactionsId": StripeFullApiOperationInput<"GetBalanceTransactionsId">;
  "GetBillingAlerts": StripeFullApiOperationInput<"GetBillingAlerts">;
  "GetBillingAlertsId": StripeFullApiOperationInput<"GetBillingAlertsId">;
  "GetBillingCreditBalanceSummary": StripeFullApiOperationInput<"GetBillingCreditBalanceSummary">;
  "GetBillingCreditBalanceTransactions": StripeFullApiOperationInput<"GetBillingCreditBalanceTransactions">;
  "GetBillingCreditBalanceTransactionsId": StripeFullApiOperationInput<"GetBillingCreditBalanceTransactionsId">;
  "GetBillingCreditGrants": StripeFullApiOperationInput<"GetBillingCreditGrants">;
  "GetBillingCreditGrantsId": StripeFullApiOperationInput<"GetBillingCreditGrantsId">;
  "GetBillingMeters": StripeFullApiOperationInput<"GetBillingMeters">;
  "GetBillingMetersId": StripeFullApiOperationInput<"GetBillingMetersId">;
  "GetBillingMetersIdEventSummaries": StripeFullApiOperationInput<"GetBillingMetersIdEventSummaries">;
  "GetBillingPortalConfigurations": StripeFullApiOperationInput<"GetBillingPortalConfigurations">;
  "GetBillingPortalConfigurationsConfiguration": StripeFullApiOperationInput<"GetBillingPortalConfigurationsConfiguration">;
  "GetCharges": StripeFullApiOperationInput<"GetCharges">;
  "GetChargesCharge": StripeFullApiOperationInput<"GetChargesCharge">;
  "GetChargesChargeDispute": StripeFullApiOperationInput<"GetChargesChargeDispute">;
  "GetChargesChargeRefunds": StripeFullApiOperationInput<"GetChargesChargeRefunds">;
  "GetChargesChargeRefundsRefund": StripeFullApiOperationInput<"GetChargesChargeRefundsRefund">;
  "GetChargesSearch": StripeFullApiOperationInput<"GetChargesSearch">;
  "GetCheckoutSessions": StripeFullApiOperationInput<"GetCheckoutSessions">;
  "GetCheckoutSessionsSession": StripeFullApiOperationInput<"GetCheckoutSessionsSession">;
  "GetCheckoutSessionsSessionLineItems": StripeFullApiOperationInput<"GetCheckoutSessionsSessionLineItems">;
  "GetClimateOrders": StripeFullApiOperationInput<"GetClimateOrders">;
}

export interface StripeFullApiV101GeneratedClient {
  DeleteAccountsAccount(...args: StripeFullApiOperationArgs<"DeleteAccountsAccount">): Promise<StripeFullApiOperationResponseMap["DeleteAccountsAccount"]>;
  DeleteAccountsAccountBankAccountsId(...args: StripeFullApiOperationArgs<"DeleteAccountsAccountBankAccountsId">): Promise<StripeFullApiOperationResponseMap["DeleteAccountsAccountBankAccountsId"]>;
  DeleteAccountsAccountExternalAccountsId(...args: StripeFullApiOperationArgs<"DeleteAccountsAccountExternalAccountsId">): Promise<StripeFullApiOperationResponseMap["DeleteAccountsAccountExternalAccountsId"]>;
  DeleteAccountsAccountPeoplePerson(...args: StripeFullApiOperationArgs<"DeleteAccountsAccountPeoplePerson">): Promise<StripeFullApiOperationResponseMap["DeleteAccountsAccountPeoplePerson"]>;
  DeleteAccountsAccountPersonsPerson(...args: StripeFullApiOperationArgs<"DeleteAccountsAccountPersonsPerson">): Promise<StripeFullApiOperationResponseMap["DeleteAccountsAccountPersonsPerson"]>;
  DeleteApplePayDomainsDomain(...args: StripeFullApiOperationArgs<"DeleteApplePayDomainsDomain">): Promise<StripeFullApiOperationResponseMap["DeleteApplePayDomainsDomain"]>;
  DeleteCouponsCoupon(...args: StripeFullApiOperationArgs<"DeleteCouponsCoupon">): Promise<StripeFullApiOperationResponseMap["DeleteCouponsCoupon"]>;
  DeleteCustomersCustomer(...args: StripeFullApiOperationArgs<"DeleteCustomersCustomer">): Promise<StripeFullApiOperationResponseMap["DeleteCustomersCustomer"]>;
  DeleteCustomersCustomerBankAccountsId(...args: StripeFullApiOperationArgs<"DeleteCustomersCustomerBankAccountsId">): Promise<StripeFullApiOperationResponseMap["DeleteCustomersCustomerBankAccountsId"]>;
  DeleteCustomersCustomerCardsId(...args: StripeFullApiOperationArgs<"DeleteCustomersCustomerCardsId">): Promise<StripeFullApiOperationResponseMap["DeleteCustomersCustomerCardsId"]>;
  DeleteCustomersCustomerDiscount(...args: StripeFullApiOperationArgs<"DeleteCustomersCustomerDiscount">): Promise<StripeFullApiOperationResponseMap["DeleteCustomersCustomerDiscount"]>;
  DeleteCustomersCustomerSourcesId(...args: StripeFullApiOperationArgs<"DeleteCustomersCustomerSourcesId">): Promise<StripeFullApiOperationResponseMap["DeleteCustomersCustomerSourcesId"]>;
  DeleteCustomersCustomerSubscriptionsSubscriptionExposedId(...args: StripeFullApiOperationArgs<"DeleteCustomersCustomerSubscriptionsSubscriptionExposedId">): Promise<StripeFullApiOperationResponseMap["DeleteCustomersCustomerSubscriptionsSubscriptionExposedId"]>;
  DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount(...args: StripeFullApiOperationArgs<"DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount">): Promise<StripeFullApiOperationResponseMap["DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount"]>;
  DeleteCustomersCustomerTaxIdsId(...args: StripeFullApiOperationArgs<"DeleteCustomersCustomerTaxIdsId">): Promise<StripeFullApiOperationResponseMap["DeleteCustomersCustomerTaxIdsId"]>;
  DeleteEphemeralKeysKey(...args: StripeFullApiOperationArgs<"DeleteEphemeralKeysKey">): Promise<StripeFullApiOperationResponseMap["DeleteEphemeralKeysKey"]>;
  DeleteInvoiceitemsInvoiceitem(...args: StripeFullApiOperationArgs<"DeleteInvoiceitemsInvoiceitem">): Promise<StripeFullApiOperationResponseMap["DeleteInvoiceitemsInvoiceitem"]>;
  DeleteInvoicesInvoice(...args: StripeFullApiOperationArgs<"DeleteInvoicesInvoice">): Promise<StripeFullApiOperationResponseMap["DeleteInvoicesInvoice"]>;
  DeletePlansPlan(...args: StripeFullApiOperationArgs<"DeletePlansPlan">): Promise<StripeFullApiOperationResponseMap["DeletePlansPlan"]>;
  DeleteProductsId(...args: StripeFullApiOperationArgs<"DeleteProductsId">): Promise<StripeFullApiOperationResponseMap["DeleteProductsId"]>;
  DeleteProductsProductFeaturesId(...args: StripeFullApiOperationArgs<"DeleteProductsProductFeaturesId">): Promise<StripeFullApiOperationResponseMap["DeleteProductsProductFeaturesId"]>;
  DeleteRadarValueListItemsItem(...args: StripeFullApiOperationArgs<"DeleteRadarValueListItemsItem">): Promise<StripeFullApiOperationResponseMap["DeleteRadarValueListItemsItem"]>;
  DeleteRadarValueListsValueList(...args: StripeFullApiOperationArgs<"DeleteRadarValueListsValueList">): Promise<StripeFullApiOperationResponseMap["DeleteRadarValueListsValueList"]>;
  DeleteSubscriptionItemsItem(...args: StripeFullApiOperationArgs<"DeleteSubscriptionItemsItem">): Promise<StripeFullApiOperationResponseMap["DeleteSubscriptionItemsItem"]>;
  DeleteSubscriptionsSubscriptionExposedId(...args: StripeFullApiOperationArgs<"DeleteSubscriptionsSubscriptionExposedId">): Promise<StripeFullApiOperationResponseMap["DeleteSubscriptionsSubscriptionExposedId"]>;
  DeleteSubscriptionsSubscriptionExposedIdDiscount(...args: StripeFullApiOperationArgs<"DeleteSubscriptionsSubscriptionExposedIdDiscount">): Promise<StripeFullApiOperationResponseMap["DeleteSubscriptionsSubscriptionExposedIdDiscount"]>;
  DeleteTaxIdsId(...args: StripeFullApiOperationArgs<"DeleteTaxIdsId">): Promise<StripeFullApiOperationResponseMap["DeleteTaxIdsId"]>;
  DeleteTerminalConfigurationsConfiguration(...args: StripeFullApiOperationArgs<"DeleteTerminalConfigurationsConfiguration">): Promise<StripeFullApiOperationResponseMap["DeleteTerminalConfigurationsConfiguration"]>;
  DeleteTerminalLocationsLocation(...args: StripeFullApiOperationArgs<"DeleteTerminalLocationsLocation">): Promise<StripeFullApiOperationResponseMap["DeleteTerminalLocationsLocation"]>;
  DeleteTerminalReadersReader(...args: StripeFullApiOperationArgs<"DeleteTerminalReadersReader">): Promise<StripeFullApiOperationResponseMap["DeleteTerminalReadersReader"]>;
  DeleteTestHelpersTestClocksTestClock(...args: StripeFullApiOperationArgs<"DeleteTestHelpersTestClocksTestClock">): Promise<StripeFullApiOperationResponseMap["DeleteTestHelpersTestClocksTestClock"]>;
  DeleteWebhookEndpointsWebhookEndpoint(...args: StripeFullApiOperationArgs<"DeleteWebhookEndpointsWebhookEndpoint">): Promise<StripeFullApiOperationResponseMap["DeleteWebhookEndpointsWebhookEndpoint"]>;
  GetAccount(...args: StripeFullApiOperationArgs<"GetAccount">): Promise<StripeFullApiOperationResponseMap["GetAccount"]>;
  GetAccounts(...args: StripeFullApiOperationArgs<"GetAccounts">): Promise<StripeFullApiOperationResponseMap["GetAccounts"]>;
  GetAccountsAccount(...args: StripeFullApiOperationArgs<"GetAccountsAccount">): Promise<StripeFullApiOperationResponseMap["GetAccountsAccount"]>;
  GetAccountsAccountBankAccountsId(...args: StripeFullApiOperationArgs<"GetAccountsAccountBankAccountsId">): Promise<StripeFullApiOperationResponseMap["GetAccountsAccountBankAccountsId"]>;
  GetAccountsAccountCapabilities(...args: StripeFullApiOperationArgs<"GetAccountsAccountCapabilities">): Promise<StripeFullApiOperationResponseMap["GetAccountsAccountCapabilities"]>;
  GetAccountsAccountCapabilitiesCapability(...args: StripeFullApiOperationArgs<"GetAccountsAccountCapabilitiesCapability">): Promise<StripeFullApiOperationResponseMap["GetAccountsAccountCapabilitiesCapability"]>;
  GetAccountsAccountExternalAccounts(...args: StripeFullApiOperationArgs<"GetAccountsAccountExternalAccounts">): Promise<StripeFullApiOperationResponseMap["GetAccountsAccountExternalAccounts"]>;
  GetAccountsAccountExternalAccountsId(...args: StripeFullApiOperationArgs<"GetAccountsAccountExternalAccountsId">): Promise<StripeFullApiOperationResponseMap["GetAccountsAccountExternalAccountsId"]>;
  GetAccountsAccountPeople(...args: StripeFullApiOperationArgs<"GetAccountsAccountPeople">): Promise<StripeFullApiOperationResponseMap["GetAccountsAccountPeople"]>;
  GetAccountsAccountPeoplePerson(...args: StripeFullApiOperationArgs<"GetAccountsAccountPeoplePerson">): Promise<StripeFullApiOperationResponseMap["GetAccountsAccountPeoplePerson"]>;
  GetAccountsAccountPersons(...args: StripeFullApiOperationArgs<"GetAccountsAccountPersons">): Promise<StripeFullApiOperationResponseMap["GetAccountsAccountPersons"]>;
  GetAccountsAccountPersonsPerson(...args: StripeFullApiOperationArgs<"GetAccountsAccountPersonsPerson">): Promise<StripeFullApiOperationResponseMap["GetAccountsAccountPersonsPerson"]>;
  GetApplePayDomains(...args: StripeFullApiOperationArgs<"GetApplePayDomains">): Promise<StripeFullApiOperationResponseMap["GetApplePayDomains"]>;
  GetApplePayDomainsDomain(...args: StripeFullApiOperationArgs<"GetApplePayDomainsDomain">): Promise<StripeFullApiOperationResponseMap["GetApplePayDomainsDomain"]>;
  GetApplicationFees(...args: StripeFullApiOperationArgs<"GetApplicationFees">): Promise<StripeFullApiOperationResponseMap["GetApplicationFees"]>;
  GetApplicationFeesFeeRefundsId(...args: StripeFullApiOperationArgs<"GetApplicationFeesFeeRefundsId">): Promise<StripeFullApiOperationResponseMap["GetApplicationFeesFeeRefundsId"]>;
  GetApplicationFeesId(...args: StripeFullApiOperationArgs<"GetApplicationFeesId">): Promise<StripeFullApiOperationResponseMap["GetApplicationFeesId"]>;
  GetApplicationFeesIdRefunds(...args: StripeFullApiOperationArgs<"GetApplicationFeesIdRefunds">): Promise<StripeFullApiOperationResponseMap["GetApplicationFeesIdRefunds"]>;
  GetAppsSecrets(...args: StripeFullApiOperationArgs<"GetAppsSecrets">): Promise<StripeFullApiOperationResponseMap["GetAppsSecrets"]>;
  GetAppsSecretsFind(...args: StripeFullApiOperationArgs<"GetAppsSecretsFind">): Promise<StripeFullApiOperationResponseMap["GetAppsSecretsFind"]>;
  GetBalance(...args: StripeFullApiOperationArgs<"GetBalance">): Promise<StripeFullApiOperationResponseMap["GetBalance"]>;
  GetBalanceHistory(...args: StripeFullApiOperationArgs<"GetBalanceHistory">): Promise<StripeFullApiOperationResponseMap["GetBalanceHistory"]>;
  GetBalanceHistoryId(...args: StripeFullApiOperationArgs<"GetBalanceHistoryId">): Promise<StripeFullApiOperationResponseMap["GetBalanceHistoryId"]>;
  GetBalanceSettings(...args: StripeFullApiOperationArgs<"GetBalanceSettings">): Promise<StripeFullApiOperationResponseMap["GetBalanceSettings"]>;
  GetBalanceTransactions(...args: StripeFullApiOperationArgs<"GetBalanceTransactions">): Promise<StripeFullApiOperationResponseMap["GetBalanceTransactions"]>;
  GetBalanceTransactionsId(...args: StripeFullApiOperationArgs<"GetBalanceTransactionsId">): Promise<StripeFullApiOperationResponseMap["GetBalanceTransactionsId"]>;
  GetBillingAlerts(...args: StripeFullApiOperationArgs<"GetBillingAlerts">): Promise<StripeFullApiOperationResponseMap["GetBillingAlerts"]>;
  GetBillingAlertsId(...args: StripeFullApiOperationArgs<"GetBillingAlertsId">): Promise<StripeFullApiOperationResponseMap["GetBillingAlertsId"]>;
  GetBillingCreditBalanceSummary(...args: StripeFullApiOperationArgs<"GetBillingCreditBalanceSummary">): Promise<StripeFullApiOperationResponseMap["GetBillingCreditBalanceSummary"]>;
  GetBillingCreditBalanceTransactions(...args: StripeFullApiOperationArgs<"GetBillingCreditBalanceTransactions">): Promise<StripeFullApiOperationResponseMap["GetBillingCreditBalanceTransactions"]>;
  GetBillingCreditBalanceTransactionsId(...args: StripeFullApiOperationArgs<"GetBillingCreditBalanceTransactionsId">): Promise<StripeFullApiOperationResponseMap["GetBillingCreditBalanceTransactionsId"]>;
  GetBillingCreditGrants(...args: StripeFullApiOperationArgs<"GetBillingCreditGrants">): Promise<StripeFullApiOperationResponseMap["GetBillingCreditGrants"]>;
  GetBillingCreditGrantsId(...args: StripeFullApiOperationArgs<"GetBillingCreditGrantsId">): Promise<StripeFullApiOperationResponseMap["GetBillingCreditGrantsId"]>;
  GetBillingMeters(...args: StripeFullApiOperationArgs<"GetBillingMeters">): Promise<StripeFullApiOperationResponseMap["GetBillingMeters"]>;
  GetBillingMetersId(...args: StripeFullApiOperationArgs<"GetBillingMetersId">): Promise<StripeFullApiOperationResponseMap["GetBillingMetersId"]>;
  GetBillingMetersIdEventSummaries(...args: StripeFullApiOperationArgs<"GetBillingMetersIdEventSummaries">): Promise<StripeFullApiOperationResponseMap["GetBillingMetersIdEventSummaries"]>;
  GetBillingPortalConfigurations(...args: StripeFullApiOperationArgs<"GetBillingPortalConfigurations">): Promise<StripeFullApiOperationResponseMap["GetBillingPortalConfigurations"]>;
  GetBillingPortalConfigurationsConfiguration(...args: StripeFullApiOperationArgs<"GetBillingPortalConfigurationsConfiguration">): Promise<StripeFullApiOperationResponseMap["GetBillingPortalConfigurationsConfiguration"]>;
  GetCharges(...args: StripeFullApiOperationArgs<"GetCharges">): Promise<StripeFullApiOperationResponseMap["GetCharges"]>;
  GetChargesCharge(...args: StripeFullApiOperationArgs<"GetChargesCharge">): Promise<StripeFullApiOperationResponseMap["GetChargesCharge"]>;
  GetChargesChargeDispute(...args: StripeFullApiOperationArgs<"GetChargesChargeDispute">): Promise<StripeFullApiOperationResponseMap["GetChargesChargeDispute"]>;
  GetChargesChargeRefunds(...args: StripeFullApiOperationArgs<"GetChargesChargeRefunds">): Promise<StripeFullApiOperationResponseMap["GetChargesChargeRefunds"]>;
  GetChargesChargeRefundsRefund(...args: StripeFullApiOperationArgs<"GetChargesChargeRefundsRefund">): Promise<StripeFullApiOperationResponseMap["GetChargesChargeRefundsRefund"]>;
  GetChargesSearch(...args: StripeFullApiOperationArgs<"GetChargesSearch">): Promise<StripeFullApiOperationResponseMap["GetChargesSearch"]>;
  GetCheckoutSessions(...args: StripeFullApiOperationArgs<"GetCheckoutSessions">): Promise<StripeFullApiOperationResponseMap["GetCheckoutSessions"]>;
  GetCheckoutSessionsSession(...args: StripeFullApiOperationArgs<"GetCheckoutSessionsSession">): Promise<StripeFullApiOperationResponseMap["GetCheckoutSessionsSession"]>;
  GetCheckoutSessionsSessionLineItems(...args: StripeFullApiOperationArgs<"GetCheckoutSessionsSessionLineItems">): Promise<StripeFullApiOperationResponseMap["GetCheckoutSessionsSessionLineItems"]>;
  GetClimateOrders(...args: StripeFullApiOperationArgs<"GetClimateOrders">): Promise<StripeFullApiOperationResponseMap["GetClimateOrders"]>;
}

export const StripeFullApiV101GeneratedFunctionNames = [
  "DeleteAccountsAccount",
  "DeleteAccountsAccountBankAccountsId",
  "DeleteAccountsAccountExternalAccountsId",
  "DeleteAccountsAccountPeoplePerson",
  "DeleteAccountsAccountPersonsPerson",
  "DeleteApplePayDomainsDomain",
  "DeleteCouponsCoupon",
  "DeleteCustomersCustomer",
  "DeleteCustomersCustomerBankAccountsId",
  "DeleteCustomersCustomerCardsId",
  "DeleteCustomersCustomerDiscount",
  "DeleteCustomersCustomerSourcesId",
  "DeleteCustomersCustomerSubscriptionsSubscriptionExposedId",
  "DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount",
  "DeleteCustomersCustomerTaxIdsId",
  "DeleteEphemeralKeysKey",
  "DeleteInvoiceitemsInvoiceitem",
  "DeleteInvoicesInvoice",
  "DeletePlansPlan",
  "DeleteProductsId",
  "DeleteProductsProductFeaturesId",
  "DeleteRadarValueListItemsItem",
  "DeleteRadarValueListsValueList",
  "DeleteSubscriptionItemsItem",
  "DeleteSubscriptionsSubscriptionExposedId",
  "DeleteSubscriptionsSubscriptionExposedIdDiscount",
  "DeleteTaxIdsId",
  "DeleteTerminalConfigurationsConfiguration",
  "DeleteTerminalLocationsLocation",
  "DeleteTerminalReadersReader",
  "DeleteTestHelpersTestClocksTestClock",
  "DeleteWebhookEndpointsWebhookEndpoint",
  "GetAccount",
  "GetAccounts",
  "GetAccountsAccount",
  "GetAccountsAccountBankAccountsId",
  "GetAccountsAccountCapabilities",
  "GetAccountsAccountCapabilitiesCapability",
  "GetAccountsAccountExternalAccounts",
  "GetAccountsAccountExternalAccountsId",
  "GetAccountsAccountPeople",
  "GetAccountsAccountPeoplePerson",
  "GetAccountsAccountPersons",
  "GetAccountsAccountPersonsPerson",
  "GetApplePayDomains",
  "GetApplePayDomainsDomain",
  "GetApplicationFees",
  "GetApplicationFeesFeeRefundsId",
  "GetApplicationFeesId",
  "GetApplicationFeesIdRefunds",
  "GetAppsSecrets",
  "GetAppsSecretsFind",
  "GetBalance",
  "GetBalanceHistory",
  "GetBalanceHistoryId",
  "GetBalanceSettings",
  "GetBalanceTransactions",
  "GetBalanceTransactionsId",
  "GetBillingAlerts",
  "GetBillingAlertsId",
  "GetBillingCreditBalanceSummary",
  "GetBillingCreditBalanceTransactions",
  "GetBillingCreditBalanceTransactionsId",
  "GetBillingCreditGrants",
  "GetBillingCreditGrantsId",
  "GetBillingMeters",
  "GetBillingMetersId",
  "GetBillingMetersIdEventSummaries",
  "GetBillingPortalConfigurations",
  "GetBillingPortalConfigurationsConfiguration",
  "GetCharges",
  "GetChargesCharge",
  "GetChargesChargeDispute",
  "GetChargesChargeRefunds",
  "GetChargesChargeRefundsRefund",
  "GetChargesSearch",
  "GetCheckoutSessions",
  "GetCheckoutSessionsSession",
  "GetCheckoutSessionsSessionLineItems",
  "GetClimateOrders"
] as const satisfies readonly (keyof StripeFullApiV101GeneratedClient)[];

export function createStripeFullApiV101GeneratedClient(
  callOperation: StripeGeneratedOperationCaller,
): StripeFullApiV101GeneratedClient {
  return {
    DeleteAccountsAccount: (...args) => callOperation("DeleteAccountsAccount", ...(args as StripeFullApiOperationArgs<"DeleteAccountsAccount">)),
    DeleteAccountsAccountBankAccountsId: (...args) => callOperation("DeleteAccountsAccountBankAccountsId", ...(args as StripeFullApiOperationArgs<"DeleteAccountsAccountBankAccountsId">)),
    DeleteAccountsAccountExternalAccountsId: (...args) => callOperation("DeleteAccountsAccountExternalAccountsId", ...(args as StripeFullApiOperationArgs<"DeleteAccountsAccountExternalAccountsId">)),
    DeleteAccountsAccountPeoplePerson: (...args) => callOperation("DeleteAccountsAccountPeoplePerson", ...(args as StripeFullApiOperationArgs<"DeleteAccountsAccountPeoplePerson">)),
    DeleteAccountsAccountPersonsPerson: (...args) => callOperation("DeleteAccountsAccountPersonsPerson", ...(args as StripeFullApiOperationArgs<"DeleteAccountsAccountPersonsPerson">)),
    DeleteApplePayDomainsDomain: (...args) => callOperation("DeleteApplePayDomainsDomain", ...(args as StripeFullApiOperationArgs<"DeleteApplePayDomainsDomain">)),
    DeleteCouponsCoupon: (...args) => callOperation("DeleteCouponsCoupon", ...(args as StripeFullApiOperationArgs<"DeleteCouponsCoupon">)),
    DeleteCustomersCustomer: (...args) => callOperation("DeleteCustomersCustomer", ...(args as StripeFullApiOperationArgs<"DeleteCustomersCustomer">)),
    DeleteCustomersCustomerBankAccountsId: (...args) => callOperation("DeleteCustomersCustomerBankAccountsId", ...(args as StripeFullApiOperationArgs<"DeleteCustomersCustomerBankAccountsId">)),
    DeleteCustomersCustomerCardsId: (...args) => callOperation("DeleteCustomersCustomerCardsId", ...(args as StripeFullApiOperationArgs<"DeleteCustomersCustomerCardsId">)),
    DeleteCustomersCustomerDiscount: (...args) => callOperation("DeleteCustomersCustomerDiscount", ...(args as StripeFullApiOperationArgs<"DeleteCustomersCustomerDiscount">)),
    DeleteCustomersCustomerSourcesId: (...args) => callOperation("DeleteCustomersCustomerSourcesId", ...(args as StripeFullApiOperationArgs<"DeleteCustomersCustomerSourcesId">)),
    DeleteCustomersCustomerSubscriptionsSubscriptionExposedId: (...args) => callOperation("DeleteCustomersCustomerSubscriptionsSubscriptionExposedId", ...(args as StripeFullApiOperationArgs<"DeleteCustomersCustomerSubscriptionsSubscriptionExposedId">)),
    DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount: (...args) => callOperation("DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount", ...(args as StripeFullApiOperationArgs<"DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount">)),
    DeleteCustomersCustomerTaxIdsId: (...args) => callOperation("DeleteCustomersCustomerTaxIdsId", ...(args as StripeFullApiOperationArgs<"DeleteCustomersCustomerTaxIdsId">)),
    DeleteEphemeralKeysKey: (...args) => callOperation("DeleteEphemeralKeysKey", ...(args as StripeFullApiOperationArgs<"DeleteEphemeralKeysKey">)),
    DeleteInvoiceitemsInvoiceitem: (...args) => callOperation("DeleteInvoiceitemsInvoiceitem", ...(args as StripeFullApiOperationArgs<"DeleteInvoiceitemsInvoiceitem">)),
    DeleteInvoicesInvoice: (...args) => callOperation("DeleteInvoicesInvoice", ...(args as StripeFullApiOperationArgs<"DeleteInvoicesInvoice">)),
    DeletePlansPlan: (...args) => callOperation("DeletePlansPlan", ...(args as StripeFullApiOperationArgs<"DeletePlansPlan">)),
    DeleteProductsId: (...args) => callOperation("DeleteProductsId", ...(args as StripeFullApiOperationArgs<"DeleteProductsId">)),
    DeleteProductsProductFeaturesId: (...args) => callOperation("DeleteProductsProductFeaturesId", ...(args as StripeFullApiOperationArgs<"DeleteProductsProductFeaturesId">)),
    DeleteRadarValueListItemsItem: (...args) => callOperation("DeleteRadarValueListItemsItem", ...(args as StripeFullApiOperationArgs<"DeleteRadarValueListItemsItem">)),
    DeleteRadarValueListsValueList: (...args) => callOperation("DeleteRadarValueListsValueList", ...(args as StripeFullApiOperationArgs<"DeleteRadarValueListsValueList">)),
    DeleteSubscriptionItemsItem: (...args) => callOperation("DeleteSubscriptionItemsItem", ...(args as StripeFullApiOperationArgs<"DeleteSubscriptionItemsItem">)),
    DeleteSubscriptionsSubscriptionExposedId: (...args) => callOperation("DeleteSubscriptionsSubscriptionExposedId", ...(args as StripeFullApiOperationArgs<"DeleteSubscriptionsSubscriptionExposedId">)),
    DeleteSubscriptionsSubscriptionExposedIdDiscount: (...args) => callOperation("DeleteSubscriptionsSubscriptionExposedIdDiscount", ...(args as StripeFullApiOperationArgs<"DeleteSubscriptionsSubscriptionExposedIdDiscount">)),
    DeleteTaxIdsId: (...args) => callOperation("DeleteTaxIdsId", ...(args as StripeFullApiOperationArgs<"DeleteTaxIdsId">)),
    DeleteTerminalConfigurationsConfiguration: (...args) => callOperation("DeleteTerminalConfigurationsConfiguration", ...(args as StripeFullApiOperationArgs<"DeleteTerminalConfigurationsConfiguration">)),
    DeleteTerminalLocationsLocation: (...args) => callOperation("DeleteTerminalLocationsLocation", ...(args as StripeFullApiOperationArgs<"DeleteTerminalLocationsLocation">)),
    DeleteTerminalReadersReader: (...args) => callOperation("DeleteTerminalReadersReader", ...(args as StripeFullApiOperationArgs<"DeleteTerminalReadersReader">)),
    DeleteTestHelpersTestClocksTestClock: (...args) => callOperation("DeleteTestHelpersTestClocksTestClock", ...(args as StripeFullApiOperationArgs<"DeleteTestHelpersTestClocksTestClock">)),
    DeleteWebhookEndpointsWebhookEndpoint: (...args) => callOperation("DeleteWebhookEndpointsWebhookEndpoint", ...(args as StripeFullApiOperationArgs<"DeleteWebhookEndpointsWebhookEndpoint">)),
    GetAccount: (...args) => callOperation("GetAccount", ...(args as StripeFullApiOperationArgs<"GetAccount">)),
    GetAccounts: (...args) => callOperation("GetAccounts", ...(args as StripeFullApiOperationArgs<"GetAccounts">)),
    GetAccountsAccount: (...args) => callOperation("GetAccountsAccount", ...(args as StripeFullApiOperationArgs<"GetAccountsAccount">)),
    GetAccountsAccountBankAccountsId: (...args) => callOperation("GetAccountsAccountBankAccountsId", ...(args as StripeFullApiOperationArgs<"GetAccountsAccountBankAccountsId">)),
    GetAccountsAccountCapabilities: (...args) => callOperation("GetAccountsAccountCapabilities", ...(args as StripeFullApiOperationArgs<"GetAccountsAccountCapabilities">)),
    GetAccountsAccountCapabilitiesCapability: (...args) => callOperation("GetAccountsAccountCapabilitiesCapability", ...(args as StripeFullApiOperationArgs<"GetAccountsAccountCapabilitiesCapability">)),
    GetAccountsAccountExternalAccounts: (...args) => callOperation("GetAccountsAccountExternalAccounts", ...(args as StripeFullApiOperationArgs<"GetAccountsAccountExternalAccounts">)),
    GetAccountsAccountExternalAccountsId: (...args) => callOperation("GetAccountsAccountExternalAccountsId", ...(args as StripeFullApiOperationArgs<"GetAccountsAccountExternalAccountsId">)),
    GetAccountsAccountPeople: (...args) => callOperation("GetAccountsAccountPeople", ...(args as StripeFullApiOperationArgs<"GetAccountsAccountPeople">)),
    GetAccountsAccountPeoplePerson: (...args) => callOperation("GetAccountsAccountPeoplePerson", ...(args as StripeFullApiOperationArgs<"GetAccountsAccountPeoplePerson">)),
    GetAccountsAccountPersons: (...args) => callOperation("GetAccountsAccountPersons", ...(args as StripeFullApiOperationArgs<"GetAccountsAccountPersons">)),
    GetAccountsAccountPersonsPerson: (...args) => callOperation("GetAccountsAccountPersonsPerson", ...(args as StripeFullApiOperationArgs<"GetAccountsAccountPersonsPerson">)),
    GetApplePayDomains: (...args) => callOperation("GetApplePayDomains", ...(args as StripeFullApiOperationArgs<"GetApplePayDomains">)),
    GetApplePayDomainsDomain: (...args) => callOperation("GetApplePayDomainsDomain", ...(args as StripeFullApiOperationArgs<"GetApplePayDomainsDomain">)),
    GetApplicationFees: (...args) => callOperation("GetApplicationFees", ...(args as StripeFullApiOperationArgs<"GetApplicationFees">)),
    GetApplicationFeesFeeRefundsId: (...args) => callOperation("GetApplicationFeesFeeRefundsId", ...(args as StripeFullApiOperationArgs<"GetApplicationFeesFeeRefundsId">)),
    GetApplicationFeesId: (...args) => callOperation("GetApplicationFeesId", ...(args as StripeFullApiOperationArgs<"GetApplicationFeesId">)),
    GetApplicationFeesIdRefunds: (...args) => callOperation("GetApplicationFeesIdRefunds", ...(args as StripeFullApiOperationArgs<"GetApplicationFeesIdRefunds">)),
    GetAppsSecrets: (...args) => callOperation("GetAppsSecrets", ...(args as StripeFullApiOperationArgs<"GetAppsSecrets">)),
    GetAppsSecretsFind: (...args) => callOperation("GetAppsSecretsFind", ...(args as StripeFullApiOperationArgs<"GetAppsSecretsFind">)),
    GetBalance: (...args) => callOperation("GetBalance", ...(args as StripeFullApiOperationArgs<"GetBalance">)),
    GetBalanceHistory: (...args) => callOperation("GetBalanceHistory", ...(args as StripeFullApiOperationArgs<"GetBalanceHistory">)),
    GetBalanceHistoryId: (...args) => callOperation("GetBalanceHistoryId", ...(args as StripeFullApiOperationArgs<"GetBalanceHistoryId">)),
    GetBalanceSettings: (...args) => callOperation("GetBalanceSettings", ...(args as StripeFullApiOperationArgs<"GetBalanceSettings">)),
    GetBalanceTransactions: (...args) => callOperation("GetBalanceTransactions", ...(args as StripeFullApiOperationArgs<"GetBalanceTransactions">)),
    GetBalanceTransactionsId: (...args) => callOperation("GetBalanceTransactionsId", ...(args as StripeFullApiOperationArgs<"GetBalanceTransactionsId">)),
    GetBillingAlerts: (...args) => callOperation("GetBillingAlerts", ...(args as StripeFullApiOperationArgs<"GetBillingAlerts">)),
    GetBillingAlertsId: (...args) => callOperation("GetBillingAlertsId", ...(args as StripeFullApiOperationArgs<"GetBillingAlertsId">)),
    GetBillingCreditBalanceSummary: (...args) => callOperation("GetBillingCreditBalanceSummary", ...(args as StripeFullApiOperationArgs<"GetBillingCreditBalanceSummary">)),
    GetBillingCreditBalanceTransactions: (...args) => callOperation("GetBillingCreditBalanceTransactions", ...(args as StripeFullApiOperationArgs<"GetBillingCreditBalanceTransactions">)),
    GetBillingCreditBalanceTransactionsId: (...args) => callOperation("GetBillingCreditBalanceTransactionsId", ...(args as StripeFullApiOperationArgs<"GetBillingCreditBalanceTransactionsId">)),
    GetBillingCreditGrants: (...args) => callOperation("GetBillingCreditGrants", ...(args as StripeFullApiOperationArgs<"GetBillingCreditGrants">)),
    GetBillingCreditGrantsId: (...args) => callOperation("GetBillingCreditGrantsId", ...(args as StripeFullApiOperationArgs<"GetBillingCreditGrantsId">)),
    GetBillingMeters: (...args) => callOperation("GetBillingMeters", ...(args as StripeFullApiOperationArgs<"GetBillingMeters">)),
    GetBillingMetersId: (...args) => callOperation("GetBillingMetersId", ...(args as StripeFullApiOperationArgs<"GetBillingMetersId">)),
    GetBillingMetersIdEventSummaries: (...args) => callOperation("GetBillingMetersIdEventSummaries", ...(args as StripeFullApiOperationArgs<"GetBillingMetersIdEventSummaries">)),
    GetBillingPortalConfigurations: (...args) => callOperation("GetBillingPortalConfigurations", ...(args as StripeFullApiOperationArgs<"GetBillingPortalConfigurations">)),
    GetBillingPortalConfigurationsConfiguration: (...args) => callOperation("GetBillingPortalConfigurationsConfiguration", ...(args as StripeFullApiOperationArgs<"GetBillingPortalConfigurationsConfiguration">)),
    GetCharges: (...args) => callOperation("GetCharges", ...(args as StripeFullApiOperationArgs<"GetCharges">)),
    GetChargesCharge: (...args) => callOperation("GetChargesCharge", ...(args as StripeFullApiOperationArgs<"GetChargesCharge">)),
    GetChargesChargeDispute: (...args) => callOperation("GetChargesChargeDispute", ...(args as StripeFullApiOperationArgs<"GetChargesChargeDispute">)),
    GetChargesChargeRefunds: (...args) => callOperation("GetChargesChargeRefunds", ...(args as StripeFullApiOperationArgs<"GetChargesChargeRefunds">)),
    GetChargesChargeRefundsRefund: (...args) => callOperation("GetChargesChargeRefundsRefund", ...(args as StripeFullApiOperationArgs<"GetChargesChargeRefundsRefund">)),
    GetChargesSearch: (...args) => callOperation("GetChargesSearch", ...(args as StripeFullApiOperationArgs<"GetChargesSearch">)),
    GetCheckoutSessions: (...args) => callOperation("GetCheckoutSessions", ...(args as StripeFullApiOperationArgs<"GetCheckoutSessions">)),
    GetCheckoutSessionsSession: (...args) => callOperation("GetCheckoutSessionsSession", ...(args as StripeFullApiOperationArgs<"GetCheckoutSessionsSession">)),
    GetCheckoutSessionsSessionLineItems: (...args) => callOperation("GetCheckoutSessionsSessionLineItems", ...(args as StripeFullApiOperationArgs<"GetCheckoutSessionsSessionLineItems">)),
    GetClimateOrders: (...args) => callOperation("GetClimateOrders", ...(args as StripeFullApiOperationArgs<"GetClimateOrders">)),
  };
}
