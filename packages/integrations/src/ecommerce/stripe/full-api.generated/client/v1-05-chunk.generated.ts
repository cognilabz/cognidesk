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
export const StripeFullApiV105OperationKeys = [
  "PostBillingCreditGrants",
  "PostBillingCreditGrantsId",
  "PostBillingCreditGrantsIdExpire",
  "PostBillingCreditGrantsIdVoid",
  "PostBillingMeterEventAdjustments",
  "PostBillingMeterEvents",
  "PostBillingMeters",
  "PostBillingMetersId",
  "PostBillingMetersIdDeactivate",
  "PostBillingMetersIdReactivate",
  "PostBillingPortalConfigurations",
  "PostBillingPortalConfigurationsConfiguration",
  "PostBillingPortalSessions",
  "PostCharges",
  "PostChargesCharge",
  "PostChargesChargeCapture",
  "PostChargesChargeDispute",
  "PostChargesChargeDisputeClose",
  "PostChargesChargeRefund",
  "PostChargesChargeRefunds",
  "PostChargesChargeRefundsRefund",
  "PostCheckoutSessions",
  "PostCheckoutSessionsSession",
  "PostCheckoutSessionsSessionExpire",
  "PostClimateOrders",
  "PostClimateOrdersOrder",
  "PostClimateOrdersOrderCancel",
  "PostCoupons",
  "PostCouponsCoupon",
  "PostCreditNotes",
  "PostCreditNotesId",
  "PostCreditNotesIdVoid",
  "PostCustomers",
  "PostCustomersCustomer",
  "PostCustomersCustomerBalanceTransactions",
  "PostCustomersCustomerBalanceTransactionsTransaction",
  "PostCustomersCustomerBankAccounts",
  "PostCustomersCustomerBankAccountsId",
  "PostCustomersCustomerBankAccountsIdVerify",
  "PostCustomersCustomerCards",
  "PostCustomersCustomerCardsId",
  "PostCustomersCustomerCashBalance",
  "PostCustomersCustomerFundingInstructions",
  "PostCustomersCustomerSources",
  "PostCustomersCustomerSourcesId",
  "PostCustomersCustomerSourcesIdVerify",
  "PostCustomersCustomerSubscriptions",
  "PostCustomersCustomerSubscriptionsSubscriptionExposedId",
  "PostCustomersCustomerTaxIds",
  "PostCustomerSessions",
  "PostDisputesDispute",
  "PostDisputesDisputeClose",
  "PostEntitlementsFeatures",
  "PostEntitlementsFeaturesId",
  "PostEphemeralKeys",
  "PostExternalAccountsId",
  "PostFileLinks",
  "PostFileLinksLink",
  "PostFiles",
  "PostFinancialConnectionsAccountsAccountDisconnect",
  "PostFinancialConnectionsAccountsAccountRefresh",
  "PostFinancialConnectionsAccountsAccountSubscribe",
  "PostFinancialConnectionsAccountsAccountUnsubscribe",
  "PostFinancialConnectionsSessions",
  "PostForwardingRequests",
  "PostIdentityVerificationSessions",
  "PostIdentityVerificationSessionsSession",
  "PostIdentityVerificationSessionsSessionCancel",
  "PostIdentityVerificationSessionsSessionRedact",
  "PostInvoiceitems",
  "PostInvoiceitemsInvoiceitem",
  "PostInvoiceRenderingTemplatesTemplateArchive",
  "PostInvoiceRenderingTemplatesTemplateUnarchive",
  "PostInvoices",
  "PostInvoicesCreatePreview",
  "PostInvoicesInvoice",
  "PostInvoicesInvoiceAddLines",
  "PostInvoicesInvoiceAttachPayment",
  "PostInvoicesInvoiceFinalize",
  "PostInvoicesInvoiceLinesLineItemId"
] as const;
export type StripeFullApiV105OperationKey = typeof StripeFullApiV105OperationKeys[number];
// End hardened literal operation keys.

export interface StripeFullApiV105OperationPathParamMap {
  "PostBillingCreditGrants": {};
  "PostBillingCreditGrantsId": { "id": StripeFullApiPathParamValue };
  "PostBillingCreditGrantsIdExpire": { "id": StripeFullApiPathParamValue };
  "PostBillingCreditGrantsIdVoid": { "id": StripeFullApiPathParamValue };
  "PostBillingMeterEventAdjustments": {};
  "PostBillingMeterEvents": {};
  "PostBillingMeters": {};
  "PostBillingMetersId": { "id": StripeFullApiPathParamValue };
  "PostBillingMetersIdDeactivate": { "id": StripeFullApiPathParamValue };
  "PostBillingMetersIdReactivate": { "id": StripeFullApiPathParamValue };
  "PostBillingPortalConfigurations": {};
  "PostBillingPortalConfigurationsConfiguration": { "configuration": StripeFullApiPathParamValue };
  "PostBillingPortalSessions": {};
  "PostCharges": {};
  "PostChargesCharge": { "charge": StripeFullApiPathParamValue };
  "PostChargesChargeCapture": { "charge": StripeFullApiPathParamValue };
  "PostChargesChargeDispute": { "charge": StripeFullApiPathParamValue };
  "PostChargesChargeDisputeClose": { "charge": StripeFullApiPathParamValue };
  "PostChargesChargeRefund": { "charge": StripeFullApiPathParamValue };
  "PostChargesChargeRefunds": { "charge": StripeFullApiPathParamValue };
  "PostChargesChargeRefundsRefund": { "charge": StripeFullApiPathParamValue; "refund": StripeFullApiPathParamValue };
  "PostCheckoutSessions": {};
  "PostCheckoutSessionsSession": { "session": StripeFullApiPathParamValue };
  "PostCheckoutSessionsSessionExpire": { "session": StripeFullApiPathParamValue };
  "PostClimateOrders": {};
  "PostClimateOrdersOrder": { "order": StripeFullApiPathParamValue };
  "PostClimateOrdersOrderCancel": { "order": StripeFullApiPathParamValue };
  "PostCoupons": {};
  "PostCouponsCoupon": { "coupon": StripeFullApiPathParamValue };
  "PostCreditNotes": {};
  "PostCreditNotesId": { "id": StripeFullApiPathParamValue };
  "PostCreditNotesIdVoid": { "id": StripeFullApiPathParamValue };
  "PostCustomers": {};
  "PostCustomersCustomer": { "customer": StripeFullApiPathParamValue };
  "PostCustomersCustomerBalanceTransactions": { "customer": StripeFullApiPathParamValue };
  "PostCustomersCustomerBalanceTransactionsTransaction": { "customer": StripeFullApiPathParamValue; "transaction": StripeFullApiPathParamValue };
  "PostCustomersCustomerBankAccounts": { "customer": StripeFullApiPathParamValue };
  "PostCustomersCustomerBankAccountsId": { "customer": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "PostCustomersCustomerBankAccountsIdVerify": { "customer": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "PostCustomersCustomerCards": { "customer": StripeFullApiPathParamValue };
  "PostCustomersCustomerCardsId": { "customer": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "PostCustomersCustomerCashBalance": { "customer": StripeFullApiPathParamValue };
  "PostCustomersCustomerFundingInstructions": { "customer": StripeFullApiPathParamValue };
  "PostCustomersCustomerSources": { "customer": StripeFullApiPathParamValue };
  "PostCustomersCustomerSourcesId": { "customer": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "PostCustomersCustomerSourcesIdVerify": { "customer": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "PostCustomersCustomerSubscriptions": { "customer": StripeFullApiPathParamValue };
  "PostCustomersCustomerSubscriptionsSubscriptionExposedId": { "customer": StripeFullApiPathParamValue; "subscription_exposed_id": StripeFullApiPathParamValue };
  "PostCustomersCustomerTaxIds": { "customer": StripeFullApiPathParamValue };
  "PostCustomerSessions": {};
  "PostDisputesDispute": { "dispute": StripeFullApiPathParamValue };
  "PostDisputesDisputeClose": { "dispute": StripeFullApiPathParamValue };
  "PostEntitlementsFeatures": {};
  "PostEntitlementsFeaturesId": { "id": StripeFullApiPathParamValue };
  "PostEphemeralKeys": {};
  "PostExternalAccountsId": { "id": StripeFullApiPathParamValue };
  "PostFileLinks": {};
  "PostFileLinksLink": { "link": StripeFullApiPathParamValue };
  "PostFiles": {};
  "PostFinancialConnectionsAccountsAccountDisconnect": { "account": StripeFullApiPathParamValue };
  "PostFinancialConnectionsAccountsAccountRefresh": { "account": StripeFullApiPathParamValue };
  "PostFinancialConnectionsAccountsAccountSubscribe": { "account": StripeFullApiPathParamValue };
  "PostFinancialConnectionsAccountsAccountUnsubscribe": { "account": StripeFullApiPathParamValue };
  "PostFinancialConnectionsSessions": {};
  "PostForwardingRequests": {};
  "PostIdentityVerificationSessions": {};
  "PostIdentityVerificationSessionsSession": { "session": StripeFullApiPathParamValue };
  "PostIdentityVerificationSessionsSessionCancel": { "session": StripeFullApiPathParamValue };
  "PostIdentityVerificationSessionsSessionRedact": { "session": StripeFullApiPathParamValue };
  "PostInvoiceitems": {};
  "PostInvoiceitemsInvoiceitem": { "invoiceitem": StripeFullApiPathParamValue };
  "PostInvoiceRenderingTemplatesTemplateArchive": { "template": StripeFullApiPathParamValue };
  "PostInvoiceRenderingTemplatesTemplateUnarchive": { "template": StripeFullApiPathParamValue };
  "PostInvoices": {};
  "PostInvoicesCreatePreview": {};
  "PostInvoicesInvoice": { "invoice": StripeFullApiPathParamValue };
  "PostInvoicesInvoiceAddLines": { "invoice": StripeFullApiPathParamValue };
  "PostInvoicesInvoiceAttachPayment": { "invoice": StripeFullApiPathParamValue };
  "PostInvoicesInvoiceFinalize": { "invoice": StripeFullApiPathParamValue };
  "PostInvoicesInvoiceLinesLineItemId": { "invoice": StripeFullApiPathParamValue; "line_item_id": StripeFullApiPathParamValue };
}

export interface StripeFullApiV105OperationRequestMap {
  "PostBillingCreditGrants": StripeFullApiOperationInput<"PostBillingCreditGrants">;
  "PostBillingCreditGrantsId": StripeFullApiOperationInput<"PostBillingCreditGrantsId">;
  "PostBillingCreditGrantsIdExpire": StripeFullApiOperationInput<"PostBillingCreditGrantsIdExpire">;
  "PostBillingCreditGrantsIdVoid": StripeFullApiOperationInput<"PostBillingCreditGrantsIdVoid">;
  "PostBillingMeterEventAdjustments": StripeFullApiOperationInput<"PostBillingMeterEventAdjustments">;
  "PostBillingMeterEvents": StripeFullApiOperationInput<"PostBillingMeterEvents">;
  "PostBillingMeters": StripeFullApiOperationInput<"PostBillingMeters">;
  "PostBillingMetersId": StripeFullApiOperationInput<"PostBillingMetersId">;
  "PostBillingMetersIdDeactivate": StripeFullApiOperationInput<"PostBillingMetersIdDeactivate">;
  "PostBillingMetersIdReactivate": StripeFullApiOperationInput<"PostBillingMetersIdReactivate">;
  "PostBillingPortalConfigurations": StripeFullApiOperationInput<"PostBillingPortalConfigurations">;
  "PostBillingPortalConfigurationsConfiguration": StripeFullApiOperationInput<"PostBillingPortalConfigurationsConfiguration">;
  "PostBillingPortalSessions": StripeFullApiOperationInput<"PostBillingPortalSessions">;
  "PostCharges": StripeFullApiOperationInput<"PostCharges">;
  "PostChargesCharge": StripeFullApiOperationInput<"PostChargesCharge">;
  "PostChargesChargeCapture": StripeFullApiOperationInput<"PostChargesChargeCapture">;
  "PostChargesChargeDispute": StripeFullApiOperationInput<"PostChargesChargeDispute">;
  "PostChargesChargeDisputeClose": StripeFullApiOperationInput<"PostChargesChargeDisputeClose">;
  "PostChargesChargeRefund": StripeFullApiOperationInput<"PostChargesChargeRefund">;
  "PostChargesChargeRefunds": StripeFullApiOperationInput<"PostChargesChargeRefunds">;
  "PostChargesChargeRefundsRefund": StripeFullApiOperationInput<"PostChargesChargeRefundsRefund">;
  "PostCheckoutSessions": StripeFullApiOperationInput<"PostCheckoutSessions">;
  "PostCheckoutSessionsSession": StripeFullApiOperationInput<"PostCheckoutSessionsSession">;
  "PostCheckoutSessionsSessionExpire": StripeFullApiOperationInput<"PostCheckoutSessionsSessionExpire">;
  "PostClimateOrders": StripeFullApiOperationInput<"PostClimateOrders">;
  "PostClimateOrdersOrder": StripeFullApiOperationInput<"PostClimateOrdersOrder">;
  "PostClimateOrdersOrderCancel": StripeFullApiOperationInput<"PostClimateOrdersOrderCancel">;
  "PostCoupons": StripeFullApiOperationInput<"PostCoupons">;
  "PostCouponsCoupon": StripeFullApiOperationInput<"PostCouponsCoupon">;
  "PostCreditNotes": StripeFullApiOperationInput<"PostCreditNotes">;
  "PostCreditNotesId": StripeFullApiOperationInput<"PostCreditNotesId">;
  "PostCreditNotesIdVoid": StripeFullApiOperationInput<"PostCreditNotesIdVoid">;
  "PostCustomers": StripeFullApiOperationInput<"PostCustomers">;
  "PostCustomersCustomer": StripeFullApiOperationInput<"PostCustomersCustomer">;
  "PostCustomersCustomerBalanceTransactions": StripeFullApiOperationInput<"PostCustomersCustomerBalanceTransactions">;
  "PostCustomersCustomerBalanceTransactionsTransaction": StripeFullApiOperationInput<"PostCustomersCustomerBalanceTransactionsTransaction">;
  "PostCustomersCustomerBankAccounts": StripeFullApiOperationInput<"PostCustomersCustomerBankAccounts">;
  "PostCustomersCustomerBankAccountsId": StripeFullApiOperationInput<"PostCustomersCustomerBankAccountsId">;
  "PostCustomersCustomerBankAccountsIdVerify": StripeFullApiOperationInput<"PostCustomersCustomerBankAccountsIdVerify">;
  "PostCustomersCustomerCards": StripeFullApiOperationInput<"PostCustomersCustomerCards">;
  "PostCustomersCustomerCardsId": StripeFullApiOperationInput<"PostCustomersCustomerCardsId">;
  "PostCustomersCustomerCashBalance": StripeFullApiOperationInput<"PostCustomersCustomerCashBalance">;
  "PostCustomersCustomerFundingInstructions": StripeFullApiOperationInput<"PostCustomersCustomerFundingInstructions">;
  "PostCustomersCustomerSources": StripeFullApiOperationInput<"PostCustomersCustomerSources">;
  "PostCustomersCustomerSourcesId": StripeFullApiOperationInput<"PostCustomersCustomerSourcesId">;
  "PostCustomersCustomerSourcesIdVerify": StripeFullApiOperationInput<"PostCustomersCustomerSourcesIdVerify">;
  "PostCustomersCustomerSubscriptions": StripeFullApiOperationInput<"PostCustomersCustomerSubscriptions">;
  "PostCustomersCustomerSubscriptionsSubscriptionExposedId": StripeFullApiOperationInput<"PostCustomersCustomerSubscriptionsSubscriptionExposedId">;
  "PostCustomersCustomerTaxIds": StripeFullApiOperationInput<"PostCustomersCustomerTaxIds">;
  "PostCustomerSessions": StripeFullApiOperationInput<"PostCustomerSessions">;
  "PostDisputesDispute": StripeFullApiOperationInput<"PostDisputesDispute">;
  "PostDisputesDisputeClose": StripeFullApiOperationInput<"PostDisputesDisputeClose">;
  "PostEntitlementsFeatures": StripeFullApiOperationInput<"PostEntitlementsFeatures">;
  "PostEntitlementsFeaturesId": StripeFullApiOperationInput<"PostEntitlementsFeaturesId">;
  "PostEphemeralKeys": StripeFullApiOperationInput<"PostEphemeralKeys">;
  "PostExternalAccountsId": StripeFullApiOperationInput<"PostExternalAccountsId">;
  "PostFileLinks": StripeFullApiOperationInput<"PostFileLinks">;
  "PostFileLinksLink": StripeFullApiOperationInput<"PostFileLinksLink">;
  "PostFiles": StripeFullApiOperationInput<"PostFiles">;
  "PostFinancialConnectionsAccountsAccountDisconnect": StripeFullApiOperationInput<"PostFinancialConnectionsAccountsAccountDisconnect">;
  "PostFinancialConnectionsAccountsAccountRefresh": StripeFullApiOperationInput<"PostFinancialConnectionsAccountsAccountRefresh">;
  "PostFinancialConnectionsAccountsAccountSubscribe": StripeFullApiOperationInput<"PostFinancialConnectionsAccountsAccountSubscribe">;
  "PostFinancialConnectionsAccountsAccountUnsubscribe": StripeFullApiOperationInput<"PostFinancialConnectionsAccountsAccountUnsubscribe">;
  "PostFinancialConnectionsSessions": StripeFullApiOperationInput<"PostFinancialConnectionsSessions">;
  "PostForwardingRequests": StripeFullApiOperationInput<"PostForwardingRequests">;
  "PostIdentityVerificationSessions": StripeFullApiOperationInput<"PostIdentityVerificationSessions">;
  "PostIdentityVerificationSessionsSession": StripeFullApiOperationInput<"PostIdentityVerificationSessionsSession">;
  "PostIdentityVerificationSessionsSessionCancel": StripeFullApiOperationInput<"PostIdentityVerificationSessionsSessionCancel">;
  "PostIdentityVerificationSessionsSessionRedact": StripeFullApiOperationInput<"PostIdentityVerificationSessionsSessionRedact">;
  "PostInvoiceitems": StripeFullApiOperationInput<"PostInvoiceitems">;
  "PostInvoiceitemsInvoiceitem": StripeFullApiOperationInput<"PostInvoiceitemsInvoiceitem">;
  "PostInvoiceRenderingTemplatesTemplateArchive": StripeFullApiOperationInput<"PostInvoiceRenderingTemplatesTemplateArchive">;
  "PostInvoiceRenderingTemplatesTemplateUnarchive": StripeFullApiOperationInput<"PostInvoiceRenderingTemplatesTemplateUnarchive">;
  "PostInvoices": StripeFullApiOperationInput<"PostInvoices">;
  "PostInvoicesCreatePreview": StripeFullApiOperationInput<"PostInvoicesCreatePreview">;
  "PostInvoicesInvoice": StripeFullApiOperationInput<"PostInvoicesInvoice">;
  "PostInvoicesInvoiceAddLines": StripeFullApiOperationInput<"PostInvoicesInvoiceAddLines">;
  "PostInvoicesInvoiceAttachPayment": StripeFullApiOperationInput<"PostInvoicesInvoiceAttachPayment">;
  "PostInvoicesInvoiceFinalize": StripeFullApiOperationInput<"PostInvoicesInvoiceFinalize">;
  "PostInvoicesInvoiceLinesLineItemId": StripeFullApiOperationInput<"PostInvoicesInvoiceLinesLineItemId">;
}

export interface StripeFullApiV105GeneratedClient {
  PostBillingCreditGrants(...args: StripeFullApiOperationArgs<"PostBillingCreditGrants">): Promise<StripeFullApiOperationResponseMap["PostBillingCreditGrants"]>;
  PostBillingCreditGrantsId(...args: StripeFullApiOperationArgs<"PostBillingCreditGrantsId">): Promise<StripeFullApiOperationResponseMap["PostBillingCreditGrantsId"]>;
  PostBillingCreditGrantsIdExpire(...args: StripeFullApiOperationArgs<"PostBillingCreditGrantsIdExpire">): Promise<StripeFullApiOperationResponseMap["PostBillingCreditGrantsIdExpire"]>;
  PostBillingCreditGrantsIdVoid(...args: StripeFullApiOperationArgs<"PostBillingCreditGrantsIdVoid">): Promise<StripeFullApiOperationResponseMap["PostBillingCreditGrantsIdVoid"]>;
  PostBillingMeterEventAdjustments(...args: StripeFullApiOperationArgs<"PostBillingMeterEventAdjustments">): Promise<StripeFullApiOperationResponseMap["PostBillingMeterEventAdjustments"]>;
  PostBillingMeterEvents(...args: StripeFullApiOperationArgs<"PostBillingMeterEvents">): Promise<StripeFullApiOperationResponseMap["PostBillingMeterEvents"]>;
  PostBillingMeters(...args: StripeFullApiOperationArgs<"PostBillingMeters">): Promise<StripeFullApiOperationResponseMap["PostBillingMeters"]>;
  PostBillingMetersId(...args: StripeFullApiOperationArgs<"PostBillingMetersId">): Promise<StripeFullApiOperationResponseMap["PostBillingMetersId"]>;
  PostBillingMetersIdDeactivate(...args: StripeFullApiOperationArgs<"PostBillingMetersIdDeactivate">): Promise<StripeFullApiOperationResponseMap["PostBillingMetersIdDeactivate"]>;
  PostBillingMetersIdReactivate(...args: StripeFullApiOperationArgs<"PostBillingMetersIdReactivate">): Promise<StripeFullApiOperationResponseMap["PostBillingMetersIdReactivate"]>;
  PostBillingPortalConfigurations(...args: StripeFullApiOperationArgs<"PostBillingPortalConfigurations">): Promise<StripeFullApiOperationResponseMap["PostBillingPortalConfigurations"]>;
  PostBillingPortalConfigurationsConfiguration(...args: StripeFullApiOperationArgs<"PostBillingPortalConfigurationsConfiguration">): Promise<StripeFullApiOperationResponseMap["PostBillingPortalConfigurationsConfiguration"]>;
  PostBillingPortalSessions(...args: StripeFullApiOperationArgs<"PostBillingPortalSessions">): Promise<StripeFullApiOperationResponseMap["PostBillingPortalSessions"]>;
  PostCharges(...args: StripeFullApiOperationArgs<"PostCharges">): Promise<StripeFullApiOperationResponseMap["PostCharges"]>;
  PostChargesCharge(...args: StripeFullApiOperationArgs<"PostChargesCharge">): Promise<StripeFullApiOperationResponseMap["PostChargesCharge"]>;
  PostChargesChargeCapture(...args: StripeFullApiOperationArgs<"PostChargesChargeCapture">): Promise<StripeFullApiOperationResponseMap["PostChargesChargeCapture"]>;
  PostChargesChargeDispute(...args: StripeFullApiOperationArgs<"PostChargesChargeDispute">): Promise<StripeFullApiOperationResponseMap["PostChargesChargeDispute"]>;
  PostChargesChargeDisputeClose(...args: StripeFullApiOperationArgs<"PostChargesChargeDisputeClose">): Promise<StripeFullApiOperationResponseMap["PostChargesChargeDisputeClose"]>;
  PostChargesChargeRefund(...args: StripeFullApiOperationArgs<"PostChargesChargeRefund">): Promise<StripeFullApiOperationResponseMap["PostChargesChargeRefund"]>;
  PostChargesChargeRefunds(...args: StripeFullApiOperationArgs<"PostChargesChargeRefunds">): Promise<StripeFullApiOperationResponseMap["PostChargesChargeRefunds"]>;
  PostChargesChargeRefundsRefund(...args: StripeFullApiOperationArgs<"PostChargesChargeRefundsRefund">): Promise<StripeFullApiOperationResponseMap["PostChargesChargeRefundsRefund"]>;
  PostCheckoutSessions(...args: StripeFullApiOperationArgs<"PostCheckoutSessions">): Promise<StripeFullApiOperationResponseMap["PostCheckoutSessions"]>;
  PostCheckoutSessionsSession(...args: StripeFullApiOperationArgs<"PostCheckoutSessionsSession">): Promise<StripeFullApiOperationResponseMap["PostCheckoutSessionsSession"]>;
  PostCheckoutSessionsSessionExpire(...args: StripeFullApiOperationArgs<"PostCheckoutSessionsSessionExpire">): Promise<StripeFullApiOperationResponseMap["PostCheckoutSessionsSessionExpire"]>;
  PostClimateOrders(...args: StripeFullApiOperationArgs<"PostClimateOrders">): Promise<StripeFullApiOperationResponseMap["PostClimateOrders"]>;
  PostClimateOrdersOrder(...args: StripeFullApiOperationArgs<"PostClimateOrdersOrder">): Promise<StripeFullApiOperationResponseMap["PostClimateOrdersOrder"]>;
  PostClimateOrdersOrderCancel(...args: StripeFullApiOperationArgs<"PostClimateOrdersOrderCancel">): Promise<StripeFullApiOperationResponseMap["PostClimateOrdersOrderCancel"]>;
  PostCoupons(...args: StripeFullApiOperationArgs<"PostCoupons">): Promise<StripeFullApiOperationResponseMap["PostCoupons"]>;
  PostCouponsCoupon(...args: StripeFullApiOperationArgs<"PostCouponsCoupon">): Promise<StripeFullApiOperationResponseMap["PostCouponsCoupon"]>;
  PostCreditNotes(...args: StripeFullApiOperationArgs<"PostCreditNotes">): Promise<StripeFullApiOperationResponseMap["PostCreditNotes"]>;
  PostCreditNotesId(...args: StripeFullApiOperationArgs<"PostCreditNotesId">): Promise<StripeFullApiOperationResponseMap["PostCreditNotesId"]>;
  PostCreditNotesIdVoid(...args: StripeFullApiOperationArgs<"PostCreditNotesIdVoid">): Promise<StripeFullApiOperationResponseMap["PostCreditNotesIdVoid"]>;
  PostCustomers(...args: StripeFullApiOperationArgs<"PostCustomers">): Promise<StripeFullApiOperationResponseMap["PostCustomers"]>;
  PostCustomersCustomer(...args: StripeFullApiOperationArgs<"PostCustomersCustomer">): Promise<StripeFullApiOperationResponseMap["PostCustomersCustomer"]>;
  PostCustomersCustomerBalanceTransactions(...args: StripeFullApiOperationArgs<"PostCustomersCustomerBalanceTransactions">): Promise<StripeFullApiOperationResponseMap["PostCustomersCustomerBalanceTransactions"]>;
  PostCustomersCustomerBalanceTransactionsTransaction(...args: StripeFullApiOperationArgs<"PostCustomersCustomerBalanceTransactionsTransaction">): Promise<StripeFullApiOperationResponseMap["PostCustomersCustomerBalanceTransactionsTransaction"]>;
  PostCustomersCustomerBankAccounts(...args: StripeFullApiOperationArgs<"PostCustomersCustomerBankAccounts">): Promise<StripeFullApiOperationResponseMap["PostCustomersCustomerBankAccounts"]>;
  PostCustomersCustomerBankAccountsId(...args: StripeFullApiOperationArgs<"PostCustomersCustomerBankAccountsId">): Promise<StripeFullApiOperationResponseMap["PostCustomersCustomerBankAccountsId"]>;
  PostCustomersCustomerBankAccountsIdVerify(...args: StripeFullApiOperationArgs<"PostCustomersCustomerBankAccountsIdVerify">): Promise<StripeFullApiOperationResponseMap["PostCustomersCustomerBankAccountsIdVerify"]>;
  PostCustomersCustomerCards(...args: StripeFullApiOperationArgs<"PostCustomersCustomerCards">): Promise<StripeFullApiOperationResponseMap["PostCustomersCustomerCards"]>;
  PostCustomersCustomerCardsId(...args: StripeFullApiOperationArgs<"PostCustomersCustomerCardsId">): Promise<StripeFullApiOperationResponseMap["PostCustomersCustomerCardsId"]>;
  PostCustomersCustomerCashBalance(...args: StripeFullApiOperationArgs<"PostCustomersCustomerCashBalance">): Promise<StripeFullApiOperationResponseMap["PostCustomersCustomerCashBalance"]>;
  PostCustomersCustomerFundingInstructions(...args: StripeFullApiOperationArgs<"PostCustomersCustomerFundingInstructions">): Promise<StripeFullApiOperationResponseMap["PostCustomersCustomerFundingInstructions"]>;
  PostCustomersCustomerSources(...args: StripeFullApiOperationArgs<"PostCustomersCustomerSources">): Promise<StripeFullApiOperationResponseMap["PostCustomersCustomerSources"]>;
  PostCustomersCustomerSourcesId(...args: StripeFullApiOperationArgs<"PostCustomersCustomerSourcesId">): Promise<StripeFullApiOperationResponseMap["PostCustomersCustomerSourcesId"]>;
  PostCustomersCustomerSourcesIdVerify(...args: StripeFullApiOperationArgs<"PostCustomersCustomerSourcesIdVerify">): Promise<StripeFullApiOperationResponseMap["PostCustomersCustomerSourcesIdVerify"]>;
  PostCustomersCustomerSubscriptions(...args: StripeFullApiOperationArgs<"PostCustomersCustomerSubscriptions">): Promise<StripeFullApiOperationResponseMap["PostCustomersCustomerSubscriptions"]>;
  PostCustomersCustomerSubscriptionsSubscriptionExposedId(...args: StripeFullApiOperationArgs<"PostCustomersCustomerSubscriptionsSubscriptionExposedId">): Promise<StripeFullApiOperationResponseMap["PostCustomersCustomerSubscriptionsSubscriptionExposedId"]>;
  PostCustomersCustomerTaxIds(...args: StripeFullApiOperationArgs<"PostCustomersCustomerTaxIds">): Promise<StripeFullApiOperationResponseMap["PostCustomersCustomerTaxIds"]>;
  PostCustomerSessions(...args: StripeFullApiOperationArgs<"PostCustomerSessions">): Promise<StripeFullApiOperationResponseMap["PostCustomerSessions"]>;
  PostDisputesDispute(...args: StripeFullApiOperationArgs<"PostDisputesDispute">): Promise<StripeFullApiOperationResponseMap["PostDisputesDispute"]>;
  PostDisputesDisputeClose(...args: StripeFullApiOperationArgs<"PostDisputesDisputeClose">): Promise<StripeFullApiOperationResponseMap["PostDisputesDisputeClose"]>;
  PostEntitlementsFeatures(...args: StripeFullApiOperationArgs<"PostEntitlementsFeatures">): Promise<StripeFullApiOperationResponseMap["PostEntitlementsFeatures"]>;
  PostEntitlementsFeaturesId(...args: StripeFullApiOperationArgs<"PostEntitlementsFeaturesId">): Promise<StripeFullApiOperationResponseMap["PostEntitlementsFeaturesId"]>;
  PostEphemeralKeys(...args: StripeFullApiOperationArgs<"PostEphemeralKeys">): Promise<StripeFullApiOperationResponseMap["PostEphemeralKeys"]>;
  PostExternalAccountsId(...args: StripeFullApiOperationArgs<"PostExternalAccountsId">): Promise<StripeFullApiOperationResponseMap["PostExternalAccountsId"]>;
  PostFileLinks(...args: StripeFullApiOperationArgs<"PostFileLinks">): Promise<StripeFullApiOperationResponseMap["PostFileLinks"]>;
  PostFileLinksLink(...args: StripeFullApiOperationArgs<"PostFileLinksLink">): Promise<StripeFullApiOperationResponseMap["PostFileLinksLink"]>;
  PostFiles(...args: StripeFullApiOperationArgs<"PostFiles">): Promise<StripeFullApiOperationResponseMap["PostFiles"]>;
  PostFinancialConnectionsAccountsAccountDisconnect(...args: StripeFullApiOperationArgs<"PostFinancialConnectionsAccountsAccountDisconnect">): Promise<StripeFullApiOperationResponseMap["PostFinancialConnectionsAccountsAccountDisconnect"]>;
  PostFinancialConnectionsAccountsAccountRefresh(...args: StripeFullApiOperationArgs<"PostFinancialConnectionsAccountsAccountRefresh">): Promise<StripeFullApiOperationResponseMap["PostFinancialConnectionsAccountsAccountRefresh"]>;
  PostFinancialConnectionsAccountsAccountSubscribe(...args: StripeFullApiOperationArgs<"PostFinancialConnectionsAccountsAccountSubscribe">): Promise<StripeFullApiOperationResponseMap["PostFinancialConnectionsAccountsAccountSubscribe"]>;
  PostFinancialConnectionsAccountsAccountUnsubscribe(...args: StripeFullApiOperationArgs<"PostFinancialConnectionsAccountsAccountUnsubscribe">): Promise<StripeFullApiOperationResponseMap["PostFinancialConnectionsAccountsAccountUnsubscribe"]>;
  PostFinancialConnectionsSessions(...args: StripeFullApiOperationArgs<"PostFinancialConnectionsSessions">): Promise<StripeFullApiOperationResponseMap["PostFinancialConnectionsSessions"]>;
  PostForwardingRequests(...args: StripeFullApiOperationArgs<"PostForwardingRequests">): Promise<StripeFullApiOperationResponseMap["PostForwardingRequests"]>;
  PostIdentityVerificationSessions(...args: StripeFullApiOperationArgs<"PostIdentityVerificationSessions">): Promise<StripeFullApiOperationResponseMap["PostIdentityVerificationSessions"]>;
  PostIdentityVerificationSessionsSession(...args: StripeFullApiOperationArgs<"PostIdentityVerificationSessionsSession">): Promise<StripeFullApiOperationResponseMap["PostIdentityVerificationSessionsSession"]>;
  PostIdentityVerificationSessionsSessionCancel(...args: StripeFullApiOperationArgs<"PostIdentityVerificationSessionsSessionCancel">): Promise<StripeFullApiOperationResponseMap["PostIdentityVerificationSessionsSessionCancel"]>;
  PostIdentityVerificationSessionsSessionRedact(...args: StripeFullApiOperationArgs<"PostIdentityVerificationSessionsSessionRedact">): Promise<StripeFullApiOperationResponseMap["PostIdentityVerificationSessionsSessionRedact"]>;
  PostInvoiceitems(...args: StripeFullApiOperationArgs<"PostInvoiceitems">): Promise<StripeFullApiOperationResponseMap["PostInvoiceitems"]>;
  PostInvoiceitemsInvoiceitem(...args: StripeFullApiOperationArgs<"PostInvoiceitemsInvoiceitem">): Promise<StripeFullApiOperationResponseMap["PostInvoiceitemsInvoiceitem"]>;
  PostInvoiceRenderingTemplatesTemplateArchive(...args: StripeFullApiOperationArgs<"PostInvoiceRenderingTemplatesTemplateArchive">): Promise<StripeFullApiOperationResponseMap["PostInvoiceRenderingTemplatesTemplateArchive"]>;
  PostInvoiceRenderingTemplatesTemplateUnarchive(...args: StripeFullApiOperationArgs<"PostInvoiceRenderingTemplatesTemplateUnarchive">): Promise<StripeFullApiOperationResponseMap["PostInvoiceRenderingTemplatesTemplateUnarchive"]>;
  PostInvoices(...args: StripeFullApiOperationArgs<"PostInvoices">): Promise<StripeFullApiOperationResponseMap["PostInvoices"]>;
  PostInvoicesCreatePreview(...args: StripeFullApiOperationArgs<"PostInvoicesCreatePreview">): Promise<StripeFullApiOperationResponseMap["PostInvoicesCreatePreview"]>;
  PostInvoicesInvoice(...args: StripeFullApiOperationArgs<"PostInvoicesInvoice">): Promise<StripeFullApiOperationResponseMap["PostInvoicesInvoice"]>;
  PostInvoicesInvoiceAddLines(...args: StripeFullApiOperationArgs<"PostInvoicesInvoiceAddLines">): Promise<StripeFullApiOperationResponseMap["PostInvoicesInvoiceAddLines"]>;
  PostInvoicesInvoiceAttachPayment(...args: StripeFullApiOperationArgs<"PostInvoicesInvoiceAttachPayment">): Promise<StripeFullApiOperationResponseMap["PostInvoicesInvoiceAttachPayment"]>;
  PostInvoicesInvoiceFinalize(...args: StripeFullApiOperationArgs<"PostInvoicesInvoiceFinalize">): Promise<StripeFullApiOperationResponseMap["PostInvoicesInvoiceFinalize"]>;
  PostInvoicesInvoiceLinesLineItemId(...args: StripeFullApiOperationArgs<"PostInvoicesInvoiceLinesLineItemId">): Promise<StripeFullApiOperationResponseMap["PostInvoicesInvoiceLinesLineItemId"]>;
}

export const StripeFullApiV105GeneratedFunctionNames = [
  "PostBillingCreditGrants",
  "PostBillingCreditGrantsId",
  "PostBillingCreditGrantsIdExpire",
  "PostBillingCreditGrantsIdVoid",
  "PostBillingMeterEventAdjustments",
  "PostBillingMeterEvents",
  "PostBillingMeters",
  "PostBillingMetersId",
  "PostBillingMetersIdDeactivate",
  "PostBillingMetersIdReactivate",
  "PostBillingPortalConfigurations",
  "PostBillingPortalConfigurationsConfiguration",
  "PostBillingPortalSessions",
  "PostCharges",
  "PostChargesCharge",
  "PostChargesChargeCapture",
  "PostChargesChargeDispute",
  "PostChargesChargeDisputeClose",
  "PostChargesChargeRefund",
  "PostChargesChargeRefunds",
  "PostChargesChargeRefundsRefund",
  "PostCheckoutSessions",
  "PostCheckoutSessionsSession",
  "PostCheckoutSessionsSessionExpire",
  "PostClimateOrders",
  "PostClimateOrdersOrder",
  "PostClimateOrdersOrderCancel",
  "PostCoupons",
  "PostCouponsCoupon",
  "PostCreditNotes",
  "PostCreditNotesId",
  "PostCreditNotesIdVoid",
  "PostCustomers",
  "PostCustomersCustomer",
  "PostCustomersCustomerBalanceTransactions",
  "PostCustomersCustomerBalanceTransactionsTransaction",
  "PostCustomersCustomerBankAccounts",
  "PostCustomersCustomerBankAccountsId",
  "PostCustomersCustomerBankAccountsIdVerify",
  "PostCustomersCustomerCards",
  "PostCustomersCustomerCardsId",
  "PostCustomersCustomerCashBalance",
  "PostCustomersCustomerFundingInstructions",
  "PostCustomersCustomerSources",
  "PostCustomersCustomerSourcesId",
  "PostCustomersCustomerSourcesIdVerify",
  "PostCustomersCustomerSubscriptions",
  "PostCustomersCustomerSubscriptionsSubscriptionExposedId",
  "PostCustomersCustomerTaxIds",
  "PostCustomerSessions",
  "PostDisputesDispute",
  "PostDisputesDisputeClose",
  "PostEntitlementsFeatures",
  "PostEntitlementsFeaturesId",
  "PostEphemeralKeys",
  "PostExternalAccountsId",
  "PostFileLinks",
  "PostFileLinksLink",
  "PostFiles",
  "PostFinancialConnectionsAccountsAccountDisconnect",
  "PostFinancialConnectionsAccountsAccountRefresh",
  "PostFinancialConnectionsAccountsAccountSubscribe",
  "PostFinancialConnectionsAccountsAccountUnsubscribe",
  "PostFinancialConnectionsSessions",
  "PostForwardingRequests",
  "PostIdentityVerificationSessions",
  "PostIdentityVerificationSessionsSession",
  "PostIdentityVerificationSessionsSessionCancel",
  "PostIdentityVerificationSessionsSessionRedact",
  "PostInvoiceitems",
  "PostInvoiceitemsInvoiceitem",
  "PostInvoiceRenderingTemplatesTemplateArchive",
  "PostInvoiceRenderingTemplatesTemplateUnarchive",
  "PostInvoices",
  "PostInvoicesCreatePreview",
  "PostInvoicesInvoice",
  "PostInvoicesInvoiceAddLines",
  "PostInvoicesInvoiceAttachPayment",
  "PostInvoicesInvoiceFinalize",
  "PostInvoicesInvoiceLinesLineItemId"
] as const satisfies readonly (keyof StripeFullApiV105GeneratedClient)[];

export function createStripeFullApiV105GeneratedClient(
  callOperation: StripeGeneratedOperationCaller,
): StripeFullApiV105GeneratedClient {
  return {
    PostBillingCreditGrants: (...args) => callOperation("PostBillingCreditGrants", ...(args as StripeFullApiOperationArgs<"PostBillingCreditGrants">)),
    PostBillingCreditGrantsId: (...args) => callOperation("PostBillingCreditGrantsId", ...(args as StripeFullApiOperationArgs<"PostBillingCreditGrantsId">)),
    PostBillingCreditGrantsIdExpire: (...args) => callOperation("PostBillingCreditGrantsIdExpire", ...(args as StripeFullApiOperationArgs<"PostBillingCreditGrantsIdExpire">)),
    PostBillingCreditGrantsIdVoid: (...args) => callOperation("PostBillingCreditGrantsIdVoid", ...(args as StripeFullApiOperationArgs<"PostBillingCreditGrantsIdVoid">)),
    PostBillingMeterEventAdjustments: (...args) => callOperation("PostBillingMeterEventAdjustments", ...(args as StripeFullApiOperationArgs<"PostBillingMeterEventAdjustments">)),
    PostBillingMeterEvents: (...args) => callOperation("PostBillingMeterEvents", ...(args as StripeFullApiOperationArgs<"PostBillingMeterEvents">)),
    PostBillingMeters: (...args) => callOperation("PostBillingMeters", ...(args as StripeFullApiOperationArgs<"PostBillingMeters">)),
    PostBillingMetersId: (...args) => callOperation("PostBillingMetersId", ...(args as StripeFullApiOperationArgs<"PostBillingMetersId">)),
    PostBillingMetersIdDeactivate: (...args) => callOperation("PostBillingMetersIdDeactivate", ...(args as StripeFullApiOperationArgs<"PostBillingMetersIdDeactivate">)),
    PostBillingMetersIdReactivate: (...args) => callOperation("PostBillingMetersIdReactivate", ...(args as StripeFullApiOperationArgs<"PostBillingMetersIdReactivate">)),
    PostBillingPortalConfigurations: (...args) => callOperation("PostBillingPortalConfigurations", ...(args as StripeFullApiOperationArgs<"PostBillingPortalConfigurations">)),
    PostBillingPortalConfigurationsConfiguration: (...args) => callOperation("PostBillingPortalConfigurationsConfiguration", ...(args as StripeFullApiOperationArgs<"PostBillingPortalConfigurationsConfiguration">)),
    PostBillingPortalSessions: (...args) => callOperation("PostBillingPortalSessions", ...(args as StripeFullApiOperationArgs<"PostBillingPortalSessions">)),
    PostCharges: (...args) => callOperation("PostCharges", ...(args as StripeFullApiOperationArgs<"PostCharges">)),
    PostChargesCharge: (...args) => callOperation("PostChargesCharge", ...(args as StripeFullApiOperationArgs<"PostChargesCharge">)),
    PostChargesChargeCapture: (...args) => callOperation("PostChargesChargeCapture", ...(args as StripeFullApiOperationArgs<"PostChargesChargeCapture">)),
    PostChargesChargeDispute: (...args) => callOperation("PostChargesChargeDispute", ...(args as StripeFullApiOperationArgs<"PostChargesChargeDispute">)),
    PostChargesChargeDisputeClose: (...args) => callOperation("PostChargesChargeDisputeClose", ...(args as StripeFullApiOperationArgs<"PostChargesChargeDisputeClose">)),
    PostChargesChargeRefund: (...args) => callOperation("PostChargesChargeRefund", ...(args as StripeFullApiOperationArgs<"PostChargesChargeRefund">)),
    PostChargesChargeRefunds: (...args) => callOperation("PostChargesChargeRefunds", ...(args as StripeFullApiOperationArgs<"PostChargesChargeRefunds">)),
    PostChargesChargeRefundsRefund: (...args) => callOperation("PostChargesChargeRefundsRefund", ...(args as StripeFullApiOperationArgs<"PostChargesChargeRefundsRefund">)),
    PostCheckoutSessions: (...args) => callOperation("PostCheckoutSessions", ...(args as StripeFullApiOperationArgs<"PostCheckoutSessions">)),
    PostCheckoutSessionsSession: (...args) => callOperation("PostCheckoutSessionsSession", ...(args as StripeFullApiOperationArgs<"PostCheckoutSessionsSession">)),
    PostCheckoutSessionsSessionExpire: (...args) => callOperation("PostCheckoutSessionsSessionExpire", ...(args as StripeFullApiOperationArgs<"PostCheckoutSessionsSessionExpire">)),
    PostClimateOrders: (...args) => callOperation("PostClimateOrders", ...(args as StripeFullApiOperationArgs<"PostClimateOrders">)),
    PostClimateOrdersOrder: (...args) => callOperation("PostClimateOrdersOrder", ...(args as StripeFullApiOperationArgs<"PostClimateOrdersOrder">)),
    PostClimateOrdersOrderCancel: (...args) => callOperation("PostClimateOrdersOrderCancel", ...(args as StripeFullApiOperationArgs<"PostClimateOrdersOrderCancel">)),
    PostCoupons: (...args) => callOperation("PostCoupons", ...(args as StripeFullApiOperationArgs<"PostCoupons">)),
    PostCouponsCoupon: (...args) => callOperation("PostCouponsCoupon", ...(args as StripeFullApiOperationArgs<"PostCouponsCoupon">)),
    PostCreditNotes: (...args) => callOperation("PostCreditNotes", ...(args as StripeFullApiOperationArgs<"PostCreditNotes">)),
    PostCreditNotesId: (...args) => callOperation("PostCreditNotesId", ...(args as StripeFullApiOperationArgs<"PostCreditNotesId">)),
    PostCreditNotesIdVoid: (...args) => callOperation("PostCreditNotesIdVoid", ...(args as StripeFullApiOperationArgs<"PostCreditNotesIdVoid">)),
    PostCustomers: (...args) => callOperation("PostCustomers", ...(args as StripeFullApiOperationArgs<"PostCustomers">)),
    PostCustomersCustomer: (...args) => callOperation("PostCustomersCustomer", ...(args as StripeFullApiOperationArgs<"PostCustomersCustomer">)),
    PostCustomersCustomerBalanceTransactions: (...args) => callOperation("PostCustomersCustomerBalanceTransactions", ...(args as StripeFullApiOperationArgs<"PostCustomersCustomerBalanceTransactions">)),
    PostCustomersCustomerBalanceTransactionsTransaction: (...args) => callOperation("PostCustomersCustomerBalanceTransactionsTransaction", ...(args as StripeFullApiOperationArgs<"PostCustomersCustomerBalanceTransactionsTransaction">)),
    PostCustomersCustomerBankAccounts: (...args) => callOperation("PostCustomersCustomerBankAccounts", ...(args as StripeFullApiOperationArgs<"PostCustomersCustomerBankAccounts">)),
    PostCustomersCustomerBankAccountsId: (...args) => callOperation("PostCustomersCustomerBankAccountsId", ...(args as StripeFullApiOperationArgs<"PostCustomersCustomerBankAccountsId">)),
    PostCustomersCustomerBankAccountsIdVerify: (...args) => callOperation("PostCustomersCustomerBankAccountsIdVerify", ...(args as StripeFullApiOperationArgs<"PostCustomersCustomerBankAccountsIdVerify">)),
    PostCustomersCustomerCards: (...args) => callOperation("PostCustomersCustomerCards", ...(args as StripeFullApiOperationArgs<"PostCustomersCustomerCards">)),
    PostCustomersCustomerCardsId: (...args) => callOperation("PostCustomersCustomerCardsId", ...(args as StripeFullApiOperationArgs<"PostCustomersCustomerCardsId">)),
    PostCustomersCustomerCashBalance: (...args) => callOperation("PostCustomersCustomerCashBalance", ...(args as StripeFullApiOperationArgs<"PostCustomersCustomerCashBalance">)),
    PostCustomersCustomerFundingInstructions: (...args) => callOperation("PostCustomersCustomerFundingInstructions", ...(args as StripeFullApiOperationArgs<"PostCustomersCustomerFundingInstructions">)),
    PostCustomersCustomerSources: (...args) => callOperation("PostCustomersCustomerSources", ...(args as StripeFullApiOperationArgs<"PostCustomersCustomerSources">)),
    PostCustomersCustomerSourcesId: (...args) => callOperation("PostCustomersCustomerSourcesId", ...(args as StripeFullApiOperationArgs<"PostCustomersCustomerSourcesId">)),
    PostCustomersCustomerSourcesIdVerify: (...args) => callOperation("PostCustomersCustomerSourcesIdVerify", ...(args as StripeFullApiOperationArgs<"PostCustomersCustomerSourcesIdVerify">)),
    PostCustomersCustomerSubscriptions: (...args) => callOperation("PostCustomersCustomerSubscriptions", ...(args as StripeFullApiOperationArgs<"PostCustomersCustomerSubscriptions">)),
    PostCustomersCustomerSubscriptionsSubscriptionExposedId: (...args) => callOperation("PostCustomersCustomerSubscriptionsSubscriptionExposedId", ...(args as StripeFullApiOperationArgs<"PostCustomersCustomerSubscriptionsSubscriptionExposedId">)),
    PostCustomersCustomerTaxIds: (...args) => callOperation("PostCustomersCustomerTaxIds", ...(args as StripeFullApiOperationArgs<"PostCustomersCustomerTaxIds">)),
    PostCustomerSessions: (...args) => callOperation("PostCustomerSessions", ...(args as StripeFullApiOperationArgs<"PostCustomerSessions">)),
    PostDisputesDispute: (...args) => callOperation("PostDisputesDispute", ...(args as StripeFullApiOperationArgs<"PostDisputesDispute">)),
    PostDisputesDisputeClose: (...args) => callOperation("PostDisputesDisputeClose", ...(args as StripeFullApiOperationArgs<"PostDisputesDisputeClose">)),
    PostEntitlementsFeatures: (...args) => callOperation("PostEntitlementsFeatures", ...(args as StripeFullApiOperationArgs<"PostEntitlementsFeatures">)),
    PostEntitlementsFeaturesId: (...args) => callOperation("PostEntitlementsFeaturesId", ...(args as StripeFullApiOperationArgs<"PostEntitlementsFeaturesId">)),
    PostEphemeralKeys: (...args) => callOperation("PostEphemeralKeys", ...(args as StripeFullApiOperationArgs<"PostEphemeralKeys">)),
    PostExternalAccountsId: (...args) => callOperation("PostExternalAccountsId", ...(args as StripeFullApiOperationArgs<"PostExternalAccountsId">)),
    PostFileLinks: (...args) => callOperation("PostFileLinks", ...(args as StripeFullApiOperationArgs<"PostFileLinks">)),
    PostFileLinksLink: (...args) => callOperation("PostFileLinksLink", ...(args as StripeFullApiOperationArgs<"PostFileLinksLink">)),
    PostFiles: (...args) => callOperation("PostFiles", ...(args as StripeFullApiOperationArgs<"PostFiles">)),
    PostFinancialConnectionsAccountsAccountDisconnect: (...args) => callOperation("PostFinancialConnectionsAccountsAccountDisconnect", ...(args as StripeFullApiOperationArgs<"PostFinancialConnectionsAccountsAccountDisconnect">)),
    PostFinancialConnectionsAccountsAccountRefresh: (...args) => callOperation("PostFinancialConnectionsAccountsAccountRefresh", ...(args as StripeFullApiOperationArgs<"PostFinancialConnectionsAccountsAccountRefresh">)),
    PostFinancialConnectionsAccountsAccountSubscribe: (...args) => callOperation("PostFinancialConnectionsAccountsAccountSubscribe", ...(args as StripeFullApiOperationArgs<"PostFinancialConnectionsAccountsAccountSubscribe">)),
    PostFinancialConnectionsAccountsAccountUnsubscribe: (...args) => callOperation("PostFinancialConnectionsAccountsAccountUnsubscribe", ...(args as StripeFullApiOperationArgs<"PostFinancialConnectionsAccountsAccountUnsubscribe">)),
    PostFinancialConnectionsSessions: (...args) => callOperation("PostFinancialConnectionsSessions", ...(args as StripeFullApiOperationArgs<"PostFinancialConnectionsSessions">)),
    PostForwardingRequests: (...args) => callOperation("PostForwardingRequests", ...(args as StripeFullApiOperationArgs<"PostForwardingRequests">)),
    PostIdentityVerificationSessions: (...args) => callOperation("PostIdentityVerificationSessions", ...(args as StripeFullApiOperationArgs<"PostIdentityVerificationSessions">)),
    PostIdentityVerificationSessionsSession: (...args) => callOperation("PostIdentityVerificationSessionsSession", ...(args as StripeFullApiOperationArgs<"PostIdentityVerificationSessionsSession">)),
    PostIdentityVerificationSessionsSessionCancel: (...args) => callOperation("PostIdentityVerificationSessionsSessionCancel", ...(args as StripeFullApiOperationArgs<"PostIdentityVerificationSessionsSessionCancel">)),
    PostIdentityVerificationSessionsSessionRedact: (...args) => callOperation("PostIdentityVerificationSessionsSessionRedact", ...(args as StripeFullApiOperationArgs<"PostIdentityVerificationSessionsSessionRedact">)),
    PostInvoiceitems: (...args) => callOperation("PostInvoiceitems", ...(args as StripeFullApiOperationArgs<"PostInvoiceitems">)),
    PostInvoiceitemsInvoiceitem: (...args) => callOperation("PostInvoiceitemsInvoiceitem", ...(args as StripeFullApiOperationArgs<"PostInvoiceitemsInvoiceitem">)),
    PostInvoiceRenderingTemplatesTemplateArchive: (...args) => callOperation("PostInvoiceRenderingTemplatesTemplateArchive", ...(args as StripeFullApiOperationArgs<"PostInvoiceRenderingTemplatesTemplateArchive">)),
    PostInvoiceRenderingTemplatesTemplateUnarchive: (...args) => callOperation("PostInvoiceRenderingTemplatesTemplateUnarchive", ...(args as StripeFullApiOperationArgs<"PostInvoiceRenderingTemplatesTemplateUnarchive">)),
    PostInvoices: (...args) => callOperation("PostInvoices", ...(args as StripeFullApiOperationArgs<"PostInvoices">)),
    PostInvoicesCreatePreview: (...args) => callOperation("PostInvoicesCreatePreview", ...(args as StripeFullApiOperationArgs<"PostInvoicesCreatePreview">)),
    PostInvoicesInvoice: (...args) => callOperation("PostInvoicesInvoice", ...(args as StripeFullApiOperationArgs<"PostInvoicesInvoice">)),
    PostInvoicesInvoiceAddLines: (...args) => callOperation("PostInvoicesInvoiceAddLines", ...(args as StripeFullApiOperationArgs<"PostInvoicesInvoiceAddLines">)),
    PostInvoicesInvoiceAttachPayment: (...args) => callOperation("PostInvoicesInvoiceAttachPayment", ...(args as StripeFullApiOperationArgs<"PostInvoicesInvoiceAttachPayment">)),
    PostInvoicesInvoiceFinalize: (...args) => callOperation("PostInvoicesInvoiceFinalize", ...(args as StripeFullApiOperationArgs<"PostInvoicesInvoiceFinalize">)),
    PostInvoicesInvoiceLinesLineItemId: (...args) => callOperation("PostInvoicesInvoiceLinesLineItemId", ...(args as StripeFullApiOperationArgs<"PostInvoicesInvoiceLinesLineItemId">)),
  };
}
