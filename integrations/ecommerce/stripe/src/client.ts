import Stripe from "stripe";
import { defaultStripeApiVersion } from "./manifest.js";
import type {
  StripeEcommerceClient,
  StripeEcommerceClientOptions,
  StripeListInput,
  StripeRequestOptions,
  StripeWebhookParseInput,
} from "./types.js";

export function createStripeEcommerceClient(options: StripeEcommerceClientOptions): StripeEcommerceClient {
  const stripeConfig: Record<string, unknown> = { apiVersion: options.apiVersion ?? defaultStripeApiVersion };
  if (options.maxNetworkRetries !== undefined) stripeConfig.maxNetworkRetries = options.maxNetworkRetries;
  if (options.timeoutMs !== undefined) stripeConfig.timeout = options.timeoutMs;
  const rawClient = options.rawClient ?? new Stripe(options.secretKey, stripeConfig as never);

  const requestOptions = (input?: StripeRequestOptions): Stripe.RequestOptions => ({
    ...(input?.idempotencyKey ? { idempotencyKey: input.idempotencyKey } : {}),
    ...(input?.stripeAccount ?? options.stripeAccount ? { stripeAccount: input?.stripeAccount ?? options.stripeAccount } : {}),
  });

  return {
    rawClient,
    getAccount(optionsInput) {
      return rawClient.accounts.retrieve(null, {}, requestOptions(optionsInput));
    },
    getCustomer(input) {
      return rawClient.customers.retrieve(input.id, expandParams(input), requestOptions(input.options));
    },
    searchCustomers(input) {
      return rawClient.customers.search({
        query: input.query,
        ...(input.limit ? { limit: input.limit } : {}),
        ...(input.page ? { page: input.page } : {}),
        ...(input.expand ? { expand: input.expand } : {}),
      }, requestOptions(input.options));
    },
    getCheckoutSession(input) {
      return rawClient.checkout.sessions.retrieve(input.id, expandParams(input), requestOptions(input.options));
    },
    listCheckoutSessions(input = {}) {
      return rawClient.checkout.sessions.list(listInput(input), requestOptions(input.options));
    },
    getPaymentIntent(input) {
      return rawClient.paymentIntents.retrieve(input.id, expandParams(input), requestOptions(input.options));
    },
    createPaymentIntent(input) {
      return rawClient.paymentIntents.create(input.params, requestOptions(input.options));
    },
    getSubscription(input) {
      return rawClient.subscriptions.retrieve(input.id, expandParams(input), requestOptions(input.options));
    },
    updateSubscription(input) {
      return rawClient.subscriptions.update(input.id, input.params, requestOptions(input.options));
    },
    cancelSubscription(input) {
      return rawClient.subscriptions.cancel(input.id, input.params ?? {}, requestOptions(input.options));
    },
    getInvoice(input) {
      return rawClient.invoices.retrieve(input.id, expandParams(input), requestOptions(input.options));
    },
    createRefund(input) {
      return rawClient.refunds.create(input.params, requestOptions(input.options));
    },
    getRefund(input) {
      return rawClient.refunds.retrieve(input.id, expandParams(input), requestOptions(input.options));
    },
    listRefunds(input = {}) {
      return rawClient.refunds.list(listInput(input), requestOptions(input.options));
    },
    getDispute(input) {
      return rawClient.disputes.retrieve(input.id, expandParams(input), requestOptions(input.options));
    },
    updateDispute(input) {
      return rawClient.disputes.update(input.id, input.params, requestOptions(input.options));
    },
    closeDispute(input) {
      return rawClient.disputes.close(input.id, {}, requestOptions(input.options));
    },
    createWebhookEndpoint(input) {
      return rawClient.webhookEndpoints.create(input.params, requestOptions(input.options));
    },
    getWebhookEndpoint(input) {
      return rawClient.webhookEndpoints.retrieve(input.id, expandParams(input), requestOptions(input.options));
    },
    listWebhookEndpoints(input = {}) {
      return rawClient.webhookEndpoints.list(listInput(input), requestOptions(input.options));
    },
    updateWebhookEndpoint(input) {
      return rawClient.webhookEndpoints.update(input.id, input.params, requestOptions(input.options));
    },
    deleteWebhookEndpoint(input) {
      return rawClient.webhookEndpoints.del(input.id, requestOptions(input.options));
    },
    parseWebhook(input) {
      return parseStripeWebhook(rawClient, input);
    },
  };
}

export async function parseStripeWebhook(rawClient: Stripe, input: StripeWebhookParseInput) {
  const rawBody = typeof input.request === "string" || Buffer.isBuffer(input.request)
    ? input.request
    : await input.request.text();
  const signatureHeader = input.signatureHeader
    ?? (typeof input.request === "string" || Buffer.isBuffer(input.request)
      ? ""
      : input.request.headers.get("stripe-signature") ?? "");
  const requireSignature = input.requireSignature ?? true;
  const event = requireSignature
    ? rawClient.webhooks.constructEvent(
      rawBody,
      signatureHeader,
      required(input.signingSecret, "Stripe webhook signing secret is required to validate webhook signatures."),
      input.toleranceSeconds,
    )
    : JSON.parse(Buffer.isBuffer(rawBody) ? rawBody.toString("utf8") : rawBody) as Stripe.Event;

  return {
    rawBody: Buffer.isBuffer(rawBody) ? rawBody.toString("utf8") : rawBody,
    signatureHeader,
    event,
  };
}

function listInput<T extends StripeListInput>(input: T) {
  const { options: _options, ...params } = input;
  return params as Record<string, unknown>;
}

function expandParams(input: { expand?: string[] }) {
  return input.expand ? { expand: input.expand } : {};
}

function required(value: string | undefined, message: string) {
  if (!value) throw new Error(message);
  return value;
}
