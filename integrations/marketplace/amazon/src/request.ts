import type {
  AmazonMarketplaceClientOptions,
  AmazonRestrictedDataTokenRequest,
  AmazonRestrictedDataTokenResponse,
  AmazonSpApiEndpoint,
} from "./contracts.js";

export async function resolveAmazonRestrictedDataToken(
  options: AmazonMarketplaceClientOptions,
  input: AmazonRestrictedDataTokenRequest,
  createRestrictedDataToken: (
    request: AmazonRestrictedDataTokenRequest,
  ) => Promise<AmazonRestrictedDataTokenResponse>,
): Promise<string> {
  if (options.restrictedDataToken) return options.restrictedDataToken;
  const provided = options.restrictedDataTokenProvider
    ? await options.restrictedDataTokenProvider(input)
    : await createRestrictedDataToken(input);
  const restrictedDataToken = typeof provided === "string" ? provided : provided.restrictedDataToken;
  if (!restrictedDataToken) {
    throw new Error("Amazon restricted data token response did not include restrictedDataToken.");
  }
  return restrictedDataToken;
}

export function endpointBaseUrl(endpoint: AmazonSpApiEndpoint) {
  if (endpoint === "eu") return "https://sellingpartnerapi-eu.amazon.com";
  if (endpoint === "fe") return "https://sellingpartnerapi-fe.amazon.com";
  return "https://sellingpartnerapi-na.amazon.com";
}

export function marketplaceIdsFromOptions(options: AmazonMarketplaceClientOptions): string[] {
  return options.marketplaceId ? [options.marketplaceId] : [];
}
