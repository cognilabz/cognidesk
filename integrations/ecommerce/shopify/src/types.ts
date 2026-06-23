import type { createAdminApiClient } from "@shopify/admin-api-client";

export type ShopifyAdminApiClient = ReturnType<typeof createAdminApiClient>;
export type ShopifyGraphqlVariables = Record<string, unknown>;

export interface ShopifyEcommerceClientOptions {
  shopDomain: string;
  adminAccessToken: string;
  apiVersion?: string;
  fetch?: typeof fetch;
  rawClient?: ShopifyAdminApiClient;
}

export interface ShopifyCredentialStatusInput {
  shopDomain?: string;
  adminAccessConfigured?: boolean;
  webhookSecretConfigured?: boolean;
  scopes?: string[];
}

export interface ShopifyGraphqlInput {
  query: string;
  variables?: ShopifyGraphqlVariables;
  operationName?: string;
}

export interface ShopifyGraphqlResponse<TData = Record<string, unknown>> {
  data?: TData;
  errors?: unknown;
  extensions?: Record<string, unknown>;
  headers?: Headers;
}

export interface ShopifyConnection<TNode> {
  edges?: Array<{ node?: TNode }>;
  pageInfo?: {
    hasNextPage?: boolean;
    endCursor?: string | null;
  };
}

export interface ShopifySearchInput {
  query?: string;
  first?: number;
  after?: string | null;
}

export interface ShopifySearchResult<TNode> {
  nodes: TNode[];
  hasNextPage: boolean;
  endCursor?: string | null;
}

export interface ShopifyIdInput {
  id: string;
}

export interface ShopifyDraftOrderInput {
  input: Record<string, unknown>;
}

export interface ShopifyDraftOrderCreateResult {
  draftOrder?: Record<string, unknown> | null;
  userErrors: Array<{ field?: string[] | null; message: string }>;
}

export interface ShopifyWebhookParseInput {
  request: Request | string | Buffer;
  webhookSecret?: string;
  requireSignature?: boolean;
  hmac?: string;
  topic?: string;
  shopDomain?: string;
  webhookId?: string;
  apiVersion?: string;
}

export interface ShopifyWebhook {
  rawBody: string;
  topic?: string;
  shopDomain?: string;
  webhookId?: string;
  apiVersion?: string;
  payload?: unknown;
}

export type ShopifyRawAdminGraphqlInput = Partial<ShopifyGraphqlInput>;

export interface ShopifyEcommerceClient {
  rawClient: ShopifyAdminApiClient;
  graphql<TData = Record<string, unknown>>(input: ShopifyGraphqlInput): Promise<ShopifyGraphqlResponse<TData>>;
  getShop(): Promise<Record<string, unknown>>;
  getOrder(input: ShopifyIdInput): Promise<Record<string, unknown> | null>;
  getCustomer(input: ShopifyIdInput): Promise<Record<string, unknown> | null>;
  getProduct(input: ShopifyIdInput): Promise<Record<string, unknown> | null>;
  searchOrders(input?: ShopifySearchInput): Promise<ShopifySearchResult<Record<string, unknown>>>;
  searchCustomers(input?: ShopifySearchInput): Promise<ShopifySearchResult<Record<string, unknown>>>;
  searchProducts(input?: ShopifySearchInput): Promise<ShopifySearchResult<Record<string, unknown>>>;
  createDraftOrder(input: ShopifyDraftOrderInput): Promise<ShopifyDraftOrderCreateResult>;
  parseWebhook(input: ShopifyWebhookParseInput): Promise<ShopifyWebhook>;
}
