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
export const StripeFullApiV106OperationKeys = [
  "PostInvoicesInvoiceMarkUncollectible",
  "PostInvoicesInvoicePay",
  "PostInvoicesInvoiceRemoveLines",
  "PostInvoicesInvoiceSend",
  "PostInvoicesInvoiceUpdateLines",
  "PostInvoicesInvoiceVoid",
  "PostIssuingAuthorizationsAuthorization",
  "PostIssuingAuthorizationsAuthorizationApprove",
  "PostIssuingAuthorizationsAuthorizationDecline",
  "PostIssuingCardholders",
  "PostIssuingCardholdersCardholder",
  "PostIssuingCards",
  "PostIssuingCardsCard",
  "PostIssuingDisputes",
  "PostIssuingDisputesDispute",
  "PostIssuingDisputesDisputeSubmit",
  "PostIssuingPersonalizationDesigns",
  "PostIssuingPersonalizationDesignsPersonalizationDesign",
  "PostIssuingSettlementsSettlement",
  "PostIssuingTokensToken",
  "PostIssuingTransactionsTransaction",
  "PostLinkAccountSessions",
  "PostLinkedAccountsAccountDisconnect",
  "PostLinkedAccountsAccountRefresh",
  "PostPaymentIntents",
  "PostPaymentIntentsIntent",
  "PostPaymentIntentsIntentApplyCustomerBalance",
  "PostPaymentIntentsIntentCancel",
  "PostPaymentIntentsIntentCapture",
  "PostPaymentIntentsIntentConfirm",
  "PostPaymentIntentsIntentIncrementAuthorization",
  "PostPaymentIntentsIntentVerifyMicrodeposits",
  "PostPaymentLinks",
  "PostPaymentLinksPaymentLink",
  "PostPaymentMethodConfigurations",
  "PostPaymentMethodConfigurationsConfiguration",
  "PostPaymentMethodDomains",
  "PostPaymentMethodDomainsPaymentMethodDomain",
  "PostPaymentMethodDomainsPaymentMethodDomainValidate",
  "PostPaymentMethods",
  "PostPaymentMethodsPaymentMethod",
  "PostPaymentMethodsPaymentMethodAttach",
  "PostPaymentMethodsPaymentMethodDetach",
  "PostPaymentRecordsIdReportPaymentAttempt",
  "PostPaymentRecordsIdReportPaymentAttemptCanceled",
  "PostPaymentRecordsIdReportPaymentAttemptFailed",
  "PostPaymentRecordsIdReportPaymentAttemptGuaranteed",
  "PostPaymentRecordsIdReportPaymentAttemptInformational",
  "PostPaymentRecordsIdReportRefund",
  "PostPaymentRecordsReportPayment",
  "PostPayouts",
  "PostPayoutsPayout",
  "PostPayoutsPayoutCancel",
  "PostPayoutsPayoutReverse",
  "PostPlans",
  "PostPlansPlan",
  "PostPrices",
  "PostPricesPrice",
  "PostProducts",
  "PostProductsId",
  "PostProductsProductFeatures",
  "PostPromotionCodes",
  "PostPromotionCodesPromotionCode",
  "PostQuotes",
  "PostQuotesQuote",
  "PostQuotesQuoteAccept",
  "PostQuotesQuoteCancel",
  "PostQuotesQuoteFinalize",
  "PostRadarPaymentEvaluations",
  "PostRadarValueListItems",
  "PostRadarValueLists",
  "PostRadarValueListsValueList",
  "PostRefunds",
  "PostRefundsRefund",
  "PostRefundsRefundCancel",
  "PostReportingReportRuns",
  "PostReviewsReviewApprove",
  "PostSetupIntents",
  "PostSetupIntentsIntent",
  "PostSetupIntentsIntentCancel"
] as const;
export type StripeFullApiV106OperationKey = typeof StripeFullApiV106OperationKeys[number];
// End hardened literal operation keys.

export interface StripeFullApiV106OperationPathParamMap {
  "PostInvoicesInvoiceMarkUncollectible": { "invoice": StripeFullApiPathParamValue };
  "PostInvoicesInvoicePay": { "invoice": StripeFullApiPathParamValue };
  "PostInvoicesInvoiceRemoveLines": { "invoice": StripeFullApiPathParamValue };
  "PostInvoicesInvoiceSend": { "invoice": StripeFullApiPathParamValue };
  "PostInvoicesInvoiceUpdateLines": { "invoice": StripeFullApiPathParamValue };
  "PostInvoicesInvoiceVoid": { "invoice": StripeFullApiPathParamValue };
  "PostIssuingAuthorizationsAuthorization": { "authorization": StripeFullApiPathParamValue };
  "PostIssuingAuthorizationsAuthorizationApprove": { "authorization": StripeFullApiPathParamValue };
  "PostIssuingAuthorizationsAuthorizationDecline": { "authorization": StripeFullApiPathParamValue };
  "PostIssuingCardholders": {};
  "PostIssuingCardholdersCardholder": { "cardholder": StripeFullApiPathParamValue };
  "PostIssuingCards": {};
  "PostIssuingCardsCard": { "card": StripeFullApiPathParamValue };
  "PostIssuingDisputes": {};
  "PostIssuingDisputesDispute": { "dispute": StripeFullApiPathParamValue };
  "PostIssuingDisputesDisputeSubmit": { "dispute": StripeFullApiPathParamValue };
  "PostIssuingPersonalizationDesigns": {};
  "PostIssuingPersonalizationDesignsPersonalizationDesign": { "personalization_design": StripeFullApiPathParamValue };
  "PostIssuingSettlementsSettlement": { "settlement": StripeFullApiPathParamValue };
  "PostIssuingTokensToken": { "token": StripeFullApiPathParamValue };
  "PostIssuingTransactionsTransaction": { "transaction": StripeFullApiPathParamValue };
  "PostLinkAccountSessions": {};
  "PostLinkedAccountsAccountDisconnect": { "account": StripeFullApiPathParamValue };
  "PostLinkedAccountsAccountRefresh": { "account": StripeFullApiPathParamValue };
  "PostPaymentIntents": {};
  "PostPaymentIntentsIntent": { "intent": StripeFullApiPathParamValue };
  "PostPaymentIntentsIntentApplyCustomerBalance": { "intent": StripeFullApiPathParamValue };
  "PostPaymentIntentsIntentCancel": { "intent": StripeFullApiPathParamValue };
  "PostPaymentIntentsIntentCapture": { "intent": StripeFullApiPathParamValue };
  "PostPaymentIntentsIntentConfirm": { "intent": StripeFullApiPathParamValue };
  "PostPaymentIntentsIntentIncrementAuthorization": { "intent": StripeFullApiPathParamValue };
  "PostPaymentIntentsIntentVerifyMicrodeposits": { "intent": StripeFullApiPathParamValue };
  "PostPaymentLinks": {};
  "PostPaymentLinksPaymentLink": { "payment_link": StripeFullApiPathParamValue };
  "PostPaymentMethodConfigurations": {};
  "PostPaymentMethodConfigurationsConfiguration": { "configuration": StripeFullApiPathParamValue };
  "PostPaymentMethodDomains": {};
  "PostPaymentMethodDomainsPaymentMethodDomain": { "payment_method_domain": StripeFullApiPathParamValue };
  "PostPaymentMethodDomainsPaymentMethodDomainValidate": { "payment_method_domain": StripeFullApiPathParamValue };
  "PostPaymentMethods": {};
  "PostPaymentMethodsPaymentMethod": { "payment_method": StripeFullApiPathParamValue };
  "PostPaymentMethodsPaymentMethodAttach": { "payment_method": StripeFullApiPathParamValue };
  "PostPaymentMethodsPaymentMethodDetach": { "payment_method": StripeFullApiPathParamValue };
  "PostPaymentRecordsIdReportPaymentAttempt": { "id": StripeFullApiPathParamValue };
  "PostPaymentRecordsIdReportPaymentAttemptCanceled": { "id": StripeFullApiPathParamValue };
  "PostPaymentRecordsIdReportPaymentAttemptFailed": { "id": StripeFullApiPathParamValue };
  "PostPaymentRecordsIdReportPaymentAttemptGuaranteed": { "id": StripeFullApiPathParamValue };
  "PostPaymentRecordsIdReportPaymentAttemptInformational": { "id": StripeFullApiPathParamValue };
  "PostPaymentRecordsIdReportRefund": { "id": StripeFullApiPathParamValue };
  "PostPaymentRecordsReportPayment": {};
  "PostPayouts": {};
  "PostPayoutsPayout": { "payout": StripeFullApiPathParamValue };
  "PostPayoutsPayoutCancel": { "payout": StripeFullApiPathParamValue };
  "PostPayoutsPayoutReverse": { "payout": StripeFullApiPathParamValue };
  "PostPlans": {};
  "PostPlansPlan": { "plan": StripeFullApiPathParamValue };
  "PostPrices": {};
  "PostPricesPrice": { "price": StripeFullApiPathParamValue };
  "PostProducts": {};
  "PostProductsId": { "id": StripeFullApiPathParamValue };
  "PostProductsProductFeatures": { "product": StripeFullApiPathParamValue };
  "PostPromotionCodes": {};
  "PostPromotionCodesPromotionCode": { "promotion_code": StripeFullApiPathParamValue };
  "PostQuotes": {};
  "PostQuotesQuote": { "quote": StripeFullApiPathParamValue };
  "PostQuotesQuoteAccept": { "quote": StripeFullApiPathParamValue };
  "PostQuotesQuoteCancel": { "quote": StripeFullApiPathParamValue };
  "PostQuotesQuoteFinalize": { "quote": StripeFullApiPathParamValue };
  "PostRadarPaymentEvaluations": {};
  "PostRadarValueListItems": {};
  "PostRadarValueLists": {};
  "PostRadarValueListsValueList": { "value_list": StripeFullApiPathParamValue };
  "PostRefunds": {};
  "PostRefundsRefund": { "refund": StripeFullApiPathParamValue };
  "PostRefundsRefundCancel": { "refund": StripeFullApiPathParamValue };
  "PostReportingReportRuns": {};
  "PostReviewsReviewApprove": { "review": StripeFullApiPathParamValue };
  "PostSetupIntents": {};
  "PostSetupIntentsIntent": { "intent": StripeFullApiPathParamValue };
  "PostSetupIntentsIntentCancel": { "intent": StripeFullApiPathParamValue };
}

export interface StripeFullApiV106OperationRequestMap {
  "PostInvoicesInvoiceMarkUncollectible": StripeFullApiOperationInput<"PostInvoicesInvoiceMarkUncollectible">;
  "PostInvoicesInvoicePay": StripeFullApiOperationInput<"PostInvoicesInvoicePay">;
  "PostInvoicesInvoiceRemoveLines": StripeFullApiOperationInput<"PostInvoicesInvoiceRemoveLines">;
  "PostInvoicesInvoiceSend": StripeFullApiOperationInput<"PostInvoicesInvoiceSend">;
  "PostInvoicesInvoiceUpdateLines": StripeFullApiOperationInput<"PostInvoicesInvoiceUpdateLines">;
  "PostInvoicesInvoiceVoid": StripeFullApiOperationInput<"PostInvoicesInvoiceVoid">;
  "PostIssuingAuthorizationsAuthorization": StripeFullApiOperationInput<"PostIssuingAuthorizationsAuthorization">;
  "PostIssuingAuthorizationsAuthorizationApprove": StripeFullApiOperationInput<"PostIssuingAuthorizationsAuthorizationApprove">;
  "PostIssuingAuthorizationsAuthorizationDecline": StripeFullApiOperationInput<"PostIssuingAuthorizationsAuthorizationDecline">;
  "PostIssuingCardholders": StripeFullApiOperationInput<"PostIssuingCardholders">;
  "PostIssuingCardholdersCardholder": StripeFullApiOperationInput<"PostIssuingCardholdersCardholder">;
  "PostIssuingCards": StripeFullApiOperationInput<"PostIssuingCards">;
  "PostIssuingCardsCard": StripeFullApiOperationInput<"PostIssuingCardsCard">;
  "PostIssuingDisputes": StripeFullApiOperationInput<"PostIssuingDisputes">;
  "PostIssuingDisputesDispute": StripeFullApiOperationInput<"PostIssuingDisputesDispute">;
  "PostIssuingDisputesDisputeSubmit": StripeFullApiOperationInput<"PostIssuingDisputesDisputeSubmit">;
  "PostIssuingPersonalizationDesigns": StripeFullApiOperationInput<"PostIssuingPersonalizationDesigns">;
  "PostIssuingPersonalizationDesignsPersonalizationDesign": StripeFullApiOperationInput<"PostIssuingPersonalizationDesignsPersonalizationDesign">;
  "PostIssuingSettlementsSettlement": StripeFullApiOperationInput<"PostIssuingSettlementsSettlement">;
  "PostIssuingTokensToken": StripeFullApiOperationInput<"PostIssuingTokensToken">;
  "PostIssuingTransactionsTransaction": StripeFullApiOperationInput<"PostIssuingTransactionsTransaction">;
  "PostLinkAccountSessions": StripeFullApiOperationInput<"PostLinkAccountSessions">;
  "PostLinkedAccountsAccountDisconnect": StripeFullApiOperationInput<"PostLinkedAccountsAccountDisconnect">;
  "PostLinkedAccountsAccountRefresh": StripeFullApiOperationInput<"PostLinkedAccountsAccountRefresh">;
  "PostPaymentIntents": StripeFullApiOperationInput<"PostPaymentIntents">;
  "PostPaymentIntentsIntent": StripeFullApiOperationInput<"PostPaymentIntentsIntent">;
  "PostPaymentIntentsIntentApplyCustomerBalance": StripeFullApiOperationInput<"PostPaymentIntentsIntentApplyCustomerBalance">;
  "PostPaymentIntentsIntentCancel": StripeFullApiOperationInput<"PostPaymentIntentsIntentCancel">;
  "PostPaymentIntentsIntentCapture": StripeFullApiOperationInput<"PostPaymentIntentsIntentCapture">;
  "PostPaymentIntentsIntentConfirm": StripeFullApiOperationInput<"PostPaymentIntentsIntentConfirm">;
  "PostPaymentIntentsIntentIncrementAuthorization": StripeFullApiOperationInput<"PostPaymentIntentsIntentIncrementAuthorization">;
  "PostPaymentIntentsIntentVerifyMicrodeposits": StripeFullApiOperationInput<"PostPaymentIntentsIntentVerifyMicrodeposits">;
  "PostPaymentLinks": StripeFullApiOperationInput<"PostPaymentLinks">;
  "PostPaymentLinksPaymentLink": StripeFullApiOperationInput<"PostPaymentLinksPaymentLink">;
  "PostPaymentMethodConfigurations": StripeFullApiOperationInput<"PostPaymentMethodConfigurations">;
  "PostPaymentMethodConfigurationsConfiguration": StripeFullApiOperationInput<"PostPaymentMethodConfigurationsConfiguration">;
  "PostPaymentMethodDomains": StripeFullApiOperationInput<"PostPaymentMethodDomains">;
  "PostPaymentMethodDomainsPaymentMethodDomain": StripeFullApiOperationInput<"PostPaymentMethodDomainsPaymentMethodDomain">;
  "PostPaymentMethodDomainsPaymentMethodDomainValidate": StripeFullApiOperationInput<"PostPaymentMethodDomainsPaymentMethodDomainValidate">;
  "PostPaymentMethods": StripeFullApiOperationInput<"PostPaymentMethods">;
  "PostPaymentMethodsPaymentMethod": StripeFullApiOperationInput<"PostPaymentMethodsPaymentMethod">;
  "PostPaymentMethodsPaymentMethodAttach": StripeFullApiOperationInput<"PostPaymentMethodsPaymentMethodAttach">;
  "PostPaymentMethodsPaymentMethodDetach": StripeFullApiOperationInput<"PostPaymentMethodsPaymentMethodDetach">;
  "PostPaymentRecordsIdReportPaymentAttempt": StripeFullApiOperationInput<"PostPaymentRecordsIdReportPaymentAttempt">;
  "PostPaymentRecordsIdReportPaymentAttemptCanceled": StripeFullApiOperationInput<"PostPaymentRecordsIdReportPaymentAttemptCanceled">;
  "PostPaymentRecordsIdReportPaymentAttemptFailed": StripeFullApiOperationInput<"PostPaymentRecordsIdReportPaymentAttemptFailed">;
  "PostPaymentRecordsIdReportPaymentAttemptGuaranteed": StripeFullApiOperationInput<"PostPaymentRecordsIdReportPaymentAttemptGuaranteed">;
  "PostPaymentRecordsIdReportPaymentAttemptInformational": StripeFullApiOperationInput<"PostPaymentRecordsIdReportPaymentAttemptInformational">;
  "PostPaymentRecordsIdReportRefund": StripeFullApiOperationInput<"PostPaymentRecordsIdReportRefund">;
  "PostPaymentRecordsReportPayment": StripeFullApiOperationInput<"PostPaymentRecordsReportPayment">;
  "PostPayouts": StripeFullApiOperationInput<"PostPayouts">;
  "PostPayoutsPayout": StripeFullApiOperationInput<"PostPayoutsPayout">;
  "PostPayoutsPayoutCancel": StripeFullApiOperationInput<"PostPayoutsPayoutCancel">;
  "PostPayoutsPayoutReverse": StripeFullApiOperationInput<"PostPayoutsPayoutReverse">;
  "PostPlans": StripeFullApiOperationInput<"PostPlans">;
  "PostPlansPlan": StripeFullApiOperationInput<"PostPlansPlan">;
  "PostPrices": StripeFullApiOperationInput<"PostPrices">;
  "PostPricesPrice": StripeFullApiOperationInput<"PostPricesPrice">;
  "PostProducts": StripeFullApiOperationInput<"PostProducts">;
  "PostProductsId": StripeFullApiOperationInput<"PostProductsId">;
  "PostProductsProductFeatures": StripeFullApiOperationInput<"PostProductsProductFeatures">;
  "PostPromotionCodes": StripeFullApiOperationInput<"PostPromotionCodes">;
  "PostPromotionCodesPromotionCode": StripeFullApiOperationInput<"PostPromotionCodesPromotionCode">;
  "PostQuotes": StripeFullApiOperationInput<"PostQuotes">;
  "PostQuotesQuote": StripeFullApiOperationInput<"PostQuotesQuote">;
  "PostQuotesQuoteAccept": StripeFullApiOperationInput<"PostQuotesQuoteAccept">;
  "PostQuotesQuoteCancel": StripeFullApiOperationInput<"PostQuotesQuoteCancel">;
  "PostQuotesQuoteFinalize": StripeFullApiOperationInput<"PostQuotesQuoteFinalize">;
  "PostRadarPaymentEvaluations": StripeFullApiOperationInput<"PostRadarPaymentEvaluations">;
  "PostRadarValueListItems": StripeFullApiOperationInput<"PostRadarValueListItems">;
  "PostRadarValueLists": StripeFullApiOperationInput<"PostRadarValueLists">;
  "PostRadarValueListsValueList": StripeFullApiOperationInput<"PostRadarValueListsValueList">;
  "PostRefunds": StripeFullApiOperationInput<"PostRefunds">;
  "PostRefundsRefund": StripeFullApiOperationInput<"PostRefundsRefund">;
  "PostRefundsRefundCancel": StripeFullApiOperationInput<"PostRefundsRefundCancel">;
  "PostReportingReportRuns": StripeFullApiOperationInput<"PostReportingReportRuns">;
  "PostReviewsReviewApprove": StripeFullApiOperationInput<"PostReviewsReviewApprove">;
  "PostSetupIntents": StripeFullApiOperationInput<"PostSetupIntents">;
  "PostSetupIntentsIntent": StripeFullApiOperationInput<"PostSetupIntentsIntent">;
  "PostSetupIntentsIntentCancel": StripeFullApiOperationInput<"PostSetupIntentsIntentCancel">;
}

export interface StripeFullApiV106GeneratedClient {
  PostInvoicesInvoiceMarkUncollectible(...args: StripeFullApiOperationArgs<"PostInvoicesInvoiceMarkUncollectible">): Promise<StripeFullApiOperationResponseMap["PostInvoicesInvoiceMarkUncollectible"]>;
  PostInvoicesInvoicePay(...args: StripeFullApiOperationArgs<"PostInvoicesInvoicePay">): Promise<StripeFullApiOperationResponseMap["PostInvoicesInvoicePay"]>;
  PostInvoicesInvoiceRemoveLines(...args: StripeFullApiOperationArgs<"PostInvoicesInvoiceRemoveLines">): Promise<StripeFullApiOperationResponseMap["PostInvoicesInvoiceRemoveLines"]>;
  PostInvoicesInvoiceSend(...args: StripeFullApiOperationArgs<"PostInvoicesInvoiceSend">): Promise<StripeFullApiOperationResponseMap["PostInvoicesInvoiceSend"]>;
  PostInvoicesInvoiceUpdateLines(...args: StripeFullApiOperationArgs<"PostInvoicesInvoiceUpdateLines">): Promise<StripeFullApiOperationResponseMap["PostInvoicesInvoiceUpdateLines"]>;
  PostInvoicesInvoiceVoid(...args: StripeFullApiOperationArgs<"PostInvoicesInvoiceVoid">): Promise<StripeFullApiOperationResponseMap["PostInvoicesInvoiceVoid"]>;
  PostIssuingAuthorizationsAuthorization(...args: StripeFullApiOperationArgs<"PostIssuingAuthorizationsAuthorization">): Promise<StripeFullApiOperationResponseMap["PostIssuingAuthorizationsAuthorization"]>;
  PostIssuingAuthorizationsAuthorizationApprove(...args: StripeFullApiOperationArgs<"PostIssuingAuthorizationsAuthorizationApprove">): Promise<StripeFullApiOperationResponseMap["PostIssuingAuthorizationsAuthorizationApprove"]>;
  PostIssuingAuthorizationsAuthorizationDecline(...args: StripeFullApiOperationArgs<"PostIssuingAuthorizationsAuthorizationDecline">): Promise<StripeFullApiOperationResponseMap["PostIssuingAuthorizationsAuthorizationDecline"]>;
  PostIssuingCardholders(...args: StripeFullApiOperationArgs<"PostIssuingCardholders">): Promise<StripeFullApiOperationResponseMap["PostIssuingCardholders"]>;
  PostIssuingCardholdersCardholder(...args: StripeFullApiOperationArgs<"PostIssuingCardholdersCardholder">): Promise<StripeFullApiOperationResponseMap["PostIssuingCardholdersCardholder"]>;
  PostIssuingCards(...args: StripeFullApiOperationArgs<"PostIssuingCards">): Promise<StripeFullApiOperationResponseMap["PostIssuingCards"]>;
  PostIssuingCardsCard(...args: StripeFullApiOperationArgs<"PostIssuingCardsCard">): Promise<StripeFullApiOperationResponseMap["PostIssuingCardsCard"]>;
  PostIssuingDisputes(...args: StripeFullApiOperationArgs<"PostIssuingDisputes">): Promise<StripeFullApiOperationResponseMap["PostIssuingDisputes"]>;
  PostIssuingDisputesDispute(...args: StripeFullApiOperationArgs<"PostIssuingDisputesDispute">): Promise<StripeFullApiOperationResponseMap["PostIssuingDisputesDispute"]>;
  PostIssuingDisputesDisputeSubmit(...args: StripeFullApiOperationArgs<"PostIssuingDisputesDisputeSubmit">): Promise<StripeFullApiOperationResponseMap["PostIssuingDisputesDisputeSubmit"]>;
  PostIssuingPersonalizationDesigns(...args: StripeFullApiOperationArgs<"PostIssuingPersonalizationDesigns">): Promise<StripeFullApiOperationResponseMap["PostIssuingPersonalizationDesigns"]>;
  PostIssuingPersonalizationDesignsPersonalizationDesign(...args: StripeFullApiOperationArgs<"PostIssuingPersonalizationDesignsPersonalizationDesign">): Promise<StripeFullApiOperationResponseMap["PostIssuingPersonalizationDesignsPersonalizationDesign"]>;
  PostIssuingSettlementsSettlement(...args: StripeFullApiOperationArgs<"PostIssuingSettlementsSettlement">): Promise<StripeFullApiOperationResponseMap["PostIssuingSettlementsSettlement"]>;
  PostIssuingTokensToken(...args: StripeFullApiOperationArgs<"PostIssuingTokensToken">): Promise<StripeFullApiOperationResponseMap["PostIssuingTokensToken"]>;
  PostIssuingTransactionsTransaction(...args: StripeFullApiOperationArgs<"PostIssuingTransactionsTransaction">): Promise<StripeFullApiOperationResponseMap["PostIssuingTransactionsTransaction"]>;
  PostLinkAccountSessions(...args: StripeFullApiOperationArgs<"PostLinkAccountSessions">): Promise<StripeFullApiOperationResponseMap["PostLinkAccountSessions"]>;
  PostLinkedAccountsAccountDisconnect(...args: StripeFullApiOperationArgs<"PostLinkedAccountsAccountDisconnect">): Promise<StripeFullApiOperationResponseMap["PostLinkedAccountsAccountDisconnect"]>;
  PostLinkedAccountsAccountRefresh(...args: StripeFullApiOperationArgs<"PostLinkedAccountsAccountRefresh">): Promise<StripeFullApiOperationResponseMap["PostLinkedAccountsAccountRefresh"]>;
  PostPaymentIntents(...args: StripeFullApiOperationArgs<"PostPaymentIntents">): Promise<StripeFullApiOperationResponseMap["PostPaymentIntents"]>;
  PostPaymentIntentsIntent(...args: StripeFullApiOperationArgs<"PostPaymentIntentsIntent">): Promise<StripeFullApiOperationResponseMap["PostPaymentIntentsIntent"]>;
  PostPaymentIntentsIntentApplyCustomerBalance(...args: StripeFullApiOperationArgs<"PostPaymentIntentsIntentApplyCustomerBalance">): Promise<StripeFullApiOperationResponseMap["PostPaymentIntentsIntentApplyCustomerBalance"]>;
  PostPaymentIntentsIntentCancel(...args: StripeFullApiOperationArgs<"PostPaymentIntentsIntentCancel">): Promise<StripeFullApiOperationResponseMap["PostPaymentIntentsIntentCancel"]>;
  PostPaymentIntentsIntentCapture(...args: StripeFullApiOperationArgs<"PostPaymentIntentsIntentCapture">): Promise<StripeFullApiOperationResponseMap["PostPaymentIntentsIntentCapture"]>;
  PostPaymentIntentsIntentConfirm(...args: StripeFullApiOperationArgs<"PostPaymentIntentsIntentConfirm">): Promise<StripeFullApiOperationResponseMap["PostPaymentIntentsIntentConfirm"]>;
  PostPaymentIntentsIntentIncrementAuthorization(...args: StripeFullApiOperationArgs<"PostPaymentIntentsIntentIncrementAuthorization">): Promise<StripeFullApiOperationResponseMap["PostPaymentIntentsIntentIncrementAuthorization"]>;
  PostPaymentIntentsIntentVerifyMicrodeposits(...args: StripeFullApiOperationArgs<"PostPaymentIntentsIntentVerifyMicrodeposits">): Promise<StripeFullApiOperationResponseMap["PostPaymentIntentsIntentVerifyMicrodeposits"]>;
  PostPaymentLinks(...args: StripeFullApiOperationArgs<"PostPaymentLinks">): Promise<StripeFullApiOperationResponseMap["PostPaymentLinks"]>;
  PostPaymentLinksPaymentLink(...args: StripeFullApiOperationArgs<"PostPaymentLinksPaymentLink">): Promise<StripeFullApiOperationResponseMap["PostPaymentLinksPaymentLink"]>;
  PostPaymentMethodConfigurations(...args: StripeFullApiOperationArgs<"PostPaymentMethodConfigurations">): Promise<StripeFullApiOperationResponseMap["PostPaymentMethodConfigurations"]>;
  PostPaymentMethodConfigurationsConfiguration(...args: StripeFullApiOperationArgs<"PostPaymentMethodConfigurationsConfiguration">): Promise<StripeFullApiOperationResponseMap["PostPaymentMethodConfigurationsConfiguration"]>;
  PostPaymentMethodDomains(...args: StripeFullApiOperationArgs<"PostPaymentMethodDomains">): Promise<StripeFullApiOperationResponseMap["PostPaymentMethodDomains"]>;
  PostPaymentMethodDomainsPaymentMethodDomain(...args: StripeFullApiOperationArgs<"PostPaymentMethodDomainsPaymentMethodDomain">): Promise<StripeFullApiOperationResponseMap["PostPaymentMethodDomainsPaymentMethodDomain"]>;
  PostPaymentMethodDomainsPaymentMethodDomainValidate(...args: StripeFullApiOperationArgs<"PostPaymentMethodDomainsPaymentMethodDomainValidate">): Promise<StripeFullApiOperationResponseMap["PostPaymentMethodDomainsPaymentMethodDomainValidate"]>;
  PostPaymentMethods(...args: StripeFullApiOperationArgs<"PostPaymentMethods">): Promise<StripeFullApiOperationResponseMap["PostPaymentMethods"]>;
  PostPaymentMethodsPaymentMethod(...args: StripeFullApiOperationArgs<"PostPaymentMethodsPaymentMethod">): Promise<StripeFullApiOperationResponseMap["PostPaymentMethodsPaymentMethod"]>;
  PostPaymentMethodsPaymentMethodAttach(...args: StripeFullApiOperationArgs<"PostPaymentMethodsPaymentMethodAttach">): Promise<StripeFullApiOperationResponseMap["PostPaymentMethodsPaymentMethodAttach"]>;
  PostPaymentMethodsPaymentMethodDetach(...args: StripeFullApiOperationArgs<"PostPaymentMethodsPaymentMethodDetach">): Promise<StripeFullApiOperationResponseMap["PostPaymentMethodsPaymentMethodDetach"]>;
  PostPaymentRecordsIdReportPaymentAttempt(...args: StripeFullApiOperationArgs<"PostPaymentRecordsIdReportPaymentAttempt">): Promise<StripeFullApiOperationResponseMap["PostPaymentRecordsIdReportPaymentAttempt"]>;
  PostPaymentRecordsIdReportPaymentAttemptCanceled(...args: StripeFullApiOperationArgs<"PostPaymentRecordsIdReportPaymentAttemptCanceled">): Promise<StripeFullApiOperationResponseMap["PostPaymentRecordsIdReportPaymentAttemptCanceled"]>;
  PostPaymentRecordsIdReportPaymentAttemptFailed(...args: StripeFullApiOperationArgs<"PostPaymentRecordsIdReportPaymentAttemptFailed">): Promise<StripeFullApiOperationResponseMap["PostPaymentRecordsIdReportPaymentAttemptFailed"]>;
  PostPaymentRecordsIdReportPaymentAttemptGuaranteed(...args: StripeFullApiOperationArgs<"PostPaymentRecordsIdReportPaymentAttemptGuaranteed">): Promise<StripeFullApiOperationResponseMap["PostPaymentRecordsIdReportPaymentAttemptGuaranteed"]>;
  PostPaymentRecordsIdReportPaymentAttemptInformational(...args: StripeFullApiOperationArgs<"PostPaymentRecordsIdReportPaymentAttemptInformational">): Promise<StripeFullApiOperationResponseMap["PostPaymentRecordsIdReportPaymentAttemptInformational"]>;
  PostPaymentRecordsIdReportRefund(...args: StripeFullApiOperationArgs<"PostPaymentRecordsIdReportRefund">): Promise<StripeFullApiOperationResponseMap["PostPaymentRecordsIdReportRefund"]>;
  PostPaymentRecordsReportPayment(...args: StripeFullApiOperationArgs<"PostPaymentRecordsReportPayment">): Promise<StripeFullApiOperationResponseMap["PostPaymentRecordsReportPayment"]>;
  PostPayouts(...args: StripeFullApiOperationArgs<"PostPayouts">): Promise<StripeFullApiOperationResponseMap["PostPayouts"]>;
  PostPayoutsPayout(...args: StripeFullApiOperationArgs<"PostPayoutsPayout">): Promise<StripeFullApiOperationResponseMap["PostPayoutsPayout"]>;
  PostPayoutsPayoutCancel(...args: StripeFullApiOperationArgs<"PostPayoutsPayoutCancel">): Promise<StripeFullApiOperationResponseMap["PostPayoutsPayoutCancel"]>;
  PostPayoutsPayoutReverse(...args: StripeFullApiOperationArgs<"PostPayoutsPayoutReverse">): Promise<StripeFullApiOperationResponseMap["PostPayoutsPayoutReverse"]>;
  PostPlans(...args: StripeFullApiOperationArgs<"PostPlans">): Promise<StripeFullApiOperationResponseMap["PostPlans"]>;
  PostPlansPlan(...args: StripeFullApiOperationArgs<"PostPlansPlan">): Promise<StripeFullApiOperationResponseMap["PostPlansPlan"]>;
  PostPrices(...args: StripeFullApiOperationArgs<"PostPrices">): Promise<StripeFullApiOperationResponseMap["PostPrices"]>;
  PostPricesPrice(...args: StripeFullApiOperationArgs<"PostPricesPrice">): Promise<StripeFullApiOperationResponseMap["PostPricesPrice"]>;
  PostProducts(...args: StripeFullApiOperationArgs<"PostProducts">): Promise<StripeFullApiOperationResponseMap["PostProducts"]>;
  PostProductsId(...args: StripeFullApiOperationArgs<"PostProductsId">): Promise<StripeFullApiOperationResponseMap["PostProductsId"]>;
  PostProductsProductFeatures(...args: StripeFullApiOperationArgs<"PostProductsProductFeatures">): Promise<StripeFullApiOperationResponseMap["PostProductsProductFeatures"]>;
  PostPromotionCodes(...args: StripeFullApiOperationArgs<"PostPromotionCodes">): Promise<StripeFullApiOperationResponseMap["PostPromotionCodes"]>;
  PostPromotionCodesPromotionCode(...args: StripeFullApiOperationArgs<"PostPromotionCodesPromotionCode">): Promise<StripeFullApiOperationResponseMap["PostPromotionCodesPromotionCode"]>;
  PostQuotes(...args: StripeFullApiOperationArgs<"PostQuotes">): Promise<StripeFullApiOperationResponseMap["PostQuotes"]>;
  PostQuotesQuote(...args: StripeFullApiOperationArgs<"PostQuotesQuote">): Promise<StripeFullApiOperationResponseMap["PostQuotesQuote"]>;
  PostQuotesQuoteAccept(...args: StripeFullApiOperationArgs<"PostQuotesQuoteAccept">): Promise<StripeFullApiOperationResponseMap["PostQuotesQuoteAccept"]>;
  PostQuotesQuoteCancel(...args: StripeFullApiOperationArgs<"PostQuotesQuoteCancel">): Promise<StripeFullApiOperationResponseMap["PostQuotesQuoteCancel"]>;
  PostQuotesQuoteFinalize(...args: StripeFullApiOperationArgs<"PostQuotesQuoteFinalize">): Promise<StripeFullApiOperationResponseMap["PostQuotesQuoteFinalize"]>;
  PostRadarPaymentEvaluations(...args: StripeFullApiOperationArgs<"PostRadarPaymentEvaluations">): Promise<StripeFullApiOperationResponseMap["PostRadarPaymentEvaluations"]>;
  PostRadarValueListItems(...args: StripeFullApiOperationArgs<"PostRadarValueListItems">): Promise<StripeFullApiOperationResponseMap["PostRadarValueListItems"]>;
  PostRadarValueLists(...args: StripeFullApiOperationArgs<"PostRadarValueLists">): Promise<StripeFullApiOperationResponseMap["PostRadarValueLists"]>;
  PostRadarValueListsValueList(...args: StripeFullApiOperationArgs<"PostRadarValueListsValueList">): Promise<StripeFullApiOperationResponseMap["PostRadarValueListsValueList"]>;
  PostRefunds(...args: StripeFullApiOperationArgs<"PostRefunds">): Promise<StripeFullApiOperationResponseMap["PostRefunds"]>;
  PostRefundsRefund(...args: StripeFullApiOperationArgs<"PostRefundsRefund">): Promise<StripeFullApiOperationResponseMap["PostRefundsRefund"]>;
  PostRefundsRefundCancel(...args: StripeFullApiOperationArgs<"PostRefundsRefundCancel">): Promise<StripeFullApiOperationResponseMap["PostRefundsRefundCancel"]>;
  PostReportingReportRuns(...args: StripeFullApiOperationArgs<"PostReportingReportRuns">): Promise<StripeFullApiOperationResponseMap["PostReportingReportRuns"]>;
  PostReviewsReviewApprove(...args: StripeFullApiOperationArgs<"PostReviewsReviewApprove">): Promise<StripeFullApiOperationResponseMap["PostReviewsReviewApprove"]>;
  PostSetupIntents(...args: StripeFullApiOperationArgs<"PostSetupIntents">): Promise<StripeFullApiOperationResponseMap["PostSetupIntents"]>;
  PostSetupIntentsIntent(...args: StripeFullApiOperationArgs<"PostSetupIntentsIntent">): Promise<StripeFullApiOperationResponseMap["PostSetupIntentsIntent"]>;
  PostSetupIntentsIntentCancel(...args: StripeFullApiOperationArgs<"PostSetupIntentsIntentCancel">): Promise<StripeFullApiOperationResponseMap["PostSetupIntentsIntentCancel"]>;
}

export const StripeFullApiV106GeneratedFunctionNames = [
  "PostInvoicesInvoiceMarkUncollectible",
  "PostInvoicesInvoicePay",
  "PostInvoicesInvoiceRemoveLines",
  "PostInvoicesInvoiceSend",
  "PostInvoicesInvoiceUpdateLines",
  "PostInvoicesInvoiceVoid",
  "PostIssuingAuthorizationsAuthorization",
  "PostIssuingAuthorizationsAuthorizationApprove",
  "PostIssuingAuthorizationsAuthorizationDecline",
  "PostIssuingCardholders",
  "PostIssuingCardholdersCardholder",
  "PostIssuingCards",
  "PostIssuingCardsCard",
  "PostIssuingDisputes",
  "PostIssuingDisputesDispute",
  "PostIssuingDisputesDisputeSubmit",
  "PostIssuingPersonalizationDesigns",
  "PostIssuingPersonalizationDesignsPersonalizationDesign",
  "PostIssuingSettlementsSettlement",
  "PostIssuingTokensToken",
  "PostIssuingTransactionsTransaction",
  "PostLinkAccountSessions",
  "PostLinkedAccountsAccountDisconnect",
  "PostLinkedAccountsAccountRefresh",
  "PostPaymentIntents",
  "PostPaymentIntentsIntent",
  "PostPaymentIntentsIntentApplyCustomerBalance",
  "PostPaymentIntentsIntentCancel",
  "PostPaymentIntentsIntentCapture",
  "PostPaymentIntentsIntentConfirm",
  "PostPaymentIntentsIntentIncrementAuthorization",
  "PostPaymentIntentsIntentVerifyMicrodeposits",
  "PostPaymentLinks",
  "PostPaymentLinksPaymentLink",
  "PostPaymentMethodConfigurations",
  "PostPaymentMethodConfigurationsConfiguration",
  "PostPaymentMethodDomains",
  "PostPaymentMethodDomainsPaymentMethodDomain",
  "PostPaymentMethodDomainsPaymentMethodDomainValidate",
  "PostPaymentMethods",
  "PostPaymentMethodsPaymentMethod",
  "PostPaymentMethodsPaymentMethodAttach",
  "PostPaymentMethodsPaymentMethodDetach",
  "PostPaymentRecordsIdReportPaymentAttempt",
  "PostPaymentRecordsIdReportPaymentAttemptCanceled",
  "PostPaymentRecordsIdReportPaymentAttemptFailed",
  "PostPaymentRecordsIdReportPaymentAttemptGuaranteed",
  "PostPaymentRecordsIdReportPaymentAttemptInformational",
  "PostPaymentRecordsIdReportRefund",
  "PostPaymentRecordsReportPayment",
  "PostPayouts",
  "PostPayoutsPayout",
  "PostPayoutsPayoutCancel",
  "PostPayoutsPayoutReverse",
  "PostPlans",
  "PostPlansPlan",
  "PostPrices",
  "PostPricesPrice",
  "PostProducts",
  "PostProductsId",
  "PostProductsProductFeatures",
  "PostPromotionCodes",
  "PostPromotionCodesPromotionCode",
  "PostQuotes",
  "PostQuotesQuote",
  "PostQuotesQuoteAccept",
  "PostQuotesQuoteCancel",
  "PostQuotesQuoteFinalize",
  "PostRadarPaymentEvaluations",
  "PostRadarValueListItems",
  "PostRadarValueLists",
  "PostRadarValueListsValueList",
  "PostRefunds",
  "PostRefundsRefund",
  "PostRefundsRefundCancel",
  "PostReportingReportRuns",
  "PostReviewsReviewApprove",
  "PostSetupIntents",
  "PostSetupIntentsIntent",
  "PostSetupIntentsIntentCancel"
] as const satisfies readonly (keyof StripeFullApiV106GeneratedClient)[];

export function createStripeFullApiV106GeneratedClient(
  callOperation: StripeGeneratedOperationCaller,
): StripeFullApiV106GeneratedClient {
  return {
    PostInvoicesInvoiceMarkUncollectible: (...args) => callOperation("PostInvoicesInvoiceMarkUncollectible", ...(args as StripeFullApiOperationArgs<"PostInvoicesInvoiceMarkUncollectible">)),
    PostInvoicesInvoicePay: (...args) => callOperation("PostInvoicesInvoicePay", ...(args as StripeFullApiOperationArgs<"PostInvoicesInvoicePay">)),
    PostInvoicesInvoiceRemoveLines: (...args) => callOperation("PostInvoicesInvoiceRemoveLines", ...(args as StripeFullApiOperationArgs<"PostInvoicesInvoiceRemoveLines">)),
    PostInvoicesInvoiceSend: (...args) => callOperation("PostInvoicesInvoiceSend", ...(args as StripeFullApiOperationArgs<"PostInvoicesInvoiceSend">)),
    PostInvoicesInvoiceUpdateLines: (...args) => callOperation("PostInvoicesInvoiceUpdateLines", ...(args as StripeFullApiOperationArgs<"PostInvoicesInvoiceUpdateLines">)),
    PostInvoicesInvoiceVoid: (...args) => callOperation("PostInvoicesInvoiceVoid", ...(args as StripeFullApiOperationArgs<"PostInvoicesInvoiceVoid">)),
    PostIssuingAuthorizationsAuthorization: (...args) => callOperation("PostIssuingAuthorizationsAuthorization", ...(args as StripeFullApiOperationArgs<"PostIssuingAuthorizationsAuthorization">)),
    PostIssuingAuthorizationsAuthorizationApprove: (...args) => callOperation("PostIssuingAuthorizationsAuthorizationApprove", ...(args as StripeFullApiOperationArgs<"PostIssuingAuthorizationsAuthorizationApprove">)),
    PostIssuingAuthorizationsAuthorizationDecline: (...args) => callOperation("PostIssuingAuthorizationsAuthorizationDecline", ...(args as StripeFullApiOperationArgs<"PostIssuingAuthorizationsAuthorizationDecline">)),
    PostIssuingCardholders: (...args) => callOperation("PostIssuingCardholders", ...(args as StripeFullApiOperationArgs<"PostIssuingCardholders">)),
    PostIssuingCardholdersCardholder: (...args) => callOperation("PostIssuingCardholdersCardholder", ...(args as StripeFullApiOperationArgs<"PostIssuingCardholdersCardholder">)),
    PostIssuingCards: (...args) => callOperation("PostIssuingCards", ...(args as StripeFullApiOperationArgs<"PostIssuingCards">)),
    PostIssuingCardsCard: (...args) => callOperation("PostIssuingCardsCard", ...(args as StripeFullApiOperationArgs<"PostIssuingCardsCard">)),
    PostIssuingDisputes: (...args) => callOperation("PostIssuingDisputes", ...(args as StripeFullApiOperationArgs<"PostIssuingDisputes">)),
    PostIssuingDisputesDispute: (...args) => callOperation("PostIssuingDisputesDispute", ...(args as StripeFullApiOperationArgs<"PostIssuingDisputesDispute">)),
    PostIssuingDisputesDisputeSubmit: (...args) => callOperation("PostIssuingDisputesDisputeSubmit", ...(args as StripeFullApiOperationArgs<"PostIssuingDisputesDisputeSubmit">)),
    PostIssuingPersonalizationDesigns: (...args) => callOperation("PostIssuingPersonalizationDesigns", ...(args as StripeFullApiOperationArgs<"PostIssuingPersonalizationDesigns">)),
    PostIssuingPersonalizationDesignsPersonalizationDesign: (...args) => callOperation("PostIssuingPersonalizationDesignsPersonalizationDesign", ...(args as StripeFullApiOperationArgs<"PostIssuingPersonalizationDesignsPersonalizationDesign">)),
    PostIssuingSettlementsSettlement: (...args) => callOperation("PostIssuingSettlementsSettlement", ...(args as StripeFullApiOperationArgs<"PostIssuingSettlementsSettlement">)),
    PostIssuingTokensToken: (...args) => callOperation("PostIssuingTokensToken", ...(args as StripeFullApiOperationArgs<"PostIssuingTokensToken">)),
    PostIssuingTransactionsTransaction: (...args) => callOperation("PostIssuingTransactionsTransaction", ...(args as StripeFullApiOperationArgs<"PostIssuingTransactionsTransaction">)),
    PostLinkAccountSessions: (...args) => callOperation("PostLinkAccountSessions", ...(args as StripeFullApiOperationArgs<"PostLinkAccountSessions">)),
    PostLinkedAccountsAccountDisconnect: (...args) => callOperation("PostLinkedAccountsAccountDisconnect", ...(args as StripeFullApiOperationArgs<"PostLinkedAccountsAccountDisconnect">)),
    PostLinkedAccountsAccountRefresh: (...args) => callOperation("PostLinkedAccountsAccountRefresh", ...(args as StripeFullApiOperationArgs<"PostLinkedAccountsAccountRefresh">)),
    PostPaymentIntents: (...args) => callOperation("PostPaymentIntents", ...(args as StripeFullApiOperationArgs<"PostPaymentIntents">)),
    PostPaymentIntentsIntent: (...args) => callOperation("PostPaymentIntentsIntent", ...(args as StripeFullApiOperationArgs<"PostPaymentIntentsIntent">)),
    PostPaymentIntentsIntentApplyCustomerBalance: (...args) => callOperation("PostPaymentIntentsIntentApplyCustomerBalance", ...(args as StripeFullApiOperationArgs<"PostPaymentIntentsIntentApplyCustomerBalance">)),
    PostPaymentIntentsIntentCancel: (...args) => callOperation("PostPaymentIntentsIntentCancel", ...(args as StripeFullApiOperationArgs<"PostPaymentIntentsIntentCancel">)),
    PostPaymentIntentsIntentCapture: (...args) => callOperation("PostPaymentIntentsIntentCapture", ...(args as StripeFullApiOperationArgs<"PostPaymentIntentsIntentCapture">)),
    PostPaymentIntentsIntentConfirm: (...args) => callOperation("PostPaymentIntentsIntentConfirm", ...(args as StripeFullApiOperationArgs<"PostPaymentIntentsIntentConfirm">)),
    PostPaymentIntentsIntentIncrementAuthorization: (...args) => callOperation("PostPaymentIntentsIntentIncrementAuthorization", ...(args as StripeFullApiOperationArgs<"PostPaymentIntentsIntentIncrementAuthorization">)),
    PostPaymentIntentsIntentVerifyMicrodeposits: (...args) => callOperation("PostPaymentIntentsIntentVerifyMicrodeposits", ...(args as StripeFullApiOperationArgs<"PostPaymentIntentsIntentVerifyMicrodeposits">)),
    PostPaymentLinks: (...args) => callOperation("PostPaymentLinks", ...(args as StripeFullApiOperationArgs<"PostPaymentLinks">)),
    PostPaymentLinksPaymentLink: (...args) => callOperation("PostPaymentLinksPaymentLink", ...(args as StripeFullApiOperationArgs<"PostPaymentLinksPaymentLink">)),
    PostPaymentMethodConfigurations: (...args) => callOperation("PostPaymentMethodConfigurations", ...(args as StripeFullApiOperationArgs<"PostPaymentMethodConfigurations">)),
    PostPaymentMethodConfigurationsConfiguration: (...args) => callOperation("PostPaymentMethodConfigurationsConfiguration", ...(args as StripeFullApiOperationArgs<"PostPaymentMethodConfigurationsConfiguration">)),
    PostPaymentMethodDomains: (...args) => callOperation("PostPaymentMethodDomains", ...(args as StripeFullApiOperationArgs<"PostPaymentMethodDomains">)),
    PostPaymentMethodDomainsPaymentMethodDomain: (...args) => callOperation("PostPaymentMethodDomainsPaymentMethodDomain", ...(args as StripeFullApiOperationArgs<"PostPaymentMethodDomainsPaymentMethodDomain">)),
    PostPaymentMethodDomainsPaymentMethodDomainValidate: (...args) => callOperation("PostPaymentMethodDomainsPaymentMethodDomainValidate", ...(args as StripeFullApiOperationArgs<"PostPaymentMethodDomainsPaymentMethodDomainValidate">)),
    PostPaymentMethods: (...args) => callOperation("PostPaymentMethods", ...(args as StripeFullApiOperationArgs<"PostPaymentMethods">)),
    PostPaymentMethodsPaymentMethod: (...args) => callOperation("PostPaymentMethodsPaymentMethod", ...(args as StripeFullApiOperationArgs<"PostPaymentMethodsPaymentMethod">)),
    PostPaymentMethodsPaymentMethodAttach: (...args) => callOperation("PostPaymentMethodsPaymentMethodAttach", ...(args as StripeFullApiOperationArgs<"PostPaymentMethodsPaymentMethodAttach">)),
    PostPaymentMethodsPaymentMethodDetach: (...args) => callOperation("PostPaymentMethodsPaymentMethodDetach", ...(args as StripeFullApiOperationArgs<"PostPaymentMethodsPaymentMethodDetach">)),
    PostPaymentRecordsIdReportPaymentAttempt: (...args) => callOperation("PostPaymentRecordsIdReportPaymentAttempt", ...(args as StripeFullApiOperationArgs<"PostPaymentRecordsIdReportPaymentAttempt">)),
    PostPaymentRecordsIdReportPaymentAttemptCanceled: (...args) => callOperation("PostPaymentRecordsIdReportPaymentAttemptCanceled", ...(args as StripeFullApiOperationArgs<"PostPaymentRecordsIdReportPaymentAttemptCanceled">)),
    PostPaymentRecordsIdReportPaymentAttemptFailed: (...args) => callOperation("PostPaymentRecordsIdReportPaymentAttemptFailed", ...(args as StripeFullApiOperationArgs<"PostPaymentRecordsIdReportPaymentAttemptFailed">)),
    PostPaymentRecordsIdReportPaymentAttemptGuaranteed: (...args) => callOperation("PostPaymentRecordsIdReportPaymentAttemptGuaranteed", ...(args as StripeFullApiOperationArgs<"PostPaymentRecordsIdReportPaymentAttemptGuaranteed">)),
    PostPaymentRecordsIdReportPaymentAttemptInformational: (...args) => callOperation("PostPaymentRecordsIdReportPaymentAttemptInformational", ...(args as StripeFullApiOperationArgs<"PostPaymentRecordsIdReportPaymentAttemptInformational">)),
    PostPaymentRecordsIdReportRefund: (...args) => callOperation("PostPaymentRecordsIdReportRefund", ...(args as StripeFullApiOperationArgs<"PostPaymentRecordsIdReportRefund">)),
    PostPaymentRecordsReportPayment: (...args) => callOperation("PostPaymentRecordsReportPayment", ...(args as StripeFullApiOperationArgs<"PostPaymentRecordsReportPayment">)),
    PostPayouts: (...args) => callOperation("PostPayouts", ...(args as StripeFullApiOperationArgs<"PostPayouts">)),
    PostPayoutsPayout: (...args) => callOperation("PostPayoutsPayout", ...(args as StripeFullApiOperationArgs<"PostPayoutsPayout">)),
    PostPayoutsPayoutCancel: (...args) => callOperation("PostPayoutsPayoutCancel", ...(args as StripeFullApiOperationArgs<"PostPayoutsPayoutCancel">)),
    PostPayoutsPayoutReverse: (...args) => callOperation("PostPayoutsPayoutReverse", ...(args as StripeFullApiOperationArgs<"PostPayoutsPayoutReverse">)),
    PostPlans: (...args) => callOperation("PostPlans", ...(args as StripeFullApiOperationArgs<"PostPlans">)),
    PostPlansPlan: (...args) => callOperation("PostPlansPlan", ...(args as StripeFullApiOperationArgs<"PostPlansPlan">)),
    PostPrices: (...args) => callOperation("PostPrices", ...(args as StripeFullApiOperationArgs<"PostPrices">)),
    PostPricesPrice: (...args) => callOperation("PostPricesPrice", ...(args as StripeFullApiOperationArgs<"PostPricesPrice">)),
    PostProducts: (...args) => callOperation("PostProducts", ...(args as StripeFullApiOperationArgs<"PostProducts">)),
    PostProductsId: (...args) => callOperation("PostProductsId", ...(args as StripeFullApiOperationArgs<"PostProductsId">)),
    PostProductsProductFeatures: (...args) => callOperation("PostProductsProductFeatures", ...(args as StripeFullApiOperationArgs<"PostProductsProductFeatures">)),
    PostPromotionCodes: (...args) => callOperation("PostPromotionCodes", ...(args as StripeFullApiOperationArgs<"PostPromotionCodes">)),
    PostPromotionCodesPromotionCode: (...args) => callOperation("PostPromotionCodesPromotionCode", ...(args as StripeFullApiOperationArgs<"PostPromotionCodesPromotionCode">)),
    PostQuotes: (...args) => callOperation("PostQuotes", ...(args as StripeFullApiOperationArgs<"PostQuotes">)),
    PostQuotesQuote: (...args) => callOperation("PostQuotesQuote", ...(args as StripeFullApiOperationArgs<"PostQuotesQuote">)),
    PostQuotesQuoteAccept: (...args) => callOperation("PostQuotesQuoteAccept", ...(args as StripeFullApiOperationArgs<"PostQuotesQuoteAccept">)),
    PostQuotesQuoteCancel: (...args) => callOperation("PostQuotesQuoteCancel", ...(args as StripeFullApiOperationArgs<"PostQuotesQuoteCancel">)),
    PostQuotesQuoteFinalize: (...args) => callOperation("PostQuotesQuoteFinalize", ...(args as StripeFullApiOperationArgs<"PostQuotesQuoteFinalize">)),
    PostRadarPaymentEvaluations: (...args) => callOperation("PostRadarPaymentEvaluations", ...(args as StripeFullApiOperationArgs<"PostRadarPaymentEvaluations">)),
    PostRadarValueListItems: (...args) => callOperation("PostRadarValueListItems", ...(args as StripeFullApiOperationArgs<"PostRadarValueListItems">)),
    PostRadarValueLists: (...args) => callOperation("PostRadarValueLists", ...(args as StripeFullApiOperationArgs<"PostRadarValueLists">)),
    PostRadarValueListsValueList: (...args) => callOperation("PostRadarValueListsValueList", ...(args as StripeFullApiOperationArgs<"PostRadarValueListsValueList">)),
    PostRefunds: (...args) => callOperation("PostRefunds", ...(args as StripeFullApiOperationArgs<"PostRefunds">)),
    PostRefundsRefund: (...args) => callOperation("PostRefundsRefund", ...(args as StripeFullApiOperationArgs<"PostRefundsRefund">)),
    PostRefundsRefundCancel: (...args) => callOperation("PostRefundsRefundCancel", ...(args as StripeFullApiOperationArgs<"PostRefundsRefundCancel">)),
    PostReportingReportRuns: (...args) => callOperation("PostReportingReportRuns", ...(args as StripeFullApiOperationArgs<"PostReportingReportRuns">)),
    PostReviewsReviewApprove: (...args) => callOperation("PostReviewsReviewApprove", ...(args as StripeFullApiOperationArgs<"PostReviewsReviewApprove">)),
    PostSetupIntents: (...args) => callOperation("PostSetupIntents", ...(args as StripeFullApiOperationArgs<"PostSetupIntents">)),
    PostSetupIntentsIntent: (...args) => callOperation("PostSetupIntentsIntent", ...(args as StripeFullApiOperationArgs<"PostSetupIntentsIntent">)),
    PostSetupIntentsIntentCancel: (...args) => callOperation("PostSetupIntentsIntentCancel", ...(args as StripeFullApiOperationArgs<"PostSetupIntentsIntentCancel">)),
  };
}
