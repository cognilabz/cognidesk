import {
  createStripeFullApiGeneratedClient,
  type StripeGeneratedOperationCaller,
} from "../full-api-client.generated.js";
import {
  STRIPE_FULL_API_OPERATION_BY_ID,
  type StripeFullApiOperationId,
} from "../full-api-operations.generated.js";
import { defaultStripeApiVersion } from "../constants.js";
import type {
  StripeAccountResource,
  StripeCheckoutSessionResource,
  StripeClientRequestInput,
  StripeCustomerResource,
  StripeDisputeResource,
  StripeEcommerceClientOptions,
  StripeInvoiceResource,
  StripeListResponse,
  StripePaymentIntentResource,
  StripeRefundResource,
  StripeResource,
  StripeSubscriptionResource,
  StripeWebhookEndpointResource,
} from "../contracts.js";
import type { StripeEcommerceClient } from "./contracts.js";
import { appendStripeParams, stripeErrorMessage, stripeOperationPath } from "../request.js";
import { validateStripeCheckoutSessionCreateInput } from "../validation.js";

export function createStripeEcommerceClient(options: StripeEcommerceClientOptions): StripeEcommerceClient {
  if (!options.secretKey) throw new Error("Stripe secretKey is required.");
  const apiBaseUrl = (options.apiBaseUrl ?? "https://api.stripe.com").replace(/\/+$/, "");
  const fetchImpl = options.fetch ?? fetch;

  async function requestTyped<T = StripeResource>(
    method: "GET" | "POST" | "DELETE",
    path: string,
    input: StripeClientRequestInput = {},
  ): Promise<T> {
    const url = new URL(`${apiBaseUrl}${path.startsWith("/") ? path : `/${path}`}`);
    appendStripeParams(url.searchParams, input.query);
    const headers: Record<string, string> = {
      accept: "application/json",
      authorization: `Bearer ${options.secretKey}`,
      "stripe-version": options.apiVersion ?? defaultStripeApiVersion,
    };
    const stripeAccount = input.options?.stripeAccount ?? options.stripeAccount;
    if (stripeAccount) headers["stripe-account"] = stripeAccount;
    if (input.options?.idempotencyKey) headers["idempotency-key"] = input.options.idempotencyKey;

    let body: string | undefined;
    if (method !== "GET" && input.body) {
      const params = new URLSearchParams();
      appendStripeParams(params, input.body);
      body = params.toString();
      headers["content-type"] = "application/x-www-form-urlencoded";
    }

    const init: RequestInit = body === undefined ? { method, headers } : { method, headers, body };
    const response = await fetchImpl(url.toString(), init);
    const text = await response.text();
    const parsed = text ? JSON.parse(text) as StripeResource : {};
    if (!response.ok) {
      throw new Error(stripeErrorMessage(parsed, response.status));
    }
    return parsed as T;
  }

  const requestOperation = (
    operationId: StripeFullApiOperationId | string,
    input: StripeClientRequestInput & { pathParams?: Record<string, string | number | boolean | undefined> } = {},
  ) => {
    const operation = STRIPE_FULL_API_OPERATION_BY_ID.get(operationId);
    if (!operation) {
      throw new Error(`Unknown Stripe OpenAPI operation '${operationId}'.`);
    }
    const path = stripeOperationPath(operation.path, input.pathParams ?? {});
    return requestTyped(operation.method, path, {
      query: input.query,
      body: input.body,
      options: input.options,
    });
  };
  const fullApi = createStripeFullApiGeneratedClient(requestOperation as StripeGeneratedOperationCaller);

  return {
    fullApi,
    requestOperation: requestOperation as StripeGeneratedOperationCaller,
    getAccount(requestOptions) {
      return requestTyped<StripeAccountResource>("GET", "/v1/account", { options: requestOptions });
    },
    getCustomer(id, input = {}, requestOptions) {
      return requestTyped<StripeCustomerResource>("GET", `/v1/customers/${encodeURIComponent(id)}`, { query: input, options: requestOptions });
    },
    listCustomers(input = {}, requestOptions) {
      return requestTyped<StripeListResponse<StripeCustomerResource>>("GET", "/v1/customers", { query: input, options: requestOptions });
    },
    searchCustomers(input, requestOptions) {
      return requestTyped<StripeListResponse<StripeCustomerResource>>("GET", "/v1/customers/search", { query: input, options: requestOptions });
    },
    createPaymentIntent(input, requestOptions) {
      return requestTyped<StripePaymentIntentResource>("POST", "/v1/payment_intents", { body: input, options: requestOptions });
    },
    getPaymentIntent(id, input = {}, requestOptions) {
      return requestTyped<StripePaymentIntentResource>("GET", `/v1/payment_intents/${encodeURIComponent(id)}`, { query: input, options: requestOptions });
    },
    listPaymentIntents(input = {}, requestOptions) {
      return requestTyped<StripeListResponse<StripePaymentIntentResource>>("GET", "/v1/payment_intents", { query: input, options: requestOptions });
    },
    createCheckoutSession(input, requestOptions) {
      validateStripeCheckoutSessionCreateInput(input);
      return requestTyped<StripeCheckoutSessionResource>("POST", "/v1/checkout/sessions", { body: input, options: requestOptions });
    },
    getCheckoutSession(id, input = {}, requestOptions) {
      return requestTyped<StripeCheckoutSessionResource>("GET", `/v1/checkout/sessions/${encodeURIComponent(id)}`, { query: input, options: requestOptions });
    },
    listCheckoutSessions(input = {}, requestOptions) {
      return requestTyped<StripeListResponse<StripeCheckoutSessionResource>>("GET", "/v1/checkout/sessions", { query: input, options: requestOptions });
    },
    listCheckoutSessionLineItems(id, input = {}, requestOptions) {
      return requestTyped<StripeListResponse<StripeResource>>("GET", `/v1/checkout/sessions/${encodeURIComponent(id)}/line_items`, { query: input, options: requestOptions });
    },
    getSubscription(id, input = {}, requestOptions) {
      return requestTyped<StripeSubscriptionResource>("GET", `/v1/subscriptions/${encodeURIComponent(id)}`, { query: input, options: requestOptions });
    },
    listSubscriptions(input = {}, requestOptions) {
      return requestTyped<StripeListResponse<StripeSubscriptionResource>>("GET", "/v1/subscriptions", { query: input, options: requestOptions });
    },
    updateSubscription(id, input, requestOptions) {
      return requestTyped<StripeSubscriptionResource>("POST", `/v1/subscriptions/${encodeURIComponent(id)}`, { body: input, options: requestOptions });
    },
    cancelSubscription(id, input = {}, requestOptions) {
      return requestTyped<StripeSubscriptionResource>("DELETE", `/v1/subscriptions/${encodeURIComponent(id)}`, { body: input, options: requestOptions });
    },
    getInvoice(id, input = {}, requestOptions) {
      return requestTyped<StripeInvoiceResource>("GET", `/v1/invoices/${encodeURIComponent(id)}`, { query: input, options: requestOptions });
    },
    listInvoices(input = {}, requestOptions) {
      return requestTyped<StripeListResponse<StripeInvoiceResource>>("GET", "/v1/invoices", { query: input, options: requestOptions });
    },
    createRefund(input, requestOptions) {
      return requestTyped<StripeRefundResource>("POST", "/v1/refunds", { body: input, options: requestOptions });
    },
    getRefund(id, input = {}, requestOptions) {
      return requestTyped<StripeRefundResource>("GET", `/v1/refunds/${encodeURIComponent(id)}`, { query: input, options: requestOptions });
    },
    listRefunds(input = {}, requestOptions) {
      return requestTyped<StripeListResponse<StripeRefundResource>>("GET", "/v1/refunds", { query: input, options: requestOptions });
    },
    getDispute(id, input = {}, requestOptions) {
      return requestTyped<StripeDisputeResource>("GET", `/v1/disputes/${encodeURIComponent(id)}`, { query: input, options: requestOptions });
    },
    listDisputes(input = {}, requestOptions) {
      return requestTyped<StripeListResponse<StripeDisputeResource>>("GET", "/v1/disputes", { query: input, options: requestOptions });
    },
    updateDispute(id, input, requestOptions) {
      return requestTyped<StripeDisputeResource>("POST", `/v1/disputes/${encodeURIComponent(id)}`, { body: input, options: requestOptions });
    },
    closeDispute(id, requestOptions) {
      return requestTyped<StripeDisputeResource>("POST", `/v1/disputes/${encodeURIComponent(id)}/close`, { options: requestOptions });
    },
    createWebhookEndpoint(input, requestOptions) {
      return requestTyped<StripeWebhookEndpointResource>("POST", "/v1/webhook_endpoints", { body: input, options: requestOptions });
    },
    getWebhookEndpoint(id, input = {}, requestOptions) {
      return requestTyped<StripeWebhookEndpointResource>("GET", `/v1/webhook_endpoints/${encodeURIComponent(id)}`, { query: input, options: requestOptions });
    },
    listWebhookEndpoints(input = {}, requestOptions) {
      return requestTyped<StripeListResponse<StripeWebhookEndpointResource>>("GET", "/v1/webhook_endpoints", { query: input, options: requestOptions });
    },
    updateWebhookEndpoint(id, input, requestOptions) {
      return requestTyped<StripeWebhookEndpointResource>("POST", `/v1/webhook_endpoints/${encodeURIComponent(id)}`, { body: input, options: requestOptions });
    },
    deleteWebhookEndpoint(id, requestOptions) {
      return requestTyped<StripeWebhookEndpointResource>("DELETE", `/v1/webhook_endpoints/${encodeURIComponent(id)}`, { options: requestOptions });
    },
  };
}
