import type {
  ShopifyCustomerResource,
  ShopifyDraftOrderCreateResult,
  ShopifyDraftOrderResource,
  ShopifyEcommerceClient,
  ShopifyEcommerceClientOptions,
  ShopifyEcommerceJsonObject,
  ShopifyGraphqlInput,
  ShopifyGraphqlResponse,
  ShopifyOrderResource,
  ShopifyProductResource,
  ShopifyShopResource,
} from "./contracts.js";
import { defaultShopifyGraphqlAdminApiVersion } from "./graphql.js";
import type { ShopifyConnection } from "./request.js";
import {
  connectionResult,
  normalizeShopifyShopDomain,
  shopifyGraphqlRequest,
  stripTypename,
} from "./request.js";

export function createShopifyEcommerceClient(options: ShopifyEcommerceClientOptions): ShopifyEcommerceClient {
  const shopDomain = normalizeShopifyShopDomain(options.shopDomain);
  const apiVersion = options.apiVersion ?? defaultShopifyGraphqlAdminApiVersion;
  const apiBaseUrl = (options.apiBaseUrl ?? `https://${shopDomain}`).replace(/\/+$/, "");
  const endpoint = `${apiBaseUrl}/admin/api/${encodeURIComponent(apiVersion)}/graphql.json`;
  const fetchImpl = options.fetch ?? fetch;

  const graphqlTyped = <TData = ShopifyEcommerceJsonObject>(input: ShopifyGraphqlInput) => shopifyGraphqlRequest<TData>({
    endpoint,
    options,
    input,
    fetch: fetchImpl,
  });
  const graphql = (input: ShopifyGraphqlInput): Promise<ShopifyGraphqlResponse> => graphqlTyped(input);

  return {
    graphql,
    async getShop() {
      const response = await graphqlTyped<{ shop?: ShopifyShopResource }>({
        query: `query CognideskShopifyShop {
          shop {
            id
            name
            myshopifyDomain
            email
            plan {
              displayName
            }
          }
        }`,
      });
      return response.data?.shop ?? {};
    },
    async getOrder(id) {
      const response = await graphqlTyped<{ node?: ShopifyOrderResource & { __typename?: string } | null }>({
        query: `query CognideskShopifyOrder($id: ID!) {
          node(id: $id) {
            __typename
            ... on Order {
              id
              name
              email
              displayFinancialStatus
              displayFulfillmentStatus
              updatedAt
            }
          }
        }`,
        variables: { id },
      });
      const node = response.data?.node;
      return node?.__typename === "Order" ? stripTypename(node) : null;
    },
    async getCustomer(id) {
      const response = await graphqlTyped<{ customer?: ShopifyCustomerResource | null }>({
        query: `query CognideskShopifyCustomer($id: ID!) {
          customer(id: $id) {
            id
            displayName
            email
            phone
            updatedAt
          }
        }`,
        variables: { id },
      });
      return response.data?.customer ?? null;
    },
    async getProduct(id) {
      const response = await graphqlTyped<{ node?: ShopifyProductResource & { __typename?: string } | null }>({
        query: `query CognideskShopifyProduct($id: ID!) {
          node(id: $id) {
            __typename
            ... on Product {
              id
              title
              handle
              status
              productType
              vendor
              updatedAt
            }
          }
        }`,
        variables: { id },
      });
      const node = response.data?.node;
      return node?.__typename === "Product" ? stripTypename(node) : null;
    },
    async getDraftOrder(id) {
      const response = await graphqlTyped<{ draftOrder?: ShopifyDraftOrderResource | null }>({
        query: `query CognideskShopifyDraftOrder($id: ID!) {
          draftOrder(id: $id) {
            id
            name
            email
            status
            updatedAt
          }
        }`,
        variables: { id },
      });
      return response.data?.draftOrder ?? null;
    },
    async searchOrders(input = {}) {
      const response = await graphqlTyped<{
        orders?: ShopifyConnection<ShopifyOrderResource>;
      }>({
        query: `query CognideskShopifyOrders($first: Int!, $after: String, $query: String) {
          orders(first: $first, after: $after, query: $query) {
            edges {
              node {
                id
                name
                email
                displayFinancialStatus
                displayFulfillmentStatus
                updatedAt
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }`,
        variables: {
          first: input.first ?? 10,
          after: input.after ?? null,
          query: input.query ?? null,
        },
      });
      return connectionResult(response.data?.orders);
    },
    async searchCustomers(input = {}) {
      const response = await graphqlTyped<{
        customers?: ShopifyConnection<ShopifyCustomerResource>;
      }>({
        query: `query CognideskShopifyCustomers($first: Int!, $after: String, $query: String) {
          customers(first: $first, after: $after, query: $query) {
            edges {
              node {
                id
                displayName
                email
                phone
                updatedAt
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }`,
        variables: {
          first: input.first ?? 10,
          after: input.after ?? null,
          query: input.query ?? null,
        },
      });
      return connectionResult(response.data?.customers);
    },
    async searchProducts(input = {}) {
      const response = await graphqlTyped<{
        products?: ShopifyConnection<ShopifyProductResource>;
      }>({
        query: `query CognideskShopifyProducts($first: Int!, $after: String, $query: String) {
          products(first: $first, after: $after, query: $query) {
            edges {
              node {
                id
                title
                handle
                status
                productType
                vendor
                updatedAt
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }`,
        variables: {
          first: input.first ?? 10,
          after: input.after ?? null,
          query: input.query ?? null,
        },
      });
      return connectionResult(response.data?.products);
    },
    async createDraftOrder(input) {
      const response = await graphqlTyped<{
        draftOrderCreate?: ShopifyDraftOrderCreateResult;
      }>({
        query: `mutation CognideskShopifyDraftOrderCreate($input: DraftOrderInput!) {
          draftOrderCreate(input: $input) {
            draftOrder {
              id
              name
              invoiceUrl
            }
            userErrors {
              field
              message
            }
          }
        }`,
        variables: { input: input.input },
      });
      return response.data?.draftOrderCreate ?? { userErrors: [] };
    },
  };
}
