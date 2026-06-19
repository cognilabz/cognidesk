import type {
  AmazonLwaTokenResponse,
  AmazonMarketplaceClientOptions,
  AmazonRestrictedDataTokenRequest,
  AmazonRestrictedDataTokenResponse,
} from "../contracts.js";
import { amazonRequest, endpointBaseUrl } from "../request.js";

export async function createAmazonRestrictedDataToken(
  options: AmazonMarketplaceClientOptions,
  input: AmazonRestrictedDataTokenRequest,
): Promise<AmazonRestrictedDataTokenResponse> {
  if (!options.accessToken) {
    throw new Error("Amazon LWA access token is required to create restricted data tokens.");
  }
  const fetchImpl = options.fetch ?? fetch;
  const apiBaseUrl = (options.apiBaseUrl ?? endpointBaseUrl(options.endpoint ?? "na")).replace(/\/+$/, "");
  return amazonRequest<AmazonRestrictedDataTokenResponse>({
    url: `${apiBaseUrl}/tokens/2021-03-01/restrictedDataToken`,
    fetch: fetchImpl,
    options,
    method: "POST",
    body: {
      restrictedResources: input.restrictedResources,
      ...(input.targetApplication ? { targetApplication: input.targetApplication } : {}),
    },
  });
}

export async function refreshAmazonLwaAccessToken(
  options: Pick<AmazonMarketplaceClientOptions, "refreshToken" | "lwaClientId" | "lwaClientSecret" | "lwaTokenUrl" | "fetch">,
): Promise<AmazonLwaTokenResponse> {
  if (!options.refreshToken || !options.lwaClientId || !options.lwaClientSecret) {
    throw new Error("Amazon LWA refresh token, client ID, and client secret are required.");
  }
  const fetchImpl = options.fetch ?? fetch;
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: options.refreshToken,
    client_id: options.lwaClientId,
    client_secret: options.lwaClientSecret,
  });
  const response = await fetchImpl(options.lwaTokenUrl ?? "https://api.amazon.com/auth/o2/token", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/x-www-form-urlencoded",
    },
    body,
  });
  const text = await response.text();
  const parsed = text ? JSON.parse(text) as AmazonLwaTokenResponse & { error_description?: string; error?: string } : {};
  if (!response.ok) {
    throw new Error(parsed.error_description ?? parsed.error ?? `Amazon LWA token request returned ${response.status}.`);
  }
  return parsed;
}
