import type {
  IntercomClientRequestInput,
  IntercomErrorResponse,
  IntercomHttpMethod,
  IntercomProviderPayload,
  IntercomProviderQuery,
  IntercomTicketingClientOptions,
} from "./contracts.js";

export function intercomApiUrl(apiBaseUrl: string, path: string) {
  return new URL(path, `${apiBaseUrl}/`);
}

export async function intercomRequest<T>(input: {
  url: URL;
  method: IntercomHttpMethod;
  options: IntercomTicketingClientOptions;
  fetch: typeof fetch;
  body?: IntercomProviderPayload;
  rawBody?: BodyInit;
  contentType?: string;
}): Promise<T> {
  if (!input.options.accessToken) throw new Error("Intercom API access requires accessToken.");
  const response = await input.fetch(input.url.toString(), {
    method: input.method,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${input.options.accessToken}`,
      "intercom-version": input.options.apiVersion ?? "2.15",
      ...(input.body || input.rawBody ? { "content-type": input.contentType ?? "application/json" } : {}),
    },
    ...(input.rawBody ? { body: input.rawBody } : input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  const text = await response.text();
  const body = text ? JSON.parse(text) as T & IntercomErrorResponse : {} as T & IntercomErrorResponse;
  if (!response.ok) {
    throw new Error(intercomErrorMessage(body, response.status));
  }
  return body as T;
}

export function operationUrl(
  apiBaseUrl: string,
  pathTemplate: string,
  pathParams: IntercomClientRequestInput["pathParams"],
  query: IntercomClientRequestInput["query"],
) {
  const path = pathTemplate.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams?.[key];
    if (value === undefined) throw new Error(`Intercom operation path parameter '${key}' is required.`);
    return encodeURIComponent(String(value));
  });
  const url = intercomApiUrl(apiBaseUrl, path);
  appendQuery(url.searchParams, query);
  return url;
}

function appendQuery(params: URLSearchParams, query?: IntercomProviderQuery) {
  if (!query) return;
  for (const [key, value] of Object.entries(query)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      for (const item of value) params.append(key, String(item));
    } else {
      params.set(key, String(value));
    }
  }
}

function intercomErrorMessage(body: IntercomErrorResponse, status: number) {
  const firstError = body.errors?.[0];
  if (firstError?.message && firstError.code) return `${firstError.code}: ${firstError.message}`;
  return firstError?.message ?? firstError?.code ?? `Intercom API returned ${status}.`;
}
