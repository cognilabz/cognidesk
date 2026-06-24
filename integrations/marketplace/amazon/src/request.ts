import type {
  AmazonMarketplaceClientOptions,
  AmazonMarketplaceJsonObject,
  AmazonMarketplaceProviderPayload,
  AmazonMarketplaceProviderQuery,
  AmazonRestrictedDataTokenRequest,
  AmazonRestrictedDataTokenResponse,
  AmazonSpApiEndpoint,
  AmazonSpApiMethod,
} from "./contracts.js";
import { signAmazonSpApiRequest } from "./signing.js";

export interface AmazonRequestInit {
  method?: AmazonSpApiMethod;
  body?: AmazonMarketplaceProviderPayload | undefined;
  headers?: Record<string, string>;
  query?: AmazonMarketplaceProviderQuery;
  signal?: AbortSignal;
}

export async function amazonRequest<T>(input: AmazonRequestInit & {
  url: string;
  fetch: typeof fetch;
  options: AmazonMarketplaceClientOptions;
}): Promise<T> {
  const body = input.body === undefined ? undefined : JSON.stringify(input.body);
  const url = input.query ? appendQuery(input.url, input.query) : input.url;
  let headers: Record<string, string> = {
    accept: "application/json",
    "user-agent": input.options.userAgent ?? "@cognidesk/integration-marketplace-amazon/0.0.2",
    "x-amz-access-token": input.options.accessToken ?? "",
    ...(body ? { "content-type": "application/json" } : {}),
    ...input.headers,
  };
  if (input.options.aws) {
    const signingInput = {
      method: input.method ?? "GET",
      url,
      region: input.options.aws.region,
      accessKeyId: input.options.aws.accessKeyId,
      secretAccessKey: input.options.aws.secretAccessKey,
      headers,
      ...(body ? { body } : {}),
      ...(input.options.aws.service ? { service: input.options.aws.service } : {}),
      ...(input.options.aws.sessionToken ? { sessionToken: input.options.aws.sessionToken } : {}),
    };
    headers = signAmazonSpApiRequest({
      ...signingInput,
    });
  }
  const response = await input.fetch(url, {
    method: input.method ?? "GET",
    headers,
    ...(body ? { body } : {}),
    ...(input.signal ? { signal: input.signal } : {}),
  });
  const text = await response.text();
  const parsed = parseAmazonResponseBody(text, response.status);
  if (!response.ok) {
    const errorMessage = Array.isArray((parsed as { errors?: Array<{ message?: string }> }).errors)
      ? (parsed as { errors?: Array<{ message?: string }> }).errors?.[0]?.message
      : undefined;
    throw new Error(errorMessage ?? (parsed as { message?: string }).message ?? `Amazon SP-API returned ${response.status}.`);
  }
  return parsed as T;
}

function parseAmazonResponseBody(text: string, status: number): unknown {
  if (!text) return {};
  try {
    return JSON.parse(text) as unknown;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Amazon SP-API returned malformed JSON with HTTP ${status}: ${message}`);
  }
}

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

export function withQuery(path: string, input: Record<string, string | number | boolean | undefined>) {
  return appendQuery(`https://example.test${path}`, input).replace("https://example.test", "");
}

export function amazonOperationUrl(
  apiBaseUrl: string,
  path: string,
  pathParams: Record<string, string | number | boolean | undefined> = {},
) {
  const resolvedPath = path.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams[key];
    if (value === undefined) throw new Error(`Missing Amazon SP-API path parameter '${key}'.`);
    return encodeURIComponent(String(value));
  });
  return `${apiBaseUrl}${resolvedPath.startsWith("/") ? resolvedPath : `/${resolvedPath}`}`;
}

function appendQuery(url: string, input: AmazonMarketplaceJsonObject) {
  const parsed = new URL(url);
  for (const [key, value] of Object.entries(input)) {
    if (value === undefined || value === null || value === "") continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined && item !== null && item !== "") parsed.searchParams.append(key, String(item));
      }
      continue;
    }
    parsed.searchParams.set(key, String(value));
  }
  return parsed.toString();
}
