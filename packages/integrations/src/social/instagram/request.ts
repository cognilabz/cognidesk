import type {
  InstagramSocialJsonObject,
  InstagramSocialProviderPayload,
} from "./contracts.js";

export function instagramGraphUrl(baseUrl: string, version: string, path: string) {
  return new URL(`/${version.replace(/^\/+|\/+$/g, "")}${path}`, baseUrl);
}

export function applyListQuery(
  url: URL,
  input: {
    fields?: string[];
    limit?: number;
    after?: string;
    before?: string;
  },
  defaultFields: string[],
) {
  const fields = input.fields ?? defaultFields;
  if (fields.length) url.searchParams.set("fields", fields.join(","));
  if (input.limit !== undefined) url.searchParams.set("limit", String(input.limit));
  if (input.after) url.searchParams.set("after", input.after);
  if (input.before) url.searchParams.set("before", input.before);
}

export async function instagramRequest<T>(input: {
  url: URL;
  method: "GET" | "POST";
  options: { accessToken: string };
  fetch: typeof fetch;
  body?: InstagramSocialProviderPayload;
}): Promise<T> {
  const response = await input.fetch(input.url.toString(), {
    method: input.method,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${input.options.accessToken}`,
      ...(input.body ? { "content-type": "application/json" } : {}),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  const text = await response.text();
  const body = text ? JSON.parse(text) as T & InstagramErrorResponse : {} as T & InstagramErrorResponse;
  if (!response.ok) {
    throw new Error(instagramErrorMessage(body, response.status));
  }
  return body as T;
}

export function stripUndefined(input: InstagramSocialJsonObject) {
  return Object.fromEntries(Object.entries(input).filter((entry) => entry[1] !== undefined));
}

interface InstagramErrorResponse {
  error?: {
    message?: string;
    type?: string;
    code?: number;
    error_subcode?: number;
    fbtrace_id?: string;
  };
}

function instagramErrorMessage(body: InstagramErrorResponse, status: number) {
  const code = body.error?.code !== undefined ? ` (${body.error.code})` : "";
  return body.error?.message ? `${body.error.message}${code}` : `Instagram Graph API returned ${status}.`;
}
