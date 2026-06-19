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
export const StripeFullApiV103OperationKeys = [
  "GetIssuingDisputesDispute",
  "GetIssuingPersonalizationDesigns",
  "GetIssuingPersonalizationDesignsPersonalizationDesign",
  "GetIssuingPhysicalBundles",
  "GetIssuingPhysicalBundlesPhysicalBundle",
  "GetIssuingSettlementsSettlement",
  "GetIssuingTokens",
  "GetIssuingTokensToken",
  "GetIssuingTransactions",
  "GetIssuingTransactionsTransaction",
  "GetLinkAccountSessionsSession",
  "GetLinkedAccounts",
  "GetLinkedAccountsAccount",
  "GetLinkedAccountsAccountOwners",
  "GetMandatesMandate",
  "GetPaymentAttemptRecords",
  "GetPaymentAttemptRecordsId",
  "GetPaymentIntents",
  "GetPaymentIntentsIntent",
  "GetPaymentIntentsIntentAmountDetailsLineItems",
  "GetPaymentIntentsSearch",
  "GetPaymentLinks",
  "GetPaymentLinksPaymentLink",
  "GetPaymentLinksPaymentLinkLineItems",
  "GetPaymentMethodConfigurations",
  "GetPaymentMethodConfigurationsConfiguration",
  "GetPaymentMethodDomains",
  "GetPaymentMethodDomainsPaymentMethodDomain",
  "GetPaymentMethods",
  "GetPaymentMethodsPaymentMethod",
  "GetPaymentRecordsId",
  "GetPayouts",
  "GetPayoutsPayout",
  "GetPlans",
  "GetPlansPlan",
  "GetPrices",
  "GetPricesPrice",
  "GetPricesSearch",
  "GetProducts",
  "GetProductsId",
  "GetProductsProductFeatures",
  "GetProductsProductFeaturesId",
  "GetProductsSearch",
  "GetPromotionCodes",
  "GetPromotionCodesPromotionCode",
  "GetQuotes",
  "GetQuotesQuote",
  "GetQuotesQuoteComputedUpfrontLineItems",
  "GetQuotesQuoteLineItems",
  "GetQuotesQuotePdf",
  "GetRadarEarlyFraudWarnings",
  "GetRadarEarlyFraudWarningsEarlyFraudWarning",
  "GetRadarValueListItems",
  "GetRadarValueListItemsItem",
  "GetRadarValueLists",
  "GetRadarValueListsValueList",
  "GetRefunds",
  "GetRefundsRefund",
  "GetReportingReportRuns",
  "GetReportingReportRunsReportRun",
  "GetReportingReportTypes",
  "GetReportingReportTypesReportType",
  "GetReviews",
  "GetReviewsReview",
  "GetSetupAttempts",
  "GetSetupIntents",
  "GetSetupIntentsIntent",
  "GetShippingRates",
  "GetShippingRatesShippingRateToken",
  "GetSigmaScheduledQueryRuns",
  "GetSigmaScheduledQueryRunsScheduledQueryRun",
  "GetSourcesSource",
  "GetSourcesSourceMandateNotificationsMandateNotification",
  "GetSourcesSourceSourceTransactions",
  "GetSourcesSourceSourceTransactionsSourceTransaction",
  "GetSubscriptionItems",
  "GetSubscriptionItemsItem",
  "GetSubscriptions",
  "GetSubscriptionSchedules",
  "GetSubscriptionSchedulesSchedule"
] as const;
export type StripeFullApiV103OperationKey = typeof StripeFullApiV103OperationKeys[number];
// End hardened literal operation keys.

export interface StripeFullApiV103OperationPathParamMap {
  "GetIssuingDisputesDispute": { "dispute": StripeFullApiPathParamValue };
  "GetIssuingPersonalizationDesigns": {};
  "GetIssuingPersonalizationDesignsPersonalizationDesign": { "personalization_design": StripeFullApiPathParamValue };
  "GetIssuingPhysicalBundles": {};
  "GetIssuingPhysicalBundlesPhysicalBundle": { "physical_bundle": StripeFullApiPathParamValue };
  "GetIssuingSettlementsSettlement": { "settlement": StripeFullApiPathParamValue };
  "GetIssuingTokens": {};
  "GetIssuingTokensToken": { "token": StripeFullApiPathParamValue };
  "GetIssuingTransactions": {};
  "GetIssuingTransactionsTransaction": { "transaction": StripeFullApiPathParamValue };
  "GetLinkAccountSessionsSession": { "session": StripeFullApiPathParamValue };
  "GetLinkedAccounts": {};
  "GetLinkedAccountsAccount": { "account": StripeFullApiPathParamValue };
  "GetLinkedAccountsAccountOwners": { "account": StripeFullApiPathParamValue };
  "GetMandatesMandate": { "mandate": StripeFullApiPathParamValue };
  "GetPaymentAttemptRecords": {};
  "GetPaymentAttemptRecordsId": { "id": StripeFullApiPathParamValue };
  "GetPaymentIntents": {};
  "GetPaymentIntentsIntent": { "intent": StripeFullApiPathParamValue };
  "GetPaymentIntentsIntentAmountDetailsLineItems": { "intent": StripeFullApiPathParamValue };
  "GetPaymentIntentsSearch": {};
  "GetPaymentLinks": {};
  "GetPaymentLinksPaymentLink": { "payment_link": StripeFullApiPathParamValue };
  "GetPaymentLinksPaymentLinkLineItems": { "payment_link": StripeFullApiPathParamValue };
  "GetPaymentMethodConfigurations": {};
  "GetPaymentMethodConfigurationsConfiguration": { "configuration": StripeFullApiPathParamValue };
  "GetPaymentMethodDomains": {};
  "GetPaymentMethodDomainsPaymentMethodDomain": { "payment_method_domain": StripeFullApiPathParamValue };
  "GetPaymentMethods": {};
  "GetPaymentMethodsPaymentMethod": { "payment_method": StripeFullApiPathParamValue };
  "GetPaymentRecordsId": { "id": StripeFullApiPathParamValue };
  "GetPayouts": {};
  "GetPayoutsPayout": { "payout": StripeFullApiPathParamValue };
  "GetPlans": {};
  "GetPlansPlan": { "plan": StripeFullApiPathParamValue };
  "GetPrices": {};
  "GetPricesPrice": { "price": StripeFullApiPathParamValue };
  "GetPricesSearch": {};
  "GetProducts": {};
  "GetProductsId": { "id": StripeFullApiPathParamValue };
  "GetProductsProductFeatures": { "product": StripeFullApiPathParamValue };
  "GetProductsProductFeaturesId": { "product": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "GetProductsSearch": {};
  "GetPromotionCodes": {};
  "GetPromotionCodesPromotionCode": { "promotion_code": StripeFullApiPathParamValue };
  "GetQuotes": {};
  "GetQuotesQuote": { "quote": StripeFullApiPathParamValue };
  "GetQuotesQuoteComputedUpfrontLineItems": { "quote": StripeFullApiPathParamValue };
  "GetQuotesQuoteLineItems": { "quote": StripeFullApiPathParamValue };
  "GetQuotesQuotePdf": { "quote": StripeFullApiPathParamValue };
  "GetRadarEarlyFraudWarnings": {};
  "GetRadarEarlyFraudWarningsEarlyFraudWarning": { "early_fraud_warning": StripeFullApiPathParamValue };
  "GetRadarValueListItems": {};
  "GetRadarValueListItemsItem": { "item": StripeFullApiPathParamValue };
  "GetRadarValueLists": {};
  "GetRadarValueListsValueList": { "value_list": StripeFullApiPathParamValue };
  "GetRefunds": {};
  "GetRefundsRefund": { "refund": StripeFullApiPathParamValue };
  "GetReportingReportRuns": {};
  "GetReportingReportRunsReportRun": { "report_run": StripeFullApiPathParamValue };
  "GetReportingReportTypes": {};
  "GetReportingReportTypesReportType": { "report_type": StripeFullApiPathParamValue };
  "GetReviews": {};
  "GetReviewsReview": { "review": StripeFullApiPathParamValue };
  "GetSetupAttempts": {};
  "GetSetupIntents": {};
  "GetSetupIntentsIntent": { "intent": StripeFullApiPathParamValue };
  "GetShippingRates": {};
  "GetShippingRatesShippingRateToken": { "shipping_rate_token": StripeFullApiPathParamValue };
  "GetSigmaScheduledQueryRuns": {};
  "GetSigmaScheduledQueryRunsScheduledQueryRun": { "scheduled_query_run": StripeFullApiPathParamValue };
  "GetSourcesSource": { "source": StripeFullApiPathParamValue };
  "GetSourcesSourceMandateNotificationsMandateNotification": { "source": StripeFullApiPathParamValue; "mandate_notification": StripeFullApiPathParamValue };
  "GetSourcesSourceSourceTransactions": { "source": StripeFullApiPathParamValue };
  "GetSourcesSourceSourceTransactionsSourceTransaction": { "source": StripeFullApiPathParamValue; "source_transaction": StripeFullApiPathParamValue };
  "GetSubscriptionItems": {};
  "GetSubscriptionItemsItem": { "item": StripeFullApiPathParamValue };
  "GetSubscriptions": {};
  "GetSubscriptionSchedules": {};
  "GetSubscriptionSchedulesSchedule": { "schedule": StripeFullApiPathParamValue };
}

export interface StripeFullApiV103OperationRequestMap {
  "GetIssuingDisputesDispute": StripeFullApiOperationInput<"GetIssuingDisputesDispute">;
  "GetIssuingPersonalizationDesigns": StripeFullApiOperationInput<"GetIssuingPersonalizationDesigns">;
  "GetIssuingPersonalizationDesignsPersonalizationDesign": StripeFullApiOperationInput<"GetIssuingPersonalizationDesignsPersonalizationDesign">;
  "GetIssuingPhysicalBundles": StripeFullApiOperationInput<"GetIssuingPhysicalBundles">;
  "GetIssuingPhysicalBundlesPhysicalBundle": StripeFullApiOperationInput<"GetIssuingPhysicalBundlesPhysicalBundle">;
  "GetIssuingSettlementsSettlement": StripeFullApiOperationInput<"GetIssuingSettlementsSettlement">;
  "GetIssuingTokens": StripeFullApiOperationInput<"GetIssuingTokens">;
  "GetIssuingTokensToken": StripeFullApiOperationInput<"GetIssuingTokensToken">;
  "GetIssuingTransactions": StripeFullApiOperationInput<"GetIssuingTransactions">;
  "GetIssuingTransactionsTransaction": StripeFullApiOperationInput<"GetIssuingTransactionsTransaction">;
  "GetLinkAccountSessionsSession": StripeFullApiOperationInput<"GetLinkAccountSessionsSession">;
  "GetLinkedAccounts": StripeFullApiOperationInput<"GetLinkedAccounts">;
  "GetLinkedAccountsAccount": StripeFullApiOperationInput<"GetLinkedAccountsAccount">;
  "GetLinkedAccountsAccountOwners": StripeFullApiOperationInput<"GetLinkedAccountsAccountOwners">;
  "GetMandatesMandate": StripeFullApiOperationInput<"GetMandatesMandate">;
  "GetPaymentAttemptRecords": StripeFullApiOperationInput<"GetPaymentAttemptRecords">;
  "GetPaymentAttemptRecordsId": StripeFullApiOperationInput<"GetPaymentAttemptRecordsId">;
  "GetPaymentIntents": StripeFullApiOperationInput<"GetPaymentIntents">;
  "GetPaymentIntentsIntent": StripeFullApiOperationInput<"GetPaymentIntentsIntent">;
  "GetPaymentIntentsIntentAmountDetailsLineItems": StripeFullApiOperationInput<"GetPaymentIntentsIntentAmountDetailsLineItems">;
  "GetPaymentIntentsSearch": StripeFullApiOperationInput<"GetPaymentIntentsSearch">;
  "GetPaymentLinks": StripeFullApiOperationInput<"GetPaymentLinks">;
  "GetPaymentLinksPaymentLink": StripeFullApiOperationInput<"GetPaymentLinksPaymentLink">;
  "GetPaymentLinksPaymentLinkLineItems": StripeFullApiOperationInput<"GetPaymentLinksPaymentLinkLineItems">;
  "GetPaymentMethodConfigurations": StripeFullApiOperationInput<"GetPaymentMethodConfigurations">;
  "GetPaymentMethodConfigurationsConfiguration": StripeFullApiOperationInput<"GetPaymentMethodConfigurationsConfiguration">;
  "GetPaymentMethodDomains": StripeFullApiOperationInput<"GetPaymentMethodDomains">;
  "GetPaymentMethodDomainsPaymentMethodDomain": StripeFullApiOperationInput<"GetPaymentMethodDomainsPaymentMethodDomain">;
  "GetPaymentMethods": StripeFullApiOperationInput<"GetPaymentMethods">;
  "GetPaymentMethodsPaymentMethod": StripeFullApiOperationInput<"GetPaymentMethodsPaymentMethod">;
  "GetPaymentRecordsId": StripeFullApiOperationInput<"GetPaymentRecordsId">;
  "GetPayouts": StripeFullApiOperationInput<"GetPayouts">;
  "GetPayoutsPayout": StripeFullApiOperationInput<"GetPayoutsPayout">;
  "GetPlans": StripeFullApiOperationInput<"GetPlans">;
  "GetPlansPlan": StripeFullApiOperationInput<"GetPlansPlan">;
  "GetPrices": StripeFullApiOperationInput<"GetPrices">;
  "GetPricesPrice": StripeFullApiOperationInput<"GetPricesPrice">;
  "GetPricesSearch": StripeFullApiOperationInput<"GetPricesSearch">;
  "GetProducts": StripeFullApiOperationInput<"GetProducts">;
  "GetProductsId": StripeFullApiOperationInput<"GetProductsId">;
  "GetProductsProductFeatures": StripeFullApiOperationInput<"GetProductsProductFeatures">;
  "GetProductsProductFeaturesId": StripeFullApiOperationInput<"GetProductsProductFeaturesId">;
  "GetProductsSearch": StripeFullApiOperationInput<"GetProductsSearch">;
  "GetPromotionCodes": StripeFullApiOperationInput<"GetPromotionCodes">;
  "GetPromotionCodesPromotionCode": StripeFullApiOperationInput<"GetPromotionCodesPromotionCode">;
  "GetQuotes": StripeFullApiOperationInput<"GetQuotes">;
  "GetQuotesQuote": StripeFullApiOperationInput<"GetQuotesQuote">;
  "GetQuotesQuoteComputedUpfrontLineItems": StripeFullApiOperationInput<"GetQuotesQuoteComputedUpfrontLineItems">;
  "GetQuotesQuoteLineItems": StripeFullApiOperationInput<"GetQuotesQuoteLineItems">;
  "GetQuotesQuotePdf": StripeFullApiOperationInput<"GetQuotesQuotePdf">;
  "GetRadarEarlyFraudWarnings": StripeFullApiOperationInput<"GetRadarEarlyFraudWarnings">;
  "GetRadarEarlyFraudWarningsEarlyFraudWarning": StripeFullApiOperationInput<"GetRadarEarlyFraudWarningsEarlyFraudWarning">;
  "GetRadarValueListItems": StripeFullApiOperationInput<"GetRadarValueListItems">;
  "GetRadarValueListItemsItem": StripeFullApiOperationInput<"GetRadarValueListItemsItem">;
  "GetRadarValueLists": StripeFullApiOperationInput<"GetRadarValueLists">;
  "GetRadarValueListsValueList": StripeFullApiOperationInput<"GetRadarValueListsValueList">;
  "GetRefunds": StripeFullApiOperationInput<"GetRefunds">;
  "GetRefundsRefund": StripeFullApiOperationInput<"GetRefundsRefund">;
  "GetReportingReportRuns": StripeFullApiOperationInput<"GetReportingReportRuns">;
  "GetReportingReportRunsReportRun": StripeFullApiOperationInput<"GetReportingReportRunsReportRun">;
  "GetReportingReportTypes": StripeFullApiOperationInput<"GetReportingReportTypes">;
  "GetReportingReportTypesReportType": StripeFullApiOperationInput<"GetReportingReportTypesReportType">;
  "GetReviews": StripeFullApiOperationInput<"GetReviews">;
  "GetReviewsReview": StripeFullApiOperationInput<"GetReviewsReview">;
  "GetSetupAttempts": StripeFullApiOperationInput<"GetSetupAttempts">;
  "GetSetupIntents": StripeFullApiOperationInput<"GetSetupIntents">;
  "GetSetupIntentsIntent": StripeFullApiOperationInput<"GetSetupIntentsIntent">;
  "GetShippingRates": StripeFullApiOperationInput<"GetShippingRates">;
  "GetShippingRatesShippingRateToken": StripeFullApiOperationInput<"GetShippingRatesShippingRateToken">;
  "GetSigmaScheduledQueryRuns": StripeFullApiOperationInput<"GetSigmaScheduledQueryRuns">;
  "GetSigmaScheduledQueryRunsScheduledQueryRun": StripeFullApiOperationInput<"GetSigmaScheduledQueryRunsScheduledQueryRun">;
  "GetSourcesSource": StripeFullApiOperationInput<"GetSourcesSource">;
  "GetSourcesSourceMandateNotificationsMandateNotification": StripeFullApiOperationInput<"GetSourcesSourceMandateNotificationsMandateNotification">;
  "GetSourcesSourceSourceTransactions": StripeFullApiOperationInput<"GetSourcesSourceSourceTransactions">;
  "GetSourcesSourceSourceTransactionsSourceTransaction": StripeFullApiOperationInput<"GetSourcesSourceSourceTransactionsSourceTransaction">;
  "GetSubscriptionItems": StripeFullApiOperationInput<"GetSubscriptionItems">;
  "GetSubscriptionItemsItem": StripeFullApiOperationInput<"GetSubscriptionItemsItem">;
  "GetSubscriptions": StripeFullApiOperationInput<"GetSubscriptions">;
  "GetSubscriptionSchedules": StripeFullApiOperationInput<"GetSubscriptionSchedules">;
  "GetSubscriptionSchedulesSchedule": StripeFullApiOperationInput<"GetSubscriptionSchedulesSchedule">;
}

export interface StripeFullApiV103GeneratedClient {
  GetIssuingDisputesDispute(...args: StripeFullApiOperationArgs<"GetIssuingDisputesDispute">): Promise<StripeFullApiOperationResponseMap["GetIssuingDisputesDispute"]>;
  GetIssuingPersonalizationDesigns(...args: StripeFullApiOperationArgs<"GetIssuingPersonalizationDesigns">): Promise<StripeFullApiOperationResponseMap["GetIssuingPersonalizationDesigns"]>;
  GetIssuingPersonalizationDesignsPersonalizationDesign(...args: StripeFullApiOperationArgs<"GetIssuingPersonalizationDesignsPersonalizationDesign">): Promise<StripeFullApiOperationResponseMap["GetIssuingPersonalizationDesignsPersonalizationDesign"]>;
  GetIssuingPhysicalBundles(...args: StripeFullApiOperationArgs<"GetIssuingPhysicalBundles">): Promise<StripeFullApiOperationResponseMap["GetIssuingPhysicalBundles"]>;
  GetIssuingPhysicalBundlesPhysicalBundle(...args: StripeFullApiOperationArgs<"GetIssuingPhysicalBundlesPhysicalBundle">): Promise<StripeFullApiOperationResponseMap["GetIssuingPhysicalBundlesPhysicalBundle"]>;
  GetIssuingSettlementsSettlement(...args: StripeFullApiOperationArgs<"GetIssuingSettlementsSettlement">): Promise<StripeFullApiOperationResponseMap["GetIssuingSettlementsSettlement"]>;
  GetIssuingTokens(...args: StripeFullApiOperationArgs<"GetIssuingTokens">): Promise<StripeFullApiOperationResponseMap["GetIssuingTokens"]>;
  GetIssuingTokensToken(...args: StripeFullApiOperationArgs<"GetIssuingTokensToken">): Promise<StripeFullApiOperationResponseMap["GetIssuingTokensToken"]>;
  GetIssuingTransactions(...args: StripeFullApiOperationArgs<"GetIssuingTransactions">): Promise<StripeFullApiOperationResponseMap["GetIssuingTransactions"]>;
  GetIssuingTransactionsTransaction(...args: StripeFullApiOperationArgs<"GetIssuingTransactionsTransaction">): Promise<StripeFullApiOperationResponseMap["GetIssuingTransactionsTransaction"]>;
  GetLinkAccountSessionsSession(...args: StripeFullApiOperationArgs<"GetLinkAccountSessionsSession">): Promise<StripeFullApiOperationResponseMap["GetLinkAccountSessionsSession"]>;
  GetLinkedAccounts(...args: StripeFullApiOperationArgs<"GetLinkedAccounts">): Promise<StripeFullApiOperationResponseMap["GetLinkedAccounts"]>;
  GetLinkedAccountsAccount(...args: StripeFullApiOperationArgs<"GetLinkedAccountsAccount">): Promise<StripeFullApiOperationResponseMap["GetLinkedAccountsAccount"]>;
  GetLinkedAccountsAccountOwners(...args: StripeFullApiOperationArgs<"GetLinkedAccountsAccountOwners">): Promise<StripeFullApiOperationResponseMap["GetLinkedAccountsAccountOwners"]>;
  GetMandatesMandate(...args: StripeFullApiOperationArgs<"GetMandatesMandate">): Promise<StripeFullApiOperationResponseMap["GetMandatesMandate"]>;
  GetPaymentAttemptRecords(...args: StripeFullApiOperationArgs<"GetPaymentAttemptRecords">): Promise<StripeFullApiOperationResponseMap["GetPaymentAttemptRecords"]>;
  GetPaymentAttemptRecordsId(...args: StripeFullApiOperationArgs<"GetPaymentAttemptRecordsId">): Promise<StripeFullApiOperationResponseMap["GetPaymentAttemptRecordsId"]>;
  GetPaymentIntents(...args: StripeFullApiOperationArgs<"GetPaymentIntents">): Promise<StripeFullApiOperationResponseMap["GetPaymentIntents"]>;
  GetPaymentIntentsIntent(...args: StripeFullApiOperationArgs<"GetPaymentIntentsIntent">): Promise<StripeFullApiOperationResponseMap["GetPaymentIntentsIntent"]>;
  GetPaymentIntentsIntentAmountDetailsLineItems(...args: StripeFullApiOperationArgs<"GetPaymentIntentsIntentAmountDetailsLineItems">): Promise<StripeFullApiOperationResponseMap["GetPaymentIntentsIntentAmountDetailsLineItems"]>;
  GetPaymentIntentsSearch(...args: StripeFullApiOperationArgs<"GetPaymentIntentsSearch">): Promise<StripeFullApiOperationResponseMap["GetPaymentIntentsSearch"]>;
  GetPaymentLinks(...args: StripeFullApiOperationArgs<"GetPaymentLinks">): Promise<StripeFullApiOperationResponseMap["GetPaymentLinks"]>;
  GetPaymentLinksPaymentLink(...args: StripeFullApiOperationArgs<"GetPaymentLinksPaymentLink">): Promise<StripeFullApiOperationResponseMap["GetPaymentLinksPaymentLink"]>;
  GetPaymentLinksPaymentLinkLineItems(...args: StripeFullApiOperationArgs<"GetPaymentLinksPaymentLinkLineItems">): Promise<StripeFullApiOperationResponseMap["GetPaymentLinksPaymentLinkLineItems"]>;
  GetPaymentMethodConfigurations(...args: StripeFullApiOperationArgs<"GetPaymentMethodConfigurations">): Promise<StripeFullApiOperationResponseMap["GetPaymentMethodConfigurations"]>;
  GetPaymentMethodConfigurationsConfiguration(...args: StripeFullApiOperationArgs<"GetPaymentMethodConfigurationsConfiguration">): Promise<StripeFullApiOperationResponseMap["GetPaymentMethodConfigurationsConfiguration"]>;
  GetPaymentMethodDomains(...args: StripeFullApiOperationArgs<"GetPaymentMethodDomains">): Promise<StripeFullApiOperationResponseMap["GetPaymentMethodDomains"]>;
  GetPaymentMethodDomainsPaymentMethodDomain(...args: StripeFullApiOperationArgs<"GetPaymentMethodDomainsPaymentMethodDomain">): Promise<StripeFullApiOperationResponseMap["GetPaymentMethodDomainsPaymentMethodDomain"]>;
  GetPaymentMethods(...args: StripeFullApiOperationArgs<"GetPaymentMethods">): Promise<StripeFullApiOperationResponseMap["GetPaymentMethods"]>;
  GetPaymentMethodsPaymentMethod(...args: StripeFullApiOperationArgs<"GetPaymentMethodsPaymentMethod">): Promise<StripeFullApiOperationResponseMap["GetPaymentMethodsPaymentMethod"]>;
  GetPaymentRecordsId(...args: StripeFullApiOperationArgs<"GetPaymentRecordsId">): Promise<StripeFullApiOperationResponseMap["GetPaymentRecordsId"]>;
  GetPayouts(...args: StripeFullApiOperationArgs<"GetPayouts">): Promise<StripeFullApiOperationResponseMap["GetPayouts"]>;
  GetPayoutsPayout(...args: StripeFullApiOperationArgs<"GetPayoutsPayout">): Promise<StripeFullApiOperationResponseMap["GetPayoutsPayout"]>;
  GetPlans(...args: StripeFullApiOperationArgs<"GetPlans">): Promise<StripeFullApiOperationResponseMap["GetPlans"]>;
  GetPlansPlan(...args: StripeFullApiOperationArgs<"GetPlansPlan">): Promise<StripeFullApiOperationResponseMap["GetPlansPlan"]>;
  GetPrices(...args: StripeFullApiOperationArgs<"GetPrices">): Promise<StripeFullApiOperationResponseMap["GetPrices"]>;
  GetPricesPrice(...args: StripeFullApiOperationArgs<"GetPricesPrice">): Promise<StripeFullApiOperationResponseMap["GetPricesPrice"]>;
  GetPricesSearch(...args: StripeFullApiOperationArgs<"GetPricesSearch">): Promise<StripeFullApiOperationResponseMap["GetPricesSearch"]>;
  GetProducts(...args: StripeFullApiOperationArgs<"GetProducts">): Promise<StripeFullApiOperationResponseMap["GetProducts"]>;
  GetProductsId(...args: StripeFullApiOperationArgs<"GetProductsId">): Promise<StripeFullApiOperationResponseMap["GetProductsId"]>;
  GetProductsProductFeatures(...args: StripeFullApiOperationArgs<"GetProductsProductFeatures">): Promise<StripeFullApiOperationResponseMap["GetProductsProductFeatures"]>;
  GetProductsProductFeaturesId(...args: StripeFullApiOperationArgs<"GetProductsProductFeaturesId">): Promise<StripeFullApiOperationResponseMap["GetProductsProductFeaturesId"]>;
  GetProductsSearch(...args: StripeFullApiOperationArgs<"GetProductsSearch">): Promise<StripeFullApiOperationResponseMap["GetProductsSearch"]>;
  GetPromotionCodes(...args: StripeFullApiOperationArgs<"GetPromotionCodes">): Promise<StripeFullApiOperationResponseMap["GetPromotionCodes"]>;
  GetPromotionCodesPromotionCode(...args: StripeFullApiOperationArgs<"GetPromotionCodesPromotionCode">): Promise<StripeFullApiOperationResponseMap["GetPromotionCodesPromotionCode"]>;
  GetQuotes(...args: StripeFullApiOperationArgs<"GetQuotes">): Promise<StripeFullApiOperationResponseMap["GetQuotes"]>;
  GetQuotesQuote(...args: StripeFullApiOperationArgs<"GetQuotesQuote">): Promise<StripeFullApiOperationResponseMap["GetQuotesQuote"]>;
  GetQuotesQuoteComputedUpfrontLineItems(...args: StripeFullApiOperationArgs<"GetQuotesQuoteComputedUpfrontLineItems">): Promise<StripeFullApiOperationResponseMap["GetQuotesQuoteComputedUpfrontLineItems"]>;
  GetQuotesQuoteLineItems(...args: StripeFullApiOperationArgs<"GetQuotesQuoteLineItems">): Promise<StripeFullApiOperationResponseMap["GetQuotesQuoteLineItems"]>;
  GetQuotesQuotePdf(...args: StripeFullApiOperationArgs<"GetQuotesQuotePdf">): Promise<StripeFullApiOperationResponseMap["GetQuotesQuotePdf"]>;
  GetRadarEarlyFraudWarnings(...args: StripeFullApiOperationArgs<"GetRadarEarlyFraudWarnings">): Promise<StripeFullApiOperationResponseMap["GetRadarEarlyFraudWarnings"]>;
  GetRadarEarlyFraudWarningsEarlyFraudWarning(...args: StripeFullApiOperationArgs<"GetRadarEarlyFraudWarningsEarlyFraudWarning">): Promise<StripeFullApiOperationResponseMap["GetRadarEarlyFraudWarningsEarlyFraudWarning"]>;
  GetRadarValueListItems(...args: StripeFullApiOperationArgs<"GetRadarValueListItems">): Promise<StripeFullApiOperationResponseMap["GetRadarValueListItems"]>;
  GetRadarValueListItemsItem(...args: StripeFullApiOperationArgs<"GetRadarValueListItemsItem">): Promise<StripeFullApiOperationResponseMap["GetRadarValueListItemsItem"]>;
  GetRadarValueLists(...args: StripeFullApiOperationArgs<"GetRadarValueLists">): Promise<StripeFullApiOperationResponseMap["GetRadarValueLists"]>;
  GetRadarValueListsValueList(...args: StripeFullApiOperationArgs<"GetRadarValueListsValueList">): Promise<StripeFullApiOperationResponseMap["GetRadarValueListsValueList"]>;
  GetRefunds(...args: StripeFullApiOperationArgs<"GetRefunds">): Promise<StripeFullApiOperationResponseMap["GetRefunds"]>;
  GetRefundsRefund(...args: StripeFullApiOperationArgs<"GetRefundsRefund">): Promise<StripeFullApiOperationResponseMap["GetRefundsRefund"]>;
  GetReportingReportRuns(...args: StripeFullApiOperationArgs<"GetReportingReportRuns">): Promise<StripeFullApiOperationResponseMap["GetReportingReportRuns"]>;
  GetReportingReportRunsReportRun(...args: StripeFullApiOperationArgs<"GetReportingReportRunsReportRun">): Promise<StripeFullApiOperationResponseMap["GetReportingReportRunsReportRun"]>;
  GetReportingReportTypes(...args: StripeFullApiOperationArgs<"GetReportingReportTypes">): Promise<StripeFullApiOperationResponseMap["GetReportingReportTypes"]>;
  GetReportingReportTypesReportType(...args: StripeFullApiOperationArgs<"GetReportingReportTypesReportType">): Promise<StripeFullApiOperationResponseMap["GetReportingReportTypesReportType"]>;
  GetReviews(...args: StripeFullApiOperationArgs<"GetReviews">): Promise<StripeFullApiOperationResponseMap["GetReviews"]>;
  GetReviewsReview(...args: StripeFullApiOperationArgs<"GetReviewsReview">): Promise<StripeFullApiOperationResponseMap["GetReviewsReview"]>;
  GetSetupAttempts(...args: StripeFullApiOperationArgs<"GetSetupAttempts">): Promise<StripeFullApiOperationResponseMap["GetSetupAttempts"]>;
  GetSetupIntents(...args: StripeFullApiOperationArgs<"GetSetupIntents">): Promise<StripeFullApiOperationResponseMap["GetSetupIntents"]>;
  GetSetupIntentsIntent(...args: StripeFullApiOperationArgs<"GetSetupIntentsIntent">): Promise<StripeFullApiOperationResponseMap["GetSetupIntentsIntent"]>;
  GetShippingRates(...args: StripeFullApiOperationArgs<"GetShippingRates">): Promise<StripeFullApiOperationResponseMap["GetShippingRates"]>;
  GetShippingRatesShippingRateToken(...args: StripeFullApiOperationArgs<"GetShippingRatesShippingRateToken">): Promise<StripeFullApiOperationResponseMap["GetShippingRatesShippingRateToken"]>;
  GetSigmaScheduledQueryRuns(...args: StripeFullApiOperationArgs<"GetSigmaScheduledQueryRuns">): Promise<StripeFullApiOperationResponseMap["GetSigmaScheduledQueryRuns"]>;
  GetSigmaScheduledQueryRunsScheduledQueryRun(...args: StripeFullApiOperationArgs<"GetSigmaScheduledQueryRunsScheduledQueryRun">): Promise<StripeFullApiOperationResponseMap["GetSigmaScheduledQueryRunsScheduledQueryRun"]>;
  GetSourcesSource(...args: StripeFullApiOperationArgs<"GetSourcesSource">): Promise<StripeFullApiOperationResponseMap["GetSourcesSource"]>;
  GetSourcesSourceMandateNotificationsMandateNotification(...args: StripeFullApiOperationArgs<"GetSourcesSourceMandateNotificationsMandateNotification">): Promise<StripeFullApiOperationResponseMap["GetSourcesSourceMandateNotificationsMandateNotification"]>;
  GetSourcesSourceSourceTransactions(...args: StripeFullApiOperationArgs<"GetSourcesSourceSourceTransactions">): Promise<StripeFullApiOperationResponseMap["GetSourcesSourceSourceTransactions"]>;
  GetSourcesSourceSourceTransactionsSourceTransaction(...args: StripeFullApiOperationArgs<"GetSourcesSourceSourceTransactionsSourceTransaction">): Promise<StripeFullApiOperationResponseMap["GetSourcesSourceSourceTransactionsSourceTransaction"]>;
  GetSubscriptionItems(...args: StripeFullApiOperationArgs<"GetSubscriptionItems">): Promise<StripeFullApiOperationResponseMap["GetSubscriptionItems"]>;
  GetSubscriptionItemsItem(...args: StripeFullApiOperationArgs<"GetSubscriptionItemsItem">): Promise<StripeFullApiOperationResponseMap["GetSubscriptionItemsItem"]>;
  GetSubscriptions(...args: StripeFullApiOperationArgs<"GetSubscriptions">): Promise<StripeFullApiOperationResponseMap["GetSubscriptions"]>;
  GetSubscriptionSchedules(...args: StripeFullApiOperationArgs<"GetSubscriptionSchedules">): Promise<StripeFullApiOperationResponseMap["GetSubscriptionSchedules"]>;
  GetSubscriptionSchedulesSchedule(...args: StripeFullApiOperationArgs<"GetSubscriptionSchedulesSchedule">): Promise<StripeFullApiOperationResponseMap["GetSubscriptionSchedulesSchedule"]>;
}

export const StripeFullApiV103GeneratedFunctionNames = [
  "GetIssuingDisputesDispute",
  "GetIssuingPersonalizationDesigns",
  "GetIssuingPersonalizationDesignsPersonalizationDesign",
  "GetIssuingPhysicalBundles",
  "GetIssuingPhysicalBundlesPhysicalBundle",
  "GetIssuingSettlementsSettlement",
  "GetIssuingTokens",
  "GetIssuingTokensToken",
  "GetIssuingTransactions",
  "GetIssuingTransactionsTransaction",
  "GetLinkAccountSessionsSession",
  "GetLinkedAccounts",
  "GetLinkedAccountsAccount",
  "GetLinkedAccountsAccountOwners",
  "GetMandatesMandate",
  "GetPaymentAttemptRecords",
  "GetPaymentAttemptRecordsId",
  "GetPaymentIntents",
  "GetPaymentIntentsIntent",
  "GetPaymentIntentsIntentAmountDetailsLineItems",
  "GetPaymentIntentsSearch",
  "GetPaymentLinks",
  "GetPaymentLinksPaymentLink",
  "GetPaymentLinksPaymentLinkLineItems",
  "GetPaymentMethodConfigurations",
  "GetPaymentMethodConfigurationsConfiguration",
  "GetPaymentMethodDomains",
  "GetPaymentMethodDomainsPaymentMethodDomain",
  "GetPaymentMethods",
  "GetPaymentMethodsPaymentMethod",
  "GetPaymentRecordsId",
  "GetPayouts",
  "GetPayoutsPayout",
  "GetPlans",
  "GetPlansPlan",
  "GetPrices",
  "GetPricesPrice",
  "GetPricesSearch",
  "GetProducts",
  "GetProductsId",
  "GetProductsProductFeatures",
  "GetProductsProductFeaturesId",
  "GetProductsSearch",
  "GetPromotionCodes",
  "GetPromotionCodesPromotionCode",
  "GetQuotes",
  "GetQuotesQuote",
  "GetQuotesQuoteComputedUpfrontLineItems",
  "GetQuotesQuoteLineItems",
  "GetQuotesQuotePdf",
  "GetRadarEarlyFraudWarnings",
  "GetRadarEarlyFraudWarningsEarlyFraudWarning",
  "GetRadarValueListItems",
  "GetRadarValueListItemsItem",
  "GetRadarValueLists",
  "GetRadarValueListsValueList",
  "GetRefunds",
  "GetRefundsRefund",
  "GetReportingReportRuns",
  "GetReportingReportRunsReportRun",
  "GetReportingReportTypes",
  "GetReportingReportTypesReportType",
  "GetReviews",
  "GetReviewsReview",
  "GetSetupAttempts",
  "GetSetupIntents",
  "GetSetupIntentsIntent",
  "GetShippingRates",
  "GetShippingRatesShippingRateToken",
  "GetSigmaScheduledQueryRuns",
  "GetSigmaScheduledQueryRunsScheduledQueryRun",
  "GetSourcesSource",
  "GetSourcesSourceMandateNotificationsMandateNotification",
  "GetSourcesSourceSourceTransactions",
  "GetSourcesSourceSourceTransactionsSourceTransaction",
  "GetSubscriptionItems",
  "GetSubscriptionItemsItem",
  "GetSubscriptions",
  "GetSubscriptionSchedules",
  "GetSubscriptionSchedulesSchedule"
] as const satisfies readonly (keyof StripeFullApiV103GeneratedClient)[];

export function createStripeFullApiV103GeneratedClient(
  callOperation: StripeGeneratedOperationCaller,
): StripeFullApiV103GeneratedClient {
  return {
    GetIssuingDisputesDispute: (...args) => callOperation("GetIssuingDisputesDispute", ...(args as StripeFullApiOperationArgs<"GetIssuingDisputesDispute">)),
    GetIssuingPersonalizationDesigns: (...args) => callOperation("GetIssuingPersonalizationDesigns", ...(args as StripeFullApiOperationArgs<"GetIssuingPersonalizationDesigns">)),
    GetIssuingPersonalizationDesignsPersonalizationDesign: (...args) => callOperation("GetIssuingPersonalizationDesignsPersonalizationDesign", ...(args as StripeFullApiOperationArgs<"GetIssuingPersonalizationDesignsPersonalizationDesign">)),
    GetIssuingPhysicalBundles: (...args) => callOperation("GetIssuingPhysicalBundles", ...(args as StripeFullApiOperationArgs<"GetIssuingPhysicalBundles">)),
    GetIssuingPhysicalBundlesPhysicalBundle: (...args) => callOperation("GetIssuingPhysicalBundlesPhysicalBundle", ...(args as StripeFullApiOperationArgs<"GetIssuingPhysicalBundlesPhysicalBundle">)),
    GetIssuingSettlementsSettlement: (...args) => callOperation("GetIssuingSettlementsSettlement", ...(args as StripeFullApiOperationArgs<"GetIssuingSettlementsSettlement">)),
    GetIssuingTokens: (...args) => callOperation("GetIssuingTokens", ...(args as StripeFullApiOperationArgs<"GetIssuingTokens">)),
    GetIssuingTokensToken: (...args) => callOperation("GetIssuingTokensToken", ...(args as StripeFullApiOperationArgs<"GetIssuingTokensToken">)),
    GetIssuingTransactions: (...args) => callOperation("GetIssuingTransactions", ...(args as StripeFullApiOperationArgs<"GetIssuingTransactions">)),
    GetIssuingTransactionsTransaction: (...args) => callOperation("GetIssuingTransactionsTransaction", ...(args as StripeFullApiOperationArgs<"GetIssuingTransactionsTransaction">)),
    GetLinkAccountSessionsSession: (...args) => callOperation("GetLinkAccountSessionsSession", ...(args as StripeFullApiOperationArgs<"GetLinkAccountSessionsSession">)),
    GetLinkedAccounts: (...args) => callOperation("GetLinkedAccounts", ...(args as StripeFullApiOperationArgs<"GetLinkedAccounts">)),
    GetLinkedAccountsAccount: (...args) => callOperation("GetLinkedAccountsAccount", ...(args as StripeFullApiOperationArgs<"GetLinkedAccountsAccount">)),
    GetLinkedAccountsAccountOwners: (...args) => callOperation("GetLinkedAccountsAccountOwners", ...(args as StripeFullApiOperationArgs<"GetLinkedAccountsAccountOwners">)),
    GetMandatesMandate: (...args) => callOperation("GetMandatesMandate", ...(args as StripeFullApiOperationArgs<"GetMandatesMandate">)),
    GetPaymentAttemptRecords: (...args) => callOperation("GetPaymentAttemptRecords", ...(args as StripeFullApiOperationArgs<"GetPaymentAttemptRecords">)),
    GetPaymentAttemptRecordsId: (...args) => callOperation("GetPaymentAttemptRecordsId", ...(args as StripeFullApiOperationArgs<"GetPaymentAttemptRecordsId">)),
    GetPaymentIntents: (...args) => callOperation("GetPaymentIntents", ...(args as StripeFullApiOperationArgs<"GetPaymentIntents">)),
    GetPaymentIntentsIntent: (...args) => callOperation("GetPaymentIntentsIntent", ...(args as StripeFullApiOperationArgs<"GetPaymentIntentsIntent">)),
    GetPaymentIntentsIntentAmountDetailsLineItems: (...args) => callOperation("GetPaymentIntentsIntentAmountDetailsLineItems", ...(args as StripeFullApiOperationArgs<"GetPaymentIntentsIntentAmountDetailsLineItems">)),
    GetPaymentIntentsSearch: (...args) => callOperation("GetPaymentIntentsSearch", ...(args as StripeFullApiOperationArgs<"GetPaymentIntentsSearch">)),
    GetPaymentLinks: (...args) => callOperation("GetPaymentLinks", ...(args as StripeFullApiOperationArgs<"GetPaymentLinks">)),
    GetPaymentLinksPaymentLink: (...args) => callOperation("GetPaymentLinksPaymentLink", ...(args as StripeFullApiOperationArgs<"GetPaymentLinksPaymentLink">)),
    GetPaymentLinksPaymentLinkLineItems: (...args) => callOperation("GetPaymentLinksPaymentLinkLineItems", ...(args as StripeFullApiOperationArgs<"GetPaymentLinksPaymentLinkLineItems">)),
    GetPaymentMethodConfigurations: (...args) => callOperation("GetPaymentMethodConfigurations", ...(args as StripeFullApiOperationArgs<"GetPaymentMethodConfigurations">)),
    GetPaymentMethodConfigurationsConfiguration: (...args) => callOperation("GetPaymentMethodConfigurationsConfiguration", ...(args as StripeFullApiOperationArgs<"GetPaymentMethodConfigurationsConfiguration">)),
    GetPaymentMethodDomains: (...args) => callOperation("GetPaymentMethodDomains", ...(args as StripeFullApiOperationArgs<"GetPaymentMethodDomains">)),
    GetPaymentMethodDomainsPaymentMethodDomain: (...args) => callOperation("GetPaymentMethodDomainsPaymentMethodDomain", ...(args as StripeFullApiOperationArgs<"GetPaymentMethodDomainsPaymentMethodDomain">)),
    GetPaymentMethods: (...args) => callOperation("GetPaymentMethods", ...(args as StripeFullApiOperationArgs<"GetPaymentMethods">)),
    GetPaymentMethodsPaymentMethod: (...args) => callOperation("GetPaymentMethodsPaymentMethod", ...(args as StripeFullApiOperationArgs<"GetPaymentMethodsPaymentMethod">)),
    GetPaymentRecordsId: (...args) => callOperation("GetPaymentRecordsId", ...(args as StripeFullApiOperationArgs<"GetPaymentRecordsId">)),
    GetPayouts: (...args) => callOperation("GetPayouts", ...(args as StripeFullApiOperationArgs<"GetPayouts">)),
    GetPayoutsPayout: (...args) => callOperation("GetPayoutsPayout", ...(args as StripeFullApiOperationArgs<"GetPayoutsPayout">)),
    GetPlans: (...args) => callOperation("GetPlans", ...(args as StripeFullApiOperationArgs<"GetPlans">)),
    GetPlansPlan: (...args) => callOperation("GetPlansPlan", ...(args as StripeFullApiOperationArgs<"GetPlansPlan">)),
    GetPrices: (...args) => callOperation("GetPrices", ...(args as StripeFullApiOperationArgs<"GetPrices">)),
    GetPricesPrice: (...args) => callOperation("GetPricesPrice", ...(args as StripeFullApiOperationArgs<"GetPricesPrice">)),
    GetPricesSearch: (...args) => callOperation("GetPricesSearch", ...(args as StripeFullApiOperationArgs<"GetPricesSearch">)),
    GetProducts: (...args) => callOperation("GetProducts", ...(args as StripeFullApiOperationArgs<"GetProducts">)),
    GetProductsId: (...args) => callOperation("GetProductsId", ...(args as StripeFullApiOperationArgs<"GetProductsId">)),
    GetProductsProductFeatures: (...args) => callOperation("GetProductsProductFeatures", ...(args as StripeFullApiOperationArgs<"GetProductsProductFeatures">)),
    GetProductsProductFeaturesId: (...args) => callOperation("GetProductsProductFeaturesId", ...(args as StripeFullApiOperationArgs<"GetProductsProductFeaturesId">)),
    GetProductsSearch: (...args) => callOperation("GetProductsSearch", ...(args as StripeFullApiOperationArgs<"GetProductsSearch">)),
    GetPromotionCodes: (...args) => callOperation("GetPromotionCodes", ...(args as StripeFullApiOperationArgs<"GetPromotionCodes">)),
    GetPromotionCodesPromotionCode: (...args) => callOperation("GetPromotionCodesPromotionCode", ...(args as StripeFullApiOperationArgs<"GetPromotionCodesPromotionCode">)),
    GetQuotes: (...args) => callOperation("GetQuotes", ...(args as StripeFullApiOperationArgs<"GetQuotes">)),
    GetQuotesQuote: (...args) => callOperation("GetQuotesQuote", ...(args as StripeFullApiOperationArgs<"GetQuotesQuote">)),
    GetQuotesQuoteComputedUpfrontLineItems: (...args) => callOperation("GetQuotesQuoteComputedUpfrontLineItems", ...(args as StripeFullApiOperationArgs<"GetQuotesQuoteComputedUpfrontLineItems">)),
    GetQuotesQuoteLineItems: (...args) => callOperation("GetQuotesQuoteLineItems", ...(args as StripeFullApiOperationArgs<"GetQuotesQuoteLineItems">)),
    GetQuotesQuotePdf: (...args) => callOperation("GetQuotesQuotePdf", ...(args as StripeFullApiOperationArgs<"GetQuotesQuotePdf">)),
    GetRadarEarlyFraudWarnings: (...args) => callOperation("GetRadarEarlyFraudWarnings", ...(args as StripeFullApiOperationArgs<"GetRadarEarlyFraudWarnings">)),
    GetRadarEarlyFraudWarningsEarlyFraudWarning: (...args) => callOperation("GetRadarEarlyFraudWarningsEarlyFraudWarning", ...(args as StripeFullApiOperationArgs<"GetRadarEarlyFraudWarningsEarlyFraudWarning">)),
    GetRadarValueListItems: (...args) => callOperation("GetRadarValueListItems", ...(args as StripeFullApiOperationArgs<"GetRadarValueListItems">)),
    GetRadarValueListItemsItem: (...args) => callOperation("GetRadarValueListItemsItem", ...(args as StripeFullApiOperationArgs<"GetRadarValueListItemsItem">)),
    GetRadarValueLists: (...args) => callOperation("GetRadarValueLists", ...(args as StripeFullApiOperationArgs<"GetRadarValueLists">)),
    GetRadarValueListsValueList: (...args) => callOperation("GetRadarValueListsValueList", ...(args as StripeFullApiOperationArgs<"GetRadarValueListsValueList">)),
    GetRefunds: (...args) => callOperation("GetRefunds", ...(args as StripeFullApiOperationArgs<"GetRefunds">)),
    GetRefundsRefund: (...args) => callOperation("GetRefundsRefund", ...(args as StripeFullApiOperationArgs<"GetRefundsRefund">)),
    GetReportingReportRuns: (...args) => callOperation("GetReportingReportRuns", ...(args as StripeFullApiOperationArgs<"GetReportingReportRuns">)),
    GetReportingReportRunsReportRun: (...args) => callOperation("GetReportingReportRunsReportRun", ...(args as StripeFullApiOperationArgs<"GetReportingReportRunsReportRun">)),
    GetReportingReportTypes: (...args) => callOperation("GetReportingReportTypes", ...(args as StripeFullApiOperationArgs<"GetReportingReportTypes">)),
    GetReportingReportTypesReportType: (...args) => callOperation("GetReportingReportTypesReportType", ...(args as StripeFullApiOperationArgs<"GetReportingReportTypesReportType">)),
    GetReviews: (...args) => callOperation("GetReviews", ...(args as StripeFullApiOperationArgs<"GetReviews">)),
    GetReviewsReview: (...args) => callOperation("GetReviewsReview", ...(args as StripeFullApiOperationArgs<"GetReviewsReview">)),
    GetSetupAttempts: (...args) => callOperation("GetSetupAttempts", ...(args as StripeFullApiOperationArgs<"GetSetupAttempts">)),
    GetSetupIntents: (...args) => callOperation("GetSetupIntents", ...(args as StripeFullApiOperationArgs<"GetSetupIntents">)),
    GetSetupIntentsIntent: (...args) => callOperation("GetSetupIntentsIntent", ...(args as StripeFullApiOperationArgs<"GetSetupIntentsIntent">)),
    GetShippingRates: (...args) => callOperation("GetShippingRates", ...(args as StripeFullApiOperationArgs<"GetShippingRates">)),
    GetShippingRatesShippingRateToken: (...args) => callOperation("GetShippingRatesShippingRateToken", ...(args as StripeFullApiOperationArgs<"GetShippingRatesShippingRateToken">)),
    GetSigmaScheduledQueryRuns: (...args) => callOperation("GetSigmaScheduledQueryRuns", ...(args as StripeFullApiOperationArgs<"GetSigmaScheduledQueryRuns">)),
    GetSigmaScheduledQueryRunsScheduledQueryRun: (...args) => callOperation("GetSigmaScheduledQueryRunsScheduledQueryRun", ...(args as StripeFullApiOperationArgs<"GetSigmaScheduledQueryRunsScheduledQueryRun">)),
    GetSourcesSource: (...args) => callOperation("GetSourcesSource", ...(args as StripeFullApiOperationArgs<"GetSourcesSource">)),
    GetSourcesSourceMandateNotificationsMandateNotification: (...args) => callOperation("GetSourcesSourceMandateNotificationsMandateNotification", ...(args as StripeFullApiOperationArgs<"GetSourcesSourceMandateNotificationsMandateNotification">)),
    GetSourcesSourceSourceTransactions: (...args) => callOperation("GetSourcesSourceSourceTransactions", ...(args as StripeFullApiOperationArgs<"GetSourcesSourceSourceTransactions">)),
    GetSourcesSourceSourceTransactionsSourceTransaction: (...args) => callOperation("GetSourcesSourceSourceTransactionsSourceTransaction", ...(args as StripeFullApiOperationArgs<"GetSourcesSourceSourceTransactionsSourceTransaction">)),
    GetSubscriptionItems: (...args) => callOperation("GetSubscriptionItems", ...(args as StripeFullApiOperationArgs<"GetSubscriptionItems">)),
    GetSubscriptionItemsItem: (...args) => callOperation("GetSubscriptionItemsItem", ...(args as StripeFullApiOperationArgs<"GetSubscriptionItemsItem">)),
    GetSubscriptions: (...args) => callOperation("GetSubscriptions", ...(args as StripeFullApiOperationArgs<"GetSubscriptions">)),
    GetSubscriptionSchedules: (...args) => callOperation("GetSubscriptionSchedules", ...(args as StripeFullApiOperationArgs<"GetSubscriptionSchedules">)),
    GetSubscriptionSchedulesSchedule: (...args) => callOperation("GetSubscriptionSchedulesSchedule", ...(args as StripeFullApiOperationArgs<"GetSubscriptionSchedulesSchedule">)),
  };
}
