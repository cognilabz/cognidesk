import type Stripe from "stripe";

export type StripeConnectMode = "none" | "platform" | "connected-account" | "organization";

export interface StripeEcommerceClientOptions {
  secretKey: string;
  apiVersion?: string;
  stripeAccount?: string;
  maxNetworkRetries?: number;
  timeoutMs?: number;
  rawClient?: Stripe;
}

export interface StripeRequestOptions {
  idempotencyKey?: string;
  stripeAccount?: string;
}

export interface StripeCredentialStatusInput {
  secretKeyConfigured?: boolean;
  webhookSigningSecretConfigured?: boolean;
  connectMode?: StripeConnectMode;
  stripeAccountConfigured?: boolean;
  restrictedKeyScopes?: string[];
  requiredScopes?: string[];
}

export interface StripeIdInput {
  id: string;
  expand?: string[];
  options?: StripeRequestOptions;
}

export interface StripeListInput {
  limit?: number;
  starting_after?: string;
  ending_before?: string;
  expand?: string[];
  options?: StripeRequestOptions;
  [key: string]: unknown;
}

export interface StripeSearchCustomersInput {
  query: string;
  limit?: number;
  page?: string;
  expand?: string[];
  options?: StripeRequestOptions;
}

export interface StripeCreatePaymentIntentInput {
  params: Stripe.PaymentIntentCreateParams;
  options?: StripeRequestOptions;
}

export interface StripeCreateRefundInput {
  params: Stripe.RefundCreateParams;
  options?: StripeRequestOptions;
}

export interface StripeUpdateSubscriptionInput extends StripeIdInput {
  params: Stripe.SubscriptionUpdateParams;
}

export interface StripeCancelSubscriptionInput extends StripeIdInput {
  params?: Stripe.SubscriptionCancelParams;
}

export type StripeWebhookEndpointManageInput =
  | ({ action: "create"; params: Stripe.WebhookEndpointCreateParams; options?: StripeRequestOptions })
  | ({ action: "get" } & StripeIdInput)
  | ({ action: "list" } & StripeListInput)
  | ({ action: "update"; params: Stripe.WebhookEndpointUpdateParams } & StripeIdInput)
  | ({ action: "delete" } & StripeIdInput);

export interface StripeWebhookParseInput {
  request: Request | string | Buffer;
  signatureHeader?: string;
  signingSecret?: string;
  toleranceSeconds?: number;
  requireSignature?: boolean;
}

export interface StripeRawClientInput {
  rawClientOnly?: boolean;
}

export interface StripeEcommerceClient {
  rawClient: Stripe;
  getAccount(options?: StripeRequestOptions): Promise<Stripe.Account>;
  getCustomer(input: StripeIdInput): Promise<Stripe.Response<Stripe.Customer | Stripe.DeletedCustomer>>;
  searchCustomers(input: StripeSearchCustomersInput): Promise<Stripe.ApiSearchResult<Stripe.Customer>>;
  getCheckoutSession(input: StripeIdInput): Promise<Stripe.Response<Stripe.Checkout.Session>>;
  listCheckoutSessions(input?: StripeListInput): Promise<Stripe.ApiList<Stripe.Checkout.Session>>;
  getPaymentIntent(input: StripeIdInput): Promise<Stripe.Response<Stripe.PaymentIntent>>;
  createPaymentIntent(input: StripeCreatePaymentIntentInput): Promise<Stripe.Response<Stripe.PaymentIntent>>;
  getSubscription(input: StripeIdInput): Promise<Stripe.Response<Stripe.Subscription>>;
  updateSubscription(input: StripeUpdateSubscriptionInput): Promise<Stripe.Response<Stripe.Subscription>>;
  cancelSubscription(input: StripeCancelSubscriptionInput): Promise<Stripe.Response<Stripe.Subscription>>;
  getInvoice(input: StripeIdInput): Promise<Stripe.Response<Stripe.Invoice>>;
  createRefund(input: StripeCreateRefundInput): Promise<Stripe.Response<Stripe.Refund>>;
  getRefund(input: StripeIdInput): Promise<Stripe.Response<Stripe.Refund>>;
  listRefunds(input?: StripeListInput): Promise<Stripe.ApiList<Stripe.Refund>>;
  getDispute(input: StripeIdInput): Promise<Stripe.Response<Stripe.Dispute>>;
  updateDispute(input: StripeIdInput & { params: Stripe.DisputeUpdateParams }): Promise<Stripe.Response<Stripe.Dispute>>;
  closeDispute(input: StripeIdInput): Promise<Stripe.Response<Stripe.Dispute>>;
  createWebhookEndpoint(input: { params: Stripe.WebhookEndpointCreateParams; options?: StripeRequestOptions }): Promise<Stripe.Response<Stripe.WebhookEndpoint>>;
  getWebhookEndpoint(input: StripeIdInput): Promise<Stripe.Response<Stripe.WebhookEndpoint>>;
  listWebhookEndpoints(input?: StripeListInput): Promise<Stripe.ApiList<Stripe.WebhookEndpoint>>;
  updateWebhookEndpoint(input: StripeIdInput & { params: Stripe.WebhookEndpointUpdateParams }): Promise<Stripe.Response<Stripe.WebhookEndpoint>>;
  deleteWebhookEndpoint(input: StripeIdInput): Promise<Stripe.Response<Stripe.DeletedWebhookEndpoint>>;
  parseWebhook(input: StripeWebhookParseInput): Promise<{ rawBody: string; signatureHeader: string; event: Stripe.Event }>;
}
