import { createHmac, timingSafeEqual } from "node:crypto";
import { createAdminApiClient } from "@shopify/admin-api-client";
import { defaultShopifyGraphqlAdminApiVersion } from "./manifest.js";
import type {
  ShopifyAdminApiClient,
  ShopifyConnection,
  ShopifyDraftOrderCreateResult,
  ShopifyEcommerceClient,
  ShopifyEcommerceClientOptions,
  ShopifyGraphqlInput,
  ShopifyGraphqlRequestOptions,
  ShopifyGraphqlResponse,
  ShopifySearchResult,
  ShopifyWebhookParseInput,
} from "./types.js";

export function createShopifyEcommerceClient(options: ShopifyEcommerceClientOptions): ShopifyEcommerceClient {
  const rawClient = options.rawClient ?? createAdminApiClient({
    storeDomain: normalizeShopifyShopDomain(options.shopDomain),
    apiVersion: options.apiVersion ?? defaultShopifyGraphqlAdminApiVersion,
    accessToken: options.adminAccessToken,
    ...(options.fetch ? { customFetchApi: options.fetch } : {}),
  });

  const graphql = <TData = Record<string, unknown>>(input: ShopifyGraphqlInput) => {
    return rawClient.request<TData>(input.query, adminGraphqlRequestOptions(input)) as Promise<ShopifyGraphqlResponse<TData>>;
  };

  return {
    rawClient,
    graphql,
    async getShop() {
      const response = await graphql<{ shop?: Record<string, unknown> }>({
        query: `query CognideskShopifyShop {
          shop { id name myshopifyDomain email plan { displayName } }
        }`,
      });
      return response.data?.shop ?? {};
    },
    async getOrder(input) {
      const response = await graphql<{ node?: (Record<string, unknown> & { __typename?: string }) | null }>({
        query: `query CognideskShopifyOrder($id: ID!) {
          node(id: $id) {
            __typename
            ... on Order { id name email displayFinancialStatus displayFulfillmentStatus updatedAt }
          }
        }`,
        variables: { id: input.id },
      });
      return response.data?.node?.__typename === "Order" ? stripTypename(response.data.node) : null;
    },
    async getCustomer(input) {
      const response = await graphql<{ customer?: Record<string, unknown> | null }>({
        query: `query CognideskShopifyCustomer($id: ID!) {
          customer(id: $id) { id displayName email phone updatedAt }
        }`,
        variables: { id: input.id },
      });
      return response.data?.customer ?? null;
    },
    async getProduct(input) {
      const response = await graphql<{ node?: (Record<string, unknown> & { __typename?: string }) | null }>({
        query: `query CognideskShopifyProduct($id: ID!) {
          node(id: $id) {
            __typename
            ... on Product { id title handle status productType vendor updatedAt }
          }
        }`,
        variables: { id: input.id },
      });
      return response.data?.node?.__typename === "Product" ? stripTypename(response.data.node) : null;
    },
    async searchOrders(input = {}) {
      const response = await graphql<{ orders?: ShopifyConnection<Record<string, unknown>> }>({
        query: `query CognideskShopifyOrders($first: Int!, $after: String, $query: String) {
          orders(first: $first, after: $after, query: $query) {
            edges { node { id name email displayFinancialStatus displayFulfillmentStatus updatedAt } }
            pageInfo { hasNextPage endCursor }
          }
        }`,
        variables: { first: input.first ?? 10, after: input.after ?? null, query: input.query ?? null },
      });
      return connectionResult(response.data?.orders);
    },
    async searchCustomers(input = {}) {
      const response = await graphql<{ customers?: ShopifyConnection<Record<string, unknown>> }>({
        query: `query CognideskShopifyCustomers($first: Int!, $after: String, $query: String) {
          customers(first: $first, after: $after, query: $query) {
            edges { node { id displayName email phone updatedAt } }
            pageInfo { hasNextPage endCursor }
          }
        }`,
        variables: { first: input.first ?? 10, after: input.after ?? null, query: input.query ?? null },
      });
      return connectionResult(response.data?.customers);
    },
    async searchProducts(input = {}) {
      const response = await graphql<{ products?: ShopifyConnection<Record<string, unknown>> }>({
        query: `query CognideskShopifyProducts($first: Int!, $after: String, $query: String) {
          products(first: $first, after: $after, query: $query) {
            edges { node { id title handle status productType vendor updatedAt } }
            pageInfo { hasNextPage endCursor }
          }
        }`,
        variables: { first: input.first ?? 10, after: input.after ?? null, query: input.query ?? null },
      });
      return connectionResult(response.data?.products);
    },
    async createDraftOrder(input) {
      const response = await graphql<{ draftOrderCreate?: ShopifyDraftOrderCreateResult }>({
        query: `mutation CognideskShopifyDraftOrderCreate($input: DraftOrderInput!) {
          draftOrderCreate(input: $input) {
            draftOrder { id name invoiceUrl }
            userErrors { field message }
          }
        }`,
        variables: { input: input.input },
      });
      return response.data?.draftOrderCreate ?? { userErrors: [] };
    },
    parseWebhook(input) {
      return parseShopifyWebhook(input);
    },
  };
}

export async function parseShopifyWebhook(input: ShopifyWebhookParseInput) {
  const rawBody = typeof input.request === "string" || Buffer.isBuffer(input.request)
    ? input.request
    : await input.request.text();
  const headers = typeof input.request === "string" || Buffer.isBuffer(input.request)
    ? new Headers()
    : input.request.headers;
  const hmac = input.hmac ?? headers.get("x-shopify-hmac-sha256") ?? "";
  const requireSignature = input.requireSignature ?? true;
  const rawBodyString = Buffer.isBuffer(rawBody) ? rawBody.toString("utf8") : rawBody;

  if (requireSignature && !validateShopifyWebhookSignature({
    webhookSecret: required(input.webhookSecret, "Shopify webhook secret is required to validate webhook signatures."),
    rawBody,
    hmac,
  })) {
    throw new Error("Shopify webhook signature validation failed.");
  }

  return {
    rawBody: rawBodyString,
    ...optional("topic", input.topic ?? headers.get("x-shopify-topic") ?? undefined),
    ...optional("shopDomain", input.shopDomain ?? headers.get("x-shopify-shop-domain") ?? undefined),
    ...optional("webhookId", input.webhookId ?? headers.get("x-shopify-webhook-id") ?? undefined),
    ...optional("apiVersion", input.apiVersion ?? headers.get("x-shopify-api-version") ?? undefined),
    ...(rawBodyString ? { payload: JSON.parse(rawBodyString) as unknown } : {}),
  };
}

export function validateShopifyWebhookSignature(input: { webhookSecret: string; rawBody: string | Buffer; hmac: string }) {
  const rawBody = Buffer.isBuffer(input.rawBody) ? input.rawBody : Buffer.from(input.rawBody, "utf8");
  const expected = createHmac("sha256", input.webhookSecret).update(rawBody).digest("base64");
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(input.hmac);
  return expectedBuffer.length === actualBuffer.length && timingSafeEqual(expectedBuffer, actualBuffer);
}

export function normalizeShopifyShopDomain(shopDomain: string) {
  if (!shopDomain) throw new Error("Shopify shopDomain is required.");
  const trimmed = shopDomain.trim();
  const withoutProtocol = trimmed.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  if (!withoutProtocol) throw new Error("Shopify shopDomain is required.");
  return withoutProtocol;
}

function connectionResult<TNode>(connection?: ShopifyConnection<TNode>): ShopifySearchResult<TNode> {
  return {
    nodes: connection?.edges?.flatMap((edge) => edge.node ? [edge.node] : []) ?? [],
    hasNextPage: connection?.pageInfo?.hasNextPage ?? false,
    endCursor: connection?.pageInfo?.endCursor ?? null,
  };
}

function stripTypename<TNode extends { __typename?: string }>(node: TNode): Omit<TNode, "__typename"> {
  const { __typename: _typename, ...rest } = node;
  return rest;
}

function adminGraphqlRequestOptions(input: ShopifyGraphqlInput): ShopifyGraphqlRequestOptions | undefined {
  const options: ShopifyGraphqlRequestOptions = {
    ...(input.variables ? { variables: input.variables } : {}),
    ...(input.apiVersion ? { apiVersion: input.apiVersion } : {}),
    ...(input.headers ? { headers: input.headers } : {}),
    ...(input.retries !== undefined ? { retries: input.retries } : {}),
    ...(input.signal ? { signal: input.signal } : {}),
  };
  return Object.keys(options).length > 0 ? options : undefined;
}

function required(value: string | undefined, message: string) {
  if (!value) throw new Error(message);
  return value;
}

function optional<TKey extends string>(key: TKey, value: string | undefined): Partial<Record<TKey, string>> {
  return value === undefined ? {} : { [key]: value } as Record<TKey, string>;
}

export type { ShopifyAdminApiClient };
