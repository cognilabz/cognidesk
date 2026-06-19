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
export const StripeFullApiV102OperationKeys = [
  "GetClimateOrdersOrder",
  "GetClimateProducts",
  "GetClimateProductsProduct",
  "GetClimateSuppliers",
  "GetClimateSuppliersSupplier",
  "GetConfirmationTokensConfirmationToken",
  "GetCountrySpecs",
  "GetCountrySpecsCountry",
  "GetCoupons",
  "GetCouponsCoupon",
  "GetCreditNotes",
  "GetCreditNotesCreditNoteLines",
  "GetCreditNotesId",
  "GetCreditNotesPreview",
  "GetCreditNotesPreviewLines",
  "GetCustomers",
  "GetCustomersCustomer",
  "GetCustomersCustomerBalanceTransactions",
  "GetCustomersCustomerBalanceTransactionsTransaction",
  "GetCustomersCustomerBankAccounts",
  "GetCustomersCustomerBankAccountsId",
  "GetCustomersCustomerCards",
  "GetCustomersCustomerCardsId",
  "GetCustomersCustomerCashBalance",
  "GetCustomersCustomerCashBalanceTransactions",
  "GetCustomersCustomerCashBalanceTransactionsTransaction",
  "GetCustomersCustomerDiscount",
  "GetCustomersCustomerPaymentMethods",
  "GetCustomersCustomerPaymentMethodsPaymentMethod",
  "GetCustomersCustomerSources",
  "GetCustomersCustomerSourcesId",
  "GetCustomersCustomerSubscriptions",
  "GetCustomersCustomerSubscriptionsSubscriptionExposedId",
  "GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount",
  "GetCustomersCustomerTaxIds",
  "GetCustomersCustomerTaxIdsId",
  "GetCustomersSearch",
  "GetDisputes",
  "GetDisputesDispute",
  "GetEntitlementsActiveEntitlements",
  "GetEntitlementsActiveEntitlementsId",
  "GetEntitlementsFeatures",
  "GetEntitlementsFeaturesId",
  "GetEvents",
  "GetEventsId",
  "GetExchangeRates",
  "GetExchangeRatesRateId",
  "GetFileLinks",
  "GetFileLinksLink",
  "GetFiles",
  "GetFilesFile",
  "GetFinancialConnectionsAccounts",
  "GetFinancialConnectionsAccountsAccount",
  "GetFinancialConnectionsAccountsAccountOwners",
  "GetFinancialConnectionsSessionsSession",
  "GetFinancialConnectionsTransactions",
  "GetFinancialConnectionsTransactionsTransaction",
  "GetForwardingRequests",
  "GetForwardingRequestsId",
  "GetIdentityVerificationReports",
  "GetIdentityVerificationReportsReport",
  "GetIdentityVerificationSessions",
  "GetIdentityVerificationSessionsSession",
  "GetInvoiceitems",
  "GetInvoiceitemsInvoiceitem",
  "GetInvoicePayments",
  "GetInvoicePaymentsInvoicePayment",
  "GetInvoiceRenderingTemplates",
  "GetInvoiceRenderingTemplatesTemplate",
  "GetInvoices",
  "GetInvoicesInvoice",
  "GetInvoicesInvoiceLines",
  "GetInvoicesSearch",
  "GetIssuingAuthorizations",
  "GetIssuingAuthorizationsAuthorization",
  "GetIssuingCardholders",
  "GetIssuingCardholdersCardholder",
  "GetIssuingCards",
  "GetIssuingCardsCard",
  "GetIssuingDisputes"
] as const;
export type StripeFullApiV102OperationKey = typeof StripeFullApiV102OperationKeys[number];
// End hardened literal operation keys.

export interface StripeFullApiV102OperationPathParamMap {
  "GetClimateOrdersOrder": { "order": StripeFullApiPathParamValue };
  "GetClimateProducts": {};
  "GetClimateProductsProduct": { "product": StripeFullApiPathParamValue };
  "GetClimateSuppliers": {};
  "GetClimateSuppliersSupplier": { "supplier": StripeFullApiPathParamValue };
  "GetConfirmationTokensConfirmationToken": { "confirmation_token": StripeFullApiPathParamValue };
  "GetCountrySpecs": {};
  "GetCountrySpecsCountry": { "country": StripeFullApiPathParamValue };
  "GetCoupons": {};
  "GetCouponsCoupon": { "coupon": StripeFullApiPathParamValue };
  "GetCreditNotes": {};
  "GetCreditNotesCreditNoteLines": { "credit_note": StripeFullApiPathParamValue };
  "GetCreditNotesId": { "id": StripeFullApiPathParamValue };
  "GetCreditNotesPreview": {};
  "GetCreditNotesPreviewLines": {};
  "GetCustomers": {};
  "GetCustomersCustomer": { "customer": StripeFullApiPathParamValue };
  "GetCustomersCustomerBalanceTransactions": { "customer": StripeFullApiPathParamValue };
  "GetCustomersCustomerBalanceTransactionsTransaction": { "customer": StripeFullApiPathParamValue; "transaction": StripeFullApiPathParamValue };
  "GetCustomersCustomerBankAccounts": { "customer": StripeFullApiPathParamValue };
  "GetCustomersCustomerBankAccountsId": { "customer": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "GetCustomersCustomerCards": { "customer": StripeFullApiPathParamValue };
  "GetCustomersCustomerCardsId": { "customer": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "GetCustomersCustomerCashBalance": { "customer": StripeFullApiPathParamValue };
  "GetCustomersCustomerCashBalanceTransactions": { "customer": StripeFullApiPathParamValue };
  "GetCustomersCustomerCashBalanceTransactionsTransaction": { "customer": StripeFullApiPathParamValue; "transaction": StripeFullApiPathParamValue };
  "GetCustomersCustomerDiscount": { "customer": StripeFullApiPathParamValue };
  "GetCustomersCustomerPaymentMethods": { "customer": StripeFullApiPathParamValue };
  "GetCustomersCustomerPaymentMethodsPaymentMethod": { "customer": StripeFullApiPathParamValue; "payment_method": StripeFullApiPathParamValue };
  "GetCustomersCustomerSources": { "customer": StripeFullApiPathParamValue };
  "GetCustomersCustomerSourcesId": { "customer": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "GetCustomersCustomerSubscriptions": { "customer": StripeFullApiPathParamValue };
  "GetCustomersCustomerSubscriptionsSubscriptionExposedId": { "customer": StripeFullApiPathParamValue; "subscription_exposed_id": StripeFullApiPathParamValue };
  "GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount": { "customer": StripeFullApiPathParamValue; "subscription_exposed_id": StripeFullApiPathParamValue };
  "GetCustomersCustomerTaxIds": { "customer": StripeFullApiPathParamValue };
  "GetCustomersCustomerTaxIdsId": { "customer": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "GetCustomersSearch": {};
  "GetDisputes": {};
  "GetDisputesDispute": { "dispute": StripeFullApiPathParamValue };
  "GetEntitlementsActiveEntitlements": {};
  "GetEntitlementsActiveEntitlementsId": { "id": StripeFullApiPathParamValue };
  "GetEntitlementsFeatures": {};
  "GetEntitlementsFeaturesId": { "id": StripeFullApiPathParamValue };
  "GetEvents": {};
  "GetEventsId": { "id": StripeFullApiPathParamValue };
  "GetExchangeRates": {};
  "GetExchangeRatesRateId": { "rate_id": StripeFullApiPathParamValue };
  "GetFileLinks": {};
  "GetFileLinksLink": { "link": StripeFullApiPathParamValue };
  "GetFiles": {};
  "GetFilesFile": { "file": StripeFullApiPathParamValue };
  "GetFinancialConnectionsAccounts": {};
  "GetFinancialConnectionsAccountsAccount": { "account": StripeFullApiPathParamValue };
  "GetFinancialConnectionsAccountsAccountOwners": { "account": StripeFullApiPathParamValue };
  "GetFinancialConnectionsSessionsSession": { "session": StripeFullApiPathParamValue };
  "GetFinancialConnectionsTransactions": {};
  "GetFinancialConnectionsTransactionsTransaction": { "transaction": StripeFullApiPathParamValue };
  "GetForwardingRequests": {};
  "GetForwardingRequestsId": { "id": StripeFullApiPathParamValue };
  "GetIdentityVerificationReports": {};
  "GetIdentityVerificationReportsReport": { "report": StripeFullApiPathParamValue };
  "GetIdentityVerificationSessions": {};
  "GetIdentityVerificationSessionsSession": { "session": StripeFullApiPathParamValue };
  "GetInvoiceitems": {};
  "GetInvoiceitemsInvoiceitem": { "invoiceitem": StripeFullApiPathParamValue };
  "GetInvoicePayments": {};
  "GetInvoicePaymentsInvoicePayment": { "invoice_payment": StripeFullApiPathParamValue };
  "GetInvoiceRenderingTemplates": {};
  "GetInvoiceRenderingTemplatesTemplate": { "template": StripeFullApiPathParamValue };
  "GetInvoices": {};
  "GetInvoicesInvoice": { "invoice": StripeFullApiPathParamValue };
  "GetInvoicesInvoiceLines": { "invoice": StripeFullApiPathParamValue };
  "GetInvoicesSearch": {};
  "GetIssuingAuthorizations": {};
  "GetIssuingAuthorizationsAuthorization": { "authorization": StripeFullApiPathParamValue };
  "GetIssuingCardholders": {};
  "GetIssuingCardholdersCardholder": { "cardholder": StripeFullApiPathParamValue };
  "GetIssuingCards": {};
  "GetIssuingCardsCard": { "card": StripeFullApiPathParamValue };
  "GetIssuingDisputes": {};
}

export interface StripeFullApiV102OperationRequestMap {
  "GetClimateOrdersOrder": StripeFullApiOperationInput<"GetClimateOrdersOrder">;
  "GetClimateProducts": StripeFullApiOperationInput<"GetClimateProducts">;
  "GetClimateProductsProduct": StripeFullApiOperationInput<"GetClimateProductsProduct">;
  "GetClimateSuppliers": StripeFullApiOperationInput<"GetClimateSuppliers">;
  "GetClimateSuppliersSupplier": StripeFullApiOperationInput<"GetClimateSuppliersSupplier">;
  "GetConfirmationTokensConfirmationToken": StripeFullApiOperationInput<"GetConfirmationTokensConfirmationToken">;
  "GetCountrySpecs": StripeFullApiOperationInput<"GetCountrySpecs">;
  "GetCountrySpecsCountry": StripeFullApiOperationInput<"GetCountrySpecsCountry">;
  "GetCoupons": StripeFullApiOperationInput<"GetCoupons">;
  "GetCouponsCoupon": StripeFullApiOperationInput<"GetCouponsCoupon">;
  "GetCreditNotes": StripeFullApiOperationInput<"GetCreditNotes">;
  "GetCreditNotesCreditNoteLines": StripeFullApiOperationInput<"GetCreditNotesCreditNoteLines">;
  "GetCreditNotesId": StripeFullApiOperationInput<"GetCreditNotesId">;
  "GetCreditNotesPreview": StripeFullApiOperationInput<"GetCreditNotesPreview">;
  "GetCreditNotesPreviewLines": StripeFullApiOperationInput<"GetCreditNotesPreviewLines">;
  "GetCustomers": StripeFullApiOperationInput<"GetCustomers">;
  "GetCustomersCustomer": StripeFullApiOperationInput<"GetCustomersCustomer">;
  "GetCustomersCustomerBalanceTransactions": StripeFullApiOperationInput<"GetCustomersCustomerBalanceTransactions">;
  "GetCustomersCustomerBalanceTransactionsTransaction": StripeFullApiOperationInput<"GetCustomersCustomerBalanceTransactionsTransaction">;
  "GetCustomersCustomerBankAccounts": StripeFullApiOperationInput<"GetCustomersCustomerBankAccounts">;
  "GetCustomersCustomerBankAccountsId": StripeFullApiOperationInput<"GetCustomersCustomerBankAccountsId">;
  "GetCustomersCustomerCards": StripeFullApiOperationInput<"GetCustomersCustomerCards">;
  "GetCustomersCustomerCardsId": StripeFullApiOperationInput<"GetCustomersCustomerCardsId">;
  "GetCustomersCustomerCashBalance": StripeFullApiOperationInput<"GetCustomersCustomerCashBalance">;
  "GetCustomersCustomerCashBalanceTransactions": StripeFullApiOperationInput<"GetCustomersCustomerCashBalanceTransactions">;
  "GetCustomersCustomerCashBalanceTransactionsTransaction": StripeFullApiOperationInput<"GetCustomersCustomerCashBalanceTransactionsTransaction">;
  "GetCustomersCustomerDiscount": StripeFullApiOperationInput<"GetCustomersCustomerDiscount">;
  "GetCustomersCustomerPaymentMethods": StripeFullApiOperationInput<"GetCustomersCustomerPaymentMethods">;
  "GetCustomersCustomerPaymentMethodsPaymentMethod": StripeFullApiOperationInput<"GetCustomersCustomerPaymentMethodsPaymentMethod">;
  "GetCustomersCustomerSources": StripeFullApiOperationInput<"GetCustomersCustomerSources">;
  "GetCustomersCustomerSourcesId": StripeFullApiOperationInput<"GetCustomersCustomerSourcesId">;
  "GetCustomersCustomerSubscriptions": StripeFullApiOperationInput<"GetCustomersCustomerSubscriptions">;
  "GetCustomersCustomerSubscriptionsSubscriptionExposedId": StripeFullApiOperationInput<"GetCustomersCustomerSubscriptionsSubscriptionExposedId">;
  "GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount": StripeFullApiOperationInput<"GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount">;
  "GetCustomersCustomerTaxIds": StripeFullApiOperationInput<"GetCustomersCustomerTaxIds">;
  "GetCustomersCustomerTaxIdsId": StripeFullApiOperationInput<"GetCustomersCustomerTaxIdsId">;
  "GetCustomersSearch": StripeFullApiOperationInput<"GetCustomersSearch">;
  "GetDisputes": StripeFullApiOperationInput<"GetDisputes">;
  "GetDisputesDispute": StripeFullApiOperationInput<"GetDisputesDispute">;
  "GetEntitlementsActiveEntitlements": StripeFullApiOperationInput<"GetEntitlementsActiveEntitlements">;
  "GetEntitlementsActiveEntitlementsId": StripeFullApiOperationInput<"GetEntitlementsActiveEntitlementsId">;
  "GetEntitlementsFeatures": StripeFullApiOperationInput<"GetEntitlementsFeatures">;
  "GetEntitlementsFeaturesId": StripeFullApiOperationInput<"GetEntitlementsFeaturesId">;
  "GetEvents": StripeFullApiOperationInput<"GetEvents">;
  "GetEventsId": StripeFullApiOperationInput<"GetEventsId">;
  "GetExchangeRates": StripeFullApiOperationInput<"GetExchangeRates">;
  "GetExchangeRatesRateId": StripeFullApiOperationInput<"GetExchangeRatesRateId">;
  "GetFileLinks": StripeFullApiOperationInput<"GetFileLinks">;
  "GetFileLinksLink": StripeFullApiOperationInput<"GetFileLinksLink">;
  "GetFiles": StripeFullApiOperationInput<"GetFiles">;
  "GetFilesFile": StripeFullApiOperationInput<"GetFilesFile">;
  "GetFinancialConnectionsAccounts": StripeFullApiOperationInput<"GetFinancialConnectionsAccounts">;
  "GetFinancialConnectionsAccountsAccount": StripeFullApiOperationInput<"GetFinancialConnectionsAccountsAccount">;
  "GetFinancialConnectionsAccountsAccountOwners": StripeFullApiOperationInput<"GetFinancialConnectionsAccountsAccountOwners">;
  "GetFinancialConnectionsSessionsSession": StripeFullApiOperationInput<"GetFinancialConnectionsSessionsSession">;
  "GetFinancialConnectionsTransactions": StripeFullApiOperationInput<"GetFinancialConnectionsTransactions">;
  "GetFinancialConnectionsTransactionsTransaction": StripeFullApiOperationInput<"GetFinancialConnectionsTransactionsTransaction">;
  "GetForwardingRequests": StripeFullApiOperationInput<"GetForwardingRequests">;
  "GetForwardingRequestsId": StripeFullApiOperationInput<"GetForwardingRequestsId">;
  "GetIdentityVerificationReports": StripeFullApiOperationInput<"GetIdentityVerificationReports">;
  "GetIdentityVerificationReportsReport": StripeFullApiOperationInput<"GetIdentityVerificationReportsReport">;
  "GetIdentityVerificationSessions": StripeFullApiOperationInput<"GetIdentityVerificationSessions">;
  "GetIdentityVerificationSessionsSession": StripeFullApiOperationInput<"GetIdentityVerificationSessionsSession">;
  "GetInvoiceitems": StripeFullApiOperationInput<"GetInvoiceitems">;
  "GetInvoiceitemsInvoiceitem": StripeFullApiOperationInput<"GetInvoiceitemsInvoiceitem">;
  "GetInvoicePayments": StripeFullApiOperationInput<"GetInvoicePayments">;
  "GetInvoicePaymentsInvoicePayment": StripeFullApiOperationInput<"GetInvoicePaymentsInvoicePayment">;
  "GetInvoiceRenderingTemplates": StripeFullApiOperationInput<"GetInvoiceRenderingTemplates">;
  "GetInvoiceRenderingTemplatesTemplate": StripeFullApiOperationInput<"GetInvoiceRenderingTemplatesTemplate">;
  "GetInvoices": StripeFullApiOperationInput<"GetInvoices">;
  "GetInvoicesInvoice": StripeFullApiOperationInput<"GetInvoicesInvoice">;
  "GetInvoicesInvoiceLines": StripeFullApiOperationInput<"GetInvoicesInvoiceLines">;
  "GetInvoicesSearch": StripeFullApiOperationInput<"GetInvoicesSearch">;
  "GetIssuingAuthorizations": StripeFullApiOperationInput<"GetIssuingAuthorizations">;
  "GetIssuingAuthorizationsAuthorization": StripeFullApiOperationInput<"GetIssuingAuthorizationsAuthorization">;
  "GetIssuingCardholders": StripeFullApiOperationInput<"GetIssuingCardholders">;
  "GetIssuingCardholdersCardholder": StripeFullApiOperationInput<"GetIssuingCardholdersCardholder">;
  "GetIssuingCards": StripeFullApiOperationInput<"GetIssuingCards">;
  "GetIssuingCardsCard": StripeFullApiOperationInput<"GetIssuingCardsCard">;
  "GetIssuingDisputes": StripeFullApiOperationInput<"GetIssuingDisputes">;
}

export interface StripeFullApiV102GeneratedClient {
  GetClimateOrdersOrder(...args: StripeFullApiOperationArgs<"GetClimateOrdersOrder">): Promise<StripeFullApiOperationResponseMap["GetClimateOrdersOrder"]>;
  GetClimateProducts(...args: StripeFullApiOperationArgs<"GetClimateProducts">): Promise<StripeFullApiOperationResponseMap["GetClimateProducts"]>;
  GetClimateProductsProduct(...args: StripeFullApiOperationArgs<"GetClimateProductsProduct">): Promise<StripeFullApiOperationResponseMap["GetClimateProductsProduct"]>;
  GetClimateSuppliers(...args: StripeFullApiOperationArgs<"GetClimateSuppliers">): Promise<StripeFullApiOperationResponseMap["GetClimateSuppliers"]>;
  GetClimateSuppliersSupplier(...args: StripeFullApiOperationArgs<"GetClimateSuppliersSupplier">): Promise<StripeFullApiOperationResponseMap["GetClimateSuppliersSupplier"]>;
  GetConfirmationTokensConfirmationToken(...args: StripeFullApiOperationArgs<"GetConfirmationTokensConfirmationToken">): Promise<StripeFullApiOperationResponseMap["GetConfirmationTokensConfirmationToken"]>;
  GetCountrySpecs(...args: StripeFullApiOperationArgs<"GetCountrySpecs">): Promise<StripeFullApiOperationResponseMap["GetCountrySpecs"]>;
  GetCountrySpecsCountry(...args: StripeFullApiOperationArgs<"GetCountrySpecsCountry">): Promise<StripeFullApiOperationResponseMap["GetCountrySpecsCountry"]>;
  GetCoupons(...args: StripeFullApiOperationArgs<"GetCoupons">): Promise<StripeFullApiOperationResponseMap["GetCoupons"]>;
  GetCouponsCoupon(...args: StripeFullApiOperationArgs<"GetCouponsCoupon">): Promise<StripeFullApiOperationResponseMap["GetCouponsCoupon"]>;
  GetCreditNotes(...args: StripeFullApiOperationArgs<"GetCreditNotes">): Promise<StripeFullApiOperationResponseMap["GetCreditNotes"]>;
  GetCreditNotesCreditNoteLines(...args: StripeFullApiOperationArgs<"GetCreditNotesCreditNoteLines">): Promise<StripeFullApiOperationResponseMap["GetCreditNotesCreditNoteLines"]>;
  GetCreditNotesId(...args: StripeFullApiOperationArgs<"GetCreditNotesId">): Promise<StripeFullApiOperationResponseMap["GetCreditNotesId"]>;
  GetCreditNotesPreview(...args: StripeFullApiOperationArgs<"GetCreditNotesPreview">): Promise<StripeFullApiOperationResponseMap["GetCreditNotesPreview"]>;
  GetCreditNotesPreviewLines(...args: StripeFullApiOperationArgs<"GetCreditNotesPreviewLines">): Promise<StripeFullApiOperationResponseMap["GetCreditNotesPreviewLines"]>;
  GetCustomers(...args: StripeFullApiOperationArgs<"GetCustomers">): Promise<StripeFullApiOperationResponseMap["GetCustomers"]>;
  GetCustomersCustomer(...args: StripeFullApiOperationArgs<"GetCustomersCustomer">): Promise<StripeFullApiOperationResponseMap["GetCustomersCustomer"]>;
  GetCustomersCustomerBalanceTransactions(...args: StripeFullApiOperationArgs<"GetCustomersCustomerBalanceTransactions">): Promise<StripeFullApiOperationResponseMap["GetCustomersCustomerBalanceTransactions"]>;
  GetCustomersCustomerBalanceTransactionsTransaction(...args: StripeFullApiOperationArgs<"GetCustomersCustomerBalanceTransactionsTransaction">): Promise<StripeFullApiOperationResponseMap["GetCustomersCustomerBalanceTransactionsTransaction"]>;
  GetCustomersCustomerBankAccounts(...args: StripeFullApiOperationArgs<"GetCustomersCustomerBankAccounts">): Promise<StripeFullApiOperationResponseMap["GetCustomersCustomerBankAccounts"]>;
  GetCustomersCustomerBankAccountsId(...args: StripeFullApiOperationArgs<"GetCustomersCustomerBankAccountsId">): Promise<StripeFullApiOperationResponseMap["GetCustomersCustomerBankAccountsId"]>;
  GetCustomersCustomerCards(...args: StripeFullApiOperationArgs<"GetCustomersCustomerCards">): Promise<StripeFullApiOperationResponseMap["GetCustomersCustomerCards"]>;
  GetCustomersCustomerCardsId(...args: StripeFullApiOperationArgs<"GetCustomersCustomerCardsId">): Promise<StripeFullApiOperationResponseMap["GetCustomersCustomerCardsId"]>;
  GetCustomersCustomerCashBalance(...args: StripeFullApiOperationArgs<"GetCustomersCustomerCashBalance">): Promise<StripeFullApiOperationResponseMap["GetCustomersCustomerCashBalance"]>;
  GetCustomersCustomerCashBalanceTransactions(...args: StripeFullApiOperationArgs<"GetCustomersCustomerCashBalanceTransactions">): Promise<StripeFullApiOperationResponseMap["GetCustomersCustomerCashBalanceTransactions"]>;
  GetCustomersCustomerCashBalanceTransactionsTransaction(...args: StripeFullApiOperationArgs<"GetCustomersCustomerCashBalanceTransactionsTransaction">): Promise<StripeFullApiOperationResponseMap["GetCustomersCustomerCashBalanceTransactionsTransaction"]>;
  GetCustomersCustomerDiscount(...args: StripeFullApiOperationArgs<"GetCustomersCustomerDiscount">): Promise<StripeFullApiOperationResponseMap["GetCustomersCustomerDiscount"]>;
  GetCustomersCustomerPaymentMethods(...args: StripeFullApiOperationArgs<"GetCustomersCustomerPaymentMethods">): Promise<StripeFullApiOperationResponseMap["GetCustomersCustomerPaymentMethods"]>;
  GetCustomersCustomerPaymentMethodsPaymentMethod(...args: StripeFullApiOperationArgs<"GetCustomersCustomerPaymentMethodsPaymentMethod">): Promise<StripeFullApiOperationResponseMap["GetCustomersCustomerPaymentMethodsPaymentMethod"]>;
  GetCustomersCustomerSources(...args: StripeFullApiOperationArgs<"GetCustomersCustomerSources">): Promise<StripeFullApiOperationResponseMap["GetCustomersCustomerSources"]>;
  GetCustomersCustomerSourcesId(...args: StripeFullApiOperationArgs<"GetCustomersCustomerSourcesId">): Promise<StripeFullApiOperationResponseMap["GetCustomersCustomerSourcesId"]>;
  GetCustomersCustomerSubscriptions(...args: StripeFullApiOperationArgs<"GetCustomersCustomerSubscriptions">): Promise<StripeFullApiOperationResponseMap["GetCustomersCustomerSubscriptions"]>;
  GetCustomersCustomerSubscriptionsSubscriptionExposedId(...args: StripeFullApiOperationArgs<"GetCustomersCustomerSubscriptionsSubscriptionExposedId">): Promise<StripeFullApiOperationResponseMap["GetCustomersCustomerSubscriptionsSubscriptionExposedId"]>;
  GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount(...args: StripeFullApiOperationArgs<"GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount">): Promise<StripeFullApiOperationResponseMap["GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount"]>;
  GetCustomersCustomerTaxIds(...args: StripeFullApiOperationArgs<"GetCustomersCustomerTaxIds">): Promise<StripeFullApiOperationResponseMap["GetCustomersCustomerTaxIds"]>;
  GetCustomersCustomerTaxIdsId(...args: StripeFullApiOperationArgs<"GetCustomersCustomerTaxIdsId">): Promise<StripeFullApiOperationResponseMap["GetCustomersCustomerTaxIdsId"]>;
  GetCustomersSearch(...args: StripeFullApiOperationArgs<"GetCustomersSearch">): Promise<StripeFullApiOperationResponseMap["GetCustomersSearch"]>;
  GetDisputes(...args: StripeFullApiOperationArgs<"GetDisputes">): Promise<StripeFullApiOperationResponseMap["GetDisputes"]>;
  GetDisputesDispute(...args: StripeFullApiOperationArgs<"GetDisputesDispute">): Promise<StripeFullApiOperationResponseMap["GetDisputesDispute"]>;
  GetEntitlementsActiveEntitlements(...args: StripeFullApiOperationArgs<"GetEntitlementsActiveEntitlements">): Promise<StripeFullApiOperationResponseMap["GetEntitlementsActiveEntitlements"]>;
  GetEntitlementsActiveEntitlementsId(...args: StripeFullApiOperationArgs<"GetEntitlementsActiveEntitlementsId">): Promise<StripeFullApiOperationResponseMap["GetEntitlementsActiveEntitlementsId"]>;
  GetEntitlementsFeatures(...args: StripeFullApiOperationArgs<"GetEntitlementsFeatures">): Promise<StripeFullApiOperationResponseMap["GetEntitlementsFeatures"]>;
  GetEntitlementsFeaturesId(...args: StripeFullApiOperationArgs<"GetEntitlementsFeaturesId">): Promise<StripeFullApiOperationResponseMap["GetEntitlementsFeaturesId"]>;
  GetEvents(...args: StripeFullApiOperationArgs<"GetEvents">): Promise<StripeFullApiOperationResponseMap["GetEvents"]>;
  GetEventsId(...args: StripeFullApiOperationArgs<"GetEventsId">): Promise<StripeFullApiOperationResponseMap["GetEventsId"]>;
  GetExchangeRates(...args: StripeFullApiOperationArgs<"GetExchangeRates">): Promise<StripeFullApiOperationResponseMap["GetExchangeRates"]>;
  GetExchangeRatesRateId(...args: StripeFullApiOperationArgs<"GetExchangeRatesRateId">): Promise<StripeFullApiOperationResponseMap["GetExchangeRatesRateId"]>;
  GetFileLinks(...args: StripeFullApiOperationArgs<"GetFileLinks">): Promise<StripeFullApiOperationResponseMap["GetFileLinks"]>;
  GetFileLinksLink(...args: StripeFullApiOperationArgs<"GetFileLinksLink">): Promise<StripeFullApiOperationResponseMap["GetFileLinksLink"]>;
  GetFiles(...args: StripeFullApiOperationArgs<"GetFiles">): Promise<StripeFullApiOperationResponseMap["GetFiles"]>;
  GetFilesFile(...args: StripeFullApiOperationArgs<"GetFilesFile">): Promise<StripeFullApiOperationResponseMap["GetFilesFile"]>;
  GetFinancialConnectionsAccounts(...args: StripeFullApiOperationArgs<"GetFinancialConnectionsAccounts">): Promise<StripeFullApiOperationResponseMap["GetFinancialConnectionsAccounts"]>;
  GetFinancialConnectionsAccountsAccount(...args: StripeFullApiOperationArgs<"GetFinancialConnectionsAccountsAccount">): Promise<StripeFullApiOperationResponseMap["GetFinancialConnectionsAccountsAccount"]>;
  GetFinancialConnectionsAccountsAccountOwners(...args: StripeFullApiOperationArgs<"GetFinancialConnectionsAccountsAccountOwners">): Promise<StripeFullApiOperationResponseMap["GetFinancialConnectionsAccountsAccountOwners"]>;
  GetFinancialConnectionsSessionsSession(...args: StripeFullApiOperationArgs<"GetFinancialConnectionsSessionsSession">): Promise<StripeFullApiOperationResponseMap["GetFinancialConnectionsSessionsSession"]>;
  GetFinancialConnectionsTransactions(...args: StripeFullApiOperationArgs<"GetFinancialConnectionsTransactions">): Promise<StripeFullApiOperationResponseMap["GetFinancialConnectionsTransactions"]>;
  GetFinancialConnectionsTransactionsTransaction(...args: StripeFullApiOperationArgs<"GetFinancialConnectionsTransactionsTransaction">): Promise<StripeFullApiOperationResponseMap["GetFinancialConnectionsTransactionsTransaction"]>;
  GetForwardingRequests(...args: StripeFullApiOperationArgs<"GetForwardingRequests">): Promise<StripeFullApiOperationResponseMap["GetForwardingRequests"]>;
  GetForwardingRequestsId(...args: StripeFullApiOperationArgs<"GetForwardingRequestsId">): Promise<StripeFullApiOperationResponseMap["GetForwardingRequestsId"]>;
  GetIdentityVerificationReports(...args: StripeFullApiOperationArgs<"GetIdentityVerificationReports">): Promise<StripeFullApiOperationResponseMap["GetIdentityVerificationReports"]>;
  GetIdentityVerificationReportsReport(...args: StripeFullApiOperationArgs<"GetIdentityVerificationReportsReport">): Promise<StripeFullApiOperationResponseMap["GetIdentityVerificationReportsReport"]>;
  GetIdentityVerificationSessions(...args: StripeFullApiOperationArgs<"GetIdentityVerificationSessions">): Promise<StripeFullApiOperationResponseMap["GetIdentityVerificationSessions"]>;
  GetIdentityVerificationSessionsSession(...args: StripeFullApiOperationArgs<"GetIdentityVerificationSessionsSession">): Promise<StripeFullApiOperationResponseMap["GetIdentityVerificationSessionsSession"]>;
  GetInvoiceitems(...args: StripeFullApiOperationArgs<"GetInvoiceitems">): Promise<StripeFullApiOperationResponseMap["GetInvoiceitems"]>;
  GetInvoiceitemsInvoiceitem(...args: StripeFullApiOperationArgs<"GetInvoiceitemsInvoiceitem">): Promise<StripeFullApiOperationResponseMap["GetInvoiceitemsInvoiceitem"]>;
  GetInvoicePayments(...args: StripeFullApiOperationArgs<"GetInvoicePayments">): Promise<StripeFullApiOperationResponseMap["GetInvoicePayments"]>;
  GetInvoicePaymentsInvoicePayment(...args: StripeFullApiOperationArgs<"GetInvoicePaymentsInvoicePayment">): Promise<StripeFullApiOperationResponseMap["GetInvoicePaymentsInvoicePayment"]>;
  GetInvoiceRenderingTemplates(...args: StripeFullApiOperationArgs<"GetInvoiceRenderingTemplates">): Promise<StripeFullApiOperationResponseMap["GetInvoiceRenderingTemplates"]>;
  GetInvoiceRenderingTemplatesTemplate(...args: StripeFullApiOperationArgs<"GetInvoiceRenderingTemplatesTemplate">): Promise<StripeFullApiOperationResponseMap["GetInvoiceRenderingTemplatesTemplate"]>;
  GetInvoices(...args: StripeFullApiOperationArgs<"GetInvoices">): Promise<StripeFullApiOperationResponseMap["GetInvoices"]>;
  GetInvoicesInvoice(...args: StripeFullApiOperationArgs<"GetInvoicesInvoice">): Promise<StripeFullApiOperationResponseMap["GetInvoicesInvoice"]>;
  GetInvoicesInvoiceLines(...args: StripeFullApiOperationArgs<"GetInvoicesInvoiceLines">): Promise<StripeFullApiOperationResponseMap["GetInvoicesInvoiceLines"]>;
  GetInvoicesSearch(...args: StripeFullApiOperationArgs<"GetInvoicesSearch">): Promise<StripeFullApiOperationResponseMap["GetInvoicesSearch"]>;
  GetIssuingAuthorizations(...args: StripeFullApiOperationArgs<"GetIssuingAuthorizations">): Promise<StripeFullApiOperationResponseMap["GetIssuingAuthorizations"]>;
  GetIssuingAuthorizationsAuthorization(...args: StripeFullApiOperationArgs<"GetIssuingAuthorizationsAuthorization">): Promise<StripeFullApiOperationResponseMap["GetIssuingAuthorizationsAuthorization"]>;
  GetIssuingCardholders(...args: StripeFullApiOperationArgs<"GetIssuingCardholders">): Promise<StripeFullApiOperationResponseMap["GetIssuingCardholders"]>;
  GetIssuingCardholdersCardholder(...args: StripeFullApiOperationArgs<"GetIssuingCardholdersCardholder">): Promise<StripeFullApiOperationResponseMap["GetIssuingCardholdersCardholder"]>;
  GetIssuingCards(...args: StripeFullApiOperationArgs<"GetIssuingCards">): Promise<StripeFullApiOperationResponseMap["GetIssuingCards"]>;
  GetIssuingCardsCard(...args: StripeFullApiOperationArgs<"GetIssuingCardsCard">): Promise<StripeFullApiOperationResponseMap["GetIssuingCardsCard"]>;
  GetIssuingDisputes(...args: StripeFullApiOperationArgs<"GetIssuingDisputes">): Promise<StripeFullApiOperationResponseMap["GetIssuingDisputes"]>;
}

export const StripeFullApiV102GeneratedFunctionNames = [
  "GetClimateOrdersOrder",
  "GetClimateProducts",
  "GetClimateProductsProduct",
  "GetClimateSuppliers",
  "GetClimateSuppliersSupplier",
  "GetConfirmationTokensConfirmationToken",
  "GetCountrySpecs",
  "GetCountrySpecsCountry",
  "GetCoupons",
  "GetCouponsCoupon",
  "GetCreditNotes",
  "GetCreditNotesCreditNoteLines",
  "GetCreditNotesId",
  "GetCreditNotesPreview",
  "GetCreditNotesPreviewLines",
  "GetCustomers",
  "GetCustomersCustomer",
  "GetCustomersCustomerBalanceTransactions",
  "GetCustomersCustomerBalanceTransactionsTransaction",
  "GetCustomersCustomerBankAccounts",
  "GetCustomersCustomerBankAccountsId",
  "GetCustomersCustomerCards",
  "GetCustomersCustomerCardsId",
  "GetCustomersCustomerCashBalance",
  "GetCustomersCustomerCashBalanceTransactions",
  "GetCustomersCustomerCashBalanceTransactionsTransaction",
  "GetCustomersCustomerDiscount",
  "GetCustomersCustomerPaymentMethods",
  "GetCustomersCustomerPaymentMethodsPaymentMethod",
  "GetCustomersCustomerSources",
  "GetCustomersCustomerSourcesId",
  "GetCustomersCustomerSubscriptions",
  "GetCustomersCustomerSubscriptionsSubscriptionExposedId",
  "GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount",
  "GetCustomersCustomerTaxIds",
  "GetCustomersCustomerTaxIdsId",
  "GetCustomersSearch",
  "GetDisputes",
  "GetDisputesDispute",
  "GetEntitlementsActiveEntitlements",
  "GetEntitlementsActiveEntitlementsId",
  "GetEntitlementsFeatures",
  "GetEntitlementsFeaturesId",
  "GetEvents",
  "GetEventsId",
  "GetExchangeRates",
  "GetExchangeRatesRateId",
  "GetFileLinks",
  "GetFileLinksLink",
  "GetFiles",
  "GetFilesFile",
  "GetFinancialConnectionsAccounts",
  "GetFinancialConnectionsAccountsAccount",
  "GetFinancialConnectionsAccountsAccountOwners",
  "GetFinancialConnectionsSessionsSession",
  "GetFinancialConnectionsTransactions",
  "GetFinancialConnectionsTransactionsTransaction",
  "GetForwardingRequests",
  "GetForwardingRequestsId",
  "GetIdentityVerificationReports",
  "GetIdentityVerificationReportsReport",
  "GetIdentityVerificationSessions",
  "GetIdentityVerificationSessionsSession",
  "GetInvoiceitems",
  "GetInvoiceitemsInvoiceitem",
  "GetInvoicePayments",
  "GetInvoicePaymentsInvoicePayment",
  "GetInvoiceRenderingTemplates",
  "GetInvoiceRenderingTemplatesTemplate",
  "GetInvoices",
  "GetInvoicesInvoice",
  "GetInvoicesInvoiceLines",
  "GetInvoicesSearch",
  "GetIssuingAuthorizations",
  "GetIssuingAuthorizationsAuthorization",
  "GetIssuingCardholders",
  "GetIssuingCardholdersCardholder",
  "GetIssuingCards",
  "GetIssuingCardsCard",
  "GetIssuingDisputes"
] as const satisfies readonly (keyof StripeFullApiV102GeneratedClient)[];

export function createStripeFullApiV102GeneratedClient(
  callOperation: StripeGeneratedOperationCaller,
): StripeFullApiV102GeneratedClient {
  return {
    GetClimateOrdersOrder: (...args) => callOperation("GetClimateOrdersOrder", ...(args as StripeFullApiOperationArgs<"GetClimateOrdersOrder">)),
    GetClimateProducts: (...args) => callOperation("GetClimateProducts", ...(args as StripeFullApiOperationArgs<"GetClimateProducts">)),
    GetClimateProductsProduct: (...args) => callOperation("GetClimateProductsProduct", ...(args as StripeFullApiOperationArgs<"GetClimateProductsProduct">)),
    GetClimateSuppliers: (...args) => callOperation("GetClimateSuppliers", ...(args as StripeFullApiOperationArgs<"GetClimateSuppliers">)),
    GetClimateSuppliersSupplier: (...args) => callOperation("GetClimateSuppliersSupplier", ...(args as StripeFullApiOperationArgs<"GetClimateSuppliersSupplier">)),
    GetConfirmationTokensConfirmationToken: (...args) => callOperation("GetConfirmationTokensConfirmationToken", ...(args as StripeFullApiOperationArgs<"GetConfirmationTokensConfirmationToken">)),
    GetCountrySpecs: (...args) => callOperation("GetCountrySpecs", ...(args as StripeFullApiOperationArgs<"GetCountrySpecs">)),
    GetCountrySpecsCountry: (...args) => callOperation("GetCountrySpecsCountry", ...(args as StripeFullApiOperationArgs<"GetCountrySpecsCountry">)),
    GetCoupons: (...args) => callOperation("GetCoupons", ...(args as StripeFullApiOperationArgs<"GetCoupons">)),
    GetCouponsCoupon: (...args) => callOperation("GetCouponsCoupon", ...(args as StripeFullApiOperationArgs<"GetCouponsCoupon">)),
    GetCreditNotes: (...args) => callOperation("GetCreditNotes", ...(args as StripeFullApiOperationArgs<"GetCreditNotes">)),
    GetCreditNotesCreditNoteLines: (...args) => callOperation("GetCreditNotesCreditNoteLines", ...(args as StripeFullApiOperationArgs<"GetCreditNotesCreditNoteLines">)),
    GetCreditNotesId: (...args) => callOperation("GetCreditNotesId", ...(args as StripeFullApiOperationArgs<"GetCreditNotesId">)),
    GetCreditNotesPreview: (...args) => callOperation("GetCreditNotesPreview", ...(args as StripeFullApiOperationArgs<"GetCreditNotesPreview">)),
    GetCreditNotesPreviewLines: (...args) => callOperation("GetCreditNotesPreviewLines", ...(args as StripeFullApiOperationArgs<"GetCreditNotesPreviewLines">)),
    GetCustomers: (...args) => callOperation("GetCustomers", ...(args as StripeFullApiOperationArgs<"GetCustomers">)),
    GetCustomersCustomer: (...args) => callOperation("GetCustomersCustomer", ...(args as StripeFullApiOperationArgs<"GetCustomersCustomer">)),
    GetCustomersCustomerBalanceTransactions: (...args) => callOperation("GetCustomersCustomerBalanceTransactions", ...(args as StripeFullApiOperationArgs<"GetCustomersCustomerBalanceTransactions">)),
    GetCustomersCustomerBalanceTransactionsTransaction: (...args) => callOperation("GetCustomersCustomerBalanceTransactionsTransaction", ...(args as StripeFullApiOperationArgs<"GetCustomersCustomerBalanceTransactionsTransaction">)),
    GetCustomersCustomerBankAccounts: (...args) => callOperation("GetCustomersCustomerBankAccounts", ...(args as StripeFullApiOperationArgs<"GetCustomersCustomerBankAccounts">)),
    GetCustomersCustomerBankAccountsId: (...args) => callOperation("GetCustomersCustomerBankAccountsId", ...(args as StripeFullApiOperationArgs<"GetCustomersCustomerBankAccountsId">)),
    GetCustomersCustomerCards: (...args) => callOperation("GetCustomersCustomerCards", ...(args as StripeFullApiOperationArgs<"GetCustomersCustomerCards">)),
    GetCustomersCustomerCardsId: (...args) => callOperation("GetCustomersCustomerCardsId", ...(args as StripeFullApiOperationArgs<"GetCustomersCustomerCardsId">)),
    GetCustomersCustomerCashBalance: (...args) => callOperation("GetCustomersCustomerCashBalance", ...(args as StripeFullApiOperationArgs<"GetCustomersCustomerCashBalance">)),
    GetCustomersCustomerCashBalanceTransactions: (...args) => callOperation("GetCustomersCustomerCashBalanceTransactions", ...(args as StripeFullApiOperationArgs<"GetCustomersCustomerCashBalanceTransactions">)),
    GetCustomersCustomerCashBalanceTransactionsTransaction: (...args) => callOperation("GetCustomersCustomerCashBalanceTransactionsTransaction", ...(args as StripeFullApiOperationArgs<"GetCustomersCustomerCashBalanceTransactionsTransaction">)),
    GetCustomersCustomerDiscount: (...args) => callOperation("GetCustomersCustomerDiscount", ...(args as StripeFullApiOperationArgs<"GetCustomersCustomerDiscount">)),
    GetCustomersCustomerPaymentMethods: (...args) => callOperation("GetCustomersCustomerPaymentMethods", ...(args as StripeFullApiOperationArgs<"GetCustomersCustomerPaymentMethods">)),
    GetCustomersCustomerPaymentMethodsPaymentMethod: (...args) => callOperation("GetCustomersCustomerPaymentMethodsPaymentMethod", ...(args as StripeFullApiOperationArgs<"GetCustomersCustomerPaymentMethodsPaymentMethod">)),
    GetCustomersCustomerSources: (...args) => callOperation("GetCustomersCustomerSources", ...(args as StripeFullApiOperationArgs<"GetCustomersCustomerSources">)),
    GetCustomersCustomerSourcesId: (...args) => callOperation("GetCustomersCustomerSourcesId", ...(args as StripeFullApiOperationArgs<"GetCustomersCustomerSourcesId">)),
    GetCustomersCustomerSubscriptions: (...args) => callOperation("GetCustomersCustomerSubscriptions", ...(args as StripeFullApiOperationArgs<"GetCustomersCustomerSubscriptions">)),
    GetCustomersCustomerSubscriptionsSubscriptionExposedId: (...args) => callOperation("GetCustomersCustomerSubscriptionsSubscriptionExposedId", ...(args as StripeFullApiOperationArgs<"GetCustomersCustomerSubscriptionsSubscriptionExposedId">)),
    GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount: (...args) => callOperation("GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount", ...(args as StripeFullApiOperationArgs<"GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount">)),
    GetCustomersCustomerTaxIds: (...args) => callOperation("GetCustomersCustomerTaxIds", ...(args as StripeFullApiOperationArgs<"GetCustomersCustomerTaxIds">)),
    GetCustomersCustomerTaxIdsId: (...args) => callOperation("GetCustomersCustomerTaxIdsId", ...(args as StripeFullApiOperationArgs<"GetCustomersCustomerTaxIdsId">)),
    GetCustomersSearch: (...args) => callOperation("GetCustomersSearch", ...(args as StripeFullApiOperationArgs<"GetCustomersSearch">)),
    GetDisputes: (...args) => callOperation("GetDisputes", ...(args as StripeFullApiOperationArgs<"GetDisputes">)),
    GetDisputesDispute: (...args) => callOperation("GetDisputesDispute", ...(args as StripeFullApiOperationArgs<"GetDisputesDispute">)),
    GetEntitlementsActiveEntitlements: (...args) => callOperation("GetEntitlementsActiveEntitlements", ...(args as StripeFullApiOperationArgs<"GetEntitlementsActiveEntitlements">)),
    GetEntitlementsActiveEntitlementsId: (...args) => callOperation("GetEntitlementsActiveEntitlementsId", ...(args as StripeFullApiOperationArgs<"GetEntitlementsActiveEntitlementsId">)),
    GetEntitlementsFeatures: (...args) => callOperation("GetEntitlementsFeatures", ...(args as StripeFullApiOperationArgs<"GetEntitlementsFeatures">)),
    GetEntitlementsFeaturesId: (...args) => callOperation("GetEntitlementsFeaturesId", ...(args as StripeFullApiOperationArgs<"GetEntitlementsFeaturesId">)),
    GetEvents: (...args) => callOperation("GetEvents", ...(args as StripeFullApiOperationArgs<"GetEvents">)),
    GetEventsId: (...args) => callOperation("GetEventsId", ...(args as StripeFullApiOperationArgs<"GetEventsId">)),
    GetExchangeRates: (...args) => callOperation("GetExchangeRates", ...(args as StripeFullApiOperationArgs<"GetExchangeRates">)),
    GetExchangeRatesRateId: (...args) => callOperation("GetExchangeRatesRateId", ...(args as StripeFullApiOperationArgs<"GetExchangeRatesRateId">)),
    GetFileLinks: (...args) => callOperation("GetFileLinks", ...(args as StripeFullApiOperationArgs<"GetFileLinks">)),
    GetFileLinksLink: (...args) => callOperation("GetFileLinksLink", ...(args as StripeFullApiOperationArgs<"GetFileLinksLink">)),
    GetFiles: (...args) => callOperation("GetFiles", ...(args as StripeFullApiOperationArgs<"GetFiles">)),
    GetFilesFile: (...args) => callOperation("GetFilesFile", ...(args as StripeFullApiOperationArgs<"GetFilesFile">)),
    GetFinancialConnectionsAccounts: (...args) => callOperation("GetFinancialConnectionsAccounts", ...(args as StripeFullApiOperationArgs<"GetFinancialConnectionsAccounts">)),
    GetFinancialConnectionsAccountsAccount: (...args) => callOperation("GetFinancialConnectionsAccountsAccount", ...(args as StripeFullApiOperationArgs<"GetFinancialConnectionsAccountsAccount">)),
    GetFinancialConnectionsAccountsAccountOwners: (...args) => callOperation("GetFinancialConnectionsAccountsAccountOwners", ...(args as StripeFullApiOperationArgs<"GetFinancialConnectionsAccountsAccountOwners">)),
    GetFinancialConnectionsSessionsSession: (...args) => callOperation("GetFinancialConnectionsSessionsSession", ...(args as StripeFullApiOperationArgs<"GetFinancialConnectionsSessionsSession">)),
    GetFinancialConnectionsTransactions: (...args) => callOperation("GetFinancialConnectionsTransactions", ...(args as StripeFullApiOperationArgs<"GetFinancialConnectionsTransactions">)),
    GetFinancialConnectionsTransactionsTransaction: (...args) => callOperation("GetFinancialConnectionsTransactionsTransaction", ...(args as StripeFullApiOperationArgs<"GetFinancialConnectionsTransactionsTransaction">)),
    GetForwardingRequests: (...args) => callOperation("GetForwardingRequests", ...(args as StripeFullApiOperationArgs<"GetForwardingRequests">)),
    GetForwardingRequestsId: (...args) => callOperation("GetForwardingRequestsId", ...(args as StripeFullApiOperationArgs<"GetForwardingRequestsId">)),
    GetIdentityVerificationReports: (...args) => callOperation("GetIdentityVerificationReports", ...(args as StripeFullApiOperationArgs<"GetIdentityVerificationReports">)),
    GetIdentityVerificationReportsReport: (...args) => callOperation("GetIdentityVerificationReportsReport", ...(args as StripeFullApiOperationArgs<"GetIdentityVerificationReportsReport">)),
    GetIdentityVerificationSessions: (...args) => callOperation("GetIdentityVerificationSessions", ...(args as StripeFullApiOperationArgs<"GetIdentityVerificationSessions">)),
    GetIdentityVerificationSessionsSession: (...args) => callOperation("GetIdentityVerificationSessionsSession", ...(args as StripeFullApiOperationArgs<"GetIdentityVerificationSessionsSession">)),
    GetInvoiceitems: (...args) => callOperation("GetInvoiceitems", ...(args as StripeFullApiOperationArgs<"GetInvoiceitems">)),
    GetInvoiceitemsInvoiceitem: (...args) => callOperation("GetInvoiceitemsInvoiceitem", ...(args as StripeFullApiOperationArgs<"GetInvoiceitemsInvoiceitem">)),
    GetInvoicePayments: (...args) => callOperation("GetInvoicePayments", ...(args as StripeFullApiOperationArgs<"GetInvoicePayments">)),
    GetInvoicePaymentsInvoicePayment: (...args) => callOperation("GetInvoicePaymentsInvoicePayment", ...(args as StripeFullApiOperationArgs<"GetInvoicePaymentsInvoicePayment">)),
    GetInvoiceRenderingTemplates: (...args) => callOperation("GetInvoiceRenderingTemplates", ...(args as StripeFullApiOperationArgs<"GetInvoiceRenderingTemplates">)),
    GetInvoiceRenderingTemplatesTemplate: (...args) => callOperation("GetInvoiceRenderingTemplatesTemplate", ...(args as StripeFullApiOperationArgs<"GetInvoiceRenderingTemplatesTemplate">)),
    GetInvoices: (...args) => callOperation("GetInvoices", ...(args as StripeFullApiOperationArgs<"GetInvoices">)),
    GetInvoicesInvoice: (...args) => callOperation("GetInvoicesInvoice", ...(args as StripeFullApiOperationArgs<"GetInvoicesInvoice">)),
    GetInvoicesInvoiceLines: (...args) => callOperation("GetInvoicesInvoiceLines", ...(args as StripeFullApiOperationArgs<"GetInvoicesInvoiceLines">)),
    GetInvoicesSearch: (...args) => callOperation("GetInvoicesSearch", ...(args as StripeFullApiOperationArgs<"GetInvoicesSearch">)),
    GetIssuingAuthorizations: (...args) => callOperation("GetIssuingAuthorizations", ...(args as StripeFullApiOperationArgs<"GetIssuingAuthorizations">)),
    GetIssuingAuthorizationsAuthorization: (...args) => callOperation("GetIssuingAuthorizationsAuthorization", ...(args as StripeFullApiOperationArgs<"GetIssuingAuthorizationsAuthorization">)),
    GetIssuingCardholders: (...args) => callOperation("GetIssuingCardholders", ...(args as StripeFullApiOperationArgs<"GetIssuingCardholders">)),
    GetIssuingCardholdersCardholder: (...args) => callOperation("GetIssuingCardholdersCardholder", ...(args as StripeFullApiOperationArgs<"GetIssuingCardholdersCardholder">)),
    GetIssuingCards: (...args) => callOperation("GetIssuingCards", ...(args as StripeFullApiOperationArgs<"GetIssuingCards">)),
    GetIssuingCardsCard: (...args) => callOperation("GetIssuingCardsCard", ...(args as StripeFullApiOperationArgs<"GetIssuingCardsCard">)),
    GetIssuingDisputes: (...args) => callOperation("GetIssuingDisputes", ...(args as StripeFullApiOperationArgs<"GetIssuingDisputes">)),
  };
}
