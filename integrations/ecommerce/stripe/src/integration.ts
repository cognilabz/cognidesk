import { defineIntegration } from "@cognidesk/integration-kit";
import { createStripeEcommerceClient } from "./client.js";
import { stripeEcommerceProviderManifestInput } from "./manifest.js";
import type {
  StripeEcommerceClient,
  StripeEcommerceClientOptions,
  StripeRawClientInput,
  StripeWebhookEndpointManageInput,
} from "./types.js";

export function createStripeEcommerceIntegration(options: StripeEcommerceClientOptions) {
  const client = createStripeEcommerceClient(options);
  return createStripeEcommerceIntegrationFromClient(client);
}

export function createStripeEcommerceIntegrationFromClient(client: StripeEcommerceClient) {
  return defineIntegration({
    manifest: stripeEcommerceProviderManifestInput,
    operations: stripeOperationHandlers(client) as never,
  });
}

function stripeOperationHandlers(client: StripeEcommerceClient) {
  return {
    "ecommerce.event.receive": (input: Parameters<StripeEcommerceClient["parseWebhook"]>[0]) => client.parseWebhook(input),
    "ecommerce.order.read": (input: Parameters<StripeEcommerceClient["getCheckoutSession"]>[0]) => client.getCheckoutSession(input),
    "ecommerce.order.search": (input: Parameters<StripeEcommerceClient["listCheckoutSessions"]>[0]) => client.listCheckoutSessions(input),
    "ecommerce.customer.read": (input: Parameters<StripeEcommerceClient["getCustomer"]>[0]) => client.getCustomer(input),
    "ecommerce.customer.search": (input: Parameters<StripeEcommerceClient["searchCustomers"]>[0]) => client.searchCustomers(input),
    "ecommerce.payment.read": (input: Parameters<StripeEcommerceClient["getPaymentIntent"]>[0]) => client.getPaymentIntent(input),
    "ecommerce.refund.create": (input: Parameters<StripeEcommerceClient["createRefund"]>[0]) => client.createRefund(input),
    "ecommerce.refund.read": (input: Parameters<StripeEcommerceClient["getRefund"]>[0]) => client.getRefund(input),
    "ecommerce.subscription.read": (input: Parameters<StripeEcommerceClient["getSubscription"]>[0]) => client.getSubscription(input),
    "ecommerce.subscription.update": (input: Parameters<StripeEcommerceClient["updateSubscription"]>[0]) => client.updateSubscription(input),
    "ecommerce.invoice.read": (input: Parameters<StripeEcommerceClient["getInvoice"]>[0]) => client.getInvoice(input),
    "ecommerce.webhookEndpoint.manage": (input: StripeWebhookEndpointManageInput) => manageWebhookEndpoint(client, input),
    "stripe.rawClient": (input: StripeRawClientInput = {}) => input.rawClientOnly === false ? client : client.rawClient,
  };
}

function manageWebhookEndpoint(client: StripeEcommerceClient, input: StripeWebhookEndpointManageInput) {
  if (input.action === "create") return client.createWebhookEndpoint(withoutAction(input));
  if (input.action === "get") return client.getWebhookEndpoint(withoutAction(input));
  if (input.action === "list") return client.listWebhookEndpoints(withoutAction(input));
  if (input.action === "update") return client.updateWebhookEndpoint(withoutAction(input));
  if (input.action === "delete") return client.deleteWebhookEndpoint(withoutAction(input));
  throw new Error(`Unsupported webhook endpoint action: ${(input as { action?: string }).action ?? "unknown"}`);
}

function withoutAction<TInput extends { action: string }>(input: TInput): Omit<TInput, "action"> {
  const { action: _action, ...params } = input;
  return params;
}
