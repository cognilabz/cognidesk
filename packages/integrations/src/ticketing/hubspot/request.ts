import type {
  HubSpotHttpMethod,
  HubSpotOperationRequestInput,
  HubSpotProviderPayload,
  HubSpotProviderQuery,
  HubSpotReadOptions,
  HubSpotTicketingClientOptions,
} from "./contracts.js";

export function applyReadOptions(url: URL, options: HubSpotReadOptions) {
  if (options.properties?.length) url.searchParams.set("properties", options.properties.join(","));
  if (options.propertiesWithHistory?.length) {
    url.searchParams.set("propertiesWithHistory", options.propertiesWithHistory.join(","));
  }
  if (options.associations?.length) url.searchParams.set("associations", options.associations.join(","));
  if (options.archived !== undefined) url.searchParams.set("archived", String(options.archived));
  if (options.idProperty) url.searchParams.set("idProperty", options.idProperty);
}

export function hubSpotUrl(baseUrl: string, path: string) {
  return new URL(path, baseUrl);
}

export function hubSpotOperationUrl(
  baseUrl: string,
  path: string,
  pathParams: HubSpotOperationRequestInput["pathParams"] = {},
  query?: HubSpotProviderQuery,
) {
  const resolvedPath = path.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams[key];
    if (value === undefined) throw new Error(`Missing HubSpot path parameter '${key}'.`);
    return encodeURIComponent(String(value));
  });
  const url = hubSpotUrl(baseUrl, resolvedPath);
  appendHubSpotQuery(url.searchParams, query);
  return url;
}

export async function hubSpotRequest<T>(input: {
  url: URL;
  method: HubSpotHttpMethod;
  options: HubSpotTicketingClientOptions;
  fetch: typeof fetch;
  body?: HubSpotProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
}): Promise<T> {
  const requestBody = input.body === undefined ? undefined : JSON.stringify(input.body);
  const response = await input.fetch(input.url.toString(), {
    method: input.method,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${input.options.privateAppToken}`,
      ...(requestBody ? { "content-type": "application/json" } : {}),
      ...(input.headers ?? {}),
    },
    ...(requestBody ? { body: requestBody } : {}),
  });
  const text = await response.text();
  const parsedBody = text ? JSON.parse(text) as T & HubSpotErrorResponse : {} as T & HubSpotErrorResponse;
  if (!response.ok) {
    throw new Error(hubSpotErrorMessage(parsedBody, response.status));
  }
  return parsedBody as T;
}

function appendHubSpotQuery(params: URLSearchParams, query?: HubSpotProviderQuery) {
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value === undefined || value === null || value === "") continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined && item !== null && item !== "") params.append(key, String(item));
      }
      continue;
    }
    params.set(key, String(value));
  }
}

interface HubSpotErrorResponse {
  status?: string;
  message?: string;
  category?: string;
  errors?: Array<{ message?: string }>;
}

function hubSpotErrorMessage(body: HubSpotErrorResponse, status: number) {
  const nested = body.errors?.map((error) => error.message).filter(Boolean).join("; ");
  return body.message ?? nested ?? body.category ?? `HubSpot API returned ${status}.`;
}
