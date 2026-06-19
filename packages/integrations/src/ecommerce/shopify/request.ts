import type {
  ShopifyEcommerceClientOptions,
  ShopifyGraphqlInput,
  ShopifyGraphqlResponse,
  ShopifySearchResult,
} from "./contracts.js";

export interface ShopifyConnection<TNode> {
  edges?: Array<{ node?: TNode }>;
  pageInfo?: {
    hasNextPage?: boolean;
    endCursor?: string | null;
  };
}

export async function shopifyGraphqlRequest<TData>(args: {
  endpoint: string;
  options: ShopifyEcommerceClientOptions;
  input: ShopifyGraphqlInput;
  fetch: typeof fetch;
}): Promise<ShopifyGraphqlResponse<TData>> {
  const response = await args.fetch(args.endpoint, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "x-shopify-access-token": args.options.adminAccessToken,
    },
    body: JSON.stringify({
      query: args.input.query,
      ...(args.input.variables ? { variables: args.input.variables } : {}),
      ...(args.input.operationName ? { operationName: args.input.operationName } : {}),
    }),
  });
  const text = await response.text();
  const body = text ? JSON.parse(text) as ShopifyGraphqlResponse<TData> : {};
  if (!response.ok) {
    throw new Error(shopifyErrorMessage(body, response.status));
  }
  if (body.errors?.length) {
    throw new Error(body.errors.map((error) => error.message ?? "Shopify GraphQL error").join("; "));
  }
  return body;
}

export function normalizeShopifyShopDomain(shopDomain: string) {
  if (!shopDomain) throw new Error("Shopify shopDomain is required.");
  const withoutProtocol = shopDomain.replace(/^https?:\/\//, "").replace(/\/.*$/, "").trim();
  if (!withoutProtocol) throw new Error("Shopify shopDomain is required.");
  return withoutProtocol;
}

export function connectionResult<TNode>(connection?: ShopifyConnection<TNode>): ShopifySearchResult<TNode> {
  return {
    nodes: connection?.edges?.flatMap((edge) => edge.node ? [edge.node] : []) ?? [],
    hasNextPage: connection?.pageInfo?.hasNextPage ?? false,
    endCursor: connection?.pageInfo?.endCursor ?? null,
  };
}

export function stripTypename<TNode extends { __typename?: string }>(node: TNode): Omit<TNode, "__typename"> {
  const { __typename: _typename, ...rest } = node;
  return rest;
}

function shopifyErrorMessage<TData>(body: ShopifyGraphqlResponse<TData>, status: number) {
  if (body.errors?.length) {
    return body.errors.map((error) => error.message ?? "Shopify GraphQL error").join("; ");
  }
  return `Shopify Admin GraphQL returned ${status}.`;
}
