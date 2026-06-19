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
export const StripeFullApiV107OperationKeys = [
  "PostSetupIntentsIntentConfirm",
  "PostSetupIntentsIntentVerifyMicrodeposits",
  "PostShippingRates",
  "PostShippingRatesShippingRateToken",
  "PostSigmaSavedQueriesId",
  "PostSources",
  "PostSourcesSource",
  "PostSourcesSourceVerify",
  "PostSubscriptionItems",
  "PostSubscriptionItemsItem",
  "PostSubscriptions",
  "PostSubscriptionSchedules",
  "PostSubscriptionSchedulesSchedule",
  "PostSubscriptionSchedulesScheduleCancel",
  "PostSubscriptionSchedulesScheduleRelease",
  "PostSubscriptionsSubscriptionExposedId",
  "PostSubscriptionsSubscriptionMigrate",
  "PostSubscriptionsSubscriptionResume",
  "PostTaxCalculations",
  "PostTaxIds",
  "PostTaxRates",
  "PostTaxRatesTaxRate",
  "PostTaxRegistrations",
  "PostTaxRegistrationsId",
  "PostTaxSettings",
  "PostTaxTransactionsCreateFromCalculation",
  "PostTaxTransactionsCreateReversal",
  "PostTerminalConfigurations",
  "PostTerminalConfigurationsConfiguration",
  "PostTerminalConnectionTokens",
  "PostTerminalLocations",
  "PostTerminalLocationsLocation",
  "PostTerminalOnboardingLinks",
  "PostTerminalReaders",
  "PostTerminalReadersReader",
  "PostTerminalReadersReaderCancelAction",
  "PostTerminalReadersReaderCollectInputs",
  "PostTerminalReadersReaderCollectPaymentMethod",
  "PostTerminalReadersReaderConfirmPaymentIntent",
  "PostTerminalReadersReaderProcessPaymentIntent",
  "PostTerminalReadersReaderProcessSetupIntent",
  "PostTerminalReadersReaderRefundPayment",
  "PostTerminalReadersReaderSetReaderDisplay",
  "PostTerminalRefunds",
  "PostTestHelpersConfirmationTokens",
  "PostTestHelpersCustomersCustomerFundCashBalance",
  "PostTestHelpersIssuingAuthorizations",
  "PostTestHelpersIssuingAuthorizationsAuthorizationCapture",
  "PostTestHelpersIssuingAuthorizationsAuthorizationExpire",
  "PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmount",
  "PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespond",
  "PostTestHelpersIssuingAuthorizationsAuthorizationIncrement",
  "PostTestHelpersIssuingAuthorizationsAuthorizationReverse",
  "PostTestHelpersIssuingCardsCardShippingDeliver",
  "PostTestHelpersIssuingCardsCardShippingFail",
  "PostTestHelpersIssuingCardsCardShippingReturn",
  "PostTestHelpersIssuingCardsCardShippingShip",
  "PostTestHelpersIssuingCardsCardShippingSubmit",
  "PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignActivate",
  "PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivate",
  "PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignReject",
  "PostTestHelpersIssuingSettlements",
  "PostTestHelpersIssuingSettlementsSettlementComplete",
  "PostTestHelpersIssuingTransactionsCreateForceCapture",
  "PostTestHelpersIssuingTransactionsCreateUnlinkedRefund",
  "PostTestHelpersIssuingTransactionsTransactionRefund",
  "PostTestHelpersRefundsRefundExpire",
  "PostTestHelpersTerminalReadersReaderPresentPaymentMethod",
  "PostTestHelpersTerminalReadersReaderSucceedInputCollection",
  "PostTestHelpersTerminalReadersReaderTimeoutInputCollection",
  "PostTestHelpersTestClocks",
  "PostTestHelpersTestClocksTestClockAdvance",
  "PostTestHelpersTreasuryInboundTransfersIdFail",
  "PostTestHelpersTreasuryInboundTransfersIdReturn",
  "PostTestHelpersTreasuryInboundTransfersIdSucceed",
  "PostTestHelpersTreasuryOutboundPaymentsId",
  "PostTestHelpersTreasuryOutboundPaymentsIdFail",
  "PostTestHelpersTreasuryOutboundPaymentsIdPost",
  "PostTestHelpersTreasuryOutboundPaymentsIdReturn",
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransfer"
] as const;
export type StripeFullApiV107OperationKey = typeof StripeFullApiV107OperationKeys[number];
// End hardened literal operation keys.

export interface StripeFullApiV107OperationPathParamMap {
  "PostSetupIntentsIntentConfirm": { "intent": StripeFullApiPathParamValue };
  "PostSetupIntentsIntentVerifyMicrodeposits": { "intent": StripeFullApiPathParamValue };
  "PostShippingRates": {};
  "PostShippingRatesShippingRateToken": { "shipping_rate_token": StripeFullApiPathParamValue };
  "PostSigmaSavedQueriesId": { "id": StripeFullApiPathParamValue };
  "PostSources": {};
  "PostSourcesSource": { "source": StripeFullApiPathParamValue };
  "PostSourcesSourceVerify": { "source": StripeFullApiPathParamValue };
  "PostSubscriptionItems": {};
  "PostSubscriptionItemsItem": { "item": StripeFullApiPathParamValue };
  "PostSubscriptions": {};
  "PostSubscriptionSchedules": {};
  "PostSubscriptionSchedulesSchedule": { "schedule": StripeFullApiPathParamValue };
  "PostSubscriptionSchedulesScheduleCancel": { "schedule": StripeFullApiPathParamValue };
  "PostSubscriptionSchedulesScheduleRelease": { "schedule": StripeFullApiPathParamValue };
  "PostSubscriptionsSubscriptionExposedId": { "subscription_exposed_id": StripeFullApiPathParamValue };
  "PostSubscriptionsSubscriptionMigrate": { "subscription": StripeFullApiPathParamValue };
  "PostSubscriptionsSubscriptionResume": { "subscription": StripeFullApiPathParamValue };
  "PostTaxCalculations": {};
  "PostTaxIds": {};
  "PostTaxRates": {};
  "PostTaxRatesTaxRate": { "tax_rate": StripeFullApiPathParamValue };
  "PostTaxRegistrations": {};
  "PostTaxRegistrationsId": { "id": StripeFullApiPathParamValue };
  "PostTaxSettings": {};
  "PostTaxTransactionsCreateFromCalculation": {};
  "PostTaxTransactionsCreateReversal": {};
  "PostTerminalConfigurations": {};
  "PostTerminalConfigurationsConfiguration": { "configuration": StripeFullApiPathParamValue };
  "PostTerminalConnectionTokens": {};
  "PostTerminalLocations": {};
  "PostTerminalLocationsLocation": { "location": StripeFullApiPathParamValue };
  "PostTerminalOnboardingLinks": {};
  "PostTerminalReaders": {};
  "PostTerminalReadersReader": { "reader": StripeFullApiPathParamValue };
  "PostTerminalReadersReaderCancelAction": { "reader": StripeFullApiPathParamValue };
  "PostTerminalReadersReaderCollectInputs": { "reader": StripeFullApiPathParamValue };
  "PostTerminalReadersReaderCollectPaymentMethod": { "reader": StripeFullApiPathParamValue };
  "PostTerminalReadersReaderConfirmPaymentIntent": { "reader": StripeFullApiPathParamValue };
  "PostTerminalReadersReaderProcessPaymentIntent": { "reader": StripeFullApiPathParamValue };
  "PostTerminalReadersReaderProcessSetupIntent": { "reader": StripeFullApiPathParamValue };
  "PostTerminalReadersReaderRefundPayment": { "reader": StripeFullApiPathParamValue };
  "PostTerminalReadersReaderSetReaderDisplay": { "reader": StripeFullApiPathParamValue };
  "PostTerminalRefunds": {};
  "PostTestHelpersConfirmationTokens": {};
  "PostTestHelpersCustomersCustomerFundCashBalance": { "customer": StripeFullApiPathParamValue };
  "PostTestHelpersIssuingAuthorizations": {};
  "PostTestHelpersIssuingAuthorizationsAuthorizationCapture": { "authorization": StripeFullApiPathParamValue };
  "PostTestHelpersIssuingAuthorizationsAuthorizationExpire": { "authorization": StripeFullApiPathParamValue };
  "PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmount": { "authorization": StripeFullApiPathParamValue };
  "PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespond": { "authorization": StripeFullApiPathParamValue };
  "PostTestHelpersIssuingAuthorizationsAuthorizationIncrement": { "authorization": StripeFullApiPathParamValue };
  "PostTestHelpersIssuingAuthorizationsAuthorizationReverse": { "authorization": StripeFullApiPathParamValue };
  "PostTestHelpersIssuingCardsCardShippingDeliver": { "card": StripeFullApiPathParamValue };
  "PostTestHelpersIssuingCardsCardShippingFail": { "card": StripeFullApiPathParamValue };
  "PostTestHelpersIssuingCardsCardShippingReturn": { "card": StripeFullApiPathParamValue };
  "PostTestHelpersIssuingCardsCardShippingShip": { "card": StripeFullApiPathParamValue };
  "PostTestHelpersIssuingCardsCardShippingSubmit": { "card": StripeFullApiPathParamValue };
  "PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignActivate": { "personalization_design": StripeFullApiPathParamValue };
  "PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivate": { "personalization_design": StripeFullApiPathParamValue };
  "PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignReject": { "personalization_design": StripeFullApiPathParamValue };
  "PostTestHelpersIssuingSettlements": {};
  "PostTestHelpersIssuingSettlementsSettlementComplete": { "settlement": StripeFullApiPathParamValue };
  "PostTestHelpersIssuingTransactionsCreateForceCapture": {};
  "PostTestHelpersIssuingTransactionsCreateUnlinkedRefund": {};
  "PostTestHelpersIssuingTransactionsTransactionRefund": { "transaction": StripeFullApiPathParamValue };
  "PostTestHelpersRefundsRefundExpire": { "refund": StripeFullApiPathParamValue };
  "PostTestHelpersTerminalReadersReaderPresentPaymentMethod": { "reader": StripeFullApiPathParamValue };
  "PostTestHelpersTerminalReadersReaderSucceedInputCollection": { "reader": StripeFullApiPathParamValue };
  "PostTestHelpersTerminalReadersReaderTimeoutInputCollection": { "reader": StripeFullApiPathParamValue };
  "PostTestHelpersTestClocks": {};
  "PostTestHelpersTestClocksTestClockAdvance": { "test_clock": StripeFullApiPathParamValue };
  "PostTestHelpersTreasuryInboundTransfersIdFail": { "id": StripeFullApiPathParamValue };
  "PostTestHelpersTreasuryInboundTransfersIdReturn": { "id": StripeFullApiPathParamValue };
  "PostTestHelpersTreasuryInboundTransfersIdSucceed": { "id": StripeFullApiPathParamValue };
  "PostTestHelpersTreasuryOutboundPaymentsId": { "id": StripeFullApiPathParamValue };
  "PostTestHelpersTreasuryOutboundPaymentsIdFail": { "id": StripeFullApiPathParamValue };
  "PostTestHelpersTreasuryOutboundPaymentsIdPost": { "id": StripeFullApiPathParamValue };
  "PostTestHelpersTreasuryOutboundPaymentsIdReturn": { "id": StripeFullApiPathParamValue };
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransfer": { "outbound_transfer": StripeFullApiPathParamValue };
}

export interface StripeFullApiV107OperationRequestMap {
  "PostSetupIntentsIntentConfirm": StripeFullApiOperationInput<"PostSetupIntentsIntentConfirm">;
  "PostSetupIntentsIntentVerifyMicrodeposits": StripeFullApiOperationInput<"PostSetupIntentsIntentVerifyMicrodeposits">;
  "PostShippingRates": StripeFullApiOperationInput<"PostShippingRates">;
  "PostShippingRatesShippingRateToken": StripeFullApiOperationInput<"PostShippingRatesShippingRateToken">;
  "PostSigmaSavedQueriesId": StripeFullApiOperationInput<"PostSigmaSavedQueriesId">;
  "PostSources": StripeFullApiOperationInput<"PostSources">;
  "PostSourcesSource": StripeFullApiOperationInput<"PostSourcesSource">;
  "PostSourcesSourceVerify": StripeFullApiOperationInput<"PostSourcesSourceVerify">;
  "PostSubscriptionItems": StripeFullApiOperationInput<"PostSubscriptionItems">;
  "PostSubscriptionItemsItem": StripeFullApiOperationInput<"PostSubscriptionItemsItem">;
  "PostSubscriptions": StripeFullApiOperationInput<"PostSubscriptions">;
  "PostSubscriptionSchedules": StripeFullApiOperationInput<"PostSubscriptionSchedules">;
  "PostSubscriptionSchedulesSchedule": StripeFullApiOperationInput<"PostSubscriptionSchedulesSchedule">;
  "PostSubscriptionSchedulesScheduleCancel": StripeFullApiOperationInput<"PostSubscriptionSchedulesScheduleCancel">;
  "PostSubscriptionSchedulesScheduleRelease": StripeFullApiOperationInput<"PostSubscriptionSchedulesScheduleRelease">;
  "PostSubscriptionsSubscriptionExposedId": StripeFullApiOperationInput<"PostSubscriptionsSubscriptionExposedId">;
  "PostSubscriptionsSubscriptionMigrate": StripeFullApiOperationInput<"PostSubscriptionsSubscriptionMigrate">;
  "PostSubscriptionsSubscriptionResume": StripeFullApiOperationInput<"PostSubscriptionsSubscriptionResume">;
  "PostTaxCalculations": StripeFullApiOperationInput<"PostTaxCalculations">;
  "PostTaxIds": StripeFullApiOperationInput<"PostTaxIds">;
  "PostTaxRates": StripeFullApiOperationInput<"PostTaxRates">;
  "PostTaxRatesTaxRate": StripeFullApiOperationInput<"PostTaxRatesTaxRate">;
  "PostTaxRegistrations": StripeFullApiOperationInput<"PostTaxRegistrations">;
  "PostTaxRegistrationsId": StripeFullApiOperationInput<"PostTaxRegistrationsId">;
  "PostTaxSettings": StripeFullApiOperationInput<"PostTaxSettings">;
  "PostTaxTransactionsCreateFromCalculation": StripeFullApiOperationInput<"PostTaxTransactionsCreateFromCalculation">;
  "PostTaxTransactionsCreateReversal": StripeFullApiOperationInput<"PostTaxTransactionsCreateReversal">;
  "PostTerminalConfigurations": StripeFullApiOperationInput<"PostTerminalConfigurations">;
  "PostTerminalConfigurationsConfiguration": StripeFullApiOperationInput<"PostTerminalConfigurationsConfiguration">;
  "PostTerminalConnectionTokens": StripeFullApiOperationInput<"PostTerminalConnectionTokens">;
  "PostTerminalLocations": StripeFullApiOperationInput<"PostTerminalLocations">;
  "PostTerminalLocationsLocation": StripeFullApiOperationInput<"PostTerminalLocationsLocation">;
  "PostTerminalOnboardingLinks": StripeFullApiOperationInput<"PostTerminalOnboardingLinks">;
  "PostTerminalReaders": StripeFullApiOperationInput<"PostTerminalReaders">;
  "PostTerminalReadersReader": StripeFullApiOperationInput<"PostTerminalReadersReader">;
  "PostTerminalReadersReaderCancelAction": StripeFullApiOperationInput<"PostTerminalReadersReaderCancelAction">;
  "PostTerminalReadersReaderCollectInputs": StripeFullApiOperationInput<"PostTerminalReadersReaderCollectInputs">;
  "PostTerminalReadersReaderCollectPaymentMethod": StripeFullApiOperationInput<"PostTerminalReadersReaderCollectPaymentMethod">;
  "PostTerminalReadersReaderConfirmPaymentIntent": StripeFullApiOperationInput<"PostTerminalReadersReaderConfirmPaymentIntent">;
  "PostTerminalReadersReaderProcessPaymentIntent": StripeFullApiOperationInput<"PostTerminalReadersReaderProcessPaymentIntent">;
  "PostTerminalReadersReaderProcessSetupIntent": StripeFullApiOperationInput<"PostTerminalReadersReaderProcessSetupIntent">;
  "PostTerminalReadersReaderRefundPayment": StripeFullApiOperationInput<"PostTerminalReadersReaderRefundPayment">;
  "PostTerminalReadersReaderSetReaderDisplay": StripeFullApiOperationInput<"PostTerminalReadersReaderSetReaderDisplay">;
  "PostTerminalRefunds": StripeFullApiOperationInput<"PostTerminalRefunds">;
  "PostTestHelpersConfirmationTokens": StripeFullApiOperationInput<"PostTestHelpersConfirmationTokens">;
  "PostTestHelpersCustomersCustomerFundCashBalance": StripeFullApiOperationInput<"PostTestHelpersCustomersCustomerFundCashBalance">;
  "PostTestHelpersIssuingAuthorizations": StripeFullApiOperationInput<"PostTestHelpersIssuingAuthorizations">;
  "PostTestHelpersIssuingAuthorizationsAuthorizationCapture": StripeFullApiOperationInput<"PostTestHelpersIssuingAuthorizationsAuthorizationCapture">;
  "PostTestHelpersIssuingAuthorizationsAuthorizationExpire": StripeFullApiOperationInput<"PostTestHelpersIssuingAuthorizationsAuthorizationExpire">;
  "PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmount": StripeFullApiOperationInput<"PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmount">;
  "PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespond": StripeFullApiOperationInput<"PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespond">;
  "PostTestHelpersIssuingAuthorizationsAuthorizationIncrement": StripeFullApiOperationInput<"PostTestHelpersIssuingAuthorizationsAuthorizationIncrement">;
  "PostTestHelpersIssuingAuthorizationsAuthorizationReverse": StripeFullApiOperationInput<"PostTestHelpersIssuingAuthorizationsAuthorizationReverse">;
  "PostTestHelpersIssuingCardsCardShippingDeliver": StripeFullApiOperationInput<"PostTestHelpersIssuingCardsCardShippingDeliver">;
  "PostTestHelpersIssuingCardsCardShippingFail": StripeFullApiOperationInput<"PostTestHelpersIssuingCardsCardShippingFail">;
  "PostTestHelpersIssuingCardsCardShippingReturn": StripeFullApiOperationInput<"PostTestHelpersIssuingCardsCardShippingReturn">;
  "PostTestHelpersIssuingCardsCardShippingShip": StripeFullApiOperationInput<"PostTestHelpersIssuingCardsCardShippingShip">;
  "PostTestHelpersIssuingCardsCardShippingSubmit": StripeFullApiOperationInput<"PostTestHelpersIssuingCardsCardShippingSubmit">;
  "PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignActivate": StripeFullApiOperationInput<"PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignActivate">;
  "PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivate": StripeFullApiOperationInput<"PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivate">;
  "PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignReject": StripeFullApiOperationInput<"PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignReject">;
  "PostTestHelpersIssuingSettlements": StripeFullApiOperationInput<"PostTestHelpersIssuingSettlements">;
  "PostTestHelpersIssuingSettlementsSettlementComplete": StripeFullApiOperationInput<"PostTestHelpersIssuingSettlementsSettlementComplete">;
  "PostTestHelpersIssuingTransactionsCreateForceCapture": StripeFullApiOperationInput<"PostTestHelpersIssuingTransactionsCreateForceCapture">;
  "PostTestHelpersIssuingTransactionsCreateUnlinkedRefund": StripeFullApiOperationInput<"PostTestHelpersIssuingTransactionsCreateUnlinkedRefund">;
  "PostTestHelpersIssuingTransactionsTransactionRefund": StripeFullApiOperationInput<"PostTestHelpersIssuingTransactionsTransactionRefund">;
  "PostTestHelpersRefundsRefundExpire": StripeFullApiOperationInput<"PostTestHelpersRefundsRefundExpire">;
  "PostTestHelpersTerminalReadersReaderPresentPaymentMethod": StripeFullApiOperationInput<"PostTestHelpersTerminalReadersReaderPresentPaymentMethod">;
  "PostTestHelpersTerminalReadersReaderSucceedInputCollection": StripeFullApiOperationInput<"PostTestHelpersTerminalReadersReaderSucceedInputCollection">;
  "PostTestHelpersTerminalReadersReaderTimeoutInputCollection": StripeFullApiOperationInput<"PostTestHelpersTerminalReadersReaderTimeoutInputCollection">;
  "PostTestHelpersTestClocks": StripeFullApiOperationInput<"PostTestHelpersTestClocks">;
  "PostTestHelpersTestClocksTestClockAdvance": StripeFullApiOperationInput<"PostTestHelpersTestClocksTestClockAdvance">;
  "PostTestHelpersTreasuryInboundTransfersIdFail": StripeFullApiOperationInput<"PostTestHelpersTreasuryInboundTransfersIdFail">;
  "PostTestHelpersTreasuryInboundTransfersIdReturn": StripeFullApiOperationInput<"PostTestHelpersTreasuryInboundTransfersIdReturn">;
  "PostTestHelpersTreasuryInboundTransfersIdSucceed": StripeFullApiOperationInput<"PostTestHelpersTreasuryInboundTransfersIdSucceed">;
  "PostTestHelpersTreasuryOutboundPaymentsId": StripeFullApiOperationInput<"PostTestHelpersTreasuryOutboundPaymentsId">;
  "PostTestHelpersTreasuryOutboundPaymentsIdFail": StripeFullApiOperationInput<"PostTestHelpersTreasuryOutboundPaymentsIdFail">;
  "PostTestHelpersTreasuryOutboundPaymentsIdPost": StripeFullApiOperationInput<"PostTestHelpersTreasuryOutboundPaymentsIdPost">;
  "PostTestHelpersTreasuryOutboundPaymentsIdReturn": StripeFullApiOperationInput<"PostTestHelpersTreasuryOutboundPaymentsIdReturn">;
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransfer": StripeFullApiOperationInput<"PostTestHelpersTreasuryOutboundTransfersOutboundTransfer">;
}

export interface StripeFullApiV107GeneratedClient {
  PostSetupIntentsIntentConfirm(...args: StripeFullApiOperationArgs<"PostSetupIntentsIntentConfirm">): Promise<StripeFullApiOperationResponseMap["PostSetupIntentsIntentConfirm"]>;
  PostSetupIntentsIntentVerifyMicrodeposits(...args: StripeFullApiOperationArgs<"PostSetupIntentsIntentVerifyMicrodeposits">): Promise<StripeFullApiOperationResponseMap["PostSetupIntentsIntentVerifyMicrodeposits"]>;
  PostShippingRates(...args: StripeFullApiOperationArgs<"PostShippingRates">): Promise<StripeFullApiOperationResponseMap["PostShippingRates"]>;
  PostShippingRatesShippingRateToken(...args: StripeFullApiOperationArgs<"PostShippingRatesShippingRateToken">): Promise<StripeFullApiOperationResponseMap["PostShippingRatesShippingRateToken"]>;
  PostSigmaSavedQueriesId(...args: StripeFullApiOperationArgs<"PostSigmaSavedQueriesId">): Promise<StripeFullApiOperationResponseMap["PostSigmaSavedQueriesId"]>;
  PostSources(...args: StripeFullApiOperationArgs<"PostSources">): Promise<StripeFullApiOperationResponseMap["PostSources"]>;
  PostSourcesSource(...args: StripeFullApiOperationArgs<"PostSourcesSource">): Promise<StripeFullApiOperationResponseMap["PostSourcesSource"]>;
  PostSourcesSourceVerify(...args: StripeFullApiOperationArgs<"PostSourcesSourceVerify">): Promise<StripeFullApiOperationResponseMap["PostSourcesSourceVerify"]>;
  PostSubscriptionItems(...args: StripeFullApiOperationArgs<"PostSubscriptionItems">): Promise<StripeFullApiOperationResponseMap["PostSubscriptionItems"]>;
  PostSubscriptionItemsItem(...args: StripeFullApiOperationArgs<"PostSubscriptionItemsItem">): Promise<StripeFullApiOperationResponseMap["PostSubscriptionItemsItem"]>;
  PostSubscriptions(...args: StripeFullApiOperationArgs<"PostSubscriptions">): Promise<StripeFullApiOperationResponseMap["PostSubscriptions"]>;
  PostSubscriptionSchedules(...args: StripeFullApiOperationArgs<"PostSubscriptionSchedules">): Promise<StripeFullApiOperationResponseMap["PostSubscriptionSchedules"]>;
  PostSubscriptionSchedulesSchedule(...args: StripeFullApiOperationArgs<"PostSubscriptionSchedulesSchedule">): Promise<StripeFullApiOperationResponseMap["PostSubscriptionSchedulesSchedule"]>;
  PostSubscriptionSchedulesScheduleCancel(...args: StripeFullApiOperationArgs<"PostSubscriptionSchedulesScheduleCancel">): Promise<StripeFullApiOperationResponseMap["PostSubscriptionSchedulesScheduleCancel"]>;
  PostSubscriptionSchedulesScheduleRelease(...args: StripeFullApiOperationArgs<"PostSubscriptionSchedulesScheduleRelease">): Promise<StripeFullApiOperationResponseMap["PostSubscriptionSchedulesScheduleRelease"]>;
  PostSubscriptionsSubscriptionExposedId(...args: StripeFullApiOperationArgs<"PostSubscriptionsSubscriptionExposedId">): Promise<StripeFullApiOperationResponseMap["PostSubscriptionsSubscriptionExposedId"]>;
  PostSubscriptionsSubscriptionMigrate(...args: StripeFullApiOperationArgs<"PostSubscriptionsSubscriptionMigrate">): Promise<StripeFullApiOperationResponseMap["PostSubscriptionsSubscriptionMigrate"]>;
  PostSubscriptionsSubscriptionResume(...args: StripeFullApiOperationArgs<"PostSubscriptionsSubscriptionResume">): Promise<StripeFullApiOperationResponseMap["PostSubscriptionsSubscriptionResume"]>;
  PostTaxCalculations(...args: StripeFullApiOperationArgs<"PostTaxCalculations">): Promise<StripeFullApiOperationResponseMap["PostTaxCalculations"]>;
  PostTaxIds(...args: StripeFullApiOperationArgs<"PostTaxIds">): Promise<StripeFullApiOperationResponseMap["PostTaxIds"]>;
  PostTaxRates(...args: StripeFullApiOperationArgs<"PostTaxRates">): Promise<StripeFullApiOperationResponseMap["PostTaxRates"]>;
  PostTaxRatesTaxRate(...args: StripeFullApiOperationArgs<"PostTaxRatesTaxRate">): Promise<StripeFullApiOperationResponseMap["PostTaxRatesTaxRate"]>;
  PostTaxRegistrations(...args: StripeFullApiOperationArgs<"PostTaxRegistrations">): Promise<StripeFullApiOperationResponseMap["PostTaxRegistrations"]>;
  PostTaxRegistrationsId(...args: StripeFullApiOperationArgs<"PostTaxRegistrationsId">): Promise<StripeFullApiOperationResponseMap["PostTaxRegistrationsId"]>;
  PostTaxSettings(...args: StripeFullApiOperationArgs<"PostTaxSettings">): Promise<StripeFullApiOperationResponseMap["PostTaxSettings"]>;
  PostTaxTransactionsCreateFromCalculation(...args: StripeFullApiOperationArgs<"PostTaxTransactionsCreateFromCalculation">): Promise<StripeFullApiOperationResponseMap["PostTaxTransactionsCreateFromCalculation"]>;
  PostTaxTransactionsCreateReversal(...args: StripeFullApiOperationArgs<"PostTaxTransactionsCreateReversal">): Promise<StripeFullApiOperationResponseMap["PostTaxTransactionsCreateReversal"]>;
  PostTerminalConfigurations(...args: StripeFullApiOperationArgs<"PostTerminalConfigurations">): Promise<StripeFullApiOperationResponseMap["PostTerminalConfigurations"]>;
  PostTerminalConfigurationsConfiguration(...args: StripeFullApiOperationArgs<"PostTerminalConfigurationsConfiguration">): Promise<StripeFullApiOperationResponseMap["PostTerminalConfigurationsConfiguration"]>;
  PostTerminalConnectionTokens(...args: StripeFullApiOperationArgs<"PostTerminalConnectionTokens">): Promise<StripeFullApiOperationResponseMap["PostTerminalConnectionTokens"]>;
  PostTerminalLocations(...args: StripeFullApiOperationArgs<"PostTerminalLocations">): Promise<StripeFullApiOperationResponseMap["PostTerminalLocations"]>;
  PostTerminalLocationsLocation(...args: StripeFullApiOperationArgs<"PostTerminalLocationsLocation">): Promise<StripeFullApiOperationResponseMap["PostTerminalLocationsLocation"]>;
  PostTerminalOnboardingLinks(...args: StripeFullApiOperationArgs<"PostTerminalOnboardingLinks">): Promise<StripeFullApiOperationResponseMap["PostTerminalOnboardingLinks"]>;
  PostTerminalReaders(...args: StripeFullApiOperationArgs<"PostTerminalReaders">): Promise<StripeFullApiOperationResponseMap["PostTerminalReaders"]>;
  PostTerminalReadersReader(...args: StripeFullApiOperationArgs<"PostTerminalReadersReader">): Promise<StripeFullApiOperationResponseMap["PostTerminalReadersReader"]>;
  PostTerminalReadersReaderCancelAction(...args: StripeFullApiOperationArgs<"PostTerminalReadersReaderCancelAction">): Promise<StripeFullApiOperationResponseMap["PostTerminalReadersReaderCancelAction"]>;
  PostTerminalReadersReaderCollectInputs(...args: StripeFullApiOperationArgs<"PostTerminalReadersReaderCollectInputs">): Promise<StripeFullApiOperationResponseMap["PostTerminalReadersReaderCollectInputs"]>;
  PostTerminalReadersReaderCollectPaymentMethod(...args: StripeFullApiOperationArgs<"PostTerminalReadersReaderCollectPaymentMethod">): Promise<StripeFullApiOperationResponseMap["PostTerminalReadersReaderCollectPaymentMethod"]>;
  PostTerminalReadersReaderConfirmPaymentIntent(...args: StripeFullApiOperationArgs<"PostTerminalReadersReaderConfirmPaymentIntent">): Promise<StripeFullApiOperationResponseMap["PostTerminalReadersReaderConfirmPaymentIntent"]>;
  PostTerminalReadersReaderProcessPaymentIntent(...args: StripeFullApiOperationArgs<"PostTerminalReadersReaderProcessPaymentIntent">): Promise<StripeFullApiOperationResponseMap["PostTerminalReadersReaderProcessPaymentIntent"]>;
  PostTerminalReadersReaderProcessSetupIntent(...args: StripeFullApiOperationArgs<"PostTerminalReadersReaderProcessSetupIntent">): Promise<StripeFullApiOperationResponseMap["PostTerminalReadersReaderProcessSetupIntent"]>;
  PostTerminalReadersReaderRefundPayment(...args: StripeFullApiOperationArgs<"PostTerminalReadersReaderRefundPayment">): Promise<StripeFullApiOperationResponseMap["PostTerminalReadersReaderRefundPayment"]>;
  PostTerminalReadersReaderSetReaderDisplay(...args: StripeFullApiOperationArgs<"PostTerminalReadersReaderSetReaderDisplay">): Promise<StripeFullApiOperationResponseMap["PostTerminalReadersReaderSetReaderDisplay"]>;
  PostTerminalRefunds(...args: StripeFullApiOperationArgs<"PostTerminalRefunds">): Promise<StripeFullApiOperationResponseMap["PostTerminalRefunds"]>;
  PostTestHelpersConfirmationTokens(...args: StripeFullApiOperationArgs<"PostTestHelpersConfirmationTokens">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersConfirmationTokens"]>;
  PostTestHelpersCustomersCustomerFundCashBalance(...args: StripeFullApiOperationArgs<"PostTestHelpersCustomersCustomerFundCashBalance">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersCustomersCustomerFundCashBalance"]>;
  PostTestHelpersIssuingAuthorizations(...args: StripeFullApiOperationArgs<"PostTestHelpersIssuingAuthorizations">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersIssuingAuthorizations"]>;
  PostTestHelpersIssuingAuthorizationsAuthorizationCapture(...args: StripeFullApiOperationArgs<"PostTestHelpersIssuingAuthorizationsAuthorizationCapture">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersIssuingAuthorizationsAuthorizationCapture"]>;
  PostTestHelpersIssuingAuthorizationsAuthorizationExpire(...args: StripeFullApiOperationArgs<"PostTestHelpersIssuingAuthorizationsAuthorizationExpire">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersIssuingAuthorizationsAuthorizationExpire"]>;
  PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmount(...args: StripeFullApiOperationArgs<"PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmount">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmount"]>;
  PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespond(...args: StripeFullApiOperationArgs<"PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespond">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespond"]>;
  PostTestHelpersIssuingAuthorizationsAuthorizationIncrement(...args: StripeFullApiOperationArgs<"PostTestHelpersIssuingAuthorizationsAuthorizationIncrement">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersIssuingAuthorizationsAuthorizationIncrement"]>;
  PostTestHelpersIssuingAuthorizationsAuthorizationReverse(...args: StripeFullApiOperationArgs<"PostTestHelpersIssuingAuthorizationsAuthorizationReverse">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersIssuingAuthorizationsAuthorizationReverse"]>;
  PostTestHelpersIssuingCardsCardShippingDeliver(...args: StripeFullApiOperationArgs<"PostTestHelpersIssuingCardsCardShippingDeliver">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersIssuingCardsCardShippingDeliver"]>;
  PostTestHelpersIssuingCardsCardShippingFail(...args: StripeFullApiOperationArgs<"PostTestHelpersIssuingCardsCardShippingFail">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersIssuingCardsCardShippingFail"]>;
  PostTestHelpersIssuingCardsCardShippingReturn(...args: StripeFullApiOperationArgs<"PostTestHelpersIssuingCardsCardShippingReturn">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersIssuingCardsCardShippingReturn"]>;
  PostTestHelpersIssuingCardsCardShippingShip(...args: StripeFullApiOperationArgs<"PostTestHelpersIssuingCardsCardShippingShip">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersIssuingCardsCardShippingShip"]>;
  PostTestHelpersIssuingCardsCardShippingSubmit(...args: StripeFullApiOperationArgs<"PostTestHelpersIssuingCardsCardShippingSubmit">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersIssuingCardsCardShippingSubmit"]>;
  PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignActivate(...args: StripeFullApiOperationArgs<"PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignActivate">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignActivate"]>;
  PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivate(...args: StripeFullApiOperationArgs<"PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivate">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivate"]>;
  PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignReject(...args: StripeFullApiOperationArgs<"PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignReject">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignReject"]>;
  PostTestHelpersIssuingSettlements(...args: StripeFullApiOperationArgs<"PostTestHelpersIssuingSettlements">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersIssuingSettlements"]>;
  PostTestHelpersIssuingSettlementsSettlementComplete(...args: StripeFullApiOperationArgs<"PostTestHelpersIssuingSettlementsSettlementComplete">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersIssuingSettlementsSettlementComplete"]>;
  PostTestHelpersIssuingTransactionsCreateForceCapture(...args: StripeFullApiOperationArgs<"PostTestHelpersIssuingTransactionsCreateForceCapture">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersIssuingTransactionsCreateForceCapture"]>;
  PostTestHelpersIssuingTransactionsCreateUnlinkedRefund(...args: StripeFullApiOperationArgs<"PostTestHelpersIssuingTransactionsCreateUnlinkedRefund">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersIssuingTransactionsCreateUnlinkedRefund"]>;
  PostTestHelpersIssuingTransactionsTransactionRefund(...args: StripeFullApiOperationArgs<"PostTestHelpersIssuingTransactionsTransactionRefund">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersIssuingTransactionsTransactionRefund"]>;
  PostTestHelpersRefundsRefundExpire(...args: StripeFullApiOperationArgs<"PostTestHelpersRefundsRefundExpire">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersRefundsRefundExpire"]>;
  PostTestHelpersTerminalReadersReaderPresentPaymentMethod(...args: StripeFullApiOperationArgs<"PostTestHelpersTerminalReadersReaderPresentPaymentMethod">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersTerminalReadersReaderPresentPaymentMethod"]>;
  PostTestHelpersTerminalReadersReaderSucceedInputCollection(...args: StripeFullApiOperationArgs<"PostTestHelpersTerminalReadersReaderSucceedInputCollection">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersTerminalReadersReaderSucceedInputCollection"]>;
  PostTestHelpersTerminalReadersReaderTimeoutInputCollection(...args: StripeFullApiOperationArgs<"PostTestHelpersTerminalReadersReaderTimeoutInputCollection">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersTerminalReadersReaderTimeoutInputCollection"]>;
  PostTestHelpersTestClocks(...args: StripeFullApiOperationArgs<"PostTestHelpersTestClocks">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersTestClocks"]>;
  PostTestHelpersTestClocksTestClockAdvance(...args: StripeFullApiOperationArgs<"PostTestHelpersTestClocksTestClockAdvance">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersTestClocksTestClockAdvance"]>;
  PostTestHelpersTreasuryInboundTransfersIdFail(...args: StripeFullApiOperationArgs<"PostTestHelpersTreasuryInboundTransfersIdFail">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersTreasuryInboundTransfersIdFail"]>;
  PostTestHelpersTreasuryInboundTransfersIdReturn(...args: StripeFullApiOperationArgs<"PostTestHelpersTreasuryInboundTransfersIdReturn">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersTreasuryInboundTransfersIdReturn"]>;
  PostTestHelpersTreasuryInboundTransfersIdSucceed(...args: StripeFullApiOperationArgs<"PostTestHelpersTreasuryInboundTransfersIdSucceed">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersTreasuryInboundTransfersIdSucceed"]>;
  PostTestHelpersTreasuryOutboundPaymentsId(...args: StripeFullApiOperationArgs<"PostTestHelpersTreasuryOutboundPaymentsId">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersTreasuryOutboundPaymentsId"]>;
  PostTestHelpersTreasuryOutboundPaymentsIdFail(...args: StripeFullApiOperationArgs<"PostTestHelpersTreasuryOutboundPaymentsIdFail">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersTreasuryOutboundPaymentsIdFail"]>;
  PostTestHelpersTreasuryOutboundPaymentsIdPost(...args: StripeFullApiOperationArgs<"PostTestHelpersTreasuryOutboundPaymentsIdPost">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersTreasuryOutboundPaymentsIdPost"]>;
  PostTestHelpersTreasuryOutboundPaymentsIdReturn(...args: StripeFullApiOperationArgs<"PostTestHelpersTreasuryOutboundPaymentsIdReturn">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersTreasuryOutboundPaymentsIdReturn"]>;
  PostTestHelpersTreasuryOutboundTransfersOutboundTransfer(...args: StripeFullApiOperationArgs<"PostTestHelpersTreasuryOutboundTransfersOutboundTransfer">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersTreasuryOutboundTransfersOutboundTransfer"]>;
}

export const StripeFullApiV107GeneratedFunctionNames = [
  "PostSetupIntentsIntentConfirm",
  "PostSetupIntentsIntentVerifyMicrodeposits",
  "PostShippingRates",
  "PostShippingRatesShippingRateToken",
  "PostSigmaSavedQueriesId",
  "PostSources",
  "PostSourcesSource",
  "PostSourcesSourceVerify",
  "PostSubscriptionItems",
  "PostSubscriptionItemsItem",
  "PostSubscriptions",
  "PostSubscriptionSchedules",
  "PostSubscriptionSchedulesSchedule",
  "PostSubscriptionSchedulesScheduleCancel",
  "PostSubscriptionSchedulesScheduleRelease",
  "PostSubscriptionsSubscriptionExposedId",
  "PostSubscriptionsSubscriptionMigrate",
  "PostSubscriptionsSubscriptionResume",
  "PostTaxCalculations",
  "PostTaxIds",
  "PostTaxRates",
  "PostTaxRatesTaxRate",
  "PostTaxRegistrations",
  "PostTaxRegistrationsId",
  "PostTaxSettings",
  "PostTaxTransactionsCreateFromCalculation",
  "PostTaxTransactionsCreateReversal",
  "PostTerminalConfigurations",
  "PostTerminalConfigurationsConfiguration",
  "PostTerminalConnectionTokens",
  "PostTerminalLocations",
  "PostTerminalLocationsLocation",
  "PostTerminalOnboardingLinks",
  "PostTerminalReaders",
  "PostTerminalReadersReader",
  "PostTerminalReadersReaderCancelAction",
  "PostTerminalReadersReaderCollectInputs",
  "PostTerminalReadersReaderCollectPaymentMethod",
  "PostTerminalReadersReaderConfirmPaymentIntent",
  "PostTerminalReadersReaderProcessPaymentIntent",
  "PostTerminalReadersReaderProcessSetupIntent",
  "PostTerminalReadersReaderRefundPayment",
  "PostTerminalReadersReaderSetReaderDisplay",
  "PostTerminalRefunds",
  "PostTestHelpersConfirmationTokens",
  "PostTestHelpersCustomersCustomerFundCashBalance",
  "PostTestHelpersIssuingAuthorizations",
  "PostTestHelpersIssuingAuthorizationsAuthorizationCapture",
  "PostTestHelpersIssuingAuthorizationsAuthorizationExpire",
  "PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmount",
  "PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespond",
  "PostTestHelpersIssuingAuthorizationsAuthorizationIncrement",
  "PostTestHelpersIssuingAuthorizationsAuthorizationReverse",
  "PostTestHelpersIssuingCardsCardShippingDeliver",
  "PostTestHelpersIssuingCardsCardShippingFail",
  "PostTestHelpersIssuingCardsCardShippingReturn",
  "PostTestHelpersIssuingCardsCardShippingShip",
  "PostTestHelpersIssuingCardsCardShippingSubmit",
  "PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignActivate",
  "PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivate",
  "PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignReject",
  "PostTestHelpersIssuingSettlements",
  "PostTestHelpersIssuingSettlementsSettlementComplete",
  "PostTestHelpersIssuingTransactionsCreateForceCapture",
  "PostTestHelpersIssuingTransactionsCreateUnlinkedRefund",
  "PostTestHelpersIssuingTransactionsTransactionRefund",
  "PostTestHelpersRefundsRefundExpire",
  "PostTestHelpersTerminalReadersReaderPresentPaymentMethod",
  "PostTestHelpersTerminalReadersReaderSucceedInputCollection",
  "PostTestHelpersTerminalReadersReaderTimeoutInputCollection",
  "PostTestHelpersTestClocks",
  "PostTestHelpersTestClocksTestClockAdvance",
  "PostTestHelpersTreasuryInboundTransfersIdFail",
  "PostTestHelpersTreasuryInboundTransfersIdReturn",
  "PostTestHelpersTreasuryInboundTransfersIdSucceed",
  "PostTestHelpersTreasuryOutboundPaymentsId",
  "PostTestHelpersTreasuryOutboundPaymentsIdFail",
  "PostTestHelpersTreasuryOutboundPaymentsIdPost",
  "PostTestHelpersTreasuryOutboundPaymentsIdReturn",
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransfer"
] as const satisfies readonly (keyof StripeFullApiV107GeneratedClient)[];

export function createStripeFullApiV107GeneratedClient(
  callOperation: StripeGeneratedOperationCaller,
): StripeFullApiV107GeneratedClient {
  return {
    PostSetupIntentsIntentConfirm: (...args) => callOperation("PostSetupIntentsIntentConfirm", ...(args as StripeFullApiOperationArgs<"PostSetupIntentsIntentConfirm">)),
    PostSetupIntentsIntentVerifyMicrodeposits: (...args) => callOperation("PostSetupIntentsIntentVerifyMicrodeposits", ...(args as StripeFullApiOperationArgs<"PostSetupIntentsIntentVerifyMicrodeposits">)),
    PostShippingRates: (...args) => callOperation("PostShippingRates", ...(args as StripeFullApiOperationArgs<"PostShippingRates">)),
    PostShippingRatesShippingRateToken: (...args) => callOperation("PostShippingRatesShippingRateToken", ...(args as StripeFullApiOperationArgs<"PostShippingRatesShippingRateToken">)),
    PostSigmaSavedQueriesId: (...args) => callOperation("PostSigmaSavedQueriesId", ...(args as StripeFullApiOperationArgs<"PostSigmaSavedQueriesId">)),
    PostSources: (...args) => callOperation("PostSources", ...(args as StripeFullApiOperationArgs<"PostSources">)),
    PostSourcesSource: (...args) => callOperation("PostSourcesSource", ...(args as StripeFullApiOperationArgs<"PostSourcesSource">)),
    PostSourcesSourceVerify: (...args) => callOperation("PostSourcesSourceVerify", ...(args as StripeFullApiOperationArgs<"PostSourcesSourceVerify">)),
    PostSubscriptionItems: (...args) => callOperation("PostSubscriptionItems", ...(args as StripeFullApiOperationArgs<"PostSubscriptionItems">)),
    PostSubscriptionItemsItem: (...args) => callOperation("PostSubscriptionItemsItem", ...(args as StripeFullApiOperationArgs<"PostSubscriptionItemsItem">)),
    PostSubscriptions: (...args) => callOperation("PostSubscriptions", ...(args as StripeFullApiOperationArgs<"PostSubscriptions">)),
    PostSubscriptionSchedules: (...args) => callOperation("PostSubscriptionSchedules", ...(args as StripeFullApiOperationArgs<"PostSubscriptionSchedules">)),
    PostSubscriptionSchedulesSchedule: (...args) => callOperation("PostSubscriptionSchedulesSchedule", ...(args as StripeFullApiOperationArgs<"PostSubscriptionSchedulesSchedule">)),
    PostSubscriptionSchedulesScheduleCancel: (...args) => callOperation("PostSubscriptionSchedulesScheduleCancel", ...(args as StripeFullApiOperationArgs<"PostSubscriptionSchedulesScheduleCancel">)),
    PostSubscriptionSchedulesScheduleRelease: (...args) => callOperation("PostSubscriptionSchedulesScheduleRelease", ...(args as StripeFullApiOperationArgs<"PostSubscriptionSchedulesScheduleRelease">)),
    PostSubscriptionsSubscriptionExposedId: (...args) => callOperation("PostSubscriptionsSubscriptionExposedId", ...(args as StripeFullApiOperationArgs<"PostSubscriptionsSubscriptionExposedId">)),
    PostSubscriptionsSubscriptionMigrate: (...args) => callOperation("PostSubscriptionsSubscriptionMigrate", ...(args as StripeFullApiOperationArgs<"PostSubscriptionsSubscriptionMigrate">)),
    PostSubscriptionsSubscriptionResume: (...args) => callOperation("PostSubscriptionsSubscriptionResume", ...(args as StripeFullApiOperationArgs<"PostSubscriptionsSubscriptionResume">)),
    PostTaxCalculations: (...args) => callOperation("PostTaxCalculations", ...(args as StripeFullApiOperationArgs<"PostTaxCalculations">)),
    PostTaxIds: (...args) => callOperation("PostTaxIds", ...(args as StripeFullApiOperationArgs<"PostTaxIds">)),
    PostTaxRates: (...args) => callOperation("PostTaxRates", ...(args as StripeFullApiOperationArgs<"PostTaxRates">)),
    PostTaxRatesTaxRate: (...args) => callOperation("PostTaxRatesTaxRate", ...(args as StripeFullApiOperationArgs<"PostTaxRatesTaxRate">)),
    PostTaxRegistrations: (...args) => callOperation("PostTaxRegistrations", ...(args as StripeFullApiOperationArgs<"PostTaxRegistrations">)),
    PostTaxRegistrationsId: (...args) => callOperation("PostTaxRegistrationsId", ...(args as StripeFullApiOperationArgs<"PostTaxRegistrationsId">)),
    PostTaxSettings: (...args) => callOperation("PostTaxSettings", ...(args as StripeFullApiOperationArgs<"PostTaxSettings">)),
    PostTaxTransactionsCreateFromCalculation: (...args) => callOperation("PostTaxTransactionsCreateFromCalculation", ...(args as StripeFullApiOperationArgs<"PostTaxTransactionsCreateFromCalculation">)),
    PostTaxTransactionsCreateReversal: (...args) => callOperation("PostTaxTransactionsCreateReversal", ...(args as StripeFullApiOperationArgs<"PostTaxTransactionsCreateReversal">)),
    PostTerminalConfigurations: (...args) => callOperation("PostTerminalConfigurations", ...(args as StripeFullApiOperationArgs<"PostTerminalConfigurations">)),
    PostTerminalConfigurationsConfiguration: (...args) => callOperation("PostTerminalConfigurationsConfiguration", ...(args as StripeFullApiOperationArgs<"PostTerminalConfigurationsConfiguration">)),
    PostTerminalConnectionTokens: (...args) => callOperation("PostTerminalConnectionTokens", ...(args as StripeFullApiOperationArgs<"PostTerminalConnectionTokens">)),
    PostTerminalLocations: (...args) => callOperation("PostTerminalLocations", ...(args as StripeFullApiOperationArgs<"PostTerminalLocations">)),
    PostTerminalLocationsLocation: (...args) => callOperation("PostTerminalLocationsLocation", ...(args as StripeFullApiOperationArgs<"PostTerminalLocationsLocation">)),
    PostTerminalOnboardingLinks: (...args) => callOperation("PostTerminalOnboardingLinks", ...(args as StripeFullApiOperationArgs<"PostTerminalOnboardingLinks">)),
    PostTerminalReaders: (...args) => callOperation("PostTerminalReaders", ...(args as StripeFullApiOperationArgs<"PostTerminalReaders">)),
    PostTerminalReadersReader: (...args) => callOperation("PostTerminalReadersReader", ...(args as StripeFullApiOperationArgs<"PostTerminalReadersReader">)),
    PostTerminalReadersReaderCancelAction: (...args) => callOperation("PostTerminalReadersReaderCancelAction", ...(args as StripeFullApiOperationArgs<"PostTerminalReadersReaderCancelAction">)),
    PostTerminalReadersReaderCollectInputs: (...args) => callOperation("PostTerminalReadersReaderCollectInputs", ...(args as StripeFullApiOperationArgs<"PostTerminalReadersReaderCollectInputs">)),
    PostTerminalReadersReaderCollectPaymentMethod: (...args) => callOperation("PostTerminalReadersReaderCollectPaymentMethod", ...(args as StripeFullApiOperationArgs<"PostTerminalReadersReaderCollectPaymentMethod">)),
    PostTerminalReadersReaderConfirmPaymentIntent: (...args) => callOperation("PostTerminalReadersReaderConfirmPaymentIntent", ...(args as StripeFullApiOperationArgs<"PostTerminalReadersReaderConfirmPaymentIntent">)),
    PostTerminalReadersReaderProcessPaymentIntent: (...args) => callOperation("PostTerminalReadersReaderProcessPaymentIntent", ...(args as StripeFullApiOperationArgs<"PostTerminalReadersReaderProcessPaymentIntent">)),
    PostTerminalReadersReaderProcessSetupIntent: (...args) => callOperation("PostTerminalReadersReaderProcessSetupIntent", ...(args as StripeFullApiOperationArgs<"PostTerminalReadersReaderProcessSetupIntent">)),
    PostTerminalReadersReaderRefundPayment: (...args) => callOperation("PostTerminalReadersReaderRefundPayment", ...(args as StripeFullApiOperationArgs<"PostTerminalReadersReaderRefundPayment">)),
    PostTerminalReadersReaderSetReaderDisplay: (...args) => callOperation("PostTerminalReadersReaderSetReaderDisplay", ...(args as StripeFullApiOperationArgs<"PostTerminalReadersReaderSetReaderDisplay">)),
    PostTerminalRefunds: (...args) => callOperation("PostTerminalRefunds", ...(args as StripeFullApiOperationArgs<"PostTerminalRefunds">)),
    PostTestHelpersConfirmationTokens: (...args) => callOperation("PostTestHelpersConfirmationTokens", ...(args as StripeFullApiOperationArgs<"PostTestHelpersConfirmationTokens">)),
    PostTestHelpersCustomersCustomerFundCashBalance: (...args) => callOperation("PostTestHelpersCustomersCustomerFundCashBalance", ...(args as StripeFullApiOperationArgs<"PostTestHelpersCustomersCustomerFundCashBalance">)),
    PostTestHelpersIssuingAuthorizations: (...args) => callOperation("PostTestHelpersIssuingAuthorizations", ...(args as StripeFullApiOperationArgs<"PostTestHelpersIssuingAuthorizations">)),
    PostTestHelpersIssuingAuthorizationsAuthorizationCapture: (...args) => callOperation("PostTestHelpersIssuingAuthorizationsAuthorizationCapture", ...(args as StripeFullApiOperationArgs<"PostTestHelpersIssuingAuthorizationsAuthorizationCapture">)),
    PostTestHelpersIssuingAuthorizationsAuthorizationExpire: (...args) => callOperation("PostTestHelpersIssuingAuthorizationsAuthorizationExpire", ...(args as StripeFullApiOperationArgs<"PostTestHelpersIssuingAuthorizationsAuthorizationExpire">)),
    PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmount: (...args) => callOperation("PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmount", ...(args as StripeFullApiOperationArgs<"PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmount">)),
    PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespond: (...args) => callOperation("PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespond", ...(args as StripeFullApiOperationArgs<"PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespond">)),
    PostTestHelpersIssuingAuthorizationsAuthorizationIncrement: (...args) => callOperation("PostTestHelpersIssuingAuthorizationsAuthorizationIncrement", ...(args as StripeFullApiOperationArgs<"PostTestHelpersIssuingAuthorizationsAuthorizationIncrement">)),
    PostTestHelpersIssuingAuthorizationsAuthorizationReverse: (...args) => callOperation("PostTestHelpersIssuingAuthorizationsAuthorizationReverse", ...(args as StripeFullApiOperationArgs<"PostTestHelpersIssuingAuthorizationsAuthorizationReverse">)),
    PostTestHelpersIssuingCardsCardShippingDeliver: (...args) => callOperation("PostTestHelpersIssuingCardsCardShippingDeliver", ...(args as StripeFullApiOperationArgs<"PostTestHelpersIssuingCardsCardShippingDeliver">)),
    PostTestHelpersIssuingCardsCardShippingFail: (...args) => callOperation("PostTestHelpersIssuingCardsCardShippingFail", ...(args as StripeFullApiOperationArgs<"PostTestHelpersIssuingCardsCardShippingFail">)),
    PostTestHelpersIssuingCardsCardShippingReturn: (...args) => callOperation("PostTestHelpersIssuingCardsCardShippingReturn", ...(args as StripeFullApiOperationArgs<"PostTestHelpersIssuingCardsCardShippingReturn">)),
    PostTestHelpersIssuingCardsCardShippingShip: (...args) => callOperation("PostTestHelpersIssuingCardsCardShippingShip", ...(args as StripeFullApiOperationArgs<"PostTestHelpersIssuingCardsCardShippingShip">)),
    PostTestHelpersIssuingCardsCardShippingSubmit: (...args) => callOperation("PostTestHelpersIssuingCardsCardShippingSubmit", ...(args as StripeFullApiOperationArgs<"PostTestHelpersIssuingCardsCardShippingSubmit">)),
    PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignActivate: (...args) => callOperation("PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignActivate", ...(args as StripeFullApiOperationArgs<"PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignActivate">)),
    PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivate: (...args) => callOperation("PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivate", ...(args as StripeFullApiOperationArgs<"PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivate">)),
    PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignReject: (...args) => callOperation("PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignReject", ...(args as StripeFullApiOperationArgs<"PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignReject">)),
    PostTestHelpersIssuingSettlements: (...args) => callOperation("PostTestHelpersIssuingSettlements", ...(args as StripeFullApiOperationArgs<"PostTestHelpersIssuingSettlements">)),
    PostTestHelpersIssuingSettlementsSettlementComplete: (...args) => callOperation("PostTestHelpersIssuingSettlementsSettlementComplete", ...(args as StripeFullApiOperationArgs<"PostTestHelpersIssuingSettlementsSettlementComplete">)),
    PostTestHelpersIssuingTransactionsCreateForceCapture: (...args) => callOperation("PostTestHelpersIssuingTransactionsCreateForceCapture", ...(args as StripeFullApiOperationArgs<"PostTestHelpersIssuingTransactionsCreateForceCapture">)),
    PostTestHelpersIssuingTransactionsCreateUnlinkedRefund: (...args) => callOperation("PostTestHelpersIssuingTransactionsCreateUnlinkedRefund", ...(args as StripeFullApiOperationArgs<"PostTestHelpersIssuingTransactionsCreateUnlinkedRefund">)),
    PostTestHelpersIssuingTransactionsTransactionRefund: (...args) => callOperation("PostTestHelpersIssuingTransactionsTransactionRefund", ...(args as StripeFullApiOperationArgs<"PostTestHelpersIssuingTransactionsTransactionRefund">)),
    PostTestHelpersRefundsRefundExpire: (...args) => callOperation("PostTestHelpersRefundsRefundExpire", ...(args as StripeFullApiOperationArgs<"PostTestHelpersRefundsRefundExpire">)),
    PostTestHelpersTerminalReadersReaderPresentPaymentMethod: (...args) => callOperation("PostTestHelpersTerminalReadersReaderPresentPaymentMethod", ...(args as StripeFullApiOperationArgs<"PostTestHelpersTerminalReadersReaderPresentPaymentMethod">)),
    PostTestHelpersTerminalReadersReaderSucceedInputCollection: (...args) => callOperation("PostTestHelpersTerminalReadersReaderSucceedInputCollection", ...(args as StripeFullApiOperationArgs<"PostTestHelpersTerminalReadersReaderSucceedInputCollection">)),
    PostTestHelpersTerminalReadersReaderTimeoutInputCollection: (...args) => callOperation("PostTestHelpersTerminalReadersReaderTimeoutInputCollection", ...(args as StripeFullApiOperationArgs<"PostTestHelpersTerminalReadersReaderTimeoutInputCollection">)),
    PostTestHelpersTestClocks: (...args) => callOperation("PostTestHelpersTestClocks", ...(args as StripeFullApiOperationArgs<"PostTestHelpersTestClocks">)),
    PostTestHelpersTestClocksTestClockAdvance: (...args) => callOperation("PostTestHelpersTestClocksTestClockAdvance", ...(args as StripeFullApiOperationArgs<"PostTestHelpersTestClocksTestClockAdvance">)),
    PostTestHelpersTreasuryInboundTransfersIdFail: (...args) => callOperation("PostTestHelpersTreasuryInboundTransfersIdFail", ...(args as StripeFullApiOperationArgs<"PostTestHelpersTreasuryInboundTransfersIdFail">)),
    PostTestHelpersTreasuryInboundTransfersIdReturn: (...args) => callOperation("PostTestHelpersTreasuryInboundTransfersIdReturn", ...(args as StripeFullApiOperationArgs<"PostTestHelpersTreasuryInboundTransfersIdReturn">)),
    PostTestHelpersTreasuryInboundTransfersIdSucceed: (...args) => callOperation("PostTestHelpersTreasuryInboundTransfersIdSucceed", ...(args as StripeFullApiOperationArgs<"PostTestHelpersTreasuryInboundTransfersIdSucceed">)),
    PostTestHelpersTreasuryOutboundPaymentsId: (...args) => callOperation("PostTestHelpersTreasuryOutboundPaymentsId", ...(args as StripeFullApiOperationArgs<"PostTestHelpersTreasuryOutboundPaymentsId">)),
    PostTestHelpersTreasuryOutboundPaymentsIdFail: (...args) => callOperation("PostTestHelpersTreasuryOutboundPaymentsIdFail", ...(args as StripeFullApiOperationArgs<"PostTestHelpersTreasuryOutboundPaymentsIdFail">)),
    PostTestHelpersTreasuryOutboundPaymentsIdPost: (...args) => callOperation("PostTestHelpersTreasuryOutboundPaymentsIdPost", ...(args as StripeFullApiOperationArgs<"PostTestHelpersTreasuryOutboundPaymentsIdPost">)),
    PostTestHelpersTreasuryOutboundPaymentsIdReturn: (...args) => callOperation("PostTestHelpersTreasuryOutboundPaymentsIdReturn", ...(args as StripeFullApiOperationArgs<"PostTestHelpersTreasuryOutboundPaymentsIdReturn">)),
    PostTestHelpersTreasuryOutboundTransfersOutboundTransfer: (...args) => callOperation("PostTestHelpersTreasuryOutboundTransfersOutboundTransfer", ...(args as StripeFullApiOperationArgs<"PostTestHelpersTreasuryOutboundTransfersOutboundTransfer">)),
  };
}
