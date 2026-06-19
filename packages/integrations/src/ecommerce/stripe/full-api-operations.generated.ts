// Generated from Stripe OpenAPI 2026-05-27.dahlia (https://raw.githubusercontent.com/stripe/openapi/master/latest/openapi.spec3.json).
// Do not edit by hand; run scripts/generate-stripe-full-api.mjs after checking upstream docs.

export type StripeFullApiHttpMethod = "GET" | "POST" | "DELETE";

export interface StripeFullApiOperation {
  operationId: string;
  method: StripeFullApiHttpMethod;
  path: string;
  pathParameters: string[];
  requestBodyContentTypes: string[];
  summary?: string;
}

export const STRIPE_FULL_API_SPEC_SOURCE = "https://raw.githubusercontent.com/stripe/openapi/master/latest/openapi.spec3.json";
export const STRIPE_FULL_API_SPEC_VERSION = "2026-05-27.dahlia";
export const STRIPE_FULL_API_OPERATION_COUNT = 619;
export const STRIPE_FULL_API_OPERATIONS = [
  {
    "operationId": "DeleteAccountsAccount",
    "method": "DELETE",
    "path": "/v1/accounts/{account}",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete an account"
  },
  {
    "operationId": "DeleteAccountsAccountBankAccountsId",
    "method": "DELETE",
    "path": "/v1/accounts/{account}/bank_accounts/{id}",
    "pathParameters": [
      "account",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete an external account"
  },
  {
    "operationId": "DeleteAccountsAccountExternalAccountsId",
    "method": "DELETE",
    "path": "/v1/accounts/{account}/external_accounts/{id}",
    "pathParameters": [
      "account",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete an external account"
  },
  {
    "operationId": "DeleteAccountsAccountPeoplePerson",
    "method": "DELETE",
    "path": "/v1/accounts/{account}/people/{person}",
    "pathParameters": [
      "account",
      "person"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a person"
  },
  {
    "operationId": "DeleteAccountsAccountPersonsPerson",
    "method": "DELETE",
    "path": "/v1/accounts/{account}/persons/{person}",
    "pathParameters": [
      "account",
      "person"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a person"
  },
  {
    "operationId": "DeleteApplePayDomainsDomain",
    "method": "DELETE",
    "path": "/v1/apple_pay/domains/{domain}",
    "pathParameters": [
      "domain"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "DeleteCouponsCoupon",
    "method": "DELETE",
    "path": "/v1/coupons/{coupon}",
    "pathParameters": [
      "coupon"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a coupon"
  },
  {
    "operationId": "DeleteCustomersCustomer",
    "method": "DELETE",
    "path": "/v1/customers/{customer}",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a customer"
  },
  {
    "operationId": "DeleteCustomersCustomerBankAccountsId",
    "method": "DELETE",
    "path": "/v1/customers/{customer}/bank_accounts/{id}",
    "pathParameters": [
      "customer",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a customer source"
  },
  {
    "operationId": "DeleteCustomersCustomerCardsId",
    "method": "DELETE",
    "path": "/v1/customers/{customer}/cards/{id}",
    "pathParameters": [
      "customer",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a customer source"
  },
  {
    "operationId": "DeleteCustomersCustomerDiscount",
    "method": "DELETE",
    "path": "/v1/customers/{customer}/discount",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a customer discount"
  },
  {
    "operationId": "DeleteCustomersCustomerSourcesId",
    "method": "DELETE",
    "path": "/v1/customers/{customer}/sources/{id}",
    "pathParameters": [
      "customer",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a customer source"
  },
  {
    "operationId": "DeleteCustomersCustomerSubscriptionsSubscriptionExposedId",
    "method": "DELETE",
    "path": "/v1/customers/{customer}/subscriptions/{subscription_exposed_id}",
    "pathParameters": [
      "customer",
      "subscription_exposed_id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Cancel a subscription"
  },
  {
    "operationId": "DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount",
    "method": "DELETE",
    "path": "/v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount",
    "pathParameters": [
      "customer",
      "subscription_exposed_id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a customer discount"
  },
  {
    "operationId": "DeleteCustomersCustomerTaxIdsId",
    "method": "DELETE",
    "path": "/v1/customers/{customer}/tax_ids/{id}",
    "pathParameters": [
      "customer",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a Customer tax ID"
  },
  {
    "operationId": "DeleteEphemeralKeysKey",
    "method": "DELETE",
    "path": "/v1/ephemeral_keys/{key}",
    "pathParameters": [
      "key"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Immediately invalidate an ephemeral key"
  },
  {
    "operationId": "DeleteInvoiceitemsInvoiceitem",
    "method": "DELETE",
    "path": "/v1/invoiceitems/{invoiceitem}",
    "pathParameters": [
      "invoiceitem"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete an invoice item"
  },
  {
    "operationId": "DeleteInvoicesInvoice",
    "method": "DELETE",
    "path": "/v1/invoices/{invoice}",
    "pathParameters": [
      "invoice"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a draft invoice"
  },
  {
    "operationId": "DeletePlansPlan",
    "method": "DELETE",
    "path": "/v1/plans/{plan}",
    "pathParameters": [
      "plan"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a plan"
  },
  {
    "operationId": "DeleteProductsId",
    "method": "DELETE",
    "path": "/v1/products/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a product"
  },
  {
    "operationId": "DeleteProductsProductFeaturesId",
    "method": "DELETE",
    "path": "/v1/products/{product}/features/{id}",
    "pathParameters": [
      "product",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Remove a feature from a product"
  },
  {
    "operationId": "DeleteRadarValueListItemsItem",
    "method": "DELETE",
    "path": "/v1/radar/value_list_items/{item}",
    "pathParameters": [
      "item"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a value list item"
  },
  {
    "operationId": "DeleteRadarValueListsValueList",
    "method": "DELETE",
    "path": "/v1/radar/value_lists/{value_list}",
    "pathParameters": [
      "value_list"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a value list"
  },
  {
    "operationId": "DeleteSubscriptionItemsItem",
    "method": "DELETE",
    "path": "/v1/subscription_items/{item}",
    "pathParameters": [
      "item"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a subscription item"
  },
  {
    "operationId": "DeleteSubscriptionsSubscriptionExposedId",
    "method": "DELETE",
    "path": "/v1/subscriptions/{subscription_exposed_id}",
    "pathParameters": [
      "subscription_exposed_id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Cancel a subscription"
  },
  {
    "operationId": "DeleteSubscriptionsSubscriptionExposedIdDiscount",
    "method": "DELETE",
    "path": "/v1/subscriptions/{subscription_exposed_id}/discount",
    "pathParameters": [
      "subscription_exposed_id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a subscription discount"
  },
  {
    "operationId": "DeleteTaxIdsId",
    "method": "DELETE",
    "path": "/v1/tax_ids/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a tax ID"
  },
  {
    "operationId": "DeleteTerminalConfigurationsConfiguration",
    "method": "DELETE",
    "path": "/v1/terminal/configurations/{configuration}",
    "pathParameters": [
      "configuration"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a Configuration"
  },
  {
    "operationId": "DeleteTerminalLocationsLocation",
    "method": "DELETE",
    "path": "/v1/terminal/locations/{location}",
    "pathParameters": [
      "location"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a Location"
  },
  {
    "operationId": "DeleteTerminalReadersReader",
    "method": "DELETE",
    "path": "/v1/terminal/readers/{reader}",
    "pathParameters": [
      "reader"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a Reader"
  },
  {
    "operationId": "DeleteTestHelpersTestClocksTestClock",
    "method": "DELETE",
    "path": "/v1/test_helpers/test_clocks/{test_clock}",
    "pathParameters": [
      "test_clock"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a test clock"
  },
  {
    "operationId": "DeleteV2CoreAccountsAccountIdPersonsId",
    "method": "DELETE",
    "path": "/v2/core/accounts/{account_id}/persons/{id}",
    "pathParameters": [
      "account_id",
      "id"
    ],
    "requestBodyContentTypes": [],
    "summary": "Delete a person"
  },
  {
    "operationId": "DeleteV2CoreEventDestinationsId",
    "method": "DELETE",
    "path": "/v2/core/event_destinations/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [],
    "summary": "Delete an Event Destination"
  },
  {
    "operationId": "DeleteWebhookEndpointsWebhookEndpoint",
    "method": "DELETE",
    "path": "/v1/webhook_endpoints/{webhook_endpoint}",
    "pathParameters": [
      "webhook_endpoint"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a webhook endpoint"
  },
  {
    "operationId": "GetAccount",
    "method": "GET",
    "path": "/v1/account",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve account"
  },
  {
    "operationId": "GetAccounts",
    "method": "GET",
    "path": "/v1/accounts",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all connected accounts"
  },
  {
    "operationId": "GetAccountsAccount",
    "method": "GET",
    "path": "/v1/accounts/{account}",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve account"
  },
  {
    "operationId": "GetAccountsAccountBankAccountsId",
    "method": "GET",
    "path": "/v1/accounts/{account}/bank_accounts/{id}",
    "pathParameters": [
      "account",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an external account"
  },
  {
    "operationId": "GetAccountsAccountCapabilities",
    "method": "GET",
    "path": "/v1/accounts/{account}/capabilities",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all account capabilities"
  },
  {
    "operationId": "GetAccountsAccountCapabilitiesCapability",
    "method": "GET",
    "path": "/v1/accounts/{account}/capabilities/{capability}",
    "pathParameters": [
      "account",
      "capability"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an Account Capability"
  },
  {
    "operationId": "GetAccountsAccountExternalAccounts",
    "method": "GET",
    "path": "/v1/accounts/{account}/external_accounts",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all external accounts"
  },
  {
    "operationId": "GetAccountsAccountExternalAccountsId",
    "method": "GET",
    "path": "/v1/accounts/{account}/external_accounts/{id}",
    "pathParameters": [
      "account",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an external account"
  },
  {
    "operationId": "GetAccountsAccountPeople",
    "method": "GET",
    "path": "/v1/accounts/{account}/people",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all persons"
  },
  {
    "operationId": "GetAccountsAccountPeoplePerson",
    "method": "GET",
    "path": "/v1/accounts/{account}/people/{person}",
    "pathParameters": [
      "account",
      "person"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a person"
  },
  {
    "operationId": "GetAccountsAccountPersons",
    "method": "GET",
    "path": "/v1/accounts/{account}/persons",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all persons"
  },
  {
    "operationId": "GetAccountsAccountPersonsPerson",
    "method": "GET",
    "path": "/v1/accounts/{account}/persons/{person}",
    "pathParameters": [
      "account",
      "person"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a person"
  },
  {
    "operationId": "GetApplePayDomains",
    "method": "GET",
    "path": "/v1/apple_pay/domains",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "GetApplePayDomainsDomain",
    "method": "GET",
    "path": "/v1/apple_pay/domains/{domain}",
    "pathParameters": [
      "domain"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "GetApplicationFees",
    "method": "GET",
    "path": "/v1/application_fees",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all application fees"
  },
  {
    "operationId": "GetApplicationFeesFeeRefundsId",
    "method": "GET",
    "path": "/v1/application_fees/{fee}/refunds/{id}",
    "pathParameters": [
      "fee",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an application fee refund"
  },
  {
    "operationId": "GetApplicationFeesId",
    "method": "GET",
    "path": "/v1/application_fees/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an application fee"
  },
  {
    "operationId": "GetApplicationFeesIdRefunds",
    "method": "GET",
    "path": "/v1/application_fees/{id}/refunds",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all application fee refunds"
  },
  {
    "operationId": "GetAppsSecrets",
    "method": "GET",
    "path": "/v1/apps/secrets",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List secrets"
  },
  {
    "operationId": "GetAppsSecretsFind",
    "method": "GET",
    "path": "/v1/apps/secrets/find",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Find a Secret"
  },
  {
    "operationId": "GetBalance",
    "method": "GET",
    "path": "/v1/balance",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve balance"
  },
  {
    "operationId": "GetBalanceHistory",
    "method": "GET",
    "path": "/v1/balance/history",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all balance transactions"
  },
  {
    "operationId": "GetBalanceHistoryId",
    "method": "GET",
    "path": "/v1/balance/history/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a balance transaction"
  },
  {
    "operationId": "GetBalanceSettings",
    "method": "GET",
    "path": "/v1/balance_settings",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve balance settings"
  },
  {
    "operationId": "GetBalanceTransactions",
    "method": "GET",
    "path": "/v1/balance_transactions",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all balance transactions"
  },
  {
    "operationId": "GetBalanceTransactionsId",
    "method": "GET",
    "path": "/v1/balance_transactions/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a balance transaction"
  },
  {
    "operationId": "GetBillingAlerts",
    "method": "GET",
    "path": "/v1/billing/alerts",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List billing alerts"
  },
  {
    "operationId": "GetBillingAlertsId",
    "method": "GET",
    "path": "/v1/billing/alerts/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a billing alert"
  },
  {
    "operationId": "GetBillingCreditBalanceSummary",
    "method": "GET",
    "path": "/v1/billing/credit_balance_summary",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve the credit balance summary for a customer"
  },
  {
    "operationId": "GetBillingCreditBalanceTransactions",
    "method": "GET",
    "path": "/v1/billing/credit_balance_transactions",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List credit balance transactions"
  },
  {
    "operationId": "GetBillingCreditBalanceTransactionsId",
    "method": "GET",
    "path": "/v1/billing/credit_balance_transactions/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a credit balance transaction"
  },
  {
    "operationId": "GetBillingCreditGrants",
    "method": "GET",
    "path": "/v1/billing/credit_grants",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List credit grants"
  },
  {
    "operationId": "GetBillingCreditGrantsId",
    "method": "GET",
    "path": "/v1/billing/credit_grants/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a credit grant"
  },
  {
    "operationId": "GetBillingMeters",
    "method": "GET",
    "path": "/v1/billing/meters",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List billing meters"
  },
  {
    "operationId": "GetBillingMetersId",
    "method": "GET",
    "path": "/v1/billing/meters/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a billing meter"
  },
  {
    "operationId": "GetBillingMetersIdEventSummaries",
    "method": "GET",
    "path": "/v1/billing/meters/{id}/event_summaries",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List billing meter event summaries"
  },
  {
    "operationId": "GetBillingPortalConfigurations",
    "method": "GET",
    "path": "/v1/billing_portal/configurations",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List portal configurations"
  },
  {
    "operationId": "GetBillingPortalConfigurationsConfiguration",
    "method": "GET",
    "path": "/v1/billing_portal/configurations/{configuration}",
    "pathParameters": [
      "configuration"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a portal configuration"
  },
  {
    "operationId": "GetCharges",
    "method": "GET",
    "path": "/v1/charges",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all charges"
  },
  {
    "operationId": "GetChargesCharge",
    "method": "GET",
    "path": "/v1/charges/{charge}",
    "pathParameters": [
      "charge"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a charge"
  },
  {
    "operationId": "GetChargesChargeDispute",
    "method": "GET",
    "path": "/v1/charges/{charge}/dispute",
    "pathParameters": [
      "charge"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "GetChargesChargeRefunds",
    "method": "GET",
    "path": "/v1/charges/{charge}/refunds",
    "pathParameters": [
      "charge"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all refunds"
  },
  {
    "operationId": "GetChargesChargeRefundsRefund",
    "method": "GET",
    "path": "/v1/charges/{charge}/refunds/{refund}",
    "pathParameters": [
      "charge",
      "refund"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "GetChargesSearch",
    "method": "GET",
    "path": "/v1/charges/search",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Search charges"
  },
  {
    "operationId": "GetCheckoutSessions",
    "method": "GET",
    "path": "/v1/checkout/sessions",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all Checkout Sessions"
  },
  {
    "operationId": "GetCheckoutSessionsSession",
    "method": "GET",
    "path": "/v1/checkout/sessions/{session}",
    "pathParameters": [
      "session"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Checkout Session"
  },
  {
    "operationId": "GetCheckoutSessionsSessionLineItems",
    "method": "GET",
    "path": "/v1/checkout/sessions/{session}/line_items",
    "pathParameters": [
      "session"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Checkout Session's line items"
  },
  {
    "operationId": "GetClimateOrders",
    "method": "GET",
    "path": "/v1/climate/orders",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List orders"
  },
  {
    "operationId": "GetClimateOrdersOrder",
    "method": "GET",
    "path": "/v1/climate/orders/{order}",
    "pathParameters": [
      "order"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an order"
  },
  {
    "operationId": "GetClimateProducts",
    "method": "GET",
    "path": "/v1/climate/products",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List products"
  },
  {
    "operationId": "GetClimateProductsProduct",
    "method": "GET",
    "path": "/v1/climate/products/{product}",
    "pathParameters": [
      "product"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a product"
  },
  {
    "operationId": "GetClimateSuppliers",
    "method": "GET",
    "path": "/v1/climate/suppliers",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List suppliers"
  },
  {
    "operationId": "GetClimateSuppliersSupplier",
    "method": "GET",
    "path": "/v1/climate/suppliers/{supplier}",
    "pathParameters": [
      "supplier"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a supplier"
  },
  {
    "operationId": "GetConfirmationTokensConfirmationToken",
    "method": "GET",
    "path": "/v1/confirmation_tokens/{confirmation_token}",
    "pathParameters": [
      "confirmation_token"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a ConfirmationToken"
  },
  {
    "operationId": "GetCountrySpecs",
    "method": "GET",
    "path": "/v1/country_specs",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List Country Specs"
  },
  {
    "operationId": "GetCountrySpecsCountry",
    "method": "GET",
    "path": "/v1/country_specs/{country}",
    "pathParameters": [
      "country"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Country Spec"
  },
  {
    "operationId": "GetCoupons",
    "method": "GET",
    "path": "/v1/coupons",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all coupons"
  },
  {
    "operationId": "GetCouponsCoupon",
    "method": "GET",
    "path": "/v1/coupons/{coupon}",
    "pathParameters": [
      "coupon"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a coupon"
  },
  {
    "operationId": "GetCreditNotes",
    "method": "GET",
    "path": "/v1/credit_notes",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all credit notes"
  },
  {
    "operationId": "GetCreditNotesCreditNoteLines",
    "method": "GET",
    "path": "/v1/credit_notes/{credit_note}/lines",
    "pathParameters": [
      "credit_note"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a credit note's line items"
  },
  {
    "operationId": "GetCreditNotesId",
    "method": "GET",
    "path": "/v1/credit_notes/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a credit note"
  },
  {
    "operationId": "GetCreditNotesPreview",
    "method": "GET",
    "path": "/v1/credit_notes/preview",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Preview a credit note"
  },
  {
    "operationId": "GetCreditNotesPreviewLines",
    "method": "GET",
    "path": "/v1/credit_notes/preview/lines",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a credit note preview's line items"
  },
  {
    "operationId": "GetCustomers",
    "method": "GET",
    "path": "/v1/customers",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all customers"
  },
  {
    "operationId": "GetCustomersCustomer",
    "method": "GET",
    "path": "/v1/customers/{customer}",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a customer"
  },
  {
    "operationId": "GetCustomersCustomerBalanceTransactions",
    "method": "GET",
    "path": "/v1/customers/{customer}/balance_transactions",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List customer balance transactions"
  },
  {
    "operationId": "GetCustomersCustomerBalanceTransactionsTransaction",
    "method": "GET",
    "path": "/v1/customers/{customer}/balance_transactions/{transaction}",
    "pathParameters": [
      "customer",
      "transaction"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a customer balance transaction"
  },
  {
    "operationId": "GetCustomersCustomerBankAccounts",
    "method": "GET",
    "path": "/v1/customers/{customer}/bank_accounts",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all bank accounts"
  },
  {
    "operationId": "GetCustomersCustomerBankAccountsId",
    "method": "GET",
    "path": "/v1/customers/{customer}/bank_accounts/{id}",
    "pathParameters": [
      "customer",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a bank account"
  },
  {
    "operationId": "GetCustomersCustomerCards",
    "method": "GET",
    "path": "/v1/customers/{customer}/cards",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all cards"
  },
  {
    "operationId": "GetCustomersCustomerCardsId",
    "method": "GET",
    "path": "/v1/customers/{customer}/cards/{id}",
    "pathParameters": [
      "customer",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a card"
  },
  {
    "operationId": "GetCustomersCustomerCashBalance",
    "method": "GET",
    "path": "/v1/customers/{customer}/cash_balance",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a cash balance"
  },
  {
    "operationId": "GetCustomersCustomerCashBalanceTransactions",
    "method": "GET",
    "path": "/v1/customers/{customer}/cash_balance_transactions",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List cash balance transactions"
  },
  {
    "operationId": "GetCustomersCustomerCashBalanceTransactionsTransaction",
    "method": "GET",
    "path": "/v1/customers/{customer}/cash_balance_transactions/{transaction}",
    "pathParameters": [
      "customer",
      "transaction"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a cash balance transaction"
  },
  {
    "operationId": "GetCustomersCustomerDiscount",
    "method": "GET",
    "path": "/v1/customers/{customer}/discount",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "GetCustomersCustomerPaymentMethods",
    "method": "GET",
    "path": "/v1/customers/{customer}/payment_methods",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List a Customer's PaymentMethods"
  },
  {
    "operationId": "GetCustomersCustomerPaymentMethodsPaymentMethod",
    "method": "GET",
    "path": "/v1/customers/{customer}/payment_methods/{payment_method}",
    "pathParameters": [
      "customer",
      "payment_method"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Customer's PaymentMethod"
  },
  {
    "operationId": "GetCustomersCustomerSources",
    "method": "GET",
    "path": "/v1/customers/{customer}/sources",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "GetCustomersCustomerSourcesId",
    "method": "GET",
    "path": "/v1/customers/{customer}/sources/{id}",
    "pathParameters": [
      "customer",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "GetCustomersCustomerSubscriptions",
    "method": "GET",
    "path": "/v1/customers/{customer}/subscriptions",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List active subscriptions"
  },
  {
    "operationId": "GetCustomersCustomerSubscriptionsSubscriptionExposedId",
    "method": "GET",
    "path": "/v1/customers/{customer}/subscriptions/{subscription_exposed_id}",
    "pathParameters": [
      "customer",
      "subscription_exposed_id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a subscription"
  },
  {
    "operationId": "GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount",
    "method": "GET",
    "path": "/v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount",
    "pathParameters": [
      "customer",
      "subscription_exposed_id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "GetCustomersCustomerTaxIds",
    "method": "GET",
    "path": "/v1/customers/{customer}/tax_ids",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all Customer tax IDs"
  },
  {
    "operationId": "GetCustomersCustomerTaxIdsId",
    "method": "GET",
    "path": "/v1/customers/{customer}/tax_ids/{id}",
    "pathParameters": [
      "customer",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Customer tax ID"
  },
  {
    "operationId": "GetCustomersSearch",
    "method": "GET",
    "path": "/v1/customers/search",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Search customers"
  },
  {
    "operationId": "GetDisputes",
    "method": "GET",
    "path": "/v1/disputes",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all disputes"
  },
  {
    "operationId": "GetDisputesDispute",
    "method": "GET",
    "path": "/v1/disputes/{dispute}",
    "pathParameters": [
      "dispute"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a dispute"
  },
  {
    "operationId": "GetEntitlementsActiveEntitlements",
    "method": "GET",
    "path": "/v1/entitlements/active_entitlements",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all active entitlements"
  },
  {
    "operationId": "GetEntitlementsActiveEntitlementsId",
    "method": "GET",
    "path": "/v1/entitlements/active_entitlements/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an active entitlement"
  },
  {
    "operationId": "GetEntitlementsFeatures",
    "method": "GET",
    "path": "/v1/entitlements/features",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all features"
  },
  {
    "operationId": "GetEntitlementsFeaturesId",
    "method": "GET",
    "path": "/v1/entitlements/features/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a feature"
  },
  {
    "operationId": "GetEvents",
    "method": "GET",
    "path": "/v1/events",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all events"
  },
  {
    "operationId": "GetEventsId",
    "method": "GET",
    "path": "/v1/events/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an event"
  },
  {
    "operationId": "GetExchangeRates",
    "method": "GET",
    "path": "/v1/exchange_rates",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all exchange rates"
  },
  {
    "operationId": "GetExchangeRatesRateId",
    "method": "GET",
    "path": "/v1/exchange_rates/{rate_id}",
    "pathParameters": [
      "rate_id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an exchange rate"
  },
  {
    "operationId": "GetFileLinks",
    "method": "GET",
    "path": "/v1/file_links",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all file links"
  },
  {
    "operationId": "GetFileLinksLink",
    "method": "GET",
    "path": "/v1/file_links/{link}",
    "pathParameters": [
      "link"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a file link"
  },
  {
    "operationId": "GetFiles",
    "method": "GET",
    "path": "/v1/files",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all files"
  },
  {
    "operationId": "GetFilesFile",
    "method": "GET",
    "path": "/v1/files/{file}",
    "pathParameters": [
      "file"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a file"
  },
  {
    "operationId": "GetFinancialConnectionsAccounts",
    "method": "GET",
    "path": "/v1/financial_connections/accounts",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List Accounts"
  },
  {
    "operationId": "GetFinancialConnectionsAccountsAccount",
    "method": "GET",
    "path": "/v1/financial_connections/accounts/{account}",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an Account"
  },
  {
    "operationId": "GetFinancialConnectionsAccountsAccountOwners",
    "method": "GET",
    "path": "/v1/financial_connections/accounts/{account}/owners",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List Account Owners"
  },
  {
    "operationId": "GetFinancialConnectionsSessionsSession",
    "method": "GET",
    "path": "/v1/financial_connections/sessions/{session}",
    "pathParameters": [
      "session"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Session"
  },
  {
    "operationId": "GetFinancialConnectionsTransactions",
    "method": "GET",
    "path": "/v1/financial_connections/transactions",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List Transactions"
  },
  {
    "operationId": "GetFinancialConnectionsTransactionsTransaction",
    "method": "GET",
    "path": "/v1/financial_connections/transactions/{transaction}",
    "pathParameters": [
      "transaction"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Transaction"
  },
  {
    "operationId": "GetForwardingRequests",
    "method": "GET",
    "path": "/v1/forwarding/requests",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all ForwardingRequests"
  },
  {
    "operationId": "GetForwardingRequestsId",
    "method": "GET",
    "path": "/v1/forwarding/requests/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a ForwardingRequest"
  },
  {
    "operationId": "GetIdentityVerificationReports",
    "method": "GET",
    "path": "/v1/identity/verification_reports",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List VerificationReports"
  },
  {
    "operationId": "GetIdentityVerificationReportsReport",
    "method": "GET",
    "path": "/v1/identity/verification_reports/{report}",
    "pathParameters": [
      "report"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a VerificationReport"
  },
  {
    "operationId": "GetIdentityVerificationSessions",
    "method": "GET",
    "path": "/v1/identity/verification_sessions",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List VerificationSessions"
  },
  {
    "operationId": "GetIdentityVerificationSessionsSession",
    "method": "GET",
    "path": "/v1/identity/verification_sessions/{session}",
    "pathParameters": [
      "session"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a VerificationSession"
  },
  {
    "operationId": "GetInvoiceitems",
    "method": "GET",
    "path": "/v1/invoiceitems",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all invoice items"
  },
  {
    "operationId": "GetInvoiceitemsInvoiceitem",
    "method": "GET",
    "path": "/v1/invoiceitems/{invoiceitem}",
    "pathParameters": [
      "invoiceitem"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an invoice item"
  },
  {
    "operationId": "GetInvoicePayments",
    "method": "GET",
    "path": "/v1/invoice_payments",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all payments for an invoice"
  },
  {
    "operationId": "GetInvoicePaymentsInvoicePayment",
    "method": "GET",
    "path": "/v1/invoice_payments/{invoice_payment}",
    "pathParameters": [
      "invoice_payment"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an InvoicePayment"
  },
  {
    "operationId": "GetInvoiceRenderingTemplates",
    "method": "GET",
    "path": "/v1/invoice_rendering_templates",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all invoice rendering templates"
  },
  {
    "operationId": "GetInvoiceRenderingTemplatesTemplate",
    "method": "GET",
    "path": "/v1/invoice_rendering_templates/{template}",
    "pathParameters": [
      "template"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an invoice rendering template"
  },
  {
    "operationId": "GetInvoices",
    "method": "GET",
    "path": "/v1/invoices",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all invoices"
  },
  {
    "operationId": "GetInvoicesInvoice",
    "method": "GET",
    "path": "/v1/invoices/{invoice}",
    "pathParameters": [
      "invoice"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an invoice"
  },
  {
    "operationId": "GetInvoicesInvoiceLines",
    "method": "GET",
    "path": "/v1/invoices/{invoice}/lines",
    "pathParameters": [
      "invoice"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an invoice's line items"
  },
  {
    "operationId": "GetInvoicesSearch",
    "method": "GET",
    "path": "/v1/invoices/search",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Search invoices"
  },
  {
    "operationId": "GetIssuingAuthorizations",
    "method": "GET",
    "path": "/v1/issuing/authorizations",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all authorizations"
  },
  {
    "operationId": "GetIssuingAuthorizationsAuthorization",
    "method": "GET",
    "path": "/v1/issuing/authorizations/{authorization}",
    "pathParameters": [
      "authorization"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an authorization"
  },
  {
    "operationId": "GetIssuingCardholders",
    "method": "GET",
    "path": "/v1/issuing/cardholders",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all cardholders"
  },
  {
    "operationId": "GetIssuingCardholdersCardholder",
    "method": "GET",
    "path": "/v1/issuing/cardholders/{cardholder}",
    "pathParameters": [
      "cardholder"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a cardholder"
  },
  {
    "operationId": "GetIssuingCards",
    "method": "GET",
    "path": "/v1/issuing/cards",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all cards"
  },
  {
    "operationId": "GetIssuingCardsCard",
    "method": "GET",
    "path": "/v1/issuing/cards/{card}",
    "pathParameters": [
      "card"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a card"
  },
  {
    "operationId": "GetIssuingDisputes",
    "method": "GET",
    "path": "/v1/issuing/disputes",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all disputes"
  },
  {
    "operationId": "GetIssuingDisputesDispute",
    "method": "GET",
    "path": "/v1/issuing/disputes/{dispute}",
    "pathParameters": [
      "dispute"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a dispute"
  },
  {
    "operationId": "GetIssuingPersonalizationDesigns",
    "method": "GET",
    "path": "/v1/issuing/personalization_designs",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all personalization designs"
  },
  {
    "operationId": "GetIssuingPersonalizationDesignsPersonalizationDesign",
    "method": "GET",
    "path": "/v1/issuing/personalization_designs/{personalization_design}",
    "pathParameters": [
      "personalization_design"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a personalization design"
  },
  {
    "operationId": "GetIssuingPhysicalBundles",
    "method": "GET",
    "path": "/v1/issuing/physical_bundles",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all physical bundles"
  },
  {
    "operationId": "GetIssuingPhysicalBundlesPhysicalBundle",
    "method": "GET",
    "path": "/v1/issuing/physical_bundles/{physical_bundle}",
    "pathParameters": [
      "physical_bundle"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a physical bundle"
  },
  {
    "operationId": "GetIssuingSettlementsSettlement",
    "method": "GET",
    "path": "/v1/issuing/settlements/{settlement}",
    "pathParameters": [
      "settlement"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a settlement"
  },
  {
    "operationId": "GetIssuingTokens",
    "method": "GET",
    "path": "/v1/issuing/tokens",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all issuing tokens for card"
  },
  {
    "operationId": "GetIssuingTokensToken",
    "method": "GET",
    "path": "/v1/issuing/tokens/{token}",
    "pathParameters": [
      "token"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an issuing token"
  },
  {
    "operationId": "GetIssuingTransactions",
    "method": "GET",
    "path": "/v1/issuing/transactions",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all transactions"
  },
  {
    "operationId": "GetIssuingTransactionsTransaction",
    "method": "GET",
    "path": "/v1/issuing/transactions/{transaction}",
    "pathParameters": [
      "transaction"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a transaction"
  },
  {
    "operationId": "GetLinkAccountSessionsSession",
    "method": "GET",
    "path": "/v1/link_account_sessions/{session}",
    "pathParameters": [
      "session"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Session"
  },
  {
    "operationId": "GetLinkedAccounts",
    "method": "GET",
    "path": "/v1/linked_accounts",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List Accounts"
  },
  {
    "operationId": "GetLinkedAccountsAccount",
    "method": "GET",
    "path": "/v1/linked_accounts/{account}",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an Account"
  },
  {
    "operationId": "GetLinkedAccountsAccountOwners",
    "method": "GET",
    "path": "/v1/linked_accounts/{account}/owners",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List Account Owners"
  },
  {
    "operationId": "GetMandatesMandate",
    "method": "GET",
    "path": "/v1/mandates/{mandate}",
    "pathParameters": [
      "mandate"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Mandate"
  },
  {
    "operationId": "GetPaymentAttemptRecords",
    "method": "GET",
    "path": "/v1/payment_attempt_records",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List Payment Attempt Records"
  },
  {
    "operationId": "GetPaymentAttemptRecordsId",
    "method": "GET",
    "path": "/v1/payment_attempt_records/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Payment Attempt Record"
  },
  {
    "operationId": "GetPaymentIntents",
    "method": "GET",
    "path": "/v1/payment_intents",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all PaymentIntents"
  },
  {
    "operationId": "GetPaymentIntentsIntent",
    "method": "GET",
    "path": "/v1/payment_intents/{intent}",
    "pathParameters": [
      "intent"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a PaymentIntent"
  },
  {
    "operationId": "GetPaymentIntentsIntentAmountDetailsLineItems",
    "method": "GET",
    "path": "/v1/payment_intents/{intent}/amount_details_line_items",
    "pathParameters": [
      "intent"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all PaymentIntent LineItems"
  },
  {
    "operationId": "GetPaymentIntentsSearch",
    "method": "GET",
    "path": "/v1/payment_intents/search",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Search PaymentIntents"
  },
  {
    "operationId": "GetPaymentLinks",
    "method": "GET",
    "path": "/v1/payment_links",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all payment links"
  },
  {
    "operationId": "GetPaymentLinksPaymentLink",
    "method": "GET",
    "path": "/v1/payment_links/{payment_link}",
    "pathParameters": [
      "payment_link"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve payment link"
  },
  {
    "operationId": "GetPaymentLinksPaymentLinkLineItems",
    "method": "GET",
    "path": "/v1/payment_links/{payment_link}/line_items",
    "pathParameters": [
      "payment_link"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a payment link's line items"
  },
  {
    "operationId": "GetPaymentMethodConfigurations",
    "method": "GET",
    "path": "/v1/payment_method_configurations",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List payment method configurations"
  },
  {
    "operationId": "GetPaymentMethodConfigurationsConfiguration",
    "method": "GET",
    "path": "/v1/payment_method_configurations/{configuration}",
    "pathParameters": [
      "configuration"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve payment method configuration"
  },
  {
    "operationId": "GetPaymentMethodDomains",
    "method": "GET",
    "path": "/v1/payment_method_domains",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List payment method domains"
  },
  {
    "operationId": "GetPaymentMethodDomainsPaymentMethodDomain",
    "method": "GET",
    "path": "/v1/payment_method_domains/{payment_method_domain}",
    "pathParameters": [
      "payment_method_domain"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a payment method domain"
  },
  {
    "operationId": "GetPaymentMethods",
    "method": "GET",
    "path": "/v1/payment_methods",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List PaymentMethods"
  },
  {
    "operationId": "GetPaymentMethodsPaymentMethod",
    "method": "GET",
    "path": "/v1/payment_methods/{payment_method}",
    "pathParameters": [
      "payment_method"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a PaymentMethod"
  },
  {
    "operationId": "GetPaymentRecordsId",
    "method": "GET",
    "path": "/v1/payment_records/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Payment Record"
  },
  {
    "operationId": "GetPayouts",
    "method": "GET",
    "path": "/v1/payouts",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all payouts"
  },
  {
    "operationId": "GetPayoutsPayout",
    "method": "GET",
    "path": "/v1/payouts/{payout}",
    "pathParameters": [
      "payout"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a payout"
  },
  {
    "operationId": "GetPlans",
    "method": "GET",
    "path": "/v1/plans",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all plans"
  },
  {
    "operationId": "GetPlansPlan",
    "method": "GET",
    "path": "/v1/plans/{plan}",
    "pathParameters": [
      "plan"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a plan"
  },
  {
    "operationId": "GetPrices",
    "method": "GET",
    "path": "/v1/prices",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all prices"
  },
  {
    "operationId": "GetPricesPrice",
    "method": "GET",
    "path": "/v1/prices/{price}",
    "pathParameters": [
      "price"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a price"
  },
  {
    "operationId": "GetPricesSearch",
    "method": "GET",
    "path": "/v1/prices/search",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Search prices"
  },
  {
    "operationId": "GetProducts",
    "method": "GET",
    "path": "/v1/products",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all products"
  },
  {
    "operationId": "GetProductsId",
    "method": "GET",
    "path": "/v1/products/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a product"
  },
  {
    "operationId": "GetProductsProductFeatures",
    "method": "GET",
    "path": "/v1/products/{product}/features",
    "pathParameters": [
      "product"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all features attached to a product"
  },
  {
    "operationId": "GetProductsProductFeaturesId",
    "method": "GET",
    "path": "/v1/products/{product}/features/{id}",
    "pathParameters": [
      "product",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a product_feature"
  },
  {
    "operationId": "GetProductsSearch",
    "method": "GET",
    "path": "/v1/products/search",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Search products"
  },
  {
    "operationId": "GetPromotionCodes",
    "method": "GET",
    "path": "/v1/promotion_codes",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all promotion codes"
  },
  {
    "operationId": "GetPromotionCodesPromotionCode",
    "method": "GET",
    "path": "/v1/promotion_codes/{promotion_code}",
    "pathParameters": [
      "promotion_code"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a promotion code"
  },
  {
    "operationId": "GetQuotes",
    "method": "GET",
    "path": "/v1/quotes",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all quotes"
  },
  {
    "operationId": "GetQuotesQuote",
    "method": "GET",
    "path": "/v1/quotes/{quote}",
    "pathParameters": [
      "quote"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a quote"
  },
  {
    "operationId": "GetQuotesQuoteComputedUpfrontLineItems",
    "method": "GET",
    "path": "/v1/quotes/{quote}/computed_upfront_line_items",
    "pathParameters": [
      "quote"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a quote's upfront line items"
  },
  {
    "operationId": "GetQuotesQuoteLineItems",
    "method": "GET",
    "path": "/v1/quotes/{quote}/line_items",
    "pathParameters": [
      "quote"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a quote's line items"
  },
  {
    "operationId": "GetQuotesQuotePdf",
    "method": "GET",
    "path": "/v1/quotes/{quote}/pdf",
    "pathParameters": [
      "quote"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Download quote PDF"
  },
  {
    "operationId": "GetRadarEarlyFraudWarnings",
    "method": "GET",
    "path": "/v1/radar/early_fraud_warnings",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all early fraud warnings"
  },
  {
    "operationId": "GetRadarEarlyFraudWarningsEarlyFraudWarning",
    "method": "GET",
    "path": "/v1/radar/early_fraud_warnings/{early_fraud_warning}",
    "pathParameters": [
      "early_fraud_warning"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an early fraud warning"
  },
  {
    "operationId": "GetRadarValueListItems",
    "method": "GET",
    "path": "/v1/radar/value_list_items",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all value list items"
  },
  {
    "operationId": "GetRadarValueListItemsItem",
    "method": "GET",
    "path": "/v1/radar/value_list_items/{item}",
    "pathParameters": [
      "item"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a value list item"
  },
  {
    "operationId": "GetRadarValueLists",
    "method": "GET",
    "path": "/v1/radar/value_lists",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all value lists"
  },
  {
    "operationId": "GetRadarValueListsValueList",
    "method": "GET",
    "path": "/v1/radar/value_lists/{value_list}",
    "pathParameters": [
      "value_list"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a value list"
  },
  {
    "operationId": "GetRefunds",
    "method": "GET",
    "path": "/v1/refunds",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all refunds"
  },
  {
    "operationId": "GetRefundsRefund",
    "method": "GET",
    "path": "/v1/refunds/{refund}",
    "pathParameters": [
      "refund"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a refund"
  },
  {
    "operationId": "GetReportingReportRuns",
    "method": "GET",
    "path": "/v1/reporting/report_runs",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all Report Runs"
  },
  {
    "operationId": "GetReportingReportRunsReportRun",
    "method": "GET",
    "path": "/v1/reporting/report_runs/{report_run}",
    "pathParameters": [
      "report_run"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Report Run"
  },
  {
    "operationId": "GetReportingReportTypes",
    "method": "GET",
    "path": "/v1/reporting/report_types",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all Report Types"
  },
  {
    "operationId": "GetReportingReportTypesReportType",
    "method": "GET",
    "path": "/v1/reporting/report_types/{report_type}",
    "pathParameters": [
      "report_type"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Report Type"
  },
  {
    "operationId": "GetReviews",
    "method": "GET",
    "path": "/v1/reviews",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all open reviews"
  },
  {
    "operationId": "GetReviewsReview",
    "method": "GET",
    "path": "/v1/reviews/{review}",
    "pathParameters": [
      "review"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a review"
  },
  {
    "operationId": "GetSetupAttempts",
    "method": "GET",
    "path": "/v1/setup_attempts",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all SetupAttempts"
  },
  {
    "operationId": "GetSetupIntents",
    "method": "GET",
    "path": "/v1/setup_intents",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all SetupIntents"
  },
  {
    "operationId": "GetSetupIntentsIntent",
    "method": "GET",
    "path": "/v1/setup_intents/{intent}",
    "pathParameters": [
      "intent"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a SetupIntent"
  },
  {
    "operationId": "GetShippingRates",
    "method": "GET",
    "path": "/v1/shipping_rates",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all shipping rates"
  },
  {
    "operationId": "GetShippingRatesShippingRateToken",
    "method": "GET",
    "path": "/v1/shipping_rates/{shipping_rate_token}",
    "pathParameters": [
      "shipping_rate_token"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a shipping rate"
  },
  {
    "operationId": "GetSigmaScheduledQueryRuns",
    "method": "GET",
    "path": "/v1/sigma/scheduled_query_runs",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all scheduled query runs"
  },
  {
    "operationId": "GetSigmaScheduledQueryRunsScheduledQueryRun",
    "method": "GET",
    "path": "/v1/sigma/scheduled_query_runs/{scheduled_query_run}",
    "pathParameters": [
      "scheduled_query_run"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a scheduled query run"
  },
  {
    "operationId": "GetSourcesSource",
    "method": "GET",
    "path": "/v1/sources/{source}",
    "pathParameters": [
      "source"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a source"
  },
  {
    "operationId": "GetSourcesSourceMandateNotificationsMandateNotification",
    "method": "GET",
    "path": "/v1/sources/{source}/mandate_notifications/{mandate_notification}",
    "pathParameters": [
      "source",
      "mandate_notification"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Source MandateNotification"
  },
  {
    "operationId": "GetSourcesSourceSourceTransactions",
    "method": "GET",
    "path": "/v1/sources/{source}/source_transactions",
    "pathParameters": [
      "source"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "GetSourcesSourceSourceTransactionsSourceTransaction",
    "method": "GET",
    "path": "/v1/sources/{source}/source_transactions/{source_transaction}",
    "pathParameters": [
      "source",
      "source_transaction"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a source transaction"
  },
  {
    "operationId": "GetSubscriptionItems",
    "method": "GET",
    "path": "/v1/subscription_items",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all subscription items"
  },
  {
    "operationId": "GetSubscriptionItemsItem",
    "method": "GET",
    "path": "/v1/subscription_items/{item}",
    "pathParameters": [
      "item"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a subscription item"
  },
  {
    "operationId": "GetSubscriptions",
    "method": "GET",
    "path": "/v1/subscriptions",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List subscriptions"
  },
  {
    "operationId": "GetSubscriptionSchedules",
    "method": "GET",
    "path": "/v1/subscription_schedules",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all schedules"
  },
  {
    "operationId": "GetSubscriptionSchedulesSchedule",
    "method": "GET",
    "path": "/v1/subscription_schedules/{schedule}",
    "pathParameters": [
      "schedule"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a schedule"
  },
  {
    "operationId": "GetSubscriptionsSearch",
    "method": "GET",
    "path": "/v1/subscriptions/search",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Search subscriptions"
  },
  {
    "operationId": "GetSubscriptionsSubscriptionExposedId",
    "method": "GET",
    "path": "/v1/subscriptions/{subscription_exposed_id}",
    "pathParameters": [
      "subscription_exposed_id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a subscription"
  },
  {
    "operationId": "GetTaxAssociationsFind",
    "method": "GET",
    "path": "/v1/tax/associations/find",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Find a Tax Association"
  },
  {
    "operationId": "GetTaxCalculationsCalculation",
    "method": "GET",
    "path": "/v1/tax/calculations/{calculation}",
    "pathParameters": [
      "calculation"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Calculation"
  },
  {
    "operationId": "GetTaxCalculationsCalculationLineItems",
    "method": "GET",
    "path": "/v1/tax/calculations/{calculation}/line_items",
    "pathParameters": [
      "calculation"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Calculation's line items"
  },
  {
    "operationId": "GetTaxCodes",
    "method": "GET",
    "path": "/v1/tax_codes",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all tax codes"
  },
  {
    "operationId": "GetTaxCodesId",
    "method": "GET",
    "path": "/v1/tax_codes/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a tax code"
  },
  {
    "operationId": "GetTaxIds",
    "method": "GET",
    "path": "/v1/tax_ids",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all tax IDs"
  },
  {
    "operationId": "GetTaxIdsId",
    "method": "GET",
    "path": "/v1/tax_ids/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a tax ID"
  },
  {
    "operationId": "GetTaxRates",
    "method": "GET",
    "path": "/v1/tax_rates",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all tax rates"
  },
  {
    "operationId": "GetTaxRatesTaxRate",
    "method": "GET",
    "path": "/v1/tax_rates/{tax_rate}",
    "pathParameters": [
      "tax_rate"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a tax rate"
  },
  {
    "operationId": "GetTaxRegistrations",
    "method": "GET",
    "path": "/v1/tax/registrations",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List registrations"
  },
  {
    "operationId": "GetTaxRegistrationsId",
    "method": "GET",
    "path": "/v1/tax/registrations/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a registration"
  },
  {
    "operationId": "GetTaxSettings",
    "method": "GET",
    "path": "/v1/tax/settings",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve settings"
  },
  {
    "operationId": "GetTaxTransactionsTransaction",
    "method": "GET",
    "path": "/v1/tax/transactions/{transaction}",
    "pathParameters": [
      "transaction"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Transaction"
  },
  {
    "operationId": "GetTaxTransactionsTransactionLineItems",
    "method": "GET",
    "path": "/v1/tax/transactions/{transaction}/line_items",
    "pathParameters": [
      "transaction"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Transaction's line items"
  },
  {
    "operationId": "GetTerminalConfigurations",
    "method": "GET",
    "path": "/v1/terminal/configurations",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all Configurations"
  },
  {
    "operationId": "GetTerminalConfigurationsConfiguration",
    "method": "GET",
    "path": "/v1/terminal/configurations/{configuration}",
    "pathParameters": [
      "configuration"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Configuration"
  },
  {
    "operationId": "GetTerminalLocations",
    "method": "GET",
    "path": "/v1/terminal/locations",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all Locations"
  },
  {
    "operationId": "GetTerminalLocationsLocation",
    "method": "GET",
    "path": "/v1/terminal/locations/{location}",
    "pathParameters": [
      "location"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Location"
  },
  {
    "operationId": "GetTerminalReaders",
    "method": "GET",
    "path": "/v1/terminal/readers",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all Readers"
  },
  {
    "operationId": "GetTerminalReadersReader",
    "method": "GET",
    "path": "/v1/terminal/readers/{reader}",
    "pathParameters": [
      "reader"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Reader"
  },
  {
    "operationId": "GetTestHelpersTestClocks",
    "method": "GET",
    "path": "/v1/test_helpers/test_clocks",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all test clocks"
  },
  {
    "operationId": "GetTestHelpersTestClocksTestClock",
    "method": "GET",
    "path": "/v1/test_helpers/test_clocks/{test_clock}",
    "pathParameters": [
      "test_clock"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a test clock"
  },
  {
    "operationId": "GetTokensToken",
    "method": "GET",
    "path": "/v1/tokens/{token}",
    "pathParameters": [
      "token"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a token"
  },
  {
    "operationId": "GetTopups",
    "method": "GET",
    "path": "/v1/topups",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all top-ups"
  },
  {
    "operationId": "GetTopupsTopup",
    "method": "GET",
    "path": "/v1/topups/{topup}",
    "pathParameters": [
      "topup"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a top-up"
  },
  {
    "operationId": "GetTransfers",
    "method": "GET",
    "path": "/v1/transfers",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all transfers"
  },
  {
    "operationId": "GetTransfersIdReversals",
    "method": "GET",
    "path": "/v1/transfers/{id}/reversals",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all reversals"
  },
  {
    "operationId": "GetTransfersTransfer",
    "method": "GET",
    "path": "/v1/transfers/{transfer}",
    "pathParameters": [
      "transfer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a transfer"
  },
  {
    "operationId": "GetTransfersTransferReversalsId",
    "method": "GET",
    "path": "/v1/transfers/{transfer}/reversals/{id}",
    "pathParameters": [
      "transfer",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a reversal"
  },
  {
    "operationId": "GetTreasuryCreditReversals",
    "method": "GET",
    "path": "/v1/treasury/credit_reversals",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all CreditReversals"
  },
  {
    "operationId": "GetTreasuryCreditReversalsCreditReversal",
    "method": "GET",
    "path": "/v1/treasury/credit_reversals/{credit_reversal}",
    "pathParameters": [
      "credit_reversal"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a CreditReversal"
  },
  {
    "operationId": "GetTreasuryDebitReversals",
    "method": "GET",
    "path": "/v1/treasury/debit_reversals",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all DebitReversals"
  },
  {
    "operationId": "GetTreasuryDebitReversalsDebitReversal",
    "method": "GET",
    "path": "/v1/treasury/debit_reversals/{debit_reversal}",
    "pathParameters": [
      "debit_reversal"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a DebitReversal"
  },
  {
    "operationId": "GetTreasuryFinancialAccounts",
    "method": "GET",
    "path": "/v1/treasury/financial_accounts",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all FinancialAccounts"
  },
  {
    "operationId": "GetTreasuryFinancialAccountsFinancialAccount",
    "method": "GET",
    "path": "/v1/treasury/financial_accounts/{financial_account}",
    "pathParameters": [
      "financial_account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a FinancialAccount"
  },
  {
    "operationId": "GetTreasuryFinancialAccountsFinancialAccountFeatures",
    "method": "GET",
    "path": "/v1/treasury/financial_accounts/{financial_account}/features",
    "pathParameters": [
      "financial_account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve FinancialAccount Features"
  },
  {
    "operationId": "GetTreasuryInboundTransfers",
    "method": "GET",
    "path": "/v1/treasury/inbound_transfers",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all InboundTransfers"
  },
  {
    "operationId": "GetTreasuryInboundTransfersId",
    "method": "GET",
    "path": "/v1/treasury/inbound_transfers/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an InboundTransfer"
  },
  {
    "operationId": "GetTreasuryOutboundPayments",
    "method": "GET",
    "path": "/v1/treasury/outbound_payments",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all OutboundPayments"
  },
  {
    "operationId": "GetTreasuryOutboundPaymentsId",
    "method": "GET",
    "path": "/v1/treasury/outbound_payments/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an OutboundPayment"
  },
  {
    "operationId": "GetTreasuryOutboundTransfers",
    "method": "GET",
    "path": "/v1/treasury/outbound_transfers",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all OutboundTransfers"
  },
  {
    "operationId": "GetTreasuryOutboundTransfersOutboundTransfer",
    "method": "GET",
    "path": "/v1/treasury/outbound_transfers/{outbound_transfer}",
    "pathParameters": [
      "outbound_transfer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve an OutboundTransfer"
  },
  {
    "operationId": "GetTreasuryReceivedCredits",
    "method": "GET",
    "path": "/v1/treasury/received_credits",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all ReceivedCredits"
  },
  {
    "operationId": "GetTreasuryReceivedCreditsId",
    "method": "GET",
    "path": "/v1/treasury/received_credits/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a ReceivedCredit"
  },
  {
    "operationId": "GetTreasuryReceivedDebits",
    "method": "GET",
    "path": "/v1/treasury/received_debits",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all ReceivedDebits"
  },
  {
    "operationId": "GetTreasuryReceivedDebitsId",
    "method": "GET",
    "path": "/v1/treasury/received_debits/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a ReceivedDebit"
  },
  {
    "operationId": "GetTreasuryTransactionEntries",
    "method": "GET",
    "path": "/v1/treasury/transaction_entries",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all TransactionEntries"
  },
  {
    "operationId": "GetTreasuryTransactionEntriesId",
    "method": "GET",
    "path": "/v1/treasury/transaction_entries/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a TransactionEntry"
  },
  {
    "operationId": "GetTreasuryTransactions",
    "method": "GET",
    "path": "/v1/treasury/transactions",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all Transactions"
  },
  {
    "operationId": "GetTreasuryTransactionsId",
    "method": "GET",
    "path": "/v1/treasury/transactions/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a Transaction"
  },
  {
    "operationId": "GetV2CommerceProductCatalogImports",
    "method": "GET",
    "path": "/v2/commerce/product_catalog/imports",
    "pathParameters": [],
    "requestBodyContentTypes": [],
    "summary": "List Product Catalog Imports"
  },
  {
    "operationId": "GetV2CommerceProductCatalogImportsId",
    "method": "GET",
    "path": "/v2/commerce/product_catalog/imports/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [],
    "summary": "Retrieve a Product Catalog Import"
  },
  {
    "operationId": "GetV2CoreAccounts",
    "method": "GET",
    "path": "/v2/core/accounts",
    "pathParameters": [],
    "requestBodyContentTypes": [],
    "summary": "List accounts"
  },
  {
    "operationId": "GetV2CoreAccountsAccountIdPersons",
    "method": "GET",
    "path": "/v2/core/accounts/{account_id}/persons",
    "pathParameters": [
      "account_id"
    ],
    "requestBodyContentTypes": [],
    "summary": "List persons"
  },
  {
    "operationId": "GetV2CoreAccountsAccountIdPersonsId",
    "method": "GET",
    "path": "/v2/core/accounts/{account_id}/persons/{id}",
    "pathParameters": [
      "account_id",
      "id"
    ],
    "requestBodyContentTypes": [],
    "summary": "Retrieve a person"
  },
  {
    "operationId": "GetV2CoreAccountsAccountIdPersonTokensId",
    "method": "GET",
    "path": "/v2/core/accounts/{account_id}/person_tokens/{id}",
    "pathParameters": [
      "account_id",
      "id"
    ],
    "requestBodyContentTypes": [],
    "summary": "Retrieve a person token"
  },
  {
    "operationId": "GetV2CoreAccountsId",
    "method": "GET",
    "path": "/v2/core/accounts/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [],
    "summary": "Retrieve an account"
  },
  {
    "operationId": "GetV2CoreAccountTokensId",
    "method": "GET",
    "path": "/v2/core/account_tokens/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [],
    "summary": "Retrieve an account token"
  },
  {
    "operationId": "GetV2CoreEventDestinations",
    "method": "GET",
    "path": "/v2/core/event_destinations",
    "pathParameters": [],
    "requestBodyContentTypes": [],
    "summary": "List Event Destinations"
  },
  {
    "operationId": "GetV2CoreEventDestinationsId",
    "method": "GET",
    "path": "/v2/core/event_destinations/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [],
    "summary": "Retrieve an Event Destination"
  },
  {
    "operationId": "GetV2CoreEvents",
    "method": "GET",
    "path": "/v2/core/events",
    "pathParameters": [],
    "requestBodyContentTypes": [],
    "summary": "List Events"
  },
  {
    "operationId": "GetV2CoreEventsId",
    "method": "GET",
    "path": "/v2/core/events/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [],
    "summary": "Retrieve an Event"
  },
  {
    "operationId": "GetWebhookEndpoints",
    "method": "GET",
    "path": "/v1/webhook_endpoints",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "List all webhook endpoints"
  },
  {
    "operationId": "GetWebhookEndpointsWebhookEndpoint",
    "method": "GET",
    "path": "/v1/webhook_endpoints/{webhook_endpoint}",
    "pathParameters": [
      "webhook_endpoint"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Retrieve a webhook endpoint"
  },
  {
    "operationId": "PostAccountLinks",
    "method": "POST",
    "path": "/v1/account_links",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create an account link"
  },
  {
    "operationId": "PostAccounts",
    "method": "POST",
    "path": "/v1/accounts",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "PostAccountsAccount",
    "method": "POST",
    "path": "/v1/accounts/{account}",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update an account"
  },
  {
    "operationId": "PostAccountsAccountBankAccounts",
    "method": "POST",
    "path": "/v1/accounts/{account}/bank_accounts",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create an external account"
  },
  {
    "operationId": "PostAccountsAccountBankAccountsId",
    "method": "POST",
    "path": "/v1/accounts/{account}/bank_accounts/{id}",
    "pathParameters": [
      "account",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "PostAccountsAccountCapabilitiesCapability",
    "method": "POST",
    "path": "/v1/accounts/{account}/capabilities/{capability}",
    "pathParameters": [
      "account",
      "capability"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update an Account Capability"
  },
  {
    "operationId": "PostAccountsAccountExternalAccounts",
    "method": "POST",
    "path": "/v1/accounts/{account}/external_accounts",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create an external account"
  },
  {
    "operationId": "PostAccountsAccountExternalAccountsId",
    "method": "POST",
    "path": "/v1/accounts/{account}/external_accounts/{id}",
    "pathParameters": [
      "account",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "PostAccountsAccountLoginLinks",
    "method": "POST",
    "path": "/v1/accounts/{account}/login_links",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a login link"
  },
  {
    "operationId": "PostAccountsAccountPeople",
    "method": "POST",
    "path": "/v1/accounts/{account}/people",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a person"
  },
  {
    "operationId": "PostAccountsAccountPeoplePerson",
    "method": "POST",
    "path": "/v1/accounts/{account}/people/{person}",
    "pathParameters": [
      "account",
      "person"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a person"
  },
  {
    "operationId": "PostAccountsAccountPersons",
    "method": "POST",
    "path": "/v1/accounts/{account}/persons",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a person"
  },
  {
    "operationId": "PostAccountsAccountPersonsPerson",
    "method": "POST",
    "path": "/v1/accounts/{account}/persons/{person}",
    "pathParameters": [
      "account",
      "person"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a person"
  },
  {
    "operationId": "PostAccountsAccountReject",
    "method": "POST",
    "path": "/v1/accounts/{account}/reject",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Reject an account"
  },
  {
    "operationId": "PostAccountSessions",
    "method": "POST",
    "path": "/v1/account_sessions",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create an Account Session"
  },
  {
    "operationId": "PostApplePayDomains",
    "method": "POST",
    "path": "/v1/apple_pay/domains",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "PostApplicationFeesFeeRefundsId",
    "method": "POST",
    "path": "/v1/application_fees/{fee}/refunds/{id}",
    "pathParameters": [
      "fee",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update an application fee refund"
  },
  {
    "operationId": "PostApplicationFeesIdRefund",
    "method": "POST",
    "path": "/v1/application_fees/{id}/refund",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "PostApplicationFeesIdRefunds",
    "method": "POST",
    "path": "/v1/application_fees/{id}/refunds",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create an application fee refund"
  },
  {
    "operationId": "PostAppsSecrets",
    "method": "POST",
    "path": "/v1/apps/secrets",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Set a Secret"
  },
  {
    "operationId": "PostAppsSecretsDelete",
    "method": "POST",
    "path": "/v1/apps/secrets/delete",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Delete a Secret"
  },
  {
    "operationId": "PostBalanceSettings",
    "method": "POST",
    "path": "/v1/balance_settings",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update balance settings"
  },
  {
    "operationId": "PostBillingAlerts",
    "method": "POST",
    "path": "/v1/billing/alerts",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a billing alert"
  },
  {
    "operationId": "PostBillingAlertsIdActivate",
    "method": "POST",
    "path": "/v1/billing/alerts/{id}/activate",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Activate a billing alert"
  },
  {
    "operationId": "PostBillingAlertsIdArchive",
    "method": "POST",
    "path": "/v1/billing/alerts/{id}/archive",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Archive a billing alert"
  },
  {
    "operationId": "PostBillingAlertsIdDeactivate",
    "method": "POST",
    "path": "/v1/billing/alerts/{id}/deactivate",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Deactivate a billing alert"
  },
  {
    "operationId": "PostBillingCreditGrants",
    "method": "POST",
    "path": "/v1/billing/credit_grants",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a credit grant"
  },
  {
    "operationId": "PostBillingCreditGrantsId",
    "method": "POST",
    "path": "/v1/billing/credit_grants/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a credit grant"
  },
  {
    "operationId": "PostBillingCreditGrantsIdExpire",
    "method": "POST",
    "path": "/v1/billing/credit_grants/{id}/expire",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Expire a credit grant"
  },
  {
    "operationId": "PostBillingCreditGrantsIdVoid",
    "method": "POST",
    "path": "/v1/billing/credit_grants/{id}/void",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Void a credit grant"
  },
  {
    "operationId": "PostBillingMeterEventAdjustments",
    "method": "POST",
    "path": "/v1/billing/meter_event_adjustments",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a billing meter event adjustment"
  },
  {
    "operationId": "PostBillingMeterEvents",
    "method": "POST",
    "path": "/v1/billing/meter_events",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a billing meter event"
  },
  {
    "operationId": "PostBillingMeters",
    "method": "POST",
    "path": "/v1/billing/meters",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a billing meter"
  },
  {
    "operationId": "PostBillingMetersId",
    "method": "POST",
    "path": "/v1/billing/meters/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a billing meter"
  },
  {
    "operationId": "PostBillingMetersIdDeactivate",
    "method": "POST",
    "path": "/v1/billing/meters/{id}/deactivate",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Deactivate a billing meter"
  },
  {
    "operationId": "PostBillingMetersIdReactivate",
    "method": "POST",
    "path": "/v1/billing/meters/{id}/reactivate",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Reactivate a billing meter"
  },
  {
    "operationId": "PostBillingPortalConfigurations",
    "method": "POST",
    "path": "/v1/billing_portal/configurations",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a portal configuration"
  },
  {
    "operationId": "PostBillingPortalConfigurationsConfiguration",
    "method": "POST",
    "path": "/v1/billing_portal/configurations/{configuration}",
    "pathParameters": [
      "configuration"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a portal configuration"
  },
  {
    "operationId": "PostBillingPortalSessions",
    "method": "POST",
    "path": "/v1/billing_portal/sessions",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a portal session"
  },
  {
    "operationId": "PostCharges",
    "method": "POST",
    "path": "/v1/charges",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "PostChargesCharge",
    "method": "POST",
    "path": "/v1/charges/{charge}",
    "pathParameters": [
      "charge"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a charge"
  },
  {
    "operationId": "PostChargesChargeCapture",
    "method": "POST",
    "path": "/v1/charges/{charge}/capture",
    "pathParameters": [
      "charge"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Capture a payment"
  },
  {
    "operationId": "PostChargesChargeDispute",
    "method": "POST",
    "path": "/v1/charges/{charge}/dispute",
    "pathParameters": [
      "charge"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "PostChargesChargeDisputeClose",
    "method": "POST",
    "path": "/v1/charges/{charge}/dispute/close",
    "pathParameters": [
      "charge"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "PostChargesChargeRefund",
    "method": "POST",
    "path": "/v1/charges/{charge}/refund",
    "pathParameters": [
      "charge"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a refund"
  },
  {
    "operationId": "PostChargesChargeRefunds",
    "method": "POST",
    "path": "/v1/charges/{charge}/refunds",
    "pathParameters": [
      "charge"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create customer balance refund"
  },
  {
    "operationId": "PostChargesChargeRefundsRefund",
    "method": "POST",
    "path": "/v1/charges/{charge}/refunds/{refund}",
    "pathParameters": [
      "charge",
      "refund"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "PostCheckoutSessions",
    "method": "POST",
    "path": "/v1/checkout/sessions",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a Checkout Session"
  },
  {
    "operationId": "PostCheckoutSessionsSession",
    "method": "POST",
    "path": "/v1/checkout/sessions/{session}",
    "pathParameters": [
      "session"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a Checkout Session"
  },
  {
    "operationId": "PostCheckoutSessionsSessionExpire",
    "method": "POST",
    "path": "/v1/checkout/sessions/{session}/expire",
    "pathParameters": [
      "session"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Expire a Checkout Session"
  },
  {
    "operationId": "PostClimateOrders",
    "method": "POST",
    "path": "/v1/climate/orders",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create an order"
  },
  {
    "operationId": "PostClimateOrdersOrder",
    "method": "POST",
    "path": "/v1/climate/orders/{order}",
    "pathParameters": [
      "order"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update an order"
  },
  {
    "operationId": "PostClimateOrdersOrderCancel",
    "method": "POST",
    "path": "/v1/climate/orders/{order}/cancel",
    "pathParameters": [
      "order"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Cancel an order"
  },
  {
    "operationId": "PostCoupons",
    "method": "POST",
    "path": "/v1/coupons",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a coupon"
  },
  {
    "operationId": "PostCouponsCoupon",
    "method": "POST",
    "path": "/v1/coupons/{coupon}",
    "pathParameters": [
      "coupon"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a coupon"
  },
  {
    "operationId": "PostCreditNotes",
    "method": "POST",
    "path": "/v1/credit_notes",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a credit note"
  },
  {
    "operationId": "PostCreditNotesId",
    "method": "POST",
    "path": "/v1/credit_notes/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a credit note"
  },
  {
    "operationId": "PostCreditNotesIdVoid",
    "method": "POST",
    "path": "/v1/credit_notes/{id}/void",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Void a credit note"
  },
  {
    "operationId": "PostCustomers",
    "method": "POST",
    "path": "/v1/customers",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a customer"
  },
  {
    "operationId": "PostCustomersCustomer",
    "method": "POST",
    "path": "/v1/customers/{customer}",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a customer"
  },
  {
    "operationId": "PostCustomersCustomerBalanceTransactions",
    "method": "POST",
    "path": "/v1/customers/{customer}/balance_transactions",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a customer balance transaction"
  },
  {
    "operationId": "PostCustomersCustomerBalanceTransactionsTransaction",
    "method": "POST",
    "path": "/v1/customers/{customer}/balance_transactions/{transaction}",
    "pathParameters": [
      "customer",
      "transaction"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a customer credit balance transaction"
  },
  {
    "operationId": "PostCustomersCustomerBankAccounts",
    "method": "POST",
    "path": "/v1/customers/{customer}/bank_accounts",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a card"
  },
  {
    "operationId": "PostCustomersCustomerBankAccountsId",
    "method": "POST",
    "path": "/v1/customers/{customer}/bank_accounts/{id}",
    "pathParameters": [
      "customer",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "PostCustomersCustomerBankAccountsIdVerify",
    "method": "POST",
    "path": "/v1/customers/{customer}/bank_accounts/{id}/verify",
    "pathParameters": [
      "customer",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Verify a bank account"
  },
  {
    "operationId": "PostCustomersCustomerCards",
    "method": "POST",
    "path": "/v1/customers/{customer}/cards",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a card"
  },
  {
    "operationId": "PostCustomersCustomerCardsId",
    "method": "POST",
    "path": "/v1/customers/{customer}/cards/{id}",
    "pathParameters": [
      "customer",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "PostCustomersCustomerCashBalance",
    "method": "POST",
    "path": "/v1/customers/{customer}/cash_balance",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a cash balance's settings"
  },
  {
    "operationId": "PostCustomersCustomerFundingInstructions",
    "method": "POST",
    "path": "/v1/customers/{customer}/funding_instructions",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create or retrieve funding instructions for a customer cash balance"
  },
  {
    "operationId": "PostCustomersCustomerSources",
    "method": "POST",
    "path": "/v1/customers/{customer}/sources",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a card"
  },
  {
    "operationId": "PostCustomersCustomerSourcesId",
    "method": "POST",
    "path": "/v1/customers/{customer}/sources/{id}",
    "pathParameters": [
      "customer",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "PostCustomersCustomerSourcesIdVerify",
    "method": "POST",
    "path": "/v1/customers/{customer}/sources/{id}/verify",
    "pathParameters": [
      "customer",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Verify a bank account"
  },
  {
    "operationId": "PostCustomersCustomerSubscriptions",
    "method": "POST",
    "path": "/v1/customers/{customer}/subscriptions",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a subscription"
  },
  {
    "operationId": "PostCustomersCustomerSubscriptionsSubscriptionExposedId",
    "method": "POST",
    "path": "/v1/customers/{customer}/subscriptions/{subscription_exposed_id}",
    "pathParameters": [
      "customer",
      "subscription_exposed_id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a subscription on a customer"
  },
  {
    "operationId": "PostCustomersCustomerTaxIds",
    "method": "POST",
    "path": "/v1/customers/{customer}/tax_ids",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a Customer tax ID"
  },
  {
    "operationId": "PostCustomerSessions",
    "method": "POST",
    "path": "/v1/customer_sessions",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a Customer Session"
  },
  {
    "operationId": "PostDisputesDispute",
    "method": "POST",
    "path": "/v1/disputes/{dispute}",
    "pathParameters": [
      "dispute"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a dispute"
  },
  {
    "operationId": "PostDisputesDisputeClose",
    "method": "POST",
    "path": "/v1/disputes/{dispute}/close",
    "pathParameters": [
      "dispute"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Close a dispute"
  },
  {
    "operationId": "PostEntitlementsFeatures",
    "method": "POST",
    "path": "/v1/entitlements/features",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a feature"
  },
  {
    "operationId": "PostEntitlementsFeaturesId",
    "method": "POST",
    "path": "/v1/entitlements/features/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Updates a feature"
  },
  {
    "operationId": "PostEphemeralKeys",
    "method": "POST",
    "path": "/v1/ephemeral_keys",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create an ephemeral key"
  },
  {
    "operationId": "PostExternalAccountsId",
    "method": "POST",
    "path": "/v1/external_accounts/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "PostFileLinks",
    "method": "POST",
    "path": "/v1/file_links",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a file link"
  },
  {
    "operationId": "PostFileLinksLink",
    "method": "POST",
    "path": "/v1/file_links/{link}",
    "pathParameters": [
      "link"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a file link"
  },
  {
    "operationId": "PostFiles",
    "method": "POST",
    "path": "/v1/files",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "multipart/form-data"
    ],
    "summary": "Create a file"
  },
  {
    "operationId": "PostFinancialConnectionsAccountsAccountDisconnect",
    "method": "POST",
    "path": "/v1/financial_connections/accounts/{account}/disconnect",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Disconnect an Account"
  },
  {
    "operationId": "PostFinancialConnectionsAccountsAccountRefresh",
    "method": "POST",
    "path": "/v1/financial_connections/accounts/{account}/refresh",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Refresh Account data"
  },
  {
    "operationId": "PostFinancialConnectionsAccountsAccountSubscribe",
    "method": "POST",
    "path": "/v1/financial_connections/accounts/{account}/subscribe",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Subscribe to data refreshes for an Account"
  },
  {
    "operationId": "PostFinancialConnectionsAccountsAccountUnsubscribe",
    "method": "POST",
    "path": "/v1/financial_connections/accounts/{account}/unsubscribe",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Unsubscribe from data refreshes for an Account"
  },
  {
    "operationId": "PostFinancialConnectionsSessions",
    "method": "POST",
    "path": "/v1/financial_connections/sessions",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a Session"
  },
  {
    "operationId": "PostForwardingRequests",
    "method": "POST",
    "path": "/v1/forwarding/requests",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a ForwardingRequest"
  },
  {
    "operationId": "PostIdentityVerificationSessions",
    "method": "POST",
    "path": "/v1/identity/verification_sessions",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a VerificationSession"
  },
  {
    "operationId": "PostIdentityVerificationSessionsSession",
    "method": "POST",
    "path": "/v1/identity/verification_sessions/{session}",
    "pathParameters": [
      "session"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a VerificationSession"
  },
  {
    "operationId": "PostIdentityVerificationSessionsSessionCancel",
    "method": "POST",
    "path": "/v1/identity/verification_sessions/{session}/cancel",
    "pathParameters": [
      "session"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Cancel a VerificationSession"
  },
  {
    "operationId": "PostIdentityVerificationSessionsSessionRedact",
    "method": "POST",
    "path": "/v1/identity/verification_sessions/{session}/redact",
    "pathParameters": [
      "session"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Redact a VerificationSession"
  },
  {
    "operationId": "PostInvoiceitems",
    "method": "POST",
    "path": "/v1/invoiceitems",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create an invoice item"
  },
  {
    "operationId": "PostInvoiceitemsInvoiceitem",
    "method": "POST",
    "path": "/v1/invoiceitems/{invoiceitem}",
    "pathParameters": [
      "invoiceitem"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update an invoice item"
  },
  {
    "operationId": "PostInvoiceRenderingTemplatesTemplateArchive",
    "method": "POST",
    "path": "/v1/invoice_rendering_templates/{template}/archive",
    "pathParameters": [
      "template"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Archive an invoice rendering template"
  },
  {
    "operationId": "PostInvoiceRenderingTemplatesTemplateUnarchive",
    "method": "POST",
    "path": "/v1/invoice_rendering_templates/{template}/unarchive",
    "pathParameters": [
      "template"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Unarchive an invoice rendering template"
  },
  {
    "operationId": "PostInvoices",
    "method": "POST",
    "path": "/v1/invoices",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create an invoice"
  },
  {
    "operationId": "PostInvoicesCreatePreview",
    "method": "POST",
    "path": "/v1/invoices/create_preview",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a preview invoice"
  },
  {
    "operationId": "PostInvoicesInvoice",
    "method": "POST",
    "path": "/v1/invoices/{invoice}",
    "pathParameters": [
      "invoice"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update an invoice"
  },
  {
    "operationId": "PostInvoicesInvoiceAddLines",
    "method": "POST",
    "path": "/v1/invoices/{invoice}/add_lines",
    "pathParameters": [
      "invoice"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Bulk add invoice line items"
  },
  {
    "operationId": "PostInvoicesInvoiceAttachPayment",
    "method": "POST",
    "path": "/v1/invoices/{invoice}/attach_payment",
    "pathParameters": [
      "invoice"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Attach a payment to an Invoice"
  },
  {
    "operationId": "PostInvoicesInvoiceFinalize",
    "method": "POST",
    "path": "/v1/invoices/{invoice}/finalize",
    "pathParameters": [
      "invoice"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Finalize an invoice"
  },
  {
    "operationId": "PostInvoicesInvoiceLinesLineItemId",
    "method": "POST",
    "path": "/v1/invoices/{invoice}/lines/{line_item_id}",
    "pathParameters": [
      "invoice",
      "line_item_id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update an invoice's line item"
  },
  {
    "operationId": "PostInvoicesInvoiceMarkUncollectible",
    "method": "POST",
    "path": "/v1/invoices/{invoice}/mark_uncollectible",
    "pathParameters": [
      "invoice"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Mark an invoice as uncollectible"
  },
  {
    "operationId": "PostInvoicesInvoicePay",
    "method": "POST",
    "path": "/v1/invoices/{invoice}/pay",
    "pathParameters": [
      "invoice"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Pay an invoice"
  },
  {
    "operationId": "PostInvoicesInvoiceRemoveLines",
    "method": "POST",
    "path": "/v1/invoices/{invoice}/remove_lines",
    "pathParameters": [
      "invoice"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Bulk remove invoice line items"
  },
  {
    "operationId": "PostInvoicesInvoiceSend",
    "method": "POST",
    "path": "/v1/invoices/{invoice}/send",
    "pathParameters": [
      "invoice"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Send an invoice for manual payment"
  },
  {
    "operationId": "PostInvoicesInvoiceUpdateLines",
    "method": "POST",
    "path": "/v1/invoices/{invoice}/update_lines",
    "pathParameters": [
      "invoice"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Bulk update invoice line items"
  },
  {
    "operationId": "PostInvoicesInvoiceVoid",
    "method": "POST",
    "path": "/v1/invoices/{invoice}/void",
    "pathParameters": [
      "invoice"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Void an invoice"
  },
  {
    "operationId": "PostIssuingAuthorizationsAuthorization",
    "method": "POST",
    "path": "/v1/issuing/authorizations/{authorization}",
    "pathParameters": [
      "authorization"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update an authorization"
  },
  {
    "operationId": "PostIssuingAuthorizationsAuthorizationApprove",
    "method": "POST",
    "path": "/v1/issuing/authorizations/{authorization}/approve",
    "pathParameters": [
      "authorization"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Approve an authorization"
  },
  {
    "operationId": "PostIssuingAuthorizationsAuthorizationDecline",
    "method": "POST",
    "path": "/v1/issuing/authorizations/{authorization}/decline",
    "pathParameters": [
      "authorization"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Decline an authorization"
  },
  {
    "operationId": "PostIssuingCardholders",
    "method": "POST",
    "path": "/v1/issuing/cardholders",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a cardholder"
  },
  {
    "operationId": "PostIssuingCardholdersCardholder",
    "method": "POST",
    "path": "/v1/issuing/cardholders/{cardholder}",
    "pathParameters": [
      "cardholder"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a cardholder"
  },
  {
    "operationId": "PostIssuingCards",
    "method": "POST",
    "path": "/v1/issuing/cards",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a card"
  },
  {
    "operationId": "PostIssuingCardsCard",
    "method": "POST",
    "path": "/v1/issuing/cards/{card}",
    "pathParameters": [
      "card"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a card"
  },
  {
    "operationId": "PostIssuingDisputes",
    "method": "POST",
    "path": "/v1/issuing/disputes",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a dispute"
  },
  {
    "operationId": "PostIssuingDisputesDispute",
    "method": "POST",
    "path": "/v1/issuing/disputes/{dispute}",
    "pathParameters": [
      "dispute"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a dispute"
  },
  {
    "operationId": "PostIssuingDisputesDisputeSubmit",
    "method": "POST",
    "path": "/v1/issuing/disputes/{dispute}/submit",
    "pathParameters": [
      "dispute"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Submit a dispute"
  },
  {
    "operationId": "PostIssuingPersonalizationDesigns",
    "method": "POST",
    "path": "/v1/issuing/personalization_designs",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a personalization design"
  },
  {
    "operationId": "PostIssuingPersonalizationDesignsPersonalizationDesign",
    "method": "POST",
    "path": "/v1/issuing/personalization_designs/{personalization_design}",
    "pathParameters": [
      "personalization_design"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a personalization design"
  },
  {
    "operationId": "PostIssuingSettlementsSettlement",
    "method": "POST",
    "path": "/v1/issuing/settlements/{settlement}",
    "pathParameters": [
      "settlement"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a settlement"
  },
  {
    "operationId": "PostIssuingTokensToken",
    "method": "POST",
    "path": "/v1/issuing/tokens/{token}",
    "pathParameters": [
      "token"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a token status"
  },
  {
    "operationId": "PostIssuingTransactionsTransaction",
    "method": "POST",
    "path": "/v1/issuing/transactions/{transaction}",
    "pathParameters": [
      "transaction"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a transaction"
  },
  {
    "operationId": "PostLinkAccountSessions",
    "method": "POST",
    "path": "/v1/link_account_sessions",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a Session"
  },
  {
    "operationId": "PostLinkedAccountsAccountDisconnect",
    "method": "POST",
    "path": "/v1/linked_accounts/{account}/disconnect",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Disconnect an Account"
  },
  {
    "operationId": "PostLinkedAccountsAccountRefresh",
    "method": "POST",
    "path": "/v1/linked_accounts/{account}/refresh",
    "pathParameters": [
      "account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Refresh Account data"
  },
  {
    "operationId": "PostPaymentIntents",
    "method": "POST",
    "path": "/v1/payment_intents",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a PaymentIntent"
  },
  {
    "operationId": "PostPaymentIntentsIntent",
    "method": "POST",
    "path": "/v1/payment_intents/{intent}",
    "pathParameters": [
      "intent"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a PaymentIntent"
  },
  {
    "operationId": "PostPaymentIntentsIntentApplyCustomerBalance",
    "method": "POST",
    "path": "/v1/payment_intents/{intent}/apply_customer_balance",
    "pathParameters": [
      "intent"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Reconcile a customer_balance PaymentIntent"
  },
  {
    "operationId": "PostPaymentIntentsIntentCancel",
    "method": "POST",
    "path": "/v1/payment_intents/{intent}/cancel",
    "pathParameters": [
      "intent"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Cancel a PaymentIntent"
  },
  {
    "operationId": "PostPaymentIntentsIntentCapture",
    "method": "POST",
    "path": "/v1/payment_intents/{intent}/capture",
    "pathParameters": [
      "intent"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Capture a PaymentIntent"
  },
  {
    "operationId": "PostPaymentIntentsIntentConfirm",
    "method": "POST",
    "path": "/v1/payment_intents/{intent}/confirm",
    "pathParameters": [
      "intent"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Confirm a PaymentIntent"
  },
  {
    "operationId": "PostPaymentIntentsIntentIncrementAuthorization",
    "method": "POST",
    "path": "/v1/payment_intents/{intent}/increment_authorization",
    "pathParameters": [
      "intent"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Increment an authorization"
  },
  {
    "operationId": "PostPaymentIntentsIntentVerifyMicrodeposits",
    "method": "POST",
    "path": "/v1/payment_intents/{intent}/verify_microdeposits",
    "pathParameters": [
      "intent"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Verify microdeposits on a PaymentIntent"
  },
  {
    "operationId": "PostPaymentLinks",
    "method": "POST",
    "path": "/v1/payment_links",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a payment link"
  },
  {
    "operationId": "PostPaymentLinksPaymentLink",
    "method": "POST",
    "path": "/v1/payment_links/{payment_link}",
    "pathParameters": [
      "payment_link"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a payment link"
  },
  {
    "operationId": "PostPaymentMethodConfigurations",
    "method": "POST",
    "path": "/v1/payment_method_configurations",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a payment method configuration"
  },
  {
    "operationId": "PostPaymentMethodConfigurationsConfiguration",
    "method": "POST",
    "path": "/v1/payment_method_configurations/{configuration}",
    "pathParameters": [
      "configuration"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update payment method configuration"
  },
  {
    "operationId": "PostPaymentMethodDomains",
    "method": "POST",
    "path": "/v1/payment_method_domains",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a payment method domain"
  },
  {
    "operationId": "PostPaymentMethodDomainsPaymentMethodDomain",
    "method": "POST",
    "path": "/v1/payment_method_domains/{payment_method_domain}",
    "pathParameters": [
      "payment_method_domain"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a payment method domain"
  },
  {
    "operationId": "PostPaymentMethodDomainsPaymentMethodDomainValidate",
    "method": "POST",
    "path": "/v1/payment_method_domains/{payment_method_domain}/validate",
    "pathParameters": [
      "payment_method_domain"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Validate an existing payment method domain"
  },
  {
    "operationId": "PostPaymentMethods",
    "method": "POST",
    "path": "/v1/payment_methods",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Shares a PaymentMethod"
  },
  {
    "operationId": "PostPaymentMethodsPaymentMethod",
    "method": "POST",
    "path": "/v1/payment_methods/{payment_method}",
    "pathParameters": [
      "payment_method"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a PaymentMethod"
  },
  {
    "operationId": "PostPaymentMethodsPaymentMethodAttach",
    "method": "POST",
    "path": "/v1/payment_methods/{payment_method}/attach",
    "pathParameters": [
      "payment_method"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Attach a PaymentMethod to a Customer"
  },
  {
    "operationId": "PostPaymentMethodsPaymentMethodDetach",
    "method": "POST",
    "path": "/v1/payment_methods/{payment_method}/detach",
    "pathParameters": [
      "payment_method"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Detach a PaymentMethod from a Customer"
  },
  {
    "operationId": "PostPaymentRecordsIdReportPaymentAttempt",
    "method": "POST",
    "path": "/v1/payment_records/{id}/report_payment_attempt",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Report a payment attempt"
  },
  {
    "operationId": "PostPaymentRecordsIdReportPaymentAttemptCanceled",
    "method": "POST",
    "path": "/v1/payment_records/{id}/report_payment_attempt_canceled",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Report payment attempt canceled"
  },
  {
    "operationId": "PostPaymentRecordsIdReportPaymentAttemptFailed",
    "method": "POST",
    "path": "/v1/payment_records/{id}/report_payment_attempt_failed",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Report payment attempt failed"
  },
  {
    "operationId": "PostPaymentRecordsIdReportPaymentAttemptGuaranteed",
    "method": "POST",
    "path": "/v1/payment_records/{id}/report_payment_attempt_guaranteed",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Report payment attempt guaranteed"
  },
  {
    "operationId": "PostPaymentRecordsIdReportPaymentAttemptInformational",
    "method": "POST",
    "path": "/v1/payment_records/{id}/report_payment_attempt_informational",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Report payment attempt informational"
  },
  {
    "operationId": "PostPaymentRecordsIdReportRefund",
    "method": "POST",
    "path": "/v1/payment_records/{id}/report_refund",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Report a refund"
  },
  {
    "operationId": "PostPaymentRecordsReportPayment",
    "method": "POST",
    "path": "/v1/payment_records/report_payment",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Report a payment"
  },
  {
    "operationId": "PostPayouts",
    "method": "POST",
    "path": "/v1/payouts",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a payout"
  },
  {
    "operationId": "PostPayoutsPayout",
    "method": "POST",
    "path": "/v1/payouts/{payout}",
    "pathParameters": [
      "payout"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a payout"
  },
  {
    "operationId": "PostPayoutsPayoutCancel",
    "method": "POST",
    "path": "/v1/payouts/{payout}/cancel",
    "pathParameters": [
      "payout"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Cancel a payout"
  },
  {
    "operationId": "PostPayoutsPayoutReverse",
    "method": "POST",
    "path": "/v1/payouts/{payout}/reverse",
    "pathParameters": [
      "payout"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Reverse a payout"
  },
  {
    "operationId": "PostPlans",
    "method": "POST",
    "path": "/v1/plans",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a plan"
  },
  {
    "operationId": "PostPlansPlan",
    "method": "POST",
    "path": "/v1/plans/{plan}",
    "pathParameters": [
      "plan"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a plan"
  },
  {
    "operationId": "PostPrices",
    "method": "POST",
    "path": "/v1/prices",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a price"
  },
  {
    "operationId": "PostPricesPrice",
    "method": "POST",
    "path": "/v1/prices/{price}",
    "pathParameters": [
      "price"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a price"
  },
  {
    "operationId": "PostProducts",
    "method": "POST",
    "path": "/v1/products",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a product"
  },
  {
    "operationId": "PostProductsId",
    "method": "POST",
    "path": "/v1/products/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a product"
  },
  {
    "operationId": "PostProductsProductFeatures",
    "method": "POST",
    "path": "/v1/products/{product}/features",
    "pathParameters": [
      "product"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Attach a feature to a product"
  },
  {
    "operationId": "PostPromotionCodes",
    "method": "POST",
    "path": "/v1/promotion_codes",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a promotion code"
  },
  {
    "operationId": "PostPromotionCodesPromotionCode",
    "method": "POST",
    "path": "/v1/promotion_codes/{promotion_code}",
    "pathParameters": [
      "promotion_code"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a promotion code"
  },
  {
    "operationId": "PostQuotes",
    "method": "POST",
    "path": "/v1/quotes",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a quote"
  },
  {
    "operationId": "PostQuotesQuote",
    "method": "POST",
    "path": "/v1/quotes/{quote}",
    "pathParameters": [
      "quote"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a quote"
  },
  {
    "operationId": "PostQuotesQuoteAccept",
    "method": "POST",
    "path": "/v1/quotes/{quote}/accept",
    "pathParameters": [
      "quote"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Accept a quote"
  },
  {
    "operationId": "PostQuotesQuoteCancel",
    "method": "POST",
    "path": "/v1/quotes/{quote}/cancel",
    "pathParameters": [
      "quote"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Cancel a quote"
  },
  {
    "operationId": "PostQuotesQuoteFinalize",
    "method": "POST",
    "path": "/v1/quotes/{quote}/finalize",
    "pathParameters": [
      "quote"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Finalize a quote"
  },
  {
    "operationId": "PostRadarPaymentEvaluations",
    "method": "POST",
    "path": "/v1/radar/payment_evaluations",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a Payment Evaluation"
  },
  {
    "operationId": "PostRadarValueListItems",
    "method": "POST",
    "path": "/v1/radar/value_list_items",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a value list item"
  },
  {
    "operationId": "PostRadarValueLists",
    "method": "POST",
    "path": "/v1/radar/value_lists",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a value list"
  },
  {
    "operationId": "PostRadarValueListsValueList",
    "method": "POST",
    "path": "/v1/radar/value_lists/{value_list}",
    "pathParameters": [
      "value_list"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a value list"
  },
  {
    "operationId": "PostRefunds",
    "method": "POST",
    "path": "/v1/refunds",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create customer balance refund"
  },
  {
    "operationId": "PostRefundsRefund",
    "method": "POST",
    "path": "/v1/refunds/{refund}",
    "pathParameters": [
      "refund"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a refund"
  },
  {
    "operationId": "PostRefundsRefundCancel",
    "method": "POST",
    "path": "/v1/refunds/{refund}/cancel",
    "pathParameters": [
      "refund"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Cancel a refund"
  },
  {
    "operationId": "PostReportingReportRuns",
    "method": "POST",
    "path": "/v1/reporting/report_runs",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a Report Run"
  },
  {
    "operationId": "PostReviewsReviewApprove",
    "method": "POST",
    "path": "/v1/reviews/{review}/approve",
    "pathParameters": [
      "review"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Approve a review"
  },
  {
    "operationId": "PostSetupIntents",
    "method": "POST",
    "path": "/v1/setup_intents",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a SetupIntent"
  },
  {
    "operationId": "PostSetupIntentsIntent",
    "method": "POST",
    "path": "/v1/setup_intents/{intent}",
    "pathParameters": [
      "intent"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a SetupIntent"
  },
  {
    "operationId": "PostSetupIntentsIntentCancel",
    "method": "POST",
    "path": "/v1/setup_intents/{intent}/cancel",
    "pathParameters": [
      "intent"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Cancel a SetupIntent"
  },
  {
    "operationId": "PostSetupIntentsIntentConfirm",
    "method": "POST",
    "path": "/v1/setup_intents/{intent}/confirm",
    "pathParameters": [
      "intent"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Confirm a SetupIntent"
  },
  {
    "operationId": "PostSetupIntentsIntentVerifyMicrodeposits",
    "method": "POST",
    "path": "/v1/setup_intents/{intent}/verify_microdeposits",
    "pathParameters": [
      "intent"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Verify microdeposits on a SetupIntent"
  },
  {
    "operationId": "PostShippingRates",
    "method": "POST",
    "path": "/v1/shipping_rates",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a shipping rate"
  },
  {
    "operationId": "PostShippingRatesShippingRateToken",
    "method": "POST",
    "path": "/v1/shipping_rates/{shipping_rate_token}",
    "pathParameters": [
      "shipping_rate_token"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a shipping rate"
  },
  {
    "operationId": "PostSigmaSavedQueriesId",
    "method": "POST",
    "path": "/v1/sigma/saved_queries/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update an existing Sigma Query"
  },
  {
    "operationId": "PostSources",
    "method": "POST",
    "path": "/v1/sources",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Shares a source"
  },
  {
    "operationId": "PostSourcesSource",
    "method": "POST",
    "path": "/v1/sources/{source}",
    "pathParameters": [
      "source"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a source"
  },
  {
    "operationId": "PostSourcesSourceVerify",
    "method": "POST",
    "path": "/v1/sources/{source}/verify",
    "pathParameters": [
      "source"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ]
  },
  {
    "operationId": "PostSubscriptionItems",
    "method": "POST",
    "path": "/v1/subscription_items",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a subscription item"
  },
  {
    "operationId": "PostSubscriptionItemsItem",
    "method": "POST",
    "path": "/v1/subscription_items/{item}",
    "pathParameters": [
      "item"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a subscription item"
  },
  {
    "operationId": "PostSubscriptions",
    "method": "POST",
    "path": "/v1/subscriptions",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a subscription"
  },
  {
    "operationId": "PostSubscriptionSchedules",
    "method": "POST",
    "path": "/v1/subscription_schedules",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a schedule"
  },
  {
    "operationId": "PostSubscriptionSchedulesSchedule",
    "method": "POST",
    "path": "/v1/subscription_schedules/{schedule}",
    "pathParameters": [
      "schedule"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a schedule"
  },
  {
    "operationId": "PostSubscriptionSchedulesScheduleCancel",
    "method": "POST",
    "path": "/v1/subscription_schedules/{schedule}/cancel",
    "pathParameters": [
      "schedule"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Cancel a schedule"
  },
  {
    "operationId": "PostSubscriptionSchedulesScheduleRelease",
    "method": "POST",
    "path": "/v1/subscription_schedules/{schedule}/release",
    "pathParameters": [
      "schedule"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Release a schedule"
  },
  {
    "operationId": "PostSubscriptionsSubscriptionExposedId",
    "method": "POST",
    "path": "/v1/subscriptions/{subscription_exposed_id}",
    "pathParameters": [
      "subscription_exposed_id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a subscription"
  },
  {
    "operationId": "PostSubscriptionsSubscriptionMigrate",
    "method": "POST",
    "path": "/v1/subscriptions/{subscription}/migrate",
    "pathParameters": [
      "subscription"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Migrate a subscription"
  },
  {
    "operationId": "PostSubscriptionsSubscriptionResume",
    "method": "POST",
    "path": "/v1/subscriptions/{subscription}/resume",
    "pathParameters": [
      "subscription"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Resume a subscription"
  },
  {
    "operationId": "PostTaxCalculations",
    "method": "POST",
    "path": "/v1/tax/calculations",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a Calculation"
  },
  {
    "operationId": "PostTaxIds",
    "method": "POST",
    "path": "/v1/tax_ids",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a tax ID"
  },
  {
    "operationId": "PostTaxRates",
    "method": "POST",
    "path": "/v1/tax_rates",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a tax rate"
  },
  {
    "operationId": "PostTaxRatesTaxRate",
    "method": "POST",
    "path": "/v1/tax_rates/{tax_rate}",
    "pathParameters": [
      "tax_rate"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a tax rate"
  },
  {
    "operationId": "PostTaxRegistrations",
    "method": "POST",
    "path": "/v1/tax/registrations",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a registration"
  },
  {
    "operationId": "PostTaxRegistrationsId",
    "method": "POST",
    "path": "/v1/tax/registrations/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a registration"
  },
  {
    "operationId": "PostTaxSettings",
    "method": "POST",
    "path": "/v1/tax/settings",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update settings"
  },
  {
    "operationId": "PostTaxTransactionsCreateFromCalculation",
    "method": "POST",
    "path": "/v1/tax/transactions/create_from_calculation",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a Transaction from a Calculation"
  },
  {
    "operationId": "PostTaxTransactionsCreateReversal",
    "method": "POST",
    "path": "/v1/tax/transactions/create_reversal",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a reversal Transaction"
  },
  {
    "operationId": "PostTerminalConfigurations",
    "method": "POST",
    "path": "/v1/terminal/configurations",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a Configuration"
  },
  {
    "operationId": "PostTerminalConfigurationsConfiguration",
    "method": "POST",
    "path": "/v1/terminal/configurations/{configuration}",
    "pathParameters": [
      "configuration"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a Configuration"
  },
  {
    "operationId": "PostTerminalConnectionTokens",
    "method": "POST",
    "path": "/v1/terminal/connection_tokens",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a Connection Token"
  },
  {
    "operationId": "PostTerminalLocations",
    "method": "POST",
    "path": "/v1/terminal/locations",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a Location"
  },
  {
    "operationId": "PostTerminalLocationsLocation",
    "method": "POST",
    "path": "/v1/terminal/locations/{location}",
    "pathParameters": [
      "location"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a Location"
  },
  {
    "operationId": "PostTerminalOnboardingLinks",
    "method": "POST",
    "path": "/v1/terminal/onboarding_links",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create an Onboarding Link"
  },
  {
    "operationId": "PostTerminalReaders",
    "method": "POST",
    "path": "/v1/terminal/readers",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a Reader"
  },
  {
    "operationId": "PostTerminalReadersReader",
    "method": "POST",
    "path": "/v1/terminal/readers/{reader}",
    "pathParameters": [
      "reader"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a Reader"
  },
  {
    "operationId": "PostTerminalReadersReaderCancelAction",
    "method": "POST",
    "path": "/v1/terminal/readers/{reader}/cancel_action",
    "pathParameters": [
      "reader"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Cancel the current reader action"
  },
  {
    "operationId": "PostTerminalReadersReaderCollectInputs",
    "method": "POST",
    "path": "/v1/terminal/readers/{reader}/collect_inputs",
    "pathParameters": [
      "reader"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Collect inputs using a Reader"
  },
  {
    "operationId": "PostTerminalReadersReaderCollectPaymentMethod",
    "method": "POST",
    "path": "/v1/terminal/readers/{reader}/collect_payment_method",
    "pathParameters": [
      "reader"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Hand off a PaymentIntent to a Reader and collect card details"
  },
  {
    "operationId": "PostTerminalReadersReaderConfirmPaymentIntent",
    "method": "POST",
    "path": "/v1/terminal/readers/{reader}/confirm_payment_intent",
    "pathParameters": [
      "reader"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Confirm a PaymentIntent on the Reader"
  },
  {
    "operationId": "PostTerminalReadersReaderProcessPaymentIntent",
    "method": "POST",
    "path": "/v1/terminal/readers/{reader}/process_payment_intent",
    "pathParameters": [
      "reader"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Hand-off a PaymentIntent to a Reader"
  },
  {
    "operationId": "PostTerminalReadersReaderProcessSetupIntent",
    "method": "POST",
    "path": "/v1/terminal/readers/{reader}/process_setup_intent",
    "pathParameters": [
      "reader"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Hand-off a SetupIntent to a Reader"
  },
  {
    "operationId": "PostTerminalReadersReaderRefundPayment",
    "method": "POST",
    "path": "/v1/terminal/readers/{reader}/refund_payment",
    "pathParameters": [
      "reader"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Refund a Charge or a PaymentIntent in-person"
  },
  {
    "operationId": "PostTerminalReadersReaderSetReaderDisplay",
    "method": "POST",
    "path": "/v1/terminal/readers/{reader}/set_reader_display",
    "pathParameters": [
      "reader"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Set reader display"
  },
  {
    "operationId": "PostTerminalRefunds",
    "method": "POST",
    "path": "/v1/terminal/refunds",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a refund using a Terminal-supported device."
  },
  {
    "operationId": "PostTestHelpersConfirmationTokens",
    "method": "POST",
    "path": "/v1/test_helpers/confirmation_tokens",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a test Confirmation Token"
  },
  {
    "operationId": "PostTestHelpersCustomersCustomerFundCashBalance",
    "method": "POST",
    "path": "/v1/test_helpers/customers/{customer}/fund_cash_balance",
    "pathParameters": [
      "customer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Fund a test mode cash balance"
  },
  {
    "operationId": "PostTestHelpersIssuingAuthorizations",
    "method": "POST",
    "path": "/v1/test_helpers/issuing/authorizations",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a test-mode authorization"
  },
  {
    "operationId": "PostTestHelpersIssuingAuthorizationsAuthorizationCapture",
    "method": "POST",
    "path": "/v1/test_helpers/issuing/authorizations/{authorization}/capture",
    "pathParameters": [
      "authorization"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Capture a test-mode authorization"
  },
  {
    "operationId": "PostTestHelpersIssuingAuthorizationsAuthorizationExpire",
    "method": "POST",
    "path": "/v1/test_helpers/issuing/authorizations/{authorization}/expire",
    "pathParameters": [
      "authorization"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Expire a test-mode authorization"
  },
  {
    "operationId": "PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmount",
    "method": "POST",
    "path": "/v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount",
    "pathParameters": [
      "authorization"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Finalize a test-mode authorization's amount"
  },
  {
    "operationId": "PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespond",
    "method": "POST",
    "path": "/v1/test_helpers/issuing/authorizations/{authorization}/fraud_challenges/respond",
    "pathParameters": [
      "authorization"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Respond to fraud challenge"
  },
  {
    "operationId": "PostTestHelpersIssuingAuthorizationsAuthorizationIncrement",
    "method": "POST",
    "path": "/v1/test_helpers/issuing/authorizations/{authorization}/increment",
    "pathParameters": [
      "authorization"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Increment a test-mode authorization"
  },
  {
    "operationId": "PostTestHelpersIssuingAuthorizationsAuthorizationReverse",
    "method": "POST",
    "path": "/v1/test_helpers/issuing/authorizations/{authorization}/reverse",
    "pathParameters": [
      "authorization"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Reverse a test-mode authorization"
  },
  {
    "operationId": "PostTestHelpersIssuingCardsCardShippingDeliver",
    "method": "POST",
    "path": "/v1/test_helpers/issuing/cards/{card}/shipping/deliver",
    "pathParameters": [
      "card"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Deliver a testmode card"
  },
  {
    "operationId": "PostTestHelpersIssuingCardsCardShippingFail",
    "method": "POST",
    "path": "/v1/test_helpers/issuing/cards/{card}/shipping/fail",
    "pathParameters": [
      "card"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Fail a testmode card"
  },
  {
    "operationId": "PostTestHelpersIssuingCardsCardShippingReturn",
    "method": "POST",
    "path": "/v1/test_helpers/issuing/cards/{card}/shipping/return",
    "pathParameters": [
      "card"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Return a testmode card"
  },
  {
    "operationId": "PostTestHelpersIssuingCardsCardShippingShip",
    "method": "POST",
    "path": "/v1/test_helpers/issuing/cards/{card}/shipping/ship",
    "pathParameters": [
      "card"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Ship a testmode card"
  },
  {
    "operationId": "PostTestHelpersIssuingCardsCardShippingSubmit",
    "method": "POST",
    "path": "/v1/test_helpers/issuing/cards/{card}/shipping/submit",
    "pathParameters": [
      "card"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Submit a testmode card"
  },
  {
    "operationId": "PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignActivate",
    "method": "POST",
    "path": "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate",
    "pathParameters": [
      "personalization_design"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Activate a testmode personalization design"
  },
  {
    "operationId": "PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivate",
    "method": "POST",
    "path": "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate",
    "pathParameters": [
      "personalization_design"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Deactivate a testmode personalization design"
  },
  {
    "operationId": "PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignReject",
    "method": "POST",
    "path": "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject",
    "pathParameters": [
      "personalization_design"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Reject a testmode personalization design"
  },
  {
    "operationId": "PostTestHelpersIssuingSettlements",
    "method": "POST",
    "path": "/v1/test_helpers/issuing/settlements",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a test-mode settlement"
  },
  {
    "operationId": "PostTestHelpersIssuingSettlementsSettlementComplete",
    "method": "POST",
    "path": "/v1/test_helpers/issuing/settlements/{settlement}/complete",
    "pathParameters": [
      "settlement"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Complete a test-mode settlement"
  },
  {
    "operationId": "PostTestHelpersIssuingTransactionsCreateForceCapture",
    "method": "POST",
    "path": "/v1/test_helpers/issuing/transactions/create_force_capture",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a test-mode force capture"
  },
  {
    "operationId": "PostTestHelpersIssuingTransactionsCreateUnlinkedRefund",
    "method": "POST",
    "path": "/v1/test_helpers/issuing/transactions/create_unlinked_refund",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a test-mode unlinked refund"
  },
  {
    "operationId": "PostTestHelpersIssuingTransactionsTransactionRefund",
    "method": "POST",
    "path": "/v1/test_helpers/issuing/transactions/{transaction}/refund",
    "pathParameters": [
      "transaction"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Refund a test-mode transaction"
  },
  {
    "operationId": "PostTestHelpersRefundsRefundExpire",
    "method": "POST",
    "path": "/v1/test_helpers/refunds/{refund}/expire",
    "pathParameters": [
      "refund"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Expire a pending refund."
  },
  {
    "operationId": "PostTestHelpersTerminalReadersReaderPresentPaymentMethod",
    "method": "POST",
    "path": "/v1/test_helpers/terminal/readers/{reader}/present_payment_method",
    "pathParameters": [
      "reader"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Simulate presenting a payment method"
  },
  {
    "operationId": "PostTestHelpersTerminalReadersReaderSucceedInputCollection",
    "method": "POST",
    "path": "/v1/test_helpers/terminal/readers/{reader}/succeed_input_collection",
    "pathParameters": [
      "reader"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Simulate a successful input collection"
  },
  {
    "operationId": "PostTestHelpersTerminalReadersReaderTimeoutInputCollection",
    "method": "POST",
    "path": "/v1/test_helpers/terminal/readers/{reader}/timeout_input_collection",
    "pathParameters": [
      "reader"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Simulate an input collection timeout"
  },
  {
    "operationId": "PostTestHelpersTestClocks",
    "method": "POST",
    "path": "/v1/test_helpers/test_clocks",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a test clock"
  },
  {
    "operationId": "PostTestHelpersTestClocksTestClockAdvance",
    "method": "POST",
    "path": "/v1/test_helpers/test_clocks/{test_clock}/advance",
    "pathParameters": [
      "test_clock"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Advance a test clock"
  },
  {
    "operationId": "PostTestHelpersTreasuryInboundTransfersIdFail",
    "method": "POST",
    "path": "/v1/test_helpers/treasury/inbound_transfers/{id}/fail",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Test mode: Fail an InboundTransfer"
  },
  {
    "operationId": "PostTestHelpersTreasuryInboundTransfersIdReturn",
    "method": "POST",
    "path": "/v1/test_helpers/treasury/inbound_transfers/{id}/return",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Test mode: Return an InboundTransfer"
  },
  {
    "operationId": "PostTestHelpersTreasuryInboundTransfersIdSucceed",
    "method": "POST",
    "path": "/v1/test_helpers/treasury/inbound_transfers/{id}/succeed",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Test mode: Succeed an InboundTransfer"
  },
  {
    "operationId": "PostTestHelpersTreasuryOutboundPaymentsId",
    "method": "POST",
    "path": "/v1/test_helpers/treasury/outbound_payments/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Test mode: Update an OutboundPayment"
  },
  {
    "operationId": "PostTestHelpersTreasuryOutboundPaymentsIdFail",
    "method": "POST",
    "path": "/v1/test_helpers/treasury/outbound_payments/{id}/fail",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Test mode: Fail an OutboundPayment"
  },
  {
    "operationId": "PostTestHelpersTreasuryOutboundPaymentsIdPost",
    "method": "POST",
    "path": "/v1/test_helpers/treasury/outbound_payments/{id}/post",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Test mode: Post an OutboundPayment"
  },
  {
    "operationId": "PostTestHelpersTreasuryOutboundPaymentsIdReturn",
    "method": "POST",
    "path": "/v1/test_helpers/treasury/outbound_payments/{id}/return",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Test mode: Return an OutboundPayment"
  },
  {
    "operationId": "PostTestHelpersTreasuryOutboundTransfersOutboundTransfer",
    "method": "POST",
    "path": "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}",
    "pathParameters": [
      "outbound_transfer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Test mode: Update an OutboundTransfer"
  },
  {
    "operationId": "PostTestHelpersTreasuryOutboundTransfersOutboundTransferFail",
    "method": "POST",
    "path": "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail",
    "pathParameters": [
      "outbound_transfer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Test mode: Fail an OutboundTransfer"
  },
  {
    "operationId": "PostTestHelpersTreasuryOutboundTransfersOutboundTransferPost",
    "method": "POST",
    "path": "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post",
    "pathParameters": [
      "outbound_transfer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Test mode: Post an OutboundTransfer"
  },
  {
    "operationId": "PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturn",
    "method": "POST",
    "path": "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return",
    "pathParameters": [
      "outbound_transfer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Test mode: Return an OutboundTransfer"
  },
  {
    "operationId": "PostTestHelpersTreasuryReceivedCredits",
    "method": "POST",
    "path": "/v1/test_helpers/treasury/received_credits",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Test mode: Create a ReceivedCredit"
  },
  {
    "operationId": "PostTestHelpersTreasuryReceivedDebits",
    "method": "POST",
    "path": "/v1/test_helpers/treasury/received_debits",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Test mode: Create a ReceivedDebit"
  },
  {
    "operationId": "PostTokens",
    "method": "POST",
    "path": "/v1/tokens",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a CVC update token"
  },
  {
    "operationId": "PostTopups",
    "method": "POST",
    "path": "/v1/topups",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a top-up"
  },
  {
    "operationId": "PostTopupsTopup",
    "method": "POST",
    "path": "/v1/topups/{topup}",
    "pathParameters": [
      "topup"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a top-up"
  },
  {
    "operationId": "PostTopupsTopupCancel",
    "method": "POST",
    "path": "/v1/topups/{topup}/cancel",
    "pathParameters": [
      "topup"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Cancel a top-up"
  },
  {
    "operationId": "PostTransfers",
    "method": "POST",
    "path": "/v1/transfers",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a transfer"
  },
  {
    "operationId": "PostTransfersIdReversals",
    "method": "POST",
    "path": "/v1/transfers/{id}/reversals",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a transfer reversal"
  },
  {
    "operationId": "PostTransfersTransfer",
    "method": "POST",
    "path": "/v1/transfers/{transfer}",
    "pathParameters": [
      "transfer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a transfer"
  },
  {
    "operationId": "PostTransfersTransferReversalsId",
    "method": "POST",
    "path": "/v1/transfers/{transfer}/reversals/{id}",
    "pathParameters": [
      "transfer",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a reversal"
  },
  {
    "operationId": "PostTreasuryCreditReversals",
    "method": "POST",
    "path": "/v1/treasury/credit_reversals",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a CreditReversal"
  },
  {
    "operationId": "PostTreasuryDebitReversals",
    "method": "POST",
    "path": "/v1/treasury/debit_reversals",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a DebitReversal"
  },
  {
    "operationId": "PostTreasuryFinancialAccounts",
    "method": "POST",
    "path": "/v1/treasury/financial_accounts",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a FinancialAccount"
  },
  {
    "operationId": "PostTreasuryFinancialAccountsFinancialAccount",
    "method": "POST",
    "path": "/v1/treasury/financial_accounts/{financial_account}",
    "pathParameters": [
      "financial_account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a FinancialAccount"
  },
  {
    "operationId": "PostTreasuryFinancialAccountsFinancialAccountClose",
    "method": "POST",
    "path": "/v1/treasury/financial_accounts/{financial_account}/close",
    "pathParameters": [
      "financial_account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Close a FinancialAccount"
  },
  {
    "operationId": "PostTreasuryFinancialAccountsFinancialAccountFeatures",
    "method": "POST",
    "path": "/v1/treasury/financial_accounts/{financial_account}/features",
    "pathParameters": [
      "financial_account"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update FinancialAccount Features"
  },
  {
    "operationId": "PostTreasuryInboundTransfers",
    "method": "POST",
    "path": "/v1/treasury/inbound_transfers",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create an InboundTransfer"
  },
  {
    "operationId": "PostTreasuryInboundTransfersInboundTransferCancel",
    "method": "POST",
    "path": "/v1/treasury/inbound_transfers/{inbound_transfer}/cancel",
    "pathParameters": [
      "inbound_transfer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Cancel an InboundTransfer"
  },
  {
    "operationId": "PostTreasuryOutboundPayments",
    "method": "POST",
    "path": "/v1/treasury/outbound_payments",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create an OutboundPayment"
  },
  {
    "operationId": "PostTreasuryOutboundPaymentsIdCancel",
    "method": "POST",
    "path": "/v1/treasury/outbound_payments/{id}/cancel",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Cancel an OutboundPayment"
  },
  {
    "operationId": "PostTreasuryOutboundTransfers",
    "method": "POST",
    "path": "/v1/treasury/outbound_transfers",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create an OutboundTransfer"
  },
  {
    "operationId": "PostTreasuryOutboundTransfersOutboundTransferCancel",
    "method": "POST",
    "path": "/v1/treasury/outbound_transfers/{outbound_transfer}/cancel",
    "pathParameters": [
      "outbound_transfer"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Cancel an OutboundTransfer"
  },
  {
    "operationId": "PostV2BillingMeterEventAdjustments",
    "method": "POST",
    "path": "/v2/billing/meter_event_adjustments",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/json"
    ],
    "summary": "Create a Meter Event Adjustment"
  },
  {
    "operationId": "PostV2BillingMeterEvents",
    "method": "POST",
    "path": "/v2/billing/meter_events",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/json"
    ],
    "summary": "Create a Meter Event with synchronous validation"
  },
  {
    "operationId": "PostV2BillingMeterEventSession",
    "method": "POST",
    "path": "/v2/billing/meter_event_session",
    "pathParameters": [],
    "requestBodyContentTypes": [],
    "summary": "Create a Meter Event Stream Authentication Session"
  },
  {
    "operationId": "PostV2BillingMeterEventStream",
    "method": "POST",
    "path": "/v2/billing/meter_event_stream",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/json"
    ],
    "summary": "Create a Meter Event with asynchronous validation"
  },
  {
    "operationId": "PostV2CommerceProductCatalogImports",
    "method": "POST",
    "path": "/v2/commerce/product_catalog/imports",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/json"
    ],
    "summary": "Create a Product Catalog Import"
  },
  {
    "operationId": "PostV2CoreAccountLinks",
    "method": "POST",
    "path": "/v2/core/account_links",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/json"
    ],
    "summary": "Create an account link"
  },
  {
    "operationId": "PostV2CoreAccounts",
    "method": "POST",
    "path": "/v2/core/accounts",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/json"
    ],
    "summary": "Create an account"
  },
  {
    "operationId": "PostV2CoreAccountsAccountIdPersons",
    "method": "POST",
    "path": "/v2/core/accounts/{account_id}/persons",
    "pathParameters": [
      "account_id"
    ],
    "requestBodyContentTypes": [
      "application/json"
    ],
    "summary": "Create a person"
  },
  {
    "operationId": "PostV2CoreAccountsAccountIdPersonsId",
    "method": "POST",
    "path": "/v2/core/accounts/{account_id}/persons/{id}",
    "pathParameters": [
      "account_id",
      "id"
    ],
    "requestBodyContentTypes": [
      "application/json"
    ],
    "summary": "Update a person"
  },
  {
    "operationId": "PostV2CoreAccountsAccountIdPersonTokens",
    "method": "POST",
    "path": "/v2/core/accounts/{account_id}/person_tokens",
    "pathParameters": [
      "account_id"
    ],
    "requestBodyContentTypes": [
      "application/json"
    ],
    "summary": "Create a person token"
  },
  {
    "operationId": "PostV2CoreAccountsId",
    "method": "POST",
    "path": "/v2/core/accounts/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/json"
    ],
    "summary": "Update an account"
  },
  {
    "operationId": "PostV2CoreAccountsIdClose",
    "method": "POST",
    "path": "/v2/core/accounts/{id}/close",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/json"
    ],
    "summary": "Close an account"
  },
  {
    "operationId": "PostV2CoreAccountTokens",
    "method": "POST",
    "path": "/v2/core/account_tokens",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/json"
    ],
    "summary": "Create an account token"
  },
  {
    "operationId": "PostV2CoreEventDestinations",
    "method": "POST",
    "path": "/v2/core/event_destinations",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/json"
    ],
    "summary": "Create an Event Destination"
  },
  {
    "operationId": "PostV2CoreEventDestinationsId",
    "method": "POST",
    "path": "/v2/core/event_destinations/{id}",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [
      "application/json"
    ],
    "summary": "Update an Event Destination"
  },
  {
    "operationId": "PostV2CoreEventDestinationsIdDisable",
    "method": "POST",
    "path": "/v2/core/event_destinations/{id}/disable",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [],
    "summary": "Disable an Event Destination"
  },
  {
    "operationId": "PostV2CoreEventDestinationsIdEnable",
    "method": "POST",
    "path": "/v2/core/event_destinations/{id}/enable",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [],
    "summary": "Enable an Event Destination"
  },
  {
    "operationId": "PostV2CoreEventDestinationsIdPing",
    "method": "POST",
    "path": "/v2/core/event_destinations/{id}/ping",
    "pathParameters": [
      "id"
    ],
    "requestBodyContentTypes": [],
    "summary": "Ping an Event Destination"
  },
  {
    "operationId": "PostWebhookEndpoints",
    "method": "POST",
    "path": "/v1/webhook_endpoints",
    "pathParameters": [],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Create a webhook endpoint"
  },
  {
    "operationId": "PostWebhookEndpointsWebhookEndpoint",
    "method": "POST",
    "path": "/v1/webhook_endpoints/{webhook_endpoint}",
    "pathParameters": [
      "webhook_endpoint"
    ],
    "requestBodyContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "summary": "Update a webhook endpoint"
  }
] as const satisfies readonly StripeFullApiOperation[];

// Hardened literal operation keys for generated SDK typing.
export const STRIPE_FULL_API_OPERATION_IDS = [
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
  "DeleteV2CoreAccountsAccountIdPersonsId",
  "DeleteV2CoreEventDestinationsId",
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
  "GetClimateOrders",
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
  "GetIssuingDisputes",
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
  "GetSubscriptionSchedulesSchedule",
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
  "GetV2CommerceProductCatalogImports",
  "GetV2CommerceProductCatalogImportsId",
  "GetV2CoreAccounts",
  "GetV2CoreAccountsAccountIdPersons",
  "GetV2CoreAccountsAccountIdPersonsId",
  "GetV2CoreAccountsAccountIdPersonTokensId",
  "GetV2CoreAccountsId",
  "GetV2CoreAccountTokensId",
  "GetV2CoreEventDestinations",
  "GetV2CoreEventDestinationsId",
  "GetV2CoreEvents",
  "GetV2CoreEventsId",
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
  "PostBillingAlertsIdDeactivate",
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
  "PostInvoicesInvoiceLinesLineItemId",
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
  "PostSetupIntentsIntentCancel",
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
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransfer",
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransferFail",
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransferPost",
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturn",
  "PostTestHelpersTreasuryReceivedCredits",
  "PostTestHelpersTreasuryReceivedDebits",
  "PostTokens",
  "PostTopups",
  "PostTopupsTopup",
  "PostTopupsTopupCancel",
  "PostTransfers",
  "PostTransfersIdReversals",
  "PostTransfersTransfer",
  "PostTransfersTransferReversalsId",
  "PostTreasuryCreditReversals",
  "PostTreasuryDebitReversals",
  "PostTreasuryFinancialAccounts",
  "PostTreasuryFinancialAccountsFinancialAccount",
  "PostTreasuryFinancialAccountsFinancialAccountClose",
  "PostTreasuryFinancialAccountsFinancialAccountFeatures",
  "PostTreasuryInboundTransfers",
  "PostTreasuryInboundTransfersInboundTransferCancel",
  "PostTreasuryOutboundPayments",
  "PostTreasuryOutboundPaymentsIdCancel",
  "PostTreasuryOutboundTransfers",
  "PostTreasuryOutboundTransfersOutboundTransferCancel",
  "PostV2BillingMeterEventAdjustments",
  "PostV2BillingMeterEvents",
  "PostV2BillingMeterEventSession",
  "PostV2BillingMeterEventStream",
  "PostV2CommerceProductCatalogImports",
  "PostV2CoreAccountLinks",
  "PostV2CoreAccounts",
  "PostV2CoreAccountsAccountIdPersons",
  "PostV2CoreAccountsAccountIdPersonsId",
  "PostV2CoreAccountsAccountIdPersonTokens",
  "PostV2CoreAccountsId",
  "PostV2CoreAccountsIdClose",
  "PostV2CoreAccountTokens",
  "PostV2CoreEventDestinations",
  "PostV2CoreEventDestinationsId",
  "PostV2CoreEventDestinationsIdDisable",
  "PostV2CoreEventDestinationsIdEnable",
  "PostV2CoreEventDestinationsIdPing",
  "PostWebhookEndpoints",
  "PostWebhookEndpointsWebhookEndpoint"
] as const;
export const STRIPE_FULL_API_OPERATION_OPERATION_IDS = [
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
  "DeleteV2CoreAccountsAccountIdPersonsId",
  "DeleteV2CoreEventDestinationsId",
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
  "GetClimateOrders",
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
  "GetIssuingDisputes",
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
  "GetSubscriptionSchedulesSchedule",
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
  "GetV2CommerceProductCatalogImports",
  "GetV2CommerceProductCatalogImportsId",
  "GetV2CoreAccounts",
  "GetV2CoreAccountsAccountIdPersons",
  "GetV2CoreAccountsAccountIdPersonsId",
  "GetV2CoreAccountsAccountIdPersonTokensId",
  "GetV2CoreAccountsId",
  "GetV2CoreAccountTokensId",
  "GetV2CoreEventDestinations",
  "GetV2CoreEventDestinationsId",
  "GetV2CoreEvents",
  "GetV2CoreEventsId",
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
  "PostBillingAlertsIdDeactivate",
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
  "PostInvoicesInvoiceLinesLineItemId",
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
  "PostSetupIntentsIntentCancel",
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
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransfer",
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransferFail",
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransferPost",
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturn",
  "PostTestHelpersTreasuryReceivedCredits",
  "PostTestHelpersTreasuryReceivedDebits",
  "PostTokens",
  "PostTopups",
  "PostTopupsTopup",
  "PostTopupsTopupCancel",
  "PostTransfers",
  "PostTransfersIdReversals",
  "PostTransfersTransfer",
  "PostTransfersTransferReversalsId",
  "PostTreasuryCreditReversals",
  "PostTreasuryDebitReversals",
  "PostTreasuryFinancialAccounts",
  "PostTreasuryFinancialAccountsFinancialAccount",
  "PostTreasuryFinancialAccountsFinancialAccountClose",
  "PostTreasuryFinancialAccountsFinancialAccountFeatures",
  "PostTreasuryInboundTransfers",
  "PostTreasuryInboundTransfersInboundTransferCancel",
  "PostTreasuryOutboundPayments",
  "PostTreasuryOutboundPaymentsIdCancel",
  "PostTreasuryOutboundTransfers",
  "PostTreasuryOutboundTransfersOutboundTransferCancel",
  "PostV2BillingMeterEventAdjustments",
  "PostV2BillingMeterEvents",
  "PostV2BillingMeterEventSession",
  "PostV2BillingMeterEventStream",
  "PostV2CommerceProductCatalogImports",
  "PostV2CoreAccountLinks",
  "PostV2CoreAccounts",
  "PostV2CoreAccountsAccountIdPersons",
  "PostV2CoreAccountsAccountIdPersonsId",
  "PostV2CoreAccountsAccountIdPersonTokens",
  "PostV2CoreAccountsId",
  "PostV2CoreAccountsIdClose",
  "PostV2CoreAccountTokens",
  "PostV2CoreEventDestinations",
  "PostV2CoreEventDestinationsId",
  "PostV2CoreEventDestinationsIdDisable",
  "PostV2CoreEventDestinationsIdEnable",
  "PostV2CoreEventDestinationsIdPing",
  "PostWebhookEndpoints",
  "PostWebhookEndpointsWebhookEndpoint"
] as const;
// End hardened literal operation keys.

export type StripeFullApiOperationId = typeof STRIPE_FULL_API_OPERATIONS[number]["operationId"];

export const STRIPE_FULL_API_OPERATION_BY_ID: ReadonlyMap<string, StripeFullApiOperation> = new Map(
  STRIPE_FULL_API_OPERATIONS.map((operation) => [operation.operationId, operation]),
);
