import type {
  AmazonLwaTokenResponse,
  AmazonMarketplaceClientOptions,
  AmazonRestrictedDataTokenRequest,
  AmazonRestrictedDataTokenResponse,
} from "../contracts.js";
import { createAmazonSpApiOfficialSdkApis } from "../official-sdk.js";

export async function createAmazonRestrictedDataToken(
  options: AmazonMarketplaceClientOptions,
  input: AmazonRestrictedDataTokenRequest,
): Promise<AmazonRestrictedDataTokenResponse> {
  if (!options.accessToken && !(options.refreshToken && options.lwaClientId && options.lwaClientSecret)) {
    throw new Error("Amazon LWA access token or refresh-token credentials are required to create restricted data tokens.");
  }
  return createAmazonSpApiOfficialSdkApis(options).tokens().createRestrictedDataToken({
    restrictedResources: input.restrictedResources,
    ...(input.targetApplication ? { targetApplication: input.targetApplication } : {}),
  }) as Promise<AmazonRestrictedDataTokenResponse>;
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
  const parsed = parseAmazonLwaTokenResponse(text, response.status);
  if (!response.ok) {
    throw new Error(parsed.error_description ?? parsed.error ?? `Amazon LWA token request returned ${response.status}.`);
  }
  return parsed;
}

function parseAmazonLwaTokenResponse(
  text: string,
  status: number,
): AmazonLwaTokenResponse & { error_description?: string; error?: string } {
  if (!text) return {};
  try {
    return JSON.parse(text) as AmazonLwaTokenResponse & { error_description?: string; error?: string };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Amazon LWA token request returned malformed JSON with HTTP ${status}: ${message}`);
  }
}
