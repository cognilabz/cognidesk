import type {
  GooglePlayServiceAccountTokenProviderOptions,
  GooglePlayServiceAccountTokenResponse,
} from "./contracts.js";
import { createGooglePlayServiceAccountJwt } from "./jwt.js";

export function createGooglePlayServiceAccountTokenProvider(
  input: GooglePlayServiceAccountTokenProviderOptions,
): () => Promise<string> {
  const fetchImpl = input.fetch ?? fetch;
  const now = input.now ?? (() => Math.floor(Date.now() / 1000));
  let cached: { token: string; expiresAt: number } | null = null;
  return async () => {
    const issuedAt = now();
    if (cached && cached.expiresAt - 60 > issuedAt) return cached.token;
    const expiresIn = input.lifetimeSeconds ?? 3600;
    const tokenUri = input.serviceAccount.tokenUri ?? "https://oauth2.googleapis.com/token";
    const assertion = createGooglePlayServiceAccountJwt({
      serviceAccount: input.serviceAccount,
      scopes: input.scopes ?? input.serviceAccount.scopes ?? ["https://www.googleapis.com/auth/androidpublisher"],
      audience: tokenUri,
      issuedAt,
      expiresAt: issuedAt + expiresIn,
    });
    const response = await fetchImpl(tokenUri, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion,
      }),
    });
    const body = await response.json() as GooglePlayServiceAccountTokenResponse;
    if (!response.ok || !body.access_token) {
      throw new Error(body.error_description ?? body.error ?? `Google OAuth token endpoint returned ${response.status}.`);
    }
    cached = {
      token: body.access_token,
      expiresAt: issuedAt + (body.expires_in ?? expiresIn),
    };
    return body.access_token;
  };
}
