import type {
  StripeFullApiGeneratedClient,
  StripeGeneratedOperationCaller,
} from "../full-api-client.generated.js";
import type {
  StripeAccountResource,
  StripeCheckoutSessionCreateInput,
  StripeCheckoutSessionResource,
  StripeCustomerResource,
  StripeCustomerSearchInput,
  StripeDisputeResource,
  StripeDisputeUpdateInput,
  StripeEcommerceClientOptions,
  StripeInvoiceResource,
  StripeListInput,
  StripeListResponse,
  StripeOperationRequestInput,
  StripePaymentIntentCreateInput,
  StripePaymentIntentResource,
  StripeRefundCreateInput,
  StripeRefundResource,
  StripeRequestOptions,
  StripeResource,
  StripeSubscriptionCancelInput,
  StripeSubscriptionResource,
  StripeSubscriptionUpdateInput,
  StripeWebhookEndpointCreateInput,
  StripeWebhookEndpointResource,
  StripeWebhookEndpointUpdateInput,
} from "../contracts.js";

export interface StripeEcommerceClient {
  fullApi: StripeFullApiGeneratedClient;
  requestOperation: StripeGeneratedOperationCaller;
  getAccount(options?: StripeRequestOptions): Promise<StripeAccountResource>;
  getCustomer(id: string, input?: { expand?: string[] }, options?: StripeRequestOptions): Promise<StripeCustomerResource>;
  listCustomers(input?: StripeListInput & { email?: string }, options?: StripeRequestOptions): Promise<StripeListResponse<StripeCustomerResource>>;
  searchCustomers(input: StripeCustomerSearchInput, options?: StripeRequestOptions): Promise<StripeListResponse<StripeCustomerResource>>;
  createPaymentIntent(input: StripePaymentIntentCreateInput, options?: StripeRequestOptions): Promise<StripePaymentIntentResource>;
  getPaymentIntent(id: string, input?: { expand?: string[] }, options?: StripeRequestOptions): Promise<StripePaymentIntentResource>;
  listPaymentIntents(input?: StripeListInput & { customer?: string }, options?: StripeRequestOptions): Promise<StripeListResponse<StripePaymentIntentResource>>;
  createCheckoutSession(input: StripeCheckoutSessionCreateInput, options?: StripeRequestOptions): Promise<StripeCheckoutSessionResource>;
  getCheckoutSession(id: string, input?: { expand?: string[] }, options?: StripeRequestOptions): Promise<StripeCheckoutSessionResource>;
  listCheckoutSessions(input?: StripeListInput & { customer?: string; payment_intent?: string; subscription?: string }, options?: StripeRequestOptions): Promise<StripeListResponse<StripeCheckoutSessionResource>>;
  listCheckoutSessionLineItems(id: string, input?: StripeListInput, options?: StripeRequestOptions): Promise<StripeListResponse<StripeResource>>;
  getSubscription(id: string, input?: { expand?: string[] }, options?: StripeRequestOptions): Promise<StripeSubscriptionResource>;
  listSubscriptions(input?: StripeListInput & { customer?: string; status?: string }, options?: StripeRequestOptions): Promise<StripeListResponse<StripeSubscriptionResource>>;
  updateSubscription(id: string, input: StripeSubscriptionUpdateInput, options?: StripeRequestOptions): Promise<StripeSubscriptionResource>;
  cancelSubscription(id: string, input?: StripeSubscriptionCancelInput, options?: StripeRequestOptions): Promise<StripeSubscriptionResource>;
  getInvoice(id: string, input?: { expand?: string[] }, options?: StripeRequestOptions): Promise<StripeInvoiceResource>;
  listInvoices(input?: StripeListInput & { customer?: string; subscription?: string; status?: string }, options?: StripeRequestOptions): Promise<StripeListResponse<StripeInvoiceResource>>;
  createRefund(input: StripeRefundCreateInput, options?: StripeRequestOptions): Promise<StripeRefundResource>;
  getRefund(id: string, input?: { expand?: string[] }, options?: StripeRequestOptions): Promise<StripeRefundResource>;
  listRefunds(input?: StripeListInput & { charge?: string; payment_intent?: string }, options?: StripeRequestOptions): Promise<StripeListResponse<StripeRefundResource>>;
  getDispute(id: string, input?: { expand?: string[] }, options?: StripeRequestOptions): Promise<StripeDisputeResource>;
  listDisputes(input?: StripeListInput & { charge?: string; payment_intent?: string }, options?: StripeRequestOptions): Promise<StripeListResponse<StripeDisputeResource>>;
  updateDispute(id: string, input: StripeDisputeUpdateInput, options?: StripeRequestOptions): Promise<StripeDisputeResource>;
  closeDispute(id: string, options?: StripeRequestOptions): Promise<StripeDisputeResource>;
  createWebhookEndpoint(input: StripeWebhookEndpointCreateInput, options?: StripeRequestOptions): Promise<StripeWebhookEndpointResource>;
  getWebhookEndpoint(id: string, input?: { expand?: string[] }, options?: StripeRequestOptions): Promise<StripeWebhookEndpointResource>;
  listWebhookEndpoints(input?: StripeListInput, options?: StripeRequestOptions): Promise<StripeListResponse<StripeWebhookEndpointResource>>;
  updateWebhookEndpoint(id: string, input: StripeWebhookEndpointUpdateInput, options?: StripeRequestOptions): Promise<StripeWebhookEndpointResource>;
  deleteWebhookEndpoint(id: string, options?: StripeRequestOptions): Promise<StripeWebhookEndpointResource>;
}

export interface StripeLiveCheckOptions extends StripeEcommerceClientOptions {
  client?: Pick<StripeEcommerceClient, "getAccount">;
}
