import type {
  GooglePlayClientRequestInput,
  GooglePlayHttpMethod,
  GooglePlayReviewsClientOptions,
  GooglePlayReviewsProviderPayload,
  GooglePlayReviewsProviderQuery,
} from "./contracts.js";

export async function googlePlayRequest<T>(input: {
  url: string;
  method: GooglePlayHttpMethod;
  options: GooglePlayReviewsClientOptions;
  fetch: typeof fetch;
  body?: GooglePlayReviewsProviderPayload | undefined;
}): Promise<T> {
  const accessToken = await resolveAccessToken(input.options);
  const response = await input.fetch(input.url, {
    method: input.method,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${accessToken}`,
      ...(input.body ? { "content-type": "application/json" } : {}),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  const text = await response.text();
  const body = text
    ? JSON.parse(text) as T & { error?: { message?: string }; message?: string }
    : {} as T & { error?: { message?: string }; message?: string };
  if (!response.ok) {
    throw new Error(body.error?.message ?? body.message ?? `Google Play Developer API returned ${response.status}.`);
  }
  return body as T;
}

export function googlePlayOperationUrl(
  apiBaseUrl: string,
  path: string,
  pathParams: NonNullable<GooglePlayClientRequestInput["pathParams"]> = {},
  query?: GooglePlayReviewsProviderQuery,
) {
  const resolvedPath = path.replace(/\{(\+?)([^}]+)\}/g, (_match, reserved: string, key: string) => {
    const value = pathParams[key];
    if (value === undefined) throw new Error(`Missing Google Play path parameter '${key}'.`);
    return reserved === "+"
      ? String(value).split("/").map((segment) => encodeURIComponent(segment)).join("/")
      : encodeURIComponent(String(value));
  });
  const url = new URL(resolvedPath.startsWith("/") ? resolvedPath : `/${resolvedPath}`, apiBaseUrl);
  appendGooglePlayQuery(url.searchParams, query);
  return url.toString();
}

function appendGooglePlayQuery(params: URLSearchParams, query?: GooglePlayReviewsProviderQuery) {
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined && item !== null) params.append(key, String(item));
      }
      continue;
    }
    params.set(key, String(value));
  }
}

async function resolveAccessToken(options: GooglePlayReviewsClientOptions): Promise<string> {
  const token = options.getAccessToken ? await options.getAccessToken() : options.accessToken;
  if (!token) throw new Error("Google Play Android Publisher access token is required.");
  return token;
}
