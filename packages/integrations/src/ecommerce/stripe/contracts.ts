export type StripeConnectMode = "none" | "platform" | "connected-account" | "organization";

export type StripeEcommerceJsonPrimitive = string | number | boolean | null;
export type StripeEcommerceJsonValue =
  | StripeEcommerceJsonPrimitive
  | StripeEcommerceJsonObject
  | readonly StripeEcommerceJsonValue[];
export type StripeEcommerceProviderExtensionValue = StripeEcommerceJsonValue | object | undefined;
export interface StripeEcommerceJsonObject {
  [key: string]: StripeEcommerceProviderExtensionValue;
}
export type StripeEcommerceProviderPayload = StripeEcommerceJsonObject | object;
export type StripeEcommerceProviderQuery = Record<string, StripeEcommerceProviderExtensionValue>;
export interface StripeEcommerceProviderResponse extends StripeEcommerceJsonObject {}
export interface StripeEcommerceProviderExtensionFields extends StripeEcommerceJsonObject {}

export interface StripeEcommerceClientOptions {
  secretKey: string;
  apiVersion?: string;
  apiBaseUrl?: string;
  stripeAccount?: string;
  fetch?: typeof fetch;
}

export interface StripeCredentialStatusInput {
  secretKeyConfigured?: boolean;
  publishableKeyConfigured?: boolean;
  webhookSigningSecretConfigured?: boolean;
  connectMode?: StripeConnectMode;
  stripeAccountConfigured?: boolean;
  restrictedKeyScopes?: string[];
  requiredScopes?: string[];
  apiVersion?: string;
}

export interface StripeRequestOptions {
  idempotencyKey?: string;
  stripeAccount?: string;
}

export interface StripeAdditionalFields {
  [key: string]: StripeFormValue | StripeFormValue[] | StripeAdditionalFields | null;
}
export type StripeExpandable<TObject extends string = string, TExpanded extends StripeResource = StripeResource> =
  | string
  | (TExpanded & { object?: TObject });

export type StripePaymentIntentStatus =
  | "requires_payment_method"
  | "requires_confirmation"
  | "requires_action"
  | "processing"
  | "requires_capture"
  | "canceled"
  | "succeeded";

export type StripeCheckoutSessionPaymentStatus = "paid" | "unpaid" | "no_payment_required";
export type StripeSubscriptionStatus =
  | "incomplete"
  | "incomplete_expired"
  | "trialing"
  | "active"
  | "past_due"
  | "canceled"
  | "unpaid"
  | "paused";
export type StripeInvoiceStatus = "draft" | "open" | "paid" | "uncollectible" | "void";
export type StripeRefundStatus = "pending" | "requires_action" | "succeeded" | "failed" | "canceled";
export type StripeDisputeStatus =
  | "warning_needs_response"
  | "warning_under_review"
  | "warning_closed"
  | "needs_response"
  | "under_review"
  | "won"
  | "lost"
  | "prevented";

export interface StripeListResponse<TItem = StripeResource> {
  object?: "list";
  data: TItem[];
  has_more?: boolean;
  url?: string;
  [key: string]: StripeEcommerceProviderExtensionValue;
}

export interface StripeResource {
  id?: string;
  object?: string;
  created?: number;
  livemode?: boolean;
  metadata?: Record<string, string>;
  [key: string]: StripeEcommerceProviderExtensionValue;
}

export interface StripeAccountResource extends StripeResource {
  object?: "account";
  business_profile?: StripeEcommerceJsonObject | null;
  charges_enabled?: boolean;
  country?: string;
  default_currency?: string;
  details_submitted?: boolean;
  payouts_enabled?: boolean;
}

export interface StripeCustomerResource extends StripeResource {
  object?: "customer";
  email?: string | null;
  name?: string | null;
  phone?: string | null;
}

export interface StripePaymentIntentResource extends StripeResource {
  object?: "payment_intent";
  amount?: number;
  amount_capturable?: number;
  amount_received?: number;
  canceled_at?: number | null;
  cancellation_reason?: string | null;
  capture_method?: "automatic" | "automatic_async" | "manual" | string;
  client_secret?: string | null;
  confirmation_method?: "automatic" | "manual";
  currency?: string;
  customer?: StripeExpandable<"customer", StripeCustomerResource> | null;
  description?: string | null;
  invoice?: StripeExpandable<"invoice", StripeInvoiceResource> | null;
  latest_charge?: StripeExpandable<"charge"> | null;
  receipt_email?: string | null;
  setup_future_usage?: "off_session" | "on_session" | null;
  status?: StripePaymentIntentStatus;
}

export interface StripeCheckoutSessionResource extends StripeResource {
  object?: "checkout.session";
  amount_subtotal?: number | null;
  amount_total?: number | null;
  client_reference_id?: string | null;
  currency?: string | null;
  customer?: StripeExpandable<"customer", StripeCustomerResource> | null;
  customer_email?: string | null;
  mode?: "payment" | "setup" | "subscription";
  payment_intent?: StripeExpandable<"payment_intent", StripePaymentIntentResource> | null;
  payment_status?: StripeCheckoutSessionPaymentStatus;
  status?: "open" | "complete" | "expired";
  subscription?: StripeExpandable<"subscription", StripeSubscriptionResource> | null;
  url?: string | null;
}

export interface StripeSubscriptionResource extends StripeResource {
  object?: "subscription";
  cancel_at?: number | null;
  cancel_at_period_end?: boolean;
  canceled_at?: number | null;
  collection_method?: "charge_automatically" | "send_invoice";
  currency?: string;
  current_period_end?: number;
  current_period_start?: number;
  customer?: StripeExpandable<"customer", StripeCustomerResource>;
  default_payment_method?: StripeExpandable<"payment_method"> | null;
  description?: string | null;
  latest_invoice?: StripeExpandable<"invoice", StripeInvoiceResource> | null;
  status?: StripeSubscriptionStatus;
}

export interface StripeInvoiceResource extends StripeResource {
  object?: "invoice";
  amount_due?: number;
  amount_paid?: number;
  amount_remaining?: number;
  currency?: string;
  customer?: StripeExpandable<"customer", StripeCustomerResource> | null;
  hosted_invoice_url?: string | null;
  invoice_pdf?: string | null;
  number?: string | null;
  subscription?: StripeExpandable<"subscription", StripeSubscriptionResource> | null;
  status?: StripeInvoiceStatus | null;
  total?: number;
}

export interface StripeRefundResource extends StripeResource {
  object?: "refund";
  amount?: number;
  charge?: StripeExpandable<"charge"> | null;
  currency?: string;
  payment_intent?: StripeExpandable<"payment_intent", StripePaymentIntentResource> | null;
  reason?: string | null;
  receipt_number?: string | null;
  status?: StripeRefundStatus | null;
}

export interface StripeDisputeResource extends StripeResource {
  object?: "dispute";
  amount?: number;
  charge?: StripeExpandable<"charge"> | null;
  currency?: string;
  evidence?: StripeDisputeEvidence;
  evidence_details?: {
    due_by?: number | null;
    has_evidence?: boolean;
    past_due?: boolean;
    submission_count?: number;
  };
  payment_intent?: StripeExpandable<"payment_intent", StripePaymentIntentResource> | null;
  reason?: string;
  status?: StripeDisputeStatus;
}

export interface StripeDisputeEvidence {
  access_activity_log?: string | null;
  billing_address?: string | null;
  cancellation_policy?: string | null;
  cancellation_policy_disclosure?: string | null;
  cancellation_rebuttal?: string | null;
  customer_communication?: string | null;
  customer_email_address?: string | null;
  customer_name?: string | null;
  customer_purchase_ip?: string | null;
  customer_signature?: string | null;
  duplicate_charge_documentation?: string | null;
  duplicate_charge_explanation?: string | null;
  duplicate_charge_id?: string | null;
  product_description?: string | null;
  receipt?: string | null;
  refund_policy?: string | null;
  refund_policy_disclosure?: string | null;
  refund_refusal_explanation?: string | null;
  service_date?: string | null;
  service_documentation?: string | null;
  shipping_address?: string | null;
  shipping_carrier?: string | null;
  shipping_date?: string | null;
  shipping_documentation?: string | null;
  shipping_tracking_number?: string | null;
  uncategorized_file?: string | null;
  uncategorized_text?: string | null;
}

export interface StripeWebhookEndpointResource extends StripeResource {
  object?: "webhook_endpoint";
  api_version?: string | null;
  application?: string | null;
  description?: string | null;
  enabled_events?: string[];
  status?: "enabled" | "disabled" | string;
  url?: string;
  deleted?: boolean;
}

export interface StripeEventResource extends StripeResource {
  object?: "event";
  account?: string;
  api_version?: string | null;
  context?: string | null;
  data?: {
    object?: StripeResource;
    previous_attributes?: StripeEcommerceJsonObject;
    [key: string]: StripeEcommerceProviderExtensionValue;
  };
  pending_webhooks?: number;
  request?: StripeEcommerceJsonObject | null;
  type?: string;
}

export interface StripeKnownOperationRequestMap {
  GetAccount: StripeOperationRequestInput;
  GetCustomersCustomer: StripeOperationRequestInput & { pathParams: { customer: string } };
  GetPaymentIntentsIntent: StripeOperationRequestInput & { pathParams: { intent: string } };
  PostPaymentIntents: StripeOperationRequestInput & { body: StripePaymentIntentCreateInput };
  GetCheckoutSessionsSession: StripeOperationRequestInput & { pathParams: { session: string } };
  PostCheckoutSessions: StripeOperationRequestInput & { body: StripeCheckoutSessionCreateInput };
  GetSubscriptionsSubscriptionExposedId: StripeOperationRequestInput & { pathParams: { subscription_exposed_id: string } };
  PostSubscriptionsSubscriptionExposedId: StripeOperationRequestInput & {
    pathParams: { subscription_exposed_id: string };
    body: StripeSubscriptionUpdateInput;
  };
  DeleteSubscriptionsSubscriptionExposedId: StripeOperationRequestInput & {
    pathParams: { subscription_exposed_id: string };
    body?: StripeSubscriptionCancelInput;
  };
  GetInvoicesInvoice: StripeOperationRequestInput & { pathParams: { invoice: string } };
  PostRefunds: StripeOperationRequestInput & { body: StripeRefundCreateInput };
  GetDisputesDispute: StripeOperationRequestInput & { pathParams: { dispute: string } };
  PostDisputesDispute: StripeOperationRequestInput & { pathParams: { dispute: string }; body: StripeDisputeUpdateInput };
  PostDisputesDisputeClose: StripeOperationRequestInput & { pathParams: { dispute: string } };
  PostWebhookEndpoints: StripeOperationRequestInput & { body: StripeWebhookEndpointCreateInput };
  GetWebhookEndpointsWebhookEndpoint: StripeOperationRequestInput & { pathParams: { webhook_endpoint: string } };
  PostWebhookEndpointsWebhookEndpoint: StripeOperationRequestInput & {
    pathParams: { webhook_endpoint: string };
    body: StripeWebhookEndpointUpdateInput;
  };
  DeleteWebhookEndpointsWebhookEndpoint: StripeOperationRequestInput & { pathParams: { webhook_endpoint: string } };
}

export interface StripeKnownOperationResponseMap {
  GetAccount: StripeAccountResource;
  GetCustomersCustomer: StripeCustomerResource;
  GetPaymentIntentsIntent: StripePaymentIntentResource;
  PostPaymentIntents: StripePaymentIntentResource;
  GetCheckoutSessionsSession: StripeCheckoutSessionResource;
  PostCheckoutSessions: StripeCheckoutSessionResource;
  GetSubscriptionsSubscriptionExposedId: StripeSubscriptionResource;
  PostSubscriptionsSubscriptionExposedId: StripeSubscriptionResource;
  DeleteSubscriptionsSubscriptionExposedId: StripeSubscriptionResource;
  GetInvoicesInvoice: StripeInvoiceResource;
  PostRefunds: StripeRefundResource;
  GetDisputesDispute: StripeDisputeResource;
  PostDisputesDispute: StripeDisputeResource;
  PostDisputesDisputeClose: StripeDisputeResource;
  PostWebhookEndpoints: StripeWebhookEndpointResource;
  GetWebhookEndpointsWebhookEndpoint: StripeWebhookEndpointResource;
  PostWebhookEndpointsWebhookEndpoint: StripeWebhookEndpointResource;
  DeleteWebhookEndpointsWebhookEndpoint: StripeWebhookEndpointResource;
}

export type StripeKnownOperationId = keyof StripeKnownOperationRequestMap;

export type StripeFormPrimitive =
  | string
  | number
  | boolean
  | null
  | undefined;

export interface StripeFormObject {
  [key: string]: StripeFormValue;
}

export interface StripeFormArray extends Array<StripeFormValue> {}

export type StripeFormValue = StripeFormPrimitive | StripeFormArray | StripeFormObject;

export interface StripeListInput {
  limit?: number;
  starting_after?: string;
  ending_before?: string;
  expand?: string[];
}

export interface StripeCustomerSearchInput {
  query: string;
  limit?: number;
  page?: string;
  expand?: string[];
}

export interface StripePaymentIntentCreateInput {
  amount: number;
  currency: string;
  customer?: string;
  description?: string;
  metadata?: Record<string, string>;
  automatic_payment_methods?: { enabled: boolean };
  confirm?: boolean;
  payment_method?: string;
  receipt_email?: string;
  setup_future_usage?: string;
  transfer_data?: Record<string, StripeFormValue>;
  on_behalf_of?: string;
  [key: string]: StripeFormValue;
}

export interface StripeCheckoutSessionCreateInput {
  mode: "payment" | "setup" | "subscription";
  success_url?: string;
  cancel_url?: string;
  customer?: string;
  customer_email?: string;
  client_reference_id?: string;
  line_items?: Array<Record<string, StripeFormValue>>;
  metadata?: Record<string, string>;
  payment_intent_data?: Record<string, StripeFormValue>;
  subscription_data?: Record<string, StripeFormValue>;
  ui_mode?: "hosted_page" | "embedded_page" | "elements";
  return_url?: string;
  [key: string]: StripeFormValue;
}

export interface StripeRefundCreateInput {
  charge?: string;
  payment_intent?: string;
  amount?: number;
  reason?: "duplicate" | "fraudulent" | "requested_by_customer";
  metadata?: Record<string, string>;
  [key: string]: StripeFormValue;
}

export interface StripeDisputeUpdateInput {
  evidence?: Record<string, StripeFormValue>;
  metadata?: Record<string, string>;
  submit?: boolean;
  [key: string]: StripeFormValue;
}

export interface StripeSubscriptionUpdateInput {
  cancel_at?: number | "max_billed_until" | "max_period_end" | "min_period_end";
  cancel_at_period_end?: boolean;
  cancellation_details?: Record<string, StripeFormValue>;
  collection_method?: "charge_automatically" | "send_invoice";
  default_payment_method?: string;
  description?: string;
  items?: Array<Record<string, StripeFormValue>>;
  metadata?: Record<string, string>;
  payment_behavior?: string;
  proration_behavior?: "always_invoice" | "create_prorations" | "none";
  trial_end?: number | "now";
  [key: string]: StripeFormValue;
}

export interface StripeSubscriptionCancelInput {
  cancellation_details?: Record<string, StripeFormValue>;
  invoice_now?: boolean;
  prorate?: boolean;
  [key: string]: StripeFormValue;
}

export interface StripeWebhookEndpointCreateInput {
  url: string;
  enabled_events: string[];
  api_version?: string;
  connect?: boolean;
  description?: string;
  metadata?: Record<string, string>;
  [key: string]: StripeFormValue;
}

export interface StripeWebhookEndpointUpdateInput {
  url?: string;
  enabled_events?: string[];
  api_version?: string;
  description?: string;
  disabled?: boolean;
  metadata?: Record<string, string>;
  [key: string]: StripeFormValue;
}

export interface StripeWebhookVerificationInput {
  signingSecret: string;
  rawBody: string | Buffer;
  signatureHeader: string;
  toleranceSeconds?: number | undefined;
  currentTimestamp?: number | undefined;
}

export interface StripeWebhookParseOptions {
  signingSecret?: string;
  requireSignature?: boolean;
  toleranceSeconds?: number;
  currentTimestamp?: number;
}

export interface StripeWebhookEvent {
  rawBody: string;
  timestamp?: number;
  signatures: string[];
  event: StripeEventResource;
}

export interface StripeClientRequestInput {
  query?: object | undefined;
  body?: object | undefined;
  options?: StripeRequestOptions | undefined;
}

export interface StripeOperationRequestInput extends StripeClientRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined>;
}

export type {
  StripeEcommerceClient,
  StripeLiveCheckOptions,
} from "./client/contracts.js";
