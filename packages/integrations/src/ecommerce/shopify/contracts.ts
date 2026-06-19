export type ShopifyEcommerceJsonPrimitive = string | number | boolean | null;
export type ShopifyEcommerceJsonValue =
  | ShopifyEcommerceJsonPrimitive
  | ShopifyEcommerceJsonObject
  | readonly ShopifyEcommerceJsonValue[];
export type ShopifyEcommerceProviderExtensionValue = ShopifyEcommerceJsonValue | object | undefined;
export interface ShopifyEcommerceJsonObject {
  [key: string]: ShopifyEcommerceProviderExtensionValue;
}
export type ShopifyEcommerceProviderPayload = ShopifyEcommerceJsonObject | object;
export type ShopifyEcommerceProviderQuery = Record<string, ShopifyEcommerceProviderExtensionValue>;
export interface ShopifyEcommerceProviderResponse extends ShopifyEcommerceJsonObject {}
export interface ShopifyEcommerceProviderExtensionFields extends ShopifyEcommerceJsonObject {}

export interface ShopifyEcommerceClientOptions {
  shopDomain: string;
  adminAccessToken: string;
  apiVersion?: string;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
}

export interface ShopifyCredentialStatusInput {
  shopDomain?: string;
  adminAccessConfigured?: boolean;
  webhookSecretConfigured?: boolean;
  scopes?: string[];
  apiVersion?: string;
}

export interface ShopifyGraphqlResponse<TData = ShopifyEcommerceJsonObject> {
  data?: TData;
  errors?: Array<{ message?: string; extensions?: ShopifyEcommerceJsonObject; [key: string]: ShopifyEcommerceJsonValue | undefined }>;
  extensions?: ShopifyEcommerceJsonObject;
}

export interface ShopifyGraphqlInput {
  query: string;
  variables?: ShopifyGraphqlVariables;
  operationName?: string;
}

export interface ShopifyGraphqlVariables {
  [key: string]: ShopifyGraphqlVariableValue | undefined;
}
export type ShopifyGraphqlVariableValue =
  | string
  | number
  | boolean
  | null
  | ShopifyGraphqlVariableValue[]
  | { [key: string]: ShopifyGraphqlVariableValue | undefined };

export interface ShopifyShopResource {
  id?: string;
  name?: string;
  myshopifyDomain?: string;
  email?: string | null;
  plan?: { displayName?: string | null } | null;
}

export interface ShopifyOrderResource {
  id?: string;
  name?: string;
  email?: string | null;
  displayFinancialStatus?: string | null;
  displayFulfillmentStatus?: string | null;
  updatedAt?: string;
  [key: string]: ShopifyEcommerceProviderExtensionValue;
}

export interface ShopifyCustomerResource {
  id?: string;
  displayName?: string;
  email?: string | null;
  phone?: string | null;
  updatedAt?: string;
  [key: string]: ShopifyEcommerceProviderExtensionValue;
}

export interface ShopifyDraftOrderResource {
  id?: string;
  name?: string;
  email?: string | null;
  status?: string | null;
  updatedAt?: string;
  [key: string]: ShopifyEcommerceProviderExtensionValue;
}

export interface ShopifyProductResource {
  id?: string;
  title?: string;
  handle?: string;
  status?: string;
  productType?: string;
  vendor?: string;
  updatedAt?: string;
  [key: string]: ShopifyEcommerceProviderExtensionValue;
}

export interface ShopifySearchResult<TNode> {
  nodes: TNode[];
  hasNextPage: boolean;
  endCursor?: string | null;
}

export interface ShopifyMailingAddressInput {
  address1?: string;
  address2?: string;
  city?: string;
  company?: string;
  countryCode?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  provinceCode?: string;
  zip?: string;
  [providerField: string]: ShopifyGraphqlVariableValue | undefined;
}

export interface ShopifyDraftOrderLineItemInput {
  variantId?: string;
  title?: string;
  quantity: number;
  originalUnitPrice?: string;
  sku?: string;
  taxable?: boolean;
  requiresShipping?: boolean;
  weight?: { value: number; unit: "KILOGRAMS" | "GRAMS" | "POUNDS" | "OUNCES" | (string & {}) };
  customAttributes?: Array<{ key: string; value: string }>;
  [providerField: string]: ShopifyGraphqlVariableValue | undefined;
}

export interface ShopifyDraftOrderAppliedDiscountInput {
  title?: string;
  description?: string;
  value: number;
  valueType: "FIXED_AMOUNT" | "PERCENTAGE" | (string & {});
  amount?: string;
  [providerField: string]: ShopifyGraphqlVariableValue | undefined;
}

export interface ShopifyDraftOrderInputFields {
  email?: string;
  customerId?: string;
  lineItems?: ShopifyDraftOrderLineItemInput[];
  billingAddress?: ShopifyMailingAddressInput;
  shippingAddress?: ShopifyMailingAddressInput;
  note?: string;
  tags?: string[];
  taxExempt?: boolean;
  useCustomerDefaultAddress?: boolean;
  appliedDiscount?: ShopifyDraftOrderAppliedDiscountInput;
  customAttributes?: Array<{ key: string; value: string }>;
  metafields?: Array<{ namespace: string; key: string; type: string; value: string }>;
  [providerField: string]: ShopifyGraphqlVariableValue | undefined;
}

export interface ShopifyDraftOrderInput {
  input: ShopifyDraftOrderInputFields;
}

export interface ShopifyUserError {
  field?: string[] | null;
  message: string;
}

export interface ShopifyDraftOrderCreateResult {
  draftOrder?: (ShopifyDraftOrderResource & { invoiceUrl?: string | null }) | null;
  userErrors: ShopifyUserError[];
}

export interface ShopifyEcommerceClient {
  graphql(input: ShopifyGraphqlInput): Promise<ShopifyGraphqlResponse>;
  getShop(): Promise<ShopifyShopResource>;
  getOrder(id: string): Promise<ShopifyOrderResource | null>;
  getCustomer(id: string): Promise<ShopifyCustomerResource | null>;
  getProduct(id: string): Promise<ShopifyProductResource | null>;
  getDraftOrder(id: string): Promise<ShopifyDraftOrderResource | null>;
  searchOrders(input?: { query?: string; first?: number; after?: string }): Promise<ShopifySearchResult<ShopifyOrderResource>>;
  searchCustomers(input?: { query?: string; first?: number; after?: string }): Promise<ShopifySearchResult<ShopifyCustomerResource>>;
  searchProducts(input?: { query?: string; first?: number; after?: string }): Promise<ShopifySearchResult<ShopifyProductResource>>;
  createDraftOrder(input: ShopifyDraftOrderInput): Promise<ShopifyDraftOrderCreateResult>;
}

export interface ShopifyLiveCheckOptions extends ShopifyEcommerceClientOptions {
  client?: Pick<ShopifyEcommerceClient, "getShop">;
}

export interface ValidateShopifyWebhookSignatureInput {
  webhookSecret: string;
  rawBody: string | Buffer;
  hmac: string;
}

export interface ParseShopifyWebhookOptions {
  webhookSecret?: string;
  requireSignature?: boolean;
}

export interface ShopifyWebhook {
  rawBody: string;
  topic?: string;
  shopDomain?: string;
  webhookId?: string;
  apiVersion?: string;
  payload?: unknown;
}
