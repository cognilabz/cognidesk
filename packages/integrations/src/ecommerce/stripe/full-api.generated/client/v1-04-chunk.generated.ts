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
export const StripeFullApiV104OperationKeys = [
  "GetSubscriptionsSearch",
  "GetSubscriptionsSubscriptionExposedId",
  "GetTaxAssociationsFind",
  "GetTaxCalculationsCalculation",
  "GetTaxCalculationsCalculationLineItems",
  "GetTaxCodes",
  "GetTaxCodesId",
  "GetTaxIds",
  "GetTaxIdsId",
  "GetTaxRates",
  "GetTaxRatesTaxRate",
  "GetTaxRegistrations",
  "GetTaxRegistrationsId",
  "GetTaxSettings",
  "GetTaxTransactionsTransaction",
  "GetTaxTransactionsTransactionLineItems",
  "GetTerminalConfigurations",
  "GetTerminalConfigurationsConfiguration",
  "GetTerminalLocations",
  "GetTerminalLocationsLocation",
  "GetTerminalReaders",
  "GetTerminalReadersReader",
  "GetTestHelpersTestClocks",
  "GetTestHelpersTestClocksTestClock",
  "GetTokensToken",
  "GetTopups",
  "GetTopupsTopup",
  "GetTransfers",
  "GetTransfersIdReversals",
  "GetTransfersTransfer",
  "GetTransfersTransferReversalsId",
  "GetTreasuryCreditReversals",
  "GetTreasuryCreditReversalsCreditReversal",
  "GetTreasuryDebitReversals",
  "GetTreasuryDebitReversalsDebitReversal",
  "GetTreasuryFinancialAccounts",
  "GetTreasuryFinancialAccountsFinancialAccount",
  "GetTreasuryFinancialAccountsFinancialAccountFeatures",
  "GetTreasuryInboundTransfers",
  "GetTreasuryInboundTransfersId",
  "GetTreasuryOutboundPayments",
  "GetTreasuryOutboundPaymentsId",
  "GetTreasuryOutboundTransfers",
  "GetTreasuryOutboundTransfersOutboundTransfer",
  "GetTreasuryReceivedCredits",
  "GetTreasuryReceivedCreditsId",
  "GetTreasuryReceivedDebits",
  "GetTreasuryReceivedDebitsId",
  "GetTreasuryTransactionEntries",
  "GetTreasuryTransactionEntriesId",
  "GetTreasuryTransactions",
  "GetTreasuryTransactionsId",
  "GetWebhookEndpoints",
  "GetWebhookEndpointsWebhookEndpoint",
  "PostAccountLinks",
  "PostAccounts",
  "PostAccountsAccount",
  "PostAccountsAccountBankAccounts",
  "PostAccountsAccountBankAccountsId",
  "PostAccountsAccountCapabilitiesCapability",
  "PostAccountsAccountExternalAccounts",
  "PostAccountsAccountExternalAccountsId",
  "PostAccountsAccountLoginLinks",
  "PostAccountsAccountPeople",
  "PostAccountsAccountPeoplePerson",
  "PostAccountsAccountPersons",
  "PostAccountsAccountPersonsPerson",
  "PostAccountsAccountReject",
  "PostAccountSessions",
  "PostApplePayDomains",
  "PostApplicationFeesFeeRefundsId",
  "PostApplicationFeesIdRefund",
  "PostApplicationFeesIdRefunds",
  "PostAppsSecrets",
  "PostAppsSecretsDelete",
  "PostBalanceSettings",
  "PostBillingAlerts",
  "PostBillingAlertsIdActivate",
  "PostBillingAlertsIdArchive",
  "PostBillingAlertsIdDeactivate"
] as const;
export type StripeFullApiV104OperationKey = typeof StripeFullApiV104OperationKeys[number];
// End hardened literal operation keys.

export interface StripeFullApiV104OperationPathParamMap {
  "GetSubscriptionsSearch": {};
  "GetSubscriptionsSubscriptionExposedId": { "subscription_exposed_id": StripeFullApiPathParamValue };
  "GetTaxAssociationsFind": {};
  "GetTaxCalculationsCalculation": { "calculation": StripeFullApiPathParamValue };
  "GetTaxCalculationsCalculationLineItems": { "calculation": StripeFullApiPathParamValue };
  "GetTaxCodes": {};
  "GetTaxCodesId": { "id": StripeFullApiPathParamValue };
  "GetTaxIds": {};
  "GetTaxIdsId": { "id": StripeFullApiPathParamValue };
  "GetTaxRates": {};
  "GetTaxRatesTaxRate": { "tax_rate": StripeFullApiPathParamValue };
  "GetTaxRegistrations": {};
  "GetTaxRegistrationsId": { "id": StripeFullApiPathParamValue };
  "GetTaxSettings": {};
  "GetTaxTransactionsTransaction": { "transaction": StripeFullApiPathParamValue };
  "GetTaxTransactionsTransactionLineItems": { "transaction": StripeFullApiPathParamValue };
  "GetTerminalConfigurations": {};
  "GetTerminalConfigurationsConfiguration": { "configuration": StripeFullApiPathParamValue };
  "GetTerminalLocations": {};
  "GetTerminalLocationsLocation": { "location": StripeFullApiPathParamValue };
  "GetTerminalReaders": {};
  "GetTerminalReadersReader": { "reader": StripeFullApiPathParamValue };
  "GetTestHelpersTestClocks": {};
  "GetTestHelpersTestClocksTestClock": { "test_clock": StripeFullApiPathParamValue };
  "GetTokensToken": { "token": StripeFullApiPathParamValue };
  "GetTopups": {};
  "GetTopupsTopup": { "topup": StripeFullApiPathParamValue };
  "GetTransfers": {};
  "GetTransfersIdReversals": { "id": StripeFullApiPathParamValue };
  "GetTransfersTransfer": { "transfer": StripeFullApiPathParamValue };
  "GetTransfersTransferReversalsId": { "transfer": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "GetTreasuryCreditReversals": {};
  "GetTreasuryCreditReversalsCreditReversal": { "credit_reversal": StripeFullApiPathParamValue };
  "GetTreasuryDebitReversals": {};
  "GetTreasuryDebitReversalsDebitReversal": { "debit_reversal": StripeFullApiPathParamValue };
  "GetTreasuryFinancialAccounts": {};
  "GetTreasuryFinancialAccountsFinancialAccount": { "financial_account": StripeFullApiPathParamValue };
  "GetTreasuryFinancialAccountsFinancialAccountFeatures": { "financial_account": StripeFullApiPathParamValue };
  "GetTreasuryInboundTransfers": {};
  "GetTreasuryInboundTransfersId": { "id": StripeFullApiPathParamValue };
  "GetTreasuryOutboundPayments": {};
  "GetTreasuryOutboundPaymentsId": { "id": StripeFullApiPathParamValue };
  "GetTreasuryOutboundTransfers": {};
  "GetTreasuryOutboundTransfersOutboundTransfer": { "outbound_transfer": StripeFullApiPathParamValue };
  "GetTreasuryReceivedCredits": {};
  "GetTreasuryReceivedCreditsId": { "id": StripeFullApiPathParamValue };
  "GetTreasuryReceivedDebits": {};
  "GetTreasuryReceivedDebitsId": { "id": StripeFullApiPathParamValue };
  "GetTreasuryTransactionEntries": {};
  "GetTreasuryTransactionEntriesId": { "id": StripeFullApiPathParamValue };
  "GetTreasuryTransactions": {};
  "GetTreasuryTransactionsId": { "id": StripeFullApiPathParamValue };
  "GetWebhookEndpoints": {};
  "GetWebhookEndpointsWebhookEndpoint": { "webhook_endpoint": StripeFullApiPathParamValue };
  "PostAccountLinks": {};
  "PostAccounts": {};
  "PostAccountsAccount": { "account": StripeFullApiPathParamValue };
  "PostAccountsAccountBankAccounts": { "account": StripeFullApiPathParamValue };
  "PostAccountsAccountBankAccountsId": { "account": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "PostAccountsAccountCapabilitiesCapability": { "account": StripeFullApiPathParamValue; "capability": StripeFullApiPathParamValue };
  "PostAccountsAccountExternalAccounts": { "account": StripeFullApiPathParamValue };
  "PostAccountsAccountExternalAccountsId": { "account": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "PostAccountsAccountLoginLinks": { "account": StripeFullApiPathParamValue };
  "PostAccountsAccountPeople": { "account": StripeFullApiPathParamValue };
  "PostAccountsAccountPeoplePerson": { "account": StripeFullApiPathParamValue; "person": StripeFullApiPathParamValue };
  "PostAccountsAccountPersons": { "account": StripeFullApiPathParamValue };
  "PostAccountsAccountPersonsPerson": { "account": StripeFullApiPathParamValue; "person": StripeFullApiPathParamValue };
  "PostAccountsAccountReject": { "account": StripeFullApiPathParamValue };
  "PostAccountSessions": {};
  "PostApplePayDomains": {};
  "PostApplicationFeesFeeRefundsId": { "fee": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "PostApplicationFeesIdRefund": { "id": StripeFullApiPathParamValue };
  "PostApplicationFeesIdRefunds": { "id": StripeFullApiPathParamValue };
  "PostAppsSecrets": {};
  "PostAppsSecretsDelete": {};
  "PostBalanceSettings": {};
  "PostBillingAlerts": {};
  "PostBillingAlertsIdActivate": { "id": StripeFullApiPathParamValue };
  "PostBillingAlertsIdArchive": { "id": StripeFullApiPathParamValue };
  "PostBillingAlertsIdDeactivate": { "id": StripeFullApiPathParamValue };
}

export interface StripeFullApiV104OperationRequestMap {
  "GetSubscriptionsSearch": StripeFullApiOperationInput<"GetSubscriptionsSearch">;
  "GetSubscriptionsSubscriptionExposedId": StripeFullApiOperationInput<"GetSubscriptionsSubscriptionExposedId">;
  "GetTaxAssociationsFind": StripeFullApiOperationInput<"GetTaxAssociationsFind">;
  "GetTaxCalculationsCalculation": StripeFullApiOperationInput<"GetTaxCalculationsCalculation">;
  "GetTaxCalculationsCalculationLineItems": StripeFullApiOperationInput<"GetTaxCalculationsCalculationLineItems">;
  "GetTaxCodes": StripeFullApiOperationInput<"GetTaxCodes">;
  "GetTaxCodesId": StripeFullApiOperationInput<"GetTaxCodesId">;
  "GetTaxIds": StripeFullApiOperationInput<"GetTaxIds">;
  "GetTaxIdsId": StripeFullApiOperationInput<"GetTaxIdsId">;
  "GetTaxRates": StripeFullApiOperationInput<"GetTaxRates">;
  "GetTaxRatesTaxRate": StripeFullApiOperationInput<"GetTaxRatesTaxRate">;
  "GetTaxRegistrations": StripeFullApiOperationInput<"GetTaxRegistrations">;
  "GetTaxRegistrationsId": StripeFullApiOperationInput<"GetTaxRegistrationsId">;
  "GetTaxSettings": StripeFullApiOperationInput<"GetTaxSettings">;
  "GetTaxTransactionsTransaction": StripeFullApiOperationInput<"GetTaxTransactionsTransaction">;
  "GetTaxTransactionsTransactionLineItems": StripeFullApiOperationInput<"GetTaxTransactionsTransactionLineItems">;
  "GetTerminalConfigurations": StripeFullApiOperationInput<"GetTerminalConfigurations">;
  "GetTerminalConfigurationsConfiguration": StripeFullApiOperationInput<"GetTerminalConfigurationsConfiguration">;
  "GetTerminalLocations": StripeFullApiOperationInput<"GetTerminalLocations">;
  "GetTerminalLocationsLocation": StripeFullApiOperationInput<"GetTerminalLocationsLocation">;
  "GetTerminalReaders": StripeFullApiOperationInput<"GetTerminalReaders">;
  "GetTerminalReadersReader": StripeFullApiOperationInput<"GetTerminalReadersReader">;
  "GetTestHelpersTestClocks": StripeFullApiOperationInput<"GetTestHelpersTestClocks">;
  "GetTestHelpersTestClocksTestClock": StripeFullApiOperationInput<"GetTestHelpersTestClocksTestClock">;
  "GetTokensToken": StripeFullApiOperationInput<"GetTokensToken">;
  "GetTopups": StripeFullApiOperationInput<"GetTopups">;
  "GetTopupsTopup": StripeFullApiOperationInput<"GetTopupsTopup">;
  "GetTransfers": StripeFullApiOperationInput<"GetTransfers">;
  "GetTransfersIdReversals": StripeFullApiOperationInput<"GetTransfersIdReversals">;
  "GetTransfersTransfer": StripeFullApiOperationInput<"GetTransfersTransfer">;
  "GetTransfersTransferReversalsId": StripeFullApiOperationInput<"GetTransfersTransferReversalsId">;
  "GetTreasuryCreditReversals": StripeFullApiOperationInput<"GetTreasuryCreditReversals">;
  "GetTreasuryCreditReversalsCreditReversal": StripeFullApiOperationInput<"GetTreasuryCreditReversalsCreditReversal">;
  "GetTreasuryDebitReversals": StripeFullApiOperationInput<"GetTreasuryDebitReversals">;
  "GetTreasuryDebitReversalsDebitReversal": StripeFullApiOperationInput<"GetTreasuryDebitReversalsDebitReversal">;
  "GetTreasuryFinancialAccounts": StripeFullApiOperationInput<"GetTreasuryFinancialAccounts">;
  "GetTreasuryFinancialAccountsFinancialAccount": StripeFullApiOperationInput<"GetTreasuryFinancialAccountsFinancialAccount">;
  "GetTreasuryFinancialAccountsFinancialAccountFeatures": StripeFullApiOperationInput<"GetTreasuryFinancialAccountsFinancialAccountFeatures">;
  "GetTreasuryInboundTransfers": StripeFullApiOperationInput<"GetTreasuryInboundTransfers">;
  "GetTreasuryInboundTransfersId": StripeFullApiOperationInput<"GetTreasuryInboundTransfersId">;
  "GetTreasuryOutboundPayments": StripeFullApiOperationInput<"GetTreasuryOutboundPayments">;
  "GetTreasuryOutboundPaymentsId": StripeFullApiOperationInput<"GetTreasuryOutboundPaymentsId">;
  "GetTreasuryOutboundTransfers": StripeFullApiOperationInput<"GetTreasuryOutboundTransfers">;
  "GetTreasuryOutboundTransfersOutboundTransfer": StripeFullApiOperationInput<"GetTreasuryOutboundTransfersOutboundTransfer">;
  "GetTreasuryReceivedCredits": StripeFullApiOperationInput<"GetTreasuryReceivedCredits">;
  "GetTreasuryReceivedCreditsId": StripeFullApiOperationInput<"GetTreasuryReceivedCreditsId">;
  "GetTreasuryReceivedDebits": StripeFullApiOperationInput<"GetTreasuryReceivedDebits">;
  "GetTreasuryReceivedDebitsId": StripeFullApiOperationInput<"GetTreasuryReceivedDebitsId">;
  "GetTreasuryTransactionEntries": StripeFullApiOperationInput<"GetTreasuryTransactionEntries">;
  "GetTreasuryTransactionEntriesId": StripeFullApiOperationInput<"GetTreasuryTransactionEntriesId">;
  "GetTreasuryTransactions": StripeFullApiOperationInput<"GetTreasuryTransactions">;
  "GetTreasuryTransactionsId": StripeFullApiOperationInput<"GetTreasuryTransactionsId">;
  "GetWebhookEndpoints": StripeFullApiOperationInput<"GetWebhookEndpoints">;
  "GetWebhookEndpointsWebhookEndpoint": StripeFullApiOperationInput<"GetWebhookEndpointsWebhookEndpoint">;
  "PostAccountLinks": StripeFullApiOperationInput<"PostAccountLinks">;
  "PostAccounts": StripeFullApiOperationInput<"PostAccounts">;
  "PostAccountsAccount": StripeFullApiOperationInput<"PostAccountsAccount">;
  "PostAccountsAccountBankAccounts": StripeFullApiOperationInput<"PostAccountsAccountBankAccounts">;
  "PostAccountsAccountBankAccountsId": StripeFullApiOperationInput<"PostAccountsAccountBankAccountsId">;
  "PostAccountsAccountCapabilitiesCapability": StripeFullApiOperationInput<"PostAccountsAccountCapabilitiesCapability">;
  "PostAccountsAccountExternalAccounts": StripeFullApiOperationInput<"PostAccountsAccountExternalAccounts">;
  "PostAccountsAccountExternalAccountsId": StripeFullApiOperationInput<"PostAccountsAccountExternalAccountsId">;
  "PostAccountsAccountLoginLinks": StripeFullApiOperationInput<"PostAccountsAccountLoginLinks">;
  "PostAccountsAccountPeople": StripeFullApiOperationInput<"PostAccountsAccountPeople">;
  "PostAccountsAccountPeoplePerson": StripeFullApiOperationInput<"PostAccountsAccountPeoplePerson">;
  "PostAccountsAccountPersons": StripeFullApiOperationInput<"PostAccountsAccountPersons">;
  "PostAccountsAccountPersonsPerson": StripeFullApiOperationInput<"PostAccountsAccountPersonsPerson">;
  "PostAccountsAccountReject": StripeFullApiOperationInput<"PostAccountsAccountReject">;
  "PostAccountSessions": StripeFullApiOperationInput<"PostAccountSessions">;
  "PostApplePayDomains": StripeFullApiOperationInput<"PostApplePayDomains">;
  "PostApplicationFeesFeeRefundsId": StripeFullApiOperationInput<"PostApplicationFeesFeeRefundsId">;
  "PostApplicationFeesIdRefund": StripeFullApiOperationInput<"PostApplicationFeesIdRefund">;
  "PostApplicationFeesIdRefunds": StripeFullApiOperationInput<"PostApplicationFeesIdRefunds">;
  "PostAppsSecrets": StripeFullApiOperationInput<"PostAppsSecrets">;
  "PostAppsSecretsDelete": StripeFullApiOperationInput<"PostAppsSecretsDelete">;
  "PostBalanceSettings": StripeFullApiOperationInput<"PostBalanceSettings">;
  "PostBillingAlerts": StripeFullApiOperationInput<"PostBillingAlerts">;
  "PostBillingAlertsIdActivate": StripeFullApiOperationInput<"PostBillingAlertsIdActivate">;
  "PostBillingAlertsIdArchive": StripeFullApiOperationInput<"PostBillingAlertsIdArchive">;
  "PostBillingAlertsIdDeactivate": StripeFullApiOperationInput<"PostBillingAlertsIdDeactivate">;
}

export interface StripeFullApiV104GeneratedClient {
  GetSubscriptionsSearch(...args: StripeFullApiOperationArgs<"GetSubscriptionsSearch">): Promise<StripeFullApiOperationResponseMap["GetSubscriptionsSearch"]>;
  GetSubscriptionsSubscriptionExposedId(...args: StripeFullApiOperationArgs<"GetSubscriptionsSubscriptionExposedId">): Promise<StripeFullApiOperationResponseMap["GetSubscriptionsSubscriptionExposedId"]>;
  GetTaxAssociationsFind(...args: StripeFullApiOperationArgs<"GetTaxAssociationsFind">): Promise<StripeFullApiOperationResponseMap["GetTaxAssociationsFind"]>;
  GetTaxCalculationsCalculation(...args: StripeFullApiOperationArgs<"GetTaxCalculationsCalculation">): Promise<StripeFullApiOperationResponseMap["GetTaxCalculationsCalculation"]>;
  GetTaxCalculationsCalculationLineItems(...args: StripeFullApiOperationArgs<"GetTaxCalculationsCalculationLineItems">): Promise<StripeFullApiOperationResponseMap["GetTaxCalculationsCalculationLineItems"]>;
  GetTaxCodes(...args: StripeFullApiOperationArgs<"GetTaxCodes">): Promise<StripeFullApiOperationResponseMap["GetTaxCodes"]>;
  GetTaxCodesId(...args: StripeFullApiOperationArgs<"GetTaxCodesId">): Promise<StripeFullApiOperationResponseMap["GetTaxCodesId"]>;
  GetTaxIds(...args: StripeFullApiOperationArgs<"GetTaxIds">): Promise<StripeFullApiOperationResponseMap["GetTaxIds"]>;
  GetTaxIdsId(...args: StripeFullApiOperationArgs<"GetTaxIdsId">): Promise<StripeFullApiOperationResponseMap["GetTaxIdsId"]>;
  GetTaxRates(...args: StripeFullApiOperationArgs<"GetTaxRates">): Promise<StripeFullApiOperationResponseMap["GetTaxRates"]>;
  GetTaxRatesTaxRate(...args: StripeFullApiOperationArgs<"GetTaxRatesTaxRate">): Promise<StripeFullApiOperationResponseMap["GetTaxRatesTaxRate"]>;
  GetTaxRegistrations(...args: StripeFullApiOperationArgs<"GetTaxRegistrations">): Promise<StripeFullApiOperationResponseMap["GetTaxRegistrations"]>;
  GetTaxRegistrationsId(...args: StripeFullApiOperationArgs<"GetTaxRegistrationsId">): Promise<StripeFullApiOperationResponseMap["GetTaxRegistrationsId"]>;
  GetTaxSettings(...args: StripeFullApiOperationArgs<"GetTaxSettings">): Promise<StripeFullApiOperationResponseMap["GetTaxSettings"]>;
  GetTaxTransactionsTransaction(...args: StripeFullApiOperationArgs<"GetTaxTransactionsTransaction">): Promise<StripeFullApiOperationResponseMap["GetTaxTransactionsTransaction"]>;
  GetTaxTransactionsTransactionLineItems(...args: StripeFullApiOperationArgs<"GetTaxTransactionsTransactionLineItems">): Promise<StripeFullApiOperationResponseMap["GetTaxTransactionsTransactionLineItems"]>;
  GetTerminalConfigurations(...args: StripeFullApiOperationArgs<"GetTerminalConfigurations">): Promise<StripeFullApiOperationResponseMap["GetTerminalConfigurations"]>;
  GetTerminalConfigurationsConfiguration(...args: StripeFullApiOperationArgs<"GetTerminalConfigurationsConfiguration">): Promise<StripeFullApiOperationResponseMap["GetTerminalConfigurationsConfiguration"]>;
  GetTerminalLocations(...args: StripeFullApiOperationArgs<"GetTerminalLocations">): Promise<StripeFullApiOperationResponseMap["GetTerminalLocations"]>;
  GetTerminalLocationsLocation(...args: StripeFullApiOperationArgs<"GetTerminalLocationsLocation">): Promise<StripeFullApiOperationResponseMap["GetTerminalLocationsLocation"]>;
  GetTerminalReaders(...args: StripeFullApiOperationArgs<"GetTerminalReaders">): Promise<StripeFullApiOperationResponseMap["GetTerminalReaders"]>;
  GetTerminalReadersReader(...args: StripeFullApiOperationArgs<"GetTerminalReadersReader">): Promise<StripeFullApiOperationResponseMap["GetTerminalReadersReader"]>;
  GetTestHelpersTestClocks(...args: StripeFullApiOperationArgs<"GetTestHelpersTestClocks">): Promise<StripeFullApiOperationResponseMap["GetTestHelpersTestClocks"]>;
  GetTestHelpersTestClocksTestClock(...args: StripeFullApiOperationArgs<"GetTestHelpersTestClocksTestClock">): Promise<StripeFullApiOperationResponseMap["GetTestHelpersTestClocksTestClock"]>;
  GetTokensToken(...args: StripeFullApiOperationArgs<"GetTokensToken">): Promise<StripeFullApiOperationResponseMap["GetTokensToken"]>;
  GetTopups(...args: StripeFullApiOperationArgs<"GetTopups">): Promise<StripeFullApiOperationResponseMap["GetTopups"]>;
  GetTopupsTopup(...args: StripeFullApiOperationArgs<"GetTopupsTopup">): Promise<StripeFullApiOperationResponseMap["GetTopupsTopup"]>;
  GetTransfers(...args: StripeFullApiOperationArgs<"GetTransfers">): Promise<StripeFullApiOperationResponseMap["GetTransfers"]>;
  GetTransfersIdReversals(...args: StripeFullApiOperationArgs<"GetTransfersIdReversals">): Promise<StripeFullApiOperationResponseMap["GetTransfersIdReversals"]>;
  GetTransfersTransfer(...args: StripeFullApiOperationArgs<"GetTransfersTransfer">): Promise<StripeFullApiOperationResponseMap["GetTransfersTransfer"]>;
  GetTransfersTransferReversalsId(...args: StripeFullApiOperationArgs<"GetTransfersTransferReversalsId">): Promise<StripeFullApiOperationResponseMap["GetTransfersTransferReversalsId"]>;
  GetTreasuryCreditReversals(...args: StripeFullApiOperationArgs<"GetTreasuryCreditReversals">): Promise<StripeFullApiOperationResponseMap["GetTreasuryCreditReversals"]>;
  GetTreasuryCreditReversalsCreditReversal(...args: StripeFullApiOperationArgs<"GetTreasuryCreditReversalsCreditReversal">): Promise<StripeFullApiOperationResponseMap["GetTreasuryCreditReversalsCreditReversal"]>;
  GetTreasuryDebitReversals(...args: StripeFullApiOperationArgs<"GetTreasuryDebitReversals">): Promise<StripeFullApiOperationResponseMap["GetTreasuryDebitReversals"]>;
  GetTreasuryDebitReversalsDebitReversal(...args: StripeFullApiOperationArgs<"GetTreasuryDebitReversalsDebitReversal">): Promise<StripeFullApiOperationResponseMap["GetTreasuryDebitReversalsDebitReversal"]>;
  GetTreasuryFinancialAccounts(...args: StripeFullApiOperationArgs<"GetTreasuryFinancialAccounts">): Promise<StripeFullApiOperationResponseMap["GetTreasuryFinancialAccounts"]>;
  GetTreasuryFinancialAccountsFinancialAccount(...args: StripeFullApiOperationArgs<"GetTreasuryFinancialAccountsFinancialAccount">): Promise<StripeFullApiOperationResponseMap["GetTreasuryFinancialAccountsFinancialAccount"]>;
  GetTreasuryFinancialAccountsFinancialAccountFeatures(...args: StripeFullApiOperationArgs<"GetTreasuryFinancialAccountsFinancialAccountFeatures">): Promise<StripeFullApiOperationResponseMap["GetTreasuryFinancialAccountsFinancialAccountFeatures"]>;
  GetTreasuryInboundTransfers(...args: StripeFullApiOperationArgs<"GetTreasuryInboundTransfers">): Promise<StripeFullApiOperationResponseMap["GetTreasuryInboundTransfers"]>;
  GetTreasuryInboundTransfersId(...args: StripeFullApiOperationArgs<"GetTreasuryInboundTransfersId">): Promise<StripeFullApiOperationResponseMap["GetTreasuryInboundTransfersId"]>;
  GetTreasuryOutboundPayments(...args: StripeFullApiOperationArgs<"GetTreasuryOutboundPayments">): Promise<StripeFullApiOperationResponseMap["GetTreasuryOutboundPayments"]>;
  GetTreasuryOutboundPaymentsId(...args: StripeFullApiOperationArgs<"GetTreasuryOutboundPaymentsId">): Promise<StripeFullApiOperationResponseMap["GetTreasuryOutboundPaymentsId"]>;
  GetTreasuryOutboundTransfers(...args: StripeFullApiOperationArgs<"GetTreasuryOutboundTransfers">): Promise<StripeFullApiOperationResponseMap["GetTreasuryOutboundTransfers"]>;
  GetTreasuryOutboundTransfersOutboundTransfer(...args: StripeFullApiOperationArgs<"GetTreasuryOutboundTransfersOutboundTransfer">): Promise<StripeFullApiOperationResponseMap["GetTreasuryOutboundTransfersOutboundTransfer"]>;
  GetTreasuryReceivedCredits(...args: StripeFullApiOperationArgs<"GetTreasuryReceivedCredits">): Promise<StripeFullApiOperationResponseMap["GetTreasuryReceivedCredits"]>;
  GetTreasuryReceivedCreditsId(...args: StripeFullApiOperationArgs<"GetTreasuryReceivedCreditsId">): Promise<StripeFullApiOperationResponseMap["GetTreasuryReceivedCreditsId"]>;
  GetTreasuryReceivedDebits(...args: StripeFullApiOperationArgs<"GetTreasuryReceivedDebits">): Promise<StripeFullApiOperationResponseMap["GetTreasuryReceivedDebits"]>;
  GetTreasuryReceivedDebitsId(...args: StripeFullApiOperationArgs<"GetTreasuryReceivedDebitsId">): Promise<StripeFullApiOperationResponseMap["GetTreasuryReceivedDebitsId"]>;
  GetTreasuryTransactionEntries(...args: StripeFullApiOperationArgs<"GetTreasuryTransactionEntries">): Promise<StripeFullApiOperationResponseMap["GetTreasuryTransactionEntries"]>;
  GetTreasuryTransactionEntriesId(...args: StripeFullApiOperationArgs<"GetTreasuryTransactionEntriesId">): Promise<StripeFullApiOperationResponseMap["GetTreasuryTransactionEntriesId"]>;
  GetTreasuryTransactions(...args: StripeFullApiOperationArgs<"GetTreasuryTransactions">): Promise<StripeFullApiOperationResponseMap["GetTreasuryTransactions"]>;
  GetTreasuryTransactionsId(...args: StripeFullApiOperationArgs<"GetTreasuryTransactionsId">): Promise<StripeFullApiOperationResponseMap["GetTreasuryTransactionsId"]>;
  GetWebhookEndpoints(...args: StripeFullApiOperationArgs<"GetWebhookEndpoints">): Promise<StripeFullApiOperationResponseMap["GetWebhookEndpoints"]>;
  GetWebhookEndpointsWebhookEndpoint(...args: StripeFullApiOperationArgs<"GetWebhookEndpointsWebhookEndpoint">): Promise<StripeFullApiOperationResponseMap["GetWebhookEndpointsWebhookEndpoint"]>;
  PostAccountLinks(...args: StripeFullApiOperationArgs<"PostAccountLinks">): Promise<StripeFullApiOperationResponseMap["PostAccountLinks"]>;
  PostAccounts(...args: StripeFullApiOperationArgs<"PostAccounts">): Promise<StripeFullApiOperationResponseMap["PostAccounts"]>;
  PostAccountsAccount(...args: StripeFullApiOperationArgs<"PostAccountsAccount">): Promise<StripeFullApiOperationResponseMap["PostAccountsAccount"]>;
  PostAccountsAccountBankAccounts(...args: StripeFullApiOperationArgs<"PostAccountsAccountBankAccounts">): Promise<StripeFullApiOperationResponseMap["PostAccountsAccountBankAccounts"]>;
  PostAccountsAccountBankAccountsId(...args: StripeFullApiOperationArgs<"PostAccountsAccountBankAccountsId">): Promise<StripeFullApiOperationResponseMap["PostAccountsAccountBankAccountsId"]>;
  PostAccountsAccountCapabilitiesCapability(...args: StripeFullApiOperationArgs<"PostAccountsAccountCapabilitiesCapability">): Promise<StripeFullApiOperationResponseMap["PostAccountsAccountCapabilitiesCapability"]>;
  PostAccountsAccountExternalAccounts(...args: StripeFullApiOperationArgs<"PostAccountsAccountExternalAccounts">): Promise<StripeFullApiOperationResponseMap["PostAccountsAccountExternalAccounts"]>;
  PostAccountsAccountExternalAccountsId(...args: StripeFullApiOperationArgs<"PostAccountsAccountExternalAccountsId">): Promise<StripeFullApiOperationResponseMap["PostAccountsAccountExternalAccountsId"]>;
  PostAccountsAccountLoginLinks(...args: StripeFullApiOperationArgs<"PostAccountsAccountLoginLinks">): Promise<StripeFullApiOperationResponseMap["PostAccountsAccountLoginLinks"]>;
  PostAccountsAccountPeople(...args: StripeFullApiOperationArgs<"PostAccountsAccountPeople">): Promise<StripeFullApiOperationResponseMap["PostAccountsAccountPeople"]>;
  PostAccountsAccountPeoplePerson(...args: StripeFullApiOperationArgs<"PostAccountsAccountPeoplePerson">): Promise<StripeFullApiOperationResponseMap["PostAccountsAccountPeoplePerson"]>;
  PostAccountsAccountPersons(...args: StripeFullApiOperationArgs<"PostAccountsAccountPersons">): Promise<StripeFullApiOperationResponseMap["PostAccountsAccountPersons"]>;
  PostAccountsAccountPersonsPerson(...args: StripeFullApiOperationArgs<"PostAccountsAccountPersonsPerson">): Promise<StripeFullApiOperationResponseMap["PostAccountsAccountPersonsPerson"]>;
  PostAccountsAccountReject(...args: StripeFullApiOperationArgs<"PostAccountsAccountReject">): Promise<StripeFullApiOperationResponseMap["PostAccountsAccountReject"]>;
  PostAccountSessions(...args: StripeFullApiOperationArgs<"PostAccountSessions">): Promise<StripeFullApiOperationResponseMap["PostAccountSessions"]>;
  PostApplePayDomains(...args: StripeFullApiOperationArgs<"PostApplePayDomains">): Promise<StripeFullApiOperationResponseMap["PostApplePayDomains"]>;
  PostApplicationFeesFeeRefundsId(...args: StripeFullApiOperationArgs<"PostApplicationFeesFeeRefundsId">): Promise<StripeFullApiOperationResponseMap["PostApplicationFeesFeeRefundsId"]>;
  PostApplicationFeesIdRefund(...args: StripeFullApiOperationArgs<"PostApplicationFeesIdRefund">): Promise<StripeFullApiOperationResponseMap["PostApplicationFeesIdRefund"]>;
  PostApplicationFeesIdRefunds(...args: StripeFullApiOperationArgs<"PostApplicationFeesIdRefunds">): Promise<StripeFullApiOperationResponseMap["PostApplicationFeesIdRefunds"]>;
  PostAppsSecrets(...args: StripeFullApiOperationArgs<"PostAppsSecrets">): Promise<StripeFullApiOperationResponseMap["PostAppsSecrets"]>;
  PostAppsSecretsDelete(...args: StripeFullApiOperationArgs<"PostAppsSecretsDelete">): Promise<StripeFullApiOperationResponseMap["PostAppsSecretsDelete"]>;
  PostBalanceSettings(...args: StripeFullApiOperationArgs<"PostBalanceSettings">): Promise<StripeFullApiOperationResponseMap["PostBalanceSettings"]>;
  PostBillingAlerts(...args: StripeFullApiOperationArgs<"PostBillingAlerts">): Promise<StripeFullApiOperationResponseMap["PostBillingAlerts"]>;
  PostBillingAlertsIdActivate(...args: StripeFullApiOperationArgs<"PostBillingAlertsIdActivate">): Promise<StripeFullApiOperationResponseMap["PostBillingAlertsIdActivate"]>;
  PostBillingAlertsIdArchive(...args: StripeFullApiOperationArgs<"PostBillingAlertsIdArchive">): Promise<StripeFullApiOperationResponseMap["PostBillingAlertsIdArchive"]>;
  PostBillingAlertsIdDeactivate(...args: StripeFullApiOperationArgs<"PostBillingAlertsIdDeactivate">): Promise<StripeFullApiOperationResponseMap["PostBillingAlertsIdDeactivate"]>;
}

export const StripeFullApiV104GeneratedFunctionNames = [
  "GetSubscriptionsSearch",
  "GetSubscriptionsSubscriptionExposedId",
  "GetTaxAssociationsFind",
  "GetTaxCalculationsCalculation",
  "GetTaxCalculationsCalculationLineItems",
  "GetTaxCodes",
  "GetTaxCodesId",
  "GetTaxIds",
  "GetTaxIdsId",
  "GetTaxRates",
  "GetTaxRatesTaxRate",
  "GetTaxRegistrations",
  "GetTaxRegistrationsId",
  "GetTaxSettings",
  "GetTaxTransactionsTransaction",
  "GetTaxTransactionsTransactionLineItems",
  "GetTerminalConfigurations",
  "GetTerminalConfigurationsConfiguration",
  "GetTerminalLocations",
  "GetTerminalLocationsLocation",
  "GetTerminalReaders",
  "GetTerminalReadersReader",
  "GetTestHelpersTestClocks",
  "GetTestHelpersTestClocksTestClock",
  "GetTokensToken",
  "GetTopups",
  "GetTopupsTopup",
  "GetTransfers",
  "GetTransfersIdReversals",
  "GetTransfersTransfer",
  "GetTransfersTransferReversalsId",
  "GetTreasuryCreditReversals",
  "GetTreasuryCreditReversalsCreditReversal",
  "GetTreasuryDebitReversals",
  "GetTreasuryDebitReversalsDebitReversal",
  "GetTreasuryFinancialAccounts",
  "GetTreasuryFinancialAccountsFinancialAccount",
  "GetTreasuryFinancialAccountsFinancialAccountFeatures",
  "GetTreasuryInboundTransfers",
  "GetTreasuryInboundTransfersId",
  "GetTreasuryOutboundPayments",
  "GetTreasuryOutboundPaymentsId",
  "GetTreasuryOutboundTransfers",
  "GetTreasuryOutboundTransfersOutboundTransfer",
  "GetTreasuryReceivedCredits",
  "GetTreasuryReceivedCreditsId",
  "GetTreasuryReceivedDebits",
  "GetTreasuryReceivedDebitsId",
  "GetTreasuryTransactionEntries",
  "GetTreasuryTransactionEntriesId",
  "GetTreasuryTransactions",
  "GetTreasuryTransactionsId",
  "GetWebhookEndpoints",
  "GetWebhookEndpointsWebhookEndpoint",
  "PostAccountLinks",
  "PostAccounts",
  "PostAccountsAccount",
  "PostAccountsAccountBankAccounts",
  "PostAccountsAccountBankAccountsId",
  "PostAccountsAccountCapabilitiesCapability",
  "PostAccountsAccountExternalAccounts",
  "PostAccountsAccountExternalAccountsId",
  "PostAccountsAccountLoginLinks",
  "PostAccountsAccountPeople",
  "PostAccountsAccountPeoplePerson",
  "PostAccountsAccountPersons",
  "PostAccountsAccountPersonsPerson",
  "PostAccountsAccountReject",
  "PostAccountSessions",
  "PostApplePayDomains",
  "PostApplicationFeesFeeRefundsId",
  "PostApplicationFeesIdRefund",
  "PostApplicationFeesIdRefunds",
  "PostAppsSecrets",
  "PostAppsSecretsDelete",
  "PostBalanceSettings",
  "PostBillingAlerts",
  "PostBillingAlertsIdActivate",
  "PostBillingAlertsIdArchive",
  "PostBillingAlertsIdDeactivate"
] as const satisfies readonly (keyof StripeFullApiV104GeneratedClient)[];

export function createStripeFullApiV104GeneratedClient(
  callOperation: StripeGeneratedOperationCaller,
): StripeFullApiV104GeneratedClient {
  return {
    GetSubscriptionsSearch: (...args) => callOperation("GetSubscriptionsSearch", ...(args as StripeFullApiOperationArgs<"GetSubscriptionsSearch">)),
    GetSubscriptionsSubscriptionExposedId: (...args) => callOperation("GetSubscriptionsSubscriptionExposedId", ...(args as StripeFullApiOperationArgs<"GetSubscriptionsSubscriptionExposedId">)),
    GetTaxAssociationsFind: (...args) => callOperation("GetTaxAssociationsFind", ...(args as StripeFullApiOperationArgs<"GetTaxAssociationsFind">)),
    GetTaxCalculationsCalculation: (...args) => callOperation("GetTaxCalculationsCalculation", ...(args as StripeFullApiOperationArgs<"GetTaxCalculationsCalculation">)),
    GetTaxCalculationsCalculationLineItems: (...args) => callOperation("GetTaxCalculationsCalculationLineItems", ...(args as StripeFullApiOperationArgs<"GetTaxCalculationsCalculationLineItems">)),
    GetTaxCodes: (...args) => callOperation("GetTaxCodes", ...(args as StripeFullApiOperationArgs<"GetTaxCodes">)),
    GetTaxCodesId: (...args) => callOperation("GetTaxCodesId", ...(args as StripeFullApiOperationArgs<"GetTaxCodesId">)),
    GetTaxIds: (...args) => callOperation("GetTaxIds", ...(args as StripeFullApiOperationArgs<"GetTaxIds">)),
    GetTaxIdsId: (...args) => callOperation("GetTaxIdsId", ...(args as StripeFullApiOperationArgs<"GetTaxIdsId">)),
    GetTaxRates: (...args) => callOperation("GetTaxRates", ...(args as StripeFullApiOperationArgs<"GetTaxRates">)),
    GetTaxRatesTaxRate: (...args) => callOperation("GetTaxRatesTaxRate", ...(args as StripeFullApiOperationArgs<"GetTaxRatesTaxRate">)),
    GetTaxRegistrations: (...args) => callOperation("GetTaxRegistrations", ...(args as StripeFullApiOperationArgs<"GetTaxRegistrations">)),
    GetTaxRegistrationsId: (...args) => callOperation("GetTaxRegistrationsId", ...(args as StripeFullApiOperationArgs<"GetTaxRegistrationsId">)),
    GetTaxSettings: (...args) => callOperation("GetTaxSettings", ...(args as StripeFullApiOperationArgs<"GetTaxSettings">)),
    GetTaxTransactionsTransaction: (...args) => callOperation("GetTaxTransactionsTransaction", ...(args as StripeFullApiOperationArgs<"GetTaxTransactionsTransaction">)),
    GetTaxTransactionsTransactionLineItems: (...args) => callOperation("GetTaxTransactionsTransactionLineItems", ...(args as StripeFullApiOperationArgs<"GetTaxTransactionsTransactionLineItems">)),
    GetTerminalConfigurations: (...args) => callOperation("GetTerminalConfigurations", ...(args as StripeFullApiOperationArgs<"GetTerminalConfigurations">)),
    GetTerminalConfigurationsConfiguration: (...args) => callOperation("GetTerminalConfigurationsConfiguration", ...(args as StripeFullApiOperationArgs<"GetTerminalConfigurationsConfiguration">)),
    GetTerminalLocations: (...args) => callOperation("GetTerminalLocations", ...(args as StripeFullApiOperationArgs<"GetTerminalLocations">)),
    GetTerminalLocationsLocation: (...args) => callOperation("GetTerminalLocationsLocation", ...(args as StripeFullApiOperationArgs<"GetTerminalLocationsLocation">)),
    GetTerminalReaders: (...args) => callOperation("GetTerminalReaders", ...(args as StripeFullApiOperationArgs<"GetTerminalReaders">)),
    GetTerminalReadersReader: (...args) => callOperation("GetTerminalReadersReader", ...(args as StripeFullApiOperationArgs<"GetTerminalReadersReader">)),
    GetTestHelpersTestClocks: (...args) => callOperation("GetTestHelpersTestClocks", ...(args as StripeFullApiOperationArgs<"GetTestHelpersTestClocks">)),
    GetTestHelpersTestClocksTestClock: (...args) => callOperation("GetTestHelpersTestClocksTestClock", ...(args as StripeFullApiOperationArgs<"GetTestHelpersTestClocksTestClock">)),
    GetTokensToken: (...args) => callOperation("GetTokensToken", ...(args as StripeFullApiOperationArgs<"GetTokensToken">)),
    GetTopups: (...args) => callOperation("GetTopups", ...(args as StripeFullApiOperationArgs<"GetTopups">)),
    GetTopupsTopup: (...args) => callOperation("GetTopupsTopup", ...(args as StripeFullApiOperationArgs<"GetTopupsTopup">)),
    GetTransfers: (...args) => callOperation("GetTransfers", ...(args as StripeFullApiOperationArgs<"GetTransfers">)),
    GetTransfersIdReversals: (...args) => callOperation("GetTransfersIdReversals", ...(args as StripeFullApiOperationArgs<"GetTransfersIdReversals">)),
    GetTransfersTransfer: (...args) => callOperation("GetTransfersTransfer", ...(args as StripeFullApiOperationArgs<"GetTransfersTransfer">)),
    GetTransfersTransferReversalsId: (...args) => callOperation("GetTransfersTransferReversalsId", ...(args as StripeFullApiOperationArgs<"GetTransfersTransferReversalsId">)),
    GetTreasuryCreditReversals: (...args) => callOperation("GetTreasuryCreditReversals", ...(args as StripeFullApiOperationArgs<"GetTreasuryCreditReversals">)),
    GetTreasuryCreditReversalsCreditReversal: (...args) => callOperation("GetTreasuryCreditReversalsCreditReversal", ...(args as StripeFullApiOperationArgs<"GetTreasuryCreditReversalsCreditReversal">)),
    GetTreasuryDebitReversals: (...args) => callOperation("GetTreasuryDebitReversals", ...(args as StripeFullApiOperationArgs<"GetTreasuryDebitReversals">)),
    GetTreasuryDebitReversalsDebitReversal: (...args) => callOperation("GetTreasuryDebitReversalsDebitReversal", ...(args as StripeFullApiOperationArgs<"GetTreasuryDebitReversalsDebitReversal">)),
    GetTreasuryFinancialAccounts: (...args) => callOperation("GetTreasuryFinancialAccounts", ...(args as StripeFullApiOperationArgs<"GetTreasuryFinancialAccounts">)),
    GetTreasuryFinancialAccountsFinancialAccount: (...args) => callOperation("GetTreasuryFinancialAccountsFinancialAccount", ...(args as StripeFullApiOperationArgs<"GetTreasuryFinancialAccountsFinancialAccount">)),
    GetTreasuryFinancialAccountsFinancialAccountFeatures: (...args) => callOperation("GetTreasuryFinancialAccountsFinancialAccountFeatures", ...(args as StripeFullApiOperationArgs<"GetTreasuryFinancialAccountsFinancialAccountFeatures">)),
    GetTreasuryInboundTransfers: (...args) => callOperation("GetTreasuryInboundTransfers", ...(args as StripeFullApiOperationArgs<"GetTreasuryInboundTransfers">)),
    GetTreasuryInboundTransfersId: (...args) => callOperation("GetTreasuryInboundTransfersId", ...(args as StripeFullApiOperationArgs<"GetTreasuryInboundTransfersId">)),
    GetTreasuryOutboundPayments: (...args) => callOperation("GetTreasuryOutboundPayments", ...(args as StripeFullApiOperationArgs<"GetTreasuryOutboundPayments">)),
    GetTreasuryOutboundPaymentsId: (...args) => callOperation("GetTreasuryOutboundPaymentsId", ...(args as StripeFullApiOperationArgs<"GetTreasuryOutboundPaymentsId">)),
    GetTreasuryOutboundTransfers: (...args) => callOperation("GetTreasuryOutboundTransfers", ...(args as StripeFullApiOperationArgs<"GetTreasuryOutboundTransfers">)),
    GetTreasuryOutboundTransfersOutboundTransfer: (...args) => callOperation("GetTreasuryOutboundTransfersOutboundTransfer", ...(args as StripeFullApiOperationArgs<"GetTreasuryOutboundTransfersOutboundTransfer">)),
    GetTreasuryReceivedCredits: (...args) => callOperation("GetTreasuryReceivedCredits", ...(args as StripeFullApiOperationArgs<"GetTreasuryReceivedCredits">)),
    GetTreasuryReceivedCreditsId: (...args) => callOperation("GetTreasuryReceivedCreditsId", ...(args as StripeFullApiOperationArgs<"GetTreasuryReceivedCreditsId">)),
    GetTreasuryReceivedDebits: (...args) => callOperation("GetTreasuryReceivedDebits", ...(args as StripeFullApiOperationArgs<"GetTreasuryReceivedDebits">)),
    GetTreasuryReceivedDebitsId: (...args) => callOperation("GetTreasuryReceivedDebitsId", ...(args as StripeFullApiOperationArgs<"GetTreasuryReceivedDebitsId">)),
    GetTreasuryTransactionEntries: (...args) => callOperation("GetTreasuryTransactionEntries", ...(args as StripeFullApiOperationArgs<"GetTreasuryTransactionEntries">)),
    GetTreasuryTransactionEntriesId: (...args) => callOperation("GetTreasuryTransactionEntriesId", ...(args as StripeFullApiOperationArgs<"GetTreasuryTransactionEntriesId">)),
    GetTreasuryTransactions: (...args) => callOperation("GetTreasuryTransactions", ...(args as StripeFullApiOperationArgs<"GetTreasuryTransactions">)),
    GetTreasuryTransactionsId: (...args) => callOperation("GetTreasuryTransactionsId", ...(args as StripeFullApiOperationArgs<"GetTreasuryTransactionsId">)),
    GetWebhookEndpoints: (...args) => callOperation("GetWebhookEndpoints", ...(args as StripeFullApiOperationArgs<"GetWebhookEndpoints">)),
    GetWebhookEndpointsWebhookEndpoint: (...args) => callOperation("GetWebhookEndpointsWebhookEndpoint", ...(args as StripeFullApiOperationArgs<"GetWebhookEndpointsWebhookEndpoint">)),
    PostAccountLinks: (...args) => callOperation("PostAccountLinks", ...(args as StripeFullApiOperationArgs<"PostAccountLinks">)),
    PostAccounts: (...args) => callOperation("PostAccounts", ...(args as StripeFullApiOperationArgs<"PostAccounts">)),
    PostAccountsAccount: (...args) => callOperation("PostAccountsAccount", ...(args as StripeFullApiOperationArgs<"PostAccountsAccount">)),
    PostAccountsAccountBankAccounts: (...args) => callOperation("PostAccountsAccountBankAccounts", ...(args as StripeFullApiOperationArgs<"PostAccountsAccountBankAccounts">)),
    PostAccountsAccountBankAccountsId: (...args) => callOperation("PostAccountsAccountBankAccountsId", ...(args as StripeFullApiOperationArgs<"PostAccountsAccountBankAccountsId">)),
    PostAccountsAccountCapabilitiesCapability: (...args) => callOperation("PostAccountsAccountCapabilitiesCapability", ...(args as StripeFullApiOperationArgs<"PostAccountsAccountCapabilitiesCapability">)),
    PostAccountsAccountExternalAccounts: (...args) => callOperation("PostAccountsAccountExternalAccounts", ...(args as StripeFullApiOperationArgs<"PostAccountsAccountExternalAccounts">)),
    PostAccountsAccountExternalAccountsId: (...args) => callOperation("PostAccountsAccountExternalAccountsId", ...(args as StripeFullApiOperationArgs<"PostAccountsAccountExternalAccountsId">)),
    PostAccountsAccountLoginLinks: (...args) => callOperation("PostAccountsAccountLoginLinks", ...(args as StripeFullApiOperationArgs<"PostAccountsAccountLoginLinks">)),
    PostAccountsAccountPeople: (...args) => callOperation("PostAccountsAccountPeople", ...(args as StripeFullApiOperationArgs<"PostAccountsAccountPeople">)),
    PostAccountsAccountPeoplePerson: (...args) => callOperation("PostAccountsAccountPeoplePerson", ...(args as StripeFullApiOperationArgs<"PostAccountsAccountPeoplePerson">)),
    PostAccountsAccountPersons: (...args) => callOperation("PostAccountsAccountPersons", ...(args as StripeFullApiOperationArgs<"PostAccountsAccountPersons">)),
    PostAccountsAccountPersonsPerson: (...args) => callOperation("PostAccountsAccountPersonsPerson", ...(args as StripeFullApiOperationArgs<"PostAccountsAccountPersonsPerson">)),
    PostAccountsAccountReject: (...args) => callOperation("PostAccountsAccountReject", ...(args as StripeFullApiOperationArgs<"PostAccountsAccountReject">)),
    PostAccountSessions: (...args) => callOperation("PostAccountSessions", ...(args as StripeFullApiOperationArgs<"PostAccountSessions">)),
    PostApplePayDomains: (...args) => callOperation("PostApplePayDomains", ...(args as StripeFullApiOperationArgs<"PostApplePayDomains">)),
    PostApplicationFeesFeeRefundsId: (...args) => callOperation("PostApplicationFeesFeeRefundsId", ...(args as StripeFullApiOperationArgs<"PostApplicationFeesFeeRefundsId">)),
    PostApplicationFeesIdRefund: (...args) => callOperation("PostApplicationFeesIdRefund", ...(args as StripeFullApiOperationArgs<"PostApplicationFeesIdRefund">)),
    PostApplicationFeesIdRefunds: (...args) => callOperation("PostApplicationFeesIdRefunds", ...(args as StripeFullApiOperationArgs<"PostApplicationFeesIdRefunds">)),
    PostAppsSecrets: (...args) => callOperation("PostAppsSecrets", ...(args as StripeFullApiOperationArgs<"PostAppsSecrets">)),
    PostAppsSecretsDelete: (...args) => callOperation("PostAppsSecretsDelete", ...(args as StripeFullApiOperationArgs<"PostAppsSecretsDelete">)),
    PostBalanceSettings: (...args) => callOperation("PostBalanceSettings", ...(args as StripeFullApiOperationArgs<"PostBalanceSettings">)),
    PostBillingAlerts: (...args) => callOperation("PostBillingAlerts", ...(args as StripeFullApiOperationArgs<"PostBillingAlerts">)),
    PostBillingAlertsIdActivate: (...args) => callOperation("PostBillingAlertsIdActivate", ...(args as StripeFullApiOperationArgs<"PostBillingAlertsIdActivate">)),
    PostBillingAlertsIdArchive: (...args) => callOperation("PostBillingAlertsIdArchive", ...(args as StripeFullApiOperationArgs<"PostBillingAlertsIdArchive">)),
    PostBillingAlertsIdDeactivate: (...args) => callOperation("PostBillingAlertsIdDeactivate", ...(args as StripeFullApiOperationArgs<"PostBillingAlertsIdDeactivate">)),
  };
}
