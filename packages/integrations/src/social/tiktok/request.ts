import type {
  TikTokApiResponse,
  TikTokSocialJsonObject,
  TikTokSocialProviderPayload,
} from "./contracts.js";

export async function tiktokOpenRequest<T>(input: {
  url: URL;
  method: "GET" | "POST";
  token: string;
  fetch: typeof fetch;
  body?: TikTokSocialProviderPayload;
}): Promise<T> {
  return tiktokRequest<T>({
    ...input,
    headers: { authorization: `Bearer ${input.token}` },
  });
}

export async function tiktokBusinessRequest<T>(input: {
  url: URL;
  method: "GET" | "POST";
  token: string;
  fetch: typeof fetch;
  body?: TikTokSocialProviderPayload;
}): Promise<T> {
  return tiktokRequest<T>({
    ...input,
    headers: { "Access-Token": input.token },
  });
}

export async function tiktokRequest<T>(input: {
  url: URL;
  method: "GET" | "POST";
  headers: Record<string, string>;
  fetch: typeof fetch;
  body?: TikTokSocialProviderPayload;
}): Promise<T> {
  const response = await input.fetch(input.url.toString(), {
    method: input.method,
    headers: {
      accept: "application/json",
      ...input.headers,
      ...(input.body ? { "content-type": "application/json" } : {}),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  const text = await response.text();
  const body = (text ? JSON.parse(text) : {}) as T & TikTokApiResponse;
  if (!response.ok || (body.error?.code && body.error.code !== "ok")) {
    throw new Error(tiktokErrorMessage(body, response.status));
  }
  return body as T;
}

export function businessUrl(baseUrl: string, version: string, path: string) {
  return new URL(`/open_api/${version.replace(/^\/+|\/+$/g, "")}${path}`, baseUrl);
}

export function stripUndefined(input: TikTokSocialJsonObject) {
  return Object.fromEntries(Object.entries(input).filter((entry) => entry[1] !== undefined));
}

function tiktokErrorMessage(body: TikTokApiResponse, status: number) {
  const code = body.error?.code && body.error.code !== "ok" ? ` (${body.error.code})` : "";
  return body.error?.message ? `${body.error.message}${code}` : `TikTok API returned ${status}.`;
}
