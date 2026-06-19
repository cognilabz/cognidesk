import type {
  GenesysCloudContactCenterClientOptions,
  GenesysCloudHttpMethod,
  GenesysCloudJsonObject,
  GenesysCloudProviderPayload,
  GenesysCloudProviderQuery,
} from "./contracts.js";

export async function genesysCloudRequest<T = GenesysCloudJsonObject>(input: {
  options: GenesysCloudContactCenterClientOptions;
  fetch: typeof fetch;
  method: GenesysCloudHttpMethod;
  path: string;
  query?: GenesysCloudProviderQuery | undefined;
  body?: GenesysCloudProviderPayload | undefined;
  contentType?: string | undefined;
  idempotencyKey?: string | undefined;
}): Promise<T> {
  const response = await input.fetch(providerUrl(input.options.apiBaseUrl, input.path, input.query), {
    method: input.method,
    headers: {
      accept: "application/json",
      ...(input.body ? { "content-type": input.contentType ?? "application/json" } : {}),
      ...(input.options.accessToken ? { authorization: `Bearer ${input.options.accessToken}` } : {}),
      ...(input.idempotencyKey ? { "idempotency-key": input.idempotencyKey } : {}),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  return parseProviderResponse<T>(response, "Genesys Cloud");
}

export function genesysCloudOpenMessagingRequest(input: {
  options: GenesysCloudContactCenterClientOptions;
  fetch: typeof fetch;
  integrationId: string;
  kind: "event" | "message" | "receipt";
  body: GenesysCloudProviderPayload;
  idempotencyKey?: string | undefined;
}) {
  if (!input.integrationId) {
    throw new Error("Genesys Cloud Open Messaging integrationId is required.");
  }
  return genesysCloudRequest({
    options: input.options,
    fetch: input.fetch,
    method: "POST",
    path: `/api/v2/conversations/messages/${encodeURIComponent(input.integrationId)}/inbound/open/${input.kind}`,
    body: input.body,
    idempotencyKey: input.idempotencyKey,
  });
}

export function genesysCloudOperationPath(
  pathTemplate: string,
  pathParams: Record<string, string | number | boolean | undefined>,
) {
  return pathTemplate.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams[key];
    if (value === undefined) throw new Error(`Missing Genesys Cloud path parameter '${key}'.`);
    return encodeURIComponent(String(value));
  });
}

function providerUrl(baseUrl: string, path: string, query?: GenesysCloudProviderQuery) {
  if (!baseUrl) throw new Error("Genesys Cloud apiBaseUrl is required.");
  const url = new URL(path, baseUrl.replace(/\/+$/, ""));
  appendGenesysCloudQuery(url.searchParams, query);
  return url.toString();
}

function appendGenesysCloudQuery(params: URLSearchParams, query?: GenesysCloudProviderQuery) {
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

async function parseProviderResponse<T = GenesysCloudJsonObject>(response: Response, provider: string): Promise<T> {
  const text = await response.text();
  const body = text ? JSON.parse(text) as GenesysCloudJsonObject : {};
  if (!response.ok) {
    throw new Error(typeof body.message === "string" ? body.message : `${provider} API returned ${response.status}.`);
  }
  return body as T;
}
